var P = wx.$y;
(function (window, document, x8on$d) {
  var ui3b7 = x8on$d['un'],
      twpz2 = x8on$d['uns'],
      j0e1v6 = x8on$d['static'],
      nyxqg = x8on$d['class'],
      t6wp2 = x8on$d['getset'],
      z6v1t = x8on$d['__newvec'],
      rmc7bl = laya['utils']['Browser'],
      $o8xdn = laya['events']['Event'],
      ynx8gq = laya['events']['EventDispatcher'],
      j10v = laya['resource']['HTMLImage'],
      v0j9h = laya['utils']['Handler'],
      _ynqx = laya['display']['Input'],
      wfzpt = laya['net']['Loader'],
      t6z1v = laya['maths']['Matrix'],
      yg_qsl = laya['renders']['Render'],
      nxg8dq = laya['utils']['RunDriver'],
      cb73m = laya['media']['Sound'],
      v19je = laya['media']['SoundChannel'],
      fp$kw2 = laya['media']['SoundManager'],
      pz26 = laya['display']['Stage'],
      p2wk$f = laya['net']['URL'],
      kfw$p2 = laya['utils']['Utils'],
      we6pz = function () {
    function vtzp6() {}return nyxqg(vtzp6, 'laya.wx.mini.MiniAdpter'), vtzp6['getJson'] = function (w$2fok) {
      return JSON['parse'](w$2fok);
    }, vtzp6['init'] = function (_smcrl, pwt62z) {
      _smcrl === void 0x0 && (_smcrl = ![]), pwt62z === void 0x0 && (pwt62z = ![]);if (vtzp6['_inited']) return;vtzp6['window'] = window;if (vtzp6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vtzp6['_inited'] = !![], vtzp6['isZiYu'] = pwt62z, vtzp6['isPosMsgYu'] = _smcrl, vtzp6['EnvConfig'] = {}, !vtzp6['isZiYu'] && (o2kdf['setNativeFileDir']('/layaairGame'), o2kdf['existDir'](o2kdf['fileNativeDir'], v0j9h['create'](vtzp6, vtzp6['onMkdirCallBack']))), vtzp6['window']['focus'] = function () {}, x8on$d['getUrlPath'] = function () {}, vtzp6['window']['logtime'] = function (q_ygxn) {}, vtzp6['window']['alertTimeLog'] = function (ia43u) {}, vtzp6['window']['resetShareInfo'] = function () {}, vtzp6['window']['CanvasRenderingContext2D'] = function () {}, vtzp6['window']['CanvasRenderingContext2D']['prototype'] = vtzp6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vtzp6['window']['document']['body']['appendChild'] = function () {}, vtzp6['EnvConfig']['pixelRatioInt'] = 0x0, nxg8dq['getPixelRatio'] = vtzp6['pixelRatio'], vtzp6['_preCreateElement'] = rmc7bl['createElement'], rmc7bl['createElement'] = vtzp6['createElement'], nxg8dq['createShaderCondition'] = vtzp6['createShaderCondition'], kfw$p2['parseXMLFromString'] = vtzp6['parseXMLFromString'], _ynqx['_createInputElement'] = uiba43['_createInputElement'], vtzp6['EnvConfig']['load'] = wfzpt['prototype']['load'], wfzpt['prototype']['load'] = e0v61z['prototype']['load'], vtzp6['isZiYu'] && _smcrl && wx['onMessage'](function (ok2wf) {
        ok2wf['isLoad'] && (o2kdf['ziyuFileData'][ok2wf['url']] = ok2wf['data']);
      });
    }, vtzp6['onMkdirCallBack'] = function (u3ba, tew6pz) {
      if (!u3ba) o2kdf['filesListObj'] = JSON['parse'](tew6pz['data']);
    }, vtzp6['pixelRatio'] = function () {
      if (!vtzp6['EnvConfig']['pixelRatioInt']) try {
        var a4bu3i = wx['getSystemInfoSync']();return vtzp6['EnvConfig']['pixelRatioInt'] = a4bu3i['pixelRatio'], a4bu3i = a4bu3i, a4bu3i['pixelRatio'];
      } catch (p6v) {}return vtzp6['EnvConfig']['pixelRatioInt'];
    }, vtzp6['createElement'] = function (d$8ko) {
      if (d$8ko == 'canvas') {
        var _qlcy;return vtzp6['idx'] == 0x1 ? vtzp6['isZiYu'] ? (_qlcy = sharedCanvas, _qlcy['style'] = {}) : _qlcy = window['canvas'] : _qlcy = window['wx']['createCanvas'](), vtzp6['idx']++, _qlcy;
      } else {
        if (d$8ko == 'textarea' || d$8ko == 'input') return vtzp6['onCreateInput'](d$8ko);else {
          if (d$8ko == 'div') {
            var t16evz = vtzp6['_preCreateElement'](d$8ko);return t16evz['contains'] = function ($ofk8) {
              return null;
            }, t16evz['removeChild'] = function (e91vj0) {}, t16evz;
          } else return vtzp6['_preCreateElement'](d$8ko);
        }
      }
    }, vtzp6['onCreateInput'] = function (lg_sy) {
      var fp2wtk = vtzp6['_preCreateElement'](lg_sy);return fp2wtk['focus'] = uiba43['wxinputFocus'], fp2wtk['blur'] = uiba43['wxinputblur'], fp2wtk['style'] = {}, fp2wtk['value'] = 0x0, fp2wtk['parentElement'] = {}, fp2wtk['placeholder'] = {}, fp2wtk['type'] = {}, fp2wtk['setColor'] = function (lr_scy) {}, fp2wtk['setType'] = function (_ysxgq) {}, fp2wtk['setFontFace'] = function ($fkwp) {}, fp2wtk['addEventListener'] = function (x8nygq) {}, fp2wtk['contains'] = function (qysg_x) {
        return null;
      }, fp2wtk['removeChild'] = function (ngy_q) {}, fp2wtk;
    }, vtzp6['createShaderCondition'] = function (do8$f) {
      var o8dxn = this,
          rm4 = function () {
        var knod = do8$f;return o8dxn[do8$f['replace']('this.', '')];
      };return rm4;
    }, vtzp6['EnvConfig'] = null, vtzp6['window'] = null, vtzp6['_preCreateElement'] = null, vtzp6['_inited'] = ![], vtzp6['wxRequest'] = null, vtzp6['systemInfo'] = null, vtzp6['version'] = '0.0.1', vtzp6['isZiYu'] = ![], vtzp6['isPosMsgYu'] = ![], vtzp6['parseXMLFromString'] = function ($d8k) {
      var t6zvep, xngyq;$d8k = $d8k['replace'](/>\s+</g, '><');try {
        t6zvep = new window['Parser']['DOMParser']()['parseFromString']($d8k, 'text/xml');
      } catch (sr_lmc) {
        throw '需要引入xml解析库文件';
      }return t6zvep;
    }, vtzp6['idx'] = 0x1, vtzp6;
  }(),
      c3rmb7 = function () {
    function zt6v1() {}nyxqg(zt6v1, 'laya.wx.mini.MiniImage');var y_lgsq = zt6v1['prototype'];return y_lgsq['_loadImage'] = function (kd8o$f) {
      var e1vt6z = this,
          w$kp2f = ![];kd8o$f['indexOf']('layaNativeDir/') == -0x1 && (w$kp2f = !![], kd8o$f = p2wk$f['formatURL'](kd8o$f));if (!o2kdf['getFileInfo'](kd8o$f)) {
        if (kd8o$f['indexOf']('http://') != -0x1 || kd8o$f['indexOf']('https://') != -0x1) o2kdf['downImg'](kd8o$f, new v0j9h(zt6v1, zt6v1['onDownImgCallBack'], [kd8o$f, e1vt6z]), kd8o$f);else zt6v1['onCreateImage'](kd8o$f, e1vt6z, !![]);
      } else zt6v1['onCreateImage'](kd8o$f, e1vt6z, !w$kp2f);
    }, zt6v1['onDownImgCallBack'] = function (dxno$, z10e, mblr7) {
      if (!mblr7) zt6v1['onCreateImage'](dxno$, z10e);else z10e['onError'](null);
    }, zt6v1['onCreateImage'] = function (t6pzwe, k$ow2f, wfkp2t) {
      wfkp2t === void 0x0 && (wfkp2t = ![]);var $2kof;if (!wfkp2t) {
        var wtzpf = o2kdf['getFileInfo'](t6pzwe),
            ib3u47 = wtzpf['md5'];$2kof = o2kdf['getFileNativePath'](ib3u47);
      } else $2kof = t6pzwe;if (k$ow2f['imgCache'] == null) k$ow2f['imgCache'] = {};var ynx8g;function i4bu3() {
        ynx8g['onload'] = null, ynx8g['onerror'] = null, delete k$ow2f['imgCache'][t6pzwe];
      };var mcs7r = function () {
        i4bu3(), k$ow2f['onLoaded'](ynx8g);
      },
          cs7mlr = function () {
        i4bu3(), k$ow2f['event']('error', 'Load image failed');
      };k$ow2f['_type'] == 'nativeimage' ? (ynx8g = new rmc7bl['window']['Image'](), ynx8g['crossOrigin'] = '', ynx8g['onload'] = mcs7r, ynx8g['onerror'] = cs7mlr, ynx8g['src'] = $2kof, k$ow2f['imgCache'][t6pzwe] = ynx8g) : new j10v['create']($2kof, { 'onload': mcs7r, 'onerror': cs7mlr, 'onCreate': function (n8oxd) {
          ynx8g = n8oxd, k$ow2f['imgCache'][t6pzwe] = n8oxd;
        } });
    }, zt6v1;
  }(),
      uiba43 = function () {
    function $kon8() {}return nyxqg($kon8, 'laya.wx.mini.MiniInput'), $kon8['_createInputElement'] = function () {
      _ynqx['_initInput'](_ynqx['area'] = rmc7bl['createElement']('textarea')), _ynqx['_initInput'](_ynqx['input'] = rmc7bl['createElement']('input')), _ynqx['inputContainer'] = rmc7bl['createElement']('div'), _ynqx['inputContainer']['style']['position'] = 'absolute', _ynqx['inputContainer']['style']['zIndex'] = 0x186a0, rmc7bl['container']['appendChild'](_ynqx['inputContainer']), _ynqx['inputContainer']['setPos'] = function (wezt, d$of8) {
        _ynqx['inputContainer']['style']['left'] = wezt + 'px', _ynqx['inputContainer']['style']['top'] = d$of8 + 'px';
      }, x8on$d['stage']['on']('resize', null, $kon8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fw2zpt) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fp$kw2['_soundClass'] = crbml, fp$kw2['_musicClass'] = crbml, window['_videoClass'] = bm7rc;
    }, $kon8['_onStageResize'] = function () {
      var knod$8 = x8on$d['stage']['_canvasTransform']['identity']();knod$8['scale'](rmc7bl['width'] / yg_qsl['canvas']['width'] / nxg8dq['getPixelRatio'](), rmc7bl['height'] / yg_qsl['canvas']['height'] / nxg8dq['getPixelRatio']());
    }, $kon8['wxinputFocus'] = function (bua4) {
      var v1ej0 = _ynqx['inputElement']['target'];if (v1ej0 && !v1ej0['editable']) return;we6pz['window']['wx']['offKeyboardConfirm'](), we6pz['window']['wx']['offKeyboardInput'](), we6pz['window']['wx']['showKeyboard']({ 'defaultValue': v1ej0['text'], 'maxLength': v1ej0['maxChars'], 'multiple': v1ej0['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (scr_l) {}, 'fail': function (fkp2) {} }), we6pz['window']['wx']['onKeyboardConfirm'](function (lqyg_) {
        var tkpf2w = lqyg_ ? lqyg_['value'] : '';v1ej0['text'] = tkpf2w, v1ej0['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), we6pz['window']['wx']['onKeyboardInput'](function (lcm_sr) {
        var dq8gxn = lcm_sr ? lcm_sr['value'] : '';if (!v1ej0['multiline']) {
          if (dq8gxn['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v1ej0['text'] = dq8gxn, v1ej0['event']('input');
      });
    }, $kon8['inputEnter'] = function () {
      _ynqx['inputElement']['target']['focus'] = ![];
    }, $kon8['wxinputblur'] = function () {
      $kon8['hideKeyboard']();
    }, $kon8['hideKeyboard'] = function () {
      we6pz['window']['wx']['offKeyboardConfirm'](), we6pz['window']['wx']['offKeyboardInput'](), we6pz['window']['wx']['hideKeyboard']({ 'success': function ($kfwp) {
          console['log']('隐藏键盘');
        }, 'fail': function (yrs) {
          console['log']('隐藏键盘出错:' + (yrs ? yrs['errMsg'] : ''));
        } });
    }, $kon8;
  }(),
      e0v61z = function () {
    function o8kdf() {}nyxqg(o8kdf, 'laya.wx.mini.MiniLoader');var tkwfp = o8kdf['prototype'];return tkwfp['load'] = function (qg_xy, qygnx, f2ztw, d8o, $kp2) {
      f2ztw === void 0x0 && (f2ztw = !![]), $kp2 === void 0x0 && ($kp2 = ![]);var qn8xyg = this;qn8xyg['_url'] = qg_xy;if (qg_xy['indexOf']('data:image') === 0x0) qn8xyg['_type'] = qygnx = 'image';else qn8xyg['_type'] = qygnx || (qygnx = qn8xyg['getTypeFromUrl'](qg_xy));qn8xyg['_cache'] = f2ztw, qn8xyg['_data'] = null;var wtez = 'ascii';if (qg_xy['indexOf']('.fnt') != -0x1) wtez = 'utf8';else qygnx == 'arraybuffer' && (wtez = '');;var syqxg_ = kfw$p2['getFileExtension'](qg_xy);if (o8kdf['_fileTypeArr']['indexOf'](syqxg_) != -0x1) we6pz['EnvConfig']['load']['call'](this, qg_xy, qygnx, f2ztw, d8o, $kp2);else {
        if (!o2kdf['getFileInfo'](qg_xy)) {
          if (qg_xy['indexOf']('layaNativeDir/') != -0x1) {
            if (we6pz['isZiYu']) {
              var buia = o2kdf['ziyuFileData'][qg_xy];qn8xyg['onLoaded'](buia);return;
            } else {
              cosnole['log']('read read'), o2kdf['read'](qg_xy, wtez, new v0j9h(o8kdf, o8kdf['onReadNativeCallBack'], [wtez, qg_xy, qygnx, f2ztw, d8o, $kp2, qn8xyg]));return;
            }
          }if (p2wk$f['rootPath'] == '') var q_sgyx = qg_xy;else q_sgyx = qg_xy['split'](p2wk$f['rootPath'])[0x0];qg_xy['indexOf']('http://') != -0x1 || qg_xy['indexOf']('https://') != -0x1 ? we6pz['EnvConfig']['load']['call'](qn8xyg, qg_xy, qygnx, f2ztw, d8o, $kp2) : o2kdf['readFile'](q_sgyx, wtez, new v0j9h(o8kdf, o8kdf['onReadNativeCallBack'], [wtez, qg_xy, qygnx, f2ztw, d8o, $kp2, qn8xyg]), qg_xy);
        } else we6pz['EnvConfig']['load']['call'](this, qg_xy, qygnx, f2ztw, d8o, $kp2);
      }
    }, tkwfp['resMgrLoad'] = function (slm7r, h5j9, fk2$do, $2dkfo, ogxnd, d$2ok, ygs_ql) {
      fk2$do === void 0x0 && (fk2$do = 0x0), $2dkfo === void 0x0 && ($2dkfo = ![]), ogxnd === void 0x0 && (ogxnd = ![]), d$2ok === void 0x0 && (d$2ok = 0x0), ygs_ql === void 0x0 && (ygs_ql = 0x3), slm7r['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', slm7r), we6pz['EnvConfig']['resMgrLoad'](slm7r, (slc7, sclry, v6z0e) => {
        o8kdf['prototype']['resMgrLoadCallBack'](slc7, sclry, v6z0e, h5j9);
      }, fk2$do, $2dkfo, ogxnd, d$2ok, ygs_ql);
    }, tkwfp['resMgrLoadCallBack'] = function (rmc7lb, gxnd8q, mc3r7, gqnd) {
      console['log']('buff:::', rmc7lb, mc3r7, o2kdf['fileNativeDir'] + '///' + o2kdf['fileListName']), gqnd(rmc7lb, gxnd8q, mc3r7);
    }, tkwfp['clearRes'] = function (pf2t, odfk2$) {
      odfk2$ === void 0x0 && (odfk2$ = ![]);var gxny_ = this;gxny_['clearRes'](pf2t, odfk2$);var i7m34b = o2kdf['getFileInfo'](pf2t);if (i7m34b && (pf2t['indexOf']('http://') != -0x1 || pf2t['indexOf']('https://') != -0x1)) {
        var b4rm = i7m34b['md5'],
            f2ztpw = o2kdf['getFileNativePath'](b4rm);o2kdf['remove'](f2ztpw);
      }
    }, o8kdf['onReadNativeCallBack'] = function (xg8yq, lrmcs_, ofk8d, mr7ls, p26, v01e9j, we6tz, a3u4i, fpw$2k) {
      mr7ls === void 0x0 && (mr7ls = !![]), v01e9j === void 0x0 && (v01e9j = ![]), a3u4i === void 0x0 && (a3u4i = 0x0);if (!a3u4i) {
        var _gqn;if (ofk8d == 'json' || ofk8d == 'atlas') _gqn = we6pz['getJson'](fpw$2k['data']);else ofk8d == 'xml' ? _gqn = kfw$p2['parseXMLFromString'](fpw$2k['data']) : _gqn = fpw$2k['data'];we6tz['onLoaded'](_gqn), !we6pz['isZiYu'] && we6pz['isPosMsgYu'] && ofk8d != 'arraybuffer' && wx['postMessage']({ 'url': lrmcs_, 'data': _gqn, 'isLoad': !![] });
      } else a3u4i == 0x1 && we6pz['EnvConfig']['load']['call'](we6tz, lrmcs_, ofk8d, mr7ls, p26, v01e9j);
    }, j0e1v6(o8kdf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), o8kdf;
  }(),
      o2kdf = function ($k2fw) {
    function nxgy_() {
      nxgy_['__super']['call'](this);;
    }return nyxqg(nxgy_, 'laya.wx.mini.MiniFileMgr', $k2fw), nxgy_['isLoadFile'] = function (lg) {
      return nxgy_['_fileTypeArr']['indexOf'](lg) != -0x1 ? !![] : ![];
    }, nxgy_['getFileInfo'] = function (ibu743) {
      var tf2w = ibu743['split']('?')[0x0],
          t1e = nxgy_['filesListObj'][tf2w];if (t1e == null) return null;else return t1e;return null;
    }, nxgy_['onFileUpdate'] = function (wp62zt, b7cr3m) {
      var j1e9v0 = wp62zt['split']('/'),
          csl_r = j1e9v0[j1e9v0['length'] - 0x1],
          j1059h = nxgy_['getFileInfo'](b7cr3m);if (j1059h == null) nxgy_['onSaveFile'](b7cr3m, csl_r);else {
        if (j1059h['readyUrl'] != b7cr3m) nxgy_['remove'](csl_r, b7cr3m);
      }
    }, nxgy_['exits'] = function (w6z2, od2k) {
      var x8nqd = nxgy_['getFileNativePath'](w6z2);nxgy_['fs']['getFileInfo']({ 'filePath': x8nqd, 'success': function (pfkwt) {
          od2k != null && od2k['runWith']([0x0, pfkwt]);
        }, 'fail': function (zpvt6e) {
          od2k != null && od2k['runWith']([0x1, zpvt6e]);
        } });
    }, nxgy_['read'] = function (f$2wpk, t6epwz, $ow2f, nxyg) {
      t6epwz === void 0x0 && (t6epwz = 'ascill'), nxyg === void 0x0 && (nxyg = '');var nk$o8d;nxyg != '' ? nk$o8d = nxgy_['getFileNativePath'](f$2wpk) : nk$o8d = f$2wpk, nxgy_['fs']['readFile']({ 'filePath': nk$o8d, 'encoding': t6epwz, 'success': function (fok2d$) {
          $ow2f != null && $ow2f['runWith']([0x0, fok2d$]);
        }, 'fail': function (of$kd) {
          if (of$kd && nxyg != '') nxgy_['down'](nxyg, t6epwz, $ow2f, nxyg);else $ow2f != null && $ow2f['runWith']([0x1]);
        } });
    }, nxgy_['readNativeFile'] = function (wfk$p, w$k2fo) {
      nxgy_['fs']['readFile']({ 'filePath': wfk$p, 'encoding': '', 'success': function (y8gxqn) {
          w$k2fo != null && w$k2fo['runWith']([0x0]);
        }, 'fail': function (p2fzwt) {
          w$k2fo != null && w$k2fo['runWith']([0x1]);
        } });
    }, nxgy_['down'] = function (f2dok$, f$2w, v091j, vjh) {
      f$2w === void 0x0 && (f$2w = 'ascill'), vjh === void 0x0 && (vjh = '');var sl_c = nxgy_['getFileNativePath'](vjh),
          mrc_ = nxgy_['wxdown']({ 'url': f2dok$, 'filePath': sl_c, 'success': function (qdxg) {
          if (qdxg['statusCode'] === 0xc8) nxgy_['readFile'](qdxg['filePath'], f$2w, v091j, vjh);
        }, 'fail': function (ow$k2) {
          v091j != null && v091j['runWith']([0x1, ow$k2]);
        } });mrc_['onProgressUpdate'](function (_lcyrs) {
        v091j != null && v091j['runWith']([0x2, _lcyrs['progress']]);
      });
    }, nxgy_['readFile'] = function (gqs_xy, uba4i3, k8$no, aiu3b) {
      uba4i3 === void 0x0 && (uba4i3 = 'ascill'), aiu3b === void 0x0 && (aiu3b = ''), nxgy_['fs']['readFile']({ 'filePath': gqs_xy, 'encoding': uba4i3, 'success': function (syl_q) {
          if (gqs_xy['indexOf']('http://') != -0x1 || gqs_xy['indexOf']('https://') != -0x1) nxgy_['onFileUpdate'](gqs_xy, aiu3b);k8$no != null && k8$no['runWith']([0x0, syl_q]);
        }, 'fail': function (gq8ny) {
          if (gq8ny) k8$no != null && k8$no['runWith']([0x1, gq8ny]);
        } });
    }, nxgy_['downImg'] = function (m3r7b, k2w$fp, tp6ez) {
      tp6ez === void 0x0 && (tp6ez = '');var ibm43 = nxgy_['wxdown']({ 'url': m3r7b, 'success': function (do$kf) {
          do$kf['statusCode'] === 0xc8 && nxgy_['copyFile'](do$kf['tempFilePath'], tp6ez, k2w$fp);
        }, 'fail': function (kon8$) {
          k2w$fp != null && k2w$fp['runWith']([0x1, kon8$]);
        } });
    }, nxgy_['copyFile'] = function (rm34b, o2wf$k, _nqyxg) {
      var p2f$wk = rm34b['split']('/'),
          e61zvt = p2f$wk[p2f$wk['length'] - 0x1],
          wkt2p = o2wf$k['split']('?')[0x0],
          dk2$o = nxgy_['getFileInfo'](o2wf$k),
          u34iba = nxgy_['getFileNativePath'](e61zvt);nxgy_['fs']['copyFile']({ 'srcPath': rm34b, 'destPath': u34iba, 'success': function (ycl_s) {
          if (!dk2$o) nxgy_['onSaveFile'](o2wf$k, e61zvt), _nqyxg != null && _nqyxg['runWith']([0x0]);else {
            if (dk2$o['readyUrl'] != o2wf$k) nxgy_['remove'](e61zvt, o2wf$k, _nqyxg);
          }
        }, 'fail': function (wt2p6) {
          _nqyxg != null && _nqyxg['runWith']([0x1, wt2p6]);
        } });
    }, nxgy_['getFileNativePath'] = function (b34mr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + b34mr;
    }, nxgy_['remove'] = function (lr_c, _lsy, xqsyg_) {
      _lsy === void 0x0 && (_lsy = '');var $of8kd = nxgy_['getFileInfo'](_lsy),
          t2k = nxgy_['getFileNativePath']($of8kd['md5']);x8on$d['loader']['clearRes']($of8kd['readyUrl']), nxgy_['fs']['unlink']({ 'filePath': t2k, 'success': function (w2kfp) {
          if (_lsy != '') nxgy_['onSaveFile'](_lsy, lr_c);xqsyg_ != null && xqsyg_['runWith']([0x0]);
        }, 'fail': function (oxdg8) {} });
    }, nxgy_['onSaveFile'] = function (l_sm, b347mr) {
      var xn8o$ = l_sm['split']('?')[0x0];nxgy_['filesListObj'][xn8o$] = { 'md5': b347mr, 'readyUrl': l_sm }, nxgy_['fs']['writeFile']({ 'filePath': nxgy_['fileNativeDir'] + '/' + nxgy_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nxgy_['filesListObj']), 'success': function (_rycl) {
          console['log']('写入测试测试成功：', _rycl);
        }, 'fail': function (lm7rs) {
          console['log']('写入测试测试失败：', lm7rs);
        } });
    }, nxgy_['existDir'] = function (mr7lc, ftwpz) {
      nxgy_['fs']['mkdir']({ 'dirPath': mr7lc, 'success': function (xgon) {
          ftwpz != null && ftwpz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (csmrl) {
          if (csmrl['errMsg']['indexOf']('file already exists') != -0x1) nxgy_['readSync'](nxgy_['fileListName'], 'utf8', ftwpz);else ftwpz != null && ftwpz['runWith']([0x1, csmrl]);
        } });
    }, nxgy_['readSync'] = function (rb, x8ygq, h0j1v9, dxq8g) {
      x8ygq === void 0x0 && (x8ygq = 'ascill'), dxq8g === void 0x0 && (dxq8g = '');var fk2d$o = nxgy_['getFileNativePath'](rb),
          g_n;try {
        g_n = nxgy_['fs']['readFileSync'](fk2d$o), h0j1v9 != null && h0j1v9['runWith']([0x0, { 'data': g_n }]);
      } catch (l_syqg) {
        h0j1v9 != null && h0j1v9['runWith']([0x1]);
      }
    }, nxgy_['readCache'] = function () {}, nxgy_['writeCache'] = function (twzp) {
      var r_scy = readyUrl['split']('?')[0x0];nxgy_['filesListObj'][r_scy] = { 'md5': md5Name, 'readyUrl': readyUrl }, nxgy_['fs']['writeFile']({ 'filePath': nxgy_['fileNativeDir'] + '/' + nxgy_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nxgy_['filesListObj']), 'success': function (d$k8no) {}, 'fail': function (w2p) {} });
    }, nxgy_['setNativeFileDir'] = function (rm7c) {
      nxgy_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rm7c;
    }, nxgy_['filesListObj'] = {}, nxgy_['fileNativeDir'] = null, nxgy_['fileListName'] = 'layaairfiles.txt', nxgy_['ziyuFileData'] = {}, j0e1v6(nxgy_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), nxgy_;
  }(ynx8gq),
      crbml = function (w$2fp) {
    function wf2zpt() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], wf2zpt['__super']['call'](this), this['_sound'] = wf2zpt['_createSound'](), this['_chanell'] = new i34au(this['_sound']);
    }nyxqg(wf2zpt, 'laya.wx.mini.MiniSound', w$2fp);var mi374b = wf2zpt['prototype'];return mi374b['load'] = function (nx$od8) {
      var gsqxy_ = this;nx$od8 = p2wk$f['formatURL'](nx$od8), this['url'] = nx$od8;if (wf2zpt['_audioCache'][nx$od8]) {
        this['event']('complete');return;
      }function u4ib7() {
        if (wf2zpt['_null'] != undefined) gsqxy_['_sound']['onCanplay'](wf2zpt['_null']), gsqxy_['_sound']['onError'](wf2zpt['_null']);else try {
          gsqxy_['_sound']['onCanplay'](null), gsqxy_['_sound']['onError'](null), wf2zpt['_null'] = null;
        } catch (slmr) {
          console['warn']('[wxmini] _clearSound:' + slmr), gsqxy_['_sound']['onCanplay'](c_lsq), gsqxy_['_sound']['onError'](c_lsq), wf2zpt['_null'] = c_lsq;
        }
      }function _gyslq() {
        $ko['loaded'] = !![], $ko['event']('complete'), wf2zpt['_audioCache'][$ko['url']] = $ko;
      }function pk(wpktf2) {
        console['error']('errCode=' + wpktf2['errCode'] + '  errMsg=' + wpktf2['errMsg']), $ko['event']('error');
      }function c_lsq() {}this['_sound']['onCanplay'](_gyslq), this['_sound']['onError'](pk), this['_sound']['src'] = nx$od8;var $ko = this;
    }, mi374b['play'] = function (mlc7, cqyls_) {
      mlc7 === void 0x0 && (mlc7 = 0x0), cqyls_ === void 0x0 && (cqyls_ = 0x0);var bmrcl7, z2pt;if (this['url'] == fp$kw2['_tMusic']) {
        if (!wf2zpt['_musicAudio']) wf2zpt['_musicAudio'] = this['_sound'];bmrcl7 = wf2zpt['_musicAudio'], z2pt = this['_chanell'];
      } else bmrcl7 = this['_sound'], z2pt = this['_chanell'];return bmrcl7['src'] = this['url'], bmrcl7['startTime'] = 0x0, z2pt['isStopped'] && (z2pt['url'] = this['url'], z2pt['loops'] = cqyls_, z2pt['startTime'] = mlc7, z2pt['play'](), fp$kw2['addChannel'](z2pt)), z2pt;
    }, mi374b['dispose'] = function () {
      var zep6w = wf2zpt['_audioCache'][this['url']];zep6w && (zep6w['src'] = '', delete wf2zpt['_audioCache'][this['url']]);
    }, t6wp2(0x0, mi374b, 'duration', function () {
      return this['_sound']['duration'];
    }), wf2zpt['_createSound'] = function () {
      wf2zpt['_id']++;var xqd8 = we6pz['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return xqd8;
    }, wf2zpt['_musicAudio'] = null, wf2zpt['_id'] = 0x0, wf2zpt['_audioCache'] = {}, wf2zpt['_null'] = undefined, wf2zpt;
  }(ynx8gq),
      i34au = function (tz2pw) {
    function z6e10(pt6e) {
      this['_audio'] = null, this['_onEnd'] = null, z6e10['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = pt6e, this['_onEnd'] = kfw$p2['bind'](this['__onEnd'], this), pt6e['onEnded'](this['_onEnd']);
    }nyxqg(z6e10, 'laya.wx.mini.MiniSoundChannel', tz2pw);var zev061 = z6e10['prototype'];return zev061['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x8on$d['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zev061['__onNull'] = function () {}, zev061['play'] = function () {
      this['isStopped'] = ![], fp$kw2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zev061['stop'] = function () {
      this['isStopped'] = !![], fp$kw2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, zev061['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zev061['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fp$kw2['addChannel'](this), this['_audio']['play']();
    }, t6wp2(0x0, zev061, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), t6wp2(0x0, zev061, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), t6wp2(0x0, zev061, 'volume', function () {
      return 0x1;
    }, function (dko$2f) {}), z6e10['_null'] = undefined, z6e10;
  }(v19je),
      bm7rc = function () {
    function u437b() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = we6pz['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }nyxqg(u437b, 'laya.wx.mini.MiniVideo');var ewt6z = u437b['prototype'];return ewt6z['on'] = function (ongxd, ftkp2, tpwz26) {
      if (ongxd == 'loadedmetadata') this['onPlayFunc'] = tpwz26['bind'](ftkp2), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else ongxd == 'ended' && (this['onEndedFunC'] = tpwz26['bind'](ftkp2), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, ewt6z['onTimeUpdateFunc'] = function (nxqg8) {
      this['position'] = nxqg8['position'], this['_duration'] = nxqg8['duration'];
    }, ewt6z['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, ewt6z['onended'] = function (j16ev0, ygq8nx) {
      this['onEndedFunC'] = ygq8nx['bind'](j16ev0), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, ewt6z['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, ewt6z['off'] = function ($d8xno, dnq8, p2wtf) {
      if ($d8xno == 'loadedmetadata') this['onPlayFunc'] = p2wtf['bind'](dnq8), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else $d8xno == 'ended' && (this['onEndedFunC'] = p2wtf['bind'](dnq8), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, ewt6z['load'] = function (j01e6) {
      if (!this['videoElement']) return;this['videoElement']['src'] = j01e6;
    }, ewt6z['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, ewt6z['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, ewt6z['size'] = function (sycl_r, kw$of) {
      if (!this['videoElement']) return;this['videoElement']['width'] = sycl_r, this['videoElement']['height'] = kw$of;
    }, ewt6z['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, ewt6z['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, t6wp2(0x0, ewt6z, 'duration', function () {
      return this['_duration'];
    }), t6wp2(0x0, ewt6z, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (tpezv6) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = tpezv6;
    }), t6wp2(0x0, ewt6z, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), t6wp2(0x0, ewt6z, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), t6wp2(0x0, ewt6z, 'ended', function () {
      return this['videoend'];
    }), t6wp2(0x0, ewt6z, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (o$2wk) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = o$2wk;
    }), t6wp2(0x0, ewt6z, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (p2fktw) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = p2fktw;
    }), t6wp2(0x0, ewt6z, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (p2w$f) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = p2w$f;
    }), t6wp2(0x0, ewt6z, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), t6wp2(0x0, ewt6z, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (_csmlr) {
      if (!this['videoElement']) return;this['videoElement']['x'] = _csmlr;
    }), t6wp2(0x0, ewt6z, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (s_gyxq) {
      if (!this['videoElement']) return;this['videoElement']['y'] = s_gyxq;
    }), t6wp2(0x0, ewt6z, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), t6wp2(0x0, ewt6z, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (b34i7u) {
      if (!this['videoElement']) return;this['videoElement']['src'] = b34i7u;
    }), t6wp2(0x0, ewt6z, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (pkt2) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = pkt2;
    }), t6wp2(0x0, ewt6z, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (ox8gd) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = ox8gd;
    }), u437b;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var lm_c in Laya) {
    var wk$fo = Laya[lm_c];wk$fo && wk$fo['__isclass'] && (exports[lm_c] = wk$fo);
  }
});