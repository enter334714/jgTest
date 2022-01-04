

const ossUrl = "https://files.yifu188.com/wxH5/img/photo/";
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
var ctx = canvas.getContext('2d');
const  float_canvas = wx.createCanvas();
const float_ctx = float_canvas.getContext('2d');
const red_img =  wx.createImage();
red_img.src = ossUrl + "float.png";
var  red_img_height = 50;
var  red_img_width = 50;
var red_img_top = screenHeight/2 - red_img_height;
var red_img_left = screenWidth-red_img_width;

var anim_id = 0;
var animate_red_loop = animate_red.bind(float_canvas);

const  wind_canvas = wx.createCanvas();
const wind_ctx = float_canvas.getContext('2d');
window.wind_flag = false;
var wind_wdith = 300;
var wind_height = 555;
var wind_wdith_left = (screenWidth-wind_wdith)/2;
var wind_wdith_top = (screenHeight-wind_height)/2;
const wind_img =  wx.createImage();
wind_img.src = ossUrl + "index.png";


var copy_wdith = 50;
var copy_height = 20;
var copy_wdith_left = screenWidth/2 + 40;
var copy_wdith_top = screenHeight/2 + 190 ;
const copy_img =  wx.createImage();
copy_img.src = ossUrl + "copy.png";

let redImgClickFunction;
let windImgClickFunction;
let copyImgClickFunction;

// 初始化悬浮窗
red_img.onload = function(){

    anim_id = requestAnimationFrame(animate_red_loop,float_canvas);
}
function animate_red(){
    repeat_animate_red();
    if(wind_flag){
        show_wind();
    }

    float_ctx.drawImage(red_img,red_img_left,red_img_top,red_img_width,red_img_height);
    ctx.drawImage(float_canvas, 0, 0, screenWidth, screenHeight, 0, 0, screenWidth, screenHeight);

    window.cancelAnimationFrame(anim_id);

    anim_id = requestAnimationFrame(animate_red_loop,float_canvas);
}

function repeat_animate_red(){
    float_ctx.clearRect(0, 0, float_canvas.width, float_canvas.height);
}

function show_wind(){

    wind_ctx.drawImage(wind_img,wind_wdith_left,wind_wdith_top,wind_wdith,wind_height);
    wind_ctx.drawImage(copy_img,copy_wdith_left,copy_wdith_top,copy_wdith,copy_height);
    ctx.drawImage(wind_canvas, 0, 0, screenWidth, screenHeight, 0, 0, screenWidth, screenHeight);



}

wx.onTouchStart( (result) => {
    console.log("点击开始");
    var clickIndex = result.changedTouches[0];
    var x  = clickIndex.clientX;
    var y = clickIndex.clientY;
    // 判断是否点击悬浮窗图片
    if( red_img_left < x && x < (red_img_left+red_img_width)
        && red_img_top < y && y < (red_img_top+red_img_height)){
        wx.onTouchMove(redImgClickFunction =(result) => {

			var clickIndex = result.changedTouches[0];
            var  x = clickIndex.clientX;
            var y = clickIndex.clientY;
           
			red_img_left = x;
			red_img_top = y ;

        })


    }


})





wx.onTouchEnd( (result) => {

    var clickIndex = result.changedTouches[0];
    var x  = clickIndex.clientX;
    var y = clickIndex.clientY;
    // 判断是否点击悬浮窗图片
    if( red_img_left < x && x < (red_img_left+red_img_width)
        && red_img_top < y && y < (red_img_top+red_img_height)){
			console.log(wind_flag);
        if(wind_flag){
            wind_flag = false;
			wx.offTouchMove(redImgClickFunction);
			return;
        }else{
            console.log("点开");
			wind_flag = true;
			wx.offTouchMove(redImgClickFunction);
			 
			return;
        }
        //
		

        return;
    }

    if(wind_flag){
        if(copy_wdith_left < x && x < (copy_wdith_left+copy_wdith)
            && copy_wdith_top < y && y < (copy_wdith_top+copy_height)){

            if(wind_flag){
                wx.setClipboardData({
                    data: '掌上互娱信息',
                    success (res) {
                    }
                })

            }
            wx.offTouchMove(redImgClickFunction);

            return;
        }


        if(wind_wdith_left < x && x < (wind_wdith_left+wind_wdith)
            && wind_wdith_top < y && y < (wind_wdith_top+wind_height)){
            wx.offTouchMove(redImgClickFunction);

            return;
        }else{
            if(wind_flag){
                wind_flag = false;
            }
            wx.offTouchMove(redImgClickFunction);

            return;
        }


    }
    wx.offTouchMove(redImgClickFunction);



})









export default class zshySdk {

	

