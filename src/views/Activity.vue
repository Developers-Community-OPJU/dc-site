<template>
  <div class="Activity h-100">
    <navbar />
    <div class="container h-100">
      <div class="row">
        <div class="col-lg-2 ">
          <activity-navbar />
        </div>
        <div class="col-lg-6 ms-5 p-0"><router-view /></div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityNavbar from "../components/Navbar/ActivityNavbar.vue";
import Navbar from "../views/CommonNavbar.vue";
export default {
  name: "Activity",
  created() {},
  data() {
    return {};
  },
  components: {
    Navbar,
    ActivityNavbar,
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.Activity {
  min-height: 100vh;
}
</style>
