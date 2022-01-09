import axios from 'axios'
import { getSession, removeToken,removeLoginState,getLocale} from "./auth";
import { Toast } from 'vant';
import store from '../store'
import router from '../router'
import md5 from 'js-md5'
import {getlangs} from '@/assets/lang/getlang'

const service = axios.create({
  baseURL: store.state.common.baseURL, // url = base url + request url
  timeout: 15000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    if(!config.closeLoad){
      store.commit('common/ADD_LOADING');
    }
    let str = Math.random().toString(36).substr(2);
    let apps = store.state.common.appState=='true'?'1':'0';
    config.headers = {
      'project':store.state.common.project,
      'ost':apps,
      'sign':md5(str+'52d234b7'),
      'noncestr':str || '00000000',
      'RZQAPIVERSION':"1.0.1",
      'lang':getLocale(),
      'address': !getSession()?'':getSession(),
      // 'sessionid': !getSession()?'':getSession(),
      'Content-Type': config.url=='/Ctrl/upload'?'multipart/form-data':'application/json',
    };
    return config;
  },
  error => {
    store.commit('common/SET_LOADING');
    // do something with request error

    console.log(error); // for debug
    return Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    if(!response.config.closeLoad){
      store.commit('common/CLOSE_LOADING');
    }
    if(!response){
      store.commit('common/SET_LOADING');
      return;
    }
    const res = response.data;
    if(res.code=='SYS-ERROR'){
      return false
    }
    if (res.code === 'notlogin' ) {
      let lang = getlangs();
      Toast(lang.jslang.dlsx);
      removeLoginState();
      // router.push('/login');
      router.push('/importOrcreate');
    }else {
      return res;
    }
  },
  error => {
    store.commit('common/SET_LOADING');
    let  config = error.config;
    let lang = getlangs();
    //检查超时 超时重连
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Toast(lang.jslang.qqcs);
    }
    if (error && error.response) {

      switch (error.response.status) {
        case 400:
          error.message = lang.jslang.qqcw;
          break;

        case 401:
          error.message =  lang.jslang.wsq;
          break;

        case 403:
          error.message = lang.jslang.jjfw;
          break;

        case 404:
          // error.message = '请求地址出错';
          error.message = lang.jslang.qqdzcc;
          break;

        case 408:
          // error.message = '请求超时';
          error.message = lang.jslang.qqcs;
          break;

        case 500:
          // error.message = '服务器内部错误';
          error.message = lang.jslang.fwnbcw;
          break;

        case 501:
          // error.message = '服务未实现';
          error.message =lang.jslang.fwwsx;
          break;

        case 502:
          // error.message = '网关错误';
          error.message = lang.jslang.wgcw;
          break;

        case 503:
          // error.message = '服务不可用';
          error.message = lang.jslang.fwbky;
          break;

        case 504:
          // error.message = '网关超时';
          error.message =lang.jslang.wgcs;
          break;
        case 505:
          // error.message = 'HTTP版本不受支持';
          error.message = lang.jslang.httpbb;
          break;
        default:
          error.message = lang.jslang.qqcw;
          // error.message = '请求错误';
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // error.message = '连接服务器失败----服务器繁忙，请稍后再试';
      error.message = lang.jslang.ljfm;
    } else {
      // Something happened in setting up the request that triggered an Error
      error.message = lang.jslang.wlwt;
      // error.message = '网络出现问题，请稍后再试';
    }

    Toast(error.message);
    return Promise.reject(error)
  }
);

export default service
