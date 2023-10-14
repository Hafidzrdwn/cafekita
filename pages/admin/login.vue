<template>
  <div id="adminLogin">
    <div class="form-container shadow border rounded p-4">
        <div class="brand-logo text-center fs-4 fw-bold text-custom">
            <img src="~/assets/images/nav-logo.svg" alt="" width="34" height="30"
              class="d-inline-block align-text-top" />CafeKita
        </div>
        <form class="mt-3" @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label fw-bold">Email</label>
            <input type="email" class="form-control" id="email" v-model="user_data.email"/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label fw-bold">Password</label>
            <input type="password" class="form-control" id="password" v-model="user_data.password"/>
          </div>
          <button type="submit" class="btn btn-custom text-light hover-custom w-100">Login</button>
          <p class="text-center m-0 mt-2"><NuxtLink to="/auth/login" class="text-custom">Back to client</NuxtLink></p>
        </form>
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
      title: 'Admin Login'
    }
  },
  data() {
    return {
      user_data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: this.user_data.email,
        password: this.user_data.password,
      })

      const loginData = data
      if (error) {
        this.inputValidation(error)
      } else {
        const { data } = await supabase
          .from('users')
          .select('role')
          .eq('email', this.user_data.email)
          .single()

        if (data.role) {
          this.$swal.fire({
            icon: 'success',
            title: 'Log In Success',
            text: 'Selamat datang Admin',
          }).then(() => {
            localStorage.setItem('isLogin', true)
            localStorage.setItem('token', loginData.session.access_token)
            document.location.href = '/admin'
          })
        } else {
          this.$swal.fire({
            icon: 'error',
            title: 'Log In Failed',
            text: 'Anda tidak memiliki akses ke halaman ini',
          }).then(() => {
            document.location.href = '/'
          })
        }
      }
    },
    inputValidation(err) {
      if (!this.user_data.email.trim()) {
        Toast.fire({
          icon: 'error',
          title: 'Email tidak valid'
        })
      } else if (!this.user_data.password.trim() || this.user_data.password.trim().length < 6) {
        Toast.fire({
          icon: 'error',
          title: 'Password harus diisi minimal 6 karakter'
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: err.message
        })
      }

      this.user_data = {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
}
</style>