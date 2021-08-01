<template>
  <div class="section">
    <div class="section-header p-5 rounded-3">
      <h1>Projects</h1>
      <p>
        Collaborate and Build the Projects.
      </p>
      <img
        class="img-fluid float-right"
        src="@/assets/thumbnails/projects_thumbnail.svg"
        alt="Confab - real time chat room for Dev's"
      />
    </div>
    <div class="section-main my-5">
      <div class="card border-light mb-3">
        <div class="card-header">Progress</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">University | User Management System</h5>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            laborum modi amet eligendi nemo, est voluptate vero, quae ipsa quod
            nisi odit neque, magnam accusantium? Delectus sed obcaecati eveniet.
            Exercitationem?
          </p>
          <button class="btn btn-light">Collaborate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
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
  height: 150px;
  right: 10px;
  bottom: 10px;
}
</style>
