<template>
  <div>
    <div class="banner-image d-flex">
      <div class="image1"></div>
      <div class="image2"></div>
      <div class="image3"></div>
    </div>
    <div class="form-box row justify-content-center">
      <div class="col-lg-10 bg-white border p-4 rounded shadow">
        <h1 class="text-dark fw-bold text-center">Testimoni</h1>
        <p class="text-custom mb-3 text-center">
          Tell something about CafeKita to the public.
        </p>

        <form @submit.prevent="handleForm" class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="nama" class="form-label">Nama Lengkap</label>
              <input
                v-model="form.nama"
                type="text"
                class="form-control"
                id="nama"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div>
              <label for="option" class="form-label">Pilihan Testimoni</label>
              <select
                v-model="form.option"
                id="option"
                class="form-select"
                aria-label="Default select example"
              >
                <option value="semua">Semua</option>
                <option value="makanan">Makanan</option>
                <option value="minuman">Minuman</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="testimoni" class="form-label">Testimoni</label>
              <textarea
                v-model="form.testimoni"
                id="testimoni"
                class="form-control"
                placeholder="Ketikkan testimoni anda disini.."
              ></textarea>
            </div>
            <div class="form-check">
              <input
                v-model="form.hideName"
                type="checkbox"
                class="form-check-input"
                id="hideName"
              />
              <label class="form-check-label" for="hideName"
                >Sembunyikan nama anda</label
              >
            </div>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-custom text-white">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="container">
      <div class="row testimoni-list mt-5">
        <div v-for="(testimoni, key) in testimonials" :key="key" class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ (testimoni.hideName) ? "anonymous" : testimoni.nama }}</h5>
              <p>Kategori : <span class="badge bg-custom">{{ testimoni.option.toUpperCase() }}</span></p>
              <p class="card-text">
                {{ testimoni.testimoni }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nama: "",
        option: "semua",
        testimoni: "",
        hideName: false,
      },
      testimonials: [
        {
          nama: "Adi Rahmawan",
          option: "minuman",
          testimoni: "Enak dan murah banget minuman disini!",
          hideName: false,      
        }
      ]
    };
  },
  methods: {
    handleForm() {

      const data = {
        nama: this.form.nama,
        option: this.form.option,
        testimoni: this.form.testimoni,
        hideName: this.form.hideName,
      }

      if(this.form.nama !== "" && this.form.testimoni !== "") {
        this.testimonials.push(data)
        this.form.nama = ""
        this.form.option = "semua"
        this.form.testimoni = ""
        this.form.hideName = false
      }

    },
  }
};
</script>

<style scoped>
.banner-image {
  width: 100%;
  height: 275px;
  position: relative;
  z-index: -1;
}
.banner-image::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
.banner-image > div {
  width: 33.33%;
  height: 100%;
  background-size: cover;
}
.image1 {
  background: url("~/assets/images/gallery1.jpg") no-repeat center center;
}
.image2 {
  background: url("~/assets/images/gallery2.jpg") no-repeat center center;
}
.image3 {
  background: url("~/assets/images/gallery3.jpg") no-repeat center center;
}

.form-box {
  z-index: 10;
  margin-top: -120px;
}
</style>
