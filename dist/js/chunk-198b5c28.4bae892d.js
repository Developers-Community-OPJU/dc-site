(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-198b5c28"],{"5da1":function(e,t,s){"use strict";var o=s("5ea0"),r=s.n(o);r.a},"5ea0":function(e,t,s){},a55b:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row w-100 p-0 m-0",attrs:{id:"login-wrapper"}},[s("Navbar"),s("div",{staticClass:"col-lg-4 col-md-6 offset-lg-4 offset-md-3 col-sm-8"},[s("form",{staticClass:"form  dc-form",on:{submit:function(t){return t.preventDefault(),e.login()}}},[s("h3",{staticClass:"text-center font-weight-bold mb-5"},[e._v("Access Your Desk")]),s("div",{staticClass:"mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control ",attrs:{type:"text",name:"username",placeholder:"Username",required:"",minlength:"6"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),s("span",{staticClass:"focus-border"})]),s("div",{staticClass:"mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control ",attrs:{type:"password",name:"password",placeholder:"Password",required:"",minlength:"6"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),s("button",{staticClass:"btn btn-dark text-light w-100 mt-3",attrs:{type:"submit"}},[e._v(" Login ")]),s("button",{staticClass:"btn btn-link text-muted w-100 mt-3",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.registerPage()}}},[e._v(" Create a new Account? ")])])])],1)},r=[],n=s("94b5"),a={created:function(){this.$store.getters.loggedIn&&this.$router.push({name:"dashboardHome"})},computed:{showToken:function(){return this.$store.getters.getToken}},data:function(){return{user:{username:"",password:""}}},components:{Navbar:n["a"]},methods:{registerPage:function(){this.$router.push("/register")},login:function(){var e=this;this.$store.dispatch("generateToken",this.user).then((function(t){if(e.$store.getters.loggedIn)e.$router.push({name:"dashboardHome"}).then((function(t){e.$toast.info("Welcome",{position:"top-center",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!1,rtl:!1})}));else try{e.$store.dispatch("destroyToken").then((function(t){e.$toast.error("Invalid Credentials",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1})})).then((function(t){e.$router.push({name:"login"})}))}catch(s){alert(s)}}))}}},i=a,u=(s("5da1"),s("2877")),c=Object(u["a"])(i,o,r,!1,null,"5c6e2d02",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-198b5c28.4bae892d.js.map