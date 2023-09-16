<template>
  <div>
    <Navbar />
    <div class="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<style>
.content {
  min-height: 40vh;
  margin-top: 78px !important;
}
</style>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  layouts: {
    Navbar,
    Footer
  }
}
</script>
