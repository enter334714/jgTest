export default class VipIcon {
    constructor(data) { 
        this.onClickEvent = () => {};
        if (!data || !data.gameGsConf || !data.gameGsConf.icon) {
            console.log('[VIP] Icon init data null', data);
            return;
        }

        this.opt = data.gameGsConf.icon;
        Laya.loader.load(this.opt.url, Laya.Handler.create(this, this.addIcon));
    }

    addIcon() {
        let texture = Laya.loader.getRes(this.opt.url);
        
        this.icon = new Laya.Sprite();
		Laya.stage.addChild(this.icon);
        this.icon.pivot(texture.width / 2, texture.height / 2);
        
        let x = this.opt.x || this.opt.posX || 0;
        let y = this.opt.y || this.opt.posY || 0;
        this.icon.pos(x === -1 ? Laya.stage.width / 2 : x, y === -1 ? Laya.stage.height / 2 : y);

        this.icon.size(texture.width, texture.height);
        this.icon.graphics.clear();
		this.icon.graphics.drawTexture(texture, 0, 0);
		
        
        this.bindDrag();
    }

    bindDrag() {
        let w = this.icon.width;
        let h = this.icon.height;

        //拖动限制区域
	    let dragRegion = new Laya.Rectangle(w / 2, h / 2, Laya.stage.width - w, Laya.stage.height - h);

        //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
		this.icon.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.icon.startDrag(dragRegion, true, 100, 300, null, true);
        });

        this.icon.on(Laya.Event.CLICK, this, (e) => {
            this.onClickEvent();
        });
    }

    onClick(cb) {
        if (cb && typeof cb == 'function') {
            this.onClickEvent = cb
        }
    }

    close() {
        this.icon.visible = false;
        this.icon.destroy();
    }

}
