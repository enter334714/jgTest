var Y = wx.$M;
(function (window, document, sg_4o) {
  var kf1rv9 = sg_4o['un'],
      ag2c = sg_4o['uns'],
      _j47s6 = sg_4o['static'],
      k91rvx = sg_4o['class'],
      f0bd = sg_4o['getset'],
      li5n$0 = sg_4o['__newvec'],
      atc82e = laya['utils']['Browser'],
      o6gsa = laya['events']['Event'],
      oceg = laya['events']['EventDispatcher'],
      ga2ce = laya['resource']['HTMLImage'],
      vxk9r = laya['utils']['Handler'],
      l5n0 = laya['display']['Input'],
      k9rx1v = laya['net']['Loader'],
      _ms4j = laya['maths']['Matrix'],
      $bd0wf = laya['renders']['Render'],
      himnl = laya['utils']['RunDriver'],
      ru91k = laya['media']['Sound'],
      jmn_h = laya['media']['SoundChannel'],
      k1rv = laya['media']['SoundManager'],
      fbrw9 = laya['display']['Stage'],
      $bw0f = laya['net']['URL'],
      fwvr9b = laya['utils']['Utils'],
      w1rv = function () {
    function g4a6() {}return k91rvx(g4a6, 'laya.wx.mini.MiniAdpter'), g4a6['getJson'] = function ($vbwdf) {
      return JSON['parse']($vbwdf);
    }, g4a6['init'] = function (d0wbf, gea8o) {
      d0wbf === void 0x0 && (d0wbf = ![]), gea8o === void 0x0 && (gea8o = ![]);if (g4a6['_inited']) return;g4a6['window'] = window;if (g4a6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;g4a6['_inited'] = !![], g4a6['isZiYu'] = gea8o, g4a6['isPosMsgYu'] = d0wbf, g4a6['EnvConfig'] = {}, !g4a6['isZiYu'] && (w1f9rv['setNativeFileDir']('/layaairGame'), w1f9rv['existDir'](w1f9rv['fileNativeDir'], vxk9r['create'](g4a6, g4a6['onMkdirCallBack']))), g4a6['window']['focus'] = function () {}, sg_4o['getUrlPath'] = function () {}, g4a6['window']['logtime'] = function (ku1xyq) {}, g4a6['window']['alertTimeLog'] = function (u9yk1x) {}, g4a6['window']['resetShareInfo'] = function () {}, g4a6['window']['CanvasRenderingContext2D'] = function () {}, g4a6['window']['CanvasRenderingContext2D']['prototype'] = g4a6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g4a6['window']['document']['body']['appendChild'] = function () {}, g4a6['EnvConfig']['pixelRatioInt'] = 0x0, himnl['getPixelRatio'] = g4a6['pixelRatio'], g4a6['_preCreateElement'] = atc82e['createElement'], atc82e['createElement'] = g4a6['createElement'], himnl['createShaderCondition'] = g4a6['createShaderCondition'], fwvr9b['parseXMLFromString'] = g4a6['parseXMLFromString'], l5n0['_createInputElement'] = rv9wb['_createInputElement'], g4a6['EnvConfig']['load'] = k9rx1v['prototype']['load'], k9rx1v['prototype']['load'] = tce28a['prototype']['load'], g4a6['isZiYu'] && d0wbf && wx['onMessage'](function (os_4) {
        os_4['isLoad'] && (w1f9rv['ziyuFileData'][os_4['url']] = os_4['data']);
      });
    }, g4a6['onMkdirCallBack'] = function (l5i0n$, min5hj) {
      if (!l5i0n$) w1f9rv['filesListObj'] = JSON['parse'](min5hj['data']);
    }, g4a6['pixelRatio'] = function () {
      if (!g4a6['EnvConfig']['pixelRatioInt']) try {
        var r1wf9 = wx['getSystemInfoSync']();return g4a6['EnvConfig']['pixelRatioInt'] = r1wf9['pixelRatio'], r1wf9 = r1wf9, r1wf9['pixelRatio'];
      } catch (_64gs) {}return g4a6['EnvConfig']['pixelRatioInt'];
    }, g4a6['createElement'] = function (f9bwvr) {
      if (f9bwvr == 'canvas') {
        var a8te2c;return g4a6['idx'] == 0x1 ? g4a6['isZiYu'] ? (a8te2c = sharedCanvas, a8te2c['style'] = {}) : a8te2c = window['canvas'] : a8te2c = window['wx']['createCanvas'](), g4a6['idx']++, a8te2c;
      } else {
        if (f9bwvr == 'textarea' || f9bwvr == 'input') return g4a6['onCreateInput'](f9bwvr);else {
          if (f9bwvr == 'div') {
            var li$5d0 = g4a6['_preCreateElement'](f9bwvr);return li$5d0['contains'] = function (e2tpz8) {
              return null;
            }, li$5d0['removeChild'] = function (frb) {}, li$5d0;
          } else return g4a6['_preCreateElement'](f9bwvr);
        }
      }
    }, g4a6['onCreateInput'] = function ($wb0fd) {
      var o6a8gc = g4a6['_preCreateElement']($wb0fd);return o6a8gc['focus'] = rv9wb['wxinputFocus'], o6a8gc['blur'] = rv9wb['wxinputblur'], o6a8gc['style'] = {}, o6a8gc['value'] = 0x0, o6a8gc['parentElement'] = {}, o6a8gc['placeholder'] = {}, o6a8gc['type'] = {}, o6a8gc['setColor'] = function (ln5h0) {}, o6a8gc['setType'] = function (ihmjn7) {}, o6a8gc['setFontFace'] = function (yqx3k) {}, o6a8gc['addEventListener'] = function (blw$) {}, o6a8gc['contains'] = function (wrbvd) {
        return null;
      }, o6a8gc['removeChild'] = function ($ldi05) {}, o6a8gc;
    }, g4a6['createShaderCondition'] = function (h7_mjn) {
      var ky3uxq = this,
          h5mil = function () {
        var yqx1 = h7_mjn;return ky3uxq[h7_mjn['replace']('this.', '')];
      };return h5mil;
    }, g4a6['EnvConfig'] = null, g4a6['window'] = null, g4a6['_preCreateElement'] = null, g4a6['_inited'] = ![], g4a6['wxRequest'] = null, g4a6['systemInfo'] = null, g4a6['version'] = '0.0.1', g4a6['isZiYu'] = ![], g4a6['isPosMsgYu'] = ![], g4a6['parseXMLFromString'] = function ($b0wld) {
      var wb9, gaosc6;$b0wld = $b0wld['replace'](/>\s+</g, '><');try {
        wb9 = new window['Parser']['DOMParser']()['parseFromString']($b0wld, 'text/xml');
      } catch (b$wfvd) {
        throw '需要引入xml解析库文件';
      }return wb9;
    }, g4a6['idx'] = 0x1, g4a6;
  }(),
      m5jni = function () {
    function wfd() {}k91rvx(wfd, 'laya.wx.mini.MiniImage');var uyx19k = wfd['prototype'];return uyx19k['_loadImage'] = function (vbf9) {
      var fdbv$ = this,
          f91vrw = ![];vbf9['indexOf']('layaNativeDir/') == -0x1 && (f91vrw = !![], vbf9 = $bw0f['formatURL'](vbf9));if (!w1f9rv['getFileInfo'](vbf9)) {
        if (vbf9['indexOf']('http://') != -0x1 || vbf9['indexOf']('https://') != -0x1) w1f9rv['downImg'](vbf9, new vxk9r(wfd, wfd['onDownImgCallBack'], [vbf9, fdbv$]), vbf9);else wfd['onCreateImage'](vbf9, fdbv$, !![]);
      } else wfd['onCreateImage'](vbf9, fdbv$, !f91vrw);
    }, wfd['onDownImgCallBack'] = function (i$05dl, s6_o, u19yx) {
      if (!u19yx) wfd['onCreateImage'](i$05dl, s6_o);else s6_o['onError'](null);
    }, wfd['onCreateImage'] = function (l0hn, l5mnih, _hjn) {
      _hjn === void 0x0 && (_hjn = ![]);var eaocg8;if (!_hjn) {
        var sm_7j4 = w1f9rv['getFileInfo'](l0hn),
            ykxu3 = sm_7j4['md5'];eaocg8 = w1f9rv['getFileNativePath'](ykxu3);
      } else eaocg8 = l0hn;if (l5mnih['imgCache'] == null) l5mnih['imgCache'] = {};var wdf;function bf9rvw() {
        wdf['onload'] = null, wdf['onerror'] = null, delete l5mnih['imgCache'][l0hn];
      };var fk1r9 = function () {
        bf9rvw(), l5mnih['onLoaded'](wdf);
      },
          n5i0l = function () {
        bf9rvw(), l5mnih['event']('error', 'Load image failed');
      };l5mnih['_type'] == 'nativeimage' ? (wdf = new atc82e['window']['Image'](), wdf['crossOrigin'] = '', wdf['onload'] = fk1r9, wdf['onerror'] = n5i0l, wdf['src'] = eaocg8, l5mnih['imgCache'][l0hn] = wdf) : new ga2ce['create'](eaocg8, { 'onload': fk1r9, 'onerror': n5i0l, 'onCreate': function (_64g) {
          wdf = _64g, l5mnih['imgCache'][l0hn] = _64g;
        } });
    }, wfd;
  }(),
      rv9wb = function () {
    function ogca6s() {}return k91rvx(ogca6s, 'laya.wx.mini.MiniInput'), ogca6s['_createInputElement'] = function () {
      l5n0['_initInput'](l5n0['area'] = atc82e['createElement']('textarea')), l5n0['_initInput'](l5n0['input'] = atc82e['createElement']('input')), l5n0['inputContainer'] = atc82e['createElement']('div'), l5n0['inputContainer']['style']['position'] = 'absolute', l5n0['inputContainer']['style']['zIndex'] = 0x186a0, atc82e['container']['appendChild'](l5n0['inputContainer']), l5n0['inputContainer']['setPos'] = function (xk91r, mnj5h) {
        l5n0['inputContainer']['style']['left'] = xk91r + 'px', l5n0['inputContainer']['style']['top'] = mnj5h + 'px';
      }, sg_4o['stage']['on']('resize', null, ogca6s['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mhli5n) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), k1rv['_soundClass'] = b$dwvf, k1rv['_musicClass'] = b$dwvf;
    }, ogca6s['_onStageResize'] = function () {
      var _7hmjn = sg_4o['stage']['_canvasTransform']['identity']();_7hmjn['scale'](atc82e['width'] / $bd0wf['canvas']['width'] / himnl['getPixelRatio'](), atc82e['height'] / $bd0wf['canvas']['height'] / himnl['getPixelRatio']());
    }, ogca6s['wxinputFocus'] = function (y1xkqu) {
      var i05hl = l5n0['inputElement']['target'];if (i05hl && !i05hl['editable']) return;w1rv['window']['wx']['offKeyboardConfirm'](), w1rv['window']['wx']['offKeyboardInput'](), w1rv['window']['wx']['showKeyboard']({ 'defaultValue': i05hl['text'], 'maxLength': i05hl['maxChars'], 'multiple': i05hl['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($n5i) {}, 'fail': function (inh5jm) {} }), w1rv['window']['wx']['onKeyboardConfirm'](function (drwfbv) {
        var jh7min = drwfbv ? drwfbv['value'] : '';i05hl['text'] = jh7min, i05hl['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), w1rv['window']['wx']['onKeyboardInput'](function (r9vwb) {
        var _4ms = r9vwb ? r9vwb['value'] : '';if (!i05hl['multiline']) {
          if (_4ms['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }i05hl['text'] = _4ms, i05hl['event']('input');
      });
    }, ogca6s['inputEnter'] = function () {
      l5n0['inputElement']['target']['focus'] = ![];
    }, ogca6s['wxinputblur'] = function () {
      ogca6s['hideKeyboard']();
    }, ogca6s['hideKeyboard'] = function () {
      w1rv['window']['wx']['offKeyboardConfirm'](), w1rv['window']['wx']['offKeyboardInput'](), w1rv['window']['wx']['hideKeyboard']({ 'success': function (g4s_o) {
          console['log']('隐藏键盘');
        }, 'fail': function (vwfbd) {
          console['log']('隐藏键盘出错:' + (vwfbd ? vwfbd['errMsg'] : ''));
        } });
    }, ogca6s;
  }(),
      tce28a = function () {
    function ct2e8() {}k91rvx(ct2e8, 'laya.wx.mini.MiniLoader');var xyu1k = ct2e8['prototype'];return xyu1k['load'] = function (h5j, b$lwd, e8ac2g, acoge8, lh0in) {
      e8ac2g === void 0x0 && (e8ac2g = !![]), lh0in === void 0x0 && (lh0in = ![]);var lhi0n = this;lhi0n['_url'] = h5j;if (h5j['indexOf']('data:image') === 0x0) lhi0n['_type'] = b$lwd = 'image';else lhi0n['_type'] = b$lwd || (b$lwd = lhi0n['getTypeFromUrl'](h5j));lhi0n['_cache'] = e8ac2g, lhi0n['_data'] = null;var xky9 = 'ascii';if (h5j['indexOf']('.fnt') != -0x1) xky9 = 'utf8';else b$lwd == 'arraybuffer' && (xky9 = '');;var wv91rf = fwvr9b['getFileExtension'](h5j);if (ct2e8['_fileTypeArr']['indexOf'](wv91rf) != -0x1) w1rv['EnvConfig']['load']['call'](this, h5j, b$lwd, e8ac2g, acoge8, lh0in);else {
        if (!w1f9rv['getFileInfo'](h5j)) {
          if (h5j['indexOf']('layaNativeDir/') != -0x1) {
            if (w1rv['isZiYu']) {
              var mh7_ = w1f9rv['ziyuFileData'][h5j];lhi0n['onLoaded'](mh7_);return;
            } else {
              cosnole['log']('read read'), w1f9rv['read'](h5j, xky9, new vxk9r(ct2e8, ct2e8['onReadNativeCallBack'], [xky9, h5j, b$lwd, e8ac2g, acoge8, lh0in, lhi0n]));return;
            }
          }if ($bw0f['rootPath'] == '') var $wv = h5j;else $wv = h5j['split']($bw0f['rootPath'])[0x0];h5j['indexOf']('http://') != -0x1 || h5j['indexOf']('https://') != -0x1 ? w1rv['EnvConfig']['load']['call'](lhi0n, h5j, b$lwd, e8ac2g, acoge8, lh0in) : w1f9rv['readFile']($wv, xky9, new vxk9r(ct2e8, ct2e8['onReadNativeCallBack'], [xky9, h5j, b$lwd, e8ac2g, acoge8, lh0in, lhi0n]), h5j);
        } else w1rv['EnvConfig']['load']['call'](this, h5j, b$lwd, e8ac2g, acoge8, lh0in);
      }
    }, xyu1k['resMgrLoad'] = function (_m74s, dw$b0l, m7hin, kyxu1, wbdrf, dfbvr, kvrx19) {
      m7hin === void 0x0 && (m7hin = 0x0), kyxu1 === void 0x0 && (kyxu1 = ![]), wbdrf === void 0x0 && (wbdrf = ![]), dfbvr === void 0x0 && (dfbvr = 0x0), kvrx19 === void 0x0 && (kvrx19 = 0x3), _m74s['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _m74s), w1rv['EnvConfig']['resMgrLoad'](_m74s, (dl5$0, csga, wb$vdf) => {
        ct2e8['prototype']['resMgrLoadCallBack'](dl5$0, csga, wb$vdf, dw$b0l);
      }, m7hin, kyxu1, wbdrf, dfbvr, kvrx19);
    }, xyu1k['resMgrLoadCallBack'] = function (s6cog, df0w$b, ln0ih, _7so4) {
      console['log']('buff:::', s6cog, ln0ih, w1f9rv['fileNativeDir'] + '///' + w1f9rv['fileListName']), _7so4(s6cog, df0w$b, ln0ih);
    }, xyu1k['clearRes'] = function (d0wb, li5$0n) {
      li5$0n === void 0x0 && (li5$0n = ![]);var uxqky = this;uxqky['clearRes'](d0wb, li5$0n);var eta = w1f9rv['getFileInfo'](d0wb);if (eta && (d0wb['indexOf']('http://') != -0x1 || d0wb['indexOf']('https://') != -0x1)) {
        var db5$0l = eta['md5'],
            te8pz = w1f9rv['getFileNativePath'](db5$0l);w1f9rv['remove'](te8pz);
      }
    }, ct2e8['onReadNativeCallBack'] = function (x3ukyq, tze2, h_7jm, acet82, yk3uq, mjin5, xqk3uy, ihmn, y9) {
      acet82 === void 0x0 && (acet82 = !![]), mjin5 === void 0x0 && (mjin5 = ![]), ihmn === void 0x0 && (ihmn = 0x0);if (!ihmn) {
        var aog4;if (h_7jm == 'json' || h_7jm == 'atlas') aog4 = w1rv['getJson'](y9['data']);else h_7jm == 'xml' ? aog4 = fwvr9b['parseXMLFromString'](y9['data']) : aog4 = y9['data'];xqk3uy['onLoaded'](aog4), !w1rv['isZiYu'] && w1rv['isPosMsgYu'] && h_7jm != 'arraybuffer' && wx['postMessage']({ 'url': tze2, 'data': aog4, 'isLoad': !![] });
      } else ihmn == 0x1 && w1rv['EnvConfig']['load']['call'](xqk3uy, tze2, h_7jm, acet82, yk3uq, mjin5);
    }, _j47s6(ct2e8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ct2e8;
  }(),
      w1f9rv = function (hn0li5) {
    function lb5$d0() {
      lb5$d0['__super']['call'](this);;
    }return k91rvx(lb5$d0, 'laya.wx.mini.MiniFileMgr', hn0li5), lb5$d0['isLoadFile'] = function (w$d0lb) {
      return lb5$d0['_fileTypeArr']['indexOf'](w$d0lb) != -0x1 ? !![] : ![];
    }, lb5$d0['getFileInfo'] = function (x1rv9k) {
      var h5nilm = x1rv9k['split']('?')[0x0],
          im5jh = lb5$d0['filesListObj'][h5nilm];if (im5jh == null) return null;else return im5jh;return null;
    }, lb5$d0['onFileUpdate'] = function (bd5$l, s46go_) {
      var o64gs_ = bd5$l['split']('/'),
          xy1ku = o64gs_[o64gs_['length'] - 0x1],
          uqxyk = lb5$d0['getFileInfo'](s46go_);if (uqxyk == null) lb5$d0['onSaveFile'](s46go_, xy1ku);else {
        if (uqxyk['readyUrl'] != s46go_) lb5$d0['remove'](xy1ku, s46go_);
      }
    }, lb5$d0['exits'] = function (ih7jn, kxur1) {
      var x9urk1 = lb5$d0['getFileNativePath'](ih7jn);lb5$d0['fs']['getFileInfo']({ 'filePath': x9urk1, 'success': function (nim7) {
          kxur1 != null && kxur1['runWith']([0x0, nim7]);
        }, 'fail': function (i5n0h) {
          kxur1 != null && kxur1['runWith']([0x1, i5n0h]);
        } });
    }, lb5$d0['read'] = function (a2c8te, n5ihm, ce8a2t, ijm7) {
      n5ihm === void 0x0 && (n5ihm = 'ascill'), ijm7 === void 0x0 && (ijm7 = '');var db05l;ijm7 != '' ? db05l = lb5$d0['getFileNativePath'](a2c8te) : db05l = a2c8te, lb5$d0['fs']['readFile']({ 'filePath': db05l, 'encoding': n5ihm, 'success': function (t8zc2e) {
          ce8a2t != null && ce8a2t['runWith']([0x0, t8zc2e]);
        }, 'fail': function (kv1f9r) {
          if (kv1f9r && ijm7 != '') lb5$d0['down'](ijm7, n5ihm, ce8a2t, ijm7);else ce8a2t != null && ce8a2t['runWith']([0x1]);
        } });
    }, lb5$d0['readNativeFile'] = function (gcs6a, lih) {
      lb5$d0['fs']['readFile']({ 'filePath': gcs6a, 'encoding': '', 'success': function (v1wfr) {
          lih != null && lih['runWith']([0x0]);
        }, 'fail': function (vw9rb) {
          lih != null && lih['runWith']([0x1]);
        } });
    }, lb5$d0['down'] = function (g_so6, uk9r1, mhj5, $i50) {
      uk9r1 === void 0x0 && (uk9r1 = 'ascill'), $i50 === void 0x0 && ($i50 = '');var act28e = lb5$d0['getFileNativePath']($i50),
          kr91u = lb5$d0['wxdown']({ 'url': g_so6, 'filePath': act28e, 'success': function (ec2tz) {
          if (ec2tz['statusCode'] === 0xc8) lb5$d0['readFile'](ec2tz['filePath'], uk9r1, mhj5, $i50);
        }, 'fail': function (k1u9r) {
          mhj5 != null && mhj5['runWith']([0x1, k1u9r]);
        } });kr91u['onProgressUpdate'](function (bwdf0$) {
        mhj5 != null && mhj5['runWith']([0x2, bwdf0$['progress']]);
      });
    }, lb5$d0['readFile'] = function (tz8ep, nijhm5, j7n_m, $li5) {
      nijhm5 === void 0x0 && (nijhm5 = 'ascill'), $li5 === void 0x0 && ($li5 = ''), lb5$d0['fs']['readFile']({ 'filePath': tz8ep, 'encoding': nijhm5, 'success': function (a8c6go) {
          if (tz8ep['indexOf']('http://') != -0x1 || tz8ep['indexOf']('https://') != -0x1) lb5$d0['onFileUpdate'](tz8ep, $li5);j7n_m != null && j7n_m['runWith']([0x0, a8c6go]);
        }, 'fail': function (bdfvr) {
          if (bdfvr) j7n_m != null && j7n_m['runWith']([0x1, bdfvr]);
        } });
    }, lb5$d0['downImg'] = function (r9xku1, k1rvx9, wfvb$) {
      wfvb$ === void 0x0 && (wfvb$ = '');var l0ni$5 = lb5$d0['wxdown']({ 'url': r9xku1, 'success': function (fdbr) {
          fdbr['statusCode'] === 0xc8 && lb5$d0['copyFile'](fdbr['tempFilePath'], wfvb$, k1rvx9);
        }, 'fail': function (cgeoa) {
          k1rvx9 != null && k1rvx9['runWith']([0x1, cgeoa]);
        } });
    }, lb5$d0['copyFile'] = function (d05i$l, kxuq3y, e28at) {
      var caog86 = d05i$l['split']('/'),
          ge82a = caog86[caog86['length'] - 0x1],
          ln0i5$ = kxuq3y['split']('?')[0x0],
          nmihj7 = lb5$d0['getFileInfo'](kxuq3y),
          $lid5 = lb5$d0['getFileNativePath'](ge82a);lb5$d0['fs']['copyFile']({ 'srcPath': d05i$l, 'destPath': $lid5, 'success': function (yuk3x) {
          if (!nmihj7) lb5$d0['onSaveFile'](kxuq3y, ge82a), e28at != null && e28at['runWith']([0x0]);else {
            if (nmihj7['readyUrl'] != kxuq3y) lb5$d0['remove'](ge82a, kxuq3y, e28at);
          }
        }, 'fail': function (vwd$bf) {
          e28at != null && e28at['runWith']([0x1, vwd$bf]);
        } });
    }, lb5$d0['getFileNativePath'] = function (so64_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + so64_;
    }, lb5$d0['remove'] = function ($0wd, acte8, ld0b5$) {
      acte8 === void 0x0 && (acte8 = '');var v1frw9 = lb5$d0['getFileInfo'](acte8),
          dfwb0 = lb5$d0['getFileNativePath'](v1frw9['md5']);sg_4o['loader']['clearRes'](v1frw9['readyUrl']), lb5$d0['fs']['unlink']({ 'filePath': dfwb0, 'success': function (w0d$b) {
          if (acte8 != '') lb5$d0['onSaveFile'](acte8, $0wd);ld0b5$ != null && ld0b5$['runWith']([0x0]);
        }, 'fail': function (j674) {} });
    }, lb5$d0['onSaveFile'] = function (wbl0, d5l0$b) {
      var wbrfd = wbl0['split']('?')[0x0];lb5$d0['filesListObj'][wbrfd] = { 'md5': d5l0$b, 'readyUrl': wbl0 }, lb5$d0['fs']['writeFile']({ 'filePath': lb5$d0['fileNativeDir'] + '/' + lb5$d0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lb5$d0['filesListObj']), 'success': function ($dlbw) {
          console['log']('写入测试测试成功：', $dlbw);
        }, 'fail': function (t2pe8z) {
          console['log']('写入测试测试失败：', t2pe8z);
        } });
    }, lb5$d0['existDir'] = function ($vbwfd, o_4s67) {
      lb5$d0['fs']['mkdir']({ 'dirPath': $vbwfd, 'success': function (b$ld) {
          o_4s67 != null && o_4s67['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (b0dl$5) {
          if (b0dl$5['errMsg']['indexOf']('file already exists') != -0x1) lb5$d0['readSync'](lb5$d0['fileListName'], 'utf8', o_4s67);else o_4s67 != null && o_4s67['runWith']([0x1, b0dl$5]);
        } });
    }, lb5$d0['readSync'] = function (lbd50, $fw0b, ms_j4, v91rkf) {
      $fw0b === void 0x0 && ($fw0b = 'ascill'), v91rkf === void 0x0 && (v91rkf = '');var t2 = lb5$d0['getFileNativePath'](lbd50),
          r1ukx;try {
        r1ukx = lb5$d0['fs']['readFileSync'](t2), ms_j4 != null && ms_j4['runWith']([0x0, { 'data': r1ukx }]);
      } catch (e82gca) {
        ms_j4 != null && ms_j4['runWith']([0x1]);
      }
    }, lb5$d0['readCache'] = function () {}, lb5$d0['writeCache'] = function (dwvr) {
      var b$wfd = readyUrl['split']('?')[0x0];lb5$d0['filesListObj'][b$wfd] = { 'md5': md5Name, 'readyUrl': readyUrl }, lb5$d0['fs']['writeFile']({ 'filePath': lb5$d0['fileNativeDir'] + '/' + lb5$d0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lb5$d0['filesListObj']), 'success': function (bfw$0) {}, 'fail': function (yu1xk9) {} });
    }, lb5$d0['setNativeFileDir'] = function (ux91rk) {
      lb5$d0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ux91rk;
    }, lb5$d0['filesListObj'] = {}, lb5$d0['fileNativeDir'] = null, lb5$d0['fileListName'] = 'layaairfiles.txt', lb5$d0['ziyuFileData'] = {}, _j47s6(lb5$d0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), lb5$d0;
  }(oceg),
      b$dwvf = function (fvwrd) {
    function ezct82() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ezct82['__super']['call'](this), this['_sound'] = ezct82['_createSound']();
    }k91rvx(ezct82, 'laya.wx.mini.MiniSound', fvwrd);var cs6og = ezct82['prototype'];return cs6og['load'] = function (ca6og8) {
      var vdb$w = this;ca6og8 = $bw0f['formatURL'](ca6og8), this['url'] = ca6og8;if (ezct82['_audioCache'][ca6og8]) {
        this['event']('complete');return;
      }function egc2() {
        if (ezct82['_null'] != undefined) vdb$w['_sound']['onCanplay'](ezct82['_null']), vdb$w['_sound']['onError'](ezct82['_null']);else try {
          vdb$w['_sound']['onCanplay'](null), vdb$w['_sound']['onError'](null), ezct82['_null'] = null;
        } catch (o8caeg) {
          console['warn']('[wxmini] _clearSound:' + o8caeg), vdb$w['_sound']['onCanplay'](oc6g8a), vdb$w['_sound']['onError'](oc6g8a), ezct82['_null'] = oc6g8a;
        }
      }function d5l0$i() {
        egc2(), ocas6g['loaded'] = !![], ocas6g['event']('complete'), ezct82['_audioCache'][ocas6g['url']] = ocas6g;
      }function fdv$(x9kv1r) {
        console['error']('errCode=' + x9kv1r['errCode'] + '  errMsg=' + x9kv1r['errMsg']), egc2(), ocas6g['event']('error');
      }function oc6g8a() {}this['_sound']['onCanplay'](d5l0$i), this['_sound']['onError'](fdv$), this['_sound']['src'] = ca6og8;var ocas6g = this;
    }, cs6og['play'] = function (w9rfv, mihnj7) {
      w9rfv === void 0x0 && (w9rfv = 0x0), mihnj7 === void 0x0 && (mihnj7 = 0x0);var $vbfwd;if (this['url'] == k1rv['_tMusic']) {
        if (!ezct82['_musicAudio']) ezct82['_musicAudio'] = ezct82['_createSound']();$vbfwd = ezct82['_musicAudio'];
      } else $vbfwd = ezct82['_createSound']();$vbfwd['src'] = this['url'];var _4sg6o = new ihjmn7($vbfwd);return _4sg6o['url'] = this['url'], _4sg6o['loops'] = mihnj7, _4sg6o['startTime'] = w9rfv, _4sg6o['play'](), k1rv['addChannel'](_4sg6o), _4sg6o;
    }, cs6og['dispose'] = function () {
      var fbvd = ezct82['_audioCache'][this['url']];fbvd && (fbvd['src'] = '', delete ezct82['_audioCache'][this['url']]);
    }, f0bd(0x0, cs6og, 'duration', function () {
      return this['_sound']['duration'];
    }), ezct82['_createSound'] = function () {
      return ezct82['_id']++, w1rv['window']['wx']['createInnerAudioContext']();
    }, ezct82['_musicAudio'] = null, ezct82['_id'] = 0x0, ezct82['_audioCache'] = {}, ezct82['_null'] = undefined, ezct82;
  }(oceg),
      ihjmn7 = function (hm_jn7) {
    function uqkyx(msj74) {
      this['_audio'] = null, this['_onEnd'] = null, uqkyx['__super']['call'](this), this['_audio'] = msj74, this['_onEnd'] = fwvr9b['bind'](this['__onEnd'], this), msj74['onEnded'](this['_onEnd']);
    }k91rvx(uqkyx, 'laya.wx.mini.MiniSoundChannel', hm_jn7);var _gs = uqkyx['prototype'];return _gs['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (sg_4o['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _gs['__onNull'] = function () {}, _gs['play'] = function () {
      this['isStopped'] = ![], k1rv['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _gs['stop'] = function () {
      this['isStopped'] = !![], k1rv['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (uqkyx['_null'] != undefined) this['_audio']['onEnded'](uqkyx['_null']);else try {
        this['_audio']['onEnded'](null), uqkyx['_null'] = null;
      } catch (uyqk3x) {
        console['warn']('[wxmini] stop:' + uyqk3x), this['_audio']['onEnded'](fwvr9b['bind'](this['__onNull'], this)), uqkyx['_null'] = fwvr9b['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _gs['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _gs['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], k1rv['addChannel'](this), this['_audio']['play']();
    }, f0bd(0x0, _gs, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f0bd(0x0, _gs, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f0bd(0x0, _gs, 'volume', function () {
      return 0x1;
    }, function (u3qkx) {}), uqkyx['_null'] = undefined, uqkyx;
  }(jmn_h);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var p28zet in Laya) {
    var himn5j = Laya[p28zet];himn5j && himn5j['__isclass'] && (exports[p28zet] = himn5j);
  }
});