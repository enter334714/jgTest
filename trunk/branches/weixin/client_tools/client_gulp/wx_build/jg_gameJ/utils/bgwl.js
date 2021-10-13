module.exports = {
  //正式环境参数
  pro: {
    appid: "wx5cc7c8278836be4b",
    secret_key: "sec11be4254418a5ee0",  //分配的加密串，非微信appsecret
    identify: "ide7363c57c34e8d596",   //游戏标识
    sign_type: "sha1",      //枚举，可选 sha1、md5
    channel_id: 'test_channel_id',  //无明确要求，不需要修改
    sub_channel_id: 'test_sub_channel_id2' //无明确要求，不需要修改
  },
  //测试环境参数
  devp: {
    appid: "wx5cc7c8278836be4b",
    secret_key: "seccaab8a47e4d3c31d",  //分配的加密串，非微信appsecret
    identify: "ide14f480e1ec5a2b48", //游戏标识
    sign_type: "sha1",      //枚举，可选 sha1、md5
    channel_id: 'test_channel_id',  //无明确要求，不需要修改
    sub_channel_id: 'test_sub_channel_id2' //无明确要求，不需要修改
  }
  
}
