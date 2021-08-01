<template>
  <div class="section">
    <div class="section-header p-5 rounded-3">
      <h1>Activities</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        dicta.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionHome",
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
