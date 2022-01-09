import {
  getconfig
} from "./getconfigVal";
import {
  getConfigJson
} from "../api/ctrl";
import {
  Toast,
  Dialog
} from "vant";
import router from "../router";
import store from "../store";
import {
  getlangs
} from "@/assets/lang/getlang";
const lang = getlangs();
import {
  digitWei
} from './web3utils.js'
//合约
const tokenabi = require("@/assets/LizToken");
const minerabi = require("@/assets/RowMiner");
const web3 = new Web3(window.web3.currentProvider);

let contract = new web3.eth.Contract(minerabi.minerabi, store.state.user.addressone);

getConfigJson();


//质押VIP5   需要多少CRE
export async function getMaxVipPrice() {
  try {
    let {
      code,
      result
    } = await contractMethods('getMaxVipPrice')
    if (code) {
      // return result.map((item)=>{
      //  return digitWei(item, 8)
      // })
    } else {
      return []
    }
  } catch (e) {
    return 0
  }
}


//每K算力
export async function getOneShare() {
  try {
    let {
      code,
      result
    } = await contractMethods('getOneshareNow')
    if (code) {
      return result || 0;
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}
//全网算力
export async function getTotalHash() {
  try {
    let {
      code,
      result
    } = await contractMethods('getTotalHash')
    if (code) {
      return result || 0
    } else {
      return []
    }
  } catch (e) {
    return 0
  }
}

//流通量
export async function getLiquidity() {
  try {
    let {
      code,
      result
    } = await contractMethods('getLiquidity')
    console.log('getLiquidity', result)
    if (code) {
      // return result.map((item)=>{
      //  return digitWei(item, 8)
      // })
    } else {
      return []
    }
  } catch (e) {
    return 0
  }
}

//挖矿地址数
export async function getMinerCount() {
  try {
    let {
      code,
      result
    } = await contractMethods('getMinerCount')
    if (code) {
      // return result.map((item)=>{
      //  return digitWei(item, 8)
      // })
    } else {
      return []
    }
  } catch (e) {
    return 0
  }
}



//我的CRE质押数
export async function getMyCREStack() {
  try {
    let {code,result } = await contractMethods('getUserInfo', {
      address:store.state.user.address ,num:8
    })
    console.log(result)
    if (code) {
      // return result.map((item)=>{
      //  return digitWei(item, 8)
      // })
    } else {
      return 0
    }
  } catch (e) {
    return 0
  }
}

//全网块产币量
export async function getMineCount() {
  try {
    let {
      code,
      result
    } = await contractMethods('getMineCount')
    console.log(result)
    if (code) {
      // return result.map((item)=>{
      //  return digitWei(item, 8)
      // })
    } else {
      return []
    }
  } catch (e) {
    return 0
  }
}


//CRE区块
export async function getCREBlock() {
  try {
    let {
      code,
      result
    } = await contractMethods('getCREBlock')
    console.log('getCREBlock', result)
    if (code) {
      // return result.map((item)=>{
      //  return digitWei(item, 8)
      // })
    } else {
      return []
    }
  } catch (e) {
    return 0
  }
}



//查询奖励
export async function getPendingCoin() {
  let {
    code,
    result
  } = await contractMethods('getPendingCoin', {
    address: store.state.user.address
  })
  if (code) {
    return result.map((item) => {
      return digitWei(item, 8)
    })
  } else {
    return []
  }
  // contract.methods.getPendingCoin(store.state.user.address)
  //   .call((err, result) => {
  //     console.log("err", err);
  //     console.log("result", result);
  //     if (err) {
  //       resolve(0);
  //       // resolve(false);
  //     }
  //     if (result) {

  //     }
  //   });
}


//领取奖励
export async function WithDrawCredit() {
  if (typeof window.web3 !== "undefined") {
    let data = [{
      from: store.state.user.address,
      to: store.state.user.addressone,
      value: "0x0",
      // gasprice: web3.utils.toHex(2000000),
      // gasLimit:web3.utils.tohex(2000000),
      data: contract.methods.WithDrawCredit().encodeABI()
    }];
    let params = {
      method: "eth_sendTransaction",
      params: data,
      from: store.state.user.address // Provide the user's account to use.
    }
    let {
      code,
      result
    } = await sendAsync(params)
    if (code) {
      return inquire(result)
    } else {
      return code
    }
  } else {
    resolve(false);
  }
}






//web3查询
/**
 * methodName    方法名  必传
 * address      地址  非必传
 * contracts    合约    非必传
 **/
function contractMethods(methodName, params, contracts = contract) {
  return new Promise((resolve, reject) => {
    store.commit("common/ADD_LOADING");
    try {
      if (typeof window.web3 !== "undefined") {
        if (params.address) {
          contracts.methods[methodName](params.address,params.num).call((err, result) => {
            store.commit("common/CLOSE_LOADING");
            resolve({
              code: true,
              result: result
            });
          });
        } else {
          contracts.methods[methodName]().call((err, result) => {
            store.commit("common/CLOSE_LOADING");
            resolve({
              code: true,
              result: result
            });
          });
        }
      } else {
        Toast(lang.wazweb3);
        reject(false);
      }
    } catch (e) {
      console.log(e)
      store.commit("common/CLOSE_LOADING");
      reject(false);
    }
  });
}
//异步交易
function sendAsync(params) {
  return new Promise((resolve, reject) => {
    try {
      ethereum.sendAsync(
        params,
        (err, result) => {
          //错误处理
          if (result.error) {
            if (result.error.code == 4001 || result.error.code == -32603) {
              Toast(lang.qxjy);
            } else {
              Toast(lang.ljsb);
            }
            resolve({
              code: false
            });
          }
          resolve({
            code: true,
            result: result.result
          })
        }
      );
    } catch (e) {
      resolve({
        code: false
      })
    }
  })
}
//结果查询
function inquire(result, tips = lang.shtip2) {
  const shalou = require("@/assets/img/Loading.gif");
  const shouquan = require("@/assets/img/shouquan.png");
  const nolp = require("@/assets/img/nolp.png");
  try {
    return new Promise((resolve, reject) => {
      let a = setInterval(() => {
        web3.eth.getTransactionReceipt(result).then(res => {
          if (res) {
            Dialog.close();
            clearInterval(a);
            resolve(true);
          } else {
            Dialog.alert({
              allowHtml: true,
              message: '<div class="loadingchaxun"><p><img width="90" src=' +
                shalou +
                ` /></p><p class="tips">${lang.ts}</p><p class="chaxun">${tips}......</p></div>`,
              showConfirmButton: false,
              showCancelButton: false
            });
          }
        });
      }, 200);
    })
  } catch (e) {
    resolve(false);
  }
}
