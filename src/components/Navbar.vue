<template>
  <div >
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top  bg-dark" style="background : #fff">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="../assets/dc-logo-white.svg" alt="dc-navbar-logo-brand"></a>
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
            <button v-if="!loggedIn" @click="loginPage()" class="btn btn-outline-warning rounded-pill px-4" type="button">
              Sign in
            </button>            
            <button v-if="loggedIn" @click="logout()" class="btn btn-warning rounded-pill mx-3 px-4" type="button">
              SignOut
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  },
  data() {
    return {
    }
  },
  methods: {   
    loginPage() {  
      this.$router.push('/login');      
    },
    registerPage() {  
      this.$router.push('/register');      
    },
    logout(){
      this.$store.dispatch('destroyToken')
      .then(res=>{
        this.$router.push({name:'login'})
      })
    }
  },
};
</script>

<style lang="css" scoped>

.navbar-brand img{
  width: 60px;
}

 .active {   
   /* border-bottom: 2px solid #fed000 !important; */
   color: #fed000 !important;
 }
</style>
