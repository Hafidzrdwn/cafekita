<template>
  <div>
    <Jumbotron />
    <div class="container">
      <AboutSection />
      <BannerSection />
      <ProductSection />
    </div>
  </div>
</template>

<script>
import Jumbotron from '@/components/landing/Jumbotron.vue'
import AboutSection from '@/components/landing/AboutSection.vue'
import BannerSection from '@/components/landing/BannerSection.vue'
import ProductSection from '@/components/landing/ProductSection.vue'

export default {
  components: {
    Jumbotron,
    AboutSection,
    BannerSection,
    ProductSection
  },
  head() {
    return {
      title: 'CafeKita | Modern Artistic Cafe in Surabaya'
    }
  }
}
</script>