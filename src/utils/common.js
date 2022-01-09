import store from '../store'
import {
  Toast
} from 'vant';
import {
  getlangs
} from '@/assets/lang/getlang'
import {
  setNewsIdx,
  getNewsIdx
} from "@/utils/auth";
import {
  getSell,
  getBuy
} from './auth';
const lang = getlangs();

/**
 * 小数位保留
 * @param num    //当前数
 * @param digit  //保留位数
 * @param adapt  //是否补0
 * @returns {number}
 */
export function integer(num, digit, adapt = !digit) {
  num = num || 0;
  digit = digit || 2;
  let strNum = num.toString().split(".");
  if (strNum.length == 1) {
    strNum.push('00000000000000000000000000000000000')
  } else {
    strNum[1] = strNum[1] + '00000000000000000000000000000000000';
  }
  if (adapt) {
    strNum = parseFloat(strNum[0] + '.' + strNum[1].substr(0, digit));
  } else {
    strNum = strNum[0] + '.' + strNum[1].substr(0, digit);
  }

  return strNum;
}

/**
 * @param num    //当前数
 * @returns {number}
 */
export function rp(num) {
  switch (num) {
    case 1:
      return '一';
    case 2:
      return '二';
    case 3:
      return '三';
    case 4:
      return '四';
    case 5:
      return '五';
    case 6:
      return '六';
    case 7:
      return '七';
    case 8:
      return '八';
    case 9:
      return '九';
    default:
      return '零';
  }
}


/**
 *
 * @param date    //传入的时间
 * @param fmt     //格式  （yyyy-MM-dd）
 * @returns {*}
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/**
 *数字格式化
 * @param num    //传入的数字
 * @param point     //小数位数
 */
export function tranNumber(num, point) {
  num = !num ? 0 : num;
  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  let numStr = num.toString().split('.')[0];
  if (numStr.length < 5) { // 判断数字有多长,如果小于5,表示1万以内的数字,让其直接显示
    return numStr;
  } else if (numStr.length >= 5 && numStr.length <= 8) { // 如果数字大于5位,小于8位,让其数字后面加单位万
    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
    // 由千位,百位组成的一个数字
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
  } else if (numStr.length > 8) { // 如果数字大于8位,让其数字后面加单位亿
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
  }
}

/**
 *时间转换成几秒前、几分钟前、几小时前、几天前等格式
 */
export function getDateDiff(dateStr) {
  var publishTime = Date.parse(dateStr),
    d_seconds,
    d_minutes,
    d_hours,
    d_days,
    timeNow = parseInt(new Date().getTime() / 1000),
    d,

    date = new Date(publishTime),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  //小于10的在前面补0
  if (M < 10) {
    M = '0' + M;
  }
  if (D < 10) {
    D = '0' + D;
  }
  if (H < 10) {
    H = '0' + H;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }

  d = timeNow - publishTime / 1000;
  d_days = parseInt(d / 86400);
  d_hours = parseInt(d / 3600);
  d_minutes = parseInt(d / 60);
  d_seconds = parseInt(d);

  if (d_days > 0 && d_days < 10) {
    return d_days + '天前';
  } else if (d_days <= 0 && d_hours > 0) {
    return d_hours + '小时前';
  } else if (d_hours <= 0 && d_minutes > 0) {
    return d_minutes + '分钟前';
  } else if (d_seconds < 60) {
    if (d_seconds <= 0) {
      return '刚刚发表';
    } else {
      return d_seconds + '秒前';
    }
  } else if (d_days >= 10 && d_days < 30) { //大于10天小于30天 显示 XX-XX XX:XX
    return M + '-' + D + ' ' + H + ':' + m;
  } else if (d_days >= 30) {
    return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
  }
}

/**
 根据身份证号码判断性别
 15位身份证号码：第7、8位为出生年份(两位数)，第9、10位为出生月份，第11、12位代表出生日
 18位身份证号码：第7、8、9、10位为出生年份(四位数)，第11、第12位为出生月份，
 第13、14位代表出生日期，第17位代表性别，奇数为男，偶数为女。
 */
