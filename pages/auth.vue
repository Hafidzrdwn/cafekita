<template>
  <div id="content">
    <div class="auth-image"></div>
    <div class="auth-form py-4 px-5">
      <div class="d-flex justify-content-between align-items-center">
        <div class="back-button">
          <NuxtLink to="/">
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>
        </div>
        <div class="brand-logo text-end fs-4 fw-bold text-custom">
          <img src="~/assets/images/nav-logo.svg" alt="" width="34" height="30"
            class="d-inline-block align-text-top" />CafeKita
        </div>
      </div>

      <div class="form-container">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#content {
  display: flex;
  height: 100vh;
}

.auth-image {
  height: 100%;
  width: 55%;
  background: url(~/assets/images/auth-banner.jpg) no-repeat center center;
  background-size: cover;
  background-position-y: -300px;
}

.auth-form {
  width: 45%;
}

.form-container {
  margin-top: 30px;
}
</style>