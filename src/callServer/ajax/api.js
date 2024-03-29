/**
 * 后端 请求, api 的 封装
 */

// let common = '/app/index.php?i=1&c=entry&m=ewei_shopv2&' //公共字段
let common = '/farm/'  //公共字段

export default {
    uploader: `${common}do=mobile&r=util.uploader`, //上傳圖片
    // sendVerifycode: `${common}do=mobile&r=account.verifycode`, // 發送驗證碼
    // login: `${common}do=mobile&r=account.login`, //登录
    // register: `${common}do=mobile&r=account.register`, //註冊
    // forget: `${common}do=mobile&r=account.forget`, // 忘記密碼




    center: `${common}do=mobile&r=points.center`, // 我的
    kuang: `${common}do=mobile&r=kuang`, //首页
    userSet: `${common}do=mobile&r=user.userSet`, //编辑会员资料
    logout: `${common}do=mobile&r=user.logout`,  //退出登录
    userInfo: `${common}do=mobile&r=user.userInfo`, //获取用户资料
    applylevel: `${common}do=mobile&r=user.applylevel`, //申请代理
    ldentity: `${common}do=mobile&r=user.ldentity`, //身份认证
    goods: `${common}do=mobile&r=kuang.goods`, //商品展示
    goodsdetail: `${common}do=mobile&r=kuang.goods.detail`, //商品展示
    goodstotals: `${common}do=mobile&r=kuang.goods.totals`, //选择商品数量-计算总价
    goodscategory: `${common}do=mobile&r=kuang.goods.category`, //商品展示
    kuangorder: `${common}do=mobile&r=kuang.order`, //订单展示
    useruserInfopwd2: `${common}do=mobile&r=user.userInfo.pwd2`, //验证交易密码
    kuangorderpay: `${common}do=mobile&r=kuang.order.pay`,  //确认支付
    kuangorderorders: `${common}do=mobile&r=kuang.order.orders`, // 订单记录
    userInfowallet: `${common}do=mobile&r=user.userInfo`, //获取用户钱包
    userrecharge: `${common}do=mobile&r=user.recharge`, //充值渲染
    rechargegetCre: `${common}do=mobile&r=user.recharge.getCre`, //(cny)确认支付订单
    userldentitybanklist: `${common}do=mobile&r=user.ldentity.banklist`, //获取身份证信息
    userapplylevelinfo: `${common}do=mobile&r=user.applylevel.info`, //代理数据
    userpaymentpaylist: `${common}do=mobile&r=user.payment.paylist`, //获取收款信息
    userpayment: `${common}do=mobile&r=user.payment`, //收/付款设置
    useryqCode: `${common}do=mobile&r=user.yqCode`, //获取邀请码
    useryqCodeuserLog: `${common}do=mobile&r=user.yqCode.userLog`, //邀请记录
    userrechargepays: `${common}do=mobile&r=user.recharge.pays`, //申请充值/提现
    userrechargeimages: `${common}do=mobile&r=user.recharge.images`, //获取图片
    userrechargedontPay: `${common}do=mobile&r=user.recharge.dontPay`, //取消订单
    userapplylevelind: `${common}do=mobile&r=user.applylevel.ind`, //代理中心
    userapplylevellogs: `${common}do=mobile&r=user.applylevel.logs`, //代理记录
    userrechargelogs: `${common}do=mobile&r=user.recharge.logs`, //充值记录
    userrechargelogCheck: `${common}do=mobile&r=user.recharge.logCheck`, //充值验证
    // currency: `https://api.coinbase.com/v2/exchange-rates?currency=FIL`, //fil
    userexchange: `${common}do=mobile&r=user.exchange`, //兑换账户
    usercurrenbtc: `${common}do=mobile&r=user.curren.btc`, //btc/eth实时
    usercurrenfil: `${common}do=mobile&r=user.curren.fil`, //fil实时
    usercurrenxch: `${common}do=mobile&r=user.curren.xch`, //xch算力
    usercurrenhulv: `${common}do=mobile&r=user.curren.hulv`, //汇率数据
    userfeedbacklook: `${common}do=mobile&r=user.feedback.look`, //关于我们
    userfeedback: `${common}do=mobile&r=user.feedback`, //意见反馈
    kuangnoticeText: `${common}do=mobile&r=kuang.noticeText`, //公告内容
    usercurrenhulv: `${common}do=mobile&r=user.curren.hulv`, //汇率数据
    kuangorderdontPay: `${common}do=mobile&r=kuang.order.dontPay`, //取消订单
    kuangorderfeesOrder: `${common}do=mobile&r=kuang.order.feesOrder`, //续交电费展示
    kuangordercontiendLog: `${common}do=mobile&r=kuang.order.contiendLog`, //缴费记录
    kuangordercontiendPay: `${common}do=mobile&r=kuang.order.contiendPay`, //确认支付
    kuangorderbiOrder: `${common}do=mobile&r=kuang.order.biOrder`, //收益明细
    userlog: `${common}do=mobile&r=user.log`, //财务记录
    kuangfooterText: `${common}do=mobile&r=kuang.footerText`, //互动内容
    userlogfil: `${common}do=mobile&r=user.log.fil`, //fil释放记录
    accountverifycode: `${common}do=mobile&r=account.verifycode`, //fil释放记录
    userchangepwd: `${common}do=mobile&r=user.changepwd`, //重置登录/交易密码
    userrechargeinfo: `${common}do=mobile&r=user.recharge.info`, //虚拟币记录详情
    userhuzhuan: `${common}do=mobile&r=user.huzhuan`, //互转
    
    


    

    

    recharge: `${common}do=mobile&r=points.recharge`, //充幣
    rechargeList: `${common}do=mobile&r=points.rechargeList`, //充幣記錄
    rechargeDetail: `${common}do=mobile&r=points.rechargedetail`, //充幣詳情
    withdrawals: `${common}do=mobile&r=points.withdrawals`, // 提幣
    cashAddress: `${common}do=mobile&r=points.cashAddress`, // 提幣地址
    getAddressAtChange: `${common}do=mobile&r=points.pushAddress`, // 進入 修改提幣地址 頁面, 獲取初始數據
    changeAddress: `${common}do=mobile&r=points.pushAddress`, // 提交修改/添加 地址
    delAddress: `${common}do=mobile&r=points.pushAddress.delete`, // 提交修改/添加 地址
    toWithdrawals: `${common}do=mobile&r=points.withdrawals`, // 提幣提交
    withdrawalsList: `${common}do=mobile&r=points.withdrawalsList`, // 提幣記錄
    withdrawalsDetail: `${common}do=mobile&r=points.withdrawalsList.detail`, // 提幣記錄詳情
    transferPage: `${common}&do=mobile&r=points.transfer.into`, // 進入轉賬頁面, 獲取數據
    toTransfer: `${common}do=mobile&r=points.transfer`, // 進行轉賬
    transferOut: `${common}do=mobile&r=points.transferList`, // 轉出記錄
    transferIn: `${common}do=mobile&r=points.transferList.enter`, // 轉入記錄
    getOrders: `${common}do=mobile&r=points.getOrders`, // 接單頁面
    getPointsList: `${common}do=mobile&r=points.getOrders.getPointsList`, // 接單頁面 点击更多
    sdrclog: `${common}do=mobile&r=points.sd_rclog`, // 会员动态
    exchangeNow: `${common}do=mobile&r=points.exchange`, // 立即兌換頁面
    exchangeSubmit: `${common}do=mobile&r=points.exchange.submission`, // 提交兌換
    startGetOrders: `${common}do=mobile&r=points.receipt.start`, // 開始接單
    getOrdersList: `${common}do=mobile&r=points.getOrders.Record`, // 接單記錄
    getOrdersDetail: `${common}do=mobile&r=points.getOrders.details`, // 接單詳情
    exchangeList: `${common}do=mobile&r=points.exchangeList`, // 兌換記錄
    capital: `${common}do=mobile&r=points.capital`, // 資產頁面
    pyList: `${common}do=mobile&r=points.pyList`, // 交易記錄
    incomeList: `${common}do=mobile&r=points.incomeList`, // 收益記錄
    incomeListTeam: `${common}&do=mobile&r=points.incomeList.team`, // 團隊收益記錄
    streamDetail: `${common}do=mobile&r=points.streamDetail`, // 流水明細
    toCertificate: `${common}do=mobile&r=points.toCertificate.submission`, // 實名認證
    certification: `${common}do=mobile&r=points.toCertificate`, // 實名資料
    certificationDetail: `${common}do=mobile&r=points.toCertificate.details`, // 已填寫未通過的實名資料
    invite: `${common}do=mobile&r=points.invite`, // 邀請好友(二維碼)
    team: `${common}do=mobile&r=points.team`, // 我的團隊
    teamDirect: `${common}&do=mobile&r=points.team.straight`, // 我的團隊
    changePwdOfLogin: `${common}do=mobile&r=points.changepwd`, // 修改登錄密碼
    changePwdOfPay: `${common}do=mobile&r=points.changepaypwd`, // 修改資金密碼
    announcement: `${common}do=mobile&r=points.announcement`, // 動態分享(公告)
    announcementDetail: `${common}do=mobile&r=points.announcement.detail`, // 動態分享(公告)詳情
    feedback: `${common}do=mobile&r=points.feedback`, // 反饋類型的獲取
    sendFeedback: `${common}do=mobile&r=points.feedback.post`, // 提交反饋
    applyFeedback: `${common}do=mobile&r=points.recharge.apply`, // 提交凭证
    feedbackList: `${common}do=mobile&r=points.feedback.details`, // 反饋列表
    get_qq: `${common}do=mobile&r=points.feedback.get_qq`, // 获取QQ
    sdcustomerService: `${common}do=mobile&r=points.sd_customer_service`, //联系我们

    
    config:`${common}config`, //系统设定
    register:`${common}user/register`, //注册
    login:`${common}user/login`, //登录
    sendVerifycode: `${common}index/send_sms`, // 發送驗證碼
    forget: `${common}user/forget_login`, // 忘記密碼
    userinfo: `${common}user/info`, // 用户信息
    goodslists: `${common}goods/lists`, //小鸡
    propfence: `${common}prop/fence`, //围栏 
    propdog: `${common}prop/dog`, //守护犬 
    propfeed: `${common}prop/feed`, //饲料 
    propbroom: `${common}prop/broom`, //扫帚 
    proppack: `${common}prop/pack`, //加速包
    goodsbuy: `${common}goods/buy`, //小鸡购买
    fanslists: `${common}fans/lists`, //好友列表
    fansalllists: `${common}fans/all_lists`, //广场列表
    tradelists: `${common}trade/lists`, //我要购买
    trade_buylists: `${common}trade_buy/lists`, //出售
    trademine: `${common}trade/mine`, //我的挂卖
    tradeorder: `${common}trade/order`, //交易记录
    tradebuy: `${common}trade/buy`, //发起交易
    trade_buybuy: `${common}trade_buy/buy`, //发起出售
    trade_buysell: `${common}trade_buy/sell`, //发起购买
    tradesell: `${common}trade/sell`, //发布挂买订单
    tradeclear: `${common}trade/clear`, //取消挂买订单 
    housebuild: `${common}house/build`, //开鸡舍
    houseadd_chick: `${common}house/add_chick`, //开鸡舍
    houseindex: `${common}house/index`, //养殖场首页
    housereap: `${common}house/reap`, //收获鸡蛋
    houseuse_feed: `${common}house/use_feed`, //使用饲料
    houseuse_dog: `${common}house/use_dog`, //使用守护犬
    houseuse_fence: `${common}house/use_fence`, //使用围栏
    housesimple: `${common}house/simple`, //鸡舍详情
    transfersubmit: `${common}transfer/submit`, //转账
    transfersubmit_credit: `${common}transfer/submit_credit`, //小鸡互转
    houselog_list: `${common}house/log_list`, //增养记录列表
    housebuy_broom: `${common}house/buy_broom`, //购买扫帚
    houseuse_broom: `${common}house/use_broom`, //打扫
    housebroom_list: `${common}house/broom_list`, //扫帚列表
    housesteal: `${common}house/steal`, //偷盗
    balancerecharge: `${common}balance/recharge`, //充值界面
    balancewithdraw: `${common}balance/withdraw`, //提现界面
    logbalance_integral: `${common}log/balance_integral`, //充值提现
    logtransfer_integral: `${common}log/transfer_integral`, //转账
    logtrade_integral: `${common}log/trade_integral`, //交易
    logtrade_chick: `${common}log/trade_chick`, //小鸡交易
    logshop_chick: `${common}log/shop_chick`, //商店购买
    loghatch_chick: `${common}log/hatch_chick`, //孵化
    logget_egg: `${common}log/get_egg`, //收获
    logsteal_egg: `${common}log/steal_egg`, //偷盗获得鸡蛋记录
    logclean_egg: `${common}log/clean_egg`, //打扫获得鸡蛋 
    hatchindex: `${common}hatch/index`, //孵化首页
    hatchcreate: `${common}hatch/create`, //孵化
    hatchuse_pack: `${common}hatch/use_pack`, //使用加速包
    useredit: `${common}user/edit`, //换手机号
    userforget_pay: `${common}user/forget_pay`, //重置支付密码
    userposter: `${common}user/poster`, //分享页面
    balancerecharge_submit: `${common}balance/recharge_submit`, //充值提交信息
    balancerecharge_submit_new: `${common}balance/recharge_submit_new`, //充值提交信息new
    useredit_nick_name: `${common}user/edit_nick_name`, //修改名称
    so_sendbind: `${common}so_send/bind`, //soeket
    logtransfer_credit: `${common}log/transfer_credit`, //小鸡互转
    noticeindex: `${common}notice/index`, //公告列表
    noticeinfo: `${common}notice/info`, //公告详情
    indexpk: `${common}index/pk`, //排行榜
    feedbackcategory: `${common}feedback/category`, //反馈类型
    feedbacksubmit: `${common}feedback/submit`, //提交反馈
    
    
    
    
    
    
    
    
    
    
    
    
    

}