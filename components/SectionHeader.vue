<template>
  <div>
    <div class="section-header">
      <h2 class="title">{{ title }}</h2>
      <h4 class="subtitle">{{ subtitle }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.section-header {
  margin-bottom: 40px;
}

.section-header > .title {
  font-size: 40px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 700;
}
.section-header > .subtitle {
  font-size: 20px;
  color: #42c7c1;
}
</style>
