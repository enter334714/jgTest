let ln_tool = {
	getSign(app_key = '', params = {}) {
		const sortedParamsQuery = this.getSortAsciiQuery(params);
		const app_key_params = app_key ? `&${app_key}` : '';
		const resultQuery = `${sortedParamsQuery}${app_key_params}`;
		const sign = md5(resultQuery);
		// console.log('明文:', resultQuery);
		// console.log('MD5加密后:', sign);
		return sign;
	},
	getSignedParams(app_key, params = {}) {
		// console.log(app_key);
		const reqParams = JSON.parse(JSON.stringify(params));
		const sign = this.getSign(app_key, reqParams);
		reqParams.sign = sign;
		return reqParams;
	},
	getSortAsciiQuery(obj) {
		const arr = [];
		let num = 0;
		for (const i in obj) {
			arr[num] = i;
			num++;
		}
		const sortArr = arr.sort();
		// let sortObj = {};    //完成排序值
		let str = ''; // 自定义排序字符串
		for (const i in sortArr) {
			str += sortArr[i] + '=' + obj[sortArr[i]] + '&';
			// sortObj[sortArr[i]] = obj[sortArr[i]];
		}
		// 去除两侧字符串
		const char = '&';
		str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
		return str;
	},
	getPhpNow() {
		const now = new Date().getTime();
    return now;
	},
	getDeviceType: () => {
		const systemInfo = wx.getSystemInfoSync()
		// console.log(systemInfo)
		let osType
		if (systemInfo.system.toLowerCase().indexOf('android') > -1) {
			osType = 'android'
		} else if (systemInfo.system.toLowerCase().indexOf('ios') > -1) {
			osType = 'ios'
		} else if (systemInfo.system.toLowerCase().indexOf('win') > -1) {
			osType = 'win'
		} else {
			osType = 'unknow'
		}
		return osType
	},
	getCurrAppid() {
		const systemInfo = wx.getSystemInfoSync();
		let appid = '62984';
		if (systemInfo.system.toLowerCase().indexOf('android') > -1) {
			appid = '62984'
		} else if (systemInfo.system.toLowerCase().indexOf('ios') > -1) {
			appid = '62982'
		} else {
			appid = '62984'
		}
		return appid
	},
	getDeviceUUid() {
		const system = wx.getSystemInfoSync();
		let strSystem = system.model + system.screenHeight + system.screenWidth;
		console.log(strSystem);
		return md5(strSystem);
	}
}
let wxLN_uid = '';
let wxApp_id = '';
	// 广告数据上报
wx.onShow((res) => {
		let query = res.query;
		// console.log("onShow方法1----weixinadinfo：" + query.weixinadinfo)
		// console.log(res)
		// console.log("onShow方法1----weixinadinfo：" + query.weixinadinfo)
		// console.log("onShow方法1----gdt_vid: " + query.weixinadinfo)
		wxLN_uid = res.query.ln_uid;
		wxApp_id = res.query.wxAppid;
		setAdData(query, 'onShow')
})
	wx.onHide(res => {
		let query = res;
		console.log(query)
	})	
