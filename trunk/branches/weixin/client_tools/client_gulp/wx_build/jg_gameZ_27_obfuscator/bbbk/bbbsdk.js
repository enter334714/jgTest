var _=wx.y$;let sdk=require(_[29887]);var config={game_id:256,game_pkg:_[29888],partner_label:_[29889],partner_id:_[29890],game_ver:_[29891],is_auth:!1};window.config=config;var p$6G0MT=p$60TMG();var HOST=_[29892];var p$6G0TM=null;var p$60MTG=null;var sysInfo=wx.getSystemInfoSync();var platform=sysInfo.platform;var partner_user_info=null;var sdkInitOk=!1;function p$60TMG(){var o={};return{order_data:{},init:function(e,r){e=e&&e.game_ver?e.game_ver:0;console.log(_[29893]);var t=this;var n;n=wx.getStorageSync(_[29894])?0:(n=t.uuid(16,32),wx.setStorageSync(_[29894],n),1),wx.getStorageSync(_[29895])||(o=t.uuid(16,32),wx.setStorageSync(_[29895],o));var o=wx.getLaunchOptionsSync();var a=o.scene||"";n&&o.query&&o.query.ad_code&&wx.setStorageSync(_[29896],o.query.ad_code),t.log(_[282],{install:n,scene:a});t=o.query&&o.query.invite?o.query.invite:"";o=o.query&&o.query.invite_type?o.query.invite_type:"";t&&(p$60MTG={invite:t,invite_type:o,is_new:n,scene:a}),e&&this.checkGameVersion(e,function(e){r&&r(e)})},login:function(e,r){console.log(_[29897]),o[_[29898]]=typeof r==_[29899]?r:null;var t=this;sdk.initLoginCallback=e=>{0==e.status?(t.do_login(e.data),console.log(_[29900]+JSON.stringify(e.data))):(console.warn(_[29901]),o[_[29898]]&&o[_[29898]](1,{errMsg:_[29901]}))},sdk.init()},do_login:function(e){var t=this;var r=t.getPublicData();if(r[_[29902]]=JSON.stringify(e),p$60MTG&&typeof p$60MTG==_[277])for(var n in p$60MTG)r[n]=p$60MTG[n];wx.request({url:_[26267]+HOST+_[29903],method:_[29904],dataType:_[6065],header:{"content-type":_[29905]},data:r,success:function(e){if(console.log(_[29906]+JSON.stringify(e)),200==e.statusCode){e=e.data;if(e.state){try{wx.setStorageSync(_[29907],e.data.sdk_token),wx.setStorageSync(_[29908],e.data.user_id),wx.setStorageSync(_[29909],e.data.username),e.data.ext&&wx.setStorageSync(_[29910],e.data.ext)}catch(e){}var r={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};o[_[29898]]&&o[_[29898]](0,r)}else o[_[29898]]&&o[_[29898]](1,{errMsg:e.msg});t.getShareInfo(_[29911],function(e){console.log(_[29912]),t.logStartShare(_[29911]),wx.onShareAppMessage(function(){return t.logStartShare(_[29911]),{title:e.title,imageUrl:e.img,query:e.query}})})}else o[_[29898]]&&o[_[29898]](1,{errMsg:_[29913]})}})},share:function(e){o[_[29914]]=typeof callback==_[29899]?callback:null;var r=e.type||_[29914];console.log(_[29915]+r);var t=this;this.getShareInfo(r,function(e){t.logStartShare(r),wx.shareAppMessage({title:e.title,imageUrl:e.img,query:e.query})})},logStartShare:function(e){var r=wx.getStorageSync(_[29907]);wx.request({url:_[26267]+HOST+_[29916],method:_[29904],dataType:_[6065],header:{"content-type":_[29905]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,server_id:p$6G0TM?p$6G0TM.server_id:"",role_id:p$6G0TM?p$6G0TM.role_id:"",type:e},success:function(e){}})},openService:function(){wx.openCustomerServiceConversation()},checkGameVersion:function(e,t){console.log(_[29917]);wx.getStorageSync(_[29907]);wx.request({url:_[26267]+HOST+_[29918],method:_[29904],dataType:_[6065],header:{"content-type":_[29905]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var r;console.log(_[29919]+JSON.stringify(e)),200==e.statusCode&&(r=e.data).state?t&&t(r.data):t&&t({develop:0})}})},getShareInfo:function(e,r){console.log(_[29920]);var t=wx.getStorageSync(_[29907]);wx.request({url:_[26267]+HOST+_[29921],method:_[29904],dataType:_[6065],header:{"content-type":_[29905]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:t,type:e,server_id:p$6G0TM?p$6G0TM.server_id:"",role_id:p$6G0TM?p$6G0TM.role_id:"",no_log:1},success:function(e){console.log(_[29922]),console.log(e),200==e.statusCode?(e=e.data).state?r&&r(e.data):o[_[29914]]&&o[_[29914]](1,{errMsg:_[29923]+e.msg}):o[_[29914]]&&o[_[29914]](1,{errMsg:_[29924]})}})},updateShare:function(e,r,t,n,o,a){console.log(_[29925]);var i=wx.getStorageSync(_[29907]);wx.request({url:_[26267]+HOST+_[29926],method:_[29904],dataType:_[6065],header:{"content-type":_[29905]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:i,invite:e,invite_type:r,is_new:t,role_id:n,sever_id:o,scene:a},success:function(e){console.log(_[29927]+JSON.stringify(e))}})},msgCheck:function(e,r){console.log(_[29928]+e);let t={data:{}};sdk.msgSecCheck({version:2,scene:1,content:e},function(e){0!=e.status?(t.statusCode=200,t.data.state=1):(t.statusCode=200,t.data.state=0),r&&r(t)})},pay:function(e,r){this.startPay(e,r)},startPay:function(e,r){console.log(_[29929]+JSON.stringify(e));var t=this;o[_[29930]]=typeof r==_[29899]?r:null;r=wx.getStorageSync(_[29907]);var n=wx.getStorageSync(_[29910]);r?(e={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:r,session_key:n,platform:platform},t.order_data=e,(r=t.getPublicData())[_[29932]]=JSON.stringify(e),wx.request({url:_[26267]+HOST+_[29933],method:_[29904],dataType:_[6065],header:{"content-type":_[29905]},data:r,success:function(e){console.log(_[29934]+JSON.stringify(e)),200==e.statusCode?(e=e.data).state?(console.log(_[29935]+JSON.stringify(e.data.pay_data)),""==e.data.ext?(sdk.onPayCallback=e=>{console.log(_[29936],e),0!=e.status&&o[_[29930]]&&o[_[29930]](1,{errMsg:e.msg})},sdk.sdkPay(e.data.pay_data)):t.extDo({ext1:e.data.ext,ext2:e.data.pay_data})):o[_[29930]]&&o[_[29930]](1,{errMsg:e.msg}):o[_[29898]]&&o[_[29898]](1,{errMsg:_[29913]})}})):o[_[29930]]&&o[_[29930]](1,{errMsg:_[29931]})},extDo:function(e){wx.navigateToMiniProgram({appId:e.ext1,path:_[29937]+e.ext2.cp_order_id+_[29938]+e.ext2.amount/100,extraData:{},envVersion:_[29939],success(e){}})},logCreateRole:function(e){var r=wx.getStorageSync(_[29908]);var t=wx.getStorageSync(_[29909]);var n={};n[_[29940]]=r,n[_[29941]]=t,n[_[11136]]=e.roleid,n[_[29942]]=e.rolelevel,n[_[29943]]=e.rolename,n[_[11813]]=e.serverid,e.roleid&&e.serverid&&(p$6G0TM={role_id:e.roleid,server_id:e.serverid}),this.log(_[6],n);r={type:1,roleId:e.roleid,roleName:e.rolename,roleLevel:e.rolelevel,serverId:e.serverid,vipLevel:"0"};sdk.sdkRole(r)},logEnterGame:function(e){var r=wx.getStorageSync(_[29908]);var t=wx.getStorageSync(_[29909]);var n={};n[_[29940]]=r,n[_[29941]]=t,n[_[11136]]=e.roleid,n[_[29942]]=e.rolelevel,n[_[29943]]=e.rolename,n[_[11813]]=e.serverid,e.roleid&&e.serverid&&(p$6G0TM={role_id:e.roleid,server_id:e.serverid}),this.log(_[5947],n),p$60MTG&&this.updateShare(p$60MTG.invite,p$60MTG.invite_type,p$60MTG.is_new,e.roleid,e.serverid,p$60MTG.scene);r={type:3,roleId:e.roleid,roleName:e.rolename,roleLevel:e.rolelevel,serverId:e.serverid,vipLevel:"0"};sdk.sdkRole(r)},logRoleUpLevel:function(e){var r=wx.getStorageSync(_[29908]);var t=wx.getStorageSync(_[29909]);var n={};n[_[29940]]=r,n[_[29941]]=t,n[_[11136]]=e.roleid,n[_[29942]]=e.rolelevel,n[_[29943]]=e.rolename,n[_[11813]]=e.serverid,e.roleid&&e.serverid&&(p$6G0TM={role_id:e.roleid,server_id:e.serverid}),this.log(_[29944],n);r={type:2,roleId:e.roleid,roleName:e.rolename,roleLevel:e.rolelevel,serverId:e.serverid,vipLevel:"0"};sdk.sdkRole(r)},uuid:function(e,r){var t=_[29945].split("");var n,o=[];var a;if(e=e||t.length,r)for(n=0;n<r;n++)o[n]=t[0|Math.random()*e];else for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",n=0;n<36;n++)o[n]||(a=0|16*Math.random(),o[n]=t[19==n?3&a|8:a]);return o.join("")},getPublicData:function(){var e=wx.getStorageSync(_[29894]);var r=wx.getStorageSync(_[29895]);var t=wx.getStorageSync(_[29896]);return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,partner_label:config.partner_label,ad_code:t,uuid:e,idfv:r,mac:_[29946],is_from_min:1,dname:sysInfo.model,net_type:0==sysInfo.wifiSignal?"4G":_[29947],os_ver:sysInfo.system,sdk_ver:sysInfo.version,game_ver:config.game_ver,device:sysInfo.platform==_[29948]?1:2}},log:function(e,r){var t=this.getPublicData();for(var n in r)t[n]=r[n];console.log(_[29949]+e),console.log(t),wx.request({url:_[26267]+HOST+_[29950]+e+_[29951]+encodeURIComponent(JSON.stringify(t))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()},weiduanHelper:function(){sdk.sdkTransferApp()},sendUrl:function(){sdk.sdkTransferApp()},setMessageToFriendQuery:function(e,r){e=e.activity_id;r(wx.setMessageToFriendQuery({shareMessageToFriendScene:e}))},setLoadingCmp:function(){},sendCode:function(e,r){console.log(_[29952],e.phone)},bindPhone:function(e,r){console.log(_[29953],e.phone,e.code)},subscribeMessage:function(e,r){console.log(_[29954]+e),o[_[29955]]=typeof r==_[29899]?r:null,wx.requestSubscribeMessage({tmplIds:e,success(e){console.log(_[29956]),console.log(e),o[_[29955]]&&o[_[29955]](e)},fail(e){console.log(_[29957]),console.log(e),o[_[29955]]&&o[_[29955]](e)}})}}}function run(e,r,t){e in p$6G0MT&&p$6G0MT[e](r,t)}exports.init=function(e,r){run(_[363],e,r)},exports.login=function(e){run(_[29898],"",e)},exports.login=function(e){run(_[29898],"",e)},exports.pay=function(e,r){run(_[29930],e,r)},exports.openService=function(){run(_[24342])},exports.logCreateRole=function(e,r,t,n,o){run(_[29958],{serverid:e,servername:r,roleid:t,rolename:n,rolelevel:o})},exports.logEnterGame=function(e,r,t,n,o){run(_[29959],{serverid:e,servername:r,roleid:t,rolename:n,rolelevel:o})},exports.logRoleUpLevel=function(e,r,t,n,o){run(_[29960],{serverid:e,servername:r,roleid:t,rolename:n,rolelevel:o})},exports.share=function(e){run(_[29914],{type:e})},exports.msgCheck=function(e,r){run(_[12518],e,r)},exports.downloadClient=function(){run(_[29961])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getPublicData=function(){run(_[29962])},exports.weiduanHelper=function(){run(_[24232])},exports.sendUrl=function(){run(_[29963])},exports.setMessageToFriendQuery=function(e,r){run(_[29964],e,r)},exports.setLoadingCmp=function(){run(_[29965])},exports.sendCode=function(e,r){run(_[29966],e,r)},exports.bindPhone=function(e,r){run(_[11943],e,r)},exports.subscribeMessage=function(e,r){run(_[29955],e,r)};