var o = wx.$U;
(function (window, document, s_akv) {
  var fu34 = s_akv['un'],
      a6r0ck = s_akv['uns'],
      z7dg = s_akv['static'],
      c6rka_ = s_akv['class'],
      wgl97x = s_akv['getset'],
      esf$p = s_akv['__newvec'],
      xqmloi = laya['utils']['Browser'],
      qlxw = laya['events']['Event'],
      vksan = laya['events']['EventDispatcher'],
      s$nv = laya['resource']['HTMLImage'],
      jf43pu = laya['utils']['Handler'],
      z5tgd = laya['display']['Input'],
      k_avns = laya['net']['Loader'],
      lqoxm = laya['maths']['Matrix'],
      e$nsuv = laya['renders']['Render'],
      dz529t = laya['utils']['RunDriver'],
      fuse$ = laya['media']['Sound'],
      iloxm = laya['media']['SoundChannel'],
      xwg7z = laya['media']['SoundManager'],
      e$fp4 = laya['display']['Stage'],
      v_6ca = laya['net']['URL'],
      p3e4u = laya['utils']['Utils'],
      h3ijo = function () {
    function r0kac() {}return c6rka_(r0kac, 'laya.wx.mini.MiniAdpter'), r0kac['getJson'] = function (d9g7wz) {
      return JSON['parse'](d9g7wz);
    }, r0kac['init'] = function (wdgz7, zd9tg) {
      wdgz7 === void 0x0 && (wdgz7 = ![]), zd9tg === void 0x0 && (zd9tg = ![]);if (r0kac['_inited']) return;r0kac['window'] = window;if (r0kac['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;r0kac['_inited'] = !![], r0kac['isZiYu'] = zd9tg, r0kac['isPosMsgYu'] = wdgz7, r0kac['EnvConfig'] = {}, !r0kac['isZiYu'] && (e3u4['setNativeFileDir']('/layaairGame'), e3u4['existDir'](e3u4['fileNativeDir'], jf43pu['create'](r0kac, r0kac['onMkdirCallBack']))), r0kac['window']['focus'] = function () {}, s_akv['getUrlPath'] = function () {}, r0kac['window']['logtime'] = function (gzd7) {}, r0kac['window']['alertTimeLog'] = function (e3u4fp) {}, r0kac['window']['resetShareInfo'] = function () {}, r0kac['window']['CanvasRenderingContext2D'] = function () {}, r0kac['window']['CanvasRenderingContext2D']['prototype'] = r0kac['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], r0kac['window']['document']['body']['appendChild'] = function () {}, r0kac['EnvConfig']['pixelRatioInt'] = 0x0, dz529t['getPixelRatio'] = r0kac['pixelRatio'], r0kac['_preCreateElement'] = xqmloi['createElement'], xqmloi['createElement'] = r0kac['createElement'], dz529t['createShaderCondition'] = r0kac['createShaderCondition'], p3e4u['parseXMLFromString'] = r0kac['parseXMLFromString'], z5tgd['_createInputElement'] = nsvka_['_createInputElement'], r0kac['EnvConfig']['load'] = k_avns['prototype']['load'], k_avns['prototype']['load'] = uf$sp['prototype']['load'], r0kac['isZiYu'] && wdgz7 && wx['onMessage'](function (oihj3m) {
        oihj3m['isLoad'] && (e3u4['ziyuFileData'][oihj3m['url']] = oihj3m['data']);
      });
    }, r0kac['onMkdirCallBack'] = function (qmoxl, qlx7gw) {
      if (!qmoxl) e3u4['filesListObj'] = JSON['parse'](qlx7gw['data']);
    }, r0kac['pixelRatio'] = function () {
      if (!r0kac['EnvConfig']['pixelRatioInt']) try {
        var hmp3 = wx['getSystemInfoSync']();return r0kac['EnvConfig']['pixelRatioInt'] = hmp3['pixelRatio'], hmp3 = hmp3, hmp3['pixelRatio'];
      } catch (n_$) {}return r0kac['EnvConfig']['pixelRatioInt'];
    }, r0kac['createElement'] = function (mohil) {
      if (mohil == 'canvas') {
        var ixl7q;return r0kac['idx'] == 0x1 ? r0kac['isZiYu'] ? (ixl7q = sharedCanvas, ixl7q['style'] = {}) : ixl7q = window['canvas'] : ixl7q = window['wx']['createCanvas'](), r0kac['idx']++, ixl7q;
      } else {
        if (mohil == 'textarea' || mohil == 'input') return r0kac['onCreateInput'](mohil);else {
          if (mohil == 'div') {
            var u4fp$ = r0kac['_preCreateElement'](mohil);return u4fp$['contains'] = function (v$_kns) {
              return null;
            }, u4fp$['removeChild'] = function (c6018) {}, u4fp$;
          } else return r0kac['_preCreateElement'](mohil);
        }
      }
    }, r0kac['onCreateInput'] = function (mjoq) {
      var svnu$ = r0kac['_preCreateElement'](mjoq);return svnu$['focus'] = nsvka_['wxinputFocus'], svnu$['blur'] = nsvka_['wxinputblur'], svnu$['style'] = {}, svnu$['value'] = 0x0, svnu$['parentElement'] = {}, svnu$['placeholder'] = {}, svnu$['type'] = {}, svnu$['setColor'] = function (r180bc) {}, svnu$['setType'] = function (f4pu3j) {}, svnu$['setFontFace'] = function (lw7xqo) {}, svnu$['addEventListener'] = function (wloqx7) {}, svnu$['contains'] = function (wlxg79) {
        return null;
      }, svnu$['removeChild'] = function (esf$nu) {}, svnu$;
    }, r0kac['createShaderCondition'] = function (knv$s_) {
      var ohij3m = this,
          _kc6r = function () {
        var kvsna_ = knv$s_;return ohij3m[knv$s_['replace']('this.', '')];
      };return _kc6r;
    }, r0kac['EnvConfig'] = null, r0kac['window'] = null, r0kac['_preCreateElement'] = null, r0kac['_inited'] = ![], r0kac['wxRequest'] = null, r0kac['systemInfo'] = null, r0kac['version'] = '0.0.1', r0kac['isZiYu'] = ![], r0kac['isPosMsgYu'] = ![], r0kac['parseXMLFromString'] = function (fe$uns) {
      var _vsk$n, mj3p4;fe$uns = fe$uns['replace'](/>\s+</g, '><');try {
        _vsk$n = new window['Parser']['DOMParser']()['parseFromString'](fe$uns, 'text/xml');
      } catch (y01b8) {
        throw '需要引入xml解析库文件';
      }return _vsk$n;
    }, r0kac['idx'] = 0x1, r0kac;
  }(),
      $sefu = function () {
    function pue() {}c6rka_(pue, 'laya.wx.mini.MiniImage');var e4u$f = pue['prototype'];return e4u$f['_loadImage'] = function (w5dzg9) {
      var z9g5dt = this,
          f$nsue = ![];w5dzg9['indexOf']('layaNativeDir/') == -0x1 && (f$nsue = !![], w5dzg9 = v_6ca['formatURL'](w5dzg9));if (!e3u4['getFileInfo'](w5dzg9)) {
        if (w5dzg9['indexOf']('http://') != -0x1 || w5dzg9['indexOf']('https://') != -0x1) e3u4['downImg'](w5dzg9, new jf43pu(pue, pue['onDownImgCallBack'], [w5dzg9, z9g5dt]), w5dzg9);else pue['onCreateImage'](w5dzg9, z9g5dt, !![]);
      } else pue['onCreateImage'](w5dzg9, z9g5dt, !f$nsue);
    }, pue['onDownImgCallBack'] = function (lqw7o, a6vk_c, $usep) {
      if (!$usep) pue['onCreateImage'](lqw7o, a6vk_c);else a6vk_c['onError'](null);
    }, pue['onCreateImage'] = function (y10b, ak_vs, v_kn6) {
      v_kn6 === void 0x0 && (v_kn6 = ![]);var nsk;if (!v_kn6) {
        var qxlm = e3u4['getFileInfo'](y10b),
            hi3omj = qxlm['md5'];nsk = e3u4['getFileNativePath'](hi3omj);
      } else nsk = y10b;if (ak_vs['imgCache'] == null) ak_vs['imgCache'] = {};var uesn$v;function zdt5g() {
        uesn$v['onload'] = null, uesn$v['onerror'] = null, delete ak_vs['imgCache'][y10b];
      };var j4fph = function () {
        zdt5g(), ak_vs['onLoaded'](uesn$v);
      },
          n$_esv = function () {
        zdt5g(), ak_vs['event']('error', 'Load image failed');
      };ak_vs['_type'] == 'nativeimage' ? (uesn$v = new xqmloi['window']['Image'](), uesn$v['crossOrigin'] = '', uesn$v['onload'] = j4fph, uesn$v['onerror'] = n$_esv, uesn$v['src'] = nsk, ak_vs['imgCache'][y10b] = uesn$v) : new s$nv['create'](nsk, { 'onload': j4fph, 'onerror': n$_esv, 'onCreate': function (v_n$s) {
          uesn$v = v_n$s, ak_vs['imgCache'][y10b] = v_n$s;
        } });
    }, pue;
  }(),
      nsvka_ = function () {
    function xlwqo() {}return c6rka_(xlwqo, 'laya.wx.mini.MiniInput'), xlwqo['_createInputElement'] = function () {
      z5tgd['_initInput'](z5tgd['area'] = xqmloi['createElement']('textarea')), z5tgd['_initInput'](z5tgd['input'] = xqmloi['createElement']('input')), z5tgd['inputContainer'] = xqmloi['createElement']('div'), z5tgd['inputContainer']['style']['position'] = 'absolute', z5tgd['inputContainer']['style']['zIndex'] = 0x186a0, xqmloi['container']['appendChild'](z5tgd['inputContainer']), z5tgd['inputContainer']['setPos'] = function (eus$fn, dzw59g) {
        z5tgd['inputContainer']['style']['left'] = eus$fn + 'px', z5tgd['inputContainer']['style']['top'] = dzw59g + 'px';
      }, s_akv['stage']['on']('resize', null, xlwqo['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (z259d) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xwg7z['_soundClass'] = e$ufns, xwg7z['_musicClass'] = e$ufns;
    }, xlwqo['_onStageResize'] = function () {
      var k_avn = s_akv['stage']['_canvasTransform']['identity']();k_avn['scale'](xqmloi['width'] / e$nsuv['canvas']['width'] / dz529t['getPixelRatio'](), xqmloi['height'] / e$nsuv['canvas']['height'] / dz529t['getPixelRatio']());
    }, xlwqo['wxinputFocus'] = function (z79wg) {
      var zt9g = z5tgd['inputElement']['target'];if (zt9g && !zt9g['editable']) return;h3ijo['window']['wx']['offKeyboardConfirm'](), h3ijo['window']['wx']['offKeyboardInput'](), h3ijo['window']['wx']['showKeyboard']({ 'defaultValue': zt9g['text'], 'maxLength': zt9g['maxChars'], 'multiple': zt9g['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wdg5z9) {}, 'fail': function (imhjo3) {} }), h3ijo['window']['wx']['onKeyboardConfirm'](function (ar6k_) {
        var mlqio = ar6k_ ? ar6k_['value'] : '';zt9g['text'] = mlqio, zt9g['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), h3ijo['window']['wx']['onKeyboardInput'](function (mixlqo) {
        var a6k0r = mixlqo ? mixlqo['value'] : '';if (!zt9g['multiline']) {
          if (a6k0r['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zt9g['text'] = a6k0r, zt9g['event']('input');
      });
    }, xlwqo['inputEnter'] = function () {
      z5tgd['inputElement']['target']['focus'] = ![];
    }, xlwqo['wxinputblur'] = function () {
      xlwqo['hideKeyboard']();
    }, xlwqo['hideKeyboard'] = function () {
      h3ijo['window']['wx']['offKeyboardConfirm'](), h3ijo['window']['wx']['offKeyboardInput'](), h3ijo['window']['wx']['hideKeyboard']({ 'success': function (avn6k_) {
          console['log']('隐藏键盘');
        }, 'fail': function (gwd7z) {
          console['log']('隐藏键盘出错:' + (gwd7z ? gwd7z['errMsg'] : ''));
        } });
    }, xlwqo;
  }(),
      uf$sp = function () {
    function vk_sna() {}c6rka_(vk_sna, 'laya.wx.mini.MiniLoader');var e$vuns = vk_sna['prototype'];return e$vuns['load'] = function (ihmqj, z2d9t5, ackv_6, mi3j4, xg7zw9) {
      ackv_6 === void 0x0 && (ackv_6 = !![]), xg7zw9 === void 0x0 && (xg7zw9 = ![]);var wg59d = this;wg59d['_url'] = ihmqj;if (ihmqj['indexOf']('data:image') === 0x0) wg59d['_type'] = z2d9t5 = 'image';else wg59d['_type'] = z2d9t5 || (z2d9t5 = wg59d['getTypeFromUrl'](ihmqj));wg59d['_cache'] = ackv_6, wg59d['_data'] = null;var $envsu = 'ascii';if (ihmqj['indexOf']('.fnt') != -0x1) $envsu = 'utf8';else z2d9t5 == 'arraybuffer' && ($envsu = '');;var b0ry18 = p3e4u['getFileExtension'](ihmqj);if (vk_sna['_fileTypeArr']['indexOf'](b0ry18) != -0x1) h3ijo['EnvConfig']['load']['call'](this, ihmqj, z2d9t5, ackv_6, mi3j4, xg7zw9);else {
        if (!e3u4['getFileInfo'](ihmqj)) {
          if (ihmqj['indexOf']('layaNativeDir/') != -0x1) {
            if (h3ijo['isZiYu']) {
              var p4mh = e3u4['ziyuFileData'][ihmqj];wg59d['onLoaded'](p4mh);return;
            } else {
              cosnole['log']('read read'), e3u4['read'](ihmqj, $envsu, new jf43pu(vk_sna, vk_sna['onReadNativeCallBack'], [$envsu, ihmqj, z2d9t5, ackv_6, mi3j4, xg7zw9, wg59d]));return;
            }
          }if (v_6ca['rootPath'] == '') var qiloh = ihmqj;else qiloh = ihmqj['split'](v_6ca['rootPath'])[0x0];ihmqj['indexOf']('http://') != -0x1 || ihmqj['indexOf']('https://') != -0x1 ? h3ijo['EnvConfig']['load']['call'](wg59d, ihmqj, z2d9t5, ackv_6, mi3j4, xg7zw9) : e3u4['readFile'](qiloh, $envsu, new jf43pu(vk_sna, vk_sna['onReadNativeCallBack'], [$envsu, ihmqj, z2d9t5, ackv_6, mi3j4, xg7zw9, wg59d]), ihmqj);
        } else h3ijo['EnvConfig']['load']['call'](this, ihmqj, z2d9t5, ackv_6, mi3j4, xg7zw9);
      }
    }, e$vuns['resMgrLoad'] = function (ilx7oq, _na6k, iqmjho, $fu, ijo3hm, fue3p, omhqli) {
      iqmjho === void 0x0 && (iqmjho = 0x0), $fu === void 0x0 && ($fu = ![]), ijo3hm === void 0x0 && (ijo3hm = ![]), fue3p === void 0x0 && (fue3p = 0x0), omhqli === void 0x0 && (omhqli = 0x3), ilx7oq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ilx7oq), h3ijo['EnvConfig']['resMgrLoad'](ilx7oq, (_nka, br108c, xlmioq) => {
        vk_sna['prototype']['resMgrLoadCallBack'](_nka, br108c, xlmioq, _na6k);
      }, iqmjho, $fu, ijo3hm, fue3p, omhqli);
    }, e$vuns['resMgrLoadCallBack'] = function (_ksv$, c8rb0, r108c6, xlqwo) {
      console['log']('buff:::', _ksv$, r108c6, e3u4['fileNativeDir'] + '///' + e3u4['fileListName']), xlqwo(_ksv$, c8rb0, r108c6);
    }, e$vuns['clearRes'] = function (esn$v_, vn$k_) {
      vn$k_ === void 0x0 && (vn$k_ = ![]);var ep$f4 = this;ep$f4['clearRes'](esn$v_, vn$k_);var ar_ = e3u4['getFileInfo'](esn$v_);if (ar_ && (esn$v_['indexOf']('http://') != -0x1 || esn$v_['indexOf']('https://') != -0x1)) {
        var v$n_sk = ar_['md5'],
            y1b8 = e3u4['getFileNativePath'](v$n_sk);e3u4['remove'](y1b8);
      }
    }, vk_sna['onReadNativeCallBack'] = function (jmiqoh, qoil7x, ep$f4u, eunfs, hi4m3, ar6_, oiqhj, owqlx, wlg7xq) {
      eunfs === void 0x0 && (eunfs = !![]), ar6_ === void 0x0 && (ar6_ = ![]), owqlx === void 0x0 && (owqlx = 0x0);if (!owqlx) {
        var ra0ck6;if (ep$f4u == 'json' || ep$f4u == 'atlas') ra0ck6 = h3ijo['getJson'](wlg7xq['data']);else ep$f4u == 'xml' ? ra0ck6 = p3e4u['parseXMLFromString'](wlg7xq['data']) : ra0ck6 = wlg7xq['data'];oiqhj['onLoaded'](ra0ck6), !h3ijo['isZiYu'] && h3ijo['isPosMsgYu'] && ep$f4u != 'arraybuffer' && wx['postMessage']({ 'url': qoil7x, 'data': ra0ck6, 'isLoad': !![] });
      } else owqlx == 0x1 && h3ijo['EnvConfig']['load']['call'](oiqhj, qoil7x, ep$f4u, eunfs, hi4m3, ar6_);
    }, z7dg(vk_sna, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vk_sna;
  }(),
      e3u4 = function (fpuse$) {
    function _6kvac() {
      _6kvac['__super']['call'](this);;
    }return c6rka_(_6kvac, 'laya.wx.mini.MiniFileMgr', fpuse$), _6kvac['isLoadFile'] = function (spu$fe) {
      return _6kvac['_fileTypeArr']['indexOf'](spu$fe) != -0x1 ? !![] : ![];
    }, _6kvac['getFileInfo'] = function (cr8610) {
      var dt = cr8610['split']('?')[0x0],
          fue$ns = _6kvac['filesListObj'][dt];if (fue$ns == null) return null;else return fue$ns;return null;
    }, _6kvac['onFileUpdate'] = function (psf$u, qlg7w) {
      var lxg7w9 = psf$u['split']('/'),
          skavn = lxg7w9[lxg7w9['length'] - 0x1],
          qmih = _6kvac['getFileInfo'](qlg7w);if (qmih == null) _6kvac['onSaveFile'](qlg7w, skavn);else {
        if (qmih['readyUrl'] != qlg7w) _6kvac['remove'](skavn, qlg7w);
      }
    }, _6kvac['exits'] = function (g7zdw9, g7qxlw) {
      var arc = _6kvac['getFileNativePath'](g7zdw9);_6kvac['fs']['getFileInfo']({ 'filePath': arc, 'success': function (esvn_) {
          g7qxlw != null && g7qxlw['runWith']([0x0, esvn_]);
        }, 'fail': function (glq7w) {
          g7qxlw != null && g7qxlw['runWith']([0x1, glq7w]);
        } });
    }, _6kvac['read'] = function (knav, kvs_n$, xioqm, oxlqi7) {
      kvs_n$ === void 0x0 && (kvs_n$ = 'ascill'), oxlqi7 === void 0x0 && (oxlqi7 = '');var w9zdg5;oxlqi7 != '' ? w9zdg5 = _6kvac['getFileNativePath'](knav) : w9zdg5 = knav, _6kvac['fs']['readFile']({ 'filePath': w9zdg5, 'encoding': kvs_n$, 'success': function (usfpe) {
          xioqm != null && xioqm['runWith']([0x0, usfpe]);
        }, 'fail': function (jfp3u) {
          if (jfp3u && oxlqi7 != '') _6kvac['down'](oxlqi7, kvs_n$, xioqm, oxlqi7);else xioqm != null && xioqm['runWith']([0x1]);
        } });
    }, _6kvac['readNativeFile'] = function (fue$s, f$eusn) {
      _6kvac['fs']['readFile']({ 'filePath': fue$s, 'encoding': '', 'success': function (gl7xqw) {
          f$eusn != null && f$eusn['runWith']([0x0]);
        }, 'fail': function (vakns_) {
          f$eusn != null && f$eusn['runWith']([0x1]);
        } });
    }, _6kvac['down'] = function (jfp34u, dwgz97, mji34, n$evus) {
      dwgz97 === void 0x0 && (dwgz97 = 'ascill'), n$evus === void 0x0 && (n$evus = '');var $nefs = _6kvac['getFileNativePath'](n$evus),
          _akr6c = _6kvac['wxdown']({ 'url': jfp34u, 'filePath': $nefs, 'success': function (lhomi) {
          if (lhomi['statusCode'] === 0xc8) _6kvac['readFile'](lhomi['filePath'], dwgz97, mji34, n$evus);
        }, 'fail': function (pfue$4) {
          mji34 != null && mji34['runWith']([0x1, pfue$4]);
        } });_akr6c['onProgressUpdate'](function (fusne) {
        mji34 != null && mji34['runWith']([0x2, fusne['progress']]);
      });
    }, _6kvac['readFile'] = function (ufne$s, jfp4u, s_vank, acr_k6) {
      jfp4u === void 0x0 && (jfp4u = 'ascill'), acr_k6 === void 0x0 && (acr_k6 = ''), _6kvac['fs']['readFile']({ 'filePath': ufne$s, 'encoding': jfp4u, 'success': function (p3jfu) {
          if (ufne$s['indexOf']('http://') != -0x1 || ufne$s['indexOf']('https://') != -0x1) _6kvac['onFileUpdate'](ufne$s, acr_k6);s_vank != null && s_vank['runWith']([0x0, p3jfu]);
        }, 'fail': function (xqgl7w) {
          if (xqgl7w) s_vank != null && s_vank['runWith']([0x1, xqgl7w]);
        } });
    }, _6kvac['downImg'] = function (t9dz5, m4hi3, c0r6ka) {
      c0r6ka === void 0x0 && (c0r6ka = '');var wlx9g = _6kvac['wxdown']({ 'url': t9dz5, 'success': function (oqmxi) {
          oqmxi['statusCode'] === 0xc8 && _6kvac['copyFile'](oqmxi['tempFilePath'], c0r6ka, m4hi3);
        }, 'fail': function (zt5g9d) {
          m4hi3 != null && m4hi3['runWith']([0x1, zt5g9d]);
        } });
    }, _6kvac['copyFile'] = function (f$e4p, k6av_c, $pefus) {
      var lmqohi = f$e4p['split']('/'),
          s$_kvn = lmqohi[lmqohi['length'] - 0x1],
          ka_cr6 = k6av_c['split']('?')[0x0],
          va_6n = _6kvac['getFileInfo'](k6av_c),
          zx97g = _6kvac['getFileNativePath'](s$_kvn);_6kvac['fs']['copyFile']({ 'srcPath': f$e4p, 'destPath': zx97g, 'success': function (v_en) {
          if (!va_6n) _6kvac['onSaveFile'](k6av_c, s$_kvn), $pefus != null && $pefus['runWith']([0x0]);else {
            if (va_6n['readyUrl'] != k6av_c) _6kvac['remove'](s$_kvn, k6av_c, $pefus);
          }
        }, 'fail': function (ph3m4) {
          $pefus != null && $pefus['runWith']([0x1, ph3m4]);
        } });
    }, _6kvac['getFileNativePath'] = function (fj34hp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fj34hp;
    }, _6kvac['remove'] = function (gx9zw, ep43uf, d25tz9) {
      ep43uf === void 0x0 && (ep43uf = '');var svnak = _6kvac['getFileInfo'](ep43uf),
          uf$eps = _6kvac['getFileNativePath'](svnak['md5']);s_akv['loader']['clearRes'](svnak['readyUrl']), _6kvac['fs']['unlink']({ 'filePath': uf$eps, 'success': function (r60akc) {
          if (ep43uf != '') _6kvac['onSaveFile'](ep43uf, gx9zw);d25tz9 != null && d25tz9['runWith']([0x0]);
        }, 'fail': function (j3u4pf) {} });
    }, _6kvac['onSaveFile'] = function (qliomx, d9zw7g) {
      var w95z = qliomx['split']('?')[0x0];_6kvac['filesListObj'][w95z] = { 'md5': d9zw7g, 'readyUrl': qliomx }, _6kvac['fs']['writeFile']({ 'filePath': _6kvac['fileNativeDir'] + '/' + _6kvac['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_6kvac['filesListObj']), 'success': function (jomhi) {
          console['log']('写入测试测试成功：', jomhi);
        }, 'fail': function (hilmqo) {
          console['log']('写入测试测试失败：', hilmqo);
        } });
    }, _6kvac['existDir'] = function (w5zgd, lq7w) {
      _6kvac['fs']['mkdir']({ 'dirPath': w5zgd, 'success': function (ihqmjo) {
          lq7w != null && lq7w['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (c0618r) {
          if (c0618r['errMsg']['indexOf']('file already exists') != -0x1) _6kvac['readSync'](_6kvac['fileListName'], 'utf8', lq7w);else lq7w != null && lq7w['runWith']([0x1, c0618r]);
        } });
    }, _6kvac['readSync'] = function (m4h3ij, _svkna, mjhi, en$s_) {
      _svkna === void 0x0 && (_svkna = 'ascill'), en$s_ === void 0x0 && (en$s_ = '');var envs$u = _6kvac['getFileNativePath'](m4h3ij),
          dt25z9;try {
        dt25z9 = _6kvac['fs']['readFileSync'](envs$u), mjhi != null && mjhi['runWith']([0x0, { 'data': dt25z9 }]);
      } catch (cbr1) {
        mjhi != null && mjhi['runWith']([0x1]);
      }
    }, _6kvac['readCache'] = function () {}, _6kvac['writeCache'] = function (v$_n) {
      var s$knv_ = readyUrl['split']('?')[0x0];_6kvac['filesListObj'][s$knv_] = { 'md5': md5Name, 'readyUrl': readyUrl }, _6kvac['fs']['writeFile']({ 'filePath': _6kvac['fileNativeDir'] + '/' + _6kvac['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_6kvac['filesListObj']), 'success': function (_n$vks) {}, 'fail': function (imqho) {} });
    }, _6kvac['setNativeFileDir'] = function (xwl97g) {
      _6kvac['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xwl97g;
    }, _6kvac['filesListObj'] = {}, _6kvac['fileNativeDir'] = null, _6kvac['fileListName'] = 'layaairfiles.txt', _6kvac['ziyuFileData'] = {}, z7dg(_6kvac, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _6kvac;
  }(vksan),
      e$ufns = function (k6r_ac) {
    function s_knv$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], s_knv$['__super']['call'](this), this['_sound'] = s_knv$['_createSound']();
    }c6rka_(s_knv$, 'laya.wx.mini.MiniSound', k6r_ac);var oilqhm = s_knv$['prototype'];return oilqhm['load'] = function (xwz79) {
      var a6_vc = this;xwz79 = v_6ca['formatURL'](xwz79), this['url'] = xwz79;if (s_knv$['_audioCache'][xwz79]) {
        this['event']('complete');return;
      }function w7qxol() {
        if (s_knv$['_null'] != undefined) a6_vc['_sound']['onCanplay'](s_knv$['_null']), a6_vc['_sound']['onError'](s_knv$['_null']);else try {
          a6_vc['_sound']['onCanplay'](null), a6_vc['_sound']['onError'](null), s_knv$['_null'] = null;
        } catch (oqw7) {
          console['warn']('[wxmini] _clearSound:' + oqw7), a6_vc['_sound']['onCanplay'](acr6k_), a6_vc['_sound']['onError'](acr6k_), s_knv$['_null'] = acr6k_;
        }
      }function zwd95g() {
        w7qxol(), jfp4h['loaded'] = !![], jfp4h['event']('complete'), s_knv$['_audioCache'][jfp4h['url']] = jfp4h;
      }function c0br81(n_ve$s) {
        console['error']('errCode=' + n_ve$s['errCode'] + '  errMsg=' + n_ve$s['errMsg']), w7qxol(), jfp4h['event']('error');
      }function acr6k_() {}this['_sound']['onCanplay'](zwd95g), this['_sound']['onError'](c0br81), this['_sound']['src'] = xwz79;var jfp4h = this;
    }, oilqhm['play'] = function (gzw7x, $_kvn) {
      gzw7x === void 0x0 && (gzw7x = 0x0), $_kvn === void 0x0 && ($_kvn = 0x0);var e_$vsn;if (this['url'] == xwg7z['_tMusic']) {
        if (!s_knv$['_musicAudio']) s_knv$['_musicAudio'] = s_knv$['_createSound']();e_$vsn = s_knv$['_musicAudio'];
      } else e_$vsn = s_knv$['_createSound']();e_$vsn['src'] = this['url'];var c0ar = new w7x9gl(e_$vsn);return c0ar['url'] = this['url'], c0ar['loops'] = $_kvn, c0ar['startTime'] = gzw7x, c0ar['play'](), xwg7z['addChannel'](c0ar), c0ar;
    }, oilqhm['dispose'] = function () {
      var z95dtg = s_knv$['_audioCache'][this['url']];z95dtg && (z95dtg['src'] = '', delete s_knv$['_audioCache'][this['url']]);
    }, wgl97x(0x0, oilqhm, 'duration', function () {
      return this['_sound']['duration'];
    }), s_knv$['_createSound'] = function () {
      return s_knv$['_id']++, h3ijo['window']['wx']['createInnerAudioContext']();
    }, s_knv$['_musicAudio'] = null, s_knv$['_id'] = 0x0, s_knv$['_audioCache'] = {}, s_knv$['_null'] = undefined, s_knv$;
  }(vksan),
      w7x9gl = function (w95gz) {
    function van6k(bry8) {
      this['_audio'] = null, this['_onEnd'] = null, van6k['__super']['call'](this), this['_audio'] = bry8, this['_onEnd'] = p3e4u['bind'](this['__onEnd'], this), bry8['onEnded'](this['_onEnd']);
    }c6rka_(van6k, 'laya.wx.mini.MiniSoundChannel', w95gz);var gd5t9 = van6k['prototype'];return gd5t9['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (s_akv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gd5t9['__onNull'] = function () {}, gd5t9['play'] = function () {
      this['isStopped'] = ![], xwg7z['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, gd5t9['stop'] = function () {
      this['isStopped'] = !![], xwg7z['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (van6k['_null'] != undefined) this['_audio']['onEnded'](van6k['_null']);else try {
        this['_audio']['onEnded'](null), van6k['_null'] = null;
      } catch ($fsenu) {
        console['warn']('[wxmini] stop:' + $fsenu), this['_audio']['onEnded'](p3e4u['bind'](this['__onNull'], this)), van6k['_null'] = p3e4u['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, gd5t9['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, gd5t9['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xwg7z['addChannel'](this), this['_audio']['play']();
    }, wgl97x(0x0, gd5t9, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), wgl97x(0x0, gd5t9, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), wgl97x(0x0, gd5t9, 'volume', function () {
      return 0x1;
    }, function (sne$_) {}), van6k['_null'] = undefined, van6k;
  }(iloxm);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var j4hmi3 in Laya) {
    var a_cr6k = Laya[j4hmi3];a_cr6k && a_cr6k['__isclass'] && (exports[j4hmi3] = a_cr6k);
  }
});