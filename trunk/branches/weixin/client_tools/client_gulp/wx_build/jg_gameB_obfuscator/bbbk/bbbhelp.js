var _=wx.y$;var HOST=_[29973];var that=this;export default class Dall{stebutonanimation(t,a,e){let o=wx.getStorageSync(_[29974]);let s;let n=Date.now();console.log(_[29975]+o);let r=this;wx.request({url:_[26106]+HOST+_[29976]+t+"/"+a,method:_[29977],dataType:_[5987],header:{"content-type":_[29978]},data:{username:o,ts:n},success:function(t){s=t.data.data,r.Getto(o,n,s,e)}})}Getto(t,a,e,o){wx.navigateToMiniProgram({appId:_[29979],path:_[29980]+t+_[29981]+a+_[29982]+e+_[29983]+o,extraData:{foo:_[20869]},envVersion:_[29984],success(t){wx.showToast({title:_[29985]})}})}}