<template>
  <div class="">   
    <div class="header p-5">
      <h4>Event Manager</h4>      
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/dashboard/me/eventManager/createNew" tag="a" active-class="active" exact class="nav-link">Create New Event</router-link>
        </li>
        <li class="nav-item">
         <router-link to="/dashboard/me/eventManager/listAll" tag="a" active-class="active"  class="nav-link ">List all Events</router-link>
        </li>
        <li class="nav-item">
         <router-link to="/dashboard/me/eventManager/loadLast" tag="a" active-class="active"  class="nav-link ">View Last Event</router-link>
        </li>
        <li class="nav-item">
         <router-link to="/dashboard/me/eventManager/loadLast" tag="a" active-class="active"  class="nav-link ">Requests</router-link>
        </li>
       
      </ul>
    </div>
    <!-- Router  -->
    <router-view />    

  </div>
</template>

<script>
import axios from "axios";
import qs from "querystring";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        venue: "",
        organiser: "Admin",
        scheduled_date: "",
        keywords: [],
      },
    };
  },
  methods: {
    submit() {
      const event = {
        title: this.event.title,
        description: this.event.description,
        venue: this.event.venue,
        organiser: this.event.organiser,
        scheduled_date: this.event.scheduled_date,
        keywords: this.event.keywords,
      };

      // console.log(event)
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      axios
        .post("/api/events/add", qs.stringify(event), config)
        .then((res) => {
          // alert(res.data.msg);
          this.$toast(res.data.msg, {
            position: "bottom-right",
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
        .then(() => {
          this.event = {
            title: "",
            description: "",
            venue: "",
            organiser: this.$store.getters.getCurrentUser.username,
            scheduled_date: "",
            keywords: [],
          };
        })
        .catch((error) => {});
      alert(error);
    },
  },
};
</script>

<style lang="scss" scoped></style>
