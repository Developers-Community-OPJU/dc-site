<template>
  <div>
    <!-- NAVIGATION -->
    <Navbar />
    <p class="text-center pt-5 mt-5" data-aos="fade-up" ><b>DPaper</b> will be available soon.</p>
         <div class="paper text-center">
             <img src="@/assets/dpaper.svg" alt="dc-paper">
        </div>
    <!-- <main class="dpaper">
      <section class="dpaper_header">
        <p class="text-center dpaper_header-text" data-aos="fade-right">DPaper</p>
        <p class="text-center dpaper_header-subtext" data-aos="fade-in">Everything about us.</p>
      </section>
      <section class="dpaper_news">
        <div
          class="row dpaper_news-item"
          v-for="paper in news"
          :key="paper.heeadline"
        >
          <div class="col-lg-2">
            <p class="text-right paper-date">{{ paper.date }} - </p>
          </div>
          <div class="col-lg-8">
            <div class="paper">
              <p class="paper-headline">
                {{ paper.heeadline }}
              </p>
              <p class="paper-subheadline">
                {{ paper.subheadline }}
              </p>
              <div class="tag">
                <a
                  v-for="tag in paper.tags"
                  :key="tag"
                  href="#"
                  class="tag-item btn rounded-pill btn-outline-dark"
                  >{{ tag }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main> -->
  </div>
</template>

<script>
import Navbar from "@/views/CommonNavbar.vue";
export default {
  data() {
    return {
      news: [
        {
          heeadline: "Launch of Student baseed develoepr community @OPJU",
          subheadline: "Students of OPJU with their new aim",
          tags: ["launch", "dc", "developers community", "students"],
          date: "10 Dec, 2020",
        },
        {
          heeadline: "Launch of Student baseed develoepr community @OPJU",
          subheadline: "Students of OPJU with their new aim",
          tags: ["launch", "dc", "developers community", "students"],
          date: "10 Dec, 2020",
        },
        {
          heeadline: "Launch of Student baseed develoepr community @OPJU",
          subheadline: "Students of OPJU with their new aim",
          tags: ["launch", "dc", "developers community", "students"],
          date: "10 Dec, 2020",
        },
      ],
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap");

// variables
$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;

p {
  font-family: montserrat;
  font-size: 1.5rem;
}

.paper {
  img {
    transform: scale(0.5);
  }
}

.dpaper_news {
  &-item {
    padding: 5rem 0rem;    
    &:hover {
      background: $light;
    }
  }
}

.dpaper {
  &_header {
    padding: 5rem;
    margin-top: 2rem;
    background: $primary;
    &-text {
      color: $dark;
      font-size: 3rem;
      font-weight: 800;
      font-family: "montserrat";
    }
    &-subtext {
      margin-top: -1rem;
      font-size: 1rem;
      font-family: "Playfair Display";
    }
  }
}

.paper {
  &-date {
    font-size: 1rem;
    margin-right: 2rem;
    padding: 0.5rem;
  }
  &-headline {
    font-weight: 700;
    font-family: "Playfair Display";
  }
  &-subheadline {
    font-size: 1rem;
  }
  .tag {
    &-item {
      padding: 0.25rem 2rem;
      margin: 0rem 0.5rem;
    }
  }
}
</style>
