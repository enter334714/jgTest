var _ = wx.y$;
(function (window, document, onkmj) {
  var utvwsx = onkmj['un'],
      upqr = onkmj['uns'],
      osqnp = onkmj['static'],
      rqupt = onkmj['class'],
      hgikj = onkmj['getset'],
      xusvtw = onkmj['__newvec'],
      kijhfg = laya['utils']['Browser'],
      poqrm = laya['events']['Event'],
      yx$w = laya['events']['EventDispatcher'],
      ywvuzx = laya['resource']['HTMLImage'],
      wvxu = laya['utils']['Handler'],
      twsvx = laya['display']['Input'],
      y0xz_$ = laya['net']['Loader'],
      lokjn = laya['maths']['Matrix'],
      hjlk = laya['renders']['Render'],
      rpoqn = laya['utils']['RunDriver'],
      v$zxw = laya['media']['Sound'],
      dfehi = laya['media']['SoundChannel'],
      fcedab = laya['media']['SoundManager'],
      nlmjok = laya['display']['Stage'],
      orqpmn = laya['net']['URL'],
      npmql = laya['utils']['Utils'],
      bdea = function () {
    function opmlk() {}return rqupt(opmlk, 'laya.wx.mini.MiniAdpter'), opmlk['getJson'] = function (xzyuw) {
      return JSON['parse'](xzyuw);
    }, opmlk['init'] = function (fighk, fbeac) {
      fighk === void 0x0 && (fighk = ![]), fbeac === void 0x0 && (fbeac = ![]);if (opmlk['_inited']) return;opmlk['window'] = window;if (opmlk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;opmlk['_inited'] = !![], opmlk['isZiYu'] = fbeac, opmlk['isPosMsgYu'] = fighk, opmlk['EnvConfig'] = {}, !opmlk['isZiYu'] && (ebfgdc['setNativeFileDir']('/layaairGame'), ebfgdc['existDir'](ebfgdc['fileNativeDir'], wvxu['create'](opmlk, opmlk['onMkdirCallBack']))), opmlk['window']['focus'] = function () {}, onkmj['getUrlPath'] = function () {}, opmlk['window']['logtime'] = function (quvsr) {}, opmlk['window']['alertTimeLog'] = function (_$yzw) {}, opmlk['window']['resetShareInfo'] = function () {}, opmlk['window']['CanvasRenderingContext2D'] = function () {}, opmlk['window']['CanvasRenderingContext2D']['prototype'] = opmlk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], opmlk['window']['document']['body']['appendChild'] = function () {}, opmlk['EnvConfig']['pixelRatioInt'] = 0x0, rpoqn['getPixelRatio'] = opmlk['pixelRatio'], opmlk['_preCreateElement'] = kijhfg['createElement'], kijhfg['createElement'] = opmlk['createElement'], rpoqn['createShaderCondition'] = opmlk['createShaderCondition'], npmql['parseXMLFromString'] = opmlk['parseXMLFromString'], twsvx['_createInputElement'] = wtuvsr['_createInputElement'], opmlk['EnvConfig']['load'] = y0xz_$['prototype']['load'], y0xz_$['prototype']['load'] = rtswu['prototype']['load'], opmlk['isZiYu'] && fighk && wx['onMessage'](function (uvwyzx) {
        uvwyzx['isLoad'] && (ebfgdc['ziyuFileData'][uvwyzx['url']] = uvwyzx['data']);
      });
    }, opmlk['onMkdirCallBack'] = function ($01zy_, ghid) {
      if (!$01zy_) ebfgdc['filesListObj'] = JSON['parse'](ghid['data']);
    }, opmlk['pixelRatio'] = function () {
      if (!opmlk['EnvConfig']['pixelRatioInt']) try {
        var xuzyv = wx['getSystemInfoSync']();return opmlk['EnvConfig']['pixelRatioInt'] = xuzyv['pixelRatio'], xuzyv = xuzyv, xuzyv['pixelRatio'];
      } catch (rptsuq) {}return opmlk['EnvConfig']['pixelRatioInt'];
    }, opmlk['createElement'] = function (tpuq) {
      if (tpuq == 'canvas') {
        var lmjhk;return opmlk['idx'] == 0x1 ? opmlk['isZiYu'] ? (lmjhk = sharedCanvas, lmjhk['style'] = {}) : lmjhk = window['canvas'] : lmjhk = window['wx']['createCanvas'](), opmlk['idx']++, lmjhk;
      } else {
        if (tpuq == 'textarea' || tpuq == 'input') return opmlk['onCreateInput'](tpuq);else {
          if (tpuq == 'div') {
            var lopq = opmlk['_preCreateElement'](tpuq);return lopq['contains'] = function (pmnl) {
              return null;
            }, lopq['removeChild'] = function (fdbce) {}, lopq;
          } else return opmlk['_preCreateElement'](tpuq);
        }
      }
    }, opmlk['onCreateInput'] = function (vutqsr) {
      var omnpr = opmlk['_preCreateElement'](vutqsr);return omnpr['focus'] = wtuvsr['wxinputFocus'], omnpr['blur'] = wtuvsr['wxinputblur'], omnpr['style'] = {}, omnpr['value'] = 0x0, omnpr['parentElement'] = {}, omnpr['placeholder'] = {}, omnpr['type'] = {}, omnpr['setColor'] = function (hjki) {}, omnpr['setType'] = function (iegfh) {}, omnpr['setFontFace'] = function (jfgkih) {}, omnpr['addEventListener'] = function (xvuywt) {}, omnpr['contains'] = function (nmlo) {
        return null;
      }, omnpr['removeChild'] = function (xuvz) {}, omnpr;
    }, opmlk['createShaderCondition'] = function (y$_10) {
      var miklhj = this,
          uwtvs = function () {
        var z2_01 = y$_10;return miklhj[y$_10['replace']('this.', '')];
      };return uwtvs;
    }, opmlk['EnvConfig'] = null, opmlk['window'] = null, opmlk['_preCreateElement'] = null, opmlk['_inited'] = ![], opmlk['wxRequest'] = null, opmlk['systemInfo'] = null, opmlk['version'] = '0.0.1', opmlk['isZiYu'] = ![], opmlk['isPosMsgYu'] = ![], opmlk['parseXMLFromString'] = function (lmkno) {
      var mnko, jfkig;lmkno = lmkno['replace'](/>\s+</g, '><');try {
        mnko = new window['Parser']['DOMParser']()['parseFromString'](lmkno, 'text/xml');
      } catch (yvxu) {
        throw '需要引入xml解析库文件';
      }return mnko;
    }, opmlk['idx'] = 0x1, opmlk;
  }(),
      chfd = function () {
    function hmiklj() {}rqupt(hmiklj, 'laya.wx.mini.MiniImage');var nlpko = hmiklj['prototype'];return nlpko['_loadImage'] = function (wzyvx$) {
      var tvuswr = this,
          njkolm = ![];wzyvx$['indexOf']('layaNativeDir/') == -0x1 && (njkolm = !![], wzyvx$ = orqpmn['formatURL'](wzyvx$));if (!ebfgdc['getFileInfo'](wzyvx$)) {
        if (wzyvx$['indexOf']('http://') != -0x1 || wzyvx$['indexOf']('https://') != -0x1) ebfgdc['downImg'](wzyvx$, new wvxu(hmiklj, hmiklj['onDownImgCallBack'], [wzyvx$, tvuswr]), wzyvx$);else hmiklj['onCreateImage'](wzyvx$, tvuswr, !![]);
      } else hmiklj['onCreateImage'](wzyvx$, tvuswr, !njkolm);
    }, hmiklj['onDownImgCallBack'] = function (monjkl, ifhej, _20z1$) {
      if (!_20z1$) hmiklj['onCreateImage'](monjkl, ifhej);else ifhej['onError'](null);
    }, hmiklj['onCreateImage'] = function (edfbgc, urpstq, $z1y_0) {
      $z1y_0 === void 0x0 && ($z1y_0 = ![]);var cdgf;if (!$z1y_0) {
        var npmqol = ebfgdc['getFileInfo'](edfbgc),
            xvyw$z = npmqol['md5'];cdgf = ebfgdc['getFileNativePath'](xvyw$z);
      } else cdgf = edfbgc;if (urpstq['imgCache'] == null) urpstq['imgCache'] = {};var ihgefd;function xyzvu() {
        ihgefd['onload'] = null, ihgefd['onerror'] = null, delete urpstq['imgCache'][edfbgc];
      };var uyvxzw = function () {
        xyzvu(), urpstq['onLoaded'](ihgefd);
      },
          yx$0 = function () {
        xyzvu(), urpstq['event']('error', 'Load image failed');
      };urpstq['_type'] == 'nativeimage' ? (ihgefd = new kijhfg['window']['Image'](), ihgefd['crossOrigin'] = '', ihgefd['onload'] = uyvxzw, ihgefd['onerror'] = yx$0, ihgefd['src'] = cdgf, urpstq['imgCache'][edfbgc] = ihgefd) : new ywvuzx['create'](cdgf, { 'onload': uyvxzw, 'onerror': yx$0, 'onCreate': function (nqopml) {
          ihgefd = nqopml, urpstq['imgCache'][edfbgc] = nqopml;
        } });
    }, hmiklj;
  }(),
      wtuvsr = function () {
    function snqp() {}return rqupt(snqp, 'laya.wx.mini.MiniInput'), snqp['_createInputElement'] = function () {
      twsvx['_initInput'](twsvx['area'] = kijhfg['createElement']('textarea')), twsvx['_initInput'](twsvx['input'] = kijhfg['createElement']('input')), twsvx['inputContainer'] = kijhfg['createElement']('div'), twsvx['inputContainer']['style']['position'] = 'absolute', twsvx['inputContainer']['style']['zIndex'] = 0x186a0, kijhfg['container']['appendChild'](twsvx['inputContainer']), twsvx['inputContainer']['setPos'] = function (_$302, hfjeig) {
        twsvx['inputContainer']['style']['left'] = _$302 + 'px', twsvx['inputContainer']['style']['top'] = hfjeig + 'px';
      }, onkmj['stage']['on']('resize', null, snqp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nrqsp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fcedab['_soundClass'] = ijgeh, fcedab['_musicClass'] = ijgeh;
    }, snqp['_onStageResize'] = function () {
      var _$wyx = onkmj['stage']['_canvasTransform']['identity']();_$wyx['scale'](kijhfg['width'] / hjlk['canvas']['width'] / rpoqn['getPixelRatio'](), kijhfg['height'] / hjlk['canvas']['height'] / rpoqn['getPixelRatio']());
    }, snqp['wxinputFocus'] = function (hkigl) {
      var rpqto = twsvx['inputElement']['target'];if (rpqto && !rpqto['editable']) return;bdea['window']['wx']['offKeyboardConfirm'](), bdea['window']['wx']['offKeyboardInput'](), bdea['window']['wx']['showKeyboard']({ 'defaultValue': rpqto['text'], 'maxLength': rpqto['maxChars'], 'multiple': rpqto['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qpnor) {}, 'fail': function (gdbfce) {} }), bdea['window']['wx']['onKeyboardConfirm'](function (fdea) {
        var pnkml = fdea ? fdea['value'] : '';rpqto['text'] = pnkml, rpqto['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bdea['window']['wx']['onKeyboardInput'](function (yz0x_) {
        var vrusqt = yz0x_ ? yz0x_['value'] : '';if (!rpqto['multiline']) {
          if (vrusqt['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }rpqto['text'] = vrusqt, rpqto['event']('input');
      });
    }, snqp['inputEnter'] = function () {
      twsvx['inputElement']['target']['focus'] = ![];
    }, snqp['wxinputblur'] = function () {
      snqp['hideKeyboard']();
    }, snqp['hideKeyboard'] = function () {
      bdea['window']['wx']['offKeyboardConfirm'](), bdea['window']['wx']['offKeyboardInput'](), bdea['window']['wx']['hideKeyboard']({ 'success': function (dfhei) {
          console['log']('隐藏键盘');
        }, 'fail': function (jlkmni) {
          console['log']('隐藏键盘出错:' + (jlkmni ? jlkmni['errMsg'] : ''));
        } });
    }, snqp;
  }(),
      rtswu = function () {
    function jklg() {}rqupt(jklg, 'laya.wx.mini.MiniLoader');var gehfj = jklg['prototype'];return gehfj['load'] = function (hefdcg, topqr, w$vxzy, jnli, $0y1_) {
      w$vxzy === void 0x0 && (w$vxzy = !![]), $0y1_ === void 0x0 && ($0y1_ = ![]);var qpnrso = this;qpnrso['_url'] = hefdcg;if (hefdcg['indexOf']('data:image') === 0x0) qpnrso['_type'] = topqr = 'image';else qpnrso['_type'] = topqr || (topqr = qpnrso['getTypeFromUrl'](hefdcg));qpnrso['_cache'] = w$vxzy, qpnrso['_data'] = null;var gbcdfe = 'ascii';if (hefdcg['indexOf']('.fnt') != -0x1) gbcdfe = 'utf8';else topqr == 'arraybuffer' && (gbcdfe = '');;var cdbfge = npmql['getFileExtension'](hefdcg);if (jklg['_fileTypeArr']['indexOf'](cdbfge) != -0x1) bdea['EnvConfig']['load']['call'](this, hefdcg, topqr, w$vxzy, jnli, $0y1_);else {
        if (!ebfgdc['getFileInfo'](hefdcg)) {
          if (hefdcg['indexOf']('layaNativeDir/') != -0x1) {
            if (bdea['isZiYu']) {
              var jlmik = ebfgdc['ziyuFileData'][hefdcg];qpnrso['onLoaded'](jlmik);return;
            } else {
              cosnole['log']('read read'), ebfgdc['read'](hefdcg, gbcdfe, new wvxu(jklg, jklg['onReadNativeCallBack'], [gbcdfe, hefdcg, topqr, w$vxzy, jnli, $0y1_, qpnrso]));return;
            }
          }if (orqpmn['rootPath'] == '') var fegcbd = hefdcg;else fegcbd = hefdcg['split'](orqpmn['rootPath'])[0x0];hefdcg['indexOf']('http://') != -0x1 || hefdcg['indexOf']('https://') != -0x1 ? bdea['EnvConfig']['load']['call'](qpnrso, hefdcg, topqr, w$vxzy, jnli, $0y1_) : ebfgdc['readFile'](fegcbd, gbcdfe, new wvxu(jklg, jklg['onReadNativeCallBack'], [gbcdfe, hefdcg, topqr, w$vxzy, jnli, $0y1_, qpnrso]), hefdcg);
        } else bdea['EnvConfig']['load']['call'](this, hefdcg, topqr, w$vxzy, jnli, $0y1_);
      }
    }, gehfj['resMgrLoad'] = function (poknlm, pmnko, nokmlj, uyzxwv, mrpnq, wvtyxu, idefhg) {
      nokmlj === void 0x0 && (nokmlj = 0x0), uyzxwv === void 0x0 && (uyzxwv = ![]), mrpnq === void 0x0 && (mrpnq = ![]), wvtyxu === void 0x0 && (wvtyxu = 0x0), idefhg === void 0x0 && (idefhg = 0x3), poknlm['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', poknlm), bdea['EnvConfig']['resMgrLoad'](poknlm, (hegfji, afdec, ifjkg) => {
        jklg['prototype']['resMgrLoadCallBack'](hegfji, afdec, ifjkg, pmnko);
      }, nokmlj, uyzxwv, mrpnq, wvtyxu, idefhg);
    }, gehfj['resMgrLoadCallBack'] = function (onkjm, lhkjm, $01_yz, eihjf) {
      console['log']('buff:::', onkjm, $01_yz, ebfgdc['fileNativeDir'] + '///' + ebfgdc['fileListName']), eihjf(onkjm, lhkjm, $01_yz);
    }, gehfj['clearRes'] = function (tspqor, cegfdh) {
      cegfdh === void 0x0 && (cegfdh = ![]);var gdcfe = this;gdcfe['clearRes'](tspqor, cegfdh);var wyvzux = ebfgdc['getFileInfo'](tspqor);if (wyvzux && (tspqor['indexOf']('http://') != -0x1 || tspqor['indexOf']('https://') != -0x1)) {
        var qmprn = wyvzux['md5'],
            knmijl = ebfgdc['getFileNativePath'](qmprn);ebfgdc['remove'](knmijl);
      }
    }, jklg['onReadNativeCallBack'] = function (xy_$z0, qnpmol, ljon, lhjkmi, lhkjig, bdecaf, z$_0yx, gjeh, olnmpq) {
      lhjkmi === void 0x0 && (lhjkmi = !![]), bdecaf === void 0x0 && (bdecaf = ![]), gjeh === void 0x0 && (gjeh = 0x0);if (!gjeh) {
        var opnsr;if (ljon == 'json' || ljon == 'atlas') opnsr = bdea['getJson'](olnmpq['data']);else ljon == 'xml' ? opnsr = npmql['parseXMLFromString'](olnmpq['data']) : opnsr = olnmpq['data'];z$_0yx['onLoaded'](opnsr), !bdea['isZiYu'] && bdea['isPosMsgYu'] && ljon != 'arraybuffer' && wx['postMessage']({ 'url': qnpmol, 'data': opnsr, 'isLoad': !![] });
      } else gjeh == 0x1 && bdea['EnvConfig']['load']['call'](z$_0yx, qnpmol, ljon, lhjkmi, lhkjig, bdecaf);
    }, osqnp(jklg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jklg;
  }(),
      ebfgdc = function ($_z102) {
    function ehc() {
      ehc['__super']['call'](this);;
    }return rqupt(ehc, 'laya.wx.mini.MiniFileMgr', $_z102), ehc['isLoadFile'] = function (mlkhi) {
      return ehc['_fileTypeArr']['indexOf'](mlkhi) != -0x1 ? !![] : ![];
    }, ehc['getFileInfo'] = function (uqps) {
      var dfcg = uqps['split']('?')[0x0],
          npoqrm = ehc['filesListObj'][dfcg];if (npoqrm == null) return null;else return npoqrm;return null;
    }, ehc['onFileUpdate'] = function ($1z_0y, twru) {
      var uwyzx = $1z_0y['split']('/'),
          srqot = uwyzx[uwyzx['length'] - 0x1],
          quprst = ehc['getFileInfo'](twru);if (quprst == null) ehc['onSaveFile'](twru, srqot);else {
        if (quprst['readyUrl'] != twru) ehc['remove'](srqot, twru);
      }
    }, ehc['exits'] = function (qmpnol, rotp) {
      var hijglk = ehc['getFileNativePath'](qmpnol);ehc['fs']['getFileInfo']({ 'filePath': hijglk, 'success': function (hmljki) {
          rotp != null && rotp['runWith']([0x0, hmljki]);
        }, 'fail': function (ojln) {
          rotp != null && rotp['runWith']([0x1, ojln]);
        } });
    }, ehc['read'] = function (dcgfb, lpmk, $0_13, hidgfe) {
      lpmk === void 0x0 && (lpmk = 'ascill'), hidgfe === void 0x0 && (hidgfe = '');var yw$vz;hidgfe != '' ? yw$vz = ehc['getFileNativePath'](dcgfb) : yw$vz = dcgfb, ehc['fs']['readFile']({ 'filePath': yw$vz, 'encoding': lpmk, 'success': function (jmklo) {
          $0_13 != null && $0_13['runWith']([0x0, jmklo]);
        }, 'fail': function (acebd) {
          if (acebd && hidgfe != '') ehc['down'](hidgfe, lpmk, $0_13, hidgfe);else $0_13 != null && $0_13['runWith']([0x1]);
        } });
    }, ehc['readNativeFile'] = function (igfehd, cfhdeg) {
      ehc['fs']['readFile']({ 'filePath': igfehd, 'encoding': '', 'success': function (mjkihl) {
          cfhdeg != null && cfhdeg['runWith']([0x0]);
        }, 'fail': function (cefgb) {
          cfhdeg != null && cfhdeg['runWith']([0x1]);
        } });
    }, ehc['down'] = function (y$wzx_, _32$10, fehigd, dgce) {
      _32$10 === void 0x0 && (_32$10 = 'ascill'), dgce === void 0x0 && (dgce = '');var sutv = ehc['getFileNativePath'](dgce),
          yvwut = ehc['wxdown']({ 'url': y$wzx_, 'filePath': sutv, 'success': function (deifh) {
          if (deifh['statusCode'] === 0xc8) ehc['readFile'](deifh['filePath'], _32$10, fehigd, dgce);
        }, 'fail': function (daecbf) {
          fehigd != null && fehigd['runWith']([0x1, daecbf]);
        } });yvwut['onProgressUpdate'](function (jnkom) {
        fehigd != null && fehigd['runWith']([0x2, jnkom['progress']]);
      });
    }, ehc['readFile'] = function (_w$yx, edcbg, uvwrts, ruqv) {
      edcbg === void 0x0 && (edcbg = 'ascill'), ruqv === void 0x0 && (ruqv = ''), ehc['fs']['readFile']({ 'filePath': _w$yx, 'encoding': edcbg, 'success': function (_3$2) {
          if (_w$yx['indexOf']('http://') != -0x1 || _w$yx['indexOf']('https://') != -0x1) ehc['onFileUpdate'](_w$yx, ruqv);uvwrts != null && uvwrts['runWith']([0x0, _3$2]);
        }, 'fail': function (urvswt) {
          if (urvswt) uvwrts != null && uvwrts['runWith']([0x1, urvswt]);
        } });
    }, ehc['downImg'] = function (kmlnjo, psrqt, mnjilk) {
      mnjilk === void 0x0 && (mnjilk = '');var onkmjl = ehc['wxdown']({ 'url': kmlnjo, 'success': function (vyxwt) {
          vyxwt['statusCode'] === 0xc8 && ehc['copyFile'](vyxwt['tempFilePath'], mnjilk, psrqt);
        }, 'fail': function (snqro) {
          psrqt != null && psrqt['runWith']([0x1, snqro]);
        } });
    }, ehc['copyFile'] = function (spqtro, z2_$10, yvx$zw) {
      var xwvyuz = spqtro['split']('/'),
          abecd = xwvyuz[xwvyuz['length'] - 0x1],
          tvruqs = z2_$10['split']('?')[0x0],
          _wzxy = ehc['getFileInfo'](z2_$10),
          jeigfh = ehc['getFileNativePath'](abecd);ehc['fs']['copyFile']({ 'srcPath': spqtro, 'destPath': jeigfh, 'success': function (_y$01z) {
          if (!_wzxy) ehc['onSaveFile'](z2_$10, abecd), yvx$zw != null && yvx$zw['runWith']([0x0]);else {
            if (_wzxy['readyUrl'] != z2_$10) ehc['remove'](abecd, z2_$10, yvx$zw);
          }
        }, 'fail': function (eihgj) {
          yvx$zw != null && yvx$zw['runWith']([0x1, eihgj]);
        } });
    }, ehc['getFileNativePath'] = function (rompn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rompn;
    }, ehc['remove'] = function (sqtpru, yz$_0x, _zxw$y) {
      yz$_0x === void 0x0 && (yz$_0x = '');var klmi = ehc['getFileInfo'](yz$_0x),
          utyvw = ehc['getFileNativePath'](klmi['md5']);onkmj['loader']['clearRes'](klmi['readyUrl']), ehc['fs']['unlink']({ 'filePath': utyvw, 'success': function (stropq) {
          if (yz$_0x != '') ehc['onSaveFile'](yz$_0x, sqtpru);_zxw$y != null && _zxw$y['runWith']([0x0]);
        }, 'fail': function (pronqs) {} });
    }, ehc['onSaveFile'] = function (jhifg, wstxvu) {
      var xwvyu = jhifg['split']('?')[0x0];ehc['filesListObj'][xwvyu] = { 'md5': wstxvu, 'readyUrl': jhifg }, ehc['fs']['writeFile']({ 'filePath': ehc['fileNativeDir'] + '/' + ehc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ehc['filesListObj']), 'success': function (qponrs) {
          console['log']('写入测试测试成功：', qponrs);
        }, 'fail': function (_1zy$) {
          console['log']('写入测试测试失败：', _1zy$);
        } });
    }, ehc['existDir'] = function (kjlig, omrnqp) {
      ehc['fs']['mkdir']({ 'dirPath': kjlig, 'success': function (fjgehi) {
          omrnqp != null && omrnqp['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ikjmhl) {
          if (ikjmhl['errMsg']['indexOf']('file already exists') != -0x1) ehc['readSync'](ehc['fileListName'], 'utf8', omrnqp);else omrnqp != null && omrnqp['runWith']([0x1, ikjmhl]);
        } });
    }, ehc['readSync'] = function (z$_0xy, ehfcd, kfgijh, rmpoq) {
      ehfcd === void 0x0 && (ehfcd = 'ascill'), rmpoq === void 0x0 && (rmpoq = '');var yx$_z = ehc['getFileNativePath'](z$_0xy),
          jhfik;try {
        jhfik = ehc['fs']['readFileSync'](yx$_z), kfgijh != null && kfgijh['runWith']([0x0, { 'data': jhfik }]);
      } catch (dhfei) {
        kfgijh != null && kfgijh['runWith']([0x1]);
      }
    }, ehc['readCache'] = function () {}, ehc['writeCache'] = function (twvuxs) {
      var uvzxwy = readyUrl['split']('?')[0x0];ehc['filesListObj'][uvzxwy] = { 'md5': md5Name, 'readyUrl': readyUrl }, ehc['fs']['writeFile']({ 'filePath': ehc['fileNativeDir'] + '/' + ehc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ehc['filesListObj']), 'success': function (z_0x$y) {}, 'fail': function (hlikmj) {} });
    }, ehc['setNativeFileDir'] = function (rvqsut) {
      ehc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rvqsut;
    }, ehc['filesListObj'] = {}, ehc['fileNativeDir'] = null, ehc['fileListName'] = 'layaairfiles.txt', ehc['ziyuFileData'] = {}, osqnp(ehc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ehc;
  }(yx$w),
      ijgeh = function ($02_1) {
    function dchef() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], dchef['__super']['call'](this), this['_sound'] = dchef['_createSound']();
    }rqupt(dchef, 'laya.wx.mini.MiniSound', $02_1);var wvzxuy = dchef['prototype'];return wvzxuy['load'] = function (cdefba) {
      var kijhlg = this;cdefba = orqpmn['formatURL'](cdefba), this['url'] = cdefba;if (dchef['_audioCache'][cdefba]) {
        this['event']('complete');return;
      }function vx$zyw() {
        if (dchef['_null'] != undefined) kijhlg['_sound']['onCanplay'](dchef['_null']), kijhlg['_sound']['onError'](dchef['_null']);else try {
          kijhlg['_sound']['onCanplay'](null), kijhlg['_sound']['onError'](null), dchef['_null'] = null;
        } catch (fijheg) {
          console['warn']('[wxmini] _clearSound:' + fijheg), kijhlg['_sound']['onCanplay']($1y_), kijhlg['_sound']['onError']($1y_), dchef['_null'] = $1y_;
        }
      }function ptrqsu() {
        vx$zyw(), ifkhj['loaded'] = !![], ifkhj['event']('complete'), dchef['_audioCache'][ifkhj['url']] = ifkhj;
      }function zw$_y(tsrvu) {
        console['error']('errCode=' + tsrvu['errCode'] + '  errMsg=' + tsrvu['errMsg']), vx$zyw(), ifkhj['event']('error');
      }function $1y_() {}this['_sound']['onCanplay'](ptrqsu), this['_sound']['onError'](zw$_y), this['_sound']['src'] = cdefba;var ifkhj = this;
    }, wvzxuy['play'] = function (rusvtq, igejf) {
      rusvtq === void 0x0 && (rusvtq = 0x0), igejf === void 0x0 && (igejf = 0x0);var deac;if (this['url'] == fcedab['_tMusic']) {
        if (!dchef['_musicAudio']) dchef['_musicAudio'] = dchef['_createSound']();deac = dchef['_musicAudio'];
      } else deac = dchef['_createSound']();deac['src'] = this['url'];var qtosr = new iejhgf(deac);return qtosr['url'] = this['url'], qtosr['loops'] = igejf, qtosr['startTime'] = rusvtq, qtosr['play'](), fcedab['addChannel'](qtosr), qtosr;
    }, wvzxuy['dispose'] = function () {
      var orq = dchef['_audioCache'][this['url']];orq && (orq['src'] = '', delete dchef['_audioCache'][this['url']]);
    }, hgikj(0x0, wvzxuy, 'duration', function () {
      return this['_sound']['duration'];
    }), dchef['_createSound'] = function () {
      return dchef['_id']++, bdea['window']['wx']['createInnerAudioContext']();
    }, dchef['_musicAudio'] = null, dchef['_id'] = 0x0, dchef['_audioCache'] = {}, dchef['_null'] = undefined, dchef;
  }(yx$w),
      iejhgf = function (mpknlo) {
    function lnok(fjgi) {
      this['_audio'] = null, this['_onEnd'] = null, lnok['__super']['call'](this), this['_audio'] = fjgi, this['_onEnd'] = npmql['bind'](this['__onEnd'], this), fjgi['onEnded'](this['_onEnd']);
    }rqupt(lnok, 'laya.wx.mini.MiniSoundChannel', mpknlo);var _$z21 = lnok['prototype'];return _$z21['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (onkmj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _$z21['__onNull'] = function () {}, _$z21['play'] = function () {
      this['isStopped'] = ![], fcedab['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _$z21['stop'] = function () {
      this['isStopped'] = !![], fcedab['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (lnok['_null'] != undefined) this['_audio']['onEnded'](lnok['_null']);else try {
        this['_audio']['onEnded'](null), lnok['_null'] = null;
      } catch (rutqv) {
        console['warn']('[wxmini] stop:' + rutqv), this['_audio']['onEnded'](npmql['bind'](this['__onNull'], this)), lnok['_null'] = npmql['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _$z21['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _$z21['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fcedab['addChannel'](this), this['_audio']['play']();
    }, hgikj(0x0, _$z21, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hgikj(0x0, _$z21, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hgikj(0x0, _$z21, 'volume', function () {
      return 0x1;
    }, function (iknml) {}), lnok['_null'] = undefined, lnok;
  }(dfehi);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nsorpq in Laya) {
    var pmokl = Laya[nsorpq];pmokl && pmokl['__isclass'] && (exports[nsorpq] = pmokl);
  }
});