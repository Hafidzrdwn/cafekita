<template>
  <div class="menuJumbotron w-100 bg-dark">
    <div class="row justify-content-center align-items-center py-5">
      <div class="col-lg-6">
        <div id="bestMenuCarousel" class="carousel slide carousel-fade rounded" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(data, idx) in datas" :key="data.id" :class="{ 'carousel-item': true, 'active': idx === active }">
              <div :class="`carousel-item${idx+1}`" :style="{background: `url('${data.image}')`}"></div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#bestMenuCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#bestMenuCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-lg-5">
        <h1 class="fw-bold text-custom">CafeKita Best Menu</h1>
        <p class="text-light fs-5">
          CafeKita menyajikan menu menu spesial favorit masyarakat Indonesia.
        </p>
        <a href="#allmenu" class="btn btn-custom">Telusuri menu <i class="fas fa-angle-down ms-1"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          id: 1,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png'
        },
        {
          id: 2,
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80'
        },
      ],
      active: 0
    }
  },
}
</script>

<style scoped>
#bestMenuCarousel.carousel {
  height: 350px !important;
}

#bestMenuCarousel .carousel-inner {
  border-radius: 10px;
}

/* Special for menu jumbotron */
#bestMenuCarousel .carousel-item .carousel-item1,
#bestMenuCarousel .carousel-item .carousel-item2,
#bestMenuCarousel .carousel-item .carousel-item3,
#bestMenuCarousel .carousel-item .carousel-item4 {
  width: 100%;
  height: 350px !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}
</style>