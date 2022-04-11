var U = wx.$k;
(function (window, document, alx$z) {
  var q08s29 = alx$z['un'],
      bozx = alx$z['uns'],
      hsk629 = alx$z['static'],
      jei7h = alx$z['class'],
      qn01o = alx$z['getset'],
      $r_lp = alx$z['__newvec'],
      khse = laya['utils']['Browser'],
      eimj = laya['events']['Event'],
      k20s = laya['events']['EventDispatcher'],
      oxwza = laya['resource']['HTMLImage'],
      sei6hk = laya['utils']['Handler'],
      nv1w = laya['display']['Input'],
      rldp = laya['net']['Loader'],
      tije7h = laya['maths']['Matrix'],
      h9k62s = laya['renders']['Render'],
      grp_53 = laya['utils']['RunDriver'],
      g5p = laya['media']['Sound'],
      azubxl = laya['media']['SoundChannel'],
      y35fgc = laya['media']['SoundManager'],
      nvo1wb = laya['display']['Stage'],
      woq1 = laya['net']['URL'],
      fcy3g5 = laya['utils']['Utils'],
      xauw = function () {
    function ikh6() {}return jei7h(ikh6, 'laya.wx.mini.MiniAdpter'), ikh6['getJson'] = function (nb1wvo) {
      return JSON['parse'](nb1wvo);
    }, ikh6['init'] = function (k9hse, hk6se9) {
      k9hse === void 0x0 && (k9hse = ![]), hk6se9 === void 0x0 && (hk6se9 = ![]);if (ikh6['_inited']) return;ikh6['window'] = window;if (ikh6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ikh6['_inited'] = !![], ikh6['isZiYu'] = hk6se9, ikh6['isPosMsgYu'] = k9hse, ikh6['EnvConfig'] = {}, !ikh6['isZiYu'] && (l$ud_a['setNativeFileDir']('/layaairGame'), l$ud_a['existDir'](l$ud_a['fileNativeDir'], sei6hk['create'](ikh6, ikh6['onMkdirCallBack']))), ikh6['window']['focus'] = function () {}, alx$z['getUrlPath'] = function () {}, ikh6['window']['logtime'] = function (rpd$) {}, ikh6['window']['alertTimeLog'] = function (s9k) {}, ikh6['window']['resetShareInfo'] = function () {}, ikh6['window']['CanvasRenderingContext2D'] = function () {}, ikh6['window']['CanvasRenderingContext2D']['prototype'] = ikh6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ikh6['window']['document']['body']['appendChild'] = function () {}, ikh6['EnvConfig']['pixelRatioInt'] = 0x0, grp_53['getPixelRatio'] = ikh6['pixelRatio'], ikh6['_preCreateElement'] = khse['createElement'], khse['createElement'] = ikh6['createElement'], grp_53['createShaderCondition'] = ikh6['createShaderCondition'], fcy3g5['parseXMLFromString'] = ikh6['parseXMLFromString'], nv1w['_createInputElement'] = qn8012['_createInputElement'], ikh6['EnvConfig']['load'] = rldp['prototype']['load'], rldp['prototype']['load'] = eshk9['prototype']['load'], ikh6['isZiYu'] && k9hse && wx['onMessage'](function (da_l$) {
        da_l$['isLoad'] && (l$ud_a['ziyuFileData'][da_l$['url']] = da_l$['data']);
      });
    }, ikh6['onMkdirCallBack'] = function (s0982k, k6hte) {
      if (!s0982k) l$ud_a['filesListObj'] = JSON['parse'](k6hte['data']);
    }, ikh6['pixelRatio'] = function () {
      if (!ikh6['EnvConfig']['pixelRatioInt']) try {
        var $5_ = wx['getSystemInfoSync']();return ikh6['EnvConfig']['pixelRatioInt'] = $5_['pixelRatio'], $5_ = $5_, $5_['pixelRatio'];
      } catch (l_rp$) {}return ikh6['EnvConfig']['pixelRatioInt'];
    }, ikh6['createElement'] = function ($u_) {
      if ($u_ == 'canvas') {
        var ul$_r;return ikh6['idx'] == 0x1 ? ikh6['isZiYu'] ? (ul$_r = sharedCanvas, ul$_r['style'] = {}) : ul$_r = window['canvas'] : ul$_r = window['wx']['createCanvas'](), ikh6['idx']++, ul$_r;
      } else {
        if ($u_ == 'textarea' || $u_ == 'input') return ikh6['onCreateInput']($u_);else {
          if ($u_ == 'div') {
            var vo0 = ikh6['_preCreateElement']($u_);return vo0['contains'] = function (t7hji) {
              return null;
            }, vo0['removeChild'] = function (p5rfg3) {}, vo0;
          } else return ikh6['_preCreateElement']($u_);
        }
      }
    }, ikh6['onCreateInput'] = function (vzbxw) {
      var p35_g = ikh6['_preCreateElement'](vzbxw);return p35_g['focus'] = qn8012['wxinputFocus'], p35_g['blur'] = qn8012['wxinputblur'], p35_g['style'] = {}, p35_g['value'] = 0x0, p35_g['parentElement'] = {}, p35_g['placeholder'] = {}, p35_g['type'] = {}, p35_g['setColor'] = function (is6h) {}, p35_g['setType'] = function (ht76) {}, p35_g['setFontFace'] = function (pr$_l) {}, p35_g['addEventListener'] = function (ovqwn) {}, p35_g['contains'] = function (ehkti6) {
        return null;
      }, p35_g['removeChild'] = function (rpg35) {}, p35_g;
    }, ikh6['createShaderCondition'] = function (wo1vnb) {
      var xwvo = this,
          p_d$r5 = function () {
        var gpc5f = wo1vnb;return xwvo[wo1vnb['replace']('this.', '')];
      };return p_d$r5;
    }, ikh6['EnvConfig'] = null, ikh6['window'] = null, ikh6['_preCreateElement'] = null, ikh6['_inited'] = ![], ikh6['wxRequest'] = null, ikh6['systemInfo'] = null, ikh6['version'] = '0.0.1', ikh6['isZiYu'] = ![], ikh6['isPosMsgYu'] = ![], ikh6['parseXMLFromString'] = function (she6ki) {
      var vwoz1, ske6h9;she6ki = she6ki['replace'](/>\s+</g, '><');try {
        vwoz1 = new window['Parser']['DOMParser']()['parseFromString'](she6ki, 'text/xml');
      } catch (f53gp) {
        throw '需要引入xml解析库文件';
      }return vwoz1;
    }, ikh6['idx'] = 0x1, ikh6;
  }(),
      bxazuw = function () {
    function k2h6() {}jei7h(k2h6, 'laya.wx.mini.MiniImage');var a$uld_ = k2h6['prototype'];return a$uld_['_loadImage'] = function (emi7tj) {
      var r3g_5p = this,
          nvo1b = ![];emi7tj['indexOf']('layaNativeDir/') == -0x1 && (nvo1b = !![], emi7tj = woq1['formatURL'](emi7tj));if (!l$ud_a['getFileInfo'](emi7tj)) {
        if (emi7tj['indexOf']('http://') != -0x1 || emi7tj['indexOf']('https://') != -0x1) l$ud_a['downImg'](emi7tj, new sei6hk(k2h6, k2h6['onDownImgCallBack'], [emi7tj, r3g_5p]), emi7tj);else k2h6['onCreateImage'](emi7tj, r3g_5p, !![]);
      } else k2h6['onCreateImage'](emi7tj, r3g_5p, !nvo1b);
    }, k2h6['onDownImgCallBack'] = function (fcy53g, l$azu, h6et7i) {
      if (!h6et7i) k2h6['onCreateImage'](fcy53g, l$azu);else l$azu['onError'](null);
    }, k2h6['onCreateImage'] = function (s9e6k, f3p5g, k896) {
      k896 === void 0x0 && (k896 = ![]);var k8s629;if (!k896) {
        var pr3d5_ = l$ud_a['getFileInfo'](s9e6k),
            pr$ld = pr3d5_['md5'];k8s629 = l$ud_a['getFileNativePath'](pr$ld);
      } else k8s629 = s9e6k;if (f3p5g['imgCache'] == null) f3p5g['imgCache'] = {};var dl_pr$;function za$xul() {
        dl_pr$['onload'] = null, dl_pr$['onerror'] = null, delete f3p5g['imgCache'][s9e6k];
      };var ldu_a$ = function () {
        za$xul(), f3p5g['onLoaded'](dl_pr$);
      },
          az$x = function () {
        za$xul(), f3p5g['event']('error', 'Load image failed');
      };f3p5g['_type'] == 'nativeimage' ? (dl_pr$ = new khse['window']['Image'](), dl_pr$['crossOrigin'] = '', dl_pr$['onload'] = ldu_a$, dl_pr$['onerror'] = az$x, dl_pr$['src'] = k8s629, f3p5g['imgCache'][s9e6k] = dl_pr$) : new oxwza['create'](k8s629, { 'onload': ldu_a$, 'onerror': az$x, 'onCreate': function (keis) {
          dl_pr$ = keis, f3p5g['imgCache'][s9e6k] = keis;
        } });
    }, k2h6;
  }(),
      qn8012 = function () {
    function dul$() {}return jei7h(dul$, 'laya.wx.mini.MiniInput'), dul$['_createInputElement'] = function () {
      nv1w['_initInput'](nv1w['area'] = khse['createElement']('textarea')), nv1w['_initInput'](nv1w['input'] = khse['createElement']('input')), nv1w['inputContainer'] = khse['createElement']('div'), nv1w['inputContainer']['style']['position'] = 'absolute', nv1w['inputContainer']['style']['zIndex'] = 0x186a0, khse['container']['appendChild'](nv1w['inputContainer']), nv1w['inputContainer']['setPos'] = function (ise6k, s6928k) {
        nv1w['inputContainer']['style']['left'] = ise6k + 'px', nv1w['inputContainer']['style']['top'] = s6928k + 'px';
      }, alx$z['stage']['on']('resize', null, dul$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ejthi7) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), y35fgc['_soundClass'] = ozbw1v, y35fgc['_musicClass'] = ozbw1v, window['_videoClass'] = uxa$d;
    }, dul$['_onStageResize'] = function () {
      var _da$u = alx$z['stage']['_canvasTransform']['identity']();_da$u['scale'](khse['width'] / h9k62s['canvas']['width'] / grp_53['getPixelRatio'](), khse['height'] / h9k62s['canvas']['height'] / grp_53['getPixelRatio']());
    }, dul$['wxinputFocus'] = function (k6h9s) {
      var sk698 = nv1w['inputElement']['target'];if (sk698 && !sk698['editable']) return;xauw['window']['wx']['offKeyboardConfirm'](), xauw['window']['wx']['offKeyboardInput'](), xauw['window']['wx']['showKeyboard']({ 'defaultValue': sk698['text'], 'maxLength': sk698['maxChars'], 'multiple': sk698['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (pgf5c3) {}, 'fail': function (n02q) {} }), xauw['window']['wx']['onKeyboardConfirm'](function (_pr53) {
        var t7heji = _pr53 ? _pr53['value'] : '';sk698['text'] = t7heji, sk698['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xauw['window']['wx']['onKeyboardInput'](function (n90q2) {
        var adlxu = n90q2 ? n90q2['value'] : '';if (!sk698['multiline']) {
          if (adlxu['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sk698['text'] = adlxu, sk698['event']('input');
      });
    }, dul$['inputEnter'] = function () {
      nv1w['inputElement']['target']['focus'] = ![];
    }, dul$['wxinputblur'] = function () {
      dul$['hideKeyboard']();
    }, dul$['hideKeyboard'] = function () {
      xauw['window']['wx']['offKeyboardConfirm'](), xauw['window']['wx']['offKeyboardInput'](), xauw['window']['wx']['hideKeyboard']({ 'success': function (ks8629) {
          console['log']('隐藏键盘');
        }, 'fail': function (nw1vbo) {
          console['log']('隐藏键盘出错:' + (nw1vbo ? nw1vbo['errMsg'] : ''));
        } });
    }, dul$;
  }(),
      eshk9 = function () {
    function kh9s6() {}jei7h(kh9s6, 'laya.wx.mini.MiniLoader');var abwzox = kh9s6['prototype'];return abwzox['load'] = function (bvz1wo, $_prd5, t6e7h, $xulaz, lbaz) {
      t6e7h === void 0x0 && (t6e7h = !![]), lbaz === void 0x0 && (lbaz = ![]);var luxaz$ = this;luxaz$['_url'] = bvz1wo;if (bvz1wo['indexOf']('data:image') === 0x0) luxaz$['_type'] = $_prd5 = 'image';else luxaz$['_type'] = $_prd5 || ($_prd5 = luxaz$['getTypeFromUrl'](bvz1wo));luxaz$['_cache'] = t6e7h, luxaz$['_data'] = null;var _3dp = 'ascii';if (bvz1wo['indexOf']('.fnt') != -0x1) _3dp = 'utf8';else $_prd5 == 'arraybuffer' && (_3dp = '');;var rd3p5_ = fcy3g5['getFileExtension'](bvz1wo);if (kh9s6['_fileTypeArr']['indexOf'](rd3p5_) != -0x1) xauw['EnvConfig']['load']['call'](this, bvz1wo, $_prd5, t6e7h, $xulaz, lbaz);else {
        if (!l$ud_a['getFileInfo'](bvz1wo)) {
          if (bvz1wo['indexOf']('layaNativeDir/') != -0x1) {
            if (xauw['isZiYu']) {
              var f3cy = l$ud_a['ziyuFileData'][bvz1wo];luxaz$['onLoaded'](f3cy);return;
            } else {
              cosnole['log']('read read'), l$ud_a['read'](bvz1wo, _3dp, new sei6hk(kh9s6, kh9s6['onReadNativeCallBack'], [_3dp, bvz1wo, $_prd5, t6e7h, $xulaz, lbaz, luxaz$]));return;
            }
          }if (woq1['rootPath'] == '') var _lda = bvz1wo;else _lda = bvz1wo['split'](woq1['rootPath'])[0x0];bvz1wo['indexOf']('http://') != -0x1 || bvz1wo['indexOf']('https://') != -0x1 ? xauw['EnvConfig']['load']['call'](luxaz$, bvz1wo, $_prd5, t6e7h, $xulaz, lbaz) : l$ud_a['readFile'](_lda, _3dp, new sei6hk(kh9s6, kh9s6['onReadNativeCallBack'], [_3dp, bvz1wo, $_prd5, t6e7h, $xulaz, lbaz, luxaz$]), bvz1wo);
        } else xauw['EnvConfig']['load']['call'](this, bvz1wo, $_prd5, t6e7h, $xulaz, lbaz);
      }
    }, abwzox['resMgrLoad'] = function ($lxua, oq1wn, baxwoz, thk6e, grf5, etijm, uzxa$) {
      baxwoz === void 0x0 && (baxwoz = 0x0), thk6e === void 0x0 && (thk6e = ![]), grf5 === void 0x0 && (grf5 = ![]), etijm === void 0x0 && (etijm = 0x0), uzxa$ === void 0x0 && (uzxa$ = 0x3), $lxua['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $lxua), xauw['EnvConfig']['resMgrLoad']($lxua, (n1v0q, q18v0n, pr53fg) => {
        kh9s6['prototype']['resMgrLoadCallBack'](n1v0q, q18v0n, pr53fg, oq1wn);
      }, baxwoz, thk6e, grf5, etijm, uzxa$);
    }, abwzox['resMgrLoadCallBack'] = function (owzvxb, cg, rlu$_, kte6ih) {
      console['log']('buff:::', owzvxb, rlu$_, l$ud_a['fileNativeDir'] + '///' + l$ud_a['fileListName']), kte6ih(owzvxb, cg, rlu$_);
    }, abwzox['clearRes'] = function (r$dl, d$_pr5) {
      d$_pr5 === void 0x0 && (d$_pr5 = ![]);var vxzbwo = this;vxzbwo['clearRes'](r$dl, d$_pr5);var k29s = l$ud_a['getFileInfo'](r$dl);if (k29s && (r$dl['indexOf']('http://') != -0x1 || r$dl['indexOf']('https://') != -0x1)) {
        var he6si = k29s['md5'],
            p_$dlr = l$ud_a['getFileNativePath'](he6si);l$ud_a['remove'](p_$dlr);
      }
    }, kh9s6['onReadNativeCallBack'] = function ($uxd, p35fg, ij7m4, s20k9, t7mjei, nqowv, wzoba, e6kth, _$ld) {
      s20k9 === void 0x0 && (s20k9 = !![]), nqowv === void 0x0 && (nqowv = ![]), e6kth === void 0x0 && (e6kth = 0x0);if (!e6kth) {
        var uabwz;if (ij7m4 == 'json' || ij7m4 == 'atlas') uabwz = xauw['getJson'](_$ld['data']);else ij7m4 == 'xml' ? uabwz = fcy3g5['parseXMLFromString'](_$ld['data']) : uabwz = _$ld['data'];wzoba['onLoaded'](uabwz), !xauw['isZiYu'] && xauw['isPosMsgYu'] && ij7m4 != 'arraybuffer' && wx['postMessage']({ 'url': p35fg, 'data': uabwz, 'isLoad': !![] });
      } else e6kth == 0x1 && xauw['EnvConfig']['load']['call'](wzoba, p35fg, ij7m4, s20k9, t7mjei, nqowv);
    }, hsk629(kh9s6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kh9s6;
  }(),
      l$ud_a = function (onvw1b) {
    function _drp$5() {
      _drp$5['__super']['call'](this);;
    }return jei7h(_drp$5, 'laya.wx.mini.MiniFileMgr', onvw1b), _drp$5['isLoadFile'] = function (he67) {
      return _drp$5['_fileTypeArr']['indexOf'](he67) != -0x1 ? !![] : ![];
    }, _drp$5['getFileInfo'] = function (ihet6) {
      var cfy = ihet6['split']('?')[0x0],
          t7ijh = _drp$5['filesListObj'][cfy];if (t7ijh == null) return null;else return t7ijh;return null;
    }, _drp$5['onFileUpdate'] = function (pg3_, owazxb) {
      var lpd_ = pg3_['split']('/'),
          ud_$al = lpd_[lpd_['length'] - 0x1],
          r53d_p = _drp$5['getFileInfo'](owazxb);if (r53d_p == null) _drp$5['onSaveFile'](owazxb, ud_$al);else {
        if (r53d_p['readyUrl'] != owazxb) _drp$5['remove'](ud_$al, owazxb);
      }
    }, _drp$5['exits'] = function (pl_dr$, hies6) {
      var n1820q = _drp$5['getFileNativePath'](pl_dr$);_drp$5['fs']['getFileInfo']({ 'filePath': n1820q, 'success': function (ozwv) {
          hies6 != null && hies6['runWith']([0x0, ozwv]);
        }, 'fail': function (pgr35_) {
          hies6 != null && hies6['runWith']([0x1, pgr35_]);
        } });
    }, _drp$5['read'] = function (cyg5, dau$xl, q0n98, u_l$rd) {
      dau$xl === void 0x0 && (dau$xl = 'ascill'), u_l$rd === void 0x0 && (u_l$rd = '');var _5dp$;u_l$rd != '' ? _5dp$ = _drp$5['getFileNativePath'](cyg5) : _5dp$ = cyg5, _drp$5['fs']['readFile']({ 'filePath': _5dp$, 'encoding': dau$xl, 'success': function (xlbzu) {
          q0n98 != null && q0n98['runWith']([0x0, xlbzu]);
        }, 'fail': function (r3_5dp) {
          if (r3_5dp && u_l$rd != '') _drp$5['down'](u_l$rd, dau$xl, q0n98, u_l$rd);else q0n98 != null && q0n98['runWith']([0x1]);
        } });
    }, _drp$5['readNativeFile'] = function (tmj, az$xul) {
      _drp$5['fs']['readFile']({ 'filePath': tmj, 'encoding': '', 'success': function (wov1zb) {
          az$xul != null && az$xul['runWith']([0x0]);
        }, 'fail': function (e6ith7) {
          az$xul != null && az$xul['runWith']([0x1]);
        } });
    }, _drp$5['down'] = function (bvwzx, oaxwzb, me7j, rd$l_u) {
      oaxwzb === void 0x0 && (oaxwzb = 'ascill'), rd$l_u === void 0x0 && (rd$l_u = '');var iek = _drp$5['getFileNativePath'](rd$l_u),
          f3gpr = _drp$5['wxdown']({ 'url': bvwzx, 'filePath': iek, 'success': function (vwoq) {
          if (vwoq['statusCode'] === 0xc8) _drp$5['readFile'](vwoq['filePath'], oaxwzb, me7j, rd$l_u);
        }, 'fail': function (nq108v) {
          me7j != null && me7j['runWith']([0x1, nq108v]);
        } });f3gpr['onProgressUpdate'](function (xzbla) {
        me7j != null && me7j['runWith']([0x2, xzbla['progress']]);
      });
    }, _drp$5['readFile'] = function (ovxz, _$rul, _uald$, fycg35) {
      _$rul === void 0x0 && (_$rul = 'ascill'), fycg35 === void 0x0 && (fycg35 = ''), _drp$5['fs']['readFile']({ 'filePath': ovxz, 'encoding': _$rul, 'success': function (p_5d) {
          if (ovxz['indexOf']('http://') != -0x1 || ovxz['indexOf']('https://') != -0x1) _drp$5['onFileUpdate'](ovxz, fycg35);_uald$ != null && _uald$['runWith']([0x0, p_5d]);
        }, 'fail': function (pd53_r) {
          if (pd53_r) _uald$ != null && _uald$['runWith']([0x1, pd53_r]);
        } });
    }, _drp$5['downImg'] = function (r$5pd_, it7mj, itek6h) {
      itek6h === void 0x0 && (itek6h = '');var ul_$dr = _drp$5['wxdown']({ 'url': r$5pd_, 'success': function (ks9028) {
          ks9028['statusCode'] === 0xc8 && _drp$5['copyFile'](ks9028['tempFilePath'], itek6h, it7mj);
        }, 'fail': function (ozvb1) {
          it7mj != null && it7mj['runWith']([0x1, ozvb1]);
        } });
    }, _drp$5['copyFile'] = function (tj7hei, m7etj, eh6ti7) {
      var f3c = tj7hei['split']('/'),
          qn801 = f3c[f3c['length'] - 0x1],
          ji4m = m7etj['split']('?')[0x0],
          bowvz1 = _drp$5['getFileInfo'](m7etj),
          r3fgp = _drp$5['getFileNativePath'](qn801);_drp$5['fs']['copyFile']({ 'srcPath': tj7hei, 'destPath': r3fgp, 'success': function (the6k) {
          if (!bowvz1) _drp$5['onSaveFile'](m7etj, qn801), eh6ti7 != null && eh6ti7['runWith']([0x0]);else {
            if (bowvz1['readyUrl'] != m7etj) _drp$5['remove'](qn801, m7etj, eh6ti7);
          }
        }, 'fail': function (sk2h69) {
          eh6ti7 != null && eh6ti7['runWith']([0x1, sk2h69]);
        } });
    }, _drp$5['getFileNativePath'] = function (je7ht) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + je7ht;
    }, _drp$5['remove'] = function (blxaz, l$azxu, p3c5gf) {
      l$azxu === void 0x0 && (l$azxu = '');var vn1oq0 = _drp$5['getFileInfo'](l$azxu),
          ru_$l = _drp$5['getFileNativePath'](vn1oq0['md5']);alx$z['loader']['clearRes'](vn1oq0['readyUrl']), _drp$5['fs']['unlink']({ 'filePath': ru_$l, 'success': function (i67t) {
          if (l$azxu != '') _drp$5['onSaveFile'](l$azxu, blxaz);p3c5gf != null && p3c5gf['runWith']([0x0]);
        }, 'fail': function (uxzawb) {} });
    }, _drp$5['onSaveFile'] = function (th7ije, h6k2s9) {
      var v1o0nq = th7ije['split']('?')[0x0];_drp$5['filesListObj'][v1o0nq] = { 'md5': h6k2s9, 'readyUrl': th7ije }, _drp$5['fs']['writeFile']({ 'filePath': _drp$5['fileNativeDir'] + '/' + _drp$5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_drp$5['filesListObj']), 'success': function (d$p_) {
          console['log']('写入测试测试成功：', d$p_);
        }, 'fail': function (gp3r_5) {
          console['log']('写入测试测试失败：', gp3r_5);
        } });
    }, _drp$5['existDir'] = function (q9082, ime7) {
      _drp$5['fs']['mkdir']({ 'dirPath': q9082, 'success': function ($luz) {
          ime7 != null && ime7['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (itejh) {
          if (itejh['errMsg']['indexOf']('file already exists') != -0x1) _drp$5['readSync'](_drp$5['fileListName'], 'utf8', ime7);else ime7 != null && ime7['runWith']([0x1, itejh]);
        } });
    }, _drp$5['readSync'] = function (zxbwau, vo1nw, d5_3r, buzlxa) {
      vo1nw === void 0x0 && (vo1nw = 'ascill'), buzlxa === void 0x0 && (buzlxa = '');var wno1vq = _drp$5['getFileNativePath'](zxbwau),
          o1qvnw;try {
        o1qvnw = _drp$5['fs']['readFileSync'](wno1vq), d5_3r != null && d5_3r['runWith']([0x0, { 'data': o1qvnw }]);
      } catch (cf3g5y) {
        d5_3r != null && d5_3r['runWith']([0x1]);
      }
    }, _drp$5['readCache'] = function () {}, _drp$5['writeCache'] = function (vzob) {
      var iethj = readyUrl['split']('?')[0x0];_drp$5['filesListObj'][iethj] = { 'md5': md5Name, 'readyUrl': readyUrl }, _drp$5['fs']['writeFile']({ 'filePath': _drp$5['fileNativeDir'] + '/' + _drp$5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_drp$5['filesListObj']), 'success': function (owazb) {}, 'fail': function (gp5f3r) {} });
    }, _drp$5['setNativeFileDir'] = function (k6ehs9) {
      _drp$5['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + k6ehs9;
    }, _drp$5['filesListObj'] = {}, _drp$5['fileNativeDir'] = null, _drp$5['fileListName'] = 'layaairfiles.txt', _drp$5['ziyuFileData'] = {}, hsk629(_drp$5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _drp$5;
  }(k20s),
      ozbw1v = function (h6ie) {
    function vnqo01() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], vnqo01['__super']['call'](this), this['_sound'] = vnqo01['_createSound'](), this['_chanell'] = new s692kh(this['_sound']);
    }jei7h(vnqo01, 'laya.wx.mini.MiniSound', h6ie);var $adx = vnqo01['prototype'];return $adx['load'] = function (p_rd$l) {
      var teji7 = this;p_rd$l = woq1['formatURL'](p_rd$l), this['url'] = p_rd$l;if (vnqo01['_audioCache'][p_rd$l]) {
        this['event']('complete');return;
      }function xu$() {
        if (vnqo01['_null'] != undefined) teji7['_sound']['onCanplay'](vnqo01['_null']), teji7['_sound']['onError'](vnqo01['_null']);else try {
          teji7['_sound']['onCanplay'](null), teji7['_sound']['onError'](null), vnqo01['_null'] = null;
        } catch (voz1) {
          console['warn']('[wxmini] _clearSound:' + voz1), teji7['_sound']['onCanplay'](v80q), teji7['_sound']['onError'](v80q), vnqo01['_null'] = v80q;
        }
      }function fp3gr5() {
        j4i7t['loaded'] = !![], j4i7t['event']('complete'), vnqo01['_audioCache'][j4i7t['url']] = j4i7t;
      }function shk62(i7etj) {
        console['error']('errCode=' + i7etj['errCode'] + '  errMsg=' + i7etj['errMsg']), j4i7t['event']('error');
      }function v80q() {}this['_sound']['onCanplay'](fp3gr5), this['_sound']['onError'](shk62), this['_sound']['src'] = p_rd$l;var j4i7t = this;
    }, $adx['play'] = function (xud$al, t4im) {
      xud$al === void 0x0 && (xud$al = 0x0), t4im === void 0x0 && (t4im = 0x0);var d3r_p5, xbza;if (this['url'] == y35fgc['_tMusic']) {
        if (!vnqo01['_musicAudio']) vnqo01['_musicAudio'] = this['_sound'];d3r_p5 = vnqo01['_musicAudio'], xbza = this['_chanell'];
      } else d3r_p5 = this['_sound'], xbza = this['_chanell'];return d3r_p5['src'] = this['url'], d3r_p5['startTime'] = 0x0, xbza['isStopped'] && (xbza['url'] = this['url'], xbza['loops'] = t4im, xbza['startTime'] = xud$al, xbza['play'](), y35fgc['addChannel'](xbza)), xbza;
    }, $adx['dispose'] = function () {
      var n1bw = vnqo01['_audioCache'][this['url']];n1bw && (n1bw['src'] = '', delete vnqo01['_audioCache'][this['url']]);
    }, qn01o(0x0, $adx, 'duration', function () {
      return this['_sound']['duration'];
    }), vnqo01['_createSound'] = function () {
      vnqo01['_id']++;var vzxob = xauw['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return vzxob;
    }, vnqo01['_musicAudio'] = null, vnqo01['_id'] = 0x0, vnqo01['_audioCache'] = {}, vnqo01['_null'] = undefined, vnqo01;
  }(k20s),
      s692kh = function (pr5_3) {
    function bv1zow(rp5_d) {
      this['_audio'] = null, this['_onEnd'] = null, bv1zow['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = rp5_d, this['_onEnd'] = fcy3g5['bind'](this['__onEnd'], this), rp5_d['onEnded'](this['_onEnd']);
    }jei7h(bv1zow, 'laya.wx.mini.MiniSoundChannel', pr5_3);var n8021q = bv1zow['prototype'];return n8021q['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (alx$z['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, n8021q['__onNull'] = function () {}, n8021q['play'] = function () {
      this['isStopped'] = ![], y35fgc['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, n8021q['stop'] = function () {
      this['isStopped'] = !![], y35fgc['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, n8021q['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, n8021q['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], y35fgc['addChannel'](this), this['_audio']['play']();
    }, qn01o(0x0, n8021q, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qn01o(0x0, n8021q, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qn01o(0x0, n8021q, 'volume', function () {
      return 0x1;
    }, function (khs96e) {}), bv1zow['_null'] = undefined, bv1zow;
  }(azubxl),
      uxa$d = function () {
    function jtmi47() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = xauw['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }jei7h(jtmi47, 'laya.wx.mini.MiniVideo');var s029q8 = jtmi47['prototype'];return s029q8['on'] = function (bwazxo, xowz, tmjei7) {
      if (bwazxo == 'loadedmetadata') this['onPlayFunc'] = tmjei7['bind'](xowz), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else bwazxo == 'ended' && (this['onEndedFunC'] = tmjei7['bind'](xowz), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, s029q8['onTimeUpdateFunc'] = function (wbaxzo) {
      this['position'] = wbaxzo['position'], this['_duration'] = wbaxzo['duration'];
    }, s029q8['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, s029q8['onended'] = function (wo1bvn, oqnv1w) {
      this['onEndedFunC'] = oqnv1w['bind'](wo1bvn), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, s029q8['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, s029q8['off'] = function (l$azx, nv80, xzau$) {
      if (l$azx == 'loadedmetadata') this['onPlayFunc'] = xzau$['bind'](nv80), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else l$azx == 'ended' && (this['onEndedFunC'] = xzau$['bind'](nv80), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, s029q8['load'] = function ($ldu_) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $ldu_;
    }, s029q8['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, s029q8['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, s029q8['size'] = function (zxau, ax$zl) {
      if (!this['videoElement']) return;this['videoElement']['width'] = zxau, this['videoElement']['height'] = ax$zl;
    }, s029q8['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, s029q8['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, qn01o(0x0, s029q8, 'duration', function () {
      return this['_duration'];
    }), qn01o(0x0, s029q8, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function ($xazl) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = $xazl;
    }), qn01o(0x0, s029q8, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), qn01o(0x0, s029q8, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), qn01o(0x0, s029q8, 'ended', function () {
      return this['videoend'];
    }), qn01o(0x0, s029q8, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (xzv) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = xzv;
    }), qn01o(0x0, s029q8, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (hteji7) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = hteji7;
    }), qn01o(0x0, s029q8, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (ks089) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = ks089;
    }), qn01o(0x0, s029q8, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), qn01o(0x0, s029q8, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (y5gfc3) {
      if (!this['videoElement']) return;this['videoElement']['x'] = y5gfc3;
    }), qn01o(0x0, s029q8, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (lx$uda) {
      if (!this['videoElement']) return;this['videoElement']['y'] = lx$uda;
    }), qn01o(0x0, s029q8, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), qn01o(0x0, s029q8, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (h9se6) {
      if (!this['videoElement']) return;this['videoElement']['src'] = h9se6;
    }), qn01o(0x0, s029q8, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (xowza) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = xowza;
    }), qn01o(0x0, s029q8, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (p5cg3) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = p5cg3;
    }), jtmi47;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var azxow in Laya) {
    var prgf3 = Laya[azxow];prgf3 && prgf3['__isclass'] && (exports[azxow] = prgf3);
  }
});