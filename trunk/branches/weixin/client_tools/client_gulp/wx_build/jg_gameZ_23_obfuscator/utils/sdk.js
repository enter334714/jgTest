var c = wx.$a;
var utilMd5 = require('./rymd5.js');
let common_param = {
  "gid": '',
  "pkid": '',
  "cid": '',
  "aid": '',
  "osid": '1',
  "pcid": 191,
  "appid": '',
  "openid": '',
  "unionid": '',
  "pid": 1,
  "lid": 1,
  "areaid": 1,
  'adtype': 1,
  "pdata": {},
  "uid": '',
  "roleid": '',
  "role": '',
  "rolelevel": '',
  "server": '',
  "payType": 31,
  "payName": 31,
  "account": '',
  "sdkver": '1.0.5',
  "platform": '',
  "appver": '1.0.0',
  "xcx_appid": '',
  "jump_appid": '',
  "jump_path": '',
  "gdt_vid": '',
  "weixinadinfo": '',
  "clue_token": '',
  "ad_id": '',
  "creative_id": ''
};
wx.onShow(args => {
  // 参数的query字段中可以获取到gdt_vid、weixinadinfo、channel等参数值
  let query = args.query;
  let gdt_vid = query.gdt_vid;
  let weixinadinfo = query.weixinadinfo;
  let clue_token = query.clue_token;
  let ad_id = query.ad_id;
  let creative_id = query.creative_id;
  if (gdt_vid) {
    common_param.gdt_vid = gdt_vid;
    wx.setStorageSync('gdt_vid', gdt_vid);
  } else {
    if (wx.getStorageSync('gdt_vid')) {
      common_param.gdt_vid = wx.getStorageSync('gdt_vid');
    }
  }
  if (weixinadinfo) {
    common_param.weixinadinfo = weixinadinfo;
    wx.setStorageSync('weixinadinfo', weixinadinfo);
  } else {
    if (wx.getStorageSync('weixinadinfo')) {
      common_param.weixinadinfo = wx.getStorageSync('weixinadinfo');
    }
  }
  if (clue_token) {
    common_param.clue_token = clue_token;
    wx.setStorageSync('clue_token', clue_token);
  } else {
    if (wx.getStorageSync('clue_token')) {
      common_param.clue_token = wx.getStorageSync('clue_token');
    }
  }
  if (ad_id) {
    common_param.ad_id = ad_id;
    wx.setStorageSync('ad_id', ad_id);
  } else {
    if (wx.getStorageSync('ad_id')) {
      common_param.ad_id = wx.getStorageSync('ad_id');
    }
  }
  if (creative_id) {
    common_param.creative_id = creative_id;
    wx.setStorageSync('creative_id', creative_id);
  } else {
    if (wx.getStorageSync('creative_id')) {
      common_param.creative_id = wx.getStorageSync('creative_id');
    }
  }
});
/**
 * 全局状态管理器
 */
