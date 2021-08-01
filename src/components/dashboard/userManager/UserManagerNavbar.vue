<template>
  <v-navigation-drawer permanent>
    <v-list nav dense>
      <v-list-item link v-for="item in navItems" :key="item.name">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <router-link tag="v-list-item-title" :to="item.url">{{
          item.name
        }}</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          name: "Users",
          url: {name : 'registerNewUser'},
          icon: "mdi-book",
        },
        {
          name: "Register User",
          url: {name : 'registerNewUser'},
          icon: "mdi-account-plus",
        },
        {
          name: "Registration Requests",
          url: {name : 'registerNewUser'},
          icon: "mdi-star-circle",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