//根据身份证号获取年龄
export function GetAge(identityCard) {
  var len = (identityCard + "").length;
  var strBirthday = "";
  if (len == 18) //处理18位的身份证号码从号码中得到生日和性别代码
  {
    strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
  }
  if (len == 15) {
    var birthdayValue = '';
    birthdayValue = identityCard.charAt(6) + identityCard.charAt(7);
    if (parseInt(birthdayValue) < 10) {
      strBirthday = "20" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    } else {
      strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }

  }
  //时间字符串里，必须是“/”
  var birthDate = new Date(strBirthday);
  var nowDateTime = new Date();
  var age = nowDateTime.getFullYear() - birthDate.getFullYear();
  //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
  if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function onOmit(str,beforelen = 8,endlen = 5){
    return str.substring(0, beforelen) + "......" + str.substring(str.length - endlen, str.length)
}

export function noPassByName(str, num = 8) {
  if (null != str && str != undefined) {
    if (str.length <= 3) {
      return "*" + str.substring(1, str.length);
    } else if (str.length > 3 && str.length <= 6) {
      return "**" + str.substring(2, str.length);
    } else if (str.length > 6 && str.length < 11) {
      return str.substring(0, 3) + "****" + str.substring(str.length - 3, str.length)
    } else if (str.length > 16) {
      return str.substring(0, 5) + "..." + str.substring(str.length - 4, str.length)
    } else {
      return str.substring(0, 3) + "****" + str.substring(str.length - 5, str.length)
    }
  } else {
    return "";
  }
}


/**
 * @desc 函数防抖
 * @param func 目标函数
 * @param wait 延迟执行毫秒数
 */
export function debounce(func, wait) {
  let timeout = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function throttle(func, wait) {
  let timeout = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * 内置浏览器打开url
 * @param url    //链接
 * @returns
 */
export function openAppBrowser(url) {
  if (!url) return Toast(this.$t("lang.zwkf"));
  if (!store.getters.appState) {
    // self.location.href = url;
    window.open(url, "_blank")
  } else {
    if (!cordova.InAppBrowser) {
      return (window.open(url, "_blank"));
    }
    // location=yes, // 是否显示工具栏（地址栏）
    // fullscreen=no, //是否全屏显示（全屏时状态栏是处于隐藏状态）
    // hideurlbar=yes //隐藏位置工具栏上的url栏
    // toolbarcolor=#231e22 //设置工具栏上的背景颜色
    // navigationbuttoncolor=#ffffff //设置工具栏上按钮颜色（前进、后退）
    // closebuttoncolor=#ffffff //设置工具栏上关闭按钮颜色
    let options =
      "location=yes,fullscreen=no,hideurlbar=yes,toolbarcolor=#1b2c42,navigationbuttoncolor=#ffffff,closebuttoncolor=#ffffff";
    cordova.InAppBrowser.open(url, "_blank", options);
  }
}

/**
 * 首页公告第一条弹框
 * @param idx    // 公告idx
 * @returns boolean      （true|| false）
 */

export function openNotice(idx) {
  console.log(getNewsIdx())
  if (!getNewsIdx()) {
    setNewsIdx([idx]); //没有直接存储
    return true;
  } else {
    let b = JSON.parse(getNewsIdx());
    console.log(b)
    //includes  不包含当前idx才存储
    if (!b.includes(idx)) {
      b.push(idx);
      setNewsIdx(b);
      return true;
    } else {
      return false;
    }
  }
}

// 判断localstorage 是否包含交易HASH
export function isclude(listobj, type = 'sell') {
  let ishave = false,
    aaa = type == 'sell' ? JSON.parse(getSell()) : JSON.parse(getBuy());
    console.log(aaa.tradehash)
  listobj.forEach(item => {
    if (item.tradehash == aaa.tradehash) {
      ishave = true
    } else {
      ishave = false
    }
  });
  return ishave;
}



/* 时间戳转换成日期
* @param timestamp
* @returns {*}
*/
export function timestampToTime(timestamp) {
   var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
   let Y = date.getFullYear() + '-';
   let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
   let D = date.getDate() + ' ';
   let h = date.getHours() + ':';
   let m = date.getMinutes() + ':';
   let s = date.getSeconds();
   return Y+M+D+h+m+s;
}