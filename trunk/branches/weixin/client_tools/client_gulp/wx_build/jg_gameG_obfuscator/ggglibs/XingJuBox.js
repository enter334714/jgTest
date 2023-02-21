var m = wx.$g;
var gecq = function (exports) {
    'use strict';

    class tbf_p0 {
        constructor(ibaxp) {
            this['onClickEvent'] = () => {};
            if (!ibaxp || !ibaxp['gameGsConf'] || !ibaxp['gameGsConf']['icon']) {
                console['log']('[VIP] Icon init data null', ibaxp);
                return;
            }
            this['opt'] = ibaxp['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
        }
        ['addIcon']() {
            let cvgq7e = Laya['loader']['getRes'](this['opt']['url']);
            this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](cvgq7e['width'] / 0x2, cvgq7e['height'] / 0x2);
            let vewyq = this['opt']['x'] || this['opt']['posX'] || 0x0,
                _bpi50 = this['opt']['y'] || this['opt']['posY'] || 0x0;
            this['icon']['pos'](vewyq === -0x1 ? Laya['stage']['width'] - cvgq7e['width'] - 0xf : vewyq, _bpi50 === -0x1 ? Laya['stage']['height'] / 0x2 : _bpi50), this['icon']['size'](cvgq7e['width'], cvgq7e['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](cvgq7e, 0x0, 0x0), this['bindDrag']();
        }
        ['bindDrag']() {
            let vgc7s = this['icon']['width'],
                zod326 = this['icon']['height'],
                v7keyw = new Laya['Rectangle'](vgc7s / 0x2, zod326 / 0x2, Laya['stage']['width'] - vgc7s, Laya['stage']['height'] - zod326);
            this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                this['icon']['startDrag'](v7keyw, !![], 0x64, 0x12c, null, !![]);
            }), this['icon']['on'](Laya['Event']['CLICK'], this, vqyge7 => {
                this['onClickEvent']();
            });
        }
        ['onClick'](ot4zd3) {
            ot4zd3 && typeof ot4zd3 == 'function' && (this['onClickEvent'] = ot4zd3);
        }
        ['close']() {
            this['icon']['visible'] = ![], this['icon']['destroy']();
        }
    }
    const vwqe = {
        'auto': 'AUTO',
        'click': 'CLICK'
    },
          qyewv = {
        'iconShow': 'ICON-SHOW',
        'iconClick': 'ICON-CLICK',
        'copyClick': 'WECHAT-COPY',
        'btnClick': 'BUTTON-CLICK',
        'pageClose': 'CONF-CLOSE',
        'pageShow': 'CONF-SHOW',
        'copySecretNum': 'SECRET-COPY'
    },
          h1kixa = '/customer/api/v1/gs/log';
    class axi5b {
        ['init'](o326z) {
            this['opt'] = Object['assign'](this['opt'] || {}, o326z);
        }
        ['_jsonToQuery'](p5f0) {
            let cgqls = {};
            for (let drz62o in p5f0) {
                'undefined' !== typeof p5f0[drz62o] && (cgqls[drz62o] = p5f0[drz62o]);
            }
            return JSON['stringify'](cgqls);
        }
        ['post'](jzd26r, r2ju$6) {
            if (!this['opt'] || !this['opt']['host']) return;
            let p5_0f = '' + this['opt']['host'] + h1kixa,
                f_3to4 = this['_jsonToQuery']({
                'gameId': this['opt']['gameId'],
                'userId': this['opt']['userId'],
                'gs': this['opt']['gs'],
                'alias': jzd26r,
                'gsWay': r2ju$6 || this['opt']['openType']
            });
            console['log']('[VIP] post log', f_3to4);
            let gq7svc = new Laya['HttpRequest']();
            gq7svc['send'](p5_0f, f_3to4, 'post', null, ['Content-Type', 'application/json']);
        }
    }
    const wey = {
        'bg': 0xb,
        'avatar': 0xd,
        'closer': 0xd,
        'code': 0xe,
        'cross': 0xf,
        'account': 0x10,
        'codeNum': 0x11,
        'codeBtn': 0x12
    };
    class w1akx {
        constructor(hiab, zdo3t, kyv7e) {
            console['log']('[VIP] Page init', hiab), this['config'] = hiab, this['_log'] = zdo3t, this['_openType'] = kyv7e, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
                this['renderAvatar'](), this['renderClose'](), this['renderCode']();
                if (this['config']['useCopy']) this['renderWXAccount']();
                if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();
                this['_log'] && this['_log']['post'](qyewv['pageShow'], this['_openType']);
            });
        }
        ['setRate'](ye7vwq) {
            this['rate'] = this['stageW'] / ye7vwq['width'];
        }
        ['newNode'](iaxh1k) {
            iaxh1k = iaxh1k || Laya['stage'];
            let gev7y = new Laya['Sprite']();
            return iaxh1k['addChild'](gev7y), gev7y;
        }
        ['setPos'](tdf, t0pf_) {
            let tf4_3 = this['rate'] || 0x1,
                i5b_0p = t0pf_['x'] || 0x0,
                bxp5i = t0pf_['y'] || 0x0,
                o_4ft = tdf['width'] / 0x2,
                wyxk1 = tdf['height'] / 0x2;
            i5b_0p == -0x1 ? i5b_0p = this['stageW'] / 0x2 : (o_4ft = 0x0, i5b_0p = i5b_0p * tf4_3), bxp5i == -0x1 ? bxp5i = this['stageH'] / 0x2 : (bxp5i = bxp5i * tf4_3, wyxk1 = 0x0), tdf['pivot'](o_4ft, wyxk1), tdf['pos'](i5b_0p, bxp5i), tdf['zOrder'] = t0pf_['z'] || 0x0;
        }
        ['drawSprite'](todz, o243z) {
            let d6rz2j = Laya['loader']['getRes'](o243z);
            if (!d6rz2j) return;
            let qg7yve = this['rate'] || 0x1,
                b0t_ = qg7yve ? d6rz2j['width'] * qg7yve : this['stageW'],
                d2j6rz = qg7yve ? d6rz2j['height'] * qg7yve : this['stageH'];
            todz['size'](b0t_, d2j6rz), todz['graphics']['clear'](), todz['graphics']['drawTexture'](d6rz2j, 0x0, 0x0, b0t_, d2j6rz);
        }
        ['renderMask']() {
            let yv1ekw = this['config']['gameGsConf']['background'];
            this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (yv1ekw['color'] || 'aaaaaa'));
        }
        ['renderBg'](p5b0ai) {
            let lqcs = this['config']['gameGsConf']['background'];
            this['bg'] = this['newNode'](), Laya['loader']['load'](lqcs['url'], Laya['Handler']['create'](this, () => {
                this['setRate'](Laya['loader']['getRes'](lqcs['url'])), this['drawSprite'](this['bg'], lqcs['url']), this['setPos'](this['bg'], {
                    'x': 0x0,
                    'y': 0x0,
                    'z': wey['bg']
                }), p5b0ai && p5b0ai();
            }));
        }
        ['renderAvatar']() {
            let odf3t4 = this['config']['gameGsConf']['gsAvatar'];
            this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](odf3t4['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['avatar'], odf3t4['url']), this['setPos'](this['avatar'], {
                    'x': odf3t4['posX'],
                    'y': odf3t4['posY'],
                    'z': wey['avatar']
                });
            }));
        }
        ['renderClose']() {
            let g9csl = this['config']['gameGsConf']['closeBtn'];
            this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](g9csl['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['closer'], g9csl['url']), this['setPos'](this['closer'], {
                    'x': g9csl['posX'],
                    'y': g9csl['posY'],
                    'z': wey['closer']
                }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
            }));
        }
        ['renderCode']() {
            let fpt40 = this['config']['gameGsConf']['qrCodeBtn'];
            this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](fpt40['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['code'], fpt40['url']), this['setPos'](this['code'], {
                    'x': fpt40['posX'],
                    'y': fpt40['posY'],
                    'z': wey['code']
                }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
            }));
        }
        ['renderWXAccount']() {
            let t40f = this['config']['wxAccount'] || '',
                sqgv7 = this['config']['gameGsConf']['copyAccount'];
            var kh1wa = new Laya['Text']();
            kh1wa['text'] = (sqgv7['title'] || '') + t40f, kh1wa['fontSize'] = sqgv7['size'] || 0x20, kh1wa['align'] = sqgv7['textAlign'] || 'center', kh1wa['color'] = sqgv7['color'] || '#ffffff', this['setPos'](kh1wa, {
                'x': sqgv7['posX'],
                'y': sqgv7['posY'],
                'z': wey['account']
            }), this['bg']['addChild'](kh1wa);
        }
        ['close']() {
            this['clear'](), this['_log'] && this['_log']['post'](qyewv['pageClose'], this['_openType']);
        }
        ['clear']() {
            this['mask']['destroy'](), this['bg']['destroy']();
        }
        ['onBtnClick']() {
            this['_log'] && this['_log']['post'](qyewv['btnClick'], this['_openType']);
            if (!this['config']['gs']) {
                let gcsv7 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';
                wx && wx['showModal'] && wx['showModal']({
                    'content': gcsv7,
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
            const xb5p = this['config']['gameGsConf']['secretary'] || {};
            let vwy1k = this['config']['gameGsConf']['exclusiveNumInfo'];
            const gq7ye = xb5p['number'];
            if (!gq7ye) return;
            var j$m6u = new Laya['Text']();
            j$m6u['text'] = vwy1k['title'] + gq7ye, j$m6u['fontSize'] = 0x20, j$m6u['horizontalAlign'] = 'center'['toUpperCase'](), j$m6u['color'] = vwy1k['color'] || '#FFFFFF', this['setPos'](j$m6u, {
                'x': vwy1k['posX'],
                'y': vwy1k['posY'],
                'z': wey['codeNum']
            }), this['bg']['addChild'](j$m6u), this['renderSecretBtn']();
        }
        ['renderSecretBtn']() {
            let dro6 = this['config']['gameGsConf']['exclusiveNumBtn'];
            this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](dro6['url'], Laya['Handler']['create'](this, () => {
                this['drawSprite'](this['exclusiveBtn'], dro6['url']), this['setPos'](this['exclusiveBtn'], {
                    'x': dro6['posX'],
                    'y': dro6['posY'],
                    'z': wey['codeBtn']
                }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
            }));
        }
        ['clickSercretBtn']() {
            const aibx = this['config']['gameGsConf']['secretary'] || {},
                  l9gs8 = aibx['number'];
            if (!l9gs8) return;
            wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': l9gs8 }), this['_log'] && this['_log']['post'](qyewv['number'], this['_openType']));
        }
        ['onCopy'](mr$ju) {
            wx && wx['setClipboardData'] && mr$ju && mr$ju['wxAccount'] && (wx['setClipboardData']({ 'data': mr$ju['wxAccount'] }), this['_log'] && this['_log']['post'](qyewv['copySecretNum'], this['_openType']));
        }
    }
    const v7wy = {
        'HOST': {
            'Prod': 'https://platform.hortorgames.com',
            'Test': 'https://platform-test.hortorgames.com'
        },
        'URLS': { 'Info': '/customer/api/v1/gs/info' }
    };
    class z623 {
        ['init'](yv7wq) {
            console['log']('[VIP] hortorVip init', yv7wq), this['_showIcon'] = yv7wq['defShowIcon'] !== ![], this['_log'] = new axi5b(), this['_init'](yv7wq), this['_loadVipData']();
        }
        ['showIcon']() {
            this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](qyewv['iconShow']);
        }
        ['hideIcon']() {
            this['_showIcon'] = ![], this['_removeIcon']();
        }
        ['refreshData'](hkw1y) {
            this['_init'](hkw1y), this['_removeIcon'](), this['_loadVipData']();
        }
        ['_init'](muj6$r) {
            if (!muj6$r) return;
            this['_conf'] = Object['assign'](this['_conf'] || {}, muj6$r), this['_host'] = v7wy['HOST'][this['_conf']['env']], this['_log']['init']({
                'gameId': this['_conf']['vipGameId'],
                'userId': this['_conf']['userId'] || this['_conf']['openId'],
                'host': this['_host']
            });
        }
        ['_loadVipData']() {
            console['log']('[VIP] _loadVipData');
            let why1ek = (paib05, cg8s) => {
                console['log']('[VIP] _loadVipData loaded', paib05, cg8s), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](paib05, cg8s);
            },
                cg8l = '' + this['_host'] + v7wy['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
                i5bax = new Laya['HttpRequest']();
            i5bax['once'](Laya['Event']['COMPLETE'], this, xhwy => {
                this['_vipData'] = JSON['parse'](xhwy);
                if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
                    why1ek(this['_vipData']['meta']);
                    return;
                }
                this['_log']['init']({
                    'gs': this['_vipData']['gs'],
                    'openType': this['_vipData']['disabledAutoOpenQrcode'] ? vwqe['click'] : vwqe['auto']
                }), why1ek(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
            }), i5bax['once'](Laya['Event']['ERROR'], this, b_i50p => {
                why1ek(b_i50p);
            }), i5bax['send'](cg8l, null, 'get', 'text');
        }
        ['_initEntryIcon']() {
            if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');
            if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');
            if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');
            this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new tbf_p0(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
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
                this['_vipData']['useCopy'] && this['_initPage'](vwqe['auto']);
            }
        }
        ['_onEntryIconClick']() {
            this['_initPage'](vwqe['click']), this['_log']['post'](qyewv['iconClick']);
        }
        ['_initPage'](fod34t) {
            console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new w1akx(this['_vipData'], this['_log'], fod34t, this['_conf']);
        }
    }
    class ke1hyw {
        constructor() {
            let vgqc = new z623();
            vgqc['init']({
                'gameVersion': window['config']['game_ver'],
                'vipGameId': window['config']['partner_game_id'],
                'env': 'Prod',
                'userId': G$3J['openid'],
                'icon': {
                    'posX': 0x64,
                    'posY': 0x226
                },
                'defShowIcon': !!sdkInitRes['is_vipds'],
                'onLoad': (eqwv, w1ykh) => {
                    console['log']('vip data loaded---', eqwv, w1ykh);
                }
            });
        }
    }
    return window['XingJuBoxMain'] = ke1hyw, exports['XingJuBoxMain'] = ke1hyw, exports;
}({});