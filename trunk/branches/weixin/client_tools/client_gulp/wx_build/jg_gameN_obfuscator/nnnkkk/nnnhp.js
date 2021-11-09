var A = wx.$N;
/**
 * 漫方SDK
 * by 陌上老农 2021-06
 */
!function () {
  "use strict";
};

export default class FunGame {
  constructor() {
    this.host = A[200000];
  }sign(params) {
    var _sign = "";var keys = Object.keys(params);keys.sort();keys.forEach(key => {
      if (key != A[200001]) {
        _sign += params[key];
      }
    });return _sign;
  }setParameter(url, name, value) {
    url = url.replace(/(#.*)/ig, "");var reg = new RegExp(A[200002] + name + "=([^&]*)(?=&|$)", "i");if (reg.test(url)) {
      return url.replace(reg, "$1" + name + "=" + value);
    } else {
      return url + (url.indexOf("?") == -1 ? "?" : "&") + name + "=" + value;
    }
  }ajaxRequest(request_url, params, success, fail) {
    request_url = this.setParameter(request_url, "v", Math.random());let _this = this;wx.request({ url: request_url, header: { 'content-type': A[200003] }, method: A[200004], data: params, dataType: A[200005], success: function (res) {
        success && success(res.data);
      }, fail: function (res) {
        fail && fail(res);
      } });
  }game(data, success, fail) {
    console.log(A[200006]);if (!data.game_key) {
      console.log(A[200007]);return;
    }var url = this.host + A[200008];this.ajaxRequest(url, data, success, fail);
  }wxChannelCode() {
    console.log(A[200009]);const { query } = wx.getLaunchOptionsSync();const query_params = decodeURIComponent(query.query);var channel = new Object();if (query_params != A[200010] && query_params != "") {
      channel[A[200011]] = query_params;channel[A[200012]] = 10000;
    } else {
      const scene_params = decodeURIComponent(query.scene);if (scene_params == A[200010]) {
        return channel;
      }var strs = scene_params.split("&");for (var i = 0; i < strs.length; i++) {
        channel[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }return channel;
  }role(data, success, fail) {
    console.log(A[200013]);if (!data.host_url) {
      console.log(A[200014]);return;
    }if (!data.game_key) {
      console.log(A[200007]);return;
    }if (!data.account) {
      console.log(A[200015]);return;
    }if (!data.server) {
      console.log(A[200016]);return;
    }if (!data.server_name) {
      console.log("缺少server_name");return;
    }if (!data.role) {
      console.log(A[200017]);return;
    }if (!data.role_name) {
      console.log("缺少role_name");return;
    }if (!data.level) {
      console.log(A[200018]);return;
    }if (data.type == undefined || data.type == "" || data.type == null) {
      data.type = 0;
    }data[A[200019]] = this.sign(data);var url = data.host_url + A[200020];this.ajaxRequest(url, data, success, fail);
  }order(data, success, fail) {
    console.log(A[200021]);if (!data.host_url) {
      console.log(A[200014]);return;
    }if (!data.game_key) {
      console.log(A[200007]);return;
    }if (!data.account) {
      console.log(A[200015]);return;
    }if (!data.server) {
      console.log(A[200016]);return;
    }if (!data.role) {
      console.log(A[200017]);return;
    }if (!data.amount) {
      console.log(A[200022]);return;
    }data[A[200019]] = this.sign(data);var url = data.host_url + A[200023];this.ajaxRequest(url, data, success, fail);
  }gameLogin(data, success, fail) {
    console.log(A[200024]);if (!data.host_url) {
      console.log(A[200014]);return;
    }if (!data.game_key) {
      console.log(A[200007]);return;
    }if (!data.code) {
      console.log(A[200025]);return;
    }var url = data.host_url + A[200026];this.ajaxRequest(url, data, success, fail);
  }gameToken(data, success, fail) {
    console.log(A[200027]);if (!data.host_url) {
      console.log(A[200014]);return;
    }if (!data.game_key) {
      console.log(A[200007]);return;
    }var url = data.host_url + A[200028];this.ajaxRequest(url, data, success, fail);
  }midasNotice(data, success, fail) {
    console.log(A[200029]);if (data.game_env == undefined || data.game_env == "" || data.game_env == null) {
      data.game_env = 0;
    }if (!data.offer_id) {
      console.log(A[200030]);return;
    }if (!data.currency_type) {
      console.log(A[200031]);return;
    }if (!data.amount) {
      console.log(A[200022]);return;
    }if (!data.server) {
      console.log(A[200016]);return;
    }if (!data.game_key) {
      console.log(A[200007]);return;
    }if (!data.host_url) {
      console.log(A[200014]);return;
    }if (!data.account) {
      console.log(A[200015]);return;
    }if (!data.role) {
      console.log(A[200017]);return;
    }var _this = this;wx.requestMidasPayment({ currencyType: data.currency_type, env: data.game_env, mode: A[200032], offerId: data.offer_id, buyQuantity: data.amount, platform: A[200033], zoneId: "1", success(res) {
        console.log(A[200034]);var url = data.host_url + A[200035];_this.ajaxRequest(url, data, success, fail);
      }, fail(f) {
        console.log(f);
      } });
  }checkWords(data, success, fail) {
    console.log(A[200036]);if (!data.game_key) {
      console.log(A[200007]);return;
    }if (!data.account) {
      console.log(A[200015]);return;
    }if (!data.scene) {
      console.log(A[200037]);return;
    }if (!data.content) {
      console.log(A[200038]);return;
    }var url = data.host_url + A[200039];this.ajaxRequest(url, data, success, fail);
  }
}