// 防止授权登录按钮多次点击
let btnClickNum = 0
let commonParams = {
	time: ln_tool.getPhpNow(),
	udid: ln_tool.getDeviceUUid(),
	uuid: ln_tool.getDeviceUUid(),
	sdkver: 'h5',
	adver: '1.0',
	device: ln_tool.getDeviceType() == 'ios' ? 2 : 1,
	idfa: '',
	idfv: '',
	imei: '',
	oaid: '',
	android_id: '',
	imsi: '',
	encryptedData: '',
	iv: '',
	channel_version: '1.0',
	sysname: '',
	screen: '',
	model: '',
	version: '1.0',
	ver: 'c399ec3638',
	network: '',
	appid: ln_tool.getCurrAppid(),
	adver_ext: ''
	// app_key: 'mjsgcecys0dtogfpmhei6o00cec8qp5j',
}
let initStoreData = {
	alive: '',
	access_token: ''
}
let wxParams = {
	openid: '', // 微信openid
	appid: '', // 微信应用id
	env: '', // 环境配置
	offer_id: '', // 在米大师侧申请的应用id,
	encryptedData: '', // 授权相关
	iv: ''
}
let miniProgramParams = {}; // 微信小程序转移相关数据
let appInfo  = {
	app_key: ''
}
const api = "https://apisdk2.lnqwe.com";
const ln_api = "https://apisdk.lnqwe.com";
// 微信内容安全调整
const msgSecCheck = function({version=2,scene=4, content= ''}, callback) {
	const params = {version: version, scene: scene, content: content, access_token: initStoreData.access_token,}
	wx.request({
		url: api + '/sdk/wxgame/msgSecCheck',
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, params)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		mode: 0,
		success: (res) => {
			let rest = res.data;
			if (rest.errcode == 0) {
				if (rest.result.label == 100) {
					callback({status: rest.result.label})
				} else {
					callback({status: 0})
				}
			}
		 }
	});
}
const init = function () {
	// 广告数据上报
	let data = wx.getLaunchOptionsSync().query;
  setAdData(data, 'getLaunchOptionsSync')
	let SDKln = this;
	if (typeof SDKln.initLoginCallback != 'function') {
		console.error("没有实现 initLoginCallback 初始化回调")
	} else {
		// 广告数据上报
		wxLogin(SDKln);
	}
}
	// 设置广告数据
	const setAdData = function(query, flag){
		// 广告混端投放
		let adAppid = '';
		if (query && query.app) {
			adAppid = query.app;
			commonParams.appid = query.app;
		} else {
			adAppid = commonParams.appid;
		}
		let data = {appid: adAppid, type: flag, query: JSON.stringify(query)=='{}' ? '' : JSON.stringify(query)};
		// data.appid = commonParams.appid;
		// if(ln_tool.getDeviceType() == 'android'){
		// 	data.appid = 60434;
		// } else if (ln_tool.getDeviceType() == 'ios'){
		// 	data.appid = 60432;
		// }
		setAdDataToRequest(data);
		if(query){
			let gdt_vid =  query.gdt_vid;
			let weixinadinfo = query.weixinadinfo;
			let aid = '';
			if (weixinadinfo) {
				let weixinadinfoArr = weixinadinfo.split('.');
				aid = weixinadinfoArr[0]
			}
			commonParams.adver_ext = JSON.stringify(query);
			// 判断query不是空对象，为空就不管
			if(query.weixinadinfo){
				if (ln_tool.getDeviceType() == 'android') {
					commonParams.imei = gdt_vid || '';
					commonParams.oaid = aid || '';
				} else if (ln_tool.getDeviceType() == 'ios') {
					commonParams.idfa = gdt_vid || '';
					commonParams.idfv = aid || '';
				}
			}
		}
	}
// 记录广告值
const setAdDataToRequest = (params) => {
	wx.request({
		url: api + '/api/config/logWxgame',
		data: ln_tool.getSignedParams('6c18d6359290b17f12e85b7b77d7e009', params),
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		mode: 0,
		success: (res) => {
       console.log(res)
		 }
		});
} 

