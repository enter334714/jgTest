var E = wx.$p;
(function (window, document, vyi$61) {
  var u_tmfx = vyi$61['un'],
      $v167 = vyi$61['uns'],
      y$i6jk = vyi$61['static'],
      lux4 = vyi$61['class'],
      umxf_ = vyi$61['getset'],
      acdgb = vyi$61['__newvec'],
      ew9n8 = laya['utils']['Browser'],
      u_xfm = laya['events']['Event'],
      a9qg8b = laya['events']['EventDispatcher'],
      e95n8 = laya['resource']['HTMLImage'],
      ji$y61 = laya['utils']['Handler'],
      zne3w = laya['display']['Input'],
      kspj4 = laya['net']['Loader'],
      we8n59 = laya['maths']['Matrix'],
      w5n8e9 = laya['renders']['Render'],
      e59q8 = laya['utils']['RunDriver'],
      w502 = laya['media']['Sound'],
      wn5e3 = laya['media']['SoundChannel'],
      rz0v27 = laya['media']['SoundManager'],
      fuxom_ = laya['display']['Stage'],
      tm_xfu = laya['net']['URL'],
      ts4lh = laya['utils']['Utils'],
      u4tpl = function () {
    function v71$6() {}return lux4(v71$6, 'laya.wx.mini.MiniAdpter'), v71$6['getJson'] = function (l4ptsx) {
      return JSON['parse'](l4ptsx);
    }, v71$6['init'] = function ($61y, a8eq9b) {
      $61y === void 0x0 && ($61y = ![]), a8eq9b === void 0x0 && (a8eq9b = ![]);if (v71$6['_inited']) return;v71$6['window'] = window;if (v71$6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;v71$6['_inited'] = !![], v71$6['isZiYu'] = a8eq9b, v71$6['isPosMsgYu'] = $61y, v71$6['EnvConfig'] = {}, !v71$6['isZiYu'] && (b98ga['setNativeFileDir']('/layaairGame'), b98ga['existDir'](b98ga['fileNativeDir'], ji$y61['create'](v71$6, v71$6['onMkdirCallBack']))), v71$6['window']['focus'] = function () {}, vyi$61['getUrlPath'] = function () {}, v71$6['window']['logtime'] = function (ptufl) {}, v71$6['window']['alertTimeLog'] = function (gabqc) {}, v71$6['window']['resetShareInfo'] = function () {}, v71$6['window']['CanvasRenderingContext2D'] = function () {}, v71$6['window']['CanvasRenderingContext2D']['prototype'] = v71$6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], v71$6['window']['document']['body']['appendChild'] = function () {}, v71$6['EnvConfig']['pixelRatioInt'] = 0x0, e59q8['getPixelRatio'] = v71$6['pixelRatio'], v71$6['_preCreateElement'] = ew9n8['createElement'], ew9n8['createElement'] = v71$6['createElement'], e59q8['createShaderCondition'] = v71$6['createShaderCondition'], ts4lh['parseXMLFromString'] = v71$6['parseXMLFromString'], zne3w['_createInputElement'] = z3052w['_createInputElement'], v71$6['EnvConfig']['load'] = kspj4['prototype']['load'], kspj4['prototype']['load'] = ne9q85['prototype']['load'], v71$6['isZiYu'] && $61y && wx['onMessage'](function (w3ne95) {
        w3ne95['isLoad'] && (b98ga['ziyuFileData'][w3ne95['url']] = w3ne95['data']);
      });
    }, v71$6['onMkdirCallBack'] = function (pkj4s, spxt) {
      if (!pkj4s) b98ga['filesListObj'] = JSON['parse'](spxt['data']);
    }, v71$6['pixelRatio'] = function () {
      if (!v71$6['EnvConfig']['pixelRatioInt']) try {
        var gb8 = wx['getSystemInfoSync']();return v71$6['EnvConfig']['pixelRatioInt'] = gb8['pixelRatio'], gb8 = gb8, gb8['pixelRatio'];
      } catch (kj$iy6) {}return v71$6['EnvConfig']['pixelRatioInt'];
    }, v71$6['createElement'] = function (we8n) {
      if (we8n == 'canvas') {
        var vz70;return v71$6['idx'] == 0x1 ? v71$6['isZiYu'] ? (vz70 = sharedCanvas, vz70['style'] = {}) : vz70 = window['canvas'] : vz70 = window['wx']['createCanvas'](), v71$6['idx']++, vz70;
      } else {
        if (we8n == 'textarea' || we8n == 'input') return v71$6['onCreateInput'](we8n);else {
          if (we8n == 'div') {
            var q9a8bg = v71$6['_preCreateElement'](we8n);return q9a8bg['contains'] = function (jh4is) {
              return null;
            }, q9a8bg['removeChild'] = function (ox_f) {}, q9a8bg;
          } else return v71$6['_preCreateElement'](we8n);
        }
      }
    }, v71$6['onCreateInput'] = function (xftmu) {
      var w3en59 = v71$6['_preCreateElement'](xftmu);return w3en59['focus'] = z3052w['wxinputFocus'], w3en59['blur'] = z3052w['wxinputblur'], w3en59['style'] = {}, w3en59['value'] = 0x0, w3en59['parentElement'] = {}, w3en59['placeholder'] = {}, w3en59['type'] = {}, w3en59['setColor'] = function (lxf_ut) {}, w3en59['setType'] = function (wn) {}, w3en59['setFontFace'] = function (kslph) {}, w3en59['addEventListener'] = function (fumt) {}, w3en59['contains'] = function (qg8ab) {
        return null;
      }, w3en59['removeChild'] = function (u_f) {}, w3en59;
    }, v71$6['createShaderCondition'] = function (xflpu) {
      var f_tlu = this,
          fpulxt = function () {
        var cbqag8 = xflpu;return f_tlu[xflpu['replace']('this.', '')];
      };return fpulxt;
    }, v71$6['EnvConfig'] = null, v71$6['window'] = null, v71$6['_preCreateElement'] = null, v71$6['_inited'] = ![], v71$6['wxRequest'] = null, v71$6['systemInfo'] = null, v71$6['version'] = '0.0.1', v71$6['isZiYu'] = ![], v71$6['isPosMsgYu'] = ![], v71$6['parseXMLFromString'] = function (ew935n) {
      var dgqcba, rvz07;ew935n = ew935n['replace'](/>\s+</g, '><');try {
        dgqcba = new window['Parser']['DOMParser']()['parseFromString'](ew935n, 'text/xml');
      } catch (tlp4sx) {
        throw '需要引入xml解析库文件';
      }return dgqcba;
    }, v71$6['idx'] = 0x1, v71$6;
  }(),
      y7$v = function () {
    function tpxflu() {}lux4(tpxflu, 'laya.wx.mini.MiniImage');var vz7r = tpxflu['prototype'];return vz7r['_loadImage'] = function (h$kji) {
      var ji1$ = this,
          r$716 = ![];h$kji['indexOf']('layaNativeDir/') == -0x1 && (r$716 = !![], h$kji = tm_xfu['formatURL'](h$kji));if (!b98ga['getFileInfo'](h$kji)) {
        if (h$kji['indexOf']('http://') != -0x1 || h$kji['indexOf']('https://') != -0x1) b98ga['downImg'](h$kji, new ji$y61(tpxflu, tpxflu['onDownImgCallBack'], [h$kji, ji1$]), h$kji);else tpxflu['onCreateImage'](h$kji, ji1$, !![]);
      } else tpxflu['onCreateImage'](h$kji, ji1$, !r$716);
    }, tpxflu['onDownImgCallBack'] = function (flutp, ltxp4, v17r6) {
      if (!v17r6) tpxflu['onCreateImage'](flutp, ltxp4);else ltxp4['onError'](null);
    }, tpxflu['onCreateImage'] = function (beqa89, xu_fl, ne953) {
      ne953 === void 0x0 && (ne953 = ![]);var m_xfu;if (!ne953) {
        var ik4hj = b98ga['getFileInfo'](beqa89),
            fmtxu_ = ik4hj['md5'];m_xfu = b98ga['getFileNativePath'](fmtxu_);
      } else m_xfu = beqa89;if (xu_fl['imgCache'] == null) xu_fl['imgCache'] = {};var k4shj;function _fuxmo() {
        k4shj['onload'] = null, k4shj['onerror'] = null, delete xu_fl['imgCache'][beqa89];
      };var $167rv = function () {
        _fuxmo(), xu_fl['onLoaded'](k4shj);
      },
          x_ltu = function () {
        _fuxmo(), xu_fl['event']('error', 'Load image failed');
      };xu_fl['_type'] == 'nativeimage' ? (k4shj = new ew9n8['window']['Image'](), k4shj['crossOrigin'] = '', k4shj['onload'] = $167rv, k4shj['onerror'] = x_ltu, k4shj['src'] = m_xfu, xu_fl['imgCache'][beqa89] = k4shj) : new e95n8['create'](m_xfu, { 'onload': $167rv, 'onerror': x_ltu, 'onCreate': function (i$61j) {
          k4shj = i$61j, xu_fl['imgCache'][beqa89] = i$61j;
        } });
    }, tpxflu;
  }(),
      z3052w = function () {
    function _fxt() {}return lux4(_fxt, 'laya.wx.mini.MiniInput'), _fxt['_createInputElement'] = function () {
      zne3w['_initInput'](zne3w['area'] = ew9n8['createElement']('textarea')), zne3w['_initInput'](zne3w['input'] = ew9n8['createElement']('input')), zne3w['inputContainer'] = ew9n8['createElement']('div'), zne3w['inputContainer']['style']['position'] = 'absolute', zne3w['inputContainer']['style']['zIndex'] = 0x186a0, ew9n8['container']['appendChild'](zne3w['inputContainer']), zne3w['inputContainer']['setPos'] = function (bac8qg, cgqa8) {
        zne3w['inputContainer']['style']['left'] = bac8qg + 'px', zne3w['inputContainer']['style']['top'] = cgqa8 + 'px';
      }, vyi$61['stage']['on']('resize', null, _fxt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (benq89) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rz0v27['_soundClass'] = $y7v61, rz0v27['_musicClass'] = $y7v61;
    }, _fxt['_onStageResize'] = function () {
      var tpl4ux = vyi$61['stage']['_canvasTransform']['identity']();tpl4ux['scale'](ew9n8['width'] / w5n8e9['canvas']['width'] / e59q8['getPixelRatio'](), ew9n8['height'] / w5n8e9['canvas']['height'] / e59q8['getPixelRatio']());
    }, _fxt['wxinputFocus'] = function (p4sxt) {
      var spth4 = zne3w['inputElement']['target'];if (spth4 && !spth4['editable']) return;u4tpl['window']['wx']['offKeyboardConfirm'](), u4tpl['window']['wx']['offKeyboardInput'](), u4tpl['window']['wx']['showKeyboard']({ 'defaultValue': spth4['text'], 'maxLength': spth4['maxChars'], 'multiple': spth4['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (psj4hk) {}, 'fail': function (skl4hp) {} }), u4tpl['window']['wx']['onKeyboardConfirm'](function (vr167) {
        var _fmuox = vr167 ? vr167['value'] : '';spth4['text'] = _fmuox, spth4['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), u4tpl['window']['wx']['onKeyboardInput'](function (gadqc) {
        var ji$61y = gadqc ? gadqc['value'] : '';if (!spth4['multiline']) {
          if (ji$61y['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }spth4['text'] = ji$61y, spth4['event']('input');
      });
    }, _fxt['inputEnter'] = function () {
      zne3w['inputElement']['target']['focus'] = ![];
    }, _fxt['wxinputblur'] = function () {
      _fxt['hideKeyboard']();
    }, _fxt['hideKeyboard'] = function () {
      u4tpl['window']['wx']['offKeyboardConfirm'](), u4tpl['window']['wx']['offKeyboardInput'](), u4tpl['window']['wx']['hideKeyboard']({ 'success': function (ne98q5) {
          console['log']('隐藏键盘');
        }, 'fail': function (hksp) {
          console['log']('隐藏键盘出错:' + (hksp ? hksp['errMsg'] : ''));
        } });
    }, _fxt;
  }(),
      ne9q85 = function () {
    function _xfmu() {}lux4(_xfmu, 'laya.wx.mini.MiniLoader');var a8bq9e = _xfmu['prototype'];return a8bq9e['load'] = function (tp4u, i6j$y, qa89, q958en, tmu_x) {
      qa89 === void 0x0 && (qa89 = !![]), tmu_x === void 0x0 && (tmu_x = ![]);var sk4ih = this;sk4ih['_url'] = tp4u;if (tp4u['indexOf']('data:image') === 0x0) sk4ih['_type'] = i6j$y = 'image';else sk4ih['_type'] = i6j$y || (i6j$y = sk4ih['getTypeFromUrl'](tp4u));sk4ih['_cache'] = qa89, sk4ih['_data'] = null;var z3250w = 'ascii';if (tp4u['indexOf']('.fnt') != -0x1) z3250w = 'utf8';else i6j$y == 'arraybuffer' && (z3250w = '');;var cg8ba = ts4lh['getFileExtension'](tp4u);if (_xfmu['_fileTypeArr']['indexOf'](cg8ba) != -0x1) u4tpl['EnvConfig']['load']['call'](this, tp4u, i6j$y, qa89, q958en, tmu_x);else {
        if (!b98ga['getFileInfo'](tp4u)) {
          if (tp4u['indexOf']('layaNativeDir/') != -0x1) {
            if (u4tpl['isZiYu']) {
              var jk$hi = b98ga['ziyuFileData'][tp4u];sk4ih['onLoaded'](jk$hi);return;
            } else {
              cosnole['log']('read read'), b98ga['read'](tp4u, z3250w, new ji$y61(_xfmu, _xfmu['onReadNativeCallBack'], [z3250w, tp4u, i6j$y, qa89, q958en, tmu_x, sk4ih]));return;
            }
          }if (tm_xfu['rootPath'] == '') var n5ew = tp4u;else n5ew = tp4u['split'](tm_xfu['rootPath'])[0x0];tp4u['indexOf']('http://') != -0x1 || tp4u['indexOf']('https://') != -0x1 ? u4tpl['EnvConfig']['load']['call'](sk4ih, tp4u, i6j$y, qa89, q958en, tmu_x) : b98ga['readFile'](n5ew, z3250w, new ji$y61(_xfmu, _xfmu['onReadNativeCallBack'], [z3250w, tp4u, i6j$y, qa89, q958en, tmu_x, sk4ih]), tp4u);
        } else u4tpl['EnvConfig']['load']['call'](this, tp4u, i6j$y, qa89, q958en, tmu_x);
      }
    }, a8bq9e['resMgrLoad'] = function (pt4xlu, utfxm_, zen53w, qe8ba9, rv671, $ihk, z0r72v) {
      zen53w === void 0x0 && (zen53w = 0x0), qe8ba9 === void 0x0 && (qe8ba9 = ![]), rv671 === void 0x0 && (rv671 = ![]), $ihk === void 0x0 && ($ihk = 0x0), z0r72v === void 0x0 && (z0r72v = 0x3), pt4xlu['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', pt4xlu), u4tpl['EnvConfig']['resMgrLoad'](pt4xlu, (rv16, n3ew, utl4xp) => {
        _xfmu['prototype']['resMgrLoadCallBack'](rv16, n3ew, utl4xp, utfxm_);
      }, zen53w, qe8ba9, rv671, $ihk, z0r72v);
    }, a8bq9e['resMgrLoadCallBack'] = function (agcbq, h4jis, w3r02, n8e9w5) {
      console['log']('buff:::', agcbq, w3r02, b98ga['fileNativeDir'] + '///' + b98ga['fileListName']), n8e9w5(agcbq, h4jis, w3r02);
    }, a8bq9e['clearRes'] = function (wz0n53, xflt_u) {
      xflt_u === void 0x0 && (xflt_u = ![]);var v7r1$ = this;v7r1$['clearRes'](wz0n53, xflt_u);var n3ew9 = b98ga['getFileInfo'](wz0n53);if (n3ew9 && (wz0n53['indexOf']('http://') != -0x1 || wz0n53['indexOf']('https://') != -0x1)) {
        var lhp4sk = n3ew9['md5'],
            hp4t = b98ga['getFileNativePath'](lhp4sk);b98ga['remove'](hp4t);
      }
    }, _xfmu['onReadNativeCallBack'] = function (l4x, r0v172, en8q9b, hk4spl, hkysij, pt4ls, p4tul, w58ne9, $i6j1y) {
      hk4spl === void 0x0 && (hk4spl = !![]), pt4ls === void 0x0 && (pt4ls = ![]), w58ne9 === void 0x0 && (w58ne9 = 0x0);if (!w58ne9) {
        var psj;if (en8q9b == 'json' || en8q9b == 'atlas') psj = u4tpl['getJson']($i6j1y['data']);else en8q9b == 'xml' ? psj = ts4lh['parseXMLFromString']($i6j1y['data']) : psj = $i6j1y['data'];p4tul['onLoaded'](psj), !u4tpl['isZiYu'] && u4tpl['isPosMsgYu'] && en8q9b != 'arraybuffer' && wx['postMessage']({ 'url': r0v172, 'data': psj, 'isLoad': !![] });
      } else w58ne9 == 0x1 && u4tpl['EnvConfig']['load']['call'](p4tul, r0v172, en8q9b, hk4spl, hkysij, pt4ls);
    }, y$i6jk(_xfmu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _xfmu;
  }(),
      b98ga = function (z305w) {
    function rv167() {
      rv167['__super']['call'](this);;
    }return lux4(rv167, 'laya.wx.mini.MiniFileMgr', z305w), rv167['isLoadFile'] = function (j16yi) {
      return rv167['_fileTypeArr']['indexOf'](j16yi) != -0x1 ? !![] : ![];
    }, rv167['getFileInfo'] = function (thps) {
      var xltuf_ = thps['split']('?')[0x0],
          z02v7r = rv167['filesListObj'][xltuf_];if (z02v7r == null) return null;else return z02v7r;return null;
    }, rv167['onFileUpdate'] = function (y6jik$, v7y1$6) {
      var qbag98 = y6jik$['split']('/'),
          plxut4 = qbag98[qbag98['length'] - 0x1],
          qag8b = rv167['getFileInfo'](v7y1$6);if (qag8b == null) rv167['onSaveFile'](v7y1$6, plxut4);else {
        if (qag8b['readyUrl'] != v7y1$6) rv167['remove'](plxut4, v7y1$6);
      }
    }, rv167['exits'] = function (uxtf_, tl4hsp) {
      var bn9 = rv167['getFileNativePath'](uxtf_);rv167['fs']['getFileInfo']({ 'filePath': bn9, 'success': function (r16v7) {
          tl4hsp != null && tl4hsp['runWith']([0x0, r16v7]);
        }, 'fail': function (w20r) {
          tl4hsp != null && tl4hsp['runWith']([0x1, w20r]);
        } });
    }, rv167['read'] = function (h4ijk, fluxt, i4ksj, y$761) {
      fluxt === void 0x0 && (fluxt = 'ascill'), y$761 === void 0x0 && (y$761 = '');var ijhks;y$761 != '' ? ijhks = rv167['getFileNativePath'](h4ijk) : ijhks = h4ijk, rv167['fs']['readFile']({ 'filePath': ijhks, 'encoding': fluxt, 'success': function (bqdga) {
          i4ksj != null && i4ksj['runWith']([0x0, bqdga]);
        }, 'fail': function (tfpuxl) {
          if (tfpuxl && y$761 != '') rv167['down'](y$761, fluxt, i4ksj, y$761);else i4ksj != null && i4ksj['runWith']([0x1]);
        } });
    }, rv167['readNativeFile'] = function (yv7$, w3enz) {
      rv167['fs']['readFile']({ 'filePath': yv7$, 'encoding': '', 'success': function (qe9n85) {
          w3enz != null && w3enz['runWith']([0x0]);
        }, 'fail': function (lutxpf) {
          w3enz != null && w3enz['runWith']([0x1]);
        } });
    }, rv167['down'] = function ($v7r6, gbc8q, e395nw, tplxfu) {
      gbc8q === void 0x0 && (gbc8q = 'ascill'), tplxfu === void 0x0 && (tplxfu = '');var _xltf = rv167['getFileNativePath'](tplxfu),
          e859n = rv167['wxdown']({ 'url': $v7r6, 'filePath': _xltf, 'success': function ($yv61) {
          if ($yv61['statusCode'] === 0xc8) rv167['readFile']($yv61['filePath'], gbc8q, e395nw, tplxfu);
        }, 'fail': function (vi$y61) {
          e395nw != null && e395nw['runWith']([0x1, vi$y61]);
        } });e859n['onProgressUpdate'](function (zv27) {
        e395nw != null && e395nw['runWith']([0x2, zv27['progress']]);
      });
    }, rv167['readFile'] = function ($1v6yi, mxo_, r0172, lup4x) {
      mxo_ === void 0x0 && (mxo_ = 'ascill'), lup4x === void 0x0 && (lup4x = ''), rv167['fs']['readFile']({ 'filePath': $1v6yi, 'encoding': mxo_, 'success': function (jiksh4) {
          if ($1v6yi['indexOf']('http://') != -0x1 || $1v6yi['indexOf']('https://') != -0x1) rv167['onFileUpdate']($1v6yi, lup4x);r0172 != null && r0172['runWith']([0x0, jiksh4]);
        }, 'fail': function (jpskh) {
          if (jpskh) r0172 != null && r0172['runWith']([0x1, jpskh]);
        } });
    }, rv167['downImg'] = function (ew53nz, cbgqad, lxtp) {
      lxtp === void 0x0 && (lxtp = '');var $j1yi6 = rv167['wxdown']({ 'url': ew53nz, 'success': function (v1yi$) {
          v1yi$['statusCode'] === 0xc8 && rv167['copyFile'](v1yi$['tempFilePath'], lxtp, cbgqad);
        }, 'fail': function (mu_xof) {
          cbgqad != null && cbgqad['runWith']([0x1, mu_xof]);
        } });
    }, rv167['copyFile'] = function (qdgb, cqbag8, r0v2) {
      var ik$jh = qdgb['split']('/'),
          e59q8n = ik$jh[ik$jh['length'] - 0x1],
          mfxut = cqbag8['split']('?')[0x0],
          $ijk6y = rv167['getFileInfo'](cqbag8),
          sjp4 = rv167['getFileNativePath'](e59q8n);rv167['fs']['copyFile']({ 'srcPath': qdgb, 'destPath': sjp4, 'success': function (fltxup) {
          if (!$ijk6y) rv167['onSaveFile'](cqbag8, e59q8n), r0v2 != null && r0v2['runWith']([0x0]);else {
            if ($ijk6y['readyUrl'] != cqbag8) rv167['remove'](e59q8n, cqbag8, r0v2);
          }
        }, 'fail': function (ulpt) {
          r0v2 != null && r0v2['runWith']([0x1, ulpt]);
        } });
    }, rv167['getFileNativePath'] = function (px4tsl) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + px4tsl;
    }, rv167['remove'] = function (nq89, jhk$i, q9a8eb) {
      jhk$i === void 0x0 && (jhk$i = '');var n95w8 = rv167['getFileInfo'](jhk$i),
          skhi = rv167['getFileNativePath'](n95w8['md5']);vyi$61['loader']['clearRes'](n95w8['readyUrl']), rv167['fs']['unlink']({ 'filePath': skhi, 'success': function (n530wz) {
          if (jhk$i != '') rv167['onSaveFile'](jhk$i, nq89);q9a8eb != null && q9a8eb['runWith']([0x0]);
        }, 'fail': function (hi4skj) {} });
    }, rv167['onSaveFile'] = function (v761$, c8aq) {
      var ts4lpx = v761$['split']('?')[0x0];rv167['filesListObj'][ts4lpx] = { 'md5': c8aq, 'readyUrl': v761$ }, rv167['fs']['writeFile']({ 'filePath': rv167['fileNativeDir'] + '/' + rv167['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rv167['filesListObj']), 'success': function (viy$) {
          console['log']('写入测试测试成功：', viy$);
        }, 'fail': function (tu_fm) {
          console['log']('写入测试测试失败：', tu_fm);
        } });
    }, rv167['existDir'] = function (v1iy6, iykj$) {
      rv167['fs']['mkdir']({ 'dirPath': v1iy6, 'success': function (v17$y6) {
          iykj$ != null && iykj$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ut4x) {
          if (ut4x['errMsg']['indexOf']('file already exists') != -0x1) rv167['readSync'](rv167['fileListName'], 'utf8', iykj$);else iykj$ != null && iykj$['runWith']([0x1, ut4x]);
        } });
    }, rv167['readSync'] = function (c8bqag, w598ne, cbg8aq, ftxl_u) {
      w598ne === void 0x0 && (w598ne = 'ascill'), ftxl_u === void 0x0 && (ftxl_u = '');var isjhy = rv167['getFileNativePath'](c8bqag),
          dbcgqa;try {
        dbcgqa = rv167['fs']['readFileSync'](isjhy), cbg8aq != null && cbg8aq['runWith']([0x0, { 'data': dbcgqa }]);
      } catch (b8ga) {
        cbg8aq != null && cbg8aq['runWith']([0x1]);
      }
    }, rv167['readCache'] = function () {}, rv167['writeCache'] = function (pshlt) {
      var v612r = readyUrl['split']('?')[0x0];rv167['filesListObj'][v612r] = { 'md5': md5Name, 'readyUrl': readyUrl }, rv167['fs']['writeFile']({ 'filePath': rv167['fileNativeDir'] + '/' + rv167['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rv167['filesListObj']), 'success': function ($yhkij) {}, 'fail': function (ph4lsk) {} });
    }, rv167['setNativeFileDir'] = function (bcgq8) {
      rv167['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bcgq8;
    }, rv167['filesListObj'] = {}, rv167['fileNativeDir'] = null, rv167['fileListName'] = 'layaairfiles.txt', rv167['ziyuFileData'] = {}, y$i6jk(rv167, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rv167;
  }(a9qg8b),
      $y7v61 = function (vzr20) {
    function zr23() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zr23['__super']['call'](this), this['_sound'] = zr23['_createSound']();
    }lux4(zr23, 'laya.wx.mini.MiniSound', vzr20);var bg98a = zr23['prototype'];return bg98a['load'] = function (hjksi) {
      var $17yv = this;hjksi = tm_xfu['formatURL'](hjksi), this['url'] = hjksi;if (zr23['_audioCache'][hjksi]) {
        this['event']('complete');return;
      }function fxum_t() {
        if (zr23['_null'] != undefined) $17yv['_sound']['onCanplay'](zr23['_null']), $17yv['_sound']['onError'](zr23['_null']);else try {
          $17yv['_sound']['onCanplay'](null), $17yv['_sound']['onError'](null), zr23['_null'] = null;
        } catch (ji1y$) {
          console['warn']('[wxmini] _clearSound:' + ji1y$), $17yv['_sound']['onCanplay'](ulx4tp), $17yv['_sound']['onError'](ulx4tp), zr23['_null'] = ulx4tp;
        }
      }function q8b9ag() {
        fxum_t(), wz250['loaded'] = !![], wz250['event']('complete'), zr23['_audioCache'][wz250['url']] = wz250;
      }function acqgb(dbqga) {
        console['error']('errCode=' + dbqga['errCode'] + '  errMsg=' + dbqga['errMsg']), fxum_t(), wz250['event']('error');
      }function ulx4tp() {}this['_sound']['onCanplay'](q8b9ag), this['_sound']['onError'](acqgb), this['_sound']['src'] = hjksi;var wz250 = this;
    }, bg98a['play'] = function (xt4pl, ltufp) {
      xt4pl === void 0x0 && (xt4pl = 0x0), ltufp === void 0x0 && (ltufp = 0x0);var neq9;if (this['url'] == rz0v27['_tMusic']) {
        if (!zr23['_musicAudio']) zr23['_musicAudio'] = zr23['_createSound']();neq9 = zr23['_musicAudio'];
      } else neq9 = zr23['_createSound']();neq9['src'] = this['url'];var js4p = new cabgqd(neq9);return js4p['url'] = this['url'], js4p['loops'] = ltufp, js4p['startTime'] = xt4pl, js4p['play'](), rz0v27['addChannel'](js4p), js4p;
    }, bg98a['dispose'] = function () {
      var pth4sl = zr23['_audioCache'][this['url']];pth4sl && (pth4sl['src'] = '', delete zr23['_audioCache'][this['url']]);
    }, umxf_(0x0, bg98a, 'duration', function () {
      return this['_sound']['duration'];
    }), zr23['_createSound'] = function () {
      return zr23['_id']++, u4tpl['window']['wx']['createInnerAudioContext']();
    }, zr23['_musicAudio'] = null, zr23['_id'] = 0x0, zr23['_audioCache'] = {}, zr23['_null'] = undefined, zr23;
  }(a9qg8b),
      cabgqd = function (mx) {
    function ew98n5(bqdgc) {
      this['_audio'] = null, this['_onEnd'] = null, ew98n5['__super']['call'](this), this['_audio'] = bqdgc, this['_onEnd'] = ts4lh['bind'](this['__onEnd'], this), bqdgc['onEnded'](this['_onEnd']);
    }lux4(ew98n5, 'laya.wx.mini.MiniSoundChannel', mx);var lt4u = ew98n5['prototype'];return lt4u['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vyi$61['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, lt4u['__onNull'] = function () {}, lt4u['play'] = function () {
      this['isStopped'] = ![], rz0v27['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, lt4u['stop'] = function () {
      this['isStopped'] = !![], rz0v27['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ew98n5['_null'] != undefined) this['_audio']['onEnded'](ew98n5['_null']);else try {
        this['_audio']['onEnded'](null), ew98n5['_null'] = null;
      } catch (xuofm) {
        console['warn']('[wxmini] stop:' + xuofm), this['_audio']['onEnded'](ts4lh['bind'](this['__onNull'], this)), ew98n5['_null'] = ts4lh['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, lt4u['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, lt4u['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rz0v27['addChannel'](this), this['_audio']['play']();
    }, umxf_(0x0, lt4u, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), umxf_(0x0, lt4u, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), umxf_(0x0, lt4u, 'volume', function () {
      return 0x1;
    }, function (iy$j16) {}), ew98n5['_null'] = undefined, ew98n5;
  }(wn5e3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w0532 in Laya) {
    var y$61v = Laya[w0532];y$61v && y$61v['__isclass'] && (exports[w0532] = y$61v);
  }
});