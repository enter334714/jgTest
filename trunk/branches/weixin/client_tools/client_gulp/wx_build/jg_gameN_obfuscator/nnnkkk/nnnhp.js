var A = wx.$N;
/** * 漫方SDK * by 陌上老农 2022-03 * version:2.0.4 */!function () {
  "use strict";
};export default class FunGame {
  constructor() {
    this.host = A[0];
  }sign(params) {
    var _sign = "";var keys = Object.keys(params);keys.sort();keys.forEach(key => {
      if (key != A[1]) {
        _sign += params[key];
      }
    });return _sign;
  }setParameter(url, name, value) {
    url = url.replace(/(#.*)/ig, "");var reg = new RegExp(A[2] + name + "=([^&]*)(?=&|$)", "i");if (reg.test(url)) {
      return url.replace(reg, "$1" + name + "=" + value);
    } else {
      return url + (url.indexOf("?") == -1 ? "?" : "&") + name + "=" + value;
    }
  }ajaxRequest(request_url, params, success, fail) {
    request_url = this.setParameter(request_url, "v", Math.random());let _this = this;wx.request({ url: request_url, header: { 'content-type': A[3] }, method: A[4], data: params, dataType: A[5], success: function (res) {
        success && success(res.data);
      }, fail: function (res) {
        fail && fail(res);
      } });
  }game(data, success, fail) {
    console.log(A[6]);if (!data.game_key) {
      console.log(A[7]);return;
    }var url = this.host + A[8];this.ajaxRequest(url, data, success, fail);
  }wxChannelCode() {
    console.log(A[9]);const { query } = wx.getLaunchOptionsSync();const query_params = decodeURIComponent(query.query);const clue_token = decodeURIComponent(query.clue_token);const gdt_vid = decodeURIComponent(query.gdt_vid);const wx_extension = JSON.stringify(query);var channel = new Object();channel[A[10]] = '';channel[A[11]] = '';channel[A[12]] = '';if (query_params != A[13] && query_params != "") {
      channel[A[14]] = query_params;channel[A[15]] = 10000;
    } else {
      const scene_params = decodeURIComponent(query.scene);if (scene_params == A[13]) {
        return channel;
      }var strs = scene_params.split("&");for (var i = 0; i < strs.length; i++) {
        channel[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }if (clue_token != A[13] && clue_token != "") {
      channel[A[11]] = clue_token;
    }if (wx_extension != A[13] && wx_extension != '') {
      channel[A[10]] = wx_extension;
    }if (gdt_vid != A[13] && gdt_vid != "") {
      channel[A[12]] = gdt_vid;
    }return channel;
  }role(data, success, fail) {
    console.log(A[16]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.server) {
      console.log(A[19]);return;
    }if (!data.server_name) {
      console.log(A[20]);return;
    }if (!data.role) {
      console.log(A[21]);return;
    }if (!data.role_name) {
      console.log(A[22]);return;
    }if (!data.level) {
      console.log(A[23]);return;
    }if (data.type == undefined || data.type == "" || data.type == null) {
      data.type = 0;
    }data[A[24]] = this.sign(data);var url = data.host_url + A[25];this.ajaxRequest(url, data, success, fail);
  }order(data, success, fail) {
    console.log(A[26]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.server) {
      console.log(A[19]);return;
    }if (!data.role) {
      console.log(A[21]);return;
    }if (!data.amount) {
      console.log(A[27]);return;
    }data[A[24]] = this.sign(data);var url = data.host_url + A[28];this.ajaxRequest(url, data, success, fail);
  }gameLogin(data, success, fail) {
    console.log(A[29]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[30];var _this = this;wx.login({ success(res) {
        data.code = res.code;data.channel_code = "";var channel = _this.wxChannelCode();if (channel && channel[A[14]]) {
          data.channel_code = channel[A[14]];
        }data.clue_token = channel[A[11]];data.click_id = channel[A[12]];data.wx_extension = channel[A[10]];console.log(data);_this.ajaxRequest(url, data, success, fail);
      } });
  }gameToken(data, success, fail) {
    console.log(A[31]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[32];this.ajaxRequest(url, data, success, fail);
  }midasNotice(data, success, fail) {
    console.log(A[33]);if (data.game_env == undefined || data.game_env == "" || data.game_env == null) {
      data.game_env = 0;
    }if (!data.offer_id) {
      console.log(A[34]);return;
    }if (!data.currency_type) {
      console.log(A[35]);return;
    }if (!data.amount) {
      console.log(A[27]);return;
    }if (!data.server) {
      console.log(A[19]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.role) {
      console.log(A[21]);return;
    }var _this = this;this.checkPaySwicth(data, function (res) {
      if (res.data.is_check_pay == 1) {
        if (res.data.is_kf == 1) {
          var orderData = { 'host_url': data.host_url, 'game_key': data.game_key, 'account': data.account, 'server': data.server, 'role': data.role, 'amount': data.amount, 'extend': data.extend };_this.order(orderData, function (orderRes) {
            if (orderRes.code == 0 && orderRes.data.order) {
              _this.openCustomerService();
            }
          });
        } else {
          var gucpk_url = data.host_url + A[36];var gucpk_data = { 'host_url': data.host_url, 'game_key': data.game_key, 'account': data.account };_this.ajaxRequest(gucpk_url, gucpk_data, function (res) {
            if (res.code == 0) {
              wx.showModal({ title: A[37], content: res.data.content, showCancel: false, success: function (showres) {
                  wx.setClipboardData({ data: res.data.text, success(res) {
                      wx.showToast({ title: A[38], icon: A[39], duration: 1500 });
                    } });
                } });
            } else {
              console.log(A[40]);
            }
          });
        }
      } else {
        var _is_success = false;wx.requestMidasPayment({ currencyType: data.currency_type, env: data.game_env, mode: A[41], offerId: data.offer_id, buyQuantity: data.amount, platform: A[42], zoneId: "1", success(res) {
            _is_success = true;console.log(A[43]);var url = data.host_url + A[44];_this.ajaxRequest(url, data, success, fail);
          }, fail(f) {
            console.log(f);
          }, complete(r) {
            if (_is_success == false) {
              console.log(A[45]);var url = data.host_url + A[44];_this.ajaxRequest(url, data, success, fail);
            }
          } });
      }
    }, function () {
      console.log(A[46]);
    });
  }midasOrderSubmit(data, success, fail) {
    console.log(A[47]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.server) {
      console.log(A[19]);return;
    }if (!data.role) {
      console.log(A[21]);return;
    }if (!data.extend) {
      console.log(A[48]);return;
    }if (!data.amount) {
      console.log(A[27]);return;
    }data[A[24]] = this.sign(data);var url = data.host_url + A[49];this.ajaxRequest(url, data, success, fail);
  }checkWords(data, success, fail) {
    console.log(A[50]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.scene) {
      console.log(A[51]);return;
    }if (!data.content) {
      console.log(A[52]);return;
    }var url = data.host_url + A[53];this.ajaxRequest(url, data, success, fail);
  }gameCenter(data, success, fail) {
    console.log(A[54]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[55];this.ajaxRequest(url, data, success, fail);
  }openGame(data, success, fail) {
    console.log(A[56]);if (!data.app_id) {
      console.log(A[57]);return;
    }var p = { "account": data.account, "from_app_id": data.from_app_id, "app_id": data.app_id, "type": 0 };var url = data.host_url + A[58];var _this = this;wx.navigateToMiniProgram({ appId: data.app_id, path: data.path, envVersion: data.env_version, success(res) {
        p.type = 1;_this.ajaxRequest(url, p, success, fail);
      }, fail(f) {
        _this.ajaxRequest(url, p, success, fail);
      } });
  }vipDesc(data, success, fail) {
    console.log(A[59]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[60];this.ajaxRequest(url, data, success, fail);
  }wxFollowSteps(data, success, fail) {
    console.log(A[61]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[62];this.ajaxRequest(url, data, success, fail);
  }openCustomerService() {
    wx.showModal({ title: A[63], content: A[64], showCancel: false, confirmText: A[65], success(res) {
        wx.openCustomerServiceConversation({ showMessageCard: true, sendMessageTitle: A[66], sendMessageImg: A[67] });
      } });
  }phoneDesc(data, success, fail) {
    console.log(A[68]);if (!data.host_url) {
      console.log(A[17]);return;
    }var url = data.host_url + A[69];this.ajaxRequest(url, data, success, fail);
  }phoneCode(data, success, fail) {
    console.log(A[70]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.phone) {
      console.log(A[71]);return;
    }var url = data.host_url + A[72];this.ajaxRequest(url, data, success, fail);
  }phoneBind(data, success, fail) {
    console.log(A[73]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.phone) {
      console.log(A[71]);return;
    }if (!data.code) {
      console.log(A[74]);return;
    }var url = data.host_url + A[75];this.ajaxRequest(url, data, success, fail);
  }gameLoop(data) {
    console.log(A[76]);if (!data.type) {
      console.log(A[77]);return;
    }if (data.type != A[78] && data.type != A[79]) {
      console.log(A[80]);return;
    };if (data.type == A[78] && !data.text) {
      console.log(A[81]);return;
    }if (data.type == A[79] && !data.icon) {
      console.log(A[82]);return;
    }if (!data.style) {
      console.log(A[83]);return;
    }wx.createGameClubButton(data);
  }subscribeToData(data, succFun, errFun) {
    console.log(A[84]);if (!data.tmpl_ids) {
      console.log(A[85]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }const retunData = { 'code': '0', 'msg': A[86], 'data': [] };const url = data.host_url + A[87];const _this = this;const ajaxData = { 'account': data.account, 'game_key': data.game_key, 'pushTmplIds': [] };wx.requestSubscribeMessage({ tmplIds: data.tmpl_ids, success: function (res) {
        if (res.errMsg == A[88]) {
          for (var i = 0; i < data.tmpl_ids.length; i++) {
            if (res[data.tmpl_ids[i]] == A[89]) {
              ajaxData.pushTmplIds.push(data.tmpl_ids[i]);
            }
          }_this.ajaxRequest(url, ajaxData, succFun, errFun);
        }
      }, fail: function (err) {
        retunData.code = err.errCode ? err.errCode : '-1';retunData.msg = A[90];errFun && errFun(retunData);
      } });
  }sharingInMoments(data) {
    console.log(A[91]);if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }const url = data.host_url + A[92];var go_title = '';var go_imageUrl = '';var gc_title = '';var gc_imageUrl = '';wx.showShareMenu({ withShareTicket: true, menus: [A[93], A[94]] });this.ajaxRequest(url, data, function (res) {
      if (res.code == 0) {
        go_title = res.data.CircleOfFriends.title;go_imageUrl = res.data.CircleOfFriends.imageUrl;gc_title = res.data.GroupChat.title;gc_imageUrl = res.data.GroupChat.imageUrl;
      }wx.onShareAppMessage(() => {
        return { title: gc_title, imageUrl: gc_imageUrl };
      });wx.onShareTimeline(() => {
        return { title: go_title, imageUrl: go_imageUrl };
      });
    }, function (err) {
      console.log(A[90], err);
    });
  }checkPaySwicth(data, succFun, errFun) {
    if (!data.host_url) {
      console.log(A[17]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[18]);return;
    }if (!data.server) {
      console.log(A[19]);return;
    }if (!data.role) {
      console.log(A[21]);return;
    }var url = data.host_url + A[95];this.ajaxRequest(url, data, succFun, errFun);
  }
}