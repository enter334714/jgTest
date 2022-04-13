var G = wx.$E;
var egret = window.egret;
var __reflect = undefined && undefined.__reflect || function (p, c, t) {
  p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = undefined && undefined.__extends || function __extends(t, e) {
  function r() {
    this.constructor = t;
  }
  for (var i in e) {
    e.hasOwnProperty(i) && (t[i] = e[i]);
  }
  r.prototype = e.prototype, t.prototype = new r();
};
var qxMiniFloatBall;
(function (qxMiniFloatBall) {
  var cross;
  (function (cross) {
    var display_idx_bg = 0;
    var display_idx_avatar = 1;
    var display_idx_btn_close = 2;
    var display_idx_btn_qrcode = 3;
    var display_idx_cross_ad = 4;
    var display_idx_text = 5;
    var display_idx_btn_qrcode_img = 6;
    var SECEN_WIDTH = 640;
    var SECEN_HEIGHT = 1136;
    var ButtonScene = function (_super) {
      __extends(ButtonScene, _super);

      function ButtonScene(setting) {
        var _this = _super.call(this) || this;
        _this._setting = setting;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
      }
      ButtonScene.prototype.onAddToStage = function (event) {
        var _this = this;
        this.touchEnabled = true;
        this.createBG();
        console.log("[GANK VIP] init crossSDK");
      };
      ButtonScene.prototype.onRemoveFromStage = function (event) {};
      ButtonScene.prototype.createBG = function () {
        var _this = this;
        _this.scaleX = _this.scaleY = .5;
        var Than_WIDTH = this.stage.stageWidth;
        var Than_HEIGHT = this.stage.stageHeight;
        this.getAsset(this._setting.iconpath[1], function (data) {
          var result = new egret.Bitmap();
          var texture = data;
          result.width = 560;
          result.height = 160;
          result.texture = texture;
          _this.addChildAt(result, display_idx_bg);
        }, this);
        let texts = this._setting.texts;
        for (let i = 0; i < this._setting.iconpath.length - 3; i++) {
          let iconpath = this._setting.iconpath[3 + i];
          this.getAsset(iconpath, function (data) {
            var result = new egret.Bitmap();
            var texture = data;
            result.texture = texture;
            result.x += 50 + i * 180;
            result.y = 15;
            result.scaleX = result.scaleY = .8;
            result.touchEnabled = true;
            result.name = "" + i;
            result.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onbtnQr_imgClick, _this);
            _this.addChildAt(result, display_idx_btn_close);
          }, this);
          var nameLabel = new egret.TextField();
          nameLabel.textAlign = "center";
          nameLabel.text = texts[i];
          nameLabel.textColor = 0;
          nameLabel.size = 32;
          nameLabel.y = 120;
          nameLabel.x += 60 + i * 180;
          _this.addChildAt(nameLabel, display_idx_btn_close);
        }
      };
      ButtonScene.prototype.imgLoadHandler = function (evt) {
        var bmd = evt.currentTarget.data;
        var texture = new egret.Texture();
        texture.bitmapData = bmd;
        var goose = new egret.Bitmap(texture);
        goose.x = 0;
        goose.y = 0;
        this.addChild(goose);
        this.touchEnabled = true;
      };
      ButtonScene.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
      };
      ButtonScene.prototype.onBtnCloseClick = function (event) {
        console.log("[GANK VIP] 点击关闭VIP窗口");
        this.dispatchEvent(new egret.Event(egret.Event.CLOSE));
      };
      ButtonScene.prototype.onBtnQRCodeClick = function (event) {
        console.log("[GANK VIP] 点击扫描按钮");
      };
      ButtonScene.prototype.onbtnQr_imgClick = function (event) {
        console.log("this._setting 的值：", this._setting);
        let btn = event.currentTarget;
        console.log("btn ", btn.name);
        if (this._setting) {
          let onClick = this._setting.onClick;
          if (onClick) onClick(Number(btn.name));
        }
      };
      ButtonScene.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
          compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
          var data = RES.getRes(source);
          if (data) {
            onGetRes(data);
          } else {
            RES.getResAsync(source, onGetRes, this);
          }
        } else if (source) {
          if (source.slice(-4) == "json") {
            try {
              if (typeof RES.config != "undefined") {
                var r = {
                  name: source,
                  url: source,
                  type: RES.ResourceItem.TYPE_JSON,
                  root: source
                };
                RES.config.addResourceData(r);
              }
            } catch (ex) {}
          }
          RES.getResByUrl(source, onGetRes, this, source.slice(-4) == "json" ? RES.ResourceItem.TYPE_JSON : RES.ResourceItem.TYPE_IMAGE);
        }
      };
      return ButtonScene;
    }(egret.DisplayObjectContainer);
    cross.ButtonScene = ButtonScene;
    __reflect(ButtonScene.prototype, "qxMiniFloatBall.cross.ButtonScene");
  })(cross = qxMiniFloatBall.cross || (qxMiniFloatBall.cross = {}));
})(qxMiniFloatBall || (qxMiniFloatBall = {}));
(function (qxMiniFloatBall) {
  var cross;
  (function (cross) {
    var MiniButton = function (_super) {
      __extends(MiniButton, _super);

      function MiniButton() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
      }
      MiniButton.prototype.init = function (conf) {
        console.log("初始化数据：", conf);
        this._config = conf;
        console.log("this._config[VIp图标信息]：", this._config);
        this.loadButtonData();
      };
      MiniButton.prototype.update = function () {
        console.log("update");
        if (this._vipScene) {
          if (this.rightPos) {
            this._vipScene.x = this._entryIcon.x - this._vipScene.width / 2 - 20;
          } else {
            this._vipScene.x = this._entryIcon.x + 80;
          }
          this._vipScene.y = this._entryIcon.y - 10;
        } else {
          window.clearInterval(this.timeid);
          this.timeid = null;
        }
      };
      MiniButton.prototype.onAddToStage = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        console.log("[qxMiniFloatBall VIP] stage w:", stageW, " h:", stageH);
        this.width = stageW;
        this.height = stageH;
      };
      MiniButton.prototype.initEntryIcon = function () {
        var iconUrl = [this._config.iconpath[2], this._config.iconpath[0]];
        this._entryIcon = new cross.EntryIcon(iconUrl, this);
        console.log("图标:", this._entryIcon);
        this._entryIcon.touchEnabled = true;
        this._entryIcon.visible = false;
        this._entryIcon.scaleX = this._entryIcon.scaleY = .5;
        this._entryIcon.once(egret.Event.COMPLETE, this.onEntryIconLoad, this);
        this._entryIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEntryIconClick, this);
        this.addChild(this._entryIcon);
      };
      MiniButton.prototype.onEntryIconLoad = function (event) {
        console.log("[qxMiniFloatBall VIP] icon加载完毕 w:", this._entryIcon.width, "h:", this._entryIcon.height);
        if (this._config.icon) {
          this._entryIcon.x = this._config.icon.posX;
          this._entryIcon.y = this._config.icon.posY;
        } else {
          this._entryIcon.x = this.stage.stageWidth - this._entryIcon.width - 20;
          this._entryIcon.y = this.stage.stageHeight - this._entryIcon.height - 20;
        }
        this._entryIcon.visible = true;
        this.updatePos();
      };
      MiniButton.prototype.onEntryIconClick = function (event) {
        var _this = this;
        console.log("[qxMiniFloatBall VIP] 点击qx图标");
        if (this._entryIcon.isMoveTap) {
          console.log("[qxMiniFloatBall VIP] 移动小图标");
          _this.updatePos();
          return;
        }
        console.log("[qxMiniFloatBall VIP] 点击qx图标");
        if (!this._vipScene) {
          this._vipScene = new cross.ButtonScene(this._config);
          this._vipScene.once(egret.Event.CLOSE, function () {
            _this.removeChild(_this._vipScene);
          }, this);
          this.addChild(this._vipScene);
          this.setChildIndex(this._entryIcon, 10);
          console.log("button scene ", this._vipScene.scaleY, this._vipScene.scaleX);
          this.updatePos();
        }
        this._vipScene.visible = this.openScene = !this.openScene;
        if (this.openScene) {
          let _this = this;
          // this.timeid = window.setInterval(() => {
          //   _this.update()
          // }, this, 50)
          if (window.addEventListener) {
            window.addEventListener('message', function (e) {
              if (e.data === 'refresh') {
                //检查心跳
                _this.update();
              }
              console.log("message ", e.data);
            }, false);
          }
        }
        console.log("_vipScene ", this._vipScene.width, this._vipScene.height);
      };
      MiniButton.prototype.updatePos = function () {
        let right = this._entryIcon.x > this.stage.stageWidth / 2;
        if (right) this._entryIcon.x = this.stage.stageWidth - 70;else this._entryIcon.x = 10;
        this.rightPos = right;
        this.update();
      };
      MiniButton.prototype.loadButtonData = function () {
        var _this = this;
        _this.initEntryIcon();
      };
      return MiniButton;
    }(egret.DisplayObjectContainer);
    cross.MiniButton = MiniButton;
    __reflect(MiniButton.prototype, "qxMiniFloatBall.cross.MiniButton");
  })(cross = qxMiniFloatBall.cross || (qxMiniFloatBall.cross = {}));
})(qxMiniFloatBall || (qxMiniFloatBall = {}));
var qxMiniFloatBall;
(function (qxMiniFloatBall) {
  var cross;
  (function (cross) {
    var EntryIcon = function (_super) {
      __extends(EntryIcon, _super);

      function EntryIcon(iconUrls, parent) {
        var _this = _super.call(this) || this;
        _this.isMoveTap = false;
        _this.qxparent = parent;
        _this._entryIconTouchStatus = false;
        _this._entryIconDistance = new egret.Point();
        _this._iconUrls = iconUrls;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
      }
      EntryIcon.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader();
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.once(egret.IOErrorEvent.IO_ERROR, function (e) {
          console.log("[qxMiniFloatBall VIP] 加载图标失败", e);
        }, this);
        imgLoader.crossOrigin = "anonymous";
        imgLoader.load(this._iconUrls[0]);
      };
      EntryIcon.prototype.imgLoadHandler = function (evt) {
        var bmd = evt.currentTarget.data;
        var texture = new egret.Texture();
        texture.bitmapData = bmd;
        var goose = new egret.Bitmap(texture);
        goose.x = 0;
        goose.y = 0;
        this.addChild(goose);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onEntryIconMouseDown, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEntryIconMouseUp, this);
        this.dispatchEvent(evt);
        let _this = this;
        let dipath = this._iconUrls[1];
        this.getAsset(dipath, function (data) {
          var result = new egret.Bitmap();
          var texture = data;
          result.texture = texture;
          _this.addChildAt(result);
          result.x = -20;
          result.y = -20;
        }, this);
      };
      EntryIcon.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
          compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
          var data = RES.getRes(source);
          if (data) {
            onGetRes(data);
          } else {
            RES.getResAsync(source, onGetRes, this);
          }
        } else if (source) {
          if (source.slice(-4) == "json") {
            try {
              if (typeof RES.config != "undefined") {
                var r = {
                  name: source,
                  url: source,
                  type: RES.ResourceItem.TYPE_JSON,
                  root: source
                };
                RES.config.addResourceData(r);
              }
            } catch (ex) {}
          }
          RES.getResByUrl(source, onGetRes, this, source.slice(-4) == "json" ? RES.ResourceItem.TYPE_JSON : RES.ResourceItem.TYPE_IMAGE);
        }
      };
      EntryIcon.prototype.onEntryIconMouseDown = function (evt) {
        this.isMoveTap = false;
        this._moveDownX = this.x;
        this._moveDownY = this.y;
        console.log("按下了x：", this.x);
        console.log("按下了y：", this.y);
        this._entryIconTouchStatus = true;
        this._entryIconDistance.x = evt.stageX - this.x;
        this._entryIconDistance.y = evt.stageY - this.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onEntryIconMouseMove, this);
      };
      EntryIcon.prototype.onEntryIconMouseMove = function (evt) {
        if (this._entryIconTouchStatus) {
          console.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");
          this.x = evt.stageX - this._entryIconDistance.x;
          this.y = evt.stageY - this._entryIconDistance.y;
          this.qxparent.update();
        }
      };
      EntryIcon.prototype.onEntryIconMouseUp = function (evt) {
        console.log("Mouse Up.", evt.stageX);
        this.qxparent.update();
        if (this._entryIconTouchStatus) {
          var disX = this._moveDownX >= this.x ? this._moveDownX - this.x : this.x - this._moveDownX;
          var disY = this._moveDownY >= this.y ? this._moveDownY - this.y : this.y - this._moveDownY;
          if (disX > 10 || disY > 10) {
            this.isMoveTap = true;
            console.log("移动 ", disX, disY);
          }
        }
        this._entryIconTouchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onEntryIconMouseMove, this);
      };
      return EntryIcon;
    }(egret.DisplayObjectContainer);
    cross.EntryIcon = EntryIcon;
    __reflect(EntryIcon.prototype, "qxMiniFloatBall.cross.EntryIcon");
  })(cross = qxMiniFloatBall.cross || (qxMiniFloatBall.cross = {}));
})(qxMiniFloatBall || (qxMiniFloatBall = {}));
if (typeof module !== "undefined") {
  module.exports = qxMiniFloatBall;
  if (typeof window !== "undefined") {
    window.qxMiniFloatBall = qxMiniFloatBall;
  }
} else if (typeof window !== "undefined") {
  window.qxMiniFloatBall = qxMiniFloatBall;
}