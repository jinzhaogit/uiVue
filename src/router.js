import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShopCarContainer from './components/ShopCarContainer.vue'

var router=new VueRouter({
    routes:[ //路由匹配规则     
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopCarContainer}
    ],
    linkActiveClass:'mui-active' //覆盖默认高亮类
})
export default router