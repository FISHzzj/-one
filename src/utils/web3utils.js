import {
  Toast,
  Dialog
} from "vant";

//保留小数位   小数转大数
export function toDigit(num, digit) {
  num = num || 0;
  digit = digit || 0;
  let strNum = num.toString().split(".");
  if (strNum.length == 1) {
    return strNum[0] + "" + digitNum(digit);
  } else {
    strNum = strNum[0] + strNum[1] + digitNum(digit - strNum[1].length);
  }
  // strNum =  strNum +''+  digitNum(digit);
  return strNum;
}

// 大数转小数  处理
export function digitWei(num, digit) {
  num = num || 0;
  digit = digit || 0;
  let strNum = num.toString();
  let length = strNum.length;
  //返回值小于位数的情况 即有小数点
  if (length <= digit) {
    strNum = "0." + digitNum(digit - length) + "" + strNum;
  } else {
    strNum =
      strNum.substr(0, strNum.length - digit) +
      "." +
      strNum.substr(strNum.length - digit);
  }
  return strNum;
}
//补0操作
function digitNum(digit) {
  let a = "";
  for (let i = 0; i < digit; i++) {
    a += "0";
  }
  return a;
}

//获取登了
export function enable() {
  return new Promise((resolve, reject) => {
    if (typeof window.web3 !== "undefined") {
      ethereum
        .enable()
        .then(accounts => {
          // if (ethereum.networkVersion !== "56" && ethereum.networkVersion !== "111222") {
          //   alert("此应用程序需要BSC主网络，请在您的钱包中切换它。");
          // }
          console.log("accounts", accounts);
          // store.commit("user/SET_ADDRESS", accounts[0]);
          localStorage.setItem('SET_ADDRESS', accounts[0])
          resolve(accounts[0]);
        })
        .catch(function (reason) {
          if (reason === "User rejected provider access") {
            //用户不想登录!  退出
            resolve(false);
          } else {
            // Toast(lang.ljsb);
            resolve(false);
          }
        });
    } else {
      resolve(false);
      alert("看起来你需要一个Dapp浏览器来启动。");
    }
  });
}