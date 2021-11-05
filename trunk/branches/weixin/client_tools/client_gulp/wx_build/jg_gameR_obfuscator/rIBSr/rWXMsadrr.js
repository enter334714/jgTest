var i = wx.$R;
(function (window, document, j2zsxi) {
  var ji2yx = j2zsxi['un'],
      b$ua = j2zsxi['uns'],
      t0sv3l = j2zsxi['static'],
      x2sjz = j2zsxi['class'],
      fcqndp = j2zsxi['getset'],
      qg7erm = j2zsxi['__newvec'],
      jix2 = laya['utils']['Browser'],
      j8xoiy = laya['events']['Event'],
      fegdq = laya['events']['EventDispatcher'],
      io2jxy = laya['resource']['HTMLImage'],
      _au1$ = laya['utils']['Handler'],
      km7w8 = laya['display']['Input'],
      qr7gm = laya['net']['Loader'],
      cfnd6 = laya['maths']['Matrix'],
      em7qgr = laya['renders']['Render'],
      xs3tz2 = laya['utils']['RunDriver'],
      edqnfp = laya['media']['Sound'],
      h5n_c6 = laya['media']['SoundChannel'],
      lt3z2s = laya['media']['SoundManager'],
      rg7k = laya['display']['Stage'],
      wki8yo = laya['net']['URL'],
      $b1a9 = laya['utils']['Utils'],
      sji2z = function () {
    function grmw() {}return x2sjz(grmw, 'laya.wx.mini.MiniAdpter'), grmw['getJson'] = function (g7rk) {
      return JSON['parse'](g7rk);
    }, grmw['init'] = function (rm7wg, x8yjo) {
      rm7wg === void 0x0 && (rm7wg = ![]), x8yjo === void 0x0 && (x8yjo = ![]);if (grmw['_inited']) return;grmw['window'] = window;if (grmw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;grmw['_inited'] = !![], grmw['isZiYu'] = x8yjo, grmw['isPosMsgYu'] = rm7wg, grmw['EnvConfig'] = {}, !grmw['isZiYu'] && (o8jk['setNativeFileDir']('/layaairGame'), o8jk['existDir'](o8jk['fileNativeDir'], _au1$['create'](grmw, grmw['onMkdirCallBack']))), grmw['window']['focus'] = function () {}, j2zsxi['getUrlPath'] = function () {}, grmw['window']['logtime'] = function (jstxz2) {}, grmw['window']['alertTimeLog'] = function (a_1u) {}, grmw['window']['resetShareInfo'] = function () {}, grmw['window']['CanvasRenderingContext2D'] = function () {}, grmw['window']['CanvasRenderingContext2D']['prototype'] = grmw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], grmw['window']['document']['body']['appendChild'] = function () {}, grmw['EnvConfig']['pixelRatioInt'] = 0x0, xs3tz2['getPixelRatio'] = grmw['pixelRatio'], grmw['_preCreateElement'] = jix2['createElement'], jix2['createElement'] = grmw['createElement'], xs3tz2['createShaderCondition'] = grmw['createShaderCondition'], $b1a9['parseXMLFromString'] = grmw['parseXMLFromString'], km7w8['_createInputElement'] = sx23tz['_createInputElement'], grmw['EnvConfig']['load'] = qr7gm['prototype']['load'], qr7gm['prototype']['load'] = mrw7['prototype']['load'], grmw['isZiYu'] && rm7wg && wx['onMessage'](function (j2ixyo) {
        j2ixyo['isLoad'] && (o8jk['ziyuFileData'][j2ixyo['url']] = j2ixyo['data']);
      });
    }, grmw['onMkdirCallBack'] = function ($1ab4, nfh5c6) {
      if (!$1ab4) o8jk['filesListObj'] = JSON['parse'](nfh5c6['data']);
    }, grmw['pixelRatio'] = function () {
      if (!grmw['EnvConfig']['pixelRatioInt']) try {
        var degfqp = wx['getSystemInfoSync']();return grmw['EnvConfig']['pixelRatioInt'] = degfqp['pixelRatio'], degfqp = degfqp, degfqp['pixelRatio'];
      } catch (peqfdg) {}return grmw['EnvConfig']['pixelRatioInt'];
    }, grmw['createElement'] = function (ha_1ub) {
      if (ha_1ub == 'canvas') {
        var qpndfe;return grmw['idx'] == 0x1 ? grmw['isZiYu'] ? (qpndfe = sharedCanvas, qpndfe['style'] = {}) : qpndfe = window['canvas'] : qpndfe = window['wx']['createCanvas'](), grmw['idx']++, qpndfe;
      } else {
        if (ha_1ub == 'textarea' || ha_1ub == 'input') return grmw['onCreateInput'](ha_1ub);else {
          if (ha_1ub == 'div') {
            var $b14a = grmw['_preCreateElement'](ha_1ub);return $b14a['contains'] = function (ua1$) {
              return null;
            }, $b14a['removeChild'] = function (fdnc56) {}, $b14a;
          } else return grmw['_preCreateElement'](ha_1ub);
        }
      }
    }, grmw['onCreateInput'] = function (xoij2z) {
      var vl0s3 = grmw['_preCreateElement'](xoij2z);return vl0s3['focus'] = sx23tz['wxinputFocus'], vl0s3['blur'] = sx23tz['wxinputblur'], vl0s3['style'] = {}, vl0s3['value'] = 0x0, vl0s3['parentElement'] = {}, vl0s3['placeholder'] = {}, vl0s3['type'] = {}, vl0s3['setColor'] = function (fdnp5) {}, vl0s3['setType'] = function (zsj2tx) {}, vl0s3['setFontFace'] = function (yiokj) {}, vl0s3['addEventListener'] = function (oijx2y) {}, vl0s3['contains'] = function (a$91) {
        return null;
      }, vl0s3['removeChild'] = function (szt2xj) {}, vl0s3;
    }, grmw['createShaderCondition'] = function (m8yrw) {
      var s2tzjx = this,
          hfcn5 = function () {
        var ts0vl = m8yrw;return s2tzjx[m8yrw['replace']('this.', '')];
      };return hfcn5;
    }, grmw['EnvConfig'] = null, grmw['window'] = null, grmw['_preCreateElement'] = null, grmw['_inited'] = ![], grmw['wxRequest'] = null, grmw['systemInfo'] = null, grmw['version'] = '0.0.1', grmw['isZiYu'] = ![], grmw['isPosMsgYu'] = ![], grmw['parseXMLFromString'] = function (g7rmk) {
      var egf, r8wm7k;g7rmk = g7rmk['replace'](/>\s+</g, '><');try {
        egf = new window['Parser']['DOMParser']()['parseFromString'](g7rmk, 'text/xml');
      } catch (g7merq) {
        throw '需要引入xml解析库文件';
      }return egf;
    }, grmw['idx'] = 0x1, grmw;
  }(),
      c_56u = function () {
    function k8w() {}x2sjz(k8w, 'laya.wx.mini.MiniImage');var _hba1 = k8w['prototype'];return _hba1['_loadImage'] = function (rmky) {
      var mgq = this,
          xs2t = ![];rmky['indexOf']('layaNativeDir/') == -0x1 && (xs2t = !![], rmky = wki8yo['formatURL'](rmky));if (!o8jk['getFileInfo'](rmky)) {
        if (rmky['indexOf']('http://') != -0x1 || rmky['indexOf']('https://') != -0x1) o8jk['downImg'](rmky, new _au1$(k8w, k8w['onDownImgCallBack'], [rmky, mgq]), rmky);else k8w['onCreateImage'](rmky, mgq, !![]);
      } else k8w['onCreateImage'](rmky, mgq, !xs2t);
    }, k8w['onDownImgCallBack'] = function (tslv3, xjyi2o, wkmo) {
      if (!wkmo) k8w['onCreateImage'](tslv3, xjyi2o);else xjyi2o['onError'](null);
    }, k8w['onCreateImage'] = function (gp7qed, a61u, pcdfnq) {
      pcdfnq === void 0x0 && (pcdfnq = ![]);var ox2i;if (!pcdfnq) {
        var gde = o8jk['getFileInfo'](gp7qed),
            a4b$1 = gde['md5'];ox2i = o8jk['getFileNativePath'](a4b$1);
      } else ox2i = gp7qed;if (a61u['imgCache'] == null) a61u['imgCache'] = {};var joz2x;function nh6c_5() {
        joz2x['onload'] = null, joz2x['onerror'] = null, delete a61u['imgCache'][gp7qed];
      };var rkwg7m = function () {
        nh6c_5(), a61u['onLoaded'](joz2x);
      },
          a$1u = function () {
        nh6c_5(), a61u['event']('error', 'Load image failed');
      };a61u['_type'] == 'nativeimage' ? (joz2x = new jix2['window']['Image'](), joz2x['crossOrigin'] = '', joz2x['onload'] = rkwg7m, joz2x['onerror'] = a$1u, joz2x['src'] = ox2i, a61u['imgCache'][gp7qed] = joz2x) : new io2jxy['create'](ox2i, { 'onload': rkwg7m, 'onerror': a$1u, 'onCreate': function ($_1bu) {
          joz2x = $_1bu, a61u['imgCache'][gp7qed] = $_1bu;
        } });
    }, k8w;
  }(),
      sx23tz = function () {
    function g7qepd() {}return x2sjz(g7qepd, 'laya.wx.mini.MiniInput'), g7qepd['_createInputElement'] = function () {
      km7w8['_initInput'](km7w8['area'] = jix2['createElement']('textarea')), km7w8['_initInput'](km7w8['input'] = jix2['createElement']('input')), km7w8['inputContainer'] = jix2['createElement']('div'), km7w8['inputContainer']['style']['position'] = 'absolute', km7w8['inputContainer']['style']['zIndex'] = 0x186a0, jix2['container']['appendChild'](km7w8['inputContainer']), km7w8['inputContainer']['setPos'] = function (kio8wy, pnqc) {
        km7w8['inputContainer']['style']['left'] = kio8wy + 'px', km7w8['inputContainer']['style']['top'] = pnqc + 'px';
      }, j2zsxi['stage']['on']('resize', null, g7qepd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (myo8wk) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), lt3z2s['_soundClass'] = rme7w, lt3z2s['_musicClass'] = rme7w;
    }, g7qepd['_onStageResize'] = function () {
      var _h6nc = j2zsxi['stage']['_canvasTransform']['identity']();_h6nc['scale'](jix2['width'] / em7qgr['canvas']['width'] / xs3tz2['getPixelRatio'](), jix2['height'] / em7qgr['canvas']['height'] / xs3tz2['getPixelRatio']());
    }, g7qepd['wxinputFocus'] = function (k8m7) {
      var t32z = km7w8['inputElement']['target'];if (t32z && !t32z['editable']) return;sji2z['window']['wx']['offKeyboardConfirm'](), sji2z['window']['wx']['offKeyboardInput'](), sji2z['window']['wx']['showKeyboard']({ 'defaultValue': t32z['text'], 'maxLength': t32z['maxChars'], 'multiple': t32z['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qr7egm) {}, 'fail': function (d6ncf5) {} }), sji2z['window']['wx']['onKeyboardConfirm'](function (cn65hf) {
        var e7pgq = cn65hf ? cn65hf['value'] : '';t32z['text'] = e7pgq, t32z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sji2z['window']['wx']['onKeyboardInput'](function (cpdfqn) {
        var jixs = cpdfqn ? cpdfqn['value'] : '';if (!t32z['multiline']) {
          if (jixs['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }t32z['text'] = jixs, t32z['event']('input');
      });
    }, g7qepd['inputEnter'] = function () {
      km7w8['inputElement']['target']['focus'] = ![];
    }, g7qepd['wxinputblur'] = function () {
      g7qepd['hideKeyboard']();
    }, g7qepd['hideKeyboard'] = function () {
      sji2z['window']['wx']['offKeyboardConfirm'](), sji2z['window']['wx']['offKeyboardInput'](), sji2z['window']['wx']['hideKeyboard']({ 'success': function (m7) {
          console['log']('隐藏键盘');
        }, 'fail': function (kwm7) {
          console['log']('隐藏键盘出错:' + (kwm7 ? kwm7['errMsg'] : ''));
        } });
    }, g7qepd;
  }(),
      mrw7 = function () {
    function ub$a9() {}x2sjz(ub$a9, 'laya.wx.mini.MiniLoader');var h_6a = ub$a9['prototype'];return h_6a['load'] = function (v03lst, u6h1_5, qgfpd, mr7k, j2sxiz) {
      qgfpd === void 0x0 && (qgfpd = !![]), j2sxiz === void 0x0 && (j2sxiz = ![]);var cdpqn = this;cdpqn['_url'] = v03lst;if (v03lst['indexOf']('data:image') === 0x0) cdpqn['_type'] = u6h1_5 = 'image';else cdpqn['_type'] = u6h1_5 || (u6h1_5 = cdpqn['getTypeFromUrl'](v03lst));cdpqn['_cache'] = qgfpd, cdpqn['_data'] = null;var nfqpde = 'ascii';if (v03lst['indexOf']('.fnt') != -0x1) nfqpde = 'utf8';else u6h1_5 == 'arraybuffer' && (nfqpde = '');;var qpegd7 = $b1a9['getFileExtension'](v03lst);if (ub$a9['_fileTypeArr']['indexOf'](qpegd7) != -0x1) sji2z['EnvConfig']['load']['call'](this, v03lst, u6h1_5, qgfpd, mr7k, j2sxiz);else {
        if (!o8jk['getFileInfo'](v03lst)) {
          if (v03lst['indexOf']('layaNativeDir/') != -0x1) {
            if (sji2z['isZiYu']) {
              var bh1a = o8jk['ziyuFileData'][v03lst];cdpqn['onLoaded'](bh1a);return;
            } else {
              cosnole['log']('read read'), o8jk['read'](v03lst, nfqpde, new _au1$(ub$a9, ub$a9['onReadNativeCallBack'], [nfqpde, v03lst, u6h1_5, qgfpd, mr7k, j2sxiz, cdpqn]));return;
            }
          }if (wki8yo['rootPath'] == '') var u5h6_ = v03lst;else u5h6_ = v03lst['split'](wki8yo['rootPath'])[0x0];v03lst['indexOf']('http://') != -0x1 || v03lst['indexOf']('https://') != -0x1 ? sji2z['EnvConfig']['load']['call'](cdpqn, v03lst, u6h1_5, qgfpd, mr7k, j2sxiz) : o8jk['readFile'](u5h6_, nfqpde, new _au1$(ub$a9, ub$a9['onReadNativeCallBack'], [nfqpde, v03lst, u6h1_5, qgfpd, mr7k, j2sxiz, cdpqn]), v03lst);
        } else sji2z['EnvConfig']['load']['call'](this, v03lst, u6h1_5, qgfpd, mr7k, j2sxiz);
      }
    }, h_6a['resMgrLoad'] = function (enpdf, zj2stx, tl0, jxyo8, o8kwmy, grk7wm, tzx3) {
      tl0 === void 0x0 && (tl0 = 0x0), jxyo8 === void 0x0 && (jxyo8 = ![]), o8kwmy === void 0x0 && (o8kwmy = ![]), grk7wm === void 0x0 && (grk7wm = 0x0), tzx3 === void 0x0 && (tzx3 = 0x3), enpdf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', enpdf), sji2z['EnvConfig']['resMgrLoad'](enpdf, (rmewg, jiyox, s3x2) => {
        ub$a9['prototype']['resMgrLoadCallBack'](rmewg, jiyox, s3x2, zj2stx);
      }, tl0, jxyo8, o8kwmy, grk7wm, tzx3);
    }, h_6a['resMgrLoadCallBack'] = function (yj8oki, yi8kw, szxjt2, pdqnfc) {
      console['log']('buff:::', yj8oki, szxjt2, o8jk['fileNativeDir'] + '///' + o8jk['fileListName']), pdqnfc(yj8oki, yi8kw, szxjt2);
    }, h_6a['clearRes'] = function (kiwy8o, oymwk8) {
      oymwk8 === void 0x0 && (oymwk8 = ![]);var tl2s3z = this;tl2s3z['clearRes'](kiwy8o, oymwk8);var z2sijx = o8jk['getFileInfo'](kiwy8o);if (z2sijx && (kiwy8o['indexOf']('http://') != -0x1 || kiwy8o['indexOf']('https://') != -0x1)) {
        var h6fnc = z2sijx['md5'],
            cdf6 = o8jk['getFileNativePath'](h6fnc);o8jk['remove'](cdf6);
      }
    }, ub$a9['onReadNativeCallBack'] = function (fpnqd, epn, erw7gm, svl3z, s3lzv, g7qme, npdqef, woiky8, mrk8wy) {
      svl3z === void 0x0 && (svl3z = !![]), g7qme === void 0x0 && (g7qme = ![]), woiky8 === void 0x0 && (woiky8 = 0x0);if (!woiky8) {
        var r7qepg;if (erw7gm == 'json' || erw7gm == 'atlas') r7qepg = sji2z['getJson'](mrk8wy['data']);else erw7gm == 'xml' ? r7qepg = $b1a9['parseXMLFromString'](mrk8wy['data']) : r7qepg = mrk8wy['data'];npdqef['onLoaded'](r7qepg), !sji2z['isZiYu'] && sji2z['isPosMsgYu'] && erw7gm != 'arraybuffer' && wx['postMessage']({ 'url': epn, 'data': r7qepg, 'isLoad': !![] });
      } else woiky8 == 0x1 && sji2z['EnvConfig']['load']['call'](npdqef, epn, erw7gm, svl3z, s3lzv, g7qme);
    }, t0sv3l(ub$a9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ub$a9;
  }(),
      o8jk = function (ry8mwk) {
    function peqgf() {
      peqgf['__super']['call'](this);;
    }return x2sjz(peqgf, 'laya.wx.mini.MiniFileMgr', ry8mwk), peqgf['isLoadFile'] = function (gq7rem) {
      return peqgf['_fileTypeArr']['indexOf'](gq7rem) != -0x1 ? !![] : ![];
    }, peqgf['getFileInfo'] = function (wmer7) {
      var cnfqd = wmer7['split']('?')[0x0],
          _ha1u6 = peqgf['filesListObj'][cnfqd];if (_ha1u6 == null) return null;else return _ha1u6;return null;
    }, peqgf['onFileUpdate'] = function (b_a$1, yixoj2) {
      var stv03l = b_a$1['split']('/'),
          jszi = stv03l[stv03l['length'] - 0x1],
          lst3vz = peqgf['getFileInfo'](yixoj2);if (lst3vz == null) peqgf['onSaveFile'](yixoj2, jszi);else {
        if (lst3vz['readyUrl'] != yixoj2) peqgf['remove'](jszi, yixoj2);
      }
    }, peqgf['exits'] = function (t3lvzs, dc6fn5) {
      var abu1_h = peqgf['getFileNativePath'](t3lvzs);peqgf['fs']['getFileInfo']({ 'filePath': abu1_h, 'success': function (a1_h6u) {
          dc6fn5 != null && dc6fn5['runWith']([0x0, a1_h6u]);
        }, 'fail': function (y8rmkw) {
          dc6fn5 != null && dc6fn5['runWith']([0x1, y8rmkw]);
        } });
    }, peqgf['read'] = function (a_u1hb, gmr7kw, jzs2xt, z32sl) {
      gmr7kw === void 0x0 && (gmr7kw = 'ascill'), z32sl === void 0x0 && (z32sl = '');var oy2ixj;z32sl != '' ? oy2ixj = peqgf['getFileNativePath'](a_u1hb) : oy2ixj = a_u1hb, peqgf['fs']['readFile']({ 'filePath': oy2ixj, 'encoding': gmr7kw, 'success': function (pnf) {
          jzs2xt != null && jzs2xt['runWith']([0x0, pnf]);
        }, 'fail': function (mwr8ky) {
          if (mwr8ky && z32sl != '') peqgf['down'](z32sl, gmr7kw, jzs2xt, z32sl);else jzs2xt != null && jzs2xt['runWith']([0x1]);
        } });
    }, peqgf['readNativeFile'] = function (ndcfq, ykoi8w) {
      peqgf['fs']['readFile']({ 'filePath': ndcfq, 'encoding': '', 'success': function (pqe) {
          ykoi8w != null && ykoi8w['runWith']([0x0]);
        }, 'fail': function ($19ba) {
          ykoi8w != null && ykoi8w['runWith']([0x1]);
        } });
    }, peqgf['down'] = function (c6hn5, nd5f6, ioy8k, s3z) {
      nd5f6 === void 0x0 && (nd5f6 = 'ascill'), s3z === void 0x0 && (s3z = '');var pe7qrg = peqgf['getFileNativePath'](s3z),
          dc6f5 = peqgf['wxdown']({ 'url': c6hn5, 'filePath': pe7qrg, 'success': function (mr8kw7) {
          if (mr8kw7['statusCode'] === 0xc8) peqgf['readFile'](mr8kw7['filePath'], nd5f6, ioy8k, s3z);
        }, 'fail': function (ixoyj2) {
          ioy8k != null && ioy8k['runWith']([0x1, ixoyj2]);
        } });dc6f5['onProgressUpdate'](function (b1$4a9) {
        ioy8k != null && ioy8k['runWith']([0x2, b1$4a9['progress']]);
      });
    }, peqgf['readFile'] = function (tz32s, t3zsv, oj2yix, x2zj) {
      t3zsv === void 0x0 && (t3zsv = 'ascill'), x2zj === void 0x0 && (x2zj = ''), peqgf['fs']['readFile']({ 'filePath': tz32s, 'encoding': t3zsv, 'success': function (oykij) {
          if (tz32s['indexOf']('http://') != -0x1 || tz32s['indexOf']('https://') != -0x1) peqgf['onFileUpdate'](tz32s, x2zj);oj2yix != null && oj2yix['runWith']([0x0, oykij]);
        }, 'fail': function (oj2yxi) {
          if (oj2yxi) oj2yix != null && oj2yix['runWith']([0x1, oj2yxi]);
        } });
    }, peqgf['downImg'] = function (z2txs, ki8jyo, iox8jy) {
      iox8jy === void 0x0 && (iox8jy = '');var gmr7eq = peqgf['wxdown']({ 'url': z2txs, 'success': function ($b_u1a) {
          $b_u1a['statusCode'] === 0xc8 && peqgf['copyFile']($b_u1a['tempFilePath'], iox8jy, ki8jyo);
        }, 'fail': function (cpf) {
          ki8jyo != null && ki8jyo['runWith']([0x1, cpf]);
        } });
    }, peqgf['copyFile'] = function (c6ndf5, ijoxy8, _hba1u) {
      var $aub_ = c6ndf5['split']('/'),
          _hn56c = $aub_[$aub_['length'] - 0x1],
          ryk8m = ijoxy8['split']('?')[0x0],
          ndf56c = peqgf['getFileInfo'](ijoxy8),
          epqdn = peqgf['getFileNativePath'](_hn56c);peqgf['fs']['copyFile']({ 'srcPath': c6ndf5, 'destPath': epqdn, 'success': function (pneqfd) {
          if (!ndf56c) peqgf['onSaveFile'](ijoxy8, _hn56c), _hba1u != null && _hba1u['runWith']([0x0]);else {
            if (ndf56c['readyUrl'] != ijoxy8) peqgf['remove'](_hn56c, ijoxy8, _hba1u);
          }
        }, 'fail': function (qndepf) {
          _hba1u != null && _hba1u['runWith']([0x1, qndepf]);
        } });
    }, peqgf['getFileNativePath'] = function (rmk8y) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rmk8y;
    }, peqgf['remove'] = function (k8iow, edfn, ua_bh) {
      edfn === void 0x0 && (edfn = '');var fc5 = peqgf['getFileInfo'](edfn),
          hnf65 = peqgf['getFileNativePath'](fc5['md5']);j2zsxi['loader']['clearRes'](fc5['readyUrl']), peqgf['fs']['unlink']({ 'filePath': hnf65, 'success': function (zt3lvs) {
          if (edfn != '') peqgf['onSaveFile'](edfn, k8iow);ua_bh != null && ua_bh['runWith']([0x0]);
        }, 'fail': function (c_h6n5) {} });
    }, peqgf['onSaveFile'] = function (wmr7e, zts2x3) {
      var s32tzx = wmr7e['split']('?')[0x0];peqgf['filesListObj'][s32tzx] = { 'md5': zts2x3, 'readyUrl': wmr7e }, peqgf['fs']['writeFile']({ 'filePath': peqgf['fileNativeDir'] + '/' + peqgf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](peqgf['filesListObj']), 'success': function (dfqpc) {
          console['log']('写入测试测试成功：', dfqpc);
        }, 'fail': function (ba9u1$) {
          console['log']('写入测试测试失败：', ba9u1$);
        } });
    }, peqgf['existDir'] = function (fn56hc, om8kw) {
      peqgf['fs']['mkdir']({ 'dirPath': fn56hc, 'success': function (k8rw) {
          om8kw != null && om8kw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (j2oizx) {
          if (j2oizx['errMsg']['indexOf']('file already exists') != -0x1) peqgf['readSync'](peqgf['fileListName'], 'utf8', om8kw);else om8kw != null && om8kw['runWith']([0x1, j2oizx]);
        } });
    }, peqgf['readSync'] = function (jyi2xo, fcdp, izj2sx, pq7dg) {
      fcdp === void 0x0 && (fcdp = 'ascill'), pq7dg === void 0x0 && (pq7dg = '');var v0l3t = peqgf['getFileNativePath'](jyi2xo),
          au1$b;try {
        au1$b = peqgf['fs']['readFileSync'](v0l3t), izj2sx != null && izj2sx['runWith']([0x0, { 'data': au1$b }]);
      } catch (hu5c) {
        izj2sx != null && izj2sx['runWith']([0x1]);
      }
    }, peqgf['readCache'] = function () {}, peqgf['writeCache'] = function (hb1u_a) {
      var ywki = readyUrl['split']('?')[0x0];peqgf['filesListObj'][ywki] = { 'md5': md5Name, 'readyUrl': readyUrl }, peqgf['fs']['writeFile']({ 'filePath': peqgf['fileNativeDir'] + '/' + peqgf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](peqgf['filesListObj']), 'success': function (gqrme7) {}, 'fail': function (yi2jxo) {} });
    }, peqgf['setNativeFileDir'] = function (zts2x) {
      peqgf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zts2x;
    }, peqgf['filesListObj'] = {}, peqgf['fileNativeDir'] = null, peqgf['fileListName'] = 'layaairfiles.txt', peqgf['ziyuFileData'] = {}, t0sv3l(peqgf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), peqgf;
  }(fegdq),
      rme7w = function (zls2) {
    function _6u1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _6u1['__super']['call'](this), this['_sound'] = _6u1['_createSound']();
    }x2sjz(_6u1, 'laya.wx.mini.MiniSound', zls2);var epdfgq = _6u1['prototype'];return epdfgq['load'] = function (c_uh5) {
      var g7rqpe = this;c_uh5 = wki8yo['formatURL'](c_uh5), this['url'] = c_uh5;if (_6u1['_audioCache'][c_uh5]) {
        this['event']('complete');return;
      }function _hab1u() {
        if (_6u1['_null'] != undefined) g7rqpe['_sound']['onCanplay'](_6u1['_null']), g7rqpe['_sound']['onError'](_6u1['_null']);else try {
          g7rqpe['_sound']['onCanplay'](null), g7rqpe['_sound']['onError'](null), _6u1['_null'] = null;
        } catch (zs2t3) {
          console['warn']('[wxmini] _clearSound:' + zs2t3), g7rqpe['_sound']['onCanplay'](_h5n6c), g7rqpe['_sound']['onError'](_h5n6c), _6u1['_null'] = _h5n6c;
        }
      }function xo2zij() {
        _hab1u(), dnep['loaded'] = !![], dnep['event']('complete'), _6u1['_audioCache'][dnep['url']] = dnep;
      }function qpdncf(ijyk8) {
        console['error']('errCode=' + ijyk8['errCode'] + '  errMsg=' + ijyk8['errMsg']), _hab1u(), dnep['event']('error');
      }function _h5n6c() {}this['_sound']['onCanplay'](xo2zij), this['_sound']['onError'](qpdncf), this['_sound']['src'] = c_uh5;var dnep = this;
    }, epdfgq['play'] = function (wmr8, l2s) {
      wmr8 === void 0x0 && (wmr8 = 0x0), l2s === void 0x0 && (l2s = 0x0);var cn_5h6;if (this['url'] == lt3z2s['_tMusic']) {
        if (!_6u1['_musicAudio']) _6u1['_musicAudio'] = _6u1['_createSound']();cn_5h6 = _6u1['_musicAudio'];
      } else cn_5h6 = _6u1['_createSound']();cn_5h6['src'] = this['url'];var mw87k = new _bu1a$(cn_5h6);return mw87k['url'] = this['url'], mw87k['loops'] = l2s, mw87k['startTime'] = wmr8, mw87k['play'](), lt3z2s['addChannel'](mw87k), mw87k;
    }, epdfgq['dispose'] = function () {
      var j2oy = _6u1['_audioCache'][this['url']];j2oy && (j2oy['src'] = '', delete _6u1['_audioCache'][this['url']]);
    }, fcqndp(0x0, epdfgq, 'duration', function () {
      return this['_sound']['duration'];
    }), _6u1['_createSound'] = function () {
      return _6u1['_id']++, sji2z['window']['wx']['createInnerAudioContext']();
    }, _6u1['_musicAudio'] = null, _6u1['_id'] = 0x0, _6u1['_audioCache'] = {}, _6u1['_null'] = undefined, _6u1;
  }(fegdq),
      _bu1a$ = function (hn6cf) {
    function fcn6(kjo8i) {
      this['_audio'] = null, this['_onEnd'] = null, fcn6['__super']['call'](this), this['_audio'] = kjo8i, this['_onEnd'] = $b1a9['bind'](this['__onEnd'], this), kjo8i['onEnded'](this['_onEnd']);
    }x2sjz(fcn6, 'laya.wx.mini.MiniSoundChannel', hn6cf);var u15h_6 = fcn6['prototype'];return u15h_6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (j2zsxi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, u15h_6['__onNull'] = function () {}, u15h_6['play'] = function () {
      this['isStopped'] = ![], lt3z2s['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, u15h_6['stop'] = function () {
      this['isStopped'] = !![], lt3z2s['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fcn6['_null'] != undefined) this['_audio']['onEnded'](fcn6['_null']);else try {
        this['_audio']['onEnded'](null), fcn6['_null'] = null;
      } catch (gwm7k) {
        console['warn']('[wxmini] stop:' + gwm7k), this['_audio']['onEnded']($b1a9['bind'](this['__onNull'], this)), fcn6['_null'] = $b1a9['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, u15h_6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, u15h_6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], lt3z2s['addChannel'](this), this['_audio']['play']();
    }, fcqndp(0x0, u15h_6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), fcqndp(0x0, u15h_6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), fcqndp(0x0, u15h_6, 'volume', function () {
      return 0x1;
    }, function (epdnfq) {}), fcn6['_null'] = undefined, fcn6;
  }(h5n_c6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var s2zlt in Laya) {
    var slv3t = Laya[s2zlt];slv3t && slv3t['__isclass'] && (exports[s2zlt] = slv3t);
  }
});