// 微信登录
const wxLogin = function(SDKln) {
	console.log('进来了登录了22222222222222222222222')
	wx.login({
		success: (res) => {
			if (!res.code) {
				wxLogin(SDKln);
			} else {
				let jscode = res.code;
				let configParams = {
					appid: commonParams.appid,
					time: commonParams.time,
					notch_height: 0,
					bottom_height: 0
				};
				// 授权后开始融合
				// wx.getSetting({
				// 	complete(com) {
				// 		if (com.authSetting['scope.userInfo']) {
				// 			wx.getUserInfo({
				// 				success(res) {
				// 					wxParams.encryptedData = res.encryptedData;
				// 					wxParams.iv = res.iv;
				// 					initConfig(SDKln, configParams, jscode)
				// 				}
				// 			})
				// 		} else {
				// 			let regiData = {query: JSON.stringify(commonParams), type: 'reg1'}
				// 			setAdDataToRequest(regiData);
				// 			createButton(SDKln, configParams, jscode);
				// 		}
				// 	}
				// })
				
				initConfig(SDKln, configParams, jscode);
			}
		},
		fail: (err) => {
			// createButton(SDKln, {}, {});
			console.log("微信登录失败:", err)
		}
	});
}
// 初始化融合配置接口
const initConfig = function (SDKln, params, jscode) {
	console.log('进来了初始化了')
	wx.request({
		url: api + '/api/config/get',
		data: ln_tool.getSignedParams('6c18d6359290b17f12e85b7b77d7e009', params),
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		mode: 0,
		success: (res) => {
			const ret = JSON.parse(res.data.data);
			if (ret.ret == 0) {
				wxParams.appid = ret.data.channel_params.appid;
				wxParams.env = ret.data.channel_params.env;
				wxParams.offer_id = ret.data.channel_params.offer_id;
				commonParams.ver = ret.data.channel_params.ver || 'c399ec3638';
				commonParams.device = ln_tool.getDeviceType() == 'ios' ? 2 : 1;
				commonParams.time = ln_tool.getPhpNow();
				appInfo.app_key = ret.data.app_key;
				// 分享
				wx.showShareMenu({
					withShareTicket: true,
					menus: ['shareAppMessage', 'shareTimeline']
				})
				wx.onShareAppMessage(function () {
					return {
						title: ret.data.channel_params.title || '',
						imageUrlId: ret.data.channel_params.imageUrlId || '',
            imageUrl: ret.data.channel_params.imageUrl || ''
					}
				})
				initData(SDKln, commonParams, jscode);
			} 
			 // else {
				// wx.showModal({
				// 	title: "提示",
				// 	content: unescape(ret.msg.replace(/\\u/g, "%u")),
				// 	showCancel: false,
				// 	confirmText: "确定",
				// 	success() {
				// 	}
				// });
		  	// }
		}
	})
}
// 初始化sdk接口数据
const initData =  function (SDKln, params, jscode) {
	wx.request({
		url: api + '/sdk/app/initialize',
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, params)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		mode: 0,
		success: (res) => {
			// delete params.sign;
			const data = JSON.parse(res.data.data);
			console.log('融合初始化adver_ext参数:' + commonParams.adver_ext)
			let loginParams = {
				version: commonParams.version,
				ver: commonParams.ver,
				network: commonParams.network,
				time: ln_tool.getPhpNow(),
				access_token: data.data.access_token,
				info: JSON.stringify({code: jscode, login_type: 1}),
				adver_ext: commonParams.adver_ext,
				wx_game_ln_uid: wx.getLaunchOptionsSync().query.ln_uid || '',
				wx_game_fu_appid: wx.getLaunchOptionsSync().query.appid || ''
			}
			// console.log(wxParams.encryptedData)
			initStoreData.alive = data.data.alive;
			initStoreData.access_token = data.data.access_token;
			// console.log(loginParams)
			sdkLogin(SDKln, loginParams);
		}
	})
}
// 转移白名单
const wxgameWhiteUser = function(params) {
	return new Promise((resolve,reject) => {
		wx.request({
			url: api + '/sdk/user/isWxgameWhiteUser',
			data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, params)), mode: 0},
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				let resData = JSON.parse(res.data.data);
				if (resData.ret == 0) {
					resolve(resData.data.is_white)
 				}
			}
		})
	})
}
// 小程序转移
const sdkChange = function(data) {
	let loginBackParams = data
	if (data.data.wxChange == 1) {
		wx.showModal({
      title: data.data.wxTitle,
			content: '亲爱的仙友，点击【确认】即可领取转端豪华大礼包，跳转完成后角色数据不会改变\r\n在新微信小程序方可使用礼包码哦，特此奉上礼包码：' + data.data.wxContent,
			confirmText: '确定',
      success (res) {
        if (res.confirm) {
					console.log(data.data.wxAppid)
          wx.navigateToMiniProgram({
            appId: data.data.wxAppid,
            path: `page/index/index?ln_uid=${data.data.union_uid}&appid=${ln_tool.getCurrAppid()}`,
            envVersion: data.data.wxEnvVersion,
            extraData: {},
            success: function(res) {
              console.log('跳转小程序成功', res)
            },
            fail: function(err) {
							console.log(err)
              sdkChange(loginBackParams)
            },
            complete: function(com) {
              console.log('跳转小程序完成', com)
            }
          })
        } else if (res.cancel) {
          // 判断是否已经转移过进入白名单 0否 1是
					let whiteParams = {
						time: data.time,
						access_token: data.access_token,
						ln_uid: data.data.union_uid
					}
					wxgameWhiteUser(whiteParams).then(isChange => {
						if (isChange == 0) {
							sdkChange(loginBackParams)
						}
					})
        }
      }
    })
	}
}

