var p = wx.$h;
(function (window, document, tf4j7) {
  var _x0gv = tf4j7['un'],
      ey$6bi = tf4j7['uns'],
      e6$ik = tf4j7['static'],
      s5dt1 = tf4j7['class'],
      fs3j = tf4j7['getset'],
      $yi6e = tf4j7['__newvec'],
      f743ja = laya['utils']['Browser'],
      boiey$ = laya['events']['Event'],
      $h8k0 = laya['events']['EventDispatcher'],
      he6k8$ = laya['resource']['HTMLImage'],
      h86$ = laya['utils']['Handler'],
      hg0vx_ = laya['display']['Input'],
      wn2x = laya['net']['Loader'],
      rwpn2a = laya['maths']['Matrix'],
      a3w7p4 = laya['renders']['Render'],
      $6biy = laya['utils']['RunDriver'],
      _k0g8h = laya['media']['Sound'],
      nxr = laya['media']['SoundChannel'],
      v0h_gx = laya['media']['SoundManager'],
      f13st = laya['display']['Stage'],
      v_x02 = laya['net']['URL'],
      _08hgk = laya['utils']['Utils'],
      d5cl = function () {
    function _vxn2g() {}return s5dt1(_vxn2g, 'laya.wx.mini.MiniAdpter'), _vxn2g['getJson'] = function (g_x0v2) {
      return JSON['parse'](g_x0v2);
    }, _vxn2g['init'] = function (h0g68, $ye6) {
      h0g68 === void 0x0 && (h0g68 = ![]), $ye6 === void 0x0 && ($ye6 = ![]);if (_vxn2g['_inited']) return;_vxn2g['window'] = window;if (_vxn2g['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;_vxn2g['_inited'] = !![], _vxn2g['isZiYu'] = $ye6, _vxn2g['isPosMsgYu'] = h0g68, _vxn2g['EnvConfig'] = {}, !_vxn2g['isZiYu'] && (x2vw['setNativeFileDir']('/layaairGame'), x2vw['existDir'](x2vw['fileNativeDir'], h86$['create'](_vxn2g, _vxn2g['onMkdirCallBack']))), _vxn2g['window']['focus'] = function () {}, tf4j7['getUrlPath'] = function () {}, _vxn2g['window']['logtime'] = function (csjt51) {}, _vxn2g['window']['alertTimeLog'] = function (g6hk80) {}, _vxn2g['window']['resetShareInfo'] = function () {}, _vxn2g['window']['CanvasRenderingContext2D'] = function () {}, _vxn2g['window']['CanvasRenderingContext2D']['prototype'] = _vxn2g['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _vxn2g['window']['document']['body']['appendChild'] = function () {}, _vxn2g['EnvConfig']['pixelRatioInt'] = 0x0, $6biy['getPixelRatio'] = _vxn2g['pixelRatio'], _vxn2g['_preCreateElement'] = f743ja['createElement'], f743ja['createElement'] = _vxn2g['createElement'], $6biy['createShaderCondition'] = _vxn2g['createShaderCondition'], _08hgk['parseXMLFromString'] = _vxn2g['parseXMLFromString'], hg0vx_['_createInputElement'] = xnv['_createInputElement'], _vxn2g['EnvConfig']['load'] = wn2x['prototype']['load'], wn2x['prototype']['load'] = rnpa2w['prototype']['load'], _vxn2g['isZiYu'] && h0g68 && wx['onMessage'](function (rnvxw) {
        rnvxw['isLoad'] && (x2vw['ziyuFileData'][rnvxw['url']] = rnvxw['data']);
      });
    }, _vxn2g['onMkdirCallBack'] = function (j731tf, hk$086) {
      if (!j731tf) x2vw['filesListObj'] = JSON['parse'](hk$086['data']);
    }, _vxn2g['pixelRatio'] = function () {
      if (!_vxn2g['EnvConfig']['pixelRatioInt']) try {
        var md51sc = wx['getSystemInfoSync']();return _vxn2g['EnvConfig']['pixelRatioInt'] = md51sc['pixelRatio'], md51sc = md51sc, md51sc['pixelRatio'];
      } catch (vw2nr) {}return _vxn2g['EnvConfig']['pixelRatioInt'];
    }, _vxn2g['createElement'] = function (qzyo) {
      if (qzyo == 'canvas') {
        var s13ft;return _vxn2g['idx'] == 0x1 ? _vxn2g['isZiYu'] ? (s13ft = sharedCanvas, s13ft['style'] = {}) : s13ft = window['canvas'] : s13ft = window['wx']['createCanvas'](), _vxn2g['idx']++, s13ft;
      } else {
        if (qzyo == 'textarea' || qzyo == 'input') return _vxn2g['onCreateInput'](qzyo);else {
          if (qzyo == 'div') {
            var h8e$k6 = _vxn2g['_preCreateElement'](qzyo);return h8e$k6['contains'] = function (rpwan2) {
              return null;
            }, h8e$k6['removeChild'] = function (k86gh0) {}, h8e$k6;
          } else return _vxn2g['_preCreateElement'](qzyo);
        }
      }
    }, _vxn2g['onCreateInput'] = function (_g0hvx) {
      var v_2xnr = _vxn2g['_preCreateElement'](_g0hvx);return v_2xnr['focus'] = xnv['wxinputFocus'], v_2xnr['blur'] = xnv['wxinputblur'], v_2xnr['style'] = {}, v_2xnr['value'] = 0x0, v_2xnr['parentElement'] = {}, v_2xnr['placeholder'] = {}, v_2xnr['type'] = {}, v_2xnr['setColor'] = function (gk086) {}, v_2xnr['setType'] = function (c1st) {}, v_2xnr['setFontFace'] = function (qob9yz) {}, v_2xnr['addEventListener'] = function ($yebo) {}, v_2xnr['contains'] = function (c5ts1j) {
        return null;
      }, v_2xnr['removeChild'] = function (p437fa) {}, v_2xnr;
    }, _vxn2g['createShaderCondition'] = function (ye$k6i) {
      var tfs1jc = this,
          v2x_ = function () {
        var $6k8 = ye$k6i;return tfs1jc[ye$k6i['replace']('this.', '')];
      };return v2x_;
    }, _vxn2g['EnvConfig'] = null, _vxn2g['window'] = null, _vxn2g['_preCreateElement'] = null, _vxn2g['_inited'] = ![], _vxn2g['wxRequest'] = null, _vxn2g['systemInfo'] = null, _vxn2g['version'] = '0.0.1', _vxn2g['isZiYu'] = ![], _vxn2g['isPosMsgYu'] = ![], _vxn2g['parseXMLFromString'] = function (ek8$6) {
      var zy9ob, khe8;ek8$6 = ek8$6['replace'](/>\s+</g, '><');try {
        zy9ob = new window['Parser']['DOMParser']()['parseFromString'](ek8$6, 'text/xml');
      } catch (e$h8k6) {
        throw '需要引入xml解析库文件';
      }return zy9ob;
    }, _vxn2g['idx'] = 0x1, _vxn2g;
  }(),
      d15c = function () {
    function wrn2ap() {}s5dt1(wrn2ap, 'laya.wx.mini.MiniImage');var _2xgvn = wrn2ap['prototype'];return _2xgvn['_loadImage'] = function (rwp4na) {
      var v2xng = this,
          arpw = ![];rwp4na['indexOf']('layaNativeDir/') == -0x1 && (arpw = !![], rwp4na = v_x02['formatURL'](rwp4na));if (!x2vw['getFileInfo'](rwp4na)) {
        if (rwp4na['indexOf']('http://') != -0x1 || rwp4na['indexOf']('https://') != -0x1) x2vw['downImg'](rwp4na, new h86$(wrn2ap, wrn2ap['onDownImgCallBack'], [rwp4na, v2xng]), rwp4na);else wrn2ap['onCreateImage'](rwp4na, v2xng, !![]);
      } else wrn2ap['onCreateImage'](rwp4na, v2xng, !arpw);
    }, wrn2ap['onDownImgCallBack'] = function (jf1cs, io9byz, $eib6) {
      if (!$eib6) wrn2ap['onCreateImage'](jf1cs, io9byz);else io9byz['onError'](null);
    }, wrn2ap['onCreateImage'] = function (sjft, iek8, _nx2rv) {
      _nx2rv === void 0x0 && (_nx2rv = ![]);var $eiyb;if (!_nx2rv) {
        var y6ib$ = x2vw['getFileInfo'](sjft),
            tj713 = y6ib$['md5'];$eiyb = x2vw['getFileNativePath'](tj713);
      } else $eiyb = sjft;if (iek8['imgCache'] == null) iek8['imgCache'] = {};var vg2x_n;function hk_g0() {
        vg2x_n['onload'] = null, vg2x_n['onerror'] = null, delete iek8['imgCache'][sjft];
      };var t3j7f4 = function () {
        hk_g0(), iek8['onLoaded'](vg2x_n);
      },
          sj1ft = function () {
        hk_g0(), iek8['event']('error', 'Load image failed');
      };iek8['_type'] == 'nativeimage' ? (vg2x_n = new f743ja['window']['Image'](), vg2x_n['crossOrigin'] = '', vg2x_n['onload'] = t3j7f4, vg2x_n['onerror'] = sj1ft, vg2x_n['src'] = $eiyb, iek8['imgCache'][sjft] = vg2x_n) : new he6k8$['create']($eiyb, { 'onload': t3j7f4, 'onerror': sj1ft, 'onCreate': function (ei9oyb) {
          vg2x_n = ei9oyb, iek8['imgCache'][sjft] = ei9oyb;
        } });
    }, wrn2ap;
  }(),
      xnv = function () {
    function gh_v() {}return s5dt1(gh_v, 'laya.wx.mini.MiniInput'), gh_v['_createInputElement'] = function () {
      hg0vx_['_initInput'](hg0vx_['area'] = f743ja['createElement']('textarea')), hg0vx_['_initInput'](hg0vx_['input'] = f743ja['createElement']('input')), hg0vx_['inputContainer'] = f743ja['createElement']('div'), hg0vx_['inputContainer']['style']['position'] = 'absolute', hg0vx_['inputContainer']['style']['zIndex'] = 0x186a0, f743ja['container']['appendChild'](hg0vx_['inputContainer']), hg0vx_['inputContainer']['setPos'] = function (cd1s5m, i8ek6) {
        hg0vx_['inputContainer']['style']['left'] = cd1s5m + 'px', hg0vx_['inputContainer']['style']['top'] = i8ek6 + 'px';
      }, tf4j7['stage']['on']('resize', null, gh_v['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y$6bi) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v0h_gx['_soundClass'] = zyobi9, v0h_gx['_musicClass'] = zyobi9;
    }, gh_v['_onStageResize'] = function () {
      var ie9o = tf4j7['stage']['_canvasTransform']['identity']();ie9o['scale'](f743ja['width'] / a3w7p4['canvas']['width'] / $6biy['getPixelRatio'](), f743ja['height'] / a3w7p4['canvas']['height'] / $6biy['getPixelRatio']());
    }, gh_v['wxinputFocus'] = function (fsj1t) {
      var sd15 = hg0vx_['inputElement']['target'];if (sd15 && !sd15['editable']) return;d5cl['window']['wx']['offKeyboardConfirm'](), d5cl['window']['wx']['offKeyboardInput'](), d5cl['window']['wx']['showKeyboard']({ 'defaultValue': sd15['text'], 'maxLength': sd15['maxChars'], 'multiple': sd15['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tj31f7) {}, 'fail': function (d1msc) {} }), d5cl['window']['wx']['onKeyboardConfirm'](function (cdt5s1) {
        var x_h0v = cdt5s1 ? cdt5s1['value'] : '';sd15['text'] = x_h0v, sd15['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), d5cl['window']['wx']['onKeyboardInput'](function (_g8hk) {
        var iyke = _g8hk ? _g8hk['value'] : '';if (!sd15['multiline']) {
          if (iyke['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sd15['text'] = iyke, sd15['event']('input');
      });
    }, gh_v['inputEnter'] = function () {
      hg0vx_['inputElement']['target']['focus'] = ![];
    }, gh_v['wxinputblur'] = function () {
      gh_v['hideKeyboard']();
    }, gh_v['hideKeyboard'] = function () {
      d5cl['window']['wx']['offKeyboardConfirm'](), d5cl['window']['wx']['offKeyboardInput'](), d5cl['window']['wx']['hideKeyboard']({ 'success': function (g8h0k_) {
          console['log']('隐藏键盘');
        }, 'fail': function (i86k$) {
          console['log']('隐藏键盘出错:' + (i86k$ ? i86k$['errMsg'] : ''));
        } });
    }, gh_v;
  }(),
      rnpa2w = function () {
    function hv8g_0() {}s5dt1(hv8g_0, 'laya.wx.mini.MiniLoader');var $6kh8 = hv8g_0['prototype'];return $6kh8['load'] = function (e$iy6k, xvgn_, eyo9ib, af743p, jft371) {
      eyo9ib === void 0x0 && (eyo9ib = !![]), jft371 === void 0x0 && (jft371 = ![]);var b6 = this;b6['_url'] = e$iy6k;if (e$iy6k['indexOf']('data:image') === 0x0) b6['_type'] = xvgn_ = 'image';else b6['_type'] = xvgn_ || (xvgn_ = b6['getTypeFromUrl'](e$iy6k));b6['_cache'] = eyo9ib, b6['_data'] = null;var zqb9 = 'ascii';if (e$iy6k['indexOf']('.fnt') != -0x1) zqb9 = 'utf8';else xvgn_ == 'arraybuffer' && (zqb9 = '');;var l5sd = _08hgk['getFileExtension'](e$iy6k);if (hv8g_0['_fileTypeArr']['indexOf'](l5sd) != -0x1) d5cl['EnvConfig']['load']['call'](this, e$iy6k, xvgn_, eyo9ib, af743p, jft371);else {
        if (!x2vw['getFileInfo'](e$iy6k)) {
          if (e$iy6k['indexOf']('layaNativeDir/') != -0x1) {
            if (d5cl['isZiYu']) {
              var ap2nwr = x2vw['ziyuFileData'][e$iy6k];b6['onLoaded'](ap2nwr);return;
            } else {
              cosnole['log']('read read'), x2vw['read'](e$iy6k, zqb9, new h86$(hv8g_0, hv8g_0['onReadNativeCallBack'], [zqb9, e$iy6k, xvgn_, eyo9ib, af743p, jft371, b6]));return;
            }
          }if (v_x02['rootPath'] == '') var xvng = e$iy6k;else xvng = e$iy6k['split'](v_x02['rootPath'])[0x0];e$iy6k['indexOf']('http://') != -0x1 || e$iy6k['indexOf']('https://') != -0x1 ? d5cl['EnvConfig']['load']['call'](b6, e$iy6k, xvgn_, eyo9ib, af743p, jft371) : x2vw['readFile'](xvng, zqb9, new h86$(hv8g_0, hv8g_0['onReadNativeCallBack'], [zqb9, e$iy6k, xvgn_, eyo9ib, af743p, jft371, b6]), e$iy6k);
        } else d5cl['EnvConfig']['load']['call'](this, e$iy6k, xvgn_, eyo9ib, af743p, jft371);
      }
    }, $6kh8['resMgrLoad'] = function (g0vx, yo$bie, m5dlcs, slmc5, ct15j, eob$iy, oyieb9) {
      m5dlcs === void 0x0 && (m5dlcs = 0x0), slmc5 === void 0x0 && (slmc5 = ![]), ct15j === void 0x0 && (ct15j = ![]), eob$iy === void 0x0 && (eob$iy = 0x0), oyieb9 === void 0x0 && (oyieb9 = 0x3), g0vx['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', g0vx), d5cl['EnvConfig']['resMgrLoad'](g0vx, (cf1js, gnxv_, g8k_) => {
        hv8g_0['prototype']['resMgrLoadCallBack'](cf1js, gnxv_, g8k_, yo$bie);
      }, m5dlcs, slmc5, ct15j, eob$iy, oyieb9);
    }, $6kh8['resMgrLoadCallBack'] = function (p4aw37, ehk8$6, j7tf34, j74f3a) {
      console['log']('buff:::', p4aw37, j7tf34, x2vw['fileNativeDir'] + '///' + x2vw['fileListName']), j74f3a(p4aw37, ehk8$6, j7tf34);
    }, $6kh8['clearRes'] = function (g08kh_, xrw2p) {
      xrw2p === void 0x0 && (xrw2p = ![]);var k0hg68 = this;k0hg68['clearRes'](g08kh_, xrw2p);var vnw2 = x2vw['getFileInfo'](g08kh_);if (vnw2 && (g08kh_['indexOf']('http://') != -0x1 || g08kh_['indexOf']('https://') != -0x1)) {
        var sctf1j = vnw2['md5'],
            pw7a4 = x2vw['getFileNativePath'](sctf1j);x2vw['remove'](pw7a4);
      }
    }, hv8g_0['onReadNativeCallBack'] = function (k$i8e6, yi$boe, tfj1cs, i6e, $6iye, st1cj, t4j3f, mlsd, k80h) {
      i6e === void 0x0 && (i6e = !![]), st1cj === void 0x0 && (st1cj = ![]), mlsd === void 0x0 && (mlsd = 0x0);if (!mlsd) {
        var j4f7a3;if (tfj1cs == 'json' || tfj1cs == 'atlas') j4f7a3 = d5cl['getJson'](k80h['data']);else tfj1cs == 'xml' ? j4f7a3 = _08hgk['parseXMLFromString'](k80h['data']) : j4f7a3 = k80h['data'];t4j3f['onLoaded'](j4f7a3), !d5cl['isZiYu'] && d5cl['isPosMsgYu'] && tfj1cs != 'arraybuffer' && wx['postMessage']({ 'url': yi$boe, 'data': j4f7a3, 'isLoad': !![] });
      } else mlsd == 0x1 && d5cl['EnvConfig']['load']['call'](t4j3f, yi$boe, tfj1cs, i6e, $6iye, st1cj);
    }, e6$ik(hv8g_0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hv8g_0;
  }(),
      x2vw = function ($6eik) {
    function n4wrpa() {
      n4wrpa['__super']['call'](this);;
    }return s5dt1(n4wrpa, 'laya.wx.mini.MiniFileMgr', $6eik), n4wrpa['isLoadFile'] = function (x2pwr) {
      return n4wrpa['_fileTypeArr']['indexOf'](x2pwr) != -0x1 ? !![] : ![];
    }, n4wrpa['getFileInfo'] = function (a4nwp) {
      var fj473 = a4nwp['split']('?')[0x0],
          tjcs5 = n4wrpa['filesListObj'][fj473];if (tjcs5 == null) return null;else return tjcs5;return null;
    }, n4wrpa['onFileUpdate'] = function (ftj347, dlm5s) {
      var obyiz = ftj347['split']('/'),
          eyo$bi = obyiz[obyiz['length'] - 0x1],
          biey$ = n4wrpa['getFileInfo'](dlm5s);if (biey$ == null) n4wrpa['onSaveFile'](dlm5s, eyo$bi);else {
        if (biey$['readyUrl'] != dlm5s) n4wrpa['remove'](eyo$bi, dlm5s);
      }
    }, n4wrpa['exits'] = function (v2rxn, xpw2nr) {
      var c51 = n4wrpa['getFileNativePath'](v2rxn);n4wrpa['fs']['getFileInfo']({ 'filePath': c51, 'success': function (fj17t) {
          xpw2nr != null && xpw2nr['runWith']([0x0, fj17t]);
        }, 'fail': function (bo9eyi) {
          xpw2nr != null && xpw2nr['runWith']([0x1, bo9eyi]);
        } });
    }, n4wrpa['read'] = function (n2rxwp, lsm5cd, pwnx2r, g0hk8_) {
      lsm5cd === void 0x0 && (lsm5cd = 'ascill'), g0hk8_ === void 0x0 && (g0hk8_ = '');var lsmd5;g0hk8_ != '' ? lsmd5 = n4wrpa['getFileNativePath'](n2rxwp) : lsmd5 = n2rxwp, n4wrpa['fs']['readFile']({ 'filePath': lsmd5, 'encoding': lsm5cd, 'success': function (e86i) {
          pwnx2r != null && pwnx2r['runWith']([0x0, e86i]);
        }, 'fail': function (h0vxg) {
          if (h0vxg && g0hk8_ != '') n4wrpa['down'](g0hk8_, lsm5cd, pwnx2r, g0hk8_);else pwnx2r != null && pwnx2r['runWith']([0x1]);
        } });
    }, n4wrpa['readNativeFile'] = function (hkg06, v_2nxg) {
      n4wrpa['fs']['readFile']({ 'filePath': hkg06, 'encoding': '', 'success': function (dcm15s) {
          v_2nxg != null && v_2nxg['runWith']([0x0]);
        }, 'fail': function (nrap4w) {
          v_2nxg != null && v_2nxg['runWith']([0x1]);
        } });
    }, n4wrpa['down'] = function (h_8vg0, s1c5t, ibeyo9, hk8g) {
      s1c5t === void 0x0 && (s1c5t = 'ascill'), hk8g === void 0x0 && (hk8g = '');var $86kei = n4wrpa['getFileNativePath'](hk8g),
          oyz9bq = n4wrpa['wxdown']({ 'url': h_8vg0, 'filePath': $86kei, 'success': function (rnwvx2) {
          if (rnwvx2['statusCode'] === 0xc8) n4wrpa['readFile'](rnwvx2['filePath'], s1c5t, ibeyo9, hk8g);
        }, 'fail': function (s1fj3t) {
          ibeyo9 != null && ibeyo9['runWith']([0x1, s1fj3t]);
        } });oyz9bq['onProgressUpdate'](function (h8k$) {
        ibeyo9 != null && ibeyo9['runWith']([0x2, h8k$['progress']]);
      });
    }, n4wrpa['readFile'] = function (kh0g8_, wpnr, _vg80, bzo9y) {
      wpnr === void 0x0 && (wpnr = 'ascill'), bzo9y === void 0x0 && (bzo9y = ''), n4wrpa['fs']['readFile']({ 'filePath': kh0g8_, 'encoding': wpnr, 'success': function (p3fa7) {
          if (kh0g8_['indexOf']('http://') != -0x1 || kh0g8_['indexOf']('https://') != -0x1) n4wrpa['onFileUpdate'](kh0g8_, bzo9y);_vg80 != null && _vg80['runWith']([0x0, p3fa7]);
        }, 'fail': function (p4a73f) {
          if (p4a73f) _vg80 != null && _vg80['runWith']([0x1, p4a73f]);
        } });
    }, n4wrpa['downImg'] = function (ft1cj, f1cjst, cf1sjt) {
      cf1sjt === void 0x0 && (cf1sjt = '');var $bi6 = n4wrpa['wxdown']({ 'url': ft1cj, 'success': function (wp4an) {
          wp4an['statusCode'] === 0xc8 && n4wrpa['copyFile'](wp4an['tempFilePath'], cf1sjt, f1cjst);
        }, 'fail': function (x_vg02) {
          f1cjst != null && f1cjst['runWith']([0x1, x_vg02]);
        } });
    }, n4wrpa['copyFile'] = function (sfj13, clms5, r2xwv) {
      var awpr74 = sfj13['split']('/'),
          i6k8e$ = awpr74[awpr74['length'] - 0x1],
          qy9bzo = clms5['split']('?')[0x0],
          a473 = n4wrpa['getFileInfo'](clms5),
          _h8k = n4wrpa['getFileNativePath'](i6k8e$);n4wrpa['fs']['copyFile']({ 'srcPath': sfj13, 'destPath': _h8k, 'success': function (jt3f71) {
          if (!a473) n4wrpa['onSaveFile'](clms5, i6k8e$), r2xwv != null && r2xwv['runWith']([0x0]);else {
            if (a473['readyUrl'] != clms5) n4wrpa['remove'](i6k8e$, clms5, r2xwv);
          }
        }, 'fail': function (xnv2_) {
          r2xwv != null && r2xwv['runWith']([0x1, xnv2_]);
        } });
    }, n4wrpa['getFileNativePath'] = function (n2xr_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + n2xr_;
    }, n4wrpa['remove'] = function (wrp2an, pf7a43, wa7p3) {
      pf7a43 === void 0x0 && (pf7a43 = '');var $6eyi = n4wrpa['getFileInfo'](pf7a43),
          v_2xng = n4wrpa['getFileNativePath']($6eyi['md5']);tf4j7['loader']['clearRes']($6eyi['readyUrl']), n4wrpa['fs']['unlink']({ 'filePath': v_2xng, 'success': function (rpa4w) {
          if (pf7a43 != '') n4wrpa['onSaveFile'](pf7a43, wrp2an);wa7p3 != null && wa7p3['runWith']([0x0]);
        }, 'fail': function (wprnx2) {} });
    }, n4wrpa['onSaveFile'] = function (i8k$e6, zy9boi) {
      var ml5sc = i8k$e6['split']('?')[0x0];n4wrpa['filesListObj'][ml5sc] = { 'md5': zy9boi, 'readyUrl': i8k$e6 }, n4wrpa['fs']['writeFile']({ 'filePath': n4wrpa['fileNativeDir'] + '/' + n4wrpa['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n4wrpa['filesListObj']), 'success': function (xr_v2) {
          console['log']('写入测试测试成功：', xr_v2);
        }, 'fail': function (xh0g_) {
          console['log']('写入测试测试失败：', xh0g_);
        } });
    }, n4wrpa['existDir'] = function (_ghv, ey6i) {
      n4wrpa['fs']['mkdir']({ 'dirPath': _ghv, 'success': function (sdcm15) {
          ey6i != null && ey6i['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_vhx) {
          if (_vhx['errMsg']['indexOf']('file already exists') != -0x1) n4wrpa['readSync'](n4wrpa['fileListName'], 'utf8', ey6i);else ey6i != null && ey6i['runWith']([0x1, _vhx]);
        } });
    }, n4wrpa['readSync'] = function (j1fcts, $6yk, cs5j1, hg8_0) {
      $6yk === void 0x0 && ($6yk = 'ascill'), hg8_0 === void 0x0 && (hg8_0 = '');var x2v0_ = n4wrpa['getFileNativePath'](j1fcts),
          c5td;try {
        c5td = n4wrpa['fs']['readFileSync'](x2v0_), cs5j1 != null && cs5j1['runWith']([0x0, { 'data': c5td }]);
      } catch (h8k06$) {
        cs5j1 != null && cs5j1['runWith']([0x1]);
      }
    }, n4wrpa['readCache'] = function () {}, n4wrpa['writeCache'] = function (msdc1) {
      var sj3tf1 = readyUrl['split']('?')[0x0];n4wrpa['filesListObj'][sj3tf1] = { 'md5': md5Name, 'readyUrl': readyUrl }, n4wrpa['fs']['writeFile']({ 'filePath': n4wrpa['fileNativeDir'] + '/' + n4wrpa['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n4wrpa['filesListObj']), 'success': function (xg_n) {}, 'fail': function (t74f3j) {} });
    }, n4wrpa['setNativeFileDir'] = function (k6$h8e) {
      n4wrpa['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + k6$h8e;
    }, n4wrpa['filesListObj'] = {}, n4wrpa['fileNativeDir'] = null, n4wrpa['fileListName'] = 'layaairfiles.txt', n4wrpa['ziyuFileData'] = {}, e6$ik(n4wrpa, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n4wrpa;
  }($h8k0),
      zyobi9 = function (sdm1c5) {
    function aw7pr4() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], aw7pr4['__super']['call'](this), this['_sound'] = aw7pr4['_createSound']();
    }s5dt1(aw7pr4, 'laya.wx.mini.MiniSound', sdm1c5);var xrvwn = aw7pr4['prototype'];return xrvwn['load'] = function (eyoib) {
      var sdm1 = this;eyoib = v_x02['formatURL'](eyoib), this['url'] = eyoib;if (aw7pr4['_audioCache'][eyoib]) {
        this['event']('complete');return;
      }function _g2x() {
        if (aw7pr4['_null'] != undefined) sdm1['_sound']['onCanplay'](aw7pr4['_null']), sdm1['_sound']['onError'](aw7pr4['_null']);else try {
          sdm1['_sound']['onCanplay'](null), sdm1['_sound']['onError'](null), aw7pr4['_null'] = null;
        } catch (tf1sc) {
          console['warn']('[wxmini] _clearSound:' + tf1sc), sdm1['_sound']['onCanplay'](_hx0gv), sdm1['_sound']['onError'](_hx0gv), aw7pr4['_null'] = _hx0gv;
        }
      }function xvnr2w() {
        _g2x(), cmdls5['loaded'] = !![], cmdls5['event']('complete'), aw7pr4['_audioCache'][cmdls5['url']] = cmdls5;
      }function wr7a4(_xng2v) {
        console['error']('errCode=' + _xng2v['errCode'] + '  errMsg=' + _xng2v['errMsg']), _g2x(), cmdls5['event']('error');
      }function _hx0gv() {}this['_sound']['onCanplay'](xvnr2w), this['_sound']['onError'](wr7a4), this['_sound']['src'] = eyoib;var cmdls5 = this;
    }, xrvwn['play'] = function (ioye9, r_xvn) {
      ioye9 === void 0x0 && (ioye9 = 0x0), r_xvn === void 0x0 && (r_xvn = 0x0);var qy9zb;if (this['url'] == v0h_gx['_tMusic']) {
        if (!aw7pr4['_musicAudio']) aw7pr4['_musicAudio'] = aw7pr4['_createSound']();qy9zb = aw7pr4['_musicAudio'];
      } else qy9zb = aw7pr4['_createSound']();qy9zb['src'] = this['url'];var v_2xg = new ra4pn(qy9zb);return v_2xg['url'] = this['url'], v_2xg['loops'] = r_xvn, v_2xg['startTime'] = ioye9, v_2xg['play'](), v0h_gx['addChannel'](v_2xg), v_2xg;
    }, xrvwn['dispose'] = function () {
      var sdl5c = aw7pr4['_audioCache'][this['url']];sdl5c && (sdl5c['src'] = '', delete aw7pr4['_audioCache'][this['url']]);
    }, fs3j(0x0, xrvwn, 'duration', function () {
      return this['_sound']['duration'];
    }), aw7pr4['_createSound'] = function () {
      return aw7pr4['_id']++, d5cl['window']['wx']['createInnerAudioContext']();
    }, aw7pr4['_musicAudio'] = null, aw7pr4['_id'] = 0x0, aw7pr4['_audioCache'] = {}, aw7pr4['_null'] = undefined, aw7pr4;
  }($h8k0),
      ra4pn = function (jtfsc1) {
    function gnx(cstj1) {
      this['_audio'] = null, this['_onEnd'] = null, gnx['__super']['call'](this), this['_audio'] = cstj1, this['_onEnd'] = _08hgk['bind'](this['__onEnd'], this), cstj1['onEnded'](this['_onEnd']);
    }s5dt1(gnx, 'laya.wx.mini.MiniSoundChannel', jtfsc1);var jt31sf = gnx['prototype'];return jt31sf['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tf4j7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jt31sf['__onNull'] = function () {}, jt31sf['play'] = function () {
      this['isStopped'] = ![], v0h_gx['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jt31sf['stop'] = function () {
      this['isStopped'] = !![], v0h_gx['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (gnx['_null'] != undefined) this['_audio']['onEnded'](gnx['_null']);else try {
        this['_audio']['onEnded'](null), gnx['_null'] = null;
      } catch (v_gh0) {
        console['warn']('[wxmini] stop:' + v_gh0), this['_audio']['onEnded'](_08hgk['bind'](this['__onNull'], this)), gnx['_null'] = _08hgk['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jt31sf['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jt31sf['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v0h_gx['addChannel'](this), this['_audio']['play']();
    }, fs3j(0x0, jt31sf, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), fs3j(0x0, jt31sf, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), fs3j(0x0, jt31sf, 'volume', function () {
      return 0x1;
    }, function (jf374a) {}), gnx['_null'] = undefined, gnx;
  }(nxr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var b$ie6 in Laya) {
    var iy9be = Laya[b$ie6];iy9be && iy9be['__isclass'] && (exports[b$ie6] = iy9be);
  }
});