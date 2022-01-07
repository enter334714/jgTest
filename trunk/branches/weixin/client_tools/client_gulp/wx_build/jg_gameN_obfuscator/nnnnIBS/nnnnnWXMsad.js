var A = wx.$N;
(function (window, document, qij9fy) {
  var vgifj = qij9fy['un'],
      xdzlns = qij9fy['uns'],
      znsc75 = qij9fy['static'],
      grfyv = qij9fy['class'],
      ypij9q = qij9fy['getset'],
      m4kh_ = qij9fy['__newvec'],
      cp05 = laya['utils']['Browser'],
      qjp5 = laya['events']['Event'],
      ow26b = laya['events']['EventDispatcher'],
      xmk = laya['resource']['HTMLImage'],
      rg83v = laya['utils']['Handler'],
      qifjgy = laya['display']['Input'],
      zmlhd = laya['net']['Loader'],
      sd7nzc = laya['maths']['Matrix'],
      grvf83 = laya['renders']['Render'],
      fgjvy = laya['utils']['RunDriver'],
      wo6b2a = laya['media']['Sound'],
      $u_kh4 = laya['media']['SoundChannel'],
      watb = laya['media']['SoundManager'],
      aer8o3 = laya['display']['Stage'],
      sdczx = laya['net']['URL'],
      ra8 = laya['utils']['Utils'],
      xm = function () {
    function gjfyiq() {}return grfyv(gjfyiq, 'laya.wx.mini.MiniAdpter'), gjfyiq['getJson'] = function (kl_h$m) {
      return JSON['parse'](kl_h$m);
    }, gjfyiq['init'] = function (ijyfvg, o832) {
      ijyfvg === void 0x0 && (ijyfvg = ![]), o832 === void 0x0 && (o832 = ![]);if (gjfyiq['_inited']) return;gjfyiq['window'] = window;if (gjfyiq['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;gjfyiq['_inited'] = !![], gjfyiq['isZiYu'] = o832, gjfyiq['isPosMsgYu'] = ijyfvg, gjfyiq['EnvConfig'] = {}, !gjfyiq['isZiYu'] && (dscnxz['setNativeFileDir']('/layaairGame'), dscnxz['existDir'](dscnxz['fileNativeDir'], rg83v['create'](gjfyiq, gjfyiq['onMkdirCallBack']))), gjfyiq['window']['focus'] = function () {}, qij9fy['getUrlPath'] = function () {}, gjfyiq['window']['logtime'] = function (fyvgr) {}, gjfyiq['window']['alertTimeLog'] = function (w26tba) {}, gjfyiq['window']['resetShareInfo'] = function () {}, gjfyiq['window']['CanvasRenderingContext2D'] = function () {}, gjfyiq['window']['CanvasRenderingContext2D']['prototype'] = gjfyiq['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gjfyiq['window']['document']['body']['appendChild'] = function () {}, gjfyiq['EnvConfig']['pixelRatioInt'] = 0x0, fgjvy['getPixelRatio'] = gjfyiq['pixelRatio'], gjfyiq['_preCreateElement'] = cp05['createElement'], cp05['createElement'] = gjfyiq['createElement'], fgjvy['createShaderCondition'] = gjfyiq['createShaderCondition'], ra8['parseXMLFromString'] = gjfyiq['parseXMLFromString'], qifjgy['_createInputElement'] = jgfiyv['_createInputElement'], gjfyiq['EnvConfig']['load'] = zmlhd['prototype']['load'], zmlhd['prototype']['load'] = nlzdsx['prototype']['load'], gjfyiq['isZiYu'] && ijyfvg && wx['onMessage'](function (j9pyqi) {
        j9pyqi['isLoad'] && (dscnxz['ziyuFileData'][j9pyqi['url']] = j9pyqi['data']);
      });
    }, gjfyiq['onMkdirCallBack'] = function (k4m_$h, xkl_m) {
      if (!k4m_$h) dscnxz['filesListObj'] = JSON['parse'](xkl_m['data']);
    }, gjfyiq['pixelRatio'] = function () {
      if (!gjfyiq['EnvConfig']['pixelRatioInt']) try {
        var f9yqij = wx['getSystemInfoSync']();return gjfyiq['EnvConfig']['pixelRatioInt'] = f9yqij['pixelRatio'], f9yqij = f9yqij, f9yqij['pixelRatio'];
      } catch (c5nsz7) {}return gjfyiq['EnvConfig']['pixelRatioInt'];
    }, gjfyiq['createElement'] = function (n5s0c7) {
      if (n5s0c7 == 'canvas') {
        var rfvi;return gjfyiq['idx'] == 0x1 ? gjfyiq['isZiYu'] ? (rfvi = sharedCanvas, rfvi['style'] = {}) : rfvi = window['canvas'] : rfvi = window['wx']['createCanvas'](), gjfyiq['idx']++, rfvi;
      } else {
        if (n5s0c7 == 'textarea' || n5s0c7 == 'input') return gjfyiq['onCreateInput'](n5s0c7);else {
          if (n5s0c7 == 'div') {
            var jfiy9q = gjfyiq['_preCreateElement'](n5s0c7);return jfiy9q['contains'] = function (pq97) {
              return null;
            }, jfiy9q['removeChild'] = function (aw26) {}, jfiy9q;
          } else return gjfyiq['_preCreateElement'](n5s0c7);
        }
      }
    }, gjfyiq['onCreateInput'] = function (owea6) {
      var qiyp = gjfyiq['_preCreateElement'](owea6);return qiyp['focus'] = jgfiyv['wxinputFocus'], qiyp['blur'] = jgfiyv['wxinputblur'], qiyp['style'] = {}, qiyp['value'] = 0x0, qiyp['parentElement'] = {}, qiyp['placeholder'] = {}, qiyp['type'] = {}, qiyp['setColor'] = function (r38f) {}, qiyp['setType'] = function (m$k4_h) {}, qiyp['setFontFace'] = function (snzl) {}, qiyp['addEventListener'] = function (lxmnd) {}, qiyp['contains'] = function (b26ow) {
        return null;
      }, qiyp['removeChild'] = function (igfyv) {}, qiyp;
    }, gjfyiq['createShaderCondition'] = function (ip09qj) {
      var gvji = this,
          mzxhld = function () {
        var n50s = ip09qj;return gvji[ip09qj['replace']('this.', '')];
      };return mzxhld;
    }, gjfyiq['EnvConfig'] = null, gjfyiq['window'] = null, gjfyiq['_preCreateElement'] = null, gjfyiq['_inited'] = ![], gjfyiq['wxRequest'] = null, gjfyiq['systemInfo'] = null, gjfyiq['version'] = '0.0.1', gjfyiq['isZiYu'] = ![], gjfyiq['isPosMsgYu'] = ![], gjfyiq['parseXMLFromString'] = function (sp05c) {
      var qp09j, dnlsxz;sp05c = sp05c['replace'](/>\s+</g, '><');try {
        qp09j = new window['Parser']['DOMParser']()['parseFromString'](sp05c, 'text/xml');
      } catch (mlxkh) {
        throw '需要引入xml解析库文件';
      }return qp09j;
    }, gjfyiq['idx'] = 0x1, gjfyiq;
  }(),
      b6a2wo = function () {
    function xkm_lh() {}grfyv(xkm_lh, 'laya.wx.mini.MiniImage');var dmhkx = xkm_lh['prototype'];return dmhkx['_loadImage'] = function (jvfyi) {
      var m$h4k_ = this,
          gjyfi = ![];jvfyi['indexOf']('layaNativeDir/') == -0x1 && (gjyfi = !![], jvfyi = sdczx['formatURL'](jvfyi));if (!dscnxz['getFileInfo'](jvfyi)) {
        if (jvfyi['indexOf']('http://') != -0x1 || jvfyi['indexOf']('https://') != -0x1) dscnxz['downImg'](jvfyi, new rg83v(xkm_lh, xkm_lh['onDownImgCallBack'], [jvfyi, m$h4k_]), jvfyi);else xkm_lh['onCreateImage'](jvfyi, m$h4k_, !![]);
      } else xkm_lh['onCreateImage'](jvfyi, m$h4k_, !gjyfi);
    }, xkm_lh['onDownImgCallBack'] = function (dzcsnx, zcxnds, a2w6bo) {
      if (!a2w6bo) xkm_lh['onCreateImage'](dzcsnx, zcxnds);else zcxnds['onError'](null);
    }, xkm_lh['onCreateImage'] = function (pc7, scz5, snczdx) {
      snczdx === void 0x0 && (snczdx = ![]);var ygivj;if (!snczdx) {
        var eao62 = dscnxz['getFileInfo'](pc7),
            mxzhdl = eao62['md5'];ygivj = dscnxz['getFileNativePath'](mxzhdl);
      } else ygivj = pc7;if (scz5['imgCache'] == null) scz5['imgCache'] = {};var dxlzm;function f9ij() {
        dxlzm['onload'] = null, dxlzm['onerror'] = null, delete scz5['imgCache'][pc7];
      };var _mk4h$ = function () {
        f9ij(), scz5['onLoaded'](dxlzm);
      },
          fygq = function () {
        f9ij(), scz5['event']('error', 'Load image failed');
      };scz5['_type'] == 'nativeimage' ? (dxlzm = new cp05['window']['Image'](), dxlzm['crossOrigin'] = '', dxlzm['onload'] = _mk4h$, dxlzm['onerror'] = fygq, dxlzm['src'] = ygivj, scz5['imgCache'][pc7] = dxlzm) : new xmk['create'](ygivj, { 'onload': _mk4h$, 'onerror': fygq, 'onCreate': function (oaw6) {
          dxlzm = oaw6, scz5['imgCache'][pc7] = oaw6;
        } });
    }, xkm_lh;
  }(),
      jgfiyv = function () {
    function huk$_4() {}return grfyv(huk$_4, 'laya.wx.mini.MiniInput'), huk$_4['_createInputElement'] = function () {
      qifjgy['_initInput'](qifjgy['area'] = cp05['createElement']('textarea')), qifjgy['_initInput'](qifjgy['input'] = cp05['createElement']('input')), qifjgy['inputContainer'] = cp05['createElement']('div'), qifjgy['inputContainer']['style']['position'] = 'absolute', qifjgy['inputContainer']['style']['zIndex'] = 0x186a0, cp05['container']['appendChild'](qifjgy['inputContainer']), qifjgy['inputContainer']['setPos'] = function (q0i9p, oa8e23) {
        qifjgy['inputContainer']['style']['left'] = q0i9p + 'px', qifjgy['inputContainer']['style']['top'] = oa8e23 + 'px';
      }, qij9fy['stage']['on']('resize', null, huk$_4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (n57sz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), watb['_soundClass'] = f9jyq, watb['_musicClass'] = f9jyq;
    }, huk$_4['_onStageResize'] = function () {
      var $k4_h = qij9fy['stage']['_canvasTransform']['identity']();$k4_h['scale'](cp05['width'] / grvf83['canvas']['width'] / fgjvy['getPixelRatio'](), cp05['height'] / grvf83['canvas']['height'] / fgjvy['getPixelRatio']());
    }, huk$_4['wxinputFocus'] = function (km4$h) {
      var wa2eo = qifjgy['inputElement']['target'];if (wa2eo && !wa2eo['editable']) return;xm['window']['wx']['offKeyboardConfirm'](), xm['window']['wx']['offKeyboardInput'](), xm['window']['wx']['showKeyboard']({ 'defaultValue': wa2eo['text'], 'maxLength': wa2eo['maxChars'], 'multiple': wa2eo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (vgfyij) {}, 'fail': function (ypiq) {} }), xm['window']['wx']['onKeyboardConfirm'](function (p75sc) {
        var ijgvf = p75sc ? p75sc['value'] : '';wa2eo['text'] = ijgvf, wa2eo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xm['window']['wx']['onKeyboardInput'](function (woea26) {
        var sdczn7 = woea26 ? woea26['value'] : '';if (!wa2eo['multiline']) {
          if (sdczn7['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }wa2eo['text'] = sdczn7, wa2eo['event']('input');
      });
    }, huk$_4['inputEnter'] = function () {
      qifjgy['inputElement']['target']['focus'] = ![];
    }, huk$_4['wxinputblur'] = function () {
      huk$_4['hideKeyboard']();
    }, huk$_4['hideKeyboard'] = function () {
      xm['window']['wx']['offKeyboardConfirm'](), xm['window']['wx']['offKeyboardInput'](), xm['window']['wx']['hideKeyboard']({ 'success': function (hm$) {
          console['log']('隐藏键盘');
        }, 'fail': function (r8aeo3) {
          console['log']('隐藏键盘出错:' + (r8aeo3 ? r8aeo3['errMsg'] : ''));
        } });
    }, huk$_4;
  }(),
      nlzdsx = function () {
    function dszcn7() {}grfyv(dszcn7, 'laya.wx.mini.MiniLoader');var kxhmd = dszcn7['prototype'];return kxhmd['load'] = function (u_$k4, szcdn7, wbat6, ero3a8, j9ifqy) {
      wbat6 === void 0x0 && (wbat6 = !![]), j9ifqy === void 0x0 && (j9ifqy = ![]);var zsc7d = this;zsc7d['_url'] = u_$k4;if (u_$k4['indexOf']('data:image') === 0x0) zsc7d['_type'] = szcdn7 = 'image';else zsc7d['_type'] = szcdn7 || (szcdn7 = zsc7d['getTypeFromUrl'](u_$k4));zsc7d['_cache'] = wbat6, zsc7d['_data'] = null;var oa2e = 'ascii';if (u_$k4['indexOf']('.fnt') != -0x1) oa2e = 'utf8';else szcdn7 == 'arraybuffer' && (oa2e = '');;var xhmkdl = ra8['getFileExtension'](u_$k4);if (dszcn7['_fileTypeArr']['indexOf'](xhmkdl) != -0x1) xm['EnvConfig']['load']['call'](this, u_$k4, szcdn7, wbat6, ero3a8, j9ifqy);else {
        if (!dscnxz['getFileInfo'](u_$k4)) {
          if (u_$k4['indexOf']('layaNativeDir/') != -0x1) {
            if (xm['isZiYu']) {
              var fqji9y = dscnxz['ziyuFileData'][u_$k4];zsc7d['onLoaded'](fqji9y);return;
            } else {
              cosnole['log']('read read'), dscnxz['read'](u_$k4, oa2e, new rg83v(dszcn7, dszcn7['onReadNativeCallBack'], [oa2e, u_$k4, szcdn7, wbat6, ero3a8, j9ifqy, zsc7d]));return;
            }
          }if (sdczx['rootPath'] == '') var k_$lhm = u_$k4;else k_$lhm = u_$k4['split'](sdczx['rootPath'])[0x0];u_$k4['indexOf']('http://') != -0x1 || u_$k4['indexOf']('https://') != -0x1 ? xm['EnvConfig']['load']['call'](zsc7d, u_$k4, szcdn7, wbat6, ero3a8, j9ifqy) : dscnxz['readFile'](k_$lhm, oa2e, new rg83v(dszcn7, dszcn7['onReadNativeCallBack'], [oa2e, u_$k4, szcdn7, wbat6, ero3a8, j9ifqy, zsc7d]), u_$k4);
        } else xm['EnvConfig']['load']['call'](this, u_$k4, szcdn7, wbat6, ero3a8, j9ifqy);
      }
    }, kxhmd['resMgrLoad'] = function (k_h4u, b2oa6w, aw6bo2, xdmzn, a8e23, p0957c, ps075) {
      aw6bo2 === void 0x0 && (aw6bo2 = 0x0), xdmzn === void 0x0 && (xdmzn = ![]), a8e23 === void 0x0 && (a8e23 = ![]), p0957c === void 0x0 && (p0957c = 0x0), ps075 === void 0x0 && (ps075 = 0x3), k_h4u['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k_h4u), xm['EnvConfig']['resMgrLoad'](k_h4u, (zdxns, e8r3a, a2o6bw) => {
        dszcn7['prototype']['resMgrLoadCallBack'](zdxns, e8r3a, a2o6bw, b2oa6w);
      }, aw6bo2, xdmzn, a8e23, p0957c, ps075);
    }, kxhmd['resMgrLoadCallBack'] = function (zdlmn, fjy, bwt26, snc70) {
      console['log']('buff:::', zdlmn, bwt26, dscnxz['fileNativeDir'] + '///' + dscnxz['fileListName']), snc70(zdlmn, fjy, bwt26);
    }, kxhmd['clearRes'] = function (ivygfr, dxsz) {
      dxsz === void 0x0 && (dxsz = ![]);var zdlnxm = this;zdlnxm['clearRes'](ivygfr, dxsz);var jp0 = dscnxz['getFileInfo'](ivygfr);if (jp0 && (ivygfr['indexOf']('http://') != -0x1 || ivygfr['indexOf']('https://') != -0x1)) {
        var ldnmz = jp0['md5'],
            o86ea = dscnxz['getFileNativePath'](ldnmz);dscnxz['remove'](o86ea);
      }
    }, dszcn7['onReadNativeCallBack'] = function (gfjvy, ndzx, yfij9, _mklx, wea2o, y3grfv, xdnl, f9jiqy, egvr83) {
      _mklx === void 0x0 && (_mklx = !![]), y3grfv === void 0x0 && (y3grfv = ![]), f9jiqy === void 0x0 && (f9jiqy = 0x0);if (!f9jiqy) {
        var k_mlxh;if (yfij9 == 'json' || yfij9 == 'atlas') k_mlxh = xm['getJson'](egvr83['data']);else yfij9 == 'xml' ? k_mlxh = ra8['parseXMLFromString'](egvr83['data']) : k_mlxh = egvr83['data'];xdnl['onLoaded'](k_mlxh), !xm['isZiYu'] && xm['isPosMsgYu'] && yfij9 != 'arraybuffer' && wx['postMessage']({ 'url': ndzx, 'data': k_mlxh, 'isLoad': !![] });
      } else f9jiqy == 0x1 && xm['EnvConfig']['load']['call'](xdnl, ndzx, yfij9, _mklx, wea2o, y3grfv);
    }, znsc75(dszcn7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), dszcn7;
  }(),
      dscnxz = function (s7dcn) {
    function _$khl() {
      _$khl['__super']['call'](this);;
    }return grfyv(_$khl, 'laya.wx.mini.MiniFileMgr', s7dcn), _$khl['isLoadFile'] = function (qp9iy) {
      return _$khl['_fileTypeArr']['indexOf'](qp9iy) != -0x1 ? !![] : ![];
    }, _$khl['getFileInfo'] = function (aw2ob6) {
      var o2we6a = aw2ob6['split']('?')[0x0],
          ew2ao = _$khl['filesListObj'][o2we6a];if (ew2ao == null) return null;else return ew2ao;return null;
    }, _$khl['onFileUpdate'] = function (zdslnx, m4hk$) {
      var mh_kx = zdslnx['split']('/'),
          gyifvj = mh_kx[mh_kx['length'] - 0x1],
          ldnzs = _$khl['getFileInfo'](m4hk$);if (ldnzs == null) _$khl['onSaveFile'](m4hk$, gyifvj);else {
        if (ldnzs['readyUrl'] != m4hk$) _$khl['remove'](gyifvj, m4hk$);
      }
    }, _$khl['exits'] = function (r8f3v, p7905) {
      var dc7n = _$khl['getFileNativePath'](r8f3v);_$khl['fs']['getFileInfo']({ 'filePath': dc7n, 'success': function (rvifyg) {
          p7905 != null && p7905['runWith']([0x0, rvifyg]);
        }, 'fail': function (vjyi) {
          p7905 != null && p7905['runWith']([0x1, vjyi]);
        } });
    }, _$khl['read'] = function (ndzxcs, dxcz, jqp9yi, qi9) {
      dxcz === void 0x0 && (dxcz = 'ascill'), qi9 === void 0x0 && (qi9 = '');var snc750;qi9 != '' ? snc750 = _$khl['getFileNativePath'](ndzxcs) : snc750 = ndzxcs, _$khl['fs']['readFile']({ 'filePath': snc750, 'encoding': dxcz, 'success': function (cn7s05) {
          jqp9yi != null && jqp9yi['runWith']([0x0, cn7s05]);
        }, 'fail': function (evr38) {
          if (evr38 && qi9 != '') _$khl['down'](qi9, dxcz, jqp9yi, qi9);else jqp9yi != null && jqp9yi['runWith']([0x1]);
        } });
    }, _$khl['readNativeFile'] = function (dmxklh, cnzds) {
      _$khl['fs']['readFile']({ 'filePath': dmxklh, 'encoding': '', 'success': function (k4_u$h) {
          cnzds != null && cnzds['runWith']([0x0]);
        }, 'fail': function (e38ro) {
          cnzds != null && cnzds['runWith']([0x1]);
        } });
    }, _$khl['down'] = function (i9p0, dzxnc, jiyg, zxlhdm) {
      dzxnc === void 0x0 && (dzxnc = 'ascill'), zxlhdm === void 0x0 && (zxlhdm = '');var mndzx = _$khl['getFileNativePath'](zxlhdm),
          fyrv = _$khl['wxdown']({ 'url': i9p0, 'filePath': mndzx, 'success': function (ae268o) {
          if (ae268o['statusCode'] === 0xc8) _$khl['readFile'](ae268o['filePath'], dzxnc, jiyg, zxlhdm);
        }, 'fail': function (a6o2b) {
          jiyg != null && jiyg['runWith']([0x1, a6o2b]);
        } });fyrv['onProgressUpdate'](function (zscn7) {
        jiyg != null && jiyg['runWith']([0x2, zscn7['progress']]);
      });
    }, _$khl['readFile'] = function (e8gv3, q5j09p, xhl_mk, fqyig) {
      q5j09p === void 0x0 && (q5j09p = 'ascill'), fqyig === void 0x0 && (fqyig = ''), _$khl['fs']['readFile']({ 'filePath': e8gv3, 'encoding': q5j09p, 'success': function (g3rvfy) {
          if (e8gv3['indexOf']('http://') != -0x1 || e8gv3['indexOf']('https://') != -0x1) _$khl['onFileUpdate'](e8gv3, fqyig);xhl_mk != null && xhl_mk['runWith']([0x0, g3rvfy]);
        }, 'fail': function (c7sn5) {
          if (c7sn5) xhl_mk != null && xhl_mk['runWith']([0x1, c7sn5]);
        } });
    }, _$khl['downImg'] = function (nm, cn7zs, lhzmd) {
      lhzmd === void 0x0 && (lhzmd = '');var qpiyj9 = _$khl['wxdown']({ 'url': nm, 'success': function (dmlxzh) {
          dmlxzh['statusCode'] === 0xc8 && _$khl['copyFile'](dmlxzh['tempFilePath'], lhzmd, cn7zs);
        }, 'fail': function (xsdcn) {
          cn7zs != null && cn7zs['runWith']([0x1, xsdcn]);
        } });
    }, _$khl['copyFile'] = function (kmh4_, s50cp7, iqy9fj) {
      var dzmlnx = kmh4_['split']('/'),
          oa8re = dzmlnx[dzmlnx['length'] - 0x1],
          p9yqi = s50cp7['split']('?')[0x0],
          yjp9q = _$khl['getFileInfo'](s50cp7),
          _hm4k$ = _$khl['getFileNativePath'](oa8re);_$khl['fs']['copyFile']({ 'srcPath': kmh4_, 'destPath': _hm4k$, 'success': function (t2wba6) {
          if (!yjp9q) _$khl['onSaveFile'](s50cp7, oa8re), iqy9fj != null && iqy9fj['runWith']([0x0]);else {
            if (yjp9q['readyUrl'] != s50cp7) _$khl['remove'](oa8re, s50cp7, iqy9fj);
          }
        }, 'fail': function (a6) {
          iqy9fj != null && iqy9fj['runWith']([0x1, a6]);
        } });
    }, _$khl['getFileNativePath'] = function (p59c7) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p59c7;
    }, _$khl['remove'] = function (o2w6ea, _4$m, k_$u41) {
      _4$m === void 0x0 && (_4$m = '');var ergv38 = _$khl['getFileInfo'](_4$m),
          sdzn = _$khl['getFileNativePath'](ergv38['md5']);qij9fy['loader']['clearRes'](ergv38['readyUrl']), _$khl['fs']['unlink']({ 'filePath': sdzn, 'success': function ($k_lh) {
          if (_4$m != '') _$khl['onSaveFile'](_4$m, o2w6ea);k_$u41 != null && k_$u41['runWith']([0x0]);
        }, 'fail': function (p9qij0) {} });
    }, _$khl['onSaveFile'] = function (h$klm_, szdxln) {
      var hldkx = h$klm_['split']('?')[0x0];_$khl['filesListObj'][hldkx] = { 'md5': szdxln, 'readyUrl': h$klm_ }, _$khl['fs']['writeFile']({ 'filePath': _$khl['fileNativeDir'] + '/' + _$khl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_$khl['filesListObj']), 'success': function (xzdsc) {
          console['log']('写入测试测试成功：', xzdsc);
        }, 'fail': function (k_$hm) {
          console['log']('写入测试测试失败：', k_$hm);
        } });
    }, _$khl['existDir'] = function (hkxm_l, ku4h_) {
      _$khl['fs']['mkdir']({ 'dirPath': hkxm_l, 'success': function (ea28o) {
          ku4h_ != null && ku4h_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ipjqy9) {
          if (ipjqy9['errMsg']['indexOf']('file already exists') != -0x1) _$khl['readSync'](_$khl['fileListName'], 'utf8', ku4h_);else ku4h_ != null && ku4h_['runWith']([0x1, ipjqy9]);
        } });
    }, _$khl['readSync'] = function (s507nc, vre83, ldxnzs, kdmhx) {
      vre83 === void 0x0 && (vre83 = 'ascill'), kdmhx === void 0x0 && (kdmhx = '');var xndz = _$khl['getFileNativePath'](s507nc),
          mdkxlh;try {
        mdkxlh = _$khl['fs']['readFileSync'](xndz), ldxnzs != null && ldxnzs['runWith']([0x0, { 'data': mdkxlh }]);
      } catch (reg3v8) {
        ldxnzs != null && ldxnzs['runWith']([0x1]);
      }
    }, _$khl['readCache'] = function () {}, _$khl['writeCache'] = function (ea82o) {
      var $k_uh = readyUrl['split']('?')[0x0];_$khl['filesListObj'][$k_uh] = { 'md5': md5Name, 'readyUrl': readyUrl }, _$khl['fs']['writeFile']({ 'filePath': _$khl['fileNativeDir'] + '/' + _$khl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_$khl['filesListObj']), 'success': function (g3vrf) {}, 'fail': function (s5cnz7) {} });
    }, _$khl['setNativeFileDir'] = function (p0q97) {
      _$khl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p0q97;
    }, _$khl['filesListObj'] = {}, _$khl['fileNativeDir'] = null, _$khl['fileListName'] = 'layaairfiles.txt', _$khl['ziyuFileData'] = {}, znsc75(_$khl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _$khl;
  }(ow26b),
      f9jyq = function (xcns) {
    function fyjqi() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fyjqi['__super']['call'](this), this['_sound'] = fyjqi['_createSound']();
    }grfyv(fyjqi, 'laya.wx.mini.MiniSound', xcns);var lzxnsd = fyjqi['prototype'];return lzxnsd['load'] = function (sdzln) {
      var _u41 = this;sdzln = sdczx['formatURL'](sdzln), this['url'] = sdzln;if (fyjqi['_audioCache'][sdzln]) {
        this['event']('complete');return;
      }function mlk_() {
        if (fyjqi['_null'] != undefined) _u41['_sound']['onCanplay'](fyjqi['_null']), _u41['_sound']['onError'](fyjqi['_null']);else try {
          _u41['_sound']['onCanplay'](null), _u41['_sound']['onError'](null), fyjqi['_null'] = null;
        } catch (q09p57) {
          console['warn']('[wxmini] _clearSound:' + q09p57), _u41['_sound']['onCanplay'](r8vge), _u41['_sound']['onError'](r8vge), fyjqi['_null'] = r8vge;
        }
      }function hmkd() {
        mlk_(), $lkm_['loaded'] = !![], $lkm_['event']('complete'), fyjqi['_audioCache'][$lkm_['url']] = $lkm_;
      }function ra3o8e(g3rfy) {
        console['error']('errCode=' + g3rfy['errCode'] + '  errMsg=' + g3rfy['errMsg']), mlk_(), $lkm_['event']('error');
      }function r8vge() {}this['_sound']['onCanplay'](hmkd), this['_sound']['onError'](ra3o8e), this['_sound']['src'] = sdzln;var $lkm_ = this;
    }, lzxnsd['play'] = function (xdmzlh, xlsz) {
      xdmzlh === void 0x0 && (xdmzlh = 0x0), xlsz === void 0x0 && (xlsz = 0x0);var j9iq0p;if (this['url'] == watb['_tMusic']) {
        if (!fyjqi['_musicAudio']) fyjqi['_musicAudio'] = fyjqi['_createSound']();j9iq0p = fyjqi['_musicAudio'];
      } else j9iq0p = fyjqi['_createSound']();j9iq0p['src'] = this['url'];var i9ypjq = new nzxls(j9iq0p);return i9ypjq['url'] = this['url'], i9ypjq['loops'] = xlsz, i9ypjq['startTime'] = xdmzlh, i9ypjq['play'](), watb['addChannel'](i9ypjq), i9ypjq;
    }, lzxnsd['dispose'] = function () {
      var u$h4k = fyjqi['_audioCache'][this['url']];u$h4k && (u$h4k['src'] = '', delete fyjqi['_audioCache'][this['url']]);
    }, ypij9q(0x0, lzxnsd, 'duration', function () {
      return this['_sound']['duration'];
    }), fyjqi['_createSound'] = function () {
      return fyjqi['_id']++, xm['window']['wx']['createInnerAudioContext']();
    }, fyjqi['_musicAudio'] = null, fyjqi['_id'] = 0x0, fyjqi['_audioCache'] = {}, fyjqi['_null'] = undefined, fyjqi;
  }(ow26b),
      nzxls = function (q079p) {
    function fivjgy(cs507p) {
      this['_audio'] = null, this['_onEnd'] = null, fivjgy['__super']['call'](this), this['_audio'] = cs507p, this['_onEnd'] = ra8['bind'](this['__onEnd'], this), cs507p['onEnded'](this['_onEnd']);
    }grfyv(fivjgy, 'laya.wx.mini.MiniSoundChannel', q079p);var egr3v8 = fivjgy['prototype'];return egr3v8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qij9fy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, egr3v8['__onNull'] = function () {}, egr3v8['play'] = function () {
      this['isStopped'] = ![], watb['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, egr3v8['stop'] = function () {
      this['isStopped'] = !![], watb['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fivjgy['_null'] != undefined) this['_audio']['onEnded'](fivjgy['_null']);else try {
        this['_audio']['onEnded'](null), fivjgy['_null'] = null;
      } catch (lm$h) {
        console['warn']('[wxmini] stop:' + lm$h), this['_audio']['onEnded'](ra8['bind'](this['__onNull'], this)), fivjgy['_null'] = ra8['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, egr3v8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, egr3v8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], watb['addChannel'](this), this['_audio']['play']();
    }, ypij9q(0x0, egr3v8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ypij9q(0x0, egr3v8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ypij9q(0x0, egr3v8, 'volume', function () {
      return 0x1;
    }, function (s7ncz5) {}), fivjgy['_null'] = undefined, fivjgy;
  }($u_kh4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jiqyp in Laya) {
    var ij09 = Laya[jiqyp];ij09 && ij09['__isclass'] && (exports[jiqyp] = ij09);
  }
});