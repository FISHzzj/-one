<template lang="">
    <div class="register">
        <div class="content" v-if="registerShow">
            <div class="title">
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
                <!-- <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码"> -->
                <!-- <i @click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                <i @click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i> -->
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
            timeAndTextOfSendcode:"获取验证码",
            inputMsg:{
                mobile:"",
                code:"",
                pwd:"",
                spread:"",
            },
            radio: 1,
        }
    },
    mounted(){

    },
    methods:{
        senVerifyCode(){

        },
        news_detail(){
            
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
    .register{
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/nongchang/login.jpg);
        background-size: 100% 100%;
        font-size: 4vw;
        color: #6A3D2B;
        font-weight: 900;
        .content{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85%;
            height: auto;
            background: #F0E3AE;
            padding: 5vw 5vw;

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
                width: 100%;
                background: #f7f6fc;
                // border-radius: 6vw;
                position: relative;
                height: 9vw;
                padding: 0 1vw;
                background: #D6C695;
                border: 1vw solid #FEF2C2;
                border-radius: 2vw;
                span{
                    white-space:nowrap;
                }
                input {
                    width: 100%;
                    height: 9vw;
                    border: 0;
                    text-indent: 3vw;
                }
            }
            .code{
                margin-top: 2.4vw;
                width: 100%;
                height: 9vw;
                // border-radius: 6vw;
                // background: #D6C695;
                
                
                
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
                    font-size: 1vw;
                    line-height: 4vw;
                    padding: 2vw 3vw;
                    box-sizing: border-box;
                    background: #868785;
                    border-radius: 1vw;
                    color: #fff;
                    border: 1vw solid #FEF2C2;
                    border-radius: 2vw;

                    
                }
                input {
                    text-indent: 3vw;
                    height: 9vw;
                    font-size: 4vw;
                }
            }
            .pwd {
                margin-top: 2.4vw;
                position: relative;
                width: 100%;
                height: 9vw;
                // border-radius: 6vw;
                // background: #f7f6fc;
                padding: 0 1vw;
                background: #D6C695;
                border: 1vw solid #FEF2C2;
                border-radius: 2vw;
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
                    height: 9vw;
                    font-size: 4vw;
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