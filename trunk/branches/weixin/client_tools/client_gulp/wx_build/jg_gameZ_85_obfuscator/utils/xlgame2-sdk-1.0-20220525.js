var q1 = wx.f$;
let promise = require("./xlgame-jsdk-promise.js");
let util = require("./xlgame-sdk-util.js");
// let channelSDK = require('./sysdk-wxapp.js');
import Qlysdk from './xlgame376.js';
var qlysdk = null;
// var qlysdk = qlysdk = new Qlysdk(3205);
var XLGameSDK = this;
var uid = '';
var _id = 0;
const initQlysdk = function (id) {
  _id = id;
  qlysdk = new Qlysdk(id);
};

//初始化
const init = function (gameId, gameKey) {

  console.log("调用init接口");
  XLGameSDK = this;
  let active = promise.active(XLGameSDK, '376', gameId, gameKey, util.getSonGameId);

  //设置sdk额外功能
  promise.sdkInterface.userInfo = false;
  promise.sdkInterface.share = false;
  promise.sdkInterface.subscribe = false;
  promise.sdkInterface.openCustomerService = false;
  promise.sdkInterface.dataPlacement = false;
  promise.sdkInterface.requestSubscribeMessage = true;
  active.then(ret => {
    console.log("------" + util.getDeviceType());
    console.log(JSON.stringify(ret));
  });
};

//登录
const login = function () {

  console.log("调用登录接口");
  qlysdk.login(function (data) {
    // do something
    console.log("sgsdk-login:" + JSON.stringify(data));
    console.log(data.uid);
    uid = data.uid;
    if (uid != undefined && uid != '') {
      let login = promise.login(XLGameSDK, {
        uid: uid
      });
      login.then(ret => {
        console.log(JSON.stringify(ret));
      });
    } else {
      this.onLoginCallback({
        status: '0',
        msg: 'login fail'
      });
    }
  });
};

//充值
const pay = function (payData) {
  console.log("调用支付接口");
  let pay = promise.pay(XLGameSDK, payData);
  pay.then(ret => {
    console.log(JSON.stringify(ret));
    let os = util.getDeviceType();
    if (os == 'ios') {
      os = 1;
    } else {
      os = 0;
    }
    let obj = {
      os: os, //0安卓 1ios
      game_id: _id, //游戏ID
      uid: uid, //游戏用户ID
      server_id: payData.serverId, //游戏服ID
      server_name: payData.serverName, //游戏服名
      role_id: payData.roleId, //游戏角色ID
      role_name: payData.roleName, //游戏角色名
      money: payData.money, //充值金额（元）
      product_id: payData.productId, //商品ID
      product_name: payData.productName, //商品名称
      product_desc: payData.productName, //商品描述
      vip: '', //vip等级
      role_level: payData.roleLevel, //游戏角色等级
      ext: ret.orderid //其他信息
    };
    console.log('-----下单数据', obj);
    qlysdk.pay(obj);
  });
};

//数据上报
const pushData = function (data) {
  promise.pushData(data);
  console.log('------------push-------------');
  console.log(data);
  var info = {
    uid: uid,
    server_id: data.serverId,
    server_name: data.serverName,
    role_id: data.roleId,
    role_name: data.roleName,
    role_power: data.rolePower,
    money_num: '',
    vip: data.vipLevel,
    role_level: data.level
  };
  if (data.type == '2') {
    // 2创建角色3进入游戏4等级提升
    info.date_type = '2';
    qlysdk.roleinfo(info);
  } else if (data.type == '1') {
    // 2创建角色3进入游戏4等级提升
    info.date_type = '3';
    qlysdk.roleinfo(info);
  } else if (data.type == '4') {
    // 2创建角色3进入游戏4等级提升
    info.date_type = '4';
    qlysdk.roleinfo(info);
  }
};

//系统API要求
wx.onShow(function () {
  console.log("onShow ");
});

//分享按钮显示
wx.showShareMenu({
  withShareTicket: true
});

// 客服聊天
const openCustomerService = function () {
  wx.openCustomerServiceConversation();
};

//关注公众号接口
const subscribe = function () {};

//获取用户信息
const getUserInfo = function (res) {
  console.log("调用用户getUserInfo接口" + res);
};

function isEmpty(obj) {
  if (typeof obj == "undefined" || typeof obj == undefined || obj == null || obj == "") {
    return true;
  } else {
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
  if (isEmpty(imageUrl)) imageUrl = promise.commonParams.shareImageUrl;
  if (isEmpty(imageUrl)) imageUrlId = promise.commonParams.shareImageUrlId;
  sdkQuery = "shareUid=" + promise.commonParams.uid;
  if (!isEmpty(data.query)) sdkQuery = sdkQuery + "&cpQuery=" + data.query;
  console.log(data.query);
  console.log("title :" + title + "  " + "imageUrl :" + imageUrl + "  imageUrlId:" + imageUrlId + "   sdkQuery:" + sdkQuery);
  wx.shareAppMessage({
    title: title,
    imageUrl: imageUrl,
    imageUrlId: imageUrlId,
    query: sdkQuery
  });
};

//页面节点数据埋点  {action: 20000}
const dataPlacement = function (params) {};

const wxLoginUserInfo = function () {};

//订阅消息
const requestSubscribeMessage = function (tmplIds) {
  qlysdk.subscribeMsg(tmplIds, function (res) {
    XLGameSDK.onRsmessageCallback(res);
  });
};

// 激励广告
const rewardedVideoAd = function (adUnitId) {
  qlysdk.createVideoAd(adUnitId, function (call) {
    //call返回的state有三种状态，分别是show,close,error
    //show {"state":"show","isEnded":false,"msg":"视频展示成功"}
    //close {"state":"close","isEnded":true,"msg":"视频广告关闭"}
    //error {"state":"error","isEnded":false,"msg":"视频广告错误"}
    // console.log(JSON.stringify(call),'createRewardedVideoAd')
    if (call.state == "show") {
      // 展示视频，不返回信息
    } else if (call.state == 'close') {

      if (call.isEnded) {
        //视频完整看完，进行发送奖励
        XLGameSDK.onRideoAdCallback({
          statusCode: 0,
          status: '正常播放结束'
        });
      } else {
        // 视频没看完,不发奖
        XLGameSDK.onRideoAdCallback({
          statusCode: -1,
          status: '播放中途退出'
        });
      }
    } else {
      XLGameSDK.onRideoAdCallback({
        statusCode: 1,
        status: '视频拉取错误'
      });
    }
  });
};

const msgSecCheck = function (scene = 1, msg) {
  qlysdk.msgSecCheck(msg, function (callback) {
    console.log(msg);
    console.log('内容检测:' + JSON.stringify(callback));
    var result = {};
    if (callback == true) {
      result.code = 100;
      result.msg = 'pass';
    } else {
      result.code = '21000';
      result.msg = '失败';
    }
    XLGameSDK.onMsgSecCheckCallback(result);
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
  wxLoginUserInfo: wxLoginUserInfo,
  requestSubscribeMessage: requestSubscribeMessage,
  rewardedVideoAd: rewardedVideoAd,
  msgSecCheck: msgSecCheck,
  initQlysdk: initQlysdk
};