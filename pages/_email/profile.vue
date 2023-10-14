<template>
  <div id="userProfileContainer" class="pt-5 pb-4">

    <div class="row justify-content-center">
      <div class="col-lg-8 p-4 shadow rounded">
        <div class="back-button">
          <NuxtLink to="/">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <h2 class="text-center fw-bold" v-if="user">Profil {{ user.full_name }}</h2>
        <p class="text-center">Profil akan digunakan untuk detail transaksi (Edit dan Simpan dengan benar).</p>
        <form @submit.prevent="handleSubmit" class="profile-form mt-4">
          <div class="mb-3 row">
            <div class="col-6 p-0">
              <label for="fullname" class="form-label">Nama Lengkap</label>
              <input type="text" class="form-control" id="fullname" placeholder="John Doe" v-model="user_data.full_name" />
            </div>
            <div class="col-6">
              <label for="telp" class="form-label">No Telp</label>
              <input type="number" class="form-control" id="telp" placeholder="08219674201" v-model="user_data.telp" />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-6 p-0">
              <label for="gender" class="form-label">Jenis Kelamin</label>
              <select id="gender" class="form-select" aria-label="Default select example" v-model="user_data.gender">
                <option disabled value="default">Pilih jenis kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div class="col-6">
              <label for="address" class="form-label">Alamat</label>
              <input type="text" class="form-control" id="address" placeholder="Surabaya, Jawa Timur, Indonesia" v-model="user_data.address" />
            </div>
          </div>
          <div class="mb-4">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" placeholder="example@gmail.com" readonly v-model="user_data.email" />
          </div>
          <button class="btn btn-custom text-light hover-custom w-100" type="submit">Simpan</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast'
export default {
  head() {
    return {
      title: 'CafeKita | Profil saya'
    }
  },
  data() {
    return {
      user: null,
      user_data: {
        full_name: '',
        telp: '',
        gender: 'default',
        address: '',
        email: ''
      }
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async handleSubmit() {
      const { error } = await supabase
        .from('users')
        .update(this.user_data)
        .eq('id', this.user.id)

      if (error) {
        this.inputValidation(error)
      } else {
        this.$swal.fire({
          icon: 'success',
          title: 'Edit Profile Success',
          text: 'Anda berhasil mengedit profil',
        }).then(() => {
          this.getUser()
        })
      }
    },
    async getUser() {
      const { data } = await supabase
        .from('users')
        .select()
        .eq('email', this.$route.params.email)
        .single()
      this.user = data
      this.user_data = {
        full_name: data.full_name,
        telp: data.telp,
        gender: data.gender,
        address: data.address,
        email: data.email
      }
    },
    inputValidation(err) {
      if (!this.user_data.full_name.trim() || this.user_data.full_name.trim().length < 4) {
        Toast.fire({
          icon: 'error',
          title: 'Nama lengkap harus diisi minimal 4 karakter'
        })
      } else if (!this.user_data.telp.trim()) {
        Toast.fire({
          icon: 'error',
          title: 'No telp tidak valid'
        })
      } else if (!this.user_data.address.trim()) {
        Toast.fire({
          icon: 'error',
          title: 'Alamat tidak valid'
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