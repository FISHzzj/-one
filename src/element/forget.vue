<template lang="">
    <div class="forget">
        <div class="content" v-if="forgetShow">
             <div class="phone ">
                <!-- <span>&nbsp;&nbsp;&nbsp;+86：</span> -->
                <input type="number" v-model="inputMsg.mobile" placeholder="请输入手机号">
            </div>
            <div class="code flex ali_center">
                <input v-model="inputMsg.code" type="text" placeholder="请输入验证码">
                <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
            </div>
            <div class="pwd">
                <input type="text" v-model="inputMsg.pwd" placeholder="请输入密码">
            </div>
            <div class="pwd1">
                <input type="text" v-model="inputMsg.pwd_confirm" placeholder="请输入确认密码">
            </div>
            <div class="registerbtn flex flex_between">
                <img src="../assets/images/nongchang/denglv/fanhui.png" alt="" @click="fanhui">
                <img src="../assets/images/nongchang/denglv/xiugai.png" alt="" @click="xiugai">
            </div>
            <!-- <div class="title">
                <div class="first">新用户注册</div>
            </div>
            <div class="phone flex ali_center">
                <span>&nbsp;&nbsp;&nbsp;+86：</span>
                <input type="number" v-model="inputMsg.mobile" placeholder="请输入手机号">
            </div>
             
            <div class="code flex flex_between">
                <div class="flex flex_nowrap ali_center">
                    <span>验证码：</span>
                    <input v-model="inputMsg.code" type="text" placeholder="请输入验证码">
                </div>
                <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
            </div>
            <div class="pwd flex ali_center">
                <span>&nbsp;&nbsp;&nbsp;密码：</span>
                <input  type="text" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码">
                <i @click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                <i @click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i>
                <van-icon v-if="inputMsg.pwd" @click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" />
            </div>
            <div class="spread flex ali_center">
                <span>邀请码：</span>
                <input type="text" v-model="inputMsg.spread" placeholder="请输入邀请码"  disabled/>
            </div>
            <div class="footer">
                 <div class="top flex ali_center">
                  
                    <van-radio-group v-model="radio">
                        <van-radio name="1" shape="square"> </van-radio>
                    </van-radio-group>
                    &nbsp;&nbsp;
                    我已阅读并同意
                    <span @click="news_detail">《用户注册协议》</span>
                    和
                    <span @click="news_detail">《隐私政策》</span>
                </div>
            </div>
            <div class="btn submit flex flex_around">
                <div>确认</div>
            </div>
            <div class="gologin flex flex-end" @click="gologin">
                返回登录>>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'forget',
    data(){
        return{
            forgetShow:true,
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
        }
    },
    mounted(){

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
                 "type": "forget" //短信验证码类型：register，forget
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
        async xiugai(){
            if (this.inputMsg.mobile.length < 11) return Toast( '请输入正确手机号!' )
            if (!this.inputMsg.code) return Toast( '请输入短信验证码！' )
            if (!this.inputMsg.pwd ) return Toast( '请输入正确密码!' )
            if(this.inputMsg.pwd != this.inputMsg.pwd_confirm ) return Toast( '两次输入的密码不一致!' )
            let res = await $ajax('forget', {
                mobile:this.inputMsg.mobile,
                pwd:this.inputMsg.pwd,
                pwd_confirm:this.inputMsg.pwd_confirm,
                sms_code:this.inputMsg.code
            })
            if (!res) return false
            // 返回 登錄
            Dialog.alert({
                message: res.msg
            })
            this.$router.push({
                path: '/login'
            })
        },
        gologin(){
            this.$router.push({
                path: '/login'
            })
        },
    }
}
</script>
<style lang="less">
    .forget{
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
            background-image: url(../assets/images/nongchang/denglv/forgetpwd.png);
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
                top: 31.5%;
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
                top: 47%;
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
                top: 65.5%;
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
                 margin-top: 2.4vw;
                position: relative;
                width: 100%;
                height: 9vw;
                // border-radius: 6vw;
                // background: #f7f6fc;
                background: #D6C695;
                padding: 0 1vw;
                border: 1vw solid #FEF2C2;
                border-radius: 2vw;
                input {
                    text-indent: 3vw;
                    height: 9vw;
                    font-size: 4vw;
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
                top: 82.5%;
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
    .van-radio{
        background: #C3B79C;
    }
</style>