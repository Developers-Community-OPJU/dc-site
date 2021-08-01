<template>
  <div class="section">
    <div class="section-header p-5 rounded-3">
      <h1>Confab</h1>
      <p>
        Realtime Open Chat-Room for Dev's
      </p>
      <img
        class="img-fluid float-right"
        src="@/assets/thumbnails/confab_thumbnail.svg"
        alt="Confab - real time chat room for Dev's"
      />
    </div>
    <div class="section-main my-5">
      <div class="card border-light mb-3">
        <div class="card-header">TBS</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">Launch | Confab - DC's Private Chat Room</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button class="btn btn-light">Join Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confab",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;

.section {
  &-header {
    position: relative;
    background: $primary;
    border-radius: 0.5rem;
  }
}

img {
  position: absolute;
  height: 200px;
  right: 0px;
  top: 0px;
}
</style>
