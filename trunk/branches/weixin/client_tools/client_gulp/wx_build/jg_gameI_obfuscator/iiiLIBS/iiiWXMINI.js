var Q = wx.$I;
(function (window, document, k403m9) {
  var crnb7 = k403m9['un'],
      zf8yei = k403m9['uns'],
      mlk94 = k403m9['static'],
      n27vbc = k403m9['class'],
      f8gy5 = k403m9['getset'],
      n6vbq1 = k403m9['__newvec'],
      sjrht = laya['utils']['Browser'],
      g5p = laya['events']['Event'],
      vc7b = laya['events']['EventDispatcher'],
      xpe = laya['resource']['HTMLImage'],
      $_3oa9 = laya['utils']['Handler'],
      stwj = laya['display']['Input'],
      x1g5 = laya['net']['Loader'],
      rh7sc2 = laya['maths']['Matrix'],
      aoz3$_ = laya['renders']['Render'],
      ei8fy5 = laya['utils']['RunDriver'],
      y8izfe = laya['media']['Sound'],
      _aiz = laya['media']['SoundChannel'],
      jtsr2h = laya['media']['SoundManager'],
      px61g5 = laya['display']['Stage'],
      sr2tj = laya['net']['URL'],
      rsh7t = laya['utils']['Utils'],
      bnqvc7 = function () {
    function rn72b() {}return n27vbc(rn72b, 'laya.wx.mini.MiniAdpter'), rn72b['getJson'] = function (c27) {
      return JSON['parse'](c27);
    }, rn72b['init'] = function (k$a39_, v61nqp) {
      k$a39_ === void 0x0 && (k$a39_ = ![]), v61nqp === void 0x0 && (v61nqp = ![]);if (rn72b['_inited']) return;rn72b['window'] = window;if (rn72b['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rn72b['_inited'] = !![], rn72b['isZiYu'] = v61nqp, rn72b['isPosMsgYu'] = k$a39_, rn72b['EnvConfig'] = {}, !rn72b['isZiYu'] && (bnv72c['setNativeFileDir']('/layaairGame'), bnv72c['existDir'](bnv72c['fileNativeDir'], $_3oa9['create'](rn72b, rn72b['onMkdirCallBack']))), rn72b['window']['focus'] = function () {}, k403m9['getUrlPath'] = function () {}, rn72b['window']['logtime'] = function (rt7h) {}, rn72b['window']['alertTimeLog'] = function (_z$3) {}, rn72b['window']['resetShareInfo'] = function () {}, rn72b['window']['CanvasRenderingContext2D'] = function () {}, rn72b['window']['CanvasRenderingContext2D']['prototype'] = rn72b['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rn72b['window']['document']['body']['appendChild'] = function () {}, rn72b['EnvConfig']['pixelRatioInt'] = 0x0, ei8fy5['getPixelRatio'] = rn72b['pixelRatio'], rn72b['_preCreateElement'] = sjrht['createElement'], sjrht['createElement'] = rn72b['createElement'], ei8fy5['createShaderCondition'] = rn72b['createShaderCondition'], rsh7t['parseXMLFromString'] = rn72b['parseXMLFromString'], stwj['_createInputElement'] = p6x1gq['_createInputElement'], rn72b['EnvConfig']['load'] = x1g5['prototype']['load'], x1g5['prototype']['load'] = l0k4m['prototype']['load'], rn72b['isZiYu'] && k$a39_ && wx['onMessage'](function (oa3$_z) {
        oa3$_z['isLoad'] && (bnv72c['ziyuFileData'][oa3$_z['url']] = oa3$_z['data']);
      });
    }, rn72b['onMkdirCallBack'] = function (tjwhds, lm490k) {
      if (!tjwhds) bnv72c['filesListObj'] = JSON['parse'](lm490k['data']);
    }, rn72b['pixelRatio'] = function () {
      if (!rn72b['EnvConfig']['pixelRatioInt']) try {
        var csr7h2 = wx['getSystemInfoSync']();return rn72b['EnvConfig']['pixelRatioInt'] = csr7h2['pixelRatio'], csr7h2 = csr7h2, csr7h2['pixelRatio'];
      } catch (srjtw) {}return rn72b['EnvConfig']['pixelRatioInt'];
    }, rn72b['createElement'] = function (za_$oi) {
      if (za_$oi == 'canvas') {
        var nv6q1p;return rn72b['idx'] == 0x1 ? rn72b['isZiYu'] ? (nv6q1p = sharedCanvas, nv6q1p['style'] = {}) : nv6q1p = window['canvas'] : nv6q1p = window['wx']['createCanvas'](), rn72b['idx']++, nv6q1p;
      } else {
        if (za_$oi == 'textarea' || za_$oi == 'input') return rn72b['onCreateInput'](za_$oi);else {
          if (za_$oi == 'div') {
            var qg1p = rn72b['_preCreateElement'](za_$oi);return qg1p['contains'] = function (k49l) {
              return null;
            }, qg1p['removeChild'] = function (eoizy8) {}, qg1p;
          } else return rn72b['_preCreateElement'](za_$oi);
        }
      }
    }, rn72b['onCreateInput'] = function (i5yef) {
      var a0_3k = rn72b['_preCreateElement'](i5yef);return a0_3k['focus'] = p6x1gq['wxinputFocus'], a0_3k['blur'] = p6x1gq['wxinputblur'], a0_3k['style'] = {}, a0_3k['value'] = 0x0, a0_3k['parentElement'] = {}, a0_3k['placeholder'] = {}, a0_3k['type'] = {}, a0_3k['setColor'] = function (n16qb) {}, a0_3k['setType'] = function (rs2ch7) {}, a0_3k['setFontFace'] = function (npq16v) {}, a0_3k['addEventListener'] = function (thjrws) {}, a0_3k['contains'] = function (e8yioz) {
        return null;
      }, a0_3k['removeChild'] = function (qp1gx6) {}, a0_3k;
    }, rn72b['createShaderCondition'] = function (htjwsr) {
      var $k = this,
          px1v = function () {
        var srth7 = htjwsr;return $k[htjwsr['replace']('this.', '')];
      };return px1v;
    }, rn72b['EnvConfig'] = null, rn72b['window'] = null, rn72b['_preCreateElement'] = null, rn72b['_inited'] = ![], rn72b['wxRequest'] = null, rn72b['systemInfo'] = null, rn72b['version'] = '0.0.1', rn72b['isZiYu'] = ![], rn72b['isPosMsgYu'] = ![], rn72b['parseXMLFromString'] = function (oy8) {
      var gfex5p, jhswt;oy8 = oy8['replace'](/>\s+</g, '><');try {
        gfex5p = new window['Parser']['DOMParser']()['parseFromString'](oy8, 'text/xml');
      } catch (iz_) {
        throw '需要引入xml解析库文件';
      }return gfex5p;
    }, rn72b['idx'] = 0x1, rn72b;
  }(),
      zo3a$_ = function () {
    function thswj() {}n27vbc(thswj, 'laya.wx.mini.MiniImage');var k90 = thswj['prototype'];return k90['_loadImage'] = function (f8y5ei) {
      var e8yif = this,
          ncv6qb = ![];f8y5ei['indexOf']('layaNativeDir/') == -0x1 && (ncv6qb = !![], f8y5ei = sr2tj['formatURL'](f8y5ei));if (!bnv72c['getFileInfo'](f8y5ei)) {
        if (f8y5ei['indexOf']('http://') != -0x1 || f8y5ei['indexOf']('https://') != -0x1) bnv72c['downImg'](f8y5ei, new $_3oa9(thswj, thswj['onDownImgCallBack'], [f8y5ei, e8yif]), f8y5ei);else thswj['onCreateImage'](f8y5ei, e8yif, !![]);
      } else thswj['onCreateImage'](f8y5ei, e8yif, !ncv6qb);
    }, thswj['onDownImgCallBack'] = function (srht7, zoy8$, a4k039) {
      if (!a4k039) thswj['onCreateImage'](srht7, zoy8$);else zoy8$['onError'](null);
    }, thswj['onCreateImage'] = function (b72rnc, hstjdw, fe5yg) {
      fe5yg === void 0x0 && (fe5yg = ![]);var i8_oz;if (!fe5yg) {
        var rwthj = bnv72c['getFileInfo'](b72rnc),
            juwhtd = rwthj['md5'];i8_oz = bnv72c['getFileNativePath'](juwhtd);
      } else i8_oz = b72rnc;if (hstjdw['imgCache'] == null) hstjdw['imgCache'] = {};var htjw;function h2rc() {
        htjw['onload'] = null, htjw['onerror'] = null, delete hstjdw['imgCache'][b72rnc];
      };var z_3o$ = function () {
        h2rc(), hstjdw['onLoaded'](htjw);
      },
          hjsr2 = function () {
        h2rc(), hstjdw['event']('error', 'Load image failed');
      };hstjdw['_type'] == 'nativeimage' ? (htjw = new sjrht['window']['Image'](), htjw['crossOrigin'] = '', htjw['onload'] = z_3o$, htjw['onerror'] = hjsr2, htjw['src'] = i8_oz, hstjdw['imgCache'][b72rnc] = htjw) : new xpe['create'](i8_oz, { 'onload': z_3o$, 'onerror': hjsr2, 'onCreate': function (wsj) {
          htjw = wsj, hstjdw['imgCache'][b72rnc] = wsj;
        } });
    }, thswj;
  }(),
      p6x1gq = function () {
    function dtwuhj() {}return n27vbc(dtwuhj, 'laya.wx.mini.MiniInput'), dtwuhj['_createInputElement'] = function () {
      stwj['_initInput'](stwj['area'] = sjrht['createElement']('textarea')), stwj['_initInput'](stwj['input'] = sjrht['createElement']('input')), stwj['inputContainer'] = sjrht['createElement']('div'), stwj['inputContainer']['style']['position'] = 'absolute', stwj['inputContainer']['style']['zIndex'] = 0x186a0, sjrht['container']['appendChild'](stwj['inputContainer']), stwj['inputContainer']['setPos'] = function ($3a9, a3k) {
        stwj['inputContainer']['style']['left'] = $3a9 + 'px', stwj['inputContainer']['style']['top'] = a3k + 'px';
      }, k403m9['stage']['on']('resize', null, dtwuhj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (n1q6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jtsr2h['_soundClass'] = qp6xv, jtsr2h['_musicClass'] = qp6xv;
    }, dtwuhj['_onStageResize'] = function () {
      var ie8oz = k403m9['stage']['_canvasTransform']['identity']();ie8oz['scale'](sjrht['width'] / aoz3$_['canvas']['width'] / ei8fy5['getPixelRatio'](), sjrht['height'] / aoz3$_['canvas']['height'] / ei8fy5['getPixelRatio']());
    }, dtwuhj['wxinputFocus'] = function (eyz8oi) {
      var pxe = stwj['inputElement']['target'];if (pxe && !pxe['editable']) return;bnqvc7['window']['wx']['offKeyboardConfirm'](), bnqvc7['window']['wx']['offKeyboardInput'](), bnqvc7['window']['wx']['showKeyboard']({ 'defaultValue': pxe['text'], 'maxLength': pxe['maxChars'], 'multiple': pxe['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ge8y5) {}, 'fail': function (nvq61) {} }), bnqvc7['window']['wx']['onKeyboardConfirm'](function (utd) {
        var ife8zy = utd ? utd['value'] : '';pxe['text'] = ife8zy, pxe['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bnqvc7['window']['wx']['onKeyboardInput'](function (vbn61) {
        var z$io8 = vbn61 ? vbn61['value'] : '';if (!pxe['multiline']) {
          if (z$io8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }pxe['text'] = z$io8, pxe['event']('input');
      });
    }, dtwuhj['inputEnter'] = function () {
      stwj['inputElement']['target']['focus'] = ![];
    }, dtwuhj['wxinputblur'] = function () {
      dtwuhj['hideKeyboard']();
    }, dtwuhj['hideKeyboard'] = function () {
      bnqvc7['window']['wx']['offKeyboardConfirm'](), bnqvc7['window']['wx']['offKeyboardInput'](), bnqvc7['window']['wx']['hideKeyboard']({ 'success': function (dtwjh) {
          console['log']('隐藏键盘');
        }, 'fail': function (e85yi) {
          console['log']('隐藏键盘出错:' + (e85yi ? e85yi['errMsg'] : ''));
        } });
    }, dtwuhj;
  }(),
      l0k4m = function () {
    function ka3_09() {}n27vbc(ka3_09, 'laya.wx.mini.MiniLoader');var cs7r = ka3_09['prototype'];return cs7r['load'] = function (cb72sr, gx1q6p, cs72b, xgeyf5, m3k49) {
      cs72b === void 0x0 && (cs72b = !![]), m3k49 === void 0x0 && (m3k49 = ![]);var bqvnc = this;bqvnc['_url'] = cb72sr;if (cb72sr['indexOf']('data:image') === 0x0) bqvnc['_type'] = gx1q6p = 'image';else bqvnc['_type'] = gx1q6p || (gx1q6p = bqvnc['getTypeFromUrl'](cb72sr));bqvnc['_cache'] = cs72b, bqvnc['_data'] = null;var gpxf51 = 'ascii';if (cb72sr['indexOf']('.fnt') != -0x1) gpxf51 = 'utf8';else gx1q6p == 'arraybuffer' && (gpxf51 = '');;var vpq1x = rsh7t['getFileExtension'](cb72sr);if (ka3_09['_fileTypeArr']['indexOf'](vpq1x) != -0x1) bnqvc7['EnvConfig']['load']['call'](this, cb72sr, gx1q6p, cs72b, xgeyf5, m3k49);else {
        if (!bnv72c['getFileInfo'](cb72sr)) {
          if (cb72sr['indexOf']('layaNativeDir/') != -0x1) {
            if (bnqvc7['isZiYu']) {
              var ak490 = bnv72c['ziyuFileData'][cb72sr];bqvnc['onLoaded'](ak490);return;
            } else {
              cosnole['log']('read read'), bnv72c['read'](cb72sr, gpxf51, new $_3oa9(ka3_09, ka3_09['onReadNativeCallBack'], [gpxf51, cb72sr, gx1q6p, cs72b, xgeyf5, m3k49, bqvnc]));return;
            }
          }if (sr2tj['rootPath'] == '') var i$oz_ = cb72sr;else i$oz_ = cb72sr['split'](sr2tj['rootPath'])[0x0];cb72sr['indexOf']('http://') != -0x1 || cb72sr['indexOf']('https://') != -0x1 ? bnqvc7['EnvConfig']['load']['call'](bqvnc, cb72sr, gx1q6p, cs72b, xgeyf5, m3k49) : bnv72c['readFile'](i$oz_, gpxf51, new $_3oa9(ka3_09, ka3_09['onReadNativeCallBack'], [gpxf51, cb72sr, gx1q6p, cs72b, xgeyf5, m3k49, bqvnc]), cb72sr);
        } else bnqvc7['EnvConfig']['load']['call'](this, cb72sr, gx1q6p, cs72b, xgeyf5, m3k49);
      }
    }, cs7r['resMgrLoad'] = function (m90l4, _3o9$a, izoy8$, qpv, c7vbn, oi$_8z, ye8) {
      izoy8$ === void 0x0 && (izoy8$ = 0x0), qpv === void 0x0 && (qpv = ![]), c7vbn === void 0x0 && (c7vbn = ![]), oi$_8z === void 0x0 && (oi$_8z = 0x0), ye8 === void 0x0 && (ye8 = 0x3), m90l4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m90l4), bnqvc7['EnvConfig']['resMgrLoad'](m90l4, (jswd, stdwh, oazi) => {
        ka3_09['prototype']['resMgrLoadCallBack'](jswd, stdwh, oazi, _3o9$a);
      }, izoy8$, qpv, c7vbn, oi$_8z, ye8);
    }, cs7r['resMgrLoadCallBack'] = function (pxv61q, vqb6c, bcrn7, _ka039) {
      console['log']('buff:::', pxv61q, bcrn7, bnv72c['fileNativeDir'] + '///' + bnv72c['fileListName']), _ka039(pxv61q, vqb6c, bcrn7);
    }, cs7r['clearRes'] = function (rwjhs, l9km4) {
      l9km4 === void 0x0 && (l9km4 = ![]);var q6xpg1 = this;q6xpg1['clearRes'](rwjhs, l9km4);var nc72rb = bnv72c['getFileInfo'](rwjhs);if (nc72rb && (rwjhs['indexOf']('http://') != -0x1 || rwjhs['indexOf']('https://') != -0x1)) {
        var iy8fez = nc72rb['md5'],
            hdjuwt = bnv72c['getFileNativePath'](iy8fez);bnv72c['remove'](hdjuwt);
      }
    }, ka3_09['onReadNativeCallBack'] = function (b27vn, $oa3_9, zi$o_8, eg5y8f, qp16xv, _oa$z, q6pxv1, hjwsr, nbcr27) {
      eg5y8f === void 0x0 && (eg5y8f = !![]), _oa$z === void 0x0 && (_oa$z = ![]), hjwsr === void 0x0 && (hjwsr = 0x0);if (!hjwsr) {
        var crb7;if (zi$o_8 == 'json' || zi$o_8 == 'atlas') crb7 = bnqvc7['getJson'](nbcr27['data']);else zi$o_8 == 'xml' ? crb7 = rsh7t['parseXMLFromString'](nbcr27['data']) : crb7 = nbcr27['data'];q6pxv1['onLoaded'](crb7), !bnqvc7['isZiYu'] && bnqvc7['isPosMsgYu'] && zi$o_8 != 'arraybuffer' && wx['postMessage']({ 'url': $oa3_9, 'data': crb7, 'isLoad': !![] });
      } else hjwsr == 0x1 && bnqvc7['EnvConfig']['load']['call'](q6pxv1, $oa3_9, zi$o_8, eg5y8f, qp16xv, _oa$z);
    }, mlk94(ka3_09, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ka3_09;
  }(),
      bnv72c = function (dtwhsj) {
    function rs2t7() {
      rs2t7['__super']['call'](this);;
    }return n27vbc(rs2t7, 'laya.wx.mini.MiniFileMgr', dtwhsj), rs2t7['isLoadFile'] = function (zyoe8) {
      return rs2t7['_fileTypeArr']['indexOf'](zyoe8) != -0x1 ? !![] : ![];
    }, rs2t7['getFileInfo'] = function ($_3ak9) {
      var y8 = $_3ak9['split']('?')[0x0],
          z$3_a = rs2t7['filesListObj'][y8];if (z$3_a == null) return null;else return z$3_a;return null;
    }, rs2t7['onFileUpdate'] = function (ef5g8y, m30) {
      var sb7r2c = ef5g8y['split']('/'),
          cq6nbv = sb7r2c[sb7r2c['length'] - 0x1],
          zai_ = rs2t7['getFileInfo'](m30);if (zai_ == null) rs2t7['onSaveFile'](m30, cq6nbv);else {
        if (zai_['readyUrl'] != m30) rs2t7['remove'](cq6nbv, m30);
      }
    }, rs2t7['exits'] = function (z8yoi, xp1vq) {
      var a$9o3 = rs2t7['getFileNativePath'](z8yoi);rs2t7['fs']['getFileInfo']({ 'filePath': a$9o3, 'success': function (jutwdh) {
          xp1vq != null && xp1vq['runWith']([0x0, jutwdh]);
        }, 'fail': function (_ka03) {
          xp1vq != null && xp1vq['runWith']([0x1, _ka03]);
        } });
    }, rs2t7['read'] = function (r2n7c, nvcq7b, a9$o3_, k3_$) {
      nvcq7b === void 0x0 && (nvcq7b = 'ascill'), k3_$ === void 0x0 && (k3_$ = '');var px15f;k3_$ != '' ? px15f = rs2t7['getFileNativePath'](r2n7c) : px15f = r2n7c, rs2t7['fs']['readFile']({ 'filePath': px15f, 'encoding': nvcq7b, 'success': function (rjth) {
          a9$o3_ != null && a9$o3_['runWith']([0x0, rjth]);
        }, 'fail': function (nc72b) {
          if (nc72b && k3_$ != '') rs2t7['down'](k3_$, nvcq7b, a9$o3_, k3_$);else a9$o3_ != null && a9$o3_['runWith']([0x1]);
        } });
    }, rs2t7['readNativeFile'] = function (_z3o$a, r72t) {
      rs2t7['fs']['readFile']({ 'filePath': _z3o$a, 'encoding': '', 'success': function (vpq61) {
          r72t != null && r72t['runWith']([0x0]);
        }, 'fail': function (o_za3$) {
          r72t != null && r72t['runWith']([0x1]);
        } });
    }, rs2t7['down'] = function (yg5f8, nv2cb, a3_$o, ncr72) {
      nv2cb === void 0x0 && (nv2cb = 'ascill'), ncr72 === void 0x0 && (ncr72 = '');var shwtj = rs2t7['getFileNativePath'](ncr72),
          tdwuh = rs2t7['wxdown']({ 'url': yg5f8, 'filePath': shwtj, 'success': function (yxfe5) {
          if (yxfe5['statusCode'] === 0xc8) rs2t7['readFile'](yxfe5['filePath'], nv2cb, a3_$o, ncr72);
        }, 'fail': function (r2hsc7) {
          a3_$o != null && a3_$o['runWith']([0x1, r2hsc7]);
        } });tdwuh['onProgressUpdate'](function (tjwhs) {
        a3_$o != null && a3_$o['runWith']([0x2, tjwhs['progress']]);
      });
    }, rs2t7['readFile'] = function (c6bnvq, xgepf5, fiye8, g5x16) {
      xgepf5 === void 0x0 && (xgepf5 = 'ascill'), g5x16 === void 0x0 && (g5x16 = ''), rs2t7['fs']['readFile']({ 'filePath': c6bnvq, 'encoding': xgepf5, 'success': function (rjhwts) {
          if (c6bnvq['indexOf']('http://') != -0x1 || c6bnvq['indexOf']('https://') != -0x1) rs2t7['onFileUpdate'](c6bnvq, g5x16);fiye8 != null && fiye8['runWith']([0x0, rjhwts]);
        }, 'fail': function (k93a4) {
          if (k93a4) fiye8 != null && fiye8['runWith']([0x1, k93a4]);
        } });
    }, rs2t7['downImg'] = function (yozie, t72rhs, str27) {
      str27 === void 0x0 && (str27 = '');var juth = rs2t7['wxdown']({ 'url': yozie, 'success': function (l09km) {
          l09km['statusCode'] === 0xc8 && rs2t7['copyFile'](l09km['tempFilePath'], str27, t72rhs);
        }, 'fail': function (i$yo) {
          t72rhs != null && t72rhs['runWith']([0x1, i$yo]);
        } });
    }, rs2t7['copyFile'] = function (rsjhwt, cb72, qcb7) {
      var th2rs7 = rsjhwt['split']('/'),
          _k930a = th2rs7[th2rs7['length'] - 0x1],
          ncq = cb72['split']('?')[0x0],
          wudthj = rs2t7['getFileInfo'](cb72),
          gx5yef = rs2t7['getFileNativePath'](_k930a);rs2t7['fs']['copyFile']({ 'srcPath': rsjhwt, 'destPath': gx5yef, 'success': function (dswhj) {
          if (!wudthj) rs2t7['onSaveFile'](cb72, _k930a), qcb7 != null && qcb7['runWith']([0x0]);else {
            if (wudthj['readyUrl'] != cb72) rs2t7['remove'](_k930a, cb72, qcb7);
          }
        }, 'fail': function (nqvp16) {
          qcb7 != null && qcb7['runWith']([0x1, nqvp16]);
        } });
    }, rs2t7['getFileNativePath'] = function (djuh) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + djuh;
    }, rs2t7['remove'] = function (dtswhj, xg5pef, n16vpq) {
      xg5pef === void 0x0 && (xg5pef = '');var rc2nb7 = rs2t7['getFileInfo'](xg5pef),
          dhtwj = rs2t7['getFileNativePath'](rc2nb7['md5']);k403m9['loader']['clearRes'](rc2nb7['readyUrl']), rs2t7['fs']['unlink']({ 'filePath': dhtwj, 'success': function (sj2hr) {
          if (xg5pef != '') rs2t7['onSaveFile'](xg5pef, dtswhj);n16vpq != null && n16vpq['runWith']([0x0]);
        }, 'fail': function (rtj2hs) {} });
    }, rs2t7['onSaveFile'] = function (vbnc2, t2rjs) {
      var qbnv1 = vbnc2['split']('?')[0x0];rs2t7['filesListObj'][qbnv1] = { 'md5': t2rjs, 'readyUrl': vbnc2 }, rs2t7['fs']['writeFile']({ 'filePath': rs2t7['fileNativeDir'] + '/' + rs2t7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rs2t7['filesListObj']), 'success': function (a_z3$o) {
          console['log']('写入测试测试成功：', a_z3$o);
        }, 'fail': function (vn27) {
          console['log']('写入测试测试失败：', vn27);
        } });
    }, rs2t7['existDir'] = function (jdsht, yz$8o) {
      rs2t7['fs']['mkdir']({ 'dirPath': jdsht, 'success': function (o_$) {
          yz$8o != null && yz$8o['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (js2thr) {
          if (js2thr['errMsg']['indexOf']('file already exists') != -0x1) rs2t7['readSync'](rs2t7['fileListName'], 'utf8', yz$8o);else yz$8o != null && yz$8o['runWith']([0x1, js2thr]);
        } });
    }, rs2t7['readSync'] = function (st7rh2, io_z8, k_a9$, crn27) {
      io_z8 === void 0x0 && (io_z8 = 'ascill'), crn27 === void 0x0 && (crn27 = '');var a3_9o$ = rs2t7['getFileNativePath'](st7rh2),
          fe58y;try {
        fe58y = rs2t7['fs']['readFileSync'](a3_9o$), k_a9$ != null && k_a9$['runWith']([0x0, { 'data': fe58y }]);
      } catch (c7rhs) {
        k_a9$ != null && k_a9$['runWith']([0x1]);
      }
    }, rs2t7['readCache'] = function () {}, rs2t7['writeCache'] = function (srhj2) {
      var q6p1vx = readyUrl['split']('?')[0x0];rs2t7['filesListObj'][q6p1vx] = { 'md5': md5Name, 'readyUrl': readyUrl }, rs2t7['fs']['writeFile']({ 'filePath': rs2t7['fileNativeDir'] + '/' + rs2t7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rs2t7['filesListObj']), 'success': function (_k39$) {}, 'fail': function (a$_zi) {} });
    }, rs2t7['setNativeFileDir'] = function (z8yfei) {
      rs2t7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + z8yfei;
    }, rs2t7['filesListObj'] = {}, rs2t7['fileNativeDir'] = null, rs2t7['fileListName'] = 'layaairfiles.txt', rs2t7['ziyuFileData'] = {}, mlk94(rs2t7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rs2t7;
  }(vc7b),
      qp6xv = function (s2jh) {
    function jduhtw() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jduhtw['__super']['call'](this), this['_sound'] = jduhtw['_createSound']();
    }n27vbc(jduhtw, 'laya.wx.mini.MiniSound', s2jh);var i8zfey = jduhtw['prototype'];return i8zfey['load'] = function (pv16q) {
      var l94 = this;pv16q = sr2tj['formatURL'](pv16q), this['url'] = pv16q;if (jduhtw['_audioCache'][pv16q]) {
        this['event']('complete');return;
      }function b7vn2c() {
        if (jduhtw['_null'] != undefined) l94['_sound']['onCanplay'](jduhtw['_null']), l94['_sound']['onError'](jduhtw['_null']);else try {
          l94['_sound']['onCanplay'](null), l94['_sound']['onError'](null), jduhtw['_null'] = null;
        } catch (nc7vb) {
          console['warn']('[wxmini] _clearSound:' + nc7vb), l94['_sound']['onCanplay'](i$z8), l94['_sound']['onError'](i$z8), jduhtw['_null'] = i$z8;
        }
      }function m934k0() {
        b7vn2c(), zify8e['loaded'] = !![], zify8e['event']('complete'), jduhtw['_audioCache'][zify8e['url']] = zify8e;
      }function vn1q6(x56g1) {
        console['error']('errCode=' + x56g1['errCode'] + '  errMsg=' + x56g1['errMsg']), b7vn2c(), zify8e['event']('error');
      }function i$z8() {}this['_sound']['onCanplay'](m934k0), this['_sound']['onError'](vn1q6), this['_sound']['src'] = pv16q;var zify8e = this;
    }, i8zfey['play'] = function (g8ey5, qvc7) {
      g8ey5 === void 0x0 && (g8ey5 = 0x0), qvc7 === void 0x0 && (qvc7 = 0x0);var yfie5;if (this['url'] == jtsr2h['_tMusic']) {
        if (!jduhtw['_musicAudio']) jduhtw['_musicAudio'] = jduhtw['_createSound']();yfie5 = jduhtw['_musicAudio'];
      } else yfie5 = jduhtw['_createSound']();yfie5['src'] = this['url'];var a9k$3_ = new hrwtsj(yfie5);return a9k$3_['url'] = this['url'], a9k$3_['loops'] = qvc7, a9k$3_['startTime'] = g8ey5, a9k$3_['play'](), jtsr2h['addChannel'](a9k$3_), a9k$3_;
    }, i8zfey['dispose'] = function () {
      var m09kl4 = jduhtw['_audioCache'][this['url']];m09kl4 && (m09kl4['src'] = '', delete jduhtw['_audioCache'][this['url']]);
    }, f8gy5(0x0, i8zfey, 'duration', function () {
      return this['_sound']['duration'];
    }), jduhtw['_createSound'] = function () {
      return jduhtw['_id']++, bnqvc7['window']['wx']['createInnerAudioContext']();
    }, jduhtw['_musicAudio'] = null, jduhtw['_id'] = 0x0, jduhtw['_audioCache'] = {}, jduhtw['_null'] = undefined, jduhtw;
  }(vc7b),
      hrwtsj = function (_8iz) {
    function twhdjs(feygx5) {
      this['_audio'] = null, this['_onEnd'] = null, twhdjs['__super']['call'](this), this['_audio'] = feygx5, this['_onEnd'] = rsh7t['bind'](this['__onEnd'], this), feygx5['onEnded'](this['_onEnd']);
    }n27vbc(twhdjs, 'laya.wx.mini.MiniSoundChannel', _8iz);var b2v7c = twhdjs['prototype'];return b2v7c['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (k403m9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, b2v7c['__onNull'] = function () {}, b2v7c['play'] = function () {
      this['isStopped'] = ![], jtsr2h['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, b2v7c['stop'] = function () {
      this['isStopped'] = !![], jtsr2h['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (twhdjs['_null'] != undefined) this['_audio']['onEnded'](twhdjs['_null']);else try {
        this['_audio']['onEnded'](null), twhdjs['_null'] = null;
      } catch (zoey) {
        console['warn']('[wxmini] stop:' + zoey), this['_audio']['onEnded'](rsh7t['bind'](this['__onNull'], this)), twhdjs['_null'] = rsh7t['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, b2v7c['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, b2v7c['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jtsr2h['addChannel'](this), this['_audio']['play']();
    }, f8gy5(0x0, b2v7c, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f8gy5(0x0, b2v7c, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f8gy5(0x0, b2v7c, 'volume', function () {
      return 0x1;
    }, function (cnr7b2) {}), twhdjs['_null'] = undefined, twhdjs;
  }(_aiz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var yefx5g in Laya) {
    var x5y = Laya[yefx5g];x5y && x5y['__isclass'] && (exports[yefx5g] = x5y);
  }
});