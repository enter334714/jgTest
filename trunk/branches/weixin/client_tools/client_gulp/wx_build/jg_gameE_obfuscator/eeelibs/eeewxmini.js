var b = wx.$e;
(function (window, document, d90) {
  var nsuk9 = d90['un'],
      rtglhx = d90['uns'],
      nq9u = d90['static'],
      opemca = d90['class'],
      fyrvh = d90['getset'],
      jquns = d90['__newvec'],
      co7 = laya['utils']['Browser'],
      jiu = laya['events']['Event'],
      zyfr4 = laya['events']['EventDispatcher'],
      f_7av = laya['resource']['HTMLImage'],
      ghlz = laya['utils']['Handler'],
      $tgx = laya['display']['Input'],
      sbk96u = laya['net']['Loader'],
      kusb69 = laya['maths']['Matrix'],
      m7ao = laya['renders']['Render'],
      yhr = laya['utils']['RunDriver'],
      hgltxr = laya['media']['Sound'],
      rhvfz = laya['media']['SoundChannel'],
      s96k0 = laya['media']['SoundManager'],
      htxlr = laya['display']['Stage'],
      thrlz = laya['net']['URL'],
      th$xgl = laya['utils']['Utils'],
      m4a7c_ = function () {
    function b5d0k6() {}return opemca(b5d0k6, 'laya.wx.mini.MiniAdpter'), b5d0k6['getJson'] = function (htylr) {
      return JSON['parse'](htylr);
    }, b5d0k6['init'] = function (ocm7_, s9u3q) {
      ocm7_ === void 0x0 && (ocm7_ = ![]), s9u3q === void 0x0 && (s9u3q = ![]);if (b5d0k6['_inited']) return;b5d0k6['window'] = window;if (b5d0k6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;b5d0k6['_inited'] = !![], b5d0k6['isZiYu'] = s9u3q, b5d0k6['isPosMsgYu'] = ocm7_, b5d0k6['EnvConfig'] = {}, !b5d0k6['isZiYu'] && (hxrlg['setNativeFileDir']('/layaairGame'), hxrlg['existDir'](hxrlg['fileNativeDir'], ghlz['create'](b5d0k6, b5d0k6['onMkdirCallBack']))), b5d0k6['window']['focus'] = function () {}, d90['getUrlPath'] = function () {}, b5d0k6['window']['logtime'] = function (lgxi) {}, b5d0k6['window']['alertTimeLog'] = function (hylrzf) {}, b5d0k6['window']['resetShareInfo'] = function () {}, b5d0k6['window']['CanvasRenderingContext2D'] = function () {}, b5d0k6['window']['CanvasRenderingContext2D']['prototype'] = b5d0k6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], b5d0k6['window']['document']['body']['appendChild'] = function () {}, b5d0k6['EnvConfig']['pixelRatioInt'] = 0x0, yhr['getPixelRatio'] = b5d0k6['pixelRatio'], b5d0k6['_preCreateElement'] = co7['createElement'], co7['createElement'] = b5d0k6['createElement'], yhr['createShaderCondition'] = b5d0k6['createShaderCondition'], th$xgl['parseXMLFromString'] = b5d0k6['parseXMLFromString'], $tgx['_createInputElement'] = fhly['_createInputElement'], b5d0k6['EnvConfig']['load'] = sbk96u['prototype']['load'], sbk96u['prototype']['load'] = w0b8d['prototype']['load'], b5d0k6['isZiYu'] && ocm7_ && wx['onMessage'](function (l$xgit) {
        l$xgit['isLoad'] && (hxrlg['ziyuFileData'][l$xgit['url']] = l$xgit['data']);
      });
    }, b5d0k6['onMkdirCallBack'] = function (mcepao, x$qj) {
      if (!mcepao) hxrlg['filesListObj'] = JSON['parse'](x$qj['data']);
    }, b5d0k6['pixelRatio'] = function () {
      if (!b5d0k6['EnvConfig']['pixelRatioInt']) try {
        var s9bk60 = wx['getSystemInfoSync']();return b5d0k6['EnvConfig']['pixelRatioInt'] = s9bk60['pixelRatio'], s9bk60 = s9bk60, s9bk60['pixelRatio'];
      } catch (gixt$) {}return b5d0k6['EnvConfig']['pixelRatioInt'];
    }, b5d0k6['createElement'] = function (itxj$) {
      if (itxj$ == 'canvas') {
        var q9su3;return b5d0k6['idx'] == 0x1 ? b5d0k6['isZiYu'] ? (q9su3 = sharedCanvas, q9su3['style'] = {}) : q9su3 = window['canvas'] : q9su3 = window['wx']['createCanvas'](), b5d0k6['idx']++, q9su3;
      } else {
        if (itxj$ == 'textarea' || itxj$ == 'input') return b5d0k6['onCreateInput'](itxj$);else {
          if (itxj$ == 'div') {
            var itglx = b5d0k6['_preCreateElement'](itxj$);return itglx['contains'] = function (l$igx) {
              return null;
            }, itglx['removeChild'] = function (s0k6b) {}, itglx;
          } else return b5d0k6['_preCreateElement'](itxj$);
        }
      }
    }, b5d0k6['onCreateInput'] = function (b5d8w) {
      var maepco = b5d0k6['_preCreateElement'](b5d8w);return maepco['focus'] = fhly['wxinputFocus'], maepco['blur'] = fhly['wxinputblur'], maepco['style'] = {}, maepco['value'] = 0x0, maepco['parentElement'] = {}, maepco['placeholder'] = {}, maepco['type'] = {}, maepco['setColor'] = function (fyr4v) {}, maepco['setType'] = function ($iq3xj) {}, maepco['setFontFace'] = function (m7_coa) {}, maepco['addEventListener'] = function (fhlrzy) {}, maepco['contains'] = function (xti$gj) {
        return null;
      }, maepco['removeChild'] = function (hzltgr) {}, maepco;
    }, b5d0k6['createShaderCondition'] = function (f4vzy) {
      var $igt = this,
          w80d2 = function () {
        var d60k5b = f4vzy;return $igt[f4vzy['replace']('this.', '')];
      };return w80d2;
    }, b5d0k6['EnvConfig'] = null, b5d0k6['window'] = null, b5d0k6['_preCreateElement'] = null, b5d0k6['_inited'] = ![], b5d0k6['wxRequest'] = null, b5d0k6['systemInfo'] = null, b5d0k6['version'] = '0.0.1', b5d0k6['isZiYu'] = ![], b5d0k6['isPosMsgYu'] = ![], b5d0k6['parseXMLFromString'] = function (tyhl) {
      var _vy7f4, quj3i;tyhl = tyhl['replace'](/>\s+</g, '><');try {
        _vy7f4 = new window['Parser']['DOMParser']()['parseFromString'](tyhl, 'text/xml');
      } catch (xthl$) {
        throw '需要引入xml解析库文件';
      }return _vy7f4;
    }, b5d0k6['idx'] = 0x1, b5d0k6;
  }(),
      cmpaoe = function () {
    function g3i() {}opemca(g3i, 'laya.wx.mini.MiniImage');var xi$j3g = g3i['prototype'];return xi$j3g['_loadImage'] = function (i3n$qj) {
      var ytlh = this,
          ztghrl = ![];i3n$qj['indexOf']('layaNativeDir/') == -0x1 && (ztghrl = !![], i3n$qj = thrlz['formatURL'](i3n$qj));if (!hxrlg['getFileInfo'](i3n$qj)) {
        if (i3n$qj['indexOf']('http://') != -0x1 || i3n$qj['indexOf']('https://') != -0x1) hxrlg['downImg'](i3n$qj, new ghlz(g3i, g3i['onDownImgCallBack'], [i3n$qj, ytlh]), i3n$qj);else g3i['onCreateImage'](i3n$qj, ytlh, !![]);
      } else g3i['onCreateImage'](i3n$qj, ytlh, !ztghrl);
    }, g3i['onDownImgCallBack'] = function (mcpae, ix3q$, oc_a7m) {
      if (!oc_a7m) g3i['onCreateImage'](mcpae, ix3q$);else ix3q$['onError'](null);
    }, g3i['onCreateImage'] = function (v4yf_, macoe, rv4fzy) {
      rv4fzy === void 0x0 && (rv4fzy = ![]);var $q3i;if (!rv4fzy) {
        var quns9k = hxrlg['getFileInfo'](v4yf_),
            co7m_a = quns9k['md5'];$q3i = hxrlg['getFileNativePath'](co7m_a);
      } else $q3i = v4yf_;if (macoe['imgCache'] == null) macoe['imgCache'] = {};var hgtrlz;function ytzhlr() {
        hgtrlz['onload'] = null, hgtrlz['onerror'] = null, delete macoe['imgCache'][v4yf_];
      };var vm_4 = function () {
        ytzhlr(), macoe['onLoaded'](hgtrlz);
      },
          t$lghx = function () {
        ytzhlr(), macoe['event']('error', 'Load image failed');
      };macoe['_type'] == 'nativeimage' ? (hgtrlz = new co7['window']['Image'](), hgtrlz['crossOrigin'] = '', hgtrlz['onload'] = vm_4, hgtrlz['onerror'] = t$lghx, hgtrlz['src'] = $q3i, macoe['imgCache'][v4yf_] = hgtrlz) : new f_7av['create']($q3i, { 'onload': vm_4, 'onerror': t$lghx, 'onCreate': function (uj3sqn) {
          hgtrlz = uj3sqn, macoe['imgCache'][v4yf_] = uj3sqn;
        } });
    }, g3i;
  }(),
      fhly = function () {
    function xhtrg() {}return opemca(xhtrg, 'laya.wx.mini.MiniInput'), xhtrg['_createInputElement'] = function () {
      $tgx['_initInput']($tgx['area'] = co7['createElement']('textarea')), $tgx['_initInput']($tgx['input'] = co7['createElement']('input')), $tgx['inputContainer'] = co7['createElement']('div'), $tgx['inputContainer']['style']['position'] = 'absolute', $tgx['inputContainer']['style']['zIndex'] = 0x186a0, co7['container']['appendChild']($tgx['inputContainer']), $tgx['inputContainer']['setPos'] = function (ao7_mc, _oca7) {
        $tgx['inputContainer']['style']['left'] = ao7_mc + 'px', $tgx['inputContainer']['style']['top'] = _oca7 + 'px';
      }, d90['stage']['on']('resize', null, xhtrg['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ytlrhz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), s96k0['_soundClass'] = gtxlrh, s96k0['_musicClass'] = gtxlrh;
    }, xhtrg['_onStageResize'] = function () {
      var tzrgl = d90['stage']['_canvasTransform']['identity']();tzrgl['scale'](co7['width'] / m7ao['canvas']['width'] / yhr['getPixelRatio'](), co7['height'] / m7ao['canvas']['height'] / yhr['getPixelRatio']());
    }, xhtrg['wxinputFocus'] = function (ryzfv4) {
      var f74v_ = $tgx['inputElement']['target'];if (f74v_ && !f74v_['editable']) return;m4a7c_['window']['wx']['offKeyboardConfirm'](), m4a7c_['window']['wx']['offKeyboardInput'](), m4a7c_['window']['wx']['showKeyboard']({ 'defaultValue': f74v_['text'], 'maxLength': f74v_['maxChars'], 'multiple': f74v_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mca4_) {}, 'fail': function (ix3jq) {} }), m4a7c_['window']['wx']['onKeyboardConfirm'](function (eapoc) {
        var vy7_4f = eapoc ? eapoc['value'] : '';f74v_['text'] = vy7_4f, f74v_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m4a7c_['window']['wx']['onKeyboardInput'](function (rhzyv) {
        var _v4a7 = rhzyv ? rhzyv['value'] : '';if (!f74v_['multiline']) {
          if (_v4a7['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }f74v_['text'] = _v4a7, f74v_['event']('input');
      });
    }, xhtrg['inputEnter'] = function () {
      $tgx['inputElement']['target']['focus'] = ![];
    }, xhtrg['wxinputblur'] = function () {
      xhtrg['hideKeyboard']();
    }, xhtrg['hideKeyboard'] = function () {
      m4a7c_['window']['wx']['offKeyboardConfirm'](), m4a7c_['window']['wx']['offKeyboardInput'](), m4a7c_['window']['wx']['hideKeyboard']({ 'success': function (vfa4_7) {
          console['log']('隐藏键盘');
        }, 'fail': function (tgxhlr) {
          console['log']('隐藏键盘出错:' + (tgxhlr ? tgxhlr['errMsg'] : ''));
        } });
    }, xhtrg;
  }(),
      w0b8d = function () {
    function _fyv4z() {}opemca(_fyv4z, 'laya.wx.mini.MiniLoader');var $j3xqi = _fyv4z['prototype'];return $j3xqi['load'] = function (qi3$n, $xqji3, zvrh, trxglh, trgzhl) {
      zvrh === void 0x0 && (zvrh = !![]), trgzhl === void 0x0 && (trgzhl = ![]);var fhrl = this;fhrl['_url'] = qi3$n;if (qi3$n['indexOf']('data:image') === 0x0) fhrl['_type'] = $xqji3 = 'image';else fhrl['_type'] = $xqji3 || ($xqji3 = fhrl['getTypeFromUrl'](qi3$n));fhrl['_cache'] = zvrh, fhrl['_data'] = null;var d1w28 = 'ascii';if (qi3$n['indexOf']('.fnt') != -0x1) d1w28 = 'utf8';else $xqji3 == 'arraybuffer' && (d1w28 = '');;var jnqi$3 = th$xgl['getFileExtension'](qi3$n);if (_fyv4z['_fileTypeArr']['indexOf'](jnqi$3) != -0x1) m4a7c_['EnvConfig']['load']['call'](this, qi3$n, $xqji3, zvrh, trxglh, trgzhl);else {
        if (!hxrlg['getFileInfo'](qi3$n)) {
          if (qi3$n['indexOf']('layaNativeDir/') != -0x1) {
            if (m4a7c_['isZiYu']) {
              var w5d80b = hxrlg['ziyuFileData'][qi3$n];fhrl['onLoaded'](w5d80b);return;
            } else {
              cosnole['log']('read read'), hxrlg['read'](qi3$n, d1w28, new ghlz(_fyv4z, _fyv4z['onReadNativeCallBack'], [d1w28, qi3$n, $xqji3, zvrh, trxglh, trgzhl, fhrl]));return;
            }
          }if (thrlz['rootPath'] == '') var yrtl = qi3$n;else yrtl = qi3$n['split'](thrlz['rootPath'])[0x0];qi3$n['indexOf']('http://') != -0x1 || qi3$n['indexOf']('https://') != -0x1 ? m4a7c_['EnvConfig']['load']['call'](fhrl, qi3$n, $xqji3, zvrh, trxglh, trgzhl) : hxrlg['readFile'](yrtl, d1w28, new ghlz(_fyv4z, _fyv4z['onReadNativeCallBack'], [d1w28, qi3$n, $xqji3, zvrh, trxglh, trgzhl, fhrl]), qi3$n);
        } else m4a7c_['EnvConfig']['load']['call'](this, qi3$n, $xqji3, zvrh, trxglh, trgzhl);
      }
    }, $j3xqi['resMgrLoad'] = function (b9dk6, ubs, b085dw, a4_f7, vma, qnu9s3, oc_7ma) {
      b085dw === void 0x0 && (b085dw = 0x0), a4_f7 === void 0x0 && (a4_f7 = ![]), vma === void 0x0 && (vma = ![]), qnu9s3 === void 0x0 && (qnu9s3 = 0x0), oc_7ma === void 0x0 && (oc_7ma = 0x3), b9dk6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b9dk6), m4a7c_['EnvConfig']['resMgrLoad'](b9dk6, (lzrhty, oc_am7, b6k) => {
        _fyv4z['prototype']['resMgrLoadCallBack'](lzrhty, oc_am7, b6k, ubs);
      }, b085dw, a4_f7, vma, qnu9s3, oc_7ma);
    }, $j3xqi['resMgrLoadCallBack'] = function (hryfzl, $igjx3, thlr, oc7_am) {
      console['log']('buff:::', hryfzl, thlr, hxrlg['fileNativeDir'] + '///' + hxrlg['fileListName']), oc7_am(hryfzl, $igjx3, thlr);
    }, $j3xqi['clearRes'] = function (jg$3ix, $qjix3) {
      $qjix3 === void 0x0 && ($qjix3 = ![]);var bsk96u = this;bsk96u['clearRes'](jg$3ix, $qjix3);var ixq = hxrlg['getFileInfo'](jg$3ix);if (ixq && (jg$3ix['indexOf']('http://') != -0x1 || jg$3ix['indexOf']('https://') != -0x1)) {
        var ca4m7_ = ixq['md5'],
            qunj3s = hxrlg['getFileNativePath'](ca4m7_);hxrlg['remove'](qunj3s);
      }
    }, _fyv4z['onReadNativeCallBack'] = function (xji3q$, q3sun, fy7v4_, hyfzrl, kb6u9s, pacmeo, jsqun3, cpamo7, fva74_) {
      hyfzrl === void 0x0 && (hyfzrl = !![]), pacmeo === void 0x0 && (pacmeo = ![]), cpamo7 === void 0x0 && (cpamo7 = 0x0);if (!cpamo7) {
        var vzrf;if (fy7v4_ == 'json' || fy7v4_ == 'atlas') vzrf = m4a7c_['getJson'](fva74_['data']);else fy7v4_ == 'xml' ? vzrf = th$xgl['parseXMLFromString'](fva74_['data']) : vzrf = fva74_['data'];jsqun3['onLoaded'](vzrf), !m4a7c_['isZiYu'] && m4a7c_['isPosMsgYu'] && fy7v4_ != 'arraybuffer' && wx['postMessage']({ 'url': q3sun, 'data': vzrf, 'isLoad': !![] });
      } else cpamo7 == 0x1 && m4a7c_['EnvConfig']['load']['call'](jsqun3, q3sun, fy7v4_, hyfzrl, kb6u9s, pacmeo);
    }, nq9u(_fyv4z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _fyv4z;
  }(),
      hxrlg = function (squn9) {
    function suk6n9() {
      suk6n9['__super']['call'](this);;
    }return opemca(suk6n9, 'laya.wx.mini.MiniFileMgr', squn9), suk6n9['isLoadFile'] = function (w5d182) {
      return suk6n9['_fileTypeArr']['indexOf'](w5d182) != -0x1 ? !![] : ![];
    }, suk6n9['getFileInfo'] = function (mv_a47) {
      var rztglh = mv_a47['split']('?')[0x0],
          rltyz = suk6n9['filesListObj'][rztglh];if (rltyz == null) return null;else return rltyz;return null;
    }, suk6n9['onFileUpdate'] = function (ca_4m, dw0b85) {
      var epcoam = ca_4m['split']('/'),
          jinq3u = epcoam[epcoam['length'] - 0x1],
          opcm = suk6n9['getFileInfo'](dw0b85);if (opcm == null) suk6n9['onSaveFile'](dw0b85, jinq3u);else {
        if (opcm['readyUrl'] != dw0b85) suk6n9['remove'](jinq3u, dw0b85);
      }
    }, suk6n9['exits'] = function (u3snqj, lrt) {
      var jn$3i = suk6n9['getFileNativePath'](u3snqj);suk6n9['fs']['getFileInfo']({ 'filePath': jn$3i, 'success': function (s9k6un) {
          lrt != null && lrt['runWith']([0x0, s9k6un]);
        }, 'fail': function (b6k5d0) {
          lrt != null && lrt['runWith']([0x1, b6k5d0]);
        } });
    }, suk6n9['read'] = function (ma4, z4ry, ma7cpo, rztly) {
      z4ry === void 0x0 && (z4ry = 'ascill'), rztly === void 0x0 && (rztly = '');var jix3$;rztly != '' ? jix3$ = suk6n9['getFileNativePath'](ma4) : jix3$ = ma4, suk6n9['fs']['readFile']({ 'filePath': jix3$, 'encoding': z4ry, 'success': function (fz4vy_) {
          ma7cpo != null && ma7cpo['runWith']([0x0, fz4vy_]);
        }, 'fail': function (iqj3$x) {
          if (iqj3$x && rztly != '') suk6n9['down'](rztly, z4ry, ma7cpo, rztly);else ma7cpo != null && ma7cpo['runWith']([0x1]);
        } });
    }, suk6n9['readNativeFile'] = function (j$gti, kbs) {
      suk6n9['fs']['readFile']({ 'filePath': j$gti, 'encoding': '', 'success': function (n39squ) {
          kbs != null && kbs['runWith']([0x0]);
        }, 'fail': function (epma) {
          kbs != null && kbs['runWith']([0x1]);
        } });
    }, suk6n9['down'] = function (yf4v, zyvf4_, zlyrf, v7a4_) {
      zyvf4_ === void 0x0 && (zyvf4_ = 'ascill'), v7a4_ === void 0x0 && (v7a4_ = '');var s3qun = suk6n9['getFileNativePath'](v7a4_),
          qksnu9 = suk6n9['wxdown']({ 'url': yf4v, 'filePath': s3qun, 'success': function (mopa) {
          if (mopa['statusCode'] === 0xc8) suk6n9['readFile'](mopa['filePath'], zyvf4_, zlyrf, v7a4_);
        }, 'fail': function (b09ks6) {
          zlyrf != null && zlyrf['runWith']([0x1, b09ks6]);
        } });qksnu9['onProgressUpdate'](function (k9sbu6) {
        zlyrf != null && zlyrf['runWith']([0x2, k9sbu6['progress']]);
      });
    }, suk6n9['readFile'] = function (db6850, uqskn, u96bks, u96sbk) {
      uqskn === void 0x0 && (uqskn = 'ascill'), u96sbk === void 0x0 && (u96sbk = ''), suk6n9['fs']['readFile']({ 'filePath': db6850, 'encoding': uqskn, 'success': function (qs9ku) {
          if (db6850['indexOf']('http://') != -0x1 || db6850['indexOf']('https://') != -0x1) suk6n9['onFileUpdate'](db6850, u96sbk);u96bks != null && u96bks['runWith']([0x0, qs9ku]);
        }, 'fail': function (lh$xgt) {
          if (lh$xgt) u96bks != null && u96bks['runWith']([0x1, lh$xgt]);
        } });
    }, suk6n9['downImg'] = function (b6, fyzrlh, n3u9q) {
      n3u9q === void 0x0 && (n3u9q = '');var b0d586 = suk6n9['wxdown']({ 'url': b6, 'success': function (xijg3$) {
          xijg3$['statusCode'] === 0xc8 && suk6n9['copyFile'](xijg3$['tempFilePath'], n3u9q, fyzrlh);
        }, 'fail': function (xi$) {
          fyzrlh != null && fyzrlh['runWith']([0x1, xi$]);
        } });
    }, suk6n9['copyFile'] = function (qk9uns, ltxh$, _4amv7) {
      var snu96k = qk9uns['split']('/'),
          jqi3un = snu96k[snu96k['length'] - 0x1],
          lzhfry = ltxh$['split']('?')[0x0],
          $ijgtx = suk6n9['getFileInfo'](ltxh$),
          $tgxhl = suk6n9['getFileNativePath'](jqi3un);suk6n9['fs']['copyFile']({ 'srcPath': qk9uns, 'destPath': $tgxhl, 'success': function (o7_ma) {
          if (!$ijgtx) suk6n9['onSaveFile'](ltxh$, jqi3un), _4amv7 != null && _4amv7['runWith']([0x0]);else {
            if ($ijgtx['readyUrl'] != ltxh$) suk6n9['remove'](jqi3un, ltxh$, _4amv7);
          }
        }, 'fail': function (yrtzl) {
          _4amv7 != null && _4amv7['runWith']([0x1, yrtzl]);
        } });
    }, suk6n9['getFileNativePath'] = function (g$txlh) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g$txlh;
    }, suk6n9['remove'] = function (zyhvrf, glrtx, _zfvy) {
      glrtx === void 0x0 && (glrtx = '');var $qji = suk6n9['getFileInfo'](glrtx),
          w2518d = suk6n9['getFileNativePath']($qji['md5']);d90['loader']['clearRes']($qji['readyUrl']), suk6n9['fs']['unlink']({ 'filePath': w2518d, 'success': function (d8w12) {
          if (glrtx != '') suk6n9['onSaveFile'](glrtx, zyhvrf);_zfvy != null && _zfvy['runWith']([0x0]);
        }, 'fail': function (yzvf4r) {} });
    }, suk6n9['onSaveFile'] = function (u9nks, l$ghtx) {
      var frly = u9nks['split']('?')[0x0];suk6n9['filesListObj'][frly] = { 'md5': l$ghtx, 'readyUrl': u9nks }, suk6n9['fs']['writeFile']({ 'filePath': suk6n9['fileNativeDir'] + '/' + suk6n9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](suk6n9['filesListObj']), 'success': function ($xj) {
          console['log']('写入测试测试成功：', $xj);
        }, 'fail': function (zghtl) {
          console['log']('写入测试测试失败：', zghtl);
        } });
    }, suk6n9['existDir'] = function (tjgxi, kbs06) {
      suk6n9['fs']['mkdir']({ 'dirPath': tjgxi, 'success': function (a7pc) {
          kbs06 != null && kbs06['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (opm7c) {
          if (opm7c['errMsg']['indexOf']('file already exists') != -0x1) suk6n9['readSync'](suk6n9['fileListName'], 'utf8', kbs06);else kbs06 != null && kbs06['runWith']([0x1, opm7c]);
        } });
    }, suk6n9['readSync'] = function (iltgx$, l$tghx, dk50b, zflhyr) {
      l$tghx === void 0x0 && (l$tghx = 'ascill'), zflhyr === void 0x0 && (zflhyr = '');var vyzhf = suk6n9['getFileNativePath'](iltgx$),
          ijg3$x;try {
        ijg3$x = suk6n9['fs']['readFileSync'](vyzhf), dk50b != null && dk50b['runWith']([0x0, { 'data': ijg3$x }]);
      } catch (rztylh) {
        dk50b != null && dk50b['runWith']([0x1]);
      }
    }, suk6n9['readCache'] = function () {}, suk6n9['writeCache'] = function (gtxlr) {
      var d685b0 = readyUrl['split']('?')[0x0];suk6n9['filesListObj'][d685b0] = { 'md5': md5Name, 'readyUrl': readyUrl }, suk6n9['fs']['writeFile']({ 'filePath': suk6n9['fileNativeDir'] + '/' + suk6n9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](suk6n9['filesListObj']), 'success': function (xglti) {}, 'fail': function (glxtr) {} });
    }, suk6n9['setNativeFileDir'] = function (mv47_) {
      suk6n9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mv47_;
    }, suk6n9['filesListObj'] = {}, suk6n9['fileNativeDir'] = null, suk6n9['fileListName'] = 'layaairfiles.txt', suk6n9['ziyuFileData'] = {}, nq9u(suk6n9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), suk6n9;
  }(zyfr4),
      gtxlrh = function (dbk09) {
    function xglr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xglr['__super']['call'](this), this['_sound'] = xglr['_createSound']();
    }opemca(xglr, 'laya.wx.mini.MiniSound', dbk09);var qn3su = xglr['prototype'];return qn3su['load'] = function (ma7o_c) {
      var n3jiu = this;ma7o_c = thrlz['formatURL'](ma7o_c), this['url'] = ma7o_c;if (xglr['_audioCache'][ma7o_c]) {
        this['event']('complete');return;
      }function g$3xji() {
        if (xglr['_null'] != undefined) n3jiu['_sound']['onCanplay'](xglr['_null']), n3jiu['_sound']['onError'](xglr['_null']);else try {
          n3jiu['_sound']['onCanplay'](null), n3jiu['_sound']['onError'](null), xglr['_null'] = null;
        } catch ($igtlx) {
          console['warn']('[wxmini] _clearSound:' + $igtlx), n3jiu['_sound']['onCanplay'](v4y_f), n3jiu['_sound']['onError'](v4y_f), xglr['_null'] = v4y_f;
        }
      }function cm7pao() {
        g$3xji(), j$qin3['loaded'] = !![], j$qin3['event']('complete'), xglr['_audioCache'][j$qin3['url']] = j$qin3;
      }function rythl(ecmpoa) {
        console['error']('errCode=' + ecmpoa['errCode'] + '  errMsg=' + ecmpoa['errMsg']), g$3xji(), j$qin3['event']('error');
      }function v4y_f() {}this['_sound']['onCanplay'](cm7pao), this['_sound']['onError'](rythl), this['_sound']['src'] = ma7o_c;var j$qin3 = this;
    }, qn3su['play'] = function (ryzh, bu96k) {
      ryzh === void 0x0 && (ryzh = 0x0), bu96k === void 0x0 && (bu96k = 0x0);var u9kqns;if (this['url'] == s96k0['_tMusic']) {
        if (!xglr['_musicAudio']) xglr['_musicAudio'] = xglr['_createSound']();u9kqns = xglr['_musicAudio'];
      } else u9kqns = xglr['_createSound']();u9kqns['src'] = this['url'];var $tilgx = new n6sk(u9kqns);return $tilgx['url'] = this['url'], $tilgx['loops'] = bu96k, $tilgx['startTime'] = ryzh, $tilgx['play'](), s96k0['addChannel']($tilgx), $tilgx;
    }, qn3su['dispose'] = function () {
      var buks = xglr['_audioCache'][this['url']];buks && (buks['src'] = '', delete xglr['_audioCache'][this['url']]);
    }, fyrvh(0x0, qn3su, 'duration', function () {
      return this['_sound']['duration'];
    }), xglr['_createSound'] = function () {
      return xglr['_id']++, m4a7c_['window']['wx']['createInnerAudioContext']();
    }, xglr['_musicAudio'] = null, xglr['_id'] = 0x0, xglr['_audioCache'] = {}, xglr['_null'] = undefined, xglr;
  }(zyfr4),
      n6sk = function (s9bu6k) {
    function mcaoep(v4m_7) {
      this['_audio'] = null, this['_onEnd'] = null, mcaoep['__super']['call'](this), this['_audio'] = v4m_7, this['_onEnd'] = th$xgl['bind'](this['__onEnd'], this), v4m_7['onEnded'](this['_onEnd']);
    }opemca(mcaoep, 'laya.wx.mini.MiniSoundChannel', s9bu6k);var d8bw0 = mcaoep['prototype'];return d8bw0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (d90['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, d8bw0['__onNull'] = function () {}, d8bw0['play'] = function () {
      this['isStopped'] = ![], s96k0['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, d8bw0['stop'] = function () {
      this['isStopped'] = !![], s96k0['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mcaoep['_null'] != undefined) this['_audio']['onEnded'](mcaoep['_null']);else try {
        this['_audio']['onEnded'](null), mcaoep['_null'] = null;
      } catch (copma7) {
        console['warn']('[wxmini] stop:' + copma7), this['_audio']['onEnded'](th$xgl['bind'](this['__onNull'], this)), mcaoep['_null'] = th$xgl['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, d8bw0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, d8bw0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], s96k0['addChannel'](this), this['_audio']['play']();
    }, fyrvh(0x0, d8bw0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), fyrvh(0x0, d8bw0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), fyrvh(0x0, d8bw0, 'volume', function () {
      return 0x1;
    }, function (nqus3j) {}), mcaoep['_null'] = undefined, mcaoep;
  }(rhvfz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kbd096 in Laya) {
    var rthzg = Laya[kbd096];rthzg && rthzg['__isclass'] && (exports[kbd096] = rthzg);
  }
});