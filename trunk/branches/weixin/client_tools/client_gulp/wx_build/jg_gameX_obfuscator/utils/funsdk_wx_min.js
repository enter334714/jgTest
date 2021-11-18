var u = wx.$x;
/**
 * 漫方SDK
 * by 陌上老农 2021-06
 */
!function () {
  "use strict";
};

export default class FunGame {
  constructor() {
    this.host = "https://funsdk.bigrnet.com";
  }sign(params) {
    var _sign = "";var keys = Object.keys(params);keys.sort();keys.forEach(key => {
      if (key != "host_url") {
        _sign += params[key];
      }
    });return _sign;
  }setParameter(url, name, value) {
    url = url.replace(/(#.*)/ig, "");var reg = new RegExp("([\?&])" + name + "=([^&]*)(?=&|$)", "i");if (reg.test(url)) {
      return url.replace(reg, "$1" + name + "=" + value);
    } else {
      return url + (url.indexOf("?") == -1 ? "?" : "&") + name + "=" + value;
    }
  }ajaxRequest(request_url, params, success, fail) {
    request_url = this.setParameter(request_url, "v", Math.random());let _this = this;wx.request({ url: request_url, header: { 'content-type': 'application/x-www-form-urlencoded' }, method: 'POST', data: params, dataType: "json", success: function (res) {
        success && success(res.data);
      }, fail: function (res) {
        fail && fail(res);
      } });
  }game(data, success, fail) {
    console.log("<<<----游戏---->>>");if (!data.game_key) {
      console.log("缺少game_key");return;
    }var url = this.host + "/index/game";this.ajaxRequest(url, data, success, fail);
  }wxChannelCode() {
    console.log("<<<----渠道---->>>");const { query } = wx.getLaunchOptionsSync();const query_params = decodeURIComponent(query.query);var channel = new Object();if (query_params != "undefined" && query_params != "") {
      channel["code"] = query_params;channel["type"] = 10000;
    } else {
      const scene_params = decodeURIComponent(query.scene);if (scene_params == "undefined") {
        return channel;
      }var strs = scene_params.split("&");for (var i = 0; i < strs.length; i++) {
        channel[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }return channel;
  }role(data, success, fail) {
    console.log("<<<----角色---->>>");if (!data.host_url) {
      console.log("缺少host_url");return;
    }if (!data.game_key) {
      console.log("缺少game_key");return;
    }if (!data.account) {
      console.log("缺少account");return;
    }if (!data.server) {
      console.log("缺少server");return;
    }if (!data.server_name) {
      console.log("缺少server_name");return;
    }if (!data.role) {
      console.log("缺少role");return;
    }if (!data.role_name) {
      console.log("缺少role_name");return;
    }if (!data.level) {
      console.log("缺少level");return;
    }if (data.type == undefined || data.type == "" || data.type == null) {
      data.type = 0;
    }data["sign"] = this.sign(data);var url = data.host_url + "/index/role";this.ajaxRequest(url, data, success, fail);
  }order(data, success, fail) {
    console.log("<<<----订单---->>>");if (!data.host_url) {
      console.log("缺少host_url");return;
    }if (!data.game_key) {
      console.log("缺少game_key");return;
    }if (!data.account) {
      console.log("缺少account");return;
    }if (!data.server) {
      console.log("缺少server");return;
    }if (!data.role) {
      console.log("缺少role");return;
    }if (!data.amount) {
      console.log("缺少amount");return;
    }data["sign"] = this.sign(data);var url = data.host_url + "/order/index";this.ajaxRequest(url, data, success, fail);
  }gameLogin(data, success, fail) {
    console.log("<<<----登录---->>>");if (!data.host_url) {
      console.log("缺少host_url");return;
    }if (!data.game_key) {
      console.log("缺少game_key");return;
    }if (!data.code) {
      console.log("缺少code");return;
    }var url = data.host_url + "/login/code";this.ajaxRequest(url, data, success, fail);
  }gameToken(data, success, fail) {
    console.log("<<<----Token---->>>");if (!data.host_url) {
      console.log("缺少host_url");return;
    }if (!data.game_key) {
      console.log("缺少game_key");return;
    }var url = data.host_url + "/index/game-access-token";this.ajaxRequest(url, data, success, fail);
  }midasNotice(data, success, fail) {
    console.log("<<<----米大师---->>>");if (data.game_env == undefined || data.game_env == "" || data.game_env == null) {
      data.game_env = 0;
    }if (!data.offer_id) {
      console.log("缺少offer_id");return;
    }if (!data.currency_type) {
      console.log("缺少currency_type");return;
    }if (!data.amount) {
      console.log("缺少amount");return;
    }if (!data.server) {
      console.log("缺少server");return;
    }if (!data.game_key) {
      console.log("缺少game_key");return;
    }if (!data.host_url) {
      console.log("缺少host_url");return;
    }if (!data.account) {
      console.log("缺少account");return;
    }if (!data.role) {
      console.log("缺少role");return;
    }var _this = this;wx.requestMidasPayment({ currencyType: data.currency_type, env: data.game_env, mode: "game", offerId: data.offer_id, buyQuantity: data.amount, platform: "android", zoneId: "1", success(res) {
        console.log("<<<----midas支付成功---->>>");var url = data.host_url + "/notice/midas";_this.ajaxRequest(url, data, success, fail);
      }, fail(f) {
        console.log(f);
      } });
  }checkWords(data, success, fail) {
    console.log("<<<----敏感词---->>>");if (!data.game_key) {
      console.log("缺少game_key");return;
    }if (!data.account) {
      console.log("缺少account");return;
    }if (!data.scene) {
      console.log("缺少scene");return;
    }if (!data.content) {
      console.log("缺少content");return;
    }var url = data.host_url + "/index/check-words";this.ajaxRequest(url, data, success, fail);
  }
}