<template>
  <div class="section-poll ">
    <div class="section-header p-5 rounded-3">
      <h1>Live Poll</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        dicta.
      </p>
      <div class="actions">
        <button class="btn btn-dark me-3">Start General Poll</button>
        <button class="btn btn-outline-dark">Start Anonymous Poll</button>
      </div>
    </div>
    <div class="section-polls my-3">
      <div class="alerts my-3">
        <!-- <div v-if="!this.projects" class="alert alert-secondary" role="alert">
          Aww... Don't cry, Nothing has started
        </div> -->
      </div>
      <div class="card mb-3">
        <div class="card-header">
          Anonymous
        </div>
        <div class="card-body">
          <h5 class="card-title">University Cricket Team Selection</h5>
        </div>
        <a href="#" class="btn btn-light">Join Now</a>
        <div class="card-footer text-muted">
          Posted : 2 days ago
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header">
          General
        </div>
        <div class="card-body">
          <h5 class="card-title">DC BOM Selection</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-light">Join Now</a>
        </div>
        <div class="card-footer text-muted">
          Posted : 2 days ago
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header">
          General
        </div>
        <div class="card-body">
          <h5 class="card-title">DC Team Head</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-light">Join Now</a>
        </div>
        <div class="card-footer text-muted">
          Posted : 2 days ago
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Poll",
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
  &-poll {
  }
  &-header {
    background: $primary;
    border-radius: 0.5rem;
  }
}

.card {
  &:hover {
    background: $light;
  }
}
</style>
