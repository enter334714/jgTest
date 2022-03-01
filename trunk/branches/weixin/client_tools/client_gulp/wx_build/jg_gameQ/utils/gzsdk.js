/**
 * 果子游戏 - 微信小游戏SDK
 */

export default class Gzsdk {

  constructor() {
    this.confInfo = [] // 初始化配置数据，初始化接口返回
    this.gameInfo = [] // 游戏信息，游戏初始化时传过来
    this.domain = {
      base: 'https://sdkbase.v2.guoziyx.com',
      login: 'https://login.v2.guoziyx.com',
      pay: 'https://pay.v2.guoziyx.com',
      api: 'https://api.v2.guoziyx.com',
    }
    this.url = {
      init: '/xyx/Init/conf',
      loginCode: '/signin/xyx.wx/code',
      loginSession: '/signin/xyx.wx/session',
      loginAuthCode: '/signin/xyx.wx/authCode',
      order: '/order/union',
      notify: '/notify/Tencent/wxxyx', //小程序米大师回调地址
      report: '/report',
      msgCheck: '/wx/Utils/msgCheck',
    }
    this.storageKey = {
      userSession: 'gzyx:u:session',
      launchChannel: 'gzyx:launch:channel',
      initStatus: 'gzyx:init:status',
      midasNotifyList: 'gzyx:midas:list',
      midasNotifyData: 'gzyx:midas:data:',
    }
  }
  /****************************************************************************************************************************************************************/
  /*  数据上报  */
  /****************************************************************************************************************************************************************/
  /**
   * - enter_game_log
   * - role_upgrande
   * - create_role
   * - role_info_change
   * - game_pay_request_log
   * - game_login_log
   * - init_sdk_log
   */
  report(_data) {
    this.clog('游戏上报数据')
    this.clog(_data)
    var cacheChannel = wx.getStorageSync(this.storageKey.launchChannel)
    if (cacheChannel) {
      _data.channel_id = cacheChannel
    }
    _data.os_type = this.osType()
    _data.data_flag = _data.action
    delete _data.action
    var that = this
    this.serverRequest(this.domain.api + this.url.report, _data, function (_res) {
      that.clog('上报结果')
      that.clog(_res)
    })
  }
  /****************************************************************************************************************************************************************/
  /*  支付逻辑  */
  /****************************************************************************************************************************************************************/
  /**
   * 支付入口
   * @param {*} _orderData  游戏请求的订单数据
   * @param {*} _callback   支付请求回调
   */
  pay(_orderData, _callback) {
    //  上报支付请求记录
    this.report({
      action: 'game_pay_request',
      event_time: '',
      client_ip: '',
      os_type: this.osType(),
      money: _orderData.total_fee,
      user_id: _orderData.user_id,
      game_id: _orderData.game_id,
      channel_id: wx.getStorageSync(this.storageKey.launchChannel)
    })

    this.clog('游戏请求下单接口')
    if ('ios' === this.osType() && (this.confInfo && 0 == this.confInfo.iosPay)) {
      this.clog("当前环境的支付已经屏蔽")
      this.clog(this.confInfo)
      //  不开启 IOS 支付逻辑
      _callback && _callback({
        res_code: 500,
        res_msg: 'ios_can_not_pay'
      })
      return
    }
    this.serverOrder(_orderData, _callback)
    //服务端下单请求
  }
  /**
   * 服务端下单请求
   * @param orderData 游戏请求的订单数据
   * @param _callback 支付请求回调
   */
  serverOrder(orderData, _callback) {
    this.clog('请求果子服务端下单')

    var gzOrderType = 'wxxyx'
    if ('ios' === this.osType()) {
      gzOrderType = 'iosxyx'
    }

    //  填充数据
    orderData.user_channel = this.gameInfo.channel_id
    orderData.gz_order_type = gzOrderType
    orderData.device_type = this.osType()
    orderData.login_token = wx.getStorageSync(this.storageKey.userSession)
    orderData.appid = this.gameInfo.appid

    this.clog('服务端下单数据')
    this.clog(orderData)

    var that = this
    this.serverRequest(this.domain.pay + this.url.order, orderData, function (_res) {
      if (!_res) {
        that.clog('果子服务端下单请求错误')
        _callback && _callback({
          res_code: 500,
          res_msg: '接口请求失败'
        })
      } else {
        if ('android' === that.osType()) {
          if (505 == _res.res_code) {
            //成功则进行支付调起
            that.clog("果子服务端下单请求成功")
            that.clog(_res)
            that.orderSuccess(_res.res_msg, _callback)
          } else if (200 == _res.res_code) {
            //成功则进行支付调起
            that.clog("果子服务端扣款成功")
            that.clog(_res)
            _callback && _callback(_res)
          } else {
            // 回调CP
            that.clog('果子服务端下单请求失败')
            that.clog(_res)
            _callback && _callback(_res)
          }
        } else {
          if (200 == _res.res_code) {
            //成功则进行支付调起
            that.clog("果子服务端下单请求成功")
            that.clog(_res)
            that.orderSuccess(_res.res_msg, _callback)
          } else {
            // 回调CP
            that.clog('果子服务端下单请求失败')
            that.clog(_res)
            _callback && _callback(_res)
          }
        }
      }
    })
  }
  /**
   * 下单成功处理
   * @param data 游戏请求的订单数据
   * @param _callback 支付请求回调
   */
  orderSuccess(data, _callback) {
    if ('android' === this.osType()) {
      this.payMidas(data, _callback)
      return
    }
    switch (data.iospaytype) {
      case 'kefu':
        this.payKefu(_callback)
        break
      case 'kefu_not_card':
        this.payKefuNotCard(_callback)
      case 'wxqrcode':
        this.payCode(data, _callback)
        break
    }
  }

