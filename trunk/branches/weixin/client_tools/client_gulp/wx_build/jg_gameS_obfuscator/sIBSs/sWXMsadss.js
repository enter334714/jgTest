var K = wx.$S;
(function (window, document, zkw9ov) {
  var kzw9c0 = zkw9ov['un'],
      yjgsp = zkw9ov['uns'],
      inmx = zkw9ov['static'],
      w_ic09 = zkw9ov['class'],
      xn7mt2 = zkw9ov['getset'],
      v9wkz = zkw9ov['__newvec'],
      zov93k = laya['utils']['Browser'],
      e4u$r = laya['events']['Event'],
      _cx0im = laya['events']['EventDispatcher'],
      qjgsp = laya['resource']['HTMLImage'],
      yphd5s = laya['utils']['Handler'],
      zu3rvo = laya['display']['Input'],
      vo3rzu = laya['net']['Loader'],
      xm2itn = laya['maths']['Matrix'],
      e3oru4 = laya['renders']['Render'],
      qh5pys = laya['utils']['RunDriver'],
      tnxm2 = laya['media']['Sound'],
      _0c9iw = laya['media']['SoundChannel'],
      nt2x7 = laya['media']['SoundManager'],
      p1gqj = laya['display']['Stage'],
      micx2_ = laya['net']['URL'],
      mixc0 = laya['utils']['Utils'],
      ysqpgj = function () {
    function o4ue3r() {}return w_ic09(o4ue3r, 'laya.wx.mini.MiniAdpter'), o4ue3r['getJson'] = function (hspd) {
      return JSON['parse'](hspd);
    }, o4ue3r['init'] = function (b816jg, h45$d) {
      b816jg === void 0x0 && (b816jg = ![]), h45$d === void 0x0 && (h45$d = ![]);if (o4ue3r['_inited']) return;o4ue3r['window'] = window;if (o4ue3r['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o4ue3r['_inited'] = !![], o4ue3r['isZiYu'] = h45$d, o4ue3r['isPosMsgYu'] = b816jg, o4ue3r['EnvConfig'] = {}, !o4ue3r['isZiYu'] && (d4$uea['setNativeFileDir']('/layaairGame'), d4$uea['existDir'](d4$uea['fileNativeDir'], yphd5s['create'](o4ue3r, o4ue3r['onMkdirCallBack']))), o4ue3r['window']['focus'] = function () {}, zkw9ov['getUrlPath'] = function () {}, o4ue3r['window']['logtime'] = function (eu3rvo) {}, o4ue3r['window']['alertTimeLog'] = function (or3vzk) {}, o4ue3r['window']['resetShareInfo'] = function () {}, o4ue3r['window']['CanvasRenderingContext2D'] = function () {}, o4ue3r['window']['CanvasRenderingContext2D']['prototype'] = o4ue3r['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o4ue3r['window']['document']['body']['appendChild'] = function () {}, o4ue3r['EnvConfig']['pixelRatioInt'] = 0x0, qh5pys['getPixelRatio'] = o4ue3r['pixelRatio'], o4ue3r['_preCreateElement'] = zov93k['createElement'], zov93k['createElement'] = o4ue3r['createElement'], qh5pys['createShaderCondition'] = o4ue3r['createShaderCondition'], mixc0['parseXMLFromString'] = o4ue3r['parseXMLFromString'], zu3rvo['_createInputElement'] = bqg8['_createInputElement'], o4ue3r['EnvConfig']['load'] = vo3rzu['prototype']['load'], vo3rzu['prototype']['load'] = ruevo['prototype']['load'], o4ue3r['isZiYu'] && b816jg && wx['onMessage'](function (_min) {
        _min['isLoad'] && (d4$uea['ziyuFileData'][_min['url']] = _min['data']);
      });
    }, o4ue3r['onMkdirCallBack'] = function (da45, uzor3) {
      if (!da45) d4$uea['filesListObj'] = JSON['parse'](uzor3['data']);
    }, o4ue3r['pixelRatio'] = function () {
      if (!o4ue3r['EnvConfig']['pixelRatioInt']) try {
        var vwokz9 = wx['getSystemInfoSync']();return o4ue3r['EnvConfig']['pixelRatioInt'] = vwokz9['pixelRatio'], vwokz9 = vwokz9, vwokz9['pixelRatio'];
      } catch (c2i_mx) {}return o4ue3r['EnvConfig']['pixelRatioInt'];
    }, o4ue3r['createElement'] = function (xi2ntm) {
      if (xi2ntm == 'canvas') {
        var zc9w0k;return o4ue3r['idx'] == 0x1 ? o4ue3r['isZiYu'] ? (zc9w0k = sharedCanvas, zc9w0k['style'] = {}) : zc9w0k = window['canvas'] : zc9w0k = window['wx']['createCanvas'](), o4ue3r['idx']++, zc9w0k;
      } else {
        if (xi2ntm == 'textarea' || xi2ntm == 'input') return o4ue3r['onCreateInput'](xi2ntm);else {
          if (xi2ntm == 'div') {
            var jpsqy = o4ue3r['_preCreateElement'](xi2ntm);return jpsqy['contains'] = function (r3zou) {
              return null;
            }, jpsqy['removeChild'] = function (b86jl1) {}, jpsqy;
          } else return o4ue3r['_preCreateElement'](xi2ntm);
        }
      }
    }, o4ue3r['onCreateInput'] = function (hy5s) {
      var yqsjpg = o4ue3r['_preCreateElement'](hy5s);return yqsjpg['focus'] = bqg8['wxinputFocus'], yqsjpg['blur'] = bqg8['wxinputblur'], yqsjpg['style'] = {}, yqsjpg['value'] = 0x0, yqsjpg['parentElement'] = {}, yqsjpg['placeholder'] = {}, yqsjpg['type'] = {}, yqsjpg['setColor'] = function (i0_) {}, yqsjpg['setType'] = function (s1gjp) {}, yqsjpg['setFontFace'] = function (vowk9z) {}, yqsjpg['addEventListener'] = function (b8j6l) {}, yqsjpg['contains'] = function (j81gq) {
        return null;
      }, yqsjpg['removeChild'] = function (shday) {}, yqsjpg;
    }, o4ue3r['createShaderCondition'] = function (sqg1pj) {
      var u3$re = this,
          b1q8j = function () {
        var xci_m0 = sqg1pj;return u3$re[sqg1pj['replace']('this.', '')];
      };return b1q8j;
    }, o4ue3r['EnvConfig'] = null, o4ue3r['window'] = null, o4ue3r['_preCreateElement'] = null, o4ue3r['_inited'] = ![], o4ue3r['wxRequest'] = null, o4ue3r['systemInfo'] = null, o4ue3r['version'] = '0.0.1', o4ue3r['isZiYu'] = ![], o4ue3r['isPosMsgYu'] = ![], o4ue3r['parseXMLFromString'] = function (gyhps) {
      var xnm2_i, mxic0;gyhps = gyhps['replace'](/>\s+</g, '><');try {
        xnm2_i = new window['Parser']['DOMParser']()['parseFromString'](gyhps, 'text/xml');
      } catch (jspg1q) {
        throw '需要引入xml解析库文件';
      }return xnm2_i;
    }, o4ue3r['idx'] = 0x1, o4ue3r;
  }(),
      i_x0m = function () {
    function $e4ad5() {}w_ic09($e4ad5, 'laya.wx.mini.MiniImage');var p5dyhs = $e4ad5['prototype'];return p5dyhs['_loadImage'] = function (jysgpq) {
      var yhp5q = this,
          mx2_c = ![];jysgpq['indexOf']('layaNativeDir/') == -0x1 && (mx2_c = !![], jysgpq = micx2_['formatURL'](jysgpq));if (!d4$uea['getFileInfo'](jysgpq)) {
        if (jysgpq['indexOf']('http://') != -0x1 || jysgpq['indexOf']('https://') != -0x1) d4$uea['downImg'](jysgpq, new yphd5s($e4ad5, $e4ad5['onDownImgCallBack'], [jysgpq, yhp5q]), jysgpq);else $e4ad5['onCreateImage'](jysgpq, yhp5q, !![]);
      } else $e4ad5['onCreateImage'](jysgpq, yhp5q, !mx2_c);
    }, $e4ad5['onDownImgCallBack'] = function (voz9kw, pdsyh5, a$ure) {
      if (!a$ure) $e4ad5['onCreateImage'](voz9kw, pdsyh5);else pdsyh5['onError'](null);
    }, $e4ad5['onCreateImage'] = function (k0, a4hd5, _0xcwi) {
      _0xcwi === void 0x0 && (_0xcwi = ![]);var jg8bq1;if (!_0xcwi) {
        var $a45de = d4$uea['getFileInfo'](k0),
            r4ae = $a45de['md5'];jg8bq1 = d4$uea['getFileNativePath'](r4ae);
      } else jg8bq1 = k0;if (a4hd5['imgCache'] == null) a4hd5['imgCache'] = {};var cx0_w;function d5h$y() {
        cx0_w['onload'] = null, cx0_w['onerror'] = null, delete a4hd5['imgCache'][k0];
      };var czk9w = function () {
        d5h$y(), a4hd5['onLoaded'](cx0_w);
      },
          c09zk = function () {
        d5h$y(), a4hd5['event']('error', 'Load image failed');
      };a4hd5['_type'] == 'nativeimage' ? (cx0_w = new zov93k['window']['Image'](), cx0_w['crossOrigin'] = '', cx0_w['onload'] = czk9w, cx0_w['onerror'] = c09zk, cx0_w['src'] = jg8bq1, a4hd5['imgCache'][k0] = cx0_w) : new qjgsp['create'](jg8bq1, { 'onload': czk9w, 'onerror': c09zk, 'onCreate': function ($3ru4e) {
          cx0_w = $3ru4e, a4hd5['imgCache'][k0] = $3ru4e;
        } });
    }, $e4ad5;
  }(),
      bqg8 = function () {
    function tm2inx() {}return w_ic09(tm2inx, 'laya.wx.mini.MiniInput'), tm2inx['_createInputElement'] = function () {
      zu3rvo['_initInput'](zu3rvo['area'] = zov93k['createElement']('textarea')), zu3rvo['_initInput'](zu3rvo['input'] = zov93k['createElement']('input')), zu3rvo['inputContainer'] = zov93k['createElement']('div'), zu3rvo['inputContainer']['style']['position'] = 'absolute', zu3rvo['inputContainer']['style']['zIndex'] = 0x186a0, zov93k['container']['appendChild'](zu3rvo['inputContainer']), zu3rvo['inputContainer']['setPos'] = function ($ura, qj1) {
        zu3rvo['inputContainer']['style']['left'] = $ura + 'px', zu3rvo['inputContainer']['style']['top'] = qj1 + 'px';
      }, zkw9ov['stage']['on']('resize', null, tm2inx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zwo) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), nt2x7['_soundClass'] = vzk3r, nt2x7['_musicClass'] = vzk3r;
    }, tm2inx['_onStageResize'] = function () {
      var jygqps = zkw9ov['stage']['_canvasTransform']['identity']();jygqps['scale'](zov93k['width'] / e3oru4['canvas']['width'] / qh5pys['getPixelRatio'](), zov93k['height'] / e3oru4['canvas']['height'] / qh5pys['getPixelRatio']());
    }, tm2inx['wxinputFocus'] = function (bjg8) {
      var shy5pq = zu3rvo['inputElement']['target'];if (shy5pq && !shy5pq['editable']) return;ysqpgj['window']['wx']['offKeyboardConfirm'](), ysqpgj['window']['wx']['offKeyboardInput'](), ysqpgj['window']['wx']['showKeyboard']({ 'defaultValue': shy5pq['text'], 'maxLength': shy5pq['maxChars'], 'multiple': shy5pq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hspqyg) {}, 'fail': function (okz9vw) {} }), ysqpgj['window']['wx']['onKeyboardConfirm'](function (xn_mi2) {
        var a4$hd5 = xn_mi2 ? xn_mi2['value'] : '';shy5pq['text'] = a4$hd5, shy5pq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ysqpgj['window']['wx']['onKeyboardInput'](function (ad5h$y) {
        var z93vko = ad5h$y ? ad5h$y['value'] : '';if (!shy5pq['multiline']) {
          if (z93vko['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }shy5pq['text'] = z93vko, shy5pq['event']('input');
      });
    }, tm2inx['inputEnter'] = function () {
      zu3rvo['inputElement']['target']['focus'] = ![];
    }, tm2inx['wxinputblur'] = function () {
      tm2inx['hideKeyboard']();
    }, tm2inx['hideKeyboard'] = function () {
      ysqpgj['window']['wx']['offKeyboardConfirm'](), ysqpgj['window']['wx']['offKeyboardInput'](), ysqpgj['window']['wx']['hideKeyboard']({ 'success': function (j1b86l) {
          console['log']('隐藏键盘');
        }, 'fail': function (qyphsg) {
          console['log']('隐藏键盘出错:' + (qyphsg ? qyphsg['errMsg'] : ''));
        } });
    }, tm2inx;
  }(),
      ruevo = function () {
    function d4$eau() {}w_ic09(d4$eau, 'laya.wx.mini.MiniLoader');var qj1gp = d4$eau['prototype'];return qj1gp['load'] = function (eoru3v, w09k, vok9, er, hayd5) {
      vok9 === void 0x0 && (vok9 = !![]), hayd5 === void 0x0 && (hayd5 = ![]);var a5h$ = this;a5h$['_url'] = eoru3v;if (eoru3v['indexOf']('data:image') === 0x0) a5h$['_type'] = w09k = 'image';else a5h$['_type'] = w09k || (w09k = a5h$['getTypeFromUrl'](eoru3v));a5h$['_cache'] = vok9, a5h$['_data'] = null;var hys5qp = 'ascii';if (eoru3v['indexOf']('.fnt') != -0x1) hys5qp = 'utf8';else w09k == 'arraybuffer' && (hys5qp = '');;var qgjsp1 = mixc0['getFileExtension'](eoru3v);if (d4$eau['_fileTypeArr']['indexOf'](qgjsp1) != -0x1) ysqpgj['EnvConfig']['load']['call'](this, eoru3v, w09k, vok9, er, hayd5);else {
        if (!d4$uea['getFileInfo'](eoru3v)) {
          if (eoru3v['indexOf']('layaNativeDir/') != -0x1) {
            if (ysqpgj['isZiYu']) {
              var $43eu = d4$uea['ziyuFileData'][eoru3v];a5h$['onLoaded']($43eu);return;
            } else {
              cosnole['log']('read read'), d4$uea['read'](eoru3v, hys5qp, new yphd5s(d4$eau, d4$eau['onReadNativeCallBack'], [hys5qp, eoru3v, w09k, vok9, er, hayd5, a5h$]));return;
            }
          }if (micx2_['rootPath'] == '') var z0v9 = eoru3v;else z0v9 = eoru3v['split'](micx2_['rootPath'])[0x0];eoru3v['indexOf']('http://') != -0x1 || eoru3v['indexOf']('https://') != -0x1 ? ysqpgj['EnvConfig']['load']['call'](a5h$, eoru3v, w09k, vok9, er, hayd5) : d4$uea['readFile'](z0v9, hys5qp, new yphd5s(d4$eau, d4$eau['onReadNativeCallBack'], [hys5qp, eoru3v, w09k, vok9, er, hayd5, a5h$]), eoru3v);
        } else ysqpgj['EnvConfig']['load']['call'](this, eoru3v, w09k, vok9, er, hayd5);
      }
    }, qj1gp['resMgrLoad'] = function (tx2im, eu$r4a, qgyshp, kcw, ok39, bf6, qysh5) {
      qgyshp === void 0x0 && (qgyshp = 0x0), kcw === void 0x0 && (kcw = ![]), ok39 === void 0x0 && (ok39 = ![]), bf6 === void 0x0 && (bf6 = 0x0), qysh5 === void 0x0 && (qysh5 = 0x3), tx2im['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tx2im), ysqpgj['EnvConfig']['resMgrLoad'](tx2im, (c_x0i, xni_2, ypq5) => {
        d4$eau['prototype']['resMgrLoadCallBack'](c_x0i, xni_2, ypq5, eu$r4a);
      }, qgyshp, kcw, ok39, bf6, qysh5);
    }, qj1gp['resMgrLoadCallBack'] = function (tm2x, sjqpy, mnx2_, gsyp) {
      console['log']('buff:::', tm2x, mnx2_, d4$uea['fileNativeDir'] + '///' + d4$uea['fileListName']), gsyp(tm2x, sjqpy, mnx2_);
    }, qj1gp['clearRes'] = function (okvr3z, c9kzw) {
      c9kzw === void 0x0 && (c9kzw = ![]);var $ydh5 = this;$ydh5['clearRes'](okvr3z, c9kzw);var jsyqgp = d4$uea['getFileInfo'](okvr3z);if (jsyqgp && (okvr3z['indexOf']('http://') != -0x1 || okvr3z['indexOf']('https://') != -0x1)) {
        var o9zwk = jsyqgp['md5'],
            w9vzk = d4$uea['getFileNativePath'](o9zwk);d4$uea['remove'](w9vzk);
      }
    }, d4$eau['onReadNativeCallBack'] = function (uzrvo3, nxi2tm, py5qh, ypg, xt2i, _i0, jypsqg, $yd5ah, ixm_c0) {
      ypg === void 0x0 && (ypg = !![]), _i0 === void 0x0 && (_i0 = ![]), $yd5ah === void 0x0 && ($yd5ah = 0x0);if (!$yd5ah) {
        var v3zrok;if (py5qh == 'json' || py5qh == 'atlas') v3zrok = ysqpgj['getJson'](ixm_c0['data']);else py5qh == 'xml' ? v3zrok = mixc0['parseXMLFromString'](ixm_c0['data']) : v3zrok = ixm_c0['data'];jypsqg['onLoaded'](v3zrok), !ysqpgj['isZiYu'] && ysqpgj['isPosMsgYu'] && py5qh != 'arraybuffer' && wx['postMessage']({ 'url': nxi2tm, 'data': v3zrok, 'isLoad': !![] });
      } else $yd5ah == 0x1 && ysqpgj['EnvConfig']['load']['call'](jypsqg, nxi2tm, py5qh, ypg, xt2i, _i0);
    }, inmx(d4$eau, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), d4$eau;
  }(),
      d4$uea = function (h$4a5) {
    function qp81gj() {
      qp81gj['__super']['call'](this);;
    }return w_ic09(qp81gj, 'laya.wx.mini.MiniFileMgr', h$4a5), qp81gj['isLoadFile'] = function (b61j) {
      return qp81gj['_fileTypeArr']['indexOf'](b61j) != -0x1 ? !![] : ![];
    }, qp81gj['getFileInfo'] = function ($ru3e) {
      var z9owv = $ru3e['split']('?')[0x0],
          i90c_w = qp81gj['filesListObj'][z9owv];if (i90c_w == null) return null;else return i90c_w;return null;
    }, qp81gj['onFileUpdate'] = function (rokv3z, u4dea$) {
      var kv09 = rokv3z['split']('/'),
          ovr3zk = kv09[kv09['length'] - 0x1],
          sydhp5 = qp81gj['getFileInfo'](u4dea$);if (sydhp5 == null) qp81gj['onSaveFile'](u4dea$, ovr3zk);else {
        if (sydhp5['readyUrl'] != u4dea$) qp81gj['remove'](ovr3zk, u4dea$);
      }
    }, qp81gj['exits'] = function (k0zc9w, phqsyg) {
      var _i0x = qp81gj['getFileNativePath'](k0zc9w);qp81gj['fs']['getFileInfo']({ 'filePath': _i0x, 'success': function (hdyp) {
          phqsyg != null && phqsyg['runWith']([0x0, hdyp]);
        }, 'fail': function (e3ur) {
          phqsyg != null && phqsyg['runWith']([0x1, e3ur]);
        } });
    }, qp81gj['read'] = function (phqy, nt7x2, sgyjp, cw0x_) {
      nt7x2 === void 0x0 && (nt7x2 = 'ascill'), cw0x_ === void 0x0 && (cw0x_ = '');var k9wvz;cw0x_ != '' ? k9wvz = qp81gj['getFileNativePath'](phqy) : k9wvz = phqy, qp81gj['fs']['readFile']({ 'filePath': k9wvz, 'encoding': nt7x2, 'success': function (n_2ix) {
          sgyjp != null && sgyjp['runWith']([0x0, n_2ix]);
        }, 'fail': function (kozrv) {
          if (kozrv && cw0x_ != '') qp81gj['down'](cw0x_, nt7x2, sgyjp, cw0x_);else sgyjp != null && sgyjp['runWith']([0x1]);
        } });
    }, qp81gj['readNativeFile'] = function (t72, xtn2i) {
      qp81gj['fs']['readFile']({ 'filePath': t72, 'encoding': '', 'success': function (j1p8qg) {
          xtn2i != null && xtn2i['runWith']([0x0]);
        }, 'fail': function (qypsjg) {
          xtn2i != null && xtn2i['runWith']([0x1]);
        } });
    }, qp81gj['down'] = function (hsgypq, g8q1b, $d5yha, jsgq) {
      g8q1b === void 0x0 && (g8q1b = 'ascill'), jsgq === void 0x0 && (jsgq = '');var bfl81 = qp81gj['getFileNativePath'](jsgq),
          ve3oru = qp81gj['wxdown']({ 'url': hsgypq, 'filePath': bfl81, 'success': function (kzvo3r) {
          if (kzvo3r['statusCode'] === 0xc8) qp81gj['readFile'](kzvo3r['filePath'], g8q1b, $d5yha, jsgq);
        }, 'fail': function (gbjq81) {
          $d5yha != null && $d5yha['runWith']([0x1, gbjq81]);
        } });ve3oru['onProgressUpdate'](function (hpyd) {
        $d5yha != null && $d5yha['runWith']([0x2, hpyd['progress']]);
      });
    }, qp81gj['readFile'] = function (h$a4d, h4$5, _wcxi0, ruae4) {
      h4$5 === void 0x0 && (h4$5 = 'ascill'), ruae4 === void 0x0 && (ruae4 = ''), qp81gj['fs']['readFile']({ 'filePath': h$a4d, 'encoding': h4$5, 'success': function (yda) {
          if (h$a4d['indexOf']('http://') != -0x1 || h$a4d['indexOf']('https://') != -0x1) qp81gj['onFileUpdate'](h$a4d, ruae4);_wcxi0 != null && _wcxi0['runWith']([0x0, yda]);
        }, 'fail': function (z90ck) {
          if (z90ck) _wcxi0 != null && _wcxi0['runWith']([0x1, z90ck]);
        } });
    }, qp81gj['downImg'] = function (m2nxt7, jygps, shpd) {
      shpd === void 0x0 && (shpd = '');var $ueda4 = qp81gj['wxdown']({ 'url': m2nxt7, 'success': function ($34eru) {
          $34eru['statusCode'] === 0xc8 && qp81gj['copyFile']($34eru['tempFilePath'], shpd, jygps);
        }, 'fail': function (c_im2x) {
          jygps != null && jygps['runWith']([0x1, c_im2x]);
        } });
    }, qp81gj['copyFile'] = function (e4$a, $da5yh, zwok9) {
      var dsphy = e4$a['split']('/'),
          mi2n = dsphy[dsphy['length'] - 0x1],
          spgqj1 = $da5yh['split']('?')[0x0],
          v3uoe = qp81gj['getFileInfo']($da5yh),
          xi2n_m = qp81gj['getFileNativePath'](mi2n);qp81gj['fs']['copyFile']({ 'srcPath': e4$a, 'destPath': xi2n_m, 'success': function (ovz93) {
          if (!v3uoe) qp81gj['onSaveFile']($da5yh, mi2n), zwok9 != null && zwok9['runWith']([0x0]);else {
            if (v3uoe['readyUrl'] != $da5yh) qp81gj['remove'](mi2n, $da5yh, zwok9);
          }
        }, 'fail': function (y5dahs) {
          zwok9 != null && zwok9['runWith']([0x1, y5dahs]);
        } });
    }, qp81gj['getFileNativePath'] = function (ypjgsq) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ypjgsq;
    }, qp81gj['remove'] = function (sy5qp, p8jg1, sygqph) {
      p8jg1 === void 0x0 && (p8jg1 = '');var gyjspq = qp81gj['getFileInfo'](p8jg1),
          da45e$ = qp81gj['getFileNativePath'](gyjspq['md5']);zkw9ov['loader']['clearRes'](gyjspq['readyUrl']), qp81gj['fs']['unlink']({ 'filePath': da45e$, 'success': function (ov3ure) {
          if (p8jg1 != '') qp81gj['onSaveFile'](p8jg1, sy5qp);sygqph != null && sygqph['runWith']([0x0]);
        }, 'fail': function (y5pds) {} });
    }, qp81gj['onSaveFile'] = function (xni2m, ea4d5) {
      var i_2c = xni2m['split']('?')[0x0];qp81gj['filesListObj'][i_2c] = { 'md5': ea4d5, 'readyUrl': xni2m }, qp81gj['fs']['writeFile']({ 'filePath': qp81gj['fileNativeDir'] + '/' + qp81gj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qp81gj['filesListObj']), 'success': function (wcxi_0) {
          console['log']('写入测试测试成功：', wcxi_0);
        }, 'fail': function (uo3re) {
          console['log']('写入测试测试失败：', uo3re);
        } });
    }, qp81gj['existDir'] = function (zw0ck9, v3k9zo) {
      qp81gj['fs']['mkdir']({ 'dirPath': zw0ck9, 'success': function (dhysp) {
          v3k9zo != null && v3k9zo['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g1jpq) {
          if (g1jpq['errMsg']['indexOf']('file already exists') != -0x1) qp81gj['readSync'](qp81gj['fileListName'], 'utf8', v3k9zo);else v3k9zo != null && v3k9zo['runWith']([0x1, g1jpq]);
        } });
    }, qp81gj['readSync'] = function (_iwcx0, ou3evr, gp1js, eu$4a) {
      ou3evr === void 0x0 && (ou3evr = 'ascill'), eu$4a === void 0x0 && (eu$4a = '');var du$ea = qp81gj['getFileNativePath'](_iwcx0),
          qpsyg;try {
        qpsyg = qp81gj['fs']['readFileSync'](du$ea), gp1js != null && gp1js['runWith']([0x0, { 'data': qpsyg }]);
      } catch (ae5$d4) {
        gp1js != null && gp1js['runWith']([0x1]);
      }
    }, qp81gj['readCache'] = function () {}, qp81gj['writeCache'] = function (gjqy) {
      var $4urea = readyUrl['split']('?')[0x0];qp81gj['filesListObj'][$4urea] = { 'md5': md5Name, 'readyUrl': readyUrl }, qp81gj['fs']['writeFile']({ 'filePath': qp81gj['fileNativeDir'] + '/' + qp81gj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qp81gj['filesListObj']), 'success': function (rv3koz) {}, 'fail': function (syphd5) {} });
    }, qp81gj['setNativeFileDir'] = function (vo3rzk) {
      qp81gj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vo3rzk;
    }, qp81gj['filesListObj'] = {}, qp81gj['fileNativeDir'] = null, qp81gj['fileListName'] = 'layaairfiles.txt', qp81gj['ziyuFileData'] = {}, inmx(qp81gj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qp81gj;
  }(_cx0im),
      vzk3r = function (ci0w_9) {
    function _2ixmc() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _2ixmc['__super']['call'](this), this['_sound'] = _2ixmc['_createSound']();
    }w_ic09(_2ixmc, 'laya.wx.mini.MiniSound', ci0w_9);var u3zro = _2ixmc['prototype'];return u3zro['load'] = function (lbf6) {
      var iwc09_ = this;lbf6 = micx2_['formatURL'](lbf6), this['url'] = lbf6;if (_2ixmc['_audioCache'][lbf6]) {
        this['event']('complete');return;
      }function $ruae() {
        if (_2ixmc['_null'] != undefined) iwc09_['_sound']['onCanplay'](_2ixmc['_null']), iwc09_['_sound']['onError'](_2ixmc['_null']);else try {
          iwc09_['_sound']['onCanplay'](null), iwc09_['_sound']['onError'](null), _2ixmc['_null'] = null;
        } catch (c9i) {
          console['warn']('[wxmini] _clearSound:' + c9i), iwc09_['_sound']['onCanplay'](uad4), iwc09_['_sound']['onError'](uad4), _2ixmc['_null'] = uad4;
        }
      }function j618gb() {
        $ruae(), z9wkov['loaded'] = !![], z9wkov['event']('complete'), _2ixmc['_audioCache'][z9wkov['url']] = z9wkov;
      }function zou3r(okv39) {
        console['error']('errCode=' + okv39['errCode'] + '  errMsg=' + okv39['errMsg']), $ruae(), z9wkov['event']('error');
      }function uad4() {}this['_sound']['onCanplay'](j618gb), this['_sound']['onError'](zou3r), this['_sound']['src'] = lbf6;var z9wkov = this;
    }, u3zro['play'] = function (jp81, _c2im) {
      jp81 === void 0x0 && (jp81 = 0x0), _c2im === void 0x0 && (_c2im = 0x0);var pyhs;if (this['url'] == nt2x7['_tMusic']) {
        if (!_2ixmc['_musicAudio']) _2ixmc['_musicAudio'] = _2ixmc['_createSound']();pyhs = _2ixmc['_musicAudio'];
      } else pyhs = _2ixmc['_createSound']();pyhs['src'] = this['url'];var bg18q = new i_c2mx(pyhs);return bg18q['url'] = this['url'], bg18q['loops'] = _c2im, bg18q['startTime'] = jp81, bg18q['play'](), nt2x7['addChannel'](bg18q), bg18q;
    }, u3zro['dispose'] = function () {
      var gsyqjp = _2ixmc['_audioCache'][this['url']];gsyqjp && (gsyqjp['src'] = '', delete _2ixmc['_audioCache'][this['url']]);
    }, xn7mt2(0x0, u3zro, 'duration', function () {
      return this['_sound']['duration'];
    }), _2ixmc['_createSound'] = function () {
      return _2ixmc['_id']++, ysqpgj['window']['wx']['createInnerAudioContext']();
    }, _2ixmc['_musicAudio'] = null, _2ixmc['_id'] = 0x0, _2ixmc['_audioCache'] = {}, _2ixmc['_null'] = undefined, _2ixmc;
  }(_cx0im),
      i_c2mx = function (inm2_x) {
    function d$4aue(cxm0_i) {
      this['_audio'] = null, this['_onEnd'] = null, d$4aue['__super']['call'](this), this['_audio'] = cxm0_i, this['_onEnd'] = mixc0['bind'](this['__onEnd'], this), cxm0_i['onEnded'](this['_onEnd']);
    }w_ic09(d$4aue, 'laya.wx.mini.MiniSoundChannel', inm2_x);var i_2nmx = d$4aue['prototype'];return i_2nmx['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zkw9ov['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, i_2nmx['__onNull'] = function () {}, i_2nmx['play'] = function () {
      this['isStopped'] = ![], nt2x7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, i_2nmx['stop'] = function () {
      this['isStopped'] = !![], nt2x7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (d$4aue['_null'] != undefined) this['_audio']['onEnded'](d$4aue['_null']);else try {
        this['_audio']['onEnded'](null), d$4aue['_null'] = null;
      } catch (jbq1g) {
        console['warn']('[wxmini] stop:' + jbq1g), this['_audio']['onEnded'](mixc0['bind'](this['__onNull'], this)), d$4aue['_null'] = mixc0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, i_2nmx['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, i_2nmx['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], nt2x7['addChannel'](this), this['_audio']['play']();
    }, xn7mt2(0x0, i_2nmx, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xn7mt2(0x0, i_2nmx, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xn7mt2(0x0, i_2nmx, 'volume', function () {
      return 0x1;
    }, function (e$u4ad) {}), d$4aue['_null'] = undefined, d$4aue;
  }(_0c9iw);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dh$5y in Laya) {
    var $yadh = Laya[dh$5y];$yadh && $yadh['__isclass'] && (exports[dh$5y] = $yadh);
  }
});