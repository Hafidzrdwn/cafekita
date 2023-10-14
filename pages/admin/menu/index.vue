<template>
  <div>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col-12">
          <h1 class="fw-bold">CafeKita Menu Management</h1>
          <h4 class="text-secondary">Add, Edit, Delete</h4>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-12">
          <NuxtLink to="/admin/menu/create" class="btn btn-outline-custom text-custom hover-custom">Add new menu</NuxtLink>
          <table class="table table-striped table-hover mt-4" v-if="menus">
                  <thead class="table-dark">
                    <tr class="text-center">
                      <th class="col-5" scope="col">Produk</th>
                      <th class="col-2" scope="col">Harga Satuan</th>
                      <th class="col-1" scope="col">Kategori</th>
                      <th class="col-2" scope="col">Aksi</th>
                    </tr>
                  </thead>
                    <tbody v-if="menus.length > 0">
                      <tr class="align-middle" v-for="menu in menus" :key="menu.id">
                        <td>
                          <div class="row align-items-center">
                            <div class="col-4">
                              <img
                                :src="menu.image"
                                alt="foto produk" class="w-100 img-thumbnail">
                            </div>
                            <div class="col-7">
                              <h5 class="fw-bold m-0">{{ menu.name }}</h5>
                              <p class="m-0 mt-2">Deskripsi :</p>
                              <p class="m-0 small text-secondary">{{  menu.desc }}</p>
                              <p class="m-0 mt-1">Tanggal Rilis :</p>
                              <p class="small text-secondary">{{ menu.released_date }}</p>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          Rp. {{ menu.price }}
                        </td>
                        <td class="text-center">
                          {{ menu.categories.category }}
                        </td>
                        <td class="text-center">
                          <NuxtLink :to="`/admin/menu/${menu.id}/edit`" class="btn btn-custom text-light hover-custom">Edit</NuxtLink>
                          <button type="button" @click="deleteMenu(menu.id, menu.image)" class="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr class="text-center">
                        <td colspan="4" class="w-100">
                          <h4 class="text-secondary">Tidak ada produk</h4>
                        </td>
                      </tr>
                    </tbody>
                  <tfoot>
                    <tr class="table-dark text-center">
                      <th colspan="4">Jumlah Produk : {{ menus.length }}</th>
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
      title: 'Admin | Menu Management'
    }
  },
  data() {
    return {
      menus: null
    }
  },
  mounted() {
    this.getMenus()
  },
  methods: {
    async getMenus() {
      const { data, error } = await supabase
        .from('menus')
        .select(`
          *,
          categories (
            category
          )
        `)

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.menus = data
      } 
    },
    deleteMenu(id, img) {
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

          await supabase
            .storage
            .from('MenuImages')
            .remove([img.split('MenuImages/').pop()])

          const { error } = await supabase
            .from('menus')
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
              title: 'Menu berhasil dihapus',
              timer: 1200
            })
            this.getMenus()
          }
        }
      })
    }
  }
}
</script>

<style></style>