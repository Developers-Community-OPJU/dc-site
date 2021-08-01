<template>
  <div id="app">
    <!-- <Navbar /> -->
    <router-view />
    <!-- FOOTER -->
    <footer class="footer">
      <p class="text-center">The Developer Community @OPJU - 2021</p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");

$primary: #f9f10f;
$dark: #232526;
$secondary: #000000;
$light: #f5f5f5;

html {
  // font-family: "Montserrat", sans-serif;
  scroll-behavior: smooth !important;
}
.footer {
  padding: 3rem;
  background: $secondary;
  color: #fff;
}
</style>
