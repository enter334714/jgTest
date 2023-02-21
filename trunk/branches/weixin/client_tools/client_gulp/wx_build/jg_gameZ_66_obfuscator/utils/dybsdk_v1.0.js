"use strict";

var f1 = wx.f$;
function isIos() {
  var system = wx.getSystemInfoSync();if (typeof system.model != "undefined") {
    dybModel = system.model;
  }if (system.platform == 'ios') {
    _system = 'ios';
  } else if (system.platform == 'android') {
    _system = 'android';
  } else {
    if (system.system.indexOf('iOS') == '-1' && system.system.indexOf('IOS') == '-1' && system.system.indexOf('Ios') == '-1') {
      _system = 'android';
    } else {
      _system = 'ios';
    }
  }envVersion == 'develop' && console.log("==当前系统==", _system);var source = 1;if (_system == 'ios') {
    source = 2;
  }dybSource = source;return source;
}function getNetwork() {
  wx.getNetworkType({ success(res) {
      var networkType = res.networkType;if (networkType == "wifi") {
        network = 0;
      } else if (networkType == "3g") {
        network = 1;
      } else {
        network = 2;
      }
    } });
}function dybSetStorage(data) {
  var kvDataList = [];kvDataList.push({ key: data.key, value: data.val });var versionRes = _k9ZAP7(wx.getSystemInfoSync().SDKVersion, '1.9.92');if (versionRes >= 0) {
    wx.setUserCloudStorage({ KVDataList: kvDataList, success: function (res) {
        console.log('setUserCloudStorage:success');
      } });
  }
}function wxGetSetting(param, _callback) {
  wx.getSetting({ success: function (res) {
      if (res.authSetting['scope.userInfo'] === true) {
        wx.getStorage({ key: 'btnRes', success: function (sData) {
            var openCallback = wx.getLaunchOptionsSync();if (sData.data == undefined || sData.data == {}) {
              _createUserInfoButton(param, function (cRes) {
                _callback(cRes);
              });
            } else {
              callbackInfo(sData.data, function dybback(cblack) {
                _callback(cblack);
              });
            }
          }, fail: function (res) {
            _createUserInfoButton(param, function (cRes) {
              _callback(cRes);
            });
          } });
      } else {
        _createUserInfoButton(param, function (cRes) {
          _callback(cRes);
        });
      }
    } });
};function getLaunchOptionSync() {
  var query = wx.getLaunchOptionsSync().query;var referrerInfo = wx.getLaunchOptionsSync().referrerInfo;if (query.chid) {
    channel_id = query.chid;sub_channel_id = query.subchid ? query.subchid : '';shareid = query.shareid ? query.shareid : 0;sharetype = query.sharetype ? query.sharetype : '';
  } else if (referrerInfo.extraData) {
    if (typeof referrerInfo.extraData === "string") {
      referrerInfo.extraData = JSON.parse(referrerInfo.extraData);
    }channel_id = referrerInfo.extraData.chid;sub_channel_id = referrerInfo.extraData.subchid;shareid = referrerInfo.extraData.shareid ? referrerInfo.extraData.shareid : 0;sharetype = referrerInfo.extraData.sharetype ? referrerInfo.extraData.sharetype : '';
  }clue_token = query.clue_token ? query.clue_token : '';ad_id_tt = query.ad_id ? query.ad_id : '';dyb_ad_id = query.dyb_ad_id ? query.dyb_ad_id : '';creative_id = query.creative_id ? query.creative_id : '';_source_appid = referrerInfo.appId;op_pageId = query.pageId ? query.pageId : '0';op_tid = query.tid ? query.tid : '0';op_lbid = query.lbid ? query.lbid : '0';op_adid = query.adid ? query.adid : '0';op_source = query.source ? query.source : '';query_str = JSON.stringify(query);var gdt_vid = query.gdt_vid ? query.gdt_vid : '0';var wx_aid = query.wx_aid ? query.wx_aid : '0';if (gdt_vid && wx_aid == '0') {
    agent = agent_arr.gdt;
  }if (wx_aid && wx_aid != '0') {
    agent = agent_arr.weixinmp;
  }if (clue_token && clue_token != '0') {
    agent = agent_arr.jinri;
  }var bd_vid = query.bd_vid ? query.bd_vid : '0';if (bd_vid && bd_vid != '0') {
    agent = agent_arr.baidu;
  }var uctrackid = query.uctrackid ? query.uctrackid : '0';if (uctrackid && uctrackid != '0') {
    agent = agent_arr.uc;
  }if (op_tid && op_tid != '0') {
    agent = agent_arr.oppo;
  }return 1;
}function getedition() {
  let version = envVersion;switch (version) {case 'develop':
      envVersion = 'develop';break;case 'trial':
      envVersion = 'trial';break;case 'release':
      envVersion = 'release';break;default:
      envVersion = 'release';}let _setting = {};if (version == 'release') {
    _setting = hd_config.pro;_DybUrl = _setting.url;
  } else {
    _setting = hd_config.devp;_DybUrl = _setting.url;
  }dybAppId = _setting.appId;dybAppKey = _setting.appKey;dybChannel = _setting.channel;dybSubChannel = _setting.subChannel;dybSdkVersion = _setting.sdkVersion;dybEnv = _setting.env;appEnv = _setting.appEnv;url = _setting.url;img_service = _setting.img_service;adUrl = _setting.adUrl;adGameId = _setting.adGameId;adAppkey = _setting.adAppkey;return 1;
}function _createUserInfoButton(param, _callback) {
  var SDKVersionRes = _k9ZAP7(wx.getSystemInfoSync().SDKVersion, '1.1.1');if (SDKVersionRes >= 0) {
    userinfoBtn = wx.createUserInfoButton({ type: 'image', image: param.imageUrl, lang: 'zh_CN', style: { left: param.left, top: param.top, width: param.width, height: param.height } });userinfoBtn.onTap(function (btnRes) {
      if (btnRes.errMsg === 'getUserInfo:ok' || btnRes.errMsg === 'operateWXData:ok') {
        userinfoBtn.destroy();userinfoBtn = '';btnRes.userInfo.isVisitor = 0;wx.setStorage({ key: 'btnRes', data: btnRes });callbackInfo(btnRes, function dybback(cblack) {
          _callback(cblack);
        });
      } else {
        userinfoBtn.destroy();userinfoBtn = '';callbackInfo({}, function dybback(cblack) {
          _callback(cblack);
        });
      }
    });
  } else {
    wx.showModal({ title: '提示', content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。' });
  }
};function checkLogin(_callback) {
  envVersion == 'develop' && console.log("======checkLogin========");wx.checkSession({ success() {
      envVersion == 'develop' && console.log('session_key 未过期');_open_id = wx.getStorageSync('openid');dybUserId = wx.getStorageSync('dybUserId');dayLogin = wx.getStorageSync('dayLogin');dybisAU = wx.getStorageSync('isAU');dybisOU = wx.getStorageSync('isOU');if (!_open_id || !dybUserId || dayLogin != getDay()) {
        Dyb.login(function call(callback) {
          if (!_open_id) {
            wx.showModal({ title: '提示', content: '登录异常，请重新打开小游戏' });
          } else {
            _callback(callback);
          }
        });
      } else {
        var jsonArr = { code: 1, msg: '成功', data: { user: { 'openid': _open_id } } };_callback(jsonArr);
      }
    }, fail() {
      envVersion == 'develop' && console.log('session_key 已过期');Dyb.login(function call(callback) {
        if (!_open_id) {
          wx.showModal({ title: '提示', content: '登录异常，请重新打开小游戏' });
        } else {
          _callback(callback);
        }
      });
    } });
}function callbackInfo(backParam, dybback) {
  envVersion == 'develop' && console.log(_open_id, "======callbackInfo========");var query = {};var user = {};var openCallback = wx.getLaunchOptionsSync();if (typeof backParam.userInfo != "undefined") {
    dybUserId = wx.getStorageSync("dybUserId");dybToken = wx.getStorageSync("dybToken");user = { thirdId: _open_id, nickname: backParam.userInfo.nickName, avatarUrl: backParam.userInfo.avatarUrl, country: backParam.userInfo.country, province: backParam.userInfo.province, city: backParam.userInfo.city, gender: backParam.userInfo.gender, isVisitor: backParam.userInfo.isVisitor, userId: dybUserId, token: dybToken, isAU: dybisAU, isOU: dybisOU };
  } else {
    user = { thirdId: _open_id, userId: dybUserId, token: dybToken, isAU: dybisAU, isOU: dybisOU };
  }var jsonArr = { code: 1, msg: '成功', data: { user: user, shareInfo: openCallback.query } };dybback(jsonArr);
}function _k9ZAP7(v1, v2) {
  v1 = v1.split('.');v2 = v2.split('.');var len = Math.max(v1.length, v2.length);while (v1.length < len) {
    v1.push('0');
  }while (v2.length < len) {
    v2.push('0');
  }for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);var num2 = parseInt(v2[i]);if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }return 0;
}function sha1(data, secret_key) {
  var res = sort(data);var str = '';for (var i in res) {
    if (i != 'sign') {
      str += i + '=' + res[i] + '&';
    }
  }str = str.substring(0, str.length - 1);str = str.replace(/\s+/g, "") + secret_key;if (_signType == 'sha1') {
    var sha = CryptoJS.SHA1(str);
  } else {
    var sha = CryptoJS.MD5(str);
  }var sign = sha.toString();return sign;
}function sort(a) {
  var c = [];for (var i in a) {
    c.push(i);
  }c.sort();var r = [];for (var j in c) {
    r[c[j]] = a[c[j]];
  }return r;
}function check_query(str) {
  var strs = [];strs = str.split("&");for (i = 0; i < strs.length; i++) {
    if (strs[i] == '') return false;let sub_strs = str.split("=");if (sub_strs[0] == 'chid' || sub_strs[0] == 'subchid' || sub_strs[0] == 'shareid' || sub_strs[0] == 'sharetype') return false;
  }return true;
}function post(url, data) {
  var promise = new Promise((resolve, reject) => {
    wx.request({ url: url, data: data, method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      }, error: function (e) {
        reject('网络出错');
      } });
  });return promise;
}function getDyb(env = 'release') {
  if (!is_start) {
    is_start = true;isIos();getedition();getLaunchOptionSync();getNetwork();
  }envVersion = env;return Dyb;
};var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e;
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};var DybMd5 = function () {
  function DybMd5() {
    this.hexcase = 0;
  }DybMd5.prototype.hex_md5 = function (s) {
    return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));
  };DybMd5.prototype.rstr_md5 = function (s) {
    return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
  };DybMd5.prototype.rstr2hex = function (input) {
    try {
      this.hexcase;
    } catch (e) {
      this.hexcase = 0;
    }var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";var output = "";var x;for (var i = 0; i < input.length; i++) {
      x = input.charCodeAt(i);output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }return output;
  };DybMd5.prototype.str2rstr_utf8 = function (input) {
    var output = "";var i = -1;var x, y;while (++i < input.length) {
      x = input.charCodeAt(i);y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
        x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);i++;
      }if (x <= 0x7F) output += String.fromCharCode(x);else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
    }return output;
  };DybMd5.prototype.rstr2binl = function (input) {
    var output = Array(input.length >> 2);for (var i = 0; i < output.length; i++) output[i] = 0;for (var i = 0; i < input.length * 8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;return output;
  };DybMd5.prototype.binl2rstr = function (input) {
    var output = "";for (var i = 0; i < input.length * 32; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);return output;
  };DybMd5.prototype.binl_md5 = function (x, len) {
    x[len >> 5] |= 0x80 << len % 32;x[(len + 64 >>> 9 << 4) + 14] = len;var a = 1732584193;var b = -271733879;var c = -1732584194;var d = 271733878;for (var i = 0; i < x.length; i += 16) {
      var olda = a;var oldb = b;var oldc = c;var oldd = d;a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);a = this.safe_add(a, olda);b = this.safe_add(b, oldb);c = this.safe_add(c, oldc);d = this.safe_add(d, oldd);
    }return [a, b, c, d];
  };DybMd5.prototype.md5_cmn = function (q, a, b, x, s, t) {
    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
  };DybMd5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
    return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
  };DybMd5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
    return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
  };DybMd5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
    return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
  };DybMd5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
    return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  };DybMd5.prototype.safe_add = function (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);var msw = (x >> 16) + (y >> 16) + (lsw >> 16);return msw << 16 | lsw & 0xFFFF;
  };DybMd5.prototype.bit_rol = function (num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  };return DybMd5;
}();function ksort(params) {
  return newParams;
}function create_sign(data, key = '') {
  let keys = Object.keys(data).sort();var str = '';var newArr = keys.map(function (val, key) {
    str += val + "=" + data[val] + "&";
  });if (str.substr(str.length - 1, str.length) == "&") {
    str = str.substr(0, str.length - 1);
  }str += key;console.log(str);str = new DybMd5().hex_md5(str);return str.toString();
}function create_ad_sign(data, key = '') {
  let keys = Object.keys(data).sort();var str = '';var newArr = keys.map(function (val, key) {
    str += data[val];
  });if (str.substr(str.length - 1, str.length) == "&") {
    str = str.substr(0, str.length - 1);
  }str += key;str = new DybMd5().hex_md5(str);return str.toString();
}function getTime() {
  var d = new Date();var format = 'yyyy-MM-dd hh:mm:ss';var o = { "M+": d.getMonth() + 1, "d+": d.getDate(), "h+": d.getHours(), "m+": d.getMinutes(), "s+": d.getSeconds(), "q+": Math.floor((d.getMonth() + 3) / 3), "S": d.getMilliseconds() };if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  }for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }return format;
}function getDay() {
  var now = new Date();var year = now.getFullYear();var month = now.getMonth() + 1;var day = now.getDate();var clock = year + "-";if (month < 10) clock += "0";clock += month + "-";if (day < 10) clock += "0";clock += day;return clock;
}require("./crypto-js.js");var hd_config = require("./config.js");var _sdk_version = 'v2.1';var _DybUrl = '';var userinfoBtn = '';var getServerCfg = '';var envVersion = 'release';var trueReturn = { "err_code": 1, "err_msg": "成功" };var falseReturn = { "err_code": 0, "err_msg": "失败" };var _source_appid = '';var channel_id = '';var sub_channel_id = '';var clue_token = '';var ad_id_tt = '';var creative_id = '';var sharetype = '';var shareid = 0;var _gameAppid = '';var _identify = '';var _secret = '';var _signType = 'sha1';var _open_id = '';var _system = 'ios';var is_start = false;var dybAppId = '';var dybAppKey = '';var dybSource = 1;var dybSecretKey = '';var dybChannel = '';var dybSubChannel = '';var dybModel = '';var dybOperatorOs = '';var dybVersion = '1';var dybSdkVersion = '';var dybDeviceNo = '';var dybDevice = '';var dybClientTime = '';var dybToken = '';var dybUserId = '';var dybThirdId = '';var dybMdsAppId = '';var dybEnv = '';var appEnv = '';var zoneId = '1';var pf = 'android';var img_service = '';var adUrl = '';var adGameId = '';var adAppkey = '';var ad_id = 0;var dyb_ad_id = 0;var aid = 0;var traceid = "";var network = 0;var dayLogin = "";var dybShareTitle = '';var dybShareImageUrl = '';var dybisAU = 0;var dybisOU = 0;var op_pageId = 0;var op_tid = 0;var op_lbid = 0;var op_adid = 0;var op_source = 0;var query_str = "";var agent_arr = { "weixinmp": 900190003, "gdt": 900190005, "jinri": 900190007, "baidu": 900190009, "uc": 900190011, "oppo": 900190013 };var agent = 0;var dybTimestamp = Math.floor(new Date().getTime() / 1000);var url = '';var oExInfoJson = '';var isTouch = false;var Dyb = { getDybUserInfo: function (param, is_auth, _callback) {
    envVersion == 'develop' && console.log('----------getDybUserInfo-------------');let query = wx.getEnterOptionsSync().query;if (typeof query.ad_id != "undefined") ad_id_tt = query.ad_id;if (typeof query.dyb_ad_id != "undefined") dyb_ad_id = query.dyb_ad_id;traceid = query.gdt_vid;let weixinadinfo = query.weixinadinfo;if (weixinadinfo) {
      let weixinadinfoArr = weixinadinfo.split('.');aid = weixinadinfoArr[0];
    }try {
      wx.removeStorageSync('openid');wx.removeStorageSync('dybUserId');wx.removeStorageSync('dybToken');wx.removeStorageSync('dayLogin');
    } catch (e) {}var dybShare = wx.getStorageSync("dybShare");if (dybShare) {
      dybShareTitle = dybShare.title;dybShareImageUrl = dybShare.imageUrl;Dyb.onshare(dybShare);
    }checkLogin(function () {
      Dyb.initData(function (call) {
        setTimeout(function () {
          Dyb.upLoginData(param);
        }, 2000);
      });if (is_auth) {
        wxGetSetting(param, function call(callback) {
          _callback(callback);
        });
      } else {
        callbackInfo({}, function call(callback) {
          _callback(callback);
        });
      }
    });
  }, submitOrder: function (param, _callback) {
    envVersion == 'develop' && console.log('----------submitOrder-------------');checkLogin(function () {
      var pw = { appId: dybAppId, source: dybSource, advChannel: dybChannel, userId: dybUserId, time: Math.floor(new Date().getTime() / 1000) };pw.sign = create_sign(pw, dybAppKey);var n = { appId: dybAppId, source: dybSource, advChannel: dybChannel, advSubChannel: dybSubChannel, userId: dybUserId, productId: param.productId, money: param.money, gameZoneId: param.gameZoneId, gameZoneName: param.gameZoneName, roleId: param.roleId, roleName: param.roleName, roleLevel: param.roleLevel, gameOrderId: param.gameOrderId, cpPrivateInfo: param.cpPrivateInfo };wx.request({ url: _DybUrl + '/integration/minigame/payway', method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, data: pw, success: function (res_op) {
          if (res_op.data.code == '200') {
            if (parseInt(res_op.data.data.op) == 2) {
              n.dybAppKey = dybAppKey;n.apId = res_op.data.data.appId;n.adGameId = adGameId;n.adAppkey = adAppkey;n.ad_id = dyb_ad_id;n.appsflyer_id = aid;n.advertising_id = traceid;n.device_type = dybModel;n._open_id = _open_id;Dyb.subData(n, _callback);
            } else {
              n.sign = create_sign(n, dybAppKey);wx.request({ url: _DybUrl + '/integration/minigame/order', method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, data: n, success: function (res) {
                  if (res.data.code == '200') {
                    if (parseInt(res_op.data.data.op) == 3) {
                      Dyb.sendMsg(res, _callback);param.transactionId = res.data.data.transactionId;Dyb.upCostData(param);
                    } else {
                      oExInfoJson = res.data.data.oExInfo;var oExInfo = JSON.parse(res.data.data.oExInfo);param.transactionId = res.data.data.transactionId;Dyb.upCostData(param);if (typeof oExInfo.mds_id != "undefined" || oExInfo.mds_id != '') {
                        dybMdsAppId = oExInfo.mds_id;
                      }if (typeof res_op.data.data.isSandbox != "undefined" || res_op.data.data.isSandbox != '') {
                        dybEnv = res_op.data.data.isSandbox ? 1 : 0;
                      }Dyb.queryBalance(param, function (req) {
                        if (req.status) {
                          Dyb.charge(param, _callback);
                        } else {
                          wx.requestMidasPayment({ mode: 'game', env: dybEnv, offerId: dybMdsAppId, currencyType: "CNY", platform: "android", buyQuantity: param.money * 100, zoneId: zoneId, success: function (res) {
                              Dyb.charge(param, _callback);
                            }, fail: function (res) {
                              console.log(res);_callback({ code: 0, msg: '支付失败' });
                            } });
                        }
                      });
                    }
                  } else {
                    _callback({ code: 0, msg: res.data.error_msg });
                  }isTouch = false;
                } });
            }
          } else {
            _callback({ code: 0, msg: res.data.error_msg });
          }isTouch = false;
        } });
    });
  }, customerService: function (param, callback) {
    wx.openCustomerServiceConversation({ showMessageCard: false, sendMessageTitle: "", sendMessagePath: '', success: function (res) {
        callback({ code: 1, msg: "拉起成功" + JSON.stringify(res) });
      }, fail: function (res) {
        callback({ code: 0, msg: "拉起失败" + JSON.stringify(res) });
      }, complete: function () {} });
  }, queryBalance: function (param, callback) {
    var n = { appId: dybAppId, advChannel: dybChannel, userId: dybUserId, productId: param.productId, money: param.money, exInfo: JSON.stringify({ openid: _open_id, zoneid: zoneId, pf: pf }) };n.sign = create_sign(n, dybAppKey);wx.request({ url: _DybUrl + '/integration/minigame/queryBalance', method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, data: n, success: function (res) {
        if (res.data.code == '200') {
          callback({ 'status': res.data.data.canPay, 'msg': '返回余额状态' });
        } else {
          callback({ 'status': false, 'msg': '余额查询失败' });
        }
      } });
  }, charge: function (param, callback) {
    var n = { appId: dybAppId, advChannel: dybChannel, userId: dybUserId, transactionId: param.transactionId, amt: param.money, exInfo: JSON.stringify({ openid: _open_id, zoneid: zoneId, pf: pf }) };n.sign = create_sign(n, dybAppKey);wx.request({ url: _DybUrl + '/integration/minigame/pay', method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, data: n, success: function (res) {
        if (res.data.code == '200') {
          callback({ code: 1, msg: '支付成功' });
        } else {
          var is_pay = Dyb.recharge(n);if (is_pay) {
            callback({ code: 1, msg: '支付成功' });
          } else {
            callback({ code: 0, msg: '支付失败' });
          }
        }
      }, fail: function (res) {
        callback({ code: 0, msg: '支付失败' });
      } });
  }, recharge: function (n) {
    var is_success = false;var is_pay = false;for (var i = 0; i < 2; i++) {
      if (!is_success && i < 2) {
        setTimeout(function () {
          wx.request({ url: _DybUrl + '/integration/minigame/pay', method: 'POST', header: { 'content-type': 'application/x-www-form-urlencoded' }, data: n, success: function (res) {
              if (res.data.code == '200') {
                is_success = true;is_pay = true;
              } else {
                is_success = false;is_pay = false;
              }
            }, fail: function (res) {
              is_success = false;is_pay = false;
            } });
        }, (i + 1) * 1000);
      } else {
        break;
      }
    };return is_pay;
  }, subData: function (res, _callback) {
    var ap = res.apId;delete res.apId;console.log('pages/image/image?&ext=' + JSON.stringify(res));wx.navigateToMiniProgram({ appId: ap, path: 'pages/image/image?&ext=' + JSON.stringify(res), extraData: { foo: 'bar' }, envVersion: appEnv, success(req) {
        _callback({ code: 1, msg: '跳转成功' });
      }, fail(req) {
        _callback({ code: 0, msg: '跳转失败' });
      } });
  }, sendMsg: function (res, _callback) {
    var msgTitle = dybAppId + "_" + res.data.data.transactionId + "_" + res.data.data.money;wx.openCustomerServiceConversation({ showMessageCard: true, sendMessageTitle: msgTitle, sendMessagePath: '', sendMessageImg: img_service, success: function () {
        callback({ code: 1, msg: '成功' });
      }, fail: function (res) {
        callback({ code: 0, msg: '失败' });
      }, complete: function () {} });
  }, loginData: function (param) {
    envVersion == 'develop' && console.log('----------loginData-------------');checkLogin(function (callback) {
      var loginParam = {};loginParam.openid = _open_id;loginParam.game_appid = _gameAppid;loginParam.create_time = Math.floor(new Date().getTime() / 1000);loginParam.channel_id = channel_id;loginParam.sub_channel_id = sub_channel_id;loginParam.source_appid = _source_appid;if (typeof param.nickname != "undefined") {
        loginParam.nickname = param.nickname;loginParam.avatarUrl = param.avatarUrl;loginParam.country = param.country;loginParam.province = param.province;loginParam.city = param.city;loginParam.gender = param.gender;
      }var sign_param = { openid: loginParam.openid, game_appid: loginParam.game_appid, create_time: loginParam.create_time, channel_id: loginParam.channel_id, sub_channel_id: loginParam.sub_channel_id };loginParam.sign = sha1(sign_param, _secret);loginParam.sign_type = _signType;
    });
  }, initData(dybcall) {
    envVersion == 'develop' && console.log('----------init_Data-------------');dybcall();
  }, login(dybback) {
    envVersion == 'develop' && console.log(_open_id + "======login========");wx.login({ dataType: 'json', success: function (loginCode) {
        var tmp_sub_channel_id = dybChannel;if (agent) {
          tmp_sub_channel_id = agent;
        }var n = { appId: dybAppId, source: dybSource, advChannel: dybChannel, advSubChannel: dybSubChannel, subChannel: tmp_sub_channel_id, model: dybModel, operatorOs: dybOperatorOs, version: dybVersion, deviceNo: dybDeviceNo, device: dybDevice, sdkVersion: dybSdkVersion, clientTime: getTime(), network: network, token: JSON.stringify({ token: loginCode.code }) };n.sign = create_sign(n, dybAppKey);envVersion == 'develop' && console.log(n, "初始化登陆logins数据");wx.request({ url: _DybUrl + '/integration/minigame/login', header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'POST', data: n, dataType: 'json', success: function (res) {
            var user = {};var openCallback = wx.getLaunchOptionsSync();if (res.data.code == 200) {
              dybUserId = res.data.data.userId;dybToken = res.data.data.token;dybThirdId = res.data.data.thirdId;_open_id = res.data.data.thirdId;dybisAU = res.data.data.isAU ? 1 : 0;dybisOU = res.data.data.isOU ? 1 : 0;var jsonArr = { code: 1, msg: '成功', data: { user: user, shareInfo: openCallback.query } };wx.setStorageSync('openid', res.data.data.thirdId);wx.setStorageSync('dybUserId', res.data.data.userId);wx.setStorageSync('dybToken', res.data.data.token);wx.setStorageSync('dayLogin', getDay());wx.setStorageSync('isAU', dybisAU);wx.setStorageSync('isOU', dybisOU);var param = {};if (res.data.data.isRegister) {
                param.userId = res.data.data.userId;Dyb.upRegData(param);
              } else {}if (res.data.data.wxShare) {
                var shareParam = { title: res.data.data.wxShare.title, imageUrl: res.data.data.wxShare.imageUrl };wx.setStorageSync('dybShare', shareParam);dybShareTitle = shareParam.title;dybShareImageUrl = shareParam.imageUrl;Dyb.onshare(shareParam);
              }dybback(jsonArr);
            } else {
              var jsonArr = { code: 0, msg: '登录失败，请重新打开小游戏', data: {} };dybback(jsonArr);
            }return;
          } });
      }, fail: function (res) {
        var jsonArr = { code: 0, msg: '微信登录失败，请重新打开小游戏', data: {} };dybback(jsonArr);
      } });
  }, upLoginData(param) {
    envVersion == 'develop' && console.log('----------upLoginData-------------');checkLogin(function (callback) {
      if (_open_id == "") {
        return false;
      }var dev_type = dybSource;var app_type = "android";var device1 = "";var device2 = "";if (dev_type == 2) {
        app_type = "ios";device1 = _open_id;
      } else {
        device2 = _open_id;
      }var adData = { game_id: adGameId, app_name: "com.xyx", conv_type: "MOBILEAPP_LOGIN", app_type: app_type, device1: device1, device2: device2, time: Math.floor(new Date().getTime() / 1000) };if (clue_token) {
        adData.clue_token = clue_token;
      }adData.sign = create_ad_sign(adData, adAppkey);adData.ip = "0000";adData.ver = 3;adData.ad_id = dyb_ad_id;adData.appsflyer_id = aid;adData.advertising_id = traceid;adData.device_type = dybModel;if (op_pageId) {
        adData.pageId = op_pageId;
      }if (op_tid) {
        adData.tid = op_tid;
      }if (op_lbid) {
        adData.lbid = op_lbid;
      }if (op_adid) {
        adData.adid = op_adid;
      }if (op_source) {
        adData.source = op_source;
      }if (query_str) {
        adData.query_str = query_str;
      }wx.request({ url: adUrl, data: adData, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {}, fail: function (res) {}, complete: function (res) {} });
    });
  }, upRegData(param) {
    envVersion == 'develop' && console.log('----------upRegData-------------');checkLogin(function () {
      var dev_type = dybSource;var app_type = "android";var device1 = "";var device2 = "";if (dev_type == 2) {
        app_type = "ios";device1 = _open_id;
      } else {
        device2 = _open_id;
      }var adData = { game_id: adGameId, app_name: "com.xyx", conv_type: "MOBILEAPP_REG", app_type: app_type, device1: device1, device2: device2, user_id: param.userId, time: Math.floor(new Date().getTime() / 1000) };if (clue_token) {
        adData.clue_token = clue_token;
      }adData.sign = create_ad_sign(adData, adAppkey);adData.ip = "0000";adData.ver = 3;adData.ad_id = dyb_ad_id;adData.appsflyer_id = aid;adData.advertising_id = traceid;adData.device_type = dybModel;if (ad_id_tt) {
        adData.ad_id_tt = ad_id_tt;
      }if (creative_id) {
        adData.creative_id = creative_id;
      }if (op_pageId) {
        adData.pageId = op_pageId;
      }if (op_tid) {
        adData.tid = op_tid;
      }if (op_lbid) {
        adData.lbid = op_lbid;
      }if (op_adid) {
        adData.adid = op_adid;
      }if (op_source) {
        adData.source = op_source;
      }if (query_str) {
        adData.query_str = query_str;
      }wx.request({ url: adUrl, data: adData, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {}, fail: function (res) {}, complete: function (res) {} });
    });
  }, upCostData(param) {
    checkLogin(function () {
      var dev_type = dybSource;var app_type = "android";var device1 = "";var device2 = "";if (dev_type == 2) {
        app_type = "ios";device1 = _open_id;
      } else {
        device2 = _open_id;
      }var adData = { game_id: adGameId, app_name: "com.xyx", conv_type: "MOBILEAPP_COST", app_type: app_type, device1: device1, device2: device2, user_id: dybUserId, time: Math.floor(new Date().getTime() / 1000), rmb: param.money * 100, pay_type: "wxpay", currency_type: "RMB", order_number: param.transactionId, player_id: param.roleId };adData.sign = create_ad_sign(adData, adAppkey);adData.player_level = param.roleLevel;adData.ip = "0000";adData.ver = 3;adData.ad_id = dyb_ad_id;adData.appsflyer_id = aid;adData.advertising_id = traceid;adData.device_type = dybModel;var n = { transactionId: param.transactionId, exInfo: JSON.stringify(adData) };n.sign = create_ad_sign(n, dybAppKey);wx.request({ url: _DybUrl + '/integration/data/ADManageSubmit', data: n, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {}, fail: function (res) {}, complete: function (res) {} });
    });
  }, startCreateRole: function (param, callback) {
    envVersion == 'develop' && console.log('----------startCreateRole-------------');checkLogin(function () {
      var dev_type = dybSource;var app_type = "android";var device1 = "";var device2 = "";if (dev_type == 2) {
        app_type = "ios";device1 = _open_id;
      } else {
        device2 = _open_id;
      }var adData = { game_id: adGameId, app_name: "com.xyx", conv_type: "MOBILEAPP_START_ROLE", app_type: app_type, device1: device1, device2: device2, user_id: dybUserId, time: Math.floor(new Date().getTime() / 1000) };adData.sign = create_ad_sign(adData, adAppkey);adData.ip = "0000";adData.ver = 3;adData.ad_id = dyb_ad_id;adData.appsflyer_id = aid;adData.advertising_id = traceid;adData.device_type = dybModel;wx.request({ url: adUrl, data: adData, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {
          var jsonArr = { code: 1, msg: '开始创角上报成功', data: res.data };callback(jsonArr);
        }, fail: function (res) {
          var jsonArr = { code: 0, msg: '开始创角失败', data: res.data };callback(jsonArr);
        }, complete: function (res) {} });
    });
  }, reportRoleInfo: function (param, callback) {
    envVersion == 'develop' && console.log('----------completeCreateRole-------------');checkLogin(function () {
      if (typeof param.roleBalance == "undefined") param.roleBalance = 0;if (typeof param.roleLevel == "undefined") param.roleLevel = 1;if (typeof param.vipLevel == "undefined") param.vipLevel = 1;if (typeof param.serverId == "undefined") param.serverId = 1;if (typeof param.serverName == "undefined") param.serverName = "";if (typeof param.guildName == "undefined") param.guildName = "";var n = { appId: dybAppId, advChannel: dybChannel, userId: dybUserId, source: dybSource, roleId: param.roleId, roleName: param.roleName, roleBalance: param.roleBalance, level: param.roleLevel, vipLevel: param.vipLevel, thirdGameZoneId: param.serverId, thirdGameZoneName: param.serverName, guildName: param.guildName, submitType: param.submitType, clientTime: getTime() };n.sign = create_sign(n, dybAppKey);wx.request({ url: _DybUrl + '/integration/minigame/reportRoleInfo', header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'POST', data: n, dataType: 'json', success: function (res) {
          if (param.submitType == 2) {
            Dyb.upCreateRoleData(param, callback);
          }if (res.data.code == 200) {
            var jsonArr = { code: 1, msg: '上报成功', data: res.data };
          } else {
            var jsonArr = { code: 0, msg: '上报失败', data: res.data };
          }callback(jsonArr);return;
        }, fail: function (res) {
          var jsonArr = { code: 0, msg: '上报失败', data: res.data };callback(jsonArr);
        }, complete: function (res) {} });
    });
  }, upCreateRoleData(param, callback) {
    envVersion == 'develop' && console.log('----------upCreateRoleData-------------');checkLogin(function () {
      var dev_type = dybSource;var app_type = "android";var device1 = "";var device2 = "";if (dev_type == 2) {
        app_type = "ios";device1 = _open_id;
      } else {
        device2 = _open_id;
      }var adData = { game_id: adGameId, app_name: "com.xyx", conv_type: "MOBILEAPP_ROLE", app_type: app_type, device1: device1, device2: device2, user_id: dybUserId, time: Math.floor(new Date().getTime() / 1000), player_id: param.roleId };adData.sign = create_ad_sign(adData, adAppkey);adData.ip = "0000";adData.ver = 3;adData.ad_id = dyb_ad_id;adData.appsflyer_id = aid;adData.advertising_id = traceid;adData.device_type = dybModel;wx.request({ url: adUrl, data: adData, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {
          var jsonArr = { code: 1, msg: '创角上报成功', data: res.data };
        }, fail: function (res) {
          var jsonArr = { code: 0, msg: '创角上报失败', data: res.data };
        }, complete: function (res) {} });
    });
  }, msgCheck(param, callback) {
    envVersion == 'develop' && console.log('----------msgCheck-------------');checkLogin(function () {
      var n = { appId: dybAppId, advChannel: dybChannel, userId: dybUserId, scene: param.scene, content: param.content, time: Math.floor(new Date().getTime() / 1000) };n.sign = create_sign(n, dybAppKey);envVersion == 'develop' && console.log(n, "安全检查");wx.request({ url: _DybUrl + '/integration/minigame/msgCheck', header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'POST', data: n, dataType: 'json', success: function (res) {
          if (res.data.code == 200) {
            var jsonArr = { code: 1, msg: res.data.error_msg, data: res.data.data };callback(jsonArr);
          } else {
            var jsonArr = { code: 0, msg: res.data.error_msg, data: res.data.data };callback(jsonArr);
          }return;
        } });
    });
  }, paylimit(param, _callback) {
    envVersion == 'develop' && console.log('----------paylimit-------------');checkLogin(function () {
      var argcList = { game_appid: _gameAppid, channel_id: channel_id, sub_channel_id: sub_channel_id, openid: _open_id, edition: envVersion, system: _system, create_time: Math.floor(new Date().getTime() / 1000) };var signParam = {};var errData = '';signParam.game_appid = argcList.game_appid;signParam.channel_id = argcList.channel_id;signParam.openid = argcList.openid;signParam.edition = argcList.edition;signParam.create_time = argcList.create_time;argcList.sign = sha1(signParam, _secret);argcList.sign_type = _signType;wx.request({ url: _DybUrl + '/cps/pay_setting', data: argcList, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, success: function (res) {
          let result = res.data;_callback(result);
        }, fail: function () {
          _callback({ code: 0, msg: '网络请求错误' });
        } });
    });
  }, timing(param, _callback) {
    envVersion == 'develop' && console.log('----------timing-------------');checkLogin(function () {
      var arrList = { openid: _open_id, game_appid: _gameAppid, channel_id: channel_id, sub_channel_id: sub_channel_id, timing: param.timing, create_time: Math.floor(new Date().getTime() / 1000) };var signParam = {};signParam.openid = arrList.openid;signParam.game_appid = arrList.game_appid;signParam.channel_id = arrList.channel_id;signParam.sub_channel_id = arrList.sub_channel_id;signParam.timing = arrList.timing;signParam.create_time = arrList.create_time;arrList.sign = sha1(signParam, _secret);arrList.sign_type = _signType;wx.request({ url: _DybUrl + '/cps_timing', data: arrList, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, complete: function (res) {
          _callback(res.data);
        } });
    });
  }, valueuser(param, _callback) {
    envVersion == 'develop' && console.log('----------valueuser-------------');checkLogin(function () {
      var arrList = { openid: _open_id, game_appid: _gameAppid, channel_id: channel_id, sub_channel_id: sub_channel_id, create_time: Math.floor(new Date().getTime() / 1000) };var signParam = {};signParam.openid = arrList.openid;signParam.game_appid = arrList.game_appid;signParam.channel_id = arrList.channel_id;signParam.sub_channel_id = arrList.sub_channel_id;signParam.create_time = arrList.create_time;arrList.sign = sha1(signParam, _secret);arrList.sign_type = _signType;wx.request({ url: _DybUrl + '/cps/valueuser', data: arrList, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, complete: function (res) {
          _callback(res.data);
        } });
    });
  }, onshare(param, _callback) {
    envVersion == 'develop' && console.log('----------设置转发-------------');wx.hideShareMenu();wx.showShareMenu({ showShareItems: ['shareAppMessage', 'shareTimeline'] });wx.onShareAppMessage(() => ({ title: param.title, imageUrl: param.imageUrl, query: '', success: function (e) {}, fail: function (e) {
        _callback({ code: 0, msg: '取消分享' });
      } }));
  }, share(param, _callback) {
    envVersion == 'develop' && console.log('----------主动转发-------------');checkLogin(function () {
      if (!param.title) {
        param.title = dybShareTitle;
      }if (!param.imageUrl) {
        param.imageUrl = dybShareImageUrl;
      }var queryStr = param.query ? param.query : "";wx.shareAppMessage({ title: param.title, imageUrl: param.imageUrl, query: queryStr, success: function (e) {
          _callback({ code: 1, msg: '分享成功' });
        }, fail: function (e) {
          _callback({ code: 0, msg: '取消分享' });
        } });
    });
  }, createVideoAd(param, _callback) {
    envVersion == 'develop' && console.log('----------createVideoAd-------------');let videoAd = wx.createRewardedVideoAd(param);videoAd.onError(function (res) {
      res.code = 0;res.msg = res.errMsg;_callback(res);
    });videoAd.onClose(function (res) {
      let post_data = { ad_type: 'watch' };Dyb.advertisement(post_data, function (callback) {
        callback.state = res.state;callback.compId = res.compId;callback.isEnded = res.isEnded;_callback(callback);
      });
    });videoAd.onLoad(function (res) {
      let post_data = { ad_type: 'video_click' };Dyb.advertisement(post_data, function (callback) {
        callback.state = res.state;callback.compId = res.compId;_callback(callback);
      });
    });videoAd.load().then(res => {
      videoAd.show().then(e => {
        e.code = 1;e.msg = 'success';_callback(e);
      }).catch(err => {
        res.code = 0;res.msg = err.errMsg;_callback(err);
      });
    }).catch(err => {
      err.code = 0;err.msg = err.errMsg;_callback(err);
    });
  }, createBannerAd(param, _callback) {
    envVersion == 'develop' && console.log('----------createBannerAd-------------');let info = wx.getSystemInfoSync();if (param.style.width > info.windowWidth) {
      param.style.width = info.windowWidth;
    }if (bannerAd) {
      bannerAd.destroy();
    }const bannerAd = wx.createBannerAd(param);if (param.show) {
      bannerAd.onResize(size => {
        bannerAd.show().then(res => {
          let post_data = { ad_type: 'banner' };Dyb.advertisement(post_data, function (callback) {
            console.log(callback, 'banner广告');callback.state = res.state;callback.status = res.status;callback.width = size.width;callback.height = size.height;callback.compId = res.compId;_callback(callback);
          });
        }).catch(res => {
          res.code = 0;res.msg = res.errMsg;_callback(res);
        });
      });
    } else {
      bannerAd.hide().then(res => {
        res.code = 1;res.msg = 'success';_callback(res);
      });
    }bannerAd.onError(res => {
      res.code = 0;res.msg = res.errMsg;_callback(res);
    });bannerAd.onLoad(res => {
      res.code = 1;res.msg = 'success';_callback(res);
    });
  }, advertisement(param, _callback) {
    envVersion == 'develop' && console.log('----------advertisement-------------');checkLogin(function () {
      var arrList = { openid: _open_id, game_appid: _gameAppid, channel_id: channel_id, sub_channel_id: sub_channel_id, date: Math.floor(new Date().getTime() / 1000) };var signParam = {};signParam.openid = arrList.openid;signParam.game_appid = arrList.game_appid;signParam.channel_id = arrList.channel_id;signParam.sub_channel_id = arrList.sub_channel_id;signParam.date = arrList.date;arrList.sign = sha1(signParam, _secret);arrList.sign_type = _signType;if (param.ad_type == 'video_click') {
        url = _DybUrl + '/videoClick';
      } else if (param.ad_type == 'watch') {
        url = _DybUrl + '/watch';
      } else if (param.ad_type == 'share') {
        url = _DybUrl + '/share';
      } else if (param.ad_type == 'banner') {
        url = _DybUrl + '/banner';
      } else if (param.ad_type == 'push') {
        url = _DybUrl + '/push';
      }wx.request({ url: url, data: arrList, method: 'post', header: { 'content-type': 'application/x-www-form-urlencoded' }, complete: function (res) {
          _callback(res.data);
        } });
    });
  }, alertI: function (alertParam, callback) {
    wx.showModal({ title: '提示', content: '该接口暂无权限', success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      } });
  }, sdk_encrypt: function (data, secret_key, type = 'sha1') {
    var res = Dyb.sdk_sort(data);var str = '';for (var i in res) {
      if (i != 'sign') {
        str += i + '=' + res[i] + '&';
      }
    }str = str.substring(0, str.length - 1);str = str.replace(/\s+/g, "") + secret_key;if (type == 'sha1') {
      var sha = CryptoJS.SHA1(str);
    } else {
      var sha = CryptoJS.MD5(str);
    }var sign = sha.toString();return sign;
  }, sdk_sort: function (a) {
    var c = [];for (var i in a) {
      c.push(i);
    }c.sort();var r = [];for (var j in c) {
      r[c[j]] = a[c[j]];
    }return r;
  } };module.exports = { getDyb: getDyb };