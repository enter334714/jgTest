var U = wx.$k;
(function (window, document, hti_m) {
  var hmt_3 = hti_m['un'],
      x4bh3t = hti_m['uns'],
      gquwfd = hti_m['static'],
      jkv7n8 = hti_m['class'],
      g2yow = hti_m['getset'],
      t3_hmi = hti_m['__newvec'],
      uqgd = laya['utils']['Browser'],
      cr8k = laya['events']['Event'],
      fgdo2 = laya['events']['EventDispatcher'],
      xt43h_ = laya['resource']['HTMLImage'],
      i_ht4 = laya['utils']['Handler'],
      $as5ez = laya['display']['Input'],
      gdow = laya['net']['Loader'],
      _3tx4h = laya['maths']['Matrix'],
      s6ae$5 = laya['renders']['Render'],
      mhvi7_ = laya['utils']['RunDriver'],
      jinm7v = laya['media']['Sound'],
      cjk8l = laya['media']['SoundChannel'],
      mv7h_i = laya['media']['SoundManager'],
      nmvji = laya['display']['Stage'],
      injvm7 = laya['net']['URL'],
      b39t4 = laya['utils']['Utils'],
      ae$65s = function () {
    function y0wg2() {}return jkv7n8(y0wg2, 'laya.wx.mini.MiniAdpter'), y0wg2['getJson'] = function (g0zo2) {
      return JSON['parse'](g0zo2);
    }, y0wg2['init'] = function (b941t, wugfdq) {
      b941t === void 0x0 && (b941t = ![]), wugfdq === void 0x0 && (wugfdq = ![]);if (y0wg2['_inited']) return;y0wg2['window'] = window;if (y0wg2['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y0wg2['_inited'] = !![], y0wg2['isZiYu'] = wugfdq, y0wg2['isPosMsgYu'] = b941t, y0wg2['EnvConfig'] = {}, !y0wg2['isZiYu'] && (_tmih['setNativeFileDir']('/layaairGame'), _tmih['existDir'](_tmih['fileNativeDir'], i_ht4['create'](y0wg2, y0wg2['onMkdirCallBack']))), y0wg2['window']['focus'] = function () {}, hti_m['getUrlPath'] = function () {}, y0wg2['window']['logtime'] = function (k8rcnl) {}, y0wg2['window']['alertTimeLog'] = function (d2guf) {}, y0wg2['window']['resetShareInfo'] = function () {}, y0wg2['window']['CanvasRenderingContext2D'] = function () {}, y0wg2['window']['CanvasRenderingContext2D']['prototype'] = y0wg2['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y0wg2['window']['document']['body']['appendChild'] = function () {}, y0wg2['EnvConfig']['pixelRatioInt'] = 0x0, mhvi7_['getPixelRatio'] = y0wg2['pixelRatio'], y0wg2['_preCreateElement'] = uqgd['createElement'], uqgd['createElement'] = y0wg2['createElement'], mhvi7_['createShaderCondition'] = y0wg2['createShaderCondition'], b39t4['parseXMLFromString'] = y0wg2['parseXMLFromString'], $as5ez['_createInputElement'] = e5azs['_createInputElement'], y0wg2['EnvConfig']['load'] = gdow['prototype']['load'], gdow['prototype']['load'] = $16es['prototype']['load'], y0wg2['isZiYu'] && b941t && wx['onMessage'](function (mnij) {
        mnij['isLoad'] && (_tmih['ziyuFileData'][mnij['url']] = mnij['data']);
      });
    }, y0wg2['onMkdirCallBack'] = function (lkn8cr, ithm) {
      if (!lkn8cr) _tmih['filesListObj'] = JSON['parse'](ithm['data']);
    }, y0wg2['pixelRatio'] = function () {
      if (!y0wg2['EnvConfig']['pixelRatioInt']) try {
        var godw2f = wx['getSystemInfoSync']();return y0wg2['EnvConfig']['pixelRatioInt'] = godw2f['pixelRatio'], godw2f = godw2f, godw2f['pixelRatio'];
      } catch (yw20g) {}return y0wg2['EnvConfig']['pixelRatioInt'];
    }, y0wg2['createElement'] = function (miv_h) {
      if (miv_h == 'canvas') {
        var btx493;return y0wg2['idx'] == 0x1 ? y0wg2['isZiYu'] ? (btx493 = sharedCanvas, btx493['style'] = {}) : btx493 = window['canvas'] : btx493 = window['wx']['createCanvas'](), y0wg2['idx']++, btx493;
      } else {
        if (miv_h == 'textarea' || miv_h == 'input') return y0wg2['onCreateInput'](miv_h);else {
          if (miv_h == 'div') {
            var eaz5sy = y0wg2['_preCreateElement'](miv_h);return eaz5sy['contains'] = function (ys5aez) {
              return null;
            }, eaz5sy['removeChild'] = function (a16b) {}, eaz5sy;
          } else return y0wg2['_preCreateElement'](miv_h);
        }
      }
    }, y0wg2['onCreateInput'] = function (vi7jm_) {
      var t493b = y0wg2['_preCreateElement'](vi7jm_);return t493b['focus'] = e5azs['wxinputFocus'], t493b['blur'] = e5azs['wxinputblur'], t493b['style'] = {}, t493b['value'] = 0x0, t493b['parentElement'] = {}, t493b['placeholder'] = {}, t493b['type'] = {}, t493b['setColor'] = function (htx3b4) {}, t493b['setType'] = function (dgwu2) {}, t493b['setFontFace'] = function (d2owgf) {}, t493b['addEventListener'] = function (b$x961) {}, t493b['contains'] = function (rcnk) {
        return null;
      }, t493b['removeChild'] = function (hi_34) {}, t493b;
    }, y0wg2['createShaderCondition'] = function (e$a6s5) {
      var bt9x41 = this,
          g2zo = function () {
        var ivh3m_ = e$a6s5;return bt9x41[e$a6s5['replace']('this.', '')];
      };return g2zo;
    }, y0wg2['EnvConfig'] = null, y0wg2['window'] = null, y0wg2['_preCreateElement'] = null, y0wg2['_inited'] = ![], y0wg2['wxRequest'] = null, y0wg2['systemInfo'] = null, y0wg2['version'] = '0.0.1', y0wg2['isZiYu'] = ![], y0wg2['isPosMsgYu'] = ![], y0wg2['parseXMLFromString'] = function (a5ze$) {
      var tmi_, wo02gf;a5ze$ = a5ze$['replace'](/>\s+</g, '><');try {
        tmi_ = new window['Parser']['DOMParser']()['parseFromString'](a5ze$, 'text/xml');
      } catch (mi3_hv) {
        throw '需要引入xml解析库文件';
      }return tmi_;
    }, y0wg2['idx'] = 0x1, y0wg2;
  }(),
      o20fw = function () {
    function fdw2o() {}jkv7n8(fdw2o, 'laya.wx.mini.MiniImage');var $5eza = fdw2o['prototype'];return $5eza['_loadImage'] = function (x43th) {
      var $1as6 = this,
          $x6b91 = ![];x43th['indexOf']('layaNativeDir/') == -0x1 && ($x6b91 = !![], x43th = injvm7['formatURL'](x43th));if (!_tmih['getFileInfo'](x43th)) {
        if (x43th['indexOf']('http://') != -0x1 || x43th['indexOf']('https://') != -0x1) _tmih['downImg'](x43th, new i_ht4(fdw2o, fdw2o['onDownImgCallBack'], [x43th, $1as6]), x43th);else fdw2o['onCreateImage'](x43th, $1as6, !![]);
      } else fdw2o['onCreateImage'](x43th, $1as6, !$x6b91);
    }, fdw2o['onDownImgCallBack'] = function (h4_xt, kj8lnc, gy20wo) {
      if (!gy20wo) fdw2o['onCreateImage'](h4_xt, kj8lnc);else kj8lnc['onError'](null);
    }, fdw2o['onCreateImage'] = function (x$b169, jn87v, sez$a5) {
      sez$a5 === void 0x0 && (sez$a5 = ![]);var k8lcr;if (!sez$a5) {
        var tb1x9 = _tmih['getFileInfo'](x$b169),
            gy0w2o = tb1x9['md5'];k8lcr = _tmih['getFileNativePath'](gy0w2o);
      } else k8lcr = x$b169;if (jn87v['imgCache'] == null) jn87v['imgCache'] = {};var n78vk;function w2fogd() {
        n78vk['onload'] = null, n78vk['onerror'] = null, delete jn87v['imgCache'][x$b169];
      };var ji7_v = function () {
        w2fogd(), jn87v['onLoaded'](n78vk);
      },
          w0o2fg = function () {
        w2fogd(), jn87v['event']('error', 'Load image failed');
      };jn87v['_type'] == 'nativeimage' ? (n78vk = new uqgd['window']['Image'](), n78vk['crossOrigin'] = '', n78vk['onload'] = ji7_v, n78vk['onerror'] = w0o2fg, n78vk['src'] = k8lcr, jn87v['imgCache'][x$b169] = n78vk) : new xt43h_['create'](k8lcr, { 'onload': ji7_v, 'onerror': w0o2fg, 'onCreate': function (a5e6$) {
          n78vk = a5e6$, jn87v['imgCache'][x$b169] = a5e6$;
        } });
    }, fdw2o;
  }(),
      e5azs = function () {
    function vh7m_i() {}return jkv7n8(vh7m_i, 'laya.wx.mini.MiniInput'), vh7m_i['_createInputElement'] = function () {
      $as5ez['_initInput']($as5ez['area'] = uqgd['createElement']('textarea')), $as5ez['_initInput']($as5ez['input'] = uqgd['createElement']('input')), $as5ez['inputContainer'] = uqgd['createElement']('div'), $as5ez['inputContainer']['style']['position'] = 'absolute', $as5ez['inputContainer']['style']['zIndex'] = 0x186a0, uqgd['container']['appendChild']($as5ez['inputContainer']), $as5ez['inputContainer']['setPos'] = function (p8rklc, e6) {
        $as5ez['inputContainer']['style']['left'] = p8rklc + 'px', $as5ez['inputContainer']['style']['top'] = e6 + 'px';
      }, hti_m['stage']['on']('resize', null, vh7m_i['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p8crk) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), mv7h_i['_soundClass'] = s5e6$, mv7h_i['_musicClass'] = s5e6$;
    }, vh7m_i['_onStageResize'] = function () {
      var zg20y = hti_m['stage']['_canvasTransform']['identity']();zg20y['scale'](uqgd['width'] / s6ae$5['canvas']['width'] / mhvi7_['getPixelRatio'](), uqgd['height'] / s6ae$5['canvas']['height'] / mhvi7_['getPixelRatio']());
    }, vh7m_i['wxinputFocus'] = function (s$65a) {
      var m_vih = $as5ez['inputElement']['target'];if (m_vih && !m_vih['editable']) return;ae$65s['window']['wx']['offKeyboardConfirm'](), ae$65s['window']['wx']['offKeyboardInput'](), ae$65s['window']['wx']['showKeyboard']({ 'defaultValue': m_vih['text'], 'maxLength': m_vih['maxChars'], 'multiple': m_vih['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qdguwf) {}, 'fail': function (dufw2) {} }), ae$65s['window']['wx']['onKeyboardConfirm'](function (o0z52y) {
        var az$es5 = o0z52y ? o0z52y['value'] : '';m_vih['text'] = az$es5, m_vih['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ae$65s['window']['wx']['onKeyboardInput'](function (iv_7mj) {
        var rlnk = iv_7mj ? iv_7mj['value'] : '';if (!m_vih['multiline']) {
          if (rlnk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }m_vih['text'] = rlnk, m_vih['event']('input');
      });
    }, vh7m_i['inputEnter'] = function () {
      $as5ez['inputElement']['target']['focus'] = ![];
    }, vh7m_i['wxinputblur'] = function () {
      vh7m_i['hideKeyboard']();
    }, vh7m_i['hideKeyboard'] = function () {
      ae$65s['window']['wx']['offKeyboardConfirm'](), ae$65s['window']['wx']['offKeyboardInput'](), ae$65s['window']['wx']['hideKeyboard']({ 'success': function (j87n) {
          console['log']('隐藏键盘');
        }, 'fail': function (v7i_) {
          console['log']('隐藏键盘出错:' + (v7i_ ? v7i_['errMsg'] : ''));
        } });
    }, vh7m_i;
  }(),
      $16es = function () {
    function za5yes() {}jkv7n8(za5yes, 'laya.wx.mini.MiniLoader');var eoz5 = za5yes['prototype'];return eoz5['load'] = function ($a5se, krlc8, h7v_i, c8rl, zae5y) {
      h7v_i === void 0x0 && (h7v_i = !![]), zae5y === void 0x0 && (zae5y = ![]);var i7v_hm = this;i7v_hm['_url'] = $a5se;if ($a5se['indexOf']('data:image') === 0x0) i7v_hm['_type'] = krlc8 = 'image';else i7v_hm['_type'] = krlc8 || (krlc8 = i7v_hm['getTypeFromUrl']($a5se));i7v_hm['_cache'] = h7v_i, i7v_hm['_data'] = null;var mn8jv = 'ascii';if ($a5se['indexOf']('.fnt') != -0x1) mn8jv = 'utf8';else krlc8 == 'arraybuffer' && (mn8jv = '');;var v_ij7 = b39t4['getFileExtension']($a5se);if (za5yes['_fileTypeArr']['indexOf'](v_ij7) != -0x1) ae$65s['EnvConfig']['load']['call'](this, $a5se, krlc8, h7v_i, c8rl, zae5y);else {
        if (!_tmih['getFileInfo']($a5se)) {
          if ($a5se['indexOf']('layaNativeDir/') != -0x1) {
            if (ae$65s['isZiYu']) {
              var t_x43 = _tmih['ziyuFileData'][$a5se];i7v_hm['onLoaded'](t_x43);return;
            } else {
              cosnole['log']('read read'), _tmih['read']($a5se, mn8jv, new i_ht4(za5yes, za5yes['onReadNativeCallBack'], [mn8jv, $a5se, krlc8, h7v_i, c8rl, zae5y, i7v_hm]));return;
            }
          }if (injvm7['rootPath'] == '') var x$6b9 = $a5se;else x$6b9 = $a5se['split'](injvm7['rootPath'])[0x0];$a5se['indexOf']('http://') != -0x1 || $a5se['indexOf']('https://') != -0x1 ? ae$65s['EnvConfig']['load']['call'](i7v_hm, $a5se, krlc8, h7v_i, c8rl, zae5y) : _tmih['readFile'](x$6b9, mn8jv, new i_ht4(za5yes, za5yes['onReadNativeCallBack'], [mn8jv, $a5se, krlc8, h7v_i, c8rl, zae5y, i7v_hm]), $a5se);
        } else ae$65s['EnvConfig']['load']['call'](this, $a5se, krlc8, h7v_i, c8rl, zae5y);
      }
    }, eoz5['resMgrLoad'] = function (n8mv, s0z5ye, x4t_3, nk8lj, crnl8k, hi7mv, jvn8m7) {
      x4t_3 === void 0x0 && (x4t_3 = 0x0), nk8lj === void 0x0 && (nk8lj = ![]), crnl8k === void 0x0 && (crnl8k = ![]), hi7mv === void 0x0 && (hi7mv = 0x0), jvn8m7 === void 0x0 && (jvn8m7 = 0x3), n8mv['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', n8mv), ae$65s['EnvConfig']['resMgrLoad'](n8mv, (njm8v7, vnk8j, klrn8) => {
        za5yes['prototype']['resMgrLoadCallBack'](njm8v7, vnk8j, klrn8, s0z5ye);
      }, x4t_3, nk8lj, crnl8k, hi7mv, jvn8m7);
    }, eoz5['resMgrLoadCallBack'] = function ($e1s6, t_ih3m, t4_hx, jmivn) {
      console['log']('buff:::', $e1s6, t4_hx, _tmih['fileNativeDir'] + '///' + _tmih['fileListName']), jmivn($e1s6, t_ih3m, t4_hx);
    }, eoz5['clearRes'] = function (ze0y, qwdg) {
      qwdg === void 0x0 && (qwdg = ![]);var _t3hx = this;_t3hx['clearRes'](ze0y, qwdg);var ae5s$z = _tmih['getFileInfo'](ze0y);if (ae5s$z && (ze0y['indexOf']('http://') != -0x1 || ze0y['indexOf']('https://') != -0x1)) {
        var qfgdw = ae5s$z['md5'],
            $9s6a1 = _tmih['getFileNativePath'](qfgdw);_tmih['remove']($9s6a1);
      }
    }, za5yes['onReadNativeCallBack'] = function (gzy0o2, n7v8jk, $6ea5s, s5z0ey, hvi_7m, njvm7i, nm87v, y2o50, i4_h3t) {
      s5z0ey === void 0x0 && (s5z0ey = !![]), njvm7i === void 0x0 && (njvm7i = ![]), y2o50 === void 0x0 && (y2o50 = 0x0);if (!y2o50) {
        var goy2w0;if ($6ea5s == 'json' || $6ea5s == 'atlas') goy2w0 = ae$65s['getJson'](i4_h3t['data']);else $6ea5s == 'xml' ? goy2w0 = b39t4['parseXMLFromString'](i4_h3t['data']) : goy2w0 = i4_h3t['data'];nm87v['onLoaded'](goy2w0), !ae$65s['isZiYu'] && ae$65s['isPosMsgYu'] && $6ea5s != 'arraybuffer' && wx['postMessage']({ 'url': n7v8jk, 'data': goy2w0, 'isLoad': !![] });
      } else y2o50 == 0x1 && ae$65s['EnvConfig']['load']['call'](nm87v, n7v8jk, $6ea5s, s5z0ey, hvi_7m, njvm7i);
    }, gquwfd(za5yes, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), za5yes;
  }(),
      _tmih = function (rk8) {
    function e0ozy() {
      e0ozy['__super']['call'](this);;
    }return jkv7n8(e0ozy, 'laya.wx.mini.MiniFileMgr', rk8), e0ozy['isLoadFile'] = function (fgwqud) {
      return e0ozy['_fileTypeArr']['indexOf'](fgwqud) != -0x1 ? !![] : ![];
    }, e0ozy['getFileInfo'] = function (i3_t4) {
      var o520 = i3_t4['split']('?')[0x0],
          jk8vn = e0ozy['filesListObj'][o520];if (jk8vn == null) return null;else return jk8vn;return null;
    }, e0ozy['onFileUpdate'] = function (z0g2yo, fw2dog) {
      var qwugd = z0g2yo['split']('/'),
          $9a1b = qwugd[qwugd['length'] - 0x1],
          kcplr = e0ozy['getFileInfo'](fw2dog);if (kcplr == null) e0ozy['onSaveFile'](fw2dog, $9a1b);else {
        if (kcplr['readyUrl'] != fw2dog) e0ozy['remove']($9a1b, fw2dog);
      }
    }, e0ozy['exits'] = function (knj8c, a5ezsy) {
      var _ith43 = e0ozy['getFileNativePath'](knj8c);e0ozy['fs']['getFileInfo']({ 'filePath': _ith43, 'success': function (nl8rkc) {
          a5ezsy != null && a5ezsy['runWith']([0x0, nl8rkc]);
        }, 'fail': function (tb194x) {
          a5ezsy != null && a5ezsy['runWith']([0x1, tb194x]);
        } });
    }, e0ozy['read'] = function (ck87nj, oe0z5, lkcr8n, x4b16) {
      oe0z5 === void 0x0 && (oe0z5 = 'ascill'), x4b16 === void 0x0 && (x4b16 = '');var sa5eyz;x4b16 != '' ? sa5eyz = e0ozy['getFileNativePath'](ck87nj) : sa5eyz = ck87nj, e0ozy['fs']['readFile']({ 'filePath': sa5eyz, 'encoding': oe0z5, 'success': function (v78jnm) {
          lkcr8n != null && lkcr8n['runWith']([0x0, v78jnm]);
        }, 'fail': function (uf2g) {
          if (uf2g && x4b16 != '') e0ozy['down'](x4b16, oe0z5, lkcr8n, x4b16);else lkcr8n != null && lkcr8n['runWith']([0x1]);
        } });
    }, e0ozy['readNativeFile'] = function (_hvm3i, $ea61) {
      e0ozy['fs']['readFile']({ 'filePath': _hvm3i, 'encoding': '', 'success': function (z05yo2) {
          $ea61 != null && $ea61['runWith']([0x0]);
        }, 'fail': function (wugfq) {
          $ea61 != null && $ea61['runWith']([0x1]);
        } });
    }, e0ozy['down'] = function ($zeas, hxt43_, y0o2z, kjln8c) {
      hxt43_ === void 0x0 && (hxt43_ = 'ascill'), kjln8c === void 0x0 && (kjln8c = '');var dgquf = e0ozy['getFileNativePath'](kjln8c),
          ze0yo5 = e0ozy['wxdown']({ 'url': $zeas, 'filePath': dgquf, 'success': function (dgwfo2) {
          if (dgwfo2['statusCode'] === 0xc8) e0ozy['readFile'](dgwfo2['filePath'], hxt43_, y0o2z, kjln8c);
        }, 'fail': function (kv7) {
          y0o2z != null && y0o2z['runWith']([0x1, kv7]);
        } });ze0yo5['onProgressUpdate'](function (fdugw2) {
        y0o2z != null && y0o2z['runWith']([0x2, fdugw2['progress']]);
      });
    }, e0ozy['readFile'] = function (v_mi7h, ae$s5, wdfo2g, i7jv_) {
      ae$s5 === void 0x0 && (ae$s5 = 'ascill'), i7jv_ === void 0x0 && (i7jv_ = ''), e0ozy['fs']['readFile']({ 'filePath': v_mi7h, 'encoding': ae$s5, 'success': function (o50zey) {
          if (v_mi7h['indexOf']('http://') != -0x1 || v_mi7h['indexOf']('https://') != -0x1) e0ozy['onFileUpdate'](v_mi7h, i7jv_);wdfo2g != null && wdfo2g['runWith']([0x0, o50zey]);
        }, 'fail': function (rlp) {
          if (rlp) wdfo2g != null && wdfo2g['runWith']([0x1, rlp]);
        } });
    }, e0ozy['downImg'] = function (i3thm_, jnv7k8, udfqwg) {
      udfqwg === void 0x0 && (udfqwg = '');var t4bx39 = e0ozy['wxdown']({ 'url': i3thm_, 'success': function (a169) {
          a169['statusCode'] === 0xc8 && e0ozy['copyFile'](a169['tempFilePath'], udfqwg, jnv7k8);
        }, 'fail': function (vih_7m) {
          jnv7k8 != null && jnv7k8['runWith']([0x1, vih_7m]);
        } });
    }, e0ozy['copyFile'] = function (b91x4, cp8lrk, azyse) {
      var fqwud = b91x4['split']('/'),
          y0oz25 = fqwud[fqwud['length'] - 0x1],
          ni = cp8lrk['split']('?')[0x0],
          j8vn7 = e0ozy['getFileInfo'](cp8lrk),
          owyg02 = e0ozy['getFileNativePath'](y0oz25);e0ozy['fs']['copyFile']({ 'srcPath': b91x4, 'destPath': owyg02, 'success': function (v8n7jk) {
          if (!j8vn7) e0ozy['onSaveFile'](cp8lrk, y0oz25), azyse != null && azyse['runWith']([0x0]);else {
            if (j8vn7['readyUrl'] != cp8lrk) e0ozy['remove'](y0oz25, cp8lrk, azyse);
          }
        }, 'fail': function (tbxh43) {
          azyse != null && azyse['runWith']([0x1, tbxh43]);
        } });
    }, e0ozy['getFileNativePath'] = function (e5$as6) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + e5$as6;
    }, e0ozy['remove'] = function (v7_mh, wyog0, i_mhv) {
      wyog0 === void 0x0 && (wyog0 = '');var b$9a1 = e0ozy['getFileInfo'](wyog0),
          fqwdg = e0ozy['getFileNativePath'](b$9a1['md5']);hti_m['loader']['clearRes'](b$9a1['readyUrl']), e0ozy['fs']['unlink']({ 'filePath': fqwdg, 'success': function (t9x1b) {
          if (wyog0 != '') e0ozy['onSaveFile'](wyog0, v7_mh);i_mhv != null && i_mhv['runWith']([0x0]);
        }, 'fail': function (nj78kv) {} });
    }, e0ozy['onSaveFile'] = function (hx3_t4, fduw) {
      var z5$ea = hx3_t4['split']('?')[0x0];e0ozy['filesListObj'][z5$ea] = { 'md5': fduw, 'readyUrl': hx3_t4 }, e0ozy['fs']['writeFile']({ 'filePath': e0ozy['fileNativeDir'] + '/' + e0ozy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e0ozy['filesListObj']), 'success': function (vnj8m) {
          console['log']('写入测试测试成功：', vnj8m);
        }, 'fail': function (tm3) {
          console['log']('写入测试测试失败：', tm3);
        } });
    }, e0ozy['existDir'] = function (a1s6, vi_7h) {
      e0ozy['fs']['mkdir']({ 'dirPath': a1s6, 'success': function (tx_) {
          vi_7h != null && vi_7h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (wfgqd) {
          if (wfgqd['errMsg']['indexOf']('file already exists') != -0x1) e0ozy['readSync'](e0ozy['fileListName'], 'utf8', vi_7h);else vi_7h != null && vi_7h['runWith']([0x1, wfgqd]);
        } });
    }, e0ozy['readSync'] = function (ae6s$, cplr8k, yze0o, $91s6a) {
      cplr8k === void 0x0 && (cplr8k = 'ascill'), $91s6a === void 0x0 && ($91s6a = '');var ayesz = e0ozy['getFileNativePath'](ae6s$),
          x94b6;try {
        x94b6 = e0ozy['fs']['readFileSync'](ayesz), yze0o != null && yze0o['runWith']([0x0, { 'data': x94b6 }]);
      } catch (nv87kj) {
        yze0o != null && yze0o['runWith']([0x1]);
      }
    }, e0ozy['readCache'] = function () {}, e0ozy['writeCache'] = function (ivm7) {
      var b1$69 = readyUrl['split']('?')[0x0];e0ozy['filesListObj'][b1$69] = { 'md5': md5Name, 'readyUrl': readyUrl }, e0ozy['fs']['writeFile']({ 'filePath': e0ozy['fileNativeDir'] + '/' + e0ozy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e0ozy['filesListObj']), 'success': function (dw2gof) {}, 'fail': function (wdgfuq) {} });
    }, e0ozy['setNativeFileDir'] = function (y5zo0e) {
      e0ozy['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + y5zo0e;
    }, e0ozy['filesListObj'] = {}, e0ozy['fileNativeDir'] = null, e0ozy['fileListName'] = 'layaairfiles.txt', e0ozy['ziyuFileData'] = {}, gquwfd(e0ozy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), e0ozy;
  }(fgdo2),
      s5e6$ = function (xt394) {
    function crlk8p() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], crlk8p['__super']['call'](this), this['_sound'] = crlk8p['_createSound']();
    }jkv7n8(crlk8p, 'laya.wx.mini.MiniSound', xt394);var a61es$ = crlk8p['prototype'];return a61es$['load'] = function (o0ezy5) {
      var j8mnv7 = this;o0ezy5 = injvm7['formatURL'](o0ezy5), this['url'] = o0ezy5;if (crlk8p['_audioCache'][o0ezy5]) {
        this['event']('complete');return;
      }function mvj_i() {
        if (crlk8p['_null'] != undefined) j8mnv7['_sound']['onCanplay'](crlk8p['_null']), j8mnv7['_sound']['onError'](crlk8p['_null']);else try {
          j8mnv7['_sound']['onCanplay'](null), j8mnv7['_sound']['onError'](null), crlk8p['_null'] = null;
        } catch (iv7) {
          console['warn']('[wxmini] _clearSound:' + iv7), j8mnv7['_sound']['onCanplay'](zase5), j8mnv7['_sound']['onError'](zase5), crlk8p['_null'] = zase5;
        }
      }function uwf2g() {
        mvj_i(), i_t3['loaded'] = !![], i_t3['event']('complete'), crlk8p['_audioCache'][i_t3['url']] = i_t3;
      }function nv7mj(as6e$) {
        console['error']('errCode=' + as6e$['errCode'] + '  errMsg=' + as6e$['errMsg']), mvj_i(), i_t3['event']('error');
      }function zase5() {}this['_sound']['onCanplay'](uwf2g), this['_sound']['onError'](nv7mj), this['_sound']['src'] = o0ezy5;var i_t3 = this;
    }, a61es$['play'] = function (c7kjn8, oy0z2) {
      c7kjn8 === void 0x0 && (c7kjn8 = 0x0), oy0z2 === void 0x0 && (oy0z2 = 0x0);var gfdw2u;if (this['url'] == mv7h_i['_tMusic']) {
        if (!crlk8p['_musicAudio']) crlk8p['_musicAudio'] = crlk8p['_createSound']();gfdw2u = crlk8p['_musicAudio'];
      } else gfdw2u = crlk8p['_createSound']();gfdw2u['src'] = this['url'];var bhx34 = new b419t(gfdw2u);return bhx34['url'] = this['url'], bhx34['loops'] = oy0z2, bhx34['startTime'] = c7kjn8, bhx34['play'](), mv7h_i['addChannel'](bhx34), bhx34;
    }, a61es$['dispose'] = function () {
      var njvk78 = crlk8p['_audioCache'][this['url']];njvk78 && (njvk78['src'] = '', delete crlk8p['_audioCache'][this['url']]);
    }, g2yow(0x0, a61es$, 'duration', function () {
      return this['_sound']['duration'];
    }), crlk8p['_createSound'] = function () {
      return crlk8p['_id']++, ae$65s['window']['wx']['createInnerAudioContext']();
    }, crlk8p['_musicAudio'] = null, crlk8p['_id'] = 0x0, crlk8p['_audioCache'] = {}, crlk8p['_null'] = undefined, crlk8p;
  }(fgdo2),
      b419t = function (bt3x) {
    function goyz02(qf) {
      this['_audio'] = null, this['_onEnd'] = null, goyz02['__super']['call'](this), this['_audio'] = qf, this['_onEnd'] = b39t4['bind'](this['__onEnd'], this), qf['onEnded'](this['_onEnd']);
    }jkv7n8(goyz02, 'laya.wx.mini.MiniSoundChannel', bt3x);var zo20yg = goyz02['prototype'];return zo20yg['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (hti_m['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zo20yg['__onNull'] = function () {}, zo20yg['play'] = function () {
      this['isStopped'] = ![], mv7h_i['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zo20yg['stop'] = function () {
      this['isStopped'] = !![], mv7h_i['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (goyz02['_null'] != undefined) this['_audio']['onEnded'](goyz02['_null']);else try {
        this['_audio']['onEnded'](null), goyz02['_null'] = null;
      } catch (z5ey0o) {
        console['warn']('[wxmini] stop:' + z5ey0o), this['_audio']['onEnded'](b39t4['bind'](this['__onNull'], this)), goyz02['_null'] = b39t4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, zo20yg['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zo20yg['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], mv7h_i['addChannel'](this), this['_audio']['play']();
    }, g2yow(0x0, zo20yg, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), g2yow(0x0, zo20yg, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), g2yow(0x0, zo20yg, 'volume', function () {
      return 0x1;
    }, function (odwf2) {}), goyz02['_null'] = undefined, goyz02;
  }(cjk8l);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gwy20 in Laya) {
    var y0z2o = Laya[gwy20];y0z2o && y0z2o['__isclass'] && (exports[gwy20] = y0z2o);
  }
});