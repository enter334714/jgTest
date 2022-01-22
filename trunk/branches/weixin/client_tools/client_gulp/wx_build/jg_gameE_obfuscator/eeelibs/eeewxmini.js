var b = wx.$e;
(function (window, document, qu9snk) {
  var sqnu3 = qu9snk['un'],
      glthrx = qu9snk['uns'],
      mepaoc = qu9snk['static'],
      wd852 = qu9snk['class'],
      flrh = qu9snk['getset'],
      fz4yvr = qu9snk['__newvec'],
      m7ap = laya['utils']['Browser'],
      c_a47 = laya['events']['Event'],
      uq9n3 = laya['events']['EventDispatcher'],
      fvr4z = laya['resource']['HTMLImage'],
      ma7_4 = laya['utils']['Handler'],
      s93 = laya['display']['Input'],
      rlxgh = laya['net']['Loader'],
      zy_v4f = laya['maths']['Matrix'],
      jinq$ = laya['renders']['Render'],
      zvf_4y = laya['utils']['RunDriver'],
      $htgx = laya['media']['Sound'],
      vy7_4f = laya['media']['SoundChannel'],
      bk90s6 = laya['media']['SoundManager'],
      nsu9qk = laya['display']['Stage'],
      qjn3iu = laya['net']['URL'],
      d0w58 = laya['utils']['Utils'],
      gi3$xj = function () {
    function $jni3q() {}return wd852($jni3q, 'laya.wx.mini.MiniAdpter'), $jni3q['getJson'] = function (su6b9) {
      return JSON['parse'](su6b9);
    }, $jni3q['init'] = function (y_v, s0kb96) {
      y_v === void 0x0 && (y_v = ![]), s0kb96 === void 0x0 && (s0kb96 = ![]);if ($jni3q['_inited']) return;$jni3q['window'] = window;if ($jni3q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$jni3q['_inited'] = !![], $jni3q['isZiYu'] = s0kb96, $jni3q['isPosMsgYu'] = y_v, $jni3q['EnvConfig'] = {}, !$jni3q['isZiYu'] && (hlyrt['setNativeFileDir']('/layaairGame'), hlyrt['existDir'](hlyrt['fileNativeDir'], ma7_4['create']($jni3q, $jni3q['onMkdirCallBack']))), $jni3q['window']['focus'] = function () {}, qu9snk['getUrlPath'] = function () {}, $jni3q['window']['logtime'] = function (ubks69) {}, $jni3q['window']['alertTimeLog'] = function (tzrlyh) {}, $jni3q['window']['resetShareInfo'] = function () {}, $jni3q['window']['CanvasRenderingContext2D'] = function () {}, $jni3q['window']['CanvasRenderingContext2D']['prototype'] = $jni3q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $jni3q['window']['document']['body']['appendChild'] = function () {}, $jni3q['EnvConfig']['pixelRatioInt'] = 0x0, zvf_4y['getPixelRatio'] = $jni3q['pixelRatio'], $jni3q['_preCreateElement'] = m7ap['createElement'], m7ap['createElement'] = $jni3q['createElement'], zvf_4y['createShaderCondition'] = $jni3q['createShaderCondition'], d0w58['parseXMLFromString'] = $jni3q['parseXMLFromString'], s93['_createInputElement'] = nsqku['_createInputElement'], $jni3q['EnvConfig']['load'] = rlxgh['prototype']['load'], rlxgh['prototype']['load'] = it$gx['prototype']['load'], $jni3q['isZiYu'] && y_v && wx['onMessage'](function (zyr4) {
        zyr4['isLoad'] && (hlyrt['ziyuFileData'][zyr4['url']] = zyr4['data']);
      });
    }, $jni3q['onMkdirCallBack'] = function (w5d821, j$it) {
      if (!w5d821) hlyrt['filesListObj'] = JSON['parse'](j$it['data']);
    }, $jni3q['pixelRatio'] = function () {
      if (!$jni3q['EnvConfig']['pixelRatioInt']) try {
        var yvrfh = wx['getSystemInfoSync']();return $jni3q['EnvConfig']['pixelRatioInt'] = yvrfh['pixelRatio'], yvrfh = yvrfh, yvrfh['pixelRatio'];
      } catch (glhxr) {}return $jni3q['EnvConfig']['pixelRatioInt'];
    }, $jni3q['createElement'] = function (rhzy) {
      if (rhzy == 'canvas') {
        var tgrlx;return $jni3q['idx'] == 0x1 ? $jni3q['isZiYu'] ? (tgrlx = sharedCanvas, tgrlx['style'] = {}) : tgrlx = window['canvas'] : tgrlx = window['wx']['createCanvas'](), $jni3q['idx']++, tgrlx;
      } else {
        if (rhzy == 'textarea' || rhzy == 'input') return $jni3q['onCreateInput'](rhzy);else {
          if (rhzy == 'div') {
            var zghtlr = $jni3q['_preCreateElement'](rhzy);return zghtlr['contains'] = function (k6sun) {
              return null;
            }, zghtlr['removeChild'] = function (w02d) {}, zghtlr;
          } else return $jni3q['_preCreateElement'](rhzy);
        }
      }
    }, $jni3q['onCreateInput'] = function (ocem) {
      var kb6su9 = $jni3q['_preCreateElement'](ocem);return kb6su9['focus'] = nsqku['wxinputFocus'], kb6su9['blur'] = nsqku['wxinputblur'], kb6su9['style'] = {}, kb6su9['value'] = 0x0, kb6su9['parentElement'] = {}, kb6su9['placeholder'] = {}, kb6su9['type'] = {}, kb6su9['setColor'] = function (jniqu3) {}, kb6su9['setType'] = function (nuq3s9) {}, kb6su9['setFontFace'] = function (ijg3x) {}, kb6su9['addEventListener'] = function (wb5d0) {}, kb6su9['contains'] = function (_74cam) {
        return null;
      }, kb6su9['removeChild'] = function (skun9q) {}, kb6su9;
    }, $jni3q['createShaderCondition'] = function (yfv47) {
      var m_ca = this,
          av4_ = function () {
        var cmpao7 = yfv47;return m_ca[yfv47['replace']('this.', '')];
      };return av4_;
    }, $jni3q['EnvConfig'] = null, $jni3q['window'] = null, $jni3q['_preCreateElement'] = null, $jni3q['_inited'] = ![], $jni3q['wxRequest'] = null, $jni3q['systemInfo'] = null, $jni3q['version'] = '0.0.1', $jni3q['isZiYu'] = ![], $jni3q['isPosMsgYu'] = ![], $jni3q['parseXMLFromString'] = function (zhvrfy) {
      var epmoc, htlr;zhvrfy = zhvrfy['replace'](/>\s+</g, '><');try {
        epmoc = new window['Parser']['DOMParser']()['parseFromString'](zhvrfy, 'text/xml');
      } catch (qks9) {
        throw '需要引入xml解析库文件';
      }return epmoc;
    }, $jni3q['idx'] = 0x1, $jni3q;
  }(),
      c4_am7 = function () {
    function ij$t() {}wd852(ij$t, 'laya.wx.mini.MiniImage');var vy74_f = ij$t['prototype'];return vy74_f['_loadImage'] = function (ztr) {
      var lthrgz = this,
          s9b = ![];ztr['indexOf']('layaNativeDir/') == -0x1 && (s9b = !![], ztr = qjn3iu['formatURL'](ztr));if (!hlyrt['getFileInfo'](ztr)) {
        if (ztr['indexOf']('http://') != -0x1 || ztr['indexOf']('https://') != -0x1) hlyrt['downImg'](ztr, new ma7_4(ij$t, ij$t['onDownImgCallBack'], [ztr, lthrgz]), ztr);else ij$t['onCreateImage'](ztr, lthrgz, !![]);
      } else ij$t['onCreateImage'](ztr, lthrgz, !s9b);
    }, ij$t['onDownImgCallBack'] = function (lzhtyr, s9n6u, txigj) {
      if (!txigj) ij$t['onCreateImage'](lzhtyr, s9n6u);else s9n6u['onError'](null);
    }, ij$t['onCreateImage'] = function (lyrfz, v4yrf, gtlr) {
      gtlr === void 0x0 && (gtlr = ![]);var q3$xji;if (!gtlr) {
        var zfv4ry = hlyrt['getFileInfo'](lyrfz),
            kd96 = zfv4ry['md5'];q3$xji = hlyrt['getFileNativePath'](kd96);
      } else q3$xji = lyrfz;if (v4yrf['imgCache'] == null) v4yrf['imgCache'] = {};var nqjs3u;function zfvyr() {
        nqjs3u['onload'] = null, nqjs3u['onerror'] = null, delete v4yrf['imgCache'][lyrfz];
      };var k9su6b = function () {
        zfvyr(), v4yrf['onLoaded'](nqjs3u);
      },
          ocm7 = function () {
        zfvyr(), v4yrf['event']('error', 'Load image failed');
      };v4yrf['_type'] == 'nativeimage' ? (nqjs3u = new m7ap['window']['Image'](), nqjs3u['crossOrigin'] = '', nqjs3u['onload'] = k9su6b, nqjs3u['onerror'] = ocm7, nqjs3u['src'] = q3$xji, v4yrf['imgCache'][lyrfz] = nqjs3u) : new fvr4z['create'](q3$xji, { 'onload': k9su6b, 'onerror': ocm7, 'onCreate': function (inj) {
          nqjs3u = inj, v4yrf['imgCache'][lyrfz] = inj;
        } });
    }, ij$t;
  }(),
      nsqku = function () {
    function b5dk6() {}return wd852(b5dk6, 'laya.wx.mini.MiniInput'), b5dk6['_createInputElement'] = function () {
      s93['_initInput'](s93['area'] = m7ap['createElement']('textarea')), s93['_initInput'](s93['input'] = m7ap['createElement']('input')), s93['inputContainer'] = m7ap['createElement']('div'), s93['inputContainer']['style']['position'] = 'absolute', s93['inputContainer']['style']['zIndex'] = 0x186a0, m7ap['container']['appendChild'](s93['inputContainer']), s93['inputContainer']['setPos'] = function (ijx3$g, zlrhg) {
        s93['inputContainer']['style']['left'] = ijx3$g + 'px', s93['inputContainer']['style']['top'] = zlrhg + 'px';
      }, qu9snk['stage']['on']('resize', null, b5dk6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kb506) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bk90s6['_soundClass'] = ryzfl, bk90s6['_musicClass'] = ryzfl;
    }, b5dk6['_onStageResize'] = function () {
      var jg3$ = qu9snk['stage']['_canvasTransform']['identity']();jg3$['scale'](m7ap['width'] / jinq$['canvas']['width'] / zvf_4y['getPixelRatio'](), m7ap['height'] / jinq$['canvas']['height'] / zvf_4y['getPixelRatio']());
    }, b5dk6['wxinputFocus'] = function (po7am) {
      var b6d5k = s93['inputElement']['target'];if (b6d5k && !b6d5k['editable']) return;gi3$xj['window']['wx']['offKeyboardConfirm'](), gi3$xj['window']['wx']['offKeyboardInput'](), gi3$xj['window']['wx']['showKeyboard']({ 'defaultValue': b6d5k['text'], 'maxLength': b6d5k['maxChars'], 'multiple': b6d5k['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($qnij) {}, 'fail': function (n3s) {} }), gi3$xj['window']['wx']['onKeyboardConfirm'](function (amv47) {
        var m_7va4 = amv47 ? amv47['value'] : '';b6d5k['text'] = m_7va4, b6d5k['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gi3$xj['window']['wx']['onKeyboardInput'](function (v7_4am) {
        var tlyhr = v7_4am ? v7_4am['value'] : '';if (!b6d5k['multiline']) {
          if (tlyhr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }b6d5k['text'] = tlyhr, b6d5k['event']('input');
      });
    }, b5dk6['inputEnter'] = function () {
      s93['inputElement']['target']['focus'] = ![];
    }, b5dk6['wxinputblur'] = function () {
      b5dk6['hideKeyboard']();
    }, b5dk6['hideKeyboard'] = function () {
      gi3$xj['window']['wx']['offKeyboardConfirm'](), gi3$xj['window']['wx']['offKeyboardInput'](), gi3$xj['window']['wx']['hideKeyboard']({ 'success': function (rxtg) {
          console['log']('隐藏键盘');
        }, 'fail': function (_74f) {
          console['log']('隐藏键盘出错:' + (_74f ? _74f['errMsg'] : ''));
        } });
    }, b5dk6;
  }(),
      it$gx = function () {
    function su6kb() {}wd852(su6kb, 'laya.wx.mini.MiniLoader');var ztry = su6kb['prototype'];return ztry['load'] = function (amopc7, zhtlry, fyrzhv, w802d, sk09b) {
      fyrzhv === void 0x0 && (fyrzhv = !![]), sk09b === void 0x0 && (sk09b = ![]);var xthg$ = this;xthg$['_url'] = amopc7;if (amopc7['indexOf']('data:image') === 0x0) xthg$['_type'] = zhtlry = 'image';else xthg$['_type'] = zhtlry || (zhtlry = xthg$['getTypeFromUrl'](amopc7));xthg$['_cache'] = fyrzhv, xthg$['_data'] = null;var o_ac7m = 'ascii';if (amopc7['indexOf']('.fnt') != -0x1) o_ac7m = 'utf8';else zhtlry == 'arraybuffer' && (o_ac7m = '');;var _oc7m = d0w58['getFileExtension'](amopc7);if (su6kb['_fileTypeArr']['indexOf'](_oc7m) != -0x1) gi3$xj['EnvConfig']['load']['call'](this, amopc7, zhtlry, fyrzhv, w802d, sk09b);else {
        if (!hlyrt['getFileInfo'](amopc7)) {
          if (amopc7['indexOf']('layaNativeDir/') != -0x1) {
            if (gi3$xj['isZiYu']) {
              var nuq = hlyrt['ziyuFileData'][amopc7];xthg$['onLoaded'](nuq);return;
            } else {
              cosnole['log']('read read'), hlyrt['read'](amopc7, o_ac7m, new ma7_4(su6kb, su6kb['onReadNativeCallBack'], [o_ac7m, amopc7, zhtlry, fyrzhv, w802d, sk09b, xthg$]));return;
            }
          }if (qjn3iu['rootPath'] == '') var su96b = amopc7;else su96b = amopc7['split'](qjn3iu['rootPath'])[0x0];amopc7['indexOf']('http://') != -0x1 || amopc7['indexOf']('https://') != -0x1 ? gi3$xj['EnvConfig']['load']['call'](xthg$, amopc7, zhtlry, fyrzhv, w802d, sk09b) : hlyrt['readFile'](su96b, o_ac7m, new ma7_4(su6kb, su6kb['onReadNativeCallBack'], [o_ac7m, amopc7, zhtlry, fyrzhv, w802d, sk09b, xthg$]), amopc7);
        } else gi3$xj['EnvConfig']['load']['call'](this, amopc7, zhtlry, fyrzhv, w802d, sk09b);
      }
    }, ztry['resMgrLoad'] = function (lxg$it, t$xgj, rhlxgt, _ac7om, rxtgl, xl$ht, gtl$x) {
      rhlxgt === void 0x0 && (rhlxgt = 0x0), _ac7om === void 0x0 && (_ac7om = ![]), rxtgl === void 0x0 && (rxtgl = ![]), xl$ht === void 0x0 && (xl$ht = 0x0), gtl$x === void 0x0 && (gtl$x = 0x3), lxg$it['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lxg$it), gi3$xj['EnvConfig']['resMgrLoad'](lxg$it, (ap7co, rhzgl, vyfz4_) => {
        su6kb['prototype']['resMgrLoadCallBack'](ap7co, rhzgl, vyfz4_, t$xgj);
      }, rhlxgt, _ac7om, rxtgl, xl$ht, gtl$x);
    }, ztry['resMgrLoadCallBack'] = function (hzyfl, ui3n, j$q3n, $xgti) {
      console['log']('buff:::', hzyfl, j$q3n, hlyrt['fileNativeDir'] + '///' + hlyrt['fileListName']), $xgti(hzyfl, ui3n, j$q3n);
    }, ztry['clearRes'] = function (q3xij, mac7po) {
      mac7po === void 0x0 && (mac7po = ![]);var niquj = this;niquj['clearRes'](q3xij, mac7po);var htlrz = hlyrt['getFileInfo'](q3xij);if (htlrz && (q3xij['indexOf']('http://') != -0x1 || q3xij['indexOf']('https://') != -0x1)) {
        var a7f4_v = htlrz['md5'],
            u3nsjq = hlyrt['getFileNativePath'](a7f4_v);hlyrt['remove'](u3nsjq);
      }
    }, su6kb['onReadNativeCallBack'] = function (fzyv4, tgix$l, ac_m7, cam_74, juqns3, f7a4_, k9uns, $ijgx3, a74_f) {
      cam_74 === void 0x0 && (cam_74 = !![]), f7a4_ === void 0x0 && (f7a4_ = ![]), $ijgx3 === void 0x0 && ($ijgx3 = 0x0);if (!$ijgx3) {
        var b0s9k6;if (ac_m7 == 'json' || ac_m7 == 'atlas') b0s9k6 = gi3$xj['getJson'](a74_f['data']);else ac_m7 == 'xml' ? b0s9k6 = d0w58['parseXMLFromString'](a74_f['data']) : b0s9k6 = a74_f['data'];k9uns['onLoaded'](b0s9k6), !gi3$xj['isZiYu'] && gi3$xj['isPosMsgYu'] && ac_m7 != 'arraybuffer' && wx['postMessage']({ 'url': tgix$l, 'data': b0s9k6, 'isLoad': !![] });
      } else $ijgx3 == 0x1 && gi3$xj['EnvConfig']['load']['call'](k9uns, tgix$l, ac_m7, cam_74, juqns3, f7a4_);
    }, mepaoc(su6kb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), su6kb;
  }(),
      hlyrt = function (w528) {
    function ti$gj() {
      ti$gj['__super']['call'](this);;
    }return wd852(ti$gj, 'laya.wx.mini.MiniFileMgr', w528), ti$gj['isLoadFile'] = function (ltrgh) {
      return ti$gj['_fileTypeArr']['indexOf'](ltrgh) != -0x1 ? !![] : ![];
    }, ti$gj['getFileInfo'] = function (omeac) {
      var d069kb = omeac['split']('?')[0x0],
          k50d = ti$gj['filesListObj'][d069kb];if (k50d == null) return null;else return k50d;return null;
    }, ti$gj['onFileUpdate'] = function (cmo7a_, j3i) {
      var glthxr = cmo7a_['split']('/'),
          vzfyhr = glthxr[glthxr['length'] - 0x1],
          unk9q = ti$gj['getFileInfo'](j3i);if (unk9q == null) ti$gj['onSaveFile'](j3i, vzfyhr);else {
        if (unk9q['readyUrl'] != j3i) ti$gj['remove'](vzfyhr, j3i);
      }
    }, ti$gj['exits'] = function (lxtg$i, b906ks) {
      var u69kbs = ti$gj['getFileNativePath'](lxtg$i);ti$gj['fs']['getFileInfo']({ 'filePath': u69kbs, 'success': function (t$igx) {
          b906ks != null && b906ks['runWith']([0x0, t$igx]);
        }, 'fail': function (s6k0b) {
          b906ks != null && b906ks['runWith']([0x1, s6k0b]);
        } });
    }, ti$gj['read'] = function (n6us9, kb56d, sub, oapcme) {
      kb56d === void 0x0 && (kb56d = 'ascill'), oapcme === void 0x0 && (oapcme = '');var vyhfz;oapcme != '' ? vyhfz = ti$gj['getFileNativePath'](n6us9) : vyhfz = n6us9, ti$gj['fs']['readFile']({ 'filePath': vyhfz, 'encoding': kb56d, 'success': function (w085d2) {
          sub != null && sub['runWith']([0x0, w085d2]);
        }, 'fail': function (_7vfy) {
          if (_7vfy && oapcme != '') ti$gj['down'](oapcme, kb56d, sub, oapcme);else sub != null && sub['runWith']([0x1]);
        } });
    }, ti$gj['readNativeFile'] = function (flrzyh, d5w082) {
      ti$gj['fs']['readFile']({ 'filePath': flrzyh, 'encoding': '', 'success': function (yf4_vz) {
          d5w082 != null && d5w082['runWith']([0x0]);
        }, 'fail': function (d2580w) {
          d5w082 != null && d5w082['runWith']([0x1]);
        } });
    }, ti$gj['down'] = function (jquns, xi$g3j, $xtgj, s39qn) {
      xi$g3j === void 0x0 && (xi$g3j = 'ascill'), s39qn === void 0x0 && (s39qn = '');var u39qs = ti$gj['getFileNativePath'](s39qn),
          $j3gxi = ti$gj['wxdown']({ 'url': jquns, 'filePath': u39qs, 'success': function (buk6s) {
          if (buk6s['statusCode'] === 0xc8) ti$gj['readFile'](buk6s['filePath'], xi$g3j, $xtgj, s39qn);
        }, 'fail': function (h$xlt) {
          $xtgj != null && $xtgj['runWith']([0x1, h$xlt]);
        } });$j3gxi['onProgressUpdate'](function (jiq$3x) {
        $xtgj != null && $xtgj['runWith']([0x2, jiq$3x['progress']]);
      });
    }, ti$gj['readFile'] = function (ryvz, xtigj, nuk69, zgrhlt) {
      xtigj === void 0x0 && (xtigj = 'ascill'), zgrhlt === void 0x0 && (zgrhlt = ''), ti$gj['fs']['readFile']({ 'filePath': ryvz, 'encoding': xtigj, 'success': function (i$gtlx) {
          if (ryvz['indexOf']('http://') != -0x1 || ryvz['indexOf']('https://') != -0x1) ti$gj['onFileUpdate'](ryvz, zgrhlt);nuk69 != null && nuk69['runWith']([0x0, i$gtlx]);
        }, 'fail': function (rfzhy) {
          if (rfzhy) nuk69 != null && nuk69['runWith']([0x1, rfzhy]);
        } });
    }, ti$gj['downImg'] = function (qkn9u, tghrlz, ome) {
      ome === void 0x0 && (ome = '');var a4m_v = ti$gj['wxdown']({ 'url': qkn9u, 'success': function (yhztlr) {
          yhztlr['statusCode'] === 0xc8 && ti$gj['copyFile'](yhztlr['tempFilePath'], ome, tghrlz);
        }, 'fail': function (v_4yfz) {
          tghrlz != null && tghrlz['runWith']([0x1, v_4yfz]);
        } });
    }, ti$gj['copyFile'] = function (p7am, w0825, s6kub9) {
      var j$qni3 = p7am['split']('/'),
          v4_7y = j$qni3[j$qni3['length'] - 0x1],
          _47vy = w0825['split']('?')[0x0],
          g$3xj = ti$gj['getFileInfo'](w0825),
          m7_ac4 = ti$gj['getFileNativePath'](v4_7y);ti$gj['fs']['copyFile']({ 'srcPath': p7am, 'destPath': m7_ac4, 'success': function (ji3gx$) {
          if (!g$3xj) ti$gj['onSaveFile'](w0825, v4_7y), s6kub9 != null && s6kub9['runWith']([0x0]);else {
            if (g$3xj['readyUrl'] != w0825) ti$gj['remove'](v4_7y, w0825, s6kub9);
          }
        }, 'fail': function (zhfryl) {
          s6kub9 != null && s6kub9['runWith']([0x1, zhfryl]);
        } });
    }, ti$gj['getFileNativePath'] = function (mc74a) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mc74a;
    }, ti$gj['remove'] = function (rhztyl, ilxt$, quk9) {
      ilxt$ === void 0x0 && (ilxt$ = '');var mpa7oc = ti$gj['getFileInfo'](ilxt$),
          vm7_a = ti$gj['getFileNativePath'](mpa7oc['md5']);qu9snk['loader']['clearRes'](mpa7oc['readyUrl']), ti$gj['fs']['unlink']({ 'filePath': vm7_a, 'success': function (yrzfv4) {
          if (ilxt$ != '') ti$gj['onSaveFile'](ilxt$, rhztyl);quk9 != null && quk9['runWith']([0x0]);
        }, 'fail': function (d1w825) {} });
    }, ti$gj['onSaveFile'] = function (coa7, _mv7) {
      var k6b = coa7['split']('?')[0x0];ti$gj['filesListObj'][k6b] = { 'md5': _mv7, 'readyUrl': coa7 }, ti$gj['fs']['writeFile']({ 'filePath': ti$gj['fileNativeDir'] + '/' + ti$gj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ti$gj['filesListObj']), 'success': function (m4ac) {
          console['log']('写入测试测试成功：', m4ac);
        }, 'fail': function (ceamp) {
          console['log']('写入测试测试失败：', ceamp);
        } });
    }, ti$gj['existDir'] = function (_ac7m4, cam74) {
      ti$gj['fs']['mkdir']({ 'dirPath': _ac7m4, 'success': function (z4fyrv) {
          cam74 != null && cam74['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hfyv) {
          if (hfyv['errMsg']['indexOf']('file already exists') != -0x1) ti$gj['readSync'](ti$gj['fileListName'], 'utf8', cam74);else cam74 != null && cam74['runWith']([0x1, hfyv]);
        } });
    }, ti$gj['readSync'] = function (mpocae, yf7_v, oam_c, hrtzy) {
      yf7_v === void 0x0 && (yf7_v = 'ascill'), hrtzy === void 0x0 && (hrtzy = '');var $j3 = ti$gj['getFileNativePath'](mpocae),
          lyrhz;try {
        lyrhz = ti$gj['fs']['readFileSync']($j3), oam_c != null && oam_c['runWith']([0x0, { 'data': lyrhz }]);
      } catch (bd609) {
        oam_c != null && oam_c['runWith']([0x1]);
      }
    }, ti$gj['readCache'] = function () {}, ti$gj['writeCache'] = function (sjn3q) {
      var n6ks9 = readyUrl['split']('?')[0x0];ti$gj['filesListObj'][n6ks9] = { 'md5': md5Name, 'readyUrl': readyUrl }, ti$gj['fs']['writeFile']({ 'filePath': ti$gj['fileNativeDir'] + '/' + ti$gj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ti$gj['filesListObj']), 'success': function (va4f7_) {}, 'fail': function (vrfzy4) {} });
    }, ti$gj['setNativeFileDir'] = function (hytrlz) {
      ti$gj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hytrlz;
    }, ti$gj['filesListObj'] = {}, ti$gj['fileNativeDir'] = null, ti$gj['fileListName'] = 'layaairfiles.txt', ti$gj['ziyuFileData'] = {}, mepaoc(ti$gj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ti$gj;
  }(uq9n3),
      ryzfl = function (o7c) {
    function rfyl() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], rfyl['__super']['call'](this), this['_sound'] = rfyl['_createSound']();
    }wd852(rfyl, 'laya.wx.mini.MiniSound', o7c);var n3quj = rfyl['prototype'];return n3quj['load'] = function (fzrhl) {
      var gtzh = this;fzrhl = qjn3iu['formatURL'](fzrhl), this['url'] = fzrhl;if (rfyl['_audioCache'][fzrhl]) {
        this['event']('complete');return;
      }function y7f_v() {
        if (rfyl['_null'] != undefined) gtzh['_sound']['onCanplay'](rfyl['_null']), gtzh['_sound']['onError'](rfyl['_null']);else try {
          gtzh['_sound']['onCanplay'](null), gtzh['_sound']['onError'](null), rfyl['_null'] = null;
        } catch (lgxt$i) {
          console['warn']('[wxmini] _clearSound:' + lgxt$i), gtzh['_sound']['onCanplay'](p7acom), gtzh['_sound']['onError'](p7acom), rfyl['_null'] = p7acom;
        }
      }function x3qj() {
        y7f_v(), capom['loaded'] = !![], capom['event']('complete'), rfyl['_audioCache'][capom['url']] = capom;
      }function rhtxl(hfvy) {
        console['error']('errCode=' + hfvy['errCode'] + '  errMsg=' + hfvy['errMsg']), y7f_v(), capom['event']('error');
      }function p7acom() {}this['_sound']['onCanplay'](x3qj), this['_sound']['onError'](rhtxl), this['_sound']['src'] = fzrhl;var capom = this;
    }, n3quj['play'] = function (fyrlhz, qi$nj3) {
      fyrlhz === void 0x0 && (fyrlhz = 0x0), qi$nj3 === void 0x0 && (qi$nj3 = 0x0);var tyzlr;if (this['url'] == bk90s6['_tMusic']) {
        if (!rfyl['_musicAudio']) rfyl['_musicAudio'] = rfyl['_createSound']();tyzlr = rfyl['_musicAudio'];
      } else tyzlr = rfyl['_createSound']();tyzlr['src'] = this['url'];var bk506d = new gj$ix3(tyzlr);return bk506d['url'] = this['url'], bk506d['loops'] = qi$nj3, bk506d['startTime'] = fyrlhz, bk506d['play'](), bk90s6['addChannel'](bk506d), bk506d;
    }, n3quj['dispose'] = function () {
      var nj3qui = rfyl['_audioCache'][this['url']];nj3qui && (nj3qui['src'] = '', delete rfyl['_audioCache'][this['url']]);
    }, flrh(0x0, n3quj, 'duration', function () {
      return this['_sound']['duration'];
    }), rfyl['_createSound'] = function () {
      return rfyl['_id']++, gi3$xj['window']['wx']['createInnerAudioContext']();
    }, rfyl['_musicAudio'] = null, rfyl['_id'] = 0x0, rfyl['_audioCache'] = {}, rfyl['_null'] = undefined, rfyl;
  }(uq9n3),
      gj$ix3 = function (ku9bs6) {
    function w0b8d5(pcmoae) {
      this['_audio'] = null, this['_onEnd'] = null, w0b8d5['__super']['call'](this), this['_audio'] = pcmoae, this['_onEnd'] = d0w58['bind'](this['__onEnd'], this), pcmoae['onEnded'](this['_onEnd']);
    }wd852(w0b8d5, 'laya.wx.mini.MiniSoundChannel', ku9bs6);var va_4f = w0b8d5['prototype'];return va_4f['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qu9snk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, va_4f['__onNull'] = function () {}, va_4f['play'] = function () {
      this['isStopped'] = ![], bk90s6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, va_4f['stop'] = function () {
      this['isStopped'] = !![], bk90s6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (w0b8d5['_null'] != undefined) this['_audio']['onEnded'](w0b8d5['_null']);else try {
        this['_audio']['onEnded'](null), w0b8d5['_null'] = null;
      } catch (b960k) {
        console['warn']('[wxmini] stop:' + b960k), this['_audio']['onEnded'](d0w58['bind'](this['__onNull'], this)), w0b8d5['_null'] = d0w58['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, va_4f['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, va_4f['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bk90s6['addChannel'](this), this['_audio']['play']();
    }, flrh(0x0, va_4f, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), flrh(0x0, va_4f, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), flrh(0x0, va_4f, 'volume', function () {
      return 0x1;
    }, function (i3j$qx) {}), w0b8d5['_null'] = undefined, w0b8d5;
  }(vy7_4f);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var htlrg in Laya) {
    var gjxt$i = Laya[htlrg];gjxt$i && gjxt$i['__isclass'] && (exports[htlrg] = gjxt$i);
  }
});