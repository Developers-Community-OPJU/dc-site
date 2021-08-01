<template>
  <div class="about">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light shadow bg-transparent" style="background : #fff">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DC.</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse p-0" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">            
            <li class="nav-item">
              <router-link active-class="active" exact class="nav-link" to="/">Home</router-link>
            </li>          
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" to="/about">About</router-link>
            </li>          
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" to="/blogs">Blogs</router-link>
            </li>  
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" to="/community">Community</router-link>
            </li>  
          </ul>
          <form class="d-flex">            
            <button @click="go_to_dashboard()" class="btn btn-outline-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: value
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
