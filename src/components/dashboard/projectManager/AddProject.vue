<template>
  <div class="add-project">
    <div class="row">
      <div class="col-lg-4">
        <div class="add-project-form">
          <form @submit.prevent="submitProject">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Project Title</label
              >
              <input
                type="text"
                class="form-control"
                id="input-project-title"
                placeholder="Project Title"
                required
                v-model="project.title"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >About the project</label
              >
              <textarea
                required
                v-model="project.description"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Repository Link</label
              >
              <input
                v-model="project.repository"
                type="url"
                class="form-control"
                autocomplete="off"
                id="input-project-repo"
                placeholder="Project Git Repo Link"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Cover Image</label
              >
              <input
                v-model="project.coverImageUrl"
                type="url"
                class="form-control"
                autocomplete="off"
                id="input-project-cover-img"
                placeholder="Add Project Cover"
                required
              />
            </div>
            <div class="mb-3">
              team not assigned ?
              <button
                class="btn btn-link"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Assign Team
              </button>
            </div>
            <button type="submit" class="btn btn-primary my-3">
              Add Project
            </button>
          </form>
        </div>

        <!-- ASSIGN TEAM PANEL -->
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          data-bs-backdrop="true"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Assign Team</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>Select Team Head</p>
            <p>Select Team Members</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProject",
  created() {},
  data() {
    return {
      project: {
        title: "",
        description: "",
        repository: "",
        coverImageUrl: "",
      },
    };
  },
  methods: {
    submitProject() {
      let project = this.project;
      const user = this.$store.getters.getCurrentUser;
      project.postedBy = user._id;
      this.$store.dispatch("POST_PROJECT", project).then((res) => {
        alert(res.data.msg);
        this.project = {
          title: "",
          description: "",
          repository: "",
          coverImageUrl: "",
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.offcanvas {
  min-width: 30%;
  max-width: 500px;
}
</style>
