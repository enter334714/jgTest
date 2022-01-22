var U = wx.$k;
(function (window, document, auxl) {
  var zbv1wo = auxl['un'],
      jei = auxl['uns'],
      keh6is = auxl['static'],
      cf3yg = auxl['class'],
      m7i4j = auxl['getset'],
      zvxbow = auxl['__newvec'],
      ikes = laya['utils']['Browser'],
      bwoa = laya['events']['Event'],
      t7me = laya['events']['EventDispatcher'],
      tehj = laya['resource']['HTMLImage'],
      kh9s = laya['utils']['Handler'],
      n9028 = laya['display']['Input'],
      g5cp3 = laya['net']['Loader'],
      uxbzla = laya['maths']['Matrix'],
      o1v0qn = laya['renders']['Render'],
      heikt6 = laya['utils']['RunDriver'],
      vzwbo = laya['media']['Sound'],
      ud$xa = laya['media']['SoundChannel'],
      obnwv = laya['media']['SoundManager'],
      w1ovqn = laya['display']['Stage'],
      pg53cf = laya['net']['URL'],
      nq0o1 = laya['utils']['Utils'],
      ovbn1w = function () {
    function al$zxu() {}return cf3yg(al$zxu, 'laya.wx.mini.MiniAdpter'), al$zxu['getJson'] = function (khs69e) {
      return JSON['parse'](khs69e);
    }, al$zxu['init'] = function (cgf5, ijme7t) {
      cgf5 === void 0x0 && (cgf5 = ![]), ijme7t === void 0x0 && (ijme7t = ![]);if (al$zxu['_inited']) return;al$zxu['window'] = window;if (al$zxu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;al$zxu['_inited'] = !![], al$zxu['isZiYu'] = ijme7t, al$zxu['isPosMsgYu'] = cgf5, al$zxu['EnvConfig'] = {}, !al$zxu['isZiYu'] && (p_35rd['setNativeFileDir']('/layaairGame'), p_35rd['existDir'](p_35rd['fileNativeDir'], kh9s['create'](al$zxu, al$zxu['onMkdirCallBack']))), al$zxu['window']['focus'] = function () {}, auxl['getUrlPath'] = function () {}, al$zxu['window']['logtime'] = function (gyf5) {}, al$zxu['window']['alertTimeLog'] = function (it4m7j) {}, al$zxu['window']['resetShareInfo'] = function () {}, al$zxu['window']['CanvasRenderingContext2D'] = function () {}, al$zxu['window']['CanvasRenderingContext2D']['prototype'] = al$zxu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], al$zxu['window']['document']['body']['appendChild'] = function () {}, al$zxu['EnvConfig']['pixelRatioInt'] = 0x0, heikt6['getPixelRatio'] = al$zxu['pixelRatio'], al$zxu['_preCreateElement'] = ikes['createElement'], ikes['createElement'] = al$zxu['createElement'], heikt6['createShaderCondition'] = al$zxu['createShaderCondition'], nq0o1['parseXMLFromString'] = al$zxu['parseXMLFromString'], n9028['_createInputElement'] = $_dla['_createInputElement'], al$zxu['EnvConfig']['load'] = g5cp3['prototype']['load'], g5cp3['prototype']['load'] = t6ihe7['prototype']['load'], al$zxu['isZiYu'] && cgf5 && wx['onMessage'](function (_u$r) {
        _u$r['isLoad'] && (p_35rd['ziyuFileData'][_u$r['url']] = _u$r['data']);
      });
    }, al$zxu['onMkdirCallBack'] = function (m4i, yfcg) {
      if (!m4i) p_35rd['filesListObj'] = JSON['parse'](yfcg['data']);
    }, al$zxu['pixelRatio'] = function () {
      if (!al$zxu['EnvConfig']['pixelRatioInt']) try {
        var iehks = wx['getSystemInfoSync']();return al$zxu['EnvConfig']['pixelRatioInt'] = iehks['pixelRatio'], iehks = iehks, iehks['pixelRatio'];
      } catch ($rd_l) {}return al$zxu['EnvConfig']['pixelRatioInt'];
    }, al$zxu['createElement'] = function (owazb) {
      if (owazb == 'canvas') {
        var es9;return al$zxu['idx'] == 0x1 ? al$zxu['isZiYu'] ? (es9 = sharedCanvas, es9['style'] = {}) : es9 = window['canvas'] : es9 = window['wx']['createCanvas'](), al$zxu['idx']++, es9;
      } else {
        if (owazb == 'textarea' || owazb == 'input') return al$zxu['onCreateInput'](owazb);else {
          if (owazb == 'div') {
            var zlbuxa = al$zxu['_preCreateElement'](owazb);return zlbuxa['contains'] = function (i7j) {
              return null;
            }, zlbuxa['removeChild'] = function (etim7j) {}, zlbuxa;
          } else return al$zxu['_preCreateElement'](owazb);
        }
      }
    }, al$zxu['onCreateInput'] = function (wboxz) {
      var ekit = al$zxu['_preCreateElement'](wboxz);return ekit['focus'] = $_dla['wxinputFocus'], ekit['blur'] = $_dla['wxinputblur'], ekit['style'] = {}, ekit['value'] = 0x0, ekit['parentElement'] = {}, ekit['placeholder'] = {}, ekit['type'] = {}, ekit['setColor'] = function (gycf53) {}, ekit['setType'] = function (f5rg) {}, ekit['setFontFace'] = function (d5r_) {}, ekit['addEventListener'] = function (alu_d$) {}, ekit['contains'] = function (q092) {
        return null;
      }, ekit['removeChild'] = function (d_3p) {}, ekit;
    }, al$zxu['createShaderCondition'] = function (ovwzx) {
      var ld_r$p = this,
          pr_$5d = function () {
        var xwbzov = ovwzx;return ld_r$p[ovwzx['replace']('this.', '')];
      };return pr_$5d;
    }, al$zxu['EnvConfig'] = null, al$zxu['window'] = null, al$zxu['_preCreateElement'] = null, al$zxu['_inited'] = ![], al$zxu['wxRequest'] = null, al$zxu['systemInfo'] = null, al$zxu['version'] = '0.0.1', al$zxu['isZiYu'] = ![], al$zxu['isPosMsgYu'] = ![], al$zxu['parseXMLFromString'] = function (dpr5_) {
      var pfgc3, ovnbw;dpr5_ = dpr5_['replace'](/>\s+</g, '><');try {
        pfgc3 = new window['Parser']['DOMParser']()['parseFromString'](dpr5_, 'text/xml');
      } catch (t7iej) {
        throw '需要引入xml解析库文件';
      }return pfgc3;
    }, al$zxu['idx'] = 0x1, al$zxu;
  }(),
      qn0892 = function () {
    function s9k08() {}cf3yg(s9k08, 'laya.wx.mini.MiniImage');var v01n8q = s9k08['prototype'];return v01n8q['_loadImage'] = function (d$_p5r) {
      var cgp5 = this,
          r3g5_ = ![];d$_p5r['indexOf']('layaNativeDir/') == -0x1 && (r3g5_ = !![], d$_p5r = pg53cf['formatURL'](d$_p5r));if (!p_35rd['getFileInfo'](d$_p5r)) {
        if (d$_p5r['indexOf']('http://') != -0x1 || d$_p5r['indexOf']('https://') != -0x1) p_35rd['downImg'](d$_p5r, new kh9s(s9k08, s9k08['onDownImgCallBack'], [d$_p5r, cgp5]), d$_p5r);else s9k08['onCreateImage'](d$_p5r, cgp5, !![]);
      } else s9k08['onCreateImage'](d$_p5r, cgp5, !r3g5_);
    }, s9k08['onDownImgCallBack'] = function (p_gr5, _r5d$p, d$lux) {
      if (!d$lux) s9k08['onCreateImage'](p_gr5, _r5d$p);else _r5d$p['onError'](null);
    }, s9k08['onCreateImage'] = function (lxzbu, wv1bn, r_3p5d) {
      r_3p5d === void 0x0 && (r_3p5d = ![]);var ks6h92;if (!r_3p5d) {
        var n0812 = p_35rd['getFileInfo'](lxzbu),
            p5_3 = n0812['md5'];ks6h92 = p_35rd['getFileNativePath'](p5_3);
      } else ks6h92 = lxzbu;if (wv1bn['imgCache'] == null) wv1bn['imgCache'] = {};var xowzba;function nv01() {
        xowzba['onload'] = null, xowzba['onerror'] = null, delete wv1bn['imgCache'][lxzbu];
      };var k98s2 = function () {
        nv01(), wv1bn['onLoaded'](xowzba);
      },
          s0k89 = function () {
        nv01(), wv1bn['event']('error', 'Load image failed');
      };wv1bn['_type'] == 'nativeimage' ? (xowzba = new ikes['window']['Image'](), xowzba['crossOrigin'] = '', xowzba['onload'] = k98s2, xowzba['onerror'] = s0k89, xowzba['src'] = ks6h92, wv1bn['imgCache'][lxzbu] = xowzba) : new tehj['create'](ks6h92, { 'onload': k98s2, 'onerror': s0k89, 'onCreate': function (obvwzx) {
          xowzba = obvwzx, wv1bn['imgCache'][lxzbu] = obvwzx;
        } });
    }, s9k08;
  }(),
      $_dla = function () {
    function oxzbwv() {}return cf3yg(oxzbwv, 'laya.wx.mini.MiniInput'), oxzbwv['_createInputElement'] = function () {
      n9028['_initInput'](n9028['area'] = ikes['createElement']('textarea')), n9028['_initInput'](n9028['input'] = ikes['createElement']('input')), n9028['inputContainer'] = ikes['createElement']('div'), n9028['inputContainer']['style']['position'] = 'absolute', n9028['inputContainer']['style']['zIndex'] = 0x186a0, ikes['container']['appendChild'](n9028['inputContainer']), n9028['inputContainer']['setPos'] = function (q0812n, vwoxb) {
        n9028['inputContainer']['style']['left'] = q0812n + 'px', n9028['inputContainer']['style']['top'] = vwoxb + 'px';
      }, auxl['stage']['on']('resize', null, oxzbwv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (q01o) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), obnwv['_soundClass'] = r5gp3, obnwv['_musicClass'] = r5gp3;
    }, oxzbwv['_onStageResize'] = function () {
      var $ulaz = auxl['stage']['_canvasTransform']['identity']();$ulaz['scale'](ikes['width'] / o1v0qn['canvas']['width'] / heikt6['getPixelRatio'](), ikes['height'] / o1v0qn['canvas']['height'] / heikt6['getPixelRatio']());
    }, oxzbwv['wxinputFocus'] = function (g3c5) {
      var n1ovq0 = n9028['inputElement']['target'];if (n1ovq0 && !n1ovq0['editable']) return;ovbn1w['window']['wx']['offKeyboardConfirm'](), ovbn1w['window']['wx']['offKeyboardInput'](), ovbn1w['window']['wx']['showKeyboard']({ 'defaultValue': n1ovq0['text'], 'maxLength': n1ovq0['maxChars'], 'multiple': n1ovq0['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (j7time) {}, 'fail': function (s9k682) {} }), ovbn1w['window']['wx']['onKeyboardConfirm'](function (pfr35g) {
        var tme7j = pfr35g ? pfr35g['value'] : '';n1ovq0['text'] = tme7j, n1ovq0['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ovbn1w['window']['wx']['onKeyboardInput'](function (ud_lr$) {
        var udl$xa = ud_lr$ ? ud_lr$['value'] : '';if (!n1ovq0['multiline']) {
          if (udl$xa['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n1ovq0['text'] = udl$xa, n1ovq0['event']('input');
      });
    }, oxzbwv['inputEnter'] = function () {
      n9028['inputElement']['target']['focus'] = ![];
    }, oxzbwv['wxinputblur'] = function () {
      oxzbwv['hideKeyboard']();
    }, oxzbwv['hideKeyboard'] = function () {
      ovbn1w['window']['wx']['offKeyboardConfirm'](), ovbn1w['window']['wx']['offKeyboardInput'](), ovbn1w['window']['wx']['hideKeyboard']({ 'success': function (jt7eim) {
          console['log']('隐藏键盘');
        }, 'fail': function (htej7) {
          console['log']('隐藏键盘出错:' + (htej7 ? htej7['errMsg'] : ''));
        } });
    }, oxzbwv;
  }(),
      t6ihe7 = function () {
    function zl$xau() {}cf3yg(zl$xau, 'laya.wx.mini.MiniLoader');var _alu$ = zl$xau['prototype'];return _alu$['load'] = function (shi6e, q9s028, e7tijm, $lpdr, k6es9) {
      e7tijm === void 0x0 && (e7tijm = !![]), k6es9 === void 0x0 && (k6es9 = ![]);var nq1082 = this;nq1082['_url'] = shi6e;if (shi6e['indexOf']('data:image') === 0x0) nq1082['_type'] = q9s028 = 'image';else nq1082['_type'] = q9s028 || (q9s028 = nq1082['getTypeFromUrl'](shi6e));nq1082['_cache'] = e7tijm, nq1082['_data'] = null;var uzx = 'ascii';if (shi6e['indexOf']('.fnt') != -0x1) uzx = 'utf8';else q9s028 == 'arraybuffer' && (uzx = '');;var wvoqn = nq0o1['getFileExtension'](shi6e);if (zl$xau['_fileTypeArr']['indexOf'](wvoqn) != -0x1) ovbn1w['EnvConfig']['load']['call'](this, shi6e, q9s028, e7tijm, $lpdr, k6es9);else {
        if (!p_35rd['getFileInfo'](shi6e)) {
          if (shi6e['indexOf']('layaNativeDir/') != -0x1) {
            if (ovbn1w['isZiYu']) {
              var h29k = p_35rd['ziyuFileData'][shi6e];nq1082['onLoaded'](h29k);return;
            } else {
              cosnole['log']('read read'), p_35rd['read'](shi6e, uzx, new kh9s(zl$xau, zl$xau['onReadNativeCallBack'], [uzx, shi6e, q9s028, e7tijm, $lpdr, k6es9, nq1082]));return;
            }
          }if (pg53cf['rootPath'] == '') var s892q0 = shi6e;else s892q0 = shi6e['split'](pg53cf['rootPath'])[0x0];shi6e['indexOf']('http://') != -0x1 || shi6e['indexOf']('https://') != -0x1 ? ovbn1w['EnvConfig']['load']['call'](nq1082, shi6e, q9s028, e7tijm, $lpdr, k6es9) : p_35rd['readFile'](s892q0, uzx, new kh9s(zl$xau, zl$xau['onReadNativeCallBack'], [uzx, shi6e, q9s028, e7tijm, $lpdr, k6es9, nq1082]), shi6e);
        } else ovbn1w['EnvConfig']['load']['call'](this, shi6e, q9s028, e7tijm, $lpdr, k6es9);
      }
    }, _alu$['resMgrLoad'] = function (rldu$_, n0q281, owvxbz, wzua, zxowvb, alxu$z, xlzu$) {
      owvxbz === void 0x0 && (owvxbz = 0x0), wzua === void 0x0 && (wzua = ![]), zxowvb === void 0x0 && (zxowvb = ![]), alxu$z === void 0x0 && (alxu$z = 0x0), xlzu$ === void 0x0 && (xlzu$ = 0x3), rldu$_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rldu$_), ovbn1w['EnvConfig']['resMgrLoad'](rldu$_, (eh6itk, c3fg5y, w1noq) => {
        zl$xau['prototype']['resMgrLoadCallBack'](eh6itk, c3fg5y, w1noq, n0q281);
      }, owvxbz, wzua, zxowvb, alxu$z, xlzu$);
    }, _alu$['resMgrLoadCallBack'] = function (l$xzau, bov1nw, i6ehkt, jm7tie) {
      console['log']('buff:::', l$xzau, i6ehkt, p_35rd['fileNativeDir'] + '///' + p_35rd['fileListName']), jm7tie(l$xzau, bov1nw, i6ehkt);
    }, _alu$['clearRes'] = function (dulr_$, r$d_p) {
      r$d_p === void 0x0 && (r$d_p = ![]);var cg = this;cg['clearRes'](dulr_$, r$d_p);var vbzxow = p_35rd['getFileInfo'](dulr_$);if (vbzxow && (dulr_$['indexOf']('http://') != -0x1 || dulr_$['indexOf']('https://') != -0x1)) {
        var s8290q = vbzxow['md5'],
            dlu = p_35rd['getFileNativePath'](s8290q);p_35rd['remove'](dlu);
      }
    }, zl$xau['onReadNativeCallBack'] = function (zvwbxo, teh6ki, ob1vw, daux$, ei6ksh, a$_dlu, ovzw1b, y3fc, k9h6es) {
      daux$ === void 0x0 && (daux$ = !![]), a$_dlu === void 0x0 && (a$_dlu = ![]), y3fc === void 0x0 && (y3fc = 0x0);if (!y3fc) {
        var $_uda;if (ob1vw == 'json' || ob1vw == 'atlas') $_uda = ovbn1w['getJson'](k9h6es['data']);else ob1vw == 'xml' ? $_uda = nq0o1['parseXMLFromString'](k9h6es['data']) : $_uda = k9h6es['data'];ovzw1b['onLoaded']($_uda), !ovbn1w['isZiYu'] && ovbn1w['isPosMsgYu'] && ob1vw != 'arraybuffer' && wx['postMessage']({ 'url': teh6ki, 'data': $_uda, 'isLoad': !![] });
      } else y3fc == 0x1 && ovbn1w['EnvConfig']['load']['call'](ovzw1b, teh6ki, ob1vw, daux$, ei6ksh, a$_dlu);
    }, keh6is(zl$xau, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zl$xau;
  }(),
      p_35rd = function ($luxad) {
    function axzl() {
      axzl['__super']['call'](this);;
    }return cf3yg(axzl, 'laya.wx.mini.MiniFileMgr', $luxad), axzl['isLoadFile'] = function (wovz) {
      return axzl['_fileTypeArr']['indexOf'](wovz) != -0x1 ? !![] : ![];
    }, axzl['getFileInfo'] = function ($xlz) {
      var hji7t = $xlz['split']('?')[0x0],
          n8vq10 = axzl['filesListObj'][hji7t];if (n8vq10 == null) return null;else return n8vq10;return null;
    }, axzl['onFileUpdate'] = function (sk8209, zvbx) {
      var r35pfg = sk8209['split']('/'),
          hkte6i = r35pfg[r35pfg['length'] - 0x1],
          zablux = axzl['getFileInfo'](zvbx);if (zablux == null) axzl['onSaveFile'](zvbx, hkte6i);else {
        if (zablux['readyUrl'] != zvbx) axzl['remove'](hkte6i, zvbx);
      }
    }, axzl['exits'] = function (s6h9k, t7heij) {
      var xvwo = axzl['getFileNativePath'](s6h9k);axzl['fs']['getFileInfo']({ 'filePath': xvwo, 'success': function (gfyc) {
          t7heij != null && t7heij['runWith']([0x0, gfyc]);
        }, 'fail': function (wzvoxb) {
          t7heij != null && t7heij['runWith']([0x1, wzvoxb]);
        } });
    }, axzl['read'] = function (p5r_3g, c3f5g, k6eit, axzul) {
      c3f5g === void 0x0 && (c3f5g = 'ascill'), axzul === void 0x0 && (axzul = '');var vwbzxo;axzul != '' ? vwbzxo = axzl['getFileNativePath'](p5r_3g) : vwbzxo = p5r_3g, axzl['fs']['readFile']({ 'filePath': vwbzxo, 'encoding': c3f5g, 'success': function (qv1o0) {
          k6eit != null && k6eit['runWith']([0x0, qv1o0]);
        }, 'fail': function (vq1wn) {
          if (vq1wn && axzul != '') axzl['down'](axzul, c3f5g, k6eit, axzul);else k6eit != null && k6eit['runWith']([0x1]);
        } });
    }, axzl['readNativeFile'] = function (al$ud, n28q) {
      axzl['fs']['readFile']({ 'filePath': al$ud, 'encoding': '', 'success': function (f5c3) {
          n28q != null && n28q['runWith']([0x0]);
        }, 'fail': function (pgfr) {
          n28q != null && n28q['runWith']([0x1]);
        } });
    }, axzl['down'] = function (q1208, lrud$, bvzo1, hie67t) {
      lrud$ === void 0x0 && (lrud$ = 'ascill'), hie67t === void 0x0 && (hie67t = '');var k890s = axzl['getFileNativePath'](hie67t),
          ejti = axzl['wxdown']({ 'url': q1208, 'filePath': k890s, 'success': function (d$rp) {
          if (d$rp['statusCode'] === 0xc8) axzl['readFile'](d$rp['filePath'], lrud$, bvzo1, hie67t);
        }, 'fail': function (fc3g) {
          bvzo1 != null && bvzo1['runWith']([0x1, fc3g]);
        } });ejti['onProgressUpdate'](function ($rdpl) {
        bvzo1 != null && bvzo1['runWith']([0x2, $rdpl['progress']]);
      });
    }, axzl['readFile'] = function (uxazl, xdau$, p5fgr3, g3rfp) {
      xdau$ === void 0x0 && (xdau$ = 'ascill'), g3rfp === void 0x0 && (g3rfp = ''), axzl['fs']['readFile']({ 'filePath': uxazl, 'encoding': xdau$, 'success': function (_l$u) {
          if (uxazl['indexOf']('http://') != -0x1 || uxazl['indexOf']('https://') != -0x1) axzl['onFileUpdate'](uxazl, g3rfp);p5fgr3 != null && p5fgr3['runWith']([0x0, _l$u]);
        }, 'fail': function (m47ti) {
          if (m47ti) p5fgr3 != null && p5fgr3['runWith']([0x1, m47ti]);
        } });
    }, axzl['downImg'] = function (dr$_p, dl_$u, bwovxz) {
      bwovxz === void 0x0 && (bwovxz = '');var s82k69 = axzl['wxdown']({ 'url': dr$_p, 'success': function (kesih6) {
          kesih6['statusCode'] === 0xc8 && axzl['copyFile'](kesih6['tempFilePath'], bwovxz, dl_$u);
        }, 'fail': function ($_d5pr) {
          dl_$u != null && dl_$u['runWith']([0x1, $_d5pr]);
        } });
    }, axzl['copyFile'] = function (r5d_p3, _rp53d, n018v) {
      var uzxlba = r5d_p3['split']('/'),
          ehi67t = uzxlba[uzxlba['length'] - 0x1],
          dl_$p = _rp53d['split']('?')[0x0],
          itm = axzl['getFileInfo'](_rp53d),
          ua_d = axzl['getFileNativePath'](ehi67t);axzl['fs']['copyFile']({ 'srcPath': r5d_p3, 'destPath': ua_d, 'success': function (boxwza) {
          if (!itm) axzl['onSaveFile'](_rp53d, ehi67t), n018v != null && n018v['runWith']([0x0]);else {
            if (itm['readyUrl'] != _rp53d) axzl['remove'](ehi67t, _rp53d, n018v);
          }
        }, 'fail': function (g53f) {
          n018v != null && n018v['runWith']([0x1, g53f]);
        } });
    }, axzl['getFileNativePath'] = function (fg53pc) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fg53pc;
    }, axzl['remove'] = function ($r5_d, ubxawz, $ulxd) {
      ubxawz === void 0x0 && (ubxawz = '');var te7h6 = axzl['getFileInfo'](ubxawz),
          ux$lad = axzl['getFileNativePath'](te7h6['md5']);auxl['loader']['clearRes'](te7h6['readyUrl']), axzl['fs']['unlink']({ 'filePath': ux$lad, 'success': function (pgfr53) {
          if (ubxawz != '') axzl['onSaveFile'](ubxawz, $r5_d);$ulxd != null && $ulxd['runWith']([0x0]);
        }, 'fail': function (v1o0qn) {} });
    }, axzl['onSaveFile'] = function (zboaw, t76) {
      var itj4m7 = zboaw['split']('?')[0x0];axzl['filesListObj'][itj4m7] = { 'md5': t76, 'readyUrl': zboaw }, axzl['fs']['writeFile']({ 'filePath': axzl['fileNativeDir'] + '/' + axzl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](axzl['filesListObj']), 'success': function (k6he9s) {
          console['log']('写入测试测试成功：', k6he9s);
        }, 'fail': function (_drp35) {
          console['log']('写入测试测试失败：', _drp35);
        } });
    }, axzl['existDir'] = function (v1nowb, vo01q) {
      axzl['fs']['mkdir']({ 'dirPath': v1nowb, 'success': function (xowzb) {
          vo01q != null && vo01q['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lpr_) {
          if (lpr_['errMsg']['indexOf']('file already exists') != -0x1) axzl['readSync'](axzl['fileListName'], 'utf8', vo01q);else vo01q != null && vo01q['runWith']([0x1, lpr_]);
        } });
    }, axzl['readSync'] = function (n1208q, $dlur_, gpr3_5, tike6) {
      $dlur_ === void 0x0 && ($dlur_ = 'ascill'), tike6 === void 0x0 && (tike6 = '');var j4im7t = axzl['getFileNativePath'](n1208q),
          no0vq;try {
        no0vq = axzl['fs']['readFileSync'](j4im7t), gpr3_5 != null && gpr3_5['runWith']([0x0, { 'data': no0vq }]);
      } catch (u$za) {
        gpr3_5 != null && gpr3_5['runWith']([0x1]);
      }
    }, axzl['readCache'] = function () {}, axzl['writeCache'] = function (oqn1w) {
      var r_dlu$ = readyUrl['split']('?')[0x0];axzl['filesListObj'][r_dlu$] = { 'md5': md5Name, 'readyUrl': readyUrl }, axzl['fs']['writeFile']({ 'filePath': axzl['fileNativeDir'] + '/' + axzl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](axzl['filesListObj']), 'success': function (khti) {}, 'fail': function (xlu) {} });
    }, axzl['setNativeFileDir'] = function (gf3r5) {
      axzl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gf3r5;
    }, axzl['filesListObj'] = {}, axzl['fileNativeDir'] = null, axzl['fileListName'] = 'layaairfiles.txt', axzl['ziyuFileData'] = {}, keh6is(axzl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), axzl;
  }(t7me),
      r5gp3 = function (owz1v) {
    function yfc3() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], yfc3['__super']['call'](this), this['_sound'] = yfc3['_createSound']();
    }cf3yg(yfc3, 'laya.wx.mini.MiniSound', owz1v);var ijm47t = yfc3['prototype'];return ijm47t['load'] = function (ih6te7) {
      var tih67e = this;ih6te7 = pg53cf['formatURL'](ih6te7), this['url'] = ih6te7;if (yfc3['_audioCache'][ih6te7]) {
        this['event']('complete');return;
      }function tihek() {
        if (yfc3['_null'] != undefined) tih67e['_sound']['onCanplay'](yfc3['_null']), tih67e['_sound']['onError'](yfc3['_null']);else try {
          tih67e['_sound']['onCanplay'](null), tih67e['_sound']['onError'](null), yfc3['_null'] = null;
        } catch (ti7h6) {
          console['warn']('[wxmini] _clearSound:' + ti7h6), tih67e['_sound']['onCanplay'](azbxo), tih67e['_sound']['onError'](azbxo), yfc3['_null'] = azbxo;
        }
      }function ublza() {
        tihek(), p5f3['loaded'] = !![], p5f3['event']('complete'), yfc3['_audioCache'][p5f3['url']] = p5f3;
      }function o0vqn(g3cf5p) {
        console['error']('errCode=' + g3cf5p['errCode'] + '  errMsg=' + g3cf5p['errMsg']), tihek(), p5f3['event']('error');
      }function azbxo() {}this['_sound']['onCanplay'](ublza), this['_sound']['onError'](o0vqn), this['_sound']['src'] = ih6te7;var p5f3 = this;
    }, ijm47t['play'] = function (alzu$x, s6k2h9) {
      alzu$x === void 0x0 && (alzu$x = 0x0), s6k2h9 === void 0x0 && (s6k2h9 = 0x0);var ti;if (this['url'] == obnwv['_tMusic']) {
        if (!yfc3['_musicAudio']) yfc3['_musicAudio'] = yfc3['_createSound']();ti = yfc3['_musicAudio'];
      } else ti = yfc3['_createSound']();ti['src'] = this['url'];var s9ehk6 = new obzxv(ti);return s9ehk6['url'] = this['url'], s9ehk6['loops'] = s6k2h9, s9ehk6['startTime'] = alzu$x, s9ehk6['play'](), obnwv['addChannel'](s9ehk6), s9ehk6;
    }, ijm47t['dispose'] = function () {
      var tji7eh = yfc3['_audioCache'][this['url']];tji7eh && (tji7eh['src'] = '', delete yfc3['_audioCache'][this['url']]);
    }, m7i4j(0x0, ijm47t, 'duration', function () {
      return this['_sound']['duration'];
    }), yfc3['_createSound'] = function () {
      return yfc3['_id']++, ovbn1w['window']['wx']['createInnerAudioContext']();
    }, yfc3['_musicAudio'] = null, yfc3['_id'] = 0x0, yfc3['_audioCache'] = {}, yfc3['_null'] = undefined, yfc3;
  }(t7me),
      obzxv = function (ksieh6) {
    function uxabz($xud) {
      this['_audio'] = null, this['_onEnd'] = null, uxabz['__super']['call'](this), this['_audio'] = $xud, this['_onEnd'] = nq0o1['bind'](this['__onEnd'], this), $xud['onEnded'](this['_onEnd']);
    }cf3yg(uxabz, 'laya.wx.mini.MiniSoundChannel', ksieh6);var xula$d = uxabz['prototype'];return xula$d['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (auxl['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xula$d['__onNull'] = function () {}, xula$d['play'] = function () {
      this['isStopped'] = ![], obnwv['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, xula$d['stop'] = function () {
      this['isStopped'] = !![], obnwv['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (uxabz['_null'] != undefined) this['_audio']['onEnded'](uxabz['_null']);else try {
        this['_audio']['onEnded'](null), uxabz['_null'] = null;
      } catch (mijt7) {
        console['warn']('[wxmini] stop:' + mijt7), this['_audio']['onEnded'](nq0o1['bind'](this['__onNull'], this)), uxabz['_null'] = nq0o1['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, xula$d['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, xula$d['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], obnwv['addChannel'](this), this['_audio']['play']();
    }, m7i4j(0x0, xula$d, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), m7i4j(0x0, xula$d, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), m7i4j(0x0, xula$d, 'volume', function () {
      return 0x1;
    }, function (k92hs6) {}), uxabz['_null'] = undefined, uxabz;
  }(ud$xa);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ks926h in Laya) {
    var bwuzxa = Laya[ks926h];bwuzxa && bwuzxa['__isclass'] && (exports[ks926h] = bwuzxa);
  }
});