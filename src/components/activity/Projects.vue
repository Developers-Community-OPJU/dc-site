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
    <div class="alerts">
      <div
        v-if="projects.length == 0"
        class="alert alert-secondary my-3"
        role="alert"
      >
        Aww... Don't cry, no project's posted yet!
      </div>
    </div>
    <div class="section-main my-5">
      <div
        class="card border-light mb-3"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="card-body text-secondary">
          <h5 class="card-title">{{ project.title }}</h5>
          <div v-if="project.status == 'S'" class="badge bg-dark my-1">
            To be Started
          </div>
          <div v-if="project.status == 'P'" class="badge bg-warning my-1">
            On Going
          </div>
          <div v-if="project.status == 'C'" class="badge bg-danger my-1">
            Canceled
          </div>
          <p class="card-text my-2">
            {{ project.description | shorten }}
          </p>
          <div class="card-actions">
            <button
              @click="viewProject(project._id)"
              class="btn btn-link text-primary text-decoration-none"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  },
  computed: {
    projects() {
      return this.$store.getters.LOAD_PROJECTS;
    },
  },
  props: {},
  methods: {
    viewProject(id) {
      this.$router.push({ name: "ViewProject", params: { id } });
    },
  },
  filters: {
    shorten: function(value) {
      value = value.substring(0, 100) + "...";
      return value;
    },
  },
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
