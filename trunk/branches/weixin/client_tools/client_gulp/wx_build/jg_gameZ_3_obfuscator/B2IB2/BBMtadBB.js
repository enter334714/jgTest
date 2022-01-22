var D = wx.$b;
(function (window, document, zy0u) {
  var nujy0i = zy0u['un'],
      qkgl7 = zy0u['uns'],
      cymu = zy0u['static'],
      vw1c = zy0u['class'],
      tvwcp = zy0u['getset'],
      ium0z = zy0u['__newvec'],
      tc1wmz = laya['utils']['Browser'],
      ijnu04 = laya['events']['Event'],
      _vhpw = laya['events']['EventDispatcher'],
      zc1twm = laya['resource']['HTMLImage'],
      ujyn = laya['utils']['Handler'],
      s9do = laya['display']['Input'],
      od8l6 = laya['net']['Loader'],
      l68k = laya['maths']['Matrix'],
      kql7o = laya['renders']['Render'],
      n40jiu = laya['utils']['RunDriver'],
      uczmyt = laya['media']['Sound'],
      yz0mu = laya['media']['SoundChannel'],
      i5j4n = laya['media']['SoundManager'],
      _8r = laya['display']['Stage'],
      h_rvp2 = laya['net']['URL'],
      _9h2rs = laya['utils']['Utils'],
      ol67kx = function () {
    function m1cztw() {}return vw1c(m1cztw, 'laya.wx.mini.MiniAdpter'), m1cztw['getJson'] = function (k6d8o) {
      return JSON['parse'](k6d8o);
    }, m1cztw['init'] = function (nuji04, yutzi) {
      nuji04 === void 0x0 && (nuji04 = ![]), yutzi === void 0x0 && (yutzi = ![]);if (m1cztw['_inited']) return;m1cztw['window'] = window;if (m1cztw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;m1cztw['_inited'] = !![], m1cztw['isZiYu'] = yutzi, m1cztw['isPosMsgYu'] = nuji04, m1cztw['EnvConfig'] = {}, !m1cztw['isZiYu'] && (j$450['setNativeFileDir']('/layaairGame'), j$450['existDir'](j$450['fileNativeDir'], ujyn['create'](m1cztw, m1cztw['onMkdirCallBack']))), m1cztw['window']['focus'] = function () {}, zy0u['getUrlPath'] = function () {}, m1cztw['window']['logtime'] = function (wp_vh2) {}, m1cztw['window']['alertTimeLog'] = function (c1vh) {}, m1cztw['window']['resetShareInfo'] = function () {}, m1cztw['window']['CanvasRenderingContext2D'] = function () {}, m1cztw['window']['CanvasRenderingContext2D']['prototype'] = m1cztw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], m1cztw['window']['document']['body']['appendChild'] = function () {}, m1cztw['EnvConfig']['pixelRatioInt'] = 0x0, n40jiu['getPixelRatio'] = m1cztw['pixelRatio'], m1cztw['_preCreateElement'] = tc1wmz['createElement'], tc1wmz['createElement'] = m1cztw['createElement'], n40jiu['createShaderCondition'] = m1cztw['createShaderCondition'], _9h2rs['parseXMLFromString'] = m1cztw['parseXMLFromString'], s9do['_createInputElement'] = j$an5['_createInputElement'], m1cztw['EnvConfig']['load'] = od8l6['prototype']['load'], od8l6['prototype']['load'] = wph_['prototype']['load'], m1cztw['isZiYu'] && nuji04 && wx['onMessage'](function (xdo6k) {
        xdo6k['isLoad'] && (j$450['ziyuFileData'][xdo6k['url']] = xdo6k['data']);
      });
    }, m1cztw['onMkdirCallBack'] = function (wp_2v, uizny0) {
      if (!wp_2v) j$450['filesListObj'] = JSON['parse'](uizny0['data']);
    }, m1cztw['pixelRatio'] = function () {
      if (!m1cztw['EnvConfig']['pixelRatioInt']) try {
        var e4fa5 = wx['getSystemInfoSync']();return m1cztw['EnvConfig']['pixelRatioInt'] = e4fa5['pixelRatio'], e4fa5 = e4fa5, e4fa5['pixelRatio'];
      } catch (w2_vhp) {}return m1cztw['EnvConfig']['pixelRatioInt'];
    }, m1cztw['createElement'] = function (v2h_9) {
      if (v2h_9 == 'canvas') {
        var gkx73;return m1cztw['idx'] == 0x1 ? m1cztw['isZiYu'] ? (gkx73 = sharedCanvas, gkx73['style'] = {}) : gkx73 = window['canvas'] : gkx73 = window['wx']['createCanvas'](), m1cztw['idx']++, gkx73;
      } else {
        if (v2h_9 == 'textarea' || v2h_9 == 'input') return m1cztw['onCreateInput'](v2h_9);else {
          if (v2h_9 == 'div') {
            var zn0iu = m1cztw['_preCreateElement'](v2h_9);return zn0iu['contains'] = function (wc1zm) {
              return null;
            }, zn0iu['removeChild'] = function (s6d98o) {}, zn0iu;
          } else return m1cztw['_preCreateElement'](v2h_9);
        }
      }
    }, m1cztw['onCreateInput'] = function (tz1) {
      var e4af$5 = m1cztw['_preCreateElement'](tz1);return e4af$5['focus'] = j$an5['wxinputFocus'], e4af$5['blur'] = j$an5['wxinputblur'], e4af$5['style'] = {}, e4af$5['value'] = 0x0, e4af$5['parentElement'] = {}, e4af$5['placeholder'] = {}, e4af$5['type'] = {}, e4af$5['setColor'] = function (dl6o8k) {}, e4af$5['setType'] = function (miutzy) {}, e4af$5['setFontFace'] = function (d28rs9) {}, e4af$5['addEventListener'] = function (g7lqkx) {}, e4af$5['contains'] = function (cymut) {
        return null;
      }, e4af$5['removeChild'] = function (r29ds8) {}, e4af$5;
    }, m1cztw['createShaderCondition'] = function (yu0im) {
      var _prh2 = this,
          _hwp1v = function () {
        var s8od9 = yu0im;return _prh2[yu0im['replace']('this.', '')];
      };return _hwp1v;
    }, m1cztw['EnvConfig'] = null, m1cztw['window'] = null, m1cztw['_preCreateElement'] = null, m1cztw['_inited'] = ![], m1cztw['wxRequest'] = null, m1cztw['systemInfo'] = null, m1cztw['version'] = '0.0.1', m1cztw['isZiYu'] = ![], m1cztw['isPosMsgYu'] = ![], m1cztw['parseXMLFromString'] = function (qx7g3k) {
      var ptmcw1, yutczm;qx7g3k = qx7g3k['replace'](/>\s+</g, '><');try {
        ptmcw1 = new window['Parser']['DOMParser']()['parseFromString'](qx7g3k, 'text/xml');
      } catch (wvp_h1) {
        throw '需要引入xml解析库文件';
      }return ptmcw1;
    }, m1cztw['idx'] = 0x1, m1cztw;
  }(),
      mwcpt = function () {
    function _r82() {}vw1c(_r82, 'laya.wx.mini.MiniImage');var m0zyui = _r82['prototype'];return m0zyui['_loadImage'] = function (af$5e4) {
      var nz0ui = this,
          lxk = ![];af$5e4['indexOf']('layaNativeDir/') == -0x1 && (lxk = !![], af$5e4 = h_rvp2['formatURL'](af$5e4));if (!j$450['getFileInfo'](af$5e4)) {
        if (af$5e4['indexOf']('http://') != -0x1 || af$5e4['indexOf']('https://') != -0x1) j$450['downImg'](af$5e4, new ujyn(_r82, _r82['onDownImgCallBack'], [af$5e4, nz0ui]), af$5e4);else _r82['onCreateImage'](af$5e4, nz0ui, !![]);
      } else _r82['onCreateImage'](af$5e4, nz0ui, !lxk);
    }, _r82['onDownImgCallBack'] = function (lqkxg, wcmtz1, xlo7) {
      if (!xlo7) _r82['onCreateImage'](lqkxg, wcmtz1);else wcmtz1['onError'](null);
    }, _r82['onCreateImage'] = function ($54efa, uyiz0, _whpv1) {
      _whpv1 === void 0x0 && (_whpv1 = ![]);var vpc1t;if (!_whpv1) {
        var p1tvc = j$450['getFileInfo']($54efa),
            h29rs = p1tvc['md5'];vpc1t = j$450['getFileNativePath'](h29rs);
      } else vpc1t = $54efa;if (uyiz0['imgCache'] == null) uyiz0['imgCache'] = {};var mztyu;function $5ja4n() {
        mztyu['onload'] = null, mztyu['onerror'] = null, delete uyiz0['imgCache'][$54efa];
      };var o8kdl = function () {
        $5ja4n(), uyiz0['onLoaded'](mztyu);
      },
          r_sh9 = function () {
        $5ja4n(), uyiz0['event']('error', 'Load image failed');
      };uyiz0['_type'] == 'nativeimage' ? (mztyu = new tc1wmz['window']['Image'](), mztyu['crossOrigin'] = '', mztyu['onload'] = o8kdl, mztyu['onerror'] = r_sh9, mztyu['src'] = vpc1t, uyiz0['imgCache'][$54efa] = mztyu) : new zc1twm['create'](vpc1t, { 'onload': o8kdl, 'onerror': r_sh9, 'onCreate': function (mzucy) {
          mztyu = mzucy, uyiz0['imgCache'][$54efa] = mzucy;
        } });
    }, _r82;
  }(),
      j$an5 = function () {
    function ptcmw1() {}return vw1c(ptcmw1, 'laya.wx.mini.MiniInput'), ptcmw1['_createInputElement'] = function () {
      s9do['_initInput'](s9do['area'] = tc1wmz['createElement']('textarea')), s9do['_initInput'](s9do['input'] = tc1wmz['createElement']('input')), s9do['inputContainer'] = tc1wmz['createElement']('div'), s9do['inputContainer']['style']['position'] = 'absolute', s9do['inputContainer']['style']['zIndex'] = 0x186a0, tc1wmz['container']['appendChild'](s9do['inputContainer']), s9do['inputContainer']['setPos'] = function (rs289d, twvpc) {
        s9do['inputContainer']['style']['left'] = rs289d + 'px', s9do['inputContainer']['style']['top'] = twvpc + 'px';
      }, zy0u['stage']['on']('resize', null, ptcmw1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hw2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), i5j4n['_soundClass'] = w1pvh_, i5j4n['_musicClass'] = w1pvh_;
    }, ptcmw1['_onStageResize'] = function () {
      var kgq3x7 = zy0u['stage']['_canvasTransform']['identity']();kgq3x7['scale'](tc1wmz['width'] / kql7o['canvas']['width'] / n40jiu['getPixelRatio'](), tc1wmz['height'] / kql7o['canvas']['height'] / n40jiu['getPixelRatio']());
    }, ptcmw1['wxinputFocus'] = function (mw1tcz) {
      var tcwp1v = s9do['inputElement']['target'];if (tcwp1v && !tcwp1v['editable']) return;ol67kx['window']['wx']['offKeyboardConfirm'](), ol67kx['window']['wx']['offKeyboardInput'](), ol67kx['window']['wx']['showKeyboard']({ 'defaultValue': tcwp1v['text'], 'maxLength': tcwp1v['maxChars'], 'multiple': tcwp1v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wmtpc) {}, 'fail': function (f$4ea) {} }), ol67kx['window']['wx']['onKeyboardConfirm'](function (d6oxlk) {
        var $54fja = d6oxlk ? d6oxlk['value'] : '';tcwp1v['text'] = $54fja, tcwp1v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ol67kx['window']['wx']['onKeyboardInput'](function (n04j5$) {
        var mtp1w = n04j5$ ? n04j5$['value'] : '';if (!tcwp1v['multiline']) {
          if (mtp1w['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }tcwp1v['text'] = mtp1w, tcwp1v['event']('input');
      });
    }, ptcmw1['inputEnter'] = function () {
      s9do['inputElement']['target']['focus'] = ![];
    }, ptcmw1['wxinputblur'] = function () {
      ptcmw1['hideKeyboard']();
    }, ptcmw1['hideKeyboard'] = function () {
      ol67kx['window']['wx']['offKeyboardConfirm'](), ol67kx['window']['wx']['offKeyboardInput'](), ol67kx['window']['wx']['hideKeyboard']({ 'success': function (klq7gx) {
          console['log']('隐藏键盘');
        }, 'fail': function (tcpwm1) {
          console['log']('隐藏键盘出错:' + (tcpwm1 ? tcpwm1['errMsg'] : ''));
        } });
    }, ptcmw1;
  }(),
      wph_ = function () {
    function m1pwt() {}vw1c(m1pwt, 'laya.wx.mini.MiniLoader');var qklxg = m1pwt['prototype'];return qklxg['load'] = function (t1zmw, f4$e5, umtyiz, k73qxg, ztuimy) {
      umtyiz === void 0x0 && (umtyiz = !![]), ztuimy === void 0x0 && (ztuimy = ![]);var q7gkx = this;q7gkx['_url'] = t1zmw;if (t1zmw['indexOf']('data:image') === 0x0) q7gkx['_type'] = f4$e5 = 'image';else q7gkx['_type'] = f4$e5 || (f4$e5 = q7gkx['getTypeFromUrl'](t1zmw));q7gkx['_cache'] = umtyiz, q7gkx['_data'] = null;var tc1pm = 'ascii';if (t1zmw['indexOf']('.fnt') != -0x1) tc1pm = 'utf8';else f4$e5 == 'arraybuffer' && (tc1pm = '');;var j5n4 = _9h2rs['getFileExtension'](t1zmw);if (m1pwt['_fileTypeArr']['indexOf'](j5n4) != -0x1) ol67kx['EnvConfig']['load']['call'](this, t1zmw, f4$e5, umtyiz, k73qxg, ztuimy);else {
        if (!j$450['getFileInfo'](t1zmw)) {
          if (t1zmw['indexOf']('layaNativeDir/') != -0x1) {
            if (ol67kx['isZiYu']) {
              var lkgqx7 = j$450['ziyuFileData'][t1zmw];q7gkx['onLoaded'](lkgqx7);return;
            } else {
              cosnole['log']('read read'), j$450['read'](t1zmw, tc1pm, new ujyn(m1pwt, m1pwt['onReadNativeCallBack'], [tc1pm, t1zmw, f4$e5, umtyiz, k73qxg, ztuimy, q7gkx]));return;
            }
          }if (h_rvp2['rootPath'] == '') var d9so = t1zmw;else d9so = t1zmw['split'](h_rvp2['rootPath'])[0x0];t1zmw['indexOf']('http://') != -0x1 || t1zmw['indexOf']('https://') != -0x1 ? ol67kx['EnvConfig']['load']['call'](q7gkx, t1zmw, f4$e5, umtyiz, k73qxg, ztuimy) : j$450['readFile'](d9so, tc1pm, new ujyn(m1pwt, m1pwt['onReadNativeCallBack'], [tc1pm, t1zmw, f4$e5, umtyiz, k73qxg, ztuimy, q7gkx]), t1zmw);
        } else ol67kx['EnvConfig']['load']['call'](this, t1zmw, f4$e5, umtyiz, k73qxg, ztuimy);
      }
    }, qklxg['resMgrLoad'] = function (m1tzyc, wmtp1c, p2_hvw, a4j, twcm1z, in0j4u, f54j$) {
      p2_hvw === void 0x0 && (p2_hvw = 0x0), a4j === void 0x0 && (a4j = ![]), twcm1z === void 0x0 && (twcm1z = ![]), in0j4u === void 0x0 && (in0j4u = 0x0), f54j$ === void 0x0 && (f54j$ = 0x3), m1tzyc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m1tzyc), ol67kx['EnvConfig']['resMgrLoad'](m1tzyc, (iunj0, x37gqk, whv2_p) => {
        m1pwt['prototype']['resMgrLoadCallBack'](iunj0, x37gqk, whv2_p, wmtp1c);
      }, p2_hvw, a4j, twcm1z, in0j4u, f54j$);
    }, qklxg['resMgrLoadCallBack'] = function (d6kxl, w1mtcp, xolkd6, w_pv1) {
      console['log']('buff:::', d6kxl, xolkd6, j$450['fileNativeDir'] + '///' + j$450['fileListName']), w_pv1(d6kxl, w1mtcp, xolkd6);
    }, qklxg['clearRes'] = function (dk6oxl, ql7gkx) {
      ql7gkx === void 0x0 && (ql7gkx = ![]);var xqk73g = this;xqk73g['clearRes'](dk6oxl, ql7gkx);var prvh = j$450['getFileInfo'](dk6oxl);if (prvh && (dk6oxl['indexOf']('http://') != -0x1 || dk6oxl['indexOf']('https://') != -0x1)) {
        var hs_92r = prvh['md5'],
            wtmz1 = j$450['getFileNativePath'](hs_92r);j$450['remove'](wtmz1);
      }
    }, m1pwt['onReadNativeCallBack'] = function (cmtwz, w1vcph, oqlx7k, cvh1, _hpvw, l7xok, wzmct1, lko6d, w1tpm) {
      cvh1 === void 0x0 && (cvh1 = !![]), l7xok === void 0x0 && (l7xok = ![]), lko6d === void 0x0 && (lko6d = 0x0);if (!lko6d) {
        var hwpv1_;if (oqlx7k == 'json' || oqlx7k == 'atlas') hwpv1_ = ol67kx['getJson'](w1tpm['data']);else oqlx7k == 'xml' ? hwpv1_ = _9h2rs['parseXMLFromString'](w1tpm['data']) : hwpv1_ = w1tpm['data'];wzmct1['onLoaded'](hwpv1_), !ol67kx['isZiYu'] && ol67kx['isPosMsgYu'] && oqlx7k != 'arraybuffer' && wx['postMessage']({ 'url': w1vcph, 'data': hwpv1_, 'isLoad': !![] });
      } else lko6d == 0x1 && ol67kx['EnvConfig']['load']['call'](wzmct1, w1vcph, oqlx7k, cvh1, _hpvw, l7xok);
    }, cymu(m1pwt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), m1pwt;
  }(),
      j$450 = function (s298d) {
    function ko67l() {
      ko67l['__super']['call'](this);;
    }return vw1c(ko67l, 'laya.wx.mini.MiniFileMgr', s298d), ko67l['isLoadFile'] = function (inuzy0) {
      return ko67l['_fileTypeArr']['indexOf'](inuzy0) != -0x1 ? !![] : ![];
    }, ko67l['getFileInfo'] = function (yzi0m) {
      var loxdk = yzi0m['split']('?')[0x0],
          srd896 = ko67l['filesListObj'][loxdk];if (srd896 == null) return null;else return srd896;return null;
    }, ko67l['onFileUpdate'] = function (h1wvc, m1wz) {
      var r_8s = h1wvc['split']('/'),
          $4fa5e = r_8s[r_8s['length'] - 0x1],
          l68ds = ko67l['getFileInfo'](m1wz);if (l68ds == null) ko67l['onSaveFile'](m1wz, $4fa5e);else {
        if (l68ds['readyUrl'] != m1wz) ko67l['remove']($4fa5e, m1wz);
      }
    }, ko67l['exits'] = function (ij, n$5j) {
      var d8s6 = ko67l['getFileNativePath'](ij);ko67l['fs']['getFileInfo']({ 'filePath': d8s6, 'success': function (ef54a) {
          n$5j != null && n$5j['runWith']([0x0, ef54a]);
        }, 'fail': function (n5$j0) {
          n$5j != null && n$5j['runWith']([0x1, n5$j0]);
        } });
    }, ko67l['read'] = function (yc1t, jna, zmyuc, y0izmu) {
      jna === void 0x0 && (jna = 'ascill'), y0izmu === void 0x0 && (y0izmu = '');var _vprh2;y0izmu != '' ? _vprh2 = ko67l['getFileNativePath'](yc1t) : _vprh2 = yc1t, ko67l['fs']['readFile']({ 'filePath': _vprh2, 'encoding': jna, 'success': function (e5a$4f) {
          zmyuc != null && zmyuc['runWith']([0x0, e5a$4f]);
        }, 'fail': function (n50$4) {
          if (n50$4 && y0izmu != '') ko67l['down'](y0izmu, jna, zmyuc, y0izmu);else zmyuc != null && zmyuc['runWith']([0x1]);
        } });
    }, ko67l['readNativeFile'] = function (anj, pmctw) {
      ko67l['fs']['readFile']({ 'filePath': anj, 'encoding': '', 'success': function (_h2sr9) {
          pmctw != null && pmctw['runWith']([0x0]);
        }, 'fail': function (ds8r9) {
          pmctw != null && pmctw['runWith']([0x1]);
        } });
    }, ko67l['down'] = function (r_29, wtvcp1, xqg73, zy0uin) {
      wtvcp1 === void 0x0 && (wtvcp1 = 'ascill'), zy0uin === void 0x0 && (zy0uin = '');var v1_wp = ko67l['getFileNativePath'](zy0uin),
          s_2r98 = ko67l['wxdown']({ 'url': r_29, 'filePath': v1_wp, 'success': function (tz1myc) {
          if (tz1myc['statusCode'] === 0xc8) ko67l['readFile'](tz1myc['filePath'], wtvcp1, xqg73, zy0uin);
        }, 'fail': function (_2vh9) {
          xqg73 != null && xqg73['runWith']([0x1, _2vh9]);
        } });s_2r98['onProgressUpdate'](function (kxolq7) {
        xqg73 != null && xqg73['runWith']([0x2, kxolq7['progress']]);
      });
    }, ko67l['readFile'] = function (h_2rp, tvwc1, tuczym, jin40) {
      tvwc1 === void 0x0 && (tvwc1 = 'ascill'), jin40 === void 0x0 && (jin40 = ''), ko67l['fs']['readFile']({ 'filePath': h_2rp, 'encoding': tvwc1, 'success': function (lx76o) {
          if (h_2rp['indexOf']('http://') != -0x1 || h_2rp['indexOf']('https://') != -0x1) ko67l['onFileUpdate'](h_2rp, jin40);tuczym != null && tuczym['runWith']([0x0, lx76o]);
        }, 'fail': function (cyztum) {
          if (cyztum) tuczym != null && tuczym['runWith']([0x1, cyztum]);
        } });
    }, ko67l['downImg'] = function (kl67, hwv_p, hvw1p_) {
      hvw1p_ === void 0x0 && (hvw1p_ = '');var s6d89o = ko67l['wxdown']({ 'url': kl67, 'success': function (rv2_hp) {
          rv2_hp['statusCode'] === 0xc8 && ko67l['copyFile'](rv2_hp['tempFilePath'], hvw1p_, hwv_p);
        }, 'fail': function (ymtzu) {
          hwv_p != null && hwv_p['runWith']([0x1, ymtzu]);
        } });
    }, ko67l['copyFile'] = function (p2wvh, tyuiz, tyuzmc) {
      var wmcp = p2wvh['split']('/'),
          sod96 = wmcp[wmcp['length'] - 0x1],
          s_9r82 = tyuiz['split']('?')[0x0],
          whcpv1 = ko67l['getFileInfo'](tyuiz),
          ct1vwp = ko67l['getFileNativePath'](sod96);ko67l['fs']['copyFile']({ 'srcPath': p2wvh, 'destPath': ct1vwp, 'success': function (tzcuy) {
          if (!whcpv1) ko67l['onSaveFile'](tyuiz, sod96), tyuzmc != null && tyuzmc['runWith']([0x0]);else {
            if (whcpv1['readyUrl'] != tyuiz) ko67l['remove'](sod96, tyuiz, tyuzmc);
          }
        }, 'fail': function (rs_9h) {
          tyuzmc != null && tyuzmc['runWith']([0x1, rs_9h]);
        } });
    }, ko67l['getFileNativePath'] = function (tmwp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tmwp;
    }, ko67l['remove'] = function (w2_vh, zn0yi, lxqk7) {
      zn0yi === void 0x0 && (zn0yi = '');var w2h_ = ko67l['getFileInfo'](zn0yi),
          h_v1 = ko67l['getFileNativePath'](w2h_['md5']);zy0u['loader']['clearRes'](w2h_['readyUrl']), ko67l['fs']['unlink']({ 'filePath': h_v1, 'success': function (o6dls8) {
          if (zn0yi != '') ko67l['onSaveFile'](zn0yi, w2_vh);lxqk7 != null && lxqk7['runWith']([0x0]);
        }, 'fail': function ($45jn0) {} });
    }, ko67l['onSaveFile'] = function (glx, k6xld) {
      var $f4a5e = glx['split']('?')[0x0];ko67l['filesListObj'][$f4a5e] = { 'md5': k6xld, 'readyUrl': glx }, ko67l['fs']['writeFile']({ 'filePath': ko67l['fileNativeDir'] + '/' + ko67l['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ko67l['filesListObj']), 'success': function (vtwc1) {
          console['log']('写入测试测试成功：', vtwc1);
        }, 'fail': function (ij04n) {
          console['log']('写入测试测试失败：', ij04n);
        } });
    }, ko67l['existDir'] = function (zwcmt1, pt1mw) {
      ko67l['fs']['mkdir']({ 'dirPath': zwcmt1, 'success': function (pch1vw) {
          pt1mw != null && pt1mw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kgql7) {
          if (kgql7['errMsg']['indexOf']('file already exists') != -0x1) ko67l['readSync'](ko67l['fileListName'], 'utf8', pt1mw);else pt1mw != null && pt1mw['runWith']([0x1, kgql7]);
        } });
    }, ko67l['readSync'] = function ($54ae, s89o6d, uyit, zu0iym) {
      s89o6d === void 0x0 && (s89o6d = 'ascill'), zu0iym === void 0x0 && (zu0iym = '');var tyzc1m = ko67l['getFileNativePath']($54ae),
          ds869o;try {
        ds869o = ko67l['fs']['readFileSync'](tyzc1m), uyit != null && uyit['runWith']([0x0, { 'data': ds869o }]);
      } catch (z0nuiy) {
        uyit != null && uyit['runWith']([0x1]);
      }
    }, ko67l['readCache'] = function () {}, ko67l['writeCache'] = function (i40jn) {
      var c1wmtz = readyUrl['split']('?')[0x0];ko67l['filesListObj'][c1wmtz] = { 'md5': md5Name, 'readyUrl': readyUrl }, ko67l['fs']['writeFile']({ 'filePath': ko67l['fileNativeDir'] + '/' + ko67l['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ko67l['filesListObj']), 'success': function (ujniy0) {}, 'fail': function (w1p_hv) {} });
    }, ko67l['setNativeFileDir'] = function (r8_s2) {
      ko67l['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + r8_s2;
    }, ko67l['filesListObj'] = {}, ko67l['fileNativeDir'] = null, ko67l['fileListName'] = 'layaairfiles.txt', ko67l['ziyuFileData'] = {}, cymu(ko67l, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ko67l;
  }(_vhpw),
      w1pvh_ = function (do6sl8) {
    function hr_v2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], hr_v2['__super']['call'](this), this['_sound'] = hr_v2['_createSound']();
    }vw1c(hr_v2, 'laya.wx.mini.MiniSound', do6sl8);var prv_2 = hr_v2['prototype'];return prv_2['load'] = function (njiyu0) {
      var lxk7o = this;njiyu0 = h_rvp2['formatURL'](njiyu0), this['url'] = njiyu0;if (hr_v2['_audioCache'][njiyu0]) {
        this['event']('complete');return;
      }function i0u4nj() {
        if (hr_v2['_null'] != undefined) lxk7o['_sound']['onCanplay'](hr_v2['_null']), lxk7o['_sound']['onError'](hr_v2['_null']);else try {
          lxk7o['_sound']['onCanplay'](null), lxk7o['_sound']['onError'](null), hr_v2['_null'] = null;
        } catch (k6do8) {
          console['warn']('[wxmini] _clearSound:' + k6do8), lxk7o['_sound']['onCanplay'](o67l), lxk7o['_sound']['onError'](o67l), hr_v2['_null'] = o67l;
        }
      }function ldso68() {
        i0u4nj(), zcmu['loaded'] = !![], zcmu['event']('complete'), hr_v2['_audioCache'][zcmu['url']] = zcmu;
      }function p_vh(kld8) {
        console['error']('errCode=' + kld8['errCode'] + '  errMsg=' + kld8['errMsg']), i0u4nj(), zcmu['event']('error');
      }function o67l() {}this['_sound']['onCanplay'](ldso68), this['_sound']['onError'](p_vh), this['_sound']['src'] = njiyu0;var zcmu = this;
    }, prv_2['play'] = function (uyzni0, v2r_hp) {
      uyzni0 === void 0x0 && (uyzni0 = 0x0), v2r_hp === void 0x0 && (v2r_hp = 0x0);var yztmi;if (this['url'] == i5j4n['_tMusic']) {
        if (!hr_v2['_musicAudio']) hr_v2['_musicAudio'] = hr_v2['_createSound']();yztmi = hr_v2['_musicAudio'];
      } else yztmi = hr_v2['_createSound']();yztmi['src'] = this['url'];var ij4n50 = new xkqg37(yztmi);return ij4n50['url'] = this['url'], ij4n50['loops'] = v2r_hp, ij4n50['startTime'] = uyzni0, ij4n50['play'](), i5j4n['addChannel'](ij4n50), ij4n50;
    }, prv_2['dispose'] = function () {
      var mcyt1z = hr_v2['_audioCache'][this['url']];mcyt1z && (mcyt1z['src'] = '', delete hr_v2['_audioCache'][this['url']]);
    }, tvwcp(0x0, prv_2, 'duration', function () {
      return this['_sound']['duration'];
    }), hr_v2['_createSound'] = function () {
      return hr_v2['_id']++, ol67kx['window']['wx']['createInnerAudioContext']();
    }, hr_v2['_musicAudio'] = null, hr_v2['_id'] = 0x0, hr_v2['_audioCache'] = {}, hr_v2['_null'] = undefined, hr_v2;
  }(_vhpw),
      xkqg37 = function (i4jn5) {
    function h_vpw2(lxk7g) {
      this['_audio'] = null, this['_onEnd'] = null, h_vpw2['__super']['call'](this), this['_audio'] = lxk7g, this['_onEnd'] = _9h2rs['bind'](this['__onEnd'], this), lxk7g['onEnded'](this['_onEnd']);
    }vw1c(h_vpw2, 'laya.wx.mini.MiniSoundChannel', i4jn5);var juiyn = h_vpw2['prototype'];return juiyn['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zy0u['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, juiyn['__onNull'] = function () {}, juiyn['play'] = function () {
      this['isStopped'] = ![], i5j4n['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, juiyn['stop'] = function () {
      this['isStopped'] = !![], i5j4n['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (h_vpw2['_null'] != undefined) this['_audio']['onEnded'](h_vpw2['_null']);else try {
        this['_audio']['onEnded'](null), h_vpw2['_null'] = null;
      } catch (m1wct) {
        console['warn']('[wxmini] stop:' + m1wct), this['_audio']['onEnded'](_9h2rs['bind'](this['__onNull'], this)), h_vpw2['_null'] = _9h2rs['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, juiyn['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, juiyn['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], i5j4n['addChannel'](this), this['_audio']['play']();
    }, tvwcp(0x0, juiyn, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tvwcp(0x0, juiyn, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tvwcp(0x0, juiyn, 'volume', function () {
      return 0x1;
    }, function (uy0i) {}), h_vpw2['_null'] = undefined, h_vpw2;
  }(yz0mu);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m1twcz in Laya) {
    var kdlx6 = Laya[m1twcz];kdlx6 && kdlx6['__isclass'] && (exports[m1twcz] = kdlx6);
  }
});