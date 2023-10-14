<template>
  <div id="editMenuContainer" class="pt-3 pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-6 p-4 shadow rounded">
        <div class="back-button">
          <NuxtLink to="/admin/category">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <h2 class="text-center fw-bold">Edit Category</h2>
        <form @submit.prevent="handleSubmit" class="profile-form mt-4">
          <div class="mb-3">
            <label for="name" class="form-label">Nama Kategori</label>
            <input type="text" class="form-control" id="name" v-model="category" />
          </div>
          <button class="btn btn-custom text-light hover-custom w-100" type="submit">Edit kategori</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast'
export default {
  layout: 'admin',
  head() {
    return {
      title: 'Admin | Edit Category'
    }
  },
  data() {
    return {
      category: '',
    }
  },
  mounted() {
    this.getSingleCategory()
  },
  methods: {
    async handleSubmit() {
      if (!this.category.trim()) {
        return Toast.fire({
          icon: 'error',
          title: 'Nama Kategori tidak boleh kosong'
        })
      }

      const { error } = await supabase
        .from('categories')
        .update({ category: this.category })
        .eq('id', this.$route.params.id)

        if (error) {
          Toast.fire({
            icon: 'error',
            title: error.message
          })
        } else {
          this.$swal.fire({
            icon: 'success',
            title: 'Category Edited Successfully',
            text: 'Berhasil mengedit kategori',
          }).then(() => {
            this.$router.push('/admin/category')
          })
        }
    },
    async getSingleCategory() {
      const { data, error } = await supabase
        .from('categories')
        .select()
        .eq('id', this.$route.params.id)
        .single()

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.category = data.category
      }
    }
  }
}
</script>

<style></style>