!function (t) {
  var e = null,
      i = { m_Ver: "0.0.21.6beta", m_LogServer: "https://stat.chiji-h5.com/statwx_common.php", m_JsonUrl: "https://jsonconfig.chiji-h5.com/json/", m_IPInfoUrl: "https://wxgame.chiji-h5.com/wxgs_sdk/getcity.action", m_PayUrl: "https://lk-hzres.chiji-h5.com/bgsys/report/", m_RegionObj: null, m_Appid: "", m_Openid: "", m_UnionID: "", m_LogKey: "", m_LogObj: null, m_Channel: "default", m_bLog: !0, m_bPub: !0, m_VersionStatus: null, m_Data: null, m_PayData: null, m_ShareCB: null, m_OpenAppCB: null, m_RewardCB: null, m_Render: null, m_ShareCBTime: 3e3, m_OpenAppCBTime: 3e3, m_OpenAppCBTime: 3e3, m_RewardSceneIOS: 1038, m_RewardSceneDroid: 1038, m_chkRewardSceneDroid: !1, m_chkRewardSceneIOS: !1, m_bInit: !1, V_CloseCB: null, m_city: null, m_getPayData: null, payDataGroup: [], m_AccessToken: null, m_logLevel: 3, m_userData: null, m_login: !0, m_DlgFailCB: null, official_openid: "", official_appid: "", officialScene: [1020, 1035, 1043, 1058, 1067, 1074, 1082, 1091, 1102, 1144], init: function (a) {
      if (this.m_bInit) t.DDSDK.log("sdk===ddsdk already init...");else {
        var n = window.DDSDK_APPKEY,
            o = window.DDSDK_GNAME;if (n.length < 1 || o.length < 1) t.DDSDK.log("sdk===please init config file...");else if (this.m_bInit = !0, this.m_Appid = n, this.m_LogKey = o, "DDSDK_InitRender" in window) {
          if (window.DDSDK_InitRender(), this.m_Render = window.DDSDK_Render, e = window.DDSDK_Render, i.ajax = e.ajax, i.setTimeout = e.setTimeout, i.getItem = e.getItem, i.setItem = e.setItem, i.removeItem = e.removeItem, this.isWx() ? "LJ_LOGEVENT" in window ? this.m_LogObj = window.LJ_LOGEVENT : t.DDSDK.log("sdk===LJ_EVENT load fail...") : "DDW" in window && (window.DDSDK.logEvent = window.DDW.logEvent), this.m_bPub) {
            var s = n;"DDSDK_CONFIG" in window && (s = window.DDSDK_CONFIG), this.m_JsonUrl = this.m_JsonUrl + o + "/" + s + ".json", t.DDSDK.log("m_JsonUrl::" + this.m_JsonUrl), this.m_PayUrl = this.m_PayUrl + s + "/json/" + s + "_pay.json", t.DDSDK.log(this.m_PayUrl);
          }if (this.m_ResTime = new Date().getTime(), this.m_LoadCompleteCallback = a, this.m_JsonUrl = this.m_JsonUrl, n && o ? (this.loadRes(), this.loadVersionStatus(o), t.DDSDK.log(this.m_JsonUrl), this.getIPInfo(this.getAnyData.bind(this))) : t.DDSDK.log("sdk===DDSDK log mode..."), this.isWx()) {
            var r = wx.getLaunchOptionsSync();t.DDSDK.log("--options--:", r), setTimeout(function () {
              localStorage.getItem("show") || (t.DDSDK.warn("------show-------\x3e>"), window.onshow(r));
            }, 1e3), "channel" in r.query && i.setChannel(r.query.channel), e && wx.onShow(function (t) {
              e.onShow(t);
            });
          }this.m_getPayData = { appId: "", gameId: "", gameName: "", channel: "", cpOrderNumber: "", productId: "", productDesc: "", amount: 6, totalAmount: 6, env: 0, serverId: "", roleId: "", accountId: "", notifyMinUrl: "", notifyUrl: "", extra: "", openId: "", offerId: "", zoneId: "", buyQuantity: 10, productNum: 1, isNewUser: 1, unionId: "" }, t.DDSDK.log("sdk===ddsdk:", this.m_Ver);
        } else t.DDSDK.log("sdk===DDSDK_InitRender is null!!!");
      }
    }, getAnyData: function (t) {}, setAccount: function (t) {
      this.isWx() && this.m_login && (this.m_Openid = t.openId, this.m_LogObj || "LJ_LOGEVENT" in window && (this.m_LogObj = window.LJ_LOGEVENT), this.m_LogObj.ljSendOpenid(t));
    }, shareAppMessage: function (t) {
      if (this.isWx() && this.m_LogObj) {
        if (t) {
          var e = t;1 != e.title.indexOf("$city") && (e.title = e.title.replace("$city", i.m_city));
        }this.m_LogObj.ljShareAppMessage(e);
      }
    }, setUserInfo: function (t) {
      this.isWx() && this.m_login && (this.m_LogObj || "LJ_LOGEVENT" in window && (this.m_LogObj = window.LJ_LOGEVENT), this.m_userData = t, this.m_LogObj.ljSetUseInfo(t));
    }, showUpdate: function () {
      if ("jump_config" in this.m_Data) {
        let t = i.getData("jump_config");if (i.log("sdk===跳转配置", t), !t.jump_switch) return;localStorage.getItem("jumpTimes") || localStorage.setItem("jumpTimes", 0);let e = localStorage.getItem("jumpTimes");i.log("sdk===登录开关：", this.m_login), 0 == t.jump_num ? this.showUpdateDlg(t) : 1 == this.m_login ? (e++, localStorage.setItem("jumpTimes", e), i.log("sdk===次数：", e), e <= t.jump_num ? this.showUpdateDlg(t) : i.log("sdk===弹框次数超过限定次数！")) : i.log("sdk===非登录状态");
      }
    }, showUpdateDlg: function (e) {
      if (!this.isWx()) return;var a = { ak: window.DDSDK_MD5KEY, app_id: window.DDSDK_APPKEY, role_id: this.m_userData.role_id, server_id: this.m_userData.server_id, amount: e.jump_amount };i.log("sdk===传输数据", a);window.wx.request({ url: "https://sdkpoint.chiji-h5.com/record-receive/fun/api/check_subcontract", data: { ak: window.DDSDK_MD5KEY, app_id: window.DDSDK_APPKEY, role_id: this.m_userData.role_id, server_id: this.m_userData.server_id, amount: e.jump_amount }, method: "POST", header: { "content-type": "application/json;charset=UTF-8" }, success(a) {
          a.data && a.data.success && 1 == a.data.success && 1 == a.data.data.subcontract ? (t.DDSDK.log("sdk===成功：", a), wx.showModal({ title: e.jump_title, content: e.jump_desc, showCancel: !1, success(t) {
              if (t.confirm) {
                var a = function (t, e) {
                  wx.navigateToMiniProgram({ appId: t, path: e, success: function (t) {
                      i.log("sdk===用户点击确定");
                    }, fail: function (n) {
                      i.log("sdk===用户点击取消 ", n), "navigateToMiniProgram:fail require user interaction" == n.errMsg ? wx.onTouchStart(function () {
                        i.log("sdk===用户点击啦"), a(t, e);
                      }) : a(t, e);
                    } });
                };wx.navigateToMiniProgram({ appId: e.jump_app_id, path: e.jump_channel, success: function (t) {
                    i.log("sdk===用户点击确定");
                  }, fail: function (t) {
                    i.log("sdk===用户点击取消"), i.m_login = !1, "jump_switch_fail" in e && 1 == e.jump_switch_fail ? a(e.jump_app_id, e.jump_channel) : i.log("sdk===强制跳转字段不存在或为关闭");
                  } });
              }
            } })) : i.log("sdk===更新状态: ", a);
        }, fail(e) {
          t.DDSDK.log("sdk===失败：", e);
        } });
    }, onShareAppMessage: function (e) {
      if (t.DDSDK.log("sdk===获取到地域", this.m_city), this.isWx() && this.m_LogObj) {
        if (e) {
          var i = e();1 != i.title.indexOf("$city") && (i.title = i.title.replace("$city", this.city));
        }this.m_LogObj.ljOnShareAppMessage(function () {
          return i;
        });
      }
    }, onShareTimeline: function (t) {
      this.m_LogObj && this.m_LogObj.ljOnShareTimeline(t);
    }, isWx: function () {
      if ("wx" in window && window.wx.getLaunchOptionsSync) return !0;
    }, filterRegion: function (i) {
      if (0 == i.error_code) {
        var a = this.m_Data.filterRegion;if (t.DDSDK.log("sdk===filter:", a), a) {
          var n = i.result.city;a.indexOf(n) >= 0 && (t.DDSDK.log("sdk===filter hide"), e.hideAll());
        }
      } else t.DDSDK.log("sdk===获取区域信息失败！");
    }, initRender: function () {
      var e = this;this.m_Data && (this.m_Data.shareCBTime && (this.m_ShareCBTime = this.m_Data.shareCBTime), this.m_Data.openAppCBTime && (this.m_OpenAppCBTime = this.m_Data.openAppCBTime), this.m_Data.logServer && (this.m_LogServer = this.m_Data.logServer), "RewardSceneIOS" in this.m_Data && (this.m_RewardSceneIOS = this.m_Data.RewardSceneIOS), "RewardSceneDroid" in this.m_Data && (this.m_RewardSceneDroid = this.m_Data.RewardSceneDroid), "chkRewardSceneIOS" in this.m_Data && (this.m_chkRewardSceneIOS = this.m_Data.chkRewardSceneIOS), "chkRewardSceneDroid" in this.m_Data && (this.m_chkRewardSceneDroid = this.m_Data.chkRewardSceneDroid), "ipinfourl" in this.m_Data && (this.m_IPInfoUrl = this.m_Data.ipinfourl, this.getIPInfo(this.filterRegion.bind(this))), "logLevel" in this.m_Data && (this.m_logLevel = this.m_Data.logLevel), this.m_Render ? (this.filterData(), t.DDSDK.log("sdk===loadRes json complete! init Render..."), this.m_Render.init(function () {
        if (e.m_LoadCompleteCallback && (t.DDSDK.log("sdk===Render is ready..."), e.m_LoadCompleteCallback()), i.isWx()) {
          var a = wx.getLaunchOptionsSync();"scene" in a && i.chkShowState(a.scene);
        }i.chkShowState2();
      })) : (t.DDSDK.log("sdk===loadRes json complete! can't find Render..."), e.m_LoadCompleteCallback && e.m_LoadCompleteCallback()));
    }, getRender: function () {
      return this.m_Render;
    }, isIOS: function () {
      return "ios" == this.getPlatfrom();
    }, isShow: function (e) {
      var a = i.getData("show");if (!(a && "hideAll" in a)) return t.DDSDK.log("sdk===can't find hideAll"), !1;if (a.hideAll) return !1;var n = !1,
          o = a[e];return o && (n = 2 != o || !i.isIOS()), n;
    }, getPlatfrom: function () {
      var t;if ("wx" in window && wx.getSystemInfoSync) {
        if (t = wx.getSystemInfoSync()) return t.platform;
      } else if ("BK" in window && "GameStatusInfo" in window) return GameStatusInfo.platform;return "unknow";
    }, setData: function (t, e) {
      this.m_Data[t] = e;
    }, getData: function (t) {
      try {
        return this.m_Data[t];
      } catch (t) {
        return null;
      }
    }, openApp: function (t) {
      this.openADApp(t);
    }, setResLoadCallback: function (t) {
      this.m_LoadCompleteCallback = t;
    }, setRewardCB: function (t) {
      this.m_RewardCB = t;
    }, setOpenAppCB: function (t) {
      this.m_OpenAppCB = t;
    }, setShareCB: function (t) {
      this.m_ShareCB = t;
    }, filterPltData: function (t, e, i, a, n) {
      a = a || 1, n = n || e;var o,
          s,
          r,
          l = [];if (t[e]) {
        for (o = 0; o < t[e].length; o++) r = !0, "showmode" in (s = t[e][o]) && (i ? 2 == s.showmode && (r = !1) : 1 == s.showmode && (r = !1), 0 == s.showmode && (r = !1)), r && (s._kind = n, s._page = a, s._idx = o + 1, l.push(s));t[e] = l;
      }
    }, filterData: function () {
      var t = this.m_Data,
          e = this.isIOS();if ("aniAD" in t && t.aniAD.list && this.filterPltData(t.aniAD, "list", e, 1, "aniAD"), "hotGames" in t) for (var i = 0; i < t.hotGames.length; i++) this.filterPltData(t.hotGames[i], "ani", e, i + 1, "hotGames_ani"), this.filterPltData(t.hotGames[i], "list", e, i + 1, "hotGames_list");this.m_Data = t;
    }, chkShowState: function (t) {
      if ("DDSDK_Render" in window) {
        var i = this.getData("sceneList");(i = i || []).indexOf(t) >= 0 && e.hideAll();
      }
    }, chkShowState2: function () {
      var t = this.m_Channel,
          i = this.getData("aniADChannel");i && (pos = i.indexOf(t), i && pos >= 0 && e.showAniAD(!1));var a = this.getData("hotGameChannel");a && (pos = a.indexOf(t), a && pos >= 0 && e.showHotGame(!1));
    }, singleHideAni: function () {
      this.m_Data.aniAD.list && this.hideCommon("m_AniADGroup", this.m_Data.aniAD.list, "hide");
    }, hideCommon: function (t, i, a) {
      this.m_Data;var n,
          o,
          s = e[t];for (n = 0; n < i.length; n++) if (!0, "group" in (o = i[n]) && "" != o.group && a in o && s[o.group - 1] && 3 != o[a]) {
        s[o.group - 1].visible = !1;break;
      }
    }, setChannel: function (t) {
      this.m_Channel = t;
    }, getChannel: function () {
      return this.m_Channel;
    }, getIPInfo: function (t) {
      if (this.m_RegionObj) t(this.m_RegionObj);else {
        var i = this;e.ajax(this.m_IPInfoUrl, null, function (e) {
          i.m_RegionObj = e, t(e), i.m_city = e.result.city;
        }, function (e) {
          t(e);
        });
      }
    }, getBKRewardList: function (e, a) {
      var n = i.getData("hotGames");if (n) if (n[0].bkRewardList) {
        var o = n[0].bkRewardList;if (e) {
          if (o && o.length > 0) {
            if (e.length > 0) {
              var s = e;if (s && s.length > 0) for (var r = 0; r < s.length; r++) for (var l = 0; l < o.length; l++) s[r].gameid && s[r].gameid == o[l].gameid && (o[l].reward = s[r]);t.DDSDK.log("sdk===rewards update to list:", o);
            }a(o);
          }
        } else t.DDSDK.log("ddsdk can't get rewards list from server");
      } else t.DDSDK.log("sdk===未配置奖励!");
    }, processReward: function (a) {
      var n = i.getData("try_updatereward");if (n) {
        t.DDSDK.log(n);var o = new Date().getTime(),
            s = { appid: i.m_Appid, openid: i.m_Openid, gameid: a.gameid },
            r = { url: n, data: s, item: a, now: o },
            l = JSON.stringify(r);t.DDSDK.log("sdk===cacheStr:", l), e.setItem("bkRewardCache", l), e.setRewardCB(function (i) {
          e.removeItem("bkRewardCache");t.DDSDK.log("--------RewardCB----------"), t.DDSDK.log(i);
        }), e.ajax(n, s, function (n) {
          if (t.DDSDK.log("post:", s), n && 0 == n.ret) {
            t.DDSDK.log("---------------update rewards success:", n), i.giveReward(a.num, a.type);var o = i.getData("try_rewardtip");o = (o = o.replace(/mtype/, a.type)).replace(/money/, a.num), t.DDSDK.log(o), e.getRewardBK().showTip(o), e.clearRewardCB();
          } else t.DDSDK.log("sdk===ret fail:", n);
        }, function (e) {
          t.DDSDK.log("sdk===update rewards fail:", e);
        });
      }
    }, sortAppList: function (t, e) {
      for (var i, a, n = [], o = [], s = 0; s < t.length; s++) (a = (i = t[s]).reward) ? a.everyday && a.datecount > 0 ? n.push(i) : (a.onlyonce && a.allcount, n.push(i)) : o.push(i);e(o.concat(n));
    }, getRewardsList: function (t, a) {
      var n = i.getData("try_getrewards");if (n) {
        var o = { appid: i.m_Appid, openid: i.m_Openid };e.ajax(n, o, function (e) {
          t(e);
        }, function (t) {
          a(t);
        });
      }
    }, canGetReward: function (t) {
      return !(t.everyday && t.reward && t.reward.datecount > 0) && !(t.onlyonce && t.reward && t.reward.allcount > 0);
    }, giveReward: function (t, e) {
      this.m_RewardCB && this.m_RewardCB(t, e);
    }, loadVersionStatus: function (t) {
      var i = this;e.ajax("https://jsonconfig.chiji-h5.com/question/json/nzkp/game_version.json", null, function (t) {
        console.log("版本调整后台配置读取"), console.log(t), i.m_VersionStatus = t;
      }, function (t) {
        e.setTimeout(function () {
          i.loadVersionStatus();
        }, 5e3);
      });
    }, loadRes: function () {
      t.DDSDK.log("sdk===ddsdk loadRes json...");var a = this;if (!this.m_JsonUrl) return i.error("sdk===m_JsonUrl 未配置");e.ajax(this.m_JsonUrl, null, function (t) {
        a.m_Data = t, a.initLoad();
      }, function (i) {
        t.DDSDK.log("sdk===loadjson fail:" + i), e.setTimeout(function () {
          a.loadRes();
        }, 5e3);
      });
    }, initLoad: function () {
      var a = this;if (!this.m_PayUrl) return i.error("sdk===m_PayUrl 未配置");e.ajax(this.m_PayUrl, null, function (t) {
        a.m_PayData = t, a.initRender();
      }, function (i) {
        t.DDSDK.log("sdk===loadjson m_PayData fail:" + i), e.setTimeout(function () {
          a.initLoad();
        }, 5e3);
      });
    }, openADApp: function (a, n) {
      t.DDSDK.log("sdk===open appid:" + a.appid + " path:" + a.path + " extraData:" + a.extraData), this.logTag("sdk-openapp", a), "atlas" in a && a.atlas ? a.icon_url = a.eskin : a.icon_url = "skin" in a ? a.skin : a.dgskin, this.logTag("NameIconClick", a);var o = this;function s() {
        o.m_OpenAppCB(a);
      }function r(i) {
        t.DDSDK.log("sdk===openADApp:callCB"), t.DDSDK.log(i), n && n(), o.m_OpenAppCB && e.setTimeout(s, o.m_OpenAppCBTime);
      }if (e && e.clearRewardCB(), "wx" in window) wx.navigateToMiniProgram({ appId: a.appid, path: a.path, extraData: a.extraData, success: function (e) {
          o.logTag("SdkOpenAppSucc", a), r(e), t.DDSDK.log("sdk===navigateToMiniProgram success...");
        }, fail: function (e) {
          o.logTag("SdkOpenAppFail", a), i.getData("showQRByCancel") && a.unimg ? (wx.previewImage({ current: a.unimg, urls: [a.unimg] }), o.logTag("sdk-openapp-qr", a)) : t.DDSDK.log("sdk===navigateToMiniProgram cancel..."), t.DDSDK.log("sdk===navigateToMiniProgram cancel...");
        } });else if ("BK" in window) try {
        BK.QQ.skipGame(a.appid, a.extraData), r({ scene: 1038 }), t.DDSDK.log("sdk===skipGame success...");
      } catch (e) {
        t.DDSDK.log(e);
      } else if ("DDW" in window) {
        var l = { gameUrl: a.url, gameId: a.gameid, gameName: a.name, landScape: a.landScape };t.DDSDK.log("sdk=== :" + a.url + " : " + a.gameid + " : " + a.name + " : " + a.landScape), window.DDW.playGame(l), t.DDSDK.log("sdk===playGame success...");
      }
    }, playWxVideo: function (e, a, n) {
      if (i.isWx()) {
        let o = e,
            s = wx.createRewardedVideoAd({ adUnitId: o });s.onClose(function (e) {
          s.offClose(), s.offError(), e && e.isEnded || void 0 === e ? (t.DDSDK.log("playADVideo onClose", e), i.logEvent("wxVideoClose", ""), a && a()) : i.logEvent("wxVideoPlayingClose", "");
        }), s.onError(function (e) {
          s.offClose(), s.offError(), t.DDSDK.log("playADVideo onError", e);
        }), s.load().then(function () {
          t.DDSDK.log("sdk===激励视频加载成功"), s.show().then(function () {
            t.DDSDK.log("sdk===激励视频 广告显示成功"), i.logEvent("wxVideoShow", "");
          }).catch(function (e) {
            i.logEvent("wxVideoError", ""), t.DDSDK.log("sdk===激励视频 广告显示失败");
          });
        }).catch(function (e) {
          n && n(), t.DDSDK.log("sdk===激励视频加载失败");
        });
      }
    }, loadInterstitialAd: function (e) {
      if (i.isWx() && wx.createInterstitialAd) {
        let a = wx.createInterstitialAd({ adUnitId: e });return a.onLoad(function () {
          t.DDSDK.log("sdk===onLoad event emit");
        }), a.onError(function (e) {
          t.DDSDK.log("sdk===onError event emit", e);
        }), a.onClose(function (e) {
          i.logEvent("wxInstClose", ""), t.DDSDK.log("sdk===onClose event emit", e);
        }), a;
      }
    }, playInterstitialAd: function (e) {
      e.show().then(function () {
        t.DDSDK.log("sdk===插屏广告显示成功"), i.logEvent("wxInstShow", "");
      }).catch(function (e) {
        i.logEvent("wxInstError", e), t.DDSDK.error("sdk===插屏错误", e);
      });
    }, setBannerAd: function (e, a, n, o) {
      if (i.isWx()) {
        let s = wx.createBannerAd({ adUnitId: e, style: { left: a, top: n, width: o } });return s.onError(function (e) {
          i.logEvent("wxBannerError", e), t.DDSDK.log(e);
        }), s;
      }
    }, showBanner: function (t) {
      t.show().then(function () {
        i.logEvent("wxBannerShow", "");
      });
    }, setBanClick: function () {
      i.logEvent("wxBannerClick", "");
    }, setInstClick: function () {
      i.logEvent("wxInstClick", "");
    }, setVideoClick: function () {
      i.logEvent("wxVideoClick", "");
    }, setGridAd: function (t) {
      if (i.isWx()) {
        return wx.createGridAd({ adUnitId: t.id, style: { left: t.left, top: t.top, width: t.width, height: t.height }, adIntervals: t.adIntervals || 1, adTheme: t.theme, gridCount: t.num });
      }
    }, showGridAd: function (e) {
      e.show().then(() => {
        t.DDSDK.log("sdk===格子广告显示成功"), i.logEvent("wxGridShow", "");
      }).catch(e => {
        t.DDSDK.log("sdk===格子广告显示失败");
      }), e.onError(e => {
        t.DDSDK.log("sdk===grid ad onError:", e);
      });
    }, getCustomerService: function (e) {
      var a = !1;i.getData("isCard") && (a = i.getData("isCard"));var n = i.getData("cardImg");if (i.isWx()) {
        var o = "";e.phone && e.channel && (o = `{"phone": ${e.phone},"channel": "${e.channel}"}`, wx.setClipboardData({ data: o })), t.DDSDK.log("剪贴板参数：", o), wx.openCustomerServiceConversation({ showMessageCard: e.isCard || a, sendMessageImg: e.cardImg || n, sendMessageTitle: e.cardTitle || "", sendMessagePath: e.cardPath || "", sessionFrom: e.sessionFrom || "", success: function (e) {
            t.DDSDK.log(e);
          }, fail: function (e) {
            t.DDSDK.log("sdk===cancel...");
          } });
      }
    }, authorize: function (e) {
      i.isWx() && wx.getSetting({ success(i) {
          t.DDSDK.log("sdk===授权状态", i.authSetting), i.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function (t) {
              e && e(t);
            } }) : wx.authorize({ scope: "scope.userInfo", success() {
              wx.getUserInfo({ success(t) {
                  e && e(t);
                } });
            }, fail(t) {
              e && e(t);
            } });
        } });
    }, createUserInfoButton(e) {
      var a;if (i.isWx()) return t.DDSDK.log(666, e), "text" == e.type ? a = wx.createUserInfoButton({ type: "text", text: e.text || "用户信息", style: { left: e.left, top: e.top, width: e.width, height: e.height, lineHeight: e.lineHeight, backgroundColor: e.backgroundColor || "#ff0000", color: e.color || "#ffffff", textAlign: e.textAlign || "center", fontSize: e.fontSize || 16, borderRadius: e.borderRadius || 4, borderWidth: e.borderWidth || 1, borderColor: e.borderColor || "" } }) : "image" == e.type && (a = wx.createUserInfoButton({ type: "image", image: e.image || "", style: { left: e.left, top: e.top, width: e.width, height: e.height, lineHeight: e.lineHeight || "", backgroundColor: e.backgroundColor || "", color: e.color || "", textAlign: e.textAlign || "", fontSize: e.fontSize || 16, borderRadius: e.borderRadius || 4, borderWidth: e.borderWidth || 1, borderColor: e.borderColor || "" } })), a;
    }, logEnable: function (t) {
      this.m_bLog = t;
    }, logEvent: function (t, e) {
      this.logTag(t, e);
    }, logTag: function (e, i) {
      this.isWx() && this.m_bLog && (this.m_LogObj || "LJ_LOGEVENT" in window && (this.m_LogObj = window.LJ_LOGEVENT), t.DDSDK.log("sdk===日志打点：", e), e = e || "", (i = i || "") && i.replace && (i = i.replace(/&/, "|")), this.m_LogObj.ljSendEvent(e, i));
    }, setPayData: function (t) {
      var e = null,
          i = null;"game_midas" in this.m_Data && (e = this.m_Data.game_midas), "mini_program" in this.m_Data && (i = this.m_Data.mini_program), null != i && 0 != i.length ? (this.m_getPayData.appId = i.appId, this.m_getPayData.gameId = i.gameId) : (this.m_getPayData.appId = t.appId, this.m_getPayData.gameId = t.gameid ? t.gameid : t.gameId), null != e && 0 != e.length ? (this.m_getPayData.buyQuantity = e.buyQuantity, this.m_getPayData.env = e.env, this.m_getPayData.offerId = e.offerId) : (this.m_getPayData.buyQuantity = t.buyQuantity, this.m_getPayData.env = t.env, this.m_getPayData.offerId = t.offerId), this.m_getPayData.gameName = t.gname ? t.gname : window.DDSDK_GNAME, this.m_getPayData.cpOrderNumber = t.cp_order_no ? t.cp_order_no : t.cpOrderNumber, this.m_getPayData.productId = t.product_id ? t.product_id : t.productId, this.m_getPayData.productDesc = t.product_desc ? t.product_desc : t.productDesc, this.m_getPayData.serverId = t.server_id ? t.server_id : t.serverId, this.m_getPayData.roleId = t.role_id ? t.role_id : t.roleId, this.m_getPayData.accountId = t.account_id ? t.account_id : t.accountId, this.m_getPayData.notifyUrl = t.notify_url ? t.notify_url : t.notifyUrl, this.m_getPayData.notifyMinUrl = t.notify_minPro_url ? t.notify_minPro_url : t.notifyMinUrl, this.m_getPayData.openId = t.open_id ? t.open_id : t.openId, this.m_getPayData.productNum = t.product_num ? t.product_num : t.productNum, this.m_getPayData.isNewUser = t.is_new_user ? t.is_new_user : t.isNewUser, this.m_getPayData.unionId = t.unionid ? t.unionid : t.unionId, this.m_getPayData.product_name = t.product_id ? t.product_id : t.productId, this.m_getPayData.product_desc = t.product_desc ? t.product_desc : t.productDesc, this.m_getPayData.pay_amount = t.pay_amount ? t.pay_amount : t.amount, this.m_getPayData.channel = t.channel, this.m_getPayData.amount = t.amount, this.m_getPayData.zoneId = t.zoneId, this.m_getPayData.extra = t.extra, this.m_getPayData.totalAmount = t.totalAmount, this.m_getPayData.payData = { gameName: this.m_getPayData.gameName, description: this.m_getPayData.productDesc, openId: this.m_getPayData.openId, value: 100 * this.m_getPayData.amount + "" };
    }, getPay: function (e) {
      var a = wx.getLaunchOptionsSync().scene;this.officialScene.indexOf(a);t.DDSDK.log("sdk====支付开始");var n = i.getData("ios_pay_type");if (n || (n = 1), this.setPayData(e), null != this.m_getPayData) {
        var o = new Date(),
            s = o.getHours();if (t.DDSDK.log("sdk====支付的数据：", this.m_getPayData), i.isWx()) {
          if (this.m_getPayData.cpOrder = this.m_getPayData.cpOrderNumber + "-" + parseInt(1e3 * Math.random()) + o.getTime(), t.DDSDK.log("sdk====自定义订单号：", this.m_getPayData.cpOrder), -1 != [1, 3, 6, 8, 12, 18, 25, 30, 40, 45, 50, 60, 68, 73, 78, 88, 98, 108, 118, 128, 148, 168, 188, 198, 328, 648, 998, 1998, 2998].indexOf(this.m_getPayData.amount)) {
            let e = i.getChannel();var r = wx.getLaunchOptionsSync();if ("scene" in r) a = r.scene + "";if (this.m_PayData && 1 == this.m_PayData.is_start) "" != this.m_city && this.m_getPayData.totalAmount >= this.m_PayData.min_money && this.m_getPayData.totalAmount <= this.m_PayData.max_money && (-1 == this.m_PayData.shield_city.indexOf(this.m_city) || 0 == this.m_PayData.shield_city.length) && -1 != this.m_PayData.time_range_list.indexOf(s) && 0 != this.m_PayData.time_range_list.length ? 0 != this.m_PayData.channel_list.length && 0 != this.m_PayData.scene_list.length ? -1 != this.m_PayData.channel_list.indexOf(e) && -1 != this.m_PayData.scene_list.indexOf(a) ? 2 == n ? (t.DDSDK.log("sdk====客服支付1"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付1"), this.getMinProgramPay(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师支付1"), this.getMidasPay(this.m_getPayData)) : 0 != this.m_PayData.channel_list.length && -1 != this.m_PayData.channel_list.indexOf(e) ? 2 == n ? (t.DDSDK.log("sdk====客服支付2"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付2"), this.getMinProgramPay(this.m_getPayData)) : 0 != this.m_PayData.scene_list.length && -1 != this.m_PayData.scene_list.indexOf(a) ? 2 == n ? (t.DDSDK.log("sdk====客服支付3"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付3"), this.getMinProgramPay(this.m_getPayData)) : 0 == this.m_PayData.channel_list.length && 0 == this.m_PayData.scene_list.length ? 2 == n ? (t.DDSDK.log("sdk====客服支付4"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付4"), this.getMinProgramPay(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师支付2"), this.getMidasPay(this.m_getPayData)) : 2 == n ? (t.DDSDK.log("sdk====客服支付5"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付5"), this.getMinProgramPay(this.m_getPayData));else {
              let e = window.wx.getSystemInfoSync();"ios" == e.platform ? 2 == n ? (t.DDSDK.log("sdk====客服支付  ios"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付 ios"), this.getMinProgramPay(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师支付 当前设备：", e.platform), this.getMidasPay(this.m_getPayData));
            }
          } else 2 == n ? (t.DDSDK.log("sdk====米大师不支持的档位3"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师不支持的档位4"), this.getMinProgramPay(this.m_getPayData));
        } else t.DDSDK.log("sdk====支付非微信");
      } else t.DDSDK.log("sdk====支付无pay_data数据");
    }, getMinProgramPay: function (e) {
      console.log("小程序支付传入数据"), console.log(e);var a = wx.getSystemInfoSync().system.substring(0, 3),
          n = wx.getLaunchOptionsSync().scene,
          o = i.getData("sceneList") || [],
          s = !0;if ("iOS" === a && -1 != o.indexOf(n) && (s = !1), !s) return void wx.showToast({ title: "苹果系统暂不支持充值,请转至安卓系统进行充值。", icon: "none", duration: 2e3 });let r = parseInt(e.roleId),
          l = "";"" != e.notifyMinUrl ? l = encodeURIComponent(e.notifyMinUrl) : t.DDSDK.log("sdk====小程序支付回调地址不存在");var d = "gameid=" + e.gameId + "&serverid=" + e.serverId + "&productid=" + e.productId + "&gameuid=" + r + "&game_openid=" + e.openId + "&channel=" + e.channel + "&is_new_user=" + e.isNewUser + "&notify_url=" + l + "&role_id=" + e.roleId + "&account_id=" + e.accountId + "&unionid=" + e.unionId + "&product_name=" + e.product_name + "&product_desc=" + e.product_desc + "&pay_amount=" + e.pay_amount + "&extra=" + e.extra + "&payData=" + JSON.stringify(e.payData);t.DDSDK.log("sdk====小程序支付path", d), wx.navigateToMiniProgram({ appId: e.appId, path: "pages/pay/index?" + d });
    }, getMidasPay: function (t) {
      let e = t.env + 1,
          a = t.roleId;i.logEvent("createPay", { orderid: t.cpOrderNumber, gameuid: a, openid: t.openId, productid: t.productId, product_num: t.productNum, amount: t.amount, issendbox: e, unionid: t.unionId, paytype: "wxgame", userchannel: t.channel, account_id: t.accountId, is_new_user: t.isNewUser, serverid: t.serverId, cp_order: t.cpOrder });let n = t;n.midas_payed = !1, this.createPay(n, this.getWxMiDas.bind(this));
    }, getWxMiDas: function (e) {
      var i = e,
          a = this;window.wx.requestMidasPayment({ mode: "game", env: i.env, offerId: i.offerId, currencyType: "CNY", platform: "android", zoneId: i.zoneId, buyQuantity: i.amount * i.buyQuantity, success: e => {
          t.DDSDK.log("sdk====米大师支付成功", e), i.midas_payed = !0, a.createPay(i);
        }, fail: e => {
          t.DDSDK.log("sdk====米大师支付失败", e);
        } });
    }, createPay: function (e, a) {
      var n = e,
          o = this;let s;var r = (s = "midas_pay_url" in o.m_Data && null != o.m_Data.midas_pay_url ? o.m_Data.midas_pay_url : "https://isdk.chiji-h5.com") + "/server/s/" + e.gameName + "/pay/web_create";let l;l = window.DDSDK_MD5KEY && "" != window.DDSDK_MD5KEY ? window.DDSDK_MD5KEY : window.DDSDK_APPKEY, t.DDSDK.log("sdk====获取到米大师余额url", r), window.wx.request({ url: r, data: { nonce_str: "", sign_type: "", sign: "", type: "midas", cp_order_no: n.cpOrderNumber, product_id: n.productId, product_desc: n.productDesc, amount: n.amount, server_id: n.serverId, role_id: n.roleId, notify_url: n.notifyUrl, return_url: "", pay_type: "2", extra: n.extra, user_id: n.openId, account_id: n.accountId, cp_order: n.cpOrder, midas_payed: n.midas_payed, is_new_user: n.isNewUser, channel: n.channel, ak: l, app_id: n.gameName, unionid: n.unionId }, method: "POST", header: { "content-type": "application/json;charset=UTF-8" }, success: e => {
          if (t.DDSDK.log("sdk====零境米大师返回数据", e), null != e.data.data && 90013 == e.data.data.status) t.DDSDK.log("sdk====米大师余额不足"), o.getWxMiDas(n);else if (null != e.data.data && 0 == e.data.data.status) i.logEvent("successPay", { orderid: n.cpOrderNumber });else if (null != e.data.data) {
            let t = "充值状态: " + e.data.data.status + " 请联系客服！！！";wx.showToast({ title: t, icon: "none", duration: 2e3 });
          }
        }, fail: e => {
          t.DDSDK.log("sdk====零境米大师请求失败", e);
        } });
    }, startPay: function (e) {
      t.DDSDK.log("sdk====支付开始");var a = i.getData("ios_pay_type");if (console.log("打印ios_pay_type"), console.log(a), console.log(this.m_Data), a || (a = 1), this.setPayData(e), null != this.m_getPayData) {
        var n = new Date(),
            o = n.getHours();if (t.DDSDK.log("sdk====支付的数据：", this.m_getPayData), i.isWx()) {
          if (this.m_getPayData.cpOrder = this.m_getPayData.cpOrderNumber + "-" + parseInt(1e3 * Math.random()) + n.getTime(), t.DDSDK.log("sdk====自定义订单号：", this.m_getPayData.cpOrder), -1 != [1, 3, 6, 8, 12, 18, 25, 30, 40, 45, 50, 60, 68, 73, 78, 88, 98, 108, 118, 128, 148, 168, 188, 198, 328, 648, 998, 1998, 2998].indexOf(this.m_getPayData.amount)) {
            let e = i.getChannel();var s = wx.getLaunchOptionsSync();if ("scene" in s) var r = s.scene + "";if (this.m_PayData && 1 == this.m_PayData.is_start) "" != this.m_city && this.m_getPayData.totalAmount >= this.m_PayData.min_money && this.m_getPayData.totalAmount <= this.m_PayData.max_money && (-1 == this.m_PayData.shield_city.indexOf(this.m_city) || 0 == this.m_PayData.shield_city.length) && -1 != this.m_PayData.time_range_list.indexOf(o) && 0 != this.m_PayData.time_range_list.length ? 0 != this.m_PayData.channel_list.length && 0 != this.m_PayData.scene_list.length ? -1 != this.m_PayData.channel_list.indexOf(e) && -1 != this.m_PayData.scene_list.indexOf(r) ? 2 == a ? (t.DDSDK.log("sdk====客服支付1"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付1"), this.getMinProgramPay(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师支付1"), this.startMidasPay(this.m_getPayData)) : 0 != this.m_PayData.channel_list.length && -1 != this.m_PayData.channel_list.indexOf(e) ? 2 == a ? (t.DDSDK.log("sdk====客服支付2"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付2"), this.getMinProgramPay(this.m_getPayData)) : 0 != this.m_PayData.scene_list.length && -1 != this.m_PayData.scene_list.indexOf(r) ? 2 == a ? (t.DDSDK.log("sdk====客服支付3"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付3"), this.getMinProgramPay(this.m_getPayData)) : 0 == this.m_PayData.channel_list.length && 0 == this.m_PayData.scene_list.length ? 2 == a ? (t.DDSDK.log("sdk====客服支付4"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付4"), this.getMinProgramPay(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师支付2"), this.startMidasPay(this.m_getPayData)) : 2 == a ? (t.DDSDK.log("sdk====客服支付5"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付5"), this.getMinProgramPay(this.m_getPayData));else {
              let e = window.wx.getSystemInfoSync();"ios" == e.platform ? 2 == a ? (t.DDSDK.log("sdk====客服支付 ios"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====小程序支付 ios"), this.getMinProgramPay(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师支付 当前设备：", e.platform), this.startMidasPay(this.m_getPayData));
            }
          } else 2 == a ? (t.DDSDK.log("sdk====米大师不支持的档位1"), this.getCustomerServiceToPayTest(this.m_getPayData)) : (t.DDSDK.log("sdk====米大师不支持的档位2"), this.getMinProgramPay(this.m_getPayData));
        } else t.DDSDK.log("sdk====支付非微信");
      } else t.DDSDK.log("sdk====支付无pay_data数据");
    }, startMidasPay: function (e) {
      let a = e.env + 1,
          n = e.roleId;"point_switch" in this.m_Data && null != this.m_Data.point_switch ? 1 == this.m_Data.point_switch ? i.logEvent("createPay", { orderid: e.cpOrderNumber, gameuid: n, openid: e.openId, productid: e.productId, product_num: e.productNum, amount: e.amount, issendbox: a, unionid: e.unionId, paytype: "wxgame", userchannel: e.channel, account_id: e.accountId, is_new_user: e.isNewUser, serverid: e.serverId, cp_order: e.cpOrder, product_desc: e.product_desc, product_name: e.product_name, pay_amount: e.pay_amount }) : t.DDSDK.log("sdk====客户端支付创建订单打点关闭") : t.DDSDK.log("sdk====支付打点参数不存在或为空");let o = e;o.midas_payed = !1, this.createPayV2(o, this.startGetWxMiDas.bind(this));
    }, startGetWxMiDas: function (e) {
      var i = e,
          a = this;window.wx.requestMidasPayment({ mode: "game", env: i.env, offerId: i.offerId, currencyType: "CNY", platform: "android", zoneId: i.zoneId, buyQuantity: i.amount * i.buyQuantity, success: e => {
          t.DDSDK.log("sdk====米大师支付成功", e), i.midas_payed = !0, a.createPayV2(i);
        }, fail: e => {
          t.DDSDK.log("sdk====米大师支付失败", e);
        } });
    }, createPayV2: function (e, a) {
      var n = e,
          o = this;let s;var r = (s = "midas_pay_url" in o.m_Data && null != o.m_Data.midas_pay_url ? o.m_Data.midas_pay_url : "https://wxgame.chiji-h5.com") + "/boxpay/" + e.gameName;let l;l = window.DDSDK_MD5KEY && "" != window.DDSDK_MD5KEY ? window.DDSDK_MD5KEY : window.DDSDK_APPKEY, t.DDSDK.log("sdk====获取到米大师余额url", r);n.cpOrderNumber, n.productId, n.amount, n.serverId, n.roleId, n.notifyUrl, n.extra, n.openId, n.accountId, n.cpOrder, n.midas_payed, n.isNewUser, n.channel, n.gameName, n.gameName, n.openId, n.roleId, n.unionId, e.product_desc, e.product_name, e.pay_amount;window.wx.request({ url: r, data: { nonce_str: "", sign_type: "", sign: "", type: "midas", cp_order_no: n.cpOrderNumber, productid: n.productId, amount: n.amount, server_id: n.serverId, role_id: n.roleId, notify_url: n.notifyUrl, return_url: "", pay_type: "2", extra: n.extra, game_openid: n.openId, account_id: n.accountId, cp_order: n.cpOrder, midas_payed: n.midas_payed, is_new_user: n.isNewUser, userchannel: n.channel, ak: l, app_id: n.gameName, gameid: n.gameName, service: "MidasOrderService", device: "android", openid: n.openId, gameuid: n.roleId, unionid: n.unionId, product_desc: e.product_desc, product_name: e.product_name, pay_amount: e.pay_amount }, method: "post", header: { "content-type": "application/json;charset=UTF-8" }, success: e => {
          if (t.DDSDK.log("sdk====零境米大师返回数据", e), null != e.data && 90013 == e.data.state) t.DDSDK.log("sdk====米大师余额不足"), o.startGetWxMiDas(n);else if (null != e.data && 0 == e.data.state) "point_switch" in o.m_Data && null != o.m_Data.point_switch ? 1 == o.m_Data.point_switch ? i.logEvent("successPay", { orderid: n.cpOrderNumber }) : t.DDSDK.log("sdk====客户端支付成功打点关闭") : t.DDSDK.log("sdk====支付打点参数不存在或为空");else if (null != e.data) {
            let t = "充值状态: " + e.data.state + " 请联系客服！！！";wx.showToast({ title: t, icon: "none", duration: 2e3 });
          }
        }, fail: e => {
          t.DDSDK.log("sdk====零境米大师请求失败", e);
        } });
    }, adData(e) {
      var i;i = e.openid ? e.openid : e.openId, e.gname ? e.gname : e.gameName, t.DDSDK.log("sdk===数据回传：", e), window.wx.request({ url: "https://wechat-tools.chiji-h5.com/server/s/' + game_name + '/api/user_action", data: { url: "http://www.qq.com", type: e.type, name: "webuser_action_set", description: e.description, openid: i, value: e.value, source: "web", claim_type: "0", nonce_str: "", sign_type: "", sign: "" }, method: "POST", header: { "content-type": "application/json;charset=UTF-8" }, success(e) {
          t.DDSDK.log("sdk===数据回传成功：", e);
        }, fail(e) {
          t.DDSDK.log("sdk===数据回传失败：", e);
        } });
    }, subscribeMessage: function (e) {
      e && e.tmplIds || t.DDSDK.log("sdk===subFunction订阅:参数错误"), wx.requestSubscribeMessage({ tmplIds: e.tmplIds, success: t => {
          e.callback && e.callback(t);
        }, fail: i => {
          t.DDSDK.log("sdk===subFunction订阅失败" + i.errMsg), e.callback && e.callback(i);
        } });
    }, getSubState: function () {
      wx.getSetting({ withSubscriptions: !0, success(e) {
          var i = e.subscriptionsSetting;if (t.DDSDK.log("sdk===subscriptionsSetting", i), void 0 !== i.itemSettings) {
            var a = [],
                n = i.itemSettings,
                o = [];for (var s in n) "accept" == n[s] && (o.push(s), a.push({ templateid: s, subscription: 1, always: 1 }));t.DDSDK.log("sdk===首次登录，查看订阅信息", a);
          }
        } });
    }, login: function (t) {
      var e = t.url + "/login.action";i.log("sdk===服务器登录接口", e);let a = { openid: t.openId, code: t.code, inviteid: t.inviteId, invitetype: t.inviteType, login_type: t.loginType };this.ajax(e, a, function (e) {
        t.callback && t.callback(e);
      });
    }, userDataUpdate: function (t) {
      let e = { info: t.info },
          i = encodeURIComponent(JSON.stringify(e)),
          a = { openid: t.openId, udata: i };var n = t.url + "/update.action";this.ajax(n, a, function (e) {
        t.callback && t.callback(e);
      });
    }, getPayInfo: function (t) {
      var e = t.url + "/get_pay.action";this.ajax(e, t, function (e) {
        t.callback && t.callback(e);
      });
    }, getInvite: function (t) {
      var e = t.url + "/get_invite.action";this.ajax(e, t, function (e) {
        t.callback && t.callback(e);
      });
    }, createFeedbackButton: function (t) {
      var e;if (i.isWx()) return "text" == t.type ? e = wx.createFeedbackButton({ type: "text", text: t.text || "打开意见反馈页面", style: { left: t.left, top: t.top, width: t.width, height: t.height, lineHeight: t.lineHeight, backgroundColor: t.backgroundColor || "#ffff0000", color: t.color || "#ffffff", textAlign: t.textAlign || "center", fontSize: t.fontSize || 16, borderRadius: t.borderRadius || 4, borderWidth: t.borderWidth || 1, borderColor: t.borderColor || "" } }) : "image" == t.type && (e = wx.createFeedbackButton({ type: "image", image: t.image || "", style: { left: t.left, top: t.top, width: t.width, height: t.height, lineHeight: t.lineHeight || "", backgroundColor: t.backgroundColor || "", color: t.color || "", textAlign: t.textAlign || "", fontSize: t.fontSize || 16, borderRadius: t.borderRadius || 4, borderWidth: t.borderWidth || 1, borderColor: t.borderColor || "" } })), e;
    }, checkPackage(e) {
      wx.request({ url: "https://sdkpoint.chiji-h5.com/record-receive/fun/api/v2/check_subcontract", data: { ak: window.DDSDK_MD5KEY, app_id: window.DDSDK_APPKEY, role_id: this.m_userData.role_id, server_id: this.m_userData.server_id, amount: e.jump_amount, union_id: i.m_UnionID }, method: "POST", success: function (e) {
          e.data && t.DDSDK.log(e.data);
        }, fail: function (e) {
          e.data && t.DDSDK.log(e.data);
        } });
    }, setPackage(e) {
      i.log("提交分包参数：" + e), wx.request({ url: "https://sdkpoint.chiji-h5.com/record-receive/fun/api/v2/subcontract", data: { ak: window.DDSDK_MD5KEY, app_id: window.DDSDK_APPKEY, union_id: e.unionId }, method: "POST", success: function (e) {
          e.data && t.DDSDK.log(e.data);
        }, fail: function (e) {
          e.data && t.DDSDK.log(e.data);
        } });
    }, getCustomerServiceToPayTest: function (e) {
      var a = wx.getSystemInfoSync().system.substring(0, 3),
          n = wx.getLaunchOptionsSync().scene,
          o = i.getData("sceneList") || [],
          s = !0;if ("iOS" === a && -1 != o.indexOf(n) && (s = !1), s) {
        var r = encodeURI(JSON.stringify(e.extra)),
            l = "game_id=" + e.gameName + "&product_id=" + e.productId + "&game_user_id=" + e.accountId + "&role_id=" + e.roleId + "&order_id=" + r + "&server_id=" + e.serverId + "&user_channel=" + e.channel + "&is_new_user=" + e.isNewUser + "&product_amount=" + e.pay_amount + "&product_name=" + e.product_name + "&product_desc=" + e.product_desc + "&union_id=" + e.unionId;wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageImg: i.getData("cardImg") || "", sendMessageTitle: "", sendMessagePath: "", sessionFrom: `{"receive_param":"ios","params":"${l}"}` || "", success: function (e) {
            t.DDSDK.log("getCustomerPay:" + e);
          }, fail: function (e) {
            t.DDSDK.log("getCustomerPay:cancel...");
          } }), t.DDSDK.log("客服支付参数：", l);
      } else wx.showToast({ title: "苹果系统暂不支持充值,请转至安卓系统进行充值。", icon: "none", duration: 2e3 });
    }, getCustomerServiceByFB: function (e) {
      if (!this.isWx()) return;var a = i.getData("jump_amount") || 0;t.DDSDK.log("客服参数：", e, a);var n = {};var o = e && e.phone || "";if (0 == a) {
        var s;n.isCard = !0;var r,
            l = `game_id=${window.DDSDK_GNAME}web&phone=${o}&channel=${i.getChannel()}`;return r = `{"phone": ${o},"channel": "${i.getChannel()}"}`, wx.setClipboardData({ data: r }), s = `{"open_param":"wd","params":"${l}"}`, n.open_param = "wd", n.cardImg = "https://commcdn.chiji-h5.com/ljsdk/test/libao.jpg", n.sessionFrom = s, t.DDSDK.log("客服分包：", n), void t.DDSDK.customerFB(n);
      }var d = { ak: window.DDSDK_MD5KEY, app_id: window.DDSDK_APPKEY, role_id: e.roleId || this.m_userData && this.m_userData.role_id || "", server_id: e.serverId || this.m_userData && this.m_userData.server_id || "", amount: a || 0, union_id: e.unionId || this.m_UnionID || "" };t.DDSDK.log("悬浮客服参数：", d), window.wx.request({ url: "https://sdkpoint.chiji-h5.com/record-receive/fun/api/v2/check_subcontract", data: d, method: "POST", header: { "content-type": "application/json;charset=UTF-8" }, success(e) {
          i.log("sdk===分包: ", e), n.isCard = !0;var a;a = `{"phone": ${o},"channel": "${i.getChannel()}"}`, wx.setClipboardData({ data: a });var s = "";e.data && e.data.success && 1 == e.data.success && 1 == e.data.data.subcontract && (s = `{"open_param":"wd","params":"${`game_id=${window.DDSDK_GNAME}web&phone=${o}&channel=${i.getChannel()}`}"}`, n.open_param = "wd", n.cardImg = "https://commcdn.chiji-h5.com/ljsdk/test/libao.jpg");n.sessionFrom = s, t.DDSDK.log("sdk===客服 跳转 分包：", n), t.DDSDK.customerFB(n);
        }, fail(e) {
          n.isCard = !0, t.DDSDK.log("sdk===失败：", e), t.DDSDK.customerFB(n);
        } });
    }, customerFB: function (e) {
      if (i.isWx()) {
        var a = !1;i.getData("isCard") && (a = i.getData("isCard"));var n = i.getData("cardImg");wx.openCustomerServiceConversation({ showMessageCard: e.isCard || a, sendMessageImg: e.cardImg || n, sendMessageTitle: e.cardTitle || "", sendMessagePath: e.cardPath || "", sessionFrom: e.sessionFrom || "", success: function (e) {
            t.DDSDK.log("getCustomerService:" + e);
          }, fail: function (e) {
            t.DDSDK.log("getCustomerService:cancel...");
          } });
      }
    }, getCustomPopUI: function (e) {
      i.log("客服绑定手机号弹窗参数：" + e);let a = this.getData("pop_config") || {};if (a) {
        if (!a.pop_window) return;let n = a.pop_amount,
            o = a.pop_times,
            s = 1e3 * a.pop_time;wx.request({ url: "https://sdkpoint.chiji-h5.com/record-receive/fun/api/v2/check_subcontract", data: { ak: window.DDSDK_MD5KEY, app_id: window.DDSDK_APPKEY, role_id: e.roleId, server_id: e.serverId, amount: n, union_id: e.unionId }, method: "POST", success: function (a) {
            if (a.data && (i.log("getCustomPopUI额度判断:", a.data), a.data.data.subcontract)) {
              let i = localStorage.getItem("_has_pop_times") || 0;if (0 == i) localStorage.setItem("_has_pop_time", new Date().getTime());else if (i >= o) {
                let e = localStorage.getItem("_has_pop_time"),
                    a = new Date().getTime();if (t.DDSDK.checkIsSameDay(e, a)) return;localStorage.setItem("_has_pop_times", 0), localStorage.setItem("_has_pop_time", new Date().getTime()), i = 0;
              }i < o && (i += 1, localStorage.setItem("_has_pop_times", i), setTimeout(() => {
                t.DDSDK_Render.getCustomPopUI(e);
              }, s));
            }
          }, fail: function (t) {
            t.data && i.log(t.data);
          } });
      }
    }, checkIsSameDay: function (t, e) {
      let i = new Date(t),
          a = new Date(e);return i.setHours(0, 0, 0, 0) == a.setHours(0, 0, 0, 0);
    }, loginCheckV: function (t, e, i) {
      var a = this.m_VersionStatus.default_version,
          n = this.m_VersionStatus;return t < n.login_pay_amount && 2 == n.status && 2 == n.login_pay_amount_status && (a = n.login_pay_amount_version, console.log(n.login_pay_amount_version)), e == n.login_scene && 2 == n.status && 2 == n.login_scene_status && (a = n.login_scene_version, console.log(n.login_scene_version)), i != n.login_region && 2 == n.status && 2 == n.login_region_status && (a = n.login_region_version, console.log(n.login_region_version)), a;
    }, iosPayCheckV: function (t, e, i, a) {
      var n = this.m_VersionStatus.default_version,
          o = this.m_VersionStatus;return t < o.ios_pay_amount && 2 == o.status && 2 == o.ios_pay_amount_status && (n = o.ios_pay_amount_version, console.log(o.ios_pay_amount_version)), e == o.ios_scene && 2 == o.status && 2 == o.ios_scene_status && (n = o.ios_scene_version, console.log(o.ios_scene_version)), i != o.ios_region && 2 == o.status && 2 == o.ios_region_status && (n = o.ios_region_version, console.log(o.ios_region_version)), a < o.ios_level && 2 == o.status && 2 == o.ios_level_status && (n = o.ios_level_version, console.log(o.ios_level_version)), n;
    }, log: function (t) {
      if (this.m_logLevel >= 3) {
        var e = Array.prototype.slice.call(arguments);e.unshift("DDSDKLOG:"), console.log.apply(null, e);
      }
    }, warn: function (t) {
      if (this.m_logLevel >= 2) {
        var e = Array.prototype.slice.call(arguments);e.unshift("DDSDKWARN:"), console.warn.apply(null, e);
      }
    }, error: function (t) {
      if (this.m_logLevel >= 1) {
        var e = Array.prototype.slice.call(arguments);e.unshift("DDSDKERROR:"), console.error.apply(null, e);
      }
    }, getOpenId(t) {
      i.isWx() && wx.request({ url: "https://payh5crown.chiji-h5.com/index.php/index/applet/get_open_id", data: { code: t.code, game_id: t.gameId }, method: "POST", success: e => {
          i.log("sdk===", e), t.cb && t.cb(e);
        }, fail: e => {
          i.log("sdk===", e), t.cb && t.cb(e);
        } });
    } };i.OnShareAppMessage = i.onShareAppMessage, i.ShareAppMessage = i.shareAppMessage, i.setbannerAd = i.setBannerAd, i.clone = function t(e) {
    var i;if ("object" == typeof e) {
      if (null === e) i = null;else if (e instanceof Array) {
        i = [];for (var a = 0, n = e.length; a < n; a++) i.push(t(e[a]));
      } else for (var o in i = {}, e) i[o] = t(e[o]);
    } else i = e;return i;
  }, "undefined" != typeof define && define.amd ? define(function () {
    return i;
  }) : "undefined" != typeof module && module.exports && (module.exports = i), t.DDSDK = i;
}("undefined" != typeof window ? window : this), function (t) {
  function e() {
    var e = { m_FloatBall: null, m_CustomPop: null, init: function (t) {}, loadRes: function () {}, onLoadedComplete: function (t) {}, wxShow: function (t) {
        this.onShow(t);
      }, onShow: function (t) {}, getFloatBall: function () {
        return this.m_FloatBall || (this.m_FloatBall = new t.DDSDK_Component.floatballUI()), this.m_FloatBall;
      }, getCustomPopUI: function (e) {
        let i = new t.DDSDK_Component.customPopUI(e);return i.visible = !0, i.pos(300, 500), Laya.stage.addChild(i), i;
      }, hideAll: function () {
        t.DDSDK.log("render hideAll..."), DDSDK.getData("show").hideAll || (DDSDK.getData("show").hideAll = !0);
      } };e.create_M_AniAD = e.createAniADList, e.getrewardBK = e.getRewardBK, e.getItem = function (t) {
      return Laya.LocalStorage.getItem(t);
    }, e.setItem = function (t, e) {
      Laya.LocalStorage.setItem(t, e);
    }, e.removeItem = function (t) {
      Laya.LocalStorage.removeItem(t);
    }, e.setTimeout = function (t, e) {
      Laya.timer.once(e, null, t);
    }, e.navigateAppFail = function (t) {
      switch (t) {case 1:
          this.showHotGame(!0);break;case 2:
          this.showTryDlg(!0);break;case 3:
          this.showTryGame(!0);}
    }, e.ajax = function (e, i, a, n) {
      if (e && !(e.length < 1)) {
        var o = null;if (i) for (var s in o = "", i) o += "&" + s + "=" + i[s];var r = "post";i || (r = "get");var l = new Laya.HttpRequest(),
            d = e;t.DDSDK.log("ajax:", d), l.send(d, o, r, "text"), l.once(Laya.Event.COMPLETE, this, function (e) {
          var i = l.data;try {
            i = JSON.parse(i);
          } catch (e) {
            i = l.data;
          }t.DDSDK.log("ajax succ", i), a(i);
        }), l.once(Laya.Event.ERROR, this, function (e) {
          t.DDSDK.log("ajax fail", e), n(e);
        });
      }
    }, t.LAYA_RENDER = e, t.DDSDK_Render = LAYA_RENDER;
  }"undefined" != typeof define && define.amd ? define(function () {
    return e;
  }) : "undefined" != typeof module && module.exports && (module.exports = e), t.DDSDK_InitRender = e, t.DDSDK_Component = {}, t.DDSDK_Common = {};
}("undefined" != typeof window ? window : this), function (t) {
  function e() {
    return !!("wx" in window && window.wx.showShareMenu);
  }window.LJ_EVENT = function () {
    if (e()) {
      var i = {},
          a = this;window.DDSDK_MD5KEY && "" != window.DDSDK_MD5KEY ? i.app_key = window.DDSDK_MD5KEY : i.app_key = window.DDSDK_APPKEY, i.getLocation = !1, String.prototype.replaceAll = function (t, e) {
        return this.replace(new RegExp(t, "gm"), e);
      }, wx.Queue = new function () {
        this.concurrency = 5, this.queue = [], this.tasks = [], this.activeCount = 0;var t = this;this.push = function (e) {
          this.tasks.push(new Promise(function (i, a) {
            var n = function () {
              t.activeCount++, e().then(function (t) {
                i(t);
              }).then(function () {
                t.next();
              });
            };t.activeCount < t.concurrency ? n() : t.queue.push(n);
          }));
        }, this.all = function () {
          return Promise.all(this.tasks);
        }, this.next = function () {
          t.activeCount--, t.queue.length > 0 && t.queue.shift()();
        };
      }(), wx.Queue.all();var n = "1.0.0",
          o = "",
          s = function () {
        var t = "";try {
          t = wx.getStorageSync("ljstat_uuid"), wx.setStorageSync("lj_ifo", !0);
        } catch (e) {
          t = "uuid_getstoragesync";
        }if (t) o = !1;else {
          t = function () {
            function t() {
              return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }return t() + t() + t() + t() + t() + t() + t() + t();
          }(), o = !0;try {
            wx.setStorageSync("ljstat_uuid", t);
          } catch (t) {
            wx.setStorageSync("ljstat_uuid", "uuid_getstoragesync");
          }
        }return t;
      }(),
          r = {},
          l = "",
          d = "",
          c = !1,
          h = "",
          m = "",
          u = "",
          D = "",
          _ = 0,
          p = "",
          g = wx.getLaunchOptionsSync(),
          f = Date.now(),
          y = "" + Date.now() + Math.floor(1e7 * Math.random()),
          w = "" + Date.now() + Math.floor(1e7 * Math.random()),
          S = 0,
          v = "",
          x = "",
          I = !0,
          b = ["ljSendEvent", "ljOnShareAppMessage", "ljShareAppMessage", "ljOnShareTimeline", "ljSendSession", "ljSendOpenid", "ljOpenEvent", "ljSetUseInfo"];Promise.all([new Promise(function (t, e) {
        wx.getSetting({ success: function (e) {
            e.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function (e) {
                x = O(e.userInfo.avatarUrl.split("/")), t(e);
              }, fail: function () {
                t("");
              } }) : t("");
          }, fail: function () {
            t("");
          } });
      }), new Promise(function (t, e) {
        wx.getNetworkType({ success: function (e) {
            t(e);
          }, fail: function () {
            t("");
          } });
      }), new Promise(function (t, e) {
        i.getLocation ? wx.getLocation({ success: function (e) {
            t(e);
          }, fail: function () {
            t("");
          } }) : wx.getSetting({ success: function (e) {
            e.authSetting["scope.userLocation"] ? (wx.getLocation({ success: function (e) {
                t(e);
              }, fail: function () {
                t("");
              } }), t("")) : t("");
          }, fail: function () {
            t("");
          } });
      })]).then(function (t) {
        "" !== t[2] ? (r.lat = t[2].latitude || "", r.lng = t[2].longitude || "", r.spd = t[2].speed || "") : (r.lat = "", r.lng = "", r.spd = ""), "" !== t[1] ? r.nt = t[1].networkType || "" : r.nt = "";var e = j(r);e.tp = "Init", "" !== t[0] && (e.ufo = t[0], v = t[0]), C(e, "Init");
      }), window.onshow = function (t) {
        localStorage.setItem("show", 1), t.channel = g.query.channel, p = 0, g = t, S = Date.now(), I || (y = "" + Date.now() + Math.floor(1e7 * Math.random()), o = !1, wx.setStorageSync("lj_ifo", !1)), I = !1;var e = j(r),
            i = j(r);e.sm = S - f, e.tp = "Show", !t.query.lj_share_src || "1044" !== t.scene && "1007" !== t.scene && "1008" !== t.scene ? t.query.lj_share_src && (i.tp = "ShareClick", t.time = Date.now(), t.channel = g.query.channel, i.ct = "1", C(i, "Event")) : (i.tp = "ShareClick", new Promise(function (t, e) {
          "1044" == g.scene ? wx.getShareInfo({ shareTicket: g.shareTicket, success: function (e) {
              t(e);
            }, fail: function () {
              t("");
            } }) : t("");
        }).then(function (t) {
          i.ct = t, C(i, "Event");
        })), C(e, "Show");
      }, wx.onShow(window.onshow), wx.onHide(function () {
        S <= 0 && (S = Date.now());var t = j(r);t.tp = "Hide", t.dr = Math.round((Date.now() - S) / 1e3), "" === v ? wx.getSetting({ success: function (e) {
            e.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function (e) {
                t.ufo = e, v = e, x = O(e.userInfo.avatarUrl.split("/")), C(t, "Hide");
              } }) : C(t, "Hide");
          } }) : C(t, "Hide");
      }), wx.onError(function (t) {
        var e = j(r);e.tp = "lj_error_message", e.ct = t, _++, C(e, "Event");
      });for (var P = { ljSendEvent: function (e, i) {
          var a = j(r);"" !== e && "string" == typeof e && e.length <= 2048 ? (a.tp = e, "string" == typeof i && i.length <= 2048 ? (a.ct = String(i), C(a, "Event")) : "object" == typeof i ? (JSON.stringify(i).length >= 2048 && t.DDSDK.error("自定义事件参数不能超过2048个字符"), a.ct = JSON.stringify(i), C(a, "Event")) : void 0 === i || "" === i ? C(a, "Event") : t.DDSDK.error("事件参数必须为String,Object类型,且参数长度不能超过2048个字符")) : t.DDSDK.error("事件名称必须为String类型且不能超过2048个字符");
        }, ljOnShareAppMessage: function (e) {
          wx.updateShareMenu({ withShareTicket: !0, complete: function () {
              wx.onShareAppMessage(function () {
                t.DDSDK.log("----------\x3e>>>>>>>>", g);var i = e(),
                    a = "",
                    n = "";a = void 0 !== i.success ? i.success : "", n = void 0 !== i.fail ? i.fail : "";i.st = Date.now();var o = "lj_share_src=" + s + "&lj_share_img=" + i.imageUrl + "&lj_share_title=" + i.title + "&lj_share_openid=" + d + "&" + g + "&lj_share_time=" + i.st + "&lj_share_isnew=" + c + "&lj_share_unionid=" + h + "&lj_share_account_id=" + u + "&lj_share_role_id=" + m + "&lj_share_server_id=" + D,
                    l = j(r);return i.channel = g.query.channel, i.query = o, i.is_new = c, i.unionID = h, l.ct = i, l.tp = "ShareChain", C(l, "Event"), i.success = function (t) {
                  l.tp = "lj_share_status", C(l, "Event"), "" !== a && a(t);
                }, i.fail = function (t) {
                  l.tp = "lj_share_fail", C(l, "Event"), "" !== n && n(t);
                }, i;
              });
            } });
        }, ljOnShareTimeline: function (e) {
          wx.updateShareMenu({ withShareTicket: !0, complete: function () {
              wx.onShareTimeline(function () {
                t.DDSDK.log("----------\x3e>>>>>>>>", g);var i = e(),
                    a = "",
                    n = "";a = void 0 !== i.success ? i.success : "", n = void 0 !== i.fail ? i.fail : "";i.st = Date.now();var o = "lj_share_src=" + s + "&lj_share_img=" + i.imageUrl + "&lj_share_title=" + i.title + "&lj_share_openid=" + d + "&" + g + "&lj_share_time=" + i.st + "&lj_share_isnew=" + c + "&lj_share_unionid=" + h + "&lj_share_account_id=" + u + "&lj_share_role_id=" + m + "&lj_share_server_id=" + D,
                    l = j(r);return i.channel = g.query.channel, i.query = o, i.is_new = c, i.unionID = h, l.ct = i, l.tp = "ShareChainFriends", C(l, "Event"), i.success = function (t) {
                  l.tp = "lj_share_status", C(l, "Event"), "" !== a && a(t);
                }, i.fail = function (t) {
                  l.tp = "lj_share_fail", C(l, "Event"), "" !== n && n(t);
                }, i;
              });
            } });
        }, ljShareAppMessage: function (e) {
          var i = e,
              a = "",
              n = "",
              o = (a = void 0 !== i.success ? i.success : "", n = void 0 !== i.fail ? i.fail : "", "");for (var l in i) "function" != typeof i[l] && (o += "query" === l ? i[l] + "&" : l + "=" + i[l] + "&");t.DDSDK.log("----------\x3e>>>>>>>>", g.query.channel), i.st = Date.now(), o += "lj_share_src=" + s + "&lj_share_img=" + i.imageUrl + "&lj_share_title=" + i.title + "&lj_share_openid=" + d + "&lj_share_time=" + i.st + "&lj_share_is_new=" + c + "&lj_share_unionid=" + h + "&lj_share_account_id=" + u + "&lj_share_role_id=" + m + "&lj_share_server_id=" + D;var _ = j(r);i.query = o, i.channel = g.query.channel, i.is_new = c, i.unionID = h, _.ct = i, _.tp = "ShareChain", C(_, "Event"), i.success = function (t) {
            _.tp = "lj_share_status", C(_, "Event"), "" !== a && a(t);
          }, i.fail = function (t) {
            _.tp = "lj_share_fail", C(_, "Event"), "" !== n && n(t);
          }, wx.updateShareMenu({ withShareTicket: !0, complete: function () {
              wx.shareAppMessage(i);
            } });
        }, ljSendSession: function (e) {
          if ("" !== e && e) {
            var i = j(r);i.tp = "session", i.ct = "session", l = e, "" === v ? wx.getSetting({ success: function (t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function (t) {
                    i.ufo = t, C(i, "Event");
                  } }) : C(i, "Event");
              } }) : (i.ufo = v, "" !== v && (i.gid = ""), C(i, "Event"));
          } else t.DDSDK.error("请传入从后台获取的session_key");
        }, ljSendOpenid: function (e) {
          if ("" !== e.openId && e.openId) {
            d = e.openId, c = e.isNewUser;var i = j(r);i.openid = e.openId, i.new = e.isNewUser, e.adId && (i.ad_id = e.adId), e.adChannel && (i.ad_channel = e.adChannel), e.unionId && (i.unionID = e.unionId, h = e.unionId), i.tp = "Openid", i.ct = e, C(i, "Event");
          } else t.DDSDK.error("openID不能为空");
        }, ljSetUseInfo: function (t) {
          t.role_id && (m = t.role_id), t.account_id && (u = t.account_id), t.server_id && (D = t.server_id), t.openId && (d = t.openId);var e = j(r);e.tp = "UserInfo", e.ct = t, C(e, "Event");
        } }, k = 0; k < b.length; k++) !function (t, e) {
        Object.defineProperty(a, t, { value: e, writable: !1, enumerable: !0, configurable: !0 });
      }(b[k], P[b[k]]);try {
        var K = wx.getSystemInfoSync();r.br = K.brand || "", r.md = K.model, r.pr = K.pixelRatio, r.sw = K.screenWidth, r.sh = K.screenHeight, r.ww = K.windowWidth, r.wh = K.windowHeight, r.lang = K.language, r.wv = K.version, r.sv = K.system, r.wvv = K.platform, r.fs = K.fontSizeSetting, r.wsdk = K.SDKVersion, r.bh = K.benchmarkLevel || "", r.bt = K.battery || "", r.wf = K.wifiSignal || "", r.lng = "", r.lat = "", r.nt = "", r.spd = "", r.ufo = null;
      } catch (t) {}
    }function C(e, a) {
      e.openid = d, e.role_id = m, e.account_id = u, e.server_id = D, e.app_id = window.DDSDK_GNAME, e.union_id = h, p++, e.as = w, e.at = y, e.rq_c = p, e.ifo = o, e.ak = i.app_key, e.uu = s, e.v = n, e.st = Date.now(), e.ev = a, e.channel = g.query.channel, e.wsr = g, e.ufo = function (t) {
        if (void 0 === t || "" === t) return "";var e = {};for (var i in t) "rawData" != i && "errMsg" != i && (e[i] = t[i]);return e;
      }(e.ufo), e.ec = _, wx.Queue.push(function () {
        return e.ct && ("openid" == e.ct && (e.ct = '{"openid":"openid"}'), "string" == typeof e.ct && (e.ct = e.ct.replace(/\\/g, ""), e.ct = JSON.parse(e.ct))), new Promise(function (i, a) {
          t.DDSDK.log("request---------\x3e"), t.DDSDK.log(e), wx.request({ url: "https://sdkpoint.chiji-h5.com/record-receive/api/game", data: e, header: { se: l || "", op: d || "", img: x || "" }, method: "POST", success: function (a) {
              a.data && (t.DDSDK.log(a.data), 1 == a.data.success && DDSDK.m_Data && "isStartLog" in DDSDK.m_Data && 1 == DDSDK.m_Data.isStartLog && t.DDSDK.warn("日志打点：", e.tp)), i("");
            }, fail: function () {
              i("");
            } });
        });
      });
    }function j(t) {
      var e = {};for (var i in t) e[i] = t[i];return e;
    }function O(t) {
      for (var e = "", i = 0; i < t.length; i++) t[i].length > e.length && (e = t[i]);return e;
    }
  };var i = null;e() && (i = new window.LJ_EVENT()), "undefined" != typeof define && define.amd ? define(function () {
    return i;
  }) : "undefined" != typeof module && module.exports && (module.exports = i), i && (i.ver = "1.0.1"), t.LJ_LOGEVENT = i;
}("undefined" != typeof window ? window : this), function (t) {
  function e() {
    var e = { m_FloatBall: null, m_CustomPop: null, init: function (t) {}, loadRes: function () {}, onLoadedComplete: function (t) {}, wxShow: function (t) {
        this.onShow(t);
      }, onShow: function (t) {}, getFloatBall: function () {
        return this.m_FloatBall || (this.m_FloatBall = new t.DDSDK_Component.floatballUI()), this.m_FloatBall;
      }, getCustomPopUI: function (e) {
        let i = new t.DDSDK_Component.customPopUI(e);return i.visible = !0, i.pos(300, 500), Laya.stage.addChild(i), i;
      }, hideAll: function () {
        t.DDSDK.log("render hideAll..."), DDSDK.getData("show").hideAll || (DDSDK.getData("show").hideAll = !0);
      } };e.create_M_AniAD = e.createAniADList, e.getrewardBK = e.getRewardBK, e.getItem = function (t) {
      return Laya.LocalStorage.getItem(t);
    }, e.setItem = function (t, e) {
      Laya.LocalStorage.setItem(t, e);
    }, e.removeItem = function (t) {
      Laya.LocalStorage.removeItem(t);
    }, e.setTimeout = function (t, e) {
      Laya.timer.once(e, null, t);
    }, e.navigateAppFail = function (t) {
      switch (t) {case 1:
          this.showHotGame(!0);break;case 2:
          this.showTryDlg(!0);break;case 3:
          this.showTryGame(!0);}
    }, e.ajax = function (e, i, a, n) {
      if (e && !(e.length < 1)) {
        var o = null;if (i) for (var s in o = "", i) o += "&" + s + "=" + i[s];var r = "post";i || (r = "get");var l = new Laya.HttpRequest(),
            d = e;t.DDSDK.log("ajax:", d), l.send(d, o, r, "text"), l.once(Laya.Event.COMPLETE, this, function (e) {
          var i = l.data;try {
            i = JSON.parse(i);
          } catch (e) {
            i = l.data;
          }t.DDSDK.log("ajax succ", i), a(i);
        }), l.once(Laya.Event.ERROR, this, function (e) {
          t.DDSDK.log("ajax fail", e), n(e);
        });
      }
    }, t.LAYA_RENDER = e, t.DDSDK_Render = LAYA_RENDER;
  }"undefined" != typeof define && define.amd ? define(function () {
    return e;
  }) : "undefined" != typeof module && module.exports && (module.exports = e), t.DDSDK_InitRender = e, t.DDSDK_Component = {}, t.DDSDK_Common = {};
}("undefined" != typeof window ? window : this), function (t) {
  class e extends Laya.View {
    constructor() {
      super();
    }createChildren() {
      super.createChildren(), this.createView(e.uiView), this.init();
    }init() {
      this.m_openCB = null, this.hideTime = 3e3, this.m_constx = 84, this.m_consty = 84, this.m_popbgrx = 200, this.m_poprx = 160, this.m_popbglx = 0, this.m_poplx = -70, this.m_btn1data = null, this.touchState = 0, this.touchMoveState = 0, this._timerOut = 0, this._timerId = 0, this.hasMove = !1, this.m_touchStatus = !1, this.disx = 0, this.disy = 0, this.m_btn.on("click", this, this.onTouch), this.m_popbtn1.on("click", this, this.onBtn1Click), this.m_popbtn2.on("click", this, this.onBtn2Click), this.m_btn.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.m_btn.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.createFeedBack(), this.onAutoHide();
    }onAutoHide(t) {
      clearTimeout(this._timerOut), clearInterval(this._timerId), this.alpha = .5, this.m_pop.visible = !1, this.m_popbg.visible = !1, this.m_hasMove = !1, this.x < Laya.stage.width / 2 ? this.x = 2 : this.x = Laya.stage.width - 2;
    }onTouch(t) {
      this.m_pop && !this.m_touchMoveStatus && (clearTimeout(this._timerOut), this.m_hasMove || (this.m_pop.visible ? (this.m_pop.visible = !1, this.m_popbg.visible = !1) : (this.m_pop.visible = !0, this.m_popbg.visible = !0, this.setFeedBackPos()), this.x < Laya.stage.width / 2 ? (this.m_pop.x = this.m_poprx, this.m_popbg.x = this.m_popbgrx, this.x = this.m_constx / 2) : (this.m_pop.x = this.m_poplx, this.m_popbg.x = this.m_popbglx, this.x = Laya.stage.width - this.m_constx / 2)), this._timerOut = setTimeout(() => {
        this.onAutoHide();
      }, this.hideTime));
    }mouseDown(t) {
      clearTimeout(this._timerOut), this.alpha = 1, this.m_touchStatus = !0, this.disx = -(t.stageX - this.x), this.disy = -(t.stageY - this.y), this.m_btn.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }mouseMove(t) {
      if (this.m_touchStatus) {
        var e = t.stageX - this.disx,
            i = t.stageY - this.disy;if (i < this.m_consty / 2 || i > Laya.stage.height - this.m_consty / 2) return this.m_touchMoveStatus = !0, this.m_hasMove = !1, void this.mouseUp(null);this.m_touchMoveStatus = !0, this.m_pop.visible = !1, this.m_popbg.visible = !1, e >= this.m_constx / 2 && e <= Laya.stage.width - this.m_constx / 2 && (this.x = e, this.m_touchMoveStatus = !0), i >= this.m_consty / 2 && i <= Laya.stage.height - this.m_consty / 2 && (this.y = i, this.m_touchMoveStatus = !0), this.m_hasMove = !0;
      }
    }mouseUp(t) {
      var e = this;if (this.m_touchMoveStatus) {
        clearInterval(this._timerId), clearTimeout(this._timerOut);var i = Laya.stage.width / 1280;this.x + this.m_constx <= Laya.stage.width / 2 ? this._timerId = setInterval(function (t) {
          e.x >= t && (e.x = t), e.x - 40 * i >= 0 ? e.x -= 40 * i : (e.x = e.m_constx / 2, e.m_hasMove = !1, clearInterval(e._timerId));
        }, 20, this.x) : this.x + this.m_constx >= Laya.stage.width / 2 && (this._timerId = setInterval(function (t) {
          e.x <= t && (e.x = t), e.x + 40 * i <= Laya.stage.width ? e.x += 40 * i : (e.x = Laya.stage.width - e.m_constx / 2, e.m_hasMove = !1, clearInterval(e._timerId));
        }, 20, this.x));
      } else ;this.m_touchStatus = !1, this.m_touchMoveStatus = !1, this._timerOut = setTimeout(() => {
        this.onAutoHide();
      }, this.hideTime), this.m_btn.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }onBtn1Click() {
      clearTimeout(this._timerOut), clearInterval(this._timerId), this.timerOut = setTimeout(() => {
        this.onAutoHide();
      }, this.hideTime), t.DDSDK.getCustomerServiceByFB(this.m_btn1data);
    }setCustomerData(t) {
      this.m_btn1data = t;
    }onBtn2Click() {
      clearTimeout(this._timerOut), clearInterval(this._timerId), this.timerOut = setTimeout(() => {
        this.onAutoHide();
      }, this.hideTime);
    }setFeedBackPos() {
      let t = window.screen.availWidth / Laya.stage.width,
          e = window.screen.availHeight / Laya.stage.height;this.m_feedback.show(), this.x < Laya.stage.width / 2 ? (this.m_feedback.style.left = 180 * t, this.m_feedback.style.top = this.y * e - 15) : (this.m_feedback.style.left = (Laya.stage.width - 130) * t, this.m_feedback.style.top = this.y * e - 15);
    }createFeedBack() {
      if (!this.m_feedback) {
        var e = t.DDSDK.createFeedbackButton({ type: "text", text: "反馈", left: 0, top: 0, width: 20, height: 40, lineHeight: 10, backgroundColor: "#00000000", color: "#ffffff00", textAlign: "center", fontSize: 16, borderRadius: 4 });this.m_feedback = e;
      }
    }
  }e.uiView = { type: "View", props: { y: 42, x: 200, width: 400, height: 84, anchorY: .5, anchorX: .5 }, child: [{ type: "Image", props: { y: 0, x: 200, width: 197, var: "m_popbg", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/fball_5.png", height: 88 } }, { type: "Box", props: { y: 0, x: 160, width: 84, var: "m_pop", height: 84 }, child: [{ type: "Box", props: { y: 12, x: 84, width: 120, var: "m_btns", height: 60 }, child: [{ type: "Image", props: { y: 5, x: 22, width: 42, var: "m_popbtn1", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/fball_1.png", height: 37 }, child: [{ type: "Text", props: { y: 40, x: 3, var: "m_popbtn1lbl", text: "客服", fontSize: 18, color: "#000000" } }] }, { type: "Image", props: { y: 6, x: 88, width: 42, var: "m_popbtn2", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/fball_3.png", height: 37 }, child: [{ type: "Text", props: { y: 40, x: 3, var: "m_popbtn2lbl", text: "反馈", fontSize: 18, color: "#000000" } }] }] }] }, { type: "Image", props: { y: 0, x: 160, width: 84, var: "m_btn", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/fball_4.png", height: 84 } }] }, t.DDSDK_Component.floatballUI = e;
}("undefined" != typeof window ? window : this), function (t) {
  class e extends Laya.View {
    constructor(t) {
      super(), this.data = t;
    }createChildren() {
      super.createChildren(), this.createView(e.uiView), this.init();
    }init() {
      return this.width = Laya.stage.width, this.height = Laya.stage.height, this.x = 0, this.y = 0, this.anchorOffsetX = Laya.stage.width / 2, this.anchorOffsetY = Laya.stage.height / 2, this.m_popbtn3.visible = !1, this.m_pop.x = (Laya.stage.width / 2 - 150) / 1.5, this.m_pop.y = (Laya.stage.height / 2 + 135) / 1.5, this.m_pop.width = 0, this.m_pop.height = 0, this.m_pop.scaleX = 1.5, this.m_pop.scaleY = 1.5, this.m_bg.width = 3e3, this.m_bg.height = 3e3, this.m_bg.x = 0, this.m_bg.y = 0, this.m_bg.anchorOffsetX = Laya.stage.width / 2, this.m_bg.anchorOffsetY = Laya.stage.height / 2, this.m_bg.alpha = .7, this.m_bg.touchEnabled = !0, this.m_popbg.x = 0, this.m_popbg.y = 0, this.m_popbg.width = 360, this.m_popbg.height = 270, this.m_popbg2.x = 0, this.m_popbg2.y = 0, this.m_popbg2.width = 360, this.m_popbg2.height = 270, this.m_popbtn1.x = 0, this.m_popbtn1.y = 220, this.m_popbtn1.width = 160, this.m_popbtn1.height = 50, this.m_popbtn1.alpha = 0, this.m_popbtn2.x = 180, this.m_popbtn2.y = 220, this.m_popbtn2.width = 160, this.m_popbtn2.height = 50, this.m_popbtn2.alpha = 0, this.m_popbtn3.x = 90, this.m_popbtn3.y = 220, this.m_popbtn3.width = 160, this.m_popbtn3.height = 50, this.m_popbtn3.alpha = 0, this.m_popbtn1.on("click", this, this.onTouchPopBtn1), this.m_popbtn2.on("click", this, this.onTouchPopBtn2), this.m_popbtn3.on("click", this, this.onTouchPopBtn3), this.m_bg.on("click", this, this.onTouchBg), this.m_popbg.on("click", this, () => {
        console.log("bg1");
      }), this.m_popbg2.on("click", this, () => {
        console.log("bg2");
      }), this;
    }onTouchBg() {
      t.DDSDK.getCustomPopUI(this.data), this.data && this.data.cb && this.data.cb(!0), this.parent.removeChild(this);
    }onTouchPopBtn2() {
      this.data && (this.data.phone && "" != this.data.phone ? (t.DDSDK.getCustomerServiceByFB(this.data), t.DDSDK.getCustomPopUI(this.data), this.data && this.data.cb(!0), this.parent.removeChild(this)) : (this.m_popbg2.visible = !0, this.m_popbtn3.visible = !0, this.m_popbtn1.visible = !1, this.m_popbtn2.visible = !1, this.m_popbg.visible = !1));
    }onTouchPopBtn3() {
      t.DDSDK.getCustomPopUI(this.data), this.data && this.data.cb && this.data.cb(!0), this.parent.removeChild(this);
    }onTouchPopBtn1() {
      t.DDSDK.getCustomPopUI(this.data), this.data && this.data.cb && this.data.cb(!1), this.parent.removeChild(this);
    }loadImg(t, e) {
      let i = new egret.ImageLoader();i.crossOrigin = "anonymous", i.load(e), i.once(egret.Event.COMPLETE, e => {
        if (e.currentTarget.data) {
          let i = new egret.Texture();i.bitmapData = e.currentTarget.data, t.texture = i;
        }
      }, this);
    }
  }e.uiView = { x: 0, type: "View", selectedBox: 3, selecteID: 5, props: { top: 0, sceneColor: "#000000", right: 0, left: 0, bottom: 0 }, nodeParent: -1, label: "View", isOpen: !0, isDirectory: !0, hasChild: !0, compId: 1, child: [{ x: 15, type: "Image", props: { var: "m_bg", top: 0, skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/186x186_mask.png", right: 0, name: "m_bg", mouseEnabled: !0, left: 0, bottom: 0, alpha: .6 }, nodeParent: 1, label: "Image(m_bg)", isDirectory: !1, isAniNode: !0, hasChild: !1, compId: 2, child: [] }, { x: 15, type: "Box", props: { var: "m_pop", centerY: -64, centerX: -31, anchorY: .5, anchorX: .5 }, nodeParent: 1, label: "Box(m_pop)", isOpen: !0, isDirectory: !0, isAniNode: !0, hasChild: !0, compId: 3, child: [{ x: 30, type: "Image", props: { y: 10, x: 10, var: "m_popbg2", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/ui_tishi_02.png", mouseEnabled: !0 }, nodeParent: 3, label: "Image(m_popbg2)", isDirectory: !1, isAniNode: !0, hasChild: !1, compId: 5, child: [] }, { x: 30, type: "Image", props: { var: "m_popbg", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/ui_tishi_01.png", mouseEnabled: !0 }, nodeParent: 3, label: "Image(m_popbg)", isDirectory: !1, isAniNode: !0, hasChild: !1, compId: 4, child: [] }, { x: 30, type: "Image", props: { y: 20, x: 20, var: "m_popbtn3", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/ui_tishi_01.png", mouseEnabled: !0 }, nodeParent: 3, label: "Image(m_popbtn3)", isDirectory: !1, isAniNode: !0, hasChild: !1, compId: 6, child: [] }, { x: 30, type: "Image", props: { y: 30, x: 30, var: "m_popbtn2", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/ui_tishi_01.png", mouseEnabled: !0 }, nodeParent: 3, label: "Image(m_popbtn2)", isDirectory: !1, isAniNode: !0, hasChild: !1, compId: 7, child: [] }, { x: 30, type: "Image", props: { y: 40, x: 40, var: "m_popbtn1", skin: "https://commcdn.chiji-h5.com/ljsdk/onlyjs/tryplay/ui_tishi_01.png", mouseEnabled: !0 }, nodeParent: 3, label: "Image(m_popbtn1)", isDirectory: !1, isAniNode: !0, hasChild: !1, compId: 8, child: [] }] }] }, t.DDSDK_Component.customPopUI = e;
}("undefined" != typeof window ? window : this);