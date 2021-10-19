<template>
  <div class="p-0 m-0">
    <nav
      class="navbar navbar-expand-lg navbar-light m-0"
      style="background : #fff"
    >
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img class="img-fluid" src="../assets/logo/dc-logo.png" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dc-navbar"
          aria-controls="dc-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="dc-navbar">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            <li class="nav-item">
              <router-link
                tag="a"
                active-class="active"
                exact
                class="nav-link"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                active-class="active"
                exact
                class="nav-link"
                to="/blogs"
                >Blogs</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                active-class="active"
                exact
                class="nav-link"
                :to="{ name: 'actionHome' }"
                >Activity</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                active-class="active"
                exact
                class="nav-link"
                to="/dpaper"
                >DPaper</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                active-class="active"
                exact
                class="nav-link"
                to="/community"
                >Community</router-link
              >
            </li>
          </ul>

          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Desk
              </a>
              <ul
                class="dropdown-menu nav-cta shadow"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link
                    v-if="!loggedIn"
                    tag="a"
                    class="dropdown-item cta-item"
                    to="/login"
                    >Login</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-if="!loggedIn"
                    tag="a"
                    class="dropdown-item cta-item"
                    to="/register"
                    >Register</router-link
                  >
                </li>
                <li>
                  <a
                    v-if="loggedIn"
                    class="dropdown-item cta-item"
                    @click="dashboard()"
                    >My Desk</a
                  >
                </li>
                <li>
                  <a
                    v-if="loggedIn"
                    class="dropdown-item cta-item"
                    @click="logout()"
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then((res) => {
        this.$router.push({ name: "login" });
      });
    },
    dashboard() {
      this.$router.push("/dashboard/me");
    },
  },
};
</script>
<style lang="scss" scoped>
// variables
$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;

// Navbar
.dropdown-item {
  transition: background 0.2s ease;
  &:hover {
    background: $primary;
  }
}

.nav-item {
  margin-right: 1.5rem;
  // border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    font-weight: 500;
    backface-visibility: hidden;
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0%;
    background: $primary;
    height: 5px;
    opacity: 0;
    transition: width 0.2s ease-in-out;
  }
}

// .cta-item {
//   color: #fff;
//   border-left: 5px solid transparent;
// }
// .nav-cta {
//   li {
//     &:hover {
//       .cta-item {
//         background: #fff;
//         border-left: 5px solid $primary;
//       }
//     }
//   }
// }

.active {
  font-weight: bold;
}
</style>
