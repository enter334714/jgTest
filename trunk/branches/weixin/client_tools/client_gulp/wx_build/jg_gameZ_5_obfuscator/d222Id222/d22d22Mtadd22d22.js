var F = wx.$D;
(function (window, document, xkg6ja) {
  var sevtq = xkg6ja['un'],
      m_ol = xkg6ja['uns'],
      _go5 = xkg6ja['static'],
      vstk = xkg6ja['class'],
      _ogm5l = xkg6ja['getset'],
      es0c3 = xkg6ja['__newvec'],
      _2z = laya['utils']['Browser'],
      h1n$y = laya['events']['Event'],
      lmog5_ = laya['events']['EventDispatcher'],
      _irozl = laya['resource']['HTMLImage'],
      ktqw6 = laya['utils']['Handler'],
      eup0c3 = laya['display']['Input'],
      gjoam = laya['net']['Loader'],
      $21n8h = laya['maths']['Matrix'],
      svt0 = laya['renders']['Render'],
      wqv6xk = laya['utils']['RunDriver'],
      bcu0p = laya['media']['Sound'],
      tc0se3 = laya['media']['SoundChannel'],
      qsetv = laya['media']['SoundManager'],
      u30sc = laya['display']['Stage'],
      u9cpb3 = laya['net']['URL'],
      ag65xj = laya['utils']['Utils'],
      rn812h = function () {
    function e3c0t() {}return vstk(e3c0t, 'laya.wx.mini.MiniAdpter'), e3c0t['getJson'] = function (irl_oz) {
      return JSON['parse'](irl_oz);
    }, e3c0t['init'] = function (i_5, om5il_) {
      i_5 === void 0x0 && (i_5 = ![]), om5il_ === void 0x0 && (om5il_ = ![]);if (e3c0t['_inited']) return;e3c0t['window'] = window;if (e3c0t['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e3c0t['_inited'] = !![], e3c0t['isZiYu'] = om5il_, e3c0t['isPosMsgYu'] = i_5, e3c0t['EnvConfig'] = {}, !e3c0t['isZiYu'] && (c0pb3u['setNativeFileDir']('/layaairGame'), c0pb3u['existDir'](c0pb3u['fileNativeDir'], ktqw6['create'](e3c0t, e3c0t['onMkdirCallBack']))), e3c0t['window']['focus'] = function () {}, xkg6ja['getUrlPath'] = function () {}, e3c0t['window']['logtime'] = function (bp3u0) {}, e3c0t['window']['alertTimeLog'] = function (scv0) {}, e3c0t['window']['resetShareInfo'] = function () {}, e3c0t['window']['CanvasRenderingContext2D'] = function () {}, e3c0t['window']['CanvasRenderingContext2D']['prototype'] = e3c0t['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e3c0t['window']['document']['body']['appendChild'] = function () {}, e3c0t['EnvConfig']['pixelRatioInt'] = 0x0, wqv6xk['getPixelRatio'] = e3c0t['pixelRatio'], e3c0t['_preCreateElement'] = _2z['createElement'], _2z['createElement'] = e3c0t['createElement'], wqv6xk['createShaderCondition'] = e3c0t['createShaderCondition'], ag65xj['parseXMLFromString'] = e3c0t['parseXMLFromString'], eup0c3['_createInputElement'] = l_og5['_createInputElement'], e3c0t['EnvConfig']['load'] = gjoam['prototype']['load'], gjoam['prototype']['load'] = zi12rh['prototype']['load'], e3c0t['isZiYu'] && i_5 && wx['onMessage'](function (rn28h) {
        rn28h['isLoad'] && (c0pb3u['ziyuFileData'][rn28h['url']] = rn28h['data']);
      });
    }, e3c0t['onMkdirCallBack'] = function (eu03cs, u7bfp) {
      if (!eu03cs) c0pb3u['filesListObj'] = JSON['parse'](u7bfp['data']);
    }, e3c0t['pixelRatio'] = function () {
      if (!e3c0t['EnvConfig']['pixelRatioInt']) try {
        var i_orlz = wx['getSystemInfoSync']();return e3c0t['EnvConfig']['pixelRatioInt'] = i_orlz['pixelRatio'], i_orlz = i_orlz, i_orlz['pixelRatio'];
      } catch (zrli_o) {}return e3c0t['EnvConfig']['pixelRatioInt'];
    }, e3c0t['createElement'] = function (u3fbp9) {
      if (u3fbp9 == 'canvas') {
        var omz;return e3c0t['idx'] == 0x1 ? e3c0t['isZiYu'] ? (omz = sharedCanvas, omz['style'] = {}) : omz = window['canvas'] : omz = window['wx']['createCanvas'](), e3c0t['idx']++, omz;
      } else {
        if (u3fbp9 == 'textarea' || u3fbp9 == 'input') return e3c0t['onCreateInput'](u3fbp9);else {
          if (u3fbp9 == 'div') {
            var jm5o = e3c0t['_preCreateElement'](u3fbp9);return jm5o['contains'] = function (pbu3c9) {
              return null;
            }, jm5o['removeChild'] = function (lzir_) {}, jm5o;
          } else return e3c0t['_preCreateElement'](u3fbp9);
        }
      }
    }, e3c0t['onCreateInput'] = function (a5jgxm) {
      var cu0 = e3c0t['_preCreateElement'](a5jgxm);return cu0['focus'] = l_og5['wxinputFocus'], cu0['blur'] = l_og5['wxinputblur'], cu0['style'] = {}, cu0['value'] = 0x0, cu0['parentElement'] = {}, cu0['placeholder'] = {}, cu0['type'] = {}, cu0['setColor'] = function (pu9c3b) {}, cu0['setType'] = function (n1r8h) {}, cu0['setFontFace'] = function (evcs0) {}, cu0['addEventListener'] = function (eqwvst) {}, cu0['contains'] = function (z1rn2) {
        return null;
      }, cu0['removeChild'] = function (izo_l) {}, cu0;
    }, e3c0t['createShaderCondition'] = function (ja5g) {
      var n1r28h = this,
          nh1z2 = function () {
        var yhn81$ = ja5g;return n1r28h[ja5g['replace']('this.', '')];
      };return nh1z2;
    }, e3c0t['EnvConfig'] = null, e3c0t['window'] = null, e3c0t['_preCreateElement'] = null, e3c0t['_inited'] = ![], e3c0t['wxRequest'] = null, e3c0t['systemInfo'] = null, e3c0t['version'] = '0.0.1', e3c0t['isZiYu'] = ![], e3c0t['isPosMsgYu'] = ![], e3c0t['parseXMLFromString'] = function (b9f7) {
      var jk6ag, fu3b9p;b9f7 = b9f7['replace'](/>\s+</g, '><');try {
        jk6ag = new window['Parser']['DOMParser']()['parseFromString'](b9f7, 'text/xml');
      } catch (v0ctes) {
        throw '需要引入xml解析库文件';
      }return jk6ag;
    }, e3c0t['idx'] = 0x1, e3c0t;
  }(),
      stwqev = function () {
    function up03cb() {}vstk(up03cb, 'laya.wx.mini.MiniImage');var ozl_ri = up03cb['prototype'];return ozl_ri['_loadImage'] = function (vs0qt) {
      var im_olz = this,
          a5mj = ![];vs0qt['indexOf']('layaNativeDir/') == -0x1 && (a5mj = !![], vs0qt = u9cpb3['formatURL'](vs0qt));if (!c0pb3u['getFileInfo'](vs0qt)) {
        if (vs0qt['indexOf']('http://') != -0x1 || vs0qt['indexOf']('https://') != -0x1) c0pb3u['downImg'](vs0qt, new ktqw6(up03cb, up03cb['onDownImgCallBack'], [vs0qt, im_olz]), vs0qt);else up03cb['onCreateImage'](vs0qt, im_olz, !![]);
      } else up03cb['onCreateImage'](vs0qt, im_olz, !a5mj);
    }, up03cb['onDownImgCallBack'] = function (sec30u, rzio_l, kgx6a) {
      if (!kgx6a) up03cb['onCreateImage'](sec30u, rzio_l);else rzio_l['onError'](null);
    }, up03cb['onCreateImage'] = function (kaxwj, gml5o_, c30te) {
      c30te === void 0x0 && (c30te = ![]);var aj6;if (!c30te) {
        var ecsv = c0pb3u['getFileInfo'](kaxwj),
            $yn8h1 = ecsv['md5'];aj6 = c0pb3u['getFileNativePath']($yn8h1);
      } else aj6 = kaxwj;if (gml5o_['imgCache'] == null) gml5o_['imgCache'] = {};var sc0t3e;function usc0() {
        sc0t3e['onload'] = null, sc0t3e['onerror'] = null, delete gml5o_['imgCache'][kaxwj];
      };var etqws = function () {
        usc0(), gml5o_['onLoaded'](sc0t3e);
      },
          kwa6x = function () {
        usc0(), gml5o_['event']('error', 'Load image failed');
      };gml5o_['_type'] == 'nativeimage' ? (sc0t3e = new _2z['window']['Image'](), sc0t3e['crossOrigin'] = '', sc0t3e['onload'] = etqws, sc0t3e['onerror'] = kwa6x, sc0t3e['src'] = aj6, gml5o_['imgCache'][kaxwj] = sc0t3e) : new _irozl['create'](aj6, { 'onload': etqws, 'onerror': kwa6x, 'onCreate': function (p749f) {
          sc0t3e = p749f, gml5o_['imgCache'][kaxwj] = p749f;
        } });
    }, up03cb;
  }(),
      l_og5 = function () {
    function sc3et0() {}return vstk(sc3et0, 'laya.wx.mini.MiniInput'), sc3et0['_createInputElement'] = function () {
      eup0c3['_initInput'](eup0c3['area'] = _2z['createElement']('textarea')), eup0c3['_initInput'](eup0c3['input'] = _2z['createElement']('input')), eup0c3['inputContainer'] = _2z['createElement']('div'), eup0c3['inputContainer']['style']['position'] = 'absolute', eup0c3['inputContainer']['style']['zIndex'] = 0x186a0, _2z['container']['appendChild'](eup0c3['inputContainer']), eup0c3['inputContainer']['setPos'] = function (zh_2ri, _iolr) {
        eup0c3['inputContainer']['style']['left'] = zh_2ri + 'px', eup0c3['inputContainer']['style']['top'] = _iolr + 'px';
      }, xkg6ja['stage']['on']('resize', null, sc3et0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hrz2i1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qsetv['_soundClass'] = cet30, qsetv['_musicClass'] = cet30;
    }, sc3et0['_onStageResize'] = function () {
      var ev0qs = xkg6ja['stage']['_canvasTransform']['identity']();ev0qs['scale'](_2z['width'] / svt0['canvas']['width'] / wqv6xk['getPixelRatio'](), _2z['height'] / svt0['canvas']['height'] / wqv6xk['getPixelRatio']());
    }, sc3et0['wxinputFocus'] = function (uf3p9) {
      var mo5gla = eup0c3['inputElement']['target'];if (mo5gla && !mo5gla['editable']) return;rn812h['window']['wx']['offKeyboardConfirm'](), rn812h['window']['wx']['offKeyboardInput'](), rn812h['window']['wx']['showKeyboard']({ 'defaultValue': mo5gla['text'], 'maxLength': mo5gla['maxChars'], 'multiple': mo5gla['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (w6akj) {}, 'fail': function (_l2rz) {} }), rn812h['window']['wx']['onKeyboardConfirm'](function (hr8n1) {
        var kw6x = hr8n1 ? hr8n1['value'] : '';mo5gla['text'] = kw6x, mo5gla['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rn812h['window']['wx']['onKeyboardInput'](function (yh$18n) {
        var x6qjwk = yh$18n ? yh$18n['value'] : '';if (!mo5gla['multiline']) {
          if (x6qjwk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }mo5gla['text'] = x6qjwk, mo5gla['event']('input');
      });
    }, sc3et0['inputEnter'] = function () {
      eup0c3['inputElement']['target']['focus'] = ![];
    }, sc3et0['wxinputblur'] = function () {
      sc3et0['hideKeyboard']();
    }, sc3et0['hideKeyboard'] = function () {
      rn812h['window']['wx']['offKeyboardConfirm'](), rn812h['window']['wx']['offKeyboardInput'](), rn812h['window']['wx']['hideKeyboard']({ 'success': function (znr) {
          console['log']('隐藏键盘');
        }, 'fail': function (b9u3p) {
          console['log']('隐藏键盘出错:' + (b9u3p ? b9u3p['errMsg'] : ''));
        } });
    }, sc3et0;
  }(),
      zi12rh = function () {
    function wqvk6t() {}vstk(wqvk6t, 'laya.wx.mini.MiniLoader');var tcev = wqvk6t['prototype'];return tcev['load'] = function (zl_ro, xwaj, r12hz, h821, wv6xk) {
      r12hz === void 0x0 && (r12hz = !![]), wv6xk === void 0x0 && (wv6xk = ![]);var _m5ol = this;_m5ol['_url'] = zl_ro;if (zl_ro['indexOf']('data:image') === 0x0) _m5ol['_type'] = xwaj = 'image';else _m5ol['_type'] = xwaj || (xwaj = _m5ol['getTypeFromUrl'](zl_ro));_m5ol['_cache'] = r12hz, _m5ol['_data'] = null;var p3ceu = 'ascii';if (zl_ro['indexOf']('.fnt') != -0x1) p3ceu = 'utf8';else xwaj == 'arraybuffer' && (p3ceu = '');;var vsteq0 = ag65xj['getFileExtension'](zl_ro);if (wqvk6t['_fileTypeArr']['indexOf'](vsteq0) != -0x1) rn812h['EnvConfig']['load']['call'](this, zl_ro, xwaj, r12hz, h821, wv6xk);else {
        if (!c0pb3u['getFileInfo'](zl_ro)) {
          if (zl_ro['indexOf']('layaNativeDir/') != -0x1) {
            if (rn812h['isZiYu']) {
              var w6aj = c0pb3u['ziyuFileData'][zl_ro];_m5ol['onLoaded'](w6aj);return;
            } else {
              cosnole['log']('read read'), c0pb3u['read'](zl_ro, p3ceu, new ktqw6(wqvk6t, wqvk6t['onReadNativeCallBack'], [p3ceu, zl_ro, xwaj, r12hz, h821, wv6xk, _m5ol]));return;
            }
          }if (u9cpb3['rootPath'] == '') var uf93 = zl_ro;else uf93 = zl_ro['split'](u9cpb3['rootPath'])[0x0];zl_ro['indexOf']('http://') != -0x1 || zl_ro['indexOf']('https://') != -0x1 ? rn812h['EnvConfig']['load']['call'](_m5ol, zl_ro, xwaj, r12hz, h821, wv6xk) : c0pb3u['readFile'](uf93, p3ceu, new ktqw6(wqvk6t, wqvk6t['onReadNativeCallBack'], [p3ceu, zl_ro, xwaj, r12hz, h821, wv6xk, _m5ol]), zl_ro);
        } else rn812h['EnvConfig']['load']['call'](this, zl_ro, xwaj, r12hz, h821, wv6xk);
      }
    }, tcev['resMgrLoad'] = function (twv6qk, qtwv, lr2_z, cbpu9, tve0sq, agl5o, $yhn81) {
      lr2_z === void 0x0 && (lr2_z = 0x0), cbpu9 === void 0x0 && (cbpu9 = ![]), tve0sq === void 0x0 && (tve0sq = ![]), agl5o === void 0x0 && (agl5o = 0x0), $yhn81 === void 0x0 && ($yhn81 = 0x3), twv6qk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', twv6qk), rn812h['EnvConfig']['resMgrLoad'](twv6qk, (ga65, olzi_r, uc93b) => {
        wqvk6t['prototype']['resMgrLoadCallBack'](ga65, olzi_r, uc93b, qtwv);
      }, lr2_z, cbpu9, tve0sq, agl5o, $yhn81);
    }, tcev['resMgrLoadCallBack'] = function (vsqwte, ogm5, amj5o, f93up) {
      console['log']('buff:::', vsqwte, amj5o, c0pb3u['fileNativeDir'] + '///' + c0pb3u['fileListName']), f93up(vsqwte, ogm5, amj5o);
    }, tcev['clearRes'] = function (f4b97, t3esc0) {
      t3esc0 === void 0x0 && (t3esc0 = ![]);var li_5om = this;li_5om['clearRes'](f4b97, t3esc0);var cevs = c0pb3u['getFileInfo'](f4b97);if (cevs && (f4b97['indexOf']('http://') != -0x1 || f4b97['indexOf']('https://') != -0x1)) {
        var ola5m = cevs['md5'],
            jkxw6a = c0pb3u['getFileNativePath'](ola5m);c0pb3u['remove'](jkxw6a);
      }
    }, wqvk6t['onReadNativeCallBack'] = function (rliz_2, bc03u, e0c3st, axjk6g, o_ril, pb7uf, jaogm, etcs0, h82nr1) {
      axjk6g === void 0x0 && (axjk6g = !![]), pb7uf === void 0x0 && (pb7uf = ![]), etcs0 === void 0x0 && (etcs0 = 0x0);if (!etcs0) {
        var q0e;if (e0c3st == 'json' || e0c3st == 'atlas') q0e = rn812h['getJson'](h82nr1['data']);else e0c3st == 'xml' ? q0e = ag65xj['parseXMLFromString'](h82nr1['data']) : q0e = h82nr1['data'];jaogm['onLoaded'](q0e), !rn812h['isZiYu'] && rn812h['isPosMsgYu'] && e0c3st != 'arraybuffer' && wx['postMessage']({ 'url': bc03u, 'data': q0e, 'isLoad': !![] });
      } else etcs0 == 0x1 && rn812h['EnvConfig']['load']['call'](jaogm, bc03u, e0c3st, axjk6g, o_ril, pb7uf);
    }, _go5(wqvk6t, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), wqvk6t;
  }(),
      c0pb3u = function (a5ojgm) {
    function m_glo() {
      m_glo['__super']['call'](this);;
    }return vstk(m_glo, 'laya.wx.mini.MiniFileMgr', a5ojgm), m_glo['isLoadFile'] = function (esu0c3) {
      return m_glo['_fileTypeArr']['indexOf'](esu0c3) != -0x1 ? !![] : ![];
    }, m_glo['getFileInfo'] = function ($128) {
      var ga6xj5 = $128['split']('?')[0x0],
          pc3ub9 = m_glo['filesListObj'][ga6xj5];if (pc3ub9 == null) return null;else return pc3ub9;return null;
    }, m_glo['onFileUpdate'] = function (vsc, buf79) {
      var kvwsqt = vsc['split']('/'),
          o5i_lm = kvwsqt[kvwsqt['length'] - 0x1],
          t3se0 = m_glo['getFileInfo'](buf79);if (t3se0 == null) m_glo['onSaveFile'](buf79, o5i_lm);else {
        if (t3se0['readyUrl'] != buf79) m_glo['remove'](o5i_lm, buf79);
      }
    }, m_glo['exits'] = function (pcb30u, _ihrz) {
      var stc03 = m_glo['getFileNativePath'](pcb30u);m_glo['fs']['getFileInfo']({ 'filePath': stc03, 'success': function (l_5i) {
          _ihrz != null && _ihrz['runWith']([0x0, l_5i]);
        }, 'fail': function (rn2h) {
          _ihrz != null && _ihrz['runWith']([0x1, rn2h]);
        } });
    }, m_glo['read'] = function (f74b9, g_lom, ec0ts3, qve0ts) {
      g_lom === void 0x0 && (g_lom = 'ascill'), qve0ts === void 0x0 && (qve0ts = '');var _zir;qve0ts != '' ? _zir = m_glo['getFileNativePath'](f74b9) : _zir = f74b9, m_glo['fs']['readFile']({ 'filePath': _zir, 'encoding': g_lom, 'success': function (_mi5) {
          ec0ts3 != null && ec0ts3['runWith']([0x0, _mi5]);
        }, 'fail': function (awjx) {
          if (awjx && qve0ts != '') m_glo['down'](qve0ts, g_lom, ec0ts3, qve0ts);else ec0ts3 != null && ec0ts3['runWith']([0x1]);
        } });
    }, m_glo['readNativeFile'] = function (rlzio_, ecs0v) {
      m_glo['fs']['readFile']({ 'filePath': rlzio_, 'encoding': '', 'success': function (_mgol) {
          ecs0v != null && ecs0v['runWith']([0x0]);
        }, 'fail': function (wqvset) {
          ecs0v != null && ecs0v['runWith']([0x1]);
        } });
    }, m_glo['down'] = function (r_oizl, zhr_2i, esvtqw, k6qt) {
      zhr_2i === void 0x0 && (zhr_2i = 'ascill'), k6qt === void 0x0 && (k6qt = '');var rz_il = m_glo['getFileNativePath'](k6qt),
          wtevs = m_glo['wxdown']({ 'url': r_oizl, 'filePath': rz_il, 'success': function ($8h2n1) {
          if ($8h2n1['statusCode'] === 0xc8) m_glo['readFile']($8h2n1['filePath'], zhr_2i, esvtqw, k6qt);
        }, 'fail': function (uesc03) {
          esvtqw != null && esvtqw['runWith']([0x1, uesc03]);
        } });wtevs['onProgressUpdate'](function (akx6jg) {
        esvtqw != null && esvtqw['runWith']([0x2, akx6jg['progress']]);
      });
    }, m_glo['readFile'] = function (kwtsq, f97b, xwja, skwvq) {
      f97b === void 0x0 && (f97b = 'ascill'), skwvq === void 0x0 && (skwvq = ''), m_glo['fs']['readFile']({ 'filePath': kwtsq, 'encoding': f97b, 'success': function (o5_i) {
          if (kwtsq['indexOf']('http://') != -0x1 || kwtsq['indexOf']('https://') != -0x1) m_glo['onFileUpdate'](kwtsq, skwvq);xwja != null && xwja['runWith']([0x0, o5_i]);
        }, 'fail': function (kxjwq6) {
          if (kxjwq6) xwja != null && xwja['runWith']([0x1, kxjwq6]);
        } });
    }, m_glo['downImg'] = function (tec, tk6vwq, svce0t) {
      svce0t === void 0x0 && (svce0t = '');var _z2hri = m_glo['wxdown']({ 'url': tec, 'success': function (mo_g) {
          mo_g['statusCode'] === 0xc8 && m_glo['copyFile'](mo_g['tempFilePath'], svce0t, tk6vwq);
        }, 'fail': function (evqst) {
          tk6vwq != null && tk6vwq['runWith']([0x1, evqst]);
        } });
    }, m_glo['copyFile'] = function (h_, tesqv0, t0evs) {
      var g6j5xa = h_['split']('/'),
          upec3 = g6j5xa[g6j5xa['length'] - 0x1],
          aogm = tesqv0['split']('?')[0x0],
          bp7f = m_glo['getFileInfo'](tesqv0),
          s3c = m_glo['getFileNativePath'](upec3);m_glo['fs']['copyFile']({ 'srcPath': h_, 'destPath': s3c, 'success': function (zir_ol) {
          if (!bp7f) m_glo['onSaveFile'](tesqv0, upec3), t0evs != null && t0evs['runWith']([0x0]);else {
            if (bp7f['readyUrl'] != tesqv0) m_glo['remove'](upec3, tesqv0, t0evs);
          }
        }, 'fail': function (q6xwj) {
          t0evs != null && t0evs['runWith']([0x1, q6xwj]);
        } });
    }, m_glo['getFileNativePath'] = function (o5_gml) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o5_gml;
    }, m_glo['remove'] = function (c0b, t0ve, maol5g) {
      t0ve === void 0x0 && (t0ve = '');var mgo5al = m_glo['getFileInfo'](t0ve),
          g6j5x = m_glo['getFileNativePath'](mgo5al['md5']);xkg6ja['loader']['clearRes'](mgo5al['readyUrl']), m_glo['fs']['unlink']({ 'filePath': g6j5x, 'success': function (zri) {
          if (t0ve != '') m_glo['onSaveFile'](t0ve, c0b);maol5g != null && maol5g['runWith']([0x0]);
        }, 'fail': function (kq6twv) {} });
    }, m_glo['onSaveFile'] = function (pc3u9, r2l_) {
      var mgoj = pc3u9['split']('?')[0x0];m_glo['filesListObj'][mgoj] = { 'md5': r2l_, 'readyUrl': pc3u9 }, m_glo['fs']['writeFile']({ 'filePath': m_glo['fileNativeDir'] + '/' + m_glo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](m_glo['filesListObj']), 'success': function (hyn81$) {
          console['log']('写入测试测试成功：', hyn81$);
        }, 'fail': function (b3pu9f) {
          console['log']('写入测试测试失败：', b3pu9f);
        } });
    }, m_glo['existDir'] = function (bc3u9, ag5jx) {
      m_glo['fs']['mkdir']({ 'dirPath': bc3u9, 'success': function (vtk6qw) {
          ag5jx != null && ag5jx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ktsvq) {
          if (ktsvq['errMsg']['indexOf']('file already exists') != -0x1) m_glo['readSync'](m_glo['fileListName'], 'utf8', ag5jx);else ag5jx != null && ag5jx['runWith']([0x1, ktsvq]);
        } });
    }, m_glo['readSync'] = function (c3upe, j6ax5g, wtqkv, e0c3s) {
      j6ax5g === void 0x0 && (j6ax5g = 'ascill'), e0c3s === void 0x0 && (e0c3s = '');var irlo = m_glo['getFileNativePath'](c3upe),
          vtwsqk;try {
        vtwsqk = m_glo['fs']['readFileSync'](irlo), wtqkv != null && wtqkv['runWith']([0x0, { 'data': vtwsqk }]);
      } catch (gmoja) {
        wtqkv != null && wtqkv['runWith']([0x1]);
      }
    }, m_glo['readCache'] = function () {}, m_glo['writeCache'] = function (se0cvt) {
      var $ynh8 = readyUrl['split']('?')[0x0];m_glo['filesListObj'][$ynh8] = { 'md5': md5Name, 'readyUrl': readyUrl }, m_glo['fs']['writeFile']({ 'filePath': m_glo['fileNativeDir'] + '/' + m_glo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](m_glo['filesListObj']), 'success': function (ces30u) {}, 'fail': function (b7p49f) {} });
    }, m_glo['setNativeFileDir'] = function (li_ozr) {
      m_glo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + li_ozr;
    }, m_glo['filesListObj'] = {}, m_glo['fileNativeDir'] = null, m_glo['fileListName'] = 'layaairfiles.txt', m_glo['ziyuFileData'] = {}, _go5(m_glo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), m_glo;
  }(lmog5_),
      cet30 = function (n281hr) {
    function ecu3s() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ecu3s['__super']['call'](this), this['_sound'] = ecu3s['_createSound']();
    }vstk(ecu3s, 'laya.wx.mini.MiniSound', n281hr);var ir_h2 = ecu3s['prototype'];return ir_h2['load'] = function (x6ag5) {
      var lzir_2 = this;x6ag5 = u9cpb3['formatURL'](x6ag5), this['url'] = x6ag5;if (ecu3s['_audioCache'][x6ag5]) {
        this['event']('complete');return;
      }function _2zhir() {
        if (ecu3s['_null'] != undefined) lzir_2['_sound']['onCanplay'](ecu3s['_null']), lzir_2['_sound']['onError'](ecu3s['_null']);else try {
          lzir_2['_sound']['onCanplay'](null), lzir_2['_sound']['onError'](null), ecu3s['_null'] = null;
        } catch (e3uc0p) {
          console['warn']('[wxmini] _clearSound:' + e3uc0p), lzir_2['_sound']['onCanplay'](xqjwk), lzir_2['_sound']['onError'](xqjwk), ecu3s['_null'] = xqjwk;
        }
      }function sqv0t() {
        _2zhir(), gax5jm['loaded'] = !![], gax5jm['event']('complete'), ecu3s['_audioCache'][gax5jm['url']] = gax5jm;
      }function fp3bu9(s0tcve) {
        console['error']('errCode=' + s0tcve['errCode'] + '  errMsg=' + s0tcve['errMsg']), _2zhir(), gax5jm['event']('error');
      }function xqjwk() {}this['_sound']['onCanplay'](sqv0t), this['_sound']['onError'](fp3bu9), this['_sound']['src'] = x6ag5;var gax5jm = this;
    }, ir_h2['play'] = function (b9u7f, j6qkxw) {
      b9u7f === void 0x0 && (b9u7f = 0x0), j6qkxw === void 0x0 && (j6qkxw = 0x0);var jxawk6;if (this['url'] == qsetv['_tMusic']) {
        if (!ecu3s['_musicAudio']) ecu3s['_musicAudio'] = ecu3s['_createSound']();jxawk6 = ecu3s['_musicAudio'];
      } else jxawk6 = ecu3s['_createSound']();jxawk6['src'] = this['url'];var u0se3c = new ag6(jxawk6);return u0se3c['url'] = this['url'], u0se3c['loops'] = j6qkxw, u0se3c['startTime'] = b9u7f, u0se3c['play'](), qsetv['addChannel'](u0se3c), u0se3c;
    }, ir_h2['dispose'] = function () {
      var $nh1y = ecu3s['_audioCache'][this['url']];$nh1y && ($nh1y['src'] = '', delete ecu3s['_audioCache'][this['url']]);
    }, _ogm5l(0x0, ir_h2, 'duration', function () {
      return this['_sound']['duration'];
    }), ecu3s['_createSound'] = function () {
      return ecu3s['_id']++, rn812h['window']['wx']['createInnerAudioContext']();
    }, ecu3s['_musicAudio'] = null, ecu3s['_id'] = 0x0, ecu3s['_audioCache'] = {}, ecu3s['_null'] = undefined, ecu3s;
  }(lmog5_),
      ag6 = function (u0cp3) {
    function awjx6k(r21hiz) {
      this['_audio'] = null, this['_onEnd'] = null, awjx6k['__super']['call'](this), this['_audio'] = r21hiz, this['_onEnd'] = ag65xj['bind'](this['__onEnd'], this), r21hiz['onEnded'](this['_onEnd']);
    }vstk(awjx6k, 'laya.wx.mini.MiniSoundChannel', u0cp3);var jmoa5g = awjx6k['prototype'];return jmoa5g['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xkg6ja['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jmoa5g['__onNull'] = function () {}, jmoa5g['play'] = function () {
      this['isStopped'] = ![], qsetv['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jmoa5g['stop'] = function () {
      this['isStopped'] = !![], qsetv['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (awjx6k['_null'] != undefined) this['_audio']['onEnded'](awjx6k['_null']);else try {
        this['_audio']['onEnded'](null), awjx6k['_null'] = null;
      } catch (wtqsve) {
        console['warn']('[wxmini] stop:' + wtqsve), this['_audio']['onEnded'](ag65xj['bind'](this['__onNull'], this)), awjx6k['_null'] = ag65xj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jmoa5g['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jmoa5g['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qsetv['addChannel'](this), this['_audio']['play']();
    }, _ogm5l(0x0, jmoa5g, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _ogm5l(0x0, jmoa5g, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _ogm5l(0x0, jmoa5g, 'volume', function () {
      return 0x1;
    }, function (pufb3) {}), awjx6k['_null'] = undefined, awjx6k;
  }(tc0se3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _mlio in Laya) {
    var o5ajgm = Laya[_mlio];o5ajgm && o5ajgm['__isclass'] && (exports[_mlio] = o5ajgm);
  }
});