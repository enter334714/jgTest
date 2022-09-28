var H = wx.$F;
!function flea2(am2epb, ju843k, el2bav) {
  function bve(bgla, ku8j4x) {
    if (!ju843k[bgla]) {
      if (!am2epb[bgla]) {
        var _cjk4x = 'function' == typeof require && require;if (!ku8j4x && _cjk4x) return _cjk4x(bgla, !0x0);if (tcx_s) return tcx_s(bgla, !0x0);var i7$9hw = new Error('Cannot find module \'' + bgla + '\x27');throw i7$9hw['code'] = 'MODULE_NOT_FOUND', i7$9hw;
      }var wh5t9 = ju843k[bgla] = { 'exports': {} };am2epb[bgla][0x0]['call'](wh5t9['exports'], function (r61n$) {
        return bve(am2epb[bgla][0x1][r61n$] || r61n$);
      }, wh5t9, wh5t9['exports'], flea2, am2epb, ju843k, el2bav);
    }return ju843k[bgla]['exports'];
  }for (var tcx_s = 'function' == typeof require && require, hw1i7$ = 0x0; hw1i7$ < el2bav['length']; hw1i7$++) bve(el2bav[hw1i7$]);return bve;
}({ 0x1: [function (n1w, d0yz, $r6zn) {}, {}], 0x2: [function (ts5x_c, bal2vg, _tsxc5) {
    'use strict';

    var qz6r0n = cc['Audio'];qz6r0n && Object['assign'](qz6r0n['prototype'], { '_createElement': function () {
        var xc5_st = this['_src']['_nativeAsset'];this['_element'] || (this['_element'] = __globalAdapter['createInnerAudioContext']()), this['_element']['src'] = xc5_st['src'];
      }, 'destroy': function () {
        this['_element'] && (this['_element']['destroy'](), this['_element'] = null);
      }, 'setCurrentTime': function (i7wn$1) {
        this['_element'] ? (this['_nextTime'] = 0x0, this['_element']['seek'](i7wn$1)) : this['_nextTime'] = i7wn$1;
      }, 'stop': function () {
        this['_element'] && (this['_element']['seek'](0x0), this['_element']['stop'](), this['_unbindEnded'](), this['emit']('stop'), this['_state'] = qz6r0n['State']['STOPPED']);
      }, '_bindEnded': function (jk84ux) {
        jk84ux = jk84ux || this['_onended'];var w7n1i$ = this['_element'];w7n1i$ && w7n1i$['onEnded'] && w7n1i$['onEnded'](jk84ux);
      }, '_unbindEnded': function () {
        var sc_5t9 = this['_element'];sc_5t9 && sc_5t9['offEnded'] && sc_5t9['offEnded']();
      }, '_touchToPlay': function () {}, '_forceUpdatingState': function () {} });
  }, {}], 0x3: [function (zyodq0, paeb, z$rn) {
    'use strict';

    cc && cc['audioEngine'] && (cc['audioEngine']['_maxAudioInstance'] = 0xa);
  }, {}], 0x4: [function (j4x8k, aebl, n$rz61) {
    'use strict';

    var p3uj8 = cc['internal']['inputManager'],
        e2bav = window['__globalAdapter'];Object['assign'](p3uj8, { 'setAccelerometerEnabled': function (zr6q0o) {
        var t9his = cc['director']['getScheduler']();t9his['enableForTarget'](this), zr6q0o ? (this['_registerAccelerometerEvent'](), t9his['scheduleUpdate'](this)) : (this['_unregisterAccelerometerEvent'](), t9his['unscheduleUpdate'](this));
      }, '_registerAccelerometerEvent': function () {
        this['_accelCurTime'] = 0x0;var sh5tw9 = this;this['_acceleration'] = new cc['Acceleration'](), e2bav['startAccelerometer'](function (avlbg2) {
          sh5tw9['_acceleration']['x'] = avlbg2['x'], sh5tw9['_acceleration']['y'] = avlbg2['y'], sh5tw9['_acceleration']['z'] = avlbg2['y'];
        });
      }, '_unregisterAccelerometerEvent': function () {
        this['_accelCurTime'] = 0x0, e2bav['stopAccelerometer']();
      } });
  }, {}], 0x5: [function (ct5x_, jc84xk, rn1$67) {
    'use strict';

    !function () {
      if (cc && cc['EditBox']) {
        var bval2e = cc['EditBox'],
            blv2ae = cc['js'],
            d0oqr = bval2e['KeyboardReturnType'],
            n1i7$w = null,
            xj8kc = bval2e['_ImplClass'];blv2ae['extend'](n$176, xj8kc), bval2e['_ImplClass'] = n$176, Object['assign'](n$176['prototype'], { 'init': function (ae3pmb) {
            ae3pmb ? this['_delegate'] = ae3pmb : cc['error']('EditBox init failed');
          }, 'beginEditing': function () {
            if (n1i7$w !== this) {
              var o0qrz = this['_delegate'];if (n1i7$w) n1i7$w['_eventListeners']['onKeyboardComplete'](), __globalAdapter['updateKeyboard'] && __globalAdapter['updateKeyboard']({ 'value': o0qrz['_string'] });else this['_showKeyboard']();this['_registerKeyboardEvent'](), this['_editing'] = !0x0, n1i7$w = this, o0qrz['editBoxEditingDidBegan']();
            }
          }, 'endEditing': function () {
            this['_hideKeyboard']();var k_cx = this['_eventListeners'];k_cx['onKeyboardComplete'] && k_cx['onKeyboardComplete']();
          }, '_registerKeyboardEvent': function () {
            var a2vleb = this,
                mal2e = this['_delegate'],
                j4c_ = this['_eventListeners'];j4c_['onKeyboardInput'] = function (iwh9$) {
              mal2e['_string'] !== iwh9$['value'] && mal2e['editBoxTextChanged'](iwh9$['value']);
            }, j4c_['onKeyboardConfirm'] = function (ody0q) {
              mal2e['editBoxEditingReturn']();var ti9s = a2vleb['_eventListeners'];ti9s['onKeyboardComplete'] && ti9s['onKeyboardComplete']();
            }, j4c_['onKeyboardComplete'] = function () {
              a2vleb['_editing'] = !0x1, n1i7$w = null, a2vleb['_unregisterKeyboardEvent'](), mal2e['editBoxEditingDidEnded']();
            }, __globalAdapter['onKeyboardInput'](j4c_['onKeyboardInput']), __globalAdapter['onKeyboardConfirm'](j4c_['onKeyboardConfirm']), __globalAdapter['onKeyboardComplete'](j4c_['onKeyboardComplete']);
          }, '_unregisterKeyboardEvent': function () {
            var d0qozy = this['_eventListeners'];d0qozy['onKeyboardInput'] && (__globalAdapter['offKeyboardInput'](d0qozy['onKeyboardInput']), d0qozy['onKeyboardInput'] = null), d0qozy['onKeyboardConfirm'] && (__globalAdapter['offKeyboardConfirm'](d0qozy['onKeyboardConfirm']), d0qozy['onKeyboardConfirm'] = null), d0qozy['onKeyboardComplete'] && (__globalAdapter['offKeyboardComplete'](d0qozy['onKeyboardComplete']), d0qozy['onKeyboardComplete'] = null);
          }, '_showKeyboard': function () {
            var abv2e = this['_delegate'],
                k4c5_x = abv2e['inputMode'] === bval2e['InputMode']['ANY'],
                o60zqr = abv2e['maxLength'] < 0x0 ? 0xffff : abv2e['maxLength'];__globalAdapter['showKeyboard']({ 'defaultValue': abv2e['_string'], 'maxLength': o60zqr, 'multiple': k4c5_x, 'confirmHold': !0x1, 'confirmType': function (i16n$7) {
                switch (i16n$7) {case d0oqr['DEFAULT']:case d0oqr['DONE']:
                    return 'done';case d0oqr['SEND']:
                    return 'send';case d0oqr['SEARCH']:
                    return 'search';case d0oqr['GO']:
                    return 'go';case d0oqr['NEXT']:
                    return 'next';}return 'done';
              }(abv2e['returnType']), 'success': function () {}, 'fail': function (n17i) {
                cc['warn'](n17i['errMsg']);
              } });
          }, '_hideKeyboard': function () {
            __globalAdapter['hideKeyboard']({ 'success': function () {}, 'fail': function (ae3m) {
                cc['warn'](ae3m['errMsg']);
              } });
          } });
      }function n$176() {
        xj8kc['call'](this), this['_eventListeners'] = { 'onKeyboardInput': null, 'onKeyboardConfirm': null, 'onKeyboardComplete': null };
      }
    }();
  }, {}], 0x6: [function (kc_5x4, nr1z$6, al2bgv) {
    'use strict';

    var j3um = cc['internal']['inputManager'],
        veba2 = cc['renderer'],
        n6i71 = cc['game'],
        rd0oq = cc['dynamicAtlasManager'];Object['assign'](n6i71, { 'setFrameRate': function (s9hw5) {
        this['config']['frameRate'] = s9hw5, __globalAdapter['setPreferredFramesPerSecond'] ? __globalAdapter['setPreferredFramesPerSecond'](s9hw5) : (this['_intervalId'] && window['cancelAnimFrame'](this['_intervalId']), this['_intervalId'] = 0x0, this['_paused'] = !0x0, this['_setAnimFrame'](), this['_runMainLoop']());
      }, '_runMainLoop': function () {
        var c4xkj,
            bepam3 = this,
            lbagv = bepam3['config'],
            st5c_ = cc['director'],
            mp3eu8 = !0x0,
            hwts59 = lbagv['frameRate'];cc['debug']['setDisplayStats'](lbagv['showFPS']), c4xkj = function () {
          if (!bepam3['_paused']) {
            if (bepam3['_intervalId'] = window['requestAnimFrame'](c4xkj), 0x1e === hwts59 && !__globalAdapter['setPreferredFramesPerSecond'] && (mp3eu8 = !mp3eu8)) return;st5c_['mainLoop']();
          }
        }, bepam3['_intervalId'] = window['requestAnimFrame'](c4xkj), bepam3['_paused'] = !0x1;
      }, '_initRenderer': function () {
        if (!this['_rendererInitialized']) {
          var zoqr0d;if (this['frame'] = this['container'] = document['createElement']('DIV'), zoqr0d = __globalAdapter['isSubContext'] ? window['sharedCanvas'] || __globalAdapter['getSharedCanvas']() : canvas, this['canvas'] = zoqr0d, this['_determineRenderType'](), this['renderType'] === this['RENDER_TYPE_WEBGL']) {
            var emu3p8 = { 'stencil': !0x0, 'antialias': cc['macro']['ENABLE_WEBGL_ANTIALIAS'], 'alpha': cc['macro']['ENABLE_TRANSPARENT_CANVAS'], 'preserveDrawingBuffer': !0x1 };veba2['initWebGL'](zoqr0d, emu3p8), this['_renderContext'] = veba2['device']['_gl'], !cc['macro']['CLEANUP_IMAGE_CACHE'] && rd0oq && (rd0oq['enabled'] = !0x0);
          }this['_renderContext'] || (this['renderType'] = this['RENDER_TYPE_CANVAS'], veba2['initCanvas'](zoqr0d), this['_renderContext'] = veba2['device']['_ctx']), this['_rendererInitialized'] = !0x0;
        }
      }, '_initEvents': function () {
        this['config']['registerSystemEvent'] && j3um['registerSystemEvent'](this['canvas']);var ga2bvl = !0x1;__globalAdapter['onShow'] && __globalAdapter['onShow'](function ($r61n7) {
          ga2bvl && (ga2bvl = !0x1, n6i71['emit'](n6i71['EVENT_SHOW'], $r61n7));
        }), __globalAdapter['onHide'] && __globalAdapter['onHide'](function () {
          ga2bvl || (ga2bvl = !0x0, n6i71['emit'](n6i71['EVENT_HIDE']));
        }), this['on'](n6i71['EVENT_HIDE'], function () {
          n6i71['pause']();
        }), this['on'](n6i71['EVENT_SHOW'], function () {
          n6i71['resume']();
        });
      }, 'end': function () {} }), __globalAdapter['onError'] && __globalAdapter['onError'](function epuma(cx_) {
      __globalAdapter['offError'] && __globalAdapter['offError'](epuma);var me8up3 = Math['random']() < 0.001;if (!__globalAdapter['isSubContext'] && me8up3) {
        var sw9t5 = __globalAdapter['getSystemInfoSync']();if (sw9t5) {
          var u8m3pe = cc['Canvas']['instance']['node'];if (u8m3pe) {
            var j48k3u = new cc['Node']();j48k3u['color'] = cc['Color']['BLACK'], j48k3u['parent'] = u8m3pe;var _ctx5 = j48k3u['addComponent'](cc['Label']);j48k3u['height'] = u8m3pe['height'] - 0x3c, j48k3u['width'] = u8m3pe['width'] - 0x3c, _ctx5['overflow'] = cc['Label']['Overflow']['SHRINK'], _ctx5['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'], _ctx5['verticalAlign'] = cc['Label']['VerticalAlign']['TOP'], _ctx5['fontSize'] = 0x18, cc['LabelOutline'] && (j48k3u['addComponent'](cc['LabelOutline'])['color'] = cc['Color']['WHITE']), _ctx5['string'] = '请截屏发送以下信息反馈给游戏开发者\uFF08Please send this screen shot to the game developer\uFF09\n', _ctx5['string'] += 'Device: ' + sw9t5['brand'] + '\x20' + sw9t5['model'] + '\nSystem: ' + sw9t5['system'] + '\nPlatform: WeChat ' + sw9t5['version'] + '\nEngine: Cocos Creator v' + window['CocosEngine'] + '\nError:\n' + cx_['message'], cc['director']['pause'](), j48k3u['once']('touchend', function () {
              j48k3u['destroy'](), setTimeout(function () {
                cc['director']['resume']();
              }, 0x3e8);
            });
          }
        }
      }
    });
  }, {}], 0x7: [function (q6z0ro, scx5t, lme2ab) {
    'use strict';

    var iwh9 = cc['internal']['inputManager'],
        _5kxtc = { 'left': 0x0, 'top': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };iwh9 && Object['assign'](iwh9, { '_updateCanvasBoundingRect': function () {}, 'registerSystemEvent': function () {
        if (!this['_isRegisterEvent']) {
          this['_glView'] = cc['view'];var q6rz = this,
              leavb = { 'onTouchStart': this['handleTouchesBegin'], 'onTouchMove': this['handleTouchesMove'], 'onTouchEnd': this['handleTouchesEnd'], 'onTouchCancel': this['handleTouchesCancel'] },
              iw97$h = function (tc5_s) {
            var e2vab = leavb[tc5_s];__globalAdapter[tc5_s](function (htswi9) {
              htswi9['changedTouches'] && e2vab['call'](q6rz, q6rz['getTouchesByEvent'](htswi9, _5kxtc));
            });
          };for (var r0oqdz in leavb) iw97$h(r0oqdz);this['_isRegisterEvent'] = !0x0;
        }
      } });
  }, {}], 0x8: [function (rz0n6q, s7i9h, kux84j) {
    'use strict';

    function _9sct5(hsw95) {
      var sx5ct_ = hsw95['url'];return __globalAdapter['loadFont'](sx5ct_) || 'Arial';
    }function bvela(_x5ctk) {
      if (_x5ctk['_owner'] instanceof cc['Asset']) return null;var st_c5x = _x5ctk['content'],
          gv2lba = _x5ctk['rawUrl'],
          w17ni$ = _x5ctk['texture'] || new cc['Texture2D']();return w17ni$['_uuid'] = _x5ctk['uuid'], w17ni$['url'] = gv2lba, w17ni$['_setRawAsset'](gv2lba, !0x1), w17ni$['_nativeAsset'] = st_c5x, w17ni$;
    }function kxu8j(r0z6q, rn167$, whi79) {
      void 0x0 === whi79 && (whi79 = !0x0);var ih17 = r0z6q['url'],
          w9i7h = new Image();function epuam3() {
        w9i7h['removeEventListener']('load', epuam3), w9i7h['removeEventListener']('error', t9c5_), w9i7h['id'] = r0z6q['id'], rn167$(null, w9i7h);
      }function t9c5_() {
        w9i7h['removeEventListener']('load', epuam3), w9i7h['removeEventListener']('error', t9c5_), 'https:' !== window['location']['protocol'] && w9i7h['crossOrigin'] && 'anonymous' === w9i7h['crossOrigin']['toLowerCase']() ? kxu8j(r0z6q, rn167$, !0x1) : rn167$(new Error(cc['debug']['getError'](0x1342, ih17)));
      }whi79 && 'file:' !== window['location']['protocol'] ? w9i7h['crossOrigin'] = 'anonymous' : w9i7h['crossOrigin'] = null, w9i7h['addEventListener']('load', epuam3), w9i7h['addEventListener']('error', t9c5_), w9i7h['src'] = ih17;
    }function wih7$(cj8x, avble2) {
      if (0x0 === cc['sys']['__audioSupport']['format']['length']) return new Error(cc['debug']['getError'](0x133f));var x48jku = document['createElement']('audio');x48jku['src'] = cj8x['url'], avble2(null, x48jku);
    }function th_s(cjk8, $n167) {
      $n167(null, cjk8['url']);
    }function r1n67(h7$i9, sth5w9) {
      sth5w9(null, h7$i9['url']);
    }cc['loader']['downloader']['loadSubpackage'] = function (h9i, em38p, s5tx) {
      !s5tx && em38p && (s5tx = em38p, em38p = null);var l2gba = __globalAdapter['loadSubpackage']({ 'name': h9i, 'success': function () {
          s5tx && s5tx();
        }, 'fail': function () {
          s5tx && s5tx(new Error('Failed to load subpackage '['concat'](h9i)));
        } });em38p && l2gba['onProgressUpdate'](em38p);
    }, cc['loader']['downloader']['addHandlers']({ 'js': function (t5s9_h, s9wth, u83pm) {
        __cocos_require__(t5s9_h['url']), s9wth(null, t5s9_h['url']);
      }, 'png': kxu8j, 'jpg': kxu8j, 'bmp': kxu8j, 'jpeg': kxu8j, 'gif': kxu8j, 'ico': kxu8j, 'tiff': kxu8j, 'webp': kxu8j, 'image': kxu8j, 'mp3': wih7$, 'ogg': wih7$, 'wav': wih7$, 'm4a': wih7$, 'mp4': th_s, 'avi': th_s, 'mov': th_s, 'mpg': th_s, 'mpeg': th_s, 'rm': th_s, 'rmvb': th_s }), cc['loader']['loader']['addHandlers']({ 'mp4': r1n67, 'avi': r1n67, 'mov': r1n67, 'mpg': r1n67, 'mpeg': r1n67, 'rm': r1n67, 'rmvb': r1n67, 'png': bvela, 'jpg': bvela, 'bmp': bvela, 'jpeg': bvela, 'gif': bvela, 'ico': bvela, 'tiff': bvela, 'webp': bvela, 'image': bvela, 'font': _9sct5, 'eot': _9sct5, 'ttf': _9sct5, 'woff': _9sct5, 'svg': _9sct5, 'ttc': _9sct5 });
  }, {}], 0x9: [function (umpa3e, zqor, u3mea) {
    'use strict';

    Object['assign'](cc['screen'], { 'autoFullScreen': function () {} });
  }, {}], 0xa: [function (dzrq0o, _txcs, tw95sh) {
    'use strict';

    var sx_c5t = cc['Texture2D'];sx_c5t && Object['assign'](sx_c5t['prototype'], { 'initWithElement': function (ga2) {
        ga2 && (this['_image'] = ga2, this['handleLoadedTexture']());
      } });
  }, {}], 0xb: [function (_x5t, p4uj38, xj_c4) {
    'use strict';

    p4uj38['exports'] = function (x8k4uj, h95tw) {
      h95tw = h95tw || __globalAdapter['getSystemInfoSync'](), x8k4uj['isNative'] = !0x1, x8k4uj['isBrowser'] = !0x1, x8k4uj['isMobile'] = !0x0, x8k4uj['language'] = h95tw['language']['substr'](0x0, 0x2), x8k4uj['languageCode'] = h95tw['language']['toLowerCase']();var jc4x = h95tw['system']['toLowerCase'](),
          k4jc_ = h95tw['platform'];'android' === (k4jc_ = k4jc_['toLowerCase']()) ? x8k4uj['os'] = x8k4uj['OS_ANDROID'] : 'ios' === k4jc_ && (x8k4uj['os'] = x8k4uj['OS_IOS']), 'android p' === jc4x && (jc4x = 'android p 9.0');var kxj84u = /[\d\.]+/['exec'](jc4x);x8k4uj['osVersion'] = kxj84u ? kxj84u[0x0] : jc4x, x8k4uj['osMainVersion'] = parseInt(x8k4uj['osVersion']), x8k4uj['browserVersion'] = h95tw['version'];var a2pmeb = h95tw['windowWidth'],
          _5k4x = h95tw['windowHeight'],
          kxcj4_ = h95tw['pixelRatio'] || 0x1;x8k4uj['windowPixelResolution'] = { 'width': kxcj4_ * a2pmeb, 'height': kxcj4_ * _5k4x }, x8k4uj['localStorage'] = window['localStorage'];var hsw59 = !0x1,
          xujk84 = !0x1;try {
        var ape3bm = document['createElement']('canvas');hsw59 = ape3bm['getContext']('webgl'), xujk84 = ape3bm['toDataURL']('image/webp')['startsWith']('data:image/webp');
      } catch (x5t_) {}x8k4uj['capabilities'] = { 'canvas': !0x0, 'opengl': !!hsw59, 'webp': xujk84 }, x8k4uj['__audioSupport'] = { 'ONLY_ONE': !0x1, 'WEB_AUDIO': !0x1, 'DELAY_CREATE_CTX': !0x1, 'format': ['.mp3'] };
    };
  }, {}], 0xc: [function (jup8, vea2bl, t5_) {
    'use strict';

    vea2bl['exports'] = function (umpe3) {
      umpe3['_setupContainer'] = function (s9ih7, s9c_5, zqdro) {
        var albm2 = cc['game']['canvas'],
            c8kx4 = s9ih7['_devicePixelRatio'] = 0x1;s9ih7['isRetinaEnabled']() && (c8kx4 = s9ih7['_devicePixelRatio'] = Math['min'](s9ih7['_maxPixelRatio'], window['devicePixelRatio'] || 0x1)), s9c_5 *= c8kx4, zqdro *= c8kx4, albm2['width'] === s9c_5 && albm2['height'] === zqdro || (albm2['width'] = s9c_5, albm2['height'] = zqdro);
      };
    };
  }, {}], 0xd: [function (t5_9c, t95c_, _x5ck4) {
    'use strict';

    t95c_['exports'] = function (t_95h) {
      Object['assign'](t_95h, { '_adjustViewportMeta': function () {}, 'setRealPixelResolution': function (hts9_5, w5s9, qz6o) {
          this['setDesignResolutionSize'](hts9_5, w5s9, qz6o);
        }, 'enableAutoFullScreen': function () {
          cc['warn']('cc.view.enableAutoFullScreen() is not supported on minigame platform.');
        }, 'isAutoFullScreenEnabled': function () {
          return !0x1;
        }, 'setCanvasSize': function () {
          cc['warn']('cc.view.setCanvasSize() is not supported on minigame platform.');
        }, 'setFrameSize': function () {
          cc['warn']('frame size is readonly on minigame platform.');
        }, '_initFrameSize': function () {
          var eam3pb = this['_frameSize'];if (__globalAdapter['isSubContext']) {
            var i$167n = window['sharedCanvas'] || __globalAdapter['getSharedCanvas']();eam3pb['width'] = i$167n['width'], eam3pb['height'] = i$167n['height'];
          } else eam3pb['width'] = window['innerWidth'], eam3pb['height'] = window['innerHeight'];
        } });
    };
  }, {}], 0xe: [function (ord0qz, zo0r6, hs95) {
    'use strict';

    var emap3 = window['__globalAdapter'];Object['assign'](emap3, { 'adaptSys': ord0qz('./BaseSystemInfo'), 'adaptView': ord0qz('./View'), 'adaptContainerStrategy': ord0qz('./ContainerStrategy') });
  }, { './BaseSystemInfo': 0xb, './ContainerStrategy': 0xc, './View': 0xd }], 0xf: [function (maepb, pmj, t_h9s) {
    'use strict';

    maepb('./Audio'), maepb('./AudioEngine'), maepb('./DeviceMotionEvent'), maepb('./Editbox'), maepb('./Game'), maepb('./InputManager'), maepb('./Loader'), maepb('./Screen'), maepb('./Texture2D'), maepb('./misc');
  }, { './Audio': 0x2, './AudioEngine': 0x3, './DeviceMotionEvent': 0x4, './Editbox': 0x5, './Game': 0x6, './InputManager': 0x7, './Loader': 0x8, './Screen': 0x9, './Texture2D': 0xa, './misc': 0x10 }], 0x10: [function (mpea3u, zoqd0y, odqzr0) {
    'use strict';

    cc['macro']['DOWNLOAD_MAX_CONCURRENT'] = 0xa;
  }, {}], 0x11: [function (evlab2, cx54k_, o0z6q) {
    'use strict';

    var q06rnz = 'RemoteDownloader',
        t5_xk = window['fsUtils'],
        lavbg = /^\w+:\/\/.*/,
        b2emal = __globalAdapter['isSubContext'],
        h9w5st = null,
        nz1r6 = null,
        n6z0 = null,
        sihw = null,
        pbm3 = !0x1,
        e3bpm = /the maximum size of the file storage/,
        h5_9ts = {};function emapb3() {
      this['id'] = q06rnz, this['async'] = !0x0, this['pipeline'] = null, this['REMOTE_SERVER_ROOT'] = '', this['SUBCONTEXT_ROOT'] = '';
    }function m8e3p(r6$z, xt5_) {
      !r6$z['type'] || s79wi(r6$z['type']) >= $zr1['LOADABLE_MIN'] ? function (sth9, drzoq0) {
        var c54_k = sth9['url'],
            h9i7w = t5_xk['readText'];s79wi(sth9['type']) === $zr1['BIN'] && (h9i7w = t5_xk['readArrayBuffer']);var i79hw$ = h9i7w(c54_k, function (t_s59c, hwi97) {
          t_s59c ? drzoq0(t_s59c) : hwi97 ? (sth9['states'][cc['loader']['downloader']['id']] = cc['Pipeline']['ItemState']['COMPLETE'], drzoq0(null, hwi97)) : drzoq0(new Error('Empty file: ' + c54_k));
        });i79hw$ && drzoq0(i79hw$);
      }(r6$z, xt5_) : xt5_(null, null);
    }emapb3['ID'] = q06rnz, emapb3['prototype']['init'] = function () {
      if (!b2emal) {
        this['cacheDir'] = t5_xk['getUserDataPath']() + '/gamecaches', this['cachedFileName'] = 'cacheList.json', this['cacheAsset'] = !0x0, this['cachePeriod'] = 0x1f4, this['outOfStorage'] = !0x1, this['writeFilePeriod'] = 0x7d0, sihw = {}, h9w5st = {};var r1zn6$ = this['cacheDir'] + '/' + this['cachedFileName'];(nz1r6 = t5_xk['readJsonSync'](r1zn6$)) instanceof Error && (nz1r6 = {}, t5_xk['makeDirSync'](this['cacheDir'], !0x0), t5_xk['writeFileSync'](r1zn6$, JSON['stringify'](nz1r6), 'utf8'));
      }
    }, emapb3['prototype']['handle'] = function (p3ju84, tsh_95) {
      if ('js' === p3ju84['type']) return null;if ('uuid' === p3ju84['type']) {
        var hw79$ = cc['Pipeline']['Downloader']['PackDownloader']['load'](p3ju84, tsh_95);if (void 0x0 !== hw79$) return hw79$ || void 0x0;
      }if (b2emal) return lavbg['test'](p3ju84['url']) ? null : (p3ju84['url'] = this['SUBCONTEXT_ROOT'] + '/' + p3ju84['url'], t5_xk['checkFsValid']() ? null : void m8e3p(p3ju84, tsh_95));!function (uj3m, rn06zq) {
        var jxkc = t5_xk['checkFsValid']();if (jxkc) return rn06zq(jxkc);var hiw$7 = ab3pme['getCacheName'](uj3m['url']);if (hiw$7 in nz1r6) h5_9ts[hiw$7] = !0x0, uj3m['url'] = ab3pme['cacheDir'] + '/' + hiw$7, m83pu(uj3m, hiw$7), m8e3p(uj3m, rn06zq);else {
          var rn$z1 = function (u3mp8j) {
            if (u3mp8j) m8e3p(uj3m, rn06zq);else {
              if (!ab3pme['REMOTE_SERVER_ROOT']) return void rn06zq(null, null);!function (n10z, $71hiw) {
                var xt_5kc = n10z['url'];if (lavbg['test'](xt_5kc)) return $71hiw(null, null);var w7$ih9 = ab3pme['REMOTE_SERVER_ROOT'] + '/' + xt_5kc;n10z['url'] = w7$ih9;var n1$i = ab3pme['getCacheName'](xt_5kc);cc['sys']['os'] === cc['sys']['OS_ANDROID'] && n10z['type'] && s79wi(n10z['type']) === $zr1['IMAGE'] ? (ab3pme['cacheAsset'] && (x8kcj4(w7$ih9, !0x1, n1$i), m83pu(n10z, n1$i)), $71hiw(null, null)) : t5_xk['downloadFile'](w7$ih9, void 0x0, function (wn$7i1, s5h_t9) {
                  wn$7i1 ? $71hiw(wn$7i1, null) : (n10z['url'] = s5h_t9, ab3pme['cacheAsset'] && (x8kcj4(s5h_t9, !0x0, n1$i), m83pu(n10z, n1$i)), m8e3p(n10z, $71hiw));
                });
              }(uj3m, rn06zq);
            }
          };uj3m['url'] in h9w5st ? rn$z1(h9w5st[uj3m['url']]) : t5_xk['exists'](uj3m['url'], function (gvab2) {
            h9w5st[uj3m['url']] = gvab2, rn$z1(gvab2);
          });
        }
      }(p3ju84, tsh_95);
    }, emapb3['prototype']['cleanOldAssets'] = function () {
      return cc['warn']('remoteDownloader.cleanOldAssets has been deprecated, please use remoteDownloader.cleanOldCaches instead!'), this['cleanOldCaches']();
    }, emapb3['prototype']['cleanOldCaches'] = function () {
      this['cleanAllCaches'](h5_9ts, function (oqdzr0) {
        if (oqdzr0) cc['warn'](oqdzr0);else {
          for (var hw$71i in h5_9ts) cc['log']('reserve local file: ' + hw$71i);cc['log']('Clean old Assets successfully!');
        }
      });
    }, emapb3['prototype']['getCacheName'] = function (pabe) {
      return pabe['replace'](/\//g, '-');
    }, emapb3['prototype']['getCachedFileList'] = function () {
      return nz1r6;
    }, emapb3['prototype']['cleanCache'] = function (cxj_) {
      if (cxj_ in nz1r6) {
        var xkj84 = this;delete nz1r6[cxj_], _xc5st(function () {
          cxj_ in nz1r6 || t5_xk['deleteFile'](xkj84['cacheDir'] + '/' + cxj_, function (agl2b) {
            agl2b || (xkj84['outOfStorage'] = !0x1);
          });
        });
      }
    }, emapb3['prototype']['cleanAllAssets'] = function () {
      cc['warn']('remoteDownloader.cleanAllAssets has been deprecated, please use cleanAllCaches instead!'), this['cleanAllCaches'](null, function (aelm) {
        aelm && cc['error'](aelm['message']);
      });
    }, emapb3['prototype']['cleanAllCaches'] = function (z1n6$r, qz0odr) {
      z1n6$r = z1n6$r || {};var up3me = this,
          up83 = t5_xk['readDir'](up3me['cacheDir'], function (whi1, nq6r0) {
        if (whi1) qz0odr && qz0odr(whi1);else {
          for (var k4xc_ = [], meu3pa = 0x0, t9s5_c = nq6r0['length']; meu3pa < t9s5_c; meu3pa++) {
            var sc5tx_ = nq6r0[meu3pa];sc5tx_ !== up3me['cachedFileName'] && (sc5tx_ in z1n6$r || (sc5tx_ in sihw ? delete sihw[sc5tx_] : (delete nz1r6[sc5tx_], k4xc_['push'](sc5tx_))));
          }_xc5st(function () {
            for (var _x5ts = 0x0, x_5tcs = 0x0, tx_s = k4xc_['length']; x_5tcs < tx_s; x_5tcs++) k4xc_[x_5tcs] in nz1r6 ? ++_x5ts === tx_s && (up3me['outOfStorage'] = !0x1, qz0odr && qz0odr(null)) : t5_xk['deleteFile'](up3me['cacheDir'] + '/' + k4xc_[x_5tcs], function (_ck54) {
              ++_x5ts === tx_s && (up3me['outOfStorage'] = !0x1, qz0odr && qz0odr(null));
            });
          });
        }
      });up83 && qz0odr(up83);
    };var ab3pme = window['remoteDownloader'] = new emapb3();function m83pu(alv2gb, peua3m) {
      cc['LoadingItems']['getQueue'](alv2gb)['addListener'](alv2gb['id'], function (th95w) {
        th95w['error'] && (th95w['url'] in sihw ? delete sihw[th95w['url']] : ab3pme['cleanCache'](peua3m));
      });
    }function x8kcj4(qdzy0, uk3j48, n1z6$) {
      (sihw[qdzy0] = { 'isCopy': uk3j48, 'cachePath': n1z6$ }, !pbm3) && (pbm3 = !0x0, setTimeout(function r1n7$() {
        for (var $i716n in sihw) {
          if (ab3pme['outOfStorage']) pbm3 = !0x1;else {
            var _sht5 = sihw[$i716n],
                n76$r1 = ab3pme['cacheDir'] + '/' + _sht5['cachePath'],
                _kx4c5 = t5_xk['copyFile'];_sht5['isCopy'] || (_kx4c5 = t5_xk['downloadFile']), _kx4c5($i716n, n76$r1, function (agvb2l) {
              if (pbm3 = !0x1, agvb2l) {
                if (e3bpm['test'](agvb2l['message'])) return void (ab3pme['outOfStorage'] = !0x0);
              } else nz1r6[_sht5['cachePath']] = 0x1, delete sihw[$i716n], _xc5st();cc['js']['isEmptyObject'](sihw) || (pbm3 = !0x0, setTimeout(r1n7$, ab3pme['cachePeriod']));
            });
          }return;
        }pbm3 = !0x1;
      }, ab3pme['cachePeriod']));
    }var p4u8j3 = [],
        pj8u = [],
        i7n61 = !0x1;function _xc5st(hiw79$) {
      n6z0 ? hiw79$ && p4u8j3['push'](hiw79$) : (n6z0 = setTimeout(function () {
        i7n61 = !(n6z0 = null), t5_xk['writeFile'](ab3pme['cacheDir'] + '/' + ab3pme['cachedFileName'], JSON['stringify'](nz1r6), 'utf8', function () {
          i7n61 = !0x1;for (var n7r = 0x0, _kj4x = p4u8j3['length']; n7r < _kj4x; n7r++) p4u8j3[n7r]();p4u8j3['length'] = 0x0, p4u8j3['push']['apply'](p4u8j3, pj8u), pj8u['length'] = 0x0;
        });
      }, ab3pme['writeFilePeriod']), !0x0 === i7n61 ? hiw79$ && pj8u['push'](hiw79$) : hiw79$ && p4u8j3['push'](hiw79$));
    }function s79wi(k_x45) {
      return amepu3[k_x45] || $zr1['DEFAULT'];
    }var $zr1 = { 'IMAGE': 0x1, 'FONT': 0x2, 'AUDIO': 0x3, 'SCRIPT': 0x4, 'VIDEO': 0x5, 'TEXT': 0x6, 'BIN': 0x7, 'DEFAULT': 0x8, 'LOADABLE_MIN': 0x6 },
        amepu3 = { 'js': $zr1['SCRIPT'], 'png': $zr1['IMAGE'], 'jpg': $zr1['IMAGE'], 'bmp': $zr1['IMAGE'], 'jpeg': $zr1['IMAGE'], 'gif': $zr1['IMAGE'], 'ico': $zr1['IMAGE'], 'tiff': $zr1['IMAGE'], 'webp': $zr1['IMAGE'], 'image': $zr1['IMAGE'], 'mp3': $zr1['AUDIO'], 'ogg': $zr1['AUDIO'], 'wav': $zr1['AUDIO'], 'm4a': $zr1['AUDIO'], 'mp4': $zr1['VIDEO'], 'avi': $zr1['VIDEO'], 'mov': $zr1['VIDEO'], 'mpg': $zr1['VIDEO'], 'mpeg': $zr1['VIDEO'], 'rm': $zr1['VIDEO'], 'rmvb': $zr1['VIDEO'], 'txt': $zr1['TEXT'], 'xml': $zr1['TEXT'], 'vsh': $zr1['TEXT'], 'fsh': $zr1['TEXT'], 'atlas': $zr1['TEXT'], 'tmx': $zr1['TEXT'], 'tsx': $zr1['TEXT'], 'json': $zr1['TEXT'], 'ExportJson': $zr1['TEXT'], 'plist': $zr1['TEXT'], 'fnt': $zr1['TEXT'], 'font': $zr1['FONT'], 'eot': $zr1['FONT'], 'ttf': $zr1['FONT'], 'woff': $zr1['FONT'], 'svg': $zr1['FONT'], 'ttc': $zr1['FONT'], 'binary': $zr1['BIN'], 'dbbin': $zr1['BIN'], 'skel': $zr1['BIN'], 'bin': $zr1['BIN'], 'pvr': $zr1['BIN'], 'pkm': $zr1['BIN'] };
  }, {}], 0x12: [function (tc5_k, odz0, mp3ue) {
    'use strict';

    odz0['exports'] = { 'cloneMethod': function (tsh95w, ab2vel, dqyz, jkc8x4) {
        ab2vel[dqyz] && (tsh95w[jkc8x4 = jkc8x4 || dqyz] = ab2vel[dqyz]['bind'](ab2vel));
      } };
  }, {}], 0x13: [function ($9hiw, cs_5x, c5_k4x) {
    'use strict';

    function h_s5(avbe) {
      this['options'] = avbe || { 'locator': {} };
    }function beal() {
      this['cdata'] = !0x1;
    }function vb2ga(me2apb, his9tw) {
      his9tw['lineNumber'] = me2apb['lineNumber'], his9tw['columnNumber'] = me2apb['columnNumber'];
    }function eab2m(h7s9) {
      if (h7s9) return '\x0a@' + (h7s9['systemId'] || '') + '#[line:' + h7s9['lineNumber'] + ',col:' + h7s9['columnNumber'] + ']';
    }function e3u(xu8k4j, o60qzr, wi7h$1) {
      return 'string' == typeof xu8k4j ? xu8k4j['substr'](o60qzr, wi7h$1) : xu8k4j['length'] >= o60qzr + wi7h$1 || o60qzr ? new java['lang']['String'](xu8k4j, o60qzr, wi7h$1) + '' : xu8k4j;
    }function x8kj4(pmab3, up38e) {
      pmab3['currentElement'] ? pmab3['currentElement']['appendChild'](up38e) : pmab3['doc']['appendChild'](up38e);
    }h_s5['prototype']['parseFromString'] = function (h_t9, in7w$) {
      var tsc5 = this['options'],
          umape = new x_ck5t(),
          b3empa = tsc5['domBuilder'] || new beal(),
          s_5t = tsc5['errorHandler'],
          hs9wt5 = tsc5['locator'],
          n$w1i7 = tsc5['xmlns'] || {},
          $nw = /\/x?html?$/['test'](in7w$),
          elv2ab = $nw ? ozr6q0['entityMap'] : { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hs9wt5 && b3empa['setDocumentLocator'](hs9wt5), umape['errorHandler'] = function (h9sw5, lab2g, c4xk8) {
        if (!h9sw5) {
          if (lab2g instanceof beal) return lab2g;h9sw5 = lab2g;
        }var z610n = {},
            _c5t9s = h9sw5 instanceof Function;function n$iw(qzrod) {
          var $h9wi = h9sw5[qzrod];!$h9wi && _c5t9s && ($h9wi = 0x2 == h9sw5['length'] ? function (abm2el) {
            h9sw5(qzrod, abm2el);
          } : h9sw5), z610n[qzrod] = $h9wi ? function (yzd) {
            $h9wi('[xmldom ' + qzrod + ']\t' + yzd + eab2m(c4xk8));
          } : function () {};
        }return c4xk8 = c4xk8 || {}, n$iw('warning'), n$iw('error'), n$iw('fatalError'), z610n;
      }(s_5t, b3empa, hs9wt5), umape['domBuilder'] = tsc5['domBuilder'] || b3empa, $nw && (n$w1i7[''] = 'http://www.w3.org/1999/xhtml'), n$w1i7['xml'] = n$w1i7['xml'] || 'http://www.w3.org/XML/1998/namespace', h_t9 ? umape['parse'](h_t9, n$w1i7, elv2ab) : umape['errorHandler']['error']('invalid doc source'), b3empa['doc'];
    }, beal['prototype'] = { 'startDocument': function () {
        this['doc'] = new y0qzo()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
      }, 'startElement': function (vg2b, pmbe2, amep2, ktcx5) {
        var u8emp3 = this['doc'],
            x8uk4j = u8emp3['createElementNS'](vg2b, amep2 || pmbe2),
            c9t = ktcx5['length'];x8kj4(this, x8uk4j), this['currentElement'] = x8uk4j, this['locator'] && vb2ga(this['locator'], x8uk4j);for (var jck48 = 0x0; jck48 < c9t; jck48++) {
          vg2b = ktcx5['getURI'](jck48);var odzqr0 = ktcx5['getValue'](jck48),
              p8uj4 = (amep2 = ktcx5['getQName'](jck48), u8emp3['createAttributeNS'](vg2b, amep2));this['locator'] && vb2ga(ktcx5['getLocator'](jck48), p8uj4), p8uj4['value'] = p8uj4['nodeValue'] = odzqr0, x8uk4j['setAttributeNode'](p8uj4);
        }
      }, 'endElement': function () {
        var blvag = this['currentElement'];blvag['tagName'], this['currentElement'] = blvag['parentNode'];
      }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($nz1r6, h_9ts) {
        var p2emab = this['doc']['createProcessingInstruction']($nz1r6, h_9ts);this['locator'] && vb2ga(this['locator'], p2emab), x8kj4(this, p2emab);
      }, 'ignorableWhitespace': function () {}, 'characters': function (cj4kx, qo6zr, ebml2) {
        if (cj4kx = e3u['apply'](this, arguments)) {
          if (this['cdata']) var p2emb = this['doc']['createCDATASection'](cj4kx);else p2emb = this['doc']['createTextNode'](cj4kx);this['currentElement'] ? this['currentElement']['appendChild'](p2emb) : /^\s*$/['test'](cj4kx) && this['doc']['appendChild'](p2emb), this['locator'] && vb2ga(this['locator'], p2emb);
        }
      }, 'skippedEntity': function () {}, 'endDocument': function () {
        this['doc']['normalize']();
      }, 'setDocumentLocator': function (pam3e) {
        (this['locator'] = pam3e) && (pam3e['lineNumber'] = 0x0);
      }, 'comment': function (h$wi1, $7r1n6, xkj_) {
        h$wi1 = e3u['apply'](this, arguments);var $nr = this['doc']['createComment'](h$wi1);this['locator'] && vb2ga(this['locator'], $nr), x8kj4(this, $nr);
      }, 'startCDATA': function () {
        this['cdata'] = !0x0;
      }, 'endCDATA': function () {
        this['cdata'] = !0x1;
      }, 'startDTD': function (rqo0z6, ct5k_, wh9s5t) {
        var bvlea2 = this['doc']['implementation'];if (bvlea2 && bvlea2['createDocumentType']) {
          var cx8k4 = bvlea2['createDocumentType'](rqo0z6, ct5k_, wh9s5t);this['locator'] && vb2ga(this['locator'], cx8k4), x8kj4(this, cx8k4);
        }
      }, 'warning': function (uj3k4) {
        console['warn']('[xmldom warning]\t' + uj3k4, eab2m(this['locator']));
      }, 'error': function (e3mpba) {
        console['error']('[xmldom error]\t' + e3mpba, eab2m(this['locator']));
      }, 'fatalError': function (ju4xk) {
        throw console['error']('[xmldom fatalError]\t' + ju4xk, eab2m(this['locator'])), ju4xk;
      } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_ktx5c) {
      beal['prototype'][_ktx5c] = function () {
        return null;
      };
    });var ozr6q0 = $9hiw('./entities'),
        x_ck5t = $9hiw('undefined')['XMLReader'],
        y0qzo = c5_k4x['DOMImplementation'] = $9hiw('undefined')['DOMImplementation'];c5_k4x['XMLSerializer'] = $9hiw('undefined')['XMLSerializer'], c5_k4x['DOMParser'] = h_s5;
  }, { 'undefined': 0x14, './entities': 0x15, 'undefined': 0x16 }], 0x14: [function (lb2agv, ckj4x8, mju83) {
    'use strict';

    function k8x(zdor0) {
      return (k8x = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (z6$1r) {
        return typeof z6$1r;
      } : function (th59sw) {
        return th59sw && 'function' == typeof Symbol && th59sw['constructor'] === Symbol && th59sw !== Symbol['prototype'] ? 'symbol' : typeof th59sw;
      })(zdor0);
    }function k3u(_5stcx, r$6n7) {
      for (var n60zrq in _5stcx) r$6n7[n60zrq] = _5stcx[n60zrq];
    }function ckxj_4(yzo0dq, n60zq) {
      var _ts5 = yzo0dq['prototype'];if (!(_ts5 instanceof n60zq)) {
        var $w17h = function () {};for (var upm38 in $w17h['prototype'] = n60zq['prototype'], $w17h = new $w17h(), _ts5) $w17h[upm38] = _ts5[upm38];yzo0dq['prototype'] = _ts5 = $w17h;
      }_ts5['constructor'] != yzo0dq && ('function' != typeof yzo0dq && console['error']('unknow Class:' + yzo0dq), _ts5['constructor'] = yzo0dq);
    }var nzr$ = 'http://www.w3.org/1999/xhtml',
        k5xct_ = {},
        rqdoz = k5xct_['ELEMENT_NODE'] = 0x1,
        h$i79w = k5xct_['ATTRIBUTE_NODE'] = 0x2,
        r1z6 = k5xct_['TEXT_NODE'] = 0x3,
        i1hw$7 = k5xct_['CDATA_SECTION_NODE'] = 0x4,
        ct_5s = k5xct_['ENTITY_REFERENCE_NODE'] = 0x5,
        mp3a = k5xct_['ENTITY_NODE'] = 0x6,
        jxu4k = k5xct_['PROCESSING_INSTRUCTION_NODE'] = 0x7,
        c5x_tk = k5xct_['COMMENT_NODE'] = 0x8,
        c5x_k = k5xct_['DOCUMENT_NODE'] = 0x9,
        $7h1 = k5xct_['DOCUMENT_TYPE_NODE'] = 0xa,
        c_kx4j = k5xct_['DOCUMENT_FRAGMENT_NODE'] = 0xb,
        h5t_9 = k5xct_['NOTATION_NODE'] = 0xc,
        me2abl = {},
        n61r7 = {},
        mab2 = (me2abl['INDEX_SIZE_ERR'] = (n61r7[0x1] = 'Index size error', 0x1), me2abl['DOMSTRING_SIZE_ERR'] = (n61r7[0x2] = 'DOMString size error', 0x2), me2abl['HIERARCHY_REQUEST_ERR'] = (n61r7[0x3] = 'Hierarchy request error', 0x3)),
        abmel = (me2abl['WRONG_DOCUMENT_ERR'] = (n61r7[0x4] = 'Wrong document', 0x4), me2abl['INVALID_CHARACTER_ERR'] = (n61r7[0x5] = 'Invalid character', 0x5), me2abl['NO_DATA_ALLOWED_ERR'] = (n61r7[0x6] = 'No data allowed', 0x6), me2abl['NO_MODIFICATION_ALLOWED_ERR'] = (n61r7[0x7] = 'No modification allowed', 0x7), me2abl['NOT_FOUND_ERR'] = (n61r7[0x8] = 'Not found', 0x8)),
        xj8ku4 = (me2abl['NOT_SUPPORTED_ERR'] = (n61r7[0x9] = 'Not supported', 0x9), me2abl['INUSE_ATTRIBUTE_ERR'] = (n61r7[0xa] = 'Attribute in use', 0xa));me2abl['INVALID_STATE_ERR'] = (n61r7[0xb] = 'Invalid state', 0xb), me2abl['SYNTAX_ERR'] = (n61r7[0xc] = 'Syntax error', 0xc), me2abl['INVALID_MODIFICATION_ERR'] = (n61r7[0xd] = 'Invalid modification', 0xd), me2abl['NAMESPACE_ERR'] = (n61r7[0xe] = 'Invalid namespace', 0xe), me2abl['INVALID_ACCESS_ERR'] = (n61r7[0xf] = 'Invalid access', 0xf);function z6qn0r(up38m, zo0dy) {
      if (zo0dy instanceof Error) var bma2 = zo0dy;else bma2 = this, Error['call'](this, n61r7[up38m]), this['message'] = n61r7[up38m], Error['captureStackTrace'] && Error['captureStackTrace'](this, z6qn0r);return bma2['code'] = up38m, zo0dy && (this['message'] = this['message'] + ':\x20' + zo0dy), bma2;
    }function pmeau() {}function jxc4k(i79whs, rn1$) {
      this['_node'] = i79whs, this['_refresh'] = rn1$, p2bm(this);
    }function p2bm(blaem2) {
      var mp8u3e = blaem2['_node']['_inc'] || blaem2['_node']['ownerDocument']['_inc'];if (blaem2['_inc'] != mp8u3e) {
        var _4jxkc = blaem2['_refresh'](blaem2['_node']);for (var zoqd0r in le2bma(blaem2, 'length', _4jxkc['length']), _4jxkc) blaem2[zoqd0r] = _4jxkc[zoqd0r];blaem2['_inc'] = mp8u3e;
      }
    }function nz$r6() {}function s5_ctx(auem, c5tsx_) {
      for (var u3e = auem['length']; u3e--;) if (auem[u3e] === c5tsx_) return u3e;
    }function w$1ni7(k48xj, qn6zr, k4cj_, v2lbga) {
      if (v2lbga ? qn6zr[s5_ctx(qn6zr, v2lbga)] = k4cj_ : qn6zr[qn6zr['length']++] = k4cj_, k48xj) {
        var $r61zn = (k4cj_['ownerElement'] = k48xj)['ownerDocument'];$r61zn && (v2lbga && tcs5_($r61zn, k48xj, v2lbga), zn1r = k48xj, e2avb = k4cj_, (hws = $r61zn) && hws['_inc']++, 'http://www.w3.org/2000/xmlns/' == e2avb['namespaceURI'] && (zn1r['_nsMap'][e2avb['prefix'] ? e2avb['localName'] : ''] = e2avb['value']));
      }var hws, zn1r, e2avb;
    }function p38jum(vg2a, c95s_t, n$67r) {
      var n0q6 = s5_ctx(c95s_t, n$67r);if (!(0x0 <= n0q6)) throw z6qn0r(abmel, new Error(vg2a['tagName'] + '@' + n$67r));for (var qzr6o0 = c95s_t['length'] - 0x1; n0q6 < qzr6o0;) c95s_t[n0q6] = c95s_t[++n0q6];if (c95s_t['length'] = qzr6o0, vg2a) {
        var agb2l = vg2a['ownerDocument'];agb2l && (tcs5_(agb2l, vg2a, n$67r), n$67r['ownerElement'] = null);
      }
    }function histw9(w$n17) {
      if (this['_features'] = {}, w$n17) {
        for (var $iw7h9 in w$n17) this['_features'] = w$n17[$iw7h9];
      }
    }function b3e() {}function $ni17w(r16$nz) {
      return ('<' == r16$nz ? '&lt;' : '>' == r16$nz && '&gt;') || '&' == r16$nz && '&amp;' || '\x22' == r16$nz && '&quot;' || '&#' + r16$nz['charCodeAt']() + ';';
    }function jc4kx(bl, a3upem) {
      if (a3upem(bl)) return 0x1;if (bl = bl['firstChild']) do {
        if (jc4kx(bl, a3upem)) return 0x1;
      } while (bl = bl['nextSibling']);
    }function bmpea2() {}function tcs5_(mu38ep, ws97ih, s7i9hw) {
      mu38ep && mu38ep['_inc']++, 'http://www.w3.org/2000/xmlns/' == s7i9hw['namespaceURI'] && delete ws97ih['_nsMap'][s7i9hw['prefix'] ? s7i9hw['localName'] : ''];
    }function is79wh(mp3ju8, lv2be, p3mau) {
      if (mp3ju8 && mp3ju8['_inc']) {
        mp3ju8['_inc']++;var _5s9ht = lv2be['childNodes'];if (p3mau) _5s9ht[_5s9ht['length']++] = p3mau;else {
          for (var va2el = lv2be['firstChild'], b2ape = 0x0; va2el;) va2el = (_5s9ht[b2ape++] = va2el)['nextSibling'];_5s9ht['length'] = b2ape;
        }
      }
    }function g2bv(qyd0, h5wts9) {
      var m8u = h5wts9['previousSibling'],
          xs5tc = h5wts9['nextSibling'];return m8u ? m8u['nextSibling'] = xs5tc : qyd0['firstChild'] = xs5tc, xs5tc ? xs5tc['previousSibling'] = m8u : qyd0['lastChild'] = m8u, is79wh(qyd0['ownerDocument'], qyd0), h5wts9;
    }function qn06z(j83u4k, i$76, mj3up8) {
      var qo6rz = i$76['parentNode'];if (qo6rz && qo6rz['removeChild'](i$76), i$76['nodeType'] === c_kx4j) {
        var bm2al = i$76['firstChild'];if (null == bm2al) return i$76;var up84 = i$76['lastChild'];
      } else bm2al = up84 = i$76;var pm38e = mj3up8 ? mj3up8['previousSibling'] : j83u4k['lastChild'];for (bm2al['previousSibling'] = pm38e, up84['nextSibling'] = mj3up8, pm38e ? pm38e['nextSibling'] = bm2al : j83u4k['firstChild'] = bm2al, null == mj3up8 ? j83u4k['lastChild'] = up84 : mj3up8['previousSibling'] = up84; bm2al['parentNode'] = j83u4k, bm2al !== up84 && (bm2al = bm2al['nextSibling']););return is79wh(j83u4k['ownerDocument'] || j83u4k, j83u4k), i$76['nodeType'] == c_kx4j && (i$76['firstChild'] = i$76['lastChild'] = null), i$76;
    }function puj48() {
      this['_nsMap'] = {};
    }function u4jxk() {}function $in761() {}function xjck8() {}function w$97h() {}function cjx_k4() {}function rn76$1() {}function _9s5ct() {}function zqn60r() {}function hw5s9t() {}function abel2() {}function aleb2() {}function z$n16r() {}function upm8j3(r6n0z, rqzod0) {
      var m2bl = [],
          cst_ = 0x9 == this['nodeType'] && this['documentElement'] || this,
          kxjc4 = cst_['prefix'],
          val2eb = cst_['namespaceURI'];if (val2eb && null == kxjc4 && null == (kxjc4 = cst_['lookupPrefix'](val2eb))) var tcxk5 = [{ 'namespace': val2eb, 'prefix': null }];return embla2(this, m2bl, r6n0z, rqzod0, tcxk5), m2bl['join']('');
    }function b2ev(dqoz0y, z0qn6, n$7w) {
      var sh9wit = dqoz0y['prefix'] || '',
          nr1$76 = dqoz0y['namespaceURI'];if ((sh9wit || nr1$76) && ('xml' !== sh9wit || 'http://www.w3.org/XML/1998/namespace' !== nr1$76) && 'http://www.w3.org/2000/xmlns/' != nr1$76) {
        for (var xcs_5t = n$7w['length']; xcs_5t--;) {
          var n$w1 = n$7w[xcs_5t];if (n$w1['prefix'] == sh9wit) return n$w1['namespace'] != nr1$76;
        }return 0x1;
      }
    }function embla2(rn601z, wi$79, jp8u43, zord0, dor) {
      if (zord0) {
        if (!(rn601z = zord0(rn601z))) return;if ('string' == typeof rn601z) return void wi$79['push'](rn601z);
      }switch (rn601z['nodeType']) {case rqdoz:
          dor = dor || [];var n61r$z = rn601z['attributes'],
              apuem3 = n61r$z['length'],
              ukx48 = rn601z['firstChild'],
              nz0r6 = rn601z['tagName'];jp8u43 = nzr$ === rn601z['namespaceURI'] || jp8u43, wi$79['push']('<', nz0r6);for (var ebalv = 0x0; ebalv < apuem3; ebalv++) {
            'xmlns' == (mj3p = n61r$z['item'](ebalv))['prefix'] ? dor['push']({ 'prefix': mj3p['localName'], 'namespace': mj3p['value'] }) : 'xmlns' == mj3p['nodeName'] && dor['push']({ 'prefix': '', 'namespace': mj3p['value'] });
          }for (ebalv = 0x0; ebalv < apuem3; ebalv++) {
            var mj3p;if (b2ev(mj3p = n61r$z['item'](ebalv), 0x0, dor)) {
              var bgla2 = mj3p['prefix'] || '',
                  z6$1n = mj3p['namespaceURI'],
                  ealm2b = bgla2 ? ' xmlns:' + bgla2 : ' xmlns';wi$79['push'](ealm2b, '=\x22', z6$1n, '\x22'), dor['push']({ 'prefix': bgla2, 'namespace': z6$1n });
            }embla2(mj3p, wi$79, jp8u43, zord0, dor);
          }b2ev(rn601z, 0x0, dor) && (bgla2 = rn601z['prefix'] || '', z6$1n = rn601z['namespaceURI'], ealm2b = bgla2 ? ' xmlns:' + bgla2 : ' xmlns', (wi$79['push'](ealm2b, '=\x22', z6$1n, '\x22'), dor['push']({ 'prefix': bgla2, 'namespace': z6$1n })));if (ukx48 || jp8u43 && !/^(?:meta|link|img|br|hr|input)$/i['test'](nz0r6)) {
            if (wi$79['push']('>'), jp8u43 && /^script$/i['test'](nz0r6)) {
              for (; ukx48;) ukx48['data'] ? wi$79['push'](ukx48['data']) : embla2(ukx48, wi$79, jp8u43, zord0, dor), ukx48 = ukx48['nextSibling'];
            } else {
              for (; ukx48;) embla2(ukx48, wi$79, jp8u43, zord0, dor), ukx48 = ukx48['nextSibling'];
            }wi$79['push']('</', nz0r6, '>');
          } else wi$79['push']('/>');return;case c5x_k:case c_kx4j:
          for (ukx48 = rn601z['firstChild']; ukx48;) embla2(ukx48, wi$79, jp8u43, zord0, dor), ukx48 = ukx48['nextSibling'];return;case h$i79w:
          return wi$79['push']('\x20', rn601z['name'], '=\x22', rn601z['value']['replace'](/[<&"]/g, $ni17w), '\x22');case r1z6:
          return wi$79['push'](rn601z['data']['replace'](/[<&]/g, $ni17w));case i1hw$7:
          return wi$79['push']('<![CDATA[', rn601z['data'], ']]>');case c5x_tk:
          return wi$79['push']('<!--', rn601z['data'], '-->');case $7h1:
          var z16n0 = rn601z['publicId'],
              $167 = rn601z['systemId'];if (wi$79['push']('<!DOCTYPE ', rn601z['name']), z16n0) wi$79['push'](' PUBLIC "', z16n0), $167 && '.' != $167 && wi$79['push']('\x22\x20\x22', $167), wi$79['push']('\x22>');else {
            if ($167 && '.' != $167) wi$79['push'](' SYSTEM "', $167, '\x22>');else {
              var _xk54 = rn601z['internalSubset'];_xk54 && wi$79['push']('\x20[', _xk54, ']'), wi$79['push']('>');
            }
          }return;case jxu4k:
          return wi$79['push']('<?', rn601z['target'], '\x20', rn601z['data'], '?>');case ct_5s:
          return wi$79['push']('&', rn601z['nodeName'], ';');default:
          wi$79['push']('??', rn601z['nodeName']);}
    }function le2bma(nr6z1, a2vbl, kx5c4_) {
      nr6z1[a2vbl] = kx5c4_;
    }z6qn0r['prototype'] = Error['prototype'], k3u(me2abl, z6qn0r), pmeau['prototype'] = { 'length': 0x0, 'item': function (st9_) {
        return this[st9_] || null;
      }, 'toString': function ($n71w, dq0y) {
        for (var uj8p3m = [], e8mu3p = 0x0; e8mu3p < this['length']; e8mu3p++) embla2(this[e8mu3p], uj8p3m, $n71w, dq0y);return uj8p3m['join']('');
      } }, jxc4k['prototype']['item'] = function (nr761) {
      return p2bm(this), this[nr761];
    }, ckxj_4(jxc4k, pmeau), nz$r6['prototype'] = { 'length': 0x0, 'item': pmeau['prototype']['item'], 'getNamedItem': function (b2elm) {
        for (var swt5h9 = this['length']; swt5h9--;) {
          var rnz61 = this[swt5h9];if (rnz61['nodeName'] == b2elm) return rnz61;
        }
      }, 'setNamedItem': function (c4kj) {
        var nrz1 = c4kj['ownerElement'];if (nrz1 && nrz1 != this['_ownerElement']) throw new z6qn0r(xj8ku4);var p4u83 = this['getNamedItem'](c4kj['nodeName']);return w$1ni7(this['_ownerElement'], this, c4kj, p4u83), p4u83;
      }, 'setNamedItemNS': function (qn0) {
        var n$r1,
            nr6qz0 = qn0['ownerElement'];if (nr6qz0 && nr6qz0 != this['_ownerElement']) throw new z6qn0r(xj8ku4);return n$r1 = this['getNamedItemNS'](qn0['namespaceURI'], qn0['localName']), w$1ni7(this['_ownerElement'], this, qn0, n$r1), n$r1;
      }, 'removeNamedItem': function (_ckxj4) {
        var zo0r = this['getNamedItem'](_ckxj4);return p38jum(this['_ownerElement'], this, zo0r), zo0r;
      }, 'removeNamedItemNS': function (stc9, qzod) {
        var _cj4kx = this['getNamedItemNS'](stc9, qzod);return p38jum(this['_ownerElement'], this, _cj4kx), _cj4kx;
      }, 'getNamedItemNS': function (kj4_x, in17$) {
        for (var mab3ep = this['length']; mab3ep--;) {
          var zoy = this[mab3ep];if (zoy['localName'] == in17$ && zoy['namespaceURI'] == kj4_x) return zoy;
        }return null;
      } }, histw9['prototype'] = { 'hasFeature': function (mbpa2, r61nz0) {
        var c48xkj = this['_features'][mbpa2['toLowerCase']()];return !(!c48xkj || r61nz0 && !(r61nz0 in c48xkj));
      }, 'createDocument': function (jku84x, bm2p, ab2v) {
        var e3mu8 = new bmpea2();if (e3mu8['implementation'] = this, e3mu8['childNodes'] = new pmeau(), (e3mu8['doctype'] = ab2v) && e3mu8['appendChild'](ab2v), bm2p) {
          var wshit9 = e3mu8['createElementNS'](jku84x, bm2p);e3mu8['appendChild'](wshit9);
        }return e3mu8;
      }, 'createDocumentType': function ($iwn1, z0yodq, p8u34) {
        var ih7$9w = new rn76$1();return ih7$9w['name'] = $iwn1, ih7$9w['nodeName'] = $iwn1, ih7$9w['publicId'] = z0yodq, ih7$9w['systemId'] = p8u34, ih7$9w;
      } }, b3e['prototype'] = { 'firstChild': null, 'lastChild': null, 'previousSibling': null, 'nextSibling': null, 'attributes': null, 'parentNode': null, 'childNodes': null, 'ownerDocument': null, 'nodeValue': null, 'namespaceURI': null, 'prefix': null, 'localName': null, 'insertBefore': function (k483j, n$z1r) {
        return qn06z(this, k483j, n$z1r);
      }, 'replaceChild': function (s5c_9, qoyd) {
        this['insertBefore'](s5c_9, qoyd), qoyd && this['removeChild'](qoyd);
      }, 'removeChild': function (ws9h5) {
        return g2bv(this, ws9h5);
      }, 'appendChild': function (st9h) {
        return this['insertBefore'](st9h, null);
      }, 'hasChildNodes': function () {
        return null != this['firstChild'];
      }, 'cloneNode': function (lbv2ag) {
        return function q0zord(ih1$, kc4j, _cj4) {
          var p84u = new kc4j['constructor']();for (var $win71 in kc4j) {
            var n1r$6 = kc4j[$win71];'object' != k8x(n1r$6) && n1r$6 != p84u[$win71] && (p84u[$win71] = n1r$6);
          }kc4j['childNodes'] && (p84u['childNodes'] = new pmeau()), p84u['ownerDocument'] = ih1$;switch (p84u['nodeType']) {case rqdoz:
              var nq6z = kc4j['attributes'],
                  cts_5x = p84u['attributes'] = new nz$r6(),
                  x4k8j = nq6z['length'];cts_5x['_ownerElement'] = p84u;for (var peabm3 = 0x0; peabm3 < x4k8j; peabm3++) p84u['setAttributeNode'](q0zord(ih1$, nq6z['item'](peabm3), !0x0));break;case h$i79w:
              _cj4 = !0x0;}if (_cj4) {
            for (var pa2b = kc4j['firstChild']; pa2b;) p84u['appendChild'](q0zord(ih1$, pa2b, _cj4)), pa2b = pa2b['nextSibling'];
          }return p84u;
        }(this['ownerDocument'] || this, this, lbv2ag);
      }, 'normalize': function () {
        for (var zroq0d = this['firstChild']; zroq0d;) {
          var qrod = zroq0d['nextSibling'];qrod && qrod['nodeType'] == r1z6 && zroq0d['nodeType'] == r1z6 ? (this['removeChild'](qrod), zroq0d['appendData'](qrod['data'])) : (zroq0d['normalize'](), zroq0d = qrod);
        }
      }, 'isSupported': function (u4x8kj, mpuj3) {
        return this['ownerDocument']['implementation']['hasFeature'](u4x8kj, mpuj3);
      }, 'hasAttributes': function () {
        return 0x0 < this['attributes']['length'];
      }, 'lookupPrefix': function (me8pu) {
        for (var qnr = this; qnr;) {
          var tw9si = qnr['_nsMap'];if (tw9si) {
            for (var jp384u in tw9si) if (tw9si[jp384u] == me8pu) return jp384u;
          }qnr = qnr['nodeType'] == h$i79w ? qnr['ownerDocument'] : qnr['parentNode'];
        }return null;
      }, 'lookupNamespaceURI': function (kx48ju) {
        for (var o06 = this; o06;) {
          var u48kjx = o06['_nsMap'];if (u48kjx && kx48ju in u48kjx) return u48kjx[kx48ju];o06 = o06['nodeType'] == h$i79w ? o06['ownerDocument'] : o06['parentNode'];
        }return null;
      }, 'isDefaultNamespace': function (r60n1) {
        return null == this['lookupPrefix'](r60n1);
      } }, k3u(k5xct_, b3e), k3u(k5xct_, b3e['prototype']), bmpea2['prototype'] = { 'nodeName': '#document', 'nodeType': c5x_k, 'doctype': null, 'documentElement': null, '_inc': 0x1, 'insertBefore': function (n16r0, wi7h1) {
        if (n16r0['nodeType'] != c_kx4j) return null == this['documentElement'] && n16r0['nodeType'] == rqdoz && (this['documentElement'] = n16r0), qn06z(this, n16r0, wi7h1), n16r0['ownerDocument'] = this, n16r0;for (var uxjk84 = n16r0['firstChild']; uxjk84;) {
          var uj3k84 = uxjk84['nextSibling'];this['insertBefore'](uxjk84, wi7h1), uxjk84 = uj3k84;
        }return n16r0;
      }, 'removeChild': function (p8mu3e) {
        return this['documentElement'] == p8mu3e && (this['documentElement'] = null), g2bv(this, p8mu3e);
      }, 'importNode': function (n761, u38pem) {
        return function mj38(pu3jm, pa3ebm, sw9hit) {
          var mbela;switch (pa3ebm['nodeType']) {case rqdoz:
              (mbela = pa3ebm['cloneNode'](!0x1))['ownerDocument'] = pu3jm;case c_kx4j:
              break;case h$i79w:
              sw9hit = !0x0;}mbela = mbela || pa3ebm['cloneNode'](!0x1), mbela['ownerDocument'] = pu3jm, mbela['parentNode'] = null;if (sw9hit) {
            for (var zqo60r = pa3ebm['firstChild']; zqo60r;) mbela['appendChild'](mj38(pu3jm, zqo60r, sw9hit)), zqo60r = zqo60r['nextSibling'];
          }return mbela;
        }(this, n761, u38pem);
      }, 'getElementById': function (_c4k5x) {
        var h9s7wi = null;return jc4kx(this['documentElement'], function (h9w7s) {
          if (h9w7s['nodeType'] == rqdoz && h9w7s['getAttribute']('id') == _c4k5x) return h9s7wi = h9w7s, !0x0;
        }), h9s7wi;
      }, 'createElement': function (nr$176) {
        var au = new puj48();return au['ownerDocument'] = this, au['nodeName'] = nr$176, au['tagName'] = nr$176, au['childNodes'] = new pmeau(), (au['attributes'] = new nz$r6())['_ownerElement'] = au;
      }, 'createDocumentFragment': function () {
        var $6r17n = new abel2();return $6r17n['ownerDocument'] = this, $6r17n['childNodes'] = new pmeau(), $6r17n;
      }, 'createTextNode': function ($1iwn) {
        var x5kc_ = new xjck8();return x5kc_['ownerDocument'] = this, x5kc_['appendData']($1iwn), x5kc_;
      }, 'createComment': function (i17$6n) {
        var z$r61 = new w$97h();return z$r61['ownerDocument'] = this, z$r61['appendData'](i17$6n), z$r61;
      }, 'createCDATASection': function (uepma) {
        var ish97 = new cjx_k4();return ish97['ownerDocument'] = this, ish97['appendData'](uepma), ish97;
      }, 'createProcessingInstruction': function (wi$1h, h1w7$i) {
        var u8pmj3 = new aleb2();return u8pmj3['ownerDocument'] = this, u8pmj3['tagName'] = u8pmj3['target'] = wi$1h, u8pmj3['nodeValue'] = u8pmj3['data'] = h1w7$i, u8pmj3;
      }, 'createAttribute': function ($1r) {
        var z0 = new u4jxk();return z0['ownerDocument'] = this, z0['name'] = $1r, z0['nodeName'] = $1r, z0['localName'] = $1r, z0['specified'] = !0x0, z0;
      }, 'createEntityReference': function (rzdq0) {
        var i$h1 = new hw5s9t();return i$h1['ownerDocument'] = this, i$h1['nodeName'] = rzdq0, i$h1;
      }, 'createElementNS': function (upme83, cxt5_) {
        var oqzrd0 = new puj48(),
            z61r0 = cxt5_['split'](':'),
            t9ish = oqzrd0['attributes'] = new nz$r6();return oqzrd0['childNodes'] = new pmeau(), oqzrd0['ownerDocument'] = this, oqzrd0['nodeName'] = cxt5_, oqzrd0['tagName'] = cxt5_, oqzrd0['namespaceURI'] = upme83, 0x2 == z61r0['length'] ? (oqzrd0['prefix'] = z61r0[0x0], oqzrd0['localName'] = z61r0[0x1]) : oqzrd0['localName'] = cxt5_, t9ish['_ownerElement'] = oqzrd0;
      }, 'createAttributeNS': function (bva2l, hw$i9) {
        var vgal2b = new u4jxk(),
            rq6nz0 = hw$i9['split'](':');return vgal2b['ownerDocument'] = this, vgal2b['nodeName'] = hw$i9, vgal2b['name'] = hw$i9, vgal2b['namespaceURI'] = bva2l, vgal2b['specified'] = !0x0, 0x2 == rq6nz0['length'] ? (vgal2b['prefix'] = rq6nz0[0x0], vgal2b['localName'] = rq6nz0[0x1]) : vgal2b['localName'] = hw$i9, vgal2b;
      } }, ckxj_4(bmpea2, b3e), bmpea2['prototype']['getElementsByTagName'] = (puj48['prototype'] = { 'nodeType': rqdoz, 'hasAttribute': function (aelmb2) {
        return null != this['getAttributeNode'](aelmb2);
      }, 'getAttribute': function (qdzr0) {
        var h9itws = this['getAttributeNode'](qdzr0);return h9itws && h9itws['value'] || '';
      }, 'getAttributeNode': function (eabl2) {
        return this['attributes']['getNamedItem'](eabl2);
      }, 'setAttribute': function (cj48k, _45kx) {
        var wh95st = this['ownerDocument']['createAttribute'](cj48k);wh95st['value'] = wh95st['nodeValue'] = '' + _45kx, this['setAttributeNode'](wh95st);
      }, 'removeAttribute': function (cjx4_) {
        var h9iwts = this['getAttributeNode'](cjx4_);h9iwts && this['removeAttributeNode'](h9iwts);
      }, 'appendChild': function (ablg) {
        return ablg['nodeType'] === c_kx4j ? this['insertBefore'](ablg, null) : function (i1h7$, c_4k5) {
          var r$67 = c_4k5['parentNode'];if (r$67) {
            var c48jxk = i1h7$['lastChild'];r$67['removeChild'](c_4k5), c48jxk = i1h7$['lastChild'];
          }return c48jxk = i1h7$['lastChild'], c_4k5['parentNode'] = i1h7$, c_4k5['previousSibling'] = c48jxk, c_4k5['nextSibling'] = null, c48jxk ? c48jxk['nextSibling'] = c_4k5 : i1h7$['firstChild'] = c_4k5, i1h7$['lastChild'] = c_4k5, is79wh(i1h7$['ownerDocument'], i1h7$, c_4k5), c_4k5;
        }(this, ablg);
      }, 'setAttributeNode': function (rqzdo0) {
        return this['attributes']['setNamedItem'](rqzdo0);
      }, 'setAttributeNodeNS': function ($w1n7i) {
        return this['attributes']['setNamedItemNS']($w1n7i);
      }, 'removeAttributeNode': function (o0qdr) {
        return this['attributes']['removeNamedItem'](o0qdr['nodeName']);
      }, 'removeAttributeNS': function (v2ale, whi$71) {
        var p8e = this['getAttributeNodeNS'](v2ale, whi$71);p8e && this['removeAttributeNode'](p8e);
      }, 'hasAttributeNS': function (r1z$6n, _5sxc) {
        return null != this['getAttributeNodeNS'](r1z$6n, _5sxc);
      }, 'getAttributeNS': function (_sxct, n$6i7) {
        var w$1ih = this['getAttributeNodeNS'](_sxct, n$6i7);return w$1ih && w$1ih['value'] || '';
      }, 'setAttributeNS': function (w97sih, cxkj84, or6q0) {
        var rqnz60 = this['ownerDocument']['createAttributeNS'](w97sih, cxkj84);rqnz60['value'] = rqnz60['nodeValue'] = '' + or6q0, this['setAttributeNode'](rqnz60);
      }, 'getAttributeNodeNS': function (p3ue8m, mpe3u8) {
        return this['attributes']['getNamedItemNS'](p3ue8m, mpe3u8);
      }, 'getElementsByTagName': function (bmape2) {
        return new jxc4k(this, function ($n6r17) {
          var bga2lv = [];return jc4kx($n6r17, function (r$1n7) {
            r$1n7 === $n6r17 || r$1n7['nodeType'] != rqdoz || '*' !== bmape2 && r$1n7['tagName'] != bmape2 || bga2lv['push'](r$1n7);
          }), bga2lv;
        });
      }, 'getElementsByTagNameNS': function (b2alg, ht9iw) {
        return new jxc4k(this, function (a2ebm) {
          var k_54cx = [];return jc4kx(a2ebm, function (wih$) {
            wih$ === a2ebm || wih$['nodeType'] !== rqdoz || '*' !== b2alg && wih$['namespaceURI'] !== b2alg || '*' !== ht9iw && wih$['localName'] != ht9iw || k_54cx['push'](wih$);
          }), k_54cx;
        });
      } })['getElementsByTagName'], bmpea2['prototype']['getElementsByTagNameNS'] = puj48['prototype']['getElementsByTagNameNS'], ckxj_4(puj48, b3e), u4jxk['prototype']['nodeType'] = h$i79w, ckxj_4(u4jxk, b3e), $in761['prototype'] = { 'data': '', 'substringData': function (w$i7, d0oyq) {
        return this['data']['substring'](w$i7, w$i7 + d0oyq);
      }, 'appendData': function (h95t_) {
        h95t_ = this['data'] + h95t_, this['nodeValue'] = this['data'] = h95t_, this['length'] = h95t_['length'];
      }, 'insertData': function (am3peb, s9_t5c) {
        this['replaceData'](am3peb, 0x0, s9_t5c);
      }, 'appendChild': function () {
        throw new Error(n61r7[mab2]);
      }, 'deleteData': function (eump3a, t5h9s) {
        this['replaceData'](eump3a, t5h9s, '');
      }, 'replaceData': function (w97i$, c54k_x, _ct95) {
        _ct95 = this['data']['substring'](0x0, w97i$) + _ct95 + this['data']['substring'](w97i$ + c54k_x), this['nodeValue'] = this['data'] = _ct95, this['length'] = _ct95['length'];
      } }, ckxj_4($in761, b3e), xjck8['prototype'] = { 'nodeName': '#text', 'nodeType': r1z6, 'splitText': function (vgla2b) {
        var a2mbp = this['data'],
            znr1 = a2mbp['substring'](vgla2b);a2mbp = a2mbp['substring'](0x0, vgla2b), this['data'] = this['nodeValue'] = a2mbp, this['length'] = a2mbp['length'];var ba2ep = this['ownerDocument']['createTextNode'](znr1);return this['parentNode'] && this['parentNode']['insertBefore'](ba2ep, this['nextSibling']), ba2ep;
      } }, ckxj_4(xjck8, $in761), w$97h['prototype'] = { 'nodeName': '#comment', 'nodeType': c5x_tk }, ckxj_4(w$97h, $in761), cjx_k4['prototype'] = { 'nodeName': '#cdata-section', 'nodeType': i1hw$7 }, ckxj_4(cjx_k4, $in761), rn76$1['prototype']['nodeType'] = $7h1, ckxj_4(rn76$1, b3e), _9s5ct['prototype']['nodeType'] = h5t_9, ckxj_4(_9s5ct, b3e), zqn60r['prototype']['nodeType'] = mp3a, ckxj_4(zqn60r, b3e), hw5s9t['prototype']['nodeType'] = ct_5s, ckxj_4(hw5s9t, b3e), abel2['prototype']['nodeName'] = '#document-fragment', abel2['prototype']['nodeType'] = c_kx4j, ckxj_4(abel2, b3e), aleb2['prototype']['nodeType'] = jxu4k, ckxj_4(aleb2, b3e), z$n16r['prototype']['serializeToString'] = function (h17i$w, _95hs, th5_9) {
      return upm8j3['call'](h17i$w, _95hs, th5_9);
    }, b3e['prototype']['toString'] = upm8j3;try {
      Object['defineProperty'] && (Object['defineProperty'](jxc4k['prototype'], 'length', { 'get': function () {
          return p2bm(this), this['$$length'];
        } }), Object['defineProperty'](b3e['prototype'], 'textContent', { 'get': function () {
          return function w9hst(blem2a) {
            switch (blem2a['nodeType']) {case rqdoz:case c_kx4j:
                var vgbla = [];for (blem2a = blem2a['firstChild']; blem2a;) 0x7 !== blem2a['nodeType'] && 0x8 !== blem2a['nodeType'] && vgbla['push'](w9hst(blem2a)), blem2a = blem2a['nextSibling'];return vgbla['join']('');default:
                return blem2a['nodeValue'];}
          }(this);
        }, 'set': function (wh$i7) {
          switch (this['nodeType']) {case rqdoz:case c_kx4j:
              for (; this['firstChild'];) this['removeChild'](this['firstChild']);(wh$i7 || String(wh$i7)) && this['appendChild'](this['ownerDocument']['createTextNode'](wh$i7));break;default:
              this['data'] = wh$i7, this['value'] = wh$i7, this['nodeValue'] = wh$i7;}
        } }), le2bma = function (aepu, txc, melb) {
        aepu['$$' + txc] = melb;
      });
    } catch (m3abp) {}mju83['DOMImplementation'] = histw9, mju83['XMLSerializer'] = z$n16r;
  }, {}], 0x15: [function (m2pbe, stx5_, e2blv) {
    'use strict';

    e2blv['entityMap'] = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27', 'Agrave': 'À', 'Aacute': 'Á', 'Acirc': 'Â', 'Atilde': 'Ã', 'Auml': 'Ä', 'Aring': 'Å', 'AElig': 'Æ', 'Ccedil': 'Ç', 'Egrave': 'È', 'Eacute': 'É', 'Ecirc': 'Ê', 'Euml': 'Ë', 'Igrave': 'Ì', 'Iacute': 'Í', 'Icirc': 'Î', 'Iuml': 'Ï', 'ETH': 'Ð', 'Ntilde': 'Ñ', 'Ograve': 'Ò', 'Oacute': 'Ó', 'Ocirc': 'Ô', 'Otilde': 'Õ', 'Ouml': 'Ö', 'Oslash': 'Ø', 'Ugrave': 'Ù', 'Uacute': 'Ú', 'Ucirc': 'Û', 'Uuml': 'Ü', 'Yacute': 'Ý', 'THORN': 'Þ', 'szlig': 'ß', 'agrave': 'à', 'aacute': 'á', 'acirc': 'â', 'atilde': 'ã', 'auml': 'ä', 'aring': 'å', 'aelig': 'æ', 'ccedil': 'ç', 'egrave': 'è', 'eacute': 'é', 'ecirc': 'ê', 'euml': 'ë', 'igrave': 'ì', 'iacute': 'í', 'icirc': 'î', 'iuml': 'ï', 'eth': 'ð', 'ntilde': 'ñ', 'ograve': 'ò', 'oacute': 'ó', 'ocirc': 'ô', 'otilde': 'õ', 'ouml': 'ö', 'oslash': 'ø', 'ugrave': 'ù', 'uacute': 'ú', 'ucirc': 'û', 'uuml': 'ü', 'yacute': 'ý', 'thorn': 'þ', 'yuml': 'ÿ', 'nbsp': '\x20', 'iexcl': '¡', 'cent': '¢', 'pound': '£', 'curren': '¤', 'yen': '¥', 'brvbar': '¦', 'sect': '§', 'uml': '¨', 'copy': '©', 'ordf': 'ª', 'laquo': '«', 'not': '¬', 'shy': '­­', 'reg': '®', 'macr': '¯', 'deg': '°', 'plusmn': '±', 'sup2': '²', 'sup3': '³', 'acute': '´', 'micro': 'µ', 'para': '¶', 'middot': '·', 'cedil': '¸', 'sup1': '¹', 'ordm': 'º', 'raquo': '»', 'frac14': '¼', 'frac12': '½', 'frac34': '¾', 'iquest': '¿', 'times': '×', 'divide': '÷', 'forall': '∀', 'part': '∂', 'exist': '∃', 'empty': '∅', 'nabla': '∇', 'isin': '∈', 'notin': '∉', 'ni': '∋', 'prod': '∏', 'sum': '∑', 'minus': '−', 'lowast': '∗', 'radic': '√', 'prop': '∝', 'infin': '∞', 'ang': '∠', 'and': '∧', 'or': '∨', 'cap': '∩', 'cup': '∪', 'int': '∫', 'there4': '∴', 'sim': '∼', 'cong': '≅', 'asymp': '≈', 'ne': '≠', 'equiv': '≡', 'le': '≤', 'ge': '≥', 'sub': '⊂', 'sup': '⊃', 'nsub': '⊄', 'sube': '⊆', 'supe': '⊇', 'oplus': '⊕', 'otimes': '⊗', 'perp': '⊥', 'sdot': '⋅', 'Alpha': 'Α', 'Beta': 'Β', 'Gamma': 'Γ', 'Delta': 'Δ', 'Epsilon': 'Ε', 'Zeta': 'Ζ', 'Eta': 'Η', 'Theta': 'Θ', 'Iota': 'Ι', 'Kappa': 'Κ', 'Lambda': 'Λ', 'Mu': 'Μ', 'Nu': 'Ν', 'Xi': 'Ξ', 'Omicron': 'Ο', 'Pi': 'Π', 'Rho': 'Ρ', 'Sigma': 'Σ', 'Tau': 'Τ', 'Upsilon': 'Υ', 'Phi': 'Φ', 'Chi': 'Χ', 'Psi': 'Ψ', 'Omega': 'Ω', 'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'epsilon': 'ε', 'zeta': 'ζ', 'eta': 'η', 'theta': 'θ', 'iota': 'ι', 'kappa': 'κ', 'lambda': 'λ', 'mu': 'μ', 'nu': 'ν', 'xi': 'ξ', 'omicron': 'ο', 'pi': 'π', 'rho': 'ρ', 'sigmaf': 'ς', 'sigma': 'σ', 'tau': 'τ', 'upsilon': 'υ', 'phi': 'φ', 'chi': 'χ', 'psi': 'ψ', 'omega': 'ω', 'thetasym': 'ϑ', 'upsih': 'ϒ', 'piv': 'ϖ', 'OElig': 'Œ', 'oelig': 'œ', 'Scaron': 'Š', 'scaron': 'š', 'Yuml': 'Ÿ', 'fnof': 'ƒ', 'circ': 'ˆ', 'tilde': '˜', 'ensp': '\u2002', 'emsp': '\u2003', 'thinsp': '\u2009', 'zwnj': '‌', 'zwj': '‍', 'lrm': '‎', 'rlm': '‏', 'ndash': '–', 'mdash': '—', 'lsquo': '‘', 'rsquo': '’', 'sbquo': '‚', 'ldquo': '“', 'rdquo': '”', 'bdquo': '„', 'dagger': '†', 'Dagger': '‡', 'bull': '•', 'hellip': '…', 'permil': '‰', 'prime': '′', 'Prime': '″', 'lsaquo': '‹', 'rsaquo': '›', 'oline': '‾', 'euro': '€', 'trade': '™', 'larr': '←', 'uarr': '↑', 'rarr': '→', 'darr': '↓', 'harr': '↔', 'crarr': '↵', 'lceil': '⌈', 'rceil': '⌉', 'lfloor': '⌊', 'rfloor': '⌋', 'loz': '◊', 'spades': '♠', 'clubs': '♣', 'hearts': '♥', 'diams': '♦' };
  }, {}], 0x16: [function (yodqz, t9h5w, lebm) {
    'use strict';

    var ro60q = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        qz06nr = new RegExp('[\\-\\.0-9' + ro60q['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
        qrd0zo = new RegExp('^' + ro60q['source'] + qz06nr['source'] + '*(?::' + ro60q['source'] + qz06nr['source'] + '*)?$'),
        r6z1n$ = 0x0,
        x4kc8j = 0x1,
        stih9w = 0x2,
        z610 = 0x3,
        $7iwh9 = 0x4,
        $rz16n = 0x5,
        emba = 0x6,
        roqdz0 = 0x7;function wt9hsi() {}function is7w(vag2bl, isw97h) {
      return isw97h['lineNumber'] = vag2bl['lineNumber'], isw97h['columnNumber'] = vag2bl['columnNumber'], isw97h;
    }function xcs5t_(w5sht, dq0zor, w7i9hs, qz6r0, k8cjx, _tsxc) {
      for (var c4x_, _c5sx = ++dq0zor, ihw7 = r6z1n$;;) {
        var z0q = w5sht['charAt'](_c5sx);switch (z0q) {case '=':
            if (ihw7 === x4kc8j) c4x_ = w5sht['slice'](dq0zor, _c5sx), ihw7 = z610;else {
              if (ihw7 !== stih9w) throw new Error('attribute equal must after attrName');ihw7 = z610;
            }break;case '\x27':case '\x22':
            if (ihw7 === z610 || ihw7 === x4kc8j) {
              if (ihw7 === x4kc8j && (_tsxc['warning']('attribute value must after "="'), c4x_ = w5sht['slice'](dq0zor, _c5sx)), dq0zor = _c5sx + 0x1, !(0x0 < (_c5sx = w5sht['indexOf'](z0q, dq0zor)))) throw new Error('attribute value no end \'' + z0q + '\' match');k_t5c = w5sht['slice'](dq0zor, _c5sx)['replace'](/&#?\w+;/g, k8cjx), w7i9hs['add'](c4x_, k_t5c, dq0zor - 0x1), ihw7 = $rz16n;
            } else {
              if (ihw7 != $7iwh9) throw new Error('attribute value must after "="');k_t5c = w5sht['slice'](dq0zor, _c5sx)['replace'](/&#?\w+;/g, k8cjx), w7i9hs['add'](c4x_, k_t5c, dq0zor), _tsxc['warning']('attribute "' + c4x_ + '" missed start quot(' + z0q + ')!!'), dq0zor = _c5sx + 0x1, ihw7 = $rz16n;
            }break;case '/':
            switch (ihw7) {case r6z1n$:
                w7i9hs['setTagName'](w5sht['slice'](dq0zor, _c5sx));case $rz16n:case emba:case roqdz0:
                ihw7 = roqdz0, w7i9hs['closed'] = !0x0;case $7iwh9:case x4kc8j:case stih9w:
                break;default:
                throw new Error('attribute invalid close char(\'/\')');}break;case '':
            return _tsxc['error']('unexpected end of input'), ihw7 == r6z1n$ && w7i9hs['setTagName'](w5sht['slice'](dq0zor, _c5sx)), _c5sx;case '>':
            switch (ihw7) {case r6z1n$:
                w7i9hs['setTagName'](w5sht['slice'](dq0zor, _c5sx));case $rz16n:case emba:case roqdz0:
                break;case $7iwh9:case x4kc8j:
                '/' === (k_t5c = w5sht['slice'](dq0zor, _c5sx))['slice'](-0x1) && (w7i9hs['closed'] = !0x0, k_t5c = k_t5c['slice'](0x0, -0x1));case stih9w:
                ihw7 === stih9w && (k_t5c = c4x_), ihw7 == $7iwh9 ? (_tsxc['warning']('attribute "' + k_t5c + '" missed quot(")!!'), w7i9hs['add'](c4x_, k_t5c['replace'](/&#?\w+;/g, k8cjx), dq0zor)) : ('http://www.w3.org/1999/xhtml' === qz6r0[''] && k_t5c['match'](/^(?:disabled|checked|selected)$/i) || _tsxc['warning']('attribute "' + k_t5c + '" missed value!! "' + k_t5c + '" instead!!'), w7i9hs['add'](k_t5c, k_t5c, dq0zor));break;case z610:
                throw new Error('attribute value missed!!');}return _c5sx;case '\u0080':
            z0q = '\x20';default:
            if (z0q <= '\x20') switch (ihw7) {case r6z1n$:
                w7i9hs['setTagName'](w5sht['slice'](dq0zor, _c5sx)), ihw7 = emba;break;case x4kc8j:
                c4x_ = w5sht['slice'](dq0zor, _c5sx), ihw7 = stih9w;break;case $7iwh9:
                var k_t5c = w5sht['slice'](dq0zor, _c5sx)['replace'](/&#?\w+;/g, k8cjx);_tsxc['warning']('attribute "' + k_t5c + '" missed quot(")!!'), w7i9hs['add'](c4x_, k_t5c, dq0zor);case $rz16n:
                ihw7 = emba;} else switch (ihw7) {case stih9w:
                w7i9hs['tagName'], ('http://www.w3.org/1999/xhtml' === qz6r0[''] && c4x_['match'](/^(?:disabled|checked|selected)$/i) || _tsxc['warning']('attribute "' + c4x_ + '" missed value!! "' + c4x_ + '" instead2!!'), w7i9hs['add'](c4x_, c4x_, dq0zor), dq0zor = _c5sx, ihw7 = x4kc8j);break;case $rz16n:
                _tsxc['warning']('attribute space is required"' + c4x_ + '\x22!!');case emba:
                ihw7 = x4kc8j, dq0zor = _c5sx;break;case z610:
                ihw7 = $7iwh9, dq0zor = _c5sx;break;case roqdz0:
                throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_c5sx++;
      }
    }function mabe(h9tiws, j84uk3, u8m3pj) {
      for (var peum3a = h9tiws['tagName'], ae2lbm = null, xkc4_ = h9tiws['length']; xkc4_--;) {
        var ni176 = h9tiws[xkc4_],
            _x45ck = ni176['qName'],
            kjxc4_ = ni176['value'];if (0x0 < (_5c4xk = _x45ck['indexOf'](':'))) var u83 = ni176['prefix'] = _x45ck['slice'](0x0, _5c4xk),
            nz16r0 = _x45ck['slice'](_5c4xk + 0x1),
            rozqd = 'xmlns' === u83 && nz16r0;else u83 = null, rozqd = 'xmlns' === (nz16r0 = _x45ck) && '';ni176['localName'] = nz16r0, !0x1 !== rozqd && (null == ae2lbm && (ae2lbm = {}, i$hw1(u8m3pj, u8m3pj = {})), u8m3pj[rozqd] = ae2lbm[rozqd] = kjxc4_, ni176['uri'] = 'http://www.w3.org/2000/xmlns/', j84uk3['startPrefixMapping'](rozqd, kjxc4_));
      }for (xkc4_ = h9tiws['length']; xkc4_--;) {
        (u83 = (ni176 = h9tiws[xkc4_])['prefix']) && ('xml' === u83 && (ni176['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== u83 && (ni176['uri'] = u8m3pj[u83 || '']));
      }var _5c4xk;nz16r0 = 0x0 < (_5c4xk = peum3a['indexOf'](':')) ? (u83 = h9tiws['prefix'] = peum3a['slice'](0x0, _5c4xk), h9tiws['localName'] = peum3a['slice'](_5c4xk + 0x1)) : (u83 = null, h9tiws['localName'] = peum3a);var jm38p = h9tiws['uri'] = u8m3pj[u83 || ''];if (j84uk3['startElement'](jm38p, nz16r0, peum3a, h9tiws), !h9tiws['closed']) return h9tiws['currentNSMap'] = u8m3pj, h9tiws['localNSMap'] = ae2lbm, 0x1;if (j84uk3['endElement'](jm38p, nz16r0, peum3a), ae2lbm) {
        for (u83 in ae2lbm) j84uk3['endPrefixMapping'](u83);
      }
    }function w17h$i(thiw, rznq6, vg2ab, ealbm2, t95c_s) {
      if (/^(?:script|textarea)$/i['test'](vg2ab)) {
        var r16n7 = thiw['indexOf']('</' + vg2ab + '>', rznq6),
            $17in = thiw['substring'](rznq6 + 0x1, r16n7);if (/[&<]/['test']($17in)) return (/^script$/i['test'](vg2ab) || ($17in = $17in['replace'](/&#?\w+;/g, ealbm2)), t95c_s['characters']($17in, 0x0, $17in['length']), r16n7
        );
      }return rznq6 + 0x1;
    }function ni176$(lbg2v, lb2ga, s_tc5x, hi79$) {
      var u34pj = hi79$[s_tc5x];return null == u34pj && ((u34pj = lbg2v['lastIndexOf']('</' + s_tc5x + '>')) < lb2ga && (u34pj = lbg2v['lastIndexOf']('</' + s_tc5x)), hi79$[s_tc5x] = u34pj), u34pj < lb2ga;
    }function i$hw1(peu8m, $6n1z) {
      for (var hi7w$9 in peu8m) $6n1z[hi7w$9] = peu8m[hi7w$9];
    }function ct_xk(wsih79, bp3, mpe3b, rn76) {
      switch (wsih79['charAt'](bp3 + 0x2)) {case '-':
          return '-' !== wsih79['charAt'](bp3 + 0x3) ? -0x1 : bp3 < (rzn16$ = wsih79['indexOf']('-->', bp3 + 0x4)) ? (mpe3b['comment'](wsih79, bp3 + 0x4, rzn16$ - bp3 - 0x4), rzn16$ + 0x3) : (rn76['error']('Unclosed comment'), -0x1);default:
          if ('CDATA[' == wsih79['substr'](bp3 + 0x3, 0x6)) {
            var rzn16$ = wsih79['indexOf'](']]>', bp3 + 0x9);return mpe3b['startCDATA'](), mpe3b['characters'](wsih79, bp3 + 0x9, rzn16$ - bp3 - 0x9), mpe3b['endCDATA'](), rzn16$ + 0x3;
          }var oq6z0 = function (bemap, ba2mp) {
            var rdzo,
                kju = [],
                zdoqr0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;zdoqr0['lastIndex'] = ba2mp, zdoqr0['exec'](bemap);for (; rdzo = zdoqr0['exec'](bemap);) if (kju['push'](rdzo), rdzo[0x1]) return kju;
          }(wsih79, bp3),
              n$6r17 = oq6z0['length'];if (0x1 < n$6r17 && /!doctype/i['test'](oq6z0[0x0][0x0])) {
            var n6z$r1 = oq6z0[0x1][0x0],
                s9twh = 0x3 < n$6r17 && /^public$/i['test'](oq6z0[0x2][0x0]) && oq6z0[0x3][0x0],
                lv2bae = 0x4 < n$6r17 && oq6z0[0x4][0x0],
                xk54_c = oq6z0[n$6r17 - 0x1];return mpe3b['startDTD'](n6z$r1, s9twh && s9twh['replace'](/^(['"])(.*?)\1$/, '$2'), lv2bae && lv2bae['replace'](/^(['"])(.*?)\1$/, '$2')), mpe3b['endDTD'](), xk54_c['index'] + xk54_c[0x0]['length'];
          }}return -0x1;
    }function bp2m(gv2lab, i7n$w, la2vbe) {
      var s_5t9h = gv2lab['indexOf']('?>', i7n$w);if (s_5t9h) {
        var xj4c_k = gv2lab['substring'](i7n$w, s_5t9h)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xj4c_k) return xj4c_k[0x0]['length'], (la2vbe['processingInstruction'](xj4c_k[0x1], xj4c_k[0x2]), s_5t9h + 0x2);return -0x1;
      }return -0x1;
    }function _9hs5t(z6nq0r) {}wt9hsi['prototype'] = { 'parse': function (st9_c, aump, a3pum) {
        var apme3b = this['domBuilder'];apme3b['startDocument'](), i$hw1(aump, aump = {}), function (bealm2, xk_c5, _x5tc, wsti, sctx5_) {
          function r$71n(agvlb2) {
            var th_9s5 = agvlb2['slice'](0x1, -0x1);return th_9s5 in _x5tc ? _x5tc[th_9s5] : '#' === th_9s5['charAt'](0x0) ? function (a3e) {
              if (0xffff < a3e) {
                var $1ni76 = 0xd800 + ((a3e -= 0x10000) >> 0xa),
                    z6r1n$ = 0xdc00 + (0x3ff & a3e);return String['fromCharCode']($1ni76, z6r1n$);
              }return String['fromCharCode'](a3e);
            }(parseInt(th_9s5['substr'](0x1)['replace']('x', '0x'))) : (sctx5_['error']('entity not found:' + agvlb2), agvlb2);
          }function t9wihs(iht9sw) {
            if (w$17in < iht9sw) {
              var $whi9 = bealm2['substring'](w$17in, iht9sw)['replace'](/&#?\w+;/g, r$71n);u3jm8p && t5xck(w$17in), wsti['characters']($whi9, 0x0, iht9sw - w$17in), w$17in = iht9sw;
            }
          }function t5xck(zqn6r0, zod0qy) {
            for (; h59ts_ <= zqn6r0 && (zod0qy = kc_45['exec'](bealm2));) hstwi9 = zod0qy['index'], h59ts_ = hstwi9 + zod0qy[0x0]['length'], u3jm8p['lineNumber']++;u3jm8p['columnNumber'] = zqn6r0 - hstwi9 + 0x1;
          }var hstwi9 = 0x0,
              h59ts_ = 0x0,
              kc_45 = /.*(?:\r\n?|\n)|.*$/g,
              u3jm8p = wsti['locator'],
              jk34u8 = [{ 'currentNSMap': xk_c5 }],
              z06r1 = {},
              w$17in = 0x0;for (;;) {
            try {
              var cxtk_5 = bealm2['indexOf']('<', w$17in);if (cxtk_5 < 0x0) {
                if (!bealm2['substr'](w$17in)['match'](/^\s*$/)) {
                  var cx_5 = wsti['doc'],
                      _s9t5c = cx_5['createTextNode'](bealm2['substr'](w$17in));cx_5['appendChild'](_s9t5c), wsti['currentElement'] = _s9t5c;
                }return;
              }switch (w$17in < cxtk_5 && t9wihs(cxtk_5), bealm2['charAt'](cxtk_5 + 0x1)) {case '/':
                  var e3pamu = bealm2['indexOf']('>', cxtk_5 + 0x3),
                      tcs = bealm2['substring'](cxtk_5 + 0x2, e3pamu),
                      zqyd0o = jk34u8['pop']();e3pamu < 0x0 ? (tcs = bealm2['substring'](cxtk_5 + 0x2)['replace'](/[\s<].*/, ''), sctx5_['error']('end tag name: ' + tcs + ' is not complete:' + zqyd0o['tagName']), e3pamu = cxtk_5 + 0x1 + tcs['length']) : tcs['match'](/\s</) && (tcs = tcs['replace'](/[\s<].*/, ''), sctx5_['error']('end tag name: ' + tcs + ' maybe not complete'), e3pamu = cxtk_5 + 0x1 + tcs['length']);var abmp = zqyd0o['localNSMap'],
                      bp3ema = zqyd0o['tagName'] == tcs;if (bp3ema || zqyd0o['tagName'] && zqyd0o['tagName']['toLowerCase']() == tcs['toLowerCase']()) {
                    if (wsti['endElement'](zqyd0o['uri'], zqyd0o['localName'], tcs), abmp) {
                      for (var i$7w1h in abmp) wsti['endPrefixMapping'](i$7w1h);
                    }bp3ema || sctx5_['fatalError']('end tag name: ' + tcs + ' is not match the current start tagName:' + zqyd0o['tagName']);
                  } else jk34u8['push'](zqyd0o);e3pamu++;break;case '?':
                  u3jm8p && t5xck(cxtk_5), e3pamu = bp2m(bealm2, cxtk_5, wsti);break;case '!':
                  u3jm8p && t5xck(cxtk_5), e3pamu = ct_xk(bealm2, cxtk_5, wsti, sctx5_);break;default:
                  u3jm8p && t5xck(cxtk_5);var droz0 = new _9hs5t(),
                      iwhst9 = jk34u8[jk34u8['length'] - 0x1]['currentNSMap'],
                      mupj = (e3pamu = xcs5t_(bealm2, cxtk_5, droz0, iwhst9, r$71n, sctx5_), droz0['length']);if (!droz0['closed'] && ni176$(bealm2, e3pamu, droz0['tagName'], z06r1) && (droz0['closed'] = !0x0, _x5tc['nbsp'] || sctx5_['warning']('unclosed xml attribute')), u3jm8p && mupj) {
                    for (var ro0qd = is7w(u3jm8p, {}), qorz60 = 0x0; qorz60 < mupj; qorz60++) {
                      var hi9wts = droz0[qorz60];t5xck(hi9wts['offset']), hi9wts['locator'] = is7w(u3jm8p, {});
                    }wsti['locator'] = ro0qd, mabe(droz0, wsti, iwhst9) && jk34u8['push'](droz0), wsti['locator'] = u3jm8p;
                  } else mabe(droz0, wsti, iwhst9) && jk34u8['push'](droz0);'http://www.w3.org/1999/xhtml' !== droz0['uri'] || droz0['closed'] ? e3pamu++ : e3pamu = w17h$i(bealm2, e3pamu, droz0['tagName'], r$71n, wsti);}
            } catch (n$i176) {
              sctx5_['error']('element parse error: ' + n$i176), e3pamu = -0x1;
            }w$17in < e3pamu ? w$17in = e3pamu : t9wihs(Math['max'](cxtk_5, w$17in) + 0x1);
          }
        }(st9_c, aump, a3pum, apme3b, this['errorHandler']), apme3b['endDocument']();
      } }, _9hs5t['prototype'] = { 'setTagName': function (jmup8) {
        if (!qrd0zo['test'](jmup8)) throw new Error('invalid tagName:' + jmup8);this['tagName'] = jmup8;
      }, 'add': function (x5tkc, r0qdoz, u8mp) {
        if (!qrd0zo['test'](x5tkc)) throw new Error('invalid attribute:' + x5tkc);this[this['length']++] = { 'qName': x5tkc, 'value': r0qdoz, 'offset': u8mp };
      }, 'length': 0x0, 'getLocalName': function (eumap) {
        return this[eumap]['localName'];
      }, 'getLocator': function ($hi71w) {
        return this[$hi71w]['locator'];
      }, 'getQName': function (twh5s) {
        return this[twh5s]['qName'];
      }, 'getURI': function (n1i$7w) {
        return this[n1i$7w]['uri'];
      }, 'getValue': function (k3j48) {
        return this[k3j48]['value'];
      } }, lebm['XMLReader'] = wt9hsi;
  }, {}], 0x17: [function (dro0, tsc5_9, nq6) {
    'use strict';

    var ct9s_5 = GameGlobal,
        ju3k8 = ct9s_5['__globalAdapter'] = {};Object['assign'](ju3k8, { 'init': function () {
        dro0('./wrapper/builtin'), ct9s_5['DOMParser'] = dro0('../../common/xmldoundefined-parser')['DOMParser'], dro0('./wrapper/unify'), dro0('./wrapper/fs-utils'), dro0('../../common/remote-downloader'), dro0('../../common/engine/globalAdapter'), dro0('./wrapper/systemInfo');
      }, 'adaptEngine': function () {
        dro0('../../common/engine'), dro0('./wrapper/engine'), dro0('./wrapper/sub-context-adapter');
      } });
  }, { '../../common/engine': 0xf, '../../common/engine/globalAdapter': 0xe, '../../common/remote-downloader': 0x11, '../../common/xmldoundefined-parser': 0x13, './wrapper/builtin': 0x2e, './wrapper/engine': 0x35, './wrapper/fs-utils': 0x37, './wrapper/sub-context-adapter': 0x1, './wrapper/systemInfo': 0x38, './wrapper/unify': 0x39 }], 0x18: [function (x_4kc, hwi9t, ku4xj8) {
    'use strict';

    Object['defineProperty'](ku4xj8, '__esModule', { 'value': !0x0 }), ku4xj8['default'] = void 0x0;var jxc48,
        l2avbg = (jxc48 = x_4kc('./HTMLAudioElement')) && jxc48['__esModule'] ? jxc48 : { 'default': jxc48 };function r610z(gal2) {
      return (r610z = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (xkj_c4) {
        return typeof xkj_c4;
      } : function (u3ampe) {
        return u3ampe && 'function' == typeof Symbol && u3ampe['constructor'] === Symbol && u3ampe !== Symbol['prototype'] ? 'symbol' : typeof u3ampe;
      })(gal2);
    }function i7swh(mb2ep, is9hw) {
      for (var zo0 = 0x0; zo0 < is9hw['length']; zo0++) {
        var c_tx5k = is9hw[zo0];c_tx5k['enumerable'] = c_tx5k['enumerable'] || !0x1, c_tx5k['configurable'] = !0x0, 'value' in c_tx5k && (c_tx5k['writable'] = !0x0), Object['defineProperty'](mb2ep, c_tx5k['key'], c_tx5k);
      }
    }function n67(x5tc, _5x4ck, h9w$i7) {
      return (n67 = 'undefined' != typeof Reflect && Reflect['get'] ? Reflect['get'] : function (tsxc5_, _95h, sw9i7) {
        var q0n6r = function (em8p3, z0r6n1) {
          for (; !Object['prototype']['hasOwnProperty']['call'](em8p3, z0r6n1) && null !== (em8p3 = tkc(em8p3)););return em8p3;
        }(tsxc5_, _95h);if (q0n6r) {
          var qrnz6 = Object['getOwnPropertyDescriptor'](q0n6r, _95h);return qrnz6['get'] ? qrnz6['get']['call'](sw9i7) : qrnz6['value'];
        }
      })(x5tc, _5x4ck, h9w$i7 || x5tc);
    }function amuep3(w97$h) {
      return function () {
        var kj84u,
            xt5_k,
            k4u8jx,
            xk5c4_ = tkc(w97$h);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (e2lavb) {
            return;
          }
        }()) {
          var s9_5t = tkc(this)['constructor'];kj84u = Reflect['construct'](xk5c4_, arguments, s9_5t);
        } else kj84u = xk5c4_['apply'](this, arguments);return xt5_k = this, !(k4u8jx = kj84u) || 'object' !== r610z(k4u8jx) && 'function' != typeof k4u8jx ? function (zd0qr) {
          if (void 0x0 !== zd0qr) return zd0qr;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(xt5_k) : k4u8jx;
      };
    }function tkc(r016) {
      return (tkc = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (aglv) {
        return aglv['__proto__'] || Object['getPrototypeOf'](aglv);
      })(r016);
    }function z0r6q(lvab2g, vl2gab) {
      return (z0r6q = Object['setPrototypeOf'] || function (jk83u4, kxj) {
        return jk83u4['__proto__'] = kxj, jk83u4;
      })(lvab2g, vl2gab);
    }var k48uj3 = 0x1,
        _4kcj = {},
        v2bag = function () {
      !function (eblma2, r0q6nz) {
        if ('function' != typeof r0q6nz && null !== r0q6nz) throw new TypeError('Super expression must either be null or a function');eblma2['prototype'] = Object['create'](r0q6nz && r0q6nz['prototype'], { 'constructor': { 'value': eblma2, 'writable': !0x0, 'configurable': !0x0 } }), r0q6nz && z0r6q(eblma2, r0q6nz);
      }(jkc84x, l2avbg['default']);var i$h1w,
          o0yqzd,
          _cxt5s,
          ju38mp = amuep3(jkc84x);function jkc84x(s9t_h5) {
        var $97;!function (e83pu, k438u) {
          if (!(e83pu instanceof k438u)) throw new TypeError('Cannot call a class as a function');
        }(this, jkc84x), ($97 = ju38mp['call'](this))['_$sn'] = k48uj3++, $97['HAVE_NOTHING'] = 0x0, $97['HAVE_METADATA'] = 0x1, $97['HAVE_CURRENT_DATA'] = 0x2, $97['HAVE_FUTURE_DATA'] = 0x3, $97['HAVE_ENOUGH_DATA'] = 0x4, $97['readyState'] = 0x0;var k8j4 = wx['createInnerAudioContext']();return _4kcj[$97['_$sn']] = k8j4, $97['_canplayEvents'] = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'], k8j4['onCanplay'](function () {
          $97['_loaded'] = !0x0, $97['readyState'] = $97['HAVE_CURRENT_DATA'], $97['_canplayEvents']['forEach'](function (h5s_9) {
            $97['dispatchEvent']({ 'type': h5s_9 });
          });
        }), k8j4['onPlay'](function () {
          $97['_paused'] = _4kcj[$97['_$sn']]['paused'], $97['dispatchEvent']({ 'type': 'play' });
        }), k8j4['onPause'](function () {
          $97['_paused'] = _4kcj[$97['_$sn']]['paused'], $97['dispatchEvent']({ 'type': 'pause' });
        }), k8j4['onEnded'](function () {
          $97['_paused'] = _4kcj[$97['_$sn']]['paused'], !0x1 === _4kcj[$97['_$sn']]['loop'] && $97['dispatchEvent']({ 'type': 'ended' }), $97['readyState'] = 0x4;
        }), k8j4['onError'](function () {
          $97['_paused'] = _4kcj[$97['_$sn']]['paused'], $97['dispatchEvent']({ 'type': 'error' });
        }), s9t_h5 ? $97['src'] = s9t_h5 : $97['_src'] = '', $97['_loop'] = k8j4['loop'], $97['_autoplay'] = k8j4['autoplay'], $97['_paused'] = k8j4['paused'], $97['_volume'] = k8j4['volume'], $97['_muted'] = !0x1, $97;
      }return i$h1w = jkc84x, (o0yqzd = [{ 'key': 'addEventListener', 'value': function (mp3u, j4xck8, in6$71) {
          var i17$wn = 0x2 < arguments['length'] && void 0x0 !== in6$71 ? in6$71 : {};n67(tkc(jkc84x['prototype']), 'addEventListener', this)['call'](this, mp3u, j4xck8, i17$wn), mp3u = String(mp3u)['toLowerCase'](), this['_loaded'] && -0x1 !== this['_canplayEvents']['indexOf'](mp3u) && this['dispatchEvent']({ 'type': mp3u });
        } }, { 'key': 'load', 'value': function () {} }, { 'key': 'play', 'value': function () {
          _4kcj[this['_$sn']]['play']();
        } }, { 'key': 'resume', 'value': function () {
          _4kcj[this['_$sn']]['resume']();
        } }, { 'key': 'pause', 'value': function () {
          _4kcj[this['_$sn']]['pause']();
        } }, { 'key': 'stop', 'value': function () {
          _4kcj[this['_$sn']]['stop']();
        } }, { 'key': 'destroy', 'value': function () {
          _4kcj[this['_$sn']]['destroy']();
        } }, { 'key': 'canPlayType', 'value': function (lbagv2) {
          var rq6zn = 0x0 < arguments['length'] && void 0x0 !== lbagv2 ? lbagv2 : '';return 'string' == typeof rq6zn && (-0x1 < rq6zn['indexOf']('audio/mpeg') || rq6zn['indexOf']('audio/mp4')) ? 'probably' : '';
        } }, { 'key': 'cloneNode', 'value': function () {
          var p8u3jm = new jkc84x();return p8u3jm['loop'] = this['loop'], p8u3jm['autoplay'] = this['autoplay'], p8u3jm['src'] = this['src'], p8u3jm;
        } }, { 'key': 'currentTime', 'get': function () {
          return _4kcj[this['_$sn']]['currentTime'];
        }, 'set': function (xkuj) {
          _4kcj[this['_$sn']]['seek'](xkuj);
        } }, { 'key': 'duration', 'get': function () {
          return _4kcj[this['_$sn']]['duration'];
        } }, { 'key': 'src', 'get': function () {
          return this['_src'];
        }, 'set': function (u83pe) {
          this['_src'] = u83pe, this['_loaded'] = !0x1, this['readyState'] = this['HAVE_NOTHING'], _4kcj[this['_$sn']]['src'] = u83pe;
        } }, { 'key': 'loop', 'get': function () {
          return this['_loop'];
        }, 'set': function (ukj4x) {
          this['_loop'] = ukj4x, _4kcj[this['_$sn']]['loop'] = ukj4x;
        } }, { 'key': 'autoplay', 'get': function () {
          return this['autoplay'];
        }, 'set': function (p43uj) {
          this['_autoplay'] = p43uj, _4kcj[this['_$sn']]['autoplay'] = p43uj;
        } }, { 'key': 'paused', 'get': function () {
          return this['_paused'];
        } }, { 'key': 'volume', 'get': function () {
          return this['_volume'];
        }, 'set': function (n0rzq6) {
          this['_volume'] = n0rzq6, this['_muted'] || (_4kcj[this['_$sn']]['volume'] = n0rzq6);
        } }, { 'key': 'muted', 'get': function () {
          return this['_muted'];
        }, 'set': function (x5ck) {
          this['_muted'] = x5ck, _4kcj[this['_$sn']]['volume'] = x5ck ? 0x0 : this['_volume'];
        } }]) && i7swh(i$h1w['prototype'], o0yqzd), _cxt5s && i7swh(i$h1w, _cxt5s), jkc84x;
    }();ku4xj8['default'] = v2bag, hwi9t['exports'] = ku4xj8['default'];
  }, { './HTMLAudioElement': 0x20 }], 0x19: [function (rzoq6, r1nz60, vgbl2) {
    'use strict';

    Object['defineProperty'](vgbl2, '__esModule', { 'value': !0x0 }), vgbl2['default'] = function () {
      var amu3e = wx['createCanvas']();return amu3e['type'] = 'canvas', amu3e['getContext'], (amu3e['getBoundingClientRect'] = function () {
        return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
      }, amu3e['style'] = { 'top': '0px', 'left': '0px', 'width': whst9i['innerWidth'] + 'px', 'height': whst9i['innerHeight'] + 'px' }, amu3e['addEventListener'] = function (xkc_j4, roq60z) {
        var w$n1i = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {};document['addEventListener'](xkc_j4, roq60z, w$n1i);
      }, amu3e['removeEventListener'] = function (si9h7w, r17n) {
        document['removeEventListener'](si9h7w, r17n);
      }, amu3e['dispatchEvent'] = function () {
        var t9c5_s = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {};console['log']('canvas.dispatchEvent', t9c5_s['type'], t9c5_s);
      }, Object['defineProperty'](amu3e, 'clientWidth', { 'enumerable': !0x0, 'get': function () {
          return whst9i['innerWidth'];
        } }), Object['defineProperty'](amu3e, 'clientHeight', { 'enumerable': !0x0, 'get': function () {
          return whst9i['innerHeight'];
        } }), amu3e);
    };var whst9i = rzoq6('./WindowProperties');r1nz60['exports'] = vgbl2['default'];
  }, { './WindowProperties': 0x2b }], 0x1a: [function ($hi7, r0dozq, c5xk) {
    'use strict';

    Object['defineProperty'](c5xk, '__esModule', { 'value': !0x0 }), c5xk['default'] = void 0x0;var w$ih79,
        up3j8m = (w$ih79 = $hi7('./Node')) && w$ih79['__esModule'] ? w$ih79 : { 'default': w$ih79 };function oqzr60(z0o) {
      return (oqzr60 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (xt_ck) {
        return typeof xt_ck;
      } : function (csx_5t) {
        return csx_5t && 'function' == typeof Symbol && csx_5t['constructor'] === Symbol && csx_5t !== Symbol['prototype'] ? 'symbol' : typeof csx_5t;
      })(z0o);
    }function kc84x(nz6$) {
      return function () {
        var mp3uj,
            empb,
            y0odq,
            j8u3m = ht_s(nz6$);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (alb2e) {
            return;
          }
        }()) {
          var b2vg = ht_s(this)['constructor'];mp3uj = Reflect['construct'](j8u3m, arguments, b2vg);
        } else mp3uj = j8u3m['apply'](this, arguments);return empb = this, !(y0odq = mp3uj) || 'object' !== oqzr60(y0odq) && 'function' != typeof y0odq ? function (lv2ba) {
          if (void 0x0 !== lv2ba) return lv2ba;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(empb) : y0odq;
      };
    }function ht_s(w5ts9) {
      return (ht_s = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (rdqz) {
        return rdqz['__proto__'] || Object['getPrototypeOf'](rdqz);
      })(w5ts9);
    }function m2lba(am2bl, k4jx) {
      return (m2lba = Object['setPrototypeOf'] || function ($nr61z, pabm3e) {
        return $nr61z['__proto__'] = pabm3e, $nr61z;
      })(am2bl, k4jx);
    }var $9h7wi = function () {
      !function (i1$h7, bp3ma) {
        if ('function' != typeof bp3ma && null !== bp3ma) throw new TypeError('Super expression must either be null or a function');i1$h7['prototype'] = Object['create'](bp3ma && bp3ma['prototype'], { 'constructor': { 'value': i1$h7, 'writable': !0x0, 'configurable': !0x0 } }), bp3ma && m2lba(i1$h7, bp3ma);
      }(rzq60o, up3j8m['default']);var zy0od = kc84x(rzq60o);function rzq60o() {
        var eabp;return function (oyqzd, eu3ma) {
          if (!(oyqzd instanceof eu3ma)) throw new TypeError('Cannot call a class as a function');
        }(this, rzq60o), (eabp = zy0od['call'](this))['className'] = '', eabp['children'] = [], eabp;
      }return rzq60o;
    }();c5xk['default'] = $9h7wi, r0dozq['exports'] = c5xk['default'];
  }, { './Node': 0x28 }], 0x1b: [function (oqy0d, s5t9h, wi9s7h) {
    'use strict';

    Object['defineProperty'](wi9s7h, '__esModule', { 'value': !0x0 }), wi9s7h['default'] = void 0x0, (wi9s7h['default'] = function $76in() {
      !function (bmle2a, kx8) {
        if (!(bmle2a instanceof kx8)) throw new TypeError('Cannot call a class as a function');
      }(this, $76in);
    }, s5t9h['exports'] = wi9s7h['default']);
  }, {}], 0x1c: [function (rn7$16, sc_5xt, u34jp) {
    'use strict';

    Object['defineProperty'](u34jp, '__esModule', { 'value': !0x0 }), u34jp['default'] = void 0x0;var ujx4k8 = rn7$16('../util/index.js');function mua3(e3ump) {
      !function (me3pu, ue38mp) {
        if (!(me3pu instanceof ue38mp)) throw new TypeError('Cannot call a class as a function');
      }(this, mua3), this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = ujx4k8['noop'], this['stopPropagation'] = ujx4k8['noop'], this['type'] = e3ump, this['target'] = window['canvas'], this['currentTarget'] = window['canvas'];
    }function mep8(beval) {
      return function (_kxc54) {
        var rq06oz = new mua3(beval);rq06oz['touches'] = _kxc54['touches'], rq06oz['targetTouches'] = Array['prototype']['slice']['call'](_kxc54['touches']), rq06oz['changedTouches'] = _kxc54['changedTouches'], rq06oz['timeStamp'] = _kxc54['timeStamp'], document['dispatchEvent'](rq06oz);
      };
    }u34jp['default'] = mua3, wx['onTouchStart'](mep8('touchstart')), wx['onTouchMove'](mep8('touchmove')), wx['onTouchEnd'](mep8('touchend')), wx['onTouchCancel'](mep8('touchcancel')), sc_5xt['exports'] = u34jp['default'];
  }, { '../util/index.js': 0x32 }], 0x1d: [function (nq60z, t9iswh, s7hwi9) {
    'use strict';

    Object['defineProperty'](s7hwi9, '__esModule', { 'value': !0x0 }), Object['defineProperty'](s7hwi9, 'TouchEvent', { 'enumerable': !0x0, 'get': function () {
        return $7i9h['default'];
      } }), Object['defineProperty'](s7hwi9, 'MouseEvent', { 'enumerable': !0x0, 'get': function () {
        return iwsh9['default'];
      } });var $7i9h = epum3(nq60z('./TouchEvent')),
        iwsh9 = epum3(nq60z('./MouseEvent'));function epum3(ctx_) {
      return ctx_ && ctx_['__esModule'] ? ctx_ : { 'default': ctx_ };
    }
  }, { './MouseEvent': 0x1b, './TouchEvent': 0x1c }], 0x1e: [function (s9w7i, $w1n, e3bamp) {
    'use strict';

    function zqoyd0(r61zn$, k3u8) {
      for (var jc4kx8 = 0x0; jc4kx8 < k3u8['length']; jc4kx8++) {
        var x_c = k3u8[jc4kx8];x_c['enumerable'] = x_c['enumerable'] || !0x1, x_c['configurable'] = !0x0, 'value' in x_c && (x_c['writable'] = !0x0), Object['defineProperty'](r61zn$, x_c['key'], x_c);
      }
    }Object['defineProperty'](e3bamp, '__esModule', { 'value': !0x0 }), e3bamp['default'] = void 0x0;var zqoy = new WeakMap(),
        _9ts5 = function () {
      function $wi7h() {
        !function (rn$z61, uj8pm3) {
          if (!(rn$z61 instanceof uj8pm3)) throw new TypeError('Cannot call a class as a function');
        }(this, $wi7h), zqoy['set'](this, {});
      }var uj48p3, in$761, lvabg2;return uj48p3 = $wi7h, (in$761 = [{ 'key': 'addEventListener', 'value': function (n$1z6, h7$wi, i7w9h) {
          var $h1w7 = 0x2 < arguments['length'] && void 0x0 !== i7w9h ? i7w9h : {},
              pum38j = zqoy['get'](this);pum38j || (pum38j = {}, zqoy['set'](this, pum38j)), pum38j[n$1z6] || (pum38j[n$1z6] = []), pum38j[n$1z6]['push'](h7$wi), $h1w7['capture'], $h1w7['once'], $h1w7['passive'];
        } }, { 'key': 'removeEventListener', 'value': function (pj83m, dqoyz0) {
          var m3bepa = zqoy['get'](this);if (m3bepa) {
            var i$1h7w = m3bepa[pj83m];if (i$1h7w && 0x0 < i$1h7w['length']) {
              for (var ht5ws9 = i$1h7w['length']; ht5ws9--;) if (i$1h7w[ht5ws9] === dqoyz0) {
                i$1h7w['splice'](ht5ws9, 0x1);break;
              }
            }
          }
        } }, { 'key': 'dispatchEvent', 'value': function (vagb) {
          var c5_kt = 0x0 < arguments['length'] && void 0x0 !== vagb ? vagb : {},
              ujp3m = zqoy['get'](this)[c5_kt['type']];if (ujp3m) {
            for (var x8j4c = 0x0; x8j4c < ujp3m['length']; x8j4c++) ujp3m[x8j4c](c5_kt);
          }
        } }]) && zqoyd0(uj48p3['prototype'], in$761), lvabg2 && zqoyd0(uj48p3, lvabg2), $wi7h;
    }();e3bamp['default'] = _9ts5, $w1n['exports'] = e3bamp['default'];
  }, {}], 0x1f: [function (r0o6, j84kcx, sh59t) {
    'use strict';

    function c84kx(xj4, juk3) {
      for (var rqz60n = 0x0; rqz60n < juk3['length']; rqz60n++) {
        var ma3pu = juk3[rqz60n];ma3pu['enumerable'] = ma3pu['enumerable'] || !0x1, ma3pu['configurable'] = !0x0, 'value' in ma3pu && (ma3pu['writable'] = !0x0), Object['defineProperty'](xj4, ma3pu['key'], ma3pu);
      }
    }Object['defineProperty'](sh59t, '__esModule', { 'value': !0x0 }), sh59t['default'] = void 0x0;var s9th5_ = function () {
      function ux48kj() {
        !function (el2ma, kj_4xc) {
          if (!(el2ma instanceof kj_4xc)) throw new TypeError('Cannot call a class as a function');
        }(this, ux48kj);
      }var t5xkc_, abl2g, c_sx5;return t5xkc_ = ux48kj, (abl2g = [{ 'key': 'construct', 'value': function () {} }]) && c84kx(t5xkc_['prototype'], abl2g), c_sx5 && c84kx(t5xkc_, c_sx5), ux48kj;
    }();sh59t['default'] = s9th5_, j84kcx['exports'] = sh59t['default'];
  }, {}], 0x20: [function (k84xjc, z6r0oq, o0zy) {
    'use strict';

    Object['defineProperty'](o0zy, '__esModule', { 'value': !0x0 }), o0zy['default'] = void 0x0;var umpe3a,
        s5_th9 = (umpe3a = k84xjc('./HTMLMediaElement')) && umpe3a['__esModule'] ? umpe3a : { 'default': umpe3a };function wi1$n(m8eu3p) {
      return (wi1$n = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (c9_5) {
        return typeof c9_5;
      } : function (k_cjx) {
        return k_cjx && 'function' == typeof Symbol && k_cjx['constructor'] === Symbol && k_cjx !== Symbol['prototype'] ? 'symbol' : typeof k_cjx;
      })(m8eu3p);
    }function siwht9(s_xt5c) {
      return function () {
        var kuj48,
            eb2la,
            kj_,
            r60qnz = vga2l(s_xt5c);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (vl2be) {
            return;
          }
        }()) {
          var c_t5xs = vga2l(this)['constructor'];kuj48 = Reflect['construct'](r60qnz, arguments, c_t5xs);
        } else kuj48 = r60qnz['apply'](this, arguments);return eb2la = this, !(kj_ = kuj48) || 'object' !== wi1$n(kj_) && 'function' != typeof kj_ ? function (zn1r0) {
          if (void 0x0 !== zn1r0) return zn1r0;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(eb2la) : kj_;
      };
    }function vga2l(k_ct5) {
      return (vga2l = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (pm83ju) {
        return pm83ju['__proto__'] || Object['getPrototypeOf'](pm83ju);
      })(k_ct5);
    }function b3am(z6n1r, pj38m) {
      return (b3am = Object['setPrototypeOf'] || function (rn, ma3ue) {
        return rn['__proto__'] = ma3ue, rn;
      })(z6n1r, pj38m);
    }var t9h5_s = function () {
      !function (rnz16, oydq0z) {
        if ('function' != typeof oydq0z && null !== oydq0z) throw new TypeError('Super expression must either be null or a function');rnz16['prototype'] = Object['create'](oydq0z && oydq0z['prototype'], { 'constructor': { 'value': rnz16, 'writable': !0x0, 'configurable': !0x0 } }), oydq0z && b3am(rnz16, oydq0z);
      }(q0ydz, s5_th9['default']);var evla2 = siwht9(q0ydz);function q0ydz() {
        return function (r7$6, k4u3j) {
          if (!(r7$6 instanceof k4u3j)) throw new TypeError('Cannot call a class as a function');
        }(this, q0ydz), evla2['call'](this, 'audio');
      }return q0ydz;
    }();o0zy['default'] = t9h5_s, z6r0oq['exports'] = o0zy['default'];
  }, { './HTMLMediaElement': 0x24 }], 0x21: [function (cjx84k, ni1$, _4jcxk) {
    'use strict';

    Object['defineProperty'](_4jcxk, '__esModule', { 'value': !0x0 }), _4jcxk['default'] = void 0x0;var epm8 = z0n1(cjx84k('./Canvas'));z0n1(cjx84k('./HTMLElement'));function z0n1(r6n1$7) {
      return r6n1$7 && r6n1$7['__esModule'] ? r6n1$7 : { 'default': r6n1$7 };
    }GameGlobal['screencanvas'] = GameGlobal['screencanvas'] || new epm8['default']();var vabl = GameGlobal['screencanvas']['constructor'];_4jcxk['default'] = vabl, ni1$['exports'] = _4jcxk['default'];
  }, { './Canvas': 0x19, './HTMLElement': 0x22 }], 0x22: [function (p3u8j4, t95ws, $97h) {
    'use strict';

    Object['defineProperty']($97h, '__esModule', { 'value': !0x0 }), $97h['default'] = void 0x0;var aevlb2,
        i7hws9 = (aevlb2 = p3u8j4('./Element')) && aevlb2['__esModule'] ? aevlb2 : { 'default': aevlb2 },
        e3mu = p3u8j4('./util/index.js'),
        n16r7 = p3u8j4('./WindowProperties');function x4ck(oq0y) {
      return (x4ck = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (iswh97) {
        return typeof iswh97;
      } : function (k5tc_x) {
        return k5tc_x && 'function' == typeof Symbol && k5tc_x['constructor'] === Symbol && k5tc_x !== Symbol['prototype'] ? 'symbol' : typeof k5tc_x;
      })(oq0y);
    }function nz0r16(k4u8x, h9s_t) {
      for (var kuj348 = 0x0; kuj348 < h9s_t['length']; kuj348++) {
        var is9wth = h9s_t[kuj348];is9wth['enumerable'] = is9wth['enumerable'] || !0x1, is9wth['configurable'] = !0x0, 'value' in is9wth && (is9wth['writable'] = !0x0), Object['defineProperty'](k4u8x, is9wth['key'], is9wth);
      }
    }function uj4p38(leabv) {
      return function () {
        var kj_c4x,
            uj3p8m,
            hts59,
            p3bme = s5_c9(leabv);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (_4kc) {
            return;
          }
        }()) {
          var ampeb = s5_c9(this)['constructor'];kj_c4x = Reflect['construct'](p3bme, arguments, ampeb);
        } else kj_c4x = p3bme['apply'](this, arguments);return uj3p8m = this, !(hts59 = kj_c4x) || 'object' !== x4ck(hts59) && 'function' != typeof hts59 ? function (xtcs5_) {
          if (void 0x0 !== xtcs5_) return xtcs5_;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(uj3p8m) : hts59;
      };
    }function s5_c9(ydozq0) {
      return (s5_c9 = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (qzd0) {
        return qzd0['__proto__'] || Object['getPrototypeOf'](qzd0);
      })(ydozq0);
    }function l2mea(x5_k4, peba2m) {
      return (l2mea = Object['setPrototypeOf'] || function ($7i1wn, pm8u) {
        return $7i1wn['__proto__'] = pm8u, $7i1wn;
      })(x5_k4, peba2m);
    }var h7w$9i = function () {
      !function ($6rn7, mu8e3p) {
        if ('function' != typeof mu8e3p && null !== mu8e3p) throw new TypeError('Super expression must either be null or a function');$6rn7['prototype'] = Object['create'](mu8e3p && mu8e3p['prototype'], { 'constructor': { 'value': $6rn7, 'writable': !0x0, 'configurable': !0x0 } }), mu8e3p && l2mea($6rn7, mu8e3p);
      }(bael, i7hws9['default']);var ihs9w7,
          ih$w9,
          mepab3,
          zr01n6 = uj4p38(bael);function bael() {
        var jum38p,
            a2ble = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return function (do0qyz, pebm2) {
          if (!(do0qyz instanceof pebm2)) throw new TypeError('Cannot call a class as a function');
        }(this, bael), (jum38p = zr01n6['call'](this))['className'] = '', jum38p['childern'] = [], jum38p['style'] = { 'width': ''['concat'](n16r7['innerWidth'], 'px'), 'height': ''['concat'](n16r7['innerHeight'], 'px') }, jum38p['insertBefore'] = e3mu['noop'], jum38p['innerHTML'] = '', jum38p['tagName'] = a2ble['toUpperCase'](), jum38p;
      }return ihs9w7 = bael, (ih$w9 = [{ 'key': 'setAttribute', 'value': function (yd0ozq, lmabe) {
          this[yd0ozq] = lmabe;
        } }, { 'key': 'getAttribute', 'value': function (q6r0oz) {
          return this[q6r0oz];
        } }, { 'key': 'getBoundingClientRect', 'value': function () {
          return { 'top': 0x0, 'left': 0x0, 'width': n16r7['innerWidth'], 'height': n16r7['innerHeight'] };
        } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
          var s5_c = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](s5_c) ? 0x0 : s5_c;
        } }, { 'key': 'clientHeight', 'get': function () {
          var swh7i9 = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](swh7i9) ? 0x0 : swh7i9;
        } }]) && nz0r16(ihs9w7['prototype'], ih$w9), mepab3 && nz0r16(ihs9w7, mepab3), bael;
    }();$97h['default'] = h7w$9i, t95ws['exports'] = $97h['default'];
  }, { './Element': 0x1a, './WindowProperties': 0x2b, './util/index.js': 0x32 }], 0x23: [function (c8k4xj, abel, m3eabp) {
    'use strict';

    Object['defineProperty'](m3eabp, '__esModule', { 'value': !0x0 }), m3eabp['default'] = void 0x0;var ih97;(ih97 = c8k4xj('./HTMLElement')) && ih97['__esModule'];var peamb2 = wx['createImage']()['constructor'];m3eabp['default'] = peamb2, abel['exports'] = m3eabp['default'];
  }, { './HTMLElement': 0x22 }], 0x24: [function ($7rn1, $7hw9, i$17nw) {
    'use strict';

    Object['defineProperty'](i$17nw, '__esModule', { 'value': !0x0 }), i$17nw['default'] = void 0x0;var iw$h,
        bmale = (iw$h = $7rn1('./HTMLElement')) && iw$h['__esModule'] ? iw$h : { 'default': iw$h };function e2ab(emp3ab) {
      return (e2ab = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (wtih9s) {
        return typeof wtih9s;
      } : function (i79$) {
        return i79$ && 'function' == typeof Symbol && i79$['constructor'] === Symbol && i79$ !== Symbol['prototype'] ? 'symbol' : typeof i79$;
      })(emp3ab);
    }function r$1nz(k_xcj, z0nqr6) {
      for (var ua3emp = 0x0; ua3emp < z0nqr6['length']; ua3emp++) {
        var xkj8u4 = z0nqr6[ua3emp];xkj8u4['enumerable'] = xkj8u4['enumerable'] || !0x1, xkj8u4['configurable'] = !0x0, 'value' in xkj8u4 && (xkj8u4['writable'] = !0x0), Object['defineProperty'](k_xcj, xkj8u4['key'], xkj8u4);
      }
    }function elv2ba(av2glb) {
      return function () {
        var u84jp3,
            q06nr,
            nz1$6,
            s7wi9h = rnz1$(av2glb);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (avlgb2) {
            return;
          }
        }()) {
          var p3u84j = rnz1$(this)['constructor'];u84jp3 = Reflect['construct'](s7wi9h, arguments, p3u84j);
        } else u84jp3 = s7wi9h['apply'](this, arguments);return q06nr = this, !(nz1$6 = u84jp3) || 'object' !== e2ab(nz1$6) && 'function' != typeof nz1$6 ? function (tx5_cs) {
          if (void 0x0 !== tx5_cs) return tx5_cs;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(q06nr) : nz1$6;
      };
    }function rnz1$(vgab) {
      return (rnz1$ = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (p3j8m) {
        return p3j8m['__proto__'] || Object['getPrototypeOf'](p3j8m);
      })(vgab);
    }function wh$7i1(qord0, _s5xtc) {
      return (wh$7i1 = Object['setPrototypeOf'] || function (eal2mb, qz0rdo) {
        return eal2mb['__proto__'] = qz0rdo, eal2mb;
      })(qord0, _s5xtc);
    }var h79wsi = function () {
      !function (hi9tw, abm2l) {
        if ('function' != typeof abm2l && null !== abm2l) throw new TypeError('Super expression must either be null or a function');hi9tw['prototype'] = Object['create'](abm2l && abm2l['prototype'], { 'constructor': { 'value': hi9tw, 'writable': !0x0, 'configurable': !0x0 } }), abm2l && wh$7i1(hi9tw, abm2l);
      }(kx_4, bmale['default']);var _4cj,
          um8ep,
          j48uk3,
          w97is = elv2ba(kx_4);function kx_4(j84uxk) {
        return function (_5ctxs, t_9h5) {
          if (!(_5ctxs instanceof t_9h5)) throw new TypeError('Cannot call a class as a function');
        }(this, kx_4), w97is['call'](this, j84uxk);
      }return _4cj = kx_4, (um8ep = [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]) && r$1nz(_4cj['prototype'], um8ep), j48uk3 && r$1nz(_4cj, j48uk3), kx_4;
    }();i$17nw['default'] = h79wsi, $7hw9['exports'] = i$17nw['default'];
  }, { './HTMLElement': 0x22 }], 0x25: [function (h7$1iw, w9ish7, j3up48) {
    'use strict';

    Object['defineProperty'](j3up48, '__esModule', { 'value': !0x0 }), j3up48['default'] = void 0x0;var h5s9,
        j4xkc8 = (h5s9 = h7$1iw('./HTMLMediaElement')) && h5s9['__esModule'] ? h5s9 : { 'default': h5s9 };function nz0(aep2mb) {
      return (nz0 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (i7shw) {
        return typeof i7shw;
      } : function (evalb) {
        return evalb && 'function' == typeof Symbol && evalb['constructor'] === Symbol && evalb !== Symbol['prototype'] ? 'symbol' : typeof evalb;
      })(aep2mb);
    }function cst9_5(n0z1r) {
      return function () {
        var kt_c,
            rqn0z,
            mbap2e,
            uma3p = ozr6(n0z1r);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (wh9it) {
            return;
          }
        }()) {
          var b2gal = ozr6(this)['constructor'];kt_c = Reflect['construct'](uma3p, arguments, b2gal);
        } else kt_c = uma3p['apply'](this, arguments);return rqn0z = this, !(mbap2e = kt_c) || 'object' !== nz0(mbap2e) && 'function' != typeof mbap2e ? function (d0ozr) {
          if (void 0x0 !== d0ozr) return d0ozr;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(rqn0z) : mbap2e;
      };
    }function ozr6(ih9tw) {
      return (ozr6 = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (st9_c5) {
        return st9_c5['__proto__'] || Object['getPrototypeOf'](st9_c5);
      })(ih9tw);
    }function $ihw1(r601, n6qrz0) {
      return ($ihw1 = Object['setPrototypeOf'] || function (x4ukj8, mep2b) {
        return x4ukj8['__proto__'] = mep2b, x4ukj8;
      })(r601, n6qrz0);
    }var lve2ab = function () {
      !function (r61zn0, st) {
        if ('function' != typeof st && null !== st) throw new TypeError('Super expression must either be null or a function');r61zn0['prototype'] = Object['create'](st && st['prototype'], { 'constructor': { 'value': r61zn0, 'writable': !0x0, 'configurable': !0x0 } }), st && $ihw1(r61zn0, st);
      }(w97h, j4xkc8['default']);var $r7 = cst9_5(w97h);function w97h() {
        return function (emapb, up3j48) {
          if (!(emapb instanceof up3j48)) throw new TypeError('Cannot call a class as a function');
        }(this, w97h), $r7['call'](this, 'video');
      }return w97h;
    }();j3up48['default'] = lve2ab, w9ish7['exports'] = j3up48['default'];
  }, { './HTMLMediaElement': 0x24 }], 0x26: [function (swh5t, wihs, wiht9s) {
    'use strict';

    Object['defineProperty'](wiht9s, '__esModule', { 'value': !0x0 }), wiht9s['default'] = function () {
      return wx['createImage']();
    };var epu3ma;(epu3ma = swh5t('./HTMLImageElement')) && epu3ma['__esModule'], wihs['exports'] = wiht9s['default'];
  }, { './HTMLImageElement': 0x23 }], 0x27: [function (laeb, w9sih7, xc_t5s) {
    'use strict';

    Object['defineProperty'](xc_t5s, '__esModule', { 'value': !0x0 }), xc_t5s['default'] = void 0x0, (xc_t5s['default'] = function ujp() {
      !function (eavbl, aepm2) {
        if (!(eavbl instanceof aepm2)) throw new TypeError('Cannot call a class as a function');
      }(this, ujp);
    }, w9sih7['exports'] = xc_t5s['default']);
  }, {}], 0x28: [function (j_ck, xk8u4j, yqz0o) {
    'use strict';

    Object['defineProperty'](yqz0o, '__esModule', { 'value': !0x0 }), yqz0o['default'] = void 0x0;var r601nz,
        zqdo0y = (r601nz = j_ck('./EventTarget.js')) && r601nz['__esModule'] ? r601nz : { 'default': r601nz };function t9s_5c(pb3mae) {
      return (t9s_5c = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (m8pe3u) {
        return typeof m8pe3u;
      } : function (_5ht) {
        return _5ht && 'function' == typeof Symbol && _5ht['constructor'] === Symbol && _5ht !== Symbol['prototype'] ? 'symbol' : typeof _5ht;
      })(pb3mae);
    }function w7ih1(av2ebl, $n61r) {
      for (var n6zr$1 = 0x0; n6zr$1 < $n61r['length']; n6zr$1++) {
        var kxjc84 = $n61r[n6zr$1];kxjc84['enumerable'] = kxjc84['enumerable'] || !0x1, kxjc84['configurable'] = !0x0, 'value' in kxjc84 && (kxjc84['writable'] = !0x0), Object['defineProperty'](av2ebl, kxjc84['key'], kxjc84);
      }
    }function u8k43(jk4_cx) {
      return function () {
        var iw7hs9,
            k5x_c,
            ht59,
            bam3e = j3u4k(jk4_cx);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (bvgl) {
            return;
          }
        }()) {
          var _59sh = j3u4k(this)['constructor'];iw7hs9 = Reflect['construct'](bam3e, arguments, _59sh);
        } else iw7hs9 = bam3e['apply'](this, arguments);return k5x_c = this, !(ht59 = iw7hs9) || 'object' !== t9s_5c(ht59) && 'function' != typeof ht59 ? function (jk_4xc) {
          if (void 0x0 !== jk_4xc) return jk_4xc;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(k5x_c) : ht59;
      };
    }function j3u4k(tcs_5x) {
      return (j3u4k = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (empba3) {
        return empba3['__proto__'] || Object['getPrototypeOf'](empba3);
      })(tcs_5x);
    }function zdy0(whi9s, k_cx54) {
      return (zdy0 = Object['setPrototypeOf'] || function (zq6or0, kt5_c) {
        return zq6or0['__proto__'] = kt5_c, zq6or0;
      })(whi9s, k_cx54);
    }var qzr0od = function () {
      !function (em3pab, t5sh) {
        if ('function' != typeof t5sh && null !== t5sh) throw new TypeError('Super expression must either be null or a function');em3pab['prototype'] = Object['create'](t5sh && t5sh['prototype'], { 'constructor': { 'value': em3pab, 'writable': !0x0, 'configurable': !0x0 } }), t5sh && zdy0(em3pab, t5sh);
      }($z1n6, zqdo0y['default']);var n1r$,
          up83em,
          kxt5_c,
          dzrq = u8k43($z1n6);function $z1n6() {
        var n$176r;return function (qzor06, _xjck4) {
          if (!(qzor06 instanceof _xjck4)) throw new TypeError('Cannot call a class as a function');
        }(this, $z1n6), (n$176r = dzrq['call'](this))['childNodes'] = [], n$176r;
      }return n1r$ = $z1n6, (up83em = [{ 'key': 'appendChild', 'value': function (peba3) {
          this['childNodes']['push'](peba3);
        } }, { 'key': 'cloneNode', 'value': function () {
          var lvbga2 = Object['create'](this);return Object['assign'](lvbga2, this), lvbga2;
        } }, { 'key': 'removeChild', 'value': function (j4ck8x) {
          var ba2vl = this['childNodes']['findIndex'](function (eamp2) {
            return eamp2 === j4ck8x;
          });return -0x1 < ba2vl ? this['childNodes']['splice'](ba2vl, 0x1) : null;
        } }]) && w7ih1(n1r$['prototype'], up83em), kxt5_c && w7ih1(n1r$, kxt5_c), $z1n6;
    }();yqz0o['default'] = qzr0od, xk8u4j['exports'] = yqz0o['default'];
  }, { './EventTarget.js': 0x1e }], 0x29: [function (tsh9iw, ku84j3, lma2b) {
    'use strict';

    Object['defineProperty'](lma2b, '__esModule', { 'value': !0x0 }), lma2b['default'] = void 0x0, (lma2b['default'] = function h9sw() {
      !function (mpabe, u348k) {
        if (!(mpabe instanceof u348k)) throw new TypeError('Cannot call a class as a function');
      }(this, h9sw);
    }, ku84j3['exports'] = lma2b['default']);
  }, {}], 0x2a: [function (cjk4x8, m3up, twi9s) {
    'use strict';

    function ep2am(n7i, vbe2la) {
      for (var n$76i = 0x0; n$76i < vbe2la['length']; n$76i++) {
        var pj38u = vbe2la[n$76i];pj38u['enumerable'] = pj38u['enumerable'] || !0x1, pj38u['configurable'] = !0x0, 'value' in pj38u && (pj38u['writable'] = !0x0), Object['defineProperty'](n7i, pj38u['key'], pj38u);
      }
    }Object['defineProperty'](twi9s, '__esModule', { 'value': !0x0 }), twi9s['default'] = void 0x0;var jk_cx4 = new WeakMap(),
        ebmap3 = function () {
      function sw7h9(_xcj4) {
        var jck4x_ = this,
            aem2bp = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (r61n$7, epmb2a) {
          if (!(r61n$7 instanceof epmb2a)) throw new TypeError('Cannot call a class as a function');
        }(this, sw7h9), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, 'string' != typeof _xcj4 || !/(^ws:\/\/)|(^wss:\/\/)/['test'](_xcj4)) throw new TypeError('Failed to construct \'WebSocket\': The URL \''['concat'](_xcj4, '\' is invalid'));this['url'] = _xcj4, this['readyState'] = sw7h9['CONNECTING'];var xts5 = wx['connectSocket']({ 'url': _xcj4, 'protocols': Array['isArray'](aem2bp) ? aem2bp : [aem2bp], 'tcpNoDelay': !0x0 });return jk_cx4['set'](this, xts5), xts5['onClose'](function (m3pj8) {
          jck4x_['readyState'] = sw7h9['CLOSED'], 'function' == typeof jck4x_['onclose'] && jck4x_['onclose'](m3pj8);
        }), xts5['onMessage'](function (kj4cx) {
          'function' == typeof jck4x_['onmessage'] && jck4x_['onmessage'](kj4cx);
        }), xts5['onOpen'](function () {
          jck4x_['readyState'] = sw7h9['OPEN'], 'function' == typeof jck4x_['onopen'] && jck4x_['onopen']();
        }), xts5['onError'](function (nqr6z0) {
          'function' == typeof jck4x_['onerror'] && jck4x_['onerror'](new Error(nqr6z0['errMsg']));
        }), this;
      }var bmp2e, mu8pe, vg2;return bmp2e = sw7h9, (mu8pe = [{ 'key': 'close', 'value': function (s_t5xc, qrodz0) {
          this['readyState'] = sw7h9['CLOSING'], jk_cx4['get'](this)['close']({ 'code': s_t5xc, 'reason': qrodz0 });
        } }, { 'key': 'send', 'value': function (e2lmab) {
          if ('string' != typeof e2lmab && !(e2lmab instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data '['concat'](e2lmab, ' is invalid'));jk_cx4['get'](this)['send']({ 'data': e2lmab });
        } }]) && ep2am(bmp2e['prototype'], mu8pe), vg2 && ep2am(bmp2e, vg2), sw7h9;
    }();(twi9s['default'] = ebmap3)['CONNECTING'] = 0x0, ebmap3['OPEN'] = 0x1, ebmap3['CLOSING'] = 0x2, ebmap3['CLOSED'] = 0x3, m3up['exports'] = twi9s['default'];
  }, {}], 0x2b: [function (_h5ts9, sw79, tk_xc5) {
    'use strict';

    Object['defineProperty'](tk_xc5, '__esModule', { 'value': !0x0 }), tk_xc5['ontouchend'] = tk_xc5['ontouchmove'] = tk_xc5['ontouchstart'] = tk_xc5['performance'] = tk_xc5['screen'] = tk_xc5['devicePixelRatio'] = tk_xc5['innerHeight'] = tk_xc5['innerWidth'] = void 0x0;var abepm3 = wx['getSystemInfoSync'](),
        h_t95 = abepm3['screenWidth'],
        h7$i1 = abepm3['screenHeight'],
        puae = abepm3['devicePixelRatio'];tk_xc5['devicePixelRatio'] = puae;var $zn1 = h_t95,
        k_5ct = h7$i1,
        j3ku48 = { 'width': h_t95, 'height': h7$i1, 'availWidth': tk_xc5['innerWidth'] = $zn1, 'availHeight': tk_xc5['innerHeight'] = k_5ct, 'availLeft': 0x0, 'availTop': 0x0 };tk_xc5['screen'] = j3ku48;var a2blem = { 'now': Date['now'] };tk_xc5['performance'] = a2blem, tk_xc5['ontouchstart'] = null, tk_xc5['ontouchmove'] = null, tk_xc5['ontouchend'] = null;
  }, {}], 0x2c: [function ($r71, d0rzq, jkxu84) {
    'use strict';

    Object['defineProperty'](jkxu84, '__esModule', { 'value': !0x0 }), jkxu84['default'] = void 0x0;var eablm2,
        sc5t_ = (eablm2 = $r71('./EventTarget.js')) && eablm2['__esModule'] ? eablm2 : { 'default': eablm2 };function j4x8kc(jx4ck) {
      return (j4x8kc = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (wht9s) {
        return typeof wht9s;
      } : function (r$nz) {
        return r$nz && 'function' == typeof Symbol && r$nz['constructor'] === Symbol && r$nz !== Symbol['prototype'] ? 'symbol' : typeof r$nz;
      })(jx4ck);
    }function zqr(z1r6n, epu3) {
      for (var j348ku = 0x0; j348ku < epu3['length']; j348ku++) {
        var xctk_5 = epu3[j348ku];xctk_5['enumerable'] = xctk_5['enumerable'] || !0x1, xctk_5['configurable'] = !0x0, 'value' in xctk_5 && (xctk_5['writable'] = !0x0), Object['defineProperty'](z1r6n, xctk_5['key'], xctk_5);
      }
    }function n7r1(s9c_t5) {
      return function () {
        var abg2lv,
            blea2m,
            uk84j,
            q0y = k4xc8j(s9c_t5);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (tc5_sx) {
            return;
          }
        }()) {
          var pebm3a = k4xc8j(this)['constructor'];abg2lv = Reflect['construct'](q0y, arguments, pebm3a);
        } else abg2lv = q0y['apply'](this, arguments);return blea2m = this, !(uk84j = abg2lv) || 'object' !== j4x8kc(uk84j) && 'function' != typeof uk84j ? mae3p(blea2m) : uk84j;
      };
    }function mae3p(umep8) {
      if (void 0x0 === umep8) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return umep8;
    }function k4xc8j(ab2gvl) {
      return (k4xc8j = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (_95th) {
        return _95th['__proto__'] || Object['getPrototypeOf'](_95th);
      })(ab2gvl);
    }function c5_t9(c5tk_x, j3up4) {
      return (c5_t9 = Object['setPrototypeOf'] || function (elab, qr60oz) {
        return elab['__proto__'] = qr60oz, elab;
      })(c5tk_x, j3up4);
    }var h1$w = new WeakMap(),
        ck4_5 = new WeakMap(),
        ea3mu = new WeakMap(),
        o0zyq = new WeakMap(),
        cts_ = new WeakMap();function wi$n1(t_h59) {
      if ('function' == typeof this['on'['concat'](t_h59)]) {
        for (var w97h$i = arguments['length'], b2vel = new Array(0x1 < w97h$i ? w97h$i - 0x1 : 0x0), r16z = 0x1; r16z < w97h$i; r16z++) b2vel[r16z - 0x1] = arguments[r16z];this['on'['concat'](t_h59)]['apply'](this, b2vel);
      }
    }function _kxc5t(h_st) {
      this['readyState'] = h_st, wi$n1['call'](this, 'readystatechange');
    }var k5x_4 = function () {
      !function (t5hs_, jukx4) {
        if ('function' != typeof jukx4 && null !== jukx4) throw new TypeError('Super expression must either be null or a function');t5hs_['prototype'] = Object['create'](jukx4 && jukx4['prototype'], { 'constructor': { 'value': t5hs_, 'writable': !0x0, 'configurable': !0x0 } }), jukx4 && c5_t9(t5hs_, jukx4);
      }(me3ab, sc5t_['default']);var n16$7r,
          n1iw7,
          me3up,
          j8p3u = n7r1(me3ab);function me3ab() {
        var kc4x8j;return function (n1wi$, n1z$) {
          if (!(n1wi$ instanceof n1z$)) throw new TypeError('Cannot call a class as a function');
        }(this, me3ab), (kc4x8j = j8p3u['call'](this))['onabort'] = null, kc4x8j['onerror'] = null, kc4x8j['onload'] = null, kc4x8j['onloadstart'] = null, kc4x8j['onprogress'] = null, kc4x8j['ontimeout'] = null, kc4x8j['onloadend'] = null, kc4x8j['onreadystatechange'] = null, kc4x8j['readyState'] = 0x0, kc4x8j['response'] = null, kc4x8j['responseText'] = null, kc4x8j['responseType'] = '', kc4x8j['responseXML'] = null, kc4x8j['status'] = 0x0, kc4x8j['statusText'] = '', kc4x8j['upload'] = {}, kc4x8j['withCredentials'] = !0x1, ea3mu['set'](mae3p(kc4x8j), { 'content-type': 'application/x-www-form-urlencoded' }), o0zyq['set'](mae3p(kc4x8j), {}), kc4x8j;
      }return n16$7r = me3ab, (n1iw7 = [{ 'key': 'abort', 'value': function () {
          var _sth9 = cts_['get'](this);_sth9 && _sth9['abort']();
        } }, { 'key': 'getAllResponseHeaders', 'value': function () {
          var o0dzrq = o0zyq['get'](this);return Object['keys'](o0dzrq)['map'](function (lba2em) {
            return ''['concat'](lba2em, ':\x20')['concat'](o0dzrq[lba2em]);
          })['join']('\x0a');
        } }, { 'key': 'getResponseHeader', 'value': function (htw5s) {
          return o0zyq['get'](this)[htw5s];
        } }, { 'key': 'open', 'value': function (_4c5x, u483jp) {
          ck4_5['set'](this, _4c5x), h1$w['set'](this, u483jp), _kxc5t['call'](this, me3ab['OPENED']);
        } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function (si9w) {
          var z$r16 = this,
              w1$h7i = 0x0 < arguments['length'] && void 0x0 !== si9w ? si9w : '';if (this['readyState'] !== me3ab['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');var nz6r01 = wx['request']({ 'data': w1$h7i, 'url': h1$w['get'](this), 'method': ck4_5['get'](this), 'header': ea3mu['get'](this), 'dataType': 'other', 'responseType': 'arraybuffer' === this['responseType'] ? 'arraybuffer' : 'text', 'success': function (nqz60) {
              var gbavl2 = nqz60['data'],
                  k4j8cx = nqz60['statusCode'],
                  u483k = nqz60['header'];switch (z$r16['status'] = k4j8cx, o0zyq['set'](z$r16, u483k), wi$n1['call'](z$r16, 'loadstart'), _kxc5t['call'](z$r16, me3ab['HEADERS_RECEIVED']), _kxc5t['call'](z$r16, me3ab['LOADING']), z$r16['responseType']) {case 'json':
                  z$r16['responseText'] = gbavl2;try {
                    z$r16['response'] = JSON['parse'](gbavl2);
                  } catch (qnzr) {
                    z$r16['response'] = null;
                  }break;case '':case 'text':
                  z$r16['responseText'] = z$r16['response'] = gbavl2;break;case 'arraybuffer':
                  z$r16['response'] = gbavl2, z$r16['responseText'] = '';for (var j8u43 = new Uint8Array(gbavl2), xcjk_4 = j8u43['byteLength'], b2epa = 0x0; b2epa < xcjk_4; b2epa++) z$r16['responseText'] += String['fromCharCode'](j8u43[b2epa]);break;default:
                  z$r16['response'] = null;}_kxc5t['call'](z$r16, me3ab['DONE']), wi$n1['call'](z$r16, 'load'), wi$n1['call'](z$r16, 'loadend');
            }, 'fail': function (mu38) {
              var x8j4ck = mu38['errMsg'];-0x1 !== x8j4ck['indexOf']('abort') ? wi$n1['call'](z$r16, 'abort') : -0x1 !== x8j4ck['indexOf']('timeout') ? wi$n1['call'](z$r16, 'timeout') : wi$n1['call'](z$r16, 'error', x8j4ck), wi$n1['call'](z$r16, 'loadend');
            } });cts_['set'](this, nz6r01);
        } }, { 'key': 'setRequestHeader', 'value': function (bl2ave, oqzd0y) {
          var a2lbgv = ea3mu['get'](this);a2lbgv[bl2ave] = oqzd0y, ea3mu['set'](this, a2lbgv);
        } }, { 'key': 'addEventListener', 'value': function (rqd0zo, $z1) {
          if ('function' == typeof $z1) {
            var rn1$7 = this;this['on' + rqd0zo] = function ($rn16) {
              $z1['call'](rn1$7, $rn16);
            };
          }
        } }]) && zqr(n16$7r['prototype'], n1iw7), me3up && zqr(n16$7r, me3up), me3ab;
    }();(jkxu84['default'] = k5x_4)['UNSEND'] = 0x0, k5x_4['OPENED'] = 0x1, k5x_4['HEADERS_RECEIVED'] = 0x2, k5x_4['LOADING'] = 0x3, k5x_4['DONE'] = 0x4, d0rzq['exports'] = jkxu84['default'];
  }, { './EventTarget.js': 0x1e }], 0x2d: [function (c5txs, qoz6, b2pm) {
    'use strict';

    function k8j4ux(nz$16r) {
      return (k8j4ux = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (x4uk8j) {
        return typeof x4uk8j;
      } : function (a2bglv) {
        return a2bglv && 'function' == typeof Symbol && a2bglv['constructor'] === Symbol && a2bglv !== Symbol['prototype'] ? 'symbol' : typeof a2bglv;
      })(nz$16r);
    }Object['defineProperty'](b2pm, '__esModule', { 'value': !0x0 }), b2pm['default'] = void 0x0;var s79hi = function (jup384) {
      if (jup384 && jup384['__esModule']) return jup384;if (null === jup384 || 'object' !== k8j4ux(jup384) && 'function' != typeof jup384) return { 'default': jup384 };var i1h$w = t5sh_9();if (i1h$w && i1h$w['has'](jup384)) return i1h$w['get'](jup384);var ume8 = {},
          roz0 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];for (var jm8u in jup384) if (Object['prototype']['hasOwnProperty']['call'](jup384, jm8u)) {
        var eapm3u = roz0 ? Object['getOwnPropertyDescriptor'](jup384, jm8u) : null;eapm3u && (eapm3u['get'] || eapm3u['set']) ? Object['defineProperty'](ume8, jm8u, eapm3u) : ume8[jm8u] = jup384[jm8u];
      }return ume8['default'] = jup384, i1h$w && i1h$w['set'](jup384, ume8), ume8;
    }(c5txs('./window')),
        t9h5 = c5_x4k(c5txs('./HTMLElement')),
        a2lg = c5_x4k(c5txs('./HTMLVideoElement')),
        v2abel = c5_x4k(c5txs('./Image')),
        lam2be = c5_x4k(c5txs('./Audio')),
        zqn0 = c5_x4k(c5txs('./Canvas'));function c5_x4k(ck_x5t) {
      return ck_x5t && ck_x5t['__esModule'] ? ck_x5t : { 'default': ck_x5t };
    }function t5sh_9() {
      if ('function' != typeof WeakMap) return null;var _4ck5 = new WeakMap();return t5sh_9 = function () {
        return _4ck5;
      }, _4ck5;
    }c5txs('./EventIniter/index.js');var sht_59 = {},
        nzqr0 = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': s79hi, 'hidden': !0x1, 'style': {}, 'location': s79hi['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new t9h5['default']('head'), 'body': new t9h5['default']('body'), 'createElement': function (l2emb) {
        return 'canvas' === l2emb ? new zqn0['default']() : 'audio' === l2emb ? new lam2be['default']() : 'img' === l2emb ? new v2abel['default']() : 'video' === l2emb ? new a2lg['default']() : new t9h5['default'](l2emb);
      }, 'createElementNS': function (n6r$, alm2) {
        return this['createElement'](alm2);
      }, 'getElementById': function (hit9sw) {
        return hit9sw === s79hi['canvas']['id'] ? s79hi['canvas'] : null;
      }, 'getElementsByTagName': function (qzr60) {
        return 'head' === qzr60 ? [nzqr0['head']] : 'body' === qzr60 ? [nzqr0['body']] : 'canvas' === qzr60 ? [s79hi['canvas']] : [];
      }, 'getElementsByName': function (au3pe) {
        return 'head' === au3pe ? [nzqr0['head']] : 'body' === au3pe ? [nzqr0['body']] : 'canvas' === au3pe ? [s79hi['canvas']] : [];
      }, 'querySelector': function (n6i17) {
        return 'head' === n6i17 ? nzqr0['head'] : 'body' === n6i17 ? nzqr0['body'] : 'canvas' === n6i17 || n6i17 === '#'['concat'](s79hi['canvas']['id']) ? s79hi['canvas'] : null;
      }, 'querySelectorAll': function ($761rn) {
        return 'head' === $761rn ? [nzqr0['head']] : 'body' === $761rn ? [nzqr0['body']] : 'canvas' === $761rn ? [s79hi['canvas']] : [];
      }, 'addEventListener': function (xcj8, pmj83u) {
        sht_59[xcj8] || (sht_59[xcj8] = []), sht_59[xcj8]['push'](pmj83u);
      }, 'removeEventListener': function (nr01z, _ktx) {
        var nzqr = sht_59[nr01z];if (nzqr && 0x0 < nzqr['length']) {
          for (var lvag = nzqr['length']; lvag--;) if (nzqr[lvag] === _ktx) {
            nzqr['splice'](lvag, 0x1);break;
          }
        }
      }, 'dispatchEvent': function (zr$1n) {
        var h9si = sht_59[zr$1n['type']];if (h9si) {
          for (var xst_c5 = 0x0; xst_c5 < h9si['length']; xst_c5++) h9si[xst_c5](zr$1n);
        }
      } },
        ml2ea = nzqr0;b2pm['default'] = ml2ea, qoz6['exports'] = b2pm['default'];
  }, { './Audio': 0x18, './Canvas': 0x19, './EventIniter/index.js': 0x1d, './HTMLElement': 0x22, './HTMLVideoElement': 0x25, './Image': 0x26, './window': 0x33 }], 0x2e: [function (_5tcx, qyoz0d, i$1n7) {
    'use strict';

    function i$7n6(qodzr0) {
      return (i$7n6 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (c5x_4) {
        return typeof c5x_4;
      } : function (t9s_h5) {
        return t9s_h5 && 'function' == typeof Symbol && t9s_h5['constructor'] === Symbol && t9s_h5 !== Symbol['prototype'] ? 'symbol' : typeof t9s_h5;
      })(qodzr0);
    }var o6z0qr = function ($w1i7h) {
      if ($w1i7h && $w1i7h['__esModule']) return $w1i7h;if (null === $w1i7h || 'object' !== i$7n6($w1i7h) && 'function' != typeof $w1i7h) return { 'default': $w1i7h };var $1hw = ebmpa2();if ($1hw && $1hw['has']($w1i7h)) return $1hw['get']($w1i7h);var rqod = {},
          kju483 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];for (var r10nz in $w1i7h) if (Object['prototype']['hasOwnProperty']['call']($w1i7h, r10nz)) {
        var c45k_ = kju483 ? Object['getOwnPropertyDescriptor']($w1i7h, r10nz) : null;c45k_ && (c45k_['get'] || c45k_['set']) ? Object['defineProperty'](rqod, r10nz, c45k_) : rqod[r10nz] = $w1i7h[r10nz];
      }return rqod['default'] = $w1i7h, $1hw && $1hw['set']($w1i7h, rqod), rqod;
    }(_5tcx('./window')),
        upaem = rn61$(_5tcx('./document'));rn61$(_5tcx('./HTMLElement'));function rn61$(dyqz) {
      return dyqz && dyqz['__esModule'] ? dyqz : { 'default': dyqz };
    }function ebmpa2() {
      if ('function' != typeof WeakMap) return null;var jx8ck4 = new WeakMap();return ebmpa2 = function () {
        return jx8ck4;
      }, jx8ck4;
    }var r01zn = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
      o6z0qr['document'] = upaem['default'], o6z0qr['addEventListener'] = function (in61$7, h9_5) {
        o6z0qr['document']['addEventListener'](in61$7, h9_5);
      }, o6z0qr['removeEventListener'] = function (kt_5c, tsw95) {
        o6z0qr['document']['removeEventListener'](kt_5c, tsw95);
      }, o6z0qr['dispatchEvent'] = function () {
        var j43u = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {};console['log']('window.dispatchEvent', j43u['type'], j43u);
      };var j8uk = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === j8uk) {
        for (var xcs5 in o6z0qr) {
          var cxk4_j = Object['getOwnPropertyDescriptor'](r01zn, xcs5);cxk4_j && !0x0 !== cxk4_j['configurable'] || Object['defineProperty'](window, xcs5, { 'value': o6z0qr[xcs5] });
        }for (var c_tx in o6z0qr['document']) {
          var jcx_ = Object['getOwnPropertyDescriptor'](r01zn['document'], c_tx);jcx_ && !0x0 !== jcx_['configurable'] || Object['defineProperty'](r01zn['document'], c_tx, { 'value': o6z0qr['document'][c_tx] });
        }window['parent'] = window;
      } else {
        for (var jk834 in o6z0qr) r01zn[jk834] = o6z0qr[jk834];r01zn['window'] = o6z0qr, window = r01zn, window['top'] = window['parent'] = window;
      }
    }());
  }, { './HTMLElement': 0x22, './document': 0x2d, './window': 0x33 }], 0x2f: [function (pae, h5s_9t, g2bla) {
    'use strict';

    Object['defineProperty'](g2bla, '__esModule', { 'value': !0x0 }), g2bla['default'] = void 0x0;var lvbe2a = { get 'length'() {
        return wx['getStorageInfoSync']()['keys']['length'];
      }, 'key': function ($in716) {
        return wx['getStorageInfoSync']()['keys'][$in716];
      }, 'getItem': function (ea2p) {
        return wx['getStorageSync'](ea2p);
      }, 'setItem': function (uapm, qzr0n) {
        return wx['setStorageSync'](uapm, qzr0n);
      }, 'removeItem': function (doqrz) {
        wx['removeStorageSync'](doqrz);
      }, 'clear': function () {
        wx['clearStorageSync']();
      } };g2bla['default'] = lvbe2a, h5s_9t['exports'] = g2bla['default'];
  }, {}], 0x30: [function (mepua, s_5xc, pam3) {
    'use strict';

    Object['defineProperty'](pam3, '__esModule', { 'value': !0x0 }), pam3['default'] = void 0x0;var upj83 = { 'href': 'game.js', 'reload': function () {} };pam3['default'] = upj83, s_5xc['exports'] = pam3['default'];
  }, {}], 0x31: [function (jx4kc, bea2m, r160z) {
    'use strict';

    Object['defineProperty'](r160z, '__esModule', { 'value': !0x0 }), r160z['default'] = void 0x0;var r7n = jx4kc('./util/index.js'),
        c_st95 = wx['getSystemInfoSync']();console['log'](c_st95);var up34j8 = c_st95['system'],
        hs = c_st95['platform'],
        _5h = c_st95['language'],
        $1niw7 = c_st95['version'],
        p3eau = -0x1 !== up34j8['toLowerCase']()['indexOf']('android') ? 'Android; CPU '['concat'](up34j8) : 'iPhone; CPU iPhone OS '['concat'](up34j8, ' like Mac OS X'),
        mpea2 = 'Mozilla/5.0 ('['concat'](p3eau, ') AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/')['concat']($1niw7, ' MiniGame NetType/WIFI Language/')['concat'](_5h),
        n1w$i7 = { 'platform': hs, 'language': _5h, 'appVersion': '5.0 ('['concat'](p3eau, ') AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'), 'userAgent': mpea2, 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': r7n['noop'], 'watchPosition': r7n['noop'], 'clearWatch': r7n['noop'] } };wx['onNetworkStatusChange'] && wx['onNetworkStatusChange'](function (dqyoz) {
      n1w$i7['onLine'] = dqyoz['isConnected'];
    });var ws9 = n1w$i7;r160z['default'] = ws9, bea2m['exports'] = r160z['default'];
  }, { './util/index.js': 0x32 }], 0x32: [function (cjk_4, up8j, upe) {
    'use strict';

    Object['defineProperty'](upe, '__esModule', { 'value': !0x0 }), upe['noop'] = function () {};
  }, {}], 0x33: [function (j_kxc4, $i1wh, a3pemu) {
    'use strict';

    Object['defineProperty'](a3pemu, '__esModule', { 'value': !0x0 });var pj8m3u = { 'canvas': !0x0, 'setTimeout': !0x0, 'setInterval': !0x0, 'clearTimeout': !0x0, 'clearInterval': !0x0, 'requestAnimationFrame': !0x0, 'cancelAnimationFrame': !0x0, 'navigator': !0x0, 'XMLHttpRequest': !0x0, 'WebSocket': !0x0, 'Image': !0x0, 'ImageBitmap': !0x0, 'Audio': !0x0, 'FileReader': !0x0, 'HTMLElement': !0x0, 'HTMLImageElement': !0x0, 'HTMLCanvasElement': !0x0, 'HTMLMediaElement': !0x0, 'HTMLAudioElement': !0x0, 'HTMLVideoElement': !0x0, 'WebGLRenderingContext': !0x0, 'TouchEvent': !0x0, 'MouseEvent': !0x0, 'DeviceMotionEvent': !0x0, 'localStorage': !0x0, 'location': !0x0 };Object['defineProperty'](a3pemu, 'navigator', { 'enumerable': !0x0, 'get': function () {
        return jck['default'];
      } }), Object['defineProperty'](a3pemu, 'XMLHttpRequest', { 'enumerable': !0x0, 'get': function () {
        return $hwi1['default'];
      } }), Object['defineProperty'](a3pemu, 'WebSocket', { 'enumerable': !0x0, 'get': function () {
        return q60rn['default'];
      } }), Object['defineProperty'](a3pemu, 'Image', { 'enumerable': !0x0, 'get': function () {
        return zoy0dq['default'];
      } }), Object['defineProperty'](a3pemu, 'ImageBitmap', { 'enumerable': !0x0, 'get': function () {
        return be2am['default'];
      } }), Object['defineProperty'](a3pemu, 'Audio', { 'enumerable': !0x0, 'get': function () {
        return z$['default'];
      } }), Object['defineProperty'](a3pemu, 'FileReader', { 'enumerable': !0x0, 'get': function () {
        return um3pe['default'];
      } }), Object['defineProperty'](a3pemu, 'HTMLElement', { 'enumerable': !0x0, 'get': function () {
        return velab['default'];
      } }), Object['defineProperty'](a3pemu, 'HTMLImageElement', { 'enumerable': !0x0, 'get': function () {
        return k5xt['default'];
      } }), Object['defineProperty'](a3pemu, 'HTMLCanvasElement', { 'enumerable': !0x0, 'get': function () {
        return oyzq0d['default'];
      } }), Object['defineProperty'](a3pemu, 'HTMLMediaElement', { 'enumerable': !0x0, 'get': function () {
        return u4xk['default'];
      } }), Object['defineProperty'](a3pemu, 'HTMLAudioElement', { 'enumerable': !0x0, 'get': function () {
        return c_4kx5['default'];
      } }), Object['defineProperty'](a3pemu, 'HTMLVideoElement', { 'enumerable': !0x0, 'get': function () {
        return wn7i1['default'];
      } }), Object['defineProperty'](a3pemu, 'WebGLRenderingContext', { 'enumerable': !0x0, 'get': function () {
        return p2maeb['default'];
      } }), Object['defineProperty'](a3pemu, 'TouchEvent', { 'enumerable': !0x0, 'get': function () {
        return _xk4c['TouchEvent'];
      } }), Object['defineProperty'](a3pemu, 'MouseEvent', { 'enumerable': !0x0, 'get': function () {
        return _xk4c['MouseEvent'];
      } }), Object['defineProperty'](a3pemu, 'DeviceMotionEvent', { 'enumerable': !0x0, 'get': function () {
        return _xk4c['DeviceMotionEvent'];
      } }), Object['defineProperty'](a3pemu, 'localStorage', { 'enumerable': !0x0, 'get': function () {
        return y0zqod['default'];
      } }), Object['defineProperty'](a3pemu, 'location', { 'enumerable': !0x0, 'get': function () {
        return bpm2['default'];
      } }), a3pemu['cancelAnimationFrame'] = a3pemu['requestAnimationFrame'] = a3pemu['clearInterval'] = a3pemu['clearTimeout'] = a3pemu['setInterval'] = a3pemu['setTimeout'] = a3pemu['canvas'] = void 0x0;var me3uap = n$iw1(j_kxc4('./Canvas')),
        jck = n$iw1(j_kxc4('./navigator')),
        $hwi1 = n$iw1(j_kxc4('./XMLHttpRequest')),
        q60rn = n$iw1(j_kxc4('./WebSocket')),
        zoy0dq = n$iw1(j_kxc4('./Image')),
        be2am = n$iw1(j_kxc4('./ImageBitmap')),
        z$ = n$iw1(j_kxc4('./Audio')),
        um3pe = n$iw1(j_kxc4('./FileReader')),
        velab = n$iw1(j_kxc4('./HTMLElement')),
        k5xt = n$iw1(j_kxc4('./HTMLImageElement')),
        oyzq0d = n$iw1(j_kxc4('./HTMLCanvasElement')),
        u4xk = n$iw1(j_kxc4('./HTMLMediaElement')),
        c_4kx5 = n$iw1(j_kxc4('./HTMLAudioElement')),
        wn7i1 = n$iw1(j_kxc4('./HTMLVideoElement')),
        p2maeb = n$iw1(j_kxc4('./WebGLRenderingContext')),
        _xk4c = j_kxc4('./EventIniter/index.js'),
        y0zqod = n$iw1(j_kxc4('./localStorage')),
        bpm2 = n$iw1(j_kxc4('./location')),
        eml2 = j_kxc4('./WindowProperties');function n$iw1(eu3mpa) {
      return eu3mpa && eu3mpa['__esModule'] ? eu3mpa : { 'default': eu3mpa };
    }Object['keys'](eml2)['forEach'](function (uap3m) {
      'default' !== uap3m && '__esModule' !== uap3m && (Object['prototype']['hasOwnProperty']['call'](pj8m3u, uap3m) || Object['defineProperty'](a3pemu, uap3m, { 'enumerable': !0x0, 'get': function () {
          return eml2[uap3m];
        } }));
    }), GameGlobal['screencanvas'] = GameGlobal['screencanvas'] || new me3uap['default']();var $6zr = GameGlobal['screencanvas'];a3pemu['canvas'] = $6zr;var _scxt = GameGlobal,
        b3p = _scxt['setTimeout'],
        _9cs = _scxt['setInterval'],
        j84xu = _scxt['clearTimeout'],
        qdoz = _scxt['clearInterval'],
        abpem3 = _scxt['requestAnimationFrame'],
        vgbl2a = _scxt['cancelAnimationFrame'];a3pemu['cancelAnimationFrame'] = vgbl2a, a3pemu['requestAnimationFrame'] = abpem3, a3pemu['clearInterval'] = qdoz, a3pemu['clearTimeout'] = j84xu, a3pemu['setInterval'] = _9cs, a3pemu['setTimeout'] = b3p;
  }, { './Audio': 0x18, './Canvas': 0x19, './EventIniter/index.js': 0x1d, './FileReader': 0x1f, './HTMLAudioElement': 0x20, './HTMLCanvasElement': 0x21, './HTMLElement': 0x22, './HTMLImageElement': 0x23, './HTMLMediaElement': 0x24, './HTMLVideoElement': 0x25, './Image': 0x26, './ImageBitmap': 0x27, './WebGLRenderingContext': 0x29, './WebSocket': 0x2a, './WindowProperties': 0x2b, './XMLHttpRequest': 0x2c, './localStorage': 0x2f, './location': 0x30, './navigator': 0x31 }], 0x34: [function (jc_4kx, rn01, s_tcx5) {
    'use strict';

    !function () {
      if (cc && cc['VideoPlayer'] && cc['VideoPlayer']['Impl'] && __globalAdapter['createVideo']) {
        var k4xc_5 = cc['Mat4'],
            leba2v = cc['mat4'](),
            o0rqzd = cc['mat4'](),
            xt5ck = cc['VideoPlayer']['Impl'],
            _xck54 = cc['VideoPlayer']['Impl']['prototype'];cc['VideoPlayer']['prototype']['_updateVideoSource'] = function () {
          var lmb2ea = this,
              j84x = this['_clip'];this['resourceType'] === cc['VideoPlayer']['ResourceType']['REMOTE'] ? this['_impl']['setURL'](this['remoteURL'], this['_mute'] || 0x0 === this['_volume']) : j84x && (j84x['_nativeAsset'] ? this['_impl']['setURL'](j84x['_nativeAsset'], this['_mute'] || 0x0 === this['_volume']) : cc['loader']['load'](j84x['nativeUrl'], function (s5_9c, ts5x) {
            s5_9c ? console['error'](s5_9c) : (j84x['_nativeAsset'] = ts5x, lmb2ea['_impl']['setURL'](ts5x, lmb2ea['_mute'] || 0x0 === lmb2ea['_volume']));
          }));
        }, _xck54['_bindEvent'] = function () {
          var n6i7$1 = this['_video'],
              hwts = this;n6i7$1 && (n6i7$1['onPlay'](function () {
            hwts['_video'] === n6i7$1 && (hwts['_playing'] = !0x0, hwts['_dispatchEvent'](xt5ck['EventType']['PLAYING']));
          }), n6i7$1['onEnded'](function () {
            hwts['_video'] === n6i7$1 && (hwts['_playing'] = !0x1, hwts['_currentTime'] = hwts['_duration'], hwts['_dispatchEvent'](xt5ck['EventType']['COMPLETED']));
          }), n6i7$1['onPause'](function () {
            hwts['_video'] === n6i7$1 && (hwts['_playing'] = !0x1, hwts['_dispatchEvent'](xt5ck['EventType']['PAUSED']));
          }), n6i7$1['onTimeUpdate'](function (h9wits) {
            hwts['_duration'] = h9wits['duration'], hwts['_currentTime'] = h9wits['position'];
          }));
        }, _xck54['_unbindEvent'] = function () {
          var i1$6 = this['_video'];i1$6 && (i1$6['offPlay'](), i1$6['offEnded'](), i1$6['offPause'](), i1$6['offTimeUpdate']());
        }, _xck54['setVisible'] = function (zqrn06) {
          var i9h$w = this['_video'];i9h$w && this['_visible'] !== zqrn06 && (i9h$w['width'] = zqrn06 && this['_actualWidth'] || 0x0, this['_visible'] = zqrn06);
        }, _xck54['createDomElementIfNeeded'] = function () {
          __globalAdapter['createVideo'] ? this['_video'] || (this['_video'] = __globalAdapter['createVideo'](), this['_video']['showCenterPlayBtn'] = !0x1, this['_video']['controls'] = !0x1, this['_duration'] = -0x1, this['_currentTime'] = -0x1, this['_loaded'] = !0x1, this['setVisible'](!0x1), this['_bindEvent']()) : cc['warn']('VideoPlayer not supported');
        }, _xck54['setURL'] = function (r0n6zq) {
          var lam2b = this['_video'];if (lam2b && lam2b['src'] !== r0n6zq) {
            lam2b['stop'](), this['_unbindEvent'](), lam2b['autoplay'] = !0x0, lam2b['src'] = r0n6zq, lam2b['muted'] = !0x0;var xc5s_t = this;this['_loaded'] = !0x1, lam2b['onPlay'](function () {
              lam2b['offPlay'](), xc5s_t['_bindEvent'](), lam2b['stop'](), lam2b['muted'] = !0x1, xc5s_t['_loaded'] = !0x0, xc5s_t['_playing'] = !0x1, xc5s_t['_currentTime'] = 0x0, xc5s_t['_dispatchEvent'](xt5ck['EventType']['READY_TO_PLAY']), lam2b['autoplay'] = !0x1;
            });
          }
        }, _xck54['getURL'] = function () {
          var n76$1r = this['_video'];return n76$1r ? n76$1r['src'] : '';
        }, _xck54['play'] = function () {
          var tcx5s = this['_video'];tcx5s && this['_visible'] && !this['_playing'] && tcx5s['play']();
        }, _xck54['setStayOnBottom'] = function (z10rn) {}, _xck54['pause'] = function () {
          var u8j34 = this['_video'];this['_playing'] && u8j34 && u8j34['pause']();
        }, _xck54['resume'] = function () {
          var dz0q = this['_video'];!this['_playing'] && dz0q && dz0q['play']();
        }, _xck54['stop'] = function () {
          var c5t_9 = this,
              $h97iw = this['_video'];$h97iw && this['_visible'] && $h97iw['stop']()['then'](function (m38jp) {
            !m38jp['errMsg'] || m38jp['errMsg']['includes']('ok') ? (c5t_9['_currentTime'] = 0x0, $h97iw['seek'](0x0), c5t_9['_playing'] = !0x1, c5t_9['_dispatchEvent'](xt5ck['EventType']['STOPPED'])) : console['error']('failed to stop video player');
          });
        }, _xck54['setVolume'] = function (mupa3) {}, _xck54['seekTo'] = function (si7w) {
          var wsi79h = this['_video'];wsi79h && this['_loaded'] && wsi79h['seek'](si7w);
        }, _xck54['isPlaying'] = function () {
          return this['_playing'];
        }, _xck54['duration'] = function () {
          return this['_duration'];
        }, _xck54['currentTime'] = function () {
          return this['_currentTime'];
        }, _xck54['setKeepAspectRatioEnabled'] = function (bapem3) {
          console['warn']('On wechat game videoPlayer is always keep the aspect ratio');
        }, _xck54['isKeepAspectRatioEnabled'] = function () {
          return !0x0;
        }, _xck54['isFullScreenEnabled'] = function () {
          return this['_fullScreenEnabled'];
        }, _xck54['setFullScreenEnabled'] = function (dy) {
          var dzorq0 = this['_video'];dzorq0 && this['_fullScreenEnabled'] !== dy && (dy ? dzorq0['requestFullScreen']() : dzorq0['exitFullScreen'](), this['_fullScreenEnabled'] = dy);
        }, _xck54['enable'] = function () {
          this['setVisible'](!0x0);
        }, _xck54['disable'] = function () {
          this['_playing'] && this['_video']['pause'](), this['setVisible'](!0x1);
        }, _xck54['destroy'] = function () {
          this['disable'](), this['_unbindEvent'](), this['_video'] && (this['_video']['destroy'](), this['_video'] = void 0x0);
        }, _xck54['updateMatrix'] = function (sh9wi) {
          if (this['_video'] && this['_visible'] && (sh9wi['getWorldMatrix'](leba2v), this['_m00'] !== leba2v['m'][0x0] || this['_m01'] !== leba2v['m'][0x1] || this['_m04'] !== leba2v['m'][0x4] || this['_m05'] !== leba2v['m'][0x5] || this['_m12'] !== leba2v['m'][0xc] || this['_m13'] !== leba2v['m'][0xd] || this['_w'] !== sh9wi['_contentSize']['width'] || this['_h'] !== sh9wi['_contentSize']['height'])) {
            this['_m00'] = leba2v['m'][0x0], this['_m01'] = leba2v['m'][0x1], this['_m04'] = leba2v['m'][0x4], this['_m05'] = leba2v['m'][0x5], this['_m12'] = leba2v['m'][0xc], this['_m13'] = leba2v['m'][0xd], this['_w'] = sh9wi['_contentSize']['width'], this['_h'] = sh9wi['_contentSize']['height'], cc['Camera']['findCamera'](sh9wi)['getWorldToScreenMatrix2D'](o0rqzd), k4xc_5['multiply'](o0rqzd, o0rqzd, leba2v);var $7win = cc['view']['_scaleX'],
                rq6n0z = cc['view']['_scaleY'],
                ktc5x = cc['view']['_devicePixelRatio'];$7win /= ktc5x, rq6n0z /= ktc5x;var ujm3p = o0rqzd['m'][0x0] * $7win,
                u48jxk = o0rqzd['m'][0x5] * rq6n0z,
                leb2va = this['_w'] * ujm3p,
                n$671r = this['_h'] * u48jxk,
                t5_s = leb2va * sh9wi['_anchorPoint']['x'],
                ist9wh = n$671r * sh9wi['_anchorPoint']['y'],
                nr0zq6 = cc['view']['_viewportRect'],
                zq6rn0 = nr0zq6['x'] / ktc5x,
                k45x_c = nr0zq6['y'] / ktc5x,
                n7i1w$ = o0rqzd['m'][0xc] * $7win - t5_s + zq6rn0,
                b3amep = o0rqzd['m'][0xd] * rq6n0z - ist9wh + k45x_c,
                k8ju = cc['view']['getFrameSize']()['height'];this['_video']['x'] = n7i1w$, this['_video']['y'] = k8ju - n$671r - b3amep, this['_actualWidth'] = this['_video']['width'] = leb2va, this['_video']['height'] = n$671r;
          }
        };
      }
    }();
  }, {}], 0x35: [function (rqd, w7shi, paeum) {
    'use strict';

    rqd('./VideoPlayer'), rqd('./pc-adapter');
  }, { './VideoPlayer': 0x34, './pc-adapter': 0x36 }], 0x36: [function (umeap, bl2eav, u8kj43) {
    'use strict';

    var oz0dyq = wx['getSystemInfoSync'](),
        x5_c4k = cc['internal']['inputManager'],
        i$w17h = cc['internal']['eventManager'],
        kctx = cc['Event']['EventKeyboard'],
        _c5x = cc['Event']['EventMouse'],
        j48pu3 = { 'backspace': 0x8, 'tab': 0x9, 'enter': 0xd, 'shift': 0x10, 'control': 0x11, 'alt': 0x12, 'pause': 0x13, 'capslock': 0x14, 'escape': 0x1b, '\x20': 0x20, 'pageup': 0x21, 'pagedown': 0x22, 'end': 0x23, 'home': 0x24, 'arrowleft': 0x25, 'arrowup': 0x26, 'arrowright': 0x27, 'arrowdown': 0x28, 'insert': 0x2d, 'a': 0x41, 'b': 0x42, 'c': 0x43, 'd': 0x44, 'e': 0x45, 'f': 0x46, 'g': 0x47, 'h': 0x48, 'i': 0x49, 'j': 0x4a, 'k': 0x4b, 'l': 0x4c, 'm': 0x4d, 'n': 0x4e, 'o': 0x4f, 'p': 0x50, 'q': 0x51, 'r': 0x52, 's': 0x53, 't': 0x54, 'u': 0x55, 'v': 0x56, 'w': 0x57, 'x': 0x58, 'y': 0x59, 'z': 0x5a, '*': 0x6a, '+': 0x6b, '-': 0x6d, '/': 0x6f, 'f1': 0x70, 'f2': 0x71, 'f3': 0x72, 'f4': 0x73, 'f5': 0x74, 'f6': 0x75, 'f7': 0x76, 'f8': 0x77, 'f9': 0x78, 'f10': 0x79, 'f11': 0x7a, 'f12': 0x7b, 'numlock': 0x90, 'scrolllock': 0x91, ';': 0xba, '=': 0xbb, ',': 0xbc, '.': 0xbe, '`': 0xc0, '[': 0xdb, '\x5c': 0xdc, ']': 0xdd, '\x27': 0xde },
        h5_9st = { 'Delete': 0x2e, 'Digit0': 0x30, 'Digit1': 0x31, 'Digit2': 0x32, 'Digit3': 0x33, 'Digit4': 0x34, 'Digit5': 0x35, 'Digit6': 0x36, 'Digit7': 0x37, 'Digit8': 0x38, 'Digit9': 0x39, 'Numpad0': 0x60, 'Numpad1': 0x61, 'Numpad2': 0x62, 'Numpad3': 0x63, 'Numpad4': 0x64, 'Numpad5': 0x65, 'Numpad6': 0x66, 'Numpad7': 0x67, 'Numpad8': 0x68, 'Numpad9': 0x69, 'NumpadDecimal': 0x6e };function c4k8x(t_5kx) {
      var kc_t5x = t_5kx['key']['toLowerCase'](),
          qdyzo0 = t_5kx['code'];return (/^\d$/['test'](kc_t5x) || 'delete' === kc_t5x ? h5_9st[qdyzo0] : j48pu3[kc_t5x] || 0x0
      );
    }'windows' === oz0dyq['platform'] && (x5_c4k['registerSystemEvent'] = function () {
      var qzoyd;this['_isRegisterEvent'] || (this['_glView'] = cc['view'], wx['onKeyDown'](function (j3upm8) {
        return i$w17h['dispatchEvent'](new kctx(c4k8x(j3upm8), !0x0));
      }), wx['onKeyUp'](function (s9h7i) {
        return i$w17h['dispatchEvent'](new kctx(c4k8x(s9h7i), !0x1));
      }), qzoyd = { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] }, xck4_('onMouseDown', _c5x['DOWN'], function (o6zr0, n7$w) {
        x5_c4k['_mousePressed'] = !0x0, x5_c4k['handleTouchesBegin']([x5_c4k['getTouchByXY'](o6zr0['x'], o6zr0['y'], qzoyd)]);
      }), xck4_('onMouseUp', _c5x['UP'], function (ihs9t, htsw59) {
        x5_c4k['_mousePressed'] = !0x1, x5_c4k['handleTouchesEnd']([x5_c4k['getTouchByXY'](ihs9t['x'], ihs9t['y'], qzoyd)]);
      }), xck4_('onMouseMove', _c5x['MOVE'], function (j_xc4, h5w9t) {
        x5_c4k['handleTouchesMove']([x5_c4k['getTouchByXY'](j_xc4['x'], j_xc4['y'], qzoyd)]), x5_c4k['_mousePressed'] || h5w9t['setButton'](null);
      }), xck4_('onWheel', _c5x['SCROLL'], function (ku843, j_kc4) {
        j_kc4['setScrollData'](0x0, -ku843['deltaY']);
      }), this['_isRegisterEvent'] = !0x0);function xck4_(p8ue3, _kjcx4, apeb3) {
        wx[p8ue3](function (rq6zn0) {
          var _x5k4c = x5_c4k['getMouseEvent'](rq6zn0, qzoyd, _kjcx4);_x5k4c['setButton'](rq6zn0['button'] || 0x0), apeb3(rq6zn0, _x5k4c), i$w17h['dispatchEvent'](_x5k4c);
        });
      }
    });
  }, {}], 0x37: [function (ni7$61, j4up3, m3aupe) {
    'use strict';

    var iswth9 = wx['getFileSystemManager'] ? wx['getFileSystemManager']() : null;function wt59hs() {
      return iswth9 ? null : (console['warn']('can not get the file system!'), new Error('file system does not exist!'));
    }function $71iwh(k_xc4j, _cs5) {
      var rqz0o = wt59hs();if (rqz0o) return rqz0o;iswth9['unlink']({ 'filePath': k_xc4j, 'success': function () {
          cc['log']('Removed local file ' + k_xc4j + ' successfully!'), _cs5 && _cs5(null);
        }, 'fail': function (n7i$1) {
          console['warn'](n7i$1['errMsg']), _cs5 && _cs5(new Error(n7i$1['errMsg']));
        } });
    }function tsx5(dyq0zo, sh_9t, cj_4k) {
      var j48uxk = wt59hs();if (j48uxk) return j48uxk;iswth9['readFile']({ 'filePath': dyq0zo, 'encoding': sh_9t, 'success': cj_4k ? function ($1znr6) {
          cj_4k(null, $1znr6['data']);
        } : void 0x0, 'fail': function (j4uxk8) {
          console['warn'](j4uxk8['errMsg']), cj_4k && cj_4k(new Error(j4uxk8['errMsg']), null);
        } });
    }window['fsUtils'] = j4up3['exports'] = { 'fs': iswth9, 'getUserDataPath': function () {
        return wx['env']['USER_DATA_PATH'];
      }, 'checkFsValid': wt59hs, 'readDir': function (w9$h7i, xcj) {
        var scx5t_ = wt59hs();if (scx5t_) return scx5t_;iswth9['readdir']({ 'dirPath': w9$h7i, 'success': xcj ? function (x5cts_) {
            xcj(null, x5cts_['files']);
          } : void 0x0, 'fail': xcj ? function (kc_54) {
            xcj(new Error(kc_54['errMsg']), null);
          } : void 0x0 });
      }, 'exists': function (tc5xk, dozr0q) {
        var _5ts9c = wt59hs();if (_5ts9c) return _5ts9c;iswth9['access']({ 'path': tc5xk, 'success': dozr0q ? function () {
            dozr0q(!0x0);
          } : void 0x0, 'fail': dozr0q ? function () {
            dozr0q(!0x1);
          } : void 0x0 });
      }, 'copyFile': function (tc_xk, xu84, nw7$i1) {
        var z10nr6 = wt59hs();if (z10nr6) return z10nr6;iswth9['copyFile']({ 'srcPath': tc_xk, 'destPath': xu84, 'success': function () {
            cc['log']('copy file finished:' + xu84), nw7$i1 && nw7$i1(null);
          }, 'fail': function (c45_) {
            cc['log']('copy file failed:' + c45_['errMsg']), nw7$i1 && nw7$i1(new Error(c45_['errMsg']));
          } });
      }, 'downloadFile': function (ws59h, r6n$z, lv2eba) {
        wx['downloadFile']({ 'url': ws59h, 'filePath': r6n$z, 'success': function (wh9$7i) {
            0xc8 === wh9$7i['statusCode'] ? lv2eba && lv2eba(null, wh9$7i['tempFilePath'] || wh9$7i['filePath']) : (wh9$7i['filePath'] && $71iwh(wh9$7i['filePath']), console['warn']('Download file failed: ' + ws59h), lv2eba && lv2eba(new Error(wh9$7i['errMsg']), null));
          }, 'fail': function (n$7iw1) {
            console['warn'](n$7iw1['errMsg']), lv2eba && lv2eba(new Error(n$7iw1['errMsg']), null);
          } });
      }, 'readText': function (n1r$7, xc5k_4) {
        return tsx5(n1r$7, 'utf8', xc5k_4);
      }, 'readArrayBuffer': function (dzq0oy, tsw59) {
        return tsx5(dzq0oy, '', tsw59);
      }, 'saveFile': function (rd0qo, c_kj4, s59th) {
        wx['saveFile']({ 'tempFilePath': rd0qo, 'filePath': c_kj4, 'success': function (k_5tx) {
            cc['log']('save file finished:' + c_kj4), s59th && s59th(null, k_5tx['savedFilePath']);
          }, 'fail': function (j4ku) {
            cc['log']('save file failed:' + j4ku['errMsg']), s59th && s59th(new Error(j4ku['errMsg']), null);
          } });
      }, 'writeFile': function (is7h, iw7n$, wh7i$1, ct) {
        var n6z$r = wt59hs();if (n6z$r) return n6z$r;iswth9['writeFile']({ 'filePath': is7h, 'encoding': wh7i$1, 'data': iw7n$, 'success': ct ? function () {
            ct(null);
          } : void 0x0, 'fail': function (ck_4jx) {
            console['warn'](ck_4jx['errMsg']), ct && ct(new Error(ck_4jx['errMsg']));
          } });
      }, 'deleteFile': $71iwh, 'writeFileSync': function (r16nz, t9iwhs, j8kcx4) {
        var upj3 = wt59hs();if (upj3) return upj3;try {
          return iswth9['writeFileSync'](r16nz, t9iwhs, j8kcx4), null;
        } catch (sihw97) {
          return console['warn'](sihw97['message']), new Error(sihw97['message']);
        }
      }, 'readJsonSync': function (w7shi9) {
        var t9h5_ = wt59hs();if (t9h5_) return t9h5_;try {
          var cts5_ = iswth9['readFileSync'](w7shi9, 'utf8');return JSON['parse'](cts5_);
        } catch (_x5sc) {
          return console['warn'](_x5sc['message']), new Error(_x5sc['message']);
        }
      }, 'makeDirSync': function (rod0zq, x4c_) {
        var x5tcs = wt59hs();if (x5tcs) return x5tcs;try {
          return iswth9['mkdirSync'](rod0zq, x4c_), null;
        } catch (u4pj8) {
          return console['warn'](u4pj8['message']), new Error(u4pj8['message']);
        }
      } };
  }, {}], 0x38: [function (tkx_c, w$n7i1, al2bvg) {
    'use strict';

    var x4_jck = window['__globalAdapter'],
        nqz = wx['getSystemInfoSync'](),
        qr0ozd = x4_jck['adaptSys'];Object['assign'](x4_jck, { 'adaptSys': function (xck5_4) {
        if (qr0ozd['call'](this, xck5_4), 'windows' === nqz['platform']) xck5_4['isMobile'] = !0x1, xck5_4['os'] = xck5_4['OS_WINDOWS'];else {
          if ('devtools' === nqz['platform']) {
            var ab2lme = nqz['system']['toLowerCase']();-0x1 < ab2lme['indexOf']('android') ? xck5_4['os'] = xck5_4['OS_ANDROID'] : -0x1 < ab2lme['indexOf']('ios') && (xck5_4['os'] = xck5_4['OS_IOS']);
          }
        }wx['getOpenDataContext'] ? (xck5_4['platform'] = xck5_4['WECHAT_GAME'], xck5_4['browserType'] = xck5_4['BROWSER_TYPE_WECHAT_GAME']) : (xck5_4['platform'] = xck5_4['WECHAT_GAME_SUB'], xck5_4['browserType'] = xck5_4['BROWSER_TYPE_WECHAT_GAME_SUB']), xck5_4['glExtension'] = function (i1$nw) {
          return 'OES_texture_float' !== i1$nw && !!cc['renderer']['device']['ext'](i1$nw);
        };
      } });
  }, {}], 0x39: [function (hw$i71, $wn, xct_) {
    'use strict';

    var me8u = hw$i71('../../../common/utils');if (window['__globalAdapter']) {
      var epmau = window['__globalAdapter'];me8u['cloneMethod'](epmau, wx, 'getSystemInfoSync'), me8u['cloneMethod'](epmau, wx, 'onTouchStart'), me8u['cloneMethod'](epmau, wx, 'onTouchMove'), me8u['cloneMethod'](epmau, wx, 'onTouchEnd'), me8u['cloneMethod'](epmau, wx, 'onTouchCancel'), me8u['cloneMethod'](epmau, wx, 'createInnerAudioContext'), me8u['cloneMethod'](epmau, wx, 'createVideo'), me8u['cloneMethod'](epmau, wx, 'setPreferredFramesPerSecond'), me8u['cloneMethod'](epmau, wx, 'showKeyboard'), me8u['cloneMethod'](epmau, wx, 'hideKeyboard'), me8u['cloneMethod'](epmau, wx, 'updateKeyboard'), me8u['cloneMethod'](epmau, wx, 'onKeyboardInput'), me8u['cloneMethod'](epmau, wx, 'onKeyboardConfirm'), me8u['cloneMethod'](epmau, wx, 'onKeyboardComplete'), me8u['cloneMethod'](epmau, wx, 'offKeyboardInput'), me8u['cloneMethod'](epmau, wx, 'offKeyboardConfirm'), me8u['cloneMethod'](epmau, wx, 'offKeyboardComplete'), me8u['cloneMethod'](epmau, wx, 'getOpenDataContext'), me8u['cloneMethod'](epmau, wx, 'onMessage'), epmau['isSubContext'] = void 0x0 === epmau['getOpenDataContext'], me8u['cloneMethod'](epmau, wx, 'loadSubpackage'), me8u['cloneMethod'](epmau, wx, 'getSharedCanvas'), me8u['cloneMethod'](epmau, wx, 'loadFont'), me8u['cloneMethod'](epmau, wx, 'onShow'), me8u['cloneMethod'](epmau, wx, 'onHide'), me8u['cloneMethod'](epmau, wx, 'onError'), me8u['cloneMethod'](epmau, wx, 'offError');var c4_x = !0x1,
          qyo0d = 0x1,
          r0zqod = wx['getSystemInfoSync'](),
          qdz0ro = r0zqod['windowWidth'],
          w1ni7$ = r0zqod['windowHeight'] < qdz0ro;wx['onDeviceOrientationChange'] && wx['onDeviceOrientationChange'](function (alvg2b) {
        'landscape' === alvg2b['value'] ? qyo0d = 0x1 : 'landscapeReverse' === alvg2b['value'] && (qyo0d = -0x1);
      }), Object['assign'](epmau, { 'startAccelerometer': function (tsc9_5) {
          c4_x ? wx['startAccelerometer'] && wx['startAccelerometer']({ 'fail': function (i76n$) {
              console['error']('start accelerometer failed', i76n$);
            } }) : (c4_x = !0x0, wx['onAccelerometerChange'] && wx['onAccelerometerChange'](function (ujx8k) {
            var vba2el = {},
                bm2lae = ujx8k['x'],
                swh59t = ujx8k['y'];if (w1ni7$) {
              var xt5_sc = bm2lae;bm2lae = -swh59t, swh59t = xt5_sc;
            }vba2el['x'] = bm2lae * qyo0d, vba2el['y'] = swh59t * qyo0d, vba2el['z'] = ujx8k['z'], tsc9_5 && tsc9_5(vba2el);
          }));
        }, 'stopAccelerometer': function () {
          wx['stopAccelerometer'] && wx['stopAccelerometer']({ 'fail': function ($16i7n) {
              console['error']('stop accelerometer failed', $16i7n);
            } });
        } });
    }
  }, { '../../../common/utils': 0x12 }] }, {}, [0x17]);