	constructor() {
		
		// 初始化
		this.initUrl = "https://api.yifu188.com/api/webSdk/user/v1/init";
		// 登陆
		this.loginUrl = "https://api.yifu188.com/api/third/weChatGame/v1/login";
		// 上报角色
		this.roleUrl = "https://api.yifu188.com/api/webSdk/user/v1/sendServer";
		// 米大师查询余额
		this.getBalacneUrl = "https://api.yifu188.com/api/third/weChatGame/v1/getBalance";
		// 米大师扣款
		this.ducBalanceUrl = "https://api.yifu188.com/api/third/weChatGame/v1/pay";
		// 客服支付下单
		this.customerOrderUrl = "https://api.yifu188.com/api/third/weChatGame/v1/jsapi/createOrder";
		// 获取配置
		this.getConfigUrl = "https://api.yifu188.com/api/third/weChatGame/v1/getConfig";

		// 请求参数
		this.req = {
			head: {
				adFlag: "",
				adId: "",
				appId: "",
				channelId: "",
				gameVersion: "1.1.0",
				idfa: "",
				imei: "",
				model: "",
				networkType: "1",
				osInfo: "",
				osType: "",
				requestIp: "",
				sdkVersion: "1.0.0",
				timestamp: "",
				token: "",
				verificationCode: ""
			},
			body: {}
		}

		// 米大师的应用id
		this.mchId = "1450031826";

		this.env = 1 , // 0:正式 1：沙箱
		this.uid = "";
		this.pf = "";

		wx.showShareMenu({  menus: ['shareAppMessage']});

		// 红包
		this.act ;

	}

	
	// 初始化
	init({
		data: data,
		success: success,
		fail: fail
	}) {

		const that = this;

		// 获取系统信息
		wx.getSystemInfo({
			success(res) {
				// 机型
				that.req.head.model = res.model;
				// 系统版本
				that.req.head.osInfo = res.system;
				that.pf = res.platform;
				if (res.platform == "android") {
					that.req.head.osType = "1";
					that.req.head.imei = "000000000000000";
				} else {
					that.req.head.osType = "2";
					that.req.head.idfa = "00000000-0000-0000-0000-000000000000";
				}
			}
		})


		that.req.head.appId = data.appId;
		that.req.head.channelId = data.channelId;
		that.req.head.adId = data.adId;
		that.req.head.adFlag = data.adFlag;

		// 获取分享配置参数
		this.postJosn({
			data : {},
			url : this.getConfigUrl,
			success : function(res){
				wx.onShareAppMessage(() => {
					return {
					  title: res.title,
					  imageUrl: res.photoUrl // 图片 URL
					}
				})
			},
			fail : function(){}
		});

		// 进行初始化
		this.postJosn({
			data: {
				adId: data.adId
			},
			url: that.initUrl,
			success: function () {
				success();
			},
			fail: fail
		});

	};


	/**
	 * 登录
	 * @param {*} callBack
	 */
	login({
		success: success,
		fail: fail
	}) {
		const that = this;
		wx.login({
			success(res) {
				if (res.code) {
					//发起网络请求
					that.postJosn({
						data: {
							code: res.code
						},
						url: that.loginUrl,
						success: function (res) {
							that.uid = res.uid;
							that.req.head.token = res.token;
							//that.act = new zshyAct(that.req.head);
							success({
								uid: res.uid,
								token: res.token
							})
							//登录成功之后显示图片
							//that.showSkipImg();
							wind_flag = true;
						},
						fail: fail
					});

				} else {
					fail();
				}
			}
		})

	};

	/**
	 * 角色信息上报
	 * @param {*} data
	 * @param {*} callBack
	 */
	sendRoleInfo(roleData = {}) {
		const that = this;
				
		// 存本地信息
								// 是否开启红包任务
								

		//发起网络请求		
		this.postJosn({
			data: roleData.data,
			url: that.roleUrl,
			success: function () {
				roleData.success();
			},
			fail: function () {
				roleData.fail();
			}
		});
	}


	/**
	 *  支付
	 * @param {*} cpData cp传进来的数据  
	 * @param {Object} cpNo  cp订单号
	 * @param {Object} role  角色名字
	 * @param {Object} uid   我方jqUid
	 * @param {Object} price 价格（单位元）
	 * @param {Object} subject 商品名称
	 * @param {Object} serverId 区服Id
	 * @param {Object} extraInfo 透传字段
	 * callBack  回调函数
	 * @param {Object} callBack 回调函数
	 */
	payCheck(p) {
		const that = this;
		p.data.uid = that.uid;
		p.data.isCoin = "0"; //是否是平台币订单，1是平台币订单，0为不是
		p.data.pf = that.pf; //登录获取的pf值
		p.data.amt = (p.data.orderAmount * 10) + ""; //扣除游戏币的数量
		p.data.isTest = "0"; //否测试，1为测试订单，0为不是，默认0
		p.data.orderType = "1"; //订单类型，1直充游戏，默认为1
		p.data.orderPlatform = "0"; //订单平台，默认为0，暂无其他平台
		p.data.remark = "wx_mini_game"; //备注

		console.log(p.data);
		if (that.req.head.osType == "1") {
			// Android
			//that.modelPay(p);
			that.getBalance(p);
		} else {
			// ios 客服
			//that.getBalance(p);
			that.modelPay(p);
		}

	}

