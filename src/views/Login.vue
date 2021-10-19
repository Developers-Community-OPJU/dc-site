<template>
  <div id="login-wrapper" class="row w-100 p-0 m-0">
    <!-- NAVIGATION -->
    <Navbar />
    <div class="col-lg-4 col-md-6 offset-lg-4 offset-md-3 col-sm-8">
      <form class="form  dc-form" @submit.prevent="login()">
        <h3 class="text-center font-weight-bold mb-5">Access Your Desk</h3>
        <div class="mb-3">
          <input
            type="text"
            name="username"
            v-model="user.username"
            class="form-control "
            placeholder="Username"
            required
            minlength="6"
          />
          <span class="focus-border"></span>
        </div>
        <div class="mb-3">
          <input
            type="password"
            name="password"
            v-model="user.password"
            class="form-control "
            placeholder="Password"
            required
            minlength="6"
          />
        </div>

        <button type="submit" class="btn btn-dark text-light w-100 mt-3">
          Login
        </button>
        <button
          @click.prevent="registerPage()"
          type="submit"
          class="btn btn-link text-muted w-100 mt-3"
        >
          Create a new Account?
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";
export default {
  created() {
    if (this.$store.getters.loggedIn) {
      this.$router.push({ name: "dashboardHome" });
    }
  },
  computed: {
    showToken() {
      return this.$store.getters.getToken;
    },
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    registerPage() {
      this.$router.push("/register");
    },
    login() {
      this.$store.dispatch("generateToken", this.user).then((res) => {
        if (this.$store.getters.loggedIn) {
          this.$router.push({ name: "dashboardHome" }).then((res) => {
            this.$toast.info("Welcome", {
              position: "top-center",
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
          });
        } else {
          try {
            this.$store
              .dispatch("destroyToken")
              .then((res) => {
                this.$toast.error("Invalid Credentials", {
                  position: "top-center",
                  timeout: 5000,
                  closeOnClick: true,
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  draggable: true,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: false,
                  hideProgressBar: false,
                  closeButton: "button",
                  icon: true,
                  rtl: false,
                });
              })
              .then((res) => {
                this.$router.push({ name: "login" });
              });
          } catch (error) {
            alert(error);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");

$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;
$mustard: #f9bb0f;

#login-wrapper {
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background: $primary; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.form {
  padding: 3rem 2rem;
  background: #fff;
  box-shadow: 10px 10px 25px #23252627;
}

.form-control {
  border: none;
  background: $light;
  border-radius: 0%;
  box-shadow: none;
  &:focus {
    border-left: 2px solid #fdc830;
  }
}

.btn-link {
  text-decoration: none;
}

.btn-dark {
  border: none;
  border-radius: 0%;
  padding: 0.75rem;
  background: $dark;
}
</style>
