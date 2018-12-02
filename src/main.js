//入口文件
import Vue from 'vue'
// 引入MUI的css样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需引入mint-ui组件
import {Header,Swipe,SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入APP跟组件
import app from './app.vue'
// 引入vue-router并注册
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入外部router文件
import router from './router'
// 引入vue-reource并注册
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router //挂载到vue中
})