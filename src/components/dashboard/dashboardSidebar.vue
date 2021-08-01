<template>
  <div class="app-sidebar bg-white p-0 m-0 sticky-top">
    <header class="text-center p-5">
      <img
        class="user-icon"
        src="@/assets/icons/award.svg"
        alt="DC User Badge"
      />
      <p>
        <b>{{ user.firstName }} {{ user.lastName }}</b>
      </p>
      <span
        v-if="user.userRole == 'DCA'"
        :class="user.userRole"
        class="badge text-dark rounded-pill px-3 py-2"
        >{{ user.userRole }}</span
      >
      <span
        v-if="user.userRole == 'DCE'"
        :class="user.userRole"
        class="badge text-dark rounded-pill px-3 py-2"
        >{{ user.userRole }}</span
      >
      <span
        v-if="user.userRole == 'DCD'"
        :class="user.userRole"
        class="badge text-dark rounded-pill px-3 py-2"
        >{{ user.userRole }}</span
      >
      <span
        v-if="user.userRole == 'DCM'"
        :class="user.userRole"
        class="badge text-dark rounded-pill px-3 py-2"
        >{{ user.userRole }}</span
      >
    </header>
    <ul class="list-group m-0 p-0 ">
      <!-- GENERAL MENU -->
      <router-link
        tag="li"
        v-for="item in menu.general"
        :key="item.name"
        :to="item.url"
        active-class="active-link"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <a class="pl-3">{{ item.name }}</a>
      </router-link>
      <!-- ADMIN MENU -->
      <div v-if="user.userRole == 'DCA'">
        <router-link
          tag="li"
          v-for="item in menu.admin"
          :key="item.name"
          :to="item.url"
          active-class="active-link"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <a class="pl-3">{{ item.name }}</a>
        </router-link>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["user"],

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then((res) => {
        this.$router.push({ name: "login" });
      });
    },
  },
  data() {
    return {
      menu: {
        general: [
          {
            name: "Home",
            url: "/dashboard/me/home",
          },
          {
            name: "Blog",
            url: "/dashboard/me/blog",
          },
        ],
        admin: [
          {
            name: "Event Manager",
            url: "/dashboard/me/eventManager",
          },
          {
            name: "Project Manager",
            url: "/dashboard/me/projectManager",
          },
          {
            name: "User Manager",
            url: "/dashboard/me/UserManager",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");

* {
  font-family: "montserrat";
}

$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;

.app-sidebar {
  height: 100vh;
}

header {
  // background: $light;
}

// BADGES
.DCA {
  background: $primary;
}
.DCM {
  background: $primary;
}
.DCD {
  background: $primary;
}
.DCE {
  background: $primary;
}

.user-icon {
  padding: 1rem;
}

.list-group {
  &-item {
    transition: all 0.2s ease;
    border: none;
    border-radius: 0px;
    padding: 0.5rem 2rem;
    border-right: 5px solid transparent;

    a {
      text-decoration: none;
      color: $dark;
    }
    &:hover {
      background: $light;
      font-weight: 500;
    }
  }
}

// Navbar
.dropdown-item {
  transition: background 0.2s ease;
  &:hover {
    background: $primary;
  }
}

.nav-item {
  // font-size: .5rem !important;
  margin-right: 1.5rem;
  // border-bottom: 2px solid transparent;
  // transition: all 0.2s ease;
  position: relative;
  &:hover {
    font-weight: bold;
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
  &:hover {
    // border-bottom: 2px solid $primary;
  }
}

.active-link {
  background: $light;
  font-weight: bold;
  border-right: 5px solid $dark;
}
</style>
