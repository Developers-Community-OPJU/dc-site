<template>
  <div class="manager p-5">
    <h3>Project Manager</h3>
    <ul class="nav nav-tabs my-4">
      <li class="nav-item" v-for="(link, index) in nav" :key="index">
        <router-link
          tag="a"
          class="nav-link text-muted"
          active-class="active"
          exact
          :to="{ name: link.to }"
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectManager",
  created() {},
  data() {
    return {
      nav: [
        {
          name: "Add Project",
          to: "addNewProject",
        },
        {
          name: "Show All",
          to: "showAllProjects",
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.manager {
}
</style>
