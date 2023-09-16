<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container">
        <NuxtLink class="navbar-brand fs-4 fw-bold" to="/">
          <img src="~/assets/images/nav-logo.svg" alt="" width="30" height="28" class="d-inline-block align-text-top" />
          CafeKita
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-4">
            <li class="nav-item">
              <NuxtLink to="/" :class="{'nav-link': true, 'active': $route.path === '/'}">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/menu" :class="{'nav-link': true, 'active': $route.path === '/menu'}">Menu</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/gallery" :class="{'nav-link': true, 'active': $route.path === '/gallery'}">Gallery</NuxtLink>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3">
              <NuxtLink to="/signup" class="btn btn-uppercase btn-outline-custom">Sign up</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/login" class="btn btn-uppercase btn-custom">Log in</NuxtLink>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style>

</style>