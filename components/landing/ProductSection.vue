<template>
  <div>
    <!-- PRODUCT SECTION -->
    <div id="product" class="row mb-5 pb-2 border-bottom border-secondary">
      <div class="col">
        <h4 class="fw-bolder text-secondary header-4">Menu CafeKita</h4>
      </div>
    </div>
    <div class="row">
      <div v-for="menu in menus" :key="menu.id" class="col-lg-3 mt-2">
        <div class="card shadow-sm mb-4 text-center">
          <img :src="menu.image" class="card-img-top" :alt="menu.nama" />
          <div class="card-body">
            <h5 class="card-title"> {{ menu.nama }} </h5>
            <h6 class="card-subtitle my-3 text-secondary">Rp. {{ menu.harga }}</h6>
            <a href="#" class="card-link">Lihat Produk</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center text-center mt-4 mb-5">
      <div class="col-5">
        <NuxtLink to="/menu" class="all-product btn btn-outline-custom w-100">Menu Lainnya</NuxtLink>
      </div>
    </div>
    <!-- END PRODUCT SECTION -->
  </div>
</template>

<script>
export default {
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

<style>

</style>