<template>
  <div>
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
  import error404 from '~/components/error/404.vue'
  export default {
    name: 'AppError',
    layout: 'default',
    props: ['error'],
    computed: {
      errorPage() {
        if (this.error.statusCode === 404) {
          return error404
        }

        return false;
      },
    }
  }
</script>
