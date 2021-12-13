var Y = wx.$M;
(function (window, document, cgsa6o) {
  var hjnm5 = cgsa6o['un'],
      di$l50 = cgsa6o['uns'],
      rk9vf = cgsa6o['static'],
      g6oas = cgsa6o['class'],
      frvbd = cgsa6o['getset'],
      xkv91 = cgsa6o['__newvec'],
      acg28e = laya['utils']['Browser'],
      wb9fr = laya['events']['Event'],
      d$bl0 = laya['events']['EventDispatcher'],
      rkx19 = laya['resource']['HTMLImage'],
      dwvrfb = laya['utils']['Handler'],
      fw = laya['display']['Input'],
      j_nh7 = laya['net']['Loader'],
      ihm = laya['maths']['Matrix'],
      te8c2z = laya['renders']['Render'],
      $wdvfb = laya['utils']['RunDriver'],
      f$w0 = laya['media']['Sound'],
      wbl$0 = laya['media']['SoundChannel'],
      ep2 = laya['media']['SoundManager'],
      n0lih5 = laya['display']['Stage'],
      mj_4h = laya['net']['URL'],
      $bl0wd = laya['utils']['Utils'],
      _74o6 = function () {
    function bwfd$0() {}return g6oas(bwfd$0, 'laya.wx.mini.MiniAdpter'), bwfd$0['getJson'] = function (g2ace8) {
      return JSON['parse'](g2ace8);
    }, bwfd$0['init'] = function (rbdwf, mj_4) {
      rbdwf === void 0x0 && (rbdwf = ![]), mj_4 === void 0x0 && (mj_4 = ![]);if (bwfd$0['_inited']) return;bwfd$0['window'] = window;if (bwfd$0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bwfd$0['_inited'] = !![], bwfd$0['isZiYu'] = mj_4, bwfd$0['isPosMsgYu'] = rbdwf, bwfd$0['EnvConfig'] = {}, !bwfd$0['isZiYu'] && (a6gcs['setNativeFileDir']('/layaairGame'), a6gcs['existDir'](a6gcs['fileNativeDir'], dwvrfb['create'](bwfd$0, bwfd$0['onMkdirCallBack']))), bwfd$0['window']['focus'] = function () {}, cgsa6o['getUrlPath'] = function () {}, bwfd$0['window']['logtime'] = function (w1rv9) {}, bwfd$0['window']['alertTimeLog'] = function (wfdrv) {}, bwfd$0['window']['resetShareInfo'] = function () {}, bwfd$0['window']['CanvasRenderingContext2D'] = function () {}, bwfd$0['window']['CanvasRenderingContext2D']['prototype'] = bwfd$0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bwfd$0['window']['document']['body']['appendChild'] = function () {}, bwfd$0['EnvConfig']['pixelRatioInt'] = 0x0, $wdvfb['getPixelRatio'] = bwfd$0['pixelRatio'], bwfd$0['_preCreateElement'] = acg28e['createElement'], acg28e['createElement'] = bwfd$0['createElement'], $wdvfb['createShaderCondition'] = bwfd$0['createShaderCondition'], $bl0wd['parseXMLFromString'] = bwfd$0['parseXMLFromString'], fw['_createInputElement'] = k3qx['_createInputElement'], bwfd$0['EnvConfig']['load'] = j_nh7['prototype']['load'], j_nh7['prototype']['load'] = ku3qy['prototype']['load'], bwfd$0['isZiYu'] && rbdwf && wx['onMessage'](function (r9fvw) {
        r9fvw['isLoad'] && (a6gcs['ziyuFileData'][r9fvw['url']] = r9fvw['data']);
      });
    }, bwfd$0['onMkdirCallBack'] = function (gaeco, db$vw) {
      if (!gaeco) a6gcs['filesListObj'] = JSON['parse'](db$vw['data']);
    }, bwfd$0['pixelRatio'] = function () {
      if (!bwfd$0['EnvConfig']['pixelRatioInt']) try {
        var a68oc = wx['getSystemInfoSync']();return bwfd$0['EnvConfig']['pixelRatioInt'] = a68oc['pixelRatio'], a68oc = a68oc, a68oc['pixelRatio'];
      } catch (zetc82) {}return bwfd$0['EnvConfig']['pixelRatioInt'];
    }, bwfd$0['createElement'] = function (tae8c2) {
      if (tae8c2 == 'canvas') {
        var sc6oga;return bwfd$0['idx'] == 0x1 ? bwfd$0['isZiYu'] ? (sc6oga = sharedCanvas, sc6oga['style'] = {}) : sc6oga = window['canvas'] : sc6oga = window['wx']['createCanvas'](), bwfd$0['idx']++, sc6oga;
      } else {
        if (tae8c2 == 'textarea' || tae8c2 == 'input') return bwfd$0['onCreateInput'](tae8c2);else {
          if (tae8c2 == 'div') {
            var wrb9vf = bwfd$0['_preCreateElement'](tae8c2);return wrb9vf['contains'] = function (cae2g8) {
              return null;
            }, wrb9vf['removeChild'] = function (f$vwd) {}, wrb9vf;
          } else return bwfd$0['_preCreateElement'](tae8c2);
        }
      }
    }, bwfd$0['onCreateInput'] = function (li50d$) {
      var urk91 = bwfd$0['_preCreateElement'](li50d$);return urk91['focus'] = k3qx['wxinputFocus'], urk91['blur'] = k3qx['wxinputblur'], urk91['style'] = {}, urk91['value'] = 0x0, urk91['parentElement'] = {}, urk91['placeholder'] = {}, urk91['type'] = {}, urk91['setColor'] = function (l$5in) {}, urk91['setType'] = function (_o4gs6) {}, urk91['setFontFace'] = function (z28ct) {}, urk91['addEventListener'] = function (in05l) {}, urk91['contains'] = function (ukr19x) {
        return null;
      }, urk91['removeChild'] = function (jih7nm) {}, urk91;
    }, bwfd$0['createShaderCondition'] = function (li$d0) {
      var nml5i = this,
          o6agsc = function () {
        var s7_64o = li$d0;return nml5i[li$d0['replace']('this.', '')];
      };return o6agsc;
    }, bwfd$0['EnvConfig'] = null, bwfd$0['window'] = null, bwfd$0['_preCreateElement'] = null, bwfd$0['_inited'] = ![], bwfd$0['wxRequest'] = null, bwfd$0['systemInfo'] = null, bwfd$0['version'] = '0.0.1', bwfd$0['isZiYu'] = ![], bwfd$0['isPosMsgYu'] = ![], bwfd$0['parseXMLFromString'] = function (kvr9x) {
      var _mnj7, bwvfd;kvr9x = kvr9x['replace'](/>\s+</g, '><');try {
        _mnj7 = new window['Parser']['DOMParser']()['parseFromString'](kvr9x, 'text/xml');
      } catch (b$dl5) {
        throw '需要引入xml解析库文件';
      }return _mnj7;
    }, bwfd$0['idx'] = 0x1, bwfd$0;
  }(),
      hinm = function () {
    function vfbwd() {}g6oas(vfbwd, 'laya.wx.mini.MiniImage');var uk19 = vfbwd['prototype'];return uk19['_loadImage'] = function (te2zc8) {
      var qky1x = this,
          k3yuxq = ![];te2zc8['indexOf']('layaNativeDir/') == -0x1 && (k3yuxq = !![], te2zc8 = mj_4h['formatURL'](te2zc8));if (!a6gcs['getFileInfo'](te2zc8)) {
        if (te2zc8['indexOf']('http://') != -0x1 || te2zc8['indexOf']('https://') != -0x1) a6gcs['downImg'](te2zc8, new dwvrfb(vfbwd, vfbwd['onDownImgCallBack'], [te2zc8, qky1x]), te2zc8);else vfbwd['onCreateImage'](te2zc8, qky1x, !![]);
      } else vfbwd['onCreateImage'](te2zc8, qky1x, !k3yuxq);
    }, vfbwd['onDownImgCallBack'] = function (nmji7, k1r9x, rw19vf) {
      if (!rw19vf) vfbwd['onCreateImage'](nmji7, k1r9x);else k1r9x['onError'](null);
    }, vfbwd['onCreateImage'] = function (f9vrbw, ze8ct2, g8ea2) {
      g8ea2 === void 0x0 && (g8ea2 = ![]);var hil05;if (!g8ea2) {
        var u9xy = a6gcs['getFileInfo'](f9vrbw),
            h5lm = u9xy['md5'];hil05 = a6gcs['getFileNativePath'](h5lm);
      } else hil05 = f9vrbw;if (ze8ct2['imgCache'] == null) ze8ct2['imgCache'] = {};var eztp8;function xuky1q() {
        eztp8['onload'] = null, eztp8['onerror'] = null, delete ze8ct2['imgCache'][f9vrbw];
      };var s6oag4 = function () {
        xuky1q(), ze8ct2['onLoaded'](eztp8);
      },
          u1xqk = function () {
        xuky1q(), ze8ct2['event']('error', 'Load image failed');
      };ze8ct2['_type'] == 'nativeimage' ? (eztp8 = new acg28e['window']['Image'](), eztp8['crossOrigin'] = '', eztp8['onload'] = s6oag4, eztp8['onerror'] = u1xqk, eztp8['src'] = hil05, ze8ct2['imgCache'][f9vrbw] = eztp8) : new rkx19['create'](hil05, { 'onload': s6oag4, 'onerror': u1xqk, 'onCreate': function (ijh7) {
          eztp8 = ijh7, ze8ct2['imgCache'][f9vrbw] = ijh7;
        } });
    }, vfbwd;
  }(),
      k3qx = function () {
    function jm7_h4() {}return g6oas(jm7_h4, 'laya.wx.mini.MiniInput'), jm7_h4['_createInputElement'] = function () {
      fw['_initInput'](fw['area'] = acg28e['createElement']('textarea')), fw['_initInput'](fw['input'] = acg28e['createElement']('input')), fw['inputContainer'] = acg28e['createElement']('div'), fw['inputContainer']['style']['position'] = 'absolute', fw['inputContainer']['style']['zIndex'] = 0x186a0, acg28e['container']['appendChild'](fw['inputContainer']), fw['inputContainer']['setPos'] = function (o_6s4, kx1qy) {
        fw['inputContainer']['style']['left'] = o_6s4 + 'px', fw['inputContainer']['style']['top'] = kx1qy + 'px';
      }, cgsa6o['stage']['on']('resize', null, jm7_h4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nihm5j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ep2['_soundClass'] = v91w, ep2['_musicClass'] = v91w;
    }, jm7_h4['_onStageResize'] = function () {
      var ge2a8 = cgsa6o['stage']['_canvasTransform']['identity']();ge2a8['scale'](acg28e['width'] / te8c2z['canvas']['width'] / $wdvfb['getPixelRatio'](), acg28e['height'] / te8c2z['canvas']['height'] / $wdvfb['getPixelRatio']());
    }, jm7_h4['wxinputFocus'] = function (k9xu) {
      var kux1y = fw['inputElement']['target'];if (kux1y && !kux1y['editable']) return;_74o6['window']['wx']['offKeyboardConfirm'](), _74o6['window']['wx']['offKeyboardInput'](), _74o6['window']['wx']['showKeyboard']({ 'defaultValue': kux1y['text'], 'maxLength': kux1y['maxChars'], 'multiple': kux1y['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (k19v) {}, 'fail': function (e82z) {} }), _74o6['window']['wx']['onKeyboardConfirm'](function (bwfrdv) {
        var geca82 = bwfrdv ? bwfrdv['value'] : '';kux1y['text'] = geca82, kux1y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _74o6['window']['wx']['onKeyboardInput'](function (uxq1k) {
        var d0fbw = uxq1k ? uxq1k['value'] : '';if (!kux1y['multiline']) {
          if (d0fbw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kux1y['text'] = d0fbw, kux1y['event']('input');
      });
    }, jm7_h4['inputEnter'] = function () {
      fw['inputElement']['target']['focus'] = ![];
    }, jm7_h4['wxinputblur'] = function () {
      jm7_h4['hideKeyboard']();
    }, jm7_h4['hideKeyboard'] = function () {
      _74o6['window']['wx']['offKeyboardConfirm'](), _74o6['window']['wx']['offKeyboardInput'](), _74o6['window']['wx']['hideKeyboard']({ 'success': function (ea8t2c) {
          console['log']('隐藏键盘');
        }, 'fail': function (m7n_h) {
          console['log']('隐藏键盘出错:' + (m7n_h ? m7n_h['errMsg'] : ''));
        } });
    }, jm7_h4;
  }(),
      ku3qy = function () {
    function g4s6_o() {}g6oas(g4s6_o, 'laya.wx.mini.MiniLoader');var fv9wr1 = g4s6_o['prototype'];return fv9wr1['load'] = function (hil5mn, lm5hi, kxu91y, jhinm7, h_j) {
      kxu91y === void 0x0 && (kxu91y = !![]), h_j === void 0x0 && (h_j = ![]);var l$0ni5 = this;l$0ni5['_url'] = hil5mn;if (hil5mn['indexOf']('data:image') === 0x0) l$0ni5['_type'] = lm5hi = 'image';else l$0ni5['_type'] = lm5hi || (lm5hi = l$0ni5['getTypeFromUrl'](hil5mn));l$0ni5['_cache'] = kxu91y, l$0ni5['_data'] = null;var xk9yu1 = 'ascii';if (hil5mn['indexOf']('.fnt') != -0x1) xk9yu1 = 'utf8';else lm5hi == 'arraybuffer' && (xk9yu1 = '');;var b$dw0f = $bl0wd['getFileExtension'](hil5mn);if (g4s6_o['_fileTypeArr']['indexOf'](b$dw0f) != -0x1) _74o6['EnvConfig']['load']['call'](this, hil5mn, lm5hi, kxu91y, jhinm7, h_j);else {
        if (!a6gcs['getFileInfo'](hil5mn)) {
          if (hil5mn['indexOf']('layaNativeDir/') != -0x1) {
            if (_74o6['isZiYu']) {
              var j47_ms = a6gcs['ziyuFileData'][hil5mn];l$0ni5['onLoaded'](j47_ms);return;
            } else {
              cosnole['log']('read read'), a6gcs['read'](hil5mn, xk9yu1, new dwvrfb(g4s6_o, g4s6_o['onReadNativeCallBack'], [xk9yu1, hil5mn, lm5hi, kxu91y, jhinm7, h_j, l$0ni5]));return;
            }
          }if (mj_4h['rootPath'] == '') var dfvbr = hil5mn;else dfvbr = hil5mn['split'](mj_4h['rootPath'])[0x0];hil5mn['indexOf']('http://') != -0x1 || hil5mn['indexOf']('https://') != -0x1 ? _74o6['EnvConfig']['load']['call'](l$0ni5, hil5mn, lm5hi, kxu91y, jhinm7, h_j) : a6gcs['readFile'](dfvbr, xk9yu1, new dwvrfb(g4s6_o, g4s6_o['onReadNativeCallBack'], [xk9yu1, hil5mn, lm5hi, kxu91y, jhinm7, h_j, l$0ni5]), hil5mn);
        } else _74o6['EnvConfig']['load']['call'](this, hil5mn, lm5hi, kxu91y, jhinm7, h_j);
      }
    }, fv9wr1['resMgrLoad'] = function (e2ptz, l50bd$, a28cte, hin5l, og8e, imn7, z82te) {
      a28cte === void 0x0 && (a28cte = 0x0), hin5l === void 0x0 && (hin5l = ![]), og8e === void 0x0 && (og8e = ![]), imn7 === void 0x0 && (imn7 = 0x0), z82te === void 0x0 && (z82te = 0x3), e2ptz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', e2ptz), _74o6['EnvConfig']['resMgrLoad'](e2ptz, (mnhi5j, rfv1k, h50li) => {
        g4s6_o['prototype']['resMgrLoadCallBack'](mnhi5j, rfv1k, h50li, l50bd$);
      }, a28cte, hin5l, og8e, imn7, z82te);
    }, fv9wr1['resMgrLoadCallBack'] = function (quyxk, k9fr, _764sj, $0wfdb) {
      console['log']('buff:::', quyxk, _764sj, a6gcs['fileNativeDir'] + '///' + a6gcs['fileListName']), $0wfdb(quyxk, k9fr, _764sj);
    }, fv9wr1['clearRes'] = function (lni5, $b0wdf) {
      $b0wdf === void 0x0 && ($b0wdf = ![]);var y1ux9 = this;y1ux9['clearRes'](lni5, $b0wdf);var wf9vb = a6gcs['getFileInfo'](lni5);if (wf9vb && (lni5['indexOf']('http://') != -0x1 || lni5['indexOf']('https://') != -0x1)) {
        var brf9wv = wf9vb['md5'],
            kx3yu = a6gcs['getFileNativePath'](brf9wv);a6gcs['remove'](kx3yu);
      }
    }, g4s6_o['onReadNativeCallBack'] = function (gaec8, v$dbf, ac8g2, ocg6sa, eoc8ga, tce28z, xu91y, l$5in0, a8ec2) {
      ocg6sa === void 0x0 && (ocg6sa = !![]), tce28z === void 0x0 && (tce28z = ![]), l$5in0 === void 0x0 && (l$5in0 = 0x0);if (!l$5in0) {
        var _hmj7;if (ac8g2 == 'json' || ac8g2 == 'atlas') _hmj7 = _74o6['getJson'](a8ec2['data']);else ac8g2 == 'xml' ? _hmj7 = $bl0wd['parseXMLFromString'](a8ec2['data']) : _hmj7 = a8ec2['data'];xu91y['onLoaded'](_hmj7), !_74o6['isZiYu'] && _74o6['isPosMsgYu'] && ac8g2 != 'arraybuffer' && wx['postMessage']({ 'url': v$dbf, 'data': _hmj7, 'isLoad': !![] });
      } else l$5in0 == 0x1 && _74o6['EnvConfig']['load']['call'](xu91y, v$dbf, ac8g2, ocg6sa, eoc8ga, tce28z);
    }, rk9vf(g4s6_o, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), g4s6_o;
  }(),
      a6gcs = function (wl$bd0) {
    function sa6cgo() {
      sa6cgo['__super']['call'](this);;
    }return g6oas(sa6cgo, 'laya.wx.mini.MiniFileMgr', wl$bd0), sa6cgo['isLoadFile'] = function (a6og4) {
      return sa6cgo['_fileTypeArr']['indexOf'](a6og4) != -0x1 ? !![] : ![];
    }, sa6cgo['getFileInfo'] = function (v1fr9) {
      var dv$fb = v1fr9['split']('?')[0x0],
          ego8ac = sa6cgo['filesListObj'][dv$fb];if (ego8ac == null) return null;else return ego8ac;return null;
    }, sa6cgo['onFileUpdate'] = function (acg8oe, bdl05$) {
      var ta2ec = acg8oe['split']('/'),
          nh_mj = ta2ec[ta2ec['length'] - 0x1],
          a8ce2g = sa6cgo['getFileInfo'](bdl05$);if (a8ce2g == null) sa6cgo['onSaveFile'](bdl05$, nh_mj);else {
        if (a8ce2g['readyUrl'] != bdl05$) sa6cgo['remove'](nh_mj, bdl05$);
      }
    }, sa6cgo['exits'] = function (o8gca6, ztp8e) {
      var g6o8c = sa6cgo['getFileNativePath'](o8gca6);sa6cgo['fs']['getFileInfo']({ 'filePath': g6o8c, 'success': function (d$0i) {
          ztp8e != null && ztp8e['runWith']([0x0, d$0i]);
        }, 'fail': function (bl$d0) {
          ztp8e != null && ztp8e['runWith']([0x1, bl$d0]);
        } });
    }, sa6cgo['read'] = function (jhnm5, k1x9vr, uqk1xy, l5nmhi) {
      k1x9vr === void 0x0 && (k1x9vr = 'ascill'), l5nmhi === void 0x0 && (l5nmhi = '');var dw0b;l5nmhi != '' ? dw0b = sa6cgo['getFileNativePath'](jhnm5) : dw0b = jhnm5, sa6cgo['fs']['readFile']({ 'filePath': dw0b, 'encoding': k1x9vr, 'success': function (e2c8) {
          uqk1xy != null && uqk1xy['runWith']([0x0, e2c8]);
        }, 'fail': function (vf$wbd) {
          if (vf$wbd && l5nmhi != '') sa6cgo['down'](l5nmhi, k1x9vr, uqk1xy, l5nmhi);else uqk1xy != null && uqk1xy['runWith']([0x1]);
        } });
    }, sa6cgo['readNativeFile'] = function (vrbfw, fvdw$b) {
      sa6cgo['fs']['readFile']({ 'filePath': vrbfw, 'encoding': '', 'success': function (g8co) {
          fvdw$b != null && fvdw$b['runWith']([0x0]);
        }, 'fail': function (l05) {
          fvdw$b != null && fvdw$b['runWith']([0x1]);
        } });
    }, sa6cgo['down'] = function (m7jhn, w9vrbf, rfwd, pe2tz8) {
      w9vrbf === void 0x0 && (w9vrbf = 'ascill'), pe2tz8 === void 0x0 && (pe2tz8 = '');var kqy3 = sa6cgo['getFileNativePath'](pe2tz8),
          s4g6 = sa6cgo['wxdown']({ 'url': m7jhn, 'filePath': kqy3, 'success': function (j746s) {
          if (j746s['statusCode'] === 0xc8) sa6cgo['readFile'](j746s['filePath'], w9vrbf, rfwd, pe2tz8);
        }, 'fail': function (rv19kf) {
          rfwd != null && rfwd['runWith']([0x1, rv19kf]);
        } });s4g6['onProgressUpdate'](function (cea8go) {
        rfwd != null && rfwd['runWith']([0x2, cea8go['progress']]);
      });
    }, sa6cgo['readFile'] = function (nhi5mj, gc82ae, uk1rx, s6_7o4) {
      gc82ae === void 0x0 && (gc82ae = 'ascill'), s6_7o4 === void 0x0 && (s6_7o4 = ''), sa6cgo['fs']['readFile']({ 'filePath': nhi5mj, 'encoding': gc82ae, 'success': function (xqu1yk) {
          if (nhi5mj['indexOf']('http://') != -0x1 || nhi5mj['indexOf']('https://') != -0x1) sa6cgo['onFileUpdate'](nhi5mj, s6_7o4);uk1rx != null && uk1rx['runWith']([0x0, xqu1yk]);
        }, 'fail': function (r1w9) {
          if (r1w9) uk1rx != null && uk1rx['runWith']([0x1, r1w9]);
        } });
    }, sa6cgo['downImg'] = function (xk1ur9, r1kx9, rkx1u) {
      rkx1u === void 0x0 && (rkx1u = '');var t8e = sa6cgo['wxdown']({ 'url': xk1ur9, 'success': function (r9xkv) {
          r9xkv['statusCode'] === 0xc8 && sa6cgo['copyFile'](r9xkv['tempFilePath'], rkx1u, r1kx9);
        }, 'fail': function (f1v9r) {
          r1kx9 != null && r1kx9['runWith']([0x1, f1v9r]);
        } });
    }, sa6cgo['copyFile'] = function (qux1y, xy9k, $lbdw) {
      var _msj4 = qux1y['split']('/'),
          vkf91 = _msj4[_msj4['length'] - 0x1],
          l05h = xy9k['split']('?')[0x0],
          _67s4o = sa6cgo['getFileInfo'](xy9k),
          vrf9bw = sa6cgo['getFileNativePath'](vkf91);sa6cgo['fs']['copyFile']({ 'srcPath': qux1y, 'destPath': vrf9bw, 'success': function (wbrvf9) {
          if (!_67s4o) sa6cgo['onSaveFile'](xy9k, vkf91), $lbdw != null && $lbdw['runWith']([0x0]);else {
            if (_67s4o['readyUrl'] != xy9k) sa6cgo['remove'](vkf91, xy9k, $lbdw);
          }
        }, 'fail': function (xrk1v9) {
          $lbdw != null && $lbdw['runWith']([0x1, xrk1v9]);
        } });
    }, sa6cgo['getFileNativePath'] = function (rxu) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rxu;
    }, sa6cgo['remove'] = function (b0$wdf, i$d50, og_4s) {
      i$d50 === void 0x0 && (i$d50 = '');var drbwvf = sa6cgo['getFileInfo'](i$d50),
          s64g_o = sa6cgo['getFileNativePath'](drbwvf['md5']);cgsa6o['loader']['clearRes'](drbwvf['readyUrl']), sa6cgo['fs']['unlink']({ 'filePath': s64g_o, 'success': function (bl50d$) {
          if (i$d50 != '') sa6cgo['onSaveFile'](i$d50, b0$wdf);og_4s != null && og_4s['runWith']([0x0]);
        }, 'fail': function ($bvdf) {} });
    }, sa6cgo['onSaveFile'] = function (sao64g, ogsa6) {
      var d$fvbw = sao64g['split']('?')[0x0];sa6cgo['filesListObj'][d$fvbw] = { 'md5': ogsa6, 'readyUrl': sao64g }, sa6cgo['fs']['writeFile']({ 'filePath': sa6cgo['fileNativeDir'] + '/' + sa6cgo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sa6cgo['filesListObj']), 'success': function (qyxku3) {
          console['log']('写入测试测试成功：', qyxku3);
        }, 'fail': function (kuxyq) {
          console['log']('写入测试测试失败：', kuxyq);
        } });
    }, sa6cgo['existDir'] = function (kxqu, ae2t8c) {
      sa6cgo['fs']['mkdir']({ 'dirPath': kxqu, 'success': function (quy3x) {
          ae2t8c != null && ae2t8c['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (geca28) {
          if (geca28['errMsg']['indexOf']('file already exists') != -0x1) sa6cgo['readSync'](sa6cgo['fileListName'], 'utf8', ae2t8c);else ae2t8c != null && ae2t8c['runWith']([0x1, geca28]);
        } });
    }, sa6cgo['readSync'] = function (tp8e2, v19r, jnh_m, fw9rvb) {
      v19r === void 0x0 && (v19r = 'ascill'), fw9rvb === void 0x0 && (fw9rvb = '');var d$w0f = sa6cgo['getFileNativePath'](tp8e2),
          l0$bwd;try {
        l0$bwd = sa6cgo['fs']['readFileSync'](d$w0f), jnh_m != null && jnh_m['runWith']([0x0, { 'data': l0$bwd }]);
      } catch (g6acso) {
        jnh_m != null && jnh_m['runWith']([0x1]);
      }
    }, sa6cgo['readCache'] = function () {}, sa6cgo['writeCache'] = function (aecg28) {
      var ih5nl0 = readyUrl['split']('?')[0x0];sa6cgo['filesListObj'][ih5nl0] = { 'md5': md5Name, 'readyUrl': readyUrl }, sa6cgo['fs']['writeFile']({ 'filePath': sa6cgo['fileNativeDir'] + '/' + sa6cgo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sa6cgo['filesListObj']), 'success': function (hnil5m) {}, 'fail': function (w$vbd) {} });
    }, sa6cgo['setNativeFileDir'] = function (_n7mhj) {
      sa6cgo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _n7mhj;
    }, sa6cgo['filesListObj'] = {}, sa6cgo['fileNativeDir'] = null, sa6cgo['fileListName'] = 'layaairfiles.txt', sa6cgo['ziyuFileData'] = {}, rk9vf(sa6cgo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), sa6cgo;
  }(d$bl0),
      v91w = function (j_h7m) {
    function _jh7m() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _jh7m['__super']['call'](this), this['_sound'] = _jh7m['_createSound']();
    }g6oas(_jh7m, 'laya.wx.mini.MiniSound', j_h7m);var ku1rx = _jh7m['prototype'];return ku1rx['load'] = function (g4a6o) {
      var tp8z = this;g4a6o = mj_4h['formatURL'](g4a6o), this['url'] = g4a6o;if (_jh7m['_audioCache'][g4a6o]) {
        this['event']('complete');return;
      }function ge2a() {
        if (_jh7m['_null'] != undefined) tp8z['_sound']['onCanplay'](_jh7m['_null']), tp8z['_sound']['onError'](_jh7m['_null']);else try {
          tp8z['_sound']['onCanplay'](null), tp8z['_sound']['onError'](null), _jh7m['_null'] = null;
        } catch (te2c8z) {
          console['warn']('[wxmini] _clearSound:' + te2c8z), tp8z['_sound']['onCanplay'](l50i$d), tp8z['_sound']['onError'](l50i$d), _jh7m['_null'] = l50i$d;
        }
      }function m_j4h() {
        ge2a(), m4j['loaded'] = !![], m4j['event']('complete'), _jh7m['_audioCache'][m4j['url']] = m4j;
      }function pzt28(ec8a2g) {
        console['error']('errCode=' + ec8a2g['errCode'] + '  errMsg=' + ec8a2g['errMsg']), ge2a(), m4j['event']('error');
      }function l50i$d() {}this['_sound']['onCanplay'](m_j4h), this['_sound']['onError'](pzt28), this['_sound']['src'] = g4a6o;var m4j = this;
    }, ku1rx['play'] = function (ijn7, dil$50) {
      ijn7 === void 0x0 && (ijn7 = 0x0), dil$50 === void 0x0 && (dil$50 = 0x0);var ijnmh7;if (this['url'] == ep2['_tMusic']) {
        if (!_jh7m['_musicAudio']) _jh7m['_musicAudio'] = _jh7m['_createSound']();ijnmh7 = _jh7m['_musicAudio'];
      } else ijnmh7 = _jh7m['_createSound']();ijnmh7['src'] = this['url'];var bfw0 = new bdf0$(ijnmh7);return bfw0['url'] = this['url'], bfw0['loops'] = dil$50, bfw0['startTime'] = ijn7, bfw0['play'](), ep2['addChannel'](bfw0), bfw0;
    }, ku1rx['dispose'] = function () {
      var hil0n = _jh7m['_audioCache'][this['url']];hil0n && (hil0n['src'] = '', delete _jh7m['_audioCache'][this['url']]);
    }, frvbd(0x0, ku1rx, 'duration', function () {
      return this['_sound']['duration'];
    }), _jh7m['_createSound'] = function () {
      return _jh7m['_id']++, _74o6['window']['wx']['createInnerAudioContext']();
    }, _jh7m['_musicAudio'] = null, _jh7m['_id'] = 0x0, _jh7m['_audioCache'] = {}, _jh7m['_null'] = undefined, _jh7m;
  }(d$bl0),
      bdf0$ = function (_j764) {
    function t2ec(m4_) {
      this['_audio'] = null, this['_onEnd'] = null, t2ec['__super']['call'](this), this['_audio'] = m4_, this['_onEnd'] = $bl0wd['bind'](this['__onEnd'], this), m4_['onEnded'](this['_onEnd']);
    }g6oas(t2ec, 'laya.wx.mini.MiniSoundChannel', _j764);var hm5ij = t2ec['prototype'];return hm5ij['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cgsa6o['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hm5ij['__onNull'] = function () {}, hm5ij['play'] = function () {
      this['isStopped'] = ![], ep2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hm5ij['stop'] = function () {
      this['isStopped'] = !![], ep2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (t2ec['_null'] != undefined) this['_audio']['onEnded'](t2ec['_null']);else try {
        this['_audio']['onEnded'](null), t2ec['_null'] = null;
      } catch (ec82ag) {
        console['warn']('[wxmini] stop:' + ec82ag), this['_audio']['onEnded']($bl0wd['bind'](this['__onNull'], this)), t2ec['_null'] = $bl0wd['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hm5ij['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hm5ij['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ep2['addChannel'](this), this['_audio']['play']();
    }, frvbd(0x0, hm5ij, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), frvbd(0x0, hm5ij, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), frvbd(0x0, hm5ij, 'volume', function () {
      return 0x1;
    }, function (wfdb0$) {}), t2ec['_null'] = undefined, t2ec;
  }(wbl$0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ep8t2 in Laya) {
    var i5mjh = Laya[ep8t2];i5mjh && i5mjh['__isclass'] && (exports[ep8t2] = i5mjh);
  }
});