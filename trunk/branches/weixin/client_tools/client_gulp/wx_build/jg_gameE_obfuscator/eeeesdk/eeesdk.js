var b=wx.$e;var SDKyyw=require(b[69834]);var config={game_id:b[69835],game_pkg:b[69836],partner_id:b[69837],game_ver:b[69838],is_auth:!1,partner_app_id:b[69839],partner_app_key:b[69840]};window.config=config;var e1IU01G=e1I0G1U();var HOST=b[69841];var e1IU0G1=null;var e1I01GU=null;var e1I01UG=null;var partner_user_info=null;var partner_swtich_info=null;function e1I0G1U(){var o={};return{order_data:{},init:function(e,t){e=e&&e.game_ver?e.game_ver:0;console.log(b[69842]);var r=this;var a;a=wx.getStorageSync(b[69843])?0:(a=r.uuid(16,32),wx.setStorageSync(b[69843],a),1),wx.getStorageSync(b[69844])||(n=r.uuid(16,32),wx.setStorageSync(b[69844],n));var n=wx.getLaunchOptionsSync();var o=n.scene||"";a&&n.query&&n.query.ad_code&&wx.setStorageSync(b[69845],n.query.ad_code),r.log(b[40282],{install:a,scene:o}),wx.showShareMenu();r=n.query&&n.query.invite?n.query.invite:"";n=n.query&&n.query.invite_type?n.query.invite_type:"";r&&(e1I01GU={invite:r,invite_type:n,is_new:a,scene:o}),e&&this.checkGameVersion(e,function(e){t&&t(e)})},login:function(e,t){console.log(b[69846]);var r=this;o[b[69847]]=typeof t==b[69748]?t:null,SDKyyw.initLoginCallback=e=>{if(console.log(b[69848]+JSON.stringify(e)),0==e.status)return console.log(b[69849]),void t(1,{errMsg:b[69850]});partner_swtich_info={showSwitchOn:e.data.showSwitchOn,switchApp:e.data.switchApp,switchContent:e.data.switchContent},partner_user_info=e.data,r.do_login(partner_user_info)},SDKyyw.init(config.partner_app_id,config.partner_app_key)},do_login:function(e){var r=this;var t=r.getPublicData();if(t[b[69851]]=e?e.nick_name:"",t[b[69852]]=e?e.head_img:"",e1I01GU&&typeof e1I01GU==b[40277])for(var a in e1I01GU)t[a]=e1I01GU[a];t[b[69853]]=e.uid,wx.request({url:b[65978]+HOST+b[69854],method:b[69855],dataType:b[45948],header:{"content-type":b[69856]},data:t,success:function(e){if(console.log(b[69857]+JSON.stringify(e)),200==e.statusCode){e=e.data;if(e.state){var t={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};try{wx.setStorageSync(b[69858],e.data.sdk_token),wx.setStorageSync(b[69859],e.data.user_id),wx.setStorageSync(b[69860],e.data.username),e.data.ext&&wx.setStorageSync(b[69861],e.data.ext)}catch(e){}o[b[69847]]&&o[b[69847]](0,t)}else o[b[69847]]&&o[b[69847]](1,{errMsg:e.msg});r.getShareInfo(b[69862],function(e){console.log(b[69863]),wx.onShareAppMessage(function(){return r.logStartShare(b[69862]),{title:e.title,imageUrl:e.img,query:e.query}})})}else o[b[69847]]&&o[b[69847]](1,{errMsg:b[69864]})}})},share:function(e){o[b[69865]]=typeof callback==b[69748]?callback:null;var t=e.type||b[69865];console.log(b[69866]+t);var r=this;this.getShareInfo(t,function(e){r.logStartShare(t),wx.shareAppMessage({title:e.title,imageUrl:e.img,query:e.query})})},logStartShare:function(e){var t=wx.getStorageSync(b[69858]);wx.request({url:b[65978]+HOST+b[69867],method:b[69855],dataType:b[45948],header:{"content-type":b[69856]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:t,server_id:e1IU0G1?e1IU0G1.server_id:"",role_id:e1IU0G1?e1IU0G1.role_id:"",type:e},success:function(e){}})},openService:function(){wx.openCustomerServiceConversation()},checkGameVersion:function(e,r){console.log(b[69868]);wx.getStorageSync(b[69858]);wx.request({url:b[65978]+HOST+b[69869],method:b[69855],dataType:b[45948],header:{"content-type":b[69856]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var t;console.log(b[69870]),console.log(e),200==e.statusCode&&(t=e.data).state?r&&r(t.data):r&&r({develop:0})}})},getShareInfo:function(e,t){console.log(b[69871]);var r=wx.getStorageSync(b[69858]);wx.request({url:b[65978]+HOST+b[69872],method:b[69855],dataType:b[45948],header:{"content-type":b[69856]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,type:e,server_id:e1IU0G1?e1IU0G1.server_id:"",role_id:e1IU0G1?e1IU0G1.role_id:"",no_log:1},success:function(e){console.log(b[69873]),console.log(e),200==e.statusCode?(e=e.data).state?t&&t(e.data):o[b[69865]]&&o[b[69865]](1,{errMsg:b[69874]+e.msg}):o[b[69865]]&&o[b[69865]](1,{errMsg:b[69875]})}})},switchEnv:function(e){e(partner_swtich_info)},switchGame:function(t){SDKyyw.cutGameCallback=e=>{t(e)},1==partner_swtich_info.showSwitchOn?SDKyyw.cutGame():t({status:0,msg:b[69876]})},updateShare:function(e,t,r,a,n,o){console.log(b[69877]);var i=wx.getStorageSync(b[69858]);wx.request({url:b[65978]+HOST+b[69878],method:b[69855],dataType:b[45948],header:{"content-type":b[69856]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:i,invite:e,invite_type:t,is_new:r,role_id:a,sever_id:n,scene:o},success:function(e){console.log(b[69879]),console.log(e)}})},pay:function(e,t){var r=this;wx.checkSession({success:function(){r.startPay(e,t)},fail:function(){console.log(b[69880]),r.login({},function(){r.startPay(e,t)})}})},startPay:function(e,t){console.log(b[69881]),console.log(e);var r=this;o[b[69882]]=typeof t==b[69748]?t:null;t=wx.getStorageSync(b[69858]);var a=wx.getStorageSync(b[69861]);var n;t||a?(n=wx.getSystemInfoSync(),e={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:t,session_key:a,platform:n.platform},r.order_data=e,(t=r.getPublicData())[b[69884]]=JSON.stringify(e),wx.request({url:b[65978]+HOST+b[69885],method:b[69855],dataType:b[45948],header:{"content-type":b[69856]},data:t,success:function(t){if(console.log(b[69886]+JSON.stringify(t)),200==t.statusCode){t=t.data;if(t.state)if(""==t.data.ext){SDKyyw.onPayCallback=e=>{};let e={};e.serverId=t.data.pay_data.serverId,e.serverName=t.data.pay_data.serverName,e.roleId=t.data.pay_data.roleId,e.roleName=t.data.pay_data.roleName,e.roleLevel=t.data.pay_data.roleLevel,e.gameOrderid=t.data.pay_data.orderId,e.pext=t.data.pay_data.orderId,e.money=t.data.pay_data.amount,e.productName=t.data.pay_data.productName,e.productId=t.data.pay_data.productId,console.log(b[69887]+JSON.stringify(e)),SDKyyw.pay(e)}else r.extDo({ext1:t.data.ext,ext2:t.data.pay_data});else o[b[69882]]&&o[b[69882]](1,{errMsg:t.msg})}else o[b[69847]]&&o[b[69847]](1,{errMsg:b[69864]})}})):o[b[69882]]&&o[b[69882]](1,{errMsg:b[69883]})},extDo:function(e){wx.navigateToMiniProgram({appId:e.ext1,path:b[69888]+e.ext2.orderId+b[69889]+e.ext2.amount,extraData:{},envVersion:b[69890],success(e){}})},logCreateRole:function(e){var t=wx.getStorageSync(b[69859]);var r=wx.getStorageSync(b[69860]);var a={};a[b[69891]]=t,a[b[69892]]=r,a[b[51013]]=e.roleid,a[b[69893]]=e.rolelevel,a[b[69894]]=e.rolename,a[b[51688]]=e.serverid,e.roleid&&e.serverid&&(e1IU0G1={role_id:e.roleid,server_id:e.serverid}),this.log(b[40006],a);let n={};n.type=2,n.roleId=e.roleid,n.roleName=e.rolename,n.serverId=e.serverid,SDKyyw.pushData(n)},logEnterGame:function(e){var t=wx.getStorageSync(b[69859]);var r=wx.getStorageSync(b[69860]);var a={};a[b[69891]]=t,a[b[69892]]=r,a[b[51013]]=e.roleid,a[b[69893]]=e.rolelevel,a[b[69894]]=e.rolename,a[b[51688]]=e.serverid,e.roleid&&e.serverid&&(e1IU0G1={role_id:e.roleid,server_id:e.serverid}),this.log(b[45830],a),e1I01GU&&this.updateShare(e1I01GU.invite,e1I01GU.invite_type,e1I01GU.is_new,e.roleid,e.serverid,e1I01GU.scene);let n={};n.type=1,n.roleId=e.roleid,n.roleName=e.rolename,n.serverId=e.serverid,SDKyyw.pushData(n);let o={};o.type=5,o.roleId=e.roleid,o.roleName=e.rolename,o.serverId=e.serverid,SDKyyw.pushData(o)},logRoleUpLevel:function(e){var t=wx.getStorageSync(b[69859]);var r=wx.getStorageSync(b[69860]);var a={};a[b[69891]]=t,a[b[69892]]=r,a[b[51013]]=e.roleid,a[b[69893]]=e.rolelevel,a[b[69894]]=e.rolename,a[b[51688]]=e.serverid,e.roleid&&e.serverid&&(e1IU0G1={role_id:e.roleid,server_id:e.serverid}),this.log(b[69895],a);let n={};n.type=4,n.roleId=e.roleid,n.roleName=e.rolename,n.serverId=e.serverid,n.level=e.rolelevel,SDKyyw.pushData(n)},uuid:function(e,t){var r=b[69896].split("");var a,n=[];var o;if(e=e||r.length,t)for(a=0;a<t;a++)n[a]=r[0|Math.random()*e];else for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",a=0;a<36;a++)n[a]||(o=0|16*Math.random(),n[a]=r[19==a?3&o|8:o]);return n.join("")},getPublicData:function(){var e=wx.getSystemInfoSync();var t=wx.getStorageSync(b[69843]);var r=wx.getStorageSync(b[69844]);var a=wx.getStorageSync(b[69845]);return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,is_from_min:1,ad_code:a,uuid:t,idfv:r,dname:e.model,mac:b[69897],net_type:0==e.wifiSignal?"4G":b[69898],os_ver:e.system,sdk_ver:e.version,game_ver:config.game_ver,device:e.platform==b[69899]?1:2}},log:function(e,t){var r=this.getPublicData();for(var a in t)r[a]=t[a];console.log(b[69900]+e),console.log(r),wx.request({url:b[65978]+HOST+b[69901]+e+b[69902]+encodeURIComponent(JSON.stringify(r))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()},getLaunchOptionsSync:function(e){var t=SDKyyw.getLaunchOptionsSync();e(t),console.log(b[69903]+JSON.stringify(t))},msgCheck:function(e,r){SDKyyw.msgSecCheck(e,function(e){console.log(b[69904]+JSON.stringify(e));let t={data:{}};0==e.errcode?(t.statusCode=200,t.data.state=1):(t.statusCode=200,t.data.state=0),r&&r(t)})},sendCode:function(e,t){console.log(b[69905],e.phone),SDKyyw.getCaptchaCallback=e=>{console.log(e),1==e.status?t&&t(0,e):t&&t(1,e)},SDKyyw.getCaptcha({telephone:e.phone})},bindPhone:function(e,t){console.log(b[69906],e.phone,e.code),SDKyyw.bindTelephoneCallback=e=>{console.log(b[69907],e),1==e.status?t&&t(0,e):t&&t(1,e)},SDKyyw.bindTelephone({telephone:e.phone,captcha:e.code})}}}function run(e,t,r){e in e1IU01G&&e1IU01G[e](t,r)}exports.init=function(e,t){run(b[40363],e,t)},exports.login=function(e){run(b[69847],"",e)},exports.login=function(e){run(b[69847],"",e)},exports.pay=function(e,t){run(b[69882],e,t)},exports.openService=function(){run(b[65430])},exports.logCreateRole=function(e,t,r,a,n){run(b[69908],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:n})},exports.logEnterGame=function(e,t,r,a,n){run(b[69909],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:n})},exports.logRoleUpLevel=function(e,t,r,a,n){run(b[69910],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:n})},exports.share=function(e){run(b[69865],{type:e})},exports.downloadClient=function(){run(b[69911])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getLaunchOptionsSync=function(e){run(b[69912],e)},exports.msgCheck=function(e,t){run(b[52380],e,t)},exports.switchEnv=function(e){run(b[69913],e)},exports.switchGame=function(e){run(b[69914],e)},exports.weiduanHelper=function(e,t){run(b[63948],e,t)},exports.sendCode=function(e,t){run(b[69915],e,t)},exports.bindPhone=function(e,t){run(b[51818],e,t)};