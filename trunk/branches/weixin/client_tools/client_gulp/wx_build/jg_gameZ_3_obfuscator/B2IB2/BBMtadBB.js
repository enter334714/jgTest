var D = wx.$b;
(function (window, document, h9rv_) {
  var p2wvh = h9rv_['un'],
      x7ko6 = h9rv_['uns'],
      czy1 = h9rv_['static'],
      c1twv = h9rv_['class'],
      hvp1_ = h9rv_['getset'],
      r2_89s = h9rv_['__newvec'],
      ctuyzm = laya['utils']['Browser'],
      lo67x = laya['events']['Event'],
      in405j = laya['events']['EventDispatcher'],
      z0muy = laya['resource']['HTMLImage'],
      qkl7xo = laya['utils']['Handler'],
      rs_h29 = laya['display']['Input'],
      hv1_w = laya['net']['Loader'],
      y0imuz = laya['maths']['Matrix'],
      czwt1 = laya['renders']['Render'],
      $jna45 = laya['utils']['RunDriver'],
      hrp2v = laya['media']['Sound'],
      hsr_92 = laya['media']['SoundChannel'],
      zc1ty = laya['media']['SoundManager'],
      ph2rv_ = laya['display']['Stage'],
      ldos = laya['net']['URL'],
      vw_hp1 = laya['utils']['Utils'],
      gqxkl = function () {
    function l68dso() {}return c1twv(l68dso, 'laya.wx.mini.MiniAdpter'), l68dso['getJson'] = function (o6dxlk) {
      return JSON['parse'](o6dxlk);
    }, l68dso['init'] = function (iyumz0, h2v9r) {
      iyumz0 === void 0x0 && (iyumz0 = ![]), h2v9r === void 0x0 && (h2v9r = ![]);if (l68dso['_inited']) return;l68dso['window'] = window;if (l68dso['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l68dso['_inited'] = !![], l68dso['isZiYu'] = h2v9r, l68dso['isPosMsgYu'] = iyumz0, l68dso['EnvConfig'] = {}, !l68dso['isZiYu'] && (rd289['setNativeFileDir']('/layaairGame'), rd289['existDir'](rd289['fileNativeDir'], qkl7xo['create'](l68dso, l68dso['onMkdirCallBack']))), l68dso['window']['focus'] = function () {}, h9rv_['getUrlPath'] = function () {}, l68dso['window']['logtime'] = function ($4aj) {}, l68dso['window']['alertTimeLog'] = function (umy0z) {}, l68dso['window']['resetShareInfo'] = function () {}, l68dso['window']['CanvasRenderingContext2D'] = function () {}, l68dso['window']['CanvasRenderingContext2D']['prototype'] = l68dso['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l68dso['window']['document']['body']['appendChild'] = function () {}, l68dso['EnvConfig']['pixelRatioInt'] = 0x0, $jna45['getPixelRatio'] = l68dso['pixelRatio'], l68dso['_preCreateElement'] = ctuyzm['createElement'], ctuyzm['createElement'] = l68dso['createElement'], $jna45['createShaderCondition'] = l68dso['createShaderCondition'], vw_hp1['parseXMLFromString'] = l68dso['parseXMLFromString'], rs_h29['_createInputElement'] = zmtw1['_createInputElement'], l68dso['EnvConfig']['load'] = hv1_w['prototype']['load'], hv1_w['prototype']['load'] = j$n054['prototype']['load'], l68dso['isZiYu'] && iyumz0 && wx['onMessage'](function (ct1mwz) {
        ct1mwz['isLoad'] && (rd289['ziyuFileData'][ct1mwz['url']] = ct1mwz['data']);
      });
    }, l68dso['onMkdirCallBack'] = function (zuimty, iujn4) {
      if (!zuimty) rd289['filesListObj'] = JSON['parse'](iujn4['data']);
    }, l68dso['pixelRatio'] = function () {
      if (!l68dso['EnvConfig']['pixelRatioInt']) try {
        var _vhpw = wx['getSystemInfoSync']();return l68dso['EnvConfig']['pixelRatioInt'] = _vhpw['pixelRatio'], _vhpw = _vhpw, _vhpw['pixelRatio'];
      } catch (qx37) {}return l68dso['EnvConfig']['pixelRatioInt'];
    }, l68dso['createElement'] = function (nuiyz) {
      if (nuiyz == 'canvas') {
        var tmuy;return l68dso['idx'] == 0x1 ? l68dso['isZiYu'] ? (tmuy = sharedCanvas, tmuy['style'] = {}) : tmuy = window['canvas'] : tmuy = window['wx']['createCanvas'](), l68dso['idx']++, tmuy;
      } else {
        if (nuiyz == 'textarea' || nuiyz == 'input') return l68dso['onCreateInput'](nuiyz);else {
          if (nuiyz == 'div') {
            var vwcp1h = l68dso['_preCreateElement'](nuiyz);return vwcp1h['contains'] = function (qlo) {
              return null;
            }, vwcp1h['removeChild'] = function (mutzi) {}, vwcp1h;
          } else return l68dso['_preCreateElement'](nuiyz);
        }
      }
    }, l68dso['onCreateInput'] = function (unijy) {
      var cmt = l68dso['_preCreateElement'](unijy);return cmt['focus'] = zmtw1['wxinputFocus'], cmt['blur'] = zmtw1['wxinputblur'], cmt['style'] = {}, cmt['value'] = 0x0, cmt['parentElement'] = {}, cmt['placeholder'] = {}, cmt['type'] = {}, cmt['setColor'] = function (o8d6l) {}, cmt['setType'] = function (sdo968) {}, cmt['setFontFace'] = function (ol7x6k) {}, cmt['addEventListener'] = function (ok7x) {}, cmt['contains'] = function (rs29_8) {
        return null;
      }, cmt['removeChild'] = function (uzitm) {}, cmt;
    }, l68dso['createShaderCondition'] = function (mzcy1t) {
      var p_vhw2 = this,
          zmct1w = function () {
        var w1mczt = mzcy1t;return p_vhw2[mzcy1t['replace']('this.', '')];
      };return zmct1w;
    }, l68dso['EnvConfig'] = null, l68dso['window'] = null, l68dso['_preCreateElement'] = null, l68dso['_inited'] = ![], l68dso['wxRequest'] = null, l68dso['systemInfo'] = null, l68dso['version'] = '0.0.1', l68dso['isZiYu'] = ![], l68dso['isPosMsgYu'] = ![], l68dso['parseXMLFromString'] = function (imtyzu) {
      var $fa5e4, wtcm1z;imtyzu = imtyzu['replace'](/>\s+</g, '><');try {
        $fa5e4 = new window['Parser']['DOMParser']()['parseFromString'](imtyzu, 'text/xml');
      } catch (wzc) {
        throw '需要引入xml解析库文件';
      }return $fa5e4;
    }, l68dso['idx'] = 0x1, l68dso;
  }(),
      kl68od = function () {
    function tmyzu() {}c1twv(tmyzu, 'laya.wx.mini.MiniImage');var u0nj4i = tmyzu['prototype'];return u0nj4i['_loadImage'] = function (qk7lg) {
      var hp2w_v = this,
          d8s6ol = ![];qk7lg['indexOf']('layaNativeDir/') == -0x1 && (d8s6ol = !![], qk7lg = ldos['formatURL'](qk7lg));if (!rd289['getFileInfo'](qk7lg)) {
        if (qk7lg['indexOf']('http://') != -0x1 || qk7lg['indexOf']('https://') != -0x1) rd289['downImg'](qk7lg, new qkl7xo(tmyzu, tmyzu['onDownImgCallBack'], [qk7lg, hp2w_v]), qk7lg);else tmyzu['onCreateImage'](qk7lg, hp2w_v, !![]);
      } else tmyzu['onCreateImage'](qk7lg, hp2w_v, !d8s6ol);
    }, tmyzu['onDownImgCallBack'] = function (_2vrph, cwm, qox7lk) {
      if (!qox7lk) tmyzu['onCreateImage'](_2vrph, cwm);else cwm['onError'](null);
    }, tmyzu['onCreateImage'] = function (uymz0, yi0mz, $54jna) {
      $54jna === void 0x0 && ($54jna = ![]);var a5fe$;if (!$54jna) {
        var z1yct = rd289['getFileInfo'](uymz0),
            kg3xq = z1yct['md5'];a5fe$ = rd289['getFileNativePath'](kg3xq);
      } else a5fe$ = uymz0;if (yi0mz['imgCache'] == null) yi0mz['imgCache'] = {};var lqxg7k;function r_h9() {
        lqxg7k['onload'] = null, lqxg7k['onerror'] = null, delete yi0mz['imgCache'][uymz0];
      };var tvpcw = function () {
        r_h9(), yi0mz['onLoaded'](lqxg7k);
      },
          hpr_v2 = function () {
        r_h9(), yi0mz['event']('error', 'Load image failed');
      };yi0mz['_type'] == 'nativeimage' ? (lqxg7k = new ctuyzm['window']['Image'](), lqxg7k['crossOrigin'] = '', lqxg7k['onload'] = tvpcw, lqxg7k['onerror'] = hpr_v2, lqxg7k['src'] = a5fe$, yi0mz['imgCache'][uymz0] = lqxg7k) : new z0muy['create'](a5fe$, { 'onload': tvpcw, 'onerror': hpr_v2, 'onCreate': function (qoxl7) {
          lqxg7k = qoxl7, yi0mz['imgCache'][uymz0] = qoxl7;
        } });
    }, tmyzu;
  }(),
      zmtw1 = function () {
    function kl7qxo() {}return c1twv(kl7qxo, 'laya.wx.mini.MiniInput'), kl7qxo['_createInputElement'] = function () {
      rs_h29['_initInput'](rs_h29['area'] = ctuyzm['createElement']('textarea')), rs_h29['_initInput'](rs_h29['input'] = ctuyzm['createElement']('input')), rs_h29['inputContainer'] = ctuyzm['createElement']('div'), rs_h29['inputContainer']['style']['position'] = 'absolute', rs_h29['inputContainer']['style']['zIndex'] = 0x186a0, ctuyzm['container']['appendChild'](rs_h29['inputContainer']), rs_h29['inputContainer']['setPos'] = function (qlx7ko, x7qok) {
        rs_h29['inputContainer']['style']['left'] = qlx7ko + 'px', rs_h29['inputContainer']['style']['top'] = x7qok + 'px';
      }, h9rv_['stage']['on']('resize', null, kl7qxo['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s28d9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), zc1ty['_soundClass'] = v92_hr, zc1ty['_musicClass'] = v92_hr;
    }, kl7qxo['_onStageResize'] = function () {
      var hcwv = h9rv_['stage']['_canvasTransform']['identity']();hcwv['scale'](ctuyzm['width'] / czwt1['canvas']['width'] / $jna45['getPixelRatio'](), ctuyzm['height'] / czwt1['canvas']['height'] / $jna45['getPixelRatio']());
    }, kl7qxo['wxinputFocus'] = function (ods6l) {
      var s829rd = rs_h29['inputElement']['target'];if (s829rd && !s829rd['editable']) return;gqxkl['window']['wx']['offKeyboardConfirm'](), gqxkl['window']['wx']['offKeyboardInput'](), gqxkl['window']['wx']['showKeyboard']({ 'defaultValue': s829rd['text'], 'maxLength': s829rd['maxChars'], 'multiple': s829rd['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (r298) {}, 'fail': function (r9s_28) {} }), gqxkl['window']['wx']['onKeyboardConfirm'](function (uymtzc) {
        var yzi0mu = uymtzc ? uymtzc['value'] : '';s829rd['text'] = yzi0mu, s829rd['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gqxkl['window']['wx']['onKeyboardInput'](function (ni04j) {
        var yiu = ni04j ? ni04j['value'] : '';if (!s829rd['multiline']) {
          if (yiu['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s829rd['text'] = yiu, s829rd['event']('input');
      });
    }, kl7qxo['inputEnter'] = function () {
      rs_h29['inputElement']['target']['focus'] = ![];
    }, kl7qxo['wxinputblur'] = function () {
      kl7qxo['hideKeyboard']();
    }, kl7qxo['hideKeyboard'] = function () {
      gqxkl['window']['wx']['offKeyboardConfirm'](), gqxkl['window']['wx']['offKeyboardInput'](), gqxkl['window']['wx']['hideKeyboard']({ 'success': function (pv_r2) {
          console['log']('隐藏键盘');
        }, 'fail': function (x7q) {
          console['log']('隐藏键盘出错:' + (x7q ? x7q['errMsg'] : ''));
        } });
    }, kl7qxo;
  }(),
      j$n054 = function () {
    function twmc1() {}c1twv(twmc1, 'laya.wx.mini.MiniLoader');var xg3q7 = twmc1['prototype'];return xg3q7['load'] = function (d96os8, klx67o, kl86, y1zmtc, f4ae$5) {
      kl86 === void 0x0 && (kl86 = !![]), f4ae$5 === void 0x0 && (f4ae$5 = ![]);var e45fa$ = this;e45fa$['_url'] = d96os8;if (d96os8['indexOf']('data:image') === 0x0) e45fa$['_type'] = klx67o = 'image';else e45fa$['_type'] = klx67o || (klx67o = e45fa$['getTypeFromUrl'](d96os8));e45fa$['_cache'] = kl86, e45fa$['_data'] = null;var odlk = 'ascii';if (d96os8['indexOf']('.fnt') != -0x1) odlk = 'utf8';else klx67o == 'arraybuffer' && (odlk = '');;var sd86o = vw_hp1['getFileExtension'](d96os8);if (twmc1['_fileTypeArr']['indexOf'](sd86o) != -0x1) gqxkl['EnvConfig']['load']['call'](this, d96os8, klx67o, kl86, y1zmtc, f4ae$5);else {
        if (!rd289['getFileInfo'](d96os8)) {
          if (d96os8['indexOf']('layaNativeDir/') != -0x1) {
            if (gqxkl['isZiYu']) {
              var tzum = rd289['ziyuFileData'][d96os8];e45fa$['onLoaded'](tzum);return;
            } else {
              cosnole['log']('read read'), rd289['read'](d96os8, odlk, new qkl7xo(twmc1, twmc1['onReadNativeCallBack'], [odlk, d96os8, klx67o, kl86, y1zmtc, f4ae$5, e45fa$]));return;
            }
          }if (ldos['rootPath'] == '') var ajn$4 = d96os8;else ajn$4 = d96os8['split'](ldos['rootPath'])[0x0];d96os8['indexOf']('http://') != -0x1 || d96os8['indexOf']('https://') != -0x1 ? gqxkl['EnvConfig']['load']['call'](e45fa$, d96os8, klx67o, kl86, y1zmtc, f4ae$5) : rd289['readFile'](ajn$4, odlk, new qkl7xo(twmc1, twmc1['onReadNativeCallBack'], [odlk, d96os8, klx67o, kl86, y1zmtc, f4ae$5, e45fa$]), d96os8);
        } else gqxkl['EnvConfig']['load']['call'](this, d96os8, klx67o, kl86, y1zmtc, f4ae$5);
      }
    }, xg3q7['resMgrLoad'] = function (f4e5, vpwh, $j04n, e5, o6d8sl, dxlko6, niu0z) {
      $j04n === void 0x0 && ($j04n = 0x0), e5 === void 0x0 && (e5 = ![]), o6d8sl === void 0x0 && (o6d8sl = ![]), dxlko6 === void 0x0 && (dxlko6 = 0x0), niu0z === void 0x0 && (niu0z = 0x3), f4e5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', f4e5), gqxkl['EnvConfig']['resMgrLoad'](f4e5, (wcztm, j0in54, ui0nj) => {
        twmc1['prototype']['resMgrLoadCallBack'](wcztm, j0in54, ui0nj, vpwh);
      }, $j04n, e5, o6d8sl, dxlko6, niu0z);
    }, xg3q7['resMgrLoadCallBack'] = function (so6l8, zyt1, ztui, ae$f) {
      console['log']('buff:::', so6l8, ztui, rd289['fileNativeDir'] + '///' + rd289['fileListName']), ae$f(so6l8, zyt1, ztui);
    }, xg3q7['clearRes'] = function (n45j0$, kl6od) {
      kl6od === void 0x0 && (kl6od = ![]);var inuj0y = this;inuj0y['clearRes'](n45j0$, kl6od);var ptwv = rd289['getFileInfo'](n45j0$);if (ptwv && (n45j0$['indexOf']('http://') != -0x1 || n45j0$['indexOf']('https://') != -0x1)) {
        var qklg = ptwv['md5'],
            nuy0z = rd289['getFileNativePath'](qklg);rd289['remove'](nuy0z);
      }
    }, twmc1['onReadNativeCallBack'] = function (_rs928, wpch, tw, jnu4i0, unyiz0, tpcwv, pwhc, x76lk, okd8l) {
      jnu4i0 === void 0x0 && (jnu4i0 = !![]), tpcwv === void 0x0 && (tpcwv = ![]), x76lk === void 0x0 && (x76lk = 0x0);if (!x76lk) {
        var v_hpw1;if (tw == 'json' || tw == 'atlas') v_hpw1 = gqxkl['getJson'](okd8l['data']);else tw == 'xml' ? v_hpw1 = vw_hp1['parseXMLFromString'](okd8l['data']) : v_hpw1 = okd8l['data'];pwhc['onLoaded'](v_hpw1), !gqxkl['isZiYu'] && gqxkl['isPosMsgYu'] && tw != 'arraybuffer' && wx['postMessage']({ 'url': wpch, 'data': v_hpw1, 'isLoad': !![] });
      } else x76lk == 0x1 && gqxkl['EnvConfig']['load']['call'](pwhc, wpch, tw, jnu4i0, unyiz0, tpcwv);
    }, czy1(twmc1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), twmc1;
  }(),
      rd289 = function (xko6ld) {
    function cp1vtw() {
      cp1vtw['__super']['call'](this);;
    }return c1twv(cp1vtw, 'laya.wx.mini.MiniFileMgr', xko6ld), cp1vtw['isLoadFile'] = function (lko6) {
      return cp1vtw['_fileTypeArr']['indexOf'](lko6) != -0x1 ? !![] : ![];
    }, cp1vtw['getFileInfo'] = function (o67lxk) {
      var phv2_w = o67lxk['split']('?')[0x0],
          yi0uz = cp1vtw['filesListObj'][phv2_w];if (yi0uz == null) return null;else return yi0uz;return null;
    }, cp1vtw['onFileUpdate'] = function (j0yin, pvw1ct) {
      var mzuyct = j0yin['split']('/'),
          kqg = mzuyct[mzuyct['length'] - 0x1],
          kq37x = cp1vtw['getFileInfo'](pvw1ct);if (kq37x == null) cp1vtw['onSaveFile'](pvw1ct, kqg);else {
        if (kq37x['readyUrl'] != pvw1ct) cp1vtw['remove'](kqg, pvw1ct);
      }
    }, cp1vtw['exits'] = function (y0uj, xqkg3) {
      var $nj450 = cp1vtw['getFileNativePath'](y0uj);cp1vtw['fs']['getFileInfo']({ 'filePath': $nj450, 'success': function (mcuzty) {
          xqkg3 != null && xqkg3['runWith']([0x0, mcuzty]);
        }, 'fail': function (rs_) {
          xqkg3 != null && xqkg3['runWith']([0x1, rs_]);
        } });
    }, cp1vtw['read'] = function (h2vw, zc1yt, na5, h9_2r) {
      zc1yt === void 0x0 && (zc1yt = 'ascill'), h9_2r === void 0x0 && (h9_2r = '');var pwh2v;h9_2r != '' ? pwh2v = cp1vtw['getFileNativePath'](h2vw) : pwh2v = h2vw, cp1vtw['fs']['readFile']({ 'filePath': pwh2v, 'encoding': zc1yt, 'success': function (qg7kx) {
          na5 != null && na5['runWith']([0x0, qg7kx]);
        }, 'fail': function ($j405n) {
          if ($j405n && h9_2r != '') cp1vtw['down'](h9_2r, zc1yt, na5, h9_2r);else na5 != null && na5['runWith']([0x1]);
        } });
    }, cp1vtw['readNativeFile'] = function (wpmct1, phr_v2) {
      cp1vtw['fs']['readFile']({ 'filePath': wpmct1, 'encoding': '', 'success': function (_pwh1v) {
          phr_v2 != null && phr_v2['runWith']([0x0]);
        }, 'fail': function (r86sd) {
          phr_v2 != null && phr_v2['runWith']([0x1]);
        } });
    }, cp1vtw['down'] = function (prv2_, e4f$a5, yuczmt, cw1zmt) {
      e4f$a5 === void 0x0 && (e4f$a5 = 'ascill'), cw1zmt === void 0x0 && (cw1zmt = '');var d9r6s = cp1vtw['getFileNativePath'](cw1zmt),
          wctp = cp1vtw['wxdown']({ 'url': prv2_, 'filePath': d9r6s, 'success': function (d8s2) {
          if (d8s2['statusCode'] === 0xc8) cp1vtw['readFile'](d8s2['filePath'], e4f$a5, yuczmt, cw1zmt);
        }, 'fail': function (n40jiu) {
          yuczmt != null && yuczmt['runWith']([0x1, n40jiu]);
        } });wctp['onProgressUpdate'](function (n0$4j) {
        yuczmt != null && yuczmt['runWith']([0x2, n0$4j['progress']]);
      });
    }, cp1vtw['readFile'] = function (x6klod, n4ji50, ztmiyu, i45n0j) {
      n4ji50 === void 0x0 && (n4ji50 = 'ascill'), i45n0j === void 0x0 && (i45n0j = ''), cp1vtw['fs']['readFile']({ 'filePath': x6klod, 'encoding': n4ji50, 'success': function (zuniy0) {
          if (x6klod['indexOf']('http://') != -0x1 || x6klod['indexOf']('https://') != -0x1) cp1vtw['onFileUpdate'](x6klod, i45n0j);ztmiyu != null && ztmiyu['runWith']([0x0, zuniy0]);
        }, 'fail': function (hvp_) {
          if (hvp_) ztmiyu != null && ztmiyu['runWith']([0x1, hvp_]);
        } });
    }, cp1vtw['downImg'] = function (k86lod, w2p_hv, tcm1pw) {
      tcm1pw === void 0x0 && (tcm1pw = '');var a$5f4e = cp1vtw['wxdown']({ 'url': k86lod, 'success': function (nja4$5) {
          nja4$5['statusCode'] === 0xc8 && cp1vtw['copyFile'](nja4$5['tempFilePath'], tcm1pw, w2p_hv);
        }, 'fail': function (d8o9s6) {
          w2p_hv != null && w2p_hv['runWith']([0x1, d8o9s6]);
        } });
    }, cp1vtw['copyFile'] = function (w2p_h, nj0yui, iy0uj) {
      var pt1mw = w2p_h['split']('/'),
          jn4$05 = pt1mw[pt1mw['length'] - 0x1],
          chpvw = nj0yui['split']('?')[0x0],
          hr2s9 = cp1vtw['getFileInfo'](nj0yui),
          sd68r9 = cp1vtw['getFileNativePath'](jn4$05);cp1vtw['fs']['copyFile']({ 'srcPath': w2p_h, 'destPath': sd68r9, 'success': function (ij0u4) {
          if (!hr2s9) cp1vtw['onSaveFile'](nj0yui, jn4$05), iy0uj != null && iy0uj['runWith']([0x0]);else {
            if (hr2s9['readyUrl'] != nj0yui) cp1vtw['remove'](jn4$05, nj0yui, iy0uj);
          }
        }, 'fail': function (yn0iu) {
          iy0uj != null && iy0uj['runWith']([0x1, yn0iu]);
        } });
    }, cp1vtw['getFileNativePath'] = function (t1cvpw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t1cvpw;
    }, cp1vtw['remove'] = function (n0uji, os869d, x3gq7k) {
      os869d === void 0x0 && (os869d = '');var s6d98 = cp1vtw['getFileInfo'](os869d),
          s98d2r = cp1vtw['getFileNativePath'](s6d98['md5']);h9rv_['loader']['clearRes'](s6d98['readyUrl']), cp1vtw['fs']['unlink']({ 'filePath': s98d2r, 'success': function (x6l7ok) {
          if (os869d != '') cp1vtw['onSaveFile'](os869d, n0uji);x3gq7k != null && x3gq7k['runWith']([0x0]);
        }, 'fail': function (gxkl7) {} });
    }, cp1vtw['onSaveFile'] = function ($fae45, juniy0) {
      var mtuiy = $fae45['split']('?')[0x0];cp1vtw['filesListObj'][mtuiy] = { 'md5': juniy0, 'readyUrl': $fae45 }, cp1vtw['fs']['writeFile']({ 'filePath': cp1vtw['fileNativeDir'] + '/' + cp1vtw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cp1vtw['filesListObj']), 'success': function (o869ds) {
          console['log']('写入测试测试成功：', o869ds);
        }, 'fail': function (okq7lx) {
          console['log']('写入测试测试失败：', okq7lx);
        } });
    }, cp1vtw['existDir'] = function (j4n$a, i0uym) {
      cp1vtw['fs']['mkdir']({ 'dirPath': j4n$a, 'success': function (u0ji4) {
          i0uym != null && i0uym['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kl8d6o) {
          if (kl8d6o['errMsg']['indexOf']('file already exists') != -0x1) cp1vtw['readSync'](cp1vtw['fileListName'], 'utf8', i0uym);else i0uym != null && i0uym['runWith']([0x1, kl8d6o]);
        } });
    }, cp1vtw['readSync'] = function (t1wzc, i0n5, tmuzcy, j$f4a) {
      i0n5 === void 0x0 && (i0n5 = 'ascill'), j$f4a === void 0x0 && (j$f4a = '');var wpcvh1 = cp1vtw['getFileNativePath'](t1wzc),
          pw1hvc;try {
        pw1hvc = cp1vtw['fs']['readFileSync'](wpcvh1), tmuzcy != null && tmuzcy['runWith']([0x0, { 'data': pw1hvc }]);
      } catch (y0iuzm) {
        tmuzcy != null && tmuzcy['runWith']([0x1]);
      }
    }, cp1vtw['readCache'] = function () {}, cp1vtw['writeCache'] = function (k76l) {
      var qgk7x = readyUrl['split']('?')[0x0];cp1vtw['filesListObj'][qgk7x] = { 'md5': md5Name, 'readyUrl': readyUrl }, cp1vtw['fs']['writeFile']({ 'filePath': cp1vtw['fileNativeDir'] + '/' + cp1vtw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cp1vtw['filesListObj']), 'success': function (c1twz) {}, 'fail': function (s_9hr2) {} });
    }, cp1vtw['setNativeFileDir'] = function (lqox7) {
      cp1vtw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lqox7;
    }, cp1vtw['filesListObj'] = {}, cp1vtw['fileNativeDir'] = null, cp1vtw['fileListName'] = 'layaairfiles.txt', cp1vtw['ziyuFileData'] = {}, czy1(cp1vtw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), cp1vtw;
  }(in405j),
      v92_hr = function (dkolx6) {
    function do6s() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], do6s['__super']['call'](this), this['_sound'] = do6s['_createSound']();
    }c1twv(do6s, 'laya.wx.mini.MiniSound', dkolx6);var lkg7q = do6s['prototype'];return lkg7q['load'] = function (e4$a5) {
      var r9s86d = this;e4$a5 = ldos['formatURL'](e4$a5), this['url'] = e4$a5;if (do6s['_audioCache'][e4$a5]) {
        this['event']('complete');return;
      }function nj0ui() {
        if (do6s['_null'] != undefined) r9s86d['_sound']['onCanplay'](do6s['_null']), r9s86d['_sound']['onError'](do6s['_null']);else try {
          r9s86d['_sound']['onCanplay'](null), r9s86d['_sound']['onError'](null), do6s['_null'] = null;
        } catch (dok8l) {
          console['warn']('[wxmini] _clearSound:' + dok8l), r9s86d['_sound']['onCanplay'](hpv_w1), r9s86d['_sound']['onError'](hpv_w1), do6s['_null'] = hpv_w1;
        }
      }function xlkd6o() {
        nj0ui(), uj0i['loaded'] = !![], uj0i['event']('complete'), do6s['_audioCache'][uj0i['url']] = uj0i;
      }function o8sl(d9rs68) {
        console['error']('errCode=' + d9rs68['errCode'] + '  errMsg=' + d9rs68['errMsg']), nj0ui(), uj0i['event']('error');
      }function hpv_w1() {}this['_sound']['onCanplay'](xlkd6o), this['_sound']['onError'](o8sl), this['_sound']['src'] = e4$a5;var uj0i = this;
    }, lkg7q['play'] = function (_whpv2, tuyim) {
      _whpv2 === void 0x0 && (_whpv2 = 0x0), tuyim === void 0x0 && (tuyim = 0x0);var lo8s;if (this['url'] == zc1ty['_tMusic']) {
        if (!do6s['_musicAudio']) do6s['_musicAudio'] = do6s['_createSound']();lo8s = do6s['_musicAudio'];
      } else lo8s = do6s['_createSound']();lo8s['src'] = this['url'];var x6k7ol = new qgxlk(lo8s);return x6k7ol['url'] = this['url'], x6k7ol['loops'] = tuyim, x6k7ol['startTime'] = _whpv2, x6k7ol['play'](), zc1ty['addChannel'](x6k7ol), x6k7ol;
    }, lkg7q['dispose'] = function () {
      var kodl6x = do6s['_audioCache'][this['url']];kodl6x && (kodl6x['src'] = '', delete do6s['_audioCache'][this['url']]);
    }, hvp1_(0x0, lkg7q, 'duration', function () {
      return this['_sound']['duration'];
    }), do6s['_createSound'] = function () {
      return do6s['_id']++, gqxkl['window']['wx']['createInnerAudioContext']();
    }, do6s['_musicAudio'] = null, do6s['_id'] = 0x0, do6s['_audioCache'] = {}, do6s['_null'] = undefined, do6s;
  }(in405j),
      qgxlk = function (q7kol) {
    function hs_r2(yimz0u) {
      this['_audio'] = null, this['_onEnd'] = null, hs_r2['__super']['call'](this), this['_audio'] = yimz0u, this['_onEnd'] = vw_hp1['bind'](this['__onEnd'], this), yimz0u['onEnded'](this['_onEnd']);
    }c1twv(hs_r2, 'laya.wx.mini.MiniSoundChannel', q7kol);var sldo6 = hs_r2['prototype'];return sldo6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (h9rv_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sldo6['__onNull'] = function () {}, sldo6['play'] = function () {
      this['isStopped'] = ![], zc1ty['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sldo6['stop'] = function () {
      this['isStopped'] = !![], zc1ty['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (hs_r2['_null'] != undefined) this['_audio']['onEnded'](hs_r2['_null']);else try {
        this['_audio']['onEnded'](null), hs_r2['_null'] = null;
      } catch (qkxg7l) {
        console['warn']('[wxmini] stop:' + qkxg7l), this['_audio']['onEnded'](vw_hp1['bind'](this['__onNull'], this)), hs_r2['_null'] = vw_hp1['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sldo6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sldo6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], zc1ty['addChannel'](this), this['_audio']['play']();
    }, hvp1_(0x0, sldo6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hvp1_(0x0, sldo6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hvp1_(0x0, sldo6, 'volume', function () {
      return 0x1;
    }, function (yiz0un) {}), hs_r2['_null'] = undefined, hs_r2;
  }(hsr_92);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kxod in Laya) {
    var y0nuji = Laya[kxod];y0nuji && y0nuji['__isclass'] && (exports[kxod] = y0nuji);
  }
});