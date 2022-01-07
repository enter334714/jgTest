var a = wx.$y;
(function (window, document, in2q$) {
  var a5y36 = in2q$['un'],
      $gk2i = in2q$['uns'],
      rzxe0y = in2q$['static'],
      f_j8 = in2q$['class'],
      qn$2gi = in2q$['getset'],
      jhwot = in2q$['__newvec'],
      ofj78_ = laya['utils']['Browser'],
      vm6 = laya['events']['Event'],
      s2cnk9 = laya['events']['EventDispatcher'],
      m1da5 = laya['resource']['HTMLImage'],
      y3vr = laya['utils']['Handler'],
      gqp$i = laya['display']['Input'],
      c2n$9k = laya['net']['Loader'],
      $g9n2 = laya['maths']['Matrix'],
      u1td5 = laya['renders']['Render'],
      qnp$i = laya['utils']['RunDriver'],
      dh4w1t = laya['media']['Sound'],
      zy3rv0 = laya['media']['SoundChannel'],
      y03vz = laya['media']['SoundManager'],
      skcl8 = laya['display']['Stage'],
      _78flo = laya['net']['URL'],
      tm1d5 = laya['utils']['Utils'],
      m56a3 = function () {
    function g2iqn() {}return f_j8(g2iqn, 'laya.wx.mini.MiniAdpter'), g2iqn['getJson'] = function (z0erx) {
      return JSON['parse'](z0erx);
    }, g2iqn['init'] = function (ikg$n2, ns92kc) {
      ikg$n2 === void 0x0 && (ikg$n2 = ![]), ns92kc === void 0x0 && (ns92kc = ![]);if (g2iqn['_inited']) return;g2iqn['window'] = window;if (g2iqn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;g2iqn['_inited'] = !![], g2iqn['isZiYu'] = ns92kc, g2iqn['isPosMsgYu'] = ikg$n2, g2iqn['EnvConfig'] = {}, !g2iqn['isZiYu'] && (hofw4['setNativeFileDir']('/layaairGame'), hofw4['existDir'](hofw4['fileNativeDir'], y3vr['create'](g2iqn, g2iqn['onMkdirCallBack']))), g2iqn['window']['focus'] = function () {}, in2q$['getUrlPath'] = function () {}, g2iqn['window']['logtime'] = function (dwh1t) {}, g2iqn['window']['alertTimeLog'] = function (cl78) {}, g2iqn['window']['resetShareInfo'] = function () {}, g2iqn['window']['CanvasRenderingContext2D'] = function () {}, g2iqn['window']['CanvasRenderingContext2D']['prototype'] = g2iqn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g2iqn['window']['document']['body']['appendChild'] = function () {}, g2iqn['EnvConfig']['pixelRatioInt'] = 0x0, qnp$i['getPixelRatio'] = g2iqn['pixelRatio'], g2iqn['_preCreateElement'] = ofj78_['createElement'], ofj78_['createElement'] = g2iqn['createElement'], qnp$i['createShaderCondition'] = g2iqn['createShaderCondition'], tm1d5['parseXMLFromString'] = g2iqn['parseXMLFromString'], gqp$i['_createInputElement'] = c89lks['_createInputElement'], g2iqn['EnvConfig']['load'] = c2n$9k['prototype']['load'], c2n$9k['prototype']['load'] = _sl87f['prototype']['load'], g2iqn['isZiYu'] && ikg$n2 && wx['onMessage'](function (nqg2$) {
        nqg2$['isLoad'] && (hofw4['ziyuFileData'][nqg2$['url']] = nqg2$['data']);
      });
    }, g2iqn['onMkdirCallBack'] = function (zvry3, k$gn9) {
      if (!zvry3) hofw4['filesListObj'] = JSON['parse'](k$gn9['data']);
    }, g2iqn['pixelRatio'] = function () {
      if (!g2iqn['EnvConfig']['pixelRatioInt']) try {
        var udmt1w = wx['getSystemInfoSync']();return g2iqn['EnvConfig']['pixelRatioInt'] = udmt1w['pixelRatio'], udmt1w = udmt1w, udmt1w['pixelRatio'];
      } catch (cs2k) {}return g2iqn['EnvConfig']['pixelRatioInt'];
    }, g2iqn['createElement'] = function (ig$2q) {
      if (ig$2q == 'canvas') {
        var ad5u1;return g2iqn['idx'] == 0x1 ? g2iqn['isZiYu'] ? (ad5u1 = sharedCanvas, ad5u1['style'] = {}) : ad5u1 = window['canvas'] : ad5u1 = window['wx']['createCanvas'](), g2iqn['idx']++, ad5u1;
      } else {
        if (ig$2q == 'textarea' || ig$2q == 'input') return g2iqn['onCreateInput'](ig$2q);else {
          if (ig$2q == 'div') {
            var v3y65a = g2iqn['_preCreateElement'](ig$2q);return v3y65a['contains'] = function (s_87c) {
              return null;
            }, v3y65a['removeChild'] = function (csn9k) {}, v3y65a;
          } else return g2iqn['_preCreateElement'](ig$2q);
        }
      }
    }, g2iqn['onCreateInput'] = function (t14wd) {
      var ma365 = g2iqn['_preCreateElement'](t14wd);return ma365['focus'] = c89lks['wxinputFocus'], ma365['blur'] = c89lks['wxinputblur'], ma365['style'] = {}, ma365['value'] = 0x0, ma365['parentElement'] = {}, ma365['placeholder'] = {}, ma365['type'] = {}, ma365['setColor'] = function (of_hj7) {}, ma365['setType'] = function (fohjw) {}, ma365['setFontFace'] = function (dthw4j) {}, ma365['addEventListener'] = function (v5ay) {}, ma365['contains'] = function (rz30) {
        return null;
      }, ma365['removeChild'] = function (_ofj7) {}, ma365;
    }, g2iqn['createShaderCondition'] = function (zyxvr0) {
      var _ojhf7 = this,
          d4wt1 = function () {
        var hwdj4 = zyxvr0;return _ojhf7[zyxvr0['replace']('this.', '')];
      };return d4wt1;
    }, g2iqn['EnvConfig'] = null, g2iqn['window'] = null, g2iqn['_preCreateElement'] = null, g2iqn['_inited'] = ![], g2iqn['wxRequest'] = null, g2iqn['systemInfo'] = null, g2iqn['version'] = '0.0.1', g2iqn['isZiYu'] = ![], g2iqn['isPosMsgYu'] = ![], g2iqn['parseXMLFromString'] = function (y6) {
      var clk9s, $qp;y6 = y6['replace'](/>\s+</g, '><');try {
        clk9s = new window['Parser']['DOMParser']()['parseFromString'](y6, 'text/xml');
      } catch (hoj4_) {
        throw '需要引入xml解析库文件';
      }return clk9s;
    }, g2iqn['idx'] = 0x1, g2iqn;
  }(),
      $g2ink = function () {
    function gin() {}f_j8(gin, 'laya.wx.mini.MiniImage');var nq$2ig = gin['prototype'];return nq$2ig['_loadImage'] = function (twjo) {
      var nk$ig2 = this,
          _7olf8 = ![];twjo['indexOf']('layaNativeDir/') == -0x1 && (_7olf8 = !![], twjo = _78flo['formatURL'](twjo));if (!hofw4['getFileInfo'](twjo)) {
        if (twjo['indexOf']('http://') != -0x1 || twjo['indexOf']('https://') != -0x1) hofw4['downImg'](twjo, new y3vr(gin, gin['onDownImgCallBack'], [twjo, nk$ig2]), twjo);else gin['onCreateImage'](twjo, nk$ig2, !![]);
      } else gin['onCreateImage'](twjo, nk$ig2, !_7olf8);
    }, gin['onDownImgCallBack'] = function (jo_7hf, ofw, fh_4oj) {
      if (!fh_4oj) gin['onCreateImage'](jo_7hf, ofw);else ofw['onError'](null);
    }, gin['onCreateImage'] = function (r0y6v, dt1uw4, i$kg2n) {
      i$kg2n === void 0x0 && (i$kg2n = ![]);var n9c2$;if (!i$kg2n) {
        var m1t5ud = hofw4['getFileInfo'](r0y6v),
            qi$gn = m1t5ud['md5'];n9c2$ = hofw4['getFileNativePath'](qi$gn);
      } else n9c2$ = r0y6v;if (dt1uw4['imgCache'] == null) dt1uw4['imgCache'] = {};var ut4wd1;function h4_fo() {
        ut4wd1['onload'] = null, ut4wd1['onerror'] = null, delete dt1uw4['imgCache'][r0y6v];
      };var m51a6 = function () {
        h4_fo(), dt1uw4['onLoaded'](ut4wd1);
      },
          wofj4h = function () {
        h4_fo(), dt1uw4['event']('error', 'Load image failed');
      };dt1uw4['_type'] == 'nativeimage' ? (ut4wd1 = new ofj78_['window']['Image'](), ut4wd1['crossOrigin'] = '', ut4wd1['onload'] = m51a6, ut4wd1['onerror'] = wofj4h, ut4wd1['src'] = n9c2$, dt1uw4['imgCache'][r0y6v] = ut4wd1) : new m1da5['create'](n9c2$, { 'onload': m51a6, 'onerror': wofj4h, 'onCreate': function (xzyv0) {
          ut4wd1 = xzyv0, dt1uw4['imgCache'][r0y6v] = xzyv0;
        } });
    }, gin;
  }(),
      c89lks = function () {
    function av60y() {}return f_j8(av60y, 'laya.wx.mini.MiniInput'), av60y['_createInputElement'] = function () {
      gqp$i['_initInput'](gqp$i['area'] = ofj78_['createElement']('textarea')), gqp$i['_initInput'](gqp$i['input'] = ofj78_['createElement']('input')), gqp$i['inputContainer'] = ofj78_['createElement']('div'), gqp$i['inputContainer']['style']['position'] = 'absolute', gqp$i['inputContainer']['style']['zIndex'] = 0x186a0, ofj78_['container']['appendChild'](gqp$i['inputContainer']), gqp$i['inputContainer']['setPos'] = function (jof87_, x0rezy) {
        gqp$i['inputContainer']['style']['left'] = jof87_ + 'px', gqp$i['inputContainer']['style']['top'] = x0rezy + 'px';
      }, in2q$['stage']['on']('resize', null, av60y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s9kcn) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), y03vz['_soundClass'] = rxzy0v, y03vz['_musicClass'] = rxzy0v;
    }, av60y['_onStageResize'] = function () {
      var dw14ht = in2q$['stage']['_canvasTransform']['identity']();dw14ht['scale'](ofj78_['width'] / u1td5['canvas']['width'] / qnp$i['getPixelRatio'](), ofj78_['height'] / u1td5['canvas']['height'] / qnp$i['getPixelRatio']());
    }, av60y['wxinputFocus'] = function (hojw4t) {
      var mwu1t = gqp$i['inputElement']['target'];if (mwu1t && !mwu1t['editable']) return;m56a3['window']['wx']['offKeyboardConfirm'](), m56a3['window']['wx']['offKeyboardInput'](), m56a3['window']['wx']['showKeyboard']({ 'defaultValue': mwu1t['text'], 'maxLength': mwu1t['maxChars'], 'multiple': mwu1t['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mdt5u) {}, 'fail': function (whdt41) {} }), m56a3['window']['wx']['onKeyboardConfirm'](function (u4wd1) {
        var vx0yr = u4wd1 ? u4wd1['value'] : '';mwu1t['text'] = vx0yr, mwu1t['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m56a3['window']['wx']['onKeyboardInput'](function (s9l78c) {
        var v63a5 = s9l78c ? s9l78c['value'] : '';if (!mwu1t['multiline']) {
          if (v63a5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }mwu1t['text'] = v63a5, mwu1t['event']('input');
      });
    }, av60y['inputEnter'] = function () {
      gqp$i['inputElement']['target']['focus'] = ![];
    }, av60y['wxinputblur'] = function () {
      av60y['hideKeyboard']();
    }, av60y['hideKeyboard'] = function () {
      m56a3['window']['wx']['offKeyboardConfirm'](), m56a3['window']['wx']['offKeyboardInput'](), m56a3['window']['wx']['hideKeyboard']({ 'success': function (jo7f) {
          console['log']('隐藏键盘');
        }, 'fail': function (l_7o8f) {
          console['log']('隐藏键盘出错:' + (l_7o8f ? l_7o8f['errMsg'] : ''));
        } });
    }, av60y;
  }(),
      _sl87f = function () {
    function y536() {}f_j8(y536, 'laya.wx.mini.MiniLoader');var f_4o = y536['prototype'];return f_4o['load'] = function (wdtu4, c9kn$, a53m6, o_jf8, klsc29) {
      a53m6 === void 0x0 && (a53m6 = !![]), klsc29 === void 0x0 && (klsc29 = ![]);var y036r = this;y036r['_url'] = wdtu4;if (wdtu4['indexOf']('data:image') === 0x0) y036r['_type'] = c9kn$ = 'image';else y036r['_type'] = c9kn$ || (c9kn$ = y036r['getTypeFromUrl'](wdtu4));y036r['_cache'] = a53m6, y036r['_data'] = null;var l29skc = 'ascii';if (wdtu4['indexOf']('.fnt') != -0x1) l29skc = 'utf8';else c9kn$ == 'arraybuffer' && (l29skc = '');;var jtwho4 = tm1d5['getFileExtension'](wdtu4);if (y536['_fileTypeArr']['indexOf'](jtwho4) != -0x1) m56a3['EnvConfig']['load']['call'](this, wdtu4, c9kn$, a53m6, o_jf8, klsc29);else {
        if (!hofw4['getFileInfo'](wdtu4)) {
          if (wdtu4['indexOf']('layaNativeDir/') != -0x1) {
            if (m56a3['isZiYu']) {
              var mu6a35 = hofw4['ziyuFileData'][wdtu4];y036r['onLoaded'](mu6a35);return;
            } else {
              cosnole['log']('read read'), hofw4['read'](wdtu4, l29skc, new y3vr(y536, y536['onReadNativeCallBack'], [l29skc, wdtu4, c9kn$, a53m6, o_jf8, klsc29, y036r]));return;
            }
          }if (_78flo['rootPath'] == '') var duwm1 = wdtu4;else duwm1 = wdtu4['split'](_78flo['rootPath'])[0x0];wdtu4['indexOf']('http://') != -0x1 || wdtu4['indexOf']('https://') != -0x1 ? m56a3['EnvConfig']['load']['call'](y036r, wdtu4, c9kn$, a53m6, o_jf8, klsc29) : hofw4['readFile'](duwm1, l29skc, new y3vr(y536, y536['onReadNativeCallBack'], [l29skc, wdtu4, c9kn$, a53m6, o_jf8, klsc29, y036r]), wdtu4);
        } else m56a3['EnvConfig']['load']['call'](this, wdtu4, c9kn$, a53m6, o_jf8, klsc29);
      }
    }, f_4o['resMgrLoad'] = function (y03zvr, ikg, qigpn$, k9snc, k9$c2n, sc2nk, au15m) {
      qigpn$ === void 0x0 && (qigpn$ = 0x0), k9snc === void 0x0 && (k9snc = ![]), k9$c2n === void 0x0 && (k9$c2n = ![]), sc2nk === void 0x0 && (sc2nk = 0x0), au15m === void 0x0 && (au15m = 0x3), y03zvr['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', y03zvr), m56a3['EnvConfig']['resMgrLoad'](y03zvr, (jwoht4, hdwt, dm5au) => {
        y536['prototype']['resMgrLoadCallBack'](jwoht4, hdwt, dm5au, ikg);
      }, qigpn$, k9snc, k9$c2n, sc2nk, au15m);
    }, f_4o['resMgrLoadCallBack'] = function (c$2n, _ofjh, hj7_of, ho4wjf) {
      console['log']('buff:::', c$2n, hj7_of, hofw4['fileNativeDir'] + '///' + hofw4['fileListName']), ho4wjf(c$2n, _ofjh, hj7_of);
    }, f_4o['clearRes'] = function ($2gqni, ya3v65) {
      ya3v65 === void 0x0 && (ya3v65 = ![]);var k2cn$9 = this;k2cn$9['clearRes']($2gqni, ya3v65);var v0zyrx = hofw4['getFileInfo']($2gqni);if (v0zyrx && ($2gqni['indexOf']('http://') != -0x1 || $2gqni['indexOf']('https://') != -0x1)) {
        var l8_7f = v0zyrx['md5'],
            am5ud1 = hofw4['getFileNativePath'](l8_7f);hofw4['remove'](am5ud1);
      }
    }, y536['onReadNativeCallBack'] = function (otjw4, th1wd4, hjot4, _4jo, c9kl2s, tjwd4h, am16, cs8l9k, $g2n) {
      _4jo === void 0x0 && (_4jo = !![]), tjwd4h === void 0x0 && (tjwd4h = ![]), cs8l9k === void 0x0 && (cs8l9k = 0x0);if (!cs8l9k) {
        var l97sc8;if (hjot4 == 'json' || hjot4 == 'atlas') l97sc8 = m56a3['getJson']($g2n['data']);else hjot4 == 'xml' ? l97sc8 = tm1d5['parseXMLFromString']($g2n['data']) : l97sc8 = $g2n['data'];am16['onLoaded'](l97sc8), !m56a3['isZiYu'] && m56a3['isPosMsgYu'] && hjot4 != 'arraybuffer' && wx['postMessage']({ 'url': th1wd4, 'data': l97sc8, 'isLoad': !![] });
      } else cs8l9k == 0x1 && m56a3['EnvConfig']['load']['call'](am16, th1wd4, hjot4, _4jo, c9kl2s, tjwd4h);
    }, rzxe0y(y536, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), y536;
  }(),
      hofw4 = function (ns9ck) {
    function yx0v() {
      yx0v['__super']['call'](this);;
    }return f_j8(yx0v, 'laya.wx.mini.MiniFileMgr', ns9ck), yx0v['isLoadFile'] = function (f8_o7) {
      return yx0v['_fileTypeArr']['indexOf'](f8_o7) != -0x1 ? !![] : ![];
    }, yx0v['getFileInfo'] = function (um653) {
      var of87_ = um653['split']('?')[0x0],
          s9l87c = yx0v['filesListObj'][of87_];if (s9l87c == null) return null;else return s9l87c;return null;
    }, yx0v['onFileUpdate'] = function (kl29c, h4fwoj) {
      var c29n$k = kl29c['split']('/'),
          ng$92k = c29n$k[c29n$k['length'] - 0x1],
          s8lf7_ = yx0v['getFileInfo'](h4fwoj);if (s8lf7_ == null) yx0v['onSaveFile'](h4fwoj, ng$92k);else {
        if (s8lf7_['readyUrl'] != h4fwoj) yx0v['remove'](ng$92k, h4fwoj);
      }
    }, yx0v['exits'] = function (hwofj4, udma1) {
      var $2nc9 = yx0v['getFileNativePath'](hwofj4);yx0v['fs']['getFileInfo']({ 'filePath': $2nc9, 'success': function (oj7hf_) {
          udma1 != null && udma1['runWith']([0x0, oj7hf_]);
        }, 'fail': function (ho4_j) {
          udma1 != null && udma1['runWith']([0x1, ho4_j]);
        } });
    }, yx0v['read'] = function (avm3, a1dum5, _8sfl7, ki$2ng) {
      a1dum5 === void 0x0 && (a1dum5 = 'ascill'), ki$2ng === void 0x0 && (ki$2ng = '');var $iqgnp;ki$2ng != '' ? $iqgnp = yx0v['getFileNativePath'](avm3) : $iqgnp = avm3, yx0v['fs']['readFile']({ 'filePath': $iqgnp, 'encoding': a1dum5, 'success': function (o_fhj7) {
          _8sfl7 != null && _8sfl7['runWith']([0x0, o_fhj7]);
        }, 'fail': function (wdmt) {
          if (wdmt && ki$2ng != '') yx0v['down'](ki$2ng, a1dum5, _8sfl7, ki$2ng);else _8sfl7 != null && _8sfl7['runWith']([0x1]);
        } });
    }, yx0v['readNativeFile'] = function (whjto4, cs87l) {
      yx0v['fs']['readFile']({ 'filePath': whjto4, 'encoding': '', 'success': function (fo_87j) {
          cs87l != null && cs87l['runWith']([0x0]);
        }, 'fail': function (nkg$2) {
          cs87l != null && cs87l['runWith']([0x1]);
        } });
    }, yx0v['down'] = function (nipg$q, t4whdj, _fo4j, r3v0y) {
      t4whdj === void 0x0 && (t4whdj = 'ascill'), r3v0y === void 0x0 && (r3v0y = '');var r0ez = yx0v['getFileNativePath'](r3v0y),
          u53am6 = yx0v['wxdown']({ 'url': nipg$q, 'filePath': r0ez, 'success': function (xyre) {
          if (xyre['statusCode'] === 0xc8) yx0v['readFile'](xyre['filePath'], t4whdj, _fo4j, r3v0y);
        }, 'fail': function (u15a6) {
          _fo4j != null && _fo4j['runWith']([0x1, u15a6]);
        } });u53am6['onProgressUpdate'](function (r06v) {
        _fo4j != null && _fo4j['runWith']([0x2, r06v['progress']]);
      });
    }, yx0v['readFile'] = function (yv03r6, gipq$n, z0vxry, k2ign$) {
      gipq$n === void 0x0 && (gipq$n = 'ascill'), k2ign$ === void 0x0 && (k2ign$ = ''), yx0v['fs']['readFile']({ 'filePath': yv03r6, 'encoding': gipq$n, 'success': function (yva65) {
          if (yv03r6['indexOf']('http://') != -0x1 || yv03r6['indexOf']('https://') != -0x1) yx0v['onFileUpdate'](yv03r6, k2ign$);z0vxry != null && z0vxry['runWith']([0x0, yva65]);
        }, 'fail': function (mv53a6) {
          if (mv53a6) z0vxry != null && z0vxry['runWith']([0x1, mv53a6]);
        } });
    }, yx0v['downImg'] = function (mua51, f_87ol, s9c8l) {
      s9c8l === void 0x0 && (s9c8l = '');var utdwm1 = yx0v['wxdown']({ 'url': mua51, 'success': function (w14t) {
          w14t['statusCode'] === 0xc8 && yx0v['copyFile'](w14t['tempFilePath'], s9c8l, f_87ol);
        }, 'fail': function (x0yrez) {
          f_87ol != null && f_87ol['runWith']([0x1, x0yrez]);
        } });
    }, yx0v['copyFile'] = function (tmw1, a1mu6, t5mu1) {
      var u6a1 = tmw1['split']('/'),
          wm1u = u6a1[u6a1['length'] - 0x1],
          otwhj = a1mu6['split']('?')[0x0],
          mau536 = yx0v['getFileInfo'](a1mu6),
          dmu51a = yx0v['getFileNativePath'](wm1u);yx0v['fs']['copyFile']({ 'srcPath': tmw1, 'destPath': dmu51a, 'success': function (j78f_) {
          if (!mau536) yx0v['onSaveFile'](a1mu6, wm1u), t5mu1 != null && t5mu1['runWith']([0x0]);else {
            if (mau536['readyUrl'] != a1mu6) yx0v['remove'](wm1u, a1mu6, t5mu1);
          }
        }, 'fail': function (inqpg) {
          t5mu1 != null && t5mu1['runWith']([0x1, inqpg]);
        } });
    }, yx0v['getFileNativePath'] = function (a6u1m5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + a6u1m5;
    }, yx0v['remove'] = function (j4ohwf, j_o4hf, e0yxr) {
      j_o4hf === void 0x0 && (j_o4hf = '');var _87cls = yx0v['getFileInfo'](j_o4hf),
          u1mtdw = yx0v['getFileNativePath'](_87cls['md5']);in2q$['loader']['clearRes'](_87cls['readyUrl']), yx0v['fs']['unlink']({ 'filePath': u1mtdw, 'success': function (duw4) {
          if (j_o4hf != '') yx0v['onSaveFile'](j_o4hf, j4ohwf);e0yxr != null && e0yxr['runWith']([0x0]);
        }, 'fail': function (fo) {} });
    }, yx0v['onSaveFile'] = function (j_8f, j7of_8) {
      var sc978l = j_8f['split']('?')[0x0];yx0v['filesListObj'][sc978l] = { 'md5': j7of_8, 'readyUrl': j_8f }, yx0v['fs']['writeFile']({ 'filePath': yx0v['fileNativeDir'] + '/' + yx0v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yx0v['filesListObj']), 'success': function (t4hd1) {
          console['log']('写入测试测试成功：', t4hd1);
        }, 'fail': function (zr03vy) {
          console['log']('写入测试测试失败：', zr03vy);
        } });
    }, yx0v['existDir'] = function (rx0vy, fl7_) {
      yx0v['fs']['mkdir']({ 'dirPath': rx0vy, 'success': function (to4jwh) {
          fl7_ != null && fl7_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jfh4_o) {
          if (jfh4_o['errMsg']['indexOf']('file already exists') != -0x1) yx0v['readSync'](yx0v['fileListName'], 'utf8', fl7_);else fl7_ != null && fl7_['runWith']([0x1, jfh4_o]);
        } });
    }, yx0v['readSync'] = function (dwtu14, ojh4wf, wd4tjh, xvzr) {
      ojh4wf === void 0x0 && (ojh4wf = 'ascill'), xvzr === void 0x0 && (xvzr = '');var f8_7o = yx0v['getFileNativePath'](dwtu14),
          n2$g9;try {
        n2$g9 = yx0v['fs']['readFileSync'](f8_7o), wd4tjh != null && wd4tjh['runWith']([0x0, { 'data': n2$g9 }]);
      } catch (zxeyr0) {
        wd4tjh != null && wd4tjh['runWith']([0x1]);
      }
    }, yx0v['readCache'] = function () {}, yx0v['writeCache'] = function (c9k$) {
      var ks2n9 = readyUrl['split']('?')[0x0];yx0v['filesListObj'][ks2n9] = { 'md5': md5Name, 'readyUrl': readyUrl }, yx0v['fs']['writeFile']({ 'filePath': yx0v['fileNativeDir'] + '/' + yx0v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yx0v['filesListObj']), 'success': function (jo7h) {}, 'fail': function ($pqn) {} });
    }, yx0v['setNativeFileDir'] = function (ng2$qi) {
      yx0v['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ng2$qi;
    }, yx0v['filesListObj'] = {}, yx0v['fileNativeDir'] = null, yx0v['fileListName'] = 'layaairfiles.txt', yx0v['ziyuFileData'] = {}, rzxe0y(yx0v, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yx0v;
  }(s2cnk9),
      rxzy0v = function (o7fl_) {
    function _8s7f() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _8s7f['__super']['call'](this), this['_sound'] = _8s7f['_createSound']();
    }f_j8(_8s7f, 'laya.wx.mini.MiniSound', o7fl_);var g$nqpi = _8s7f['prototype'];return g$nqpi['load'] = function (tum1wd) {
      var skc2 = this;tum1wd = _78flo['formatURL'](tum1wd), this['url'] = tum1wd;if (_8s7f['_audioCache'][tum1wd]) {
        this['event']('complete');return;
      }function n$igq2() {
        if (_8s7f['_null'] != undefined) skc2['_sound']['onCanplay'](_8s7f['_null']), skc2['_sound']['onError'](_8s7f['_null']);else try {
          skc2['_sound']['onCanplay'](null), skc2['_sound']['onError'](null), _8s7f['_null'] = null;
        } catch (u4t1wd) {
          console['warn']('[wxmini] _clearSound:' + u4t1wd), skc2['_sound']['onCanplay'](y063), skc2['_sound']['onError'](y063), _8s7f['_null'] = y063;
        }
      }function f8l_o() {
        n$igq2(), y3v['loaded'] = !![], y3v['event']('complete'), _8s7f['_audioCache'][y3v['url']] = y3v;
      }function n$29c(pi$ngq) {
        console['error']('errCode=' + pi$ngq['errCode'] + '  errMsg=' + pi$ngq['errMsg']), n$igq2(), y3v['event']('error');
      }function y063() {}this['_sound']['onCanplay'](f8l_o), this['_sound']['onError'](n$29c), this['_sound']['src'] = tum1wd;var y3v = this;
    }, g$nqpi['play'] = function (lof_, yzr0v3) {
      lof_ === void 0x0 && (lof_ = 0x0), yzr0v3 === void 0x0 && (yzr0v3 = 0x0);var ryz3v0;if (this['url'] == y03vz['_tMusic']) {
        if (!_8s7f['_musicAudio']) _8s7f['_musicAudio'] = _8s7f['_createSound']();ryz3v0 = _8s7f['_musicAudio'];
      } else ryz3v0 = _8s7f['_createSound']();ryz3v0['src'] = this['url'];var g$qpn = new oj4_h(ryz3v0);return g$qpn['url'] = this['url'], g$qpn['loops'] = yzr0v3, g$qpn['startTime'] = lof_, g$qpn['play'](), y03vz['addChannel'](g$qpn), g$qpn;
    }, g$nqpi['dispose'] = function () {
      var lc9k8 = _8s7f['_audioCache'][this['url']];lc9k8 && (lc9k8['src'] = '', delete _8s7f['_audioCache'][this['url']]);
    }, qn$2gi(0x0, g$nqpi, 'duration', function () {
      return this['_sound']['duration'];
    }), _8s7f['_createSound'] = function () {
      return _8s7f['_id']++, m56a3['window']['wx']['createInnerAudioContext']();
    }, _8s7f['_musicAudio'] = null, _8s7f['_id'] = 0x0, _8s7f['_audioCache'] = {}, _8s7f['_null'] = undefined, _8s7f;
  }(s2cnk9),
      oj4_h = function (m516ua) {
    function md1au5($nq2i) {
      this['_audio'] = null, this['_onEnd'] = null, md1au5['__super']['call'](this), this['_audio'] = $nq2i, this['_onEnd'] = tm1d5['bind'](this['__onEnd'], this), $nq2i['onEnded'](this['_onEnd']);
    }f_j8(md1au5, 'laya.wx.mini.MiniSoundChannel', m516ua);var hj_fo4 = md1au5['prototype'];return hj_fo4['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (in2q$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hj_fo4['__onNull'] = function () {}, hj_fo4['play'] = function () {
      this['isStopped'] = ![], y03vz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hj_fo4['stop'] = function () {
      this['isStopped'] = !![], y03vz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (md1au5['_null'] != undefined) this['_audio']['onEnded'](md1au5['_null']);else try {
        this['_audio']['onEnded'](null), md1au5['_null'] = null;
      } catch (_8fj) {
        console['warn']('[wxmini] stop:' + _8fj), this['_audio']['onEnded'](tm1d5['bind'](this['__onNull'], this)), md1au5['_null'] = tm1d5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hj_fo4['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hj_fo4['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], y03vz['addChannel'](this), this['_audio']['play']();
    }, qn$2gi(0x0, hj_fo4, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qn$2gi(0x0, hj_fo4, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qn$2gi(0x0, hj_fo4, 'volume', function () {
      return 0x1;
    }, function (f_4ho) {}), md1au5['_null'] = undefined, md1au5;
  }(zy3rv0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var whfj4 in Laya) {
    var y6v3 = Laya[whfj4];y6v3 && y6v3['__isclass'] && (exports[whfj4] = y6v3);
  }
});