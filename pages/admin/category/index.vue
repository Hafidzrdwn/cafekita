<template>
  <div>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col-12">
          <h1 class="fw-bold">CafeKita Category Management</h1>
          <h4 class="text-secondary">Add, Edit, Delete</h4>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-12">
          <NuxtLink to="/admin/category/create" class="btn btn-outline-custom text-custom hover-custom">Add new category</NuxtLink>
          <table class="table table-striped table-hover mt-4" v-if="categories">
                  <thead class="table-dark">
                    <tr class="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Nama Kategori</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                    <tbody v-if="categories.length > 0">
                      <tr class="align-middle text-center" v-for="(category, index) in categories" :key="category.id">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ category.category }}
                        </td>
                        <td>
                          <NuxtLink :to="`/admin/category/${category.id}/edit`" class="btn btn-custom text-light hover-custom">Edit</NuxtLink>
                          <button type="button" @click="deleteCategory(category.id)" class="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr class="text-center">
                        <td colspan="3" class="w-100">
                          <h4 class="text-secondary">Tidak ada kategori</h4>
                        </td>
                      </tr>
                    </tbody>
                  <tfoot>
                    <tr class="table-dark text-center">
                      <th colspan="3">Jumlah Kategori : {{ categories.length }}</th>
                    </tr>
                  </tfoot>
          </table>
          <h2 class="text-center text-custom" v-else>
            Loading...
          </h2>
        </div>
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
      title: 'Admin | Category Management'
    }
  },
  data() {
    return {
      categories: null
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    async getCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select()

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.categories = data
      } 
    },
    deleteCategory(id) {
      this.$swal.fire({
        title: 'Apakah anda yakin?',
        text: "Anda tidak dapat mengembalikan data yang telah dihapus!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'Ya, hapus!',
        reverseButtons: true,
        allowOutsideClick: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id)
    
          if (error) {
            Toast.fire({
              icon: 'error',
              title: error.message
            })
          } else {
            Toast.fire({
              icon: 'success',
              title: 'Kategori berhasil dihapus',
              timer: 1200
            })
            this.getCategories()
          }
        }
      })
    }
  }
}
</script>

<style></style>