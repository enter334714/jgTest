var u = wx.$x;
(function (window, document, snmrzb) {
  var fuo1d = snmrzb['un'],
      wpu091 = snmrzb['uns'],
      fk75av = snmrzb['static'],
      _$8eq = snmrzb['class'],
      bixnyt = snmrzb['getset'],
      q$e_3r = snmrzb['__newvec'],
      pg10 = laya['utils']['Browser'],
      bhti = laya['events']['Event'],
      gw0 = laya['events']['EventDispatcher'],
      _q83$ = laya['resource']['HTMLImage'],
      re$_sq = laya['utils']['Handler'],
      ityn = laya['display']['Input'],
      k54fo = laya['net']['Loader'],
      ql38e = laya['maths']['Matrix'],
      afd4k5 = laya['renders']['Render'],
      bzsrnm = laya['utils']['RunDriver'],
      s_mr = laya['media']['Sound'],
      xyiht = laya['media']['SoundChannel'],
      tbmz = laya['media']['SoundManager'],
      xnitb = laya['display']['Stage'],
      inxytb = laya['net']['URL'],
      d54k = laya['utils']['Utils'],
      rq_s$ = function () {
    function $_zsrm() {}return _$8eq($_zsrm, 'laya.wx.mini.MiniAdpter'), $_zsrm['getJson'] = function ($3q8el) {
      return JSON['parse']($3q8el);
    }, $_zsrm['init'] = function (k45fd, q8736) {
      k45fd === void 0x0 && (k45fd = ![]), q8736 === void 0x0 && (q8736 = ![]);if ($_zsrm['_inited']) return;$_zsrm['window'] = window;if ($_zsrm['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$_zsrm['_inited'] = !![], $_zsrm['isZiYu'] = q8736, $_zsrm['isPosMsgYu'] = k45fd, $_zsrm['EnvConfig'] = {}, !$_zsrm['isZiYu'] && (q3$8l['setNativeFileDir']('/layaairGame'), q3$8l['existDir'](q3$8l['fileNativeDir'], re$_sq['create']($_zsrm, $_zsrm['onMkdirCallBack']))), $_zsrm['window']['focus'] = function () {}, snmrzb['getUrlPath'] = function () {}, $_zsrm['window']['logtime'] = function (s$e_rm) {}, $_zsrm['window']['alertTimeLog'] = function (_sm$e) {}, $_zsrm['window']['resetShareInfo'] = function () {}, $_zsrm['window']['CanvasRenderingContext2D'] = function () {}, $_zsrm['window']['CanvasRenderingContext2D']['prototype'] = $_zsrm['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $_zsrm['window']['document']['body']['appendChild'] = function () {}, $_zsrm['EnvConfig']['pixelRatioInt'] = 0x0, bzsrnm['getPixelRatio'] = $_zsrm['pixelRatio'], $_zsrm['_preCreateElement'] = pg10['createElement'], pg10['createElement'] = $_zsrm['createElement'], bzsrnm['createShaderCondition'] = $_zsrm['createShaderCondition'], d54k['parseXMLFromString'] = $_zsrm['parseXMLFromString'], ityn['_createInputElement'] = rmbnz['_createInputElement'], $_zsrm['EnvConfig']['load'] = k54fo['prototype']['load'], k54fo['prototype']['load'] = zmrn_['prototype']['load'], $_zsrm['isZiYu'] && k45fd && wx['onMessage'](function (fad45) {
        fad45['isLoad'] && (q3$8l['ziyuFileData'][fad45['url']] = fad45['data']);
      });
    }, $_zsrm['onMkdirCallBack'] = function (c2ixy, _$3eq8) {
      if (!c2ixy) q3$8l['filesListObj'] = JSON['parse'](_$3eq8['data']);
    }, $_zsrm['pixelRatio'] = function () {
      if (!$_zsrm['EnvConfig']['pixelRatioInt']) try {
        var lv67ka = wx['getSystemInfoSync']();return $_zsrm['EnvConfig']['pixelRatioInt'] = lv67ka['pixelRatio'], lv67ka = lv67ka, lv67ka['pixelRatio'];
      } catch (tbny) {}return $_zsrm['EnvConfig']['pixelRatioInt'];
    }, $_zsrm['createElement'] = function (u1odw0) {
      if (u1odw0 == 'canvas') {
        var u01wo;return $_zsrm['idx'] == 0x1 ? $_zsrm['isZiYu'] ? (u01wo = sharedCanvas, u01wo['style'] = {}) : u01wo = window['canvas'] : u01wo = window['wx']['createCanvas'](), $_zsrm['idx']++, u01wo;
      } else {
        if (u1odw0 == 'textarea' || u1odw0 == 'input') return $_zsrm['onCreateInput'](u1odw0);else {
          if (u1odw0 == 'div') {
            var hci2yj = $_zsrm['_preCreateElement'](u1odw0);return hci2yj['contains'] = function (l3v876) {
              return null;
            }, hci2yj['removeChild'] = function (q_er$s) {}, hci2yj;
          } else return $_zsrm['_preCreateElement'](u1odw0);
        }
      }
    }, $_zsrm['onCreateInput'] = function (l867) {
      var owdu14 = $_zsrm['_preCreateElement'](l867);return owdu14['focus'] = rmbnz['wxinputFocus'], owdu14['blur'] = rmbnz['wxinputblur'], owdu14['style'] = {}, owdu14['value'] = 0x0, owdu14['parentElement'] = {}, owdu14['placeholder'] = {}, owdu14['type'] = {}, owdu14['setColor'] = function (nsmz) {}, owdu14['setType'] = function (m$_re) {}, owdu14['setFontFace'] = function (afk7) {}, owdu14['addEventListener'] = function (u1d4wo) {}, owdu14['contains'] = function (fo5u) {
        return null;
      }, owdu14['removeChild'] = function (oud0) {}, owdu14;
    }, $_zsrm['createShaderCondition'] = function (fuod14) {
      var g9w0 = this,
          foud45 = function () {
        var dko4 = fuod14;return g9w0[fuod14['replace']('this.', '')];
      };return foud45;
    }, $_zsrm['EnvConfig'] = null, $_zsrm['window'] = null, $_zsrm['_preCreateElement'] = null, $_zsrm['_inited'] = ![], $_zsrm['wxRequest'] = null, $_zsrm['systemInfo'] = null, $_zsrm['version'] = '0.0.1', $_zsrm['isZiYu'] = ![], $_zsrm['isPosMsgYu'] = ![], $_zsrm['parseXMLFromString'] = function (d1fu4) {
      var yx2tih, e$3_q8;d1fu4 = d1fu4['replace'](/>\s+</g, '><');try {
        yx2tih = new window['Parser']['DOMParser']()['parseFromString'](d1fu4, 'text/xml');
      } catch (rzbnm) {
        throw '需要引入xml解析库文件';
      }return yx2tih;
    }, $_zsrm['idx'] = 0x1, $_zsrm;
  }(),
      tbixh = function () {
    function a7vk5() {}_$8eq(a7vk5, 'laya.wx.mini.MiniImage');var dow4u1 = a7vk5['prototype'];return dow4u1['_loadImage'] = function (o4fdu1) {
      var $3q_8 = this,
          lkv67 = ![];o4fdu1['indexOf']('layaNativeDir/') == -0x1 && (lkv67 = !![], o4fdu1 = inxytb['formatURL'](o4fdu1));if (!q3$8l['getFileInfo'](o4fdu1)) {
        if (o4fdu1['indexOf']('http://') != -0x1 || o4fdu1['indexOf']('https://') != -0x1) q3$8l['downImg'](o4fdu1, new re$_sq(a7vk5, a7vk5['onDownImgCallBack'], [o4fdu1, $3q_8]), o4fdu1);else a7vk5['onCreateImage'](o4fdu1, $3q_8, !![]);
      } else a7vk5['onCreateImage'](o4fdu1, $3q_8, !lkv67);
    }, a7vk5['onDownImgCallBack'] = function (zxbin, _$srzm, h2c) {
      if (!h2c) a7vk5['onCreateImage'](zxbin, _$srzm);else _$srzm['onError'](null);
    }, a7vk5['onCreateImage'] = function (ztbnsm, se$r, up190w) {
      up190w === void 0x0 && (up190w = ![]);var tbxnzm;if (!up190w) {
        var tmbzx = q3$8l['getFileInfo'](ztbnsm),
            tbyhi = tmbzx['md5'];tbxnzm = q3$8l['getFileNativePath'](tbyhi);
      } else tbxnzm = ztbnsm;if (se$r['imgCache'] == null) se$r['imgCache'] = {};var cyhj2i;function _rme$s() {
        cyhj2i['onload'] = null, cyhj2i['onerror'] = null, delete se$r['imgCache'][ztbnsm];
      };var ihtb = function () {
        _rme$s(), se$r['onLoaded'](cyhj2i);
      },
          wuo1d0 = function () {
        _rme$s(), se$r['event']('error', 'Load image failed');
      };se$r['_type'] == 'nativeimage' ? (cyhj2i = new pg10['window']['Image'](), cyhj2i['crossOrigin'] = '', cyhj2i['onload'] = ihtb, cyhj2i['onerror'] = wuo1d0, cyhj2i['src'] = tbxnzm, se$r['imgCache'][ztbnsm] = cyhj2i) : new _q83$['create'](tbxnzm, { 'onload': ihtb, 'onerror': wuo1d0, 'onCreate': function (rz$) {
          cyhj2i = rz$, se$r['imgCache'][ztbnsm] = rz$;
        } });
    }, a7vk5;
  }(),
      rmbnz = function () {
    function _rqe() {}return _$8eq(_rqe, 'laya.wx.mini.MiniInput'), _rqe['_createInputElement'] = function () {
      ityn['_initInput'](ityn['area'] = pg10['createElement']('textarea')), ityn['_initInput'](ityn['input'] = pg10['createElement']('input')), ityn['inputContainer'] = pg10['createElement']('div'), ityn['inputContainer']['style']['position'] = 'absolute', ityn['inputContainer']['style']['zIndex'] = 0x186a0, pg10['container']['appendChild'](ityn['inputContainer']), ityn['inputContainer']['setPos'] = function (hx, avl768) {
        ityn['inputContainer']['style']['left'] = hx + 'px', ityn['inputContainer']['style']['top'] = avl768 + 'px';
      }, snmrzb['stage']['on']('resize', null, _rqe['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (szrn_m) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), tbmz['_soundClass'] = s_rnzm, tbmz['_musicClass'] = s_rnzm, window['_videoClass'] = uw1p0;
    }, _rqe['_onStageResize'] = function () {
      var _rmzns = snmrzb['stage']['_canvasTransform']['identity']();_rmzns['scale'](pg10['width'] / afd4k5['canvas']['width'] / bzsrnm['getPixelRatio'](), pg10['height'] / afd4k5['canvas']['height'] / bzsrnm['getPixelRatio']());
    }, _rqe['wxinputFocus'] = function (srm_e$) {
      var xhbiy = ityn['inputElement']['target'];if (xhbiy && !xhbiy['editable']) return;rq_s$['window']['wx']['offKeyboardConfirm'](), rq_s$['window']['wx']['offKeyboardInput'](), rq_s$['window']['wx']['showKeyboard']({ 'defaultValue': xhbiy['text'], 'maxLength': xhbiy['maxChars'], 'multiple': xhbiy['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (e3_$r) {}, 'fail': function (me$s_) {} }), rq_s$['window']['wx']['onKeyboardConfirm'](function (hicj2) {
        var a5v7fk = hicj2 ? hicj2['value'] : '';xhbiy['text'] = a5v7fk, xhbiy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rq_s$['window']['wx']['onKeyboardInput'](function (iy2hj) {
        var va7f5k = iy2hj ? iy2hj['value'] : '';if (!xhbiy['multiline']) {
          if (va7f5k['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xhbiy['text'] = va7f5k, xhbiy['event']('input');
      });
    }, _rqe['inputEnter'] = function () {
      ityn['inputElement']['target']['focus'] = ![];
    }, _rqe['wxinputblur'] = function () {
      _rqe['hideKeyboard']();
    }, _rqe['hideKeyboard'] = function () {
      rq_s$['window']['wx']['offKeyboardConfirm'](), rq_s$['window']['wx']['offKeyboardInput'](), rq_s$['window']['wx']['hideKeyboard']({ 'success': function (ou1dw) {
          console['log']('隐藏键盘');
        }, 'fail': function (nbytxi) {
          console['log']('隐藏键盘出错:' + (nbytxi ? nbytxi['errMsg'] : ''));
        } });
    }, _rqe;
  }(),
      zmrn_ = function () {
    function yi2cx() {}_$8eq(yi2cx, 'laya.wx.mini.MiniLoader');var f4o1du = yi2cx['prototype'];return f4o1du['load'] = function (nbxm, stnzb, dkfa4, byixnt, pg910) {
      dkfa4 === void 0x0 && (dkfa4 = !![]), pg910 === void 0x0 && (pg910 = ![]);var ychj2 = this;ychj2['_url'] = nbxm;if (nbxm['indexOf']('data:image') === 0x0) ychj2['_type'] = stnzb = 'image';else ychj2['_type'] = stnzb || (stnzb = ychj2['getTypeFromUrl'](nbxm));ychj2['_cache'] = dkfa4, ychj2['_data'] = null;var mer$ = 'ascii';if (nbxm['indexOf']('.fnt') != -0x1) mer$ = 'utf8';else stnzb == 'arraybuffer' && (mer$ = '');;var tsbnmz = d54k['getFileExtension'](nbxm);if (yi2cx['_fileTypeArr']['indexOf'](tsbnmz) != -0x1) rq_s$['EnvConfig']['load']['call'](this, nbxm, stnzb, dkfa4, byixnt, pg910);else {
        if (!q3$8l['getFileInfo'](nbxm)) {
          if (nbxm['indexOf']('layaNativeDir/') != -0x1) {
            if (rq_s$['isZiYu']) {
              var t2iyh = q3$8l['ziyuFileData'][nbxm];ychj2['onLoaded'](t2iyh);return;
            } else {
              cosnole['log']('read read'), q3$8l['read'](nbxm, mer$, new re$_sq(yi2cx, yi2cx['onReadNativeCallBack'], [mer$, nbxm, stnzb, dkfa4, byixnt, pg910, ychj2]));return;
            }
          }if (inxytb['rootPath'] == '') var nbtzms = nbxm;else nbtzms = nbxm['split'](inxytb['rootPath'])[0x0];nbxm['indexOf']('http://') != -0x1 || nbxm['indexOf']('https://') != -0x1 ? rq_s$['EnvConfig']['load']['call'](ychj2, nbxm, stnzb, dkfa4, byixnt, pg910) : q3$8l['readFile'](nbtzms, mer$, new re$_sq(yi2cx, yi2cx['onReadNativeCallBack'], [mer$, nbxm, stnzb, dkfa4, byixnt, pg910, ychj2]), nbxm);
        } else rq_s$['EnvConfig']['load']['call'](this, nbxm, stnzb, dkfa4, byixnt, pg910);
      }
    }, f4o1du['resMgrLoad'] = function (wp091g, uwo1p0, l38qe, $q3_r, txyhib, afdk54, wd1) {
      l38qe === void 0x0 && (l38qe = 0x0), $q3_r === void 0x0 && ($q3_r = ![]), txyhib === void 0x0 && (txyhib = ![]), afdk54 === void 0x0 && (afdk54 = 0x0), wd1 === void 0x0 && (wd1 = 0x3), wp091g['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wp091g), rq_s$['EnvConfig']['resMgrLoad'](wp091g, (ihx2c, a76k5, $_msz) => {
        yi2cx['prototype']['resMgrLoadCallBack'](ihx2c, a76k5, $_msz, uwo1p0);
      }, l38qe, $q3_r, txyhib, afdk54, wd1);
    }, f4o1du['resMgrLoadCallBack'] = function (v7l6k, c2xih, dfo45, fo1d4) {
      console['log']('buff:::', v7l6k, dfo45, q3$8l['fileNativeDir'] + '///' + q3$8l['fileListName']), fo1d4(v7l6k, c2xih, dfo45);
    }, f4o1du['clearRes'] = function (nrbsmz, _$qr3e) {
      _$qr3e === void 0x0 && (_$qr3e = ![]);var al6v8 = this;al6v8['clearRes'](nrbsmz, _$qr3e);var l673q8 = q3$8l['getFileInfo'](nrbsmz);if (l673q8 && (nrbsmz['indexOf']('http://') != -0x1 || nrbsmz['indexOf']('https://') != -0x1)) {
        var o14du = l673q8['md5'],
            uw10od = q3$8l['getFileNativePath'](o14du);q3$8l['remove'](uw10od);
      }
    }, yi2cx['onReadNativeCallBack'] = function (pu10o, bxtih, mbntx, zixtnb, nm_zrs, pg1w9, h2jyci, eql6, q3e8l6) {
      zixtnb === void 0x0 && (zixtnb = !![]), pg1w9 === void 0x0 && (pg1w9 = ![]), eql6 === void 0x0 && (eql6 = 0x0);if (!eql6) {
        var k7afv5;if (mbntx == 'json' || mbntx == 'atlas') k7afv5 = rq_s$['getJson'](q3e8l6['data']);else mbntx == 'xml' ? k7afv5 = d54k['parseXMLFromString'](q3e8l6['data']) : k7afv5 = q3e8l6['data'];h2jyci['onLoaded'](k7afv5), !rq_s$['isZiYu'] && rq_s$['isPosMsgYu'] && mbntx != 'arraybuffer' && wx['postMessage']({ 'url': bxtih, 'data': k7afv5, 'isLoad': !![] });
      } else eql6 == 0x1 && rq_s$['EnvConfig']['load']['call'](h2jyci, bxtih, mbntx, zixtnb, nm_zrs, pg1w9);
    }, fk75av(yi2cx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), yi2cx;
  }(),
      q3$8l = function (ytbxn) {
    function ixnyt() {
      ixnyt['__super']['call'](this);;
    }return _$8eq(ixnyt, 'laya.wx.mini.MiniFileMgr', ytbxn), ixnyt['isLoadFile'] = function (hjyi2) {
      return ixnyt['_fileTypeArr']['indexOf'](hjyi2) != -0x1 ? !![] : ![];
    }, ixnyt['getFileInfo'] = function (szm_rn) {
      var p1wou0 = szm_rn['split']('?')[0x0],
          _srq = ixnyt['filesListObj'][p1wou0];if (_srq == null) return null;else return _srq;return null;
    }, ixnyt['onFileUpdate'] = function (qser_$, mrn_z) {
      var tmnzxb = qser_$['split']('/'),
          do1uf = tmnzxb[tmnzxb['length'] - 0x1],
          nsm_ = ixnyt['getFileInfo'](mrn_z);if (nsm_ == null) ixnyt['onSaveFile'](mrn_z, do1uf);else {
        if (nsm_['readyUrl'] != mrn_z) ixnyt['remove'](do1uf, mrn_z);
      }
    }, ixnyt['exits'] = function (ser$_q, w1p9g) {
      var nmtzsb = ixnyt['getFileNativePath'](ser$_q);ixnyt['fs']['getFileInfo']({ 'filePath': nmtzsb, 'success': function (sr$z) {
          w1p9g != null && w1p9g['runWith']([0x0, sr$z]);
        }, 'fail': function (g19w0) {
          w1p9g != null && w1p9g['runWith']([0x1, g19w0]);
        } });
    }, ixnyt['read'] = function (tizb, qes$r_, fka54, hit2) {
      qes$r_ === void 0x0 && (qes$r_ = 'ascill'), hit2 === void 0x0 && (hit2 = '');var icy2;hit2 != '' ? icy2 = ixnyt['getFileNativePath'](tizb) : icy2 = tizb, ixnyt['fs']['readFile']({ 'filePath': icy2, 'encoding': qes$r_, 'success': function (tmbnx) {
          fka54 != null && fka54['runWith']([0x0, tmbnx]);
        }, 'fail': function (tbyxhi) {
          if (tbyxhi && hit2 != '') ixnyt['down'](hit2, qes$r_, fka54, hit2);else fka54 != null && fka54['runWith']([0x1]);
        } });
    }, ixnyt['readNativeFile'] = function (sbrmz, k7a6) {
      ixnyt['fs']['readFile']({ 'filePath': sbrmz, 'encoding': '', 'success': function (o1wup) {
          k7a6 != null && k7a6['runWith']([0x0]);
        }, 'fail': function (fad4) {
          k7a6 != null && k7a6['runWith']([0x1]);
        } });
    }, ixnyt['down'] = function (lq6e83, wduo, _mse$, qers$) {
      wduo === void 0x0 && (wduo = 'ascill'), qers$ === void 0x0 && (qers$ = '');var zr_msn = ixnyt['getFileNativePath'](qers$),
          d1ouf4 = ixnyt['wxdown']({ 'url': lq6e83, 'filePath': zr_msn, 'success': function (nxzbtm) {
          if (nxzbtm['statusCode'] === 0xc8) ixnyt['readFile'](nxzbtm['filePath'], wduo, _mse$, qers$);
        }, 'fail': function (k7a5) {
          _mse$ != null && _mse$['runWith']([0x1, k7a5]);
        } });d1ouf4['onProgressUpdate'](function (_re$q3) {
        _mse$ != null && _mse$['runWith']([0x2, _re$q3['progress']]);
      });
    }, ixnyt['readFile'] = function (smnrz, p19uw0, l638e, yhitbx) {
      p19uw0 === void 0x0 && (p19uw0 = 'ascill'), yhitbx === void 0x0 && (yhitbx = ''), ixnyt['fs']['readFile']({ 'filePath': smnrz, 'encoding': p19uw0, 'success': function (d0w1o) {
          if (smnrz['indexOf']('http://') != -0x1 || smnrz['indexOf']('https://') != -0x1) ixnyt['onFileUpdate'](smnrz, yhitbx);l638e != null && l638e['runWith']([0x0, d0w1o]);
        }, 'fail': function (v6alk7) {
          if (v6alk7) l638e != null && l638e['runWith']([0x1, v6alk7]);
        } });
    }, ixnyt['downImg'] = function (l38eq$, mxztb, _esm) {
      _esm === void 0x0 && (_esm = '');var $leq38 = ixnyt['wxdown']({ 'url': l38eq$, 'success': function (e_$rq3) {
          e_$rq3['statusCode'] === 0xc8 && ixnyt['copyFile'](e_$rq3['tempFilePath'], _esm, mxztb);
        }, 'fail': function (h2ixty) {
          mxztb != null && mxztb['runWith']([0x1, h2ixty]);
        } });
    }, ixnyt['copyFile'] = function (f4od1, k54of, ud1w4o) {
      var xntbiy = f4od1['split']('/'),
          _mszn = xntbiy[xntbiy['length'] - 0x1],
          q$res = k54of['split']('?')[0x0],
          mzns_ = ixnyt['getFileInfo'](k54of),
          thiyb = ixnyt['getFileNativePath'](_mszn);ixnyt['fs']['copyFile']({ 'srcPath': f4od1, 'destPath': thiyb, 'success': function (qe$3l8) {
          if (!mzns_) ixnyt['onSaveFile'](k54of, _mszn), ud1w4o != null && ud1w4o['runWith']([0x0]);else {
            if (mzns_['readyUrl'] != k54of) ixnyt['remove'](_mszn, k54of, ud1w4o);
          }
        }, 'fail': function (lv73) {
          ud1w4o != null && ud1w4o['runWith']([0x1, lv73]);
        } });
    }, ixnyt['getFileNativePath'] = function (hyxi2t) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hyxi2t;
    }, ixnyt['remove'] = function (inyt, htbix, dk4f5o) {
      htbix === void 0x0 && (htbix = '');var hy2xt = ixnyt['getFileInfo'](htbix),
          uw0do1 = ixnyt['getFileNativePath'](hy2xt['md5']);snmrzb['loader']['clearRes'](hy2xt['readyUrl']), ixnyt['fs']['unlink']({ 'filePath': uw0do1, 'success': function (a5dfk4) {
          if (htbix != '') ixnyt['onSaveFile'](htbix, inyt);dk4f5o != null && dk4f5o['runWith']([0x0]);
        }, 'fail': function (msnbr) {} });
    }, ixnyt['onSaveFile'] = function (znbr, le6) {
      var u1od4w = znbr['split']('?')[0x0];ixnyt['filesListObj'][u1od4w] = { 'md5': le6, 'readyUrl': znbr }, ixnyt['fs']['writeFile']({ 'filePath': ixnyt['fileNativeDir'] + '/' + ixnyt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ixnyt['filesListObj']), 'success': function (hyitx2) {
          console['log']('写入测试测试成功：', hyitx2);
        }, 'fail': function (e_$83) {
          console['log']('写入测试测试失败：', e_$83);
        } });
    }, ixnyt['existDir'] = function (rm$_s, wd10u) {
      ixnyt['fs']['mkdir']({ 'dirPath': rm$_s, 'success': function (kvaf54) {
          wd10u != null && wd10u['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (d5fok4) {
          if (d5fok4['errMsg']['indexOf']('file already exists') != -0x1) ixnyt['readSync'](ixnyt['fileListName'], 'utf8', wd10u);else wd10u != null && wd10u['runWith']([0x1, d5fok4]);
        } });
    }, ixnyt['readSync'] = function (vla786, yhx2c, pg109, wpg091) {
      yhx2c === void 0x0 && (yhx2c = 'ascill'), wpg091 === void 0x0 && (wpg091 = '');var ibtnz = ixnyt['getFileNativePath'](vla786),
          wpo01u;try {
        wpo01u = ixnyt['fs']['readFileSync'](ibtnz), pg109 != null && pg109['runWith']([0x0, { 'data': wpo01u }]);
      } catch (l36) {
        pg109 != null && pg109['runWith']([0x1]);
      }
    }, ixnyt['readCache'] = function () {}, ixnyt['writeCache'] = function (_q3e) {
      var qle83 = readyUrl['split']('?')[0x0];ixnyt['filesListObj'][qle83] = { 'md5': md5Name, 'readyUrl': readyUrl }, ixnyt['fs']['writeFile']({ 'filePath': ixnyt['fileNativeDir'] + '/' + ixnyt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ixnyt['filesListObj']), 'success': function (u45ofd) {}, 'fail': function (_nszm) {} });
    }, ixnyt['setNativeFileDir'] = function (la678v) {
      ixnyt['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + la678v;
    }, ixnyt['filesListObj'] = {}, ixnyt['fileNativeDir'] = null, ixnyt['fileListName'] = 'layaairfiles.txt', ixnyt['ziyuFileData'] = {}, fk75av(ixnyt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ixnyt;
  }(gw0),
      s_rnzm = function (e_srq$) {
    function o0wu1() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], o0wu1['__super']['call'](this), this['_sound'] = o0wu1['_createSound'](), this['_chanell'] = new xtiyb(this['_sound']);
    }_$8eq(o0wu1, 'laya.wx.mini.MiniSound', e_srq$);var nitxyb = o0wu1['prototype'];return nitxyb['load'] = function (o1w0du) {
      var znrbsm = this;o1w0du = inxytb['formatURL'](o1w0du), this['url'] = o1w0du;if (o0wu1['_audioCache'][o1w0du]) {
        this['event']('complete');return;
      }function yt2x() {
        if (o0wu1['_null'] != undefined) znrbsm['_sound']['onCanplay'](o0wu1['_null']), znrbsm['_sound']['onError'](o0wu1['_null']);else try {
          znrbsm['_sound']['onCanplay'](null), znrbsm['_sound']['onError'](null), o0wu1['_null'] = null;
        } catch (hcj2i) {
          console['warn']('[wxmini] _clearSound:' + hcj2i), znrbsm['_sound']['onCanplay'](l6q38), znrbsm['_sound']['onError'](l6q38), o0wu1['_null'] = l6q38;
        }
      }function $e_smr() {
        eq_8$3['loaded'] = !![], eq_8$3['event']('complete'), o0wu1['_audioCache'][eq_8$3['url']] = eq_8$3;
      }function rq_$3(opw10u) {
        console['error']('errCode=' + opw10u['errCode'] + '  errMsg=' + opw10u['errMsg']), eq_8$3['event']('error');
      }function l6q38() {}this['_sound']['onCanplay']($e_smr), this['_sound']['onError'](rq_$3), this['_sound']['src'] = o1w0du;var eq_8$3 = this;
    }, nitxyb['play'] = function (tzmbn, odu1f) {
      tzmbn === void 0x0 && (tzmbn = 0x0), odu1f === void 0x0 && (odu1f = 0x0);var f5do4, q8$el;if (this['url'] == tbmz['_tMusic']) {
        if (!o0wu1['_musicAudio']) o0wu1['_musicAudio'] = this['_sound'];f5do4 = o0wu1['_musicAudio'], q8$el = this['_chanell'];
      } else f5do4 = this['_sound'], q8$el = this['_chanell'];return f5do4['src'] = this['url'], f5do4['startTime'] = 0x0, q8$el['isStopped'] && (q8$el['url'] = this['url'], q8$el['loops'] = odu1f, q8$el['startTime'] = tzmbn, q8$el['play'](), tbmz['addChannel'](q8$el)), q8$el;
    }, nitxyb['dispose'] = function () {
      var fou1d = o0wu1['_audioCache'][this['url']];fou1d && (fou1d['src'] = '', delete o0wu1['_audioCache'][this['url']]);
    }, bixnyt(0x0, nitxyb, 'duration', function () {
      return this['_sound']['duration'];
    }), o0wu1['_createSound'] = function () {
      o0wu1['_id']++;var r$zsm_ = rq_s$['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return r$zsm_;
    }, o0wu1['_musicAudio'] = null, o0wu1['_id'] = 0x0, o0wu1['_audioCache'] = {}, o0wu1['_null'] = undefined, o0wu1;
  }(gw0),
      xtiyb = function (wp01) {
    function zmbsr(l37q) {
      this['_audio'] = null, this['_onEnd'] = null, zmbsr['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = l37q, this['_onEnd'] = d54k['bind'](this['__onEnd'], this), l37q['onEnded'](this['_onEnd']);
    }_$8eq(zmbsr, 'laya.wx.mini.MiniSoundChannel', wp01);var rms$_ = zmbsr['prototype'];return rms$_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (snmrzb['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rms$_['__onNull'] = function () {}, rms$_['play'] = function () {
      this['isStopped'] = ![], tbmz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rms$_['stop'] = function () {
      this['isStopped'] = !![], tbmz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, rms$_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rms$_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], tbmz['addChannel'](this), this['_audio']['play']();
    }, bixnyt(0x0, rms$_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), bixnyt(0x0, rms$_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), bixnyt(0x0, rms$_, 'volume', function () {
      return 0x1;
    }, function (bxitny) {}), zmbsr['_null'] = undefined, zmbsr;
  }(xyiht),
      uw1p0 = function () {
    function f5ok4d() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rq_s$['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }_$8eq(f5ok4d, 'laya.wx.mini.MiniVideo');var btxiz = f5ok4d['prototype'];return btxiz['on'] = function ($r_qe3, l7q863, stm) {
      if ($r_qe3 == 'loadedmetadata') this['onPlayFunc'] = stm['bind'](l7q863), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else $r_qe3 == 'ended' && (this['onEndedFunC'] = stm['bind'](l7q863), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, btxiz['onTimeUpdateFunc'] = function (smnzrb) {
      this['position'] = smnzrb['position'], this['_duration'] = smnzrb['duration'];
    }, btxiz['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, btxiz['onended'] = function (zr_s, m_$es) {
      this['onEndedFunC'] = m_$es['bind'](zr_s), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, btxiz['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, btxiz['off'] = function (od1f4u, lvka67, yjh2c) {
      if (od1f4u == 'loadedmetadata') this['onPlayFunc'] = yjh2c['bind'](lvka67), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else od1f4u == 'ended' && (this['onEndedFunC'] = yjh2c['bind'](lvka67), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, btxiz['load'] = function (jicyh2) {
      if (!this['videoElement']) return;this['videoElement']['src'] = jicyh2;
    }, btxiz['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, btxiz['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, btxiz['size'] = function (r_sq$e, _38$qe) {
      if (!this['videoElement']) return;this['videoElement']['width'] = r_sq$e, this['videoElement']['height'] = _38$qe;
    }, btxiz['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, btxiz['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, bixnyt(0x0, btxiz, 'duration', function () {
      return this['_duration'];
    }), bixnyt(0x0, btxiz, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (f5o4ud) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = f5o4ud;
    }), bixnyt(0x0, btxiz, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), bixnyt(0x0, btxiz, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), bixnyt(0x0, btxiz, 'ended', function () {
      return this['videoend'];
    }), bixnyt(0x0, btxiz, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (ybthx) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = ybthx;
    }), bixnyt(0x0, btxiz, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (duf1o4) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = duf1o4;
    }), bixnyt(0x0, btxiz, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (wd0uo) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = wd0uo;
    }), bixnyt(0x0, btxiz, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), bixnyt(0x0, btxiz, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (nmxb) {
      if (!this['videoElement']) return;this['videoElement']['x'] = nmxb;
    }), bixnyt(0x0, btxiz, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (itbyh) {
      if (!this['videoElement']) return;this['videoElement']['y'] = itbyh;
    }), bixnyt(0x0, btxiz, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), bixnyt(0x0, btxiz, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (v7af5) {
      if (!this['videoElement']) return;this['videoElement']['src'] = v7af5;
    }), bixnyt(0x0, btxiz, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function ($rq3e_) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = $rq3e_;
    }), bixnyt(0x0, btxiz, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (mbxztn) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = mbxztn;
    }), f5ok4d;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dou41f in Laya) {
    var mer$s_ = Laya[dou41f];mer$s_ && mer$s_['__isclass'] && (exports[dou41f] = mer$s_);
  }
});