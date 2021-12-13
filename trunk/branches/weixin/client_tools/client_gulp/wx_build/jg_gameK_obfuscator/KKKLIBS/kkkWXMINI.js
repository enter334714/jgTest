var U = wx.$k;
(function (window, document, bwno) {
  var ihe7t6 = bwno['un'],
      n0voq = bwno['uns'],
      n1vq08 = bwno['static'],
      axbzo = bwno['class'],
      xluzb = bwno['getset'],
      e7ti = bwno['__newvec'],
      bvoz1 = laya['utils']['Browser'],
      kihs6 = laya['events']['Event'],
      q10n8v = laya['events']['EventDispatcher'],
      k6829 = laya['resource']['HTMLImage'],
      t74ij = laya['utils']['Handler'],
      rp3f = laya['display']['Input'],
      l$uaxd = laya['net']['Loader'],
      si6hek = laya['maths']['Matrix'],
      jm7t4 = laya['renders']['Render'],
      vo1 = laya['utils']['RunDriver'],
      wbvzx = laya['media']['Sound'],
      novwq = laya['media']['SoundChannel'],
      ejimt = laya['media']['SoundManager'],
      t7ijhe = laya['display']['Stage'],
      zauxbw = laya['net']['URL'],
      bxlu = laya['utils']['Utils'],
      s9hk2 = function () {
    function $_5dr() {}return axbzo($_5dr, 'laya.wx.mini.MiniAdpter'), $_5dr['getJson'] = function (r$_5pd) {
      return JSON['parse'](r$_5pd);
    }, $_5dr['init'] = function ($l_ur, waxzbo) {
      $l_ur === void 0x0 && ($l_ur = ![]), waxzbo === void 0x0 && (waxzbo = ![]);if ($_5dr['_inited']) return;$_5dr['window'] = window;if ($_5dr['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$_5dr['_inited'] = !![], $_5dr['isZiYu'] = waxzbo, $_5dr['isPosMsgYu'] = $l_ur, $_5dr['EnvConfig'] = {}, !$_5dr['isZiYu'] && (wno1v['setNativeFileDir']('/layaairGame'), wno1v['existDir'](wno1v['fileNativeDir'], t74ij['create']($_5dr, $_5dr['onMkdirCallBack']))), $_5dr['window']['focus'] = function () {}, bwno['getUrlPath'] = function () {}, $_5dr['window']['logtime'] = function (rlp) {}, $_5dr['window']['alertTimeLog'] = function (bxlauz) {}, $_5dr['window']['resetShareInfo'] = function () {}, $_5dr['window']['CanvasRenderingContext2D'] = function () {}, $_5dr['window']['CanvasRenderingContext2D']['prototype'] = $_5dr['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $_5dr['window']['document']['body']['appendChild'] = function () {}, $_5dr['EnvConfig']['pixelRatioInt'] = 0x0, vo1['getPixelRatio'] = $_5dr['pixelRatio'], $_5dr['_preCreateElement'] = bvoz1['createElement'], bvoz1['createElement'] = $_5dr['createElement'], vo1['createShaderCondition'] = $_5dr['createShaderCondition'], bxlu['parseXMLFromString'] = $_5dr['parseXMLFromString'], rp3f['_createInputElement'] = vqwno1['_createInputElement'], $_5dr['EnvConfig']['load'] = l$uaxd['prototype']['load'], l$uaxd['prototype']['load'] = xvbozw['prototype']['load'], $_5dr['isZiYu'] && $l_ur && wx['onMessage'](function (qnv1o0) {
        qnv1o0['isLoad'] && (wno1v['ziyuFileData'][qnv1o0['url']] = qnv1o0['data']);
      });
    }, $_5dr['onMkdirCallBack'] = function (v1wboz, k6hse) {
      if (!v1wboz) wno1v['filesListObj'] = JSON['parse'](k6hse['data']);
    }, $_5dr['pixelRatio'] = function () {
      if (!$_5dr['EnvConfig']['pixelRatioInt']) try {
        var ld$ur = wx['getSystemInfoSync']();return $_5dr['EnvConfig']['pixelRatioInt'] = ld$ur['pixelRatio'], ld$ur = ld$ur, ld$ur['pixelRatio'];
      } catch (r5_3gp) {}return $_5dr['EnvConfig']['pixelRatioInt'];
    }, $_5dr['createElement'] = function (a$) {
      if (a$ == 'canvas') {
        var bvn1w;return $_5dr['idx'] == 0x1 ? $_5dr['isZiYu'] ? (bvn1w = sharedCanvas, bvn1w['style'] = {}) : bvn1w = window['canvas'] : bvn1w = window['wx']['createCanvas'](), $_5dr['idx']++, bvn1w;
      } else {
        if (a$ == 'textarea' || a$ == 'input') return $_5dr['onCreateInput'](a$);else {
          if (a$ == 'div') {
            var vwbzo1 = $_5dr['_preCreateElement'](a$);return vwbzo1['contains'] = function (jihte7) {
              return null;
            }, vwbzo1['removeChild'] = function ($zxlu) {}, vwbzo1;
          } else return $_5dr['_preCreateElement'](a$);
        }
      }
    }, $_5dr['onCreateInput'] = function (prd3) {
      var zoba = $_5dr['_preCreateElement'](prd3);return zoba['focus'] = vqwno1['wxinputFocus'], zoba['blur'] = vqwno1['wxinputblur'], zoba['style'] = {}, zoba['value'] = 0x0, zoba['parentElement'] = {}, zoba['placeholder'] = {}, zoba['type'] = {}, zoba['setColor'] = function (awbuzx) {}, zoba['setType'] = function (grfp5) {}, zoba['setFontFace'] = function (s98k6) {}, zoba['addEventListener'] = function (t6ehk) {}, zoba['contains'] = function (z1) {
        return null;
      }, zoba['removeChild'] = function (vxoz) {}, zoba;
    }, $_5dr['createShaderCondition'] = function (l_d$rp) {
      var jhet7i = this,
          w1oqv = function () {
        var k6sehi = l_d$rp;return jhet7i[l_d$rp['replace']('this.', '')];
      };return w1oqv;
    }, $_5dr['EnvConfig'] = null, $_5dr['window'] = null, $_5dr['_preCreateElement'] = null, $_5dr['_inited'] = ![], $_5dr['wxRequest'] = null, $_5dr['systemInfo'] = null, $_5dr['version'] = '0.0.1', $_5dr['isZiYu'] = ![], $_5dr['isPosMsgYu'] = ![], $_5dr['parseXMLFromString'] = function (zbvow) {
      var onwq1v, azblu;zbvow = zbvow['replace'](/>\s+</g, '><');try {
        onwq1v = new window['Parser']['DOMParser']()['parseFromString'](zbvow, 'text/xml');
      } catch (frg3) {
        throw '需要引入xml解析库文件';
      }return onwq1v;
    }, $_5dr['idx'] = 0x1, $_5dr;
  }(),
      dulxa$ = function () {
    function he7t() {}axbzo(he7t, 'laya.wx.mini.MiniImage');var k9028 = he7t['prototype'];return k9028['_loadImage'] = function (ekht6) {
      var i7eht = this,
          ozvbx = ![];ekht6['indexOf']('layaNativeDir/') == -0x1 && (ozvbx = !![], ekht6 = zauxbw['formatURL'](ekht6));if (!wno1v['getFileInfo'](ekht6)) {
        if (ekht6['indexOf']('http://') != -0x1 || ekht6['indexOf']('https://') != -0x1) wno1v['downImg'](ekht6, new t74ij(he7t, he7t['onDownImgCallBack'], [ekht6, i7eht]), ekht6);else he7t['onCreateImage'](ekht6, i7eht, !![]);
      } else he7t['onCreateImage'](ekht6, i7eht, !ozvbx);
    }, he7t['onDownImgCallBack'] = function (fpgr3, tk6i, xob) {
      if (!xob) he7t['onCreateImage'](fpgr3, tk6i);else tk6i['onError'](null);
    }, he7t['onCreateImage'] = function (xwboz, p5rg3f, zboxw) {
      zboxw === void 0x0 && (zboxw = ![]);var ygcf5;if (!zboxw) {
        var pg3rf = wno1v['getFileInfo'](xwboz),
            xluad$ = pg3rf['md5'];ygcf5 = wno1v['getFileNativePath'](xluad$);
      } else ygcf5 = xwboz;if (p5rg3f['imgCache'] == null) p5rg3f['imgCache'] = {};var vn10q;function buzaxl() {
        vn10q['onload'] = null, vn10q['onerror'] = null, delete p5rg3f['imgCache'][xwboz];
      };var $lzua = function () {
        buzaxl(), p5rg3f['onLoaded'](vn10q);
      },
          oqwvn = function () {
        buzaxl(), p5rg3f['event']('error', 'Load image failed');
      };p5rg3f['_type'] == 'nativeimage' ? (vn10q = new bvoz1['window']['Image'](), vn10q['crossOrigin'] = '', vn10q['onload'] = $lzua, vn10q['onerror'] = oqwvn, vn10q['src'] = ygcf5, p5rg3f['imgCache'][xwboz] = vn10q) : new k6829['create'](ygcf5, { 'onload': $lzua, 'onerror': oqwvn, 'onCreate': function (r5dp$_) {
          vn10q = r5dp$_, p5rg3f['imgCache'][xwboz] = r5dp$_;
        } });
    }, he7t;
  }(),
      vqwno1 = function () {
    function $_lurd() {}return axbzo($_lurd, 'laya.wx.mini.MiniInput'), $_lurd['_createInputElement'] = function () {
      rp3f['_initInput'](rp3f['area'] = bvoz1['createElement']('textarea')), rp3f['_initInput'](rp3f['input'] = bvoz1['createElement']('input')), rp3f['inputContainer'] = bvoz1['createElement']('div'), rp3f['inputContainer']['style']['position'] = 'absolute', rp3f['inputContainer']['style']['zIndex'] = 0x186a0, bvoz1['container']['appendChild'](rp3f['inputContainer']), rp3f['inputContainer']['setPos'] = function (pr3g5, kthie) {
        rp3f['inputContainer']['style']['left'] = pr3g5 + 'px', rp3f['inputContainer']['style']['top'] = kthie + 'px';
      }, bwno['stage']['on']('resize', null, $_lurd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jhe7t) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ejimt['_soundClass'] = kshei6, ejimt['_musicClass'] = kshei6;
    }, $_lurd['_onStageResize'] = function () {
      var u_rd$ = bwno['stage']['_canvasTransform']['identity']();u_rd$['scale'](bvoz1['width'] / jm7t4['canvas']['width'] / vo1['getPixelRatio'](), bvoz1['height'] / jm7t4['canvas']['height'] / vo1['getPixelRatio']());
    }, $_lurd['wxinputFocus'] = function (d$r5p) {
      var u$azxl = rp3f['inputElement']['target'];if (u$azxl && !u$azxl['editable']) return;s9hk2['window']['wx']['offKeyboardConfirm'](), s9hk2['window']['wx']['offKeyboardInput'](), s9hk2['window']['wx']['showKeyboard']({ 'defaultValue': u$azxl['text'], 'maxLength': u$azxl['maxChars'], 'multiple': u$azxl['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (bzxowv) {}, 'fail': function (qnv180) {} }), s9hk2['window']['wx']['onKeyboardConfirm'](function (h2s69) {
        var cy3gf = h2s69 ? h2s69['value'] : '';u$azxl['text'] = cy3gf, u$azxl['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), s9hk2['window']['wx']['onKeyboardInput'](function (s809q) {
        var zbu = s809q ? s809q['value'] : '';if (!u$azxl['multiline']) {
          if (zbu['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }u$azxl['text'] = zbu, u$azxl['event']('input');
      });
    }, $_lurd['inputEnter'] = function () {
      rp3f['inputElement']['target']['focus'] = ![];
    }, $_lurd['wxinputblur'] = function () {
      $_lurd['hideKeyboard']();
    }, $_lurd['hideKeyboard'] = function () {
      s9hk2['window']['wx']['offKeyboardConfirm'](), s9hk2['window']['wx']['offKeyboardInput'](), s9hk2['window']['wx']['hideKeyboard']({ 'success': function (vwon1b) {
          console['log']('隐藏键盘');
        }, 'fail': function (zwbaxo) {
          console['log']('隐藏键盘出错:' + (zwbaxo ? zwbaxo['errMsg'] : ''));
        } });
    }, $_lurd;
  }(),
      xvbozw = function () {
    function zxobwv() {}axbzo(zxobwv, 'laya.wx.mini.MiniLoader');var owzvb = zxobwv['prototype'];return owzvb['load'] = function (bzo1w, pr5_g3, bvzo1, t4ji7m, fr3p5) {
      bvzo1 === void 0x0 && (bvzo1 = !![]), fr3p5 === void 0x0 && (fr3p5 = ![]);var ozwv1b = this;ozwv1b['_url'] = bzo1w;if (bzo1w['indexOf']('data:image') === 0x0) ozwv1b['_type'] = pr5_g3 = 'image';else ozwv1b['_type'] = pr5_g3 || (pr5_g3 = ozwv1b['getTypeFromUrl'](bzo1w));ozwv1b['_cache'] = bvzo1, ozwv1b['_data'] = null;var ht6kei = 'ascii';if (bzo1w['indexOf']('.fnt') != -0x1) ht6kei = 'utf8';else pr5_g3 == 'arraybuffer' && (ht6kei = '');;var zvwbo = bxlu['getFileExtension'](bzo1w);if (zxobwv['_fileTypeArr']['indexOf'](zvwbo) != -0x1) s9hk2['EnvConfig']['load']['call'](this, bzo1w, pr5_g3, bvzo1, t4ji7m, fr3p5);else {
        if (!wno1v['getFileInfo'](bzo1w)) {
          if (bzo1w['indexOf']('layaNativeDir/') != -0x1) {
            if (s9hk2['isZiYu']) {
              var t7jeim = wno1v['ziyuFileData'][bzo1w];ozwv1b['onLoaded'](t7jeim);return;
            } else {
              cosnole['log']('read read'), wno1v['read'](bzo1w, ht6kei, new t74ij(zxobwv, zxobwv['onReadNativeCallBack'], [ht6kei, bzo1w, pr5_g3, bvzo1, t4ji7m, fr3p5, ozwv1b]));return;
            }
          }if (zauxbw['rootPath'] == '') var s8k62 = bzo1w;else s8k62 = bzo1w['split'](zauxbw['rootPath'])[0x0];bzo1w['indexOf']('http://') != -0x1 || bzo1w['indexOf']('https://') != -0x1 ? s9hk2['EnvConfig']['load']['call'](ozwv1b, bzo1w, pr5_g3, bvzo1, t4ji7m, fr3p5) : wno1v['readFile'](s8k62, ht6kei, new t74ij(zxobwv, zxobwv['onReadNativeCallBack'], [ht6kei, bzo1w, pr5_g3, bvzo1, t4ji7m, fr3p5, ozwv1b]), bzo1w);
        } else s9hk2['EnvConfig']['load']['call'](this, bzo1w, pr5_g3, bvzo1, t4ji7m, fr3p5);
      }
    }, owzvb['resMgrLoad'] = function (s2kh9, bxozaw, bnvow, q0n21, q1n, $rd_p5, qs2) {
      bnvow === void 0x0 && (bnvow = 0x0), q0n21 === void 0x0 && (q0n21 = ![]), q1n === void 0x0 && (q1n = ![]), $rd_p5 === void 0x0 && ($rd_p5 = 0x0), qs2 === void 0x0 && (qs2 = 0x3), s2kh9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s2kh9), s9hk2['EnvConfig']['resMgrLoad'](s2kh9, (r5g3p_, bovz1, ud$) => {
        zxobwv['prototype']['resMgrLoadCallBack'](r5g3p_, bovz1, ud$, bxozaw);
      }, bnvow, q0n21, q1n, $rd_p5, qs2);
    }, owzvb['resMgrLoadCallBack'] = function (hk6s, oawbzx, r_d$5, mt4ij7) {
      console['log']('buff:::', hk6s, r_d$5, wno1v['fileNativeDir'] + '///' + wno1v['fileListName']), mt4ij7(hk6s, oawbzx, r_d$5);
    }, owzvb['clearRes'] = function (dr_ul$, sh2) {
      sh2 === void 0x0 && (sh2 = ![]);var ud$rl = this;ud$rl['clearRes'](dr_ul$, sh2);var bxzual = wno1v['getFileInfo'](dr_ul$);if (bxzual && (dr_ul$['indexOf']('http://') != -0x1 || dr_ul$['indexOf']('https://') != -0x1)) {
        var zablxu = bxzual['md5'],
            u$ax = wno1v['getFileNativePath'](zablxu);wno1v['remove'](u$ax);
      }
    }, zxobwv['onReadNativeCallBack'] = function ($ul, heij, d$la_u, nq1v8, p5f3, _a$du, uzax, q0on, e7t6h) {
      nq1v8 === void 0x0 && (nq1v8 = !![]), _a$du === void 0x0 && (_a$du = ![]), q0on === void 0x0 && (q0on = 0x0);if (!q0on) {
        var zovb1w;if (d$la_u == 'json' || d$la_u == 'atlas') zovb1w = s9hk2['getJson'](e7t6h['data']);else d$la_u == 'xml' ? zovb1w = bxlu['parseXMLFromString'](e7t6h['data']) : zovb1w = e7t6h['data'];uzax['onLoaded'](zovb1w), !s9hk2['isZiYu'] && s9hk2['isPosMsgYu'] && d$la_u != 'arraybuffer' && wx['postMessage']({ 'url': heij, 'data': zovb1w, 'isLoad': !![] });
      } else q0on == 0x1 && s9hk2['EnvConfig']['load']['call'](uzax, heij, d$la_u, nq1v8, p5f3, _a$du);
    }, n1vq08(zxobwv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zxobwv;
  }(),
      wno1v = function ($5r_p) {
    function ite76h() {
      ite76h['__super']['call'](this);;
    }return axbzo(ite76h, 'laya.wx.mini.MiniFileMgr', $5r_p), ite76h['isLoadFile'] = function (zlbxu) {
      return ite76h['_fileTypeArr']['indexOf'](zlbxu) != -0x1 ? !![] : ![];
    }, ite76h['getFileInfo'] = function (a_$ld) {
      var b1zvow = a_$ld['split']('?')[0x0],
          xwubza = ite76h['filesListObj'][b1zvow];if (xwubza == null) return null;else return xwubza;return null;
    }, ite76h['onFileUpdate'] = function (k29s, zu$ax) {
      var sq809 = k29s['split']('/'),
          jim47 = sq809[sq809['length'] - 0x1],
          h2s6 = ite76h['getFileInfo'](zu$ax);if (h2s6 == null) ite76h['onSaveFile'](zu$ax, jim47);else {
        if (h2s6['readyUrl'] != zu$ax) ite76h['remove'](jim47, zu$ax);
      }
    }, ite76h['exits'] = function (vn1o0q, r5$p) {
      var v0qo1 = ite76h['getFileNativePath'](vn1o0q);ite76h['fs']['getFileInfo']({ 'filePath': v0qo1, 'success': function (gp3_r) {
          r5$p != null && r5$p['runWith']([0x0, gp3_r]);
        }, 'fail': function ($_rpl) {
          r5$p != null && r5$p['runWith']([0x1, $_rpl]);
        } });
    }, ite76h['read'] = function (k98s62, ikh6se, hs9k, r$d5p_) {
      ikh6se === void 0x0 && (ikh6se = 'ascill'), r$d5p_ === void 0x0 && (r$d5p_ = '');var qno0v;r$d5p_ != '' ? qno0v = ite76h['getFileNativePath'](k98s62) : qno0v = k98s62, ite76h['fs']['readFile']({ 'filePath': qno0v, 'encoding': ikh6se, 'success': function (i7mjet) {
          hs9k != null && hs9k['runWith']([0x0, i7mjet]);
        }, 'fail': function (xz$la) {
          if (xz$la && r$d5p_ != '') ite76h['down'](r$d5p_, ikh6se, hs9k, r$d5p_);else hs9k != null && hs9k['runWith']([0x1]);
        } });
    }, ite76h['readNativeFile'] = function (jmie, o1wv) {
      ite76h['fs']['readFile']({ 'filePath': jmie, 'encoding': '', 'success': function (t6ike) {
          o1wv != null && o1wv['runWith']([0x0]);
        }, 'fail': function (d5pr) {
          o1wv != null && o1wv['runWith']([0x1]);
        } });
    }, ite76h['down'] = function (al_, v10nqo, j7it4m, ek9h6) {
      v10nqo === void 0x0 && (v10nqo = 'ascill'), ek9h6 === void 0x0 && (ek9h6 = '');var cgyf = ite76h['getFileNativePath'](ek9h6),
          hk6it = ite76h['wxdown']({ 'url': al_, 'filePath': cgyf, 'success': function (_5grp) {
          if (_5grp['statusCode'] === 0xc8) ite76h['readFile'](_5grp['filePath'], v10nqo, j7it4m, ek9h6);
        }, 'fail': function (_r$dlp) {
          j7it4m != null && j7it4m['runWith']([0x1, _r$dlp]);
        } });hk6it['onProgressUpdate'](function (r5d$) {
        j7it4m != null && j7it4m['runWith']([0x2, r5d$['progress']]);
      });
    }, ite76h['readFile'] = function (rf53, bwozv, te7hj, vwqo) {
      bwozv === void 0x0 && (bwozv = 'ascill'), vwqo === void 0x0 && (vwqo = ''), ite76h['fs']['readFile']({ 'filePath': rf53, 'encoding': bwozv, 'success': function (ax$uz) {
          if (rf53['indexOf']('http://') != -0x1 || rf53['indexOf']('https://') != -0x1) ite76h['onFileUpdate'](rf53, vwqo);te7hj != null && te7hj['runWith']([0x0, ax$uz]);
        }, 'fail': function (tmij) {
          if (tmij) te7hj != null && te7hj['runWith']([0x1, tmij]);
        } });
    }, ite76h['downImg'] = function (udl_r, rd$p_5, f5g3cy) {
      f5g3cy === void 0x0 && (f5g3cy = '');var vwbo1z = ite76h['wxdown']({ 'url': udl_r, 'success': function (_p5d$r) {
          _p5d$r['statusCode'] === 0xc8 && ite76h['copyFile'](_p5d$r['tempFilePath'], f5g3cy, rd$p_5);
        }, 'fail': function (d$_r) {
          rd$p_5 != null && rd$p_5['runWith']([0x1, d$_r]);
        } });
    }, ite76h['copyFile'] = function (i67eht, r5$_pd, em7t) {
      var mi7 = i67eht['split']('/'),
          zaxb = mi7[mi7['length'] - 0x1],
          wbvxoz = r5$_pd['split']('?')[0x0],
          wvoqn1 = ite76h['getFileInfo'](r5$_pd),
          p5g3rf = ite76h['getFileNativePath'](zaxb);ite76h['fs']['copyFile']({ 'srcPath': i67eht, 'destPath': p5g3rf, 'success': function (t7eh6i) {
          if (!wvoqn1) ite76h['onSaveFile'](r5$_pd, zaxb), em7t != null && em7t['runWith']([0x0]);else {
            if (wvoqn1['readyUrl'] != r5$_pd) ite76h['remove'](zaxb, r5$_pd, em7t);
          }
        }, 'fail': function ($lxu) {
          em7t != null && em7t['runWith']([0x1, $lxu]);
        } });
    }, ite76h['getFileNativePath'] = function (lzba) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lzba;
    }, ite76h['remove'] = function (s280k9, daulx$, hjt7ie) {
      daulx$ === void 0x0 && (daulx$ = '');var zauw = ite76h['getFileInfo'](daulx$),
          zau$ = ite76h['getFileNativePath'](zauw['md5']);bwno['loader']['clearRes'](zauw['readyUrl']), ite76h['fs']['unlink']({ 'filePath': zau$, 'success': function (ehit6k) {
          if (daulx$ != '') ite76h['onSaveFile'](daulx$, s280k9);hjt7ie != null && hjt7ie['runWith']([0x0]);
        }, 'fail': function (o1qwvn) {} });
    }, ite76h['onSaveFile'] = function (_g5p, q02n89) {
      var rp5_g = _g5p['split']('?')[0x0];ite76h['filesListObj'][rp5_g] = { 'md5': q02n89, 'readyUrl': _g5p }, ite76h['fs']['writeFile']({ 'filePath': ite76h['fileNativeDir'] + '/' + ite76h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ite76h['filesListObj']), 'success': function (bo1nw) {
          console['log']('写入测试测试成功：', bo1nw);
        }, 'fail': function (l$uad_) {
          console['log']('写入测试测试失败：', l$uad_);
        } });
    }, ite76h['existDir'] = function (o1bnvw, _l$ua) {
      ite76h['fs']['mkdir']({ 'dirPath': o1bnvw, 'success': function (xuwzba) {
          _l$ua != null && _l$ua['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (r_$dlp) {
          if (r_$dlp['errMsg']['indexOf']('file already exists') != -0x1) ite76h['readSync'](ite76h['fileListName'], 'utf8', _l$ua);else _l$ua != null && _l$ua['runWith']([0x1, r_$dlp]);
        } });
    }, ite76h['readSync'] = function (on0vq, k92s8, ualdx, obv1wn) {
      k92s8 === void 0x0 && (k92s8 = 'ascill'), obv1wn === void 0x0 && (obv1wn = '');var _5dpr = ite76h['getFileNativePath'](on0vq),
          n0o1;try {
        n0o1 = ite76h['fs']['readFileSync'](_5dpr), ualdx != null && ualdx['runWith']([0x0, { 'data': n0o1 }]);
      } catch (a$xuld) {
        ualdx != null && ualdx['runWith']([0x1]);
      }
    }, ite76h['readCache'] = function () {}, ite76h['writeCache'] = function (bzwao) {
      var ud_a = readyUrl['split']('?')[0x0];ite76h['filesListObj'][ud_a] = { 'md5': md5Name, 'readyUrl': readyUrl }, ite76h['fs']['writeFile']({ 'filePath': ite76h['fileNativeDir'] + '/' + ite76h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ite76h['filesListObj']), 'success': function (aoxw) {}, 'fail': function (fgr35) {} });
    }, ite76h['setNativeFileDir'] = function (q8n) {
      ite76h['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q8n;
    }, ite76h['filesListObj'] = {}, ite76h['fileNativeDir'] = null, ite76h['fileListName'] = 'layaairfiles.txt', ite76h['ziyuFileData'] = {}, n1vq08(ite76h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ite76h;
  }(q10n8v),
      kshei6 = function (n0o1v) {
    function owbz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], owbz['__super']['call'](this), this['_sound'] = owbz['_createSound']();
    }axbzo(owbz, 'laya.wx.mini.MiniSound', n0o1v);var xaud$ = owbz['prototype'];return xaud$['load'] = function (v1oz) {
      var k6eih = this;v1oz = zauxbw['formatURL'](v1oz), this['url'] = v1oz;if (owbz['_audioCache'][v1oz]) {
        this['event']('complete');return;
      }function hk69e() {
        if (owbz['_null'] != undefined) k6eih['_sound']['onCanplay'](owbz['_null']), k6eih['_sound']['onError'](owbz['_null']);else try {
          k6eih['_sound']['onCanplay'](null), k6eih['_sound']['onError'](null), owbz['_null'] = null;
        } catch (al$xuz) {
          console['warn']('[wxmini] _clearSound:' + al$xuz), k6eih['_sound']['onCanplay'](gpfc35), k6eih['_sound']['onError'](gpfc35), owbz['_null'] = gpfc35;
        }
      }function wqovn1() {
        hk69e(), zabo['loaded'] = !![], zabo['event']('complete'), owbz['_audioCache'][zabo['url']] = zabo;
      }function q8n12(lu$x) {
        console['error']('errCode=' + lu$x['errCode'] + '  errMsg=' + lu$x['errMsg']), hk69e(), zabo['event']('error');
      }function gpfc35() {}this['_sound']['onCanplay'](wqovn1), this['_sound']['onError'](q8n12), this['_sound']['src'] = v1oz;var zabo = this;
    }, xaud$['play'] = function (k96s82, q2n180) {
      k96s82 === void 0x0 && (k96s82 = 0x0), q2n180 === void 0x0 && (q2n180 = 0x0);var he7i6;if (this['url'] == ejimt['_tMusic']) {
        if (!owbz['_musicAudio']) owbz['_musicAudio'] = owbz['_createSound']();he7i6 = owbz['_musicAudio'];
      } else he7i6 = owbz['_createSound']();he7i6['src'] = this['url'];var $uxla = new e7h6(he7i6);return $uxla['url'] = this['url'], $uxla['loops'] = q2n180, $uxla['startTime'] = k96s82, $uxla['play'](), ejimt['addChannel']($uxla), $uxla;
    }, xaud$['dispose'] = function () {
      var skhe96 = owbz['_audioCache'][this['url']];skhe96 && (skhe96['src'] = '', delete owbz['_audioCache'][this['url']]);
    }, xluzb(0x0, xaud$, 'duration', function () {
      return this['_sound']['duration'];
    }), owbz['_createSound'] = function () {
      return owbz['_id']++, s9hk2['window']['wx']['createInnerAudioContext']();
    }, owbz['_musicAudio'] = null, owbz['_id'] = 0x0, owbz['_audioCache'] = {}, owbz['_null'] = undefined, owbz;
  }(q10n8v),
      e7h6 = function (zwbov1) {
    function r5p$(r5d3_) {
      this['_audio'] = null, this['_onEnd'] = null, r5p$['__super']['call'](this), this['_audio'] = r5d3_, this['_onEnd'] = bxlu['bind'](this['__onEnd'], this), r5d3_['onEnded'](this['_onEnd']);
    }axbzo(r5p$, 'laya.wx.mini.MiniSoundChannel', zwbov1);var onbw1 = r5p$['prototype'];return onbw1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (bwno['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, onbw1['__onNull'] = function () {}, onbw1['play'] = function () {
      this['isStopped'] = ![], ejimt['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, onbw1['stop'] = function () {
      this['isStopped'] = !![], ejimt['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (r5p$['_null'] != undefined) this['_audio']['onEnded'](r5p$['_null']);else try {
        this['_audio']['onEnded'](null), r5p$['_null'] = null;
      } catch (dr5_$) {
        console['warn']('[wxmini] stop:' + dr5_$), this['_audio']['onEnded'](bxlu['bind'](this['__onNull'], this)), r5p$['_null'] = bxlu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, onbw1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, onbw1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ejimt['addChannel'](this), this['_audio']['play']();
    }, xluzb(0x0, onbw1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xluzb(0x0, onbw1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xluzb(0x0, onbw1, 'volume', function () {
      return 0x1;
    }, function (i4t) {}), r5p$['_null'] = undefined, r5p$;
  }(novwq);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ulxzb in Laya) {
    var zul$a = Laya[ulxzb];zul$a && zul$a['__isclass'] && (exports[ulxzb] = zul$a);
  }
});