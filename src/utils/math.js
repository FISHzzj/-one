// 定义calc对象 包含加、减、乘、除运算
var calc = {
  /*
  函数，加法函数，用来得到精确的加法结果  
  说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
  参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数）；adapt 是否补零，默认false,不补零
  调用：Calc.Add(arg1,arg2,d，adapt)  
  返回值：两数相加的结果
  */
  Add: function (arg1, arg2) {
    arg1 = arg1.toString(), arg2 = arg2.toString();
    var arg1Arr = arg1.split("."),
      arg2Arr = arg2.split("."),
      d1 = arg1Arr.length == 2 ? arg1Arr[1] : "",
      d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
    var maxLen = Math.max(d1.length, d2.length);
    var m = Math.pow(10, maxLen);
    var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
    var d = arguments[2];
    var adapt = arguments[3] || false;
    if (!adapt) {
      return typeof d === "number" ? Number((result).toFixed(d)) : result;
    } else {
      let num = typeof d === "number" ? Number((result).toFixed(d)) : result;
      let strNum = num.toString().split(".");
      if (strNum.length == 1) {
        strNum.push('00000000000000000000000000000000000')
      } else {
        strNum[1] = strNum[1] + '00000000000000000000000000000000000';
      }
      strNum = strNum[0] + '.' + strNum[1].substr(0, d);
      return strNum;
    }
  },
  /*
  函数：减法函数，用来得到精确的减法结果  
  说明：函数返回较为精确的减法结果。 
  参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数
  调用：Calc.Sub(arg1,arg2,d)  
  返回值：两数相减的结果
  */
  Sub: function (arg1, arg2, d) {
    return calc.Add(arg1, -Number(arg2), d);
    // var r1, r2, m, n;
    // try {
    //   r1 = arg1.toString().split(".")[1].length
    // } catch (e) {
    //   r1 = 0
    // }
    // try {
    //   r2 = arg2.toString().split(".")[1].length
    // } catch (e) {
    //   r2 = 0
    // }
    // m = Math.pow(10, Math.max(r1, r2));
    // //last modify by deeka
    // //动态控制精度长度
    // n = (r1 >= r2) ? r1 : r2;
    // return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  /*
  函数：乘法函数，用来得到精确的乘法结果  
  说明：函数返回较为精确的乘法结果。 
  参数：arg1：第一个乘数；arg2第二个乘数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
  调用：Calc.Mul(arg1,arg2)  
  返回值：两数相乘的结果
  */
  Mul: function (arg1, arg2) {
    var r1 = arg1.toString(),
      r2 = arg2.toString(),
      m, resultVal, d = arguments[2];
    m = (r1.split(".")[1] ? r1.split(".")[1].length : 0) + (r2.split(".")[1] ? r2.split(".")[1].length : 0);
    resultVal = Number(r1.replace(".", "")) * Number(r2.replace(".", "")) / Math.pow(10, m);
    return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
  },
  /*
  函数：除法函数，用来得到精确的除法结果  
  说明：函数返回较为精确的除法结果。 
  参数：arg1：除数；arg2被除数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数),
  调用：Calc.Div(arg1,arg2,d,adapt)  
  返回值：arg1除于arg2的结果
  */
  Div: function (arg1, arg2) {
    var r1 = arg1.toString(),
      r2 = arg2.toString(),
      m, resultVal, d = arguments[2];
    m = (r2.split(".")[1] ? r2.split(".")[1].length : 0) - (r1.split(".")[1] ? r1.split(".")[1].length : 0);
    resultVal = Number(r1.replace(".", "")) / Number(r2.replace(".", "")) * Math.pow(10, m);
    return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
  },
  /*
  函数：自加函数（以最小位+1） 
  说明：函数返回较为精确的自加结果。 
  参数： arg1： 需要自加的参数
  调用： Calc.Add1(arg1)
  返回值：arg1加1的结果
  */
  Add1: function (arg1) {

    if (arg1 == "") {
      return 1 + "";
    } else {
      if (arg1.toString().indexOf(".") != -1) {
        if (arg1[0] != "0") {
          let a = arg1.split(".")[1].length; //a是小数位数
          let len = arg1.length; //字符串总长度包括.
          let b = arg1.replace(".", ""); //去掉b字符中的.
          let bb = parseInt(b); //将b字符转数字
          bb += 1; //+1
          let i = len - a - 1;
          let cc = bb.toString().slice(0, i) + "." + bb.toString().slice(i);
          return cc;
        } else {
          let n = parseInt(arg1.split(".")[1]);
          if (arg1.split(".")[1][0] != "0") {
            var m = n + 1;
            if (n.toString().length == m.toString().length) {
              return "0." + m.toString();
            } else {
              return m.toString().replace("1", "1.");
            }
          } else {
            let x = arg1.split(".")[1].length;
            let a = parseInt(arg1.split(".")[1]) + 1;
            let s = x - a.toString().length; //缺几个0
            let z = ""; //存0个数
            if (s == 0) {
              return "0." + a.toString();
            } else {
              for (let i = 0; i < s; i++) {
                z += "0";
              }
              return "0." + z + a.toString();
            }
          }
        }
      } else {
        return (parseInt(arg1) + 1).toString();
      }
    }
  },
  /*
  函数：自减函数（以最小位-1） 
  说明：函数返回较为精确的自加结果。 
  参数：arg1：需要自减的参数
  调用：Calc.Reduce1(arg1)  
  返回值：arg1减1的结果
  */
  Reduce1: function (arg1) {
    if (arg1.indexOf(".") != -1) {
      let f = parseInt(arg1.replace(".", ""));
      let h = arg1.split(".")[1].length;
      let z = parseInt(f - 1);
      let z0 = "";
      if (parseFloat(arg1) > 1) {
        return z.toString().substring(0, f.toString().length - h).toString() + "." + z.toString().substring(f
          .toString().length - h).toString();
      } else {
        let x = h - z.toString().length;
        for (let i = 0; i < x; i++) {
          z0 += "0";
        }
        arg1 = "0." + z0 + z.toString();
        if (parseFloat(arg1) == 0) {
          return "";
        }
        return "0." + z0 + z.toString();
      }
    } else {
      if (arg1 == "0" || arg1 == "") {
        return "";
      } else {
        return (parseInt(arg1) - 1).toString();
      }
    }
  }
};
export default calc;