  /**
   * 没有卡片消息的客服策略
   */
  payKefuNotCard(_callback) {
    this.clog("执行客服支付策略-2")
    var that = this
    wx.openCustomerServiceConversation({
      success: function (res) {
        that.clog('客服调用成功!')
        _callback && _callback({
          res_code: 200,
          res_msg: '下单成功'
        })
      },
      fail: function (res) {
        that.clog('客服调用失败!')
        that.clog(res)
        _callback && _callback({
          res_code: 500,
          res_msg: '打开客服会话框失败'
        })
      }
    })
  }
  /**
   * 客服策略
   * @param _callback 支付请求回调
   */
  payKefu(_callback) {
    this.clog("执行客服支付策略")
    var that = this
    wx.openCustomerServiceConversation({
      sessionFrom: 'gzyx',
      showMessageCard: that.confInfo.kefupay.showMessageCard,
      sendMessageTitle: that.confInfo.kefupay.sendMessageTitle,
      sendMessageImg: that.confInfo.kefupay.sendMessgeImg,
      sendMessagePath: that.confInfo.kefupay.sendMessagePath,
      success: function (res) {
        that.clog('客服调用成功!')
        _callback && _callback({
          res_code: 200,
          res_msg: '下单成功'
        })
      },
      fail: function (res) {
        that.clog('客服调用失败!')
        that.clog(res)
        _callback && _callback({
          res_code: 500,
          res_msg: '打开客服会话框失败'
        })
      }
    })
  }
  /**
   * 二维码策略
   * @param data 下单返回数据
   * @param _callback 支付请求回调
   */
  payCode(data, _callback) {
    this.clog("执行二维码支付策略")
    this.clog(data)
    if (data.url) {
      _callback && _callback({
        res_code: 200,
        res_msg: {
          qrcode_url: data.url
        }
      })
    } else {
      _callback && _callback({
        code: 500,
        res_msg: ''
      })
    }
  }
  /**
   * 米大师支付
   * @param _data 下单返回数据
   * @param _callback 支付请求回调
   */
  payMidas(_data, _callback) {
    this.clog("执行米大师支付")
    this.clog(_data)
    var that = this;
    if(_data.env!=undefined)
    {
      //执行虚拟支付
      wx.requestMidasPayment({
        mode: _data.mode,
        env: _data.env,
        currencyType: _data.currencyType,
        platform: _data.platform,
        offerId: _data.offerId,
        buyQuantity: _data.buyQuantity,
        zoneId: 1,
        success: function (_res) {
          that.cacheMidasNotifyData(_data.notifyData)
          that.clog('米大师支付完成')
          that.clog(_res)
          that.midasPaySucc(_data.notifyData, _callback)
        },
        fail: function (_res) {
          that.clog("米大师支付失败")
          that.clog(_res)
          _callback && _callback({
            res_code: 500,
            res_msg: '米大师支付失败'
          })
        }
      })
    }else{
      //执行虚拟支付
      wx.requestMidasPayment({
        mode: _data.mode,
        currencyType: _data.currencyType,
        platform: _data.platform,
        offerId: _data.offerId,
        buyQuantity: _data.buyQuantity,
        zoneId: 1,
        success: function (_res) {
          that.cacheMidasNotifyData(_data.notifyData)
          that.clog('米大师支付完成')
          that.clog(_res)
          that.midasPaySucc(_data.notifyData, _callback)
        },
        fail: function (_res) {
          that.clog("米大师支付失败")
          that.clog(_res)
          _callback && _callback({
            res_code: 500,
            res_msg: '米大师支付失败'
          })
        }
      })
    }
    
  }

