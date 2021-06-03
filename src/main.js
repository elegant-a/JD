import { createApp } from 'vue'
// 引入了appVue组件
import App from './App.vue'
import router from './router'
import store from './store'
// 引入'normalize.css'
import 'normalize.css'
import './style/index.scss'

// 整个程序的入口,使用了Router,VueX
// 创建了Vue组件的实例
// 创建了一个APP挂载到了页面上id=app的节点上
createApp(App).use(store).use(router).mount('#app')
