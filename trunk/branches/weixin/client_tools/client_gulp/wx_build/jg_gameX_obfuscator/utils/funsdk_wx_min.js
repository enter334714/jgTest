var u=wx.$x;u=wx.$x;export default class FunGame{constructor(){this.host="https://funsdk.bigrnet.com"}sign(o){var l="";var e=Object.keys(o);return e.sort(),e.forEach(e=>{"host_url"!=e&&(l+=o[e])}),l}setParameter(e,o,l){e=e.replace(/(#.*)/gi,"");var n=new RegExp("([?&])"+o+"=([^&]*)(?=&|$)","i");return n.test(e)?e.replace(n,"$1"+o+"="+l):e+(-1==e.indexOf("?")?"?":"&")+o+"="+l}ajaxRequest(e,o,l,n){e=this.setParameter(e,"v",Math.random());wx.request({url:e,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:o,dataType:"json",success:function(e){l&&l(e.data)},fail:function(e){n&&n(e)}})}game(e,o,l){var n;console.log("<<<----\u6e38\u620f----\x3e>>"),e.game_key?(n=this.host+"/index/game",this.ajaxRequest(n,e,o,l)):console.log("\u7f3a\u5c11game_key")}wxChannelCode(){console.log("<<<----\u6e20\u9053----\x3e>>");var e=wx.getLaunchOptionsSync()["query"];var o=decodeURIComponent(e.query);var l=new Object;if("undefined"!=o&&""!=o)l.code=o,l.type=1e4;else{const t=decodeURIComponent(e.scene);if("undefined"==t)return l;var n=t.split("&");for(var s=0;s<n.length;s++)l[n[s].split("=")[0]]=n[s].split("=")[1]}return l}role(e,o,l){var n;console.log("<<<----\u89d2\u8272----\x3e>>"),e.host_url?e.game_key?e.account?e.server?e.server_name?e.role?e.role_name?e.level?(null!=e.type&&""!=e.type&&null!=e.type||(e.type=0),e.sign=this.sign(e),n=e.host_url+"/index/role",this.ajaxRequest(n,e,o,l)):console.log("\u7f3a\u5c11level"):console.log("\u7f3a\u5c11role_name"):console.log("\u7f3a\u5c11role"):console.log("\u7f3a\u5c11server_name"):console.log("\u7f3a\u5c11server"):console.log("\u7f3a\u5c11account"):console.log("\u7f3a\u5c11game_key"):console.log("\u7f3a\u5c11host_url")}order(e,o,l){var n;console.log("<<<----\u8ba2\u5355----\x3e>>"),e.host_url?e.game_key?e.account?e.server?e.role?e.amount?(e.sign=this.sign(e),n=e.host_url+"/order/index",this.ajaxRequest(n,e,o,l)):console.log("\u7f3a\u5c11amount"):console.log("\u7f3a\u5c11role"):console.log("\u7f3a\u5c11server"):console.log("\u7f3a\u5c11account"):console.log("\u7f3a\u5c11game_key"):console.log("\u7f3a\u5c11host_url")}gameLogin(e,o,l){var n;console.log("<<<----\u767b\u5f55----\x3e>>"),e.host_url?e.game_key?e.code?(n=e.host_url+"/login/code",this.ajaxRequest(n,e,o,l)):console.log("\u7f3a\u5c11code"):console.log("\u7f3a\u5c11game_key"):console.log("\u7f3a\u5c11host_url")}gameToken(e,o,l){var n;console.log("<<<----Token----\x3e>>"),e.host_url?e.game_key?(n=e.host_url+"/index/game-access-token",this.ajaxRequest(n,e,o,l)):console.log("\u7f3a\u5c11game_key"):console.log("\u7f3a\u5c11host_url")}midasNotice(l,n,s){var t;console.log("<<<----\u7c73\u5927\u5e08----\x3e>>"),null!=l.game_env&&""!=l.game_env&&null!=l.game_env||(l.game_env=0),l.offer_id?l.currency_type?l.amount?l.server?l.game_key?l.host_url?l.account?l.role?(t=this,wx.requestMidasPayment({currencyType:l.currency_type,env:l.game_env,mode:"game",offerId:l.offer_id,buyQuantity:l.amount,platform:"android",zoneId:"1",success(e){console.log("<<<----midas\u652f\u4ed8\u6210\u529f----\x3e>>");var o=l.host_url+"/notice/midas";t.ajaxRequest(o,l,n,s)},fail(e){console.log(e)}})):console.log("\u7f3a\u5c11role"):console.log("\u7f3a\u5c11account"):console.log("\u7f3a\u5c11host_url"):console.log("\u7f3a\u5c11game_key"):console.log("\u7f3a\u5c11server"):console.log("\u7f3a\u5c11amount"):console.log("\u7f3a\u5c11currency_type"):console.log("\u7f3a\u5c11offer_id")}checkWords(e,o,l){var n;console.log("<<<----\u654f\u611f\u8bcd----\x3e>>"),e.game_key?e.account?e.scene?e.content?(n=e.host_url+"/index/check-words",this.ajaxRequest(n,e,o,l)):console.log("\u7f3a\u5c11content"):console.log("\u7f3a\u5c11scene"):console.log("\u7f3a\u5c11account"):console.log("\u7f3a\u5c11game_key")}}