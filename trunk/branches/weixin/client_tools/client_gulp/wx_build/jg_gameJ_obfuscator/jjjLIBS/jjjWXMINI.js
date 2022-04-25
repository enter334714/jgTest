var S = wx.$J;
(function (window, document, cl4eub) {
  var k7syo = cl4eub['un'],
      fdq12m = cl4eub['uns'],
      lcou0 = cl4eub['static'],
      d98i = cl4eub['class'],
      f7m6rk = cl4eub['getset'],
      og0lu = cl4eub['__newvec'],
      ebnu4 = laya['utils']['Browser'],
      njv = laya['events']['Event'],
      np4eb = laya['events']['EventDispatcher'],
      dq218m = laya['resource']['HTMLImage'],
      g6ksoy = laya['utils']['Handler'],
      lgocu = laya['display']['Input'],
      e35n = laya['net']['Loader'],
      i18q2d = laya['maths']['Matrix'],
      colug0 = laya['renders']['Render'],
      xz829i = laya['utils']['RunDriver'],
      qdmf1r = laya['media']['Sound'],
      sgk0o = laya['media']['SoundChannel'],
      ogul0c = laya['media']['SoundManager'],
      b4ne = laya['display']['Stage'],
      ah9xz$ = laya['net']['URL'],
      id12q8 = laya['utils']['Utils'],
      iza89x = function () {
    function nb4epu() {}return d98i(nb4epu, 'laya.wx.mini.MiniAdpter'), nb4epu['getJson'] = function (e5nj3) {
      return JSON['parse'](e5nj3);
    }, nb4epu['init'] = function (q17rfm, g6yo) {
      q17rfm === void 0x0 && (q17rfm = ![]), g6yo === void 0x0 && (g6yo = ![]);if (nb4epu['_inited']) return;nb4epu['window'] = window;if (nb4epu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;nb4epu['_inited'] = !![], nb4epu['isZiYu'] = g6yo, nb4epu['isPosMsgYu'] = q17rfm, nb4epu['EnvConfig'] = {}, !nb4epu['isZiYu'] && (mr1f6['setNativeFileDir']('/layaairGame'), mr1f6['existDir'](mr1f6['fileNativeDir'], g6ksoy['create'](nb4epu, nb4epu['onMkdirCallBack']))), nb4epu['window']['focus'] = function () {}, cl4eub['getUrlPath'] = function () {}, nb4epu['window']['logtime'] = function (yocg) {}, nb4epu['window']['alertTimeLog'] = function (uclog0) {}, nb4epu['window']['resetShareInfo'] = function () {}, nb4epu['window']['CanvasRenderingContext2D'] = function () {}, nb4epu['window']['CanvasRenderingContext2D']['prototype'] = nb4epu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nb4epu['window']['document']['body']['appendChild'] = function () {}, nb4epu['EnvConfig']['pixelRatioInt'] = 0x0, xz829i['getPixelRatio'] = nb4epu['pixelRatio'], nb4epu['_preCreateElement'] = ebnu4['createElement'], ebnu4['createElement'] = nb4epu['createElement'], xz829i['createShaderCondition'] = nb4epu['createShaderCondition'], id12q8['parseXMLFromString'] = nb4epu['parseXMLFromString'], lgocu['_createInputElement'] = oc0gu['_createInputElement'], nb4epu['EnvConfig']['load'] = e35n['prototype']['load'], e35n['prototype']['load'] = npejb['prototype']['load'], nb4epu['isZiYu'] && q17rfm && wx['onMessage'](function (n5p4b) {
        n5p4b['isLoad'] && (mr1f6['ziyuFileData'][n5p4b['url']] = n5p4b['data']);
      });
    }, nb4epu['onMkdirCallBack'] = function (o0cgys, blue4p) {
      if (!o0cgys) mr1f6['filesListObj'] = JSON['parse'](blue4p['data']);
    }, nb4epu['pixelRatio'] = function () {
      if (!nb4epu['EnvConfig']['pixelRatioInt']) try {
        var mf76k = wx['getSystemInfoSync']();return nb4epu['EnvConfig']['pixelRatioInt'] = mf76k['pixelRatio'], mf76k = mf76k, mf76k['pixelRatio'];
      } catch (q1fr7m) {}return nb4epu['EnvConfig']['pixelRatioInt'];
    }, nb4epu['createElement'] = function (x82id) {
      if (x82id == 'canvas') {
        var oys6;return nb4epu['idx'] == 0x1 ? nb4epu['isZiYu'] ? (oys6 = sharedCanvas, oys6['style'] = {}) : oys6 = window['canvas'] : oys6 = window['wx']['createCanvas'](), nb4epu['idx']++, oys6;
      } else {
        if (x82id == 'textarea' || x82id == 'input') return nb4epu['onCreateInput'](x82id);else {
          if (x82id == 'div') {
            var qx28 = nb4epu['_preCreateElement'](x82id);return qx28['contains'] = function (qd1m2f) {
              return null;
            }, qx28['removeChild'] = function (bej5np) {}, qx28;
          } else return nb4epu['_preCreateElement'](x82id);
        }
      }
    }, nb4epu['onCreateInput'] = function (glcyo0) {
      var ogk6 = nb4epu['_preCreateElement'](glcyo0);return ogk6['focus'] = oc0gu['wxinputFocus'], ogk6['blur'] = oc0gu['wxinputblur'], ogk6['style'] = {}, ogk6['value'] = 0x0, ogk6['parentElement'] = {}, ogk6['placeholder'] = {}, ogk6['type'] = {}, ogk6['setColor'] = function (q18dm) {}, ogk6['setType'] = function (izx289) {}, ogk6['setFontFace'] = function (fr61m7) {}, ogk6['addEventListener'] = function (penb45) {}, ogk6['contains'] = function (rfm17q) {
        return null;
      }, ogk6['removeChild'] = function (blu4c0) {}, ogk6;
    }, nb4epu['createShaderCondition'] = function (enj53p) {
      var ne5j3 = this,
          epnbu = function () {
        var qrdf = enj53p;return ne5j3[enj53p['replace']('this.', '')];
      };return epnbu;
    }, nb4epu['EnvConfig'] = null, nb4epu['window'] = null, nb4epu['_preCreateElement'] = null, nb4epu['_inited'] = ![], nb4epu['wxRequest'] = null, nb4epu['systemInfo'] = null, nb4epu['version'] = '0.0.1', nb4epu['isZiYu'] = ![], nb4epu['isPosMsgYu'] = ![], nb4epu['parseXMLFromString'] = function (ky6o7s) {
      var cbl, u4enb;ky6o7s = ky6o7s['replace'](/>\s+</g, '><');try {
        cbl = new window['Parser']['DOMParser']()['parseFromString'](ky6o7s, 'text/xml');
      } catch (rfmk7) {
        throw '需要引入xml解析库文件';
      }return cbl;
    }, nb4epu['idx'] = 0x1, nb4epu;
  }(),
      f71qmr = function () {
    function ahix() {}d98i(ahix, 'laya.wx.mini.MiniImage');var p4bul = ahix['prototype'];return p4bul['_loadImage'] = function (f1rqdm) {
      var mf17r = this,
          be4lp = ![];f1rqdm['indexOf']('layaNativeDir/') == -0x1 && (be4lp = !![], f1rqdm = ah9xz$['formatURL'](f1rqdm));if (!mr1f6['getFileInfo'](f1rqdm)) {
        if (f1rqdm['indexOf']('http://') != -0x1 || f1rqdm['indexOf']('https://') != -0x1) mr1f6['downImg'](f1rqdm, new g6ksoy(ahix, ahix['onDownImgCallBack'], [f1rqdm, mf17r]), f1rqdm);else ahix['onCreateImage'](f1rqdm, mf17r, !![]);
      } else ahix['onCreateImage'](f1rqdm, mf17r, !be4lp);
    }, ahix['onDownImgCallBack'] = function (yco0, go6s, oyc0lg) {
      if (!oyc0lg) ahix['onCreateImage'](yco0, go6s);else go6s['onError'](null);
    }, ahix['onCreateImage'] = function (oglyc, enp5bj, gky0os) {
      gky0os === void 0x0 && (gky0os = ![]);var h9zia;if (!gky0os) {
        var vjw = mr1f6['getFileInfo'](oglyc),
            nbu4ep = vjw['md5'];h9zia = mr1f6['getFileNativePath'](nbu4ep);
      } else h9zia = oglyc;if (enp5bj['imgCache'] == null) enp5bj['imgCache'] = {};var dxi2q;function i829dx() {
        dxi2q['onload'] = null, dxi2q['onerror'] = null, delete enp5bj['imgCache'][oglyc];
      };var cg4 = function () {
        i829dx(), enp5bj['onLoaded'](dxi2q);
      },
          ky6g = function () {
        i829dx(), enp5bj['event']('error', 'Load image failed');
      };enp5bj['_type'] == 'nativeimage' ? (dxi2q = new ebnu4['window']['Image'](), dxi2q['crossOrigin'] = '', dxi2q['onload'] = cg4, dxi2q['onerror'] = ky6g, dxi2q['src'] = h9zia, enp5bj['imgCache'][oglyc] = dxi2q) : new dq218m['create'](h9zia, { 'onload': cg4, 'onerror': ky6g, 'onCreate': function (lou0) {
          dxi2q = lou0, enp5bj['imgCache'][oglyc] = lou0;
        } });
    }, ahix;
  }(),
      oc0gu = function () {
    function fqm12() {}return d98i(fqm12, 'laya.wx.mini.MiniInput'), fqm12['_createInputElement'] = function () {
      lgocu['_initInput'](lgocu['area'] = ebnu4['createElement']('textarea')), lgocu['_initInput'](lgocu['input'] = ebnu4['createElement']('input')), lgocu['inputContainer'] = ebnu4['createElement']('div'), lgocu['inputContainer']['style']['position'] = 'absolute', lgocu['inputContainer']['style']['zIndex'] = 0x186a0, ebnu4['container']['appendChild'](lgocu['inputContainer']), lgocu['inputContainer']['setPos'] = function (kry76s, qdf1m) {
        lgocu['inputContainer']['style']['left'] = kry76s + 'px', lgocu['inputContainer']['style']['top'] = qdf1m + 'px';
      }, cl4eub['stage']['on']('resize', null, fqm12['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bnpe5j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ogul0c['_soundClass'] = co0yg, ogul0c['_musicClass'] = co0yg, window['_videoClass'] = dr1mfq;
    }, fqm12['_onStageResize'] = function () {
      var g6yok = cl4eub['stage']['_canvasTransform']['identity']();g6yok['scale'](ebnu4['width'] / colug0['canvas']['width'] / xz829i['getPixelRatio'](), ebnu4['height'] / colug0['canvas']['height'] / xz829i['getPixelRatio']());
    }, fqm12['wxinputFocus'] = function (lbup) {
      var $azx9h = lgocu['inputElement']['target'];if ($azx9h && !$azx9h['editable']) return;iza89x['window']['wx']['offKeyboardConfirm'](), iza89x['window']['wx']['offKeyboardInput'](), iza89x['window']['wx']['showKeyboard']({ 'defaultValue': $azx9h['text'], 'maxLength': $azx9h['maxChars'], 'multiple': $azx9h['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mqd1fr) {}, 'fail': function (zi9a) {} }), iza89x['window']['wx']['onKeyboardConfirm'](function (ix89az) {
        var id289 = ix89az ? ix89az['value'] : '';$azx9h['text'] = id289, $azx9h['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), iza89x['window']['wx']['onKeyboardInput'](function (sokg6y) {
        var f67s = sokg6y ? sokg6y['value'] : '';if (!$azx9h['multiline']) {
          if (f67s['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$azx9h['text'] = f67s, $azx9h['event']('input');
      });
    }, fqm12['inputEnter'] = function () {
      lgocu['inputElement']['target']['focus'] = ![];
    }, fqm12['wxinputblur'] = function () {
      fqm12['hideKeyboard']();
    }, fqm12['hideKeyboard'] = function () {
      iza89x['window']['wx']['offKeyboardConfirm'](), iza89x['window']['wx']['offKeyboardInput'](), iza89x['window']['wx']['hideKeyboard']({ 'success': function (d2qi) {
          console['log']('隐藏键盘');
        }, 'fail': function (csgo0y) {
          console['log']('隐藏键盘出错:' + (csgo0y ? csgo0y['errMsg'] : ''));
        } });
    }, fqm12;
  }(),
      npejb = function () {
    function xi2d98() {}d98i(xi2d98, 'laya.wx.mini.MiniLoader');var lc4u0b = xi2d98['prototype'];return lc4u0b['load'] = function (iah9xz, k7oys, xzh$9, n4uepb, qrmf7) {
      xzh$9 === void 0x0 && (xzh$9 = !![]), qrmf7 === void 0x0 && (qrmf7 = ![]);var b04cul = this;b04cul['_url'] = iah9xz;if (iah9xz['indexOf']('data:image') === 0x0) b04cul['_type'] = k7oys = 'image';else b04cul['_type'] = k7oys || (k7oys = b04cul['getTypeFromUrl'](iah9xz));b04cul['_cache'] = xzh$9, b04cul['_data'] = null;var s0cy = 'ascii';if (iah9xz['indexOf']('.fnt') != -0x1) s0cy = 'utf8';else k7oys == 'arraybuffer' && (s0cy = '');;var kgyso = id12q8['getFileExtension'](iah9xz);if (xi2d98['_fileTypeArr']['indexOf'](kgyso) != -0x1) iza89x['EnvConfig']['load']['call'](this, iah9xz, k7oys, xzh$9, n4uepb, qrmf7);else {
        if (!mr1f6['getFileInfo'](iah9xz)) {
          if (iah9xz['indexOf']('layaNativeDir/') != -0x1) {
            if (iza89x['isZiYu']) {
              var r7fk6s = mr1f6['ziyuFileData'][iah9xz];b04cul['onLoaded'](r7fk6s);return;
            } else {
              cosnole['log']('read read'), mr1f6['read'](iah9xz, s0cy, new g6ksoy(xi2d98, xi2d98['onReadNativeCallBack'], [s0cy, iah9xz, k7oys, xzh$9, n4uepb, qrmf7, b04cul]));return;
            }
          }if (ah9xz$['rootPath'] == '') var lyco0 = iah9xz;else lyco0 = iah9xz['split'](ah9xz$['rootPath'])[0x0];iah9xz['indexOf']('http://') != -0x1 || iah9xz['indexOf']('https://') != -0x1 ? iza89x['EnvConfig']['load']['call'](b04cul, iah9xz, k7oys, xzh$9, n4uepb, qrmf7) : mr1f6['readFile'](lyco0, s0cy, new g6ksoy(xi2d98, xi2d98['onReadNativeCallBack'], [s0cy, iah9xz, k7oys, xzh$9, n4uepb, qrmf7, b04cul]), iah9xz);
        } else iza89x['EnvConfig']['load']['call'](this, iah9xz, k7oys, xzh$9, n4uepb, qrmf7);
      }
    }, lc4u0b['resMgrLoad'] = function (bu0c4, ulgoc, u4lc0g, $h, up4b, unp4e, lp) {
      u4lc0g === void 0x0 && (u4lc0g = 0x0), $h === void 0x0 && ($h = ![]), up4b === void 0x0 && (up4b = ![]), unp4e === void 0x0 && (unp4e = 0x0), lp === void 0x0 && (lp = 0x3), bu0c4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bu0c4), iza89x['EnvConfig']['resMgrLoad'](bu0c4, (ul4c, ykso67, vwn5) => {
        xi2d98['prototype']['resMgrLoadCallBack'](ul4c, ykso67, vwn5, ulgoc);
      }, u4lc0g, $h, up4b, unp4e, lp);
    }, lc4u0b['resMgrLoadCallBack'] = function (ulecb4, sykr67, xi2z, sf7kr) {
      console['log']('buff:::', ulecb4, xi2z, mr1f6['fileNativeDir'] + '///' + mr1f6['fileListName']), sf7kr(ulecb4, sykr67, xi2z);
    }, lc4u0b['clearRes'] = function (dx82q, z82x9) {
      z82x9 === void 0x0 && (z82x9 = ![]);var pbnue4 = this;pbnue4['clearRes'](dx82q, z82x9);var c0u4gl = mr1f6['getFileInfo'](dx82q);if (c0u4gl && (dx82q['indexOf']('http://') != -0x1 || dx82q['indexOf']('https://') != -0x1)) {
        var d1qmf2 = c0u4gl['md5'],
            wv5j3 = mr1f6['getFileNativePath'](d1qmf2);mr1f6['remove'](wv5j3);
      }
    }, xi2d98['onReadNativeCallBack'] = function (qi8d2x, gclou, fdm2q1, d2q8, cgou0l, oysg0k, xh$z9, mf7rk6, i1d2) {
      d2q8 === void 0x0 && (d2q8 = !![]), oysg0k === void 0x0 && (oysg0k = ![]), mf7rk6 === void 0x0 && (mf7rk6 = 0x0);if (!mf7rk6) {
        var azix9h;if (fdm2q1 == 'json' || fdm2q1 == 'atlas') azix9h = iza89x['getJson'](i1d2['data']);else fdm2q1 == 'xml' ? azix9h = id12q8['parseXMLFromString'](i1d2['data']) : azix9h = i1d2['data'];xh$z9['onLoaded'](azix9h), !iza89x['isZiYu'] && iza89x['isPosMsgYu'] && fdm2q1 != 'arraybuffer' && wx['postMessage']({ 'url': gclou, 'data': azix9h, 'isLoad': !![] });
      } else mf7rk6 == 0x1 && iza89x['EnvConfig']['load']['call'](xh$z9, gclou, fdm2q1, d2q8, cgou0l, oysg0k);
    }, lcou0(xi2d98, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xi2d98;
  }(),
      mr1f6 = function (cle4ub) {
    function u0oglc() {
      u0oglc['__super']['call'](this);;
    }return d98i(u0oglc, 'laya.wx.mini.MiniFileMgr', cle4ub), u0oglc['isLoadFile'] = function (jep5n) {
      return u0oglc['_fileTypeArr']['indexOf'](jep5n) != -0x1 ? !![] : ![];
    }, u0oglc['getFileInfo'] = function (nj3p) {
      var lepb = nj3p['split']('?')[0x0],
          buc4 = u0oglc['filesListObj'][lepb];if (buc4 == null) return null;else return buc4;return null;
    }, u0oglc['onFileUpdate'] = function (sk6r7y, z9iax8) {
      var q1d2 = sk6r7y['split']('/'),
          ube4lp = q1d2[q1d2['length'] - 0x1],
          zha9$ = u0oglc['getFileInfo'](z9iax8);if (zha9$ == null) u0oglc['onSaveFile'](z9iax8, ube4lp);else {
        if (zha9$['readyUrl'] != z9iax8) u0oglc['remove'](ube4lp, z9iax8);
      }
    }, u0oglc['exits'] = function (d9xi, epulb4) {
      var jw3vn5 = u0oglc['getFileNativePath'](d9xi);u0oglc['fs']['getFileInfo']({ 'filePath': jw3vn5, 'success': function (osc0gy) {
          epulb4 != null && epulb4['runWith']([0x0, osc0gy]);
        }, 'fail': function (o6kysg) {
          epulb4 != null && epulb4['runWith']([0x1, o6kysg]);
        } });
    }, u0oglc['read'] = function (o0lcg, f6r1m, wvn5j, k6ys) {
      f6r1m === void 0x0 && (f6r1m = 'ascill'), k6ys === void 0x0 && (k6ys = '');var rmqd;k6ys != '' ? rmqd = u0oglc['getFileNativePath'](o0lcg) : rmqd = o0lcg, u0oglc['fs']['readFile']({ 'filePath': rmqd, 'encoding': f6r1m, 'success': function (syk0o) {
          wvn5j != null && wvn5j['runWith']([0x0, syk0o]);
        }, 'fail': function (go0ulc) {
          if (go0ulc && k6ys != '') u0oglc['down'](k6ys, f6r1m, wvn5j, k6ys);else wvn5j != null && wvn5j['runWith']([0x1]);
        } });
    }, u0oglc['readNativeFile'] = function (i28qd1, dq81) {
      u0oglc['fs']['readFile']({ 'filePath': i28qd1, 'encoding': '', 'success': function (e5n3jp) {
          dq81 != null && dq81['runWith']([0x0]);
        }, 'fail': function (bluc) {
          dq81 != null && dq81['runWith']([0x1]);
        } });
    }, u0oglc['down'] = function (i92d8x, fm7r1, $xahz, os0gyk) {
      fm7r1 === void 0x0 && (fm7r1 = 'ascill'), os0gyk === void 0x0 && (os0gyk = '');var xza9h = u0oglc['getFileNativePath'](os0gyk),
          n4epb5 = u0oglc['wxdown']({ 'url': i92d8x, 'filePath': xza9h, 'success': function (z2xi89) {
          if (z2xi89['statusCode'] === 0xc8) u0oglc['readFile'](z2xi89['filePath'], fm7r1, $xahz, os0gyk);
        }, 'fail': function (xid982) {
          $xahz != null && $xahz['runWith']([0x1, xid982]);
        } });n4epb5['onProgressUpdate'](function (m1rf7) {
        $xahz != null && $xahz['runWith']([0x2, m1rf7['progress']]);
      });
    }, u0oglc['readFile'] = function (lbeup, mf7r6k, ebn45, oc0lgy) {
      mf7r6k === void 0x0 && (mf7r6k = 'ascill'), oc0lgy === void 0x0 && (oc0lgy = ''), u0oglc['fs']['readFile']({ 'filePath': lbeup, 'encoding': mf7r6k, 'success': function (xi8a9) {
          if (lbeup['indexOf']('http://') != -0x1 || lbeup['indexOf']('https://') != -0x1) u0oglc['onFileUpdate'](lbeup, oc0lgy);ebn45 != null && ebn45['runWith']([0x0, xi8a9]);
        }, 'fail': function (lcygo0) {
          if (lcygo0) ebn45 != null && ebn45['runWith']([0x1, lcygo0]);
        } });
    }, u0oglc['downImg'] = function (n3pe5j, ej5pb, kf67r) {
      kf67r === void 0x0 && (kf67r = '');var d28i1 = u0oglc['wxdown']({ 'url': n3pe5j, 'success': function (ys7ko) {
          ys7ko['statusCode'] === 0xc8 && u0oglc['copyFile'](ys7ko['tempFilePath'], kf67r, ej5pb);
        }, 'fail': function (f6sr7) {
          ej5pb != null && ej5pb['runWith']([0x1, f6sr7]);
        } });
    }, u0oglc['copyFile'] = function (epj5bn, e4bnp5, pej53n) {
      var gky6so = epj5bn['split']('/'),
          oglu = gky6so[gky6so['length'] - 0x1],
          og0cs = e4bnp5['split']('?')[0x0],
          l4cg0 = u0oglc['getFileInfo'](e4bnp5),
          rfqdm1 = u0oglc['getFileNativePath'](oglu);u0oglc['fs']['copyFile']({ 'srcPath': epj5bn, 'destPath': rfqdm1, 'success': function (j3np5w) {
          if (!l4cg0) u0oglc['onSaveFile'](e4bnp5, oglu), pej53n != null && pej53n['runWith']([0x0]);else {
            if (l4cg0['readyUrl'] != e4bnp5) u0oglc['remove'](oglu, e4bnp5, pej53n);
          }
        }, 'fail': function (rf6m71) {
          pej53n != null && pej53n['runWith']([0x1, rf6m71]);
        } });
    }, u0oglc['getFileNativePath'] = function (ulcg) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ulcg;
    }, u0oglc['remove'] = function (jn35p, f1mdr, l4ce) {
      f1mdr === void 0x0 && (f1mdr = '');var diq28 = u0oglc['getFileInfo'](f1mdr),
          jn5ep3 = u0oglc['getFileNativePath'](diq28['md5']);cl4eub['loader']['clearRes'](diq28['readyUrl']), u0oglc['fs']['unlink']({ 'filePath': jn5ep3, 'success': function (olg0cu) {
          if (f1mdr != '') u0oglc['onSaveFile'](f1mdr, jn35p);l4ce != null && l4ce['runWith']([0x0]);
        }, 'fail': function (olyg0c) {} });
    }, u0oglc['onSaveFile'] = function (f61rm7, q2idx8) {
      var fdq2m1 = f61rm7['split']('?')[0x0];u0oglc['filesListObj'][fdq2m1] = { 'md5': q2idx8, 'readyUrl': f61rm7 }, u0oglc['fs']['writeFile']({ 'filePath': u0oglc['fileNativeDir'] + '/' + u0oglc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](u0oglc['filesListObj']), 'success': function (f76r) {
          console['log']('写入测试测试成功：', f76r);
        }, 'fail': function (luec4b) {
          console['log']('写入测试测试失败：', luec4b);
        } });
    }, u0oglc['existDir'] = function (lucgo, ax$zh9) {
      u0oglc['fs']['mkdir']({ 'dirPath': lucgo, 'success': function (u0lcog) {
          ax$zh9 != null && ax$zh9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($hzax9) {
          if ($hzax9['errMsg']['indexOf']('file already exists') != -0x1) u0oglc['readSync'](u0oglc['fileListName'], 'utf8', ax$zh9);else ax$zh9 != null && ax$zh9['runWith']([0x1, $hzax9]);
        } });
    }, u0oglc['readSync'] = function (ocy0gs, ugol0, fd1mq, ogk0) {
      ugol0 === void 0x0 && (ugol0 = 'ascill'), ogk0 === void 0x0 && (ogk0 = '');var ogcsy = u0oglc['getFileNativePath'](ocy0gs),
          fmq1;try {
        fmq1 = u0oglc['fs']['readFileSync'](ogcsy), fd1mq != null && fd1mq['runWith']([0x0, { 'data': fmq1 }]);
      } catch (rfk6) {
        fd1mq != null && fd1mq['runWith']([0x1]);
      }
    }, u0oglc['readCache'] = function () {}, u0oglc['writeCache'] = function (ixa9z) {
      var zx9h$a = readyUrl['split']('?')[0x0];u0oglc['filesListObj'][zx9h$a] = { 'md5': md5Name, 'readyUrl': readyUrl }, u0oglc['fs']['writeFile']({ 'filePath': u0oglc['fileNativeDir'] + '/' + u0oglc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](u0oglc['filesListObj']), 'success': function (cl0guo) {}, 'fail': function (y7ks6) {} });
    }, u0oglc['setNativeFileDir'] = function (logyc0) {
      u0oglc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + logyc0;
    }, u0oglc['filesListObj'] = {}, u0oglc['fileNativeDir'] = null, u0oglc['fileListName'] = 'layaairfiles.txt', u0oglc['ziyuFileData'] = {}, lcou0(u0oglc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), u0oglc;
  }(np4eb),
      co0yg = function (q8m2d) {
    function sy0gok() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], sy0gok['__super']['call'](this), this['_sound'] = sy0gok['_createSound'](), this['_chanell'] = new kyos6(this['_sound']);
    }d98i(sy0gok, 'laya.wx.mini.MiniSound', q8m2d);var bu0l = sy0gok['prototype'];return bu0l['load'] = function (cu4gl0) {
      var f21qd = this;cu4gl0 = ah9xz$['formatURL'](cu4gl0), this['url'] = cu4gl0;if (sy0gok['_audioCache'][cu4gl0]) {
        this['event']('complete');return;
      }function q182id() {
        if (sy0gok['_null'] != undefined) f21qd['_sound']['onCanplay'](sy0gok['_null']), f21qd['_sound']['onError'](sy0gok['_null']);else try {
          f21qd['_sound']['onCanplay'](null), f21qd['_sound']['onError'](null), sy0gok['_null'] = null;
        } catch (rf67km) {
          console['warn']('[wxmini] _clearSound:' + rf67km), f21qd['_sound']['onCanplay'](g6ysk), f21qd['_sound']['onError'](g6ysk), sy0gok['_null'] = g6ysk;
        }
      }function u0lb() {
        dfq12['loaded'] = !![], dfq12['event']('complete'), sy0gok['_audioCache'][dfq12['url']] = dfq12;
      }function ysk6(h$9xza) {
        console['error']('errCode=' + h$9xza['errCode'] + '  errMsg=' + h$9xza['errMsg']), dfq12['event']('error');
      }function g6ysk() {}this['_sound']['onCanplay'](u0lb), this['_sound']['onError'](ysk6), this['_sound']['src'] = cu4gl0;var dfq12 = this;
    }, bu0l['play'] = function (xdi2q8, blepu4) {
      xdi2q8 === void 0x0 && (xdi2q8 = 0x0), blepu4 === void 0x0 && (blepu4 = 0x0);var jpbe5n, nej53p;if (this['url'] == ogul0c['_tMusic']) {
        if (!sy0gok['_musicAudio']) sy0gok['_musicAudio'] = this['_sound'];jpbe5n = sy0gok['_musicAudio'], nej53p = this['_chanell'];
      } else jpbe5n = this['_sound'], nej53p = this['_chanell'];return jpbe5n['src'] = this['url'], jpbe5n['startTime'] = 0x0, nej53p['isStopped'] && (nej53p['url'] = this['url'], nej53p['loops'] = blepu4, nej53p['startTime'] = xdi2q8, nej53p['play'](), ogul0c['addChannel'](nej53p)), nej53p;
    }, bu0l['dispose'] = function () {
      var ky6s7 = sy0gok['_audioCache'][this['url']];ky6s7 && (ky6s7['src'] = '', delete sy0gok['_audioCache'][this['url']]);
    }, f7m6rk(0x0, bu0l, 'duration', function () {
      return this['_sound']['duration'];
    }), sy0gok['_createSound'] = function () {
      sy0gok['_id']++;var gos6y = iza89x['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return gos6y;
    }, sy0gok['_musicAudio'] = null, sy0gok['_id'] = 0x0, sy0gok['_audioCache'] = {}, sy0gok['_null'] = undefined, sy0gok;
  }(np4eb),
      kyos6 = function (ocl0u) {
    function c4gl0(uepl4) {
      this['_audio'] = null, this['_onEnd'] = null, c4gl0['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = uepl4, this['_onEnd'] = id12q8['bind'](this['__onEnd'], this), uepl4['onEnded'](this['_onEnd']);
    }d98i(c4gl0, 'laya.wx.mini.MiniSoundChannel', ocl0u);var rkf6s7 = c4gl0['prototype'];return rkf6s7['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cl4eub['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rkf6s7['__onNull'] = function () {}, rkf6s7['play'] = function () {
      this['isStopped'] = ![], ogul0c['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rkf6s7['stop'] = function () {
      this['isStopped'] = !![], ogul0c['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, rkf6s7['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rkf6s7['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ogul0c['addChannel'](this), this['_audio']['play']();
    }, f7m6rk(0x0, rkf6s7, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f7m6rk(0x0, rkf6s7, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f7m6rk(0x0, rkf6s7, 'volume', function () {
      return 0x1;
    }, function (mr6k7f) {}), c4gl0['_null'] = undefined, c4gl0;
  }(sgk0o),
      dr1mfq = function () {
    function hzi9x() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = iza89x['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }d98i(hzi9x, 'laya.wx.mini.MiniVideo');var pjb5e = hzi9x['prototype'];return pjb5e['on'] = function (eul4p, xi289z, cg0ylo) {
      if (eul4p == 'loadedmetadata') this['onPlayFunc'] = cg0ylo['bind'](xi289z), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else eul4p == 'ended' && (this['onEndedFunC'] = cg0ylo['bind'](xi289z), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, pjb5e['onTimeUpdateFunc'] = function (en5bj) {
      this['position'] = en5bj['position'], this['_duration'] = en5bj['duration'];
    }, pjb5e['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, pjb5e['onended'] = function (e3j5p, d8xq) {
      this['onEndedFunC'] = d8xq['bind'](e3j5p), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, pjb5e['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, pjb5e['off'] = function (nbe5pj, r1m76f, nj3w) {
      if (nbe5pj == 'loadedmetadata') this['onPlayFunc'] = nj3w['bind'](r1m76f), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nbe5pj == 'ended' && (this['onEndedFunC'] = nj3w['bind'](r1m76f), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, pjb5e['load'] = function (jn3p5e) {
      if (!this['videoElement']) return;this['videoElement']['src'] = jn3p5e;
    }, pjb5e['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, pjb5e['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, pjb5e['size'] = function (pw5j, cygl0o) {
      if (!this['videoElement']) return;this['videoElement']['width'] = pw5j, this['videoElement']['height'] = cygl0o;
    }, pjb5e['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, pjb5e['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, f7m6rk(0x0, pjb5e, 'duration', function () {
      return this['_duration'];
    }), f7m6rk(0x0, pjb5e, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (f1d2m) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = f1d2m;
    }), f7m6rk(0x0, pjb5e, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), f7m6rk(0x0, pjb5e, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), f7m6rk(0x0, pjb5e, 'ended', function () {
      return this['videoend'];
    }), f7m6rk(0x0, pjb5e, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (hz$xa) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = hz$xa;
    }), f7m6rk(0x0, pjb5e, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (dm1qr) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = dm1qr;
    }), f7m6rk(0x0, pjb5e, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (cug4l) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = cug4l;
    }), f7m6rk(0x0, pjb5e, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), f7m6rk(0x0, pjb5e, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (h9iax) {
      if (!this['videoElement']) return;this['videoElement']['x'] = h9iax;
    }), f7m6rk(0x0, pjb5e, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (zai) {
      if (!this['videoElement']) return;this['videoElement']['y'] = zai;
    }), f7m6rk(0x0, pjb5e, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), f7m6rk(0x0, pjb5e, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (sr6y) {
      if (!this['videoElement']) return;this['videoElement']['src'] = sr6y;
    }), f7m6rk(0x0, pjb5e, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (u4lp) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = u4lp;
    }), f7m6rk(0x0, pjb5e, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (q21dm8) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = q21dm8;
    }), hzi9x;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ceb4lu in Laya) {
    var i9ax8z = Laya[ceb4lu];i9ax8z && i9ax8z['__isclass'] && (exports[ceb4lu] = i9ax8z);
  }
});