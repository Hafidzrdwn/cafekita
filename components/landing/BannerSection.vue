<template>
  <div id="banner">
    <div class="container">
      <SectionHeader title="Products and Spots" subtitle="The best choice for you" :is-dark="false" />
      <div class="row">
        <div class="col">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="carousel-item1"></div>
              </div>
              <div class="carousel-item">
                <div class="carousel-item2"></div>
              </div>
              <div class="carousel-item">
                <div class="carousel-item3"></div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- SMALL BANNER -->
      <div class="row justify-content-evenly mb-5">
        <div v-for="(label,key) in labels" :key="key" class="col-lg-4 mt-4 small-banner">
          <img width="100%" :src="require(`~/assets/images/small-banner${key+1}.png`)" :alt="label" />
          <h5 class="banner-label text-light">{{ label }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader.vue';
export default {
  components: {
    SectionHeader
  },
  data() {
    return {
      labels: ['Makanan', 'Minuman', 'Merchandise']
    }
  }
}
</script>

<style scoped>
#banner {
  padding: 75px 0;
}

</style>