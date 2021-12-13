var C = wx.$a;
(function (window, document, k0$lqv) {
  var $kl0vf = k0$lqv['un'],
      fk6y70 = k0$lqv['uns'],
      $qkl0v = k0$lqv['static'],
      $vk0lf = k0$lqv['class'],
      bh2x = k0$lqv['getset'],
      idj = k0$lqv['__newvec'],
      v_sqrc = laya['utils']['Browser'],
      fu671y = laya['events']['Event'],
      fl0y6k = laya['events']['EventDispatcher'],
      q9cs = laya['resource']['HTMLImage'],
      m4z_j = laya['utils']['Handler'],
      lv$k0q = laya['display']['Input'],
      s_qcrv = laya['net']['Loader'],
      q_csr9 = laya['maths']['Matrix'],
      y0lk$f = laya['renders']['Render'],
      f$0yk = laya['utils']['RunDriver'],
      qvrls$ = laya['media']['Sound'],
      hptbo = laya['media']['SoundChannel'],
      kl$f0y = laya['media']['SoundManager'],
      dj5t4 = laya['display']['Stage'],
      bxpt = laya['net']['URL'],
      cr_q9s = laya['utils']['Utils'],
      _srcq = function () {
    function zs_9c() {}return $vk0lf(zs_9c, 'laya.wx.mini.MiniAdpter'), zs_9c['getJson'] = function (r9zs_) {
      return JSON['parse'](r9zs_);
    }, zs_9c['init'] = function (jdti54, xit5oh) {
      jdti54 === void 0x0 && (jdti54 = ![]), xit5oh === void 0x0 && (xit5oh = ![]);if (zs_9c['_inited']) return;zs_9c['window'] = window;if (zs_9c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zs_9c['_inited'] = !![], zs_9c['isZiYu'] = xit5oh, zs_9c['isPosMsgYu'] = jdti54, zs_9c['EnvConfig'] = {}, !zs_9c['isZiYu'] && (tiobxh['setNativeFileDir']('/layaairGame'), tiobxh['existDir'](tiobxh['fileNativeDir'], m4z_j['create'](zs_9c, zs_9c['onMkdirCallBack']))), zs_9c['window']['focus'] = function () {}, k0$lqv['getUrlPath'] = function () {}, zs_9c['window']['logtime'] = function ($qvrls) {}, zs_9c['window']['alertTimeLog'] = function (ohx5ti) {}, zs_9c['window']['resetShareInfo'] = function () {}, zs_9c['window']['CanvasRenderingContext2D'] = function () {}, zs_9c['window']['CanvasRenderingContext2D']['prototype'] = zs_9c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zs_9c['window']['document']['body']['appendChild'] = function () {}, zs_9c['EnvConfig']['pixelRatioInt'] = 0x0, f$0yk['getPixelRatio'] = zs_9c['pixelRatio'], zs_9c['_preCreateElement'] = v_sqrc['createElement'], v_sqrc['createElement'] = zs_9c['createElement'], f$0yk['createShaderCondition'] = zs_9c['createShaderCondition'], cr_q9s['parseXMLFromString'] = zs_9c['parseXMLFromString'], lv$k0q['_createInputElement'] = rqsv_c['_createInputElement'], zs_9c['EnvConfig']['load'] = s_qcrv['prototype']['load'], s_qcrv['prototype']['load'] = j_z49['prototype']['load'], zs_9c['isZiYu'] && jdti54 && wx['onMessage'](function (y6uf71) {
        y6uf71['isLoad'] && (tiobxh['ziyuFileData'][y6uf71['url']] = y6uf71['data']);
      });
    }, zs_9c['onMkdirCallBack'] = function (kf16y7, k$yfl) {
      if (!kf16y7) tiobxh['filesListObj'] = JSON['parse'](k$yfl['data']);
    }, zs_9c['pixelRatio'] = function () {
      if (!zs_9c['EnvConfig']['pixelRatioInt']) try {
        var x2b = wx['getSystemInfoSync']();return zs_9c['EnvConfig']['pixelRatioInt'] = x2b['pixelRatio'], x2b = x2b, x2b['pixelRatio'];
      } catch (ti4h5) {}return zs_9c['EnvConfig']['pixelRatioInt'];
    }, zs_9c['createElement'] = function (qcvsr) {
      if (qcvsr == 'canvas') {
        var txio5;return zs_9c['idx'] == 0x1 ? zs_9c['isZiYu'] ? (txio5 = sharedCanvas, txio5['style'] = {}) : txio5 = window['canvas'] : txio5 = window['wx']['createCanvas'](), zs_9c['idx']++, txio5;
      } else {
        if (qcvsr == 'textarea' || qcvsr == 'input') return zs_9c['onCreateInput'](qcvsr);else {
          if (qcvsr == 'div') {
            var toh5 = zs_9c['_preCreateElement'](qcvsr);return toh5['contains'] = function (src$qv) {
              return null;
            }, toh5['removeChild'] = function (q$l) {}, toh5;
          } else return zs_9c['_preCreateElement'](qcvsr);
        }
      }
    }, zs_9c['onCreateInput'] = function (gn83e) {
      var ob8p = zs_9c['_preCreateElement'](gn83e);return ob8p['focus'] = rqsv_c['wxinputFocus'], ob8p['blur'] = rqsv_c['wxinputblur'], ob8p['style'] = {}, ob8p['value'] = 0x0, ob8p['parentElement'] = {}, ob8p['placeholder'] = {}, ob8p['type'] = {}, ob8p['setColor'] = function (oxp8) {}, ob8p['setType'] = function (fu1y67) {}, ob8p['setFontFace'] = function (d54tij) {}, ob8p['addEventListener'] = function (h2pox) {}, ob8p['contains'] = function (sqv$rl) {
        return null;
      }, ob8p['removeChild'] = function (qrvs) {}, ob8p;
    }, zs_9c['createShaderCondition'] = function (dh4i) {
      var k0fl$y = this,
          l60k = function () {
        var cqv_rs = dh4i;return k0fl$y[dh4i['replace']('this.', '')];
      };return l60k;
    }, zs_9c['EnvConfig'] = null, zs_9c['window'] = null, zs_9c['_preCreateElement'] = null, zs_9c['_inited'] = ![], zs_9c['wxRequest'] = null, zs_9c['systemInfo'] = null, zs_9c['version'] = '0.0.1', zs_9c['isZiYu'] = ![], zs_9c['isPosMsgYu'] = ![], zs_9c['parseXMLFromString'] = function (n38ge2) {
      var j_m9, l$fv0k;n38ge2 = n38ge2['replace'](/>\s+</g, '><');try {
        j_m9 = new window['Parser']['DOMParser']()['parseFromString'](n38ge2, 'text/xml');
      } catch (rsz) {
        throw '需要引入xml解析库文件';
      }return j_m9;
    }, zs_9c['idx'] = 0x1, zs_9c;
  }(),
      f$0vkl = function () {
    function th5() {}$vk0lf(th5, 'laya.wx.mini.MiniImage');var mz4dj5 = th5['prototype'];return mz4dj5['_loadImage'] = function (rvqsl$) {
      var ijt54d = this,
          c9msz_ = ![];rvqsl$['indexOf']('layaNativeDir/') == -0x1 && (c9msz_ = !![], rvqsl$ = bxpt['formatURL'](rvqsl$));if (!tiobxh['getFileInfo'](rvqsl$)) {
        if (rvqsl$['indexOf']('http://') != -0x1 || rvqsl$['indexOf']('https://') != -0x1) tiobxh['downImg'](rvqsl$, new m4z_j(th5, th5['onDownImgCallBack'], [rvqsl$, ijt54d]), rvqsl$);else th5['onCreateImage'](rvqsl$, ijt54d, !![]);
      } else th5['onCreateImage'](rvqsl$, ijt54d, !c9msz_);
    }, th5['onDownImgCallBack'] = function (lrsqv, mz_cs, v_rcqs) {
      if (!v_rcqs) th5['onCreateImage'](lrsqv, mz_cs);else mz_cs['onError'](null);
    }, th5['onCreateImage'] = function (mj_49z, o5thx, x82bp) {
      x82bp === void 0x0 && (x82bp = ![]);var q9_cr;if (!x82bp) {
        var pe23n8 = tiobxh['getFileInfo'](mj_49z),
            ix5tho = pe23n8['md5'];q9_cr = tiobxh['getFileNativePath'](ix5tho);
      } else q9_cr = mj_49z;if (o5thx['imgCache'] == null) o5thx['imgCache'] = {};var pobx82;function flk0() {
        pobx82['onload'] = null, pobx82['onerror'] = null, delete o5thx['imgCache'][mj_49z];
      };var yk760f = function () {
        flk0(), o5thx['onLoaded'](pobx82);
      },
          qlvr = function () {
        flk0(), o5thx['event']('error', 'Load image failed');
      };o5thx['_type'] == 'nativeimage' ? (pobx82 = new v_sqrc['window']['Image'](), pobx82['crossOrigin'] = '', pobx82['onload'] = yk760f, pobx82['onerror'] = qlvr, pobx82['src'] = q9_cr, o5thx['imgCache'][mj_49z] = pobx82) : new q9cs['create'](q9_cr, { 'onload': yk760f, 'onerror': qlvr, 'onCreate': function (s$r) {
          pobx82 = s$r, o5thx['imgCache'][mj_49z] = s$r;
        } });
    }, th5;
  }(),
      rqsv_c = function () {
    function ms9c_() {}return $vk0lf(ms9c_, 'laya.wx.mini.MiniInput'), ms9c_['_createInputElement'] = function () {
      lv$k0q['_initInput'](lv$k0q['area'] = v_sqrc['createElement']('textarea')), lv$k0q['_initInput'](lv$k0q['input'] = v_sqrc['createElement']('input')), lv$k0q['inputContainer'] = v_sqrc['createElement']('div'), lv$k0q['inputContainer']['style']['position'] = 'absolute', lv$k0q['inputContainer']['style']['zIndex'] = 0x186a0, v_sqrc['container']['appendChild'](lv$k0q['inputContainer']), lv$k0q['inputContainer']['setPos'] = function ($q0klv, _mz9s) {
        lv$k0q['inputContainer']['style']['left'] = $q0klv + 'px', lv$k0q['inputContainer']['style']['top'] = _mz9s + 'px';
      }, k0$lqv['stage']['on']('resize', null, ms9c_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k0q$v) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kl$f0y['_soundClass'] = csz9, kl$f0y['_musicClass'] = csz9;
    }, ms9c_['_onStageResize'] = function () {
      var im45j = k0$lqv['stage']['_canvasTransform']['identity']();im45j['scale'](v_sqrc['width'] / y0lk$f['canvas']['width'] / f$0yk['getPixelRatio'](), v_sqrc['height'] / y0lk$f['canvas']['height'] / f$0yk['getPixelRatio']());
    }, ms9c_['wxinputFocus'] = function (lq$vr0) {
      var fl$k0y = lv$k0q['inputElement']['target'];if (fl$k0y && !fl$k0y['editable']) return;_srcq['window']['wx']['offKeyboardConfirm'](), _srcq['window']['wx']['offKeyboardInput'](), _srcq['window']['wx']['showKeyboard']({ 'defaultValue': fl$k0y['text'], 'maxLength': fl$k0y['maxChars'], 'multiple': fl$k0y['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (rv_cq) {}, 'fail': function (oxhi5t) {} }), _srcq['window']['wx']['onKeyboardConfirm'](function (ptoh) {
        var l$0kfv = ptoh ? ptoh['value'] : '';fl$k0y['text'] = l$0kfv, fl$k0y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _srcq['window']['wx']['onKeyboardInput'](function (e8ng32) {
        var idtoh5 = e8ng32 ? e8ng32['value'] : '';if (!fl$k0y['multiline']) {
          if (idtoh5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }fl$k0y['text'] = idtoh5, fl$k0y['event']('input');
      });
    }, ms9c_['inputEnter'] = function () {
      lv$k0q['inputElement']['target']['focus'] = ![];
    }, ms9c_['wxinputblur'] = function () {
      ms9c_['hideKeyboard']();
    }, ms9c_['hideKeyboard'] = function () {
      _srcq['window']['wx']['offKeyboardConfirm'](), _srcq['window']['wx']['offKeyboardInput'](), _srcq['window']['wx']['hideKeyboard']({ 'success': function (ge832) {
          console['log']('隐藏键盘');
        }, 'fail': function (rqvs$c) {
          console['log']('隐藏键盘出错:' + (rqvs$c ? rqvs$c['errMsg'] : ''));
        } });
    }, ms9c_;
  }(),
      j_z49 = function () {
    function q_c9s() {}$vk0lf(q_c9s, 'laya.wx.mini.MiniLoader');var p2ne38 = q_c9s['prototype'];return p2ne38['load'] = function (zsc_9r, pbo2xh, xbtohi, zjmc_, hboptx) {
      xbtohi === void 0x0 && (xbtohi = !![]), hboptx === void 0x0 && (hboptx = ![]);var d4mj5i = this;d4mj5i['_url'] = zsc_9r;if (zsc_9r['indexOf']('data:image') === 0x0) d4mj5i['_type'] = pbo2xh = 'image';else d4mj5i['_type'] = pbo2xh || (pbo2xh = d4mj5i['getTypeFromUrl'](zsc_9r));d4mj5i['_cache'] = xbtohi, d4mj5i['_data'] = null;var jid54 = 'ascii';if (zsc_9r['indexOf']('.fnt') != -0x1) jid54 = 'utf8';else pbo2xh == 'arraybuffer' && (jid54 = '');;var zscr9_ = cr_q9s['getFileExtension'](zsc_9r);if (q_c9s['_fileTypeArr']['indexOf'](zscr9_) != -0x1) _srcq['EnvConfig']['load']['call'](this, zsc_9r, pbo2xh, xbtohi, zjmc_, hboptx);else {
        if (!tiobxh['getFileInfo'](zsc_9r)) {
          if (zsc_9r['indexOf']('layaNativeDir/') != -0x1) {
            if (_srcq['isZiYu']) {
              var $lvfk0 = tiobxh['ziyuFileData'][zsc_9r];d4mj5i['onLoaded']($lvfk0);return;
            } else {
              cosnole['log']('read read'), tiobxh['read'](zsc_9r, jid54, new m4z_j(q_c9s, q_c9s['onReadNativeCallBack'], [jid54, zsc_9r, pbo2xh, xbtohi, zjmc_, hboptx, d4mj5i]));return;
            }
          }if (bxpt['rootPath'] == '') var czjm_ = zsc_9r;else czjm_ = zsc_9r['split'](bxpt['rootPath'])[0x0];zsc_9r['indexOf']('http://') != -0x1 || zsc_9r['indexOf']('https://') != -0x1 ? _srcq['EnvConfig']['load']['call'](d4mj5i, zsc_9r, pbo2xh, xbtohi, zjmc_, hboptx) : tiobxh['readFile'](czjm_, jid54, new m4z_j(q_c9s, q_c9s['onReadNativeCallBack'], [jid54, zsc_9r, pbo2xh, xbtohi, zjmc_, hboptx, d4mj5i]), zsc_9r);
        } else _srcq['EnvConfig']['load']['call'](this, zsc_9r, pbo2xh, xbtohi, zjmc_, hboptx);
      }
    }, p2ne38['resMgrLoad'] = function (rvqs$c, szr_c9, $vc, mjdz5, vl0$f, vlq, mz4d5j) {
      $vc === void 0x0 && ($vc = 0x0), mjdz5 === void 0x0 && (mjdz5 = ![]), vl0$f === void 0x0 && (vl0$f = ![]), vlq === void 0x0 && (vlq = 0x0), mz4d5j === void 0x0 && (mz4d5j = 0x3), rvqs$c['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rvqs$c), _srcq['EnvConfig']['resMgrLoad'](rvqs$c, (tboph, sqvc_, ihdo5) => {
        q_c9s['prototype']['resMgrLoadCallBack'](tboph, sqvc_, ihdo5, szr_c9);
      }, $vc, mjdz5, vl0$f, vlq, mz4d5j);
    }, p2ne38['resMgrLoadCallBack'] = function (pn8be, j4d5ti, h2opxb, sqcr9_) {
      console['log']('buff:::', pn8be, h2opxb, tiobxh['fileNativeDir'] + '///' + tiobxh['fileListName']), sqcr9_(pn8be, j4d5ti, h2opxb);
    }, p2ne38['clearRes'] = function (v_rqs, y$fl0k) {
      y$fl0k === void 0x0 && (y$fl0k = ![]);var t4j5d = this;t4j5d['clearRes'](v_rqs, y$fl0k);var cm_s9 = tiobxh['getFileInfo'](v_rqs);if (cm_s9 && (v_rqs['indexOf']('http://') != -0x1 || v_rqs['indexOf']('https://') != -0x1)) {
        var l$kvq0 = cm_s9['md5'],
            e28gn3 = tiobxh['getFileNativePath'](l$kvq0);tiobxh['remove'](e28gn3);
      }
    }, q_c9s['onReadNativeCallBack'] = function (r_cz, qrcs$, rcvs$q, vklq0, l0qk$, f61yk, crv_qs, qc9r_, xtbpho) {
      vklq0 === void 0x0 && (vklq0 = !![]), f61yk === void 0x0 && (f61yk = ![]), qc9r_ === void 0x0 && (qc9r_ = 0x0);if (!qc9r_) {
        var flkv$;if (rcvs$q == 'json' || rcvs$q == 'atlas') flkv$ = _srcq['getJson'](xtbpho['data']);else rcvs$q == 'xml' ? flkv$ = cr_q9s['parseXMLFromString'](xtbpho['data']) : flkv$ = xtbpho['data'];crv_qs['onLoaded'](flkv$), !_srcq['isZiYu'] && _srcq['isPosMsgYu'] && rcvs$q != 'arraybuffer' && wx['postMessage']({ 'url': qrcs$, 'data': flkv$, 'isLoad': !![] });
      } else qc9r_ == 0x1 && _srcq['EnvConfig']['load']['call'](crv_qs, qrcs$, rcvs$q, vklq0, l0qk$, f61yk);
    }, $qkl0v(q_c9s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), q_c9s;
  }(),
      tiobxh = function (xbphto) {
    function ti45h() {
      ti45h['__super']['call'](this);;
    }return $vk0lf(ti45h, 'laya.wx.mini.MiniFileMgr', xbphto), ti45h['isLoadFile'] = function (otbhp) {
      return ti45h['_fileTypeArr']['indexOf'](otbhp) != -0x1 ? !![] : ![];
    }, ti45h['getFileInfo'] = function (im5jd4) {
      var kl$0fv = im5jd4['split']('?')[0x0],
          v$lsrq = ti45h['filesListObj'][kl$0fv];if (v$lsrq == null) return null;else return v$lsrq;return null;
    }, ti45h['onFileUpdate'] = function (lfky0$, vslrq) {
      var yk0f6 = lfky0$['split']('/'),
          m94zj_ = yk0f6[yk0f6['length'] - 0x1],
          yf$kl = ti45h['getFileInfo'](vslrq);if (yf$kl == null) ti45h['onSaveFile'](vslrq, m94zj_);else {
        if (yf$kl['readyUrl'] != vslrq) ti45h['remove'](m94zj_, vslrq);
      }
    }, ti45h['exits'] = function (k7yf61, oxibht) {
      var jtd5 = ti45h['getFileNativePath'](k7yf61);ti45h['fs']['getFileInfo']({ 'filePath': jtd5, 'success': function (qcs_v) {
          oxibht != null && oxibht['runWith']([0x0, qcs_v]);
        }, 'fail': function (lk0v) {
          oxibht != null && oxibht['runWith']([0x1, lk0v]);
        } });
    }, ti45h['read'] = function (m54dji, z_9cjm, f$ky0, rcqs_9) {
      z_9cjm === void 0x0 && (z_9cjm = 'ascill'), rcqs_9 === void 0x0 && (rcqs_9 = '');var mc_zs;rcqs_9 != '' ? mc_zs = ti45h['getFileNativePath'](m54dji) : mc_zs = m54dji, ti45h['fs']['readFile']({ 'filePath': mc_zs, 'encoding': z_9cjm, 'success': function (vlr$0q) {
          f$ky0 != null && f$ky0['runWith']([0x0, vlr$0q]);
        }, 'fail': function (lvqr0) {
          if (lvqr0 && rcqs_9 != '') ti45h['down'](rcqs_9, z_9cjm, f$ky0, rcqs_9);else f$ky0 != null && f$ky0['runWith']([0x1]);
        } });
    }, ti45h['readNativeFile'] = function (mcs9z, bhoxti) {
      ti45h['fs']['readFile']({ 'filePath': mcs9z, 'encoding': '', 'success': function (sc_r9) {
          bhoxti != null && bhoxti['runWith']([0x0]);
        }, 'fail': function (m4z9j_) {
          bhoxti != null && bhoxti['runWith']([0x1]);
        } });
    }, ti45h['down'] = function (rs$l, y7uw61, thd5oi, iobx) {
      y7uw61 === void 0x0 && (y7uw61 = 'ascill'), iobx === void 0x0 && (iobx = '');var z9m4jd = ti45h['getFileNativePath'](iobx),
          ht5di = ti45h['wxdown']({ 'url': rs$l, 'filePath': z9m4jd, 'success': function (cqvs_r) {
          if (cqvs_r['statusCode'] === 0xc8) ti45h['readFile'](cqvs_r['filePath'], y7uw61, thd5oi, iobx);
        }, 'fail': function (p2neb) {
          thd5oi != null && thd5oi['runWith']([0x1, p2neb]);
        } });ht5di['onProgressUpdate'](function (e2g8) {
        thd5oi != null && thd5oi['runWith']([0x2, e2g8['progress']]);
      });
    }, ti45h['readFile'] = function (_9mcsz, _rcqvs, uf6y7, vf$lk0) {
      _rcqvs === void 0x0 && (_rcqvs = 'ascill'), vf$lk0 === void 0x0 && (vf$lk0 = ''), ti45h['fs']['readFile']({ 'filePath': _9mcsz, 'encoding': _rcqvs, 'success': function (p2x) {
          if (_9mcsz['indexOf']('http://') != -0x1 || _9mcsz['indexOf']('https://') != -0x1) ti45h['onFileUpdate'](_9mcsz, vf$lk0);uf6y7 != null && uf6y7['runWith']([0x0, p2x]);
        }, 'fail': function (yu1w7) {
          if (yu1w7) uf6y7 != null && uf6y7['runWith']([0x1, yu1w7]);
        } });
    }, ti45h['downImg'] = function (y7k, dmji54, ti4d5h) {
      ti4d5h === void 0x0 && (ti4d5h = '');var f06lyk = ti45h['wxdown']({ 'url': y7k, 'success': function (itd5h4) {
          itd5h4['statusCode'] === 0xc8 && ti45h['copyFile'](itd5h4['tempFilePath'], ti4d5h, dmji54);
        }, 'fail': function (d45im) {
          dmji54 != null && dmji54['runWith']([0x1, d45im]);
        } });
    }, ti45h['copyFile'] = function (svcq_r, _rs9qc, hidt54) {
      var kf$l0v = svcq_r['split']('/'),
          j4d5mz = kf$l0v[kf$l0v['length'] - 0x1],
          d4j5ti = _rs9qc['split']('?')[0x0],
          ky1f = ti45h['getFileInfo'](_rs9qc),
          opxb82 = ti45h['getFileNativePath'](j4d5mz);ti45h['fs']['copyFile']({ 'srcPath': svcq_r, 'destPath': opxb82, 'success': function (hoxtp) {
          if (!ky1f) ti45h['onSaveFile'](_rs9qc, j4d5mz), hidt54 != null && hidt54['runWith']([0x0]);else {
            if (ky1f['readyUrl'] != _rs9qc) ti45h['remove'](j4d5mz, _rs9qc, hidt54);
          }
        }, 'fail': function (ls$rqv) {
          hidt54 != null && hidt54['runWith']([0x1, ls$rqv]);
        } });
    }, ti45h['getFileNativePath'] = function ($cq) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $cq;
    }, ti45h['remove'] = function (_cqrs, f76yk1, _csr9z) {
      f76yk1 === void 0x0 && (f76yk1 = '');var r0vl = ti45h['getFileInfo'](f76yk1),
          $lqsv = ti45h['getFileNativePath'](r0vl['md5']);k0$lqv['loader']['clearRes'](r0vl['readyUrl']), ti45h['fs']['unlink']({ 'filePath': $lqsv, 'success': function (fk706) {
          if (f76yk1 != '') ti45h['onSaveFile'](f76yk1, _cqrs);_csr9z != null && _csr9z['runWith']([0x0]);
        }, 'fail': function (sm9_cz) {} });
    }, ti45h['onSaveFile'] = function (s$rvql, kf167y) {
      var _cmjz = s$rvql['split']('?')[0x0];ti45h['filesListObj'][_cmjz] = { 'md5': kf167y, 'readyUrl': s$rvql }, ti45h['fs']['writeFile']({ 'filePath': ti45h['fileNativeDir'] + '/' + ti45h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ti45h['filesListObj']), 'success': function (o5ix) {
          console['log']('写入测试测试成功：', o5ix);
        }, 'fail': function (zm4_j) {
          console['log']('写入测试测试失败：', zm4_j);
        } });
    }, ti45h['existDir'] = function (ijtd4, nb8xp2) {
      ti45h['fs']['mkdir']({ 'dirPath': ijtd4, 'success': function (fyk$) {
          nb8xp2 != null && nb8xp2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (p28ben) {
          if (p28ben['errMsg']['indexOf']('file already exists') != -0x1) ti45h['readSync'](ti45h['fileListName'], 'utf8', nb8xp2);else nb8xp2 != null && nb8xp2['runWith']([0x1, p28ben]);
        } });
    }, ti45h['readSync'] = function (g2n83, y$kl0, n8e3p2, _9) {
      y$kl0 === void 0x0 && (y$kl0 = 'ascill'), _9 === void 0x0 && (_9 = '');var j4z = ti45h['getFileNativePath'](g2n83),
          _rs9q;try {
        _rs9q = ti45h['fs']['readFileSync'](j4z), n8e3p2 != null && n8e3p2['runWith']([0x0, { 'data': _rs9q }]);
      } catch (x2b8) {
        n8e3p2 != null && n8e3p2['runWith']([0x1]);
      }
    }, ti45h['readCache'] = function () {}, ti45h['writeCache'] = function (m5idj) {
      var flvk0 = readyUrl['split']('?')[0x0];ti45h['filesListObj'][flvk0] = { 'md5': md5Name, 'readyUrl': readyUrl }, ti45h['fs']['writeFile']({ 'filePath': ti45h['fileNativeDir'] + '/' + ti45h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ti45h['filesListObj']), 'success': function (m9dzj) {}, 'fail': function (dioh) {} });
    }, ti45h['setNativeFileDir'] = function (wy16) {
      ti45h['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wy16;
    }, ti45h['filesListObj'] = {}, ti45h['fileNativeDir'] = null, ti45h['fileListName'] = 'layaairfiles.txt', ti45h['ziyuFileData'] = {}, $qkl0v(ti45h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ti45h;
  }(fl0y6k),
      csz9 = function (y6fk0) {
    function m_9cjz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], m_9cjz['__super']['call'](this), this['_sound'] = m_9cjz['_createSound']();
    }$vk0lf(m_9cjz, 'laya.wx.mini.MiniSound', y6fk0);var dt45ih = m_9cjz['prototype'];return dt45ih['load'] = function (dtoi) {
      var id5m4j = this;dtoi = bxpt['formatURL'](dtoi), this['url'] = dtoi;if (m_9cjz['_audioCache'][dtoi]) {
        this['event']('complete');return;
      }function bep8() {
        if (m_9cjz['_null'] != undefined) id5m4j['_sound']['onCanplay'](m_9cjz['_null']), id5m4j['_sound']['onError'](m_9cjz['_null']);else try {
          id5m4j['_sound']['onCanplay'](null), id5m4j['_sound']['onError'](null), m_9cjz['_null'] = null;
        } catch (hotb) {
          console['warn']('[wxmini] _clearSound:' + hotb), id5m4j['_sound']['onCanplay'](zr_c9), id5m4j['_sound']['onError'](zr_c9), m_9cjz['_null'] = zr_c9;
        }
      }function y671f() {
        bep8(), bopx8['loaded'] = !![], bopx8['event']('complete'), m_9cjz['_audioCache'][bopx8['url']] = bopx8;
      }function k0l6(d5jt4i) {
        console['error']('errCode=' + d5jt4i['errCode'] + '  errMsg=' + d5jt4i['errMsg']), bep8(), bopx8['event']('error');
      }function zr_c9() {}this['_sound']['onCanplay'](y671f), this['_sound']['onError'](k0l6), this['_sound']['src'] = dtoi;var bopx8 = this;
    }, dt45ih['play'] = function (bxtohi, h45i) {
      bxtohi === void 0x0 && (bxtohi = 0x0), h45i === void 0x0 && (h45i = 0x0);var n8bpx2;if (this['url'] == kl$f0y['_tMusic']) {
        if (!m_9cjz['_musicAudio']) m_9cjz['_musicAudio'] = m_9cjz['_createSound']();n8bpx2 = m_9cjz['_musicAudio'];
      } else n8bpx2 = m_9cjz['_createSound']();n8bpx2['src'] = this['url'];var $kvql0 = new dzm9j4(n8bpx2);return $kvql0['url'] = this['url'], $kvql0['loops'] = h45i, $kvql0['startTime'] = bxtohi, $kvql0['play'](), kl$f0y['addChannel']($kvql0), $kvql0;
    }, dt45ih['dispose'] = function () {
      var h4td5i = m_9cjz['_audioCache'][this['url']];h4td5i && (h4td5i['src'] = '', delete m_9cjz['_audioCache'][this['url']]);
    }, bh2x(0x0, dt45ih, 'duration', function () {
      return this['_sound']['duration'];
    }), m_9cjz['_createSound'] = function () {
      return m_9cjz['_id']++, _srcq['window']['wx']['createInnerAudioContext']();
    }, m_9cjz['_musicAudio'] = null, m_9cjz['_id'] = 0x0, m_9cjz['_audioCache'] = {}, m_9cjz['_null'] = undefined, m_9cjz;
  }(fl0y6k),
      dzm9j4 = function (xnpb2) {
    function x8pn(fkl) {
      this['_audio'] = null, this['_onEnd'] = null, x8pn['__super']['call'](this), this['_audio'] = fkl, this['_onEnd'] = cr_q9s['bind'](this['__onEnd'], this), fkl['onEnded'](this['_onEnd']);
    }$vk0lf(x8pn, 'laya.wx.mini.MiniSoundChannel', xnpb2);var txh5io = x8pn['prototype'];return txh5io['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (k0$lqv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, txh5io['__onNull'] = function () {}, txh5io['play'] = function () {
      this['isStopped'] = ![], kl$f0y['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, txh5io['stop'] = function () {
      this['isStopped'] = !![], kl$f0y['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (x8pn['_null'] != undefined) this['_audio']['onEnded'](x8pn['_null']);else try {
        this['_audio']['onEnded'](null), x8pn['_null'] = null;
      } catch (n28e3p) {
        console['warn']('[wxmini] stop:' + n28e3p), this['_audio']['onEnded'](cr_q9s['bind'](this['__onNull'], this)), x8pn['_null'] = cr_q9s['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, txh5io['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, txh5io['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kl$f0y['addChannel'](this), this['_audio']['play']();
    }, bh2x(0x0, txh5io, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), bh2x(0x0, txh5io, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), bh2x(0x0, txh5io, 'volume', function () {
      return 0x1;
    }, function (bhop2) {}), x8pn['_null'] = undefined, x8pn;
  }(hptbo);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var sc9mz_ in Laya) {
    var scq$v = Laya[sc9mz_];scq$v && scq$v['__isclass'] && (exports[sc9mz_] = scq$v);
  }
});