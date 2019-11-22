import Vue from 'vue'
import Router from 'vue-router'
import Add from '../components/Add'
import Collect from '../components/Collect'
import Detail from '../components/Detail'
import Home from '../components/Home'
import List from '../components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/collect',component:Collect},
    {path:'/detail',component:Detail},
    {path:'/list',component:List},
    {path:'/add',component:Add}
  ]
})
