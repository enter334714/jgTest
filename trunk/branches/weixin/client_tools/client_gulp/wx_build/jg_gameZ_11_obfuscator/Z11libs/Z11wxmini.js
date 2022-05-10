var B = wx.$z;
(function (window, document, nq0ha) {
  var zm0hwf = nq0ha['un'],
      lt2vy = nq0ha['uns'],
      eojgrs = nq0ha['static'],
      ib2y7 = nq0ha['class'],
      o_grje = nq0ha['getset'],
      reoj_ = nq0ha['__newvec'],
      hna_qe = laya['utils']['Browser'],
      tyb2 = laya['events']['Event'],
      $ltvy2 = laya['events']['EventDispatcher'],
      dzf9mw = laya['resource']['HTMLImage'],
      d691f3 = laya['utils']['Handler'],
      k1p84x = laya['display']['Input'],
      yi5b27 = laya['net']['Loader'],
      en_hq = laya['maths']['Matrix'],
      f3dz6 = laya['renders']['Render'],
      m9w = laya['utils']['RunDriver'],
      $ytlv2 = laya['media']['Sound'],
      wfh = laya['media']['SoundChannel'],
      rsu = laya['media']['SoundManager'],
      aejg_q = laya['display']['Stage'],
      ha_qn = laya['net']['URL'],
      nqa0h_ = laya['utils']['Utils'],
      _agqej = function () {
    function bsu5i() {}return ib2y7(bsu5i, 'laya.wx.mini.MiniAdpter'), bsu5i['getJson'] = function (qahnm0) {
      return JSON['parse'](qahnm0);
    }, bsu5i['init'] = function (lt$5y2, $l5t2) {
      lt$5y2 === void 0x0 && (lt$5y2 = ![]), $l5t2 === void 0x0 && ($l5t2 = ![]);if (bsu5i['_inited']) return;bsu5i['window'] = window;if (bsu5i['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bsu5i['_inited'] = !![], bsu5i['isZiYu'] = $l5t2, bsu5i['isPosMsgYu'] = lt$5y2, bsu5i['EnvConfig'] = {}, !bsu5i['isZiYu'] && (p4681x['setNativeFileDir']('/layaairGame'), p4681x['existDir'](p4681x['fileNativeDir'], d691f3['create'](bsu5i, bsu5i['onMkdirCallBack']))), bsu5i['window']['focus'] = function () {}, nq0ha['getUrlPath'] = function () {}, bsu5i['window']['logtime'] = function (byiu5) {}, bsu5i['window']['alertTimeLog'] = function (zhnw0) {}, bsu5i['window']['resetShareInfo'] = function () {}, bsu5i['window']['CanvasRenderingContext2D'] = function () {}, bsu5i['window']['CanvasRenderingContext2D']['prototype'] = bsu5i['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bsu5i['window']['document']['body']['appendChild'] = function () {}, bsu5i['EnvConfig']['pixelRatioInt'] = 0x0, m9w['getPixelRatio'] = bsu5i['pixelRatio'], bsu5i['_preCreateElement'] = hna_qe['createElement'], hna_qe['createElement'] = bsu5i['createElement'], m9w['createShaderCondition'] = bsu5i['createShaderCondition'], nqa0h_['parseXMLFromString'] = bsu5i['parseXMLFromString'], k1p84x['_createInputElement'] = agn_['_createInputElement'], bsu5i['EnvConfig']['load'] = yi5b27['prototype']['load'], yi5b27['prototype']['load'] = wdmf9['prototype']['load'], bsu5i['isZiYu'] && lt$5y2 && wx['onMessage'](function (yt$v2) {
        yt$v2['isLoad'] && (p4681x['ziyuFileData'][yt$v2['url']] = yt$v2['data']);
      });
    }, bsu5i['onMkdirCallBack'] = function (boisu7, z9dw3f) {
      if (!boisu7) p4681x['filesListObj'] = JSON['parse'](z9dw3f['data']);
    }, bsu5i['pixelRatio'] = function () {
      if (!bsu5i['EnvConfig']['pixelRatioInt']) try {
        var geo_jr = wx['getSystemInfoSync']();return bsu5i['EnvConfig']['pixelRatioInt'] = geo_jr['pixelRatio'], geo_jr = geo_jr, geo_jr['pixelRatio'];
      } catch (_gjqe) {}return bsu5i['EnvConfig']['pixelRatioInt'];
    }, bsu5i['createElement'] = function (eg_qan) {
      if (eg_qan == 'canvas') {
        var df9wzm;return bsu5i['idx'] == 0x1 ? bsu5i['isZiYu'] ? (df9wzm = sharedCanvas, df9wzm['style'] = {}) : df9wzm = window['canvas'] : df9wzm = window['wx']['createCanvas'](), bsu5i['idx']++, df9wzm;
      } else {
        if (eg_qan == 'textarea' || eg_qan == 'input') return bsu5i['onCreateInput'](eg_qan);else {
          if (eg_qan == 'div') {
            var i5byu = bsu5i['_preCreateElement'](eg_qan);return i5byu['contains'] = function (f3z9w) {
              return null;
            }, i5byu['removeChild'] = function (hqe_) {}, i5byu;
          } else return bsu5i['_preCreateElement'](eg_qan);
        }
      }
    }, bsu5i['onCreateInput'] = function (z09fwm) {
      var ly2v$ = bsu5i['_preCreateElement'](z09fwm);return ly2v$['focus'] = agn_['wxinputFocus'], ly2v$['blur'] = agn_['wxinputblur'], ly2v$['style'] = {}, ly2v$['value'] = 0x0, ly2v$['parentElement'] = {}, ly2v$['placeholder'] = {}, ly2v$['type'] = {}, ly2v$['setColor'] = function (z0nmh) {}, ly2v$['setType'] = function (d3wf9z) {}, ly2v$['setFontFace'] = function (t$vly) {}, ly2v$['addEventListener'] = function (mzwh) {}, ly2v$['contains'] = function (uiby75) {
        return null;
      }, ly2v$['removeChild'] = function (gqaj) {}, ly2v$;
    }, bsu5i['createShaderCondition'] = function (i5sb) {
      var q0ma = this,
          x61d3 = function () {
        var l2t$vy = i5sb;return q0ma[i5sb['replace']('this.', '')];
      };return x61d3;
    }, bsu5i['EnvConfig'] = null, bsu5i['window'] = null, bsu5i['_preCreateElement'] = null, bsu5i['_inited'] = ![], bsu5i['wxRequest'] = null, bsu5i['systemInfo'] = null, bsu5i['version'] = '0.0.1', bsu5i['isZiYu'] = ![], bsu5i['isPosMsgYu'] = ![], bsu5i['parseXMLFromString'] = function (l25$ty) {
      var f963d1, w0f9;l25$ty = l25$ty['replace'](/>\s+</g, '><');try {
        f963d1 = new window['Parser']['DOMParser']()['parseFromString'](l25$ty, 'text/xml');
      } catch (tl2$yv) {
        throw '需要引入xml解析库文件';
      }return f963d1;
    }, bsu5i['idx'] = 0x1, bsu5i;
  }(),
      ej_a = function () {
    function sujgro() {}ib2y7(sujgro, 'laya.wx.mini.MiniImage');var e_gaqn = sujgro['prototype'];return e_gaqn['_loadImage'] = function (b527) {
      var $y2b = this,
          d318 = ![];b527['indexOf']('layaNativeDir/') == -0x1 && (d318 = !![], b527 = ha_qn['formatURL'](b527));if (!p4681x['getFileInfo'](b527)) {
        if (b527['indexOf']('http://') != -0x1 || b527['indexOf']('https://') != -0x1) p4681x['downImg'](b527, new d691f3(sujgro, sujgro['onDownImgCallBack'], [b527, $y2b]), b527);else sujgro['onCreateImage'](b527, $y2b, !![]);
      } else sujgro['onCreateImage'](b527, $y2b, !d318);
    }, sujgro['onDownImgCallBack'] = function ($lvy2, wmz9d, _eogjr) {
      if (!_eogjr) sujgro['onCreateImage']($lvy2, wmz9d);else wmz9d['onError'](null);
    }, sujgro['onCreateImage'] = function (aqm0nh, uiro, gsruo) {
      gsruo === void 0x0 && (gsruo = ![]);var gesojr;if (!gsruo) {
        var t57b2 = p4681x['getFileInfo'](aqm0nh),
            i5y7b2 = t57b2['md5'];gesojr = p4681x['getFileNativePath'](i5y7b2);
      } else gesojr = aqm0nh;if (uiro['imgCache'] == null) uiro['imgCache'] = {};var i2y57b;function bi72y5() {
        i2y57b['onload'] = null, i2y57b['onerror'] = null, delete uiro['imgCache'][aqm0nh];
      };var _hn0aq = function () {
        bi72y5(), uiro['onLoaded'](i2y57b);
      },
          t5$2by = function () {
        bi72y5(), uiro['event']('error', 'Load image failed');
      };uiro['_type'] == 'nativeimage' ? (i2y57b = new hna_qe['window']['Image'](), i2y57b['crossOrigin'] = '', i2y57b['onload'] = _hn0aq, i2y57b['onerror'] = t5$2by, i2y57b['src'] = gesojr, uiro['imgCache'][aqm0nh] = i2y57b) : new dzf9mw['create'](gesojr, { 'onload': _hn0aq, 'onerror': t5$2by, 'onCreate': function (oejrs) {
          i2y57b = oejrs, uiro['imgCache'][aqm0nh] = oejrs;
        } });
    }, sujgro;
  }(),
      agn_ = function () {
    function geaj() {}return ib2y7(geaj, 'laya.wx.mini.MiniInput'), geaj['_createInputElement'] = function () {
      k1p84x['_initInput'](k1p84x['area'] = hna_qe['createElement']('textarea')), k1p84x['_initInput'](k1p84x['input'] = hna_qe['createElement']('input')), k1p84x['inputContainer'] = hna_qe['createElement']('div'), k1p84x['inputContainer']['style']['position'] = 'absolute', k1p84x['inputContainer']['style']['zIndex'] = 0x186a0, hna_qe['container']['appendChild'](k1p84x['inputContainer']), k1p84x['inputContainer']['setPos'] = function (aj_qe, en_qa) {
        k1p84x['inputContainer']['style']['left'] = aj_qe + 'px', k1p84x['inputContainer']['style']['top'] = en_qa + 'px';
      }, nq0ha['stage']['on']('resize', null, geaj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jrousg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rsu['_soundClass'] = rgju, rsu['_musicClass'] = rgju, window['_videoClass'] = nqe_ga;
    }, geaj['_onStageResize'] = function () {
      var b75sui = nq0ha['stage']['_canvasTransform']['identity']();b75sui['scale'](hna_qe['width'] / f3dz6['canvas']['width'] / m9w['getPixelRatio'](), hna_qe['height'] / f3dz6['canvas']['height'] / m9w['getPixelRatio']());
    }, geaj['wxinputFocus'] = function (tb7y52) {
      var tv$ = k1p84x['inputElement']['target'];if (tv$ && !tv$['editable']) return;_agqej['window']['wx']['offKeyboardConfirm'](), _agqej['window']['wx']['offKeyboardInput'](), _agqej['window']['wx']['showKeyboard']({ 'defaultValue': tv$['text'], 'maxLength': tv$['maxChars'], 'multiple': tv$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_0aqn) {}, 'fail': function (hnzm) {} }), _agqej['window']['wx']['onKeyboardConfirm'](function (dmfwz9) {
        var naq_ = dmfwz9 ? dmfwz9['value'] : '';tv$['text'] = naq_, tv$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _agqej['window']['wx']['onKeyboardInput'](function (f0wmh) {
        var wz9m = f0wmh ? f0wmh['value'] : '';if (!tv$['multiline']) {
          if (wz9m['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }tv$['text'] = wz9m, tv$['event']('input');
      });
    }, geaj['inputEnter'] = function () {
      k1p84x['inputElement']['target']['focus'] = ![];
    }, geaj['wxinputblur'] = function () {
      geaj['hideKeyboard']();
    }, geaj['hideKeyboard'] = function () {
      _agqej['window']['wx']['offKeyboardConfirm'](), _agqej['window']['wx']['offKeyboardInput'](), _agqej['window']['wx']['hideKeyboard']({ 'success': function (x6831) {
          console['log']('隐藏键盘');
        }, 'fail': function (hnzw) {
          console['log']('隐藏键盘出错:' + (hnzw ? hnzw['errMsg'] : ''));
        } });
    }, geaj;
  }(),
      wdmf9 = function () {
    function x8164p() {}ib2y7(x8164p, 'laya.wx.mini.MiniLoader');var fz6d39 = x8164p['prototype'];return fz6d39['load'] = function (zmw0f, nmqah, gjeq_a, qmw0, osbu7) {
      gjeq_a === void 0x0 && (gjeq_a = !![]), osbu7 === void 0x0 && (osbu7 = ![]);var iy75u = this;iy75u['_url'] = zmw0f;if (zmw0f['indexOf']('data:image') === 0x0) iy75u['_type'] = nmqah = 'image';else iy75u['_type'] = nmqah || (nmqah = iy75u['getTypeFromUrl'](zmw0f));iy75u['_cache'] = gjeq_a, iy75u['_data'] = null;var y7iu5 = 'ascii';if (zmw0f['indexOf']('.fnt') != -0x1) y7iu5 = 'utf8';else nmqah == 'arraybuffer' && (y7iu5 = '');;var _oj = nqa0h_['getFileExtension'](zmw0f);if (x8164p['_fileTypeArr']['indexOf'](_oj) != -0x1) _agqej['EnvConfig']['load']['call'](this, zmw0f, nmqah, gjeq_a, qmw0, osbu7);else {
        if (!p4681x['getFileInfo'](zmw0f)) {
          if (zmw0f['indexOf']('layaNativeDir/') != -0x1) {
            if (_agqej['isZiYu']) {
              var sbou = p4681x['ziyuFileData'][zmw0f];iy75u['onLoaded'](sbou);return;
            } else {
              cosnole['log']('read read'), p4681x['read'](zmw0f, y7iu5, new d691f3(x8164p, x8164p['onReadNativeCallBack'], [y7iu5, zmw0f, nmqah, gjeq_a, qmw0, osbu7, iy75u]));return;
            }
          }if (ha_qn['rootPath'] == '') var zh0n = zmw0f;else zh0n = zmw0f['split'](ha_qn['rootPath'])[0x0];zmw0f['indexOf']('http://') != -0x1 || zmw0f['indexOf']('https://') != -0x1 ? _agqej['EnvConfig']['load']['call'](iy75u, zmw0f, nmqah, gjeq_a, qmw0, osbu7) : p4681x['readFile'](zh0n, y7iu5, new d691f3(x8164p, x8164p['onReadNativeCallBack'], [y7iu5, zmw0f, nmqah, gjeq_a, qmw0, osbu7, iy75u]), zmw0f);
        } else _agqej['EnvConfig']['load']['call'](this, zmw0f, nmqah, gjeq_a, qmw0, osbu7);
      }
    }, fz6d39['resMgrLoad'] = function (d96z3f, y$b25, ubi7so, b5$y, q0nhwm, iuby7, areg_j) {
      ubi7so === void 0x0 && (ubi7so = 0x0), b5$y === void 0x0 && (b5$y = ![]), q0nhwm === void 0x0 && (q0nhwm = ![]), iuby7 === void 0x0 && (iuby7 = 0x0), areg_j === void 0x0 && (areg_j = 0x3), d96z3f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d96z3f), _agqej['EnvConfig']['resMgrLoad'](d96z3f, (eo_r, d36f1, jugo) => {
        x8164p['prototype']['resMgrLoadCallBack'](eo_r, d36f1, jugo, y$b25);
      }, ubi7so, b5$y, q0nhwm, iuby7, areg_j);
    }, fz6d39['resMgrLoadCallBack'] = function (tb2, gajeq_, rujgso, ojisr) {
      console['log']('buff:::', tb2, rujgso, p4681x['fileNativeDir'] + '///' + p4681x['fileListName']), ojisr(tb2, gajeq_, rujgso);
    }, fz6d39['clearRes'] = function (p813, y$tb5) {
      y$tb5 === void 0x0 && (y$tb5 = ![]);var oersjg = this;oersjg['clearRes'](p813, y$tb5);var h0wzfm = p4681x['getFileInfo'](p813);if (h0wzfm && (p813['indexOf']('http://') != -0x1 || p813['indexOf']('https://') != -0x1)) {
        var nm0hqa = h0wzfm['md5'],
            urs7 = p4681x['getFileNativePath'](nm0hqa);p4681x['remove'](urs7);
      }
    }, x8164p['onReadNativeCallBack'] = function (x4p8k, iusro7, t2$5l, wzfm0, x18p46, _qage, p31x68, bs5u7, xp8641) {
      wzfm0 === void 0x0 && (wzfm0 = !![]), _qage === void 0x0 && (_qage = ![]), bs5u7 === void 0x0 && (bs5u7 = 0x0);if (!bs5u7) {
        var y75i2b;if (t2$5l == 'json' || t2$5l == 'atlas') y75i2b = _agqej['getJson'](xp8641['data']);else t2$5l == 'xml' ? y75i2b = nqa0h_['parseXMLFromString'](xp8641['data']) : y75i2b = xp8641['data'];p31x68['onLoaded'](y75i2b), !_agqej['isZiYu'] && _agqej['isPosMsgYu'] && t2$5l != 'arraybuffer' && wx['postMessage']({ 'url': iusro7, 'data': y75i2b, 'isLoad': !![] });
      } else bs5u7 == 0x1 && _agqej['EnvConfig']['load']['call'](p31x68, iusro7, t2$5l, wzfm0, x18p46, _qage);
    }, eojgrs(x8164p, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x8164p;
  }(),
      p4681x = function (ouirsj) {
    function jsoiur() {
      jsoiur['__super']['call'](this);;
    }return ib2y7(jsoiur, 'laya.wx.mini.MiniFileMgr', ouirsj), jsoiur['isLoadFile'] = function (gnqea_) {
      return jsoiur['_fileTypeArr']['indexOf'](gnqea_) != -0x1 ? !![] : ![];
    }, jsoiur['getFileInfo'] = function (ojer_g) {
      var tb2$y5 = ojer_g['split']('?')[0x0],
          hnq = jsoiur['filesListObj'][tb2$y5];if (hnq == null) return null;else return hnq;return null;
    }, jsoiur['onFileUpdate'] = function (fwm90z, sjroug) {
      var q0_h = fwm90z['split']('/'),
          zwd9f3 = q0_h[q0_h['length'] - 0x1],
          ou7sib = jsoiur['getFileInfo'](sjroug);if (ou7sib == null) jsoiur['onSaveFile'](sjroug, zwd9f3);else {
        if (ou7sib['readyUrl'] != sjroug) jsoiur['remove'](zwd9f3, sjroug);
      }
    }, jsoiur['exits'] = function (f6d91, i7obu) {
      var x1p48k = jsoiur['getFileNativePath'](f6d91);jsoiur['fs']['getFileInfo']({ 'filePath': x1p48k, 'success': function (erg_j) {
          i7obu != null && i7obu['runWith']([0x0, erg_j]);
        }, 'fail': function (x1p68) {
          i7obu != null && i7obu['runWith']([0x1, x1p68]);
        } });
    }, jsoiur['read'] = function (qj_eag, xp1648, en_aq, yi5u7b) {
      xp1648 === void 0x0 && (xp1648 = 'ascill'), yi5u7b === void 0x0 && (yi5u7b = '');var ha_q0;yi5u7b != '' ? ha_q0 = jsoiur['getFileNativePath'](qj_eag) : ha_q0 = qj_eag, jsoiur['fs']['readFile']({ 'filePath': ha_q0, 'encoding': xp1648, 'success': function (dfw9z) {
          en_aq != null && en_aq['runWith']([0x0, dfw9z]);
        }, 'fail': function (k18p4x) {
          if (k18p4x && yi5u7b != '') jsoiur['down'](yi5u7b, xp1648, en_aq, yi5u7b);else en_aq != null && en_aq['runWith']([0x1]);
        } });
    }, jsoiur['readNativeFile'] = function (eqa_gj, _geqja) {
      jsoiur['fs']['readFile']({ 'filePath': eqa_gj, 'encoding': '', 'success': function (mh0fzw) {
          _geqja != null && _geqja['runWith']([0x0]);
        }, 'fail': function (hea_q) {
          _geqja != null && _geqja['runWith']([0x1]);
        } });
    }, jsoiur['down'] = function (p1684x, ojsuir, px1468, $vlyt2) {
      ojsuir === void 0x0 && (ojsuir = 'ascill'), $vlyt2 === void 0x0 && ($vlyt2 = '');var jusgr = jsoiur['getFileNativePath']($vlyt2),
          l2y$t5 = jsoiur['wxdown']({ 'url': p1684x, 'filePath': jusgr, 'success': function (wmh0nq) {
          if (wmh0nq['statusCode'] === 0xc8) jsoiur['readFile'](wmh0nq['filePath'], ojsuir, px1468, $vlyt2);
        }, 'fail': function (b7yt25) {
          px1468 != null && px1468['runWith']([0x1, b7yt25]);
        } });l2y$t5['onProgressUpdate'](function (roegjs) {
        px1468 != null && px1468['runWith']([0x2, roegjs['progress']]);
      });
    }, jsoiur['readFile'] = function (n0hmwz, y7i5u, x4p18, fmz9w0) {
      y7i5u === void 0x0 && (y7i5u = 'ascill'), fmz9w0 === void 0x0 && (fmz9w0 = ''), jsoiur['fs']['readFile']({ 'filePath': n0hmwz, 'encoding': y7i5u, 'success': function (t2l$) {
          if (n0hmwz['indexOf']('http://') != -0x1 || n0hmwz['indexOf']('https://') != -0x1) jsoiur['onFileUpdate'](n0hmwz, fmz9w0);x4p18 != null && x4p18['runWith']([0x0, t2l$]);
        }, 'fail': function (aeq_ng) {
          if (aeq_ng) x4p18 != null && x4p18['runWith']([0x1, aeq_ng]);
        } });
    }, jsoiur['downImg'] = function (qmh0a, p41x8k, rgjse) {
      rgjse === void 0x0 && (rgjse = '');var _aerjg = jsoiur['wxdown']({ 'url': qmh0a, 'success': function (us7) {
          us7['statusCode'] === 0xc8 && jsoiur['copyFile'](us7['tempFilePath'], rgjse, p41x8k);
        }, 'fail': function (_neagq) {
          p41x8k != null && p41x8k['runWith']([0x1, _neagq]);
        } });
    }, jsoiur['copyFile'] = function (ibu7y, ousjr, _qgen) {
      var mnahq0 = ibu7y['split']('/'),
          wzh0fm = mnahq0[mnahq0['length'] - 0x1],
          fwmhz = ousjr['split']('?')[0x0],
          f36d = jsoiur['getFileInfo'](ousjr),
          h_qena = jsoiur['getFileNativePath'](wzh0fm);jsoiur['fs']['copyFile']({ 'srcPath': ibu7y, 'destPath': h_qena, 'success': function (esgjor) {
          if (!f36d) jsoiur['onSaveFile'](ousjr, wzh0fm), _qgen != null && _qgen['runWith']([0x0]);else {
            if (f36d['readyUrl'] != ousjr) jsoiur['remove'](wzh0fm, ousjr, _qgen);
          }
        }, 'fail': function (x3186) {
          _qgen != null && _qgen['runWith']([0x1, x3186]);
        } });
    }, jsoiur['getFileNativePath'] = function (zw9f3d) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zw9f3d;
    }, jsoiur['remove'] = function (anqh0_, qjg_ea, jsego) {
      qjg_ea === void 0x0 && (qjg_ea = '');var suior7 = jsoiur['getFileInfo'](qjg_ea),
          hnqa_ = jsoiur['getFileNativePath'](suior7['md5']);nq0ha['loader']['clearRes'](suior7['readyUrl']), jsoiur['fs']['unlink']({ 'filePath': hnqa_, 'success': function (l25ty$) {
          if (qjg_ea != '') jsoiur['onSaveFile'](qjg_ea, anqh0_);jsego != null && jsego['runWith']([0x0]);
        }, 'fail': function (roe_j) {} });
    }, jsoiur['onSaveFile'] = function (i275, jrsugo) {
      var v2ylt$ = i275['split']('?')[0x0];jsoiur['filesListObj'][v2ylt$] = { 'md5': jrsugo, 'readyUrl': i275 }, jsoiur['fs']['writeFile']({ 'filePath': jsoiur['fileNativeDir'] + '/' + jsoiur['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jsoiur['filesListObj']), 'success': function (osb7i) {
          console['log']('写入测试测试成功：', osb7i);
        }, 'fail': function (oriuj) {
          console['log']('写入测试测试失败：', oriuj);
        } });
    }, jsoiur['existDir'] = function (jusogr, jag_) {
      jsoiur['fs']['mkdir']({ 'dirPath': jusogr, 'success': function (dzf369) {
          jag_ != null && jag_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jsreog) {
          if (jsreog['errMsg']['indexOf']('file already exists') != -0x1) jsoiur['readSync'](jsoiur['fileListName'], 'utf8', jag_);else jag_ != null && jag_['runWith']([0x1, jsreog]);
        } });
    }, jsoiur['readSync'] = function (f3zd9w, _gjaeq, hmwn0q, uirjso) {
      _gjaeq === void 0x0 && (_gjaeq = 'ascill'), uirjso === void 0x0 && (uirjso = '');var soiur = jsoiur['getFileNativePath'](f3zd9w),
          oe_rj;try {
        oe_rj = jsoiur['fs']['readFileSync'](soiur), hmwn0q != null && hmwn0q['runWith']([0x0, { 'data': oe_rj }]);
      } catch (t5b2$) {
        hmwn0q != null && hmwn0q['runWith']([0x1]);
      }
    }, jsoiur['readCache'] = function () {}, jsoiur['writeCache'] = function (siubo7) {
      var eqga_n = readyUrl['split']('?')[0x0];jsoiur['filesListObj'][eqga_n] = { 'md5': md5Name, 'readyUrl': readyUrl }, jsoiur['fs']['writeFile']({ 'filePath': jsoiur['fileNativeDir'] + '/' + jsoiur['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jsoiur['filesListObj']), 'success': function (f6z39) {}, 'fail': function (nh0q_a) {} });
    }, jsoiur['setNativeFileDir'] = function (d96381) {
      jsoiur['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d96381;
    }, jsoiur['filesListObj'] = {}, jsoiur['fileNativeDir'] = null, jsoiur['fileListName'] = 'layaairfiles.txt', jsoiur['ziyuFileData'] = {}, eojgrs(jsoiur, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), jsoiur;
  }($ltvy2),
      rgju = function (tv2$yl) {
    function urosi() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], urosi['__super']['call'](this), this['_sound'] = urosi['_createSound'](), this['_chanell'] = new mwhnz0(this['_sound']);
    }ib2y7(urosi, 'laya.wx.mini.MiniSound', tv2$yl);var rea = urosi['prototype'];return rea['load'] = function (d968) {
      var rios = this;d968 = ha_qn['formatURL'](d968), this['url'] = d968;if (urosi['_audioCache'][d968]) {
        this['event']('complete');return;
      }function raej() {
        if (urosi['_null'] != undefined) rios['_sound']['onCanplay'](urosi['_null']), rios['_sound']['onError'](urosi['_null']);else try {
          rios['_sound']['onCanplay'](null), rios['_sound']['onError'](null), urosi['_null'] = null;
        } catch (oui7rs) {
          console['warn']('[wxmini] _clearSound:' + oui7rs), rios['_sound']['onCanplay'](e_gajr), rios['_sound']['onError'](e_gajr), urosi['_null'] = e_gajr;
        }
      }function _erj() {
        su7ro['loaded'] = !![], su7ro['event']('complete'), urosi['_audioCache'][su7ro['url']] = su7ro;
      }function eg_r(d83x61) {
        console['error']('errCode=' + d83x61['errCode'] + '  errMsg=' + d83x61['errMsg']), su7ro['event']('error');
      }function e_gajr() {}this['_sound']['onCanplay'](_erj), this['_sound']['onError'](eg_r), this['_sound']['src'] = d968;var su7ro = this;
    }, rea['play'] = function (wzf3d9, nhmwz) {
      wzf3d9 === void 0x0 && (wzf3d9 = 0x0), nhmwz === void 0x0 && (nhmwz = 0x0);var mz9fd, x6p48;if (this['url'] == rsu['_tMusic']) {
        if (!urosi['_musicAudio']) urosi['_musicAudio'] = this['_sound'];mz9fd = urosi['_musicAudio'], x6p48 = this['_chanell'];
      } else mz9fd = this['_sound'], x6p48 = this['_chanell'];return mz9fd['src'] = this['url'], mz9fd['startTime'] = 0x0, x6p48['isStopped'] && (x6p48['url'] = this['url'], x6p48['loops'] = nhmwz, x6p48['startTime'] = wzf3d9, x6p48['play'](), rsu['addChannel'](x6p48)), x6p48;
    }, rea['dispose'] = function () {
      var wfzd93 = urosi['_audioCache'][this['url']];wfzd93 && (wfzd93['src'] = '', delete urosi['_audioCache'][this['url']]);
    }, o_grje(0x0, rea, 'duration', function () {
      return this['_sound']['duration'];
    }), urosi['_createSound'] = function () {
      urosi['_id']++;var iujrs = _agqej['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return iujrs;
    }, urosi['_musicAudio'] = null, urosi['_id'] = 0x0, urosi['_audioCache'] = {}, urosi['_null'] = undefined, urosi;
  }($ltvy2),
      mwhnz0 = function (aejqg) {
    function z3fdw(an_gq) {
      this['_audio'] = null, this['_onEnd'] = null, z3fdw['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = an_gq, this['_onEnd'] = nqa0h_['bind'](this['__onEnd'], this), an_gq['onEnded'](this['_onEnd']);
    }ib2y7(z3fdw, 'laya.wx.mini.MiniSoundChannel', aejqg);var _roej = z3fdw['prototype'];return _roej['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nq0ha['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _roej['__onNull'] = function () {}, _roej['play'] = function () {
      this['isStopped'] = ![], rsu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _roej['stop'] = function () {
      this['isStopped'] = !![], rsu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, _roej['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _roej['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rsu['addChannel'](this), this['_audio']['play']();
    }, o_grje(0x0, _roej, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), o_grje(0x0, _roej, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), o_grje(0x0, _roej, 'volume', function () {
      return 0x1;
    }, function (x6d38) {}), z3fdw['_null'] = undefined, z3fdw;
  }(wfh),
      nqe_ga = function () {
    function riuj() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _agqej['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }ib2y7(riuj, 'laya.wx.mini.MiniVideo');var y2ib57 = riuj['prototype'];return y2ib57['on'] = function (oirusj, riosuj, $t5ly) {
      if (oirusj == 'loadedmetadata') this['onPlayFunc'] = $t5ly['bind'](riosuj), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else oirusj == 'ended' && (this['onEndedFunC'] = $t5ly['bind'](riosuj), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, y2ib57['onTimeUpdateFunc'] = function (_jerga) {
      this['position'] = _jerga['position'], this['_duration'] = _jerga['duration'];
    }, y2ib57['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, y2ib57['onended'] = function (uy5b7i, lvy$2t) {
      this['onEndedFunC'] = lvy$2t['bind'](uy5b7i), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, y2ib57['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, y2ib57['off'] = function (g_qnae, ogsje, iuj) {
      if (g_qnae == 'loadedmetadata') this['onPlayFunc'] = iuj['bind'](ogsje), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else g_qnae == 'ended' && (this['onEndedFunC'] = iuj['bind'](ogsje), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, y2ib57['load'] = function (eqa_nh) {
      if (!this['videoElement']) return;this['videoElement']['src'] = eqa_nh;
    }, y2ib57['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, y2ib57['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, y2ib57['size'] = function (orge_j, qeajg) {
      if (!this['videoElement']) return;this['videoElement']['width'] = orge_j, this['videoElement']['height'] = qeajg;
    }, y2ib57['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, y2ib57['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, o_grje(0x0, y2ib57, 'duration', function () {
      return this['_duration'];
    }), o_grje(0x0, y2ib57, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (erja_g) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = erja_g;
    }), o_grje(0x0, y2ib57, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), o_grje(0x0, y2ib57, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), o_grje(0x0, y2ib57, 'ended', function () {
      return this['videoend'];
    }), o_grje(0x0, y2ib57, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (mz90fw) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = mz90fw;
    }), o_grje(0x0, y2ib57, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (qma0h) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = qma0h;
    }), o_grje(0x0, y2ib57, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (tyl25) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = tyl25;
    }), o_grje(0x0, y2ib57, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), o_grje(0x0, y2ib57, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (k418p) {
      if (!this['videoElement']) return;this['videoElement']['x'] = k418p;
    }), o_grje(0x0, y2ib57, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (joiur) {
      if (!this['videoElement']) return;this['videoElement']['y'] = joiur;
    }), o_grje(0x0, y2ib57, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), o_grje(0x0, y2ib57, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (h0nwzm) {
      if (!this['videoElement']) return;this['videoElement']['src'] = h0nwzm;
    }), o_grje(0x0, y2ib57, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (x38p) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = x38p;
    }), o_grje(0x0, y2ib57, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (x164) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = x164;
    }), riuj;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var z3fw9 in Laya) {
    var hmwnz = Laya[z3fw9];hmwnz && hmwnz['__isclass'] && (exports[z3fw9] = hmwnz);
  }
});