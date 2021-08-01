<template>
  <div id="login-wrapper" class="row w-100 p-0 m-0">
    <!-- NAVIGATION -->
    <Navbar />
    <div class="col-lg-4 col-md-8 col-sm-8 offset-lg-4 offset-md-2 offset-sm-2">
      <form class="signup-form form" @submit.prevent="register()">
        <h3 class="text-center font-weight-bold mb-5">Join Our Community</h3>
        <div class="mb-3">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                v-model.trim="firstName"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model.trim="lastName"
                placeholder="Last name"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <select
            class="form-select form-control"
            name="branch"
            v-model.trim="branch"
          >
            <option selected>Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="MECH">MECH</option>
            <option value="META">META</option>
            <option value="CIVIL">CIVIL</option>
            <option value="EEE">EEE</option>
          </select>
        </div>
        <div class="mb-3">
          <input
            id="username"
            name="username"
            type="text"
            class="form-control"
            placeholder="Username"
            v-model.trim="username"
            @blur="validateUsername()"
            :class="{
              'is-invalid': this.validUsername,
              'is-valid': !this.validUsername,
            }"
          />
          <!-- <div class="invalid-feedback">
     Try Another, Already In Use
    </div>
          <div class="valid-feedback">
     A Good Choice
    </div> -->
        </div>
        <div class="mb-3">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            v-model.trim="email"
            class="form-control"
            @blur="validateEmail()"
            :class="{
              'is-invalid': this.validEmail,
              'is-valid': !this.validEmail,
            }"
          />
          <!-- <div class="invalid-feedback">User with this Email exists, Try another one</div>
          <div class="valid-feedback">Enter Correct Email</div> -->
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col">
              <input
                v-model.trim="password"
                type="Password"
                class="form-control disabled"
                placeholder="Password"
              />
            </div>
            <div class="col">
              <input
                v-model="confirmPassword"
                type="Password"
                class="form-control"
                placeholder="Confirm Password"
                :class="{ 'is-invalid': !this.passwordMatch }"
                @input="checkPassword()"
              />
            </div>
          </div>
        </div>
        <button
          :class="{ disabled: !this.allowed }"
          type="submit"
          class="btn w-100 btn-dark"
        >
          Join Now
        </button>
        <button
          @click="loginPage()"
          type="button"
          class="btn btn-link w-100 mt-3"
        >
          Already hava an Account?
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";
import axios from "axios";
import qs from "querystring";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      branch: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      passwordMatch: null,
      allowed: false,
      validUsername: null,
      validEmail: null,
      msg: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    // CHECKING USERNMAE AVAILABILITY
    async validateUsername() {
      try {
        const res = await axios.get("/api/check/" + this.username);
        if (res.data.available) {
          console.log(res.data);
          this.validUsername = false;
          this.msg = res.data.msg;
        } else {
          console.log(res.data);
          this.validUsername = true;
          this.msg = res.data.msg;
        }
      } catch (error) {
        console.log(error);
      }
    },

    // CHECKING EMAIL DUPLICATION
    async validateEmail() {
      try {
        const res = await axios.get("/api/check/" + this.email);
        if (res.data.available) {
          console.log(res.data);
          this.validEmail = false;
          this.msg = res.data.msg;
        } else {
          console.log(res.data);
          this.validEmail = true;
          this.msg = res.data.msg;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async register() {
      let user = {
        email: this.email,
        branch: this.branch,
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
      };
      // this.$store.dispatch('addUser',user)
      try {
        const res = await axios.post("/api/signUp", qs.stringify(user), user);
        if (res.data.registered) {
          this.$toast(res.data.msg, {
            position: "bottom-right",
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
          this.$router.push({ name: "login" });
        } else {
          this.$toast.error(res.data.msg, {
            position: "bottom-right",
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
      } catch (error) {
        console.log(error);
      }
    },

    // REDIRECTING TO THE LOGIN PAGE
    loginPage() {
      this.$router.push("/login");
    },

    // MATCH PASSWORD
    checkPassword() {
      if (this.password === this.confirmPassword) {
        this.passwordMatch = true;
        this.allowed = true;
      } else {
        this.passwordMatch = false;
      }
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
  height: 100vh;
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
