import Cookies from 'js-cookie'


const TokenKey = 'token';
const LocaleKey = 'locale';
const SessionKey = 'session';
const LoginStateKey = 'loginstate';
const guide = 'ffrguide';
const nameKey = 'username';
const addrKey = 'addrList';
const syscoin = 'syscoin';
const isshownum = 'ffrisShowNum'; //估值显隐


export function getToken() {
  let a = localStorage.getItem(TokenKey);
  let b = Cookies.get(TokenKey);
  return a || b;
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token);
  Cookies.set(TokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey);
  Cookies.remove(TokenKey)
}

//语言
export function getLocale() {
  let a = localStorage.getItem(LocaleKey);
  let b = Cookies.get(LocaleKey);
  return a || b;
}

export function setLocale(locale) {
  localStorage.setItem(LocaleKey, locale);
  Cookies.set(LocaleKey, locale)
}

export function removeLocale() {
  localStorage.removeItem(LocaleKey);
  Cookies.remove(LocaleKey)
}

//session
export function getSession() {
  let a = localStorage.getItem(SessionKey);
  let b = Cookies.get(SessionKey);
  return a || b;
}

export function setSession(session) {
  localStorage.setItem(SessionKey, session);
  Cookies.set(SessionKey, session)
}

export function removeSession() {
  localStorage.removeItem(SessionKey);
  Cookies.remove(SessionKey)
}

//LoginState
export function getLoginState() {
  let a = localStorage.getItem(LoginStateKey);
  let b = Cookies.get(LoginStateKey);
  return a || b
}

export function setLoginState(session) {
  localStorage.setItem(LoginStateKey, true);
  return Cookies.set(LoginStateKey, true)
}

export function removeLoginState() {
  localStorage.removeItem(LoginStateKey);
  return Cookies.remove(LoginStateKey)
}

// 清理Reginfo 
export function clearReginfo() {
  store.commit('user/SET_REGPAW', ''); // 密码
  store.commit('user/SET_REGCODE', ''); // 邀请码
  store.commit('user/SET_REGNAME', ''); // 用户名
  store.commit('user/SET_MWORDS', ''); // 助记词
}


export function getGuide() {
  let a = localStorage.getItem(guide);
  let b = Cookies.get(guide);
  return a || b;
}

export function setGuide() {
  localStorage.setItem(guide, true);
  return Cookies.set(guide, true)
}

export function getUserToken() {
  return Cookies.get(nameKey)
}

export function setUserToken(token) {
  if (token.length <= 0) token = '';
  return Cookies.set(nameKey, token)
}

export function removeUserToken() {
  return Cookies.remove(nameKey)
}

export function getAddrList() {
  return Cookies.get(addrKey)
}

export function setAddrList(list) {
  return Cookies.set(addrKey, list)
}

export function removeAddrList() {
  return Cookies.remove(addrKey)
}

export function getSyscoin() {
  return Cookies.get(syscoin)
}

export function setSyscoin(list) {
  return Cookies.set(syscoin, list)
}


//估值显隐
export function getIsShowNum() {
  let a = localStorage.getItem(isshownum);
  let b = Cookies.get(isshownum);
  return a || b;
}

export function setIsShowNum(state) {
  localStorage.setItem(isshownum, state);
  return Cookies.set(isshownum, state);
}

//上次已选
export function getSelectGame(userid) {
  return localStorage.getItem(userid);
}

export function setSelectGame(userid, msg) {
  return localStorage.setItem(userid, msg);
}

// 设置公告idx
export function setNewsIdx(idx) {
  return Cookies.set('newsidx', idx)
}
// 获取公告idx
export function getNewsIdx() {
  return Cookies.get('newsidx')
}

// 设置购买数据
export function setBuy(val) {
  localStorage.setItem('Buyinfo', val);
}
//获取购买数据
export function getBuy() {
  if (localStorage.getItem("Buyinfo") != null) {
    return localStorage.getItem('Buyinfo');
  } else {
    return '';
  }

}
// 设置购买缓存数据
export function setSell(val) {
  return localStorage.setItem('Sellinfo', val);
}
//获取出售数据
export function getSell() {
  if (localStorage.getItem("Sellinfo") != null) {
    return localStorage.getItem('Sellinfo');
  } else {
    return '';
  }
}
