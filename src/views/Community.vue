<template>
  <div>
    <!-- NAVIGATION -->
    <Navbar />

    <main class="story">
      <section class="story_header">
        <p
          class="story_header-text text-center"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          our story.
        </p>
      </section>
      <section class="story_title">
        <p class="story_title-text">
          <span class="quote">"</span> a little story about a big dream
          <span class="quote">"</span>
        </p>
      </section>

      <section class="story_team">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-12">
            <img
              draggable="false"
              data-aos="fade-up"
              data-aos-duration="1000"
              class="img-fluid"
              src="@/assets/team/founder.jpg"
              alt="team member"
            />
          </div>
          <div class="divider" style="margin : 3rem 0rem"></div>
          <div class="col-sm-12 col-md-6 col-lg-12">
            <img
              draggable="false"
              data-aos="fade-up"
              data-aos-duration="1000"
              class="img-fluid"
              src="@/assets/team/co-founders.jpg"
              alt="team member"
            />
          </div>
          <div class="divider" style="margin : 3rem 0rem"></div>
          <div class="col-sm-12 col-md-6 col-lg-12">
            <img
              draggable="false"
              data-aos="fade-up"
              data-aos-duration="1000"
              class="img-fluid"
              src="@/assets/team/dev-1.jpg"
              alt="team member"
            />
          </div>
          <div class="divider" style="margin : 3rem 0rem"></div>
          <div class="col-sm-12 col-md-6 col-lg-12 mb-5">
            <img
              draggable="false"
              data-aos="fade-up"
              data-aos-duration="1000"
              class="img-fluid"
              src="@/assets/team/dev-2.jpg"
              alt="team member"
            />
          </div>
        </div>
      </section>
      <section class="story_body">
        <img
          draggable="false"
          class="img-fluid dc-story"
          src="@/assets/team/dc-story.svg"
          alt="team member"
        />
      </section>
      <section class="join-team text-center">
        <p class="quote fw-bold">
          " If everyone is moving forward together, then success takes care of
          itself "
        </p>
        <p class="author"><i>- Henry Ford</i></p>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");

$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;

// Navbar
.dropdown-item {
  transition: background 0.2s ease;
  &:hover {
    background: $primary;
  }
}

.nav-item {
  margin-right: 1.5rem;
  // border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    font-weight: 500;
    backface-visibility: hidden;
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0%;
    background: $primary;
    height: 5px;
    opacity: 0;
    transition: width 0.2s ease-in-out;
  }
  &:hover {
    // border-bottom: 2px solid $primary;
  }
}

main {
  font-family: montserrat;
}

.story {
  &_header {
    padding: 5rem;
    margin-top: 2rem;
    background: $primary;
    &-text {
      color: $dark;
      font-size: 5rem;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  &_title {
    position: relative;
    padding: 5rem;
    margin: 5rem 0rem;
    &-text {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      .quote {
        color: $primary;
        font-size: 3rem;
        margin: 0px 1rem;
      }
    }
    &::after {
      position: absolute;
      content: "";
      width: 15rem;
      height: 5px;
      bottom: 70px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: $primary;
      animation: underline 1s ease;
    }
  }

  &_team {
    margin-bottom: 5rem;
  }

  &_body {
    padding: 5rem 20rem;
  }
}

.dc-story {
  transform: scale(0.75);
}

.join-team {
  background: $primary;
  padding: 5rem;
  .quote {
    font-size: 2rem;
    font-weight: bold;
  }
  .author {
    font-size: 1rem;
  }
}

.footer {
  padding: 2rem;
  background: $dark;
  color: #fff;
}

@keyframes underline {
  0% {
    width: 0rem;
  }
  100% {
    width: 15rem;
  }
}
</style>
