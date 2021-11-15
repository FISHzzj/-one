<template>
    <div class="login">
        <!-- <div class="logincenter">
            <div @click="loginshow">登陆</div>
            <div @click="register">注册</div>
        </div> -->
        <div class="content" v-if="loginShow">
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
    data(){
        return {
            iconeyeclose: false,
            loginShow: true,
            inputMsg: {
				mobile: '',
				pwd: '',
			},
        }
    },
    methods:{
        loginshow(){

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
<style lang="less">
.login{
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/nongchang/denglv/bg.png);
    background-size: 100% 100%;
    font-size: 4vw;
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
        height: 100vw;
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
                font-weight: bold;
                font-size: 4vw;
            }
            input {
                width: 100%;
                height: 12vw;
                border: 0;
                text-indent: 3vw;
                opacity: 0.5;
                
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
                height: 12vw;
                font-size: 4vw;
                opacity: 0.5;
            }
        }
        .footer {
            // position: fixed;
            // bottom: 0;
            // left: 0;
            width: 100%;
            padding: 4vw 0; 
            font-weight: 900;
            
            .top {
                width: 100%;
                color: #5F3F27;
                height: 12vw;
                font-size: 4vw;
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