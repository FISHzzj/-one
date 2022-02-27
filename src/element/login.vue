<template>
    <div class="loginnongchang">
        <!-- <div class="logincenter">
            <div @click="loginshow">登陆</div>
            <div @click="register">注册</div>
        </div> -->
        <div class="content" v-if="loginShow">

            <div class="phone" >
                <input type="type"  v-model="inputMsg.mobile" placeholder="请输入手机号">
            </div>
            <div class="pwd">
                <input type="password" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
            </div>
            <!-- <div class="code flex ali_center">
                <input v-model="inputMsg.code" type="text" :placeholder="codetext">
                <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
            </div> -->
             <div class="footer">
                 <div class="top flex flex_between">
                    <span @click="forget">忘记密码</span>
                    <span @click="register">用户注册</span>
                </div>
            </div>
            <div class="loginbtn" @click="login">
                <img src="../assets/images/nongchang/denglv/login.png" alt="">
            </div>
            <!-- <div class="title">
                <div class="first">登陆</div>
            </div>
            <div class="phone flex ali_center">
                <span>账号：</span>
                <input  v-model="inputMsg.mobile" placeholder="请输入手机号">
            </div>
            <div class="pwd flex ali_center">
                <span>密码：</span>
                <input v-if="iconeyeclose" type="text" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                <i @click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                <i @click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i>
                <van-icon v-if="inputMsg.pwd" @click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" />
            </div>
            <div class="footer">
                 <div class="top flex flex_between">
                    <span @click="forget">忘记密码</span>
                    <span @click="register">用户注册</span>
                </div>
            </div>
            <div class="btn submit flex flex_around">
                <div>确认</div>
                <div>取消</div>
            </div> -->
        </div>
    </div>  
</template>
<script>
export default {
    name: 'login',
    data(){
        return {
            iconeyeclose: false,
            loginShow: true,
            inputMsg: {
				mobile: '',
				pwd: '',
                code: '',
			},
            codetext:'请输入验证码',
            timeAndTextOfSendcode:"发送验证码",
        }
    },
    created() {
        this.inputMsg.mobile = localStorage.getItem('mobile') || ''
        this.inputMsg.pwd = localStorage.getItem('pwd') || ''
    },
    methods:{
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
                "type": "login" //短信验证码类型：register，forget,login
            })
            if (!res) return false
            Toast(res.msg)
            this.timeAndTextOfSendcode = 60
            this.timing() //執行倒計時
        },
        async login(e) {
            // console.log(e);
            // if (this.flag) { //登录接口
                // let { login } = this.$i18n
                let {mobile, pwd} = this.inputMsg
                if (!mobile || !pwd) {
                    this.posiX = 13;
                    return Toast({
                        message: '请输入账号和密码',
                        duration: 1000,
                    })
                    
                }
                if (mobile.length < 11) {
                    this.posiX = 13;
                    return Toast({
                        message: '请输入正确的手机号',
                        duration: 1000,
                    })
                }
                // if (!this.inputMsg.code) return Toast( '请输入短信验证码')
                // 進行登錄 提示
                const toast = Toast.loading({
                    message: '登入中...',
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    position: 'bottom',
                    duration: 0
                })
                // 發送 ajax
                let res = await $ajax('login',{
                    mobile,
                    pwd,
                    // sms_code: this.inputMsg.code,
                }, () => {
                    toast.clear()
                })
                // 如果返回爲 false ,則中斷函數
                if (!res) return false
                console.log(res)
                // 保存 openid 以及 ip 到本地
                localStorage.setItem('openid', res.openid)
                localStorage.setItem('pwd', pwd)
                // localStorage.setItem('ip', res.ip)
                localStorage.setItem('mobile', mobile)
                this.$router.push({
                    name: 'index'
                })
            // } else {
            //     this.posiX = 13;
            // }
        },
        register(){
            this.$router.push({
                path: '/register'
            })
        },
        forget(){
             this.$router.push({
                path: '/forget'
            })
        },
    },
    mounted(){},
}
</script>
<style lang="less" scope>
.loginnongchang{
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/nongchang/denglv/bg.png);
    background-size: 100% 100%;
    font-size: 4vw;
    color: #6A3D2B;
    font-weight: 900;
    .logincenter{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        div{
            background: red;
            color: #fff;
            text-align: center;
            width: 22vh;
            height: 8vh;
            margin-bottom: 10px;
            line-height: 8vh;
            border-radius: 10px;
        }
    }
    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
        width: 85%;
        height: 110vw;
        // background: #F0E3AE;
        // padding: 5vw 5vw;
        background-image: url(../assets/images/nongchang/denglv/denglv.png);
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
            position: relative;
            height: 9vw;
            padding: 0 1vw;
            // background: #D6C695;
            // border: 1vw solid #FEF2C2;
            border-radius: 2vw;
            position: absolute;
            top: 42%;
            left: 13%;
            
            span{
                white-space:nowrap;
                font-weight: bold;
                font-size: 4vw;
            }
            input {
                width: 90%;
                height: 10vw;
                border: 0;
                text-indent: 3vw;
                opacity: 0.5;
                font-size: 3.7vw;
                background: rgba(255,255,255,0);
                
            }
        }
        .pwd {
            // margin-top: 2.4vw;
            // position: relative;
            width: 75%;
            height: 9vw;
            // border-radius: 6vw;
            // background: #f7f6fc;
            padding: 0 1vw;
            // background: #D6C695;
            // border: 1vw solid #FEF2C2;
            border-radius: 2vw;
            position: absolute;
            top: 65%;
            left: 13%;
            span{
                white-space:nowrap;
                font-weight: bold;
                font-size: 4vw;
            }
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
                right: 12vw;
                height: 2.5vw;
                position: absolute;
                border-radius: 50%;
                padding: 1vw;
                background: rgba(0,0,0,.3);
            }
            input {
                text-indent: 3vw;
                height: 10vw;
                font-size: 3.7vw;
                opacity: 0.5;
                width: 100%;
                background: rgba(255,255,255,0);
            }
        }
        .code{
            // margin-top: 2.4vw;
            width: 100%;
            height: 9vw;
            // border-radius: 6vw;
            // background: #D6C695;
            position: absolute;
            top: 72%;
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
        .footer {
            // position: fixed;
            // bottom: 0;
            // left: 0;
            width: 75%;
            padding: 4vw 0; 
            // font-weight: 900;
            position: absolute;
            top: 82%;
            left: 13%;
            color: #fff;
            
            .top {
                width: 100%;
                color: #fff;
                height: 12vw;
                font-size: 4vw;
                font-family: Microsoft YaHei;
                // justify-content: center;
                p {
                    border-right: 1px solid #5F3F27;
                    height: 4vw;
                    margin: 0 4vw;
                }
            }
            .tips {
                // justify-content: center;
                font-size: 4vw;
                padding-bottom: 3vw;
                span {
                    color: #5F3F27;
                }
            }
        }
        .loginbtn{
            position: absolute;
            top: 99%;
            left: 40%;
            img{
                width: 20vw;
                // height: 20vw;
            }
        }
        .btn{
            margin-top: 10vw;
            div{
                width: 35%;
                height: 10vw;
                background: #75B633;
                color: #F1CE24;
                border-radius: 1vw;
                text-align: center;
                line-height: 10vw;
            }
        }

    }
}
</style>