<template>
  <div class="desk-home bg-light">
    <section class="section px-5 pt-5">
      <h6 class="section-header text-uppercase d-inline-block">
        UpComing Events
      </h6>
      <div class="row mt-3">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Event title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="link d-flex justify-content-between">
                    <a href="#" class="card-link">View</a>
                    <a href="#" class="card-link">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section px-5 pt-5">
      <h6 class="section-header text-uppercase d-inline-block">
        recent blogs
      </h6>
      <div class="row mt-3">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, hic.</h5>             
             <div class="link mt-3 d-flex justify-content-between">
                    <a href="#" class="card-link">Read Now</a>
                    <a href="#" class="card-link">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, hic.</h5>             
             <div class="link mt-3 d-flex justify-content-between">
                    <a href="#" class="card-link">Read Now</a>
                    <a href="#" class="card-link">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, hic.</h5>             
             <div class="link mt-3 d-flex justify-content-between">
                    <a href="#" class="card-link">Read Now</a>
                    <a href="#" class="card-link">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,900&display=swap");

// variables
$primary: #f9f10f;
$dark: #232526;
$secondary: #707070;
$light: #f5f5f5;
$mustard: #f9bb0f;

.desk-home{
    background: $light;
    min-height: 100vh;
    max-height: 100%;
}

.card{
    &-title{
        font-size: 16px;
    }
    &-link{
        text-decoration: none;
        color: $dark; 
    }
}

.card-link {
     position: relative;
      transition: all 0.2s ease;
  &:hover {
    backface-visibility: hidden;
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
  &::after {      
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0px;
    width: 0%;
    background: $primary;
    height: 5px;
    opacity: 0;
    transition: width 0.2s ease-in-out;
  }  
}

</style>
