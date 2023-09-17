<template>
  <!-- JUMBOTRON -->
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="text-jumbotron text-light">
        the key of <span class="text-custom">happiness</span> <br />
        and <span class="text-custom">peace</span> together
      </h1>
      <p class="text-description mt-3">
        Sayangi perutmu terlebih dahulu, singkirkan semua masalah <br />hidup
        sejenak dan berdamai bersama kami.
      </p>
      <a href="#product" class="btn btn-custom">Order sekarang</a>
      <button type="button" class="btn btn-outline-custom ms-2" @click="handleScrollTo('about')">Tentang kami</button>
    </div>
  </div>
  <!-- END JUMBOTRON -->
</template>

<script>
export default {
  name: 'Jumbotron',
  methods: {
    handleScrollTo(id) {
      window.scrollTo({
        top: document.getElementById(id).offsetTop - 5,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.text-jumbotron {
  font-weight: 700;
}
.text-description {
  font-size: 1.2rem;
  color: #fff;
}
</style>