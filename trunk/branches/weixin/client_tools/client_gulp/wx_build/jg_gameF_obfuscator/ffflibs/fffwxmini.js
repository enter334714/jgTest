var k = wx.$f;
(function (window, document, w8nx) {
  var cdnjs = w8nx['un'],
      rz8e7 = w8nx['uns'],
      _65k4 = w8nx['static'],
      osjc = w8nx['class'],
      c2o6j4 = w8nx['getset'],
      _o42c6 = w8nx['__newvec'],
      cdj6o = laya['utils']['Browser'],
      j24o6c = laya['events']['Event'],
      wcjods = laya['events']['EventDispatcher'],
      sxnw = laya['resource']['HTMLImage'],
      _426k5 = laya['utils']['Handler'],
      jo462c = laya['display']['Input'],
      _4q52k = laya['net']['Loader'],
      dxnsew = laya['maths']['Matrix'],
      thfb = laya['renders']['Render'],
      ry$73 = laya['utils']['RunDriver'],
      nxzwe8 = laya['media']['Sound'],
      i9b1u = laya['media']['SoundChannel'],
      y$7r3a = laya['media']['SoundManager'],
      cwsj = laya['display']['Stage'],
      mh0qft = laya['net']['URL'],
      ivmft = laya['utils']['Utils'],
      mvuibf = function () {
    function bihfm() {}return osjc(bihfm, 'laya.wx.mini.MiniAdpter'), bihfm['getJson'] = function (wsdjn) {
      return JSON['parse'](wsdjn);
    }, bihfm['init'] = function (sco6jd, rz8xe7) {
      sco6jd === void 0x0 && (sco6jd = ![]), rz8xe7 === void 0x0 && (rz8xe7 = ![]);if (bihfm['_inited']) return;bihfm['window'] = window;if (bihfm['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bihfm['_inited'] = !![], bihfm['isZiYu'] = rz8xe7, bihfm['isPosMsgYu'] = sco6jd, bihfm['EnvConfig'] = {}, !bihfm['isZiYu'] && (zwe8xn['setNativeFileDir']('/layaairGame'), zwe8xn['existDir'](zwe8xn['fileNativeDir'], _426k5['create'](bihfm, bihfm['onMkdirCallBack']))), bihfm['window']['focus'] = function () {}, w8nx['getUrlPath'] = function () {}, bihfm['window']['logtime'] = function (njwdsx) {}, bihfm['window']['alertTimeLog'] = function (xnzsew) {}, bihfm['window']['resetShareInfo'] = function () {}, bihfm['window']['CanvasRenderingContext2D'] = function () {}, bihfm['window']['CanvasRenderingContext2D']['prototype'] = bihfm['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bihfm['window']['document']['body']['appendChild'] = function () {}, bihfm['EnvConfig']['pixelRatioInt'] = 0x0, ry$73['getPixelRatio'] = bihfm['pixelRatio'], bihfm['_preCreateElement'] = cdj6o['createElement'], cdj6o['createElement'] = bihfm['createElement'], ry$73['createShaderCondition'] = bihfm['createShaderCondition'], ivmft['parseXMLFromString'] = bihfm['parseXMLFromString'], jo462c['_createInputElement'] = xrz8['_createInputElement'], bihfm['EnvConfig']['load'] = _4q52k['prototype']['load'], _4q52k['prototype']['load'] = r8z73$['prototype']['load'], bihfm['isZiYu'] && sco6jd && wx['onMessage'](function (j4o2c) {
        j4o2c['isLoad'] && (zwe8xn['ziyuFileData'][j4o2c['url']] = j4o2c['data']);
      });
    }, bihfm['onMkdirCallBack'] = function (j62cd, v1imu) {
      if (!j62cd) zwe8xn['filesListObj'] = JSON['parse'](v1imu['data']);
    }, bihfm['pixelRatio'] = function () {
      if (!bihfm['EnvConfig']['pixelRatioInt']) try {
        var yr7$8 = wx['getSystemInfoSync']();return bihfm['EnvConfig']['pixelRatioInt'] = yr7$8['pixelRatio'], yr7$8 = yr7$8, yr7$8['pixelRatio'];
      } catch (yr$873) {}return bihfm['EnvConfig']['pixelRatioInt'];
    }, bihfm['createElement'] = function (nxswdj) {
      if (nxswdj == 'canvas') {
        var wnzsx;return bihfm['idx'] == 0x1 ? bihfm['isZiYu'] ? (wnzsx = sharedCanvas, wnzsx['style'] = {}) : wnzsx = window['canvas'] : wnzsx = window['wx']['createCanvas'](), bihfm['idx']++, wnzsx;
      } else {
        if (nxswdj == 'textarea' || nxswdj == 'input') return bihfm['onCreateInput'](nxswdj);else {
          if (nxswdj == 'div') {
            var dsjxn = bihfm['_preCreateElement'](nxswdj);return dsjxn['contains'] = function (denxw) {
              return null;
            }, dsjxn['removeChild'] = function (re8xz) {}, dsjxn;
          } else return bihfm['_preCreateElement'](nxswdj);
        }
      }
    }, bihfm['onCreateInput'] = function (dcwjn) {
      var th5qk = bihfm['_preCreateElement'](dcwjn);return th5qk['focus'] = xrz8['wxinputFocus'], th5qk['blur'] = xrz8['wxinputblur'], th5qk['style'] = {}, th5qk['value'] = 0x0, th5qk['parentElement'] = {}, th5qk['placeholder'] = {}, th5qk['type'] = {}, th5qk['setColor'] = function (ftbmvi) {}, th5qk['setType'] = function (mtfibv) {}, th5qk['setFontFace'] = function (itbfmh) {}, th5qk['addEventListener'] = function (y3$8) {}, th5qk['contains'] = function (wjsod) {
        return null;
      }, th5qk['removeChild'] = function (umv1) {}, th5qk;
    }, bihfm['createShaderCondition'] = function (_2q54) {
      var k_5624 = this,
          jdowcs = function () {
        var jwcdos = _2q54;return k_5624[_2q54['replace']('this.', '')];
      };return jdowcs;
    }, bihfm['EnvConfig'] = null, bihfm['window'] = null, bihfm['_preCreateElement'] = null, bihfm['_inited'] = ![], bihfm['wxRequest'] = null, bihfm['systemInfo'] = null, bihfm['version'] = '0.0.1', bihfm['isZiYu'] = ![], bihfm['isPosMsgYu'] = ![], bihfm['parseXMLFromString'] = function (imthf) {
      var jcdosw, imb1uv;imthf = imthf['replace'](/>\s+</g, '><');try {
        jcdosw = new window['Parser']['DOMParser']()['parseFromString'](imthf, 'text/xml');
      } catch (h5k_q0) {
        throw '需要引入xml解析库文件';
      }return jcdosw;
    }, bihfm['idx'] = 0x1, bihfm;
  }(),
      xr8ez7 = function () {
    function $er87() {}osjc($er87, 'laya.wx.mini.MiniImage');var ndews = $er87['prototype'];return ndews['_loadImage'] = function (xdjw) {
      var t5f0hq = this,
          wdosjc = ![];xdjw['indexOf']('layaNativeDir/') == -0x1 && (wdosjc = !![], xdjw = mh0qft['formatURL'](xdjw));if (!zwe8xn['getFileInfo'](xdjw)) {
        if (xdjw['indexOf']('http://') != -0x1 || xdjw['indexOf']('https://') != -0x1) zwe8xn['downImg'](xdjw, new _426k5($er87, $er87['onDownImgCallBack'], [xdjw, t5f0hq]), xdjw);else $er87['onCreateImage'](xdjw, t5f0hq, !![]);
      } else $er87['onCreateImage'](xdjw, t5f0hq, !wdosjc);
    }, $er87['onDownImgCallBack'] = function (rz783, bmth, u9ib) {
      if (!u9ib) $er87['onCreateImage'](rz783, bmth);else bmth['onError'](null);
    }, $er87['onCreateImage'] = function (wzxesn, _4k2q, mbfi) {
      mbfi === void 0x0 && (mbfi = ![]);var ya7$p;if (!mbfi) {
        var u9vbi1 = zwe8xn['getFileInfo'](wzxesn),
            m1vb = u9vbi1['md5'];ya7$p = zwe8xn['getFileNativePath'](m1vb);
      } else ya7$p = wzxesn;if (_4k2q['imgCache'] == null) _4k2q['imgCache'] = {};var bmivft;function _k426() {
        bmivft['onload'] = null, bmivft['onerror'] = null, delete _4k2q['imgCache'][wzxesn];
      };var tmh0fq = function () {
        _k426(), _4k2q['onLoaded'](bmivft);
      },
          o2k_46 = function () {
        _k426(), _4k2q['event']('error', 'Load image failed');
      };_4k2q['_type'] == 'nativeimage' ? (bmivft = new cdj6o['window']['Image'](), bmivft['crossOrigin'] = '', bmivft['onload'] = tmh0fq, bmivft['onerror'] = o2k_46, bmivft['src'] = ya7$p, _4k2q['imgCache'][wzxesn] = bmivft) : new sxnw['create'](ya7$p, { 'onload': tmh0fq, 'onerror': o2k_46, 'onCreate': function (ray) {
          bmivft = ray, _4k2q['imgCache'][wzxesn] = ray;
        } });
    }, $er87;
  }(),
      xrz8 = function () {
    function xwesz() {}return osjc(xwesz, 'laya.wx.mini.MiniInput'), xwesz['_createInputElement'] = function () {
      jo462c['_initInput'](jo462c['area'] = cdj6o['createElement']('textarea')), jo462c['_initInput'](jo462c['input'] = cdj6o['createElement']('input')), jo462c['inputContainer'] = cdj6o['createElement']('div'), jo462c['inputContainer']['style']['position'] = 'absolute', jo462c['inputContainer']['style']['zIndex'] = 0x186a0, cdj6o['container']['appendChild'](jo462c['inputContainer']), jo462c['inputContainer']['setPos'] = function (nx8er, wsjnc) {
        jo462c['inputContainer']['style']['left'] = nx8er + 'px', jo462c['inputContainer']['style']['top'] = wsjnc + 'px';
      }, w8nx['stage']['on']('resize', null, xwesz['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (a$3p) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), y$7r3a['_soundClass'] = e78z$, y$7r3a['_musicClass'] = e78z$;
    }, xwesz['_onStageResize'] = function () {
      var tvmb = w8nx['stage']['_canvasTransform']['identity']();tvmb['scale'](cdj6o['width'] / thfb['canvas']['width'] / ry$73['getPixelRatio'](), cdj6o['height'] / thfb['canvas']['height'] / ry$73['getPixelRatio']());
    }, xwesz['wxinputFocus'] = function (h50q) {
      var hm0t = jo462c['inputElement']['target'];if (hm0t && !hm0t['editable']) return;mvuibf['window']['wx']['offKeyboardConfirm'](), mvuibf['window']['wx']['offKeyboardInput'](), mvuibf['window']['wx']['showKeyboard']({ 'defaultValue': hm0t['text'], 'maxLength': hm0t['maxChars'], 'multiple': hm0t['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xsjwd) {}, 'fail': function (ok6_2) {} }), mvuibf['window']['wx']['onKeyboardConfirm'](function (cjo642) {
        var xdeswn = cjo642 ? cjo642['value'] : '';hm0t['text'] = xdeswn, hm0t['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mvuibf['window']['wx']['onKeyboardInput'](function (hftib) {
        var h5ft0 = hftib ? hftib['value'] : '';if (!hm0t['multiline']) {
          if (h5ft0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hm0t['text'] = h5ft0, hm0t['event']('input');
      });
    }, xwesz['inputEnter'] = function () {
      jo462c['inputElement']['target']['focus'] = ![];
    }, xwesz['wxinputblur'] = function () {
      xwesz['hideKeyboard']();
    }, xwesz['hideKeyboard'] = function () {
      mvuibf['window']['wx']['offKeyboardConfirm'](), mvuibf['window']['wx']['offKeyboardInput'](), mvuibf['window']['wx']['hideKeyboard']({ 'success': function (ugb) {
          console['log']('隐藏键盘');
        }, 'fail': function (enwz) {
          console['log']('隐藏键盘出错:' + (enwz ? enwz['errMsg'] : ''));
        } });
    }, xwesz;
  }(),
      r8z73$ = function () {
    function r8ez$() {}osjc(r8ez$, 'laya.wx.mini.MiniLoader');var _4c = r8ez$['prototype'];return _4c['load'] = function (qk5_04, ib9vu1, buifmv, kh5qt, vum1b) {
      buifmv === void 0x0 && (buifmv = !![]), vum1b === void 0x0 && (vum1b = ![]);var so6cjd = this;so6cjd['_url'] = qk5_04;if (qk5_04['indexOf']('data:image') === 0x0) so6cjd['_type'] = ib9vu1 = 'image';else so6cjd['_type'] = ib9vu1 || (ib9vu1 = so6cjd['getTypeFromUrl'](qk5_04));so6cjd['_cache'] = buifmv, so6cjd['_data'] = null;var u19vib = 'ascii';if (qk5_04['indexOf']('.fnt') != -0x1) u19vib = 'utf8';else ib9vu1 == 'arraybuffer' && (u19vib = '');;var jo2 = ivmft['getFileExtension'](qk5_04);if (r8ez$['_fileTypeArr']['indexOf'](jo2) != -0x1) mvuibf['EnvConfig']['load']['call'](this, qk5_04, ib9vu1, buifmv, kh5qt, vum1b);else {
        if (!zwe8xn['getFileInfo'](qk5_04)) {
          if (qk5_04['indexOf']('layaNativeDir/') != -0x1) {
            if (mvuibf['isZiYu']) {
              var joc64 = zwe8xn['ziyuFileData'][qk5_04];so6cjd['onLoaded'](joc64);return;
            } else {
              cosnole['log']('read read'), zwe8xn['read'](qk5_04, u19vib, new _426k5(r8ez$, r8ez$['onReadNativeCallBack'], [u19vib, qk5_04, ib9vu1, buifmv, kh5qt, vum1b, so6cjd]));return;
            }
          }if (mh0qft['rootPath'] == '') var z378$r = qk5_04;else z378$r = qk5_04['split'](mh0qft['rootPath'])[0x0];qk5_04['indexOf']('http://') != -0x1 || qk5_04['indexOf']('https://') != -0x1 ? mvuibf['EnvConfig']['load']['call'](so6cjd, qk5_04, ib9vu1, buifmv, kh5qt, vum1b) : zwe8xn['readFile'](z378$r, u19vib, new _426k5(r8ez$, r8ez$['onReadNativeCallBack'], [u19vib, qk5_04, ib9vu1, buifmv, kh5qt, vum1b, so6cjd]), qk5_04);
        } else mvuibf['EnvConfig']['load']['call'](this, qk5_04, ib9vu1, buifmv, kh5qt, vum1b);
      }
    }, _4c['resMgrLoad'] = function (bg19u, bi91, jsdnc, jd26, cnswj, fmbu, exrzn) {
      jsdnc === void 0x0 && (jsdnc = 0x0), jd26 === void 0x0 && (jd26 = ![]), cnswj === void 0x0 && (cnswj = ![]), fmbu === void 0x0 && (fmbu = 0x0), exrzn === void 0x0 && (exrzn = 0x3), bg19u['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bg19u), mvuibf['EnvConfig']['resMgrLoad'](bg19u, (jwdosc, vumifb, _2k56) => {
        r8ez$['prototype']['resMgrLoadCallBack'](jwdosc, vumifb, _2k56, bi91);
      }, jsdnc, jd26, cnswj, fmbu, exrzn);
    }, _4c['resMgrLoadCallBack'] = function (wjn, qk542, nzxe8r, sxnwde) {
      console['log']('buff:::', wjn, nzxe8r, zwe8xn['fileNativeDir'] + '///' + zwe8xn['fileListName']), sxnwde(wjn, qk542, nzxe8r);
    }, _4c['clearRes'] = function (k524q, y$3a7r) {
      y$3a7r === void 0x0 && (y$3a7r = ![]);var $8r37 = this;$8r37['clearRes'](k524q, y$3a7r);var $ra7 = zwe8xn['getFileInfo'](k524q);if ($ra7 && (k524q['indexOf']('http://') != -0x1 || k524q['indexOf']('https://') != -0x1)) {
        var z8xrn = $ra7['md5'],
            ub1ivm = zwe8xn['getFileNativePath'](z8xrn);zwe8xn['remove'](ub1ivm);
      }
    }, r8ez$['onReadNativeCallBack'] = function (wcosj, r$8z7, wocsjd, xwjns, mbu1i, fmibv, wjcnd, o2c64j, znw8e) {
      xwjns === void 0x0 && (xwjns = !![]), fmibv === void 0x0 && (fmibv = ![]), o2c64j === void 0x0 && (o2c64j = 0x0);if (!o2c64j) {
        var fmht0;if (wocsjd == 'json' || wocsjd == 'atlas') fmht0 = mvuibf['getJson'](znw8e['data']);else wocsjd == 'xml' ? fmht0 = ivmft['parseXMLFromString'](znw8e['data']) : fmht0 = znw8e['data'];wjcnd['onLoaded'](fmht0), !mvuibf['isZiYu'] && mvuibf['isPosMsgYu'] && wocsjd != 'arraybuffer' && wx['postMessage']({ 'url': r$8z7, 'data': fmht0, 'isLoad': !![] });
      } else o2c64j == 0x1 && mvuibf['EnvConfig']['load']['call'](wjcnd, r$8z7, wocsjd, xwjns, mbu1i, fmibv);
    }, _65k4(r8ez$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), r8ez$;
  }(),
      zwe8xn = function (x8z7re) {
    function bfiv() {
      bfiv['__super']['call'](this);;
    }return osjc(bfiv, 'laya.wx.mini.MiniFileMgr', x8z7re), bfiv['isLoadFile'] = function (_qh0) {
      return bfiv['_fileTypeArr']['indexOf'](_qh0) != -0x1 ? !![] : ![];
    }, bfiv['getFileInfo'] = function (ivb1) {
      var qtf0h = ivb1['split']('?')[0x0],
          exzsw = bfiv['filesListObj'][qtf0h];if (exzsw == null) return null;else return exzsw;return null;
    }, bfiv['onFileUpdate'] = function ($y73, tqfmh) {
      var k25_q = $y73['split']('/'),
          tfib = k25_q[k25_q['length'] - 0x1],
          $y7ap3 = bfiv['getFileInfo'](tqfmh);if ($y7ap3 == null) bfiv['onSaveFile'](tqfmh, tfib);else {
        if ($y7ap3['readyUrl'] != tqfmh) bfiv['remove'](tfib, tqfmh);
      }
    }, bfiv['exits'] = function (ncdwsj, jwscnd) {
      var qh5_ = bfiv['getFileNativePath'](ncdwsj);bfiv['fs']['getFileInfo']({ 'filePath': qh5_, 'success': function (znre) {
          jwscnd != null && jwscnd['runWith']([0x0, znre]);
        }, 'fail': function (c462o) {
          jwscnd != null && jwscnd['runWith']([0x1, c462o]);
        } });
    }, bfiv['read'] = function (wnexd, fibmuv, zx8rn, u1vbg9) {
      fibmuv === void 0x0 && (fibmuv = 'ascill'), u1vbg9 === void 0x0 && (u1vbg9 = '');var imb;u1vbg9 != '' ? imb = bfiv['getFileNativePath'](wnexd) : imb = wnexd, bfiv['fs']['readFile']({ 'filePath': imb, 'encoding': fibmuv, 'success': function (ndsc) {
          zx8rn != null && zx8rn['runWith']([0x0, ndsc]);
        }, 'fail': function (jsdocw) {
          if (jsdocw && u1vbg9 != '') bfiv['down'](u1vbg9, fibmuv, zx8rn, u1vbg9);else zx8rn != null && zx8rn['runWith']([0x1]);
        } });
    }, bfiv['readNativeFile'] = function (jocdw, _64o) {
      bfiv['fs']['readFile']({ 'filePath': jocdw, 'encoding': '', 'success': function (sxdjnw) {
          _64o != null && _64o['runWith']([0x0]);
        }, 'fail': function (d6ocj2) {
          _64o != null && _64o['runWith']([0x1]);
        } });
    }, bfiv['down'] = function (o_k624, o2_4c6, scndj, ubg9v1) {
      o2_4c6 === void 0x0 && (o2_4c6 = 'ascill'), ubg9v1 === void 0x0 && (ubg9v1 = '');var ojdcw = bfiv['getFileNativePath'](ubg9v1),
          tm0hfi = bfiv['wxdown']({ 'url': o_k624, 'filePath': ojdcw, 'success': function (ib1umv) {
          if (ib1umv['statusCode'] === 0xc8) bfiv['readFile'](ib1umv['filePath'], o2_4c6, scndj, ubg9v1);
        }, 'fail': function (swnz) {
          scndj != null && scndj['runWith']([0x1, swnz]);
        } });tm0hfi['onProgressUpdate'](function (kq_425) {
        scndj != null && scndj['runWith']([0x2, kq_425['progress']]);
      });
    }, bfiv['readFile'] = function (ibmhtf, qtmf0, k_24q5, ndsxwj) {
      qtmf0 === void 0x0 && (qtmf0 = 'ascill'), ndsxwj === void 0x0 && (ndsxwj = ''), bfiv['fs']['readFile']({ 'filePath': ibmhtf, 'encoding': qtmf0, 'success': function (bug1v) {
          if (ibmhtf['indexOf']('http://') != -0x1 || ibmhtf['indexOf']('https://') != -0x1) bfiv['onFileUpdate'](ibmhtf, ndsxwj);k_24q5 != null && k_24q5['runWith']([0x0, bug1v]);
        }, 'fail': function (wsxez) {
          if (wsxez) k_24q5 != null && k_24q5['runWith']([0x1, wsxez]);
        } });
    }, bfiv['downImg'] = function (imfv, k05q_4, bhfmi) {
      bhfmi === void 0x0 && (bhfmi = '');var k562 = bfiv['wxdown']({ 'url': imfv, 'success': function (csnwj) {
          csnwj['statusCode'] === 0xc8 && bfiv['copyFile'](csnwj['tempFilePath'], bhfmi, k05q_4);
        }, 'fail': function (m1vibu) {
          k05q_4 != null && k05q_4['runWith']([0x1, m1vibu]);
        } });
    }, bfiv['copyFile'] = function (cjowds, q452k, r$ez8) {
      var csdjow = cjowds['split']('/'),
          bi1mu = csdjow[csdjow['length'] - 0x1],
          vuimb1 = q452k['split']('?')[0x0],
          fvbium = bfiv['getFileInfo'](q452k),
          q2k_4 = bfiv['getFileNativePath'](bi1mu);bfiv['fs']['copyFile']({ 'srcPath': cjowds, 'destPath': q2k_4, 'success': function ($y783) {
          if (!fvbium) bfiv['onSaveFile'](q452k, bi1mu), r$ez8 != null && r$ez8['runWith']([0x0]);else {
            if (fvbium['readyUrl'] != q452k) bfiv['remove'](bi1mu, q452k, r$ez8);
          }
        }, 'fail': function (a$37yr) {
          r$ez8 != null && r$ez8['runWith']([0x1, a$37yr]);
        } });
    }, bfiv['getFileNativePath'] = function (t5hk0q) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t5hk0q;
    }, bfiv['remove'] = function (_6oc, _k0q4, _2q5) {
      _k0q4 === void 0x0 && (_k0q4 = '');var vfibt = bfiv['getFileInfo'](_k0q4),
          n8xwz = bfiv['getFileNativePath'](vfibt['md5']);w8nx['loader']['clearRes'](vfibt['readyUrl']), bfiv['fs']['unlink']({ 'filePath': n8xwz, 'success': function (vumbi) {
          if (_k0q4 != '') bfiv['onSaveFile'](_k0q4, _6oc);_2q5 != null && _2q5['runWith']([0x0]);
        }, 'fail': function (q45k2) {} });
    }, bfiv['onSaveFile'] = function ($zr73, r7zex) {
      var xnw = $zr73['split']('?')[0x0];bfiv['filesListObj'][xnw] = { 'md5': r7zex, 'readyUrl': $zr73 }, bfiv['fs']['writeFile']({ 'filePath': bfiv['fileNativeDir'] + '/' + bfiv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bfiv['filesListObj']), 'success': function (jwcdn) {
          console['log']('写入测试测试成功：', jwcdn);
        }, 'fail': function (tk5hq) {
          console['log']('写入测试测试失败：', tk5hq);
        } });
    }, bfiv['existDir'] = function (_540k, ubfimv) {
      bfiv['fs']['mkdir']({ 'dirPath': _540k, 'success': function (djxs) {
          ubfimv != null && ubfimv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (vmbiuf) {
          if (vmbiuf['errMsg']['indexOf']('file already exists') != -0x1) bfiv['readSync'](bfiv['fileListName'], 'utf8', ubfimv);else ubfimv != null && ubfimv['runWith']([0x1, vmbiuf]);
        } });
    }, bfiv['readSync'] = function (y7$3pa, ht5k0, h5_0k, q25_4) {
      ht5k0 === void 0x0 && (ht5k0 = 'ascill'), q25_4 === void 0x0 && (q25_4 = '');var hfbt = bfiv['getFileNativePath'](y7$3pa),
          k6452;try {
        k6452 = bfiv['fs']['readFileSync'](hfbt), h5_0k != null && h5_0k['runWith']([0x0, { 'data': k6452 }]);
      } catch (wcods) {
        h5_0k != null && h5_0k['runWith']([0x1]);
      }
    }, bfiv['readCache'] = function () {}, bfiv['writeCache'] = function (sdocj6) {
      var _6ok2 = readyUrl['split']('?')[0x0];bfiv['filesListObj'][_6ok2] = { 'md5': md5Name, 'readyUrl': readyUrl }, bfiv['fs']['writeFile']({ 'filePath': bfiv['fileNativeDir'] + '/' + bfiv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bfiv['filesListObj']), 'success': function (wn8ezx) {}, 'fail': function (hbfmt) {} });
    }, bfiv['setNativeFileDir'] = function (u9v1bi) {
      bfiv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + u9v1bi;
    }, bfiv['filesListObj'] = {}, bfiv['fileNativeDir'] = null, bfiv['fileListName'] = 'layaairfiles.txt', bfiv['ziyuFileData'] = {}, _65k4(bfiv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bfiv;
  }(wcjods),
      e78z$ = function (ubivfm) {
    function jcsnd() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jcsnd['__super']['call'](this), this['_sound'] = jcsnd['_createSound']();
    }osjc(jcsnd, 'laya.wx.mini.MiniSound', ubivfm);var htqmf0 = jcsnd['prototype'];return htqmf0['load'] = function (k05_q) {
      var zer$78 = this;k05_q = mh0qft['formatURL'](k05_q), this['url'] = k05_q;if (jcsnd['_audioCache'][k05_q]) {
        this['event']('complete');return;
      }function k5th0() {
        if (jcsnd['_null'] != undefined) zer$78['_sound']['onCanplay'](jcsnd['_null']), zer$78['_sound']['onError'](jcsnd['_null']);else try {
          zer$78['_sound']['onCanplay'](null), zer$78['_sound']['onError'](null), jcsnd['_null'] = null;
        } catch (o6csdj) {
          console['warn']('[wxmini] _clearSound:' + o6csdj), zer$78['_sound']['onCanplay'](wdoj), zer$78['_sound']['onError'](wdoj), jcsnd['_null'] = wdoj;
        }
      }function a$3y7() {
        k5th0(), xesznw['loaded'] = !![], xesznw['event']('complete'), jcsnd['_audioCache'][xesznw['url']] = xesznw;
      }function vgub91($73apy) {
        console['error']('errCode=' + $73apy['errCode'] + '  errMsg=' + $73apy['errMsg']), k5th0(), xesznw['event']('error');
      }function wdoj() {}this['_sound']['onCanplay'](a$3y7), this['_sound']['onError'](vgub91), this['_sound']['src'] = k05_q;var xesznw = this;
    }, htqmf0['play'] = function (wsjd, dnwsjx) {
      wsjd === void 0x0 && (wsjd = 0x0), dnwsjx === void 0x0 && (dnwsjx = 0x0);var jsco6;if (this['url'] == y$7r3a['_tMusic']) {
        if (!jcsnd['_musicAudio']) jcsnd['_musicAudio'] = jcsnd['_createSound']();jsco6 = jcsnd['_musicAudio'];
      } else jsco6 = jcsnd['_createSound']();jsco6['src'] = this['url'];var $yr3a7 = new _q2k54(jsco6);return $yr3a7['url'] = this['url'], $yr3a7['loops'] = dnwsjx, $yr3a7['startTime'] = wsjd, $yr3a7['play'](), y$7r3a['addChannel']($yr3a7), $yr3a7;
    }, htqmf0['dispose'] = function () {
      var dxwsen = jcsnd['_audioCache'][this['url']];dxwsen && (dxwsen['src'] = '', delete jcsnd['_audioCache'][this['url']]);
    }, c2o6j4(0x0, htqmf0, 'duration', function () {
      return this['_sound']['duration'];
    }), jcsnd['_createSound'] = function () {
      return jcsnd['_id']++, mvuibf['window']['wx']['createInnerAudioContext']();
    }, jcsnd['_musicAudio'] = null, jcsnd['_id'] = 0x0, jcsnd['_audioCache'] = {}, jcsnd['_null'] = undefined, jcsnd;
  }(wcjods),
      _q2k54 = function (tf05q) {
    function jd2oc6(tmqf0) {
      this['_audio'] = null, this['_onEnd'] = null, jd2oc6['__super']['call'](this), this['_audio'] = tmqf0, this['_onEnd'] = ivmft['bind'](this['__onEnd'], this), tmqf0['onEnded'](this['_onEnd']);
    }osjc(jd2oc6, 'laya.wx.mini.MiniSoundChannel', tf05q);var ibvumf = jd2oc6['prototype'];return ibvumf['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (w8nx['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ibvumf['__onNull'] = function () {}, ibvumf['play'] = function () {
      this['isStopped'] = ![], y$7r3a['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ibvumf['stop'] = function () {
      this['isStopped'] = !![], y$7r3a['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jd2oc6['_null'] != undefined) this['_audio']['onEnded'](jd2oc6['_null']);else try {
        this['_audio']['onEnded'](null), jd2oc6['_null'] = null;
      } catch (_5q4k0) {
        console['warn']('[wxmini] stop:' + _5q4k0), this['_audio']['onEnded'](ivmft['bind'](this['__onNull'], this)), jd2oc6['_null'] = ivmft['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ibvumf['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ibvumf['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], y$7r3a['addChannel'](this), this['_audio']['play']();
    }, c2o6j4(0x0, ibvumf, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), c2o6j4(0x0, ibvumf, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), c2o6j4(0x0, ibvumf, 'volume', function () {
      return 0x1;
    }, function (v9gbu1) {}), jd2oc6['_null'] = undefined, jd2oc6;
  }(i9b1u);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var imvtf in Laya) {
    var e8$r = Laya[imvtf];e8$r && e8$r['__isclass'] && (exports[imvtf] = e8$r);
  }
});