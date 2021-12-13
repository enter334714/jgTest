var M = wx.$T;
(function (window, document, i2c9vt) {
  var qyoe0 = i2c9vt['un'],
      bkjus = i2c9vt['uns'],
      jargbn = i2c9vt['static'],
      m65_h = i2c9vt['class'],
      _5wh6 = i2c9vt['getset'],
      oezq70 = i2c9vt['__newvec'],
      fozq7 = laya['utils']['Browser'],
      m5h6_w = laya['events']['Event'],
      yh5w = laya['events']['EventDispatcher'],
      hw_mxy = laya['resource']['HTMLImage'],
      eo7x = laya['utils']['Handler'],
      z7fo = laya['display']['Input'],
      kajbgr = laya['net']['Loader'],
      xwm_ = laya['maths']['Matrix'],
      oq70ez = laya['renders']['Render'],
      qeox7 = laya['utils']['RunDriver'],
      eoyx = laya['media']['Sound'],
      xyqe = laya['media']['SoundChannel'],
      gb3jr = laya['media']['SoundManager'],
      zpfe7 = laya['display']['Stage'],
      oe7qf = laya['net']['URL'],
      mqxy_0 = laya['utils']['Utils'],
      bajgn = function () {
    function e0xy_q() {}return m65_h(e0xy_q, 'laya.wx.mini.MiniAdpter'), e0xy_q['getJson'] = function ($dic) {
      return JSON['parse']($dic);
    }, e0xy_q['init'] = function (d7fzp$, mwhy_5) {
      d7fzp$ === void 0x0 && (d7fzp$ = ![]), mwhy_5 === void 0x0 && (mwhy_5 = ![]);if (e0xy_q['_inited']) return;e0xy_q['window'] = window;if (e0xy_q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e0xy_q['_inited'] = !![], e0xy_q['isZiYu'] = mwhy_5, e0xy_q['isPosMsgYu'] = d7fzp$, e0xy_q['EnvConfig'] = {}, !e0xy_q['isZiYu'] && (wmhx_['setNativeFileDir']('/layaairGame'), wmhx_['existDir'](wmhx_['fileNativeDir'], eo7x['create'](e0xy_q, e0xy_q['onMkdirCallBack']))), e0xy_q['window']['focus'] = function () {}, i2c9vt['getUrlPath'] = function () {}, e0xy_q['window']['logtime'] = function (_yh5) {}, e0xy_q['window']['alertTimeLog'] = function (kuabs) {}, e0xy_q['window']['resetShareInfo'] = function () {}, e0xy_q['window']['CanvasRenderingContext2D'] = function () {}, e0xy_q['window']['CanvasRenderingContext2D']['prototype'] = e0xy_q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e0xy_q['window']['document']['body']['appendChild'] = function () {}, e0xy_q['EnvConfig']['pixelRatioInt'] = 0x0, qeox7['getPixelRatio'] = e0xy_q['pixelRatio'], e0xy_q['_preCreateElement'] = fozq7['createElement'], fozq7['createElement'] = e0xy_q['createElement'], qeox7['createShaderCondition'] = e0xy_q['createShaderCondition'], mqxy_0['parseXMLFromString'] = e0xy_q['parseXMLFromString'], z7fo['_createInputElement'] = n8315['_createInputElement'], e0xy_q['EnvConfig']['load'] = kajbgr['prototype']['load'], kajbgr['prototype']['load'] = $9tcv['prototype']['load'], e0xy_q['isZiYu'] && d7fzp$ && wx['onMessage'](function (fzo7dp) {
        fzo7dp['isLoad'] && (wmhx_['ziyuFileData'][fzo7dp['url']] = fzo7dp['data']);
      });
    }, e0xy_q['onMkdirCallBack'] = function (fzvpd, dvip9) {
      if (!fzvpd) wmhx_['filesListObj'] = JSON['parse'](dvip9['data']);
    }, e0xy_q['pixelRatio'] = function () {
      if (!e0xy_q['EnvConfig']['pixelRatioInt']) try {
        var hyxm0_ = wx['getSystemInfoSync']();return e0xy_q['EnvConfig']['pixelRatioInt'] = hyxm0_['pixelRatio'], hyxm0_ = hyxm0_, hyxm0_['pixelRatio'];
      } catch (gnr8j) {}return e0xy_q['EnvConfig']['pixelRatioInt'];
    }, e0xy_q['createElement'] = function (i9$ct) {
      if (i9$ct == 'canvas') {
        var w5163;return e0xy_q['idx'] == 0x1 ? e0xy_q['isZiYu'] ? (w5163 = sharedCanvas, w5163['style'] = {}) : w5163 = window['canvas'] : w5163 = window['wx']['createCanvas'](), e0xy_q['idx']++, w5163;
      } else {
        if (i9$ct == 'textarea' || i9$ct == 'input') return e0xy_q['onCreateInput'](i9$ct);else {
          if (i9$ct == 'div') {
            var x70oqe = e0xy_q['_preCreateElement'](i9$ct);return x70oqe['contains'] = function (pf7$zd) {
              return null;
            }, x70oqe['removeChild'] = function (mh615w) {}, x70oqe;
          } else return e0xy_q['_preCreateElement'](i9$ct);
        }
      }
    }, e0xy_q['onCreateInput'] = function (srajk) {
      var $7pz = e0xy_q['_preCreateElement'](srajk);return $7pz['focus'] = n8315['wxinputFocus'], $7pz['blur'] = n8315['wxinputblur'], $7pz['style'] = {}, $7pz['value'] = 0x0, $7pz['parentElement'] = {}, $7pz['placeholder'] = {}, $7pz['type'] = {}, $7pz['setColor'] = function (e0qoz) {}, $7pz['setType'] = function (bjrang) {}, $7pz['setFontFace'] = function (ezoqf7) {}, $7pz['addEventListener'] = function ($idvp) {}, $7pz['contains'] = function (zpv$fd) {
        return null;
      }, $7pz['removeChild'] = function (ip$v) {}, $7pz;
    }, e0xy_q['createShaderCondition'] = function ($dpfvz) {
      var d$pfz = this,
          f7oeqz = function () {
        var _0xymh = $dpfvz;return d$pfz[$dpfvz['replace']('this.', '')];
      };return f7oeqz;
    }, e0xy_q['EnvConfig'] = null, e0xy_q['window'] = null, e0xy_q['_preCreateElement'] = null, e0xy_q['_inited'] = ![], e0xy_q['wxRequest'] = null, e0xy_q['systemInfo'] = null, e0xy_q['version'] = '0.0.1', e0xy_q['isZiYu'] = ![], e0xy_q['isPosMsgYu'] = ![], e0xy_q['parseXMLFromString'] = function (zd$fpv) {
      var h681, zeqo7f;zd$fpv = zd$fpv['replace'](/>\s+</g, '><');try {
        h681 = new window['Parser']['DOMParser']()['parseFromString'](zd$fpv, 'text/xml');
      } catch (e70) {
        throw '需要引入xml解析库文件';
      }return h681;
    }, e0xy_q['idx'] = 0x1, e0xy_q;
  }(),
      q7exo = function () {
    function xey0o() {}m65_h(xey0o, 'laya.wx.mini.MiniImage');var dzop7 = xey0o['prototype'];return dzop7['_loadImage'] = function (xyeq0_) {
      var fp7z = this,
          m56w1h = ![];xyeq0_['indexOf']('layaNativeDir/') == -0x1 && (m56w1h = !![], xyeq0_ = oe7qf['formatURL'](xyeq0_));if (!wmhx_['getFileInfo'](xyeq0_)) {
        if (xyeq0_['indexOf']('http://') != -0x1 || xyeq0_['indexOf']('https://') != -0x1) wmhx_['downImg'](xyeq0_, new eo7x(xey0o, xey0o['onDownImgCallBack'], [xyeq0_, fp7z]), xyeq0_);else xey0o['onCreateImage'](xyeq0_, fp7z, !![]);
      } else xey0o['onCreateImage'](xyeq0_, fp7z, !m56w1h);
    }, xey0o['onDownImgCallBack'] = function (yex0_q, hw_y5m, akbjsr) {
      if (!akbjsr) xey0o['onCreateImage'](yex0_q, hw_y5m);else hw_y5m['onError'](null);
    }, xey0o['onCreateImage'] = function (jr38gn, _xq0ym, arjbks) {
      arjbks === void 0x0 && (arjbks = ![]);var ct924;if (!arjbks) {
        var mhy0x = wmhx_['getFileInfo'](jr38gn),
            fpdoz = mhy0x['md5'];ct924 = wmhx_['getFileNativePath'](fpdoz);
      } else ct924 = jr38gn;if (_xq0ym['imgCache'] == null) _xq0ym['imgCache'] = {};var v9$id;function eq7foz() {
        v9$id['onload'] = null, v9$id['onerror'] = null, delete _xq0ym['imgCache'][jr38gn];
      };var z$ = function () {
        eq7foz(), _xq0ym['onLoaded'](v9$id);
      },
          jr3gbn = function () {
        eq7foz(), _xq0ym['event']('error', 'Load image failed');
      };_xq0ym['_type'] == 'nativeimage' ? (v9$id = new fozq7['window']['Image'](), v9$id['crossOrigin'] = '', v9$id['onload'] = z$, v9$id['onerror'] = jr3gbn, v9$id['src'] = ct924, _xq0ym['imgCache'][jr38gn] = v9$id) : new hw_mxy['create'](ct924, { 'onload': z$, 'onerror': jr3gbn, 'onCreate': function (eozp7f) {
          v9$id = eozp7f, _xq0ym['imgCache'][jr38gn] = eozp7f;
        } });
    }, xey0o;
  }(),
      n8315 = function () {
    function qxey_0() {}return m65_h(qxey_0, 'laya.wx.mini.MiniInput'), qxey_0['_createInputElement'] = function () {
      z7fo['_initInput'](z7fo['area'] = fozq7['createElement']('textarea')), z7fo['_initInput'](z7fo['input'] = fozq7['createElement']('input')), z7fo['inputContainer'] = fozq7['createElement']('div'), z7fo['inputContainer']['style']['position'] = 'absolute', z7fo['inputContainer']['style']['zIndex'] = 0x186a0, fozq7['container']['appendChild'](z7fo['inputContainer']), z7fo['inputContainer']['setPos'] = function (wh56m, gbjkra) {
        z7fo['inputContainer']['style']['left'] = wh56m + 'px', z7fo['inputContainer']['style']['top'] = gbjkra + 'px';
      }, i2c9vt['stage']['on']('resize', null, qxey_0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (abkrjs) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gb3jr['_soundClass'] = $pf7d, gb3jr['_musicClass'] = $pf7d;
    }, qxey_0['_onStageResize'] = function () {
      var _hy5wm = i2c9vt['stage']['_canvasTransform']['identity']();_hy5wm['scale'](fozq7['width'] / oq70ez['canvas']['width'] / qeox7['getPixelRatio'](), fozq7['height'] / oq70ez['canvas']['height'] / qeox7['getPixelRatio']());
    }, qxey_0['wxinputFocus'] = function (qe70oz) {
      var jnga = z7fo['inputElement']['target'];if (jnga && !jnga['editable']) return;bajgn['window']['wx']['offKeyboardConfirm'](), bajgn['window']['wx']['offKeyboardInput'](), bajgn['window']['wx']['showKeyboard']({ 'defaultValue': jnga['text'], 'maxLength': jnga['maxChars'], 'multiple': jnga['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (n1638g) {}, 'fail': function (n85361) {} }), bajgn['window']['wx']['onKeyboardConfirm'](function (oqz07e) {
        var wh65m1 = oqz07e ? oqz07e['value'] : '';jnga['text'] = wh65m1, jnga['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bajgn['window']['wx']['onKeyboardInput'](function (jbaksr) {
        var ivdp = jbaksr ? jbaksr['value'] : '';if (!jnga['multiline']) {
          if (ivdp['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }jnga['text'] = ivdp, jnga['event']('input');
      });
    }, qxey_0['inputEnter'] = function () {
      z7fo['inputElement']['target']['focus'] = ![];
    }, qxey_0['wxinputblur'] = function () {
      qxey_0['hideKeyboard']();
    }, qxey_0['hideKeyboard'] = function () {
      bajgn['window']['wx']['offKeyboardConfirm'](), bajgn['window']['wx']['offKeyboardInput'](), bajgn['window']['wx']['hideKeyboard']({ 'success': function (dz$) {
          console['log']('隐藏键盘');
        }, 'fail': function (z$d7f) {
          console['log']('隐藏键盘出错:' + (z$d7f ? z$d7f['errMsg'] : ''));
        } });
    }, qxey_0;
  }(),
      $9tcv = function () {
    function ajgr() {}m65_h(ajgr, 'laya.wx.mini.MiniLoader');var z7f$pd = ajgr['prototype'];return z7f$pd['load'] = function (jkabgr, $v9cd, m_xyq0, jakgbr, zepfo) {
      m_xyq0 === void 0x0 && (m_xyq0 = !![]), zepfo === void 0x0 && (zepfo = ![]);var hy0m_x = this;hy0m_x['_url'] = jkabgr;if (jkabgr['indexOf']('data:image') === 0x0) hy0m_x['_type'] = $v9cd = 'image';else hy0m_x['_type'] = $v9cd || ($v9cd = hy0m_x['getTypeFromUrl'](jkabgr));hy0m_x['_cache'] = m_xyq0, hy0m_x['_data'] = null;var nrj3bg = 'ascii';if (jkabgr['indexOf']('.fnt') != -0x1) nrj3bg = 'utf8';else $v9cd == 'arraybuffer' && (nrj3bg = '');;var i$tc9v = mqxy_0['getFileExtension'](jkabgr);if (ajgr['_fileTypeArr']['indexOf'](i$tc9v) != -0x1) bajgn['EnvConfig']['load']['call'](this, jkabgr, $v9cd, m_xyq0, jakgbr, zepfo);else {
        if (!wmhx_['getFileInfo'](jkabgr)) {
          if (jkabgr['indexOf']('layaNativeDir/') != -0x1) {
            if (bajgn['isZiYu']) {
              var m_5why = wmhx_['ziyuFileData'][jkabgr];hy0m_x['onLoaded'](m_5why);return;
            } else {
              cosnole['log']('read read'), wmhx_['read'](jkabgr, nrj3bg, new eo7x(ajgr, ajgr['onReadNativeCallBack'], [nrj3bg, jkabgr, $v9cd, m_xyq0, jakgbr, zepfo, hy0m_x]));return;
            }
          }if (oe7qf['rootPath'] == '') var v92t = jkabgr;else v92t = jkabgr['split'](oe7qf['rootPath'])[0x0];jkabgr['indexOf']('http://') != -0x1 || jkabgr['indexOf']('https://') != -0x1 ? bajgn['EnvConfig']['load']['call'](hy0m_x, jkabgr, $v9cd, m_xyq0, jakgbr, zepfo) : wmhx_['readFile'](v92t, nrj3bg, new eo7x(ajgr, ajgr['onReadNativeCallBack'], [nrj3bg, jkabgr, $v9cd, m_xyq0, jakgbr, zepfo, hy0m_x]), jkabgr);
        } else bajgn['EnvConfig']['load']['call'](this, jkabgr, $v9cd, m_xyq0, jakgbr, zepfo);
      }
    }, z7f$pd['resMgrLoad'] = function ($v9t, zpdv$f, w185h, gbkarj, rgjb, eqx0o7, m6_w5h) {
      w185h === void 0x0 && (w185h = 0x0), gbkarj === void 0x0 && (gbkarj = ![]), rgjb === void 0x0 && (rgjb = ![]), eqx0o7 === void 0x0 && (eqx0o7 = 0x0), m6_w5h === void 0x0 && (m6_w5h = 0x3), $v9t['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $v9t), bajgn['EnvConfig']['resMgrLoad']($v9t, (ti49, p7dfz$, mqy_0) => {
        ajgr['prototype']['resMgrLoadCallBack'](ti49, p7dfz$, mqy_0, zpdv$f);
      }, w185h, gbkarj, rgjb, eqx0o7, m6_w5h);
    }, z7f$pd['resMgrLoadCallBack'] = function (agkbrj, abnrg, skjba, xy0q_) {
      console['log']('buff:::', agkbrj, skjba, wmhx_['fileNativeDir'] + '///' + wmhx_['fileListName']), xy0q_(agkbrj, abnrg, skjba);
    }, z7f$pd['clearRes'] = function (_xh0ym, jrn3bg) {
      jrn3bg === void 0x0 && (jrn3bg = ![]);var pd9$iv = this;pd9$iv['clearRes'](_xh0ym, jrn3bg);var mw_h = wmhx_['getFileInfo'](_xh0ym);if (mw_h && (_xh0ym['indexOf']('http://') != -0x1 || _xh0ym['indexOf']('https://') != -0x1)) {
        var epfz7 = mw_h['md5'],
            pd$f9 = wmhx_['getFileNativePath'](epfz7);wmhx_['remove'](pd$f9);
      }
    }, ajgr['onReadNativeCallBack'] = function (absk, eqozf, pv9, jr3ng, ic2l4, l4tci2, oqey0x, mhyx, h6w_5) {
      jr3ng === void 0x0 && (jr3ng = !![]), l4tci2 === void 0x0 && (l4tci2 = ![]), mhyx === void 0x0 && (mhyx = 0x0);if (!mhyx) {
        var n5831;if (pv9 == 'json' || pv9 == 'atlas') n5831 = bajgn['getJson'](h6w_5['data']);else pv9 == 'xml' ? n5831 = mqxy_0['parseXMLFromString'](h6w_5['data']) : n5831 = h6w_5['data'];oqey0x['onLoaded'](n5831), !bajgn['isZiYu'] && bajgn['isPosMsgYu'] && pv9 != 'arraybuffer' && wx['postMessage']({ 'url': eqozf, 'data': n5831, 'isLoad': !![] });
      } else mhyx == 0x1 && bajgn['EnvConfig']['load']['call'](oqey0x, eqozf, pv9, jr3ng, ic2l4, l4tci2);
    }, jargbn(ajgr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ajgr;
  }(),
      wmhx_ = function (vp) {
    function mxh0y_() {
      mxh0y_['__super']['call'](this);;
    }return m65_h(mxh0y_, 'laya.wx.mini.MiniFileMgr', vp), mxh0y_['isLoadFile'] = function (yxm0_) {
      return mxh0y_['_fileTypeArr']['indexOf'](yxm0_) != -0x1 ? !![] : ![];
    }, mxh0y_['getFileInfo'] = function (eyx) {
      var hmw56 = eyx['split']('?')[0x0],
          n3jgrb = mxh0y_['filesListObj'][hmw56];if (n3jgrb == null) return null;else return n3jgrb;return null;
    }, mxh0y_['onFileUpdate'] = function (ezqf7o, hm_wyx) {
      var x0_ym = ezqf7o['split']('/'),
          ezofq = x0_ym[x0_ym['length'] - 0x1],
          poe7zf = mxh0y_['getFileInfo'](hm_wyx);if (poe7zf == null) mxh0y_['onSaveFile'](hm_wyx, ezofq);else {
        if (poe7zf['readyUrl'] != hm_wyx) mxh0y_['remove'](ezofq, hm_wyx);
      }
    }, mxh0y_['exits'] = function (rj3ng8, d7zpfo) {
      var m615h = mxh0y_['getFileNativePath'](rj3ng8);mxh0y_['fs']['getFileInfo']({ 'filePath': m615h, 'success': function (xe7) {
          d7zpfo != null && d7zpfo['runWith']([0x0, xe7]);
        }, 'fail': function (kusb) {
          d7zpfo != null && d7zpfo['runWith']([0x1, kusb]);
        } });
    }, mxh0y_['read'] = function (ozdf7, ofzp7e, kujsba, wh61m) {
      ofzp7e === void 0x0 && (ofzp7e = 'ascill'), wh61m === void 0x0 && (wh61m = '');var z7o0eq;wh61m != '' ? z7o0eq = mxh0y_['getFileNativePath'](ozdf7) : z7o0eq = ozdf7, mxh0y_['fs']['readFile']({ 'filePath': z7o0eq, 'encoding': ofzp7e, 'success': function (_0yxmq) {
          kujsba != null && kujsba['runWith']([0x0, _0yxmq]);
        }, 'fail': function (i29vtc) {
          if (i29vtc && wh61m != '') mxh0y_['down'](wh61m, ofzp7e, kujsba, wh61m);else kujsba != null && kujsba['runWith']([0x1]);
        } });
    }, mxh0y_['readNativeFile'] = function (najgbr, abkjs) {
      mxh0y_['fs']['readFile']({ 'filePath': najgbr, 'encoding': '', 'success': function (w1h5m6) {
          abkjs != null && abkjs['runWith']([0x0]);
        }, 'fail': function (it$c9v) {
          abkjs != null && abkjs['runWith']([0x1]);
        } });
    }, mxh0y_['down'] = function (bskau, t29ic, n3g816, _ex0y) {
      t29ic === void 0x0 && (t29ic = 'ascill'), _ex0y === void 0x0 && (_ex0y = '');var oqy0e = mxh0y_['getFileNativePath'](_ex0y),
          ksbaju = mxh0y_['wxdown']({ 'url': bskau, 'filePath': oqy0e, 'success': function (zfd$7p) {
          if (zfd$7p['statusCode'] === 0xc8) mxh0y_['readFile'](zfd$7p['filePath'], t29ic, n3g816, _ex0y);
        }, 'fail': function (f$pz) {
          n3g816 != null && n3g816['runWith']([0x1, f$pz]);
        } });ksbaju['onProgressUpdate'](function (pd9vf$) {
        n3g816 != null && n3g816['runWith']([0x2, pd9vf$['progress']]);
      });
    }, mxh0y_['readFile'] = function (c24lt, g3rn18, w136, t9iv2c) {
      g3rn18 === void 0x0 && (g3rn18 = 'ascill'), t9iv2c === void 0x0 && (t9iv2c = ''), mxh0y_['fs']['readFile']({ 'filePath': c24lt, 'encoding': g3rn18, 'success': function (v9$ipd) {
          if (c24lt['indexOf']('http://') != -0x1 || c24lt['indexOf']('https://') != -0x1) mxh0y_['onFileUpdate'](c24lt, t9iv2c);w136 != null && w136['runWith']([0x0, v9$ipd]);
        }, 'fail': function (m0y_hx) {
          if (m0y_hx) w136 != null && w136['runWith']([0x1, m0y_hx]);
        } });
    }, mxh0y_['downImg'] = function (cli42t, ti$9cv, ymx_0h) {
      ymx_0h === void 0x0 && (ymx_0h = '');var kbjsua = mxh0y_['wxdown']({ 'url': cli42t, 'success': function ($v9pdf) {
          $v9pdf['statusCode'] === 0xc8 && mxh0y_['copyFile']($v9pdf['tempFilePath'], ymx_0h, ti$9cv);
        }, 'fail': function (ci$dv9) {
          ti$9cv != null && ti$9cv['runWith']([0x1, ci$dv9]);
        } });
    }, mxh0y_['copyFile'] = function (civt$, tc2l4i, yhm_0) {
      var t$ivc = civt$['split']('/'),
          zoep7f = t$ivc[t$ivc['length'] - 0x1],
          karbsj = tc2l4i['split']('?')[0x0],
          w1h568 = mxh0y_['getFileInfo'](tc2l4i),
          e_yqx = mxh0y_['getFileNativePath'](zoep7f);mxh0y_['fs']['copyFile']({ 'srcPath': civt$, 'destPath': e_yqx, 'success': function (qof7ez) {
          if (!w1h568) mxh0y_['onSaveFile'](tc2l4i, zoep7f), yhm_0 != null && yhm_0['runWith']([0x0]);else {
            if (w1h568['readyUrl'] != tc2l4i) mxh0y_['remove'](zoep7f, tc2l4i, yhm_0);
          }
        }, 'fail': function (abjsr) {
          yhm_0 != null && yhm_0['runWith']([0x1, abjsr]);
        } });
    }, mxh0y_['getFileNativePath'] = function (i49tc) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + i49tc;
    }, mxh0y_['remove'] = function (ci9v$, eqyo, mh65w1) {
      eqyo === void 0x0 && (eqyo = '');var x7oe0 = mxh0y_['getFileInfo'](eqyo),
          x0eyq = mxh0y_['getFileNativePath'](x7oe0['md5']);i2c9vt['loader']['clearRes'](x7oe0['readyUrl']), mxh0y_['fs']['unlink']({ 'filePath': x0eyq, 'success': function (m6h1w5) {
          if (eqyo != '') mxh0y_['onSaveFile'](eqyo, ci9v$);mh65w1 != null && mh65w1['runWith']([0x0]);
        }, 'fail': function (ox0e7) {} });
    }, mxh0y_['onSaveFile'] = function (hy_wm5, yxqoe) {
      var gjkb = hy_wm5['split']('?')[0x0];mxh0y_['filesListObj'][gjkb] = { 'md5': yxqoe, 'readyUrl': hy_wm5 }, mxh0y_['fs']['writeFile']({ 'filePath': mxh0y_['fileNativeDir'] + '/' + mxh0y_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mxh0y_['filesListObj']), 'success': function (j3rbn) {
          console['log']('写入测试测试成功：', j3rbn);
        }, 'fail': function (epo7z) {
          console['log']('写入测试测试失败：', epo7z);
        } });
    }, mxh0y_['existDir'] = function (cti2l, jkrb) {
      mxh0y_['fs']['mkdir']({ 'dirPath': cti2l, 'success': function (v9$dpi) {
          jkrb != null && jkrb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (q_e0xy) {
          if (q_e0xy['errMsg']['indexOf']('file already exists') != -0x1) mxh0y_['readSync'](mxh0y_['fileListName'], 'utf8', jkrb);else jkrb != null && jkrb['runWith']([0x1, q_e0xy]);
        } });
    }, mxh0y_['readSync'] = function (d9$vfp, w5h6, h_m5, mhw5_6) {
      w5h6 === void 0x0 && (w5h6 = 'ascill'), mhw5_6 === void 0x0 && (mhw5_6 = '');var d7p$fz = mxh0y_['getFileNativePath'](d9$vfp),
          m5h;try {
        m5h = mxh0y_['fs']['readFileSync'](d7p$fz), h_m5 != null && h_m5['runWith']([0x0, { 'data': m5h }]);
      } catch (cv9t2) {
        h_m5 != null && h_m5['runWith']([0x1]);
      }
    }, mxh0y_['readCache'] = function () {}, mxh0y_['writeCache'] = function (g83n16) {
      var hmw5_6 = readyUrl['split']('?')[0x0];mxh0y_['filesListObj'][hmw5_6] = { 'md5': md5Name, 'readyUrl': readyUrl }, mxh0y_['fs']['writeFile']({ 'filePath': mxh0y_['fileNativeDir'] + '/' + mxh0y_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mxh0y_['filesListObj']), 'success': function (jksuba) {}, 'fail': function (vdip) {} });
    }, mxh0y_['setNativeFileDir'] = function (bkjarg) {
      mxh0y_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bkjarg;
    }, mxh0y_['filesListObj'] = {}, mxh0y_['fileNativeDir'] = null, mxh0y_['fileListName'] = 'layaairfiles.txt', mxh0y_['ziyuFileData'] = {}, jargbn(mxh0y_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mxh0y_;
  }(yh5w),
      $pf7d = function (oqxe) {
    function dc$vi9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], dc$vi9['__super']['call'](this), this['_sound'] = dc$vi9['_createSound']();
    }m65_h(dc$vi9, 'laya.wx.mini.MiniSound', oqxe);var anrg = dc$vi9['prototype'];return anrg['load'] = function (_y0qxm) {
      var n18635 = this;_y0qxm = oe7qf['formatURL'](_y0qxm), this['url'] = _y0qxm;if (dc$vi9['_audioCache'][_y0qxm]) {
        this['event']('complete');return;
      }function xyhmw_() {
        if (dc$vi9['_null'] != undefined) n18635['_sound']['onCanplay'](dc$vi9['_null']), n18635['_sound']['onError'](dc$vi9['_null']);else try {
          n18635['_sound']['onCanplay'](null), n18635['_sound']['onError'](null), dc$vi9['_null'] = null;
        } catch (baj) {
          console['warn']('[wxmini] _clearSound:' + baj), n18635['_sound']['onCanplay'](akub), n18635['_sound']['onError'](akub), dc$vi9['_null'] = akub;
        }
      }function qfoez7() {
        xyhmw_(), lt2ic4['loaded'] = !![], lt2ic4['event']('complete'), dc$vi9['_audioCache'][lt2ic4['url']] = lt2ic4;
      }function ujakb(c9v$d) {
        console['error']('errCode=' + c9v$d['errCode'] + '  errMsg=' + c9v$d['errMsg']), xyhmw_(), lt2ic4['event']('error');
      }function akub() {}this['_sound']['onCanplay'](qfoez7), this['_sound']['onError'](ujakb), this['_sound']['src'] = _y0qxm;var lt2ic4 = this;
    }, anrg['play'] = function (v9dic, gn6138) {
      v9dic === void 0x0 && (v9dic = 0x0), gn6138 === void 0x0 && (gn6138 = 0x0);var m_yhw5;if (this['url'] == gb3jr['_tMusic']) {
        if (!dc$vi9['_musicAudio']) dc$vi9['_musicAudio'] = dc$vi9['_createSound']();m_yhw5 = dc$vi9['_musicAudio'];
      } else m_yhw5 = dc$vi9['_createSound']();m_yhw5['src'] = this['url'];var ti94c = new z7eoqf(m_yhw5);return ti94c['url'] = this['url'], ti94c['loops'] = gn6138, ti94c['startTime'] = v9dic, ti94c['play'](), gb3jr['addChannel'](ti94c), ti94c;
    }, anrg['dispose'] = function () {
      var nb3jr = dc$vi9['_audioCache'][this['url']];nb3jr && (nb3jr['src'] = '', delete dc$vi9['_audioCache'][this['url']]);
    }, _5wh6(0x0, anrg, 'duration', function () {
      return this['_sound']['duration'];
    }), dc$vi9['_createSound'] = function () {
      return dc$vi9['_id']++, bajgn['window']['wx']['createInnerAudioContext']();
    }, dc$vi9['_musicAudio'] = null, dc$vi9['_id'] = 0x0, dc$vi9['_audioCache'] = {}, dc$vi9['_null'] = undefined, dc$vi9;
  }(yh5w),
      z7eoqf = function ($9civd) {
    function c9d$vi(ic4t2l) {
      this['_audio'] = null, this['_onEnd'] = null, c9d$vi['__super']['call'](this), this['_audio'] = ic4t2l, this['_onEnd'] = mqxy_0['bind'](this['__onEnd'], this), ic4t2l['onEnded'](this['_onEnd']);
    }m65_h(c9d$vi, 'laya.wx.mini.MiniSoundChannel', $9civd);var kgrabj = c9d$vi['prototype'];return kgrabj['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (i2c9vt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kgrabj['__onNull'] = function () {}, kgrabj['play'] = function () {
      this['isStopped'] = ![], gb3jr['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kgrabj['stop'] = function () {
      this['isStopped'] = !![], gb3jr['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (c9d$vi['_null'] != undefined) this['_audio']['onEnded'](c9d$vi['_null']);else try {
        this['_audio']['onEnded'](null), c9d$vi['_null'] = null;
      } catch (_h56) {
        console['warn']('[wxmini] stop:' + _h56), this['_audio']['onEnded'](mqxy_0['bind'](this['__onNull'], this)), c9d$vi['_null'] = mqxy_0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kgrabj['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kgrabj['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gb3jr['addChannel'](this), this['_audio']['play']();
    }, _5wh6(0x0, kgrabj, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _5wh6(0x0, kgrabj, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _5wh6(0x0, kgrabj, 'volume', function () {
      return 0x1;
    }, function (yqx0_e) {}), c9d$vi['_null'] = undefined, c9d$vi;
  }(xyqe);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var cdiv$9 in Laya) {
    var vz$d = Laya[cdiv$9];vz$d && vz$d['__isclass'] && (exports[cdiv$9] = vz$d);
  }
});