var B = wx.$B;
(function (window, document, pneusg) {
  var t$0xv = pneusg['un'],
      wai32e = pneusg['uns'],
      j3fr5 = pneusg['static'],
      pe2wa = pneusg['class'],
      nhs76 = pneusg['getset'],
      vbl4z = pneusg['__newvec'],
      o5jmr1 = laya['utils']['Browser'],
      _$td = laya['events']['Event'],
      wa382 = laya['events']['EventDispatcher'],
      gnuip = laya['resource']['HTMLImage'],
      v4yzbl = laya['utils']['Handler'],
      igupen = laya['display']['Input'],
      sg7pu = laya['net']['Loader'],
      h967n = laya['maths']['Matrix'],
      j5rm = laya['renders']['Render'],
      r8fw3a = laya['utils']['RunDriver'],
      zkh96 = laya['media']['Sound'],
      nu7gs = laya['media']['SoundChannel'],
      kz6b4 = laya['media']['SoundManager'],
      nugs7 = laya['display']['Stage'],
      y0xt$ = laya['net']['URL'],
      kbz9h6 = laya['utils']['Utils'],
      u7 = function () {
    function t0d$_() {}return pe2wa(t0d$_, 'laya.wx.mini.MiniAdpter'), t0d$_['getJson'] = function ($0yltv) {
      return JSON['parse']($0yltv);
    }, t0d$_['init'] = function (tvyx0$, gpiune) {
      tvyx0$ === void 0x0 && (tvyx0$ = ![]), gpiune === void 0x0 && (gpiune = ![]);if (t0d$_['_inited']) return;t0d$_['window'] = window;if (t0d$_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;t0d$_['_inited'] = !![], t0d$_['isZiYu'] = gpiune, t0d$_['isPosMsgYu'] = tvyx0$, t0d$_['EnvConfig'] = {}, !t0d$_['isZiYu'] && (giupe['setNativeFileDir']('/layaairGame'), giupe['existDir'](giupe['fileNativeDir'], v4yzbl['create'](t0d$_, t0d$_['onMkdirCallBack']))), t0d$_['window']['focus'] = function () {}, pneusg['getUrlPath'] = function () {}, t0d$_['window']['logtime'] = function (kb96h7) {}, t0d$_['window']['alertTimeLog'] = function (fr53w) {}, t0d$_['window']['resetShareInfo'] = function () {}, t0d$_['window']['CanvasRenderingContext2D'] = function () {}, t0d$_['window']['CanvasRenderingContext2D']['prototype'] = t0d$_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t0d$_['window']['document']['body']['appendChild'] = function () {}, t0d$_['EnvConfig']['pixelRatioInt'] = 0x0, r8fw3a['getPixelRatio'] = t0d$_['pixelRatio'], t0d$_['_preCreateElement'] = o5jmr1['createElement'], o5jmr1['createElement'] = t0d$_['createElement'], r8fw3a['createShaderCondition'] = t0d$_['createShaderCondition'], kbz9h6['parseXMLFromString'] = t0d$_['parseXMLFromString'], igupen['_createInputElement'] = gpsenu['_createInputElement'], t0d$_['EnvConfig']['load'] = sg7pu['prototype']['load'], sg7pu['prototype']['load'] = n7s6h9['prototype']['load'], t0d$_['isZiYu'] && tvyx0$ && wx['onMessage'](function (w23eai) {
        w23eai['isLoad'] && (giupe['ziyuFileData'][w23eai['url']] = w23eai['data']);
      });
    }, t0d$_['onMkdirCallBack'] = function (zb4lv, iw238) {
      if (!zb4lv) giupe['filesListObj'] = JSON['parse'](iw238['data']);
    }, t0d$_['pixelRatio'] = function () {
      if (!t0d$_['EnvConfig']['pixelRatioInt']) try {
        var f5rj8 = wx['getSystemInfoSync']();return t0d$_['EnvConfig']['pixelRatioInt'] = f5rj8['pixelRatio'], f5rj8 = f5rj8, f5rj8['pixelRatio'];
      } catch (txd_$q) {}return t0d$_['EnvConfig']['pixelRatioInt'];
    }, t0d$_['createElement'] = function (gh7ns) {
      if (gh7ns == 'canvas') {
        var upsnge;return t0d$_['idx'] == 0x1 ? t0d$_['isZiYu'] ? (upsnge = sharedCanvas, upsnge['style'] = {}) : upsnge = window['canvas'] : upsnge = window['wx']['createCanvas'](), t0d$_['idx']++, upsnge;
      } else {
        if (gh7ns == 'textarea' || gh7ns == 'input') return t0d$_['onCreateInput'](gh7ns);else {
          if (gh7ns == 'div') {
            var nsg7pu = t0d$_['_preCreateElement'](gh7ns);return nsg7pu['contains'] = function (dx_t) {
              return null;
            }, nsg7pu['removeChild'] = function (npeg) {}, nsg7pu;
          } else return t0d$_['_preCreateElement'](gh7ns);
        }
      }
    }, t0d$_['onCreateInput'] = function (z4lv) {
      var nsgepu = t0d$_['_preCreateElement'](z4lv);return nsgepu['focus'] = gpsenu['wxinputFocus'], nsgepu['blur'] = gpsenu['wxinputblur'], nsgepu['style'] = {}, nsgepu['value'] = 0x0, nsgepu['parentElement'] = {}, nsgepu['placeholder'] = {}, nsgepu['type'] = {}, nsgepu['setColor'] = function (hz6) {}, nsgepu['setType'] = function (f851jr) {}, nsgepu['setFontFace'] = function (k6sh97) {}, nsgepu['addEventListener'] = function (lb4vk) {}, nsgepu['contains'] = function (b9) {
        return null;
      }, nsgepu['removeChild'] = function (sh976) {}, nsgepu;
    }, t0d$_['createShaderCondition'] = function (d0_xt$) {
      var s7pu = this,
          k6z49 = function () {
        var lzk9 = d0_xt$;return s7pu[d0_xt$['replace']('this.', '')];
      };return k6z49;
    }, t0d$_['EnvConfig'] = null, t0d$_['window'] = null, t0d$_['_preCreateElement'] = null, t0d$_['_inited'] = ![], t0d$_['wxRequest'] = null, t0d$_['systemInfo'] = null, t0d$_['version'] = '0.0.1', t0d$_['isZiYu'] = ![], t0d$_['isPosMsgYu'] = ![], t0d$_['parseXMLFromString'] = function (usn7p) {
      var awi2p, r1jfm5;usn7p = usn7p['replace'](/>\s+</g, '><');try {
        awi2p = new window['Parser']['DOMParser']()['parseFromString'](usn7p, 'text/xml');
      } catch (jmro) {
        throw '需要引入xml解析库文件';
      }return awi2p;
    }, t0d$_['idx'] = 0x1, t0d$_;
  }(),
      fwa8 = function () {
    function fmjr1() {}pe2wa(fmjr1, 'laya.wx.mini.MiniImage');var bh6z = fmjr1['prototype'];return bh6z['_loadImage'] = function (t_0yx$) {
      var t0$xd_ = this,
          af283w = ![];t_0yx$['indexOf']('layaNativeDir/') == -0x1 && (af283w = !![], t_0yx$ = y0xt$['formatURL'](t_0yx$));if (!giupe['getFileInfo'](t_0yx$)) {
        if (t_0yx$['indexOf']('http://') != -0x1 || t_0yx$['indexOf']('https://') != -0x1) giupe['downImg'](t_0yx$, new v4yzbl(fmjr1, fmjr1['onDownImgCallBack'], [t_0yx$, t0$xd_]), t_0yx$);else fmjr1['onCreateImage'](t_0yx$, t0$xd_, !![]);
      } else fmjr1['onCreateImage'](t_0yx$, t0$xd_, !af283w);
    }, fmjr1['onDownImgCallBack'] = function (guhsn, hus6n, iu2e) {
      if (!iu2e) fmjr1['onCreateImage'](guhsn, hus6n);else hus6n['onError'](null);
    }, fmjr1['onCreateImage'] = function (ipugn, eia2gp, ksh76) {
      ksh76 === void 0x0 && (ksh76 = ![]);var epagi;if (!ksh76) {
        var $txv = giupe['getFileInfo'](ipugn),
            gspne = $txv['md5'];epagi = giupe['getFileNativePath'](gspne);
      } else epagi = ipugn;if (eia2gp['imgCache'] == null) eia2gp['imgCache'] = {};var bkz4l9;function l$0tv() {
        bkz4l9['onload'] = null, bkz4l9['onerror'] = null, delete eia2gp['imgCache'][ipugn];
      };var upsen = function () {
        l$0tv(), eia2gp['onLoaded'](bkz4l9);
      },
          $_x0td = function () {
        l$0tv(), eia2gp['event']('error', 'Load image failed');
      };eia2gp['_type'] == 'nativeimage' ? (bkz4l9 = new o5jmr1['window']['Image'](), bkz4l9['crossOrigin'] = '', bkz4l9['onload'] = upsen, bkz4l9['onerror'] = $_x0td, bkz4l9['src'] = epagi, eia2gp['imgCache'][ipugn] = bkz4l9) : new gnuip['create'](epagi, { 'onload': upsen, 'onerror': $_x0td, 'onCreate': function (o1r5m) {
          bkz4l9 = o1r5m, eia2gp['imgCache'][ipugn] = o1r5m;
        } });
    }, fmjr1;
  }(),
      gpsenu = function () {
    function klv4z() {}return pe2wa(klv4z, 'laya.wx.mini.MiniInput'), klv4z['_createInputElement'] = function () {
      igupen['_initInput'](igupen['area'] = o5jmr1['createElement']('textarea')), igupen['_initInput'](igupen['input'] = o5jmr1['createElement']('input')), igupen['inputContainer'] = o5jmr1['createElement']('div'), igupen['inputContainer']['style']['position'] = 'absolute', igupen['inputContainer']['style']['zIndex'] = 0x186a0, o5jmr1['container']['appendChild'](igupen['inputContainer']), igupen['inputContainer']['setPos'] = function (z6b9h, sh6n9) {
        igupen['inputContainer']['style']['left'] = z6b9h + 'px', igupen['inputContainer']['style']['top'] = sh6n9 + 'px';
      }, pneusg['stage']['on']('resize', null, klv4z['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k9hzb) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kz6b4['_soundClass'] = r85f1, kz6b4['_musicClass'] = r85f1, window['_videoClass'] = e2ipwa;
    }, klv4z['_onStageResize'] = function () {
      var h67usn = pneusg['stage']['_canvasTransform']['identity']();h67usn['scale'](o5jmr1['width'] / j5rm['canvas']['width'] / r8fw3a['getPixelRatio'](), o5jmr1['height'] / j5rm['canvas']['height'] / r8fw3a['getPixelRatio']());
    }, klv4z['wxinputFocus'] = function (uigepn) {
      var yvzl4b = igupen['inputElement']['target'];if (yvzl4b && !yvzl4b['editable']) return;u7['window']['wx']['offKeyboardConfirm'](), u7['window']['wx']['offKeyboardInput'](), u7['window']['wx']['showKeyboard']({ 'defaultValue': yvzl4b['text'], 'maxLength': yvzl4b['maxChars'], 'multiple': yvzl4b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tyl0v$) {}, 'fail': function (hsnu6) {} }), u7['window']['wx']['onKeyboardConfirm'](function (nushg7) {
        var geiap2 = nushg7 ? nushg7['value'] : '';yvzl4b['text'] = geiap2, yvzl4b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), u7['window']['wx']['onKeyboardInput'](function (fw28) {
        var dt$0_x = fw28 ? fw28['value'] : '';if (!yvzl4b['multiline']) {
          if (dt$0_x['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yvzl4b['text'] = dt$0_x, yvzl4b['event']('input');
      });
    }, klv4z['inputEnter'] = function () {
      igupen['inputElement']['target']['focus'] = ![];
    }, klv4z['wxinputblur'] = function () {
      klv4z['hideKeyboard']();
    }, klv4z['hideKeyboard'] = function () {
      u7['window']['wx']['offKeyboardConfirm'](), u7['window']['wx']['offKeyboardInput'](), u7['window']['wx']['hideKeyboard']({ 'success': function (a2f83) {
          console['log']('隐藏键盘');
        }, 'fail': function (wr85) {
          console['log']('隐藏键盘出错:' + (wr85 ? wr85['errMsg'] : ''));
        } });
    }, klv4z;
  }(),
      n7s6h9 = function () {
    function _x0ty$() {}pe2wa(_x0ty$, 'laya.wx.mini.MiniLoader');var dt_$ = _x0ty$['prototype'];return dt_$['load'] = function (sgun7, waf3, lbk4zv, $0vt, ngpsue) {
      lbk4zv === void 0x0 && (lbk4zv = !![]), ngpsue === void 0x0 && (ngpsue = ![]);var sghn7u = this;sghn7u['_url'] = sgun7;if (sgun7['indexOf']('data:image') === 0x0) sghn7u['_type'] = waf3 = 'image';else sghn7u['_type'] = waf3 || (waf3 = sghn7u['getTypeFromUrl'](sgun7));sghn7u['_cache'] = lbk4zv, sghn7u['_data'] = null;var eia2p = 'ascii';if (sgun7['indexOf']('.fnt') != -0x1) eia2p = 'utf8';else waf3 == 'arraybuffer' && (eia2p = '');;var rj51 = kbz9h6['getFileExtension'](sgun7);if (_x0ty$['_fileTypeArr']['indexOf'](rj51) != -0x1) u7['EnvConfig']['load']['call'](this, sgun7, waf3, lbk4zv, $0vt, ngpsue);else {
        if (!giupe['getFileInfo'](sgun7)) {
          if (sgun7['indexOf']('layaNativeDir/') != -0x1) {
            if (u7['isZiYu']) {
              var b4kzl = giupe['ziyuFileData'][sgun7];sghn7u['onLoaded'](b4kzl);return;
            } else {
              cosnole['log']('read read'), giupe['read'](sgun7, eia2p, new v4yzbl(_x0ty$, _x0ty$['onReadNativeCallBack'], [eia2p, sgun7, waf3, lbk4zv, $0vt, ngpsue, sghn7u]));return;
            }
          }if (y0xt$['rootPath'] == '') var ienu = sgun7;else ienu = sgun7['split'](y0xt$['rootPath'])[0x0];sgun7['indexOf']('http://') != -0x1 || sgun7['indexOf']('https://') != -0x1 ? u7['EnvConfig']['load']['call'](sghn7u, sgun7, waf3, lbk4zv, $0vt, ngpsue) : giupe['readFile'](ienu, eia2p, new v4yzbl(_x0ty$, _x0ty$['onReadNativeCallBack'], [eia2p, sgun7, waf3, lbk4zv, $0vt, ngpsue, sghn7u]), sgun7);
        } else u7['EnvConfig']['load']['call'](this, sgun7, waf3, lbk4zv, $0vt, ngpsue);
      }
    }, dt_$['resMgrLoad'] = function (fj83r5, frwa, xq$_d, segn, yl0v, sunhg7, sn7gup) {
      xq$_d === void 0x0 && (xq$_d = 0x0), segn === void 0x0 && (segn = ![]), yl0v === void 0x0 && (yl0v = ![]), sunhg7 === void 0x0 && (sunhg7 = 0x0), sn7gup === void 0x0 && (sn7gup = 0x3), fj83r5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fj83r5), u7['EnvConfig']['resMgrLoad'](fj83r5, (q_xd$, kh6z, geupsn) => {
        _x0ty$['prototype']['resMgrLoadCallBack'](q_xd$, kh6z, geupsn, frwa);
      }, xq$_d, segn, yl0v, sunhg7, sn7gup);
    }, dt_$['resMgrLoadCallBack'] = function (qd_t$, r1m5oj, h76b9k, a23fw8) {
      console['log']('buff:::', qd_t$, h76b9k, giupe['fileNativeDir'] + '///' + giupe['fileListName']), a23fw8(qd_t$, r1m5oj, h76b9k);
    }, dt_$['clearRes'] = function (tl$vy0, k4lvzb) {
      k4lvzb === void 0x0 && (k4lvzb = ![]);var npeus = this;npeus['clearRes'](tl$vy0, k4lvzb);var w32i8a = giupe['getFileInfo'](tl$vy0);if (w32i8a && (tl$vy0['indexOf']('http://') != -0x1 || tl$vy0['indexOf']('https://') != -0x1)) {
        var psung7 = w32i8a['md5'],
            wipae2 = giupe['getFileNativePath'](psung7);giupe['remove'](wipae2);
      }
    }, _x0ty$['onReadNativeCallBack'] = function (gpi2ae, pinue, i32aew, zk4lvb, $_qdtx, rjf385, _qt$xd, zk9lb4, $t_0x) {
      zk4lvb === void 0x0 && (zk4lvb = !![]), rjf385 === void 0x0 && (rjf385 = ![]), zk9lb4 === void 0x0 && (zk9lb4 = 0x0);if (!zk9lb4) {
        var uhgs7;if (i32aew == 'json' || i32aew == 'atlas') uhgs7 = u7['getJson']($t_0x['data']);else i32aew == 'xml' ? uhgs7 = kbz9h6['parseXMLFromString']($t_0x['data']) : uhgs7 = $t_0x['data'];_qt$xd['onLoaded'](uhgs7), !u7['isZiYu'] && u7['isPosMsgYu'] && i32aew != 'arraybuffer' && wx['postMessage']({ 'url': pinue, 'data': uhgs7, 'isLoad': !![] });
      } else zk9lb4 == 0x1 && u7['EnvConfig']['load']['call'](_qt$xd, pinue, i32aew, zk4lvb, $_qdtx, rjf385);
    }, j3fr5(_x0ty$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _x0ty$;
  }(),
      giupe = function (uip2e) {
    function w83ra() {
      w83ra['__super']['call'](this);;
    }return pe2wa(w83ra, 'laya.wx.mini.MiniFileMgr', uip2e), w83ra['isLoadFile'] = function (yblv) {
      return w83ra['_fileTypeArr']['indexOf'](yblv) != -0x1 ? !![] : ![];
    }, w83ra['getFileInfo'] = function (bz9kl4) {
      var vy$0lt = bz9kl4['split']('?')[0x0],
          jm15o = w83ra['filesListObj'][vy$0lt];if (jm15o == null) return null;else return jm15o;return null;
    }, w83ra['onFileUpdate'] = function (yblvz, aiwpe) {
      var f83rw = yblvz['split']('/'),
          z49k6 = f83rw[f83rw['length'] - 0x1],
          nueps = w83ra['getFileInfo'](aiwpe);if (nueps == null) w83ra['onSaveFile'](aiwpe, z49k6);else {
        if (nueps['readyUrl'] != aiwpe) w83ra['remove'](z49k6, aiwpe);
      }
    }, w83ra['exits'] = function (hn7sgu, w2a8) {
      var puige = w83ra['getFileNativePath'](hn7sgu);w83ra['fs']['getFileInfo']({ 'filePath': puige, 'success': function (k6h9z) {
          w2a8 != null && w2a8['runWith']([0x0, k6h9z]);
        }, 'fail': function ($d0_x) {
          w2a8 != null && w2a8['runWith']([0x1, $d0_x]);
        } });
    }, w83ra['read'] = function ($qxtd_, vklzb, wf3ra8, hbzk96) {
      vklzb === void 0x0 && (vklzb = 'ascill'), hbzk96 === void 0x0 && (hbzk96 = '');var a23f8;hbzk96 != '' ? a23f8 = w83ra['getFileNativePath']($qxtd_) : a23f8 = $qxtd_, w83ra['fs']['readFile']({ 'filePath': a23f8, 'encoding': vklzb, 'success': function (pie2aw) {
          wf3ra8 != null && wf3ra8['runWith']([0x0, pie2aw]);
        }, 'fail': function (w3ar8) {
          if (w3ar8 && hbzk96 != '') w83ra['down'](hbzk96, vklzb, wf3ra8, hbzk96);else wf3ra8 != null && wf3ra8['runWith']([0x1]);
        } });
    }, w83ra['readNativeFile'] = function (upgeni, gpa2ei) {
      w83ra['fs']['readFile']({ 'filePath': upgeni, 'encoding': '', 'success': function (gesn) {
          gpa2ei != null && gpa2ei['runWith']([0x0]);
        }, 'fail': function (e2a) {
          gpa2ei != null && gpa2ei['runWith']([0x1]);
        } });
    }, w83ra['down'] = function (gpaie2, l$4vy, klbz4, i2a8w) {
      l$4vy === void 0x0 && (l$4vy = 'ascill'), i2a8w === void 0x0 && (i2a8w = '');var sh967n = w83ra['getFileNativePath'](i2a8w),
          su7gh = w83ra['wxdown']({ 'url': gpaie2, 'filePath': sh967n, 'success': function (rw538f) {
          if (rw538f['statusCode'] === 0xc8) w83ra['readFile'](rw538f['filePath'], l$4vy, klbz4, i2a8w);
        }, 'fail': function (xq$td_) {
          klbz4 != null && klbz4['runWith']([0x1, xq$td_]);
        } });su7gh['onProgressUpdate'](function (epawi) {
        klbz4 != null && klbz4['runWith']([0x2, epawi['progress']]);
      });
    }, w83ra['readFile'] = function (pg7u, z9b64k, dqt$, w38f5) {
      z9b64k === void 0x0 && (z9b64k = 'ascill'), w38f5 === void 0x0 && (w38f5 = ''), w83ra['fs']['readFile']({ 'filePath': pg7u, 'encoding': z9b64k, 'success': function (vzk) {
          if (pg7u['indexOf']('http://') != -0x1 || pg7u['indexOf']('https://') != -0x1) w83ra['onFileUpdate'](pg7u, w38f5);dqt$ != null && dqt$['runWith']([0x0, vzk]);
        }, 'fail': function (ugpei) {
          if (ugpei) dqt$ != null && dqt$['runWith']([0x1, ugpei]);
        } });
    }, w83ra['downImg'] = function (k96zh, o5jrm1, f53w) {
      f53w === void 0x0 && (f53w = '');var e2a3 = w83ra['wxdown']({ 'url': k96zh, 'success': function (s7nugh) {
          s7nugh['statusCode'] === 0xc8 && w83ra['copyFile'](s7nugh['tempFilePath'], f53w, o5jrm1);
        }, 'fail': function (mj1f5r) {
          o5jrm1 != null && o5jrm1['runWith']([0x1, mj1f5r]);
        } });
    }, w83ra['copyFile'] = function (egin, $ytl0, pai) {
      var x$0yv = egin['split']('/'),
          r3fw85 = x$0yv[x$0yv['length'] - 0x1],
          eip2ug = $ytl0['split']('?')[0x0],
          ly0z = w83ra['getFileInfo']($ytl0),
          npei = w83ra['getFileNativePath'](r3fw85);w83ra['fs']['copyFile']({ 'srcPath': egin, 'destPath': npei, 'success': function (y4vzb) {
          if (!ly0z) w83ra['onSaveFile']($ytl0, r3fw85), pai != null && pai['runWith']([0x0]);else {
            if (ly0z['readyUrl'] != $ytl0) w83ra['remove'](r3fw85, $ytl0, pai);
          }
        }, 'fail': function (qd$tx) {
          pai != null && pai['runWith']([0x1, qd$tx]);
        } });
    }, w83ra['getFileNativePath'] = function (ty0$_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ty0$_;
    }, w83ra['remove'] = function (igape, d$0tx_, wf83r) {
      d$0tx_ === void 0x0 && (d$0tx_ = '');var h6sun7 = w83ra['getFileInfo'](d$0tx_),
          d$0_t = w83ra['getFileNativePath'](h6sun7['md5']);pneusg['loader']['clearRes'](h6sun7['readyUrl']), w83ra['fs']['unlink']({ 'filePath': d$0_t, 'success': function (igenpu) {
          if (d$0tx_ != '') w83ra['onSaveFile'](d$0tx_, igape);wf83r != null && wf83r['runWith']([0x0]);
        }, 'fail': function (rw8fa) {} });
    }, w83ra['onSaveFile'] = function (su67hn, r1om) {
      var y_t$0 = su67hn['split']('?')[0x0];w83ra['filesListObj'][y_t$0] = { 'md5': r1om, 'readyUrl': su67hn }, w83ra['fs']['writeFile']({ 'filePath': w83ra['fileNativeDir'] + '/' + w83ra['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w83ra['filesListObj']), 'success': function (dqtx$_) {
          console['log']('写入测试测试成功：', dqtx$_);
        }, 'fail': function (rf1mj5) {
          console['log']('写入测试测试失败：', rf1mj5);
        } });
    }, w83ra['existDir'] = function (sn7up, nh76su) {
      w83ra['fs']['mkdir']({ 'dirPath': sn7up, 'success': function (zkbh6) {
          nh76su != null && nh76su['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (x$ty0_) {
          if (x$ty0_['errMsg']['indexOf']('file already exists') != -0x1) w83ra['readSync'](w83ra['fileListName'], 'utf8', nh76su);else nh76su != null && nh76su['runWith']([0x1, x$ty0_]);
        } });
    }, w83ra['readSync'] = function (dt_$x, lyvbz, giepa2, r83j5f) {
      lyvbz === void 0x0 && (lyvbz = 'ascill'), r83j5f === void 0x0 && (r83j5f = '');var l$t0yv = w83ra['getFileNativePath'](dt_$x),
          nguesp;try {
        nguesp = w83ra['fs']['readFileSync'](l$t0yv), giepa2 != null && giepa2['runWith']([0x0, { 'data': nguesp }]);
      } catch (r5f3w8) {
        giepa2 != null && giepa2['runWith']([0x1]);
      }
    }, w83ra['readCache'] = function () {}, w83ra['writeCache'] = function (nuhg) {
      var _y$x = readyUrl['split']('?')[0x0];w83ra['filesListObj'][_y$x] = { 'md5': md5Name, 'readyUrl': readyUrl }, w83ra['fs']['writeFile']({ 'filePath': w83ra['fileNativeDir'] + '/' + w83ra['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w83ra['filesListObj']), 'success': function (kh9b76) {}, 'fail': function ($y_tx) {} });
    }, w83ra['setNativeFileDir'] = function (wpeia) {
      w83ra['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wpeia;
    }, w83ra['filesListObj'] = {}, w83ra['fileNativeDir'] = null, w83ra['fileListName'] = 'layaairfiles.txt', w83ra['ziyuFileData'] = {}, j3fr5(w83ra, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), w83ra;
  }(wa382),
      r85f1 = function (sgpn7u) {
    function y4l0zv() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], y4l0zv['__super']['call'](this), this['_sound'] = y4l0zv['_createSound'](), this['_chanell'] = new w58(this['_sound']);
    }pe2wa(y4l0zv, 'laya.wx.mini.MiniSound', sgpn7u);var zbyl4v = y4l0zv['prototype'];return zbyl4v['load'] = function (uh7gsn) {
      var j1r5fm = this;uh7gsn = y0xt$['formatURL'](uh7gsn), this['url'] = uh7gsn;if (y4l0zv['_audioCache'][uh7gsn]) {
        this['event']('complete');return;
      }function xd_0t() {
        if (y4l0zv['_null'] != undefined) j1r5fm['_sound']['onCanplay'](y4l0zv['_null']), j1r5fm['_sound']['onError'](y4l0zv['_null']);else try {
          j1r5fm['_sound']['onCanplay'](null), j1r5fm['_sound']['onError'](null), y4l0zv['_null'] = null;
        } catch (geu2i) {
          console['warn']('[wxmini] _clearSound:' + geu2i), j1r5fm['_sound']['onCanplay'](bhk79), j1r5fm['_sound']['onError'](bhk79), y4l0zv['_null'] = bhk79;
        }
      }function z4l() {
        pi2ew['loaded'] = !![], pi2ew['event']('complete'), y4l0zv['_audioCache'][pi2ew['url']] = pi2ew;
      }function hks796(td$x0) {
        console['error']('errCode=' + td$x0['errCode'] + '  errMsg=' + td$x0['errMsg']), pi2ew['event']('error');
      }function bhk79() {}this['_sound']['onCanplay'](z4l), this['_sound']['onError'](hks796), this['_sound']['src'] = uh7gsn;var pi2ew = this;
    }, zbyl4v['play'] = function (gnhus7, z64k9) {
      gnhus7 === void 0x0 && (gnhus7 = 0x0), z64k9 === void 0x0 && (z64k9 = 0x0);var a28iw, rjo15;if (this['url'] == kz6b4['_tMusic']) {
        if (!y4l0zv['_musicAudio']) y4l0zv['_musicAudio'] = this['_sound'];a28iw = y4l0zv['_musicAudio'], rjo15 = this['_chanell'];
      } else a28iw = this['_sound'], rjo15 = this['_chanell'];return a28iw['src'] = this['url'], a28iw['startTime'] = 0x0, rjo15['isStopped'] && (rjo15['url'] = this['url'], rjo15['loops'] = z64k9, rjo15['startTime'] = gnhus7, rjo15['play'](), kz6b4['addChannel'](rjo15)), rjo15;
    }, zbyl4v['dispose'] = function () {
      var bk469 = y4l0zv['_audioCache'][this['url']];bk469 && (bk469['src'] = '', delete y4l0zv['_audioCache'][this['url']]);
    }, nhs76(0x0, zbyl4v, 'duration', function () {
      return this['_sound']['duration'];
    }), y4l0zv['_createSound'] = function () {
      y4l0zv['_id']++;var f32aw = u7['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return f32aw;
    }, y4l0zv['_musicAudio'] = null, y4l0zv['_id'] = 0x0, y4l0zv['_audioCache'] = {}, y4l0zv['_null'] = undefined, y4l0zv;
  }(wa382),
      w58 = function (sgupen) {
    function upinge(_t0x$y) {
      this['_audio'] = null, this['_onEnd'] = null, upinge['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _t0x$y, this['_onEnd'] = kbz9h6['bind'](this['__onEnd'], this), _t0x$y['onEnded'](this['_onEnd']);
    }pe2wa(upinge, 'laya.wx.mini.MiniSoundChannel', sgupen);var zk9bh = upinge['prototype'];return zk9bh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (pneusg['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zk9bh['__onNull'] = function () {}, zk9bh['play'] = function () {
      this['isStopped'] = ![], kz6b4['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zk9bh['stop'] = function () {
      this['isStopped'] = !![], kz6b4['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, zk9bh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zk9bh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kz6b4['addChannel'](this), this['_audio']['play']();
    }, nhs76(0x0, zk9bh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), nhs76(0x0, zk9bh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), nhs76(0x0, zk9bh, 'volume', function () {
      return 0x1;
    }, function (usng7h) {}), upinge['_null'] = undefined, upinge;
  }(nu7gs),
      e2ipwa = function () {
    function k69s() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = u7['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }pe2wa(k69s, 'laya.wx.mini.MiniVideo');var pgnu7 = k69s['prototype'];return pgnu7['on'] = function (n7h6s9, rjf3, h6bz9) {
      if (n7h6s9 == 'loadedmetadata') this['onPlayFunc'] = h6bz9['bind'](rjf3), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else n7h6s9 == 'ended' && (this['onEndedFunC'] = h6bz9['bind'](rjf3), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, pgnu7['onTimeUpdateFunc'] = function (kb6h) {
      this['position'] = kb6h['position'], this['_duration'] = kb6h['duration'];
    }, pgnu7['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, pgnu7['onended'] = function (nh6u, epi2g) {
      this['onEndedFunC'] = epi2g['bind'](nh6u), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, pgnu7['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, pgnu7['off'] = function (wfr85, x$dq_t, bvlk) {
      if (wfr85 == 'loadedmetadata') this['onPlayFunc'] = bvlk['bind'](x$dq_t), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else wfr85 == 'ended' && (this['onEndedFunC'] = bvlk['bind'](x$dq_t), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, pgnu7['load'] = function (j5fr18) {
      if (!this['videoElement']) return;this['videoElement']['src'] = j5fr18;
    }, pgnu7['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, pgnu7['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, pgnu7['size'] = function (x_0d$t, mj1rf5) {
      if (!this['videoElement']) return;this['videoElement']['width'] = x_0d$t, this['videoElement']['height'] = mj1rf5;
    }, pgnu7['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, pgnu7['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, nhs76(0x0, pgnu7, 'duration', function () {
      return this['_duration'];
    }), nhs76(0x0, pgnu7, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (yvt0l$) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = yvt0l$;
    }), nhs76(0x0, pgnu7, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), nhs76(0x0, pgnu7, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), nhs76(0x0, pgnu7, 'ended', function () {
      return this['videoend'];
    }), nhs76(0x0, pgnu7, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function ($x_tqd) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = $x_tqd;
    }), nhs76(0x0, pgnu7, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (_0tx$d) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = _0tx$d;
    }), nhs76(0x0, pgnu7, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (xv0y) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = xv0y;
    }), nhs76(0x0, pgnu7, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), nhs76(0x0, pgnu7, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function ($lyv0) {
      if (!this['videoElement']) return;this['videoElement']['x'] = $lyv0;
    }), nhs76(0x0, pgnu7, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (lt$0) {
      if (!this['videoElement']) return;this['videoElement']['y'] = lt$0;
    }), nhs76(0x0, pgnu7, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), nhs76(0x0, pgnu7, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function ($vyt0l) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $vyt0l;
    }), nhs76(0x0, pgnu7, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (guine) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = guine;
    }), nhs76(0x0, pgnu7, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (ugspn7) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = ugspn7;
    }), k69s;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kh69bz in Laya) {
    var upgsn = Laya[kh69bz];upgsn && upgsn['__isclass'] && (exports[kh69bz] = upgsn);
  }
});