var s = wx.$W;
(function (window, document, nowqs) {
  var onjwsf = nowqs['un'],
      k58cbg = nowqs['uns'],
      z3f1 = nowqs['static'],
      z1f2e3 = nowqs['class'],
      yrv = nowqs['getset'],
      q64pms = nowqs['__newvec'],
      wnsqmo = laya['utils']['Browser'],
      vxayr$ = laya['events']['Event'],
      cu8t = laya['events']['EventDispatcher'],
      xra$yd = laya['resource']['HTMLImage'],
      bdkrg = laya['utils']['Handler'],
      z3i172 = laya['display']['Input'],
      rkbgdx = laya['net']['Loader'],
      hp6u = laya['maths']['Matrix'],
      t805hu = laya['renders']['Render'],
      bg5dk = laya['utils']['RunDriver'],
      ry$va = laya['media']['Sound'],
      dkcbgr = laya['media']['SoundChannel'],
      bkgc5 = laya['media']['SoundManager'],
      yadxr$ = laya['display']['Stage'],
      t5uc = laya['net']['URL'],
      mwoj = laya['utils']['Utils'],
      a$rxy = function () {
    function ez3127() {}return z1f2e3(ez3127, 'laya.wx.mini.MiniAdpter'), ez3127['getJson'] = function (q4psm6) {
      return JSON['parse'](q4psm6);
    }, ez3127['init'] = function (fz31j, qnmo4s) {
      fz31j === void 0x0 && (fz31j = ![]), qnmo4s === void 0x0 && (qnmo4s = ![]);if (ez3127['_inited']) return;ez3127['window'] = window;if (ez3127['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ez3127['_inited'] = !![], ez3127['isZiYu'] = qnmo4s, ez3127['isPosMsgYu'] = fz31j, ez3127['EnvConfig'] = {}, !ez3127['isZiYu'] && (sm46qo['setNativeFileDir']('/layaairGame'), sm46qo['existDir'](sm46qo['fileNativeDir'], bdkrg['create'](ez3127, ez3127['onMkdirCallBack']))), ez3127['window']['focus'] = function () {}, nowqs['getUrlPath'] = function () {}, ez3127['window']['logtime'] = function (yva9$x) {}, ez3127['window']['alertTimeLog'] = function (wsfjno) {}, ez3127['window']['resetShareInfo'] = function () {}, ez3127['window']['CanvasRenderingContext2D'] = function () {}, ez3127['window']['CanvasRenderingContext2D']['prototype'] = ez3127['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ez3127['window']['document']['body']['appendChild'] = function () {}, ez3127['EnvConfig']['pixelRatioInt'] = 0x0, bg5dk['getPixelRatio'] = ez3127['pixelRatio'], ez3127['_preCreateElement'] = wnsqmo['createElement'], wnsqmo['createElement'] = ez3127['createElement'], bg5dk['createShaderCondition'] = ez3127['createShaderCondition'], mwoj['parseXMLFromString'] = ez3127['parseXMLFromString'], z3i172['_createInputElement'] = e173['_createInputElement'], ez3127['EnvConfig']['load'] = rkbgdx['prototype']['load'], rkbgdx['prototype']['load'] = ctu085['prototype']['load'], ez3127['isZiYu'] && fz31j && wx['onMessage'](function (ejz1f) {
        ejz1f['isLoad'] && (sm46qo['ziyuFileData'][ejz1f['url']] = ejz1f['data']);
      });
    }, ez3127['onMkdirCallBack'] = function ($9yxa, rkyxbd) {
      if (!$9yxa) sm46qo['filesListObj'] = JSON['parse'](rkyxbd['data']);
    }, ez3127['pixelRatio'] = function () {
      if (!ez3127['EnvConfig']['pixelRatioInt']) try {
        var njwoe = wx['getSystemInfoSync']();return ez3127['EnvConfig']['pixelRatioInt'] = njwoe['pixelRatio'], njwoe = njwoe, njwoe['pixelRatio'];
      } catch (u6p4t) {}return ez3127['EnvConfig']['pixelRatioInt'];
    }, ez3127['createElement'] = function (u8h5t) {
      if (u8h5t == 'canvas') {
        var p0th6;return ez3127['idx'] == 0x1 ? ez3127['isZiYu'] ? (p0th6 = sharedCanvas, p0th6['style'] = {}) : p0th6 = window['canvas'] : p0th6 = window['wx']['createCanvas'](), ez3127['idx']++, p0th6;
      } else {
        if (u8h5t == 'textarea' || u8h5t == 'input') return ez3127['onCreateInput'](u8h5t);else {
          if (u8h5t == 'div') {
            var bryxkd = ez3127['_preCreateElement'](u8h5t);return bryxkd['contains'] = function (owejf) {
              return null;
            }, bryxkd['removeChild'] = function (xrdka) {}, bryxkd;
          } else return ez3127['_preCreateElement'](u8h5t);
        }
      }
    }, ez3127['onCreateInput'] = function (f3z1je) {
      var fwejz = ez3127['_preCreateElement'](f3z1je);return fwejz['focus'] = e173['wxinputFocus'], fwejz['blur'] = e173['wxinputblur'], fwejz['style'] = {}, fwejz['value'] = 0x0, fwejz['parentElement'] = {}, fwejz['placeholder'] = {}, fwejz['type'] = {}, fwejz['setColor'] = function (cg8k5) {}, fwejz['setType'] = function (kxrdbg) {}, fwejz['setFontFace'] = function (rdgkx) {}, fwejz['addEventListener'] = function (yl$av) {}, fwejz['contains'] = function (y9xva$) {
        return null;
      }, fwejz['removeChild'] = function (e1fzj) {}, fwejz;
    }, ez3127['createShaderCondition'] = function (radx$y) {
      var $lv9 = this,
          gdrkbx = function () {
        var htp6u0 = radx$y;return $lv9[radx$y['replace']('this.', '')];
      };return gdrkbx;
    }, ez3127['EnvConfig'] = null, ez3127['window'] = null, ez3127['_preCreateElement'] = null, ez3127['_inited'] = ![], ez3127['wxRequest'] = null, ez3127['systemInfo'] = null, ez3127['version'] = '0.0.1', ez3127['isZiYu'] = ![], ez3127['isPosMsgYu'] = ![], ez3127['parseXMLFromString'] = function (zfje1w) {
      var kdryb, fjwn;zfje1w = zfje1w['replace'](/>\s+</g, '><');try {
        kdryb = new window['Parser']['DOMParser']()['parseFromString'](zfje1w, 'text/xml');
      } catch (qomn4s) {
        throw '需要引入xml解析库文件';
      }return kdryb;
    }, ez3127['idx'] = 0x1, ez3127;
  }(),
      xad = function () {
    function omnsjw() {}z1f2e3(omnsjw, 'laya.wx.mini.MiniImage');var vy9$x = omnsjw['prototype'];return vy9$x['_loadImage'] = function (ax$y) {
      var fenow = this,
          so4qn = ![];ax$y['indexOf']('layaNativeDir/') == -0x1 && (so4qn = !![], ax$y = t5uc['formatURL'](ax$y));if (!sm46qo['getFileInfo'](ax$y)) {
        if (ax$y['indexOf']('http://') != -0x1 || ax$y['indexOf']('https://') != -0x1) sm46qo['downImg'](ax$y, new bdkrg(omnsjw, omnsjw['onDownImgCallBack'], [ax$y, fenow]), ax$y);else omnsjw['onCreateImage'](ax$y, fenow, !![]);
      } else omnsjw['onCreateImage'](ax$y, fenow, !so4qn);
    }, omnsjw['onDownImgCallBack'] = function (adkyxr, fjnsw, z123ef) {
      if (!z123ef) omnsjw['onCreateImage'](adkyxr, fjnsw);else fjnsw['onError'](null);
    }, omnsjw['onCreateImage'] = function (gbdrx, t6u4ph, hp0t8u) {
      hp0t8u === void 0x0 && (hp0t8u = ![]);var phq6;if (!hp0t8u) {
        var sqwonm = sm46qo['getFileInfo'](gbdrx),
            jnsm = sqwonm['md5'];phq6 = sm46qo['getFileNativePath'](jnsm);
      } else phq6 = gbdrx;if (t6u4ph['imgCache'] == null) t6u4ph['imgCache'] = {};var bxykdr;function g8c0b5() {
        bxykdr['onload'] = null, bxykdr['onerror'] = null, delete t6u4ph['imgCache'][gbdrx];
      };var omq46s = function () {
        g8c0b5(), t6u4ph['onLoaded'](bxykdr);
      },
          t0uph = function () {
        g8c0b5(), t6u4ph['event']('error', 'Load image failed');
      };t6u4ph['_type'] == 'nativeimage' ? (bxykdr = new wnsqmo['window']['Image'](), bxykdr['crossOrigin'] = '', bxykdr['onload'] = omq46s, bxykdr['onerror'] = t0uph, bxykdr['src'] = phq6, t6u4ph['imgCache'][gbdrx] = bxykdr) : new xra$yd['create'](phq6, { 'onload': omq46s, 'onerror': t0uph, 'onCreate': function (qm6ph) {
          bxykdr = qm6ph, t6u4ph['imgCache'][gbdrx] = qm6ph;
        } });
    }, omnsjw;
  }(),
      e173 = function () {
    function uh6pt() {}return z1f2e3(uh6pt, 'laya.wx.mini.MiniInput'), uh6pt['_createInputElement'] = function () {
      z3i172['_initInput'](z3i172['area'] = wnsqmo['createElement']('textarea')), z3i172['_initInput'](z3i172['input'] = wnsqmo['createElement']('input')), z3i172['inputContainer'] = wnsqmo['createElement']('div'), z3i172['inputContainer']['style']['position'] = 'absolute', z3i172['inputContainer']['style']['zIndex'] = 0x186a0, wnsqmo['container']['appendChild'](z3i172['inputContainer']), z3i172['inputContainer']['setPos'] = function (g58ct, t8c0) {
        z3i172['inputContainer']['style']['left'] = g58ct + 'px', z3i172['inputContainer']['style']['top'] = t8c0 + 'px';
      }, nowqs['stage']['on']('resize', null, uh6pt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bg8c5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bkgc5['_soundClass'] = la_$v9, bkgc5['_musicClass'] = la_$v9;
    }, uh6pt['_onStageResize'] = function () {
      var enowf = nowqs['stage']['_canvasTransform']['identity']();enowf['scale'](wnsqmo['width'] / t805hu['canvas']['width'] / bg5dk['getPixelRatio'](), wnsqmo['height'] / t805hu['canvas']['height'] / bg5dk['getPixelRatio']());
    }, uh6pt['wxinputFocus'] = function (h60t) {
      var yx$a9v = z3i172['inputElement']['target'];if (yx$a9v && !yx$a9v['editable']) return;a$rxy['window']['wx']['offKeyboardConfirm'](), a$rxy['window']['wx']['offKeyboardInput'](), a$rxy['window']['wx']['showKeyboard']({ 'defaultValue': yx$a9v['text'], 'maxLength': yx$a9v['maxChars'], 'multiple': yx$a9v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (bdcrkg) {}, 'fail': function (yakx) {} }), a$rxy['window']['wx']['onKeyboardConfirm'](function (rayv$) {
        var mowqns = rayv$ ? rayv$['value'] : '';yx$a9v['text'] = mowqns, yx$a9v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), a$rxy['window']['wx']['onKeyboardInput'](function (xvay) {
        var jnmos = xvay ? xvay['value'] : '';if (!yx$a9v['multiline']) {
          if (jnmos['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yx$a9v['text'] = jnmos, yx$a9v['event']('input');
      });
    }, uh6pt['inputEnter'] = function () {
      z3i172['inputElement']['target']['focus'] = ![];
    }, uh6pt['wxinputblur'] = function () {
      uh6pt['hideKeyboard']();
    }, uh6pt['hideKeyboard'] = function () {
      a$rxy['window']['wx']['offKeyboardConfirm'](), a$rxy['window']['wx']['offKeyboardInput'](), a$rxy['window']['wx']['hideKeyboard']({ 'success': function (tphu64) {
          console['log']('隐藏键盘');
        }, 'fail': function (efjz13) {
          console['log']('隐藏键盘出错:' + (efjz13 ? efjz13['errMsg'] : ''));
        } });
    }, uh6pt;
  }(),
      ctu085 = function () {
    function hp46() {}z1f2e3(hp46, 'laya.wx.mini.MiniLoader');var sqmn4o = hp46['prototype'];return sqmn4o['load'] = function (qm46ps, mqo6s, neojw, axryv, u85ht0) {
      neojw === void 0x0 && (neojw = !![]), u85ht0 === void 0x0 && (u85ht0 = ![]);var xbrkdy = this;xbrkdy['_url'] = qm46ps;if (qm46ps['indexOf']('data:image') === 0x0) xbrkdy['_type'] = mqo6s = 'image';else xbrkdy['_type'] = mqo6s || (mqo6s = xbrkdy['getTypeFromUrl'](qm46ps));xbrkdy['_cache'] = neojw, xbrkdy['_data'] = null;var ez21f3 = 'ascii';if (qm46ps['indexOf']('.fnt') != -0x1) ez21f3 = 'utf8';else mqo6s == 'arraybuffer' && (ez21f3 = '');;var sm6oq = mwoj['getFileExtension'](qm46ps);if (hp46['_fileTypeArr']['indexOf'](sm6oq) != -0x1) a$rxy['EnvConfig']['load']['call'](this, qm46ps, mqo6s, neojw, axryv, u85ht0);else {
        if (!sm46qo['getFileInfo'](qm46ps)) {
          if (qm46ps['indexOf']('layaNativeDir/') != -0x1) {
            if (a$rxy['isZiYu']) {
              var z32e1f = sm46qo['ziyuFileData'][qm46ps];xbrkdy['onLoaded'](z32e1f);return;
            } else {
              cosnole['log']('read read'), sm46qo['read'](qm46ps, ez21f3, new bdkrg(hp46, hp46['onReadNativeCallBack'], [ez21f3, qm46ps, mqo6s, neojw, axryv, u85ht0, xbrkdy]));return;
            }
          }if (t5uc['rootPath'] == '') var u058t = qm46ps;else u058t = qm46ps['split'](t5uc['rootPath'])[0x0];qm46ps['indexOf']('http://') != -0x1 || qm46ps['indexOf']('https://') != -0x1 ? a$rxy['EnvConfig']['load']['call'](xbrkdy, qm46ps, mqo6s, neojw, axryv, u85ht0) : sm46qo['readFile'](u058t, ez21f3, new bdkrg(hp46, hp46['onReadNativeCallBack'], [ez21f3, qm46ps, mqo6s, neojw, axryv, u85ht0, xbrkdy]), qm46ps);
        } else a$rxy['EnvConfig']['load']['call'](this, qm46ps, mqo6s, neojw, axryv, u85ht0);
      }
    }, sqmn4o['resMgrLoad'] = function (k85cg, yaxr, fnjs, xa$dyr, _val9$, wsnjmo, uh60) {
      fnjs === void 0x0 && (fnjs = 0x0), xa$dyr === void 0x0 && (xa$dyr = ![]), _val9$ === void 0x0 && (_val9$ = ![]), wsnjmo === void 0x0 && (wsnjmo = 0x0), uh60 === void 0x0 && (uh60 = 0x3), k85cg['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k85cg), a$rxy['EnvConfig']['resMgrLoad'](k85cg, (gdbxr, h8tu, sp4q6) => {
        hp46['prototype']['resMgrLoadCallBack'](gdbxr, h8tu, sp4q6, yaxr);
      }, fnjs, xa$dyr, _val9$, wsnjmo, uh60);
    }, sqmn4o['resMgrLoadCallBack'] = function (t8cg5, mqo64s, th0p8u, $xrayv) {
      console['log']('buff:::', t8cg5, th0p8u, sm46qo['fileNativeDir'] + '///' + sm46qo['fileListName']), $xrayv(t8cg5, mqo64s, th0p8u);
    }, sqmn4o['clearRes'] = function (c85b0g, t5hu8) {
      t5hu8 === void 0x0 && (t5hu8 = ![]);var qn4sm = this;qn4sm['clearRes'](c85b0g, t5hu8);var rxyadk = sm46qo['getFileInfo'](c85b0g);if (rxyadk && (c85b0g['indexOf']('http://') != -0x1 || c85b0g['indexOf']('https://') != -0x1)) {
        var wfoejn = rxyadk['md5'],
            f2e1z3 = sm46qo['getFileNativePath'](wfoejn);sm46qo['remove'](f2e1z3);
      }
    }, hp46['onReadNativeCallBack'] = function (njowsm, rxadk, yva9$l, f21z3e, gdkxrb, wf, mosw, $vax9, wej1zf) {
      f21z3e === void 0x0 && (f21z3e = !![]), wf === void 0x0 && (wf = ![]), $vax9 === void 0x0 && ($vax9 = 0x0);if (!$vax9) {
        var rbgcdk;if (yva9$l == 'json' || yva9$l == 'atlas') rbgcdk = a$rxy['getJson'](wej1zf['data']);else yva9$l == 'xml' ? rbgcdk = mwoj['parseXMLFromString'](wej1zf['data']) : rbgcdk = wej1zf['data'];mosw['onLoaded'](rbgcdk), !a$rxy['isZiYu'] && a$rxy['isPosMsgYu'] && yva9$l != 'arraybuffer' && wx['postMessage']({ 'url': rxadk, 'data': rbgcdk, 'isLoad': !![] });
      } else $vax9 == 0x1 && a$rxy['EnvConfig']['load']['call'](mosw, rxadk, yva9$l, f21z3e, gdkxrb, wf);
    }, z3f1(hp46, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hp46;
  }(),
      sm46qo = function (efjz) {
    function put4() {
      put4['__super']['call'](this);;
    }return z1f2e3(put4, 'laya.wx.mini.MiniFileMgr', efjz), put4['isLoadFile'] = function (bckrg) {
      return put4['_fileTypeArr']['indexOf'](bckrg) != -0x1 ? !![] : ![];
    }, put4['getFileInfo'] = function (msp64q) {
      var ejzwf = msp64q['split']('?')[0x0],
          uqp6h = put4['filesListObj'][ejzwf];if (uqp6h == null) return null;else return uqp6h;return null;
    }, put4['onFileUpdate'] = function (arydx$, ef13j) {
      var u85ht = arydx$['split']('/'),
          z173i2 = u85ht[u85ht['length'] - 0x1],
          yradk = put4['getFileInfo'](ef13j);if (yradk == null) put4['onSaveFile'](ef13j, z173i2);else {
        if (yradk['readyUrl'] != ef13j) put4['remove'](z173i2, ef13j);
      }
    }, put4['exits'] = function (kbrcg, ck5bgd) {
      var crkdg = put4['getFileNativePath'](kbrcg);put4['fs']['getFileInfo']({ 'filePath': crkdg, 'success': function (nwsqm) {
          ck5bgd != null && ck5bgd['runWith']([0x0, nwsqm]);
        }, 'fail': function (onjwm) {
          ck5bgd != null && ck5bgd['runWith']([0x1, onjwm]);
        } });
    }, put4['read'] = function (mnqsow, ojwms, qpu6h4, ryxv$) {
      ojwms === void 0x0 && (ojwms = 'ascill'), ryxv$ === void 0x0 && (ryxv$ = '');var a9v;ryxv$ != '' ? a9v = put4['getFileNativePath'](mnqsow) : a9v = mnqsow, put4['fs']['readFile']({ 'filePath': a9v, 'encoding': ojwms, 'success': function ($xayd) {
          qpu6h4 != null && qpu6h4['runWith']([0x0, $xayd]);
        }, 'fail': function (phq4) {
          if (phq4 && ryxv$ != '') put4['down'](ryxv$, ojwms, qpu6h4, ryxv$);else qpu6h4 != null && qpu6h4['runWith']([0x1]);
        } });
    }, put4['readNativeFile'] = function (uh6pt0, ez1wj) {
      put4['fs']['readFile']({ 'filePath': uh6pt0, 'encoding': '', 'success': function (jmons) {
          ez1wj != null && ez1wj['runWith']([0x0]);
        }, 'fail': function (ps) {
          ez1wj != null && ez1wj['runWith']([0x1]);
        } });
    }, put4['down'] = function (fwez1, jz31, jw1efz, kdrgb) {
      jz31 === void 0x0 && (jz31 = 'ascill'), kdrgb === void 0x0 && (kdrgb = '');var ckgdr = put4['getFileNativePath'](kdrgb),
          dxaryk = put4['wxdown']({ 'url': fwez1, 'filePath': ckgdr, 'success': function (nzjwfe) {
          if (nzjwfe['statusCode'] === 0xc8) put4['readFile'](nzjwfe['filePath'], jz31, jw1efz, kdrgb);
        }, 'fail': function (vy9$la) {
          jw1efz != null && jw1efz['runWith']([0x1, vy9$la]);
        } });dxaryk['onProgressUpdate'](function (nzef) {
        jw1efz != null && jw1efz['runWith']([0x2, nzef['progress']]);
      });
    }, put4['readFile'] = function (gkrcbd, o46, x$arvy, ady) {
      o46 === void 0x0 && (o46 = 'ascill'), ady === void 0x0 && (ady = ''), put4['fs']['readFile']({ 'filePath': gkrcbd, 'encoding': o46, 'success': function (g850b) {
          if (gkrcbd['indexOf']('http://') != -0x1 || gkrcbd['indexOf']('https://') != -0x1) put4['onFileUpdate'](gkrcbd, ady);x$arvy != null && x$arvy['runWith']([0x0, g850b]);
        }, 'fail': function (m64qo) {
          if (m64qo) x$arvy != null && x$arvy['runWith']([0x1, m64qo]);
        } });
    }, put4['downImg'] = function (swnof, ojswnm, va$yr) {
      va$yr === void 0x0 && (va$yr = '');var kbxyd = put4['wxdown']({ 'url': swnof, 'success': function (qmo46s) {
          qmo46s['statusCode'] === 0xc8 && put4['copyFile'](qmo46s['tempFilePath'], va$yr, ojswnm);
        }, 'fail': function (hmq64) {
          ojswnm != null && ojswnm['runWith']([0x1, hmq64]);
        } });
    }, put4['copyFile'] = function (gbk8c5, so4qm, u6ht0p) {
      var fez2 = gbk8c5['split']('/'),
          $ay9xv = fez2[fez2['length'] - 0x1],
          x$avry = so4qm['split']('?')[0x0],
          bk58c = put4['getFileInfo'](so4qm),
          f3z = put4['getFileNativePath']($ay9xv);put4['fs']['copyFile']({ 'srcPath': gbk8c5, 'destPath': f3z, 'success': function (owefn) {
          if (!bk58c) put4['onSaveFile'](so4qm, $ay9xv), u6ht0p != null && u6ht0p['runWith']([0x0]);else {
            if (bk58c['readyUrl'] != so4qm) put4['remove']($ay9xv, so4qm, u6ht0p);
          }
        }, 'fail': function (sojwfn) {
          u6ht0p != null && u6ht0p['runWith']([0x1, sojwfn]);
        } });
    }, put4['getFileNativePath'] = function (ayxrk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ayxrk;
    }, put4['remove'] = function (g5c8b0, b5cdk, wjmns) {
      b5cdk === void 0x0 && (b5cdk = '');var wfneo = put4['getFileInfo'](b5cdk),
          ya$lv9 = put4['getFileNativePath'](wfneo['md5']);nowqs['loader']['clearRes'](wfneo['readyUrl']), put4['fs']['unlink']({ 'filePath': ya$lv9, 'success': function (dk5bcg) {
          if (b5cdk != '') put4['onSaveFile'](b5cdk, g5c8b0);wjmns != null && wjmns['runWith']([0x0]);
        }, 'fail': function (n4qsmo) {} });
    }, put4['onSaveFile'] = function (nmwso, t0ph8u) {
      var bdgr = nmwso['split']('?')[0x0];put4['filesListObj'][bdgr] = { 'md5': t0ph8u, 'readyUrl': nmwso }, put4['fs']['writeFile']({ 'filePath': put4['fileNativeDir'] + '/' + put4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](put4['filesListObj']), 'success': function (ptu06h) {
          console['log']('写入测试测试成功：', ptu06h);
        }, 'fail': function (t0ph8) {
          console['log']('写入测试测试失败：', t0ph8);
        } });
    }, put4['existDir'] = function (dkxrby, xrya) {
      put4['fs']['mkdir']({ 'dirPath': dkxrby, 'success': function (cg5t0) {
          xrya != null && xrya['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (enfzjw) {
          if (enfzjw['errMsg']['indexOf']('file already exists') != -0x1) put4['readSync'](put4['fileListName'], 'utf8', xrya);else xrya != null && xrya['runWith']([0x1, enfzjw]);
        } });
    }, put4['readSync'] = function (noje, jonsfw, xayv$, snjmow) {
      jonsfw === void 0x0 && (jonsfw = 'ascill'), snjmow === void 0x0 && (snjmow = '');var wosmj = put4['getFileNativePath'](noje),
          a$r;try {
        a$r = put4['fs']['readFileSync'](wosmj), xayv$ != null && xayv$['runWith']([0x0, { 'data': a$r }]);
      } catch (rgbckd) {
        xayv$ != null && xayv$['runWith']([0x1]);
      }
    }, put4['readCache'] = function () {}, put4['writeCache'] = function (dkcg5b) {
      var cg0 = readyUrl['split']('?')[0x0];put4['filesListObj'][cg0] = { 'md5': md5Name, 'readyUrl': readyUrl }, put4['fs']['writeFile']({ 'filePath': put4['fileNativeDir'] + '/' + put4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](put4['filesListObj']), 'success': function (bgkdcr) {}, 'fail': function (cgd5b) {} });
    }, put4['setNativeFileDir'] = function (kb5c) {
      put4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + kb5c;
    }, put4['filesListObj'] = {}, put4['fileNativeDir'] = null, put4['fileListName'] = 'layaairfiles.txt', put4['ziyuFileData'] = {}, z3f1(put4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), put4;
  }(cu8t),
      la_$v9 = function (tu4ph6) {
    function uh58() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], uh58['__super']['call'](this), this['_sound'] = uh58['_createSound']();
    }z1f2e3(uh58, 'laya.wx.mini.MiniSound', tu4ph6);var e132f = uh58['prototype'];return e132f['load'] = function (bdgck5) {
      var bk8gc5 = this;bdgck5 = t5uc['formatURL'](bdgck5), this['url'] = bdgck5;if (uh58['_audioCache'][bdgck5]) {
        this['event']('complete');return;
      }function $ax9vy() {
        if (uh58['_null'] != undefined) bk8gc5['_sound']['onCanplay'](uh58['_null']), bk8gc5['_sound']['onError'](uh58['_null']);else try {
          bk8gc5['_sound']['onCanplay'](null), bk8gc5['_sound']['onError'](null), uh58['_null'] = null;
        } catch (l9av$y) {
          console['warn']('[wxmini] _clearSound:' + l9av$y), bk8gc5['_sound']['onCanplay'](qmp64h), bk8gc5['_sound']['onError'](qmp64h), uh58['_null'] = qmp64h;
        }
      }function xkdbry() {
        $ax9vy(), smp46q['loaded'] = !![], smp46q['event']('complete'), uh58['_audioCache'][smp46q['url']] = smp46q;
      }function bxrkg(xdrbky) {
        console['error']('errCode=' + xdrbky['errCode'] + '  errMsg=' + xdrbky['errMsg']), $ax9vy(), smp46q['event']('error');
      }function qmp64h() {}this['_sound']['onCanplay'](xkdbry), this['_sound']['onError'](bxrkg), this['_sound']['src'] = bdgck5;var smp46q = this;
    }, e132f['play'] = function (xv$ry, f2e13) {
      xv$ry === void 0x0 && (xv$ry = 0x0), f2e13 === void 0x0 && (f2e13 = 0x0);var jf13z;if (this['url'] == bkgc5['_tMusic']) {
        if (!uh58['_musicAudio']) uh58['_musicAudio'] = uh58['_createSound']();jf13z = uh58['_musicAudio'];
      } else jf13z = uh58['_createSound']();jf13z['src'] = this['url'];var oqnms4 = new uh05t(jf13z);return oqnms4['url'] = this['url'], oqnms4['loops'] = f2e13, oqnms4['startTime'] = xv$ry, oqnms4['play'](), bkgc5['addChannel'](oqnms4), oqnms4;
    }, e132f['dispose'] = function () {
      var bgc5kd = uh58['_audioCache'][this['url']];bgc5kd && (bgc5kd['src'] = '', delete uh58['_audioCache'][this['url']]);
    }, yrv(0x0, e132f, 'duration', function () {
      return this['_sound']['duration'];
    }), uh58['_createSound'] = function () {
      return uh58['_id']++, a$rxy['window']['wx']['createInnerAudioContext']();
    }, uh58['_musicAudio'] = null, uh58['_id'] = 0x0, uh58['_audioCache'] = {}, uh58['_null'] = undefined, uh58;
  }(cu8t),
      uh05t = function (jwnosf) {
    function f1zwj(avy$l9) {
      this['_audio'] = null, this['_onEnd'] = null, f1zwj['__super']['call'](this), this['_audio'] = avy$l9, this['_onEnd'] = mwoj['bind'](this['__onEnd'], this), avy$l9['onEnded'](this['_onEnd']);
    }z1f2e3(f1zwj, 'laya.wx.mini.MiniSoundChannel', jwnosf);var onwsm = f1zwj['prototype'];return onwsm['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nowqs['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, onwsm['__onNull'] = function () {}, onwsm['play'] = function () {
      this['isStopped'] = ![], bkgc5['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, onwsm['stop'] = function () {
      this['isStopped'] = !![], bkgc5['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (f1zwj['_null'] != undefined) this['_audio']['onEnded'](f1zwj['_null']);else try {
        this['_audio']['onEnded'](null), f1zwj['_null'] = null;
      } catch (vayr) {
        console['warn']('[wxmini] stop:' + vayr), this['_audio']['onEnded'](mwoj['bind'](this['__onNull'], this)), f1zwj['_null'] = mwoj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, onwsm['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, onwsm['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bkgc5['addChannel'](this), this['_audio']['play']();
    }, yrv(0x0, onwsm, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), yrv(0x0, onwsm, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), yrv(0x0, onwsm, 'volume', function () {
      return 0x1;
    }, function (bxkdrg) {}), f1zwj['_null'] = undefined, f1zwj;
  }(dkcbgr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bg850 in Laya) {
    var ya$drx = Laya[bg850];ya$drx && ya$drx['__isclass'] && (exports[bg850] = ya$drx);
  }
});