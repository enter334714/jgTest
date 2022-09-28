var q1 = wx.f$;
let md5 = require("./md5.js");
let req_url = "https://game.gzqileyou.com/sdk/xcx_sdk/";
let stat_url = "https://stat.gzqileyou.com/api/";

let sign = 'oNdyNJYEoten6oI7EH5gOyKmJhocg8kU';
let scene = 0;
let query = {};
let os = 3;
let game_id = 0;
let sdk_version = '2.1.0';
let uuid = '';
let logincode = '';
let aid = 0;
let gdt_vid = '';
let agent_id = 0;
let site_id = 0;
let uid = 0;
let username = '';
let share = function () {};
let system_info = {};
let openid = '';

/**
 * 获取通用数据
 */
function getCommonData() {
  let common_data = {
    'os': os,
    'game_id': game_id,
    'uuid': uuid,
    'token': logincode,
    'uid': uid,
    'username': username,
    'scene': scene,
    'aid': aid,
    'gdt_vid': gdt_vid,
    'agent_id': agent_id,
    'site_id': site_id,
    'sdk_version': sdk_version,
    'time': Date.parse(new Date()) / 1000,
    'openid': openid
  };
  common_data.signature = signature(common_data);
  return common_data;
};
function signature(data) {
  let sign = md5.hexMD5(md5.hexMD5(md5.hexMD5('yWpx3hWQHFhSnTCj#' + data.game_id + '#6KuRKuaAjLJ5sYRy') + data.time) + data.uid);
  return sign;
}
wx.getSystemInfo({
  success(res) {
    system_info.brand = res.brand;
    system_info.model = res.model;
    system_info.pixelRatio = res.pixelRatio;
    system_info.system = res.system;
    system_info.SDKVersion = res.SDKVersion;
    system_info.version = res.version;
    system_info.platform = res.platform;
    switch (res.platform) {
      case "android":
        os = 3;
        break;
      case "ios":
        os = 4;
        break;
    }
    console.log(system_info);
  }
});
wx.onShow(args => {
  //改为冷启动参数
});
wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
});

class Qlysdk {
  constructor(gid) {
    game_id = gid;
    this.init();
  }

  /**
   * 初始化
   */
  init() {
    let args = wx.getLaunchOptionsSync(); //冷启动参数
    scene = args.scene;
    // 参数的query字段中可以获取到gdt_vid、weixinadinfo、channel等参数值
    query = args.query;
    gdt_vid = query.gdt_vid;
    agent_id = query.agent_id;
    site_id = query.site_id;
    let weixinadinfo = query.weixinadinfo;
    // 获取⼴告id
    if (weixinadinfo) {
      let weixinadinfoArr = weixinadinfo.split('.');
      aid = weixinadinfoArr[0];
    }
    console.log('来源⼴告的⼴告id是：' + aid);
  }

  /**
   * 登录
   */
  login(loginCallback) {
    wx.login({
      success: result => {
        console.log('登录code！' + result.code);
        let req_data = getCommonData();
        req_data = Object.assign(system_info, req_data);
        req_data.code = result.code;
        req_data.gdt_vid = gdt_vid;
        req_data.query = query;
        request(req_url + 'login', req_data, function (res) {
          console.log('打开成功' + JSON.stringify(res.data));
          if (res.data.code == 0) {
            uuid = res.data.data.uuid;
            logincode = res.data.data.token;
            agent_id = res.data.data.agent_id;
            site_id = res.data.data.site_id;
            uid = res.data.data.uid;
            username = res.data.data.username;
            openid = res.data.data.openid;
            let data = { 'uid': uid, 'uname': username };
            loginCallback(data);

            let transfer = res.data.data.transfer;
            if (transfer.is_transfer == 1) {
              if (!transfer.tips_num) {
                transfer.tips_num = 20;
              }
              showTransferTips(transfer, 1);
            }
          } else {
            showMsg(res.data.msg);
          }
        });
      },
      fail: result => {
        showMsg('微信无法登录');
      }
    });
  }

  /**
   * 上报
   */
  roleinfo(roleInfo) {
    let req_data = getCommonData();
    req_data = Object.assign(roleInfo, req_data);
    request(req_url + 'roleReport', req_data, function (res) {
      console.log('上报成功' + JSON.stringify(res.data));
    });
  }

