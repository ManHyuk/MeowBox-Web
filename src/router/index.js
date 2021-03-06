import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import { SignRoutes, SignInRoutes, SignUpRoutes } from './sign'
import StoryRoutes from './story'
import ReviewRoutes from './review'
import OrderRoutes from './Order'

Vue.use(Router)

export default new Router({
  routes: [ HomeRoutes, SignInRoutes, SignUpRoutes, SignRoutes, StoryRoutes, ReviewRoutes, OrderRoutes ],
  mode: 'history'

})
