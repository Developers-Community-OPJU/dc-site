<template>
  <v-app-bar app color="#232526" dark >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>
     {{currentUser.firstName}} {{currentUser.lastName}}

      <v-chip color="orange">{{currentUser.userRole}}</v-chip>
    </v-toolbar-title>

    <v-spacer></v-spacer>
   
    <v-btn icon>
      <v-icon>mdi-bookmark-multiple</v-icon>
    </v-btn>

    <v-btn @click="logout()" icon color="yellow">
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-btn @click="logout()" depressed color="error" class="mt-2">logout</v-btn>

    <template v-slot:extension>
      <v-tabs>
        <router-link
        active-class="active"
          v-for="item in sidebar_items"
          :key="item.name"
          tag="v-tab"
          :to="item.url"
          >{{ item.name }}
          </router-link>
        <router-link   
        active-class="active"               
          tag="v-tab"
          to="/dashboard/me/noitifications"
          >Notifications
          </router-link>
        <router-link    
        active-class="active"              
          tag="v-tab"
          to="/dashboard/me/events"
          >Events
          </router-link>
        <router-link     
        v-if="currentUser.userRole === 'DCA'"
        active-class="active"             
          tag="v-tab"
          to="/dashboard/me/eventManager"
          >Event Manager
          </router-link>        
        <router-link     
        v-if="currentUser.userRole === 'DCA'"
        active-class="active"             
          tag="v-tab"
          to="/dashboard/me/userManager"
          >User Management
          </router-link>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  created () {
    // this.currentUser = this.$store.getters.getCurrentUser
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    currentUser() {
     return this.$store.getters.getCurrentUser;
    },
    
  },
  data() {
    return {
      user : null,
      sidebar_items: 
      [
        { name: "Home", url: "/dashboard/me/home", fas: "fas fa-home  mr-2" },
        { name: "Blog", url: "/dashboard/me/blog/", fas: "fas fa-blog mr-2" },        
      ],
      closeOnContentClick: true,
      
    };
  },
  methods: {
    loginPage() {
      this.$router.push("/login");
    },
    registerPage() {
      this.$router.push("/register");
    },
    logout() {
      this.$store.dispatch("destroyToken").then((res) => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style lang="css" scoped>
.navbar-brand img {
  width: 60px;
}

.active {
  /* border-bottom: 2px solid #fed000 !important; */
  color: #fed000 !important;
}
</style>
