var A = wx.$N;
(function (window, document, gtfd57) {
  var l0nmu = gtfd57['un'],
      br$9w = gtfd57['uns'],
      z4ry3 = gtfd57['static'],
      y43zro = gtfd57['class'],
      len30 = gtfd57['getset'],
      rzyq94 = gtfd57['__newvec'],
      s7cg1x = laya['utils']['Browser'],
      sv2ix = laya['events']['Event'],
      _jnu = laya['events']['EventDispatcher'],
      y4r9b = laya['resource']['HTMLImage'],
      j8n_mu = laya['utils']['Handler'],
      svc1x = laya['display']['Input'],
      u_d8fh = laya['net']['Loader'],
      x1sckv = laya['maths']['Matrix'],
      jmn_u = laya['renders']['Render'],
      q$b96w = laya['utils']['RunDriver'],
      m_jnu0 = laya['media']['Sound'],
      z94yrq = laya['media']['SoundChannel'],
      wq6b$a = laya['media']['SoundManager'],
      kcx = laya['display']['Stage'],
      lnm = laya['net']['URL'],
      eln3j = laya['utils']['Utils'],
      $q96w = function () {
    function eolzy3() {}return y43zro(eolzy3, 'laya.wx.mini.MiniAdpter'), eolzy3['getJson'] = function (dt751g) {
      return JSON['parse'](dt751g);
    }, eolzy3['init'] = function (scxgv, ik2spv) {
      scxgv === void 0x0 && (scxgv = ![]), ik2spv === void 0x0 && (ik2spv = ![]);if (eolzy3['_inited']) return;eolzy3['window'] = window;if (eolzy3['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;eolzy3['_inited'] = !![], eolzy3['isZiYu'] = ik2spv, eolzy3['isPosMsgYu'] = scxgv, eolzy3['EnvConfig'] = {}, !eolzy3['isZiYu'] && (oylz3e['setNativeFileDir']('/layaairGame'), oylz3e['existDir'](oylz3e['fileNativeDir'], j8n_mu['create'](eolzy3, eolzy3['onMkdirCallBack']))), eolzy3['window']['focus'] = function () {}, gtfd57['getUrlPath'] = function () {}, eolzy3['window']['logtime'] = function (sxv1g) {}, eolzy3['window']['alertTimeLog'] = function (wb6a$q) {}, eolzy3['window']['resetShareInfo'] = function () {}, eolzy3['window']['CanvasRenderingContext2D'] = function () {}, eolzy3['window']['CanvasRenderingContext2D']['prototype'] = eolzy3['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], eolzy3['window']['document']['body']['appendChild'] = function () {}, eolzy3['EnvConfig']['pixelRatioInt'] = 0x0, q$b96w['getPixelRatio'] = eolzy3['pixelRatio'], eolzy3['_preCreateElement'] = s7cg1x['createElement'], s7cg1x['createElement'] = eolzy3['createElement'], q$b96w['createShaderCondition'] = eolzy3['createShaderCondition'], eln3j['parseXMLFromString'] = eolzy3['parseXMLFromString'], svc1x['_createInputElement'] = g7c51['_createInputElement'], eolzy3['EnvConfig']['load'] = u_d8fh['prototype']['load'], u_d8fh['prototype']['load'] = f7hd5['prototype']['load'], eolzy3['isZiYu'] && scxgv && wx['onMessage'](function (r$q4) {
        r$q4['isLoad'] && (oylz3e['ziyuFileData'][r$q4['url']] = r$q4['data']);
      });
    }, eolzy3['onMkdirCallBack'] = function (g5td, sx2k) {
      if (!g5td) oylz3e['filesListObj'] = JSON['parse'](sx2k['data']);
    }, eolzy3['pixelRatio'] = function () {
      if (!eolzy3['EnvConfig']['pixelRatioInt']) try {
        var b4r9yq = wx['getSystemInfoSync']();return eolzy3['EnvConfig']['pixelRatioInt'] = b4r9yq['pixelRatio'], b4r9yq = b4r9yq, b4r9yq['pixelRatio'];
      } catch (hf_8td) {}return eolzy3['EnvConfig']['pixelRatioInt'];
    }, eolzy3['createElement'] = function (v2xsi) {
      if (v2xsi == 'canvas') {
        var xs1kv;return eolzy3['idx'] == 0x1 ? eolzy3['isZiYu'] ? (xs1kv = sharedCanvas, xs1kv['style'] = {}) : xs1kv = window['canvas'] : xs1kv = window['wx']['createCanvas'](), eolzy3['idx']++, xs1kv;
      } else {
        if (v2xsi == 'textarea' || v2xsi == 'input') return eolzy3['onCreateInput'](v2xsi);else {
          if (v2xsi == 'div') {
            var rq = eolzy3['_preCreateElement'](v2xsi);return rq['contains'] = function (jun0lm) {
              return null;
            }, rq['removeChild'] = function (cg571x) {}, rq;
          } else return eolzy3['_preCreateElement'](v2xsi);
        }
      }
    }, eolzy3['onCreateInput'] = function (df_h8t) {
      var $wbr9 = eolzy3['_preCreateElement'](df_h8t);return $wbr9['focus'] = g7c51['wxinputFocus'], $wbr9['blur'] = g7c51['wxinputblur'], $wbr9['style'] = {}, $wbr9['value'] = 0x0, $wbr9['parentElement'] = {}, $wbr9['placeholder'] = {}, $wbr9['type'] = {}, $wbr9['setColor'] = function (v1gcxs) {}, $wbr9['setType'] = function (nuhm) {}, $wbr9['setFontFace'] = function (hud_f8) {}, $wbr9['addEventListener'] = function (orz43) {}, $wbr9['contains'] = function (aq$b6) {
        return null;
      }, $wbr9['removeChild'] = function (z9yrq) {}, $wbr9;
    }, eolzy3['createShaderCondition'] = function (je3l0o) {
      var sikxvc = this,
          kxcs = function () {
        var wbq6a$ = je3l0o;return sikxvc[je3l0o['replace']('this.', '')];
      };return kxcs;
    }, eolzy3['EnvConfig'] = null, eolzy3['window'] = null, eolzy3['_preCreateElement'] = null, eolzy3['_inited'] = ![], eolzy3['wxRequest'] = null, eolzy3['systemInfo'] = null, eolzy3['version'] = '0.0.1', eolzy3['isZiYu'] = ![], eolzy3['isPosMsgYu'] = ![], eolzy3['parseXMLFromString'] = function (j3oel0) {
      var o0ezl, xvcksi;j3oel0 = j3oel0['replace'](/>\s+</g, '><');try {
        o0ezl = new window['Parser']['DOMParser']()['parseFromString'](j3oel0, 'text/xml');
      } catch (nme0j) {
        throw '需要引入xml解析库文件';
      }return o0ezl;
    }, eolzy3['idx'] = 0x1, eolzy3;
  }(),
      w9bqr$ = function () {
    function fh7d() {}y43zro(fh7d, 'laya.wx.mini.MiniImage');var ylz3oe = fh7d['prototype'];return ylz3oe['_loadImage'] = function (ivsxk) {
      var b4r$9 = this,
          kvscx1 = ![];ivsxk['indexOf']('layaNativeDir/') == -0x1 && (kvscx1 = !![], ivsxk = lnm['formatURL'](ivsxk));if (!oylz3e['getFileInfo'](ivsxk)) {
        if (ivsxk['indexOf']('http://') != -0x1 || ivsxk['indexOf']('https://') != -0x1) oylz3e['downImg'](ivsxk, new j8n_mu(fh7d, fh7d['onDownImgCallBack'], [ivsxk, b4r$9]), ivsxk);else fh7d['onCreateImage'](ivsxk, b4r$9, !![]);
      } else fh7d['onCreateImage'](ivsxk, b4r$9, !kvscx1);
    }, fh7d['onDownImgCallBack'] = function (d8t_h, ivxks, olyz) {
      if (!olyz) fh7d['onCreateImage'](d8t_h, ivxks);else ivxks['onError'](null);
    }, fh7d['onCreateImage'] = function (ft58, f8hdu_, leoz0) {
      leoz0 === void 0x0 && (leoz0 = ![]);var c1x57g;if (!leoz0) {
        var tf5h = oylz3e['getFileInfo'](ft58),
            qyr4b = tf5h['md5'];c1x57g = oylz3e['getFileNativePath'](qyr4b);
      } else c1x57g = ft58;if (f8hdu_['imgCache'] == null) f8hdu_['imgCache'] = {};var ksv1cx;function wb9r$() {
        ksv1cx['onload'] = null, ksv1cx['onerror'] = null, delete f8hdu_['imgCache'][ft58];
      };var qzr4y = function () {
        wb9r$(), f8hdu_['onLoaded'](ksv1cx);
      },
          ufmh8_ = function () {
        wb9r$(), f8hdu_['event']('error', 'Load image failed');
      };f8hdu_['_type'] == 'nativeimage' ? (ksv1cx = new s7cg1x['window']['Image'](), ksv1cx['crossOrigin'] = '', ksv1cx['onload'] = qzr4y, ksv1cx['onerror'] = ufmh8_, ksv1cx['src'] = c1x57g, f8hdu_['imgCache'][ft58] = ksv1cx) : new y4r9b['create'](c1x57g, { 'onload': qzr4y, 'onerror': ufmh8_, 'onCreate': function (is2k) {
          ksv1cx = is2k, f8hdu_['imgCache'][ft58] = is2k;
        } });
    }, fh7d;
  }(),
      g7c51 = function () {
    function _8uhm() {}return y43zro(_8uhm, 'laya.wx.mini.MiniInput'), _8uhm['_createInputElement'] = function () {
      svc1x['_initInput'](svc1x['area'] = s7cg1x['createElement']('textarea')), svc1x['_initInput'](svc1x['input'] = s7cg1x['createElement']('input')), svc1x['inputContainer'] = s7cg1x['createElement']('div'), svc1x['inputContainer']['style']['position'] = 'absolute', svc1x['inputContainer']['style']['zIndex'] = 0x186a0, s7cg1x['container']['appendChild'](svc1x['inputContainer']), svc1x['inputContainer']['setPos'] = function (bw96q$, lnjem) {
        svc1x['inputContainer']['style']['left'] = bw96q$ + 'px', svc1x['inputContainer']['style']['top'] = lnjem + 'px';
      }, gtfd57['stage']['on']('resize', null, _8uhm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (th5f8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), wq6b$a['_soundClass'] = c57x1, wq6b$a['_musicClass'] = c57x1;
    }, _8uhm['_onStageResize'] = function () {
      var cg5t17 = gtfd57['stage']['_canvasTransform']['identity']();cg5t17['scale'](s7cg1x['width'] / jmn_u['canvas']['width'] / q$b96w['getPixelRatio'](), s7cg1x['height'] / jmn_u['canvas']['height'] / q$b96w['getPixelRatio']());
    }, _8uhm['wxinputFocus'] = function (_fuh8d) {
      var lemj0n = svc1x['inputElement']['target'];if (lemj0n && !lemj0n['editable']) return;$q96w['window']['wx']['offKeyboardConfirm'](), $q96w['window']['wx']['offKeyboardInput'](), $q96w['window']['wx']['showKeyboard']({ 'defaultValue': lemj0n['text'], 'maxLength': lemj0n['maxChars'], 'multiple': lemj0n['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (u_mn0j) {}, 'fail': function (isvpk2) {} }), $q96w['window']['wx']['onKeyboardConfirm'](function (vkcxsi) {
        var _fdh8t = vkcxsi ? vkcxsi['value'] : '';lemj0n['text'] = _fdh8t, lemj0n['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $q96w['window']['wx']['onKeyboardInput'](function (g1td5) {
        var t57f = g1td5 ? g1td5['value'] : '';if (!lemj0n['multiline']) {
          if (t57f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }lemj0n['text'] = t57f, lemj0n['event']('input');
      });
    }, _8uhm['inputEnter'] = function () {
      svc1x['inputElement']['target']['focus'] = ![];
    }, _8uhm['wxinputblur'] = function () {
      _8uhm['hideKeyboard']();
    }, _8uhm['hideKeyboard'] = function () {
      $q96w['window']['wx']['offKeyboardConfirm'](), $q96w['window']['wx']['offKeyboardInput'](), $q96w['window']['wx']['hideKeyboard']({ 'success': function (nj8um_) {
          console['log']('隐藏键盘');
        }, 'fail': function (tdh7) {
          console['log']('隐藏键盘出错:' + (tdh7 ? tdh7['errMsg'] : ''));
        } });
    }, _8uhm;
  }(),
      f7hd5 = function () {
    function oz3y4() {}y43zro(oz3y4, 'laya.wx.mini.MiniLoader');var g57d = oz3y4['prototype'];return g57d['load'] = function (ckxis, dt15, mu_h8f, m_j8, qry49z) {
      mu_h8f === void 0x0 && (mu_h8f = !![]), qry49z === void 0x0 && (qry49z = ![]);var $aw = this;$aw['_url'] = ckxis;if (ckxis['indexOf']('data:image') === 0x0) $aw['_type'] = dt15 = 'image';else $aw['_type'] = dt15 || (dt15 = $aw['getTypeFromUrl'](ckxis));$aw['_cache'] = mu_h8f, $aw['_data'] = null;var jun0 = 'ascii';if (ckxis['indexOf']('.fnt') != -0x1) jun0 = 'utf8';else dt15 == 'arraybuffer' && (jun0 = '');;var ixcs = eln3j['getFileExtension'](ckxis);if (oz3y4['_fileTypeArr']['indexOf'](ixcs) != -0x1) $q96w['EnvConfig']['load']['call'](this, ckxis, dt15, mu_h8f, m_j8, qry49z);else {
        if (!oylz3e['getFileInfo'](ckxis)) {
          if (ckxis['indexOf']('layaNativeDir/') != -0x1) {
            if ($q96w['isZiYu']) {
              var hm_8u = oylz3e['ziyuFileData'][ckxis];$aw['onLoaded'](hm_8u);return;
            } else {
              cosnole['log']('read read'), oylz3e['read'](ckxis, jun0, new j8n_mu(oz3y4, oz3y4['onReadNativeCallBack'], [jun0, ckxis, dt15, mu_h8f, m_j8, qry49z, $aw]));return;
            }
          }if (lnm['rootPath'] == '') var ozy3l = ckxis;else ozy3l = ckxis['split'](lnm['rootPath'])[0x0];ckxis['indexOf']('http://') != -0x1 || ckxis['indexOf']('https://') != -0x1 ? $q96w['EnvConfig']['load']['call']($aw, ckxis, dt15, mu_h8f, m_j8, qry49z) : oylz3e['readFile'](ozy3l, jun0, new j8n_mu(oz3y4, oz3y4['onReadNativeCallBack'], [jun0, ckxis, dt15, mu_h8f, m_j8, qry49z, $aw]), ckxis);
        } else $q96w['EnvConfig']['load']['call'](this, ckxis, dt15, mu_h8f, m_j8, qry49z);
      }
    }, g57d['resMgrLoad'] = function (mn_uj8, u_8hf, b$aqw, $rq4b9, cx1sgv, sgxc1, ikvxs2) {
      b$aqw === void 0x0 && (b$aqw = 0x0), $rq4b9 === void 0x0 && ($rq4b9 = ![]), cx1sgv === void 0x0 && (cx1sgv = ![]), sgxc1 === void 0x0 && (sgxc1 = 0x0), ikvxs2 === void 0x0 && (ikvxs2 = 0x3), mn_uj8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mn_uj8), $q96w['EnvConfig']['resMgrLoad'](mn_uj8, (g5c71t, t8dfh, qz9y4) => {
        oz3y4['prototype']['resMgrLoadCallBack'](g5c71t, t8dfh, qz9y4, u_8hf);
      }, b$aqw, $rq4b9, cx1sgv, sgxc1, ikvxs2);
    }, g57d['resMgrLoadCallBack'] = function (cxsikv, lmnju0, _t8dfh, dfg75) {
      console['log']('buff:::', cxsikv, _t8dfh, oylz3e['fileNativeDir'] + '///' + oylz3e['fileListName']), dfg75(cxsikv, lmnju0, _t8dfh);
    }, g57d['clearRes'] = function (h8td_, y4q9rb) {
      y4q9rb === void 0x0 && (y4q9rb = ![]);var kicxs = this;kicxs['clearRes'](h8td_, y4q9rb);var k2pvis = oylz3e['getFileInfo'](h8td_);if (k2pvis && (h8td_['indexOf']('http://') != -0x1 || h8td_['indexOf']('https://') != -0x1)) {
        var vsgc1 = k2pvis['md5'],
            spi2kv = oylz3e['getFileNativePath'](vsgc1);oylz3e['remove'](spi2kv);
      }
    }, oz3y4['onReadNativeCallBack'] = function (gcsv1x, sc71gx, d8fh5, z0l3o, dg571t, h_8nmu, ej0ol3, ole3z0, oey34) {
      z0l3o === void 0x0 && (z0l3o = !![]), h_8nmu === void 0x0 && (h_8nmu = ![]), ole3z0 === void 0x0 && (ole3z0 = 0x0);if (!ole3z0) {
        var um0njl;if (d8fh5 == 'json' || d8fh5 == 'atlas') um0njl = $q96w['getJson'](oey34['data']);else d8fh5 == 'xml' ? um0njl = eln3j['parseXMLFromString'](oey34['data']) : um0njl = oey34['data'];ej0ol3['onLoaded'](um0njl), !$q96w['isZiYu'] && $q96w['isPosMsgYu'] && d8fh5 != 'arraybuffer' && wx['postMessage']({ 'url': sc71gx, 'data': um0njl, 'isLoad': !![] });
      } else ole3z0 == 0x1 && $q96w['EnvConfig']['load']['call'](ej0ol3, sc71gx, d8fh5, z0l3o, dg571t, h_8nmu);
    }, z4ry3(oz3y4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), oz3y4;
  }(),
      oylz3e = function (n30) {
    function svxk1c() {
      svxk1c['__super']['call'](this);;
    }return y43zro(svxk1c, 'laya.wx.mini.MiniFileMgr', n30), svxk1c['isLoadFile'] = function (xkcv) {
      return svxk1c['_fileTypeArr']['indexOf'](xkcv) != -0x1 ? !![] : ![];
    }, svxk1c['getFileInfo'] = function (lnjm0e) {
      var mnl0je = lnjm0e['split']('?')[0x0],
          fdgt7 = svxk1c['filesListObj'][mnl0je];if (fdgt7 == null) return null;else return fdgt7;return null;
    }, svxk1c['onFileUpdate'] = function (hdt_, xi2) {
      var yr4b9q = hdt_['split']('/'),
          wqr9b = yr4b9q[yr4b9q['length'] - 0x1],
          vsikc = svxk1c['getFileInfo'](xi2);if (vsikc == null) svxk1c['onSaveFile'](xi2, wqr9b);else {
        if (vsikc['readyUrl'] != xi2) svxk1c['remove'](wqr9b, xi2);
      }
    }, svxk1c['exits'] = function (mejln0, tf57d) {
      var yqbr = svxk1c['getFileNativePath'](mejln0);svxk1c['fs']['getFileInfo']({ 'filePath': yqbr, 'success': function (ftd8_) {
          tf57d != null && tf57d['runWith']([0x0, ftd8_]);
        }, 'fail': function (csx1) {
          tf57d != null && tf57d['runWith']([0x1, csx1]);
        } });
    }, svxk1c['read'] = function (wb$a6, wq$ab, tg1d57, ixkc) {
      wq$ab === void 0x0 && (wq$ab = 'ascill'), ixkc === void 0x0 && (ixkc = '');var ixvskc;ixkc != '' ? ixvskc = svxk1c['getFileNativePath'](wb$a6) : ixvskc = wb$a6, svxk1c['fs']['readFile']({ 'filePath': ixvskc, 'encoding': wq$ab, 'success': function (tfd57) {
          tg1d57 != null && tg1d57['runWith']([0x0, tfd57]);
        }, 'fail': function (q4$b9r) {
          if (q4$b9r && ixkc != '') svxk1c['down'](ixkc, wq$ab, tg1d57, ixkc);else tg1d57 != null && tg1d57['runWith']([0x1]);
        } });
    }, svxk1c['readNativeFile'] = function (b9yr4, nm8_j) {
      svxk1c['fs']['readFile']({ 'filePath': b9yr4, 'encoding': '', 'success': function (d5hf) {
          nm8_j != null && nm8_j['runWith']([0x0]);
        }, 'fail': function (tfdg75) {
          nm8_j != null && nm8_j['runWith']([0x1]);
        } });
    }, svxk1c['down'] = function (bw6$, $r4q9, _8tfhd, br9q4$) {
      $r4q9 === void 0x0 && ($r4q9 = 'ascill'), br9q4$ === void 0x0 && (br9q4$ = '');var g71tc = svxk1c['getFileNativePath'](br9q4$),
          q9ryz4 = svxk1c['wxdown']({ 'url': bw6$, 'filePath': g71tc, 'success': function (a$wb6q) {
          if (a$wb6q['statusCode'] === 0xc8) svxk1c['readFile'](a$wb6q['filePath'], $r4q9, _8tfhd, br9q4$);
        }, 'fail': function (zly3) {
          _8tfhd != null && _8tfhd['runWith']([0x1, zly3]);
        } });q9ryz4['onProgressUpdate'](function (t1d57g) {
        _8tfhd != null && _8tfhd['runWith']([0x2, t1d57g['progress']]);
      });
    }, svxk1c['readFile'] = function (z3yro, ml0enj, nj_, oyz34e) {
      ml0enj === void 0x0 && (ml0enj = 'ascill'), oyz34e === void 0x0 && (oyz34e = ''), svxk1c['fs']['readFile']({ 'filePath': z3yro, 'encoding': ml0enj, 'success': function (s2xvki) {
          if (z3yro['indexOf']('http://') != -0x1 || z3yro['indexOf']('https://') != -0x1) svxk1c['onFileUpdate'](z3yro, oyz34e);nj_ != null && nj_['runWith']([0x0, s2xvki]);
        }, 'fail': function (s2vxki) {
          if (s2vxki) nj_ != null && nj_['runWith']([0x1, s2vxki]);
        } });
    }, svxk1c['downImg'] = function (r9b4$, ry9z4, t1g5d7) {
      t1g5d7 === void 0x0 && (t1g5d7 = '');var vxck1s = svxk1c['wxdown']({ 'url': r9b4$, 'success': function (sk1vc) {
          sk1vc['statusCode'] === 0xc8 && svxk1c['copyFile'](sk1vc['tempFilePath'], t1g5d7, ry9z4);
        }, 'fail': function (h8u_fm) {
          ry9z4 != null && ry9z4['runWith']([0x1, h8u_fm]);
        } });
    }, svxk1c['copyFile'] = function (enj0l, nuh8m, n_0jm) {
      var rbq = enj0l['split']('/'),
          gx7c15 = rbq[rbq['length'] - 0x1],
          _8tdh = nuh8m['split']('?')[0x0],
          e0o3jl = svxk1c['getFileInfo'](nuh8m),
          vciksx = svxk1c['getFileNativePath'](gx7c15);svxk1c['fs']['copyFile']({ 'srcPath': enj0l, 'destPath': vciksx, 'success': function (kix2) {
          if (!e0o3jl) svxk1c['onSaveFile'](nuh8m, gx7c15), n_0jm != null && n_0jm['runWith']([0x0]);else {
            if (e0o3jl['readyUrl'] != nuh8m) svxk1c['remove'](gx7c15, nuh8m, n_0jm);
          }
        }, 'fail': function (s1xkcv) {
          n_0jm != null && n_0jm['runWith']([0x1, s1xkcv]);
        } });
    }, svxk1c['getFileNativePath'] = function (e0jlm) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + e0jlm;
    }, svxk1c['remove'] = function (y3ze, f5d7t, ksvci) {
      f5d7t === void 0x0 && (f5d7t = '');var ujn_8m = svxk1c['getFileInfo'](f5d7t),
          rbq94$ = svxk1c['getFileNativePath'](ujn_8m['md5']);gtfd57['loader']['clearRes'](ujn_8m['readyUrl']), svxk1c['fs']['unlink']({ 'filePath': rbq94$, 'success': function (vips2) {
          if (f5d7t != '') svxk1c['onSaveFile'](f5d7t, y3ze);ksvci != null && ksvci['runWith']([0x0]);
        }, 'fail': function (ks2p) {} });
    }, svxk1c['onSaveFile'] = function ($q4b9r, u_m8nj) {
      var qbw9r = $q4b9r['split']('?')[0x0];svxk1c['filesListObj'][qbw9r] = { 'md5': u_m8nj, 'readyUrl': $q4b9r }, svxk1c['fs']['writeFile']({ 'filePath': svxk1c['fileNativeDir'] + '/' + svxk1c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](svxk1c['filesListObj']), 'success': function (n3j0) {
          console['log']('写入测试测试成功：', n3j0);
        }, 'fail': function (b9q$) {
          console['log']('写入测试测试失败：', b9q$);
        } });
    }, svxk1c['existDir'] = function (sxivc, q9b$r) {
      svxk1c['fs']['mkdir']({ 'dirPath': sxivc, 'success': function (sk2vi) {
          q9b$r != null && q9b$r['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (z4r9) {
          if (z4r9['errMsg']['indexOf']('file already exists') != -0x1) svxk1c['readSync'](svxk1c['fileListName'], 'utf8', q9b$r);else q9b$r != null && q9b$r['runWith']([0x1, z4r9]);
        } });
    }, svxk1c['readSync'] = function (nu_8jm, hd8uf_, g5t7d1, sikpv2) {
      hd8uf_ === void 0x0 && (hd8uf_ = 'ascill'), sikpv2 === void 0x0 && (sikpv2 = '');var q94rzy = svxk1c['getFileNativePath'](nu_8jm),
          gc1x75;try {
        gc1x75 = svxk1c['fs']['readFileSync'](q94rzy), g5t7d1 != null && g5t7d1['runWith']([0x0, { 'data': gc1x75 }]);
      } catch (yrq9z) {
        g5t7d1 != null && g5t7d1['runWith']([0x1]);
      }
    }, svxk1c['readCache'] = function () {}, svxk1c['writeCache'] = function (y3r4o) {
      var nm8h = readyUrl['split']('?')[0x0];svxk1c['filesListObj'][nm8h] = { 'md5': md5Name, 'readyUrl': readyUrl }, svxk1c['fs']['writeFile']({ 'filePath': svxk1c['fileNativeDir'] + '/' + svxk1c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](svxk1c['filesListObj']), 'success': function (d8tf_h) {}, 'fail': function (hd8tf5) {} });
    }, svxk1c['setNativeFileDir'] = function (zo0e3l) {
      svxk1c['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zo0e3l;
    }, svxk1c['filesListObj'] = {}, svxk1c['fileNativeDir'] = null, svxk1c['fileListName'] = 'layaairfiles.txt', svxk1c['ziyuFileData'] = {}, z4ry3(svxk1c, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), svxk1c;
  }(_jnu),
      c57x1 = function (z3o4r) {
    function m_h8f() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], m_h8f['__super']['call'](this), this['_sound'] = m_h8f['_createSound']();
    }y43zro(m_h8f, 'laya.wx.mini.MiniSound', z3o4r);var mnj0ul = m_h8f['prototype'];return mnj0ul['load'] = function (ej0l3n) {
      var r3zo4y = this;ej0l3n = lnm['formatURL'](ej0l3n), this['url'] = ej0l3n;if (m_h8f['_audioCache'][ej0l3n]) {
        this['event']('complete');return;
      }function nml0() {
        if (m_h8f['_null'] != undefined) r3zo4y['_sound']['onCanplay'](m_h8f['_null']), r3zo4y['_sound']['onError'](m_h8f['_null']);else try {
          r3zo4y['_sound']['onCanplay'](null), r3zo4y['_sound']['onError'](null), m_h8f['_null'] = null;
        } catch (w9$b6q) {
          console['warn']('[wxmini] _clearSound:' + w9$b6q), r3zo4y['_sound']['onCanplay'](yoez34), r3zo4y['_sound']['onError'](yoez34), m_h8f['_null'] = yoez34;
        }
      }function scvkx() {
        nml0(), sp2vki['loaded'] = !![], sp2vki['event']('complete'), m_h8f['_audioCache'][sp2vki['url']] = sp2vki;
      }function s2xik(f7dgt5) {
        console['error']('errCode=' + f7dgt5['errCode'] + '  errMsg=' + f7dgt5['errMsg']), nml0(), sp2vki['event']('error');
      }function yoez34() {}this['_sound']['onCanplay'](scvkx), this['_sound']['onError'](s2xik), this['_sound']['src'] = ej0l3n;var sp2vki = this;
    }, mnj0ul['play'] = function (yzo3e4, r9y4qb) {
      yzo3e4 === void 0x0 && (yzo3e4 = 0x0), r9y4qb === void 0x0 && (r9y4qb = 0x0);var vs1k;if (this['url'] == wq6b$a['_tMusic']) {
        if (!m_h8f['_musicAudio']) m_h8f['_musicAudio'] = m_h8f['_createSound']();vs1k = m_h8f['_musicAudio'];
      } else vs1k = m_h8f['_createSound']();vs1k['src'] = this['url'];var oje30 = new vsg1xc(vs1k);return oje30['url'] = this['url'], oje30['loops'] = r9y4qb, oje30['startTime'] = yzo3e4, oje30['play'](), wq6b$a['addChannel'](oje30), oje30;
    }, mnj0ul['dispose'] = function () {
      var y4oe3z = m_h8f['_audioCache'][this['url']];y4oe3z && (y4oe3z['src'] = '', delete m_h8f['_audioCache'][this['url']]);
    }, len30(0x0, mnj0ul, 'duration', function () {
      return this['_sound']['duration'];
    }), m_h8f['_createSound'] = function () {
      return m_h8f['_id']++, $q96w['window']['wx']['createInnerAudioContext']();
    }, m_h8f['_musicAudio'] = null, m_h8f['_id'] = 0x0, m_h8f['_audioCache'] = {}, m_h8f['_null'] = undefined, m_h8f;
  }(_jnu),
      vsg1xc = function (ulm) {
    function vxicsk(d5tfg) {
      this['_audio'] = null, this['_onEnd'] = null, vxicsk['__super']['call'](this), this['_audio'] = d5tfg, this['_onEnd'] = eln3j['bind'](this['__onEnd'], this), d5tfg['onEnded'](this['_onEnd']);
    }y43zro(vxicsk, 'laya.wx.mini.MiniSoundChannel', ulm);var q9wb6$ = vxicsk['prototype'];return q9wb6$['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gtfd57['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, q9wb6$['__onNull'] = function () {}, q9wb6$['play'] = function () {
      this['isStopped'] = ![], wq6b$a['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, q9wb6$['stop'] = function () {
      this['isStopped'] = !![], wq6b$a['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (vxicsk['_null'] != undefined) this['_audio']['onEnded'](vxicsk['_null']);else try {
        this['_audio']['onEnded'](null), vxicsk['_null'] = null;
      } catch (j0mlne) {
        console['warn']('[wxmini] stop:' + j0mlne), this['_audio']['onEnded'](eln3j['bind'](this['__onNull'], this)), vxicsk['_null'] = eln3j['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, q9wb6$['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, q9wb6$['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], wq6b$a['addChannel'](this), this['_audio']['play']();
    }, len30(0x0, q9wb6$, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), len30(0x0, q9wb6$, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), len30(0x0, q9wb6$, 'volume', function () {
      return 0x1;
    }, function (qry4b9) {}), vxicsk['_null'] = undefined, vxicsk;
  }(z94yrq);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dh7ft5 in Laya) {
    var qb$r4 = Laya[dh7ft5];qb$r4 && qb$r4['__isclass'] && (exports[dh7ft5] = qb$r4);
  }
});