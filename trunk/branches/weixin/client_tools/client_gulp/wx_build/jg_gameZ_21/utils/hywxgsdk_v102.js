/**
 *  sdk版本号:102
 *  hywxgsdk
 *  
 */
// 单例对象存储
let instance
// hywxgsdk 类  对外部共享类
export default class hywxgsdk{
  constructor( gameargs ) {
    //单例处理
    if (instance) return instance
    instance = this
    //初始化工作
   // 判断appid 必须给
    if(typeof gameargs.appid == "undefined"){
          console.log("appid必传");
          return false;
    }
    this.gameargs = gameargs;
    //初始化 配置
    this._sdkConfig()
    //初始化工作
    this._sdkinit()

  }// constructor end

  //初始化URL 配置
  _sdkConfig(){

    this.version="102"//skd 自定义版本号
    this.minigameid=""//小游戏appid
    this.miniappid="" //小程序appid
    //api 主机地址，方便切换
    this.apiDomain = "https://game.moleyx.cn/"
   // this.apiDomain = "http://api.t.com/" //测试
    this.isIosPay=0
    this.apiurl = {
        //初始化
        initinfo:this.apiDomain+"api/wxgsdk/initinfo",
        //登录api
        login:this.apiDomain+"api/wxgsdk/login",
        //客户端上报角色
        sendrole:this.apiDomain+"api/wxgsdk/sendroleclient",
        //支付接口
        pay:this.apiDomain+"api/pay",
         //上报wx用户信息
        userinfo:this.apiDomain+"api/wxgsdk/wxuserinfo",
        //检测订单是否支付成功
        checkpay:this.apiDomain+"api/wxgsdk/checkpay",
    }
  }

