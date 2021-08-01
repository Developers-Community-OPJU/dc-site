<template>
  <div class="activity-sidebar">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="(item, index) in items" :key="index">
        <router-link
          tag="a"
          class="nav-link text-muted"
          active-class="active"
          exact
          :to="{ name: item.to }"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActivityNavbar",
  created() {},
  data() {
    return {
      items: [
        {
          name: "Home",
          to: "actionHome",
        },
        {
          name: "Project",
          to: "projects",
        },
        {
          name: "Live Poll",
          to: "poll",
        },
        {
          name: "Confab",
          to: "confab",
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-item {
  &:hover {
    // border: 1px solid #abbabb;
    border-radius: 3rem;
  }

  .nav-link {
    min-width: 150px;
    border: 1px solid transparent;
    border-radius: 3rem;
    &:hover,
    &.active {
      border: 1px solid #abbabb;
      border-radius: 3rem;
    }
  }
}
</style>
