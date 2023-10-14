<template>
  <div id="product">
    <SectionHeader title="Our Best Menu" subtitle="Highly rated recommended menu" :is-dark="false"> 
      <NuxtLink to="/menu" class="all-product btn btn-outline-custom text-custom hover-custom w-100">Semua menu &raquo;</NuxtLink>
    </SectionHeader>
    <div class="row justify-content-center align-items-center mt-2">
      <div v-for="menu in menus" :key="menu.id" class="col-lg-3">
        <div class="card card-menu shadow-sm">
          <img :src="menu.image" class="card-img-top" :alt="menu.nama" />
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="m-0 card-title fw-bold"> {{ menu.nama }} </h5>
              <div class="menu-rating">
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="m-0 mt-1 mb-3 text-secondary">Rp. {{ menu.harga }}</p>
            <p class="menu-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <a href="#" class="text-center card-link">Lihat Menu</a>
          </div>
        </div>
      </div>
    </div>
    <!-- END PRODUCT SECTION -->
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          nama: 'GULAI',
          harga: 15000,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png'
        },
        {
          id: 2,
          nama: 'PASTA',
          harga: 30500,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png'
        },
        {
          id: 3,
          nama: 'BURGER',
          harga: 27000,
          image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
        },
        {
          id: 4,
          nama: 'MIE GORENG',
          harga: 12000,
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80'
        },
      ]
    }
  }
}
</script>

<style scoped>
#product {
  padding: 90px 0 30px;
}
</style>