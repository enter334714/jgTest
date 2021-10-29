var U = wx.$k;
(function (window, document, q2n98) {
  var bzow1 = q2n98['un'],
      h7ejt = q2n98['uns'],
      xu$azl = q2n98['static'],
      mtj7i = q2n98['class'],
      _rdp5$ = q2n98['getset'],
      w1bon = q2n98['__newvec'],
      k9se = laya['utils']['Browser'],
      fpg53r = laya['events']['Event'],
      e7htij = laya['events']['EventDispatcher'],
      _r53pg = laya['resource']['HTMLImage'],
      lxdu$a = laya['utils']['Handler'],
      rd5p = laya['display']['Input'],
      prd5$ = laya['net']['Loader'],
      f5rgp3 = laya['maths']['Matrix'],
      zwaub = laya['renders']['Render'],
      ih7te = laya['utils']['RunDriver'],
      vno1wq = laya['media']['Sound'],
      l_$da = laya['media']['SoundChannel'],
      lbzaxu = laya['media']['SoundManager'],
      n1wbv = laya['display']['Stage'],
      u$xda = laya['net']['URL'],
      dpr_5 = laya['utils']['Utils'],
      ow1vq = function () {
    function ycgf35() {}return mtj7i(ycgf35, 'laya.wx.mini.MiniAdpter'), ycgf35['getJson'] = function (q0nv) {
      return JSON['parse'](q0nv);
    }, ycgf35['init'] = function (daul$x, et6ik) {
      daul$x === void 0x0 && (daul$x = ![]), et6ik === void 0x0 && (et6ik = ![]);if (ycgf35['_inited']) return;ycgf35['window'] = window;if (ycgf35['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ycgf35['_inited'] = !![], ycgf35['isZiYu'] = et6ik, ycgf35['isPosMsgYu'] = daul$x, ycgf35['EnvConfig'] = {}, !ycgf35['isZiYu'] && (m74tji['setNativeFileDir']('/layaairGame'), m74tji['existDir'](m74tji['fileNativeDir'], lxdu$a['create'](ycgf35, ycgf35['onMkdirCallBack']))), ycgf35['window']['focus'] = function () {}, q2n98['getUrlPath'] = function () {}, ycgf35['window']['logtime'] = function (f3cgp) {}, ycgf35['window']['alertTimeLog'] = function (dp_53) {}, ycgf35['window']['resetShareInfo'] = function () {}, ycgf35['window']['CanvasRenderingContext2D'] = function () {}, ycgf35['window']['CanvasRenderingContext2D']['prototype'] = ycgf35['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ycgf35['window']['document']['body']['appendChild'] = function () {}, ycgf35['EnvConfig']['pixelRatioInt'] = 0x0, ih7te['getPixelRatio'] = ycgf35['pixelRatio'], ycgf35['_preCreateElement'] = k9se['createElement'], k9se['createElement'] = ycgf35['createElement'], ih7te['createShaderCondition'] = ycgf35['createShaderCondition'], dpr_5['parseXMLFromString'] = ycgf35['parseXMLFromString'], rd5p['_createInputElement'] = uawbxz['_createInputElement'], ycgf35['EnvConfig']['load'] = prd5$['prototype']['load'], prd5$['prototype']['load'] = skh6e['prototype']['load'], ycgf35['isZiYu'] && daul$x && wx['onMessage'](function (laz$) {
        laz$['isLoad'] && (m74tji['ziyuFileData'][laz$['url']] = laz$['data']);
      });
    }, ycgf35['onMkdirCallBack'] = function (_rpg35, xl$aud) {
      if (!_rpg35) m74tji['filesListObj'] = JSON['parse'](xl$aud['data']);
    }, ycgf35['pixelRatio'] = function () {
      if (!ycgf35['EnvConfig']['pixelRatioInt']) try {
        var pr53_d = wx['getSystemInfoSync']();return ycgf35['EnvConfig']['pixelRatioInt'] = pr53_d['pixelRatio'], pr53_d = pr53_d, pr53_d['pixelRatio'];
      } catch (et6hi) {}return ycgf35['EnvConfig']['pixelRatioInt'];
    }, ycgf35['createElement'] = function (q801vn) {
      if (q801vn == 'canvas') {
        var $d5p;return ycgf35['idx'] == 0x1 ? ycgf35['isZiYu'] ? ($d5p = sharedCanvas, $d5p['style'] = {}) : $d5p = window['canvas'] : $d5p = window['wx']['createCanvas'](), ycgf35['idx']++, $d5p;
      } else {
        if (q801vn == 'textarea' || q801vn == 'input') return ycgf35['onCreateInput'](q801vn);else {
          if (q801vn == 'div') {
            var zwboa = ycgf35['_preCreateElement'](q801vn);return zwboa['contains'] = function (a$xuld) {
              return null;
            }, zwboa['removeChild'] = function (baxwu) {}, zwboa;
          } else return ycgf35['_preCreateElement'](q801vn);
        }
      }
    }, ycgf35['onCreateInput'] = function (aubxlz) {
      var s982k0 = ycgf35['_preCreateElement'](aubxlz);return s982k0['focus'] = uawbxz['wxinputFocus'], s982k0['blur'] = uawbxz['wxinputblur'], s982k0['style'] = {}, s982k0['value'] = 0x0, s982k0['parentElement'] = {}, s982k0['placeholder'] = {}, s982k0['type'] = {}, s982k0['setColor'] = function (ti7e) {}, s982k0['setType'] = function (ua$dlx) {}, s982k0['setFontFace'] = function (k6eiht) {}, s982k0['addEventListener'] = function (tm4ji) {}, s982k0['contains'] = function (_prl$d) {
        return null;
      }, s982k0['removeChild'] = function (zlxba) {}, s982k0;
    }, ycgf35['createShaderCondition'] = function (nw1qo) {
      var au_ld = this,
          f53cgy = function () {
        var k6sh29 = nw1qo;return au_ld[nw1qo['replace']('this.', '')];
      };return f53cgy;
    }, ycgf35['EnvConfig'] = null, ycgf35['window'] = null, ycgf35['_preCreateElement'] = null, ycgf35['_inited'] = ![], ycgf35['wxRequest'] = null, ycgf35['systemInfo'] = null, ycgf35['version'] = '0.0.1', ycgf35['isZiYu'] = ![], ycgf35['isPosMsgYu'] = ![], ycgf35['parseXMLFromString'] = function (t7jim) {
      var xz$, l$axz;t7jim = t7jim['replace'](/>\s+</g, '><');try {
        xz$ = new window['Parser']['DOMParser']()['parseFromString'](t7jim, 'text/xml');
      } catch (uzx$a) {
        throw '需要引入xml解析库文件';
      }return xz$;
    }, ycgf35['idx'] = 0x1, ycgf35;
  }(),
      eht7 = function () {
    function pgc53() {}mtj7i(pgc53, 'laya.wx.mini.MiniImage');var vnq10 = pgc53['prototype'];return vnq10['_loadImage'] = function (n10qv8) {
      var bvw1 = this,
          xwzbov = ![];n10qv8['indexOf']('layaNativeDir/') == -0x1 && (xwzbov = !![], n10qv8 = u$xda['formatURL'](n10qv8));if (!m74tji['getFileInfo'](n10qv8)) {
        if (n10qv8['indexOf']('http://') != -0x1 || n10qv8['indexOf']('https://') != -0x1) m74tji['downImg'](n10qv8, new lxdu$a(pgc53, pgc53['onDownImgCallBack'], [n10qv8, bvw1]), n10qv8);else pgc53['onCreateImage'](n10qv8, bvw1, !![]);
      } else pgc53['onCreateImage'](n10qv8, bvw1, !xwzbov);
    }, pgc53['onDownImgCallBack'] = function (ul_$da, $rdp, r_5$p) {
      if (!r_5$p) pgc53['onCreateImage'](ul_$da, $rdp);else $rdp['onError'](null);
    }, pgc53['onCreateImage'] = function (ul_, dx$ula, m4jti7) {
      m4jti7 === void 0x0 && (m4jti7 = ![]);var q809n;if (!m4jti7) {
        var qn08 = m74tji['getFileInfo'](ul_),
            ijme7 = qn08['md5'];q809n = m74tji['getFileNativePath'](ijme7);
      } else q809n = ul_;if (dx$ula['imgCache'] == null) dx$ula['imgCache'] = {};var tihe7;function mjt74() {
        tihe7['onload'] = null, tihe7['onerror'] = null, delete dx$ula['imgCache'][ul_];
      };var g53rp = function () {
        mjt74(), dx$ula['onLoaded'](tihe7);
      },
          rpfg = function () {
        mjt74(), dx$ula['event']('error', 'Load image failed');
      };dx$ula['_type'] == 'nativeimage' ? (tihe7 = new k9se['window']['Image'](), tihe7['crossOrigin'] = '', tihe7['onload'] = g53rp, tihe7['onerror'] = rpfg, tihe7['src'] = q809n, dx$ula['imgCache'][ul_] = tihe7) : new _r53pg['create'](q809n, { 'onload': g53rp, 'onerror': rpfg, 'onCreate': function ($ld_ur) {
          tihe7 = $ld_ur, dx$ula['imgCache'][ul_] = $ld_ur;
        } });
    }, pgc53;
  }(),
      uawbxz = function () {
    function i6kt() {}return mtj7i(i6kt, 'laya.wx.mini.MiniInput'), i6kt['_createInputElement'] = function () {
      rd5p['_initInput'](rd5p['area'] = k9se['createElement']('textarea')), rd5p['_initInput'](rd5p['input'] = k9se['createElement']('input')), rd5p['inputContainer'] = k9se['createElement']('div'), rd5p['inputContainer']['style']['position'] = 'absolute', rd5p['inputContainer']['style']['zIndex'] = 0x186a0, k9se['container']['appendChild'](rd5p['inputContainer']), rd5p['inputContainer']['setPos'] = function ($xazlu, bxazow) {
        rd5p['inputContainer']['style']['left'] = $xazlu + 'px', rd5p['inputContainer']['style']['top'] = bxazow + 'px';
      }, q2n98['stage']['on']('resize', null, i6kt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ekthi) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), lbzaxu['_soundClass'] = dr_, lbzaxu['_musicClass'] = dr_;
    }, i6kt['_onStageResize'] = function () {
      var rp_$l = q2n98['stage']['_canvasTransform']['identity']();rp_$l['scale'](k9se['width'] / zwaub['canvas']['width'] / ih7te['getPixelRatio'](), k9se['height'] / zwaub['canvas']['height'] / ih7te['getPixelRatio']());
    }, i6kt['wxinputFocus'] = function (owbzx) {
      var k6ieh = rd5p['inputElement']['target'];if (k6ieh && !k6ieh['editable']) return;ow1vq['window']['wx']['offKeyboardConfirm'](), ow1vq['window']['wx']['offKeyboardInput'](), ow1vq['window']['wx']['showKeyboard']({ 'defaultValue': k6ieh['text'], 'maxLength': k6ieh['maxChars'], 'multiple': k6ieh['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (j7ti4) {}, 'fail': function (kte) {} }), ow1vq['window']['wx']['onKeyboardConfirm'](function (r5_p$d) {
        var r5$pd_ = r5_p$d ? r5_p$d['value'] : '';k6ieh['text'] = r5$pd_, k6ieh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ow1vq['window']['wx']['onKeyboardInput'](function (j4imt) {
        var _rpd$ = j4imt ? j4imt['value'] : '';if (!k6ieh['multiline']) {
          if (_rpd$['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }k6ieh['text'] = _rpd$, k6ieh['event']('input');
      });
    }, i6kt['inputEnter'] = function () {
      rd5p['inputElement']['target']['focus'] = ![];
    }, i6kt['wxinputblur'] = function () {
      i6kt['hideKeyboard']();
    }, i6kt['hideKeyboard'] = function () {
      ow1vq['window']['wx']['offKeyboardConfirm'](), ow1vq['window']['wx']['offKeyboardInput'](), ow1vq['window']['wx']['hideKeyboard']({ 'success': function (g5_rp) {
          console['log']('隐藏键盘');
        }, 'fail': function ($urdl) {
          console['log']('隐藏键盘出错:' + ($urdl ? $urdl['errMsg'] : ''));
        } });
    }, i6kt;
  }(),
      skh6e = function () {
    function $ad_ul() {}mtj7i($ad_ul, 'laya.wx.mini.MiniLoader');var u$dlr = $ad_ul['prototype'];return u$dlr['load'] = function (gcyf35, la$xu, rp5$, ubz, ejimt7) {
      rp5$ === void 0x0 && (rp5$ = !![]), ejimt7 === void 0x0 && (ejimt7 = ![]);var i7ejth = this;i7ejth['_url'] = gcyf35;if (gcyf35['indexOf']('data:image') === 0x0) i7ejth['_type'] = la$xu = 'image';else i7ejth['_type'] = la$xu || (la$xu = i7ejth['getTypeFromUrl'](gcyf35));i7ejth['_cache'] = rp5$, i7ejth['_data'] = null;var ikt6eh = 'ascii';if (gcyf35['indexOf']('.fnt') != -0x1) ikt6eh = 'utf8';else la$xu == 'arraybuffer' && (ikt6eh = '');;var n0vo1q = dpr_5['getFileExtension'](gcyf35);if ($ad_ul['_fileTypeArr']['indexOf'](n0vo1q) != -0x1) ow1vq['EnvConfig']['load']['call'](this, gcyf35, la$xu, rp5$, ubz, ejimt7);else {
        if (!m74tji['getFileInfo'](gcyf35)) {
          if (gcyf35['indexOf']('layaNativeDir/') != -0x1) {
            if (ow1vq['isZiYu']) {
              var $la_u = m74tji['ziyuFileData'][gcyf35];i7ejth['onLoaded']($la_u);return;
            } else {
              cosnole['log']('read read'), m74tji['read'](gcyf35, ikt6eh, new lxdu$a($ad_ul, $ad_ul['onReadNativeCallBack'], [ikt6eh, gcyf35, la$xu, rp5$, ubz, ejimt7, i7ejth]));return;
            }
          }if (u$xda['rootPath'] == '') var kh692s = gcyf35;else kh692s = gcyf35['split'](u$xda['rootPath'])[0x0];gcyf35['indexOf']('http://') != -0x1 || gcyf35['indexOf']('https://') != -0x1 ? ow1vq['EnvConfig']['load']['call'](i7ejth, gcyf35, la$xu, rp5$, ubz, ejimt7) : m74tji['readFile'](kh692s, ikt6eh, new lxdu$a($ad_ul, $ad_ul['onReadNativeCallBack'], [ikt6eh, gcyf35, la$xu, rp5$, ubz, ejimt7, i7ejth]), gcyf35);
        } else ow1vq['EnvConfig']['load']['call'](this, gcyf35, la$xu, rp5$, ubz, ejimt7);
      }
    }, u$dlr['resMgrLoad'] = function (sek9h6, dla_u$, d5_3, gr35pf, nq821, e67hti, sk869) {
      d5_3 === void 0x0 && (d5_3 = 0x0), gr35pf === void 0x0 && (gr35pf = ![]), nq821 === void 0x0 && (nq821 = ![]), e67hti === void 0x0 && (e67hti = 0x0), sk869 === void 0x0 && (sk869 = 0x3), sek9h6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', sek9h6), ow1vq['EnvConfig']['resMgrLoad'](sek9h6, (ozbx, xozawb, d3pr5) => {
        $ad_ul['prototype']['resMgrLoadCallBack'](ozbx, xozawb, d3pr5, dla_u$);
      }, d5_3, gr35pf, nq821, e67hti, sk869);
    }, u$dlr['resMgrLoadCallBack'] = function (zxbalu, mijt47, heji, wozab) {
      console['log']('buff:::', zxbalu, heji, m74tji['fileNativeDir'] + '///' + m74tji['fileListName']), wozab(zxbalu, mijt47, heji);
    }, u$dlr['clearRes'] = function ($udx, xu$lza) {
      xu$lza === void 0x0 && (xu$lza = ![]);var d$ua_l = this;d$ua_l['clearRes']($udx, xu$lza);var ie7jt = m74tji['getFileInfo']($udx);if (ie7jt && ($udx['indexOf']('http://') != -0x1 || $udx['indexOf']('https://') != -0x1)) {
        var eik6ht = ie7jt['md5'],
            q29s80 = m74tji['getFileNativePath'](eik6ht);m74tji['remove'](q29s80);
      }
    }, $ad_ul['onReadNativeCallBack'] = function (vq1n08, f3p5rg, ald$xu, w1vzob, khesi, fg5pc3, y53f, $alu_, vn1qw) {
      w1vzob === void 0x0 && (w1vzob = !![]), fg5pc3 === void 0x0 && (fg5pc3 = ![]), $alu_ === void 0x0 && ($alu_ = 0x0);if (!$alu_) {
        var hs6;if (ald$xu == 'json' || ald$xu == 'atlas') hs6 = ow1vq['getJson'](vn1qw['data']);else ald$xu == 'xml' ? hs6 = dpr_5['parseXMLFromString'](vn1qw['data']) : hs6 = vn1qw['data'];y53f['onLoaded'](hs6), !ow1vq['isZiYu'] && ow1vq['isPosMsgYu'] && ald$xu != 'arraybuffer' && wx['postMessage']({ 'url': f3p5rg, 'data': hs6, 'isLoad': !![] });
      } else $alu_ == 0x1 && ow1vq['EnvConfig']['load']['call'](y53f, f3p5rg, ald$xu, w1vzob, khesi, fg5pc3);
    }, xu$azl($ad_ul, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $ad_ul;
  }(),
      m74tji = function (xuazl) {
    function s29q0() {
      s29q0['__super']['call'](this);;
    }return mtj7i(s29q0, 'laya.wx.mini.MiniFileMgr', xuazl), s29q0['isLoadFile'] = function (fcg) {
      return s29q0['_fileTypeArr']['indexOf'](fcg) != -0x1 ? !![] : ![];
    }, s29q0['getFileInfo'] = function (g3rf5p) {
      var p_r5g3 = g3rf5p['split']('?')[0x0],
          n8q10v = s29q0['filesListObj'][p_r5g3];if (n8q10v == null) return null;else return n8q10v;return null;
    }, s29q0['onFileUpdate'] = function (o1wn, wzobv) {
      var n801v = o1wn['split']('/'),
          p5fgr = n801v[n801v['length'] - 0x1],
          jihte7 = s29q0['getFileInfo'](wzobv);if (jihte7 == null) s29q0['onSaveFile'](wzobv, p5fgr);else {
        if (jihte7['readyUrl'] != wzobv) s29q0['remove'](p5fgr, wzobv);
      }
    }, s29q0['exits'] = function (tjhei, _d$p) {
      var gfrp53 = s29q0['getFileNativePath'](tjhei);s29q0['fs']['getFileInfo']({ 'filePath': gfrp53, 'success': function (axl$z) {
          _d$p != null && _d$p['runWith']([0x0, axl$z]);
        }, 'fail': function (jtme7i) {
          _d$p != null && _d$p['runWith']([0x1, jtme7i]);
        } });
    }, s29q0['read'] = function (zwuaxb, xula, cgfy35, ehk96) {
      xula === void 0x0 && (xula = 'ascill'), ehk96 === void 0x0 && (ehk96 = '');var novw;ehk96 != '' ? novw = s29q0['getFileNativePath'](zwuaxb) : novw = zwuaxb, s29q0['fs']['readFile']({ 'filePath': novw, 'encoding': xula, 'success': function (dr_ul) {
          cgfy35 != null && cgfy35['runWith']([0x0, dr_ul]);
        }, 'fail': function ($prd_l) {
          if ($prd_l && ehk96 != '') s29q0['down'](ehk96, xula, cgfy35, ehk96);else cgfy35 != null && cgfy35['runWith']([0x1]);
        } });
    }, s29q0['readNativeFile'] = function (_dp$l, s29h6k) {
      s29q0['fs']['readFile']({ 'filePath': _dp$l, 'encoding': '', 'success': function (zxul) {
          s29h6k != null && s29h6k['runWith']([0x0]);
        }, 'fail': function (seki6h) {
          s29h6k != null && s29h6k['runWith']([0x1]);
        } });
    }, s29q0['down'] = function (qn81v0, ovnw1, azbw, etmji) {
      ovnw1 === void 0x0 && (ovnw1 = 'ascill'), etmji === void 0x0 && (etmji = '');var lzxa$ = s29q0['getFileNativePath'](etmji),
          k9628s = s29q0['wxdown']({ 'url': qn81v0, 'filePath': lzxa$, 'success': function (r3_p) {
          if (r3_p['statusCode'] === 0xc8) s29q0['readFile'](r3_p['filePath'], ovnw1, azbw, etmji);
        }, 'fail': function (d_5r) {
          azbw != null && azbw['runWith']([0x1, d_5r]);
        } });k9628s['onProgressUpdate'](function (uxbaw) {
        azbw != null && azbw['runWith']([0x2, uxbaw['progress']]);
      });
    }, s29q0['readFile'] = function (awzo, wzuabx, gp3r5, mei7) {
      wzuabx === void 0x0 && (wzuabx = 'ascill'), mei7 === void 0x0 && (mei7 = ''), s29q0['fs']['readFile']({ 'filePath': awzo, 'encoding': wzuabx, 'success': function (tekh) {
          if (awzo['indexOf']('http://') != -0x1 || awzo['indexOf']('https://') != -0x1) s29q0['onFileUpdate'](awzo, mei7);gp3r5 != null && gp3r5['runWith']([0x0, tekh]);
        }, 'fail': function (yc5g) {
          if (yc5g) gp3r5 != null && gp3r5['runWith']([0x1, yc5g]);
        } });
    }, s29q0['downImg'] = function (zablx, d_ula$, xa$ld) {
      xa$ld === void 0x0 && (xa$ld = '');var khet6i = s29q0['wxdown']({ 'url': zablx, 'success': function (zlu$xa) {
          zlu$xa['statusCode'] === 0xc8 && s29q0['copyFile'](zlu$xa['tempFilePath'], xa$ld, d_ula$);
        }, 'fail': function (gf3cp) {
          d_ula$ != null && d_ula$['runWith']([0x1, gf3cp]);
        } });
    }, s29q0['copyFile'] = function (_g5r, $_drpl, _l$dpr) {
      var k820s = _g5r['split']('/'),
          $xuzl = k820s[k820s['length'] - 0x1],
          v1nq = $_drpl['split']('?')[0x0],
          b1owv = s29q0['getFileInfo']($_drpl),
          e9k = s29q0['getFileNativePath']($xuzl);s29q0['fs']['copyFile']({ 'srcPath': _g5r, 'destPath': e9k, 'success': function (dp5r$) {
          if (!b1owv) s29q0['onSaveFile']($_drpl, $xuzl), _l$dpr != null && _l$dpr['runWith']([0x0]);else {
            if (b1owv['readyUrl'] != $_drpl) s29q0['remove']($xuzl, $_drpl, _l$dpr);
          }
        }, 'fail': function (rd5p_) {
          _l$dpr != null && _l$dpr['runWith']([0x1, rd5p_]);
        } });
    }, s29q0['getFileNativePath'] = function (zuw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zuw;
    }, s29q0['remove'] = function (wbvzo1, _gr53, ldua$) {
      _gr53 === void 0x0 && (_gr53 = '');var dx$ual = s29q0['getFileInfo'](_gr53),
          zxawo = s29q0['getFileNativePath'](dx$ual['md5']);q2n98['loader']['clearRes'](dx$ual['readyUrl']), s29q0['fs']['unlink']({ 'filePath': zxawo, 'success': function (cg3fp) {
          if (_gr53 != '') s29q0['onSaveFile'](_gr53, wbvzo1);ldua$ != null && ldua$['runWith']([0x0]);
        }, 'fail': function (drul_) {} });
    }, s29q0['onSaveFile'] = function (n2081q, l_pdr$) {
      var ie7tjm = n2081q['split']('?')[0x0];s29q0['filesListObj'][ie7tjm] = { 'md5': l_pdr$, 'readyUrl': n2081q }, s29q0['fs']['writeFile']({ 'filePath': s29q0['fileNativeDir'] + '/' + s29q0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](s29q0['filesListObj']), 'success': function (bxuzaw) {
          console['log']('写入测试测试成功：', bxuzaw);
        }, 'fail': function (gp5_3r) {
          console['log']('写入测试测试失败：', gp5_3r);
        } });
    }, s29q0['existDir'] = function (_a$l, bwvzx) {
      s29q0['fs']['mkdir']({ 'dirPath': _a$l, 'success': function (qn801) {
          bwvzx != null && bwvzx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (es9kh6) {
          if (es9kh6['errMsg']['indexOf']('file already exists') != -0x1) s29q0['readSync'](s29q0['fileListName'], 'utf8', bwvzx);else bwvzx != null && bwvzx['runWith']([0x1, es9kh6]);
        } });
    }, s29q0['readSync'] = function (k69ehs, zlabxu, hieks6, h9k6se) {
      zlabxu === void 0x0 && (zlabxu = 'ascill'), h9k6se === void 0x0 && (h9k6se = '');var keh96 = s29q0['getFileNativePath'](k69ehs),
          vzob1w;try {
        vzob1w = s29q0['fs']['readFileSync'](keh96), hieks6 != null && hieks6['runWith']([0x0, { 'data': vzob1w }]);
      } catch (uzbxaw) {
        hieks6 != null && hieks6['runWith']([0x1]);
      }
    }, s29q0['readCache'] = function () {}, s29q0['writeCache'] = function (zbox) {
      var mi47 = readyUrl['split']('?')[0x0];s29q0['filesListObj'][mi47] = { 'md5': md5Name, 'readyUrl': readyUrl }, s29q0['fs']['writeFile']({ 'filePath': s29q0['fileNativeDir'] + '/' + s29q0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](s29q0['filesListObj']), 'success': function (lu$axd) {}, 'fail': function ($_lu) {} });
    }, s29q0['setNativeFileDir'] = function (f3rg5) {
      s29q0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + f3rg5;
    }, s29q0['filesListObj'] = {}, s29q0['fileNativeDir'] = null, s29q0['fileListName'] = 'layaairfiles.txt', s29q0['ziyuFileData'] = {}, xu$azl(s29q0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), s29q0;
  }(e7htij),
      dr_ = function (fp5cg3) {
    function _5$dpr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _5$dpr['__super']['call'](this), this['_sound'] = _5$dpr['_createSound']();
    }mtj7i(_5$dpr, 'laya.wx.mini.MiniSound', fp5cg3);var xu$ad = _5$dpr['prototype'];return xu$ad['load'] = function (luazxb) {
      var mje = this;luazxb = u$xda['formatURL'](luazxb), this['url'] = luazxb;if (_5$dpr['_audioCache'][luazxb]) {
        this['event']('complete');return;
      }function k286s9() {
        if (_5$dpr['_null'] != undefined) mje['_sound']['onCanplay'](_5$dpr['_null']), mje['_sound']['onError'](_5$dpr['_null']);else try {
          mje['_sound']['onCanplay'](null), mje['_sound']['onError'](null), _5$dpr['_null'] = null;
        } catch (xbazu) {
          console['warn']('[wxmini] _clearSound:' + xbazu), mje['_sound']['onCanplay'](thiek), mje['_sound']['onError'](thiek), _5$dpr['_null'] = thiek;
        }
      }function p_rg35() {
        k286s9(), nv1['loaded'] = !![], nv1['event']('complete'), _5$dpr['_audioCache'][nv1['url']] = nv1;
      }function aubxw(tji7m) {
        console['error']('errCode=' + tji7m['errCode'] + '  errMsg=' + tji7m['errMsg']), k286s9(), nv1['event']('error');
      }function thiek() {}this['_sound']['onCanplay'](p_rg35), this['_sound']['onError'](aubxw), this['_sound']['src'] = luazxb;var nv1 = this;
    }, xu$ad['play'] = function (o10qnv, k9s0) {
      o10qnv === void 0x0 && (o10qnv = 0x0), k9s0 === void 0x0 && (k9s0 = 0x0);var owqnv;if (this['url'] == lbzaxu['_tMusic']) {
        if (!_5$dpr['_musicAudio']) _5$dpr['_musicAudio'] = _5$dpr['_createSound']();owqnv = _5$dpr['_musicAudio'];
      } else owqnv = _5$dpr['_createSound']();owqnv['src'] = this['url'];var lp_$d = new gp5_r(owqnv);return lp_$d['url'] = this['url'], lp_$d['loops'] = k9s0, lp_$d['startTime'] = o10qnv, lp_$d['play'](), lbzaxu['addChannel'](lp_$d), lp_$d;
    }, xu$ad['dispose'] = function () {
      var g35pf = _5$dpr['_audioCache'][this['url']];g35pf && (g35pf['src'] = '', delete _5$dpr['_audioCache'][this['url']]);
    }, _rdp5$(0x0, xu$ad, 'duration', function () {
      return this['_sound']['duration'];
    }), _5$dpr['_createSound'] = function () {
      return _5$dpr['_id']++, ow1vq['window']['wx']['createInnerAudioContext']();
    }, _5$dpr['_musicAudio'] = null, _5$dpr['_id'] = 0x0, _5$dpr['_audioCache'] = {}, _5$dpr['_null'] = undefined, _5$dpr;
  }(e7htij),
      gp5_r = function (s20k8) {
    function hejit(wbv1o) {
      this['_audio'] = null, this['_onEnd'] = null, hejit['__super']['call'](this), this['_audio'] = wbv1o, this['_onEnd'] = dpr_5['bind'](this['__onEnd'], this), wbv1o['onEnded'](this['_onEnd']);
    }mtj7i(hejit, 'laya.wx.mini.MiniSoundChannel', s20k8);var j74 = hejit['prototype'];return j74['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (q2n98['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, j74['__onNull'] = function () {}, j74['play'] = function () {
      this['isStopped'] = ![], lbzaxu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, j74['stop'] = function () {
      this['isStopped'] = !![], lbzaxu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (hejit['_null'] != undefined) this['_audio']['onEnded'](hejit['_null']);else try {
        this['_audio']['onEnded'](null), hejit['_null'] = null;
      } catch (la$du_) {
        console['warn']('[wxmini] stop:' + la$du_), this['_audio']['onEnded'](dpr_5['bind'](this['__onNull'], this)), hejit['_null'] = dpr_5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, j74['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, j74['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], lbzaxu['addChannel'](this), this['_audio']['play']();
    }, _rdp5$(0x0, j74, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _rdp5$(0x0, j74, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _rdp5$(0x0, j74, 'volume', function () {
      return 0x1;
    }, function (zxawb) {}), hejit['_null'] = undefined, hejit;
  }(l_$da);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var k26sh in Laya) {
    var vxzb = Laya[k26sh];vxzb && vxzb['__isclass'] && (exports[k26sh] = vxzb);
  }
});