  /**
   * 通知果子服务端发货
   * @param {*} _data 通知发货数据
   * @param {*} _callback 
   */
  midasPaySucc(_data, _callback) {
    var that = this
    this.serverRequest(this.domain.pay + this.url.notify, _data, function (_res) {
      that.clog('米大师服务端发货完成')
      that.clog(_res)

      if (_res && _res.res_code && 200 == _res.res_code) {
        that.removeMidasNotifyData(_data.id)
      }
      _callback && _callback(_res)
    })
  }

  /**
   * 暂存米大师支付通知数据
   */
  cacheMidasNotifyData(_notifyData) {
    /*
    - 暂存 list
    - 暂存 本体
     */
    var that = this
    wx.getStorage({
      key: this.storageKey.midasNotifyList,
      complete(_res) {
        var list = []
        if (_res.data) {
          //  已经存在数据
          list = _res.data
        }
        list.push(_notifyData.id)
        wx.setStorage({
          data: list,
          key: that.storageKey.midasNotifyList,
          success(_res) {
            wx.setStorage({
              data: _notifyData,
              key: that.storageKey.midasNotifyData + _notifyData.id,
            })
          }
        })
      }
    })
  }

  /**
   * 移除米大师支付通知数据缓存
   * @param {*} _id 果子订单号
   */
  removeMidasNotifyData(_id) {
    var that = this
    wx.getStorage({
      key: this.storageKey.midasNotifyList,
      complete(_res) {
        if (!_res.data || _res.data.indexOf(_id) < 0) {
          //  不存在订单数据，不需要删除
          return
        }
        wx.removeStorage({
          key: that.storageKey.midasNotifyData + _id
        })
      }
    })
  }

  /**
   * 米大师支付补单，自动补发之前没有成功发货的订单
   */
  renotifyMidas() {
    var that = this
    wx.getStorage({
      key: this.storageKey.midasNotifyList,
      success(_res) {
        if (_res && _res.data) {
          _res.data.forEach(id => {
            wx.getStorage({
              key: that.storageKey.midasNotifyData + id,
              success(_res) {
                that.midasPaySucc(_res.data)
              }
            })
          })
        }
      }
    })
    //  这里设置一个清理订单缓存的计时器
    setTimeout(function () {
      wx.getStorage({
        key: that.storageKey.midasNotifyList,
        success(_res) {
          if (_res && _res.data) {
            wx.getStorageInfo({
              success: (result) => {
                var notifyList = []
                for (var id in _res.data) {
                  if (result.keys.indexOf(that.storageKey.midasNotifyData + _res.data[id]) >= 0) {
                    notifyList.push(_res.data[id])
                  }
                }
                wx.setStorage({
                  data: notifyList,
                  key: that.storageKey.midasNotifyList,
                })
              },
            })
          }
        }
      })
    }, 10000)
  }

