var B = wx.$z;
(function (window, document, x184) {
  var jega_ = x184['un'],
      _qeanh = x184['uns'],
      bsoui = x184['static'],
      e_agjq = x184['class'],
      egjq_a = x184['getset'],
      yv2t = x184['__newvec'],
      jsoiur = laya['utils']['Browser'],
      q0han = laya['events']['Event'],
      ehaq = laya['events']['EventDispatcher'],
      k1 = laya['resource']['HTMLImage'],
      jg = laya['utils']['Handler'],
      hqn = laya['display']['Input'],
      anheq = laya['net']['Loader'],
      gqne_ = laya['maths']['Matrix'],
      m0z = laya['renders']['Render'],
      e_rojg = laya['utils']['RunDriver'],
      orjius = laya['media']['Sound'],
      x14k8 = laya['media']['SoundChannel'],
      z0wfh = laya['media']['SoundManager'],
      han_q = laya['display']['Stage'],
      _heaqn = laya['net']['URL'],
      fzd3 = laya['utils']['Utils'],
      aeqg = function () {
    function z0fmw() {}return e_agjq(z0fmw, 'laya.wx.mini.MiniAdpter'), z0fmw['getJson'] = function (_eaqjg) {
      return JSON['parse'](_eaqjg);
    }, z0fmw['init'] = function ($2tlvy, sujri) {
      $2tlvy === void 0x0 && ($2tlvy = ![]), sujri === void 0x0 && (sujri = ![]);if (z0fmw['_inited']) return;z0fmw['window'] = window;if (z0fmw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;z0fmw['_inited'] = !![], z0fmw['isZiYu'] = sujri, z0fmw['isPosMsgYu'] = $2tlvy, z0fmw['EnvConfig'] = {}, !z0fmw['isZiYu'] && (w9zdf3['setNativeFileDir']('/layaairGame'), w9zdf3['existDir'](w9zdf3['fileNativeDir'], jg['create'](z0fmw, z0fmw['onMkdirCallBack']))), z0fmw['window']['focus'] = function () {}, x184['getUrlPath'] = function () {}, z0fmw['window']['logtime'] = function (srio) {}, z0fmw['window']['alertTimeLog'] = function (z0wmn) {}, z0fmw['window']['resetShareInfo'] = function () {}, z0fmw['window']['CanvasRenderingContext2D'] = function () {}, z0fmw['window']['CanvasRenderingContext2D']['prototype'] = z0fmw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], z0fmw['window']['document']['body']['appendChild'] = function () {}, z0fmw['EnvConfig']['pixelRatioInt'] = 0x0, e_rojg['getPixelRatio'] = z0fmw['pixelRatio'], z0fmw['_preCreateElement'] = jsoiur['createElement'], jsoiur['createElement'] = z0fmw['createElement'], e_rojg['createShaderCondition'] = z0fmw['createShaderCondition'], fzd3['parseXMLFromString'] = z0fmw['parseXMLFromString'], hqn['_createInputElement'] = yub75i['_createInputElement'], z0fmw['EnvConfig']['load'] = anheq['prototype']['load'], anheq['prototype']['load'] = y52lt$['prototype']['load'], z0fmw['isZiYu'] && $2tlvy && wx['onMessage'](function (ylvt$2) {
        ylvt$2['isLoad'] && (w9zdf3['ziyuFileData'][ylvt$2['url']] = ylvt$2['data']);
      });
    }, z0fmw['onMkdirCallBack'] = function (x18p64, pk814x) {
      if (!x18p64) w9zdf3['filesListObj'] = JSON['parse'](pk814x['data']);
    }, z0fmw['pixelRatio'] = function () {
      if (!z0fmw['EnvConfig']['pixelRatioInt']) try {
        var zfw3d = wx['getSystemInfoSync']();return z0fmw['EnvConfig']['pixelRatioInt'] = zfw3d['pixelRatio'], zfw3d = zfw3d, zfw3d['pixelRatio'];
      } catch (d9zfmw) {}return z0fmw['EnvConfig']['pixelRatioInt'];
    }, z0fmw['createElement'] = function (fmzd9) {
      if (fmzd9 == 'canvas') {
        var q0mah;return z0fmw['idx'] == 0x1 ? z0fmw['isZiYu'] ? (q0mah = sharedCanvas, q0mah['style'] = {}) : q0mah = window['canvas'] : q0mah = window['wx']['createCanvas'](), z0fmw['idx']++, q0mah;
      } else {
        if (fmzd9 == 'textarea' || fmzd9 == 'input') return z0fmw['onCreateInput'](fmzd9);else {
          if (fmzd9 == 'div') {
            var qn_aeg = z0fmw['_preCreateElement'](fmzd9);return qn_aeg['contains'] = function (ruog) {
              return null;
            }, qn_aeg['removeChild'] = function (vy2lt$) {}, qn_aeg;
          } else return z0fmw['_preCreateElement'](fmzd9);
        }
      }
    }, z0fmw['onCreateInput'] = function (d138x) {
      var f0z = z0fmw['_preCreateElement'](d138x);return f0z['focus'] = yub75i['wxinputFocus'], f0z['blur'] = yub75i['wxinputblur'], f0z['style'] = {}, f0z['value'] = 0x0, f0z['parentElement'] = {}, f0z['placeholder'] = {}, f0z['type'] = {}, f0z['setColor'] = function (wdzf39) {}, f0z['setType'] = function (eaq_j) {}, f0z['setFontFace'] = function (ujis) {}, f0z['addEventListener'] = function (dwzm9) {}, f0z['contains'] = function (i5ub) {
        return null;
      }, f0z['removeChild'] = function (ib75uy) {}, f0z;
    }, z0fmw['createShaderCondition'] = function (t2$b5y) {
      var wn0hq = this,
          zmw90f = function () {
        var oir7us = t2$b5y;return wn0hq[t2$b5y['replace']('this.', '')];
      };return zmw90f;
    }, z0fmw['EnvConfig'] = null, z0fmw['window'] = null, z0fmw['_preCreateElement'] = null, z0fmw['_inited'] = ![], z0fmw['wxRequest'] = null, z0fmw['systemInfo'] = null, z0fmw['version'] = '0.0.1', z0fmw['isZiYu'] = ![], z0fmw['isPosMsgYu'] = ![], z0fmw['parseXMLFromString'] = function (nhq0_) {
      var irs, usjroi;nhq0_ = nhq0_['replace'](/>\s+</g, '><');try {
        irs = new window['Parser']['DOMParser']()['parseFromString'](nhq0_, 'text/xml');
      } catch (y75i) {
        throw '需要引入xml解析库文件';
      }return irs;
    }, z0fmw['idx'] = 0x1, z0fmw;
  }(),
      zfhwm = function () {
    function hmzw0() {}e_agjq(hmzw0, 'laya.wx.mini.MiniImage');var vly2t$ = hmzw0['prototype'];return vly2t$['_loadImage'] = function (_aqgn) {
      var jear = this,
          is7bo = ![];_aqgn['indexOf']('layaNativeDir/') == -0x1 && (is7bo = !![], _aqgn = _heaqn['formatURL'](_aqgn));if (!w9zdf3['getFileInfo'](_aqgn)) {
        if (_aqgn['indexOf']('http://') != -0x1 || _aqgn['indexOf']('https://') != -0x1) w9zdf3['downImg'](_aqgn, new jg(hmzw0, hmzw0['onDownImgCallBack'], [_aqgn, jear]), _aqgn);else hmzw0['onCreateImage'](_aqgn, jear, !![]);
      } else hmzw0['onCreateImage'](_aqgn, jear, !is7bo);
    }, hmzw0['onDownImgCallBack'] = function (gsroju, lt2$v, wfzhm0) {
      if (!wfzhm0) hmzw0['onCreateImage'](gsroju, lt2$v);else lt2$v['onError'](null);
    }, hmzw0['onCreateImage'] = function (_nhq0, by7t2, _rojeg) {
      _rojeg === void 0x0 && (_rojeg = ![]);var gruoj;if (!_rojeg) {
        var sjior = w9zdf3['getFileInfo'](_nhq0),
            z9fmw = sjior['md5'];gruoj = w9zdf3['getFileNativePath'](z9fmw);
      } else gruoj = _nhq0;if (by7t2['imgCache'] == null) by7t2['imgCache'] = {};var u7bois;function vt2yl$() {
        u7bois['onload'] = null, u7bois['onerror'] = null, delete by7t2['imgCache'][_nhq0];
      };var z0w9fm = function () {
        vt2yl$(), by7t2['onLoaded'](u7bois);
      },
          ty$2v = function () {
        vt2yl$(), by7t2['event']('error', 'Load image failed');
      };by7t2['_type'] == 'nativeimage' ? (u7bois = new jsoiur['window']['Image'](), u7bois['crossOrigin'] = '', u7bois['onload'] = z0w9fm, u7bois['onerror'] = ty$2v, u7bois['src'] = gruoj, by7t2['imgCache'][_nhq0] = u7bois) : new k1['create'](gruoj, { 'onload': z0w9fm, 'onerror': ty$2v, 'onCreate': function (nq_0ah) {
          u7bois = nq_0ah, by7t2['imgCache'][_nhq0] = nq_0ah;
        } });
    }, hmzw0;
  }(),
      yub75i = function () {
    function x31d68() {}return e_agjq(x31d68, 'laya.wx.mini.MiniInput'), x31d68['_createInputElement'] = function () {
      hqn['_initInput'](hqn['area'] = jsoiur['createElement']('textarea')), hqn['_initInput'](hqn['input'] = jsoiur['createElement']('input')), hqn['inputContainer'] = jsoiur['createElement']('div'), hqn['inputContainer']['style']['position'] = 'absolute', hqn['inputContainer']['style']['zIndex'] = 0x186a0, jsoiur['container']['appendChild'](hqn['inputContainer']), hqn['inputContainer']['setPos'] = function (bisu5, t$l5y2) {
        hqn['inputContainer']['style']['left'] = bisu5 + 'px', hqn['inputContainer']['style']['top'] = t$l5y2 + 'px';
      }, x184['stage']['on']('resize', null, x31d68['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (orj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), z0wfh['_soundClass'] = hnz0mw, z0wfh['_musicClass'] = hnz0mw, window['_videoClass'] = kx8p41;
    }, x31d68['_onStageResize'] = function () {
      var w09fm = x184['stage']['_canvasTransform']['identity']();w09fm['scale'](jsoiur['width'] / m0z['canvas']['width'] / e_rojg['getPixelRatio'](), jsoiur['height'] / m0z['canvas']['height'] / e_rojg['getPixelRatio']());
    }, x31d68['wxinputFocus'] = function (ang_eq) {
      var oibsu = hqn['inputElement']['target'];if (oibsu && !oibsu['editable']) return;aeqg['window']['wx']['offKeyboardConfirm'](), aeqg['window']['wx']['offKeyboardInput'](), aeqg['window']['wx']['showKeyboard']({ 'defaultValue': oibsu['text'], 'maxLength': oibsu['maxChars'], 'multiple': oibsu['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (d6x318) {}, 'fail': function (k4x) {} }), aeqg['window']['wx']['onKeyboardConfirm'](function (hmwn0z) {
        var z0nhwm = hmwn0z ? hmwn0z['value'] : '';oibsu['text'] = z0nhwm, oibsu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), aeqg['window']['wx']['onKeyboardInput'](function (wqnm0h) {
        var l2y5 = wqnm0h ? wqnm0h['value'] : '';if (!oibsu['multiline']) {
          if (l2y5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }oibsu['text'] = l2y5, oibsu['event']('input');
      });
    }, x31d68['inputEnter'] = function () {
      hqn['inputElement']['target']['focus'] = ![];
    }, x31d68['wxinputblur'] = function () {
      x31d68['hideKeyboard']();
    }, x31d68['hideKeyboard'] = function () {
      aeqg['window']['wx']['offKeyboardConfirm'](), aeqg['window']['wx']['offKeyboardInput'](), aeqg['window']['wx']['hideKeyboard']({ 'success': function (zdfm) {
          console['log']('隐藏键盘');
        }, 'fail': function (hmqn0) {
          console['log']('隐藏键盘出错:' + (hmqn0 ? hmqn0['errMsg'] : ''));
        } });
    }, x31d68;
  }(),
      y52lt$ = function () {
    function nge_q() {}e_agjq(nge_q, 'laya.wx.mini.MiniLoader');var yb7 = nge_q['prototype'];return yb7['load'] = function (t2b$, whm, neqha, nehq, esrjg) {
      neqha === void 0x0 && (neqha = !![]), esrjg === void 0x0 && (esrjg = ![]);var w0hf = this;w0hf['_url'] = t2b$;if (t2b$['indexOf']('data:image') === 0x0) w0hf['_type'] = whm = 'image';else w0hf['_type'] = whm || (whm = w0hf['getTypeFromUrl'](t2b$));w0hf['_cache'] = neqha, w0hf['_data'] = null;var q_eahn = 'ascii';if (t2b$['indexOf']('.fnt') != -0x1) q_eahn = 'utf8';else whm == 'arraybuffer' && (q_eahn = '');;var srjogu = fzd3['getFileExtension'](t2b$);if (nge_q['_fileTypeArr']['indexOf'](srjogu) != -0x1) aeqg['EnvConfig']['load']['call'](this, t2b$, whm, neqha, nehq, esrjg);else {
        if (!w9zdf3['getFileInfo'](t2b$)) {
          if (t2b$['indexOf']('layaNativeDir/') != -0x1) {
            if (aeqg['isZiYu']) {
              var isroju = w9zdf3['ziyuFileData'][t2b$];w0hf['onLoaded'](isroju);return;
            } else {
              cosnole['log']('read read'), w9zdf3['read'](t2b$, q_eahn, new jg(nge_q, nge_q['onReadNativeCallBack'], [q_eahn, t2b$, whm, neqha, nehq, esrjg, w0hf]));return;
            }
          }if (_heaqn['rootPath'] == '') var eaqn_g = t2b$;else eaqn_g = t2b$['split'](_heaqn['rootPath'])[0x0];t2b$['indexOf']('http://') != -0x1 || t2b$['indexOf']('https://') != -0x1 ? aeqg['EnvConfig']['load']['call'](w0hf, t2b$, whm, neqha, nehq, esrjg) : w9zdf3['readFile'](eaqn_g, q_eahn, new jg(nge_q, nge_q['onReadNativeCallBack'], [q_eahn, t2b$, whm, neqha, nehq, esrjg, w0hf]), t2b$);
        } else aeqg['EnvConfig']['load']['call'](this, t2b$, whm, neqha, nehq, esrjg);
      }
    }, yb7['resMgrLoad'] = function (d39816, yb5u7i, m0z9f, egnqa, t$b25y, hmzwn0, yb2t$5) {
      m0z9f === void 0x0 && (m0z9f = 0x0), egnqa === void 0x0 && (egnqa = ![]), t$b25y === void 0x0 && (t$b25y = ![]), hmzwn0 === void 0x0 && (hmzwn0 = 0x0), yb2t$5 === void 0x0 && (yb2t$5 = 0x3), d39816['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d39816), aeqg['EnvConfig']['resMgrLoad'](d39816, (e_qgna, nhwq0m, n_heq) => {
        nge_q['prototype']['resMgrLoadCallBack'](e_qgna, nhwq0m, n_heq, yb5u7i);
      }, m0z9f, egnqa, t$b25y, hmzwn0, yb2t$5);
    }, yb7['resMgrLoadCallBack'] = function (qh0mw, p4x8k, urjsg, w9df3z) {
      console['log']('buff:::', qh0mw, urjsg, w9zdf3['fileNativeDir'] + '///' + w9zdf3['fileListName']), w9df3z(qh0mw, p4x8k, urjsg);
    }, yb7['clearRes'] = function (qgea_n, w90fmz) {
      w90fmz === void 0x0 && (w90fmz = ![]);var $tb25 = this;$tb25['clearRes'](qgea_n, w90fmz);var uyib5 = w9zdf3['getFileInfo'](qgea_n);if (uyib5 && (qgea_n['indexOf']('http://') != -0x1 || qgea_n['indexOf']('https://') != -0x1)) {
        var p3816x = uyib5['md5'],
            rs7oui = w9zdf3['getFileNativePath'](p3816x);w9zdf3['remove'](rs7oui);
      }
    }, nge_q['onReadNativeCallBack'] = function ($5b2, qe, ge_o, u5bs7, d39wfz, gousrj, u7rs, biu57y, erojg) {
      u5bs7 === void 0x0 && (u5bs7 = !![]), gousrj === void 0x0 && (gousrj = ![]), biu57y === void 0x0 && (biu57y = 0x0);if (!biu57y) {
        var f96d;if (ge_o == 'json' || ge_o == 'atlas') f96d = aeqg['getJson'](erojg['data']);else ge_o == 'xml' ? f96d = fzd3['parseXMLFromString'](erojg['data']) : f96d = erojg['data'];u7rs['onLoaded'](f96d), !aeqg['isZiYu'] && aeqg['isPosMsgYu'] && ge_o != 'arraybuffer' && wx['postMessage']({ 'url': qe, 'data': f96d, 'isLoad': !![] });
      } else biu57y == 0x1 && aeqg['EnvConfig']['load']['call'](u7rs, qe, ge_o, u5bs7, d39wfz, gousrj);
    }, bsoui(nge_q, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nge_q;
  }(),
      w9zdf3 = function ($2tyl5) {
    function tb527() {
      tb527['__super']['call'](this);;
    }return e_agjq(tb527, 'laya.wx.mini.MiniFileMgr', $2tyl5), tb527['isLoadFile'] = function (b7suio) {
      return tb527['_fileTypeArr']['indexOf'](b7suio) != -0x1 ? !![] : ![];
    }, tb527['getFileInfo'] = function (n0wmz) {
      var z0m = n0wmz['split']('?')[0x0],
          hwn0mq = tb527['filesListObj'][z0m];if (hwn0mq == null) return null;else return hwn0mq;return null;
    }, tb527['onFileUpdate'] = function (j_rego, so7ub) {
      var p841 = j_rego['split']('/'),
          y$5t2l = p841[p841['length'] - 0x1],
          tyb5$2 = tb527['getFileInfo'](so7ub);if (tyb5$2 == null) tb527['onSaveFile'](so7ub, y$5t2l);else {
        if (tyb5$2['readyUrl'] != so7ub) tb527['remove'](y$5t2l, so7ub);
      }
    }, tb527['exits'] = function (haen, nega) {
      var g_er = tb527['getFileNativePath'](haen);tb527['fs']['getFileInfo']({ 'filePath': g_er, 'success': function (b5y2t) {
          nega != null && nega['runWith']([0x0, b5y2t]);
        }, 'fail': function (wmfhz) {
          nega != null && nega['runWith']([0x1, wmfhz]);
        } });
    }, tb527['read'] = function (bt72y5, ujogsr, agqn, mqna0) {
      ujogsr === void 0x0 && (ujogsr = 'ascill'), mqna0 === void 0x0 && (mqna0 = '');var gjer_;mqna0 != '' ? gjer_ = tb527['getFileNativePath'](bt72y5) : gjer_ = bt72y5, tb527['fs']['readFile']({ 'filePath': gjer_, 'encoding': ujogsr, 'success': function (jrge_a) {
          agqn != null && agqn['runWith']([0x0, jrge_a]);
        }, 'fail': function (qh_aen) {
          if (qh_aen && mqna0 != '') tb527['down'](mqna0, ujogsr, agqn, mqna0);else agqn != null && agqn['runWith']([0x1]);
        } });
    }, tb527['readNativeFile'] = function (gjose, qje_ga) {
      tb527['fs']['readFile']({ 'filePath': gjose, 'encoding': '', 'success': function (hwnq0m) {
          qje_ga != null && qje_ga['runWith']([0x0]);
        }, 'fail': function ($t25b) {
          qje_ga != null && qje_ga['runWith']([0x1]);
        } });
    }, tb527['down'] = function (t7y2b, mz09f, hqnma, rjiu) {
      mz09f === void 0x0 && (mz09f = 'ascill'), rjiu === void 0x0 && (rjiu = '');var ojegs = tb527['getFileNativePath'](rjiu),
          zn0w = tb527['wxdown']({ 'url': t7y2b, 'filePath': ojegs, 'success': function (m0nwhq) {
          if (m0nwhq['statusCode'] === 0xc8) tb527['readFile'](m0nwhq['filePath'], mz09f, hqnma, rjiu);
        }, 'fail': function (mhw0zf) {
          hqnma != null && hqnma['runWith']([0x1, mhw0zf]);
        } });zn0w['onProgressUpdate'](function (eqajg_) {
        hqnma != null && hqnma['runWith']([0x2, eqajg_['progress']]);
      });
    }, tb527['readFile'] = function (rjius, mq0a, w9mdz, uis7b5) {
      mq0a === void 0x0 && (mq0a = 'ascill'), uis7b5 === void 0x0 && (uis7b5 = ''), tb527['fs']['readFile']({ 'filePath': rjius, 'encoding': mq0a, 'success': function (osu7ib) {
          if (rjius['indexOf']('http://') != -0x1 || rjius['indexOf']('https://') != -0x1) tb527['onFileUpdate'](rjius, uis7b5);w9mdz != null && w9mdz['runWith']([0x0, osu7ib]);
        }, 'fail': function (e_ag) {
          if (e_ag) w9mdz != null && w9mdz['runWith']([0x1, e_ag]);
        } });
    }, tb527['downImg'] = function (u7biy5, i7b2y, aqne_h) {
      aqne_h === void 0x0 && (aqne_h = '');var df9z36 = tb527['wxdown']({ 'url': u7biy5, 'success': function (mqahn) {
          mqahn['statusCode'] === 0xc8 && tb527['copyFile'](mqahn['tempFilePath'], aqne_h, i7b2y);
        }, 'fail': function (b25iy7) {
          i7b2y != null && i7b2y['runWith']([0x1, b25iy7]);
        } });
    }, tb527['copyFile'] = function (w3z, obi7u, eg_ajr) {
      var $t5ly2 = w3z['split']('/'),
          hq_ne = $t5ly2[$t5ly2['length'] - 0x1],
          rsiou = obi7u['split']('?')[0x0],
          sruio7 = tb527['getFileInfo'](obi7u),
          p18x46 = tb527['getFileNativePath'](hq_ne);tb527['fs']['copyFile']({ 'srcPath': w3z, 'destPath': p18x46, 'success': function (tl2) {
          if (!sruio7) tb527['onSaveFile'](obi7u, hq_ne), eg_ajr != null && eg_ajr['runWith']([0x0]);else {
            if (sruio7['readyUrl'] != obi7u) tb527['remove'](hq_ne, obi7u, eg_ajr);
          }
        }, 'fail': function (ange_q) {
          eg_ajr != null && eg_ajr['runWith']([0x1, ange_q]);
        } });
    }, tb527['getFileNativePath'] = function (gr_eoj) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gr_eoj;
    }, tb527['remove'] = function (ubs, px6183, enga) {
      px6183 === void 0x0 && (px6183 = '');var gsuj = tb527['getFileInfo'](px6183),
          q_eja = tb527['getFileNativePath'](gsuj['md5']);x184['loader']['clearRes'](gsuj['readyUrl']), tb527['fs']['unlink']({ 'filePath': q_eja, 'success': function (wzd9fm) {
          if (px6183 != '') tb527['onSaveFile'](px6183, ubs);enga != null && enga['runWith']([0x0]);
        }, 'fail': function (by2i) {} });
    }, tb527['onSaveFile'] = function (zfmwd, t5$2l) {
      var sb57ui = zfmwd['split']('?')[0x0];tb527['filesListObj'][sb57ui] = { 'md5': t5$2l, 'readyUrl': zfmwd }, tb527['fs']['writeFile']({ 'filePath': tb527['fileNativeDir'] + '/' + tb527['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tb527['filesListObj']), 'success': function (oes) {
          console['log']('写入测试测试成功：', oes);
        }, 'fail': function (rsjg) {
          console['log']('写入测试测试失败：', rsjg);
        } });
    }, tb527['existDir'] = function (uios7, px18k) {
      tb527['fs']['mkdir']({ 'dirPath': uios7, 'success': function (soejr) {
          px18k != null && px18k['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (wmh0) {
          if (wmh0['errMsg']['indexOf']('file already exists') != -0x1) tb527['readSync'](tb527['fileListName'], 'utf8', px18k);else px18k != null && px18k['runWith']([0x1, wmh0]);
        } });
    }, tb527['readSync'] = function (oirs, zwmf90, ltyv2$, rojg_) {
      zwmf90 === void 0x0 && (zwmf90 = 'ascill'), rojg_ === void 0x0 && (rojg_ = '');var qna_e = tb527['getFileNativePath'](oirs),
          jir;try {
        jir = tb527['fs']['readFileSync'](qna_e), ltyv2$ != null && ltyv2$['runWith']([0x0, { 'data': jir }]);
      } catch (t5) {
        ltyv2$ != null && ltyv2$['runWith']([0x1]);
      }
    }, tb527['readCache'] = function () {}, tb527['writeCache'] = function (z63f9d) {
      var xp1k48 = readyUrl['split']('?')[0x0];tb527['filesListObj'][xp1k48] = { 'md5': md5Name, 'readyUrl': readyUrl }, tb527['fs']['writeFile']({ 'filePath': tb527['fileNativeDir'] + '/' + tb527['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tb527['filesListObj']), 'success': function (fd39) {}, 'fail': function ($ylt2) {} });
    }, tb527['setNativeFileDir'] = function (gsorju) {
      tb527['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gsorju;
    }, tb527['filesListObj'] = {}, tb527['fileNativeDir'] = null, tb527['fileListName'] = 'layaairfiles.txt', tb527['ziyuFileData'] = {}, bsoui(tb527, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), tb527;
  }(ehaq),
      hnz0mw = function (zmd9w) {
    function t52ly() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], t52ly['__super']['call'](this), this['_sound'] = t52ly['_createSound'](), this['_chanell'] = new _neqa(this['_sound']);
    }e_agjq(t52ly, 'laya.wx.mini.MiniSound', zmd9w);var ty$2b5 = t52ly['prototype'];return ty$2b5['load'] = function (zw) {
      var gnqae_ = this;zw = _heaqn['formatURL'](zw), this['url'] = zw;if (t52ly['_audioCache'][zw]) {
        this['event']('complete');return;
      }function yu5bi() {
        if (t52ly['_null'] != undefined) gnqae_['_sound']['onCanplay'](t52ly['_null']), gnqae_['_sound']['onError'](t52ly['_null']);else try {
          gnqae_['_sound']['onCanplay'](null), gnqae_['_sound']['onError'](null), t52ly['_null'] = null;
        } catch (y52b$t) {
          console['warn']('[wxmini] _clearSound:' + y52b$t), gnqae_['_sound']['onCanplay'](_gaeqn), gnqae_['_sound']['onError'](_gaeqn), t52ly['_null'] = _gaeqn;
        }
      }function g_eaq() {
        x8pk4['loaded'] = !![], x8pk4['event']('complete'), t52ly['_audioCache'][x8pk4['url']] = x8pk4;
      }function zd9wf3(qa0m) {
        console['error']('errCode=' + qa0m['errCode'] + '  errMsg=' + qa0m['errMsg']), x8pk4['event']('error');
      }function _gaeqn() {}this['_sound']['onCanplay'](g_eaq), this['_sound']['onError'](zd9wf3), this['_sound']['src'] = zw;var x8pk4 = this;
    }, ty$2b5['play'] = function (d93f1, suiorj) {
      d93f1 === void 0x0 && (d93f1 = 0x0), suiorj === void 0x0 && (suiorj = 0x0);var us7o, eagr;if (this['url'] == z0wfh['_tMusic']) {
        if (!t52ly['_musicAudio']) t52ly['_musicAudio'] = this['_sound'];us7o = t52ly['_musicAudio'], eagr = this['_chanell'];
      } else us7o = this['_sound'], eagr = this['_chanell'];return us7o['src'] = this['url'], us7o['startTime'] = 0x0, eagr['isStopped'] && (eagr['url'] = this['url'], eagr['loops'] = suiorj, eagr['startTime'] = d93f1, eagr['play'](), z0wfh['addChannel'](eagr)), eagr;
    }, ty$2b5['dispose'] = function () {
      var jg_o = t52ly['_audioCache'][this['url']];jg_o && (jg_o['src'] = '', delete t52ly['_audioCache'][this['url']]);
    }, egjq_a(0x0, ty$2b5, 'duration', function () {
      return this['_sound']['duration'];
    }), t52ly['_createSound'] = function () {
      t52ly['_id']++;var nqage = aeqg['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return nqage;
    }, t52ly['_musicAudio'] = null, t52ly['_id'] = 0x0, t52ly['_audioCache'] = {}, t52ly['_null'] = undefined, t52ly;
  }(ehaq),
      _neqa = function (srjoug) {
    function d83196(qg_na) {
      this['_audio'] = null, this['_onEnd'] = null, d83196['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = qg_na, this['_onEnd'] = fzd3['bind'](this['__onEnd'], this), qg_na['onEnded'](this['_onEnd']);
    }e_agjq(d83196, 'laya.wx.mini.MiniSoundChannel', srjoug);var nma0qh = d83196['prototype'];return nma0qh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x184['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, nma0qh['__onNull'] = function () {}, nma0qh['play'] = function () {
      this['isStopped'] = ![], z0wfh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, nma0qh['stop'] = function () {
      this['isStopped'] = !![], z0wfh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, nma0qh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, nma0qh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], z0wfh['addChannel'](this), this['_audio']['play']();
    }, egjq_a(0x0, nma0qh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), egjq_a(0x0, nma0qh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), egjq_a(0x0, nma0qh, 'volume', function () {
      return 0x1;
    }, function (rgosuj) {}), d83196['_null'] = undefined, d83196;
  }(x14k8),
      kx8p41 = function () {
    function dm9() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = aeqg['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }e_agjq(dm9, 'laya.wx.mini.MiniVideo');var jsgro = dm9['prototype'];return jsgro['on'] = function (fz936d, gjor_, q_ajg) {
      if (fz936d == 'loadedmetadata') this['onPlayFunc'] = q_ajg['bind'](gjor_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else fz936d == 'ended' && (this['onEndedFunC'] = q_ajg['bind'](gjor_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, jsgro['onTimeUpdateFunc'] = function (d9w3) {
      this['position'] = d9w3['position'], this['_duration'] = d9w3['duration'];
    }, jsgro['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, jsgro['onended'] = function (a_qhne, mqhna0) {
      this['onEndedFunC'] = mqhna0['bind'](a_qhne), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, jsgro['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, jsgro['off'] = function (eorjsg, gjuro, m0wnhz) {
      if (eorjsg == 'loadedmetadata') this['onPlayFunc'] = m0wnhz['bind'](gjuro), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else eorjsg == 'ended' && (this['onEndedFunC'] = m0wnhz['bind'](gjuro), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, jsgro['load'] = function (joreg_) {
      if (!this['videoElement']) return;this['videoElement']['src'] = joreg_;
    }, jsgro['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, jsgro['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, jsgro['size'] = function (xk81p4, ty2b5) {
      if (!this['videoElement']) return;this['videoElement']['width'] = xk81p4, this['videoElement']['height'] = ty2b5;
    }, jsgro['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, jsgro['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, egjq_a(0x0, jsgro, 'duration', function () {
      return this['_duration'];
    }), egjq_a(0x0, jsgro, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (q0mnah) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = q0mnah;
    }), egjq_a(0x0, jsgro, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), egjq_a(0x0, jsgro, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), egjq_a(0x0, jsgro, 'ended', function () {
      return this['videoend'];
    }), egjq_a(0x0, jsgro, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (ma0nqh) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = ma0nqh;
    }), egjq_a(0x0, jsgro, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (px461) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = px461;
    }), egjq_a(0x0, jsgro, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (g_reo) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = g_reo;
    }), egjq_a(0x0, jsgro, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), egjq_a(0x0, jsgro, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (hwmq) {
      if (!this['videoElement']) return;this['videoElement']['x'] = hwmq;
    }), egjq_a(0x0, jsgro, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (ugojr) {
      if (!this['videoElement']) return;this['videoElement']['y'] = ugojr;
    }), egjq_a(0x0, jsgro, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), egjq_a(0x0, jsgro, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (geors) {
      if (!this['videoElement']) return;this['videoElement']['src'] = geors;
    }), egjq_a(0x0, jsgro, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (_er) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = _er;
    }), egjq_a(0x0, jsgro, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (ytvl2) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = ytvl2;
    }), dm9;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nheaq_ in Laya) {
    var k814xp = Laya[nheaq_];k814xp && k814xp['__isclass'] && (exports[nheaq_] = k814xp);
  }
});