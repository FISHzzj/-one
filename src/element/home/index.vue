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
                    <span>{{balance.integral}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
                <div class="flex ali_center flex_between" @click="jidan">
                    <img src="../../assets/images/nongchang/jidan.png" alt="" srcset="">
                    <span>{{balance.credit2}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
            </div>
            <div class="xxright flex flex_col flex-start">
                <div class="flex ali_center flex_between" @click="xiaoji">
                    <img src="../../assets/images/nongchang/xiaoji.png" alt="" srcset="">
                    <span>{{balance.credit2}}</span>
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
        <div class="yangzhi">
            <img src="../../assets/images/nongchang/yangzhione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/yangzhi.png" alt="" srcset="" @click="yangzhi">
        </div>
         <!-- 兑换处 -->
        <div class="duihuanchu">
            <img src="../../assets/images/nongchang/duihuan.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/duihuanone.png" alt="" srcset="" @click="kaifazhong">
        </div>
        <!-- 孵化 -->
        <div class="fuhua">
            <img src="../../assets/images/nongchang/fuhuaone.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/fuhua.png" alt="" srcset="">
        </div>
        <!-- 集市 -->
         <div class="jishi">
            <img src="../../assets/images/nongchang/jishione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/jishi.png" alt="" srcset="" @click="jishihandle">
        </div>
        <!-- 商店 -->
        <div class="shangdian">
            <img src="../../assets/images/nongchang/shangdianone.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/shangdian.png" alt="" srcset="" @click="shangdianhandle">
        </div>
        <!-- 种植 -->
        <div class="zhongzhi">
            <img src="../../assets/images/nongchang/zhongzhione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/zhongzhi.png" alt="" srcset="" @click="kaifazhong">
            <img src="../../assets/images/nongchang/laotou.png" alt="" srcset="">
        </div>
        <!-- 渔场 -->
        <div class="yuchang">
            <img src="../../assets/images/nongchang/yuchangone.png" alt="" srcset="" @click="kaifazhong">

        </div>
        <!-- 加工厂 -->
        <div class="jiagongchang">
            <img src="../../assets/images/nongchang/jiagongchang.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/jiagongchangone.png" alt="" srcset="" @click="kaifazhong">
        </div>

        <!-- 设置 -->
        <div class="shezhi animat" v-if="shezhikuang">
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
        <div class="shangdiankuang animat" v-if="shangdiankuang">
            
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
                                    <div>小鸡：{{item.price}}</div>
                                </div>
                                <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="xiaojigoumai(item.id)">
                            </div>
                            <div class="sditem flex ali_center" v-else>
                                <img :src="item.img" alt="" srcset="">
                                <div class="sdtext flex flex_col">
                                    <div>{{item.title}}</div>
                                    <div>时间：{{item.speed}}</div>
                                    <div>小鸡：{{item.money}}</div>
                                </div>
                                <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" >
                            </div>
                          
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-show="status == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propdog"
                    >
                        <div
                             class="sditem flex ali_center"
                            v-for="(item,index) in list" :key="index"
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>防盗：{{item.steal}}%</div>
                                <div>小鸡：{{item.price}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                          
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
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>收益：{{item.profit}}%</div>
                                <div>小鸡：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                          
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
                            >
                            
                            <img :src="item.img" alt="" srcset="">
                            <div class="sdtext flex flex_col">
                                <div>{{item.title}}</div>
                                <div>次数：{{item.count}}</div>
                                <div>收获：{{item.gift}}%</div>
                                <div>小鸡：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                          
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
                                <div>小鸡：{{item.money}}</div>
                            </div>
                            <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="">
                          
                        </div>
                    </van-list>
                </div>
                
            </div>
        </div>
        <!-- 集市 -->
        <div class="jishikuang animat" v-if="jishikuang">
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
                                    <div>积分：{{item.unit}}</div>
                                </div>
                                <img src="../../assets/images/nongchang/shangdian/goumai.png" alt="" @click="goumaihandle(item)">
                            </div>
                        </div>
                        
                        
                    </van-list>
                </div>
                
                <div class="sdlist" v-if="statusjishi == 1">
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
                                    <div>积分：{{item.unit}}</div>
                                    <div>出售中</div>
                                </div>
                                <img src="../../assets/images/nongchang/jishi/chehui.png" alt="">
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
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">购买人：{{item.nick_name}}</span>
                                    <span>数量：{{item.num}}</span>
                                </div>
                                <div class="flex flex_between">
                                    <span v-if="item.status == 2" style="width: 30vw;overflow: hidden;margin-right:5vw;">手续费：{{item.fee}}</span>
                                    <span>积分：{{item.unit}}</span>
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
        <div class="cangkukuang animat" v-if="cangkukuang">
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
        <div class="gerenxinxi animat" v-if="gerenxinxikuang">
            <div class="kuang">
                <div class="content  ">
                    <img :src="avatar" alt="">
                    <div>昵称：{{nick_name}}</div>
                    <div>ID：{{user_id}}</div>
                    <div>邀请码：{{invite_code}}</div>
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
                    <img :src="hao ? hao1 : hao2" alt="" srcset="" @click="tabhaoyou(0)">
                    <img :src="guangchang ? guangchang1 : guangchang2" alt="" srcset="" @click="tabhaoyou(1)">
                    
                </div>
                <div class="sdlist" v-if="statushao == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="fanslists"
                    >
                        <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex ali_center" >
                                <div>{{item.user_id}}</div>
                                <div class="flex ali_center">
                                    <img :src="item.avatar" alt="">
                                    <span style="margin-left:2vw;">{{item.nick_name}}</span>
                                </div>
                                <div class="flex ali_center"><img src="../../assets/images/nongchang/haoyou/tou.png" alt=""></div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                    </van-list>
                </div>
                <div class="sdlist" v-if="statushao == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="fansalllists"
                    >
                        <div class="sditem flex ali_center" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex ali_center" >
                                <div>{{item.user_id}}</div>
                                <div class="flex ali_center">
                                    <img :src="item.avatar" alt="">
                                    <span style="margin-left:2vw;">{{item.nick_name}}</span>
                                </div>
                                <div class="flex ali_center"><img src="../../assets/images/nongchang/haoyou/tou.png" alt=""></div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                    </van-list>
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
                    <div>小鸡单价：{{goumaidingdan.unit}}积分</div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>购买数量：</span>
                        <input type="text" placeholder="购买数量" v-model="num" @blur="jisuantotal(goumaidingdan.unit)">
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>支付积分：</span>
                        <input type="text" placeholder="支付积分" v-model="total">
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
                        <span>收获积分：</span>
                        <input type="text" placeholder="收获积分" v-model="shouhuojifen" disabled>
                    </div>
                    <!-- <div>售卖数量：{{goumaidingdan.sp_num}}</div>
                    <div>小鸡单价：{{goumaidingdan.unit}}积分</div>
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
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;总积分：</span>
                        <input type="text"  placeholder="收获积分" v-model="zongjifen" disabled>
                    </div>
                    <!-- <div>售卖数量：{{goumaidingdan.sp_num}}</div>
                    <div>小鸡单价：{{goumaidingdan.unit}}积分</div>
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
        <!-- 集市---支付密码 -->
        <div class="zhifukuang animat" v-if="zhifukuang">
            <div class="kuang">
                <div class="content  ">
                    
                    <div>请输入支付密码</div>
                    <!-- 密码输入框 -->
                    <van-password-input
                        :value="value"
                        :length="6"
                        :focused="showKeyboard"
                        @focus="showKeyboard = true"
                    />
                    
                   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
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
                <div class="sdlist">
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
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:鸡蛋</span>
                                    <span>鸡舍：1号</span>
                                </div>
                                <div class="flex flex_between">
                                    <span v-if="item.status == 2" style="width: 30vw;overflow: hidden;margin-right:5vw;">订单：2号</span>
                                    <span>数量：300</span>
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
                <div class="sdlist">
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
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:鸡蛋</span>
                                    <span>鸡舍：1号</span>
                                </div>
                                <div class="flex flex_between">
                                    <span v-if="item.status == 2" style="width: 30vw;overflow: hidden;margin-right:5vw;">订单：2号</span>
                                    <span>数量：300</span>
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
            total:"",   //支付积分 - 集市 - 我的购买
            zhifukuang:false,
            value: '', //支付密码 数字键盘
            showKeyboard: false, //数字键盘
            jishoukuang:false,
            unit:"", //小鸡单价
            jishounum:"",//寄售数量
            shouhuojifen:"", //收获积分
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
            touqu2:require('@/assets/images/nongchang/jidanmingxi/touqu.png'),
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
          
        }
    },
    mounted(){
        this.getData();
        // this.goodslists();
        this.getshouxufei();
    },
    computed:{
        //收获积分
        // shouhuojifen(){
        //     if(!this.jishounum || this.jishounum == '') return Toast('请输入寄售数量');
        //     if(!this.unit || this.unit == '') return Toast('请输入小鸡单价');
            
        //     return this.jishounum * this.unit * (1 - this.shouxufei);
        // }
        // 总积分
        zongjifen(){
            return this.xiaojiprice * this.goumaishuliang
        },
    },
    methods:{
        xiaoji(){
           this.xiaojikuang = true
            
        },
        async propxiaoji(){
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
        //小鸡明细
        tabxiaoji(){
            this.page = 1;
            this.list = [];
            this.finished = false;
            this.statusxiaoji = index
            if(index == 0){
                this.jishi = !this.jishi
                this.shangdian = false
                this.fuhua = false

            }else if(index == 1){
                this.jishi = false
                this.shangdian = !this.shangdian
                this.fuhua = false  
            }else if(index == 2){
                this.jishi = false
                this.shangdian = false
                this.fuhua = !this.fuhua
              
            }
        },
        jidan(){
            // this.shouhuo = true
            this.jidangkuang = true
            
        },
        async propjidan(){
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
        // 鸡蛋明细
        tabjidan(index){
            this.page = 1;
            this.list = [];
            this.finished = false;
            this.statusjidan = index
            if(index == 0){
                this.shouhuo = !this.shouhuo
                this.touqu = false
                this.dasao = false

            }else if(index == 1){
                this.shouhuo = false
                this.touqu = !this.touqu
                this.dasao = false   
            }else if(index == 2){
                this.shouhuo = false
                this.touqu = false
                this.dasao = !this.dasao
              
            }
        },
        // 去养殖页
        yangzhi(){
            this.$router.push({
                name: 'yangzhi'
            })
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
            this.shouxufei = res.trade.trade_fee
        },
        // 计算收获积分
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
            }else if(this.xiaojiID){ //商店 --- 购买小鸡 ID
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
            this.goumaikuang = true;
            this.goumaidingdan = item

        },
        tabjishi(index){
            this.page = 1;
            this.list = [];
            this.finished = false;
            this.statusjishi = index
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
            // this.tabhaoyou(this.statushao)
        },
        tabhaoyou(index){
            this.page = 1;
            this.list = [];
            this.finished = false;
            if(index == 0){
                this.hao = true
                this.guangchang = false
                this.statushao = index
                // this.fanslists();
            }else if(index == 1){
                this.hao = false
                this.guangchang = true
                this.statushao = index
                // this.fansalllists();    
            }
        },
        async fanslists(){
            let res = await $ajax('fanslists', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.fans)
            // this.listtotal = res.listtotal
            this.list.push(...res.fans)
            // // 加载状态结束
            this.loading = false
            if (res.fans.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async fansalllists(){
            let res = await $ajax('fansalllists', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.fans)
            // this.listtotal = res.listtotal
            this.list.push(...res.fans)
            // // 加载状态结束
            this.loading = false
            if (res.fans.length === 0) {
                this.finished = true //加载完成
            } 
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
            this.page = 1;
            this.list = [];
            this.finished = false;
            if(index == 0){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = !this.jisiliao
                this.zhong = false
                this.you =false
                this.status = index
                // this.goodslists();
                // this.propfeed();
            }else if(index == 1){
                this.zuo = false
                this.shouhuquan = !this.shouhuquan
                this.jisiliao = false
                this.zhong = false
                this.you = false    
                this.status = index  
                // this.propdog();    
            }else if(index == 2){
                this.zuo = !this.zuo;
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you = false
                this.status = index
                // this.propfence();
            }else if(index == 3){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = !this.zhong
                this.you = false
                this.status = index
            }else if(index == 4){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you = !this.you 
                this.status = index
                // this.proppack()
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
           this.tishikuang = false;
           this.goumaikuang = false;
           this.zhifukuang = false;
           this.jishoukuang = false;
           this.shangdiangoumaikuang = false;
           this.jidangkuang = false;
           this.xiaojikuang = false;
        },
        cangku(){
            this.cangkukuang = true;
        },
        haoyou(){
            this.haoyoukuang = true;
        },
        shangdianhandle(){
            this.shangdiankuang = true
        },
        jishihandle(){
            this.jishikuang = true;
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
<style lang="less">
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
                    margin-top: 8%;
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
                    height: 92vw;
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
                                font-size: 10px;
                                white-space: nowrap;
                                margin-right: 5vw;
                                // height: 4vw;
                                // line-height: 4vw;
                                img{
                                    width: 6vw;
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
        .zhifukuang{
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
    // .van-switch--on {
    //     background: #EDC782!important;

    // }
.animat{
    position:relative;
    animation:mymove 3s normal;
    animation-direction:normal;/*轮流反向播放动画。*/
    animation-timing-function: ease-in-out; /*动画的速度曲线*/
    -webkit-animation:mymove 3s normal; /*Safari and Chrome*/
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
</style>