// sdk登录
let postLogin = 0;
const sdkLogin = function(SDKln, params) {
	wx.request({
		url: api + '/sdk/user/login',
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key,params)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (res) => {
			// 设置授权按钮可以点击
			// delete params.sign;
			let loginData = JSON.parse(res.data.data);
			if (loginData.ret == 0) {
				wxParams.openid = loginData.data.openid;
				miniProgramParams = loginData;
				miniProgramParams.access_token = params.access_token,
				miniProgramParams.time = params.time
				replenish();
				if (loginData.data.wxChangeLimitTips) {
					wx.showModal({
						title: "提示",
						content: loginData.data.wxChangeLimitTips,
						showCancel: false,
						confirmText: "确定",
						success() {
						}
					});
				}
				// 登录成功执行回调
				SDKln.initLoginCallback({
					status: '0',
					data: {
						uid: loginData.data.union_uid,
						account: loginData.data.account,
						token: loginData.data.login_token
					},
					msg: 'ok'
				})
			} else {
				postLogin ++;
				if (postLogin < 3) {
					console.log(postLogin)
					wxLogin(SDKln);
				}
				if (postLogin == 3) {
					wx.showModal({
						title: "提示",
						content: loginData.msg,
						showCancel: false,
						confirmText: "确定",
						success() {
						}
					});
				}
				SDKln.initLoginCallback({
					status: '1',
					data: {},
					msg: 'error'
				})
			}
		}
	})
}
// 角色上报
const sdkRole = function(params) {
  let roleParams = {
		time: ln_tool.getPhpNow(),
		access_token: initStoreData.access_token,
		channel: '',
		type: params.type,
		roleid: params.roleId,
		rolename: params.roleName,
		level: params.roleLevel,
		sex: '',
		server_id: params.serverId,
		balance: '',
		partyname: '',
		sword: '',
		mount: '',
		vip: params.vipLevel || '',
		adver_ext: commonParams.adver_ext
	}
	if (params.type == 3) {
		params.adver_ext = commonParams.adver_ext;
		sdkOnline(params)
	}
	wx.request({
		url: api + '/sdk/role/collect',
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, roleParams)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		mode: 0,
		success: (res) => {
			console.log(res);
		}
	})
}

// 在线时长上报
const sdkOnline = function(params) {
  const roleParams = {
		ver: commonParams.ver,
		roleid: params.roleId,
		server_id: params.serverId,
		seconds: 0,
		type: 1,
		time: ln_tool.getPhpNow(),
		access_token: initStoreData.access_token,
		adver_ext: commonParams.adver_ext
	}
	// 进入游戏开始上报
	wx.request({
		url: api + '/sdk/user/online',
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, roleParams)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		mode: 0,
		success: (res) => {
			console.log(res);
		}
	})
	const roleParamsInter = {
		ver: '',
		roleid: params.roleId,
		server_id: params.serverId,
		seconds: initStoreData.alive,
		type: 2,
		time: commonParams.time,
		access_token: initStoreData.access_token,
		adver_ext: commonParams.adver_ext
	}
	let timer = null;
	// 后续定时上报
	timer = setInterval(() => {
		wx.request({
			url: api + '/sdk/user/online',
			data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, roleParamsInter)), mode: 0},
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			mode: 0,
			success: (res) => {
				console.log(res);
			}
		})
	}, +initStoreData.alive * 1000);
}

