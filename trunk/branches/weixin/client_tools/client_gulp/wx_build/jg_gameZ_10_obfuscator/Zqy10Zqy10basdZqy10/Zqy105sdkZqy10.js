var J=wx.h$;import sdk6kw from"../utils/sdkFrom6kw.com";var config={game_id:J[1796],game_pkg:J[1797],partner_label:J[1798],partner_id:J[1799],game_ver:J[1800],is_auth:!0};window.config=config;var J1GQ45J=J1G4J5Q();var HOST=J[1801];var J1GQ4J5=null;var J1G45JQ=null;function J1G4J5Q(){var n={};return{order_data:{},init:function(e,t){e=e&&e.game_ver?e.game_ver:0;console.log(J[1802]);var r=this;var a;a=wx.getStorageSync(J[1803])?0:(a=r.uuid(16,32),wx.setStorageSync(J[1803],a),1),wx.getStorageSync(J[1804])||(o=r.uuid(16,32),wx.setStorageSync(J[1804],o));var o=wx.getLaunchOptionsSync();var n=o.scene||"";a&&o.query&&o.query.ad_code&&wx.setStorageSync(J[1805],o.query.ad_code),r.log(J[1806],{install:a,scene:n}),sdk6kw.init(function(e,t){console.log(J[1807],e,t)});r=o.query&&o.query.invite?o.query.invite:"";o=o.query&&o.query.invite_type?o.query.invite_type:"";r&&(J1G45JQ={invite:r,invite_type:o,is_new:a,scene:n}),e&&this.checkGameVersion(e,function(e){t&&t(e)})},login:function(e,r){console.log(J[1808]);var a=this;n[J[259]]=typeof r==J[1008]?r:null,sdk6kw.login(function(e,t){console.log(J[1809]),1===e?a.do_login(t):r(1,{errMsg:J[1810]})})},do_login:function(e){var a=this;var t=a.getPublicData();if(t[J[282]]=e.userId,t[J[1811]]=e.nickName,t[J[260]]=e.token,t[J[1812]]=1,J1G45JQ&&typeof J1G45JQ==J[908])for(var r in J1G45JQ)t[r]=J1G45JQ[r];wx.request({url:J[1813]+HOST+J[1814],method:J[225],dataType:J[1253],header:{"content-type":J[404]},data:t,success:function(e){if(console.log(J[1815]),console.log(e),200===e.statusCode){e=e.data;if(e.state){try{wx.setStorageSync(J[1816],e.data.sdk_token),wx.setStorageSync(J[1817],e.data.user_id),wx.setStorageSync(J[1818],e.data.username),e.data.ext&&wx.setStorageSync(J[1819],e.data.ext)}catch(e){}var t={userid:e.data.user_id,account:e.data.nick_name,token:e.data.token,invite_uid:e.data.invite_uid||"",invite_nickname:e.data.invite_nickname||"",invite_head_img:e.data.invite_head_img||"",head_img:e.data.head_img||"",is_client:e.data.is_client||"0",ios_pay:e.data.ios_pay||"0"};n[J[259]]&&n[J[259]](0,t)}else n[J[259]]&&n[J[259]](1,{errMsg:e.msg});a.getShareInfo(J[1820],function(r){console.log(J[1821],r),a.logStartShare(J[1820]),sdk6kw.shareLog(function(e,t){wx.onShareAppMessage(function(){return{title:r.title,imageUrl:r.img,query:r.query+"&"+t.query}})})})}else n[J[259]]&&n[J[259]](1,{errMsg:J[1822]})}})},share:function(e){n[J[361]]=typeof callback==J[1008]?callback:null;var t=e.type||J[361];console.log(J[1823]+t);var r=this;this.getShareInfo(t,function(e){r.logStartShare(t);e={title:e.title,imageUrl:e.img,query:e.query};sdk6kw.share(e,function(e,t){console.log(J[1824],e,t)})})},logStartShare:function(e){var t=wx.getStorageSync(J[1816]);wx.request({url:J[1813]+HOST+J[1825],method:J[225],dataType:J[1253],header:{"content-type":J[404]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:t,server_id:J1GQ4J5?J1GQ4J5.server_id:"",role_id:J1GQ4J5?J1GQ4J5.role_id:"",type:e},success:function(e){}})},openService:function(){wx.openCustomerServiceConversation()},checkGameVersion:function(e,r){console.log(J[1826]);wx.getStorageSync(J[1816]);wx.request({url:J[1813]+HOST+J[1827],method:J[225],dataType:J[1253],header:{"content-type":J[404]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,game_ver:e},success:function(e){var t;console.log(J[1828]),console.log(e),200==e.statusCode&&(t=e.data).state?r&&r(t.data):r&&r({develop:0})}})},getShareInfo:function(e,t){console.log(J[1829]);var r=wx.getStorageSync(J[1816]);wx.request({url:J[1813]+HOST+J[1830],method:J[225],dataType:J[1253],header:{"content-type":J[404]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:r,type:e,server_id:J1GQ4J5?J1GQ4J5.server_id:"",role_id:J1GQ4J5?J1GQ4J5.role_id:"",no_log:1},success:function(e){console.log(J[1831]),console.log(e),200==e.statusCode?(e=e.data).state?t&&t(e.data):n[J[361]]&&n[J[361]](1,{errMsg:J[1832]+e.msg}):n[J[361]]&&n[J[361]](1,{errMsg:J[1833]})}})},updateShare:function(e,t,r,a,o,n){console.log(J[1834]);var i=wx.getStorageSync(J[1816]);wx.request({url:J[1813]+HOST+J[1835],method:J[225],dataType:J[1253],header:{"content-type":J[404]},data:{game_pkg:config.game_pkg,partner_id:config.partner_id,sdk_token:i,invite:e,invite_type:t,is_new:r,role_id:a,sever_id:o,scene:n},success:function(e){console.log(J[1836]),console.log(e)}})},msgCheck:function(e,a){console.log(J[1837]);wx.getStorageSync(J[1816]);sdk6kw.msgSecCheck({content:e,callback:(e,t)=>{console.log(J[1838],e);let r={data:{}};t.data.result.suggest==J[1839]?(r.statusCode=200,r.data.state=1):(r.statusCode=200,r.data.state=0),a&&a(r)}})},pay:function(e,t){this.startPay(e,t)},startPay:function(e,t){console.log(J[1840]),console.log(e);var a=this;n[J[343]]=typeof t==J[1008]?t:null;t=wx.getStorageSync(J[1816]);var r=wx.getStorageSync(J[1819]);var o;t||r?(o=wx.getSystemInfoSync(),e={cpbill:e.cpbill,productid:e.productid,productname:e.productname,productdesc:e.productdesc,serverid:e.serverid,servername:e.servername,roleid:e.roleid,rolename:e.rolename,rolelevel:e.rolelevel,price:e.price,extension:e.extension,sdk_token:t,session_key:r,platform:o.platform},a.order_data=e,(t=a.getPublicData())[J[1842]]=JSON.stringify(e),t[J[1812]]=1,wx.request({url:J[1813]+HOST+J[1843],method:J[225],dataType:J[1253],header:{"content-type":J[404]},data:t,success:function(e){var r;console.log(J[1844]),console.log(e),200==e.statusCode?(r=e.data).state&&r.data.pay_data?(console.log(J[1845]+JSON.stringify(r.data.pay_data)),e={cpOrder:r.data.pay_data.cpOrder,serverId:r.data.pay_data.serverId,serverName:r.data.pay_data.serverName,productId:r.data.pay_data.productId,productName:r.data.pay_data.productName,roleId:r.data.pay_data.roleId,roleName:r.data.pay_data.roleName,roleLevel:r.data.pay_data.roleLevel,notifyUrl:r.data.pay_data.notifyUrl,price:r.data.pay_data.price,extension:r.data.pay_data.extension},""==r.data.ext?sdk6kw.pay(e,function(e,t){console.log(J[1846],e,t),0===e&&n[J[343]]&&n[J[343]](1,{errMsg:r.errMsg})}):a.extDo({ext1:r.data.ext,ext2:r.data.pay_data})):n[J[343]]&&n[J[343]](1,{errMsg:r.errMsg}):n[J[259]]&&n[J[259]](1,{errMsg:J[1822]})}})):n[J[343]]&&n[J[343]](1,{errMsg:J[1841]})},extDo:function(e){wx.navigateToMiniProgram({appId:e.ext1,path:J[1847]+e.ext2.extension+J[1848]+e.ext2.price/100,extraData:{},envVersion:J[1849],success(e){}})},logCreateRole:function(e){var t=wx.getStorageSync(J[1817]);var r=wx.getStorageSync(J[1818]);var a={};a[J[1850]]=t,a[J[1851]]=r,a[J[1852]]=e.roleid,a[J[1853]]=e.rolelevel,a[J[1854]]=e.rolename,a[J[24]]=e.serverid,e.roleid&&e.serverid&&(J1GQ4J5={role_id:e.roleid,server_id:e.serverid}),this.log(J[485],a);t={roleId:e.roleid,roleName:e.rolename,serverName:e.servername,serverId:e.serverid,roleLevel:e.rolelevel,payLevel:0,createTime:Date.parse(new Date)/1e3};sdk6kw.logRole(t.createTime,t.serverId,t.serverName,t.roleId,t.roleName,t.roleLevel,t.payLevel)},logEnterGame:function(e,t){var r=wx.getStorageSync(J[1817]);var a=wx.getStorageSync(J[1818]);n[J[1855]]=typeof t==J[1008]?t:null,this.upLogAndCheckPay(J[1855],e);t={};t[J[1850]]=r,t[J[1851]]=a,t[J[1852]]=e.roleid,t[J[1853]]=e.rolelevel,t[J[1854]]=e.rolename,t[J[24]]=e.serverid,e.roleid&&e.serverid&&(J1GQ4J5={role_id:e.roleid,server_id:e.serverid}),this.log(J[1855],t),J1G45JQ&&this.updateShare(J1G45JQ.invite,J1G45JQ.invite_type,J1G45JQ.is_new,e.roleid,e.serverid,J1G45JQ.scene)},logRoleUpLevel:function(e,t){var r=wx.getStorageSync(J[1817]);var a=wx.getStorageSync(J[1818]);n[J[1856]]=typeof t==J[1008]?t:null,this.log(J[1856],e);t={};t[J[1850]]=r,t[J[1851]]=a,t[J[1852]]=e.roleid,t[J[1853]]=e.rolelevel,t[J[1854]]=e.rolename,t[J[24]]=e.serverid,e.roleid&&e.serverid&&(J1GQ4J5={role_id:e.roleid,server_id:e.serverid}),this.upLogAndCheckPay(J[1856],e)},upLogAndCheckPay:function(r,e){e={roleId:e.roleid,roleName:e.rolename,serverName:e.servername,serverId:e.serverid,roleLevel:e.rolelevel,payLevel:0,createTime:e.rolecreatetime};sdk6kw.logRole(e.createTime,e.serverId,e.serverName,e.roleId,e.roleName,e.roleLevel,e.payLevel),sdk6kw.getPayState(e,function(e,t){console.log(J[1857],t),1!==e||1===t.switch?n[r]&&n[r](0):1===t.gamePayLimitSwitch?n[r]&&n[r](2):n[r]&&n[r](1)})},uuid:function(e,t){var r=J[1858].split("");var a,o=[];var n;if(e=e||r.length,t)for(a=0;a<t;a++)o[a]=r[0|Math.random()*e];else for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",a=0;a<36;a++)o[a]||(n=0|16*Math.random(),o[a]=r[19==a?3&n|8:n]);return o.join("")},getPublicData:function(){var e=wx.getSystemInfoSync();var t=wx.getStorageSync(J[1803]);var r=wx.getStorageSync(J[1804]);var a=wx.getStorageSync(J[1805]);return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id,partner_label:config.partner_label,ad_code:a,uuid:t,idfv:r,dname:e.model,mac:J[1859],net_type:0==e.wifiSignal?"4G":J[1860],os_ver:e.system,sdk_ver:e.version,game_ver:config.game_ver,device:e.platform==J[111]?1:2}},log:function(e,t){var r=this.getPublicData();for(var a in t)r[a]=t[a];console.log(J[1861]+e),console.log(r),wx.request({url:J[1813]+HOST+J[1862]+e+J[1863]+encodeURIComponent(JSON.stringify(r))})},getDate:function(){var e=new Date;return e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()},downloadClient:function(){wx.openCustomerServiceConversation()}}}function run(e,t,r){e in J1GQ45J&&J1GQ45J[e](t,r)}exports.init=function(e,t){run(J[238],e,t)},exports.login=function(e){run(J[259],"",e)},exports.login=function(e){run(J[259],"",e)},exports.pay=function(e,t){run(J[343],e,t)},exports.openService=function(){run(J[362])},exports.logCreateRole=function(e,t,r,a,o){run(J[356],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:o})},exports.logEnterGame=function(e,t,r,a,o,n,i){run(J[358],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:o,rolecreatetime:n},i)},exports.logRoleUpLevel=function(e,t,r,a,o,n,i){run(J[360],{serverid:e,servername:t,roleid:r,rolename:a,rolelevel:o,rolecreatetime:n},i)},exports.share=function(e){run(J[361],{type:e})},exports.msgCheck=function(e,t){run(J[201],e,t)},exports.downloadClient=function(){run(J[1864])},exports.getConfig=function(){return{game_id:config.game_id,game_pkg:config.game_pkg,partner_id:config.partner_id}},exports.getPublicData=function(){run(J[1865])};