<template>
  <div class="container ">   

    <div class="row g-3">
      <div class="col-lg-6 pl-5">
        <form>
          <div class="row">
            <div class="col">
              <div class="row mb-3">
                <div class="col">
                  <label for="event_title" class="form-label"
                    >Event Title</label
                  >
                  <input
                  name="title"
                    required
                    v-model="event.title"
                    type="text"
                    class="form-control"
                    id="event_title"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="event_description" class="form-label"
                    >Description</label
                  >
                  <textarea
                  name="description"
                    required
                    v-model="event.description"
                    class="form-control "
                    id="event_description"
                    cols="10"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-8">
                  <label for="event_venue" class="form-label">Venue</label>
                  <input
                  name="venue"
                    required
                    v-model="event.venue"
                    type="text"
                    class="form-control"
                    id="event_venue"
                  />
                </div>
                <div class="col-4">
                  <label for="event-date" class="form-label">Date</label>
                  <input
                  name="scheduled_date"
                    required
                    v-model="event.scheduled_date"
                    type="date"
                    class="form-control"
                    id="event-date"
                  />
                </div>
              </div>

              <button
                @click.prevent="submit"
                type="submit"
                class="btn btn-primary my-5"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-5 px-5">
        <p class="lead">Event Preview</p>
        <div v-if=" !event.title == ''" class="card shadow">
          <div class="card-body">
            <h5 class="card-title">{{ event.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Organiser : {{ event.organiser }}
            </h6>
            <p class="card-text">{{ event.description }}</p>
            <a href="#" class="card-link btn">{{ event.scheduled_date }}</a>
            <a href="#" class="card-link btn">{{ event.venue }}</a>
          </div>
        </div>
        <div v-else >Give a nice title to preview</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from 'querystring';

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

      // configuring headers
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
        .catch((error) => {alert(error)});
    },
  },
};
</script>

<style lang="scss" scoped></style>