export default class RYSDK {
  getPdata() {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: function (res) {
          let os = 'android';
          common_param.osid = 1;
          if (res.platform == 'devtools') {
            os = 'PC';
          } else if (res.platform == 'ios') {
            os = 'IOS';
            common_param.osid = 2;
          }
          common_param.platform = res.platform;
          let did = wx.getStorageSync('rydid');
          if (!did) {
            did += 'wx';
            let str = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            for (let i = 0; i < 6; i++) {
              let id = Math.ceil(Math.random() * 35);
              did += str[id];
            }
            wx.setStorageSync('rydid', did);
          }
          common_param.xcx_appid = wx.getAccountInfoSync().miniProgram.appId;
          common_param.pdata.appver = common_param.appver;
          common_param.pdata.dev = res.model;
          common_param.pdata.devtype = os;
          common_param.pdata.did = did;
          common_param.pdata.idfa = '';
          common_param.pdata.ip = '';
          common_param.pdata.mno = '';
          common_param.pdata.nm = '';
          common_param.pdata.os = os;
          common_param.pdata.osid = common_param.osid;
          common_param.pdata.osver = res.system.split(' ')[1];
          common_param.pdata.screen = res.screenHeight + "*" + res.screenWidth;
          common_param.pdata.sdkver = common_param.sdkver;
          common_param.pdata = JSON.stringify(common_param.pdata);
          resolve({ msg: '成功' });
        }
      });
    });
  }
  rySendMessage(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (!common_param.uid) {
        reject({ msg: '请先登录' });
      } else if (!data) {
        reject({ msg: '缺少数据' });
      } else if (!data.phone) {
        reject({ msg: '缺少手机' });
      } else {
        that.ryRequest('https://message.cn.sy.iskywan.com/app/message/cqapi/ApiSendMessage.php', {
          appid: wx.getAccountInfoSync().miniProgram.appId,
          gid: common_param.gid,
          pkid: common_param.pkid,
          uid: common_param.uid,
          openid: common_param.openid,
          unionid: common_param.unionid,
          appver: common_param.appver,
          sdkver: common_param.sdkver,
          account: common_param.account,
          phone: data.phone,
          captcha_type: 'update_phone'
        }).then(res => {
          if (!res.info.status) {
            reject({ msg: res.info.info });
          } else {
            resolve({ msg: '成功' });
          }
        });
      }
    });
  }
  ryBindPhone(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (!common_param.uid) {
        reject({ msg: '请先登录' });
      } else if (!data) {
        reject({ msg: '缺少数据' });
      } else if (!data.phone) {
        reject({ msg: '缺少手机' });
      } else if (!data.captcha) {
        reject({ msg: '缺少验证码' });
      } else {
        that.ryRequest('https://message.cn.sy.iskywan.com/app/message/api/ApiUpdatePhone.php', {
          appid: wx.getAccountInfoSync().miniProgram.appId,
          gid: common_param.gid,
          pkid: common_param.pkid,
          uid: common_param.uid,
          openid: common_param.openid,
          unionid: common_param.unionid,
          appver: common_param.appver,
          sdkver: common_param.sdkver,
          account: common_param.account,
          phone: data.phone,
          captcha: data.captcha,
          did: common_param.did,
          phone: data.phone
        }).then(res => {
          if (!res.info.status) {
            reject({ msg: res.info.info });
          } else {
            resolve({ msg: '成功' });
          }
        });
      }
    });
  }
  ryCheckTurnTerminal(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      that.ryRequest('https://weixin.iskywan.com/data/api/ApiCheckTurnTerminal.php', {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        gid: common_param.gid,
        pkid: common_param.pkid,
        uid: common_param.uid,
        openid: common_param.openid,
        unionid: common_param.unionid,
        appver: common_param.appver,
        roleid: common_param.roleid,
        rolelevel: common_param.rolelevel,
        server: common_param.server,
        sdkver: common_param.sdkver
      }).then(res => {
        if (res.info.status) {
          reject({ msg: '失败' });
        } else {
          resolve({ msg: '成功' });
        }
      });
    });
  }
  ryCheckTurnTerminalMsg() {
    let that = this;
    return new Promise((resolve, reject) => {
      that.ryRequest('https://weixin.iskywan.com/data/api/ApiSetXcxBehavior.php', {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        type: 'turnTerminalMsg',
        unionid: common_param.unionid,
        openid: common_param.openid,
        ext: common_param.uid,
        sdkver: common_param.sdkver
      }).then(res => {
        if (res.info.status) {
          //客服
          wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageTitle: '回复“绑定手机”继续',
            sendMessageImg: 'https://staticbase.iskywan.com/h5/image/bingphone.png',
            success: function (data) {},
            fail: function (data) {}
          });
          resolve({ msg: '成功' });
        } else {
          resolve({ msg: '成功' });
        }
      });
    });
  }
  ryCheckTurnPackage(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      that.ryRequest('https://weixin.iskywan.com/data/api/ApiCheckTurnPackage.php', {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        gid: common_param.gid,
        pkid: common_param.pkid,
        uid: common_param.uid,
        openid: common_param.openid,
        unionid: common_param.unionid,
        appver: common_param.appver,
        sdkver: common_param.sdkver
      }).then(res => {
        if (res.info.status) {
          common_param.jump_appid = res.info.info.jump_appid;
          common_param.jump_path = res.info.info.jump_path;
          wx.showModal({
            title: '尊敬的玩家',
            content: res.info.info.msg,
            showCancel: false,
            success: function (res) {
              that.ryJump(common_param.jump_appid, common_param.jump_path);
            }
          });
          resolve({ msg: '不用转' });
        } else {
          reject({ msg: '转包' });
        }
      });
    });
  }
  ryCheckWord(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      that.ryRequest('https://weixin.iskywan.com/data/api/ApiCheckWord.php', {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        version: data.version,
        scene: data.scene,
        content: data.content,
        openid: common_param.openid,
        unionid: common_param.unionid,
        appver: common_param.appver,
        sdkver: common_param.sdkver
      }).then(res => {
        if (!res.info.status) {
          reject({ msg: res.info.info });
        } else {
          resolve({ msg: '成功' });
        }
      });
    });
  }
  ryInit(data) {
    let that = this;
    //获取参数
    common_param.gid = data.gid;
    common_param.pkid = data.pkid;
    common_param.appver = data.appver;
    common_param.aid = wx.getLaunchOptionsSync().query.aid ? wx.getLaunchOptionsSync().query.aid : data.aid;
    common_param.cid = wx.getLaunchOptionsSync().query.cid ? wx.getLaunchOptionsSync().query.cid : data.cid;
    common_param.appid = wx.getLaunchOptionsSync().query.appid ? wx.getLaunchOptionsSync().query.appid : data.appid;
    let gdt_vid = wx.getLaunchOptionsSync().query.gdt_vid;
    let weixinadinfo = wx.getLaunchOptionsSync().query.weixinadinfo;
    let clue_token = wx.getLaunchOptionsSync().query.clue_token;
    let ad_id = wx.getLaunchOptionsSync().query.ad_id;
    let creative_id = wx.getLaunchOptionsSync().query.creative_id;
    if (!common_param.gdt_vid && gdt_vid) {
      common_param.gdt_vid = gdt_vid;
      wx.setStorageSync('gdt_vid', gdt_vid);
    }
    if (!common_param.weixinadinfo && weixinadinfo) {
      common_param.weixinadinfo = weixinadinfo;
      wx.setStorageSync('weixinadinfo', weixinadinfo);
    }
    if (!common_param.clue_token && clue_token) {
      common_param.clue_token = clue_token;
      wx.setStorageSync('clue_token', clue_token);
    }
    if (!common_param.ad_id && ad_id) {
      common_param.ad_id = ad_id;
      wx.setStorageSync('ad_id', ad_id);
    }
    if (!common_param.creative_id && creative_id) {
      common_param.creative_id = creative_id;
      wx.setStorageSync('creative_id', creative_id);
    }
    return new Promise((resolve, reject) => {
      that.getPdata().then(res => {
        that.logReport('open', { adtype: common_param.adtype, aid: common_param.aid, areaId: common_param.areaid, cid: common_param.cid, game: common_param.gid, pid: common_param.pid });
        resolve({ msg: '成功' });
      }).catch(err => {});
    });
  }
  ryLogin() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.login({
        success(res) {
          if (res.code) {
            //获取code
            let code = res.code;
            //获取openid
            that.ryRequest('https://weixin.iskywan.com/data/api/ApiGetWxXcxOpenId.php', { appid: wx.getAccountInfoSync().miniProgram.appId, 'code': code }).then(res => {
              if (res.info.status) {
                common_param.openid = res.info.info.openid;
                common_param.unionid = res.info.info.unionid;
                that.ryRequest('https://user.cn.sy.iskywan.com/app/main/api/ApiLoginThirdparty.php', {
                  login_type: 4,
                  openid: common_param.openid,
                  unionid: common_param.unionid,
                  gameid: common_param.gid,
                  pid: common_param.pid,
                  cid: common_param.cid,
                  aid: common_param.aid,
                  pcid: common_param.pcid,
                  areaid: common_param.areaid,
                  adtype: common_param.adtype,
                  pkid: common_param.pkid,
                  pdata: common_param.pdata,
                  sdkver: common_param.sdkver
                }).then(res => {
                  if (res.info.status) {
                    common_param.uid = res.info.info.uid;
                    common_param.account = res.info.info.account;
                    common_param.token = res.info.info.token;
                    that.logWxReport({
                      'uid': common_param.uid,
                      'wx_appid': wx.getAccountInfoSync().miniProgram.appId,
                      'wx_openid': common_param.openid,
                      'gdt_vid': common_param.gdt_vid,
                      'clue_token': common_param.clue_token,
                      'ad_id': common_param.ad_id,
                      'creative_id': common_param.creative_id,
                      'weixinadinfo': common_param.weixinadinfo,
                      'type': 'START_APP',
                      sdkver: common_param.sdkver
                    });
                    if (res.info.info.live2) {
                      that.logWxReport({
                        'uid': common_param.uid,
                        'wx_appid': wx.getAccountInfoSync().miniProgram.appId,
                        'wx_openid': common_param.openid,
                        'gdt_vid': common_param.gdt_vid,
                        'clue_token': common_param.clue_token,
                        'ad_id': common_param.ad_id,
                        'creative_id': common_param.creative_id,
                        'weixinadinfo': common_param.weixinadinfo,
                        'type': 'NextDayLive',
                        sdkver: common_param.sdkver
                      });
                    }
                    that.ryLoginLog();
                    let is_phone = false;
                    if (res.info.info.phone) {
                      is_phone = true;
                    }
                    resolve({ info: { uid: res.info.info.uid, token: res.info.info.token, is_phone: is_phone } });
                  } else {
                    reject({ msg: res.info });
                  }
                }).catch(err => {
                  reject({ msg: err.errMsg });
                });
              } else {
                reject({ msg: res.info });
              }
            }).catch(err => {
              reject({ msg: err.errMsg });
            });
          } else {
            reject({ msg: "登录失败" });
          }
        },
        fail(err) {
          reject({ msg: err.errMsg });
        }
      });
    });
  }
  logWxReport(post) {
    let that = this;
    that.ryRequest('https://sadmarketcnsy.rongyao666.com/app/channelapi/?_c=weixinXcx&_a=index', post);
  }

  logReport(type, gdata) {
    let that = this;
    let post = {
      pkid: common_param.pkid,
      pdata: common_param.pdata,
      rectime: Date.parse(new Date()),
      lid: common_param.lid,
      appid: common_param.appid,
      pcid: common_param.pcid,
      type: type,
      gdata: JSON.stringify(gdata),
      roleid: common_param.roleid
    };
    post.sign = that.getSign(JSON.parse(common_param.pdata), gdata, post.rectime);
    that.ryRequest('https://api.basedata.sy.iskywan.com', post);
  }
  getSign(pdata, gdata, time) {
    var str = '';
    for (var i in pdata) {
      if (pdata[i] === '' || pdata[i] == 'undefined') {
        pdata[i] = '';
      }
      str += i + "=" + pdata[i] + "&";
    }
    for (var i in gdata) {
      if (gdata[i] === '' || gdata[i] == 'undefined') {
        gdata[i] = '';
      }
      str += i + "=" + gdata[i] + "&";
    }
    var key = '';
    var _str = str + key + time;
    return utilMd5.hexMD5(_str);
  }
  ryRequest(url, data = {}, method = 'POST', header = { "Content-Type": "application/x-www-form-urlencoded" }) {
    return new Promise((resolve, reject) => {
      wx.request({
        method,
        url: url,
        header,
        data,
        success(res) {
          // 请求成功
          if (res.statusCode === 200) {
            resolve({ info: res.data });
          } else {
            reject({ msg: res.statusCode });
          }
        },
        fail(err) {
          /* 可做一些全局错误提示，如网络错误等 */
          reject({ msg: err.errMsg });
        }
      });
    });
  }
  ryEntry(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (!common_param.uid) {
        reject({ msg: '请先登录' });
      } else if (!data) {
        reject({ msg: '缺少数据' });
      } else if (!data.hasOwnProperty('server')) {
        reject({ msg: '缺少区服id' });
      } else if (!data.hasOwnProperty('roleid')) {
        reject({ msg: '缺少角色id' });
      } else if (!data.hasOwnProperty('role')) {
        reject({ msg: '缺少角色名称' });
      } else {
        common_param.role = data.role;
        common_param.roleid = data.roleid;
        common_param.rolelevel = data.rolelevel;
        common_param.server = data.server;
        setInterval(function () {
          that.ryOnline();
        }, 1000 * 60 * 5);
        that.logReport('entry', { adtype: common_param.adtype, aid: common_param.aid, areaId: common_param.areaid, cid: common_param.cid, game: common_param.gid, pid: common_param.pid, roleLevel: data.rolelevel, server: data.server, uid: common_param.uid });
        resolve({ msg: '成功' });
      }
    });
  }
  ryRole(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (!common_param.uid) {
        reject({ msg: '请先登录' });
      } else if (!data) {
        reject({ msg: '缺少数据' });
      } else if (!data.hasOwnProperty('server')) {
        reject({ msg: '缺少区服id' });
      } else if (!data.hasOwnProperty('role')) {
        reject({ msg: '缺少角色名' });
      } else if (!data.hasOwnProperty('roleid')) {
        reject({ msg: '缺少角色id' });
      } else {
        common_param.roleid = data.roleid;
        that.logWxReport({
          'uid': common_param.uid,
          'wx_appid': wx.getAccountInfoSync().miniProgram.appId,
          'wx_openid': common_param.openid,
          'type': 'CREATE_ROLE',
          'gdt_vid': common_param.gdt_vid,
          'weixinadinfo': common_param.weixinadinfo,
          'clue_token': common_param.clue_token,
          'ad_id': common_param.ad_id,
          'creative_id': common_param.creative_id,
          'sdkver': common_param.sdkver
        });
        that.logReport('role', { adtype: common_param.adtype, aid: common_param.aid, areaId: common_param.areaid, cid: common_param.cid, game: common_param.gid, pid: common_param.pid, role: data.role, server: data.server, uid: common_param.uid });
        resolve({ msg: '成功' });
      }
    });
  }
  ryLevel(data) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (!common_param.uid) {
        reject({ msg: '请先登录' });
      } else if (!data) {
        reject({ msg: '缺少数据' });
      } else if (!data.hasOwnProperty('server')) {
        reject({ msg: '缺少区服id' });
      } else if (!data.hasOwnProperty('role')) {
        reject({ msg: '缺少角色名' });
      } else if (!data.hasOwnProperty('roleid')) {
        reject({ msg: '缺少角色id' });
      } else if (!data.hasOwnProperty('rolelevel')) {
        reject({ msg: '缺少角色等级' });
      } else {
        common_param.roleid = data.roleid;
        that.logReport('level', { adtype: common_param.adtype, aid: common_param.aid, areaId: common_param.areaid, cid: common_param.cid, game: common_param.gid, pid: common_param.pid, role: data.role, roleLevel: data.rolelevel, server: data.server, uid: common_param.uid });
        resolve({ msg: '成功' });
      }
    });
  }
  ryOnline() {
    var that = this;
    if (common_param.uid) {
      that.logReport('online', { adtype: common_param.adtype, aid: common_param.aid, areaId: common_param.areaid, cid: common_param.cid, game: common_param.gid, pid: common_param.pid, role: common_param.role, roleLevel: common_param.rolelevel, server: common_param.server, uid: common_param.uid });
    }
  }
  ryLoginLog() {
    var that = this;
    if (common_param.uid) {
      that.logReport('login', { adtype: common_param.adtype, aid: common_param.aid, areaId: common_param.areaid, cid: common_param.cid, game: common_param.gid, pid: common_param.pid, uid: common_param.uid });
    }
  }
  //小程序客服
  ryPayConfirm() {
    let that = this;
    return new Promise((resolve, reject) => {
      that.ryRequest('https://weixin.iskywan.com/data/api/ApiSetXcxBehavior.php', {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        type: 'turnPayData',
        unionid: common_param.unionid,
        openid: common_param.openid,
        ext: common_param.uid,
        sdkver: common_param.sdkver
      }).then(res => {
        if (res.info.status) {
          //客服
          wx.showModal({
            title: '充值教程',
            content: '即将跳转官方[客服会话]充值给客服[回复充值]获取充值链接',
            showCancel: false,
            success: function (res) {
              //客服
              wx.openCustomerServiceConversation({
                showMessageCard: true,
                sendMessageTitle: '回复“充值”继续',
                sendMessageImg: 'https://staticbase.iskywan.com/h5/image/wxxcx.png',
                success: function (data) {},
                fail: function (data) {
                  wx.showModal({
                    title: '温馨提示',
                    content: '因版本限制，须通过[客服会话]充值，请您谅解',
                    cancelText: '朕知道了',
                    confirmText: '前往充值',
                    success: function (res) {
                      if (res.confirm) {
                        wx.openCustomerServiceConversation({
                          showMessageCard: true,
                          sendMessageTitle: '回复“充值”继续',
                          sendMessageImg: 'https://staticbase.iskywan.com/h5/image/wxxcx.png',
                          success: function (data) {},
                          fail: function (data) {}
                        });
                      }
                    }
                  });
                }
              });
            }
          });
          resolve({ msg: '成功' });
        } else {
          resolve({ msg: '成功' });
        }
      });
    });
  }
  ryJump(appId, path) {
    wx.navigateToMiniProgram({
      appId: appId,
      path: path,
      envVersion: 'release',
      success(res) {
        // 打开成功
        console.log(res);
      },
      fail(res) {
        console.log(res);
      }
    });
  }
  ryMidasPayment(res, data) {
    let that = this;
    wx.requestMidasPayment({
      mode: res.info.info.gameConf.mode,
      env: res.info.info.gameConf.env,
      offerId: res.info.info.gameConf.offerId,
      currencyType: res.info.info.gameConf.currencyType,
      platform: res.info.info.gameConf.platform,
      buyQuantity: res.info.info.gameConf.buyQuantity,
      zoneId: res.info.info.gameConf.zone_id,
      success: function (resp) {
        that.logWxReport({
          'uid': common_param.uid,
          'wx_appid': wx.getAccountInfoSync().miniProgram.appId,
          'wx_openid': common_param.openid,
          'type': 'PURCHASE',
          'gdt_vid': common_param.gdt_vid,
          'clue_token': common_param.clue_token,
          'ad_id': common_param.ad_id,
          'creative_id': common_param.creative_id,
          'weixinadinfo': common_param.weixinadinfo,
          'value': data.money * 100,
          'sdkver': common_param.sdkver
        });
        that.ryRequest('https://pay.cn.sy.iskywan.com/app/main/api/ApiMobilePayXcx.php', {
          game: common_param.gid,
          lid: common_param.lid,
          pid: common_param.pid,
          uid: common_param.uid,
          areaid: common_param.areaid,
          pkid: common_param.pkid,
          token: common_param.token,
          money: data.money,
          appid: common_param.appid,
          pcid: common_param.pcid,
          aid: common_param.aid,
          account: common_param.account,
          cid: common_param.cid,
          order: res.info.info.orderID,
          payName: common_param.payName,
          payType: common_param.payType,
          appid: wx.getAccountInfoSync().miniProgram.appId,
          openid: common_param.openid,
          unionid: common_param.unionid,
          sdkver: common_param.sdkver

        }).then(res => {}).catch(err => {});
      },
      fail: function (err) {
        console.log(err);
      }
    });
  }
  ryPay(data) {
    console.log(data);
    let that = this;
    return new Promise((resolve, reject) => {
      if (!common_param.uid) {
        reject({ msg: '请先登录' });
      } else if (!data) {
        reject({ msg: '缺少数据' });
      } else if (!data.hasOwnProperty('server')) {
        reject({ msg: '缺少区服id' });
      } else if (!data.hasOwnProperty('role')) {
        reject({ msg: '缺少角色名' });
      } else if (!data.hasOwnProperty('roleid')) {
        reject({ msg: '缺少角色id' });
      } else if (!data.hasOwnProperty('goodsId')) {
        reject({ msg: '缺少商品id' });
      } else if (!data.hasOwnProperty('goodsName')) {
        reject({ msg: '缺少商品名称' });
      } else if (!data.hasOwnProperty('goodsNum')) {
        reject({ msg: '缺少商品数量' });
      } else if (!data.hasOwnProperty('gameOrder')) {
        reject({ msg: '缺少商品订单号' });
      } else if (!data.hasOwnProperty('money')) {
        reject({ msg: '缺少商品金额' });
      } else {
        that.ryCheckTurnPackage({}).then(res => {}).catch(err => {
          that.ryRequest('https://manage.cn.sy.iskywan.com/app/data/api/ApiGetThPayCtl.php', {
            pid: common_param.pid,
            gid: common_param.gid,
            osid: common_param.osid,
            pkid: common_param.pkid,
            rolelevel: data.rolelevel,
            uid: common_param.uid,
            sdkver: common_param.sdkver,
            appver: common_param.appver,
            is_xcx: 1
          }).then(res => {
            if (!res.info.status) {
              //小游戏
              that.ryRequest('https://pay.cn.sy.iskywan.com/app/main/api/ApiMobilePay.php', {
                server: data.server,
                game: common_param.gid,
                pdata: common_param.pdata,
                role: data.role,
                goodsId: data.goodsId,
                lid: common_param.lid,
                goods: data.goodsName,
                pid: common_param.pid,
                uid: common_param.uid,
                vipLevel: common_param.vipLevel,
                areaid: common_param.areaid,
                role_id: data.roleid,
                atype: common_param.adtype,
                roleLevel: data.rolelevel,
                payName: common_param.payName,
                payType: common_param.payType,
                goodsName: data.goodsName,
                goodsNum: data.goodsNum,
                ext: data.ext,
                pkid: common_param.pkid,
                token: common_param.token,
                money: data.money,
                gameOrder: data.gameOrder,
                appid: common_param.appid,
                pcid: common_param.pcid,
                aid: common_param.aid,
                account: common_param.account,
                cid: common_param.cid,
                xcx_appid: common_param.xcx_appid,
                openid: common_param.openid,
                unionid: common_param.unionid,
                sdkver: common_param.sdkver
              }).then(res => {
                if (res.info.status) {
                  //判断金额
                  that.ryRequest('https://pay.cn.sy.iskywan.com/app/main/api/ApiGetTodayMoney.php', {
                    uid: common_param.uid,
                    xcx_appid: common_param.xcx_appid,
                    openid: common_param.openid,
                    unionid: common_param.unionid,
                    sdkver: common_param.sdkver
                  }).then(_res => {
                    if (_res.info.status) {
                      //提示
                      wx.showModal({
                        title: '温馨提示',
                        content: _res.info.info.msg,
                        showCancel: false,
                        success: function (_res) {
                          that.ryMidasPayment(res, data);
                          resolve({ msg: '成功' });
                        }
                      });
                    } else {
                      that.ryMidasPayment(res, data);
                      resolve({ msg: '成功' });
                    }
                  }).catch(err => {
                    reject({ msg: err.msg });
                  });
                } else {
                  reject({ msg: res.info });
                }
              }).catch(err => {
                reject({ msg: err.msg });
              });
            } else {
              if (res.info.info.type == 1) {
                //小程序客服
                that.ryRequest('https://pay.cn.sy.iskywan.com/app/main/api/ApiSetPayData.php', {
                  xcx_appid: common_param.xcx_appid,
                  openid: common_param.openid,
                  unionid: common_param.unionid,
                  server: data.server,
                  game: common_param.gid,
                  pdata: common_param.pdata,
                  role: data.role,
                  goodsId: data.goodsId,
                  lid: common_param.lid,
                  goods: data.goodsName,
                  pid: common_param.pid,
                  uid: common_param.uid,
                  vipLevel: common_param.vipLevel,
                  areaid: common_param.areaid,
                  role_id: data.roleid,
                  atype: common_param.adtype,
                  roleLevel: data.rolelevel,
                  payName: common_param.payName,
                  payType: common_param.payType,
                  goodsName: data.goodsName,
                  goodsNum: data.goodsNum,
                  ext: data.ext,
                  pkid: common_param.pkid,
                  token: common_param.token,
                  money: data.money,
                  gameOrder: data.gameOrder,
                  appid: common_param.appid,
                  pcid: common_param.pcid,
                  aid: common_param.aid,
                  account: common_param.account,
                  cid: common_param.cid,
                  sdkver: common_param.sdkver
                }).then(res => {
                  that.ryPayConfirm();
                  resolve({ msg: '成功' });
                }).catch(err => {
                  reject({ msg: err.msg });
                });
              } else {
                let subAppId = res.info.info.appid;
                let paytype = res.info.info.paytype;
                //小程序
                that.ryRequest('https://pay.cn.sy.iskywan.com/app/main/api/ApiMobilePay.php', {
                  subAppId: subAppId,
                  server: data.server,
                  game: common_param.gid,
                  pdata: common_param.pdata,
                  role: data.role,
                  goodsId: data.goodsId,
                  lid: common_param.lid,
                  goods: data.goodsName,
                  pid: common_param.pid,
                  uid: common_param.uid,
                  vipLevel: common_param.vipLevel,
                  areaid: common_param.areaid,
                  role_id: data.roleid,
                  atype: common_param.adtype,
                  roleLevel: data.rolelevel,
                  payName: paytype,
                  payType: paytype,
                  goodsName: data.goodsName,
                  goodsNum: data.goodsNum,
                  ext: data.ext,
                  pkid: common_param.pkid,
                  token: common_param.token,
                  money: data.money,
                  gameOrder: data.gameOrder,
                  appid: common_param.appid,
                  pcid: common_param.pcid,
                  aid: common_param.aid,
                  account: common_param.account,
                  cid: common_param.cid,
                  xcx_appid: common_param.xcx_appid,
                  openid: common_param.openid,
                  unionid: common_param.unionid,
                  sdkver: common_param.sdkver
                }).then(res => {
                  that.ryJump(res.info.info.subAppId, res.info.info.path);
                  resolve({ msg: '成功' });
                }).catch(err => {
                  reject({ msg: err.msg });
                });
              }
            }
          }).catch(err => {
            reject({ msg: err.msg });
          });
        });
      }
    });
  }
}