  /****************************************************************************************************************************************************************/
  /*  登录逻辑  */
  /****************************************************************************************************************************************************************/
  /**
   * 登录接口
   */
  login(_callback) {
    /*
    - 如果配置了强制授权，则先申请权限，然后再调用 getUserInfo
    - 如果没有配置强制授权，则获取 code 去服务端换取 openid
     */
    this.clog('游戏请求登录')
    var that = this
    if (this.confInfo && this.confInfo.forceAuth) {
      wx.authorize({
        scope: 'scope.userInfo',
        success() {
          that.clog("用户同意授权")
          //  用户同意授权，获取 userInfo 登录
          that.authLogin(_callback)
        },
        fail() {
          that.clog("用户不同意授权")
          //  如果在初始化的时候已经获取到不同意授权状态，那么说明用户在之前已经拒绝过，在这里进行引导
          if (that.confInfo.guideAuth) {
            that.clog("执行授权引导")
            wx.openSetting({
              complete(_res) {
                that.clog("授权引导完成返回")
                that.clog(_res)
                wx.getSetting({
                  success(_res) {
                    that.clog("获取用户授权设置结果2")
                    that.clog(_res)
                    if (_res && _res.authSetting && _res.authSetting['scope.userInfo']) {
                      //  获取 userInfo 登录
                      that.clog("执行用户授权登录")
                      that.authLogin(_callback)
                    } else {
                      //  获取 code 登录
                      that.clog("执行用户静默登录")
                      that.staticLogin(_callback)
                    }
                  }
                })
              }
            })
          } else {
            //  获取 code  登录
            that.clog("不执行授权引导，直接获取 code 登录")
            that.staticLogin(_callback)
          }
        }
      })
    } else {
      //  获取 code 登录
      this.clog("执行用户静默登录")
      this.staticLogin(_callback)
    }
  }

  /**
   * （授权登录）获取 userInfo 登录服务端
   */
  authLogin(_callback) {
    try {
      var sessionToken = wx.getStorageSync(this.storageKey.userSession)
      if (!sessionToken) {
        //  第一次登录，直接请求 code 登录
        this.clog('当前没有session记录，执行授权并code登录')
        this.authLoginWithCode(_callback)
      } else {
        var that = this
        wx.checkSession({
          success(_res) {
            //  session_key 有效，直接登录
            that.clog("session_key有效，执行授权信并session登录")
            that.sessionLogin(sessionToken, _callback)
          },
          fail(_res) {
            //  session_key 无效
            that.clog("session_key无效，执行授权信并code登录")
            that.authLoginWithCode(_callback)
          }
        })
      }
    } catch (e) {
      this.clog('获取session_key失败，执行授权并code登录')
      this.authLoginWithCode(_callback)
    }
  }


  /**
   * 获取授权信息，并请求 code 登录
   * @param {*} _callback 游戏登录成功回调
   */
  authLoginWithCode(_callback) {
    var that = this
    wx.login({
      success(_resLogin) {
        if (_resLogin.code) {
          wx.getUserInfo({
            success(_res) {
              that.clog("获取用户授权信息成功")
              that.clog(_res)
              that.serverRequest(that.domain.login + that.url.loginAuthCode, {
                code: _resLogin.code,
                rawData: _res.rawData,
                signature: _res.signature,
                encryptedData: _res.encryptedData,
                iv: _res.iv,
                appid: that.gameInfo.appid,
                game_id: that.gameInfo.game_id,
                channel_id: that.gameInfo.channel_id
              }, function (_res) {
                that.clog("服务端授权并code登录成功，回调游戏")
                that.clog(_res)
                that.loginFinish(_res, _callback)
              })
            }
          })
        } else {
          that.clog("小游戏前端login失败，回调游戏")
          that.loginFinish({
            res_code: 500,
            res_msg: '微信login失败'
          }, _callback)
        }
      },
      fail() {
        that.clog("小游戏前端login失败，回调游戏")
        that.loginFinish({
          res_code: 500,
          res_msg: '微信login失败'
        }, _callback)
      }
    })
  }

