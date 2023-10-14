<template>
  <div>
    <h4 class="mb-3">Filter Menu</h4>
    <div class="mb-3">
      <p class="mb-2 fw-bold">Urutkan Berdasarkan</p>
      <select class="form-select" aria-label="Default select example" v-model="sortType" @change="handleChange">
        <option value="default" selected>Default</option>
        <option value="terbaru">Terbaru</option>
        <option value="harga_max">Harga Tertinggi</option>
        <option value="harga_min">Harga Terendah</option>
      </select>
    </div>
    <div class="mb-3">
      <p class="mb-2 fw-bold">Jenis Menu</p>
      <div v-if="categories">
        <div class="form-check form-check-inline mb-2" v-for="(category, index) in categories" :key="category.id">
          <input class="form-check-input" type="checkbox" :id="`jenisMenu${index+1}`" :value="category.id" @change="pushType">
          <label class="form-check-label" :for="`jenisMenu${index + 1}`">{{ category.category }}</label>
        </div>
      </div>
      <div v-else>
        <p class="text-secondary">Loading Categories...</p>
      </div>
    </div>
    <div class="mb-3">
      <p class="mb-2 fw-bold">Harga</p>
      <div class="input-group flex-nowrap mb-2">
        <span class="input-group-text" id="addon-wrapping1">Rp</span>
        <input type="text" class="form-control" placeholder="Harga Minimal" v-model="priceType.min" @keyup="handleChange(800)">
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping2">Rp</span>
        <input type="text" class="form-control" placeholder="Harga Maksimal" v-model="priceType.max" @keyup="handleChange(800)"> 
      </div>
    </div>
    <button class="btn btn-custom text-light hover-custom w-100" type="button" @click="handleResetFilter">Reset Filter</button>
  </div>
</template>

<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast'
export default {
  data() {
    return {
      sortType: 'default',
      categories: null,
      productType: [],
      priceType: {
        min: null,
        max: null
      },
      timer: null
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    async getCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.categories = data
      }
    },
    pushType(e) {
      if (e.target.checked) {
        this.productType.push(e.target.value)
      } else {
        this.productType = this.productType.filter(type => type !== e.target.value)
      }
      this.$emit('filter', {
        sortType: this.sortType,
        productType: this.productType,
        priceType: this.priceType
      })
    },
    handleResetFilter() {
      this.sortType = 'default'
      this.productType = []
      this.priceType = {
        min: null,
        max: null
      }
      this.$emit('filter', {
        sortType: this.sortType,
        productType: this.productType,
        priceType: this.priceType
      })
    },
    handleChange(ms = 0) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.$emit('filter', {
          sortType: this.sortType,
          productType: this.productType,
          priceType: this.priceType
        })
      }, ms);
    }
  }
}
</script>

<style scoped>

</style>