// 支付
const sdkPay = function(payData) {
	// 点击支付判断小程序是否转移
	if(miniProgramParams.data.wxChange == 1) {
		sdkChange(miniProgramParams);
		return
	}
	const SDKln = this;
	const systemInfo = wx.getSystemInfoSync()
	const osType = ln_tool.getDeviceType();
	let deviceType = 'unknow'
	if (osType == 'ios') {
		deviceType = 2
	} else if (osType == 'android') {
		deviceType = 1
	} else if (osType == 'win') {
		deviceType = 3
	}
	replenish(); // 下单前是否存在未完成的单
	if (typeof this.onPayCallback != 'function') {
		console.error("没有实现 onPayCallback 支付回调")
	} else {
		let list = ["orderId","orderName","amount","serverId","roleLevel","roleName","roleId"];
		const payParamsPass = list.some(v=> {return payData[v] === undefined})
		if(payParamsPass){
				wx.showModal({
					title: "提示",
					content: "参数校验错误，请联系管理员",
					showCancel: false,
					confirmText: "确定",
					success() {
					}
				});
			return;
		}
		const params = {
			order_id: payData.orderId? payData.orderId: '',
			order_name: payData.orderName? payData.orderName: '',
			ver: commonParams.ver,
			is_lnpay: '0',
			ln_pay_req: 1,
			amount: payData.amount? payData.amount: 0,
			total_fee: payData.amount? payData.amount: 0,
			server: payData.serverId? payData.serverId: '',
			role: payData.roleName,
			roleid: payData.roleId,
			level: payData.roleLevel? payData.roleLevel: '',
			time: ln_tool.getPhpNow(),
			device: deviceType,
			access_token: initStoreData.access_token,
			weixin_code: 'weixin_game',
			ext: payData.ext || '',
			adver_ext: commonParams.adver_ext
		}

		wx.showLoading({
			title: '正在支付中',
			mask: true
		})
		wx.login({
			success(res) {
				params.code = res.code;
				console.log("params", params);
				wx.request({
					url: api + '/sdk/pay/request',
					data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, params)), mode: 0},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (payRes) => {
						wx.hideLoading()
						let ret = JSON.parse(payRes.data.data);
						if (ret.ret == 0) {
							SDKln.onPayCallback({
								"status": '0',
								"msg": '支付参数正确，正在支付'
							})
							wx.hideLoading()
							let checkWay = parseInt(ret.data.check_pay);
							// console.log(getLinkUrl(ret.data.order_id));
							switch (checkWay) {
								case 0:
									wx.showModal({
										title: "温馨提示",
										content: "请按确定后进入客服窗口，如果未收到本订单支付入口，请发送窗口右下角卡片获取.祝您游戏愉快!",
										showCancel: false,
										confirmText: "确定",
										success() {
											wx.openCustomerServiceConversation({
												showMessageCard: true,	
												sendMessageTitle: ret.data.order_id,
												sendMessagePath: JSON.stringify(params),
												sendMessageImg: getLinkUrl(ret.data.order_id),
												sessionFrom: JSON.stringify(params),
												success: function (res) {
													console.log('执行success了');
													console.log(res)
													// 打开客服窗口成功后，发送链接给玩家
													// sendLinkUser(ret.data.order_id);
												},
												fail: function (res) {
													console.log(res);
												},
												complete: function (res) {
													// console.log('执行complete了');
													// sendLinkUser(ret.data.order_id);
												}
											})
										}
									})
								break;
								case 1:
									 let payBuyQuantity = JSON.parse(ret.data.config).buyQuantity;
									 console.log(payBuyQuantity)
										wx.requestMidasPayment({
											mode: "game",
											env: wxParams.env,
											offerId: wxParams.offer_id,
											currencyType: "CNY",
											zoneId: 1,
											platform: "android",
											buyQuantity: payBuyQuantity,
											success(res) {
												// wx.setStorageSync('orderList', orderList);
												console.log(res);
												sendResult(ret.data.order_id)
											},
											fail(com) {
												// wx.showModal({
												// 	title: "提示",
												// 	content: com.errMsg + com.errCode,
												// 	showCancel: false,
												// 	confirmText: "确定",
												// 	success() {
												// 	}
												// });
												
												console.log("米结果参数", com)
											},
											complete(com) {
												console.log("米结果参数", com)
												// sendResult(ret.data.order_id)
											}
										})
									break;
								case 5:
									let Minidata = {};
									Minidata.goods_name = params.productName
									Minidata.gameOrderid = ret.gameOrderid
									Minidata.money = ret.money
									Minidata.out_code = ret.out_code
									Minidata.paytype = ret.paytype
									wx.navigateToMiniProgram({
										appId: ret.appid,
										path: 'pages/sdk/page',
										envVersion: 'release',
										extraData: Minidata,
										success: function(res) {
											console.log('跳转小程序成功', res)
										},
										fail: function(err) {
											console.log('跳转小程序失败', err)
										},
										complete: function(com) {
											console.log('跳转小程序完成', com)
										}
									})
									break;
							}
						} else {
							wx.showModal({
								title: "提示",
								content: unescape(ret.msg.replace(/\\u/g, "%u")),
								showCancel: false,
								confirmText: "确定",
								success() {
									SDKln.onPayCallback({
										"status": '1',
										"msg": "支付失败"
									})
								}
							});
						}
					}
				})
			}
		})
	}
}
// 米大师支付成功调融合api
const sendResult = function(order_id) {
	let params = {order_id: order_id, time: ln_tool.getPhpNow(), access_token: initStoreData.access_token, ver: commonParams.ver};
	let orderList = wx.getStorageSync('orderList');
	if (!orderList) {
		orderList = []	
	}
	wx.request({
		url: api + "/sdk/wxgame/notify",
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, params)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success(res) {
			const resData = JSON.parse(res.data.data);
			console.log(resData);
			if (resData.ret != 0) {
				wx.showModal({
					title: "提示",
					content: unescape(resData.msg.replace(/\\u/g, "%u")),
					showCancel: false,
					confirmText: "确定",
					success() {
						orderList.push(order_id);
						wx.setStorageSync('orderList', orderList);
					}
				});
			}
		},
		fail(res) {
			orderList.push(order_id);
			wx.setStorageSync('orderList', orderList);
		}
	})
}
// 校验是否发送到融合接口
const replenish = function() {
	let orderList = wx.getStorageSync('orderList');
	const params = {time: ln_tool.getPhpNow(), access_token: initStoreData.access_token, ver: commonParams.ver};
	console.log(orderList);
	if (orderList.length !== 0) {
		for (let i in orderList) {
				wx.request({
						url: api + "/sdk/wxgame/notify",
						data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, Object.assign({order_id: orderList[i]},params))), mode: 0},
						method: 'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							const resData = JSON.parse(res.data.data);
							if (resData.ret == 0) {
								orderList.splice(i, 1);
								wx.setStorageSync('orderList', orderList);
							} else {
								if (resData.ret != 0) {
									wx.showModal({
										title: "提示",
										content: unescape(resData.msg.replace(/\\u/g, "%u")),
										showCancel: false,
										confirmText: "确定",
										success() {
										}
									});
								}
							}
						}
				})
		}
	}
}

