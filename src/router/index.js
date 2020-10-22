import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'



import Index from "../pages/Index"
import EveryNew from "../pages/EveryNew"
import DetailsPage from "../pages/DetailsPage"



// 安装vueRouter（把vurRouter插到vue里）
Vue.use(Router)


// 1.路由的配置
// let router=[
//   {
//     path:"/Index",
//     component:"EveryNew"
//   }
// ]


// // 创建vurrouter对象
// let routerobj =new Router({
//   router
// })

// export default routerobj;




export default new Router({
  routes: [
    {
      path:"/",
      component:Index
    },
    {
      path:"/EveryNew",
      component:EveryNew
    },
    {
      path:"/Index",
      component:Index
    },
    {
      path:"/DetailsPage/:id",
      component:DetailsPage
    }
  ],
  mode:"history" 
})
