var u=wx.$x;import w_test from"../utils/wxsdk_v3.12.js";var config={game_id:u[401770],game_pkg:u[401771],partner_label:u[401772],partner_id:u[401773],game_ver:u[401774],is_auth:!0};window.config=config;var x1T69$J=x1T9J$6();var HOST=u[401775];var x1T69J$=null;var x1T9$J6=null;var partner_data={};function x1T9J$6(){var n={};return{order_data:{},init:function(e,t){e=e&&e.game_ver?e.game_ver:0;console.log(u[401776]);var r=this;var o;o=wx.getStorageSync(u[401777])?0:(o=r.uuid(16,32),wx.setStorageSync(u[401777],o),1),wx.getStorageSync(u[401778])||(n=r.uuid(16,32),wx.setStorageSync(u[401778],n));var n=wx.getLaunchOptionsSync();var a=n.scene||"";o&&n.query&&n.query.ad_code&&wx.setStorageSync(u[401779],n.query.ad_code),r.log(u[401780],{install:o,scene:a}),wx.showShareMenu({withShareTicket:!0});r=n.query&&n.query.invite?n.query.invite:"";n=n.query&&n.query.invite_type?n.query.invite_type:"";r&&(x1T9$J6={invite:r,invite_type:n,is_new:o,scene:a}),e&&this.checkGameVersion(e,function(e){t&&t(e)})},login:function(e,t){var r=this;console.log(u[401781]),n[u[400140]]=typeof t==u[400982]?t:null,dyb.getDybUserInfo(function(e){console.log(u[401782]+JSON.stringify(e)),r.do_login(e.user)})},subscribeMessage:function(e,t){console.log(u[401783]+e),n[u[400262]]=typeof t==u[400982]?t:null,wx.requestSubscribeMessage({tmplIds:e,success(e){console.log(u[401784]),console.log(e),n[u[400262]]&&n[u[400262]](e)},fail(e){console.log(u[401785]),console.log(e),n[u[400262]]&&n[u[400262]](e)}})},do_login:function(e){var r=this;partner_data={openid:e.openid,sign:e.sign};var t=r.getPublicData();if(t[u[401786]]=1,t[u[401787]]=JSON.stringify(partner_data),x1T9$J6&&typeof x1T9$J6==u[400882])for(var o in x1T9$J6)t[o]=x1T9$J6[o];wx.request({url:u[401788]+HOST+u[401789],method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:t,success:function(e){if(console.log(u[401790],e),200===e.statusCode){e=e.data;if(e.state){try{wx.setStorageSync(u[401791],e.data.sdk_token),wx.setStorageSync(u[401792],e.data.user_id),wx.setStorageSync(u[401793],e.data.username),e.data.ext&&wx.setStorageSync(u[401794],e.data.ext)}catch(e){}var t={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};n[u[400140]]&&n[u[400140]](0,t)}else n[u[400140]]&&n[u[400140]](1,{errMsg:e.msg});r.getShareInfo(u[401795],function(e){console.log(u[401796]+JSON.stringify(e)),wx.onShareAppMessage(function(){return r.logStartShare(u[401795]),{title:e.title,imageUrl:e.img,query:e.query+"&"+qingjs.instance.getShareToken()}})})}else n[u[400140]]&&n[u[400140]](1,{errMsg:u[401797]})}})},share:function(e){n[u[400246]]=typeof callback==u[400982]?callback:null;var t=e.type||u[400246];console.log(u[401798]+t);var r=this;this.getShareInfo(t,function(e){r.logStartShare(t),wx.shareAppMessage({title:e.title,imageUrl:e.img,query:e.query})})},logStartShare:function(e){var t=wx.getStorageSync(u[401791]);wx.request({url:u[401788]+HOST+u[401799],method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:t,server_id:x1T69J$?x1T69J$.server_id:"",role_id:x1T69J$?x1T69J$.role_id:"",type:e},success:function(e){}})},openService:function(){qingjs.instance.goCustomerService()},checkGameVersion:function(e,r){console.log(u[401800]);wx.getStorageSync(u[401791]);wx.request({url:u[401788]+HOST+u[401801],method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var t;console.log(u[401802]),console.log(e),200==e.statusCode&&(t=e.data).state?r&&r(t.data):r&&r({develop:0})}})},getShareInfo:function(e,t){console.log(u[401803]);var r=wx.getStorageSync(u[401791]);wx.request({url:u[401788]+HOST+u[401804],method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,type:e,server_id:x1T69J$?x1T69J$.server_id:"",role_id:x1T69J$?x1T69J$.role_id:"",no_log:1},success:function(e){console.log(u[401805]),console.log(e),200==e.statusCode?(e=e.data).state?t&&t(e.data):n[u[400246]]&&n[u[400246]](1,{errMsg:u[401806]+e.msg}):n[u[400246]]&&n[u[400246]](1,{errMsg:u[401807]})}})},updateShare:function(e,t,r,o,n,a){console.log(u[401808]);var i=wx.getStorageSync(u[401791]);wx.request({url:u[401788]+HOST+u[401809],method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:i,invite:e,invite_type:t,is_new:r,role_id:o,sever_id:n,scene:a},success:function(e){console.log(u[401810]),console.log(e)}})},msgCheck:function(e,t){console.log(u[401811]);let r={data:{}};dyb.msg_check(e,function(e){console.log(u[401812]+JSON.stringify(e)),1==e.code?(r.statusCode=200,r.data.state=1):(r.statusCode=0,r.data.state=0),t&&t(r)})},pay:function(e,t){this.startPay(e,t)},startPay:function(e,t){console.log(u[401813],e);n[u[400228]]=typeof t==u[400982]?t:null;t=wx.getStorageSync(u[401791]);var r=wx.getStorageSync(u[401794]);var o;t||r?(o=wx.getSystemInfoSync(),e={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:t,session_key:r,platform:o.platform},this.order_data=e,(t=this.getPublicData())[u[401815]]=JSON.stringify(e),t[u[401786]]=1,wx.request({url:u[401788]+HOST+u[401816],method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:t,success:function(e){var t;console.log(u[401817]),console.log(e),200==e.statusCode?(e=e.data).state&&e.data.pay_data?(console.log(u[401818]+JSON.stringify(e.data.pay_data)),t={pay_amount:e.data.pay_data.money,extra_info:e.data.pay_data.order_id,goods_count:1,goods_name:e.data.pay_data.product_name,redirect_uri:e.data.pay_data.redirect_uri,role_name:e.data.pay_data.role_name,server_name:e.data.pay_data.server_name,order_sn:e.data.pay_data.order_id},dyb.submitOrder(t,function(e){console.log(u[401819]+JSON.stringify(e))})):n[u[400228]]&&n[u[400228]](1,{errMsg:e.errMsg}):n[u[400140]]&&n[u[400140]](1,{errMsg:u[401797]})}})):n[u[400228]]&&n[u[400228]](1,{errMsg:u[401814]})},showVideo:function(e,t){dyb.createVideoAd(e,function(e){console.log(JSON.stringify(e),u[401820]),e.state==u[400660]&&e.isEnded?(console.log(u[401821]),t(1)):(console.log(u[401822]),t(0))})},logCreateRole:function(e,t){var r=wx.getStorageSync(u[401792]);var o=wx.getStorageSync(u[401793]);var n={};n[u[401823]]=r,n[u[401824]]=o,n[u[401825]]=e.roleid,n[u[401826]]=e.rolelevel,n[u[401827]]=e.rolename,n[u[400088]]=e.serverid,e.roleid&&e.serverid&&(x1T69J$={role_id:e.roleid,server_id:e.serverid}),this.log(u[400486],n);r={role_id:e.roleid,role_name:e.rolename,server_id:e.serverid,server_name:e.servername};dyb.createRole(r,function(e){console.log(u[401828]+JSON.stringify(e))})},logEnterGame:function(e,t){var r=wx.getStorageSync(u[401792]);var o=wx.getStorageSync(u[401793]);var n={};n[u[401823]]=r,n[u[401824]]=o,n[u[401825]]=e.roleid,n[u[401826]]=e.rolelevel,n[u[401827]]=e.rolename,n[u[400088]]=e.serverid,e.roleid&&e.serverid&&(x1T69J$={role_id:e.roleid,server_id:e.serverid}),this.log(u[401829],n),x1T9$J6&&this.updateShare(x1T9$J6.invite,x1T9$J6.invite_type,x1T9$J6.is_new,e.roleid,e.serverid,x1T9$J6.scene)},logRoleUpLevel:function(e,t){var r=wx.getStorageSync(u[401792]);var o=wx.getStorageSync(u[401793]);this.log(u[401830],e);var n={};n[u[401823]]=r,n[u[401824]]=o,n[u[401825]]=e.roleid,n[u[401826]]=e.rolelevel,n[u[401827]]=e.rolename,n[u[400088]]=e.serverid,e.roleid&&e.serverid&&(x1T69J$={role_id:e.roleid,server_id:e.serverid}),dyb.gameLevel(e.rolelevel,function(e){console.log(u[401831]+JSON.stringify(e))})},uuid:function(e,t){var r=u[401832].split("");var o,n=[];var a;if(e=e||r.length,t)for(o=0;o<t;o++)n[o]=r[0|Math.random()*e];else for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",o=0;o<36;o++)n[o]||(a=0|16*Math.random(),n[o]=r[19==o?3&a|8:a]);return n.join("")},getPublicData:function(){var e=wx.getSystemInfoSync();var t=wx.getStorageSync(u[401777]);var r=wx.getStorageSync(u[401778]);var o=wx.getStorageSync(u[401779]);return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,partner_label:config.partner_label,ad_code:o,uuid:t,idfv:r,dname:e.model,mac:u[401833],net_type:0==e.wifiSignal?"4G":u[401834],os_ver:e.system,sdk_ver:e.version,game_ver:config.game_ver,device:e.platform==u[400456]?1:2}},log:function(e,t){var r=this.getPublicData();for(var o in t)r[o]=t[o];console.log(u[401835]+e),console.log(r),wx.request({url:u[401788]+HOST+u[401836]+e+u[401837]+encodeURIComponent(JSON.stringify(r))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()},beQuit:function(e){wx.request({url:u[401788]+HOST+u[401838]+config.partner_id+"/"+config.game_pkg,method:u[400105],dataType:u[401227],header:{"content-type":u[400299]},data:{uid:partner_data.uid,event:u[401839]},success:function(e){console.log(u[401840]+JSON.stringify(e))}})},showMenu:function(){qingjs.instance.showMenu({stage:Laya.stage,canvas:canvas,entryIconX:0,entryIconY:0})}}}function run(e,t,r){e in x1T69$J&&x1T69$J[e](t,r)}exports.init=function(e,t){run(u[400118],e,t)},exports.login=function(e){run(u[400140],"",e)},exports.login=function(e){run(u[400140],"",e)},exports.pay=function(e,t){run(u[400228],e,t)},exports.showVideo=function(e,t){run(u[401841],e,t)},exports.openService=function(){run(u[400247])},exports.logCreateRole=function(e,t,r,o,n){run(u[400241],{serverid:e,servername:t,roleid:r,rolename:o,rolelevel:n})},exports.logEnterGame=function(e,t,r,o,n,a,i){e={serverid:e,servername:t,roleid:r,rolename:o,rolelevel:n,rolecreatetime:a,rolepower:i?i.rolepower:0};run(u[400243],e,i?i.callback:"")},exports.logRoleUpLevel=function(e,t,r,o,n,a,i){e={serverid:e,servername:t,roleid:r,rolename:o,rolelevel:n,rolecreatetime:a,rolepower:i?i.rolepower:""};run(u[400245],e,i?i.callback:"")},exports.share=function(e){run(u[400246],{type:e})},exports.msgCheck=function(e,t){run(u[400069],e,t)},exports.downloadClient=function(){run(u[401842])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getPublicData=function(){run(u[401843])},exports.beQuit=function(e){run(u[401844],e)},exports.showMenu=function(){run(u[401845])},exports.subscribeMessage=function(e,t){run(u[400262],e,t)};