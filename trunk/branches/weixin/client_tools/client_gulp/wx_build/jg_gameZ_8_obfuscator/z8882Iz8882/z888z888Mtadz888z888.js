var G = wx.$G;
(function (window, document, tzsbm) {
  var av45 = tzsbm['un'],
      q7863l = tzsbm['uns'],
      elq8$ = tzsbm['static'],
      _rsmz = tzsbm['class'],
      izbx = tzsbm['getset'],
      tixynb = tzsbm['__newvec'],
      hycx2i = laya['utils']['Browser'],
      el6 = laya['events']['Event'],
      bnixty = laya['events']['EventDispatcher'],
      jhiy2 = laya['resource']['HTMLImage'],
      q$el38 = laya['utils']['Handler'],
      jyic = laya['display']['Input'],
      tzxbmn = laya['net']['Loader'],
      yxibht = laya['maths']['Matrix'],
      uw0o1p = laya['renders']['Render'],
      v7k6l = laya['utils']['RunDriver'],
      iytxbn = laya['media']['Sound'],
      w0up19 = laya['media']['SoundChannel'],
      e_$m = laya['media']['SoundManager'],
      z_r$s = laya['display']['Stage'],
      $me_ = laya['net']['URL'],
      _qe$ = laya['utils']['Utils'],
      o4ud = function () {
    function d4ko() {}return _rsmz(d4ko, 'laya.wx.mini.MiniAdpter'), d4ko['getJson'] = function (e$sm_r) {
      return JSON['parse'](e$sm_r);
    }, d4ko['init'] = function (qs_, ch2yji) {
      qs_ === void 0x0 && (qs_ = ![]), ch2yji === void 0x0 && (ch2yji = ![]);if (d4ko['_inited']) return;d4ko['window'] = window;if (d4ko['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;d4ko['_inited'] = !![], d4ko['isZiYu'] = ch2yji, d4ko['isPosMsgYu'] = qs_, d4ko['EnvConfig'] = {}, !d4ko['isZiYu'] && (_nsrz['setNativeFileDir']('/layaairGame'), _nsrz['existDir'](_nsrz['fileNativeDir'], q$el38['create'](d4ko, d4ko['onMkdirCallBack']))), d4ko['window']['focus'] = function () {}, tzsbm['getUrlPath'] = function () {}, d4ko['window']['logtime'] = function (zr_snm) {}, d4ko['window']['alertTimeLog'] = function (s$_re) {}, d4ko['window']['resetShareInfo'] = function () {}, d4ko['window']['CanvasRenderingContext2D'] = function () {}, d4ko['window']['CanvasRenderingContext2D']['prototype'] = d4ko['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d4ko['window']['document']['body']['appendChild'] = function () {}, d4ko['EnvConfig']['pixelRatioInt'] = 0x0, v7k6l['getPixelRatio'] = d4ko['pixelRatio'], d4ko['_preCreateElement'] = hycx2i['createElement'], hycx2i['createElement'] = d4ko['createElement'], v7k6l['createShaderCondition'] = d4ko['createShaderCondition'], _qe$['parseXMLFromString'] = d4ko['parseXMLFromString'], jyic['_createInputElement'] = bthi['_createInputElement'], d4ko['EnvConfig']['load'] = tzxbmn['prototype']['load'], tzxbmn['prototype']['load'] = bixnzt['prototype']['load'], d4ko['isZiYu'] && qs_ && wx['onMessage'](function (msre$) {
        msre$['isLoad'] && (_nsrz['ziyuFileData'][msre$['url']] = msre$['data']);
      });
    }, d4ko['onMkdirCallBack'] = function (a5fk7, od5u) {
      if (!a5fk7) _nsrz['filesListObj'] = JSON['parse'](od5u['data']);
    }, d4ko['pixelRatio'] = function () {
      if (!d4ko['EnvConfig']['pixelRatioInt']) try {
        var i2yxhc = wx['getSystemInfoSync']();return d4ko['EnvConfig']['pixelRatioInt'] = i2yxhc['pixelRatio'], i2yxhc = i2yxhc, i2yxhc['pixelRatio'];
      } catch (duo0) {}return d4ko['EnvConfig']['pixelRatioInt'];
    }, d4ko['createElement'] = function (ntbi) {
      if (ntbi == 'canvas') {
        var tbnyix;return d4ko['idx'] == 0x1 ? d4ko['isZiYu'] ? (tbnyix = sharedCanvas, tbnyix['style'] = {}) : tbnyix = window['canvas'] : tbnyix = window['wx']['createCanvas'](), d4ko['idx']++, tbnyix;
      } else {
        if (ntbi == 'textarea' || ntbi == 'input') return d4ko['onCreateInput'](ntbi);else {
          if (ntbi == 'div') {
            var ntzbi = d4ko['_preCreateElement'](ntbi);return ntzbi['contains'] = function (o5du4f) {
              return null;
            }, ntzbi['removeChild'] = function (w0u1o) {}, ntzbi;
          } else return d4ko['_preCreateElement'](ntbi);
        }
      }
    }, d4ko['onCreateInput'] = function (yixt2h) {
      var ofdu14 = d4ko['_preCreateElement'](yixt2h);return ofdu14['focus'] = bthi['wxinputFocus'], ofdu14['blur'] = bthi['wxinputblur'], ofdu14['style'] = {}, ofdu14['value'] = 0x0, ofdu14['parentElement'] = {}, ofdu14['placeholder'] = {}, ofdu14['type'] = {}, ofdu14['setColor'] = function (kaf5v4) {}, ofdu14['setType'] = function (zs_$r) {}, ofdu14['setFontFace'] = function (v6al7) {}, ofdu14['addEventListener'] = function (oufd41) {}, ofdu14['contains'] = function (_$3qr) {
        return null;
      }, ofdu14['removeChild'] = function (ibyht) {}, ofdu14;
    }, d4ko['createShaderCondition'] = function (afdk54) {
      var bixtzn = this,
          jhyi2 = function () {
        var hyci2j = afdk54;return bixtzn[afdk54['replace']('this.', '')];
      };return jhyi2;
    }, d4ko['EnvConfig'] = null, d4ko['window'] = null, d4ko['_preCreateElement'] = null, d4ko['_inited'] = ![], d4ko['wxRequest'] = null, d4ko['systemInfo'] = null, d4ko['version'] = '0.0.1', d4ko['isZiYu'] = ![], d4ko['isPosMsgYu'] = ![], d4ko['parseXMLFromString'] = function (cj2iyh) {
      var ijcyh, r$_sq;cj2iyh = cj2iyh['replace'](/>\s+</g, '><');try {
        ijcyh = new window['Parser']['DOMParser']()['parseFromString'](cj2iyh, 'text/xml');
      } catch (e$ms_) {
        throw '需要引入xml解析库文件';
      }return ijcyh;
    }, d4ko['idx'] = 0x1, d4ko;
  }(),
      d5ko = function () {
    function o4k5f() {}_rsmz(o4k5f, 'laya.wx.mini.MiniImage');var e_q83$ = o4k5f['prototype'];return e_q83$['_loadImage'] = function (kfod4) {
      var ibnxy = this,
          al7vk6 = ![];kfod4['indexOf']('layaNativeDir/') == -0x1 && (al7vk6 = !![], kfod4 = $me_['formatURL'](kfod4));if (!_nsrz['getFileInfo'](kfod4)) {
        if (kfod4['indexOf']('http://') != -0x1 || kfod4['indexOf']('https://') != -0x1) _nsrz['downImg'](kfod4, new q$el38(o4k5f, o4k5f['onDownImgCallBack'], [kfod4, ibnxy]), kfod4);else o4k5f['onCreateImage'](kfod4, ibnxy, !![]);
      } else o4k5f['onCreateImage'](kfod4, ibnxy, !al7vk6);
    }, o4k5f['onDownImgCallBack'] = function (yx2hit, d4ka5, gpw910) {
      if (!gpw910) o4k5f['onCreateImage'](yx2hit, d4ka5);else d4ka5['onError'](null);
    }, o4k5f['onCreateImage'] = function (znbtix, f4kd5a, sr_$em) {
      sr_$em === void 0x0 && (sr_$em = ![]);var ql863e;if (!sr_$em) {
        var od14uw = _nsrz['getFileInfo'](znbtix),
            req$s = od14uw['md5'];ql863e = _nsrz['getFileNativePath'](req$s);
      } else ql863e = znbtix;if (f4kd5a['imgCache'] == null) f4kd5a['imgCache'] = {};var q3e_$;function xtnib() {
        q3e_$['onload'] = null, q3e_$['onerror'] = null, delete f4kd5a['imgCache'][znbtix];
      };var me_rs$ = function () {
        xtnib(), f4kd5a['onLoaded'](q3e_$);
      },
          o1d4f = function () {
        xtnib(), f4kd5a['event']('error', 'Load image failed');
      };f4kd5a['_type'] == 'nativeimage' ? (q3e_$ = new hycx2i['window']['Image'](), q3e_$['crossOrigin'] = '', q3e_$['onload'] = me_rs$, q3e_$['onerror'] = o1d4f, q3e_$['src'] = ql863e, f4kd5a['imgCache'][znbtix] = q3e_$) : new jhiy2['create'](ql863e, { 'onload': me_rs$, 'onerror': o1d4f, 'onCreate': function (e$3_rq) {
          q3e_$ = e$3_rq, f4kd5a['imgCache'][znbtix] = e$3_rq;
        } });
    }, o4k5f;
  }(),
      bthi = function () {
    function lv73() {}return _rsmz(lv73, 'laya.wx.mini.MiniInput'), lv73['_createInputElement'] = function () {
      jyic['_initInput'](jyic['area'] = hycx2i['createElement']('textarea')), jyic['_initInput'](jyic['input'] = hycx2i['createElement']('input')), jyic['inputContainer'] = hycx2i['createElement']('div'), jyic['inputContainer']['style']['position'] = 'absolute', jyic['inputContainer']['style']['zIndex'] = 0x186a0, hycx2i['container']['appendChild'](jyic['inputContainer']), jyic['inputContainer']['setPos'] = function (iyh2jc, yj2ih) {
        jyic['inputContainer']['style']['left'] = iyh2jc + 'px', jyic['inputContainer']['style']['top'] = yj2ih + 'px';
      }, tzsbm['stage']['on']('resize', null, lv73['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zrmbn) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), e_$m['_soundClass'] = al6v78, e_$m['_musicClass'] = al6v78;
    }, lv73['_onStageResize'] = function () {
      var bixtnz = tzsbm['stage']['_canvasTransform']['identity']();bixtnz['scale'](hycx2i['width'] / uw0o1p['canvas']['width'] / v7k6l['getPixelRatio'](), hycx2i['height'] / uw0o1p['canvas']['height'] / v7k6l['getPixelRatio']());
    }, lv73['wxinputFocus'] = function (nizbxt) {
      var upw19 = jyic['inputElement']['target'];if (upw19 && !upw19['editable']) return;o4ud['window']['wx']['offKeyboardConfirm'](), o4ud['window']['wx']['offKeyboardInput'](), o4ud['window']['wx']['showKeyboard']({ 'defaultValue': upw19['text'], 'maxLength': upw19['maxChars'], 'multiple': upw19['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yhcix2) {}, 'fail': function (qres_) {} }), o4ud['window']['wx']['onKeyboardConfirm'](function (wp901u) {
        var q8e$_ = wp901u ? wp901u['value'] : '';upw19['text'] = q8e$_, upw19['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), o4ud['window']['wx']['onKeyboardInput'](function (opu) {
        var fu5do4 = opu ? opu['value'] : '';if (!upw19['multiline']) {
          if (fu5do4['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }upw19['text'] = fu5do4, upw19['event']('input');
      });
    }, lv73['inputEnter'] = function () {
      jyic['inputElement']['target']['focus'] = ![];
    }, lv73['wxinputblur'] = function () {
      lv73['hideKeyboard']();
    }, lv73['hideKeyboard'] = function () {
      o4ud['window']['wx']['offKeyboardConfirm'](), o4ud['window']['wx']['offKeyboardInput'](), o4ud['window']['wx']['hideKeyboard']({ 'success': function (mzn_sr) {
          console['log']('隐藏键盘');
        }, 'fail': function ($q8le3) {
          console['log']('隐藏键盘出错:' + ($q8le3 ? $q8le3['errMsg'] : ''));
        } });
    }, lv73;
  }(),
      bixnzt = function () {
    function qsre_$() {}_rsmz(qsre_$, 'laya.wx.mini.MiniLoader');var $srz_ = qsre_$['prototype'];return $srz_['load'] = function (xbiyh, kv76l, f5ou4d, duow10, q8e3l$) {
      f5ou4d === void 0x0 && (f5ou4d = !![]), q8e3l$ === void 0x0 && (q8e3l$ = ![]);var ntbsmz = this;ntbsmz['_url'] = xbiyh;if (xbiyh['indexOf']('data:image') === 0x0) ntbsmz['_type'] = kv76l = 'image';else ntbsmz['_type'] = kv76l || (kv76l = ntbsmz['getTypeFromUrl'](xbiyh));ntbsmz['_cache'] = f5ou4d, ntbsmz['_data'] = null;var alv7k = 'ascii';if (xbiyh['indexOf']('.fnt') != -0x1) alv7k = 'utf8';else kv76l == 'arraybuffer' && (alv7k = '');;var r_mzns = _qe$['getFileExtension'](xbiyh);if (qsre_$['_fileTypeArr']['indexOf'](r_mzns) != -0x1) o4ud['EnvConfig']['load']['call'](this, xbiyh, kv76l, f5ou4d, duow10, q8e3l$);else {
        if (!_nsrz['getFileInfo'](xbiyh)) {
          if (xbiyh['indexOf']('layaNativeDir/') != -0x1) {
            if (o4ud['isZiYu']) {
              var yjchi2 = _nsrz['ziyuFileData'][xbiyh];ntbsmz['onLoaded'](yjchi2);return;
            } else {
              cosnole['log']('read read'), _nsrz['read'](xbiyh, alv7k, new q$el38(qsre_$, qsre_$['onReadNativeCallBack'], [alv7k, xbiyh, kv76l, f5ou4d, duow10, q8e3l$, ntbsmz]));return;
            }
          }if ($me_['rootPath'] == '') var elq$38 = xbiyh;else elq$38 = xbiyh['split']($me_['rootPath'])[0x0];xbiyh['indexOf']('http://') != -0x1 || xbiyh['indexOf']('https://') != -0x1 ? o4ud['EnvConfig']['load']['call'](ntbsmz, xbiyh, kv76l, f5ou4d, duow10, q8e3l$) : _nsrz['readFile'](elq$38, alv7k, new q$el38(qsre_$, qsre_$['onReadNativeCallBack'], [alv7k, xbiyh, kv76l, f5ou4d, duow10, q8e3l$, ntbsmz]), xbiyh);
        } else o4ud['EnvConfig']['load']['call'](this, xbiyh, kv76l, f5ou4d, duow10, q8e3l$);
      }
    }, $srz_['resMgrLoad'] = function (nzsmtb, sem$, x2tyh, uw0d1o, xtmzb, vl6, favk54) {
      x2tyh === void 0x0 && (x2tyh = 0x0), uw0d1o === void 0x0 && (uw0d1o = ![]), xtmzb === void 0x0 && (xtmzb = ![]), vl6 === void 0x0 && (vl6 = 0x0), favk54 === void 0x0 && (favk54 = 0x3), nzsmtb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nzsmtb), o4ud['EnvConfig']['resMgrLoad'](nzsmtb, (hicy, izxbnt, bznmr) => {
        qsre_$['prototype']['resMgrLoadCallBack'](hicy, izxbnt, bznmr, sem$);
      }, x2tyh, uw0d1o, xtmzb, vl6, favk54);
    }, $srz_['resMgrLoadCallBack'] = function (itxznb, $lq38, rbmns, wu0o1) {
      console['log']('buff:::', itxznb, rbmns, _nsrz['fileNativeDir'] + '///' + _nsrz['fileListName']), wu0o1(itxznb, $lq38, rbmns);
    }, $srz_['clearRes'] = function (d1f4u, sbnrm) {
      sbnrm === void 0x0 && (sbnrm = ![]);var xh2c = this;xh2c['clearRes'](d1f4u, sbnrm);var h2cji = _nsrz['getFileInfo'](d1f4u);if (h2cji && (d1f4u['indexOf']('http://') != -0x1 || d1f4u['indexOf']('https://') != -0x1)) {
        var u01wop = h2cji['md5'],
            g019 = _nsrz['getFileNativePath'](u01wop);_nsrz['remove'](g019);
      }
    }, qsre_$['onReadNativeCallBack'] = function (wu0p19, dfak54, bzsnmr, $_zsm, pw901, $e_s, l$q8e, _$re3q, s$r_eq) {
      $_zsm === void 0x0 && ($_zsm = !![]), $e_s === void 0x0 && ($e_s = ![]), _$re3q === void 0x0 && (_$re3q = 0x0);if (!_$re3q) {
        var $_srq;if (bzsnmr == 'json' || bzsnmr == 'atlas') $_srq = o4ud['getJson'](s$r_eq['data']);else bzsnmr == 'xml' ? $_srq = _qe$['parseXMLFromString'](s$r_eq['data']) : $_srq = s$r_eq['data'];l$q8e['onLoaded']($_srq), !o4ud['isZiYu'] && o4ud['isPosMsgYu'] && bzsnmr != 'arraybuffer' && wx['postMessage']({ 'url': dfak54, 'data': $_srq, 'isLoad': !![] });
      } else _$re3q == 0x1 && o4ud['EnvConfig']['load']['call'](l$q8e, dfak54, bzsnmr, $_zsm, pw901, $e_s);
    }, elq8$(qsre_$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qsre_$;
  }(),
      _nsrz = function (hixt2) {
    function ofkd54() {
      ofkd54['__super']['call'](this);;
    }return _rsmz(ofkd54, 'laya.wx.mini.MiniFileMgr', hixt2), ofkd54['isLoadFile'] = function (byhix) {
      return ofkd54['_fileTypeArr']['indexOf'](byhix) != -0x1 ? !![] : ![];
    }, ofkd54['getFileInfo'] = function (ak75) {
      var xyihbt = ak75['split']('?')[0x0],
          w1pu0 = ofkd54['filesListObj'][xyihbt];if (w1pu0 == null) return null;else return w1pu0;return null;
    }, ofkd54['onFileUpdate'] = function (zs$mr, zbixnt) {
      var q3e = zs$mr['split']('/'),
          hxbit = q3e[q3e['length'] - 0x1],
          a6vk7 = ofkd54['getFileInfo'](zbixnt);if (a6vk7 == null) ofkd54['onSaveFile'](zbixnt, hxbit);else {
        if (a6vk7['readyUrl'] != zbixnt) ofkd54['remove'](hxbit, zbixnt);
      }
    }, ofkd54['exits'] = function (uopw1, qesr$) {
      var mrz_s = ofkd54['getFileNativePath'](uopw1);ofkd54['fs']['getFileInfo']({ 'filePath': mrz_s, 'success': function (u0wp) {
          qesr$ != null && qesr$['runWith']([0x0, u0wp]);
        }, 'fail': function (mtzbnx) {
          qesr$ != null && qesr$['runWith']([0x1, mtzbnx]);
        } });
    }, ofkd54['read'] = function (wod1u0, izxt, nbsz, mzntbx) {
      izxt === void 0x0 && (izxt = 'ascill'), mzntbx === void 0x0 && (mzntbx = '');var nxbtzi;mzntbx != '' ? nxbtzi = ofkd54['getFileNativePath'](wod1u0) : nxbtzi = wod1u0, ofkd54['fs']['readFile']({ 'filePath': nxbtzi, 'encoding': izxt, 'success': function (f54od) {
          nbsz != null && nbsz['runWith']([0x0, f54od]);
        }, 'fail': function (wpg10) {
          if (wpg10 && mzntbx != '') ofkd54['down'](mzntbx, izxt, nbsz, mzntbx);else nbsz != null && nbsz['runWith']([0x1]);
        } });
    }, ofkd54['readNativeFile'] = function (p91wg, _e3$q8) {
      ofkd54['fs']['readFile']({ 'filePath': p91wg, 'encoding': '', 'success': function (af5k4d) {
          _e3$q8 != null && _e3$q8['runWith']([0x0]);
        }, 'fail': function (la67v) {
          _e3$q8 != null && _e3$q8['runWith']([0x1]);
        } });
    }, ofkd54['down'] = function (u19p0, d0o1uw, thxbiy, gp1w90) {
      d0o1uw === void 0x0 && (d0o1uw = 'ascill'), gp1w90 === void 0x0 && (gp1w90 = '');var od5k4 = ofkd54['getFileNativePath'](gp1w90),
          binzt = ofkd54['wxdown']({ 'url': u19p0, 'filePath': od5k4, 'success': function (wudo0) {
          if (wudo0['statusCode'] === 0xc8) ofkd54['readFile'](wudo0['filePath'], d0o1uw, thxbiy, gp1w90);
        }, 'fail': function (r_mzn) {
          thxbiy != null && thxbiy['runWith']([0x1, r_mzn]);
        } });binzt['onProgressUpdate'](function (x2iyht) {
        thxbiy != null && thxbiy['runWith']([0x2, x2iyht['progress']]);
      });
    }, ofkd54['readFile'] = function (_re, v7alk6, fa5k, d41fou) {
      v7alk6 === void 0x0 && (v7alk6 = 'ascill'), d41fou === void 0x0 && (d41fou = ''), ofkd54['fs']['readFile']({ 'filePath': _re, 'encoding': v7alk6, 'success': function (txyni) {
          if (_re['indexOf']('http://') != -0x1 || _re['indexOf']('https://') != -0x1) ofkd54['onFileUpdate'](_re, d41fou);fa5k != null && fa5k['runWith']([0x0, txyni]);
        }, 'fail': function (byxih) {
          if (byxih) fa5k != null && fa5k['runWith']([0x1, byxih]);
        } });
    }, ofkd54['downImg'] = function (wdou, hyb, nmz_) {
      nmz_ === void 0x0 && (nmz_ = '');var bnsrmz = ofkd54['wxdown']({ 'url': wdou, 'success': function (o0wdu1) {
          o0wdu1['statusCode'] === 0xc8 && ofkd54['copyFile'](o0wdu1['tempFilePath'], nmz_, hyb);
        }, 'fail': function (a7k6vl) {
          hyb != null && hyb['runWith']([0x1, a7k6vl]);
        } });
    }, ofkd54['copyFile'] = function (_sm$er, q83$e_, fvk57) {
      var xicyh2 = _sm$er['split']('/'),
          e3rq$ = xicyh2[xicyh2['length'] - 0x1],
          i2hc = q83$e_['split']('?')[0x0],
          nzxtm = ofkd54['getFileInfo'](q83$e_),
          _z$msr = ofkd54['getFileNativePath'](e3rq$);ofkd54['fs']['copyFile']({ 'srcPath': _sm$er, 'destPath': _z$msr, 'success': function (bzmts) {
          if (!nzxtm) ofkd54['onSaveFile'](q83$e_, e3rq$), fvk57 != null && fvk57['runWith']([0x0]);else {
            if (nzxtm['readyUrl'] != q83$e_) ofkd54['remove'](e3rq$, q83$e_, fvk57);
          }
        }, 'fail': function (o4u5d) {
          fvk57 != null && fvk57['runWith']([0x1, o4u5d]);
        } });
    }, ofkd54['getFileNativePath'] = function (k5af4d) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k5af4d;
    }, ofkd54['remove'] = function (_sre$m, dw01ou, av8l6) {
      dw01ou === void 0x0 && (dw01ou = '');var zmtxnb = ofkd54['getFileInfo'](dw01ou),
          d1uw0 = ofkd54['getFileNativePath'](zmtxnb['md5']);tzsbm['loader']['clearRes'](zmtxnb['readyUrl']), ofkd54['fs']['unlink']({ 'filePath': d1uw0, 'success': function (zmnbx) {
          if (dw01ou != '') ofkd54['onSaveFile'](dw01ou, _sre$m);av8l6 != null && av8l6['runWith']([0x0]);
        }, 'fail': function (u4o1f) {} });
    }, ofkd54['onSaveFile'] = function (l8q376, d4kf5o) {
      var msre_ = l8q376['split']('?')[0x0];ofkd54['filesListObj'][msre_] = { 'md5': d4kf5o, 'readyUrl': l8q376 }, ofkd54['fs']['writeFile']({ 'filePath': ofkd54['fileNativeDir'] + '/' + ofkd54['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ofkd54['filesListObj']), 'success': function (nrbmzs) {
          console['log']('写入测试测试成功：', nrbmzs);
        }, 'fail': function (hbyit) {
          console['log']('写入测试测试失败：', hbyit);
        } });
    }, ofkd54['existDir'] = function (odf4k5, nbxtzi) {
      ofkd54['fs']['mkdir']({ 'dirPath': odf4k5, 'success': function (bnxzmt) {
          nbxtzi != null && nbxtzi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (odw1u0) {
          if (odw1u0['errMsg']['indexOf']('file already exists') != -0x1) ofkd54['readSync'](ofkd54['fileListName'], 'utf8', nbxtzi);else nbxtzi != null && nbxtzi['runWith']([0x1, odw1u0]);
        } });
    }, ofkd54['readSync'] = function (_qr$es, e863, v57fka, j2chiy) {
      e863 === void 0x0 && (e863 = 'ascill'), j2chiy === void 0x0 && (j2chiy = '');var nbtzms = ofkd54['getFileNativePath'](_qr$es),
          _q8e3;try {
        _q8e3 = ofkd54['fs']['readFileSync'](nbtzms), v57fka != null && v57fka['runWith']([0x0, { 'data': _q8e3 }]);
      } catch (erq_$3) {
        v57fka != null && v57fka['runWith']([0x1]);
      }
    }, ofkd54['readCache'] = function () {}, ofkd54['writeCache'] = function (e8q$_3) {
      var xi2hcy = readyUrl['split']('?')[0x0];ofkd54['filesListObj'][xi2hcy] = { 'md5': md5Name, 'readyUrl': readyUrl }, ofkd54['fs']['writeFile']({ 'filePath': ofkd54['fileNativeDir'] + '/' + ofkd54['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ofkd54['filesListObj']), 'success': function (er$q) {}, 'fail': function (bnr) {} });
    }, ofkd54['setNativeFileDir'] = function (snzm_r) {
      ofkd54['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + snzm_r;
    }, ofkd54['filesListObj'] = {}, ofkd54['fileNativeDir'] = null, ofkd54['fileListName'] = 'layaairfiles.txt', ofkd54['ziyuFileData'] = {}, elq8$(ofkd54, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ofkd54;
  }(bnixty),
      al6v78 = function (iyh2cj) {
    function wdu0o1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], wdu0o1['__super']['call'](this), this['_sound'] = wdu0o1['_createSound']();
    }_rsmz(wdu0o1, 'laya.wx.mini.MiniSound', iyh2cj);var d4uf5o = wdu0o1['prototype'];return d4uf5o['load'] = function (g9w10p) {
      var f75kva = this;g9w10p = $me_['formatURL'](g9w10p), this['url'] = g9w10p;if (wdu0o1['_audioCache'][g9w10p]) {
        this['event']('complete');return;
      }function bmn() {
        if (wdu0o1['_null'] != undefined) f75kva['_sound']['onCanplay'](wdu0o1['_null']), f75kva['_sound']['onError'](wdu0o1['_null']);else try {
          f75kva['_sound']['onCanplay'](null), f75kva['_sound']['onError'](null), wdu0o1['_null'] = null;
        } catch (tixhy2) {
          console['warn']('[wxmini] _clearSound:' + tixhy2), f75kva['_sound']['onCanplay'](ixthyb), f75kva['_sound']['onError'](ixthyb), wdu0o1['_null'] = ixthyb;
        }
      }function bynitx() {
        bmn(), v8al6['loaded'] = !![], v8al6['event']('complete'), wdu0o1['_audioCache'][v8al6['url']] = v8al6;
      }function mnztx(w109pg) {
        console['error']('errCode=' + w109pg['errCode'] + '  errMsg=' + w109pg['errMsg']), bmn(), v8al6['event']('error');
      }function ixthyb() {}this['_sound']['onCanplay'](bynitx), this['_sound']['onError'](mnztx), this['_sound']['src'] = g9w10p;var v8al6 = this;
    }, d4uf5o['play'] = function (w109gp, ztxn) {
      w109gp === void 0x0 && (w109gp = 0x0), ztxn === void 0x0 && (ztxn = 0x0);var nsmr_z;if (this['url'] == e_$m['_tMusic']) {
        if (!wdu0o1['_musicAudio']) wdu0o1['_musicAudio'] = wdu0o1['_createSound']();nsmr_z = wdu0o1['_musicAudio'];
      } else nsmr_z = wdu0o1['_createSound']();nsmr_z['src'] = this['url'];var z_rm$ = new hc2yj(nsmr_z);return z_rm$['url'] = this['url'], z_rm$['loops'] = ztxn, z_rm$['startTime'] = w109gp, z_rm$['play'](), e_$m['addChannel'](z_rm$), z_rm$;
    }, d4uf5o['dispose'] = function () {
      var v7l = wdu0o1['_audioCache'][this['url']];v7l && (v7l['src'] = '', delete wdu0o1['_audioCache'][this['url']]);
    }, izbx(0x0, d4uf5o, 'duration', function () {
      return this['_sound']['duration'];
    }), wdu0o1['_createSound'] = function () {
      return wdu0o1['_id']++, o4ud['window']['wx']['createInnerAudioContext']();
    }, wdu0o1['_musicAudio'] = null, wdu0o1['_id'] = 0x0, wdu0o1['_audioCache'] = {}, wdu0o1['_null'] = undefined, wdu0o1;
  }(bnixty),
      hc2yj = function (kav5f) {
    function duw4o(wp09u1) {
      this['_audio'] = null, this['_onEnd'] = null, duw4o['__super']['call'](this), this['_audio'] = wp09u1, this['_onEnd'] = _qe$['bind'](this['__onEnd'], this), wp09u1['onEnded'](this['_onEnd']);
    }_rsmz(duw4o, 'laya.wx.mini.MiniSoundChannel', kav5f);var ms$rz_ = duw4o['prototype'];return ms$rz_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tzsbm['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ms$rz_['__onNull'] = function () {}, ms$rz_['play'] = function () {
      this['isStopped'] = ![], e_$m['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ms$rz_['stop'] = function () {
      this['isStopped'] = !![], e_$m['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (duw4o['_null'] != undefined) this['_audio']['onEnded'](duw4o['_null']);else try {
        this['_audio']['onEnded'](null), duw4o['_null'] = null;
      } catch (f45okd) {
        console['warn']('[wxmini] stop:' + f45okd), this['_audio']['onEnded'](_qe$['bind'](this['__onNull'], this)), duw4o['_null'] = _qe$['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ms$rz_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ms$rz_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], e_$m['addChannel'](this), this['_audio']['play']();
    }, izbx(0x0, ms$rz_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), izbx(0x0, ms$rz_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), izbx(0x0, ms$rz_, 'volume', function () {
      return 0x1;
    }, function (g0w1) {}), duw4o['_null'] = undefined, duw4o;
  }(w0up19);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var txybih in Laya) {
    var xt2yih = Laya[txybih];xt2yih && xt2yih['__isclass'] && (exports[txybih] = xt2yih);
  }
});