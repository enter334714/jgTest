var a=wx.$y;import sdk from"../utils/dwPlatformSDK.js";var config={game_id:a[420936],game_pkg:a[420937],partner_label:a[420938],partner_id:a[420939],game_ver:a[420940],is_auth:!0};window.config=config;var y29S0$5=y2905$S();var HOST=a[420941];var y29S05$=null;var y290$5S=null;var partner_data={};function y2905$S(){var n={};return{order_data:{},init:function(e,r){e=e&&e.game_ver?e.game_ver:0;console.log(a[420942]);var o=this;var t;t=wx.getStorageSync(a[420943])?0:(t=o.uuid(16,32),wx.setStorageSync(a[420943],t),1),wx.getStorageSync(a[420944])||(n=o.uuid(16,32),wx.setStorageSync(a[420944],n));var n=wx.getLaunchOptionsSync();var i=n.scene||"";t&&n.query&&n.query.ad_code&&wx.setStorageSync(a[420945],n.query.ad_code),o.log(a[420946],{install:t,scene:i}),wx.showShareMenu({withShareTicket:!0});o=n.query&&n.query.invite?n.query.invite:"";n=n.query&&n.query.invite_type?n.query.invite_type:"";o&&(y290$5S={invite:o,invite_type:n,is_new:t,scene:i}),e&&this.checkGameVersion(e,function(e){r&&r(e)})},login:function(e,r){var o=this;console.log(a[420947]),n[a[420948]]=typeof r==a[420130]?r:null,dwPlatformSDK.init({platId:1e4,partnerId:"5",ad:"1",gameId:"34",gameName:a[420949],gameVersion:a[420950],pkgName:a[420951],mode:0},function(e,r){switch(e){case a[420952]:console.log(r),dwPlatformSDK.login(function(e,r){switch(e){case a[420953]:console.log(r),o.do_login(r);break;case a[420954]:console.log(r)}});break;case a[420955]:console.log(r)}},!0,2)},subscribeMessage:function(e,r){console.log(a[420956]+e),n[a[420957]]=typeof r==a[420130]?r:null,wx.requestSubscribeMessage({tmplIds:e,success(e){console.log(a[420958]),console.log(e),n[a[420957]]&&n[a[420957]](e)},fail(e){console.log(a[420959]),console.log(e),n[a[420957]]&&n[a[420957]](e)}})},do_login:function(e){var o=this;partner_data={userId:e.userId,token:e.token};var r=o.getPublicData();if(r[a[420960]]=1,r[a[420961]]=JSON.stringify(partner_data),y290$5S&&typeof y290$5S==a[420013])for(var t in y290$5S)r[t]=y290$5S[t];wx.request({url:a[420962]+HOST+a[420963],method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:r,success:function(e){if(console.log(a[420966],e),200===e.statusCode){e=e.data;if(e.state){try{wx.setStorageSync(a[420967],e.data.sdk_token),wx.setStorageSync(a[420968],e.data.user_id),wx.setStorageSync(a[420969],e.data.username),e.data.ext&&wx.setStorageSync(a[420970],e.data.ext)}catch(e){}var r={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};n[a[420948]]&&n[a[420948]](0,r)}else n[a[420948]]&&n[a[420948]](1,{errMsg:e.msg});o.getShareInfo(a[420971],function(e){console.log(a[420972]+JSON.stringify(e)),wx.onShareAppMessage(function(){return o.logStartShare(a[420971]),{title:e.title,imageUrl:e.img,query:e.query}})})}else n[a[420948]]&&n[a[420948]](1,{errMsg:a[420973]})}})},share:function(e){n[a[420974]]=typeof callback==a[420130]?callback:null;var r=e.type||a[420974];console.log(a[420975]+r);var o=this;this.getShareInfo(r,function(e){o.logStartShare(r),wx.shareAppMessage({title:e.title,imageUrl:e.img,query:e.query})})},logStartShare:function(e){var r=wx.getStorageSync(a[420967]);wx.request({url:a[420962]+HOST+a[420976],method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,server_id:y29S05$?y29S05$.server_id:"",role_id:y29S05$?y29S05$.role_id:"",type:e},success:function(e){}})},openService:function(){dwPlatformSDK.goCs()},checkGameVersion:function(e,o){console.log(a[420977]);wx.getStorageSync(a[420967]);wx.request({url:a[420962]+HOST+a[420978],method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var r;console.log(a[420979]),console.log(e),200==e.statusCode&&(r=e.data).state?o&&o(r.data):o&&o({develop:0})}})},getShareInfo:function(e,r){console.log(a[420980]);var o=wx.getStorageSync(a[420967]);wx.request({url:a[420962]+HOST+a[420981],method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:o,type:e,server_id:y29S05$?y29S05$.server_id:"",role_id:y29S05$?y29S05$.role_id:"",no_log:1},success:function(e){console.log(a[420982]),console.log(e),200==e.statusCode?(e=e.data).state?r&&r(e.data):n[a[420974]]&&n[a[420974]](1,{errMsg:a[420983]+e.msg}):n[a[420974]]&&n[a[420974]](1,{errMsg:a[420984]})}})},updateShare:function(e,r,o,t,n,i){console.log(a[420985]);var l=wx.getStorageSync(a[420967]);wx.request({url:a[420962]+HOST+a[420986],method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:l,invite:e,invite_type:r,is_new:o,role_id:t,sever_id:n,scene:i},success:function(e){console.log(a[420987]),console.log(e)}})},msgCheck:function(e,r){console.log(a[420988]);var o=wx.getStorageSync(a[420967]);wx.request({url:a[420962]+HOST+a[420989]+config.partner_id+"/"+config.game_pkg,method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:o,content:e},success:function(e){console.log(a[420990]),console.log(e),r&&r(e)}})},pay:function(e,a){this.startPay(e,a)},startPay:function(e,r){console.log(a[420991],e);n[a[420992]]=typeof r==a[420130]?r:null;r=wx.getStorageSync(a[420967]);var o=wx.getStorageSync(a[420970]);var t;r||o?(t=wx.getSystemInfoSync(),e={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:r,session_key:o,platform:t.platform,userId:partner_data.userId},this.order_data=e,(r=this.getPublicData())[a[420994]]=JSON.stringify(e),r[a[420960]]=1,wx.request({url:a[420962]+HOST+a[420995],method:a[420964],dataType:a[420393],header:{"content-type":a[420965]},data:r,success:function(e){console.log(a[420996]),console.log(e),200==e.statusCode?(e=e.data).state&&e.data.pay_data?(console.log(a[420997]+JSON.stringify(e.data.pay_data)),dwPlatformSDK.pay(e.data.pay_data,function(e,r){switch(e){case a[420998]:case a[420999]:console.log(r)}})):n[a[420992]]&&n[a[420992]](1,{errMsg:e.errMsg}):n[a[420948]]&&n[a[420948]](1,{errMsg:a[420973]})}})):n[a[420992]]&&n[a[420992]](1,{errMsg:a[420993]})},logCreateRole:function(e,r){var o=wx.getStorageSync(a[420968]);var t=wx.getStorageSync(a[420969]);var n={};n[a[421e3]]=o,n[a[421001]]=t,n[a[421002]]=e.roleid,n[a[421003]]=e.rolelevel,n[a[421004]]=e.rolename,n[a[421005]]=e.serverid,e.roleid&&e.serverid&&(y29S05$={role_id:e.roleid,server_id:e.serverid}),this.log(a[420014],n);o={roleLevel:e.rolelevel,roleId:e.roleid,roleName:e.rolename,serverId:e.serverid,serverName:e.servername,roleCreateTime:Date.now().toString().substr(0,10)};dwPlatformSDK.uploadGameRoleInfo(a[420014],o)},logEnterGame:function(e,r){var o=wx.getStorageSync(a[420968]);var t=wx.getStorageSync(a[420969]);var n={};n[a[421e3]]=o,n[a[421001]]=t,n[a[421002]]=e.roleid,n[a[421003]]=e.rolelevel,n[a[421004]]=e.rolename,n[a[421005]]=e.serverid,e.roleid&&e.serverid&&(y29S05$={role_id:e.roleid,server_id:e.serverid}),this.log(a[421006],n),y290$5S&&this.updateShare(y290$5S.invite,y290$5S.invite_type,y290$5S.is_new,e.roleid,e.serverid,y290$5S.scene);o={roleLevel:e.rolelevel,roleId:e.roleid,roleName:e.rolename,serverId:e.serverid,serverName:e.servername,roleCreateTime:e.rolecreatetime};dwPlatformSDK.uploadGameRoleInfo(a[421006],o)},logRoleUpLevel:function(e,r){var o=wx.getStorageSync(a[420968]);var t=wx.getStorageSync(a[420969]);this.log(a[421007],e);var n={};n[a[421e3]]=o,n[a[421001]]=t,n[a[421002]]=e.roleid,n[a[421003]]=e.rolelevel,n[a[421004]]=e.rolename,n[a[421005]]=e.serverid,e.roleid&&e.serverid&&(y29S05$={role_id:e.roleid,server_id:e.serverid});o={roleLevel:e.rolelevel,roleId:e.roleid,roleName:e.rolename,serverId:e.serverid,serverName:e.servername,roleCreateTime:e.rolecreatetime};dwPlatformSDK.uploadGameRoleInfo(a[421007],o)},uuid:function(e,r){var o=a[421008].split("");var t,n=[];var i;if(e=e||o.length,r)for(t=0;t<r;t++)n[t]=o[0|Math.random()*e];else for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",t=0;t<36;t++)n[t]||(i=0|16*Math.random(),n[t]=o[19==t?3&i|8:i]);return n.join("")},weiduanHelper:function(){dwPlatformSDK.goCs()},getPublicData:function(){var e=wx.getSystemInfoSync();var r=wx.getStorageSync(a[420943]);var o=wx.getStorageSync(a[420944]);var t=wx.getStorageSync(a[420945]);return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,partner_label:config.partner_label,ad_code:t,uuid:r,idfv:o,dname:e.model,mac:a[421009],net_type:0==e.wifiSignal?"4G":a[421010],os_ver:e.system,sdk_ver:e.version,game_ver:config.game_ver,device:e.platform==a[421011]?1:2}},log:function(e,r){var o=this.getPublicData();for(var t in r)o[t]=r[t];console.log(a[421012]+e),console.log(o),wx.request({url:a[420962]+HOST+a[421013]+e+a[421014]+encodeURIComponent(JSON.stringify(o))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()}}}function run(e,a,r){e in y29S0$5&&y29S0$5[e](a,r)}exports.init=function(e,r){run(a[421015],e,r)},exports.login=function(e){run(a[420948],"",e)},exports.pay=function(e,r){run(a[420992],e,r)},exports.openService=function(){run(a[421016])},exports.logCreateRole=function(e,r,o,t,n){run(a[421017],{serverid:e,servername:r,roleid:o,rolename:t,rolelevel:n})},exports.logEnterGame=function(e,r,o,t,n,i,l){e={serverid:e,servername:r,roleid:o,rolename:t,rolelevel:n,rolecreatetime:i,rolepower:l?l.rolepower:0};run(a[421018],e,l?l.callback:"")},exports.logRoleUpLevel=function(e,r,o,t,n,i,l){e={serverid:e,servername:r,roleid:o,rolename:t,rolelevel:n,rolecreatetime:i,rolepower:l?l.rolepower:0};run(a[421019],e,l?l.callback:"")},exports.share=function(e){run(a[420974],{type:e})},exports.msgCheck=function(e,r){run(a[421020],e,r)},exports.downloadClient=function(){run(a[421021])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getPublicData=function(){run(a[421022])},exports.subscribeMessage=function(e,r){run(a[420957],e,r)},exports.weiduanHelper=function(){run(a[421023])};