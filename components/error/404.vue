<template>
  <div>
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>
<script>
  export default {
    name: 'Error404',
    props: {
      error: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>
