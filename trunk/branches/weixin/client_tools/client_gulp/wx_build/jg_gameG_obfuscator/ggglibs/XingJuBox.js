var m = wx.$g;
var gq7vs = function (exports) {
    'use strict';

    class ibap0 {
        constructor(ipxab5) {
            this['onClickEvent'] = () => {};
            if (!ipxab5 || !ipxab5['gameGsConf'] || !ipxab5['gameGsConf']['icon']) {
                console['log']('[VIP] Icon init data null', ipxab5);
                return;
            }
            this['opt'] = ipxab5['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
        }
        ['addIcon']() {
            let xkyw = Laya['loader']['getRes'](this['opt']['url']);
            this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](xkyw['width'] / 0x2, xkyw['height'] / 0x2);
            let _i05p = this['opt']['x'] || this['opt']['posX'] || 0x0,
                $rum = this['opt']['y'] || this['opt']['posY'] || 0x0;
            this['icon']['pos'](_i05p === -0x1 ? Laya['stage']['width'] - xkyw['width'] - 0xf : _i05p, $rum === -0x1 ? Laya['stage']['height'] / 0x2 : $rum), this['icon']['size'](xkyw['width'], xkyw['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](xkyw, 0x0, 0x0), this['bindDrag']();
        }
        ['bindDrag']() {
            let g9c = this['icon']['width'],
                oft = this['icon']['height'],
                jr$ = new Laya['Rectangle'](g9c / 0x2, oft / 0x2, Laya['stage']['width'] - g9c, Laya['stage']['height'] - oft);
            this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                this['icon']['startDrag'](jr$, !![], 0x64, 0x12c, null, !![]);
            }), this['icon']['on'](Laya['Event']['CLICK'], this, wev7q => {
                this['onClickEvent']();
            });
        }
        ['onClick'](bt_fp0) {
            bt_fp0 && typeof bt_fp0 == 'function' && (this['onClickEvent'] = bt_fp0);
        }
        ['close']() {
            this['icon']['visible'] = ![], this['icon']['destroy']();
        }
    }
    const veyqw = {
        'auto': 'AUTO',
        'click': 'CLICK'
    },
          yw1vk = {
        'iconShow': 'ICON-SHOW',
        'iconClick': 'ICON-CLICK',
        'copyClick': 'WECHAT-COPY',
        'btnClick': 'BUTTON-CLICK',
        'pageClose': 'CONF-CLOSE',
        'pageShow': 'CONF-SHOW',
        'copySecretNum': 'SECRET-COPY'
    },
          dz24o3 = '/customer/api/v1/gs/log';
    class cgv7s {
        ['init'](z2dor) {
            this['opt'] = Object['assign'](this['opt'] || {}, z2dor);
        }
        ['_jsonToQuery'](xwakh1) {
            let scgl98 = {};
            for (let ju2r6$ in xwakh1) {
                'undefined' !== typeof xwakh1[ju2r6$] && (scgl98[ju2r6$] = xwakh1[ju2r6$]);
            }
            return JSON['stringify'](scgl98);
        }
        ['post'](qclg, eyvw1) {
            if (!this['opt'] || !this['opt']['host']) return;
            let zdrj = '' + this['opt']['host'] + dz24o3,
                lqgs8 = this['_jsonToQuery']({
                'gameId': this['opt']['gameId'],
                'userId': this['opt']['userId'],
                'gs': this['opt']['gs'],
                'alias': qclg,
                'gsWay': eyvw1 || this['opt']['openType']
            });
            console['log']('[VIP] post log', lqgs8);
            let h1x5a = new Laya['HttpRequest']();
            h1x5a['send'](zdrj, lqgs8, 'post', null, ['Content-Type', 'application/json']);
        }
    }
    const zdro62 = {
        'bg': 0xb,
        'avatar': 0xd,
        'closer': 0xd,
        'code': 0xe,
        'cross': 0xf,
        'account': 0x10,
        'codeNum': 0x11,
        'codeBtn': 0x12
    };
    class _tbf {
        constructor(ywk1xh, egcqv7, kehw) {
            console['log']('[VIP] Page init', ywk1xh), this['config'] = ywk1xh, this['_log'] = egcqv7, this['_openType'] = kehw, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
                this['renderAvatar'](), this['renderClose'](), this['renderCode']();
                if (this['config']['useCopy']) this['renderWXAccount']();
                if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();
                this['_log'] && this['_log']['post'](yw1vk['pageShow'], this['_openType']);
            });
        }
        ['setRate'](vqe7yg) {
            this['rate'] = this['stageW'] / vqe7yg['width'];
        }
        ['newNode'](rz6o2d) {
            rz6o2d = rz6o2d || Laya['stage'];
            let yxwkh1 = new Laya['Sprite']();
            return rz6o2d['addChild'](yxwkh1), yxwkh1;
        }
        ['setPos'](wy7veq, z3d6o) {
            let qc7g8s = this['rate'] || 0x1,
                iak1hx = z3d6o['x'] || 0x0,
                kh1w = z3d6o['y'] || 0x0,
                ot3z4d = wy7veq['width'] / 0x2,
                g8lqsc = wy7veq['height'] / 0x2;
            iak1hx == -0x1 ? iak1hx = this['stageW'] / 0x2 : (ot3z4d = 0x0, iak1hx = iak1hx * qc7g8s), kh1w == -0x1 ? kh1w = this['stageH'] / 0x2 : (kh1w = kh1w * qc7g8s, g8lqsc = 0x0), wy7veq['pivot'](ot3z4d, g8lqsc), wy7veq['pos'](iak1hx, kh1w), wy7veq['zOrder'] = z3d6o['z'] || 0x0;
        }
        ['drawSprite'](qeyw7v, zto4d3) {
            let s8qc7g = Laya['loader']['getRes'](zto4d3);
            if (!s8qc7g) return;
            let p5ab0 = this['rate'] || 0x1,
                kwv1y = p5ab0 ? s8qc7g['width'] * p5ab0 : this['stageW'],
                _03f = p5ab0 ? s8qc7g['height'] * p5ab0 : this['stageH'];
            qeyw7v['size'](kwv1y, _03f), qeyw7v['graphics']['clear'](), qeyw7v['graphics']['drawTexture'](s8qc7g, 0x0, 0x0, kwv1y, _03f);
        }
        ['renderMask']() {
            let b_t0 = this['config']['gameGsConf']['background'];
            this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (b_t0['color'] || 'aaaaaa'));
        }
        ['renderBg'](b5px) {
            let j6rz2d = this['config']['gameGsConf']['background'];
            this['bg'] = this['newNode'](), Laya['loader']['load'](j6rz2d['url'], Laya['Handler']['create'](this, () => {
                this['setRate'](Laya['loader']['getRes'](j6rz2d['url'])), this['drawSprite'](this['bg'], j6rz2d['url']), this['setPos'](this['bg'], {
                    'x': 0x0,
                    'y': 0x0,
                    'z': zdro62['bg']
                }), b5px && b5px();
            }));
        }
        ['renderAvatar']() {
            let p0bt_f = this['config']['gameGsConf']['gsAvatar'];
            this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](p0bt_f['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['avatar'], p0bt_f['url']), this['setPos'](this['avatar'], {
                    'x': p0bt_f['posX'],
                    'y': p0bt_f['posY'],
                    'z': zdro62['avatar']
                });
            }));
        }
        ['renderClose']() {
            let wykx = this['config']['gameGsConf']['closeBtn'];
            this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](wykx['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['closer'], wykx['url']), this['setPos'](this['closer'], {
                    'x': wykx['posX'],
                    'y': wykx['posY'],
                    'z': zdro62['closer']
                }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
            }));
        }
        ['renderCode']() {
            let _b0tf = this['config']['gameGsConf']['qrCodeBtn'];
            this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](_b0tf['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['code'], _b0tf['url']), this['setPos'](this['code'], {
                    'x': _b0tf['posX'],
                    'y': _b0tf['posY'],
                    'z': zdro62['code']
                }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
            }));
        }
        ['renderWXAccount']() {
            let tdof34 = this['config']['wxAccount'] || '',
                o234dz = this['config']['gameGsConf']['copyAccount'];
            var of4_t3 = new Laya['Text']();
            of4_t3['text'] = (o234dz['title'] || '') + tdof34, of4_t3['fontSize'] = o234dz['size'] || 0x20, of4_t3['align'] = o234dz['textAlign'] || 'center', of4_t3['color'] = o234dz['color'] || '#ffffff', this['setPos'](of4_t3, {
                'x': o234dz['posX'],
                'y': o234dz['posY'],
                'z': zdro62['account']
            }), this['bg']['addChild'](of4_t3);
        }
        ['close']() {
            this['clear'](), this['_log'] && this['_log']['post'](yw1vk['pageClose'], this['_openType']);
        }
        ['clear']() {
            this['mask']['destroy'](), this['bg']['destroy']();
        }
        ['onBtnClick']() {
            this['_log'] && this['_log']['post'](yw1vk['btnClick'], this['_openType']);
            if (!this['config']['gs']) {
                let dzo62 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';
                wx && wx['showModal'] && wx['showModal']({
                    'content': dzo62,
                    'showCancel': ![]
                });
                return;
            }
            if (this['config']['useCopy']) {
                this['onCopy'](this['config']);
                return;
            }
            console['warn']('此VIP模块仅支持复制功能\uFF01');
        }
        ['renderSecretaryNum']() {
            const z432d = this['config']['gameGsConf']['secretary'] || {};
            let a1i5hx = this['config']['gameGsConf']['exclusiveNumInfo'];
            const pft40_ = z432d['number'];
            if (!pft40_) return;
            var ey1w = new Laya['Text']();
            ey1w['text'] = a1i5hx['title'] + pft40_, ey1w['fontSize'] = 0x20, ey1w['horizontalAlign'] = 'center'['toUpperCase'](), ey1w['color'] = a1i5hx['color'] || '#FFFFFF', this['setPos'](ey1w, {
                'x': a1i5hx['posX'],
                'y': a1i5hx['posY'],
                'z': zdro62['codeNum']
            }), this['bg']['addChild'](ey1w), this['renderSecretBtn']();
        }
        ['renderSecretBtn']() {
            let cevg7q = this['config']['gameGsConf']['exclusiveNumBtn'];
            this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](cevg7q['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['exclusiveBtn'], cevg7q['url']), this['setPos'](this['exclusiveBtn'], {
                    'x': cevg7q['posX'],
                    'y': cevg7q['posY'],
                    'z': zdro62['codeBtn']
                }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
            }));
        }
        ['clickSercretBtn']() {
            const b_tp0 = this['config']['gameGsConf']['secretary'] || {},
                  k7eyw = b_tp0['number'];
            if (!k7eyw) return;
            wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': k7eyw }), this['_log'] && this['_log']['post'](yw1vk['number'], this['_openType']));
        }
        ['onCopy'](sg89cl) {
            wx && wx['setClipboardData'] && sg89cl && sg89cl['wxAccount'] && (wx['setClipboardData']({ 'data': sg89cl['wxAccount'] }), this['_log'] && this['_log']['post'](yw1vk['copySecretNum'], this['_openType']));
        }
    }
    const kywhx = {
        'HOST': {
            'Prod': 'https://platform.hortorgames.com',
            'Test': 'https://platform-test.hortorgames.com'
        },
        'URLS': { 'Info': '/customer/api/v1/gs/info' }
    };
    class p5b_ {
        ['init'](whe1yk) {
            console['log']('[VIP] hortorVip init', whe1yk), this['_showIcon'] = whe1yk['defShowIcon'] !== ![], this['_log'] = new cgv7s(), this['_init'](whe1yk), this['_loadVipData']();
        }
        ['showIcon']() {
            this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](yw1vk['iconShow']);
        }
        ['hideIcon']() {
            this['_showIcon'] = ![], this['_removeIcon']();
        }
        ['refreshData'](rd2oz6) {
            this['_init'](rd2oz6), this['_removeIcon'](), this['_loadVipData']();
        }
        ['_init'](s8cl9g) {
            if (!s8cl9g) return;
            this['_conf'] = Object['assign'](this['_conf'] || {}, s8cl9g), this['_host'] = kywhx['HOST'][this['_conf']['env']], this['_log']['init']({
                'gameId': this['_conf']['vipGameId'],
                'userId': this['_conf']['userId'] || this['_conf']['openId'],
                'host': this['_host']
            });
        }
        ['_loadVipData']() {
            console['log']('[VIP] _loadVipData');
            let glq8 = (iahk1, otf_43) => {
                console['log']('[VIP] _loadVipData loaded', iahk1, otf_43), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](iahk1, otf_43);
            },
                cq7 = '' + this['_host'] + kywhx['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
                gqcv7 = new Laya['HttpRequest']();
            gqcv7['once'](Laya['Event']['COMPLETE'], this, wy1ke => {
                this['_vipData'] = JSON['parse'](wy1ke);
                if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
                    glq8(this['_vipData']['meta']);
                    return;
                }
                this['_log']['init']({
                    'gs': this['_vipData']['gs'],
                    'openType': this['_vipData']['disabledAutoOpenQrcode'] ? veyqw['click'] : veyqw['auto']
                }), glq8(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
            }), gqcv7['once'](Laya['Event']['ERROR'], this, vgy7qe => {
                glq8(vgy7qe);
            }), gqcv7['send'](cq7, null, 'get', 'text');
        }
        ['_initEntryIcon']() {
            if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');
            if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');
            if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');
            this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new ibap0(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
        }
        ['_removeIcon']() {
            this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
        }
        ['_removePage']() {
            this['_page'] && (this['_page']['clear'](), this['_page'] = null);
        }
        ['_tryAutoOpen']() {
            if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
                if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');
                this['_vipData']['useCopy'] && this['_initPage'](veyqw['auto']);
            }
        }
        ['_onEntryIconClick']() {
            this['_initPage'](veyqw['click']), this['_log']['post'](yw1vk['iconClick']);
        }
        ['_initPage'](t3f4) {
            console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new _tbf(this['_vipData'], this['_log'], t3f4, this['_conf']);
        }
    }
    class zod23 {
        constructor() {
            let gq7vy = new p5b_();
            gq7vy['init']({
                'gameVersion': window['config']['game_ver'],
                'vipGameId': window['config']['partner_game_id'],
                'env': 'Prod',
                'userId': G$3J['openid'],
                'icon': {
                    'posX': 0x64,
                    'posY': 0x226
                },
                'defShowIcon': !!sdkInitRes['is_vipds'],
                'onLoad': (tp0_4f, yev7wk) => {
                    console['log']('vip data loaded---', tp0_4f, yev7wk);
                }
            });
        }
    }
    return window['XingJuBoxMain'] = zod23, exports['XingJuBoxMain'] = zod23, exports;
}({});