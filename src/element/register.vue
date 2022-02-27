<template lang="">
    <div class="register">
        <div>
            <van-cell center title="中英文切换" style="background-color: rgba(0,0,0, 0.1);color:#fff;">
                <template #right-icon>
                    <van-switch v-model="checked" size="24" @input="onInput" />
                </template>
            </van-cell>
        </div>

        <div class="content" :class="checked ? 'yingwenbg' : ''" v-if="registerShow">
             <div class="phone ">
                <!-- <span>&nbsp;&nbsp;&nbsp;+86：</span> -->
                <input type="number" v-model="inputMsg.mobile" :placeholder="mobiletext">
            </div>
            <div class="code flex ali_center">
                <input v-model="inputMsg.code" type="text" :placeholder="codetext">
                <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
            </div>
            <div class="pwd">
                <input type="text" v-model="inputMsg.pwd" :placeholder="pwdtext">
            </div>
            <div class="pwd1">
                <input type="text" v-model="inputMsg.pwd_confirm" :placeholder="pwd_confirmtext">
            </div>
            <div class="spread">
                <input type="text" v-model="inputMsg.spread" :placeholder="spreadtext">
            </div>
            <div class="registerbtn flex flex_between">
                <img :src="fanhuiurl" alt="" @click="fanhui">
                <img :src="registerurl" alt="" @click="register">
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'register',
    data(){
        return{
            registerShow:true,
            code:"",
            timeAndTextOfSendcode:"发送验证码",
            inputMsg:{
                mobile:"",
                code:"",
                pwd:"",
                pwd_confirm:"",
                spread:"",
            },
            radio: 1,
            checked:false,
            fanhuiurl:require('../assets/images/nongchang/denglv/fanhui.png'),
            registerurl:require('../assets/images/nongchang/denglv/register.png'),
            mobiletext:'请输入手机号',
            codetext:'请输入验证码',
            pwdtext: '请输入密码8至12位數字和字母',
            pwd_confirmtext: '请输入确认密码8至12位數字和字母',
            spreadtext:'请输入邀请码',
            app_download:'',
        }
    },
    created(){
        sessionStorage.setItem('noApp', true) // 標記爲非APP進入
        this.getshouxufei()

    },
    mounted(){
        this.spreadtext = this.$route.query.spreadtext
        console.log(this.spreadtext)
    },
    methods:{
        onInput(checked){
            this.checked = checked;
            if(checked){
                this.fanhuiurl = require('../assets/images/nongchang/denglv/fanhuiying.png')
                this.registerurl = require('../assets/images/nongchang/denglv/registerying.png')
                this.mobiletext = 'Please enter your mobile phone number'
                this.codetext = 'Please enter the verification code'
                this.pwdtext = 'Please enter the password with 8 to 12 digits and letters'
                this.pwd_confirmtext = 'Please enter 8 to 12 digits and letters to confirm your password'
                this.spreadtext = 'Please enter the invitation code'
                this.timeAndTextOfSendcode = 'Send code'
            }else{
                this.fanhuiurl = require('../assets/images/nongchang/denglv/fanhui.png')
                this.registerurl = require('../assets/images/nongchang/denglv/register.png')
                this.mobiletext = '请输入手机号'
                this.codetext = '请输入验证码'
                this.pwdtext = '请输入密码8至12位數字和字母'
                this.pwd_confirmtext = '请输入确认密码8至12位數字和字母'
                this.spreadtext = '请输入邀请码'
                this.timeAndTextOfSendcode = '发送验证码'
            }
        },
        timing () {
            this.timer = setInterval( () => {
                this.timeAndTextOfSendcode--
                if (this.timeAndTextOfSendcode <= 0) {
                    clearInterval(this.timer)
                    this.timeAndTextOfSendcode = '发送验证码'
                }
            }, 1000)
        },
        // 发送验证码
        async senVerifyCode () {
            // let { register } = this.$i18n
            if ( this.timeAndTextOfSendcode !== '发送验证码') return false
            if (!this.inputMsg.mobile) return Toast( '请输入手机号')
            let res = await $ajax('sendVerifycode',{
                mobile: this.inputMsg.mobile,
                "type": "register" //短信验证码类型：register，forget
            })
            if (!res) return false
            Toast(res.msg)
            this.timeAndTextOfSendcode = 60
            this.timing() //執行倒計時
        },
        
        news_detail(){
            
        },
        fanhui(){
            this.$router.go(-1);
        },
        //获取下载地址
        async getshouxufei(){
             let res = await $ajax('config', {})
            if (!res) return false
            console.log(res);
            this.app_download = res.ins.app_download
        },
        async register() {
            if (!this.inputMsg.mobile) return Toast( '请输入手机号');
            let pwdRex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/g //驗證密碼的正則
            if (!pwdRex.test(this.inputMsg.pwd)) return Toast( '登录密碼(8至12位數字和字母組合)')
            console.log(this.pwd1)
            // if (!pwdRex.test(this.pwd1)) return Toast( '交易密碼(8至12位數字和字母組合)')
            if(this.inputMsg.pwd != this.inputMsg.pwd_confirm) return Toast( '两次输入的密码不一致')
            if (!this.inputMsg.code) return Toast( '请输入短信验证码')
            if (!this.inputMsg.spread) return Toast( '请输入邀请码')

             let res = await $ajax('register', {
                mobile: this.inputMsg.mobile,
                pwd:this.inputMsg.pwd,
                pwd_confirm: this.inputMsg.pwd_confirm,
                sms_code: this.inputMsg.code,
                agent: this.inputMsg.spread //邀请码
            })
            if (!res) return false
            // 如果爲 非 app 進入, 則跳轉下載頁面, 並終止函數
            if ( sessionStorage.getItem('noApp') ) {
                // alert(222)
                window.location.href = this.app_download
                return false
            }
            // 進行登錄 提示
			const toast = Toast.loading({
				message: '登入中...',
				forbidClick: true, // 禁用背景点击
				loadingType: 'spinner',
				position: 'bottom',
				duration: 0
            })
            // 註冊成功 直接登錄, 跳轉登錄頁面
			let loginRes = await $ajax('login',{
				mobile:this.inputMsg.mobile,
				pwd:this.inputMsg.pwd
            }, () => {
				toast.clear()
			})
            
            sessionStorage.removeItem('info') //移除 sessionStorage
            localStorage.setItem('openid', loginRes.openid)
			// localStorage.setItem('ip', loginRes.ip)
			localStorage.setItem('mobile', this.mobile)
            
			this.$router.push({
				path: '/login'
			}).catch((err)=>{
                console.log(err)
            });//把error 抛出来
            //  this.$router.replace({
            //         path: this.$route.path,
            //         query
            // })
            // .catch(()=>{});//把error 抛出来
            
            


            // this.$router.push({
            //     path: "/settingPwd",
            //     query: {
            //         mobile: this.mobile
            //     }
            // });

        },
    }
}
</script>
<style lang="less" scope>
    .register{
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/nongchang/denglv/bg.png);
        background-size: 100% 100%;
        font-size: 4vw;
        color: #6A3D2B;
        font-weight: 900;
        .content{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -70%);
            width: 70%;
            height: 110vw;
            // background: #F0E3AE;
            // padding: 5vw 5vw;
            background-image: url(../assets/images/nongchang/denglv/zhuce.png);
            background-size: 100% 100%;
            .title{
                padding: 5vw 0;
                box-sizing: border-box;
                .first {
                    font-weight: 600;
                    font-size: 5vw;
                    line-height: 10vw;
                    text-align: center;
                }
            }
            .phone{
                width: 75%;
                // background: #f7f6fc;
                // border-radius: 6vw;
                position: absolute;
                height: 8vw;
                // padding: 0 1vw;
                // background: #D6C695;
                // border: 1vw solid #FEF2C2;
                // border-radius: 2vw;
                top: 26.5%;
                left: 13%;

                span{
                    white-space:nowrap;
                }
                input {
                    width: 100%;
                    height: 7vw;
                    border: 0;
                    text-indent: 3vw;
                    opacity: 0.5;
                    font-size: 3.5vw;
                }
            }
            .code{
                // margin-top: 2.4vw;
                width: 100%;
                height: 9vw;
                // border-radius: 6vw;
                // background: #D6C695;
                position: absolute;
                top: 40%;
                left: 13%;
                
                
                
                div{
                    background: #D6C695;
                    width: 70%;
                    padding: 0 1vw;
                    border: 1vw solid #FEF2C2;
                    border-radius: 2vw;
                }
                span{
                    white-space: nowrap;
                }
                span:last-child{
                    font-size: 3vw;
                    line-height: 5vw;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    background: #FFE19D;
                    border-radius: 1vw;
                    color: #955942;
                    border: 1vw solid #FEF2C2;
                    border-radius: 2vw;
                    height: 7vw;

                    
                }
                input {
                    text-indent: 3vw;
                    height: 9vw;
                    font-size: 3.5vw;
                    width: 52%;
                    opacity: 0.5;
                }
            }
            .pwd {
                // margin-top: 2.4vw;
                // position: relative;
                width: 72%;
                height: 7vw;
                // border-radius: 6vw;
                // background: #f7f6fc;
                // padding: 0 1vw;
                // background: #D6C695;
                // border: 1vw solid #FEF2C2;
                // border-radius: 2vw;
                position: absolute;
                top: 55.5%;
                left: 13%;
                .iconfont {
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    right: 4vw;
                    height: 4vw;
                    position: absolute;
                    border-radius: 50%;
                }
                .van-icon {
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    right: 9vw;
                    height: 2.5vw;
                    position: absolute;
                    border-radius: 50%;
                    padding: 1vw;
                    background: rgba(0,0,0,.3);
                }
                input {
                    text-indent: 3vw;
                    height: 7vw;
                    font-size: 3.5vw;
                    opacity: 0.5;
                     width: 100%;
                }
            }
            .spread{
                //  margin-top: 2.4vw;
                // position: relative;
                width: 100%;
                height: 9vw;
                // border-radius: 6vw;
                // background: #f7f6fc;
                // background: #D6C695;
                // padding: 0 1vw;
                // border: 1vw solid #FEF2C2;
                // border-radius: 2vw;
                 position: absolute;
                top: 83.5%;
                left: 13%;
                input {
                    text-indent: 3vw;
                    height: 9vw;
                    font-size: 3.5vw;
                    opacity: 0.5;
                }
            }
            .pwd1{
                 // margin-top: 2.4vw;
                // position: relative;
                width: 72%;
                height: 7vw;
                // border-radius: 6vw;
                // background: #f7f6fc;
                // padding: 0 1vw;
                // background: #D6C695;
                // border: 1vw solid #FEF2C2;
                // border-radius: 2vw;
                position: absolute;
                top: 70.5%;
                left: 13%;
                .iconfont {
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    right: 4vw;
                    height: 4vw;
                    position: absolute;
                    border-radius: 50%;
                }
                .van-icon {
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    right: 9vw;
                    height: 2.5vw;
                    position: absolute;
                    border-radius: 50%;
                    padding: 1vw;
                    background: rgba(0,0,0,.3);
                }
                input {
                    text-indent: 3vw;
                    height: 7vw;
                    font-size: 3.5vw;
                    opacity: 0.5;
                     width: 100%;
                }
            }
            .registerbtn{
                position: absolute;
                top: 99%;
                left: 15%;
                img{
                    width: 20vw;
                    margin-right: 20%;
                    // height: 20vw;
                }
            }
            .footer {
                // position: fixed;
                // bottom: 0;
                // left: 0;
                width: 100%;
                padding: 4vw 0; 
                .top {
                    width: 100%;
                    color: #5F3F27;
                    height: 9vw;
                    font-size: 3.2vw;
                    // justify-content: center;
                    // p {
                    //     border-right: 1px solid #5F3F27;
                    //     height: 4vw;
                    //     margin: 0 4vw;
                    // }
                    span{
                        color: #AFCEB7;
                    }
                    
                }
                .tips {
                    // justify-content: center;
                    font-size: 3.2vw;
                    padding-bottom: 3vw;
                    span {
                        color: #5F3F27;
                    }
                }
            }
            .btn{
                margin-top: 5vw;
                div{
                    width: 35%;
                    height: 10vw;
                    background: #1DC343;
                    color: #fff;
                    border-radius: 1vw;
                    text-align: center;
                    line-height: 10vw;
                }
            }
            .gologin{
                margin-top: 5vw;
                font-size: 4.5vw;
                color: #753E28;
            }

        }

    }
    .yingwenbg{
        background-image: url(../assets/images/nongchang/denglv/zhuceying.png)!important;
    }
    .van-radio{
        background: #C3B79C;
    }
    .van-switch--on{
         background-color: #FFE19D;
    }
</style>