var AKSDK = require("../wx_aksdk.js");
window.versions = {
  wxVersion: window.config.game_ver,
};


window.DEBUG = false;
window.PLATFORM = 5;
window.ENV = 8;
window.PACK = true;
window.WSS = true;
window.workerJsURL = "";
window.isWaiFangWx = false;
window.PF_INFO = {
  base_cdn: "https://cdn-tjqy.sh9130.com/weixin_0/",
  cdn: "https://cdn-tjqy.sh9130.com/weixin_0/",
}
PF_INFO.pay_infos = {}
PF_INFO.package = "0";
PF_INFO.version = window.versions.wxVersion;
PF_INFO.mac = "";
PF_INFO.os = "1";
PF_INFO.sdk_name = "9130";
PF_INFO.apiurl = "https://api-tjqytest.sh9130.com";
PF_INFO.logurl = "https://log-tjqytest.sh9130.com";
PF_INFO.payurl = "https://pay-tjqytest.sh9130.com";
PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
PF_INFO.partnerId = "1";
PF_INFO.pkgName = "";
PF_INFO.device_id = "";
PF_INFO.from_scene = 0;
PF_INFO.serverList = {};
PF_INFO.channelNum = parseInt(PF_INFO.partnerId);
PF_INFO.channel = PF_INFO.partnerId;
PF_INFO.selectedServer = {};


PF_INFO.showLogo = false;
PF_INFO.debugUsers = "39927500|58163716|74597555|172978096"; //平台账号
PF_INFO.tick = Date.now();







  




















