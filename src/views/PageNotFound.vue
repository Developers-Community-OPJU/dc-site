<template>
  <div class="container py-5 my-5">
    <h1>Page Not Found</h1>
    <button class="btn btn-primary" @click="go_to_home()">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    go_to_home() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
