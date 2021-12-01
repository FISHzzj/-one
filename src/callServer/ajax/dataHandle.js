// status 0 等于 0 時, 統一進行處理
function mistake (data) {
    // 如果返回的数据, 不是 json
    if ( typeof data !== 'object') {
        // let datajson = JSON.stringify(data)
        // Dialog.alert({
        //     title: '服務器錯誤',
        //     message: datajson
        // })
        return true //發生錯誤
    }
    if (parseInt(data.code) !== 1) {
        if(parseInt(data.code) == 12){
            localStorage.removeItem('openid')
            localStorage.removeItem('mobile')
            location.reload();
        }
        Dialog.alert({
            message: data.msg
        })
        // if(data.msg == '请先登录'){
        //     localStorage.removeItem('openid')
        //     localStorage.removeItem('mobile')
        // }
        return true //發生錯誤
    }
    return false //未發生錯誤
}

export default {
    uploader (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return data.result.url
    },
    login (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            openid: data.token,
            // ip: data.newclientip
        }
    },
    sendVerifycode (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    register (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.message
        }
    },
    forget (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    kuang (data){
        if ( mistake(data) ) return false
        let { banner, bannerTxt, btc, eth, fil, footer, xch } = data.result
        let {btc_url, eth_url, xch_url} = data.result.hrefUrl
        let fil_url = data.result.hrefUrl.fil
        return {
            banner,
            bannerTxt,
            btc,
            eth,
            fil,
            xch,
            footer,
            btc_url,
            eth_url,
            fil_url,
            xch_url

        }
    },
    userSet(data) {
        if ( mistake(data) ) return false
        return {
            msg: data.result.result,
            avatar: data.result.avatar
        }
    },
    logout(data) {
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    userInfo(data) {
        if ( mistake(data) ) return false
        let {avatar, nickname, mobile, sf_type, credit2} = data.result.info
        return {
            avatar,
            nickname,
            mobile,
            sf_type,
            credit2,
         
        }
    },
    userInfowallet(data){
        if ( mistake(data) ) return false
        let {usdt, cny, btc, eth, fil, xch, ccn, sysmoney, huilv, fil_frozen, fil_sys} = data.result.wallet
        return {
            usdt,
            cny,
            btc,
            eth,
            fil,
            xch,
            ccn,
            sysmoney,
            huilv,
            fil_frozen,
            fil_sys,
        }
    },
    applylevel(data) {
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    ldentity(data){
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    goods(data) {
        if ( mistake(data) ) return false
        // let {list, total, pagesize} = data.result

        let {list, thumbs} = data.result
        let lists = []
        list.forEach( item => {
            let {id, title, thumb, marketprice, fees, type, total, power, today_bi, usdt, unit, cny, cunit} = item
            lists.push({
                id,
                title,
                thumb,
                marketprice,
                fees,
                type,
                total,
                power,
                today_bi,
                usdt,
                unit,
                cny,
                cunit,
            })
            
        })
        return {
            lists,
            thumbs
        }
    },
    goodsdetail(data) {
        if ( mistake(data) ) return false
        let {goods} = data.result

        return {
            goods
        }
    },
    goodstotals(data) {
        if ( mistake(data) ) return false
        let {totalNum, money} = data.result
        return {
            totalNum,
            money
        }
    },
    goodscategory(data) {
        if ( mistake(data) ) return false
        let {category} = data.result
        return {
            category
        }
    },
    kuangorder(data) {
        if ( mistake(data) ) return false
        let {order, paystatus} = data.result
        return {
            order,
            paystatus,
        }
    },
    useruserInfopwd2(data) {
        if ( mistake(data) ) return false
        let  status = data.status
        if(status !=1){
            let msg = res.result.msg
            return {
                status,
                msg
            }
        }else{
            let msg = "交易密码正确！"
            return {
                status,
                msg
            }
        }
        
    },
    kuangorderpay(data) {
        if ( mistake(data) ) return false
        let msg = data.result.message
        return {
            msg
        }
    },
    kuangorderorders(data) {
        if ( mistake(data) ) return false
        let {list, listtotal} = data.result
        let lists = []
        list.forEach( item => {
            let {ordersn, goodsName, createtime, endtime, status, realprice, total, goodsid, pid, thumb, id} = item
            lists.push({
                ordersn,
                goodsName,
                createtime,
                endtime,
                status,
                realprice,
                total,
                goodsid,
                pid,
                thumb,
                id,
            })
            
        })
        return {
            lists,
            listtotal
        }
    },
    userrecharge(data) {
        if ( mistake(data) ) return false
        let {info} = data.result
        return {
            money: info.money,
            wallet: info.wallet,
            code: info.code,
            id: info.id
        }
    },
    rechargegetCre(data) {
        if ( mistake(data) ) return false
        let {log, sysWallet} = data.result
        return {
            log,
            sysWallet
        }
    },
    userldentitybanklist(data) {
        if ( mistake(data) ) return false
        let {list} = data.result
        return {
            text: list.text,
            realname: list.realname,
            card: list.card
        }
    },
    userapplylevelinfo(data) {
        if ( mistake(data) ) return false
        let {levellogo, levelType} = data.result
        return{
            levellogo,
            levelType
        }
    },
    userpaymentpaylist(data){
        if ( mistake(data) ) return false
        let {list, btc, eth, fil, usdt, xch, ccn} = data.result
        return{
            list,
            btc,
            eth,
            fil,
            usdt,
            xch,
            ccn

        }
    },
    userpayment(data){
        if ( mistake(data) ) return false
        let msg = data.result.message
        return {
            msg
        }
    },
    useryqCode(data){
        if ( mistake(data) ) return false
        let {img, yqCode} = data.result
        return {
            img,
            yqCode
        }
    },
    useryqCodeuserLog(data){
        if ( mistake(data) ) return false
        let {today_user, total, pagesize, list} = data.result
        return {
            today_user,
            total,
            pagesize,
            list
        }
    },
    userrechargepays(data){
        if ( mistake(data) ) return false
        let msg = data.result.message
        return {
            msg
        }
    },
    userrechargeimages(data){
        if ( mistake(data) ) return false
        let {img} = data.result
        return {
            img
        }
    },
    userrechargedontPay(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },
    userapplylevelind(data) {
        if ( mistake(data) ) return false
        let {team, levelname, btc, eth, fil, teamInfo, avatar, nickname} = data.result.list
        return{
            team, 
            levelname,
            btc,
            eth,
            fil,
            teamInfo, 
            avatar,
            nickname,
        }
    },
    userapplylevellogs(data) {
        if ( mistake(data) ) return false
        let {list} = data.result
        return{
            list
        }
    },
    userrechargelogs(data) {
        if ( mistake(data) ) return false
        let {list} = data.result
        return{
            list
        }
    },
    userrechargelogCheck(data) {
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },
    currency(data) {
        if ( mistake(data) ) return false
        let {message} = data.result
        return message
    },
    userexchange(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }

    },
    usercurrenbtc(data){
        if ( mistake(data) ) return false
        let {btc, eth, xch} = data.result.info
        return{
            btc,
            eth,
            xch
        }
    },
    usercurrenfil(data){
        if ( mistake(data) ) return false
        let {blockRewardIn24h, currentPledgeCollateral, gasIn32GB, gasIn64GB} = data.result.info
        return{
            blockRewardIn24h,
            currentPledgeCollateral,
            gasIn32GB,
            gasIn64GB
        }
    },
    usercurrenxch(data){
        if ( mistake(data) ) return false
        let {xch, xch_count} = data.result.info
        return{
            xch,
            xch_count
        }
    },
    usercurrenhulv(data) {
        if ( mistake(data) ) return false
        let {result} = data.result
        return{
            result
        }
    },
    userfeedbacklook(data) {
        if ( mistake(data) ) return false
        let {custMobile, wechat_name, content, wechat_img} = data.result.info
        return{
            custMobile,
            wechat_name,
            content,
            wechat_img
        }
    },
    userfeedback(data) {
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }

    },
    kuangnoticeText(data) {
        if ( mistake(data) ) return false
        let {text} = data.result
        return {
            text
        }
    },
    kuangorderdontPay(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },
    kuangorderfeesOrder(data){
        if ( mistake(data) ) return false
        let {info} = data.result
        let {createtime, endtime, ordersn, goodsid, title, thumb, shopdays, total} = info
        return {
            createtime, 
            endtime,
            ordersn,
            goodsid,
            title,
            thumb,
            shopdays,
            total

        }
    },
    kuangordercontiendLog(data){
        if ( mistake(data) ) return false
        let {list} = data.result
        return{
            list
        }
    },
    kuangordercontiendPay(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },
    kuangorderbiOrder(data){
        if ( mistake(data) ) return false
        let {list, yueMoney, sysmoney} = data.result
        return{
            list,
            yueMoney,
            sysmoney,
        }
    },
    userlog(data){
        if ( mistake(data) ) return false
        let {list, yueMoney, sysmoney} = data.result
        return{
            list,
            yueMoney,
            sysmoney,
        }
    },
    kuangfooterText(data){
        if ( mistake(data) ) return false
        let {thumb, title, text} = data.result
        return{
            thumb,
            title,
            text,
        }
    },
    userlogfil(data){
        if ( mistake(data) ) return false
        let {list} = data.result
        return{
            list
        }
    },
    accountverifycode(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },
    userchangepwd(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },
    userrechargeinfo(data){
        if ( mistake(data) ) return false
        let {f_code, accountType, money, ordersn, createtime} = data.result
        return{
            f_code, accountType, money, ordersn, createtime
        }
    },
    userhuzhuan(data){
        if ( mistake(data) ) return false
        let {message} = data.result
        return {
            msg: message
        }
    },






    center (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { id, status, regioncode, avatar, level, mobile,jihuo } = data.result
        return {
            id,
            verified: parseInt(status), //-1未实名0审核中1已实名2爲已駁回
            inviteCode: regioncode,
            avatar: avatar,
            mobile,
            jihuo,
            // verified: realname ? true : false,
            level
        }
    },
    recharge (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {ztpayaddress, content, url} = data.result
        return {
            address: ztpayaddress, //充幣地址
            QRImg: url, // 二維碼地址
            notice: content //注意事項
        }
    },
    rechargeList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let arr = []
        data.result.ztpaynotice.forEach( item => {
            let {id, referenceaddress, create_time, money, type,status } = item
            arr.push({
                id,
                money: money > 0 ? `+${money}` : money,
                address: referenceaddress,
                time: create_time,
                needJump: parseInt(type) === 1 ? true : false , // 1 为正常充值, 6为后台充值
                status:status
            })
        })
        return arr
    },
    rechargeDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {create_time, money, referenceaddress, txid } = data.result.ztpaynotice
        return {
            time: create_time,
            amount: money,
            realAmount: money,
            txid,
            address: referenceaddress,
            status: 1
        }
    },
    withdrawals (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, addressid, address, service, min,content} = data.result
        return {
            money: gold,
            address,
            min: parseInt(min),
            formalities: service,
            id: addressid,
            content:content
        }
    },
    cashAddress (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { address } = data.result
        let arr = []
        address.forEach( item => {
            let {id, address, label} = item
            arr.push({
                id,
                address,
                label,
            })
        })
        return arr
    },
    getAddressAtChange (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {address, label, remarks} = data.result
        return {
            address,
            label,
            remarks,
        }
    },
    changeAddress (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    toWithdrawals (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    withdrawalsList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { withdrawals } = data.result
        let arr = []
        withdrawals.forEach( item => {
            let {address, addtime, gold, id} = item
            arr.push({
                address,
                id,
                time: addtime,
                money: gold
            })
        })
        return arr
    },
    delAddress (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    withdrawalsDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {address, ordersn, gold, actual_gold, addtime, status } = data.result.withdrawals
        return {
            address,
            ordersn,
            amount: gold,
            realAmount: actual_gold,
            time: addtime,
            status: parseInt(status), // 0:未審核, 1:已通過
        }
    },
    transferPage (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {min, service, content} = data.result.transfer_set
        // console.log(service)
        return {
            // tips: content
            min,
            service: `${parseFloat(service).toFixed(2)}`
        }
    },
    toTransfer (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    transferOut (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {transfer} = data.result
        let arr = []
        transfer.forEach( item => {
            let {addtime, ruid, gold, transferno} = item
            // 將後端時間, 切割成兩塊, 並拼接爲 html 模板
            let timeCut = addtime.split(' ')
            let timeEle = ''
            timeCut.forEach( item => {
                timeEle += `<p style="margin:0;">${item}</p>`
            })
            // 將 id 和 訂單號 拼接爲 新的 html模板
            let userEle = `<p style="margin:5px 0;">${ruid}</p><p style="margin:0;overflow-x:scroll;word-wrap:unset;word-break:keep-all;">訂單號:${transferno}</p>`
            // console.log(timeEle)
            arr.push([
                timeEle,
                userEle,
                gold
            ])
        })
        return arr
    },
    transferIn (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {transfer} = data.result
        let arr = []
        transfer.forEach( item => {
            let {addtime, gold, transferno, uid} = item
            // 將後端時間, 切割成兩塊, 並拼接爲 html 模板
            let timeCut = addtime.split(' ')
            let timeEle = ''
            timeCut.forEach( item => {
                timeEle += `<p style="margin:0;">${item}</p>`
            })
            // 將 id 和 訂單號 拼接爲 新的 html模板
            let userEle = `<p style="margin:5px 0;">${uid}</p><p style="margin:0;overflow-x:scroll;word-wrap:unset;word-break:keep-all;">訂單號:${transferno}</p>`
            // console.log(timeEle)
            arr.push([
                timeEle,
                userEle,
                gold
            ])
        })
        return arr
    },
    getOrders (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, usd, ordersn} = data.result
        // let orders = []
        // receipt_fine.forEach( item => {
        //     let {original_gold, commission, still_gold, addtime} = item
        //     orders.push({
        //         time: addtime,
        //         startMoney: original_gold,
        //         commission,
        //         rebackMoneyCurrent: still_gold
        //     })
        // })
        return {
            // list: orders,
            money: gold,
            usdMoney: usd,
            orderSn: ordersn
        }
    },
    getPointsList (data) {
        if ( mistake(data) ) return false
        let {receipt_fine} = data.result
        let orders = []
        receipt_fine.forEach( item => {
            let {original_gold, commission, still_gold, addtime} = item
            orders.push({
                time: addtime,
                startMoney: original_gold,
                commission,
                rebackMoneyCurrent: still_gold
            })
        })
        return {
            list: orders,
        }
    },
    sdrclog (data) {
        if ( mistake(data) ) return false
        let {list} = data.result
        let orders = []
        list.forEach( item => {
            let {price, nickname, mobile, createtime} = item
            orders.push({
                nickname,
                mobile,
                price,
                createtime
            })
        })
        return {
            rcloglist: orders,
        }
    },
    exchangeNow (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, min, max,content} = data.result
        return {
            money: gold,
            min,
            max,
            content,
        }
    },
    exchangeSubmit (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    startGetOrders (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    getOrdersList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt} = data.result
        let list = []
        receipt.forEach( item => {
            let {id, original_gold, commission, still_gold, water_gold, ordersn} = item
            list.push({
                id,
                orderSn: ordersn,
                incomeTotal: (Number(water_gold) + Number(commission)).toFixed(2),
                streamTotal: `${water_gold} + ${commission}`,
                originMoney: original_gold,
                rebackMoney: still_gold,
            })
        })
        return list
    },
    getOrdersDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt, receipt_fine} = data.result
        let {addtime, still_gold} = receipt
        let list = []
        receipt_fine.forEach( item => {
            let {addtime, commission, original_gold, still_gold} = item
            list.push({
                time: addtime,
                commission,
                originMoney: original_gold,
                rebackMoney: still_gold
            })
        })
        return {
            head: {
                time: addtime,
                rebackMoney: still_gold
            },
            list
        }
    },
    exchangeList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold_total, exchange_list} = data.result
        let list = []
        exchange_list.forEach( item => {
            let {ordersn, addtime, gold} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: gold,
            })
        })
        return {
            total: gold_total,
            list
        }
    },
    capital (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold, frozen, receipt_gold, CNY, round, total_gold} = data.result
        let images = []
        round.forEach( item => {
            let {thumb, url} = item
            images.push({
                img: thumb,
                url
            })
        })
        return {
            money: gold,
            frozen,
            toDay: receipt_gold,
            CNY,
            total: total_gold,
            images,
        }
    },
    pyList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let list = []
        data.result.goldrecord.forEach( item => {
            let {gold, addtime, paytype} = item
            list.push({
                money: Number(gold),
                time: addtime,
                typeName: paytype,
            })
        })
        return list
    },
    incomeList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt_gold, receipt} = data.result
        let list = []
        receipt.forEach( item => {
            let {commission, addtime, ordersn} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: commission,
            })
        })
        return {
            total: receipt_gold,
            list
        }
    },
    incomeListTeam (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {receipt_gold, receipt} = data.result
        let list = []
        receipt.forEach( item => {
            let {sumgold, addtime, ordersn, ruid} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: sumgold,
                id: ruid
            })
        })
        return {
            total: receipt_gold,
            list
        }
    },
    streamDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {gold_total, exchange_list} = data.result
        let list = []
        exchange_list.forEach( item => {
            let {water_gold, addtime, ordersn} = item
            list.push({
                orderSn: ordersn,
                time: addtime,
                money: water_gold,
            })
        })
        return {
            total: gold_total,
            list
        }
    },
    toCertificate (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    certification (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {realname, card} = data.result
        let ID = `${card[0]}****************${card[card.length-1]}`
        return {
            name: realname,
            ID,
        }
    },
    certificationDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { realname, card, just_url, back_url } = data.result.authentication
        return {
            name: realname,
            ID: card,
            frontImg: just_url,
            backImg: back_url
        }
    },
    invite (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return data.result.img
    },
    team (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {level, teamtotal, straight, downi, teami, receipt_gold, team_gold} = data.result
        // let list = []
        // arrdown && arrdown.forEach( item => {
        //     let {realname, mobile, level, meet} = item
        //     list.push({
        //         name: realname || '未實名',
        //         mobile: `${mobile[0]}${mobile[1]}${mobile[2]}************${mobile[mobile.length-1]}`,
        //         level: `V${level}`,
        //         status: parseInt(meet) ? '已接單' : '休息中'
        //     })
        // })
        return {
            level: `v${level}`,
            personalIncome: receipt_gold,
            teamIncome: team_gold,
            direct: straight,
            efficaciousDirect: downi,
            teamPersons: teamtotal,
            efficaciousTeam: teami,
            // list,
        }
    },
    teamDirect (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let { arrdown } = data.result
        let list = []
        arrdown.forEach( item => {
            let {realname, mobile, level, meet} = item
            list.push({
                name: realname || '未實名',
                mobile: `${mobile[0]}${mobile[1]}${mobile[2]}****${mobile[mobile.length-4]}${mobile[mobile.length-3]}${mobile[mobile.length-2]}${mobile[mobile.length-1]}`,
                level: `V${level}`,
                status: parseInt(meet) ? '已接單' : '休息中'
            })
        })
        return list
    },
    changePwdOfLogin (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    changePwdOfPay (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    announcement (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return data.result.notice_list
    },
    announcementDetail (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            content: data.result.notice.detail
        }
    },
    feedback (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {feedback} = data.result
        let actions = []
        feedback.forEach( item => {
            let {id, title} = item
            actions.push({
                name: title,
                id
            })
        })
        return actions
    },
    sendFeedback (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    get_qq (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.qq
        }
    },
    applyFeedback (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        return {
            msg: data.result.message
        }
    },
    feedbackList (data) {
        // console.log(data)
        if ( mistake(data) ) return false
        let {feedback_list} = data.result
        let list = []
        feedback_list.forEach( item => { 
            let {addtime, content, thumb, title} = item
            let images = thumb ? thumb.split(',') : []
            list.push({
                type: title,
                time: addtime,
                content,
                images
            })
        })
        return list
    },
    sdcustomerService (data) {
        if (mistake(data)) return false
        let list = data.result.list

        return list

    },



    //农场
    config(data){
        if ( mistake(data) ) return false
        let { ins, sms, trade, withdraw } = data
        return {
            ins, 
            sms, 
            trade,
            withdraw
        }
    },
    userinfo(data){
        if ( mistake(data) ) return false
        let { user_id, nick_name, avatar, mobile, invite_code, balance } = data.user
        return {
            user_id,
            nick_name,
            avatar,
            mobile,
            invite_code,
            balance
        }
    },
    goodslists(data){
        if ( mistake(data) ) return false
        let {goods} = data

        return {
            goods
        }
    },
    propfence(data){
        if ( mistake(data) ) return false
        let {fence} = data

        return {
            fence
        }
    },
    propdog(data){
        if ( mistake(data) ) return false
        let {dog} = data

        return {
            dog
        }
    },
    propfeed(data){
        if ( mistake(data) ) return false
        let {feed,chick} = data
        let list = feed.concat(chick)
        return {
            list
        }
    },
    propbroom(data){
        if ( mistake(data) ) return false
        let {broom} = data

        return {
            broom
        }
    },
    proppack(data){
        if ( mistake(data) ) return false
        let {pack} = data

        return {
            pack
        }
    },
    goodsbuy(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    fanslists(data){
        if ( mistake(data) ) return false
        let {fans} = data
        return {
            fans
        }
    },
    fansalllists(data){
        if ( mistake(data) ) return false
        let {fans} = data
        return {
            fans
        }
    },
    tradelists(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    trademine(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    tradeorder(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    tradebuy(data){
        if ( mistake(data) ) return false
        return {
            // sn: data.sn,
            msg: data.msg
        }
    },
    tradesell(data){
        if ( mistake(data) ) return false
        return {
            // sn: data.sn,
            msg: data.msg
        }
    },
    tradeclear(data){
        if ( mistake(data) ) return false
        return {
            // sn: data.sn,
            msg: data.msg
        }
    },
    houseindex(data){
        if ( mistake(data) ) return false
        let {house, super_house} = data
        return {
            house,
            super_house
        }
    },
    housebuild(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    houseadd_chick(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    housereap(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    houseuse_feed(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    houseuse_dog(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    houseuse_fence(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    housesimple(data){
        if ( mistake(data) ) return false
        let {house_list} = data
        return {
            house_list
        }
    },
    transfersubmit(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    houselog_list(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }

    },
    housebuy_broom(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    houseuse_broom(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    housebroom_list(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    housesteal(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    balancerecharge(data){
        if ( mistake(data) ) return false
        let {trc_address, trc_qrcode} = data
        return {
            trc_address,
            trc_qrcode
        }
    },
    balancewithdraw(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    logbalance_integral(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logtransfer_integral(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logtrade_integral(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logtrade_chick(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logshop_chick(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    loghatch_chick(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logget_egg(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logsteal_egg(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    logclean_egg(data){
        if ( mistake(data) ) return false
        let {list} = data
        return {
            list
        }
    },
    hatchindex(data){
        if ( mistake(data) ) return false
        return {
            data
        }
    },
    hatchcreate(data){
        if ( mistake(data) ) return false
     
        return {
            msg: data.msg
        }
    },
    hatchuse_pack(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    useredit(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },
    userforget_pay(data){
        if ( mistake(data) ) return false
        return {
            msg: data.msg
        }
    },

}