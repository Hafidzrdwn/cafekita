<template>
  <div id="about" class="bg-dark">
    <!-- ABOUT SECTION -->
    <div class="container">
      <SectionHeader title="Tentang Kami" subtitle="Tak kenal maka tak sayang" />
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6">
          <img src="~/assets/images/about-img.jpg" class="rounded w-100 mb-4" alt="">
        </div>
        <div class="col-lg-6">
          <div class="logo text-custom fs-4 fw-bold">
            <img src="~/assets/images/nav-logo.svg" alt="" width="30" height="28" class="d-inline-block align-text-top" />
            CafeKita
          </div>
          <h5 class="mt-3 mb-2 text-white fw-bold">Sejak 10 Maret 2022.</h5>
          <p class="text-white">CafeKita, cafe yang dirancang dengan cinta dan kreativitas, menjadi tempat ideal bagi berbagai generasi, khususnya para milenial yang sering merasakan galau. Suasana hangat dan penuh semangat kami menyuguhkan tempat yang sempurna untuk berkumpul, bekerja, atau hanya merenung mencari inspirasi.</p>
          <div class="info mt-4">
            <h5><i class="fas fa-map-marker-alt me-1 text-custom"></i> <a href="https://maps.app.goo.gl/23L3GBoshEH7f85N9" target="_blank" class="text-custom text-decoration-underline">Jalan Siwalankerto 1 25-A, Surabaya, Indonesia</a></h5>
            <div class="row box-info mt-3">
              <div class="col-6">
                <h4>Senin - Sabtu</h4>
                <h6>08.00 - 23.00</h6>
              </div>
              <div class="col-6">
                <h4>Minggu</h4>
                <h6>10.00 - 21.00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
export default {
  name: 'AboutSection',
  components: {
    SectionHeader
  },
}
</script>

<style scoped>
#about {
  padding: 75px 0;
}

.box-info {
  color: #42c7c1;
  border-radius: 10px;
  padding: 12px 0;
  text-align: center;
} 
.box-info > div:nth-child(1) {
  border-right: 3px solid #42c7c1; 
}
</style>