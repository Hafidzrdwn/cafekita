<template>
  <div>
    <div class="container">
      <div class="row pt-5 align-items-center">
        <div class="col-lg-6">
          <img :src="singleMenu.image" alt="Image Menu" class="rounded w-100">
        </div>
        <div class="col-lg-6"> 
          <h3 class="font-monospace">{{ singleMenu.name }}</h3>
          <p class="text-secondary">Harga : Rp. {{ singleMenu.price }}</p>
          <p class="text-secondary">Kategori : <span class="badge badge-banner">{{ (singleMenu.category === 1) ? 'Makanan' : 'Minuman' }}</span></p>
          <p class="text-secondary">Deskripsi : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium nihil eum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores rem ipsa omnis vel deleniti aliquid dolores perferendis impedit sed totam, laboriosam quod nam fugit alias odit possimus pariatur delectus officiis.</p>
          <NuxtLink to="/menu" class="btn btn-custom text-white">Kembali</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          id: 1,
          name: 'GULAI',
          category: 1,
          price: 15000,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png',
        },
        {
          id: 2,
          name: 'ANEKA JUS',
          category: 2,
          price: 6000,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png',
        },
        {
          id: 3,
          name: 'KOPI',
          category: 2,
          price: 5000,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png',
        },
        {
          id: 4,
          name: 'PASTA',
          category: 1,
          price: 30500,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png',
        },
        {
          id: 5,
          name: 'BURGER',
          category: 1,
          price: 27000,
          image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        },
        {
          id: 6,
          name: 'LEMON TEA',
          category: 2,
          price: 5000,
          image: 'https://images.unsplash.com/photo-1599390719613-912787a6e65a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        },
        {
          id: 7,
          name: 'MIE GORENG',
          category: 1,
          price: 12000,
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80',
        },
        {
          id: 8,
          name: 'MILKSHAKE',
          category: 2,
          price: 9500,
          image: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
          id: 9,
          name: 'AYAM GORENG',
          category: 1,
          price: 7500,
          image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        },
        {
          id: 10,
          name: 'NASI GORENG',
          category: 1,
          price: 12000,
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80',
        },
        {
          id: 11,
          name: 'GREEN TEA',
          category: 2,
          price: 6000,
          image: 'https://images.unsplash.com/photo-1606377695906-236fdfcef767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        },
        {
          id: 12,
          name: 'SATE',
          category: 1,
          price: 12000,
          image: 'https://cdn.pixabay.com/photo/2016/09/14/20/51/sate-1670437_1280.jpg',
        },
      ],
    }
  },
  computed: {
    singleMenu() {
      return this.menus.find(menu => menu.id === parseInt(this.$route.params.id))
    }
  }
}
</script>

<style>

</style>