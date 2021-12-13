var k = wx.$f;
(function (window, document, cwndjs) {
  var o642k = cwndjs['un'],
      nsxjw = cwndjs['uns'],
      ivmu = cwndjs['static'],
      r83z$7 = cwndjs['class'],
      sdoj6c = cwndjs['getset'],
      q50 = cwndjs['__newvec'],
      xze87r = laya['utils']['Browser'],
      ufibvm = laya['events']['Event'],
      k5q0 = laya['events']['EventDispatcher'],
      jd26 = laya['resource']['HTMLImage'],
      re8nz = laya['utils']['Handler'],
      vbmf = laya['display']['Input'],
      $z73r8 = laya['net']['Loader'],
      wndsex = laya['maths']['Matrix'],
      fht5 = laya['renders']['Render'],
      zn8ex = laya['utils']['RunDriver'],
      $z783r = laya['media']['Sound'],
      qf50t = laya['media']['SoundChannel'],
      xz8e7 = laya['media']['SoundManager'],
      do6sj = laya['display']['Stage'],
      snjcw = laya['net']['URL'],
      wzn8xe = laya['utils']['Utils'],
      p3$ay = function () {
    function tmhqf() {}return r83z$7(tmhqf, 'laya.wx.mini.MiniAdpter'), tmhqf['getJson'] = function (eznxs) {
      return JSON['parse'](eznxs);
    }, tmhqf['init'] = function (xjwdsn, co62) {
      xjwdsn === void 0x0 && (xjwdsn = ![]), co62 === void 0x0 && (co62 = ![]);if (tmhqf['_inited']) return;tmhqf['window'] = window;if (tmhqf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;tmhqf['_inited'] = !![], tmhqf['isZiYu'] = co62, tmhqf['isPosMsgYu'] = xjwdsn, tmhqf['EnvConfig'] = {}, !tmhqf['isZiYu'] && (sncdw['setNativeFileDir']('/layaairGame'), sncdw['existDir'](sncdw['fileNativeDir'], re8nz['create'](tmhqf, tmhqf['onMkdirCallBack']))), tmhqf['window']['focus'] = function () {}, cwndjs['getUrlPath'] = function () {}, tmhqf['window']['logtime'] = function (nwdcs) {}, tmhqf['window']['alertTimeLog'] = function (i1bmvu) {}, tmhqf['window']['resetShareInfo'] = function () {}, tmhqf['window']['CanvasRenderingContext2D'] = function () {}, tmhqf['window']['CanvasRenderingContext2D']['prototype'] = tmhqf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tmhqf['window']['document']['body']['appendChild'] = function () {}, tmhqf['EnvConfig']['pixelRatioInt'] = 0x0, zn8ex['getPixelRatio'] = tmhqf['pixelRatio'], tmhqf['_preCreateElement'] = xze87r['createElement'], xze87r['createElement'] = tmhqf['createElement'], zn8ex['createShaderCondition'] = tmhqf['createShaderCondition'], wzn8xe['parseXMLFromString'] = tmhqf['parseXMLFromString'], vbmf['_createInputElement'] = _q45k2['_createInputElement'], tmhqf['EnvConfig']['load'] = $z73r8['prototype']['load'], $z73r8['prototype']['load'] = bguv19['prototype']['load'], tmhqf['isZiYu'] && xjwdsn && wx['onMessage'](function (e8zx) {
        e8zx['isLoad'] && (sncdw['ziyuFileData'][e8zx['url']] = e8zx['data']);
      });
    }, tmhqf['onMkdirCallBack'] = function (cj62, v9bi) {
      if (!cj62) sncdw['filesListObj'] = JSON['parse'](v9bi['data']);
    }, tmhqf['pixelRatio'] = function () {
      if (!tmhqf['EnvConfig']['pixelRatioInt']) try {
        var znwex = wx['getSystemInfoSync']();return tmhqf['EnvConfig']['pixelRatioInt'] = znwex['pixelRatio'], znwex = znwex, znwex['pixelRatio'];
      } catch (o46_k) {}return tmhqf['EnvConfig']['pixelRatioInt'];
    }, tmhqf['createElement'] = function (z83) {
      if (z83 == 'canvas') {
        var r$37a;return tmhqf['idx'] == 0x1 ? tmhqf['isZiYu'] ? (r$37a = sharedCanvas, r$37a['style'] = {}) : r$37a = window['canvas'] : r$37a = window['wx']['createCanvas'](), tmhqf['idx']++, r$37a;
      } else {
        if (z83 == 'textarea' || z83 == 'input') return tmhqf['onCreateInput'](z83);else {
          if (z83 == 'div') {
            var jdcsw = tmhqf['_preCreateElement'](z83);return jdcsw['contains'] = function (k_2q) {
              return null;
            }, jdcsw['removeChild'] = function (e7xrz) {}, jdcsw;
          } else return tmhqf['_preCreateElement'](z83);
        }
      }
    }, tmhqf['onCreateInput'] = function (seznxw) {
      var k04q_ = tmhqf['_preCreateElement'](seznxw);return k04q_['focus'] = _q45k2['wxinputFocus'], k04q_['blur'] = _q45k2['wxinputblur'], k04q_['style'] = {}, k04q_['value'] = 0x0, k04q_['parentElement'] = {}, k04q_['placeholder'] = {}, k04q_['type'] = {}, k04q_['setColor'] = function (t5fq) {}, k04q_['setType'] = function (er8xn) {}, k04q_['setFontFace'] = function (xrz78e) {}, k04q_['addEventListener'] = function (z8r73$) {}, k04q_['contains'] = function (_05kh) {
        return null;
      }, k04q_['removeChild'] = function (sjdnw) {}, k04q_;
    }, tmhqf['createShaderCondition'] = function (jwdc) {
      var b1ium = this,
          rz$e7 = function () {
        var hitf0 = jwdc;return b1ium[jwdc['replace']('this.', '')];
      };return rz$e7;
    }, tmhqf['EnvConfig'] = null, tmhqf['window'] = null, tmhqf['_preCreateElement'] = null, tmhqf['_inited'] = ![], tmhqf['wxRequest'] = null, tmhqf['systemInfo'] = null, tmhqf['version'] = '0.0.1', tmhqf['isZiYu'] = ![], tmhqf['isPosMsgYu'] = ![], tmhqf['parseXMLFromString'] = function (nzew8x) {
      var wjdsnc, $3yra;nzew8x = nzew8x['replace'](/>\s+</g, '><');try {
        wjdsnc = new window['Parser']['DOMParser']()['parseFromString'](nzew8x, 'text/xml');
      } catch (t50fh) {
        throw '需要引入xml解析库文件';
      }return wjdsnc;
    }, tmhqf['idx'] = 0x1, tmhqf;
  }(),
      scdw = function () {
    function nzxwse() {}r83z$7(nzxwse, 'laya.wx.mini.MiniImage');var thim0 = nzxwse['prototype'];return thim0['_loadImage'] = function ($8z3r7) {
      var bmv1 = this,
          sodcj = ![];$8z3r7['indexOf']('layaNativeDir/') == -0x1 && (sodcj = !![], $8z3r7 = snjcw['formatURL']($8z3r7));if (!sncdw['getFileInfo']($8z3r7)) {
        if ($8z3r7['indexOf']('http://') != -0x1 || $8z3r7['indexOf']('https://') != -0x1) sncdw['downImg']($8z3r7, new re8nz(nzxwse, nzxwse['onDownImgCallBack'], [$8z3r7, bmv1]), $8z3r7);else nzxwse['onCreateImage']($8z3r7, bmv1, !![]);
      } else nzxwse['onCreateImage']($8z3r7, bmv1, !sodcj);
    }, nzxwse['onDownImgCallBack'] = function (w8znx, rn8z, c62_) {
      if (!c62_) nzxwse['onCreateImage'](w8znx, rn8z);else rn8z['onError'](null);
    }, nzxwse['onCreateImage'] = function (mi1uv, b1ivu, qk05t) {
      qk05t === void 0x0 && (qk05t = ![]);var $e87rz;if (!qk05t) {
        var kqt0h5 = sncdw['getFileInfo'](mi1uv),
            a3ry$ = kqt0h5['md5'];$e87rz = sncdw['getFileNativePath'](a3ry$);
      } else $e87rz = mi1uv;if (b1ivu['imgCache'] == null) b1ivu['imgCache'] = {};var ojscd;function jwosc() {
        ojscd['onload'] = null, ojscd['onerror'] = null, delete b1ivu['imgCache'][mi1uv];
      };var bvift = function () {
        jwosc(), b1ivu['onLoaded'](ojscd);
      },
          tfvmbi = function () {
        jwosc(), b1ivu['event']('error', 'Load image failed');
      };b1ivu['_type'] == 'nativeimage' ? (ojscd = new xze87r['window']['Image'](), ojscd['crossOrigin'] = '', ojscd['onload'] = bvift, ojscd['onerror'] = tfvmbi, ojscd['src'] = $e87rz, b1ivu['imgCache'][mi1uv] = ojscd) : new jd26['create']($e87rz, { 'onload': bvift, 'onerror': tfvmbi, 'onCreate': function (ocj) {
          ojscd = ocj, b1ivu['imgCache'][mi1uv] = ocj;
        } });
    }, nzxwse;
  }(),
      _q45k2 = function () {
    function dcj26o() {}return r83z$7(dcj26o, 'laya.wx.mini.MiniInput'), dcj26o['_createInputElement'] = function () {
      vbmf['_initInput'](vbmf['area'] = xze87r['createElement']('textarea')), vbmf['_initInput'](vbmf['input'] = xze87r['createElement']('input')), vbmf['inputContainer'] = xze87r['createElement']('div'), vbmf['inputContainer']['style']['position'] = 'absolute', vbmf['inputContainer']['style']['zIndex'] = 0x186a0, xze87r['container']['appendChild'](vbmf['inputContainer']), vbmf['inputContainer']['setPos'] = function (ubmvif, ufimbv) {
        vbmf['inputContainer']['style']['left'] = ubmvif + 'px', vbmf['inputContainer']['style']['top'] = ufimbv + 'px';
      }, cwndjs['stage']['on']('resize', null, dcj26o['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e87$z) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xz8e7['_soundClass'] = $r8y, xz8e7['_musicClass'] = $r8y;
    }, dcj26o['_onStageResize'] = function () {
      var qh5t0f = cwndjs['stage']['_canvasTransform']['identity']();qh5t0f['scale'](xze87r['width'] / fht5['canvas']['width'] / zn8ex['getPixelRatio'](), xze87r['height'] / fht5['canvas']['height'] / zn8ex['getPixelRatio']());
    }, dcj26o['wxinputFocus'] = function (x8zwne) {
      var k_2o46 = vbmf['inputElement']['target'];if (k_2o46 && !k_2o46['editable']) return;p3$ay['window']['wx']['offKeyboardConfirm'](), p3$ay['window']['wx']['offKeyboardInput'](), p3$ay['window']['wx']['showKeyboard']({ 'defaultValue': k_2o46['text'], 'maxLength': k_2o46['maxChars'], 'multiple': k_2o46['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (btfimh) {}, 'fail': function (ds6ojc) {} }), p3$ay['window']['wx']['onKeyboardConfirm'](function (exz8) {
        var hbimf = exz8 ? exz8['value'] : '';k_2o46['text'] = hbimf, k_2o46['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), p3$ay['window']['wx']['onKeyboardInput'](function (hibtf) {
        var w8xe = hibtf ? hibtf['value'] : '';if (!k_2o46['multiline']) {
          if (w8xe['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }k_2o46['text'] = w8xe, k_2o46['event']('input');
      });
    }, dcj26o['inputEnter'] = function () {
      vbmf['inputElement']['target']['focus'] = ![];
    }, dcj26o['wxinputblur'] = function () {
      dcj26o['hideKeyboard']();
    }, dcj26o['hideKeyboard'] = function () {
      p3$ay['window']['wx']['offKeyboardConfirm'](), p3$ay['window']['wx']['offKeyboardInput'](), p3$ay['window']['wx']['hideKeyboard']({ 'success': function (viumb1) {
          console['log']('隐藏键盘');
        }, 'fail': function (bvfiu) {
          console['log']('隐藏键盘出错:' + (bvfiu ? bvfiu['errMsg'] : ''));
        } });
    }, dcj26o;
  }(),
      bguv19 = function () {
    function newzsx() {}r83z$7(newzsx, 'laya.wx.mini.MiniLoader');var dxnes = newzsx['prototype'];return dxnes['load'] = function (dsenw, k4q0, y$a7, denxw, thmfbi) {
      y$a7 === void 0x0 && (y$a7 = !![]), thmfbi === void 0x0 && (thmfbi = ![]);var ivbu91 = this;ivbu91['_url'] = dsenw;if (dsenw['indexOf']('data:image') === 0x0) ivbu91['_type'] = k4q0 = 'image';else ivbu91['_type'] = k4q0 || (k4q0 = ivbu91['getTypeFromUrl'](dsenw));ivbu91['_cache'] = y$a7, ivbu91['_data'] = null;var h_kq50 = 'ascii';if (dsenw['indexOf']('.fnt') != -0x1) h_kq50 = 'utf8';else k4q0 == 'arraybuffer' && (h_kq50 = '');;var ojd62 = wzn8xe['getFileExtension'](dsenw);if (newzsx['_fileTypeArr']['indexOf'](ojd62) != -0x1) p3$ay['EnvConfig']['load']['call'](this, dsenw, k4q0, y$a7, denxw, thmfbi);else {
        if (!sncdw['getFileInfo'](dsenw)) {
          if (dsenw['indexOf']('layaNativeDir/') != -0x1) {
            if (p3$ay['isZiYu']) {
              var q25_k4 = sncdw['ziyuFileData'][dsenw];ivbu91['onLoaded'](q25_k4);return;
            } else {
              cosnole['log']('read read'), sncdw['read'](dsenw, h_kq50, new re8nz(newzsx, newzsx['onReadNativeCallBack'], [h_kq50, dsenw, k4q0, y$a7, denxw, thmfbi, ivbu91]));return;
            }
          }if (snjcw['rootPath'] == '') var dewnxs = dsenw;else dewnxs = dsenw['split'](snjcw['rootPath'])[0x0];dsenw['indexOf']('http://') != -0x1 || dsenw['indexOf']('https://') != -0x1 ? p3$ay['EnvConfig']['load']['call'](ivbu91, dsenw, k4q0, y$a7, denxw, thmfbi) : sncdw['readFile'](dewnxs, h_kq50, new re8nz(newzsx, newzsx['onReadNativeCallBack'], [h_kq50, dsenw, k4q0, y$a7, denxw, thmfbi, ivbu91]), dsenw);
        } else p3$ay['EnvConfig']['load']['call'](this, dsenw, k4q0, y$a7, denxw, thmfbi);
      }
    }, dxnes['resMgrLoad'] = function (iv9bu, cojw, mb1i, sjocd6, $yr387, k054q, rnxze8) {
      mb1i === void 0x0 && (mb1i = 0x0), sjocd6 === void 0x0 && (sjocd6 = ![]), $yr387 === void 0x0 && ($yr387 = ![]), k054q === void 0x0 && (k054q = 0x0), rnxze8 === void 0x0 && (rnxze8 = 0x3), iv9bu['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', iv9bu), p3$ay['EnvConfig']['resMgrLoad'](iv9bu, (k_q50, yr38$, znxse) => {
        newzsx['prototype']['resMgrLoadCallBack'](k_q50, yr38$, znxse, cojw);
      }, mb1i, sjocd6, $yr387, k054q, rnxze8);
    }, dxnes['resMgrLoadCallBack'] = function (dxwjn, exdsn, xewsnz, e8zxr7) {
      console['log']('buff:::', dxwjn, xewsnz, sncdw['fileNativeDir'] + '///' + sncdw['fileListName']), e8zxr7(dxwjn, exdsn, xewsnz);
    }, dxnes['clearRes'] = function (mtbhi, rxn) {
      rxn === void 0x0 && (rxn = ![]);var zr83$ = this;zr83$['clearRes'](mtbhi, rxn);var iftbvm = sncdw['getFileInfo'](mtbhi);if (iftbvm && (mtbhi['indexOf']('http://') != -0x1 || mtbhi['indexOf']('https://') != -0x1)) {
        var exsn = iftbvm['md5'],
            qmthf0 = sncdw['getFileNativePath'](exsn);sncdw['remove'](qmthf0);
      }
    }, newzsx['onReadNativeCallBack'] = function (z$3r7, k645_2, nxj, vu, um1biv, a$p7y, tmivfb, qmhf, mvbiu1) {
      vu === void 0x0 && (vu = !![]), a$p7y === void 0x0 && (a$p7y = ![]), qmhf === void 0x0 && (qmhf = 0x0);if (!qmhf) {
        var q5k_4;if (nxj == 'json' || nxj == 'atlas') q5k_4 = p3$ay['getJson'](mvbiu1['data']);else nxj == 'xml' ? q5k_4 = wzn8xe['parseXMLFromString'](mvbiu1['data']) : q5k_4 = mvbiu1['data'];tmivfb['onLoaded'](q5k_4), !p3$ay['isZiYu'] && p3$ay['isPosMsgYu'] && nxj != 'arraybuffer' && wx['postMessage']({ 'url': k645_2, 'data': q5k_4, 'isLoad': !![] });
      } else qmhf == 0x1 && p3$ay['EnvConfig']['load']['call'](tmivfb, k645_2, nxj, vu, um1biv, a$p7y);
    }, ivmu(newzsx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), newzsx;
  }(),
      sncdw = function (do6) {
    function rz$8e7() {
      rz$8e7['__super']['call'](this);;
    }return r83z$7(rz$8e7, 'laya.wx.mini.MiniFileMgr', do6), rz$8e7['isLoadFile'] = function (hk5tq0) {
      return rz$8e7['_fileTypeArr']['indexOf'](hk5tq0) != -0x1 ? !![] : ![];
    }, rz$8e7['getFileInfo'] = function (sez) {
      var e7z = sez['split']('?')[0x0],
          ftbhm = rz$8e7['filesListObj'][e7z];if (ftbhm == null) return null;else return ftbhm;return null;
    }, rz$8e7['onFileUpdate'] = function (mbvif, fitbhm) {
      var docs = mbvif['split']('/'),
          k4_o26 = docs[docs['length'] - 0x1],
          ren8xz = rz$8e7['getFileInfo'](fitbhm);if (ren8xz == null) rz$8e7['onSaveFile'](fitbhm, k4_o26);else {
        if (ren8xz['readyUrl'] != fitbhm) rz$8e7['remove'](k4_o26, fitbhm);
      }
    }, rz$8e7['exits'] = function (tifh0, mibtvf) {
      var y7$ap3 = rz$8e7['getFileNativePath'](tifh0);rz$8e7['fs']['getFileInfo']({ 'filePath': y7$ap3, 'success': function (_526k) {
          mibtvf != null && mibtvf['runWith']([0x0, _526k]);
        }, 'fail': function (ftmvib) {
          mibtvf != null && mibtvf['runWith']([0x1, ftmvib]);
        } });
    }, rz$8e7['read'] = function ($8r37z, de, edxnsw, y7ar$) {
      de === void 0x0 && (de = 'ascill'), y7ar$ === void 0x0 && (y7ar$ = '');var tkqh50;y7ar$ != '' ? tkqh50 = rz$8e7['getFileNativePath']($8r37z) : tkqh50 = $8r37z, rz$8e7['fs']['readFile']({ 'filePath': tkqh50, 'encoding': de, 'success': function (k_q05h) {
          edxnsw != null && edxnsw['runWith']([0x0, k_q05h]);
        }, 'fail': function (ihf0m) {
          if (ihf0m && y7ar$ != '') rz$8e7['down'](y7ar$, de, edxnsw, y7ar$);else edxnsw != null && edxnsw['runWith']([0x1]);
        } });
    }, rz$8e7['readNativeFile'] = function (ubv, kqt5) {
      rz$8e7['fs']['readFile']({ 'filePath': ubv, 'encoding': '', 'success': function (mtif) {
          kqt5 != null && kqt5['runWith']([0x0]);
        }, 'fail': function (_40kq) {
          kqt5 != null && kqt5['runWith']([0x1]);
        } });
    }, rz$8e7['down'] = function (iu1mvb, c_o, $yar, i0mtf) {
      c_o === void 0x0 && (c_o = 'ascill'), i0mtf === void 0x0 && (i0mtf = '');var ihfmbt = rz$8e7['getFileNativePath'](i0mtf),
          mbfth = rz$8e7['wxdown']({ 'url': iu1mvb, 'filePath': ihfmbt, 'success': function (zxnse) {
          if (zxnse['statusCode'] === 0xc8) rz$8e7['readFile'](zxnse['filePath'], c_o, $yar, i0mtf);
        }, 'fail': function (dnwsjc) {
          $yar != null && $yar['runWith']([0x1, dnwsjc]);
        } });mbfth['onProgressUpdate'](function (vmfu) {
        $yar != null && $yar['runWith']([0x2, vmfu['progress']]);
      });
    }, rz$8e7['readFile'] = function (_o264c, jd62oc, z$8r37, f0mhti) {
      jd62oc === void 0x0 && (jd62oc = 'ascill'), f0mhti === void 0x0 && (f0mhti = ''), rz$8e7['fs']['readFile']({ 'filePath': _o264c, 'encoding': jd62oc, 'success': function (h_kq0) {
          if (_o264c['indexOf']('http://') != -0x1 || _o264c['indexOf']('https://') != -0x1) rz$8e7['onFileUpdate'](_o264c, f0mhti);z$8r37 != null && z$8r37['runWith']([0x0, h_kq0]);
        }, 'fail': function (t0ifhm) {
          if (t0ifhm) z$8r37 != null && z$8r37['runWith']([0x1, t0ifhm]);
        } });
    }, rz$8e7['downImg'] = function (gubv, co2_6, ra$y) {
      ra$y === void 0x0 && (ra$y = '');var bg91v = rz$8e7['wxdown']({ 'url': gubv, 'success': function (r38$7y) {
          r38$7y['statusCode'] === 0xc8 && rz$8e7['copyFile'](r38$7y['tempFilePath'], ra$y, co2_6);
        }, 'fail': function (n8ez) {
          co2_6 != null && co2_6['runWith']([0x1, n8ez]);
        } });
    }, rz$8e7['copyFile'] = function (e7r$8, nxwsd, wze8nx) {
      var _26ok = e7r$8['split']('/'),
          dnex = _26ok[_26ok['length'] - 0x1],
          e7$8zr = nxwsd['split']('?')[0x0],
          jo64 = rz$8e7['getFileInfo'](nxwsd),
          mubfvi = rz$8e7['getFileNativePath'](dnex);rz$8e7['fs']['copyFile']({ 'srcPath': e7r$8, 'destPath': mubfvi, 'success': function (jdxwns) {
          if (!jo64) rz$8e7['onSaveFile'](nxwsd, dnex), wze8nx != null && wze8nx['runWith']([0x0]);else {
            if (jo64['readyUrl'] != nxwsd) rz$8e7['remove'](dnex, nxwsd, wze8nx);
          }
        }, 'fail': function (wcdos) {
          wze8nx != null && wze8nx['runWith']([0x1, wcdos]);
        } });
    }, rz$8e7['getFileNativePath'] = function (o6sj) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o6sj;
    }, rz$8e7['remove'] = function (mvbi1, ibmhft, hq0f5) {
      ibmhft === void 0x0 && (ibmhft = '');var k45q0 = rz$8e7['getFileInfo'](ibmhft),
          sjwnc = rz$8e7['getFileNativePath'](k45q0['md5']);cwndjs['loader']['clearRes'](k45q0['readyUrl']), rz$8e7['fs']['unlink']({ 'filePath': sjwnc, 'success': function (tqf50) {
          if (ibmhft != '') rz$8e7['onSaveFile'](ibmhft, mvbi1);hq0f5 != null && hq0f5['runWith']([0x0]);
        }, 'fail': function (mtihb) {} });
    }, rz$8e7['onSaveFile'] = function (xnezr8, r83z7) {
      var mqtf0 = xnezr8['split']('?')[0x0];rz$8e7['filesListObj'][mqtf0] = { 'md5': r83z7, 'readyUrl': xnezr8 }, rz$8e7['fs']['writeFile']({ 'filePath': rz$8e7['fileNativeDir'] + '/' + rz$8e7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rz$8e7['filesListObj']), 'success': function (n8zxwe) {
          console['log']('写入测试测试成功：', n8zxwe);
        }, 'fail': function (t0qhf5) {
          console['log']('写入测试测试失败：', t0qhf5);
        } });
    }, rz$8e7['existDir'] = function (z$e78, djco62) {
      rz$8e7['fs']['mkdir']({ 'dirPath': z$e78, 'success': function (t05qf) {
          djco62 != null && djco62['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (h0t5qk) {
          if (h0t5qk['errMsg']['indexOf']('file already exists') != -0x1) rz$8e7['readSync'](rz$8e7['fileListName'], 'utf8', djco62);else djco62 != null && djco62['runWith']([0x1, h0t5qk]);
        } });
    }, rz$8e7['readSync'] = function (oc462, zrxe8n, ncjdws, c426jo) {
      zrxe8n === void 0x0 && (zrxe8n = 'ascill'), c426jo === void 0x0 && (c426jo = '');var vug91b = rz$8e7['getFileNativePath'](oc462),
          buf;try {
        buf = rz$8e7['fs']['readFileSync'](vug91b), ncjdws != null && ncjdws['runWith']([0x0, { 'data': buf }]);
      } catch (jdcw) {
        ncjdws != null && ncjdws['runWith']([0x1]);
      }
    }, rz$8e7['readCache'] = function () {}, rz$8e7['writeCache'] = function (snjdx) {
      var viu91b = readyUrl['split']('?')[0x0];rz$8e7['filesListObj'][viu91b] = { 'md5': md5Name, 'readyUrl': readyUrl }, rz$8e7['fs']['writeFile']({ 'filePath': rz$8e7['fileNativeDir'] + '/' + rz$8e7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rz$8e7['filesListObj']), 'success': function (uvgb91) {}, 'fail': function (y$3ar) {} });
    }, rz$8e7['setNativeFileDir'] = function (bfumvi) {
      rz$8e7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bfumvi;
    }, rz$8e7['filesListObj'] = {}, rz$8e7['fileNativeDir'] = null, rz$8e7['fileListName'] = 'layaairfiles.txt', rz$8e7['ziyuFileData'] = {}, ivmu(rz$8e7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rz$8e7;
  }(k5q0),
      $r8y = function (ze8rn) {
    function bfmih() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], bfmih['__super']['call'](this), this['_sound'] = bfmih['_createSound']();
    }r83z$7(bfmih, 'laya.wx.mini.MiniSound', ze8rn);var htm0 = bfmih['prototype'];return htm0['load'] = function (nxzews) {
      var uv9i = this;nxzews = snjcw['formatURL'](nxzews), this['url'] = nxzews;if (bfmih['_audioCache'][nxzews]) {
        this['event']('complete');return;
      }function ocswd() {
        if (bfmih['_null'] != undefined) uv9i['_sound']['onCanplay'](bfmih['_null']), uv9i['_sound']['onError'](bfmih['_null']);else try {
          uv9i['_sound']['onCanplay'](null), uv9i['_sound']['onError'](null), bfmih['_null'] = null;
        } catch (xnwezs) {
          console['warn']('[wxmini] _clearSound:' + xnwezs), uv9i['_sound']['onCanplay'](tmhfbi), uv9i['_sound']['onError'](tmhfbi), bfmih['_null'] = tmhfbi;
        }
      }function k50hqt() {
        ocswd(), o6c2['loaded'] = !![], o6c2['event']('complete'), bfmih['_audioCache'][o6c2['url']] = o6c2;
      }function j26odc(nez8xw) {
        console['error']('errCode=' + nez8xw['errCode'] + '  errMsg=' + nez8xw['errMsg']), ocswd(), o6c2['event']('error');
      }function tmhfbi() {}this['_sound']['onCanplay'](k50hqt), this['_sound']['onError'](j26odc), this['_sound']['src'] = nxzews;var o6c2 = this;
    }, htm0['play'] = function (uvgb, uv9g) {
      uvgb === void 0x0 && (uvgb = 0x0), uv9g === void 0x0 && (uv9g = 0x0);var hft;if (this['url'] == xz8e7['_tMusic']) {
        if (!bfmih['_musicAudio']) bfmih['_musicAudio'] = bfmih['_createSound']();hft = bfmih['_musicAudio'];
      } else hft = bfmih['_createSound']();hft['src'] = this['url'];var ew8nz = new njxsw(hft);return ew8nz['url'] = this['url'], ew8nz['loops'] = uv9g, ew8nz['startTime'] = uvgb, ew8nz['play'](), xz8e7['addChannel'](ew8nz), ew8nz;
    }, htm0['dispose'] = function () {
      var $7zr38 = bfmih['_audioCache'][this['url']];$7zr38 && ($7zr38['src'] = '', delete bfmih['_audioCache'][this['url']]);
    }, sdoj6c(0x0, htm0, 'duration', function () {
      return this['_sound']['duration'];
    }), bfmih['_createSound'] = function () {
      return bfmih['_id']++, p3$ay['window']['wx']['createInnerAudioContext']();
    }, bfmih['_musicAudio'] = null, bfmih['_id'] = 0x0, bfmih['_audioCache'] = {}, bfmih['_null'] = undefined, bfmih;
  }(k5q0),
      njxsw = function (ubv9g) {
    function cnsw(hbtif) {
      this['_audio'] = null, this['_onEnd'] = null, cnsw['__super']['call'](this), this['_audio'] = hbtif, this['_onEnd'] = wzn8xe['bind'](this['__onEnd'], this), hbtif['onEnded'](this['_onEnd']);
    }r83z$7(cnsw, 'laya.wx.mini.MiniSoundChannel', ubv9g);var dnswc = cnsw['prototype'];return dnswc['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cwndjs['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dnswc['__onNull'] = function () {}, dnswc['play'] = function () {
      this['isStopped'] = ![], xz8e7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, dnswc['stop'] = function () {
      this['isStopped'] = !![], xz8e7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (cnsw['_null'] != undefined) this['_audio']['onEnded'](cnsw['_null']);else try {
        this['_audio']['onEnded'](null), cnsw['_null'] = null;
      } catch (do2c6) {
        console['warn']('[wxmini] stop:' + do2c6), this['_audio']['onEnded'](wzn8xe['bind'](this['__onNull'], this)), cnsw['_null'] = wzn8xe['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, dnswc['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, dnswc['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xz8e7['addChannel'](this), this['_audio']['play']();
    }, sdoj6c(0x0, dnswc, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), sdoj6c(0x0, dnswc, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), sdoj6c(0x0, dnswc, 'volume', function () {
      return 0x1;
    }, function (e8rzx) {}), cnsw['_null'] = undefined, cnsw;
  }(qf50t);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hq05t in Laya) {
    var mfibv = Laya[hq05t];mfibv && mfibv['__isclass'] && (exports[hq05t] = mfibv);
  }
});