  /**
   * 支付
   */
  pay(payData, payCallback) {
    let req_data = getCommonData();
    payData = Object.assign(req_data, payData);
    request(req_url + 'getOrderId', payData, function (res) {
      console.log('getOrderId成功' + JSON.stringify(res.data));
      switch (res.data.code) {
        case 0:
          //成功
          let orderid = res.data.data.orderid;
          orderid = orderid.substr(2);
          payData.orderid = orderid;
          if (payData.os == 0) {
            //安卓
            Qlysdk.xcxMdsPay(payData, payCallback);
          } else {
            //ios
            Qlysdk.kefuPay(payData, payCallback);
          }
          break;
        default:
          showMsg(res.data.msg);
          break;
      }
    });
  }

  /**
   * 客服支付
   */
  static kefuPay(payData, payCallback) {
    wx.openCustomerServiceConversation({
      sessionFrom: 'pay.' + game_id + '.' + payData.orderid + '.' + payData.money,
      showMessageCard: true,
      sendMessageTitle: '发送“充值”获取充值链接',
      sendMessagePath: '',
      sendMessageImg: 'http://game.gzqileyou.com/static/images/xcxpay.png',
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.error(res);
        showMsg(res.errMsg);
      }
    });
  }

  /**
   * 文本验证
   */
  msgSecCheck(content, callback) {
    let time = Date.parse(new Date()) / 1000;
    let key = 'qlysdk_xcx_log_' + game_id;
    let check_data = {
      'content': content,
      'key': key,
      'openid': openid,
      'game_id': game_id,
      'time': time,
      'sign': md5.hexMD5(game_id + key + time + sign)
    };
    request(stat_url + 'wechat/msgSecCheck', check_data, function (res) {
      let check = res.data.code == 0 ? true : false;
      callback(check);
    });
  }

  /**
   * 米大师支付
   */
  static xcxMdsPay(payData, payCallback) {
    request(req_url + 'mdsPay', payData, function (res) {
      console.log(res.data);
      switch (res.data.code) {
        case 0:
          //支付成功
          payCallback(payData.orderid);
          break;
        case 3:
          //余额不足
          Qlysdk.mdsRecharge(payData, res.data.data.offer_id, res.data.data.proportion, payCallback);
          break;
        default:
          showMsg(res.data.msg);
          break;
      }
    });
  }

  /**
   * 米大师充值
   */
  static mdsRecharge(payData, offer_id, proportion, payCallback) {
    wx.requestMidasPayment({
      currencyType: 'CNY',
      mode: 'game',
      offerId: offer_id,
      env: 0,
      buyQuantity: payData.money * proportion, //游戏币数量=金额*充值比例
      platform: 'android',
      zoneId: 1,
      orderid: payData.orderid,
      success(res) {
        console.log(res);
        Qlysdk.xcxMdsPay(payData, payCallback);
      },
      fail(res) {
        console.error(res);
        showMsg(res.errMsg);
      }
    });
  }
}

/**
  * 转端提示
  */
function showTransferTips(transfer, num = 1) {
  wx.showActionSheet({
    alertText: transfer.title,
    itemColor: '#000',
    itemList: [transfer.customer_service_desc, transfer.account, transfer.url_desc],
    success(res) {
      console.log(res);
      if (res.tapIndex == 2) {
        copywxtap(transfer.url);
      } else if (res.tapIndex == 1) {
        copywxtap(transfer.account);
      }
      if (num < transfer.tips_num) {
        num++;
        showTransferTips(transfer, num);
      }
    },
    fail(res) {
      console.log(res.errMsg);
      let req_data = getCommonData();
      request(req_url + 'cancelTransferPopup', req_data, function (res) {
        console.log('取消弹窗成功' + JSON.stringify(res.data));
      });
    }
  });
}

/**
  * 点击复制
  */
function copywxtap(content) {
  wx.showToast({
    title: '复制成功'
  });

  // 下方为微信开发文档中的复制 API
  wx.setClipboardData({
    data: content, //复制的数据
    success: function (res) {
      wx.getClipboardData({
        success: function (res) {
          console.log(res.data); //打印赋值的数据
        }
      });
    },
    fail(res) {
      console.log(res);
    }
  });
}

/**
 * 提示框
 */
function showMsg(msg) {
  if (msg.indexOf("request:fail") != -1) {
    msg = msg.substr(12);
  }
  wx.showLoading({
    title: msg
  });
  setTimeout(function () {
    wx.hideLoading();
  }, 2000);
}

function request(url, data, callback, num = 0) {
  wx.request({
    url: url,
    data: data,
    timeout: 5000,
    success(res) {
      callback(res);
    },
    fail(res) {
      if (num < 3) {
        num++;
        request(url, data, callback, num);
      } else {
        console.error(res);
        showMsg(res.errMsg);
      }
    }
  });
}

module.exports = Qlysdk;