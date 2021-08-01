<template>
  <v-form v-model="valid" @submit.prevent="register()">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" lg="6">
          <v-text-field
            outlined
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            single-line
          ></v-text-field>
        </v-col>  
         <v-col cols="12" md="4" lg="6">
          <v-text-field
            outlined
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
            single-line
          ></v-text-field>
        </v-col>      
      </v-row>    

      <v-row>
        <v-col cols="12" md="4" lg="6">
          <v-select
            outlined
            v-model="branch"
            :items="branches"
            :rules="[(v) => !!v || 'Branch is required']"
            label="Branch"
            required
            single-line
          ></v-select>
        </v-col>  
        <v-col cols="12" md="4" lg="6">
          <v-select
            outlined
            v-model="role"
            :items="roles"
            :rules="[(v) => !!v || 'User Role is required']"
            label="User Role"
            required
            single-line
          ></v-select>
        </v-col>      
      </v-row>

      <v-row>
        <v-col cols="12" md="4" lg="12">
          <v-text-field
            outlined
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            single-line
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" lg="6">
          <v-text-field
            outlined
            v-model="username"
            :rules="usernameRules"
            :counter="10"
            label="Username"
            required
            single-line
          ></v-text-field>
        </v-col>       
        <v-col cols="12" md="4" lg="6">
          <v-text-field
            outlined
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            label="Password"
            required
            single-line
          ></v-text-field>
        </v-col>       
      </v-row>       
        <v-btn type="submit" color="primary">Regsiter User</v-btn>
    </v-container>

  </v-form>
</template>

<script>
// IMPORTS
import axios from "axios";
import qs from "querystring";


export default {
  data: () => ({
    valid: false,
    nameRules: [
      (v) => !!v || "This is required",
      (v) => v.length >= 3 || "It must be greater than 3 characters",
    ],
    usernameRules: [
      (v) => !!v || "Username is required",
      (v) => v.length >= 3 || "Username must be greater than 3 characters",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 6 || "Password must be greater than 6 characters",
    ],
    firstname: "",
    lastname: "",
    role: null,
    branch: null,
    roles: ["DCA", "DCD", "DCE", "DCM"],
    branches: ["CSE", "META", "CIVIL", "MECH", "EEE"],
    email: "",
    username: "",
    password: "",

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    async register() {
      let user = {
        firstName: this.firstname,
        lastName: this.lastname,
        branch: this.branch,
        userRole: this.role,
        email: this.email,
        username: this.username,
        password: this.password,
      };
      try {
        const res = await axios.post("/api/signUp", qs.stringify(user), user);
        if (res.data.registered) {
          this.$toast(res.data.msg, {
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
        } else {
          this.$toast.error(res.data.msg, {
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
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
};
</script>

<style lang="scss" scoped></style>
