<template>
  <div>
    <Navbar />
    <div id="blog-home" class="container">
      <div class="blog-header">
        <header class="my-5">
          <h3 class="text-center fw-bold">Explore DC Blogs</h3>
        </header>
        <main class="blogs">
          <div class="row">
            <div class="col-lg-6 offset-3">
              <div class="alert alert-light text-center w-100" role="alert">
                Blogs will be posted soon!
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
#blog-home {
  min-height: 100vh;
}
</style>
