export default {
    sdkVersion: '1.0.0',
    sdkData: {
        sdkInit: 0,
        sdkCachePrefix: 'yq_cache',
        sdkCacheData: {},
        sdkShareData: {},
        platform: 'android',
        requestData: {
            wxmini_appid: 0,
            game_id: 0,
            package_id: 0,
            channel: 37,
            commonData: {}
        },
        requestDomain: 'https://sdk-server.heiqihy-games.com',
        // requestDomain: 'http://10.0.0.33:8813',
        requestingApi: {},
    },
    showTips(title, complete) {
        wx.showToast({
            title: title || '提示',
            icon: 'none',
            complete
        })
    },
    showAlert(title, content, succ) {
        wx.showModal({
            title: title || '提示',
            content: content,
            showCancel: false,
            confirmColor: '#0f77ff',
            success: succ
        })
    },
    handleRequestCheck(api) {
        let _this = this
        return _this.sdkData.requestingApi[api]
    },
    handleRequestStart(api) {
        let _this = this
        _this.sdkData.requestingApi[api] = 1
    },
    handleRequestEnd(api) {
        let _this = this
        delete _this.sdkData.requestingApi[api]
    },
    getCacheKey(key) {
        let _this = this
        return _this.sdkData.sdkCachePrefix + '_' + key
    },
    removeStorage(key) {
        let _this = this
        key = _this.getCacheKey(key)
        if (this.sdkData.sdkCacheData[key]) {
            delete this.sdkData.sdkCacheData[key]
        }
        try {
            wx.removeStorage({key})
        } catch (e) {
        }
    },
    getStorage(key) {
        let _this = this
        key = _this.getCacheKey(key)
        let result
        try {
            result = wx.getStorageSync(key)
        } catch (e) {
        }
        if (!result && [false, 0].indexOf(result) === -1) {
            result = this.sdkData.sdkCacheData[key] || ''
        }
        return result
    },
    setStorage(key, data) {
        let _this = this
        key = _this.getCacheKey(key)
        this.sdkData.sdkCacheData[key] = data
        try {
            wx.setStorageSync(key, data)
        } catch (e) {
        }
    },
    getUuid() {
        let _this = this
        let uuid = _this.getStorage('uuid')
        if (!uuid) {
            let d = new Date().getTime()
            if (typeof window !== 'undefined' && window.performance && typeof window.performance.now === 'function') {
                d += performance.now()
            }
            uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = (d + Math.random() * 16) % 16 | 0
                d = Math.floor(d / 16)
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
            })
            _this.setStorage('uuid', uuid)
        }
        return uuid
    },
    setCommonData() {
        let _this = this
        wx.getNetworkType({
            complete(res) {
                if (res.hasOwnProperty('networkType')) {
                    _this.sdkData.requestData.commonData.net_work = res.networkType
                }
            }
        })

        let systemInfo = wx.getSystemInfoSync()
        _this.sdkData.requestData.commonData.uuid = _this.getUuid()
        _this.sdkData.requestData.commonData.sdk_version = _this.sdkVersion
        _this.sdkData.requestData.commonData.wxmini_appid = _this.sdkData.requestData.wxmini_appid
        _this.sdkData.requestData.commonData.game_id = _this.sdkData.requestData.game_id
        _this.sdkData.requestData.commonData.package_id = _this.sdkData.requestData.package_id
        _this.sdkData.requestData.commonData.channel = _this.sdkData.requestData.channel
        _this.sdkData.requestData.commonData.device_screen = systemInfo.screenWidth + 'x' + systemInfo.screenHeight
        _this.sdkData.requestData.commonData.device_os = systemInfo.brand
        _this.sdkData.requestData.commonData.device_factory = systemInfo.model
        _this.sdkData.requestData.commonData.device_system = systemInfo.system
        _this.sdkData.requestData.commonData.device_type = 3
    },
    handleRequest(api, data, succ, err, options = {}) {
        let _this = this
        if (_this.handleRequestCheck(api)) {
            return
        }
        _this.handleRequestStart(api)

        data = Object.assign(_this.sdkData.requestData.commonData, data)
        if (!data.game_id) {
            _this.showAlert('提示', '游戏数据异常')
            return
        }

        let url = _this.sdkData.requestDomain + api
        let method = options.method || 'POST'
        let closeLoading = () => {
            wx.hideLoading()
        }
        return wx.request({
            url,
            method,
            data: data,
            header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            success(res) {
                closeLoading()
                _this.handleRequestEnd(api)
                let data = res.data
                console.log('[YQSDK][request]响应数据', data)
                if (data.code === 0) {
                    succ && succ(data)
                } else {
                    err && err(data)
                }
            },
            fail(e) {
                closeLoading()
                console.log('[YQSDK][request]请求失败', JSON.stringify(e))
                _this.handleRequestEnd(api)
                if (e.errMsg === 'request:fail abort') return

                let errMsg = '请求失败,请检查网络';
                if (err && typeof err === 'function') {
                    err({code: -1, msg: errMsg})
                } else {
                    _this.showAlert('提示', errMsg)
                }
            }
        })
    },
    handleCallback(code, msg, data, func = null) {
        console.log('[YQSDK][callback]', code, msg, data)
        if (!func || typeof func !== 'function') {
            return
        }
        func(code, msg, data)
    },
    handleShare() {
        let _this = this

        wx.showShareMenu()
        wx.onShareAppMessage(res => {
            let shareInfoArr = _this.sdkData.sdkShareData.share_info || [];
            let length = shareInfoArr.length;
            let shareInfo = shareInfoArr[Math.floor(Math.random() * length)]
            return {
                title: shareInfo.share_title,
                imageUrl: shareInfo.share_img
            }
        })
    },
    init(params = {}, func = null) {
        let _this = this
        let gameId = params.game_id || 0
        if (!gameId) {
            console.log('[YQSDK][init]参数异常', params)
            _this.handleCallback(-1, '初始化参数异常，缺少game_id', null, func)
            return
        }
        _this.sdkData.requestData.game_id = gameId
        _this.sdkData.requestData.package_id = wx.getLaunchOptionsSync().query.package_id || 9999
        _this.sdkData.platform = wx.getSystemInfoSync().platform.toLocaleLowerCase()
        _this.sdkData.requestData.wxmini_appid = params.wxmini_appid || (wx.getAccountInfoSync ? wx.getAccountInfoSync().miniProgram.appId : 0)

        _this.sdkData.sdkInit = 1
        _this.setCommonData()
        _this.firstUp()
        _this.getGameWx()
        _this.handleCallback(0, 'success', null, func)
    },
    getFirstUpKey(gameId) {
        let _this = this
        return (gameId || _this.sdkData.requestData.game_id) + '_' + _this.getUuid().replaceAll('-', '_')
    },
    getGameWx() {
        let _this = this
        _this.handleRequest('/api/wx/game_wx', {}, res => {
            _this.sdkData.sdkShareData = res.data
            _this.handleShare()
        })
    },
    checkFirstUp(gameId) {
        let _this = this
        return !!_this.getStorage(_this.getFirstUpKey(gameId))
    },
    firstUp() {
        let _this = this
        if (_this.checkFirstUp()) {
            return
        }

        _this.handleRequest('/api/h5/user/first_up', {}, () => {
            _this.setStorage(_this.getFirstUpKey(), 1)
        })
    },
    checkInit() {
        let _this = this
        return _this.sdkData.sdkInit === 1 && _this.sdkData.requestData.wxmini_appid && _this.sdkData.requestData.game_id
    },
    login(params = {}, func = null) {
        let _this = this
        if (!_this.checkInit()) {
            console.log('[YQSDK][login]未初始化', params)
            _this.handleCallback(-1, '未调用初始化接口')
        }

        wx.login({
            success(res) {
                console.log('[YQSDK][login]微信登陆成功', res)
                _this.handleRequest('/api/h5/user/login', {
                    access_token: res.code
                }, res => {
                    _this.handleCallback(0, '登录成功', res.data, func)
                }, () => {
                    _this.handleCallback(res.code, res.msg, null, func)
                })
            },
            fail(e) {
                console.log('[YQSDK][login]调用微信登陆失败', e.errCode, e.errMsg)
                _this.handleCallback(-1, '调用微信登陆失败')
            }
        })
    },
    pay(params = {}, func = null) {
        let _this = this
        wx.showLoading({
            title: '拉起支付中',
        })

        wx.showLoading()
        _this.handleRequest('/api/h5/pay/create', params, res => {
            let data = res.data
            if (this.sdkData.platform === 'windows' || _this.sdkData.platform === 'mac') {
                // 扫码
                _this.handlePaymentQrcode(res.data.qrcode, func)
                return
            }

            if (data.stype && data.stype === 1) {
                // 客服
                _this.handlePaymentCustomerService(data.trade_no, func)
            }
            // if (data.cewm === 1) {
            // } else {
            //     // ios和mac系统不支持米大师
            //     if (_this.sdkData.platform !== 'android' && _this.sdkData.platform !== 'windows') {
            //         _this.showTips('该机型暂不支持该支付')
            //         return
            //     }
            //
            //     if (data.sdk_info.code !== 0) {
            //         _this.showTips(data.sdk_info.msg)
            //         return
            //     }
            //
            //     if (data.sdk_info.is_enough === 1) {
            //         // 余额足够,直接回调
            //         _this.handleRequest('/channel/pay/client_callback', data.sdk_info.order_info, res => {
            //             _this.showTips('支付成功')
            //         })
            //     } else {
            //         // 余额不足,先充值
            //         _this.showTips('拉起米大师充值')
            //         _this.handlePaymentMidas(data.sdk_info.midas_payment, data.sdk_info.order_info, func)
            //     }
            // }
        }, res => {
            _this.showAlert('提示', res.msg)
            _this.handleCallback(res.code, res.msg, null, func)
        })
    },
    handlePaymentQrcode(url, func = null) {
        let _this = this
        wx.previewImage({
            current: url,
            urls: [url]
        })
        _this.handleCallback(0, 'PC扫码支付', null, func)
    },
    handlePaymentCustomerService(trade_no, func = null) {
        let _this = this
        wx.showModal({
            title: '充值教程',
            content: '即将跳转官方【客服会话】进行充值，进去后点击右下角【充值】图标获取充值链接',
            showCancel: false,
            success(res) {
                if (res.confirm) {
                    _this.handleCustomerService(trade_no, true, '点击客服返回链接可进行支付', trade_no, 'https://sdk-server.heiqihy-games.com/images/kefu_pay.jpg', () => {
                        _this.handleCallback(0, '拉起客服支付成功', null, func)
                    }, () => {
                        _this.handleCallback(-1, '拉起客服支付失败', null, func)
                    })
                }
            }
        })
    },
    handlePaymentMidas(midasPayment = {}, orderInfo = {}, func = null) {
        let _this = this
        midasPayment.success = (res) => {
            orderInfo.res = res
            _this.handleRequest('/api/channel/pay/client_callback', orderInfo, () => {
                _this.showTips('支付成功')
                _this.handleCallback(0, '支付成功', null, func)
            })
        }
        midasPayment.fail = (error) => {
            _this.handleCallback(0, '支付失败', null, func)
            console.log(error)
        }
        wx.requestMidasPayment(data_midas)
    },
    handleCustomerService(sf, card = false, title = '', path = '', img = '', success = null, fail = null) {
        if (sf && typeof sf == 'object') {
            sf = JSON.stringify(sf)
        }

        wx.openCustomerServiceConversation({
            sessionFrom: sf,
            showMessageCard: card,
            sendMessageTitle: title,
            sendMessagePath: path,
            sendMessageImg: img,
            success,
            fail
        })
    },
    msgSecCheck(params = {}, func = null) {
        if (!params.openid || !params.content || !params.scene) {
            _this.handleCallback(-1, '数据缺失', null, func)
            return
        }

        const _this = this
        _this.handleRequest('/api/wx/msg_sec_check', params, res => {
            _this.handleCallback(0, '校验完成', res.data, func)
        }, res => {
            _this.handleCallback(res.code, res.msg, null, func)
        })
    }
}
