<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
      <div class="container-fluid">
        <a class="navbar-brand mr-5" href="#"><b>BLOGS</b></a>
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            tag="li"
            :to="{ name: item.name }"
            active-class="active"
            class="nav-item"
            exact
          >
            <a class="nav-link" aria-current="page" href="#">{{ item.name }}</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <!--  ROUTER VIEW  -->
    <router-view />
  </div>
</template>

<script>
// import Editor from "../blog/EditorJS";
export default {
  data() {
    return {
      navItems: [
        {
          name: "create",
          url: "create",
          icon: "",
        },
      ],
    };
  },
  components: {
    // Editor,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");

// variables
$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;
$mustard: #f9bb0f;
.active {
  border-bottom: 5px solid $primary;
}
</style>
