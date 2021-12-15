var o = wx.$U;
(function (window, document, fph3) {
  var $pfes = fph3['un'],
      z9x = fph3['uns'],
      y0r81b = fph3['static'],
      f3pj4 = fph3['class'],
      lw9x7 = fph3['getset'],
      i34mj = fph3['__newvec'],
      d92t = laya['utils']['Browser'],
      dz79g = laya['events']['Event'],
      ijqhom = laya['events']['EventDispatcher'],
      xowlq7 = laya['resource']['HTMLImage'],
      fu4pe$ = laya['utils']['Handler'],
      oihqm = laya['display']['Input'],
      ju3 = laya['net']['Loader'],
      gz7x9w = laya['maths']['Matrix'],
      dzw5g9 = laya['renders']['Render'],
      ackv = laya['utils']['RunDriver'],
      feus$p = laya['media']['Sound'],
      moh3 = laya['media']['SoundChannel'],
      ank_6v = laya['media']['SoundManager'],
      _cka6 = laya['display']['Stage'],
      vn_ksa = laya['net']['URL'],
      $fuesp = laya['utils']['Utils'],
      c60ak = function () {
    function joqmhi() {}return f3pj4(joqmhi, 'laya.wx.mini.MiniAdpter'), joqmhi['getJson'] = function (z5d29t) {
      return JSON['parse'](z5d29t);
    }, joqmhi['init'] = function (t952dz, fe34u) {
      t952dz === void 0x0 && (t952dz = ![]), fe34u === void 0x0 && (fe34u = ![]);if (joqmhi['_inited']) return;joqmhi['window'] = window;if (joqmhi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;joqmhi['_inited'] = !![], joqmhi['isZiYu'] = fe34u, joqmhi['isPosMsgYu'] = t952dz, joqmhi['EnvConfig'] = {}, !joqmhi['isZiYu'] && (fh43pj['setNativeFileDir']('/layaairGame'), fh43pj['existDir'](fh43pj['fileNativeDir'], fu4pe$['create'](joqmhi, joqmhi['onMkdirCallBack']))), joqmhi['window']['focus'] = function () {}, fph3['getUrlPath'] = function () {}, joqmhi['window']['logtime'] = function (u3jf4p) {}, joqmhi['window']['alertTimeLog'] = function (svkn$_) {}, joqmhi['window']['resetShareInfo'] = function () {}, joqmhi['window']['CanvasRenderingContext2D'] = function () {}, joqmhi['window']['CanvasRenderingContext2D']['prototype'] = joqmhi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], joqmhi['window']['document']['body']['appendChild'] = function () {}, joqmhi['EnvConfig']['pixelRatioInt'] = 0x0, ackv['getPixelRatio'] = joqmhi['pixelRatio'], joqmhi['_preCreateElement'] = d92t['createElement'], d92t['createElement'] = joqmhi['createElement'], ackv['createShaderCondition'] = joqmhi['createShaderCondition'], $fuesp['parseXMLFromString'] = joqmhi['parseXMLFromString'], oihqm['_createInputElement'] = uep3f4['_createInputElement'], joqmhi['EnvConfig']['load'] = ju3['prototype']['load'], ju3['prototype']['load'] = ck_6a['prototype']['load'], joqmhi['isZiYu'] && t952dz && wx['onMessage'](function (sknv$_) {
        sknv$_['isLoad'] && (fh43pj['ziyuFileData'][sknv$_['url']] = sknv$_['data']);
      });
    }, joqmhi['onMkdirCallBack'] = function (xomilq, z79dw) {
      if (!xomilq) fh43pj['filesListObj'] = JSON['parse'](z79dw['data']);
    }, joqmhi['pixelRatio'] = function () {
      if (!joqmhi['EnvConfig']['pixelRatioInt']) try {
        var k_v6 = wx['getSystemInfoSync']();return joqmhi['EnvConfig']['pixelRatioInt'] = k_v6['pixelRatio'], k_v6 = k_v6, k_v6['pixelRatio'];
      } catch (xz9w) {}return joqmhi['EnvConfig']['pixelRatioInt'];
    }, joqmhi['createElement'] = function (pj3fh) {
      if (pj3fh == 'canvas') {
        var mi4jh;return joqmhi['idx'] == 0x1 ? joqmhi['isZiYu'] ? (mi4jh = sharedCanvas, mi4jh['style'] = {}) : mi4jh = window['canvas'] : mi4jh = window['wx']['createCanvas'](), joqmhi['idx']++, mi4jh;
      } else {
        if (pj3fh == 'textarea' || pj3fh == 'input') return joqmhi['onCreateInput'](pj3fh);else {
          if (pj3fh == 'div') {
            var hoqmi = joqmhi['_preCreateElement'](pj3fh);return hoqmi['contains'] = function (xmiolq) {
              return null;
            }, hoqmi['removeChild'] = function (tzgd5) {}, hoqmi;
          } else return joqmhi['_preCreateElement'](pj3fh);
        }
      }
    }, joqmhi['onCreateInput'] = function (s$nkv) {
      var wqlo7x = joqmhi['_preCreateElement'](s$nkv);return wqlo7x['focus'] = uep3f4['wxinputFocus'], wqlo7x['blur'] = uep3f4['wxinputblur'], wqlo7x['style'] = {}, wqlo7x['value'] = 0x0, wqlo7x['parentElement'] = {}, wqlo7x['placeholder'] = {}, wqlo7x['type'] = {}, wqlo7x['setColor'] = function (efp43u) {}, wqlo7x['setType'] = function (j3mh4p) {}, wqlo7x['setFontFace'] = function (wz97xg) {}, wqlo7x['addEventListener'] = function (qlo7ix) {}, wqlo7x['contains'] = function (ih43mj) {
        return null;
      }, wqlo7x['removeChild'] = function (xqow7l) {}, wqlo7x;
    }, joqmhi['createShaderCondition'] = function (b018) {
      var lxg7w9 = this,
          gd9zw7 = function () {
        var xiq7ol = b018;return lxg7w9[b018['replace']('this.', '')];
      };return gd9zw7;
    }, joqmhi['EnvConfig'] = null, joqmhi['window'] = null, joqmhi['_preCreateElement'] = null, joqmhi['_inited'] = ![], joqmhi['wxRequest'] = null, joqmhi['systemInfo'] = null, joqmhi['version'] = '0.0.1', joqmhi['isZiYu'] = ![], joqmhi['isPosMsgYu'] = ![], joqmhi['parseXMLFromString'] = function (ksn_) {
      var qi7o, qhlo;ksn_ = ksn_['replace'](/>\s+</g, '><');try {
        qi7o = new window['Parser']['DOMParser']()['parseFromString'](ksn_, 'text/xml');
      } catch (z25t) {
        throw '需要引入xml解析库文件';
      }return qi7o;
    }, joqmhi['idx'] = 0x1, joqmhi;
  }(),
      nuvs = function () {
    function w9gl7x() {}f3pj4(w9gl7x, 'laya.wx.mini.MiniImage');var ihol = w9gl7x['prototype'];return ihol['_loadImage'] = function (nf$su) {
      var ue4fp$ = this,
          xz7g9 = ![];nf$su['indexOf']('layaNativeDir/') == -0x1 && (xz7g9 = !![], nf$su = vn_ksa['formatURL'](nf$su));if (!fh43pj['getFileInfo'](nf$su)) {
        if (nf$su['indexOf']('http://') != -0x1 || nf$su['indexOf']('https://') != -0x1) fh43pj['downImg'](nf$su, new fu4pe$(w9gl7x, w9gl7x['onDownImgCallBack'], [nf$su, ue4fp$]), nf$su);else w9gl7x['onCreateImage'](nf$su, ue4fp$, !![]);
      } else w9gl7x['onCreateImage'](nf$su, ue4fp$, !xz7g9);
    }, w9gl7x['onDownImgCallBack'] = function (oxql7w, zd529, mqolx) {
      if (!mqolx) w9gl7x['onCreateImage'](oxql7w, zd529);else zd529['onError'](null);
    }, w9gl7x['onCreateImage'] = function (jmp3h, nes$_, anks_) {
      anks_ === void 0x0 && (anks_ = ![]);var nk$;if (!anks_) {
        var k6n_va = fh43pj['getFileInfo'](jmp3h),
            r0b81y = k6n_va['md5'];nk$ = fh43pj['getFileNativePath'](r0b81y);
      } else nk$ = jmp3h;if (nes$_['imgCache'] == null) nes$_['imgCache'] = {};var _rk6ac;function jh4f() {
        _rk6ac['onload'] = null, _rk6ac['onerror'] = null, delete nes$_['imgCache'][jmp3h];
      };var svne$u = function () {
        jh4f(), nes$_['onLoaded'](_rk6ac);
      },
          jih3m4 = function () {
        jh4f(), nes$_['event']('error', 'Load image failed');
      };nes$_['_type'] == 'nativeimage' ? (_rk6ac = new d92t['window']['Image'](), _rk6ac['crossOrigin'] = '', _rk6ac['onload'] = svne$u, _rk6ac['onerror'] = jih3m4, _rk6ac['src'] = nk$, nes$_['imgCache'][jmp3h] = _rk6ac) : new xowlq7['create'](nk$, { 'onload': svne$u, 'onerror': jih3m4, 'onCreate': function (yrb801) {
          _rk6ac = yrb801, nes$_['imgCache'][jmp3h] = yrb801;
        } });
    }, w9gl7x;
  }(),
      uep3f4 = function () {
    function g7qxw() {}return f3pj4(g7qxw, 'laya.wx.mini.MiniInput'), g7qxw['_createInputElement'] = function () {
      oihqm['_initInput'](oihqm['area'] = d92t['createElement']('textarea')), oihqm['_initInput'](oihqm['input'] = d92t['createElement']('input')), oihqm['inputContainer'] = d92t['createElement']('div'), oihqm['inputContainer']['style']['position'] = 'absolute', oihqm['inputContainer']['style']['zIndex'] = 0x186a0, d92t['container']['appendChild'](oihqm['inputContainer']), oihqm['inputContainer']['setPos'] = function (c180rb, jhqio) {
        oihqm['inputContainer']['style']['left'] = c180rb + 'px', oihqm['inputContainer']['style']['top'] = jhqio + 'px';
      }, fph3['stage']['on']('resize', null, g7qxw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hmqoj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ank_6v['_soundClass'] = h3iom, ank_6v['_musicClass'] = h3iom;
    }, g7qxw['_onStageResize'] = function () {
      var se$nfu = fph3['stage']['_canvasTransform']['identity']();se$nfu['scale'](d92t['width'] / dzw5g9['canvas']['width'] / ackv['getPixelRatio'](), d92t['height'] / dzw5g9['canvas']['height'] / ackv['getPixelRatio']());
    }, g7qxw['wxinputFocus'] = function (lqimo) {
      var dgw95z = oihqm['inputElement']['target'];if (dgw95z && !dgw95z['editable']) return;c60ak['window']['wx']['offKeyboardConfirm'](), c60ak['window']['wx']['offKeyboardInput'](), c60ak['window']['wx']['showKeyboard']({ 'defaultValue': dgw95z['text'], 'maxLength': dgw95z['maxChars'], 'multiple': dgw95z['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hmoqij) {}, 'fail': function (jo3h) {} }), c60ak['window']['wx']['onKeyboardConfirm'](function (zg5td) {
        var lxqw = zg5td ? zg5td['value'] : '';dgw95z['text'] = lxqw, dgw95z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), c60ak['window']['wx']['onKeyboardInput'](function (ank6v_) {
        var mhil = ank6v_ ? ank6v_['value'] : '';if (!dgw95z['multiline']) {
          if (mhil['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }dgw95z['text'] = mhil, dgw95z['event']('input');
      });
    }, g7qxw['inputEnter'] = function () {
      oihqm['inputElement']['target']['focus'] = ![];
    }, g7qxw['wxinputblur'] = function () {
      g7qxw['hideKeyboard']();
    }, g7qxw['hideKeyboard'] = function () {
      c60ak['window']['wx']['offKeyboardConfirm'](), c60ak['window']['wx']['offKeyboardInput'](), c60ak['window']['wx']['hideKeyboard']({ 'success': function (j3fh4p) {
          console['log']('隐藏键盘');
        }, 'fail': function (oiqx) {
          console['log']('隐藏键盘出错:' + (oiqx ? oiqx['errMsg'] : ''));
        } });
    }, g7qxw;
  }(),
      ck_6a = function () {
    function s_n$() {}f3pj4(s_n$, 'laya.wx.mini.MiniLoader');var iql7xo = s_n$['prototype'];return iql7xo['load'] = function (gxzw97, owlx7, j4f3p, g7z9xw, m4pjh3) {
      j4f3p === void 0x0 && (j4f3p = !![]), m4pjh3 === void 0x0 && (m4pjh3 = ![]);var gw79l = this;gw79l['_url'] = gxzw97;if (gxzw97['indexOf']('data:image') === 0x0) gw79l['_type'] = owlx7 = 'image';else gw79l['_type'] = owlx7 || (owlx7 = gw79l['getTypeFromUrl'](gxzw97));gw79l['_cache'] = j4f3p, gw79l['_data'] = null;var zd9g7 = 'ascii';if (gxzw97['indexOf']('.fnt') != -0x1) zd9g7 = 'utf8';else owlx7 == 'arraybuffer' && (zd9g7 = '');;var lwq7o = $fuesp['getFileExtension'](gxzw97);if (s_n$['_fileTypeArr']['indexOf'](lwq7o) != -0x1) c60ak['EnvConfig']['load']['call'](this, gxzw97, owlx7, j4f3p, g7z9xw, m4pjh3);else {
        if (!fh43pj['getFileInfo'](gxzw97)) {
          if (gxzw97['indexOf']('layaNativeDir/') != -0x1) {
            if (c60ak['isZiYu']) {
              var fj3h4 = fh43pj['ziyuFileData'][gxzw97];gw79l['onLoaded'](fj3h4);return;
            } else {
              cosnole['log']('read read'), fh43pj['read'](gxzw97, zd9g7, new fu4pe$(s_n$, s_n$['onReadNativeCallBack'], [zd9g7, gxzw97, owlx7, j4f3p, g7z9xw, m4pjh3, gw79l]));return;
            }
          }if (vn_ksa['rootPath'] == '') var j3fhp = gxzw97;else j3fhp = gxzw97['split'](vn_ksa['rootPath'])[0x0];gxzw97['indexOf']('http://') != -0x1 || gxzw97['indexOf']('https://') != -0x1 ? c60ak['EnvConfig']['load']['call'](gw79l, gxzw97, owlx7, j4f3p, g7z9xw, m4pjh3) : fh43pj['readFile'](j3fhp, zd9g7, new fu4pe$(s_n$, s_n$['onReadNativeCallBack'], [zd9g7, gxzw97, owlx7, j4f3p, g7z9xw, m4pjh3, gw79l]), gxzw97);
        } else c60ak['EnvConfig']['load']['call'](this, gxzw97, owlx7, j4f3p, g7z9xw, m4pjh3);
      }
    }, iql7xo['resMgrLoad'] = function (jhiomq, $4pf, _a6cv, ufe$p4, jfh43p, a_kvn, a_ckr) {
      _a6cv === void 0x0 && (_a6cv = 0x0), ufe$p4 === void 0x0 && (ufe$p4 = ![]), jfh43p === void 0x0 && (jfh43p = ![]), a_kvn === void 0x0 && (a_kvn = 0x0), a_ckr === void 0x0 && (a_ckr = 0x3), jhiomq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jhiomq), c60ak['EnvConfig']['resMgrLoad'](jhiomq, (j3pmh4, evsn$_, z5gd9w) => {
        s_n$['prototype']['resMgrLoadCallBack'](j3pmh4, evsn$_, z5gd9w, $4pf);
      }, _a6cv, ufe$p4, jfh43p, a_kvn, a_ckr);
    }, iql7xo['resMgrLoadCallBack'] = function (h4jp, mloiqx, r6ack_, h3jmio) {
      console['log']('buff:::', h4jp, r6ack_, fh43pj['fileNativeDir'] + '///' + fh43pj['fileListName']), h3jmio(h4jp, mloiqx, r6ack_);
    }, iql7xo['clearRes'] = function (i4mjh3, yrb180) {
      yrb180 === void 0x0 && (yrb180 = ![]);var xw7gql = this;xw7gql['clearRes'](i4mjh3, yrb180);var mqhio = fh43pj['getFileInfo'](i4mjh3);if (mqhio && (i4mjh3['indexOf']('http://') != -0x1 || i4mjh3['indexOf']('https://') != -0x1)) {
        var h3j4i = mqhio['md5'],
            f$e4 = fh43pj['getFileNativePath'](h3j4i);fh43pj['remove'](f$e4);
      }
    }, s_n$['onReadNativeCallBack'] = function (vs$une, ufj3, dz7g, hmi43j, qw7xgl, dzt9g5, g7zw, _vnk$, fpj34u) {
      hmi43j === void 0x0 && (hmi43j = !![]), dzt9g5 === void 0x0 && (dzt9g5 = ![]), _vnk$ === void 0x0 && (_vnk$ = 0x0);if (!_vnk$) {
        var _vn$e;if (dz7g == 'json' || dz7g == 'atlas') _vn$e = c60ak['getJson'](fpj34u['data']);else dz7g == 'xml' ? _vn$e = $fuesp['parseXMLFromString'](fpj34u['data']) : _vn$e = fpj34u['data'];g7zw['onLoaded'](_vn$e), !c60ak['isZiYu'] && c60ak['isPosMsgYu'] && dz7g != 'arraybuffer' && wx['postMessage']({ 'url': ufj3, 'data': _vn$e, 'isLoad': !![] });
      } else _vnk$ == 0x1 && c60ak['EnvConfig']['load']['call'](g7zw, ufj3, dz7g, hmi43j, qw7xgl, dzt9g5);
    }, y0r81b(s_n$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), s_n$;
  }(),
      fh43pj = function (d92t5) {
    function ef4u$p() {
      ef4u$p['__super']['call'](this);;
    }return f3pj4(ef4u$p, 'laya.wx.mini.MiniFileMgr', d92t5), ef4u$p['isLoadFile'] = function (pf$es) {
      return ef4u$p['_fileTypeArr']['indexOf'](pf$es) != -0x1 ? !![] : ![];
    }, ef4u$p['getFileInfo'] = function (ca86r) {
      var r0by18 = ca86r['split']('?')[0x0],
          v_6ca = ef4u$p['filesListObj'][r0by18];if (v_6ca == null) return null;else return v_6ca;return null;
    }, ef4u$p['onFileUpdate'] = function (_kvnas, ar80c) {
      var cvka = _kvnas['split']('/'),
          yr0b1 = cvka[cvka['length'] - 0x1],
          imj43h = ef4u$p['getFileInfo'](ar80c);if (imj43h == null) ef4u$p['onSaveFile'](ar80c, yr0b1);else {
        if (imj43h['readyUrl'] != ar80c) ef4u$p['remove'](yr0b1, ar80c);
      }
    }, ef4u$p['exits'] = function (j3u4fp, xl7g9w) {
      var t25 = ef4u$p['getFileNativePath'](j3u4fp);ef4u$p['fs']['getFileInfo']({ 'filePath': t25, 'success': function (wlo7q) {
          xl7g9w != null && xl7g9w['runWith']([0x0, wlo7q]);
        }, 'fail': function (lgq) {
          xl7g9w != null && xl7g9w['runWith']([0x1, lgq]);
        } });
    }, ef4u$p['read'] = function (mi3jh, hji43, gz9dw, hmp4j) {
      hji43 === void 0x0 && (hji43 = 'ascill'), hmp4j === void 0x0 && (hmp4j = '');var b8cr01;hmp4j != '' ? b8cr01 = ef4u$p['getFileNativePath'](mi3jh) : b8cr01 = mi3jh, ef4u$p['fs']['readFile']({ 'filePath': b8cr01, 'encoding': hji43, 'success': function (n_se$v) {
          gz9dw != null && gz9dw['runWith']([0x0, n_se$v]);
        }, 'fail': function (fsnu$) {
          if (fsnu$ && hmp4j != '') ef4u$p['down'](hmp4j, hji43, gz9dw, hmp4j);else gz9dw != null && gz9dw['runWith']([0x1]);
        } });
    }, ef4u$p['readNativeFile'] = function (hmqol, mhij43) {
      ef4u$p['fs']['readFile']({ 'filePath': hmqol, 'encoding': '', 'success': function (_snkv$) {
          mhij43 != null && mhij43['runWith']([0x0]);
        }, 'fail': function (z9dg) {
          mhij43 != null && mhij43['runWith']([0x1]);
        } });
    }, ef4u$p['down'] = function (ue43fp, w7ox, ka0, qmol) {
      w7ox === void 0x0 && (w7ox = 'ascill'), qmol === void 0x0 && (qmol = '');var pf$e4u = ef4u$p['getFileNativePath'](qmol),
          seufp = ef4u$p['wxdown']({ 'url': ue43fp, 'filePath': pf$e4u, 'success': function (uvens$) {
          if (uvens$['statusCode'] === 0xc8) ef4u$p['readFile'](uvens$['filePath'], w7ox, ka0, qmol);
        }, 'fail': function (u4$f) {
          ka0 != null && ka0['runWith']([0x1, u4$f]);
        } });seufp['onProgressUpdate'](function (ac0r) {
        ka0 != null && ka0['runWith']([0x2, ac0r['progress']]);
      });
    }, ef4u$p['readFile'] = function (xqloi7, _cka6r, _a6ckr, $_) {
      _cka6r === void 0x0 && (_cka6r = 'ascill'), $_ === void 0x0 && ($_ = ''), ef4u$p['fs']['readFile']({ 'filePath': xqloi7, 'encoding': _cka6r, 'success': function (ojhiq) {
          if (xqloi7['indexOf']('http://') != -0x1 || xqloi7['indexOf']('https://') != -0x1) ef4u$p['onFileUpdate'](xqloi7, $_);_a6ckr != null && _a6ckr['runWith']([0x0, ojhiq]);
        }, 'fail': function (esn$uf) {
          if (esn$uf) _a6ckr != null && _a6ckr['runWith']([0x1, esn$uf]);
        } });
    }, ef4u$p['downImg'] = function (c68r1, i7oq, t2d59) {
      t2d59 === void 0x0 && (t2d59 = '');var z9td5g = ef4u$p['wxdown']({ 'url': c68r1, 'success': function (zt92d) {
          zt92d['statusCode'] === 0xc8 && ef4u$p['copyFile'](zt92d['tempFilePath'], t2d59, i7oq);
        }, 'fail': function (gdz79) {
          i7oq != null && i7oq['runWith']([0x1, gdz79]);
        } });
    }, ef4u$p['copyFile'] = function (ph4mj, rcb08, f3jp4h) {
      var dw5 = ph4mj['split']('/'),
          se_vn = dw5[dw5['length'] - 0x1],
          jph4f3 = rcb08['split']('?')[0x0],
          va_ks = ef4u$p['getFileInfo'](rcb08),
          x9g7w = ef4u$p['getFileNativePath'](se_vn);ef4u$p['fs']['copyFile']({ 'srcPath': ph4mj, 'destPath': x9g7w, 'success': function (xolqmi) {
          if (!va_ks) ef4u$p['onSaveFile'](rcb08, se_vn), f3jp4h != null && f3jp4h['runWith']([0x0]);else {
            if (va_ks['readyUrl'] != rcb08) ef4u$p['remove'](se_vn, rcb08, f3jp4h);
          }
        }, 'fail': function (hmj3i4) {
          f3jp4h != null && f3jp4h['runWith']([0x1, hmj3i4]);
        } });
    }, ef4u$p['getFileNativePath'] = function (i3mjh4) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + i3mjh4;
    }, ef4u$p['remove'] = function (eu4fp, k6_an, jqm) {
      k6_an === void 0x0 && (k6_an = '');var br1c0 = ef4u$p['getFileInfo'](k6_an),
          rc6a8 = ef4u$p['getFileNativePath'](br1c0['md5']);fph3['loader']['clearRes'](br1c0['readyUrl']), ef4u$p['fs']['unlink']({ 'filePath': rc6a8, 'success': function (mjo3) {
          if (k6_an != '') ef4u$p['onSaveFile'](k6_an, eu4fp);jqm != null && jqm['runWith']([0x0]);
        }, 'fail': function (k$_s) {} });
    }, ef4u$p['onSaveFile'] = function (dt92, a08r6) {
      var n$vesu = dt92['split']('?')[0x0];ef4u$p['filesListObj'][n$vesu] = { 'md5': a08r6, 'readyUrl': dt92 }, ef4u$p['fs']['writeFile']({ 'filePath': ef4u$p['fileNativeDir'] + '/' + ef4u$p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ef4u$p['filesListObj']), 'success': function (cak0r) {
          console['log']('写入测试测试成功：', cak0r);
        }, 'fail': function (_krc6) {
          console['log']('写入测试测试失败：', _krc6);
        } });
    }, ef4u$p['existDir'] = function (_$vnsk, hjm4p) {
      ef4u$p['fs']['mkdir']({ 'dirPath': _$vnsk, 'success': function (hlmq) {
          hjm4p != null && hjm4p['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ankv6_) {
          if (ankv6_['errMsg']['indexOf']('file already exists') != -0x1) ef4u$p['readSync'](ef4u$p['fileListName'], 'utf8', hjm4p);else hjm4p != null && hjm4p['runWith']([0x1, ankv6_]);
        } });
    }, ef4u$p['readSync'] = function (x9wzg, mh3p4, ilqo, b81c0) {
      mh3p4 === void 0x0 && (mh3p4 = 'ascill'), b81c0 === void 0x0 && (b81c0 = '');var moj3hi = ef4u$p['getFileNativePath'](x9wzg),
          dt529z;try {
        dt529z = ef4u$p['fs']['readFileSync'](moj3hi), ilqo != null && ilqo['runWith']([0x0, { 'data': dt529z }]);
      } catch (u$nes) {
        ilqo != null && ilqo['runWith']([0x1]);
      }
    }, ef4u$p['readCache'] = function () {}, ef4u$p['writeCache'] = function (q7xwo) {
      var ac = readyUrl['split']('?')[0x0];ef4u$p['filesListObj'][ac] = { 'md5': md5Name, 'readyUrl': readyUrl }, ef4u$p['fs']['writeFile']({ 'filePath': ef4u$p['fileNativeDir'] + '/' + ef4u$p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ef4u$p['filesListObj']), 'success': function (ackv_6) {}, 'fail': function ($vn_e) {} });
    }, ef4u$p['setNativeFileDir'] = function (br8c10) {
      ef4u$p['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + br8c10;
    }, ef4u$p['filesListObj'] = {}, ef4u$p['fileNativeDir'] = null, ef4u$p['fileListName'] = 'layaairfiles.txt', ef4u$p['ziyuFileData'] = {}, y0r81b(ef4u$p, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ef4u$p;
  }(ijqhom),
      h3iom = function (ioqjm) {
    function fnuse$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fnuse$['__super']['call'](this), this['_sound'] = fnuse$['_createSound']();
    }f3pj4(fnuse$, 'laya.wx.mini.MiniSound', ioqjm);var z79w = fnuse$['prototype'];return z79w['load'] = function ($4ufpe) {
      var ne$_v = this;$4ufpe = vn_ksa['formatURL']($4ufpe), this['url'] = $4ufpe;if (fnuse$['_audioCache'][$4ufpe]) {
        this['event']('complete');return;
      }function g9wzx7() {
        if (fnuse$['_null'] != undefined) ne$_v['_sound']['onCanplay'](fnuse$['_null']), ne$_v['_sound']['onError'](fnuse$['_null']);else try {
          ne$_v['_sound']['onCanplay'](null), ne$_v['_sound']['onError'](null), fnuse$['_null'] = null;
        } catch (x7oiql) {
          console['warn']('[wxmini] _clearSound:' + x7oiql), ne$_v['_sound']['onCanplay'](jomqi), ne$_v['_sound']['onError'](jomqi), fnuse$['_null'] = jomqi;
        }
      }function y180() {
        g9wzx7(), gw7xz['loaded'] = !![], gw7xz['event']('complete'), fnuse$['_audioCache'][gw7xz['url']] = gw7xz;
      }function _ks$vn(ac6_kv) {
        console['error']('errCode=' + ac6_kv['errCode'] + '  errMsg=' + ac6_kv['errMsg']), g9wzx7(), gw7xz['event']('error');
      }function jomqi() {}this['_sound']['onCanplay'](y180), this['_sound']['onError'](_ks$vn), this['_sound']['src'] = $4ufpe;var gw7xz = this;
    }, z79w['play'] = function (l7ixqo, wgl9x) {
      l7ixqo === void 0x0 && (l7ixqo = 0x0), wgl9x === void 0x0 && (wgl9x = 0x0);var z9gw7x;if (this['url'] == ank_6v['_tMusic']) {
        if (!fnuse$['_musicAudio']) fnuse$['_musicAudio'] = fnuse$['_createSound']();z9gw7x = fnuse$['_musicAudio'];
      } else z9gw7x = fnuse$['_createSound']();z9gw7x['src'] = this['url'];var gd97 = new qxloim(z9gw7x);return gd97['url'] = this['url'], gd97['loops'] = wgl9x, gd97['startTime'] = l7ixqo, gd97['play'](), ank_6v['addChannel'](gd97), gd97;
    }, z79w['dispose'] = function () {
      var miolqx = fnuse$['_audioCache'][this['url']];miolqx && (miolqx['src'] = '', delete fnuse$['_audioCache'][this['url']]);
    }, lw9x7(0x0, z79w, 'duration', function () {
      return this['_sound']['duration'];
    }), fnuse$['_createSound'] = function () {
      return fnuse$['_id']++, c60ak['window']['wx']['createInnerAudioContext']();
    }, fnuse$['_musicAudio'] = null, fnuse$['_id'] = 0x0, fnuse$['_audioCache'] = {}, fnuse$['_null'] = undefined, fnuse$;
  }(ijqhom),
      qxloim = function (fuse$) {
    function z9g7x(jfph) {
      this['_audio'] = null, this['_onEnd'] = null, z9g7x['__super']['call'](this), this['_audio'] = jfph, this['_onEnd'] = $fuesp['bind'](this['__onEnd'], this), jfph['onEnded'](this['_onEnd']);
    }f3pj4(z9g7x, 'laya.wx.mini.MiniSoundChannel', fuse$);var rk6 = z9g7x['prototype'];return rk6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fph3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rk6['__onNull'] = function () {}, rk6['play'] = function () {
      this['isStopped'] = ![], ank_6v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rk6['stop'] = function () {
      this['isStopped'] = !![], ank_6v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (z9g7x['_null'] != undefined) this['_audio']['onEnded'](z9g7x['_null']);else try {
        this['_audio']['onEnded'](null), z9g7x['_null'] = null;
      } catch (c018rb) {
        console['warn']('[wxmini] stop:' + c018rb), this['_audio']['onEnded']($fuesp['bind'](this['__onNull'], this)), z9g7x['_null'] = $fuesp['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, rk6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rk6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ank_6v['addChannel'](this), this['_audio']['play']();
    }, lw9x7(0x0, rk6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), lw9x7(0x0, rk6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), lw9x7(0x0, rk6, 'volume', function () {
      return 0x1;
    }, function (k0arc) {}), z9g7x['_null'] = undefined, z9g7x;
  }(moh3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var e3pu4 in Laya) {
    var i3jhom = Laya[e3pu4];i3jhom && i3jhom['__isclass'] && (exports[e3pu4] = i3jhom);
  }
});