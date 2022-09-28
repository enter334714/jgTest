var _=wx.y$;class JmCore{constructor(){this.ad_url="https://cyapi.7xp9.com";this.url="https://cysdk.7xp9.com";this.appId="108211";//替换参数
this.package_campaign="l2l93t6n";//替换参数
this.instance=null;this.access_token=null;this.appkey="c3fbb12815bc662afb3636bd73d16b3a";//替换参数
this.open_id="";this.user_info=null;// 玩家账号信息
this.user_role_info=null;// 玩家角色信息
this.version=20220426;}static getInstance(){if(!this.instance){this.instance=new JmCore();return this.instance;}return this.instance;}getAccessToken(){if(!this.access_token){var value=wx.getStorageSync('jm_access_token');if(value){this.access_token=value;}else{return"";}}return this.access_token;}getTime(){return Date.parse(new Date())/1000;}getSign(data={},time){return MD5(`access_token=${this.getAccessToken()}&time=${time}&context=${JSON.stringify(data)}&appkey=${this.appkey}`.toLocaleLowerCase());}getAdInfo(){let args=wx.getEnterOptionsSync();let adInfo={package_campaign:'',campaign_id:''};if(args.query){for(const k in args.query){adInfo[k]=args.query[k];}}if(!adInfo['package_campaign']){adInfo['package_campaign']=this.package_campaign;}if(!adInfo['campaign_id']){adInfo['campaign_id']=this.package_campaign;}console.log('广告信息：'+JSON.stringify(adInfo));return adInfo;}_request(url,data,success){let time=this.getTime();let request_url=this.url+"/v1"+url;wx.request({url:request_url,method:"POST",data:{access_token:this.getAccessToken(),sign:this.getSign(data,time),context:JSON.stringify(data),time:time},header:{// 'content-type': 'application/json' // JSON
'content-type':'application/x-www-form-urlencoded'// 默认值
},success(res){console.log(res.data);if(res.data.code==0){success&&success(res.data);}else if(res.data.code===44309){wx.showModal({title:'提示',content:res.data.message,success:function(){wx.exitMiniProgram({success:res=>{// console.log("已退出")
}});}});}else{wx.showToast({title:`请求错误! ${res.data.code||-1}`,icon:'fail',duration:2000});}},fail(){wx.showToast({title:'服务器错误',icon:'fail',duration:2000});}});}_payRequest(url,data,success){let time=this.getTime();wx.request({url:url,method:"POST",data:data,header:{// 'content-type': 'application/json' // JSON
'content-type':'application/x-www-form-urlencoded'// 默认值
},success(res){console.log(res.data);if(res.data.code==0){success&&success(res.data);}else if(res.data.code===44309){wx.showModal({title:'提示',content:res.data.message,success:function(){wx.exitMiniProgram({success:res=>{// console.log("已退出")
}});}});}else{wx.showToast({title:`请求错误! ${res.data.code||-1}`,icon:'fail',duration:2000});}},fail(){wx.showToast({title:'服务器错误',icon:'fail',duration:2000});}});}// 登录
login(callback){let _this=this;wx.login({success(res){console.log('login res',res);if(res.code){//发起网络请求
var loginInfo=_this.getAdInfo();loginInfo.code=res.code;_this._request("/user/channel_login",{login_data:JSON.stringify(loginInfo)},data=>{if(data.code==0){_this.open_id=data.data.channel_user_info.openid;_this.user_info=data.data;callback&&callback({code:0,msg:"登录成功",data:{uname:data.data.uname,openid:data.data.openid,game_token:data.data.game_token,wx_openid:data.data.channel_user_info.openid,show_url_after_login:data.data.show_url_after_login}});}else{callback&&callback({code:1,msg:"登录失败",data:{}});}});}else{console.log('登录失败！'+res.errMsg);}}});}msgCheck(content,scene,callback){this._payRequest(this.url+"/pay_back/msgCheck",{content:content,package_campaign:this.package_campaign,openid:this.open_id,scene:scene},res=>{console.log('msgCheck res',res);var check_res={suggest:"risky",label:21000};if(res.code==0){var check_result=JSON.parse(res.data);check_res=check_result.result;}callback&&callback(check_res);});}// 获取余额
getBalance(openid,callback){let _this=this;_this._request("/channel/getInfo",{openid:openid},data=>{console.log(data);callback&&callback(data);});}/**
     * @param {*} params
     * @param params.openid 角色openid
     * @param params.cp_order_id
     * @param params.product_label
     * @param params.order_name 商品订单名
     * @param params.amount 订单金额，分
     * @param params.role_id 角色id，
     * @param role_name 角色名称
     * @param level 等级
     * @param gender 性别
     * @param server_no 区服
     * @param server_name 区服名称,中文名称
     * @param balance 剩余元宝 （不是必填）
     * @param power 战力（不是必填）
     * @param vip_level VIP等级 （不是必填）
     * @param ext 扩展 （不是必填）
     */createOrder(params={},sendMessageTitle="",callback){let _this=this;var SystemInfo=wx.getSystemInfoSync();var platform='android';if(SystemInfo){platform=SystemInfo.platform;}params.platform=platform;console.log(params);_this._request("/od/weChatMiniGameCreate",params,res=>{console.log(res);if(res.code===0){if(res.data.pay_type=='wx_official_pay'){_this.getBalance(_this.open_id,function(balance_res){var cost=params.amount/100*res.data.wx_official_pay_info.rate;var balance=0;if(balance_res.data.errcode==0){balance=balance_res.data.balance;}if(balance<cost){//拉起官方支付
wx.requestMidasPayment({mode:res.data.wx_official_pay_info.mode,env:parseInt(res.data.wx_official_pay_info.env),offerId:res.data.wx_official_pay_info.offerId,currencyType:res.data.wx_official_pay_info.currencyType,platform:'android',buyQuantity:res.data.wx_official_pay_info.buyQuantity,zoneId:parseInt(res.data.wx_official_pay_info.zoneId),success:function(success_res){console.log(success_res);_this.goMidasPay(res.data.order_id,_this.open_id,callback);},fail:function(fail_res){console.log(fail_res);}});}else{_this.goMidasPay(res.data.order_id,_this.open_id,callback);}});}else{//切支付
wx.openCustomerServiceConversation({sendMessageImg:'https://pics7.baidu.com/feed/a8773912b31bb051fb37de05c78e64b24bede083.jpeg?token=f02d22e51399a01c6c239e6247cec44f',showMessageCard:true,sendMessageTitle:sendMessageTitle||"充值订单:"+res.data.order_id,success:function(){console.log('ok');}});}callback&&callback(res);}});}goMidasPay(order_id,open_id,callback){this._payRequest(this.url+"/pay_back/NotifyOfficialWechatMiniGame",{order_id:order_id,open_id:open_id},data=>{console.log(data);callback&&callback(data);});}/**
     *  角色上报（创角、入服、升级）
     * @param {Object} roleInfo 角色信息
     * @param roleInfo.role_id 角色信息
     * @param roleInfo.role_name 角色信息
     * @param roleInfo.level 等级
     * @param roleInfo.gender 角色性别
     * @param roleInfo.server_no 区服标识
     * @param roleInfo.server_name 区服名称,中文名称
     * @param balance 剩余元宝 （不是必填）
     * @param power 战力（不是必填）
     * @param vip_level VIP等级 （不是必填）
     * @param ext 扩展 （不是必填）
     * @param {String} type 1创角色、2入服、3升级（创角色后直接进入服务器，必须分开报送两条）
     * @param {Function} callback
     */roleReport(roleInfo={},type,callback){roleInfo.type=type;this.user_role_info=roleInfo;this._request("/role/report",roleInfo,data=>{console.log(data);callback&&callback(data);});}isTransfer(role_id='',callback){let app_id=this.appId;if(!role_id){role_id=this.user_role_info.role_id;}let SystemInfo=wx.getSystemInfoSync();let platform='android';if(SystemInfo){platform=SystemInfo.platform;}var params={uname:this.user_info.uname,role_id:role_id,app_id:app_id,os:platform};var request_url=this.url+'/transfer_client/judge';wx.request({url:request_url,method:"POST",data:params,header:{'content-type':'application/x-www-form-urlencoded'// 默认值
},success(res){console.log('transfer_client_judge',res);console.log('transfer_client_judge',res.data.data);callback&&callback(res.data.data);},fail(){callback&&callback(0);}});}transferClient(){let app_id=this.appId;let campaign_id=this.package_campaign;let uname=this.user_info.uname;let role_id=this.user_role_info.role_id;let SystemInfo=wx.getSystemInfoSync();let platform='android';if(SystemInfo){platform=SystemInfo.platform;}let path='param=vip'+'&app_id='+app_id+'&campaign_id='+campaign_id+'&uname='+uname+'&role_id='+role_id+'&os='+platform;console.log('path',path);console.log('userInfo',this.user_info);wx.openCustomerServiceConversation({sendMessageImg:'https://s.5tc5.com/balance_shop/material/6356e7c8cce5de87dfb9afee4b311561.jpg',showMessageCard:true,sendMessageTitle:'绑定有礼',sendMessagePath:path,success:function(){console.log('ok');}});}init(callback){console.log('verson：'+this.version);wx.showShareMenu({withShareTicket:true,menus:['shareAppMessage','shareTimeline']});// 初始化，
this._request("/app/init",{appid:this.appId,campaign_id:this.package_campaign},res=>{// 初始化成功
this.access_token=res.data.access_token;wx.setStorage({key:"jm_access_token",data:res.data.access_token});if(res.code==0){callback&&callback({code:0,msg:"初始化成功",data:{}});}else{callback&&callback({code:1,msg:"初始化失败",data:{}});}});}}module.exports=JmCore.getInstance();function MD5(instring){var hexcase=0;/* hex output format. 0 - lowercase; 1 - uppercase        */var b64pad="";/* base-64 pad character. "=" for strict RFC compliance   *//*
     * These are the functions you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */function hex_md5(s){return rstr2hex(rstr_md5(str2rstr_utf8(s)));}function b64_md5(s){return rstr2b64(rstr_md5(str2rstr_utf8(s)));}function any_md5(s,e){return rstr2any(rstr_md5(str2rstr_utf8(s)),e);}function hex_hmac_md5(k,d){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d)));}function b64_hmac_md5(k,d){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d)));}function any_hmac_md5(k,d,e){return rstr2any(rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d)),e);}/*
     * Perform a simple self-test to see if the VM is working
     */function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72";}/*
     * Calculate the MD5 of a raw string
     */function rstr_md5(s){return binl2rstr(binl_md5(rstr2binl(s),s.length*8));}/*
     * Calculate the HMAC-MD5, of a key and some data (raw strings)
     */function rstr_hmac_md5(key,data){var bkey=rstr2binl(key);if(bkey.length>16)bkey=binl_md5(bkey,key.length*8);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}var hash=binl_md5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binl_md5(opad.concat(hash),512+128));}/*
     * Convert a raw string to a hex string
     */function rstr2hex(input){try{hexcase;}catch(e){hexcase=0;}var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var output="";var x;for(var i=0;i<input.length;i++){x=input.charCodeAt(i);output+=hex_tab.charAt(x>>>4&0x0F)+hex_tab.charAt(x&0x0F);}return output;}/*
     * Convert a raw string to a base-64 string
     */function rstr2b64(input){try{b64pad;}catch(e){b64pad='';}var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var output="";var len=input.length;for(var i=0;i<len;i+=3){var triplet=input.charCodeAt(i)<<16|(i+1<len?input.charCodeAt(i+1)<<8:0)|(i+2<len?input.charCodeAt(i+2):0);for(var j=0;j<4;j++){if(i*8+j*6>input.length*8)output+=b64pad;else output+=tab.charAt(triplet>>>6*(3-j)&0x3F);}}return output;}/*
     * Convert a raw string to an arbitrary string encoding
     */function rstr2any(input,encoding){var divisor=encoding.length;var i,j,q,x,quotient;/* Convert to an array of 16-bit big-endian values, forming the dividend */var dividend=Array(Math.ceil(input.length/2));for(i=0;i<dividend.length;i++){dividend[i]=input.charCodeAt(i*2)<<8|input.charCodeAt(i*2+1);}/*
         * Repeatedly perform a long division. The binary array forms the dividend,
         * the length of the encoding is the divisor. Once computed, the quotient
         * forms the dividend for the next step. All remainders are stored for later
         * use.
         */var full_length=Math.ceil(input.length*8/(Math.log(encoding.length)/Math.log(2)));var remainders=Array(full_length);for(j=0;j<full_length;j++){quotient=Array();x=0;for(i=0;i<dividend.length;i++){x=(x<<16)+dividend[i];q=Math.floor(x/divisor);x-=q*divisor;if(quotient.length>0||q>0)quotient[quotient.length]=q;}remainders[j]=x;dividend=quotient;}/* Convert the remainders to the output string */var output="";for(i=remainders.length-1;i>=0;i--)output+=encoding.charAt(remainders[i]);return output;}/*
     * Encode a string as utf-8.
     * For efficiency, this assumes the input is valid utf-16.
     */function str2rstr_utf8(input){var output="";var i=-1;var x,y;while(++i<input.length){/* Decode utf-16 surrogate pairs */x=input.charCodeAt(i);y=i+1<input.length?input.charCodeAt(i+1):0;if(0xD800<=x&&x<=0xDBFF&&0xDC00<=y&&y<=0xDFFF){x=0x10000+((x&0x03FF)<<10)+(y&0x03FF);i++;}/* Encode output as utf-8 */if(x<=0x7F)output+=String.fromCharCode(x);else if(x<=0x7FF)output+=String.fromCharCode(0xC0|x>>>6&0x1F,0x80|x&0x3F);else if(x<=0xFFFF)output+=String.fromCharCode(0xE0|x>>>12&0x0F,0x80|x>>>6&0x3F,0x80|x&0x3F);else if(x<=0x1FFFFF)output+=String.fromCharCode(0xF0|x>>>18&0x07,0x80|x>>>12&0x3F,0x80|x>>>6&0x3F,0x80|x&0x3F);}return output;}/*
     * Encode a string as utf-16
     */function str2rstr_utf16le(input){var output="";for(var i=0;i<input.length;i++)output+=String.fromCharCode(input.charCodeAt(i)&0xFF,input.charCodeAt(i)>>>8&0xFF);return output;}function str2rstr_utf16be(input){var output="";for(var i=0;i<input.length;i++)output+=String.fromCharCode(input.charCodeAt(i)>>>8&0xFF,input.charCodeAt(i)&0xFF);return output;}/*
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */function rstr2binl(input){var output=Array(input.length>>2);for(var i=0;i<output.length;i++)output[i]=0;for(var i=0;i<input.length*8;i+=8)output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<i%32;return output;}/*
     * Convert an array of little-endian words to a string
     */function binl2rstr(input){var output="";for(var i=0;i<input.length*32;i+=8)output+=String.fromCharCode(input[i>>5]>>>i%32&0xFF);return output;}/*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */function binl_md5(x,len){/* append padding */x[len>>5]|=0x80<<len%32;x[(len+64>>>9<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}return Array(a,b,c,d);}/*
     * These functions implement the four basic operations the algorithm uses.
     */function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}function md5_ff(a,b,c,d,x,s,t){return md5_cmn(b&c|~b&d,a,b,x,s,t);}function md5_gg(a,b,c,d,x,s,t){return md5_cmn(b&d|c&~d,a,b,x,s,t);}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|~d),a,b,x,s,t);}/*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;}/*
     * Bitwise rotate a 32-bit number to the left.
     */function bit_rol(num,cnt){return num<<cnt|num>>>32-cnt;}return hex_md5(instring);}/**
 * 创建订单参数类
 */class OrderParam{/* 用户openid */openid;/* cp订单号 */cp_order_id;// 苹果内购标识
product_label;// 商品订单名
order_name;// 订单金额，分
amount;// 角色id，
role_id;// 角色名称
role_name;level;gender;server_no;server_name;balance;power;vip_level;ext;}