<template>
  <div id="signUpVerification" class="pt-5 pb-4">
    <div class="row justify-content-center">
      <div class="col-lg-8 p-4 shadow rounded">
        <h2 class="text-center fw-bold">Sign Up Verification</h2>
        <p class="text-center">Mohon Lengkapi Profil Anda.</p>
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
          <div class="d-flex gap-3">
            <button class="btn btn-danger w-100" type="button" @click.prevent="handleLogout">Logout</button>
            <button type="submit" class="btn btn-custom text-light hover-custom w-100">Simpan data</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import Toast from '~/plugins/toast'
export default {
  layout: 'auth',
  data() {
    return {
      user_data: {
        full_name: '',
        telp: '',
        gender: 'default',
        address: '',
        email: '',

      }
    }
  },
  head() {
    return {
      title: 'CafeKita | Sign up verification'
    }
  },
  async mounted() {
    const { data } = await this.$supabase.auth.getUser()
    const user = await data.user
    this.user_data.email = user.email
    this.user_data.full_name = user.user_metadata.fullname
  },
  methods: {
    async handleSubmit() {
      this.user_data.is_verified = true
      const { error } = await this.$supabase
        .from('users')
        .insert(this.user_data)

      if(error) {
        Toast.fire({
          icon: 'error',
          title: error.message
        })
      } else {
        this.$swal.fire({
          icon: 'success',
          title: 'Sign up Verification Completed',
          text: 'Silahkan tekan tombol untuk melanjutkan',
          confirmButtonText: 'Explore CafeKita',
        }).then(() => {
          this.$router.push('/')
        })
      }

    },
    async handleLogout() {
      const { value: accept } = await this.$swal.fire({
        icon: 'question',
        title: 'Apakah anda yakin?',
        text: 'Anda akan keluar dari akun ini',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#dc3545',
        reverseButtons: true,
        allowOutsideClick: false
      })

      // if user click logout
      if (accept) {
        const { error } = await this.$supabase.auth.signOut()
        if (error) {
          Toast.fire({
            icon: 'error',
            title: error.message
          })
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style></style>