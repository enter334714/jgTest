var m = wx.$g;
(function (window, document, o2dz36) {
  var q8cs = o2dz36['un'],
      _fb0t = o2dz36['uns'],
      f04_pt = o2dz36['static'],
      _30tf4 = o2dz36['class'],
      vqeg7y = o2dz36['getset'],
      csg8l = o2dz36['__newvec'],
      x5abih = laya['utils']['Browser'],
      akwh1 = laya['events']['Event'],
      m6$ = laya['events']['EventDispatcher'],
      cs8ql = laya['resource']['HTMLImage'],
      d362oz = laya['utils']['Handler'],
      p05aib = laya['display']['Input'],
      r$j26u = laya['net']['Loader'],
      w1ahkx = laya['maths']['Matrix'],
      yxwh1 = laya['renders']['Render'],
      xaik1 = laya['utils']['RunDriver'],
      bi5axp = laya['media']['Sound'],
      yhk = laya['media']['SoundChannel'],
      vweqy = laya['media']['SoundManager'],
      xi1h = laya['display']['Stage'],
      b05ia = laya['net']['URL'],
      hbax5 = laya['utils']['Utils'],
      ibp50_ = function () {
    function g9lc() {}return _30tf4(g9lc, 'laya.wx.mini.MiniAdpter'), g9lc['getJson'] = function (ft_p0b) {
      return JSON['parse'](ft_p0b);
    }, g9lc['init'] = function (bpf5_, bixpa) {
      bpf5_ === void 0x0 && (bpf5_ = ![]), bixpa === void 0x0 && (bixpa = ![]);if (g9lc['_inited']) return;g9lc['window'] = window;if (g9lc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;g9lc['_inited'] = !![], g9lc['isZiYu'] = bixpa, g9lc['isPosMsgYu'] = bpf5_, g9lc['EnvConfig'] = {}, !g9lc['isZiYu'] && (c7vsgq['setNativeFileDir']('/layaairGame'), c7vsgq['existDir'](c7vsgq['fileNativeDir'], d362oz['create'](g9lc, g9lc['onMkdirCallBack']))), g9lc['window']['focus'] = function () {}, o2dz36['getUrlPath'] = function () {}, g9lc['window']['logtime'] = function (yhewk) {}, g9lc['window']['alertTimeLog'] = function (pftb_0) {}, g9lc['window']['resetShareInfo'] = function () {}, g9lc['window']['CanvasRenderingContext2D'] = function () {}, g9lc['window']['CanvasRenderingContext2D']['prototype'] = g9lc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g9lc['window']['document']['body']['appendChild'] = function () {}, g9lc['EnvConfig']['pixelRatioInt'] = 0x0, xaik1['getPixelRatio'] = g9lc['pixelRatio'], g9lc['_preCreateElement'] = x5abih['createElement'], x5abih['createElement'] = g9lc['createElement'], xaik1['createShaderCondition'] = g9lc['createShaderCondition'], hbax5['parseXMLFromString'] = g9lc['parseXMLFromString'], p05aib['_createInputElement'] = p_f04t['_createInputElement'], g9lc['EnvConfig']['load'] = r$j26u['prototype']['load'], r$j26u['prototype']['load'] = ekh1w['prototype']['load'], g9lc['isZiYu'] && bpf5_ && wx['onMessage'](function (d2oz6r) {
        d2oz6r['isLoad'] && (c7vsgq['ziyuFileData'][d2oz6r['url']] = d2oz6r['data']);
      });
    }, g9lc['onMkdirCallBack'] = function (cls98, tz4o3d) {
      if (!cls98) c7vsgq['filesListObj'] = JSON['parse'](tz4o3d['data']);
    }, g9lc['pixelRatio'] = function () {
      if (!g9lc['EnvConfig']['pixelRatioInt']) try {
        var bi5ap0 = wx['getSystemInfoSync']();return g9lc['EnvConfig']['pixelRatioInt'] = bi5ap0['pixelRatio'], bi5ap0 = bi5ap0, bi5ap0['pixelRatio'];
      } catch (k1whxa) {}return g9lc['EnvConfig']['pixelRatioInt'];
    }, g9lc['createElement'] = function (hweyk1) {
      if (hweyk1 == 'canvas') {
        var tfbp_;return g9lc['idx'] == 0x1 ? g9lc['isZiYu'] ? (tfbp_ = sharedCanvas, tfbp_['style'] = {}) : tfbp_ = window['canvas'] : tfbp_ = window['wx']['createCanvas'](), g9lc['idx']++, tfbp_;
      } else {
        if (hweyk1 == 'textarea' || hweyk1 == 'input') return g9lc['onCreateInput'](hweyk1);else {
          if (hweyk1 == 'div') {
            var ywev1 = g9lc['_preCreateElement'](hweyk1);return ywev1['contains'] = function (yw1ekv) {
              return null;
            }, ywev1['removeChild'] = function (i_5b0p) {}, ywev1;
          } else return g9lc['_preCreateElement'](hweyk1);
        }
      }
    }, g9lc['onCreateInput'] = function (hw1kax) {
      var hib5x = g9lc['_preCreateElement'](hw1kax);return hib5x['focus'] = p_f04t['wxinputFocus'], hib5x['blur'] = p_f04t['wxinputblur'], hib5x['style'] = {}, hib5x['value'] = 0x0, hib5x['parentElement'] = {}, hib5x['placeholder'] = {}, hib5x['type'] = {}, hib5x['setColor'] = function ($ju) {}, hib5x['setType'] = function (r6od2z) {}, hib5x['setFontFace'] = function (vy7wqe) {}, hib5x['addEventListener'] = function ($r62ju) {}, hib5x['contains'] = function (um$r) {
        return null;
      }, hib5x['removeChild'] = function (g7qvs) {}, hib5x;
    }, g9lc['createShaderCondition'] = function (mju6$) {
      var qlsgc = this,
          d243z = function () {
        var zr2o = mju6$;return qlsgc[mju6$['replace']('this.', '')];
      };return d243z;
    }, g9lc['EnvConfig'] = null, g9lc['window'] = null, g9lc['_preCreateElement'] = null, g9lc['_inited'] = ![], g9lc['wxRequest'] = null, g9lc['systemInfo'] = null, g9lc['version'] = '0.0.1', g9lc['isZiYu'] = ![], g9lc['isPosMsgYu'] = ![], g9lc['parseXMLFromString'] = function (px5ia) {
      var p0bia, e7vgqy;px5ia = px5ia['replace'](/>\s+</g, '><');try {
        p0bia = new window['Parser']['DOMParser']()['parseFromString'](px5ia, 'text/xml');
      } catch (zdr) {
        throw '需要引入xml解析库文件';
      }return p0bia;
    }, g9lc['idx'] = 0x1, g9lc;
  }(),
      lg8qc = function () {
    function axk1hi() {}_30tf4(axk1hi, 'laya.wx.mini.MiniImage');var g8qc7 = axk1hi['prototype'];return g8qc7['_loadImage'] = function (tzo43) {
      var qsg78 = this,
          glcs9 = ![];tzo43['indexOf']('layaNativeDir/') == -0x1 && (glcs9 = !![], tzo43 = b05ia['formatURL'](tzo43));if (!c7vsgq['getFileInfo'](tzo43)) {
        if (tzo43['indexOf']('http://') != -0x1 || tzo43['indexOf']('https://') != -0x1) c7vsgq['downImg'](tzo43, new d362oz(axk1hi, axk1hi['onDownImgCallBack'], [tzo43, qsg78]), tzo43);else axk1hi['onCreateImage'](tzo43, qsg78, !![]);
      } else axk1hi['onCreateImage'](tzo43, qsg78, !glcs9);
    }, axk1hi['onDownImgCallBack'] = function (wy1k, _03f4t, kve7) {
      if (!kve7) axk1hi['onCreateImage'](wy1k, _03f4t);else _03f4t['onError'](null);
    }, axk1hi['onCreateImage'] = function (ke1yv, r26u$, a05ib) {
      a05ib === void 0x0 && (a05ib = ![]);var ix5a1h;if (!a05ib) {
        var eq7vyg = c7vsgq['getFileInfo'](ke1yv),
            u2$6j = eq7vyg['md5'];ix5a1h = c7vsgq['getFileNativePath'](u2$6j);
      } else ix5a1h = ke1yv;if (r26u$['imgCache'] == null) r26u$['imgCache'] = {};var fbtp_;function ywv7eq() {
        fbtp_['onload'] = null, fbtp_['onerror'] = null, delete r26u$['imgCache'][ke1yv];
      };var l8gsq = function () {
        ywv7eq(), r26u$['onLoaded'](fbtp_);
      },
          h5ba = function () {
        ywv7eq(), r26u$['event']('error', 'Load image failed');
      };r26u$['_type'] == 'nativeimage' ? (fbtp_ = new x5abih['window']['Image'](), fbtp_['crossOrigin'] = '', fbtp_['onload'] = l8gsq, fbtp_['onerror'] = h5ba, fbtp_['src'] = ix5a1h, r26u$['imgCache'][ke1yv] = fbtp_) : new cs8ql['create'](ix5a1h, { 'onload': l8gsq, 'onerror': h5ba, 'onCreate': function (xb5iha) {
          fbtp_ = xb5iha, r26u$['imgCache'][ke1yv] = xb5iha;
        } });
    }, axk1hi;
  }(),
      p_f04t = function () {
    function xa15i() {}return _30tf4(xa15i, 'laya.wx.mini.MiniInput'), xa15i['_createInputElement'] = function () {
      p05aib['_initInput'](p05aib['area'] = x5abih['createElement']('textarea')), p05aib['_initInput'](p05aib['input'] = x5abih['createElement']('input')), p05aib['inputContainer'] = x5abih['createElement']('div'), p05aib['inputContainer']['style']['position'] = 'absolute', p05aib['inputContainer']['style']['zIndex'] = 0x186a0, x5abih['container']['appendChild'](p05aib['inputContainer']), p05aib['inputContainer']['setPos'] = function (d2rz6, ozr62) {
        p05aib['inputContainer']['style']['left'] = d2rz6 + 'px', p05aib['inputContainer']['style']['top'] = ozr62 + 'px';
      }, o2dz36['stage']['on']('resize', null, xa15i['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fb0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vweqy['_soundClass'] = dorz, vweqy['_musicClass'] = dorz;
    }, xa15i['_onStageResize'] = function () {
      var tdz3o = o2dz36['stage']['_canvasTransform']['identity']();tdz3o['scale'](x5abih['width'] / yxwh1['canvas']['width'] / xaik1['getPixelRatio'](), x5abih['height'] / yxwh1['canvas']['height'] / xaik1['getPixelRatio']());
    }, xa15i['wxinputFocus'] = function (zdo6r) {
      var d24o3 = p05aib['inputElement']['target'];if (d24o3 && !d24o3['editable']) return;ibp50_['window']['wx']['offKeyboardConfirm'](), ibp50_['window']['wx']['offKeyboardInput'](), ibp50_['window']['wx']['showKeyboard']({ 'defaultValue': d24o3['text'], 'maxLength': d24o3['maxChars'], 'multiple': d24o3['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zd26o3) {}, 'fail': function (t34zod) {} }), ibp50_['window']['wx']['onKeyboardConfirm'](function (rj6$) {
        var vce7q = rj6$ ? rj6$['value'] : '';d24o3['text'] = vce7q, d24o3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ibp50_['window']['wx']['onKeyboardInput'](function (bf_p0) {
        var gsclq8 = bf_p0 ? bf_p0['value'] : '';if (!d24o3['multiline']) {
          if (gsclq8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }d24o3['text'] = gsclq8, d24o3['event']('input');
      });
    }, xa15i['inputEnter'] = function () {
      p05aib['inputElement']['target']['focus'] = ![];
    }, xa15i['wxinputblur'] = function () {
      xa15i['hideKeyboard']();
    }, xa15i['hideKeyboard'] = function () {
      ibp50_['window']['wx']['offKeyboardConfirm'](), ibp50_['window']['wx']['offKeyboardInput'](), ibp50_['window']['wx']['hideKeyboard']({ 'success': function (pt04_f) {
          console['log']('隐藏键盘');
        }, 'fail': function (hxw1ky) {
          console['log']('隐藏键盘出错:' + (hxw1ky ? hxw1ky['errMsg'] : ''));
        } });
    }, xa15i;
  }(),
      ekh1w = function () {
    function kwyve7() {}_30tf4(kwyve7, 'laya.wx.mini.MiniLoader');var wkha1 = kwyve7['prototype'];return wkha1['load'] = function (xh15i, hxa15, ab5p, tf04_p, ihx5b) {
      ab5p === void 0x0 && (ab5p = !![]), ihx5b === void 0x0 && (ihx5b = ![]);var vwq7ye = this;vwq7ye['_url'] = xh15i;if (xh15i['indexOf']('data:image') === 0x0) vwq7ye['_type'] = hxa15 = 'image';else vwq7ye['_type'] = hxa15 || (hxa15 = vwq7ye['getTypeFromUrl'](xh15i));vwq7ye['_cache'] = ab5p, vwq7ye['_data'] = null;var x1wa = 'ascii';if (xh15i['indexOf']('.fnt') != -0x1) x1wa = 'utf8';else hxa15 == 'arraybuffer' && (x1wa = '');;var ahix5b = hbax5['getFileExtension'](xh15i);if (kwyve7['_fileTypeArr']['indexOf'](ahix5b) != -0x1) ibp50_['EnvConfig']['load']['call'](this, xh15i, hxa15, ab5p, tf04_p, ihx5b);else {
        if (!c7vsgq['getFileInfo'](xh15i)) {
          if (xh15i['indexOf']('layaNativeDir/') != -0x1) {
            if (ibp50_['isZiYu']) {
              var ehkw1y = c7vsgq['ziyuFileData'][xh15i];vwq7ye['onLoaded'](ehkw1y);return;
            } else {
              cosnole['log']('read read'), c7vsgq['read'](xh15i, x1wa, new d362oz(kwyve7, kwyve7['onReadNativeCallBack'], [x1wa, xh15i, hxa15, ab5p, tf04_p, ihx5b, vwq7ye]));return;
            }
          }if (b05ia['rootPath'] == '') var awhx = xh15i;else awhx = xh15i['split'](b05ia['rootPath'])[0x0];xh15i['indexOf']('http://') != -0x1 || xh15i['indexOf']('https://') != -0x1 ? ibp50_['EnvConfig']['load']['call'](vwq7ye, xh15i, hxa15, ab5p, tf04_p, ihx5b) : c7vsgq['readFile'](awhx, x1wa, new d362oz(kwyve7, kwyve7['onReadNativeCallBack'], [x1wa, xh15i, hxa15, ab5p, tf04_p, ihx5b, vwq7ye]), xh15i);
        } else ibp50_['EnvConfig']['load']['call'](this, xh15i, hxa15, ab5p, tf04_p, ihx5b);
      }
    }, wkha1['resMgrLoad'] = function (w1ykv, e7yvk, q8cgs, c89gsl, w1kyxh, o42z, _4tf0p) {
      q8cgs === void 0x0 && (q8cgs = 0x0), c89gsl === void 0x0 && (c89gsl = ![]), w1kyxh === void 0x0 && (w1kyxh = ![]), o42z === void 0x0 && (o42z = 0x0), _4tf0p === void 0x0 && (_4tf0p = 0x3), w1ykv['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w1ykv), ibp50_['EnvConfig']['resMgrLoad'](w1ykv, (qy7, hwky, t03f_) => {
        kwyve7['prototype']['resMgrLoadCallBack'](qy7, hwky, t03f_, e7yvk);
      }, q8cgs, c89gsl, w1kyxh, o42z, _4tf0p);
    }, wkha1['resMgrLoadCallBack'] = function (b_ft0p, eqv, wk1hye, hw1eyk) {
      console['log']('buff:::', b_ft0p, wk1hye, c7vsgq['fileNativeDir'] + '///' + c7vsgq['fileListName']), hw1eyk(b_ft0p, eqv, wk1hye);
    }, wkha1['clearRes'] = function (w1hx, ve7qw) {
      ve7qw === void 0x0 && (ve7qw = ![]);var _f4p0t = this;_f4p0t['clearRes'](w1hx, ve7qw);var pxbia = c7vsgq['getFileInfo'](w1hx);if (pxbia && (w1hx['indexOf']('http://') != -0x1 || w1hx['indexOf']('https://') != -0x1)) {
        var yekvw1 = pxbia['md5'],
            mr$uj6 = c7vsgq['getFileNativePath'](yekvw1);c7vsgq['remove'](mr$uj6);
      }
    }, kwyve7['onReadNativeCallBack'] = function (od423, f_o4t, r6jum$, pfb_50, xakhw, i0a5pb, zr$j26, _pbf, _0tp) {
      pfb_50 === void 0x0 && (pfb_50 = !![]), i0a5pb === void 0x0 && (i0a5pb = ![]), _pbf === void 0x0 && (_pbf = 0x0);if (!_pbf) {
        var rjzd6;if (r6jum$ == 'json' || r6jum$ == 'atlas') rjzd6 = ibp50_['getJson'](_0tp['data']);else r6jum$ == 'xml' ? rjzd6 = hbax5['parseXMLFromString'](_0tp['data']) : rjzd6 = _0tp['data'];zr$j26['onLoaded'](rjzd6), !ibp50_['isZiYu'] && ibp50_['isPosMsgYu'] && r6jum$ != 'arraybuffer' && wx['postMessage']({ 'url': f_o4t, 'data': rjzd6, 'isLoad': !![] });
      } else _pbf == 0x1 && ibp50_['EnvConfig']['load']['call'](zr$j26, f_o4t, r6jum$, pfb_50, xakhw, i0a5pb);
    }, f04_pt(kwyve7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kwyve7;
  }(),
      c7vsgq = function (vcqg7e) {
    function ye7vw() {
      ye7vw['__super']['call'](this);;
    }return _30tf4(ye7vw, 'laya.wx.mini.MiniFileMgr', vcqg7e), ye7vw['isLoadFile'] = function (q7gs) {
      return ye7vw['_fileTypeArr']['indexOf'](q7gs) != -0x1 ? !![] : ![];
    }, ye7vw['getFileInfo'] = function (b5p0ai) {
      var r62zd = b5p0ai['split']('?')[0x0],
          ih5xb = ye7vw['filesListObj'][r62zd];if (ih5xb == null) return null;else return ih5xb;return null;
    }, ye7vw['onFileUpdate'] = function (u6$rj, gscq8l) {
      var df43 = u6$rj['split']('/'),
          $zrj26 = df43[df43['length'] - 0x1],
          iak1xh = ye7vw['getFileInfo'](gscq8l);if (iak1xh == null) ye7vw['onSaveFile'](gscq8l, $zrj26);else {
        if (iak1xh['readyUrl'] != gscq8l) ye7vw['remove']($zrj26, gscq8l);
      }
    }, ye7vw['exits'] = function (qls8c, t4f0_) {
      var gsv = ye7vw['getFileNativePath'](qls8c);ye7vw['fs']['getFileInfo']({ 'filePath': gsv, 'success': function (o6d2r) {
          t4f0_ != null && t4f0_['runWith']([0x0, o6d2r]);
        }, 'fail': function (e7ywqv) {
          t4f0_ != null && t4f0_['runWith']([0x1, e7ywqv]);
        } });
    }, ye7vw['read'] = function (ju6m$r, zo342, tbf_, ih15xa) {
      zo342 === void 0x0 && (zo342 = 'ascill'), ih15xa === void 0x0 && (ih15xa = '');var d4ft3o;ih15xa != '' ? d4ft3o = ye7vw['getFileNativePath'](ju6m$r) : d4ft3o = ju6m$r, ye7vw['fs']['readFile']({ 'filePath': d4ft3o, 'encoding': zo342, 'success': function (y1vek) {
          tbf_ != null && tbf_['runWith']([0x0, y1vek]);
        }, 'fail': function (gy7v) {
          if (gy7v && ih15xa != '') ye7vw['down'](ih15xa, zo342, tbf_, ih15xa);else tbf_ != null && tbf_['runWith']([0x1]);
        } });
    }, ye7vw['readNativeFile'] = function (f_40t3, t0_4) {
      ye7vw['fs']['readFile']({ 'filePath': f_40t3, 'encoding': '', 'success': function (fpb05) {
          t0_4 != null && t0_4['runWith']([0x0]);
        }, 'fail': function (tb_fp) {
          t0_4 != null && t0_4['runWith']([0x1]);
        } });
    }, ye7vw['down'] = function (wq7e, _5b0pi, ft_p40, f_0bp) {
      _5b0pi === void 0x0 && (_5b0pi = 'ascill'), f_0bp === void 0x0 && (f_0bp = '');var ru$j26 = ye7vw['getFileNativePath'](f_0bp),
          qg7c8 = ye7vw['wxdown']({ 'url': wq7e, 'filePath': ru$j26, 'success': function (j2d6z) {
          if (j2d6z['statusCode'] === 0xc8) ye7vw['readFile'](j2d6z['filePath'], _5b0pi, ft_p40, f_0bp);
        }, 'fail': function (i50apb) {
          ft_p40 != null && ft_p40['runWith']([0x1, i50apb]);
        } });qg7c8['onProgressUpdate'](function (dj6z2) {
        ft_p40 != null && ft_p40['runWith']([0x2, dj6z2['progress']]);
      });
    }, ye7vw['readFile'] = function (yekvw7, _3o4, xkyw1h, dz2rj) {
      _3o4 === void 0x0 && (_3o4 = 'ascill'), dz2rj === void 0x0 && (dz2rj = ''), ye7vw['fs']['readFile']({ 'filePath': yekvw7, 'encoding': _3o4, 'success': function (ye1hwk) {
          if (yekvw7['indexOf']('http://') != -0x1 || yekvw7['indexOf']('https://') != -0x1) ye7vw['onFileUpdate'](yekvw7, dz2rj);xkyw1h != null && xkyw1h['runWith']([0x0, ye1hwk]);
        }, 'fail': function (wvqye) {
          if (wvqye) xkyw1h != null && xkyw1h['runWith']([0x1, wvqye]);
        } });
    }, ye7vw['downImg'] = function (pt0_4, pbax5i, ip0) {
      ip0 === void 0x0 && (ip0 = '');var hx1akw = ye7vw['wxdown']({ 'url': pt0_4, 'success': function (o62z) {
          o62z['statusCode'] === 0xc8 && ye7vw['copyFile'](o62z['tempFilePath'], ip0, pbax5i);
        }, 'fail': function (k1hyw) {
          pbax5i != null && pbax5i['runWith']([0x1, k1hyw]);
        } });
    }, ye7vw['copyFile'] = function (s8qg7c, ewh1ky, yevg7) {
      var $z26 = s8qg7c['split']('/'),
          h1akxi = $z26[$z26['length'] - 0x1],
          qgs7v = ewh1ky['split']('?')[0x0],
          o62zrd = ye7vw['getFileInfo'](ewh1ky),
          f3dot = ye7vw['getFileNativePath'](h1akxi);ye7vw['fs']['copyFile']({ 'srcPath': s8qg7c, 'destPath': f3dot, 'success': function (dzjr26) {
          if (!o62zrd) ye7vw['onSaveFile'](ewh1ky, h1akxi), yevg7 != null && yevg7['runWith']([0x0]);else {
            if (o62zrd['readyUrl'] != ewh1ky) ye7vw['remove'](h1akxi, ewh1ky, yevg7);
          }
        }, 'fail': function (vwky7) {
          yevg7 != null && yevg7['runWith']([0x1, vwky7]);
        } });
    }, ye7vw['getFileNativePath'] = function (t_4pf0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t_4pf0;
    }, ye7vw['remove'] = function (i_p05b, p0f5, kh1y) {
      p0f5 === void 0x0 && (p0f5 = '');var zdo362 = ye7vw['getFileInfo'](p0f5),
          vew7q = ye7vw['getFileNativePath'](zdo362['md5']);o2dz36['loader']['clearRes'](zdo362['readyUrl']), ye7vw['fs']['unlink']({ 'filePath': vew7q, 'success': function (ot3dz) {
          if (p0f5 != '') ye7vw['onSaveFile'](p0f5, i_p05b);kh1y != null && kh1y['runWith']([0x0]);
        }, 'fail': function (i1h5x) {} });
    }, ye7vw['onSaveFile'] = function (c8sl9g, tf43) {
      var gvq7e = c8sl9g['split']('?')[0x0];ye7vw['filesListObj'][gvq7e] = { 'md5': tf43, 'readyUrl': c8sl9g }, ye7vw['fs']['writeFile']({ 'filePath': ye7vw['fileNativeDir'] + '/' + ye7vw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ye7vw['filesListObj']), 'success': function ($2ju) {
          console['log']('写入测试测试成功：', $2ju);
        }, 'fail': function (hakx) {
          console['log']('写入测试测试失败：', hakx);
        } });
    }, ye7vw['existDir'] = function (t0bfp_, g9l8c) {
      ye7vw['fs']['mkdir']({ 'dirPath': t0bfp_, 'success': function (qvc7s) {
          g9l8c != null && g9l8c['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t4f_3o) {
          if (t4f_3o['errMsg']['indexOf']('file already exists') != -0x1) ye7vw['readSync'](ye7vw['fileListName'], 'utf8', g9l8c);else g9l8c != null && g9l8c['runWith']([0x1, t4f_3o]);
        } });
    }, ye7vw['readSync'] = function (evw7q, hyxw1, kxawh, odzt4) {
      hyxw1 === void 0x0 && (hyxw1 = 'ascill'), odzt4 === void 0x0 && (odzt4 = '');var qg8l = ye7vw['getFileNativePath'](evw7q),
          ekwy1v;try {
        ekwy1v = ye7vw['fs']['readFileSync'](qg8l), kxawh != null && kxawh['runWith']([0x0, { 'data': ekwy1v }]);
      } catch (tf430_) {
        kxawh != null && kxawh['runWith']([0x1]);
      }
    }, ye7vw['readCache'] = function () {}, ye7vw['writeCache'] = function (wyv7e) {
      var scl9g8 = readyUrl['split']('?')[0x0];ye7vw['filesListObj'][scl9g8] = { 'md5': md5Name, 'readyUrl': readyUrl }, ye7vw['fs']['writeFile']({ 'filePath': ye7vw['fileNativeDir'] + '/' + ye7vw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ye7vw['filesListObj']), 'success': function (ibx) {}, 'fail': function (t43o_) {} });
    }, ye7vw['setNativeFileDir'] = function (f4_30t) {
      ye7vw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + f4_30t;
    }, ye7vw['filesListObj'] = {}, ye7vw['fileNativeDir'] = null, ye7vw['fileListName'] = 'layaairfiles.txt', ye7vw['ziyuFileData'] = {}, f04_pt(ye7vw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ye7vw;
  }(m6$),
      dorz = function (evgc7) {
    function gvcqe() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], gvcqe['__super']['call'](this), this['_sound'] = gvcqe['_createSound']();
    }_30tf4(gvcqe, 'laya.wx.mini.MiniSound', evgc7);var k1xhi = gvcqe['prototype'];return k1xhi['load'] = function (kwy1h) {
      var dr6j2z = this;kwy1h = b05ia['formatURL'](kwy1h), this['url'] = kwy1h;if (gvcqe['_audioCache'][kwy1h]) {
        this['event']('complete');return;
      }function hx1yk() {
        if (gvcqe['_null'] != undefined) dr6j2z['_sound']['onCanplay'](gvcqe['_null']), dr6j2z['_sound']['onError'](gvcqe['_null']);else try {
          dr6j2z['_sound']['onCanplay'](null), dr6j2z['_sound']['onError'](null), gvcqe['_null'] = null;
        } catch (p_4ft) {
          console['warn']('[wxmini] _clearSound:' + p_4ft), dr6j2z['_sound']['onCanplay'](ywhkx), dr6j2z['_sound']['onError'](ywhkx), gvcqe['_null'] = ywhkx;
        }
      }function ykw1e() {
        hx1yk(), khwyx['loaded'] = !![], khwyx['event']('complete'), gvcqe['_audioCache'][khwyx['url']] = khwyx;
      }function sgc87(v7sg) {
        console['error']('errCode=' + v7sg['errCode'] + '  errMsg=' + v7sg['errMsg']), hx1yk(), khwyx['event']('error');
      }function ywhkx() {}this['_sound']['onCanplay'](ykw1e), this['_sound']['onError'](sgc87), this['_sound']['src'] = kwy1h;var khwyx = this;
    }, k1xhi['play'] = function (vscgq7, eyk7v) {
      vscgq7 === void 0x0 && (vscgq7 = 0x0), eyk7v === void 0x0 && (eyk7v = 0x0);var qcsg8l;if (this['url'] == vweqy['_tMusic']) {
        if (!gvcqe['_musicAudio']) gvcqe['_musicAudio'] = gvcqe['_createSound']();qcsg8l = gvcqe['_musicAudio'];
      } else qcsg8l = gvcqe['_createSound']();qcsg8l['src'] = this['url'];var _304f = new xhk1w(qcsg8l);return _304f['url'] = this['url'], _304f['loops'] = eyk7v, _304f['startTime'] = vscgq7, _304f['play'](), vweqy['addChannel'](_304f), _304f;
    }, k1xhi['dispose'] = function () {
      var xk1wy = gvcqe['_audioCache'][this['url']];xk1wy && (xk1wy['src'] = '', delete gvcqe['_audioCache'][this['url']]);
    }, vqeg7y(0x0, k1xhi, 'duration', function () {
      return this['_sound']['duration'];
    }), gvcqe['_createSound'] = function () {
      return gvcqe['_id']++, ibp50_['window']['wx']['createInnerAudioContext']();
    }, gvcqe['_musicAudio'] = null, gvcqe['_id'] = 0x0, gvcqe['_audioCache'] = {}, gvcqe['_null'] = undefined, gvcqe;
  }(m6$),
      xhk1w = function (rju26) {
    function bt0fp_(v7qce) {
      this['_audio'] = null, this['_onEnd'] = null, bt0fp_['__super']['call'](this), this['_audio'] = v7qce, this['_onEnd'] = hbax5['bind'](this['__onEnd'], this), v7qce['onEnded'](this['_onEnd']);
    }_30tf4(bt0fp_, 'laya.wx.mini.MiniSoundChannel', rju26);var $26jz = bt0fp_['prototype'];return $26jz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (o2dz36['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $26jz['__onNull'] = function () {}, $26jz['play'] = function () {
      this['isStopped'] = ![], vweqy['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $26jz['stop'] = function () {
      this['isStopped'] = !![], vweqy['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (bt0fp_['_null'] != undefined) this['_audio']['onEnded'](bt0fp_['_null']);else try {
        this['_audio']['onEnded'](null), bt0fp_['_null'] = null;
      } catch (f3_o) {
        console['warn']('[wxmini] stop:' + f3_o), this['_audio']['onEnded'](hbax5['bind'](this['__onNull'], this)), bt0fp_['_null'] = hbax5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $26jz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $26jz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vweqy['addChannel'](this), this['_audio']['play']();
    }, vqeg7y(0x0, $26jz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vqeg7y(0x0, $26jz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vqeg7y(0x0, $26jz, 'volume', function () {
      return 0x1;
    }, function (ls9g) {}), bt0fp_['_null'] = undefined, bt0fp_;
  }(yhk);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var z6d2or in Laya) {
    var cvq7e = Laya[z6d2or];cvq7e && cvq7e['__isclass'] && (exports[z6d2or] = cvq7e);
  }
});