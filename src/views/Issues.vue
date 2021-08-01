<template>
  <div>
    <!-- NAVIGATION -->
    <Navbar />
    <main>
      <h1 class="text-center fw-lighter pt-5">write your concern to us!</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-3">
            <form
              @submit.prevent="submitIssue()"
              class="p-4 mb-5 bg-white rounded-lg shadow"
            >
              <div class="mb-3">
                <label for="issue_title">Problem</label>
                <input
                  v-model="issue.title"
                  id="issue_title"
                  name="issue_title"
                  class="form-control"
                  type="text"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="issue_description">Description</label>
                <textarea
                  v-model="issue.description"
                  name="issue_description"
                  id="issue_description"
                  rows="3"
                  class="form-control"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="issue_suggestion">Suggestion</label>
                <textarea
                  v-model="issue.suggestion"
                  name="issue_suggestion"
                  id="issue_suggestion"
                  rows="3"
                  class="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
    <section class="anonymous_suggestions p-5">
      <h1 class="display-6 text-center my-5">Some Anonymous Suggestions!</h1>
      <div
        v-show="this.issues.length <= 0"
        class="alert alert-secondary"
        role="alert"
      >
        oops! No Feeds to show, Why don't you post a suggestion ?
      </div>
      <div v-show="this.issues.length >= 0" class="row g-3">
        <div v-for="(issue, index) in issues" :key="index" class="col-4">
          <div class="card border-light mb-3">
            <div class="card-header">{{ issue.title }}</div>
            <div class="card-body">
              <p class="card-text">
                {{ issue.description }}
              </p>
              <p class="card-text">
                {{ issue.suggestion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";
export default {
  name: "Issues",
  async created() {
    await this.$store.dispatch("FETCH_ISSUES");
  },
  data() {
    return {
      issue: {
        title: "",
        description: "",
        suggestion: "",
      },
    };
  },
  components: {
    Navbar,
  },
  computed: {
    issues() {
      return this.$store.getters.LOAD_ISSUES;
    },
  },
  methods: {
    reset() {
      this.issue = {};
    },
    async submitIssue() {
      const issue = {
        title: this.issue.title,
        description: this.issue.description,
        suggestion: this.issue.suggestion,
      };
      const res = await this.$store.dispatch("POST_ISSUE", issue);
      if (res.data.success) {
        this.reset();
        this.$toast.success(res.data.msg, {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: false,
          rtl: false,
        });
        this.$router.go(0);
      } else {
        this.$toast.error(res.data.msg, {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: false,
          rtl: false,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background: #f9f10f;
  height: 100%;
}
</style>
