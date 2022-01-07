var C = wx.$a;
(function (window, document, j49mz_) {
  var ti54j = j49mz_['un'],
      kf0y76 = j49mz_['uns'],
      mczs_ = j49mz_['static'],
      qsc_ = j49mz_['class'],
      mj5i4d = j49mz_['getset'],
      fy0k6 = j49mz_['__newvec'],
      scq_9r = laya['utils']['Browser'],
      thbp = laya['events']['Event'],
      to5ihx = laya['events']['EventDispatcher'],
      pothx = laya['resource']['HTMLImage'],
      f0kyl6 = laya['utils']['Handler'],
      u1f7y6 = laya['display']['Input'],
      rlqs$v = laya['net']['Loader'],
      c9j_mz = laya['maths']['Matrix'],
      v0lkq = laya['renders']['Render'],
      l$kf0y = laya['utils']['RunDriver'],
      c_9sq = laya['media']['Sound'],
      q9cs_r = laya['media']['SoundChannel'],
      ihd45 = laya['media']['SoundManager'],
      box = laya['display']['Stage'],
      k$q0l = laya['net']['URL'],
      kfy076 = laya['utils']['Utils'],
      $k0ylf = function () {
    function jzm_c9() {}return qsc_(jzm_c9, 'laya.wx.mini.MiniAdpter'), jzm_c9['getJson'] = function (id4h5) {
      return JSON['parse'](id4h5);
    }, jzm_c9['init'] = function (ly$f, zrc9) {
      ly$f === void 0x0 && (ly$f = ![]), zrc9 === void 0x0 && (zrc9 = ![]);if (jzm_c9['_inited']) return;jzm_c9['window'] = window;if (jzm_c9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;jzm_c9['_inited'] = !![], jzm_c9['isZiYu'] = zrc9, jzm_c9['isPosMsgYu'] = ly$f, jzm_c9['EnvConfig'] = {}, !jzm_c9['isZiYu'] && (fk0ly$['setNativeFileDir']('/layaairGame'), fk0ly$['existDir'](fk0ly$['fileNativeDir'], f0kyl6['create'](jzm_c9, jzm_c9['onMkdirCallBack']))), jzm_c9['window']['focus'] = function () {}, j49mz_['getUrlPath'] = function () {}, jzm_c9['window']['logtime'] = function (xhbtoi) {}, jzm_c9['window']['alertTimeLog'] = function (u7w61) {}, jzm_c9['window']['resetShareInfo'] = function () {}, jzm_c9['window']['CanvasRenderingContext2D'] = function () {}, jzm_c9['window']['CanvasRenderingContext2D']['prototype'] = jzm_c9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jzm_c9['window']['document']['body']['appendChild'] = function () {}, jzm_c9['EnvConfig']['pixelRatioInt'] = 0x0, l$kf0y['getPixelRatio'] = jzm_c9['pixelRatio'], jzm_c9['_preCreateElement'] = scq_9r['createElement'], scq_9r['createElement'] = jzm_c9['createElement'], l$kf0y['createShaderCondition'] = jzm_c9['createShaderCondition'], kfy076['parseXMLFromString'] = jzm_c9['parseXMLFromString'], u1f7y6['_createInputElement'] = jim4['_createInputElement'], jzm_c9['EnvConfig']['load'] = rlqs$v['prototype']['load'], rlqs$v['prototype']['load'] = g2e3n['prototype']['load'], jzm_c9['isZiYu'] && ly$f && wx['onMessage'](function (dzj) {
        dzj['isLoad'] && (fk0ly$['ziyuFileData'][dzj['url']] = dzj['data']);
      });
    }, jzm_c9['onMkdirCallBack'] = function (tdi5h, czs_9r) {
      if (!tdi5h) fk0ly$['filesListObj'] = JSON['parse'](czs_9r['data']);
    }, jzm_c9['pixelRatio'] = function () {
      if (!jzm_c9['EnvConfig']['pixelRatioInt']) try {
        var xbpn2 = wx['getSystemInfoSync']();return jzm_c9['EnvConfig']['pixelRatioInt'] = xbpn2['pixelRatio'], xbpn2 = xbpn2, xbpn2['pixelRatio'];
      } catch (b2opx) {}return jzm_c9['EnvConfig']['pixelRatioInt'];
    }, jzm_c9['createElement'] = function (rscv$) {
      if (rscv$ == 'canvas') {
        var f1u6y7;return jzm_c9['idx'] == 0x1 ? jzm_c9['isZiYu'] ? (f1u6y7 = sharedCanvas, f1u6y7['style'] = {}) : f1u6y7 = window['canvas'] : f1u6y7 = window['wx']['createCanvas'](), jzm_c9['idx']++, f1u6y7;
      } else {
        if (rscv$ == 'textarea' || rscv$ == 'input') return jzm_c9['onCreateInput'](rscv$);else {
          if (rscv$ == 'div') {
            var idm5 = jzm_c9['_preCreateElement'](rscv$);return idm5['contains'] = function (p82xbn) {
              return null;
            }, idm5['removeChild'] = function (pxob2h) {}, idm5;
          } else return jzm_c9['_preCreateElement'](rscv$);
        }
      }
    }, jzm_c9['onCreateInput'] = function (fkl0v$) {
      var xtbo = jzm_c9['_preCreateElement'](fkl0v$);return xtbo['focus'] = jim4['wxinputFocus'], xtbo['blur'] = jim4['wxinputblur'], xtbo['style'] = {}, xtbo['value'] = 0x0, xtbo['parentElement'] = {}, xtbo['placeholder'] = {}, xtbo['type'] = {}, xtbo['setColor'] = function (qcvs) {}, xtbo['setType'] = function (hbtoxi) {}, xtbo['setFontFace'] = function (pn32e) {}, xtbo['addEventListener'] = function (sqrvl) {}, xtbo['contains'] = function (nbx2p) {
        return null;
      }, xtbo['removeChild'] = function (l0kqv$) {}, xtbo;
    }, jzm_c9['createShaderCondition'] = function (scrq$v) {
      var obxhpt = this,
          f0v$k = function () {
        var p8ne2 = scrq$v;return obxhpt[scrq$v['replace']('this.', '')];
      };return f0v$k;
    }, jzm_c9['EnvConfig'] = null, jzm_c9['window'] = null, jzm_c9['_preCreateElement'] = null, jzm_c9['_inited'] = ![], jzm_c9['wxRequest'] = null, jzm_c9['systemInfo'] = null, jzm_c9['version'] = '0.0.1', jzm_c9['isZiYu'] = ![], jzm_c9['isPosMsgYu'] = ![], jzm_c9['parseXMLFromString'] = function (n2ge83) {
      var y67k1, yf6k71;n2ge83 = n2ge83['replace'](/>\s+</g, '><');try {
        y67k1 = new window['Parser']['DOMParser']()['parseFromString'](n2ge83, 'text/xml');
      } catch (c_zm9) {
        throw '需要引入xml解析库文件';
      }return y67k1;
    }, jzm_c9['idx'] = 0x1, jzm_c9;
  }(),
      vk0$fl = function () {
    function y$fkl0() {}qsc_(y$fkl0, 'laya.wx.mini.MiniImage');var bpx82o = y$fkl0['prototype'];return bpx82o['_loadImage'] = function (p2x8o) {
      var e2gn38 = this,
          mdij4 = ![];p2x8o['indexOf']('layaNativeDir/') == -0x1 && (mdij4 = !![], p2x8o = k$q0l['formatURL'](p2x8o));if (!fk0ly$['getFileInfo'](p2x8o)) {
        if (p2x8o['indexOf']('http://') != -0x1 || p2x8o['indexOf']('https://') != -0x1) fk0ly$['downImg'](p2x8o, new f0kyl6(y$fkl0, y$fkl0['onDownImgCallBack'], [p2x8o, e2gn38]), p2x8o);else y$fkl0['onCreateImage'](p2x8o, e2gn38, !![]);
      } else y$fkl0['onCreateImage'](p2x8o, e2gn38, !mdij4);
    }, y$fkl0['onDownImgCallBack'] = function (k$vq, _jmc, qcs_r9) {
      if (!qcs_r9) y$fkl0['onCreateImage'](k$vq, _jmc);else _jmc['onError'](null);
    }, y$fkl0['onCreateImage'] = function (obxthi, dh45t, v0kq) {
      v0kq === void 0x0 && (v0kq = ![]);var vk$0fl;if (!v0kq) {
        var xp2h = fk0ly$['getFileInfo'](obxthi),
            it4 = xp2h['md5'];vk$0fl = fk0ly$['getFileNativePath'](it4);
      } else vk$0fl = obxthi;if (dh45t['imgCache'] == null) dh45t['imgCache'] = {};var _s9qrc;function zd4jm9() {
        _s9qrc['onload'] = null, _s9qrc['onerror'] = null, delete dh45t['imgCache'][obxthi];
      };var c9zjm = function () {
        zd4jm9(), dh45t['onLoaded'](_s9qrc);
      },
          t4dji = function () {
        zd4jm9(), dh45t['event']('error', 'Load image failed');
      };dh45t['_type'] == 'nativeimage' ? (_s9qrc = new scq_9r['window']['Image'](), _s9qrc['crossOrigin'] = '', _s9qrc['onload'] = c9zjm, _s9qrc['onerror'] = t4dji, _s9qrc['src'] = vk$0fl, dh45t['imgCache'][obxthi] = _s9qrc) : new pothx['create'](vk$0fl, { 'onload': c9zjm, 'onerror': t4dji, 'onCreate': function (m_4z) {
          _s9qrc = m_4z, dh45t['imgCache'][obxthi] = m_4z;
        } });
    }, y$fkl0;
  }(),
      jim4 = function () {
    function q$crsv() {}return qsc_(q$crsv, 'laya.wx.mini.MiniInput'), q$crsv['_createInputElement'] = function () {
      u1f7y6['_initInput'](u1f7y6['area'] = scq_9r['createElement']('textarea')), u1f7y6['_initInput'](u1f7y6['input'] = scq_9r['createElement']('input')), u1f7y6['inputContainer'] = scq_9r['createElement']('div'), u1f7y6['inputContainer']['style']['position'] = 'absolute', u1f7y6['inputContainer']['style']['zIndex'] = 0x186a0, scq_9r['container']['appendChild'](u1f7y6['inputContainer']), u1f7y6['inputContainer']['setPos'] = function (enbp28, tj5d4i) {
        u1f7y6['inputContainer']['style']['left'] = enbp28 + 'px', u1f7y6['inputContainer']['style']['top'] = tj5d4i + 'px';
      }, j49mz_['stage']['on']('resize', null, q$crsv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xohpb2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ihd45['_soundClass'] = $0fky, ihd45['_musicClass'] = $0fky;
    }, q$crsv['_onStageResize'] = function () {
      var bxp2ho = j49mz_['stage']['_canvasTransform']['identity']();bxp2ho['scale'](scq_9r['width'] / v0lkq['canvas']['width'] / l$kf0y['getPixelRatio'](), scq_9r['height'] / v0lkq['canvas']['height'] / l$kf0y['getPixelRatio']());
    }, q$crsv['wxinputFocus'] = function (qrs9c_) {
      var xbith = u1f7y6['inputElement']['target'];if (xbith && !xbith['editable']) return;$k0ylf['window']['wx']['offKeyboardConfirm'](), $k0ylf['window']['wx']['offKeyboardInput'](), $k0ylf['window']['wx']['showKeyboard']({ 'defaultValue': xbith['text'], 'maxLength': xbith['maxChars'], 'multiple': xbith['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (m45dz) {}, 'fail': function (_zms9) {} }), $k0ylf['window']['wx']['onKeyboardConfirm'](function (u76wy) {
        var e2p38 = u76wy ? u76wy['value'] : '';xbith['text'] = e2p38, xbith['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $k0ylf['window']['wx']['onKeyboardInput'](function (epbn28) {
        var ne382p = epbn28 ? epbn28['value'] : '';if (!xbith['multiline']) {
          if (ne382p['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xbith['text'] = ne382p, xbith['event']('input');
      });
    }, q$crsv['inputEnter'] = function () {
      u1f7y6['inputElement']['target']['focus'] = ![];
    }, q$crsv['wxinputblur'] = function () {
      q$crsv['hideKeyboard']();
    }, q$crsv['hideKeyboard'] = function () {
      $k0ylf['window']['wx']['offKeyboardConfirm'](), $k0ylf['window']['wx']['offKeyboardInput'](), $k0ylf['window']['wx']['hideKeyboard']({ 'success': function (ohi5x) {
          console['log']('隐藏键盘');
        }, 'fail': function (bho2) {
          console['log']('隐藏键盘出错:' + (bho2 ? bho2['errMsg'] : ''));
        } });
    }, q$crsv;
  }(),
      g2e3n = function () {
    function j4itd() {}qsc_(j4itd, 'laya.wx.mini.MiniLoader');var bx8pn2 = j4itd['prototype'];return bx8pn2['load'] = function (d5h4i, wyu1, hxoi, _c9m, d54jmz) {
      hxoi === void 0x0 && (hxoi = !![]), d54jmz === void 0x0 && (d54jmz = ![]);var p3e82n = this;p3e82n['_url'] = d5h4i;if (d5h4i['indexOf']('data:image') === 0x0) p3e82n['_type'] = wyu1 = 'image';else p3e82n['_type'] = wyu1 || (wyu1 = p3e82n['getTypeFromUrl'](d5h4i));p3e82n['_cache'] = hxoi, p3e82n['_data'] = null;var v$lr0 = 'ascii';if (d5h4i['indexOf']('.fnt') != -0x1) v$lr0 = 'utf8';else wyu1 == 'arraybuffer' && (v$lr0 = '');;var oh2pbx = kfy076['getFileExtension'](d5h4i);if (j4itd['_fileTypeArr']['indexOf'](oh2pbx) != -0x1) $k0ylf['EnvConfig']['load']['call'](this, d5h4i, wyu1, hxoi, _c9m, d54jmz);else {
        if (!fk0ly$['getFileInfo'](d5h4i)) {
          if (d5h4i['indexOf']('layaNativeDir/') != -0x1) {
            if ($k0ylf['isZiYu']) {
              var p2obh = fk0ly$['ziyuFileData'][d5h4i];p3e82n['onLoaded'](p2obh);return;
            } else {
              cosnole['log']('read read'), fk0ly$['read'](d5h4i, v$lr0, new f0kyl6(j4itd, j4itd['onReadNativeCallBack'], [v$lr0, d5h4i, wyu1, hxoi, _c9m, d54jmz, p3e82n]));return;
            }
          }if (k$q0l['rootPath'] == '') var y0lfk = d5h4i;else y0lfk = d5h4i['split'](k$q0l['rootPath'])[0x0];d5h4i['indexOf']('http://') != -0x1 || d5h4i['indexOf']('https://') != -0x1 ? $k0ylf['EnvConfig']['load']['call'](p3e82n, d5h4i, wyu1, hxoi, _c9m, d54jmz) : fk0ly$['readFile'](y0lfk, v$lr0, new f0kyl6(j4itd, j4itd['onReadNativeCallBack'], [v$lr0, d5h4i, wyu1, hxoi, _c9m, d54jmz, p3e82n]), d5h4i);
        } else $k0ylf['EnvConfig']['load']['call'](this, d5h4i, wyu1, hxoi, _c9m, d54jmz);
      }
    }, bx8pn2['resMgrLoad'] = function (z94djm, l0vfk$, zs9r, id45t, h4, ng8e23, pxb8o2) {
      zs9r === void 0x0 && (zs9r = 0x0), id45t === void 0x0 && (id45t = ![]), h4 === void 0x0 && (h4 = ![]), ng8e23 === void 0x0 && (ng8e23 = 0x0), pxb8o2 === void 0x0 && (pxb8o2 = 0x3), z94djm['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z94djm), $k0ylf['EnvConfig']['resMgrLoad'](z94djm, (z9smc, vsc$r, j5d) => {
        j4itd['prototype']['resMgrLoadCallBack'](z9smc, vsc$r, j5d, l0vfk$);
      }, zs9r, id45t, h4, ng8e23, pxb8o2);
    }, bx8pn2['resMgrLoadCallBack'] = function (ly0f6, srzc_9, c9_sz, k0q) {
      console['log']('buff:::', ly0f6, c9_sz, fk0ly$['fileNativeDir'] + '///' + fk0ly$['fileListName']), k0q(ly0f6, srzc_9, c9_sz);
    }, bx8pn2['clearRes'] = function (mz4j5d, l0f$k) {
      l0f$k === void 0x0 && (l0f$k = ![]);var l0kv = this;l0kv['clearRes'](mz4j5d, l0f$k);var mj_zc = fk0ly$['getFileInfo'](mz4j5d);if (mj_zc && (mz4j5d['indexOf']('http://') != -0x1 || mz4j5d['indexOf']('https://') != -0x1)) {
        var zms_c = mj_zc['md5'],
            ox8pb2 = fk0ly$['getFileNativePath'](zms_c);fk0ly$['remove'](ox8pb2);
      }
    }, j4itd['onReadNativeCallBack'] = function (m9_jcz, p3n82e, btp, xhbtop, $qvk0, px2b8o, $lvrq0, hboxpt, qs_9rc) {
      xhbtop === void 0x0 && (xhbtop = !![]), px2b8o === void 0x0 && (px2b8o = ![]), hboxpt === void 0x0 && (hboxpt = 0x0);if (!hboxpt) {
        var v$lr;if (btp == 'json' || btp == 'atlas') v$lr = $k0ylf['getJson'](qs_9rc['data']);else btp == 'xml' ? v$lr = kfy076['parseXMLFromString'](qs_9rc['data']) : v$lr = qs_9rc['data'];$lvrq0['onLoaded'](v$lr), !$k0ylf['isZiYu'] && $k0ylf['isPosMsgYu'] && btp != 'arraybuffer' && wx['postMessage']({ 'url': p3n82e, 'data': v$lr, 'isLoad': !![] });
      } else hboxpt == 0x1 && $k0ylf['EnvConfig']['load']['call']($lvrq0, p3n82e, btp, xhbtop, $qvk0, px2b8o);
    }, mczs_(j4itd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), j4itd;
  }(),
      fk0ly$ = function (wy16) {
    function yu71w() {
      yu71w['__super']['call'](this);;
    }return qsc_(yu71w, 'laya.wx.mini.MiniFileMgr', wy16), yu71w['isLoadFile'] = function (_9j4m) {
      return yu71w['_fileTypeArr']['indexOf'](_9j4m) != -0x1 ? !![] : ![];
    }, yu71w['getFileInfo'] = function (ohi5xt) {
      var lfk06 = ohi5xt['split']('?')[0x0],
          tpohb = yu71w['filesListObj'][lfk06];if (tpohb == null) return null;else return tpohb;return null;
    }, yu71w['onFileUpdate'] = function (dot5h, pb8o) {
      var u176yw = dot5h['split']('/'),
          lyk = u176yw[u176yw['length'] - 0x1],
          qkl$v0 = yu71w['getFileInfo'](pb8o);if (qkl$v0 == null) yu71w['onSaveFile'](pb8o, lyk);else {
        if (qkl$v0['readyUrl'] != pb8o) yu71w['remove'](lyk, pb8o);
      }
    }, yu71w['exits'] = function (s_rqv, ep823) {
      var pobxh = yu71w['getFileNativePath'](s_rqv);yu71w['fs']['getFileInfo']({ 'filePath': pobxh, 'success': function (cvsrq$) {
          ep823 != null && ep823['runWith']([0x0, cvsrq$]);
        }, 'fail': function (ohp2xb) {
          ep823 != null && ep823['runWith']([0x1, ohp2xb]);
        } });
    }, yu71w['read'] = function (im4dj, zrc9_, f0k$l, c_9qs) {
      zrc9_ === void 0x0 && (zrc9_ = 'ascill'), c_9qs === void 0x0 && (c_9qs = '');var w716yu;c_9qs != '' ? w716yu = yu71w['getFileNativePath'](im4dj) : w716yu = im4dj, yu71w['fs']['readFile']({ 'filePath': w716yu, 'encoding': zrc9_, 'success': function (kfy70) {
          f0k$l != null && f0k$l['runWith']([0x0, kfy70]);
        }, 'fail': function (tphxb) {
          if (tphxb && c_9qs != '') yu71w['down'](c_9qs, zrc9_, f0k$l, c_9qs);else f0k$l != null && f0k$l['runWith']([0x1]);
        } });
    }, yu71w['readNativeFile'] = function (q$rlsv, f0kv$) {
      yu71w['fs']['readFile']({ 'filePath': q$rlsv, 'encoding': '', 'success': function (sq_cr9) {
          f0kv$ != null && f0kv$['runWith']([0x0]);
        }, 'fail': function (txho5) {
          f0kv$ != null && f0kv$['runWith']([0x1]);
        } });
    }, yu71w['down'] = function (l0qk, lkf0$v, lq0v$, vqcr$s) {
      lkf0$v === void 0x0 && (lkf0$v = 'ascill'), vqcr$s === void 0x0 && (vqcr$s = '');var s$vrcq = yu71w['getFileNativePath'](vqcr$s),
          q$rc = yu71w['wxdown']({ 'url': l0qk, 'filePath': s$vrcq, 'success': function (xpbo) {
          if (xpbo['statusCode'] === 0xc8) yu71w['readFile'](xpbo['filePath'], lkf0$v, lq0v$, vqcr$s);
        }, 'fail': function (vcsq) {
          lq0v$ != null && lq0v$['runWith']([0x1, vcsq]);
        } });q$rc['onProgressUpdate'](function (u1fy76) {
        lq0v$ != null && lq0v$['runWith']([0x2, u1fy76['progress']]);
      });
    }, yu71w['readFile'] = function (ih5do, lyf0$k, yf67u, ht4i5d) {
      lyf0$k === void 0x0 && (lyf0$k = 'ascill'), ht4i5d === void 0x0 && (ht4i5d = ''), yu71w['fs']['readFile']({ 'filePath': ih5do, 'encoding': lyf0$k, 'success': function (zsr_9) {
          if (ih5do['indexOf']('http://') != -0x1 || ih5do['indexOf']('https://') != -0x1) yu71w['onFileUpdate'](ih5do, ht4i5d);yf67u != null && yf67u['runWith']([0x0, zsr_9]);
        }, 'fail': function (ihx5o) {
          if (ihx5o) yf67u != null && yf67u['runWith']([0x1, ihx5o]);
        } });
    }, yu71w['downImg'] = function (rvc$, o5thi, k$0vlq) {
      k$0vlq === void 0x0 && (k$0vlq = '');var y7u1f6 = yu71w['wxdown']({ 'url': rvc$, 'success': function (j9m_zc) {
          j9m_zc['statusCode'] === 0xc8 && yu71w['copyFile'](j9m_zc['tempFilePath'], k$0vlq, o5thi);
        }, 'fail': function (kq$vl) {
          o5thi != null && o5thi['runWith']([0x1, kq$vl]);
        } });
    }, yu71w['copyFile'] = function (csqr$v, ky0$fl, pboxth) {
      var djti54 = csqr$v['split']('/'),
          xb2ph = djti54[djti54['length'] - 0x1],
          qcrs_ = ky0$fl['split']('?')[0x0],
          qv$lk0 = yu71w['getFileInfo'](ky0$fl),
          zsrc9_ = yu71w['getFileNativePath'](xb2ph);yu71w['fs']['copyFile']({ 'srcPath': csqr$v, 'destPath': zsrc9_, 'success': function (po82b) {
          if (!qv$lk0) yu71w['onSaveFile'](ky0$fl, xb2ph), pboxth != null && pboxth['runWith']([0x0]);else {
            if (qv$lk0['readyUrl'] != ky0$fl) yu71w['remove'](xb2ph, ky0$fl, pboxth);
          }
        }, 'fail': function (q$lr) {
          pboxth != null && pboxth['runWith']([0x1, q$lr]);
        } });
    }, yu71w['getFileNativePath'] = function (lykf$0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lykf$0;
    }, yu71w['remove'] = function (_j9zmc, l0$kf, hxi5ot) {
      l0$kf === void 0x0 && (l0$kf = '');var lqvsr = yu71w['getFileInfo'](l0$kf),
          rsvq$l = yu71w['getFileNativePath'](lqvsr['md5']);j49mz_['loader']['clearRes'](lqvsr['readyUrl']), yu71w['fs']['unlink']({ 'filePath': rsvq$l, 'success': function (_sc9mz) {
          if (l0$kf != '') yu71w['onSaveFile'](l0$kf, _j9zmc);hxi5ot != null && hxi5ot['runWith']([0x0]);
        }, 'fail': function (qcr$v) {} });
    }, yu71w['onSaveFile'] = function (z_9mj, td5ohi) {
      var _jcm = z_9mj['split']('?')[0x0];yu71w['filesListObj'][_jcm] = { 'md5': td5ohi, 'readyUrl': z_9mj }, yu71w['fs']['writeFile']({ 'filePath': yu71w['fileNativeDir'] + '/' + yu71w['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yu71w['filesListObj']), 'success': function (z9c_s) {
          console['log']('写入测试测试成功：', z9c_s);
        }, 'fail': function (f617k) {
          console['log']('写入测试测试失败：', f617k);
        } });
    }, yu71w['existDir'] = function (y6f7u, d5t) {
      yu71w['fs']['mkdir']({ 'dirPath': y6f7u, 'success': function (k0vlq) {
          d5t != null && d5t['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (q_r9sc) {
          if (q_r9sc['errMsg']['indexOf']('file already exists') != -0x1) yu71w['readSync'](yu71w['fileListName'], 'utf8', d5t);else d5t != null && d5t['runWith']([0x1, q_r9sc]);
        } });
    }, yu71w['readSync'] = function (thbi, csz9r_, xobh2, k6f7y1) {
      csz9r_ === void 0x0 && (csz9r_ = 'ascill'), k6f7y1 === void 0x0 && (k6f7y1 = '');var l$q0v = yu71w['getFileNativePath'](thbi),
          lqk0;try {
        lqk0 = yu71w['fs']['readFileSync'](l$q0v), xobh2 != null && xobh2['runWith']([0x0, { 'data': lqk0 }]);
      } catch (_qcr) {
        xobh2 != null && xobh2['runWith']([0x1]);
      }
    }, yu71w['readCache'] = function () {}, yu71w['writeCache'] = function (d9mj) {
      var _scz9 = readyUrl['split']('?')[0x0];yu71w['filesListObj'][_scz9] = { 'md5': md5Name, 'readyUrl': readyUrl }, yu71w['fs']['writeFile']({ 'filePath': yu71w['fileNativeDir'] + '/' + yu71w['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yu71w['filesListObj']), 'success': function (bixt) {}, 'fail': function (zd49j) {} });
    }, yu71w['setNativeFileDir'] = function ($vlq) {
      yu71w['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $vlq;
    }, yu71w['filesListObj'] = {}, yu71w['fileNativeDir'] = null, yu71w['fileListName'] = 'layaairfiles.txt', yu71w['ziyuFileData'] = {}, mczs_(yu71w, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yu71w;
  }(to5ihx),
      $0fky = function (k0lv$) {
    function htp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], htp['__super']['call'](this), this['_sound'] = htp['_createSound']();
    }qsc_(htp, 'laya.wx.mini.MiniSound', k0lv$);var mdjz9 = htp['prototype'];return mdjz9['load'] = function (bptxh) {
      var sm9c_ = this;bptxh = k$q0l['formatURL'](bptxh), this['url'] = bptxh;if (htp['_audioCache'][bptxh]) {
        this['event']('complete');return;
      }function cr_9sz() {
        if (htp['_null'] != undefined) sm9c_['_sound']['onCanplay'](htp['_null']), sm9c_['_sound']['onError'](htp['_null']);else try {
          sm9c_['_sound']['onCanplay'](null), sm9c_['_sound']['onError'](null), htp['_null'] = null;
        } catch (r$qsvc) {
          console['warn']('[wxmini] _clearSound:' + r$qsvc), sm9c_['_sound']['onCanplay'](d5mj4z), sm9c_['_sound']['onError'](d5mj4z), htp['_null'] = d5mj4z;
        }
      }function klf0() {
        cr_9sz(), zm_4j['loaded'] = !![], zm_4j['event']('complete'), htp['_audioCache'][zm_4j['url']] = zm_4j;
      }function xibhot(d45ti) {
        console['error']('errCode=' + d45ti['errCode'] + '  errMsg=' + d45ti['errMsg']), cr_9sz(), zm_4j['event']('error');
      }function d5mj4z() {}this['_sound']['onCanplay'](klf0), this['_sound']['onError'](xibhot), this['_sound']['src'] = bptxh;var zm_4j = this;
    }, mdjz9['play'] = function (en2b, td5io) {
      en2b === void 0x0 && (en2b = 0x0), td5io === void 0x0 && (td5io = 0x0);var qvc_r;if (this['url'] == ihd45['_tMusic']) {
        if (!htp['_musicAudio']) htp['_musicAudio'] = htp['_createSound']();qvc_r = htp['_musicAudio'];
      } else qvc_r = htp['_createSound']();qvc_r['src'] = this['url'];var op82xb = new $qsv(qvc_r);return op82xb['url'] = this['url'], op82xb['loops'] = td5io, op82xb['startTime'] = en2b, op82xb['play'](), ihd45['addChannel'](op82xb), op82xb;
    }, mdjz9['dispose'] = function () {
      var x8b2 = htp['_audioCache'][this['url']];x8b2 && (x8b2['src'] = '', delete htp['_audioCache'][this['url']]);
    }, mj5i4d(0x0, mdjz9, 'duration', function () {
      return this['_sound']['duration'];
    }), htp['_createSound'] = function () {
      return htp['_id']++, $k0ylf['window']['wx']['createInnerAudioContext']();
    }, htp['_musicAudio'] = null, htp['_id'] = 0x0, htp['_audioCache'] = {}, htp['_null'] = undefined, htp;
  }(to5ihx),
      $qsv = function (n2bpx) {
    function xitob(qlk$0v) {
      this['_audio'] = null, this['_onEnd'] = null, xitob['__super']['call'](this), this['_audio'] = qlk$0v, this['_onEnd'] = kfy076['bind'](this['__onEnd'], this), qlk$0v['onEnded'](this['_onEnd']);
    }qsc_(xitob, 'laya.wx.mini.MiniSoundChannel', n2bpx);var idto = xitob['prototype'];return idto['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (j49mz_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, idto['__onNull'] = function () {}, idto['play'] = function () {
      this['isStopped'] = ![], ihd45['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, idto['stop'] = function () {
      this['isStopped'] = !![], ihd45['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xitob['_null'] != undefined) this['_audio']['onEnded'](xitob['_null']);else try {
        this['_audio']['onEnded'](null), xitob['_null'] = null;
      } catch (o8xp2) {
        console['warn']('[wxmini] stop:' + o8xp2), this['_audio']['onEnded'](kfy076['bind'](this['__onNull'], this)), xitob['_null'] = kfy076['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, idto['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, idto['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ihd45['addChannel'](this), this['_audio']['play']();
    }, mj5i4d(0x0, idto, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mj5i4d(0x0, idto, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mj5i4d(0x0, idto, 'volume', function () {
      return 0x1;
    }, function (bhox2) {}), xitob['_null'] = undefined, xitob;
  }(q9cs_r);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ij5m in Laya) {
    var vsr$l = Laya[ij5m];vsr$l && vsr$l['__isclass'] && (exports[ij5m] = vsr$l);
  }
});