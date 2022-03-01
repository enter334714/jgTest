var u = wx.$x;
(function (window, document, fl9y87) {
  var ebh = fl9y87['un'],
      soim4x = fl9y87['uns'],
      n9ucj = fl9y87['static'],
      w6213t = fl9y87['class'],
      a0ehqp = fl9y87['getset'],
      juvnc = fl9y87['__newvec'],
      w3k6t = laya['utils']['Browser'],
      ugvi = laya['events']['Event'],
      e0b1k = laya['events']['EventDispatcher'],
      mzo2s5 = laya['resource']['HTMLImage'],
      g4uvid = laya['utils']['Handler'],
      jcf9n = laya['display']['Input'],
      _raqh = laya['net']['Loader'],
      he_pq = laya['maths']['Matrix'],
      w1ebk0 = laya['renders']['Render'],
      ig4xsm = laya['utils']['RunDriver'],
      giv = laya['media']['Sound'],
      sgx = laya['media']['SoundChannel'],
      w103bk = laya['media']['SoundManager'],
      vdi4u = laya['display']['Stage'],
      ugnv = laya['net']['URL'],
      hew0bk = laya['utils']['Utils'],
      ep_qha = function () {
    function nduv4() {}return w6213t(nduv4, 'laya.wx.mini.MiniAdpter'), nduv4['getJson'] = function (_pqaeh) {
      return JSON['parse'](_pqaeh);
    }, nduv4['init'] = function (cnuj9, nuc9fj) {
      cnuj9 === void 0x0 && (cnuj9 = ![]), nuc9fj === void 0x0 && (nuc9fj = ![]);if (nduv4['_inited']) return;nduv4['window'] = window;if (nduv4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;nduv4['_inited'] = !![], nduv4['isZiYu'] = nuc9fj, nduv4['isPosMsgYu'] = cnuj9, nduv4['EnvConfig'] = {}, !nduv4['isZiYu'] && (t3z56['setNativeFileDir']('/layaairGame'), t3z56['existDir'](t3z56['fileNativeDir'], g4uvid['create'](nduv4, nduv4['onMkdirCallBack']))), nduv4['window']['focus'] = function () {}, fl9y87['getUrlPath'] = function () {}, nduv4['window']['logtime'] = function (p0eabh) {}, nduv4['window']['alertTimeLog'] = function (iu4vgd) {}, nduv4['window']['resetShareInfo'] = function () {}, nduv4['window']['CanvasRenderingContext2D'] = function () {}, nduv4['window']['CanvasRenderingContext2D']['prototype'] = nduv4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nduv4['window']['document']['body']['appendChild'] = function () {}, nduv4['EnvConfig']['pixelRatioInt'] = 0x0, ig4xsm['getPixelRatio'] = nduv4['pixelRatio'], nduv4['_preCreateElement'] = w3k6t['createElement'], w3k6t['createElement'] = nduv4['createElement'], ig4xsm['createShaderCondition'] = nduv4['createShaderCondition'], hew0bk['parseXMLFromString'] = nduv4['parseXMLFromString'], jcf9n['_createInputElement'] = t1k3bw['_createInputElement'], nduv4['EnvConfig']['load'] = _raqh['prototype']['load'], _raqh['prototype']['load'] = a0qhep['prototype']['load'], nduv4['isZiYu'] && cnuj9 && wx['onMessage'](function (j7c9fl) {
        j7c9fl['isLoad'] && (t3z56['ziyuFileData'][j7c9fl['url']] = j7c9fl['data']);
      });
    }, nduv4['onMkdirCallBack'] = function (t2w31, qraph) {
      if (!t2w31) t3z56['filesListObj'] = JSON['parse'](qraph['data']);
    }, nduv4['pixelRatio'] = function () {
      if (!nduv4['EnvConfig']['pixelRatioInt']) try {
        var eqh0 = wx['getSystemInfoSync']();return nduv4['EnvConfig']['pixelRatioInt'] = eqh0['pixelRatio'], eqh0 = eqh0, eqh0['pixelRatio'];
      } catch (epahb) {}return nduv4['EnvConfig']['pixelRatioInt'];
    }, nduv4['createElement'] = function (ehapq) {
      if (ehapq == 'canvas') {
        var nudg;return nduv4['idx'] == 0x1 ? nduv4['isZiYu'] ? (nudg = sharedCanvas, nudg['style'] = {}) : nudg = window['canvas'] : nudg = window['wx']['createCanvas'](), nduv4['idx']++, nudg;
      } else {
        if (ehapq == 'textarea' || ehapq == 'input') return nduv4['onCreateInput'](ehapq);else {
          if (ehapq == 'div') {
            var cjnufv = nduv4['_preCreateElement'](ehapq);return cjnufv['contains'] = function (ucj9n) {
              return null;
            }, cjnufv['removeChild'] = function (u4dvi) {}, cjnufv;
          } else return nduv4['_preCreateElement'](ehapq);
        }
      }
    }, nduv4['onCreateInput'] = function (xizso) {
      var m652z = nduv4['_preCreateElement'](xizso);return m652z['focus'] = t1k3bw['wxinputFocus'], m652z['blur'] = t1k3bw['wxinputblur'], m652z['style'] = {}, m652z['value'] = 0x0, m652z['parentElement'] = {}, m652z['placeholder'] = {}, m652z['type'] = {}, m652z['setColor'] = function (eh0qp) {}, m652z['setType'] = function (dgv4n) {}, m652z['setFontFace'] = function (mgs4ix) {}, m652z['addEventListener'] = function (igud4) {}, m652z['contains'] = function (pqh_ae) {
        return null;
      }, m652z['removeChild'] = function (h_qapr) {}, m652z;
    }, nduv4['createShaderCondition'] = function (qh_eap) {
      var ebk10 = this,
          disgx4 = function () {
        var vugd4i = qh_eap;return ebk10[qh_eap['replace']('this.', '')];
      };return disgx4;
    }, nduv4['EnvConfig'] = null, nduv4['window'] = null, nduv4['_preCreateElement'] = null, nduv4['_inited'] = ![], nduv4['wxRequest'] = null, nduv4['systemInfo'] = null, nduv4['version'] = '0.0.1', nduv4['isZiYu'] = ![], nduv4['isPosMsgYu'] = ![], nduv4['parseXMLFromString'] = function (web1k) {
      var jnuvf, c9fnl;web1k = web1k['replace'](/>\s+</g, '><');try {
        jnuvf = new window['Parser']['DOMParser']()['parseFromString'](web1k, 'text/xml');
      } catch (smiz) {
        throw '需要引入xml解析库文件';
      }return jnuvf;
    }, nduv4['idx'] = 0x1, nduv4;
  }(),
      wheb0k = function () {
    function xsmi() {}w6213t(xsmi, 'laya.wx.mini.MiniImage');var c8 = xsmi['prototype'];return c8['_loadImage'] = function (cdvju) {
      var aq_eph = this,
          t5321 = ![];cdvju['indexOf']('layaNativeDir/') == -0x1 && (t5321 = !![], cdvju = ugnv['formatURL'](cdvju));if (!t3z56['getFileInfo'](cdvju)) {
        if (cdvju['indexOf']('http://') != -0x1 || cdvju['indexOf']('https://') != -0x1) t3z56['downImg'](cdvju, new g4uvid(xsmi, xsmi['onDownImgCallBack'], [cdvju, aq_eph]), cdvju);else xsmi['onCreateImage'](cdvju, aq_eph, !![]);
      } else xsmi['onCreateImage'](cdvju, aq_eph, !t5321);
    }, xsmi['onDownImgCallBack'] = function (jfc97, t526, mso5z2) {
      if (!mso5z2) xsmi['onCreateImage'](jfc97, t526);else t526['onError'](null);
    }, xsmi['onCreateImage'] = function (fjcunv, xzmi, gnuvdj) {
      gnuvdj === void 0x0 && (gnuvdj = ![]);var miosxz;if (!gnuvdj) {
        var nf9u = t3z56['getFileInfo'](fjcunv),
            xzims = nf9u['md5'];miosxz = t3z56['getFileNativePath'](xzims);
      } else miosxz = fjcunv;if (xzmi['imgCache'] == null) xzmi['imgCache'] = {};var aqh;function bh0k() {
        aqh['onload'] = null, aqh['onerror'] = null, delete xzmi['imgCache'][fjcunv];
      };var cfl9nj = function () {
        bh0k(), xzmi['onLoaded'](aqh);
      },
          wkbeh0 = function () {
        bh0k(), xzmi['event']('error', 'Load image failed');
      };xzmi['_type'] == 'nativeimage' ? (aqh = new w3k6t['window']['Image'](), aqh['crossOrigin'] = '', aqh['onload'] = cfl9nj, aqh['onerror'] = wkbeh0, aqh['src'] = miosxz, xzmi['imgCache'][fjcunv] = aqh) : new mzo2s5['create'](miosxz, { 'onload': cfl9nj, 'onerror': wkbeh0, 'onCreate': function (iszxo) {
          aqh = iszxo, xzmi['imgCache'][fjcunv] = iszxo;
        } });
    }, xsmi;
  }(),
      t1k3bw = function () {
    function mz526() {}return w6213t(mz526, 'laya.wx.mini.MiniInput'), mz526['_createInputElement'] = function () {
      jcf9n['_initInput'](jcf9n['area'] = w3k6t['createElement']('textarea')), jcf9n['_initInput'](jcf9n['input'] = w3k6t['createElement']('input')), jcf9n['inputContainer'] = w3k6t['createElement']('div'), jcf9n['inputContainer']['style']['position'] = 'absolute', jcf9n['inputContainer']['style']['zIndex'] = 0x186a0, w3k6t['container']['appendChild'](jcf9n['inputContainer']), jcf9n['inputContainer']['setPos'] = function (jdvuc, aqhp0) {
        jcf9n['inputContainer']['style']['left'] = jdvuc + 'px', jcf9n['inputContainer']['style']['top'] = aqhp0 + 'px';
      }, fl9y87['stage']['on']('resize', null, mz526['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (arqhp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w103bk['_soundClass'] = udng4v, w103bk['_musicClass'] = udng4v;
    }, mz526['_onStageResize'] = function () {
      var kh0peb = fl9y87['stage']['_canvasTransform']['identity']();kh0peb['scale'](w3k6t['width'] / w1ebk0['canvas']['width'] / ig4xsm['getPixelRatio'](), w3k6t['height'] / w1ebk0['canvas']['height'] / ig4xsm['getPixelRatio']());
    }, mz526['wxinputFocus'] = function (eaphq0) {
      var funvcj = jcf9n['inputElement']['target'];if (funvcj && !funvcj['editable']) return;ep_qha['window']['wx']['offKeyboardConfirm'](), ep_qha['window']['wx']['offKeyboardInput'](), ep_qha['window']['wx']['showKeyboard']({ 'defaultValue': funvcj['text'], 'maxLength': funvcj['maxChars'], 'multiple': funvcj['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hp0ab) {}, 'fail': function (_ehqa) {} }), ep_qha['window']['wx']['onKeyboardConfirm'](function (wb103k) {
        var b1wk03 = wb103k ? wb103k['value'] : '';funvcj['text'] = b1wk03, funvcj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ep_qha['window']['wx']['onKeyboardInput'](function (pheaq0) {
        var l89$7y = pheaq0 ? pheaq0['value'] : '';if (!funvcj['multiline']) {
          if (l89$7y['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }funvcj['text'] = l89$7y, funvcj['event']('input');
      });
    }, mz526['inputEnter'] = function () {
      jcf9n['inputElement']['target']['focus'] = ![];
    }, mz526['wxinputblur'] = function () {
      mz526['hideKeyboard']();
    }, mz526['hideKeyboard'] = function () {
      ep_qha['window']['wx']['offKeyboardConfirm'](), ep_qha['window']['wx']['offKeyboardInput'](), ep_qha['window']['wx']['hideKeyboard']({ 'success': function (ktb3w1) {
          console['log']('隐藏键盘');
        }, 'fail': function (ephb0) {
          console['log']('隐藏键盘出错:' + (ephb0 ? ephb0['errMsg'] : ''));
        } });
    }, mz526;
  }(),
      a0qhep = function () {
    function digvu4() {}w6213t(digvu4, 'laya.wx.mini.MiniLoader');var uvgdi4 = digvu4['prototype'];return uvgdi4['load'] = function (mxizos, jvfunc, dx4ivg, _qahep, _hqpea) {
      dx4ivg === void 0x0 && (dx4ivg = !![]), _hqpea === void 0x0 && (_hqpea = ![]);var hp0qa = this;hp0qa['_url'] = mxizos;if (mxizos['indexOf']('data:image') === 0x0) hp0qa['_type'] = jvfunc = 'image';else hp0qa['_type'] = jvfunc || (jvfunc = hp0qa['getTypeFromUrl'](mxizos));hp0qa['_cache'] = dx4ivg, hp0qa['_data'] = null;var uvi4d = 'ascii';if (mxizos['indexOf']('.fnt') != -0x1) uvi4d = 'utf8';else jvfunc == 'arraybuffer' && (uvi4d = '');;var z5t62o = hew0bk['getFileExtension'](mxizos);if (digvu4['_fileTypeArr']['indexOf'](z5t62o) != -0x1) ep_qha['EnvConfig']['load']['call'](this, mxizos, jvfunc, dx4ivg, _qahep, _hqpea);else {
        if (!t3z56['getFileInfo'](mxizos)) {
          if (mxizos['indexOf']('layaNativeDir/') != -0x1) {
            if (ep_qha['isZiYu']) {
              var imosz = t3z56['ziyuFileData'][mxizos];hp0qa['onLoaded'](imosz);return;
            } else {
              cosnole['log']('read read'), t3z56['read'](mxizos, uvi4d, new g4uvid(digvu4, digvu4['onReadNativeCallBack'], [uvi4d, mxizos, jvfunc, dx4ivg, _qahep, _hqpea, hp0qa]));return;
            }
          }if (ugnv['rootPath'] == '') var t3b1kw = mxizos;else t3b1kw = mxizos['split'](ugnv['rootPath'])[0x0];mxizos['indexOf']('http://') != -0x1 || mxizos['indexOf']('https://') != -0x1 ? ep_qha['EnvConfig']['load']['call'](hp0qa, mxizos, jvfunc, dx4ivg, _qahep, _hqpea) : t3z56['readFile'](t3b1kw, uvi4d, new g4uvid(digvu4, digvu4['onReadNativeCallBack'], [uvi4d, mxizos, jvfunc, dx4ivg, _qahep, _hqpea, hp0qa]), mxizos);
        } else ep_qha['EnvConfig']['load']['call'](this, mxizos, jvfunc, dx4ivg, _qahep, _hqpea);
      }
    }, uvgdi4['resMgrLoad'] = function (c79fl8, s5zxo, ivgud, qpa_rh, k163tw, vun4dg, sozixm) {
      ivgud === void 0x0 && (ivgud = 0x0), qpa_rh === void 0x0 && (qpa_rh = ![]), k163tw === void 0x0 && (k163tw = ![]), vun4dg === void 0x0 && (vun4dg = 0x0), sozixm === void 0x0 && (sozixm = 0x3), c79fl8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', c79fl8), ep_qha['EnvConfig']['resMgrLoad'](c79fl8, (ap0eb, m2z5os, nvjc) => {
        digvu4['prototype']['resMgrLoadCallBack'](ap0eb, m2z5os, nvjc, s5zxo);
      }, ivgud, qpa_rh, k163tw, vun4dg, sozixm);
    }, uvgdi4['resMgrLoadCallBack'] = function (k0wbhe, dgn, cj9nfu, s4gx) {
      console['log']('buff:::', k0wbhe, cj9nfu, t3z56['fileNativeDir'] + '///' + t3z56['fileListName']), s4gx(k0wbhe, dgn, cj9nfu);
    }, uvgdi4['clearRes'] = function (tw1b, uv4dgi) {
      uv4dgi === void 0x0 && (uv4dgi = ![]);var d4is = this;d4is['clearRes'](tw1b, uv4dgi);var szxmi = t3z56['getFileInfo'](tw1b);if (szxmi && (tw1b['indexOf']('http://') != -0x1 || tw1b['indexOf']('https://') != -0x1)) {
        var msozx = szxmi['md5'],
            szmxio = t3z56['getFileNativePath'](msozx);t3z56['remove'](szmxio);
      }
    }, digvu4['onReadNativeCallBack'] = function (cfvnj, ly$, mioz, eq0a, ljcfn9, tkw3, w63t21, zios, bhkp0e) {
      eq0a === void 0x0 && (eq0a = !![]), tkw3 === void 0x0 && (tkw3 = ![]), zios === void 0x0 && (zios = 0x0);if (!zios) {
        var f79c8;if (mioz == 'json' || mioz == 'atlas') f79c8 = ep_qha['getJson'](bhkp0e['data']);else mioz == 'xml' ? f79c8 = hew0bk['parseXMLFromString'](bhkp0e['data']) : f79c8 = bhkp0e['data'];w63t21['onLoaded'](f79c8), !ep_qha['isZiYu'] && ep_qha['isPosMsgYu'] && mioz != 'arraybuffer' && wx['postMessage']({ 'url': ly$, 'data': f79c8, 'isLoad': !![] });
      } else zios == 0x1 && ep_qha['EnvConfig']['load']['call'](w63t21, ly$, mioz, eq0a, ljcfn9, tkw3);
    }, n9ucj(digvu4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), digvu4;
  }(),
      t3z56 = function (p0bhea) {
    function y8lf97() {
      y8lf97['__super']['call'](this);;
    }return w6213t(y8lf97, 'laya.wx.mini.MiniFileMgr', p0bhea), y8lf97['isLoadFile'] = function (w0hbe) {
      return y8lf97['_fileTypeArr']['indexOf'](w0hbe) != -0x1 ? !![] : ![];
    }, y8lf97['getFileInfo'] = function (dsi4x) {
      var a_ep = dsi4x['split']('?')[0x0],
          gvidu = y8lf97['filesListObj'][a_ep];if (gvidu == null) return null;else return gvidu;return null;
    }, y8lf97['onFileUpdate'] = function (we0kb, m52oz6) {
      var c98lf = we0kb['split']('/'),
          z5omxs = c98lf[c98lf['length'] - 0x1],
          s4xgd = y8lf97['getFileInfo'](m52oz6);if (s4xgd == null) y8lf97['onSaveFile'](m52oz6, z5omxs);else {
        if (s4xgd['readyUrl'] != m52oz6) y8lf97['remove'](z5omxs, m52oz6);
      }
    }, y8lf97['exits'] = function (pbek, d4vgi) {
      var xisgd = y8lf97['getFileNativePath'](pbek);y8lf97['fs']['getFileInfo']({ 'filePath': xisgd, 'success': function (fy79l8) {
          d4vgi != null && d4vgi['runWith']([0x0, fy79l8]);
        }, 'fail': function (cvudnj) {
          d4vgi != null && d4vgi['runWith']([0x1, cvudnj]);
        } });
    }, y8lf97['read'] = function (xgi4ms, w1k6, bkw, un4dvg) {
      w1k6 === void 0x0 && (w1k6 = 'ascill'), un4dvg === void 0x0 && (un4dvg = '');var xdgvi;un4dvg != '' ? xdgvi = y8lf97['getFileNativePath'](xgi4ms) : xdgvi = xgi4ms, y8lf97['fs']['readFile']({ 'filePath': xdgvi, 'encoding': w1k6, 'success': function (gujnd) {
          bkw != null && bkw['runWith']([0x0, gujnd]);
        }, 'fail': function (ixd) {
          if (ixd && un4dvg != '') y8lf97['down'](un4dvg, w1k6, bkw, un4dvg);else bkw != null && bkw['runWith']([0x1]);
        } });
    }, y8lf97['readNativeFile'] = function (idu4, kw31) {
      y8lf97['fs']['readFile']({ 'filePath': idu4, 'encoding': '', 'success': function (pa_e) {
          kw31 != null && kw31['runWith']([0x0]);
        }, 'fail': function (j9ufn) {
          kw31 != null && kw31['runWith']([0x1]);
        } });
    }, y8lf97['down'] = function (h_eqap, w231t6, soix, viug4) {
      w231t6 === void 0x0 && (w231t6 = 'ascill'), viug4 === void 0x0 && (viug4 = '');var m5soz2 = y8lf97['getFileNativePath'](viug4),
          hebw0 = y8lf97['wxdown']({ 'url': h_eqap, 'filePath': m5soz2, 'success': function (ehkbp) {
          if (ehkbp['statusCode'] === 0xc8) y8lf97['readFile'](ehkbp['filePath'], w231t6, soix, viug4);
        }, 'fail': function (cvnj) {
          soix != null && soix['runWith']([0x1, cvnj]);
        } });hebw0['onProgressUpdate'](function (ebwhk) {
        soix != null && soix['runWith']([0x2, ebwhk['progress']]);
      });
    }, y8lf97['readFile'] = function (c9fjnl, njdcv, jvundc, kwbt) {
      njdcv === void 0x0 && (njdcv = 'ascill'), kwbt === void 0x0 && (kwbt = ''), y8lf97['fs']['readFile']({ 'filePath': c9fjnl, 'encoding': njdcv, 'success': function (jlc79f) {
          if (c9fjnl['indexOf']('http://') != -0x1 || c9fjnl['indexOf']('https://') != -0x1) y8lf97['onFileUpdate'](c9fjnl, kwbt);jvundc != null && jvundc['runWith']([0x0, jlc79f]);
        }, 'fail': function (khbw) {
          if (khbw) jvundc != null && jvundc['runWith']([0x1, khbw]);
        } });
    }, y8lf97['downImg'] = function (u4vn, ahq_, n9cl) {
      n9cl === void 0x0 && (n9cl = '');var bekw1 = y8lf97['wxdown']({ 'url': u4vn, 'success': function (jnfu9) {
          jnfu9['statusCode'] === 0xc8 && y8lf97['copyFile'](jnfu9['tempFilePath'], n9cl, ahq_);
        }, 'fail': function (vdi) {
          ahq_ != null && ahq_['runWith']([0x1, vdi]);
        } });
    }, y8lf97['copyFile'] = function (o25z, clj97f, s52zm) {
      var dv4gi = o25z['split']('/'),
          sim4ox = dv4gi[dv4gi['length'] - 0x1],
          c97fjl = clj97f['split']('?')[0x0],
          o5mzxs = y8lf97['getFileInfo'](clj97f),
          $ly78 = y8lf97['getFileNativePath'](sim4ox);y8lf97['fs']['copyFile']({ 'srcPath': o25z, 'destPath': $ly78, 'success': function (y8f) {
          if (!o5mzxs) y8lf97['onSaveFile'](clj97f, sim4ox), s52zm != null && s52zm['runWith']([0x0]);else {
            if (o5mzxs['readyUrl'] != clj97f) y8lf97['remove'](sim4ox, clj97f, s52zm);
          }
        }, 'fail': function (c7f8l) {
          s52zm != null && s52zm['runWith']([0x1, c7f8l]);
        } });
    }, y8lf97['getFileNativePath'] = function (pheb) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pheb;
    }, y8lf97['remove'] = function (cfnjl, xg4vd, nujfc) {
      xg4vd === void 0x0 && (xg4vd = '');var e_aqp = y8lf97['getFileInfo'](xg4vd),
          l9f8c7 = y8lf97['getFileNativePath'](e_aqp['md5']);fl9y87['loader']['clearRes'](e_aqp['readyUrl']), y8lf97['fs']['unlink']({ 'filePath': l9f8c7, 'success': function (bw13kt) {
          if (xg4vd != '') y8lf97['onSaveFile'](xg4vd, cfnjl);nujfc != null && nujfc['runWith']([0x0]);
        }, 'fail': function (eap0q) {} });
    }, y8lf97['onSaveFile'] = function (izxos, giv4) {
      var j7l9fc = izxos['split']('?')[0x0];y8lf97['filesListObj'][j7l9fc] = { 'md5': giv4, 'readyUrl': izxos }, y8lf97['fs']['writeFile']({ 'filePath': y8lf97['fileNativeDir'] + '/' + y8lf97['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](y8lf97['filesListObj']), 'success': function (t6w1k) {
          console['log']('写入测试测试成功：', t6w1k);
        }, 'fail': function (ncdv) {
          console['log']('写入测试测试失败：', ncdv);
        } });
    }, y8lf97['existDir'] = function (ixmg4s, fv) {
      y8lf97['fs']['mkdir']({ 'dirPath': ixmg4s, 'success': function (moixsz) {
          fv != null && fv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jc9nfu) {
          if (jc9nfu['errMsg']['indexOf']('file already exists') != -0x1) y8lf97['readSync'](y8lf97['fileListName'], 'utf8', fv);else fv != null && fv['runWith']([0x1, jc9nfu]);
        } });
    }, y8lf97['readSync'] = function (sg4ixm, dgxvi, gdu4n, raqh_) {
      dgxvi === void 0x0 && (dgxvi = 'ascill'), raqh_ === void 0x0 && (raqh_ = '');var fu9cn = y8lf97['getFileNativePath'](sg4ixm),
          i4mxsg;try {
        i4mxsg = y8lf97['fs']['readFileSync'](fu9cn), gdu4n != null && gdu4n['runWith']([0x0, { 'data': i4mxsg }]);
      } catch (o4) {
        gdu4n != null && gdu4n['runWith']([0x1]);
      }
    }, y8lf97['readCache'] = function () {}, y8lf97['writeCache'] = function (ew0kbh) {
      var ozmsxi = readyUrl['split']('?')[0x0];y8lf97['filesListObj'][ozmsxi] = { 'md5': md5Name, 'readyUrl': readyUrl }, y8lf97['fs']['writeFile']({ 'filePath': y8lf97['fileNativeDir'] + '/' + y8lf97['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](y8lf97['filesListObj']), 'success': function (vnud4) {}, 'fail': function (g4u) {} });
    }, y8lf97['setNativeFileDir'] = function (pqh_e) {
      y8lf97['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pqh_e;
    }, y8lf97['filesListObj'] = {}, y8lf97['fileNativeDir'] = null, y8lf97['fileListName'] = 'layaairfiles.txt', y8lf97['ziyuFileData'] = {}, n9ucj(y8lf97, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), y8lf97;
  }(e0b1k),
      udng4v = function (bphke0) {
    function gxs4di() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], gxs4di['__super']['call'](this), this['_sound'] = gxs4di['_createSound']();
    }w6213t(gxs4di, 'laya.wx.mini.MiniSound', bphke0);var _hqp = gxs4di['prototype'];return _hqp['load'] = function (n4gv) {
      var ehw0b = this;n4gv = ugnv['formatURL'](n4gv), this['url'] = n4gv;if (gxs4di['_audioCache'][n4gv]) {
        this['event']('complete');return;
      }function gv4iud() {
        if (gxs4di['_null'] != undefined) ehw0b['_sound']['onCanplay'](gxs4di['_null']), ehw0b['_sound']['onError'](gxs4di['_null']);else try {
          ehw0b['_sound']['onCanplay'](null), ehw0b['_sound']['onError'](null), gxs4di['_null'] = null;
        } catch (udgi4v) {
          console['warn']('[wxmini] _clearSound:' + udgi4v), ehw0b['_sound']['onCanplay'](i4mgs), ehw0b['_sound']['onError'](i4mgs), gxs4di['_null'] = i4mgs;
        }
      }function m2o5() {
        gv4iud(), j9nfcu['loaded'] = !![], j9nfcu['event']('complete'), gxs4di['_audioCache'][j9nfcu['url']] = j9nfcu;
      }function ugdjnv(i4msx) {
        console['error']('errCode=' + i4msx['errCode'] + '  errMsg=' + i4msx['errMsg']), gv4iud(), j9nfcu['event']('error');
      }function i4mgs() {}this['_sound']['onCanplay'](m2o5), this['_sound']['onError'](ugdjnv), this['_sound']['src'] = n4gv;var j9nfcu = this;
    }, _hqp['play'] = function (z25osm, h0aepq) {
      z25osm === void 0x0 && (z25osm = 0x0), h0aepq === void 0x0 && (h0aepq = 0x0);var m4oxs;if (this['url'] == w103bk['_tMusic']) {
        if (!gxs4di['_musicAudio']) gxs4di['_musicAudio'] = gxs4di['_createSound']();m4oxs = gxs4di['_musicAudio'];
      } else m4oxs = gxs4di['_createSound']();m4oxs['src'] = this['url'];var jvgdu = new j9ncuf(m4oxs);return jvgdu['url'] = this['url'], jvgdu['loops'] = h0aepq, jvgdu['startTime'] = z25osm, jvgdu['play'](), w103bk['addChannel'](jvgdu), jvgdu;
    }, _hqp['dispose'] = function () {
      var nflcj = gxs4di['_audioCache'][this['url']];nflcj && (nflcj['src'] = '', delete gxs4di['_audioCache'][this['url']]);
    }, a0ehqp(0x0, _hqp, 'duration', function () {
      return this['_sound']['duration'];
    }), gxs4di['_createSound'] = function () {
      return gxs4di['_id']++, ep_qha['window']['wx']['createInnerAudioContext']();
    }, gxs4di['_musicAudio'] = null, gxs4di['_id'] = 0x0, gxs4di['_audioCache'] = {}, gxs4di['_null'] = undefined, gxs4di;
  }(e0b1k),
      j9ncuf = function (qae_) {
    function z25s(pe0bh) {
      this['_audio'] = null, this['_onEnd'] = null, z25s['__super']['call'](this), this['_audio'] = pe0bh, this['_onEnd'] = hew0bk['bind'](this['__onEnd'], this), pe0bh['onEnded'](this['_onEnd']);
    }w6213t(z25s, 'laya.wx.mini.MiniSoundChannel', qae_);var web0kh = z25s['prototype'];return web0kh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fl9y87['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, web0kh['__onNull'] = function () {}, web0kh['play'] = function () {
      this['isStopped'] = ![], w103bk['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, web0kh['stop'] = function () {
      this['isStopped'] = !![], w103bk['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (z25s['_null'] != undefined) this['_audio']['onEnded'](z25s['_null']);else try {
        this['_audio']['onEnded'](null), z25s['_null'] = null;
      } catch (smgix) {
        console['warn']('[wxmini] stop:' + smgix), this['_audio']['onEnded'](hew0bk['bind'](this['__onNull'], this)), z25s['_null'] = hew0bk['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, web0kh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, web0kh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w103bk['addChannel'](this), this['_audio']['play']();
    }, a0ehqp(0x0, web0kh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), a0ehqp(0x0, web0kh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), a0ehqp(0x0, web0kh, 'volume', function () {
      return 0x1;
    }, function (ms) {}), z25s['_null'] = undefined, z25s;
  }(sgx);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var h0pbae in Laya) {
    var n9ufj = Laya[h0pbae];n9ufj && n9ufj['__isclass'] && (exports[h0pbae] = n9ufj);
  }
});