var A = wx.$N;
(function (window, document, ozy3e4) {
  var ba6q$ = ozy3e4['un'],
      nl3e0j = ozy3e4['uns'],
      lz3ye = ozy3e4['static'],
      mnj8u_ = ozy3e4['class'],
      yo34zr = ozy3e4['getset'],
      g17xcs = ozy3e4['__newvec'],
      _nhu = laya['utils']['Browser'],
      zyo34r = laya['events']['Event'],
      ry43oz = laya['events']['EventDispatcher'],
      olzy3e = laya['resource']['HTMLImage'],
      k1cvx = laya['utils']['Handler'],
      mej0ln = laya['display']['Input'],
      hd58f = laya['net']['Loader'],
      zry43 = laya['maths']['Matrix'],
      b$6wq = laya['renders']['Render'],
      j_u8n = laya['utils']['RunDriver'],
      y4rb9 = laya['media']['Sound'],
      v2psk = laya['media']['SoundChannel'],
      b9r$4 = laya['media']['SoundManager'],
      j3ol0e = laya['display']['Stage'],
      o03le = laya['net']['URL'],
      ix2vk = laya['utils']['Utils'],
      isv2k = function () {
    function ip2svk() {}return mnj8u_(ip2svk, 'laya.wx.mini.MiniAdpter'), ip2svk['getJson'] = function (nmjl0e) {
      return JSON['parse'](nmjl0e);
    }, ip2svk['init'] = function (uhnm8, cv1s) {
      uhnm8 === void 0x0 && (uhnm8 = ![]), cv1s === void 0x0 && (cv1s = ![]);if (ip2svk['_inited']) return;ip2svk['window'] = window;if (ip2svk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ip2svk['_inited'] = !![], ip2svk['isZiYu'] = cv1s, ip2svk['isPosMsgYu'] = uhnm8, ip2svk['EnvConfig'] = {}, !ip2svk['isZiYu'] && (h75ft['setNativeFileDir']('/layaairGame'), h75ft['existDir'](h75ft['fileNativeDir'], k1cvx['create'](ip2svk, ip2svk['onMkdirCallBack']))), ip2svk['window']['focus'] = function () {}, ozy3e4['getUrlPath'] = function () {}, ip2svk['window']['logtime'] = function (kvix2) {}, ip2svk['window']['alertTimeLog'] = function (ry9bq4) {}, ip2svk['window']['resetShareInfo'] = function () {}, ip2svk['window']['CanvasRenderingContext2D'] = function () {}, ip2svk['window']['CanvasRenderingContext2D']['prototype'] = ip2svk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ip2svk['window']['document']['body']['appendChild'] = function () {}, ip2svk['EnvConfig']['pixelRatioInt'] = 0x0, j_u8n['getPixelRatio'] = ip2svk['pixelRatio'], ip2svk['_preCreateElement'] = _nhu['createElement'], _nhu['createElement'] = ip2svk['createElement'], j_u8n['createShaderCondition'] = ip2svk['createShaderCondition'], ix2vk['parseXMLFromString'] = ip2svk['parseXMLFromString'], mej0ln['_createInputElement'] = s1c['_createInputElement'], ip2svk['EnvConfig']['load'] = hd58f['prototype']['load'], hd58f['prototype']['load'] = ip2kv['prototype']['load'], ip2svk['isZiYu'] && uhnm8 && wx['onMessage'](function (xvcs1g) {
        xvcs1g['isLoad'] && (h75ft['ziyuFileData'][xvcs1g['url']] = xvcs1g['data']);
      });
    }, ip2svk['onMkdirCallBack'] = function (zr3o4y, m0uln) {
      if (!zr3o4y) h75ft['filesListObj'] = JSON['parse'](m0uln['data']);
    }, ip2svk['pixelRatio'] = function () {
      if (!ip2svk['EnvConfig']['pixelRatioInt']) try {
        var un0m_j = wx['getSystemInfoSync']();return ip2svk['EnvConfig']['pixelRatioInt'] = un0m_j['pixelRatio'], un0m_j = un0m_j, un0m_j['pixelRatio'];
      } catch (fdht7) {}return ip2svk['EnvConfig']['pixelRatioInt'];
    }, ip2svk['createElement'] = function (kvicxs) {
      if (kvicxs == 'canvas') {
        var bw6q;return ip2svk['idx'] == 0x1 ? ip2svk['isZiYu'] ? (bw6q = sharedCanvas, bw6q['style'] = {}) : bw6q = window['canvas'] : bw6q = window['wx']['createCanvas'](), ip2svk['idx']++, bw6q;
      } else {
        if (kvicxs == 'textarea' || kvicxs == 'input') return ip2svk['onCreateInput'](kvicxs);else {
          if (kvicxs == 'div') {
            var ln0me = ip2svk['_preCreateElement'](kvicxs);return ln0me['contains'] = function (rw9) {
              return null;
            }, ln0me['removeChild'] = function (z30eo) {}, ln0me;
          } else return ip2svk['_preCreateElement'](kvicxs);
        }
      }
    }, ip2svk['onCreateInput'] = function ($94qr) {
      var gd571 = ip2svk['_preCreateElement']($94qr);return gd571['focus'] = s1c['wxinputFocus'], gd571['blur'] = s1c['wxinputblur'], gd571['style'] = {}, gd571['value'] = 0x0, gd571['parentElement'] = {}, gd571['placeholder'] = {}, gd571['type'] = {}, gd571['setColor'] = function (yo9r4) {}, gd571['setType'] = function (xicvsk) {}, gd571['setFontFace'] = function (z4r) {}, gd571['addEventListener'] = function (f8mh_) {}, gd571['contains'] = function (n0m_ju) {
        return null;
      }, gd571['removeChild'] = function (z4yo3e) {}, gd571;
    }, ip2svk['createShaderCondition'] = function (ivpk2) {
      var m_ujn8 = this,
          zo4 = function () {
        var qb6$a = ivpk2;return m_ujn8[ivpk2['replace']('this.', '')];
      };return zo4;
    }, ip2svk['EnvConfig'] = null, ip2svk['window'] = null, ip2svk['_preCreateElement'] = null, ip2svk['_inited'] = ![], ip2svk['wxRequest'] = null, ip2svk['systemInfo'] = null, ip2svk['version'] = '0.0.1', ip2svk['isZiYu'] = ![], ip2svk['isPosMsgYu'] = ![], ip2svk['parseXMLFromString'] = function (pivs) {
      var b6w9q, u_0nmj;pivs = pivs['replace'](/>\s+</g, '><');try {
        b6w9q = new window['Parser']['DOMParser']()['parseFromString'](pivs, 'text/xml');
      } catch (rqw9$b) {
        throw '需要引入xml解析库文件';
      }return b6w9q;
    }, ip2svk['idx'] = 0x1, ip2svk;
  }(),
      b6qwa$ = function () {
    function pisvk2() {}mnj8u_(pisvk2, 'laya.wx.mini.MiniImage');var df57g = pisvk2['prototype'];return df57g['_loadImage'] = function (ju_m8n) {
      var ba6$w = this,
          mfu_8h = ![];ju_m8n['indexOf']('layaNativeDir/') == -0x1 && (mfu_8h = !![], ju_m8n = o03le['formatURL'](ju_m8n));if (!h75ft['getFileInfo'](ju_m8n)) {
        if (ju_m8n['indexOf']('http://') != -0x1 || ju_m8n['indexOf']('https://') != -0x1) h75ft['downImg'](ju_m8n, new k1cvx(pisvk2, pisvk2['onDownImgCallBack'], [ju_m8n, ba6$w]), ju_m8n);else pisvk2['onCreateImage'](ju_m8n, ba6$w, !![]);
      } else pisvk2['onCreateImage'](ju_m8n, ba6$w, !mfu_8h);
    }, pisvk2['onDownImgCallBack'] = function (vpk, dh8f5t, _n0m) {
      if (!_n0m) pisvk2['onCreateImage'](vpk, dh8f5t);else dh8f5t['onError'](null);
    }, pisvk2['onCreateImage'] = function (y94qr, j3lo0e, y9zr4q) {
      y9zr4q === void 0x0 && (y9zr4q = ![]);var uljn;if (!y9zr4q) {
        var zeo0 = h75ft['getFileInfo'](y94qr),
            nm0j_u = zeo0['md5'];uljn = h75ft['getFileNativePath'](nm0j_u);
      } else uljn = y94qr;if (j3lo0e['imgCache'] == null) j3lo0e['imgCache'] = {};var gv1xsc;function le3oyz() {
        gv1xsc['onload'] = null, gv1xsc['onerror'] = null, delete j3lo0e['imgCache'][y94qr];
      };var wba6q$ = function () {
        le3oyz(), j3lo0e['onLoaded'](gv1xsc);
      },
          h_8u = function () {
        le3oyz(), j3lo0e['event']('error', 'Load image failed');
      };j3lo0e['_type'] == 'nativeimage' ? (gv1xsc = new _nhu['window']['Image'](), gv1xsc['crossOrigin'] = '', gv1xsc['onload'] = wba6q$, gv1xsc['onerror'] = h_8u, gv1xsc['src'] = uljn, j3lo0e['imgCache'][y94qr] = gv1xsc) : new olzy3e['create'](uljn, { 'onload': wba6q$, 'onerror': h_8u, 'onCreate': function (u8n_j) {
          gv1xsc = u8n_j, j3lo0e['imgCache'][y94qr] = u8n_j;
        } });
    }, pisvk2;
  }(),
      s1c = function () {
    function td571() {}return mnj8u_(td571, 'laya.wx.mini.MiniInput'), td571['_createInputElement'] = function () {
      mej0ln['_initInput'](mej0ln['area'] = _nhu['createElement']('textarea')), mej0ln['_initInput'](mej0ln['input'] = _nhu['createElement']('input')), mej0ln['inputContainer'] = _nhu['createElement']('div'), mej0ln['inputContainer']['style']['position'] = 'absolute', mej0ln['inputContainer']['style']['zIndex'] = 0x186a0, _nhu['container']['appendChild'](mej0ln['inputContainer']), mej0ln['inputContainer']['setPos'] = function (_ufmh, b9yr) {
        mej0ln['inputContainer']['style']['left'] = _ufmh + 'px', mej0ln['inputContainer']['style']['top'] = b9yr + 'px';
      }, ozy3e4['stage']['on']('resize', null, td571['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ksv1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), b9r$4['_soundClass'] = r$94b, b9r$4['_musicClass'] = r$94b, window['_videoClass'] = vsxik2;
    }, td571['_onStageResize'] = function () {
      var $9r4b = ozy3e4['stage']['_canvasTransform']['identity']();$9r4b['scale'](_nhu['width'] / b$6wq['canvas']['width'] / j_u8n['getPixelRatio'](), _nhu['height'] / b$6wq['canvas']['height'] / j_u8n['getPixelRatio']());
    }, td571['wxinputFocus'] = function (_8jnum) {
      var y3loez = mej0ln['inputElement']['target'];if (y3loez && !y3loez['editable']) return;isv2k['window']['wx']['offKeyboardConfirm'](), isv2k['window']['wx']['offKeyboardInput'](), isv2k['window']['wx']['showKeyboard']({ 'defaultValue': y3loez['text'], 'maxLength': y3loez['maxChars'], 'multiple': y3loez['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jnmlu) {}, 'fail': function (_0n) {} }), isv2k['window']['wx']['onKeyboardConfirm'](function (_jumn8) {
        var cixs = _jumn8 ? _jumn8['value'] : '';y3loez['text'] = cixs, y3loez['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), isv2k['window']['wx']['onKeyboardInput'](function (oj03le) {
        var s7c1x = oj03le ? oj03le['value'] : '';if (!y3loez['multiline']) {
          if (s7c1x['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y3loez['text'] = s7c1x, y3loez['event']('input');
      });
    }, td571['inputEnter'] = function () {
      mej0ln['inputElement']['target']['focus'] = ![];
    }, td571['wxinputblur'] = function () {
      td571['hideKeyboard']();
    }, td571['hideKeyboard'] = function () {
      isv2k['window']['wx']['offKeyboardConfirm'](), isv2k['window']['wx']['offKeyboardInput'](), isv2k['window']['wx']['hideKeyboard']({ 'success': function (ljo0e) {
          console['log']('隐藏键盘');
        }, 'fail': function (m0_uj) {
          console['log']('隐藏键盘出错:' + (m0_uj ? m0_uj['errMsg'] : ''));
        } });
    }, td571;
  }(),
      ip2kv = function () {
    function ejm0ln() {}mnj8u_(ejm0ln, 'laya.wx.mini.MiniLoader');var e34z = ejm0ln['prototype'];return e34z['load'] = function (ct571g, rz9yo, oyzel3, yo4, xcisv) {
      oyzel3 === void 0x0 && (oyzel3 = !![]), xcisv === void 0x0 && (xcisv = ![]);var csgv1 = this;csgv1['_url'] = ct571g;if (ct571g['indexOf']('data:image') === 0x0) csgv1['_type'] = rz9yo = 'image';else csgv1['_type'] = rz9yo || (rz9yo = csgv1['getTypeFromUrl'](ct571g));csgv1['_cache'] = oyzel3, csgv1['_data'] = null;var kc1xv = 'ascii';if (ct571g['indexOf']('.fnt') != -0x1) kc1xv = 'utf8';else rz9yo == 'arraybuffer' && (kc1xv = '');;var unm_j = ix2vk['getFileExtension'](ct571g);if (ejm0ln['_fileTypeArr']['indexOf'](unm_j) != -0x1) isv2k['EnvConfig']['load']['call'](this, ct571g, rz9yo, oyzel3, yo4, xcisv);else {
        if (!h75ft['getFileInfo'](ct571g)) {
          if (ct571g['indexOf']('layaNativeDir/') != -0x1) {
            if (isv2k['isZiYu']) {
              var z3ye4 = h75ft['ziyuFileData'][ct571g];csgv1['onLoaded'](z3ye4);return;
            } else {
              cosnole['log']('read read'), h75ft['read'](ct571g, kc1xv, new k1cvx(ejm0ln, ejm0ln['onReadNativeCallBack'], [kc1xv, ct571g, rz9yo, oyzel3, yo4, xcisv, csgv1]));return;
            }
          }if (o03le['rootPath'] == '') var d5t7 = ct571g;else d5t7 = ct571g['split'](o03le['rootPath'])[0x0];ct571g['indexOf']('http://') != -0x1 || ct571g['indexOf']('https://') != -0x1 ? isv2k['EnvConfig']['load']['call'](csgv1, ct571g, rz9yo, oyzel3, yo4, xcisv) : h75ft['readFile'](d5t7, kc1xv, new k1cvx(ejm0ln, ejm0ln['onReadNativeCallBack'], [kc1xv, ct571g, rz9yo, oyzel3, yo4, xcisv, csgv1]), ct571g);
        } else isv2k['EnvConfig']['load']['call'](this, ct571g, rz9yo, oyzel3, yo4, xcisv);
      }
    }, e34z['resMgrLoad'] = function (k1vxsc, bq9y4, w9q$b, j3n0, xg175, vxg1sc, du_f) {
      w9q$b === void 0x0 && (w9q$b = 0x0), j3n0 === void 0x0 && (j3n0 = ![]), xg175 === void 0x0 && (xg175 = ![]), vxg1sc === void 0x0 && (vxg1sc = 0x0), du_f === void 0x0 && (du_f = 0x3), k1vxsc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k1vxsc), isv2k['EnvConfig']['resMgrLoad'](k1vxsc, (rb9w$, d5fh, h5t) => {
        ejm0ln['prototype']['resMgrLoadCallBack'](rb9w$, d5fh, h5t, bq9y4);
      }, w9q$b, j3n0, xg175, vxg1sc, du_f);
    }, e34z['resMgrLoadCallBack'] = function (wbr$q9, ckvis, y49zrq, t7fdh) {
      console['log']('buff:::', wbr$q9, y49zrq, h75ft['fileNativeDir'] + '///' + h75ft['fileListName']), t7fdh(wbr$q9, ckvis, y49zrq);
    }, e34z['clearRes'] = function (cvxs1, kvcixs) {
      kvcixs === void 0x0 && (kvcixs = ![]);var b49rq = this;b49rq['clearRes'](cvxs1, kvcixs);var ct5g17 = h75ft['getFileInfo'](cvxs1);if (ct5g17 && (cvxs1['indexOf']('http://') != -0x1 || cvxs1['indexOf']('https://') != -0x1)) {
        var x7c1gs = ct5g17['md5'],
            m0ljne = h75ft['getFileNativePath'](x7c1gs);h75ft['remove'](m0ljne);
      }
    }, ejm0ln['onReadNativeCallBack'] = function (b6$qwa, jmel0n, w6b$9q, icskxv, gf, c1g75x, cg1t7, _nj8, wb9$rq) {
      icskxv === void 0x0 && (icskxv = !![]), c1g75x === void 0x0 && (c1g75x = ![]), _nj8 === void 0x0 && (_nj8 = 0x0);if (!_nj8) {
        var yo43rz;if (w6b$9q == 'json' || w6b$9q == 'atlas') yo43rz = isv2k['getJson'](wb9$rq['data']);else w6b$9q == 'xml' ? yo43rz = ix2vk['parseXMLFromString'](wb9$rq['data']) : yo43rz = wb9$rq['data'];cg1t7['onLoaded'](yo43rz), !isv2k['isZiYu'] && isv2k['isPosMsgYu'] && w6b$9q != 'arraybuffer' && wx['postMessage']({ 'url': jmel0n, 'data': yo43rz, 'isLoad': !![] });
      } else _nj8 == 0x1 && isv2k['EnvConfig']['load']['call'](cg1t7, jmel0n, w6b$9q, icskxv, gf, c1g75x);
    }, lz3ye(ejm0ln, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ejm0ln;
  }(),
      h75ft = function (viks2p) {
    function csgvx() {
      csgvx['__super']['call'](this);;
    }return mnj8u_(csgvx, 'laya.wx.mini.MiniFileMgr', viks2p), csgvx['isLoadFile'] = function (j_n0m) {
      return csgvx['_fileTypeArr']['indexOf'](j_n0m) != -0x1 ? !![] : ![];
    }, csgvx['getFileInfo'] = function (t75dh) {
      var _nu0mj = t75dh['split']('?')[0x0],
          csg1xv = csgvx['filesListObj'][_nu0mj];if (csg1xv == null) return null;else return csg1xv;return null;
    }, csgvx['onFileUpdate'] = function (r4qz9, qbr9w) {
      var dth = r4qz9['split']('/'),
          $br9q = dth[dth['length'] - 0x1],
          nl0mje = csgvx['getFileInfo'](qbr9w);if (nl0mje == null) csgvx['onSaveFile'](qbr9w, $br9q);else {
        if (nl0mje['readyUrl'] != qbr9w) csgvx['remove']($br9q, qbr9w);
      }
    }, csgvx['exits'] = function (yo3ze, scvk1x) {
      var scvxi = csgvx['getFileNativePath'](yo3ze);csgvx['fs']['getFileInfo']({ 'filePath': scvxi, 'success': function (nj0_m) {
          scvk1x != null && scvk1x['runWith']([0x0, nj0_m]);
        }, 'fail': function (w9b6$q) {
          scvk1x != null && scvk1x['runWith']([0x1, w9b6$q]);
        } });
    }, csgvx['read'] = function (tg75c1, zloy3e, skxi, vpki2s) {
      zloy3e === void 0x0 && (zloy3e = 'ascill'), vpki2s === void 0x0 && (vpki2s = '');var jem;vpki2s != '' ? jem = csgvx['getFileNativePath'](tg75c1) : jem = tg75c1, csgvx['fs']['readFile']({ 'filePath': jem, 'encoding': zloy3e, 'success': function (e3l0z) {
          skxi != null && skxi['runWith']([0x0, e3l0z]);
        }, 'fail': function (fth7) {
          if (fth7 && vpki2s != '') csgvx['down'](vpki2s, zloy3e, skxi, vpki2s);else skxi != null && skxi['runWith']([0x1]);
        } });
    }, csgvx['readNativeFile'] = function (svx1, hdf5) {
      csgvx['fs']['readFile']({ 'filePath': svx1, 'encoding': '', 'success': function (mfh8u) {
          hdf5 != null && hdf5['runWith']([0x0]);
        }, 'fail': function (zy43or) {
          hdf5 != null && hdf5['runWith']([0x1]);
        } });
    }, csgvx['down'] = function (e3ln0j, wbq6$, ft8d_, d8th5) {
      wbq6$ === void 0x0 && (wbq6$ = 'ascill'), d8th5 === void 0x0 && (d8th5 = '');var t5d71 = csgvx['getFileNativePath'](d8th5),
          umn_0 = csgvx['wxdown']({ 'url': e3ln0j, 'filePath': t5d71, 'success': function (kcxiv) {
          if (kcxiv['statusCode'] === 0xc8) csgvx['readFile'](kcxiv['filePath'], wbq6$, ft8d_, d8th5);
        }, 'fail': function (yleo) {
          ft8d_ != null && ft8d_['runWith']([0x1, yleo]);
        } });umn_0['onProgressUpdate'](function (t75fdh) {
        ft8d_ != null && ft8d_['runWith']([0x2, t75fdh['progress']]);
      });
    }, csgvx['readFile'] = function (_nu8j, ejn, piv2s, z34eo) {
      ejn === void 0x0 && (ejn = 'ascill'), z34eo === void 0x0 && (z34eo = ''), csgvx['fs']['readFile']({ 'filePath': _nu8j, 'encoding': ejn, 'success': function (rby9q) {
          if (_nu8j['indexOf']('http://') != -0x1 || _nu8j['indexOf']('https://') != -0x1) csgvx['onFileUpdate'](_nu8j, z34eo);piv2s != null && piv2s['runWith']([0x0, rby9q]);
        }, 'fail': function (b9qy4r) {
          if (b9qy4r) piv2s != null && piv2s['runWith']([0x1, b9qy4r]);
        } });
    }, csgvx['downImg'] = function (lejn03, kv1csx, ozyl3) {
      ozyl3 === void 0x0 && (ozyl3 = '');var zr4y9q = csgvx['wxdown']({ 'url': lejn03, 'success': function (_dtf8) {
          _dtf8['statusCode'] === 0xc8 && csgvx['copyFile'](_dtf8['tempFilePath'], ozyl3, kv1csx);
        }, 'fail': function (umfh8_) {
          kv1csx != null && kv1csx['runWith']([0x1, umfh8_]);
        } });
    }, csgvx['copyFile'] = function (w$b69q, m8f_, $r9qb) {
      var x17g = w$b69q['split']('/'),
          dh5tf = x17g[x17g['length'] - 0x1],
          z9yo4 = m8f_['split']('?')[0x0],
          kpiv2s = csgvx['getFileInfo'](m8f_),
          tdhf = csgvx['getFileNativePath'](dh5tf);csgvx['fs']['copyFile']({ 'srcPath': w$b69q, 'destPath': tdhf, 'success': function (t5h7f) {
          if (!kpiv2s) csgvx['onSaveFile'](m8f_, dh5tf), $r9qb != null && $r9qb['runWith']([0x0]);else {
            if (kpiv2s['readyUrl'] != m8f_) csgvx['remove'](dh5tf, m8f_, $r9qb);
          }
        }, 'fail': function (t1g57c) {
          $r9qb != null && $r9qb['runWith']([0x1, t1g57c]);
        } });
    }, csgvx['getFileNativePath'] = function (e3nl0j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + e3nl0j;
    }, csgvx['remove'] = function (k1xcv, mlnej0, df57tg) {
      mlnej0 === void 0x0 && (mlnej0 = '');var j3e0ol = csgvx['getFileInfo'](mlnej0),
          dft8h = csgvx['getFileNativePath'](j3e0ol['md5']);ozy3e4['loader']['clearRes'](j3e0ol['readyUrl']), csgvx['fs']['unlink']({ 'filePath': dft8h, 'success': function (m8h_) {
          if (mlnej0 != '') csgvx['onSaveFile'](mlnej0, k1xcv);df57tg != null && df57tg['runWith']([0x0]);
        }, 'fail': function (q9r4$b) {} });
    }, csgvx['onSaveFile'] = function (xv1sc, dt517) {
      var mnuh_8 = xv1sc['split']('?')[0x0];csgvx['filesListObj'][mnuh_8] = { 'md5': dt517, 'readyUrl': xv1sc }, csgvx['fs']['writeFile']({ 'filePath': csgvx['fileNativeDir'] + '/' + csgvx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](csgvx['filesListObj']), 'success': function (jul0m) {
          console['log']('写入测试测试成功：', jul0m);
        }, 'fail': function (bw$qr9) {
          console['log']('写入测试测试失败：', bw$qr9);
        } });
    }, csgvx['existDir'] = function (r$4b9, n3j0e) {
      csgvx['fs']['mkdir']({ 'dirPath': r$4b9, 'success': function (byr4) {
          n3j0e != null && n3j0e['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (rb4q) {
          if (rb4q['errMsg']['indexOf']('file already exists') != -0x1) csgvx['readSync'](csgvx['fileListName'], 'utf8', n3j0e);else n3j0e != null && n3j0e['runWith']([0x1, rb4q]);
        } });
    }, csgvx['readSync'] = function ($9w6qb, zr9oy, bwq$r, y9roz) {
      zr9oy === void 0x0 && (zr9oy = 'ascill'), y9roz === void 0x0 && (y9roz = '');var vsxik = csgvx['getFileNativePath']($9w6qb),
          mjne0;try {
        mjne0 = csgvx['fs']['readFileSync'](vsxik), bwq$r != null && bwq$r['runWith']([0x0, { 'data': mjne0 }]);
      } catch (l0ejn) {
        bwq$r != null && bwq$r['runWith']([0x1]);
      }
    }, csgvx['readCache'] = function () {}, csgvx['writeCache'] = function (hdtf57) {
      var hu_8mn = readyUrl['split']('?')[0x0];csgvx['filesListObj'][hu_8mn] = { 'md5': md5Name, 'readyUrl': readyUrl }, csgvx['fs']['writeFile']({ 'filePath': csgvx['fileNativeDir'] + '/' + csgvx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](csgvx['filesListObj']), 'success': function (r49yo) {}, 'fail': function (hud_f8) {} });
    }, csgvx['setNativeFileDir'] = function (tdf8h) {
      csgvx['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tdf8h;
    }, csgvx['filesListObj'] = {}, csgvx['fileNativeDir'] = null, csgvx['fileListName'] = 'layaairfiles.txt', csgvx['ziyuFileData'] = {}, lz3ye(csgvx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), csgvx;
  }(ry43oz),
      r$94b = function (enl0m) {
    function le03oz() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], le03oz['__super']['call'](this), this['_sound'] = le03oz['_createSound'](), this['_chanell'] = new $a6bw(this['_sound']);
    }mnj8u_(le03oz, 'laya.wx.mini.MiniSound', enl0m);var h58t = le03oz['prototype'];return h58t['load'] = function (kcsvx) {
      var xk2i = this;kcsvx = o03le['formatURL'](kcsvx), this['url'] = kcsvx;if (le03oz['_audioCache'][kcsvx]) {
        this['event']('complete');return;
      }function gt7d1() {
        if (le03oz['_null'] != undefined) xk2i['_sound']['onCanplay'](le03oz['_null']), xk2i['_sound']['onError'](le03oz['_null']);else try {
          xk2i['_sound']['onCanplay'](null), xk2i['_sound']['onError'](null), le03oz['_null'] = null;
        } catch (ks2vx) {
          console['warn']('[wxmini] _clearSound:' + ks2vx), xk2i['_sound']['onCanplay']($9bq4), xk2i['_sound']['onError']($9bq4), le03oz['_null'] = $9bq4;
        }
      }function fudh_() {
        c1sk['loaded'] = !![], c1sk['event']('complete'), le03oz['_audioCache'][c1sk['url']] = c1sk;
      }function gt157c(vkisx) {
        console['error']('errCode=' + vkisx['errCode'] + '  errMsg=' + vkisx['errMsg']), c1sk['event']('error');
      }function $9bq4() {}this['_sound']['onCanplay'](fudh_), this['_sound']['onError'](gt157c), this['_sound']['src'] = kcsvx;var c1sk = this;
    }, h58t['play'] = function (zy3, xskvc1) {
      zy3 === void 0x0 && (zy3 = 0x0), xskvc1 === void 0x0 && (xskvc1 = 0x0);var ro4z3, gfd5;if (this['url'] == b9r$4['_tMusic']) {
        if (!le03oz['_musicAudio']) le03oz['_musicAudio'] = this['_sound'];ro4z3 = le03oz['_musicAudio'], gfd5 = this['_chanell'];
      } else ro4z3 = this['_sound'], gfd5 = this['_chanell'];return ro4z3['src'] = this['url'], ro4z3['startTime'] = 0x0, gfd5['isStopped'] && (gfd5['url'] = this['url'], gfd5['loops'] = xskvc1, gfd5['startTime'] = zy3, gfd5['play'](), b9r$4['addChannel'](gfd5)), gfd5;
    }, h58t['dispose'] = function () {
      var g5dtf7 = le03oz['_audioCache'][this['url']];g5dtf7 && (g5dtf7['src'] = '', delete le03oz['_audioCache'][this['url']]);
    }, yo34zr(0x0, h58t, 'duration', function () {
      return this['_sound']['duration'];
    }), le03oz['_createSound'] = function () {
      le03oz['_id']++;var _umh8n = isv2k['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return _umh8n;
    }, le03oz['_musicAudio'] = null, le03oz['_id'] = 0x0, le03oz['_audioCache'] = {}, le03oz['_null'] = undefined, le03oz;
  }(ry43oz),
      $a6bw = function (mfu_h) {
    function d85h(kipv2s) {
      this['_audio'] = null, this['_onEnd'] = null, d85h['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = kipv2s, this['_onEnd'] = ix2vk['bind'](this['__onEnd'], this), kipv2s['onEnded'](this['_onEnd']);
    }mnj8u_(d85h, 'laya.wx.mini.MiniSoundChannel', mfu_h);var fgdt75 = d85h['prototype'];return fgdt75['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ozy3e4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fgdt75['__onNull'] = function () {}, fgdt75['play'] = function () {
      this['isStopped'] = ![], b9r$4['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fgdt75['stop'] = function () {
      this['isStopped'] = !![], b9r$4['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, fgdt75['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fgdt75['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], b9r$4['addChannel'](this), this['_audio']['play']();
    }, yo34zr(0x0, fgdt75, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), yo34zr(0x0, fgdt75, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), yo34zr(0x0, fgdt75, 'volume', function () {
      return 0x1;
    }, function (g5x1c7) {}), d85h['_null'] = undefined, d85h;
  }(v2psk),
      vsxik2 = function () {
    function l30zoe() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = isv2k['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }mnj8u_(l30zoe, 'laya.wx.mini.MiniVideo');var pikvs = l30zoe['prototype'];return pikvs['on'] = function (psivk, $b9qw, qbry94) {
      if (psivk == 'loadedmetadata') this['onPlayFunc'] = qbry94['bind']($b9qw), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else psivk == 'ended' && (this['onEndedFunC'] = qbry94['bind']($b9qw), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, pikvs['onTimeUpdateFunc'] = function (wa6q$b) {
      this['position'] = wa6q$b['position'], this['_duration'] = wa6q$b['duration'];
    }, pikvs['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, pikvs['onended'] = function (x1vskc, gcvx) {
      this['onEndedFunC'] = gcvx['bind'](x1vskc), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, pikvs['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, pikvs['off'] = function (b49$q, jel0mn, unmj0l) {
      if (b49$q == 'loadedmetadata') this['onPlayFunc'] = unmj0l['bind'](jel0mn), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else b49$q == 'ended' && (this['onEndedFunC'] = unmj0l['bind'](jel0mn), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, pikvs['load'] = function (uhm8_n) {
      if (!this['videoElement']) return;this['videoElement']['src'] = uhm8_n;
    }, pikvs['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, pikvs['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, pikvs['size'] = function (svxki2, ejol3) {
      if (!this['videoElement']) return;this['videoElement']['width'] = svxki2, this['videoElement']['height'] = ejol3;
    }, pikvs['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, pikvs['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, yo34zr(0x0, pikvs, 'duration', function () {
      return this['_duration'];
    }), yo34zr(0x0, pikvs, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (gsc7x) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = gsc7x;
    }), yo34zr(0x0, pikvs, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), yo34zr(0x0, pikvs, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), yo34zr(0x0, pikvs, 'ended', function () {
      return this['videoend'];
    }), yo34zr(0x0, pikvs, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (mjun8) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = mjun8;
    }), yo34zr(0x0, pikvs, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function ($6b9) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = $6b9;
    }), yo34zr(0x0, pikvs, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (f8t_) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = f8t_;
    }), yo34zr(0x0, pikvs, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), yo34zr(0x0, pikvs, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function ($wq6a) {
      if (!this['videoElement']) return;this['videoElement']['x'] = $wq6a;
    }), yo34zr(0x0, pikvs, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (yq94) {
      if (!this['videoElement']) return;this['videoElement']['y'] = yq94;
    }), yo34zr(0x0, pikvs, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), yo34zr(0x0, pikvs, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (sxik2v) {
      if (!this['videoElement']) return;this['videoElement']['src'] = sxik2v;
    }), yo34zr(0x0, pikvs, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (fdg75) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = fdg75;
    }), yo34zr(0x0, pikvs, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (fh_8dt) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = fh_8dt;
    }), l30zoe;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var xivksc in Laya) {
    var nje = Laya[xivksc];nje && nje['__isclass'] && (exports[xivksc] = nje);
  }
});