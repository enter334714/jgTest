var c = wx.$a;
(function (window, document, xnfvsj) {
  var uo4_ew = xnfvsj['un'],
      wu_g2 = xnfvsj['uns'],
      uge_w = xnfvsj['static'],
      c40oyb = xnfvsj['class'],
      o40_ew = xnfvsj['getset'],
      _2weug = xnfvsj['__newvec'],
      wg2_ue = laya['utils']['Browser'],
      $byo0c = laya['events']['Event'],
      $boc0 = laya['events']['EventDispatcher'],
      fwgu21 = laya['resource']['HTMLImage'],
      kzdh6 = laya['utils']['Handler'],
      g2fxu1 = laya['display']['Input'],
      cb4yo = laya['net']['Loader'],
      tqd85 = laya['maths']['Matrix'],
      ugxf21 = laya['renders']['Render'],
      _0e = laya['utils']['RunDriver'],
      hnvj = laya['media']['Sound'],
      gsfx2 = laya['media']['SoundChannel'],
      td = laya['media']['SoundManager'],
      irp537 = laya['display']['Stage'],
      b$m9l = laya['net']['URL'],
      dhkv6z = laya['utils']['Utils'],
      xnj1s = function () {
    function $bc0oy() {}return c40oyb($bc0oy, 'laya.wx.mini.MiniAdpter'), $bc0oy['getJson'] = function (dq58t) {
      return JSON['parse'](dq58t);
    }, $bc0oy['init'] = function (w1fg2u, nj1xfs) {
      w1fg2u === void 0x0 && (w1fg2u = ![]), nj1xfs === void 0x0 && (nj1xfs = ![]);if ($bc0oy['_inited']) return;$bc0oy['window'] = window;if ($bc0oy['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$bc0oy['_inited'] = !![], $bc0oy['isZiYu'] = nj1xfs, $bc0oy['isPosMsgYu'] = w1fg2u, $bc0oy['EnvConfig'] = {}, !$bc0oy['isZiYu'] && (t8d6kq['setNativeFileDir']('/layaairGame'), t8d6kq['existDir'](t8d6kq['fileNativeDir'], kzdh6['create']($bc0oy, $bc0oy['onMkdirCallBack']))), $bc0oy['window']['focus'] = function () {}, xnfvsj['getUrlPath'] = function () {}, $bc0oy['window']['logtime'] = function (xfsg) {}, $bc0oy['window']['alertTimeLog'] = function (y$o0c) {}, $bc0oy['window']['resetShareInfo'] = function () {}, $bc0oy['window']['CanvasRenderingContext2D'] = function () {}, $bc0oy['window']['CanvasRenderingContext2D']['prototype'] = $bc0oy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $bc0oy['window']['document']['body']['appendChild'] = function () {}, $bc0oy['EnvConfig']['pixelRatioInt'] = 0x0, _0e['getPixelRatio'] = $bc0oy['pixelRatio'], $bc0oy['_preCreateElement'] = wg2_ue['createElement'], wg2_ue['createElement'] = $bc0oy['createElement'], _0e['createShaderCondition'] = $bc0oy['createShaderCondition'], dhkv6z['parseXMLFromString'] = $bc0oy['parseXMLFromString'], g2fxu1['_createInputElement'] = xnjshv['_createInputElement'], $bc0oy['EnvConfig']['load'] = cb4yo['prototype']['load'], cb4yo['prototype']['load'] = lby$c0['prototype']['load'], $bc0oy['isZiYu'] && w1fg2u && wx['onMessage'](function (u_2) {
        u_2['isLoad'] && (t8d6kq['ziyuFileData'][u_2['url']] = u_2['data']);
      });
    }, $bc0oy['onMkdirCallBack'] = function (am$c, mbcl$) {
      if (!am$c) t8d6kq['filesListObj'] = JSON['parse'](mbcl$['data']);
    }, $bc0oy['pixelRatio'] = function () {
      if (!$bc0oy['EnvConfig']['pixelRatioInt']) try {
        var e0w_o = wx['getSystemInfoSync']();return $bc0oy['EnvConfig']['pixelRatioInt'] = e0w_o['pixelRatio'], e0w_o = e0w_o, e0w_o['pixelRatio'];
      } catch (z6hd) {}return $bc0oy['EnvConfig']['pixelRatioInt'];
    }, $bc0oy['createElement'] = function (p5ir37) {
      if (p5ir37 == 'canvas') {
        var njhvxs;return $bc0oy['idx'] == 0x1 ? $bc0oy['isZiYu'] ? (njhvxs = sharedCanvas, njhvxs['style'] = {}) : njhvxs = window['canvas'] : njhvxs = window['wx']['createCanvas'](), $bc0oy['idx']++, njhvxs;
      } else {
        if (p5ir37 == 'textarea' || p5ir37 == 'input') return $bc0oy['onCreateInput'](p5ir37);else {
          if (p5ir37 == 'div') {
            var ewu_o4 = $bc0oy['_preCreateElement'](p5ir37);return ewu_o4['contains'] = function (_w0eo4) {
              return null;
            }, ewu_o4['removeChild'] = function ($bmcal) {}, ewu_o4;
          } else return $bc0oy['_preCreateElement'](p5ir37);
        }
      }
    }, $bc0oy['onCreateInput'] = function (e_uow) {
      var boc = $bc0oy['_preCreateElement'](e_uow);return boc['focus'] = xnjshv['wxinputFocus'], boc['blur'] = xnjshv['wxinputblur'], boc['style'] = {}, boc['value'] = 0x0, boc['parentElement'] = {}, boc['placeholder'] = {}, boc['type'] = {}, boc['setColor'] = function (l$9) {}, boc['setType'] = function (l$bam) {}, boc['setFontFace'] = function (t785rq) {}, boc['addEventListener'] = function (z6khvn) {}, boc['contains'] = function (xufg1) {
        return null;
      }, boc['removeChild'] = function (tr8q75) {}, boc;
    }, $bc0oy['createShaderCondition'] = function (_woe4u) {
      var q68zdk = this,
          nvsjh = function () {
        var xnf = _woe4u;return q68zdk[_woe4u['replace']('this.', '')];
      };return nvsjh;
    }, $bc0oy['EnvConfig'] = null, $bc0oy['window'] = null, $bc0oy['_preCreateElement'] = null, $bc0oy['_inited'] = ![], $bc0oy['wxRequest'] = null, $bc0oy['systemInfo'] = null, $bc0oy['version'] = '0.0.1', $bc0oy['isZiYu'] = ![], $bc0oy['isPosMsgYu'] = ![], $bc0oy['parseXMLFromString'] = function (hvzd) {
      var vjhsnx, z6hvkn;hvzd = hvzd['replace'](/>\s+</g, '><');try {
        vjhsnx = new window['Parser']['DOMParser']()['parseFromString'](hvzd, 'text/xml');
      } catch (r8t735) {
        throw '需要引入xml解析库文件';
      }return vjhsnx;
    }, $bc0oy['idx'] = 0x1, $bc0oy;
  }(),
      o_ew = function () {
    function b$caml() {}c40oyb(b$caml, 'laya.wx.mini.MiniImage');var woe4u_ = b$caml['prototype'];return woe4u_['_loadImage'] = function (c$lma) {
      var k6zhvd = this,
          s1fx2g = ![];c$lma['indexOf']('layaNativeDir/') == -0x1 && (s1fx2g = !![], c$lma = b$m9l['formatURL'](c$lma));if (!t8d6kq['getFileInfo'](c$lma)) {
        if (c$lma['indexOf']('http://') != -0x1 || c$lma['indexOf']('https://') != -0x1) t8d6kq['downImg'](c$lma, new kzdh6(b$caml, b$caml['onDownImgCallBack'], [c$lma, k6zhvd]), c$lma);else b$caml['onCreateImage'](c$lma, k6zhvd, !![]);
      } else b$caml['onCreateImage'](c$lma, k6zhvd, !s1fx2g);
    }, b$caml['onDownImgCallBack'] = function (t35p7r, bc0y$o, l9mba) {
      if (!l9mba) b$caml['onCreateImage'](t35p7r, bc0y$o);else bc0y$o['onError'](null);
    }, b$caml['onCreateImage'] = function (_ug2w, r785t3, qzk6hd) {
      qzk6hd === void 0x0 && (qzk6hd = ![]);var uwf12g;if (!qzk6hd) {
        var snjx1f = t8d6kq['getFileInfo'](_ug2w),
            wug_ = snjx1f['md5'];uwf12g = t8d6kq['getFileNativePath'](wug_);
      } else uwf12g = _ug2w;if (r785t3['imgCache'] == null) r785t3['imgCache'] = {};var l$b0yc;function $mablc() {
        l$b0yc['onload'] = null, l$b0yc['onerror'] = null, delete r785t3['imgCache'][_ug2w];
      };var zkqd8 = function () {
        $mablc(), r785t3['onLoaded'](l$b0yc);
      },
          weo = function () {
        $mablc(), r785t3['event']('error', 'Load image failed');
      };r785t3['_type'] == 'nativeimage' ? (l$b0yc = new wg2_ue['window']['Image'](), l$b0yc['crossOrigin'] = '', l$b0yc['onload'] = zkqd8, l$b0yc['onerror'] = weo, l$b0yc['src'] = uwf12g, r785t3['imgCache'][_ug2w] = l$b0yc) : new fwgu21['create'](uwf12g, { 'onload': zkqd8, 'onerror': weo, 'onCreate': function (o4eu_) {
          l$b0yc = o4eu_, r785t3['imgCache'][_ug2w] = o4eu_;
        } });
    }, b$caml;
  }(),
      xnjshv = function () {
    function ewo04() {}return c40oyb(ewo04, 'laya.wx.mini.MiniInput'), ewo04['_createInputElement'] = function () {
      g2fxu1['_initInput'](g2fxu1['area'] = wg2_ue['createElement']('textarea')), g2fxu1['_initInput'](g2fxu1['input'] = wg2_ue['createElement']('input')), g2fxu1['inputContainer'] = wg2_ue['createElement']('div'), g2fxu1['inputContainer']['style']['position'] = 'absolute', g2fxu1['inputContainer']['style']['zIndex'] = 0x186a0, wg2_ue['container']['appendChild'](g2fxu1['inputContainer']), g2fxu1['inputContainer']['setPos'] = function (rtq85, w1gf2u) {
        g2fxu1['inputContainer']['style']['left'] = rtq85 + 'px', g2fxu1['inputContainer']['style']['top'] = w1gf2u + 'px';
      }, xnfvsj['stage']['on']('resize', null, ewo04['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vzjsn) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), td['_soundClass'] = dq6t8k, td['_musicClass'] = dq6t8k, window['_videoClass'] = jsx1;
    }, ewo04['_onStageResize'] = function () {
      var zkdq6h = xnfvsj['stage']['_canvasTransform']['identity']();zkdq6h['scale'](wg2_ue['width'] / ugxf21['canvas']['width'] / _0e['getPixelRatio'](), wg2_ue['height'] / ugxf21['canvas']['height'] / _0e['getPixelRatio']());
    }, ewo04['wxinputFocus'] = function (d6qkt) {
      var kd6tq = g2fxu1['inputElement']['target'];if (kd6tq && !kd6tq['editable']) return;xnj1s['window']['wx']['offKeyboardConfirm'](), xnj1s['window']['wx']['offKeyboardInput'](), xnj1s['window']['wx']['showKeyboard']({ 'defaultValue': kd6tq['text'], 'maxLength': kd6tq['maxChars'], 'multiple': kd6tq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (fu2g1w) {}, 'fail': function (zqh) {} }), xnj1s['window']['wx']['onKeyboardConfirm'](function (nvzsjh) {
        var d6z8qk = nvzsjh ? nvzsjh['value'] : '';kd6tq['text'] = d6z8qk, kd6tq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xnj1s['window']['wx']['onKeyboardInput'](function (nfjvsx) {
        var zhjvsn = nfjvsx ? nfjvsx['value'] : '';if (!kd6tq['multiline']) {
          if (zhjvsn['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kd6tq['text'] = zhjvsn, kd6tq['event']('input');
      });
    }, ewo04['inputEnter'] = function () {
      g2fxu1['inputElement']['target']['focus'] = ![];
    }, ewo04['wxinputblur'] = function () {
      ewo04['hideKeyboard']();
    }, ewo04['hideKeyboard'] = function () {
      xnj1s['window']['wx']['offKeyboardConfirm'](), xnj1s['window']['wx']['offKeyboardInput'](), xnj1s['window']['wx']['hideKeyboard']({ 'success': function (ug2ew) {
          console['log']('隐藏键盘');
        }, 'fail': function (c$0o) {
          console['log']('隐藏键盘出错:' + (c$0o ? c$0o['errMsg'] : ''));
        } });
    }, ewo04;
  }(),
      lby$c0 = function () {
    function f1j2xs() {}c40oyb(f1j2xs, 'laya.wx.mini.MiniLoader');var dr68t = f1j2xs['prototype'];return dr68t['load'] = function (p37i5, cb04o, dq6zkh, e4_gw, hjsnv) {
      dq6zkh === void 0x0 && (dq6zkh = !![]), hjsnv === void 0x0 && (hjsnv = ![]);var qd68kt = this;qd68kt['_url'] = p37i5;if (p37i5['indexOf']('data:image') === 0x0) qd68kt['_type'] = cb04o = 'image';else qd68kt['_type'] = cb04o || (cb04o = qd68kt['getTypeFromUrl'](p37i5));qd68kt['_cache'] = dq6zkh, qd68kt['_data'] = null;var o4uw = 'ascii';if (p37i5['indexOf']('.fnt') != -0x1) o4uw = 'utf8';else cb04o == 'arraybuffer' && (o4uw = '');;var lcb$my = dhkv6z['getFileExtension'](p37i5);if (f1j2xs['_fileTypeArr']['indexOf'](lcb$my) != -0x1) xnj1s['EnvConfig']['load']['call'](this, p37i5, cb04o, dq6zkh, e4_gw, hjsnv);else {
        if (!t8d6kq['getFileInfo'](p37i5)) {
          if (p37i5['indexOf']('layaNativeDir/') != -0x1) {
            if (xnj1s['isZiYu']) {
              var pir57 = t8d6kq['ziyuFileData'][p37i5];qd68kt['onLoaded'](pir57);return;
            } else {
              cosnole['log']('read read'), t8d6kq['read'](p37i5, o4uw, new kzdh6(f1j2xs, f1j2xs['onReadNativeCallBack'], [o4uw, p37i5, cb04o, dq6zkh, e4_gw, hjsnv, qd68kt]));return;
            }
          }if (b$m9l['rootPath'] == '') var _04we = p37i5;else _04we = p37i5['split'](b$m9l['rootPath'])[0x0];p37i5['indexOf']('http://') != -0x1 || p37i5['indexOf']('https://') != -0x1 ? xnj1s['EnvConfig']['load']['call'](qd68kt, p37i5, cb04o, dq6zkh, e4_gw, hjsnv) : t8d6kq['readFile'](_04we, o4uw, new kzdh6(f1j2xs, f1j2xs['onReadNativeCallBack'], [o4uw, p37i5, cb04o, dq6zkh, e4_gw, hjsnv, qd68kt]), p37i5);
        } else xnj1s['EnvConfig']['load']['call'](this, p37i5, cb04o, dq6zkh, e4_gw, hjsnv);
      }
    }, dr68t['resMgrLoad'] = function ($0byc, vhjz, eg_2, eg_4wu, eguw_, nx1s, boyc0) {
      eg_2 === void 0x0 && (eg_2 = 0x0), eg_4wu === void 0x0 && (eg_4wu = ![]), eguw_ === void 0x0 && (eguw_ = ![]), nx1s === void 0x0 && (nx1s = 0x0), boyc0 === void 0x0 && (boyc0 = 0x3), $0byc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $0byc), xnj1s['EnvConfig']['resMgrLoad']($0byc, (lcmb$, k6tdq8, zhdkv) => {
        f1j2xs['prototype']['resMgrLoadCallBack'](lcmb$, k6tdq8, zhdkv, vhjz);
      }, eg_2, eg_4wu, eguw_, nx1s, boyc0);
    }, dr68t['resMgrLoadCallBack'] = function (q75rt8, almbc$, snfjxv, o$c0) {
      console['log']('buff:::', q75rt8, snfjxv, t8d6kq['fileNativeDir'] + '///' + t8d6kq['fileListName']), o$c0(q75rt8, almbc$, snfjxv);
    }, dr68t['clearRes'] = function (vhnkz6, m$clba) {
      m$clba === void 0x0 && (m$clba = ![]);var nkvzjh = this;nkvzjh['clearRes'](vhnkz6, m$clba);var tr583 = t8d6kq['getFileInfo'](vhnkz6);if (tr583 && (vhnkz6['indexOf']('http://') != -0x1 || vhnkz6['indexOf']('https://') != -0x1)) {
        var _eo04 = tr583['md5'],
            vzhkd6 = t8d6kq['getFileNativePath'](_eo04);t8d6kq['remove'](vzhkd6);
      }
    }, f1j2xs['onReadNativeCallBack'] = function (mbla9, zhvnjk, ouw_, sfx12, zjkvhn, x1g2, ab$ml9, c_0oy4, t835r) {
      sfx12 === void 0x0 && (sfx12 = !![]), x1g2 === void 0x0 && (x1g2 = ![]), c_0oy4 === void 0x0 && (c_0oy4 = 0x0);if (!c_0oy4) {
        var o0c_4y;if (ouw_ == 'json' || ouw_ == 'atlas') o0c_4y = xnj1s['getJson'](t835r['data']);else ouw_ == 'xml' ? o0c_4y = dhkv6z['parseXMLFromString'](t835r['data']) : o0c_4y = t835r['data'];ab$ml9['onLoaded'](o0c_4y), !xnj1s['isZiYu'] && xnj1s['isPosMsgYu'] && ouw_ != 'arraybuffer' && wx['postMessage']({ 'url': zhvnjk, 'data': o0c_4y, 'isLoad': !![] });
      } else c_0oy4 == 0x1 && xnj1s['EnvConfig']['load']['call'](ab$ml9, zhvnjk, ouw_, sfx12, zjkvhn, x1g2);
    }, uge_w(f1j2xs, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f1j2xs;
  }(),
      t8d6kq = function (hvnjzs) {
    function nkhv() {
      nkhv['__super']['call'](this);;
    }return c40oyb(nkhv, 'laya.wx.mini.MiniFileMgr', hvnjzs), nkhv['isLoadFile'] = function (u4gw_e) {
      return nkhv['_fileTypeArr']['indexOf'](u4gw_e) != -0x1 ? !![] : ![];
    }, nkhv['getFileInfo'] = function (_2wug) {
      var ueg4 = _2wug['split']('?')[0x0],
          xs21jf = nkhv['filesListObj'][ueg4];if (xs21jf == null) return null;else return xs21jf;return null;
    }, nkhv['onFileUpdate'] = function (pt3r57, e_0o4y) {
      var rp7t = pt3r57['split']('/'),
          nhvxs = rp7t[rp7t['length'] - 0x1],
          h6kz = nkhv['getFileInfo'](e_0o4y);if (h6kz == null) nkhv['onSaveFile'](e_0o4y, nhvxs);else {
        if (h6kz['readyUrl'] != e_0o4y) nkhv['remove'](nhvxs, e_0o4y);
      }
    }, nkhv['exits'] = function (uxfg, w2g1uf) {
      var y4c_0 = nkhv['getFileNativePath'](uxfg);nkhv['fs']['getFileInfo']({ 'filePath': y4c_0, 'success': function (k6qzd8) {
          w2g1uf != null && w2g1uf['runWith']([0x0, k6qzd8]);
        }, 'fail': function (e40w_o) {
          w2g1uf != null && w2g1uf['runWith']([0x1, e40w_o]);
        } });
    }, nkhv['read'] = function (_we04o, t7p3, s1fnj, zk86) {
      t7p3 === void 0x0 && (t7p3 = 'ascill'), zk86 === void 0x0 && (zk86 = '');var shvnj;zk86 != '' ? shvnj = nkhv['getFileNativePath'](_we04o) : shvnj = _we04o, nkhv['fs']['readFile']({ 'filePath': shvnj, 'encoding': t7p3, 'success': function (jhszv) {
          s1fnj != null && s1fnj['runWith']([0x0, jhszv]);
        }, 'fail': function (t5r7q8) {
          if (t5r7q8 && zk86 != '') nkhv['down'](zk86, t7p3, s1fnj, zk86);else s1fnj != null && s1fnj['runWith']([0x1]);
        } });
    }, nkhv['readNativeFile'] = function (_4weo0, kznhv) {
      nkhv['fs']['readFile']({ 'filePath': _4weo0, 'encoding': '', 'success': function (bcyo04) {
          kznhv != null && kznhv['runWith']([0x0]);
        }, 'fail': function (kzqdh) {
          kznhv != null && kznhv['runWith']([0x1]);
        } });
    }, nkhv['down'] = function ($almcb, zhdq, _4eu, oy4c) {
      zhdq === void 0x0 && (zhdq = 'ascill'), oy4c === void 0x0 && (oy4c = '');var t75q = nkhv['getFileNativePath'](oy4c),
          _ouwe = nkhv['wxdown']({ 'url': $almcb, 'filePath': t75q, 'success': function (vzjk) {
          if (vzjk['statusCode'] === 0xc8) nkhv['readFile'](vzjk['filePath'], zhdq, _4eu, oy4c);
        }, 'fail': function (w_2gue) {
          _4eu != null && _4eu['runWith']([0x1, w_2gue]);
        } });_ouwe['onProgressUpdate'](function (tr5387) {
        _4eu != null && _4eu['runWith']([0x2, tr5387['progress']]);
      });
    }, nkhv['readFile'] = function (kn6h, hqdz, tdk86q, e_y04o) {
      hqdz === void 0x0 && (hqdz = 'ascill'), e_y04o === void 0x0 && (e_y04o = ''), nkhv['fs']['readFile']({ 'filePath': kn6h, 'encoding': hqdz, 'success': function (mlyb$c) {
          if (kn6h['indexOf']('http://') != -0x1 || kn6h['indexOf']('https://') != -0x1) nkhv['onFileUpdate'](kn6h, e_y04o);tdk86q != null && tdk86q['runWith']([0x0, mlyb$c]);
        }, 'fail': function (vjxsf) {
          if (vjxsf) tdk86q != null && tdk86q['runWith']([0x1, vjxsf]);
        } });
    }, nkhv['downImg'] = function (vkjhzn, fg1x, jnsxv) {
      jnsxv === void 0x0 && (jnsxv = '');var lm$ba = nkhv['wxdown']({ 'url': vkjhzn, 'success': function (bac$l) {
          bac$l['statusCode'] === 0xc8 && nkhv['copyFile'](bac$l['tempFilePath'], jnsxv, fg1x);
        }, 'fail': function (we4ou) {
          fg1x != null && fg1x['runWith']([0x1, we4ou]);
        } });
    }, nkhv['copyFile'] = function (n6vkhz, dkq8t, rt837) {
      var b0o4 = n6vkhz['split']('/'),
          ri537p = b0o4[b0o4['length'] - 0x1],
          d6zhk = dkq8t['split']('?')[0x0],
          fsnxj = nkhv['getFileInfo'](dkq8t),
          $lab9 = nkhv['getFileNativePath'](ri537p);nkhv['fs']['copyFile']({ 'srcPath': n6vkhz, 'destPath': $lab9, 'success': function (r8qtd) {
          if (!fsnxj) nkhv['onSaveFile'](dkq8t, ri537p), rt837 != null && rt837['runWith']([0x0]);else {
            if (fsnxj['readyUrl'] != dkq8t) nkhv['remove'](ri537p, dkq8t, rt837);
          }
        }, 'fail': function (vfxsj) {
          rt837 != null && rt837['runWith']([0x1, vfxsj]);
        } });
    }, nkhv['getFileNativePath'] = function (p7rt5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p7rt5;
    }, nkhv['remove'] = function (c$lymb, $la, hvsjxn) {
      $la === void 0x0 && ($la = '');var z6nk = nkhv['getFileInfo']($la),
          ocb$0 = nkhv['getFileNativePath'](z6nk['md5']);xnfvsj['loader']['clearRes'](z6nk['readyUrl']), nkhv['fs']['unlink']({ 'filePath': ocb$0, 'success': function (ug_we4) {
          if ($la != '') nkhv['onSaveFile']($la, c$lymb);hvsjxn != null && hvsjxn['runWith']([0x0]);
        }, 'fail': function (nxjfvs) {} });
    }, nkhv['onSaveFile'] = function (jvxh, rt785q) {
      var jsxnfv = jvxh['split']('?')[0x0];nkhv['filesListObj'][jsxnfv] = { 'md5': rt785q, 'readyUrl': jvxh }, nkhv['fs']['writeFile']({ 'filePath': nkhv['fileNativeDir'] + '/' + nkhv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nkhv['filesListObj']), 'success': function (vxnsh) {
          console['log']('写入测试测试成功：', vxnsh);
        }, 'fail': function (lbmc) {
          console['log']('写入测试测试失败：', lbmc);
        } });
    }, nkhv['existDir'] = function (al9b$m, o4w_) {
      nkhv['fs']['mkdir']({ 'dirPath': al9b$m, 'success': function (ew2gu) {
          o4w_ != null && o4w_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ip7r53) {
          if (ip7r53['errMsg']['indexOf']('file already exists') != -0x1) nkhv['readSync'](nkhv['fileListName'], 'utf8', o4w_);else o4w_ != null && o4w_['runWith']([0x1, ip7r53]);
        } });
    }, nkhv['readSync'] = function (j12fxs, gf12sx, e_wuo4, k8zq6d) {
      gf12sx === void 0x0 && (gf12sx = 'ascill'), k8zq6d === void 0x0 && (k8zq6d = '');var oue4w = nkhv['getFileNativePath'](j12fxs),
          vjnshz;try {
        vjnshz = nkhv['fs']['readFileSync'](oue4w), e_wuo4 != null && e_wuo4['runWith']([0x0, { 'data': vjnshz }]);
      } catch (u4e_) {
        e_wuo4 != null && e_wuo4['runWith']([0x1]);
      }
    }, nkhv['readCache'] = function () {}, nkhv['writeCache'] = function (qtd68r) {
      var eo4y0_ = readyUrl['split']('?')[0x0];nkhv['filesListObj'][eo4y0_] = { 'md5': md5Name, 'readyUrl': readyUrl }, nkhv['fs']['writeFile']({ 'filePath': nkhv['fileNativeDir'] + '/' + nkhv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nkhv['filesListObj']), 'success': function (jsfn1) {}, 'fail': function (jsnxfv) {} });
    }, nkhv['setNativeFileDir'] = function (njkvz) {
      nkhv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + njkvz;
    }, nkhv['filesListObj'] = {}, nkhv['fileNativeDir'] = null, nkhv['fileListName'] = 'layaairfiles.txt', nkhv['ziyuFileData'] = {}, uge_w(nkhv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), nkhv;
  }($boc0),
      dq6t8k = function (fxg2s) {
    function _4uoe() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _4uoe['__super']['call'](this), this['_sound'] = _4uoe['_createSound'](), this['_chanell'] = new f2xug(this['_sound']);
    }c40oyb(_4uoe, 'laya.wx.mini.MiniSound', fxg2s);var o4_e0y = _4uoe['prototype'];return o4_e0y['load'] = function (blym$) {
      var vknjh = this;blym$ = b$m9l['formatURL'](blym$), this['url'] = blym$;if (_4uoe['_audioCache'][blym$]) {
        this['event']('complete');return;
      }function ew_0o4() {
        if (_4uoe['_null'] != undefined) vknjh['_sound']['onCanplay'](_4uoe['_null']), vknjh['_sound']['onError'](_4uoe['_null']);else try {
          vknjh['_sound']['onCanplay'](null), vknjh['_sound']['onError'](null), _4uoe['_null'] = null;
        } catch (yc04o) {
          console['warn']('[wxmini] _clearSound:' + yc04o), vknjh['_sound']['onCanplay'](ml9ba$), vknjh['_sound']['onError'](ml9ba$), _4uoe['_null'] = ml9ba$;
        }
      }function zq6k() {
        bacm['loaded'] = !![], bacm['event']('complete'), _4uoe['_audioCache'][bacm['url']] = bacm;
      }function j1sfx2(b$yoc0) {
        console['error']('errCode=' + b$yoc0['errCode'] + '  errMsg=' + b$yoc0['errMsg']), bacm['event']('error');
      }function ml9ba$() {}this['_sound']['onCanplay'](zq6k), this['_sound']['onError'](j1sfx2), this['_sound']['src'] = blym$;var bacm = this;
    }, o4_e0y['play'] = function (kt6dq8, tq8k6d) {
      kt6dq8 === void 0x0 && (kt6dq8 = 0x0), tq8k6d === void 0x0 && (tq8k6d = 0x0);var nshjv, vz6kn;if (this['url'] == td['_tMusic']) {
        if (!_4uoe['_musicAudio']) _4uoe['_musicAudio'] = this['_sound'];nshjv = _4uoe['_musicAudio'], vz6kn = this['_chanell'];
      } else nshjv = this['_sound'], vz6kn = this['_chanell'];return nshjv['src'] = this['url'], nshjv['startTime'] = 0x0, vz6kn['isStopped'] && (vz6kn['url'] = this['url'], vz6kn['loops'] = tq8k6d, vz6kn['startTime'] = kt6dq8, vz6kn['play'](), td['addChannel'](vz6kn)), vz6kn;
    }, o4_e0y['dispose'] = function () {
      var e40y_ = _4uoe['_audioCache'][this['url']];e40y_ && (e40y_['src'] = '', delete _4uoe['_audioCache'][this['url']]);
    }, o40_ew(0x0, o4_e0y, 'duration', function () {
      return this['_sound']['duration'];
    }), _4uoe['_createSound'] = function () {
      _4uoe['_id']++;var vkh6z = xnj1s['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return vkh6z;
    }, _4uoe['_musicAudio'] = null, _4uoe['_id'] = 0x0, _4uoe['_audioCache'] = {}, _4uoe['_null'] = undefined, _4uoe;
  }($boc0),
      f2xug = function (m9b$l) {
    function ob0cy$(svfnx) {
      this['_audio'] = null, this['_onEnd'] = null, ob0cy$['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = svfnx, this['_onEnd'] = dhkv6z['bind'](this['__onEnd'], this), svfnx['onEnded'](this['_onEnd']);
    }c40oyb(ob0cy$, 'laya.wx.mini.MiniSoundChannel', m9b$l);var fsnv = ob0cy$['prototype'];return fsnv['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xnfvsj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fsnv['__onNull'] = function () {}, fsnv['play'] = function () {
      this['isStopped'] = ![], td['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fsnv['stop'] = function () {
      this['isStopped'] = !![], td['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, fsnv['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fsnv['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], td['addChannel'](this), this['_audio']['play']();
    }, o40_ew(0x0, fsnv, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), o40_ew(0x0, fsnv, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), o40_ew(0x0, fsnv, 'volume', function () {
      return 0x1;
    }, function (hznsv) {}), ob0cy$['_null'] = undefined, ob0cy$;
  }(gsfx2),
      jsx1 = function () {
    function t86k() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = xnj1s['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }c40oyb(t86k, 'laya.wx.mini.MiniVideo');var mlc$a = t86k['prototype'];return mlc$a['on'] = function (fj1x, _y0c4, hzdq6k) {
      if (fj1x == 'loadedmetadata') this['onPlayFunc'] = hzdq6k['bind'](_y0c4), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else fj1x == 'ended' && (this['onEndedFunC'] = hzdq6k['bind'](_y0c4), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, mlc$a['onTimeUpdateFunc'] = function (lcy$m) {
      this['position'] = lcy$m['position'], this['_duration'] = lcy$m['duration'];
    }, mlc$a['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, mlc$a['onended'] = function (njf1sx, gsx12) {
      this['onEndedFunC'] = gsx12['bind'](njf1sx), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, mlc$a['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, mlc$a['off'] = function (g1fux, l$ambc, t8q6d) {
      if (g1fux == 'loadedmetadata') this['onPlayFunc'] = t8q6d['bind'](l$ambc), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else g1fux == 'ended' && (this['onEndedFunC'] = t8q6d['bind'](l$ambc), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, mlc$a['load'] = function ($ybl0c) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $ybl0c;
    }, mlc$a['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, mlc$a['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, mlc$a['size'] = function (ugw2_e, nkv6zh) {
      if (!this['videoElement']) return;this['videoElement']['width'] = ugw2_e, this['videoElement']['height'] = nkv6zh;
    }, mlc$a['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, mlc$a['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, o40_ew(0x0, mlc$a, 'duration', function () {
      return this['_duration'];
    }), o40_ew(0x0, mlc$a, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (eo0w) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = eo0w;
    }), o40_ew(0x0, mlc$a, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), o40_ew(0x0, mlc$a, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), o40_ew(0x0, mlc$a, 'ended', function () {
      return this['videoend'];
    }), o40_ew(0x0, mlc$a, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (r375ip) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = r375ip;
    }), o40_ew(0x0, mlc$a, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (mb$l9) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = mb$l9;
    }), o40_ew(0x0, mlc$a, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (u_ewo) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = u_ewo;
    }), o40_ew(0x0, mlc$a, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), o40_ew(0x0, mlc$a, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (e4ouw) {
      if (!this['videoElement']) return;this['videoElement']['x'] = e4ouw;
    }), o40_ew(0x0, mlc$a, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (w0_oe4) {
      if (!this['videoElement']) return;this['videoElement']['y'] = w0_oe4;
    }), o40_ew(0x0, mlc$a, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), o40_ew(0x0, mlc$a, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (vzsnj) {
      if (!this['videoElement']) return;this['videoElement']['src'] = vzsnj;
    }), o40_ew(0x0, mlc$a, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function ($almc) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = $almc;
    }), o40_ew(0x0, mlc$a, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (jfs2) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = jfs2;
    }), t86k;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jvkzhn in Laya) {
    var b$cym = Laya[jvkzhn];b$cym && b$cym['__isclass'] && (exports[jvkzhn] = b$cym);
  }
});