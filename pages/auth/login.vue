<template>
  <div>
    <h1 class="fw-bold">Log In</h1>
    <p>Welcome Back! Enter your email and password to Log in.</p>
    <div class="navigations">
      <nav class="nav nav-pills nav-fill">
        <NuxtLink to="/auth/signup" class="nav-link">Sign up</NuxtLink>
        <NuxtLink to="/auth/login" class="nav-link active">Log in</NuxtLink>
      </nav>
    </div>
    <form @submit.prevent="handleLogin">
      <div class="form-group mb-3">
        <label for="email" class="form-label fw-bold">Email</label>
        <input type="email" class="form-control" id="email" placeholder="example@gmail.com" v-model="user_data.email" />
      </div>
      <div class="form-group mb-4">
        <label for="password" class="form-label fw-bold">Password</label>
        <input type="password" class="form-control" id="password" placeholder="******" v-model="user_data.password" />
      </div>
      <div class="form-info d-flex justify-content-between align-items-center">
        <small class="text-secondary">Belum punya akun? <NuxtLink to="/auth/signup">Sign up</NuxtLink></small>
        <button type="submit" class="btn btn-custom text-light hover-custom">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast'
export default {
  data() {
    return {
      user_data: {
        email: '',
        password: ''
      }
    }
  },
  head() {
    return {
      title: 'CafeKita | Log In'
    }
  },
  methods: {
    async handleLogin() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: this.user_data.email,
        password: this.user_data.password,
      })

      if (error) {
        this.inputValidation(error)
      } else {
        this.$swal.fire({
          icon: 'success',
          title: 'Log In Success',
          text: 'Selamat datang di CafeKita',
          confirmButtonText: 'Explore CafeKita',
        }).then(() => {
          localStorage.setItem('isLogin', true)
          localStorage.setItem('token', data.session.access_token)
          document.location.href = '/'
        })
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

<style></style>