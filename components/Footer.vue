<template>
  <div class="container-fluid bg-dark mt-5 pt-5 pb-4">
    <div class="row text-light text-center justify-content-center align-items-center">
      <div class="contact col-lg-2 mb-3" v-for="(social,key) in socials" :key="key">
        <i :class="social.icon"></i>
        <p class="mt-2">{{ social.text }}</p>
      </div>
    </div>
    <footer class="mt-4">
      <p class="text-center text-light">Copyright &copy; 2021 CafeKita | Made by Hafidzrdwn</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: 'fs-1 far fa-envelope',
          text: 'CafeKita21@gmail.com'
        },
        {
          icon: 'fs-1 fab fa-instagram',
          text: '@CafeKita21'
        },
        {
          icon: 'fs-1 fab fa-whatsapp',
          text: '082155436218'
        }
      ]
    }
  }
}
</script>

<style>

</style>