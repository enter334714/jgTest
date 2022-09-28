/**
 * @version 1.1
 * @author dy 20220622
 */
let util = require('./md5.js')
const app = {
  globalData:{
      hnsb_channel :'T584VVZ5',
      hnsb_appid :'110013',
  }
}
const HNSB_APP_SECRET = "6bbfa550e6f798a6b207d57d097e2a11";
const HNSB_APP_HOST = 'https://fusionapp.hainanzuoqu.com';

var hnsb = {
    /**
     * 通用的接口请求，
     * @param string service 接口服务名称
     * @param object params 接口参数
     * @param function onSuccess 成功时的回调函数
     * @param function onError 失败时的回调函数
     * @param Boolean has_sign 参数是否带签名
     */
    request: function (service, params,onSuccess,onError, has_sign) {
        // 请求参数 
        params = params || {};
        if(!has_sign){
          params = this.enryptData(params);
        }
        // 请求链接
        let url = HNSB_APP_HOST + '/' + service 
        wx.request({
            header: {
                'Accept': 'application/json'
            },
            method: 'POST',
            url: url,
            data: params,
            success: (res) => {
                typeof onSuccess == 'function' && onSuccess(res.data)
            },
            fail: (err) => {
                typeof onError == "function" && onError(err);
            }
        })
    },

    /**
     * [onLogin 登录事件]
     * @param function onSuccess 成功时的回调函数
     * @param function onError 失败时的回调函数
     */
    onLogin: function (onSuccess, onError) {
        wx.login({ //登录
            success(info) {
                //有授权标识授权成功
                if (info.code) {
                    //进行初始化接口请求
                    hnsb.init(function(res) {
                        if (res.code == 0) {
                            //赋值全局token
                            app.globalData.hnsb_token =  res.data.token;
                            //进行登录请求
                            hnsb.login(info.code, function (res) {
                                let arr = {};
                                arr.code = res.code;
                                arr.msg = res.msg;

                                //组装参数返回
                                if (res.code == 0) {
                                    arr.msg = '登录成功';
                                    arr.data = {
                                      gametoken: res.data.gametoken,
                                      uid : res.data.uid ,
                                      time : res.data.time ,
                                      channel_uid :res.data.channel_uid,  
                                      auth : res.data.auth
                                    };
                                    //uid赋值
                                    app.globalData.hnsb_uid = res.data.uid;
                                } 
                                //回调函数
                                onSuccess(arr)
                          })
                        
                        } else {
                            onSuccess(res)
                        }
                    });
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    },
 
    /** ----------------- 用户 ----------------- */

    /**
     * [init 初始化接口]
     * @param  {//} onSuccess [成功回调函数]
     */
    init : function (onSuccess) {
        let params = {};
        params = hnsb.getparams();
        this.request('api/h5sdk/fusioninit', params,onSuccess);
    },

    /**
     * 微信用户登录
     */
    login: function (wxcode, onSuccess, onError) {
        let params = {};
        params = hnsb.getparams();
        params['verinfo'] = JSON.stringify({code : wxcode});
        params['token'] = app.globalData.hnsb_token;
        
        this.request('api/h5sdk/fusionlogin', params, onSuccess, onError)
    },


    /**
    *@param 角色上报 obj
    * Robj 需包含
    * {
    *   uid         必传   int        平台用户ID
    *   serverid    必传   varchar    服务器id
    *   servername  必传   varchar    服务器名称
    *   rolename    必传   varchar    角色名称
    *   roleid      必传   varchar    角色id
    *   rolelevel   必传   int        角色等级
    *   viplevel    否    varchar    vip等级
    *   power       否    int        战斗力
    *   roleCtime 必传              创角时间    时间戳（10位）    
    * }
     * */
    roleInfo : function (Robj,onSuccess,onError) {
        if (typeof(app.globalData.hnsb_token) === 'undefined') {
            return onSuccess({code : -1 , msg :"登录状态失效,请重新进入小程序"})
        }

        let params = {};
        params = hnsb.getparams();
        var rolelist = {
            uid: app.globalData.hnsb_uid,
            serverid: Robj.serverid,
            servername: Robj.servername,
            rolename:Robj.rolename,
            roleid: Robj.roleid,
            rolelevel: Robj.rolelevel,
            viplevel: (Robj.viplevel || 0),
            roleCtime: (Robj.roleCtime || 0),
            charge: (Robj.charge || 0),  
            power: (Robj.power || 0),
       }; 
       //合并json对象
       const data  = Object.assign(rolelist,params);
       this.request('api/h5sdk/roleInfo', data, onSuccess, onError)
    },

    /** ----------------- 支付与订单 ----------------- */
    pay : function(payobj, onSuccess, onError) {
        if (typeof(app.globalData.hnsb_token) === 'undefined') {
            return onSuccess({code : -1 , msg :"登录状态失效,请重新进入小程序"})
        }
        let params = {};
        params = hnsb.getparams();
        let pay_params = {
            ...payobj,
            ...params
       }; 
       pay_params.uid = app.globalData.hnsb_uid;
       this.request('api/h5sdk/fusionorder', pay_params, function(res) {
         let response = res;
         if (res.code === 0) {
           // 如果没有sdkparam返回并且不切支付
           if (!res.data.sdkparam && !res.data.notice){
            hnsb.showModal({
              title: '温馨提示',
              content: "该支付方式只支持安卓！"
            });
            return;
           }
           // 判断余额是否小于下单金额
            if(res.data.sdkparam.balance_money <  pay_params.amount){
              hnsb.wxMidasPay(response.data.sdkparam); 
              return;
            }
            // 选择余额支付还是米大师支付
            hnsb.showModal({
              title: '温馨提示',
              content: `  您之前有充值未到账，已为您保留到余额，余额剩余${res.data.sdkparam.balance_money}元。(当前选择的为${pay_params.amount}元挡位)\r\n  余额仅能用于支付小于或等于的充值档位，无法与微信支付叠加使用。\r\n  使用余额支付请优先选择与余额相同金额的档位进行下单，否则余额可能无法完全消耗`,
              confirmText: '我已知晓',
              success: (res) =>{ 
                // 弹出选择支付菜单
                wx.showActionSheet({
                  itemList: ['余额支付', '微信支付'],
                  success (res) {
                   if(res.tapIndex === 0){
                    hnsb.wxMidasPaySuccess(response.data.sdkparam.callbackParam);
                   }
                   if(res.tapIndex === 1){
                    hnsb.wxMidasPay(response.data.sdkparam); 
                   }
                  },
                })
              },
            })
           }else{
             // 下单接口失败
            hnsb.showModal({
              title: '提示',
              content: `"${res.msg || res.message}"`,
            });
           }
        })
    },

    /**
     * 检测铭感词
     * @param  obj  参数对象，目前只包含content
     * @param  onSuccess  检测成功回调
     * @param  onError  检测失败回调
    */
   checkMsgSec: function(obj, onSuccess, onError){
    let params = {
      ...obj,
      ...hnsb.getparams()
    };
    this.request('api/wxxyx/checkMsgSec', params, function(res) {
      if(res.code === 0){
        onSuccess(res);
      }else{
        onError(res);
      }
    })
   },

    // 掉起米大师支付
    wxMidasPay(parmas){
      let { mode, env, offerId, currencyType, buyQuantity, zoneId} = parmas;
      let midas_param = {
        mode: mode,
        env: env,
        offerId: offerId,
        currencyType: currencyType,
        buyQuantity: buyQuantity, 
        zoneId: zoneId,
        platform : 'android' //申请接入时的平台，platform 与应用 id 有关。
      }
      midas_param.success = hnsb.wxMidasPaySuccess.bind(this,parmas.callbackParam);
      midas_param.fail = function(err) {
        console.log(err.errMsg,'米大师支付失败');
      }
      wx.requestMidasPayment(midas_param)
    },

    // 米大师成功回调函数
    wxMidasPaySuccess(callbackParam){
      //支付成功 进行发货请求
      this.request(`api/h5sdk/recharge?${hnsb.base64_decode(callbackParam)}`, null,function(res) {
         if (res.code === 0){
          hnsb.showModal({ 
            title: '提示',
            content: `发货成功，请在游戏中查收`,
          })
         }else{
          hnsb.showModal({ 
            title: '提示',
            content: `发货失败，错误:${res.msg}，请联系客服人员`,
          })
         }
      },function(err){
         console.log(err);
      },true)
    },


    /** ----------------- 内部方法 ----------------- */

    //参数通用接口
    getparams : function () {
        let params = {
            ver: app.globalData.hnsb_channel, //游戏渠道
            appid: app.globalData.hnsb_appid, //游戏APPID
            device: 3, //默认
            sdkversion: 1.0, //暂时默认
            pkversion: 1.0, // 暂时默认
            os: hnsb.getdevice(), //平台 
            requestid : hnsb.gettimestamp(), //时间戳
            model : wx.getSystemInfoSync().model, //机型
            sysversion : wx.getSystemInfoSync().system, //系统
            screen : wx.getSystemInfoSync().screenHeight+"x"+wx.getSystemInfoSync().screenWidth, //分辨率
        }

        
        var devlist = ['ios','android'];
        //判断设备平台不在列表则指定参数为web
        if (devlist.indexOf(params.os) == -1) {
            params.os = 'web';
        }

        //初始化token参数 非初始化接口必填
        if (typeof(app.globalData.hnsb_token) !== 'undefined') {
           params.token = app.globalData.hnsb_token;
        }

        //读取持久化缓存里面的udid值 无则进行生成唯一设备值
        if (!wx.getStorageSync('udid')) {
            wx.setStorageSync('udid',hnsb.getUdid());
        } 
        params['udid'] = wx.getStorageSync('udid');
    
        return params;
    },


    /**
     * 签名加密
     */
    enryptData: function (params) {
        var sdic = Object.keys(params).sort();
        var paramsStrExceptSign = "";
        for (let ki in sdic) {
            paramsStrExceptSign += params[sdic[ki]];
        }
        var sign = util.hexMD5(paramsStrExceptSign + HNSB_APP_SECRET).toLowerCase();
        params['sign'] = sign;

        return params;
    },


    //获取设备
    getdevice : function() {
        return wx.getSystemInfoSync().platform;
    },

    /**
     * [gettimestamp 截取11位时间戳]
     * @return {[string]} 
     */
    gettimestamp :function () {
        var tmp = Date.parse( new Date() ).toString();
        tmp = tmp.substr(0,11);
        return tmp;
    },

    /**
     * [getUdid 生成唯一设备标识]
     * @return {[string]} 
     */
    getUdid : function () {
        var s = [];
        var x = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = x.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; 
        s[19] = x.substr((s[19] & 0x3) | 0x8, 1); 
        s[8] = s[13] = s[18] = s[23] = "-";
        var udid = s.join("");
        return udid;
    },

    // 解码base64
    base64_decode (input){
      var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
          enc1 = base64EncodeChars.indexOf(input.charAt(i++));
          enc2 = base64EncodeChars.indexOf(input.charAt(i++));
          enc3 = base64EncodeChars.indexOf(input.charAt(i++));
          enc4 = base64EncodeChars.indexOf(input.charAt(i++));
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
      return hnsb.utf8_decode(output);
    },

    // utf-8解码
    utf8_decode(utftext){
      var string = '';
      let i = 0;
      let c = 0;
      let c1 = 0;
      let c2 = 0;
      while (i < utftext.length) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          } else if ((c > 191) && (c < 224)) {
              c1 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
              i += 2;
          } else {
              c1 = utftext.charCodeAt(i + 1);
              c2 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
              i += 3;
          }
      }
      return string;
    },
    /**
     * 显示模态对话框
     * @param setting  设置项
     * {
     * title  提示标题
     * content 提示内容
     * showCancel 是否显示取消按钮
     * success 点击确定回调
     * }
    */
    showModal(setting){
      setting.confirmText = setting.confirmText || '确定';
      setting.showCancel = setting.showCancel? true :false;
      wx.showModal(setting);
    }
}

module.exports = hnsb