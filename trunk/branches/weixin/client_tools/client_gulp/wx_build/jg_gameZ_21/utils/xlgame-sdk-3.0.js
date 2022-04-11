let promise = require("./xlgame-jsdk-promise.js");
let util = require("./xlgame-sdk-util.js");
//打包需要把路径换下
// let promise = require("./xlgame-jsdk-promise.js");
// let util = require("./xlgame-sdk-util.js");
var XLGame = this;

//初始化
const init = function (gameId, gameKey) {
  console.log("调用init接口");
  XLGame = this;
  let active = promise.active(XLGame, '300', gameId, gameKey,util.getSonGameId);
  wx.gameid = gameId;
  wx.said = util.getSonGameId;
  wx.partnerid = 300;
  //设置sdk额外功能
  promise.sdkInterface.share = true;
  promise.sdkInterface.subscribe = true;
  promise.sdkInterface.openCustomerService = true;
  promise.sdkInterface.dataPlacement = true;
  promise.sdkInterface.userInfo = false;
  promise.sdkInterface.requestSubscribeMessage = true;
  promise.commonParams.bg_img_version = '1';
  setVideoad(false); // 广告默认关闭 
  setVideoadSkip(false); // 广告跳过默认关闭 
  active.then((ret) => {
    console.log(JSON.stringify(ret));
    if(ret.data.data.title != undefined && ret.data.data.imageUrl != undefined ){
      return {
        title: ret.data.data.title,
        imageUrlId: ret.data.data.imageUrlId,
        imageUrl: ret.data.data.imageUrl
      }
    }
  });
};


//登录
const login = function () {
  console.log("调用登录接口");
  wx.login({
    success: (res) => {
      console.log("wx login:"+JSON.stringify(res));
      let loginParams = {
        code: res.code,
        iv: res.iv,
        encryptedData: res.encryptedData,
      };
      promise.commonParams.bg_img_version = '1';
      let login = promise.login(XLGame,loginParams);
      login.then((ret) => {
        wx.uid = ret.data.data.uid;
        wx.data = ret.data.data;

        // 预留内容监测开关
        wx.msgcheck = ret.data.data.msgcheck;

        if(ret.data.data.levitation != '' && ret.data.data.levitation != undefined && ret.data.data.levitation != null){
          // 悬浮框等级条件
          wx.levitation = ret.data.data.levitation.off;
          wx.levitation_level_start = ret.data.data.levitation.levitation_level_start;
          wx.levitation_level_end = ret.data.data.levitation.levitation_level_end;

          // 悬浮框类型
          wx.levitation_type =  ret.data.data.levitation.type;

          // 实名制开关
          wx.realname_off = ret.data.data.levitation.realname_off;
          // 礼包开关
          wx.gift_off = ret.data.data.levitation.gift_off;
          // vip开关
          wx.vip_off = ret.data.data.levitation.vip_off;

          // 各悬浮球图片
          wx.box_image = ret.data.data.levitation.box_image;
          wx.gift_image = ret.data.data.levitation.gift_image;
          wx.realname_image = ret.data.data.levitation.realname_image;
          wx.vip_image = ret.data.data.levitation.vip_image;
          wx.vip_big_image = ret.data.data.levitation.vip_big_image;
          wx.vip_type = ret.data.data.levitation.vip_type;
          wx.vip_qq = ret.data.data.levitation.vip_qq;

          // 提审服控制开关
          wx.levitation_examine = ret.data.data.levitation.examine;
          wx.levitation_examine_serverid = ret.data.data.levitation.examine_serverid;
        }
        
        if(ret.data.data.recharge != '' && ret.data.data.recharge != undefined && ret.data.data.recharge != null){
          // 充值条件
          wx.recharge = ret.data.data.recharge.off;
          wx.recharge_level_start = ret.data.data.recharge.recharge_level_start;
          wx.recharge_level_end = ret.data.data.recharge.recharge_level_end;
          // 提审服控制开关
          wx.recharge_examine = ret.data.data.recharge.examine;
          wx.recharge_examine_serverid = ret.data.data.recharge.examine_serverid;
          console.log("wx.recharge :"+wx.recharge +" wx.recharge_level_start："+wx.recharge_level_start+" wx.recharge_level_end： "+wx.recharge_level_end)
        }

        if(ret.data.data.videoad != '' && ret.data.data.videoad != undefined && ret.data.data.videoad != null){
          // 广告条件
          wx.videoad = ret.data.data.videoad.off;
          wx.videoad_level_start = ret.data.data.videoad.videoad_level_start;
          wx.videoad_level_end = ret.data.data.videoad.videoad_level_end;
          wx.videoad_skip_level_start = ret.data.data.videoad.videoad_skip_level_start;
          wx.videoad_skip_level_end = ret.data.data.videoad.videoad_skip_level_end;
          console.log("wx.videoad :"+wx.videoad +" wx.videoad_level_start："+wx.videoad_level_start+" wx.videoad_level_end： "+wx.videoad_level_end)
        }

        if(ret.data.data.courtesy != '' && ret.data.data.courtesy != undefined && ret.data.data.courtesy != null){
          // 添加有礼
          wx.courtesy = ret.data.data.courtesy.off;
          wx.courtesy_type = ret.data.data.courtesy.type;
          wx.courtesy_level_start = ret.data.data.courtesy.courtesy_level_start;
          wx.courtesy_level_end = ret.data.data.courtesy.courtesy_level_end;
          wx.courtesy_big_image_url = ret.data.data.courtesy.guide_image;
        }

        setCircle(0);
        
        console.log(JSON.stringify(ret));
      });
    }});
};


