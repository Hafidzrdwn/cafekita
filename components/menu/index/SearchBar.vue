<template>
  <div class="search-menu-container row justify-content-center align-items-center">
    <div class="col-lg-6 bg-white border rounded shadow-sm p-4">
      <h3 class="fw-bold mb-3 text-dark">Cari Menu Favoritmu</h3>
      <form @submit.prevent="$emit('search', keyword)">
        <div class="d-flex">
          <input type="text" class="form-control w-auto" placeholder="Ketikkan nama menu disini.." v-model="keyword" />
          <button type="submit" class="btn btn-custom ms-2 w-25 text-light hover-custom">Cari <i
              class="fas fa-search ms-1"></i></button>
          <button type="button" class="btn btn-danger ms-2 w-25" @click.prevent="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    reset() {
      this.keyword = ''
      this.$emit('reset', this.keyword)
    }
  }
}
</script>

<style></style>