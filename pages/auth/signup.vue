<template>
  <div>
    <h1 class="fw-bold">Sign Up</h1>
    <p>Create your account and Enjoy our features.</p>
    <div class="navigations">
      <nav class="nav nav-pills nav-fill">
        <NuxtLink to="/auth/signup" class="nav-link active">Sign up</NuxtLink>
        <NuxtLink to="/auth/login" class="nav-link">Log in</NuxtLink>
      </nav>
    </div>
    <form @submit.prevent="handleSignUp">
      <div class="form-group mb-3">
        <label for="fullname" class="form-label fw-bold">Nama Lengkap</label>
        <input type="text" class="form-control" id="fullname" placeholder="John Doe" v-model="user_data.fullname" />
      </div>
      <div class="form-group mb-3">
        <label for="email" class="form-label fw-bold">Email</label>
        <input type="email" class="form-control" id="email" placeholder="example@gmail.com" v-model="user_data.email" />
      </div>
      <div class="form-group mb-4">
        <label for="password" class="form-label fw-bold">Password</label>
        <input type="password" class="form-control" id="password" placeholder="******" v-model="user_data.password" />
      </div>
      <div class="form-info d-flex justify-content-between align-items-center">
        <small class="text-secondary">Sudah mempunyai akun? <NuxtLink to="/auth/login">Log in</NuxtLink></small>
        <button type="submit" class="btn btn-custom text-light hover-custom">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast.js'
export default {
  data() {
    return {
      user_data: {
        fullname: '',
        email: '',
        password: ''
      }
    }
  },
  head() {
    return {
      title: 'CafeKita | Sign up'
    }
  },
  methods: {
    async handleSignUp() {
      const { data, error } = await supabase.auth.signUp({
        email: this.user_data.email,
        password: this.user_data.password,
        options: {
          data: {
            fullname: this.user_data.fullname
          }
        }
      })
      if (error) {
        this.inputValidation(error)
      } else {
        this.$swal.fire({
          icon: 'success',
          title: 'Sign Up Success',
          text: 'Mohon lengkapi data diri anda untuk melanjutkan',
        }).then(() => {
          localStorage.setItem('isLogin', true)
          localStorage.setItem('token', data.session.access_token)
          this.$router.push('/verify')
        })
      }
    },
    inputValidation(err) {
      if (!this.user_data.fullname.trim() || this.user_data.fullname.trim().length < 4) {
        Toast.fire({
          icon: 'error',
          title: 'Nama lengkap harus diisi minimal 4 karakter'
        })
      } else if (!this.user_data.email.trim()) {
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
        fullname: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style></style>