  //初始化工作
  _sdkinit(){
   
    //获取启动参数
    //（微信开发api）获取小游戏打开参数，不管是冷启动还是热启动
    var wxentercs = wx.getEnterOptionsSync()
    this.wxentercs=wxentercs
    //渠道id 初始化给0 待后台校验后修改
    if(typeof wxentercs.query.cid == "undefined"){
      this.cid = 0
    }else{
      this.cid = wxentercs.query.cid
    }

    // 获取本地缓存 并存入对象中
    var token =  wx.getStorageSync('hywxgsdk_token_29ty73')
    if(typeof token == "undefined"){
      this.token ="";
    }else{
      this.token =token;
    }
    var userid =  wx.getStorageSync('hywxgsdk_userid_35fh82')
    if(typeof userid == "undefined"){
      this.userid =0;
    }else{
      this.userid =userid;
    }

    var obj_this = this;
    //获取初始化数据，并校验 cid appid 是否正确
    wx.request({
      url: obj_this.apiurl.initinfo, 
      data: {
        wxentercs:obj_this.wxentercs,
        cid: obj_this.cid,//cid
        appid:obj_this.gameargs.appid,//平台gameappid
        minigameid:obj_this.minigameid,//小游戏appid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method:"POST",
      success (res) {
        var res_data = res.data;
        if(res_data.code == 0){
          //再登录处理，这里不再做任何配置设置
          // obj_this.miniappid = res_data.data.miniappid
          // obj_this.isIosPay = res_data.data.is_ios_pay
          // if(obj_this.cid != res_data.data.cid){
          //   obj_this.cid = res_data.data.cid
          // }
          console.log("初始化信息成功");
        }else{
          console.log("初始化信息失败");
          console.log(res_data);
        } 
      },
      fail (res) {
        console.log("初始化信息接口调用失败");
        console.log(res);
      },
    }) // request end

  }

  /**
   * 登录
   * 
   * @param {*} loginArgs 登录参数  
   * loginArgs：
   *  {
   *     success:function(res){ }, //登录成功回调
   *     fail:function(res){ }     // 登录失败回调 
   *  }
   * 
   */
  login (loginArgs){
    console.log( "登录开始")
    //登录前先判断sdk对象是否已经获取了启动参数，如果没有，重新获取一下。
        //获取启动参数
    //（微信开发api）获取小游戏打开参数，不管是冷启动还是热启动
    if(typeof this.cid == "undefined" || typeof this.wxentercs == "undefined" ){
        var wxentercs = wx.getEnterOptionsSync()
        this.wxentercs=wxentercs
        //渠道id 初始化给0 待后台校验后修改
        if(typeof wxentercs.query.cid == "undefined"){
          this.cid = 0
        }else{
          this.cid = wxentercs.query.cid
        }
    }


    // 1检测session_key 是否过期,过期要重新获取
    // 1先拿本地token 去服务端校验是否过期或合法
    // 2如果合法未过期，直接返回用户相关信息
    // 3如果过期或非法，那么重新走登录流程
    var obj_this = this
    // 检测session_key 是否过期
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
        if(typeof obj_this.userid == "undefined" || typeof obj_this.token == "undefined" || !obj_this.userid || !obj_this.token){
          //无效 userid 或 token
          obj_this._loginLogin(loginArgs,0) //0 重新调用微信接口，走登录流程
        }else{
          obj_this._loginLogin(loginArgs,1) //1 采用token登录
        }
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        obj_this._loginLogin(loginArgs,0) //0 重新调用微信接口，走登录流程
      }
    })


  } // login end

  /**
   * 执行登录
   * @param {*} loginArgs 回调参数
   * @param {*} sessionkeyIsValid sessionkey是否有效，1采用token登录 0 重新调用微信接口，走登录流程 
   */
  _loginLogin(loginArgs,sessionkeyIsValid){
    var obj_this = this
    console.log("执行登录");
     //session_key有效处理 
    if(sessionkeyIsValid == 1 && obj_this.userid && obj_this.token){
      
            //发起网络请求
            wx.request({
              url: obj_this.apiurl.login,
              data: {
                is_sk:sessionkeyIsValid,
                cid: obj_this.cid,//cid
                appid:obj_this.gameargs.appid,//平台gameappid
                userid:obj_this.userid,
                token:obj_this.token,
                minigameid:obj_this.minigameid,//小游戏appid
                wxentercs:obj_this.wxentercs
              },
              method:"POST",
              success (res) {
                var res_data = res.data;
                if(res_data.code ==0){
                  console.log("执行登录成功");
                  //设置配置
                  obj_this.miniappid = res_data.data.miniappid
                  obj_this.isIosPay = res_data.data.is_ios_pay
                  obj_this.minigameid = res_data.data.http_minigame_appid
                  if(obj_this.cid != res_data.data.cid){
                    obj_this.cid = res_data.data.cid
                  }
                  wx.setStorageSync('hywxgsdk_token_29ty73',res_data.data.token)
                  wx.setStorageSync('hywxgsdk_userid_35fh82',res_data.data.id)
                  obj_this.token= res_data.data.token
                  obj_this.userid =res_data.data.id

                  //获取用户相关信息
                  wx.getSetting({
                    success(res) {
                      if (!res.authSetting['scope.userInfo']) {//没有授权的处理
                        wx.authorize({
                          scope: 'scope.userInfo',
                          success () {
                                  //获取用户相关信息
                                 obj_this._getUserInfo()
                          }
                        })
                      }else{//已经授权的处理
                             //获取用户相关信息
                             obj_this._getUserInfo()
                      }
                    }
                  })
                  var ret_call = {"code":0,"data":{"token":res_data.data.token},"msg":res_data.msg} 
                  loginArgs.success(ret_call);
                }else{
                  //token登录失败，清空，下次登录重新走
                  wx.setStorageSync('hywxgsdk_token_29ty73',"")
                  wx.setStorageSync('hywxgsdk_userid_35fh82',"")
                  obj_this.token= ""
                  obj_this.userid =0
                  var ret_call = {"code":res_data.code,"data":{},"msg":res_data.msg} 
                  loginArgs.fail(ret_call);
                }
                
              },
              fail (res) {
                //如果在session_key有效情况下登录失败，会采用wx_login 登录一次
                var ret_call = {"code":90001,"data":{},"msg":"登录接口调用失败"} 
                loginArgs.fail(ret_call);
              },
            })
    }else{ //session_key无效处理
    
          wx.login({
            success (res) {
              if (res.code) {
                //发起网络请求
                wx.request({
                  url: obj_this.apiurl.login,
                  data: {
                    is_sk:sessionkeyIsValid,
                    code: res.code,
                    cid:obj_this.cid,
                    appid:obj_this.gameargs.appid,
                    minigameid:obj_this.minigameid,
                    wxentercs:obj_this.wxentercs
                  },
                  method:"POST",
                  success (res) {
                    var res_data = res.data;
                    if(res_data.code ==0){
                      console.log("登录成功");
                      //设置配置
                      obj_this.miniappid = res_data.data.miniappid
                      obj_this.isIosPay = res_data.data.is_ios_pay
                      obj_this.minigameid = res_data.data.http_minigame_appid
                      if(obj_this.cid != res_data.data.cid){
                        obj_this.cid = res_data.data.cid
                      }
                      wx.setStorageSync('hywxgsdk_token_29ty73',res_data.data.token)
                      wx.setStorageSync('hywxgsdk_userid_35fh82',res_data.data.id)
                      obj_this.token= res_data.data.token
                      obj_this.userid =res_data.data.id

                      wx.getSetting({
                        success(res) {
                          if (!res.authSetting['scope.userInfo']) {//没有授权的处理
                            wx.authorize({
                              scope: 'scope.userInfo',
                              success () {
                                      //获取用户相关信息
                                     obj_this._getUserInfo()
                              }
                            })
                          }else{//已经授权的处理
                                //获取用户相关信息
                                obj_this._getUserInfo()
                          }
                        }
                      })

                      var ret_call = {"code":0,"data":{"token":res_data.data.token},"msg":"ok"} 
                      loginArgs.success(ret_call);
                    }else{
                      wx.setStorageSync('hywxgsdk_token_29ty73',"")
                      wx.setStorageSync('hywxgsdk_userid_35fh82',"")
                      obj_this.token= ""
                      obj_this.userid =0
                      var ret_call = {"code":res_data.code,"data":{},"msg":res_data.msg} 
                      loginArgs.fail(ret_call);
                    }
                    
                  },
                  fail (res) {
                    console.log("接口调用失败")
                    var ret_call = {"code":90002,"data":{},"msg":"登录接口调用失败"} 
                    loginArgs.fail(ret_call);
                  },
                })
              } else {
                console.log("获取不到code")
                var ret_call = {"code":80001,"data":{},"msg":"获取不到code"} 
                loginArgs.fail(ret_call);
              }
            }
          })
    }

  }//_loginLogin end
  
  /**
   * 获取用户信息
   */
  _getUserInfo(){
    if(!this.gameargs.appid || !this.token  || !this.userid){
      var ret_call = {"code":90001,"data":{},"msg":"请先登录"} 
      return false;
    }
    var obj_this = this
    wx.getUserInfo({
      withCredentials:false,
      success: function(res) {
        console.log("获取wx");
        console.log(res);
        //var res_rawData = JSON.stringify(res.rawData)
        //发起网络请求
        wx.request({
          url: obj_this.apiurl.userinfo,
          data:{
            res:res,
           // rawData:res_rawData,
            token:obj_this.token,
            user_id:obj_this.userid,
            appid:obj_this.gameargs.appid,
          },
          method:"POST",
          success (res) {
            console.log(res);
            var res_data = res.data;
            if(res_data.code ==0){
              var ret_call = {"code":0,"data":{},"msg":res_data.msg} 
             // sendroleArgs.success(ret_call);
            }else{
              var ret_call = {"code":res_data.code,"data":{},"msg":res_data.msg} 
             // sendroleArgs.fail(ret_call);
            }
          },
          fail (res) {
            console.log(res);
            var ret_call = {"code":80001,"data":{},"msg":"接口调用失败"} 
           // sendroleArgs.fail(ret_call);
          },
        })

      },
      fail: function(res) {
        console.log(res);
      }
    })
  }

  /**
   * 客户端角色上报
   * @param {*} sendroleArgs {roleInfo,} 
   */
  sendrole (sendroleArgs){
    if(!this.gameargs.appid || !this.token){
      var ret_call = {"code":90001,"data":{},"msg":"请先登录"} 
      sendroleArgs.fail(ret_call);
      return false;
    }
    sendroleArgs.roleInfo.appid=this.gameargs.appid;
    sendroleArgs.roleInfo.token=this.token;
    sendroleArgs.roleInfo.ts=0;
    sendroleArgs.roleInfo.sign="";
    var obj_this = this
    //发起网络请求
    wx.request({
      url: obj_this.apiurl.sendrole,
      data:sendroleArgs.roleInfo,
      method:"POST",
      success (res) {
        var res_data = res.data;
        if(res_data.code ==0){
          var ret_call = {"code":0,"data":{},"msg":res_data.msg} 
          sendroleArgs.success(ret_call);
        }else{
          var ret_call = {"code":res_data.code,"data":{},"msg":res_data.msg} 
          sendroleArgs.fail(ret_call);
        }
      },
      fail (res) {
        var ret_call = {"code":80001,"data":{},"msg":"接口调用失败"} 
        sendroleArgs.fail(ret_call);
      },
    })
 }

  /**
   * 支付
   * @param {*} orderParams     订单参数
   * @param {*} successcallback 成功回调
   * @param {*} failcallback    失败回调
   */
  pay(payArgs){
    if(!this.gameargs.appid || !this.token){
      var ret_call = {"code":90001,"data":{},"msg":"请先登录"} 
      payArgs.fail(ret_call);
      return false;
    }
    var obj_this = this
    const khInfo = wx.getSystemInfoSync()

    if(khInfo.platform == "ios"){ //苹果系统

      if(obj_this.isIosPay == 0){
        var ret_call = {"code":80099,"data":{},"msg":"不支持IOS系统支付！"} 
        wx.showModal({
          title: '提示',
          content:'不支持IOS系统支付' 
        })
        payArgs.fail(ret_call);
        return false;
      }

      if(obj_this.miniappid == ""){
        var ret_call = {"code":80002,"data":{},"msg":"缺乏小程序id"} 
        payArgs.fail(ret_call);
        return false;
      }
     // setTimeout(function(){  //本地测试时，打开，需要有用户行为才可以跳转
      //打开小程序
      wx.navigateToMiniProgram({
        appId: obj_this.miniappid,
        path: 'pages/pay/pay',
        extraData: {
          orderParams: payArgs.orderParams,
          cid:obj_this.cid,
          token:obj_this.token,
          minigameid:obj_this.minigameid
        },
        success(res) {
          // 打开成功
          console.log("小程序打开成功");
          //校验是否支付成功
         var checkCount = 0;
         var cheackOk =0;
          var interId = setInterval(function(){
            if(cheackOk === 1 || checkCount++ >100){
              clearInterval(interId)
              return true
            }
            wx.request({
              url: obj_this.apiurl.checkpay,
              data:{
                token:obj_this.token,
                reqOrder:payArgs.orderParams,
              },
              method:"POST",
              success (res) {
                var res_data = res.data;
                console.log(res_data);
                if(res_data.code ==0 && res_data.data.is_pay == 1){
                  cheackOk=1
                  payArgs.success(res_data)
                  return true
                }else{
                  console.log(res);
                }
              },
              fail (res) {
                console.log(res);
              },
            })

          },3000) //setInterval end

        },
        fail(res) {
          var ret_call = {"code":80003,"data":{},"msg":"小程序跳转失败"} 
          payArgs.fail(ret_call);
          return false;
        }
      })
  // }, 3000 ); //本地测试时，打开，需要有用户行为才可以跳转

    }else{//非苹果系统
          //发起网络请求
          wx.request({
            url: obj_this.apiurl.pay,
            method:"POST",
            data:{
              type:'wechat',
              method:"minigame",
              token:obj_this.token,
              reqOrder:payArgs.orderParams,
            },
            success (res) {
              console.log(res);
                var res_data = res.data;
                var mi_pay_data = res.data;
                if(res_data.code == 0){
                  payArgs.success(res_data);
                }else if(res_data.code == 2){
                  //拉起支付
                  wx.requestMidasPayment({
                    mode:"game",
                    env:res_data.data.offer_env,//0	米大师正式环境 1	米大师沙箱环境
                    offerId:res_data.data.offer_id,//	string		是	在米大师侧申请的应用 id
                    currencyType:"CNY",//	string		是	币种
                    platform:"android",//	string		否	申请接入时的平台，platform 与应用id有关。
                    buyQuantity:res_data.data.quantity,//	number		否	购买数量。mode=game 时必填。购买数量。详见 buyQuantity:"",// 限制说明。
                    //zoneId:"",//	string	1	否	分区 ID
                    success:function(res){
                      console.log(res);
                      // var dict_data = JSON.stringify(res)
                      // wx.showModal({
                      //   title: 'errMsg',
                      //   content:dict_data 
                      // })
                        var midas_res = res
                          //支付成功后，再发起扣币
                          wx.request({
                            url: obj_this.apiurl.pay,
                            method:"POST",
                            data:{
                              type:'wechat',
                              method:"minigame",
                              reqOrder:payArgs.orderParams,
                              token:obj_this.token,
                              mi_pay_return:mi_pay_data,
                              is_mi_pay_return:1,
                              midas_res:midas_res
                            },
                            success (res) {

                              var res_data = res.data;
                              if(res_data.code == 0){
                                payArgs.success(res_data);
                              }else{
                                  //扣除失败
                                  payArgs.fail(res_data);
                              }
                
                            },
                            fail (res) {
                              var ret_call = {"code":90001,"data":{},"msg":"接口调用失败"} 
                              payArgs.fail(ret_call);
                            },
                          }) //  //支付成功后，发起扣币 end

                    },//	function		否	接口调用成功的回调函数
                    fail:function(errMsg){
                            //支付失败
                            var ret_call = {"code":90002,"data":{},"msg":"支付失败"} 
                            payArgs.fail(ret_call);
                    },//	function		否	接口调用失败的回调函数
                    //complete:"",//	function		否	接口调用结束的回调函数（调用成功、失败都会执行
                  });
                }else{
                  //扣除失败
                  payArgs.fail(res_data);
                }
            },
            fail (res) {
              var ret_call = {"code":80001,"data":{},"msg":"接口调用失败"} 
              payArgs.fail(ret_call);
            },
          }) // 支付 end
    }

  }// pay end

}// class end

// 对外共享 hywxgsdk实例对象
//export default new hywxgsdk()
//module.exports = new hywxgsdk()