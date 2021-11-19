var Y = wx.$M;
(function (window, document, n50l) {
  var k3yqux = n50l['un'],
      wb9vfr = n50l['uns'],
      rw = n50l['static'],
      bd0wf$ = n50l['class'],
      mnijh7 = n50l['getset'],
      nm7hj_ = n50l['__newvec'],
      wf9br = laya['utils']['Browser'],
      _4sj = laya['events']['Event'],
      eao8g = laya['events']['EventDispatcher'],
      vx1kr = laya['resource']['HTMLImage'],
      cao8ge = laya['utils']['Handler'],
      z28 = laya['display']['Input'],
      pzet2 = laya['net']['Loader'],
      jm7_s4 = laya['maths']['Matrix'],
      aec2g8 = laya['renders']['Render'],
      fvrw1 = laya['utils']['RunDriver'],
      li05nh = laya['media']['Sound'],
      nh7 = laya['media']['SoundChannel'],
      nl0h5i = laya['media']['SoundManager'],
      vdwfbr = laya['display']['Stage'],
      wfrv9 = laya['net']['URL'],
      ecg8a = laya['utils']['Utils'],
      bdw$0l = function () {
    function x9r1v() {}return bd0wf$(x9r1v, 'laya.wx.mini.MiniAdpter'), x9r1v['getJson'] = function (goe8) {
      return JSON['parse'](goe8);
    }, x9r1v['init'] = function (njm7ih, $0ld5b) {
      njm7ih === void 0x0 && (njm7ih = ![]), $0ld5b === void 0x0 && ($0ld5b = ![]);if (x9r1v['_inited']) return;x9r1v['window'] = window;if (x9r1v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;x9r1v['_inited'] = !![], x9r1v['isZiYu'] = $0ld5b, x9r1v['isPosMsgYu'] = njm7ih, x9r1v['EnvConfig'] = {}, !x9r1v['isZiYu'] && (m5hij['setNativeFileDir']('/layaairGame'), m5hij['existDir'](m5hij['fileNativeDir'], cao8ge['create'](x9r1v, x9r1v['onMkdirCallBack']))), x9r1v['window']['focus'] = function () {}, n50l['getUrlPath'] = function () {}, x9r1v['window']['logtime'] = function (hnil05) {}, x9r1v['window']['alertTimeLog'] = function (ldbw) {}, x9r1v['window']['resetShareInfo'] = function () {}, x9r1v['window']['CanvasRenderingContext2D'] = function () {}, x9r1v['window']['CanvasRenderingContext2D']['prototype'] = x9r1v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], x9r1v['window']['document']['body']['appendChild'] = function () {}, x9r1v['EnvConfig']['pixelRatioInt'] = 0x0, fvrw1['getPixelRatio'] = x9r1v['pixelRatio'], x9r1v['_preCreateElement'] = wf9br['createElement'], wf9br['createElement'] = x9r1v['createElement'], fvrw1['createShaderCondition'] = x9r1v['createShaderCondition'], ecg8a['parseXMLFromString'] = x9r1v['parseXMLFromString'], z28['_createInputElement'] = wfv19['_createInputElement'], x9r1v['EnvConfig']['load'] = pzet2['prototype']['load'], pzet2['prototype']['load'] = kv1r9['prototype']['load'], x9r1v['isZiYu'] && njm7ih && wx['onMessage'](function (i5nlm) {
        i5nlm['isLoad'] && (m5hij['ziyuFileData'][i5nlm['url']] = i5nlm['data']);
      });
    }, x9r1v['onMkdirCallBack'] = function (cgoa6, n7mjih) {
      if (!cgoa6) m5hij['filesListObj'] = JSON['parse'](n7mjih['data']);
    }, x9r1v['pixelRatio'] = function () {
      if (!x9r1v['EnvConfig']['pixelRatioInt']) try {
        var ec2g8a = wx['getSystemInfoSync']();return x9r1v['EnvConfig']['pixelRatioInt'] = ec2g8a['pixelRatio'], ec2g8a = ec2g8a, ec2g8a['pixelRatio'];
      } catch (eocga) {}return x9r1v['EnvConfig']['pixelRatioInt'];
    }, x9r1v['createElement'] = function (r9bfwv) {
      if (r9bfwv == 'canvas') {
        var eg2ca8;return x9r1v['idx'] == 0x1 ? x9r1v['isZiYu'] ? (eg2ca8 = sharedCanvas, eg2ca8['style'] = {}) : eg2ca8 = window['canvas'] : eg2ca8 = window['wx']['createCanvas'](), x9r1v['idx']++, eg2ca8;
      } else {
        if (r9bfwv == 'textarea' || r9bfwv == 'input') return x9r1v['onCreateInput'](r9bfwv);else {
          if (r9bfwv == 'div') {
            var rdvw = x9r1v['_preCreateElement'](r9bfwv);return rdvw['contains'] = function (_jh7mn) {
              return null;
            }, rdvw['removeChild'] = function (ku1xr) {}, rdvw;
          } else return x9r1v['_preCreateElement'](r9bfwv);
        }
      }
    }, x9r1v['onCreateInput'] = function (_n7hmj) {
      var nhj5im = x9r1v['_preCreateElement'](_n7hmj);return nhj5im['focus'] = wfv19['wxinputFocus'], nhj5im['blur'] = wfv19['wxinputblur'], nhj5im['style'] = {}, nhj5im['value'] = 0x0, nhj5im['parentElement'] = {}, nhj5im['placeholder'] = {}, nhj5im['type'] = {}, nhj5im['setColor'] = function (ecoa8g) {}, nhj5im['setType'] = function (jn7_) {}, nhj5im['setFontFace'] = function (fvdbrw) {}, nhj5im['addEventListener'] = function (rbvfwd) {}, nhj5im['contains'] = function (mnhj5i) {
        return null;
      }, nhj5im['removeChild'] = function (zc2te8) {}, nhj5im;
    }, x9r1v['createShaderCondition'] = function ($dw0lb) {
      var vf = this,
          s4_7m = function () {
        var ga82 = $dw0lb;return vf[$dw0lb['replace']('this.', '')];
      };return s4_7m;
    }, x9r1v['EnvConfig'] = null, x9r1v['window'] = null, x9r1v['_preCreateElement'] = null, x9r1v['_inited'] = ![], x9r1v['wxRequest'] = null, x9r1v['systemInfo'] = null, x9r1v['version'] = '0.0.1', x9r1v['isZiYu'] = ![], x9r1v['isPosMsgYu'] = ![], x9r1v['parseXMLFromString'] = function (t2e8) {
      var dfw$vb, j_67s4;t2e8 = t2e8['replace'](/>\s+</g, '><');try {
        dfw$vb = new window['Parser']['DOMParser']()['parseFromString'](t2e8, 'text/xml');
      } catch (a82t) {
        throw '需要引入xml解析库文件';
      }return dfw$vb;
    }, x9r1v['idx'] = 0x1, x9r1v;
  }(),
      wdl0 = function () {
    function vrf() {}bd0wf$(vrf, 'laya.wx.mini.MiniImage');var _7sm4 = vrf['prototype'];return _7sm4['_loadImage'] = function (d$b5) {
      var vrfw91 = this,
          ij7mhn = ![];d$b5['indexOf']('layaNativeDir/') == -0x1 && (ij7mhn = !![], d$b5 = wfrv9['formatURL'](d$b5));if (!m5hij['getFileInfo'](d$b5)) {
        if (d$b5['indexOf']('http://') != -0x1 || d$b5['indexOf']('https://') != -0x1) m5hij['downImg'](d$b5, new cao8ge(vrf, vrf['onDownImgCallBack'], [d$b5, vrfw91]), d$b5);else vrf['onCreateImage'](d$b5, vrfw91, !![]);
      } else vrf['onCreateImage'](d$b5, vrfw91, !ij7mhn);
    }, vrf['onDownImgCallBack'] = function (sgo4a, nm5ihl, f0db$w) {
      if (!f0db$w) vrf['onCreateImage'](sgo4a, nm5ihl);else nm5ihl['onError'](null);
    }, vrf['onCreateImage'] = function (g8oeac, m7_s4, vbfwrd) {
      vbfwrd === void 0x0 && (vbfwrd = ![]);var xy9uk1;if (!vbfwrd) {
        var xq3uk = m5hij['getFileInfo'](g8oeac),
            hjin5m = xq3uk['md5'];xy9uk1 = m5hij['getFileNativePath'](hjin5m);
      } else xy9uk1 = g8oeac;if (m7_s4['imgCache'] == null) m7_s4['imgCache'] = {};var fr1k9v;function o8ga6() {
        fr1k9v['onload'] = null, fr1k9v['onerror'] = null, delete m7_s4['imgCache'][g8oeac];
      };var njmhi = function () {
        o8ga6(), m7_s4['onLoaded'](fr1k9v);
      },
          rvfdb = function () {
        o8ga6(), m7_s4['event']('error', 'Load image failed');
      };m7_s4['_type'] == 'nativeimage' ? (fr1k9v = new wf9br['window']['Image'](), fr1k9v['crossOrigin'] = '', fr1k9v['onload'] = njmhi, fr1k9v['onerror'] = rvfdb, fr1k9v['src'] = xy9uk1, m7_s4['imgCache'][g8oeac] = fr1k9v) : new vx1kr['create'](xy9uk1, { 'onload': njmhi, 'onerror': rvfdb, 'onCreate': function (ld$0b) {
          fr1k9v = ld$0b, m7_s4['imgCache'][g8oeac] = ld$0b;
        } });
    }, vrf;
  }(),
      wfv19 = function () {
    function e28zt() {}return bd0wf$(e28zt, 'laya.wx.mini.MiniInput'), e28zt['_createInputElement'] = function () {
      z28['_initInput'](z28['area'] = wf9br['createElement']('textarea')), z28['_initInput'](z28['input'] = wf9br['createElement']('input')), z28['inputContainer'] = wf9br['createElement']('div'), z28['inputContainer']['style']['position'] = 'absolute', z28['inputContainer']['style']['zIndex'] = 0x186a0, wf9br['container']['appendChild'](z28['inputContainer']), z28['inputContainer']['setPos'] = function (bfrwv, cs6goa) {
        z28['inputContainer']['style']['left'] = bfrwv + 'px', z28['inputContainer']['style']['top'] = cs6goa + 'px';
      }, n50l['stage']['on']('resize', null, e28zt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (wf9v) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), nl0h5i['_soundClass'] = u3yk, nl0h5i['_musicClass'] = u3yk;
    }, e28zt['_onStageResize'] = function () {
      var _gos4 = n50l['stage']['_canvasTransform']['identity']();_gos4['scale'](wf9br['width'] / aec2g8['canvas']['width'] / fvrw1['getPixelRatio'](), wf9br['height'] / aec2g8['canvas']['height'] / fvrw1['getPixelRatio']());
    }, e28zt['wxinputFocus'] = function (kuxy) {
      var _7ms4j = z28['inputElement']['target'];if (_7ms4j && !_7ms4j['editable']) return;bdw$0l['window']['wx']['offKeyboardConfirm'](), bdw$0l['window']['wx']['offKeyboardInput'](), bdw$0l['window']['wx']['showKeyboard']({ 'defaultValue': _7ms4j['text'], 'maxLength': _7ms4j['maxChars'], 'multiple': _7ms4j['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (frvwdb) {}, 'fail': function (df$bv) {} }), bdw$0l['window']['wx']['onKeyboardConfirm'](function (oc8g) {
        var w0f$d = oc8g ? oc8g['value'] : '';_7ms4j['text'] = w0f$d, _7ms4j['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bdw$0l['window']['wx']['onKeyboardInput'](function (o6s4) {
        var _7os6 = o6s4 ? o6s4['value'] : '';if (!_7ms4j['multiline']) {
          if (_7os6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_7ms4j['text'] = _7os6, _7ms4j['event']('input');
      });
    }, e28zt['inputEnter'] = function () {
      z28['inputElement']['target']['focus'] = ![];
    }, e28zt['wxinputblur'] = function () {
      e28zt['hideKeyboard']();
    }, e28zt['hideKeyboard'] = function () {
      bdw$0l['window']['wx']['offKeyboardConfirm'](), bdw$0l['window']['wx']['offKeyboardInput'](), bdw$0l['window']['wx']['hideKeyboard']({ 'success': function (r91fkv) {
          console['log']('隐藏键盘');
        }, 'fail': function (s_m4) {
          console['log']('隐藏键盘出错:' + (s_m4 ? s_m4['errMsg'] : ''));
        } });
    }, e28zt;
  }(),
      kv1r9 = function () {
    function mi5() {}bd0wf$(mi5, 'laya.wx.mini.MiniLoader');var wvr9f1 = mi5['prototype'];return wvr9f1['load'] = function (sago46, vwdfbr, l$5ni0, y9, _sg4o6) {
      l$5ni0 === void 0x0 && (l$5ni0 = !![]), _sg4o6 === void 0x0 && (_sg4o6 = ![]);var l$in05 = this;l$in05['_url'] = sago46;if (sago46['indexOf']('data:image') === 0x0) l$in05['_type'] = vwdfbr = 'image';else l$in05['_type'] = vwdfbr || (vwdfbr = l$in05['getTypeFromUrl'](sago46));l$in05['_cache'] = l$5ni0, l$in05['_data'] = null;var $l50 = 'ascii';if (sago46['indexOf']('.fnt') != -0x1) $l50 = 'utf8';else vwdfbr == 'arraybuffer' && ($l50 = '');;var cez2t8 = ecg8a['getFileExtension'](sago46);if (mi5['_fileTypeArr']['indexOf'](cez2t8) != -0x1) bdw$0l['EnvConfig']['load']['call'](this, sago46, vwdfbr, l$5ni0, y9, _sg4o6);else {
        if (!m5hij['getFileInfo'](sago46)) {
          if (sago46['indexOf']('layaNativeDir/') != -0x1) {
            if (bdw$0l['isZiYu']) {
              var mli5 = m5hij['ziyuFileData'][sago46];l$in05['onLoaded'](mli5);return;
            } else {
              cosnole['log']('read read'), m5hij['read'](sago46, $l50, new cao8ge(mi5, mi5['onReadNativeCallBack'], [$l50, sago46, vwdfbr, l$5ni0, y9, _sg4o6, l$in05]));return;
            }
          }if (wfrv9['rootPath'] == '') var lwb0$d = sago46;else lwb0$d = sago46['split'](wfrv9['rootPath'])[0x0];sago46['indexOf']('http://') != -0x1 || sago46['indexOf']('https://') != -0x1 ? bdw$0l['EnvConfig']['load']['call'](l$in05, sago46, vwdfbr, l$5ni0, y9, _sg4o6) : m5hij['readFile'](lwb0$d, $l50, new cao8ge(mi5, mi5['onReadNativeCallBack'], [$l50, sago46, vwdfbr, l$5ni0, y9, _sg4o6, l$in05]), sago46);
        } else bdw$0l['EnvConfig']['load']['call'](this, sago46, vwdfbr, l$5ni0, y9, _sg4o6);
      }
    }, wvr9f1['resMgrLoad'] = function (_msj7, m_nj7, go6sca, x9uk, wrdvb, b0ld, kuy1x) {
      go6sca === void 0x0 && (go6sca = 0x0), x9uk === void 0x0 && (x9uk = ![]), wrdvb === void 0x0 && (wrdvb = ![]), b0ld === void 0x0 && (b0ld = 0x0), kuy1x === void 0x0 && (kuy1x = 0x3), _msj7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _msj7), bdw$0l['EnvConfig']['resMgrLoad'](_msj7, (e82ztc, egc8a, a6gos) => {
        mi5['prototype']['resMgrLoadCallBack'](e82ztc, egc8a, a6gos, m_nj7);
      }, go6sca, x9uk, wrdvb, b0ld, kuy1x);
    }, wvr9f1['resMgrLoadCallBack'] = function ($bwfd0, _6s47, d0b$, nm7_hj) {
      console['log']('buff:::', $bwfd0, d0b$, m5hij['fileNativeDir'] + '///' + m5hij['fileListName']), nm7_hj($bwfd0, _6s47, d0b$);
    }, wvr9f1['clearRes'] = function (gos4a, g_46so) {
      g_46so === void 0x0 && (g_46so = ![]);var x1uyqk = this;x1uyqk['clearRes'](gos4a, g_46so);var fv$wb = m5hij['getFileInfo'](gos4a);if (fv$wb && (gos4a['indexOf']('http://') != -0x1 || gos4a['indexOf']('https://') != -0x1)) {
        var y91kx = fv$wb['md5'],
            jh7_n = m5hij['getFileNativePath'](y91kx);m5hij['remove'](jh7_n);
      }
    }, mi5['onReadNativeCallBack'] = function ($ld0wb, e2ga8c, $0b, nl0i, x19ky, hnj7im, hinml5, hmijn, e82tca) {
      nl0i === void 0x0 && (nl0i = !![]), hnj7im === void 0x0 && (hnj7im = ![]), hmijn === void 0x0 && (hmijn = 0x0);if (!hmijn) {
        var sj64_;if ($0b == 'json' || $0b == 'atlas') sj64_ = bdw$0l['getJson'](e82tca['data']);else $0b == 'xml' ? sj64_ = ecg8a['parseXMLFromString'](e82tca['data']) : sj64_ = e82tca['data'];hinml5['onLoaded'](sj64_), !bdw$0l['isZiYu'] && bdw$0l['isPosMsgYu'] && $0b != 'arraybuffer' && wx['postMessage']({ 'url': e2ga8c, 'data': sj64_, 'isLoad': !![] });
      } else hmijn == 0x1 && bdw$0l['EnvConfig']['load']['call'](hinml5, e2ga8c, $0b, nl0i, x19ky, hnj7im);
    }, rw(mi5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mi5;
  }(),
      m5hij = function (tze8) {
    function goe8c() {
      goe8c['__super']['call'](this);;
    }return bd0wf$(goe8c, 'laya.wx.mini.MiniFileMgr', tze8), goe8c['isLoadFile'] = function (kx19r) {
      return goe8c['_fileTypeArr']['indexOf'](kx19r) != -0x1 ? !![] : ![];
    }, goe8c['getFileInfo'] = function (d$0b5l) {
      var ca68og = d$0b5l['split']('?')[0x0],
          qy1uk = goe8c['filesListObj'][ca68og];if (qy1uk == null) return null;else return qy1uk;return null;
    }, goe8c['onFileUpdate'] = function (jm_n7, lih5n) {
      var d0i = jm_n7['split']('/'),
          r1x9kv = d0i[d0i['length'] - 0x1],
          hjm5 = goe8c['getFileInfo'](lih5n);if (hjm5 == null) goe8c['onSaveFile'](lih5n, r1x9kv);else {
        if (hjm5['readyUrl'] != lih5n) goe8c['remove'](r1x9kv, lih5n);
      }
    }, goe8c['exits'] = function (t2cz8, rvfwdb) {
      var xqk1 = goe8c['getFileNativePath'](t2cz8);goe8c['fs']['getFileInfo']({ 'filePath': xqk1, 'success': function (n50i) {
          rvfwdb != null && rvfwdb['runWith']([0x0, n50i]);
        }, 'fail': function (zcet82) {
          rvfwdb != null && rvfwdb['runWith']([0x1, zcet82]);
        } });
    }, goe8c['read'] = function (uy1x9k, a4g, bl$w0, bf0wd$) {
      a4g === void 0x0 && (a4g = 'ascill'), bf0wd$ === void 0x0 && (bf0wd$ = '');var xqk3u;bf0wd$ != '' ? xqk3u = goe8c['getFileNativePath'](uy1x9k) : xqk3u = uy1x9k, goe8c['fs']['readFile']({ 'filePath': xqk3u, 'encoding': a4g, 'success': function (mj5ih) {
          bl$w0 != null && bl$w0['runWith']([0x0, mj5ih]);
        }, 'fail': function (s_o74) {
          if (s_o74 && bf0wd$ != '') goe8c['down'](bf0wd$, a4g, bl$w0, bf0wd$);else bl$w0 != null && bl$w0['runWith']([0x1]);
        } });
    }, goe8c['readNativeFile'] = function (g46s_, i50hln) {
      goe8c['fs']['readFile']({ 'filePath': g46s_, 'encoding': '', 'success': function (a8cte2) {
          i50hln != null && i50hln['runWith']([0x0]);
        }, 'fail': function (s7o) {
          i50hln != null && i50hln['runWith']([0x1]);
        } });
    }, goe8c['down'] = function (rvfbdw, o8c6ga, fk19, _7hn) {
      o8c6ga === void 0x0 && (o8c6ga = 'ascill'), _7hn === void 0x0 && (_7hn = '');var soac = goe8c['getFileNativePath'](_7hn),
          cg6o8 = goe8c['wxdown']({ 'url': rvfbdw, 'filePath': soac, 'success': function (vrfwdb) {
          if (vrfwdb['statusCode'] === 0xc8) goe8c['readFile'](vrfwdb['filePath'], o8c6ga, fk19, _7hn);
        }, 'fail': function (jhm_) {
          fk19 != null && fk19['runWith']([0x1, jhm_]);
        } });cg6o8['onProgressUpdate'](function (fvrw19) {
        fk19 != null && fk19['runWith']([0x2, fvrw19['progress']]);
      });
    }, goe8c['readFile'] = function (f9wb, _7mjh4, j5mnhi, kxqy) {
      _7mjh4 === void 0x0 && (_7mjh4 = 'ascill'), kxqy === void 0x0 && (kxqy = ''), goe8c['fs']['readFile']({ 'filePath': f9wb, 'encoding': _7mjh4, 'success': function (agos6) {
          if (f9wb['indexOf']('http://') != -0x1 || f9wb['indexOf']('https://') != -0x1) goe8c['onFileUpdate'](f9wb, kxqy);j5mnhi != null && j5mnhi['runWith']([0x0, agos6]);
        }, 'fail': function (bvfwr) {
          if (bvfwr) j5mnhi != null && j5mnhi['runWith']([0x1, bvfwr]);
        } });
    }, goe8c['downImg'] = function (m_7jh, xyquk1, x1kyq) {
      x1kyq === void 0x0 && (x1kyq = '');var x9y1u = goe8c['wxdown']({ 'url': m_7jh, 'success': function (goa8ce) {
          goa8ce['statusCode'] === 0xc8 && goe8c['copyFile'](goa8ce['tempFilePath'], x1kyq, xyquk1);
        }, 'fail': function (il50$d) {
          xyquk1 != null && xyquk1['runWith']([0x1, il50$d]);
        } });
    }, goe8c['copyFile'] = function (fbrwv9, d0i$, tze28c) {
      var _nmh = fbrwv9['split']('/'),
          v9rfw1 = _nmh[_nmh['length'] - 0x1],
          sg64ao = d0i$['split']('?')[0x0],
          in0h = goe8c['getFileInfo'](d0i$),
          goc8a = goe8c['getFileNativePath'](v9rfw1);goe8c['fs']['copyFile']({ 'srcPath': fbrwv9, 'destPath': goc8a, 'success': function (wfdb$v) {
          if (!in0h) goe8c['onSaveFile'](d0i$, v9rfw1), tze28c != null && tze28c['runWith']([0x0]);else {
            if (in0h['readyUrl'] != d0i$) goe8c['remove'](v9rfw1, d0i$, tze28c);
          }
        }, 'fail': function (ln5mh) {
          tze28c != null && tze28c['runWith']([0x1, ln5mh]);
        } });
    }, goe8c['getFileNativePath'] = function (p2tez) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p2tez;
    }, goe8c['remove'] = function (k9rxu, _6s7o4, d0l5b) {
      _6s7o4 === void 0x0 && (_6s7o4 = '');var ec2z8 = goe8c['getFileInfo'](_6s7o4),
          k1rxv = goe8c['getFileNativePath'](ec2z8['md5']);n50l['loader']['clearRes'](ec2z8['readyUrl']), goe8c['fs']['unlink']({ 'filePath': k1rxv, 'success': function (c8aego) {
          if (_6s7o4 != '') goe8c['onSaveFile'](_6s7o4, k9rxu);d0l5b != null && d0l5b['runWith']([0x0]);
        }, 'fail': function (c6oga) {} });
    }, goe8c['onSaveFile'] = function (g4ao, i0l$5) {
      var ac86o = g4ao['split']('?')[0x0];goe8c['filesListObj'][ac86o] = { 'md5': i0l$5, 'readyUrl': g4ao }, goe8c['fs']['writeFile']({ 'filePath': goe8c['fileNativeDir'] + '/' + goe8c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](goe8c['filesListObj']), 'success': function (jmhin5) {
          console['log']('写入测试测试成功：', jmhin5);
        }, 'fail': function (mh_j4) {
          console['log']('写入测试测试失败：', mh_j4);
        } });
    }, goe8c['existDir'] = function (vfrdbw, fv1kr9) {
      goe8c['fs']['mkdir']({ 'dirPath': vfrdbw, 'success': function (j5hmi) {
          fv1kr9 != null && fv1kr9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (il5hmn) {
          if (il5hmn['errMsg']['indexOf']('file already exists') != -0x1) goe8c['readSync'](goe8c['fileListName'], 'utf8', fv1kr9);else fv1kr9 != null && fv1kr9['runWith']([0x1, il5hmn]);
        } });
    }, goe8c['readSync'] = function (vfrwb9, ag8co, c2e8ag, xru9k1) {
      ag8co === void 0x0 && (ag8co = 'ascill'), xru9k1 === void 0x0 && (xru9k1 = '');var vbw9fr = goe8c['getFileNativePath'](vfrwb9),
          jh74m;try {
        jh74m = goe8c['fs']['readFileSync'](vbw9fr), c2e8ag != null && c2e8ag['runWith']([0x0, { 'data': jh74m }]);
      } catch (mjhi7n) {
        c2e8ag != null && c2e8ag['runWith']([0x1]);
      }
    }, goe8c['readCache'] = function () {}, goe8c['writeCache'] = function (k3yxu) {
      var d5l$i = readyUrl['split']('?')[0x0];goe8c['filesListObj'][d5l$i] = { 'md5': md5Name, 'readyUrl': readyUrl }, goe8c['fs']['writeFile']({ 'filePath': goe8c['fileNativeDir'] + '/' + goe8c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](goe8c['filesListObj']), 'success': function (nhj7i) {}, 'fail': function (ceoga) {} });
    }, goe8c['setNativeFileDir'] = function (_4so7) {
      goe8c['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _4so7;
    }, goe8c['filesListObj'] = {}, goe8c['fileNativeDir'] = null, goe8c['fileListName'] = 'layaairfiles.txt', goe8c['ziyuFileData'] = {}, rw(goe8c, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), goe8c;
  }(eao8g),
      u3yk = function (o64s_) {
    function qky3u() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qky3u['__super']['call'](this), this['_sound'] = qky3u['_createSound']();
    }bd0wf$(qky3u, 'laya.wx.mini.MiniSound', o64s_);var b0dwl = qky3u['prototype'];return b0dwl['load'] = function (fvkr91) {
      var bv$fdw = this;fvkr91 = wfrv9['formatURL'](fvkr91), this['url'] = fvkr91;if (qky3u['_audioCache'][fvkr91]) {
        this['event']('complete');return;
      }function qxu1k() {
        if (qky3u['_null'] != undefined) bv$fdw['_sound']['onCanplay'](qky3u['_null']), bv$fdw['_sound']['onError'](qky3u['_null']);else try {
          bv$fdw['_sound']['onCanplay'](null), bv$fdw['_sound']['onError'](null), qky3u['_null'] = null;
        } catch (vbwdfr) {
          console['warn']('[wxmini] _clearSound:' + vbwdfr), bv$fdw['_sound']['onCanplay'](b0wd$), bv$fdw['_sound']['onError'](b0wd$), qky3u['_null'] = b0wd$;
        }
      }function mh5nij() {
        qxu1k(), hj4_['loaded'] = !![], hj4_['event']('complete'), qky3u['_audioCache'][hj4_['url']] = hj4_;
      }function c8te2a(te2cz) {
        console['error']('errCode=' + te2cz['errCode'] + '  errMsg=' + te2cz['errMsg']), qxu1k(), hj4_['event']('error');
      }function b0wd$() {}this['_sound']['onCanplay'](mh5nij), this['_sound']['onError'](c8te2a), this['_sound']['src'] = fvkr91;var hj4_ = this;
    }, b0dwl['play'] = function (et2z8, hj4m_7) {
      et2z8 === void 0x0 && (et2z8 = 0x0), hj4m_7 === void 0x0 && (hj4m_7 = 0x0);var n5hi0l;if (this['url'] == nl0h5i['_tMusic']) {
        if (!qky3u['_musicAudio']) qky3u['_musicAudio'] = qky3u['_createSound']();n5hi0l = qky3u['_musicAudio'];
      } else n5hi0l = qky3u['_createSound']();n5hi0l['src'] = this['url'];var b$0 = new vbwrd(n5hi0l);return b$0['url'] = this['url'], b$0['loops'] = hj4m_7, b$0['startTime'] = et2z8, b$0['play'](), nl0h5i['addChannel'](b$0), b$0;
    }, b0dwl['dispose'] = function () {
      var t8e2ca = qky3u['_audioCache'][this['url']];t8e2ca && (t8e2ca['src'] = '', delete qky3u['_audioCache'][this['url']]);
    }, mnijh7(0x0, b0dwl, 'duration', function () {
      return this['_sound']['duration'];
    }), qky3u['_createSound'] = function () {
      return qky3u['_id']++, bdw$0l['window']['wx']['createInnerAudioContext']();
    }, qky3u['_musicAudio'] = null, qky3u['_id'] = 0x0, qky3u['_audioCache'] = {}, qky3u['_null'] = undefined, qky3u;
  }(eao8g),
      vbwrd = function (j76s_4) {
    function n_hj7(qxyu3) {
      this['_audio'] = null, this['_onEnd'] = null, n_hj7['__super']['call'](this), this['_audio'] = qxyu3, this['_onEnd'] = ecg8a['bind'](this['__onEnd'], this), qxyu3['onEnded'](this['_onEnd']);
    }bd0wf$(n_hj7, 'laya.wx.mini.MiniSoundChannel', j76s_4);var kuyqx1 = n_hj7['prototype'];return kuyqx1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (n50l['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kuyqx1['__onNull'] = function () {}, kuyqx1['play'] = function () {
      this['isStopped'] = ![], nl0h5i['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kuyqx1['stop'] = function () {
      this['isStopped'] = !![], nl0h5i['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n_hj7['_null'] != undefined) this['_audio']['onEnded'](n_hj7['_null']);else try {
        this['_audio']['onEnded'](null), n_hj7['_null'] = null;
      } catch (ldb0) {
        console['warn']('[wxmini] stop:' + ldb0), this['_audio']['onEnded'](ecg8a['bind'](this['__onNull'], this)), n_hj7['_null'] = ecg8a['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kuyqx1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kuyqx1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], nl0h5i['addChannel'](this), this['_audio']['play']();
    }, mnijh7(0x0, kuyqx1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mnijh7(0x0, kuyqx1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mnijh7(0x0, kuyqx1, 'volume', function () {
      return 0x1;
    }, function (w91vr) {}), n_hj7['_null'] = undefined, n_hj7;
  }(nh7);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var os4a in Laya) {
    var x9uy1k = Laya[os4a];x9uy1k && x9uy1k['__isclass'] && (exports[os4a] = x9uy1k);
  }
});