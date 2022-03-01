var F = wx.$D;
// ** sq_xgamesdk v1.1
var config = { game_id: '', /*10003*/package_name: '', /*cq_wxmin_1*/package_version: '1', channel_id: 50 };
var SQ_XGAMESDK = xgamesdk();var HOST = 'https://xzsdk.wdiyi.com';var game_version = '';var D1W4I2X = null;var is_init = 0;
function xgamesdk() {
  var a = {};return { order_info: {}, init: function (g, h) {
      console.log("SQ_XGAMESDK:CP调用init接口");game_version = g && g.game_version ? g.game_version : 0;var b = g && g.game_id ? g.game_id : "";var d = g && g.package_name ? g.package_name : "";var e = g && g.package_version ? g.package_version : "";if (b == "" || d == "" || e == "") {
        h && h(0, {}, "初始化失败");return;
      }config.game_id = b;config.package_name = d;config.package_version = e;var f = wx.getStorageSync("xz_pt_uuid");var c;if (!f) {
        f = this.uuid(16, 32);wx.setStorageSync("xz_pt_uuid", f);c = 1;
      } else {
        c = 0;
      }this.active({ is_first_active: c });wx.showShareMenu();if (game_version) {
        this.checkDev(game_version, function (i) {
          h && h(1, i, "初始化成功");
        });
      } else {
        h && h(1, g, "初始化成功");
      }is_init = 1;
    }, checkDev: function (b, c) {
      console.log("SQ_XGAMESDK:检查游戏版本");wx.request({ url: HOST + "/?ct=xgame&ac=checkDev", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { game_id: config.game_id, game_version: b, package_version: config.package_version, channel_id: config.channel_id, package_name: config.package_name }, success: function (d) {
          console.log("SQ_XGAMESDK:获取游戏版本结果");console.log(d.data);if (d.statusCode == 200) {
            var e = d.data;if (e.state) {
              c && c({ develop: e.data.develop });
            } else {
              c && c({ develop: 0 });
            }
          } else {
            c && c({ develop: 0 });
          }
        }, fail: function (d) {
          console.log(d);
        } });
    }, active: function (d, g) {
      var f = this;var e = wx.getLaunchOptionsSync();var c = JSON.stringify(e);console.log("SQ_XGAMESDK:小游戏启动参数");console.log(JSON.stringify(e));if (d.is_first_active && e.query) {
        if (e.query.adcode) {
          wx.setStorageSync("xz_pt_adcode", e.query.adcode);
        }
      }var b = f.getCommonParams();b.launch_options = c;b.is_first_active = d.is_first_active;wx.request({ url: HOST + "/?ct=xgame&ac=active", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: b, success: function (h) {
          console.log("SQ_XGAMESDK:初始化接口结果：");console.log(h.data);
        } });
    }, login: function (c, f) {
      var e = this;console.log("SQ_XGAMESDK:调起登录");a["login"] = typeof f == "function" ? f : null;if (!is_init) {
        a["login"] && a["login"](0, {}, "请先初始化平台sdk");return;
      }var d = wx.getLaunchOptionsSync();var b = JSON.stringify(d);wx.login({ success: function (g) {
          console.log("微信登录成功返回" + JSON.stringify(g));if (g.code) {
            var h = e.getCommonParams();h["code"] = g.code;h["launch_options"] = b;wx.request({ url: HOST + "/?ct=xgame&ac=login", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: h, success: function (j) {
                console.log("SQ_XGAMESDK:登录接口结果：");console.log(j.data);if (j.statusCode == 200) {
                  var l = j.data;if (l.state) {
                    var i = { uid: l.data.uid, code: l.data.code };try {
                      wx.setStorageSync("xz_pt_uid", l.data.uid);wx.setStorageSync("xz_pt_sdk_token", l.data.sdk_token);wx.setStorageSync("xz_pt_sk", l.data.sk);
                    } catch (m) {}a["login"] && a["login"](1, i);if (l.data.tips && l.data.tips.content) {
                      var k = l.data.tips.title || "温馨提示";wx.showModal({ title: k, content: l.data.tips.content, confirmText: "我知道了", showCancel: false });
                    }
                  } else {
                    a["login"] && a["login"](0, {}, l.msg);
                  }
                } else {
                  a["login"] && a["login"](0, {}, "平台服务器请求错误");
                }
              } });
          } else {
            a["login"] && a["login"](0, {}, g.errMsg);
          }
        }, fail: function (g) {
          console.log("微信登录失败" + JSON.stringify(g));if (g.errMsg.indexOf("auth deny") > -1 || g.errMsg.indexOf("auth denied") > -1) {
            a["login"] && a["login"](0, {}, g.errMsg);
          }
        } });
    }, role: function (d) {
      d = d || {};var c = wx.getStorageSync("xz_pt_uid");if (!is_init) {
        return;
      }var b = {};b["game_id"] = config.game_id;b["package_name"] = config.package_name;b["uid"] = c;b["role_id"] = d.role_id || "";b["role_level"] = d.role_level || "";b["role_name"] = d.role_name || "";b["server_id"] = d.server_id || "";b["server_name"] = d.server_name || "";b["update_time"] = d.update_time || "";wx.request({ url: HOST + "/?ct=xgame&ac=role", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: b, success: function (e) {
          console.log("SQ_XGAMESDK:角色上报接口结果：");console.log(e.data);
        } });
    }, pay: function (b, d) {
      var c = this;a["pay"] = typeof d == "function" ? d : null;if (!is_init) {
        a["pay"] && a["pay"](0, {}, "请先初始化平台sdk");return;
      }wx.checkSession({ success: function () {
          c.makeOrder(b, d);
        }, fail: function () {
          console.log("SQ_XGAMESDK:session过期重新登录");c.login({}, function () {
            c.makeOrder(b, d);
          });
        } });
    }, makeOrder: function (f, i) {
      console.log("SQ_XGAMESDK:调起支付，CP传值：");console.log(f);var h = this;var g = wx.getStorageSync("xz_pt_sdk_token");var c = wx.getStorageSync("xz_pt_uid");var e = wx.getStorageSync("xz_pt_sk");if (!g || !e) {
        a["pay"] && a["pay"](0, {}, "用户未登录，支付失败！");return;
      }var b = h.getCommonParams();b["uid"] = c;b["cp_order_num"] = f.cp_order_num;b["product_id"] = f.product_id;b["server_id"] = f.server_id;b["server_name"] = f.server_name;b["role_id"] = f.role_id;b["role_level"] = f.role_level;b["role_name"] = f.role_name;b["total_fee"] = f.total_fee;b["ext"] = f.ext;b["sdk_token"] = g;b["session_key"] = e;h.order_info = b;var d = wx.getSystemInfoSync();wx.request({ url: HOST + "/?ct=xgame&ac=makeOrder", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: b, success: function (j) {
          console.log("SQ_XGAMESDK:订单创建接口");console.log(j.data);if (j.statusCode == 200) {
            var k = j.data;if (k.state) {
              if (d.platform == "android" || d.platform == "windows" || d.platform == "devtools") {
                if (k.data.android_pay) {
                  h.virtualPay(k.data);
                } else {
                  wx.showModal({ title: "温馨提示", content: "游戏不支持支付", confirmText: "我知道了", showCancel: false });
                }
              } else {
                if (k.data.ios_pay) {
                  if (k.data.ios_pay_type == 1) {
                    if (k.data.ios_pay_appid) {
                      h.jminPay(k.data);
                    } else {
                      wx.showModal({ title: "支付提示", content: "由于苹果政策限制，暂时无法使用支付", confirmText: "我知道了", showCancel: false });
                    }
                  }
                } else {
                  wx.showModal({ title: "支付提示", content: "由于苹果政策限制，暂时无法使用支付", confirmText: "我知道了", showCancel: false });
                }
              }
            } else {
              a["pay"] && a["pay"](0, {}, k.msg);
            }
          } else {
            a["pay"] && a["pay"](0, {}, "请求平台服务器失败");
          }
        } });
    }, virtualPay: function (b) {
      var c = this;if (b.buyQuantity <= b.balance) {
        console.log("SQ_XGAMESDK:当前剩余游戏币足够");wx.showModal({ title: "支付提示", content: "您剩余" + b.balance + "个游戏币未消费，本次支付扣除" + b.buyQuantity + "游戏币", showCancel: false, confirmText: "我知道了", success: function () {
            c.midasDeductBalance(b);
          } });
      } else {
        console.log("SQ_XGAMESDK:当前剩余游戏币不足，调起米大师支付");console.log(b);wx.requestMidasPayment({ mode: "game", env: b.env, offerId: b.offerId, currencyType: b.currencyType, platform: "android", buyQuantity: b.buyQuantity, zoneId: b.zoneId, success: function (d) {
            if (d.errMsg == "requestMidasPayment:ok") {
              console.log("SQ_XGAMESDK:米大师支付完成");c.midasDeductBalance(b);
            }
          }, fail: function (d) {
            if (d.errMsg.indexOf("用户取消") !== -1) {
              a["pay"] && a["pay"](0, {}, "用户取消支付");
            } else {
              a["pay"] && a["pay"](0, {}, "支付失败:" + d.errMsg + "(" + d.errCode + ")");
            }
          }, complete: function (d) {} });
      }
    }, jminPay: function (b) {
      var c = this;console.log(b);console.log("pages/payment/result?token_id=" + b.tokenId);wx.navigateToMiniProgram({ appId: b.ios_pay_appid, path: "pages/payment/result?token_id=" + b.tokenId, extraData: {}, envVersion: "release", success: function () {} });
    }, midasDeductBalance: function (e, b) {
      console.log("SQ_XGAMESDK:扣除游戏币");var g = this;var f = wx.getStorageSync("xz_pt_sdk_token");var c = wx.getStorageSync("xz_pt_uid");var d = wx.getStorageSync("xz_pt_sk");wx.request({ url: HOST + "/?ct=xgame&ac=midasPay", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { sdk_token: f, uid: c, pt_order_num: e.pt_order_num, time: e.time, sign: e.sign, session_key: d }, success: function (i) {
          console.log("SQ_XGAMESDK:米大师扣除游戏币结果");console.log(i.data);if (i.statusCode == 200) {
            if (i.data.state == 1) {
              var h = { cp_order_num: g.order_info.cp_order_num, pt_order_num: e.pt_order_num, total_fee: g.order_info.total_fee, ext: g.order_info.ext };a["pay"] && a["pay"](1, h, "支付成功");
            } else {
              a["pay"] && a["pay"](0, {}, "支付失败");
            }
          }
        }, fail: function () {} });
    }, uuid: function (e, b) {
      var g = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var d = [],
          c;e = e || g.length;if (b) {
        for (c = 0; c < b; c++) {
          d[c] = g[0 | Math.random() * e];
        }
      } else {
        var f;d[8] = d[13] = d[18] = d[23] = "-";d[14] = "4";for (c = 0; c < 36; c++) {
          if (!d[c]) {
            f = 0 | Math.random() * 16;d[c] = g[c == 19 ? f & 3 | 8 : f];
          }
        }
      }return d.join("");
    }, getCommonParams: function () {
      var d = wx.getSystemInfoSync();var c = wx.getStorageSync("xz_pt_adcode");var b = wx.getStorageSync("xz_pt_uuid");return { game_id: config.game_id, package_name: config.package_name, package_version: config.package_version, channel_id: config.channel_id, uuid: b, device_name: d.model, device_version: d.system, game_version: game_version, platform: d.platform, device_type: d.platform == "android" ? 2 : 1, adcode: c };
    }, msgCheck: function (d, e) {
      console.log("[SQ_XGAMESDK]查看文本是否有违规内容");d = d || "";var c = wx.getStorageSync("xz_pt_uid");if (!is_init) {
        return;
      }var b = {};b["game_id"] = config.game_id;b["package_name"] = config.package_name;b["uid"] = c;b["content"] = d;wx.request({ url: HOST + "/?ct=xgame&ac=msgCheck", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: b, success: function (f) {
          console.log("SQ_XGAMESDK:查看文本是否有违规内容接口结果：");console.log(f.data);var g = f.data;if (g.state) {
            e && e(1, { is_sec: g.data.is_sec });
          } else {
            e && e(0, {}, g.msg);
          }
        } });
    }, log: function (b) {
      var c = JSON.stringify(b);wx.request({ url: HOST + "/?ct=xgame&ac=log", method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { content: c }, success: function (d) {}, fail: function () {} });
    } };
};
function run(method, data, callback) {
  method in SQ_XGAMESDK && SQ_XGAMESDK[method](data, callback);
}exports.D12I = function (data, callback) {
  run("init", data, callback);
};exports.sdkLogin = function (callback) {
  run("login", "", callback);
};exports.sdkPay = function (data, callback) {
  run("pay", data, callback);
};exports.sdkRole = function (data) {
  run("role", data);
};exports.sdkGetConfig = function () {
  return { game_id: config.game_id, package_name: config.package_name, package_version: config.package_version };
};exports.sdkOpenCustomerService = function () {
  wx.openCustomerServiceConversation();
};exports.sdkMsgCheck = function (data, callback) {
  run('msgCheck', data, callback);
};