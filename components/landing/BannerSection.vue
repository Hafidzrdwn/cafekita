<template>
  <div>
    <div class="row mb-5 pt-5 pb-2 border-bottom border-secondary">
      <div class="col">
        <h4 class="fw-bolder text-center text-secondary header-4">
          Galeri CafeKita
        </h4>
      </div>
    </div>
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
      <div class="col-lg-4 mt-4 small-banner" v-for="(label,key) in labels" :key="key">
        <img width="100%" :src="require(`~/assets/images/small-banner${key+1}.png`)" :alt="label" />
        <h5 class="banner-label text-light">{{ label }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ['Makanan', 'Minuman', 'Merchandise']
    }
  }
}
</script>

<style>

</style>