  /**
   * （静默登录）获取 code 登录 服务端
   */
  staticLogin(_callback) {
    var that = this
    /*
    - 如果之前没有登录过，请求新 code 登录
    - 如果之前有登录过，判断 session 是否过期
      - 已经过期，请求新 code 登录
      - 没有过期，直接 session 登录
     */

    try {
      var sessionKey = wx.getStorageSync(this.storageKey.userSession)
      if (!sessionKey) {
        //  第一次登录，直接请求 code 登录
        this.clog("当前没有session记录，直接执行code登录")
        this.codeLogin(_callback)
      } else {
        wx.checkSession({
          success(_res) {
            //  session_key 有效，直接登录
            that.clog("session_key有效，执行session登录")
            that.sessionLogin(sessionKey, _callback)
          },
          fail(_res) {
            //  session_key 无效
            that.clog("session_key无效，重新请求code登录")
            that.codeLogin(_callback)
          }
        })
      }
    } catch (e) {
      this.clog("获取session_key失败，请求code登录")
      this.codeLogin(_callback)
    }
  }

  /**
   * 利用之前的 session 数据登录游戏
   * @param {*} _callback   游戏登录成功回调
   */
  sessionLogin(_sessionKey, _callback) {
    var that = this
    //  利用 session 登录
    this.serverRequest(this.domain.login + this.url.loginSession, {
      session: _sessionKey,
      appid: that.gameInfo.appid,
      game_id: that.gameInfo.game_id,
      channel_id: that.gameInfo.channel_id
    }, function (_res) {
      if (_res && 501 == _res.res_code) {
        //  服务端 session 已经过期，需要重新请求 code 登录
        that.clog('服务端session已过期，重新发起code登录流程')
        that.codeLogin(_callback)
      } else {
        //  登录完成，结束登录流程
        that.clog('服务端session登录完成，回调游戏')
        that.loginFinish(_res, _callback)
      }
    })
  }

  /**
   * 重新请求 code 登录
   * @param {*} _callback   游戏登录成功回调
   */
  codeLogin(_callback) {
    var that = this
    wx.login({
      success(_res) {
        if (_res.code) {
          that.serverRequest(that.domain.login + that.url.loginCode, {
            code: _res.code,
            appid: that.gameInfo.appid,
            game_id: that.gameInfo.game_id,
            channel_id: that.gameInfo.channel_id
          }, function (_res) {
            that.clog('服务端code登录完成，回调游戏')
            that.loginFinish(_res, _callback)
          })
        } else {
          //  调用登录失败
          that.loginFinish({
            res_code: 500,
            res_msg: '微信login失败'
          }, _callback)
        }
      },
      fail(_res) {
        that.clog("小游戏前端login失败，回调游戏")
        that.loginFinish({
          res_code: 500,
          res_msg: '微信login失败'
        }, _callback)
      }
    })
  }