// 游戏内转端
const sdkTransferApp =  function() {
	wx.showModal({
		title: "温馨提示",
		content: "请按确定后进入客服窗口",
		showCancel: false,
		confirmText: "确定",
		success() {
			wx.openCustomerServiceConversation({
				showMessageCard: true,	
				sendMessageTitle: `bind-${commonParams.appid}`,
				sendMessagePath: '',
				sendMessageImg: 'https://apisdk2.lnqwe.com/wxgame_exchange.jpg',
				sessionFrom: '',
				success: function (res) {
					console.log('执行success了');
					console.log(res)
					// 打开客服窗口成功后，发送链接给玩家
				},
				fail: function (res) {
					console.log(res);
				},
				complete: function (res) {
					// console.log('执行complete了');
				}
			})
		}
	})
}

// 游戏中进行授权
// width宽，height高，left左，top顶部
const sdkGameAuth = function(params) {
	let button = wx.createUserInfoButton({
		type: 'text',
		text: '',
		style: {
			left: params.left,
			top: params.top,
			width: params.width,
			height: params.height,
			lineHeight: params.height,
			backgroundColor: '#ff0000',
			color: '#ffffff',
			// opacity: 0,
			textAlign: 'center',
			fontSize: 16,
			borderRadius: 4
		}
	})
	button.onTap((res) => {
		console.log(res.errMsg)
		console.log(btnClickNum)
		if(btnClickNum){
			console.log('不可多次点击')
			return;
		}
		btnClickNum = 1;
		if (res.errMsg == 'getUserInfo:ok') {
			let regData1 = {query: JSON.stringify(commonParams), type: 'reg2'}
			setAdDataToRequest(regData1);
			wxParams.encryptedData = res.encryptedData;
			wxParams.iv = res.iv;
			initConfig(SDKln, configParams, jscode)
			button.destroy();
		}else{
			let regData2 = {query: JSON.stringify(commonParams), type: 'reg3'}
			setAdDataToRequest(regData2);
			btnClickNum = 0;
		}
	})
}
// 创建授权登录按钮
const createButton = function (SDKln, configParams, jscode) {
	let sysInfo = wx.getSystemInfoSync();
	let screenW = sysInfo.screenWidth;
  let screenH = sysInfo.screenHeight;
	let rate = screenW / 750;
	let width = 418 * rate;
  let height = 80 * rate;
	let button = wx.createUserInfoButton({
		type: 'text',
		text: '授权登录',
		style: {
			left: screenW / 2 - width / 2,
			top: screenH/2 + 80,
			width: width,
			height: height,
			lineHeight: height,
			backgroundColor: '#ff0000',
			color: '#ffffff',
			textAlign: 'center',
			fontSize: 16,
			borderRadius: 4
		}
	})
	button.onTap((res) => {
		console.log(res.errMsg)
		console.log(btnClickNum)
		if(btnClickNum){
			console.log('不可多次点击')
			return;
		}
		btnClickNum = 1;
		if (res.errMsg == 'getUserInfo:ok') {
			let regData1 = {query: JSON.stringify(commonParams), type: 'reg2'}
			setAdDataToRequest(regData1);
			wxParams.encryptedData = res.encryptedData;
			wxParams.iv = res.iv;
			initConfig(SDKln, configParams, jscode)
			button.destroy();
		}else{
			let regData2 = {query: JSON.stringify(commonParams), type: 'reg3'}
			setAdDataToRequest(regData2);
			btnClickNum = 0;
		}
	})
}
// 生成客服发送快捷卡片图片
const getLinkUrl = function(ln_order) {
	let url = `https://apisdk2.lnqwe.com/sdk/pay/wxkf?appid=${commonParams.appid}&ln_order_id=${ln_order}&wxAppid=${wxParams.appid}&wxOpenId=${wxParams.openid}&access_token=${initStoreData.access_token}`;
	return url;
}
const sendLinkUser = function(ln_order) {
	let params = {
		appid: commonParams.appid,
		ln_order_id: ln_order,
		wxAppid: wxParams.appid,
		wxOpenId: wxParams.openid,
		access_token: initStoreData.access_token
	}
	console.log(wxParams.openid)
	console.log(params)
	wx.request({
		url: api + "/sdk/pay/wxkf",
		data: {data: JSON.stringify(ln_tool.getSignedParams(appInfo.app_key, params)), mode: 0},
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success(res) {
			// console.log(res);
			const resData = JSON.parse(res.data.data);
			console.log(resData);
			// if ()
		}
	})
}


