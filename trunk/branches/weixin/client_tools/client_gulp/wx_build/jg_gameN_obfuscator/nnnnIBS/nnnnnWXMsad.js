var A = wx.$N;
(function (window, document, gvj) {
  var oa2we = gvj['un'],
      reao8 = gvj['uns'],
      a2eow = gvj['static'],
      oe8v3 = gvj['class'],
      wa6b2t = gvj['getset'],
      m$k4_ = gvj['__newvec'],
      sznxcd = laya['utils']['Browser'],
      sxdcnz = laya['events']['Event'],
      c75nzs = laya['events']['EventDispatcher'],
      gfivy = laya['resource']['HTMLImage'],
      s57 = laya['utils']['Handler'],
      vry = laya['display']['Input'],
      piy9q = laya['net']['Loader'],
      kx_hlm = laya['maths']['Matrix'],
      qjgyif = laya['renders']['Render'],
      ypij9 = laya['utils']['RunDriver'],
      o3v8e = laya['media']['Sound'],
      aore83 = laya['media']['SoundChannel'],
      u_h$ = laya['media']['SoundManager'],
      lnxsz = laya['display']['Stage'],
      mdhklx = laya['net']['URL'],
      eo3 = laya['utils']['Utils'],
      zlxdsn = function () {
    function scdxn() {}return oe8v3(scdxn, 'laya.wx.mini.MiniAdpter'), scdxn['getJson'] = function (sc0p75) {
      return JSON['parse'](sc0p75);
    }, scdxn['init'] = function (a8e6, hxdmlk) {
      a8e6 === void 0x0 && (a8e6 = ![]), hxdmlk === void 0x0 && (hxdmlk = ![]);if (scdxn['_inited']) return;scdxn['window'] = window;if (scdxn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;scdxn['_inited'] = !![], scdxn['isZiYu'] = hxdmlk, scdxn['isPosMsgYu'] = a8e6, scdxn['EnvConfig'] = {}, !scdxn['isZiYu'] && (yfgjqi['setNativeFileDir']('/layaairGame'), yfgjqi['existDir'](yfgjqi['fileNativeDir'], s57['create'](scdxn, scdxn['onMkdirCallBack']))), scdxn['window']['focus'] = function () {}, gvj['getUrlPath'] = function () {}, scdxn['window']['logtime'] = function (j9pyi) {}, scdxn['window']['alertTimeLog'] = function (lzm) {}, scdxn['window']['resetShareInfo'] = function () {}, scdxn['window']['CanvasRenderingContext2D'] = function () {}, scdxn['window']['CanvasRenderingContext2D']['prototype'] = scdxn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], scdxn['window']['document']['body']['appendChild'] = function () {}, scdxn['EnvConfig']['pixelRatioInt'] = 0x0, ypij9['getPixelRatio'] = scdxn['pixelRatio'], scdxn['_preCreateElement'] = sznxcd['createElement'], sznxcd['createElement'] = scdxn['createElement'], ypij9['createShaderCondition'] = scdxn['createShaderCondition'], eo3['parseXMLFromString'] = scdxn['parseXMLFromString'], vry['_createInputElement'] = yfrivg['_createInputElement'], scdxn['EnvConfig']['load'] = piy9q['prototype']['load'], piy9q['prototype']['load'] = $h4km['prototype']['load'], scdxn['isZiYu'] && a8e6 && wx['onMessage'](function (ijfgyq) {
        ijfgyq['isLoad'] && (yfgjqi['ziyuFileData'][ijfgyq['url']] = ijfgyq['data']);
      });
    }, scdxn['onMkdirCallBack'] = function (cp09, r3e8g) {
      if (!cp09) yfgjqi['filesListObj'] = JSON['parse'](r3e8g['data']);
    }, scdxn['pixelRatio'] = function () {
      if (!scdxn['EnvConfig']['pixelRatioInt']) try {
        var h$l_ = wx['getSystemInfoSync']();return scdxn['EnvConfig']['pixelRatioInt'] = h$l_['pixelRatio'], h$l_ = h$l_, h$l_['pixelRatio'];
      } catch (a26tbw) {}return scdxn['EnvConfig']['pixelRatioInt'];
    }, scdxn['createElement'] = function (xhzld) {
      if (xhzld == 'canvas') {
        var a2wo;return scdxn['idx'] == 0x1 ? scdxn['isZiYu'] ? (a2wo = sharedCanvas, a2wo['style'] = {}) : a2wo = window['canvas'] : a2wo = window['wx']['createCanvas'](), scdxn['idx']++, a2wo;
      } else {
        if (xhzld == 'textarea' || xhzld == 'input') return scdxn['onCreateInput'](xhzld);else {
          if (xhzld == 'div') {
            var ndxczs = scdxn['_preCreateElement'](xhzld);return ndxczs['contains'] = function (ifj9yq) {
              return null;
            }, ndxczs['removeChild'] = function (r8vo3) {}, ndxczs;
          } else return scdxn['_preCreateElement'](xhzld);
        }
      }
    }, scdxn['onCreateInput'] = function (q0pj95) {
      var jgqiyf = scdxn['_preCreateElement'](q0pj95);return jgqiyf['focus'] = yfrivg['wxinputFocus'], jgqiyf['blur'] = yfrivg['wxinputblur'], jgqiyf['style'] = {}, jgqiyf['value'] = 0x0, jgqiyf['parentElement'] = {}, jgqiyf['placeholder'] = {}, jgqiyf['type'] = {}, jgqiyf['setColor'] = function (y9pqji) {}, jgqiyf['setType'] = function (fyij) {}, jgqiyf['setFontFace'] = function (qpyji9) {}, jgqiyf['addEventListener'] = function (iqjgf) {}, jgqiyf['contains'] = function (h$_k4u) {
        return null;
      }, jgqiyf['removeChild'] = function (qiyp) {}, jgqiyf;
    }, scdxn['createShaderCondition'] = function (e28oa6) {
      var ijqpy9 = this,
          dsc7zn = function () {
        var sc7znd = e28oa6;return ijqpy9[e28oa6['replace']('this.', '')];
      };return dsc7zn;
    }, scdxn['EnvConfig'] = null, scdxn['window'] = null, scdxn['_preCreateElement'] = null, scdxn['_inited'] = ![], scdxn['wxRequest'] = null, scdxn['systemInfo'] = null, scdxn['version'] = '0.0.1', scdxn['isZiYu'] = ![], scdxn['isPosMsgYu'] = ![], scdxn['parseXMLFromString'] = function (s57czn) {
      var khl$m, zsxdc;s57czn = s57czn['replace'](/>\s+</g, '><');try {
        khl$m = new window['Parser']['DOMParser']()['parseFromString'](s57czn, 'text/xml');
      } catch (scxdnz) {
        throw '需要引入xml解析库文件';
      }return khl$m;
    }, scdxn['idx'] = 0x1, scdxn;
  }(),
      zxlmdn = function () {
    function cnxsz() {}oe8v3(cnxsz, 'laya.wx.mini.MiniImage');var eo6a8 = cnxsz['prototype'];return eo6a8['_loadImage'] = function (jgifyq) {
      var sn0 = this,
          a6bwo = ![];jgifyq['indexOf']('layaNativeDir/') == -0x1 && (a6bwo = !![], jgifyq = mdhklx['formatURL'](jgifyq));if (!yfgjqi['getFileInfo'](jgifyq)) {
        if (jgifyq['indexOf']('http://') != -0x1 || jgifyq['indexOf']('https://') != -0x1) yfgjqi['downImg'](jgifyq, new s57(cnxsz, cnxsz['onDownImgCallBack'], [jgifyq, sn0]), jgifyq);else cnxsz['onCreateImage'](jgifyq, sn0, !![]);
      } else cnxsz['onCreateImage'](jgifyq, sn0, !a6bwo);
    }, cnxsz['onDownImgCallBack'] = function (m4_, ldnszx, nlzdm) {
      if (!nlzdm) cnxsz['onCreateImage'](m4_, ldnszx);else ldnszx['onError'](null);
    }, cnxsz['onCreateImage'] = function (vgre8, qipyj, bo26aw) {
      bo26aw === void 0x0 && (bo26aw = ![]);var qjp9i;if (!bo26aw) {
        var frgvy = yfgjqi['getFileInfo'](vgre8),
            ivfry = frgvy['md5'];qjp9i = yfgjqi['getFileNativePath'](ivfry);
      } else qjp9i = vgre8;if (qipyj['imgCache'] == null) qipyj['imgCache'] = {};var h4m$;function h4_u$() {
        h4m$['onload'] = null, h4m$['onerror'] = null, delete qipyj['imgCache'][vgre8];
      };var e28ao = function () {
        h4_u$(), qipyj['onLoaded'](h4m$);
      },
          a38e2o = function () {
        h4_u$(), qipyj['event']('error', 'Load image failed');
      };qipyj['_type'] == 'nativeimage' ? (h4m$ = new sznxcd['window']['Image'](), h4m$['crossOrigin'] = '', h4m$['onload'] = e28ao, h4m$['onerror'] = a38e2o, h4m$['src'] = qjp9i, qipyj['imgCache'][vgre8] = h4m$) : new gfivy['create'](qjp9i, { 'onload': e28ao, 'onerror': a38e2o, 'onCreate': function (qfji9) {
          h4m$ = qfji9, qipyj['imgCache'][vgre8] = qfji9;
        } });
    }, cnxsz;
  }(),
      yfrivg = function () {
    function rge38() {}return oe8v3(rge38, 'laya.wx.mini.MiniInput'), rge38['_createInputElement'] = function () {
      vry['_initInput'](vry['area'] = sznxcd['createElement']('textarea')), vry['_initInput'](vry['input'] = sznxcd['createElement']('input')), vry['inputContainer'] = sznxcd['createElement']('div'), vry['inputContainer']['style']['position'] = 'absolute', vry['inputContainer']['style']['zIndex'] = 0x186a0, sznxcd['container']['appendChild'](vry['inputContainer']), vry['inputContainer']['setPos'] = function (mkhxd, rae83o) {
        vry['inputContainer']['style']['left'] = mkhxd + 'px', vry['inputContainer']['style']['top'] = rae83o + 'px';
      }, gvj['stage']['on']('resize', null, rge38['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ijfy9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u_h$['_soundClass'] = bao26, u_h$['_musicClass'] = bao26;
    }, rge38['_onStageResize'] = function () {
      var gfyv3r = gvj['stage']['_canvasTransform']['identity']();gfyv3r['scale'](sznxcd['width'] / qjgyif['canvas']['width'] / ypij9['getPixelRatio'](), sznxcd['height'] / qjgyif['canvas']['height'] / ypij9['getPixelRatio']());
    }, rge38['wxinputFocus'] = function (qij) {
      var v3yrgf = vry['inputElement']['target'];if (v3yrgf && !v3yrgf['editable']) return;zlxdsn['window']['wx']['offKeyboardConfirm'](), zlxdsn['window']['wx']['offKeyboardInput'](), zlxdsn['window']['wx']['showKeyboard']({ 'defaultValue': v3yrgf['text'], 'maxLength': v3yrgf['maxChars'], 'multiple': v3yrgf['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mdhzx) {}, 'fail': function (nmzxdl) {} }), zlxdsn['window']['wx']['onKeyboardConfirm'](function (e6a8) {
        var xndlsz = e6a8 ? e6a8['value'] : '';v3yrgf['text'] = xndlsz, v3yrgf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zlxdsn['window']['wx']['onKeyboardInput'](function (h$uk4) {
        var klx_h = h$uk4 ? h$uk4['value'] : '';if (!v3yrgf['multiline']) {
          if (klx_h['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v3yrgf['text'] = klx_h, v3yrgf['event']('input');
      });
    }, rge38['inputEnter'] = function () {
      vry['inputElement']['target']['focus'] = ![];
    }, rge38['wxinputblur'] = function () {
      rge38['hideKeyboard']();
    }, rge38['hideKeyboard'] = function () {
      zlxdsn['window']['wx']['offKeyboardConfirm'](), zlxdsn['window']['wx']['offKeyboardInput'](), zlxdsn['window']['wx']['hideKeyboard']({ 'success': function (p59c07) {
          console['log']('隐藏键盘');
        }, 'fail': function ($u4_hk) {
          console['log']('隐藏键盘出错:' + ($u4_hk ? $u4_hk['errMsg'] : ''));
        } });
    }, rge38;
  }(),
      $h4km = function () {
    function xdml() {}oe8v3(xdml, 'laya.wx.mini.MiniLoader');var e38rg = xdml['prototype'];return e38rg['load'] = function (o8evr, zs5cn, mldxk, yvgfri, _1u$k) {
      mldxk === void 0x0 && (mldxk = !![]), _1u$k === void 0x0 && (_1u$k = ![]);var qgiy = this;qgiy['_url'] = o8evr;if (o8evr['indexOf']('data:image') === 0x0) qgiy['_type'] = zs5cn = 'image';else qgiy['_type'] = zs5cn || (zs5cn = qgiy['getTypeFromUrl'](o8evr));qgiy['_cache'] = mldxk, qgiy['_data'] = null;var mxdlkh = 'ascii';if (o8evr['indexOf']('.fnt') != -0x1) mxdlkh = 'utf8';else zs5cn == 'arraybuffer' && (mxdlkh = '');;var nzlxdm = eo3['getFileExtension'](o8evr);if (xdml['_fileTypeArr']['indexOf'](nzlxdm) != -0x1) zlxdsn['EnvConfig']['load']['call'](this, o8evr, zs5cn, mldxk, yvgfri, _1u$k);else {
        if (!yfgjqi['getFileInfo'](o8evr)) {
          if (o8evr['indexOf']('layaNativeDir/') != -0x1) {
            if (zlxdsn['isZiYu']) {
              var kh$_4 = yfgjqi['ziyuFileData'][o8evr];qgiy['onLoaded'](kh$_4);return;
            } else {
              cosnole['log']('read read'), yfgjqi['read'](o8evr, mxdlkh, new s57(xdml, xdml['onReadNativeCallBack'], [mxdlkh, o8evr, zs5cn, mldxk, yvgfri, _1u$k, qgiy]));return;
            }
          }if (mdhklx['rootPath'] == '') var b2aw6t = o8evr;else b2aw6t = o8evr['split'](mdhklx['rootPath'])[0x0];o8evr['indexOf']('http://') != -0x1 || o8evr['indexOf']('https://') != -0x1 ? zlxdsn['EnvConfig']['load']['call'](qgiy, o8evr, zs5cn, mldxk, yvgfri, _1u$k) : yfgjqi['readFile'](b2aw6t, mxdlkh, new s57(xdml, xdml['onReadNativeCallBack'], [mxdlkh, o8evr, zs5cn, mldxk, yvgfri, _1u$k, qgiy]), o8evr);
        } else zlxdsn['EnvConfig']['load']['call'](this, o8evr, zs5cn, mldxk, yvgfri, _1u$k);
      }
    }, e38rg['resMgrLoad'] = function (yirgv, pc09, nxld, o3ear, roe8a, ldhk, yijqp) {
      nxld === void 0x0 && (nxld = 0x0), o3ear === void 0x0 && (o3ear = ![]), roe8a === void 0x0 && (roe8a = ![]), ldhk === void 0x0 && (ldhk = 0x0), yijqp === void 0x0 && (yijqp = 0x3), yirgv['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yirgv), zlxdsn['EnvConfig']['resMgrLoad'](yirgv, ($mh4_k, s5c7nz, $hm_4k) => {
        xdml['prototype']['resMgrLoadCallBack']($mh4_k, s5c7nz, $hm_4k, pc09);
      }, nxld, o3ear, roe8a, ldhk, yijqp);
    }, e38rg['resMgrLoadCallBack'] = function (snxzc, zsn, p0q795, sn5c70) {
      console['log']('buff:::', snxzc, p0q795, yfgjqi['fileNativeDir'] + '///' + yfgjqi['fileListName']), sn5c70(snxzc, zsn, p0q795);
    }, e38rg['clearRes'] = function (n5c7sz, pj0q59) {
      pj0q59 === void 0x0 && (pj0q59 = ![]);var sn7dcz = this;sn7dcz['clearRes'](n5c7sz, pj0q59);var nmlz = yfgjqi['getFileInfo'](n5c7sz);if (nmlz && (n5c7sz['indexOf']('http://') != -0x1 || n5c7sz['indexOf']('https://') != -0x1)) {
        var lxzmd = nmlz['md5'],
            j09piq = yfgjqi['getFileNativePath'](lxzmd);yfgjqi['remove'](j09piq);
      }
    }, xdml['onReadNativeCallBack'] = function (pj9yqi, a8reo, q7p05, lnmdz, awt26, rygfvi, a823eo, mh4k_, pjyi9q) {
      lnmdz === void 0x0 && (lnmdz = !![]), rygfvi === void 0x0 && (rygfvi = ![]), mh4k_ === void 0x0 && (mh4k_ = 0x0);if (!mh4k_) {
        var klmxd;if (q7p05 == 'json' || q7p05 == 'atlas') klmxd = zlxdsn['getJson'](pjyi9q['data']);else q7p05 == 'xml' ? klmxd = eo3['parseXMLFromString'](pjyi9q['data']) : klmxd = pjyi9q['data'];a823eo['onLoaded'](klmxd), !zlxdsn['isZiYu'] && zlxdsn['isPosMsgYu'] && q7p05 != 'arraybuffer' && wx['postMessage']({ 'url': a8reo, 'data': klmxd, 'isLoad': !![] });
      } else mh4k_ == 0x1 && zlxdsn['EnvConfig']['load']['call'](a823eo, a8reo, q7p05, lnmdz, awt26, rygfvi);
    }, a2eow(xdml, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xdml;
  }(),
      yfgjqi = function (vyf3rg) {
    function yfqj() {
      yfqj['__super']['call'](this);;
    }return oe8v3(yfqj, 'laya.wx.mini.MiniFileMgr', vyf3rg), yfqj['isLoadFile'] = function (vo8er3) {
      return yfqj['_fileTypeArr']['indexOf'](vo8er3) != -0x1 ? !![] : ![];
    }, yfqj['getFileInfo'] = function (s50pc) {
      var jpi09q = s50pc['split']('?')[0x0],
          evr3o = yfqj['filesListObj'][jpi09q];if (evr3o == null) return null;else return evr3o;return null;
    }, yfqj['onFileUpdate'] = function (vrgyf, hlmzdx) {
      var dhzxml = vrgyf['split']('/'),
          qijgy = dhzxml[dhzxml['length'] - 0x1],
          jyqpi = yfqj['getFileInfo'](hlmzdx);if (jyqpi == null) yfqj['onSaveFile'](hlmzdx, qijgy);else {
        if (jyqpi['readyUrl'] != hlmzdx) yfqj['remove'](qijgy, hlmzdx);
      }
    }, yfqj['exits'] = function (fvgi, vigf) {
      var i90qjp = yfqj['getFileNativePath'](fvgi);yfqj['fs']['getFileInfo']({ 'filePath': i90qjp, 'success': function (eo26) {
          vigf != null && vigf['runWith']([0x0, eo26]);
        }, 'fail': function (dklhxm) {
          vigf != null && vigf['runWith']([0x1, dklhxm]);
        } });
    }, yfqj['read'] = function (mxlhdk, cdsxz, zdcxs, $lmkh) {
      cdsxz === void 0x0 && (cdsxz = 'ascill'), $lmkh === void 0x0 && ($lmkh = '');var e8o3ar;$lmkh != '' ? e8o3ar = yfqj['getFileNativePath'](mxlhdk) : e8o3ar = mxlhdk, yfqj['fs']['readFile']({ 'filePath': e8o3ar, 'encoding': cdsxz, 'success': function (_km4$) {
          zdcxs != null && zdcxs['runWith']([0x0, _km4$]);
        }, 'fail': function (dxkhlm) {
          if (dxkhlm && $lmkh != '') yfqj['down']($lmkh, cdsxz, zdcxs, $lmkh);else zdcxs != null && zdcxs['runWith']([0x1]);
        } });
    }, yfqj['readNativeFile'] = function (bw2a6t, nc7ds) {
      yfqj['fs']['readFile']({ 'filePath': bw2a6t, 'encoding': '', 'success': function (q9jify) {
          nc7ds != null && nc7ds['runWith']([0x0]);
        }, 'fail': function (xdmkl) {
          nc7ds != null && nc7ds['runWith']([0x1]);
        } });
    }, yfqj['down'] = function (pc75s, ijf9yq, gjyqif, hk_4$u) {
      ijf9yq === void 0x0 && (ijf9yq = 'ascill'), hk_4$u === void 0x0 && (hk_4$u = '');var fygjiv = yfqj['getFileNativePath'](hk_4$u),
          o32ae8 = yfqj['wxdown']({ 'url': pc75s, 'filePath': fygjiv, 'success': function (if9jq) {
          if (if9jq['statusCode'] === 0xc8) yfqj['readFile'](if9jq['filePath'], ijf9yq, gjyqif, hk_4$u);
        }, 'fail': function (iy9qf) {
          gjyqif != null && gjyqif['runWith']([0x1, iy9qf]);
        } });o32ae8['onProgressUpdate'](function (k_$) {
        gjyqif != null && gjyqif['runWith']([0x2, k_$['progress']]);
      });
    }, yfqj['readFile'] = function (_lkxh, qp95j0, _k4$, e8gv3) {
      qp95j0 === void 0x0 && (qp95j0 = 'ascill'), e8gv3 === void 0x0 && (e8gv3 = ''), yfqj['fs']['readFile']({ 'filePath': _lkxh, 'encoding': qp95j0, 'success': function (v83rg) {
          if (_lkxh['indexOf']('http://') != -0x1 || _lkxh['indexOf']('https://') != -0x1) yfqj['onFileUpdate'](_lkxh, e8gv3);_k4$ != null && _k4$['runWith']([0x0, v83rg]);
        }, 'fail': function (dmnxlz) {
          if (dmnxlz) _k4$ != null && _k4$['runWith']([0x1, dmnxlz]);
        } });
    }, yfqj['downImg'] = function (er3ao, r8gev, we62a) {
      we62a === void 0x0 && (we62a = '');var ji90qp = yfqj['wxdown']({ 'url': er3ao, 'success': function (pq0975) {
          pq0975['statusCode'] === 0xc8 && yfqj['copyFile'](pq0975['tempFilePath'], we62a, r8gev);
        }, 'fail': function (scd7n) {
          r8gev != null && r8gev['runWith']([0x1, scd7n]);
        } });
    }, yfqj['copyFile'] = function ($mklh_, dc7zn, nmxdl) {
      var kh$l = $mklh_['split']('/'),
          yqgif = kh$l[kh$l['length'] - 0x1],
          nc75s0 = dc7zn['split']('?')[0x0],
          abw62t = yfqj['getFileInfo'](dc7zn),
          rve38g = yfqj['getFileNativePath'](yqgif);yfqj['fs']['copyFile']({ 'srcPath': $mklh_, 'destPath': rve38g, 'success': function (zdlsx) {
          if (!abw62t) yfqj['onSaveFile'](dc7zn, yqgif), nmxdl != null && nmxdl['runWith']([0x0]);else {
            if (abw62t['readyUrl'] != dc7zn) yfqj['remove'](yqgif, dc7zn, nmxdl);
          }
        }, 'fail': function (e3gv8r) {
          nmxdl != null && nmxdl['runWith']([0x1, e3gv8r]);
        } });
    }, yfqj['getFileNativePath'] = function (n075c) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + n075c;
    }, yfqj['remove'] = function (fqygij, a2tbw6, dnscx) {
      a2tbw6 === void 0x0 && (a2tbw6 = '');var ifvrg = yfqj['getFileInfo'](a2tbw6),
          lzsndx = yfqj['getFileNativePath'](ifvrg['md5']);gvj['loader']['clearRes'](ifvrg['readyUrl']), yfqj['fs']['unlink']({ 'filePath': lzsndx, 'success': function (o83a) {
          if (a2tbw6 != '') yfqj['onSaveFile'](a2tbw6, fqygij);dnscx != null && dnscx['runWith']([0x0]);
        }, 'fail': function (v8f3g) {} });
    }, yfqj['onSaveFile'] = function (ifryvg, fvjigy) {
      var g3yv = ifryvg['split']('?')[0x0];yfqj['filesListObj'][g3yv] = { 'md5': fvjigy, 'readyUrl': ifryvg }, yfqj['fs']['writeFile']({ 'filePath': yfqj['fileNativeDir'] + '/' + yfqj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yfqj['filesListObj']), 'success': function (o3a2e) {
          console['log']('写入测试测试成功：', o3a2e);
        }, 'fail': function (gfjvy) {
          console['log']('写入测试测试失败：', gfjvy);
        } });
    }, yfqj['existDir'] = function (qygf, u_4kh$) {
      yfqj['fs']['mkdir']({ 'dirPath': qygf, 'success': function (viygfr) {
          u_4kh$ != null && u_4kh$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (k_hx) {
          if (k_hx['errMsg']['indexOf']('file already exists') != -0x1) yfqj['readSync'](yfqj['fileListName'], 'utf8', u_4kh$);else u_4kh$ != null && u_4kh$['runWith']([0x1, k_hx]);
        } });
    }, yfqj['readSync'] = function (t2a6w, m_xkh, vgy3, rvf8) {
      m_xkh === void 0x0 && (m_xkh = 'ascill'), rvf8 === void 0x0 && (rvf8 = '');var $u_4 = yfqj['getFileNativePath'](t2a6w),
          lmhk_;try {
        lmhk_ = yfqj['fs']['readFileSync']($u_4), vgy3 != null && vgy3['runWith']([0x0, { 'data': lmhk_ }]);
      } catch (jp9yqi) {
        vgy3 != null && vgy3['runWith']([0x1]);
      }
    }, yfqj['readCache'] = function () {}, yfqj['writeCache'] = function (cxdn) {
      var wea62o = readyUrl['split']('?')[0x0];yfqj['filesListObj'][wea62o] = { 'md5': md5Name, 'readyUrl': readyUrl }, yfqj['fs']['writeFile']({ 'filePath': yfqj['fileNativeDir'] + '/' + yfqj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yfqj['filesListObj']), 'success': function (e6aw2) {}, 'fail': function (m4kh_$) {} });
    }, yfqj['setNativeFileDir'] = function (c07p5s) {
      yfqj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c07p5s;
    }, yfqj['filesListObj'] = {}, yfqj['fileNativeDir'] = null, yfqj['fileListName'] = 'layaairfiles.txt', yfqj['ziyuFileData'] = {}, a2eow(yfqj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yfqj;
  }(c75nzs),
      bao26 = function (givfr) {
    function lmkh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lmkh['__super']['call'](this), this['_sound'] = lmkh['_createSound']();
    }oe8v3(lmkh, 'laya.wx.mini.MiniSound', givfr);var dxhzl = lmkh['prototype'];return dxhzl['load'] = function (h_mk4$) {
      var lkmxhd = this;h_mk4$ = mdhklx['formatURL'](h_mk4$), this['url'] = h_mk4$;if (lmkh['_audioCache'][h_mk4$]) {
        this['event']('complete');return;
      }function yvjgif() {
        if (lmkh['_null'] != undefined) lkmxhd['_sound']['onCanplay'](lmkh['_null']), lkmxhd['_sound']['onError'](lmkh['_null']);else try {
          lkmxhd['_sound']['onCanplay'](null), lkmxhd['_sound']['onError'](null), lmkh['_null'] = null;
        } catch (y3gv) {
          console['warn']('[wxmini] _clearSound:' + y3gv), lkmxhd['_sound']['onCanplay']($h4km_), lkmxhd['_sound']['onError']($h4km_), lmkh['_null'] = $h4km_;
        }
      }function dxmzlh() {
        yvjgif(), qj9yp['loaded'] = !![], qj9yp['event']('complete'), lmkh['_audioCache'][qj9yp['url']] = qj9yp;
      }function rg38ve(a62ob) {
        console['error']('errCode=' + a62ob['errCode'] + '  errMsg=' + a62ob['errMsg']), yvjgif(), qj9yp['event']('error');
      }function $h4km_() {}this['_sound']['onCanplay'](dxmzlh), this['_sound']['onError'](rg38ve), this['_sound']['src'] = h_mk4$;var qj9yp = this;
    }, dxhzl['play'] = function (f8g3rv, jqgify) {
      f8g3rv === void 0x0 && (f8g3rv = 0x0), jqgify === void 0x0 && (jqgify = 0x0);var $kh_4m;if (this['url'] == u_h$['_tMusic']) {
        if (!lmkh['_musicAudio']) lmkh['_musicAudio'] = lmkh['_createSound']();$kh_4m = lmkh['_musicAudio'];
      } else $kh_4m = lmkh['_createSound']();$kh_4m['src'] = this['url'];var viyrg = new jpi($kh_4m);return viyrg['url'] = this['url'], viyrg['loops'] = jqgify, viyrg['startTime'] = f8g3rv, viyrg['play'](), u_h$['addChannel'](viyrg), viyrg;
    }, dxhzl['dispose'] = function () {
      var ldxkmh = lmkh['_audioCache'][this['url']];ldxkmh && (ldxkmh['src'] = '', delete lmkh['_audioCache'][this['url']]);
    }, wa6b2t(0x0, dxhzl, 'duration', function () {
      return this['_sound']['duration'];
    }), lmkh['_createSound'] = function () {
      return lmkh['_id']++, zlxdsn['window']['wx']['createInnerAudioContext']();
    }, lmkh['_musicAudio'] = null, lmkh['_id'] = 0x0, lmkh['_audioCache'] = {}, lmkh['_null'] = undefined, lmkh;
  }(c75nzs),
      jpi = function (frivyg) {
    function xmzld(f3g8v) {
      this['_audio'] = null, this['_onEnd'] = null, xmzld['__super']['call'](this), this['_audio'] = f3g8v, this['_onEnd'] = eo3['bind'](this['__onEnd'], this), f3g8v['onEnded'](this['_onEnd']);
    }oe8v3(xmzld, 'laya.wx.mini.MiniSoundChannel', frivyg);var jfgqy = xmzld['prototype'];return jfgqy['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gvj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jfgqy['__onNull'] = function () {}, jfgqy['play'] = function () {
      this['isStopped'] = ![], u_h$['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jfgqy['stop'] = function () {
      this['isStopped'] = !![], u_h$['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xmzld['_null'] != undefined) this['_audio']['onEnded'](xmzld['_null']);else try {
        this['_audio']['onEnded'](null), xmzld['_null'] = null;
      } catch (jqiyp) {
        console['warn']('[wxmini] stop:' + jqiyp), this['_audio']['onEnded'](eo3['bind'](this['__onNull'], this)), xmzld['_null'] = eo3['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jfgqy['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jfgqy['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u_h$['addChannel'](this), this['_audio']['play']();
    }, wa6b2t(0x0, jfgqy, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), wa6b2t(0x0, jfgqy, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), wa6b2t(0x0, jfgqy, 'volume', function () {
      return 0x1;
    }, function (hmxlk_) {}), xmzld['_null'] = undefined, xmzld;
  }(aore83);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var yfrvg3 in Laya) {
    var kl_h$m = Laya[yfrvg3];kl_h$m && kl_h$m['__isclass'] && (exports[yfrvg3] = kl_h$m);
  }
});