var v = wx.$d;
(function (window, document, zq0f) {
  var mei6u = zq0f['un'],
      jn64_h = zq0f['uns'],
      bxqza = zq0f['static'],
      ehidm = zq0f['class'],
      v$pr = zq0f['getset'],
      gqkz0 = zq0f['__newvec'],
      qugkft = laya['utils']['Browser'],
      qk0f = laya['events']['Event'],
      bax1 = laya['events']['EventDispatcher'],
      n_j943 = laya['resource']['HTMLImage'],
      $7vwyp = laya['utils']['Handler'],
      $y7pvw = laya['display']['Input'],
      w81xr = laya['net']['Loader'],
      r1bxa = laya['maths']['Matrix'],
      kdutif = laya['renders']['Render'],
      ab8xr1 = laya['utils']['RunDriver'],
      eudtif = laya['media']['Sound'],
      fgiut = laya['media']['SoundChannel'],
      p1rvw = laya['media']['SoundManager'],
      kgqtuf = laya['display']['Stage'],
      nh46mj = laya['net']['URL'],
      mi6hd = laya['utils']['Utils'],
      edu6im = function () {
    function medjh6() {}return ehidm(medjh6, 'laya.wx.mini.MiniAdpter'), medjh6['getJson'] = function (p7$wr) {
      return JSON['parse'](p7$wr);
    }, medjh6['init'] = function (p8, q0ftk) {
      p8 === void 0x0 && (p8 = ![]), q0ftk === void 0x0 && (q0ftk = ![]);if (medjh6['_inited']) return;medjh6['window'] = window;if (medjh6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;medjh6['_inited'] = !![], medjh6['isZiYu'] = q0ftk, medjh6['isPosMsgYu'] = p8, medjh6['EnvConfig'] = {}, !medjh6['isZiYu'] && (qtgk0f['setNativeFileDir']('/layaairGame'), qtgk0f['existDir'](qtgk0f['fileNativeDir'], $7vwyp['create'](medjh6, medjh6['onMkdirCallBack']))), medjh6['window']['focus'] = function () {}, zq0f['getUrlPath'] = function () {}, medjh6['window']['logtime'] = function (aqzkg0) {}, medjh6['window']['alertTimeLog'] = function (zgb0aq) {}, medjh6['window']['resetShareInfo'] = function () {}, medjh6['window']['CanvasRenderingContext2D'] = function () {}, medjh6['window']['CanvasRenderingContext2D']['prototype'] = medjh6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], medjh6['window']['document']['body']['appendChild'] = function () {}, medjh6['EnvConfig']['pixelRatioInt'] = 0x0, ab8xr1['getPixelRatio'] = medjh6['pixelRatio'], medjh6['_preCreateElement'] = qugkft['createElement'], qugkft['createElement'] = medjh6['createElement'], ab8xr1['createShaderCondition'] = medjh6['createShaderCondition'], mi6hd['parseXMLFromString'] = medjh6['parseXMLFromString'], $y7pvw['_createInputElement'] = o49_c3['_createInputElement'], medjh6['EnvConfig']['load'] = w81xr['prototype']['load'], w81xr['prototype']['load'] = udktf['prototype']['load'], medjh6['isZiYu'] && p8 && wx['onMessage'](function (oc52) {
        oc52['isLoad'] && (qtgk0f['ziyuFileData'][oc52['url']] = oc52['data']);
      });
    }, medjh6['onMkdirCallBack'] = function (zbx0q, $l7vyp) {
      if (!zbx0q) qtgk0f['filesListObj'] = JSON['parse']($l7vyp['data']);
    }, medjh6['pixelRatio'] = function () {
      if (!medjh6['EnvConfig']['pixelRatioInt']) try {
        var $1p8 = wx['getSystemInfoSync']();return medjh6['EnvConfig']['pixelRatioInt'] = $1p8['pixelRatio'], $1p8 = $1p8, $1p8['pixelRatio'];
      } catch (mh6ide) {}return medjh6['EnvConfig']['pixelRatioInt'];
    }, medjh6['createElement'] = function (ufgkit) {
      if (ufgkit == 'canvas') {
        var j3n_94;return medjh6['idx'] == 0x1 ? medjh6['isZiYu'] ? (j3n_94 = sharedCanvas, j3n_94['style'] = {}) : j3n_94 = window['canvas'] : j3n_94 = window['wx']['createCanvas'](), medjh6['idx']++, j3n_94;
      } else {
        if (ufgkit == 'textarea' || ufgkit == 'input') return medjh6['onCreateInput'](ufgkit);else {
          if (ufgkit == 'div') {
            var igufkt = medjh6['_preCreateElement'](ufgkit);return igufkt['contains'] = function (ikuftg) {
              return null;
            }, igufkt['removeChild'] = function (fitkgu) {}, igufkt;
          } else return medjh6['_preCreateElement'](ufgkit);
        }
      }
    }, medjh6['onCreateInput'] = function (de6i) {
      var edmu = medjh6['_preCreateElement'](de6i);return edmu['focus'] = o49_c3['wxinputFocus'], edmu['blur'] = o49_c3['wxinputblur'], edmu['style'] = {}, edmu['value'] = 0x0, edmu['parentElement'] = {}, edmu['placeholder'] = {}, edmu['type'] = {}, edmu['setColor'] = function (b18arx) {}, edmu['setType'] = function (r8xw1) {}, edmu['setFontFace'] = function (muti) {}, edmu['addEventListener'] = function (hmn) {}, edmu['contains'] = function (wy7$pv) {
        return null;
      }, edmu['removeChild'] = function (vyw7p) {}, edmu;
    }, medjh6['createShaderCondition'] = function (m6hn4j) {
      var vp$r1 = this,
          difue = function () {
        var bx8rw1 = m6hn4j;return vp$r1[m6hn4j['replace']('this.', '')];
      };return difue;
    }, medjh6['EnvConfig'] = null, medjh6['window'] = null, medjh6['_preCreateElement'] = null, medjh6['_inited'] = ![], medjh6['wxRequest'] = null, medjh6['systemInfo'] = null, medjh6['version'] = '0.0.1', medjh6['isZiYu'] = ![], medjh6['isPosMsgYu'] = ![], medjh6['parseXMLFromString'] = function (kdift) {
      var qz0agk, c53o92;kdift = kdift['replace'](/>\s+</g, '><');try {
        qz0agk = new window['Parser']['DOMParser']()['parseFromString'](kdift, 'text/xml');
      } catch ($1pwr8) {
        throw '需要引入xml解析库文件';
      }return qz0agk;
    }, medjh6['idx'] = 0x1, medjh6;
  }(),
      ftk0qg = function () {
    function agkzq0() {}ehidm(agkzq0, 'laya.wx.mini.MiniImage');var pw$r1 = agkzq0['prototype'];return pw$r1['_loadImage'] = function (pwv1$) {
      var bzqx = this,
          wp7vr = ![];pwv1$['indexOf']('layaNativeDir/') == -0x1 && (wp7vr = !![], pwv1$ = nh46mj['formatURL'](pwv1$));if (!qtgk0f['getFileInfo'](pwv1$)) {
        if (pwv1$['indexOf']('http://') != -0x1 || pwv1$['indexOf']('https://') != -0x1) qtgk0f['downImg'](pwv1$, new $7vwyp(agkzq0, agkzq0['onDownImgCallBack'], [pwv1$, bzqx]), pwv1$);else agkzq0['onCreateImage'](pwv1$, bzqx, !![]);
      } else agkzq0['onCreateImage'](pwv1$, bzqx, !wp7vr);
    }, agkzq0['onDownImgCallBack'] = function (zx8b0a, mej6, hdem6) {
      if (!hdem6) agkzq0['onCreateImage'](zx8b0a, mej6);else mej6['onError'](null);
    }, agkzq0['onCreateImage'] = function (muidt, fkt0, $1wvp) {
      $1wvp === void 0x0 && ($1wvp = ![]);var ueim6d;if (!$1wvp) {
        var kzaq = qtgk0f['getFileInfo'](muidt),
            eu6mdi = kzaq['md5'];ueim6d = qtgk0f['getFileNativePath'](eu6mdi);
      } else ueim6d = muidt;if (fkt0['imgCache'] == null) fkt0['imgCache'] = {};var qgk0;function kga0q() {
        qgk0['onload'] = null, qgk0['onerror'] = null, delete fkt0['imgCache'][muidt];
      };var rp1vw$ = function () {
        kga0q(), fkt0['onLoaded'](qgk0);
      },
          wrx = function () {
        kga0q(), fkt0['event']('error', 'Load image failed');
      };fkt0['_type'] == 'nativeimage' ? (qgk0 = new qugkft['window']['Image'](), qgk0['crossOrigin'] = '', qgk0['onload'] = rp1vw$, qgk0['onerror'] = wrx, qgk0['src'] = ueim6d, fkt0['imgCache'][muidt] = qgk0) : new n_j943['create'](ueim6d, { 'onload': rp1vw$, 'onerror': wrx, 'onCreate': function (o4c_) {
          qgk0 = o4c_, fkt0['imgCache'][muidt] = o4c_;
        } });
    }, agkzq0;
  }(),
      o49_c3 = function () {
    function med6u() {}return ehidm(med6u, 'laya.wx.mini.MiniInput'), med6u['_createInputElement'] = function () {
      $y7pvw['_initInput']($y7pvw['area'] = qugkft['createElement']('textarea')), $y7pvw['_initInput']($y7pvw['input'] = qugkft['createElement']('input')), $y7pvw['inputContainer'] = qugkft['createElement']('div'), $y7pvw['inputContainer']['style']['position'] = 'absolute', $y7pvw['inputContainer']['style']['zIndex'] = 0x186a0, qugkft['container']['appendChild']($y7pvw['inputContainer']), $y7pvw['inputContainer']['setPos'] = function (r18$pw, n4j_6h) {
        $y7pvw['inputContainer']['style']['left'] = r18$pw + 'px', $y7pvw['inputContainer']['style']['top'] = n4j_6h + 'px';
      }, zq0f['stage']['on']('resize', null, med6u['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tudme) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), p1rvw['_soundClass'] = k0qfgt, p1rvw['_musicClass'] = k0qfgt, window['_videoClass'] = $8xrw1;
    }, med6u['_onStageResize'] = function () {
      var rv7wp$ = zq0f['stage']['_canvasTransform']['identity']();rv7wp$['scale'](qugkft['width'] / kdutif['canvas']['width'] / ab8xr1['getPixelRatio'](), qugkft['height'] / kdutif['canvas']['height'] / ab8xr1['getPixelRatio']());
    }, med6u['wxinputFocus'] = function (p7$y) {
      var rbw8x1 = $y7pvw['inputElement']['target'];if (rbw8x1 && !rbw8x1['editable']) return;edu6im['window']['wx']['offKeyboardConfirm'](), edu6im['window']['wx']['offKeyboardInput'](), edu6im['window']['wx']['showKeyboard']({ 'defaultValue': rbw8x1['text'], 'maxLength': rbw8x1['maxChars'], 'multiple': rbw8x1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (l$vpy7) {}, 'fail': function ($v7ypl) {} }), edu6im['window']['wx']['onKeyboardConfirm'](function (ftude) {
        var gfuk = ftude ? ftude['value'] : '';rbw8x1['text'] = gfuk, rbw8x1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), edu6im['window']['wx']['onKeyboardInput'](function (c93_) {
        var eiduft = c93_ ? c93_['value'] : '';if (!rbw8x1['multiline']) {
          if (eiduft['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }rbw8x1['text'] = eiduft, rbw8x1['event']('input');
      });
    }, med6u['inputEnter'] = function () {
      $y7pvw['inputElement']['target']['focus'] = ![];
    }, med6u['wxinputblur'] = function () {
      med6u['hideKeyboard']();
    }, med6u['hideKeyboard'] = function () {
      edu6im['window']['wx']['offKeyboardConfirm'](), edu6im['window']['wx']['offKeyboardInput'](), edu6im['window']['wx']['hideKeyboard']({ 'success': function (v$7) {
          console['log']('隐藏键盘');
        }, 'fail': function (_c35o9) {
          console['log']('隐藏键盘出错:' + (_c35o9 ? _c35o9['errMsg'] : ''));
        } });
    }, med6u;
  }(),
      udktf = function () {
    function jh49n_() {}ehidm(jh49n_, 'laya.wx.mini.MiniLoader');var e6hmdi = jh49n_['prototype'];return e6hmdi['load'] = function (wr1x$, detufi, zxa81b, zgk0, n4h) {
      zxa81b === void 0x0 && (zxa81b = !![]), n4h === void 0x0 && (n4h = ![]);var rw1x8$ = this;rw1x8$['_url'] = wr1x$;if (wr1x$['indexOf']('data:image') === 0x0) rw1x8$['_type'] = detufi = 'image';else rw1x8$['_type'] = detufi || (detufi = rw1x8$['getTypeFromUrl'](wr1x$));rw1x8$['_cache'] = zxa81b, rw1x8$['_data'] = null;var $7ywp = 'ascii';if (wr1x$['indexOf']('.fnt') != -0x1) $7ywp = 'utf8';else detufi == 'arraybuffer' && ($7ywp = '');;var j4n93_ = mi6hd['getFileExtension'](wr1x$);if (jh49n_['_fileTypeArr']['indexOf'](j4n93_) != -0x1) edu6im['EnvConfig']['load']['call'](this, wr1x$, detufi, zxa81b, zgk0, n4h);else {
        if (!qtgk0f['getFileInfo'](wr1x$)) {
          if (wr1x$['indexOf']('layaNativeDir/') != -0x1) {
            if (edu6im['isZiYu']) {
              var gkzaq0 = qtgk0f['ziyuFileData'][wr1x$];rw1x8$['onLoaded'](gkzaq0);return;
            } else {
              cosnole['log']('read read'), qtgk0f['read'](wr1x$, $7ywp, new $7vwyp(jh49n_, jh49n_['onReadNativeCallBack'], [$7ywp, wr1x$, detufi, zxa81b, zgk0, n4h, rw1x8$]));return;
            }
          }if (nh46mj['rootPath'] == '') var nc49_3 = wr1x$;else nc49_3 = wr1x$['split'](nh46mj['rootPath'])[0x0];wr1x$['indexOf']('http://') != -0x1 || wr1x$['indexOf']('https://') != -0x1 ? edu6im['EnvConfig']['load']['call'](rw1x8$, wr1x$, detufi, zxa81b, zgk0, n4h) : qtgk0f['readFile'](nc49_3, $7ywp, new $7vwyp(jh49n_, jh49n_['onReadNativeCallBack'], [$7ywp, wr1x$, detufi, zxa81b, zgk0, n4h, rw1x8$]), wr1x$);
        } else edu6im['EnvConfig']['load']['call'](this, wr1x$, detufi, zxa81b, zgk0, n4h);
      }
    }, e6hmdi['resMgrLoad'] = function (fguq, uei6dm, nhj_49, mhnje, x$18, ehn6jm, c3_4o) {
      nhj_49 === void 0x0 && (nhj_49 = 0x0), mhnje === void 0x0 && (mhnje = ![]), x$18 === void 0x0 && (x$18 = ![]), ehn6jm === void 0x0 && (ehn6jm = 0x0), c3_4o === void 0x0 && (c3_4o = 0x3), fguq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fguq), edu6im['EnvConfig']['resMgrLoad'](fguq, (a0qbx, gukfit, dftui) => {
        jh49n_['prototype']['resMgrLoadCallBack'](a0qbx, gukfit, dftui, uei6dm);
      }, nhj_49, mhnje, x$18, ehn6jm, c3_4o);
    }, e6hmdi['resMgrLoadCallBack'] = function (c9o32, j6ehnm, mnh6e, p81wr$) {
      console['log']('buff:::', c9o32, mnh6e, qtgk0f['fileNativeDir'] + '///' + qtgk0f['fileListName']), p81wr$(c9o32, j6ehnm, mnh6e);
    }, e6hmdi['clearRes'] = function (nmh64, pw1r$) {
      pw1r$ === void 0x0 && (pw1r$ = ![]);var jm46n = this;jm46n['clearRes'](nmh64, pw1r$);var ukfgit = qtgk0f['getFileInfo'](nmh64);if (ukfgit && (nmh64['indexOf']('http://') != -0x1 || nmh64['indexOf']('https://') != -0x1)) {
        var tuefdi = ukfgit['md5'],
            edmui = qtgk0f['getFileNativePath'](tuefdi);qtgk0f['remove'](edmui);
      }
    }, jh49n_['onReadNativeCallBack'] = function (c95o_3, x81r, n_h49, ejd6mh, xaz1b, v7ywp, dj6mh, nhj64_, h6edm) {
      ejd6mh === void 0x0 && (ejd6mh = !![]), v7ywp === void 0x0 && (v7ywp = ![]), nhj64_ === void 0x0 && (nhj64_ = 0x0);if (!nhj64_) {
        var tgq;if (n_h49 == 'json' || n_h49 == 'atlas') tgq = edu6im['getJson'](h6edm['data']);else n_h49 == 'xml' ? tgq = mi6hd['parseXMLFromString'](h6edm['data']) : tgq = h6edm['data'];dj6mh['onLoaded'](tgq), !edu6im['isZiYu'] && edu6im['isPosMsgYu'] && n_h49 != 'arraybuffer' && wx['postMessage']({ 'url': x81r, 'data': tgq, 'isLoad': !![] });
      } else nhj64_ == 0x1 && edu6im['EnvConfig']['load']['call'](dj6mh, x81r, n_h49, ejd6mh, xaz1b, v7ywp);
    }, bxqza(jh49n_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jh49n_;
  }(),
      qtgk0f = function (c_943n) {
    function hjn6me() {
      hjn6me['__super']['call'](this);;
    }return ehidm(hjn6me, 'laya.wx.mini.MiniFileMgr', c_943n), hjn6me['isLoadFile'] = function (jn4m6h) {
      return hjn6me['_fileTypeArr']['indexOf'](jn4m6h) != -0x1 ? !![] : ![];
    }, hjn6me['getFileInfo'] = function (xbr8w) {
      var iugkft = xbr8w['split']('?')[0x0],
          ej6md = hjn6me['filesListObj'][iugkft];if (ej6md == null) return null;else return ej6md;return null;
    }, hjn6me['onFileUpdate'] = function (vr1$wp, $1xwr) {
      var detuif = vr1$wp['split']('/'),
          $vw1p = detuif[detuif['length'] - 0x1],
          e6dium = hjn6me['getFileInfo']($1xwr);if (e6dium == null) hjn6me['onSaveFile']($1xwr, $vw1p);else {
        if (e6dium['readyUrl'] != $1xwr) hjn6me['remove']($vw1p, $1xwr);
      }
    }, hjn6me['exits'] = function (zba08x, mhd6i) {
      var qzxa0b = hjn6me['getFileNativePath'](zba08x);hjn6me['fs']['getFileInfo']({ 'filePath': qzxa0b, 'success': function (z0kgf) {
          mhd6i != null && mhd6i['runWith']([0x0, z0kgf]);
        }, 'fail': function (tkufq) {
          mhd6i != null && mhd6i['runWith']([0x1, tkufq]);
        } });
    }, hjn6me['read'] = function (djhm6, hm46j, baqgz0, v$wpr7) {
      hm46j === void 0x0 && (hm46j = 'ascill'), v$wpr7 === void 0x0 && (v$wpr7 = '');var d6mei;v$wpr7 != '' ? d6mei = hjn6me['getFileNativePath'](djhm6) : d6mei = djhm6, hjn6me['fs']['readFile']({ 'filePath': d6mei, 'encoding': hm46j, 'success': function (_94cn) {
          baqgz0 != null && baqgz0['runWith']([0x0, _94cn]);
        }, 'fail': function (l7$y) {
          if (l7$y && v$wpr7 != '') hjn6me['down'](v$wpr7, hm46j, baqgz0, v$wpr7);else baqgz0 != null && baqgz0['runWith']([0x1]);
        } });
    }, hjn6me['readNativeFile'] = function (eduft, _3c9n4) {
      hjn6me['fs']['readFile']({ 'filePath': eduft, 'encoding': '', 'success': function (n_4j9) {
          _3c9n4 != null && _3c9n4['runWith']([0x0]);
        }, 'fail': function (gzk0aq) {
          _3c9n4 != null && _3c9n4['runWith']([0x1]);
        } });
    }, hjn6me['down'] = function (x8ba0, xb8z, n9_3j4, idm6eu) {
      xb8z === void 0x0 && (xb8z = 'ascill'), idm6eu === void 0x0 && (idm6eu = '');var j9n4_ = hjn6me['getFileNativePath'](idm6eu),
          h6jde = hjn6me['wxdown']({ 'url': x8ba0, 'filePath': j9n4_, 'success': function (iuetfd) {
          if (iuetfd['statusCode'] === 0xc8) hjn6me['readFile'](iuetfd['filePath'], xb8z, n9_3j4, idm6eu);
        }, 'fail': function (_n394j) {
          n9_3j4 != null && n9_3j4['runWith']([0x1, _n394j]);
        } });h6jde['onProgressUpdate'](function (nc93) {
        n9_3j4 != null && n9_3j4['runWith']([0x2, nc93['progress']]);
      });
    }, hjn6me['readFile'] = function (ie6umd, ktui, zgqb, fqgt0) {
      ktui === void 0x0 && (ktui = 'ascill'), fqgt0 === void 0x0 && (fqgt0 = ''), hjn6me['fs']['readFile']({ 'filePath': ie6umd, 'encoding': ktui, 'success': function (mudti) {
          if (ie6umd['indexOf']('http://') != -0x1 || ie6umd['indexOf']('https://') != -0x1) hjn6me['onFileUpdate'](ie6umd, fqgt0);zgqb != null && zgqb['runWith']([0x0, mudti]);
        }, 'fail': function (wb8xr) {
          if (wb8xr) zgqb != null && zgqb['runWith']([0x1, wb8xr]);
        } });
    }, hjn6me['downImg'] = function (j4m6, $ywv, j93n_4) {
      j93n_4 === void 0x0 && (j93n_4 = '');var axbz8 = hjn6me['wxdown']({ 'url': j4m6, 'success': function (nj4_93) {
          nj4_93['statusCode'] === 0xc8 && hjn6me['copyFile'](nj4_93['tempFilePath'], j93n_4, $ywv);
        }, 'fail': function (gqkaz0) {
          $ywv != null && $ywv['runWith']([0x1, gqkaz0]);
        } });
    }, hjn6me['copyFile'] = function (w$pvr7, ugfqtk, p1wr$8) {
      var pvwr$ = w$pvr7['split']('/'),
          _co3 = pvwr$[pvwr$['length'] - 0x1],
          qxb0z = ugfqtk['split']('?')[0x0],
          _34co9 = hjn6me['getFileInfo'](ugfqtk),
          xb80z = hjn6me['getFileNativePath'](_co3);hjn6me['fs']['copyFile']({ 'srcPath': w$pvr7, 'destPath': xb80z, 'success': function (x1ra) {
          if (!_34co9) hjn6me['onSaveFile'](ugfqtk, _co3), p1wr$8 != null && p1wr$8['runWith']([0x0]);else {
            if (_34co9['readyUrl'] != ugfqtk) hjn6me['remove'](_co3, ugfqtk, p1wr$8);
          }
        }, 'fail': function (ehm) {
          p1wr$8 != null && p1wr$8['runWith']([0x1, ehm]);
        } });
    }, hjn6me['getFileNativePath'] = function ($xw1r8) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $xw1r8;
    }, hjn6me['remove'] = function (xw8b, xaz81b, emdiut) {
      xaz81b === void 0x0 && (xaz81b = '');var igt = hjn6me['getFileInfo'](xaz81b),
          gk0qtf = hjn6me['getFileNativePath'](igt['md5']);zq0f['loader']['clearRes'](igt['readyUrl']), hjn6me['fs']['unlink']({ 'filePath': gk0qtf, 'success': function (zfg0kq) {
          if (xaz81b != '') hjn6me['onSaveFile'](xaz81b, xw8b);emdiut != null && emdiut['runWith']([0x0]);
        }, 'fail': function (hn6mje) {} });
    }, hjn6me['onSaveFile'] = function (kgfi, $vr1wp) {
      var $7wv = kgfi['split']('?')[0x0];hjn6me['filesListObj'][$7wv] = { 'md5': $vr1wp, 'readyUrl': kgfi }, hjn6me['fs']['writeFile']({ 'filePath': hjn6me['fileNativeDir'] + '/' + hjn6me['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hjn6me['filesListObj']), 'success': function (qzg0ab) {
          console['log']('写入测试测试成功：', qzg0ab);
        }, 'fail': function ($rw7) {
          console['log']('写入测试测试失败：', $rw7);
        } });
    }, hjn6me['existDir'] = function (dj, r$1wp8) {
      hjn6me['fs']['mkdir']({ 'dirPath': dj, 'success': function (o9c) {
          r$1wp8 != null && r$1wp8['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (uifed) {
          if (uifed['errMsg']['indexOf']('file already exists') != -0x1) hjn6me['readSync'](hjn6me['fileListName'], 'utf8', r$1wp8);else r$1wp8 != null && r$1wp8['runWith']([0x1, uifed]);
        } });
    }, hjn6me['readSync'] = function (h6nj_4, p7w$vy, bx1rw8, _49n3c) {
      p7w$vy === void 0x0 && (p7w$vy = 'ascill'), _49n3c === void 0x0 && (_49n3c = '');var w$7vr = hjn6me['getFileNativePath'](h6nj_4),
          $ypv;try {
        $ypv = hjn6me['fs']['readFileSync'](w$7vr), bx1rw8 != null && bx1rw8['runWith']([0x0, { 'data': $ypv }]);
      } catch (zbx0a8) {
        bx1rw8 != null && bx1rw8['runWith']([0x1]);
      }
    }, hjn6me['readCache'] = function () {}, hjn6me['writeCache'] = function (ifuet) {
      var $yl = readyUrl['split']('?')[0x0];hjn6me['filesListObj'][$yl] = { 'md5': md5Name, 'readyUrl': readyUrl }, hjn6me['fs']['writeFile']({ 'filePath': hjn6me['fileNativeDir'] + '/' + hjn6me['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hjn6me['filesListObj']), 'success': function (dm6ei) {}, 'fail': function (wrx8b1) {} });
    }, hjn6me['setNativeFileDir'] = function (w7r$p) {
      hjn6me['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w7r$p;
    }, hjn6me['filesListObj'] = {}, hjn6me['fileNativeDir'] = null, hjn6me['fileListName'] = 'layaairfiles.txt', hjn6me['ziyuFileData'] = {}, bxqza(hjn6me, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), hjn6me;
  }(bax1),
      k0qfgt = function (emhjd6) {
    function r1p$() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], r1p$['__super']['call'](this), this['_sound'] = r1p$['_createSound'](), this['_chanell'] = new x8bwr1(this['_sound']);
    }ehidm(r1p$, 'laya.wx.mini.MiniSound', emhjd6);var w7yp$ = r1p$['prototype'];return w7yp$['load'] = function (iftdk) {
      var z0gkqf = this;iftdk = nh46mj['formatURL'](iftdk), this['url'] = iftdk;if (r1p$['_audioCache'][iftdk]) {
        this['event']('complete');return;
      }function za0xq() {
        if (r1p$['_null'] != undefined) z0gkqf['_sound']['onCanplay'](r1p$['_null']), z0gkqf['_sound']['onError'](r1p$['_null']);else try {
          z0gkqf['_sound']['onCanplay'](null), z0gkqf['_sound']['onError'](null), r1p$['_null'] = null;
        } catch (gtifuk) {
          console['warn']('[wxmini] _clearSound:' + gtifuk), z0gkqf['_sound']['onCanplay'](xqzba0), z0gkqf['_sound']['onError'](xqzba0), r1p$['_null'] = xqzba0;
        }
      }function qzab() {
        h4_n9j['loaded'] = !![], h4_n9j['event']('complete'), r1p$['_audioCache'][h4_n9j['url']] = h4_n9j;
      }function dfik(fiukdt) {
        console['error']('errCode=' + fiukdt['errCode'] + '  errMsg=' + fiukdt['errMsg']), h4_n9j['event']('error');
      }function xqzba0() {}this['_sound']['onCanplay'](qzab), this['_sound']['onError'](dfik), this['_sound']['src'] = iftdk;var h4_n9j = this;
    }, w7yp$['play'] = function (iuedft, tfieud) {
      iuedft === void 0x0 && (iuedft = 0x0), tfieud === void 0x0 && (tfieud = 0x0);var qkftg0, mt;if (this['url'] == p1rvw['_tMusic']) {
        if (!r1p$['_musicAudio']) r1p$['_musicAudio'] = this['_sound'];qkftg0 = r1p$['_musicAudio'], mt = this['_chanell'];
      } else qkftg0 = this['_sound'], mt = this['_chanell'];return qkftg0['src'] = this['url'], qkftg0['startTime'] = 0x0, mt['isStopped'] && (mt['url'] = this['url'], mt['loops'] = tfieud, mt['startTime'] = iuedft, mt['play'](), p1rvw['addChannel'](mt)), mt;
    }, w7yp$['dispose'] = function () {
      var _oc = r1p$['_audioCache'][this['url']];_oc && (_oc['src'] = '', delete r1p$['_audioCache'][this['url']]);
    }, v$pr(0x0, w7yp$, 'duration', function () {
      return this['_sound']['duration'];
    }), r1p$['_createSound'] = function () {
      r1p$['_id']++;var bgza0q = edu6im['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return bgza0q;
    }, r1p$['_musicAudio'] = null, r1p$['_id'] = 0x0, r1p$['_audioCache'] = {}, r1p$['_null'] = undefined, r1p$;
  }(bax1),
      x8bwr1 = function (fkgti) {
    function fuqktg(_h6jn) {
      this['_audio'] = null, this['_onEnd'] = null, fuqktg['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _h6jn, this['_onEnd'] = mi6hd['bind'](this['__onEnd'], this), _h6jn['onEnded'](this['_onEnd']);
    }ehidm(fuqktg, 'laya.wx.mini.MiniSoundChannel', fkgti);var n9h4_j = fuqktg['prototype'];return n9h4_j['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zq0f['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, n9h4_j['__onNull'] = function () {}, n9h4_j['play'] = function () {
      this['isStopped'] = ![], p1rvw['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, n9h4_j['stop'] = function () {
      this['isStopped'] = !![], p1rvw['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, n9h4_j['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, n9h4_j['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], p1rvw['addChannel'](this), this['_audio']['play']();
    }, v$pr(0x0, n9h4_j, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), v$pr(0x0, n9h4_j, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), v$pr(0x0, n9h4_j, 'volume', function () {
      return 0x1;
    }, function (eufdt) {}), fuqktg['_null'] = undefined, fuqktg;
  }(fgiut),
      $8xrw1 = function () {
    function wv$r7() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = edu6im['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }ehidm(wv$r7, 'laya.wx.mini.MiniVideo');var r7wvp$ = wv$r7['prototype'];return r7wvp$['on'] = function (l7$pv, _4jn39, v$rw1p) {
      if (l7$pv == 'loadedmetadata') this['onPlayFunc'] = v$rw1p['bind'](_4jn39), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else l7$pv == 'ended' && (this['onEndedFunC'] = v$rw1p['bind'](_4jn39), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, r7wvp$['onTimeUpdateFunc'] = function (abzx1) {
      this['position'] = abzx1['position'], this['_duration'] = abzx1['duration'];
    }, r7wvp$['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, r7wvp$['onended'] = function (m6njhe, $vpw1r) {
      this['onEndedFunC'] = $vpw1r['bind'](m6njhe), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, r7wvp$['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, r7wvp$['off'] = function (_6h4n, pv$7l, ufkt) {
      if (_6h4n == 'loadedmetadata') this['onPlayFunc'] = ufkt['bind'](pv$7l), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _6h4n == 'ended' && (this['onEndedFunC'] = ufkt['bind'](pv$7l), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, r7wvp$['load'] = function (md6e) {
      if (!this['videoElement']) return;this['videoElement']['src'] = md6e;
    }, r7wvp$['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, r7wvp$['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, r7wvp$['size'] = function (qgzfk0, i6deh) {
      if (!this['videoElement']) return;this['videoElement']['width'] = qgzfk0, this['videoElement']['height'] = i6deh;
    }, r7wvp$['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, r7wvp$['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, v$pr(0x0, r7wvp$, 'duration', function () {
      return this['_duration'];
    }), v$pr(0x0, r7wvp$, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (ejn6) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = ejn6;
    }), v$pr(0x0, r7wvp$, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), v$pr(0x0, r7wvp$, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), v$pr(0x0, r7wvp$, 'ended', function () {
      return this['videoend'];
    }), v$pr(0x0, r7wvp$, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (demt) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = demt;
    }), v$pr(0x0, r7wvp$, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (tqkfug) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = tqkfug;
    }), v$pr(0x0, r7wvp$, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (rp1v$) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = rp1v$;
    }), v$pr(0x0, r7wvp$, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), v$pr(0x0, r7wvp$, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (edfi) {
      if (!this['videoElement']) return;this['videoElement']['x'] = edfi;
    }), v$pr(0x0, r7wvp$, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (j43_) {
      if (!this['videoElement']) return;this['videoElement']['y'] = j43_;
    }), v$pr(0x0, r7wvp$, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), v$pr(0x0, r7wvp$, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (fqtkg) {
      if (!this['videoElement']) return;this['videoElement']['src'] = fqtkg;
    }), v$pr(0x0, r7wvp$, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (kqfug) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = kqfug;
    }), v$pr(0x0, r7wvp$, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (j93n4_) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = j93n4_;
    }), wv$r7;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var o953c2 in Laya) {
    var _nh94j = Laya[o953c2];_nh94j && _nh94j['__isclass'] && (exports[o953c2] = _nh94j);
  }
});