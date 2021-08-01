<template>
  <div class="home">
    <!-- <Navbar/> -->
    <!-- hero section -->
    <section class="hero">
      <div class="hero_bg">
        <img
          class="img-fluid"
          src="@/assets/dc-hero-bg.svg"
          alt="DC hero background"
        />
      </div>
      <div
        class="dc-logo d-flex justify-content-center"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <img src="../assets/dc-hero.svg" alt="dc-logo" class="" />
      </div>
      <p class="scroll-down text-light text-center font-weight-light lead">
        &darr;
      </p>
    </section>
    <!-- DCd TEAM -->
    <section id="join-now" class="dc-team">
      <div class="row w-100">
        <div class="col-lg-12">
          <div class="dc-team-heading text-center">
            <img
              data-aos="fade-down"
              src="../assets/dc-team.svg"
              alt="dc-team"
              class="img-fluid core-team-img p-0 m-0"
            />
            <span class="d-block text-muted"
              ><span class="collaborate"
                ><span class="text-dark">#</span>Collaborate</span
              >
              with our <span class="font-weight-bold">Core Team</span></span
            >
          </div>
          <div class="posts text-center pt-3">
            <span class="dev-1" data-aos="zoom-in" data-aos-duration="500"
              >Data Scientist</span
            >
            <p></p>
            <div class="dev-2 border-dark p-2" data-aos="zoom-in">
              Full Stack Developer
            </div>
            <p></p>
            <span class="dev-3" data-aos="zoom-in" data-aos-duration="500"
              >UI / UX Designer</span
            >
          </div>
          <div class="d-flex justify-content-center mt-5">
            <button class="btn-action btn btn-lg btn-dark shadow">
              JOIN NOW
            </button>
          </div>
          <h4 class="text-center mt-3">we value for what you are!</h4>
        </div>
      </div>
    </section>

    <!-- Events section -->
    <section class="p-5 dark">
      <h1 class="text-light text-center my-5">UPCOMING EVENTS</h1>
      <!-- <h4 class=" section-header my-3">Seminars</h4> -->
      <div class="row">
        <div
          v-for="(item, index) in Events"
          :key="index"
          class="col-lg-4 col-sm-12"
        >
          <event-card
            data-aos="fade-up"
            data-aos-duration="800"
            :title="item.title"
            :tags="item.keywords"
            :organiser="item.organiser"
            :venue="item.venue"
            :date="item.created"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar";
import axios from "axios";
// import EventCard from "@/components/cards/event-card-2";

export default {
  created() {
    let events;
    axios
      .get("/api/events/find")
      .then((res) => {
        events = res.data.events;
        console.log(events);
        this.Events = events;
      })
      .catch((err) => {
        alert(err);
      });
  },
  data() {
    return {
      Events: [],
    };
  },
  components: {
    EventCard,
    // Navbar
  },
  methods: {
    go_to_dashboard() {
      this.$router.push("/dashboard/me/home");
    },
  },
};
</script>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 5px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.section {
  &-header {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    // clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    padding: 1rem 3rem 1rem 1rem;
    background: #f9bb0f;
    display: inline-block;
    font-size: 1.5rem;
  }
  &-sub-header {
    // clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    // clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    padding: 1rem 3rem 1rem 1rem;
    background: #f9bb0f;
    display: inline-block;
    font-size: 1rem;
  }
}

.btn-action {
  border-radius: 0% !important;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
}

section {
  min-height: 100vh;
  max-height: 100%;
}
.scroll-down {
  margin-top: 10rem;
  animation: scroll-down 1s infinite;
}

@keyframes scroll-down {
  0% {
    margin-top: 10rem;
  }
  50% {
    margin-top: 12rem;
  }
  100% {
    margin-top: 10rem;
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero {
  position: relative;
  overflow: hidden;
  &_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      opacity: 0.5;
      transform: scale(1.7);
      animation: hero_animation 2s;
    }
  }
}

@keyframes hero_animation {
  from {
    transform: scale(5);
  }
  to {
    transform: scale(1.7);
  }
}

.dc-logo {
  padding-top: 12%;
  font-size: 10rem;
  font-weight: 700;
  color: #fff;

  img {
    transform: scale(0.6) !important;
  }
}

.dark {
  background: #232526; /* fallback for old browsers */
}

.hero {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.dc-team {
  background-image: url("../assets/bg-square.svg");
  background-size: cover;
  &-heading {
    font-size: 3rem;
    :nth-child(3) {
      font-size: 2rem;
    }
  }
}

.collaborate {
  color: #f9bb0f;
  font-weight: 600;
}

.core-team-img {
  transform: scale(0.6) !important;
}

.posts {
  :nth-child(1) {
    font-size: 1.2rem;
  }
  :nth-child(5) {
    font-size: 1.2rem;
  }
  :nth-child(3) {
    font-size: 1.5rem;
    // background: linear-gradient(to right ,#fecf0000 ,#383838 50%, #fecf0004);
    font-weight: 500;
    border-top: 1px solid #232526;
    border-bottom: 1px solid #232526;
    transform: scale(1.2);
  }
}

.dev {
  &-1,
  &-2,
  &-3 {
    display: inline-block;
  }
}
</style>
