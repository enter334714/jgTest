var G = wx.$E;
(function (window, document, varq8w) {
  var qwf8v = varq8w['un'],
      aw8rvq = varq8w['uns'],
      i156j = varq8w['static'],
      fmw8v7 = varq8w['class'],
      hngply = varq8w['getset'],
      rwv87 = varq8w['__newvec'],
      c56$kj = laya['utils']['Browser'],
      phgua9 = laya['events']['Event'],
      kcb = laya['events']['EventDispatcher'],
      kc$b4m = laya['resource']['HTMLImage'],
      ngpy9h = laya['utils']['Handler'],
      $7b4 = laya['display']['Input'],
      awqv = laya['net']['Loader'],
      xplno = laya['maths']['Matrix'],
      gxynpl = laya['renders']['Render'],
      awrqv8 = laya['utils']['RunDriver'],
      a9rvqu = laya['media']['Sound'],
      gpl = laya['media']['SoundChannel'],
      v8wr7f = laya['media']['SoundManager'],
      vqr8f = laya['display']['Stage'],
      hup9yg = laya['net']['URL'],
      aq8vrw = laya['utils']['Utils'],
      $m4ck = function () {
    function rfw7v() {}return fmw8v7(rfw7v, 'laya.wx.mini.MiniAdpter'), rfw7v['getJson'] = function (fmv8w7) {
      return JSON['parse'](fmv8w7);
    }, rfw7v['init'] = function (jid56k, au9hp) {
      jid56k === void 0x0 && (jid56k = ![]), au9hp === void 0x0 && (au9hp = ![]);if (rfw7v['_inited']) return;rfw7v['window'] = window;if (rfw7v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rfw7v['_inited'] = !![], rfw7v['isZiYu'] = au9hp, rfw7v['isPosMsgYu'] = jid56k, rfw7v['EnvConfig'] = {}, !rfw7v['isZiYu'] && (yxlng['setNativeFileDir']('/layaairGame'), yxlng['existDir'](yxlng['fileNativeDir'], ngpy9h['create'](rfw7v, rfw7v['onMkdirCallBack']))), rfw7v['window']['focus'] = function () {}, varq8w['getUrlPath'] = function () {}, rfw7v['window']['logtime'] = function (bf7m8w) {}, rfw7v['window']['alertTimeLog'] = function (r8fqwv) {}, rfw7v['window']['resetShareInfo'] = function () {}, rfw7v['window']['CanvasRenderingContext2D'] = function () {}, rfw7v['window']['CanvasRenderingContext2D']['prototype'] = rfw7v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rfw7v['window']['document']['body']['appendChild'] = function () {}, rfw7v['EnvConfig']['pixelRatioInt'] = 0x0, awrqv8['getPixelRatio'] = rfw7v['pixelRatio'], rfw7v['_preCreateElement'] = c56$kj['createElement'], c56$kj['createElement'] = rfw7v['createElement'], awrqv8['createShaderCondition'] = rfw7v['createShaderCondition'], aq8vrw['parseXMLFromString'] = rfw7v['parseXMLFromString'], $7b4['_createInputElement'] = _132ts['_createInputElement'], rfw7v['EnvConfig']['load'] = awqv['prototype']['load'], awqv['prototype']['load'] = $cbk['prototype']['load'], rfw7v['isZiYu'] && jid56k && wx['onMessage'](function (tdji_) {
        tdji_['isLoad'] && (yxlng['ziyuFileData'][tdji_['url']] = tdji_['data']);
      });
    }, rfw7v['onMkdirCallBack'] = function (qwar8, r8vf) {
      if (!qwar8) yxlng['filesListObj'] = JSON['parse'](r8vf['data']);
    }, rfw7v['pixelRatio'] = function () {
      if (!rfw7v['EnvConfig']['pixelRatioInt']) try {
        var d5j6k$ = wx['getSystemInfoSync']();return rfw7v['EnvConfig']['pixelRatioInt'] = d5j6k$['pixelRatio'], d5j6k$ = d5j6k$, d5j6k$['pixelRatio'];
      } catch (lgyhn) {}return rfw7v['EnvConfig']['pixelRatioInt'];
    }, rfw7v['createElement'] = function (k6$5j) {
      if (k6$5j == 'canvas') {
        var rfwv8;return rfw7v['idx'] == 0x1 ? rfw7v['isZiYu'] ? (rfwv8 = sharedCanvas, rfwv8['style'] = {}) : rfwv8 = window['canvas'] : rfwv8 = window['wx']['createCanvas'](), rfw7v['idx']++, rfwv8;
      } else {
        if (k6$5j == 'textarea' || k6$5j == 'input') return rfw7v['onCreateInput'](k6$5j);else {
          if (k6$5j == 'div') {
            var wfmv7 = rfw7v['_preCreateElement'](k6$5j);return wfmv7['contains'] = function (hu9pga) {
              return null;
            }, wfmv7['removeChild'] = function (aq9ugh) {}, wfmv7;
          } else return rfw7v['_preCreateElement'](k6$5j);
        }
      }
    }, rfw7v['onCreateInput'] = function ($6kd5) {
      var k6$ = rfw7v['_preCreateElement']($6kd5);return k6$['focus'] = _132ts['wxinputFocus'], k6$['blur'] = _132ts['wxinputblur'], k6$['style'] = {}, k6$['value'] = 0x0, k6$['parentElement'] = {}, k6$['placeholder'] = {}, k6$['type'] = {}, k6$['setColor'] = function (wqfv8) {}, k6$['setType'] = function (qghu9) {}, k6$['setFontFace'] = function (nyghpl) {}, k6$['addEventListener'] = function (opxynl) {}, k6$['contains'] = function (b84) {
        return null;
      }, k6$['removeChild'] = function (j5$k) {}, k6$;
    }, rfw7v['createShaderCondition'] = function (ugpy) {
      var i1djt = this,
          n9yphg = function () {
        var r8vq = ugpy;return i1djt[ugpy['replace']('this.', '')];
      };return n9yphg;
    }, rfw7v['EnvConfig'] = null, rfw7v['window'] = null, rfw7v['_preCreateElement'] = null, rfw7v['_inited'] = ![], rfw7v['wxRequest'] = null, rfw7v['systemInfo'] = null, rfw7v['version'] = '0.0.1', rfw7v['isZiYu'] = ![], rfw7v['isPosMsgYu'] = ![], rfw7v['parseXMLFromString'] = function (_12t3) {
      var rvau9, _j1d5i;_12t3 = _12t3['replace'](/>\s+</g, '><');try {
        rvau9 = new window['Parser']['DOMParser']()['parseFromString'](_12t3, 'text/xml');
      } catch (aqghu9) {
        throw '需要引入xml解析库文件';
      }return rvau9;
    }, rfw7v['idx'] = 0x1, rfw7v;
  }(),
      rf78 = function () {
    function is1d_t() {}fmw8v7(is1d_t, 'laya.wx.mini.MiniImage');var q9uavr = is1d_t['prototype'];return q9uavr['_loadImage'] = function (cb64) {
      var polxn = this,
          haqur9 = ![];cb64['indexOf']('layaNativeDir/') == -0x1 && (haqur9 = !![], cb64 = hup9yg['formatURL'](cb64));if (!yxlng['getFileInfo'](cb64)) {
        if (cb64['indexOf']('http://') != -0x1 || cb64['indexOf']('https://') != -0x1) yxlng['downImg'](cb64, new ngpy9h(is1d_t, is1d_t['onDownImgCallBack'], [cb64, polxn]), cb64);else is1d_t['onCreateImage'](cb64, polxn, !![]);
      } else is1d_t['onCreateImage'](cb64, polxn, !haqur9);
    }, is1d_t['onDownImgCallBack'] = function (ngxpyl, ckb46$, d5ij1_) {
      if (!d5ij1_) is1d_t['onCreateImage'](ngxpyl, ckb46$);else ckb46$['onError'](null);
    }, is1d_t['onCreateImage'] = function (w8raqv, dtis1_, ts30_) {
      ts30_ === void 0x0 && (ts30_ = ![]);var c4b$m;if (!ts30_) {
        var $cmk4b = yxlng['getFileInfo'](w8raqv),
            upa9gh = $cmk4b['md5'];c4b$m = yxlng['getFileNativePath'](upa9gh);
      } else c4b$m = w8raqv;if (dtis1_['imgCache'] == null) dtis1_['imgCache'] = {};var yh9up;function w87fmb() {
        yh9up['onload'] = null, yh9up['onerror'] = null, delete dtis1_['imgCache'][w8raqv];
      };var pngxyl = function () {
        w87fmb(), dtis1_['onLoaded'](yh9up);
      },
          itj1d_ = function () {
        w87fmb(), dtis1_['event']('error', 'Load image failed');
      };dtis1_['_type'] == 'nativeimage' ? (yh9up = new c56$kj['window']['Image'](), yh9up['crossOrigin'] = '', yh9up['onload'] = pngxyl, yh9up['onerror'] = itj1d_, yh9up['src'] = c4b$m, dtis1_['imgCache'][w8raqv] = yh9up) : new kc$b4m['create'](c4b$m, { 'onload': pngxyl, 'onerror': itj1d_, 'onCreate': function (aup9) {
          yh9up = aup9, dtis1_['imgCache'][w8raqv] = aup9;
        } });
    }, is1d_t;
  }(),
      _132ts = function () {
    function s32_() {}return fmw8v7(s32_, 'laya.wx.mini.MiniInput'), s32_['_createInputElement'] = function () {
      $7b4['_initInput']($7b4['area'] = c56$kj['createElement']('textarea')), $7b4['_initInput']($7b4['input'] = c56$kj['createElement']('input')), $7b4['inputContainer'] = c56$kj['createElement']('div'), $7b4['inputContainer']['style']['position'] = 'absolute', $7b4['inputContainer']['style']['zIndex'] = 0x186a0, c56$kj['container']['appendChild']($7b4['inputContainer']), $7b4['inputContainer']['setPos'] = function (c4bk, p9agu) {
        $7b4['inputContainer']['style']['left'] = c4bk + 'px', $7b4['inputContainer']['style']['top'] = p9agu + 'px';
      }, varq8w['stage']['on']('resize', null, s32_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sti12) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v8wr7f['_soundClass'] = lygnhp, v8wr7f['_musicClass'] = lygnhp;
    }, s32_['_onStageResize'] = function () {
      var lxnpy = varq8w['stage']['_canvasTransform']['identity']();lxnpy['scale'](c56$kj['width'] / gxynpl['canvas']['width'] / awrqv8['getPixelRatio'](), c56$kj['height'] / gxynpl['canvas']['height'] / awrqv8['getPixelRatio']());
    }, s32_['wxinputFocus'] = function (s1_id) {
      var _sdt1i = $7b4['inputElement']['target'];if (_sdt1i && !_sdt1i['editable']) return;$m4ck['window']['wx']['offKeyboardConfirm'](), $m4ck['window']['wx']['offKeyboardInput'](), $m4ck['window']['wx']['showKeyboard']({ 'defaultValue': _sdt1i['text'], 'maxLength': _sdt1i['maxChars'], 'multiple': _sdt1i['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (f8mv7w) {}, 'fail': function (c54$k) {} }), $m4ck['window']['wx']['onKeyboardConfirm'](function (olxynp) {
        var bf8w7m = olxynp ? olxynp['value'] : '';_sdt1i['text'] = bf8w7m, _sdt1i['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $m4ck['window']['wx']['onKeyboardInput'](function (jdt_1) {
        var d_jti1 = jdt_1 ? jdt_1['value'] : '';if (!_sdt1i['multiline']) {
          if (d_jti1['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_sdt1i['text'] = d_jti1, _sdt1i['event']('input');
      });
    }, s32_['inputEnter'] = function () {
      $7b4['inputElement']['target']['focus'] = ![];
    }, s32_['wxinputblur'] = function () {
      s32_['hideKeyboard']();
    }, s32_['hideKeyboard'] = function () {
      $m4ck['window']['wx']['offKeyboardConfirm'](), $m4ck['window']['wx']['offKeyboardInput'](), $m4ck['window']['wx']['hideKeyboard']({ 'success': function (lngxy) {
          console['log']('隐藏键盘');
        }, 'fail': function (wvuqar) {
          console['log']('隐藏键盘出错:' + (wvuqar ? wvuqar['errMsg'] : ''));
        } });
    }, s32_;
  }(),
      $cbk = function () {
    function rvf87() {}fmw8v7(rvf87, 'laya.wx.mini.MiniLoader');var k6c$5 = rvf87['prototype'];return k6c$5['load'] = function (avr8q, s032_t, lyhng, $74c, u9qrah) {
      lyhng === void 0x0 && (lyhng = !![]), u9qrah === void 0x0 && (u9qrah = ![]);var _21its = this;_21its['_url'] = avr8q;if (avr8q['indexOf']('data:image') === 0x0) _21its['_type'] = s032_t = 'image';else _21its['_type'] = s032_t || (s032_t = _21its['getTypeFromUrl'](avr8q));_21its['_cache'] = lyhng, _21its['_data'] = null;var t2s03_ = 'ascii';if (avr8q['indexOf']('.fnt') != -0x1) t2s03_ = 'utf8';else s032_t == 'arraybuffer' && (t2s03_ = '');;var dj15_i = aq8vrw['getFileExtension'](avr8q);if (rvf87['_fileTypeArr']['indexOf'](dj15_i) != -0x1) $m4ck['EnvConfig']['load']['call'](this, avr8q, s032_t, lyhng, $74c, u9qrah);else {
        if (!yxlng['getFileInfo'](avr8q)) {
          if (avr8q['indexOf']('layaNativeDir/') != -0x1) {
            if ($m4ck['isZiYu']) {
              var _13st2 = yxlng['ziyuFileData'][avr8q];_21its['onLoaded'](_13st2);return;
            } else {
              cosnole['log']('read read'), yxlng['read'](avr8q, t2s03_, new ngpy9h(rvf87, rvf87['onReadNativeCallBack'], [t2s03_, avr8q, s032_t, lyhng, $74c, u9qrah, _21its]));return;
            }
          }if (hup9yg['rootPath'] == '') var mc = avr8q;else mc = avr8q['split'](hup9yg['rootPath'])[0x0];avr8q['indexOf']('http://') != -0x1 || avr8q['indexOf']('https://') != -0x1 ? $m4ck['EnvConfig']['load']['call'](_21its, avr8q, s032_t, lyhng, $74c, u9qrah) : yxlng['readFile'](mc, t2s03_, new ngpy9h(rvf87, rvf87['onReadNativeCallBack'], [t2s03_, avr8q, s032_t, lyhng, $74c, u9qrah, _21its]), avr8q);
        } else $m4ck['EnvConfig']['load']['call'](this, avr8q, s032_t, lyhng, $74c, u9qrah);
      }
    }, k6c$5['resMgrLoad'] = function (_jti, ts0, _s03, $c6kj, q9urav, qvuar9, pahu) {
      _s03 === void 0x0 && (_s03 = 0x0), $c6kj === void 0x0 && ($c6kj = ![]), q9urav === void 0x0 && (q9urav = ![]), qvuar9 === void 0x0 && (qvuar9 = 0x0), pahu === void 0x0 && (pahu = 0x3), _jti['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _jti), $m4ck['EnvConfig']['resMgrLoad'](_jti, (s_d1, wrvf8, cbm4$7) => {
        rvf87['prototype']['resMgrLoadCallBack'](s_d1, wrvf8, cbm4$7, ts0);
      }, _s03, $c6kj, q9urav, qvuar9, pahu);
    }, k6c$5['resMgrLoadCallBack'] = function (ghyn9p, s0t_23, pu9ghy, haug) {
      console['log']('buff:::', ghyn9p, pu9ghy, yxlng['fileNativeDir'] + '///' + yxlng['fileListName']), haug(ghyn9p, s0t_23, pu9ghy);
    }, k6c$5['clearRes'] = function (uy9pg, jk$56c) {
      jk$56c === void 0x0 && (jk$56c = ![]);var c7fb4 = this;c7fb4['clearRes'](uy9pg, jk$56c);var vqa8w = yxlng['getFileInfo'](uy9pg);if (vqa8w && (uy9pg['indexOf']('http://') != -0x1 || uy9pg['indexOf']('https://') != -0x1)) {
        var waqrvu = vqa8w['md5'],
            _st1 = yxlng['getFileNativePath'](waqrvu);yxlng['remove'](_st1);
      }
    }, rvf87['onReadNativeCallBack'] = function (gyph9, auqhr9, mb7c, fv8w7r, q9ravu, nypgl, uh9p, kj5id6, u9phag) {
      fv8w7r === void 0x0 && (fv8w7r = !![]), nypgl === void 0x0 && (nypgl = ![]), kj5id6 === void 0x0 && (kj5id6 = 0x0);if (!kj5id6) {
        var _32ts1;if (mb7c == 'json' || mb7c == 'atlas') _32ts1 = $m4ck['getJson'](u9phag['data']);else mb7c == 'xml' ? _32ts1 = aq8vrw['parseXMLFromString'](u9phag['data']) : _32ts1 = u9phag['data'];uh9p['onLoaded'](_32ts1), !$m4ck['isZiYu'] && $m4ck['isPosMsgYu'] && mb7c != 'arraybuffer' && wx['postMessage']({ 'url': auqhr9, 'data': _32ts1, 'isLoad': !![] });
      } else kj5id6 == 0x1 && $m4ck['EnvConfig']['load']['call'](uh9p, auqhr9, mb7c, fv8w7r, q9ravu, nypgl);
    }, i156j(rvf87, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rvf87;
  }(),
      yxlng = function (j$ck6) {
    function a9ughp() {
      a9ughp['__super']['call'](this);;
    }return fmw8v7(a9ughp, 'laya.wx.mini.MiniFileMgr', j$ck6), a9ughp['isLoadFile'] = function (lnpyx) {
      return a9ughp['_fileTypeArr']['indexOf'](lnpyx) != -0x1 ? !![] : ![];
    }, a9ughp['getFileInfo'] = function (yp9u) {
      var mc74b$ = yp9u['split']('?')[0x0],
          $jc65 = a9ughp['filesListObj'][mc74b$];if ($jc65 == null) return null;else return $jc65;return null;
    }, a9ughp['onFileUpdate'] = function (_3s1t, mk) {
      var _15ji = _3s1t['split']('/'),
          pyxlgn = _15ji[_15ji['length'] - 0x1],
          _1d5ij = a9ughp['getFileInfo'](mk);if (_1d5ij == null) a9ughp['onSaveFile'](mk, pyxlgn);else {
        if (_1d5ij['readyUrl'] != mk) a9ughp['remove'](pyxlgn, mk);
      }
    }, a9ughp['exits'] = function (w7mf, phgu) {
      var u9qavr = a9ughp['getFileNativePath'](w7mf);a9ughp['fs']['getFileInfo']({ 'filePath': u9qavr, 'success': function (c74fb) {
          phgu != null && phgu['runWith']([0x0, c74fb]);
        }, 'fail': function (d_1jt) {
          phgu != null && phgu['runWith']([0x1, d_1jt]);
        } });
    }, a9ughp['read'] = function (av8, ck5$6j, $mc4, j$k56) {
      ck5$6j === void 0x0 && (ck5$6j = 'ascill'), j$k56 === void 0x0 && (j$k56 = '');var c$5j6;j$k56 != '' ? c$5j6 = a9ughp['getFileNativePath'](av8) : c$5j6 = av8, a9ughp['fs']['readFile']({ 'filePath': c$5j6, 'encoding': ck5$6j, 'success': function (dti1s_) {
          $mc4 != null && $mc4['runWith']([0x0, dti1s_]);
        }, 'fail': function (tj_i1) {
          if (tj_i1 && j$k56 != '') a9ughp['down'](j$k56, ck5$6j, $mc4, j$k56);else $mc4 != null && $mc4['runWith']([0x1]);
        } });
    }, a9ughp['readNativeFile'] = function (bcmk, _0t2s3) {
      a9ughp['fs']['readFile']({ 'filePath': bcmk, 'encoding': '', 'success': function ($jc5k) {
          _0t2s3 != null && _0t2s3['runWith']([0x0]);
        }, 'fail': function (nyhpg) {
          _0t2s3 != null && _0t2s3['runWith']([0x1]);
        } });
    }, a9ughp['down'] = function ($mbk4c, _1dits, bfwm, rqavuw) {
      _1dits === void 0x0 && (_1dits = 'ascill'), rqavuw === void 0x0 && (rqavuw = '');var ds_ti1 = a9ughp['getFileNativePath'](rqavuw),
          auhp9 = a9ughp['wxdown']({ 'url': $mbk4c, 'filePath': ds_ti1, 'success': function (u9vqa) {
          if (u9vqa['statusCode'] === 0xc8) a9ughp['readFile'](u9vqa['filePath'], _1dits, bfwm, rqavuw);
        }, 'fail': function (rqvw8) {
          bfwm != null && bfwm['runWith']([0x1, rqvw8]);
        } });auhp9['onProgressUpdate'](function (xlnyg) {
        bfwm != null && bfwm['runWith']([0x2, xlnyg['progress']]);
      });
    }, a9ughp['readFile'] = function (loxpy, fwv8m7, k$6c54, uwqrv) {
      fwv8m7 === void 0x0 && (fwv8m7 = 'ascill'), uwqrv === void 0x0 && (uwqrv = ''), a9ughp['fs']['readFile']({ 'filePath': loxpy, 'encoding': fwv8m7, 'success': function (_ti12s) {
          if (loxpy['indexOf']('http://') != -0x1 || loxpy['indexOf']('https://') != -0x1) a9ughp['onFileUpdate'](loxpy, uwqrv);k$6c54 != null && k$6c54['runWith']([0x0, _ti12s]);
        }, 'fail': function (nypxlg) {
          if (nypxlg) k$6c54 != null && k$6c54['runWith']([0x1, nypxlg]);
        } });
    }, a9ughp['downImg'] = function (b47c$m, hngp9, wr8fqv) {
      wr8fqv === void 0x0 && (wr8fqv = '');var d56kj = a9ughp['wxdown']({ 'url': b47c$m, 'success': function (m7bc4) {
          m7bc4['statusCode'] === 0xc8 && a9ughp['copyFile'](m7bc4['tempFilePath'], wr8fqv, hngp9);
        }, 'fail': function (nlpyxg) {
          hngp9 != null && hngp9['runWith']([0x1, nlpyxg]);
        } });
    }, a9ughp['copyFile'] = function (i_s1t2, phylgn, mkc4) {
      var b$7cm4 = i_s1t2['split']('/'),
          j1itd_ = b$7cm4[b$7cm4['length'] - 0x1],
          si_21 = phylgn['split']('?')[0x0],
          _d1ij = a9ughp['getFileInfo'](phylgn),
          p9uhga = a9ughp['getFileNativePath'](j1itd_);a9ughp['fs']['copyFile']({ 'srcPath': i_s1t2, 'destPath': p9uhga, 'success': function (c6kb$4) {
          if (!_d1ij) a9ughp['onSaveFile'](phylgn, j1itd_), mkc4 != null && mkc4['runWith']([0x0]);else {
            if (_d1ij['readyUrl'] != phylgn) a9ughp['remove'](j1itd_, phylgn, mkc4);
          }
        }, 'fail': function (dji_1) {
          mkc4 != null && mkc4['runWith']([0x1, dji_1]);
        } });
    }, a9ughp['getFileNativePath'] = function (d5j61) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + d5j61;
    }, a9ughp['remove'] = function (_sdi, i_1std, fwmv) {
      i_1std === void 0x0 && (i_1std = '');var j$d65k = a9ughp['getFileInfo'](i_1std),
          yhlpn = a9ughp['getFileNativePath'](j$d65k['md5']);varq8w['loader']['clearRes'](j$d65k['readyUrl']), a9ughp['fs']['unlink']({ 'filePath': yhlpn, 'success': function (dkj56$) {
          if (i_1std != '') a9ughp['onSaveFile'](i_1std, _sdi);fwmv != null && fwmv['runWith']([0x0]);
        }, 'fail': function (dk5j6$) {} });
    }, a9ughp['onSaveFile'] = function (t03_2, $jk5) {
      var ik6dj5 = t03_2['split']('?')[0x0];a9ughp['filesListObj'][ik6dj5] = { 'md5': $jk5, 'readyUrl': t03_2 }, a9ughp['fs']['writeFile']({ 'filePath': a9ughp['fileNativeDir'] + '/' + a9ughp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](a9ughp['filesListObj']), 'success': function (t032sz) {
          console['log']('写入测试测试成功：', t032sz);
        }, 'fail': function ($bk46c) {
          console['log']('写入测试测试失败：', $bk46c);
        } });
    }, a9ughp['existDir'] = function (c$65, j6$dk) {
      a9ughp['fs']['mkdir']({ 'dirPath': c$65, 'success': function ($bcm47) {
          j6$dk != null && j6$dk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (nylxop) {
          if (nylxop['errMsg']['indexOf']('file already exists') != -0x1) a9ughp['readSync'](a9ughp['fileListName'], 'utf8', j6$dk);else j6$dk != null && j6$dk['runWith']([0x1, nylxop]);
        } });
    }, a9ughp['readSync'] = function (w8rv7, dk5$j, lpon, j65kd) {
      dk5$j === void 0x0 && (dk5$j = 'ascill'), j65kd === void 0x0 && (j65kd = '');var hr9 = a9ughp['getFileNativePath'](w8rv7),
          au9rq;try {
        au9rq = a9ughp['fs']['readFileSync'](hr9), lpon != null && lpon['runWith']([0x0, { 'data': au9rq }]);
      } catch (vwura) {
        lpon != null && lpon['runWith']([0x1]);
      }
    }, a9ughp['readCache'] = function () {}, a9ughp['writeCache'] = function (_dij1) {
      var id6k5j = readyUrl['split']('?')[0x0];a9ughp['filesListObj'][id6k5j] = { 'md5': md5Name, 'readyUrl': readyUrl }, a9ughp['fs']['writeFile']({ 'filePath': a9ughp['fileNativeDir'] + '/' + a9ughp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](a9ughp['filesListObj']), 'success': function (pgua9h) {}, 'fail': function (kb$64c) {} });
    }, a9ughp['setNativeFileDir'] = function (c65k) {
      a9ughp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c65k;
    }, a9ughp['filesListObj'] = {}, a9ughp['fileNativeDir'] = null, a9ughp['fileListName'] = 'layaairfiles.txt', a9ughp['ziyuFileData'] = {}, i156j(a9ughp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), a9ughp;
  }(kcb),
      lygnhp = function (plnhgy) {
    function pu9yh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], pu9yh['__super']['call'](this), this['_sound'] = pu9yh['_createSound']();
    }fmw8v7(pu9yh, 'laya.wx.mini.MiniSound', plnhgy);var jdi_t1 = pu9yh['prototype'];return jdi_t1['load'] = function (_djti1) {
      var s2_t = this;_djti1 = hup9yg['formatURL'](_djti1), this['url'] = _djti1;if (pu9yh['_audioCache'][_djti1]) {
        this['event']('complete');return;
      }function d6j5k() {
        if (pu9yh['_null'] != undefined) s2_t['_sound']['onCanplay'](pu9yh['_null']), s2_t['_sound']['onError'](pu9yh['_null']);else try {
          s2_t['_sound']['onCanplay'](null), s2_t['_sound']['onError'](null), pu9yh['_null'] = null;
        } catch (pnxoyl) {
          console['warn']('[wxmini] _clearSound:' + pnxoyl), s2_t['_sound']['onCanplay'](plyn), s2_t['_sound']['onError'](plyn), pu9yh['_null'] = plyn;
        }
      }function nxplo() {
        d6j5k(), $kcb['loaded'] = !![], $kcb['event']('complete'), pu9yh['_audioCache'][$kcb['url']] = $kcb;
      }function auqgh9(apgu) {
        console['error']('errCode=' + apgu['errCode'] + '  errMsg=' + apgu['errMsg']), d6j5k(), $kcb['event']('error');
      }function plyn() {}this['_sound']['onCanplay'](nxplo), this['_sound']['onError'](auqgh9), this['_sound']['src'] = _djti1;var $kcb = this;
    }, jdi_t1['play'] = function (bmwf, cbm47) {
      bmwf === void 0x0 && (bmwf = 0x0), cbm47 === void 0x0 && (cbm47 = 0x0);var t03s_;if (this['url'] == v8wr7f['_tMusic']) {
        if (!pu9yh['_musicAudio']) pu9yh['_musicAudio'] = pu9yh['_createSound']();t03s_ = pu9yh['_musicAudio'];
      } else t03s_ = pu9yh['_createSound']();t03s_['src'] = this['url'];var u9gpyh = new st_id(t03s_);return u9gpyh['url'] = this['url'], u9gpyh['loops'] = cbm47, u9gpyh['startTime'] = bmwf, u9gpyh['play'](), v8wr7f['addChannel'](u9gpyh), u9gpyh;
    }, jdi_t1['dispose'] = function () {
      var hua9 = pu9yh['_audioCache'][this['url']];hua9 && (hua9['src'] = '', delete pu9yh['_audioCache'][this['url']]);
    }, hngply(0x0, jdi_t1, 'duration', function () {
      return this['_sound']['duration'];
    }), pu9yh['_createSound'] = function () {
      return pu9yh['_id']++, $m4ck['window']['wx']['createInnerAudioContext']();
    }, pu9yh['_musicAudio'] = null, pu9yh['_id'] = 0x0, pu9yh['_audioCache'] = {}, pu9yh['_null'] = undefined, pu9yh;
  }(kcb),
      st_id = function (_0s2t3) {
    function b7mw8(s13_t2) {
      this['_audio'] = null, this['_onEnd'] = null, b7mw8['__super']['call'](this), this['_audio'] = s13_t2, this['_onEnd'] = aq8vrw['bind'](this['__onEnd'], this), s13_t2['onEnded'](this['_onEnd']);
    }fmw8v7(b7mw8, 'laya.wx.mini.MiniSoundChannel', _0s2t3);var f7bw8 = b7mw8['prototype'];return f7bw8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (varq8w['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, f7bw8['__onNull'] = function () {}, f7bw8['play'] = function () {
      this['isStopped'] = ![], v8wr7f['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, f7bw8['stop'] = function () {
      this['isStopped'] = !![], v8wr7f['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (b7mw8['_null'] != undefined) this['_audio']['onEnded'](b7mw8['_null']);else try {
        this['_audio']['onEnded'](null), b7mw8['_null'] = null;
      } catch (ruvwa) {
        console['warn']('[wxmini] stop:' + ruvwa), this['_audio']['onEnded'](aq8vrw['bind'](this['__onNull'], this)), b7mw8['_null'] = aq8vrw['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, f7bw8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, f7bw8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v8wr7f['addChannel'](this), this['_audio']['play']();
    }, hngply(0x0, f7bw8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hngply(0x0, f7bw8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hngply(0x0, f7bw8, 'volume', function () {
      return 0x1;
    }, function (cm$b4) {}), b7mw8['_null'] = undefined, b7mw8;
  }(gpl);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a9urvq in Laya) {
    var ijd5k = Laya[a9urvq];ijd5k && ijd5k['__isclass'] && (exports[a9urvq] = ijd5k);
  }
});