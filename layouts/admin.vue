<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3">
      <div class="container">
        <NuxtLink class="navbar-brand fs-4 fw-bold" to="/admin">
          <img src="~/assets/images/nav-logo.svg" alt="" width="30" height="28" class="d-inline-block align-text-top" />
          CafeKita Admin
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-4">
            <li class="nav-item">
              <NuxtLink to="/admin/menu" :class="{ 'nav-link': true, 'active': $route.path === '/admin/menu' }">Menu Management</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/admin/category" :class="{ 'nav-link': true, 'active': $route.path === '/admin/category' }">Category Management</NuxtLink>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto d-flex align-items-center">
            <li class="nav-item" v-if="!user">
              <NuxtLink to="/admin/login" class="btn btn-uppercase btn-custom">Log in</NuxtLink>
            </li>
            <li class="nav-item" v-if="user">
              <button type="button" class="btn btn-danger" @click="handleLogout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-5 pt-5">
      <Nuxt />
    </div>
  </div>
</template>
<style></style>
<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast.js'
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    this.checkUser()
  },
  methods: {
    async handleLogout() {

      // make confirm box with sweetalert2
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

      if (accept) {
        const { error } = await supabase.auth.signOut();

        if (error) {
          Toast.fire({
            icon: 'error',
            title: error.message
          })
        } else {
          localStorage.clear()
          this.$swal.fire({
            icon: 'success',
            title: 'Anda Berhasil Logout',
          }).then(() => {
            this.checkUser()
            document.location.href = '/admin/login'
          })
        }
      }
    },
    async checkUser() {
      const { data } = await supabase.auth.getUser();
      this.user = data.user;
    }
  }
}
</script>

