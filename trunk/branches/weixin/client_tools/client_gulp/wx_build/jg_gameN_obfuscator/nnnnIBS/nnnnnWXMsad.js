var A = wx.$N;
(function (window, document, y94q) {
  var $b49rq = y94q['un'],
      f58dht = y94q['uns'],
      yzr = y94q['static'],
      u8_mhf = y94q['class'],
      xk2is = y94q['getset'],
      spk = y94q['__newvec'],
      y3zoe = laya['utils']['Browser'],
      abq$w = laya['events']['Event'],
      c1gs7x = laya['events']['EventDispatcher'],
      _uh8d = laya['resource']['HTMLImage'],
      th58f = laya['utils']['Handler'],
      qz4y9 = laya['display']['Input'],
      uj0nl = laya['net']['Loader'],
      j3ol0e = laya['maths']['Matrix'],
      jl0nmu = laya['renders']['Render'],
      zeylo3 = laya['utils']['RunDriver'],
      xkvcsi = laya['media']['Sound'],
      lze30 = laya['media']['SoundChannel'],
      je3n0l = laya['media']['SoundManager'],
      r9q4$b = laya['display']['Stage'],
      qrb9 = laya['net']['URL'],
      yq9rb = laya['utils']['Utils'],
      mj_n0 = function () {
    function n3j0() {}return u8_mhf(n3j0, 'laya.wx.mini.MiniAdpter'), n3j0['getJson'] = function (gd15) {
      return JSON['parse'](gd15);
    }, n3j0['init'] = function (g51c7x, hd75f) {
      g51c7x === void 0x0 && (g51c7x = ![]), hd75f === void 0x0 && (hd75f = ![]);if (n3j0['_inited']) return;n3j0['window'] = window;if (n3j0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;n3j0['_inited'] = !![], n3j0['isZiYu'] = hd75f, n3j0['isPosMsgYu'] = g51c7x, n3j0['EnvConfig'] = {}, !n3j0['isZiYu'] && (gxvcs1['setNativeFileDir']('/layaairGame'), gxvcs1['existDir'](gxvcs1['fileNativeDir'], th58f['create'](n3j0, n3j0['onMkdirCallBack']))), n3j0['window']['focus'] = function () {}, y94q['getUrlPath'] = function () {}, n3j0['window']['logtime'] = function (xg71sc) {}, n3j0['window']['alertTimeLog'] = function (h8du) {}, n3j0['window']['resetShareInfo'] = function () {}, n3j0['window']['CanvasRenderingContext2D'] = function () {}, n3j0['window']['CanvasRenderingContext2D']['prototype'] = n3j0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], n3j0['window']['document']['body']['appendChild'] = function () {}, n3j0['EnvConfig']['pixelRatioInt'] = 0x0, zeylo3['getPixelRatio'] = n3j0['pixelRatio'], n3j0['_preCreateElement'] = y3zoe['createElement'], y3zoe['createElement'] = n3j0['createElement'], zeylo3['createShaderCondition'] = n3j0['createShaderCondition'], yq9rb['parseXMLFromString'] = n3j0['parseXMLFromString'], qz4y9['_createInputElement'] = w96$bq['_createInputElement'], n3j0['EnvConfig']['load'] = uj0nl['prototype']['load'], uj0nl['prototype']['load'] = z3eoyl['prototype']['load'], n3j0['isZiYu'] && g51c7x && wx['onMessage'](function (hud8_) {
        hud8_['isLoad'] && (gxvcs1['ziyuFileData'][hud8_['url']] = hud8_['data']);
      });
    }, n3j0['onMkdirCallBack'] = function ($6qwba, _mujn0) {
      if (!$6qwba) gxvcs1['filesListObj'] = JSON['parse'](_mujn0['data']);
    }, n3j0['pixelRatio'] = function () {
      if (!n3j0['EnvConfig']['pixelRatioInt']) try {
        var bqw$a6 = wx['getSystemInfoSync']();return n3j0['EnvConfig']['pixelRatioInt'] = bqw$a6['pixelRatio'], bqw$a6 = bqw$a6, bqw$a6['pixelRatio'];
      } catch (b$6q) {}return n3j0['EnvConfig']['pixelRatioInt'];
    }, n3j0['createElement'] = function (z4y3) {
      if (z4y3 == 'canvas') {
        var sxg1c;return n3j0['idx'] == 0x1 ? n3j0['isZiYu'] ? (sxg1c = sharedCanvas, sxg1c['style'] = {}) : sxg1c = window['canvas'] : sxg1c = window['wx']['createCanvas'](), n3j0['idx']++, sxg1c;
      } else {
        if (z4y3 == 'textarea' || z4y3 == 'input') return n3j0['onCreateInput'](z4y3);else {
          if (z4y3 == 'div') {
            var jum0nl = n3j0['_preCreateElement'](z4y3);return jum0nl['contains'] = function (o0lj3) {
              return null;
            }, jum0nl['removeChild'] = function (_u0) {}, jum0nl;
          } else return n3j0['_preCreateElement'](z4y3);
        }
      }
    }, n3j0['onCreateInput'] = function (bq$9) {
      var r4yb9 = n3j0['_preCreateElement'](bq$9);return r4yb9['focus'] = w96$bq['wxinputFocus'], r4yb9['blur'] = w96$bq['wxinputblur'], r4yb9['style'] = {}, r4yb9['value'] = 0x0, r4yb9['parentElement'] = {}, r4yb9['placeholder'] = {}, r4yb9['type'] = {}, r4yb9['setColor'] = function (n_8jm) {}, r4yb9['setType'] = function (qwr$) {}, r4yb9['setFontFace'] = function (vsikp) {}, r4yb9['addEventListener'] = function (muf_h8) {}, r4yb9['contains'] = function (ikxsvc) {
        return null;
      }, r4yb9['removeChild'] = function (ze03lo) {}, r4yb9;
    }, n3j0['createShaderCondition'] = function (rq9yz) {
      var xs1kvc = this,
          svix2 = function () {
        var qbry4 = rq9yz;return xs1kvc[rq9yz['replace']('this.', '')];
      };return svix2;
    }, n3j0['EnvConfig'] = null, n3j0['window'] = null, n3j0['_preCreateElement'] = null, n3j0['_inited'] = ![], n3j0['wxRequest'] = null, n3j0['systemInfo'] = null, n3j0['version'] = '0.0.1', n3j0['isZiYu'] = ![], n3j0['isPosMsgYu'] = ![], n3j0['parseXMLFromString'] = function (psk) {
      var yleoz, y4b9;psk = psk['replace'](/>\s+</g, '><');try {
        yleoz = new window['Parser']['DOMParser']()['parseFromString'](psk, 'text/xml');
      } catch (gt57fd) {
        throw '需要引入xml解析库文件';
      }return yleoz;
    }, n3j0['idx'] = 0x1, n3j0;
  }(),
      $9w6qb = function () {
    function fh85t() {}u8_mhf(fh85t, 'laya.wx.mini.MiniImage');var f8dt = fh85t['prototype'];return f8dt['_loadImage'] = function (ln0uj) {
      var f7t = this,
          um8n = ![];ln0uj['indexOf']('layaNativeDir/') == -0x1 && (um8n = !![], ln0uj = qrb9['formatURL'](ln0uj));if (!gxvcs1['getFileInfo'](ln0uj)) {
        if (ln0uj['indexOf']('http://') != -0x1 || ln0uj['indexOf']('https://') != -0x1) gxvcs1['downImg'](ln0uj, new th58f(fh85t, fh85t['onDownImgCallBack'], [ln0uj, f7t]), ln0uj);else fh85t['onCreateImage'](ln0uj, f7t, !![]);
      } else fh85t['onCreateImage'](ln0uj, f7t, !um8n);
    }, fh85t['onDownImgCallBack'] = function (m_uhf, je0ml, ojl0) {
      if (!ojl0) fh85t['onCreateImage'](m_uhf, je0ml);else je0ml['onError'](null);
    }, fh85t['onCreateImage'] = function (xv1sk, m_unh, n30elj) {
      n30elj === void 0x0 && (n30elj = ![]);var h_fm;if (!n30elj) {
        var q9b$4r = gxvcs1['getFileInfo'](xv1sk),
            oey34z = q9b$4r['md5'];h_fm = gxvcs1['getFileNativePath'](oey34z);
      } else h_fm = xv1sk;if (m_unh['imgCache'] == null) m_unh['imgCache'] = {};var h7fd5t;function m8_hfu() {
        h7fd5t['onload'] = null, h7fd5t['onerror'] = null, delete m_unh['imgCache'][xv1sk];
      };var bw6$ = function () {
        m8_hfu(), m_unh['onLoaded'](h7fd5t);
      },
          jnu_8m = function () {
        m8_hfu(), m_unh['event']('error', 'Load image failed');
      };m_unh['_type'] == 'nativeimage' ? (h7fd5t = new y3zoe['window']['Image'](), h7fd5t['crossOrigin'] = '', h7fd5t['onload'] = bw6$, h7fd5t['onerror'] = jnu_8m, h7fd5t['src'] = h_fm, m_unh['imgCache'][xv1sk] = h7fd5t) : new _uh8d['create'](h_fm, { 'onload': bw6$, 'onerror': jnu_8m, 'onCreate': function (csxiv) {
          h7fd5t = csxiv, m_unh['imgCache'][xv1sk] = csxiv;
        } });
    }, fh85t;
  }(),
      w96$bq = function () {
    function hm_8f() {}return u8_mhf(hm_8f, 'laya.wx.mini.MiniInput'), hm_8f['_createInputElement'] = function () {
      qz4y9['_initInput'](qz4y9['area'] = y3zoe['createElement']('textarea')), qz4y9['_initInput'](qz4y9['input'] = y3zoe['createElement']('input')), qz4y9['inputContainer'] = y3zoe['createElement']('div'), qz4y9['inputContainer']['style']['position'] = 'absolute', qz4y9['inputContainer']['style']['zIndex'] = 0x186a0, y3zoe['container']['appendChild'](qz4y9['inputContainer']), qz4y9['inputContainer']['setPos'] = function (lo0j, y4br9) {
        qz4y9['inputContainer']['style']['left'] = lo0j + 'px', qz4y9['inputContainer']['style']['top'] = y4br9 + 'px';
      }, y94q['stage']['on']('resize', null, hm_8f['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mh8n_) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), je3n0l['_soundClass'] = e3j, je3n0l['_musicClass'] = e3j, window['_videoClass'] = s1g7c;
    }, hm_8f['_onStageResize'] = function () {
      var me0ljn = y94q['stage']['_canvasTransform']['identity']();me0ljn['scale'](y3zoe['width'] / jl0nmu['canvas']['width'] / zeylo3['getPixelRatio'](), y3zoe['height'] / jl0nmu['canvas']['height'] / zeylo3['getPixelRatio']());
    }, hm_8f['wxinputFocus'] = function (yr4z3o) {
      var e0l3oj = qz4y9['inputElement']['target'];if (e0l3oj && !e0l3oj['editable']) return;mj_n0['window']['wx']['offKeyboardConfirm'](), mj_n0['window']['wx']['offKeyboardInput'](), mj_n0['window']['wx']['showKeyboard']({ 'defaultValue': e0l3oj['text'], 'maxLength': e0l3oj['maxChars'], 'multiple': e0l3oj['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (w$6qab) {}, 'fail': function (j0u_n) {} }), mj_n0['window']['wx']['onKeyboardConfirm'](function ($b49q) {
        var vxic = $b49q ? $b49q['value'] : '';e0l3oj['text'] = vxic, e0l3oj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mj_n0['window']['wx']['onKeyboardInput'](function (w9$rbq) {
        var t8dh5f = w9$rbq ? w9$rbq['value'] : '';if (!e0l3oj['multiline']) {
          if (t8dh5f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }e0l3oj['text'] = t8dh5f, e0l3oj['event']('input');
      });
    }, hm_8f['inputEnter'] = function () {
      qz4y9['inputElement']['target']['focus'] = ![];
    }, hm_8f['wxinputblur'] = function () {
      hm_8f['hideKeyboard']();
    }, hm_8f['hideKeyboard'] = function () {
      mj_n0['window']['wx']['offKeyboardConfirm'](), mj_n0['window']['wx']['offKeyboardInput'](), mj_n0['window']['wx']['hideKeyboard']({ 'success': function (vskicx) {
          console['log']('隐藏键盘');
        }, 'fail': function (fh8d_t) {
          console['log']('隐藏键盘出错:' + (fh8d_t ? fh8d_t['errMsg'] : ''));
        } });
    }, hm_8f;
  }(),
      z3eoyl = function () {
    function v1cxsg() {}u8_mhf(v1cxsg, 'laya.wx.mini.MiniLoader');var o4y9r = v1cxsg['prototype'];return o4y9r['load'] = function (ikvsx2, tg75fd, th7d5f, yo4ez3, x2iksv) {
      th7d5f === void 0x0 && (th7d5f = !![]), x2iksv === void 0x0 && (x2iksv = ![]);var ez03l = this;ez03l['_url'] = ikvsx2;if (ikvsx2['indexOf']('data:image') === 0x0) ez03l['_type'] = tg75fd = 'image';else ez03l['_type'] = tg75fd || (tg75fd = ez03l['getTypeFromUrl'](ikvsx2));ez03l['_cache'] = th7d5f, ez03l['_data'] = null;var x17cg = 'ascii';if (ikvsx2['indexOf']('.fnt') != -0x1) x17cg = 'utf8';else tg75fd == 'arraybuffer' && (x17cg = '');;var ivskc = yq9rb['getFileExtension'](ikvsx2);if (v1cxsg['_fileTypeArr']['indexOf'](ivskc) != -0x1) mj_n0['EnvConfig']['load']['call'](this, ikvsx2, tg75fd, th7d5f, yo4ez3, x2iksv);else {
        if (!gxvcs1['getFileInfo'](ikvsx2)) {
          if (ikvsx2['indexOf']('layaNativeDir/') != -0x1) {
            if (mj_n0['isZiYu']) {
              var thfd57 = gxvcs1['ziyuFileData'][ikvsx2];ez03l['onLoaded'](thfd57);return;
            } else {
              cosnole['log']('read read'), gxvcs1['read'](ikvsx2, x17cg, new th58f(v1cxsg, v1cxsg['onReadNativeCallBack'], [x17cg, ikvsx2, tg75fd, th7d5f, yo4ez3, x2iksv, ez03l]));return;
            }
          }if (qrb9['rootPath'] == '') var wb$qr = ikvsx2;else wb$qr = ikvsx2['split'](qrb9['rootPath'])[0x0];ikvsx2['indexOf']('http://') != -0x1 || ikvsx2['indexOf']('https://') != -0x1 ? mj_n0['EnvConfig']['load']['call'](ez03l, ikvsx2, tg75fd, th7d5f, yo4ez3, x2iksv) : gxvcs1['readFile'](wb$qr, x17cg, new th58f(v1cxsg, v1cxsg['onReadNativeCallBack'], [x17cg, ikvsx2, tg75fd, th7d5f, yo4ez3, x2iksv, ez03l]), ikvsx2);
        } else mj_n0['EnvConfig']['load']['call'](this, ikvsx2, tg75fd, th7d5f, yo4ez3, x2iksv);
      }
    }, o4y9r['resMgrLoad'] = function (xsg17c, jel, lze, ickvxs, jmun_0, $bw96, tg5) {
      lze === void 0x0 && (lze = 0x0), ickvxs === void 0x0 && (ickvxs = ![]), jmun_0 === void 0x0 && (jmun_0 = ![]), $bw96 === void 0x0 && ($bw96 = 0x0), tg5 === void 0x0 && (tg5 = 0x3), xsg17c['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xsg17c), mj_n0['EnvConfig']['resMgrLoad'](xsg17c, (u_8dhf, vxcki, _nm0ju) => {
        v1cxsg['prototype']['resMgrLoadCallBack'](u_8dhf, vxcki, _nm0ju, jel);
      }, lze, ickvxs, jmun_0, $bw96, tg5);
    }, o4y9r['resMgrLoadCallBack'] = function (kvsip, xg1v, cvkx1s, ln0j3e) {
      console['log']('buff:::', kvsip, cvkx1s, gxvcs1['fileNativeDir'] + '///' + gxvcs1['fileListName']), ln0j3e(kvsip, xg1v, cvkx1s);
    }, o4y9r['clearRes'] = function (xsi2, ezl03o) {
      ezl03o === void 0x0 && (ezl03o = ![]);var vsi2k = this;vsi2k['clearRes'](xsi2, ezl03o);var rq94y = gxvcs1['getFileInfo'](xsi2);if (rq94y && (xsi2['indexOf']('http://') != -0x1 || xsi2['indexOf']('https://') != -0x1)) {
        var _mh8u = rq94y['md5'],
            zyloe3 = gxvcs1['getFileNativePath'](_mh8u);gxvcs1['remove'](zyloe3);
      }
    }, v1cxsg['onReadNativeCallBack'] = function (nlej03, ly3oez, yeolz3, d71g5, t_h, u_m, g75t1, _8udhf, oej0) {
      d71g5 === void 0x0 && (d71g5 = !![]), u_m === void 0x0 && (u_m = ![]), _8udhf === void 0x0 && (_8udhf = 0x0);if (!_8udhf) {
        var r4b;if (yeolz3 == 'json' || yeolz3 == 'atlas') r4b = mj_n0['getJson'](oej0['data']);else yeolz3 == 'xml' ? r4b = yq9rb['parseXMLFromString'](oej0['data']) : r4b = oej0['data'];g75t1['onLoaded'](r4b), !mj_n0['isZiYu'] && mj_n0['isPosMsgYu'] && yeolz3 != 'arraybuffer' && wx['postMessage']({ 'url': ly3oez, 'data': r4b, 'isLoad': !![] });
      } else _8udhf == 0x1 && mj_n0['EnvConfig']['load']['call'](g75t1, ly3oez, yeolz3, d71g5, t_h, u_m);
    }, yzr(v1cxsg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), v1cxsg;
  }(),
      gxvcs1 = function ($qwb9) {
    function xvis2() {
      xvis2['__super']['call'](this);;
    }return u8_mhf(xvis2, 'laya.wx.mini.MiniFileMgr', $qwb9), xvis2['isLoadFile'] = function (uf8_h) {
      return xvis2['_fileTypeArr']['indexOf'](uf8_h) != -0x1 ? !![] : ![];
    }, xvis2['getFileInfo'] = function (d5tg7f) {
      var xksciv = d5tg7f['split']('?')[0x0],
          e3oz0 = xvis2['filesListObj'][xksciv];if (e3oz0 == null) return null;else return e3oz0;return null;
    }, xvis2['onFileUpdate'] = function (q$r9b4, w6q$) {
      var spiv = q$r9b4['split']('/'),
          hd8uf_ = spiv[spiv['length'] - 0x1],
          cxg17s = xvis2['getFileInfo'](w6q$);if (cxg17s == null) xvis2['onSaveFile'](w6q$, hd8uf_);else {
        if (cxg17s['readyUrl'] != w6q$) xvis2['remove'](hd8uf_, w6q$);
      }
    }, xvis2['exits'] = function (lezo03, xv1skc) {
      var b6$q9 = xvis2['getFileNativePath'](lezo03);xvis2['fs']['getFileInfo']({ 'filePath': b6$q9, 'success': function (ryq9b4) {
          xv1skc != null && xv1skc['runWith']([0x0, ryq9b4]);
        }, 'fail': function ($q49b) {
          xv1skc != null && xv1skc['runWith']([0x1, $q49b]);
        } });
    }, xvis2['read'] = function (r4z, z9oyr4, skvixc, t517gd) {
      z9oyr4 === void 0x0 && (z9oyr4 = 'ascill'), t517gd === void 0x0 && (t517gd = '');var g7td5f;t517gd != '' ? g7td5f = xvis2['getFileNativePath'](r4z) : g7td5f = r4z, xvis2['fs']['readFile']({ 'filePath': g7td5f, 'encoding': z9oyr4, 'success': function (o3yzle) {
          skvixc != null && skvixc['runWith']([0x0, o3yzle]);
        }, 'fail': function (ozely) {
          if (ozely && t517gd != '') xvis2['down'](t517gd, z9oyr4, skvixc, t517gd);else skvixc != null && skvixc['runWith']([0x1]);
        } });
    }, xvis2['readNativeFile'] = function (_m8jnu, tcg1) {
      xvis2['fs']['readFile']({ 'filePath': _m8jnu, 'encoding': '', 'success': function (fgtd7) {
          tcg1 != null && tcg1['runWith']([0x0]);
        }, 'fail': function (mnj_) {
          tcg1 != null && tcg1['runWith']([0x1]);
        } });
    }, xvis2['down'] = function (d_tf8h, hm_nu, d5ft7h, z43yor) {
      hm_nu === void 0x0 && (hm_nu = 'ascill'), z43yor === void 0x0 && (z43yor = '');var ol3eyz = xvis2['getFileNativePath'](z43yor),
          f_h8m = xvis2['wxdown']({ 'url': d_tf8h, 'filePath': ol3eyz, 'success': function (ujml0n) {
          if (ujml0n['statusCode'] === 0xc8) xvis2['readFile'](ujml0n['filePath'], hm_nu, d5ft7h, z43yor);
        }, 'fail': function (t5gf7) {
          d5ft7h != null && d5ft7h['runWith']([0x1, t5gf7]);
        } });f_h8m['onProgressUpdate'](function (lo3ez) {
        d5ft7h != null && d5ft7h['runWith']([0x2, lo3ez['progress']]);
      });
    }, xvis2['readFile'] = function (b$wq6a, elo3yz, xg1cvs, sxkic) {
      elo3yz === void 0x0 && (elo3yz = 'ascill'), sxkic === void 0x0 && (sxkic = ''), xvis2['fs']['readFile']({ 'filePath': b$wq6a, 'encoding': elo3yz, 'success': function (xcg7) {
          if (b$wq6a['indexOf']('http://') != -0x1 || b$wq6a['indexOf']('https://') != -0x1) xvis2['onFileUpdate'](b$wq6a, sxkic);xg1cvs != null && xg1cvs['runWith']([0x0, xcg7]);
        }, 'fail': function (fdh_8t) {
          if (fdh_8t) xg1cvs != null && xg1cvs['runWith']([0x1, fdh_8t]);
        } });
    }, xvis2['downImg'] = function (u0njlm, zoe, d57gft) {
      d57gft === void 0x0 && (d57gft = '');var nju8m = xvis2['wxdown']({ 'url': u0njlm, 'success': function (_ujnm8) {
          _ujnm8['statusCode'] === 0xc8 && xvis2['copyFile'](_ujnm8['tempFilePath'], d57gft, zoe);
        }, 'fail': function (f5gdt7) {
          zoe != null && zoe['runWith']([0x1, f5gdt7]);
        } });
    }, xvis2['copyFile'] = function (xgc1sv, $wq96, o4zyr9) {
      var n8_uhm = xgc1sv['split']('/'),
          tf_dh = n8_uhm[n8_uhm['length'] - 0x1],
          t1c57 = $wq96['split']('?')[0x0],
          uf_8hd = xvis2['getFileInfo']($wq96),
          zryo49 = xvis2['getFileNativePath'](tf_dh);xvis2['fs']['copyFile']({ 'srcPath': xgc1sv, 'destPath': zryo49, 'success': function (fmu8_h) {
          if (!uf_8hd) xvis2['onSaveFile']($wq96, tf_dh), o4zyr9 != null && o4zyr9['runWith']([0x0]);else {
            if (uf_8hd['readyUrl'] != $wq96) xvis2['remove'](tf_dh, $wq96, o4zyr9);
          }
        }, 'fail': function (l03n) {
          o4zyr9 != null && o4zyr9['runWith']([0x1, l03n]);
        } });
    }, xvis2['getFileNativePath'] = function (f75tdg) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + f75tdg;
    }, xvis2['remove'] = function (b4y9q, h_t8d, h5df8t) {
      h_t8d === void 0x0 && (h_t8d = '');var qy4r9z = xvis2['getFileInfo'](h_t8d),
          nlejm0 = xvis2['getFileNativePath'](qy4r9z['md5']);y94q['loader']['clearRes'](qy4r9z['readyUrl']), xvis2['fs']['unlink']({ 'filePath': nlejm0, 'success': function (oe3lz0) {
          if (h_t8d != '') xvis2['onSaveFile'](h_t8d, b4y9q);h5df8t != null && h5df8t['runWith']([0x0]);
        }, 'fail': function (ipk2s) {} });
    }, xvis2['onSaveFile'] = function (mujn8, hf5d8) {
      var ksp = mujn8['split']('?')[0x0];xvis2['filesListObj'][ksp] = { 'md5': hf5d8, 'readyUrl': mujn8 }, xvis2['fs']['writeFile']({ 'filePath': xvis2['fileNativeDir'] + '/' + xvis2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xvis2['filesListObj']), 'success': function (g75xc) {
          console['log']('写入测试测试成功：', g75xc);
        }, 'fail': function (hf8td5) {
          console['log']('写入测试测试失败：', hf8td5);
        } });
    }, xvis2['existDir'] = function (zl3oe0, yrbq4) {
      xvis2['fs']['mkdir']({ 'dirPath': zl3oe0, 'success': function (isxv2) {
          yrbq4 != null && yrbq4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ivsx) {
          if (ivsx['errMsg']['indexOf']('file already exists') != -0x1) xvis2['readSync'](xvis2['fileListName'], 'utf8', yrbq4);else yrbq4 != null && yrbq4['runWith']([0x1, ivsx]);
        } });
    }, xvis2['readSync'] = function (f5dg, ixv2, qbw69, g71tc) {
      ixv2 === void 0x0 && (ixv2 = 'ascill'), g71tc === void 0x0 && (g71tc = '');var df5h8 = xvis2['getFileNativePath'](f5dg),
          fh8u_d;try {
        fh8u_d = xvis2['fs']['readFileSync'](df5h8), qbw69 != null && qbw69['runWith']([0x0, { 'data': fh8u_d }]);
      } catch (oe3yzl) {
        qbw69 != null && qbw69['runWith']([0x1]);
      }
    }, xvis2['readCache'] = function () {}, xvis2['writeCache'] = function (m8unh) {
      var e4z = readyUrl['split']('?')[0x0];xvis2['filesListObj'][e4z] = { 'md5': md5Name, 'readyUrl': readyUrl }, xvis2['fs']['writeFile']({ 'filePath': xvis2['fileNativeDir'] + '/' + xvis2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xvis2['filesListObj']), 'success': function (unmh8) {}, 'fail': function (yor34z) {} });
    }, xvis2['setNativeFileDir'] = function (eo3z4) {
      xvis2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + eo3z4;
    }, xvis2['filesListObj'] = {}, xvis2['fileNativeDir'] = null, xvis2['fileListName'] = 'layaairfiles.txt', xvis2['ziyuFileData'] = {}, yzr(xvis2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), xvis2;
  }(c1gs7x),
      e3j = function (gc17sx) {
    function z3y4o() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], z3y4o['__super']['call'](this), this['_sound'] = z3y4o['_createSound'](), this['_chanell'] = new sivc(this['_sound']);
    }u8_mhf(z3y4o, 'laya.wx.mini.MiniSound', gc17sx);var x15gc = z3y4o['prototype'];return x15gc['load'] = function (vsixc) {
      var r4o9zy = this;vsixc = qrb9['formatURL'](vsixc), this['url'] = vsixc;if (z3y4o['_audioCache'][vsixc]) {
        this['event']('complete');return;
      }function o3z4() {
        if (z3y4o['_null'] != undefined) r4o9zy['_sound']['onCanplay'](z3y4o['_null']), r4o9zy['_sound']['onError'](z3y4o['_null']);else try {
          r4o9zy['_sound']['onCanplay'](null), r4o9zy['_sound']['onError'](null), z3y4o['_null'] = null;
        } catch (yoze34) {
          console['warn']('[wxmini] _clearSound:' + yoze34), r4o9zy['_sound']['onCanplay'](kivcs), r4o9zy['_sound']['onError'](kivcs), z3y4o['_null'] = kivcs;
        }
      }function t5fg7d() {
        b9w$r['loaded'] = !![], b9w$r['event']('complete'), z3y4o['_audioCache'][b9w$r['url']] = b9w$r;
      }function l0jme(yr4qb) {
        console['error']('errCode=' + yr4qb['errCode'] + '  errMsg=' + yr4qb['errMsg']), b9w$r['event']('error');
      }function kivcs() {}this['_sound']['onCanplay'](t5fg7d), this['_sound']['onError'](l0jme), this['_sound']['src'] = vsixc;var b9w$r = this;
    }, x15gc['play'] = function (c1sxgv, jnm0l) {
      c1sxgv === void 0x0 && (c1sxgv = 0x0), jnm0l === void 0x0 && (jnm0l = 0x0);var y3z4ro, ezl3y;if (this['url'] == je3n0l['_tMusic']) {
        if (!z3y4o['_musicAudio']) z3y4o['_musicAudio'] = this['_sound'];y3z4ro = z3y4o['_musicAudio'], ezl3y = this['_chanell'];
      } else y3z4ro = this['_sound'], ezl3y = this['_chanell'];return y3z4ro['src'] = this['url'], y3z4ro['startTime'] = 0x0, ezl3y['isStopped'] && (ezl3y['url'] = this['url'], ezl3y['loops'] = jnm0l, ezl3y['startTime'] = c1sxgv, ezl3y['play'](), je3n0l['addChannel'](ezl3y)), ezl3y;
    }, x15gc['dispose'] = function () {
      var cgv1xs = z3y4o['_audioCache'][this['url']];cgv1xs && (cgv1xs['src'] = '', delete z3y4o['_audioCache'][this['url']]);
    }, xk2is(0x0, x15gc, 'duration', function () {
      return this['_sound']['duration'];
    }), z3y4o['_createSound'] = function () {
      z3y4o['_id']++;var el = mj_n0['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return el;
    }, z3y4o['_musicAudio'] = null, z3y4o['_id'] = 0x0, z3y4o['_audioCache'] = {}, z3y4o['_null'] = undefined, z3y4o;
  }(c1gs7x),
      sivc = function (n8u_) {
    function dgt571(mun_8h) {
      this['_audio'] = null, this['_onEnd'] = null, dgt571['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = mun_8h, this['_onEnd'] = yq9rb['bind'](this['__onEnd'], this), mun_8h['onEnded'](this['_onEnd']);
    }u8_mhf(dgt571, 'laya.wx.mini.MiniSoundChannel', n8u_);var nle03j = dgt571['prototype'];return nle03j['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (y94q['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, nle03j['__onNull'] = function () {}, nle03j['play'] = function () {
      this['isStopped'] = ![], je3n0l['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, nle03j['stop'] = function () {
      this['isStopped'] = !![], je3n0l['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, nle03j['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, nle03j['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], je3n0l['addChannel'](this), this['_audio']['play']();
    }, xk2is(0x0, nle03j, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xk2is(0x0, nle03j, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xk2is(0x0, nle03j, 'volume', function () {
      return 0x1;
    }, function (zyr9q) {}), dgt571['_null'] = undefined, dgt571;
  }(lze30),
      s1g7c = function () {
    function nm_j() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = mj_n0['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }u8_mhf(nm_j, 'laya.wx.mini.MiniVideo');var dtf8h_ = nm_j['prototype'];return dtf8h_['on'] = function (psvi, wqb6a, g1scvx) {
      if (psvi == 'loadedmetadata') this['onPlayFunc'] = g1scvx['bind'](wqb6a), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else psvi == 'ended' && (this['onEndedFunC'] = g1scvx['bind'](wqb6a), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, dtf8h_['onTimeUpdateFunc'] = function ($ab6) {
      this['position'] = $ab6['position'], this['_duration'] = $ab6['duration'];
    }, dtf8h_['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, dtf8h_['onended'] = function (si2vx, z0e3lo) {
      this['onEndedFunC'] = z0e3lo['bind'](si2vx), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, dtf8h_['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, dtf8h_['off'] = function ($qw6a, vsk1, t57dfg) {
      if ($qw6a == 'loadedmetadata') this['onPlayFunc'] = t57dfg['bind'](vsk1), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else $qw6a == 'ended' && (this['onEndedFunC'] = t57dfg['bind'](vsk1), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, dtf8h_['load'] = function (f8hm_u) {
      if (!this['videoElement']) return;this['videoElement']['src'] = f8hm_u;
    }, dtf8h_['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, dtf8h_['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, dtf8h_['size'] = function (enlj3, yzo43r) {
      if (!this['videoElement']) return;this['videoElement']['width'] = enlj3, this['videoElement']['height'] = yzo43r;
    }, dtf8h_['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, dtf8h_['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, xk2is(0x0, dtf8h_, 'duration', function () {
      return this['_duration'];
    }), xk2is(0x0, dtf8h_, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (tgdf5) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = tgdf5;
    }), xk2is(0x0, dtf8h_, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), xk2is(0x0, dtf8h_, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), xk2is(0x0, dtf8h_, 'ended', function () {
      return this['videoend'];
    }), xk2is(0x0, dtf8h_, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (o30jel) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = o30jel;
    }), xk2is(0x0, dtf8h_, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (lujn) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = lujn;
    }), xk2is(0x0, dtf8h_, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (u_mh) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = u_mh;
    }), xk2is(0x0, dtf8h_, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), xk2is(0x0, dtf8h_, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (ksp2vi) {
      if (!this['videoElement']) return;this['videoElement']['x'] = ksp2vi;
    }), xk2is(0x0, dtf8h_, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (h_u8mn) {
      if (!this['videoElement']) return;this['videoElement']['y'] = h_u8mn;
    }), xk2is(0x0, dtf8h_, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), xk2is(0x0, dtf8h_, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function ($9brw) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $9brw;
    }), xk2is(0x0, dtf8h_, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (eln0) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = eln0;
    }), xk2is(0x0, dtf8h_, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (mn8ju) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = mn8ju;
    }), nm_j;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t57dhf in Laya) {
    var htd8f5 = Laya[t57dhf];htd8f5 && htd8f5['__isclass'] && (exports[t57dhf] = htd8f5);
  }
});