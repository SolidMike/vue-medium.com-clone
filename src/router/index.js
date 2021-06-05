import Vue from 'vue'
import VueRouter from 'vue-router'
import McvGlobalFeed from '@/views/GlobalFeed'
import McvYourFeed from '@/views/YourFeed'
import Register from '@/views/Register'
import Login from '@/views/Login'
import McvTagFeed from '@/views/TagFeed'
import McvArticle from '@/views/Article'
import McvCreateArticle from '@/views/CreateArticle'
import McvEditArticle from '@/views/EditArticle'
import McvSettings from '@/views/Settings'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: McvGlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: McvYourFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: McvTagFeed
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: McvCreateArticle
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: McvEditArticle
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: McvArticle
  },
  {
    path: '/settings',
    name: 'settings',
    component: McvSettings
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: McvGlobalFeed
  },
  {
    path: '/profiles/:slug/favourites',
    name: 'userProfileFavourites',
    component: McvGlobalFeed
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
