<template>
    <div class="homeIndex">
        <div class="xinxi flex flex_around ali_center">
            <div class="xxleft flex ali_center" @click="gerenxinxi">
                <img :src="avatar" alt="" srcset="">
                <div class="xxName flex flex_col ">
                    <span>{{nick_name}}</span>
                    <span :data-clipboard-text="invite_code" class="copy">邀请码：{{invite_code}}</span>
                </div>
            </div>
            <div class="xxcenter flex flex_col flex_around " >
                <div class="flex ali_center flex_between" >
                    <img src="../../assets/images/nongchang/jifen.png" alt="" srcset="" @click="jifen">
                    <span style="font-size:10px;" @click="jifen">{{balance.integral}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="" @click="chongzhitixianhandle">
                </div>
                <div class="flex ali_center flex_between" @click="jidan">
                    <img src="../../assets/images/nongchang/jidan.png" alt="" srcset="">
                    <span  style="font-size:10px;">{{balance.credit2}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
            </div>
            <div class="xxright flex flex_col flex-start">
                <div class="flex ali_center flex_between" @click="xiaoji">
                    <img src="../../assets/images/nongchang/xiaoji.png" alt="" srcset="">
                    <span  style="font-size:10px;">{{balance.credit1}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
               
            </div>
            <div class="niaoniao">
                <img src="../../assets/images/nongchang/niao1.gif" alt="" srcset="">
                <img src="../../assets/images/nongchang/niao2.gif" alt="" srcset="">

            </div>
        </div>
        <div class="leftbtn flex flex_col">
            <img src="../../assets/images/nongchang/shezhi.png" alt="" srcset="" @click="shezhi">
            <img src="../../assets/images/nongchang/cangku.png" alt="" srcset="" @click="cangku">
            <img src="../../assets/images/nongchang/haoyou.png" alt="" srcset="" @click="haoyou">
            <img src="../../assets/images/nongchang/denglvhaoli.png" alt="" srcset="" >
        </div>
       
        <!-- 养殖 -->
        <div class="yangzhi">
            <img src="../../assets/images/nongchang/yangzhione.png" alt="" srcset="" @click="yangzhi">
            <img src="../../assets/images/nongchang/yangzhi.png" alt="" srcset="" @click="yangzhi">
            <div class="yangzhiji">
                <img src="../../assets/images/nongchang/yangzhi/xiaoji3.gif" alt="" srcset="" @click="yangzhi">
                <img src="../../assets/images/nongchang/yangzhi/xiaoji2.gif" alt="" srcset="" @click="yangzhi">
                <img src="../../assets/images/nongchang/yangzhi/xiaoji3.gif" alt="" srcset="" @click="yangzhi">
                <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" @click="yangzhi">
                <img src="../../assets/images/nongchang/yangzhi/xiaoji2.gif" alt="" srcset="" @click="yangzhi">
                <img src="../../assets/images/nongchang/yangzhi/xiaoji3.gif" alt="" srcset="" @click="yangzhi">

            </div>
        </div>
         <!-- 兑换处 -->
        <div class="duihuanchu">
            <img src="../../assets/images/nongchang/duihuan.png" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/duihuanone.png" alt="" srcset="" @click="kaifazhong">
        </div>
        <!-- 孵化 -->
        <div class="fuhua">
            <img src="../../assets/images/nongchang/fuhuaone.png" alt="" srcset="" @click="fuhuahandle">
            <img src="../../assets/images/nongchang/fuhua.png" alt="" srcset="" @click="fuhuahandle">
        </div>
        <!-- 集市 -->
         <div class="jishi">
            <img src="../../assets/images/nongchang/jishione.png" alt="" srcset="" @click="jishihandle">
            <img src="../../assets/images/nongchang/jishi.png" alt="" srcset="" @click="jishihandle">
        </div>
        <!-- 商店 -->
        <div class="shangdian">
            <img src="../../assets/images/nongchang/shangdianone.png" alt="" srcset="" @click="shangdianhandle">
            <img src="../../assets/images/nongchang/shangdian.png" alt="" srcset="" @click="shangdianhandle">
        </div>
        <!-- 种植 -->
        <div class="zhongzhi">
            <img src="../../assets/images/nongchang/zhongzhione.png" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/zhongzhi.png" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/laotou.png" alt="" srcset="" @click="kaifazhong">
        </div>
        <!-- 渔场 -->
        <div class="yuchang">
            <img src="../../assets/images/nongchang/yuchangone.png" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/yu1.gif" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/yu2.gif" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/yu.gif" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/yu1.gif" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/yu2.gif" alt="" srcset="" @click="kaifazhong">


        </div>
        <!-- 加工厂 -->
        <div class="jiagongchang">
            <img src="../../assets/images/nongchang/jiagongchang.png" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/jiagongchangone.png" alt="" srcset="" @click="kaifazhong">
        </div>

        <!-- 设置 -->
        <div class="shezhi animat" v-if="shezhikuang">
            <div class="kuang">
                <div class="szxuan flex flex_col flex_center" v-if="shengyi">
                    <span class="flex flex_center ali_center">音乐：<van-switch v-model="yinyue" inactive-color="#BDBDBD" active-color="#EDC782" size="" @change="musicPlay" /></span>
                    <span  class="flex flex_center ali_center">音效：<van-switch v-model="yinxiao" inactive-color="#BDBDBD" active-color="#EDC782" size="" @change="musicClick" /></span>
                    <span  class="flex flex_center ali_center" @click="shezhierjimima">二级密码：<strong style="color:#FE523B;text-decoration: underline;">{{shezhitext ? '去设置' : '已设置'}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
                        <span @click="senVerifyCodeforget()">{{timeAndTextOfSendcode}}</span>
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
                        <input  type="text" v-model="inputMsg.pay_pwd_confirm" placeholder="请输入密码8-20位字母或数字">
                        <!-- <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码"> -->
                        <!-- <i ../..click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                        <i ../..click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i> -->
                        <!-- <van-icon v-if="inputMsg.pwd" ../..click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" /> -->
                    </div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt="" v-if="shengyi" @click="tologin">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" v-else @click="chongzhierjimima">
                   
                </div>
            </div>
        </div>
        <!-- 商店 -->
        <div class="shangdiankuang animat" v-show="shangdiankuang">
            
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="jisiliao ? jisiliao1 : jisiliao2" alt="" srcset="" @click="tab(0)">
                    <img :src="shouhuquan ? shouhuquan1 : shouhuquan2" alt="" srcset="" @click="tab(1)">
                    <img :src="zuo ? zuo1 : zuo2" alt="" srcset="" @click="tab(2)">
                    <img :src="zhong ? zhong1 : zhong2" alt="" srcset="" @click="tab(3)">
                    <img :src="you ? you1 : you2" alt="" srcset="" @click="tab(4)">
                </div>
                <div class="sdlist" v-show="status == 0">
                    <van-list
                        class="flex flex_row flex_wrap flex_between"
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        
                        @load="propfeed"
                    >
                        <div
                            style="width:48%;"
                            v-for="(item,index) in list" :key="index"
                            >
                            <div class="sditem flex flex_col ali_center" v-if="item.title == '小鸡'">
                                <img :src="item.img" alt="" srcset="">
                                <div class="sdtext flex flex_col ali_center" >
                                    <div>{{item.title}}</div>
                                    <div>数量：{{item.stock}}</div>
                                    <div>鸡分：{{item.price}}</div>
                                </div>
                                <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="xiaojigoumai(item.id)">
                            </div>
                            <div class="sditem flex flex_col ali_center" v-else>
                                <img :src="item.img" alt="" srcset="" @click="jisiliaohandle(item.img, item.title, item.speed, item.money)">
                                <div class="sdtext flex flex_col ali_center" @click="jisiliaohandle(item.img, item.title, item.speed, item.money)">
                                    <div>{{item.title}}</div>
                                    <div>时间：{{item.speed}}</div>
                                    <div>鸡分：{{item.money}}</div>
                                </div>
                                <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="yangzhi" >
                            </div>
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 1">
                    <van-list
                        class="flex flex_row flex_wrap flex_between"
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                    
                        @load="propdog"
                    >
                        <div
                             class="sditem flex flex_col ali_center"
                             style="width:48%;"
                            v-for="(item,index) in list" :key="index"
                            >
                            
                            <img :src="item.img" alt="" srcset="" @click="shouhuquanhandle(item.img, item.title, item.steal, item.money)">
                            <div class="sdtext flex flex_col ali_center" @click="shouhuquanhandle(item.img, item.title, item.steal, item.money)">
                                <div>{{item.title}}</div>
                                <div>防盗：{{item.steal}}%</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="yangzhi">
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 2">
                    <van-list
                        class="flex flex_row flex_wrap flex_between"
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                   
                        @load="propfence"
                    >
                        <div
                             class="sditem flex flex_col ali_center"
                             style="width:48%;"
                            v-for="(item,index) in list" :key="index"
                            >
                            
                            <img :src="item.img" alt="" srcset="" @click="weilanhandle(item.img, item.title, item.profit, item.money)">
                            <div class="sdtext flex flex_col ali_center" @click="weilanhandle(item.img, item.title, item.profit, item.money)">
                                <div>{{item.title}}</div>
                                <div>收益：{{item.profit}}%</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="yangzhi">
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 3">
                    <van-list
                        class="flex flex_row flex_wrap flex_between"
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                    
                        @load="propbroom"
                    >
                        <div
                            class="sditem flex flex_col ali_center"
                            style="width:48%;"
                          
                            v-for="(item,index) in list" :key="index"
                            >
                            
                            <img :src="item.img" alt="" srcset="" @click="saobahandle(item.img, item.title,item.count, item.gift, item.money)">
                            <div class="sdtext flex flex_col ali_center" @click="saobahandle(item.img, item.title,item.count, item.gift, item.money)">
                                <div>{{item.title}}</div>
                                <div>次数：{{item.count}}</div>
                                <div>收获：{{item.gift}}%</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="goumaisaoba(item.id)">
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 4">
                    <van-list
                        class="flex flex_row flex_wrap flex_between"
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                   
                        @load="proppack"
                    >
                        <div
                            class="sditem flex flex_col ali_center"
                            style="width:48%;"
                            v-for="(item,index) in list" :key="index"
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>加速时间：{{item.time}}</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="fuhuahandle">
                          
                        </div>
                    </van-list>
                </div>
                
            </div>
        </div>
        <!-- 集市 -->
        <div class="jishikuang animat" v-show="jishikuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="goumai ? goumai1 : goumai2" alt="" srcset="" @click="tabjishi(0)">
                    <img :src="jishou ? jishou1 : jishou2" alt="" srcset="" @click="tabjishi(1)">
                    <img :src="jilv ? jilv1 : jilv2" alt="" srcset="" @click="tabjishi(2)">
                    
                </div>
                <div class="sdlist" v-if="statusjishi == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="tradelists"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <div class="sdtextone flex ali_center" >
                                <img :src="item.img" alt="" srcset="">
                                <div class="sdtext flex flex_col">
                                    <div>{{item.title}}</div>
                                    <div>售卖人：{{item.nick_name}}</div>
                                    <div>数量：{{item.sp_num}}</div>
                                    <div>鸡分：{{item.unit}}</div>
                                </div>
                                <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="goumaihandle(item)">
                            </div>
                        </div>
                        
                        
                    </van-list>
                </div>
                
                <div class="sdlist" v-if="statusjishi == 1 ">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="trademine"
                    >
                         <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <div class="sdtextone flex ali_center">
                                <img :src="item.img" alt="" srcset="">
                                <div class="sdtext flex flex_col">
                                    <div>{{item.title}}</div>
                                    <div>数量：{{item.sp_num}}</div>
                                    <div>鸡分：{{item.unit}}</div>
                                    <div>出售中</div>
                                </div>
                                <img src="../../assets/images/nongchang/jishi/chehui.png" alt="" @click="chehui(item.id,item.sp_num)">
                                <!-- <div class="jishoubtn flex flex_col ali_center">
                                    <img src="../../assets/images/nongchang/jishi/chushouzhong.png" alt="">
                                    
                                </div> -->
                                
                            </div>
                         </div>
                        
                    </van-list>
                    
                </div>
                <div class="sdlist" v-if="statusjishi == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="tradeorder"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">{{item.status == 2 ? '购买人' : '寄卖人'}}：{{item.nick_name}}</span>
                                    <span>数量：{{item.num}}</span>
                                </div>
                                <div class="flex flex_between">
                                    <span v-if="item.status == 2" style="width: 30vw;overflow: hidden;margin-right:5vw;">手续费：{{item.fee}}</span>
                                    <span>鸡分：{{item.money}}</span>
                                </div>
                                
                                <div>购买时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="jishou flex flex_center" v-if="statusjishi == 1">
                    <img src="../../assets/images/nongchang/jishi/jishou.png" alt="" srcset="" @click="jishoubtn">
                </div>
            </div>
        </div>
        <!-- 仓库 -->
        <div class="cangkukuang animat" v-show="cangkukuang">
            
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="jisiliao ? jisiliao1 : jisiliao2" alt="" srcset="" @click="tab(0)">
                    <img :src="shouhuquan ? shouhuquan1 : shouhuquan2" alt="" srcset="" @click="tab(1)">
                    <img :src="zuo ? zuo1 : zuo2" alt="" srcset="" @click="tab(2)">
                    <img :src="zhong ? zhong1 : zhong2" alt="" srcset="" @click="tab(3)">
                    <img :src="you ? you1 : you2" alt="" srcset="" @click="tab(4)">
                </div>
                <div class="sdlist" v-show="status == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                    
                        @load="propfeed"
                    >
                        <div
                            v-for="(item,index) in list" :key="index"
                            >
                            <div class="sditem flex ali_center" v-if="item.title == '小鸡'">
                                <img :src="item.img" alt="" srcset="">
                                <div class="sdtext flex flex_col">
                                    <div>{{item.title}}</div>
                                    <div>数量：{{item.stock}}</div>
                                    <div>鸡分：{{item.price}}</div>
                                </div>
                                <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="xiaojigoumai(item.id)"> -->
                            </div>
                            <div class="sditem flex ali_center" v-else  @click="jisiliaohandle(item.img, item.title, item.speed, item.money)">
                                <img :src="item.img" alt="" srcset="">
                                <div class="sdtext flex flex_col">
                                    <div>{{item.title}}</div>
                                    <div>时间：{{item.speed}}</div>
                                    <div>鸡分：{{item.money}}</div>
                                </div>
                                <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" > -->
                            </div>
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 1" >
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                    
                        @load="propdog"
                    >
                        <div
                             class="sditem flex ali_center"
                            v-for="(item,index) in list" :key="index"
                            @click="shouhuquanhandle(item.img, item.title, item.steal, item.money)"
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>防盗：{{item.steal}}%</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                   
                        @load="propfence"
                    >
                        <div
                             class="sditem flex ali_center"
                            v-for="(item,index) in list" :key="index"
                            @click="weilanhandle(item.img, item.title, item.profit, item.money)"
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>收益：{{item.profit}}%</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 3">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                    
                        @load="propbroom"
                    >
                        <div
                            class="sditem flex ali_center"
                            v-for="(item,index) in list" :key="index"
                              @click="saobahandle(item.img, item.title,item.count, item.gift, item.money)"
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>次数：{{item.count}}</div>
                                <div>收获：{{item.gift}}%</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="goumaisaoba(item.id)"> -->
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 4">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                   
                        @load="proppack"
                    >
                        <div
                             class="sditem flex ali_center"
                            v-for="(item,index) in list" :key="index"
                            
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>加速时间：{{item.time}}</div>
                                <div>鸡分：{{item.money}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                          
                        </div>
                    </van-list>
                </div>
                
            </div>
        </div>
        <!-- 个人信息 -->
        <div class="gerenxinxi animat" v-if="gerenxinxikuang">
            <div class="kuang">
                <div class="content  ">
                    <div class="flex">
                        <img :src="avatar" alt="" style="margin-right:2vw;">
                        <div class="flex flex_col">
                             <div @click="nicheng">昵称：{{nick_name}}<a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                                padding: 0 2vw;
                                text-align: center;
                                display: inline-block;
                                border-radius: 1vw;
                                font-size: 14px;margin-left:2vw" href="javascript:;">修改</a></div>
                            <div>ID：{{user_id}}</div>
                        </div>
                    </div>
                    <div>邀请人：{{first_leader.nick_name}} </div>

                    <div :data-clipboard-text="invite_code" class="copy">邀请码：{{invite_code}}<a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                        padding: 0 2vw;
                        text-align: center;
                        display: inline-block;
                        border-radius: 1vw;
                        font-size: 14px;margin-left:2vw" href="javascript:;">复制</a> </div>
                    <div @click="bangding">绑定手机：{{mobile}}<a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                        padding: 0 2vw;
                        text-align: center;
                        display: inline-block;
                        border-radius: 1vw;
                        font-size: 14px;margin-left:2vw" href="javascript:;">修改</a></div>
                    <div>团队人数: {{team_info.count}} </div>
                    <div>团队总鸡量：{{team_info.credit1}} </div>
                    <div>团队总蛋量：{{team_info.credit2}} </div>
                    <div>团队总鸡分量：{{team_info.integral}} </div>
                    <!-- <div>邀请人：{{first_leader.nick_name}} </div> -->

                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/gerenxinxi/fenxiang.png" alt="" @click="tofenxiang">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 好友列表 -->
        <div class="haoyoukuang" v-if="haoyoukuang">
            <div class="kuang">
                <div class="sdlan flex flex_center">
                    <img :src="hao ? hao1 : hao2" alt="" srcset="" @click="tabhaoyou(0)">
                    <img :src="guangchang ? guangchang1 : guangchang2" alt="" srcset="" @click="tabhaoyou(1)">
                    
                </div>
                <div class="sdlist" v-if="statushao == 0">
                    <!-- <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="fanslists"
                    > -->
                        <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index" > 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex ali_center" >
                                <!-- <div>{{item.user_id}}</div> -->
                                <div class="flex ali_center">
                                    <img :src="item.avatar" alt="">
                                    <span style="margin-left:2vw;">{{item.nick_name}}</span>
                                </div>
                                <div class="flex ali_center">
                                    <img src="../../assets/images/nongchang/haoyou/saoba.png" alt="" v-show="item.status_clean" @click="goyangzhi(item.user_id)">
                                    <img src="../../assets/images/nongchang/haoyou/tou.png" alt="" v-show="item.status_steal" @click="goyangzhi(item.user_id)">
                                </div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                    <!-- </van-list> -->
                </div>
                <div class="sdlist" v-if="statushao == 1">
                    <!-- <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="fansalllists"
                    > -->
                        <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index" @click="goyangzhi(item.user_id)"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex ali_center" >
                                <!-- <div>{{item.user_id}}</div> -->
                                <div class="flex ali_center">
                                    <img :src="item.avatar" alt="">
                                    <span style="margin-left:2vw;">{{item.nick_name}}</span>
                                </div>
                                <div class="flex ali_center">
                                    <img src="../../assets/images/nongchang/haoyou/saoba.png" alt="" v-show="item.status_clean" @click="goyangzhi(item.user_id)">
                                    <img src="../../assets/images/nongchang/haoyou/tou.png" alt="" v-show="item.status_steal" @click="goyangzhi(item.user_id)">
                                </div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                    <!-- </van-list> -->
                </div>
                <div class="shezhibtn flex flex_center">
                    <img src="../../assets/images/nongchang/haoyou/huanyipi.png" alt="" @click="huanyipi">
                    <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 开发中 -- 提示框 -->
        <div class="tishikuang animat" v-if="tishikuang">
            <div class="kuang">
                <div class="content  ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <div>功能开发中，敬请期待</div>
                    <!-- <div>ID：955942</div>
                    <div>邀请码：jertye2862</div>
                    <div>绑定手机：<a href="javascript:;">去绑定</a></div> -->
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 集市交易-- 购买 -->
        <div class="goumaikuang animat" v-if="goumaikuang">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <div>购买物品：{{goumaidingdan.title}}</div>
                    <div style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;售卖人：{{goumaidingdan.nick_name}}</div>
                    <div>售卖数量：{{goumaidingdan.sp_num}}</div>
                    <div>小鸡单价：{{goumaidingdan.unit}}鸡分</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>购买数量：</span>
                        <input type="text" placeholder="购买数量" v-model="num" @blur="jisuantotal(goumaidingdan.unit)">
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>支付鸡分：</span>
                        <input type="text" placeholder="支付鸡分" v-model="total">
                    </div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="goumaisure(goumaidingdan.id)">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 集市交易-- 寄售 -->
        <div class="jishijishou animat" v-if="jishoukuang">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <div>寄售物品：小鸡</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>小鸡单价：</span>
                        <input type="text" placeholder="单价在±10%幅度" v-model="unit" @blur="jisuanjifen">
                    </div>
                    <div style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;手续费：{{shouxufei}}%</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>寄售数量：</span>
                        <input type="text" placeholder="寄售数量" v-model="jishounum" @blur="jisuanjifen">
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>收获鸡分：</span>
                        <input type="text" placeholder="收获鸡分" v-model="shouhuojifen" disabled>
                    </div>
                    <!-- <div>售卖数量：{{goumaidingdan.sp_num}}</div>
                    <div>小鸡单价：{{goumaidingdan.unit}}鸡分</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>购买数量：</span>
                        <input type="text" placeholder="购买数量" v-model="num" @blur="jisuantotal(goumaidingdan.unit)">
                    </div> -->
                    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="jishouqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
         <!-- 商店交易-- 购买小鸡 -->
        <div class="shangdiangoumai animat" v-if="shangdiangoumaikuang">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <div>购买物品：小鸡</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>小鸡单价：</span>
                        <input type="text" v-model="xiaojiprice"  disabled>
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>购买数量：</span>
                        <input type="text" v-model="goumaishuliang"  disabled>
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;总鸡分：</span>
                        <input type="text"  placeholder="收获鸡分" v-model="zongjifen" disabled>
                    </div>
                    <!-- <div>售卖数量：{{goumaidingdan.sp_num}}</div>
                    <div>小鸡单价：{{goumaidingdan.unit}}鸡分</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>购买数量：</span>
                        <input type="text" placeholder="购买数量" v-model="num" @blur="jisuantotal(goumaidingdan.unit)">
                    </div> -->
                    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="goumaiqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
         <!--充值提现 -->
        <div class="chongzhitixiankuang animat" v-if="chongzhitixiankuang">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span style="white-space: nowrap;">操作类型：</span>
                        <select v-model="selectVal">
                            <option value ="1" >充值</option>
                            <option value ="2">提现</option>
                        </select>
                    </div>
                    <div class="flex flex_col flex_end" v-if="selectVal == 2">
                        <!-- <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;私钥：</span>
                            <input type="text" v-model="privatekey" >
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">合约地址：</span>
                            <input type="text" v-model="tokencontract" >
                        </div> -->
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">钱包地址：</span>
                            <input type="text" v-model="target" >
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;手续费：</span>
                            <input style="width: 20vw;" type="text" v-model="withdraw"  disabled>%
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">提现数量：</span>
                            <input type="text" v-model="tixianshuliang" @blur="jisuandaozhang">
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">实际到账：</span>
                            <input type="text"  v-model="shijidaozhan" disabled>
                        </div>
                    </div>
                    <div v-else>
                        
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">用户地址：</span>
                            <input type="text" v-model="fromaddress" placeholder="请登录获取用户地址" >
                            <!-- <a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                            padding: 0 2vw;
                            text-align: center;
                            display: inline-block;
                            border-radius: 1vw;
                            color: #955942;
                            white-space: nowrap;
                            font-size: 14px;margin-left:2vw" href="javascript:;" :data-clipboard-text="chongzhidizhi" class="copy">复制</a>  -->
                        </div>
                        <!-- <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">充值地址：</span>
                            <input type="text" v-model="toaddress"  disabled >
                            
                        </div> -->
                         <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数量：</span>
                            <input type="text" v-model="amount"  >
                        </div>
                       
                        <!-- <div class="gmkshuliang flex flex_center ali_center">
                            <img :src="erweima" alt="">
                        </div> -->
                    </div>
                    
                   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="tixianqueding"  v-if="selectVal == 2">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="chongzhiqueding" v-if="selectVal == 1">
                   <img src="../../assets/images/nongchang/denglv/login.png" alt="" @click="tologinqianbao" >
                </div>
            </div>
        </div>
        <!--支付密码 -->
        <div class="zhifukuang animat" v-if="zhifukuang">
            <div class="kuang">
                <div class="content  ">
                    
                    <div>请输入支付密码</div>
                    <!-- 密码输入框 -->
                    <van-password-input
                        :value="value"
                        :error-info="errorInfo"
                        :focused="showKeyboard"
                        @focus="showKeyboard = true"
                    />
                    
                   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhuimima">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="zhifuqueding">
                   
                </div>
            </div>
            <!-- 数字键盘 -->
            <van-number-keyboard
                v-model="value"
                :show="showKeyboard"
                @blur="showKeyboard = false"
            />
        </div>
        <!-- 鸡蛋明细 -->
        <div class="jidangkuang animat" v-if="jidangkuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="shouhuo ? shouhuo1 : shouhuo2" alt="" srcset="" @click="tabjidan(0)">
                    <img :src="touqu ? touqu1 : touqu2" alt="" srcset="" @click="tabjidan(1)">
                    <img :src="dasao ? dasao1 : dasao2" alt="" srcset="" @click="tabjidan(2)">
                    
                </div>
                <div class="sdlist" v-if="statusjidan == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propshouhuo"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">订单：{{item.id}}</span>
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjidan == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="proptoudao"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span  style="width: 30vw;overflow: hidden;margin-right:5vw;">ID：{{item.user_name}}</span>
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjidan == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propdasao"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">ID：{{item.user_name}}</span>
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="jishou flex flex_center" v-if="statusjishi == 1">
                    <img src="../../assets/images/nongchang/jishi/jishou.png" alt="" srcset="" @click="jishoubtn">
                </div>
            </div>
        </div>
        <!-- 小鸡明细 -->
        <div class="xiaojikuang animat" v-if="xiaojikuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="jishi ? jishi1 : jishi2" alt="" srcset="" @click="tabxiaoji(0)">
                    <img :src="shangdian ? shangdian1 : shangdian2" alt="" srcset="" @click="tabxiaoji(1)">
                    <img :src="fuhua ? fuhua1 : fuhua2" alt="" srcset="" @click="tabxiaoji(2)">
                    
                </div>
                <div class="sdlist" v-if="statusxiaoji == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propjishi"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span v-if="item.change_type == 1">鸡分：{{item.change_amount}}</span>
                                    <span v-else>鸡分：-{{item.change_amount}}</span>
                                    <span>数量：{{item.left_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusxiaoji == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propshangdian"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>等级：{{item.remark   }}</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <!-- <span style="width: 30vw;overflow: hidden;margin-right:5vw;">小鸡：2号</span> -->
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusxiaoji == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propfuhua"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>加速包：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <!-- <span v-if="item.status == 2" style="width: 30vw;overflow: hidden;margin-right:5vw;">订单：2号</span> -->
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="jishou flex flex_center" >
                    <img src="../../assets/images/nongchang/jishi/jishou.png" alt="" srcset="" @click="jishoubtn" v-if="statusjishi == 1">
                    <img src="../../assets/images/nongchang/jishi/zhuanrangbtn.png" alt="" srcset="" @click="jifenzhuanrangbtn">

                </div>
            </div>
        </div>
        <!-- 鸡分明细 -->
        <div class="jifenkuang animat" v-if="jifenkuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="chongzhitixian ? chongzhitixian1 : chongzhitixian2" alt="" srcset="" @click="tabjifen(0)">
                    <img :src="zhuanrangjifen ? zhuanrangjifen1 : zhuanrangjifen2" alt="" srcset="" @click="tabjifen(1)">
                    <img :src="goumaixiaoji ? goumaixiaoji1 : goumaixiaoji2" alt="" srcset="" @click="tabjifen(2)">
                    
                </div>
                <div class="sdlist" v-if="statusjifen == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="prochongzhitixian"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <span v-if="item.status != 1">ID：ys25421</span>
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-if="item.source_type == 110">鸡分：-{{item.change_amount}}</span>
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-else>鸡分：{{item.change_amount}}</span>
                                    <!-- <span>数量：300</span> -->
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjifen == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="prozhuanzhang"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <span >ID：{{item.source_id}}</span>
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-if="item.change_type == 2">鸡分：-{{item.change_amount}}</span>
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-else>鸡分：{{item.change_amount}}</span>
                                    <span>昵称：{{item.user_name}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjifen == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="projiaoyi"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <span>ID：{{item.source_id}}</span>
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-if="item.source_type == 103">鸡分：-{{item.source_type}}</span>
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-else>鸡分：{{item.source_type}}</span>
                                    <!-- <span>数量：300</span> -->
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="jishou flex flex_center" >
                    <img src="../../assets/images/nongchang/jifenmingxi/zhuanrangbtn.png" alt="" srcset="" @click="zhuanrangbtn">
                </div>
            </div>
        </div>
        <!--鸡分转让 -->
        <div class="jifenzhuanrangkuang animat" v-if="jifenzhuanrangkuang">
            <div class="kuang">
                <div class="content  ">
                     <div class="zhuan flex ali_center">
                        <span class="width20">转让ID：</span>
                        <input type="number" v-model="to_user_id" placeholder="请输入转让ID">
                    </div>
                    <div class="zhuan flex ali_center">
                        <span class="width20">转让鸡分：</span>
                        <input type="number" v-model="jifennum" placeholder="请输入转让鸡分">
                    </div>
    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="zhuanrangqueding">
                   
                </div>
            </div>
        </div>
        <!--小鸡转让 -->
        <div class="xiaojizhuanrangkuang animat" v-if="xiaojizhuanrangkuang">
            <div class="kuang">
                <div class="content  ">
                     <div class="zhuan flex ali_center">
                        <span class="width20">转让ID：</span>
                        <input type="number" v-model="to_user_id" placeholder="请输入转让ID">
                    </div>
                    <div class="zhuan flex ali_center">
                        <span class="width20">转让小鸡：</span>
                        <input type="number" v-model="xiaojinum" placeholder="请输入转让小鸡">
                    </div>
    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="xiaojizhuanrangqueding">
                   
                </div>
            </div>
        </div>
        <!-- 孵化 -->
        <div class="fuhuakuang animat" v-if="fuhuakuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                 <div class="dan flex flex_center" :class="finish_time ? '': 'margintop'">
                    <img src="../../assets/images/nongchang/yangzhi/dan.png" alt="" v-if="finish_time" @click="fanhui">
                </div>
                <div class="jishou flex flex_col flex_center ali_center ">
                    <img src="../../assets/images/nongchang/yangzhi/jiasu.png" alt="" srcset="" v-if="fuhuaIf" @click="jiasubtn" >
                    <img src="../../assets/images/nongchang/yangzhi/fuhua.png" alt="" srcset=""  v-else @click="fuhuabtn">
                    <div style="color:#E2751A;font-size:3vw;" v-if="finish_time">{{jiasufuhuashuliang}}小鸡，{{finish_time}}后孵化</div>
                </div>
            </div>
        </div>
        <!-- 孵化框 -->
        <div class="fuhua1kuang animat" v-if="fuhua1kuang">
            <div class="kuang">
                <div class="content">
                    <div>现有鸡蛋：<span>{{balance.credit2}}</span></div>
                    <div>孵化数量：<input type="text" v-model="fuhuashuliang"></div>
                    <div>孵化时间：<span>72小时</span></div>
                </div>
                <div class="shezhibtn flex  flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="fuhuaqueding">
                </div>
            </div>
        </div>
        <!-- 加速框 -->
        <div class="jiasukuang animat" v-if="jiasukuang">
            <div class="kuang">
                <div class="content">
                    <div>孵化数量：<input type="text" v-model="jiasufuhuashuliang"  disabled></div>
                    <div>加速等级：
                        <span>
                            <select style="background: #EDC782;border: 0;width: 88%;color: #955942;font-size: 4vw;" 
                            v-model="jiasudengjixuan" @change="selectdengji(jiasudengjixuan)">
                                <option value ="0">请选择</option> 
                                <option :value ="item.id"  v-for="(item, index) in list" :key="index">{{item.title}}</option>
                                <!-- <option value ="2">提现</option> -->
                            </select>    
                        </span>
                    </div>
                    <div>加速时间：<span>{{jiasushijian}}小时</span></div>
                    <div>加速消耗：<span>{{jiasuxiaohao}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex  flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="jiasufuhuaqueding">
                </div>
            </div>
        </div>
        <!-- 更换绑定 -->
        <div class="genghuan animat" v-if="genghuan">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <!-- <div>购买物品：小鸡</div> -->
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>新手机号：</span>
                        <input type="text" v-model="newmobile" placeholder="请输入新手机号">
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;验证码：</span>
                        <input type="text" v-model="newcode" placeholder="请输入验证码" style="width:23vw;">
                        <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>登录密码：</span>
                        <input type="text"  placeholder="请输入登录密码" v-model="newpwd" >
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>确认密码：</span>
                        <input type="text"  placeholder="请输入确认密码" v-model="newcompwd" >
                    </div>
                    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="genghuang">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <div class="nechenggenghuan animat" v-if="nechenggenghuan">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <!-- <div>购买物品：小鸡</div> -->
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>会员昵称：</span>
                        <input type="text" v-model="newnicheng" placeholder="请输入新会员昵称">
                    </div>   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="nechengxiugai">
                </div>
            </div>
        </div>
        <!-- 围栏 -->
        <div class="weilan animat" v-if="weilankuang">
            <div class="kuang">
                <div class="content">
                    <div><img :src="imgSrc" alt=""> </div>
                    <div>围栏等级：<span>{{dengji}}</span></div>
                    <div>围栏收益：<span>{{profit}}%</span></div>
                    <div>围栏消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="weilanqueding"> -->
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

         <!-- 守护犬 -->
        <div class="shouhuquan animat" v-if="shouhuquankuang">
            <div class="kuang">
                <div class="content">
                   <div><img :src="imgSrc" alt=""> </div>
                    <div>守护等级：<span>{{dengji}}</span></div>
                    <div>守护防盗：<span>{{steal}}%</span></div>
                    <div>守护消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="shouhuquanqueding"> -->
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 鸡饲料 -->
        <div class="jisiliao animat" v-if="jisiliaokuang">
            <div class="kuang">
                <div class="content">
                    <div><img :src="imgSrc" alt=""> </div>
                    <div>饲料等级：<span>{{dengji}}</span></div>
                    <div>加速时间：<span>{{speed}}</span></div>
                    <div>喂养消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="jisiliaoqueding"> -->
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 扫把 -->
        <div class="saoba animat" v-if="saobakuang">
            <div class="kuang">
                <div class="content">
                    <div><img :src="imgSrc" alt=""> </div>
                    <div>扫帚等级：<span>{{dengji}}</span></div>
                    <div>打扫次数：<span>{{count}}</span></div>
                    <div>打扫收益：<span>{{gift}}%</span></div>
                    <div>打扫消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="jisiliaoqueding"> -->
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 // 複製模塊
import {copy} from '../../func/copy'
import { sendTransaction } from '../../utils/chongzhi'
import {enable} from "../../utils/web3utils";
export default {
    name: 'index',
    data () {
        return {
            user_id:"",
            nick_name:"",
            avatar:"",
            mobile:"",
            invite_code:"",
            first_leader:{},
            team_info:{},
            balance:"",
            shezhikuang: false,
            shezhitext:true,
            yinyue: true,
            yinxiao:false,
            shengyi:false,
            code:"",
            timeAndTextOfSendcode:"获取验证码",
            inputMsg:{
                mobile:"",
                code:"",
                pwd:"",
                pay_pwd_confirm:"",
                spread:"",
            },
            shangdiankuang:false,
            jisiliao:true,
            jisiliao1:require('@/assets/images/nongchang/shangdian/jisiliao.png'),
            jisiliao2:require('@/assets/images/nongchang/shangdian/jisiliao1.png'),
            shouhuquan:false,
            shouhuquan1:require('@/assets/images/nongchang/shangdian/shouhuquan.png'),
            shouhuquan2:require('@/assets/images/nongchang/shangdian/shouhuquan1.png'),
            zuo:false,
            zuo1:require('@/assets/images/nongchang/shangdian/zuo.png'),
            zuo2:require('@/assets/images/nongchang/shangdian/zuo1.png'),
            zhong:false,
            zhong1:require('@/assets/images/nongchang/shangdian/zhong.png'),
            zhong2:require('@/assets/images/nongchang/shangdian/zhong1.png'),
            you:false,
            you1:require('@/assets/images/nongchang/shangdian/you.png'),
            you2:require('@/assets/images/nongchang/shangdian/you1.png'),
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
            list:[],
            page: 1,
            limit: 10,
            finished: false,
            loading: false,
            status: 0,
            statushao:0,
            statusjishi:0,
            tishikuang:false,
            goumaikuang:false,
            goumaidingdan:{},
            num:"", //购买数量 - 集市 - 我的购买
            total:"",   //支付鸡分 - 集市 - 我的购买
            zhifukuang:false,
            value: '', //支付密码 数字键盘
            errorInfo: '',
            showKeyboard: false, //数字键盘
            jishoukuang:false,
            unit:"", //小鸡单价
            jishounum:"",//寄售数量
            shouhuojifen:"", //收获鸡分
            shouxufei:"10%", //手续费
            xiaojiprice:1, //小鸡价格
            goumaishuliang:330, //购买数量
            shangdiangoumaikuang:false,
            xiaojiID: '', //购买 小鸡ID
            jidangkuang:false,// 鸡蛋明细
            shouhuo:false,
            shouhuo1:require('@/assets/images/nongchang/jidanmingxi/shouhuo.png'),
            shouhuo2:require('@/assets/images/nongchang/jidanmingxi/shouhuo1.png'),
            touqu:false,
            touqu1:require('@/assets/images/nongchang/jidanmingxi/touqu.png'),
            touqu2:require('@/assets/images/nongchang/jidanmingxi/touqu1.png'),
            dasao:false,
            dasao1:require('@/assets/images/nongchang/jidanmingxi/dasao.png'),
            dasao2:require('@/assets/images/nongchang/jidanmingxi/dasao1.png'),
            statusjidan:0,
            xiaojikuang: false,//小鸡明细
            jishi:false,
            jishi1:require('@/assets/images/nongchang/xiaojimingxi/jishi.png'),
            jishi2:require('@/assets/images/nongchang/xiaojimingxi/jishi1.png'),
            shangdian:false,
            shangdian1:require('@/assets/images/nongchang/xiaojimingxi/shangdian.png'),
            shangdian2:require('@/assets/images/nongchang/xiaojimingxi/shangdian1.png'),
            fuhua:false,
            fuhua1:require('@/assets/images/nongchang/xiaojimingxi/fuhua.png'),
            fuhua2:require('@/assets/images/nongchang/xiaojimingxi/fuhua1.png'),
            statusxiaoji:0,
            jifenkuang: false,//鸡分明细
            chongzhitixian:false,
            chongzhitixian1:require('@/assets/images/nongchang/jifenmingxi/chongzhitixian.png'),
            chongzhitixian2:require('@/assets/images/nongchang/jifenmingxi/chongzhitixian1.png'),
            zhuanrangjifen:false,
            zhuanrangjifen1:require('@/assets/images/nongchang/jifenmingxi/zhuanrangjifen.png'),
            zhuanrangjifen2:require('@/assets/images/nongchang/jifenmingxi/zhuanrangjifen1.png'),
            goumaixiaoji:false,
            goumaixiaoji1:require('@/assets/images/nongchang/jifenmingxi/goumaixiaoji.png'),
            goumaixiaoji2:require('@/assets/images/nongchang/jifenmingxi/goumaixiaoji1.png'),
            statusjifen:0,
            xiaojizhuanrangkuang:false,
            xiaojinum:"", //转让小鸡
            jifenzhuanrangkuang:false,
            to_user_id: "", //转让ID
            jifennum:"", //转让鸡分
            MP3_bg:require('@/assets/images/nongchang/music/bg_music.mp3'),
            MP3_click:require('@/assets/images/nongchang/music/click.mp3'),
            chongzhitixiankuang:false,
            selectVal:1,
            tixianshuliang:"",
            shijidaozhan:"",
            toaddress:"0xeA0be69A80C19FaD352b2a55D07Bcf1fe8B94688",
            fromaddress:"",
            amount:"",
            noweb3: false,
            erweima:"http://6006.jujiawangluokeji.com/uploads/images/20211115/c5fab0dd442615f2055a26f0bb604f3f.jpg",
            // privatekey:"", //Trx账户私钥：
            // tokencontract:"", //币的合约地址
            // target:"", //目标地址：
            // withdraw: "", //提现手续费%
            fuhuakuang: false,
            fuhuaIf:false,
            fuhua1kuang:false,
            fuhuashuliang:"",
            jiasukuang:false,
            jiasufuhuashuliang:"",
            jiasudengjixuan:"0",
            finish_time:"",
            jiasushijian:"",
            jiasuxiaohao:"",
            genghuan:false,
            nechenggenghuan:false,
            newmobile:"",
            newnicheng:"",
            newcode:"",
            newpwd:"",
            newcompwd:"",
            timeAndTextOfSendcode:"发送验证码",
            weilankuang:false,
            shouhuquankuang: false,
            jisiliaokuang:false,
            saobakuang:false,
            imgSrc:'',//鸡饲料展示
            dengji:"", 
            speed:"",
            xiaohaoxiaoji:"",
            steal:"", //守护犬展示
            profit:"", //围栏展示
            count:"", //扫把展示
            gift:"", //扫把展示
            privatekey:"", //Trx账户私钥：
            tokencontract:"", //币的合约地址
            target:"", //目标地址：
            withdraw: "", //提现手续费%
            jishexiangqingkuang: false,
            prop_fence_level:"",
            prop_dog_level:"",
            team_info:"",
            contractAddr:"", //合约地址
            
        }
    },
    async mounted(){
        //傳遞複製按鈕選擇器, 接受複製插件的 clipboard 實例
        this.clipboard = copy('.copy')
        this.getData();
        // this.goodslists();
        this.getshouxufei();
         //获取登录
        // let res = await enable();
        // console.log(res)
        // if (!res) {
        //     this.noweb3 = true;
        // }
        setInterval(() => {
            this.getData();
        }, 10000);
        
    },
    computed:{
        //收获鸡分
        // shouhuojifen(){
        //     if(!this.jishounum || this.jishounum == '') return Toast('请输入寄售数量');
        //     if(!this.unit || this.unit == '') return Toast('请输入小鸡单价');
            
        //     return this.jishounum * this.unit * (1 - this.shouxufei);
        // }
        // 总鸡分
        zongjifen(){
            return this.xiaojiprice * this.goumaishuliang
        },
    },
    watch: {
        value(value) {
            
            if (value.length > 6 ) {
                this.errorInfo = '密码长度超过6位';
                this.value = ''
            } else {
                this.errorInfo = '';
            }
        },
        // jiasudengjixuan(value){
        //     this.list.forEach((item, index)=>{
        //         if(item.id == value){
        //             this.jiasushijian = item.time
        //             if(this.jiasufuhuashuliang != ''){
        //                 this.jiasuxiaohao = this.jiasufuhuashuliang * item.money/100
        //             }
        //         }
        //     })
            
        // },
    },
    methods:{
        //围栏展示
        weilanhandle(img, title, profit, money){
            this.weilankuang = true;
            this.imgSrc = img;
            this.dengji = title;
            this.profit = profit;
            this.xiaohaoxiaoji = money;
        },
        //守护犬展示
        shouhuquanhandle(img, title, steal, money){
            this.shouhuquankuang = true;
            this.imgSrc = img;
            this.dengji = title;
            this.steal = steal;
            this.xiaohaoxiaoji = money;
        },
        //鸡饲料展示
        jisiliaohandle(img, title, speed, money){
            this.jisiliaokuang = true;
            this.imgSrc = img;
            this.dengji = title;
            this.speed = speed;
            this.xiaohaoxiaoji = money;
        },
        //扫把展示
        saobahandle(img, title, count, gift, money){
            this.saobakuang = true;
            this.imgSrc = img;
            this.dengji = title;
            this.count = count;
            this.gift = gift;
            this.xiaohaoxiaoji = money;
        },
        async genghuang(){
             if(this.newmobile == "") return Toast('请输入新手机号')
             if(this.newcode == "") return Toast('请输入验证码')
             if(this.newpwd == "") return Toast('请输入登录密码')
             if(this.newcompwd == "") return Toast('请输入确认密码')

            let res = await $ajax('useredit', {
                "mobile": this.newmobile, //手机号码
                "pwd": this.newpwd, //登录密码
                "pwd_confirm": this.newcompwd, //确认登录密码
                "sms_code":  this.newcode //短信验证码
             })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.fanhui();
        },
        async nechengxiugai() {
            if(this.newnicheng == "") return Toast('请输入新会员昵称')
            let res = await $ajax('useredit_nick_name', {
                "nick_name": this.newnicheng, //手机号码
             })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.fanhui();
            this.getData();
        },
        nicheng(){
            this.nechenggenghuan = true;
        },
        bangding(){
            this.genghuan = true;
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
        // 重置密码二级
        async senVerifyCodeforget(){
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
        // 发送验证码
        async senVerifyCode () {
            // let { register } = this.$i18n
            
            if ( this.timeAndTextOfSendcode !== '发送验证码') return false
            if (!this.newmobile) return Toast( '请输入手机号')
            let res = await $ajax('sendVerifycode',{
                mobile: this.newmobile,
                 "type": "forget" //短信验证码类型：register，forget
            })
            if (!res) return false
            Toast(res.msg)
            this.timeAndTextOfSendcode = 60
            this.timing() //執行倒計時
        },
        async jiasufuhuaqueding(){
            if(this.jiasufuhuashuliang == "") return Toast('请输入孵化数量')
            // if(this.jiasudengjixuan == 1) return Toast('请输入孵化数量')
            let res = await $ajax('hatchuse_pack', {
                prop_pack: this.jiasudengjixuan
             })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.fanhui();
        },
        // jiashufuhuashulianghandle(){
        //     if(this.jiasufuhuashuliang == "") return Toast('请输入孵化数量')
        //     this.list.forEach((item, index)=>{
        //         if(item.id == this.jiasudengjixuan){
        //             this.jiasushijian = item.time
        //             if(this.jiasufuhuashuliang != ''){
        //                 this.jiasuxiaohao = this.jiasufuhuashuliang * item.money/100
        //             }
        //         }
        //     })
        // },
        selectdengji(value){
            if(this.jiasufuhuashuliang == "") return Toast('请输入孵化数量')
            this.list.forEach((item, index)=>{
                if(item.id == value){
                    this.jiasushijian = item.time
                    if(this.jiasufuhuashuliang != ''){
                        this.jiasuxiaohao = this.jiasufuhuashuliang * item.money/100
                    }
                }
            })
        },
        jiasubtn(){
            this.jiasukuang = true;
            this.list = [];
            this.page = 1;
            this.proppack();
            // console.log(this.list)
            // console.log(this.list[0])
            // this.jiasudengjixuan = this.list[0].id
        },
        async fuhuaqueding(){
            if(this.fuhuashuliang == "") return Toast('请输入孵化数量')
            let res = await $ajax('hatchcreate', {
                num: this.fuhuashuliang
             })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.fanhui();
        },
        fuhuabtn(){
            this.fuhua1kuang = true;
            
        },
        async getfuhua(){
             let res = await $ajax('hatchindex', {})
            if (!res) return false
            console.log(res)
            let data = res.data.data
            if(!data){
                console.log(2222222)
                this.fuhuaIf = false
                
            }else{
                console.log(333333333)
                this.fuhuaIf = true
                let data = res.data.data
                this.finish_time = this.getFormatDuringTime(data.finish_time) 
                this.jiasufuhuashuliang = data.egg_num
                
            }
        },
        getFormatDuringTime(during) {
            var s = Math.floor(during / 1) % 60;
            during = Math.floor(during / 60);
            var i = during % 60;
            during = Math.floor(during / 60);
            var h = during % 24;
            during = Math.floor(during / 24);
            var d = during;
            return d + '天' + h + '时' + i + '分' + s + '秒';
        },
        fuhuahandle(){
            this.getfuhua();
            this.fuhuakuang = true;
            this.shangdiankuang = false;
            
        },
        //充值确定
        async chongzhiqueding(){
            let fromaddress = this.fromaddress
            let toaddress = this.toaddress
            let contractAddr = this.contractAddr
            let amount = this.amount
            if(!fromaddress) return Toast('请登录获取用户地址')
            if(!amount) return Toast('请输入数量')
            
            await sendTransaction(fromaddress,toaddress,contractAddr,amount).then(async (res) => {
                console.log(res)
                console.log('进来')
                // alert('进来')
                let resbalancerecharge_submit = await $ajax('balancerecharge_submit', {
                    fromaddress: fromaddress, ////提交充值用户的钱包地址
                    hastransaction: res, ////发起交易后返回的哈希字符串
                    num: amount
                })
                console.log(resbalancerecharge_submit);
                // alert(JSON.stringify(resbalancerecharge_submit))
                if (!resbalancerecharge_submit) return false
                Toast(resbalancerecharge_submit.msg)
                // setTimeout(this.getData(), 4000)
            })
            // if(!res) return false
            // console.log(res)

            
            
        },
        //登录钱包
        async tologinqianbao(){
             //获取登录
            let res = await enable();
            if (!res) {
                this.noweb3 = true;
                
                return false;
            }else {
                this.fromaddress = res
                this.target = res
            }
        },
        //计算实际到账
        jisuandaozhang(){
            if(!this.tixianshuliang || this.tixianshuliang == "") return Toast('请输入提现数量')
            this.shijidaozhan = this.tixianshuliang * (1 - this.withdraw/100)
        },
        //提现
        async tixianqueding(){
            // if(!this.privatekey) return Toast('请输入Trx账户私钥')
            // if(!this.tokencontract) return Toast('请输入币的合约地址')
            if(!this.target) return Toast('请输入币的目标地址')
            if(!this.tixianshuliang) return Toast('请输入提现数量')
            let res = await $ajax('balancewithdraw', {
                // "privatekey": this.privatekey, //Trx账户私钥
                // "tokencontract": this.tokencontract, //币的合约地址
                "target": this.target, //币的目标地址
                "amount": this.tixianshuliang //数量(鸡分)
            })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.chongzhitixiankuang = false;
            // this.privatekey = ""
            // this.tokencontract = ""
            this.target = ""
            this.tixianshuliang = ""

        },
        //充值
        async chongzhitixianhandle(){
            
            let res = await $ajax('balancerecharge', {
                 uid: this.user_id
             })
            if (!res) return false
            console.log(res)
            this.toaddress = res.toaddress //转账地址
            this.contractAddr = res.contractAddr //合约地址
            this.chongzhitixiankuang = true;
        },
        musicClick () {
            if(this.yinxiao){
                 this.$refs.MusicClick.play()
            }else{
                this.$refs.MusicClick.pause()
            }
           
        },
        musicPlay () {
            if(this.yinyue){
                console.log(this.$parent.$refs)
                this.$parent.$refs.MusicPlay.play()
            }else{
                this.$parent.$refs.MusicPlay.pause()
            }
           
        },
        //重置密码二级
        async chongzhierjimima(){
            if (this.inputMsg.mobile.length < 11) return Toast( '请输入正确手机号!' )
            if (!this.inputMsg.code) return Toast( '请输入短信验证码！' )
            if (!this.inputMsg.pwd ) return Toast( '请输入正确密码!' )
            if(this.inputMsg.pwd != this.inputMsg.pay_pwd_confirm ) return Toast( '两次输入的密码不一致!' )
            let res = await $ajax('userforget_pay', {
                mobile:this.inputMsg.mobile,
                pay_pwd:this.inputMsg.pwd,
                pay_pwd_confirm:this.inputMsg.pay_pwd_confirm,
                sms_code:this.inputMsg.code
            })
            if (!res) return false
            Toast(res.msg)
            this.fanhui();
        },
        //去分享
        tofenxiang(){
            this.$router.push({
                name:'invite'
            })
        },
        // 切换账号
        tologin(){
            localStorage.removeItem('openid');
            localStorage.removeItem('mobile')
            this.$router.push({
                name: 'login'
            })
        },
        jifenzhuanrangbtn(){
            this.xiaojizhuanrangkuang = true
        },
        // 小鸡转让确定 弹支付
        xiaojizhuanrangqueding(){
            if(!this.to_user_id) return Toast('请输入转让ID!')
            if(!this.xiaojinum || this.xiaojinum == '') return Toast('请输入转让小鸡!');
            this.zhifukuang = true
        },
        // 转让确定 弹支付
        zhuanrangqueding(){
            if(!this.to_user_id) return Toast('请输入转让ID!')
            if(!this.jifennum || this.jifennum == '') return Toast('请输入转让鸡分!');
            this.zhifukuang = true
            
        },
        zhuanrangbtn(){
            this.jifenzhuanrangkuang = true

        },
        jifen(){
            this.tabjifen(0)
           this.jifenkuang = true
            
        },
        async prochongzhitixian(){
            let res = await $ajax('logbalance_integral', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async prozhuanzhang(){
            let res = await $ajax('logtransfer_integral', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async projiaoyi(){
            let res = await $ajax('logtrade_integral', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //鸡分明细
        tabjifen(index){
            console.log(index)
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.statusjifen = index
            if(index == 0){
                this.chongzhitixian = true
                this.zhuanrangjifen = false
                this.goumaixiaoji = false
                this.prochongzhitixian()

            }else if(index == 1){
                this.chongzhitixian = false
                this.zhuanrangjifen = true
                this.goumaixiaoji = false
                this.prozhuanzhang()
            }else if(index == 2){
                this.chongzhitixian = false
                this.zhuanrangjifen = false
                this.goumaixiaoji = true
                this.projiaoyi()
              
            }
        },
        xiaoji(){
            this.tabxiaoji(0)
           this.xiaojikuang = true
            
        },
        async propjishi(){
            let res = await $ajax('logtrade_chick', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propshangdian(){
            let res = await $ajax('logshop_chick', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propfuhua(){
            let res = await $ajax('loghatch_chick', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //小鸡明细
        tabxiaoji(index){
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.statusxiaoji = index

            if(index == 0){
                this.jishi = true
                this.shangdian = false
                this.fuhua = false
                this.propjishi();
            }else if(index == 1){
                this.jishi = false
                this.shangdian = true
                this.fuhua = false  
                this.propshangdian();
            }else if(index == 2){
                this.jishi = false
                this.shangdian = false
                this.fuhua = true
                this.propfuhua();
            }
        },
        jidan(){
            // this.shouhuo = true
            this.tabjidan(0)
            this.jidangkuang = true
            
            
        },
        async propshouhuo(){
            let res = await $ajax('logget_egg', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async proptoudao(){
            let res = await $ajax('logsteal_egg', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propdasao(){
            let res = await $ajax('logclean_egg', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        // 鸡蛋明细
        tabjidan(index){
            console.log(33333333333)
            console.log(index)
            this.page = 1;
            this.list = [];
            this.loading = true
            this.finished = false;
            this.statusjidan = index
            if(index == 0){
                this.shouhuo = true
                this.touqu = false
                this.dasao = false
                this.propshouhuo();
            }else if(index == 1){
                this.shouhuo = false
                this.touqu = true
                this.dasao = false   
                this.proptoudao();
            }else if(index == 2){
                this.shouhuo = false
                this.touqu = false
                this.dasao = true
                this.propdasao();
              
            }
        },
        // 去好友养殖
        goyangzhi(user_id){
            this.$router.push({
                name: 'yangzhi',
                query:{
                    user_id:user_id
                }
            })
        },
        // 去养殖页
        yangzhi(){
            this.$router.push({
                name: 'yangzhi'
            })
        },
        async chehui(id,num){
             let res = await $ajax('tradeclear', {
                 "trade_id": id //出售订单id
             })
            if (!res) return false
            console.log(res);
            Toast(`退还的小鸡数量${num}只`)
            this.tabjishi(1)
        },
        jishoubtn(){
            this.jishoukuang = true;
        },
        //挂售 -- 确定
        jishouqueding(){
            if(!this.jishounum) return Toast('请输入寄售数量！')
            if(!this.unit || this.unit == '') return Toast('请输入小鸡单价');
            this.zhifukuang = true;

            
        },
        //获取手续费
        async getshouxufei(){
             let res = await $ajax('config', {})
            if (!res) return false
            console.log(res);
            this.shouxufei = res.trade.trade_fee //实际交易手续费（卖家成功卖出，收益到账时扣除%）
            this.withdraw = res.withdraw.balance_fee //提现手续费%
        },
        // 计算收获鸡分
        jisuanjifen(){
            if(!this.unit || this.unit == '') return Toast('请输入小鸡单价');
            if(!this.jishounum || this.jishounum == '') return Toast('请输入寄售数量');
            
            
            this.shouhuojifen = this.jishounum * this.unit * (100 - this.shouxufei)/100;

        },
        // -- 确认支付密码
        async zhifuqueding(){
            if(this.goumaidingdan.id){ ///集市--我要购买
                // if(!this.goumaidingdan.id) return Toast('没有此订单！');
                if(!this.value || this.value == "") return Toast('请输入支付密码！');
                let res = await $ajax('tradebuy', {
                    "trade_id": this.goumaidingdan.id, //出售订单id
                    "num": this.num, //交易数量
                    "pay_pwd": this.value //交易密码
                })
                if (!res) return false
                console.log(res);
                Toast(res.msg);
                this.goumaidingdan = {};
                this.value = "";
                this.num = "";
                 this.fanhui();
                 this.getData();
            }else if(this.xiaojiID){ //商店 --- 购买小鸡 ID
                if(!this.value || this.value == "") return Toast('请输入支付密码！');
                let res = await $ajax('goodsbuy', {
                     id: this.xiaojiID,
                    pay_pwd: this.value,
                     
                 })
                if (!res) return false
                Toast('购买成功，您购买的300只小鸡已放到仓库')
                this.value = "";
                this.xiaojiID = "";
                 this.fanhui();
                 this.page = 1
                 this.list = [];
                 this.finished = false;

            } else if(this.to_user_id && this.jifennum){ //鸡分转让 -- 转让ID
                if(!this.value || this.value == "") return Toast('请输入支付密码！');
                let res = await $ajax('transfersubmit', {
                    to_user_id: this.to_user_id,
                    num: this.jifennum,
                    pay_pwd: this.value,
                     
                 })
                if (!res) return false
                Toast(res.msg)
                this.value = "";
                this.to_user_id = "";
                this.jifennum = "";
                

            }else if(this.to_user_id && this.xiaojinum){ //小鸡转让 -- 转让ID
            console.log(333333333)
                if(!this.value || this.value == "") return Toast('请输入支付密码！');
                let res = await $ajax('transfersubmit_credit', {
                    to_user_id: this.to_user_id,
                    num: this.xiaojinum,
                    pay_pwd: this.value,
                     
                 })
                if (!res) return false
                Toast(res.msg)
                this.value = "";
                this.to_user_id = "";
                this.jifennum = "";
                

            } else{// /集市--我的寄售 -- 寄售
                // if(!this.jishounum) return Toast('请输入寄售数量！')
                //  if(!this.unit || this.unit == '') return Toast('请输入小鸡单价');
                if(!this.value || this.value == "") return Toast('请输入支付密码！');
                let res = await $ajax('tradesell', {
                    "unit": this.unit, //单价
                    "num": this.jishounum, //数量
                    "pay_pwd": this.value //支付密码
                })
                if (!res) return false
                console.log(res);
                Toast(res.msg);
                this.value = "";
                this.jishounum = "";
                this.unit = "";
                 this.fanhui();
                 this.page = 1
                 this.list = [];
                 this.finished = false;
                //  this.trademine();
            }
            
           

        },
        //集市--我要购买 -- 确认
        async goumaisure(id){
            console.log(this.num)
            if(!this.num) return Toast('请输入购买数量！')
            this.zhifukuang = true;
            // if(this.num > 0) return Toast('请输入购买数量！')
            // let res = await $ajax('tradebuy', {
            //     "trade_id": id, //出售订单id
            //     "num": this.num, //交易数量
            //     "pay_pwd": 111111 //交易密码
            //  })
            // if (!res) return false
            // console.log(res);
        },
        jisuantotal(unit){
            if(parseInt(this.num) > 0){
                this.total = this.num * unit
            }
        },
        //集市--我要购买 -- 购买
        goumaihandle(item){
            this.num = "";
            this.total = "";
            this.goumaikuang = true;
            this.goumaidingdan = item

        },
        tabjishi(index){
            console.log('index', index)
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.statusjishi = index
            if(index == 0){
          
                this.goumai = true
                this.jishou = false
                this.jilv = false
                this.tradelists();
                
            }else if(index == 1){
            
                this.goumai = false
                this.jishou = true
                this.jilv = false
                this.trademine();
                         
            }else if(index == 2){
   
                this.goumai = false
                this.jishou = false
                this.jilv = true
                this.tradeorder();
            }
        },
        //集市 我要购买
        async tradelists(){
            let res = await $ajax('tradelists', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //集市 我的挂卖
        async trademine(){
            let res = await $ajax('trademine', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //集市 交易记录
        async tradeorder(){
            let res = await $ajax('tradeorder', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        // 换一批
        huanyipi(){
            this.tabhaoyou(this.statushao)
        },
        tabhaoyou(index){
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.statushao = index
            if(index == 0){
                this.hao = true
                this.guangchang = false
                
                this.fanslists();
            }else if(index == 1){
                this.hao = false
                this.guangchang = true
                this.fansalllists();    
            }
        },
        async fanslists(){
            let res = await $ajax('fanslists', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            // this.page++
            console.log(res.fans)
            this.list = res.fans
            // this.listtotal = res.listtotal
            // this.list.push(...res.fans)
            // // 加载状态结束
            // this.loading = false
            // if (res.fans.length === 0) {
            //     this.finished = true //加载完成
            // } 
        },
        async fansalllists(){
            let res = await $ajax('fansalllists', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            // this.page++
            console.log(res.fans)
            this.list = res.fans
            // this.listtotal = res.listtotal
            // this.list.push(...res.fans)
            // // 加载状态结束
            // this.loading = false
            // if (res.fans.length === 0) {
            //     this.finished = true //加载完成
            // } 
        },
        async goumaiqueding(){ // 商店 -- 小鸡购买-- 确定
            this.zhifukuang = true;
        },
        async xiaojigoumai(id){ //小鸡购买
            this.xiaojiID = id
            this.shangdiangoumaikuang = true;
           
        },
        async goodslists(){ // 小鸡
             let res = await $ajax('goodslists', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.goods)
            // this.listtotal = res.listtotal
            this.list.push(...res.goods)
            // // 加载状态结束
            this.loading = false
            if (res.goods.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propfence(){ //围栏
             let res = await $ajax('propfence', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.fence)
            // this.listtotal = res.listtotal
            this.list.push(...res.fence)
            // // 加载状态结束
            this.loading = false
            if (res.fence.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propdog(){ //守护犬
             let res = await $ajax('propdog', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.dog)
            // this.listtotal = res.listtotal
            this.list.push(...res.dog)
            // // 加载状态结束
            this.loading = false
            if (res.dog.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propfeed(){ //饲料
             let res = await $ajax('propfeed', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //购买扫把
        async goumaisaoba(id){
             let res = await $ajax('housebuy_broom', {
                 fans_id: this.user_id,
                 prop_broom: id,
             })
            if (!res) return false
            Toast(res.msg)
        },
        async propbroom(){ //扫吧
             let res = await $ajax('propbroom', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.broom)
            // this.listtotal = res.listtotal
            this.list.push(...res.broom)
            // // 加载状态结束
            this.loading = false
            if (res.broom.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async proppack(){ //加速包
             let res = await $ajax('proppack', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.pack)
            // this.listtotal = res.listtotal
            this.list.push(...res.pack)
            // // 加载状态结束
            this.loading = false
            if (res.pack.length === 0) {
                this.finished = true //加载完成
            } 
        },

        async getData(){
            let res = await $ajax('userinfo', {})
            if (!res) return false
            console.log(res)
            Object.keys(res).forEach((key) =>{
                this[key] = res[key]
            })
        },
        tab(index){
            console.log('index', index)
            this.page = 1;
            this.list = [];
            this.finished = false;
            this.loading = true;
            this.status = index
         
            if(index == 0){
                console.log(1111111111)
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = true
                this.zhong = false
                this.you =false
                
                // this.goodslists();
                this.propfeed();
            }else if(index == 1){
                this.zuo = false
                this.shouhuquan = true
                this.jisiliao = false
                this.zhong = false
                this.you = false    
                // this.status = index  
                this.propdog();    
            }else if(index == 2){
                this.zuo = true;
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you = false
                // this.status = index
                this.propfence();
            }else if(index == 3){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = true
                this.you = false
                // this.status = index
                this.propbroom();
            }else if(index == 4){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you = true
                // this.status = index
                this.proppack()
            }
        },
        guangbi(){
            this.shangdiankuang = false;
            this.jishikuang = false;
            this.cangkukuang = false;
            
        },
        shezhierjimima(){
            this.shengyi = false;
        },
        shezhi(){
            this.shezhikuang = true;
            this.shengyi = true;
        },
        fanhuimima(){
            this.zhifukuang = false;
        },
        fanhui(){
           this.shezhikuang = false; 
           this.gerenxinxikuang = false;
           this.haoyoukuang = false;
           this.tishikuang = false;
           this.goumaikuang = false;
           this.zhifukuang = false;
           this.jishoukuang = false;
           this.shangdiangoumaikuang = false;
           this.jidangkuang = false;
           this.xiaojikuang = false;
           this.jifenkuang = false;
           this.jifenzhuanrangkuang = false;
           this.xiaojizhuanrangkuang = false;
           this.value = '';
           this.chongzhitixiankuang = false;
           this.fuhuakuang = false;
           this.fuhua1kuang = false;
           this.jiasukuang = false;
           this.genghuan = false;
           this.weilankuang = false;
            this.shouhuquankuang = false;
            this.jisiliaokuang = false;
            this.saobakuang = false    
            this.nechenggenghuan = false;
        },
        cangku(){
            this.cangkukuang = true;
            this.tab(0)
        },
        haoyou(){
            this.haoyoukuang = true;
            this.tabhaoyou(0);
        },
        shangdianhandle(){
            
            this.shangdiankuang = true
            this.tab(0)
            // this.finished = false;
        },
        jishihandle(){
            // this.page = 1;
            // this.list = [];
            // this.finished = false;
            this.jishikuang = true;
            this.tabjishi(0)
            
        },
        
        gerenxinxi(){
            this.gerenxinxikuang = true;
        },
        kaifazhong(){
            this.tishikuang = true;
        },
       

    }
}
</script>
<style lang="less" scope>
    .homeIndex{
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/nongchang/index_bg.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
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
            z-index:10;
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
                        height: 5vw;
                        line-height: 5vw;
                        
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
            .niaoniao{
                position: absolute;
                top: 6vw;
                left: 2.5vw;
                z-index: -1;
                >img:nth-child(1){
                    width: 25vw;
                    /* height: 10vw; */
                    position: absolute;
                    top: -4vw;
                    left: 26vw;
                }
                >img:nth-child(2){
                    position: absolute;
                    top: -4vw;
                    left: 56vw;
                    z-index: 90;
                    width: 42vw;
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
                width: 14vw;
                height: 14vw;
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
            >.yangzhiji{
                 width: 14vw;
                position: absolute;
                top: 9vw;
                left: 16vw;
                >img:first-child{
                    width: 13vw;
                    position: absolute;
                    top: 9vw;
                    left: 16vw;

                }
                >img:nth-child(2){
                    width: 10vw;
                    position: absolute;
                    top: 13vw;
                    left: 10vw;

                }
                >img:nth-child(3){
                    width: 14vw;
                    position: absolute;
                    top: 16vw;
                    left: 16vw;

                }
                >img:nth-child(4){
                    width: 10vw;
                    position: absolute;
                    top: 13vw;
                    left: 23vw;

                }
                >img:nth-child(5){
                    width: 10vw;
                    position: absolute;
                    top: 5vw;
                    left: 23vw;

                }
                >img:nth-child(6){
                    width: 14vw;
                    position: absolute;
                    top: 9vw;
                    left: 29vw;

                }
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
            img:nth-child(2){
                // width: 13vw;
                position: absolute;
                top: 9vw;
                left: 12vw;
            }
            img:nth-child(3){
                // width: 13vw;
                position: absolute;
                top: 10vw;
                left: -3vw;
            }
            img:nth-child(4){
                // width: 13vw;
                position: absolute;
                top: 12vw;
                left: 12vw;
            }
            img:nth-child(5){
                // width:13vw;
                position: absolute;
                top: 3vw;
                left: -9vw;
            }
            img:nth-child(6){
                // width: 13vw;
                position: absolute;
                top: 12vw;
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
                        // background: #f7f6fc;
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
                        width: 16vw;
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
                        height: 6vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 78vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 70%;
                    margin-left: 15%;
                    .sditem{
                        background: #FFECDC;
                        width: 100%;
                        // margin-left: 12.5%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        padding: 2vw;
                        box-sizing: border-box;
                      
                        img:first-child{
                            width: 15vw;
                            height: 15vw;
                            border-radius: 50%;
                        }
                        .sdtext{
                            margin-left: 1vw;
                            div{
                                font-size: 10px;
                                white-space: nowrap;
                                height: 5vw;
                                line-height: 5vw;
                            }
                        }
                        img:last-child{
                            width: 15vw;
                            // margin-left: 5vw;
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
                         width: 20vw;
                        height: 6vw;
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
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            width: 100%;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 3vw;
                    img{
                        width: 15vw;
                        height: 7vw;

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
                
                .sdlan{
                    margin-top: 20%;
                    img{
                        width: 13.5vw;
                        height: 6vw;
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
                                font-size: 10px;
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
                height: 110vw;
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
                    text-align: left;
                    margin-left: 7vw;
                    img{
                        width: 15vw;
                        height: 15vw;
                        border-radius: 50%;
                    }
                    div{
                        // height: 6vw;
                        /* margin-top: 1vw; */
                        // line-height: 6vw;
                        // margin-bottom: 0.5vw;
                        a{
                            color:#955942;
                            
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
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
                transform: translate(-50%, -50%);
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
                        width: 20vw;
                        height: 6vw;
                    }
                }
                .sdlist{
                    margin-top: 10%;
                    height: 92vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        // background: #FFECDC;
                        // width: 75%;
                        margin-left: 13.5%;
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
                                font-size: 10px;
                                white-space: nowrap;
                                margin-right: 5vw;
                                // height: 4vw;
                                // line-height: 4vw;
                                img:first-child{
                                    width: 10vw;
                                    // height: 10vw;
                                    // border-radius: 5vw;
                                    margin-right:2vw;
                                }
                                img:nth-child(2){
                                    width: 10vw;
                                    // height: 10vw;
                                    // border-radius: 5vw;
                                    margin-right:2vw;
                                }
                                span{
                                    margin-left: 2vw;
                                    width: 14vw;
                                    overflow: hidden;
                                }
                            }
                            div:nth-child(2){
                                margin-right: 4vw;
                            }
                        }
                        // img:last-child{
                        //     width: 15vw;
                        //     margin-left: 5vw;
                        // }
                    }
                }
                .shezhibtn{
                    margin-top: 5%;
                    img{
                        width: 18vw;
                        margin-left: 2vw;
                    }
                }
            }
        }
        .tishikuang{
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
               transform: translate(-50%, -50%);
                width: 80%;
                height: 58vw;
                background-image: url(../../assets/images/nongchang/tishikuang.png);
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
                    margin-top: 20%;
                    text-align: center;
                    color:#955942;
                    font-size: 5vw;
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
                    margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
            
        }
        .goumaikuang{
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
                background-image: url(../../assets/images/nongchang/jishi/jishikuang.png);
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
                    padding: 5vw 17vw;
                    margin-top: 15%;
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 0 1vw;
                            width: 24vw;
                            color:#955942;
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .jishijishou{
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
                background-image: url(../../assets/images/nongchang/jishi/jishikuang.png);
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
                    padding: 5vw 17vw;
                    margin-top: 15%;
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 24vw;
                            color:#955942;
                            font-size: 10px;
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .shangdiangoumai{
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
                background-image: url(../../assets/images/nongchang/shangdian/shangdiankuang.png);
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
                    padding: 5vw 17vw;
                    margin-top: 15%;
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 24vw;
                            color:#955942;
                            font-size: 10px;
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .chongzhitixiankuang{
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
                height: 120vw;
                background-image: url(../../assets/images/nongchang/chongzhitixian.png);
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
                    padding: 5vw 17vw;
                    margin-top: 15%;
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 24vw;
                            color:#955942;
                            font-size: 10px;
                        }
                        select{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 26vw;
                            color:#955942;
                            font-size: 10px;
                            height: 8vw;
                            border:0;
                        }
                        img{
                            width: 50vw;
                            height: 50vw;
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 16vw;
                    }
                }

           } 
        }
        .zhifukuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(32, 29, 29, 0.7);
            z-index: 101;
            .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -70%);
                width: 80%;
                height: 58vw;
                background-image: url(../../assets/images/nongchang/jishi/jishikuang.png);
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
                    margin-top: 10%;
                    text-align: center;
                    color:#955942;
                    font-size: 5vw;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                      
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .jidangkuang{
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
                background-image: url(../../assets/images/nongchang/jidanmingxi/kuang.png);
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
                        width: 20vw;
                        height: 6vw;
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
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 3vw;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .xiaojikuang{
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
                background-image: url(../../assets/images/nongchang/xiaojimingxi/kuang.png);
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
                         width: 20vw;
                        height: 6vw;
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
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            width: 100%;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 3vw;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .jifenkuang{
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
                height: 140vw;
                background-image: url(../../assets/images/nongchang/jifenmingxi/kuang.png);
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
                         width: 20vw;
                        height: 6vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 75vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 6vw;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .jifenzhuanrangkuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/jifenmingxi/jifenzhuanrangkuang.png);
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

                    padding: 5vw 5vw;
                    margin-top: 25%;
                    .zhuan{
                        width: 100%;
                        // background: #f7f6fc;
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
                            width: 60%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #EDC782;
                            border: 0.5vw solid #EDC782;
                            border-radius: 2vw;
                            font-size: 3vw;
                        }
                    }

                }
                .shezhibtn{
                    // margin-top: ;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .xiaojizhuanrangkuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/jishi/xiaojizhuanrangkuang.png);
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

                    padding: 5vw 5vw;
                    margin-top: 25%;
                    .zhuan{
                        width: 100%;
                        // background: #f7f6fc;
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
                            width: 60%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #EDC782;
                            border: 0.5vw solid #EDC782;
                            border-radius: 2vw;
                            font-size: 3vw;
                        }
                    }

                }
                .shezhibtn{
                    // margin-top: ;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .fuhuakuang{
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
                height: 145vw;
                background-image: url(../../assets/images/nongchang/yangzhi/fuhuakuang.png);
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
                        width: 20vw;
                        height: 6vw;
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
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .margintop{
                    margin-top:110%;
                }
                .dan{
                    margin-top: 70%;
                    img{
                        width:25vw;
                    }
                }
                .jishou{
                    margin-top: 16vw;
                    img{
                        width: 25vw;
                        // height: 7vw;

                    }
                }
            }
        }
        .fuhua1kuang{
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
                background-image: url(../../assets/images/nongchang/yangzhi/fuhuashuliang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 4vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        >input{
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .jiasukuang{
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
                height: 85vw;
                background-image: url(../../assets/images/nongchang/yangzhi/jiasukuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 4vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        >input{
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .genghuan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            // background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/bangding.png);
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
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 40vw;
                            color:#955942;
                            font-size: 12px;
                        }
                        span:last-child{
                            font-size: 3vw;
                            line-height: 8vw;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            background: #FFE19D;
                            border-radius: 1vw;
                            color: #955942;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            height: 10vw;
                            width: 17vw;
                            text-align: center;

                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .nechenggenghuan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            // background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 50vw;
                background-image: url(../../assets/images/nongchang/nichenggenghuan.png);
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
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 40vw;
                            color:#955942;
                            font-size: 12px;
                        }
                        span:last-child{
                            font-size: 3vw;
                            line-height: 8vw;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            background: #FFE19D;
                            border-radius: 1vw;
                            color: #955942;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            height: 10vw;
                            width: 17vw;
                            text-align: center;

                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .weilan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/yangzhi/weilanquang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        
        .zengyang{
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
                background-image: url(../../assets/images/nongchang/yangzhi/zengyangkuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 4vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        >input{
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }

        .shouhuquan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/yangzhi/shouhuquankuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }

        .jisiliao{
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
                background-image: url(../../assets/images/nongchang/yangzhi/jisiliaokuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }

        .saoba{
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
                height: 90vw;
                background-image: url(../../assets/images/nongchang/yangzhi/saobakuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
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
    .van-password-input__security{
        border: 2px solid #A96E03;
        border-radius: 1vw;
    }
    .van-password-input__security li{
        background-color: #EDC782;
        border: 1px solid #A96E03;
    }
    .van-list__finished-text{
        width: 100%;
    }
    // .van-switch--on {
    //     background: #EDC782!important;

    // }
.animat{
    position:relative;
    animation:mymove 1.5s normal;
    animation-direction:normal;/*轮流反向播放动画。*/
    animation-timing-function: ease-in-out; /*动画的速度曲线*/
    -webkit-animation:mymove 1.5s normal; /*Safari and Chrome*/
    -webkit-animation-direction:normal;/*轮流反向播放动画。*/
    -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
}
@keyframes mymove{
    0%{
        transform: scale(1);  /*开始为原始大小*/
    }
    25%{
        transform: scale(1.1); /*放大1.1倍*/
    }
    50%{
        transform: scale(1);
    }
    /* 75%{
        transform: scale(1.2);
    } */
}
@-webkit-keyframes mymove{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(1.1);
    }
    50%{
        transform: scale(1);
    }
    /* 75%{
        transform: scale(1.2);
    } */
}
.width20{
    width:20vw;
    text-align: right;
}
</style>