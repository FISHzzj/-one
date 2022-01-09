import {
  removeSession,
  getSession,
  setLoginState,
  removeLoginState,
  getUserToken,
  setUserToken,
} from "@/utils/auth";
import Cookies from 'js-cookie'

const TokenKey = 'ffrenuser';

import crypto from 'crypto-js/crypto-js'

export function savauserlist(data) {
  //本地储存登录用户
  setLoginState();
  if (!getUserToken()) {
    setUserToken([data.username]);   //没有直接存储
  } else {
    let b = JSON.parse(getUserToken());
    //includes  不包含当前用户名才存储
    if (!b.includes(data.username)) {
      b.push(data.username);
      setUserToken(b);
    }
  }
}

function fn(arr) {
  let obj = {};
  return arr.reduce((cur, next) => {
    obj[next.username] ? "" : obj[next.username] = true && cur.push(next);
    return cur;
  }, []); //设置cur默认类型为数组，并且初始值为空的数组
}

//存
export function enuser(data) {
  if (!data.userid) return;
  data.privatekey = crypto.encrypt(data.privatekey);
  if (!localStorage.getItem(TokenKey)) {
    let str = JSON.stringify([data]);
    localStorage.setItem(TokenKey, str);
  } else {
    let parseStr = getuser();  //session
    let haves = false, index = 0;
    parseStr.forEach((i, idx) => {
      if (i.userid == data.userid) {
        haves = true;
        index = idx;
      }
    });
    if (haves) {
      //查询到里面有当前用户的信息则更新
      parseStr[index].privatekey = data.privatekey;
      parseStr[index].address = data.address;
      parseStr[index].username = data.username;
    } else {
      //未查询到添加
      parseStr.push(data);
    }
    let enstr = JSON.stringify(parseStr);
    localStorage.setItem(TokenKey, enstr);
  }
  try {

  } catch (e) {
    return []
  }
}

//取
export function getuser() {
  try {
    let b = localStorage.getItem(TokenKey) || [];
    let sessiondestr = b ? JSON.parse(b) : '';  //session
    // sessiondestr.filter((i)={
    //   return !i.userid
    // })

    return sessiondestr;
  } catch (e) {
    return []
  }
}

//删
export function reuser(userid) {
  try {
    console.log(userid)
    let b = localStorage.getItem(TokenKey) || [];
    let parseStr = b ? JSON.parse(b) : '';  //session
    let c = parseStr.filter(i => i.userid != userid);
    let enstr = JSON.stringify(c);
    localStorage.setItem(TokenKey, enstr);
  } catch (e) {
    return []
  }
}
