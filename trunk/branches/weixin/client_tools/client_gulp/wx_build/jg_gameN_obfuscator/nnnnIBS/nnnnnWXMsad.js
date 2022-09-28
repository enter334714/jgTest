var A = wx.$N;
(function (window, document, rz4o9) {
  var oy3ez = rz4o9['un'],
      orz = rz4o9['uns'],
      vixs2k = rz4o9['static'],
      _umf8 = rz4o9['class'],
      $69 = rz4o9['getset'],
      rq4b9 = rz4o9['__newvec'],
      eo3yz4 = laya['utils']['Browser'],
      c1sgvx = laya['events']['Event'],
      rq9$b4 = laya['events']['EventDispatcher'],
      hd8tf_ = laya['resource']['HTMLImage'],
      y3roz4 = laya['utils']['Handler'],
      h8fu_d = laya['display']['Input'],
      ejmn0l = laya['net']['Loader'],
      e30ojl = laya['maths']['Matrix'],
      v2six = laya['renders']['Render'],
      htd8_f = laya['utils']['RunDriver'],
      b9$4 = laya['media']['Sound'],
      wr$qb = laya['media']['SoundChannel'],
      m_n8uj = laya['media']['SoundManager'],
      f5tg7 = laya['display']['Stage'],
      ze0lo3 = laya['net']['URL'],
      isxvkc = laya['utils']['Utils'],
      qrw9b = function () {
    function x517c() {}return _umf8(x517c, 'laya.wx.mini.MiniAdpter'), x517c['getJson'] = function (xikv2s) {
      return JSON['parse'](xikv2s);
    }, x517c['init'] = function (q94br$, yoz3r4) {
      q94br$ === void 0x0 && (q94br$ = ![]), yoz3r4 === void 0x0 && (yoz3r4 = ![]);if (x517c['_inited']) return;x517c['window'] = window;if (x517c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;x517c['_inited'] = !![], x517c['isZiYu'] = yoz3r4, x517c['isPosMsgYu'] = q94br$, x517c['EnvConfig'] = {}, !x517c['isZiYu'] && (o3yez4['setNativeFileDir']('/layaairGame'), o3yez4['existDir'](o3yez4['fileNativeDir'], y3roz4['create'](x517c, x517c['onMkdirCallBack']))), x517c['window']['focus'] = function () {}, rz4o9['getUrlPath'] = function () {}, x517c['window']['logtime'] = function (c7t15) {}, x517c['window']['alertTimeLog'] = function (n0lj) {}, x517c['window']['resetShareInfo'] = function () {}, x517c['window']['CanvasRenderingContext2D'] = function () {}, x517c['window']['CanvasRenderingContext2D']['prototype'] = x517c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], x517c['window']['document']['body']['appendChild'] = function () {}, x517c['EnvConfig']['pixelRatioInt'] = 0x0, htd8_f['getPixelRatio'] = x517c['pixelRatio'], x517c['_preCreateElement'] = eo3yz4['createElement'], eo3yz4['createElement'] = x517c['createElement'], htd8_f['createShaderCondition'] = x517c['createShaderCondition'], isxvkc['parseXMLFromString'] = x517c['parseXMLFromString'], h8fu_d['_createInputElement'] = jm8nu['_createInputElement'], x517c['EnvConfig']['load'] = ejmn0l['prototype']['load'], ejmn0l['prototype']['load'] = jmu0nl['prototype']['load'], x517c['isZiYu'] && q94br$ && wx['onMessage'](function (_8fhd) {
        _8fhd['isLoad'] && (o3yez4['ziyuFileData'][_8fhd['url']] = _8fhd['data']);
      });
    }, x517c['onMkdirCallBack'] = function (kp2i, um_n0j) {
      if (!kp2i) o3yez4['filesListObj'] = JSON['parse'](um_n0j['data']);
    }, x517c['pixelRatio'] = function () {
      if (!x517c['EnvConfig']['pixelRatioInt']) try {
        var unh_8 = wx['getSystemInfoSync']();return x517c['EnvConfig']['pixelRatioInt'] = unh_8['pixelRatio'], unh_8 = unh_8, unh_8['pixelRatio'];
      } catch (mujnl) {}return x517c['EnvConfig']['pixelRatioInt'];
    }, x517c['createElement'] = function (brw$9q) {
      if (brw$9q == 'canvas') {
        var h8_mun;return x517c['idx'] == 0x1 ? x517c['isZiYu'] ? (h8_mun = sharedCanvas, h8_mun['style'] = {}) : h8_mun = window['canvas'] : h8_mun = window['wx']['createCanvas'](), x517c['idx']++, h8_mun;
      } else {
        if (brw$9q == 'textarea' || brw$9q == 'input') return x517c['onCreateInput'](brw$9q);else {
          if (brw$9q == 'div') {
            var visp = x517c['_preCreateElement'](brw$9q);return visp['contains'] = function (roz94y) {
              return null;
            }, visp['removeChild'] = function (dh_t8) {}, visp;
          } else return x517c['_preCreateElement'](brw$9q);
        }
      }
    }, x517c['onCreateInput'] = function (ksxv1) {
      var q$b6w = x517c['_preCreateElement'](ksxv1);return q$b6w['focus'] = jm8nu['wxinputFocus'], q$b6w['blur'] = jm8nu['wxinputblur'], q$b6w['style'] = {}, q$b6w['value'] = 0x0, q$b6w['parentElement'] = {}, q$b6w['placeholder'] = {}, q$b6w['type'] = {}, q$b6w['setColor'] = function (gxsc17) {}, q$b6w['setType'] = function (x57g) {}, q$b6w['setFontFace'] = function (mfu8_h) {}, q$b6w['addEventListener'] = function ($rqbw) {}, q$b6w['contains'] = function (dgt51) {
        return null;
      }, q$b6w['removeChild'] = function (a6q$wb) {}, q$b6w;
    }, x517c['createShaderCondition'] = function (t7hf) {
      var vscg = this,
          fduh8 = function () {
        var $w6abq = t7hf;return vscg[t7hf['replace']('this.', '')];
      };return fduh8;
    }, x517c['EnvConfig'] = null, x517c['window'] = null, x517c['_preCreateElement'] = null, x517c['_inited'] = ![], x517c['wxRequest'] = null, x517c['systemInfo'] = null, x517c['version'] = '0.0.1', x517c['isZiYu'] = ![], x517c['isPosMsgYu'] = ![], x517c['parseXMLFromString'] = function (lunm0) {
      var yzleo, csx1g7;lunm0 = lunm0['replace'](/>\s+</g, '><');try {
        yzleo = new window['Parser']['DOMParser']()['parseFromString'](lunm0, 'text/xml');
      } catch (cisv) {
        throw '需要引入xml解析库文件';
      }return yzleo;
    }, x517c['idx'] = 0x1, x517c;
  }(),
      g51cx = function () {
    function ljen03() {}_umf8(ljen03, 'laya.wx.mini.MiniImage');var $96qwb = ljen03['prototype'];return $96qwb['_loadImage'] = function (d1gt7) {
      var r9qz4 = this,
          du8f_ = ![];d1gt7['indexOf']('layaNativeDir/') == -0x1 && (du8f_ = !![], d1gt7 = ze0lo3['formatURL'](d1gt7));if (!o3yez4['getFileInfo'](d1gt7)) {
        if (d1gt7['indexOf']('http://') != -0x1 || d1gt7['indexOf']('https://') != -0x1) o3yez4['downImg'](d1gt7, new y3roz4(ljen03, ljen03['onDownImgCallBack'], [d1gt7, r9qz4]), d1gt7);else ljen03['onCreateImage'](d1gt7, r9qz4, !![]);
      } else ljen03['onCreateImage'](d1gt7, r9qz4, !du8f_);
    }, ljen03['onDownImgCallBack'] = function (dht_f8, xivks, e3yzl) {
      if (!e3yzl) ljen03['onCreateImage'](dht_f8, xivks);else xivks['onError'](null);
    }, ljen03['onCreateImage'] = function (sxcg17, u_mfh, u_8nm) {
      u_8nm === void 0x0 && (u_8nm = ![]);var $qrw9b;if (!u_8nm) {
        var z3eyo = o3yez4['getFileInfo'](sxcg17),
            yr9z4 = z3eyo['md5'];$qrw9b = o3yez4['getFileNativePath'](yr9z4);
      } else $qrw9b = sxcg17;if (u_mfh['imgCache'] == null) u_mfh['imgCache'] = {};var baw6;function zo9r4y() {
        baw6['onload'] = null, baw6['onerror'] = null, delete u_mfh['imgCache'][sxcg17];
      };var ikv2s = function () {
        zo9r4y(), u_mfh['onLoaded'](baw6);
      },
          c5x1 = function () {
        zo9r4y(), u_mfh['event']('error', 'Load image failed');
      };u_mfh['_type'] == 'nativeimage' ? (baw6 = new eo3yz4['window']['Image'](), baw6['crossOrigin'] = '', baw6['onload'] = ikv2s, baw6['onerror'] = c5x1, baw6['src'] = $qrw9b, u_mfh['imgCache'][sxcg17] = baw6) : new hd8tf_['create']($qrw9b, { 'onload': ikv2s, 'onerror': c5x1, 'onCreate': function (h_ftd8) {
          baw6 = h_ftd8, u_mfh['imgCache'][sxcg17] = h_ftd8;
        } });
    }, ljen03;
  }(),
      jm8nu = function () {
    function m_jn0u() {}return _umf8(m_jn0u, 'laya.wx.mini.MiniInput'), m_jn0u['_createInputElement'] = function () {
      h8fu_d['_initInput'](h8fu_d['area'] = eo3yz4['createElement']('textarea')), h8fu_d['_initInput'](h8fu_d['input'] = eo3yz4['createElement']('input')), h8fu_d['inputContainer'] = eo3yz4['createElement']('div'), h8fu_d['inputContainer']['style']['position'] = 'absolute', h8fu_d['inputContainer']['style']['zIndex'] = 0x186a0, eo3yz4['container']['appendChild'](h8fu_d['inputContainer']), h8fu_d['inputContainer']['setPos'] = function (oyzr43, y9zo4) {
        h8fu_d['inputContainer']['style']['left'] = oyzr43 + 'px', h8fu_d['inputContainer']['style']['top'] = y9zo4 + 'px';
      }, rz4o9['stage']['on']('resize', null, m_jn0u['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (z3o4yr) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), m_n8uj['_soundClass'] = yleo3, m_n8uj['_musicClass'] = yleo3, window['_videoClass'] = yo4e;
    }, m_jn0u['_onStageResize'] = function () {
      var xg5c = rz4o9['stage']['_canvasTransform']['identity']();xg5c['scale'](eo3yz4['width'] / v2six['canvas']['width'] / htd8_f['getPixelRatio'](), eo3yz4['height'] / v2six['canvas']['height'] / htd8_f['getPixelRatio']());
    }, m_jn0u['wxinputFocus'] = function (bqw9r) {
      var isvx2k = h8fu_d['inputElement']['target'];if (isvx2k && !isvx2k['editable']) return;qrw9b['window']['wx']['offKeyboardConfirm'](), qrw9b['window']['wx']['offKeyboardInput'](), qrw9b['window']['wx']['showKeyboard']({ 'defaultValue': isvx2k['text'], 'maxLength': isvx2k['maxChars'], 'multiple': isvx2k['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y4roz3) {}, 'fail': function (n0mje) {} }), qrw9b['window']['wx']['onKeyboardConfirm'](function (ul0mjn) {
        var n30jl = ul0mjn ? ul0mjn['value'] : '';isvx2k['text'] = n30jl, isvx2k['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), qrw9b['window']['wx']['onKeyboardInput'](function (isvkc) {
        var zo3yl = isvkc ? isvkc['value'] : '';if (!isvx2k['multiline']) {
          if (zo3yl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }isvx2k['text'] = zo3yl, isvx2k['event']('input');
      });
    }, m_jn0u['inputEnter'] = function () {
      h8fu_d['inputElement']['target']['focus'] = ![];
    }, m_jn0u['wxinputblur'] = function () {
      m_jn0u['hideKeyboard']();
    }, m_jn0u['hideKeyboard'] = function () {
      qrw9b['window']['wx']['offKeyboardConfirm'](), qrw9b['window']['wx']['offKeyboardInput'](), qrw9b['window']['wx']['hideKeyboard']({ 'success': function (fd5t7h) {
          console['log']('隐藏键盘');
        }, 'fail': function (s2ki) {
          console['log']('隐藏键盘出错:' + (s2ki ? s2ki['errMsg'] : ''));
        } });
    }, m_jn0u;
  }(),
      jmu0nl = function () {
    function $wa6qb() {}_umf8($wa6qb, 'laya.wx.mini.MiniLoader');var df_hu = $wa6qb['prototype'];return df_hu['load'] = function (xkis2, umn_, g5fdt, cx7sg1, r4y9oz) {
      g5fdt === void 0x0 && (g5fdt = !![]), r4y9oz === void 0x0 && (r4y9oz = ![]);var htf_d = this;htf_d['_url'] = xkis2;if (xkis2['indexOf']('data:image') === 0x0) htf_d['_type'] = umn_ = 'image';else htf_d['_type'] = umn_ || (umn_ = htf_d['getTypeFromUrl'](xkis2));htf_d['_cache'] = g5fdt, htf_d['_data'] = null;var uh8mn_ = 'ascii';if (xkis2['indexOf']('.fnt') != -0x1) uh8mn_ = 'utf8';else umn_ == 'arraybuffer' && (uh8mn_ = '');;var h_df8u = isxvkc['getFileExtension'](xkis2);if ($wa6qb['_fileTypeArr']['indexOf'](h_df8u) != -0x1) qrw9b['EnvConfig']['load']['call'](this, xkis2, umn_, g5fdt, cx7sg1, r4y9oz);else {
        if (!o3yez4['getFileInfo'](xkis2)) {
          if (xkis2['indexOf']('layaNativeDir/') != -0x1) {
            if (qrw9b['isZiYu']) {
              var olj0e3 = o3yez4['ziyuFileData'][xkis2];htf_d['onLoaded'](olj0e3);return;
            } else {
              cosnole['log']('read read'), o3yez4['read'](xkis2, uh8mn_, new y3roz4($wa6qb, $wa6qb['onReadNativeCallBack'], [uh8mn_, xkis2, umn_, g5fdt, cx7sg1, r4y9oz, htf_d]));return;
            }
          }if (ze0lo3['rootPath'] == '') var ol3ej = xkis2;else ol3ej = xkis2['split'](ze0lo3['rootPath'])[0x0];xkis2['indexOf']('http://') != -0x1 || xkis2['indexOf']('https://') != -0x1 ? qrw9b['EnvConfig']['load']['call'](htf_d, xkis2, umn_, g5fdt, cx7sg1, r4y9oz) : o3yez4['readFile'](ol3ej, uh8mn_, new y3roz4($wa6qb, $wa6qb['onReadNativeCallBack'], [uh8mn_, xkis2, umn_, g5fdt, cx7sg1, r4y9oz, htf_d]), xkis2);
        } else qrw9b['EnvConfig']['load']['call'](this, xkis2, umn_, g5fdt, cx7sg1, r4y9oz);
      }
    }, df_hu['resMgrLoad'] = function (bq$r9, svxgc1, b4$9r, bq6w9, ozl3e0, dtg17, jm_8nu) {
      b4$9r === void 0x0 && (b4$9r = 0x0), bq6w9 === void 0x0 && (bq6w9 = ![]), ozl3e0 === void 0x0 && (ozl3e0 = ![]), dtg17 === void 0x0 && (dtg17 = 0x0), jm_8nu === void 0x0 && (jm_8nu = 0x3), bq$r9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bq$r9), qrw9b['EnvConfig']['resMgrLoad'](bq$r9, (hftd5, vs2xki, vxg1sc) => {
        $wa6qb['prototype']['resMgrLoadCallBack'](hftd5, vs2xki, vxg1sc, svxgc1);
      }, b4$9r, bq6w9, ozl3e0, dtg17, jm_8nu);
    }, df_hu['resMgrLoadCallBack'] = function (y4oze3, dhft_, oy4r3, m8u_n) {
      console['log']('buff:::', y4oze3, oy4r3, o3yez4['fileNativeDir'] + '///' + o3yez4['fileListName']), m8u_n(y4oze3, dhft_, oy4r3);
    }, df_hu['clearRes'] = function (n8mu_, e0zlo3) {
      e0zlo3 === void 0x0 && (e0zlo3 = ![]);var v2isxk = this;v2isxk['clearRes'](n8mu_, e0zlo3);var svkip = o3yez4['getFileInfo'](n8mu_);if (svkip && (n8mu_['indexOf']('http://') != -0x1 || n8mu_['indexOf']('https://') != -0x1)) {
        var sc17g = svkip['md5'],
            piks2v = o3yez4['getFileNativePath'](sc17g);o3yez4['remove'](piks2v);
      }
    }, $wa6qb['onReadNativeCallBack'] = function (ivcksx, f8h5dt, rb$94, q4b, vx2ski, jn0lme, ps2vk, csxvik, oyrz94) {
      q4b === void 0x0 && (q4b = !![]), jn0lme === void 0x0 && (jn0lme = ![]), csxvik === void 0x0 && (csxvik = 0x0);if (!csxvik) {
        var w69q$;if (rb$94 == 'json' || rb$94 == 'atlas') w69q$ = qrw9b['getJson'](oyrz94['data']);else rb$94 == 'xml' ? w69q$ = isxvkc['parseXMLFromString'](oyrz94['data']) : w69q$ = oyrz94['data'];ps2vk['onLoaded'](w69q$), !qrw9b['isZiYu'] && qrw9b['isPosMsgYu'] && rb$94 != 'arraybuffer' && wx['postMessage']({ 'url': f8h5dt, 'data': w69q$, 'isLoad': !![] });
      } else csxvik == 0x1 && qrw9b['EnvConfig']['load']['call'](ps2vk, f8h5dt, rb$94, q4b, vx2ski, jn0lme);
    }, vixs2k($wa6qb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $wa6qb;
  }(),
      o3yez4 = function (_mnuh) {
    function ol30j() {
      ol30j['__super']['call'](this);;
    }return _umf8(ol30j, 'laya.wx.mini.MiniFileMgr', _mnuh), ol30j['isLoadFile'] = function (pvksi) {
      return ol30j['_fileTypeArr']['indexOf'](pvksi) != -0x1 ? !![] : ![];
    }, ol30j['getFileInfo'] = function (_fhtd) {
      var y9rbq = _fhtd['split']('?')[0x0],
          u8h = ol30j['filesListObj'][y9rbq];if (u8h == null) return null;else return u8h;return null;
    }, ol30j['onFileUpdate'] = function (rq4b$9, ze3lo) {
      var gfd75t = rq4b$9['split']('/'),
          m8hf_u = gfd75t[gfd75t['length'] - 0x1],
          u_8mhn = ol30j['getFileInfo'](ze3lo);if (u_8mhn == null) ol30j['onSaveFile'](ze3lo, m8hf_u);else {
        if (u_8mhn['readyUrl'] != ze3lo) ol30j['remove'](m8hf_u, ze3lo);
      }
    }, ol30j['exits'] = function (ctg75, b9q6) {
      var f_8hdt = ol30j['getFileNativePath'](ctg75);ol30j['fs']['getFileInfo']({ 'filePath': f_8hdt, 'success': function (t17gc5) {
          b9q6 != null && b9q6['runWith']([0x0, t17gc5]);
        }, 'fail': function (h5td) {
          b9q6 != null && b9q6['runWith']([0x1, h5td]);
        } });
    }, ol30j['read'] = function (le3z0, gx17c5, _h8un, _0jmu) {
      gx17c5 === void 0x0 && (gx17c5 = 'ascill'), _0jmu === void 0x0 && (_0jmu = '');var jl0e3n;_0jmu != '' ? jl0e3n = ol30j['getFileNativePath'](le3z0) : jl0e3n = le3z0, ol30j['fs']['readFile']({ 'filePath': jl0e3n, 'encoding': gx17c5, 'success': function (icsxk) {
          _h8un != null && _h8un['runWith']([0x0, icsxk]);
        }, 'fail': function (jln0m) {
          if (jln0m && _0jmu != '') ol30j['down'](_0jmu, gx17c5, _h8un, _0jmu);else _h8un != null && _h8un['runWith']([0x1]);
        } });
    }, ol30j['readNativeFile'] = function (gs1x, g7td51) {
      ol30j['fs']['readFile']({ 'filePath': gs1x, 'encoding': '', 'success': function (ljm0un) {
          g7td51 != null && g7td51['runWith']([0x0]);
        }, 'fail': function (o4ryz3) {
          g7td51 != null && g7td51['runWith']([0x1]);
        } });
    }, ol30j['down'] = function (r94oz, y3oez, $bw9r, l3jo0) {
      y3oez === void 0x0 && (y3oez = 'ascill'), l3jo0 === void 0x0 && (l3jo0 = '');var ksi2xv = ol30j['getFileNativePath'](l3jo0),
          l3nj0e = ol30j['wxdown']({ 'url': r94oz, 'filePath': ksi2xv, 'success': function (ipksv) {
          if (ipksv['statusCode'] === 0xc8) ol30j['readFile'](ipksv['filePath'], y3oez, $bw9r, l3jo0);
        }, 'fail': function (o3e0l) {
          $bw9r != null && $bw9r['runWith']([0x1, o3e0l]);
        } });l3nj0e['onProgressUpdate'](function (xsvgc) {
        $bw9r != null && $bw9r['runWith']([0x2, xsvgc['progress']]);
      });
    }, ol30j['readFile'] = function (ej30l, baw6q, isvk2x, ey3ol) {
      baw6q === void 0x0 && (baw6q = 'ascill'), ey3ol === void 0x0 && (ey3ol = ''), ol30j['fs']['readFile']({ 'filePath': ej30l, 'encoding': baw6q, 'success': function (lyoze3) {
          if (ej30l['indexOf']('http://') != -0x1 || ej30l['indexOf']('https://') != -0x1) ol30j['onFileUpdate'](ej30l, ey3ol);isvk2x != null && isvk2x['runWith']([0x0, lyoze3]);
        }, 'fail': function (rq4b$) {
          if (rq4b$) isvk2x != null && isvk2x['runWith']([0x1, rq4b$]);
        } });
    }, ol30j['downImg'] = function (vxsc1k, len0, umjn8) {
      umjn8 === void 0x0 && (umjn8 = '');var $94qrb = ol30j['wxdown']({ 'url': vxsc1k, 'success': function (ju_8m) {
          ju_8m['statusCode'] === 0xc8 && ol30j['copyFile'](ju_8m['tempFilePath'], umjn8, len0);
        }, 'fail': function (s7gxc1) {
          len0 != null && len0['runWith']([0x1, s7gxc1]);
        } });
    }, ol30j['copyFile'] = function (mhnu_8, t5g17d, oez4y) {
      var r9$qw = mhnu_8['split']('/'),
          xsv2i = r9$qw[r9$qw['length'] - 0x1],
          xc715 = t5g17d['split']('?')[0x0],
          nj30e = ol30j['getFileInfo'](t5g17d),
          uh8_fm = ol30j['getFileNativePath'](xsv2i);ol30j['fs']['copyFile']({ 'srcPath': mhnu_8, 'destPath': uh8_fm, 'success': function (isp2k) {
          if (!nj30e) ol30j['onSaveFile'](t5g17d, xsv2i), oez4y != null && oez4y['runWith']([0x0]);else {
            if (nj30e['readyUrl'] != t5g17d) ol30j['remove'](xsv2i, t5g17d, oez4y);
          }
        }, 'fail': function (_hft8) {
          oez4y != null && oez4y['runWith']([0x1, _hft8]);
        } });
    }, ol30j['getFileNativePath'] = function (o4y) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o4y;
    }, ol30j['remove'] = function (t_f8d, g17ct, ezl03o) {
      g17ct === void 0x0 && (g17ct = '');var jlen30 = ol30j['getFileInfo'](g17ct),
          zo0l3 = ol30j['getFileNativePath'](jlen30['md5']);rz4o9['loader']['clearRes'](jlen30['readyUrl']), ol30j['fs']['unlink']({ 'filePath': zo0l3, 'success': function (xcs7g) {
          if (g17ct != '') ol30j['onSaveFile'](g17ct, t_f8d);ezl03o != null && ezl03o['runWith']([0x0]);
        }, 'fail': function (_umnj0) {} });
    }, ol30j['onSaveFile'] = function (vscxg, leozy3) {
      var zq9r = vscxg['split']('?')[0x0];ol30j['filesListObj'][zq9r] = { 'md5': leozy3, 'readyUrl': vscxg }, ol30j['fs']['writeFile']({ 'filePath': ol30j['fileNativeDir'] + '/' + ol30j['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ol30j['filesListObj']), 'success': function (u_f) {
          console['log']('写入测试测试成功：', u_f);
        }, 'fail': function (royz) {
          console['log']('写入测试测试失败：', royz);
        } });
    }, ol30j['existDir'] = function (thfd_8, rzy94) {
      ol30j['fs']['mkdir']({ 'dirPath': thfd_8, 'success': function (vxs2i) {
          rzy94 != null && rzy94['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (d71g) {
          if (d71g['errMsg']['indexOf']('file already exists') != -0x1) ol30j['readSync'](ol30j['fileListName'], 'utf8', rzy94);else rzy94 != null && rzy94['runWith']([0x1, d71g]);
        } });
    }, ol30j['readSync'] = function (_8fmhu, udh_f, sx2ikv, lo) {
      udh_f === void 0x0 && (udh_f = 'ascill'), lo === void 0x0 && (lo = '');var w9bq$6 = ol30j['getFileNativePath'](_8fmhu),
          qwrb9$;try {
        qwrb9$ = ol30j['fs']['readFileSync'](w9bq$6), sx2ikv != null && sx2ikv['runWith']([0x0, { 'data': qwrb9$ }]);
      } catch (vksi) {
        sx2ikv != null && sx2ikv['runWith']([0x1]);
      }
    }, ol30j['readCache'] = function () {}, ol30j['writeCache'] = function (l0nmuj) {
      var t7d5fg = readyUrl['split']('?')[0x0];ol30j['filesListObj'][t7d5fg] = { 'md5': md5Name, 'readyUrl': readyUrl }, ol30j['fs']['writeFile']({ 'filePath': ol30j['fileNativeDir'] + '/' + ol30j['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ol30j['filesListObj']), 'success': function (xcvs) {}, 'fail': function ($qw96b) {} });
    }, ol30j['setNativeFileDir'] = function (c1vsx) {
      ol30j['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c1vsx;
    }, ol30j['filesListObj'] = {}, ol30j['fileNativeDir'] = null, ol30j['fileListName'] = 'layaairfiles.txt', ol30j['ziyuFileData'] = {}, vixs2k(ol30j, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ol30j;
  }(rq9$b4),
      yleo3 = function (mjl0) {
    function hd75tf() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], hd75tf['__super']['call'](this), this['_sound'] = hd75tf['_createSound'](), this['_chanell'] = new i2vk(this['_sound']);
    }_umf8(hd75tf, 'laya.wx.mini.MiniSound', mjl0);var ezo3l0 = hd75tf['prototype'];return ezo3l0['load'] = function (rq4zy) {
      var bwq6a$ = this;rq4zy = ze0lo3['formatURL'](rq4zy), this['url'] = rq4zy;if (hd75tf['_audioCache'][rq4zy]) {
        this['event']('complete');return;
      }function s1kxv() {
        if (hd75tf['_null'] != undefined) bwq6a$['_sound']['onCanplay'](hd75tf['_null']), bwq6a$['_sound']['onError'](hd75tf['_null']);else try {
          bwq6a$['_sound']['onCanplay'](null), bwq6a$['_sound']['onError'](null), hd75tf['_null'] = null;
        } catch (fu8_d) {
          console['warn']('[wxmini] _clearSound:' + fu8_d), bwq6a$['_sound']['onCanplay'](xgvs1c), bwq6a$['_sound']['onError'](xgvs1c), hd75tf['_null'] = xgvs1c;
        }
      }function jm0un_() {
        or['loaded'] = !![], or['event']('complete'), hd75tf['_audioCache'][or['url']] = or;
      }function th8fd(jn_u0m) {
        console['error']('errCode=' + jn_u0m['errCode'] + '  errMsg=' + jn_u0m['errMsg']), or['event']('error');
      }function xgvs1c() {}this['_sound']['onCanplay'](jm0un_), this['_sound']['onError'](th8fd), this['_sound']['src'] = rq4zy;var or = this;
    }, ezo3l0['play'] = function (l0o3ej, muj_0) {
      l0o3ej === void 0x0 && (l0o3ej = 0x0), muj_0 === void 0x0 && (muj_0 = 0x0);var ckisx, el30j;if (this['url'] == m_n8uj['_tMusic']) {
        if (!hd75tf['_musicAudio']) hd75tf['_musicAudio'] = this['_sound'];ckisx = hd75tf['_musicAudio'], el30j = this['_chanell'];
      } else ckisx = this['_sound'], el30j = this['_chanell'];return ckisx['src'] = this['url'], ckisx['startTime'] = 0x0, el30j['isStopped'] && (el30j['url'] = this['url'], el30j['loops'] = muj_0, el30j['startTime'] = l0o3ej, el30j['play'](), m_n8uj['addChannel'](el30j)), el30j;
    }, ezo3l0['dispose'] = function () {
      var yzro43 = hd75tf['_audioCache'][this['url']];yzro43 && (yzro43['src'] = '', delete hd75tf['_audioCache'][this['url']]);
    }, $69(0x0, ezo3l0, 'duration', function () {
      return this['_sound']['duration'];
    }), hd75tf['_createSound'] = function () {
      hd75tf['_id']++;var g7c5x = qrw9b['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return g7c5x;
    }, hd75tf['_musicAudio'] = null, hd75tf['_id'] = 0x0, hd75tf['_audioCache'] = {}, hd75tf['_null'] = undefined, hd75tf;
  }(rq9$b4),
      i2vk = function (oezy34) {
    function ye3lz(oyz3l) {
      this['_audio'] = null, this['_onEnd'] = null, ye3lz['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = oyz3l, this['_onEnd'] = isxvkc['bind'](this['__onEnd'], this), oyz3l['onEnded'](this['_onEnd']);
    }_umf8(ye3lz, 'laya.wx.mini.MiniSoundChannel', oezy34);var qrb49 = ye3lz['prototype'];return qrb49['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (rz4o9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qrb49['__onNull'] = function () {}, qrb49['play'] = function () {
      this['isStopped'] = ![], m_n8uj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qrb49['stop'] = function () {
      this['isStopped'] = !![], m_n8uj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, qrb49['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qrb49['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], m_n8uj['addChannel'](this), this['_audio']['play']();
    }, $69(0x0, qrb49, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $69(0x0, qrb49, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $69(0x0, qrb49, 'volume', function () {
      return 0x1;
    }, function ($waqb6) {}), ye3lz['_null'] = undefined, ye3lz;
  }(wr$qb),
      yo4e = function () {
    function r$9bw() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qrw9b['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }_umf8(r$9bw, 'laya.wx.mini.MiniVideo');var dt8_h = r$9bw['prototype'];return dt8_h['on'] = function (p2ivk, jmul0n, j3nel0) {
      if (p2ivk == 'loadedmetadata') this['onPlayFunc'] = j3nel0['bind'](jmul0n), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else p2ivk == 'ended' && (this['onEndedFunC'] = j3nel0['bind'](jmul0n), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, dt8_h['onTimeUpdateFunc'] = function (xvkcsi) {
      this['position'] = xvkcsi['position'], this['_duration'] = xvkcsi['duration'];
    }, dt8_h['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, dt8_h['onended'] = function (lm0enj, sip2) {
      this['onEndedFunC'] = sip2['bind'](lm0enj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, dt8_h['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, dt8_h['off'] = function (u_8mn, jlo03, y4qz9r) {
      if (u_8mn == 'loadedmetadata') this['onPlayFunc'] = y4qz9r['bind'](jlo03), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else u_8mn == 'ended' && (this['onEndedFunC'] = y4qz9r['bind'](jlo03), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, dt8_h['load'] = function (u_jnm8) {
      if (!this['videoElement']) return;this['videoElement']['src'] = u_jnm8;
    }, dt8_h['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, dt8_h['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, dt8_h['size'] = function (jnu0lm, d8_tf) {
      if (!this['videoElement']) return;this['videoElement']['width'] = jnu0lm, this['videoElement']['height'] = d8_tf;
    }, dt8_h['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, dt8_h['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, $69(0x0, dt8_h, 'duration', function () {
      return this['_duration'];
    }), $69(0x0, dt8_h, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (un_m8j) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = un_m8j;
    }), $69(0x0, dt8_h, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), $69(0x0, dt8_h, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), $69(0x0, dt8_h, 'ended', function () {
      return this['videoend'];
    }), $69(0x0, dt8_h, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (wa6b$) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = wa6b$;
    }), $69(0x0, dt8_h, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (r4yz) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = r4yz;
    }), $69(0x0, dt8_h, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (k1xvc) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = k1xvc;
    }), $69(0x0, dt8_h, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), $69(0x0, dt8_h, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (oz3r4) {
      if (!this['videoElement']) return;this['videoElement']['x'] = oz3r4;
    }), $69(0x0, dt8_h, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (o3eyl) {
      if (!this['videoElement']) return;this['videoElement']['y'] = o3eyl;
    }), $69(0x0, dt8_h, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), $69(0x0, dt8_h, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (xcvs1k) {
      if (!this['videoElement']) return;this['videoElement']['src'] = xcvs1k;
    }), $69(0x0, dt8_h, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (bq9rw) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = bq9rw;
    }), $69(0x0, dt8_h, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (dthf) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = dthf;
    }), r$9bw;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m_fhu in Laya) {
    var br$w9q = Laya[m_fhu];br$w9q && br$w9q['__isclass'] && (exports[m_fhu] = br$w9q);
  }
});