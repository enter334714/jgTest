var C = wx.$a;
(function (window, document, mj_9) {
  var lkf60y = mj_9['un'],
      j4mz5 = mj_9['uns'],
      qsr_ = mj_9['static'],
      z45djm = mj_9['class'],
      f60k7 = mj_9['getset'],
      _mjz9c = mj_9['__newvec'],
      pn28e3 = laya['utils']['Browser'],
      p8nxb = laya['events']['Event'],
      s_c = laya['events']['EventDispatcher'],
      f0y$k = laya['resource']['HTMLImage'],
      cs_qv = laya['utils']['Handler'],
      otxbph = laya['display']['Input'],
      tdoh5i = laya['net']['Loader'],
      jzd9 = laya['maths']['Matrix'],
      zm5d4 = laya['renders']['Render'],
      $qlr0 = laya['utils']['RunDriver'],
      g8e3n = laya['media']['Sound'],
      vlk$0 = laya['media']['SoundChannel'],
      rs_cq9 = laya['media']['SoundManager'],
      d9m4j = laya['display']['Stage'],
      $0lfyk = laya['net']['URL'],
      e382np = laya['utils']['Utils'],
      j4_zm = function () {
    function e2p3n8() {}return z45djm(e2p3n8, 'laya.wx.mini.MiniAdpter'), e2p3n8['getJson'] = function (g8n23) {
      return JSON['parse'](g8n23);
    }, e2p3n8['init'] = function (f1u6, tjd4i5) {
      f1u6 === void 0x0 && (f1u6 = ![]), tjd4i5 === void 0x0 && (tjd4i5 = ![]);if (e2p3n8['_inited']) return;e2p3n8['window'] = window;if (e2p3n8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e2p3n8['_inited'] = !![], e2p3n8['isZiYu'] = tjd4i5, e2p3n8['isPosMsgYu'] = f1u6, e2p3n8['EnvConfig'] = {}, !e2p3n8['isZiYu'] && (pbhtxo['setNativeFileDir']('/layaairGame'), pbhtxo['existDir'](pbhtxo['fileNativeDir'], cs_qv['create'](e2p3n8, e2p3n8['onMkdirCallBack']))), e2p3n8['window']['focus'] = function () {}, mj_9['getUrlPath'] = function () {}, e2p3n8['window']['logtime'] = function (lfk$v0) {}, e2p3n8['window']['alertTimeLog'] = function (t5dhi) {}, e2p3n8['window']['resetShareInfo'] = function () {}, e2p3n8['window']['CanvasRenderingContext2D'] = function () {}, e2p3n8['window']['CanvasRenderingContext2D']['prototype'] = e2p3n8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e2p3n8['window']['document']['body']['appendChild'] = function () {}, e2p3n8['EnvConfig']['pixelRatioInt'] = 0x0, $qlr0['getPixelRatio'] = e2p3n8['pixelRatio'], e2p3n8['_preCreateElement'] = pn28e3['createElement'], pn28e3['createElement'] = e2p3n8['createElement'], $qlr0['createShaderCondition'] = e2p3n8['createShaderCondition'], e382np['parseXMLFromString'] = e2p3n8['parseXMLFromString'], otxbph['_createInputElement'] = _jzmc9['_createInputElement'], e2p3n8['EnvConfig']['load'] = tdoh5i['prototype']['load'], tdoh5i['prototype']['load'] = p82oxb['prototype']['load'], e2p3n8['isZiYu'] && f1u6 && wx['onMessage'](function (u6yf) {
        u6yf['isLoad'] && (pbhtxo['ziyuFileData'][u6yf['url']] = u6yf['data']);
      });
    }, e2p3n8['onMkdirCallBack'] = function (kl$0f, uw76y1) {
      if (!kl$0f) pbhtxo['filesListObj'] = JSON['parse'](uw76y1['data']);
    }, e2p3n8['pixelRatio'] = function () {
      if (!e2p3n8['EnvConfig']['pixelRatioInt']) try {
        var n8ge32 = wx['getSystemInfoSync']();return e2p3n8['EnvConfig']['pixelRatioInt'] = n8ge32['pixelRatio'], n8ge32 = n8ge32, n8ge32['pixelRatio'];
      } catch (y0kf76) {}return e2p3n8['EnvConfig']['pixelRatioInt'];
    }, e2p3n8['createElement'] = function (yfu671) {
      if (yfu671 == 'canvas') {
        var s9cq_r;return e2p3n8['idx'] == 0x1 ? e2p3n8['isZiYu'] ? (s9cq_r = sharedCanvas, s9cq_r['style'] = {}) : s9cq_r = window['canvas'] : s9cq_r = window['wx']['createCanvas'](), e2p3n8['idx']++, s9cq_r;
      } else {
        if (yfu671 == 'textarea' || yfu671 == 'input') return e2p3n8['onCreateInput'](yfu671);else {
          if (yfu671 == 'div') {
            var f176ky = e2p3n8['_preCreateElement'](yfu671);return f176ky['contains'] = function (ht4) {
              return null;
            }, f176ky['removeChild'] = function (zm9cs_) {}, f176ky;
          } else return e2p3n8['_preCreateElement'](yfu671);
        }
      }
    }, e2p3n8['onCreateInput'] = function (pxhob) {
      var d5t = e2p3n8['_preCreateElement'](pxhob);return d5t['focus'] = _jzmc9['wxinputFocus'], d5t['blur'] = _jzmc9['wxinputblur'], d5t['style'] = {}, d5t['value'] = 0x0, d5t['parentElement'] = {}, d5t['placeholder'] = {}, d5t['type'] = {}, d5t['setColor'] = function (h5oti) {}, d5t['setType'] = function (w7u6) {}, d5t['setFontFace'] = function (_smz9c) {}, d5t['addEventListener'] = function (y761kf) {}, d5t['contains'] = function (q0k) {
        return null;
      }, d5t['removeChild'] = function (m4dij) {}, d5t;
    }, e2p3n8['createShaderCondition'] = function (f06yl) {
      var obtxh = this,
          id54mj = function () {
        var ep823 = f06yl;return obtxh[f06yl['replace']('this.', '')];
      };return id54mj;
    }, e2p3n8['EnvConfig'] = null, e2p3n8['window'] = null, e2p3n8['_preCreateElement'] = null, e2p3n8['_inited'] = ![], e2p3n8['wxRequest'] = null, e2p3n8['systemInfo'] = null, e2p3n8['version'] = '0.0.1', e2p3n8['isZiYu'] = ![], e2p3n8['isPosMsgYu'] = ![], e2p3n8['parseXMLFromString'] = function (cr_qsv) {
      var qcvrs$, bopxth;cr_qsv = cr_qsv['replace'](/>\s+</g, '><');try {
        qcvrs$ = new window['Parser']['DOMParser']()['parseFromString'](cr_qsv, 'text/xml');
      } catch (f6yk0) {
        throw '需要引入xml解析库文件';
      }return qcvrs$;
    }, e2p3n8['idx'] = 0x1, e2p3n8;
  }(),
      hxpbo = function () {
    function wuy17() {}z45djm(wuy17, 'laya.wx.mini.MiniImage');var px82bn = wuy17['prototype'];return px82bn['_loadImage'] = function (obhixt) {
      var hbtiox = this,
          $vrsl = ![];obhixt['indexOf']('layaNativeDir/') == -0x1 && ($vrsl = !![], obhixt = $0lfyk['formatURL'](obhixt));if (!pbhtxo['getFileInfo'](obhixt)) {
        if (obhixt['indexOf']('http://') != -0x1 || obhixt['indexOf']('https://') != -0x1) pbhtxo['downImg'](obhixt, new cs_qv(wuy17, wuy17['onDownImgCallBack'], [obhixt, hbtiox]), obhixt);else wuy17['onCreateImage'](obhixt, hbtiox, !![]);
      } else wuy17['onCreateImage'](obhixt, hbtiox, !$vrsl);
    }, wuy17['onDownImgCallBack'] = function (_9zrc, z9cj, _rqs) {
      if (!_rqs) wuy17['onCreateImage'](_9zrc, z9cj);else z9cj['onError'](null);
    }, wuy17['onCreateImage'] = function (odi5h, j5di, xbhotp) {
      xbhotp === void 0x0 && (xbhotp = ![]);var htox5;if (!xbhotp) {
        var ht5oxi = pbhtxo['getFileInfo'](odi5h),
            btioh = ht5oxi['md5'];htox5 = pbhtxo['getFileNativePath'](btioh);
      } else htox5 = odi5h;if (j5di['imgCache'] == null) j5di['imgCache'] = {};var ql0v$r;function zj49m() {
        ql0v$r['onload'] = null, ql0v$r['onerror'] = null, delete j5di['imgCache'][odi5h];
      };var p8bne2 = function () {
        zj49m(), j5di['onLoaded'](ql0v$r);
      },
          kvlf$ = function () {
        zj49m(), j5di['event']('error', 'Load image failed');
      };j5di['_type'] == 'nativeimage' ? (ql0v$r = new pn28e3['window']['Image'](), ql0v$r['crossOrigin'] = '', ql0v$r['onload'] = p8bne2, ql0v$r['onerror'] = kvlf$, ql0v$r['src'] = htox5, j5di['imgCache'][odi5h] = ql0v$r) : new f0y$k['create'](htox5, { 'onload': p8bne2, 'onerror': kvlf$, 'onCreate': function (xop82) {
          ql0v$r = xop82, j5di['imgCache'][odi5h] = xop82;
        } });
    }, wuy17;
  }(),
      _jzmc9 = function () {
    function $lq0vk() {}return z45djm($lq0vk, 'laya.wx.mini.MiniInput'), $lq0vk['_createInputElement'] = function () {
      otxbph['_initInput'](otxbph['area'] = pn28e3['createElement']('textarea')), otxbph['_initInput'](otxbph['input'] = pn28e3['createElement']('input')), otxbph['inputContainer'] = pn28e3['createElement']('div'), otxbph['inputContainer']['style']['position'] = 'absolute', otxbph['inputContainer']['style']['zIndex'] = 0x186a0, pn28e3['container']['appendChild'](otxbph['inputContainer']), otxbph['inputContainer']['setPos'] = function (kvq0$, i5dht) {
        otxbph['inputContainer']['style']['left'] = kvq0$ + 'px', otxbph['inputContainer']['style']['top'] = i5dht + 'px';
      }, mj_9['stage']['on']('resize', null, $lq0vk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f0ly6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rs_cq9['_soundClass'] = txbohp, rs_cq9['_musicClass'] = txbohp;
    }, $lq0vk['_onStageResize'] = function () {
      var e832p = mj_9['stage']['_canvasTransform']['identity']();e832p['scale'](pn28e3['width'] / zm5d4['canvas']['width'] / $qlr0['getPixelRatio'](), pn28e3['height'] / zm5d4['canvas']['height'] / $qlr0['getPixelRatio']());
    }, $lq0vk['wxinputFocus'] = function (qsc$) {
      var vqlrs = otxbph['inputElement']['target'];if (vqlrs && !vqlrs['editable']) return;j4_zm['window']['wx']['offKeyboardConfirm'](), j4_zm['window']['wx']['offKeyboardInput'](), j4_zm['window']['wx']['showKeyboard']({ 'defaultValue': vqlrs['text'], 'maxLength': vqlrs['maxChars'], 'multiple': vqlrs['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (e2g8n) {}, 'fail': function (tih5ox) {} }), j4_zm['window']['wx']['onKeyboardConfirm'](function (ix5to) {
        var cq9sr_ = ix5to ? ix5to['value'] : '';vqlrs['text'] = cq9sr_, vqlrs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), j4_zm['window']['wx']['onKeyboardInput'](function (vrc$qs) {
        var f6y17k = vrc$qs ? vrc$qs['value'] : '';if (!vqlrs['multiline']) {
          if (f6y17k['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }vqlrs['text'] = f6y17k, vqlrs['event']('input');
      });
    }, $lq0vk['inputEnter'] = function () {
      otxbph['inputElement']['target']['focus'] = ![];
    }, $lq0vk['wxinputblur'] = function () {
      $lq0vk['hideKeyboard']();
    }, $lq0vk['hideKeyboard'] = function () {
      j4_zm['window']['wx']['offKeyboardConfirm'](), j4_zm['window']['wx']['offKeyboardInput'](), j4_zm['window']['wx']['hideKeyboard']({ 'success': function (j4m_9) {
          console['log']('隐藏键盘');
        }, 'fail': function (bpxho) {
          console['log']('隐藏键盘出错:' + (bpxho ? bpxho['errMsg'] : ''));
        } });
    }, $lq0vk;
  }(),
      p82oxb = function () {
    function iodh5() {}z45djm(iodh5, 'laya.wx.mini.MiniLoader');var c$r = iodh5['prototype'];return c$r['load'] = function (qvr$sc, vsc_qr, z4jd9, $fl0vk, lq0r$) {
      z4jd9 === void 0x0 && (z4jd9 = !![]), lq0r$ === void 0x0 && (lq0r$ = ![]);var j_9c = this;j_9c['_url'] = qvr$sc;if (qvr$sc['indexOf']('data:image') === 0x0) j_9c['_type'] = vsc_qr = 'image';else j_9c['_type'] = vsc_qr || (vsc_qr = j_9c['getTypeFromUrl'](qvr$sc));j_9c['_cache'] = z4jd9, j_9c['_data'] = null;var u716 = 'ascii';if (qvr$sc['indexOf']('.fnt') != -0x1) u716 = 'utf8';else vsc_qr == 'arraybuffer' && (u716 = '');;var dzm45 = e382np['getFileExtension'](qvr$sc);if (iodh5['_fileTypeArr']['indexOf'](dzm45) != -0x1) j4_zm['EnvConfig']['load']['call'](this, qvr$sc, vsc_qr, z4jd9, $fl0vk, lq0r$);else {
        if (!pbhtxo['getFileInfo'](qvr$sc)) {
          if (qvr$sc['indexOf']('layaNativeDir/') != -0x1) {
            if (j4_zm['isZiYu']) {
              var t5ioh = pbhtxo['ziyuFileData'][qvr$sc];j_9c['onLoaded'](t5ioh);return;
            } else {
              cosnole['log']('read read'), pbhtxo['read'](qvr$sc, u716, new cs_qv(iodh5, iodh5['onReadNativeCallBack'], [u716, qvr$sc, vsc_qr, z4jd9, $fl0vk, lq0r$, j_9c]));return;
            }
          }if ($0lfyk['rootPath'] == '') var vs$cqr = qvr$sc;else vs$cqr = qvr$sc['split']($0lfyk['rootPath'])[0x0];qvr$sc['indexOf']('http://') != -0x1 || qvr$sc['indexOf']('https://') != -0x1 ? j4_zm['EnvConfig']['load']['call'](j_9c, qvr$sc, vsc_qr, z4jd9, $fl0vk, lq0r$) : pbhtxo['readFile'](vs$cqr, u716, new cs_qv(iodh5, iodh5['onReadNativeCallBack'], [u716, qvr$sc, vsc_qr, z4jd9, $fl0vk, lq0r$, j_9c]), qvr$sc);
        } else j4_zm['EnvConfig']['load']['call'](this, qvr$sc, vsc_qr, z4jd9, $fl0vk, lq0r$);
      }
    }, c$r['resMgrLoad'] = function (_mj4, c9sq_, tho5id, w17uy6, jm49, tij4, pob28) {
      tho5id === void 0x0 && (tho5id = 0x0), w17uy6 === void 0x0 && (w17uy6 = ![]), jm49 === void 0x0 && (jm49 = ![]), tij4 === void 0x0 && (tij4 = 0x0), pob28 === void 0x0 && (pob28 = 0x3), _mj4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _mj4), j4_zm['EnvConfig']['resMgrLoad'](_mj4, (np28eb, j_mz9, $vrqs) => {
        iodh5['prototype']['resMgrLoadCallBack'](np28eb, j_mz9, $vrqs, c9sq_);
      }, tho5id, w17uy6, jm49, tij4, pob28);
    }, c$r['resMgrLoadCallBack'] = function (dji4, pxhto, klv0, fk17y6) {
      console['log']('buff:::', dji4, klv0, pbhtxo['fileNativeDir'] + '///' + pbhtxo['fileListName']), fk17y6(dji4, pxhto, klv0);
    }, c$r['clearRes'] = function (z_m9cs, v$r0lq) {
      v$r0lq === void 0x0 && (v$r0lq = ![]);var hit4 = this;hit4['clearRes'](z_m9cs, v$r0lq);var $k0 = pbhtxo['getFileInfo'](z_m9cs);if ($k0 && (z_m9cs['indexOf']('http://') != -0x1 || z_m9cs['indexOf']('https://') != -0x1)) {
        var _crqs = $k0['md5'],
            p832en = pbhtxo['getFileNativePath'](_crqs);pbhtxo['remove'](p832en);
      }
    }, iodh5['onReadNativeCallBack'] = function (zm5dj, t4ji5, qs9c_, y0k7, l$vq0r, lf0$vk, eg23n8, n8pe3, d4jm) {
      y0k7 === void 0x0 && (y0k7 = !![]), lf0$vk === void 0x0 && (lf0$vk = ![]), n8pe3 === void 0x0 && (n8pe3 = 0x0);if (!n8pe3) {
        var hboxp;if (qs9c_ == 'json' || qs9c_ == 'atlas') hboxp = j4_zm['getJson'](d4jm['data']);else qs9c_ == 'xml' ? hboxp = e382np['parseXMLFromString'](d4jm['data']) : hboxp = d4jm['data'];eg23n8['onLoaded'](hboxp), !j4_zm['isZiYu'] && j4_zm['isPosMsgYu'] && qs9c_ != 'arraybuffer' && wx['postMessage']({ 'url': t4ji5, 'data': hboxp, 'isLoad': !![] });
      } else n8pe3 == 0x1 && j4_zm['EnvConfig']['load']['call'](eg23n8, t4ji5, qs9c_, y0k7, l$vq0r, lf0$vk);
    }, qsr_(iodh5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), iodh5;
  }(),
      pbhtxo = function (qk0$v) {
    function zs9_rc() {
      zs9_rc['__super']['call'](this);;
    }return z45djm(zs9_rc, 'laya.wx.mini.MiniFileMgr', qk0$v), zs9_rc['isLoadFile'] = function (qcsvr) {
      return zs9_rc['_fileTypeArr']['indexOf'](qcsvr) != -0x1 ? !![] : ![];
    }, zs9_rc['getFileInfo'] = function (ebpn82) {
      var $srlvq = ebpn82['split']('?')[0x0],
          y16u7w = zs9_rc['filesListObj'][$srlvq];if (y16u7w == null) return null;else return y16u7w;return null;
    }, zs9_rc['onFileUpdate'] = function (csvqr_, hbxop) {
      var nb2x = csvqr_['split']('/'),
          rqc9s_ = nb2x[nb2x['length'] - 0x1],
          ebn8p = zs9_rc['getFileInfo'](hbxop);if (ebn8p == null) zs9_rc['onSaveFile'](hbxop, rqc9s_);else {
        if (ebn8p['readyUrl'] != hbxop) zs9_rc['remove'](rqc9s_, hbxop);
      }
    }, zs9_rc['exits'] = function (jt54d, n8eg32) {
      var e23g = zs9_rc['getFileNativePath'](jt54d);zs9_rc['fs']['getFileInfo']({ 'filePath': e23g, 'success': function (mj94z) {
          n8eg32 != null && n8eg32['runWith']([0x0, mj94z]);
        }, 'fail': function (jzm9_c) {
          n8eg32 != null && n8eg32['runWith']([0x1, jzm9_c]);
        } });
    }, zs9_rc['read'] = function (ne28, qk$l0v, xpnb82, u7y1) {
      qk$l0v === void 0x0 && (qk$l0v = 'ascill'), u7y1 === void 0x0 && (u7y1 = '');var dz9m4j;u7y1 != '' ? dz9m4j = zs9_rc['getFileNativePath'](ne28) : dz9m4j = ne28, zs9_rc['fs']['readFile']({ 'filePath': dz9m4j, 'encoding': qk$l0v, 'success': function (oh5it) {
          xpnb82 != null && xpnb82['runWith']([0x0, oh5it]);
        }, 'fail': function (txbhi) {
          if (txbhi && u7y1 != '') zs9_rc['down'](u7y1, qk$l0v, xpnb82, u7y1);else xpnb82 != null && xpnb82['runWith']([0x1]);
        } });
    }, zs9_rc['readNativeFile'] = function (jcm_, $vrcqs) {
      zs9_rc['fs']['readFile']({ 'filePath': jcm_, 'encoding': '', 'success': function (i4t5) {
          $vrcqs != null && $vrcqs['runWith']([0x0]);
        }, 'fail': function (idoth) {
          $vrcqs != null && $vrcqs['runWith']([0x1]);
        } });
    }, zs9_rc['down'] = function (mzj9d4, k6f0, htob, s$lvrq) {
      k6f0 === void 0x0 && (k6f0 = 'ascill'), s$lvrq === void 0x0 && (s$lvrq = '');var mij54d = zs9_rc['getFileNativePath'](s$lvrq),
          fk0$lv = zs9_rc['wxdown']({ 'url': mzj9d4, 'filePath': mij54d, 'success': function (w71u6y) {
          if (w71u6y['statusCode'] === 0xc8) zs9_rc['readFile'](w71u6y['filePath'], k6f0, htob, s$lvrq);
        }, 'fail': function (f7y1u) {
          htob != null && htob['runWith']([0x1, f7y1u]);
        } });fk0$lv['onProgressUpdate'](function (m9zsc_) {
        htob != null && htob['runWith']([0x2, m9zsc_['progress']]);
      });
    }, zs9_rc['readFile'] = function (vrslq$, wy16u, djm94, j5mid) {
      wy16u === void 0x0 && (wy16u = 'ascill'), j5mid === void 0x0 && (j5mid = ''), zs9_rc['fs']['readFile']({ 'filePath': vrslq$, 'encoding': wy16u, 'success': function (u1yw67) {
          if (vrslq$['indexOf']('http://') != -0x1 || vrslq$['indexOf']('https://') != -0x1) zs9_rc['onFileUpdate'](vrslq$, j5mid);djm94 != null && djm94['runWith']([0x0, u1yw67]);
        }, 'fail': function (u17w6) {
          if (u17w6) djm94 != null && djm94['runWith']([0x1, u17w6]);
        } });
    }, zs9_rc['downImg'] = function (k7y06f, md54zj, p2oh) {
      p2oh === void 0x0 && (p2oh = '');var p2bh = zs9_rc['wxdown']({ 'url': k7y06f, 'success': function (ohbx2p) {
          ohbx2p['statusCode'] === 0xc8 && zs9_rc['copyFile'](ohbx2p['tempFilePath'], p2oh, md54zj);
        }, 'fail': function (x8ob) {
          md54zj != null && md54zj['runWith']([0x1, x8ob]);
        } });
    }, zs9_rc['copyFile'] = function (tpxbo, mjd45i, csr_q) {
      var ji4dm5 = tpxbo['split']('/'),
          qc9_sr = ji4dm5[ji4dm5['length'] - 0x1],
          l$qvk0 = mjd45i['split']('?')[0x0],
          xto5i = zs9_rc['getFileInfo'](mjd45i),
          j9_m4z = zs9_rc['getFileNativePath'](qc9_sr);zs9_rc['fs']['copyFile']({ 'srcPath': tpxbo, 'destPath': j9_m4z, 'success': function (kv$0l) {
          if (!xto5i) zs9_rc['onSaveFile'](mjd45i, qc9_sr), csr_q != null && csr_q['runWith']([0x0]);else {
            if (xto5i['readyUrl'] != mjd45i) zs9_rc['remove'](qc9_sr, mjd45i, csr_q);
          }
        }, 'fail': function (b2e8pn) {
          csr_q != null && csr_q['runWith']([0x1, b2e8pn]);
        } });
    }, zs9_rc['getFileNativePath'] = function (i5odh) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + i5odh;
    }, zs9_rc['remove'] = function (s9mz_c, bxo8, op8x2) {
      bxo8 === void 0x0 && (bxo8 = '');var sczr9_ = zs9_rc['getFileInfo'](bxo8),
          sc_r9q = zs9_rc['getFileNativePath'](sczr9_['md5']);mj_9['loader']['clearRes'](sczr9_['readyUrl']), zs9_rc['fs']['unlink']({ 'filePath': sc_r9q, 'success': function (scv$qr) {
          if (bxo8 != '') zs9_rc['onSaveFile'](bxo8, s9mz_c);op8x2 != null && op8x2['runWith']([0x0]);
        }, 'fail': function (m4jid5) {} });
    }, zs9_rc['onSaveFile'] = function (htpb, u6f71) {
      var z_s9cm = htpb['split']('?')[0x0];zs9_rc['filesListObj'][z_s9cm] = { 'md5': u6f71, 'readyUrl': htpb }, zs9_rc['fs']['writeFile']({ 'filePath': zs9_rc['fileNativeDir'] + '/' + zs9_rc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zs9_rc['filesListObj']), 'success': function (jm4z9) {
          console['log']('写入测试测试成功：', jm4z9);
        }, 'fail': function (f0$lvk) {
          console['log']('写入测试测试失败：', f0$lvk);
        } });
    }, zs9_rc['existDir'] = function (rcz_9, bhtoi) {
      zs9_rc['fs']['mkdir']({ 'dirPath': rcz_9, 'success': function (eg2n3) {
          bhtoi != null && bhtoi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (othpbx) {
          if (othpbx['errMsg']['indexOf']('file already exists') != -0x1) zs9_rc['readSync'](zs9_rc['fileListName'], 'utf8', bhtoi);else bhtoi != null && bhtoi['runWith']([0x1, othpbx]);
        } });
    }, zs9_rc['readSync'] = function (_csqv, wyu617, yu1f, vrsqc) {
      wyu617 === void 0x0 && (wyu617 = 'ascill'), vrsqc === void 0x0 && (vrsqc = '');var fkl$v0 = zs9_rc['getFileNativePath'](_csqv),
          td4i5;try {
        td4i5 = zs9_rc['fs']['readFileSync'](fkl$v0), yu1f != null && yu1f['runWith']([0x0, { 'data': td4i5 }]);
      } catch (j9mdz) {
        yu1f != null && yu1f['runWith']([0x1]);
      }
    }, zs9_rc['readCache'] = function () {}, zs9_rc['writeCache'] = function (rscq9_) {
      var q$v0kl = readyUrl['split']('?')[0x0];zs9_rc['filesListObj'][q$v0kl] = { 'md5': md5Name, 'readyUrl': readyUrl }, zs9_rc['fs']['writeFile']({ 'filePath': zs9_rc['fileNativeDir'] + '/' + zs9_rc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zs9_rc['filesListObj']), 'success': function (hito5x) {}, 'fail': function (crq_9) {} });
    }, zs9_rc['setNativeFileDir'] = function (vls$rq) {
      zs9_rc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vls$rq;
    }, zs9_rc['filesListObj'] = {}, zs9_rc['fileNativeDir'] = null, zs9_rc['fileListName'] = 'layaairfiles.txt', zs9_rc['ziyuFileData'] = {}, qsr_(zs9_rc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), zs9_rc;
  }(s_c),
      txbohp = function (ti54h) {
    function m9szc() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], m9szc['__super']['call'](this), this['_sound'] = m9szc['_createSound']();
    }z45djm(m9szc, 'laya.wx.mini.MiniSound', ti54h);var dth45i = m9szc['prototype'];return dth45i['load'] = function (tijd5) {
      var qk$lv = this;tijd5 = $0lfyk['formatURL'](tijd5), this['url'] = tijd5;if (m9szc['_audioCache'][tijd5]) {
        this['event']('complete');return;
      }function z4m5dj() {
        if (m9szc['_null'] != undefined) qk$lv['_sound']['onCanplay'](m9szc['_null']), qk$lv['_sound']['onError'](m9szc['_null']);else try {
          qk$lv['_sound']['onCanplay'](null), qk$lv['_sound']['onError'](null), m9szc['_null'] = null;
        } catch (gne382) {
          console['warn']('[wxmini] _clearSound:' + gne382), qk$lv['_sound']['onCanplay'](bthoxi), qk$lv['_sound']['onError'](bthoxi), m9szc['_null'] = bthoxi;
        }
      }function z9_jm() {
        z4m5dj(), q0vl$k['loaded'] = !![], q0vl$k['event']('complete'), m9szc['_audioCache'][q0vl$k['url']] = q0vl$k;
      }function z_cs(hbtoix) {
        console['error']('errCode=' + hbtoix['errCode'] + '  errMsg=' + hbtoix['errMsg']), z4m5dj(), q0vl$k['event']('error');
      }function bthoxi() {}this['_sound']['onCanplay'](z9_jm), this['_sound']['onError'](z_cs), this['_sound']['src'] = tijd5;var q0vl$k = this;
    }, dth45i['play'] = function (h45dti, rl0vq$) {
      h45dti === void 0x0 && (h45dti = 0x0), rl0vq$ === void 0x0 && (rl0vq$ = 0x0);var lq$0r;if (this['url'] == rs_cq9['_tMusic']) {
        if (!m9szc['_musicAudio']) m9szc['_musicAudio'] = m9szc['_createSound']();lq$0r = m9szc['_musicAudio'];
      } else lq$0r = m9szc['_createSound']();lq$0r['src'] = this['url'];var pxhbt = new f7y16(lq$0r);return pxhbt['url'] = this['url'], pxhbt['loops'] = rl0vq$, pxhbt['startTime'] = h45dti, pxhbt['play'](), rs_cq9['addChannel'](pxhbt), pxhbt;
    }, dth45i['dispose'] = function () {
      var ohb2x = m9szc['_audioCache'][this['url']];ohb2x && (ohb2x['src'] = '', delete m9szc['_audioCache'][this['url']]);
    }, f60k7(0x0, dth45i, 'duration', function () {
      return this['_sound']['duration'];
    }), m9szc['_createSound'] = function () {
      return m9szc['_id']++, j4_zm['window']['wx']['createInnerAudioContext']();
    }, m9szc['_musicAudio'] = null, m9szc['_id'] = 0x0, m9szc['_audioCache'] = {}, m9szc['_null'] = undefined, m9szc;
  }(s_c),
      f7y16 = function (k0$y) {
    function n8px2(cm) {
      this['_audio'] = null, this['_onEnd'] = null, n8px2['__super']['call'](this), this['_audio'] = cm, this['_onEnd'] = e382np['bind'](this['__onEnd'], this), cm['onEnded'](this['_onEnd']);
    }z45djm(n8px2, 'laya.wx.mini.MiniSoundChannel', k0$y);var o5xit = n8px2['prototype'];return o5xit['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (mj_9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, o5xit['__onNull'] = function () {}, o5xit['play'] = function () {
      this['isStopped'] = ![], rs_cq9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, o5xit['stop'] = function () {
      this['isStopped'] = !![], rs_cq9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n8px2['_null'] != undefined) this['_audio']['onEnded'](n8px2['_null']);else try {
        this['_audio']['onEnded'](null), n8px2['_null'] = null;
      } catch (eng82) {
        console['warn']('[wxmini] stop:' + eng82), this['_audio']['onEnded'](e382np['bind'](this['__onNull'], this)), n8px2['_null'] = e382np['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, o5xit['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, o5xit['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rs_cq9['addChannel'](this), this['_audio']['play']();
    }, f60k7(0x0, o5xit, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f60k7(0x0, o5xit, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f60k7(0x0, o5xit, 'volume', function () {
      return 0x1;
    }, function (m_j4z) {}), n8px2['_null'] = undefined, n8px2;
  }(vlk$0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _rqc9 in Laya) {
    var g3n2e8 = Laya[_rqc9];g3n2e8 && g3n2e8['__isclass'] && (exports[_rqc9] = g3n2e8);
  }
});