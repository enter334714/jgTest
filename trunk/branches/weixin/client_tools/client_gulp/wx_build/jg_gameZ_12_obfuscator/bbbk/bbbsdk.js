var _=wx.y$;import sdkInfo from"../utils/kycommon.js";var config={game_id:256,game_pkg:_[29968],partner_label:_[29969],partner_id:_[29970],game_ver:_[29971],is_auth:!1,partner_game_id:142,partner_ad_id:13318};window.config=config;var p$ADEBC=p$AECBD();var HOST=_[29972];var p$ADECB=null;var p$AEBCD=null;var user_invite_by_activity=null;var sysInfo=wx.getSystemInfoSync();var platform=sysInfo.platform;var partner_user_info=null;var sdk=null;function p$AECBD(){var a={};return{order_data:{},init:function(e,t){e=e&&e.game_ver?e.game_ver:0;console.log(_[29973]);var r=this;var n;n=wx.getStorageSync(_[29974])?0:(n=r.uuid(16,32),wx.setStorageSync(_[29974],n),1),wx.getStorageSync(_[29975])||(i=r.uuid(16,32),wx.setStorageSync(_[29975],i));var i=wx.getLaunchOptionsSync();var a=i.scene||"";console.log(_[29976],JSON.stringify(i)),r.log(_[762],{install:n,scene:a}),wx.showShareMenu();r=i.query&&i.query.invite?i.query.invite:"";var o=i.query&&i.query.invite_type?i.query.invite_type:"";var s=i.query&&i.query.cp_activity_id?i.query.cp_activity_id:"";s||(o=(s=i.query&&i.query.shareMessageToFriendScene?i.query.shareMessageToFriendScene:"")?_[29977]:""),s&&(user_invite_by_activity={invite:r,invite_type:o,is_new:n,scene:a,cp_activity_id:s}),r&&(p$AEBCD={invite:r,invite_type:o,is_new:n,scene:a}),e&&(config.game_ver=e,this.checkGameVersion(e,function(e){t&&t(e)}))},login:function(e,t){console.log(_[29978]);a[_[29979]]=typeof t==_[90]?t:null;var r=this;sdk=new sdkInfo({gameId:config.partner_game_id,adid:config.partner_ad_id},function(e,t){switch(e){case _[836]:console.log(_[29980]+JSON.stringify(t));break;case _[29979]:console.log(_[29981]+JSON.stringify(t)),r.do_login(t)}})},do_login:function(e){var r=this;var t=r.getPublicData();if(t[_[29982]]=JSON.stringify(e),p$AEBCD&&typeof p$AEBCD==_[4])for(var n in p$AEBCD)t[n]=p$AEBCD[n];wx.request({url:_[26523]+HOST+_[29983],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:t,success:function(e){if(console.log(_[29986]+JSON.stringify(e)),200==e.statusCode){e=e.data;if(e.state){try{wx.setStorageSync(_[29987],e.data.sdk_token),wx.setStorageSync(_[29988],e.data.user_id),wx.setStorageSync(_[29989],e.data.username),e.data.ext&&wx.setStorageSync(_[29990],e.data.ext)}catch(e){}var t={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};a[_[29979]]&&a[_[29979]](0,t)}else a[_[29979]]&&a[_[29979]](1,{errMsg:e.msg});r.getShareInfo(_[29991],function(e){console.log(_[29992]),wx.onShareAppMessage(function(){return r.logStartShare(_[29991]),{title:e.title,imageUrl:e.img,query:e.query}})})}else a[_[29979]]&&a[_[29979]](1,{errMsg:_[29993]})}})},share:function(e){a[_[29994]]=typeof callback==_[90]?callback:null;var t=e.type||_[29994];var r=e.cp_activity_id||"";console.log(_[29995]+t);var n=this;this.getShareInfo(t,function(e){""!=r&&""!=e.query&&(e.query=e.query+_[29996]+r),n.logStartShare(t),wx.shareAppMessage({title:e.title,imageUrl:e.img,query:e.query})})},logStartShare:function(e){var t=wx.getStorageSync(_[29987]);wx.request({url:_[26523]+HOST+_[29997],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:t,server_id:p$ADECB?p$ADECB.server_id:"",role_id:p$ADECB?p$ADECB.role_id:"",type:e},success:function(e){}})},openService:function(){wx.openCustomerServiceConversation()},checkGameVersion:function(e,r){console.log(_[29998]);wx.getStorageSync(_[29987]);wx.request({url:_[26523]+HOST+_[29999],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var t;console.log(_[3e4]),console.log(e),200==e.statusCode&&(t=e.data).state?r&&r(t.data):r&&r({develop:0})}})},getShareInfo:function(e,t){console.log(_[30001]);var r=wx.getStorageSync(_[29987]);wx.request({url:_[26523]+HOST+_[30002],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,type:e,server_id:p$ADECB?p$ADECB.server_id:"",role_id:p$ADECB?p$ADECB.role_id:"",no_log:1},success:function(e){console.log(_[30003]+JSON.stringify(e)),200==e.statusCode?(e=e.data).state?t&&t(e.data):a[_[29994]]&&a[_[29994]](1,{errMsg:_[30004]+e.msg}):a[_[29994]]&&a[_[29994]](1,{errMsg:_[30005]})}})},updateShare:function(e,t,r,n,i,a){console.log(_[30006]);var o=wx.getStorageSync(_[29987]);wx.request({url:_[26523]+HOST+_[30007],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:o,invite:e,invite_type:t,is_new:r,role_id:n,sever_id:i,scene:a},success:function(e){console.log(_[30008]+JSON.stringify(e))}})},msgCheck:function(e,n){sdk.MsgSecCheck({msg:e},function(e,t){let r={data:{}};switch(e){case _[30009]:console.log(t),r.statusCode=200,r.data.state=1;break;case _[30010]:console.log(t),r.statusCode=0,r.data.state=0}n&&n(r)})},pay:function(e,t){this.startPay(e,t)},startPay:function(e,t){console.log(_[30011]),console.log(e);var r=this;a[_[30012]]=typeof t==_[90]?t:null;t=wx.getStorageSync(_[29987]);var n=wx.getStorageSync(_[29990]);var i;t?(i=wx.getSystemInfoSync(),t={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:t,session_key:n,platform:i.platform,ApplePrdId:e.ApplePrdId},r.order_data=t,(n=r.getPublicData())[_[30014]]=JSON.stringify(t),wx.request({url:_[26523]+HOST+_[30015],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:n,success:function(e){var t;console.log(_[30016]+JSON.stringify(e)),200==e.statusCode?(e=e.data).state?""==e.data.ext?sdk.Pay(e.data.pay_data):((t=e.data.pay_data)[_[28061]]=r.order_data[_[28061]],r.extDo({ext1:e.data.ext,ext2:t})):a[_[30012]]&&a[_[30012]](1,{errMsg:e.msg}):a[_[29979]]&&a[_[29979]](1,{errMsg:_[29993]})}})):a[_[30012]]&&a[_[30012]](1,{errMsg:_[30013]})},logCreateRole:function(e){var t=wx.getStorageSync(_[29988]);var r=wx.getStorageSync(_[29989]);var n={};var i,a,o;n[_[30017]]=t,n[_[30018]]=r,n[_[11490]]=e.roleid,n[_[30019]]=e.rolelevel,n[_[30020]]=e.rolename,n[_[12165]]=e.serverid,e.roleid&&e.serverid&&(p$ADECB={role_id:e.roleid,server_id:e.serverid}),this.log(_[5],n),sdk.Role({roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,serverid:e.serverid,servername:e.servername,type:_[5]}),user_invite_by_activity&&(r=user_invite_by_activity.scene,n=user_invite_by_activity.is_new,i=user_invite_by_activity.invite,a=user_invite_by_activity&&user_invite_by_activity.invite_type?user_invite_by_activity.invite_type:"",o=user_invite_by_activity.cp_activity_id,t={uid:t,role_id:e.roleid,role_name:e.rolename,server_id:e.serverid,server_name:e.servername,game_id:config.game_id,partner_id:config.partner_id,game_pkg:config.game_pkg,scene:r,is_new:n,invite_code:i,invite_type:a,cp_activity_id:o},wx.request({url:_[26523]+HOST+_[30021],method:_[29984],dataType:_[219],header:{"content-type":_[29985]},data:t,success:function(e){console.log(_[30022]+JSON.stringify(e))}}))},extDo:function(e){wx.navigateToMiniProgram({appId:e.ext1,path:_[30023]+e.ext2.extradata+_[30024]+e.ext2.price,extraData:{},envVersion:_[30025],success(e){}})},logEnterGame:function(e){var t=wx.getStorageSync(_[29988]);var r=wx.getStorageSync(_[29989]);var n={};n[_[30017]]=t,n[_[30018]]=r,n[_[11490]]=e.roleid,n[_[30019]]=e.rolelevel,n[_[30020]]=e.rolename,n[_[12165]]=e.serverid,e.roleid&&e.serverid&&(p$ADECB={role_id:e.roleid,server_id:e.serverid}),this.log(_[6317],n),sdk.Role({roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,serverid:e.serverid,servername:e.servername,type:_[29979]}),p$AEBCD&&this.updateShare(p$AEBCD.invite,p$AEBCD.invite_type,p$AEBCD.is_new,e.roleid,e.serverid,p$AEBCD.scene)},logRoleUpLevel:function(e){var t=wx.getStorageSync(_[29988]);var r=wx.getStorageSync(_[29989]);var n={};n[_[30017]]=t,n[_[30018]]=r,n[_[11490]]=e.roleid,n[_[30019]]=e.rolelevel,n[_[30020]]=e.rolename,n[_[12165]]=e.serverid,e.roleid&&e.serverid&&(p$ADECB={role_id:e.roleid,server_id:e.serverid}),this.log(_[30026],n)},uuid:function(e,t){var r=_[30027].split("");var n,i=[];var a;if(e=e||r.length,t)for(n=0;n<t;n++)i[n]=r[0|Math.random()*e];else for(i[8]=i[13]=i[18]=i[23]="-",i[14]="4",n=0;n<36;n++)i[n]||(a=0|16*Math.random(),i[n]=r[19==n?3&a|8:a]);return i.join("")},getPublicData:function(){var e=wx.getSystemInfoSync();var t=wx.getStorageSync(_[29974]);var r=wx.getStorageSync(_[29975]);return{is_from_min:1,game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,ad_code:"",uuid:t,idfv:r,dname:e.model,mac:_[30028],net_type:0==e.wifiSignal?"4G":_[30029],os_ver:e.system,sdk_ver:e.version,game_ver:config.game_ver,device:e.platform==_[30030]?1:2}},log:function(e,t){var r=this.getPublicData();for(var n in t)r[n]=t[n];console.log(_[30031]+e),console.log(_[30032]+r),wx.request({url:_[26523]+HOST+_[30033]+e+_[30034]+encodeURIComponent(JSON.stringify(r))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()},weiduanHelper:function(){sdk.Download()},setMessageToFriendQuery:function(e,t){e=e.activity_id;e=wx.setMessageToFriendQuery({shareMessageToFriendScene:e});t&&t(e)},getFriendShareInfo:function(t){this.getShareInfo(_[29977],function(e){t&&t({title:e.title,img:e.img})})}}}function run(e,t,r){e in p$ADEBC&&p$ADEBC[e](t,r)}exports.init=function(e,t){run(_[836],e,t)},exports.login=function(e){run(_[29979],"",e)},exports.pay=function(e,t){run(_[30012],e,t)},exports.openService=function(){run(_[25981])},exports.logCreateRole=function(e,t,r,n,i){run(_[30035],{serverid:e,servername:t,roleid:r,rolename:n,rolelevel:i})},exports.logEnterGame=function(e,t,r,n,i){run(_[30036],{serverid:e,servername:t,roleid:r,rolename:n,rolelevel:i})},exports.logRoleUpLevel=function(e,t,r,n,i){run(_[30037],{serverid:e,servername:t,roleid:r,rolename:n,rolelevel:i})},exports.share=function(e,t){t=t&&t.activity_id?t.activity_id:"";run(_[29994],{type:e,cp_activity_id:t})},exports.msgCheck=function(e,t){run(_[12854],e,t)},exports.downloadClient=function(){run(_[30038])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getPublicData=function(){run(_[30039])},exports.weiduanHelper=function(){run(_[24498])},exports.setMessageToFriendQuery=function(e,t){run(_[30040],e,t)},exports.getFriendShareInfo=function(e){run(_[30041],e)};