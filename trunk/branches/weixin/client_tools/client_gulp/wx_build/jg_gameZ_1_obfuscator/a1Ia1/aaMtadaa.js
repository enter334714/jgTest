var C = wx.$a;
(function (window, document, ihobxt) {
  var j4td5i = ihobxt['un'],
      sz9cr_ = ihobxt['uns'],
      n3p82 = ihobxt['static'],
      n3ge82 = ihobxt['class'],
      eb2np = ihobxt['getset'],
      xo28bp = ihobxt['__newvec'],
      srlv = laya['utils']['Browser'],
      srv$c = laya['events']['Event'],
      y6lkf0 = laya['events']['EventDispatcher'],
      i5h4td = laya['resource']['HTMLImage'],
      px2hb = laya['utils']['Handler'],
      jm54zd = laya['display']['Input'],
      v$k0f = laya['net']['Loader'],
      tobx = laya['maths']['Matrix'],
      fy76k = laya['renders']['Render'],
      f07k6y = laya['utils']['RunDriver'],
      tji54 = laya['media']['Sound'],
      yl6f0 = laya['media']['SoundChannel'],
      otbih = laya['media']['SoundManager'],
      xtboi = laya['display']['Stage'],
      yuw761 = laya['net']['URL'],
      _sqrcv = laya['utils']['Utils'],
      iohtxb = function () {
    function dijm54() {}return n3ge82(dijm54, 'laya.wx.mini.MiniAdpter'), dijm54['getJson'] = function (w6u7y1) {
      return JSON['parse'](w6u7y1);
    }, dijm54['init'] = function (f670, l0vr$) {
      f670 === void 0x0 && (f670 = ![]), l0vr$ === void 0x0 && (l0vr$ = ![]);if (dijm54['_inited']) return;dijm54['window'] = window;if (dijm54['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;dijm54['_inited'] = !![], dijm54['isZiYu'] = l0vr$, dijm54['isPosMsgYu'] = f670, dijm54['EnvConfig'] = {}, !dijm54['isZiYu'] && (oihd['setNativeFileDir']('/layaairGame'), oihd['existDir'](oihd['fileNativeDir'], px2hb['create'](dijm54, dijm54['onMkdirCallBack']))), dijm54['window']['focus'] = function () {}, ihobxt['getUrlPath'] = function () {}, dijm54['window']['logtime'] = function (ufy76) {}, dijm54['window']['alertTimeLog'] = function (jm9z4d) {}, dijm54['window']['resetShareInfo'] = function () {}, dijm54['window']['CanvasRenderingContext2D'] = function () {}, dijm54['window']['CanvasRenderingContext2D']['prototype'] = dijm54['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dijm54['window']['document']['body']['appendChild'] = function () {}, dijm54['EnvConfig']['pixelRatioInt'] = 0x0, f07k6y['getPixelRatio'] = dijm54['pixelRatio'], dijm54['_preCreateElement'] = srlv['createElement'], srlv['createElement'] = dijm54['createElement'], f07k6y['createShaderCondition'] = dijm54['createShaderCondition'], _sqrcv['parseXMLFromString'] = dijm54['parseXMLFromString'], jm54zd['_createInputElement'] = uy17f['_createInputElement'], dijm54['EnvConfig']['load'] = v$k0f['prototype']['load'], v$k0f['prototype']['load'] = v0lqr$['prototype']['load'], dijm54['isZiYu'] && f670 && wx['onMessage'](function (czrs9) {
        czrs9['isLoad'] && (oihd['ziyuFileData'][czrs9['url']] = czrs9['data']);
      });
    }, dijm54['onMkdirCallBack'] = function (nbpe2, x8bpn) {
      if (!nbpe2) oihd['filesListObj'] = JSON['parse'](x8bpn['data']);
    }, dijm54['pixelRatio'] = function () {
      if (!dijm54['EnvConfig']['pixelRatioInt']) try {
        var c9zrs = wx['getSystemInfoSync']();return dijm54['EnvConfig']['pixelRatioInt'] = c9zrs['pixelRatio'], c9zrs = c9zrs, c9zrs['pixelRatio'];
      } catch (rvq$ls) {}return dijm54['EnvConfig']['pixelRatioInt'];
    }, dijm54['createElement'] = function (n23pe) {
      if (n23pe == 'canvas') {
        var xhi5ot;return dijm54['idx'] == 0x1 ? dijm54['isZiYu'] ? (xhi5ot = sharedCanvas, xhi5ot['style'] = {}) : xhi5ot = window['canvas'] : xhi5ot = window['wx']['createCanvas'](), dijm54['idx']++, xhi5ot;
      } else {
        if (n23pe == 'textarea' || n23pe == 'input') return dijm54['onCreateInput'](n23pe);else {
          if (n23pe == 'div') {
            var o5tihd = dijm54['_preCreateElement'](n23pe);return o5tihd['contains'] = function (rq$svl) {
              return null;
            }, o5tihd['removeChild'] = function (hopb2) {}, o5tihd;
          } else return dijm54['_preCreateElement'](n23pe);
        }
      }
    }, dijm54['onCreateInput'] = function (yklf0) {
      var zs9m_ = dijm54['_preCreateElement'](yklf0);return zs9m_['focus'] = uy17f['wxinputFocus'], zs9m_['blur'] = uy17f['wxinputblur'], zs9m_['style'] = {}, zs9m_['value'] = 0x0, zs9m_['parentElement'] = {}, zs9m_['placeholder'] = {}, zs9m_['type'] = {}, zs9m_['setColor'] = function (en382g) {}, zs9m_['setType'] = function (lky6f) {}, zs9m_['setFontFace'] = function (d49jzm) {}, zs9m_['addEventListener'] = function (i5j4dm) {}, zs9m_['contains'] = function (h5d4t) {
        return null;
      }, zs9m_['removeChild'] = function ($0rqlv) {}, zs9m_;
    }, dijm54['createShaderCondition'] = function (b2xn) {
      var lk$0 = this,
          e2g38n = function () {
        var o5hxt = b2xn;return lk$0[b2xn['replace']('this.', '')];
      };return e2g38n;
    }, dijm54['EnvConfig'] = null, dijm54['window'] = null, dijm54['_preCreateElement'] = null, dijm54['_inited'] = ![], dijm54['wxRequest'] = null, dijm54['systemInfo'] = null, dijm54['version'] = '0.0.1', dijm54['isZiYu'] = ![], dijm54['isPosMsgYu'] = ![], dijm54['parseXMLFromString'] = function (lv$0r) {
      var xibth, xph2;lv$0r = lv$0r['replace'](/>\s+</g, '><');try {
        xibth = new window['Parser']['DOMParser']()['parseFromString'](lv$0r, 'text/xml');
      } catch (f0l$yk) {
        throw '需要引入xml解析库文件';
      }return xibth;
    }, dijm54['idx'] = 0x1, dijm54;
  }(),
      jd54mz = function () {
    function r_csvq() {}n3ge82(r_csvq, 'laya.wx.mini.MiniImage');var tphox = r_csvq['prototype'];return tphox['_loadImage'] = function (optxbh) {
      var pb8n2 = this,
          b8ne2p = ![];optxbh['indexOf']('layaNativeDir/') == -0x1 && (b8ne2p = !![], optxbh = yuw761['formatURL'](optxbh));if (!oihd['getFileInfo'](optxbh)) {
        if (optxbh['indexOf']('http://') != -0x1 || optxbh['indexOf']('https://') != -0x1) oihd['downImg'](optxbh, new px2hb(r_csvq, r_csvq['onDownImgCallBack'], [optxbh, pb8n2]), optxbh);else r_csvq['onCreateImage'](optxbh, pb8n2, !![]);
      } else r_csvq['onCreateImage'](optxbh, pb8n2, !b8ne2p);
    }, r_csvq['onDownImgCallBack'] = function (_rcz9s, p8nb, vq$0k) {
      if (!vq$0k) r_csvq['onCreateImage'](_rcz9s, p8nb);else p8nb['onError'](null);
    }, r_csvq['onCreateImage'] = function (lv$0kf, obpxht, fk0lv) {
      fk0lv === void 0x0 && (fk0lv = ![]);var u7w1;if (!fk0lv) {
        var x2obh = oihd['getFileInfo'](lv$0kf),
            pxo8b = x2obh['md5'];u7w1 = oihd['getFileNativePath'](pxo8b);
      } else u7w1 = lv$0kf;if (obpxht['imgCache'] == null) obpxht['imgCache'] = {};var g2n3e;function q$rcs() {
        g2n3e['onload'] = null, g2n3e['onerror'] = null, delete obpxht['imgCache'][lv$0kf];
      };var klyf06 = function () {
        q$rcs(), obpxht['onLoaded'](g2n3e);
      },
          mj9z_c = function () {
        q$rcs(), obpxht['event']('error', 'Load image failed');
      };obpxht['_type'] == 'nativeimage' ? (g2n3e = new srlv['window']['Image'](), g2n3e['crossOrigin'] = '', g2n3e['onload'] = klyf06, g2n3e['onerror'] = mj9z_c, g2n3e['src'] = u7w1, obpxht['imgCache'][lv$0kf] = g2n3e) : new i5h4td['create'](u7w1, { 'onload': klyf06, 'onerror': mj9z_c, 'onCreate': function (lqr$sv) {
          g2n3e = lqr$sv, obpxht['imgCache'][lv$0kf] = lqr$sv;
        } });
    }, r_csvq;
  }(),
      uy17f = function () {
    function pbne() {}return n3ge82(pbne, 'laya.wx.mini.MiniInput'), pbne['_createInputElement'] = function () {
      jm54zd['_initInput'](jm54zd['area'] = srlv['createElement']('textarea')), jm54zd['_initInput'](jm54zd['input'] = srlv['createElement']('input')), jm54zd['inputContainer'] = srlv['createElement']('div'), jm54zd['inputContainer']['style']['position'] = 'absolute', jm54zd['inputContainer']['style']['zIndex'] = 0x186a0, srlv['container']['appendChild'](jm54zd['inputContainer']), jm54zd['inputContainer']['setPos'] = function (v$qls, _m4z9j) {
        jm54zd['inputContainer']['style']['left'] = v$qls + 'px', jm54zd['inputContainer']['style']['top'] = _m4z9j + 'px';
      }, ihobxt['stage']['on']('resize', null, pbne['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ne8g) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), otbih['_soundClass'] = o5i, otbih['_musicClass'] = o5i;
    }, pbne['_onStageResize'] = function () {
      var rzc9 = ihobxt['stage']['_canvasTransform']['identity']();rzc9['scale'](srlv['width'] / fy76k['canvas']['width'] / f07k6y['getPixelRatio'](), srlv['height'] / fy76k['canvas']['height'] / f07k6y['getPixelRatio']());
    }, pbne['wxinputFocus'] = function (t5xo) {
      var m9jz4_ = jm54zd['inputElement']['target'];if (m9jz4_ && !m9jz4_['editable']) return;iohtxb['window']['wx']['offKeyboardConfirm'](), iohtxb['window']['wx']['offKeyboardInput'](), iohtxb['window']['wx']['showKeyboard']({ 'defaultValue': m9jz4_['text'], 'maxLength': m9jz4_['maxChars'], 'multiple': m9jz4_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jdm45z) {}, 'fail': function (xo2bhp) {} }), iohtxb['window']['wx']['onKeyboardConfirm'](function ($rslvq) {
        var wy7u1 = $rslvq ? $rslvq['value'] : '';m9jz4_['text'] = wy7u1, m9jz4_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), iohtxb['window']['wx']['onKeyboardInput'](function (rqvcs$) {
        var xb28op = rqvcs$ ? rqvcs$['value'] : '';if (!m9jz4_['multiline']) {
          if (xb28op['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }m9jz4_['text'] = xb28op, m9jz4_['event']('input');
      });
    }, pbne['inputEnter'] = function () {
      jm54zd['inputElement']['target']['focus'] = ![];
    }, pbne['wxinputblur'] = function () {
      pbne['hideKeyboard']();
    }, pbne['hideKeyboard'] = function () {
      iohtxb['window']['wx']['offKeyboardConfirm'](), iohtxb['window']['wx']['offKeyboardInput'](), iohtxb['window']['wx']['hideKeyboard']({ 'success': function (qs9c) {
          console['log']('隐藏键盘');
        }, 'fail': function (cj_z9) {
          console['log']('隐藏键盘出错:' + (cj_z9 ? cj_z9['errMsg'] : ''));
        } });
    }, pbne;
  }(),
      v0lqr$ = function () {
    function n28bep() {}n3ge82(n28bep, 'laya.wx.mini.MiniLoader');var k0vql = n28bep['prototype'];return k0vql['load'] = function (hti4d5, epn23, cv_qrs, x8bop, scrqv) {
      cv_qrs === void 0x0 && (cv_qrs = !![]), scrqv === void 0x0 && (scrqv = ![]);var b8np2x = this;b8np2x['_url'] = hti4d5;if (hti4d5['indexOf']('data:image') === 0x0) b8np2x['_type'] = epn23 = 'image';else b8np2x['_type'] = epn23 || (epn23 = b8np2x['getTypeFromUrl'](hti4d5));b8np2x['_cache'] = cv_qrs, b8np2x['_data'] = null;var j45td = 'ascii';if (hti4d5['indexOf']('.fnt') != -0x1) j45td = 'utf8';else epn23 == 'arraybuffer' && (j45td = '');;var q0lv$ = _sqrcv['getFileExtension'](hti4d5);if (n28bep['_fileTypeArr']['indexOf'](q0lv$) != -0x1) iohtxb['EnvConfig']['load']['call'](this, hti4d5, epn23, cv_qrs, x8bop, scrqv);else {
        if (!oihd['getFileInfo'](hti4d5)) {
          if (hti4d5['indexOf']('layaNativeDir/') != -0x1) {
            if (iohtxb['isZiYu']) {
              var sq$rvc = oihd['ziyuFileData'][hti4d5];b8np2x['onLoaded'](sq$rvc);return;
            } else {
              cosnole['log']('read read'), oihd['read'](hti4d5, j45td, new px2hb(n28bep, n28bep['onReadNativeCallBack'], [j45td, hti4d5, epn23, cv_qrs, x8bop, scrqv, b8np2x]));return;
            }
          }if (yuw761['rootPath'] == '') var z49_jm = hti4d5;else z49_jm = hti4d5['split'](yuw761['rootPath'])[0x0];hti4d5['indexOf']('http://') != -0x1 || hti4d5['indexOf']('https://') != -0x1 ? iohtxb['EnvConfig']['load']['call'](b8np2x, hti4d5, epn23, cv_qrs, x8bop, scrqv) : oihd['readFile'](z49_jm, j45td, new px2hb(n28bep, n28bep['onReadNativeCallBack'], [j45td, hti4d5, epn23, cv_qrs, x8bop, scrqv, b8np2x]), hti4d5);
        } else iohtxb['EnvConfig']['load']['call'](this, hti4d5, epn23, cv_qrs, x8bop, scrqv);
      }
    }, k0vql['resMgrLoad'] = function (l$kf0, bxtp, vqk$l0, z_mcj9, rvs$cq, bophx, d5ioth) {
      vqk$l0 === void 0x0 && (vqk$l0 = 0x0), z_mcj9 === void 0x0 && (z_mcj9 = ![]), rvs$cq === void 0x0 && (rvs$cq = ![]), bophx === void 0x0 && (bophx = 0x0), d5ioth === void 0x0 && (d5ioth = 0x3), l$kf0['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', l$kf0), iohtxb['EnvConfig']['resMgrLoad'](l$kf0, (ihx5t, np2eb, wuy671) => {
        n28bep['prototype']['resMgrLoadCallBack'](ihx5t, np2eb, wuy671, bxtp);
      }, vqk$l0, z_mcj9, rvs$cq, bophx, d5ioth);
    }, k0vql['resMgrLoadCallBack'] = function (cm_zj9, mz9j_, tbopxh, cvs$rq) {
      console['log']('buff:::', cm_zj9, tbopxh, oihd['fileNativeDir'] + '///' + oihd['fileListName']), cvs$rq(cm_zj9, mz9j_, tbopxh);
    }, k0vql['clearRes'] = function (kf$0y, zdjm54) {
      zdjm54 === void 0x0 && (zdjm54 = ![]);var kfy60l = this;kfy60l['clearRes'](kf$0y, zdjm54);var ebnp = oihd['getFileInfo'](kf$0y);if (ebnp && (kf$0y['indexOf']('http://') != -0x1 || kf$0y['indexOf']('https://') != -0x1)) {
        var f06y = ebnp['md5'],
            k$fy = oihd['getFileNativePath'](f06y);oihd['remove'](k$fy);
      }
    }, n28bep['onReadNativeCallBack'] = function (_9zcrs, t5di, q$rvsc, zr9s_c, xbihot, j54dm, diht4, fky6, cm_9zs) {
      zr9s_c === void 0x0 && (zr9s_c = !![]), j54dm === void 0x0 && (j54dm = ![]), fky6 === void 0x0 && (fky6 = 0x0);if (!fky6) {
        var b2oxhp;if (q$rvsc == 'json' || q$rvsc == 'atlas') b2oxhp = iohtxb['getJson'](cm_9zs['data']);else q$rvsc == 'xml' ? b2oxhp = _sqrcv['parseXMLFromString'](cm_9zs['data']) : b2oxhp = cm_9zs['data'];diht4['onLoaded'](b2oxhp), !iohtxb['isZiYu'] && iohtxb['isPosMsgYu'] && q$rvsc != 'arraybuffer' && wx['postMessage']({ 'url': t5di, 'data': b2oxhp, 'isLoad': !![] });
      } else fky6 == 0x1 && iohtxb['EnvConfig']['load']['call'](diht4, t5di, q$rvsc, zr9s_c, xbihot, j54dm);
    }, n3p82(n28bep, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), n28bep;
  }(),
      oihd = function (np38) {
    function kv$q() {
      kv$q['__super']['call'](this);;
    }return n3ge82(kv$q, 'laya.wx.mini.MiniFileMgr', np38), kv$q['isLoadFile'] = function (m_94zj) {
      return kv$q['_fileTypeArr']['indexOf'](m_94zj) != -0x1 ? !![] : ![];
    }, kv$q['getFileInfo'] = function (j49d) {
      var c_qs9r = j49d['split']('?')[0x0],
          ly06 = kv$q['filesListObj'][c_qs9r];if (ly06 == null) return null;else return ly06;return null;
    }, kv$q['onFileUpdate'] = function (enb82, k67f0) {
      var mc9z_ = enb82['split']('/'),
          cvq_s = mc9z_[mc9z_['length'] - 0x1],
          b2xph = kv$q['getFileInfo'](k67f0);if (b2xph == null) kv$q['onSaveFile'](k67f0, cvq_s);else {
        if (b2xph['readyUrl'] != k67f0) kv$q['remove'](cvq_s, k67f0);
      }
    }, kv$q['exits'] = function (k0$lfy, sc_qrv) {
      var qvsr_c = kv$q['getFileNativePath'](k0$lfy);kv$q['fs']['getFileInfo']({ 'filePath': qvsr_c, 'success': function (h4dit5) {
          sc_qrv != null && sc_qrv['runWith']([0x0, h4dit5]);
        }, 'fail': function (xhpt) {
          sc_qrv != null && sc_qrv['runWith']([0x1, xhpt]);
        } });
    }, kv$q['read'] = function (hitxob, q0kv$, xb28, s$rqv) {
      q0kv$ === void 0x0 && (q0kv$ = 'ascill'), s$rqv === void 0x0 && (s$rqv = '');var thbpxo;s$rqv != '' ? thbpxo = kv$q['getFileNativePath'](hitxob) : thbpxo = hitxob, kv$q['fs']['readFile']({ 'filePath': thbpxo, 'encoding': q0kv$, 'success': function (di5m4j) {
          xb28 != null && xb28['runWith']([0x0, di5m4j]);
        }, 'fail': function (f$k0yl) {
          if (f$k0yl && s$rqv != '') kv$q['down'](s$rqv, q0kv$, xb28, s$rqv);else xb28 != null && xb28['runWith']([0x1]);
        } });
    }, kv$q['readNativeFile'] = function (nge8, fyu61) {
      kv$q['fs']['readFile']({ 'filePath': nge8, 'encoding': '', 'success': function (s9cq_r) {
          fyu61 != null && fyu61['runWith']([0x0]);
        }, 'fail': function (t5idoh) {
          fyu61 != null && fyu61['runWith']([0x1]);
        } });
    }, kv$q['down'] = function (o2bph, f7ky61, sczr_9, _smc) {
      f7ky61 === void 0x0 && (f7ky61 = 'ascill'), _smc === void 0x0 && (_smc = '');var hdi4t = kv$q['getFileNativePath'](_smc),
          fk$lv0 = kv$q['wxdown']({ 'url': o2bph, 'filePath': hdi4t, 'success': function (d4ith5) {
          if (d4ith5['statusCode'] === 0xc8) kv$q['readFile'](d4ith5['filePath'], f7ky61, sczr_9, _smc);
        }, 'fail': function (y0flk) {
          sczr_9 != null && sczr_9['runWith']([0x1, y0flk]);
        } });fk$lv0['onProgressUpdate'](function (jd4mz5) {
        sczr_9 != null && sczr_9['runWith']([0x2, jd4mz5['progress']]);
      });
    }, kv$q['readFile'] = function (ykf760, xtbp, ng2e, cr$svq) {
      xtbp === void 0x0 && (xtbp = 'ascill'), cr$svq === void 0x0 && (cr$svq = ''), kv$q['fs']['readFile']({ 'filePath': ykf760, 'encoding': xtbp, 'success': function (fy$lk) {
          if (ykf760['indexOf']('http://') != -0x1 || ykf760['indexOf']('https://') != -0x1) kv$q['onFileUpdate'](ykf760, cr$svq);ng2e != null && ng2e['runWith']([0x0, fy$lk]);
        }, 'fail': function (_q9src) {
          if (_q9src) ng2e != null && ng2e['runWith']([0x1, _q9src]);
        } });
    }, kv$q['downImg'] = function (klyf$, kf6y, n8b2pe) {
      n8b2pe === void 0x0 && (n8b2pe = '');var scz = kv$q['wxdown']({ 'url': klyf$, 'success': function (ophx2b) {
          ophx2b['statusCode'] === 0xc8 && kv$q['copyFile'](ophx2b['tempFilePath'], n8b2pe, kf6y);
        }, 'fail': function (othixb) {
          kf6y != null && kf6y['runWith']([0x1, othixb]);
        } });
    }, kv$q['copyFile'] = function (_mc9z, fv$0, yf61) {
      var oithx = _mc9z['split']('/'),
          h2xpo = oithx[oithx['length'] - 0x1],
          u1f = fv$0['split']('?')[0x0],
          _mzj9c = kv$q['getFileInfo'](fv$0),
          dj5zm = kv$q['getFileNativePath'](h2xpo);kv$q['fs']['copyFile']({ 'srcPath': _mc9z, 'destPath': dj5zm, 'success': function (qslvr) {
          if (!_mzj9c) kv$q['onSaveFile'](fv$0, h2xpo), yf61 != null && yf61['runWith']([0x0]);else {
            if (_mzj9c['readyUrl'] != fv$0) kv$q['remove'](h2xpo, fv$0, yf61);
          }
        }, 'fail': function (vsr_qc) {
          yf61 != null && yf61['runWith']([0x1, vsr_qc]);
        } });
    }, kv$q['getFileNativePath'] = function (ht45i) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ht45i;
    }, kv$q['remove'] = function (j9zm, slrq$v, npe83) {
      slrq$v === void 0x0 && (slrq$v = '');var lr0q$v = kv$q['getFileInfo'](slrq$v),
          $fvkl0 = kv$q['getFileNativePath'](lr0q$v['md5']);ihobxt['loader']['clearRes'](lr0q$v['readyUrl']), kv$q['fs']['unlink']({ 'filePath': $fvkl0, 'success': function (dji) {
          if (slrq$v != '') kv$q['onSaveFile'](slrq$v, j9zm);npe83 != null && npe83['runWith']([0x0]);
        }, 'fail': function (_jzm4) {} });
    }, kv$q['onSaveFile'] = function (jzc9m_, _csmz) {
      var i5dtj4 = jzc9m_['split']('?')[0x0];kv$q['filesListObj'][i5dtj4] = { 'md5': _csmz, 'readyUrl': jzc9m_ }, kv$q['fs']['writeFile']({ 'filePath': kv$q['fileNativeDir'] + '/' + kv$q['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kv$q['filesListObj']), 'success': function (fk07) {
          console['log']('写入测试测试成功：', fk07);
        }, 'fail': function (p2oxb) {
          console['log']('写入测试测试失败：', p2oxb);
        } });
    }, kv$q['existDir'] = function (jm_4z, pb2xh) {
      kv$q['fs']['mkdir']({ 'dirPath': jm_4z, 'success': function (dtoi5) {
          pb2xh != null && pb2xh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (k1yf67) {
          if (k1yf67['errMsg']['indexOf']('file already exists') != -0x1) kv$q['readSync'](kv$q['fileListName'], 'utf8', pb2xh);else pb2xh != null && pb2xh['runWith']([0x1, k1yf67]);
        } });
    }, kv$q['readSync'] = function (txbohp, bnp8e2, u761fy, lsq$r) {
      bnp8e2 === void 0x0 && (bnp8e2 = 'ascill'), lsq$r === void 0x0 && (lsq$r = '');var z9mj_c = kv$q['getFileNativePath'](txbohp),
          d4zm9j;try {
        d4zm9j = kv$q['fs']['readFileSync'](z9mj_c), u761fy != null && u761fy['runWith']([0x0, { 'data': d4zm9j }]);
      } catch (scm_9z) {
        u761fy != null && u761fy['runWith']([0x1]);
      }
    }, kv$q['readCache'] = function () {}, kv$q['writeCache'] = function (oti5dh) {
      var qc_9r = readyUrl['split']('?')[0x0];kv$q['filesListObj'][qc_9r] = { 'md5': md5Name, 'readyUrl': readyUrl }, kv$q['fs']['writeFile']({ 'filePath': kv$q['fileNativeDir'] + '/' + kv$q['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kv$q['filesListObj']), 'success': function (q$vlr) {}, 'fail': function (mz54d) {} });
    }, kv$q['setNativeFileDir'] = function (y7f60k) {
      kv$q['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + y7f60k;
    }, kv$q['filesListObj'] = {}, kv$q['fileNativeDir'] = null, kv$q['fileListName'] = 'layaairfiles.txt', kv$q['ziyuFileData'] = {}, n3p82(kv$q, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), kv$q;
  }(y6lkf0),
      o5i = function (bthop) {
    function b2hoxp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], b2hoxp['__super']['call'](this), this['_sound'] = b2hoxp['_createSound']();
    }n3ge82(b2hoxp, 'laya.wx.mini.MiniSound', bthop);var xb2p8 = b2hoxp['prototype'];return xb2p8['load'] = function (m5dj) {
      var m9jc_ = this;m5dj = yuw761['formatURL'](m5dj), this['url'] = m5dj;if (b2hoxp['_audioCache'][m5dj]) {
        this['event']('complete');return;
      }function zc9_() {
        if (b2hoxp['_null'] != undefined) m9jc_['_sound']['onCanplay'](b2hoxp['_null']), m9jc_['_sound']['onError'](b2hoxp['_null']);else try {
          m9jc_['_sound']['onCanplay'](null), m9jc_['_sound']['onError'](null), b2hoxp['_null'] = null;
        } catch (htoxpb) {
          console['warn']('[wxmini] _clearSound:' + htoxpb), m9jc_['_sound']['onCanplay'](scq_9r), m9jc_['_sound']['onError'](scq_9r), b2hoxp['_null'] = scq_9r;
        }
      }function qk0() {
        zc9_(), _r9csq['loaded'] = !![], _r9csq['event']('complete'), b2hoxp['_audioCache'][_r9csq['url']] = _r9csq;
      }function toxih(dim45j) {
        console['error']('errCode=' + dim45j['errCode'] + '  errMsg=' + dim45j['errMsg']), zc9_(), _r9csq['event']('error');
      }function scq_9r() {}this['_sound']['onCanplay'](qk0), this['_sound']['onError'](toxih), this['_sound']['src'] = m5dj;var _r9csq = this;
    }, xb2p8['play'] = function (_szr, $klf) {
      _szr === void 0x0 && (_szr = 0x0), $klf === void 0x0 && ($klf = 0x0);var bp2nx;if (this['url'] == otbih['_tMusic']) {
        if (!b2hoxp['_musicAudio']) b2hoxp['_musicAudio'] = b2hoxp['_createSound']();bp2nx = b2hoxp['_musicAudio'];
      } else bp2nx = b2hoxp['_createSound']();bp2nx['src'] = this['url'];var dz4j5m = new qcvr_(bp2nx);return dz4j5m['url'] = this['url'], dz4j5m['loops'] = $klf, dz4j5m['startTime'] = _szr, dz4j5m['play'](), otbih['addChannel'](dz4j5m), dz4j5m;
    }, xb2p8['dispose'] = function () {
      var csr9q = b2hoxp['_audioCache'][this['url']];csr9q && (csr9q['src'] = '', delete b2hoxp['_audioCache'][this['url']]);
    }, eb2np(0x0, xb2p8, 'duration', function () {
      return this['_sound']['duration'];
    }), b2hoxp['_createSound'] = function () {
      return b2hoxp['_id']++, iohtxb['window']['wx']['createInnerAudioContext']();
    }, b2hoxp['_musicAudio'] = null, b2hoxp['_id'] = 0x0, b2hoxp['_audioCache'] = {}, b2hoxp['_null'] = undefined, b2hoxp;
  }(y6lkf0),
      qcvr_ = function (n2xb8) {
    function rqvs$c($rvl0q) {
      this['_audio'] = null, this['_onEnd'] = null, rqvs$c['__super']['call'](this), this['_audio'] = $rvl0q, this['_onEnd'] = _sqrcv['bind'](this['__onEnd'], this), $rvl0q['onEnded'](this['_onEnd']);
    }n3ge82(rqvs$c, 'laya.wx.mini.MiniSoundChannel', n2xb8);var u167wy = rqvs$c['prototype'];return u167wy['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ihobxt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, u167wy['__onNull'] = function () {}, u167wy['play'] = function () {
      this['isStopped'] = ![], otbih['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, u167wy['stop'] = function () {
      this['isStopped'] = !![], otbih['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (rqvs$c['_null'] != undefined) this['_audio']['onEnded'](rqvs$c['_null']);else try {
        this['_audio']['onEnded'](null), rqvs$c['_null'] = null;
      } catch (uw1) {
        console['warn']('[wxmini] stop:' + uw1), this['_audio']['onEnded'](_sqrcv['bind'](this['__onNull'], this)), rqvs$c['_null'] = _sqrcv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, u167wy['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, u167wy['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], otbih['addChannel'](this), this['_audio']['play']();
    }, eb2np(0x0, u167wy, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), eb2np(0x0, u167wy, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), eb2np(0x0, u167wy, 'volume', function () {
      return 0x1;
    }, function (mczs9) {}), rqvs$c['_null'] = undefined, rqvs$c;
  }(yl6f0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qrc9 in Laya) {
    var r_cqvs = Laya[qrc9];r_cqvs && r_cqvs['__isclass'] && (exports[qrc9] = r_cqvs);
  }
});