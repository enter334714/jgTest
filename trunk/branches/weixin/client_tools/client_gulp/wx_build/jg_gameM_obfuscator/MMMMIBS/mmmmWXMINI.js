var Y = wx.$M;
(function (window, document, vwdrfb) {
  var ku1xy9 = vwdrfb['un'],
      k9rxv1 = vwdrfb['uns'],
      p8ze2t = vwdrfb['static'],
      nhjm5 = vwdrfb['class'],
      ihmjn5 = vwdrfb['getset'],
      cgoea8 = vwdrfb['__newvec'],
      $0dl5 = laya['utils']['Browser'],
      aecg2 = laya['events']['Event'],
      ukq3 = laya['events']['EventDispatcher'],
      s_m4j = laya['resource']['HTMLImage'],
      v9wf1 = laya['utils']['Handler'],
      bw9vrf = laya['display']['Input'],
      h_mnj = laya['net']['Loader'],
      i0l5d$ = laya['maths']['Matrix'],
      h7nijm = laya['renders']['Render'],
      xy9u = laya['utils']['RunDriver'],
      ms74 = laya['media']['Sound'],
      _74s6 = laya['media']['SoundChannel'],
      e2a8 = laya['media']['SoundManager'],
      y3quk = laya['display']['Stage'],
      lb0w$d = laya['net']['URL'],
      q3kyxu = laya['utils']['Utils'],
      nmhi5j = function () {
    function c6ags() {}return nhjm5(c6ags, 'laya.wx.mini.MiniAdpter'), c6ags['getJson'] = function (a6g8) {
      return JSON['parse'](a6g8);
    }, c6ags['init'] = function (rvwbd, y1xqk) {
      rvwbd === void 0x0 && (rvwbd = ![]), y1xqk === void 0x0 && (y1xqk = ![]);if (c6ags['_inited']) return;c6ags['window'] = window;if (c6ags['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;c6ags['_inited'] = !![], c6ags['isZiYu'] = y1xqk, c6ags['isPosMsgYu'] = rvwbd, c6ags['EnvConfig'] = {}, !c6ags['isZiYu'] && (b0wl['setNativeFileDir']('/layaairGame'), b0wl['existDir'](b0wl['fileNativeDir'], v9wf1['create'](c6ags, c6ags['onMkdirCallBack']))), c6ags['window']['focus'] = function () {}, vwdrfb['getUrlPath'] = function () {}, c6ags['window']['logtime'] = function (e2zp) {}, c6ags['window']['alertTimeLog'] = function (h0iln5) {}, c6ags['window']['resetShareInfo'] = function () {}, c6ags['window']['CanvasRenderingContext2D'] = function () {}, c6ags['window']['CanvasRenderingContext2D']['prototype'] = c6ags['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], c6ags['window']['document']['body']['appendChild'] = function () {}, c6ags['EnvConfig']['pixelRatioInt'] = 0x0, xy9u['getPixelRatio'] = c6ags['pixelRatio'], c6ags['_preCreateElement'] = $0dl5['createElement'], $0dl5['createElement'] = c6ags['createElement'], xy9u['createShaderCondition'] = c6ags['createShaderCondition'], q3kyxu['parseXMLFromString'] = c6ags['parseXMLFromString'], bw9vrf['_createInputElement'] = k1xuqy['_createInputElement'], c6ags['EnvConfig']['load'] = h_mnj['prototype']['load'], h_mnj['prototype']['load'] = x9k1ur['prototype']['load'], c6ags['isZiYu'] && rvwbd && wx['onMessage'](function (tac28) {
        tac28['isLoad'] && (b0wl['ziyuFileData'][tac28['url']] = tac28['data']);
      });
    }, c6ags['onMkdirCallBack'] = function (_h7mjn, et8a2) {
      if (!_h7mjn) b0wl['filesListObj'] = JSON['parse'](et8a2['data']);
    }, c6ags['pixelRatio'] = function () {
      if (!c6ags['EnvConfig']['pixelRatioInt']) try {
        var uk19rx = wx['getSystemInfoSync']();return c6ags['EnvConfig']['pixelRatioInt'] = uk19rx['pixelRatio'], uk19rx = uk19rx, uk19rx['pixelRatio'];
      } catch (m7ni) {}return c6ags['EnvConfig']['pixelRatioInt'];
    }, c6ags['createElement'] = function (vbfdw$) {
      if (vbfdw$ == 'canvas') {
        var zt82ep;return c6ags['idx'] == 0x1 ? c6ags['isZiYu'] ? (zt82ep = sharedCanvas, zt82ep['style'] = {}) : zt82ep = window['canvas'] : zt82ep = window['wx']['createCanvas'](), c6ags['idx']++, zt82ep;
      } else {
        if (vbfdw$ == 'textarea' || vbfdw$ == 'input') return c6ags['onCreateInput'](vbfdw$);else {
          if (vbfdw$ == 'div') {
            var etc28a = c6ags['_preCreateElement'](vbfdw$);return etc28a['contains'] = function (vbrw9) {
              return null;
            }, etc28a['removeChild'] = function (gea8c) {}, etc28a;
          } else return c6ags['_preCreateElement'](vbfdw$);
        }
      }
    }, c6ags['onCreateInput'] = function (f0w$d) {
      var cz2et = c6ags['_preCreateElement'](f0w$d);return cz2et['focus'] = k1xuqy['wxinputFocus'], cz2et['blur'] = k1xuqy['wxinputblur'], cz2et['style'] = {}, cz2et['value'] = 0x0, cz2et['parentElement'] = {}, cz2et['placeholder'] = {}, cz2et['type'] = {}, cz2et['setColor'] = function (ur1xk9) {}, cz2et['setType'] = function (kxu91) {}, cz2et['setFontFace'] = function (v91kxr) {}, cz2et['addEventListener'] = function (ega8c) {}, cz2et['contains'] = function (m4_j7h) {
        return null;
      }, cz2et['removeChild'] = function (so7_64) {}, cz2et;
    }, c6ags['createShaderCondition'] = function (rxk1v9) {
      var gaceo8 = this,
          q3kuyx = function () {
        var s64a = rxk1v9;return gaceo8[rxk1v9['replace']('this.', '')];
      };return q3kuyx;
    }, c6ags['EnvConfig'] = null, c6ags['window'] = null, c6ags['_preCreateElement'] = null, c6ags['_inited'] = ![], c6ags['wxRequest'] = null, c6ags['systemInfo'] = null, c6ags['version'] = '0.0.1', c6ags['isZiYu'] = ![], c6ags['isPosMsgYu'] = ![], c6ags['parseXMLFromString'] = function (gosac6) {
      var e28zt, ni0$;gosac6 = gosac6['replace'](/>\s+</g, '><');try {
        e28zt = new window['Parser']['DOMParser']()['parseFromString'](gosac6, 'text/xml');
      } catch (u9r1kx) {
        throw '需要引入xml解析库文件';
      }return e28zt;
    }, c6ags['idx'] = 0x1, c6ags;
  }(),
      w$fdb = function () {
    function _g46s() {}nhjm5(_g46s, 'laya.wx.mini.MiniImage');var o674s_ = _g46s['prototype'];return o674s_['_loadImage'] = function (_4mhj7) {
      var ky1uqx = this,
          _nhm = ![];_4mhj7['indexOf']('layaNativeDir/') == -0x1 && (_nhm = !![], _4mhj7 = lb0w$d['formatURL'](_4mhj7));if (!b0wl['getFileInfo'](_4mhj7)) {
        if (_4mhj7['indexOf']('http://') != -0x1 || _4mhj7['indexOf']('https://') != -0x1) b0wl['downImg'](_4mhj7, new v9wf1(_g46s, _g46s['onDownImgCallBack'], [_4mhj7, ky1uqx]), _4mhj7);else _g46s['onCreateImage'](_4mhj7, ky1uqx, !![]);
      } else _g46s['onCreateImage'](_4mhj7, ky1uqx, !_nhm);
    }, _g46s['onDownImgCallBack'] = function (f1wv9, bd$f0, nm5ilh) {
      if (!nm5ilh) _g46s['onCreateImage'](f1wv9, bd$f0);else bd$f0['onError'](null);
    }, _g46s['onCreateImage'] = function (inhj5m, rw1v, bd$l05) {
      bd$l05 === void 0x0 && (bd$l05 = ![]);var fv91r;if (!bd$l05) {
        var $d0fbw = b0wl['getFileInfo'](inhj5m),
            wvr = $d0fbw['md5'];fv91r = b0wl['getFileNativePath'](wvr);
      } else fv91r = inhj5m;if (rw1v['imgCache'] == null) rw1v['imgCache'] = {};var r9w1f;function rdfv() {
        r9w1f['onload'] = null, r9w1f['onerror'] = null, delete rw1v['imgCache'][inhj5m];
      };var ec8ga2 = function () {
        rdfv(), rw1v['onLoaded'](r9w1f);
      },
          rvwdb = function () {
        rdfv(), rw1v['event']('error', 'Load image failed');
      };rw1v['_type'] == 'nativeimage' ? (r9w1f = new $0dl5['window']['Image'](), r9w1f['crossOrigin'] = '', r9w1f['onload'] = ec8ga2, r9w1f['onerror'] = rvwdb, r9w1f['src'] = fv91r, rw1v['imgCache'][inhj5m] = r9w1f) : new s_m4j['create'](fv91r, { 'onload': ec8ga2, 'onerror': rvwdb, 'onCreate': function (bdwf0$) {
          r9w1f = bdwf0$, rw1v['imgCache'][inhj5m] = bdwf0$;
        } });
    }, _g46s;
  }(),
      k1xuqy = function () {
    function n5mjih() {}return nhjm5(n5mjih, 'laya.wx.mini.MiniInput'), n5mjih['_createInputElement'] = function () {
      bw9vrf['_initInput'](bw9vrf['area'] = $0dl5['createElement']('textarea')), bw9vrf['_initInput'](bw9vrf['input'] = $0dl5['createElement']('input')), bw9vrf['inputContainer'] = $0dl5['createElement']('div'), bw9vrf['inputContainer']['style']['position'] = 'absolute', bw9vrf['inputContainer']['style']['zIndex'] = 0x186a0, $0dl5['container']['appendChild'](bw9vrf['inputContainer']), bw9vrf['inputContainer']['setPos'] = function ($dl50, yukx3) {
        bw9vrf['inputContainer']['style']['left'] = $dl50 + 'px', bw9vrf['inputContainer']['style']['top'] = yukx3 + 'px';
      }, vwdrfb['stage']['on']('resize', null, n5mjih['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ac8ge) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), e2a8['_soundClass'] = $0nl5i, e2a8['_musicClass'] = $0nl5i;
    }, n5mjih['_onStageResize'] = function () {
      var brdwv = vwdrfb['stage']['_canvasTransform']['identity']();brdwv['scale']($0dl5['width'] / h7nijm['canvas']['width'] / xy9u['getPixelRatio'](), $0dl5['height'] / h7nijm['canvas']['height'] / xy9u['getPixelRatio']());
    }, n5mjih['wxinputFocus'] = function (jnih7) {
      var ld50b$ = bw9vrf['inputElement']['target'];if (ld50b$ && !ld50b$['editable']) return;nmhi5j['window']['wx']['offKeyboardConfirm'](), nmhi5j['window']['wx']['offKeyboardInput'](), nmhi5j['window']['wx']['showKeyboard']({ 'defaultValue': ld50b$['text'], 'maxLength': ld50b$['maxChars'], 'multiple': ld50b$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_hj7mn) {}, 'fail': function (njmh_7) {} }), nmhi5j['window']['wx']['onKeyboardConfirm'](function (uykxq3) {
        var v1rkf9 = uykxq3 ? uykxq3['value'] : '';ld50b$['text'] = v1rkf9, ld50b$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nmhi5j['window']['wx']['onKeyboardInput'](function (t2z8p) {
        var ijn7h = t2z8p ? t2z8p['value'] : '';if (!ld50b$['multiline']) {
          if (ijn7h['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ld50b$['text'] = ijn7h, ld50b$['event']('input');
      });
    }, n5mjih['inputEnter'] = function () {
      bw9vrf['inputElement']['target']['focus'] = ![];
    }, n5mjih['wxinputblur'] = function () {
      n5mjih['hideKeyboard']();
    }, n5mjih['hideKeyboard'] = function () {
      nmhi5j['window']['wx']['offKeyboardConfirm'](), nmhi5j['window']['wx']['offKeyboardInput'](), nmhi5j['window']['wx']['hideKeyboard']({ 'success': function (js4_6) {
          console['log']('隐藏键盘');
        }, 'fail': function (dbwv$) {
          console['log']('隐藏键盘出错:' + (dbwv$ ? dbwv$['errMsg'] : ''));
        } });
    }, n5mjih;
  }(),
      x9k1ur = function () {
    function wbdf$() {}nhjm5(wbdf$, 'laya.wx.mini.MiniLoader');var y3x = wbdf$['prototype'];return y3x['load'] = function (aoc8e, vb$wfd, i5mlh, yu9k1, e8goc) {
      i5mlh === void 0x0 && (i5mlh = !![]), e8goc === void 0x0 && (e8goc = ![]);var m5hn = this;m5hn['_url'] = aoc8e;if (aoc8e['indexOf']('data:image') === 0x0) m5hn['_type'] = vb$wfd = 'image';else m5hn['_type'] = vb$wfd || (vb$wfd = m5hn['getTypeFromUrl'](aoc8e));m5hn['_cache'] = i5mlh, m5hn['_data'] = null;var et8a2c = 'ascii';if (aoc8e['indexOf']('.fnt') != -0x1) et8a2c = 'utf8';else vb$wfd == 'arraybuffer' && (et8a2c = '');;var mlnh5i = q3kyxu['getFileExtension'](aoc8e);if (wbdf$['_fileTypeArr']['indexOf'](mlnh5i) != -0x1) nmhi5j['EnvConfig']['load']['call'](this, aoc8e, vb$wfd, i5mlh, yu9k1, e8goc);else {
        if (!b0wl['getFileInfo'](aoc8e)) {
          if (aoc8e['indexOf']('layaNativeDir/') != -0x1) {
            if (nmhi5j['isZiYu']) {
              var mh5inj = b0wl['ziyuFileData'][aoc8e];m5hn['onLoaded'](mh5inj);return;
            } else {
              cosnole['log']('read read'), b0wl['read'](aoc8e, et8a2c, new v9wf1(wbdf$, wbdf$['onReadNativeCallBack'], [et8a2c, aoc8e, vb$wfd, i5mlh, yu9k1, e8goc, m5hn]));return;
            }
          }if (lb0w$d['rootPath'] == '') var ihnl5m = aoc8e;else ihnl5m = aoc8e['split'](lb0w$d['rootPath'])[0x0];aoc8e['indexOf']('http://') != -0x1 || aoc8e['indexOf']('https://') != -0x1 ? nmhi5j['EnvConfig']['load']['call'](m5hn, aoc8e, vb$wfd, i5mlh, yu9k1, e8goc) : b0wl['readFile'](ihnl5m, et8a2c, new v9wf1(wbdf$, wbdf$['onReadNativeCallBack'], [et8a2c, aoc8e, vb$wfd, i5mlh, yu9k1, e8goc, m5hn]), aoc8e);
        } else nmhi5j['EnvConfig']['load']['call'](this, aoc8e, vb$wfd, i5mlh, yu9k1, e8goc);
      }
    }, y3x['resMgrLoad'] = function (ykxq1u, nj7mhi, mihl5, f1w, k1u9xr, o47_, u91kyx) {
      mihl5 === void 0x0 && (mihl5 = 0x0), f1w === void 0x0 && (f1w = ![]), k1u9xr === void 0x0 && (k1u9xr = ![]), o47_ === void 0x0 && (o47_ = 0x0), u91kyx === void 0x0 && (u91kyx = 0x3), ykxq1u['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ykxq1u), nmhi5j['EnvConfig']['resMgrLoad'](ykxq1u, (v$fbw, ags, ca8e) => {
        wbdf$['prototype']['resMgrLoadCallBack'](v$fbw, ags, ca8e, nj7mhi);
      }, mihl5, f1w, k1u9xr, o47_, u91kyx);
    }, y3x['resMgrLoadCallBack'] = function (kurx1, j47s_, gaoec, gsa4o6) {
      console['log']('buff:::', kurx1, gaoec, b0wl['fileNativeDir'] + '///' + b0wl['fileListName']), gsa4o6(kurx1, j47s_, gaoec);
    }, y3x['clearRes'] = function (pe8tz2, j4_h7) {
      j4_h7 === void 0x0 && (j4_h7 = ![]);var s64g = this;s64g['clearRes'](pe8tz2, j4_h7);var jhmin5 = b0wl['getFileInfo'](pe8tz2);if (jhmin5 && (pe8tz2['indexOf']('http://') != -0x1 || pe8tz2['indexOf']('https://') != -0x1)) {
        var hi5mnl = jhmin5['md5'],
            tze28 = b0wl['getFileNativePath'](hi5mnl);b0wl['remove'](tze28);
      }
    }, wbdf$['onReadNativeCallBack'] = function (k3xyqu, kuyq3x, x19ur, mh_j74, rvdwfb, o4g_, kv9f1r, a8c2t, ihnm7) {
      mh_j74 === void 0x0 && (mh_j74 = !![]), o4g_ === void 0x0 && (o4g_ = ![]), a8c2t === void 0x0 && (a8c2t = 0x0);if (!a8c2t) {
        var atc82e;if (x19ur == 'json' || x19ur == 'atlas') atc82e = nmhi5j['getJson'](ihnm7['data']);else x19ur == 'xml' ? atc82e = q3kyxu['parseXMLFromString'](ihnm7['data']) : atc82e = ihnm7['data'];kv9f1r['onLoaded'](atc82e), !nmhi5j['isZiYu'] && nmhi5j['isPosMsgYu'] && x19ur != 'arraybuffer' && wx['postMessage']({ 'url': kuyq3x, 'data': atc82e, 'isLoad': !![] });
      } else a8c2t == 0x1 && nmhi5j['EnvConfig']['load']['call'](kv9f1r, kuyq3x, x19ur, mh_j74, rvdwfb, o4g_);
    }, p8ze2t(wbdf$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), wbdf$;
  }(),
      b0wl = function (ogs64a) {
    function pt82() {
      pt82['__super']['call'](this);;
    }return nhjm5(pt82, 'laya.wx.mini.MiniFileMgr', ogs64a), pt82['isLoadFile'] = function (wfvdb$) {
      return pt82['_fileTypeArr']['indexOf'](wfvdb$) != -0x1 ? !![] : ![];
    }, pt82['getFileInfo'] = function (ez82) {
      var h47j_m = ez82['split']('?')[0x0],
          d$bwvf = pt82['filesListObj'][h47j_m];if (d$bwvf == null) return null;else return d$bwvf;return null;
    }, pt82['onFileUpdate'] = function (in$05l, bwfvrd) {
      var o4sga6 = in$05l['split']('/'),
          ni$0 = o4sga6[o4sga6['length'] - 0x1],
          gaso46 = pt82['getFileInfo'](bwfvrd);if (gaso46 == null) pt82['onSaveFile'](bwfvrd, ni$0);else {
        if (gaso46['readyUrl'] != bwfvrd) pt82['remove'](ni$0, bwfvrd);
      }
    }, pt82['exits'] = function (tez2p8, mh7jni) {
      var y19kux = pt82['getFileNativePath'](tez2p8);pt82['fs']['getFileInfo']({ 'filePath': y19kux, 'success': function ($i) {
          mh7jni != null && mh7jni['runWith']([0x0, $i]);
        }, 'fail': function ($l5in0) {
          mh7jni != null && mh7jni['runWith']([0x1, $l5in0]);
        } });
    }, pt82['read'] = function (rbf9v, eptz8, bd5, d5$b) {
      eptz8 === void 0x0 && (eptz8 = 'ascill'), d5$b === void 0x0 && (d5$b = '');var hnji;d5$b != '' ? hnji = pt82['getFileNativePath'](rbf9v) : hnji = rbf9v, pt82['fs']['readFile']({ 'filePath': hnji, 'encoding': eptz8, 'success': function (mhlni5) {
          bd5 != null && bd5['runWith']([0x0, mhlni5]);
        }, 'fail': function (r91wv) {
          if (r91wv && d5$b != '') pt82['down'](d5$b, eptz8, bd5, d5$b);else bd5 != null && bd5['runWith']([0x1]);
        } });
    }, pt82['readNativeFile'] = function (ate8c2, d0i$5) {
      pt82['fs']['readFile']({ 'filePath': ate8c2, 'encoding': '', 'success': function (os67_4) {
          d0i$5 != null && d0i$5['runWith']([0x0]);
        }, 'fail': function (gc6a) {
          d0i$5 != null && d0i$5['runWith']([0x1]);
        } });
    }, pt82['down'] = function (xrk1, hlnmi, u1r9, g82eac) {
      hlnmi === void 0x0 && (hlnmi = 'ascill'), g82eac === void 0x0 && (g82eac = '');var s64aog = pt82['getFileNativePath'](g82eac),
          _hn7m = pt82['wxdown']({ 'url': xrk1, 'filePath': s64aog, 'success': function (ky1q) {
          if (ky1q['statusCode'] === 0xc8) pt82['readFile'](ky1q['filePath'], hlnmi, u1r9, g82eac);
        }, 'fail': function ($lwdb) {
          u1r9 != null && u1r9['runWith']([0x1, $lwdb]);
        } });_hn7m['onProgressUpdate'](function (rbvdf) {
        u1r9 != null && u1r9['runWith']([0x2, rbvdf['progress']]);
      });
    }, pt82['readFile'] = function (l5n$i0, b0dw, rxu, h7m4) {
      b0dw === void 0x0 && (b0dw = 'ascill'), h7m4 === void 0x0 && (h7m4 = ''), pt82['fs']['readFile']({ 'filePath': l5n$i0, 'encoding': b0dw, 'success': function (uyk1xq) {
          if (l5n$i0['indexOf']('http://') != -0x1 || l5n$i0['indexOf']('https://') != -0x1) pt82['onFileUpdate'](l5n$i0, h7m4);rxu != null && rxu['runWith']([0x0, uyk1xq]);
        }, 'fail': function (uyk19x) {
          if (uyk19x) rxu != null && rxu['runWith']([0x1, uyk19x]);
        } });
    }, pt82['downImg'] = function (sgcoa6, $50in, x9k1vr) {
      x9k1vr === void 0x0 && (x9k1vr = '');var js76_4 = pt82['wxdown']({ 'url': sgcoa6, 'success': function (_m7s) {
          _m7s['statusCode'] === 0xc8 && pt82['copyFile'](_m7s['tempFilePath'], x9k1vr, $50in);
        }, 'fail': function (ga6) {
          $50in != null && $50in['runWith']([0x1, ga6]);
        } });
    }, pt82['copyFile'] = function (ca2eg, zpte82, ace2t) {
      var mni5h = ca2eg['split']('/'),
          fvwr91 = mni5h[mni5h['length'] - 0x1],
          u9yk1x = zpte82['split']('?')[0x0],
          mjn7 = pt82['getFileInfo'](zpte82),
          j7m_n = pt82['getFileNativePath'](fvwr91);pt82['fs']['copyFile']({ 'srcPath': ca2eg, 'destPath': j7m_n, 'success': function (gc8o6) {
          if (!mjn7) pt82['onSaveFile'](zpte82, fvwr91), ace2t != null && ace2t['runWith']([0x0]);else {
            if (mjn7['readyUrl'] != zpte82) pt82['remove'](fvwr91, zpte82, ace2t);
          }
        }, 'fail': function (jhnm_) {
          ace2t != null && ace2t['runWith']([0x1, jhnm_]);
        } });
    }, pt82['getFileNativePath'] = function (t8pz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t8pz;
    }, pt82['remove'] = function (bwv, p8etz, hlni5m) {
      p8etz === void 0x0 && (p8etz = '');var eg8cao = pt82['getFileInfo'](p8etz),
          a8o6cg = pt82['getFileNativePath'](eg8cao['md5']);vwdrfb['loader']['clearRes'](eg8cao['readyUrl']), pt82['fs']['unlink']({ 'filePath': a8o6cg, 'success': function (mh5lni) {
          if (p8etz != '') pt82['onSaveFile'](p8etz, bwv);hlni5m != null && hlni5m['runWith']([0x0]);
        }, 'fail': function (d$) {} });
    }, pt82['onSaveFile'] = function (g8a2e, a8ocge) {
      var hm7in = g8a2e['split']('?')[0x0];pt82['filesListObj'][hm7in] = { 'md5': a8ocge, 'readyUrl': g8a2e }, pt82['fs']['writeFile']({ 'filePath': pt82['fileNativeDir'] + '/' + pt82['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pt82['filesListObj']), 'success': function (ge8ac2) {
          console['log']('写入测试测试成功：', ge8ac2);
        }, 'fail': function (yqkx) {
          console['log']('写入测试测试失败：', yqkx);
        } });
    }, pt82['existDir'] = function ($0fw, l0$wb) {
      pt82['fs']['mkdir']({ 'dirPath': $0fw, 'success': function (ge8o) {
          l0$wb != null && l0$wb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (n$0li5) {
          if (n$0li5['errMsg']['indexOf']('file already exists') != -0x1) pt82['readSync'](pt82['fileListName'], 'utf8', l0$wb);else l0$wb != null && l0$wb['runWith']([0x1, n$0li5]);
        } });
    }, pt82['readSync'] = function (wdfv$, f1kv9, w$db0, zt82e) {
      f1kv9 === void 0x0 && (f1kv9 = 'ascill'), zt82e === void 0x0 && (zt82e = '');var so67_4 = pt82['getFileNativePath'](wdfv$),
          xkrv91;try {
        xkrv91 = pt82['fs']['readFileSync'](so67_4), w$db0 != null && w$db0['runWith']([0x0, { 'data': xkrv91 }]);
      } catch (gs4ao6) {
        w$db0 != null && w$db0['runWith']([0x1]);
      }
    }, pt82['readCache'] = function () {}, pt82['writeCache'] = function (dvbfwr) {
      var bwdf$v = readyUrl['split']('?')[0x0];pt82['filesListObj'][bwdf$v] = { 'md5': md5Name, 'readyUrl': readyUrl }, pt82['fs']['writeFile']({ 'filePath': pt82['fileNativeDir'] + '/' + pt82['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pt82['filesListObj']), 'success': function (os746_) {}, 'fail': function (vxk19r) {} });
    }, pt82['setNativeFileDir'] = function (_467s) {
      pt82['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _467s;
    }, pt82['filesListObj'] = {}, pt82['fileNativeDir'] = null, pt82['fileListName'] = 'layaairfiles.txt', pt82['ziyuFileData'] = {}, p8ze2t(pt82, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pt82;
  }(ukq3),
      $0nl5i = function (mn_7j) {
    function vr9fk() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vr9fk['__super']['call'](this), this['_sound'] = vr9fk['_createSound']();
    }nhjm5(vr9fk, 'laya.wx.mini.MiniSound', mn_7j);var eat = vr9fk['prototype'];return eat['load'] = function (ac2e) {
      var oagc = this;ac2e = lb0w$d['formatURL'](ac2e), this['url'] = ac2e;if (vr9fk['_audioCache'][ac2e]) {
        this['event']('complete');return;
      }function z8ept2() {
        if (vr9fk['_null'] != undefined) oagc['_sound']['onCanplay'](vr9fk['_null']), oagc['_sound']['onError'](vr9fk['_null']);else try {
          oagc['_sound']['onCanplay'](null), oagc['_sound']['onError'](null), vr9fk['_null'] = null;
        } catch (cea2t) {
          console['warn']('[wxmini] _clearSound:' + cea2t), oagc['_sound']['onCanplay'](drvwb), oagc['_sound']['onError'](drvwb), vr9fk['_null'] = drvwb;
        }
      }function w0db$l() {
        z8ept2(), cosga['loaded'] = !![], cosga['event']('complete'), vr9fk['_audioCache'][cosga['url']] = cosga;
      }function xrk1u9(drbwf) {
        console['error']('errCode=' + drbwf['errCode'] + '  errMsg=' + drbwf['errMsg']), z8ept2(), cosga['event']('error');
      }function drvwb() {}this['_sound']['onCanplay'](w0db$l), this['_sound']['onError'](xrk1u9), this['_sound']['src'] = ac2e;var cosga = this;
    }, eat['play'] = function (r1wf, etcz28) {
      r1wf === void 0x0 && (r1wf = 0x0), etcz28 === void 0x0 && (etcz28 = 0x0);var o8eacg;if (this['url'] == e2a8['_tMusic']) {
        if (!vr9fk['_musicAudio']) vr9fk['_musicAudio'] = vr9fk['_createSound']();o8eacg = vr9fk['_musicAudio'];
      } else o8eacg = vr9fk['_createSound']();o8eacg['src'] = this['url'];var frv1w = new rdvfb(o8eacg);return frv1w['url'] = this['url'], frv1w['loops'] = etcz28, frv1w['startTime'] = r1wf, frv1w['play'](), e2a8['addChannel'](frv1w), frv1w;
    }, eat['dispose'] = function () {
      var bwf$ = vr9fk['_audioCache'][this['url']];bwf$ && (bwf$['src'] = '', delete vr9fk['_audioCache'][this['url']]);
    }, ihmjn5(0x0, eat, 'duration', function () {
      return this['_sound']['duration'];
    }), vr9fk['_createSound'] = function () {
      return vr9fk['_id']++, nmhi5j['window']['wx']['createInnerAudioContext']();
    }, vr9fk['_musicAudio'] = null, vr9fk['_id'] = 0x0, vr9fk['_audioCache'] = {}, vr9fk['_null'] = undefined, vr9fk;
  }(ukq3),
      rdvfb = function (d0$wbf) {
    function o6ag4(nil$) {
      this['_audio'] = null, this['_onEnd'] = null, o6ag4['__super']['call'](this), this['_audio'] = nil$, this['_onEnd'] = q3kyxu['bind'](this['__onEnd'], this), nil$['onEnded'](this['_onEnd']);
    }nhjm5(o6ag4, 'laya.wx.mini.MiniSoundChannel', d0$wbf);var l05ni = o6ag4['prototype'];return l05ni['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vwdrfb['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, l05ni['__onNull'] = function () {}, l05ni['play'] = function () {
      this['isStopped'] = ![], e2a8['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, l05ni['stop'] = function () {
      this['isStopped'] = !![], e2a8['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (o6ag4['_null'] != undefined) this['_audio']['onEnded'](o6ag4['_null']);else try {
        this['_audio']['onEnded'](null), o6ag4['_null'] = null;
      } catch (v9fbwr) {
        console['warn']('[wxmini] stop:' + v9fbwr), this['_audio']['onEnded'](q3kyxu['bind'](this['__onNull'], this)), o6ag4['_null'] = q3kyxu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, l05ni['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, l05ni['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], e2a8['addChannel'](this), this['_audio']['play']();
    }, ihmjn5(0x0, l05ni, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ihmjn5(0x0, l05ni, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ihmjn5(0x0, l05ni, 'volume', function () {
      return 0x1;
    }, function (acgo6s) {}), o6ag4['_null'] = undefined, o6ag4;
  }(_74s6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var n_h7 in Laya) {
    var gcao86 = Laya[n_h7];gcao86 && gcao86['__isclass'] && (exports[n_h7] = gcao86);
  }
});