//充值
const pay = function (payData) {
  console.log("调用支付接口");
  let pay = promise.pay(XLGame, payData);
  pay.then((ret) => {
    console.log("pay:"+JSON.stringify(ret));
      if (ret.data.mini.status == 'success') {
        this.onPayCallback({
          status: '1',
          data: {
            gameOrderid: ret.data.mini.gameOrderid,
            money: ret.data.mini.money,
            productId: ret.data.mini.productId
          },
          msg: '支付成功'
        });
        wx.showToast({
          title: '充值成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        });
      } else if (ret.data.mini.needBuyMoney != undefined) {
        var env =0;
        if (ret.data.mini.sandbox == '0') {
          env = 0;
        } else {
          env = 1;
        }
        wx.requestMidasPayment({
          mode: 'game',
          env: env,
          offerId: ret.data.mini.offer_id,
          platform: "android",
          buyQuantity: ret.data.mini.needBuyMoney,
          currencyType: 'CNY',
          zoneId: "1",
          success: res => {
            XLGame.pay(payData);
            console.log(res);
          },
          fail: res => {
            console.log(res);
          },
          complete: res => {
            console.log(res);
          }
        });
      }
  });

};

const setCircle = function (value) {
  if( wx.circle != '' &&  wx.circle != undefined &&  wx.circle != null){
    if(value == 1){
      wx.circle.width = 80;
      wx.circle.height = 80;
    }else{
      wx.circle.width = 0;
      wx.circle.height = 0;
    }
  }
};

const setCourtesyCircle = function (value) {
  if( wx.circle_courtesy != '' &&  wx.circle_courtesy != undefined &&  wx.circle_courtesy != null){
    if(value == 1){
      wx.circle_courtesy.width = 580;
      wx.circle_courtesy.height = 1300;
      console.log(wx.circle_courtesy);
    }else{
      wx.circle_courtesy.width = 0;
      wx.circle_courtesy.height = 0;
    }
  }
};

const setCanPay = function (value) {
  promise.sdkInterface.canPay  = value;
  promise.commonParams.canPay = value;
};

const setVideoad = function (value) {
  promise.sdkInterface.videoad  = value;
  promise.commonParams.videoad = value;
};

const setVideoadSkip = function (value) {
  promise.sdkInterface.videoadSkip  = value;
  promise.commonParams.videoadSkip = value;
};

//数据上报
const pushData = function (data) {
  console.log('---------------------数据上报--------------------');
  console.log(data);
  wx.roleId = data.roleId;
  wx.roleName = data.roleName;
  wx.serverId = data.serverId;
  wx.serverName = data.serverName;
  promise.pushData(data);
  if(data.type == 1 || data.type == 4){
    
      // 登录或者升级上报处理逻辑
      /****** 悬浮框限制 */
      // 判断是否悬浮框提审开关限制
      if(wx.levitation_examine == 1 && wx.levitation_examine_serverid.indexOf(data.serverId.toString()) > '-1'){
        // 都满足不显示悬浮框
        // console.log('提审开关不显示悬浮框');
      } else {
        // console.log('提审开关未影响悬浮框');
        if(wx.levitation == 2){
          // 直接放开
          setCircle(1);
        } else {
            // 悬浮框不限制等级
            if(wx.levitation_level_start == '0' && wx.levitation_level_end == '0' && wx.levitation == 1){
              setCircle(1);
            }
            // 悬浮框限制最大等级
            if(wx.levitation_level_start == '0' && wx.levitation_level_end != '0' && wx.levitation == 1 && data.level <=  wx.levitation_level_end){
              setCircle(1);
            }
            // 悬浮框限制最小等级
            if(wx.levitation_level_start != '0' && wx.levitation_level_end == '0' && wx.levitation == 1 && data.level >=  wx.levitation_level_start){
              setCircle(1);
            }
            // 悬浮框限制等级区间
            if(wx.levitation_level_start != '0' && wx.levitation_level_end != '0' && wx.levitation == 1 && data.level >= wx.levitation_level_start && data.level <=  wx.levitation_level_end){
              setCircle(1);
            }
        }
      }

      /****** 充值功能限制 */
      // 判断是否充值入口提审开关限制
      if(wx.recharge_examine == 1 && wx.recharge_examine_serverid.indexOf(data.serverId.toString()) > '-1'){
        // console.log('提审开关不显示充值入口');
        setCanPay(false);
      } else {
        // console.log('提审开关未控制充值入口');
        if(wx.recharge == 2){
          // 直接放开
          setCanPay(true);
        } else {
          // 充值功能不限制等级
          if(wx.recharge_level_start == '0' && wx.recharge_level_end == '0' && wx.recharge == 1){
            setCanPay(true);
          }
          // 充值功能限制最大等级
          if(wx.recharge_level_start == '0' && wx.recharge_level_end != '0' && wx.recharge == 1 && data.level <=  wx.recharge_level_end){
            setCanPay(true);
          }
          // 充值功能限制最小等级
          if(wx.recharge_level_start != '0' && wx.recharge_level_end == '0' && wx.recharge == 1 && data.level >=  wx.recharge_level_start){
            setCanPay(true);
          }
          // 充值功能限制等级区间
          if(wx.recharge_level_start != '0' && wx.recharge_level_end != '0' && wx.recharge == 1 && data.level >= wx.recharge_level_start && data.level <=  wx.recharge_level_end){
            setCanPay(true);
          }
        }
      }
      // console.log("充值条件canPay："+promise.sdkInterface.canPay);


      // 控制广告开关
      if(wx.videoad == 2){
        // 直接放开
        setVideoad(true);
      } else {
        // 广告功能不限制等级
        if(wx.videoad_level_start == '0' && wx.videoad_level_end == '0' && wx.videoad == 1){
          setVideoad(true);
          console.log(promise.sdkInterface.videoad);
        }
        // 广告功能限制最大等级
        if(wx.videoad_level_start == '0' && wx.videoad_level_end != '0' && wx.videoad == 1 && data.level <=  wx.videoad_level_end){
          setVideoad(true);
        }
        // 广告功能限制最小等级
        if(wx.videoad_level_start != '0' && wx.videoad_level_end == '0' && wx.videoad == 1 && data.level >=  wx.videoad_level_start){
          setVideoad(true);
        }
        // 广告功能限制等级区间
        if(wx.videoad_level_start != '0' && wx.videoad_level_end != '0' && wx.videoad == 1 && data.level >= wx.videoad_level_start && data.level <=  wx.videoad_level_end){
          setVideoad(true);
        }
      }
      // console.log("广告条件："+promise.sdkInterface.videoad);

      // 跳过广告开关
      if(wx.videoad == 1 || wx.videoad == 2){
        // 广告跳过功能不限制等级
        if(wx.videoad_skip_level_start == '0' && wx.videoad_skip_level_end == '0'){
          setVideoadSkip(true);
        }
        // 广告跳过功能限制最大等级
        if(wx.videoad_skip_level_start == '0' && wx.videoad_skip_level_end != '0' && data.level <=  wx.videoad_skip_level_end){
          setVideoadSkip(true);
        }
        // 广告跳过功能限制最小等级
        if(wx.videoad_skip_level_start != '0' && wx.videoad_skip_level_end == '0' && data.level >=  wx.videoad_skip_level_start){
          setVideoadSkip(true);
        }
        // 广告跳过功能限制等级区间
        if(wx.videoad_skip_level_start != '0' && wx.videoad_skip_level_end != '0' && data.level >= wx.videoad_skip_level_start && data.level <=  wx.videoad_skip_level_end){
          setVideoadSkip(true);
        }
      }


      console.log('转移---',wx.data.changeAcc);
      // 处理登录转移逻辑
      if(wx.data.changeAcc != '' && wx.data.changeAcc != undefined && wx.data.changeAcc != null){
          // 判断对应等级是否符合弹窗要求
          if( (data.type == 1 && wx.data.changeAcc.type == 1 || data.type == 1 && wx.data.changeAcc.type == 3) || (data.type == 4 && wx.data.changeAcc.type == 2 || data.type == 4 && wx.data.changeAcc.type == 3)){
            // 转移弹窗不限制等级
            if(wx.data.changeAcc.level_start == '0' && wx.data.changeAcc.level_end == '0'){
              console.log('---转移弹窗不限制等级---');
              showUserMigrate(wx.data);
            }
            // 转移弹窗限制最大等级
            if(wx.data.changeAcc.level_start == '0' && wx.data.changeAcc.level_end != '0' && data.level <=  wx.data.changeAcc.level_end){
              console.log('---转移弹窗限制最大等级---');
              showUserMigrate(wx.data);
            }
            // 转移弹窗限制最小等级
            if(wx.data.changeAcc.level_start != '0' && wx.data.changeAcc.level_end == '0' && data.level >=  wx.data.changeAcc.level_start){
              console.log('---转移弹窗限制最小等级---');
              showUserMigrate(wx.data);
            }
            // 转移弹窗限制等级区间
            if(wx.data.changeAcc.level_start != '0' && wx.data.changeAcc.level_end != '0' && data.level >= wx.data.changeAcc.level_start && data.level <=  wx.data.changeAcc.level_end){
              console.log('---转移弹窗限制等级区间---');
              showUserMigrate(wx.data);
            }
          }
          
      } else {
        // 不弹转移
        console.log('---转移弹窗不符合---');
      }

  }

  // 添加有礼
  if(data.type == 1){
    // 登录
    if(wx.courtesy == 2){
      // 直接放开
      setCourtesyCircle(1)
    } else {
      // 判断弹出类型是不是
      if(wx.courtesy_type == 1){
        // 悬浮框不限制等级
        if(wx.courtesy_level_start == '0' && wx.courtesy_level_end == '0' && wx.courtesy == 1){
          setCourtesyCircle(1);
        }
        // 悬浮框限制最大等级
        if(wx.courtesy_level_start == '0' && wx.courtesy_level_end != '0' && wx.courtesy == 1 && data.level <=  wx.courtesy_level_end){
          setCourtesyCircle(1);
        }
        // 悬浮框限制最小等级
        if(wx.courtesy_level_start != '0' && wx.courtesy_level_end == '0' && wx.courtesy == 1 && data.level >=  wx.courtesy_level_start){
          setCourtesyCircle(1);
        }
        // 悬浮框限制等级区间
        if(wx.courtesy_level_start != '0' && wx.courtesy_level_end != '0' && wx.courtesy == 1 && data.level >= wx.courtesy_level_start && data.level <=  wx.courtesy_level_end){
          setCourtesyCircle(1);
        }
      }
    }
  }
  if(data.type == 4){
    // 升级
    if(wx.courtesy == 2){
      // 直接放开
      setCourtesyCircle(1)
    } else {
      // 判断是不是升级类型
      console.log('-----------------as*-');
      if(wx.courtesy_type == 2){
        // 悬浮框不限制等级
        if(wx.courtesy_level_start == '0' && wx.courtesy_level_end == '0' && wx.courtesy == 1){
          console.log('---满足等级条件不限制---');
          setCourtesyCircle(1);
        }
        // 悬浮框限制最大等级
        if(wx.courtesy_level_start == '0' && wx.courtesy_level_end != '0' && wx.courtesy == 1 && data.level <=  wx.courtesy_level_end){
          console.log('---满足等级条件最大等级---');
          setCourtesyCircle(1);
        }
        // 悬浮框限制最小等级
        if(wx.courtesy_level_start != '0' && wx.courtesy_level_end == '0' && wx.courtesy == 1 && data.level >=  wx.courtesy_level_start){
          console.log('---满足等级条件最小等级---');
          setCourtesyCircle(1);
        }
        // 悬浮框限制等级区间
        if(wx.courtesy_level_start != '0' && wx.courtesy_level_end != '0' && wx.courtesy == 1 && data.level >= wx.courtesy_level_start && data.level <=  wx.courtesy_level_end){
          console.log('---满足等级条件区间限制---');
          setCourtesyCircle(1);
        }
      }
    }
  }

};



//系统API要求
wx.onShow(function () {
  console.log("onShow ");
});

//分享按钮显示
wx.showShareMenu({
  withShareTicket: true,
});

// 客服聊天
const openCustomerService = function () {
  wx.openCustomerServiceConversation({
    success:function(res){
    },
    showMessageCard:true,
    sendMessageTitle:"回复客服继续",
    sendMessageImg:'https://jsdk.xunlugame.com/img/wxmptips.png'
  });
  
};


//获取用户信息
const getUserInfo = function (res) {
  console.log("调用用户getUserInfo接口"+res);
  // wx.getUserInfo({
  //   success: function (res) {
  //     let loginParams = {
  //       signature: res.signature,
  //       iv: res.iv,
  //       encryptedData: res.encryptedData,
  //       session_key: promise.commonParams.session_key,
  //       isUserInfo : true
  //     };
  //     let login = promise.login(XLGame,loginParams);
  //     login.then((res) => {
  //       console.log(JSON.stringify(res));
  //       let ret = res.data;
  //       XLGame.onUserInfoCallback({
  //           status: '1',
  //           data: {
  //             uid: ret.data.uid,
  //             timeStamp: ret.data.timestamp,
  //             sign: ret.data.sign,
  //             userInfo: ret.data.extInfo
  //           },
  //           msg: 'ok'
  //         });
  //     });
  //   }
  // });


 
};

function isEmpty(obj){
  if(typeof obj == "undefined" || typeof obj == undefined || obj == null || obj == ""){
      return true;
  }else{
      return false;
  }
}

//游戏主动分享
const share = function (data) {
  let title = "";
  let imageUrl = "";
  let imageUrlId = "";
  let sdkQuery = '';
  title = data.title;
  imageUrl = data.imageUrl;
  imageUrlId = data.imageUrlId;
  if (isEmpty(title)) title = promise.commonParams.shareTitle;
  if(isEmpty(imageUrl))imageUrl = promise.commonParams.shareImageUrl;
  if(isEmpty(imageUrl))imageUrlId =  promise.commonParams.shareImageUrlId;
  sdkQuery = "shareUid="+promise.commonParams.uid;
  console.log("data.query = "+data.query);
  if(!isEmpty(data.query))sdkQuery = sdkQuery+"&cpQuery="+data.qu
  ery;
  console.log("title :"+title+"  "+"imageUrl :"+imageUrl+"  imageUrlId:"+imageUrlId+"   sdkQuery:"+sdkQuery);
  console.log('-----游戏分享-----');
  data.type = 5;
  promise.pushData(data);
  wx.shareAppMessage({
    title:title,
    imageUrl:imageUrl,
    imageUrlId:imageUrlId,
    query:sdkQuery
  });
};

//页面节点数据埋点  {action: 20000}
const dataPlacement = function (params) {
  // 埋点值	 说明
  // 10000	打开游戏
  // 20000	引擎启动完成
  // 25000	加载皮肤文件
  // 30000	请求SDK登录
  // 30001	sdk登录成功
  // 40000	检验sdk登陆信息完成
  // 50000	请求账号服
  // 60000	账号服登录成功
  // 70000	打开创角界面
  // 75000	打开选服界面
  // 80000	点击登录按钮
  // 90000	加载皮肤文件
  // 90100	开始连游戏服
  // 90200	实际创角色
  // 90300	加载角色
  // 90400	加载完成
  // 90500	进入主场景
 
};

const wxLoginUserInfo =function(){
  let button = wx.createUserInfoButton({
    type: 'text',
    text: '获取用户信息',
    style: {
      left: 100,
      top: 76,
      width: 200,
      height: 40,
      lineHeight: 40,
      backgroundColor: '#ff0000',
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 16,
      borderRadius: 4
    }
  });
  button.onTap((res) => {
    console.log("-------res :"+res);
    getUserInfo(res);
  });

};


//关注公众号接口
const subscribe = function () {
  console.log("获取公众号接口 : ");
};

//订阅消息
const requestSubscribeMessage = function (tmplIds) {
  //['消息id1','消息id2']
  console.log(tmplIds);
  wx.onTouchEnd(function(e){
    wx.requestSubscribeMessage({
      tmplIds: tmplIds,
      success: function (ee) {
        console.log(ee);
        
        var tmpstr = ''; 
        var tmpstatus = 0;
        for (let i = 0; i < tmplIds.length; i++) {
          if(ee[tmplIds[i]] == 'accept'){
            tmpstr += tmplIds[i] + ',';
            tmpstatus = 1;
          }
        }
        
        if(tmpstatus  == 1){
          XLGame.onRsmessageCallback({
            statusCode: 0,
            status: '消息订阅成功'
          });
          tmpstr = tmpstr.substr(0,tmpstr.length-1);
          // 调用接口，存储信息
          wx.request({
            url: 'https://jsdk.xunlugame.com/v1/subscribe/save-subscribe',
            method: "POST",
            data: {
              'appid':promise.commonParams.gameId,
              'said':promise.commonParams.said,
              'partner':promise.commonParams.partner,
              'uid':promise.commonParams.uid,
              'openid':promise.commonParams.openid,
              'roleId':wx.roleId,
              'roleName':wx.roleName,
              'serverId':wx.serverId,
              'serverName':wx.serverName,
              'tmpstr':tmpstr,
            },
            success: function (res2) {
              console.log('sdk的订阅接口处理----',res2);
            }
          })
        } else {
          XLGame.onRsmessageCallback({
            statusCode: 1,
            status: '消息订阅失败'
          });
        }
      },
      fail: function (err) {
        console.log(err, '错误信息');
        XLGame.onRsmessageCallback({
          statusCode: 1,
          status: '消息订阅失败'
        });
      }
    });

  });
  
};

const msgSecCheck = function(scene,msg){

  var appid = promise.commonParams.gameId;
  var said = promise.commonParams.said;

    wx.request({
      url: "https://jsdk.xunlugame.com/v1/msg-check",
      method: "POST",
      data:{
        'appid':appid,
        'said':said,
        'openid':promise.commonParams.openid,
        'scene':scene,
        'content':msg,
        'version':2,
      },
      success:function(res){

        var result = {};
        result.msg = res.data.msg;
        result.code = res.data.code;

        XLGame.onMsgSecCheckCallback( result );
      }
    })
};

/**
 * 展示用户转移界面
 * data.changeAcc
 */
const showUserMigrate = function showUserMigrate(data) {

  if(data.changeAcc != 'undefined' && data.changeAcc != null){
    wx.showModal({
      title:data.changeAcc.title?data.changeAcc.title:'礼包',
      content:data.changeAcc.content,
      confirmText:data.changeAcc.confirmText?data.changeAcc.confirmText:'礼包',
      success(res){
        if (res.confirm) {
          wx.openCustomerServiceConversation({
            showMessageCard:true,
            sendMessageTitle:"回复礼包继续",
            sendMessageImg:'https://jsdk.xunlugame.com/img/wxkfgifs.png',
            success:function(res){
              console.log('openCustomerServiceConversation ');
            },
          });
        } else if (res.cancel) {
        }
      }
    });
  }
};

// 广告激励
const rewardedVideoAd = function (adUnitId) {
  //创建
  let VideoAd = wx.createRewardedVideoAd({
    adUnitId: adUnitId
  })
  //显示
  VideoAd.show().catch(err => {
    VideoAd.load()
      .then(() =>{
        VideoAd.show()
      })
  })
  // 监听关闭事件
  VideoAd.onClose(function (_res) {
    VideoAd.offClose()
    // 小于 2.1.0 的基础库版本，res 是一个 undefined
    if ((_res && _res.isEnded) || _res === undefined) {
      // 正常播放结束，可以下发游戏奖励
      XLGame.onRideoAdCallback({
        statusCode: 0,
        status: '正常播放结束'
      });
    } else {
      // 播放中途退出，不下发游戏奖励
      XLGame.onRideoAdCallback({
        statusCode: -1,
        status: '播放中途退出'
      });
    }
  });
  // 监听错误事件
  VideoAd.onError(function (_res) {
    console.log('错误',_res);
    callback({
      statusCode: 1,
      status: '视频播放错误'
    })
  });
};


module.exports = {
  init: init,
  login: login,
  pay: pay,
  pushData: pushData,
  getUserInfo: getUserInfo,
  share: share,
  openCustomerService: openCustomerService,
  subscribe: subscribe,
  dataPlacement: dataPlacement,
  sdkInterface: promise.sdkInterface,
  wxLoginUserInfo:wxLoginUserInfo,
  requestSubscribeMessage:requestSubscribeMessage,
  msgSecCheck:msgSecCheck,
  rewardedVideoAd:rewardedVideoAd
};