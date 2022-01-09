import CryptoJS from 'crypto-js/crypto-js'
import { getToken } from './auth'

/**
 * AES加密 ：字符串 key iv  返回base64
 */
export function Encrypt(data) {
  var token = getToken();
  const KEY = CryptoJS.enc.Utf8.parse(token);
  const IV = CryptoJS.enc.Utf8.parse("0392039203920300");
  //加密
  var encrypted = CryptoJS.AES.encrypt(data, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return encrypted.toString()
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *
 */
export function Decrypt(word, keyStr, ivStr) {
  var token =  getToken();
  const KEY = CryptoJS.enc.Utf8.parse(token);
  const IV = CryptoJS.enc.Utf8.parse("0392039203920300");

  //解密
  var decrypted = CryptoJS.AES.decrypt(word, KEY, {
    iv: IV,
    padding: CryptoJS.pad.ZeroPadding
  });
  return decrypted.toString(CryptoJS.enc.Utf8)

}
