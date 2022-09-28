var H = wx.$F;
!function fmpaeu(s95ct_, g2lva, yoqd0z) {
  function s_t5c9(hw9, ju4) {
    if (!g2lva[hw9]) {
      if (!s95ct_[hw9]) {
        var m3eu8p = 'function' == typeof require && require;if (!ju4 && m3eu8p) return m3eu8p(hw9, !0x0);if (w7s) return w7s(hw9, !0x0);var elbv = new Error('Cannot find module \'' + hw9 + '\x27');throw elbv['code'] = 'MODULE_NOT_FOUND', elbv;
      }var vlagb2 = g2lva[hw9] = { 'exports': {} };s95ct_[hw9][0x0]['call'](vlagb2['exports'], function (p3ea) {
        return s_t5c9(s95ct_[hw9][0x1][p3ea] || p3ea);
      }, vlagb2, vlagb2['exports'], fmpaeu, s95ct_, g2lva, yoqd0z);
    }return g2lva[hw9]['exports'];
  }for (var w7s = 'function' == typeof require && require, jku84 = 0x0; jku84 < yoqd0z['length']; jku84++) s_t5c9(yoqd0z[jku84]);return s_t5c9;
}({ 0x1: [function (hsi, st9h_5, i1n7$6) {}, {}], 0x2: [function (sx5c_t, e2ba, $16rzn) {
    'use strict';

    var i79wh = cc['Audio'];i79wh && Object['assign'](i79wh['prototype'], { '_createElement': function () {
        var x_jk = this['_src']['_nativeAsset'];this['_element'] || (this['_element'] = __globalAdapter['createInnerAudioContext']()), this['_element']['src'] = x_jk['src'];
      }, 'destroy': function () {
        this['_element'] && (this['_element']['destroy'](), this['_element'] = null);
      }, 'setCurrentTime': function (jcx4k) {
        this['_element'] ? (this['_nextTime'] = 0x0, this['_element']['seek'](jcx4k)) : this['_nextTime'] = jcx4k;
      }, 'stop': function () {
        this['_element'] && (this['_element']['seek'](0x0), this['_element']['stop'](), this['_unbindEnded'](), this['emit']('stop'), this['_state'] = i79wh['State']['STOPPED']);
      }, '_bindEnded': function (j_4kc) {
        j_4kc = j_4kc || this['_onended'];var jxk4 = this['_element'];jxk4 && jxk4['onEnded'] && jxk4['onEnded'](j_4kc);
      }, '_unbindEnded': function () {
        var jx4kc_ = this['_element'];jx4kc_ && jx4kc_['offEnded'] && jx4kc_['offEnded']();
      }, '_touchToPlay': function () {}, '_forceUpdatingState': function () {} });
  }, {}], 0x3: [function (rzqo, jxck, c_tkx) {
    'use strict';

    cc && cc['audioEngine'] && (cc['audioEngine']['_maxAudioInstance'] = 0xa);
  }, {}], 0x4: [function (wsiht, a2elb, kc_4jx) {
    'use strict';

    var r71n = cc['internal']['inputManager'],
        ckxt = window['__globalAdapter'];Object['assign'](r71n, { 'setAccelerometerEnabled': function (_9sc5) {
        var s9t_c = cc['director']['getScheduler']();s9t_c['enableForTarget'](this), _9sc5 ? (this['_registerAccelerometerEvent'](), s9t_c['scheduleUpdate'](this)) : (this['_unregisterAccelerometerEvent'](), s9t_c['unscheduleUpdate'](this));
      }, '_registerAccelerometerEvent': function () {
        this['_accelCurTime'] = 0x0;var lv2eb = this;this['_acceleration'] = new cc['Acceleration'](), ckxt['startAccelerometer'](function (meb2al) {
          lv2eb['_acceleration']['x'] = meb2al['x'], lv2eb['_acceleration']['y'] = meb2al['y'], lv2eb['_acceleration']['z'] = meb2al['y'];
        });
      }, '_unregisterAccelerometerEvent': function () {
        this['_accelCurTime'] = 0x0, ckxt['stopAccelerometer']();
      } });
  }, {}], 0x5: [function (_t5sx, mble2, hi71w) {
    'use strict';

    !function () {
      if (cc && cc['EditBox']) {
        var $7r6 = cc['EditBox'],
            wis = cc['js'],
            $7ih = $7r6['KeyboardReturnType'],
            swih97 = null,
            ebav2 = $7r6['_ImplClass'];wis['extend'](nz610r, ebav2), $7r6['_ImplClass'] = nz610r, Object['assign'](nz610r['prototype'], { 'init': function (jk4_x) {
            jk4_x ? this['_delegate'] = jk4_x : cc['error']('EditBox init failed');
          }, 'beginEditing': function () {
            if (swih97 !== this) {
              var odyz0 = this['_delegate'];if (swih97) swih97['_eventListeners']['onKeyboardComplete'](), __globalAdapter['updateKeyboard'] && __globalAdapter['updateKeyboard']({ 'value': odyz0['_string'] });else this['_showKeyboard']();this['_registerKeyboardEvent'](), this['_editing'] = !0x0, swih97 = this, odyz0['editBoxEditingDidBegan']();
            }
          }, 'endEditing': function () {
            this['_hideKeyboard']();var _tc5xs = this['_eventListeners'];_tc5xs['onKeyboardComplete'] && _tc5xs['onKeyboardComplete']();
          }, '_registerKeyboardEvent': function () {
            var bm2ap = this,
                c5_ = this['_delegate'],
                xck84j = this['_eventListeners'];xck84j['onKeyboardInput'] = function (h97$) {
              c5_['_string'] !== h97$['value'] && c5_['editBoxTextChanged'](h97$['value']);
            }, xck84j['onKeyboardConfirm'] = function (xc_jk4) {
              c5_['editBoxEditingReturn']();var wh97$ = bm2ap['_eventListeners'];wh97$['onKeyboardComplete'] && wh97$['onKeyboardComplete']();
            }, xck84j['onKeyboardComplete'] = function () {
              bm2ap['_editing'] = !0x1, swih97 = null, bm2ap['_unregisterKeyboardEvent'](), c5_['editBoxEditingDidEnded']();
            }, __globalAdapter['onKeyboardInput'](xck84j['onKeyboardInput']), __globalAdapter['onKeyboardConfirm'](xck84j['onKeyboardConfirm']), __globalAdapter['onKeyboardComplete'](xck84j['onKeyboardComplete']);
          }, '_unregisterKeyboardEvent': function () {
            var ael2mb = this['_eventListeners'];ael2mb['onKeyboardInput'] && (__globalAdapter['offKeyboardInput'](ael2mb['onKeyboardInput']), ael2mb['onKeyboardInput'] = null), ael2mb['onKeyboardConfirm'] && (__globalAdapter['offKeyboardConfirm'](ael2mb['onKeyboardConfirm']), ael2mb['onKeyboardConfirm'] = null), ael2mb['onKeyboardComplete'] && (__globalAdapter['offKeyboardComplete'](ael2mb['onKeyboardComplete']), ael2mb['onKeyboardComplete'] = null);
          }, '_showKeyboard': function () {
            var xc_s5 = this['_delegate'],
                le2bma = xc_s5['inputMode'] === $7r6['InputMode']['ANY'],
                u3e8p = xc_s5['maxLength'] < 0x0 ? 0xffff : xc_s5['maxLength'];__globalAdapter['showKeyboard']({ 'defaultValue': xc_s5['_string'], 'maxLength': u3e8p, 'multiple': le2bma, 'confirmHold': !0x1, 'confirmType': function (xts_5c) {
                switch (xts_5c) {case $7ih['DEFAULT']:case $7ih['DONE']:
                    return 'done';case $7ih['SEND']:
                    return 'send';case $7ih['SEARCH']:
                    return 'search';case $7ih['GO']:
                    return 'go';case $7ih['NEXT']:
                    return 'next';}return 'done';
              }(xc_s5['returnType']), 'success': function () {}, 'fail': function (p8eu) {
                cc['warn'](p8eu['errMsg']);
              } });
          }, '_hideKeyboard': function () {
            __globalAdapter['hideKeyboard']({ 'success': function () {}, 'fail': function (i$71n6) {
                cc['warn'](i$71n6['errMsg']);
              } });
          } });
      }function nz610r() {
        ebav2['call'](this), this['_eventListeners'] = { 'onKeyboardInput': null, 'onKeyboardConfirm': null, 'onKeyboardComplete': null };
      }
    }();
  }, {}], 0x6: [function ($hwi17, e2, pju84) {
    'use strict';

    var kx45c_ = cc['internal']['inputManager'],
        x5_kct = cc['renderer'],
        e3aupm = cc['game'],
        ni$w1 = cc['dynamicAtlasManager'];Object['assign'](e3aupm, { 'setFrameRate': function (wis79h) {
        this['config']['frameRate'] = wis79h, __globalAdapter['setPreferredFramesPerSecond'] ? __globalAdapter['setPreferredFramesPerSecond'](wis79h) : (this['_intervalId'] && window['cancelAnimFrame'](this['_intervalId']), this['_intervalId'] = 0x0, this['_paused'] = !0x0, this['_setAnimFrame'](), this['_runMainLoop']());
      }, '_runMainLoop': function () {
        var ump83e,
            rz61n = this,
            _5xk4c = rz61n['config'],
            b2aelv = cc['director'],
            ux4k = !0x0,
            k8j4cx = _5xk4c['frameRate'];cc['debug']['setDisplayStats'](_5xk4c['showFPS']), ump83e = function () {
          if (!rz61n['_paused']) {
            if (rz61n['_intervalId'] = window['requestAnimFrame'](ump83e), 0x1e === k8j4cx && !__globalAdapter['setPreferredFramesPerSecond'] && (ux4k = !ux4k)) return;b2aelv['mainLoop']();
          }
        }, rz61n['_intervalId'] = window['requestAnimFrame'](ump83e), rz61n['_paused'] = !0x1;
      }, '_initRenderer': function () {
        if (!this['_rendererInitialized']) {
          var nq0r;if (this['frame'] = this['container'] = document['createElement']('DIV'), nq0r = __globalAdapter['isSubContext'] ? window['sharedCanvas'] || __globalAdapter['getSharedCanvas']() : canvas, this['canvas'] = nq0r, this['_determineRenderType'](), this['renderType'] === this['RENDER_TYPE_WEBGL']) {
            var u3j4p = { 'stencil': !0x0, 'antialias': cc['macro']['ENABLE_WEBGL_ANTIALIAS'], 'alpha': cc['macro']['ENABLE_TRANSPARENT_CANVAS'], 'preserveDrawingBuffer': !0x1 };x5_kct['initWebGL'](nq0r, u3j4p), this['_renderContext'] = x5_kct['device']['_gl'], !cc['macro']['CLEANUP_IMAGE_CACHE'] && ni$w1 && (ni$w1['enabled'] = !0x0);
          }this['_renderContext'] || (this['renderType'] = this['RENDER_TYPE_CANVAS'], x5_kct['initCanvas'](nq0r), this['_renderContext'] = x5_kct['device']['_ctx']), this['_rendererInitialized'] = !0x0;
        }
      }, '_initEvents': function () {
        this['config']['registerSystemEvent'] && kx45c_['registerSystemEvent'](this['canvas']);var swih9 = !0x1;__globalAdapter['onShow'] && __globalAdapter['onShow'](function ($w9i7h) {
          swih9 && (swih9 = !0x1, e3aupm['emit'](e3aupm['EVENT_SHOW'], $w9i7h));
        }), __globalAdapter['onHide'] && __globalAdapter['onHide'](function () {
          swih9 || (swih9 = !0x0, e3aupm['emit'](e3aupm['EVENT_HIDE']));
        }), this['on'](e3aupm['EVENT_HIDE'], function () {
          e3aupm['pause']();
        }), this['on'](e3aupm['EVENT_SHOW'], function () {
          e3aupm['resume']();
        });
      }, 'end': function () {} }), __globalAdapter['onError'] && __globalAdapter['onError'](function zoy0dq(mau3) {
      __globalAdapter['offError'] && __globalAdapter['offError'](zoy0dq);var ckx_ = Math['random']() < 0.001;if (!__globalAdapter['isSubContext'] && ckx_) {
        var abmel = __globalAdapter['getSystemInfoSync']();if (abmel) {
          var q06ro = cc['Canvas']['instance']['node'];if (q06ro) {
            var iw71$ = new cc['Node']();iw71$['color'] = cc['Color']['BLACK'], iw71$['parent'] = q06ro;var u3m = iw71$['addComponent'](cc['Label']);iw71$['height'] = q06ro['height'] - 0x3c, iw71$['width'] = q06ro['width'] - 0x3c, u3m['overflow'] = cc['Label']['Overflow']['SHRINK'], u3m['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'], u3m['verticalAlign'] = cc['Label']['VerticalAlign']['TOP'], u3m['fontSize'] = 0x18, cc['LabelOutline'] && (iw71$['addComponent'](cc['LabelOutline'])['color'] = cc['Color']['WHITE']), u3m['string'] = '请截屏发送以下信息反馈给游戏开发者\uFF08Please send this screen shot to the game developer\uFF09\n', u3m['string'] += 'Device: ' + abmel['brand'] + '\x20' + abmel['model'] + '\nSystem: ' + abmel['system'] + '\nPlatform: WeChat ' + abmel['version'] + '\nEngine: Cocos Creator v' + window['CocosEngine'] + '\nError:\n' + mau3['message'], cc['director']['pause'](), iw71$['once']('touchend', function () {
              iw71$['destroy'](), setTimeout(function () {
                cc['director']['resume']();
              }, 0x3e8);
            });
          }
        }
      }
    });
  }, {}], 0x7: [function (lae2vb, i7$w9, kx5c4_) {
    'use strict';

    var mbeap2 = cc['internal']['inputManager'],
        pbema2 = { 'left': 0x0, 'top': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };mbeap2 && Object['assign'](mbeap2, { '_updateCanvasBoundingRect': function () {}, 'registerSystemEvent': function () {
        if (!this['_isRegisterEvent']) {
          this['_glView'] = cc['view'];var xkc4j = this,
              yd0ozq = { 'onTouchStart': this['handleTouchesBegin'], 'onTouchMove': this['handleTouchesMove'], 'onTouchEnd': this['handleTouchesEnd'], 'onTouchCancel': this['handleTouchesCancel'] },
              s59twh = function (k8cjx) {
            var pa2bme = yd0ozq[k8cjx];__globalAdapter[k8cjx](function (n1$6r) {
              n1$6r['changedTouches'] && pa2bme['call'](xkc4j, xkc4j['getTouchesByEvent'](n1$6r, pbema2));
            });
          };for (var ck_xt in yd0ozq) s59twh(ck_xt);this['_isRegisterEvent'] = !0x0;
        }
      } });
  }, {}], 0x8: [function (c_s59, gval, ts5c_x) {
    'use strict';

    function zr0dqo(i7$w1) {
      var _tck = i7$w1['url'];return __globalAdapter['loadFont'](_tck) || 'Arial';
    }function ap3m(eampb) {
      if (eampb['_owner'] instanceof cc['Asset']) return null;var dr0q = eampb['content'],
          h97$w = eampb['rawUrl'],
          l2vga = eampb['texture'] || new cc['Texture2D']();return l2vga['_uuid'] = eampb['uuid'], l2vga['url'] = h97$w, l2vga['_setRawAsset'](h97$w, !0x1), l2vga['_nativeAsset'] = dr0q, l2vga;
    }function mela(h$wi7, evbl2a, ts95) {
      void 0x0 === ts95 && (ts95 = !0x0);var pma3u = h$wi7['url'],
          kcx54_ = new Image();function m3ea() {
        kcx54_['removeEventListener']('load', m3ea), kcx54_['removeEventListener']('error', $hi7w9), kcx54_['id'] = h$wi7['id'], evbl2a(null, kcx54_);
      }function $hi7w9() {
        kcx54_['removeEventListener']('load', m3ea), kcx54_['removeEventListener']('error', $hi7w9), 'https:' !== window['location']['protocol'] && kcx54_['crossOrigin'] && 'anonymous' === kcx54_['crossOrigin']['toLowerCase']() ? mela(h$wi7, evbl2a, !0x1) : evbl2a(new Error(cc['debug']['getError'](0x1342, pma3u)));
      }ts95 && 'file:' !== window['location']['protocol'] ? kcx54_['crossOrigin'] = 'anonymous' : kcx54_['crossOrigin'] = null, kcx54_['addEventListener']('load', m3ea), kcx54_['addEventListener']('error', $hi7w9), kcx54_['src'] = pma3u;
    }function qz0nr(ih9stw, u8j3p) {
      if (0x0 === cc['sys']['__audioSupport']['format']['length']) return new Error(cc['debug']['getError'](0x133f));var xck_45 = document['createElement']('audio');xck_45['src'] = ih9stw['url'], u8j3p(null, xck_45);
    }function wi17n(ct_k, i1n$w7) {
      i1n$w7(null, ct_k['url']);
    }function lmb2ea(z01r6n, w17h$) {
      w17h$(null, z01r6n['url']);
    }cc['loader']['downloader']['loadSubpackage'] = function (mepb3, p8ume3, c4_jxk) {
      !c4_jxk && p8ume3 && (c4_jxk = p8ume3, p8ume3 = null);var g2va = __globalAdapter['loadSubpackage']({ 'name': mepb3, 'success': function () {
          c4_jxk && c4_jxk();
        }, 'fail': function () {
          c4_jxk && c4_jxk(new Error('Failed to load subpackage '['concat'](mepb3)));
        } });p8ume3 && g2va['onProgressUpdate'](p8ume3);
    }, cc['loader']['downloader']['addHandlers']({ 'js': function (bm2ep, i7ws9, abev) {
        __cocos_require__(bm2ep['url']), i7ws9(null, bm2ep['url']);
      }, 'png': mela, 'jpg': mela, 'bmp': mela, 'jpeg': mela, 'gif': mela, 'ico': mela, 'tiff': mela, 'webp': mela, 'image': mela, 'mp3': qz0nr, 'ogg': qz0nr, 'wav': qz0nr, 'm4a': qz0nr, 'mp4': wi17n, 'avi': wi17n, 'mov': wi17n, 'mpg': wi17n, 'mpeg': wi17n, 'rm': wi17n, 'rmvb': wi17n }), cc['loader']['loader']['addHandlers']({ 'mp4': lmb2ea, 'avi': lmb2ea, 'mov': lmb2ea, 'mpg': lmb2ea, 'mpeg': lmb2ea, 'rm': lmb2ea, 'rmvb': lmb2ea, 'png': ap3m, 'jpg': ap3m, 'bmp': ap3m, 'jpeg': ap3m, 'gif': ap3m, 'ico': ap3m, 'tiff': ap3m, 'webp': ap3m, 'image': ap3m, 'font': zr0dqo, 'eot': zr0dqo, 'ttf': zr0dqo, 'woff': zr0dqo, 'svg': zr0dqo, 'ttc': zr0dqo });
  }, {}], 0x9: [function (lev2, $i7w9, $wi7) {
    'use strict';

    Object['assign'](cc['screen'], { 'autoFullScreen': function () {} });
  }, {}], 0xa: [function (st_9, siht9, amlb2e) {
    'use strict';

    var r0z6qo = cc['Texture2D'];r0z6qo && Object['assign'](r0z6qo['prototype'], { 'initWithElement': function (evab2) {
        evab2 && (this['_image'] = evab2, this['handleLoadedTexture']());
      } });
  }, {}], 0xb: [function (_ts5xc, $71niw, tc5s_) {
    'use strict';

    $71niw['exports'] = function (t9wihs, ihw7$9) {
      ihw7$9 = ihw7$9 || __globalAdapter['getSystemInfoSync'](), t9wihs['isNative'] = !0x1, t9wihs['isBrowser'] = !0x1, t9wihs['isMobile'] = !0x0, t9wihs['language'] = ihw7$9['language']['substr'](0x0, 0x2), t9wihs['languageCode'] = ihw7$9['language']['toLowerCase']();var x8uj4 = ihw7$9['system']['toLowerCase'](),
          a2ebpm = ihw7$9['platform'];'android' === (a2ebpm = a2ebpm['toLowerCase']()) ? t9wihs['os'] = t9wihs['OS_ANDROID'] : 'ios' === a2ebpm && (t9wihs['os'] = t9wihs['OS_IOS']), 'android p' === x8uj4 && (x8uj4 = 'android p 9.0');var b2meap = /[\d\.]+/['exec'](x8uj4);t9wihs['osVersion'] = b2meap ? b2meap[0x0] : x8uj4, t9wihs['osMainVersion'] = parseInt(t9wihs['osVersion']), t9wihs['browserVersion'] = ihw7$9['version'];var mju38p = ihw7$9['windowWidth'],
          a2ml = ihw7$9['windowHeight'],
          sith9 = ihw7$9['pixelRatio'] || 0x1;t9wihs['windowPixelResolution'] = { 'width': sith9 * mju38p, 'height': sith9 * a2ml }, t9wihs['localStorage'] = window['localStorage'];var w5st = !0x1,
          i9w7s = !0x1;try {
        var tkx5 = document['createElement']('canvas');w5st = tkx5['getContext']('webgl'), i9w7s = tkx5['toDataURL']('image/webp')['startsWith']('data:image/webp');
      } catch (n6$r) {}t9wihs['capabilities'] = { 'canvas': !0x0, 'opengl': !!w5st, 'webp': i9w7s }, t9wihs['__audioSupport'] = { 'ONLY_ONE': !0x1, 'WEB_AUDIO': !0x1, 'DELAY_CREATE_CTX': !0x1, 'format': ['.mp3'] };
    };
  }, {}], 0xc: [function (e3bmpa, o0zdy, $i9wh) {
    'use strict';

    o0zdy['exports'] = function (qd0zo) {
      qd0zo['_setupContainer'] = function (ydz0q, i7n61$, ujk438) {
        var wth59s = cc['game']['canvas'],
            p2abem = ydz0q['_devicePixelRatio'] = 0x1;ydz0q['isRetinaEnabled']() && (p2abem = ydz0q['_devicePixelRatio'] = Math['min'](ydz0q['_maxPixelRatio'], window['devicePixelRatio'] || 0x1)), i7n61$ *= p2abem, ujk438 *= p2abem, wth59s['width'] === i7n61$ && wth59s['height'] === ujk438 || (wth59s['width'] = i7n61$, wth59s['height'] = ujk438);
      };
    };
  }, {}], 0xd: [function (th9ws, ma3pue, $6rnz1) {
    'use strict';

    ma3pue['exports'] = function (lbe2m) {
      Object['assign'](lbe2m, { '_adjustViewportMeta': function () {}, 'setRealPixelResolution': function (s9_th, g2avl, c8k4jx) {
          this['setDesignResolutionSize'](s9_th, g2avl, c8k4jx);
        }, 'enableAutoFullScreen': function () {
          cc['warn']('cc.view.enableAutoFullScreen() is not supported on minigame platform.');
        }, 'isAutoFullScreenEnabled': function () {
          return !0x1;
        }, 'setCanvasSize': function () {
          cc['warn']('cc.view.setCanvasSize() is not supported on minigame platform.');
        }, 'setFrameSize': function () {
          cc['warn']('frame size is readonly on minigame platform.');
        }, '_initFrameSize': function () {
          var aembl2 = this['_frameSize'];if (__globalAdapter['isSubContext']) {
            var avgb2 = window['sharedCanvas'] || __globalAdapter['getSharedCanvas']();aembl2['width'] = avgb2['width'], aembl2['height'] = avgb2['height'];
          } else aembl2['width'] = window['innerWidth'], aembl2['height'] = window['innerHeight'];
        } });
    };
  }, {}], 0xe: [function (dzorq, eb2lm, rzdo) {
    'use strict';

    var up8em = window['__globalAdapter'];Object['assign'](up8em, { 'adaptSys': dzorq('./BaseSystemInfo'), 'adaptView': dzorq('./View'), 'adaptContainerStrategy': dzorq('./ContainerStrategy') });
  }, { './BaseSystemInfo': 0xb, './ContainerStrategy': 0xc, './View': 0xd }], 0xf: [function (h$w9i7, x_45ck, ku48xj) {
    'use strict';

    h$w9i7('./Audio'), h$w9i7('./AudioEngine'), h$w9i7('./DeviceMotionEvent'), h$w9i7('./Editbox'), h$w9i7('./Game'), h$w9i7('./InputManager'), h$w9i7('./Loader'), h$w9i7('./Screen'), h$w9i7('./Texture2D'), h$w9i7('./misc');
  }, { './Audio': 0x2, './AudioEngine': 0x3, './DeviceMotionEvent': 0x4, './Editbox': 0x5, './Game': 0x6, './InputManager': 0x7, './Loader': 0x8, './Screen': 0x9, './Texture2D': 0xa, './misc': 0x10 }], 0x10: [function (nr6$z1, cx_45, $9wi7h) {
    'use strict';

    cc['macro']['DOWNLOAD_MAX_CONCURRENT'] = 0xa;
  }, {}], 0x11: [function (nr160, tw5h9s, em3ab) {
    'use strict';

    var mbl2a = 'RemoteDownloader',
        x5c_st = window['fsUtils'],
        _c59 = /^\w+:\/\/.*/,
        eba2m = __globalAdapter['isSubContext'],
        qor06 = null,
        k4xuj8 = null,
        ema3pb = null,
        ebpma = null,
        xtc_5s = !0x1,
        q0yodz = /the maximum size of the file storage/,
        yzd0q = {};function ni6$7() {
      this['id'] = mbl2a, this['async'] = !0x0, this['pipeline'] = null, this['REMOTE_SERVER_ROOT'] = '', this['SUBCONTEXT_ROOT'] = '';
    }function $wn1i(ts9_, maep3u) {
      !ts9_['type'] || n$167r(ts9_['type']) >= h_9s5t['LOADABLE_MIN'] ? function (i7$, z6qor) {
        var ealb = i7$['url'],
            _sx5 = x5c_st['readText'];n$167r(i7$['type']) === h_9s5t['BIN'] && (_sx5 = x5c_st['readArrayBuffer']);var ydoq0z = _sx5(ealb, function (bl2g, xj8kc) {
          bl2g ? z6qor(bl2g) : xj8kc ? (i7$['states'][cc['loader']['downloader']['id']] = cc['Pipeline']['ItemState']['COMPLETE'], z6qor(null, xj8kc)) : z6qor(new Error('Empty file: ' + ealb));
        });ydoq0z && z6qor(ydoq0z);
      }(ts9_, maep3u) : maep3u(null, null);
    }ni6$7['ID'] = mbl2a, ni6$7['prototype']['init'] = function () {
      if (!eba2m) {
        this['cacheDir'] = x5c_st['getUserDataPath']() + '/gamecaches', this['cachedFileName'] = 'cacheList.json', this['cacheAsset'] = !0x0, this['cachePeriod'] = 0x1f4, this['outOfStorage'] = !0x1, this['writeFilePeriod'] = 0x7d0, ebpma = {}, qor06 = {};var k3uj = this['cacheDir'] + '/' + this['cachedFileName'];(k4xuj8 = x5c_st['readJsonSync'](k3uj)) instanceof Error && (k4xuj8 = {}, x5c_st['makeDirSync'](this['cacheDir'], !0x0), x5c_st['writeFileSync'](k3uj, JSON['stringify'](k4xuj8), 'utf8'));
      }
    }, ni6$7['prototype']['handle'] = function (mepb2a, beapm) {
      if ('js' === mepb2a['type']) return null;if ('uuid' === mepb2a['type']) {
        var n71w$i = cc['Pipeline']['Downloader']['PackDownloader']['load'](mepb2a, beapm);if (void 0x0 !== n71w$i) return n71w$i || void 0x0;
      }if (eba2m) return _c59['test'](mepb2a['url']) ? null : (mepb2a['url'] = this['SUBCONTEXT_ROOT'] + '/' + mepb2a['url'], x5c_st['checkFsValid']() ? null : void $wn1i(mepb2a, beapm));!function (mp38uj, s9twh) {
        var u3ep8 = x5c_st['checkFsValid']();if (u3ep8) return s9twh(u3ep8);var shw5 = w9hs5t['getCacheName'](mp38uj['url']);if (shw5 in k4xuj8) yzd0q[shw5] = !0x0, mp38uj['url'] = w9hs5t['cacheDir'] + '/' + shw5, $ni17(mp38uj, shw5), $wn1i(mp38uj, s9twh);else {
          var s_59tc = function (o6rqz) {
            if (o6rqz) $wn1i(mp38uj, s9twh);else {
              if (!w9hs5t['REMOTE_SERVER_ROOT']) return void s9twh(null, null);!function ($7ni, c_t9) {
                var zr106n = $7ni['url'];if (_c59['test'](zr106n)) return c_t9(null, null);var vbag2 = w9hs5t['REMOTE_SERVER_ROOT'] + '/' + zr106n;$7ni['url'] = vbag2;var xk4cj_ = w9hs5t['getCacheName'](zr106n);cc['sys']['os'] === cc['sys']['OS_ANDROID'] && $7ni['type'] && n$167r($7ni['type']) === h_9s5t['IMAGE'] ? (w9hs5t['cacheAsset'] && (avlgb(vbag2, !0x1, xk4cj_), $ni17($7ni, xk4cj_)), c_t9(null, null)) : x5c_st['downloadFile'](vbag2, void 0x0, function (jk_xc4, peam) {
                  jk_xc4 ? c_t9(jk_xc4, null) : ($7ni['url'] = peam, w9hs5t['cacheAsset'] && (avlgb(peam, !0x0, xk4cj_), $ni17($7ni, xk4cj_)), $wn1i($7ni, c_t9));
                });
              }(mp38uj, s9twh);
            }
          };mp38uj['url'] in qor06 ? s_59tc(qor06[mp38uj['url']]) : x5c_st['exists'](mp38uj['url'], function (_xkj) {
            qor06[mp38uj['url']] = _xkj, s_59tc(_xkj);
          });
        }
      }(mepb2a, beapm);
    }, ni6$7['prototype']['cleanOldAssets'] = function () {
      return cc['warn']('remoteDownloader.cleanOldAssets has been deprecated, please use remoteDownloader.cleanOldCaches instead!'), this['cleanOldCaches']();
    }, ni6$7['prototype']['cleanOldCaches'] = function () {
      this['cleanAllCaches'](yzd0q, function (x_c54k) {
        if (x_c54k) cc['warn'](x_c54k);else {
          for (var m8ju3p in yzd0q) cc['log']('reserve local file: ' + m8ju3p);cc['log']('Clean old Assets successfully!');
        }
      });
    }, ni6$7['prototype']['getCacheName'] = function (h9t5sw) {
      return h9t5sw['replace'](/\//g, '-');
    }, ni6$7['prototype']['getCachedFileList'] = function () {
      return k4xuj8;
    }, ni6$7['prototype']['cleanCache'] = function (au3pem) {
      if (au3pem in k4xuj8) {
        var kxu8j = this;delete k4xuj8[au3pem], bap2m(function () {
          au3pem in k4xuj8 || x5c_st['deleteFile'](kxu8j['cacheDir'] + '/' + au3pem, function (m2leab) {
            m2leab || (kxu8j['outOfStorage'] = !0x1);
          });
        });
      }
    }, ni6$7['prototype']['cleanAllAssets'] = function () {
      cc['warn']('remoteDownloader.cleanAllAssets has been deprecated, please use cleanAllCaches instead!'), this['cleanAllCaches'](null, function (n0z6r) {
        n0z6r && cc['error'](n0z6r['message']);
      });
    }, ni6$7['prototype']['cleanAllCaches'] = function (uep8, ue83m) {
      uep8 = uep8 || {};var s9ht_ = this,
          ju84 = x5c_st['readDir'](s9ht_['cacheDir'], function (dozy0, k_5tcx) {
        if (dozy0) ue83m && ue83m(dozy0);else {
          for (var h$w97i = [], ep2abm = 0x0, zqy0do = k_5tcx['length']; ep2abm < zqy0do; ep2abm++) {
            var xc_4jk = k_5tcx[ep2abm];xc_4jk !== s9ht_['cachedFileName'] && (xc_4jk in uep8 || (xc_4jk in ebpma ? delete ebpma[xc_4jk] : (delete k4xuj8[xc_4jk], h$w97i['push'](xc_4jk))));
          }bap2m(function () {
            for (var xku4 = 0x0, vla2g = 0x0, aempb3 = h$w97i['length']; vla2g < aempb3; vla2g++) h$w97i[vla2g] in k4xuj8 ? ++xku4 === aempb3 && (s9ht_['outOfStorage'] = !0x1, ue83m && ue83m(null)) : x5c_st['deleteFile'](s9ht_['cacheDir'] + '/' + h$w97i[vla2g], function (ktc5_x) {
              ++xku4 === aempb3 && (s9ht_['outOfStorage'] = !0x1, ue83m && ue83m(null));
            });
          });
        }
      });ju84 && ue83m(ju84);
    };var w9hs5t = window['remoteDownloader'] = new ni6$7();function $ni17(h_st95, rdz0qo) {
      cc['LoadingItems']['getQueue'](h_st95)['addListener'](h_st95['id'], function (n1$6i7) {
        n1$6i7['error'] && (n1$6i7['url'] in ebpma ? delete ebpma[n1$6i7['url']] : w9hs5t['cleanCache'](rdz0qo));
      });
    }function avlgb(or0zq, xs5_t, _x5ts) {
      (ebpma[or0zq] = { 'isCopy': xs5_t, 'cachePath': _x5ts }, !xtc_5s) && (xtc_5s = !0x0, setTimeout(function zydq() {
        for (var $16nr7 in ebpma) {
          if (w9hs5t['outOfStorage']) xtc_5s = !0x1;else {
            var apmbe = ebpma[$16nr7],
                t_kc = w9hs5t['cacheDir'] + '/' + apmbe['cachePath'],
                n1z$ = x5c_st['copyFile'];apmbe['isCopy'] || (n1z$ = x5c_st['downloadFile']), n1z$($16nr7, t_kc, function (hwi$17) {
              if (xtc_5s = !0x1, hwi$17) {
                if (q0yodz['test'](hwi$17['message'])) return void (w9hs5t['outOfStorage'] = !0x0);
              } else k4xuj8[apmbe['cachePath']] = 0x1, delete ebpma[$16nr7], bap2m();cc['js']['isEmptyObject'](ebpma) || (xtc_5s = !0x0, setTimeout(zydq, w9hs5t['cachePeriod']));
            });
          }return;
        }xtc_5s = !0x1;
      }, w9hs5t['cachePeriod']));
    }var valg2b = [],
        kxj4u8 = [],
        dqz0or = !0x1;function bap2m($7w1hi) {
      ema3pb ? $7w1hi && valg2b['push']($7w1hi) : (ema3pb = setTimeout(function () {
        dqz0or = !(ema3pb = null), x5c_st['writeFile'](w9hs5t['cacheDir'] + '/' + w9hs5t['cachedFileName'], JSON['stringify'](k4xuj8), 'utf8', function () {
          dqz0or = !0x1;for (var jk83u = 0x0, pmu3a = valg2b['length']; jk83u < pmu3a; jk83u++) valg2b[jk83u]();valg2b['length'] = 0x0, valg2b['push']['apply'](valg2b, kxj4u8), kxj4u8['length'] = 0x0;
        });
      }, w9hs5t['writeFilePeriod']), !0x0 === dqz0or ? $7w1hi && kxj4u8['push']($7w1hi) : $7w1hi && valg2b['push']($7w1hi));
    }function n$167r(qo0r6z) {
      return k4j8cx[qo0r6z] || h_9s5t['DEFAULT'];
    }var h_9s5t = { 'IMAGE': 0x1, 'FONT': 0x2, 'AUDIO': 0x3, 'SCRIPT': 0x4, 'VIDEO': 0x5, 'TEXT': 0x6, 'BIN': 0x7, 'DEFAULT': 0x8, 'LOADABLE_MIN': 0x6 },
        k4j8cx = { 'js': h_9s5t['SCRIPT'], 'png': h_9s5t['IMAGE'], 'jpg': h_9s5t['IMAGE'], 'bmp': h_9s5t['IMAGE'], 'jpeg': h_9s5t['IMAGE'], 'gif': h_9s5t['IMAGE'], 'ico': h_9s5t['IMAGE'], 'tiff': h_9s5t['IMAGE'], 'webp': h_9s5t['IMAGE'], 'image': h_9s5t['IMAGE'], 'mp3': h_9s5t['AUDIO'], 'ogg': h_9s5t['AUDIO'], 'wav': h_9s5t['AUDIO'], 'm4a': h_9s5t['AUDIO'], 'mp4': h_9s5t['VIDEO'], 'avi': h_9s5t['VIDEO'], 'mov': h_9s5t['VIDEO'], 'mpg': h_9s5t['VIDEO'], 'mpeg': h_9s5t['VIDEO'], 'rm': h_9s5t['VIDEO'], 'rmvb': h_9s5t['VIDEO'], 'txt': h_9s5t['TEXT'], 'xml': h_9s5t['TEXT'], 'vsh': h_9s5t['TEXT'], 'fsh': h_9s5t['TEXT'], 'atlas': h_9s5t['TEXT'], 'tmx': h_9s5t['TEXT'], 'tsx': h_9s5t['TEXT'], 'json': h_9s5t['TEXT'], 'ExportJson': h_9s5t['TEXT'], 'plist': h_9s5t['TEXT'], 'fnt': h_9s5t['TEXT'], 'font': h_9s5t['FONT'], 'eot': h_9s5t['FONT'], 'ttf': h_9s5t['FONT'], 'woff': h_9s5t['FONT'], 'svg': h_9s5t['FONT'], 'ttc': h_9s5t['FONT'], 'binary': h_9s5t['BIN'], 'dbbin': h_9s5t['BIN'], 'skel': h_9s5t['BIN'], 'bin': h_9s5t['BIN'], 'pvr': h_9s5t['BIN'], 'pkm': h_9s5t['BIN'] };
  }, {}], 0x12: [function (hist9, cjk8x, h$wi17) {
    'use strict';

    cjk8x['exports'] = { 'cloneMethod': function (n$rz61, zodq0r, _5c4x, nr$7) {
        zodq0r[_5c4x] && (n$rz61[nr$7 = nr$7 || _5c4x] = zodq0r[_5c4x]['bind'](zodq0r));
      } };
  }, {}], 0x13: [function (qrn06z, s9ht5, nr7$6) {
    'use strict';

    function nz6r01(s59wh) {
      this['options'] = s59wh || { 'locator': {} };
    }function n1wi7() {
      this['cdata'] = !0x1;
    }function jp8u3(emu83, ju384) {
      ju384['lineNumber'] = emu83['lineNumber'], ju384['columnNumber'] = emu83['columnNumber'];
    }function q06zro(z0doyq) {
      if (z0doyq) return '\x0a@' + (z0doyq['systemId'] || '') + '#[line:' + z0doyq['lineNumber'] + ',col:' + z0doyq['columnNumber'] + ']';
    }function e3pm8(x_ckj, i7sh9w, $in76) {
      return 'string' == typeof x_ckj ? x_ckj['substr'](i7sh9w, $in76) : x_ckj['length'] >= i7sh9w + $in76 || i7sh9w ? new java['lang']['String'](x_ckj, i7sh9w, $in76) + '' : x_ckj;
    }function j4x8(tcx5_k, e3mua) {
      tcx5_k['currentElement'] ? tcx5_k['currentElement']['appendChild'](e3mua) : tcx5_k['doc']['appendChild'](e3mua);
    }nz6r01['prototype']['parseFromString'] = function (oz0qdy, p3u48) {
      var _csxt5 = this['options'],
          qr6nz0 = new i1n7(),
          xj48c = _csxt5['domBuilder'] || new n1wi7(),
          aupem3 = _csxt5['errorHandler'],
          bemp = _csxt5['locator'],
          $7i9h = _csxt5['xmlns'] || {},
          t5cxk = /\/x?html?$/['test'](p3u48),
          mae2b = t5cxk ? n6rz['entityMap'] : { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bemp && xj48c['setDocumentLocator'](bemp), qr6nz0['errorHandler'] = function (x84ck, $671ni, kx_c45) {
        if (!x84ck) {
          if ($671ni instanceof n1wi7) return $671ni;x84ck = $671ni;
        }var yzqdo0 = {},
            r$1n67 = x84ck instanceof Function;function abmep(zn1$6r) {
          var jx4_ck = x84ck[zn1$6r];!jx4_ck && r$1n67 && (jx4_ck = 0x2 == x84ck['length'] ? function (uea3m) {
            x84ck(zn1$6r, uea3m);
          } : x84ck), yzqdo0[zn1$6r] = jx4_ck ? function (r016z) {
            jx4_ck('[xmldom ' + zn1$6r + ']\t' + r016z + q06zro(kx_c45));
          } : function () {};
        }return kx_c45 = kx_c45 || {}, abmep('warning'), abmep('error'), abmep('fatalError'), yzqdo0;
      }(aupem3, xj48c, bemp), qr6nz0['domBuilder'] = _csxt5['domBuilder'] || xj48c, t5cxk && ($7i9h[''] = 'http://www.w3.org/1999/xhtml'), $7i9h['xml'] = $7i9h['xml'] || 'http://www.w3.org/XML/1998/namespace', oz0qdy ? qr6nz0['parse'](oz0qdy, $7i9h, mae2b) : qr6nz0['errorHandler']['error']('invalid doc source'), xj48c['doc'];
    }, n1wi7['prototype'] = { 'startDocument': function () {
        this['doc'] = new p3jum8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
      }, 'startElement': function (o0rzd, dorq, zor60, whs5t9) {
        var c_ktx = this['doc'],
            kxj_c = c_ktx['createElementNS'](o0rzd, zor60 || dorq),
            n1$r67 = whs5t9['length'];j4x8(this, kxj_c), this['currentElement'] = kxj_c, this['locator'] && jp8u3(this['locator'], kxj_c);for (var tsih9w = 0x0; tsih9w < n1$r67; tsih9w++) {
          o0rzd = whs5t9['getURI'](tsih9w);var umpe8 = whs5t9['getValue'](tsih9w),
              pau3em = (zor60 = whs5t9['getQName'](tsih9w), c_ktx['createAttributeNS'](o0rzd, zor60));this['locator'] && jp8u3(whs5t9['getLocator'](tsih9w), pau3em), pau3em['value'] = pau3em['nodeValue'] = umpe8, kxj_c['setAttributeNode'](pau3em);
        }
      }, 'endElement': function () {
        var v2gbl = this['currentElement'];v2gbl['tagName'], this['currentElement'] = v2gbl['parentNode'];
      }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (u8m3e, qroz06) {
        var doyqz = this['doc']['createProcessingInstruction'](u8m3e, qroz06);this['locator'] && jp8u3(this['locator'], doyqz), j4x8(this, doyqz);
      }, 'ignorableWhitespace': function () {}, 'characters': function (_4ckx, _xc4kj, pj84u) {
        if (_4ckx = e3pm8['apply'](this, arguments)) {
          if (this['cdata']) var _5cxs = this['doc']['createCDATASection'](_4ckx);else _5cxs = this['doc']['createTextNode'](_4ckx);this['currentElement'] ? this['currentElement']['appendChild'](_5cxs) : /^\s*$/['test'](_4ckx) && this['doc']['appendChild'](_5cxs), this['locator'] && jp8u3(this['locator'], _5cxs);
        }
      }, 'skippedEntity': function () {}, 'endDocument': function () {
        this['doc']['normalize']();
      }, 'setDocumentLocator': function (eval2) {
        (this['locator'] = eval2) && (eval2['lineNumber'] = 0x0);
      }, 'comment': function (x5_c, xc4k8, abgl2) {
        x5_c = e3pm8['apply'](this, arguments);var w5h9t = this['doc']['createComment'](x5_c);this['locator'] && jp8u3(this['locator'], w5h9t), j4x8(this, w5h9t);
      }, 'startCDATA': function () {
        this['cdata'] = !0x0;
      }, 'endCDATA': function () {
        this['cdata'] = !0x1;
      }, 'startDTD': function (j4u83, aelv2b, z60qnr) {
        var q0zrd = this['doc']['implementation'];if (q0zrd && q0zrd['createDocumentType']) {
          var qzy = q0zrd['createDocumentType'](j4u83, aelv2b, z60qnr);this['locator'] && jp8u3(this['locator'], qzy), j4x8(this, qzy);
        }
      }, 'warning': function (vea2lb) {
        console['warn']('[xmldom warning]\t' + vea2lb, q06zro(this['locator']));
      }, 'error': function (iw9hts) {
        console['error']('[xmldom error]\t' + iw9hts, q06zro(this['locator']));
      }, 'fatalError': function (ckj_x4) {
        throw console['error']('[xmldom fatalError]\t' + ckj_x4, q06zro(this['locator'])), ckj_x4;
      } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (paebm) {
      n1wi7['prototype'][paebm] = function () {
        return null;
      };
    });var n6rz = qrn06z('./entities'),
        i1n7 = qrn06z('undefined')['XMLReader'],
        p3jum8 = nr7$6['DOMImplementation'] = qrn06z('undefined')['DOMImplementation'];nr7$6['XMLSerializer'] = qrn06z('undefined')['XMLSerializer'], nr7$6['DOMParser'] = nz6r01;
  }, { 'undefined': 0x14, './entities': 0x15, 'undefined': 0x16 }], 0x14: [function (vl2bag, em3a, eab2lv) {
    'use strict';

    function epa3mb(i$h1w7) {
      return (epa3mb = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (p2mb) {
        return typeof p2mb;
      } : function (w9$7i) {
        return w9$7i && 'function' == typeof Symbol && w9$7i['constructor'] === Symbol && w9$7i !== Symbol['prototype'] ? 'symbol' : typeof w9$7i;
      })(i$h1w7);
    }function t_5scx(w9hi, apem3) {
      for (var kct5_ in w9hi) apem3[kct5_] = w9hi[kct5_];
    }function w9thi(r1$z6n, _sh5t9) {
      var ihw9st = r1$z6n['prototype'];if (!(ihw9st instanceof _sh5t9)) {
        var wih71 = function () {};for (var mlab2e in wih71['prototype'] = _sh5t9['prototype'], wih71 = new wih71(), ihw9st) wih71[mlab2e] = ihw9st[mlab2e];r1$z6n['prototype'] = ihw9st = wih71;
      }ihw9st['constructor'] != r1$z6n && ('function' != typeof r1$z6n && console['error']('unknow Class:' + r1$z6n), ihw9st['constructor'] = r1$z6n);
    }var is97hw = 'http://www.w3.org/1999/xhtml',
        oz6qr = {},
        n7w1$i = oz6qr['ELEMENT_NODE'] = 0x1,
        n0r1z = oz6qr['ATTRIBUTE_NODE'] = 0x2,
        j_4c = oz6qr['TEXT_NODE'] = 0x3,
        $zn16r = oz6qr['CDATA_SECTION_NODE'] = 0x4,
        o0yqz = oz6qr['ENTITY_REFERENCE_NODE'] = 0x5,
        n6z0r = oz6qr['ENTITY_NODE'] = 0x6,
        pmuea3 = oz6qr['PROCESSING_INSTRUCTION_NODE'] = 0x7,
        w71hi = oz6qr['COMMENT_NODE'] = 0x8,
        wn1$7 = oz6qr['DOCUMENT_NODE'] = 0x9,
        umj3 = oz6qr['DOCUMENT_TYPE_NODE'] = 0xa,
        $i1w7n = oz6qr['DOCUMENT_FRAGMENT_NODE'] = 0xb,
        ckx_4j = oz6qr['NOTATION_NODE'] = 0xc,
        k_xc4j = {},
        i7$9wh = {},
        _4jxck = (k_xc4j['INDEX_SIZE_ERR'] = (i7$9wh[0x1] = 'Index size error', 0x1), k_xc4j['DOMSTRING_SIZE_ERR'] = (i7$9wh[0x2] = 'DOMString size error', 0x2), k_xc4j['HIERARCHY_REQUEST_ERR'] = (i7$9wh[0x3] = 'Hierarchy request error', 0x3)),
        u8j34 = (k_xc4j['WRONG_DOCUMENT_ERR'] = (i7$9wh[0x4] = 'Wrong document', 0x4), k_xc4j['INVALID_CHARACTER_ERR'] = (i7$9wh[0x5] = 'Invalid character', 0x5), k_xc4j['NO_DATA_ALLOWED_ERR'] = (i7$9wh[0x6] = 'No data allowed', 0x6), k_xc4j['NO_MODIFICATION_ALLOWED_ERR'] = (i7$9wh[0x7] = 'No modification allowed', 0x7), k_xc4j['NOT_FOUND_ERR'] = (i7$9wh[0x8] = 'Not found', 0x8)),
        i9sw7 = (k_xc4j['NOT_SUPPORTED_ERR'] = (i7$9wh[0x9] = 'Not supported', 0x9), k_xc4j['INUSE_ATTRIBUTE_ERR'] = (i7$9wh[0xa] = 'Attribute in use', 0xa));k_xc4j['INVALID_STATE_ERR'] = (i7$9wh[0xb] = 'Invalid state', 0xb), k_xc4j['SYNTAX_ERR'] = (i7$9wh[0xc] = 'Syntax error', 0xc), k_xc4j['INVALID_MODIFICATION_ERR'] = (i7$9wh[0xd] = 'Invalid modification', 0xd), k_xc4j['NAMESPACE_ERR'] = (i7$9wh[0xe] = 'Invalid namespace', 0xe), k_xc4j['INVALID_ACCESS_ERR'] = (i7$9wh[0xf] = 'Invalid access', 0xf);function $7iwh(ml2aeb, $rnz61) {
      if ($rnz61 instanceof Error) var pba3 = $rnz61;else pba3 = this, Error['call'](this, i7$9wh[ml2aeb]), this['message'] = i7$9wh[ml2aeb], Error['captureStackTrace'] && Error['captureStackTrace'](this, $7iwh);return pba3['code'] = ml2aeb, $rnz61 && (this['message'] = this['message'] + ':\x20' + $rnz61), pba3;
    }function pju3() {}function u4j8k($71h, e3p8um) {
      this['_node'] = $71h, this['_refresh'] = e3p8um, dozy0q(this);
    }function dozy0q(xju8k4) {
      var zr16n$ = xju8k4['_node']['_inc'] || xju8k4['_node']['ownerDocument']['_inc'];if (xju8k4['_inc'] != zr16n$) {
        var zo6 = xju8k4['_refresh'](xju8k4['_node']);for (var th_95s in le2bv(xju8k4, 'length', zo6['length']), zo6) xju8k4[th_95s] = zo6[th_95s];xju8k4['_inc'] = zr16n$;
      }
    }function ku3j84() {}function xj4u8k(_jcxk, t_x5) {
      for (var nzr = _jcxk['length']; nzr--;) if (_jcxk[nzr] === t_x5) return nzr;
    }function k4jx8c(jpu38, j8x4ck, v2bael, q0o6zr) {
      if (q0o6zr ? j8x4ck[xj4u8k(j8x4ck, q0o6zr)] = v2bael : j8x4ck[j8x4ck['length']++] = v2bael, jpu38) {
        var kx84 = (v2bael['ownerElement'] = jpu38)['ownerDocument'];kx84 && (q0o6zr && tx5sc_(kx84, jpu38, q0o6zr), xctk = jpu38, um38ep = v2bael, (w1i7$n = kx84) && w1i7$n['_inc']++, 'http://www.w3.org/2000/xmlns/' == um38ep['namespaceURI'] && (xctk['_nsMap'][um38ep['prefix'] ? um38ep['localName'] : ''] = um38ep['value']));
      }var w1i7$n, xctk, um38ep;
    }function epm3ba(lb2vg, r1z60, pm8u3) {
      var gl2va = xj4u8k(r1z60, pm8u3);if (!(0x0 <= gl2va)) throw $7iwh(u8j34, new Error(lb2vg['tagName'] + '@' + pm8u3));for (var l2evba = r1z60['length'] - 0x1; gl2va < l2evba;) r1z60[gl2va] = r1z60[++gl2va];if (r1z60['length'] = l2evba, lb2vg) {
        var wt9h = lb2vg['ownerDocument'];wt9h && (tx5sc_(wt9h, lb2vg, pm8u3), pm8u3['ownerElement'] = null);
      }
    }function h9w$i($17hi) {
      if (this['_features'] = {}, $17hi) {
        for (var x4kjc in $17hi) this['_features'] = $17hi[x4kjc];
      }
    }function amb2e() {}function zr$n61(sx_tc) {
      return ('<' == sx_tc ? '&lt;' : '>' == sx_tc && '&gt;') || '&' == sx_tc && '&amp;' || '\x22' == sx_tc && '&quot;' || '&#' + sx_tc['charCodeAt']() + ';';
    }function agv2bl(jp843u, tscx_5) {
      if (tscx_5(jp843u)) return 0x1;if (jp843u = jp843u['firstChild']) do {
        if (agv2bl(jp843u, tscx_5)) return 0x1;
      } while (jp843u = jp843u['nextSibling']);
    }function lba2ev() {}function tx5sc_(abv2, ep3abm, $16rn) {
      abv2 && abv2['_inc']++, 'http://www.w3.org/2000/xmlns/' == $16rn['namespaceURI'] && delete ep3abm['_nsMap'][$16rn['prefix'] ? $16rn['localName'] : ''];
    }function bpema(aeb2v, $1znr, s_t9c5) {
      if (aeb2v && aeb2v['_inc']) {
        aeb2v['_inc']++;var zq06r = $1znr['childNodes'];if (s_t9c5) zq06r[zq06r['length']++] = s_t9c5;else {
          for (var sw9ht = $1znr['firstChild'], t5_s9h = 0x0; sw9ht;) sw9ht = (zq06r[t5_s9h++] = sw9ht)['nextSibling'];zq06r['length'] = t5_s9h;
        }
      }
    }function blvg2a(pu8jm, $7wn1) {
      var rn6qz = $7wn1['previousSibling'],
          j4uk3 = $7wn1['nextSibling'];return rn6qz ? rn6qz['nextSibling'] = j4uk3 : pu8jm['firstChild'] = j4uk3, j4uk3 ? j4uk3['previousSibling'] = rn6qz : pu8jm['lastChild'] = rn6qz, bpema(pu8jm['ownerDocument'], pu8jm), $7wn1;
    }function z0n1r6(kj84c, vbgl2a, n1iw7) {
      var r0ozqd = vbgl2a['parentNode'];if (r0ozqd && r0ozqd['removeChild'](vbgl2a), vbgl2a['nodeType'] === $i1w7n) {
        var r0zq6o = vbgl2a['firstChild'];if (null == r0zq6o) return vbgl2a;var n16r0 = vbgl2a['lastChild'];
      } else r0zq6o = n16r0 = vbgl2a;var $i71nw = n1iw7 ? n1iw7['previousSibling'] : kj84c['lastChild'];for (r0zq6o['previousSibling'] = $i71nw, n16r0['nextSibling'] = n1iw7, $i71nw ? $i71nw['nextSibling'] = r0zq6o : kj84c['firstChild'] = r0zq6o, null == n1iw7 ? kj84c['lastChild'] = n16r0 : n1iw7['previousSibling'] = n16r0; r0zq6o['parentNode'] = kj84c, r0zq6o !== n16r0 && (r0zq6o = r0zq6o['nextSibling']););return bpema(kj84c['ownerDocument'] || kj84c, kj84c), vbgl2a['nodeType'] == $i1w7n && (vbgl2a['firstChild'] = vbgl2a['lastChild'] = null), vbgl2a;
    }function kx84j() {
      this['_nsMap'] = {};
    }function m2abl() {}function w7i1() {}function zoq() {}function ctk_5x() {}function pe3m8u() {}function _x4k5c() {}function uk834j() {}function $wh1i() {}function z0rdq() {}function stw59h() {}function zr601n() {}function m3p8uj() {}function hs9(r6ozq0, cx4k_) {
      var yqzd = [],
          $inw = 0x9 == this['nodeType'] && this['documentElement'] || this,
          p48 = $inw['prefix'],
          kx5_t = $inw['namespaceURI'];if (kx5_t && null == p48 && null == (p48 = $inw['lookupPrefix'](kx5_t))) var uae3p = [{ 'namespace': kx5_t, 'prefix': null }];return lb2vea(this, yqzd, r6ozq0, cx4k_, uae3p), yqzd['join']('');
    }function x54_c(vle2ba, _sctx5, r0oq) {
      var ma3peb = vle2ba['prefix'] || '',
          ba3p = vle2ba['namespaceURI'];if ((ma3peb || ba3p) && ('xml' !== ma3peb || 'http://www.w3.org/XML/1998/namespace' !== ba3p) && 'http://www.w3.org/2000/xmlns/' != ba3p) {
        for (var t59_hs = r0oq['length']; t59_hs--;) {
          var a3pem = r0oq[t59_hs];if (a3pem['prefix'] == ma3peb) return a3pem['namespace'] != ba3p;
        }return 0x1;
      }
    }function lb2vea(wht, kct_x, q60, n06r1, csx5_t) {
      if (n06r1) {
        if (!(wht = n06r1(wht))) return;if ('string' == typeof wht) return void kct_x['push'](wht);
      }switch (wht['nodeType']) {case n7w1$i:
          csx5_t = csx5_t || [];var lav2gb = wht['attributes'],
              $1rzn6 = lav2gb['length'],
              q6znr0 = wht['firstChild'],
              o0dzrq = wht['tagName'];q60 = is97hw === wht['namespaceURI'] || q60, kct_x['push']('<', o0dzrq);for (var r0odqz = 0x0; r0odqz < $1rzn6; r0odqz++) {
            'xmlns' == (sh59wt = lav2gb['item'](r0odqz))['prefix'] ? csx5_t['push']({ 'prefix': sh59wt['localName'], 'namespace': sh59wt['value'] }) : 'xmlns' == sh59wt['nodeName'] && csx5_t['push']({ 'prefix': '', 'namespace': sh59wt['value'] });
          }for (r0odqz = 0x0; r0odqz < $1rzn6; r0odqz++) {
            var sh59wt;if (x54_c(sh59wt = lav2gb['item'](r0odqz), 0x0, csx5_t)) {
              var pae3bm = sh59wt['prefix'] || '',
                  zyoq = sh59wt['namespaceURI'],
                  e3umap = pae3bm ? ' xmlns:' + pae3bm : ' xmlns';kct_x['push'](e3umap, '=\x22', zyoq, '\x22'), csx5_t['push']({ 'prefix': pae3bm, 'namespace': zyoq });
            }lb2vea(sh59wt, kct_x, q60, n06r1, csx5_t);
          }x54_c(wht, 0x0, csx5_t) && (pae3bm = wht['prefix'] || '', zyoq = wht['namespaceURI'], e3umap = pae3bm ? ' xmlns:' + pae3bm : ' xmlns', (kct_x['push'](e3umap, '=\x22', zyoq, '\x22'), csx5_t['push']({ 'prefix': pae3bm, 'namespace': zyoq })));if (q6znr0 || q60 && !/^(?:meta|link|img|br|hr|input)$/i['test'](o0dzrq)) {
            if (kct_x['push']('>'), q60 && /^script$/i['test'](o0dzrq)) {
              for (; q6znr0;) q6znr0['data'] ? kct_x['push'](q6znr0['data']) : lb2vea(q6znr0, kct_x, q60, n06r1, csx5_t), q6znr0 = q6znr0['nextSibling'];
            } else {
              for (; q6znr0;) lb2vea(q6znr0, kct_x, q60, n06r1, csx5_t), q6znr0 = q6znr0['nextSibling'];
            }kct_x['push']('</', o0dzrq, '>');
          } else kct_x['push']('/>');return;case wn1$7:case $i1w7n:
          for (q6znr0 = wht['firstChild']; q6znr0;) lb2vea(q6znr0, kct_x, q60, n06r1, csx5_t), q6znr0 = q6znr0['nextSibling'];return;case n0r1z:
          return kct_x['push']('\x20', wht['name'], '=\x22', wht['value']['replace'](/[<&"]/g, zr$n61), '\x22');case j_4c:
          return kct_x['push'](wht['data']['replace'](/[<&]/g, zr$n61));case $zn16r:
          return kct_x['push']('<![CDATA[', wht['data'], ']]>');case w71hi:
          return kct_x['push']('<!--', wht['data'], '-->');case umj3:
          var o0qrz6 = wht['publicId'],
              zn6r$ = wht['systemId'];if (kct_x['push']('<!DOCTYPE ', wht['name']), o0qrz6) kct_x['push'](' PUBLIC "', o0qrz6), zn6r$ && '.' != zn6r$ && kct_x['push']('\x22\x20\x22', zn6r$), kct_x['push']('\x22>');else {
            if (zn6r$ && '.' != zn6r$) kct_x['push'](' SYSTEM "', zn6r$, '\x22>');else {
              var nzqr = wht['internalSubset'];nzqr && kct_x['push']('\x20[', nzqr, ']'), kct_x['push']('>');
            }
          }return;case pmuea3:
          return kct_x['push']('<?', wht['target'], '\x20', wht['data'], '?>');case o0yqz:
          return kct_x['push']('&', wht['nodeName'], ';');default:
          kct_x['push']('??', wht['nodeName']);}
    }function le2bv(xk_t, oqr0d, rn176) {
      xk_t[oqr0d] = rn176;
    }$7iwh['prototype'] = Error['prototype'], t_5scx(k_xc4j, $7iwh), pju3['prototype'] = { 'length': 0x0, 'item': function (zoy0) {
        return this[zoy0] || null;
      }, 'toString': function (bmap3, em8up) {
        for (var w9i$h7 = [], mu3a = 0x0; mu3a < this['length']; mu3a++) lb2vea(this[mu3a], w9i$h7, bmap3, em8up);return w9i$h7['join']('');
      } }, u4j8k['prototype']['item'] = function (zn6) {
      return dozy0q(this), this[zn6];
    }, w9thi(u4j8k, pju3), ku3j84['prototype'] = { 'length': 0x0, 'item': pju3['prototype']['item'], 'getNamedItem': function (zqnr0) {
        for (var iw$7h1 = this['length']; iw$7h1--;) {
          var ctkx_5 = this[iw$7h1];if (ctkx_5['nodeName'] == zqnr0) return ctkx_5;
        }
      }, 'setNamedItem': function (j8uk34) {
        var kcx4j_ = j8uk34['ownerElement'];if (kcx4j_ && kcx4j_ != this['_ownerElement']) throw new $7iwh(i9sw7);var twh9is = this['getNamedItem'](j8uk34['nodeName']);return k4jx8c(this['_ownerElement'], this, j8uk34, twh9is), twh9is;
      }, 'setNamedItemNS': function (bv2al) {
        var xcj4k8,
            i7wh = bv2al['ownerElement'];if (i7wh && i7wh != this['_ownerElement']) throw new $7iwh(i9sw7);return xcj4k8 = this['getNamedItemNS'](bv2al['namespaceURI'], bv2al['localName']), k4jx8c(this['_ownerElement'], this, bv2al, xcj4k8), xcj4k8;
      }, 'removeNamedItem': function (hti9sw) {
        var q6rzo0 = this['getNamedItem'](hti9sw);return epm3ba(this['_ownerElement'], this, q6rzo0), q6rzo0;
      }, 'removeNamedItemNS': function (hwtsi, hiwt9s) {
        var bv2gal = this['getNamedItemNS'](hwtsi, hiwt9s);return epm3ba(this['_ownerElement'], this, bv2gal), bv2gal;
      }, 'getNamedItemNS': function (qnr6z, m3ebpa) {
        for (var qzody = this['length']; qzody--;) {
          var b2g = this[qzody];if (b2g['localName'] == m3ebpa && b2g['namespaceURI'] == qnr6z) return b2g;
        }return null;
      } }, h9w$i['prototype'] = { 'hasFeature': function (bep2am, up48) {
        var zdy = this['_features'][bep2am['toLowerCase']()];return !(!zdy || up48 && !(up48 in zdy));
      }, 'createDocument': function (me3ap, ckx45_, _95sh) {
        var k384j = new lba2ev();if (k384j['implementation'] = this, k384j['childNodes'] = new pju3(), (k384j['doctype'] = _95sh) && k384j['appendChild'](_95sh), ckx45_) {
          var cx_45k = k384j['createElementNS'](me3ap, ckx45_);k384j['appendChild'](cx_45k);
        }return k384j;
      }, 'createDocumentType': function (c4kxj_, pmb2a, pme8) {
        var _k45c = new _x4k5c();return _k45c['name'] = c4kxj_, _k45c['nodeName'] = c4kxj_, _k45c['publicId'] = pmb2a, _k45c['systemId'] = pme8, _k45c;
      } }, amb2e['prototype'] = { 'firstChild': null, 'lastChild': null, 'previousSibling': null, 'nextSibling': null, 'attributes': null, 'parentNode': null, 'childNodes': null, 'ownerDocument': null, 'nodeValue': null, 'namespaceURI': null, 'prefix': null, 'localName': null, 'insertBefore': function (xc_kj4, l2vagb) {
        return z0n1r6(this, xc_kj4, l2vagb);
      }, 'replaceChild': function (j84ku3, h9s_5) {
        this['insertBefore'](j84ku3, h9s_5), h9s_5 && this['removeChild'](h9s_5);
      }, 'removeChild': function (n67r1$) {
        return blvg2a(this, n67r1$);
      }, 'appendChild': function (niw7) {
        return this['insertBefore'](niw7, null);
      }, 'hasChildNodes': function () {
        return null != this['firstChild'];
      }, 'cloneNode': function (k3ju4) {
        return function mbp(zyo0q, xk_t5c, swh59) {
          var kc_4x5 = new xk_t5c['constructor']();for (var ueam in xk_t5c) {
            var uep38m = xk_t5c[ueam];'object' != epa3mb(uep38m) && uep38m != kc_4x5[ueam] && (kc_4x5[ueam] = uep38m);
          }xk_t5c['childNodes'] && (kc_4x5['childNodes'] = new pju3()), kc_4x5['ownerDocument'] = zyo0q;switch (kc_4x5['nodeType']) {case n7w1$i:
              var w9ti = xk_t5c['attributes'],
                  zr6oq0 = kc_4x5['attributes'] = new ku3j84(),
                  h7i9$w = w9ti['length'];zr6oq0['_ownerElement'] = kc_4x5;for (var cj_4k = 0x0; cj_4k < h7i9$w; cj_4k++) kc_4x5['setAttributeNode'](mbp(zyo0q, w9ti['item'](cj_4k), !0x0));break;case n0r1z:
              swh59 = !0x0;}if (swh59) {
            for (var i1n$ = xk_t5c['firstChild']; i1n$;) kc_4x5['appendChild'](mbp(zyo0q, i1n$, swh59)), i1n$ = i1n$['nextSibling'];
          }return kc_4x5;
        }(this['ownerDocument'] || this, this, k3ju4);
      }, 'normalize': function () {
        for (var wi9ht = this['firstChild']; wi9ht;) {
          var m3b = wi9ht['nextSibling'];m3b && m3b['nodeType'] == j_4c && wi9ht['nodeType'] == j_4c ? (this['removeChild'](m3b), wi9ht['appendData'](m3b['data'])) : (wi9ht['normalize'](), wi9ht = m3b);
        }
      }, 'isSupported': function (_c54, z1nr$) {
        return this['ownerDocument']['implementation']['hasFeature'](_c54, z1nr$);
      }, 'hasAttributes': function () {
        return 0x0 < this['attributes']['length'];
      }, 'lookupPrefix': function (s9ih7) {
        for (var r6z$n = this; r6z$n;) {
          var n61$i = r6z$n['_nsMap'];if (n61$i) {
            for (var x_j4ck in n61$i) if (n61$i[x_j4ck] == s9ih7) return x_j4ck;
          }r6z$n = r6z$n['nodeType'] == n0r1z ? r6z$n['ownerDocument'] : r6z$n['parentNode'];
        }return null;
      }, 'lookupNamespaceURI': function (emab3) {
        for (var zy0od = this; zy0od;) {
          var xu48kj = zy0od['_nsMap'];if (xu48kj && emab3 in xu48kj) return xu48kj[emab3];zy0od = zy0od['nodeType'] == n0r1z ? zy0od['ownerDocument'] : zy0od['parentNode'];
        }return null;
      }, 'isDefaultNamespace': function (pmj83) {
        return null == this['lookupPrefix'](pmj83);
      } }, t_5scx(oz6qr, amb2e), t_5scx(oz6qr, amb2e['prototype']), lba2ev['prototype'] = { 'nodeName': '#document', 'nodeType': wn1$7, 'doctype': null, 'documentElement': null, '_inc': 0x1, 'insertBefore': function (jx_c4, s5_c9) {
        if (jx_c4['nodeType'] != $i1w7n) return null == this['documentElement'] && jx_c4['nodeType'] == n7w1$i && (this['documentElement'] = jx_c4), z0n1r6(this, jx_c4, s5_c9), jx_c4['ownerDocument'] = this, jx_c4;for (var itw = jx_c4['firstChild']; itw;) {
          var xt5s_c = itw['nextSibling'];this['insertBefore'](itw, s5_c9), itw = xt5s_c;
        }return jx_c4;
      }, 'removeChild': function (hiw1) {
        return this['documentElement'] == hiw1 && (this['documentElement'] = null), blvg2a(this, hiw1);
      }, 'importNode': function (maeup, s_c59t) {
        return function h$79(nr1$67, amep3u, ozdqy0) {
          var zdqyo0;switch (amep3u['nodeType']) {case n7w1$i:
              (zdqyo0 = amep3u['cloneNode'](!0x1))['ownerDocument'] = nr1$67;case $i1w7n:
              break;case n0r1z:
              ozdqy0 = !0x0;}zdqyo0 = zdqyo0 || amep3u['cloneNode'](!0x1), zdqyo0['ownerDocument'] = nr1$67, zdqyo0['parentNode'] = null;if (ozdqy0) {
            for (var lemb2a = amep3u['firstChild']; lemb2a;) zdqyo0['appendChild'](h$79(nr1$67, lemb2a, ozdqy0)), lemb2a = lemb2a['nextSibling'];
          }return zdqyo0;
        }(this, maeup, s_c59t);
      }, 'getElementById': function (be2avl) {
        var kuj = null;return agv2bl(this['documentElement'], function (ve2l) {
          if (ve2l['nodeType'] == n7w1$i && ve2l['getAttribute']('id') == be2avl) return kuj = ve2l, !0x0;
        }), kuj;
      }, 'createElement': function (r0zn6q) {
        var $17iw = new kx84j();return $17iw['ownerDocument'] = this, $17iw['nodeName'] = r0zn6q, $17iw['tagName'] = r0zn6q, $17iw['childNodes'] = new pju3(), ($17iw['attributes'] = new ku3j84())['_ownerElement'] = $17iw;
      }, 'createDocumentFragment': function () {
        var t_9sh = new stw59h();return t_9sh['ownerDocument'] = this, t_9sh['childNodes'] = new pju3(), t_9sh;
      }, 'createTextNode': function (c_4xk5) {
        var cs_95t = new zoq();return cs_95t['ownerDocument'] = this, cs_95t['appendData'](c_4xk5), cs_95t;
      }, 'createComment': function (r0qn6z) {
        var epmu = new ctk_5x();return epmu['ownerDocument'] = this, epmu['appendData'](r0qn6z), epmu;
      }, 'createCDATASection': function (qo6r0z) {
        var k_cj = new pe3m8u();return k_cj['ownerDocument'] = this, k_cj['appendData'](qo6r0z), k_cj;
      }, 'createProcessingInstruction': function (kujx8, lebma2) {
        var s_ = new zr601n();return s_['ownerDocument'] = this, s_['tagName'] = s_['target'] = kujx8, s_['nodeValue'] = s_['data'] = lebma2, s_;
      }, 'createAttribute': function (x5c4k_) {
        var c84kj = new m2abl();return c84kj['ownerDocument'] = this, c84kj['name'] = x5c4k_, c84kj['nodeName'] = x5c4k_, c84kj['localName'] = x5c4k_, c84kj['specified'] = !0x0, c84kj;
      }, 'createEntityReference': function (mleb2a) {
        var wi$1n = new z0rdq();return wi$1n['ownerDocument'] = this, wi$1n['nodeName'] = mleb2a, wi$1n;
      }, 'createElementNS': function (peamu, $6rzn) {
        var k3u4 = new kx84j(),
            umep38 = $6rzn['split'](':'),
            i617n = k3u4['attributes'] = new ku3j84();return k3u4['childNodes'] = new pju3(), k3u4['ownerDocument'] = this, k3u4['nodeName'] = $6rzn, k3u4['tagName'] = $6rzn, k3u4['namespaceURI'] = peamu, 0x2 == umep38['length'] ? (k3u4['prefix'] = umep38[0x0], k3u4['localName'] = umep38[0x1]) : k3u4['localName'] = $6rzn, i617n['_ownerElement'] = k3u4;
      }, 'createAttributeNS': function (m3p8u, ith9s) {
        var mleb2 = new m2abl(),
            rzn60q = ith9s['split'](':');return mleb2['ownerDocument'] = this, mleb2['nodeName'] = ith9s, mleb2['name'] = ith9s, mleb2['namespaceURI'] = m3p8u, mleb2['specified'] = !0x0, 0x2 == rzn60q['length'] ? (mleb2['prefix'] = rzn60q[0x0], mleb2['localName'] = rzn60q[0x1]) : mleb2['localName'] = ith9s, mleb2;
      } }, w9thi(lba2ev, amb2e), lba2ev['prototype']['getElementsByTagName'] = (kx84j['prototype'] = { 'nodeType': n7w1$i, 'hasAttribute': function (k83u4j) {
        return null != this['getAttributeNode'](k83u4j);
      }, 'getAttribute': function (pmbe) {
        var v2balg = this['getAttributeNode'](pmbe);return v2balg && v2balg['value'] || '';
      }, 'getAttributeNode': function (mabel2) {
        return this['attributes']['getNamedItem'](mabel2);
      }, 'setAttribute': function (k_x4cj, $r67) {
        var zqyo0d = this['ownerDocument']['createAttribute'](k_x4cj);zqyo0d['value'] = zqyo0d['nodeValue'] = '' + $r67, this['setAttributeNode'](zqyo0d);
      }, 'removeAttribute': function (w59s) {
        var p483u = this['getAttributeNode'](w59s);p483u && this['removeAttributeNode'](p483u);
      }, 'appendChild': function (rz610) {
        return rz610['nodeType'] === $i1w7n ? this['insertBefore'](rz610, null) : function (p8um, h1i7) {
          var sw97h = h1i7['parentNode'];if (sw97h) {
            var n$w1 = p8um['lastChild'];sw97h['removeChild'](h1i7), n$w1 = p8um['lastChild'];
          }return n$w1 = p8um['lastChild'], h1i7['parentNode'] = p8um, h1i7['previousSibling'] = n$w1, h1i7['nextSibling'] = null, n$w1 ? n$w1['nextSibling'] = h1i7 : p8um['firstChild'] = h1i7, p8um['lastChild'] = h1i7, bpema(p8um['ownerDocument'], p8um, h1i7), h1i7;
        }(this, rz610);
      }, 'setAttributeNode': function (win1) {
        return this['attributes']['setNamedItem'](win1);
      }, 'setAttributeNodeNS': function (zdo) {
        return this['attributes']['setNamedItemNS'](zdo);
      }, 'removeAttributeNode': function (euap) {
        return this['attributes']['removeNamedItem'](euap['nodeName']);
      }, 'removeAttributeNS': function (jk4cx8, m3ep8u) {
        var k4cj_ = this['getAttributeNodeNS'](jk4cx8, m3ep8u);k4cj_ && this['removeAttributeNode'](k4cj_);
      }, 'hasAttributeNS': function (ts5c_9, lma2eb) {
        return null != this['getAttributeNodeNS'](ts5c_9, lma2eb);
      }, 'getAttributeNS': function (u8jp, umep3a) {
        var _sht = this['getAttributeNodeNS'](u8jp, umep3a);return _sht && _sht['value'] || '';
      }, 'setAttributeNS': function (hit9, m83uep, _s5tc) {
        var cx5_s = this['ownerDocument']['createAttributeNS'](hit9, m83uep);cx5_s['value'] = cx5_s['nodeValue'] = '' + _s5tc, this['setAttributeNode'](cx5_s);
      }, 'getAttributeNodeNS': function (oq0dzy, h17$i) {
        return this['attributes']['getNamedItemNS'](oq0dzy, h17$i);
      }, 'getElementsByTagName': function (z6qn0r) {
        return new u4j8k(this, function (si9) {
          var maep3b = [];return agv2bl(si9, function (znqr06) {
            znqr06 === si9 || znqr06['nodeType'] != n7w1$i || '*' !== z6qn0r && znqr06['tagName'] != z6qn0r || maep3b['push'](znqr06);
          }), maep3b;
        });
      }, 'getElementsByTagNameNS': function (sxc5t, n6rzq0) {
        return new u4j8k(this, function (e2pb) {
          var _k4x = [];return agv2bl(e2pb, function (blame2) {
            blame2 === e2pb || blame2['nodeType'] !== n7w1$i || '*' !== sxc5t && blame2['namespaceURI'] !== sxc5t || '*' !== n6rzq0 && blame2['localName'] != n6rzq0 || _k4x['push'](blame2);
          }), _k4x;
        });
      } })['getElementsByTagName'], lba2ev['prototype']['getElementsByTagNameNS'] = kx84j['prototype']['getElementsByTagNameNS'], w9thi(kx84j, amb2e), m2abl['prototype']['nodeType'] = n0r1z, w9thi(m2abl, amb2e), w7i1['prototype'] = { 'data': '', 'substringData': function (melb, iwhs7) {
        return this['data']['substring'](melb, melb + iwhs7);
      }, 'appendData': function (i16$7) {
        i16$7 = this['data'] + i16$7, this['nodeValue'] = this['data'] = i16$7, this['length'] = i16$7['length'];
      }, 'insertData': function (sw59t, kx4j) {
        this['replaceData'](sw59t, 0x0, kx4j);
      }, 'appendChild': function () {
        throw new Error(i7$9wh[_4jxck]);
      }, 'deleteData': function (cjx4k, yzd0qo) {
        this['replaceData'](cjx4k, yzd0qo, '');
      }, 'replaceData': function (yzqod, z06nqr, x5stc_) {
        x5stc_ = this['data']['substring'](0x0, yzqod) + x5stc_ + this['data']['substring'](yzqod + z06nqr), this['nodeValue'] = this['data'] = x5stc_, this['length'] = x5stc_['length'];
      } }, w9thi(w7i1, amb2e), zoq['prototype'] = { 'nodeName': '#text', 'nodeType': j_4c, 'splitText': function (avlbe2) {
        var xctk_5 = this['data'],
            h_95t = xctk_5['substring'](avlbe2);xctk_5 = xctk_5['substring'](0x0, avlbe2), this['data'] = this['nodeValue'] = xctk_5, this['length'] = xctk_5['length'];var qdyzo0 = this['ownerDocument']['createTextNode'](h_95t);return this['parentNode'] && this['parentNode']['insertBefore'](qdyzo0, this['nextSibling']), qdyzo0;
      } }, w9thi(zoq, w7i1), ctk_5x['prototype'] = { 'nodeName': '#comment', 'nodeType': w71hi }, w9thi(ctk_5x, w7i1), pe3m8u['prototype'] = { 'nodeName': '#cdata-section', 'nodeType': $zn16r }, w9thi(pe3m8u, w7i1), _x4k5c['prototype']['nodeType'] = umj3, w9thi(_x4k5c, amb2e), uk834j['prototype']['nodeType'] = ckx_4j, w9thi(uk834j, amb2e), $wh1i['prototype']['nodeType'] = n6z0r, w9thi($wh1i, amb2e), z0rdq['prototype']['nodeType'] = o0yqz, w9thi(z0rdq, amb2e), stw59h['prototype']['nodeName'] = '#document-fragment', stw59h['prototype']['nodeType'] = $i1w7n, w9thi(stw59h, amb2e), zr601n['prototype']['nodeType'] = pmuea3, w9thi(zr601n, amb2e), m3p8uj['prototype']['serializeToString'] = function (ap3bem, n67r$, dzy0oq) {
      return hs9['call'](ap3bem, n67r$, dzy0oq);
    }, amb2e['prototype']['toString'] = hs9;try {
      Object['defineProperty'] && (Object['defineProperty'](u4j8k['prototype'], 'length', { 'get': function () {
          return dozy0q(this), this['$$length'];
        } }), Object['defineProperty'](amb2e['prototype'], 'textContent', { 'get': function () {
          return function blvag(m3upe8) {
            switch (m3upe8['nodeType']) {case n7w1$i:case $i1w7n:
                var aepm3u = [];for (m3upe8 = m3upe8['firstChild']; m3upe8;) 0x7 !== m3upe8['nodeType'] && 0x8 !== m3upe8['nodeType'] && aepm3u['push'](blvag(m3upe8)), m3upe8 = m3upe8['nextSibling'];return aepm3u['join']('');default:
                return m3upe8['nodeValue'];}
          }(this);
        }, 'set': function (hts59_) {
          switch (this['nodeType']) {case n7w1$i:case $i1w7n:
              for (; this['firstChild'];) this['removeChild'](this['firstChild']);(hts59_ || String(hts59_)) && this['appendChild'](this['ownerDocument']['createTextNode'](hts59_));break;default:
              this['data'] = hts59_, this['value'] = hts59_, this['nodeValue'] = hts59_;}
        } }), le2bv = function (p834ju, y0q, kxc4_5) {
        p834ju['$$' + y0q] = kxc4_5;
      });
    } catch (hwist9) {}eab2lv['DOMImplementation'] = h9w$i, eab2lv['XMLSerializer'] = m3p8uj;
  }, {}], 0x15: [function (in$61, emau3p, odrzq0) {
    'use strict';

    odrzq0['entityMap'] = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27', 'Agrave': 'À', 'Aacute': 'Á', 'Acirc': 'Â', 'Atilde': 'Ã', 'Auml': 'Ä', 'Aring': 'Å', 'AElig': 'Æ', 'Ccedil': 'Ç', 'Egrave': 'È', 'Eacute': 'É', 'Ecirc': 'Ê', 'Euml': 'Ë', 'Igrave': 'Ì', 'Iacute': 'Í', 'Icirc': 'Î', 'Iuml': 'Ï', 'ETH': 'Ð', 'Ntilde': 'Ñ', 'Ograve': 'Ò', 'Oacute': 'Ó', 'Ocirc': 'Ô', 'Otilde': 'Õ', 'Ouml': 'Ö', 'Oslash': 'Ø', 'Ugrave': 'Ù', 'Uacute': 'Ú', 'Ucirc': 'Û', 'Uuml': 'Ü', 'Yacute': 'Ý', 'THORN': 'Þ', 'szlig': 'ß', 'agrave': 'à', 'aacute': 'á', 'acirc': 'â', 'atilde': 'ã', 'auml': 'ä', 'aring': 'å', 'aelig': 'æ', 'ccedil': 'ç', 'egrave': 'è', 'eacute': 'é', 'ecirc': 'ê', 'euml': 'ë', 'igrave': 'ì', 'iacute': 'í', 'icirc': 'î', 'iuml': 'ï', 'eth': 'ð', 'ntilde': 'ñ', 'ograve': 'ò', 'oacute': 'ó', 'ocirc': 'ô', 'otilde': 'õ', 'ouml': 'ö', 'oslash': 'ø', 'ugrave': 'ù', 'uacute': 'ú', 'ucirc': 'û', 'uuml': 'ü', 'yacute': 'ý', 'thorn': 'þ', 'yuml': 'ÿ', 'nbsp': '\x20', 'iexcl': '¡', 'cent': '¢', 'pound': '£', 'curren': '¤', 'yen': '¥', 'brvbar': '¦', 'sect': '§', 'uml': '¨', 'copy': '©', 'ordf': 'ª', 'laquo': '«', 'not': '¬', 'shy': '­­', 'reg': '®', 'macr': '¯', 'deg': '°', 'plusmn': '±', 'sup2': '²', 'sup3': '³', 'acute': '´', 'micro': 'µ', 'para': '¶', 'middot': '·', 'cedil': '¸', 'sup1': '¹', 'ordm': 'º', 'raquo': '»', 'frac14': '¼', 'frac12': '½', 'frac34': '¾', 'iquest': '¿', 'times': '×', 'divide': '÷', 'forall': '∀', 'part': '∂', 'exist': '∃', 'empty': '∅', 'nabla': '∇', 'isin': '∈', 'notin': '∉', 'ni': '∋', 'prod': '∏', 'sum': '∑', 'minus': '−', 'lowast': '∗', 'radic': '√', 'prop': '∝', 'infin': '∞', 'ang': '∠', 'and': '∧', 'or': '∨', 'cap': '∩', 'cup': '∪', 'int': '∫', 'there4': '∴', 'sim': '∼', 'cong': '≅', 'asymp': '≈', 'ne': '≠', 'equiv': '≡', 'le': '≤', 'ge': '≥', 'sub': '⊂', 'sup': '⊃', 'nsub': '⊄', 'sube': '⊆', 'supe': '⊇', 'oplus': '⊕', 'otimes': '⊗', 'perp': '⊥', 'sdot': '⋅', 'Alpha': 'Α', 'Beta': 'Β', 'Gamma': 'Γ', 'Delta': 'Δ', 'Epsilon': 'Ε', 'Zeta': 'Ζ', 'Eta': 'Η', 'Theta': 'Θ', 'Iota': 'Ι', 'Kappa': 'Κ', 'Lambda': 'Λ', 'Mu': 'Μ', 'Nu': 'Ν', 'Xi': 'Ξ', 'Omicron': 'Ο', 'Pi': 'Π', 'Rho': 'Ρ', 'Sigma': 'Σ', 'Tau': 'Τ', 'Upsilon': 'Υ', 'Phi': 'Φ', 'Chi': 'Χ', 'Psi': 'Ψ', 'Omega': 'Ω', 'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'epsilon': 'ε', 'zeta': 'ζ', 'eta': 'η', 'theta': 'θ', 'iota': 'ι', 'kappa': 'κ', 'lambda': 'λ', 'mu': 'μ', 'nu': 'ν', 'xi': 'ξ', 'omicron': 'ο', 'pi': 'π', 'rho': 'ρ', 'sigmaf': 'ς', 'sigma': 'σ', 'tau': 'τ', 'upsilon': 'υ', 'phi': 'φ', 'chi': 'χ', 'psi': 'ψ', 'omega': 'ω', 'thetasym': 'ϑ', 'upsih': 'ϒ', 'piv': 'ϖ', 'OElig': 'Œ', 'oelig': 'œ', 'Scaron': 'Š', 'scaron': 'š', 'Yuml': 'Ÿ', 'fnof': 'ƒ', 'circ': 'ˆ', 'tilde': '˜', 'ensp': '\u2002', 'emsp': '\u2003', 'thinsp': '\u2009', 'zwnj': '‌', 'zwj': '‍', 'lrm': '‎', 'rlm': '‏', 'ndash': '–', 'mdash': '—', 'lsquo': '‘', 'rsquo': '’', 'sbquo': '‚', 'ldquo': '“', 'rdquo': '”', 'bdquo': '„', 'dagger': '†', 'Dagger': '‡', 'bull': '•', 'hellip': '…', 'permil': '‰', 'prime': '′', 'Prime': '″', 'lsaquo': '‹', 'rsaquo': '›', 'oline': '‾', 'euro': '€', 'trade': '™', 'larr': '←', 'uarr': '↑', 'rarr': '→', 'darr': '↓', 'harr': '↔', 'crarr': '↵', 'lceil': '⌈', 'rceil': '⌉', 'lfloor': '⌊', 'rfloor': '⌋', 'loz': '◊', 'spades': '♠', 'clubs': '♣', 'hearts': '♥', 'diams': '♦' };
  }, {}], 0x16: [function (qyzd, $1z6, d0o) {
    'use strict';

    var qzyd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        c_9 = new RegExp('[\\-\\.0-9' + qzyd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
        k45cx = new RegExp('^' + qzyd['source'] + c_9['source'] + '*(?::' + qzyd['source'] + c_9['source'] + '*)?$'),
        s9ct5_ = 0x0,
        nr60zq = 0x1,
        tx_5s = 0x2,
        gb2l = 0x3,
        is7hw9 = 0x4,
        _9hs = 0x5,
        wi$h = 0x6,
        eba3m = 0x7;function evl2a() {}function whit(bpmea, ckt5x) {
      return ckt5x['lineNumber'] = bpmea['lineNumber'], ckt5x['columnNumber'] = bpmea['columnNumber'], ckt5x;
    }function zq0rn6(w1i7n, peu8m, kj8u34, p3muea, j_4ck, win71$) {
      for (var u8emp, lbe2a = ++peu8m, i7nw = s9ct5_;;) {
        var xtkc = w1i7n['charAt'](lbe2a);switch (xtkc) {case '=':
            if (i7nw === nr60zq) u8emp = w1i7n['slice'](peu8m, lbe2a), i7nw = gb2l;else {
              if (i7nw !== tx_5s) throw new Error('attribute equal must after attrName');i7nw = gb2l;
            }break;case '\x27':case '\x22':
            if (i7nw === gb2l || i7nw === nr60zq) {
              if (i7nw === nr60zq && (win71$['warning']('attribute value must after "="'), u8emp = w1i7n['slice'](peu8m, lbe2a)), peu8m = lbe2a + 0x1, !(0x0 < (lbe2a = w1i7n['indexOf'](xtkc, peu8m)))) throw new Error('attribute value no end \'' + xtkc + '\' match');_xj4c = w1i7n['slice'](peu8m, lbe2a)['replace'](/&#?\w+;/g, j_4ck), kj8u34['add'](u8emp, _xj4c, peu8m - 0x1), i7nw = _9hs;
            } else {
              if (i7nw != is7hw9) throw new Error('attribute value must after "="');_xj4c = w1i7n['slice'](peu8m, lbe2a)['replace'](/&#?\w+;/g, j_4ck), kj8u34['add'](u8emp, _xj4c, peu8m), win71$['warning']('attribute "' + u8emp + '" missed start quot(' + xtkc + ')!!'), peu8m = lbe2a + 0x1, i7nw = _9hs;
            }break;case '/':
            switch (i7nw) {case s9ct5_:
                kj8u34['setTagName'](w1i7n['slice'](peu8m, lbe2a));case _9hs:case wi$h:case eba3m:
                i7nw = eba3m, kj8u34['closed'] = !0x0;case is7hw9:case nr60zq:case tx_5s:
                break;default:
                throw new Error('attribute invalid close char(\'/\')');}break;case '':
            return win71$['error']('unexpected end of input'), i7nw == s9ct5_ && kj8u34['setTagName'](w1i7n['slice'](peu8m, lbe2a)), lbe2a;case '>':
            switch (i7nw) {case s9ct5_:
                kj8u34['setTagName'](w1i7n['slice'](peu8m, lbe2a));case _9hs:case wi$h:case eba3m:
                break;case is7hw9:case nr60zq:
                '/' === (_xj4c = w1i7n['slice'](peu8m, lbe2a))['slice'](-0x1) && (kj8u34['closed'] = !0x0, _xj4c = _xj4c['slice'](0x0, -0x1));case tx_5s:
                i7nw === tx_5s && (_xj4c = u8emp), i7nw == is7hw9 ? (win71$['warning']('attribute "' + _xj4c + '" missed quot(")!!'), kj8u34['add'](u8emp, _xj4c['replace'](/&#?\w+;/g, j_4ck), peu8m)) : ('http://www.w3.org/1999/xhtml' === p3muea[''] && _xj4c['match'](/^(?:disabled|checked|selected)$/i) || win71$['warning']('attribute "' + _xj4c + '" missed value!! "' + _xj4c + '" instead!!'), kj8u34['add'](_xj4c, _xj4c, peu8m));break;case gb2l:
                throw new Error('attribute value missed!!');}return lbe2a;case '\u0080':
            xtkc = '\x20';default:
            if (xtkc <= '\x20') switch (i7nw) {case s9ct5_:
                kj8u34['setTagName'](w1i7n['slice'](peu8m, lbe2a)), i7nw = wi$h;break;case nr60zq:
                u8emp = w1i7n['slice'](peu8m, lbe2a), i7nw = tx_5s;break;case is7hw9:
                var _xj4c = w1i7n['slice'](peu8m, lbe2a)['replace'](/&#?\w+;/g, j_4ck);win71$['warning']('attribute "' + _xj4c + '" missed quot(")!!'), kj8u34['add'](u8emp, _xj4c, peu8m);case _9hs:
                i7nw = wi$h;} else switch (i7nw) {case tx_5s:
                kj8u34['tagName'], ('http://www.w3.org/1999/xhtml' === p3muea[''] && u8emp['match'](/^(?:disabled|checked|selected)$/i) || win71$['warning']('attribute "' + u8emp + '" missed value!! "' + u8emp + '" instead2!!'), kj8u34['add'](u8emp, u8emp, peu8m), peu8m = lbe2a, i7nw = nr60zq);break;case _9hs:
                win71$['warning']('attribute space is required"' + u8emp + '\x22!!');case wi$h:
                i7nw = nr60zq, peu8m = lbe2a;break;case gb2l:
                i7nw = is7hw9, peu8m = lbe2a;break;case eba3m:
                throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lbe2a++;
      }
    }function wtih9s(bl2gva, j4u8x, u3epam) {
      for (var j4x8uk = bl2gva['tagName'], z6n$r1 = null, j4xu8k = bl2gva['length']; j4xu8k--;) {
        var r0nq = bl2gva[j4xu8k],
            kxct_ = r0nq['qName'],
            abem2 = r0nq['value'];if (0x0 < (t5hs9_ = kxct_['indexOf'](':'))) var i$w9h7 = r0nq['prefix'] = kxct_['slice'](0x0, t5hs9_),
            k_cxj = kxct_['slice'](t5hs9_ + 0x1),
            st95_c = 'xmlns' === i$w9h7 && k_cxj;else i$w9h7 = null, st95_c = 'xmlns' === (k_cxj = kxct_) && '';r0nq['localName'] = k_cxj, !0x1 !== st95_c && (null == z6n$r1 && (z6n$r1 = {}, mpbae2(u3epam, u3epam = {})), u3epam[st95_c] = z6n$r1[st95_c] = abem2, r0nq['uri'] = 'http://www.w3.org/2000/xmlns/', j4u8x['startPrefixMapping'](st95_c, abem2));
      }for (j4xu8k = bl2gva['length']; j4xu8k--;) {
        (i$w9h7 = (r0nq = bl2gva[j4xu8k])['prefix']) && ('xml' === i$w9h7 && (r0nq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== i$w9h7 && (r0nq['uri'] = u3epam[i$w9h7 || '']));
      }var t5hs9_;k_cxj = 0x0 < (t5hs9_ = j4x8uk['indexOf'](':')) ? (i$w9h7 = bl2gva['prefix'] = j4x8uk['slice'](0x0, t5hs9_), bl2gva['localName'] = j4x8uk['slice'](t5hs9_ + 0x1)) : (i$w9h7 = null, bl2gva['localName'] = j4x8uk);var ct = bl2gva['uri'] = u3epam[i$w9h7 || ''];if (j4u8x['startElement'](ct, k_cxj, j4x8uk, bl2gva), !bl2gva['closed']) return bl2gva['currentNSMap'] = u3epam, bl2gva['localNSMap'] = z6n$r1, 0x1;if (j4u8x['endElement'](ct, k_cxj, j4x8uk), z6n$r1) {
        for (i$w9h7 in z6n$r1) j4u8x['endPrefixMapping'](i$w9h7);
      }
    }function w$1hi(i17w, e38mu, i17wh, pbm, aumpe3) {
      if (/^(?:script|textarea)$/i['test'](i17wh)) {
        var mj8pu3 = i17w['indexOf']('</' + i17wh + '>', e38mu),
            is9t = i17w['substring'](e38mu + 0x1, mj8pu3);if (/[&<]/['test'](is9t)) return (/^script$/i['test'](i17wh) || (is9t = is9t['replace'](/&#?\w+;/g, pbm)), aumpe3['characters'](is9t, 0x0, is9t['length']), mj8pu3
        );
      }return e38mu + 0x1;
    }function rqnz06(_cst59, d0oyq, bevl, $1nw7i) {
      var ump3j8 = $1nw7i[bevl];return null == ump3j8 && ((ump3j8 = _cst59['lastIndexOf']('</' + bevl + '>')) < d0oyq && (ump3j8 = _cst59['lastIndexOf']('</' + bevl)), $1nw7i[bevl] = ump3j8), ump3j8 < d0oyq;
    }function mpbae2(rz$6n1, mba2el) {
      for (var ea2ml in rz$6n1) mba2el[ea2ml] = rz$6n1[ea2ml];
    }function c48(sth9w5, r167, i$1w7n, eam3p) {
      switch (sth9w5['charAt'](r167 + 0x2)) {case '-':
          return '-' !== sth9w5['charAt'](r167 + 0x3) ? -0x1 : r167 < (sthw9 = sth9w5['indexOf']('-->', r167 + 0x4)) ? (i$1w7n['comment'](sth9w5, r167 + 0x4, sthw9 - r167 - 0x4), sthw9 + 0x3) : (eam3p['error']('Unclosed comment'), -0x1);default:
          if ('CDATA[' == sth9w5['substr'](r167 + 0x3, 0x6)) {
            var sthw9 = sth9w5['indexOf'](']]>', r167 + 0x9);return i$1w7n['startCDATA'](), i$1w7n['characters'](sth9w5, r167 + 0x9, sthw9 - r167 - 0x9), i$1w7n['endCDATA'](), sthw9 + 0x3;
          }var kcx_ = function (xct5, htsi9) {
            var nw7i1,
                xk48uj = [],
                zoqr06 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;zoqr06['lastIndex'] = htsi9, zoqr06['exec'](xct5);for (; nw7i1 = zoqr06['exec'](xct5);) if (xk48uj['push'](nw7i1), nw7i1[0x1]) return xk48uj;
          }(sth9w5, r167),
              $w1ni7 = kcx_['length'];if (0x1 < $w1ni7 && /!doctype/i['test'](kcx_[0x0][0x0])) {
            var sit9w = kcx_[0x1][0x0],
                cx5k_t = 0x3 < $w1ni7 && /^public$/i['test'](kcx_[0x2][0x0]) && kcx_[0x3][0x0],
                aeup = 0x4 < $w1ni7 && kcx_[0x4][0x0],
                lg2bv = kcx_[$w1ni7 - 0x1];return i$1w7n['startDTD'](sit9w, cx5k_t && cx5k_t['replace'](/^(['"])(.*?)\1$/, '$2'), aeup && aeup['replace'](/^(['"])(.*?)\1$/, '$2')), i$1w7n['endDTD'](), lg2bv['index'] + lg2bv[0x0]['length'];
          }}return -0x1;
    }function h9iswt(pae, lvag2b, ctsx_) {
      var lam2eb = pae['indexOf']('?>', lvag2b);if (lam2eb) {
        var q0or = pae['substring'](lvag2b, lam2eb)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (q0or) return q0or[0x0]['length'], (ctsx_['processingInstruction'](q0or[0x1], q0or[0x2]), lam2eb + 0x2);return -0x1;
      }return -0x1;
    }function bvlae2(pabe3m) {}evl2a['prototype'] = { 'parse': function (n1zr6$, uk843j, aue3mp) {
        var nz$1r = this['domBuilder'];nz$1r['startDocument'](), mpbae2(uk843j, uk843j = {}), function (zd0r, x_tsc, $1nr6z, _ctk5x, w$ni1) {
          function x4_cjk(j48cxk) {
            var n17wi = j48cxk['slice'](0x1, -0x1);return n17wi in $1nr6z ? $1nr6z[n17wi] : '#' === n17wi['charAt'](0x0) ? function ($7h1) {
              if (0xffff < $7h1) {
                var _xj4kc = 0xd800 + (($7h1 -= 0x10000) >> 0xa),
                    ap = 0xdc00 + (0x3ff & $7h1);return String['fromCharCode'](_xj4kc, ap);
              }return String['fromCharCode']($7h1);
            }(parseInt(n17wi['substr'](0x1)['replace']('x', '0x'))) : (w$ni1['error']('entity not found:' + j48cxk), j48cxk);
          }function _c45k(qzr0od) {
            if (zdoyq < qzr0od) {
              var k84j3 = zd0r['substring'](zdoyq, qzr0od)['replace'](/&#?\w+;/g, x4_cjk);i$7w1n && tk_x5(zdoyq), _ctk5x['characters'](k84j3, 0x0, qzr0od - zdoyq), zdoyq = qzr0od;
            }
          }function tk_x5(x_ct5s, shwt59) {
            for (; r6$1n7 <= x_ct5s && (shwt59 = pbe['exec'](zd0r));) ueap = shwt59['index'], r6$1n7 = ueap + shwt59[0x0]['length'], i$7w1n['lineNumber']++;i$7w1n['columnNumber'] = x_ct5s - ueap + 0x1;
          }var ueap = 0x0,
              r6$1n7 = 0x0,
              pbe = /.*(?:\r\n?|\n)|.*$/g,
              i$7w1n = _ctk5x['locator'],
              _ck45 = [{ 'currentNSMap': x_tsc }],
              epabm = {},
              zdoyq = 0x0;for (;;) {
            try {
              var z0oqdy = zd0r['indexOf']('<', zdoyq);if (z0oqdy < 0x0) {
                if (!zd0r['substr'](zdoyq)['match'](/^\s*$/)) {
                  var orq0z = _ctk5x['doc'],
                      wthsi = orq0z['createTextNode'](zd0r['substr'](zdoyq));orq0z['appendChild'](wthsi), _ctk5x['currentElement'] = wthsi;
                }return;
              }switch (zdoyq < z0oqdy && _c45k(z0oqdy), zd0r['charAt'](z0oqdy + 0x1)) {case '/':
                  var jxkc_ = zd0r['indexOf']('>', z0oqdy + 0x3),
                      uk4jx = zd0r['substring'](z0oqdy + 0x2, jxkc_),
                      pu843 = _ck45['pop']();jxkc_ < 0x0 ? (uk4jx = zd0r['substring'](z0oqdy + 0x2)['replace'](/[\s<].*/, ''), w$ni1['error']('end tag name: ' + uk4jx + ' is not complete:' + pu843['tagName']), jxkc_ = z0oqdy + 0x1 + uk4jx['length']) : uk4jx['match'](/\s</) && (uk4jx = uk4jx['replace'](/[\s<].*/, ''), w$ni1['error']('end tag name: ' + uk4jx + ' maybe not complete'), jxkc_ = z0oqdy + 0x1 + uk4jx['length']);var lebm2 = pu843['localNSMap'],
                      mpb3e = pu843['tagName'] == uk4jx;if (mpb3e || pu843['tagName'] && pu843['tagName']['toLowerCase']() == uk4jx['toLowerCase']()) {
                    if (_ctk5x['endElement'](pu843['uri'], pu843['localName'], uk4jx), lebm2) {
                      for (var aumep3 in lebm2) _ctk5x['endPrefixMapping'](aumep3);
                    }mpb3e || w$ni1['fatalError']('end tag name: ' + uk4jx + ' is not match the current start tagName:' + pu843['tagName']);
                  } else _ck45['push'](pu843);jxkc_++;break;case '?':
                  i$7w1n && tk_x5(z0oqdy), jxkc_ = h9iswt(zd0r, z0oqdy, _ctk5x);break;case '!':
                  i$7w1n && tk_x5(z0oqdy), jxkc_ = c48(zd0r, z0oqdy, _ctk5x, w$ni1);break;default:
                  i$7w1n && tk_x5(z0oqdy);var kc5_4x = new bvlae2(),
                      _ctx5s = _ck45[_ck45['length'] - 0x1]['currentNSMap'],
                      u83j = (jxkc_ = zq0rn6(zd0r, z0oqdy, kc5_4x, _ctx5s, x4_cjk, w$ni1), kc5_4x['length']);if (!kc5_4x['closed'] && rqnz06(zd0r, jxkc_, kc5_4x['tagName'], epabm) && (kc5_4x['closed'] = !0x0, $1nr6z['nbsp'] || w$ni1['warning']('unclosed xml attribute')), i$7w1n && u83j) {
                    for (var ukjx8 = whit(i$7w1n, {}), t9sc5 = 0x0; t9sc5 < u83j; t9sc5++) {
                      var zor0qd = kc5_4x[t9sc5];tk_x5(zor0qd['offset']), zor0qd['locator'] = whit(i$7w1n, {});
                    }_ctk5x['locator'] = ukjx8, wtih9s(kc5_4x, _ctk5x, _ctx5s) && _ck45['push'](kc5_4x), _ctk5x['locator'] = i$7w1n;
                  } else wtih9s(kc5_4x, _ctk5x, _ctx5s) && _ck45['push'](kc5_4x);'http://www.w3.org/1999/xhtml' !== kc5_4x['uri'] || kc5_4x['closed'] ? jxkc_++ : jxkc_ = w$1hi(zd0r, jxkc_, kc5_4x['tagName'], x4_cjk, _ctk5x);}
            } catch (th9_5) {
              w$ni1['error']('element parse error: ' + th9_5), jxkc_ = -0x1;
            }zdoyq < jxkc_ ? zdoyq = jxkc_ : _c45k(Math['max'](z0oqdy, zdoyq) + 0x1);
          }
        }(n1zr6$, uk843j, aue3mp, nz$1r, this['errorHandler']), nz$1r['endDocument']();
      } }, bvlae2['prototype'] = { 'setTagName': function (xj8u4) {
        if (!k45cx['test'](xj8u4)) throw new Error('invalid tagName:' + xj8u4);this['tagName'] = xj8u4;
      }, 'add': function (h97i$w, meab2p, xs_tc5) {
        if (!k45cx['test'](h97i$w)) throw new Error('invalid attribute:' + h97i$w);this[this['length']++] = { 'qName': h97i$w, 'value': meab2p, 'offset': xs_tc5 };
      }, 'length': 0x0, 'getLocalName': function (mup3e8) {
        return this[mup3e8]['localName'];
      }, 'getLocator': function (i7h1$w) {
        return this[i7h1$w]['locator'];
      }, 'getQName': function (_xst5c) {
        return this[_xst5c]['qName'];
      }, 'getURI': function (elba) {
        return this[elba]['uri'];
      }, 'getValue': function (bapm3) {
        return this[bapm3]['value'];
      } }, d0o['XMLReader'] = evl2a;
  }, {}], 0x17: [function (am2pe, q0oyz, bga2v) {
    'use strict';

    var o0zrqd = GameGlobal,
        iwn71$ = o0zrqd['__globalAdapter'] = {};Object['assign'](iwn71$, { 'init': function () {
        am2pe('./wrapper/builtin'), o0zrqd['DOMParser'] = am2pe('../../common/xmldoundefined-parser')['DOMParser'], am2pe('./wrapper/unify'), am2pe('./wrapper/fs-utils'), am2pe('../../common/remote-downloader'), am2pe('../../common/engine/globalAdapter'), am2pe('./wrapper/systemInfo');
      }, 'adaptEngine': function () {
        am2pe('../../common/engine'), am2pe('./wrapper/engine'), am2pe('./wrapper/sub-context-adapter');
      } });
  }, { '../../common/engine': 0xf, '../../common/engine/globalAdapter': 0xe, '../../common/remote-downloader': 0x11, '../../common/xmldoundefined-parser': 0x13, './wrapper/builtin': 0x2e, './wrapper/engine': 0x35, './wrapper/fs-utils': 0x37, './wrapper/sub-context-adapter': 0x1, './wrapper/systemInfo': 0x38, './wrapper/unify': 0x39 }], 0x18: [function (ck8xj, ujm8p3, e3u8pm) {
    'use strict';

    Object['defineProperty'](e3u8pm, '__esModule', { 'value': !0x0 }), e3u8pm['default'] = void 0x0;var zd0or,
        apeum3 = (zd0or = ck8xj('./HTMLAudioElement')) && zd0or['__esModule'] ? zd0or : { 'default': zd0or };function a2lb(pabme3) {
      return (a2lb = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (r1zn06) {
        return typeof r1zn06;
      } : function (empa3u) {
        return empa3u && 'function' == typeof Symbol && empa3u['constructor'] === Symbol && empa3u !== Symbol['prototype'] ? 'symbol' : typeof empa3u;
      })(pabme3);
    }function peb3am(nw$1i, z610) {
      for (var iwh1$7 = 0x0; iwh1$7 < z610['length']; iwh1$7++) {
        var c5s_ = z610[iwh1$7];c5s_['enumerable'] = c5s_['enumerable'] || !0x1, c5s_['configurable'] = !0x0, 'value' in c5s_ && (c5s_['writable'] = !0x0), Object['defineProperty'](nw$1i, c5s_['key'], c5s_);
      }
    }function albe2(lgv2b, st9_h, t5_s) {
      return (albe2 = 'undefined' != typeof Reflect && Reflect['get'] ? Reflect['get'] : function (bmeal, m3eu, ishwt9) {
        var m8ep = function (znr16, cjxk_4) {
          for (; !Object['prototype']['hasOwnProperty']['call'](znr16, cjxk_4) && null !== (znr16 = ag2lb(znr16)););return znr16;
        }(bmeal, m3eu);if (m8ep) {
          var v2l = Object['getOwnPropertyDescriptor'](m8ep, m3eu);return v2l['get'] ? v2l['get']['call'](ishwt9) : v2l['value'];
        }
      })(lgv2b, st9_h, t5_s || lgv2b);
    }function bpmae2(ujxk48) {
      return function () {
        var pba3m,
            s_9h5,
            qdy0oz,
            e2balm = ag2lb(ujxk48);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (nwi7$1) {
            return;
          }
        }()) {
          var jkx84c = ag2lb(this)['constructor'];pba3m = Reflect['construct'](e2balm, arguments, jkx84c);
        } else pba3m = e2balm['apply'](this, arguments);return s_9h5 = this, !(qdy0oz = pba3m) || 'object' !== a2lb(qdy0oz) && 'function' != typeof qdy0oz ? function (uk34j8) {
          if (void 0x0 !== uk34j8) return uk34j8;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(s_9h5) : qdy0oz;
      };
    }function ag2lb(jpu34) {
      return (ag2lb = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (pemu38) {
        return pemu38['__proto__'] || Object['getPrototypeOf'](pemu38);
      })(jpu34);
    }function his7w9(wi$7n1, ua3) {
      return (his7w9 = Object['setPrototypeOf'] || function (s95_ct, zdo0qy) {
        return s95_ct['__proto__'] = zdo0qy, s95_ct;
      })(wi$7n1, ua3);
    }var mealb2 = 0x1,
        rz0oq6 = {},
        eapb3 = function () {
      !function (c4_jx, el2bv) {
        if ('function' != typeof el2bv && null !== el2bv) throw new TypeError('Super expression must either be null or a function');c4_jx['prototype'] = Object['create'](el2bv && el2bv['prototype'], { 'constructor': { 'value': c4_jx, 'writable': !0x0, 'configurable': !0x0 } }), el2bv && his7w9(c4_jx, el2bv);
      }(kujx84, apeum3['default']);var $iwh7,
          av2bl,
          meb2a,
          w79hs = bpmae2(kujx84);function kujx84(rn617$) {
        var v2ga;!function (n6$7r, in716) {
          if (!(n6$7r instanceof in716)) throw new TypeError('Cannot call a class as a function');
        }(this, kujx84), (v2ga = w79hs['call'](this))['_$sn'] = mealb2++, v2ga['HAVE_NOTHING'] = 0x0, v2ga['HAVE_METADATA'] = 0x1, v2ga['HAVE_CURRENT_DATA'] = 0x2, v2ga['HAVE_FUTURE_DATA'] = 0x3, v2ga['HAVE_ENOUGH_DATA'] = 0x4, v2ga['readyState'] = 0x0;var i79 = wx['createInnerAudioContext']();return rz0oq6[v2ga['_$sn']] = i79, v2ga['_canplayEvents'] = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'], i79['onCanplay'](function () {
          v2ga['_loaded'] = !0x0, v2ga['readyState'] = v2ga['HAVE_CURRENT_DATA'], v2ga['_canplayEvents']['forEach'](function (vlabe2) {
            v2ga['dispatchEvent']({ 'type': vlabe2 });
          });
        }), i79['onPlay'](function () {
          v2ga['_paused'] = rz0oq6[v2ga['_$sn']]['paused'], v2ga['dispatchEvent']({ 'type': 'play' });
        }), i79['onPause'](function () {
          v2ga['_paused'] = rz0oq6[v2ga['_$sn']]['paused'], v2ga['dispatchEvent']({ 'type': 'pause' });
        }), i79['onEnded'](function () {
          v2ga['_paused'] = rz0oq6[v2ga['_$sn']]['paused'], !0x1 === rz0oq6[v2ga['_$sn']]['loop'] && v2ga['dispatchEvent']({ 'type': 'ended' }), v2ga['readyState'] = 0x4;
        }), i79['onError'](function () {
          v2ga['_paused'] = rz0oq6[v2ga['_$sn']]['paused'], v2ga['dispatchEvent']({ 'type': 'error' });
        }), rn617$ ? v2ga['src'] = rn617$ : v2ga['_src'] = '', v2ga['_loop'] = i79['loop'], v2ga['_autoplay'] = i79['autoplay'], v2ga['_paused'] = i79['paused'], v2ga['_volume'] = i79['volume'], v2ga['_muted'] = !0x1, v2ga;
      }return $iwh7 = kujx84, (av2bl = [{ 'key': 'addEventListener', 'value': function (_ktx5c, $i1hw, pb2ema) {
          var c_xk5t = 0x2 < arguments['length'] && void 0x0 !== pb2ema ? pb2ema : {};albe2(ag2lb(kujx84['prototype']), 'addEventListener', this)['call'](this, _ktx5c, $i1hw, c_xk5t), _ktx5c = String(_ktx5c)['toLowerCase'](), this['_loaded'] && -0x1 !== this['_canplayEvents']['indexOf'](_ktx5c) && this['dispatchEvent']({ 'type': _ktx5c });
        } }, { 'key': 'load', 'value': function () {} }, { 'key': 'play', 'value': function () {
          rz0oq6[this['_$sn']]['play']();
        } }, { 'key': 'resume', 'value': function () {
          rz0oq6[this['_$sn']]['resume']();
        } }, { 'key': 'pause', 'value': function () {
          rz0oq6[this['_$sn']]['pause']();
        } }, { 'key': 'stop', 'value': function () {
          rz0oq6[this['_$sn']]['stop']();
        } }, { 'key': 'destroy', 'value': function () {
          rz0oq6[this['_$sn']]['destroy']();
        } }, { 'key': 'canPlayType', 'value': function (st5h9w) {
          var wst5h = 0x0 < arguments['length'] && void 0x0 !== st5h9w ? st5h9w : '';return 'string' == typeof wst5h && (-0x1 < wst5h['indexOf']('audio/mpeg') || wst5h['indexOf']('audio/mp4')) ? 'probably' : '';
        } }, { 'key': 'cloneNode', 'value': function () {
          var drzq0 = new kujx84();return drzq0['loop'] = this['loop'], drzq0['autoplay'] = this['autoplay'], drzq0['src'] = this['src'], drzq0;
        } }, { 'key': 'currentTime', 'get': function () {
          return rz0oq6[this['_$sn']]['currentTime'];
        }, 'set': function (mpuae3) {
          rz0oq6[this['_$sn']]['seek'](mpuae3);
        } }, { 'key': 'duration', 'get': function () {
          return rz0oq6[this['_$sn']]['duration'];
        } }, { 'key': 'src', 'get': function () {
          return this['_src'];
        }, 'set': function (o0q6r) {
          this['_src'] = o0q6r, this['_loaded'] = !0x1, this['readyState'] = this['HAVE_NOTHING'], rz0oq6[this['_$sn']]['src'] = o0q6r;
        } }, { 'key': 'loop', 'get': function () {
          return this['_loop'];
        }, 'set': function (stwhi9) {
          this['_loop'] = stwhi9, rz0oq6[this['_$sn']]['loop'] = stwhi9;
        } }, { 'key': 'autoplay', 'get': function () {
          return this['autoplay'];
        }, 'set': function (_jx4kc) {
          this['_autoplay'] = _jx4kc, rz0oq6[this['_$sn']]['autoplay'] = _jx4kc;
        } }, { 'key': 'paused', 'get': function () {
          return this['_paused'];
        } }, { 'key': 'volume', 'get': function () {
          return this['_volume'];
        }, 'set': function (hwsti) {
          this['_volume'] = hwsti, this['_muted'] || (rz0oq6[this['_$sn']]['volume'] = hwsti);
        } }, { 'key': 'muted', 'get': function () {
          return this['_muted'];
        }, 'set': function (tk_5x) {
          this['_muted'] = tk_5x, rz0oq6[this['_$sn']]['volume'] = tk_5x ? 0x0 : this['_volume'];
        } }]) && peb3am($iwh7['prototype'], av2bl), meb2a && peb3am($iwh7, meb2a), kujx84;
    }();e3u8pm['default'] = eapb3, ujm8p3['exports'] = e3u8pm['default'];
  }, { './HTMLAudioElement': 0x20 }], 0x19: [function (k83ju4, u8me, nr60qz) {
    'use strict';

    Object['defineProperty'](nr60qz, '__esModule', { 'value': !0x0 }), nr60qz['default'] = function () {
      var _xtk5 = wx['createCanvas']();return _xtk5['type'] = 'canvas', _xtk5['getContext'], (_xtk5['getBoundingClientRect'] = function () {
        return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
      }, _xtk5['style'] = { 'top': '0px', 'left': '0px', 'width': i1w['innerWidth'] + 'px', 'height': i1w['innerHeight'] + 'px' }, _xtk5['addEventListener'] = function (h9st, s9h5w) {
        var gbval2 = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {};document['addEventListener'](h9st, s9h5w, gbval2);
      }, _xtk5['removeEventListener'] = function (j43uk, xstc5_) {
        document['removeEventListener'](j43uk, xstc5_);
      }, _xtk5['dispatchEvent'] = function () {
        var uaem3p = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {};console['log']('canvas.dispatchEvent', uaem3p['type'], uaem3p);
      }, Object['defineProperty'](_xtk5, 'clientWidth', { 'enumerable': !0x0, 'get': function () {
          return i1w['innerWidth'];
        } }), Object['defineProperty'](_xtk5, 'clientHeight', { 'enumerable': !0x0, 'get': function () {
          return i1w['innerHeight'];
        } }), _xtk5);
    };var i1w = k83ju4('./WindowProperties');u8me['exports'] = nr60qz['default'];
  }, { './WindowProperties': 0x2b }], 0x1a: [function (juk43, x8u4k, k54_cx) {
    'use strict';

    Object['defineProperty'](k54_cx, '__esModule', { 'value': !0x0 }), k54_cx['default'] = void 0x0;var meup38,
        _5t9c = (meup38 = juk43('./Node')) && meup38['__esModule'] ? meup38 : { 'default': meup38 };function n$6(iwh79s) {
      return (n$6 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (be2) {
        return typeof be2;
      } : function ($i71n6) {
        return $i71n6 && 'function' == typeof Symbol && $i71n6['constructor'] === Symbol && $i71n6 !== Symbol['prototype'] ? 'symbol' : typeof $i71n6;
      })(iwh79s);
    }function e3bamp(yzo0dq) {
      return function () {
        var am2epb,
            eb3amp,
            $97ih,
            rz6nq = k_cj4(yzo0dq);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (s9hit) {
            return;
          }
        }()) {
          var bal2em = k_cj4(this)['constructor'];am2epb = Reflect['construct'](rz6nq, arguments, bal2em);
        } else am2epb = rz6nq['apply'](this, arguments);return eb3amp = this, !($97ih = am2epb) || 'object' !== n$6($97ih) && 'function' != typeof $97ih ? function (puj384) {
          if (void 0x0 !== puj384) return puj384;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(eb3amp) : $97ih;
      };
    }function k_cj4(puaem) {
      return (k_cj4 = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (pam3) {
        return pam3['__proto__'] || Object['getPrototypeOf'](pam3);
      })(puaem);
    }function qr0n6z(s5_h, _k4c5x) {
      return (qr0n6z = Object['setPrototypeOf'] || function (nz1r06, juk8) {
        return nz1r06['__proto__'] = juk8, nz1r06;
      })(s5_h, _k4c5x);
    }var val2eb = function () {
      !function (twi9hs, uj84xk) {
        if ('function' != typeof uj84xk && null !== uj84xk) throw new TypeError('Super expression must either be null or a function');twi9hs['prototype'] = Object['create'](uj84xk && uj84xk['prototype'], { 'constructor': { 'value': twi9hs, 'writable': !0x0, 'configurable': !0x0 } }), uj84xk && qr0n6z(twi9hs, uj84xk);
      }(amue3, _5t9c['default']);var p2mbae = e3bamp(amue3);function amue3() {
        var $79iwh;return function ($r6nz, rodqz0) {
          if (!($r6nz instanceof rodqz0)) throw new TypeError('Cannot call a class as a function');
        }(this, amue3), ($79iwh = p2mbae['call'](this))['className'] = '', $79iwh['children'] = [], $79iwh;
      }return amue3;
    }();k54_cx['default'] = val2eb, x8u4k['exports'] = k54_cx['default'];
  }, { './Node': 0x28 }], 0x1b: [function (rn$17, zd0yq, c_k54x) {
    'use strict';

    Object['defineProperty'](c_k54x, '__esModule', { 'value': !0x0 }), c_k54x['default'] = void 0x0, (c_k54x['default'] = function jxk84c() {
      !function ($9whi, w17ih$) {
        if (!($9whi instanceof w17ih$)) throw new TypeError('Cannot call a class as a function');
      }(this, jxk84c);
    }, zd0yq['exports'] = c_k54x['default']);
  }, {}], 0x1c: [function (cxj_, c9s5_t, yqozd0) {
    'use strict';

    Object['defineProperty'](yqozd0, '__esModule', { 'value': !0x0 }), yqozd0['default'] = void 0x0;var cst_ = cxj_('../util/index.js');function rz0q(n1i7w$) {
      !function (sw95th, xt_5) {
        if (!(sw95th instanceof xt_5)) throw new TypeError('Cannot call a class as a function');
      }(this, rz0q), this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = cst_['noop'], this['stopPropagation'] = cst_['noop'], this['type'] = n1i7w$, this['target'] = window['canvas'], this['currentTarget'] = window['canvas'];
    }function upm38j(lagv2) {
      return function (ts95hw) {
        var j8u4p = new rz0q(lagv2);j8u4p['touches'] = ts95hw['touches'], j8u4p['targetTouches'] = Array['prototype']['slice']['call'](ts95hw['touches']), j8u4p['changedTouches'] = ts95hw['changedTouches'], j8u4p['timeStamp'] = ts95hw['timeStamp'], document['dispatchEvent'](j8u4p);
      };
    }yqozd0['default'] = rz0q, wx['onTouchStart'](upm38j('touchstart')), wx['onTouchMove'](upm38j('touchmove')), wx['onTouchEnd'](upm38j('touchend')), wx['onTouchCancel'](upm38j('touchcancel')), c9s5_t['exports'] = yqozd0['default'];
  }, { '../util/index.js': 0x32 }], 0x1d: [function (u8jp3, em83p, n$w1i) {
    'use strict';

    Object['defineProperty'](n$w1i, '__esModule', { 'value': !0x0 }), Object['defineProperty'](n$w1i, 'TouchEvent', { 'enumerable': !0x0, 'get': function () {
        return b2p['default'];
      } }), Object['defineProperty'](n$w1i, 'MouseEvent', { 'enumerable': !0x0, 'get': function () {
        return $1inw7['default'];
      } });var b2p = t95sh(u8jp3('./TouchEvent')),
        $1inw7 = t95sh(u8jp3('./MouseEvent'));function t95sh(pebma3) {
      return pebma3 && pebma3['__esModule'] ? pebma3 : { 'default': pebma3 };
    }
  }, { './MouseEvent': 0x1b, './TouchEvent': 0x1c }], 0x1e: [function (kcj84, sw9t5h, _cj4kx) {
    'use strict';

    function ux(u4j83p, n1z6$r) {
      for (var shi9w = 0x0; shi9w < n1z6$r['length']; shi9w++) {
        var lvg2b = n1z6$r[shi9w];lvg2b['enumerable'] = lvg2b['enumerable'] || !0x1, lvg2b['configurable'] = !0x0, 'value' in lvg2b && (lvg2b['writable'] = !0x0), Object['defineProperty'](u4j83p, lvg2b['key'], lvg2b);
      }
    }Object['defineProperty'](_cj4kx, '__esModule', { 'value': !0x0 }), _cj4kx['default'] = void 0x0;var z1r$ = new WeakMap(),
        txk5_ = function () {
      function bme3a() {
        !function (k4j3u8, i$6) {
          if (!(k4j3u8 instanceof i$6)) throw new TypeError('Cannot call a class as a function');
        }(this, bme3a), z1r$['set'](this, {});
      }var iw$17h, ck_5, ae2lv;return iw$17h = bme3a, (ck_5 = [{ 'key': 'addEventListener', 'value': function (whi9ts, dy0qoz, h7$1wi) {
          var _h5t9s = 0x2 < arguments['length'] && void 0x0 !== h7$1wi ? h7$1wi : {},
              ba2g = z1r$['get'](this);ba2g || (ba2g = {}, z1r$['set'](this, ba2g)), ba2g[whi9ts] || (ba2g[whi9ts] = []), ba2g[whi9ts]['push'](dy0qoz), _h5t9s['capture'], _h5t9s['once'], _h5t9s['passive'];
        } }, { 'key': 'removeEventListener', 'value': function (_scx5, bvagl) {
          var iw1h7$ = z1r$['get'](this);if (iw1h7$) {
            var pu3me8 = iw1h7$[_scx5];if (pu3me8 && 0x0 < pu3me8['length']) {
              for (var cst59 = pu3me8['length']; cst59--;) if (pu3me8[cst59] === bvagl) {
                pu3me8['splice'](cst59, 0x1);break;
              }
            }
          }
        } }, { 'key': 'dispatchEvent', 'value': function (oy0zqd) {
          var umj3p8 = 0x0 < arguments['length'] && void 0x0 !== oy0zqd ? oy0zqd : {},
              mebp3 = z1r$['get'](this)[umj3p8['type']];if (mebp3) {
            for (var $67nr = 0x0; $67nr < mebp3['length']; $67nr++) mebp3[$67nr](umj3p8);
          }
        } }]) && ux(iw$17h['prototype'], ck_5), ae2lv && ux(iw$17h, ae2lv), bme3a;
    }();_cj4kx['default'] = txk5_, sw9t5h['exports'] = _cj4kx['default'];
  }, {}], 0x1f: [function (dr0zo, tk, h9iwt) {
    'use strict';

    function $761r(n1$iw, muap) {
      for (var ebal2 = 0x0; ebal2 < muap['length']; ebal2++) {
        var $71nr = muap[ebal2];$71nr['enumerable'] = $71nr['enumerable'] || !0x1, $71nr['configurable'] = !0x0, 'value' in $71nr && ($71nr['writable'] = !0x0), Object['defineProperty'](n1$iw, $71nr['key'], $71nr);
      }
    }Object['defineProperty'](h9iwt, '__esModule', { 'value': !0x0 }), h9iwt['default'] = void 0x0;var n$z1r = function () {
      function xk4u8() {
        !function (xkc54_, $167i) {
          if (!(xkc54_ instanceof $167i)) throw new TypeError('Cannot call a class as a function');
        }(this, xk4u8);
      }var e3pmba, is79hw, _jxk;return e3pmba = xk4u8, (is79hw = [{ 'key': 'construct', 'value': function () {} }]) && $761r(e3pmba['prototype'], is79hw), _jxk && $761r(e3pmba, _jxk), xk4u8;
    }();h9iwt['default'] = n$z1r, tk['exports'] = h9iwt['default'];
  }, {}], 0x20: [function (c4x8kj, _kxt5, x5c_4k) {
    'use strict';

    Object['defineProperty'](x5c_4k, '__esModule', { 'value': !0x0 }), x5c_4k['default'] = void 0x0;var ujx84,
        n6rz$1 = (ujx84 = c4x8kj('./HTMLMediaElement')) && ujx84['__esModule'] ? ujx84 : { 'default': ujx84 };function k_4c(oyd0z) {
      return (k_4c = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (ro6z0) {
        return typeof ro6z0;
      } : function (twhi) {
        return twhi && 'function' == typeof Symbol && twhi['constructor'] === Symbol && twhi !== Symbol['prototype'] ? 'symbol' : typeof twhi;
      })(oyd0z);
    }function k3j84(hs95) {
      return function () {
        var yq0odz,
            bpm,
            rn$716,
            zrn106 = oqdyz(hs95);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (p2emb) {
            return;
          }
        }()) {
          var j4up = oqdyz(this)['constructor'];yq0odz = Reflect['construct'](zrn106, arguments, j4up);
        } else yq0odz = zrn106['apply'](this, arguments);return bpm = this, !(rn$716 = yq0odz) || 'object' !== k_4c(rn$716) && 'function' != typeof rn$716 ? function (ujx8k) {
          if (void 0x0 !== ujx8k) return ujx8k;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(bpm) : rn$716;
      };
    }function oqdyz(cts_95) {
      return (oqdyz = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (_cktx) {
        return _cktx['__proto__'] || Object['getPrototypeOf'](_cktx);
      })(cts_95);
    }function ck_xj(upj8m3, _45x) {
      return (ck_xj = Object['setPrototypeOf'] || function (x45c_k, k4ujx) {
        return x45c_k['__proto__'] = k4ujx, x45c_k;
      })(upj8m3, _45x);
    }var euapm = function () {
      !function (ck_, w9th) {
        if ('function' != typeof w9th && null !== w9th) throw new TypeError('Super expression must either be null or a function');ck_['prototype'] = Object['create'](w9th && w9th['prototype'], { 'constructor': { 'value': ck_, 'writable': !0x0, 'configurable': !0x0 } }), w9th && ck_xj(ck_, w9th);
      }(pu3em8, n6rz$1['default']);var k4jux = k3j84(pu3em8);function pu3em8() {
        return function (pmu3ea, r6zqn) {
          if (!(pmu3ea instanceof r6zqn)) throw new TypeError('Cannot call a class as a function');
        }(this, pu3em8), k4jux['call'](this, 'audio');
      }return pu3em8;
    }();x5c_4k['default'] = euapm, _kxt5['exports'] = x5c_4k['default'];
  }, { './HTMLMediaElement': 0x24 }], 0x21: [function (ctx5s, lmb2, qz0oyd) {
    'use strict';

    Object['defineProperty'](qz0oyd, '__esModule', { 'value': !0x0 }), qz0oyd['default'] = void 0x0;var h5t9s_ = k5c_t(ctx5s('./Canvas'));k5c_t(ctx5s('./HTMLElement'));function k5c_t(upm3ae) {
      return upm3ae && upm3ae['__esModule'] ? upm3ae : { 'default': upm3ae };
    }GameGlobal['screencanvas'] = GameGlobal['screencanvas'] || new h5t9s_['default']();var ju348 = GameGlobal['screencanvas']['constructor'];qz0oyd['default'] = ju348, lmb2['exports'] = qz0oyd['default'];
  }, { './Canvas': 0x19, './HTMLElement': 0x22 }], 0x22: [function (m8epu3, tc_k5, tw59s) {
    'use strict';

    Object['defineProperty'](tw59s, '__esModule', { 'value': !0x0 }), tw59s['default'] = void 0x0;var dz0qoy,
        s_95ht = (dz0qoy = m8epu3('./Element')) && dz0qoy['__esModule'] ? dz0qoy : { 'default': dz0qoy },
        abem3p = m8epu3('./util/index.js'),
        _54xck = m8epu3('./WindowProperties');function b2mpea(bglv) {
      return (b2mpea = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (h7i9w) {
        return typeof h7i9w;
      } : function (e38mpu) {
        return e38mpu && 'function' == typeof Symbol && e38mpu['constructor'] === Symbol && e38mpu !== Symbol['prototype'] ? 'symbol' : typeof e38mpu;
      })(bglv);
    }function y0zqo(_x5ctk, iw71) {
      for (var tk5_xc = 0x0; tk5_xc < iw71['length']; tk5_xc++) {
        var u4pj83 = iw71[tk5_xc];u4pj83['enumerable'] = u4pj83['enumerable'] || !0x1, u4pj83['configurable'] = !0x0, 'value' in u4pj83 && (u4pj83['writable'] = !0x0), Object['defineProperty'](_x5ctk, u4pj83['key'], u4pj83);
      }
    }function $i716n(u38k) {
      return function () {
        var q0zoy,
            bvlea,
            hw95st,
            qor6 = v2albg(u38k);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (ts9hw) {
            return;
          }
        }()) {
          var bvea = v2albg(this)['constructor'];q0zoy = Reflect['construct'](qor6, arguments, bvea);
        } else q0zoy = qor6['apply'](this, arguments);return bvlea = this, !(hw95st = q0zoy) || 'object' !== b2mpea(hw95st) && 'function' != typeof hw95st ? function (h1$) {
          if (void 0x0 !== h1$) return h1$;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(bvlea) : hw95st;
      };
    }function v2albg(w9hs5) {
      return (v2albg = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (z60rqn) {
        return z60rqn['__proto__'] || Object['getPrototypeOf'](z60rqn);
      })(w9hs5);
    }function q06rzo(i17n6$, i9$hw7) {
      return (q06rzo = Object['setPrototypeOf'] || function (t9_5cs, ag) {
        return t9_5cs['__proto__'] = ag, t9_5cs;
      })(i17n6$, i9$hw7);
    }var mlbe2 = function () {
      !function (x54k, veb2l) {
        if ('function' != typeof veb2l && null !== veb2l) throw new TypeError('Super expression must either be null or a function');x54k['prototype'] = Object['create'](veb2l && veb2l['prototype'], { 'constructor': { 'value': x54k, 'writable': !0x0, 'configurable': !0x0 } }), veb2l && q06rzo(x54k, veb2l);
      }(whi71, s_95ht['default']);var s9_ct,
          u3jmp8,
          n6zr,
          w$79ih = $i716n(whi71);function whi71() {
        var i$97hw,
            zo0r6 = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return function (p83jum, b2pam) {
          if (!(p83jum instanceof b2pam)) throw new TypeError('Cannot call a class as a function');
        }(this, whi71), (i$97hw = w$79ih['call'](this))['className'] = '', i$97hw['childern'] = [], i$97hw['style'] = { 'width': ''['concat'](_54xck['innerWidth'], 'px'), 'height': ''['concat'](_54xck['innerHeight'], 'px') }, i$97hw['insertBefore'] = abem3p['noop'], i$97hw['innerHTML'] = '', i$97hw['tagName'] = zo0r6['toUpperCase'](), i$97hw;
      }return s9_ct = whi71, (u3jmp8 = [{ 'key': 'setAttribute', 'value': function (l2bgav, x4c8jk) {
          this[l2bgav] = x4c8jk;
        } }, { 'key': 'getAttribute', 'value': function (kjx8c) {
          return this[kjx8c];
        } }, { 'key': 'getBoundingClientRect', 'value': function () {
          return { 'top': 0x0, 'left': 0x0, 'width': _54xck['innerWidth'], 'height': _54xck['innerHeight'] };
        } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
          var x8j = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](x8j) ? 0x0 : x8j;
        } }, { 'key': 'clientHeight', 'get': function () {
          var wi7hs = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](wi7hs) ? 0x0 : wi7hs;
        } }]) && y0zqo(s9_ct['prototype'], u3jmp8), n6zr && y0zqo(s9_ct, n6zr), whi71;
    }();tw59s['default'] = mlbe2, tc_k5['exports'] = tw59s['default'];
  }, { './Element': 0x1a, './WindowProperties': 0x2b, './util/index.js': 0x32 }], 0x23: [function (_5h9, j4xkc_, ue3) {
    'use strict';

    Object['defineProperty'](ue3, '__esModule', { 'value': !0x0 }), ue3['default'] = void 0x0;var ae2mbl;(ae2mbl = _5h9('./HTMLElement')) && ae2mbl['__esModule'];var dqo0 = wx['createImage']()['constructor'];ue3['default'] = dqo0, j4xkc_['exports'] = ue3['default'];
  }, { './HTMLElement': 0x22 }], 0x24: [function (qrz6o, k4j_, pa) {
    'use strict';

    Object['defineProperty'](pa, '__esModule', { 'value': !0x0 }), pa['default'] = void 0x0;var hswt59,
        hw7$i = (hswt59 = qrz6o('./HTMLElement')) && hswt59['__esModule'] ? hswt59 : { 'default': hswt59 };function s9c_(pm3abe) {
      return (s9c_ = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (kx5_tc) {
        return typeof kx5_tc;
      } : function (ebpa3m) {
        return ebpa3m && 'function' == typeof Symbol && ebpa3m['constructor'] === Symbol && ebpa3m !== Symbol['prototype'] ? 'symbol' : typeof ebpa3m;
      })(pm3abe);
    }function c4xk_5(veab2, s_xtc) {
      for (var _t9s5h = 0x0; _t9s5h < s_xtc['length']; _t9s5h++) {
        var bav2l = s_xtc[_t9s5h];bav2l['enumerable'] = bav2l['enumerable'] || !0x1, bav2l['configurable'] = !0x0, 'value' in bav2l && (bav2l['writable'] = !0x0), Object['defineProperty'](veab2, bav2l['key'], bav2l);
      }
    }function rzqdo(xt_c5) {
      return function () {
        var $7w9hi,
            mupj83,
            yodz0,
            zqr0od = _cs5x(xt_c5);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (ydqoz) {
            return;
          }
        }()) {
          var j843ku = _cs5x(this)['constructor'];$7w9hi = Reflect['construct'](zqr0od, arguments, j843ku);
        } else $7w9hi = zqr0od['apply'](this, arguments);return mupj83 = this, !(yodz0 = $7w9hi) || 'object' !== s9c_(yodz0) && 'function' != typeof yodz0 ? function (j83m) {
          if (void 0x0 !== j83m) return j83m;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(mupj83) : yodz0;
      };
    }function _cs5x(x5_k4) {
      return (_cs5x = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (ea2lv) {
        return ea2lv['__proto__'] || Object['getPrototypeOf'](ea2lv);
      })(x5_k4);
    }function $w71ih(n6r, w95sth) {
      return ($w71ih = Object['setPrototypeOf'] || function (p2ae, xjc4k_) {
        return p2ae['__proto__'] = xjc4k_, p2ae;
      })(n6r, w95sth);
    }var n7 = function () {
      !function (ameb3, zoq0r6) {
        if ('function' != typeof zoq0r6 && null !== zoq0r6) throw new TypeError('Super expression must either be null or a function');ameb3['prototype'] = Object['create'](zoq0r6 && zoq0r6['prototype'], { 'constructor': { 'value': ameb3, 'writable': !0x0, 'configurable': !0x0 } }), zoq0r6 && $w71ih(ameb3, zoq0r6);
      }(aeblv2, hw7$i['default']);var p3umae,
          ct5k,
          q0odzr,
          mu3pea = rzqdo(aeblv2);function aeblv2(mpba3) {
        return function (_c4k5x, p4u38) {
          if (!(_c4k5x instanceof p4u38)) throw new TypeError('Cannot call a class as a function');
        }(this, aeblv2), mu3pea['call'](this, mpba3);
      }return p3umae = aeblv2, (ct5k = [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]) && c4xk_5(p3umae['prototype'], ct5k), q0odzr && c4xk_5(p3umae, q0odzr), aeblv2;
    }();pa['default'] = n7, k4j_['exports'] = pa['default'];
  }, { './HTMLElement': 0x22 }], 0x25: [function (shw9t, ydq0, zr6oq) {
    'use strict';

    Object['defineProperty'](zr6oq, '__esModule', { 'value': !0x0 }), zr6oq['default'] = void 0x0;var z$,
        n61r7 = (z$ = shw9t('./HTMLMediaElement')) && z$['__esModule'] ? z$ : { 'default': z$ };function upj84($n71) {
      return (upj84 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (u4pj38) {
        return typeof u4pj38;
      } : function (xu8jk4) {
        return xu8jk4 && 'function' == typeof Symbol && xu8jk4['constructor'] === Symbol && xu8jk4 !== Symbol['prototype'] ? 'symbol' : typeof xu8jk4;
      })($n71);
    }function z1r$6n(mpa3be) {
      return function () {
        var _9tsc,
            m8ue,
            pe8m3u,
            dqyo0 = pab3m(mpa3be);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (q0zo) {
            return;
          }
        }()) {
          var _c59s = pab3m(this)['constructor'];_9tsc = Reflect['construct'](dqyo0, arguments, _c59s);
        } else _9tsc = dqyo0['apply'](this, arguments);return m8ue = this, !(pe8m3u = _9tsc) || 'object' !== upj84(pe8m3u) && 'function' != typeof pe8m3u ? function (cs_9t) {
          if (void 0x0 !== cs_9t) return cs_9t;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(m8ue) : pe8m3u;
      };
    }function pab3m(zoqyd0) {
      return (pab3m = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (mu38jp) {
        return mu38jp['__proto__'] || Object['getPrototypeOf'](mu38jp);
      })(zoqyd0);
    }function uaepm3(cx54k, rz16) {
      return (uaepm3 = Object['setPrototypeOf'] || function (cxk4_, ujp8m3) {
        return cxk4_['__proto__'] = ujp8m3, cxk4_;
      })(cx54k, rz16);
    }var c5s_xt = function () {
      !function (s_xc, hi1w7) {
        if ('function' != typeof hi1w7 && null !== hi1w7) throw new TypeError('Super expression must either be null or a function');s_xc['prototype'] = Object['create'](hi1w7 && hi1w7['prototype'], { 'constructor': { 'value': s_xc, 'writable': !0x0, 'configurable': !0x0 } }), hi1w7 && uaepm3(s_xc, hi1w7);
      }(h7w$1, n61r7['default']);var wh9ti = z1r$6n(h7w$1);function h7w$1() {
        return function (r06n, i9h7w$) {
          if (!(r06n instanceof i9h7w$)) throw new TypeError('Cannot call a class as a function');
        }(this, h7w$1), wh9ti['call'](this, 'video');
      }return h7w$1;
    }();zr6oq['default'] = c5s_xt, ydq0['exports'] = zr6oq['default'];
  }, { './HTMLMediaElement': 0x24 }], 0x26: [function (rzn0q6, _9t5, lm2aeb) {
    'use strict';

    Object['defineProperty'](lm2aeb, '__esModule', { 'value': !0x0 }), lm2aeb['default'] = function () {
      return wx['createImage']();
    };var hwi1$;(hwi1$ = rzn0q6('./HTMLImageElement')) && hwi1$['__esModule'], _9t5['exports'] = lm2aeb['default'];
  }, { './HTMLImageElement': 0x23 }], 0x27: [function (bpam2e, epu83m, c4xj8) {
    'use strict';

    Object['defineProperty'](c4xj8, '__esModule', { 'value': !0x0 }), c4xj8['default'] = void 0x0, (c4xj8['default'] = function h9_s5() {
      !function (z0oyqd, i1w$7) {
        if (!(z0oyqd instanceof i1w$7)) throw new TypeError('Cannot call a class as a function');
      }(this, h9_s5);
    }, epu83m['exports'] = c4xj8['default']);
  }, {}], 0x28: [function (ma3pb, mp3j, c_kjx) {
    'use strict';

    Object['defineProperty'](c_kjx, '__esModule', { 'value': !0x0 }), c_kjx['default'] = void 0x0;var pau,
        $rn17 = (pau = ma3pb('./EventTarget.js')) && pau['__esModule'] ? pau : { 'default': pau };function ebml(j8xkc4) {
      return (ebml = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (l2ebam) {
        return typeof l2ebam;
      } : function (kj83u4) {
        return kj83u4 && 'function' == typeof Symbol && kj83u4['constructor'] === Symbol && kj83u4 !== Symbol['prototype'] ? 'symbol' : typeof kj83u4;
      })(j8xkc4);
    }function m2abpe(u48kx, r1$67n) {
      for (var _xk4 = 0x0; _xk4 < r1$67n['length']; _xk4++) {
        var tsc9_ = r1$67n[_xk4];tsc9_['enumerable'] = tsc9_['enumerable'] || !0x1, tsc9_['configurable'] = !0x0, 'value' in tsc9_ && (tsc9_['writable'] = !0x0), Object['defineProperty'](u48kx, tsc9_['key'], tsc9_);
      }
    }function bl2vae($n167r) {
      return function () {
        var c_jkx4,
            si,
            o0rqdz,
            i1$h7 = _59cst($n167r);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (ck4) {
            return;
          }
        }()) {
          var v2gal = _59cst(this)['constructor'];c_jkx4 = Reflect['construct'](i1$h7, arguments, v2gal);
        } else c_jkx4 = i1$h7['apply'](this, arguments);return si = this, !(o0rqdz = c_jkx4) || 'object' !== ebml(o0rqdz) && 'function' != typeof o0rqdz ? function (pmju38) {
          if (void 0x0 !== pmju38) return pmju38;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(si) : o0rqdz;
      };
    }function _59cst(ydqz0) {
      return (_59cst = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (n0rz6) {
        return n0rz6['__proto__'] || Object['getPrototypeOf'](n0rz6);
      })(ydqz0);
    }function emup83(pm8ju, tws9i) {
      return (emup83 = Object['setPrototypeOf'] || function (i$761, eblma) {
        return i$761['__proto__'] = eblma, i$761;
      })(pm8ju, tws9i);
    }var lv2eab = function () {
      !function (e2mbp, puj83m) {
        if ('function' != typeof puj83m && null !== puj83m) throw new TypeError('Super expression must either be null or a function');e2mbp['prototype'] = Object['create'](puj83m && puj83m['prototype'], { 'constructor': { 'value': e2mbp, 'writable': !0x0, 'configurable': !0x0 } }), puj83m && emup83(e2mbp, puj83m);
      }(tcsx5, $rn17['default']);var jx4k_c,
          m3epa,
          kx5t,
          kxjc4_ = bl2vae(tcsx5);function tcsx5() {
        var $niw1;return function (bvl2, _xct5s) {
          if (!(bvl2 instanceof _xct5s)) throw new TypeError('Cannot call a class as a function');
        }(this, tcsx5), ($niw1 = kxjc4_['call'](this))['childNodes'] = [], $niw1;
      }return jx4k_c = tcsx5, (m3epa = [{ 'key': 'appendChild', 'value': function (rn1$z) {
          this['childNodes']['push'](rn1$z);
        } }, { 'key': 'cloneNode', 'value': function () {
          var wi7h9$ = Object['create'](this);return Object['assign'](wi7h9$, this), wi7h9$;
        } }, { 'key': 'removeChild', 'value': function (k48xj) {
          var bape3m = this['childNodes']['findIndex'](function (j_k4x) {
            return j_k4x === k48xj;
          });return -0x1 < bape3m ? this['childNodes']['splice'](bape3m, 0x1) : null;
        } }]) && m2abpe(jx4k_c['prototype'], m3epa), kx5t && m2abpe(jx4k_c, kx5t), tcsx5;
    }();c_kjx['default'] = lv2eab, mp3j['exports'] = c_kjx['default'];
  }, { './EventTarget.js': 0x1e }], 0x29: [function (w7is, stcx5_, sh79i) {
    'use strict';

    Object['defineProperty'](sh79i, '__esModule', { 'value': !0x0 }), sh79i['default'] = void 0x0, (sh79i['default'] = function j48k() {
      !function (d0yqz, jp34u8) {
        if (!(d0yqz instanceof jp34u8)) throw new TypeError('Cannot call a class as a function');
      }(this, j48k);
    }, stcx5_['exports'] = sh79i['default']);
  }, {}], 0x2a: [function (qod0rz, w7i9, qorz) {
    'use strict';

    function c8kjx(r6z0qn, sih9w7) {
      for (var ni1$67 = 0x0; ni1$67 < sih9w7['length']; ni1$67++) {
        var iwhst = sih9w7[ni1$67];iwhst['enumerable'] = iwhst['enumerable'] || !0x1, iwhst['configurable'] = !0x0, 'value' in iwhst && (iwhst['writable'] = !0x0), Object['defineProperty'](r6z0qn, iwhst['key'], iwhst);
      }
    }Object['defineProperty'](qorz, '__esModule', { 'value': !0x0 }), qorz['default'] = void 0x0;var u8p4j = new WeakMap(),
        bap2e = function () {
      function $nzr1(bal2g) {
        var _st5x = this,
            aum3ep = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (mp2eb, in6$17) {
          if (!(mp2eb instanceof in6$17)) throw new TypeError('Cannot call a class as a function');
        }(this, $nzr1), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, 'string' != typeof bal2g || !/(^ws:\/\/)|(^wss:\/\/)/['test'](bal2g)) throw new TypeError('Failed to construct \'WebSocket\': The URL \''['concat'](bal2g, '\' is invalid'));this['url'] = bal2g, this['readyState'] = $nzr1['CONNECTING'];var $6n71r = wx['connectSocket']({ 'url': bal2g, 'protocols': Array['isArray'](aum3ep) ? aum3ep : [aum3ep], 'tcpNoDelay': !0x0 });return u8p4j['set'](this, $6n71r), $6n71r['onClose'](function (i761) {
          _st5x['readyState'] = $nzr1['CLOSED'], 'function' == typeof _st5x['onclose'] && _st5x['onclose'](i761);
        }), $6n71r['onMessage'](function (jxkc) {
          'function' == typeof _st5x['onmessage'] && _st5x['onmessage'](jxkc);
        }), $6n71r['onOpen'](function () {
          _st5x['readyState'] = $nzr1['OPEN'], 'function' == typeof _st5x['onopen'] && _st5x['onopen']();
        }), $6n71r['onError'](function (kc_x4) {
          'function' == typeof _st5x['onerror'] && _st5x['onerror'](new Error(kc_x4['errMsg']));
        }), this;
      }var h$i1w, s_5t9, a2ble;return h$i1w = $nzr1, (s_5t9 = [{ 'key': 'close', 'value': function (n$r, r$71n) {
          this['readyState'] = $nzr1['CLOSING'], u8p4j['get'](this)['close']({ 'code': n$r, 'reason': r$71n });
        } }, { 'key': 'send', 'value': function (a2levb) {
          if ('string' != typeof a2levb && !(a2levb instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data '['concat'](a2levb, ' is invalid'));u8p4j['get'](this)['send']({ 'data': a2levb });
        } }]) && c8kjx(h$i1w['prototype'], s_5t9), a2ble && c8kjx(h$i1w, a2ble), $nzr1;
    }();(qorz['default'] = bap2e)['CONNECTING'] = 0x0, bap2e['OPEN'] = 0x1, bap2e['CLOSING'] = 0x2, bap2e['CLOSED'] = 0x3, w7i9['exports'] = qorz['default'];
  }, {}], 0x2b: [function (z0qro6, jk8x4, i7nw1$) {
    'use strict';

    Object['defineProperty'](i7nw1$, '__esModule', { 'value': !0x0 }), i7nw1$['ontouchend'] = i7nw1$['ontouchmove'] = i7nw1$['ontouchstart'] = i7nw1$['performance'] = i7nw1$['screen'] = i7nw1$['devicePixelRatio'] = i7nw1$['innerHeight'] = i7nw1$['innerWidth'] = void 0x0;var upa3e = wx['getSystemInfoSync'](),
        abg2l = upa3e['screenWidth'],
        u4xkj8 = upa3e['screenHeight'],
        shwi97 = upa3e['devicePixelRatio'];i7nw1$['devicePixelRatio'] = shwi97;var _4ckjx = abg2l,
        zn1$ = u4xkj8,
        j4k_xc = { 'width': abg2l, 'height': u4xkj8, 'availWidth': i7nw1$['innerWidth'] = _4ckjx, 'availHeight': i7nw1$['innerHeight'] = zn1$, 'availLeft': 0x0, 'availTop': 0x0 };i7nw1$['screen'] = j4k_xc;var pj8u3 = { 'now': Date['now'] };i7nw1$['performance'] = pj8u3, i7nw1$['ontouchstart'] = null, i7nw1$['ontouchmove'] = null, i7nw1$['ontouchend'] = null;
  }, {}], 0x2c: [function (r0nzq, r0zn6, eu38) {
    'use strict';

    Object['defineProperty'](eu38, '__esModule', { 'value': !0x0 }), eu38['default'] = void 0x0;var apme2,
        mpeba3 = (apme2 = r0nzq('./EventTarget.js')) && apme2['__esModule'] ? apme2 : { 'default': apme2 };function elb(h9s5tw) {
      return (elb = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (nq0) {
        return typeof nq0;
      } : function (blva2g) {
        return blva2g && 'function' == typeof Symbol && blva2g['constructor'] === Symbol && blva2g !== Symbol['prototype'] ? 'symbol' : typeof blva2g;
      })(h9s5tw);
    }function _txk5c(eu83mp, jk4xu8) {
      for (var meup = 0x0; meup < jk4xu8['length']; meup++) {
        var ish9w7 = jk4xu8[meup];ish9w7['enumerable'] = ish9w7['enumerable'] || !0x1, ish9w7['configurable'] = !0x0, 'value' in ish9w7 && (ish9w7['writable'] = !0x0), Object['defineProperty'](eu83mp, ish9w7['key'], ish9w7);
      }
    }function c_xs5t(e2valb) {
      return function () {
        var wht5,
            up4,
            n0zr,
            _hs5t9 = c5xk(e2valb);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (k4c_x5) {
            return;
          }
        }()) {
          var bpa2 = c5xk(this)['constructor'];wht5 = Reflect['construct'](_hs5t9, arguments, bpa2);
        } else wht5 = _hs5t9['apply'](this, arguments);return up4 = this, !(n0zr = wht5) || 'object' !== elb(n0zr) && 'function' != typeof n0zr ? h$i17w(up4) : n0zr;
      };
    }function h$i17w(h9w5st) {
      if (void 0x0 === h9w5st) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return h9w5st;
    }function c5xk(pe2) {
      return (c5xk = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (yoqdz) {
        return yoqdz['__proto__'] || Object['getPrototypeOf'](yoqdz);
      })(pe2);
    }function n$r6($i79hw, jpmu38) {
      return (n$r6 = Object['setPrototypeOf'] || function (w1i$n, tc5x_s) {
        return w1i$n['__proto__'] = tc5x_s, w1i$n;
      })($i79hw, jpmu38);
    }var u4x8k = new WeakMap(),
        rn60zq = new WeakMap(),
        st59h_ = new WeakMap(),
        hs5_9 = new WeakMap(),
        pb3 = new WeakMap();function zqdyo0(hs7i) {
      if ('function' == typeof this['on'['concat'](hs7i)]) {
        for (var galb2 = arguments['length'], lbvg = new Array(0x1 < galb2 ? galb2 - 0x1 : 0x0), o0qzrd = 0x1; o0qzrd < galb2; o0qzrd++) lbvg[o0qzrd - 0x1] = arguments[o0qzrd];this['on'['concat'](hs7i)]['apply'](this, lbvg);
      }
    }function ble2m(dor) {
      this['readyState'] = dor, zqdyo0['call'](this, 'readystatechange');
    }var kctx5_ = function () {
      !function (upm38e, nz0r6) {
        if ('function' != typeof nz0r6 && null !== nz0r6) throw new TypeError('Super expression must either be null or a function');upm38e['prototype'] = Object['create'](nz0r6 && nz0r6['prototype'], { 'constructor': { 'value': upm38e, 'writable': !0x0, 'configurable': !0x0 } }), nz0r6 && n$r6(upm38e, nz0r6);
      }(hwts5, mpeba3['default']);var lavg2b,
          j84xku,
          xj4_kc,
          qz0o6 = c_xs5t(hwts5);function hwts5() {
        var xkj4u;return function (x_k4c5, wih$) {
          if (!(x_k4c5 instanceof wih$)) throw new TypeError('Cannot call a class as a function');
        }(this, hwts5), (xkj4u = qz0o6['call'](this))['onabort'] = null, xkj4u['onerror'] = null, xkj4u['onload'] = null, xkj4u['onloadstart'] = null, xkj4u['onprogress'] = null, xkj4u['ontimeout'] = null, xkj4u['onloadend'] = null, xkj4u['onreadystatechange'] = null, xkj4u['readyState'] = 0x0, xkj4u['response'] = null, xkj4u['responseText'] = null, xkj4u['responseType'] = '', xkj4u['responseXML'] = null, xkj4u['status'] = 0x0, xkj4u['statusText'] = '', xkj4u['upload'] = {}, xkj4u['withCredentials'] = !0x1, st59h_['set'](h$i17w(xkj4u), { 'content-type': 'application/x-www-form-urlencoded' }), hs5_9['set'](h$i17w(xkj4u), {}), xkj4u;
      }return lavg2b = hwts5, (j84xku = [{ 'key': 'abort', 'value': function () {
          var m38j = pb3['get'](this);m38j && m38j['abort']();
        } }, { 'key': 'getAllResponseHeaders', 'value': function () {
          var si97 = hs5_9['get'](this);return Object['keys'](si97)['map'](function (hiw$97) {
            return ''['concat'](hiw$97, ':\x20')['concat'](si97[hiw$97]);
          })['join']('\x0a');
        } }, { 'key': 'getResponseHeader', 'value': function (xc_kj) {
          return hs5_9['get'](this)[xc_kj];
        } }, { 'key': 'open', 'value': function (le2vb, swhit) {
          rn60zq['set'](this, le2vb), u4x8k['set'](this, swhit), ble2m['call'](this, hwts5['OPENED']);
        } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function (g2av) {
          var u348k = this,
              mp3be = 0x0 < arguments['length'] && void 0x0 !== g2av ? g2av : '';if (this['readyState'] !== hwts5['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');var tsc_ = wx['request']({ 'data': mp3be, 'url': u4x8k['get'](this), 'method': rn60zq['get'](this), 'header': st59h_['get'](this), 'dataType': 'other', 'responseType': 'arraybuffer' === this['responseType'] ? 'arraybuffer' : 'text', 'success': function (u83k4) {
              var q0odyz = u83k4['data'],
                  ael2bv = u83k4['statusCode'],
                  h7 = u83k4['header'];switch (u348k['status'] = ael2bv, hs5_9['set'](u348k, h7), zqdyo0['call'](u348k, 'loadstart'), ble2m['call'](u348k, hwts5['HEADERS_RECEIVED']), ble2m['call'](u348k, hwts5['LOADING']), u348k['responseType']) {case 'json':
                  u348k['responseText'] = q0odyz;try {
                    u348k['response'] = JSON['parse'](q0odyz);
                  } catch (j3um8) {
                    u348k['response'] = null;
                  }break;case '':case 'text':
                  u348k['responseText'] = u348k['response'] = q0odyz;break;case 'arraybuffer':
                  u348k['response'] = q0odyz, u348k['responseText'] = '';for (var u3k8j = new Uint8Array(q0odyz), wi1n = u3k8j['byteLength'], m3pb = 0x0; m3pb < wi1n; m3pb++) u348k['responseText'] += String['fromCharCode'](u3k8j[m3pb]);break;default:
                  u348k['response'] = null;}ble2m['call'](u348k, hwts5['DONE']), zqdyo0['call'](u348k, 'load'), zqdyo0['call'](u348k, 'loadend');
            }, 'fail': function (jk4ux8) {
              var x_5t = jk4ux8['errMsg'];-0x1 !== x_5t['indexOf']('abort') ? zqdyo0['call'](u348k, 'abort') : -0x1 !== x_5t['indexOf']('timeout') ? zqdyo0['call'](u348k, 'timeout') : zqdyo0['call'](u348k, 'error', x_5t), zqdyo0['call'](u348k, 'loadend');
            } });pb3['set'](this, tsc_);
        } }, { 'key': 'setRequestHeader', 'value': function (qnrz, n67$i) {
          var nw$i71 = st59h_['get'](this);nw$i71[qnrz] = n67$i, st59h_['set'](this, nw$i71);
        } }, { 'key': 'addEventListener', 'value': function (zd0oqy, hs9iw) {
          if ('function' == typeof hs9iw) {
            var kj3u8 = this;this['on' + zd0oqy] = function (ua3m) {
              hs9iw['call'](kj3u8, ua3m);
            };
          }
        } }]) && _txk5c(lavg2b['prototype'], j84xku), xj4_kc && _txk5c(lavg2b, xj4_kc), hwts5;
    }();(eu38['default'] = kctx5_)['UNSEND'] = 0x0, kctx5_['OPENED'] = 0x1, kctx5_['HEADERS_RECEIVED'] = 0x2, kctx5_['LOADING'] = 0x3, kctx5_['DONE'] = 0x4, r0zn6['exports'] = eu38['default'];
  }, { './EventTarget.js': 0x1e }], 0x2d: [function (uj348k, eb2ma, o6q0r) {
    'use strict';

    function r61n7$(el2abm) {
      return (r61n7$ = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (peam3b) {
        return typeof peam3b;
      } : function (e2abv) {
        return e2abv && 'function' == typeof Symbol && e2abv['constructor'] === Symbol && e2abv !== Symbol['prototype'] ? 'symbol' : typeof e2abv;
      })(el2abm);
    }Object['defineProperty'](o6q0r, '__esModule', { 'value': !0x0 }), o6q0r['default'] = void 0x0;var dyq0o = function ($6i7) {
      if ($6i7 && $6i7['__esModule']) return $6i7;if (null === $6i7 || 'object' !== r61n7$($6i7) && 'function' != typeof $6i7) return { 'default': $6i7 };var $w9ih = cxj4k8();if ($w9ih && $w9ih['has']($6i7)) return $w9ih['get']($6i7);var pem = {},
          i$671 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];for (var yqd in $6i7) if (Object['prototype']['hasOwnProperty']['call']($6i7, yqd)) {
        var up8e3m = i$671 ? Object['getOwnPropertyDescriptor']($6i7, yqd) : null;up8e3m && (up8e3m['get'] || up8e3m['set']) ? Object['defineProperty'](pem, yqd, up8e3m) : pem[yqd] = $6i7[yqd];
      }return pem['default'] = $6i7, $w9ih && $w9ih['set']($6i7, pem), pem;
    }(uj348k('./window')),
        xts5_ = abmp2e(uj348k('./HTMLElement')),
        em3apb = abmp2e(uj348k('./HTMLVideoElement')),
        em2b = abmp2e(uj348k('./Image')),
        rn$z16 = abmp2e(uj348k('./Audio')),
        t59_h = abmp2e(uj348k('./Canvas'));function abmp2e(n$7i61) {
      return n$7i61 && n$7i61['__esModule'] ? n$7i61 : { 'default': n$7i61 };
    }function cxj4k8() {
      if ('function' != typeof WeakMap) return null;var $n1i7 = new WeakMap();return cxj4k8 = function () {
        return $n1i7;
      }, $n1i7;
    }uj348k('./EventIniter/index.js');var lmabe2 = {},
        in76$1 = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': dyq0o, 'hidden': !0x1, 'style': {}, 'location': dyq0o['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new xts5_['default']('head'), 'body': new xts5_['default']('body'), 'createElement': function (gal2bv) {
        return 'canvas' === gal2bv ? new t59_h['default']() : 'audio' === gal2bv ? new rn$z16['default']() : 'img' === gal2bv ? new em2b['default']() : 'video' === gal2bv ? new em3apb['default']() : new xts5_['default'](gal2bv);
      }, 'createElementNS': function (mpj3, pam2e) {
        return this['createElement'](pam2e);
      }, 'getElementById': function (x4kcj8) {
        return x4kcj8 === dyq0o['canvas']['id'] ? dyq0o['canvas'] : null;
      }, 'getElementsByTagName': function (t_s5h) {
        return 'head' === t_s5h ? [in76$1['head']] : 'body' === t_s5h ? [in76$1['body']] : 'canvas' === t_s5h ? [dyq0o['canvas']] : [];
      }, 'getElementsByName': function (uap) {
        return 'head' === uap ? [in76$1['head']] : 'body' === uap ? [in76$1['body']] : 'canvas' === uap ? [dyq0o['canvas']] : [];
      }, 'querySelector': function (_xt) {
        return 'head' === _xt ? in76$1['head'] : 'body' === _xt ? in76$1['body'] : 'canvas' === _xt || _xt === '#'['concat'](dyq0o['canvas']['id']) ? dyq0o['canvas'] : null;
      }, 'querySelectorAll': function (xc4kj8) {
        return 'head' === xc4kj8 ? [in76$1['head']] : 'body' === xc4kj8 ? [in76$1['body']] : 'canvas' === xc4kj8 ? [dyq0o['canvas']] : [];
      }, 'addEventListener': function (e2mp, r1nz0) {
        lmabe2[e2mp] || (lmabe2[e2mp] = []), lmabe2[e2mp]['push'](r1nz0);
      }, 'removeEventListener': function (whts, u8jpm) {
        var nrq0z6 = lmabe2[whts];if (nrq0z6 && 0x0 < nrq0z6['length']) {
          for (var ue3am = nrq0z6['length']; ue3am--;) if (nrq0z6[ue3am] === u8jpm) {
            nrq0z6['splice'](ue3am, 0x1);break;
          }
        }
      }, 'dispatchEvent': function (j8pmu) {
        var j8u4x = lmabe2[j8pmu['type']];if (j8u4x) {
          for (var $w = 0x0; $w < j8u4x['length']; $w++) j8u4x[$w](j8pmu);
        }
      } },
        kuj843 = in76$1;o6q0r['default'] = kuj843, eb2ma['exports'] = o6q0r['default'];
  }, { './Audio': 0x18, './Canvas': 0x19, './EventIniter/index.js': 0x1d, './HTMLElement': 0x22, './HTMLVideoElement': 0x25, './Image': 0x26, './window': 0x33 }], 0x2e: [function (j3mpu, csx_5t, s9t5_) {
    'use strict';

    function u8jk34(n$71r) {
      return (u8jk34 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (r0nz61) {
        return typeof r0nz61;
      } : function (pua3me) {
        return pua3me && 'function' == typeof Symbol && pua3me['constructor'] === Symbol && pua3me !== Symbol['prototype'] ? 'symbol' : typeof pua3me;
      })(n$71r);
    }var bamp2 = function (eabp2) {
      if (eabp2 && eabp2['__esModule']) return eabp2;if (null === eabp2 || 'object' !== u8jk34(eabp2) && 'function' != typeof eabp2) return { 'default': eabp2 };var th59sw = pe3u8m();if (th59sw && th59sw['has'](eabp2)) return th59sw['get'](eabp2);var xu8kj = {},
          b2glva = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];for (var rqo6 in eabp2) if (Object['prototype']['hasOwnProperty']['call'](eabp2, rqo6)) {
        var blm2ea = b2glva ? Object['getOwnPropertyDescriptor'](eabp2, rqo6) : null;blm2ea && (blm2ea['get'] || blm2ea['set']) ? Object['defineProperty'](xu8kj, rqo6, blm2ea) : xu8kj[rqo6] = eabp2[rqo6];
      }return xu8kj['default'] = eabp2, th59sw && th59sw['set'](eabp2, xu8kj), xu8kj;
    }(j3mpu('./window')),
        ea3m = x4u8(j3mpu('./document'));x4u8(j3mpu('./HTMLElement'));function x4u8(xu8k4j) {
      return xu8k4j && xu8k4j['__esModule'] ? xu8k4j : { 'default': xu8k4j };
    }function pe3u8m() {
      if ('function' != typeof WeakMap) return null;var _t5sxc = new WeakMap();return pe3u8m = function () {
        return _t5sxc;
      }, _t5sxc;
    }var lmea2 = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
      bamp2['document'] = ea3m['default'], bamp2['addEventListener'] = function (nr6z0q, tw95hs) {
        bamp2['document']['addEventListener'](nr6z0q, tw95hs);
      }, bamp2['removeEventListener'] = function (h7w9i$, ni761) {
        bamp2['document']['removeEventListener'](h7w9i$, ni761);
      }, bamp2['dispatchEvent'] = function () {
        var xu4j = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {};console['log']('window.dispatchEvent', xu4j['type'], xu4j);
      };var cxkt_5 = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === cxkt_5) {
        for (var t5cx_k in bamp2) {
          var q0od = Object['getOwnPropertyDescriptor'](lmea2, t5cx_k);q0od && !0x0 !== q0od['configurable'] || Object['defineProperty'](window, t5cx_k, { 'value': bamp2[t5cx_k] });
        }for (var i$67 in bamp2['document']) {
          var sh_t = Object['getOwnPropertyDescriptor'](lmea2['document'], i$67);sh_t && !0x0 !== sh_t['configurable'] || Object['defineProperty'](lmea2['document'], i$67, { 'value': bamp2['document'][i$67] });
        }window['parent'] = window;
      } else {
        for (var c_t9s in bamp2) lmea2[c_t9s] = bamp2[c_t9s];lmea2['window'] = bamp2, window = lmea2, window['top'] = window['parent'] = window;
      }
    }());
  }, { './HTMLElement': 0x22, './document': 0x2d, './window': 0x33 }], 0x2f: [function (kj4x8c, alm2e, ts5xc) {
    'use strict';

    Object['defineProperty'](ts5xc, '__esModule', { 'value': !0x0 }), ts5xc['default'] = void 0x0;var u3em8 = { get 'length'() {
        return wx['getStorageInfoSync']()['keys']['length'];
      }, 'key': function (hw9tsi) {
        return wx['getStorageInfoSync']()['keys'][hw9tsi];
      }, 'getItem': function (vaeb) {
        return wx['getStorageSync'](vaeb);
      }, 'setItem': function (hts_59, epmb3) {
        return wx['setStorageSync'](hts_59, epmb3);
      }, 'removeItem': function (t_sxc) {
        wx['removeStorageSync'](t_sxc);
      }, 'clear': function () {
        wx['clearStorageSync']();
      } };ts5xc['default'] = u3em8, alm2e['exports'] = ts5xc['default'];
  }, {}], 0x30: [function (oqr06z, bev2la, tihw) {
    'use strict';

    Object['defineProperty'](tihw, '__esModule', { 'value': !0x0 }), tihw['default'] = void 0x0;var _54xk = { 'href': 'game.js', 'reload': function () {} };tihw['default'] = _54xk, bev2la['exports'] = tihw['default'];
  }, {}], 0x31: [function (tckx, hisw79, e2b) {
    'use strict';

    Object['defineProperty'](e2b, '__esModule', { 'value': !0x0 }), e2b['default'] = void 0x0;var t9w5 = tckx('./util/index.js'),
        eb2val = wx['getSystemInfoSync']();console['log'](eb2val);var w95ts = eb2val['system'],
        p4j38u = eb2val['platform'],
        st5xc_ = eb2val['language'],
        wi79$h = eb2val['version'],
        t5ws9h = -0x1 !== w95ts['toLowerCase']()['indexOf']('android') ? 'Android; CPU '['concat'](w95ts) : 'iPhone; CPU iPhone OS '['concat'](w95ts, ' like Mac OS X'),
        i97swh = 'Mozilla/5.0 ('['concat'](t5ws9h, ') AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/')['concat'](wi79$h, ' MiniGame NetType/WIFI Language/')['concat'](st5xc_),
        a2l = { 'platform': p4j38u, 'language': st5xc_, 'appVersion': '5.0 ('['concat'](t5ws9h, ') AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'), 'userAgent': i97swh, 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': t9w5['noop'], 'watchPosition': t9w5['noop'], 'clearWatch': t9w5['noop'] } };wx['onNetworkStatusChange'] && wx['onNetworkStatusChange'](function (ev) {
      a2l['onLine'] = ev['isConnected'];
    });var dqo0yz = a2l;e2b['default'] = dqo0yz, hisw79['exports'] = e2b['default'];
  }, { './util/index.js': 0x32 }], 0x32: [function (bm2pea, k843j, c_xj4) {
    'use strict';

    Object['defineProperty'](c_xj4, '__esModule', { 'value': !0x0 }), c_xj4['noop'] = function () {};
  }, {}], 0x33: [function (u48j, bg2, upe3m) {
    'use strict';

    Object['defineProperty'](upe3m, '__esModule', { 'value': !0x0 });var j4cxk_ = { 'canvas': !0x0, 'setTimeout': !0x0, 'setInterval': !0x0, 'clearTimeout': !0x0, 'clearInterval': !0x0, 'requestAnimationFrame': !0x0, 'cancelAnimationFrame': !0x0, 'navigator': !0x0, 'XMLHttpRequest': !0x0, 'WebSocket': !0x0, 'Image': !0x0, 'ImageBitmap': !0x0, 'Audio': !0x0, 'FileReader': !0x0, 'HTMLElement': !0x0, 'HTMLImageElement': !0x0, 'HTMLCanvasElement': !0x0, 'HTMLMediaElement': !0x0, 'HTMLAudioElement': !0x0, 'HTMLVideoElement': !0x0, 'WebGLRenderingContext': !0x0, 'TouchEvent': !0x0, 'MouseEvent': !0x0, 'DeviceMotionEvent': !0x0, 'localStorage': !0x0, 'location': !0x0 };Object['defineProperty'](upe3m, 'navigator', { 'enumerable': !0x0, 'get': function () {
        return eapm['default'];
      } }), Object['defineProperty'](upe3m, 'XMLHttpRequest', { 'enumerable': !0x0, 'get': function () {
        return $w71h['default'];
      } }), Object['defineProperty'](upe3m, 'WebSocket', { 'enumerable': !0x0, 'get': function () {
        return qz0dro['default'];
      } }), Object['defineProperty'](upe3m, 'Image', { 'enumerable': !0x0, 'get': function () {
        return b2vg['default'];
      } }), Object['defineProperty'](upe3m, 'ImageBitmap', { 'enumerable': !0x0, 'get': function () {
        return lb2eav['default'];
      } }), Object['defineProperty'](upe3m, 'Audio', { 'enumerable': !0x0, 'get': function () {
        return qdz0y['default'];
      } }), Object['defineProperty'](upe3m, 'FileReader', { 'enumerable': !0x0, 'get': function () {
        return _tx5kc['default'];
      } }), Object['defineProperty'](upe3m, 'HTMLElement', { 'enumerable': !0x0, 'get': function () {
        return _tsh59['default'];
      } }), Object['defineProperty'](upe3m, 'HTMLImageElement', { 'enumerable': !0x0, 'get': function () {
        return q6rzo['default'];
      } }), Object['defineProperty'](upe3m, 'HTMLCanvasElement', { 'enumerable': !0x0, 'get': function () {
        return _xs5t['default'];
      } }), Object['defineProperty'](upe3m, 'HTMLMediaElement', { 'enumerable': !0x0, 'get': function () {
        return la2bme['default'];
      } }), Object['defineProperty'](upe3m, 'HTMLAudioElement', { 'enumerable': !0x0, 'get': function () {
        return b2vla['default'];
      } }), Object['defineProperty'](upe3m, 'HTMLVideoElement', { 'enumerable': !0x0, 'get': function () {
        return ht_5s['default'];
      } }), Object['defineProperty'](upe3m, 'WebGLRenderingContext', { 'enumerable': !0x0, 'get': function () {
        return t95_sh['default'];
      } }), Object['defineProperty'](upe3m, 'TouchEvent', { 'enumerable': !0x0, 'get': function () {
        return emp3ab['TouchEvent'];
      } }), Object['defineProperty'](upe3m, 'MouseEvent', { 'enumerable': !0x0, 'get': function () {
        return emp3ab['MouseEvent'];
      } }), Object['defineProperty'](upe3m, 'DeviceMotionEvent', { 'enumerable': !0x0, 'get': function () {
        return emp3ab['DeviceMotionEvent'];
      } }), Object['defineProperty'](upe3m, 'localStorage', { 'enumerable': !0x0, 'get': function () {
        return n0r6z1['default'];
      } }), Object['defineProperty'](upe3m, 'location', { 'enumerable': !0x0, 'get': function () {
        return rz6q['default'];
      } }), upe3m['cancelAnimationFrame'] = upe3m['requestAnimationFrame'] = upe3m['clearInterval'] = upe3m['clearTimeout'] = upe3m['setInterval'] = upe3m['setTimeout'] = upe3m['canvas'] = void 0x0;var abpm3e = w79his(u48j('./Canvas')),
        eapm = w79his(u48j('./navigator')),
        $w71h = w79his(u48j('./XMLHttpRequest')),
        qz0dro = w79his(u48j('./WebSocket')),
        b2vg = w79his(u48j('./Image')),
        lb2eav = w79his(u48j('./ImageBitmap')),
        qdz0y = w79his(u48j('./Audio')),
        _tx5kc = w79his(u48j('./FileReader')),
        _tsh59 = w79his(u48j('./HTMLElement')),
        q6rzo = w79his(u48j('./HTMLImageElement')),
        _xs5t = w79his(u48j('./HTMLCanvasElement')),
        la2bme = w79his(u48j('./HTMLMediaElement')),
        b2vla = w79his(u48j('./HTMLAudioElement')),
        ht_5s = w79his(u48j('./HTMLVideoElement')),
        t95_sh = w79his(u48j('./WebGLRenderingContext')),
        emp3ab = u48j('./EventIniter/index.js'),
        n0r6z1 = w79his(u48j('./localStorage')),
        rz6q = w79his(u48j('./location')),
        me2bpa = u48j('./WindowProperties');function w79his(ozq0) {
      return ozq0 && ozq0['__esModule'] ? ozq0 : { 'default': ozq0 };
    }Object['keys'](me2bpa)['forEach'](function (ct5_s9) {
      'default' !== ct5_s9 && '__esModule' !== ct5_s9 && (Object['prototype']['hasOwnProperty']['call'](j4cxk_, ct5_s9) || Object['defineProperty'](upe3m, ct5_s9, { 'enumerable': !0x0, 'get': function () {
          return me2bpa[ct5_s9];
        } }));
    }), GameGlobal['screencanvas'] = GameGlobal['screencanvas'] || new abpm3e['default']();var r061n = GameGlobal['screencanvas'];upe3m['canvas'] = r061n;var $9h = GameGlobal,
        al2vbg = $9h['setTimeout'],
        kx4c_j = $9h['setInterval'],
        e2lmb = $9h['clearTimeout'],
        sxct_ = $9h['clearInterval'],
        w1$i7 = $9h['requestAnimationFrame'],
        dzoq = $9h['cancelAnimationFrame'];upe3m['cancelAnimationFrame'] = dzoq, upe3m['requestAnimationFrame'] = w1$i7, upe3m['clearInterval'] = sxct_, upe3m['clearTimeout'] = e2lmb, upe3m['setInterval'] = kx4c_j, upe3m['setTimeout'] = al2vbg;
  }, { './Audio': 0x18, './Canvas': 0x19, './EventIniter/index.js': 0x1d, './FileReader': 0x1f, './HTMLAudioElement': 0x20, './HTMLCanvasElement': 0x21, './HTMLElement': 0x22, './HTMLImageElement': 0x23, './HTMLMediaElement': 0x24, './HTMLVideoElement': 0x25, './Image': 0x26, './ImageBitmap': 0x27, './WebGLRenderingContext': 0x29, './WebSocket': 0x2a, './WindowProperties': 0x2b, './XMLHttpRequest': 0x2c, './localStorage': 0x2f, './location': 0x30, './navigator': 0x31 }], 0x34: [function (qz6or0, cj48x, n716i) {
    'use strict';

    !function () {
      if (cc && cc['VideoPlayer'] && cc['VideoPlayer']['Impl'] && __globalAdapter['createVideo']) {
        var _ct59 = cc['Mat4'],
            k5x_ = cc['mat4'](),
            z0rn61 = cc['mat4'](),
            t_9c5 = cc['VideoPlayer']['Impl'],
            zdq0y = cc['VideoPlayer']['Impl']['prototype'];cc['VideoPlayer']['prototype']['_updateVideoSource'] = function () {
          var xck45 = this,
              ct59_ = this['_clip'];this['resourceType'] === cc['VideoPlayer']['ResourceType']['REMOTE'] ? this['_impl']['setURL'](this['remoteURL'], this['_mute'] || 0x0 === this['_volume']) : ct59_ && (ct59_['_nativeAsset'] ? this['_impl']['setURL'](ct59_['_nativeAsset'], this['_mute'] || 0x0 === this['_volume']) : cc['loader']['load'](ct59_['nativeUrl'], function (pe38um, xst5_c) {
            pe38um ? console['error'](pe38um) : (ct59_['_nativeAsset'] = xst5_c, xck45['_impl']['setURL'](xst5_c, xck45['_mute'] || 0x0 === xck45['_volume']));
          }));
        }, zdq0y['_bindEvent'] = function () {
          var aum = this['_video'],
              kjx48 = this;aum && (aum['onPlay'](function () {
            kjx48['_video'] === aum && (kjx48['_playing'] = !0x0, kjx48['_dispatchEvent'](t_9c5['EventType']['PLAYING']));
          }), aum['onEnded'](function () {
            kjx48['_video'] === aum && (kjx48['_playing'] = !0x1, kjx48['_currentTime'] = kjx48['_duration'], kjx48['_dispatchEvent'](t_9c5['EventType']['COMPLETED']));
          }), aum['onPause'](function () {
            kjx48['_video'] === aum && (kjx48['_playing'] = !0x1, kjx48['_dispatchEvent'](t_9c5['EventType']['PAUSED']));
          }), aum['onTimeUpdate'](function (cs5t_9) {
            kjx48['_duration'] = cs5t_9['duration'], kjx48['_currentTime'] = cs5t_9['position'];
          }));
        }, zdq0y['_unbindEvent'] = function () {
          var vbl2ae = this['_video'];vbl2ae && (vbl2ae['offPlay'](), vbl2ae['offEnded'](), vbl2ae['offPause'](), vbl2ae['offTimeUpdate']());
        }, zdq0y['setVisible'] = function (s7wi) {
          var zrq6 = this['_video'];zrq6 && this['_visible'] !== s7wi && (zrq6['width'] = s7wi && this['_actualWidth'] || 0x0, this['_visible'] = s7wi);
        }, zdq0y['createDomElementIfNeeded'] = function () {
          __globalAdapter['createVideo'] ? this['_video'] || (this['_video'] = __globalAdapter['createVideo'](), this['_video']['showCenterPlayBtn'] = !0x1, this['_video']['controls'] = !0x1, this['_duration'] = -0x1, this['_currentTime'] = -0x1, this['_loaded'] = !0x1, this['setVisible'](!0x1), this['_bindEvent']()) : cc['warn']('VideoPlayer not supported');
        }, zdq0y['setURL'] = function (nr17$) {
          var pu3mj8 = this['_video'];if (pu3mj8 && pu3mj8['src'] !== nr17$) {
            pu3mj8['stop'](), this['_unbindEvent'](), pu3mj8['autoplay'] = !0x0, pu3mj8['src'] = nr17$, pu3mj8['muted'] = !0x0;var kjxc_4 = this;this['_loaded'] = !0x1, pu3mj8['onPlay'](function () {
              pu3mj8['offPlay'](), kjxc_4['_bindEvent'](), pu3mj8['stop'](), pu3mj8['muted'] = !0x1, kjxc_4['_loaded'] = !0x0, kjxc_4['_playing'] = !0x1, kjxc_4['_currentTime'] = 0x0, kjxc_4['_dispatchEvent'](t_9c5['EventType']['READY_TO_PLAY']), pu3mj8['autoplay'] = !0x1;
            });
          }
        }, zdq0y['getURL'] = function () {
          var l2meab = this['_video'];return l2meab ? l2meab['src'] : '';
        }, zdq0y['play'] = function () {
          var cx5tk_ = this['_video'];cx5tk_ && this['_visible'] && !this['_playing'] && cx5tk_['play']();
        }, zdq0y['setStayOnBottom'] = function (nz) {}, zdq0y['pause'] = function () {
          var _xc5kt = this['_video'];this['_playing'] && _xc5kt && _xc5kt['pause']();
        }, zdq0y['resume'] = function () {
          var $76nr1 = this['_video'];!this['_playing'] && $76nr1 && $76nr1['play']();
        }, zdq0y['stop'] = function () {
          var bla2ve = this,
              ep3am = this['_video'];ep3am && this['_visible'] && ep3am['stop']()['then'](function (b2mape) {
            !b2mape['errMsg'] || b2mape['errMsg']['includes']('ok') ? (bla2ve['_currentTime'] = 0x0, ep3am['seek'](0x0), bla2ve['_playing'] = !0x1, bla2ve['_dispatchEvent'](t_9c5['EventType']['STOPPED'])) : console['error']('failed to stop video player');
          });
        }, zdq0y['setVolume'] = function (ma2pb) {}, zdq0y['seekTo'] = function ($1hw7i) {
          var _x4cjk = this['_video'];_x4cjk && this['_loaded'] && _x4cjk['seek']($1hw7i);
        }, zdq0y['isPlaying'] = function () {
          return this['_playing'];
        }, zdq0y['duration'] = function () {
          return this['_duration'];
        }, zdq0y['currentTime'] = function () {
          return this['_currentTime'];
        }, zdq0y['setKeepAspectRatioEnabled'] = function (sc5_9t) {
          console['warn']('On wechat game videoPlayer is always keep the aspect ratio');
        }, zdq0y['isKeepAspectRatioEnabled'] = function () {
          return !0x0;
        }, zdq0y['isFullScreenEnabled'] = function () {
          return this['_fullScreenEnabled'];
        }, zdq0y['setFullScreenEnabled'] = function (oyz0q) {
          var _sc5t9 = this['_video'];_sc5t9 && this['_fullScreenEnabled'] !== oyz0q && (oyz0q ? _sc5t9['requestFullScreen']() : _sc5t9['exitFullScreen'](), this['_fullScreenEnabled'] = oyz0q);
        }, zdq0y['enable'] = function () {
          this['setVisible'](!0x0);
        }, zdq0y['disable'] = function () {
          this['_playing'] && this['_video']['pause'](), this['setVisible'](!0x1);
        }, zdq0y['destroy'] = function () {
          this['disable'](), this['_unbindEvent'](), this['_video'] && (this['_video']['destroy'](), this['_video'] = void 0x0);
        }, zdq0y['updateMatrix'] = function (z0yodq) {
          if (this['_video'] && this['_visible'] && (z0yodq['getWorldMatrix'](k5x_), this['_m00'] !== k5x_['m'][0x0] || this['_m01'] !== k5x_['m'][0x1] || this['_m04'] !== k5x_['m'][0x4] || this['_m05'] !== k5x_['m'][0x5] || this['_m12'] !== k5x_['m'][0xc] || this['_m13'] !== k5x_['m'][0xd] || this['_w'] !== z0yodq['_contentSize']['width'] || this['_h'] !== z0yodq['_contentSize']['height'])) {
            this['_m00'] = k5x_['m'][0x0], this['_m01'] = k5x_['m'][0x1], this['_m04'] = k5x_['m'][0x4], this['_m05'] = k5x_['m'][0x5], this['_m12'] = k5x_['m'][0xc], this['_m13'] = k5x_['m'][0xd], this['_w'] = z0yodq['_contentSize']['width'], this['_h'] = z0yodq['_contentSize']['height'], cc['Camera']['findCamera'](z0yodq)['getWorldToScreenMatrix2D'](z0rn61), _ct59['multiply'](z0rn61, z0rn61, k5x_);var _th5s9 = cc['view']['_scaleX'],
                bmae2 = cc['view']['_scaleY'],
                zqdy0o = cc['view']['_devicePixelRatio'];_th5s9 /= zqdy0o, bmae2 /= zqdy0o;var pumj83 = z0rn61['m'][0x0] * _th5s9,
                xkc84j = z0rn61['m'][0x5] * bmae2,
                a3pbme = this['_w'] * pumj83,
                pab3 = this['_h'] * xkc84j,
                k4c_x = a3pbme * z0yodq['_anchorPoint']['x'],
                ebaml2 = pab3 * z0yodq['_anchorPoint']['y'],
                ck48 = cc['view']['_viewportRect'],
                zq0n6 = ck48['x'] / zqdy0o,
                shw95 = ck48['y'] / zqdy0o,
                pe3bma = z0rn61['m'][0xc] * _th5s9 - k4c_x + zq0n6,
                _kcj4x = z0rn61['m'][0xd] * bmae2 - ebaml2 + shw95,
                zr$6n = cc['view']['getFrameSize']()['height'];this['_video']['x'] = pe3bma, this['_video']['y'] = zr$6n - pab3 - _kcj4x, this['_actualWidth'] = this['_video']['width'] = a3pbme, this['_video']['height'] = pab3;
          }
        };
      }
    }();
  }, {}], 0x35: [function (pjm83u, drq0zo, z0nr16) {
    'use strict';

    pjm83u('./VideoPlayer'), pjm83u('./pc-adapter');
  }, { './VideoPlayer': 0x34, './pc-adapter': 0x36 }], 0x36: [function (q06ozr, s_95t, zn0r6) {
    'use strict';

    var zr0n16 = wx['getSystemInfoSync'](),
        hw$7 = cc['internal']['inputManager'],
        q60rn = cc['internal']['eventManager'],
        abelm = cc['Event']['EventKeyboard'],
        cs9_5t = cc['Event']['EventMouse'],
        c5tk = { 'backspace': 0x8, 'tab': 0x9, 'enter': 0xd, 'shift': 0x10, 'control': 0x11, 'alt': 0x12, 'pause': 0x13, 'capslock': 0x14, 'escape': 0x1b, '\x20': 0x20, 'pageup': 0x21, 'pagedown': 0x22, 'end': 0x23, 'home': 0x24, 'arrowleft': 0x25, 'arrowup': 0x26, 'arrowright': 0x27, 'arrowdown': 0x28, 'insert': 0x2d, 'a': 0x41, 'b': 0x42, 'c': 0x43, 'd': 0x44, 'e': 0x45, 'f': 0x46, 'g': 0x47, 'h': 0x48, 'i': 0x49, 'j': 0x4a, 'k': 0x4b, 'l': 0x4c, 'm': 0x4d, 'n': 0x4e, 'o': 0x4f, 'p': 0x50, 'q': 0x51, 'r': 0x52, 's': 0x53, 't': 0x54, 'u': 0x55, 'v': 0x56, 'w': 0x57, 'x': 0x58, 'y': 0x59, 'z': 0x5a, '*': 0x6a, '+': 0x6b, '-': 0x6d, '/': 0x6f, 'f1': 0x70, 'f2': 0x71, 'f3': 0x72, 'f4': 0x73, 'f5': 0x74, 'f6': 0x75, 'f7': 0x76, 'f8': 0x77, 'f9': 0x78, 'f10': 0x79, 'f11': 0x7a, 'f12': 0x7b, 'numlock': 0x90, 'scrolllock': 0x91, ';': 0xba, '=': 0xbb, ',': 0xbc, '.': 0xbe, '`': 0xc0, '[': 0xdb, '\x5c': 0xdc, ']': 0xdd, '\x27': 0xde },
        h_5st9 = { 'Delete': 0x2e, 'Digit0': 0x30, 'Digit1': 0x31, 'Digit2': 0x32, 'Digit3': 0x33, 'Digit4': 0x34, 'Digit5': 0x35, 'Digit6': 0x36, 'Digit7': 0x37, 'Digit8': 0x38, 'Digit9': 0x39, 'Numpad0': 0x60, 'Numpad1': 0x61, 'Numpad2': 0x62, 'Numpad3': 0x63, 'Numpad4': 0x64, 'Numpad5': 0x65, 'Numpad6': 0x66, 'Numpad7': 0x67, 'Numpad8': 0x68, 'Numpad9': 0x69, 'NumpadDecimal': 0x6e };function gabl(_5h9s) {
      var z6nq = _5h9s['key']['toLowerCase'](),
          z06rqo = _5h9s['code'];return (/^\d$/['test'](z6nq) || 'delete' === z6nq ? h_5st9[z06rqo] : c5tk[z6nq] || 0x0
      );
    }'windows' === zr0n16['platform'] && (hw$7['registerSystemEvent'] = function () {
      var e8mpu3;this['_isRegisterEvent'] || (this['_glView'] = cc['view'], wx['onKeyDown'](function (k4j38) {
        return q60rn['dispatchEvent'](new abelm(gabl(k4j38), !0x0));
      }), wx['onKeyUp'](function (u34jp8) {
        return q60rn['dispatchEvent'](new abelm(gabl(u34jp8), !0x1));
      }), e8mpu3 = { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] }, $7wni('onMouseDown', cs9_5t['DOWN'], function (e2aml, _xk4c5) {
        hw$7['_mousePressed'] = !0x0, hw$7['handleTouchesBegin']([hw$7['getTouchByXY'](e2aml['x'], e2aml['y'], e8mpu3)]);
      }), $7wni('onMouseUp', cs9_5t['UP'], function (ujk4, $167in) {
        hw$7['_mousePressed'] = !0x1, hw$7['handleTouchesEnd']([hw$7['getTouchByXY'](ujk4['x'], ujk4['y'], e8mpu3)]);
      }), $7wni('onMouseMove', cs9_5t['MOVE'], function (pam, hws9i) {
        hw$7['handleTouchesMove']([hw$7['getTouchByXY'](pam['x'], pam['y'], e8mpu3)]), hw$7['_mousePressed'] || hws9i['setButton'](null);
      }), $7wni('onWheel', cs9_5t['SCROLL'], function (r0nq6, iwn$17) {
        iwn$17['setScrollData'](0x0, -r0nq6['deltaY']);
      }), this['_isRegisterEvent'] = !0x0);function $7wni(rznq, bea2mp, jm3p8) {
        wx[rznq](function (j4x8c) {
          var r6zqn0 = hw$7['getMouseEvent'](j4x8c, e8mpu3, bea2mp);r6zqn0['setButton'](j4x8c['button'] || 0x0), jm3p8(j4x8c, r6zqn0), q60rn['dispatchEvent'](r6zqn0);
        });
      }
    });
  }, {}], 0x37: [function (eab2, w9ths5, xj4ck_) {
    'use strict';

    var b2vagl = wx['getFileSystemManager'] ? wx['getFileSystemManager']() : null;function n6z10() {
      return b2vagl ? null : (console['warn']('can not get the file system!'), new Error('file system does not exist!'));
    }function ab2vel(nrz016, blev) {
      var balvg2 = n6z10();if (balvg2) return balvg2;b2vagl['unlink']({ 'filePath': nrz016, 'success': function () {
          cc['log']('Removed local file ' + nrz016 + ' successfully!'), blev && blev(null);
        }, 'fail': function (doz0rq) {
          console['warn'](doz0rq['errMsg']), blev && blev(new Error(doz0rq['errMsg']));
        } });
    }function zq0ydo($ih97, c8j4kx, mj83) {
      var qzod0 = n6z10();if (qzod0) return qzod0;b2vagl['readFile']({ 'filePath': $ih97, 'encoding': c8j4kx, 'success': mj83 ? function (w17ih) {
          mj83(null, w17ih['data']);
        } : void 0x0, 'fail': function (c5_t) {
          console['warn'](c5_t['errMsg']), mj83 && mj83(new Error(c5_t['errMsg']), null);
        } });
    }window['fsUtils'] = w9ths5['exports'] = { 'fs': b2vagl, 'getUserDataPath': function () {
        return wx['env']['USER_DATA_PATH'];
      }, 'checkFsValid': n6z10, 'readDir': function (abmp3, laveb2) {
        var i9hw7$ = n6z10();if (i9hw7$) return i9hw7$;b2vagl['readdir']({ 'dirPath': abmp3, 'success': laveb2 ? function (j83p4u) {
            laveb2(null, j83p4u['files']);
          } : void 0x0, 'fail': laveb2 ? function (bvla2) {
            laveb2(new Error(bvla2['errMsg']), null);
          } : void 0x0 });
      }, 'exists': function (k_cjx, o6) {
        var scx5_t = n6z10();if (scx5_t) return scx5_t;b2vagl['access']({ 'path': k_cjx, 'success': o6 ? function () {
            o6(!0x0);
          } : void 0x0, 'fail': o6 ? function () {
            o6(!0x1);
          } : void 0x0 });
      }, 'copyFile': function (qod0r, z16$nr, z$61r) {
        var hiws9 = n6z10();if (hiws9) return hiws9;b2vagl['copyFile']({ 'srcPath': qod0r, 'destPath': z16$nr, 'success': function () {
            cc['log']('copy file finished:' + z16$nr), z$61r && z$61r(null);
          }, 'fail': function (orzdq0) {
            cc['log']('copy file failed:' + orzdq0['errMsg']), z$61r && z$61r(new Error(orzdq0['errMsg']));
          } });
      }, 'downloadFile': function (qrn6, oy0qzd, h9w5t) {
        wx['downloadFile']({ 'url': qrn6, 'filePath': oy0qzd, 'success': function (ea2lbm) {
            0xc8 === ea2lbm['statusCode'] ? h9w5t && h9w5t(null, ea2lbm['tempFilePath'] || ea2lbm['filePath']) : (ea2lbm['filePath'] && ab2vel(ea2lbm['filePath']), console['warn']('Download file failed: ' + qrn6), h9w5t && h9w5t(new Error(ea2lbm['errMsg']), null));
          }, 'fail': function (z60r1n) {
            console['warn'](z60r1n['errMsg']), h9w5t && h9w5t(new Error(z60r1n['errMsg']), null);
          } });
      }, 'readText': function (zr6$n1, n6r$1z) {
        return zq0ydo(zr6$n1, 'utf8', n6r$1z);
      }, 'readArrayBuffer': function (bvla2e, dy0z) {
        return zq0ydo(bvla2e, '', dy0z);
      }, 'saveFile': function (x_5ct, epu3, stx_5c) {
        wx['saveFile']({ 'tempFilePath': x_5ct, 'filePath': epu3, 'success': function (xjc_) {
            cc['log']('save file finished:' + epu3), stx_5c && stx_5c(null, xjc_['savedFilePath']);
          }, 'fail': function (epu83) {
            cc['log']('save file failed:' + epu83['errMsg']), stx_5c && stx_5c(new Error(epu83['errMsg']), null);
          } });
      }, 'writeFile': function (lb2gv, x4jk8c, bvl2ea, e83ump) {
        var u438p = n6z10();if (u438p) return u438p;b2vagl['writeFile']({ 'filePath': lb2gv, 'encoding': bvl2ea, 'data': x4jk8c, 'success': e83ump ? function () {
            e83ump(null);
          } : void 0x0, 'fail': function (m2bep) {
            console['warn'](m2bep['errMsg']), e83ump && e83ump(new Error(m2bep['errMsg']));
          } });
      }, 'deleteFile': ab2vel, 'writeFileSync': function (wi9h7, drqo0z, iswh79) {
        var ih1$7 = n6z10();if (ih1$7) return ih1$7;try {
          return b2vagl['writeFileSync'](wi9h7, drqo0z, iswh79), null;
        } catch (epab) {
          return console['warn'](epab['message']), new Error(epab['message']);
        }
      }, 'readJsonSync': function (i1$67n) {
        var sw9h7 = n6z10();if (sw9h7) return sw9h7;try {
          var ml2ea = b2vagl['readFileSync'](i1$67n, 'utf8');return JSON['parse'](ml2ea);
        } catch (pue8m3) {
          return console['warn'](pue8m3['message']), new Error(pue8m3['message']);
        }
      }, 'makeDirSync': function ($rzn16, $i7n6) {
        var _5tcs = n6z10();if (_5tcs) return _5tcs;try {
          return b2vagl['mkdirSync']($rzn16, $i7n6), null;
        } catch (jp83mu) {
          return console['warn'](jp83mu['message']), new Error(jp83mu['message']);
        }
      } };
  }, {}], 0x38: [function (_59hs, i1$h, _54xkc) {
    'use strict';

    var n1r$6 = window['__globalAdapter'],
        _4cjx = wx['getSystemInfoSync'](),
        nr1z06 = n1r$6['adaptSys'];Object['assign'](n1r$6, { 'adaptSys': function (nwi17) {
        if (nr1z06['call'](this, nwi17), 'windows' === _4cjx['platform']) nwi17['isMobile'] = !0x1, nwi17['os'] = nwi17['OS_WINDOWS'];else {
          if ('devtools' === _4cjx['platform']) {
            var xck5_t = _4cjx['system']['toLowerCase']();-0x1 < xck5_t['indexOf']('android') ? nwi17['os'] = nwi17['OS_ANDROID'] : -0x1 < xck5_t['indexOf']('ios') && (nwi17['os'] = nwi17['OS_IOS']);
          }
        }wx['getOpenDataContext'] ? (nwi17['platform'] = nwi17['WECHAT_GAME'], nwi17['browserType'] = nwi17['BROWSER_TYPE_WECHAT_GAME']) : (nwi17['platform'] = nwi17['WECHAT_GAME_SUB'], nwi17['browserType'] = nwi17['BROWSER_TYPE_WECHAT_GAME_SUB']), nwi17['glExtension'] = function (cx54k_) {
          return 'OES_texture_float' !== cx54k_ && !!cc['renderer']['device']['ext'](cx54k_);
        };
      } });
  }, {}], 0x39: [function (n7$6r1, nr0zq, dz0rq) {
    'use strict';

    var xck45_ = n7$6r1('../../../common/utils');if (window['__globalAdapter']) {
      var sh9_t5 = window['__globalAdapter'];xck45_['cloneMethod'](sh9_t5, wx, 'getSystemInfoSync'), xck45_['cloneMethod'](sh9_t5, wx, 'onTouchStart'), xck45_['cloneMethod'](sh9_t5, wx, 'onTouchMove'), xck45_['cloneMethod'](sh9_t5, wx, 'onTouchEnd'), xck45_['cloneMethod'](sh9_t5, wx, 'onTouchCancel'), xck45_['cloneMethod'](sh9_t5, wx, 'createInnerAudioContext'), xck45_['cloneMethod'](sh9_t5, wx, 'createVideo'), xck45_['cloneMethod'](sh9_t5, wx, 'setPreferredFramesPerSecond'), xck45_['cloneMethod'](sh9_t5, wx, 'showKeyboard'), xck45_['cloneMethod'](sh9_t5, wx, 'hideKeyboard'), xck45_['cloneMethod'](sh9_t5, wx, 'updateKeyboard'), xck45_['cloneMethod'](sh9_t5, wx, 'onKeyboardInput'), xck45_['cloneMethod'](sh9_t5, wx, 'onKeyboardConfirm'), xck45_['cloneMethod'](sh9_t5, wx, 'onKeyboardComplete'), xck45_['cloneMethod'](sh9_t5, wx, 'offKeyboardInput'), xck45_['cloneMethod'](sh9_t5, wx, 'offKeyboardConfirm'), xck45_['cloneMethod'](sh9_t5, wx, 'offKeyboardComplete'), xck45_['cloneMethod'](sh9_t5, wx, 'getOpenDataContext'), xck45_['cloneMethod'](sh9_t5, wx, 'onMessage'), sh9_t5['isSubContext'] = void 0x0 === sh9_t5['getOpenDataContext'], xck45_['cloneMethod'](sh9_t5, wx, 'loadSubpackage'), xck45_['cloneMethod'](sh9_t5, wx, 'getSharedCanvas'), xck45_['cloneMethod'](sh9_t5, wx, 'loadFont'), xck45_['cloneMethod'](sh9_t5, wx, 'onShow'), xck45_['cloneMethod'](sh9_t5, wx, 'onHide'), xck45_['cloneMethod'](sh9_t5, wx, 'onError'), xck45_['cloneMethod'](sh9_t5, wx, 'offError');var pambe = !0x1,
          n1z$6r = 0x1,
          lbame2 = wx['getSystemInfoSync'](),
          e2lva = lbame2['windowWidth'],
          rzn601 = lbame2['windowHeight'] < e2lva;wx['onDeviceOrientationChange'] && wx['onDeviceOrientationChange'](function ($r7n16) {
        'landscape' === $r7n16['value'] ? n1z$6r = 0x1 : 'landscapeReverse' === $r7n16['value'] && (n1z$6r = -0x1);
      }), Object['assign'](sh9_t5, { 'startAccelerometer': function (elbva) {
          pambe ? wx['startAccelerometer'] && wx['startAccelerometer']({ 'fail': function (kuj8) {
              console['error']('start accelerometer failed', kuj8);
            } }) : (pambe = !0x0, wx['onAccelerometerChange'] && wx['onAccelerometerChange'](function (x4j_k) {
            var zo0qy = {},
                kct_x5 = x4j_k['x'],
                yqzd0o = x4j_k['y'];if (rzn601) {
              var p8u3 = kct_x5;kct_x5 = -yqzd0o, yqzd0o = p8u3;
            }zo0qy['x'] = kct_x5 * n1z$6r, zo0qy['y'] = yqzd0o * n1z$6r, zo0qy['z'] = x4j_k['z'], elbva && elbva(zo0qy);
          }));
        }, 'stopAccelerometer': function () {
          wx['stopAccelerometer'] && wx['stopAccelerometer']({ 'fail': function (z60qro) {
              console['error']('stop accelerometer failed', z60qro);
            } });
        } });
    }
  }, { '../../../common/utils': 0x12 }] }, {}, [0x17]);