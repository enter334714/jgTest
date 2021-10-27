var W = wx.$l;
(function (window, document, zu4i2o) {
  var y95$_ = zu4i2o['un'],
      f1cks = zu4i2o['uns'],
      _9$e5 = zu4i2o['static'],
      ljhr3 = zu4i2o['class'],
      m3 = zu4i2o['getset'],
      gbwqy = zu4i2o['__newvec'],
      _q$y = laya['utils']['Browser'],
      pvade = laya['events']['Event'],
      $79e = laya['events']['EventDispatcher'],
      _$7a5e = laya['resource']['HTMLImage'],
      g_w = laya['utils']['Handler'],
      n8bf = laya['display']['Input'],
      gfqbn = laya['net']['Loader'],
      bksng = laya['maths']['Matrix'],
      e5_a = laya['renders']['Render'],
      kgb = laya['utils']['RunDriver'],
      bqnwfg = laya['media']['Sound'],
      zum324 = laya['media']['SoundChannel'],
      xo2iut = laya['media']['SoundManager'],
      r3lm0 = laya['display']['Stage'],
      mlr43 = laya['net']['URL'],
      u2zito = laya['utils']['Utils'],
      t2oxu = function () {
    function rchjl() {}return ljhr3(rchjl, 'laya.wx.mini.MiniAdpter'), rchjl['getJson'] = function ($75ae) {
      return JSON['parse']($75ae);
    }, rchjl['init'] = function (pe76av, ev7) {
      pe76av === void 0x0 && (pe76av = ![]), ev7 === void 0x0 && (ev7 = ![]);if (rchjl['_inited']) return;rchjl['window'] = window;if (rchjl['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rchjl['_inited'] = !![], rchjl['isZiYu'] = ev7, rchjl['isPosMsgYu'] = pe76av, rchjl['EnvConfig'] = {}, !rchjl['isZiYu'] && (tuxi['setNativeFileDir']('/layaairGame'), tuxi['existDir'](tuxi['fileNativeDir'], g_w['create'](rchjl, rchjl['onMkdirCallBack']))), rchjl['window']['focus'] = function () {}, zu4i2o['getUrlPath'] = function () {}, rchjl['window']['logtime'] = function (e7v5a$) {}, rchjl['window']['alertTimeLog'] = function (_9$y75) {}, rchjl['window']['resetShareInfo'] = function () {}, rchjl['window']['CanvasRenderingContext2D'] = function () {}, rchjl['window']['CanvasRenderingContext2D']['prototype'] = rchjl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rchjl['window']['document']['body']['appendChild'] = function () {}, rchjl['EnvConfig']['pixelRatioInt'] = 0x0, kgb['getPixelRatio'] = rchjl['pixelRatio'], rchjl['_preCreateElement'] = _q$y['createElement'], _q$y['createElement'] = rchjl['createElement'], kgb['createShaderCondition'] = rchjl['createShaderCondition'], u2zito['parseXMLFromString'] = rchjl['parseXMLFromString'], n8bf['_createInputElement'] = _q$9['_createInputElement'], rchjl['EnvConfig']['load'] = gfqbn['prototype']['load'], gfqbn['prototype']['load'] = a5e$v['prototype']['load'], rchjl['isZiYu'] && pe76av && wx['onMessage'](function (q$wy9_) {
        q$wy9_['isLoad'] && (tuxi['ziyuFileData'][q$wy9_['url']] = q$wy9_['data']);
      });
    }, rchjl['onMkdirCallBack'] = function (oxt2iu, c8k1f) {
      if (!oxt2iu) tuxi['filesListObj'] = JSON['parse'](c8k1f['data']);
    }, rchjl['pixelRatio'] = function () {
      if (!rchjl['EnvConfig']['pixelRatioInt']) try {
        var _9gyq = wx['getSystemInfoSync']();return rchjl['EnvConfig']['pixelRatioInt'] = _9gyq['pixelRatio'], _9gyq = _9gyq, _9gyq['pixelRatio'];
      } catch (g_y9w) {}return rchjl['EnvConfig']['pixelRatioInt'];
    }, rchjl['createElement'] = function (q9_$y5) {
      if (q9_$y5 == 'canvas') {
        var jc01l8;return rchjl['idx'] == 0x1 ? rchjl['isZiYu'] ? (jc01l8 = sharedCanvas, jc01l8['style'] = {}) : jc01l8 = window['canvas'] : jc01l8 = window['wx']['createCanvas'](), rchjl['idx']++, jc01l8;
      } else {
        if (q9_$y5 == 'textarea' || q9_$y5 == 'input') return rchjl['onCreateInput'](q9_$y5);else {
          if (q9_$y5 == 'div') {
            var p6veda = rchjl['_preCreateElement'](q9_$y5);return p6veda['contains'] = function (jlcrh0) {
              return null;
            }, p6veda['removeChild'] = function (jc80) {}, p6veda;
          } else return rchjl['_preCreateElement'](q9_$y5);
        }
      }
    }, rchjl['onCreateInput'] = function ($a75) {
      var r4hlm3 = rchjl['_preCreateElement']($a75);return r4hlm3['focus'] = _q$9['wxinputFocus'], r4hlm3['blur'] = _q$9['wxinputblur'], r4hlm3['style'] = {}, r4hlm3['value'] = 0x0, r4hlm3['parentElement'] = {}, r4hlm3['placeholder'] = {}, r4hlm3['type'] = {}, r4hlm3['setColor'] = function (cljr) {}, r4hlm3['setType'] = function (rcj0) {}, r4hlm3['setFontFace'] = function (t2ox) {}, r4hlm3['addEventListener'] = function (h43mzr) {}, r4hlm3['contains'] = function (n8kbfs) {
        return null;
      }, r4hlm3['removeChild'] = function (fnb8s) {}, r4hlm3;
    }, rchjl['createShaderCondition'] = function (ape6v7) {
      var z2uto = this,
          ngbqf = function () {
        var uz23 = ape6v7;return z2uto[ape6v7['replace']('this.', '')];
      };return ngbqf;
    }, rchjl['EnvConfig'] = null, rchjl['window'] = null, rchjl['_preCreateElement'] = null, rchjl['_inited'] = ![], rchjl['wxRequest'] = null, rchjl['systemInfo'] = null, rchjl['version'] = '0.0.1', rchjl['isZiYu'] = ![], rchjl['isPosMsgYu'] = ![], rchjl['parseXMLFromString'] = function (u2iotz) {
      var m43lr, e$a5v7;u2iotz = u2iotz['replace'](/>\s+</g, '><');try {
        m43lr = new window['Parser']['DOMParser']()['parseFromString'](u2iotz, 'text/xml');
      } catch (rj3l) {
        throw '需要引入xml解析库文件';
      }return m43lr;
    }, rchjl['idx'] = 0x1, rchjl;
  }(),
      hlj3r0 = function () {
    function avpd6() {}ljhr3(avpd6, 'laya.wx.mini.MiniImage');var ev57$a = avpd6['prototype'];return ev57$a['_loadImage'] = function (_$qyw) {
      var gfqwn = this,
          lm0r = ![];_$qyw['indexOf']('layaNativeDir/') == -0x1 && (lm0r = !![], _$qyw = mlr43['formatURL'](_$qyw));if (!tuxi['getFileInfo'](_$qyw)) {
        if (_$qyw['indexOf']('http://') != -0x1 || _$qyw['indexOf']('https://') != -0x1) tuxi['downImg'](_$qyw, new g_w(avpd6, avpd6['onDownImgCallBack'], [_$qyw, gfqwn]), _$qyw);else avpd6['onCreateImage'](_$qyw, gfqwn, !![]);
      } else avpd6['onCreateImage'](_$qyw, gfqwn, !lm0r);
    }, avpd6['onDownImgCallBack'] = function (zrm43h, gkwf, f1ck8s) {
      if (!f1ck8s) avpd6['onCreateImage'](zrm43h, gkwf);else gkwf['onError'](null);
    }, avpd6['onCreateImage'] = function (qbgwy, a67pve, uh3m4) {
      uh3m4 === void 0x0 && (uh3m4 = ![]);var yq_5$9;if (!uh3m4) {
        var humz = tuxi['getFileInfo'](qbgwy),
            uzo2it = humz['md5'];yq_5$9 = tuxi['getFileNativePath'](uzo2it);
      } else yq_5$9 = qbgwy;if (a67pve['imgCache'] == null) a67pve['imgCache'] = {};var bygnq;function a7ve6() {
        bygnq['onload'] = null, bygnq['onerror'] = null, delete a67pve['imgCache'][qbgwy];
      };var sj10c8 = function () {
        a7ve6(), a67pve['onLoaded'](bygnq);
      },
          e795$ = function () {
        a7ve6(), a67pve['event']('error', 'Load image failed');
      };a67pve['_type'] == 'nativeimage' ? (bygnq = new _q$y['window']['Image'](), bygnq['crossOrigin'] = '', bygnq['onload'] = sj10c8, bygnq['onerror'] = e795$, bygnq['src'] = yq_5$9, a67pve['imgCache'][qbgwy] = bygnq) : new _$7a5e['create'](yq_5$9, { 'onload': sj10c8, 'onerror': e795$, 'onCreate': function (pea6dv) {
          bygnq = pea6dv, a67pve['imgCache'][qbgwy] = pea6dv;
        } });
    }, avpd6;
  }(),
      _q$9 = function () {
    function ed6vp() {}return ljhr3(ed6vp, 'laya.wx.mini.MiniInput'), ed6vp['_createInputElement'] = function () {
      n8bf['_initInput'](n8bf['area'] = _q$y['createElement']('textarea')), n8bf['_initInput'](n8bf['input'] = _q$y['createElement']('input')), n8bf['inputContainer'] = _q$y['createElement']('div'), n8bf['inputContainer']['style']['position'] = 'absolute', n8bf['inputContainer']['style']['zIndex'] = 0x186a0, _q$y['container']['appendChild'](n8bf['inputContainer']), n8bf['inputContainer']['setPos'] = function (uo4i2, oux2i) {
        n8bf['inputContainer']['style']['left'] = uo4i2 + 'px', n8bf['inputContainer']['style']['top'] = oux2i + 'px';
      }, zu4i2o['stage']['on']('resize', null, ed6vp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (imu4z2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xo2iut['_soundClass'] = lj30rh, xo2iut['_musicClass'] = lj30rh;
    }, ed6vp['_onStageResize'] = function () {
      var e$_ = zu4i2o['stage']['_canvasTransform']['identity']();e$_['scale'](_q$y['width'] / e5_a['canvas']['width'] / kgb['getPixelRatio'](), _q$y['height'] / e5_a['canvas']['height'] / kgb['getPixelRatio']());
    }, ed6vp['wxinputFocus'] = function (fsk8n1) {
      var e_9$57 = n8bf['inputElement']['target'];if (e_9$57 && !e_9$57['editable']) return;t2oxu['window']['wx']['offKeyboardConfirm'](), t2oxu['window']['wx']['offKeyboardInput'](), t2oxu['window']['wx']['showKeyboard']({ 'defaultValue': e_9$57['text'], 'maxLength': e_9$57['maxChars'], 'multiple': e_9$57['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mhlr3) {}, 'fail': function (y9_q5) {} }), t2oxu['window']['wx']['onKeyboardConfirm'](function (ot2uiz) {
        var j0r1c = ot2uiz ? ot2uiz['value'] : '';e_9$57['text'] = j0r1c, e_9$57['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), t2oxu['window']['wx']['onKeyboardInput'](function (hlrj3) {
        var j03lhr = hlrj3 ? hlrj3['value'] : '';if (!e_9$57['multiline']) {
          if (j03lhr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }e_9$57['text'] = j03lhr, e_9$57['event']('input');
      });
    }, ed6vp['inputEnter'] = function () {
      n8bf['inputElement']['target']['focus'] = ![];
    }, ed6vp['wxinputblur'] = function () {
      ed6vp['hideKeyboard']();
    }, ed6vp['hideKeyboard'] = function () {
      t2oxu['window']['wx']['offKeyboardConfirm'](), t2oxu['window']['wx']['offKeyboardInput'](), t2oxu['window']['wx']['hideKeyboard']({ 'success': function (uz24oi) {
          console['log']('隐藏键盘');
        }, 'fail': function (skj18c) {
          console['log']('隐藏键盘出错:' + (skj18c ? skj18c['errMsg'] : ''));
        } });
    }, ed6vp;
  }(),
      a5e$v = function () {
    function otixu() {}ljhr3(otixu, 'laya.wx.mini.MiniLoader');var gfkbns = otixu['prototype'];return gfkbns['load'] = function (js18c, _75ae, v6a75e, rmh34, w9yq_$) {
      v6a75e === void 0x0 && (v6a75e = !![]), w9yq_$ === void 0x0 && (w9yq_$ = ![]);var $5e7_a = this;$5e7_a['_url'] = js18c;if (js18c['indexOf']('data:image') === 0x0) $5e7_a['_type'] = _75ae = 'image';else $5e7_a['_type'] = _75ae || (_75ae = $5e7_a['getTypeFromUrl'](js18c));$5e7_a['_cache'] = v6a75e, $5e7_a['_data'] = null;var $_e95 = 'ascii';if (js18c['indexOf']('.fnt') != -0x1) $_e95 = 'utf8';else _75ae == 'arraybuffer' && ($_e95 = '');;var uz2m = u2zito['getFileExtension'](js18c);if (otixu['_fileTypeArr']['indexOf'](uz2m) != -0x1) t2oxu['EnvConfig']['load']['call'](this, js18c, _75ae, v6a75e, rmh34, w9yq_$);else {
        if (!tuxi['getFileInfo'](js18c)) {
          if (js18c['indexOf']('layaNativeDir/') != -0x1) {
            if (t2oxu['isZiYu']) {
              var i2zu4m = tuxi['ziyuFileData'][js18c];$5e7_a['onLoaded'](i2zu4m);return;
            } else {
              cosnole['log']('read read'), tuxi['read'](js18c, $_e95, new g_w(otixu, otixu['onReadNativeCallBack'], [$_e95, js18c, _75ae, v6a75e, rmh34, w9yq_$, $5e7_a]));return;
            }
          }if (mlr43['rootPath'] == '') var _$y79 = js18c;else _$y79 = js18c['split'](mlr43['rootPath'])[0x0];js18c['indexOf']('http://') != -0x1 || js18c['indexOf']('https://') != -0x1 ? t2oxu['EnvConfig']['load']['call']($5e7_a, js18c, _75ae, v6a75e, rmh34, w9yq_$) : tuxi['readFile'](_$y79, $_e95, new g_w(otixu, otixu['onReadNativeCallBack'], [$_e95, js18c, _75ae, v6a75e, rmh34, w9yq_$, $5e7_a]), js18c);
        } else t2oxu['EnvConfig']['load']['call'](this, js18c, _75ae, v6a75e, rmh34, w9yq_$);
      }
    }, gfkbns['resMgrLoad'] = function (bwngqf, rh30m, nfskg, clh0r, k1f8n, iotu2z, c8sfk) {
      nfskg === void 0x0 && (nfskg = 0x0), clh0r === void 0x0 && (clh0r = ![]), k1f8n === void 0x0 && (k1f8n = ![]), iotu2z === void 0x0 && (iotu2z = 0x0), c8sfk === void 0x0 && (c8sfk = 0x3), bwngqf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bwngqf), t2oxu['EnvConfig']['resMgrLoad'](bwngqf, (m43rh, l03rjh, lrjc1) => {
        otixu['prototype']['resMgrLoadCallBack'](m43rh, l03rjh, lrjc1, rh30m);
      }, nfskg, clh0r, k1f8n, iotu2z, c8sfk);
    }, gfkbns['resMgrLoadCallBack'] = function (cs8k1j, i4muz, ybgw9q, s8kn1f) {
      console['log']('buff:::', cs8k1j, ybgw9q, tuxi['fileNativeDir'] + '///' + tuxi['fileListName']), s8kn1f(cs8k1j, i4muz, ybgw9q);
    }, gfkbns['clearRes'] = function ($5ae7, q9gy_) {
      q9gy_ === void 0x0 && (q9gy_ = ![]);var nkfsbg = this;nkfsbg['clearRes']($5ae7, q9gy_);var iuoz2t = tuxi['getFileInfo']($5ae7);if (iuoz2t && ($5ae7['indexOf']('http://') != -0x1 || $5ae7['indexOf']('https://') != -0x1)) {
        var w9q$y_ = iuoz2t['md5'],
            uz4im = tuxi['getFileNativePath'](w9q$y_);tuxi['remove'](uz4im);
      }
    }, otixu['onReadNativeCallBack'] = function ($y59, kfns, a765v, m4iuz2, sck1, ksf8, f1kcs, ot2iux, sbgknf) {
      m4iuz2 === void 0x0 && (m4iuz2 = !![]), ksf8 === void 0x0 && (ksf8 = ![]), ot2iux === void 0x0 && (ot2iux = 0x0);if (!ot2iux) {
        var z4h3m;if (a765v == 'json' || a765v == 'atlas') z4h3m = t2oxu['getJson'](sbgknf['data']);else a765v == 'xml' ? z4h3m = u2zito['parseXMLFromString'](sbgknf['data']) : z4h3m = sbgknf['data'];f1kcs['onLoaded'](z4h3m), !t2oxu['isZiYu'] && t2oxu['isPosMsgYu'] && a765v != 'arraybuffer' && wx['postMessage']({ 'url': kfns, 'data': z4h3m, 'isLoad': !![] });
      } else ot2iux == 0x1 && t2oxu['EnvConfig']['load']['call'](f1kcs, kfns, a765v, m4iuz2, sck1, ksf8);
    }, _9$e5(otixu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), otixu;
  }(),
      tuxi = function (fn8s) {
    function z24miu() {
      z24miu['__super']['call'](this);;
    }return ljhr3(z24miu, 'laya.wx.mini.MiniFileMgr', fn8s), z24miu['isLoadFile'] = function (n8fkbs) {
      return z24miu['_fileTypeArr']['indexOf'](n8fkbs) != -0x1 ? !![] : ![];
    }, z24miu['getFileInfo'] = function (sn8kb) {
      var w_9g = sn8kb['split']('?')[0x0],
          a57ve6 = z24miu['filesListObj'][w_9g];if (a57ve6 == null) return null;else return a57ve6;return null;
    }, z24miu['onFileUpdate'] = function (y57, knfwgb) {
      var s8c = y57['split']('/'),
          bfgwn = s8c[s8c['length'] - 0x1],
          bkfns = z24miu['getFileInfo'](knfwgb);if (bkfns == null) z24miu['onSaveFile'](knfwgb, bfgwn);else {
        if (bkfns['readyUrl'] != knfwgb) z24miu['remove'](bfgwn, knfwgb);
      }
    }, z24miu['exits'] = function (vdape6, m4zhr3) {
      var h3u = z24miu['getFileNativePath'](vdape6);z24miu['fs']['getFileInfo']({ 'filePath': h3u, 'success': function (gbfnwk) {
          m4zhr3 != null && m4zhr3['runWith']([0x0, gbfnwk]);
        }, 'fail': function (ybwn) {
          m4zhr3 != null && m4zhr3['runWith']([0x1, ybwn]);
        } });
    }, z24miu['read'] = function (qnfgbw, fgw, ygb9, fbksgn) {
      fgw === void 0x0 && (fgw = 'ascill'), fbksgn === void 0x0 && (fbksgn = '');var nbfgqw;fbksgn != '' ? nbfgqw = z24miu['getFileNativePath'](qnfgbw) : nbfgqw = qnfgbw, z24miu['fs']['readFile']({ 'filePath': nbfgqw, 'encoding': fgw, 'success': function (b8nksf) {
          ygb9 != null && ygb9['runWith']([0x0, b8nksf]);
        }, 'fail': function (c18jsk) {
          if (c18jsk && fbksgn != '') z24miu['down'](fbksgn, fgw, ygb9, fbksgn);else ygb9 != null && ygb9['runWith']([0x1]);
        } });
    }, z24miu['readNativeFile'] = function (ape7v6, uioz2) {
      z24miu['fs']['readFile']({ 'filePath': ape7v6, 'encoding': '', 'success': function (a5$7v) {
          uioz2 != null && uioz2['runWith']([0x0]);
        }, 'fail': function (nqybg) {
          uioz2 != null && uioz2['runWith']([0x1]);
        } });
    }, z24miu['down'] = function (u3m4z, iotx2u, qfnb, hmz3r) {
      iotx2u === void 0x0 && (iotx2u = 'ascill'), hmz3r === void 0x0 && (hmz3r = '');var k8cjs1 = z24miu['getFileNativePath'](hmz3r),
          x2oti = z24miu['wxdown']({ 'url': u3m4z, 'filePath': k8cjs1, 'success': function (skc8j1) {
          if (skc8j1['statusCode'] === 0xc8) z24miu['readFile'](skc8j1['filePath'], iotx2u, qfnb, hmz3r);
        }, 'fail': function ($vae) {
          qfnb != null && qfnb['runWith']([0x1, $vae]);
        } });x2oti['onProgressUpdate'](function (hlm) {
        qfnb != null && qfnb['runWith']([0x2, hlm['progress']]);
      });
    }, z24miu['readFile'] = function (a5e76v, mr, yqw$, s18c0j) {
      mr === void 0x0 && (mr = 'ascill'), s18c0j === void 0x0 && (s18c0j = ''), z24miu['fs']['readFile']({ 'filePath': a5e76v, 'encoding': mr, 'success': function (f18sck) {
          if (a5e76v['indexOf']('http://') != -0x1 || a5e76v['indexOf']('https://') != -0x1) z24miu['onFileUpdate'](a5e76v, s18c0j);yqw$ != null && yqw$['runWith']([0x0, f18sck]);
        }, 'fail': function (hz3r) {
          if (hz3r) yqw$ != null && yqw$['runWith']([0x1, hz3r]);
        } });
    }, z24miu['downImg'] = function (t2oixu, pe6dv, z43mu2) {
      z43mu2 === void 0x0 && (z43mu2 = '');var $5y9_7 = z24miu['wxdown']({ 'url': t2oixu, 'success': function (hjcr) {
          hjcr['statusCode'] === 0xc8 && z24miu['copyFile'](hjcr['tempFilePath'], z43mu2, pe6dv);
        }, 'fail': function (itzuo2) {
          pe6dv != null && pe6dv['runWith']([0x1, itzuo2]);
        } });
    }, z24miu['copyFile'] = function (bnwgyq, q_9$yw, ck8js1) {
      var nqbgfw = bnwgyq['split']('/'),
          gy9q_w = nqbgfw[nqbgfw['length'] - 0x1],
          knb = q_9$yw['split']('?')[0x0],
          e6davp = z24miu['getFileInfo'](q_9$yw),
          gnfwkb = z24miu['getFileNativePath'](gy9q_w);z24miu['fs']['copyFile']({ 'srcPath': bnwgyq, 'destPath': gnfwkb, 'success': function (ev6d) {
          if (!e6davp) z24miu['onSaveFile'](q_9$yw, gy9q_w), ck8js1 != null && ck8js1['runWith']([0x0]);else {
            if (e6davp['readyUrl'] != q_9$yw) z24miu['remove'](gy9q_w, q_9$yw, ck8js1);
          }
        }, 'fail': function ($w9qy_) {
          ck8js1 != null && ck8js1['runWith']([0x1, $w9qy_]);
        } });
    }, z24miu['getFileNativePath'] = function ($e57_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $e57_;
    }, z24miu['remove'] = function (mhrl03, f8sck, wg9_y) {
      f8sck === void 0x0 && (f8sck = '');var vae56 = z24miu['getFileInfo'](f8sck),
          tuox = z24miu['getFileNativePath'](vae56['md5']);zu4i2o['loader']['clearRes'](vae56['readyUrl']), z24miu['fs']['unlink']({ 'filePath': tuox, 'success': function (b8k) {
          if (f8sck != '') z24miu['onSaveFile'](f8sck, mhrl03);wg9_y != null && wg9_y['runWith']([0x0]);
        }, 'fail': function (c0lj1) {} });
    }, z24miu['onSaveFile'] = function (u3mzh4, jrlc01) {
      var uiz24 = u3mzh4['split']('?')[0x0];z24miu['filesListObj'][uiz24] = { 'md5': jrlc01, 'readyUrl': u3mzh4 }, z24miu['fs']['writeFile']({ 'filePath': z24miu['fileNativeDir'] + '/' + z24miu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z24miu['filesListObj']), 'success': function (y$_57) {
          console['log']('写入测试测试成功：', y$_57);
        }, 'fail': function (umz24) {
          console['log']('写入测试测试失败：', umz24);
        } });
    }, z24miu['existDir'] = function (c8k1sf, h0clj) {
      z24miu['fs']['mkdir']({ 'dirPath': c8k1sf, 'success': function (z4umh3) {
          h0clj != null && h0clj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (v6epd) {
          if (v6epd['errMsg']['indexOf']('file already exists') != -0x1) z24miu['readSync'](z24miu['fileListName'], 'utf8', h0clj);else h0clj != null && h0clj['runWith']([0x1, v6epd]);
        } });
    }, z24miu['readSync'] = function (nfwbg, peadv6, f1sc8, o2izut) {
      peadv6 === void 0x0 && (peadv6 = 'ascill'), o2izut === void 0x0 && (o2izut = '');var hl3mr = z24miu['getFileNativePath'](nfwbg),
          jrl;try {
        jrl = z24miu['fs']['readFileSync'](hl3mr), f1sc8 != null && f1sc8['runWith']([0x0, { 'data': jrl }]);
      } catch (c8j1) {
        f1sc8 != null && f1sc8['runWith']([0x1]);
      }
    }, z24miu['readCache'] = function () {}, z24miu['writeCache'] = function (nk1fs8) {
      var a$57 = readyUrl['split']('?')[0x0];z24miu['filesListObj'][a$57] = { 'md5': md5Name, 'readyUrl': readyUrl }, z24miu['fs']['writeFile']({ 'filePath': z24miu['fileNativeDir'] + '/' + z24miu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z24miu['filesListObj']), 'success': function (evd) {}, 'fail': function (hzu4) {} });
    }, z24miu['setNativeFileDir'] = function (fwnbg) {
      z24miu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fwnbg;
    }, z24miu['filesListObj'] = {}, z24miu['fileNativeDir'] = null, z24miu['fileListName'] = 'layaairfiles.txt', z24miu['ziyuFileData'] = {}, _9$e5(z24miu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), z24miu;
  }($79e),
      lj30rh = function (_e9$5) {
    function rl3m() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], rl3m['__super']['call'](this), this['_sound'] = rl3m['_createSound']();
    }ljhr3(rl3m, 'laya.wx.mini.MiniSound', _e9$5);var iuo2 = rl3m['prototype'];return iuo2['load'] = function (rh3m) {
      var yqbgw = this;rh3m = mlr43['formatURL'](rh3m), this['url'] = rh3m;if (rl3m['_audioCache'][rh3m]) {
        this['event']('complete');return;
      }function bgsfnk() {
        if (rl3m['_null'] != undefined) yqbgw['_sound']['onCanplay'](rl3m['_null']), yqbgw['_sound']['onError'](rl3m['_null']);else try {
          yqbgw['_sound']['onCanplay'](null), yqbgw['_sound']['onError'](null), rl3m['_null'] = null;
        } catch (fkngsb) {
          console['warn']('[wxmini] _clearSound:' + fkngsb), yqbgw['_sound']['onCanplay'](rc0j1), yqbgw['_sound']['onError'](rc0j1), rl3m['_null'] = rc0j1;
        }
      }function bwkgfn() {
        bgsfnk(), fknbs['loaded'] = !![], fknbs['event']('complete'), rl3m['_audioCache'][fknbs['url']] = fknbs;
      }function yq9bwg(i4u2) {
        console['error']('errCode=' + i4u2['errCode'] + '  errMsg=' + i4u2['errMsg']), bgsfnk(), fknbs['event']('error');
      }function rc0j1() {}this['_sound']['onCanplay'](bwkgfn), this['_sound']['onError'](yq9bwg), this['_sound']['src'] = rh3m;var fknbs = this;
    }, iuo2['play'] = function (ae7, rmhl30) {
      ae7 === void 0x0 && (ae7 = 0x0), rmhl30 === void 0x0 && (rmhl30 = 0x0);var y_qg9;if (this['url'] == xo2iut['_tMusic']) {
        if (!rl3m['_musicAudio']) rl3m['_musicAudio'] = rl3m['_createSound']();y_qg9 = rl3m['_musicAudio'];
      } else y_qg9 = rl3m['_createSound']();y_qg9['src'] = this['url'];var qgbwy = new uim2z4(y_qg9);return qgbwy['url'] = this['url'], qgbwy['loops'] = rmhl30, qgbwy['startTime'] = ae7, qgbwy['play'](), xo2iut['addChannel'](qgbwy), qgbwy;
    }, iuo2['dispose'] = function () {
      var ae5$_7 = rl3m['_audioCache'][this['url']];ae5$_7 && (ae5$_7['src'] = '', delete rl3m['_audioCache'][this['url']]);
    }, m3(0x0, iuo2, 'duration', function () {
      return this['_sound']['duration'];
    }), rl3m['_createSound'] = function () {
      return rl3m['_id']++, t2oxu['window']['wx']['createInnerAudioContext']();
    }, rl3m['_musicAudio'] = null, rl3m['_id'] = 0x0, rl3m['_audioCache'] = {}, rl3m['_null'] = undefined, rl3m;
  }($79e),
      uim2z4 = function (kf81ns) {
    function n8f(ks) {
      this['_audio'] = null, this['_onEnd'] = null, n8f['__super']['call'](this), this['_audio'] = ks, this['_onEnd'] = u2zito['bind'](this['__onEnd'], this), ks['onEnded'](this['_onEnd']);
    }ljhr3(n8f, 'laya.wx.mini.MiniSoundChannel', kf81ns);var ioz2tu = n8f['prototype'];return ioz2tu['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zu4i2o['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ioz2tu['__onNull'] = function () {}, ioz2tu['play'] = function () {
      this['isStopped'] = ![], xo2iut['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ioz2tu['stop'] = function () {
      this['isStopped'] = !![], xo2iut['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n8f['_null'] != undefined) this['_audio']['onEnded'](n8f['_null']);else try {
        this['_audio']['onEnded'](null), n8f['_null'] = null;
      } catch (bs8fkn) {
        console['warn']('[wxmini] stop:' + bs8fkn), this['_audio']['onEnded'](u2zito['bind'](this['__onNull'], this)), n8f['_null'] = u2zito['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ioz2tu['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ioz2tu['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xo2iut['addChannel'](this), this['_audio']['play']();
    }, m3(0x0, ioz2tu, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), m3(0x0, ioz2tu, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), m3(0x0, ioz2tu, 'volume', function () {
      return 0x1;
    }, function (dapv) {}), n8f['_null'] = undefined, n8f;
  }(zum324);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wgnbk in Laya) {
    var fwbnq = Laya[wgnbk];fwbnq && fwbnq['__isclass'] && (exports[wgnbk] = fwbnq);
  }
});