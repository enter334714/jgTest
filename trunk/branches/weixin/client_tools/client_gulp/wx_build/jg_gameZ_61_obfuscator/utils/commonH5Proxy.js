import commonBaseProxy from"./commonBaseProxy.js";import commonH5Utils from"./commonH5Utils.js";var xzSdk=require("./wxgame_sdk.js"),XingYunTFSdk=require("./tfSdk.js");export default class commonH5Proxy extends commonBaseProxy{constructor(){super(),this.appVersion="1.0",this.wxOpenId=""}init(e){this.appVersion=e.appVersion,xzSdk.init(commonH5Utils.getInstance().configInfoReturn.sdkApiHost)}tfInit(e,n){var o=commonH5Utils.getInstance().configInfoReturn.tfUrl,t=commonH5Utils.getInstance().configInfoReturn.tfAppId,s=commonH5Utils.getInstance().configInfoReturn.wxAppId,i=commonH5Utils.getInstance().configInfoReturn.companyId,a=commonH5Utils.getInstance().configInfoReturn.signKey,c=commonH5Utils.getInstance().configInfoReturn.showLog;XingYunTFSdk.is_show_log=c,XingYunTFSdk.tfInit(o,t,s,i,a,n,e,"","")}isAdUser(){var e=wx.getLaunchOptionsSync().query;return e&&e.gdt_vid||e&&e.clue_token||e&&e.channel&&e.trackid||e&&e.callback&&e.ksUnitId?1:0}login(e){var t=this,n=(this.gameSettingData.is_share=1,this.gameSettingData.is_kefu=1,this.gameSettingData.is_msgseccheck2=1,commonH5Utils.getInstance().configInfoReturn.bannerAdId),o=commonH5Utils.getInstance().configInfoReturn.videoAdId,n=(xzSdk.initSdkAd(n,o),commonH5Utils.getInstance().configInfoReturn.sdkAppId),s=commonH5Utils.getInstance();xzSdk.login(n,function(e,n){var o;1==e?(e={gameSimpleName:s.sdkInfo.gameSimpleName,sdkSimpleName:s.sdkInfo.sdkSimpleName,sdkVersionCode:s.sdkInfo.sdkVersionCode,result:"",userType:"",openId:n.openId,userName:"",token:n.token,timestamp:n.timestamp,other:n.loginKey,serverSign:"",serverState:n.serverState,wxOpenId:n.wxOpenId},t.wxOpenId=e.wxOpenId,console.log("loginCount:"+n.loginCount),n.loginCount<=2&&(o=commonH5SDK.callback,commonH5SDK.callback=function(e,n){e==commonH5SDK.code.LOGIN_SUCCESS&&(n.userFlag=t.isAdUser()),o(e,n),commonH5SDK.callback=o}),t.tfInit(e.wxOpenId,e.openId),s.loginCheck(e),xzSdk.menuShareInit("")):(window.commonH5SDK.callback(commonH5SDK.code.LOGIN_FAIL,"sdk login fail"),console.log("login fail",n))},this.appVersion)}submitData(e,n){switch(e){case window.commonH5SDK.type.enterGame:xzSdk.sdkUserCloudStorage("xizhai",n.roleLevel),xzSdk.setWxMenuShareContent("inviteId="+n.roleId),XingYunTFSdk.tfEvent(XingYunTFSdk.TFEventType.ENTER,"","");break;case window.commonH5SDK.type.createRole:XingYunTFSdk.tfEvent(XingYunTFSdk.TFEventType.CREATE_ROLE,n.roleId,"");break;case window.commonH5SDK.type.upRoleLevel:XingYunTFSdk.tfEvent(XingYunTFSdk.TFEventType.UPGRADE,n.roleId,"")}}createOrder(e){var n={device_id:XingYunTFSdk.XingYunLocalStorage.getItem("device_id"),wx_open_id:this.wxOpenId};e.other=JSON.stringify(n),console.log("payInfo",e),super.createOrder(e)}pay(e,n){XingYunTFSdk.tfEvent(XingYunTFSdk.TFEventType.POST_PAY,e.postAmount,""),e.queryId=n.queryId;n=commonH5Utils.getInstance().configInfoReturn.offerId;xzSdk.sdkPay(e,n,!1)}expansionInterface(e,n,o){switch(e){case commonH5SDK.expansion_type.qgGameShare:n&&0==n.type?xzSdk.sdkShareContent(n.data):n&&1==n.type&&xzSdk.menuShareTimeline(n.data);break;case commonH5SDK.expansion_type.showAd:var t=n.type;1==t?xzSdk.showRewardedVideoAd(function(e,n){o(1==e?{code:0,message:"success"}:0==e?{code:-1,message:"fail"}:{code:e,message:""+n})}):2==t?xzSdk.showBannerAd(n.style):-2==t&&xzSdk.hideBannerAd();break;case commonH5SDK.expansion_type.whatsNewSubscriptionsSetting:xzSdk.getWhatsNewSubscriptionsSetting(function(e,n){o(1==e?{code:0,message:"already subscribe"}:{code:-1,message:"not subscribe"})});break;case commonH5SDK.expansion_type.subscribeWhatsNew:xzSdk.requestSubscribeWhatsNew(function(e,n){o(1==e?{code:0,message:"subscribe success"}:{code:-1,message:"subscribe fail"})});break;case commonH5SDK.expansion_type.msgSecCheck2:xzSdk.msgSecCheck(n,function(e,n){o(1==e?{code:0,message:"success"}:{code:-1,message:n})});break;case commonH5SDK.expansion_type.kefu:xzSdk.sdkUserCenter();break;default:super.expansionInterface(e,n,o)}}}