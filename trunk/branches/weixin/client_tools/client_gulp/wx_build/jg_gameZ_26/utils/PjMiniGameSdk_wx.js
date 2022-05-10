window.pjsdk = function () {
	return {
		//初始化SDK
		initSdk: function (channelGameId, channel, appVersion, platformType) {
			window.pjsdk.channelGameId = channelGameId;
			window.pjsdk.channel = channel;
			window.pjsdk.appVersion = appVersion;
			window.pjsdk.platformType = platformType;
			window.pjsdk.sdkVersion = "PjMiniGameSdk1.1";

			//公共参数
			window.pjsdk.publicParam = {};
			window.pjsdk.publicParam["channelGameId"] = window.pjsdk.channelGameId;
			window.pjsdk.publicParam["channel"] = window.pjsdk.channel;
			window.pjsdk.publicParam["appVersion"] = window.pjsdk.appVersion;
			window.pjsdk.publicParam["platformType"] = window.pjsdk.platformType;
			window.pjsdk.publicParam["sdkVersion"] = window.pjsdk.sdkVersion;
			window.pjsdk.publicParam["udid"] = window.pjsdk.getUdid();
			window.pjsdk.publicParam["imei"] = window.pjsdk.getUdid();

			window.pjsdk.apiHost = "https://h5.paojiao.cn";

			var obj = wx.getLaunchOptionsSync();
			var wxQuery = obj.query;
			console.log('小游戏 obj 参数:', JSON.stringify(obj));
			console.log('小游戏 query 参数:', JSON.stringify(wxQuery));

			//获取cid；优先获取本地cid，获取不到再获取query中的cid
			var localPjChannel = window.pjsdk.getItem(window.pjsdk.channelGameId + "_channel");
			console.log("小游戏 localPjChannel 参数:" + localPjChannel);
			if (localPjChannel == null || localPjChannel == '') {
				if (wxQuery.pjChannel != null && wxQuery.pjChannel != "") {
					window.pjsdk.channel = wxQuery.pjChannel;
					window.pjsdk.setItem(window.pjsdk.channelGameId + "_channel", wxQuery.pjChannel);
				}
			} else {
				window.pjsdk.channel = localPjChannel;
			}

			//更新公共参数cid
			window.pjsdk.publicParam["channel"] = window.pjsdk.channel;

			//兼容旧版gdt_vid处理方式
			var loclaGdtVid = window.pjsdk.getItem(window.pjsdk.channelGameId + "_gdt_vid");
			console.log("小游戏 loclaGdtVid 参数:" + loclaGdtVid);
			if (loclaGdtVid == null || loclaGdtVid == '') {
				if (wxQuery.gdt_vid != null && wxQuery.gdt_vid != "") {
					window.pjsdk.setItem(window.pjsdk.channelGameId + "_gdt_vid", wxQuery.gdt_vid);
					window.pjsdk.publicParam["gdt_vid"] = wxQuery.gdt_vid;
				}
			} else {
				window.pjsdk.publicParam["gdt_vid"] = loclaGdtVid;
			}

			//获取pjClickId参数;优先获取本地参数，获取不到再获取query参数
			var localPjClickId = window.pjsdk.getItem(window.pjsdk.channelGameId + "_pjClickId");
			console.log("小游戏 localPjClickId 参数:" + localPjClickId);
			if (localPjClickId == null || localPjClickId == '') {
				if (wxQuery.pjClickId != null && wxQuery.pjClickId != "") {
					window.pjsdk.setItem(window.pjsdk.channelGameId + "_pjClickId", wxQuery.pjClickId);
					window.pjsdk.publicParam["pjClickId"] = wxQuery.pjClickId;
				}
			} else {
				window.pjsdk.publicParam["pjClickId"] = localPjClickId;
			}

			console.info("小游戏公共参数:" + JSON.stringify(window.pjsdk.publicParam));

			//初始化小游戏
			window.pjsdk.api(window.pjsdk.publicParam, "/api/initWxGame", function (data) {
				console.info("小游戏初始化返回:" + JSON.stringify(data));
				if (data.code == 1) {
					//分享图片
					window.pjsdk.imageUrl = data.data.imgUrl;
					//用户中心appid
					window.pjsdk.ucAppid = data.data.ucAppid;
					//悬浮球logo
					window.pjsdk.logoUrl = data.data.logoUrl;
					//显示分享菜单
					wx.showShareMenu();
					wx.onShareAppMessage(function () {
						return {
							imageUrlId: data.data.imgId,
							imageUrl: data.data.imgUrl
						}
					});
					console.info("小游戏初始化成功");
				} else {
					console.info("小游戏初始化失败");
				}
			});

		},
		//登录
		login: function (callback) {
			var platformType = window.pjsdk.platformType;
			console.log("PJ:SDK开始登录:" + platformType);
			wx.login({
				success(res) {
					if (res.code) {
						console.log("PJ:" + platformType + "登录成功:" + JSON.stringify(res));
						//校验token
						var param = window.pjsdk.publicParam; //公共参数
						param["sdkToken"] = encodeURIComponent(JSON.stringify({
							js_code: res.code
						}));
						window.pjsdk.getToken(param, function (data) {
							if (data.code != 1) {
								console.log("PJ:" + platformType + "登录失败:" + data.msg);
								wx.showToast({
									title: '登录失败:' + data.msg,
								});
								return;
							}
							window.pjsdk.uid = data.data.userInfo.uid; //用户id
							window.pjsdk.token = data.data.userInfo.token; //用户token
							window.pjsdk.suid = data.data.userInfo.suid; //渠道用户id
							callback(data);
						});
					} else {
						wx.showToast({
							title: '登录失败:' + res.errMsg,
						});
					}
				}
			});
		},
		//支付
		pay: function (param) {
			var payParam = window.pjsdk.publicParam; //公共参数
			for (var key in param) {
				payParam[key] = param[key]
			}
			payParam["uid"] = window.pjsdk.uid;
			payParam["sdkUserId"] = window.pjsdk.sdkToken;

			console.log("PJ:拉起支付:" + JSON.stringify(payParam));
			//生成订单
			window.pjsdk.api(payParam, "/api/getOrderNo", function (data) {
				console.info("getOrderNo返回：" + JSON.stringify(data));
				if (data.code != 1) {
					console.log("PJ:生成订单失败:" + data.msg);
					return;
				}
				if (data.data.orderInfo.ptype == 2) {

					var wxPayParams = window.pjsdk.publicParam;
					wxPayParams["orderPirce"] = data.data.orderInfo.money;
					wxPayParams["uid"] = data.data.orderInfo.uid;
					wxPayParams["orderNumber"] = data.data.orderInfo.orderNumber;

					console.info("wx拉起支付订单:" + JSON.stringify(wxPayParams));
					window.pjsdk.api(wxPayParams, "/pay/getWxPayUrl", function (data) {
						console.info("wx支付拉起返回：" + JSON.stringify(data));
						const title = data.data.title;
						const content = data.data.content;
						const wxPayUrl = data.data.wxPayUrl;
						wx.showModal({
							title: title,
							showCancel: false,
							content: content,
							confirmText: '前往粘贴',
							success: (res) => {
								if (res.confirm) {
									wx.setClipboardData({
										data: wxPayUrl,
										success: (res) => {
											wx.showToast({
												title: '内容已复制',
											})
										}

									})
									var msgParmas = {
										showMessageCard: true,
										sendMessageImg: window.pjsdk.imageUrl,
									}
									wx.openCustomerServiceConversation(msgParmas);

								} else if (res.cancel) {
									console.log('用户点击取消')
								}
							},
						});
					});
				} else {
					var envStats = data.data.envStats;
					wx.requestMidasPayment({
						mode: 'game', //支付的类型，不同的支付类型有各自额外要传的附加参数。
						env: envStats == 0 ? 1 : 0, //0	米大师正式环境 1 米大师沙箱环境 环境配置  
						offerId: data.data.extension, //在米大师侧申请的应用 id 
						currencyType: 'CNY', //币种
						platform: 'android',
						zoneId: '1',
						buyQuantity: data.data.orderInfo
							.money, //购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。   * 
						success: function () {

							var payCallBackParm = window.pjsdk.publicParam;
							payCallBackParm["openid"] = window.pjsdk.suid;
							payCallBackParm["amt"] = data.data.orderInfo.money;
							payCallBackParm["bill_no"] = data.data.orderInfo.orderNumber;

							console.info("请求payCallBack参数：" + JSON.stringify(
								payCallBackParm));

							var payCallBackUrl = "/api/payCallBack/" + data.data.orderInfo
								.channelGameId
							window.pjsdk.api(payCallBackParm, payCallBackUrl, function (
								data) {
								console.info("wx支付回调返回：" + JSON.stringify(data));
								if (data.code == "success") {
									wx.showToast({
										title: '支付成功',
										icon: 'success'
									});
								} else {
									wx.showToast({
										title: '支付失败',
										icon: 'error'
									});
								}
							});
						},
						fail: function (res) {
							console.info("wx拉起支付返回参数:" + JSON.stringify(res));
							wx.showToast({
								title: res.errMsg,
								icon: 'error'
							});
						}
					});
				}
			});
		},
		reportRoleinfo: function (param) {
			var reportParm = window.pjsdk.publicParam;
			reportParm["uid"] = window.pjsdk.uid;
			reportParm["token"] = window.pjsdk.token;
			param["sdkVersion"] = window.pjsdk.sdkVersion;
			param["openid"] = window.pjsdk.suid;
			for (var key in param) {
				reportParm[key] = param[key]
			}

			console.log("PJ:上报角色信息:" + JSON.stringify(reportParm));
			window.pjsdk.api(reportParm, "/api/reportRoleInfo");
		},
		//token验证
		getToken: function (param, callback) {
			param["channelGameId"] = window.pjsdk.channelGameId;
			param["appVersion"] = window.pjsdk.appVersion;
			param["channel"] = window.pjsdk.channel;
			param["sdkVersion"] = window.pjsdk.sdkVersion;
			console.log("PJ:token验证:" + JSON.stringify(param));
			window.pjsdk.api(param, "/api/getToken", callback);
		},

		//文字内容校验
		msgSecCheck: function (content, callback) {
			var param = {
				"sdkVersion": window.pjsdk.sdkVersion,
				"channel": window.pjsdk.channel,
				"channelGameId": window.pjsdk.channelGameId,
				"uid": window.pjsdk.uid,
				"content": content,
				"appVersion": window.pjsdk.appVersion,
				"openid": window.pjsdk.suid,
				"platformType": window.pjsdk.platformType
			};
			window.pjsdk.api(param, "/api/msgSecCheck", function (data) {
				console.info("小游戏文字内容校验结果:" + JSON.stringify(data));
				if (data.code == 1) {
					callback(data);
				} else {
					callback(data);
				}
			});

		},
		//初始化悬浮球
		initFloat: function (stage) {
			try {
				if (window.Laya) {
					window.pjsdk.initLayaFloat(stage);
				} else if (window.egret) {
					console.log("暂不支持当前引擎悬浮球");
				} else {
					console.log("暂不支持当前引擎悬浮球");
				}
			} catch (e) {
				console.log(e);
			}
		},
		//初始化laya悬浮球
		initLayaFloat: function (stage) {
			console.log("初始化laya悬浮球");
			if (!window.pjsdk.logoUrl) {
				return;
			}
			var ape = new Laya.Sprite();
			var logoDefHeight = 100;
			var logoWidth = 90;
			//拖动限制区域
			var dragRegion = new Laya.Rectangle(0, 0, stage.width, stage.height);
			//加载logo
			ape.loadImage(window.pjsdk.logoUrl,0,0,0,0, Laya.Handler.create(this, function () {
				ape.zOder = 999999;
				ape.pos(0, logoDefHeight);
				stage.addChild(ape);
				logoWidth = ape.width;
				//隐藏悬浮球
				hideFloat(-logoWidth / 2, logoDefHeight);
			}));
			// 定义标志符
			let isMouseEvent = false;
			let targetElement = null;

			//按下
			ape.on(Laya.Event.MOUSE_DOWN, this, function (e) {
				ape.alpha = 1; //设置透明度
				updateFloat(0, ape.y);
				ape.startDrag(dragRegion);
				targetElement = e.target;
				isMouseEvent = false;
			});

			//移动
			ape.on(Laya.Event.MOUSE_MOVE, this, function (e) {
				ape.alpha = 1; //设置透明度
				if (targetElement) {
					isMouseEvent = true;
				}
			});

			//松开
			ape.on(Laya.Event.MOUSE_UP, this, function (e) {
				updateFloat(0, ape.y);
				hideFloat(-logoWidth / 2, ape.y);
				if (isMouseEvent) {
					//console.log("拖拽释放");
				} else {
					//console.log("点击laya悬浮球");
					targetElement = null;
					window.pjsdk.openUc();
				}
			});

			function hideFloat(x, y) {
				setTimeout(function () {
					ape.alpha = 0.5;
					updateFloat(x, y);
				}, 1500);
			}

			function updateFloat(x, y) {
				ape.pos(x, y);
			}
		},
		//打开用户中心小程序
		openUc: function () {
			wx.navigateToMiniProgram({
				appId: window.pjsdk.ucAppid,
				path: 'pages/login/login?fromChannel=' + window.pjsdk.channel + "&fromGameId=" + window
					.pjsdk.channelGameId +
					"&fromUid=" + window.pjsdk.uid + "&fromOpenid=" + window.pjsdk.suid +
					"&fromToken=" + window.pjsdk.token,
				success(res) {},
				fail(res) {},
				complete(res) {}
			});
		},
		//转端
		openZd: function () {
			wx.navigateToMiniProgram({
				appId: window.pjsdk.ucAppid,
				path: 'pages/login/zd?fromChannel=' + window.pjsdk.channel + "&fromGameId=" + window
					.pjsdk.channelGameId +
					"&fromUid=" + window.pjsdk.uid + "&fromOpenid=" + window.pjsdk.suid +
					"&fromToken=" + window.pjsdk.token,
				success(res) {},
				fail(res) {},
				complete(res) {}
			});
		},
		//请求api
		api: function (param, apiName, callback) {
			var url = window.pjsdk.buildURL(window.pjsdk.apiHost + apiName, param);
			//console.log("PJ:api url:" + url);
			window.pjsdk.httpGet(url, function (retData) {
				callback && callback(retData);
			});
		},
		//生成udid
		getUdid: function () {
			var udid = window.pjsdk.getItem("udid");
			if (udid != null && udid != "") {
				return udid;
			} else {
				var u = window.pjsdk.getItem("udid");
				if (!u) {
					var gu = window.pjsdk.genUdid();
					window.pjsdk.setItem("udid", gu);
					return gu;
				} else {
					return u;
				}
			}

		},

		s4: function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		},

		genUdid: function () {
			return (window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk
				.s4() + window.pjsdk.s4() + window.pjsdk.s4() + window.pjsdk.s4());
		},

		getItem: function (key) {
			if (window.localStorage) {
				return window.localStorage.getItem("pj_" + key)
			} else {
				var arr = document.cookie.match(new RegExp("(^| )pj_" + key + "=([^;]*)(;|$)"));
				if (arr != null) {
					return unescape(arr[2]);
				}
			}
			return null;
		},


		setItem: function (key, value) {
			if (window.localStorage) {
				try {
					window.localStorage.setItem("pj_" + key, value);
				} catch (err) {}
			} else {
				var exp = new Date;
				exp.setTime(exp.getTime() + 365 * 24 * 60 * 60 * 1e3);
				document.cookie = "pj_" + key + "=" + escape(value) + ";expires=" + exp.toGMTString();
			}
		},


		//url拼接参数
		buildURL: function (url, args) {
			if (url) {
				var urlList = url.split("#");
				var params = {};
				var query = urlList[0].split("?")[1];
				var result = urlList[0].split("?")[0] + "?";
				if (query) {
					query = query.split("&");
					for (var i in query) {
						var vars = query[i].split("=");
						params[vars[0]] = vars[1]
					}
				}
				for (var i in args) {
					if (args[i] !== undefined && args[i] !== null) {
						params[i] = args[i];
					}
				}
				var first = true;
				for (var i in params) {
					result += (first ? "" : "&") + i + "=" + (params[i] ? params[i] : "");
					first = false;
				}
				return result + (urlList[1] ? "#" + urlList[1] : "");
			}
			return "";
		},
		//发送get请求
		httpGet: function (url, callback) {
			//console.log("PJ:请求url开始:" + url);
			var request = new XMLHttpRequest;
			request.open("GET", url);
			request.onreadystatechange = function () {
				//请求成功  
				if (request.readyState === 4 && request.status === 200) {
					var n = request.responseText;
					console.log(n);
					callback && callback(JSON.parse(n));
				};
				request.onerror = function (e) {
					console.log(e);
				};
				request.ontimeout = function (e) {
					console.log(e);
				};
			};
			request.send(null);
		},
	}
}();