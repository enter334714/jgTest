var H = wx.$F;
!function fkcx_4j(pbaem2, x4c5k_, zqo06) {
  function xck4_5(_s5cx, o0rqd) {
    if (!x4c5k_[_s5cx]) {
      if (!pbaem2[_s5cx]) {
        var $i7h1w = 'function' == typeof require && require;if (!o0rqd && $i7h1w) return $i7h1w(_s5cx, !0x0);if (puj834) return puj834(_s5cx, !0x0);var n17r6 = new Error('Cannot find module \'' + _s5cx + '\x27');throw n17r6['code'] = 'MODULE_NOT_FOUND', n17r6;
      }var l2a = x4c5k_[_s5cx] = { 'exports': {} };pbaem2[_s5cx][0x0]['call'](l2a['exports'], function (sw5h) {
        return xck4_5(pbaem2[_s5cx][0x1][sw5h] || sw5h);
      }, l2a, l2a['exports'], fkcx_4j, pbaem2, x4c5k_, zqo06);
    }return x4c5k_[_s5cx]['exports'];
  }for (var puj834 = 'function' == typeof require && require, a2mebp = 0x0; a2mebp < zqo06['length']; a2mebp++) xck4_5(zqo06[a2mebp]);return xck4_5;
}({ 0x1: [function (d0oqz, zn1r$6, vba) {}, {}], 0x2: [function (ema3, mb3aep, am2b) {
    'use strict';

    var ae2m = cc['Audio'];ae2m && Object['assign'](ae2m['prototype'], { '_createElement': function () {
        var $71wh = this['_src']['_nativeAsset'];this['_element'] || (this['_element'] = __globalAdapter['createInnerAudioContext']()), this['_element']['src'] = $71wh['src'];
      }, 'destroy': function () {
        this['_element'] && (this['_element']['destroy'](), this['_element'] = null);
      }, 'setCurrentTime': function (w$i17h) {
        this['_element'] ? (this['_nextTime'] = 0x0, this['_element']['seek'](w$i17h)) : this['_nextTime'] = w$i17h;
      }, 'stop': function () {
        this['_element'] && (this['_element']['seek'](0x0), this['_element']['stop'](), this['_unbindEnded'](), this['emit']('stop'), this['_state'] = ae2m['State']['STOPPED']);
      }, '_bindEnded': function (rd0o) {
        rd0o = rd0o || this['_onended'];var kxc5t_ = this['_element'];kxc5t_ && kxc5t_['onEnded'] && kxc5t_['onEnded'](rd0o);
      }, '_unbindEnded': function () {
        var rdoq = this['_element'];rdoq && rdoq['offEnded'] && rdoq['offEnded']();
      }, '_touchToPlay': function () {}, '_forceUpdatingState': function () {} });
  }, {}], 0x3: [function (u8p34, zd0roq, n1z$6) {
    'use strict';

    cc && cc['audioEngine'] && (cc['audioEngine']['_maxAudioInstance'] = 0xa);
  }, {}], 0x4: [function (_c5xs, avle, tkc_x5) {
    'use strict';

    var lbeav = cc['internal']['inputManager'],
        k84ju = window['__globalAdapter'];Object['assign'](lbeav, { 'setAccelerometerEnabled': function (eup8m3) {
        var rnz6q = cc['director']['getScheduler']();rnz6q['enableForTarget'](this), eup8m3 ? (this['_registerAccelerometerEvent'](), rnz6q['scheduleUpdate'](this)) : (this['_unregisterAccelerometerEvent'](), rnz6q['unscheduleUpdate'](this));
      }, '_registerAccelerometerEvent': function () {
        this['_accelCurTime'] = 0x0;var c4jkx = this;this['_acceleration'] = new cc['Acceleration'](), k84ju['startAccelerometer'](function (or6zq0) {
          c4jkx['_acceleration']['x'] = or6zq0['x'], c4jkx['_acceleration']['y'] = or6zq0['y'], c4jkx['_acceleration']['z'] = or6zq0['y'];
        });
      }, '_unregisterAccelerometerEvent': function () {
        this['_accelCurTime'] = 0x0, k84ju['stopAccelerometer']();
      } });
  }, {}], 0x5: [function (bave2, sw95ht, jxk_) {
    'use strict';

    !function () {
      if (cc && cc['EditBox']) {
        var b2lm = cc['EditBox'],
            p3u8me = cc['js'],
            xkc84 = b2lm['KeyboardReturnType'],
            zqo = null,
            qzr60n = b2lm['_ImplClass'];p3u8me['extend'](bvl2, qzr60n), b2lm['_ImplClass'] = bvl2, Object['assign'](bvl2['prototype'], { 'init': function (ba2g) {
            ba2g ? this['_delegate'] = ba2g : cc['error']('EditBox init failed');
          }, 'beginEditing': function () {
            if (zqo !== this) {
              var ab2m = this['_delegate'];if (zqo) zqo['_eventListeners']['onKeyboardComplete'](), __globalAdapter['updateKeyboard'] && __globalAdapter['updateKeyboard']({ 'value': ab2m['_string'] });else this['_showKeyboard']();this['_registerKeyboardEvent'](), this['_editing'] = !0x0, zqo = this, ab2m['editBoxEditingDidBegan']();
            }
          }, 'endEditing': function () {
            this['_hideKeyboard']();var kux84j = this['_eventListeners'];kux84j['onKeyboardComplete'] && kux84j['onKeyboardComplete']();
          }, '_registerKeyboardEvent': function () {
            var _sctx5 = this,
                zrq0n6 = this['_delegate'],
                s59ht_ = this['_eventListeners'];s59ht_['onKeyboardInput'] = function (m8) {
              zrq0n6['_string'] !== m8['value'] && zrq0n6['editBoxTextChanged'](m8['value']);
            }, s59ht_['onKeyboardConfirm'] = function (d0qrzo) {
              zrq0n6['editBoxEditingReturn']();var $7h1 = _sctx5['_eventListeners'];$7h1['onKeyboardComplete'] && $7h1['onKeyboardComplete']();
            }, s59ht_['onKeyboardComplete'] = function () {
              _sctx5['_editing'] = !0x1, zqo = null, _sctx5['_unregisterKeyboardEvent'](), zrq0n6['editBoxEditingDidEnded']();
            }, __globalAdapter['onKeyboardInput'](s59ht_['onKeyboardInput']), __globalAdapter['onKeyboardConfirm'](s59ht_['onKeyboardConfirm']), __globalAdapter['onKeyboardComplete'](s59ht_['onKeyboardComplete']);
          }, '_unregisterKeyboardEvent': function () {
            var k8xj = this['_eventListeners'];k8xj['onKeyboardInput'] && (__globalAdapter['offKeyboardInput'](k8xj['onKeyboardInput']), k8xj['onKeyboardInput'] = null), k8xj['onKeyboardConfirm'] && (__globalAdapter['offKeyboardConfirm'](k8xj['onKeyboardConfirm']), k8xj['onKeyboardConfirm'] = null), k8xj['onKeyboardComplete'] && (__globalAdapter['offKeyboardComplete'](k8xj['onKeyboardComplete']), k8xj['onKeyboardComplete'] = null);
          }, '_showKeyboard': function () {
            var n$i16 = this['_delegate'],
                p8u3m = n$i16['inputMode'] === b2lm['InputMode']['ANY'],
                blv2g = n$i16['maxLength'] < 0x0 ? 0xffff : n$i16['maxLength'];__globalAdapter['showKeyboard']({ 'defaultValue': n$i16['_string'], 'maxLength': blv2g, 'multiple': p8u3m, 'confirmHold': !0x1, 'confirmType': function (o0r6zq) {
                switch (o0r6zq) {case xkc84['DEFAULT']:case xkc84['DONE']:
                    return 'done';case xkc84['SEND']:
                    return 'send';case xkc84['SEARCH']:
                    return 'search';case xkc84['GO']:
                    return 'go';case xkc84['NEXT']:
                    return 'next';}return 'done';
              }(n$i16['returnType']), 'success': function () {}, 'fail': function (x5tk_c) {
                cc['warn'](x5tk_c['errMsg']);
              } });
          }, '_hideKeyboard': function () {
            __globalAdapter['hideKeyboard']({ 'success': function () {}, 'fail': function (kx_j4) {
                cc['warn'](kx_j4['errMsg']);
              } });
          } });
      }function bvl2() {
        qzr60n['call'](this), this['_eventListeners'] = { 'onKeyboardInput': null, 'onKeyboardConfirm': null, 'onKeyboardComplete': null };
      }
    }();
  }, {}], 0x6: [function ($61i, dyozq0, nz1$) {
    'use strict';

    var n6z01r = cc['internal']['inputManager'],
        itws = cc['renderer'],
        ts5_9c = cc['game'],
        x_ckt5 = cc['dynamicAtlasManager'];Object['assign'](ts5_9c, { 'setFrameRate': function (b2mape) {
        this['config']['frameRate'] = b2mape, __globalAdapter['setPreferredFramesPerSecond'] ? __globalAdapter['setPreferredFramesPerSecond'](b2mape) : (this['_intervalId'] && window['cancelAnimFrame'](this['_intervalId']), this['_intervalId'] = 0x0, this['_paused'] = !0x0, this['_setAnimFrame'](), this['_runMainLoop']());
      }, '_runMainLoop': function () {
        var s_5ht,
            c48 = this,
            ct_5s = c48['config'],
            cs5t = cc['director'],
            r$761 = !0x0,
            wsht5 = ct_5s['frameRate'];cc['debug']['setDisplayStats'](ct_5s['showFPS']), s_5ht = function () {
          if (!c48['_paused']) {
            if (c48['_intervalId'] = window['requestAnimFrame'](s_5ht), 0x1e === wsht5 && !__globalAdapter['setPreferredFramesPerSecond'] && (r$761 = !r$761)) return;cs5t['mainLoop']();
          }
        }, c48['_intervalId'] = window['requestAnimFrame'](s_5ht), c48['_paused'] = !0x1;
      }, '_initRenderer': function () {
        if (!this['_rendererInitialized']) {
          var zrdq;if (this['frame'] = this['container'] = document['createElement']('DIV'), zrdq = __globalAdapter['isSubContext'] ? window['sharedCanvas'] || __globalAdapter['getSharedCanvas']() : canvas, this['canvas'] = zrdq, this['_determineRenderType'](), this['renderType'] === this['RENDER_TYPE_WEBGL']) {
            var $r1n7 = { 'stencil': !0x0, 'antialias': cc['macro']['ENABLE_WEBGL_ANTIALIAS'], 'alpha': cc['macro']['ENABLE_TRANSPARENT_CANVAS'], 'preserveDrawingBuffer': !0x1 };itws['initWebGL'](zrdq, $r1n7), this['_renderContext'] = itws['device']['_gl'], !cc['macro']['CLEANUP_IMAGE_CACHE'] && x_ckt5 && (x_ckt5['enabled'] = !0x0);
          }this['_renderContext'] || (this['renderType'] = this['RENDER_TYPE_CANVAS'], itws['initCanvas'](zrdq), this['_renderContext'] = itws['device']['_ctx']), this['_rendererInitialized'] = !0x0;
        }
      }, '_initEvents': function () {
        this['config']['registerSystemEvent'] && n6z01r['registerSystemEvent'](this['canvas']);var c_kt5 = !0x1;__globalAdapter['onShow'] && __globalAdapter['onShow'](function (bv2lg) {
          c_kt5 && (c_kt5 = !0x1, ts5_9c['emit'](ts5_9c['EVENT_SHOW'], bv2lg));
        }), __globalAdapter['onHide'] && __globalAdapter['onHide'](function () {
          c_kt5 || (c_kt5 = !0x0, ts5_9c['emit'](ts5_9c['EVENT_HIDE']));
        }), this['on'](ts5_9c['EVENT_HIDE'], function () {
          ts5_9c['pause']();
        }), this['on'](ts5_9c['EVENT_SHOW'], function () {
          ts5_9c['resume']();
        });
      }, 'end': function () {} }), __globalAdapter['onError'] && __globalAdapter['onError'](function u4kj83(gv2al) {
      __globalAdapter['offError'] && __globalAdapter['offError'](u4kj83);var eu3map = Math['random']() < 0.001;if (!__globalAdapter['isSubContext'] && eu3map) {
        var x84kuj = __globalAdapter['getSystemInfoSync']();if (x84kuj) {
          var q0o = cc['Canvas']['instance']['node'];if (q0o) {
            var $z1nr = new cc['Node']();$z1nr['color'] = cc['Color']['BLACK'], $z1nr['parent'] = q0o;var o0dzyq = $z1nr['addComponent'](cc['Label']);$z1nr['height'] = q0o['height'] - 0x3c, $z1nr['width'] = q0o['width'] - 0x3c, o0dzyq['overflow'] = cc['Label']['Overflow']['SHRINK'], o0dzyq['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'], o0dzyq['verticalAlign'] = cc['Label']['VerticalAlign']['TOP'], o0dzyq['fontSize'] = 0x18, cc['LabelOutline'] && ($z1nr['addComponent'](cc['LabelOutline'])['color'] = cc['Color']['WHITE']), o0dzyq['string'] = '请截屏发送以下信息反馈给游戏开发者\uFF08Please send this screen shot to the game developer\uFF09\n', o0dzyq['string'] += 'Device: ' + x84kuj['brand'] + '\x20' + x84kuj['model'] + '\nSystem: ' + x84kuj['system'] + '\nPlatform: WeChat ' + x84kuj['version'] + '\nEngine: Cocos Creator v' + window['CocosEngine'] + '\nError:\n' + gv2al['message'], cc['director']['pause'](), $z1nr['once']('touchend', function () {
              $z1nr['destroy'](), setTimeout(function () {
                cc['director']['resume']();
              }, 0x3e8);
            });
          }
        }
      }
    });
  }, {}], 0x7: [function (iwt, $nwi, n0r61) {
    'use strict';

    var kxct5 = cc['internal']['inputManager'],
        h1w$i7 = { 'left': 0x0, 'top': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };kxct5 && Object['assign'](kxct5, { '_updateCanvasBoundingRect': function () {}, 'registerSystemEvent': function () {
        if (!this['_isRegisterEvent']) {
          this['_glView'] = cc['view'];var c4j8x = this,
              $7wh1i = { 'onTouchStart': this['handleTouchesBegin'], 'onTouchMove': this['handleTouchesMove'], 'onTouchEnd': this['handleTouchesEnd'], 'onTouchCancel': this['handleTouchesCancel'] },
              n1$6i = function (t_sc) {
            var qz0rod = $7wh1i[t_sc];__globalAdapter[t_sc](function (vblae) {
              vblae['changedTouches'] && qz0rod['call'](c4j8x, c4j8x['getTouchesByEvent'](vblae, h1w$i7));
            });
          };for (var _s9th5 in $7wh1i) n1$6i(_s9th5);this['_isRegisterEvent'] = !0x0;
        }
      } });
  }, {}], 0x8: [function (umae, $76n, $7h1w) {
    'use strict';

    function peu3a(cs59) {
      var pmeua3 = cs59['url'];return __globalAdapter['loadFont'](pmeua3) || 'Arial';
    }function xj4c(it9s) {
      if (it9s['_owner'] instanceof cc['Asset']) return null;var r$71 = it9s['content'],
          zrqod = it9s['rawUrl'],
          rz0q6o = it9s['texture'] || new cc['Texture2D']();return rz0q6o['_uuid'] = it9s['uuid'], rz0q6o['url'] = zrqod, rz0q6o['_setRawAsset'](zrqod, !0x1), rz0q6o['_nativeAsset'] = r$71, rz0q6o;
    }function zn$61(rn1$z6, b2vlg, ckxt_) {
      void 0x0 === ckxt_ && (ckxt_ = !0x0);var z6$ = rn1$z6['url'],
          uj3k8 = new Image();function r016() {
        uj3k8['removeEventListener']('load', r016), uj3k8['removeEventListener']('error', swt9ih), uj3k8['id'] = rn1$z6['id'], b2vlg(null, uj3k8);
      }function swt9ih() {
        uj3k8['removeEventListener']('load', r016), uj3k8['removeEventListener']('error', swt9ih), 'https:' !== window['location']['protocol'] && uj3k8['crossOrigin'] && 'anonymous' === uj3k8['crossOrigin']['toLowerCase']() ? zn$61(rn1$z6, b2vlg, !0x1) : b2vlg(new Error(cc['debug']['getError'](0x1342, z6$)));
      }ckxt_ && 'file:' !== window['location']['protocol'] ? uj3k8['crossOrigin'] = 'anonymous' : uj3k8['crossOrigin'] = null, uj3k8['addEventListener']('load', r016), uj3k8['addEventListener']('error', swt9ih), uj3k8['src'] = z6$;
    }function stc_59(sh5w, b2vlae) {
      if (0x0 === cc['sys']['__audioSupport']['format']['length']) return new Error(cc['debug']['getError'](0x133f));var k8ujx = document['createElement']('audio');k8ujx['src'] = sh5w['url'], b2vlae(null, k8ujx);
    }function vaebl2(av2lg, _s5ctx) {
      _s5ctx(null, av2lg['url']);
    }function xj_ck(s9_h5, oyzqd) {
      oyzqd(null, s9_h5['url']);
    }cc['loader']['downloader']['loadSubpackage'] = function (_xcts, z0nr6q, zn6r) {
      !zn6r && z0nr6q && (zn6r = z0nr6q, z0nr6q = null);var x_kc54 = __globalAdapter['loadSubpackage']({ 'name': _xcts, 'success': function () {
          zn6r && zn6r();
        }, 'fail': function () {
          zn6r && zn6r(new Error('Failed to load subpackage '['concat'](_xcts)));
        } });z0nr6q && x_kc54['onProgressUpdate'](z0nr6q);
    }, cc['loader']['downloader']['addHandlers']({ 'js': function (map, gabv2, be2amp) {
        __cocos_require__(map['url']), gabv2(null, map['url']);
      }, 'png': zn$61, 'jpg': zn$61, 'bmp': zn$61, 'jpeg': zn$61, 'gif': zn$61, 'ico': zn$61, 'tiff': zn$61, 'webp': zn$61, 'image': zn$61, 'mp3': stc_59, 'ogg': stc_59, 'wav': stc_59, 'm4a': stc_59, 'mp4': vaebl2, 'avi': vaebl2, 'mov': vaebl2, 'mpg': vaebl2, 'mpeg': vaebl2, 'rm': vaebl2, 'rmvb': vaebl2 }), cc['loader']['loader']['addHandlers']({ 'mp4': xj_ck, 'avi': xj_ck, 'mov': xj_ck, 'mpg': xj_ck, 'mpeg': xj_ck, 'rm': xj_ck, 'rmvb': xj_ck, 'png': xj4c, 'jpg': xj4c, 'bmp': xj4c, 'jpeg': xj4c, 'gif': xj4c, 'ico': xj4c, 'tiff': xj4c, 'webp': xj4c, 'image': xj4c, 'font': peu3a, 'eot': peu3a, 'ttf': peu3a, 'woff': peu3a, 'svg': peu3a, 'ttc': peu3a });
  }, {}], 0x9: [function (ela2v, rozq, n6r0) {
    'use strict';

    Object['assign'](cc['screen'], { 'autoFullScreen': function () {} });
  }, {}], 0xa: [function (n$rz61, b2emp, tihw9s) {
    'use strict';

    var qn06zr = cc['Texture2D'];qn06zr && Object['assign'](qn06zr['prototype'], { 'initWithElement': function (m2pabe) {
        m2pabe && (this['_image'] = m2pabe, this['handleLoadedTexture']());
      } });
  }, {}], 0xb: [function (ws79h, x_tk5, k45c_) {
    'use strict';

    x_tk5['exports'] = function (rn17, ab3mep) {
      ab3mep = ab3mep || __globalAdapter['getSystemInfoSync'](), rn17['isNative'] = !0x1, rn17['isBrowser'] = !0x1, rn17['isMobile'] = !0x0, rn17['language'] = ab3mep['language']['substr'](0x0, 0x2), rn17['languageCode'] = ab3mep['language']['toLowerCase']();var b2epm = ab3mep['system']['toLowerCase'](),
          e3m8u = ab3mep['platform'];'android' === (e3m8u = e3m8u['toLowerCase']()) ? rn17['os'] = rn17['OS_ANDROID'] : 'ios' === e3m8u && (rn17['os'] = rn17['OS_IOS']), 'android p' === b2epm && (b2epm = 'android p 9.0');var stih9 = /[\d\.]+/['exec'](b2epm);rn17['osVersion'] = stih9 ? stih9[0x0] : b2epm, rn17['osMainVersion'] = parseInt(rn17['osVersion']), rn17['browserVersion'] = ab3mep['version'];var w7hi1 = ab3mep['windowWidth'],
          ydqoz0 = ab3mep['windowHeight'],
          iw9$h = ab3mep['pixelRatio'] || 0x1;rn17['windowPixelResolution'] = { 'width': iw9$h * w7hi1, 'height': iw9$h * ydqoz0 }, rn17['localStorage'] = window['localStorage'];var mbpe2a = !0x1,
          $61nr = !0x1;try {
        var abme = document['createElement']('canvas');mbpe2a = abme['getContext']('webgl'), $61nr = abme['toDataURL']('image/webp')['startsWith']('data:image/webp');
      } catch (thiw) {}rn17['capabilities'] = { 'canvas': !0x0, 'opengl': !!mbpe2a, 'webp': $61nr }, rn17['__audioSupport'] = { 'ONLY_ONE': !0x1, 'WEB_AUDIO': !0x1, 'DELAY_CREATE_CTX': !0x1, 'format': ['.mp3'] };
    };
  }, {}], 0xc: [function (xc5k_4, _tsh9, xkj8c4) {
    'use strict';

    _tsh9['exports'] = function (w9tis) {
      w9tis['_setupContainer'] = function (blave2, kj438u, k8jc4x) {
        var lvbae = cc['game']['canvas'],
            xtck5 = blave2['_devicePixelRatio'] = 0x1;blave2['isRetinaEnabled']() && (xtck5 = blave2['_devicePixelRatio'] = Math['min'](blave2['_maxPixelRatio'], window['devicePixelRatio'] || 0x1)), kj438u *= xtck5, k8jc4x *= xtck5, lvbae['width'] === kj438u && lvbae['height'] === k8jc4x || (lvbae['width'] = kj438u, lvbae['height'] = k8jc4x);
      };
    };
  }, {}], 0xd: [function (u8pj4, m8u3, tcs5_9) {
    'use strict';

    m8u3['exports'] = function (rq0dz) {
      Object['assign'](rq0dz, { '_adjustViewportMeta': function () {}, 'setRealPixelResolution': function (a2bvg, k_cx5, cj48x) {
          this['setDesignResolutionSize'](a2bvg, k_cx5, cj48x);
        }, 'enableAutoFullScreen': function () {
          cc['warn']('cc.view.enableAutoFullScreen() is not supported on minigame platform.');
        }, 'isAutoFullScreenEnabled': function () {
          return !0x1;
        }, 'setCanvasSize': function () {
          cc['warn']('cc.view.setCanvasSize() is not supported on minigame platform.');
        }, 'setFrameSize': function () {
          cc['warn']('frame size is readonly on minigame platform.');
        }, '_initFrameSize': function () {
          var k3u = this['_frameSize'];if (__globalAdapter['isSubContext']) {
            var mbpae3 = window['sharedCanvas'] || __globalAdapter['getSharedCanvas']();k3u['width'] = mbpae3['width'], k3u['height'] = mbpae3['height'];
          } else k3u['width'] = window['innerWidth'], k3u['height'] = window['innerHeight'];
        } });
    };
  }, {}], 0xe: [function ($16rn7, tihw, oqd0yz) {
    'use strict';

    var st5h_9 = window['__globalAdapter'];Object['assign'](st5h_9, { 'adaptSys': $16rn7('./BaseSystemInfo'), 'adaptView': $16rn7('./View'), 'adaptContainerStrategy': $16rn7('./ContainerStrategy') });
  }, { './BaseSystemInfo': 0xb, './ContainerStrategy': 0xc, './View': 0xd }], 0xf: [function (rq0, zn$r16, w9h5st) {
    'use strict';

    rq0('./Audio'), rq0('./AudioEngine'), rq0('./DeviceMotionEvent'), rq0('./Editbox'), rq0('./Game'), rq0('./InputManager'), rq0('./Loader'), rq0('./Screen'), rq0('./Texture2D'), rq0('./misc');
  }, { './Audio': 0x2, './AudioEngine': 0x3, './DeviceMotionEvent': 0x4, './Editbox': 0x5, './Game': 0x6, './InputManager': 0x7, './Loader': 0x8, './Screen': 0x9, './Texture2D': 0xa, './misc': 0x10 }], 0x10: [function (_k4c5x, ku4xj, glva2b) {
    'use strict';

    cc['macro']['DOWNLOAD_MAX_CONCURRENT'] = 0xa;
  }, {}], 0x11: [function (stxc_, kx_4cj, u83pme) {
    'use strict';

    var x4uk8j = 'RemoteDownloader',
        bma2 = window['fsUtils'],
        kct_ = /^\w+:\/\/.*/,
        qrzo = __globalAdapter['isSubContext'],
        pm2bae = null,
        blvg = null,
        $1win = null,
        nr176$ = null,
        h95tws = !0x1,
        ozqyd0 = /the maximum size of the file storage/,
        upm3j8 = {};function c5_xk() {
      this['id'] = x4uk8j, this['async'] = !0x0, this['pipeline'] = null, this['REMOTE_SERVER_ROOT'] = '', this['SUBCONTEXT_ROOT'] = '';
    }function iw17h(_5kx4, st_x) {
      !_5kx4['type'] || c_59st(_5kx4['type']) >= tck5_x['LOADABLE_MIN'] ? function ($n16z, ct_xs5) {
        var rnz0q6 = $n16z['url'],
            qzrn06 = bma2['readText'];c_59st($n16z['type']) === tck5_x['BIN'] && (qzrn06 = bma2['readArrayBuffer']);var i$h7w = qzrn06(rnz0q6, function (a2mle, j_4kxc) {
          a2mle ? ct_xs5(a2mle) : j_4kxc ? ($n16z['states'][cc['loader']['downloader']['id']] = cc['Pipeline']['ItemState']['COMPLETE'], ct_xs5(null, j_4kxc)) : ct_xs5(new Error('Empty file: ' + rnz0q6));
        });i$h7w && ct_xs5(i$h7w);
      }(_5kx4, st_x) : st_x(null, null);
    }c5_xk['ID'] = x4uk8j, c5_xk['prototype']['init'] = function () {
      if (!qrzo) {
        this['cacheDir'] = bma2['getUserDataPath']() + '/gamecaches', this['cachedFileName'] = 'cacheList.json', this['cacheAsset'] = !0x0, this['cachePeriod'] = 0x1f4, this['outOfStorage'] = !0x1, this['writeFilePeriod'] = 0x7d0, nr176$ = {}, pm2bae = {};var rodz = this['cacheDir'] + '/' + this['cachedFileName'];(blvg = bma2['readJsonSync'](rodz)) instanceof Error && (blvg = {}, bma2['makeDirSync'](this['cacheDir'], !0x0), bma2['writeFileSync'](rodz, JSON['stringify'](blvg), 'utf8'));
      }
    }, c5_xk['prototype']['handle'] = function (hi9$7, m2ble) {
      if ('js' === hi9$7['type']) return null;if ('uuid' === hi9$7['type']) {
        var pju34 = cc['Pipeline']['Downloader']['PackDownloader']['load'](hi9$7, m2ble);if (void 0x0 !== pju34) return pju34 || void 0x0;
      }if (qrzo) return kct_['test'](hi9$7['url']) ? null : (hi9$7['url'] = this['SUBCONTEXT_ROOT'] + '/' + hi9$7['url'], bma2['checkFsValid']() ? null : void iw17h(hi9$7, m2ble));!function (pmb3ea, bag2l) {
        var a2ep = bma2['checkFsValid']();if (a2ep) return bag2l(a2ep);var r6nz1 = me3u['getCacheName'](pmb3ea['url']);if (r6nz1 in blvg) upm3j8[r6nz1] = !0x0, pmb3ea['url'] = me3u['cacheDir'] + '/' + r6nz1, j_x4c(pmb3ea, r6nz1), iw17h(pmb3ea, bag2l);else {
          var ablev = function (apm3u) {
            if (apm3u) iw17h(pmb3ea, bag2l);else {
              if (!me3u['REMOTE_SERVER_ROOT']) return void bag2l(null, null);!function (j4x_k, bleam) {
                var jk4ux8 = j4x_k['url'];if (kct_['test'](jk4ux8)) return bleam(null, null);var al2eb = me3u['REMOTE_SERVER_ROOT'] + '/' + jk4ux8;j4x_k['url'] = al2eb;var its9h = me3u['getCacheName'](jk4ux8);cc['sys']['os'] === cc['sys']['OS_ANDROID'] && j4x_k['type'] && c_59st(j4x_k['type']) === tck5_x['IMAGE'] ? (me3u['cacheAsset'] && (k83ju(al2eb, !0x1, its9h), j_x4c(j4x_k, its9h)), bleam(null, null)) : bma2['downloadFile'](al2eb, void 0x0, function (txk5_c, cx8k4) {
                  txk5_c ? bleam(txk5_c, null) : (j4x_k['url'] = cx8k4, me3u['cacheAsset'] && (k83ju(cx8k4, !0x0, its9h), j_x4c(j4x_k, its9h)), iw17h(j4x_k, bleam));
                });
              }(pmb3ea, bag2l);
            }
          };pmb3ea['url'] in pm2bae ? ablev(pm2bae[pmb3ea['url']]) : bma2['exists'](pmb3ea['url'], function (dr0) {
            pm2bae[pmb3ea['url']] = dr0, ablev(dr0);
          });
        }
      }(hi9$7, m2ble);
    }, c5_xk['prototype']['cleanOldAssets'] = function () {
      return cc['warn']('remoteDownloader.cleanOldAssets has been deprecated, please use remoteDownloader.cleanOldCaches instead!'), this['cleanOldCaches']();
    }, c5_xk['prototype']['cleanOldCaches'] = function () {
      this['cleanAllCaches'](upm3j8, function (pe3mua) {
        if (pe3mua) cc['warn'](pe3mua);else {
          for (var r0doq in upm3j8) cc['log']('reserve local file: ' + r0doq);cc['log']('Clean old Assets successfully!');
        }
      });
    }, c5_xk['prototype']['getCacheName'] = function (n6r0qz) {
      return n6r0qz['replace'](/\//g, '-');
    }, c5_xk['prototype']['getCachedFileList'] = function () {
      return blvg;
    }, c5_xk['prototype']['cleanCache'] = function (n60rz) {
      if (n60rz in blvg) {
        var abe2m = this;delete blvg[n60rz], qyz0d(function () {
          n60rz in blvg || bma2['deleteFile'](abe2m['cacheDir'] + '/' + n60rz, function (i9tsw) {
            i9tsw || (abe2m['outOfStorage'] = !0x1);
          });
        });
      }
    }, c5_xk['prototype']['cleanAllAssets'] = function () {
      cc['warn']('remoteDownloader.cleanAllAssets has been deprecated, please use cleanAllCaches instead!'), this['cleanAllCaches'](null, function (xj4_) {
        xj4_ && cc['error'](xj4_['message']);
      });
    }, c5_xk['prototype']['cleanAllCaches'] = function (belva, q0dz) {
      belva = belva || {};var i7$h9 = this,
          i9$7w = bma2['readDir'](i7$h9['cacheDir'], function (ep3uam, pe3uam) {
        if (ep3uam) q0dz && q0dz(ep3uam);else {
          for (var mpeu38 = [], ju38 = 0x0, c9t_ = pe3uam['length']; ju38 < c9t_; ju38++) {
            var $r17 = pe3uam[ju38];$r17 !== i7$h9['cachedFileName'] && ($r17 in belva || ($r17 in nr176$ ? delete nr176$[$r17] : (delete blvg[$r17], mpeu38['push']($r17))));
          }qyz0d(function () {
            for (var p438 = 0x0, h7s9 = 0x0, ape = mpeu38['length']; h7s9 < ape; h7s9++) mpeu38[h7s9] in blvg ? ++p438 === ape && (i7$h9['outOfStorage'] = !0x1, q0dz && q0dz(null)) : bma2['deleteFile'](i7$h9['cacheDir'] + '/' + mpeu38[h7s9], function (rq0o6) {
              ++p438 === ape && (i7$h9['outOfStorage'] = !0x1, q0dz && q0dz(null));
            });
          });
        }
      });i9$7w && q0dz(i9$7w);
    };var me3u = window['remoteDownloader'] = new c5_xk();function j_x4c(j8kux4, zdqo0) {
      cc['LoadingItems']['getQueue'](j8kux4)['addListener'](j8kux4['id'], function (ukj) {
        ukj['error'] && (ukj['url'] in nr176$ ? delete nr176$[ukj['url']] : me3u['cleanCache'](zdqo0));
      });
    }function k83ju(ga2lv, whs59, k48cjx) {
      (nr176$[ga2lv] = { 'isCopy': whs59, 'cachePath': k48cjx }, !h95tws) && (h95tws = !0x0, setTimeout(function oq0z6() {
        for (var qyd0o in nr176$) {
          if (me3u['outOfStorage']) h95tws = !0x1;else {
            var qo06r = nr176$[qyd0o],
                e2ab = me3u['cacheDir'] + '/' + qo06r['cachePath'],
                cjx8k = bma2['copyFile'];qo06r['isCopy'] || (cjx8k = bma2['downloadFile']), cjx8k(qyd0o, e2ab, function (t5x_ck) {
              if (h95tws = !0x1, t5x_ck) {
                if (ozqyd0['test'](t5x_ck['message'])) return void (me3u['outOfStorage'] = !0x0);
              } else blvg[qo06r['cachePath']] = 0x1, delete nr176$[qyd0o], qyz0d();cc['js']['isEmptyObject'](nr176$) || (h95tws = !0x0, setTimeout(oq0z6, me3u['cachePeriod']));
            });
          }return;
        }h95tws = !0x1;
      }, me3u['cachePeriod']));
    }var ve2lb = [],
        mp3ba = [],
        j4x_c = !0x1;function qyz0d(st95hw) {
      $1win ? st95hw && ve2lb['push'](st95hw) : ($1win = setTimeout(function () {
        j4x_c = !($1win = null), bma2['writeFile'](me3u['cacheDir'] + '/' + me3u['cachedFileName'], JSON['stringify'](blvg), 'utf8', function () {
          j4x_c = !0x1;for (var s_5xtc = 0x0, j843 = ve2lb['length']; s_5xtc < j843; s_5xtc++) ve2lb[s_5xtc]();ve2lb['length'] = 0x0, ve2lb['push']['apply'](ve2lb, mp3ba), mp3ba['length'] = 0x0;
        });
      }, me3u['writeFilePeriod']), !0x0 === j4x_c ? st95hw && mp3ba['push'](st95hw) : st95hw && ve2lb['push'](st95hw));
    }function c_59st(be) {
      return u8xk[be] || tck5_x['DEFAULT'];
    }var tck5_x = { 'IMAGE': 0x1, 'FONT': 0x2, 'AUDIO': 0x3, 'SCRIPT': 0x4, 'VIDEO': 0x5, 'TEXT': 0x6, 'BIN': 0x7, 'DEFAULT': 0x8, 'LOADABLE_MIN': 0x6 },
        u8xk = { 'js': tck5_x['SCRIPT'], 'png': tck5_x['IMAGE'], 'jpg': tck5_x['IMAGE'], 'bmp': tck5_x['IMAGE'], 'jpeg': tck5_x['IMAGE'], 'gif': tck5_x['IMAGE'], 'ico': tck5_x['IMAGE'], 'tiff': tck5_x['IMAGE'], 'webp': tck5_x['IMAGE'], 'image': tck5_x['IMAGE'], 'mp3': tck5_x['AUDIO'], 'ogg': tck5_x['AUDIO'], 'wav': tck5_x['AUDIO'], 'm4a': tck5_x['AUDIO'], 'mp4': tck5_x['VIDEO'], 'avi': tck5_x['VIDEO'], 'mov': tck5_x['VIDEO'], 'mpg': tck5_x['VIDEO'], 'mpeg': tck5_x['VIDEO'], 'rm': tck5_x['VIDEO'], 'rmvb': tck5_x['VIDEO'], 'txt': tck5_x['TEXT'], 'xml': tck5_x['TEXT'], 'vsh': tck5_x['TEXT'], 'fsh': tck5_x['TEXT'], 'atlas': tck5_x['TEXT'], 'tmx': tck5_x['TEXT'], 'tsx': tck5_x['TEXT'], 'json': tck5_x['TEXT'], 'ExportJson': tck5_x['TEXT'], 'plist': tck5_x['TEXT'], 'fnt': tck5_x['TEXT'], 'font': tck5_x['FONT'], 'eot': tck5_x['FONT'], 'ttf': tck5_x['FONT'], 'woff': tck5_x['FONT'], 'svg': tck5_x['FONT'], 'ttc': tck5_x['FONT'], 'binary': tck5_x['BIN'], 'dbbin': tck5_x['BIN'], 'skel': tck5_x['BIN'], 'bin': tck5_x['BIN'], 'pvr': tck5_x['BIN'], 'pkm': tck5_x['BIN'] };
  }, {}], 0x12: [function (q06r, $1inw, iht) {
    'use strict';

    $1inw['exports'] = { 'cloneMethod': function (t5shw9, tcs59, nw7$i, k8c4xj) {
        tcs59[nw7$i] && (t5shw9[k8c4xj = k8c4xj || nw7$i] = tcs59[nw7$i]['bind'](tcs59));
      } };
  }, {}], 0x13: [function (u348, x4c_jk, o6zqr) {
    'use strict';

    function b2pma($w9ih) {
      this['options'] = $w9ih || { 'locator': {} };
    }function m8upj() {
      this['cdata'] = !0x1;
    }function _x4ck(k_tcx, u8m3jp) {
      u8m3jp['lineNumber'] = k_tcx['lineNumber'], u8m3jp['columnNumber'] = k_tcx['columnNumber'];
    }function jp8u(bempa) {
      if (bempa) return '\x0a@' + (bempa['systemId'] || '') + '#[line:' + bempa['lineNumber'] + ',col:' + bempa['columnNumber'] + ']';
    }function ameu3(ev, zrd0o, b2lvea) {
      return 'string' == typeof ev ? ev['substr'](zrd0o, b2lvea) : ev['length'] >= zrd0o + b2lvea || zrd0o ? new java['lang']['String'](ev, zrd0o, b2lvea) + '' : ev;
    }function hwt9s(xjk84c, twsh) {
      xjk84c['currentElement'] ? xjk84c['currentElement']['appendChild'](twsh) : xjk84c['doc']['appendChild'](twsh);
    }b2pma['prototype']['parseFromString'] = function (iw9st, c_kt) {
      var ro6zq = this['options'],
          jc_x = new qor0z6(),
          pmu3ea = ro6zq['domBuilder'] || new m8upj(),
          j8kxc = ro6zq['errorHandler'],
          a3uepm = ro6zq['locator'],
          mue8 = ro6zq['xmlns'] || {},
          hst_9 = /\/x?html?$/['test'](c_kt),
          _kc4 = hst_9 ? vel2ba['entityMap'] : { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return a3uepm && pmu3ea['setDocumentLocator'](a3uepm), jc_x['errorHandler'] = function (qd0zro, me38up, pj4) {
        if (!qd0zro) {
          if (me38up instanceof m8upj) return me38up;qd0zro = me38up;
        }var kj_xc4 = {},
            zdqo0y = qd0zro instanceof Function;function rqo60z(d0zoy) {
          var eap = qd0zro[d0zoy];!eap && zdqo0y && (eap = 0x2 == qd0zro['length'] ? function (ts9_c5) {
            qd0zro(d0zoy, ts9_c5);
          } : qd0zro), kj_xc4[d0zoy] = eap ? function (o0z6) {
            eap('[xmldom ' + d0zoy + ']\t' + o0z6 + jp8u(pj4));
          } : function () {};
        }return pj4 = pj4 || {}, rqo60z('warning'), rqo60z('error'), rqo60z('fatalError'), kj_xc4;
      }(j8kxc, pmu3ea, a3uepm), jc_x['domBuilder'] = ro6zq['domBuilder'] || pmu3ea, hst_9 && (mue8[''] = 'http://www.w3.org/1999/xhtml'), mue8['xml'] = mue8['xml'] || 'http://www.w3.org/XML/1998/namespace', iw9st ? jc_x['parse'](iw9st, mue8, _kc4) : jc_x['errorHandler']['error']('invalid doc source'), pmu3ea['doc'];
    }, m8upj['prototype'] = { 'startDocument': function () {
        this['doc'] = new u48j3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
      }, 'startElement': function (qzr6, ist9, x4ku8j, x4u8j) {
        var x4u8k = this['doc'],
            up38j = x4u8k['createElementNS'](qzr6, x4ku8j || ist9),
            mb2eap = x4u8j['length'];hwt9s(this, up38j), this['currentElement'] = up38j, this['locator'] && _x4ck(this['locator'], up38j);for (var mu8pe3 = 0x0; mu8pe3 < mb2eap; mu8pe3++) {
          qzr6 = x4u8j['getURI'](mu8pe3);var zqrd0 = x4u8j['getValue'](mu8pe3),
              dyoqz0 = (x4ku8j = x4u8j['getQName'](mu8pe3), x4u8k['createAttributeNS'](qzr6, x4ku8j));this['locator'] && _x4ck(x4u8j['getLocator'](mu8pe3), dyoqz0), dyoqz0['value'] = dyoqz0['nodeValue'] = zqrd0, up38j['setAttributeNode'](dyoqz0);
        }
      }, 'endElement': function () {
        var pe3ua = this['currentElement'];pe3ua['tagName'], this['currentElement'] = pe3ua['parentNode'];
      }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (z0rqo, ae2vbl) {
        var be2am = this['doc']['createProcessingInstruction'](z0rqo, ae2vbl);this['locator'] && _x4ck(this['locator'], be2am), hwt9s(this, be2am);
      }, 'ignorableWhitespace': function () {}, 'characters': function (blev, _jkc4x, xu8) {
        if (blev = ameu3['apply'](this, arguments)) {
          if (this['cdata']) var th5w9s = this['doc']['createCDATASection'](blev);else th5w9s = this['doc']['createTextNode'](blev);this['currentElement'] ? this['currentElement']['appendChild'](th5w9s) : /^\s*$/['test'](blev) && this['doc']['appendChild'](th5w9s), this['locator'] && _x4ck(this['locator'], th5w9s);
        }
      }, 'skippedEntity': function () {}, 'endDocument': function () {
        this['doc']['normalize']();
      }, 'setDocumentLocator': function (mp3j8u) {
        (this['locator'] = mp3j8u) && (mp3j8u['lineNumber'] = 0x0);
      }, 'comment': function (i$hw17, ml2ae, tcs9_) {
        i$hw17 = ameu3['apply'](this, arguments);var i1w = this['doc']['createComment'](i$hw17);this['locator'] && _x4ck(this['locator'], i1w), hwt9s(this, i1w);
      }, 'startCDATA': function () {
        this['cdata'] = !0x0;
      }, 'endCDATA': function () {
        this['cdata'] = !0x1;
      }, 'startDTD': function (z$6n, qro6z0, em3au) {
        var mpabe3 = this['doc']['implementation'];if (mpabe3 && mpabe3['createDocumentType']) {
          var xkc4_5 = mpabe3['createDocumentType'](z$6n, qro6z0, em3au);this['locator'] && _x4ck(this['locator'], xkc4_5), hwt9s(this, xkc4_5);
        }
      }, 'warning': function (oz0y) {
        console['warn']('[xmldom warning]\t' + oz0y, jp8u(this['locator']));
      }, 'error': function (x_k54c) {
        console['error']('[xmldom error]\t' + x_k54c, jp8u(this['locator']));
      }, 'fatalError': function (bl2vea) {
        throw console['error']('[xmldom fatalError]\t' + bl2vea, jp8u(this['locator'])), bl2vea;
      } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (m3apu) {
      m8upj['prototype'][m3apu] = function () {
        return null;
      };
    });var vel2ba = u348('./entities'),
        qor0z6 = u348('undefined')['XMLReader'],
        u48j3 = o6zqr['DOMImplementation'] = u348('undefined')['DOMImplementation'];o6zqr['XMLSerializer'] = u348('undefined')['XMLSerializer'], o6zqr['DOMParser'] = b2pma;
  }, { 'undefined': 0x14, './entities': 0x15, 'undefined': 0x16 }], 0x14: [function (h71wi, mbepa2, i$w1h) {
    'use strict';

    function $r1(x5_tcs) {
      return ($r1 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (u4j8kx) {
        return typeof u4j8kx;
      } : function (k483ju) {
        return k483ju && 'function' == typeof Symbol && k483ju['constructor'] === Symbol && k483ju !== Symbol['prototype'] ? 'symbol' : typeof k483ju;
      })(x5_tcs);
    }function ebalm(st_59h, z0qn6r) {
      for (var jc8k in st_59h) z0qn6r[jc8k] = st_59h[jc8k];
    }function k3uj84(n7r6$1, rozq0d) {
      var abem2p = n7r6$1['prototype'];if (!(abem2p instanceof rozq0d)) {
        var xc4k5_ = function () {};for (var s_5tc9 in xc4k5_['prototype'] = rozq0d['prototype'], xc4k5_ = new xc4k5_(), abem2p) xc4k5_[s_5tc9] = abem2p[s_5tc9];n7r6$1['prototype'] = abem2p = xc4k5_;
      }abem2p['constructor'] != n7r6$1 && ('function' != typeof n7r6$1 && console['error']('unknow Class:' + n7r6$1), abem2p['constructor'] = n7r6$1);
    }var wh9st = 'http://www.w3.org/1999/xhtml',
        $16n7i = {},
        c_5ktx = $16n7i['ELEMENT_NODE'] = 0x1,
        i1$h7 = $16n7i['ATTRIBUTE_NODE'] = 0x2,
        ma2ebl = $16n7i['TEXT_NODE'] = 0x3,
        q06o = $16n7i['CDATA_SECTION_NODE'] = 0x4,
        w5hts = $16n7i['ENTITY_REFERENCE_NODE'] = 0x5,
        t9_5sh = $16n7i['ENTITY_NODE'] = 0x6,
        d0zq = $16n7i['PROCESSING_INSTRUCTION_NODE'] = 0x7,
        r0z61 = $16n7i['COMMENT_NODE'] = 0x8,
        cxs5t = $16n7i['DOCUMENT_NODE'] = 0x9,
        e2vbal = $16n7i['DOCUMENT_TYPE_NODE'] = 0xa,
        win71$ = $16n7i['DOCUMENT_FRAGMENT_NODE'] = 0xb,
        $67r1n = $16n7i['NOTATION_NODE'] = 0xc,
        zr16$ = {},
        k8ux = {},
        eb2mpa = (zr16$['INDEX_SIZE_ERR'] = (k8ux[0x1] = 'Index size error', 0x1), zr16$['DOMSTRING_SIZE_ERR'] = (k8ux[0x2] = 'DOMString size error', 0x2), zr16$['HIERARCHY_REQUEST_ERR'] = (k8ux[0x3] = 'Hierarchy request error', 0x3)),
        sw7h9i = (zr16$['WRONG_DOCUMENT_ERR'] = (k8ux[0x4] = 'Wrong document', 0x4), zr16$['INVALID_CHARACTER_ERR'] = (k8ux[0x5] = 'Invalid character', 0x5), zr16$['NO_DATA_ALLOWED_ERR'] = (k8ux[0x6] = 'No data allowed', 0x6), zr16$['NO_MODIFICATION_ALLOWED_ERR'] = (k8ux[0x7] = 'No modification allowed', 0x7), zr16$['NOT_FOUND_ERR'] = (k8ux[0x8] = 'Not found', 0x8)),
        j_c4x = (zr16$['NOT_SUPPORTED_ERR'] = (k8ux[0x9] = 'Not supported', 0x9), zr16$['INUSE_ATTRIBUTE_ERR'] = (k8ux[0xa] = 'Attribute in use', 0xa));zr16$['INVALID_STATE_ERR'] = (k8ux[0xb] = 'Invalid state', 0xb), zr16$['SYNTAX_ERR'] = (k8ux[0xc] = 'Syntax error', 0xc), zr16$['INVALID_MODIFICATION_ERR'] = (k8ux[0xd] = 'Invalid modification', 0xd), zr16$['NAMESPACE_ERR'] = (k8ux[0xe] = 'Invalid namespace', 0xe), zr16$['INVALID_ACCESS_ERR'] = (k8ux[0xf] = 'Invalid access', 0xf);function q06rnz(xk4_, avbl2) {
      if (avbl2 instanceof Error) var r7n6$1 = avbl2;else r7n6$1 = this, Error['call'](this, k8ux[xk4_]), this['message'] = k8ux[xk4_], Error['captureStackTrace'] && Error['captureStackTrace'](this, q06rnz);return r7n6$1['code'] = xk4_, avbl2 && (this['message'] = this['message'] + ':\x20' + avbl2), r7n6$1;
    }function h9w7i$() {}function ws9(upj, puea3) {
      this['_node'] = upj, this['_refresh'] = puea3, i716$n(this);
    }function i716$n(p2eab) {
      var n$i176 = p2eab['_node']['_inc'] || p2eab['_node']['ownerDocument']['_inc'];if (p2eab['_inc'] != n$i176) {
        var maelb2 = p2eab['_refresh'](p2eab['_node']);for (var $7i1n6 in x5tkc_(p2eab, 'length', maelb2['length']), maelb2) p2eab[$7i1n6] = maelb2[$7i1n6];p2eab['_inc'] = n$i176;
      }
    }function uepm8() {}function _4cxj(m2bl, r0nz61) {
      for (var mpu8 = m2bl['length']; mpu8--;) if (m2bl[mpu8] === r0nz61) return mpu8;
    }function vblg($71hw, n7$1iw, hi9w$7, t59s) {
      if (t59s ? n7$1iw[_4cxj(n7$1iw, t59s)] = hi9w$7 : n7$1iw[n7$1iw['length']++] = hi9w$7, $71hw) {
        var _4cj = (hi9w$7['ownerElement'] = $71hw)['ownerDocument'];_4cj && (t59s && p2ebm(_4cj, $71hw, t59s), n61$i7 = $71hw, stc_9 = hi9w$7, (w7h$9 = _4cj) && w7h$9['_inc']++, 'http://www.w3.org/2000/xmlns/' == stc_9['namespaceURI'] && (n61$i7['_nsMap'][stc_9['prefix'] ? stc_9['localName'] : ''] = stc_9['value']));
      }var w7h$9, n61$i7, stc_9;
    }function zr06oq(rzoq6, vgba2l, c_t5xk) {
      var zr0qd = _4cxj(vgba2l, c_t5xk);if (!(0x0 <= zr0qd)) throw q06rnz(sw7h9i, new Error(rzoq6['tagName'] + '@' + c_t5xk));for (var oqdrz = vgba2l['length'] - 0x1; zr0qd < oqdrz;) vgba2l[zr0qd] = vgba2l[++zr0qd];if (vgba2l['length'] = oqdrz, rzoq6) {
        var mb3pae = rzoq6['ownerDocument'];mb3pae && (p2ebm(mb3pae, rzoq6, c_t5xk), c_t5xk['ownerElement'] = null);
      }
    }function x4j8ck(mu3pea) {
      if (this['_features'] = {}, mu3pea) {
        for (var mpab3e in mu3pea) this['_features'] = mu3pea[mpab3e];
      }
    }function _4k5cx() {}function si9tw(or60z) {
      return ('<' == or60z ? '&lt;' : '>' == or60z && '&gt;') || '&' == or60z && '&amp;' || '\x22' == or60z && '&quot;' || '&#' + or60z['charCodeAt']() + ';';
    }function iwh(st59h, _tc5s) {
      if (_tc5s(st59h)) return 0x1;if (st59h = st59h['firstChild']) do {
        if (iwh(st59h, _tc5s)) return 0x1;
      } while (st59h = st59h['nextSibling']);
    }function $hw17() {}function p2ebm(w9i7h, cxjk4, q0dozy) {
      w9i7h && w9i7h['_inc']++, 'http://www.w3.org/2000/xmlns/' == q0dozy['namespaceURI'] && delete cxjk4['_nsMap'][q0dozy['prefix'] ? q0dozy['localName'] : ''];
    }function j_4xk(glbv2a, kx_5, bape2) {
      if (glbv2a && glbv2a['_inc']) {
        glbv2a['_inc']++;var ih7sw = kx_5['childNodes'];if (bape2) ih7sw[ih7sw['length']++] = bape2;else {
          for (var w1i7n = kx_5['firstChild'], $6in17 = 0x0; w1i7n;) w1i7n = (ih7sw[$6in17++] = w1i7n)['nextSibling'];ih7sw['length'] = $6in17;
        }
      }
    }function $i71(tsxc5, jup4) {
      var j4xck8 = jup4['previousSibling'],
          hst5w = jup4['nextSibling'];return j4xck8 ? j4xck8['nextSibling'] = hst5w : tsxc5['firstChild'] = hst5w, hst5w ? hst5w['previousSibling'] = j4xck8 : tsxc5['lastChild'] = j4xck8, j_4xk(tsxc5['ownerDocument'], tsxc5), jup4;
    }function tsw9hi(qo6zr0, peba3, _45xk) {
      var h1i = peba3['parentNode'];if (h1i && h1i['removeChild'](peba3), peba3['nodeType'] === win71$) {
        var zd0qoy = peba3['firstChild'];if (null == zd0qoy) return peba3;var bgal2 = peba3['lastChild'];
      } else zd0qoy = bgal2 = peba3;var s9hi7 = _45xk ? _45xk['previousSibling'] : qo6zr0['lastChild'];for (zd0qoy['previousSibling'] = s9hi7, bgal2['nextSibling'] = _45xk, s9hi7 ? s9hi7['nextSibling'] = zd0qoy : qo6zr0['firstChild'] = zd0qoy, null == _45xk ? qo6zr0['lastChild'] = bgal2 : _45xk['previousSibling'] = bgal2; zd0qoy['parentNode'] = qo6zr0, zd0qoy !== bgal2 && (zd0qoy = zd0qoy['nextSibling']););return j_4xk(qo6zr0['ownerDocument'] || qo6zr0, qo6zr0), peba3['nodeType'] == win71$ && (peba3['firstChild'] = peba3['lastChild'] = null), peba3;
    }function kj_4() {
      this['_nsMap'] = {};
    }function zd0qo() {}function qzdy0() {}function ozdr() {}function j4kx_() {}function p4ju() {}function _sct5() {}function n0z6r1() {}function jck48x() {}function bamep() {}function labe() {}function vg2() {}function cs5_t() {}function _xj(i7w$h1, qyd0oz) {
      var $1wi7h = [],
          ue8mp = 0x9 == this['nodeType'] && this['documentElement'] || this,
          r1zn6$ = ue8mp['prefix'],
          c84jkx = ue8mp['namespaceURI'];if (c84jkx && null == r1zn6$ && null == (r1zn6$ = ue8mp['lookupPrefix'](c84jkx))) var qrod0 = [{ 'namespace': c84jkx, 'prefix': null }];return lvab2(this, $1wi7h, i7w$h1, qyd0oz, qrod0), $1wi7h['join']('');
    }function hwit9($71whi, a2epmb, tckx5_) {
      var xk5tc_ = $71whi['prefix'] || '',
          _5xk4 = $71whi['namespaceURI'];if ((xk5tc_ || _5xk4) && ('xml' !== xk5tc_ || 'http://www.w3.org/XML/1998/namespace' !== _5xk4) && 'http://www.w3.org/2000/xmlns/' != _5xk4) {
        for (var xkc45 = tckx5_['length']; xkc45--;) {
          var $i7wn1 = tckx5_[xkc45];if ($i7wn1['prefix'] == xk5tc_) return $i7wn1['namespace'] != _5xk4;
        }return 0x1;
      }
    }function lvab2(b2leam, b2gav, $nr1, s9tc, ish97w) {
      if (s9tc) {
        if (!(b2leam = s9tc(b2leam))) return;if ('string' == typeof b2leam) return void b2gav['push'](b2leam);
      }switch (b2leam['nodeType']) {case c_5ktx:
          ish97w = ish97w || [];var xc5_kt = b2leam['attributes'],
              a3pu = xc5_kt['length'],
              qdzo0 = b2leam['firstChild'],
              u8xjk4 = b2leam['tagName'];$nr1 = wh9st === b2leam['namespaceURI'] || $nr1, b2gav['push']('<', u8xjk4);for (var em83u = 0x0; em83u < a3pu; em83u++) {
            'xmlns' == (pmea3 = xc5_kt['item'](em83u))['prefix'] ? ish97w['push']({ 'prefix': pmea3['localName'], 'namespace': pmea3['value'] }) : 'xmlns' == pmea3['nodeName'] && ish97w['push']({ 'prefix': '', 'namespace': pmea3['value'] });
          }for (em83u = 0x0; em83u < a3pu; em83u++) {
            var pmea3;if (hwit9(pmea3 = xc5_kt['item'](em83u), 0x0, ish97w)) {
              var kj83 = pmea3['prefix'] || '',
                  wi97s = pmea3['namespaceURI'],
                  a3meu = kj83 ? ' xmlns:' + kj83 : ' xmlns';b2gav['push'](a3meu, '=\x22', wi97s, '\x22'), ish97w['push']({ 'prefix': kj83, 'namespace': wi97s });
            }lvab2(pmea3, b2gav, $nr1, s9tc, ish97w);
          }hwit9(b2leam, 0x0, ish97w) && (kj83 = b2leam['prefix'] || '', wi97s = b2leam['namespaceURI'], a3meu = kj83 ? ' xmlns:' + kj83 : ' xmlns', (b2gav['push'](a3meu, '=\x22', wi97s, '\x22'), ish97w['push']({ 'prefix': kj83, 'namespace': wi97s })));if (qdzo0 || $nr1 && !/^(?:meta|link|img|br|hr|input)$/i['test'](u8xjk4)) {
            if (b2gav['push']('>'), $nr1 && /^script$/i['test'](u8xjk4)) {
              for (; qdzo0;) qdzo0['data'] ? b2gav['push'](qdzo0['data']) : lvab2(qdzo0, b2gav, $nr1, s9tc, ish97w), qdzo0 = qdzo0['nextSibling'];
            } else {
              for (; qdzo0;) lvab2(qdzo0, b2gav, $nr1, s9tc, ish97w), qdzo0 = qdzo0['nextSibling'];
            }b2gav['push']('</', u8xjk4, '>');
          } else b2gav['push']('/>');return;case cxs5t:case win71$:
          for (qdzo0 = b2leam['firstChild']; qdzo0;) lvab2(qdzo0, b2gav, $nr1, s9tc, ish97w), qdzo0 = qdzo0['nextSibling'];return;case i1$h7:
          return b2gav['push']('\x20', b2leam['name'], '=\x22', b2leam['value']['replace'](/[<&"]/g, si9tw), '\x22');case ma2ebl:
          return b2gav['push'](b2leam['data']['replace'](/[<&]/g, si9tw));case q06o:
          return b2gav['push']('<![CDATA[', b2leam['data'], ']]>');case r0z61:
          return b2gav['push']('<!--', b2leam['data'], '-->');case e2vbal:
          var um8pj = b2leam['publicId'],
              j8cx = b2leam['systemId'];if (b2gav['push']('<!DOCTYPE ', b2leam['name']), um8pj) b2gav['push'](' PUBLIC "', um8pj), j8cx && '.' != j8cx && b2gav['push']('\x22\x20\x22', j8cx), b2gav['push']('\x22>');else {
            if (j8cx && '.' != j8cx) b2gav['push'](' SYSTEM "', j8cx, '\x22>');else {
              var xjck48 = b2leam['internalSubset'];xjck48 && b2gav['push']('\x20[', xjck48, ']'), b2gav['push']('>');
            }
          }return;case d0zq:
          return b2gav['push']('<?', b2leam['target'], '\x20', b2leam['data'], '?>');case w5hts:
          return b2gav['push']('&', b2leam['nodeName'], ';');default:
          b2gav['push']('??', b2leam['nodeName']);}
    }function x5tkc_(eambp3, i$7n1w, jx4ck8) {
      eambp3[i$7n1w] = jx4ck8;
    }q06rnz['prototype'] = Error['prototype'], ebalm(zr16$, q06rnz), h9w7i$['prototype'] = { 'length': 0x0, 'item': function ($17rn6) {
        return this[$17rn6] || null;
      }, 'toString': function (bme2al, bpme2) {
        for (var dq0ozr = [], avgl2 = 0x0; avgl2 < this['length']; avgl2++) lvab2(this[avgl2], dq0ozr, bme2al, bpme2);return dq0ozr['join']('');
      } }, ws9['prototype']['item'] = function (_5kxt) {
      return i716$n(this), this[_5kxt];
    }, k3uj84(ws9, h9w7i$), uepm8['prototype'] = { 'length': 0x0, 'item': h9w7i$['prototype']['item'], 'getNamedItem': function (_c5kxt) {
        for (var amp3e = this['length']; amp3e--;) {
          var w$h79 = this[amp3e];if (w$h79['nodeName'] == _c5kxt) return w$h79;
        }
      }, 'setNamedItem': function (i9th) {
        var $i17wh = i9th['ownerElement'];if ($i17wh && $i17wh != this['_ownerElement']) throw new q06rnz(j_c4x);var k5xc_ = this['getNamedItem'](i9th['nodeName']);return vblg(this['_ownerElement'], this, i9th, k5xc_), k5xc_;
      }, 'setNamedItemNS': function (_cs59) {
        var cj8k,
            ebva = _cs59['ownerElement'];if (ebva && ebva != this['_ownerElement']) throw new q06rnz(j_c4x);return cj8k = this['getNamedItemNS'](_cs59['namespaceURI'], _cs59['localName']), vblg(this['_ownerElement'], this, _cs59, cj8k), cj8k;
      }, 'removeNamedItem': function (nz1r6) {
        var r16z0n = this['getNamedItem'](nz1r6);return zr06oq(this['_ownerElement'], this, r16z0n), r16z0n;
      }, 'removeNamedItemNS': function (t_sc5, j34) {
        var u8k43 = this['getNamedItemNS'](t_sc5, j34);return zr06oq(this['_ownerElement'], this, u8k43), u8k43;
      }, 'getNamedItemNS': function (dq0rz, bap2me) {
        for (var bmpa2 = this['length']; bmpa2--;) {
          var q0zody = this[bmpa2];if (q0zody['localName'] == bap2me && q0zody['namespaceURI'] == dq0rz) return q0zody;
        }return null;
      } }, x4j8ck['prototype'] = { 'hasFeature': function (a3eu, i7w9hs) {
        var iw17$h = this['_features'][a3eu['toLowerCase']()];return !(!iw17$h || i7w9hs && !(i7w9hs in iw17$h));
      }, 'createDocument': function (ebp2m, z0oqy, kxj84c) {
        var abv2lg = new $hw17();if (abv2lg['implementation'] = this, abv2lg['childNodes'] = new h9w7i$(), (abv2lg['doctype'] = kxj84c) && abv2lg['appendChild'](kxj84c), z0oqy) {
          var a2pemb = abv2lg['createElementNS'](ebp2m, z0oqy);abv2lg['appendChild'](a2pemb);
        }return abv2lg;
      }, 'createDocumentType': function (h_s5, zd0qro, ma2eb) {
        var jck_4 = new _sct5();return jck_4['name'] = h_s5, jck_4['nodeName'] = h_s5, jck_4['publicId'] = zd0qro, jck_4['systemId'] = ma2eb, jck_4;
      } }, _4k5cx['prototype'] = { 'firstChild': null, 'lastChild': null, 'previousSibling': null, 'nextSibling': null, 'attributes': null, 'parentNode': null, 'childNodes': null, 'ownerDocument': null, 'nodeValue': null, 'namespaceURI': null, 'prefix': null, 'localName': null, 'insertBefore': function (h1i$w, tsh5) {
        return tsw9hi(this, h1i$w, tsh5);
      }, 'replaceChild': function (qydzo0, jk34) {
        this['insertBefore'](qydzo0, jk34), jk34 && this['removeChild'](jk34);
      }, 'removeChild': function (s_ct59) {
        return $i71(this, s_ct59);
      }, 'appendChild': function (meap3b) {
        return this['insertBefore'](meap3b, null);
      }, 'hasChildNodes': function () {
        return null != this['firstChild'];
      }, 'cloneNode': function (pm8u3e) {
        return function m83pe(xt_5s, p2ambe, pju38) {
          var iwsht9 = new p2ambe['constructor']();for (var valg in p2ambe) {
            var s5_c9 = p2ambe[valg];'object' != $r1(s5_c9) && s5_c9 != iwsht9[valg] && (iwsht9[valg] = s5_c9);
          }p2ambe['childNodes'] && (iwsht9['childNodes'] = new h9w7i$()), iwsht9['ownerDocument'] = xt_5s;switch (iwsht9['nodeType']) {case c_5ktx:
              var iwst = p2ambe['attributes'],
                  x48kc = iwsht9['attributes'] = new uepm8(),
                  kx8u4j = iwst['length'];x48kc['_ownerElement'] = iwsht9;for (var $r176n = 0x0; $r176n < kx8u4j; $r176n++) iwsht9['setAttributeNode'](m83pe(xt_5s, iwst['item']($r176n), !0x0));break;case i1$h7:
              pju38 = !0x0;}if (pju38) {
            for (var kj8xc4 = p2ambe['firstChild']; kj8xc4;) iwsht9['appendChild'](m83pe(xt_5s, kj8xc4, pju38)), kj8xc4 = kj8xc4['nextSibling'];
          }return iwsht9;
        }(this['ownerDocument'] || this, this, pm8u3e);
      }, 'normalize': function () {
        for (var scx5_t = this['firstChild']; scx5_t;) {
          var ihw$7 = scx5_t['nextSibling'];ihw$7 && ihw$7['nodeType'] == ma2ebl && scx5_t['nodeType'] == ma2ebl ? (this['removeChild'](ihw$7), scx5_t['appendData'](ihw$7['data'])) : (scx5_t['normalize'](), scx5_t = ihw$7);
        }
      }, 'isSupported': function (gbv2la, o6qr0z) {
        return this['ownerDocument']['implementation']['hasFeature'](gbv2la, o6qr0z);
      }, 'hasAttributes': function () {
        return 0x0 < this['attributes']['length'];
      }, 'lookupPrefix': function (t5xcs) {
        for (var _jcxk4 = this; _jcxk4;) {
          var s97wih = _jcxk4['_nsMap'];if (s97wih) {
            for (var xt5k_c in s97wih) if (s97wih[xt5k_c] == t5xcs) return xt5k_c;
          }_jcxk4 = _jcxk4['nodeType'] == i1$h7 ? _jcxk4['ownerDocument'] : _jcxk4['parentNode'];
        }return null;
      }, 'lookupNamespaceURI': function (ct9s_) {
        for (var _th59 = this; _th59;) {
          var emlba2 = _th59['_nsMap'];if (emlba2 && ct9s_ in emlba2) return emlba2[ct9s_];_th59 = _th59['nodeType'] == i1$h7 ? _th59['ownerDocument'] : _th59['parentNode'];
        }return null;
      }, 'isDefaultNamespace': function (h79$w) {
        return null == this['lookupPrefix'](h79$w);
      } }, ebalm($16n7i, _4k5cx), ebalm($16n7i, _4k5cx['prototype']), $hw17['prototype'] = { 'nodeName': '#document', 'nodeType': cxs5t, 'doctype': null, 'documentElement': null, '_inc': 0x1, 'insertBefore': function (k3uj8, ckx4j) {
        if (k3uj8['nodeType'] != win71$) return null == this['documentElement'] && k3uj8['nodeType'] == c_5ktx && (this['documentElement'] = k3uj8), tsw9hi(this, k3uj8, ckx4j), k3uj8['ownerDocument'] = this, k3uj8;for (var cs5 = k3uj8['firstChild']; cs5;) {
          var n17$i6 = cs5['nextSibling'];this['insertBefore'](cs5, ckx4j), cs5 = n17$i6;
        }return k3uj8;
      }, 'removeChild': function (ts5_xc) {
        return this['documentElement'] == ts5_xc && (this['documentElement'] = null), $i71(this, ts5_xc);
      }, 'importNode': function (ts5x_c, j438) {
        return function l2abgv(p3ju4, ae2vlb, w17ni$) {
          var c4x5_;switch (ae2vlb['nodeType']) {case c_5ktx:
              (c4x5_ = ae2vlb['cloneNode'](!0x1))['ownerDocument'] = p3ju4;case win71$:
              break;case i1$h7:
              w17ni$ = !0x0;}c4x5_ = c4x5_ || ae2vlb['cloneNode'](!0x1), c4x5_['ownerDocument'] = p3ju4, c4x5_['parentNode'] = null;if (w17ni$) {
            for (var upm8 = ae2vlb['firstChild']; upm8;) c4x5_['appendChild'](l2abgv(p3ju4, upm8, w17ni$)), upm8 = upm8['nextSibling'];
          }return c4x5_;
        }(this, ts5x_c, j438);
      }, 'getElementById': function (beam3) {
        var kx_ct5 = null;return iwh(this['documentElement'], function (a3uem) {
          if (a3uem['nodeType'] == c_5ktx && a3uem['getAttribute']('id') == beam3) return kx_ct5 = a3uem, !0x0;
        }), kx_ct5;
      }, 'createElement': function (_h9t) {
        var c5_ts = new kj_4();return c5_ts['ownerDocument'] = this, c5_ts['nodeName'] = _h9t, c5_ts['tagName'] = _h9t, c5_ts['childNodes'] = new h9w7i$(), (c5_ts['attributes'] = new uepm8())['_ownerElement'] = c5_ts;
      }, 'createDocumentFragment': function () {
        var $7n6i1 = new labe();return $7n6i1['ownerDocument'] = this, $7n6i1['childNodes'] = new h9w7i$(), $7n6i1;
      }, 'createTextNode': function (ampbe) {
        var _5t9c = new ozdr();return _5t9c['ownerDocument'] = this, _5t9c['appendData'](ampbe), _5t9c;
      }, 'createComment': function (k_5xtc) {
        var j8p43 = new j4kx_();return j8p43['ownerDocument'] = this, j8p43['appendData'](k_5xtc), j8p43;
      }, 'createCDATASection': function (wt9h5) {
        var e2val = new p4ju();return e2val['ownerDocument'] = this, e2val['appendData'](wt9h5), e2val;
      }, 'createProcessingInstruction': function (muj8, wi$9h7) {
        var $67n = new vg2();return $67n['ownerDocument'] = this, $67n['tagName'] = $67n['target'] = muj8, $67n['nodeValue'] = $67n['data'] = wi$9h7, $67n;
      }, 'createAttribute': function ($76r1) {
        var n167i = new zd0qo();return n167i['ownerDocument'] = this, n167i['name'] = $76r1, n167i['nodeName'] = $76r1, n167i['localName'] = $76r1, n167i['specified'] = !0x0, n167i;
      }, 'createEntityReference': function (h7$w) {
        var l2gv = new bamep();return l2gv['ownerDocument'] = this, l2gv['nodeName'] = h7$w, l2gv;
      }, 'createElementNS': function (eapm2b, zr061n) {
        var t9hwis = new kj_4(),
            emba3p = zr061n['split'](':'),
            k834uj = t9hwis['attributes'] = new uepm8();return t9hwis['childNodes'] = new h9w7i$(), t9hwis['ownerDocument'] = this, t9hwis['nodeName'] = zr061n, t9hwis['tagName'] = zr061n, t9hwis['namespaceURI'] = eapm2b, 0x2 == emba3p['length'] ? (t9hwis['prefix'] = emba3p[0x0], t9hwis['localName'] = emba3p[0x1]) : t9hwis['localName'] = zr061n, k834uj['_ownerElement'] = t9hwis;
      }, 'createAttributeNS': function (lvbga, dozq0) {
        var tx_ck = new zd0qo(),
            x5_ckt = dozq0['split'](':');return tx_ck['ownerDocument'] = this, tx_ck['nodeName'] = dozq0, tx_ck['name'] = dozq0, tx_ck['namespaceURI'] = lvbga, tx_ck['specified'] = !0x0, 0x2 == x5_ckt['length'] ? (tx_ck['prefix'] = x5_ckt[0x0], tx_ck['localName'] = x5_ckt[0x1]) : tx_ck['localName'] = dozq0, tx_ck;
      } }, k3uj84($hw17, _4k5cx), $hw17['prototype']['getElementsByTagName'] = (kj_4['prototype'] = { 'nodeType': c_5ktx, 'hasAttribute': function (s_ht95) {
        return null != this['getAttributeNode'](s_ht95);
      }, 'getAttribute': function (c4kx) {
        var eum38 = this['getAttributeNode'](c4kx);return eum38 && eum38['value'] || '';
      }, 'getAttributeNode': function ($7ih9w) {
        return this['attributes']['getNamedItem']($7ih9w);
      }, 'setAttribute': function (n0rq, r6$) {
        var vl2e = this['ownerDocument']['createAttribute'](n0rq);vl2e['value'] = vl2e['nodeValue'] = '' + r6$, this['setAttributeNode'](vl2e);
      }, 'removeAttribute': function (zr1n0) {
        var hi71$w = this['getAttributeNode'](zr1n0);hi71$w && this['removeAttributeNode'](hi71$w);
      }, 'appendChild': function (jk438) {
        return jk438['nodeType'] === win71$ ? this['insertBefore'](jk438, null) : function (m3eupa, q0roz) {
          var zqod0 = q0roz['parentNode'];if (zqod0) {
            var s9iwh7 = m3eupa['lastChild'];zqod0['removeChild'](q0roz), s9iwh7 = m3eupa['lastChild'];
          }return s9iwh7 = m3eupa['lastChild'], q0roz['parentNode'] = m3eupa, q0roz['previousSibling'] = s9iwh7, q0roz['nextSibling'] = null, s9iwh7 ? s9iwh7['nextSibling'] = q0roz : m3eupa['firstChild'] = q0roz, m3eupa['lastChild'] = q0roz, j_4xk(m3eupa['ownerDocument'], m3eupa, q0roz), q0roz;
        }(this, jk438);
      }, 'setAttributeNode': function ($7i16) {
        return this['attributes']['setNamedItem']($7i16);
      }, 'setAttributeNodeNS': function (bval2g) {
        return this['attributes']['setNamedItemNS'](bval2g);
      }, 'removeAttributeNode': function (c5t9_s) {
        return this['attributes']['removeNamedItem'](c5t9_s['nodeName']);
      }, 'removeAttributeNS': function (up3, jx4k) {
        var e8p3 = this['getAttributeNodeNS'](up3, jx4k);e8p3 && this['removeAttributeNode'](e8p3);
      }, 'hasAttributeNS': function (lm2be, rqdoz0) {
        return null != this['getAttributeNodeNS'](lm2be, rqdoz0);
      }, 'getAttributeNS': function (n7$6r, mpeau3) {
        var i1$7 = this['getAttributeNodeNS'](n7$6r, mpeau3);return i1$7 && i1$7['value'] || '';
      }, 'setAttributeNS': function (abvel2, j83upm, n7$16r) {
        var kx54 = this['ownerDocument']['createAttributeNS'](abvel2, j83upm);kx54['value'] = kx54['nodeValue'] = '' + n7$16r, this['setAttributeNode'](kx54);
      }, 'getAttributeNodeNS': function (peabm3, ih97w) {
        return this['attributes']['getNamedItemNS'](peabm3, ih97w);
      }, 'getElementsByTagName': function (pm38j) {
        return new ws9(this, function (rqdz0) {
          var r60zoq = [];return iwh(rqdz0, function (a3pbe) {
            a3pbe === rqdz0 || a3pbe['nodeType'] != c_5ktx || '*' !== pm38j && a3pbe['tagName'] != pm38j || r60zoq['push'](a3pbe);
          }), r60zoq;
        });
      }, 'getElementsByTagNameNS': function ($n1rz6, $71hiw) {
        return new ws9(this, function (av2g) {
          var w71hi$ = [];return iwh(av2g, function (wtsh95) {
            wtsh95 === av2g || wtsh95['nodeType'] !== c_5ktx || '*' !== $n1rz6 && wtsh95['namespaceURI'] !== $n1rz6 || '*' !== $71hiw && wtsh95['localName'] != $71hiw || w71hi$['push'](wtsh95);
          }), w71hi$;
        });
      } })['getElementsByTagName'], $hw17['prototype']['getElementsByTagNameNS'] = kj_4['prototype']['getElementsByTagNameNS'], k3uj84(kj_4, _4k5cx), zd0qo['prototype']['nodeType'] = i1$h7, k3uj84(zd0qo, _4k5cx), qzdy0['prototype'] = { 'data': '', 'substringData': function (c5st9, jump) {
        return this['data']['substring'](c5st9, c5st9 + jump);
      }, 'appendData': function ($6ni17) {
        $6ni17 = this['data'] + $6ni17, this['nodeValue'] = this['data'] = $6ni17, this['length'] = $6ni17['length'];
      }, 'insertData': function (hiw97, w1$7) {
        this['replaceData'](hiw97, 0x0, w1$7);
      }, 'appendChild': function () {
        throw new Error(k8ux[eb2mpa]);
      }, 'deleteData': function (scx, stc59) {
        this['replaceData'](scx, stc59, '');
      }, 'replaceData': function (xckt5, doy0zq, jk4xc_) {
        jk4xc_ = this['data']['substring'](0x0, xckt5) + jk4xc_ + this['data']['substring'](xckt5 + doy0zq), this['nodeValue'] = this['data'] = jk4xc_, this['length'] = jk4xc_['length'];
      } }, k3uj84(qzdy0, _4k5cx), ozdr['prototype'] = { 'nodeName': '#text', 'nodeType': ma2ebl, 'splitText': function (ithws9) {
        var $1n6r7 = this['data'],
            pmuea = $1n6r7['substring'](ithws9);$1n6r7 = $1n6r7['substring'](0x0, ithws9), this['data'] = this['nodeValue'] = $1n6r7, this['length'] = $1n6r7['length'];var rz0qdo = this['ownerDocument']['createTextNode'](pmuea);return this['parentNode'] && this['parentNode']['insertBefore'](rz0qdo, this['nextSibling']), rz0qdo;
      } }, k3uj84(ozdr, qzdy0), j4kx_['prototype'] = { 'nodeName': '#comment', 'nodeType': r0z61 }, k3uj84(j4kx_, qzdy0), p4ju['prototype'] = { 'nodeName': '#cdata-section', 'nodeType': q06o }, k3uj84(p4ju, qzdy0), _sct5['prototype']['nodeType'] = e2vbal, k3uj84(_sct5, _4k5cx), n0z6r1['prototype']['nodeType'] = $67r1n, k3uj84(n0z6r1, _4k5cx), jck48x['prototype']['nodeType'] = t9_5sh, k3uj84(jck48x, _4k5cx), bamep['prototype']['nodeType'] = w5hts, k3uj84(bamep, _4k5cx), labe['prototype']['nodeName'] = '#document-fragment', labe['prototype']['nodeType'] = win71$, k3uj84(labe, _4k5cx), vg2['prototype']['nodeType'] = d0zq, k3uj84(vg2, _4k5cx), cs5_t['prototype']['serializeToString'] = function (t9sc5, vaeb2, el2ab) {
      return _xj['call'](t9sc5, vaeb2, el2ab);
    }, _4k5cx['prototype']['toString'] = _xj;try {
      Object['defineProperty'] && (Object['defineProperty'](ws9['prototype'], 'length', { 'get': function () {
          return i716$n(this), this['$$length'];
        } }), Object['defineProperty'](_4k5cx['prototype'], 'textContent', { 'get': function () {
          return function vabe2l(w7ni$) {
            switch (w7ni$['nodeType']) {case c_5ktx:case win71$:
                var x5kt = [];for (w7ni$ = w7ni$['firstChild']; w7ni$;) 0x7 !== w7ni$['nodeType'] && 0x8 !== w7ni$['nodeType'] && x5kt['push'](vabe2l(w7ni$)), w7ni$ = w7ni$['nextSibling'];return x5kt['join']('');default:
                return w7ni$['nodeValue'];}
          }(this);
        }, 'set': function (rn67) {
          switch (this['nodeType']) {case c_5ktx:case win71$:
              for (; this['firstChild'];) this['removeChild'](this['firstChild']);(rn67 || String(rn67)) && this['appendChild'](this['ownerDocument']['createTextNode'](rn67));break;default:
              this['data'] = rn67, this['value'] = rn67, this['nodeValue'] = rn67;}
        } }), x5tkc_ = function (a2lbm, wi9h7, x_t5s) {
        a2lbm['$$' + wi9h7] = x_t5s;
      });
    } catch (si97hw) {}i$w1h['DOMImplementation'] = x4j8ck, i$w1h['XMLSerializer'] = cs5_t;
  }, {}], 0x15: [function (n1rz$, h95swt, cx5t_s) {
    'use strict';

    cx5t_s['entityMap'] = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27', 'Agrave': 'À', 'Aacute': 'Á', 'Acirc': 'Â', 'Atilde': 'Ã', 'Auml': 'Ä', 'Aring': 'Å', 'AElig': 'Æ', 'Ccedil': 'Ç', 'Egrave': 'È', 'Eacute': 'É', 'Ecirc': 'Ê', 'Euml': 'Ë', 'Igrave': 'Ì', 'Iacute': 'Í', 'Icirc': 'Î', 'Iuml': 'Ï', 'ETH': 'Ð', 'Ntilde': 'Ñ', 'Ograve': 'Ò', 'Oacute': 'Ó', 'Ocirc': 'Ô', 'Otilde': 'Õ', 'Ouml': 'Ö', 'Oslash': 'Ø', 'Ugrave': 'Ù', 'Uacute': 'Ú', 'Ucirc': 'Û', 'Uuml': 'Ü', 'Yacute': 'Ý', 'THORN': 'Þ', 'szlig': 'ß', 'agrave': 'à', 'aacute': 'á', 'acirc': 'â', 'atilde': 'ã', 'auml': 'ä', 'aring': 'å', 'aelig': 'æ', 'ccedil': 'ç', 'egrave': 'è', 'eacute': 'é', 'ecirc': 'ê', 'euml': 'ë', 'igrave': 'ì', 'iacute': 'í', 'icirc': 'î', 'iuml': 'ï', 'eth': 'ð', 'ntilde': 'ñ', 'ograve': 'ò', 'oacute': 'ó', 'ocirc': 'ô', 'otilde': 'õ', 'ouml': 'ö', 'oslash': 'ø', 'ugrave': 'ù', 'uacute': 'ú', 'ucirc': 'û', 'uuml': 'ü', 'yacute': 'ý', 'thorn': 'þ', 'yuml': 'ÿ', 'nbsp': '\x20', 'iexcl': '¡', 'cent': '¢', 'pound': '£', 'curren': '¤', 'yen': '¥', 'brvbar': '¦', 'sect': '§', 'uml': '¨', 'copy': '©', 'ordf': 'ª', 'laquo': '«', 'not': '¬', 'shy': '­­', 'reg': '®', 'macr': '¯', 'deg': '°', 'plusmn': '±', 'sup2': '²', 'sup3': '³', 'acute': '´', 'micro': 'µ', 'para': '¶', 'middot': '·', 'cedil': '¸', 'sup1': '¹', 'ordm': 'º', 'raquo': '»', 'frac14': '¼', 'frac12': '½', 'frac34': '¾', 'iquest': '¿', 'times': '×', 'divide': '÷', 'forall': '∀', 'part': '∂', 'exist': '∃', 'empty': '∅', 'nabla': '∇', 'isin': '∈', 'notin': '∉', 'ni': '∋', 'prod': '∏', 'sum': '∑', 'minus': '−', 'lowast': '∗', 'radic': '√', 'prop': '∝', 'infin': '∞', 'ang': '∠', 'and': '∧', 'or': '∨', 'cap': '∩', 'cup': '∪', 'int': '∫', 'there4': '∴', 'sim': '∼', 'cong': '≅', 'asymp': '≈', 'ne': '≠', 'equiv': '≡', 'le': '≤', 'ge': '≥', 'sub': '⊂', 'sup': '⊃', 'nsub': '⊄', 'sube': '⊆', 'supe': '⊇', 'oplus': '⊕', 'otimes': '⊗', 'perp': '⊥', 'sdot': '⋅', 'Alpha': 'Α', 'Beta': 'Β', 'Gamma': 'Γ', 'Delta': 'Δ', 'Epsilon': 'Ε', 'Zeta': 'Ζ', 'Eta': 'Η', 'Theta': 'Θ', 'Iota': 'Ι', 'Kappa': 'Κ', 'Lambda': 'Λ', 'Mu': 'Μ', 'Nu': 'Ν', 'Xi': 'Ξ', 'Omicron': 'Ο', 'Pi': 'Π', 'Rho': 'Ρ', 'Sigma': 'Σ', 'Tau': 'Τ', 'Upsilon': 'Υ', 'Phi': 'Φ', 'Chi': 'Χ', 'Psi': 'Ψ', 'Omega': 'Ω', 'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'epsilon': 'ε', 'zeta': 'ζ', 'eta': 'η', 'theta': 'θ', 'iota': 'ι', 'kappa': 'κ', 'lambda': 'λ', 'mu': 'μ', 'nu': 'ν', 'xi': 'ξ', 'omicron': 'ο', 'pi': 'π', 'rho': 'ρ', 'sigmaf': 'ς', 'sigma': 'σ', 'tau': 'τ', 'upsilon': 'υ', 'phi': 'φ', 'chi': 'χ', 'psi': 'ψ', 'omega': 'ω', 'thetasym': 'ϑ', 'upsih': 'ϒ', 'piv': 'ϖ', 'OElig': 'Œ', 'oelig': 'œ', 'Scaron': 'Š', 'scaron': 'š', 'Yuml': 'Ÿ', 'fnof': 'ƒ', 'circ': 'ˆ', 'tilde': '˜', 'ensp': '\u2002', 'emsp': '\u2003', 'thinsp': '\u2009', 'zwnj': '‌', 'zwj': '‍', 'lrm': '‎', 'rlm': '‏', 'ndash': '–', 'mdash': '—', 'lsquo': '‘', 'rsquo': '’', 'sbquo': '‚', 'ldquo': '“', 'rdquo': '”', 'bdquo': '„', 'dagger': '†', 'Dagger': '‡', 'bull': '•', 'hellip': '…', 'permil': '‰', 'prime': '′', 'Prime': '″', 'lsaquo': '‹', 'rsaquo': '›', 'oline': '‾', 'euro': '€', 'trade': '™', 'larr': '←', 'uarr': '↑', 'rarr': '→', 'darr': '↓', 'harr': '↔', 'crarr': '↵', 'lceil': '⌈', 'rceil': '⌉', 'lfloor': '⌊', 'rfloor': '⌋', 'loz': '◊', 'spades': '♠', 'clubs': '♣', 'hearts': '♥', 'diams': '♦' };
  }, {}], 0x16: [function (r$61z, jup83m, q6r0o) {
    'use strict';

    var j_ck4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        cx5tk_ = new RegExp('[\\-\\.0-9' + j_ck4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
        p38um = new RegExp('^' + j_ck4['source'] + cx5tk_['source'] + '*(?::' + j_ck4['source'] + cx5tk_['source'] + '*)?$'),
        r6$n1z = 0x0,
        e8u3mp = 0x1,
        hwi7 = 0x2,
        lm2eb = 0x3,
        h7w9is = 0x4,
        w7is9h = 0x5,
        c4k_ = 0x6,
        st5h9w = 0x7;function _ctkx5() {}function _s9tc(leva, upjm8) {
      return upjm8['lineNumber'] = leva['lineNumber'], upjm8['columnNumber'] = leva['columnNumber'], upjm8;
    }function s9t5h(bmae3, u48pj3, o0rdzq, tc59_, jkux, tkcx5) {
      for (var $i1wh7, h_t5 = ++u48pj3, qzd0y = r6$n1z;;) {
        var bea3m = bmae3['charAt'](h_t5);switch (bea3m) {case '=':
            if (qzd0y === e8u3mp) $i1wh7 = bmae3['slice'](u48pj3, h_t5), qzd0y = lm2eb;else {
              if (qzd0y !== hwi7) throw new Error('attribute equal must after attrName');qzd0y = lm2eb;
            }break;case '\x27':case '\x22':
            if (qzd0y === lm2eb || qzd0y === e8u3mp) {
              if (qzd0y === e8u3mp && (tkcx5['warning']('attribute value must after "="'), $i1wh7 = bmae3['slice'](u48pj3, h_t5)), u48pj3 = h_t5 + 0x1, !(0x0 < (h_t5 = bmae3['indexOf'](bea3m, u48pj3)))) throw new Error('attribute value no end \'' + bea3m + '\' match');roq0z6 = bmae3['slice'](u48pj3, h_t5)['replace'](/&#?\w+;/g, jkux), o0rdzq['add']($i1wh7, roq0z6, u48pj3 - 0x1), qzd0y = w7is9h;
            } else {
              if (qzd0y != h7w9is) throw new Error('attribute value must after "="');roq0z6 = bmae3['slice'](u48pj3, h_t5)['replace'](/&#?\w+;/g, jkux), o0rdzq['add']($i1wh7, roq0z6, u48pj3), tkcx5['warning']('attribute "' + $i1wh7 + '" missed start quot(' + bea3m + ')!!'), u48pj3 = h_t5 + 0x1, qzd0y = w7is9h;
            }break;case '/':
            switch (qzd0y) {case r6$n1z:
                o0rdzq['setTagName'](bmae3['slice'](u48pj3, h_t5));case w7is9h:case c4k_:case st5h9w:
                qzd0y = st5h9w, o0rdzq['closed'] = !0x0;case h7w9is:case e8u3mp:case hwi7:
                break;default:
                throw new Error('attribute invalid close char(\'/\')');}break;case '':
            return tkcx5['error']('unexpected end of input'), qzd0y == r6$n1z && o0rdzq['setTagName'](bmae3['slice'](u48pj3, h_t5)), h_t5;case '>':
            switch (qzd0y) {case r6$n1z:
                o0rdzq['setTagName'](bmae3['slice'](u48pj3, h_t5));case w7is9h:case c4k_:case st5h9w:
                break;case h7w9is:case e8u3mp:
                '/' === (roq0z6 = bmae3['slice'](u48pj3, h_t5))['slice'](-0x1) && (o0rdzq['closed'] = !0x0, roq0z6 = roq0z6['slice'](0x0, -0x1));case hwi7:
                qzd0y === hwi7 && (roq0z6 = $i1wh7), qzd0y == h7w9is ? (tkcx5['warning']('attribute "' + roq0z6 + '" missed quot(")!!'), o0rdzq['add']($i1wh7, roq0z6['replace'](/&#?\w+;/g, jkux), u48pj3)) : ('http://www.w3.org/1999/xhtml' === tc59_[''] && roq0z6['match'](/^(?:disabled|checked|selected)$/i) || tkcx5['warning']('attribute "' + roq0z6 + '" missed value!! "' + roq0z6 + '" instead!!'), o0rdzq['add'](roq0z6, roq0z6, u48pj3));break;case lm2eb:
                throw new Error('attribute value missed!!');}return h_t5;case '\u0080':
            bea3m = '\x20';default:
            if (bea3m <= '\x20') switch (qzd0y) {case r6$n1z:
                o0rdzq['setTagName'](bmae3['slice'](u48pj3, h_t5)), qzd0y = c4k_;break;case e8u3mp:
                $i1wh7 = bmae3['slice'](u48pj3, h_t5), qzd0y = hwi7;break;case h7w9is:
                var roq0z6 = bmae3['slice'](u48pj3, h_t5)['replace'](/&#?\w+;/g, jkux);tkcx5['warning']('attribute "' + roq0z6 + '" missed quot(")!!'), o0rdzq['add']($i1wh7, roq0z6, u48pj3);case w7is9h:
                qzd0y = c4k_;} else switch (qzd0y) {case hwi7:
                o0rdzq['tagName'], ('http://www.w3.org/1999/xhtml' === tc59_[''] && $i1wh7['match'](/^(?:disabled|checked|selected)$/i) || tkcx5['warning']('attribute "' + $i1wh7 + '" missed value!! "' + $i1wh7 + '" instead2!!'), o0rdzq['add']($i1wh7, $i1wh7, u48pj3), u48pj3 = h_t5, qzd0y = e8u3mp);break;case w7is9h:
                tkcx5['warning']('attribute space is required"' + $i1wh7 + '\x22!!');case c4k_:
                qzd0y = e8u3mp, u48pj3 = h_t5;break;case lm2eb:
                qzd0y = h7w9is, u48pj3 = h_t5;break;case st5h9w:
                throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h_t5++;
      }
    }function s5c9_t(e3mab, e3mabp, d0rozq) {
      for (var up8jm3 = e3mab['tagName'], xct_s = null, o6qrz0 = e3mab['length']; o6qrz0--;) {
        var _c54x = e3mab[o6qrz0],
            bpea2m = _c54x['qName'],
            u8xj = _c54x['value'];if (0x0 < (d0y = bpea2m['indexOf'](':'))) var z0odr = _c54x['prefix'] = bpea2m['slice'](0x0, d0y),
            dro0qz = bpea2m['slice'](d0y + 0x1),
            rn1$ = 'xmlns' === z0odr && dro0qz;else z0odr = null, rn1$ = 'xmlns' === (dro0qz = bpea2m) && '';_c54x['localName'] = dro0qz, !0x1 !== rn1$ && (null == xct_s && (xct_s = {}, pmabe2(d0rozq, d0rozq = {})), d0rozq[rn1$] = xct_s[rn1$] = u8xj, _c54x['uri'] = 'http://www.w3.org/2000/xmlns/', e3mabp['startPrefixMapping'](rn1$, u8xj));
      }for (o6qrz0 = e3mab['length']; o6qrz0--;) {
        (z0odr = (_c54x = e3mab[o6qrz0])['prefix']) && ('xml' === z0odr && (_c54x['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== z0odr && (_c54x['uri'] = d0rozq[z0odr || '']));
      }var d0y;dro0qz = 0x0 < (d0y = up8jm3['indexOf'](':')) ? (z0odr = e3mab['prefix'] = up8jm3['slice'](0x0, d0y), e3mab['localName'] = up8jm3['slice'](d0y + 0x1)) : (z0odr = null, e3mab['localName'] = up8jm3);var va2gl = e3mab['uri'] = d0rozq[z0odr || ''];if (e3mabp['startElement'](va2gl, dro0qz, up8jm3, e3mab), !e3mab['closed']) return e3mab['currentNSMap'] = d0rozq, e3mab['localNSMap'] = xct_s, 0x1;if (e3mabp['endElement'](va2gl, dro0qz, up8jm3), xct_s) {
        for (z0odr in xct_s) e3mabp['endPrefixMapping'](z0odr);
      }
    }function j8u4k3(wi7n$, i$h71, cxs5, sh5_, qoy0zd) {
      if (/^(?:script|textarea)$/i['test'](cxs5)) {
        var a2mpbe = wi7n$['indexOf']('</' + cxs5 + '>', i$h71),
            z016nr = wi7n$['substring'](i$h71 + 0x1, a2mpbe);if (/[&<]/['test'](z016nr)) return (/^script$/i['test'](cxs5) || (z016nr = z016nr['replace'](/&#?\w+;/g, sh5_)), qoy0zd['characters'](z016nr, 0x0, z016nr['length']), a2mpbe
        );
      }return i$h71 + 0x1;
    }function r76n1$(ihw$17, ckx8j, sh95wt, k4xcj8) {
      var h9wits = k4xcj8[sh95wt];return null == h9wits && ((h9wits = ihw$17['lastIndexOf']('</' + sh95wt + '>')) < ckx8j && (h9wits = ihw$17['lastIndexOf']('</' + sh95wt)), k4xcj8[sh95wt] = h9wits), h9wits < ckx8j;
    }function pmabe2(k4u83, up8j3) {
      for (var x4k_ in k4u83) up8j3[x4k_] = k4u83[x4k_];
    }function yzq0o(h95sw, hswi97, v2blg, e2apmb) {
      switch (h95sw['charAt'](hswi97 + 0x2)) {case '-':
          return '-' !== h95sw['charAt'](hswi97 + 0x3) ? -0x1 : hswi97 < (lmb2a = h95sw['indexOf']('-->', hswi97 + 0x4)) ? (v2blg['comment'](h95sw, hswi97 + 0x4, lmb2a - hswi97 - 0x4), lmb2a + 0x3) : (e2apmb['error']('Unclosed comment'), -0x1);default:
          if ('CDATA[' == h95sw['substr'](hswi97 + 0x3, 0x6)) {
            var lmb2a = h95sw['indexOf'](']]>', hswi97 + 0x9);return v2blg['startCDATA'](), v2blg['characters'](h95sw, hswi97 + 0x9, lmb2a - hswi97 - 0x9), v2blg['endCDATA'](), lmb2a + 0x3;
          }var r0zq = function ($zrn16, d0zrqo) {
            var u843jp,
                b2eav = [],
                $n1w7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;$n1w7['lastIndex'] = d0zrqo, $n1w7['exec']($zrn16);for (; u843jp = $n1w7['exec']($zrn16);) if (b2eav['push'](u843jp), u843jp[0x1]) return b2eav;
          }(h95sw, hswi97),
              _sxc5t = r0zq['length'];if (0x1 < _sxc5t && /!doctype/i['test'](r0zq[0x0][0x0])) {
            var s_5h9 = r0zq[0x1][0x0],
                xt5_sc = 0x3 < _sxc5t && /^public$/i['test'](r0zq[0x2][0x0]) && r0zq[0x3][0x0],
                c_xkt = 0x4 < _sxc5t && r0zq[0x4][0x0],
                mal2be = r0zq[_sxc5t - 0x1];return v2blg['startDTD'](s_5h9, xt5_sc && xt5_sc['replace'](/^(['"])(.*?)\1$/, '$2'), c_xkt && c_xkt['replace'](/^(['"])(.*?)\1$/, '$2')), v2blg['endDTD'](), mal2be['index'] + mal2be[0x0]['length'];
          }}return -0x1;
    }function dzoq(kc5x_4, $1nz6r, baep3m) {
      var cxt_ = kc5x_4['indexOf']('?>', $1nz6r);if (cxt_) {
        var x_stc = kc5x_4['substring']($1nz6r, cxt_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (x_stc) return x_stc[0x0]['length'], (baep3m['processingInstruction'](x_stc[0x1], x_stc[0x2]), cxt_ + 0x2);return -0x1;
      }return -0x1;
    }function xj4_c(p483u) {}_ctkx5['prototype'] = { 'parse': function (shw9i, t59hs, z6n1r0) {
        var $61n7i = this['domBuilder'];$61n7i['startDocument'](), pmabe2(t59hs, t59hs = {}), function (sith9, oqzr, $i7wh9, i9w7, k4_xc) {
          function c_ts5x(kcjx_4) {
            var ueapm = kcjx_4['slice'](0x1, -0x1);return ueapm in $i7wh9 ? $i7wh9[ueapm] : '#' === ueapm['charAt'](0x0) ? function (hw7si9) {
              if (0xffff < hw7si9) {
                var rz016 = 0xd800 + ((hw7si9 -= 0x10000) >> 0xa),
                    kujx4 = 0xdc00 + (0x3ff & hw7si9);return String['fromCharCode'](rz016, kujx4);
              }return String['fromCharCode'](hw7si9);
            }(parseInt(ueapm['substr'](0x1)['replace']('x', '0x'))) : (k4_xc['error']('entity not found:' + kcjx_4), kcjx_4);
          }function ameb3($1wh) {
            if (zr6qn0 < $1wh) {
              var $rzn1 = sith9['substring'](zr6qn0, $1wh)['replace'](/&#?\w+;/g, c_ts5x);$1nr76 && ampe2(zr6qn0), i9w7['characters']($rzn1, 0x0, $1wh - zr6qn0), zr6qn0 = $1wh;
            }
          }function ampe2(rdzqo0, h9twis) {
            for (; w$i1h7 <= rdzqo0 && (h9twis = c4xj8['exec'](sith9));) iwh$79 = h9twis['index'], w$i1h7 = iwh$79 + h9twis[0x0]['length'], $1nr76['lineNumber']++;$1nr76['columnNumber'] = rdzqo0 - iwh$79 + 0x1;
          }var iwh$79 = 0x0,
              w$i1h7 = 0x0,
              c4xj8 = /.*(?:\r\n?|\n)|.*$/g,
              $1nr76 = i9w7['locator'],
              mpeu3 = [{ 'currentNSMap': oqzr }],
              _5tsx = {},
              zr6qn0 = 0x0;for (;;) {
            try {
              var x_kc4 = sith9['indexOf']('<', zr6qn0);if (x_kc4 < 0x0) {
                if (!sith9['substr'](zr6qn0)['match'](/^\s*$/)) {
                  var $i9w = i9w7['doc'],
                      t9cs5 = $i9w['createTextNode'](sith9['substr'](zr6qn0));$i9w['appendChild'](t9cs5), i9w7['currentElement'] = t9cs5;
                }return;
              }switch (zr6qn0 < x_kc4 && ameb3(x_kc4), sith9['charAt'](x_kc4 + 0x1)) {case '/':
                  var kj4_x = sith9['indexOf']('>', x_kc4 + 0x3),
                      u43j8p = sith9['substring'](x_kc4 + 0x2, kj4_x),
                      w71h$ = mpeu3['pop']();kj4_x < 0x0 ? (u43j8p = sith9['substring'](x_kc4 + 0x2)['replace'](/[\s<].*/, ''), k4_xc['error']('end tag name: ' + u43j8p + ' is not complete:' + w71h$['tagName']), kj4_x = x_kc4 + 0x1 + u43j8p['length']) : u43j8p['match'](/\s</) && (u43j8p = u43j8p['replace'](/[\s<].*/, ''), k4_xc['error']('end tag name: ' + u43j8p + ' maybe not complete'), kj4_x = x_kc4 + 0x1 + u43j8p['length']);var leab2m = w71h$['localNSMap'],
                      hs95_ = w71h$['tagName'] == u43j8p;if (hs95_ || w71h$['tagName'] && w71h$['tagName']['toLowerCase']() == u43j8p['toLowerCase']()) {
                    if (i9w7['endElement'](w71h$['uri'], w71h$['localName'], u43j8p), leab2m) {
                      for (var in$17w in leab2m) i9w7['endPrefixMapping'](in$17w);
                    }hs95_ || k4_xc['fatalError']('end tag name: ' + u43j8p + ' is not match the current start tagName:' + w71h$['tagName']);
                  } else mpeu3['push'](w71h$);kj4_x++;break;case '?':
                  $1nr76 && ampe2(x_kc4), kj4_x = dzoq(sith9, x_kc4, i9w7);break;case '!':
                  $1nr76 && ampe2(x_kc4), kj4_x = yzq0o(sith9, x_kc4, i9w7, k4_xc);break;default:
                  $1nr76 && ampe2(x_kc4);var zr0dq = new xj4_c(),
                      hs59 = mpeu3[mpeu3['length'] - 0x1]['currentNSMap'],
                      be2aml = (kj4_x = s9t5h(sith9, x_kc4, zr0dq, hs59, c_ts5x, k4_xc), zr0dq['length']);if (!zr0dq['closed'] && r76n1$(sith9, kj4_x, zr0dq['tagName'], _5tsx) && (zr0dq['closed'] = !0x0, $i7wh9['nbsp'] || k4_xc['warning']('unclosed xml attribute')), $1nr76 && be2aml) {
                    for (var b3p = _s9tc($1nr76, {}), j38 = 0x0; j38 < be2aml; j38++) {
                      var _kxj = zr0dq[j38];ampe2(_kxj['offset']), _kxj['locator'] = _s9tc($1nr76, {});
                    }i9w7['locator'] = b3p, s5c9_t(zr0dq, i9w7, hs59) && mpeu3['push'](zr0dq), i9w7['locator'] = $1nr76;
                  } else s5c9_t(zr0dq, i9w7, hs59) && mpeu3['push'](zr0dq);'http://www.w3.org/1999/xhtml' !== zr0dq['uri'] || zr0dq['closed'] ? kj4_x++ : kj4_x = j8u4k3(sith9, kj4_x, zr0dq['tagName'], c_ts5x, i9w7);}
            } catch (od0zy) {
              k4_xc['error']('element parse error: ' + od0zy), kj4_x = -0x1;
            }zr6qn0 < kj4_x ? zr6qn0 = kj4_x : ameb3(Math['max'](x_kc4, zr6qn0) + 0x1);
          }
        }(shw9i, t59hs, z6n1r0, $61n7i, this['errorHandler']), $61n7i['endDocument']();
      } }, xj4_c['prototype'] = { 'setTagName': function (xckt5_) {
        if (!p38um['test'](xckt5_)) throw new Error('invalid tagName:' + xckt5_);this['tagName'] = xckt5_;
      }, 'add': function (whti9, glv2a, u3k4j8) {
        if (!p38um['test'](whti9)) throw new Error('invalid attribute:' + whti9);this[this['length']++] = { 'qName': whti9, 'value': glv2a, 'offset': u3k4j8 };
      }, 'length': 0x0, 'getLocalName': function (ihst) {
        return this[ihst]['localName'];
      }, 'getLocator': function (xst5_c) {
        return this[xst5_c]['locator'];
      }, 'getQName': function (map3) {
        return this[map3]['qName'];
      }, 'getURI': function (ws5ht9) {
        return this[ws5ht9]['uri'];
      }, 'getValue': function (e2map) {
        return this[e2map]['value'];
      } }, q6r0o['XMLReader'] = _ctkx5;
  }, {}], 0x17: [function (oz6q, up3em8, vbl2ga) {
    'use strict';

    var ga2bvl = GameGlobal,
        i7n$w1 = ga2bvl['__globalAdapter'] = {};Object['assign'](i7n$w1, { 'init': function () {
        oz6q('./wrapper/builtin'), ga2bvl['DOMParser'] = oz6q('../../common/xmldoundefined-parser')['DOMParser'], oz6q('./wrapper/unify'), oz6q('./wrapper/fs-utils'), oz6q('../../common/remote-downloader'), oz6q('../../common/engine/globalAdapter'), oz6q('./wrapper/systemInfo');
      }, 'adaptEngine': function () {
        oz6q('../../common/engine'), oz6q('./wrapper/engine'), oz6q('./wrapper/sub-context-adapter');
      } });
  }, { '../../common/engine': 0xf, '../../common/engine/globalAdapter': 0xe, '../../common/remote-downloader': 0x11, '../../common/xmldoundefined-parser': 0x13, './wrapper/builtin': 0x2e, './wrapper/engine': 0x35, './wrapper/fs-utils': 0x37, './wrapper/sub-context-adapter': 0x1, './wrapper/systemInfo': 0x38, './wrapper/unify': 0x39 }], 0x18: [function (k84jxc, $h7w9i, xkj_c) {
    'use strict';

    Object['defineProperty'](xkj_c, '__esModule', { 'value': !0x0 }), xkj_c['default'] = void 0x0;var $wih17,
        m3peab = ($wih17 = k84jxc('./HTMLAudioElement')) && $wih17['__esModule'] ? $wih17 : { 'default': $wih17 };function i1w$n7(ishw9t) {
      return (i1w$n7 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (j483) {
        return typeof j483;
      } : function (pu8em) {
        return pu8em && 'function' == typeof Symbol && pu8em['constructor'] === Symbol && pu8em !== Symbol['prototype'] ? 'symbol' : typeof pu8em;
      })(ishw9t);
    }function c59t_(b3maep, v2blga) {
      for (var sih9w = 0x0; sih9w < v2blga['length']; sih9w++) {
        var win7$1 = v2blga[sih9w];win7$1['enumerable'] = win7$1['enumerable'] || !0x1, win7$1['configurable'] = !0x0, 'value' in win7$1 && (win7$1['writable'] = !0x0), Object['defineProperty'](b3maep, win7$1['key'], win7$1);
      }
    }function xtsc5_(r6q0, s_c5t9, x5kc_) {
      return (xtsc5_ = 'undefined' != typeof Reflect && Reflect['get'] ? Reflect['get'] : function (b2v, uj3mp8, _cj4) {
        var j48ku3 = function (m3u8jp, le2abv) {
          for (; !Object['prototype']['hasOwnProperty']['call'](m3u8jp, le2abv) && null !== (m3u8jp = upem83(m3u8jp)););return m3u8jp;
        }(b2v, uj3mp8);if (j48ku3) {
          var _c5s9 = Object['getOwnPropertyDescriptor'](j48ku3, uj3mp8);return _c5s9['get'] ? _c5s9['get']['call'](_cj4) : _c5s9['value'];
        }
      })(r6q0, s_c5t9, x5kc_ || r6q0);
    }function ht9wis($79hw) {
      return function () {
        var w59sht,
            xc_4jk,
            xkt5_c,
            h9i7 = upem83($79hw);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (xu84kj) {
            return;
          }
        }()) {
          var k4j_xc = upem83(this)['constructor'];w59sht = Reflect['construct'](h9i7, arguments, k4j_xc);
        } else w59sht = h9i7['apply'](this, arguments);return xc_4jk = this, !(xkt5_c = w59sht) || 'object' !== i1w$n7(xkt5_c) && 'function' != typeof xkt5_c ? function (h9$7i) {
          if (void 0x0 !== h9$7i) return h9$7i;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(xc_4jk) : xkt5_c;
      };
    }function upem83(n17w$i) {
      return (upem83 = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (ape2b) {
        return ape2b['__proto__'] || Object['getPrototypeOf'](ape2b);
      })(n17w$i);
    }function nr7$6(t9c_5, k83) {
      return (nr7$6 = Object['setPrototypeOf'] || function (dyzoq, $i9hw7) {
        return dyzoq['__proto__'] = $i9hw7, dyzoq;
      })(t9c_5, k83);
    }var mu8e3p = 0x1,
        znrq60 = {},
        n67r1$ = function () {
      !function (pae3um, tc_5k) {
        if ('function' != typeof tc_5k && null !== tc_5k) throw new TypeError('Super expression must either be null or a function');pae3um['prototype'] = Object['create'](tc_5k && tc_5k['prototype'], { 'constructor': { 'value': pae3um, 'writable': !0x0, 'configurable': !0x0 } }), tc_5k && nr7$6(pae3um, tc_5k);
      }(n$i1, m3peab['default']);var oqzyd,
          xct_5k,
          w$71h,
          wsh79 = ht9wis(n$i1);function n$i1(zr60nq) {
        var z0r1;!function (mae2bp, x84jku) {
          if (!(mae2bp instanceof x84jku)) throw new TypeError('Cannot call a class as a function');
        }(this, n$i1), (z0r1 = wsh79['call'](this))['_$sn'] = mu8e3p++, z0r1['HAVE_NOTHING'] = 0x0, z0r1['HAVE_METADATA'] = 0x1, z0r1['HAVE_CURRENT_DATA'] = 0x2, z0r1['HAVE_FUTURE_DATA'] = 0x3, z0r1['HAVE_ENOUGH_DATA'] = 0x4, z0r1['readyState'] = 0x0;var t_c5xs = wx['createInnerAudioContext']();return znrq60[z0r1['_$sn']] = t_c5xs, z0r1['_canplayEvents'] = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'], t_c5xs['onCanplay'](function () {
          z0r1['_loaded'] = !0x0, z0r1['readyState'] = z0r1['HAVE_CURRENT_DATA'], z0r1['_canplayEvents']['forEach'](function (rqdzo0) {
            z0r1['dispatchEvent']({ 'type': rqdzo0 });
          });
        }), t_c5xs['onPlay'](function () {
          z0r1['_paused'] = znrq60[z0r1['_$sn']]['paused'], z0r1['dispatchEvent']({ 'type': 'play' });
        }), t_c5xs['onPause'](function () {
          z0r1['_paused'] = znrq60[z0r1['_$sn']]['paused'], z0r1['dispatchEvent']({ 'type': 'pause' });
        }), t_c5xs['onEnded'](function () {
          z0r1['_paused'] = znrq60[z0r1['_$sn']]['paused'], !0x1 === znrq60[z0r1['_$sn']]['loop'] && z0r1['dispatchEvent']({ 'type': 'ended' }), z0r1['readyState'] = 0x4;
        }), t_c5xs['onError'](function () {
          z0r1['_paused'] = znrq60[z0r1['_$sn']]['paused'], z0r1['dispatchEvent']({ 'type': 'error' });
        }), zr60nq ? z0r1['src'] = zr60nq : z0r1['_src'] = '', z0r1['_loop'] = t_c5xs['loop'], z0r1['_autoplay'] = t_c5xs['autoplay'], z0r1['_paused'] = t_c5xs['paused'], z0r1['_volume'] = t_c5xs['volume'], z0r1['_muted'] = !0x1, z0r1;
      }return oqzyd = n$i1, (xct_5k = [{ 'key': 'addEventListener', 'value': function (kc4_5x, pme3, jp34u8) {
          var s_95ht = 0x2 < arguments['length'] && void 0x0 !== jp34u8 ? jp34u8 : {};xtsc5_(upem83(n$i1['prototype']), 'addEventListener', this)['call'](this, kc4_5x, pme3, s_95ht), kc4_5x = String(kc4_5x)['toLowerCase'](), this['_loaded'] && -0x1 !== this['_canplayEvents']['indexOf'](kc4_5x) && this['dispatchEvent']({ 'type': kc4_5x });
        } }, { 'key': 'load', 'value': function () {} }, { 'key': 'play', 'value': function () {
          znrq60[this['_$sn']]['play']();
        } }, { 'key': 'resume', 'value': function () {
          znrq60[this['_$sn']]['resume']();
        } }, { 'key': 'pause', 'value': function () {
          znrq60[this['_$sn']]['pause']();
        } }, { 'key': 'stop', 'value': function () {
          znrq60[this['_$sn']]['stop']();
        } }, { 'key': 'destroy', 'value': function () {
          znrq60[this['_$sn']]['destroy']();
        } }, { 'key': 'canPlayType', 'value': function (c8xkj) {
          var um8jp = 0x0 < arguments['length'] && void 0x0 !== c8xkj ? c8xkj : '';return 'string' == typeof um8jp && (-0x1 < um8jp['indexOf']('audio/mpeg') || um8jp['indexOf']('audio/mp4')) ? 'probably' : '';
        } }, { 'key': 'cloneNode', 'value': function () {
          var xk5_ = new n$i1();return xk5_['loop'] = this['loop'], xk5_['autoplay'] = this['autoplay'], xk5_['src'] = this['src'], xk5_;
        } }, { 'key': 'currentTime', 'get': function () {
          return znrq60[this['_$sn']]['currentTime'];
        }, 'set': function (hiwt9s) {
          znrq60[this['_$sn']]['seek'](hiwt9s);
        } }, { 'key': 'duration', 'get': function () {
          return znrq60[this['_$sn']]['duration'];
        } }, { 'key': 'src', 'get': function () {
          return this['_src'];
        }, 'set': function (lagb2) {
          this['_src'] = lagb2, this['_loaded'] = !0x1, this['readyState'] = this['HAVE_NOTHING'], znrq60[this['_$sn']]['src'] = lagb2;
        } }, { 'key': 'loop', 'get': function () {
          return this['_loop'];
        }, 'set': function (w5sh9) {
          this['_loop'] = w5sh9, znrq60[this['_$sn']]['loop'] = w5sh9;
        } }, { 'key': 'autoplay', 'get': function () {
          return this['autoplay'];
        }, 'set': function (od0qyz) {
          this['_autoplay'] = od0qyz, znrq60[this['_$sn']]['autoplay'] = od0qyz;
        } }, { 'key': 'paused', 'get': function () {
          return this['_paused'];
        } }, { 'key': 'volume', 'get': function () {
          return this['_volume'];
        }, 'set': function (ozyqd0) {
          this['_volume'] = ozyqd0, this['_muted'] || (znrq60[this['_$sn']]['volume'] = ozyqd0);
        } }, { 'key': 'muted', 'get': function () {
          return this['_muted'];
        }, 'set': function (umep38) {
          this['_muted'] = umep38, znrq60[this['_$sn']]['volume'] = umep38 ? 0x0 : this['_volume'];
        } }]) && c59t_(oqzyd['prototype'], xct_5k), w$71h && c59t_(oqzyd, w$71h), n$i1;
    }();xkj_c['default'] = n67r1$, $h7w9i['exports'] = xkj_c['default'];
  }, { './HTMLAudioElement': 0x20 }], 0x19: [function ($r61n, zq6, u8jk4) {
    'use strict';

    Object['defineProperty'](u8jk4, '__esModule', { 'value': !0x0 }), u8jk4['default'] = function () {
      var m2blea = wx['createCanvas']();return m2blea['type'] = 'canvas', m2blea['getContext'], (m2blea['getBoundingClientRect'] = function () {
        return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
      }, m2blea['style'] = { 'top': '0px', 'left': '0px', 'width': r0qzn6['innerWidth'] + 'px', 'height': r0qzn6['innerHeight'] + 'px' }, m2blea['addEventListener'] = function (n60rz1, $7i9h) {
        var up4j8 = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {};document['addEventListener'](n60rz1, $7i9h, up4j8);
      }, m2blea['removeEventListener'] = function (s9th5, jcx_k) {
        document['removeEventListener'](s9th5, jcx_k);
      }, m2blea['dispatchEvent'] = function () {
        var pemb = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {};console['log']('canvas.dispatchEvent', pemb['type'], pemb);
      }, Object['defineProperty'](m2blea, 'clientWidth', { 'enumerable': !0x0, 'get': function () {
          return r0qzn6['innerWidth'];
        } }), Object['defineProperty'](m2blea, 'clientHeight', { 'enumerable': !0x0, 'get': function () {
          return r0qzn6['innerHeight'];
        } }), m2blea);
    };var r0qzn6 = $r61n('./WindowProperties');zq6['exports'] = u8jk4['default'];
  }, { './WindowProperties': 0x2b }], 0x1a: [function (sthiw9, m3pbae, _x5tsc) {
    'use strict';

    Object['defineProperty'](_x5tsc, '__esModule', { 'value': !0x0 }), _x5tsc['default'] = void 0x0;var $nzr,
        a2gvbl = ($nzr = sthiw9('./Node')) && $nzr['__esModule'] ? $nzr : { 'default': $nzr };function w9s7i(t59h) {
      return (w9s7i = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (z0r6n) {
        return typeof z0r6n;
      } : function (eb3mpa) {
        return eb3mpa && 'function' == typeof Symbol && eb3mpa['constructor'] === Symbol && eb3mpa !== Symbol['prototype'] ? 'symbol' : typeof eb3mpa;
      })(t59h);
    }function ab2lme(n60qr) {
      return function () {
        var r0q6nz,
            zn1r$,
            swt9h5,
            cx5_t = p3amb(n60qr);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (aelb2) {
            return;
          }
        }()) {
          var ap2me = p3amb(this)['constructor'];r0q6nz = Reflect['construct'](cx5_t, arguments, ap2me);
        } else r0q6nz = cx5_t['apply'](this, arguments);return zn1r$ = this, !(swt9h5 = r0q6nz) || 'object' !== w9s7i(swt9h5) && 'function' != typeof swt9h5 ? function (cj48k) {
          if (void 0x0 !== cj48k) return cj48k;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(zn1r$) : swt9h5;
      };
    }function p3amb(n01) {
      return (p3amb = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (k4c_j) {
        return k4c_j['__proto__'] || Object['getPrototypeOf'](k4c_j);
      })(n01);
    }function i9t(wh5t9s, dqor0z) {
      return (i9t = Object['setPrototypeOf'] || function ($1hwi7, t_cs59) {
        return $1hwi7['__proto__'] = t_cs59, $1hwi7;
      })(wh5t9s, dqor0z);
    }var ih7s9w = function () {
      !function (r1n6, paeb2m) {
        if ('function' != typeof paeb2m && null !== paeb2m) throw new TypeError('Super expression must either be null or a function');r1n6['prototype'] = Object['create'](paeb2m && paeb2m['prototype'], { 'constructor': { 'value': r1n6, 'writable': !0x0, 'configurable': !0x0 } }), paeb2m && i9t(r1n6, paeb2m);
      }(itswh9, a2gvbl['default']);var j4k3 = ab2lme(itswh9);function itswh9() {
        var q0rn6;return function (n$wi, zn$16) {
          if (!(n$wi instanceof zn$16)) throw new TypeError('Cannot call a class as a function');
        }(this, itswh9), (q0rn6 = j4k3['call'](this))['className'] = '', q0rn6['children'] = [], q0rn6;
      }return itswh9;
    }();_x5tsc['default'] = ih7s9w, m3pbae['exports'] = _x5tsc['default'];
  }, { './Node': 0x28 }], 0x1b: [function (_cjk, oqy0dz, jp83m) {
    'use strict';

    Object['defineProperty'](jp83m, '__esModule', { 'value': !0x0 }), jp83m['default'] = void 0x0, (jp83m['default'] = function i7$9wh() {
      !function (mu3e, o0dqr) {
        if (!(mu3e instanceof o0dqr)) throw new TypeError('Cannot call a class as a function');
      }(this, i7$9wh);
    }, oqy0dz['exports'] = jp83m['default']);
  }, {}], 0x1c: [function (znr10, j84k3u, r0d) {
    'use strict';

    Object['defineProperty'](r0d, '__esModule', { 'value': !0x0 }), r0d['default'] = void 0x0;var qz0dro = znr10('../util/index.js');function n60qz(h_95) {
      !function (st9wi, pmj38u) {
        if (!(st9wi instanceof pmj38u)) throw new TypeError('Cannot call a class as a function');
      }(this, n60qz), this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = qz0dro['noop'], this['stopPropagation'] = qz0dro['noop'], this['type'] = h_95, this['target'] = window['canvas'], this['currentTarget'] = window['canvas'];
    }function p2ma(jk4c_) {
      return function (hwt59s) {
        var u38epm = new n60qz(jk4c_);u38epm['touches'] = hwt59s['touches'], u38epm['targetTouches'] = Array['prototype']['slice']['call'](hwt59s['touches']), u38epm['changedTouches'] = hwt59s['changedTouches'], u38epm['timeStamp'] = hwt59s['timeStamp'], document['dispatchEvent'](u38epm);
      };
    }r0d['default'] = n60qz, wx['onTouchStart'](p2ma('touchstart')), wx['onTouchMove'](p2ma('touchmove')), wx['onTouchEnd'](p2ma('touchend')), wx['onTouchCancel'](p2ma('touchcancel')), j84k3u['exports'] = r0d['default'];
  }, { '../util/index.js': 0x32 }], 0x1d: [function (b2elav, w17i$n, evbal2) {
    'use strict';

    Object['defineProperty'](evbal2, '__esModule', { 'value': !0x0 }), Object['defineProperty'](evbal2, 'TouchEvent', { 'enumerable': !0x0, 'get': function () {
        return h_st59['default'];
      } }), Object['defineProperty'](evbal2, 'MouseEvent', { 'enumerable': !0x0, 'get': function () {
        return $167ni['default'];
      } });var h_st59 = _45ck(b2elav('./TouchEvent')),
        $167ni = _45ck(b2elav('./MouseEvent'));function _45ck(h17$iw) {
      return h17$iw && h17$iw['__esModule'] ? h17$iw : { 'default': h17$iw };
    }
  }, { './MouseEvent': 0x1b, './TouchEvent': 0x1c }], 0x1e: [function (n0z6, kx84c, nz1$r6) {
    'use strict';

    function r0n(j_x4kc, euma3) {
      for (var yoqd0 = 0x0; yoqd0 < euma3['length']; yoqd0++) {
        var i76$ = euma3[yoqd0];i76$['enumerable'] = i76$['enumerable'] || !0x1, i76$['configurable'] = !0x0, 'value' in i76$ && (i76$['writable'] = !0x0), Object['defineProperty'](j_x4kc, i76$['key'], i76$);
      }
    }Object['defineProperty'](nz1$r6, '__esModule', { 'value': !0x0 }), nz1$r6['default'] = void 0x0;var x_ = new WeakMap(),
        gv2la = function () {
      function ju48k3() {
        !function (_k5c, $r1z6n) {
          if (!(_k5c instanceof $r1z6n)) throw new TypeError('Cannot call a class as a function');
        }(this, ju48k3), x_['set'](this, {});
      }var avblg, p38mj, _xcs;return avblg = ju48k3, (p38mj = [{ 'key': 'addEventListener', 'value': function (_59c, tc5k_, m38ju) {
          var st5c_ = 0x2 < arguments['length'] && void 0x0 !== m38ju ? m38ju : {},
              m2pb = x_['get'](this);m2pb || (m2pb = {}, x_['set'](this, m2pb)), m2pb[_59c] || (m2pb[_59c] = []), m2pb[_59c]['push'](tc5k_), st5c_['capture'], st5c_['once'], st5c_['passive'];
        } }, { 'key': 'removeEventListener', 'value': function (roz0d, oqz6r) {
          var mpb2ae = x_['get'](this);if (mpb2ae) {
            var j_kxc = mpb2ae[roz0d];if (j_kxc && 0x0 < j_kxc['length']) {
              for (var cj4k8 = j_kxc['length']; cj4k8--;) if (j_kxc[cj4k8] === oqz6r) {
                j_kxc['splice'](cj4k8, 0x1);break;
              }
            }
          }
        } }, { 'key': 'dispatchEvent', 'value': function (e3mu8) {
          var z1n6r$ = 0x0 < arguments['length'] && void 0x0 !== e3mu8 ? e3mu8 : {},
              u8jkx = x_['get'](this)[z1n6r$['type']];if (u8jkx) {
            for (var ux8j4 = 0x0; ux8j4 < u8jkx['length']; ux8j4++) u8jkx[ux8j4](z1n6r$);
          }
        } }]) && r0n(avblg['prototype'], p38mj), _xcs && r0n(avblg, _xcs), ju48k3;
    }();nz1$r6['default'] = gv2la, kx84c['exports'] = nz1$r6['default'];
  }, {}], 0x1f: [function (sh95w, eap3um, ave2lb) {
    'use strict';

    function drq(r160zn, $z1n) {
      for (var ts9hw5 = 0x0; ts9hw5 < $z1n['length']; ts9hw5++) {
        var ag2vlb = $z1n[ts9hw5];ag2vlb['enumerable'] = ag2vlb['enumerable'] || !0x1, ag2vlb['configurable'] = !0x0, 'value' in ag2vlb && (ag2vlb['writable'] = !0x0), Object['defineProperty'](r160zn, ag2vlb['key'], ag2vlb);
      }
    }Object['defineProperty'](ave2lb, '__esModule', { 'value': !0x0 }), ave2lb['default'] = void 0x0;var t_s5h9 = function () {
      function e2pab() {
        !function (r6q0nz, bp2aem) {
          if (!(r6q0nz instanceof bp2aem)) throw new TypeError('Cannot call a class as a function');
        }(this, e2pab);
      }var n6qr, twshi9, r10nz;return n6qr = e2pab, (twshi9 = [{ 'key': 'construct', 'value': function () {} }]) && drq(n6qr['prototype'], twshi9), r10nz && drq(n6qr, r10nz), e2pab;
    }();ave2lb['default'] = t_s5h9, eap3um['exports'] = ave2lb['default'];
  }, {}], 0x20: [function (c_5ts, tc5s9, meb3p) {
    'use strict';

    Object['defineProperty'](meb3p, '__esModule', { 'value': !0x0 }), meb3p['default'] = void 0x0;var uj43p,
        l2eavb = (uj43p = c_5ts('./HTMLMediaElement')) && uj43p['__esModule'] ? uj43p : { 'default': uj43p };function d0oqyz(znr6) {
      return (d0oqyz = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (c95_t) {
        return typeof c95_t;
      } : function (p8j3um) {
        return p8j3um && 'function' == typeof Symbol && p8j3um['constructor'] === Symbol && p8j3um !== Symbol['prototype'] ? 'symbol' : typeof p8j3um;
      })(znr6);
    }function uj4kx(bglav2) {
      return function () {
        var rn7$16,
            muj3p8,
            cxk45,
            o0qzr = w$n1i(bglav2);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (ozdrq) {
            return;
          }
        }()) {
          var hi$97 = w$n1i(this)['constructor'];rn7$16 = Reflect['construct'](o0qzr, arguments, hi$97);
        } else rn7$16 = o0qzr['apply'](this, arguments);return muj3p8 = this, !(cxk45 = rn7$16) || 'object' !== d0oqyz(cxk45) && 'function' != typeof cxk45 ? function (emab3) {
          if (void 0x0 !== emab3) return emab3;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(muj3p8) : cxk45;
      };
    }function w$n1i(peaum) {
      return (w$n1i = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (mbael2) {
        return mbael2['__proto__'] || Object['getPrototypeOf'](mbael2);
      })(peaum);
    }function kc54x(bae2l, b2amep) {
      return (kc54x = Object['setPrototypeOf'] || function (do0qzr, a2evbl) {
        return do0qzr['__proto__'] = a2evbl, do0qzr;
      })(bae2l, b2amep);
    }var o0qdy = function () {
      !function (ck_5x, uj38k) {
        if ('function' != typeof uj38k && null !== uj38k) throw new TypeError('Super expression must either be null or a function');ck_5x['prototype'] = Object['create'](uj38k && uj38k['prototype'], { 'constructor': { 'value': ck_5x, 'writable': !0x0, 'configurable': !0x0 } }), uj38k && kc54x(ck_5x, uj38k);
      }(t5_, l2eavb['default']);var emu3p8 = uj4kx(t5_);function t5_() {
        return function (r61zn0, pum83) {
          if (!(r61zn0 instanceof pum83)) throw new TypeError('Cannot call a class as a function');
        }(this, t5_), emu3p8['call'](this, 'audio');
      }return t5_;
    }();meb3p['default'] = o0qdy, tc5s9['exports'] = meb3p['default'];
  }, { './HTMLMediaElement': 0x24 }], 0x21: [function (kxc_5, kc_j, $zr6) {
    'use strict';

    Object['defineProperty']($zr6, '__esModule', { 'value': !0x0 }), $zr6['default'] = void 0x0;var nrz10 = kc_xj(kxc_5('./Canvas'));kc_xj(kxc_5('./HTMLElement'));function kc_xj(me3pba) {
      return me3pba && me3pba['__esModule'] ? me3pba : { 'default': me3pba };
    }GameGlobal['screencanvas'] = GameGlobal['screencanvas'] || new nrz10['default']();var emp3b = GameGlobal['screencanvas']['constructor'];$zr6['default'] = emp3b, kc_j['exports'] = $zr6['default'];
  }, { './Canvas': 0x19, './HTMLElement': 0x22 }], 0x22: [function (bema2p, juxk84, h$9w7) {
    'use strict';

    Object['defineProperty'](h$9w7, '__esModule', { 'value': !0x0 }), h$9w7['default'] = void 0x0;var yqdzo,
        c59st_ = (yqdzo = bema2p('./Element')) && yqdzo['__esModule'] ? yqdzo : { 'default': yqdzo },
        dqoz = bema2p('./util/index.js'),
        nz0q6 = bema2p('./WindowProperties');function itw9h(_xtc5s) {
      return (itw9h = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (pu8j) {
        return typeof pu8j;
      } : function (n61rz) {
        return n61rz && 'function' == typeof Symbol && n61rz['constructor'] === Symbol && n61rz !== Symbol['prototype'] ? 'symbol' : typeof n61rz;
      })(_xtc5s);
    }function u83m(j4kxc_, upe3m) {
      for (var i9htsw = 0x0; i9htsw < upe3m['length']; i9htsw++) {
        var n1z60r = upe3m[i9htsw];n1z60r['enumerable'] = n1z60r['enumerable'] || !0x1, n1z60r['configurable'] = !0x0, 'value' in n1z60r && (n1z60r['writable'] = !0x0), Object['defineProperty'](j4kxc_, n1z60r['key'], n1z60r);
      }
    }function qzdyo0(si9) {
      return function () {
        var hw59st,
            x_tk,
            epb2a,
            znrq06 = sh_95(si9);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (z61r0n) {
            return;
          }
        }()) {
          var kxc5t = sh_95(this)['constructor'];hw59st = Reflect['construct'](znrq06, arguments, kxc5t);
        } else hw59st = znrq06['apply'](this, arguments);return x_tk = this, !(epb2a = hw59st) || 'object' !== itw9h(epb2a) && 'function' != typeof epb2a ? function (ev2ba) {
          if (void 0x0 !== ev2ba) return ev2ba;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(x_tk) : epb2a;
      };
    }function sh_95(s9ht5) {
      return (sh_95 = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (st_x5) {
        return st_x5['__proto__'] || Object['getPrototypeOf'](st_x5);
      })(s9ht5);
    }function hwi9$(p3ju48, qrn60z) {
      return (hwi9$ = Object['setPrototypeOf'] || function (ju384k, xkc4) {
        return ju384k['__proto__'] = xkc4, ju384k;
      })(p3ju48, qrn60z);
    }var leb2a = function () {
      !function (p2emab, um8ep3) {
        if ('function' != typeof um8ep3 && null !== um8ep3) throw new TypeError('Super expression must either be null or a function');p2emab['prototype'] = Object['create'](um8ep3 && um8ep3['prototype'], { 'constructor': { 'value': p2emab, 'writable': !0x0, 'configurable': !0x0 } }), um8ep3 && hwi9$(p2emab, um8ep3);
      }($wi9, c59st_['default']);var _cx4k5,
          c8j4xk,
          qzy0od,
          _ts59 = qzdyo0($wi9);function $wi9() {
        var i9wht,
            n0zrq = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return function (pme3ab, cx8jk4) {
          if (!(pme3ab instanceof cx8jk4)) throw new TypeError('Cannot call a class as a function');
        }(this, $wi9), (i9wht = _ts59['call'](this))['className'] = '', i9wht['childern'] = [], i9wht['style'] = { 'width': ''['concat'](nz0q6['innerWidth'], 'px'), 'height': ''['concat'](nz0q6['innerHeight'], 'px') }, i9wht['insertBefore'] = dqoz['noop'], i9wht['innerHTML'] = '', i9wht['tagName'] = n0zrq['toUpperCase'](), i9wht;
      }return _cx4k5 = $wi9, (c8j4xk = [{ 'key': 'setAttribute', 'value': function (j4c8kx, valg2) {
          this[j4c8kx] = valg2;
        } }, { 'key': 'getAttribute', 'value': function (in$w17) {
          return this[in$w17];
        } }, { 'key': 'getBoundingClientRect', 'value': function () {
          return { 'top': 0x0, 'left': 0x0, 'width': nz0q6['innerWidth'], 'height': nz0q6['innerHeight'] };
        } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
          var w7hi1$ = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](w7hi1$) ? 0x0 : w7hi1$;
        } }, { 'key': 'clientHeight', 'get': function () {
          var mpeau = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](mpeau) ? 0x0 : mpeau;
        } }]) && u83m(_cx4k5['prototype'], c8j4xk), qzy0od && u83m(_cx4k5, qzy0od), $wi9;
    }();h$9w7['default'] = leb2a, juxk84['exports'] = h$9w7['default'];
  }, { './Element': 0x1a, './WindowProperties': 0x2b, './util/index.js': 0x32 }], 0x23: [function (tc_k5x, zr160n, _t5cxs) {
    'use strict';

    Object['defineProperty'](_t5cxs, '__esModule', { 'value': !0x0 }), _t5cxs['default'] = void 0x0;var odq0rz;(odq0rz = tc_k5x('./HTMLElement')) && odq0rz['__esModule'];var pm2eb = wx['createImage']()['constructor'];_t5cxs['default'] = pm2eb, zr160n['exports'] = _t5cxs['default'];
  }, { './HTMLElement': 0x22 }], 0x24: [function (y0zqd, jkx8u4, x48kj) {
    'use strict';

    Object['defineProperty'](x48kj, '__esModule', { 'value': !0x0 }), x48kj['default'] = void 0x0;var oqyd0,
        tk5c = (oqyd0 = y0zqd('./HTMLElement')) && oqyd0['__esModule'] ? oqyd0 : { 'default': oqyd0 };function oyz0d(belam2) {
      return (oyz0d = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (hwsi9) {
        return typeof hwsi9;
      } : function (i176$) {
        return i176$ && 'function' == typeof Symbol && i176$['constructor'] === Symbol && i176$ !== Symbol['prototype'] ? 'symbol' : typeof i176$;
      })(belam2);
    }function a2ebl(zqord0, r60zqo) {
      for (var t5xc_s = 0x0; t5xc_s < r60zqo['length']; t5xc_s++) {
        var z6qor0 = r60zqo[t5xc_s];z6qor0['enumerable'] = z6qor0['enumerable'] || !0x1, z6qor0['configurable'] = !0x0, 'value' in z6qor0 && (z6qor0['writable'] = !0x0), Object['defineProperty'](zqord0, z6qor0['key'], z6qor0);
      }
    }function u4p8j(aup) {
      return function () {
        var _5t9s,
            p4u8j3,
            k_4x5,
            x_kc4j = $w7i1(aup);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (ju3p8) {
            return;
          }
        }()) {
          var uj8m = $w7i1(this)['constructor'];_5t9s = Reflect['construct'](x_kc4j, arguments, uj8m);
        } else _5t9s = x_kc4j['apply'](this, arguments);return p4u8j3 = this, !(k_4x5 = _5t9s) || 'object' !== oyz0d(k_4x5) && 'function' != typeof k_4x5 ? function (p2) {
          if (void 0x0 !== p2) return p2;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(p4u8j3) : k_4x5;
      };
    }function $w7i1(z06nr1) {
      return ($w7i1 = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (qy0oz) {
        return qy0oz['__proto__'] || Object['getPrototypeOf'](qy0oz);
      })(z06nr1);
    }function z61nr$(s_tcx, s7hw9i) {
      return (z61nr$ = Object['setPrototypeOf'] || function (alm2b, h9s5_t) {
        return alm2b['__proto__'] = h9s5_t, alm2b;
      })(s_tcx, s7hw9i);
    }var rn1$76 = function () {
      !function (m2ebpa, emb2) {
        if ('function' != typeof emb2 && null !== emb2) throw new TypeError('Super expression must either be null or a function');m2ebpa['prototype'] = Object['create'](emb2 && emb2['prototype'], { 'constructor': { 'value': m2ebpa, 'writable': !0x0, 'configurable': !0x0 } }), emb2 && z61nr$(m2ebpa, emb2);
      }(i1w7$h, tk5c['default']);var t_5sh,
          _c54k,
          si7wh,
          jx_4k = u4p8j(i1w7$h);function i1w7$h($n617r) {
        return function ($h71iw, x5ct) {
          if (!($h71iw instanceof x5ct)) throw new TypeError('Cannot call a class as a function');
        }(this, i1w7$h), jx_4k['call'](this, $n617r);
      }return t_5sh = i1w7$h, (_c54k = [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]) && a2ebl(t_5sh['prototype'], _c54k), si7wh && a2ebl(t_5sh, si7wh), i1w7$h;
    }();x48kj['default'] = rn1$76, jkx8u4['exports'] = x48kj['default'];
  }, { './HTMLElement': 0x22 }], 0x25: [function (juk8x4, e3u8mp, tsx_) {
    'use strict';

    Object['defineProperty'](tsx_, '__esModule', { 'value': !0x0 }), tsx_['default'] = void 0x0;var bae3m,
        zoqr0 = (bae3m = juk8x4('./HTMLMediaElement')) && bae3m['__esModule'] ? bae3m : { 'default': bae3m };function xukj(k8jxc4) {
      return (xukj = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (sc_5xt) {
        return typeof sc_5xt;
      } : function (k5) {
        return k5 && 'function' == typeof Symbol && k5['constructor'] === Symbol && k5 !== Symbol['prototype'] ? 'symbol' : typeof k5;
      })(k8jxc4);
    }function _h9(bme2pa) {
      return function () {
        var k_4xjc,
            $iwn71,
            i7n16,
            evab2l = xj4ck(bme2pa);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (rn6$) {
            return;
          }
        }()) {
          var _xcst5 = xj4ck(this)['constructor'];k_4xjc = Reflect['construct'](evab2l, arguments, _xcst5);
        } else k_4xjc = evab2l['apply'](this, arguments);return $iwn71 = this, !(i7n16 = k_4xjc) || 'object' !== xukj(i7n16) && 'function' != typeof i7n16 ? function (m2be) {
          if (void 0x0 !== m2be) return m2be;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }($iwn71) : i7n16;
      };
    }function xj4ck(sh59) {
      return (xj4ck = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (pa3ebm) {
        return pa3ebm['__proto__'] || Object['getPrototypeOf'](pa3ebm);
      })(sh59);
    }function pu8jm($w17n, whtsi) {
      return (pu8jm = Object['setPrototypeOf'] || function (iw$79h, wih79s) {
        return iw$79h['__proto__'] = wih79s, iw$79h;
      })($w17n, whtsi);
    }var nzr6q = function () {
      !function (ht9is, l2gb) {
        if ('function' != typeof l2gb && null !== l2gb) throw new TypeError('Super expression must either be null or a function');ht9is['prototype'] = Object['create'](l2gb && l2gb['prototype'], { 'constructor': { 'value': ht9is, 'writable': !0x0, 'configurable': !0x0 } }), l2gb && pu8jm(ht9is, l2gb);
      }(t_s9h5, zoqr0['default']);var $wh9i = _h9(t_s9h5);function t_s9h5() {
        return function (upe38m, _5xck) {
          if (!(upe38m instanceof _5xck)) throw new TypeError('Cannot call a class as a function');
        }(this, t_s9h5), $wh9i['call'](this, 'video');
      }return t_s9h5;
    }();tsx_['default'] = nzr6q, e3u8mp['exports'] = tsx_['default'];
  }, { './HTMLMediaElement': 0x24 }], 0x26: [function (rqod0, sht9iw, n71$6) {
    'use strict';

    Object['defineProperty'](n71$6, '__esModule', { 'value': !0x0 }), n71$6['default'] = function () {
      return wx['createImage']();
    };var w7$n1i;(w7$n1i = rqod0('./HTMLImageElement')) && w7$n1i['__esModule'], sht9iw['exports'] = n71$6['default'];
  }, { './HTMLImageElement': 0x23 }], 0x27: [function (i$w7h, m3paue, $1nrz) {
    'use strict';

    Object['defineProperty']($1nrz, '__esModule', { 'value': !0x0 }), $1nrz['default'] = void 0x0, ($1nrz['default'] = function sx_tc() {
      !function (_st5c, $h17i) {
        if (!(_st5c instanceof $h17i)) throw new TypeError('Cannot call a class as a function');
      }(this, sx_tc);
    }, m3paue['exports'] = $1nrz['default']);
  }, {}], 0x28: [function (_c9t5s, his7w9, ro0zq6) {
    'use strict';

    Object['defineProperty'](ro0zq6, '__esModule', { 'value': !0x0 }), ro0zq6['default'] = void 0x0;var r0zdqo,
        s59 = (r0zdqo = _c9t5s('./EventTarget.js')) && r0zdqo['__esModule'] ? r0zdqo : { 'default': r0zdqo };function pm8ue(r6qoz) {
      return (pm8ue = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (v2beal) {
        return typeof v2beal;
      } : function (mebl) {
        return mebl && 'function' == typeof Symbol && mebl['constructor'] === Symbol && mebl !== Symbol['prototype'] ? 'symbol' : typeof mebl;
      })(r6qoz);
    }function mpeb3(j834uk, t9swih) {
      for (var bva2le = 0x0; bva2le < t9swih['length']; bva2le++) {
        var n0r1z6 = t9swih[bva2le];n0r1z6['enumerable'] = n0r1z6['enumerable'] || !0x1, n0r1z6['configurable'] = !0x0, 'value' in n0r1z6 && (n0r1z6['writable'] = !0x0), Object['defineProperty'](j834uk, n0r1z6['key'], n0r1z6);
      }
    }function ujpm3(sw5t9h) {
      return function () {
        var me3au,
            hs9wt5,
            n7r6,
            h1w = b2lem(sw5t9h);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (lm) {
            return;
          }
        }()) {
          var hi1w$ = b2lem(this)['constructor'];me3au = Reflect['construct'](h1w, arguments, hi1w$);
        } else me3au = h1w['apply'](this, arguments);return hs9wt5 = this, !(n7r6 = me3au) || 'object' !== pm8ue(n7r6) && 'function' != typeof n7r6 ? function (jk) {
          if (void 0x0 !== jk) return jk;throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        }(hs9wt5) : n7r6;
      };
    }function b2lem(pbae) {
      return (b2lem = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (x_c4k5) {
        return x_c4k5['__proto__'] || Object['getPrototypeOf'](x_c4k5);
      })(pbae);
    }function i9hts(i17$6, t_9sh) {
      return (i9hts = Object['setPrototypeOf'] || function (hw7i1$, elav2) {
        return hw7i1$['__proto__'] = elav2, hw7i1$;
      })(i17$6, t_9sh);
    }var bael = function () {
      !function (xk_c45, roq6) {
        if ('function' != typeof roq6 && null !== roq6) throw new TypeError('Super expression must either be null or a function');xk_c45['prototype'] = Object['create'](roq6 && roq6['prototype'], { 'constructor': { 'value': xk_c45, 'writable': !0x0, 'configurable': !0x0 } }), roq6 && i9hts(xk_c45, roq6);
      }(wist, s59['default']);var $6i7,
          q6rzn0,
          maup3e,
          qzo = ujpm3(wist);function wist() {
        var n$zr;return function (w7$n1, z60oqr) {
          if (!(w7$n1 instanceof z60oqr)) throw new TypeError('Cannot call a class as a function');
        }(this, wist), (n$zr = qzo['call'](this))['childNodes'] = [], n$zr;
      }return $6i7 = wist, (q6rzn0 = [{ 'key': 'appendChild', 'value': function (i$wh9) {
          this['childNodes']['push'](i$wh9);
        } }, { 'key': 'cloneNode', 'value': function () {
          var aeu3pm = Object['create'](this);return Object['assign'](aeu3pm, this), aeu3pm;
        } }, { 'key': 'removeChild', 'value': function (i79w) {
          var dr0qoz = this['childNodes']['findIndex'](function (qoy0) {
            return qoy0 === i79w;
          });return -0x1 < dr0qoz ? this['childNodes']['splice'](dr0qoz, 0x1) : null;
        } }]) && mpeb3($6i7['prototype'], q6rzn0), maup3e && mpeb3($6i7, maup3e), wist;
    }();ro0zq6['default'] = bael, his7w9['exports'] = ro0zq6['default'];
  }, { './EventTarget.js': 0x1e }], 0x29: [function (z1rn6$, ep8m3, $n67r) {
    'use strict';

    Object['defineProperty']($n67r, '__esModule', { 'value': !0x0 }), $n67r['default'] = void 0x0, ($n67r['default'] = function ckj4() {
      !function (th_59, bpam) {
        if (!(th_59 instanceof bpam)) throw new TypeError('Cannot call a class as a function');
      }(this, ckj4);
    }, ep8m3['exports'] = $n67r['default']);
  }, {}], 0x2a: [function ($7h9iw, zrodq0, h5wt9s) {
    'use strict';

    function u8k3j(is97, am2le) {
      for (var ba2lev = 0x0; ba2lev < am2le['length']; ba2lev++) {
        var c5_xst = am2le[ba2lev];c5_xst['enumerable'] = c5_xst['enumerable'] || !0x1, c5_xst['configurable'] = !0x0, 'value' in c5_xst && (c5_xst['writable'] = !0x0), Object['defineProperty'](is97, c5_xst['key'], c5_xst);
      }
    }Object['defineProperty'](h5wt9s, '__esModule', { 'value': !0x0 }), h5wt9s['default'] = void 0x0;var w1$h7i = new WeakMap(),
        xc4_j = function () {
      function ro0dq(cstx) {
        var h1w$i = this,
            _c5ts9 = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (shwit9, wh7si9) {
          if (!(shwit9 instanceof wh7si9)) throw new TypeError('Cannot call a class as a function');
        }(this, ro0dq), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, 'string' != typeof cstx || !/(^ws:\/\/)|(^wss:\/\/)/['test'](cstx)) throw new TypeError('Failed to construct \'WebSocket\': The URL \''['concat'](cstx, '\' is invalid'));this['url'] = cstx, this['readyState'] = ro0dq['CONNECTING'];var ku4j8 = wx['connectSocket']({ 'url': cstx, 'protocols': Array['isArray'](_c5ts9) ? _c5ts9 : [_c5ts9], 'tcpNoDelay': !0x0 });return w1$h7i['set'](this, ku4j8), ku4j8['onClose'](function (cj84xk) {
          h1w$i['readyState'] = ro0dq['CLOSED'], 'function' == typeof h1w$i['onclose'] && h1w$i['onclose'](cj84xk);
        }), ku4j8['onMessage'](function (cx5_4k) {
          'function' == typeof h1w$i['onmessage'] && h1w$i['onmessage'](cx5_4k);
        }), ku4j8['onOpen'](function () {
          h1w$i['readyState'] = ro0dq['OPEN'], 'function' == typeof h1w$i['onopen'] && h1w$i['onopen']();
        }), ku4j8['onError'](function (ve2ba) {
          'function' == typeof h1w$i['onerror'] && h1w$i['onerror'](new Error(ve2ba['errMsg']));
        }), this;
      }var o0yzd, i1h7$, pu48;return o0yzd = ro0dq, (i1h7$ = [{ 'key': 'close', 'value': function (_95hs, s97hwi) {
          this['readyState'] = ro0dq['CLOSING'], w1$h7i['get'](this)['close']({ 'code': _95hs, 'reason': s97hwi });
        } }, { 'key': 'send', 'value': function (_5sht9) {
          if ('string' != typeof _5sht9 && !(_5sht9 instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data '['concat'](_5sht9, ' is invalid'));w1$h7i['get'](this)['send']({ 'data': _5sht9 });
        } }]) && u8k3j(o0yzd['prototype'], i1h7$), pu48 && u8k3j(o0yzd, pu48), ro0dq;
    }();(h5wt9s['default'] = xc4_j)['CONNECTING'] = 0x0, xc4_j['OPEN'] = 0x1, xc4_j['CLOSING'] = 0x2, xc4_j['CLOSED'] = 0x3, zrodq0['exports'] = h5wt9s['default'];
  }, {}], 0x2b: [function (w1h7$i, n1r$7, jupm83) {
    'use strict';

    Object['defineProperty'](jupm83, '__esModule', { 'value': !0x0 }), jupm83['ontouchend'] = jupm83['ontouchmove'] = jupm83['ontouchstart'] = jupm83['performance'] = jupm83['screen'] = jupm83['devicePixelRatio'] = jupm83['innerHeight'] = jupm83['innerWidth'] = void 0x0;var ju84k = wx['getSystemInfoSync'](),
        ju834 = ju84k['screenWidth'],
        $16nr = ju84k['screenHeight'],
        nq06zr = ju84k['devicePixelRatio'];jupm83['devicePixelRatio'] = nq06zr;var u83kj4 = ju834,
        nr17 = $16nr,
        w5hs9t = { 'width': ju834, 'height': $16nr, 'availWidth': jupm83['innerWidth'] = u83kj4, 'availHeight': jupm83['innerHeight'] = nr17, 'availLeft': 0x0, 'availTop': 0x0 };jupm83['screen'] = w5hs9t;var _xj4k = { 'now': Date['now'] };jupm83['performance'] = _xj4k, jupm83['ontouchstart'] = null, jupm83['ontouchmove'] = null, jupm83['ontouchend'] = null;
  }, {}], 0x2c: [function (sh9itw, ampe3u, mpab) {
    'use strict';

    Object['defineProperty'](mpab, '__esModule', { 'value': !0x0 }), mpab['default'] = void 0x0;var uaem3p,
        kc_5xt = (uaem3p = sh9itw('./EventTarget.js')) && uaem3p['__esModule'] ? uaem3p : { 'default': uaem3p };function t5_h9s(w$n71i) {
      return (t5_h9s = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (qrd0zo) {
        return typeof qrd0zo;
      } : function (ju8p3m) {
        return ju8p3m && 'function' == typeof Symbol && ju8p3m['constructor'] === Symbol && ju8p3m !== Symbol['prototype'] ? 'symbol' : typeof ju8p3m;
      })(w$n71i);
    }function qzoyd0(e2lab, j83) {
      for (var jmup38 = 0x0; jmup38 < j83['length']; jmup38++) {
        var n610zr = j83[jmup38];n610zr['enumerable'] = n610zr['enumerable'] || !0x1, n610zr['configurable'] = !0x0, 'value' in n610zr && (n610zr['writable'] = !0x0), Object['defineProperty'](e2lab, n610zr['key'], n610zr);
      }
    }function h$w7i(muea3p) {
      return function () {
        var emlb2a,
            c4xkj_,
            cs_95t,
            ml2e = hw9t(muea3p);if (function () {
          if ('undefined' == typeof Reflect || !Reflect['construct']) return;if (Reflect['construct']['sham']) return;if ('function' == typeof Proxy) return 0x1;try {
            return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {})), 0x1;
          } catch (upem) {
            return;
          }
        }()) {
          var i$wh79 = hw9t(this)['constructor'];emlb2a = Reflect['construct'](ml2e, arguments, i$wh79);
        } else emlb2a = ml2e['apply'](this, arguments);return c4xkj_ = this, !(cs_95t = emlb2a) || 'object' !== t5_h9s(cs_95t) && 'function' != typeof cs_95t ? nzq60(c4xkj_) : cs_95t;
      };
    }function nzq60(j8up4) {
      if (void 0x0 === j8up4) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return j8up4;
    }function hw9t(_ht) {
      return (hw9t = Object['setPrototypeOf'] ? Object['getPrototypeOf'] : function (rz06) {
        return rz06['__proto__'] || Object['getPrototypeOf'](rz06);
      })(_ht);
    }function s5ht9(u8p4j3, hwtis9) {
      return (s5ht9 = Object['setPrototypeOf'] || function (o6r0qz, pmea) {
        return o6r0qz['__proto__'] = pmea, o6r0qz;
      })(u8p4j3, hwtis9);
    }var ujk3 = new WeakMap(),
        u8kx4 = new WeakMap(),
        sc_t95 = new WeakMap(),
        s_5tx = new WeakMap(),
        $7h1i = new WeakMap();function m3up(l2abem) {
      if ('function' == typeof this['on'['concat'](l2abem)]) {
        for (var zdoyq = arguments['length'], elam2b = new Array(0x1 < zdoyq ? zdoyq - 0x1 : 0x0), _kx5c = 0x1; _kx5c < zdoyq; _kx5c++) elam2b[_kx5c - 0x1] = arguments[_kx5c];this['on'['concat'](l2abem)]['apply'](this, elam2b);
      }
    }function w95st(u8pj34) {
      this['readyState'] = u8pj34, m3up['call'](this, 'readystatechange');
    }var x_sc = function () {
      !function (t5_xc, r0z61n) {
        if ('function' != typeof r0z61n && null !== r0z61n) throw new TypeError('Super expression must either be null or a function');t5_xc['prototype'] = Object['create'](r0z61n && r0z61n['prototype'], { 'constructor': { 'value': t5_xc, 'writable': !0x0, 'configurable': !0x0 } }), r0z61n && s5ht9(t5_xc, r0z61n);
      }(p3u8j4, kc_5xt['default']);var lav2gb,
          m8p3ue,
          whi79$,
          p3m = h$w7i(p3u8j4);function p3u8j4() {
        var q0yz;return function ($761ni, q6z0o) {
          if (!($761ni instanceof q6z0o)) throw new TypeError('Cannot call a class as a function');
        }(this, p3u8j4), (q0yz = p3m['call'](this))['onabort'] = null, q0yz['onerror'] = null, q0yz['onload'] = null, q0yz['onloadstart'] = null, q0yz['onprogress'] = null, q0yz['ontimeout'] = null, q0yz['onloadend'] = null, q0yz['onreadystatechange'] = null, q0yz['readyState'] = 0x0, q0yz['response'] = null, q0yz['responseText'] = null, q0yz['responseType'] = '', q0yz['responseXML'] = null, q0yz['status'] = 0x0, q0yz['statusText'] = '', q0yz['upload'] = {}, q0yz['withCredentials'] = !0x1, sc_t95['set'](nzq60(q0yz), { 'content-type': 'application/x-www-form-urlencoded' }), s_5tx['set'](nzq60(q0yz), {}), q0yz;
      }return lav2gb = p3u8j4, (m8p3ue = [{ 'key': 'abort', 'value': function () {
          var m3pbea = $7h1i['get'](this);m3pbea && m3pbea['abort']();
        } }, { 'key': 'getAllResponseHeaders', 'value': function () {
          var u84p3 = s_5tx['get'](this);return Object['keys'](u84p3)['map'](function (ump3j) {
            return ''['concat'](ump3j, ':\x20')['concat'](u84p3[ump3j]);
          })['join']('\x0a');
        } }, { 'key': 'getResponseHeader', 'value': function (roz60q) {
          return s_5tx['get'](this)[roz60q];
        } }, { 'key': 'open', 'value': function (ux84k, hsiwt9) {
          u8kx4['set'](this, ux84k), ujk3['set'](this, hsiwt9), w95st['call'](this, p3u8j4['OPENED']);
        } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function (qzr0n6) {
          var up83m = this,
              upem38 = 0x0 < arguments['length'] && void 0x0 !== qzr0n6 ? qzr0n6 : '';if (this['readyState'] !== p3u8j4['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');var w$7ih = wx['request']({ 'data': upem38, 'url': ujk3['get'](this), 'method': u8kx4['get'](this), 'header': sc_t95['get'](this), 'dataType': 'other', 'responseType': 'arraybuffer' === this['responseType'] ? 'arraybuffer' : 'text', 'success': function (j8xck4) {
              var u3ma = j8xck4['data'],
                  n$1r67 = j8xck4['statusCode'],
                  zd0qyo = j8xck4['header'];switch (up83m['status'] = n$1r67, s_5tx['set'](up83m, zd0qyo), m3up['call'](up83m, 'loadstart'), w95st['call'](up83m, p3u8j4['HEADERS_RECEIVED']), w95st['call'](up83m, p3u8j4['LOADING']), up83m['responseType']) {case 'json':
                  up83m['responseText'] = u3ma;try {
                    up83m['response'] = JSON['parse'](u3ma);
                  } catch (n1i7) {
                    up83m['response'] = null;
                  }break;case '':case 'text':
                  up83m['responseText'] = up83m['response'] = u3ma;break;case 'arraybuffer':
                  up83m['response'] = u3ma, up83m['responseText'] = '';for (var x5c = new Uint8Array(u3ma), h9wts5 = x5c['byteLength'], _9sh5t = 0x0; _9sh5t < h9wts5; _9sh5t++) up83m['responseText'] += String['fromCharCode'](x5c[_9sh5t]);break;default:
                  up83m['response'] = null;}w95st['call'](up83m, p3u8j4['DONE']), m3up['call'](up83m, 'load'), m3up['call'](up83m, 'loadend');
            }, 'fail': function (w7i$1h) {
              var uep3am = w7i$1h['errMsg'];-0x1 !== uep3am['indexOf']('abort') ? m3up['call'](up83m, 'abort') : -0x1 !== uep3am['indexOf']('timeout') ? m3up['call'](up83m, 'timeout') : m3up['call'](up83m, 'error', uep3am), m3up['call'](up83m, 'loadend');
            } });$7h1i['set'](this, w$7ih);
        } }, { 'key': 'setRequestHeader', 'value': function (rzq06, zyqo0) {
          var t5hs9_ = sc_t95['get'](this);t5hs9_[rzq06] = zyqo0, sc_t95['set'](this, t5hs9_);
        } }, { 'key': 'addEventListener', 'value': function (drq0zo, s5c_9) {
          if ('function' == typeof s5c_9) {
            var wi7$h9 = this;this['on' + drq0zo] = function (cj_xk) {
              s5c_9['call'](wi7$h9, cj_xk);
            };
          }
        } }]) && qzoyd0(lav2gb['prototype'], m8p3ue), whi79$ && qzoyd0(lav2gb, whi79$), p3u8j4;
    }();(mpab['default'] = x_sc)['UNSEND'] = 0x0, x_sc['OPENED'] = 0x1, x_sc['HEADERS_RECEIVED'] = 0x2, x_sc['LOADING'] = 0x3, x_sc['DONE'] = 0x4, ampe3u['exports'] = mpab['default'];
  }, { './EventTarget.js': 0x1e }], 0x2d: [function (e8um3, ozr0d, qznr60) {
    'use strict';

    function in17w($h7i9) {
      return (in17w = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (r061zn) {
        return typeof r061zn;
      } : function (s5c_) {
        return s5c_ && 'function' == typeof Symbol && s5c_['constructor'] === Symbol && s5c_ !== Symbol['prototype'] ? 'symbol' : typeof s5c_;
      })($h7i9);
    }Object['defineProperty'](qznr60, '__esModule', { 'value': !0x0 }), qznr60['default'] = void 0x0;var t5s9_ = function (nw7$1i) {
      if (nw7$1i && nw7$1i['__esModule']) return nw7$1i;if (null === nw7$1i || 'object' !== in17w(nw7$1i) && 'function' != typeof nw7$1i) return { 'default': nw7$1i };var uj8xk4 = rqn0();if (uj8xk4 && uj8xk4['has'](nw7$1i)) return uj8xk4['get'](nw7$1i);var swh5t = {},
          oq0zrd = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];for (var uj8kx in nw7$1i) if (Object['prototype']['hasOwnProperty']['call'](nw7$1i, uj8kx)) {
        var q60zn = oq0zrd ? Object['getOwnPropertyDescriptor'](nw7$1i, uj8kx) : null;q60zn && (q60zn['get'] || q60zn['set']) ? Object['defineProperty'](swh5t, uj8kx, q60zn) : swh5t[uj8kx] = nw7$1i[uj8kx];
      }return swh5t['default'] = nw7$1i, uj8xk4 && uj8xk4['set'](nw7$1i, swh5t), swh5t;
    }(e8um3('./window')),
        w$in7 = _5ht9(e8um3('./HTMLElement')),
        $7i6n1 = _5ht9(e8um3('./HTMLVideoElement')),
        _k4cxj = _5ht9(e8um3('./Image')),
        j84ukx = _5ht9(e8um3('./Audio')),
        h95_st = _5ht9(e8um3('./Canvas'));function _5ht9(xk_5) {
      return xk_5 && xk_5['__esModule'] ? xk_5 : { 'default': xk_5 };
    }function rqn0() {
      if ('function' != typeof WeakMap) return null;var qzdoy0 = new WeakMap();return rqn0 = function () {
        return qzdoy0;
      }, qzdoy0;
    }e8um3('./EventIniter/index.js');var _5xcts = {},
        j8p = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': t5s9_, 'hidden': !0x1, 'style': {}, 'location': t5s9_['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new w$in7['default']('head'), 'body': new w$in7['default']('body'), 'createElement': function (vle) {
        return 'canvas' === vle ? new h95_st['default']() : 'audio' === vle ? new j84ukx['default']() : 'img' === vle ? new _k4cxj['default']() : 'video' === vle ? new $7i6n1['default']() : new w$in7['default'](vle);
      }, 'createElementNS': function (em38, s5thw) {
        return this['createElement'](s5thw);
      }, 'getElementById': function (c5_4k) {
        return c5_4k === t5s9_['canvas']['id'] ? t5s9_['canvas'] : null;
      }, 'getElementsByTagName': function (j83p) {
        return 'head' === j83p ? [j8p['head']] : 'body' === j83p ? [j8p['body']] : 'canvas' === j83p ? [t5s9_['canvas']] : [];
      }, 'getElementsByName': function (pamu3e) {
        return 'head' === pamu3e ? [j8p['head']] : 'body' === pamu3e ? [j8p['body']] : 'canvas' === pamu3e ? [t5s9_['canvas']] : [];
      }, 'querySelector': function (hi$w7) {
        return 'head' === hi$w7 ? j8p['head'] : 'body' === hi$w7 ? j8p['body'] : 'canvas' === hi$w7 || hi$w7 === '#'['concat'](t5s9_['canvas']['id']) ? t5s9_['canvas'] : null;
      }, 'querySelectorAll': function (j4xuk) {
        return 'head' === j4xuk ? [j8p['head']] : 'body' === j4xuk ? [j8p['body']] : 'canvas' === j4xuk ? [t5s9_['canvas']] : [];
      }, 'addEventListener': function (zn16r$, k_j4x) {
        _5xcts[zn16r$] || (_5xcts[zn16r$] = []), _5xcts[zn16r$]['push'](k_j4x);
      }, 'removeEventListener': function (xk4cj, hw9si7) {
        var cjxk8 = _5xcts[xk4cj];if (cjxk8 && 0x0 < cjxk8['length']) {
          for (var c5_k4x = cjxk8['length']; c5_k4x--;) if (cjxk8[c5_k4x] === hw9si7) {
            cjxk8['splice'](c5_k4x, 0x1);break;
          }
        }
      }, 'dispatchEvent': function (p83ujm) {
        var _k5xt = _5xcts[p83ujm['type']];if (_k5xt) {
          for (var el2bv = 0x0; el2bv < _k5xt['length']; el2bv++) _k5xt[el2bv](p83ujm);
        }
      } },
        n6$1zr = j8p;qznr60['default'] = n6$1zr, ozr0d['exports'] = qznr60['default'];
  }, { './Audio': 0x18, './Canvas': 0x19, './EventIniter/index.js': 0x1d, './HTMLElement': 0x22, './HTMLVideoElement': 0x25, './Image': 0x26, './window': 0x33 }], 0x2e: [function (xc_54k, mup83j, sc_x) {
    'use strict';

    function mpe2ba(uamep) {
      return (mpe2ba = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (ju83k) {
        return typeof ju83k;
      } : function (n06rqz) {
        return n06rqz && 'function' == typeof Symbol && n06rqz['constructor'] === Symbol && n06rqz !== Symbol['prototype'] ? 'symbol' : typeof n06rqz;
      })(uamep);
    }var r6zo = function (ebml) {
      if (ebml && ebml['__esModule']) return ebml;if (null === ebml || 'object' !== mpe2ba(ebml) && 'function' != typeof ebml) return { 'default': ebml };var _x4kc = xj4ck_();if (_x4kc && _x4kc['has'](ebml)) return _x4kc['get'](ebml);var w97$ = {},
          iws = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];for (var h9_t5 in ebml) if (Object['prototype']['hasOwnProperty']['call'](ebml, h9_t5)) {
        var eb2mp = iws ? Object['getOwnPropertyDescriptor'](ebml, h9_t5) : null;eb2mp && (eb2mp['get'] || eb2mp['set']) ? Object['defineProperty'](w97$, h9_t5, eb2mp) : w97$[h9_t5] = ebml[h9_t5];
      }return w97$['default'] = ebml, _x4kc && _x4kc['set'](ebml, w97$), w97$;
    }(xc_54k('./window')),
        mpu83j = h7isw(xc_54k('./document'));h7isw(xc_54k('./HTMLElement'));function h7isw(pu34) {
      return pu34 && pu34['__esModule'] ? pu34 : { 'default': pu34 };
    }function xj4ck_() {
      if ('function' != typeof WeakMap) return null;var z16n = new WeakMap();return xj4ck_ = function () {
        return z16n;
      }, z16n;
    }var odz0qy = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
      r6zo['document'] = mpu83j['default'], r6zo['addEventListener'] = function (mpae3u, pmj8u) {
        r6zo['document']['addEventListener'](mpae3u, pmj8u);
      }, r6zo['removeEventListener'] = function (k_x4c, a2gvlb) {
        r6zo['document']['removeEventListener'](k_x4c, a2gvlb);
      }, r6zo['dispatchEvent'] = function () {
        var or6qz = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {};console['log']('window.dispatchEvent', or6qz['type'], or6qz);
      };var j8p4u = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === j8p4u) {
        for (var e2mbal in r6zo) {
          var wth59s = Object['getOwnPropertyDescriptor'](odz0qy, e2mbal);wth59s && !0x0 !== wth59s['configurable'] || Object['defineProperty'](window, e2mbal, { 'value': r6zo[e2mbal] });
        }for (var r0dzo in r6zo['document']) {
          var iht9 = Object['getOwnPropertyDescriptor'](odz0qy['document'], r0dzo);iht9 && !0x0 !== iht9['configurable'] || Object['defineProperty'](odz0qy['document'], r0dzo, { 'value': r6zo['document'][r0dzo] });
        }window['parent'] = window;
      } else {
        for (var k_c4 in r6zo) odz0qy[k_c4] = r6zo[k_c4];odz0qy['window'] = r6zo, window = odz0qy, window['top'] = window['parent'] = window;
      }
    }());
  }, { './HTMLElement': 0x22, './document': 0x2d, './window': 0x33 }], 0x2f: [function (bamle2, z160n, hts) {
    'use strict';

    Object['defineProperty'](hts, '__esModule', { 'value': !0x0 }), hts['default'] = void 0x0;var pu348j = { get 'length'() {
        return wx['getStorageInfoSync']()['keys']['length'];
      }, 'key': function (i9h) {
        return wx['getStorageInfoSync']()['keys'][i9h];
      }, 'getItem': function (e3bp) {
        return wx['getStorageSync'](e3bp);
      }, 'setItem': function (h7$w1i, ap3eu) {
        return wx['setStorageSync'](h7$w1i, ap3eu);
      }, 'removeItem': function (pj83um) {
        wx['removeStorageSync'](pj83um);
      }, 'clear': function () {
        wx['clearStorageSync']();
      } };hts['default'] = pu348j, z160n['exports'] = hts['default'];
  }, {}], 0x30: [function (n1zr60, sth9_, h$7w) {
    'use strict';

    Object['defineProperty'](h$7w, '__esModule', { 'value': !0x0 }), h$7w['default'] = void 0x0;var k_cjx = { 'href': 'game.js', 'reload': function () {} };h$7w['default'] = k_cjx, sth9_['exports'] = h$7w['default'];
  }, {}], 0x31: [function (kx54c_, ukj83, jxck_) {
    'use strict';

    Object['defineProperty'](jxck_, '__esModule', { 'value': !0x0 }), jxck_['default'] = void 0x0;var _c4xk = kx54c_('./util/index.js'),
        e2labm = wx['getSystemInfoSync']();console['log'](e2labm);var k5cx_t = e2labm['system'],
        bal2ev = e2labm['platform'],
        t5h9s_ = e2labm['language'],
        rq6oz = e2labm['version'],
        dqo0zr = -0x1 !== k5cx_t['toLowerCase']()['indexOf']('android') ? 'Android; CPU '['concat'](k5cx_t) : 'iPhone; CPU iPhone OS '['concat'](k5cx_t, ' like Mac OS X'),
        $1wh7 = 'Mozilla/5.0 ('['concat'](dqo0zr, ') AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/')['concat'](rq6oz, ' MiniGame NetType/WIFI Language/')['concat'](t5h9s_),
        w7i1$ = { 'platform': bal2ev, 'language': t5h9s_, 'appVersion': '5.0 ('['concat'](dqo0zr, ') AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'), 'userAgent': $1wh7, 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': _c4xk['noop'], 'watchPosition': _c4xk['noop'], 'clearWatch': _c4xk['noop'] } };wx['onNetworkStatusChange'] && wx['onNetworkStatusChange'](function (sc_tx5) {
      w7i1$['onLine'] = sc_tx5['isConnected'];
    });var q0znr = w7i1$;jxck_['default'] = q0znr, ukj83['exports'] = jxck_['default'];
  }, { './util/index.js': 0x32 }], 0x32: [function (belam, bea2vl, x_ck4j) {
    'use strict';

    Object['defineProperty'](x_ck4j, '__esModule', { 'value': !0x0 }), x_ck4j['noop'] = function () {};
  }, {}], 0x33: [function (u8j4, ct_x5s, i7$1wn) {
    'use strict';

    Object['defineProperty'](i7$1wn, '__esModule', { 'value': !0x0 });var s_ct5 = { 'canvas': !0x0, 'setTimeout': !0x0, 'setInterval': !0x0, 'clearTimeout': !0x0, 'clearInterval': !0x0, 'requestAnimationFrame': !0x0, 'cancelAnimationFrame': !0x0, 'navigator': !0x0, 'XMLHttpRequest': !0x0, 'WebSocket': !0x0, 'Image': !0x0, 'ImageBitmap': !0x0, 'Audio': !0x0, 'FileReader': !0x0, 'HTMLElement': !0x0, 'HTMLImageElement': !0x0, 'HTMLCanvasElement': !0x0, 'HTMLMediaElement': !0x0, 'HTMLAudioElement': !0x0, 'HTMLVideoElement': !0x0, 'WebGLRenderingContext': !0x0, 'TouchEvent': !0x0, 'MouseEvent': !0x0, 'DeviceMotionEvent': !0x0, 'localStorage': !0x0, 'location': !0x0 };Object['defineProperty'](i7$1wn, 'navigator', { 'enumerable': !0x0, 'get': function () {
        return j48cxk['default'];
      } }), Object['defineProperty'](i7$1wn, 'XMLHttpRequest', { 'enumerable': !0x0, 'get': function () {
        return bpa2e['default'];
      } }), Object['defineProperty'](i7$1wn, 'WebSocket', { 'enumerable': !0x0, 'get': function () {
        return a2bemp['default'];
      } }), Object['defineProperty'](i7$1wn, 'Image', { 'enumerable': !0x0, 'get': function () {
        return h9$i7w['default'];
      } }), Object['defineProperty'](i7$1wn, 'ImageBitmap', { 'enumerable': !0x0, 'get': function () {
        return mb3['default'];
      } }), Object['defineProperty'](i7$1wn, 'Audio', { 'enumerable': !0x0, 'get': function () {
        return ni6['default'];
      } }), Object['defineProperty'](i7$1wn, 'FileReader', { 'enumerable': !0x0, 'get': function () {
        return w17n['default'];
      } }), Object['defineProperty'](i7$1wn, 'HTMLElement', { 'enumerable': !0x0, 'get': function () {
        return b3meap['default'];
      } }), Object['defineProperty'](i7$1wn, 'HTMLImageElement', { 'enumerable': !0x0, 'get': function () {
        return bla['default'];
      } }), Object['defineProperty'](i7$1wn, 'HTMLCanvasElement', { 'enumerable': !0x0, 'get': function () {
        return hs5_9['default'];
      } }), Object['defineProperty'](i7$1wn, 'HTMLMediaElement', { 'enumerable': !0x0, 'get': function () {
        return k_x4jc['default'];
      } }), Object['defineProperty'](i7$1wn, 'HTMLAudioElement', { 'enumerable': !0x0, 'get': function () {
        return ckj4_x['default'];
      } }), Object['defineProperty'](i7$1wn, 'HTMLVideoElement', { 'enumerable': !0x0, 'get': function () {
        return $ni167['default'];
      } }), Object['defineProperty'](i7$1wn, 'WebGLRenderingContext', { 'enumerable': !0x0, 'get': function () {
        return eampb2['default'];
      } }), Object['defineProperty'](i7$1wn, 'TouchEvent', { 'enumerable': !0x0, 'get': function () {
        return bap3em['TouchEvent'];
      } }), Object['defineProperty'](i7$1wn, 'MouseEvent', { 'enumerable': !0x0, 'get': function () {
        return bap3em['MouseEvent'];
      } }), Object['defineProperty'](i7$1wn, 'DeviceMotionEvent', { 'enumerable': !0x0, 'get': function () {
        return bap3em['DeviceMotionEvent'];
      } }), Object['defineProperty'](i7$1wn, 'localStorage', { 'enumerable': !0x0, 'get': function () {
        return x4jk_['default'];
      } }), Object['defineProperty'](i7$1wn, 'location', { 'enumerable': !0x0, 'get': function () {
        return t95_sc['default'];
      } }), i7$1wn['cancelAnimationFrame'] = i7$1wn['requestAnimationFrame'] = i7$1wn['clearInterval'] = i7$1wn['clearTimeout'] = i7$1wn['setInterval'] = i7$1wn['setTimeout'] = i7$1wn['canvas'] = void 0x0;var iwh71$ = jc8k4x(u8j4('./Canvas')),
        j48cxk = jc8k4x(u8j4('./navigator')),
        bpa2e = jc8k4x(u8j4('./XMLHttpRequest')),
        a2bemp = jc8k4x(u8j4('./WebSocket')),
        h9$i7w = jc8k4x(u8j4('./Image')),
        mb3 = jc8k4x(u8j4('./ImageBitmap')),
        ni6 = jc8k4x(u8j4('./Audio')),
        w17n = jc8k4x(u8j4('./FileReader')),
        b3meap = jc8k4x(u8j4('./HTMLElement')),
        bla = jc8k4x(u8j4('./HTMLImageElement')),
        hs5_9 = jc8k4x(u8j4('./HTMLCanvasElement')),
        k_x4jc = jc8k4x(u8j4('./HTMLMediaElement')),
        ckj4_x = jc8k4x(u8j4('./HTMLAudioElement')),
        $ni167 = jc8k4x(u8j4('./HTMLVideoElement')),
        eampb2 = jc8k4x(u8j4('./WebGLRenderingContext')),
        bap3em = u8j4('./EventIniter/index.js'),
        x4jk_ = jc8k4x(u8j4('./localStorage')),
        t95_sc = jc8k4x(u8j4('./location')),
        p8eum = u8j4('./WindowProperties');function jc8k4x(g2la) {
      return g2la && g2la['__esModule'] ? g2la : { 'default': g2la };
    }Object['keys'](p8eum)['forEach'](function (s5tc_9) {
      'default' !== s5tc_9 && '__esModule' !== s5tc_9 && (Object['prototype']['hasOwnProperty']['call'](s_ct5, s5tc_9) || Object['defineProperty'](i7$1wn, s5tc_9, { 'enumerable': !0x0, 'get': function () {
          return p8eum[s5tc_9];
        } }));
    }), GameGlobal['screencanvas'] = GameGlobal['screencanvas'] || new iwh71$['default']();var oyqzd0 = GameGlobal['screencanvas'];i7$1wn['canvas'] = oyqzd0;var ump8j3 = GameGlobal,
        ih7ws = ump8j3['setTimeout'],
        l2veba = ump8j3['setInterval'],
        mapeb2 = ump8j3['clearTimeout'],
        pmbe = ump8j3['clearInterval'],
        ku43j8 = ump8j3['requestAnimationFrame'],
        n$zr1 = ump8j3['cancelAnimationFrame'];i7$1wn['cancelAnimationFrame'] = n$zr1, i7$1wn['requestAnimationFrame'] = ku43j8, i7$1wn['clearInterval'] = pmbe, i7$1wn['clearTimeout'] = mapeb2, i7$1wn['setInterval'] = l2veba, i7$1wn['setTimeout'] = ih7ws;
  }, { './Audio': 0x18, './Canvas': 0x19, './EventIniter/index.js': 0x1d, './FileReader': 0x1f, './HTMLAudioElement': 0x20, './HTMLCanvasElement': 0x21, './HTMLElement': 0x22, './HTMLImageElement': 0x23, './HTMLMediaElement': 0x24, './HTMLVideoElement': 0x25, './Image': 0x26, './ImageBitmap': 0x27, './WebGLRenderingContext': 0x29, './WebSocket': 0x2a, './WindowProperties': 0x2b, './XMLHttpRequest': 0x2c, './localStorage': 0x2f, './location': 0x30, './navigator': 0x31 }], 0x34: [function (rn1$6, eamb2p, yzodq) {
    'use strict';

    !function () {
      if (cc && cc['VideoPlayer'] && cc['VideoPlayer']['Impl'] && __globalAdapter['createVideo']) {
        var qr0z6 = cc['Mat4'],
            eambl = cc['mat4'](),
            bp3 = cc['mat4'](),
            s_tx = cc['VideoPlayer']['Impl'],
            rzod0 = cc['VideoPlayer']['Impl']['prototype'];cc['VideoPlayer']['prototype']['_updateVideoSource'] = function () {
          var $167rn = this,
              x5s_ = this['_clip'];this['resourceType'] === cc['VideoPlayer']['ResourceType']['REMOTE'] ? this['_impl']['setURL'](this['remoteURL'], this['_mute'] || 0x0 === this['_volume']) : x5s_ && (x5s_['_nativeAsset'] ? this['_impl']['setURL'](x5s_['_nativeAsset'], this['_mute'] || 0x0 === this['_volume']) : cc['loader']['load'](x5s_['nativeUrl'], function (kxc5_4, _cx5k) {
            kxc5_4 ? console['error'](kxc5_4) : (x5s_['_nativeAsset'] = _cx5k, $167rn['_impl']['setURL'](_cx5k, $167rn['_mute'] || 0x0 === $167rn['_volume']));
          }));
        }, rzod0['_bindEvent'] = function () {
          var eb3pa = this['_video'],
              zr$6n = this;eb3pa && (eb3pa['onPlay'](function () {
            zr$6n['_video'] === eb3pa && (zr$6n['_playing'] = !0x0, zr$6n['_dispatchEvent'](s_tx['EventType']['PLAYING']));
          }), eb3pa['onEnded'](function () {
            zr$6n['_video'] === eb3pa && (zr$6n['_playing'] = !0x1, zr$6n['_currentTime'] = zr$6n['_duration'], zr$6n['_dispatchEvent'](s_tx['EventType']['COMPLETED']));
          }), eb3pa['onPause'](function () {
            zr$6n['_video'] === eb3pa && (zr$6n['_playing'] = !0x1, zr$6n['_dispatchEvent'](s_tx['EventType']['PAUSED']));
          }), eb3pa['onTimeUpdate'](function (_s59) {
            zr$6n['_duration'] = _s59['duration'], zr$6n['_currentTime'] = _s59['position'];
          }));
        }, rzod0['_unbindEvent'] = function () {
          var qzo0r6 = this['_video'];qzo0r6 && (qzo0r6['offPlay'](), qzo0r6['offEnded'](), qzo0r6['offPause'](), qzo0r6['offTimeUpdate']());
        }, rzod0['setVisible'] = function (p43j8u) {
          var u438kj = this['_video'];u438kj && this['_visible'] !== p43j8u && (u438kj['width'] = p43j8u && this['_actualWidth'] || 0x0, this['_visible'] = p43j8u);
        }, rzod0['createDomElementIfNeeded'] = function () {
          __globalAdapter['createVideo'] ? this['_video'] || (this['_video'] = __globalAdapter['createVideo'](), this['_video']['showCenterPlayBtn'] = !0x1, this['_video']['controls'] = !0x1, this['_duration'] = -0x1, this['_currentTime'] = -0x1, this['_loaded'] = !0x1, this['setVisible'](!0x1), this['_bindEvent']()) : cc['warn']('VideoPlayer not supported');
        }, rzod0['setURL'] = function (ni$761) {
          var w17$ih = this['_video'];if (w17$ih && w17$ih['src'] !== ni$761) {
            w17$ih['stop'](), this['_unbindEvent'](), w17$ih['autoplay'] = !0x0, w17$ih['src'] = ni$761, w17$ih['muted'] = !0x0;var _xj4kc = this;this['_loaded'] = !0x1, w17$ih['onPlay'](function () {
              w17$ih['offPlay'](), _xj4kc['_bindEvent'](), w17$ih['stop'](), w17$ih['muted'] = !0x1, _xj4kc['_loaded'] = !0x0, _xj4kc['_playing'] = !0x1, _xj4kc['_currentTime'] = 0x0, _xj4kc['_dispatchEvent'](s_tx['EventType']['READY_TO_PLAY']), w17$ih['autoplay'] = !0x1;
            });
          }
        }, rzod0['getURL'] = function () {
          var jp4u3 = this['_video'];return jp4u3 ? jp4u3['src'] : '';
        }, rzod0['play'] = function () {
          var gb2va = this['_video'];gb2va && this['_visible'] && !this['_playing'] && gb2va['play']();
        }, rzod0['setStayOnBottom'] = function (jp8u3) {}, rzod0['pause'] = function () {
          var ni$6 = this['_video'];this['_playing'] && ni$6 && ni$6['pause']();
        }, rzod0['resume'] = function () {
          var wt5sh = this['_video'];!this['_playing'] && wt5sh && wt5sh['play']();
        }, rzod0['stop'] = function () {
          var gl2 = this,
              nr6z1 = this['_video'];nr6z1 && this['_visible'] && nr6z1['stop']()['then'](function (z1r60) {
            !z1r60['errMsg'] || z1r60['errMsg']['includes']('ok') ? (gl2['_currentTime'] = 0x0, nr6z1['seek'](0x0), gl2['_playing'] = !0x1, gl2['_dispatchEvent'](s_tx['EventType']['STOPPED'])) : console['error']('failed to stop video player');
          });
        }, rzod0['setVolume'] = function (t_sc95) {}, rzod0['seekTo'] = function (rzqdo0) {
          var roq0dz = this['_video'];roq0dz && this['_loaded'] && roq0dz['seek'](rzqdo0);
        }, rzod0['isPlaying'] = function () {
          return this['_playing'];
        }, rzod0['duration'] = function () {
          return this['_duration'];
        }, rzod0['currentTime'] = function () {
          return this['_currentTime'];
        }, rzod0['setKeepAspectRatioEnabled'] = function (s59_th) {
          console['warn']('On wechat game videoPlayer is always keep the aspect ratio');
        }, rzod0['isKeepAspectRatioEnabled'] = function () {
          return !0x0;
        }, rzod0['isFullScreenEnabled'] = function () {
          return this['_fullScreenEnabled'];
        }, rzod0['setFullScreenEnabled'] = function (htwi9s) {
          var xc_kj4 = this['_video'];xc_kj4 && this['_fullScreenEnabled'] !== htwi9s && (htwi9s ? xc_kj4['requestFullScreen']() : xc_kj4['exitFullScreen'](), this['_fullScreenEnabled'] = htwi9s);
        }, rzod0['enable'] = function () {
          this['setVisible'](!0x0);
        }, rzod0['disable'] = function () {
          this['_playing'] && this['_video']['pause'](), this['setVisible'](!0x1);
        }, rzod0['destroy'] = function () {
          this['disable'](), this['_unbindEvent'](), this['_video'] && (this['_video']['destroy'](), this['_video'] = void 0x0);
        }, rzod0['updateMatrix'] = function ($hw97i) {
          if (this['_video'] && this['_visible'] && ($hw97i['getWorldMatrix'](eambl), this['_m00'] !== eambl['m'][0x0] || this['_m01'] !== eambl['m'][0x1] || this['_m04'] !== eambl['m'][0x4] || this['_m05'] !== eambl['m'][0x5] || this['_m12'] !== eambl['m'][0xc] || this['_m13'] !== eambl['m'][0xd] || this['_w'] !== $hw97i['_contentSize']['width'] || this['_h'] !== $hw97i['_contentSize']['height'])) {
            this['_m00'] = eambl['m'][0x0], this['_m01'] = eambl['m'][0x1], this['_m04'] = eambl['m'][0x4], this['_m05'] = eambl['m'][0x5], this['_m12'] = eambl['m'][0xc], this['_m13'] = eambl['m'][0xd], this['_w'] = $hw97i['_contentSize']['width'], this['_h'] = $hw97i['_contentSize']['height'], cc['Camera']['findCamera']($hw97i)['getWorldToScreenMatrix2D'](bp3), qr0z6['multiply'](bp3, bp3, eambl);var a2pe = cc['view']['_scaleX'],
                oqd = cc['view']['_scaleY'],
                c4jx8k = cc['view']['_devicePixelRatio'];a2pe /= c4jx8k, oqd /= c4jx8k;var mju83p = bp3['m'][0x0] * a2pe,
                in$w1 = bp3['m'][0x5] * oqd,
                p2em = this['_w'] * mju83p,
                wt95hs = this['_h'] * in$w1,
                mpua3e = p2em * $hw97i['_anchorPoint']['x'],
                n$w71i = wt95hs * $hw97i['_anchorPoint']['y'],
                rzd0q = cc['view']['_viewportRect'],
                d0ro = rzd0q['x'] / c4jx8k,
                roqd0z = rzd0q['y'] / c4jx8k,
                puj4 = bp3['m'][0xc] * a2pe - mpua3e + d0ro,
                n$67 = bp3['m'][0xd] * oqd - n$w71i + roqd0z,
                _5h9st = cc['view']['getFrameSize']()['height'];this['_video']['x'] = puj4, this['_video']['y'] = _5h9st - wt95hs - n$67, this['_actualWidth'] = this['_video']['width'] = p2em, this['_video']['height'] = wt95hs;
          }
        };
      }
    }();
  }, {}], 0x35: [function (nz10r6, $76ni, sh9wti) {
    'use strict';

    nz10r6('./VideoPlayer'), nz10r6('./pc-adapter');
  }, { './VideoPlayer': 0x34, './pc-adapter': 0x36 }], 0x36: [function (rzq0o, i9twsh, puma) {
    'use strict';

    var pbe2a = wx['getSystemInfoSync'](),
        q0rz6 = cc['internal']['inputManager'],
        $rn6z = cc['internal']['eventManager'],
        r6q0zn = cc['Event']['EventKeyboard'],
        w17ni = cc['Event']['EventMouse'],
        m8up = { 'backspace': 0x8, 'tab': 0x9, 'enter': 0xd, 'shift': 0x10, 'control': 0x11, 'alt': 0x12, 'pause': 0x13, 'capslock': 0x14, 'escape': 0x1b, '\x20': 0x20, 'pageup': 0x21, 'pagedown': 0x22, 'end': 0x23, 'home': 0x24, 'arrowleft': 0x25, 'arrowup': 0x26, 'arrowright': 0x27, 'arrowdown': 0x28, 'insert': 0x2d, 'a': 0x41, 'b': 0x42, 'c': 0x43, 'd': 0x44, 'e': 0x45, 'f': 0x46, 'g': 0x47, 'h': 0x48, 'i': 0x49, 'j': 0x4a, 'k': 0x4b, 'l': 0x4c, 'm': 0x4d, 'n': 0x4e, 'o': 0x4f, 'p': 0x50, 'q': 0x51, 'r': 0x52, 's': 0x53, 't': 0x54, 'u': 0x55, 'v': 0x56, 'w': 0x57, 'x': 0x58, 'y': 0x59, 'z': 0x5a, '*': 0x6a, '+': 0x6b, '-': 0x6d, '/': 0x6f, 'f1': 0x70, 'f2': 0x71, 'f3': 0x72, 'f4': 0x73, 'f5': 0x74, 'f6': 0x75, 'f7': 0x76, 'f8': 0x77, 'f9': 0x78, 'f10': 0x79, 'f11': 0x7a, 'f12': 0x7b, 'numlock': 0x90, 'scrolllock': 0x91, ';': 0xba, '=': 0xbb, ',': 0xbc, '.': 0xbe, '`': 0xc0, '[': 0xdb, '\x5c': 0xdc, ']': 0xdd, '\x27': 0xde },
        ev2lab = { 'Delete': 0x2e, 'Digit0': 0x30, 'Digit1': 0x31, 'Digit2': 0x32, 'Digit3': 0x33, 'Digit4': 0x34, 'Digit5': 0x35, 'Digit6': 0x36, 'Digit7': 0x37, 'Digit8': 0x38, 'Digit9': 0x39, 'Numpad0': 0x60, 'Numpad1': 0x61, 'Numpad2': 0x62, 'Numpad3': 0x63, 'Numpad4': 0x64, 'Numpad5': 0x65, 'Numpad6': 0x66, 'Numpad7': 0x67, 'Numpad8': 0x68, 'Numpad9': 0x69, 'NumpadDecimal': 0x6e };function r6qnz0(hw9s5t) {
      var x8kuj4 = hw9s5t['key']['toLowerCase'](),
          u8em3 = hw9s5t['code'];return (/^\d$/['test'](x8kuj4) || 'delete' === x8kuj4 ? ev2lab[u8em3] : m8up[x8kuj4] || 0x0
      );
    }'windows' === pbe2a['platform'] && (q0rz6['registerSystemEvent'] = function () {
      var yz0dq;this['_isRegisterEvent'] || (this['_glView'] = cc['view'], wx['onKeyDown'](function (r1nz6) {
        return $rn6z['dispatchEvent'](new r6q0zn(r6qnz0(r1nz6), !0x0));
      }), wx['onKeyUp'](function (aelvb) {
        return $rn6z['dispatchEvent'](new r6q0zn(r6qnz0(aelvb), !0x1));
      }), yz0dq = { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] }, bvlea2('onMouseDown', w17ni['DOWN'], function ($in67, r$zn6) {
        q0rz6['_mousePressed'] = !0x0, q0rz6['handleTouchesBegin']([q0rz6['getTouchByXY']($in67['x'], $in67['y'], yz0dq)]);
      }), bvlea2('onMouseUp', w17ni['UP'], function (qz0o6, $r61) {
        q0rz6['_mousePressed'] = !0x1, q0rz6['handleTouchesEnd']([q0rz6['getTouchByXY'](qz0o6['x'], qz0o6['y'], yz0dq)]);
      }), bvlea2('onMouseMove', w17ni['MOVE'], function (pu4j83, mpuj8) {
        q0rz6['handleTouchesMove']([q0rz6['getTouchByXY'](pu4j83['x'], pu4j83['y'], yz0dq)]), q0rz6['_mousePressed'] || mpuj8['setButton'](null);
      }), bvlea2('onWheel', w17ni['SCROLL'], function (r6z0nq, c_9) {
        c_9['setScrollData'](0x0, -r6z0nq['deltaY']);
      }), this['_isRegisterEvent'] = !0x0);function bvlea2(u3pj48, al2bv, doqrz0) {
        wx[u3pj48](function (h1$iw7) {
          var pmuj8 = q0rz6['getMouseEvent'](h1$iw7, yz0dq, al2bv);pmuj8['setButton'](h1$iw7['button'] || 0x0), doqrz0(h1$iw7, pmuj8), $rn6z['dispatchEvent'](pmuj8);
        });
      }
    });
  }, {}], 0x37: [function (nz10, wih97s, c4x8) {
    'use strict';

    var hsw9t = wx['getFileSystemManager'] ? wx['getFileSystemManager']() : null;function abme2l() {
      return hsw9t ? null : (console['warn']('can not get the file system!'), new Error('file system does not exist!'));
    }function wh7is9(h95stw, kcj4_x) {
      var $i9wh7 = abme2l();if ($i9wh7) return $i9wh7;hsw9t['unlink']({ 'filePath': h95stw, 'success': function () {
          cc['log']('Removed local file ' + h95stw + ' successfully!'), kcj4_x && kcj4_x(null);
        }, 'fail': function (rn$6z1) {
          console['warn'](rn$6z1['errMsg']), kcj4_x && kcj4_x(new Error(rn$6z1['errMsg']));
        } });
    }function yzdoq(_9hst5, swht, puj83) {
      var up8j3m = abme2l();if (up8j3m) return up8j3m;hsw9t['readFile']({ 'filePath': _9hst5, 'encoding': swht, 'success': puj83 ? function (nzr16) {
          puj83(null, nzr16['data']);
        } : void 0x0, 'fail': function (u8k) {
          console['warn'](u8k['errMsg']), puj83 && puj83(new Error(u8k['errMsg']), null);
        } });
    }window['fsUtils'] = wih97s['exports'] = { 'fs': hsw9t, 'getUserDataPath': function () {
        return wx['env']['USER_DATA_PATH'];
      }, 'checkFsValid': abme2l, 'readDir': function (ebla2v, doqz) {
        var r0zqdo = abme2l();if (r0zqdo) return r0zqdo;hsw9t['readdir']({ 'dirPath': ebla2v, 'success': doqz ? function (r0zd) {
            doqz(null, r0zd['files']);
          } : void 0x0, 'fail': doqz ? function (lba2ve) {
            doqz(new Error(lba2ve['errMsg']), null);
          } : void 0x0 });
      }, 'exists': function (h_5t9, bpe3am) {
        var u43kj8 = abme2l();if (u43kj8) return u43kj8;hsw9t['access']({ 'path': h_5t9, 'success': bpe3am ? function () {
            bpe3am(!0x0);
          } : void 0x0, 'fail': bpe3am ? function () {
            bpe3am(!0x1);
          } : void 0x0 });
      }, 'copyFile': function (ni76, z$16, si9th) {
        var uxk4j8 = abme2l();if (uxk4j8) return uxk4j8;hsw9t['copyFile']({ 'srcPath': ni76, 'destPath': z$16, 'success': function () {
            cc['log']('copy file finished:' + z$16), si9th && si9th(null);
          }, 'fail': function (p3jum8) {
            cc['log']('copy file failed:' + p3jum8['errMsg']), si9th && si9th(new Error(p3jum8['errMsg']));
          } });
      }, 'downloadFile': function (aepm, wn$71i, j8u4p3) {
        wx['downloadFile']({ 'url': aepm, 'filePath': wn$71i, 'success': function (n6$i71) {
            0xc8 === n6$i71['statusCode'] ? j8u4p3 && j8u4p3(null, n6$i71['tempFilePath'] || n6$i71['filePath']) : (n6$i71['filePath'] && wh7is9(n6$i71['filePath']), console['warn']('Download file failed: ' + aepm), j8u4p3 && j8u4p3(new Error(n6$i71['errMsg']), null));
          }, 'fail': function (hstiw9) {
            console['warn'](hstiw9['errMsg']), j8u4p3 && j8u4p3(new Error(hstiw9['errMsg']), null);
          } });
      }, 'readText': function (r1z06, c5_9) {
        return yzdoq(r1z06, 'utf8', c5_9);
      }, 'readArrayBuffer': function (p3mea, k3u48j) {
        return yzdoq(p3mea, '', k3u48j);
      }, 'saveFile': function (nr6zq, bv2ela, yod0zq) {
        wx['saveFile']({ 'tempFilePath': nr6zq, 'filePath': bv2ela, 'success': function (tshw5) {
            cc['log']('save file finished:' + bv2ela), yod0zq && yod0zq(null, tshw5['savedFilePath']);
          }, 'fail': function (kcxt_) {
            cc['log']('save file failed:' + kcxt_['errMsg']), yod0zq && yod0zq(new Error(kcxt_['errMsg']), null);
          } });
      }, 'writeFile': function (m2aep, z1n0r, nz06r, b2laem) {
        var dorz0 = abme2l();if (dorz0) return dorz0;hsw9t['writeFile']({ 'filePath': m2aep, 'encoding': nz06r, 'data': z1n0r, 'success': b2laem ? function () {
            b2laem(null);
          } : void 0x0, 'fail': function (mebp3a) {
            console['warn'](mebp3a['errMsg']), b2laem && b2laem(new Error(mebp3a['errMsg']));
          } });
      }, 'deleteFile': wh7is9, 'writeFileSync': function ($6rn1, h7$1, hs9tiw) {
        var t5x_sc = abme2l();if (t5x_sc) return t5x_sc;try {
          return hsw9t['writeFileSync']($6rn1, h7$1, hs9tiw), null;
        } catch (nrq6z0) {
          return console['warn'](nrq6z0['message']), new Error(nrq6z0['message']);
        }
      }, 'readJsonSync': function (_t5xc) {
        var xk_jc4 = abme2l();if (xk_jc4) return xk_jc4;try {
          var hwi97s = hsw9t['readFileSync'](_t5xc, 'utf8');return JSON['parse'](hwi97s);
        } catch (jm83u) {
          return console['warn'](jm83u['message']), new Error(jm83u['message']);
        }
      }, 'makeDirSync': function (mp2bea, $hwi71) {
        var zodq0y = abme2l();if (zodq0y) return zodq0y;try {
          return hsw9t['mkdirSync'](mp2bea, $hwi71), null;
        } catch (e83) {
          return console['warn'](e83['message']), new Error(e83['message']);
        }
      } };
  }, {}], 0x38: [function (sth5_9, ws5h, ozdyq0) {
    'use strict';

    var pujm8 = window['__globalAdapter'],
        oz6 = wx['getSystemInfoSync'](),
        mp3aeb = pujm8['adaptSys'];Object['assign'](pujm8, { 'adaptSys': function (ble2av) {
        if (mp3aeb['call'](this, ble2av), 'windows' === oz6['platform']) ble2av['isMobile'] = !0x1, ble2av['os'] = ble2av['OS_WINDOWS'];else {
          if ('devtools' === oz6['platform']) {
            var d0yoz = oz6['system']['toLowerCase']();-0x1 < d0yoz['indexOf']('android') ? ble2av['os'] = ble2av['OS_ANDROID'] : -0x1 < d0yoz['indexOf']('ios') && (ble2av['os'] = ble2av['OS_IOS']);
          }
        }wx['getOpenDataContext'] ? (ble2av['platform'] = ble2av['WECHAT_GAME'], ble2av['browserType'] = ble2av['BROWSER_TYPE_WECHAT_GAME']) : (ble2av['platform'] = ble2av['WECHAT_GAME_SUB'], ble2av['browserType'] = ble2av['BROWSER_TYPE_WECHAT_GAME_SUB']), ble2av['glExtension'] = function (j83pm) {
          return 'OES_texture_float' !== j83pm && !!cc['renderer']['device']['ext'](j83pm);
        };
      } });
  }, {}], 0x39: [function (j_ckx, b2aglv, rz60oq) {
    'use strict';

    var oyq0 = j_ckx('../../../common/utils');if (window['__globalAdapter']) {
      var q6o0zr = window['__globalAdapter'];oyq0['cloneMethod'](q6o0zr, wx, 'getSystemInfoSync'), oyq0['cloneMethod'](q6o0zr, wx, 'onTouchStart'), oyq0['cloneMethod'](q6o0zr, wx, 'onTouchMove'), oyq0['cloneMethod'](q6o0zr, wx, 'onTouchEnd'), oyq0['cloneMethod'](q6o0zr, wx, 'onTouchCancel'), oyq0['cloneMethod'](q6o0zr, wx, 'createInnerAudioContext'), oyq0['cloneMethod'](q6o0zr, wx, 'createVideo'), oyq0['cloneMethod'](q6o0zr, wx, 'setPreferredFramesPerSecond'), oyq0['cloneMethod'](q6o0zr, wx, 'showKeyboard'), oyq0['cloneMethod'](q6o0zr, wx, 'hideKeyboard'), oyq0['cloneMethod'](q6o0zr, wx, 'updateKeyboard'), oyq0['cloneMethod'](q6o0zr, wx, 'onKeyboardInput'), oyq0['cloneMethod'](q6o0zr, wx, 'onKeyboardConfirm'), oyq0['cloneMethod'](q6o0zr, wx, 'onKeyboardComplete'), oyq0['cloneMethod'](q6o0zr, wx, 'offKeyboardInput'), oyq0['cloneMethod'](q6o0zr, wx, 'offKeyboardConfirm'), oyq0['cloneMethod'](q6o0zr, wx, 'offKeyboardComplete'), oyq0['cloneMethod'](q6o0zr, wx, 'getOpenDataContext'), oyq0['cloneMethod'](q6o0zr, wx, 'onMessage'), q6o0zr['isSubContext'] = void 0x0 === q6o0zr['getOpenDataContext'], oyq0['cloneMethod'](q6o0zr, wx, 'loadSubpackage'), oyq0['cloneMethod'](q6o0zr, wx, 'getSharedCanvas'), oyq0['cloneMethod'](q6o0zr, wx, 'loadFont'), oyq0['cloneMethod'](q6o0zr, wx, 'onShow'), oyq0['cloneMethod'](q6o0zr, wx, 'onHide'), oyq0['cloneMethod'](q6o0zr, wx, 'onError'), oyq0['cloneMethod'](q6o0zr, wx, 'offError');var c_xkj4 = !0x1,
          win1$ = 0x1,
          _kxc4 = wx['getSystemInfoSync'](),
          htsw9i = _kxc4['windowWidth'],
          mp3j = _kxc4['windowHeight'] < htsw9i;wx['onDeviceOrientationChange'] && wx['onDeviceOrientationChange'](function (n61i$7) {
        'landscape' === n61i$7['value'] ? win1$ = 0x1 : 'landscapeReverse' === n61i$7['value'] && (win1$ = -0x1);
      }), Object['assign'](q6o0zr, { 'startAccelerometer': function (w$9h7i) {
          c_xkj4 ? wx['startAccelerometer'] && wx['startAccelerometer']({ 'fail': function (h9stw) {
              console['error']('start accelerometer failed', h9stw);
            } }) : (c_xkj4 = !0x0, wx['onAccelerometerChange'] && wx['onAccelerometerChange'](function (x4j_kc) {
            var ujx4k = {},
                eabml2 = x4j_kc['x'],
                bela = x4j_kc['y'];if (mp3j) {
              var $h79w = eabml2;eabml2 = -bela, bela = $h79w;
            }ujx4k['x'] = eabml2 * win1$, ujx4k['y'] = bela * win1$, ujx4k['z'] = x4j_kc['z'], w$9h7i && w$9h7i(ujx4k);
          }));
        }, 'stopAccelerometer': function () {
          wx['stopAccelerometer'] && wx['stopAccelerometer']({ 'fail': function (rqz0o) {
              console['error']('stop accelerometer failed', rqz0o);
            } });
        } });
    }
  }, { '../../../common/utils': 0x12 }] }, {}, [0x17]);