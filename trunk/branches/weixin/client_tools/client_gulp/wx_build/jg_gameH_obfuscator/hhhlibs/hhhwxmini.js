var O = wx.$C;
!function (chpzn, $e2iax) {
  $e2iax['un'], $e2iax['uns'];var pytn = $e2iax['static'],
      zhn69 = $e2iax['class'],
      j_r7w4 = $e2iax['getset'];$e2iax['__newvec'];var e$i2xa = laya['utils']['Browser'],
      ei02fx = (laya['events']['Event'], laya['events']['EventDispatcher']),
      bsqf1 = laya['resource']['HTMLImage'],
      fbq20x = laya['utils']['Handler'],
      rwj7 = laya['display']['Input'],
      sfq1k = laya['net']['Loader'];laya['maths']['Matrix'];var jr7w4_ = laya['renders']['Render'],
      nz6ch = laya['utils']['RunDriver'];laya['media']['Sound'];var p6tgm = laya['media']['SoundChannel'],
      ztp6hn = laya['media']['SoundManager'],
      s19cq = (laya['display']['Stage'], laya['net']['URL']),
      szc1k9 = laya['utils']['Utils'],
      _vdu5w = (zhn69(tmu, 'laya.wx.mini.MiniAdpter'), tmu['getJson'] = function (czk1s) {
    return JSON['parse'](czk1s);
  }, tmu['init'] = function (q19bs, f0bxq2) {
    void 0x0 === q19bs && (q19bs = !0x1), void 0x0 === f0bxq2 && (f0bxq2 = !0x1), tmu['_inited'] || (tmu['window'] = chpzn)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (tmu['_inited'] = !0x0, tmu['isZiYu'] = f0bxq2, tmu['isPosMsgYu'] = q19bs, tmu['EnvConfig'] = {}, tmu['isZiYu'] || (d5v_u['setNativeFileDir']('/layaairGame'), d5v_u['existDir'](d5v_u['fileNativeDir'], fbq20x['create'](tmu, tmu['onMkdirCallBack']))), tmu['window']['focus'] = function () {}, $e2iax['getUrlPath'] = function () {}, tmu['window']['logtime'] = function (w574_d) {}, tmu['window']['alertTimeLog'] = function (qk1sb) {}, tmu['window']['resetShareInfo'] = function () {}, tmu['window']['CanvasRenderingContext2D'] = function () {}, tmu['window']['CanvasRenderingContext2D']['prototype'] = tmu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tmu['window']['document']['body']['appendChild'] = function () {}, tmu['EnvConfig']['pixelRatioInt'] = 0x0, nz6ch['getPixelRatio'] = tmu['pixelRatio'], tmu['_preCreateElement'] = e$i2xa['createElement'], e$i2xa['createElement'] = tmu['createElement'], nz6ch['createShaderCondition'] = tmu['createShaderCondition'], szc1k9['parseXMLFromString'] = tmu['parseXMLFromString'], rwj7['_createInputElement'] = tmyvgu['_createInputElement'], tmu['EnvConfig']['load'] = sfq1k['prototype']['load'], sfq1k['prototype']['load'] = _4w75j['prototype']['load'], tmu['isZiYu'] && q19bs && wx['onMessage'](function (znp6ht) {
      znp6ht['isLoad'] && (d5v_u['ziyuFileData'][znp6ht['url']] = znp6ht['data']);
    }));
  }, tmu['onMkdirCallBack'] = function (ud5gv, cz1sk9) {
    ud5gv || (d5v_u['filesListObj'] = JSON['parse'](cz1sk9['data']));
  }, tmu['pixelRatio'] = function () {
    if (!tmu['EnvConfig']['pixelRatioInt']) try {
      var pnm6t = wx['getSystemInfoSync']();return tmu['EnvConfig']['pixelRatioInt'] = pnm6t['pixelRatio'], pnm6t['pixelRatio'];
    } catch ($axie) {}return tmu['EnvConfig']['pixelRatioInt'];
  }, tmu['createElement'] = function ($xeai2) {
    var fix20;if ('canvas' == $xeai2) return 0x1 == tmu['idx'] ? tmu['isZiYu'] ? (fix20 = sharedCanvas)['style'] = {} : fix20 = chpzn['canvas'] : fix20 = chpzn['wx']['createCanvas'](), tmu['idx']++, fix20;if ('textarea' == $xeai2 || 'input' == $xeai2) return tmu['onCreateInput']($xeai2);if ('div' != $xeai2) return tmu['_preCreateElement']($xeai2);return $xeai2 = tmu['_preCreateElement']($xeai2), ($xeai2['contains'] = function (ncz6h) {
      return null;
    }, $xeai2['removeChild'] = function (hz9c61) {}, $xeai2);
  }, tmu['onCreateInput'] = function (ck1q9) {
    return ck1q9 = tmu['_preCreateElement'](ck1q9), (ck1q9['focus'] = tmyvgu['wxinputFocus'], ck1q9['blur'] = tmyvgu['wxinputblur'], ck1q9['style'] = {}, ck1q9['value'] = 0x0, ck1q9['parentElement'] = {}, ck1q9['placeholder'] = {}, ck1q9['type'] = {}, ck1q9['setColor'] = function (g5yvu) {}, ck1q9['setType'] = function (n6czhp) {}, ck1q9['setFontFace'] = function (d5w_47) {}, ck1q9['addEventListener'] = function (muvtgy) {}, ck1q9['contains'] = function (xqkf0) {
      return null;
    }, ck1q9['removeChild'] = function (r7w) {}, ck1q9);
  }, tmu['createShaderCondition'] = function (qbk0x) {
    var fskbq = this;return function () {
      return fskbq[qbk0x['replace']('this.', '')];
    };
  }, tmu['EnvConfig'] = null, tmu['window'] = null, tmu['_preCreateElement'] = null, tmu['_inited'] = !0x1, tmu['wxRequest'] = null, tmu['systemInfo'] = null, tmu['version'] = '0.0.1', tmu['isZiYu'] = !0x1, tmu['isPosMsgYu'] = !0x1, tmu['parseXMLFromString'] = function (mpnygt) {
    var mgvtyp;mpnygt = mpnygt['replace'](/>\s+</g, '><');try {
      mgvtyp = new chpzn['Parser']['DOMParser']()['parseFromString'](mpnygt, 'text/xml');
    } catch (tmg6n) {
      throw '需要引入xml解析库文件';
    }return mgvtyp;
  }, tmu['idx'] = 0x1, tmu);function tmu() {}zhn69(pnmt6h, 'laya.wx.mini.MiniImage'), pnmt6h['prototype']['_loadImage'] = function (kqs19c) {
    var b0q2 = !0x1;-0x1 == kqs19c['indexOf']('layaNativeDir/') && (b0q2 = !0x0, kqs19c = s19cq['formatURL'](kqs19c)), d5v_u['getFileInfo'](kqs19c) ? pnmt6h['onCreateImage'](kqs19c, this, !b0q2) : -0x1 != kqs19c['indexOf']('http://') || -0x1 != kqs19c['indexOf']('https://') ? d5v_u['downImg'](kqs19c, new fbq20x(pnmt6h, pnmt6h['onDownImgCallBack'], [kqs19c, this]), kqs19c) : pnmt6h['onCreateImage'](kqs19c, this, !0x0);
  }, pnmt6h['onDownImgCallBack'] = function (fs1b, ypngt, mpnh) {
    mpnh ? ypngt['onError'](null) : pnmt6h['onCreateImage'](fs1b, ypngt);
  }, pnmt6h['onCreateImage'] = function (wyud5v, pmng6t, w_dvu) {
    var f2xb, chz61;function q0fk() {
      chz61['onload'] = null, chz61['onerror'] = null, delete pmng6t['imgCache'][wyud5v];
    }f2xb = (w_dvu = void 0x0 === w_dvu ? !0x1 : w_dvu) ? wyud5v : (wyud = d5v_u['getFileInfo'](wyud5v)['md5'], d5v_u['getFileNativePath'](wyud)), null == pmng6t['imgCache'] && (pmng6t['imgCache'] = {}), w_dvu = function () {
      q0fk(), pmng6t['onLoaded'](chz61);
    };var wyud = function () {
      q0fk(), pmng6t['event']('error', 'Load image failed');
    };'nativeimage' == pmng6t['_type'] ? ((chz61 = new e$i2xa['window']['Image']())['crossOrigin'] = '', chz61['onload'] = w_dvu, chz61['onerror'] = wyud, chz61['src'] = f2xb, pmng6t['imgCache'][wyud5v] = chz61) : new bsqf1['create'](f2xb, { 'onload': w_dvu, 'onerror': wyud, 'onCreate': function (fsbk0q) {
        chz61 = fsbk0q, pmng6t['imgCache'][wyud5v] = fsbk0q;
      } });
  };function pnmt6h() {}var tmyvgu = (zhn69(mgn6, 'laya.wx.mini.MiniInput'), mgn6['_createInputElement'] = function () {
    rwj7['_initInput'](rwj7['area'] = e$i2xa['createElement']('textarea')), rwj7['_initInput'](rwj7['input'] = e$i2xa['createElement']('input')), rwj7['inputContainer'] = e$i2xa['createElement']('div'), rwj7['inputContainer']['style']['position'] = 'absolute', rwj7['inputContainer']['style']['zIndex'] = 0x186a0, e$i2xa['container']['appendChild'](rwj7['inputContainer']), rwj7['inputContainer']['setPos'] = function (wyu5, c19hz) {
      rwj7['inputContainer']['style']['left'] = wyu5 + 'px', rwj7['inputContainer']['style']['top'] = c19hz + 'px';
    }, $e2iax['stage']['on']('resize', null, mgn6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hpcn6z) {
      chpzn['dispatchEvent'] && chpzn['dispatchEvent']('resize');
    }), ztp6hn['_soundClass'] = s1qfk, ztp6hn['_musicClass'] = s1qfk;
  }, mgn6['_onStageResize'] = function () {
    $e2iax['stage']['_canvasTransform']['identity']()['scale'](e$i2xa['width'] / jr7w4_['canvas']['width'] / nz6ch['getPixelRatio'](), e$i2xa['height'] / jr7w4_['canvas']['height'] / nz6ch['getPixelRatio']());
  }, mgn6['wxinputFocus'] = function (w_rj) {
    var ljr8 = rwj7['inputElement']['target'];ljr8 && !ljr8['editable'] || (_vdu5w['window']['wx']['offKeyboardConfirm'](), _vdu5w['window']['wx']['offKeyboardInput'](), _vdu5w['window']['wx']['showKeyboard']({ 'defaultValue': ljr8['text'], 'maxLength': ljr8['maxChars'], 'multiple': ljr8['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (t6zh) {}, 'fail': function (zhs9) {} }), _vdu5w['window']['wx']['onKeyboardConfirm'](function (_roj) {
      _roj = _roj ? _roj['value'] : '', (ljr8['text'] = _roj, ljr8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), _vdu5w['window']['wx']['onKeyboardInput'](function (bqkf0s) {
      bqkf0s = bqkf0s ? bqkf0s['value'] : '', ljr8['multiline'] || -0x1 == bqkf0s['indexOf']('\x0a') ? (ljr8['text'] = bqkf0s, ljr8['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, mgn6['inputEnter'] = function () {
    rwj7['inputElement']['target']['focus'] = !0x1;
  }, mgn6['wxinputblur'] = function () {
    mgn6['hideKeyboard']();
  }, mgn6['hideKeyboard'] = function () {
    _vdu5w['window']['wx']['offKeyboardConfirm'](), _vdu5w['window']['wx']['offKeyboardInput'](), _vdu5w['window']['wx']['hideKeyboard']({ 'success': function (j54_) {
        console['log']('隐藏键盘');
      }, 'fail': function (skq9c) {
        console['log']('隐藏键盘出错:' + (skq9c ? skq9c['errMsg'] : ''));
      } });
  }, mgn6);function mgn6() {}var _4w75j = function () {
    function zcpn() {}zhn69(zcpn, 'laya.wx.mini.MiniLoader');var gtvpmy = zcpn['prototype'];return gtvpmy['load'] = function (r3l7j, w7_45, h9zn, j743r, mgud) {
      void 0x0 === h9zn && (h9zn = !0x0), void 0x0 === mgud && (mgud = !0x1);var kbqs0 = this;0x0 === (kbqs0['_url'] = r3l7j)['indexOf']('data:image') ? kbqs0['_type'] = w7_45 = 'image' : kbqs0['_type'] = w7_45 = w7_45 || kbqs0['getTypeFromUrl'](r3l7j), kbqs0['_cache'] = h9zn, kbqs0['_data'] = null;var udgv = 'ascii';-0x1 != r3l7j['indexOf']('.fnt') ? udgv = 'utf8' : 'arraybuffer' == w7_45 && (udgv = '');var ydmg = szc1k9['getFileExtension'](r3l7j);if (-0x1 != zcpn['_fileTypeArr']['indexOf'](ydmg)) _vdu5w['EnvConfig']['load']['call'](this, r3l7j, w7_45, h9zn, j743r, mgud);else {
        if (d5v_u['getFileInfo'](r3l7j)) _vdu5w['EnvConfig']['load']['call'](this, r3l7j, w7_45, h9zn, j743r, mgud);else {
          if (-0x1 != r3l7j['indexOf']('layaNativeDir/')) {
            if (_vdu5w['isZiYu']) {
              var yvdug = d5v_u['ziyuFileData'][r3l7j];return void kbqs0['onLoaded'](yvdug);
            }return cosnole['log']('read read'), void d5v_u['read'](r3l7j, udgv, new fbq20x(zcpn, zcpn['onReadNativeCallBack'], [udgv, r3l7j, w7_45, h9zn, j743r, mgud, kbqs0]));
          }yvdug = '' == s19cq['rootPath'] ? r3l7j : r3l7j['split'](s19cq['rootPath'])[0x0], -0x1 != r3l7j['indexOf']('http://') || -0x1 != r3l7j['indexOf']('https://') ? _vdu5w['EnvConfig']['load']['call'](kbqs0, r3l7j, w7_45, h9zn, j743r, mgud) : d5v_u['readFile'](yvdug, udgv, new fbq20x(zcpn, zcpn['onReadNativeCallBack'], [udgv, r3l7j, w7_45, h9zn, j743r, mgud, kbqs0]), r3l7j);
        }
      }
    }, gtvpmy['resMgrLoad'] = function (dvumgy, mp6tng, _jro74, qskf0b, tygnm, c6znph, roj47) {
      void 0x0 === _jro74 && (_jro74 = 0x0), void 0x0 === qskf0b && (qskf0b = !0x1), void 0x0 === tygnm && (tygnm = !0x1), void 0x0 === c6znph && (c6znph = 0x0), void 0x0 === roj47 && (roj47 = 0x3), -0x1 != dvumgy['indexOf']('mpack') && console['log']('=============resMgrLoad url:', dvumgy), _vdu5w['EnvConfig']['resMgrLoad'](dvumgy, (gmtvuy, yu5dg, wjr_) => {
        zcpn['prototype']['resMgrLoadCallBack'](gmtvuy, yu5dg, wjr_, mp6tng);
      }, _jro74, qskf0b, tygnm, c6znph, roj47);
    }, gtvpmy['resMgrLoadCallBack'] = function (qks1b9, d5_u, uydm, tgpm6n) {
      console['log']('buff:::', qks1b9, uydm, d5v_u['fileNativeDir'] + '///' + d5v_u['fileListName']), tgpm6n(qks1b9, d5_u, uydm);
    }, gtvpmy['clearRes'] = function (u5dw_v, ptymgv) {
      this['clearRes'](u5dw_v, ptymgv = void 0x0 === ptymgv ? !0x1 : ptymgv), ptymgv = d5v_u['getFileInfo'](u5dw_v), !ptymgv || -0x1 == u5dw_v['indexOf']('http://') && -0x1 == u5dw_v['indexOf']('https://') || (ptymgv = ptymgv['md5'], ptymgv = d5v_u['getFileNativePath'](ptymgv), d5v_u['remove'](ptymgv));
    }, zcpn['onReadNativeCallBack'] = function (tpyg, mngypt, zhtnp6, zhn9c, jr4_o7, bfix2, nhzp6c, skb, cs19zh) {
      void 0x0 === zhn9c && (zhn9c = !0x0), void 0x0 === bfix2 && (bfix2 = !0x1), (skb = void 0x0 === skb ? 0x0 : skb) ? 0x1 == skb && _vdu5w['EnvConfig']['load']['call'](nhzp6c, mngypt, zhtnp6, zhn9c, jr4_o7, bfix2) : (cs19zh = 'json' == zhtnp6 || 'atlas' == zhtnp6 ? _vdu5w['getJson'](cs19zh['data']) : 'xml' == zhtnp6 ? szc1k9['parseXMLFromString'](cs19zh['data']) : cs19zh['data'], nhzp6c['onLoaded'](cs19zh), !_vdu5w['isZiYu'] && _vdu5w['isPosMsgYu'] && 'arraybuffer' != zhtnp6 && wx['postMessage']({ 'url': mngypt, 'data': cs19zh, 'isLoad': !0x0 }));
    }, pytn(zcpn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zcpn;
  }(),
      d5v_u = (zhn69(e02ix$, 'laya.wx.mini.MiniFileMgr', ei02fx), e02ix$['isLoadFile'] = function (j34o7r) {
    return -0x1 != e02ix$['_fileTypeArr']['indexOf'](j34o7r);
  }, e02ix$['getFileInfo'] = function (zsch1) {
    return zsch1 = zsch1['split']('?')[0x0], zsch1 = e02ix$['filesListObj'][zsch1], null == zsch1 ? null : zsch1;
  }, e02ix$['onFileUpdate'] = function (ro3j7l, x2ai$e) {
    var bq9k1 = ro3j7l['split']('/');ro3j7l = bq9k1[bq9k1['length'] - 0x1], bq9k1 = e02ix$['getFileInfo'](x2ai$e), null == bq9k1 ? e02ix$['onSaveFile'](x2ai$e, ro3j7l) : bq9k1['readyUrl'] != x2ai$e && e02ix$['remove'](ro3j7l, x2ai$e);
  }, e02ix$['exits'] = function (r3o4j7, th6zn) {
    r3o4j7 = e02ix$['getFileNativePath'](r3o4j7), e02ix$['fs']['getFileInfo']({ 'filePath': r3o4j7, 'success': function (jo734) {
        null != th6zn && th6zn['runWith']([0x0, jo734]);
      }, 'fail': function (yu5dvw) {
        null != th6zn && th6zn['runWith']([0x1, yu5dvw]);
      } });
  }, e02ix$['read'] = function (rjw_74, x0qf, j4w_5, l3jo8) {
    void 0x0 === x0qf && (x0qf = 'ascill'), rjw_74 = '' != (l3jo8 = void 0x0 === l3jo8 ? '' : l3jo8) ? e02ix$['getFileNativePath'](rjw_74) : rjw_74, e02ix$['fs']['readFile']({ 'filePath': rjw_74, 'encoding': x0qf, 'success': function (ixfe0) {
        null != j4w_5 && j4w_5['runWith']([0x0, ixfe0]);
      }, 'fail': function (_45d7) {
        _45d7 && '' != l3jo8 ? e02ix$['down'](l3jo8, x0qf, j4w_5, l3jo8) : null != j4w_5 && j4w_5['runWith']([0x1]);
      } });
  }, e02ix$['readNativeFile'] = function (hczp, skf1) {
    e02ix$['fs']['readFile']({ 'filePath': hczp, 'encoding': '', 'success': function (w45d) {
        null != skf1 && skf1['runWith']([0x0]);
      }, 'fail': function (guvdy5) {
        null != skf1 && skf1['runWith']([0x1]);
      } });
  }, e02ix$['down'] = function (dguymv, g6pmnt, ax$2ei, q9bk1s) {
    void 0x0 === g6pmnt && (g6pmnt = 'ascill'), void 0x0 === q9bk1s && (q9bk1s = '');var phc6 = e02ix$['getFileNativePath'](q9bk1s);e02ix$['wxdown']({ 'url': dguymv, 'filePath': phc6, 'success': function (d7w4_) {
        0xc8 === d7w4_['statusCode'] && e02ix$['readFile'](d7w4_['filePath'], g6pmnt, ax$2ei, q9bk1s);
      }, 'fail': function (_v5wd) {
        null != ax$2ei && ax$2ei['runWith']([0x1, _v5wd]);
      } })['onProgressUpdate'](function (u4w_d) {
      null != ax$2ei && ax$2ei['runWith']([0x2, u4w_d['progress']]);
    });
  }, e02ix$['readFile'] = function (b2fix, b0x2fi, ymgduv, yug5d) {
    void 0x0 === yug5d && (yug5d = ''), e02ix$['fs']['readFile']({ 'filePath': b2fix, 'encoding': b0x2fi = void 0x0 === b0x2fi ? 'ascill' : b0x2fi, 'success': function (x$0ie2) {
        -0x1 == b2fix['indexOf']('http://') && -0x1 == b2fix['indexOf']('https://') || e02ix$['onFileUpdate'](b2fix, yug5d), null != ymgduv && ymgduv['runWith']([0x0, x$0ie2]);
      }, 'fail': function (zpht6) {
        zpht6 && null != ymgduv && ymgduv['runWith']([0x1, zpht6]);
      } });
  }, e02ix$['downImg'] = function (vguytm, vgymtp, mtgpy) {
    void 0x0 === mtgpy && (mtgpy = ''), e02ix$['wxdown']({ 'url': vguytm, 'success': function (gyvmt) {
        0xc8 === gyvmt['statusCode'] && e02ix$['copyFile'](gyvmt['tempFilePath'], mtgpy, vgymtp);
      }, 'fail': function (vgmdyu) {
        null != vgymtp && vgymtp['runWith']([0x1, vgmdyu]);
      } });
  }, e02ix$['copyFile'] = function (kzs1c, x20qfb, mgy) {
    var wd5vy = kzs1c['split']('/'),
        or4_j7 = wd5vy[wd5vy['length'] - 0x1];x20qfb['split']('?')[0x0];var b2q0f = e02ix$['getFileInfo'](x20qfb);wd5vy = e02ix$['getFileNativePath'](or4_j7), e02ix$['fs']['copyFile']({ 'srcPath': kzs1c, 'destPath': wd5vy, 'success': function (sh1z) {
        b2q0f ? b2q0f['readyUrl'] != x20qfb && e02ix$['remove'](or4_j7, x20qfb, mgy) : (e02ix$['onSaveFile'](x20qfb, or4_j7), null != mgy && mgy['runWith']([0x0]));
      }, 'fail': function (ht6znp) {
        null != mgy && mgy['runWith']([0x1, ht6znp]);
      } });
  }, e02ix$['getFileNativePath'] = function (o4_7j) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o4_7j;
  }, e02ix$['remove'] = function (m6nth, zpch6, kz1cs) {
    void 0x0 === zpch6 && (zpch6 = '');var rj_4o = e02ix$['getFileInfo'](zpch6),
        ypgnmt = e02ix$['getFileNativePath'](rj_4o['md5']);$e2iax['loader']['clearRes'](rj_4o['readyUrl']), e02ix$['fs']['unlink']({ 'filePath': ypgnmt, 'success': function (w_ud5) {
        '' != zpch6 && e02ix$['onSaveFile'](zpch6, m6nth), null != kz1cs && kz1cs['runWith']([0x0]);
      }, 'fail': function (q0ksbf) {} });
  }, e02ix$['onSaveFile'] = function (ymu, n6tmph) {
    var _dw45u = ymu['split']('?')[0x0];e02ix$['filesListObj'][_dw45u] = { 'md5': n6tmph, 'readyUrl': ymu }, e02ix$['fs']['writeFile']({ 'filePath': e02ix$['fileNativeDir'] + '/' + e02ix$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e02ix$['filesListObj']), 'success': function (m6npg) {
        console['log']('写入测试测试成功：', m6npg);
      }, 'fail': function (qkf) {
        console['log']('写入测试测试失败：', qkf);
      } });
  }, e02ix$['existDir'] = function (pzh6, kc1z9s) {
    e02ix$['fs']['mkdir']({ 'dirPath': pzh6, 'success': function (tymgpv) {
        null != kc1z9s && kc1z9s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (z6pth) {
        -0x1 != z6pth['errMsg']['indexOf']('file already exists') ? e02ix$['readSync'](e02ix$['fileListName'], 'utf8', kc1z9s) : null != kc1z9s && kc1z9s['runWith']([0x1, z6pth]);
      } });
  }, e02ix$['readSync'] = function (k1qs9c, wj547_, ntm6h, a$ex) {
    void 0x0 === wj547_ && (wj547_ = 'ascill'), void 0x0 === a$ex && (a$ex = ''), k1qs9c = e02ix$['getFileNativePath'](k1qs9c);var sfkbq;try {
      sfkbq = e02ix$['fs']['readFileSync'](k1qs9c), null != ntm6h && ntm6h['runWith']([0x0, { 'data': sfkbq }]);
    } catch (ymdgv) {
      null != ntm6h && ntm6h['runWith']([0x1]);
    }
  }, e02ix$['readCache'] = function () {}, e02ix$['writeCache'] = function (kqsc9) {
    var fkbsq = readyUrl['split']('?')[0x0];e02ix$['filesListObj'][fkbsq] = { 'md5': md5Name, 'readyUrl': readyUrl }, e02ix$['fs']['writeFile']({ 'filePath': e02ix$['fileNativeDir'] + '/' + e02ix$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e02ix$['filesListObj']), 'success': function (phnzc) {}, 'fail': function (uvtymg) {} });
  }, e02ix$['setNativeFileDir'] = function (cnpzh) {
    e02ix$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cnpzh;
  }, e02ix$['filesListObj'] = {}, e02ix$['fileNativeDir'] = null, e02ix$['fileListName'] = 'layaairfiles.txt', e02ix$['ziyuFileData'] = {}, pytn(e02ix$, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), e02ix$);function e02ix$() {
    e02ix$['__super']['call'](this);
  }var s1qfk = function () {
    function _wjr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, _wjr['__super']['call'](this), this['_sound'] = _wjr['_createSound']();
    }zhn69(_wjr, 'laya.wx.mini.MiniSound', ei02fx);var gyvmtu = _wjr['prototype'];return gyvmtu['load'] = function (_w7j) {
      var kf1sb = this,
          sz91ch;function qbs1f() {
        if (null != _wjr['_null']) kf1sb['_sound']['onCanplay'](_wjr['_null']), kf1sb['_sound']['onError'](_wjr['_null']);else try {
          kf1sb['_sound']['onCanplay'](null), kf1sb['_sound']['onError'](null), _wjr['_null'] = null;
        } catch (k1sbq9) {
          console['warn']('[wxmini] _clearSound:' + k1sbq9), kf1sb['_sound']['onCanplay'](bs0), kf1sb['_sound']['onError'](bs0), _wjr['_null'] = bs0;
        }
      }function bs0() {}_w7j = s19cq['formatURL'](_w7j), this['url'] = _w7j, _wjr['_audioCache'][_w7j] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        qbs1f(), sz91ch['loaded'] = !0x0, sz91ch['event']('complete'), _wjr['_audioCache'][sz91ch['url']] = sz91ch;
      }), this['_sound']['onError'](function (uw_45) {
        console['error']('errCode=' + uw_45['errCode'] + '  errMsg=' + uw_45['errMsg']), qbs1f(), sz91ch['event']('error');
      }), this['_sound']['src'] = _w7j, sz91ch = this);
    }, gyvmtu['play'] = function (tnz6p, if2e0x) {
      void 0x0 === tnz6p && (tnz6p = 0x0), void 0x0 === if2e0x && (if2e0x = 0x0), (mvgdy = this['url'] == ztp6hn['_tMusic'] ? (_wjr['_musicAudio'] || (_wjr['_musicAudio'] = _wjr['_createSound']()), _wjr['_musicAudio']) : _wjr['_createSound']())['src'] = this['url'];var mvgdy = new phzc6n(mvgdy);return mvgdy['url'] = this['url'], mvgdy['loops'] = if2e0x, mvgdy['startTime'] = tnz6p, mvgdy['play'](), ztp6hn['addChannel'](mvgdy), mvgdy;
    }, gyvmtu['dispose'] = function () {
      var j7l3or = _wjr['_audioCache'][this['url']];j7l3or && (j7l3or['src'] = '', delete _wjr['_audioCache'][this['url']]);
    }, j_r7w4(0x0, gyvmtu, 'duration', function () {
      return this['_sound']['duration'];
    }), _wjr['_createSound'] = function () {
      return _wjr['_id']++, _vdu5w['window']['wx']['createInnerAudioContext']();
    }, _wjr['_musicAudio'] = null, _wjr['_id'] = 0x0, _wjr['_audioCache'] = {}, _wjr['_null'] = void 0x0, _wjr;
  }(),
      phzc6n = function () {
    function nz6h9(bf0x2) {
      this['_audio'] = null, this['_onEnd'] = null, nz6h9['__super']['call'](this), this['_audio'] = bf0x2, this['_onEnd'] = szc1k9['bind'](this['__onEnd'], this), bf0x2['onEnded'](this['_onEnd']);
    }zhn69(nz6h9, 'laya.wx.mini.MiniSoundChannel', p6tgm);var jor4_7 = nz6h9['prototype'];return jor4_7['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && ($e2iax['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jor4_7['__onNull'] = function () {}, jor4_7['play'] = function () {
      this['isStopped'] = !0x1, ztp6hn['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, jor4_7['stop'] = function () {
      if (this['isStopped'] = !0x0, ztp6hn['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != nz6h9['_null']) this['_audio']['onEnded'](nz6h9['_null']);else try {
          this['_audio']['onEnded'](null), nz6h9['_null'] = null;
        } catch (zhntp6) {
          console['warn']('[wxmini] stop:' + zhntp6), this['_audio']['onEnded'](szc1k9['bind'](this['__onNull'], this)), nz6h9['_null'] = szc1k9['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, jor4_7['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, jor4_7['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ztp6hn['addChannel'](this), this['_audio']['play']());
    }, j_r7w4(0x0, jor4_7, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), j_r7w4(0x0, jor4_7, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), j_r7w4(0x0, jor4_7, 'volume', function () {
      return 0x1;
    }, function (or4j_7) {}), nz6h9['_null'] = void 0x0, nz6h9;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ntzh6p, _7roj4) {
  'use strict';

  for (var p6m in Object['defineProperty'](_7roj4, '__esModule', { 'value': !0x0 }), Laya) {
    var np6mtg = Laya[p6m];np6mtg && np6mtg['__isclass'] && (_7roj4[p6m] = np6mtg);
  }
});