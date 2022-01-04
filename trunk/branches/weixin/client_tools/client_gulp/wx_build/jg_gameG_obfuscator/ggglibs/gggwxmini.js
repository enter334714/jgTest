var m = wx.$g;
(function (window, document, l8cg9s) {
  var jrmu = l8cg9s['un'],
      w1axk = l8cg9s['uns'],
      vqg7ey = l8cg9s['static'],
      f0_bp = l8cg9s['class'],
      hib = l8cg9s['getset'],
      cqg7sv = l8cg9s['__newvec'],
      qg8lsc = laya['utils']['Browser'],
      m6jru$ = laya['events']['Event'],
      k7eyv = laya['events']['EventDispatcher'],
      r6odz = laya['resource']['HTMLImage'],
      rz2od6 = laya['utils']['Handler'],
      qvgec = laya['display']['Input'],
      v1ewyk = laya['net']['Loader'],
      hw1ye = laya['maths']['Matrix'],
      _fbt = laya['renders']['Render'],
      w1yek = laya['utils']['RunDriver'],
      i5ha1x = laya['media']['Sound'],
      vqye7g = laya['media']['SoundChannel'],
      o2rd6z = laya['media']['SoundManager'],
      zjr6 = laya['display']['Stage'],
      ev7qwy = laya['net']['URL'],
      xah15i = laya['utils']['Utils'],
      j$urm = function () {
    function ftod4() {}return f0_bp(ftod4, 'laya.wx.mini.MiniAdpter'), ftod4['getJson'] = function (mj$u6r) {
      return JSON['parse'](mj$u6r);
    }, ftod4['init'] = function (qy7vwe, kxhy1w) {
      qy7vwe === void 0x0 && (qy7vwe = ![]), kxhy1w === void 0x0 && (kxhy1w = ![]);if (ftod4['_inited']) return;ftod4['window'] = window;if (ftod4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ftod4['_inited'] = !![], ftod4['isZiYu'] = kxhy1w, ftod4['isPosMsgYu'] = qy7vwe, ftod4['EnvConfig'] = {}, !ftod4['isZiYu'] && (fot34_['setNativeFileDir']('/layaairGame'), fot34_['existDir'](fot34_['fileNativeDir'], rz2od6['create'](ftod4, ftod4['onMkdirCallBack']))), ftod4['window']['focus'] = function () {}, l8cg9s['getUrlPath'] = function () {}, ftod4['window']['logtime'] = function (v7eqyg) {}, ftod4['window']['alertTimeLog'] = function (ai1x) {}, ftod4['window']['resetShareInfo'] = function () {}, ftod4['window']['CanvasRenderingContext2D'] = function () {}, ftod4['window']['CanvasRenderingContext2D']['prototype'] = ftod4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ftod4['window']['document']['body']['appendChild'] = function () {}, ftod4['EnvConfig']['pixelRatioInt'] = 0x0, w1yek['getPixelRatio'] = ftod4['pixelRatio'], ftod4['_preCreateElement'] = qg8lsc['createElement'], qg8lsc['createElement'] = ftod4['createElement'], w1yek['createShaderCondition'] = ftod4['createShaderCondition'], xah15i['parseXMLFromString'] = ftod4['parseXMLFromString'], qvgec['_createInputElement'] = e7cvg['_createInputElement'], ftod4['EnvConfig']['load'] = v1ewyk['prototype']['load'], v1ewyk['prototype']['load'] = f_0tp4['prototype']['load'], ftod4['isZiYu'] && qy7vwe && wx['onMessage'](function (wyehk1) {
        wyehk1['isLoad'] && (fot34_['ziyuFileData'][wyehk1['url']] = wyehk1['data']);
      });
    }, ftod4['onMkdirCallBack'] = function (f3t_4o, $jum) {
      if (!f3t_4o) fot34_['filesListObj'] = JSON['parse']($jum['data']);
    }, ftod4['pixelRatio'] = function () {
      if (!ftod4['EnvConfig']['pixelRatioInt']) try {
        var xbip5a = wx['getSystemInfoSync']();return ftod4['EnvConfig']['pixelRatioInt'] = xbip5a['pixelRatio'], xbip5a = xbip5a, xbip5a['pixelRatio'];
      } catch (ikxh) {}return ftod4['EnvConfig']['pixelRatioInt'];
    }, ftod4['createElement'] = function (ev7ywk) {
      if (ev7ywk == 'canvas') {
        var ls9gc8;return ftod4['idx'] == 0x1 ? ftod4['isZiYu'] ? (ls9gc8 = sharedCanvas, ls9gc8['style'] = {}) : ls9gc8 = window['canvas'] : ls9gc8 = window['wx']['createCanvas'](), ftod4['idx']++, ls9gc8;
      } else {
        if (ev7ywk == 'textarea' || ev7ywk == 'input') return ftod4['onCreateInput'](ev7ywk);else {
          if (ev7ywk == 'div') {
            var xabpi5 = ftod4['_preCreateElement'](ev7ywk);return xabpi5['contains'] = function (b_pt0) {
              return null;
            }, xabpi5['removeChild'] = function (eqcg) {}, xabpi5;
          } else return ftod4['_preCreateElement'](ev7ywk);
        }
      }
    }, ftod4['onCreateInput'] = function (wyv7eq) {
      var gqcv7 = ftod4['_preCreateElement'](wyv7eq);return gqcv7['focus'] = e7cvg['wxinputFocus'], gqcv7['blur'] = e7cvg['wxinputblur'], gqcv7['style'] = {}, gqcv7['value'] = 0x0, gqcv7['parentElement'] = {}, gqcv7['placeholder'] = {}, gqcv7['type'] = {}, gqcv7['setColor'] = function (eqvc7) {}, gqcv7['setType'] = function (kh1xaw) {}, gqcv7['setFontFace'] = function (y7qvwe) {}, gqcv7['addEventListener'] = function (xahki1) {}, gqcv7['contains'] = function (d3z) {
        return null;
      }, gqcv7['removeChild'] = function (zr2$j6) {}, gqcv7;
    }, ftod4['createShaderCondition'] = function (kvye7w) {
      var haxki = this,
          pxbi5 = function () {
        var qcev = kvye7w;return haxki[kvye7w['replace']('this.', '')];
      };return pxbi5;
    }, ftod4['EnvConfig'] = null, ftod4['window'] = null, ftod4['_preCreateElement'] = null, ftod4['_inited'] = ![], ftod4['wxRequest'] = null, ftod4['systemInfo'] = null, ftod4['version'] = '0.0.1', ftod4['isZiYu'] = ![], ftod4['isPosMsgYu'] = ![], ftod4['parseXMLFromString'] = function (r26odz) {
      var a1hw, xiabp;r26odz = r26odz['replace'](/>\s+</g, '><');try {
        a1hw = new window['Parser']['DOMParser']()['parseFromString'](r26odz, 'text/xml');
      } catch (bp50i_) {
        throw '需要引入xml解析库文件';
      }return a1hw;
    }, ftod4['idx'] = 0x1, ftod4;
  }(),
      xh1w = function () {
    function g8qsc() {}f0_bp(g8qsc, 'laya.wx.mini.MiniImage');var gc8qls = g8qsc['prototype'];return gc8qls['_loadImage'] = function (s7cgvq) {
      var b5pxi = this,
          dzj62 = ![];s7cgvq['indexOf']('layaNativeDir/') == -0x1 && (dzj62 = !![], s7cgvq = ev7qwy['formatURL'](s7cgvq));if (!fot34_['getFileInfo'](s7cgvq)) {
        if (s7cgvq['indexOf']('http://') != -0x1 || s7cgvq['indexOf']('https://') != -0x1) fot34_['downImg'](s7cgvq, new rz2od6(g8qsc, g8qsc['onDownImgCallBack'], [s7cgvq, b5pxi]), s7cgvq);else g8qsc['onCreateImage'](s7cgvq, b5pxi, !![]);
      } else g8qsc['onCreateImage'](s7cgvq, b5pxi, !dzj62);
    }, g8qsc['onDownImgCallBack'] = function (od2z63, t0pf, urj62$) {
      if (!urj62$) g8qsc['onCreateImage'](od2z63, t0pf);else t0pf['onError'](null);
    }, g8qsc['onCreateImage'] = function (ha5b, pxi, vce7q) {
      vce7q === void 0x0 && (vce7q = ![]);var evwyk1;if (!vce7q) {
        var k1xhi = fot34_['getFileInfo'](ha5b),
            w7eyvq = k1xhi['md5'];evwyk1 = fot34_['getFileNativePath'](w7eyvq);
      } else evwyk1 = ha5b;if (pxi['imgCache'] == null) pxi['imgCache'] = {};var sg8qc7;function zj6rd2() {
        sg8qc7['onload'] = null, sg8qc7['onerror'] = null, delete pxi['imgCache'][ha5b];
      };var rumj$6 = function () {
        zj6rd2(), pxi['onLoaded'](sg8qc7);
      },
          $rjz6 = function () {
        zj6rd2(), pxi['event']('error', 'Load image failed');
      };pxi['_type'] == 'nativeimage' ? (sg8qc7 = new qg8lsc['window']['Image'](), sg8qc7['crossOrigin'] = '', sg8qc7['onload'] = rumj$6, sg8qc7['onerror'] = $rjz6, sg8qc7['src'] = evwyk1, pxi['imgCache'][ha5b] = sg8qc7) : new r6odz['create'](evwyk1, { 'onload': rumj$6, 'onerror': $rjz6, 'onCreate': function (m6$ujr) {
          sg8qc7 = m6$ujr, pxi['imgCache'][ha5b] = m6$ujr;
        } });
    }, g8qsc;
  }(),
      e7cvg = function () {
    function ihx15() {}return f0_bp(ihx15, 'laya.wx.mini.MiniInput'), ihx15['_createInputElement'] = function () {
      qvgec['_initInput'](qvgec['area'] = qg8lsc['createElement']('textarea')), qvgec['_initInput'](qvgec['input'] = qg8lsc['createElement']('input')), qvgec['inputContainer'] = qg8lsc['createElement']('div'), qvgec['inputContainer']['style']['position'] = 'absolute', qvgec['inputContainer']['style']['zIndex'] = 0x186a0, qg8lsc['container']['appendChild'](qvgec['inputContainer']), qvgec['inputContainer']['setPos'] = function (hkix, fodt3) {
        qvgec['inputContainer']['style']['left'] = hkix + 'px', qvgec['inputContainer']['style']['top'] = fodt3 + 'px';
      }, l8cg9s['stage']['on']('resize', null, ihx15['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mr6uj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), o2rd6z['_soundClass'] = pb_f5, o2rd6z['_musicClass'] = pb_f5;
    }, ihx15['_onStageResize'] = function () {
      var _pf = l8cg9s['stage']['_canvasTransform']['identity']();_pf['scale'](qg8lsc['width'] / _fbt['canvas']['width'] / w1yek['getPixelRatio'](), qg8lsc['height'] / _fbt['canvas']['height'] / w1yek['getPixelRatio']());
    }, ihx15['wxinputFocus'] = function (qvw7ey) {
      var sc7g = qvgec['inputElement']['target'];if (sc7g && !sc7g['editable']) return;j$urm['window']['wx']['offKeyboardConfirm'](), j$urm['window']['wx']['offKeyboardInput'](), j$urm['window']['wx']['showKeyboard']({ 'defaultValue': sc7g['text'], 'maxLength': sc7g['maxChars'], 'multiple': sc7g['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (f0p_4) {}, 'fail': function (ju2$r6) {} }), j$urm['window']['wx']['onKeyboardConfirm'](function (yqeg) {
        var xhka1 = yqeg ? yqeg['value'] : '';sc7g['text'] = xhka1, sc7g['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), j$urm['window']['wx']['onKeyboardInput'](function (pftb0) {
        var od4z23 = pftb0 ? pftb0['value'] : '';if (!sc7g['multiline']) {
          if (od4z23['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sc7g['text'] = od4z23, sc7g['event']('input');
      });
    }, ihx15['inputEnter'] = function () {
      qvgec['inputElement']['target']['focus'] = ![];
    }, ihx15['wxinputblur'] = function () {
      ihx15['hideKeyboard']();
    }, ihx15['hideKeyboard'] = function () {
      j$urm['window']['wx']['offKeyboardConfirm'](), j$urm['window']['wx']['offKeyboardInput'](), j$urm['window']['wx']['hideKeyboard']({ 'success': function (iap) {
          console['log']('隐藏键盘');
        }, 'fail': function (cl9g8s) {
          console['log']('隐藏键盘出错:' + (cl9g8s ? cl9g8s['errMsg'] : ''));
        } });
    }, ihx15;
  }(),
      f_0tp4 = function () {
    function sg8cl() {}f0_bp(sg8cl, 'laya.wx.mini.MiniLoader');var hi5ba = sg8cl['prototype'];return hi5ba['load'] = function (qvgy7, c7gq8s, zo43t, ewky1v, _btf) {
      zo43t === void 0x0 && (zo43t = !![]), _btf === void 0x0 && (_btf = ![]);var _ftp0b = this;_ftp0b['_url'] = qvgy7;if (qvgy7['indexOf']('data:image') === 0x0) _ftp0b['_type'] = c7gq8s = 'image';else _ftp0b['_type'] = c7gq8s || (c7gq8s = _ftp0b['getTypeFromUrl'](qvgy7));_ftp0b['_cache'] = zo43t, _ftp0b['_data'] = null;var o_43t = 'ascii';if (qvgy7['indexOf']('.fnt') != -0x1) o_43t = 'utf8';else c7gq8s == 'arraybuffer' && (o_43t = '');;var d3o6z = xah15i['getFileExtension'](qvgy7);if (sg8cl['_fileTypeArr']['indexOf'](d3o6z) != -0x1) j$urm['EnvConfig']['load']['call'](this, qvgy7, c7gq8s, zo43t, ewky1v, _btf);else {
        if (!fot34_['getFileInfo'](qvgy7)) {
          if (qvgy7['indexOf']('layaNativeDir/') != -0x1) {
            if (j$urm['isZiYu']) {
              var l9gc8s = fot34_['ziyuFileData'][qvgy7];_ftp0b['onLoaded'](l9gc8s);return;
            } else {
              cosnole['log']('read read'), fot34_['read'](qvgy7, o_43t, new rz2od6(sg8cl, sg8cl['onReadNativeCallBack'], [o_43t, qvgy7, c7gq8s, zo43t, ewky1v, _btf, _ftp0b]));return;
            }
          }if (ev7qwy['rootPath'] == '') var x5ahi1 = qvgy7;else x5ahi1 = qvgy7['split'](ev7qwy['rootPath'])[0x0];qvgy7['indexOf']('http://') != -0x1 || qvgy7['indexOf']('https://') != -0x1 ? j$urm['EnvConfig']['load']['call'](_ftp0b, qvgy7, c7gq8s, zo43t, ewky1v, _btf) : fot34_['readFile'](x5ahi1, o_43t, new rz2od6(sg8cl, sg8cl['onReadNativeCallBack'], [o_43t, qvgy7, c7gq8s, zo43t, ewky1v, _btf, _ftp0b]), qvgy7);
        } else j$urm['EnvConfig']['load']['call'](this, qvgy7, c7gq8s, zo43t, ewky1v, _btf);
      }
    }, hi5ba['resMgrLoad'] = function (r6d2jz, p05ba, a0i5pb, ih15, ki1axh, $2r6j, rj$u6m) {
      a0i5pb === void 0x0 && (a0i5pb = 0x0), ih15 === void 0x0 && (ih15 = ![]), ki1axh === void 0x0 && (ki1axh = ![]), $2r6j === void 0x0 && ($2r6j = 0x0), rj$u6m === void 0x0 && (rj$u6m = 0x3), r6d2jz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', r6d2jz), j$urm['EnvConfig']['resMgrLoad'](r6d2jz, (aibh, vyqg, f_0pb) => {
        sg8cl['prototype']['resMgrLoadCallBack'](aibh, vyqg, f_0pb, p05ba);
      }, a0i5pb, ih15, ki1axh, $2r6j, rj$u6m);
    }, hi5ba['resMgrLoadCallBack'] = function (cev7qg, f3ot, t0f4_, e7gv) {
      console['log']('buff:::', cev7qg, t0f4_, fot34_['fileNativeDir'] + '///' + fot34_['fileListName']), e7gv(cev7qg, f3ot, t0f4_);
    }, hi5ba['clearRes'] = function (wq7vy, _0ptbf) {
      _0ptbf === void 0x0 && (_0ptbf = ![]);var xyhk1w = this;xyhk1w['clearRes'](wq7vy, _0ptbf);var odzt34 = fot34_['getFileInfo'](wq7vy);if (odzt34 && (wq7vy['indexOf']('http://') != -0x1 || wq7vy['indexOf']('https://') != -0x1)) {
        var wehk1 = odzt34['md5'],
            g8c = fot34_['getFileNativePath'](wehk1);fot34_['remove'](g8c);
      }
    }, sg8cl['onReadNativeCallBack'] = function (do4f3, ot3_f, f_0bt, b_5p0i, zdt4o, bh5ix, p5b_i0, rju$6, gqye) {
      b_5p0i === void 0x0 && (b_5p0i = !![]), bh5ix === void 0x0 && (bh5ix = ![]), rju$6 === void 0x0 && (rju$6 = 0x0);if (!rju$6) {
        var bxiah;if (f_0bt == 'json' || f_0bt == 'atlas') bxiah = j$urm['getJson'](gqye['data']);else f_0bt == 'xml' ? bxiah = xah15i['parseXMLFromString'](gqye['data']) : bxiah = gqye['data'];p5b_i0['onLoaded'](bxiah), !j$urm['isZiYu'] && j$urm['isPosMsgYu'] && f_0bt != 'arraybuffer' && wx['postMessage']({ 'url': ot3_f, 'data': bxiah, 'isLoad': !![] });
      } else rju$6 == 0x1 && j$urm['EnvConfig']['load']['call'](p5b_i0, ot3_f, f_0bt, b_5p0i, zdt4o, bh5ix);
    }, vqg7ey(sg8cl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), sg8cl;
  }(),
      fot34_ = function (ha15) {
    function eky1hw() {
      eky1hw['__super']['call'](this);;
    }return f0_bp(eky1hw, 'laya.wx.mini.MiniFileMgr', ha15), eky1hw['isLoadFile'] = function (d4ot3) {
      return eky1hw['_fileTypeArr']['indexOf'](d4ot3) != -0x1 ? !![] : ![];
    }, eky1hw['getFileInfo'] = function (b_50ip) {
      var bptf0 = b_50ip['split']('?')[0x0],
          gsc9l = eky1hw['filesListObj'][bptf0];if (gsc9l == null) return null;else return gsc9l;return null;
    }, eky1hw['onFileUpdate'] = function (ih1x, l8sgq) {
      var yev7 = ih1x['split']('/'),
          gs7vqc = yev7[yev7['length'] - 0x1],
          u$26rj = eky1hw['getFileInfo'](l8sgq);if (u$26rj == null) eky1hw['onSaveFile'](l8sgq, gs7vqc);else {
        if (u$26rj['readyUrl'] != l8sgq) eky1hw['remove'](gs7vqc, l8sgq);
      }
    }, eky1hw['exits'] = function (kihx1, qs7cg) {
      var zj6$r2 = eky1hw['getFileNativePath'](kihx1);eky1hw['fs']['getFileInfo']({ 'filePath': zj6$r2, 'success': function (rjz2$6) {
          qs7cg != null && qs7cg['runWith']([0x0, rjz2$6]);
        }, 'fail': function (sgvq7) {
          qs7cg != null && qs7cg['runWith']([0x1, sgvq7]);
        } });
    }, eky1hw['read'] = function (tofd4, vewy1, u$rj, paxi) {
      vewy1 === void 0x0 && (vewy1 = 'ascill'), paxi === void 0x0 && (paxi = '');var o326zd;paxi != '' ? o326zd = eky1hw['getFileNativePath'](tofd4) : o326zd = tofd4, eky1hw['fs']['readFile']({ 'filePath': o326zd, 'encoding': vewy1, 'success': function (_4t) {
          u$rj != null && u$rj['runWith']([0x0, _4t]);
        }, 'fail': function (pia) {
          if (pia && paxi != '') eky1hw['down'](paxi, vewy1, u$rj, paxi);else u$rj != null && u$rj['runWith']([0x1]);
        } });
    }, eky1hw['readNativeFile'] = function (p0i5ba, ip_5) {
      eky1hw['fs']['readFile']({ 'filePath': p0i5ba, 'encoding': '', 'success': function (yve7qg) {
          ip_5 != null && ip_5['runWith']([0x0]);
        }, 'fail': function (s9clg) {
          ip_5 != null && ip_5['runWith']([0x1]);
        } });
    }, eky1hw['down'] = function (do34tf, abxi5p, yqwev7, x15hi) {
      abxi5p === void 0x0 && (abxi5p = 'ascill'), x15hi === void 0x0 && (x15hi = '');var iaxp5 = eky1hw['getFileNativePath'](x15hi),
          pib5 = eky1hw['wxdown']({ 'url': do34tf, 'filePath': iaxp5, 'success': function (wey) {
          if (wey['statusCode'] === 0xc8) eky1hw['readFile'](wey['filePath'], abxi5p, yqwev7, x15hi);
        }, 'fail': function (kxawh) {
          yqwev7 != null && yqwev7['runWith']([0x1, kxawh]);
        } });pib5['onProgressUpdate'](function (td3oz4) {
        yqwev7 != null && yqwev7['runWith']([0x2, td3oz4['progress']]);
      });
    }, eky1hw['readFile'] = function (evwy7, pi_b05, ha51, p0ft_4) {
      pi_b05 === void 0x0 && (pi_b05 = 'ascill'), p0ft_4 === void 0x0 && (p0ft_4 = ''), eky1hw['fs']['readFile']({ 'filePath': evwy7, 'encoding': pi_b05, 'success': function (do3z24) {
          if (evwy7['indexOf']('http://') != -0x1 || evwy7['indexOf']('https://') != -0x1) eky1hw['onFileUpdate'](evwy7, p0ft_4);ha51 != null && ha51['runWith']([0x0, do3z24]);
        }, 'fail': function (z26o3d) {
          if (z26o3d) ha51 != null && ha51['runWith']([0x1, z26o3d]);
        } });
    }, eky1hw['downImg'] = function (qevgy, ipb50a, ywq7) {
      ywq7 === void 0x0 && (ywq7 = '');var zr26o = eky1hw['wxdown']({ 'url': qevgy, 'success': function (t_f4p0) {
          t_f4p0['statusCode'] === 0xc8 && eky1hw['copyFile'](t_f4p0['tempFilePath'], ywq7, ipb50a);
        }, 'fail': function (ywk7) {
          ipb50a != null && ipb50a['runWith']([0x1, ywk7]);
        } });
    }, eky1hw['copyFile'] = function (pi_b, fb0_p, yxh1wk) {
      var c98g = pi_b['split']('/'),
          _3f4to = c98g[c98g['length'] - 0x1],
          i5a1x = fb0_p['split']('?')[0x0],
          ywkv = eky1hw['getFileInfo'](fb0_p),
          q8gslc = eky1hw['getFileNativePath'](_3f4to);eky1hw['fs']['copyFile']({ 'srcPath': pi_b, 'destPath': q8gslc, 'success': function (kwehy) {
          if (!ywkv) eky1hw['onSaveFile'](fb0_p, _3f4to), yxh1wk != null && yxh1wk['runWith']([0x0]);else {
            if (ywkv['readyUrl'] != fb0_p) eky1hw['remove'](_3f4to, fb0_p, yxh1wk);
          }
        }, 'fail': function (xywh1) {
          yxh1wk != null && yxh1wk['runWith']([0x1, xywh1]);
        } });
    }, eky1hw['getFileNativePath'] = function (qscg7) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + qscg7;
    }, eky1hw['remove'] = function (d2rzo, f30_4t, b_i0p) {
      f30_4t === void 0x0 && (f30_4t = '');var vyg7q = eky1hw['getFileInfo'](f30_4t),
          dot4z = eky1hw['getFileNativePath'](vyg7q['md5']);l8cg9s['loader']['clearRes'](vyg7q['readyUrl']), eky1hw['fs']['unlink']({ 'filePath': dot4z, 'success': function (qls8) {
          if (f30_4t != '') eky1hw['onSaveFile'](f30_4t, d2rzo);b_i0p != null && b_i0p['runWith']([0x0]);
        }, 'fail': function (ihxa1k) {} });
    }, eky1hw['onSaveFile'] = function (dzo632, f30) {
      var rzj2d6 = dzo632['split']('?')[0x0];eky1hw['filesListObj'][rzj2d6] = { 'md5': f30, 'readyUrl': dzo632 }, eky1hw['fs']['writeFile']({ 'filePath': eky1hw['fileNativeDir'] + '/' + eky1hw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](eky1hw['filesListObj']), 'success': function (qgcv) {
          console['log']('写入测试测试成功：', qgcv);
        }, 'fail': function (o4t_3f) {
          console['log']('写入测试测试失败：', o4t_3f);
        } });
    }, eky1hw['existDir'] = function (weyqv, lqgc8s) {
      eky1hw['fs']['mkdir']({ 'dirPath': weyqv, 'success': function (k7yv) {
          lqgc8s != null && lqgc8s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (yhkw) {
          if (yhkw['errMsg']['indexOf']('file already exists') != -0x1) eky1hw['readSync'](eky1hw['fileListName'], 'utf8', lqgc8s);else lqgc8s != null && lqgc8s['runWith']([0x1, yhkw]);
        } });
    }, eky1hw['readSync'] = function (a1hi, zo423d, p0i5b, sgq8) {
      zo423d === void 0x0 && (zo423d = 'ascill'), sgq8 === void 0x0 && (sgq8 = '');var _4t0pf = eky1hw['getFileNativePath'](a1hi),
          rjz2;try {
        rjz2 = eky1hw['fs']['readFileSync'](_4t0pf), p0i5b != null && p0i5b['runWith']([0x0, { 'data': rjz2 }]);
      } catch (fdt4) {
        p0i5b != null && p0i5b['runWith']([0x1]);
      }
    }, eky1hw['readCache'] = function () {}, eky1hw['writeCache'] = function (hxab5) {
      var zdo362 = readyUrl['split']('?')[0x0];eky1hw['filesListObj'][zdo362] = { 'md5': md5Name, 'readyUrl': readyUrl }, eky1hw['fs']['writeFile']({ 'filePath': eky1hw['fileNativeDir'] + '/' + eky1hw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](eky1hw['filesListObj']), 'success': function (td3oz) {}, 'fail': function (he) {} });
    }, eky1hw['setNativeFileDir'] = function (kx1hia) {
      eky1hw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + kx1hia;
    }, eky1hw['filesListObj'] = {}, eky1hw['fileNativeDir'] = null, eky1hw['fileListName'] = 'layaairfiles.txt', eky1hw['ziyuFileData'] = {}, vqg7ey(eky1hw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), eky1hw;
  }(k7eyv),
      pb_f5 = function (vk1wey) {
    function y1wev() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], y1wev['__super']['call'](this), this['_sound'] = y1wev['_createSound']();
    }f0_bp(y1wev, 'laya.wx.mini.MiniSound', vk1wey);var dj62 = y1wev['prototype'];return dj62['load'] = function (gqlcs8) {
      var jur = this;gqlcs8 = ev7qwy['formatURL'](gqlcs8), this['url'] = gqlcs8;if (y1wev['_audioCache'][gqlcs8]) {
        this['event']('complete');return;
      }function sc9g() {
        if (y1wev['_null'] != undefined) jur['_sound']['onCanplay'](y1wev['_null']), jur['_sound']['onError'](y1wev['_null']);else try {
          jur['_sound']['onCanplay'](null), jur['_sound']['onError'](null), y1wev['_null'] = null;
        } catch (kvy1e) {
          console['warn']('[wxmini] _clearSound:' + kvy1e), jur['_sound']['onCanplay'](hai), jur['_sound']['onError'](hai), y1wev['_null'] = hai;
        }
      }function ehy1kw() {
        sc9g(), k1hxaw['loaded'] = !![], k1hxaw['event']('complete'), y1wev['_audioCache'][k1hxaw['url']] = k1hxaw;
      }function _4tfo3(vgeqy7) {
        console['error']('errCode=' + vgeqy7['errCode'] + '  errMsg=' + vgeqy7['errMsg']), sc9g(), k1hxaw['event']('error');
      }function hai() {}this['_sound']['onCanplay'](ehy1kw), this['_sound']['onError'](_4tfo3), this['_sound']['src'] = gqlcs8;var k1hxaw = this;
    }, dj62['play'] = function (i1kaxh, xiba5h) {
      i1kaxh === void 0x0 && (i1kaxh = 0x0), xiba5h === void 0x0 && (xiba5h = 0x0);var yx1hw;if (this['url'] == o2rd6z['_tMusic']) {
        if (!y1wev['_musicAudio']) y1wev['_musicAudio'] = y1wev['_createSound']();yx1hw = y1wev['_musicAudio'];
      } else yx1hw = y1wev['_createSound']();yx1hw['src'] = this['url'];var gsl89 = new dt34zo(yx1hw);return gsl89['url'] = this['url'], gsl89['loops'] = xiba5h, gsl89['startTime'] = i1kaxh, gsl89['play'](), o2rd6z['addChannel'](gsl89), gsl89;
    }, dj62['dispose'] = function () {
      var $u2j6r = y1wev['_audioCache'][this['url']];$u2j6r && ($u2j6r['src'] = '', delete y1wev['_audioCache'][this['url']]);
    }, hib(0x0, dj62, 'duration', function () {
      return this['_sound']['duration'];
    }), y1wev['_createSound'] = function () {
      return y1wev['_id']++, j$urm['window']['wx']['createInnerAudioContext']();
    }, y1wev['_musicAudio'] = null, y1wev['_id'] = 0x0, y1wev['_audioCache'] = {}, y1wev['_null'] = undefined, y1wev;
  }(k7eyv),
      dt34zo = function (ew7ky) {
    function ju26(ewhy1) {
      this['_audio'] = null, this['_onEnd'] = null, ju26['__super']['call'](this), this['_audio'] = ewhy1, this['_onEnd'] = xah15i['bind'](this['__onEnd'], this), ewhy1['onEnded'](this['_onEnd']);
    }f0_bp(ju26, 'laya.wx.mini.MiniSoundChannel', ew7ky);var h1kewy = ju26['prototype'];return h1kewy['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (l8cg9s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, h1kewy['__onNull'] = function () {}, h1kewy['play'] = function () {
      this['isStopped'] = ![], o2rd6z['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, h1kewy['stop'] = function () {
      this['isStopped'] = !![], o2rd6z['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ju26['_null'] != undefined) this['_audio']['onEnded'](ju26['_null']);else try {
        this['_audio']['onEnded'](null), ju26['_null'] = null;
      } catch (ky7) {
        console['warn']('[wxmini] stop:' + ky7), this['_audio']['onEnded'](xah15i['bind'](this['__onNull'], this)), ju26['_null'] = xah15i['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, h1kewy['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, h1kewy['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], o2rd6z['addChannel'](this), this['_audio']['play']();
    }, hib(0x0, h1kewy, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hib(0x0, h1kewy, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hib(0x0, h1kewy, 'volume', function () {
      return 0x1;
    }, function (sg7cvq) {}), ju26['_null'] = undefined, ju26;
  }(vqye7g);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var pab5ix in Laya) {
    var awkx1h = Laya[pab5ix];awkx1h && awkx1h['__isclass'] && (exports[pab5ix] = awkx1h);
  }
});