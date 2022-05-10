//  初始化
export function init(data) {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success: res => {
        wx.request({
          url: 'https://api.huiyaohuyu.com/hy/init',
          data: {
            sdkversion: 3,
            channel_id: data.channel_id,
            imei: data.imei,
            app_id: data.appId,
            mobile: data.mobile,
            device: data.device,
            brand: res.brand,
            brand_desc: res.model,
            type: res.platform,
          },
          success: resolve,
          fail: reject
        })
      }
    });
  })
}
// 获取openid
export function getOpenId(appId) {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        // 调用接口发送code给后端调用返回一个
        wx.request({
          url: 'https://api.huiyaohuyu.com/minigame/getOpenid',
          data: {
            code: res.code,
            app_id: appId
          },
          success: resolve,
          fail: reject
        })
      }
    })
  })
}
// 登录
export function userLogin(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://u9php.huiyaohuyu.com/login/loginRequest',
      data: {
        aid: "0",
        channelId: data.channel_id,
        token: wx.getStorageSync("session_key"),
        ProductId: data.appId,
        ChannelUserId: wx.getStorageSync("openId"),
        DeviceId: wx.getStorageSync("device"),
      },
      success: resolve,
      fail: reject
    })
  })
}

// 角色上报
export function setRoleInfo(role) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://bu.huiyaohuyu.com/cs/report',
      data: {
        type: 1, // 等级上报
        channel: 194,
        imei: wx.getStorageSync("imei"),
        userid: wx.getStorageSync("userId"),
        guid: wx.getStorageSync("openId"),
        app: role.appId,
        zone_id: role.zone_id,
        zone_name: role.zone_name,
        role_id: role.role_id,
        role_name: role.role_name,
        role_level: role.role_level,
        vip: role.vip,
        party_name: role.party_name,
        left_coin: role.left_coin,
        is_role_create: role.is_role_create,
      },
      success: resolve,
      fail: reject
    })
  })
}

// 切支付判断
export function checkPay(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://u9php.huiyaohuyu.com/u9/checkPay',
      method: "GET",
      data: {
        total_fee: data.total_fee,
        u9uid: wx.getStorageSync('userId'),
        app: data.appId,
        channel: data.channel_id,
        role_id: data.role_id,
        zone_id: data.zone_id,
        platform: data.platform
      },
      success: resolve,
      fail: reject
    })

  })
}
// 下单接口
export function payRequest(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://u9php.huiyaohuyu.com/payRequest/payRequest',
      data: {
        ProductId: data.appId,
        ChannelId: data.channel_id,
        UserId: wx.getStorageSync('userId'),
        ProductOrderId: data.productOrderId,
        Amount: data.amount,
        IsSwitchPayChannel: data.isSwitchPayChannel,
        CallbackUrl: data.callbackUrl,
        Ext: data.ext,
        AppExt: data.appExt,
        DeviceId: wx.getStorageSync('device'),
        zone_name: data.zone_name,
        zone_id: data.zone_id,
        role_id: data.role_id
      },
      success: resolve,
      fail: reject
    })
  })
}
// 支付
export function payMoney(data) {
  return new Promise((resolve, reject) => {
    wx.requestMidasPayment({
      mode: "game",
      offerId: data.offerId, //在米大师侧申请的应用 id
      currencyType: "CNY",
      buyQuantity: data.buyQuantity,
      env: data.env,
      platform: data.platform,
      success: res => {
        // 成功调用
        wx.request({
          url: 'https://u9php.huiyaohuyu.com/payNotify/channelPayNotify/' + data.appId + "/" + data.channel_id,
          method: "POST",
          data: {
            order_id: data.order_id,
            openid: wx.getStorageSync('openId'),
            amount: data.amount,
            debug: data.env
          },
          success: resolve,
          fail: reject
        })
      }
    })
  })
}