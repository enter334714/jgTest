"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}}(),_gamedataentity=require("./gamedataentity"),_gamedataentity2=_interopRequireDefault(_gamedataentity),_queue=require("./queue"),_queue2=_interopRequireDefault(_queue),_localbuffer=require("./localbuffer"),_localbuffer2=_interopRequireDefault(_localbuffer),_common=require("./common"),_common2=_interopRequireDefault(_common),_constant=require("./constant"),_constant2=_interopRequireDefault(_constant),_baseparameter=require("./baseparameter"),_baseparameter2=_interopRequireDefault(_baseparameter);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Key_Role_Upgrade="xiyou:role:upgrade",INTERVAL_TIME=6e4,instance=void 0,timerQueue=void 0,GameDatas=function(){function e(){if(_classCallCheck(this,e),instance)return instance;(instance=this).queue=new _queue2.default,this.constant=new _constant2.default,this.baseParams=new _baseparameter2.default,this.localBuffer=new _localbuffer2.default,timerQueue=setInterval(function(){instance.autoCheckQueue()},INTERVAL_TIME)}return _createClass(e,[{key:"report",value:function(e){for(var t in this.gameDatas=new _gamedataentity2.default,e)this.gameDatas[t]=e[t];var a=this.gameDatas.parameter;this.setLocalStorage(a)}},{key:"setLocalStorage",value:function(e){"3"==e.type?(console.log("role upgrade ignore"),this.localBuffer.setStorage(Key_Role_Upgrade,e)):this.submitToServer(e)}},{key:"submitToServer",value:function(t){Object.assign(t,this.baseParams.getQueryParam());var e=t.url||this.constant.Url.data_report2;wx.request({url:e,header:{"content-type":"application/x-www-form-urlencoded"},method:"post",data:t,success:function(e){_common2.default.xylog("data report success"),instance.queue.dequeue()},fail:function(e){_common2.default.xylog("data report fail#",e),instance.queue.enqueue(t)}})}},{key:"autoCheckQueue",value:function(){var e;instance.queue.size()<1||(_common2.default.xylog("find queue data , size:"+instance.queue.size()),e=instance.queue.front(),instance.submitToServer(e),_common2.default.xylog("submit a queue data to server"))}}]),e}();exports.default=GameDatas;