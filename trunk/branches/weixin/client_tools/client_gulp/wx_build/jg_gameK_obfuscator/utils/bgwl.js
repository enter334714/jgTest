module.exports = {
  //正式环境参数
  pro: {
    appid: "wx538953a4f1a3a954",
    secret_key: "sec6d62d171239f11cb", //分配的加密串，非微信appsecret
    identify: "idebf46f44f8912c2af", //游戏标识
    sign_type: "sha1", //枚举，可选 sha1、md5
    channel_id: 'test_channel_id', //无明确要求，不需要修改
    sub_channel_id: 'test_sub_channel_id2' //无明确要求，不需要修改
  },
  //测试环境参数
  devp: {
    appid: "wx538953a4f1a3a954",
    secret_key: "sec7c82ccabf981fc37", //分配的加密串，非微信appsecret
    identify: "ide20903e1cfe126d52", //游戏标识
    sign_type: "sha1", //枚举，可选 sha1、md5
    channel_id: 'test_channel_id', //无明确要求，不需要修改
    sub_channel_id: 'test_sub_channel_id2' //无明确要求，不需要修改
  }

};