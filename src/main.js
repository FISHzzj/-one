// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import web3 from 'web3'

import '@/assets/css/override.css'
import '@/assets/css/font_icon_6164.css'

import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload, Dialog, Toast, Calendar, DatetimePicker,Switch, PasswordInput, NumberKeyboard, Loading } from 'vant';

import ajax from './callServer/ajax'
import * as apicloud from './apicloud'
// 引入 多语言 模块
import i18n from './i18n/index'
import store from './store/index'

// import VueSocketIO from 'vue-socket.io'



// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// let vConsole = new VConsole() // 初始化

Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(Calendar);
Vue.use(DatetimePicker);
Vue.use(Switch);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard)
Vue.use(Loading)
// Vue.use(web3)
// Vue.use(new Socketio({
//     debug: true,  //展示数据可以为true
//     connection:'/'  //ws的接口
// }));
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'ws://kiwigame.finance:8282',  
//     options: { path: "/", transports: ['websocket', 'polling', 'flashsocket'] }
// }))

Vue.config.productionTip = false
// Vue.prototype.Web3 = Web3
// Vue.prototype.$md5 = md5;

// console.log(md5('hello'))

// 某些 函数, 挂载 到 window 全局 上
window.Dialog = Dialog
window.Toast = Toast
window.$ajax = ajax
window.apicloud = undefined


// 将 多语言模块 挂载在 vue 的原型连上
let lang = localStorage.getItem('lang') || 'cn' // 获取语言, 默认为简体
i18n(Vue, lang)

window.apiready = async function() {
    window.apicloud = apicloud

    // 詢問 默認需要 開啓的權限
    let result = await apicloud.requestPermission(['photos', 'camera'])
    if ( typeof result !== 'boolean') {
        return alert(result)
    } else if (!result) {
        // 返回爲 fasle, 則 用戶選擇了取消授權, 進行提示
        Dialog.alert({
            message: '需要授予應用相機以及存儲權限,以上傳圖片'
        })
        return false
    }
}

// 进行路由 之前, 进行 判断
router.beforeEach((to,from,next) => {
    let isLogin = localStorage.getItem("openid") || false //獲取本地存儲的openid, 判斷狀態
    // console.log(!isLogin)
    // console.log(to.meta.mustLogin)
    // console.log(to.meta.mustLogin && !isLogin)
    window.scroll(0, 0) //每次切換頁面, 都滾動到頂部
    // 如果 必須登錄, 且 未登錄, 則 跳轉 登錄界面
    if (to.meta.mustLogin && !isLogin) {
        next({
            name:'login'
        })
    } else if ( isLogin && !to.meta.mustLogin ) {
        // 已經登錄 且 頁面無需登錄, 跳轉 資產頁面
        next({
            name: 'yangzhi'
        })
    } else if ( !to.meta.mustLogin || (to.meta.mustLogin && isLogin) ) {
        // 如果 無需登錄 或者 必須登錄且 已經 登錄, 則直接跳轉
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
