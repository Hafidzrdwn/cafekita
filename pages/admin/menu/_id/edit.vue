<template>
  <div id="editMenuContainer" class="pt-3 pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 p-4 shadow rounded">
        <div class="back-button">
          <NuxtLink to="/admin/menu">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <h2 class="text-center fw-bold">Edit Menu</h2>
        <form @submit.prevent="handleSubmit" class="profile-form mt-4">
          <div class="mb-3 row">
            <div class="col-6 p-0">
              <label for="name" class="form-label">Nama Menu</label>
              <input type="text" class="form-control" id="name" v-model="menu.name" />
            </div>
            <div class="col-6">
              <label for="desc" class="form-label">Deskripsi Menu</label>
              <textarea id="desc" class="form-control" v-model="menu.desc"></textarea>
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-6 p-0">
              <label for="gender" class="form-label">Kategori</label>
              <select id="gender" class="form-select" aria-label="Default select example" v-model="menu.category_id">
                <option disabled value="default">Pilih kategori</option>
                <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.category }}
                </option>
              </select>
            </div>
            <div class="col-6">
              <label for="price" class="form-label">Harga</label>
              <input type="number" min="0" class="form-control" id="price" v-model="menu.price" />
            </div>
          </div>
          <div class="mb-4">
            <label for="image" class="form-label">Gambar Menu</label>
            <img :src="imageMenuURL" width="200" alt="image menu review" class="img-thumbnail d-block mb-2" v-if="imageMenuURL">
            <input class="form-control" type="file" id="image" @change="onFileUploaded">
          </div>
          <button class="btn btn-custom text-light hover-custom w-100" type="submit">Edit menu</button>
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
      title: 'Admin | Edit Menu'
    }
  },
  data() {
    return {
      categories: null,
      menu: {
        name: '',
        desc: '',
        category_id: 'default',
        price: '',
      },
      imageMenu: null,
      imageMenuURL: null,
      oldImage: null
    }
  },
  mounted() {
    this.getCategories()
    this.getSingleMenu()
  },
  methods: {
    onFileUploaded(e) {
      this.imageMenu = e.target.files[0]
      this.imageMenuURL = URL.createObjectURL(this.imageMenu)
    },
    async handleSubmit() {
      if (this.imageMenu && !this.imageMenu.name.split('.').pop().match(/(jpg|jpeg|png)$/)) {
        Toast.fire({
          icon: 'error',
          title: 'Gambar menu harus berformat jpg, jpeg, atau png',
          timer: 3000
        })
        return
      }

      // jika user mengupload image baru
      if (this.imageMenu) {

        const oldImageData = this.oldImage.split('MenuImages/').pop()
        // hapus image lama
        await supabase
          .storage
          .from('MenuImages')
          .remove([oldImageData])

        // upload image baru
        const { data, error } = await supabase
          .storage
          .from('MenuImages')
          .upload(`public/${this.imageMenu.name}`, this.imageMenu, {
            cacheControl: '3600',
            upsert: false,
          })

        if (error) {
          Toast.fire({
            icon: 'error',
            title: error.message
          })
        } else {

          const res = supabase
            .storage
            .from('MenuImages')
            .getPublicUrl(data.path).data.publicUrl
          this.menu.image = res
        }
      }

      const { error } = await supabase
        .from('menus')
        .update(this.menu)
        .eq('id', this.$route.params.id)

        if (error) {
          this.inputValidation(error)
        } else {
          this.$swal.fire({
            icon: 'success',
            title: 'Menu Edited Successfully',
            text: 'Berhasil mengedit menu',
          }).then(() => {
            this.$router.push('/admin/menu')
          })
        }
    },
    async getSingleMenu() {
      const { data, error } = await supabase
        .from('menus')
        .select()
        .eq('id', this.$route.params.id)
        .single()

      if (error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.menu.name = data.name
        this.menu.desc = data.desc
        this.menu.category_id = data.category_id
        this.menu.price = data.price
        this.imageMenuURL = data.image
        this.oldImage = data.image
      }
    },
    async getCategories() {
      const { data } = await supabase
        .from('categories')
        .select()

      this.categories = data
    },
    inputValidation(err) {
      if (!this.menu.name.trim()) {
        Toast.fire({
          icon: 'error',
          title: 'Nama Menu tidak boleh kosong'
        })
      } else if (this.menu.category_id === 'default') {
        Toast.fire({
          icon: 'error',
          title: 'Kategori harus dipilih'
        })
      } else if (!this.menu.price || this.menu.price <= 0) {
        Toast.fire({
          icon: 'error',
          title: 'Harga tidak boleh kosong dan harus lebih dari 0'
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: err.message
        })
      }
    }
  }
}
</script>

<style></style>