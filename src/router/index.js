import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import HomeView from '../views/HomeView.vue'
import Blog from '../views/Blog.vue'
import Dashboard from '../views/Dashboard.vue'
import BlogHome from '../components/dashboard/blog/Blog.vue'
import DashboardHome from '../components/dashboard/Home.vue'
import store from '../store'

// Route imports
import activityRoutes from "./modules/activity"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/dpaper',
    name: 'dpaper',
    component: () => import('../views/DPaper.vue')
  },
  {
    path: '/issues',
    name: 'issues',
    component: () => import('../views/Issues.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },

  // ACTIVITY ROUTES
  activityRoutes,

  // BLOG ROUTES
  {
    path: '/blogs',
    name: 'blogs',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: 'blogview',
    component: () => import('../components/blog/BlogView.vue'),
  },

  // DASHBOARD ROUTES 
  {
    path: '/dashboard/me',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home/',
        name: 'dashboardHome',
        component: DashboardHome,
      },
      {
        path: 'blog',
        component: BlogHome,
        children: [
          {
            path: 'create',
            name: 'create',
            component: () => import('../components/dashboard/blog/Create.vue'),
          }
        ]
      },

      {
        path: 'eventManager/',
        name: "EventManager",
        meta: {
          requiredAdmin: true
        },
        component: () => import('../components/dashboard/eventManager/event.vue'),
        children: [{
          path: 'createNew',
          component: () => import('../components/dashboard/eventManager/createEvent.vue')
        },
        {
          path: 'listAll',
          component: () => import('../components/dashboard/eventManager/ListAllEvent.vue')
        },
        {
          path: 'loadLast',
          component: () => import('../components/dashboard/eventManager/createEvent.vue')
        },]
      },
      // User Manager
      {
        path: 'userManager/',
        name: "userManager",
        meta: { requiresAuth: true },
        component: () => import('../components/dashboard/userManager/Manager.vue'),
        children:
          [{
            path: 'registerNewUser',
            name: 'registerNewUser',
            component: () => import('../components/dashboard/userManager/register.vue')
          },
          ]
      },
      // User Manager
      {
        path: 'projectManager/',
        name: "projectmanager",
        meta: { requiresAuth: true },
        component: () => import('../components/dashboard/projectManager/ProjectManager.vue'),
        children:
          [
            {
              path: 'add',
              name: 'addNewProject',
              component: () => import('../components/dashboard/projectManager/AddProject.vue')
            },
            {
              path: 'show',
              name: 'showAllProjects',
              component: () => import('../components/dashboard/projectManager/ShowAllProject.vue')
            },
          ]
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    window.scrollTo(0, 0)
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAdmin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.getCurrentUser.userRole == "DCA") {
      next()
    } else {
      alert("Not Allowed")
      next({
        name: 'login',
      })
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

export default router
