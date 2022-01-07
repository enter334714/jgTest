var A = wx.$N;
/** * 漫方SDK * by 陌上老农 2021-06 * version:1.0.9 */!function () {
  "use strict";
};export default class FunGame {
  constructor() {
    this.host = A[228866];
  }sign(params) {
    var _sign = "";var keys = Object.keys(params);keys.sort();keys.forEach(key => {
      if (key != A[228867]) {
        _sign += params[key];
      }
    });return _sign;
  }setParameter(url, name, value) {
    url = url.replace(/(#.*)/ig, "");var reg = new RegExp(A[228868] + name + "=([^&]*)(?=&|$)", "i");if (reg.test(url)) {
      return url.replace(reg, "$1" + name + "=" + value);
    } else {
      return url + (url.indexOf("?") == -1 ? "?" : "&") + name + "=" + value;
    }
  }ajaxRequest(request_url, params, success, fail) {
    request_url = this.setParameter(request_url, "v", Math.random());let _this = this;wx.request({ url: request_url, header: { 'content-type': A[200757] }, method: A[200624], data: params, dataType: A[206484], success: function (res) {
        success && success(res.data);
      }, fail: function (res) {
        fail && fail(res);
      } });
  }game(data, success, fail) {
    console.log(A[228869]);if (!data.game_key) {
      console.log(A[228870]);return;
    }var url = this.host + A[228871];this.ajaxRequest(url, data, success, fail);
  }wxChannelCode() {
    console.log(A[228872]);const { query } = wx.getLaunchOptionsSync();const query_params = decodeURIComponent(query.query);var channel = new Object();if (query_params != A[228873] && query_params != "") {
      channel[A[224138]] = query_params;channel[A[200890]] = 10000;
    } else {
      const scene_params = decodeURIComponent(query.scene);if (scene_params == A[228873]) {
        return channel;
      }var strs = scene_params.split("&");for (var i = 0; i < strs.length; i++) {
        channel[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }return channel;
  }role(data, success, fail) {
    console.log(A[228874]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }if (!data.account) {
      console.log(A[228876]);return;
    }if (!data.server) {
      console.log(A[228877]);return;
    }if (!data.server_name) {
      console.log("缺少server_name");return;
    }if (!data.role) {
      console.log(A[228878]);return;
    }if (!data.role_name) {
      console.log("缺少role_name");return;
    }if (!data.level) {
      console.log(A[228879]);return;
    }if (data.type == undefined || data.type == "" || data.type == null) {
      data.type = 0;
    }data[A[200676]] = this.sign(data);var url = data.host_url + A[228880];this.ajaxRequest(url, data, success, fail);
  }order(data, success, fail) {
    console.log(A[228881]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }if (!data.account) {
      console.log(A[228876]);return;
    }if (!data.server) {
      console.log(A[228877]);return;
    }if (!data.role) {
      console.log(A[228878]);return;
    }if (!data.amount) {
      console.log(A[228882]);return;
    }data[A[200676]] = this.sign(data);var url = data.host_url + A[228883];this.ajaxRequest(url, data, success, fail);
  }gameLogin(data, success, fail) {
    console.log(A[228884]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }if (!data.code) {
      console.log(A[228885]);return;
    }var url = data.host_url + A[228886];this.ajaxRequest(url, data, success, fail);
  }gameToken(data, success, fail) {
    console.log(A[228887]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }var url = data.host_url + A[228888];this.ajaxRequest(url, data, success, fail);
  }midasNotice(data, success, fail) {
    console.log(A[228889]);if (data.game_env == undefined || data.game_env == "" || data.game_env == null) {
      data.game_env = 0;
    }if (!data.offer_id) {
      console.log(A[228890]);return;
    }if (!data.currency_type) {
      console.log(A[228891]);return;
    }if (!data.amount) {
      console.log(A[228882]);return;
    }if (!data.server) {
      console.log(A[228877]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.account) {
      console.log(A[228876]);return;
    }if (!data.role) {
      console.log(A[228878]);return;
    }var _this = this;var _is_success = false;wx.requestMidasPayment({ currencyType: data.currency_type, env: data.game_env, mode: A[228892], offerId: data.offer_id, buyQuantity: data.amount, platform: A[200111], zoneId: "1", success(res) {
        _is_success = true;console.log(A[228893]);var url = data.host_url + A[228894];_this.ajaxRequest(url, data, success, fail);
      }, fail(f) {
        console.log(f);
      }, complete(r) {
        if (_is_success == false) {
          console.log(A[228895]);var url = data.host_url + A[228894];_this.ajaxRequest(url, data, success, fail);
        }
      } });
  }midasOrderSubmit(data, success, fail) {
    console.log(A[228896]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }if (!data.account) {
      console.log(A[228876]);return;
    }if (!data.server) {
      console.log(A[228877]);return;
    }if (!data.role) {
      console.log(A[228878]);return;
    }if (!data.extend) {
      console.log(A[228897]);return;
    }if (!data.amount) {
      console.log(A[228882]);return;
    }data[A[200676]] = this.sign(data);var url = data.host_url + A[228898];this.ajaxRequest(url, data, success, fail);
  }checkWords(data, success, fail) {
    console.log(A[228899]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }if (!data.account) {
      console.log(A[228876]);return;
    }if (!data.scene) {
      console.log(A[228900]);return;
    }if (!data.content) {
      console.log(A[228901]);return;
    }var url = data.host_url + A[228902];this.ajaxRequest(url, data, success, fail);
  }gameCenter(data, success, fail) {
    console.log(A[228903]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }var url = data.host_url + A[228904];this.ajaxRequest(url, data, success, fail);
  }openGame(data, success, fail) {
    console.log(A[228905]);if (!data.app_id) {
      console.log(A[228906]);return;
    }wx.navigateToMiniProgram({ appId: data.app_id, path: data.path, envVersion: data.env_version, success(res) {}, fail(f) {} });
  }vipDesc(data, success, fail) {
    console.log(A[228907]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }var url = data.host_url + A[228908];this.ajaxRequest(url, data, success, fail);
  }wxFollowSteps(data, success, fail) {
    console.log(A[228909]);if (!data.host_url) {
      console.log(A[228875]);return;
    }if (!data.game_key) {
      console.log(A[228870]);return;
    }var url = data.host_url + A[228910];this.ajaxRequest(url, data, success, fail);
  }openCustomerService() {
    wx.showModal({ title: A[228911], content: A[228912], showCancel: false, confirmText: A[228913], success(res) {
        wx.openCustomerServiceConversation({ showMessageCard: true, sendMessageTitle: A[228914], sendMessageImg: A[228915] });
      } });
  }
}