	/**
	 * @param {Object} cpData  cp传的订单信息
	 * @param {Object} callBack 回调
	 */
	getBalance(p) {

		// 先判断余额
		const that = this;
		that.postJosn({
			data: {
				uid: that.uid,
				pf: that.pf
				//pf : "android"
			},
			url: that.getBalacneUrl,
			success: function (res) {
				console.log(res.balance);

				if (res.balance >= p.data.amt) {
					// 如果余额大于等于，直接扣钱发货
					that.ducBalance(p);
				} else {
					// 否则调用支付，完成后再调用扣钱
					that.useNativePay(p);
				}
			},
			fail: function () {
				p.fail();
			}
		});


	}


	/**
	 * 下单扣款并发货
	 * @param {Object} cpData
	 */
	ducBalance(p) {
		const that = this;

		that.postJosn({
			data: p.data,
			url: that.ducBalanceUrl,
			success: function () {
				p.success();
			},
			fail: function () {
				p.fail();
			}
		});
	}

	/**
	 * 原生支付：米大师支付
	 * @param {*} data
	 */
	useNativePay(p) {
		console.log("进到米大师支付");
		const that = this;
		wx.requestMidasPayment({
			mode: "game",
			env: that.env, // 0:正式 1：沙箱
			offerId: that.mchId, //在米大师侧申请的应用 id
			currencyType: "CNY",
			platform: that.pf,
			buyQuantity: p.data.amt, //金额
			success: res => {
				console.log("支付成功");
				that.ducBalance(p);
			},
			fail: err => {
				console.log(err);
				that.showMsg("请检查网络");
			}
		});
	}

	/**
	 * 打开客服窗口支付
	 * @param {Object} cpData
	 * @param {Object} callBack
	 */
	modelPay(p) {
		const that = this;

		// that.showMsg('拉起成功')

		that.postJosn({
			data: p.data,
			url: that.customerOrderUrl,
			success: function () {
				wx.showModal({
					title: "支付提示",
					content: "即将进入客服窗口，请输入【充值】获取订单并完成支付",
					success: function (res) {
						console.log(res.confirm);
						console.log(res.cancel);

						if (res.confirm) {
							that.gotoService();
						} else if (res.cancel) {
							console.log('用户点击取消')
						}

					}
				});
				p.success();
			},
			fail: function () {
				p.fail();
			}
		});
	}


	/**
	 * 跳转到客服
	 * cardMsg{
	 *  title: '',
	 *  path: '',
	 *  img: ''
	 * }客服页面右下角的弹窗
	 */
	gotoService() {
		console.log("跳转客服");
		const that = this;
		wx.openCustomerServiceConversation({
			showMessageCard: true,
			sendMessageTitle: "充值",
			sendMessagePath: "",
			sendMessageImg: "https://image.kingcheergame.cn/adImages/2020-07-30/img_1596103093000.png?time=1596103131000",
			success: () => {

			},
			fail: (res) => {

			}

		})
	}



	/**
	 * post请求
	 * @param {} data 
	 * 
	 * { url，data,success,fail}
	 */
	postJosn(data) {
		const that = this;
		that.req.head.timestamp = new Date().getTime();
		that.req.body = data.data;
		//that.req.head = data.data;
		wx.request({
			url: data.url,
			data: that.req,
			method: "post",
			success: res => {
				if (res.data.head.responseCode == "00000") {
					data.success(res.data.body)
				} else {
					data.fail(res.data.head)
				}
			},
			fail: function (err) {

				//that.showMsg("请检查网络");
				that.showMsg(err);
			}
		});
	}



	/**
	 * 提示信息
	 * @param {*} msg
	 */
	showMsg(title) {
		wx.showToast({
			title: title, //提示文字
			duration: 2000, //显示时长
			mask: false, //是否显示透明蒙层，防止触摸穿透，默认：false  
			icon: "none", //图标，支持"success"、"loading"  
			success: function () {}, //接口调用成功
			fail: function () {}, //接口调用失败的回调函数  
			complete: function () {} //接口调用结束的回调函数  
		})
	}

	
}

