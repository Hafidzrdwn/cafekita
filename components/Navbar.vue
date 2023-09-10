<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <NuxtLink class="navbar-brand fs-4 ms-5 fw-bold" to="/">
          <img src="~/assets/images/nav-logo.svg" alt="" width="30" height="28" class="d-inline-block align-text-top" />
          CafeKita
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Beranda</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/menu" class="nav-link">Daftar Menu</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/kategori" class="nav-link">Kategori</NuxtLink>
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