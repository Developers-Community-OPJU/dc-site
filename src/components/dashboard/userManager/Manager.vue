<template>
  <div>
   <v-row>
       <v-col cols="2">
           <Navigation />
       </v-col>
       <v-col cols="10">
           <router-view />
       </v-col>
   </v-row>
  </div>
</template>

<script>
import Navigation from '@/components/dashboard/userManager/UserManagerNavbar.vue'
export default {
  components: {
    Navigation,
  },
    data() {
        return {
            navItems:[{
                name : 'Users',
                url : "allUsers",
                icon : "mdi-book"
            },
            {
                name : 'Register User',
                url : "registerNewUser",
                icon : "mdi-account-plus"
            },
            {
                name : 'Requests',
                url : "/allUsers",
                icon : "mdi-star-circle"
            }]
        }
    },
};
</script>

<style lang="sass" scoped></style>
