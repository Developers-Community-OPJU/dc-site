<template>
  <div class="blog-header sticky-top">
    <p class="tag">web development</p>
    <p class="title">Please motivate your team, but responsibly</p>
    <p class="description">
      What are the pros and cons of becoming emotionally attached to your
      project?
    </p>
    <div class="actions">
      <a class="action-btn" draggable="false" href="#"
        ><img draggable="false" src="@/assets/icons/award.svg" alt="award-icon"
      /></a>
      <a class="action-btn" draggable="false" href="#"
        ><img
          draggable="false"
          src="@/assets/icons/bookmark.svg"
          alt="bookmark-icon"
      /></a>
      <a class="action-btn" draggable="false" href="#"
        ><img
          draggable="false"
          src="@/assets/icons/message-square.svg"
          alt="comment-icon"
      /></a>
    </div>
    <div class="author">
      <a href="#" class="m-0 p-0 text-dark">aman vishwakarma</a>
      <a href="#" class="lead p-0 m-0 text-dark post-date"
        ><small>26 Nov, 2020</small></a
      >
    </div>
    <div class="tags mt-4">
      <span class="badge bg-light text-dark mr-3">EDitojs</span>
      <span class="badge bg-light text-dark mr-3">npm</span>
      <span class="badge bg-light text-dark mr-3">node js</span>
      <span class="badge bg-light text-dark mr-3">api</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");
$primary: #f9f10f;
$primary-dark: #fff01b;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;
$mustard: #f9bb0f;

.blog-header {
  padding-top: 5rem;
  padding-left: 10rem;
  font-family: "Montserrat";
  .title {
    font-size: 30px;
    font-weight: 800;
    text-transform: capitalize;
  }
  .tag {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: $mustard;
    // background: $primary;
    // display: inline-block;
    padding: 0.25rem 0.5rem;
  }

  .description {
  }
}

.actions {
  margin-top: 2rem;
  .action {
    &-btn {
      margin-right: 1.5rem;
      border-radius: 5px;
      padding: 1rem;
      transition: all 0.3s ease;
      &:hover {
        background: rgba($primary, 0.75);
      }
      &:active {
        background: $primary-dark;
        img {
          transform: scale(0.9);
        }
      }
      img {
        transform: scale(1);
        transition: transform 0.2s ease-in-out;
      }
    }
  }
}

.author {
  font-family: "Montserrat";
  margin: 3rem 1rem 0rem 0rem;
  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
    &:hover {
      text-decoration: underline !important;
    }
  }
  .post-date {
    display: block;
  }
}
</style>
