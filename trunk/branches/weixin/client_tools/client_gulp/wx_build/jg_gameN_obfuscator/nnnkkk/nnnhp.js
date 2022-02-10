var A = wx.$N;
/** * 漫方SDK * by 陌上老农 2021-06 * version:1.0.9 */!function () {
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
    console.log(A[9]);const { query } = wx.getLaunchOptionsSync();const query_params = decodeURIComponent(query.query);var channel = new Object();if (query_params != A[10] && query_params != "") {
      channel[A[11]] = query_params;channel[A[12]] = 10000;
    } else {
      const scene_params = decodeURIComponent(query.scene);if (scene_params == A[10]) {
        return channel;
      }var strs = scene_params.split("&");for (var i = 0; i < strs.length; i++) {
        channel[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }return channel;
  }role(data, success, fail) {
    console.log(A[13]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[15]);return;
    }if (!data.server) {
      console.log(A[16]);return;
    }if (!data.server_name) {
      console.log("缺少server_name");return;
    }if (!data.role) {
      console.log(A[17]);return;
    }if (!data.role_name) {
      console.log("缺少role_name");return;
    }if (!data.level) {
      console.log(A[18]);return;
    }if (data.type == undefined || data.type == "" || data.type == null) {
      data.type = 0;
    }data[A[19]] = this.sign(data);var url = data.host_url + A[20];this.ajaxRequest(url, data, success, fail);
  }order(data, success, fail) {
    console.log(A[21]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[15]);return;
    }if (!data.server) {
      console.log(A[16]);return;
    }if (!data.role) {
      console.log(A[17]);return;
    }if (!data.amount) {
      console.log(A[22]);return;
    }data[A[19]] = this.sign(data);var url = data.host_url + A[23];this.ajaxRequest(url, data, success, fail);
  }gameLogin(data, success, fail) {
    console.log(A[24]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.code) {
      console.log(A[25]);return;
    }var url = data.host_url + A[26];this.ajaxRequest(url, data, success, fail);
  }gameToken(data, success, fail) {
    console.log(A[27]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[28];this.ajaxRequest(url, data, success, fail);
  }midasNotice(data, success, fail) {
    console.log(A[29]);if (data.game_env == undefined || data.game_env == "" || data.game_env == null) {
      data.game_env = 0;
    }if (!data.offer_id) {
      console.log(A[30]);return;
    }if (!data.currency_type) {
      console.log(A[31]);return;
    }if (!data.amount) {
      console.log(A[22]);return;
    }if (!data.server) {
      console.log(A[16]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.account) {
      console.log(A[15]);return;
    }if (!data.role) {
      console.log(A[17]);return;
    }var _this = this;var _is_success = false;wx.requestMidasPayment({ currencyType: data.currency_type, env: data.game_env, mode: A[32], offerId: data.offer_id, buyQuantity: data.amount, platform: A[33], zoneId: "1", success(res) {
        _is_success = true;console.log(A[34]);var url = data.host_url + A[35];_this.ajaxRequest(url, data, success, fail);
      }, fail(f) {
        console.log(f);
      }, complete(r) {
        if (_is_success == false) {
          console.log(A[36]);var url = data.host_url + A[35];_this.ajaxRequest(url, data, success, fail);
        }
      } });
  }midasOrderSubmit(data, success, fail) {
    console.log(A[37]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[15]);return;
    }if (!data.server) {
      console.log(A[16]);return;
    }if (!data.role) {
      console.log(A[17]);return;
    }if (!data.extend) {
      console.log(A[38]);return;
    }if (!data.amount) {
      console.log(A[22]);return;
    }data[A[19]] = this.sign(data);var url = data.host_url + A[39];this.ajaxRequest(url, data, success, fail);
  }checkWords(data, success, fail) {
    console.log(A[40]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }if (!data.account) {
      console.log(A[15]);return;
    }if (!data.scene) {
      console.log(A[41]);return;
    }if (!data.content) {
      console.log(A[42]);return;
    }var url = data.host_url + A[43];this.ajaxRequest(url, data, success, fail);
  }gameCenter(data, success, fail) {
    console.log(A[44]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[45];this.ajaxRequest(url, data, success, fail);
  }openGame(data, success, fail) {
    console.log(A[46]);if (!data.app_id) {
      console.log(A[47]);return;
    }wx.navigateToMiniProgram({ appId: data.app_id, path: data.path, envVersion: data.env_version, success(res) {}, fail(f) {} });
  }vipDesc(data, success, fail) {
    console.log(A[48]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[49];this.ajaxRequest(url, data, success, fail);
  }wxFollowSteps(data, success, fail) {
    console.log(A[50]);if (!data.host_url) {
      console.log(A[14]);return;
    }if (!data.game_key) {
      console.log(A[7]);return;
    }var url = data.host_url + A[51];this.ajaxRequest(url, data, success, fail);
  }openCustomerService() {
    wx.showModal({ title: A[52], content: A[53], showCancel: false, confirmText: A[54], success(res) {
        wx.openCustomerServiceConversation({ showMessageCard: true, sendMessageTitle: A[55], sendMessageImg: A[56] });
      } });
  }
}