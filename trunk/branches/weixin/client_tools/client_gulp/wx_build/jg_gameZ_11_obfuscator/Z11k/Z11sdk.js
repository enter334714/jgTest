var B=wx.$z;var SDKyyw=require(B[0]);var config={game_id:B[1],game_pkg:B[2],partner_id:B[3],game_ver:B[4],is_auth:!1,partner_app_id:B[5],partner_app_key:B[6]};window.config=config;var z047LYG=z04LGY7();var HOST=B[7];var z047LGY=null;var z04LYG7=null;var z04LY7G=null;var partner_user_info=null;var partner_swtich_info=null;function z04LGY7(){var o={};return{order_data:{},init:function(e,t){e=e&&e.game_ver?e.game_ver:0;console.log(B[8]);var r=this;var a;a=wx.getStorageSync(B[9])?0:(a=r.uuid(16,32),wx.setStorageSync(B[9],a),1),wx.getStorageSync(B[10])||(n=r.uuid(16,32),wx.setStorageSync(B[10],n));var n=wx.getLaunchOptionsSync();var o=n.scene||"";a&&n.query&&n.query.ad_code&&wx.setStorageSync(B[11],n.query.ad_code),r.log(B[12],{install:a,scene:o}),wx.showShareMenu();r=n.query&&n.query.invite?n.query.invite:"";n=n.query&&n.query.invite_type?n.query.invite_type:"";r&&(z04LYG7={invite:r,invite_type:n,is_new:a,scene:o}),e&&this.checkGameVersion(e,function(e){t&&t(e)})},login:function(e,t){console.log(B[13]);var r=this;o[B[14]]=typeof t==B[15]?t:null,SDKyyw.initLoginCallback=e=>{if(console.log(B[16]+JSON.stringify(e)),0==e.status)return console.log(B[17]),void t(1,{errMsg:B[18]});partner_swtich_info={showSwitchOn:e.data.showSwitchOn,switchApp:e.data.switchApp,switchContent:e.data.switchContent},partner_user_info=e.data,r.do_login(partner_user_info)},SDKyyw.init(config.partner_app_id,config.partner_app_key)},do_login:function(e){var r=this;var t=r.getPublicData();if(t[B[19]]=e?e.nick_name:"",t[B[20]]=e?e.head_img:"",z04LYG7&&typeof z04LYG7==B[21])for(var a in z04LYG7)t[a]=z04LYG7[a];t[B[22]]=e.uid,wx.request({url:B[23]+HOST+B[24],method:B[25],dataType:B[26],header:{"content-type":B[27]},data:t,success:function(e){if(console.log(B[28]+JSON.stringify(e)),200==e.statusCode){e=e.data;if(e.state){var t={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};try{wx.setStorageSync(B[29],e.data.sdk_token),wx.setStorageSync(B[30],e.data.user_id),wx.setStorageSync(B[31],e.data.username),e.data.ext&&wx.setStorageSync(B[32],e.data.ext)}catch(e){}o[B[14]]&&o[B[14]](0,t)}else o[B[14]]&&o[B[14]](1,{errMsg:e.msg});r.getShareInfo(B[33],function(e){console.log(B[34]),wx.onShareAppMessage(function(){return r.logStartShare(B[33]),{title:e.title,imageUrl:e.img,query:e.query}})})}else o[B[14]]&&o[B[14]](1,{errMsg:B[35]})}})},share:function(e){o[B[36]]=typeof callback==B[15]?callback:null;var t=e.type||B[36];console.log(B[37]+t);var r=this;this.getShareInfo(t,function(e){r.logStartShare(t),wx.shareAppMessage({title:e.title,imageUrl:e.img,query:e.query})})},logStartShare:function(e){var t=wx.getStorageSync(B[29]);wx.request({url:B[23]+HOST+B[38],method:B[25],dataType:B[26],header:{"content-type":B[27]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:t,server_id:z047LGY?z047LGY.server_id:"",role_id:z047LGY?z047LGY.role_id:"",type:e},success:function(e){}})},openService:function(){wx.openCustomerServiceConversation()},checkGameVersion:function(e,r){console.log(B[39]);wx.getStorageSync(B[29]);wx.request({url:B[23]+HOST+B[40],method:B[25],dataType:B[26],header:{"content-type":B[27]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var t;console.log(B[41]),console.log(e),200==e.statusCode&&(t=e.data).state?r&&r(t.data):r&&r({develop:0})}})},getShareInfo:function(e,t){console.log(B[42]);var r=wx.getStorageSync(B[29]);wx.request({url:B[23]+HOST+B[43],method:B[25],dataType:B[26],header:{"content-type":B[27]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,type:e,server_id:z047LGY?z047LGY.server_id:"",role_id:z047LGY?z047LGY.role_id:"",no_log:1},success:function(e){console.log(B[44]),console.log(e),200==e.statusCode?(e=e.data).state?t&&t(e.data):o[B[36]]&&o[B[36]](1,{errMsg:B[45]+e.msg}):o[B[36]]&&o[B[36]](1,{errMsg:B[46]})}})},switchEnv:function(e){e(partner_swtich_info)},switchGame:function(t){SDKyyw.cutGameCallback=e=>{t(e)},1==partner_swtich_info.showSwitchOn?SDKyyw.cutGame():t({status:0,msg:B[47]})},updateShare:function(e,t,r,a,n,o){console.log(B[48]);var i=wx.getStorageSync(B[29]);wx.request({url:B[23]+HOST+B[49],method:B[25],dataType:B[26],header:{"content-type":B[27]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:i,invite:e,invite_type:t,is_new:r,role_id:a,sever_id:n,scene:o},success:function(e){console.log(B[50]),console.log(e)}})},pay:function(e,t){var r=this;wx.checkSession({success:function(){r.startPay(e,t)},fail:function(){console.log(B[51]),r.login({},function(){r.startPay(e,t)})}})},startPay:function(e,t){console.log(B[52]),console.log(e);var r=this;o[B[53]]=typeof t==B[15]?t:null;t=wx.getStorageSync(B[29]);var a=wx.getStorageSync(B[32]);var n;t||a?(n=wx.getSystemInfoSync(),e={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:t,session_key:a,platform:n.platform},r.order_data=e,(t=r.getPublicData())[B[55]]=JSON.stringify(e),wx.request({url:B[23]+HOST+B[56],method:B[25],dataType:B[26],header:{"content-type":B[27]},data:t,success:function(t){if(console.log(B[57]+JSON.stringify(t)),200==t.statusCode){t=t.data;if(t.state)if(""==t.data.ext){SDKyyw.onPayCallback=e=>{};let e={};e.serverId=t.data.pay_data.serverId,e.serverName=t.data.pay_data.serverName,e.roleId=t.data.pay_data.roleId,e.roleName=t.data.pay_data.roleName,e.roleLevel=t.data.pay_data.roleLevel,e.gameOrderid=t.data.pay_data.orderId,e.pext=t.data.pay_data.orderId,e.money=t.data.pay_data.amount,e.productName=t.data.pay_data.productName,e.productId=t.data.pay_data.productId,console.log(B[58]+JSON.stringify(e)),SDKyyw.pay(e)}else r.extDo({ext1:t.data.ext,ext2:t.data.pay_data});else o[B[53]]&&o[B[53]](1,{errMsg:t.msg})}else o[B[14]]&&o[B[14]](1,{errMsg:B[35]})}})):o[B[53]]&&o[B[53]](1,{errMsg:B[54]})},extDo:function(e){wx.navigateToMiniProgram({appId:e.ext1,path:B[59]+e.ext2.orderId+B[60]+e.ext2.amount,extraData:{},envVersion:B[61],success(e){}})},logCreateRole:function(e){var t=wx.getStorageSync(B[30]);var r=wx.getStorageSync(B[31]);var a={};a[B[62]]=t,a[B[63]]=r,a[B[64]]=e.roleid,a[B[65]]=e.rolelevel,a[B[66]]=e.rolename,a[B[67]]=e.serverid,e.roleid&&e.serverid&&(z047LGY={role_id:e.roleid,server_id:e.serverid}),this.log(B[68],a);let n={};n.type=2,n.roleId=e.roleid,n.roleName=e.rolename,n.serverId=e.serverid,SDKyyw.pushData(n)},logEnterGame:function(e){var t=wx.getStorageSync(B[30]);var r=wx.getStorageSync(B[31]);var a={};a[B[62]]=t,a[B[63]]=r,a[B[64]]=e.roleid,a[B[65]]=e.rolelevel,a[B[66]]=e.rolename,a[B[67]]=e.serverid,e.roleid&&e.serverid&&(z047LGY={role_id:e.roleid,server_id:e.serverid}),this.log(B[69],a),z04LYG7&&this.updateShare(z04LYG7.invite,z04LYG7.invite_type,z04LYG7.is_new,e.roleid,e.serverid,z04LYG7.scene);let n={};n.type=1,n.roleId=e.roleid,n.roleName=e.rolename,n.serverId=e.serverid,SDKyyw.pushData(n);let o={};o.type=5,o.roleId=e.roleid,o.roleName=e.rolename,o.serverId=e.serverid,SDKyyw.pushData(o)},logRoleUpLevel:function(e){var t=wx.getStorageSync(B[30]);var r=wx.getStorageSync(B[31]);var a={};a[B[62]]=t,a[B[63]]=r,a[B[64]]=e.roleid,a[B[65]]=e.rolelevel,a[B[66]]=e.rolename,a[B[67]]=e.serverid,e.roleid&&e.serverid&&(z047LGY={role_id:e.roleid,server_id:e.serverid}),this.log(B[70],a);let n={};n.type=4,n.roleId=e.roleid,n.roleName=e.rolename,n.serverId=e.serverid,n.level=e.rolelevel,SDKyyw.pushData(n)},uuid:function(e,t){var r=B[71].split("");var a,n=[];var o;if(e=e||r.length,t)for(a=0;a<t;a++)n[a]=r[0|Math.random()*e];else for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",a=0;a<36;a++)n[a]||(o=0|16*Math.random(),n[a]=r[19==a?3&o|8:o]);return n.join("")},getPublicData:function(){var e=wx.getSystemInfoSync();var t=wx.getStorageSync(B[9]);var r=wx.getStorageSync(B[10]);var a=wx.getStorageSync(B[11]);return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,is_from_min:1,ad_code:a,uuid:t,idfv:r,dname:e.model,mac:B[72],net_type:0==e.wifiSignal?"4G":B[73],os_ver:e.system,sdk_ver:e.version,game_ver:config.game_ver,device:e.platform==B[74]?1:2}},log:function(e,t){var r=this.getPublicData();for(var a in t)r[a]=t[a];console.log(B[75]+e),console.log(r),wx.request({url:B[23]+HOST+B[76]+e+B[77]+encodeURIComponent(JSON.stringify(r))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()},getLaunchOptionsSync:function(e){var t=SDKyyw.getLaunchOptionsSync();e(t),console.log(B[78]+JSON.stringify(t))},msgCheck:function(e,r){SDKyyw.msgSecCheck(e,function(e){console.log(B[79]+JSON.stringify(e));let t={data:{}};0==e.errcode?(t.statusCode=200,t.data.state=1):(t.statusCode=200,t.data.state=0),r&&r(t)})},sendCode:function(e,t){console.log(B[80],e.phone),SDKyyw.getCaptchaCallback=e=>{console.log(e),1==e.status?t&&t(0,e):t&&t(1,e)},SDKyyw.getCaptcha({telephone:e.phone})},bindPhone:function(e,t){console.log(B[81],e.phone,e.code),SDKyyw.bindTelephoneCallback=e=>{console.log(B[82],e),1==e.status?t&&t(0,e):t&&t(1,e)},SDKyyw.bindTelephone({telephone:e.phone,captcha:e.code})}}}function run(e,t,r){e in z047LYG&&z047LYG[e](t,r)}exports.init=function(e,t){run(B[83],e,t)},exports.login=function(e){run(B[14],"",e)},exports.login=function(e){run(B[14],"",e)},exports.pay=function(e,t){run(B[53],e,t)},exports.openService=function(){run(B[84])},exports.logCreateRole=function(e,t,r,a,n){run(B[85],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:n})},exports.logEnterGame=function(e,t,r,a,n){run(B[86],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:n})},exports.logRoleUpLevel=function(e,t,r,a,n){run(B[87],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:n})},exports.share=function(e){run(B[36],{type:e})},exports.downloadClient=function(){run(B[88])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getLaunchOptionsSync=function(e){run(B[89],e)},exports.msgCheck=function(e,t){run(B[90],e,t)},exports.switchEnv=function(e){run(B[91],e)},exports.switchGame=function(e){run(B[92],e)},exports.sendCode=function(e,t){run(B[93],e,t)},exports.bindPhone=function(e,t){run(B[94],e,t)};