// 以下为md5工具和base64工具 
// md5
function md5(string) {
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11 = 7,
		S12 = 12,
		S13 = 17,
		S14 = 22;
	var S21 = 5,
		S22 = 9,
		S23 = 14,
		S24 = 20;
	var S31 = 4,
		S32 = 11,
		S33 = 16,
		S34 = 23;
	var S41 = 6,
		S42 = 10,
		S43 = 15,
		S44 = 21;
	string = Utf8Encode(string);
	x = ConvertToWordArray(string);
	a = 0x67452301;
	b = 0xEFCDAB89;
	c = 0x98BADCFE;
	d = 0x10325476;
	for (k = 0; k < x.length; k += 16) {
		AA = a;
		BB = b;
		CC = c;
		DD = d;
		a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
		b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
		b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
		a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
		d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
		c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
		c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
		a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
		d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
		c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
		a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
		a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
		b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
		d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
		a = AddUnsigned(a, AA);
		b = AddUnsigned(b, BB);
		c = AddUnsigned(c, CC);
		d = AddUnsigned(d, DD);
	}
	var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
	return temp.toLowerCase();
}

function RotateLeft(lValue, iShiftBits) {
	return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

function AddUnsigned(lX, lY) {
	var lX4, lY4, lX8, lY8, lResult;
	lX8 = (lX & 0x80000000);
	lY8 = (lY & 0x80000000);
	lX4 = (lX & 0x40000000);
	lY4 = (lY & 0x40000000);
	lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	if (lX4 & lY4) {
		return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	}
	if (lX4 | lY4) {
		if (lResult & 0x40000000) {
			return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
		} else {
			return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
		}
	} else {
		return (lResult ^ lX8 ^ lY8);
	}
}

function F(x, y, z) {
	return (x & y) | ((~x) & z);
}

function G(x, y, z) {
	return (x & z) | (y & (~z));
}

function H(x, y, z) {
	return (x ^ y ^ z);
}

function I(x, y, z) {
	return (y ^ (x | (~z)));
}

function FF(a, b, c, d, x, s, ac) {
	a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
	return AddUnsigned(RotateLeft(a, s), b);
}

function GG(a, b, c, d, x, s, ac) {
	a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
	return AddUnsigned(RotateLeft(a, s), b);
}

function HH(a, b, c, d, x, s, ac) {
	a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
	return AddUnsigned(RotateLeft(a, s), b);
}

function II(a, b, c, d, x, s, ac) {
	a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
	return AddUnsigned(RotateLeft(a, s), b);
}

function ConvertToWordArray(string) {
	var lWordCount;
	var lMessageLength = string.length;
	var lNumberOfWords_temp1 = lMessageLength + 8;
	var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
	var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
	var lWordArray = Array(lNumberOfWords - 1);
	var lBytePosition = 0;
	var lByteCount = 0;
	while (lByteCount < lMessageLength) {
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
		lByteCount++;
	}
	lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	lBytePosition = (lByteCount % 4) * 8;
	lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	return lWordArray;
}

function WordToHex(lValue) {
	var WordToHexValue = "",
		WordToHexValue_temp = "",
		lByte, lCount;
	for (lCount = 0; lCount <= 3; lCount++) {
		lByte = (lValue >>> (lCount * 8)) & 255;
		WordToHexValue_temp = "0" + lByte.toString(16);
		WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
	}
	return WordToHexValue;
}

function Utf8Encode(string) {
	var utftext = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			utftext += String.fromCharCode(c);
		} else if ((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		} else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}
	}
	return utftext;
}

var Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = Base64._utf8_encode(input);
      while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }
          output = output +
              this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
              this._keyStr.charAt(enc3) +  this._keyStr.charAt(enc4);
      }
      return output;
  },
	decode: function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
          enc1 = this._keyStr.indexOf(input.charAt(i++));
          enc2 = this._keyStr.indexOf(input.charAt(i++));
          enc3 = this._keyStr.indexOf(input.charAt(i++));
          enc4 = this._keyStr.indexOf(input.charAt(i++));
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
          output = output + String.fromCharCode(chr1);
          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }
      }
      output = Base64._utf8_decode(output);
      return output;
  },
	_utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
              utftext += String.fromCharCode(c);
          } else if ((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          } else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }
 
      }
      return utftext;
  },
	_utf8_decode: function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;
      while (i < utftext.length) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          } else if ((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }
      }
      return string;
  }
}

module.exports = {
	init: init,
	sdkRole: sdkRole,
	sdkPay: sdkPay,
	msgSecCheck: msgSecCheck,
	sdkTransferApp: sdkTransferApp
}