<template>
  <div>
    Show All Projects
    <div class="row g-5">
      <div class="col-lg-4" v-for="(item, index) in projects" :key="index">
        <div class="card mb-3">
          <div class="row">
            <!-- <div class="col-md-4">
              <img :src="item.coverImageUrl" class="img-fluid rounded-start" />
            </div> -->
            <div class="col-lg-12">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <span class="badge bg-primary">{{ item.status }}</span>
                <p class="card-text">
                  <small class="text-muted">{{ item.updatedAt }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List Projects",
  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  },
  computed: {
    projects() {
      return this.$store.getters.LOAD_PROJECTS;
    },
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
