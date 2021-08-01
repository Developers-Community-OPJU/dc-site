<template>
  <div>
    <div class="row">
      <div class="col-lg-2 m-0 p-0 border-right">
        <app-sidebar :user="currentUser"></app-sidebar>
      </div>
      <div class="col-lg-10 p-0 m-0">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top p-0"
        >
          <div class="container">
            <a class="navbar-brand" href="#"
              >{{ currentUser.firstName }}'s Desk
            </a>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li
                @click="logout()"
                class="nav-item ml-3 btn-logout rounded-pill"
              >
                <a class="nav-link m-0"
                  ><img
                    class="icon img-fluid"
                    src="@/assets/icons/power-red.svg"
                    alt="Logout"
                /></a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- ROUTER VIEW -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";
import AppSidebar from "@/components/dashboard/dashboardSidebar";
import AppNavbar from "@/components/dashboard/dashboard_navbar";
import axios from "axios";
import qs from "querystring";
// import Navbar from '../components/Navbar.vue';

export default {
  created() {
    try {
      const token = this.$store.getters.getToken;
      axios
        .get("/api/getCurrentUser", {
          headers: {
            "x-dc-auth-token": token,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.$store.dispatch("setCurrentUser", res.data.decoded);
        });
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then((res) => {
        this.$router.push({ name: "login" });
      });
    },
  },
  components: {
    AppSidebar,
    AppNavbar,
    Navbar,
    // Navbar
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
