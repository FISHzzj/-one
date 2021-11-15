<template>
    <div class="homeIndex">
        <div class="xinxi flex flex_around ali_center">
            <div class="xxleft flex ali_center" @click="gerenxinxi">
                <img :src="avatar" alt="" srcset="">
                <div class="xxName flex flex_col ">
                    <span>{{nick_name}}</span>
                    <span>邀请码：{{invite_code}}</span>
                </div>
            </div>
            <div class="xxcenter flex flex_col flex_around ">
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/jifen.png" alt="" srcset="">
                    <span>1000</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/jidan.png" alt="" srcset="">
                    <span>8888</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
            </div>
            <div class="xxright flex flex_col flex-start">
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/xiaoji.png" alt="" srcset="">
                    <span>1000</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
               
            </div>
        </div>
        <div class="leftbtn flex flex_col">
            <img src="../../assets/images/nongchang/shezhi.png" alt="" srcset="" @click="shezhi">
            <img src="../../assets/images/nongchang/cangku.png" alt="" srcset="" @click="cangku">
            <img src="../../assets/images/nongchang/haoyou.png" alt="" srcset="" @click="haoyou">
            <img src="../../assets/images/nongchang/denglvhaoli.png" alt="" srcset="" >
        </div>
       
        <!-- 养殖 -->
        <div class="yangzhi ">
            <img src="../../assets/images/nongchang/yangzhione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/yangzhi.png" alt="" srcset="">
        </div>
         <!-- 兑换处 -->
        <div class="duihuanchu">
            <img src="../../assets/images/nongchang/duihuan.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/duihuanone.png" alt="" srcset="">
        </div>
        <!-- 孵化 -->
        <div class="fuhua">
            <img src="../../assets/images/nongchang/fuhuaone.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/fuhua.png" alt="" srcset="">
        </div>
        <!-- 集市 -->
         <div class="jishi">
            <img src="../../assets/images/nongchang/jishione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/jishi.png" alt="" srcset="" @click="jishi">
        </div>
        <!-- 商店 -->
        <div class="shangdian">
            <img src="../../assets/images/nongchang/shangdianone.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/shangdian.png" alt="" srcset="" @click="shangdian">
        </div>
        <!-- 种植 -->
        <div class="zhongzhi">
            <img src="../../assets/images/nongchang/zhongzhione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/zhongzhi.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/laotou.png" alt="" srcset="">
        </div>
        <!-- 渔场 -->
        <div class="yuchang">
            <img src="../../assets/images/nongchang/yuchangone.png" alt="" srcset="">

        </div>
        <!-- 加工厂 -->
        <div class="jiagongchang">
            <img src="../../assets/images/nongchang/jiagongchang.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/jiagongchangone.png" alt="" srcset="">
        </div>

        <!-- 设置 -->
        <div class="shezhi" v-if="shezhikuang">
            <div class="kuang">
                <div class="szxuan flex flex_col flex_center" v-if="shengyi">
                    <span class="flex flex_center ali_center">音乐：<van-switch v-model="yinyue" inactive-color="#BDBDBD" active-color="#EDC782" size=""/></span>
                    <span  class="flex flex_center ali_center">音效：<van-switch v-model="yinxiao" inactive-color="#BDBDBD" active-color="#EDC782" size="" /></span>
                    <span  class="flex flex_center ali_center">二级密码：<strong style="color:#FE523B;text-decoration: underline;">{{shezhitext ? '去设置' : '已设置'}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="content" v-else>
                    <div class="phone flex ali_center">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;手机号：</span>
                        <input type="number" v-model="inputMsg.mobile" placeholder="请输入手机号">
                    </div>
                    <div class="code flex flex_between">
                        <div class="flex flex_nowrap ali_center">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;验证码：</span>
                            <input v-model="inputMsg.code" type="text" placeholder="请输入验证码">
                        </div>
                        <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
                    </div>
                    <div class="pwd flex ali_center">
                        <span>二级密码：</span>
                        <input  type="text" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                        <!-- <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码"> -->
                        <!-- <i ../..click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                        <i ../..click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i> -->
                        <!-- <van-icon v-if="inputMsg.pwd" ../..click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" /> -->
                    </div>
                    <div class="pwd flex ali_center">
                        <span>确认密码：</span>
                        <input  type="text" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                        <!-- <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码"> -->
                        <!-- <i ../..click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                        <i ../..click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i> -->
                        <!-- <van-icon v-if="inputMsg.pwd" ../..click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" /> -->
                    </div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt="">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 商店 -->
        <div class="shangdiankuang" v-if="shangdiankuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="zuo ? zuo1 : zuo2" alt="" srcset="" @click="tab(0)">
                    <img :src="shouhuquan ? shouhuquan1 : shouhuquan2" alt="" srcset="" @click="tab(1)">
                    <img :src="jisiliao ? jisiliao1 : jisiliao2" alt="" srcset="" @click="tab(2)">
                    <img :src="zhong ? zhong1 : zhong2" alt="" srcset="" @click="tab(3)">
                    <img :src="you ? you1 : you2" alt="" srcset="" @click="tab(4)">
                </div>
                <div class="sdlist">
                    <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index"> 
                        <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset="">
                        <div class="sdtext flex flex_col">
                            <div>{{item.title}}</div>
                            <div>{{item.title1}}</div>
                            <div>小鸡：{{item.shuliang}}</div>
                        </div>
                        <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 集市 -->
        <div class="jishikuang" v-if="jishikuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="goumai ? goumai1 : goumai2" alt="" srcset="" @click="tabjishi(0)">
                    <img :src="jishou ? jishou1 : jishou2" alt="" srcset="" @click="tabjishi(1)">
                    <img :src="jilv ? jilv1 : jilv2" alt="" srcset="" @click="tabjishi(2)">
                    
                </div>
                <div class="sdlist">
                    <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                        <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                        <div class="sdtext flex flex_col ">
                            <div class="flex flex_between">
                                <span>购买人：昵称</span>
                                <span>数量：1</span>
                            </div>
                            <div class="flex flex_between">
                                <span>手续费：昵称</span>
                                <span>积分：+195</span>
                            </div>
                            
                            <div>购买时间：2021-11-2 10:20:20</div>
                        </div>
                        <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                    </div>
                    <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                        <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                        <div class="sdtext flex flex_col " v-if="goumai || jishou">
                            <div class="flex flex_between">
                                <span>购买人：昵称</span>
                                <span>数量：1</span>
                            </div>
                            <div class="flex flex_between">
                                <span>手续费：昵称</span>
                                <span>积分：+195</span>
                            </div>
                            
                            <div>购买时间：2021-11-2 10:20:20</div>
                        </div>
                        <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        <div class="sdtextone flex ali_center" v-else>
                            <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>{{item.title1}}</div>
                                <div>小鸡：{{item.shuliang}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- 仓库 -->
        <div class="cangkukuang" v-if="cangkukuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <!-- <div class="sdlan flex flex_center">
                    <img :src="zuo ? zuo1 : zuo2" alt="" srcset="" @click="tab(0)">
                    <img :src="shouhuquan ? shouhuquan1 : shouhuquan2" alt="" srcset="" @click="tab(1)">
                    <img :src="jisiliao ? jisiliao1 : jisiliao2" alt="" srcset="" @click="tab(2)">
                    <img :src="zhong ? zhong1 : zhong2" alt="" srcset="" @click="tab(3)">
                    <img :src="you ? you1 : you2" alt="" srcset="" @click="tab(4)">
                </div> -->
                <div class="sdlist">
                    <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index"> 
                        <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset="">
                        <div class="sdtext flex flex_col">
                            <div>{{item.title}}</div>
                            <div>{{item.title1}}</div>
                            <div>小鸡：{{item.shuliang}}</div>
                        </div>
                        <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 个人信息 -->
        <div class="gerenxinxi" v-if="gerenxinxikuang">
            <div class="kuang">
                <div class="content  ">
                    <img src="../../assets/images/icon/7.png" alt="">
                    <div>昵称：955942</div>
                    <div>ID：955942</div>
                    <div>邀请码：jertye2862</div>
                    <div>绑定手机：<a href="javascript:;">去绑定</a></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt="">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 好友列表 -->
        <div class="haoyoukuang" v-if="haoyoukuang">
            <div class="kuang">
                <div class="sdlan flex flex_center">
                    <img :src="hao ? hao1 : hao2" alt="" srcset="" @click="tab(0)">
                    <img :src="guangchang ? guangchang1 : guangchang2" alt="" srcset="" @click="tab(1)">
                    
                </div>
                <div class="sdlist">
                    <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index"> 
                        <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                        <div class="sdtext flex ali_center" >
                            <div>1</div>
                            <div class="flex ali_center">
                                <img src="../../assets/images/icon/7.png" alt="">
                                <span style="margin-left:2vw;">昵称</span>
                            </div>
                            <div class="flex ali_center"><img src="../../assets/images/nongchang/haoyou/tou.png" alt=""></div>
                        </div>
                        <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                    </div>
                </div>
                <div class="shezhibtn flex flex_center">
                    <img src="../../assets/images/nongchang/haoyou/huanyipi.png" alt="">
                    <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'index',
    data () {
        return {
            user_id:"",
            nick_name:"",
            avatar:"",
            mobile:"",
            invite_code:"",
            balance:"",
            shezhikuang: false,
            shezhitext:true,
            yinyue: false,
            yinxiao:false,
            shengyi:false,
            code:"",
            timeAndTextOfSendcode:"获取验证码",
            inputMsg:{
                mobile:"",
                code:"",
                pwd:"",
                spread:"",
            },
            shangdiankuang:false,
            zuo:true,
            zuo1:require('@/assets/images/nongchang/shangdian/zuo.png'),
            zuo2:require('@/assets/images/nongchang/shangdian/zuo1.png'),
            shouhuquan:false,
            shouhuquan1:require('@/assets/images/nongchang/shangdian/zuo.png'),
            shouhuquan2:require('@/assets/images/nongchang/shangdian/zuo1.png'),
            jisiliao:false,
            jisiliao1:require('@/assets/images/nongchang/shangdian/jisiliao.png'),
            jisiliao2:require('@/assets/images/nongchang/shangdian/jisiliao1.png'),
            zhong:false,
            zhong1:require('@/assets/images/nongchang/shangdian/zhong.png'),
            zhong2:require('@/assets/images/nongchang/shangdian/zhong1.png'),
            you:false,
            you1:require('@/assets/images/nongchang/shangdian/you.png'),
            you2:require('@/assets/images/nongchang/shangdian/you1.png'),
            list:[
                {
                    img:'',
                    title:'加速礼包LV1',
                    title1:'加速时间：2h',
                    shuliang:'20'
                },
                {
                    img:'',
                    title:'加速礼包LV2',
                    title1:'加速时间：4h',
                    shuliang:'20'
                },
                {
                    img:'',
                    title:'加速礼包LV3',
                    title1:'加速时间：6h',
                    shuliang:'20'
                }
            ],
            goumai:true,
            goumai1:require('@/assets/images/nongchang/jishi/zuo.png'),
            goumai2:require('@/assets/images/nongchang/jishi/zuo1.png'),
            jishou:false,
            jishou1:require('@/assets/images/nongchang/jishi/zhong.png'),
            jishou2:require('@/assets/images/nongchang/jishi/zhong1.png'),
            jilv:false,
            jilv1:require('@/assets/images/nongchang/jishi/you.png'),
            jilv2:require('@/assets/images/nongchang/jishi/you1.png'),
            jishikuang:false,
            cangkukuang: false,
            gerenxinxikuang:false,
            haoyoukuang:false,
            hao:true,
            hao1:require('@/assets/images/nongchang/haoyou/zuo.png'),
            hao2:require('@/assets/images/nongchang/haoyou/zuo1.png'),
            guangchang:false,
            guangchang1:require('@/assets/images/nongchang/haoyou/you.png'),
            guangchang2:require('@/assets/images/nongchang/haoyou/you1.png'),
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        async getData(){
            let res = await $ajax('userinfo', {})
            if (!res) return false
            console.log(res)
            Object.keys(res).forEach((key) =>{
                this[key] = res[key]
            })
        },
        tab(index){
            if(index == 0){
                this.zuo = !this.zuo
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you =false
            }else if(index == 1){
                this.zuo = false
                this.shouhuquan = !this.shouhuquan
                this.jisiliao = false
                this.zhong = false
                this.you = false          
            }else if(index == 2){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = !this.jisiliao
                this.zhong = false
                this.you = false
            }else if(index == 3){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = !this.zhong
                this.you = false
            }else if(index == 4){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you = !this.you 
            }
        },
        guangbi(){
            this.shangdiankuang = false;
            this.jishikuang = false;
            this.cangkukuang = false;
            
        },
        shezhi(){
            this.shezhikuang = true;
        },
        fanhui(){
           this.shezhikuang = false; 
           this.gerenxinxikuang = false;
           this.haoyoukuang = false;
        },
        cangku(){
            this.cangkukuang = true;
        },
        haoyou(){
            this.haoyoukuang = true;
        },
        shangdian(){
            this.shangdiankuang = true
        },
        jishi(){
            this.jishikuang = true;
        },
        tabjishi(index){
            if(index == 0){
                this.goumai = !this.goumai
                this.jishou = false
                this.jilv = false
                
            }else if(index == 1){
                this.goumai = false
                this.jishou = !this.jishou
                this.jilv = false
                         
            }else if(index == 2){
                this.goumai = false
                this.jishou = false
                this.jilv = !this.jilv
                
            }
        },
        gerenxinxi(){
            this.gerenxinxikuang = true;
        },
        

    }
}
</script>
<style lang="less">
    .homeIndex{
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/nongchang/index_bg.png);
        background-size: 100% 100%;
        position: relative;
        font-size: 0.65rem;
        overflow: hidden;
        .xinxi{
            width: 95vw;
            height: 15vw;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 1rem;
            position: absolute;
            top: 6vw;
            left: 2.5vw;
            .xxleft{
                // position: relative;
                img{
                    width: 12vw;
                    height: 12vw;
                    border-radius: 50%;
                    z-index: 99;
                    
                }
                .xxName{
                    width: 38vw;
                    height: 10vw;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 6vw;
                    margin-left: -11vw;
                    font-size: 10px;
                    span{
                        margin-left: 12vw;
                        white-space: nowrap;
                        // padding-top: 0.1rem;
                        font-family: Adobe Heiti Std;
                        text-stroke: 0.03rem #df7108;
                        -webkit-text-stroke: 0.03rem #df7108;
                        height: 4vw;
                        // background: linear-gradient(180deg, #FFFCCD 0%, #FFE08E 100%);
                        // -webkit-background-clip: text;
                    }
                }
            }
            .xxcenter{
                div{
                   width: 23vw;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 4vw;
                    margin-top: 1vw;
                    font-family: Adobe Heiti Std;
                    text-stroke: 0.03rem #df7108;
                    -webkit-text-stroke: 0.03rem #df7108;
                    img{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    
                }
                div:first-child{
                    img:first-child{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    img:last-child{
                        width: 4vw;
                        height: 4vw;
                        border-radius: 50%;
                    }
                    

                }
                div:last-child{
                    img:first-child{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    img:last-child{
                        width: 4vw;
                        height: 4vw;
                        border-radius: 50%;
                    }
                }
            }
            .xxright{
                  width: 23vw;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 4vw;
                    margin-top: -6vw;
                    font-family: Adobe Heiti Std;
                        text-stroke: 0.03rem #df7108;
                        -webkit-text-stroke: 0.03rem #df7108;
                div{
                    img{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                }
                div:first-child{
                    img:first-child{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    img:last-child{
                        width: 4vw;
                        height: 4vw;
                        border-radius: 50%;
                    }
                    

                }
            }
        }
        .leftbtn{
            position: absolute;
            left: 2vw;
            top: 14%;
            z-index: 99;
            img{
                margin-bottom: 4vw;
                width: 10vw;
                height: 10vw;
            }
        }
        
        .yangzhi{
            position: absolute;
            left: 7%;
            top: 21%;
            img:first-child{
                width: 65vw;
            }
            img:nth-child(2){
                width: 14vw;
                position: absolute;
                top: 9vw;
                left: 16vw;
                // right: 65vw;
            }
        }
        .duihuanchu{
            position: absolute;
            left: -3%;
            top: 32%;
            img:first-child{
                width: 30vw;
            }
            img:nth-child(2){
                width: 14vw;
                position: absolute;
                top: 15vw;
                left: 30vw;
                // right: 58vw;
            }
        }
        .fuhua{
            position: absolute;
            left: 81%;
            top: 30%;
            img:first-child{
                width: 21vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: 4vw;
                /* left: 1rem; */
                left: -10vw;
            }
        }
        .jishi{
           position: absolute;
            left: -11%;
            top: 52%;
            img:first-child{
                width: 54vw;
            }
            img:nth-child(2){
                width: 14vw;
                position: absolute;
                top: 16vw;
                left: 42vw;
                // right: 48vw;
            }
        }
        .shangdian{
            position: absolute;
            left: 76%;
            top: 48%;
            img:first-child{
               width: 45vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: 19vw;
                /* left: 1rem; */
                left: -9vw;
            }
        }
        .zhongzhi{
            position: absolute;
            left: 47%;
            top: 67%;
            img:first-child{
                width: 45vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: -5vw;
                left: 12vw;
            }
            img:nth-child(3){
                width: 11vw;
                position: absolute;
                top: -5vw;
                left: 2vw;

            }
        }
        .yuchang{
            position: relative;
            left: 9%;
            top: 85%;
            img:first-child{
                width: 13vw;
                position: absolute;
                top: -5vw;
                left: 12vw;
            }
        }
        .jiagongchang{
            position: relative;
            left: 77%;
            top: 77%;
            img:first-child{
                width: 33vw;
            }
            img:nth-child(2){
                width: 14vw;
                position: absolute;
                top: 11vw;
                left: -13vw;
            }
        }
        .shezhi{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/shezhi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .szxuan{
                    text-align: center;
                    margin-top: 30%;
                    span{
                        margin-bottom: 2vw;
                    }
                }
                .content{
                    // position: absolute;
                    // top: 50%;
                    // left: 50%;
                    // transform: translate(-50%, -50%);
                    // width: 85%;
                    // height: auto;
                    // background: #F0E3AE;
                    // display: none;
                    padding: 5vw 5vw;
                    margin-top: 15%;

                    // .title{
                    //     padding: 5vw 0;
                    //     box-sizing: border-box;
                    //     .first {
                    //         font-weight: 600;
                    //         font-size: 5vw;
                    //         line-height: 10vw;
                    //         text-align: center;
                    //     }
                    // }
                    .phone{
                        width: 100%;
                        background: #f7f6fc;
                        // border-radius: 6vw;
                        position: relative;
                        height: 9vw;
                        padding: 0 1vw;
                        // background: #D6C695;
                        // border: 1vw solid #FEF2C2;
                        // border-radius: 2vw;
                        span{
                            white-space:nowrap;
                        }
                        input {
                            width: 100%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #D6C695;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            font-size: 3vw;
                        }
                    }
                    .code{
                        margin-top: 2.4vw;
                        width: 100%;
                        height: 9vw;
                        // border-radius: 6vw;
                        // background: #D6C695;
                        
                        
                        
                        div{
                            // background: #D6C695;
                            width: 70%;
                            padding: 0 1vw;
                            // border: 1vw solid #FEF2C2;
                            // border-radius: 2vw;
                        }
                        span{
                            white-space: nowrap;
                        }
                        span:last-child{
                            font-size: 3vw;
                            line-height: 3vw;
                            padding: 2vw 1vw;
                            box-sizing: border-box;
                            background: #FED579;
                            border-radius: 1vw;
                            color: #955942;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;

                            
                        }
                        input {
                            width: 28vw;
                            text-indent: 3vw;
                            height: 7vw;
                            font-size: 4vw;
                             background: #D6C695;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            font-size: 3vw;

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
                        // background: #D6C695;
                        // border: 1vw solid #FEF2C2;
                        // border-radius: 2vw;
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
                         span{
                            white-space: nowrap;
                        }
                        input {
                            width: 100%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #D6C695;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            font-size: 3vw;
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
                .shezhibtn{
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .shangdiankuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
            .kuang{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 135vw;
                background-image: url(../../assets/images/nongchang/shangdian/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                .sdlan{
                    margin-top: 20%;
                    img{
                        width: 12.5vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 78vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 75%;
                        margin-left: 12.5%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                      
                        img:first-child{
                            width: 15vw;
                            height: 15vw;
                            border-radius: 50%;
                        }
                        .sdtext{
                            margin-left: 1vw;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        img:last-child{
                            width: 15vw;
                            margin-left: 5vw;
                        }
                    }
                }
            }
        }
        .jishikuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
            .kuang{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 135vw;
                background-image: url(../../assets/images/nongchang/jishi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    // margin-top: 10%;
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                .sdlan{
                    margin-top: 20%;
                    img{
                        width: 17.5vw;
                        height: 5vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 78vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 70%;
                        margin-left: 15%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                          padding: 1vw 5vw;
                        box-sizing: border-box;
                        
                        .sdtext{
                            margin-left: 1vw;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            img:first-child{
                                width: 15vw;
                                height: 15vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 12px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 5vw;
                            }
                        }
                        
                    }
                }
            }
        }
        .cangkukuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
            .kuang{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 135vw;
                background-image: url(../../assets/images/nongchang/cangku/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                // .sdlan{
                //     margin-top: 20%;
                //     img{
                //         width: 12.5vw;
                //     }
                // }
                .sdlist{
                    margin-top: 33%;
                    height: 78vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 75%;
                        margin-left: 12.5%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                      
                        img:first-child{
                            width: 15vw;
                            height: 15vw;
                            border-radius: 50%;
                        }
                        .sdtext{
                            margin-left: 1vw;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        img:last-child{
                            width: 15vw;
                            margin-left: 5vw;
                        }
                    }
                }
            }
        }
        .gerenxinxi{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/gerenxinxi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                // .szxuan{
                //     text-align: center;
                //     margin-top: 30%;
                //     span{
                //         margin-bottom: 2vw;
                //     }
                // }
                .content{
                    padding: 5vw 5vw;
                    margin-top: 15%;
                    text-align: center;
                    img{
                        width: 15vw;
                        height: 15vw;
                        border-radius: 50%;
                    }
                    div{
                        height: 6vw;
                        a{
                            color:#FE523B;
                            
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .haoyoukuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(32, 29, 29, 0.7);
            z-index: 99;
            .kuang{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-90%, -47%);
                width: 80%;
                height: 126vw;
                background-image: url(../../assets/images/nongchang/haoyou/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                // .guanbi{
                //     img:first-child{
                //         width: 13vw;
                //         height: 13vw;
                //     }
                // }
                
                .sdlan{
                    margin-top: 5%;
                    img{
                        width: 16.5vw;
                    }
                }
                .sdlist{
                    margin-top: 10%;
                    height: 95vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        // background: #FFECDC;
                        width: 75%;
                        margin-left: 28.5%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                      
                        // img:first-child{
                        //     width: 15vw;
                        //     height: 15vw;
                        //     border-radius: 50%;
                        // }
                        .sdtext{
                            margin-left: 1vw;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                margin-right: 5vw;
                                // height: 4vw;
                                // line-height: 4vw;
                                img{
                                    width: 9vw;
                                }
                            }
                            div:nth-child(2){
                                margin-right: 10vw;
                            }
                        }
                        // img:last-child{
                        //     width: 15vw;
                        //     margin-left: 5vw;
                        // }
                    }
                }
                .shezhibtn{
                    img{
                        width: 18vw;
                        margin-left: 2vw;
                    }
                }
            }
        }
       
    }
    // .van-switch{
    //     background-color: #BDBDBD;
    // }
    .van-switch__node {
        // background-color: #FEDD68;
        // background: rgba(22, 208, 255, 0.15);
        background-image: url(../../assets/images/nongchang/shezhi/kai.png);
        background-size: 100% 100%;

    }
    // .van-switch--on {
    //     background: #EDC782!important;

    // }
</style>