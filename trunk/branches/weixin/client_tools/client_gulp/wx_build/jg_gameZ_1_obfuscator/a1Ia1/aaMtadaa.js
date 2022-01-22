var C = wx.$a;
(function (window, document, _zsc9r) {
  var iohxtb = _zsc9r['un'],
      p8ebn2 = _zsc9r['uns'],
      u71yf = _zsc9r['static'],
      m49zdj = _zsc9r['class'],
      e3gn28 = _zsc9r['getset'],
      x8o2bp = _zsc9r['__newvec'],
      $ql0k = laya['utils']['Browser'],
      u1w6y7 = laya['events']['Event'],
      f6y7 = laya['events']['EventDispatcher'],
      ywu71 = laya['resource']['HTMLImage'],
      _9mjcz = laya['utils']['Handler'],
      yl0f6 = laya['display']['Input'],
      xop2bh = laya['net']['Loader'],
      klfv = laya['maths']['Matrix'],
      fl6k0 = laya['renders']['Render'],
      dh4ti = laya['utils']['RunDriver'],
      po8b2 = laya['media']['Sound'],
      r$sqcv = laya['media']['SoundChannel'],
      uw7y = laya['media']['SoundManager'],
      bhop2x = laya['display']['Stage'],
      rzc = laya['net']['URL'],
      qrv$0l = laya['utils']['Utils'],
      m9szc = function () {
    function _srqvc() {}return m49zdj(_srqvc, 'laya.wx.mini.MiniAdpter'), _srqvc['getJson'] = function (vrl0q) {
      return JSON['parse'](vrl0q);
    }, _srqvc['init'] = function (l$k, bpx8n) {
      l$k === void 0x0 && (l$k = ![]), bpx8n === void 0x0 && (bpx8n = ![]);if (_srqvc['_inited']) return;_srqvc['window'] = window;if (_srqvc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;_srqvc['_inited'] = !![], _srqvc['isZiYu'] = bpx8n, _srqvc['isPosMsgYu'] = l$k, _srqvc['EnvConfig'] = {}, !_srqvc['isZiYu'] && (ep823['setNativeFileDir']('/layaairGame'), ep823['existDir'](ep823['fileNativeDir'], _9mjcz['create'](_srqvc, _srqvc['onMkdirCallBack']))), _srqvc['window']['focus'] = function () {}, _zsc9r['getUrlPath'] = function () {}, _srqvc['window']['logtime'] = function ($rl) {}, _srqvc['window']['alertTimeLog'] = function (z_sr) {}, _srqvc['window']['resetShareInfo'] = function () {}, _srqvc['window']['CanvasRenderingContext2D'] = function () {}, _srqvc['window']['CanvasRenderingContext2D']['prototype'] = _srqvc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _srqvc['window']['document']['body']['appendChild'] = function () {}, _srqvc['EnvConfig']['pixelRatioInt'] = 0x0, dh4ti['getPixelRatio'] = _srqvc['pixelRatio'], _srqvc['_preCreateElement'] = $ql0k['createElement'], $ql0k['createElement'] = _srqvc['createElement'], dh4ti['createShaderCondition'] = _srqvc['createShaderCondition'], qrv$0l['parseXMLFromString'] = _srqvc['parseXMLFromString'], yl0f6['_createInputElement'] = xpo8b['_createInputElement'], _srqvc['EnvConfig']['load'] = xop2bh['prototype']['load'], xop2bh['prototype']['load'] = hxtop['prototype']['load'], _srqvc['isZiYu'] && l$k && wx['onMessage'](function (vcr$qs) {
        vcr$qs['isLoad'] && (ep823['ziyuFileData'][vcr$qs['url']] = vcr$qs['data']);
      });
    }, _srqvc['onMkdirCallBack'] = function (g82en3, vrs$c) {
      if (!g82en3) ep823['filesListObj'] = JSON['parse'](vrs$c['data']);
    }, _srqvc['pixelRatio'] = function () {
      if (!_srqvc['EnvConfig']['pixelRatioInt']) try {
        var kf0ly6 = wx['getSystemInfoSync']();return _srqvc['EnvConfig']['pixelRatioInt'] = kf0ly6['pixelRatio'], kf0ly6 = kf0ly6, kf0ly6['pixelRatio'];
      } catch (qsr_9c) {}return _srqvc['EnvConfig']['pixelRatioInt'];
    }, _srqvc['createElement'] = function (qsc$vr) {
      if (qsc$vr == 'canvas') {
        var hitod5;return _srqvc['idx'] == 0x1 ? _srqvc['isZiYu'] ? (hitod5 = sharedCanvas, hitod5['style'] = {}) : hitod5 = window['canvas'] : hitod5 = window['wx']['createCanvas'](), _srqvc['idx']++, hitod5;
      } else {
        if (qsc$vr == 'textarea' || qsc$vr == 'input') return _srqvc['onCreateInput'](qsc$vr);else {
          if (qsc$vr == 'div') {
            var pbh2 = _srqvc['_preCreateElement'](qsc$vr);return pbh2['contains'] = function (_c9mzs) {
              return null;
            }, pbh2['removeChild'] = function (oxthp) {}, pbh2;
          } else return _srqvc['_preCreateElement'](qsc$vr);
        }
      }
    }, _srqvc['onCreateInput'] = function (t5oix) {
      var vl$qs = _srqvc['_preCreateElement'](t5oix);return vl$qs['focus'] = xpo8b['wxinputFocus'], vl$qs['blur'] = xpo8b['wxinputblur'], vl$qs['style'] = {}, vl$qs['value'] = 0x0, vl$qs['parentElement'] = {}, vl$qs['placeholder'] = {}, vl$qs['type'] = {}, vl$qs['setColor'] = function (e82p) {}, vl$qs['setType'] = function (j4dim5) {}, vl$qs['setFontFace'] = function (tiboxh) {}, vl$qs['addEventListener'] = function (hbxto) {}, vl$qs['contains'] = function (pohb) {
        return null;
      }, vl$qs['removeChild'] = function (_j9) {}, vl$qs;
    }, _srqvc['createShaderCondition'] = function (z9m4d) {
      var xotbh = this,
          vcs_q = function () {
        var szr = z9m4d;return xotbh[z9m4d['replace']('this.', '')];
      };return vcs_q;
    }, _srqvc['EnvConfig'] = null, _srqvc['window'] = null, _srqvc['_preCreateElement'] = null, _srqvc['_inited'] = ![], _srqvc['wxRequest'] = null, _srqvc['systemInfo'] = null, _srqvc['version'] = '0.0.1', _srqvc['isZiYu'] = ![], _srqvc['isPosMsgYu'] = ![], _srqvc['parseXMLFromString'] = function (y760) {
      var q$lsvr, n8e3g;y760 = y760['replace'](/>\s+</g, '><');try {
        q$lsvr = new window['Parser']['DOMParser']()['parseFromString'](y760, 'text/xml');
      } catch (zr9_c) {
        throw '需要引入xml解析库文件';
      }return q$lsvr;
    }, _srqvc['idx'] = 0x1, _srqvc;
  }(),
      k60ylf = function () {
    function r$lvsq() {}m49zdj(r$lvsq, 'laya.wx.mini.MiniImage');var z9smc_ = r$lvsq['prototype'];return z9smc_['_loadImage'] = function (i5h4t) {
      var y70k = this,
          qkv$l0 = ![];i5h4t['indexOf']('layaNativeDir/') == -0x1 && (qkv$l0 = !![], i5h4t = rzc['formatURL'](i5h4t));if (!ep823['getFileInfo'](i5h4t)) {
        if (i5h4t['indexOf']('http://') != -0x1 || i5h4t['indexOf']('https://') != -0x1) ep823['downImg'](i5h4t, new _9mjcz(r$lvsq, r$lvsq['onDownImgCallBack'], [i5h4t, y70k]), i5h4t);else r$lvsq['onCreateImage'](i5h4t, y70k, !![]);
      } else r$lvsq['onCreateImage'](i5h4t, y70k, !qkv$l0);
    }, r$lvsq['onDownImgCallBack'] = function (szr_9, z9jmd, q0r$) {
      if (!q0r$) r$lvsq['onCreateImage'](szr_9, z9jmd);else z9jmd['onError'](null);
    }, r$lvsq['onCreateImage'] = function (lfy$0k, bthp, npb82e) {
      npb82e === void 0x0 && (npb82e = ![]);var pob82x;if (!npb82e) {
        var mcs = ep823['getFileInfo'](lfy$0k),
            thoi5x = mcs['md5'];pob82x = ep823['getFileNativePath'](thoi5x);
      } else pob82x = lfy$0k;if (bthp['imgCache'] == null) bthp['imgCache'] = {};var vlkq0;function czmj_9() {
        vlkq0['onload'] = null, vlkq0['onerror'] = null, delete bthp['imgCache'][lfy$0k];
      };var cqvsr_ = function () {
        czmj_9(), bthp['onLoaded'](vlkq0);
      },
          t5i4jd = function () {
        czmj_9(), bthp['event']('error', 'Load image failed');
      };bthp['_type'] == 'nativeimage' ? (vlkq0 = new $ql0k['window']['Image'](), vlkq0['crossOrigin'] = '', vlkq0['onload'] = cqvsr_, vlkq0['onerror'] = t5i4jd, vlkq0['src'] = pob82x, bthp['imgCache'][lfy$0k] = vlkq0) : new ywu71['create'](pob82x, { 'onload': cqvsr_, 'onerror': t5i4jd, 'onCreate': function (o28) {
          vlkq0 = o28, bthp['imgCache'][lfy$0k] = o28;
        } });
    }, r$lvsq;
  }(),
      xpo8b = function () {
    function y61uf7() {}return m49zdj(y61uf7, 'laya.wx.mini.MiniInput'), y61uf7['_createInputElement'] = function () {
      yl0f6['_initInput'](yl0f6['area'] = $ql0k['createElement']('textarea')), yl0f6['_initInput'](yl0f6['input'] = $ql0k['createElement']('input')), yl0f6['inputContainer'] = $ql0k['createElement']('div'), yl0f6['inputContainer']['style']['position'] = 'absolute', yl0f6['inputContainer']['style']['zIndex'] = 0x186a0, $ql0k['container']['appendChild'](yl0f6['inputContainer']), yl0f6['inputContainer']['setPos'] = function (cvrs_, bpn28x) {
        yl0f6['inputContainer']['style']['left'] = cvrs_ + 'px', yl0f6['inputContainer']['style']['top'] = bpn28x + 'px';
      }, _zsc9r['stage']['on']('resize', null, y61uf7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (oibxh) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), uw7y['_soundClass'] = e832np, uw7y['_musicClass'] = e832np;
    }, y61uf7['_onStageResize'] = function () {
      var u6y7w = _zsc9r['stage']['_canvasTransform']['identity']();u6y7w['scale']($ql0k['width'] / fl6k0['canvas']['width'] / dh4ti['getPixelRatio'](), $ql0k['height'] / fl6k0['canvas']['height'] / dh4ti['getPixelRatio']());
    }, y61uf7['wxinputFocus'] = function (czr9_s) {
      var uf7y16 = yl0f6['inputElement']['target'];if (uf7y16 && !uf7y16['editable']) return;m9szc['window']['wx']['offKeyboardConfirm'](), m9szc['window']['wx']['offKeyboardInput'](), m9szc['window']['wx']['showKeyboard']({ 'defaultValue': uf7y16['text'], 'maxLength': uf7y16['maxChars'], 'multiple': uf7y16['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wyu761) {}, 'fail': function (z54d) {} }), m9szc['window']['wx']['onKeyboardConfirm'](function (_szc9) {
        var fyl$0 = _szc9 ? _szc9['value'] : '';uf7y16['text'] = fyl$0, uf7y16['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m9szc['window']['wx']['onKeyboardInput'](function (sq_rv) {
        var fy0k6 = sq_rv ? sq_rv['value'] : '';if (!uf7y16['multiline']) {
          if (fy0k6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uf7y16['text'] = fy0k6, uf7y16['event']('input');
      });
    }, y61uf7['inputEnter'] = function () {
      yl0f6['inputElement']['target']['focus'] = ![];
    }, y61uf7['wxinputblur'] = function () {
      y61uf7['hideKeyboard']();
    }, y61uf7['hideKeyboard'] = function () {
      m9szc['window']['wx']['offKeyboardConfirm'](), m9szc['window']['wx']['offKeyboardInput'](), m9szc['window']['wx']['hideKeyboard']({ 'success': function (kfl6y) {
          console['log']('隐藏键盘');
        }, 'fail': function ($lv0r) {
          console['log']('隐藏键盘出错:' + ($lv0r ? $lv0r['errMsg'] : ''));
        } });
    }, y61uf7;
  }(),
      hxtop = function () {
    function qrcv$s() {}m49zdj(qrcv$s, 'laya.wx.mini.MiniLoader');var s9rqc = qrcv$s['prototype'];return s9rqc['load'] = function (bpo28x, bp82n, o2pxhb, jz94m_, m9j_c) {
      o2pxhb === void 0x0 && (o2pxhb = !![]), m9j_c === void 0x0 && (m9j_c = ![]);var iothxb = this;iothxb['_url'] = bpo28x;if (bpo28x['indexOf']('data:image') === 0x0) iothxb['_type'] = bp82n = 'image';else iothxb['_type'] = bp82n || (bp82n = iothxb['getTypeFromUrl'](bpo28x));iothxb['_cache'] = o2pxhb, iothxb['_data'] = null;var hixot5 = 'ascii';if (bpo28x['indexOf']('.fnt') != -0x1) hixot5 = 'utf8';else bp82n == 'arraybuffer' && (hixot5 = '');;var c9mjz_ = qrv$0l['getFileExtension'](bpo28x);if (qrcv$s['_fileTypeArr']['indexOf'](c9mjz_) != -0x1) m9szc['EnvConfig']['load']['call'](this, bpo28x, bp82n, o2pxhb, jz94m_, m9j_c);else {
        if (!ep823['getFileInfo'](bpo28x)) {
          if (bpo28x['indexOf']('layaNativeDir/') != -0x1) {
            if (m9szc['isZiYu']) {
              var mcj_z = ep823['ziyuFileData'][bpo28x];iothxb['onLoaded'](mcj_z);return;
            } else {
              cosnole['log']('read read'), ep823['read'](bpo28x, hixot5, new _9mjcz(qrcv$s, qrcv$s['onReadNativeCallBack'], [hixot5, bpo28x, bp82n, o2pxhb, jz94m_, m9j_c, iothxb]));return;
            }
          }if (rzc['rootPath'] == '') var _9csrz = bpo28x;else _9csrz = bpo28x['split'](rzc['rootPath'])[0x0];bpo28x['indexOf']('http://') != -0x1 || bpo28x['indexOf']('https://') != -0x1 ? m9szc['EnvConfig']['load']['call'](iothxb, bpo28x, bp82n, o2pxhb, jz94m_, m9j_c) : ep823['readFile'](_9csrz, hixot5, new _9mjcz(qrcv$s, qrcv$s['onReadNativeCallBack'], [hixot5, bpo28x, bp82n, o2pxhb, jz94m_, m9j_c, iothxb]), bpo28x);
        } else m9szc['EnvConfig']['load']['call'](this, bpo28x, bp82n, o2pxhb, jz94m_, m9j_c);
      }
    }, s9rqc['resMgrLoad'] = function (jt5id, i4jd5, p2o8xb, uw16y, w7u16, mzd9j4, u7y6f1) {
      p2o8xb === void 0x0 && (p2o8xb = 0x0), uw16y === void 0x0 && (uw16y = ![]), w7u16 === void 0x0 && (w7u16 = ![]), mzd9j4 === void 0x0 && (mzd9j4 = 0x0), u7y6f1 === void 0x0 && (u7y6f1 = 0x3), jt5id['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jt5id), m9szc['EnvConfig']['resMgrLoad'](jt5id, (poh2b, xphtbo, szmc_) => {
        qrcv$s['prototype']['resMgrLoadCallBack'](poh2b, xphtbo, szmc_, i4jd5);
      }, p2o8xb, uw16y, w7u16, mzd9j4, u7y6f1);
    }, s9rqc['resMgrLoadCallBack'] = function (r_cvsq, v$rcs, xiho5, k1y67f) {
      console['log']('buff:::', r_cvsq, xiho5, ep823['fileNativeDir'] + '///' + ep823['fileListName']), k1y67f(r_cvsq, v$rcs, xiho5);
    }, s9rqc['clearRes'] = function ($sqrvl, q$sl) {
      q$sl === void 0x0 && (q$sl = ![]);var cvs$qr = this;cvs$qr['clearRes']($sqrvl, q$sl);var y7f16u = ep823['getFileInfo']($sqrvl);if (y7f16u && ($sqrvl['indexOf']('http://') != -0x1 || $sqrvl['indexOf']('https://') != -0x1)) {
        var hxopt = y7f16u['md5'],
            kql$0v = ep823['getFileNativePath'](hxopt);ep823['remove'](kql$0v);
      }
    }, qrcv$s['onReadNativeCallBack'] = function (dz94j, ti4d, f$kl0, $vklf0, xphotb, kf$yl0, oxbhi, bthixo, fy617) {
      $vklf0 === void 0x0 && ($vklf0 = !![]), kf$yl0 === void 0x0 && (kf$yl0 = ![]), bthixo === void 0x0 && (bthixo = 0x0);if (!bthixo) {
        var rv$l0q;if (f$kl0 == 'json' || f$kl0 == 'atlas') rv$l0q = m9szc['getJson'](fy617['data']);else f$kl0 == 'xml' ? rv$l0q = qrv$0l['parseXMLFromString'](fy617['data']) : rv$l0q = fy617['data'];oxbhi['onLoaded'](rv$l0q), !m9szc['isZiYu'] && m9szc['isPosMsgYu'] && f$kl0 != 'arraybuffer' && wx['postMessage']({ 'url': ti4d, 'data': rv$l0q, 'isLoad': !![] });
      } else bthixo == 0x1 && m9szc['EnvConfig']['load']['call'](oxbhi, ti4d, f$kl0, $vklf0, xphotb, kf$yl0);
    }, u71yf(qrcv$s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qrcv$s;
  }(),
      ep823 = function (dt54hi) {
    function svrcq_() {
      svrcq_['__super']['call'](this);;
    }return m49zdj(svrcq_, 'laya.wx.mini.MiniFileMgr', dt54hi), svrcq_['isLoadFile'] = function (ufy6) {
      return svrcq_['_fileTypeArr']['indexOf'](ufy6) != -0x1 ? !![] : ![];
    }, svrcq_['getFileInfo'] = function (f1u67y) {
      var vsql = f1u67y['split']('?')[0x0],
          $lfvk = svrcq_['filesListObj'][vsql];if ($lfvk == null) return null;else return $lfvk;return null;
    }, svrcq_['onFileUpdate'] = function (pbox2h, svqrl) {
      var scr9 = pbox2h['split']('/'),
          hiobt = scr9[scr9['length'] - 0x1],
          _sqv = svrcq_['getFileInfo'](svqrl);if (_sqv == null) svrcq_['onSaveFile'](svqrl, hiobt);else {
        if (_sqv['readyUrl'] != svqrl) svrcq_['remove'](hiobt, svqrl);
      }
    }, svrcq_['exits'] = function (ql$sr, qrc_vs) {
      var $qlvs = svrcq_['getFileNativePath'](ql$sr);svrcq_['fs']['getFileInfo']({ 'filePath': $qlvs, 'success': function (bo28x) {
          qrc_vs != null && qrc_vs['runWith']([0x0, bo28x]);
        }, 'fail': function (mcj9_z) {
          qrc_vs != null && qrc_vs['runWith']([0x1, mcj9_z]);
        } });
    }, svrcq_['read'] = function (uy16, q$rvs, pb8x2n, xbpo82) {
      q$rvs === void 0x0 && (q$rvs = 'ascill'), xbpo82 === void 0x0 && (xbpo82 = '');var dimj;xbpo82 != '' ? dimj = svrcq_['getFileNativePath'](uy16) : dimj = uy16, svrcq_['fs']['readFile']({ 'filePath': dimj, 'encoding': q$rvs, 'success': function (mzj4d9) {
          pb8x2n != null && pb8x2n['runWith']([0x0, mzj4d9]);
        }, 'fail': function (qvl$r0) {
          if (qvl$r0 && xbpo82 != '') svrcq_['down'](xbpo82, q$rvs, pb8x2n, xbpo82);else pb8x2n != null && pb8x2n['runWith']([0x1]);
        } });
    }, svrcq_['readNativeFile'] = function (np8xb, n2eg38) {
      svrcq_['fs']['readFile']({ 'filePath': np8xb, 'encoding': '', 'success': function (q0lvr$) {
          n2eg38 != null && n2eg38['runWith']([0x0]);
        }, 'fail': function (rsqc$) {
          n2eg38 != null && n2eg38['runWith']([0x1]);
        } });
    }, svrcq_['down'] = function (o5htid, q$lrvs, $rslq, x2hobp) {
      q$lrvs === void 0x0 && (q$lrvs = 'ascill'), x2hobp === void 0x0 && (x2hobp = '');var _m9szc = svrcq_['getFileNativePath'](x2hobp),
          _m4z9 = svrcq_['wxdown']({ 'url': o5htid, 'filePath': _m9szc, 'success': function (rqsv_) {
          if (rqsv_['statusCode'] === 0xc8) svrcq_['readFile'](rqsv_['filePath'], q$lrvs, $rslq, x2hobp);
        }, 'fail': function (c_zsr9) {
          $rslq != null && $rslq['runWith']([0x1, c_zsr9]);
        } });_m4z9['onProgressUpdate'](function ($rqvl) {
        $rslq != null && $rslq['runWith']([0x2, $rqvl['progress']]);
      });
    }, svrcq_['readFile'] = function (_vqcrs, e83p2, k0$lfy, sc$) {
      e83p2 === void 0x0 && (e83p2 = 'ascill'), sc$ === void 0x0 && (sc$ = ''), svrcq_['fs']['readFile']({ 'filePath': _vqcrs, 'encoding': e83p2, 'success': function (v_cqrs) {
          if (_vqcrs['indexOf']('http://') != -0x1 || _vqcrs['indexOf']('https://') != -0x1) svrcq_['onFileUpdate'](_vqcrs, sc$);k0$lfy != null && k0$lfy['runWith']([0x0, v_cqrs]);
        }, 'fail': function (f0$ly) {
          if (f0$ly) k0$lfy != null && k0$lfy['runWith']([0x1, f0$ly]);
        } });
    }, svrcq_['downImg'] = function (sl$rvq, eg328n, qrvs$c) {
      qrvs$c === void 0x0 && (qrvs$c = '');var qs_cvr = svrcq_['wxdown']({ 'url': sl$rvq, 'success': function (z9_4jm) {
          z9_4jm['statusCode'] === 0xc8 && svrcq_['copyFile'](z9_4jm['tempFilePath'], qrvs$c, eg328n);
        }, 'fail': function (d4t5ih) {
          eg328n != null && eg328n['runWith']([0x1, d4t5ih]);
        } });
    }, svrcq_['copyFile'] = function (yf06kl, q9_scr, p28eb) {
      var kv$fl = yf06kl['split']('/'),
          tih5ox = kv$fl[kv$fl['length'] - 0x1],
          sqcv$ = q9_scr['split']('?')[0x0],
          s_c9 = svrcq_['getFileInfo'](q9_scr),
          eb = svrcq_['getFileNativePath'](tih5ox);svrcq_['fs']['copyFile']({ 'srcPath': yf06kl, 'destPath': eb, 'success': function (src_9q) {
          if (!s_c9) svrcq_['onSaveFile'](q9_scr, tih5ox), p28eb != null && p28eb['runWith']([0x0]);else {
            if (s_c9['readyUrl'] != q9_scr) svrcq_['remove'](tih5ox, q9_scr, p28eb);
          }
        }, 'fail': function (f067yk) {
          p28eb != null && p28eb['runWith']([0x1, f067yk]);
        } });
    }, svrcq_['getFileNativePath'] = function (jd4m9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jd4m9;
    }, svrcq_['remove'] = function (hxbo2p, tdiho5, ophxb) {
      tdiho5 === void 0x0 && (tdiho5 = '');var zjdm5 = svrcq_['getFileInfo'](tdiho5),
          vsr$lq = svrcq_['getFileNativePath'](zjdm5['md5']);_zsc9r['loader']['clearRes'](zjdm5['readyUrl']), svrcq_['fs']['unlink']({ 'filePath': vsr$lq, 'success': function (it4j5) {
          if (tdiho5 != '') svrcq_['onSaveFile'](tdiho5, hxbo2p);ophxb != null && ophxb['runWith']([0x0]);
        }, 'fail': function (mzcj_) {} });
    }, svrcq_['onSaveFile'] = function (dt5ji, px2n8) {
      var g8ne23 = dt5ji['split']('?')[0x0];svrcq_['filesListObj'][g8ne23] = { 'md5': px2n8, 'readyUrl': dt5ji }, svrcq_['fs']['writeFile']({ 'filePath': svrcq_['fileNativeDir'] + '/' + svrcq_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](svrcq_['filesListObj']), 'success': function (l0q) {
          console['log']('写入测试测试成功：', l0q);
        }, 'fail': function (m5i4jd) {
          console['log']('写入测试测试失败：', m5i4jd);
        } });
    }, svrcq_['existDir'] = function (q_src, g3n28e) {
      svrcq_['fs']['mkdir']({ 'dirPath': q_src, 'success': function (zm4dj5) {
          g3n28e != null && g3n28e['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zc_s9) {
          if (zc_s9['errMsg']['indexOf']('file already exists') != -0x1) svrcq_['readSync'](svrcq_['fileListName'], 'utf8', g3n28e);else g3n28e != null && g3n28e['runWith']([0x1, zc_s9]);
        } });
    }, svrcq_['readSync'] = function (f76ky1, cvqr_, y6lf0k, f$v0) {
      cvqr_ === void 0x0 && (cvqr_ = 'ascill'), f$v0 === void 0x0 && (f$v0 = '');var k7f = svrcq_['getFileNativePath'](f76ky1),
          cz9sm;try {
        cz9sm = svrcq_['fs']['readFileSync'](k7f), y6lf0k != null && y6lf0k['runWith']([0x0, { 'data': cz9sm }]);
      } catch (k$yfl) {
        y6lf0k != null && y6lf0k['runWith']([0x1]);
      }
    }, svrcq_['readCache'] = function () {}, svrcq_['writeCache'] = function (itd) {
      var k6lf0y = readyUrl['split']('?')[0x0];svrcq_['filesListObj'][k6lf0y] = { 'md5': md5Name, 'readyUrl': readyUrl }, svrcq_['fs']['writeFile']({ 'filePath': svrcq_['fileNativeDir'] + '/' + svrcq_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](svrcq_['filesListObj']), 'success': function (y$k0lf) {}, 'fail': function (k6y7f) {} });
    }, svrcq_['setNativeFileDir'] = function (klv0$) {
      svrcq_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + klv0$;
    }, svrcq_['filesListObj'] = {}, svrcq_['fileNativeDir'] = null, svrcq_['fileListName'] = 'layaairfiles.txt', svrcq_['ziyuFileData'] = {}, u71yf(svrcq_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), svrcq_;
  }(f6y7),
      e832np = function (_vcqs) {
    function ix5hto() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ix5hto['__super']['call'](this), this['_sound'] = ix5hto['_createSound']();
    }m49zdj(ix5hto, 'laya.wx.mini.MiniSound', _vcqs);var d4itj = ix5hto['prototype'];return d4itj['load'] = function (yf6lk) {
      var pbe28 = this;yf6lk = rzc['formatURL'](yf6lk), this['url'] = yf6lk;if (ix5hto['_audioCache'][yf6lk]) {
        this['event']('complete');return;
      }function d9j4zm() {
        if (ix5hto['_null'] != undefined) pbe28['_sound']['onCanplay'](ix5hto['_null']), pbe28['_sound']['onError'](ix5hto['_null']);else try {
          pbe28['_sound']['onCanplay'](null), pbe28['_sound']['onError'](null), ix5hto['_null'] = null;
        } catch (g8n2e3) {
          console['warn']('[wxmini] _clearSound:' + g8n2e3), pbe28['_sound']['onCanplay'](ohpb), pbe28['_sound']['onError'](ohpb), ix5hto['_null'] = ohpb;
        }
      }function f0y7() {
        d9j4zm(), dti5j['loaded'] = !![], dti5j['event']('complete'), ix5hto['_audioCache'][dti5j['url']] = dti5j;
      }function b2hx(_scr9q) {
        console['error']('errCode=' + _scr9q['errCode'] + '  errMsg=' + _scr9q['errMsg']), d9j4zm(), dti5j['event']('error');
      }function ohpb() {}this['_sound']['onCanplay'](f0y7), this['_sound']['onError'](b2hx), this['_sound']['src'] = yf6lk;var dti5j = this;
    }, d4itj['play'] = function (r_q9sc, i5d) {
      r_q9sc === void 0x0 && (r_q9sc = 0x0), i5d === void 0x0 && (i5d = 0x0);var b82xp;if (this['url'] == uw7y['_tMusic']) {
        if (!ix5hto['_musicAudio']) ix5hto['_musicAudio'] = ix5hto['_createSound']();b82xp = ix5hto['_musicAudio'];
      } else b82xp = ix5hto['_createSound']();b82xp['src'] = this['url'];var qcvr_s = new f76yu(b82xp);return qcvr_s['url'] = this['url'], qcvr_s['loops'] = i5d, qcvr_s['startTime'] = r_q9sc, qcvr_s['play'](), uw7y['addChannel'](qcvr_s), qcvr_s;
    }, d4itj['dispose'] = function () {
      var xoibh = ix5hto['_audioCache'][this['url']];xoibh && (xoibh['src'] = '', delete ix5hto['_audioCache'][this['url']]);
    }, e3gn28(0x0, d4itj, 'duration', function () {
      return this['_sound']['duration'];
    }), ix5hto['_createSound'] = function () {
      return ix5hto['_id']++, m9szc['window']['wx']['createInnerAudioContext']();
    }, ix5hto['_musicAudio'] = null, ix5hto['_id'] = 0x0, ix5hto['_audioCache'] = {}, ix5hto['_null'] = undefined, ix5hto;
  }(f6y7),
      f76yu = function (l0k$yf) {
    function cqrvs$($v0lkq) {
      this['_audio'] = null, this['_onEnd'] = null, cqrvs$['__super']['call'](this), this['_audio'] = $v0lkq, this['_onEnd'] = qrv$0l['bind'](this['__onEnd'], this), $v0lkq['onEnded'](this['_onEnd']);
    }m49zdj(cqrvs$, 'laya.wx.mini.MiniSoundChannel', l0k$yf);var n8p2b = cqrvs$['prototype'];return n8p2b['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_zsc9r['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, n8p2b['__onNull'] = function () {}, n8p2b['play'] = function () {
      this['isStopped'] = ![], uw7y['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, n8p2b['stop'] = function () {
      this['isStopped'] = !![], uw7y['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (cqrvs$['_null'] != undefined) this['_audio']['onEnded'](cqrvs$['_null']);else try {
        this['_audio']['onEnded'](null), cqrvs$['_null'] = null;
      } catch ($qlrvs) {
        console['warn']('[wxmini] stop:' + $qlrvs), this['_audio']['onEnded'](qrv$0l['bind'](this['__onNull'], this)), cqrvs$['_null'] = qrv$0l['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, n8p2b['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, n8p2b['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], uw7y['addChannel'](this), this['_audio']['play']();
    }, e3gn28(0x0, n8p2b, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), e3gn28(0x0, n8p2b, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), e3gn28(0x0, n8p2b, 'volume', function () {
      return 0x1;
    }, function (_q9scr) {}), cqrvs$['_null'] = undefined, cqrvs$;
  }(r$sqcv);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var j4t5 in Laya) {
    var hoxbi = Laya[j4t5];hoxbi && hoxbi['__isclass'] && (exports[j4t5] = hoxbi);
  }
});