<template>
  <div>
    <navbar />
    <div class="not-found-wrapper container py-5 my-5">
      <div class="img text-center">
        <img
          class="img-fluid not-found-icon"
          src="@/assets/error-404.svg"
          alt="DC page not found"
        />
      </div>
      <h1 class="text-center">
        Page Not Found!
      </h1>
      <div class="d-flex justify-content-center my-5">
        <p class="text-center">
          Not sure ? then,
          <a href="#" @click="$router.push({ name: 'home' })">go home</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";

export default {
  components: {
    Navbar,
  },
};
Navbar;
</script>

<style lang="scss" scoped>
.not-found-wrapper {
  min-height: 100vh;
}

.not-found-icon {
  height: 100px;
}
</style>
