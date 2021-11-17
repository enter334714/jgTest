var cxui = function () {
  "use strict";
  class t {
    constructor() {}
  }
  t.scale = 1.7, t.cdnHost = "https://cdn.cxgame.net";
  class i extends Laya.Sprite {
    constructor(t) {
      super(), this.path = t
    }
    get baseUrl() {
      return t.cdnHost
    }
    init() {
      Laya.version.startsWith("1.") ? this.loadImage(this.baseUrl + this.path, 0, 0, this.width, this.height, Laya.Handler.create(this, this.onImageLoaded)) : this.loadImage(this.baseUrl + this.path, Laya.Handler.create(this, this.onImageLoaded))
    }
    onImageLoaded() {}
  }
  class e extends Laya.Sprite {
    constructor() {
      super(), this.bgColor = "0xff0000", this.alpha = .1
    }
    update() {
      this.graphics.drawCircle(this.width / 2, this.height / 2, this.width / 2, this.bgColor)
    }
  }
  class s extends Laya.Sprite {
    constructor(t) {
      super(), this.path = t
    }
    init() {
      let t = new e;
      t.width = this.width, t.height = this.height, t.bgColor = "#f2f2f2", t.alpha = this.alpha, t.update(), this.addChild(t);
      let s = new i(this.path);
      s.width = this.width, s.height = this.height, s.init(), this.addChild(s)
    }
  }
  class h extends Laya.Sprite {
    constructor(i, e) {
      super(), this.scaleNumer = t.scale, this.path = i, this.itemName = e, this.init()
    }
    init() {
      this.width = 50 * this.scaleNumer, this.height = 50 * this.scaleNumer;
      let t = new i(this.path);
      t.width = 30 * this.scaleNumer, t.height = 30 * this.scaleNumer, t.pivotX = t.width / 2, t.x = this.width / 2, t.y = 4 * this.scaleNumer, t.init(), this.addChild(t);
      var e = new Laya.Label;
      e.y = 35 * this.scaleNumer, e.width = this.width, e.text = this.itemName, e.fontSize = 12 * this.scaleNumer, e.color = "#9F9F9F", e.align = Laya.Stage.ALIGN_CENTER, e.valign = Laya.Stage.ALIGN_MIDDLE, this.addChild(e)
    }
  }
  class n extends Laya.Sprite {
    constructor() {
      super(), this.color = "#f2f2f2", this.alpha = 1
    }
    update() {
      this.graphics.clear(), this.graphics.drawRect(this.height / 2, 0, this.width - this.height, this.height, this.color), this.graphics.drawPie(this.height / 2, this.height / 2, this.height / 2, 90, 270, this.color), this.graphics.drawPie(this.width - this.height / 2, this.height / 2, this.height / 2, 270, 90, this.color)
    }
  }
  class a extends Laya.Sprite {
    constructor() {
      super(), this.items = [], this.spacing = 10, this.init()
    }
    onClickItem(t) {
      this.onClickItemCallback = t;
      for (let t in this.items) {
        let i = this.items[t];

        function getItemClickFunc(t) {
          return function (i) {
            i.stopPropagation(), this.onClickItemCallback(t.itemName)
          }
        }
        i.mouseEnabled = !0, i.on(Laya.Event.CLICK, this, getItemClickFunc(i))
      }
    }
    init() {
      this.width = this.spacing, this.height = 0, this.menuBackground = new n, this.addChild(this.menuBackground);
      let t = new h("/sdk/assets/img/%E7%A4%BC%E5%8C%85.png", "VIP");
      this.vipItem = t, this.addItem(t);
      let i = new h("/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png", "公众号");
      this.gongZhongHaoItem = i, this.addItem(i);
      let e = new h("/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png", "客服");
      this.serviceItem = e, this.addItem(e);
      let s = new h("/sdk/assets/img/%E6%89%8B%E6%9C%BA.png", "手机");
      this.phoneItem = s, this.addItem(s);
      let a = new h("/sdk/assets/img/%E5%AE%9E%E5%90%8D.png", "实名");
      this.realNameItem = a, this.addItem(a);
      let o = new h("/sdk/assets/img/%E6%89%8B%E6%B8%B8.png", "升级");
      this.mobileGameItem = o, this.addItem(o)
    }
    addItem(t) {
      this.items.push(t), this.addChild(t), this.updateMenu()
    }
    updateMenu() {
      this.width = 0;
      let t = 0;
      for (let i in this.items) {
        let e = this.items[i];
        e && (e.visible && (this.width += e.width + this.spacing, e.height > this.height && (this.height = e.height), e.x = t + this.spacing, t += e.width + this.spacing))
      }
      this.width += this.spacing, this.menuBackground.width = this.width, this.menuBackground.height = this.height, this.menuBackground.update()
    }
    setConfig(t) {
      this.vipItem.visible = t.showVIP, this.gongZhongHaoItem.visible = t.showGongZhongHao, this.phoneItem.visible = t.showPhone, this.realNameItem.visible = t.showRealName, this.mobileGameItem.visible = t.showMobileGame, this.updateMenu()
    }
  }
  class o {
    constructor(t, i) {
      this.delay = t, this.callback = i
    }
    start() {
      Laya.timer.once(this.delay, this, this.callback)
    }
    stop() {
      Laya.timer.clear(this, this.callback)
    }
    reset() {
      Laya.timer.clear(this, this.callback)
    }
    restart() {
      this.start()
    }
  }
  class r {
    constructor(i, e) {
      this.moveEntryIcon = !1, this.spacing = 10, this.entryIconAlpha = .5, this.entryIconX = 0, this.entryIconY = 0, this.entryIconTouchStartX = 0, this.entryIconTouchStartY = 0, this.entryIconTouchStopX = 0, this.entryIconTouchStopY = 0, this.scaleNumer = t.scale, this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.entryIconX = i, this.entryIconY = e
    }
    addChild(t) {
      return Laya.stage.addChild(t)
    }
    init(t) {
      let i = this;
      this.hideMenuTimer = new o(4e3, function () {
        i.hideMenu()
      });
      let e = Laya.stage.width,
        h = Laya.stage.height;
      this.x = 0, this.y = 0, this.width = e, this.height = h;
      let n = new s("/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png");
      this.entryIcon = n, n.width = 50 * this.scaleNumer, n.height = 50 * this.scaleNumer, n.x = null == this.entryIconX ? 0 : this.entryIconX, n.y = null == this.entryIconY ? .25 * h : this.entryIconY, n.init(), n.alpha = this.entryIconAlpha, n.mouseEnabled = !0, n.mouseThrough = !1, this.addChild(n), n.mouseEnabled = !0, n.on(Laya.Event.MOUSE_DOWN, this, this.entryIconStartMove), n.on(Laya.Event.MOUSE_UP, this, this.entryIconStopMove), n.on(Laya.Event.CLICK, this, this.entryIconTap), this.showEntryIcon();
      let r = new a;
      this.menu = r, r.x = 100, r.y = 100, this.addChild(r), t && this.updateMenuConfig(t), this.updateMenuPosition(), this.hideMenu(), this.showEntryIcon(), this.hideMenuTimer.start(), this.menu.onClickItem(function (t) {
        i.hideMenuTimer.reset(), i.hideMenuTimer.start(), i.clickMenuItemCallback && i.clickMenuItemCallback(t)
      })
    }
    onClickMenuItem(t) {
      this.clickMenuItemCallback = t
    }
    updateMenuPosition() {
      this.entryIcon.x > this.width / 2 ? this.menu.x = this.entryIcon.x - this.menu.width - this.spacing : this.menu.x = this.entryIcon.x + this.entryIcon.width + this.spacing, this.menu.y = this.entryIcon.y
    }
    showEntryIcon() {
      this.entryIcon.alpha = 1
    }
    hideEntryIcon() {
      this.entryIcon.alpha = this.entryIconAlpha
    }
    showMenu() {
      this.menu.visible = !0, this.showEntryIcon()
    }
    hideMenu() {
      this.menu.visible = !1, this.hideEntryIcon()
    }
    entryIconTap(t) {
      if (t.stopPropagation(), this.hideMenuTimer.reset(), this.hideMenuTimer.start(), this.moveEntryIcon) {
        let t = this.entryIconTouchStopX - this.entryIconTouchStartX,
          i = this.entryIconTouchStopY - this.entryIconTouchStartY;
        t < 5 && t > -5 && i < 5 && i > -5 && (this.moveEntryIcon = !1)
      }
      if (this.moveEntryIcon) return this.moveEntryIcon = !1, void console.log("entry icon move");
      this.menu.visible ? this.hideMenu() : this.showMenu()
    }
    entryIconStartMove(t) {
      let i = new Laya.Rectangle(0, 0, this.width, this.height);
      this.entryIcon.startDrag(i, !1, 100), this.entryIcon.on(Laya.Event.MOUSE_MOVE, this, this.entryIconOnMove), this.showEntryIcon(), this.hideMenuTimer.stop();
      var e = t.touches;
      if (e && e.length > 0) {
        var s = e[0];
        this.entryIconTouchStartX = s.stageX, this.entryIconTouchStartY = s.stageY
      }
    }
    entryIconStopMove(t) {
      this.entryIcon.off(Laya.Event.MOUSE_MOVE, this, this.entryIconOnMove), this.entryIcon.x > this.width / 2 ? this.entryIcon.x = this.width - this.entryIcon.width : this.entryIcon.x = 0, this.updateMenuPosition()
    }
    entryIconOnMove(t) {
      this.updateMenuPosition(), this.moveEntryIcon = !0;
      var i = t.touches;
      if (i && i.length > 0) {
        var e = i[0];
        this.entryIconTouchStopX = e.stageX, this.entryIconTouchStopY = e.stageY
      }
    }
    updateMenuConfig(t) {
      this.menu && this.menu.setConfig(t)
    }
  }
  class c {
    constructor() {}
    init(i) {
      i.cxCdnHost && (t.cdnHost = i.cxCdnHost), this.stage = i.stage, this.uiContainer = new r(i.entryIconX, i.entryIconY)
    }
    updateConfig(t) {
      this.showConfig = t, this.uiContainer.updateMenuConfig(t)
    }
    showMenu() {
      this.uiContainer.init(this.showConfig)
    }
    onClickItem(t) {
      this.uiContainer.onClickMenuItem(t)
    }
  }
  console.log(" window.CXUI")
  return window.CXUI = c;//Laya.Browser.window.CXUI = c, c
}();
