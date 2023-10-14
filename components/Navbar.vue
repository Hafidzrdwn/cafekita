<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container">
      <NuxtLink class="navbar-brand fs-4 fw-bold" to="/">
        <img src="~/assets/images/nav-logo.svg" alt="" width="30" height="28" class="d-inline-block align-text-top" />
        CafeKita
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-4">
          <li class="nav-item">
            <NuxtLink to="/" :class="{ 'nav-link': true, 'active': $route.path === '/' }">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/menu" :class="{ 'nav-link': true, 'active': $route.path === '/menu' }">Menu</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/gallery" :class="{ 'nav-link': true, 'active': $route.path === '/gallery' }">Gallery</NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto d-flex align-items-center">
          <li class="nav-item me-3" v-if="!user">
            <NuxtLink to="/auth/signup" class="btn btn-uppercase btn-outline-custom">Sign up</NuxtLink>
          </li>
          <li class="nav-item" v-if="!user">
            <NuxtLink to="/auth/login" class="btn btn-uppercase btn-custom">Log in</NuxtLink>
          </li>
          <li class="nav-item nav-cart position-relative" v-if="user">
            <NuxtLink to="/cart">
                <i class="fas fa-shopping-cart text-custom"></i>
              </NuxtLink>
              <span class="badge position-absolute badge-cart text-custom rounded">1</span>
          </li>
          <li class="nav-item" v-if="user">
            <div class="dropdown-center">
              <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="~/assets/images/default.jpg" class="rounded-circle" width="40" alt="profile picture">
                    <i class="fas fa-sort-down text-custom ms-1"></i>
              </div>
              <ul class="dropdown-menu">
                <li><NuxtLink :to="`/${user.email}/profile`" class="dropdown-item" href="#">Profil saya</NuxtLink></li>
                <li><NuxtLink to="/hafidz/transaction" class="dropdown-item" href="#">Riwayat transaksi</NuxtLink></li>
                <li><button type="button" class="dropdown-item" @click="handleLogout">Logout</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { supabase } from '~/plugins/supabase.client'
import Toast from '~/plugins/toast.js'
export default {
  name: 'Navbar',
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
          this.$swal.fire({
            icon: 'success',
            title: 'Anda Berhasil Logout',
          }).then(() => {
            localStorage.clear()
            this.checkUser()
            document.location.href = '/'
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
<style scoped>
.dropdown-toggle {
  cursor: pointer;
}
.dropdown-menu {
  top: 45px !important;
  left: -75px !important;
}
.dropdown-item:active, .dropdown-item:hover {
  background-color: #42c7c1 !important;
  color: #fff !important;
}

.fas.fa-shopping-cart {
  font-size: 23px;
}
.badge-cart {
  top: -8px;
  right: -15px;
  background: #fff;
  padding: 4px 6px;
}
.nav-cart {
  margin-right: 27px;
  padding-top: 6px;
}
</style>