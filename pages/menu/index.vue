<template>
  <div id="indexOfMenu">
    <JumbotronMenu />
    <SearchBar @search="handleSearch" @reset="handleResetSearch" />
    <div id="allmenu" class="menus-container mt-5 pt-4 px-0 container">
      <div class="row justify-content-center align-items-start">
        <div class="col-lg-3 p-3 border rounded shadow-sm left-box">
          <FilterMenu @filter="handleFilter" ref="filterComponent" />
        </div>
        <div class="col-lg-9 ps-4 pe-0 right-box">
          <h3>"{{ searchKeyword }}"</h3>
          <p class="text-secondary mb-4" v-if="menus && menus.length > 0">Menampilkan {{ rangeLength }} menu dari total {{
            allMenuLenght }} menu.</p>
          <p class="text-secondary mb-4" v-else>Menampilkan 0 menu.</p>
          <div v-if="menus && !loading">
            <div class="row" v-if="menus.length > 0">
              <div v-for="menu in menus" :key="menu.id" class="col-4">
                <div class="card shadow-sm mb-4 position-relative overflow-hidden">
                  <img :src="menu.image" alt="image menu" class="card-img-top">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h5 class="m-0 card-title fw-bold"> {{ (menu.name.length > 13) ? menu.name.slice(0, 13 - 3) + '...'
                        : menu.name }} </h5>
                      <span class="badge bg-custom">{{ menu.categories.category }}</span>
                    </div>
                    <p class="m-0 mt-1 mb-3 text-secondary">{{ $rupiah(menu.price, { floatingPoint: 0 }) }}</p>
                    <NuxtLink :to="`/menu/${menu.id}`" class="btn btn-outline-custom text-custom hover-custom w-100">
                      <i class="fas fa-info-circle me-1"></i>Detail Menu
                    </NuxtLink>
                    <div class="add-to-cart mt-2 mb-3">
                      <button class="btn btn-custom w-100 text-light hover-custom">
                        <i class="fas fa-shopping-cart me-2"></i>Tambah Pesanan
                      </button>
                    </div>
                    <div class="menu-small-information text-center">
                      <p class="small text-secondary m-0">{{ menu.released_date.split('-').shift() }} | 200+ Terjual</p>
                    </div>
                  </div>
                  <div class="best-menu-badge position-absolute">
                    <i class="fas fa-star text-light fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5" v-else>
              <div class="col-12 text-center">
                <h4 class="text-secondary">Menu Sedang Kosong.</h4>
              </div>
            </div>
          </div>
          <div v-else-if="menus && loading">
            <div class="row">
              <div class="col-4 text-center" v-for="index in this.menus.length" :key="index">
                <div class="card shadow-sm mb-4" aria-hidden="true">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                  <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between placeholder-glow mb-3">
                      <span class="placeholder col-6"></span>
                      <span class="placeholder col-4"></span>
                    </h5>
                    <p class="card-text placeholder-glow d-flex">
                      <span class="placeholder col-4"></span>
                    </p>
                    <a class="btn btn-custom disabled placeholder col-12 mb-2" aria-disabled="true"></a>
                    <a class="btn btn-custom disabled placeholder col-12" aria-disabled="true"></a>
                    <p class="card-text placeholder-glow mt-2">
                      <span class="placeholder col-5"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="row mt-5">
              <div class="col-12 text-center">
                <h4 class="text-custom">Loading All Menu...</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumbotronMenu from "~/components/menu/index/JumbotronMenu.vue";
import SearchBar from "~/components/menu/index/SearchBar.vue";
import FilterMenu from "~/components/menu/index/FilterMenu.vue";

import { supabase } from '~/plugins/supabase.client';
import Toast from '~/plugins/toast';

export default {
  components: {
    JumbotronMenu, SearchBar, FilterMenu
  },
  data() {
    return {
      menus: null,
      allMenuLenght: 0,
      keyword: '',
      loading: false,
      highestPrice: 0,
      listOfCategoryId: []
    };
  },
  head() {
    return {
      title: "CafeKita | All Menu",
    };
  },
  mounted() {
    this.getMenus('fetch')
  },
  methods: {
    async getMenus(type = 'fetch') {
      const { data, error } = await supabase
        .from('menus')
        .select(`
          *,
          categories (
            category
          )
        `)

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        if (type === 'fetch') {
          this.menus = data
        }

        this.allMenuLenght = data.length
        this.highestPrice = Math.max(...data.map(menu => menu.price))
        this.listOfCategoryId = [...new Set(data.map(menu => menu.category_id))]
      }
    },
    async handleSearch(keyword) {
      this.keyword = keyword.trim()
      this.loading = true
      const { data, error } = await supabase
        .from('menus')
        .select(`
          *,
          categories (
            category
          )
        `)
        .ilike('name', `%${this.keyword}%`)

      this.callFilter()

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.menus = data
        this.getMenus('count')
        this.loading = false
      }
    },
    handleResetSearch() {
      this.keyword = ''
      this.handleSearch(this.keyword)
    },
    async handleFilter({ sortType, productType, priceType }) {
      const priceMin = (priceType.min) ? priceType.min : 0
      const priceMax = (priceType.max) ? priceType.max : this.highestPrice
      const arrayProductType = (productType.length > 0) ? productType : this.listOfCategoryId

      console.log(priceMin)
      this.loading = true
      const { data, error } = await supabase
        .from('menus')
        .select(`
          *,
          categories (
            category
          )
        `)
        .ilike('name', `%${this.keyword}%`)
        .in('category_id', arrayProductType)
        .gte('price', priceMin)
        .lte('price', priceMax)
        .order(this.sortFilter(sortType).column, this.sortFilter(sortType).order)

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.menus = data
        this.getMenus('count')
        this.loading = false
      }

    },
    callFilter() {
      this.handleFilter({
        sortType: this.$refs.filterComponent.sortType,
        productType: this.$refs.filterComponent.productType,
        priceType: this.$refs.filterComponent.priceType
      })
    },
    sortFilter(type) {
      switch (type.toLowerCase()) {
        case 'default':
          return {
            column: 'created_at',
            order: {
              ascending: true,
            }
          }
        case 'terbaru':
          return {
            column: 'created_at',
            order: {
              ascending: false,
            }
          }
        case 'harga_max':
          return {
            column: 'price',
            order: {
              ascending: false,
            }
          }
        case 'harga_min':
          return {
            column: 'price',
            order: {
              ascending: true,
            }
          }
      }
    }
  },

  computed: {
    rangeLength() {
      if (this.menus.length > 1) {
        return '1 - ' + this.menus.length
      }

      return this.menus.length
    },
    searchKeyword() {
      return (this.keyword.trim()) ? this.keyword : 'Semua Menu'
    }
  }
};
</script>

<style></style>
