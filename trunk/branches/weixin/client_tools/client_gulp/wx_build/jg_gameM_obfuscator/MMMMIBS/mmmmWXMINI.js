var Y = wx.$M;
(function (window, document, fb0) {
  var xuy9k1 = fb0['un'],
      gcoa86 = fb0['uns'],
      e28tzp = fb0['static'],
      rvfwbd = fb0['class'],
      d5l0b = fb0['getset'],
      dfwbr = fb0['__newvec'],
      rwbf9 = laya['utils']['Browser'],
      xqu1y = laya['events']['Event'],
      rv9bf = laya['events']['EventDispatcher'],
      rfvdw = laya['resource']['HTMLImage'],
      w0l = laya['utils']['Handler'],
      wbvr9 = laya['display']['Input'],
      sg46ao = laya['net']['Loader'],
      lnm = laya['maths']['Matrix'],
      tce8a = laya['renders']['Render'],
      lihn5 = laya['utils']['RunDriver'],
      e8tz2 = laya['media']['Sound'],
      ocsag = laya['media']['SoundChannel'],
      lb50 = laya['media']['SoundManager'],
      kquyx = laya['display']['Stage'],
      osca6g = laya['net']['URL'],
      ji7m = laya['utils']['Utils'],
      ld05$ = function () {
    function dlwb() {}return rvfwbd(dlwb, 'laya.wx.mini.MiniAdpter'), dlwb['getJson'] = function (x1kr9u) {
      return JSON['parse'](x1kr9u);
    }, dlwb['init'] = function (ni0$, j7inhm) {
      ni0$ === void 0x0 && (ni0$ = ![]), j7inhm === void 0x0 && (j7inhm = ![]);if (dlwb['_inited']) return;dlwb['window'] = window;if (dlwb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;dlwb['_inited'] = !![], dlwb['isZiYu'] = j7inhm, dlwb['isPosMsgYu'] = ni0$, dlwb['EnvConfig'] = {}, !dlwb['isZiYu'] && (tz82ec['setNativeFileDir']('/layaairGame'), tz82ec['existDir'](tz82ec['fileNativeDir'], w0l['create'](dlwb, dlwb['onMkdirCallBack']))), dlwb['window']['focus'] = function () {}, fb0['getUrlPath'] = function () {}, dlwb['window']['logtime'] = function (cao6gs) {}, dlwb['window']['alertTimeLog'] = function (il5n0) {}, dlwb['window']['resetShareInfo'] = function () {}, dlwb['window']['CanvasRenderingContext2D'] = function () {}, dlwb['window']['CanvasRenderingContext2D']['prototype'] = dlwb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dlwb['window']['document']['body']['appendChild'] = function () {}, dlwb['EnvConfig']['pixelRatioInt'] = 0x0, lihn5['getPixelRatio'] = dlwb['pixelRatio'], dlwb['_preCreateElement'] = rwbf9['createElement'], rwbf9['createElement'] = dlwb['createElement'], lihn5['createShaderCondition'] = dlwb['createShaderCondition'], ji7m['parseXMLFromString'] = dlwb['parseXMLFromString'], wbvr9['_createInputElement'] = j46_s['_createInputElement'], dlwb['EnvConfig']['load'] = sg46ao['prototype']['load'], sg46ao['prototype']['load'] = lb$w0['prototype']['load'], dlwb['isZiYu'] && ni0$ && wx['onMessage'](function ($iln05) {
        $iln05['isLoad'] && (tz82ec['ziyuFileData'][$iln05['url']] = $iln05['data']);
      });
    }, dlwb['onMkdirCallBack'] = function ($wbd0l, x91yku) {
      if (!$wbd0l) tz82ec['filesListObj'] = JSON['parse'](x91yku['data']);
    }, dlwb['pixelRatio'] = function () {
      if (!dlwb['EnvConfig']['pixelRatioInt']) try {
        var ykxq3 = wx['getSystemInfoSync']();return dlwb['EnvConfig']['pixelRatioInt'] = ykxq3['pixelRatio'], ykxq3 = ykxq3, ykxq3['pixelRatio'];
      } catch (_j4s6) {}return dlwb['EnvConfig']['pixelRatioInt'];
    }, dlwb['createElement'] = function (u19kr) {
      if (u19kr == 'canvas') {
        var _hjm;return dlwb['idx'] == 0x1 ? dlwb['isZiYu'] ? (_hjm = sharedCanvas, _hjm['style'] = {}) : _hjm = window['canvas'] : _hjm = window['wx']['createCanvas'](), dlwb['idx']++, _hjm;
      } else {
        if (u19kr == 'textarea' || u19kr == 'input') return dlwb['onCreateInput'](u19kr);else {
          if (u19kr == 'div') {
            var lih05n = dlwb['_preCreateElement'](u19kr);return lih05n['contains'] = function (rk1x9) {
              return null;
            }, lih05n['removeChild'] = function (ldw0b$) {}, lih05n;
          } else return dlwb['_preCreateElement'](u19kr);
        }
      }
    }, dlwb['onCreateInput'] = function (fr1wv9) {
      var $l0wd = dlwb['_preCreateElement'](fr1wv9);return $l0wd['focus'] = j46_s['wxinputFocus'], $l0wd['blur'] = j46_s['wxinputblur'], $l0wd['style'] = {}, $l0wd['value'] = 0x0, $l0wd['parentElement'] = {}, $l0wd['placeholder'] = {}, $l0wd['type'] = {}, $l0wd['setColor'] = function (xu1ykq) {}, $l0wd['setType'] = function (fbr9) {}, $l0wd['setFontFace'] = function (u1ky9x) {}, $l0wd['addEventListener'] = function (ag8c2) {}, $l0wd['contains'] = function (eocg8a) {
        return null;
      }, $l0wd['removeChild'] = function (ihl0n5) {}, $l0wd;
    }, dlwb['createShaderCondition'] = function (q1uxk) {
      var id5l$0 = this,
          kqyxu3 = function () {
        var fwrv91 = q1uxk;return id5l$0[q1uxk['replace']('this.', '')];
      };return kqyxu3;
    }, dlwb['EnvConfig'] = null, dlwb['window'] = null, dlwb['_preCreateElement'] = null, dlwb['_inited'] = ![], dlwb['wxRequest'] = null, dlwb['systemInfo'] = null, dlwb['version'] = '0.0.1', dlwb['isZiYu'] = ![], dlwb['isPosMsgYu'] = ![], dlwb['parseXMLFromString'] = function (ec8a2g) {
      var j_7mn, n0hil5;ec8a2g = ec8a2g['replace'](/>\s+</g, '><');try {
        j_7mn = new window['Parser']['DOMParser']()['parseFromString'](ec8a2g, 'text/xml');
      } catch (eacgo8) {
        throw '需要引入xml解析库文件';
      }return j_7mn;
    }, dlwb['idx'] = 0x1, dlwb;
  }(),
      $ld05 = function () {
    function ld0$i5() {}rvfwbd(ld0$i5, 'laya.wx.mini.MiniImage');var vdwbfr = ld0$i5['prototype'];return vdwbfr['_loadImage'] = function (vdfw$) {
      var li50d$ = this,
          f1v9wr = ![];vdfw$['indexOf']('layaNativeDir/') == -0x1 && (f1v9wr = !![], vdfw$ = osca6g['formatURL'](vdfw$));if (!tz82ec['getFileInfo'](vdfw$)) {
        if (vdfw$['indexOf']('http://') != -0x1 || vdfw$['indexOf']('https://') != -0x1) tz82ec['downImg'](vdfw$, new w0l(ld0$i5, ld0$i5['onDownImgCallBack'], [vdfw$, li50d$]), vdfw$);else ld0$i5['onCreateImage'](vdfw$, li50d$, !![]);
      } else ld0$i5['onCreateImage'](vdfw$, li50d$, !f1v9wr);
    }, ld0$i5['onDownImgCallBack'] = function (_jnhm, dvfwb, hnij) {
      if (!hnij) ld0$i5['onCreateImage'](_jnhm, dvfwb);else dvfwb['onError'](null);
    }, ld0$i5['onCreateImage'] = function (mij5h, in5$l0, msj74_) {
      msj74_ === void 0x0 && (msj74_ = ![]);var o_s647;if (!msj74_) {
        var w0l$ = tz82ec['getFileInfo'](mij5h),
            xr9u = w0l$['md5'];o_s647 = tz82ec['getFileNativePath'](xr9u);
      } else o_s647 = mij5h;if (in5$l0['imgCache'] == null) in5$l0['imgCache'] = {};var tc8a2e;function vwd$b() {
        tc8a2e['onload'] = null, tc8a2e['onerror'] = null, delete in5$l0['imgCache'][mij5h];
      };var x9r1v = function () {
        vwd$b(), in5$l0['onLoaded'](tc8a2e);
      },
          inh5mj = function () {
        vwd$b(), in5$l0['event']('error', 'Load image failed');
      };in5$l0['_type'] == 'nativeimage' ? (tc8a2e = new rwbf9['window']['Image'](), tc8a2e['crossOrigin'] = '', tc8a2e['onload'] = x9r1v, tc8a2e['onerror'] = inh5mj, tc8a2e['src'] = o_s647, in5$l0['imgCache'][mij5h] = tc8a2e) : new rfvdw['create'](o_s647, { 'onload': x9r1v, 'onerror': inh5mj, 'onCreate': function (ih5ml) {
          tc8a2e = ih5ml, in5$l0['imgCache'][mij5h] = ih5ml;
        } });
    }, ld0$i5;
  }(),
      j46_s = function () {
    function dv$w() {}return rvfwbd(dv$w, 'laya.wx.mini.MiniInput'), dv$w['_createInputElement'] = function () {
      wbvr9['_initInput'](wbvr9['area'] = rwbf9['createElement']('textarea')), wbvr9['_initInput'](wbvr9['input'] = rwbf9['createElement']('input')), wbvr9['inputContainer'] = rwbf9['createElement']('div'), wbvr9['inputContainer']['style']['position'] = 'absolute', wbvr9['inputContainer']['style']['zIndex'] = 0x186a0, rwbf9['container']['appendChild'](wbvr9['inputContainer']), wbvr9['inputContainer']['setPos'] = function (n_jhm, di) {
        wbvr9['inputContainer']['style']['left'] = n_jhm + 'px', wbvr9['inputContainer']['style']['top'] = di + 'px';
      }, fb0['stage']['on']('resize', null, dv$w['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (uyx) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), lb50['_soundClass'] = b0dl$, lb50['_musicClass'] = b0dl$;
    }, dv$w['_onStageResize'] = function () {
      var cea2t8 = fb0['stage']['_canvasTransform']['identity']();cea2t8['scale'](rwbf9['width'] / tce8a['canvas']['width'] / lihn5['getPixelRatio'](), rwbf9['height'] / tce8a['canvas']['height'] / lihn5['getPixelRatio']());
    }, dv$w['wxinputFocus'] = function (bfdrwv) {
      var c28tea = wbvr9['inputElement']['target'];if (c28tea && !c28tea['editable']) return;ld05$['window']['wx']['offKeyboardConfirm'](), ld05$['window']['wx']['offKeyboardInput'](), ld05$['window']['wx']['showKeyboard']({ 'defaultValue': c28tea['text'], 'maxLength': c28tea['maxChars'], 'multiple': c28tea['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yk1qxu) {}, 'fail': function (ageoc) {} }), ld05$['window']['wx']['onKeyboardConfirm'](function ($w0df) {
        var n_j7hm = $w0df ? $w0df['value'] : '';c28tea['text'] = n_j7hm, c28tea['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ld05$['window']['wx']['onKeyboardInput'](function (yq1u) {
        var tzpe8 = yq1u ? yq1u['value'] : '';if (!c28tea['multiline']) {
          if (tzpe8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }c28tea['text'] = tzpe8, c28tea['event']('input');
      });
    }, dv$w['inputEnter'] = function () {
      wbvr9['inputElement']['target']['focus'] = ![];
    }, dv$w['wxinputblur'] = function () {
      dv$w['hideKeyboard']();
    }, dv$w['hideKeyboard'] = function () {
      ld05$['window']['wx']['offKeyboardConfirm'](), ld05$['window']['wx']['offKeyboardInput'](), ld05$['window']['wx']['hideKeyboard']({ 'success': function (vkr9x1) {
          console['log']('隐藏键盘');
        }, 'fail': function (o_s746) {
          console['log']('隐藏键盘出错:' + (o_s746 ? o_s746['errMsg'] : ''));
        } });
    }, dv$w;
  }(),
      lb$w0 = function () {
    function e8tzc() {}rvfwbd(e8tzc, 'laya.wx.mini.MiniLoader');var cega8 = e8tzc['prototype'];return cega8['load'] = function (o_s4g6, s6g_4o, kfv1, rvwf9b, jm_7hn) {
      kfv1 === void 0x0 && (kfv1 = !![]), jm_7hn === void 0x0 && (jm_7hn = ![]);var o6s_g4 = this;o6s_g4['_url'] = o_s4g6;if (o_s4g6['indexOf']('data:image') === 0x0) o6s_g4['_type'] = s6g_4o = 'image';else o6s_g4['_type'] = s6g_4o || (s6g_4o = o6s_g4['getTypeFromUrl'](o_s4g6));o6s_g4['_cache'] = kfv1, o6s_g4['_data'] = null;var wv19rf = 'ascii';if (o_s4g6['indexOf']('.fnt') != -0x1) wv19rf = 'utf8';else s6g_4o == 'arraybuffer' && (wv19rf = '');;var dl0bw$ = ji7m['getFileExtension'](o_s4g6);if (e8tzc['_fileTypeArr']['indexOf'](dl0bw$) != -0x1) ld05$['EnvConfig']['load']['call'](this, o_s4g6, s6g_4o, kfv1, rvwf9b, jm_7hn);else {
        if (!tz82ec['getFileInfo'](o_s4g6)) {
          if (o_s4g6['indexOf']('layaNativeDir/') != -0x1) {
            if (ld05$['isZiYu']) {
              var aceg82 = tz82ec['ziyuFileData'][o_s4g6];o6s_g4['onLoaded'](aceg82);return;
            } else {
              cosnole['log']('read read'), tz82ec['read'](o_s4g6, wv19rf, new w0l(e8tzc, e8tzc['onReadNativeCallBack'], [wv19rf, o_s4g6, s6g_4o, kfv1, rvwf9b, jm_7hn, o6s_g4]));return;
            }
          }if (osca6g['rootPath'] == '') var fbrdv = o_s4g6;else fbrdv = o_s4g6['split'](osca6g['rootPath'])[0x0];o_s4g6['indexOf']('http://') != -0x1 || o_s4g6['indexOf']('https://') != -0x1 ? ld05$['EnvConfig']['load']['call'](o6s_g4, o_s4g6, s6g_4o, kfv1, rvwf9b, jm_7hn) : tz82ec['readFile'](fbrdv, wv19rf, new w0l(e8tzc, e8tzc['onReadNativeCallBack'], [wv19rf, o_s4g6, s6g_4o, kfv1, rvwf9b, jm_7hn, o6s_g4]), o_s4g6);
        } else ld05$['EnvConfig']['load']['call'](this, o_s4g6, s6g_4o, kfv1, rvwf9b, jm_7hn);
      }
    }, cega8['resMgrLoad'] = function (nl0ih5, fwvr91, uy9xk, fbv9wr, l0d5$i, bdw$fv, _4jhm7) {
      uy9xk === void 0x0 && (uy9xk = 0x0), fbv9wr === void 0x0 && (fbv9wr = ![]), l0d5$i === void 0x0 && (l0d5$i = ![]), bdw$fv === void 0x0 && (bdw$fv = 0x0), _4jhm7 === void 0x0 && (_4jhm7 = 0x3), nl0ih5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nl0ih5), ld05$['EnvConfig']['resMgrLoad'](nl0ih5, (n5hilm, wbv$d, so_46) => {
        e8tzc['prototype']['resMgrLoadCallBack'](n5hilm, wbv$d, so_46, fwvr91);
      }, uy9xk, fbv9wr, l0d5$i, bdw$fv, _4jhm7);
    }, cega8['resMgrLoadCallBack'] = function (vr9x1k, wv1fr, mn5ihj, frbwv) {
      console['log']('buff:::', vr9x1k, mn5ihj, tz82ec['fileNativeDir'] + '///' + tz82ec['fileListName']), frbwv(vr9x1k, wv1fr, mn5ihj);
    }, cega8['clearRes'] = function (gacso6, pe2z) {
      pe2z === void 0x0 && (pe2z = ![]);var o_s6g4 = this;o_s6g4['clearRes'](gacso6, pe2z);var mjnhi = tz82ec['getFileInfo'](gacso6);if (mjnhi && (gacso6['indexOf']('http://') != -0x1 || gacso6['indexOf']('https://') != -0x1)) {
        var $0nil5 = mjnhi['md5'],
            hnli5m = tz82ec['getFileNativePath']($0nil5);tz82ec['remove'](hnli5m);
      }
    }, e8tzc['onReadNativeCallBack'] = function (f9vwr, r1xuk, t28cez, js47_6, oc8e, xkuy1q, uy9xk1, vxk, mnh7) {
      js47_6 === void 0x0 && (js47_6 = !![]), xkuy1q === void 0x0 && (xkuy1q = ![]), vxk === void 0x0 && (vxk = 0x0);if (!vxk) {
        var pzte82;if (t28cez == 'json' || t28cez == 'atlas') pzte82 = ld05$['getJson'](mnh7['data']);else t28cez == 'xml' ? pzte82 = ji7m['parseXMLFromString'](mnh7['data']) : pzte82 = mnh7['data'];uy9xk1['onLoaded'](pzte82), !ld05$['isZiYu'] && ld05$['isPosMsgYu'] && t28cez != 'arraybuffer' && wx['postMessage']({ 'url': r1xuk, 'data': pzte82, 'isLoad': !![] });
      } else vxk == 0x1 && ld05$['EnvConfig']['load']['call'](uy9xk1, r1xuk, t28cez, js47_6, oc8e, xkuy1q);
    }, e28tzp(e8tzc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), e8tzc;
  }(),
      tz82ec = function (_ogs) {
    function df$b0() {
      df$b0['__super']['call'](this);;
    }return rvfwbd(df$b0, 'laya.wx.mini.MiniFileMgr', _ogs), df$b0['isLoadFile'] = function (l0in) {
      return df$b0['_fileTypeArr']['indexOf'](l0in) != -0x1 ? !![] : ![];
    }, df$b0['getFileInfo'] = function (c8g) {
      var v1k9 = c8g['split']('?')[0x0],
          xq3uky = df$b0['filesListObj'][v1k9];if (xq3uky == null) return null;else return xq3uky;return null;
    }, df$b0['onFileUpdate'] = function (sc6g, drvw) {
      var wdb$ = sc6g['split']('/'),
          fwr1 = wdb$[wdb$['length'] - 0x1],
          e8c2tz = df$b0['getFileInfo'](drvw);if (e8c2tz == null) df$b0['onSaveFile'](drvw, fwr1);else {
        if (e8c2tz['readyUrl'] != drvw) df$b0['remove'](fwr1, drvw);
      }
    }, df$b0['exits'] = function (vfb, wrfvb9) {
      var o86gca = df$b0['getFileNativePath'](vfb);df$b0['fs']['getFileInfo']({ 'filePath': o86gca, 'success': function (t28ace) {
          wrfvb9 != null && wrfvb9['runWith']([0x0, t28ace]);
        }, 'fail': function (eocga) {
          wrfvb9 != null && wrfvb9['runWith']([0x1, eocga]);
        } });
    }, df$b0['read'] = function (l5$0ni, $dil5, _m7j, mjhn7) {
      $dil5 === void 0x0 && ($dil5 = 'ascill'), mjhn7 === void 0x0 && (mjhn7 = '');var $dl;mjhn7 != '' ? $dl = df$b0['getFileNativePath'](l5$0ni) : $dl = l5$0ni, df$b0['fs']['readFile']({ 'filePath': $dl, 'encoding': $dil5, 'success': function (k1uq) {
          _m7j != null && _m7j['runWith']([0x0, k1uq]);
        }, 'fail': function (k91vr) {
          if (k91vr && mjhn7 != '') df$b0['down'](mjhn7, $dil5, _m7j, mjhn7);else _m7j != null && _m7j['runWith']([0x1]);
        } });
    }, df$b0['readNativeFile'] = function (g2a8ce, yxu3qk) {
      df$b0['fs']['readFile']({ 'filePath': g2a8ce, 'encoding': '', 'success': function (qxu1ky) {
          yxu3qk != null && yxu3qk['runWith']([0x0]);
        }, 'fail': function (n5li) {
          yxu3qk != null && yxu3qk['runWith']([0x1]);
        } });
    }, df$b0['down'] = function (tp8ze2, ykxu, krx1, hi7mjn) {
      ykxu === void 0x0 && (ykxu = 'ascill'), hi7mjn === void 0x0 && (hi7mjn = '');var l5i0$ = df$b0['getFileNativePath'](hi7mjn),
          df$bwv = df$b0['wxdown']({ 'url': tp8ze2, 'filePath': l5i0$, 'success': function (bd0l5$) {
          if (bd0l5$['statusCode'] === 0xc8) df$b0['readFile'](bd0l5$['filePath'], ykxu, krx1, hi7mjn);
        }, 'fail': function (_jmh74) {
          krx1 != null && krx1['runWith']([0x1, _jmh74]);
        } });df$bwv['onProgressUpdate'](function (vdfwbr) {
        krx1 != null && krx1['runWith']([0x2, vdfwbr['progress']]);
      });
    }, df$b0['readFile'] = function (vwfrdb, egaco, eac28, yuq3) {
      egaco === void 0x0 && (egaco = 'ascill'), yuq3 === void 0x0 && (yuq3 = ''), df$b0['fs']['readFile']({ 'filePath': vwfrdb, 'encoding': egaco, 'success': function (zte82c) {
          if (vwfrdb['indexOf']('http://') != -0x1 || vwfrdb['indexOf']('https://') != -0x1) df$b0['onFileUpdate'](vwfrdb, yuq3);eac28 != null && eac28['runWith']([0x0, zte82c]);
        }, 'fail': function (tz28ec) {
          if (tz28ec) eac28 != null && eac28['runWith']([0x1, tz28ec]);
        } });
    }, df$b0['downImg'] = function (mijn7, l5inhm, jh7m4) {
      jh7m4 === void 0x0 && (jh7m4 = '');var wld0b$ = df$b0['wxdown']({ 'url': mijn7, 'success': function (dbl0) {
          dbl0['statusCode'] === 0xc8 && df$b0['copyFile'](dbl0['tempFilePath'], jh7m4, l5inhm);
        }, 'fail': function (mh7i) {
          l5inhm != null && l5inhm['runWith']([0x1, mh7i]);
        } });
    }, df$b0['copyFile'] = function (_4jms7, d50$, a6so) {
      var sgac6o = _4jms7['split']('/'),
          wvf91 = sgac6o[sgac6o['length'] - 0x1],
          k9rv1x = d50$['split']('?')[0x0],
          njihm5 = df$b0['getFileInfo'](d50$),
          og6s4 = df$b0['getFileNativePath'](wvf91);df$b0['fs']['copyFile']({ 'srcPath': _4jms7, 'destPath': og6s4, 'success': function (ea8og) {
          if (!njihm5) df$b0['onSaveFile'](d50$, wvf91), a6so != null && a6so['runWith']([0x0]);else {
            if (njihm5['readyUrl'] != d50$) df$b0['remove'](wvf91, d50$, a6so);
          }
        }, 'fail': function (t2ec8z) {
          a6so != null && a6so['runWith']([0x1, t2ec8z]);
        } });
    }, df$b0['getFileNativePath'] = function (kyqxu1) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kyqxu1;
    }, df$b0['remove'] = function (mjn7_h, z28tec, t8pe2z) {
      z28tec === void 0x0 && (z28tec = '');var y3kuqx = df$b0['getFileInfo'](z28tec),
          mihnj = df$b0['getFileNativePath'](y3kuqx['md5']);fb0['loader']['clearRes'](y3kuqx['readyUrl']), df$b0['fs']['unlink']({ 'filePath': mihnj, 'success': function (eocga8) {
          if (z28tec != '') df$b0['onSaveFile'](z28tec, mjn7_h);t8pe2z != null && t8pe2z['runWith']([0x0]);
        }, 'fail': function (i05$nl) {} });
    }, df$b0['onSaveFile'] = function (gc6soa, b50$d) {
      var _h74jm = gc6soa['split']('?')[0x0];df$b0['filesListObj'][_h74jm] = { 'md5': b50$d, 'readyUrl': gc6soa }, df$b0['fs']['writeFile']({ 'filePath': df$b0['fileNativeDir'] + '/' + df$b0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](df$b0['filesListObj']), 'success': function (nl0i5) {
          console['log']('写入测试测试成功：', nl0i5);
        }, 'fail': function (uk9r) {
          console['log']('写入测试测试失败：', uk9r);
        } });
    }, df$b0['existDir'] = function (s74j, c8oeag) {
      df$b0['fs']['mkdir']({ 'dirPath': s74j, 'success': function (j47h) {
          c8oeag != null && c8oeag['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (uxk1) {
          if (uxk1['errMsg']['indexOf']('file already exists') != -0x1) df$b0['readSync'](df$b0['fileListName'], 'utf8', c8oeag);else c8oeag != null && c8oeag['runWith']([0x1, uxk1]);
        } });
    }, df$b0['readSync'] = function (hmjni7, vbwrdf, s6g_o, aogs46) {
      vbwrdf === void 0x0 && (vbwrdf = 'ascill'), aogs46 === void 0x0 && (aogs46 = '');var i50hnl = df$b0['getFileNativePath'](hmjni7),
          s_76j4;try {
        s_76j4 = df$b0['fs']['readFileSync'](i50hnl), s6g_o != null && s6g_o['runWith']([0x0, { 'data': s_76j4 }]);
      } catch (nh7ij) {
        s6g_o != null && s6g_o['runWith']([0x1]);
      }
    }, df$b0['readCache'] = function () {}, df$b0['writeCache'] = function (fv$dw) {
      var rfkv = readyUrl['split']('?')[0x0];df$b0['filesListObj'][rfkv] = { 'md5': md5Name, 'readyUrl': readyUrl }, df$b0['fs']['writeFile']({ 'filePath': df$b0['fileNativeDir'] + '/' + df$b0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](df$b0['filesListObj']), 'success': function (h5jmi) {}, 'fail': function (c82ezt) {} });
    }, df$b0['setNativeFileDir'] = function (y1kuqx) {
      df$b0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + y1kuqx;
    }, df$b0['filesListObj'] = {}, df$b0['fileNativeDir'] = null, df$b0['fileListName'] = 'layaairfiles.txt', df$b0['ziyuFileData'] = {}, e28tzp(df$b0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), df$b0;
  }(rv9bf),
      b0dl$ = function (o764) {
    function vw19() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vw19['__super']['call'](this), this['_sound'] = vw19['_createSound']();
    }rvfwbd(vw19, 'laya.wx.mini.MiniSound', o764);var i$ld5 = vw19['prototype'];return i$ld5['load'] = function (uk91xr) {
      var rf19kv = this;uk91xr = osca6g['formatURL'](uk91xr), this['url'] = uk91xr;if (vw19['_audioCache'][uk91xr]) {
        this['event']('complete');return;
      }function vkrx() {
        if (vw19['_null'] != undefined) rf19kv['_sound']['onCanplay'](vw19['_null']), rf19kv['_sound']['onError'](vw19['_null']);else try {
          rf19kv['_sound']['onCanplay'](null), rf19kv['_sound']['onError'](null), vw19['_null'] = null;
        } catch (ec28t) {
          console['warn']('[wxmini] _clearSound:' + ec28t), rf19kv['_sound']['onCanplay'](il5d), rf19kv['_sound']['onError'](il5d), vw19['_null'] = il5d;
        }
      }function l05$in() {
        vkrx(), e8ao['loaded'] = !![], e8ao['event']('complete'), vw19['_audioCache'][e8ao['url']] = e8ao;
      }function $l5b0d(m4_j7h) {
        console['error']('errCode=' + m4_j7h['errCode'] + '  errMsg=' + m4_j7h['errMsg']), vkrx(), e8ao['event']('error');
      }function il5d() {}this['_sound']['onCanplay'](l05$in), this['_sound']['onError']($l5b0d), this['_sound']['src'] = uk91xr;var e8ao = this;
    }, i$ld5['play'] = function (_7jmnh, j_674s) {
      _7jmnh === void 0x0 && (_7jmnh = 0x0), j_674s === void 0x0 && (j_674s = 0x0);var uq1xk;if (this['url'] == lb50['_tMusic']) {
        if (!vw19['_musicAudio']) vw19['_musicAudio'] = vw19['_createSound']();uq1xk = vw19['_musicAudio'];
      } else uq1xk = vw19['_createSound']();uq1xk['src'] = this['url'];var vx91 = new b5$0d(uq1xk);return vx91['url'] = this['url'], vx91['loops'] = j_674s, vx91['startTime'] = _7jmnh, vx91['play'](), lb50['addChannel'](vx91), vx91;
    }, i$ld5['dispose'] = function () {
      var gceoa8 = vw19['_audioCache'][this['url']];gceoa8 && (gceoa8['src'] = '', delete vw19['_audioCache'][this['url']]);
    }, d5l0b(0x0, i$ld5, 'duration', function () {
      return this['_sound']['duration'];
    }), vw19['_createSound'] = function () {
      return vw19['_id']++, ld05$['window']['wx']['createInnerAudioContext']();
    }, vw19['_musicAudio'] = null, vw19['_id'] = 0x0, vw19['_audioCache'] = {}, vw19['_null'] = undefined, vw19;
  }(rv9bf),
      b5$0d = function (ocega) {
    function jm5inh(sj764_) {
      this['_audio'] = null, this['_onEnd'] = null, jm5inh['__super']['call'](this), this['_audio'] = sj764_, this['_onEnd'] = ji7m['bind'](this['__onEnd'], this), sj764_['onEnded'](this['_onEnd']);
    }rvfwbd(jm5inh, 'laya.wx.mini.MiniSoundChannel', ocega);var l5i0d$ = jm5inh['prototype'];return l5i0d$['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fb0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, l5i0d$['__onNull'] = function () {}, l5i0d$['play'] = function () {
      this['isStopped'] = ![], lb50['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, l5i0d$['stop'] = function () {
      this['isStopped'] = !![], lb50['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jm5inh['_null'] != undefined) this['_audio']['onEnded'](jm5inh['_null']);else try {
        this['_audio']['onEnded'](null), jm5inh['_null'] = null;
      } catch (oc8aeg) {
        console['warn']('[wxmini] stop:' + oc8aeg), this['_audio']['onEnded'](ji7m['bind'](this['__onNull'], this)), jm5inh['_null'] = ji7m['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, l5i0d$['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, l5i0d$['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], lb50['addChannel'](this), this['_audio']['play']();
    }, d5l0b(0x0, l5i0d$, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), d5l0b(0x0, l5i0d$, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), d5l0b(0x0, l5i0d$, 'volume', function () {
      return 0x1;
    }, function (n5hijm) {}), jm5inh['_null'] = undefined, jm5inh;
  }(ocsag);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var coe8a in Laya) {
    var sg64o_ = Laya[coe8a];sg64o_ && sg64o_['__isclass'] && (exports[coe8a] = sg64o_);
  }
});