  /**
   * 果子登录完成
   * @param {*} _res        服务端返回的登录结果
   * @param {*} _callback   游戏登录成功回调
   */
  loginFinish(_res, _callback) {
    if (_res && 200 == _res.res_code) {
      wx.setStorageSync(this.storageKey.userSession, _res.res_msg.login_token)
      _res = {
        res_code: _res.res_code,
        res_msg: {
          game_id: _res.res_msg.game_id,
          token: _res.res_msg.user_token,
          timestamp: _res.res_msg.timestamp,
          sign: _res.res_msg.sign
        }
      }
    }
    _callback && _callback(_res)
  }
  /****************************************************************************************************************************************************************/
  /*  初始化逻辑  */
  /****************************************************************************************************************************************************************/
  /**
   * 初始化接口
   */
  init(_data, _callback) {
    this.clog('游戏请求初始化')
    //  获取冷启动数据，更新渠道信息
    var launchData = wx.getLaunchOptionsSync()
    this.clog("启动数据")
    this.clog(launchData)
    if (launchData.query.channel && '' !== launchData.query.channel) {
      _data.channel_id = launchData.query.channel
    }
    wx.setStorage({
      key: this.storageKey.launchChannel,
      data: _data.channel_id
    })
    this.gameInfo = _data
    var that = this

    //  游戏调用初始化接口，玩家打开游戏，这里向服务端上报两个CP事件 打开游戏
    this.report({
      action: 'open_game',
      game_id: _data.game_id,
      channel_id: _data.channel_id,
      event_time: '',
      client_ip: ''
    })
    this.report({
      action: 'init_sdk',
      game_id: _data.game_id,
      channel_id: _data.channel_id,
      event_time: '',
      client_ip: '',
      os_type: this.osType()
    })
    wx.getStorageInfo({
      success(_res) {
        if (_res && _res.keys && (_res.keys.indexOf(that.storageKey.initStatus) < 0)) {
          //  不存在初始化状态
          wx.getSystemInfo({
            success(_res) {
              that.report({
                action: 'install',
                event_time: '',
                client_ip: '',
                os_type: that.osType(),
                device_model: _res.model,
                os_version: _res.system,
                channel_id: that.gameInfo.channel_id,
                game_id: that.gameInfo.game_id
              })
              wx.setStorage({
                key: that.storageKey.initStatus,
                data: 1
              })
            }
          })
        }
      }
    })

    //  获取后台支付配置数据
    this.serverRequest(this.domain['base'] + this.url['init'], {
      game_id: this.gameInfo.game_id,
      channel_id: this.gameInfo.channel_id,
      version: this.gameInfo.version,
      appid: this.gameInfo.appid,
      ostype: this.osType()
    }, function (_res) {
      if (_res && _res.res_code == 200) {
        that.renotifyMidas()
        that.confInfo = JSON.parse(_res.res_msg)
        _callback({
          res_code: 200,
          res_msg: {
            iosPay: that.confInfo.iosPay
          }
        })
      } else {
        _callback({
          res_code: 500
        })
      }
    })
  }
  /****************************************************************************************************************************************************************/
  /*  敏感词接口  */
  /****************************************************************************************************************************************************************/
  /**
   * - token
   * - user_id
   */
  msgCheck(_data, _callback) {
    var that = this;
    this.serverRequest(this.domain.api + this.url.msgCheck, _data, function (_res) {
      that.clog('查询敏感词结果');
      that.clog(_res);
      _callback && _callback(_res);
    });

  }
  /****************************************************************************************************************************************************************/
  /*  公共逻辑  */
  /****************************************************************************************************************************************************************/

  osType() {
    var sysInfo = wx.getSystemInfoSync()
    var model = sysInfo['model'].toLowerCase()
    var version = sysInfo['version'].toLowerCase()
    if (model.indexOf('iphone') >= 0 || version.indexOf('iphone') >= 0) {
      return 'ios'
    }
    return 'android'
  }

  serverRequest(_url, _data, _callback) {
    this.clog("SDK请求服务器")
    this.clog(_url)
    this.clog(_data)

    var that = this
    wx.request({
      url: _url,
      data: _data,
      method: 'POST',
      success(_res) {
        that.clog("服务端请求成功")
        that.clog(_res)
        _callback && _callback(_res.data)
      },
      fail(_res) {
        that.clog("服务端请求失败")
        that.clog(_res)
        _callback && _callback({
          res_code: 500,
          res_msg: '请求失败'
        })
      },
      complete(_res) {
        that.clog("服务端请求完成")
        that.clog(_url)
      }
    })
  }

  clog(_data) {
    if (typeof _data === 'object') {
      _data = JSON.stringify(_data)
    }
    console.log(this.time() + " # " + _data)
  }

  time() {
    return Date.parse(new Date()) / 1000
  }
}