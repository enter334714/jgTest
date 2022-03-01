var S = wx.$J;
(function (window, document, cgoy0s) {
  var b4eclu = cgoy0s['un'],
      di2qx8 = cgoy0s['uns'],
      mq7fr = cgoy0s['static'],
      jpneb5 = cgoy0s['class'],
      zixa8 = cgoy0s['getset'],
      sf7rk6 = cgoy0s['__newvec'],
      e4nub = laya['utils']['Browser'],
      pb4uel = laya['events']['Event'],
      d2i8qx = laya['events']['EventDispatcher'],
      ai9xz8 = laya['resource']['HTMLImage'],
      xz$9h = laya['utils']['Handler'],
      gcyl0 = laya['display']['Input'],
      ax8iz9 = laya['net']['Loader'],
      okgs6 = laya['maths']['Matrix'],
      blu40 = laya['renders']['Render'],
      wv35n = laya['utils']['RunDriver'],
      olgu0c = laya['media']['Sound'],
      bpne = laya['media']['SoundChannel'],
      sk7yr6 = laya['media']['SoundManager'],
      r6fk7 = laya['display']['Stage'],
      fr1mq7 = laya['net']['URL'],
      g0yko = laya['utils']['Utils'],
      fskr67 = function () {
    function qd1fr() {}return jpneb5(qd1fr, 'laya.wx.mini.MiniAdpter'), qd1fr['getJson'] = function (n3p5jw) {
      return JSON['parse'](n3p5jw);
    }, qd1fr['init'] = function (zxa$h, un4bep) {
      zxa$h === void 0x0 && (zxa$h = ![]), un4bep === void 0x0 && (un4bep = ![]);if (qd1fr['_inited']) return;qd1fr['window'] = window;if (qd1fr['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qd1fr['_inited'] = !![], qd1fr['isZiYu'] = un4bep, qd1fr['isPosMsgYu'] = zxa$h, qd1fr['EnvConfig'] = {}, !qd1fr['isZiYu'] && (ubc['setNativeFileDir']('/layaairGame'), ubc['existDir'](ubc['fileNativeDir'], xz$9h['create'](qd1fr, qd1fr['onMkdirCallBack']))), qd1fr['window']['focus'] = function () {}, cgoy0s['getUrlPath'] = function () {}, qd1fr['window']['logtime'] = function (pu4l) {}, qd1fr['window']['alertTimeLog'] = function (gkys6o) {}, qd1fr['window']['resetShareInfo'] = function () {}, qd1fr['window']['CanvasRenderingContext2D'] = function () {}, qd1fr['window']['CanvasRenderingContext2D']['prototype'] = qd1fr['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qd1fr['window']['document']['body']['appendChild'] = function () {}, qd1fr['EnvConfig']['pixelRatioInt'] = 0x0, wv35n['getPixelRatio'] = qd1fr['pixelRatio'], qd1fr['_preCreateElement'] = e4nub['createElement'], e4nub['createElement'] = qd1fr['createElement'], wv35n['createShaderCondition'] = qd1fr['createShaderCondition'], g0yko['parseXMLFromString'] = qd1fr['parseXMLFromString'], gcyl0['_createInputElement'] = dmrf1q['_createInputElement'], qd1fr['EnvConfig']['load'] = ax8iz9['prototype']['load'], ax8iz9['prototype']['load'] = d1mfqr['prototype']['load'], qd1fr['isZiYu'] && zxa$h && wx['onMessage'](function (l0ugc4) {
        l0ugc4['isLoad'] && (ubc['ziyuFileData'][l0ugc4['url']] = l0ugc4['data']);
      });
    }, qd1fr['onMkdirCallBack'] = function (i89xd, v3n5) {
      if (!i89xd) ubc['filesListObj'] = JSON['parse'](v3n5['data']);
    }, qd1fr['pixelRatio'] = function () {
      if (!qd1fr['EnvConfig']['pixelRatioInt']) try {
        var oclug0 = wx['getSystemInfoSync']();return qd1fr['EnvConfig']['pixelRatioInt'] = oclug0['pixelRatio'], oclug0 = oclug0, oclug0['pixelRatio'];
      } catch (nbje5) {}return qd1fr['EnvConfig']['pixelRatioInt'];
    }, qd1fr['createElement'] = function (zaxh) {
      if (zaxh == 'canvas') {
        var z298x;return qd1fr['idx'] == 0x1 ? qd1fr['isZiYu'] ? (z298x = sharedCanvas, z298x['style'] = {}) : z298x = window['canvas'] : z298x = window['wx']['createCanvas'](), qd1fr['idx']++, z298x;
      } else {
        if (zaxh == 'textarea' || zaxh == 'input') return qd1fr['onCreateInput'](zaxh);else {
          if (zaxh == 'div') {
            var cgso0y = qd1fr['_preCreateElement'](zaxh);return cgso0y['contains'] = function (ub4cl) {
              return null;
            }, cgso0y['removeChild'] = function (bcu4le) {}, cgso0y;
          } else return qd1fr['_preCreateElement'](zaxh);
        }
      }
    }, qd1fr['onCreateInput'] = function (f6srk7) {
      var r6fm71 = qd1fr['_preCreateElement'](f6srk7);return r6fm71['focus'] = dmrf1q['wxinputFocus'], r6fm71['blur'] = dmrf1q['wxinputblur'], r6fm71['style'] = {}, r6fm71['value'] = 0x0, r6fm71['parentElement'] = {}, r6fm71['placeholder'] = {}, r6fm71['type'] = {}, r6fm71['setColor'] = function (a9zxi) {}, r6fm71['setType'] = function (xhia9z) {}, r6fm71['setFontFace'] = function (unbp4) {}, r6fm71['addEventListener'] = function (m17fr6) {}, r6fm71['contains'] = function (dq2x) {
        return null;
      }, r6fm71['removeChild'] = function (y67r) {}, r6fm71;
    }, qd1fr['createShaderCondition'] = function (jbn5ep) {
      var xz98ai = this,
          c0lguo = function () {
        var gyl0oc = jbn5ep;return xz98ai[jbn5ep['replace']('this.', '')];
      };return c0lguo;
    }, qd1fr['EnvConfig'] = null, qd1fr['window'] = null, qd1fr['_preCreateElement'] = null, qd1fr['_inited'] = ![], qd1fr['wxRequest'] = null, qd1fr['systemInfo'] = null, qd1fr['version'] = '0.0.1', qd1fr['isZiYu'] = ![], qd1fr['isPosMsgYu'] = ![], qd1fr['parseXMLFromString'] = function (d1q2i8) {
      var o0ulg, kf6m7r;d1q2i8 = d1q2i8['replace'](/>\s+</g, '><');try {
        o0ulg = new window['Parser']['DOMParser']()['parseFromString'](d1q2i8, 'text/xml');
      } catch (gcu4l) {
        throw '需要引入xml解析库文件';
      }return o0ulg;
    }, qd1fr['idx'] = 0x1, qd1fr;
  }(),
      ixd2q = function () {
    function q8id1() {}jpneb5(q8id1, 'laya.wx.mini.MiniImage');var d1m8 = q8id1['prototype'];return d1m8['_loadImage'] = function (vwj53n) {
      var eb4upn = this,
          z9h = ![];vwj53n['indexOf']('layaNativeDir/') == -0x1 && (z9h = !![], vwj53n = fr1mq7['formatURL'](vwj53n));if (!ubc['getFileInfo'](vwj53n)) {
        if (vwj53n['indexOf']('http://') != -0x1 || vwj53n['indexOf']('https://') != -0x1) ubc['downImg'](vwj53n, new xz$9h(q8id1, q8id1['onDownImgCallBack'], [vwj53n, eb4upn]), vwj53n);else q8id1['onCreateImage'](vwj53n, eb4upn, !![]);
      } else q8id1['onCreateImage'](vwj53n, eb4upn, !z9h);
    }, q8id1['onDownImgCallBack'] = function (belp, lcgu40, izha9x) {
      if (!izha9x) q8id1['onCreateImage'](belp, lcgu40);else lcgu40['onError'](null);
    }, q8id1['onCreateImage'] = function (r1dm, ulp4e, gu04) {
      gu04 === void 0x0 && (gu04 = ![]);var scygo0;if (!gu04) {
        var s6ogky = ubc['getFileInfo'](r1dm),
            m76frk = s6ogky['md5'];scygo0 = ubc['getFileNativePath'](m76frk);
      } else scygo0 = r1dm;if (ulp4e['imgCache'] == null) ulp4e['imgCache'] = {};var k7r6m;function x89i() {
        k7r6m['onload'] = null, k7r6m['onerror'] = null, delete ulp4e['imgCache'][r1dm];
      };var xza89i = function () {
        x89i(), ulp4e['onLoaded'](k7r6m);
      },
          i2xq = function () {
        x89i(), ulp4e['event']('error', 'Load image failed');
      };ulp4e['_type'] == 'nativeimage' ? (k7r6m = new e4nub['window']['Image'](), k7r6m['crossOrigin'] = '', k7r6m['onload'] = xza89i, k7r6m['onerror'] = i2xq, k7r6m['src'] = scygo0, ulp4e['imgCache'][r1dm] = k7r6m) : new ai9xz8['create'](scygo0, { 'onload': xza89i, 'onerror': i2xq, 'onCreate': function (gcl40) {
          k7r6m = gcl40, ulp4e['imgCache'][r1dm] = gcl40;
        } });
    }, q8id1;
  }(),
      dmrf1q = function () {
    function gsocy0() {}return jpneb5(gsocy0, 'laya.wx.mini.MiniInput'), gsocy0['_createInputElement'] = function () {
      gcyl0['_initInput'](gcyl0['area'] = e4nub['createElement']('textarea')), gcyl0['_initInput'](gcyl0['input'] = e4nub['createElement']('input')), gcyl0['inputContainer'] = e4nub['createElement']('div'), gcyl0['inputContainer']['style']['position'] = 'absolute', gcyl0['inputContainer']['style']['zIndex'] = 0x186a0, e4nub['container']['appendChild'](gcyl0['inputContainer']), gcyl0['inputContainer']['setPos'] = function (axiz8, hx9iz) {
        gcyl0['inputContainer']['style']['left'] = axiz8 + 'px', gcyl0['inputContainer']['style']['top'] = hx9iz + 'px';
      }, cgoy0s['stage']['on']('resize', null, gsocy0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pbule4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), sk7yr6['_soundClass'] = rysk76, sk7yr6['_musicClass'] = rysk76;
    }, gsocy0['_onStageResize'] = function () {
      var p4eunb = cgoy0s['stage']['_canvasTransform']['identity']();p4eunb['scale'](e4nub['width'] / blu40['canvas']['width'] / wv35n['getPixelRatio'](), e4nub['height'] / blu40['canvas']['height'] / wv35n['getPixelRatio']());
    }, gsocy0['wxinputFocus'] = function (xzh9a$) {
      var iz892 = gcyl0['inputElement']['target'];if (iz892 && !iz892['editable']) return;fskr67['window']['wx']['offKeyboardConfirm'](), fskr67['window']['wx']['offKeyboardInput'](), fskr67['window']['wx']['showKeyboard']({ 'defaultValue': iz892['text'], 'maxLength': iz892['maxChars'], 'multiple': iz892['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (bpe4) {}, 'fail': function (bup4) {} }), fskr67['window']['wx']['onKeyboardConfirm'](function (x92iz) {
        var j5vw3 = x92iz ? x92iz['value'] : '';iz892['text'] = j5vw3, iz892['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fskr67['window']['wx']['onKeyboardInput'](function (olgy0c) {
        var z9x82 = olgy0c ? olgy0c['value'] : '';if (!iz892['multiline']) {
          if (z9x82['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }iz892['text'] = z9x82, iz892['event']('input');
      });
    }, gsocy0['inputEnter'] = function () {
      gcyl0['inputElement']['target']['focus'] = ![];
    }, gsocy0['wxinputblur'] = function () {
      gsocy0['hideKeyboard']();
    }, gsocy0['hideKeyboard'] = function () {
      fskr67['window']['wx']['offKeyboardConfirm'](), fskr67['window']['wx']['offKeyboardInput'](), fskr67['window']['wx']['hideKeyboard']({ 'success': function (sfr67k) {
          console['log']('隐藏键盘');
        }, 'fail': function (mf76) {
          console['log']('隐藏键盘出错:' + (mf76 ? mf76['errMsg'] : ''));
        } });
    }, gsocy0;
  }(),
      d1mfqr = function () {
    function k6fr7() {}jpneb5(k6fr7, 'laya.wx.mini.MiniLoader');var sg0coy = k6fr7['prototype'];return sg0coy['load'] = function (jp53nw, $azx9h, ulbc40, oglcu0, uple4) {
      ulbc40 === void 0x0 && (ulbc40 = !![]), uple4 === void 0x0 && (uple4 = ![]);var xaz9i = this;xaz9i['_url'] = jp53nw;if (jp53nw['indexOf']('data:image') === 0x0) xaz9i['_type'] = $azx9h = 'image';else xaz9i['_type'] = $azx9h || ($azx9h = xaz9i['getTypeFromUrl'](jp53nw));xaz9i['_cache'] = ulbc40, xaz9i['_data'] = null;var fdrq1m = 'ascii';if (jp53nw['indexOf']('.fnt') != -0x1) fdrq1m = 'utf8';else $azx9h == 'arraybuffer' && (fdrq1m = '');;var vwnj5 = g0yko['getFileExtension'](jp53nw);if (k6fr7['_fileTypeArr']['indexOf'](vwnj5) != -0x1) fskr67['EnvConfig']['load']['call'](this, jp53nw, $azx9h, ulbc40, oglcu0, uple4);else {
        if (!ubc['getFileInfo'](jp53nw)) {
          if (jp53nw['indexOf']('layaNativeDir/') != -0x1) {
            if (fskr67['isZiYu']) {
              var gyco = ubc['ziyuFileData'][jp53nw];xaz9i['onLoaded'](gyco);return;
            } else {
              cosnole['log']('read read'), ubc['read'](jp53nw, fdrq1m, new xz$9h(k6fr7, k6fr7['onReadNativeCallBack'], [fdrq1m, jp53nw, $azx9h, ulbc40, oglcu0, uple4, xaz9i]));return;
            }
          }if (fr1mq7['rootPath'] == '') var yl0cg = jp53nw;else yl0cg = jp53nw['split'](fr1mq7['rootPath'])[0x0];jp53nw['indexOf']('http://') != -0x1 || jp53nw['indexOf']('https://') != -0x1 ? fskr67['EnvConfig']['load']['call'](xaz9i, jp53nw, $azx9h, ulbc40, oglcu0, uple4) : ubc['readFile'](yl0cg, fdrq1m, new xz$9h(k6fr7, k6fr7['onReadNativeCallBack'], [fdrq1m, jp53nw, $azx9h, ulbc40, oglcu0, uple4, xaz9i]), jp53nw);
        } else fskr67['EnvConfig']['load']['call'](this, jp53nw, $azx9h, ulbc40, oglcu0, uple4);
      }
    }, sg0coy['resMgrLoad'] = function (lcbu40, hxza, hzxa, fq1d, b45p, rk7ys, gkoys0) {
      hzxa === void 0x0 && (hzxa = 0x0), fq1d === void 0x0 && (fq1d = ![]), b45p === void 0x0 && (b45p = ![]), rk7ys === void 0x0 && (rk7ys = 0x0), gkoys0 === void 0x0 && (gkoys0 = 0x3), lcbu40['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lcbu40), fskr67['EnvConfig']['resMgrLoad'](lcbu40, (ebn54p, x9id28, yogc0l) => {
        k6fr7['prototype']['resMgrLoadCallBack'](ebn54p, x9id28, yogc0l, hxza);
      }, hzxa, fq1d, b45p, rk7ys, gkoys0);
    }, sg0coy['resMgrLoadCallBack'] = function (f67ksr, r1fm7q, yo7sk6, vjwn35) {
      console['log']('buff:::', f67ksr, yo7sk6, ubc['fileNativeDir'] + '///' + ubc['fileListName']), vjwn35(f67ksr, r1fm7q, yo7sk6);
    }, sg0coy['clearRes'] = function (d21qfm, ha9zix) {
      ha9zix === void 0x0 && (ha9zix = ![]);var sk76y = this;sk76y['clearRes'](d21qfm, ha9zix);var epn35 = ubc['getFileInfo'](d21qfm);if (epn35 && (d21qfm['indexOf']('http://') != -0x1 || d21qfm['indexOf']('https://') != -0x1)) {
        var p54n = epn35['md5'],
            m8d2q = ubc['getFileNativePath'](p54n);ubc['remove'](m8d2q);
      }
    }, k6fr7['onReadNativeCallBack'] = function (mqrfd1, di82qx, wvj3n, lbep4, i2xqd, ihaz9, csg0y, qd28i, ul4bec) {
      lbep4 === void 0x0 && (lbep4 = !![]), ihaz9 === void 0x0 && (ihaz9 = ![]), qd28i === void 0x0 && (qd28i = 0x0);if (!qd28i) {
        var f7r6;if (wvj3n == 'json' || wvj3n == 'atlas') f7r6 = fskr67['getJson'](ul4bec['data']);else wvj3n == 'xml' ? f7r6 = g0yko['parseXMLFromString'](ul4bec['data']) : f7r6 = ul4bec['data'];csg0y['onLoaded'](f7r6), !fskr67['isZiYu'] && fskr67['isPosMsgYu'] && wvj3n != 'arraybuffer' && wx['postMessage']({ 'url': di82qx, 'data': f7r6, 'isLoad': !![] });
      } else qd28i == 0x1 && fskr67['EnvConfig']['load']['call'](csg0y, di82qx, wvj3n, lbep4, i2xqd, ihaz9);
    }, mq7fr(k6fr7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), k6fr7;
  }(),
      ubc = function (cs0oyg) {
    function epu4() {
      epu4['__super']['call'](this);;
    }return jpneb5(epu4, 'laya.wx.mini.MiniFileMgr', cs0oyg), epu4['isLoadFile'] = function (luo) {
      return epu4['_fileTypeArr']['indexOf'](luo) != -0x1 ? !![] : ![];
    }, epu4['getFileInfo'] = function (krf67) {
      var sgy0c = krf67['split']('?')[0x0],
          ul40bc = epu4['filesListObj'][sgy0c];if (ul40bc == null) return null;else return ul40bc;return null;
    }, epu4['onFileUpdate'] = function (p5n3, ue4p) {
      var f1mrd = p5n3['split']('/'),
          qmf1r7 = f1mrd[f1mrd['length'] - 0x1],
          bne5p4 = epu4['getFileInfo'](ue4p);if (bne5p4 == null) epu4['onSaveFile'](ue4p, qmf1r7);else {
        if (bne5p4['readyUrl'] != ue4p) epu4['remove'](qmf1r7, ue4p);
      }
    }, epu4['exits'] = function (x8qi2, ecbul4) {
      var ko67s = epu4['getFileNativePath'](x8qi2);epu4['fs']['getFileInfo']({ 'filePath': ko67s, 'success': function (q81m2d) {
          ecbul4 != null && ecbul4['runWith']([0x0, q81m2d]);
        }, 'fail': function (mdf2) {
          ecbul4 != null && ecbul4['runWith']([0x1, mdf2]);
        } });
    }, epu4['read'] = function (ol0cgy, so6g, u4p, k76syo) {
      so6g === void 0x0 && (so6g = 'ascill'), k76syo === void 0x0 && (k76syo = '');var kmr7;k76syo != '' ? kmr7 = epu4['getFileNativePath'](ol0cgy) : kmr7 = ol0cgy, epu4['fs']['readFile']({ 'filePath': kmr7, 'encoding': so6g, 'success': function (krys76) {
          u4p != null && u4p['runWith']([0x0, krys76]);
        }, 'fail': function (ebp5nj) {
          if (ebp5nj && k76syo != '') epu4['down'](k76syo, so6g, u4p, k76syo);else u4p != null && u4p['runWith']([0x1]);
        } });
    }, epu4['readNativeFile'] = function (r1qm, pjne35) {
      epu4['fs']['readFile']({ 'filePath': r1qm, 'encoding': '', 'success': function (mfd2q) {
          pjne35 != null && pjne35['runWith']([0x0]);
        }, 'fail': function (lycg0o) {
          pjne35 != null && pjne35['runWith']([0x1]);
        } });
    }, epu4['down'] = function (mq2df1, mr7f1q, oc0lyg, xahz9) {
      mr7f1q === void 0x0 && (mr7f1q = 'ascill'), xahz9 === void 0x0 && (xahz9 = '');var fq1rm = epu4['getFileNativePath'](xahz9),
          bl40uc = epu4['wxdown']({ 'url': mq2df1, 'filePath': fq1rm, 'success': function (s7ky6) {
          if (s7ky6['statusCode'] === 0xc8) epu4['readFile'](s7ky6['filePath'], mr7f1q, oc0lyg, xahz9);
        }, 'fail': function (xiz89a) {
          oc0lyg != null && oc0lyg['runWith']([0x1, xiz89a]);
        } });bl40uc['onProgressUpdate'](function (b4n5p) {
        oc0lyg != null && oc0lyg['runWith']([0x2, b4n5p['progress']]);
      });
    }, epu4['readFile'] = function (kf76rm, lcug, jnebp, p4eub) {
      lcug === void 0x0 && (lcug = 'ascill'), p4eub === void 0x0 && (p4eub = ''), epu4['fs']['readFile']({ 'filePath': kf76rm, 'encoding': lcug, 'success': function (d21i8) {
          if (kf76rm['indexOf']('http://') != -0x1 || kf76rm['indexOf']('https://') != -0x1) epu4['onFileUpdate'](kf76rm, p4eub);jnebp != null && jnebp['runWith']([0x0, d21i8]);
        }, 'fail': function (q2i8dx) {
          if (q2i8dx) jnebp != null && jnebp['runWith']([0x1, q2i8dx]);
        } });
    }, epu4['downImg'] = function (o0c, m6fkr, l0cguo) {
      l0cguo === void 0x0 && (l0cguo = '');var frm716 = epu4['wxdown']({ 'url': o0c, 'success': function (x298zi) {
          x298zi['statusCode'] === 0xc8 && epu4['copyFile'](x298zi['tempFilePath'], l0cguo, m6fkr);
        }, 'fail': function (lb4pue) {
          m6fkr != null && m6fkr['runWith']([0x1, lb4pue]);
        } });
    }, epu4['copyFile'] = function (qi2xd, cogu0l, xaih9) {
      var g0cyos = qi2xd['split']('/'),
          epnbu4 = g0cyos[g0cyos['length'] - 0x1],
          ykgs0o = cogu0l['split']('?')[0x0],
          n45ep = epu4['getFileInfo'](cogu0l),
          rm6f = epu4['getFileNativePath'](epnbu4);epu4['fs']['copyFile']({ 'srcPath': qi2xd, 'destPath': rm6f, 'success': function (zxh$a) {
          if (!n45ep) epu4['onSaveFile'](cogu0l, epnbu4), xaih9 != null && xaih9['runWith']([0x0]);else {
            if (n45ep['readyUrl'] != cogu0l) epu4['remove'](epnbu4, cogu0l, xaih9);
          }
        }, 'fail': function (fr6m) {
          xaih9 != null && xaih9['runWith']([0x1, fr6m]);
        } });
    }, epu4['getFileNativePath'] = function (v53) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + v53;
    }, epu4['remove'] = function (u0glc4, r6ysk, y0cgos) {
      r6ysk === void 0x0 && (r6ysk = '');var qfdr = epu4['getFileInfo'](r6ysk),
          zxah9 = epu4['getFileNativePath'](qfdr['md5']);cgoy0s['loader']['clearRes'](qfdr['readyUrl']), epu4['fs']['unlink']({ 'filePath': zxah9, 'success': function (lucb4) {
          if (r6ysk != '') epu4['onSaveFile'](r6ysk, u0glc4);y0cgos != null && y0cgos['runWith']([0x0]);
        }, 'fail': function (j5n3w) {} });
    }, epu4['onSaveFile'] = function (jne3, qd12mf) {
      var qd2x = jne3['split']('?')[0x0];epu4['filesListObj'][qd2x] = { 'md5': qd12mf, 'readyUrl': jne3 }, epu4['fs']['writeFile']({ 'filePath': epu4['fileNativeDir'] + '/' + epu4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](epu4['filesListObj']), 'success': function ($xzha9) {
          console['log']('写入测试测试成功：', $xzha9);
        }, 'fail': function (ul40b) {
          console['log']('写入测试测试失败：', ul40b);
        } });
    }, epu4['existDir'] = function (lcy0o, mf1d2q) {
      epu4['fs']['mkdir']({ 'dirPath': lcy0o, 'success': function (ejn5b) {
          mf1d2q != null && mf1d2q['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (cblu0) {
          if (cblu0['errMsg']['indexOf']('file already exists') != -0x1) epu4['readSync'](epu4['fileListName'], 'utf8', mf1d2q);else mf1d2q != null && mf1d2q['runWith']([0x1, cblu0]);
        } });
    }, epu4['readSync'] = function (f6r71, d8xi, wjv3n5, m6kfr) {
      d8xi === void 0x0 && (d8xi = 'ascill'), m6kfr === void 0x0 && (m6kfr = '');var ep4u = epu4['getFileNativePath'](f6r71),
          b4ep5n;try {
        b4ep5n = epu4['fs']['readFileSync'](ep4u), wjv3n5 != null && wjv3n5['runWith']([0x0, { 'data': b4ep5n }]);
      } catch (x9hiza) {
        wjv3n5 != null && wjv3n5['runWith']([0x1]);
      }
    }, epu4['readCache'] = function () {}, epu4['writeCache'] = function (rk6s) {
      var lbe4 = readyUrl['split']('?')[0x0];epu4['filesListObj'][lbe4] = { 'md5': md5Name, 'readyUrl': readyUrl }, epu4['fs']['writeFile']({ 'filePath': epu4['fileNativeDir'] + '/' + epu4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](epu4['filesListObj']), 'success': function (rmf61) {}, 'fail': function (jpen53) {} });
    }, epu4['setNativeFileDir'] = function (i98xz) {
      epu4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i98xz;
    }, epu4['filesListObj'] = {}, epu4['fileNativeDir'] = null, epu4['fileListName'] = 'layaairfiles.txt', epu4['ziyuFileData'] = {}, mq7fr(epu4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), epu4;
  }(d2i8qx),
      rysk76 = function (ne5jp) {
    function gy0co() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], gy0co['__super']['call'](this), this['_sound'] = gy0co['_createSound']();
    }jpneb5(gy0co, 'laya.wx.mini.MiniSound', ne5jp);var za$xh9 = gy0co['prototype'];return za$xh9['load'] = function (be4pn5) {
      var x8z9ia = this;be4pn5 = fr1mq7['formatURL'](be4pn5), this['url'] = be4pn5;if (gy0co['_audioCache'][be4pn5]) {
        this['event']('complete');return;
      }function u4pne() {
        if (gy0co['_null'] != undefined) x8z9ia['_sound']['onCanplay'](gy0co['_null']), x8z9ia['_sound']['onError'](gy0co['_null']);else try {
          x8z9ia['_sound']['onCanplay'](null), x8z9ia['_sound']['onError'](null), gy0co['_null'] = null;
        } catch (rfs6k7) {
          console['warn']('[wxmini] _clearSound:' + rfs6k7), x8z9ia['_sound']['onCanplay'](i2xdq8), x8z9ia['_sound']['onError'](i2xdq8), gy0co['_null'] = i2xdq8;
        }
      }function hzax9i() {
        u4pne(), ko0s['loaded'] = !![], ko0s['event']('complete'), gy0co['_audioCache'][ko0s['url']] = ko0s;
      }function kfr6(rm71q) {
        console['error']('errCode=' + rm71q['errCode'] + '  errMsg=' + rm71q['errMsg']), u4pne(), ko0s['event']('error');
      }function i2xdq8() {}this['_sound']['onCanplay'](hzax9i), this['_sound']['onError'](kfr6), this['_sound']['src'] = be4pn5;var ko0s = this;
    }, za$xh9['play'] = function (oglcu, md8q1) {
      oglcu === void 0x0 && (oglcu = 0x0), md8q1 === void 0x0 && (md8q1 = 0x0);var azxh9;if (this['url'] == sk7yr6['_tMusic']) {
        if (!gy0co['_musicAudio']) gy0co['_musicAudio'] = gy0co['_createSound']();azxh9 = gy0co['_musicAudio'];
      } else azxh9 = gy0co['_createSound']();azxh9['src'] = this['url'];var ks6f7 = new a$xzh(azxh9);return ks6f7['url'] = this['url'], ks6f7['loops'] = md8q1, ks6f7['startTime'] = oglcu, ks6f7['play'](), sk7yr6['addChannel'](ks6f7), ks6f7;
    }, za$xh9['dispose'] = function () {
      var p5n3e = gy0co['_audioCache'][this['url']];p5n3e && (p5n3e['src'] = '', delete gy0co['_audioCache'][this['url']]);
    }, zixa8(0x0, za$xh9, 'duration', function () {
      return this['_sound']['duration'];
    }), gy0co['_createSound'] = function () {
      return gy0co['_id']++, fskr67['window']['wx']['createInnerAudioContext']();
    }, gy0co['_musicAudio'] = null, gy0co['_id'] = 0x0, gy0co['_audioCache'] = {}, gy0co['_null'] = undefined, gy0co;
  }(d2i8qx),
      a$xzh = function (zxai9) {
    function i21q(lugc04) {
      this['_audio'] = null, this['_onEnd'] = null, i21q['__super']['call'](this), this['_audio'] = lugc04, this['_onEnd'] = g0yko['bind'](this['__onEnd'], this), lugc04['onEnded'](this['_onEnd']);
    }jpneb5(i21q, 'laya.wx.mini.MiniSoundChannel', zxai9);var b4epu = i21q['prototype'];return b4epu['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cgoy0s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, b4epu['__onNull'] = function () {}, b4epu['play'] = function () {
      this['isStopped'] = ![], sk7yr6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, b4epu['stop'] = function () {
      this['isStopped'] = !![], sk7yr6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (i21q['_null'] != undefined) this['_audio']['onEnded'](i21q['_null']);else try {
        this['_audio']['onEnded'](null), i21q['_null'] = null;
      } catch (yk7s) {
        console['warn']('[wxmini] stop:' + yk7s), this['_audio']['onEnded'](g0yko['bind'](this['__onNull'], this)), i21q['_null'] = g0yko['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, b4epu['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, b4epu['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], sk7yr6['addChannel'](this), this['_audio']['play']();
    }, zixa8(0x0, b4epu, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), zixa8(0x0, b4epu, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), zixa8(0x0, b4epu, 'volume', function () {
      return 0x1;
    }, function (azhi) {}), i21q['_null'] = undefined, i21q;
  }(bpne);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var lepub4 in Laya) {
    var i89xz2 = Laya[lepub4];i89xz2 && i89xz2['__isclass'] && (exports[lepub4] = i89xz2);
  }
});