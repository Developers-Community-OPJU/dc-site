<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <img :src="project.coverImageUrl" class="card-img-top" alt="..." />
          <div class="card-body">
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
            <p class="card-text my-4">
              {{ this.project.description }}
              <!-- <textarea disabled :value="this.project.description"> </textarea> -->
            </p>
            <div class="alert alert-primary" role="alert">
              Repository Link :
              <a target="_blank" :href="project.repository">{{
                project.repository
              }}</a>
            </div>
            <div class="publisher my-4">
              <div>Posted By</div>
              <div class="badge bg-secondary">
                {{ project.postedBy.firstName }} {{ project.postedBy.lastName }}
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">
            Last Updated - {{ project.updatedAt | date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {
    this.$store.dispatch("VIEW_PROJECT", this.$route.params.id).then((res) => {
      this.project = res.data.result[0];
    });
  },
  data() {
    return {
      project: null,
    };
  },
  props: {},
  methods: {},
  filters: {
    date: function(value) {
      value = value.substring(0, 10);
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  min-height: 500px;
  font-size: 1.5rem;
}
</style>
