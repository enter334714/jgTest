var W = wx.$l;
(function (window, document, n3y0x_) {
  var jkh2b = n3y0x_['un'],
      ltq5fz = n3y0x_['uns'],
      ev71gu = n3y0x_['static'],
      lfzt = n3y0x_['class'],
      tf975o = n3y0x_['getset'],
      t5hlzq = n3y0x_['__newvec'],
      qtlh5 = laya['utils']['Browser'],
      zhqjl = laya['events']['Event'],
      wmrc = laya['events']['EventDispatcher'],
      _y8xn4 = laya['resource']['HTMLImage'],
      cwmi3 = laya['utils']['Handler'],
      qz5fl = laya['display']['Input'],
      u1vg7e = laya['net']['Loader'],
      mcyr3 = laya['maths']['Matrix'],
      _x0n4y = laya['renders']['Render'],
      x0r3ny = laya['utils']['RunDriver'],
      xn0_y = laya['media']['Sound'],
      v19f = laya['media']['SoundChannel'],
      u1ep6g = laya['media']['SoundManager'],
      t9f75o = laya['display']['Stage'],
      cyrm0 = laya['net']['URL'],
      khb = laya['utils']['Utils'],
      zqhjlk = function () {
    function e1u7v() {}return lfzt(e1u7v, 'laya.wx.mini.MiniAdpter'), e1u7v['getJson'] = function (_4y8) {
      return JSON['parse'](_4y8);
    }, e1u7v['init'] = function (b$d8, vfo597) {
      b$d8 === void 0x0 && (b$d8 = ![]), vfo597 === void 0x0 && (vfo597 = ![]);if (e1u7v['_inited']) return;e1u7v['window'] = window;if (e1u7v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e1u7v['_inited'] = !![], e1u7v['isZiYu'] = vfo597, e1u7v['isPosMsgYu'] = b$d8, e1u7v['EnvConfig'] = {}, !e1u7v['isZiYu'] && (e9vo71['setNativeFileDir']('/layaairGame'), e9vo71['existDir'](e9vo71['fileNativeDir'], cwmi3['create'](e1u7v, e1u7v['onMkdirCallBack']))), e1u7v['window']['focus'] = function () {}, n3y0x_['getUrlPath'] = function () {}, e1u7v['window']['logtime'] = function (kbjd2) {}, e1u7v['window']['alertTimeLog'] = function (f759ot) {}, e1u7v['window']['resetShareInfo'] = function () {}, e1u7v['window']['CanvasRenderingContext2D'] = function () {}, e1u7v['window']['CanvasRenderingContext2D']['prototype'] = e1u7v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e1u7v['window']['document']['body']['appendChild'] = function () {}, e1u7v['EnvConfig']['pixelRatioInt'] = 0x0, x0r3ny['getPixelRatio'] = e1u7v['pixelRatio'], e1u7v['_preCreateElement'] = qtlh5['createElement'], qtlh5['createElement'] = e1u7v['createElement'], x0r3ny['createShaderCondition'] = e1u7v['createShaderCondition'], khb['parseXMLFromString'] = e1u7v['parseXMLFromString'], qz5fl['_createInputElement'] = kqjhza['_createInputElement'], e1u7v['EnvConfig']['load'] = u1vg7e['prototype']['load'], u1vg7e['prototype']['load'] = t9o57f['prototype']['load'], e1u7v['isZiYu'] && b$d8 && wx['onMessage'](function (z5qh) {
        z5qh['isLoad'] && (e9vo71['ziyuFileData'][z5qh['url']] = z5qh['data']);
      });
    }, e1u7v['onMkdirCallBack'] = function (x3ycr0, a$d2kb) {
      if (!x3ycr0) e9vo71['filesListObj'] = JSON['parse'](a$d2kb['data']);
    }, e1u7v['pixelRatio'] = function () {
      if (!e1u7v['EnvConfig']['pixelRatioInt']) try {
        var hlkjz = wx['getSystemInfoSync']();return e1u7v['EnvConfig']['pixelRatioInt'] = hlkjz['pixelRatio'], hlkjz = hlkjz, hlkjz['pixelRatio'];
      } catch ($s82b) {}return e1u7v['EnvConfig']['pixelRatioInt'];
    }, e1u7v['createElement'] = function (lot9) {
      if (lot9 == 'canvas') {
        var tfz5ql;return e1u7v['idx'] == 0x1 ? e1u7v['isZiYu'] ? (tfz5ql = sharedCanvas, tfz5ql['style'] = {}) : tfz5ql = window['canvas'] : tfz5ql = window['wx']['createCanvas'](), e1u7v['idx']++, tfz5ql;
      } else {
        if (lot9 == 'textarea' || lot9 == 'input') return e1u7v['onCreateInput'](lot9);else {
          if (lot9 == 'div') {
            var bjkha2 = e1u7v['_preCreateElement'](lot9);return bjkha2['contains'] = function (qhjak) {
              return null;
            }, bjkha2['removeChild'] = function (f95q) {}, bjkha2;
          } else return e1u7v['_preCreateElement'](lot9);
        }
      }
    }, e1u7v['onCreateInput'] = function (ad2s$b) {
      var _4$8s = e1u7v['_preCreateElement'](ad2s$b);return _4$8s['focus'] = kqjhza['wxinputFocus'], _4$8s['blur'] = kqjhza['wxinputblur'], _4$8s['style'] = {}, _4$8s['value'] = 0x0, _4$8s['parentElement'] = {}, _4$8s['placeholder'] = {}, _4$8s['type'] = {}, _4$8s['setColor'] = function (o1ve7g) {}, _4$8s['setType'] = function (qtlf) {}, _4$8s['setFontFace'] = function (g6ue1p) {}, _4$8s['addEventListener'] = function (uvg61) {}, _4$8s['contains'] = function (c3m0ri) {
        return null;
      }, _4$8s['removeChild'] = function (veg1u7) {}, _4$8s;
    }, e1u7v['createShaderCondition'] = function (u6veg) {
      var z5qtlf = this,
          kjqza = function () {
        var ir3m0c = u6veg;return z5qtlf[u6veg['replace']('this.', '')];
      };return kjqza;
    }, e1u7v['EnvConfig'] = null, e1u7v['window'] = null, e1u7v['_preCreateElement'] = null, e1u7v['_inited'] = ![], e1u7v['wxRequest'] = null, e1u7v['systemInfo'] = null, e1u7v['version'] = '0.0.1', e1u7v['isZiYu'] = ![], e1u7v['isPosMsgYu'] = ![], e1u7v['parseXMLFromString'] = function (fvo179) {
      var ovf791, y30n_x;fvo179 = fvo179['replace'](/>\s+</g, '><');try {
        ovf791 = new window['Parser']['DOMParser']()['parseFromString'](fvo179, 'text/xml');
      } catch (kbd2a) {
        throw '需要引入xml解析库文件';
      }return ovf791;
    }, e1u7v['idx'] = 0x1, e1u7v;
  }(),
      ba$k2d = function () {
    function x4_0y() {}lfzt(x4_0y, 'laya.wx.mini.MiniImage');var tljzq = x4_0y['prototype'];return tljzq['_loadImage'] = function (qahz) {
      var sn$_84 = this,
          p61eug = ![];qahz['indexOf']('layaNativeDir/') == -0x1 && (p61eug = !![], qahz = cyrm0['formatURL'](qahz));if (!e9vo71['getFileInfo'](qahz)) {
        if (qahz['indexOf']('http://') != -0x1 || qahz['indexOf']('https://') != -0x1) e9vo71['downImg'](qahz, new cwmi3(x4_0y, x4_0y['onDownImgCallBack'], [qahz, sn$_84]), qahz);else x4_0y['onCreateImage'](qahz, sn$_84, !![]);
      } else x4_0y['onCreateImage'](qahz, sn$_84, !p61eug);
    }, x4_0y['onDownImgCallBack'] = function (y84_nx, v759fo, sdba2) {
      if (!sdba2) x4_0y['onCreateImage'](y84_nx, v759fo);else v759fo['onError'](null);
    }, x4_0y['onCreateImage'] = function (mrci3, i3wrm, xn0y) {
      xn0y === void 0x0 && (xn0y = ![]);var v197f;if (!xn0y) {
        var bsd$2a = e9vo71['getFileInfo'](mrci3),
            f75o9t = bsd$2a['md5'];v197f = e9vo71['getFileNativePath'](f75o9t);
      } else v197f = mrci3;if (i3wrm['imgCache'] == null) i3wrm['imgCache'] = {};var hbajk2;function khjza() {
        hbajk2['onload'] = null, hbajk2['onerror'] = null, delete i3wrm['imgCache'][mrci3];
      };var cmr30i = function () {
        khjza(), i3wrm['onLoaded'](hbajk2);
      },
          hjqlkz = function () {
        khjza(), i3wrm['event']('error', 'Load image failed');
      };i3wrm['_type'] == 'nativeimage' ? (hbajk2 = new qtlh5['window']['Image'](), hbajk2['crossOrigin'] = '', hbajk2['onload'] = cmr30i, hbajk2['onerror'] = hjqlkz, hbajk2['src'] = v197f, i3wrm['imgCache'][mrci3] = hbajk2) : new _y8xn4['create'](v197f, { 'onload': cmr30i, 'onerror': hjqlkz, 'onCreate': function (d_s48) {
          hbajk2 = d_s48, i3wrm['imgCache'][mrci3] = d_s48;
        } });
    }, x4_0y;
  }(),
      kqjhza = function () {
    function q5flzt() {}return lfzt(q5flzt, 'laya.wx.mini.MiniInput'), q5flzt['_createInputElement'] = function () {
      qz5fl['_initInput'](qz5fl['area'] = qtlh5['createElement']('textarea')), qz5fl['_initInput'](qz5fl['input'] = qtlh5['createElement']('input')), qz5fl['inputContainer'] = qtlh5['createElement']('div'), qz5fl['inputContainer']['style']['position'] = 'absolute', qz5fl['inputContainer']['style']['zIndex'] = 0x186a0, qtlh5['container']['appendChild'](qz5fl['inputContainer']), qz5fl['inputContainer']['setPos'] = function (f5q9l, ahkjq) {
        qz5fl['inputContainer']['style']['left'] = f5q9l + 'px', qz5fl['inputContainer']['style']['top'] = ahkjq + 'px';
      }, n3y0x_['stage']['on']('resize', null, q5flzt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xn8_4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u1ep6g['_soundClass'] = qtzh5l, u1ep6g['_musicClass'] = qtzh5l;
    }, q5flzt['_onStageResize'] = function () {
      var da2b$k = n3y0x_['stage']['_canvasTransform']['identity']();da2b$k['scale'](qtlh5['width'] / _x0n4y['canvas']['width'] / x0r3ny['getPixelRatio'](), qtlh5['height'] / _x0n4y['canvas']['height'] / x0r3ny['getPixelRatio']());
    }, q5flzt['wxinputFocus'] = function (hkaqzj) {
      var r30xyn = qz5fl['inputElement']['target'];if (r30xyn && !r30xyn['editable']) return;zqhjlk['window']['wx']['offKeyboardConfirm'](), zqhjlk['window']['wx']['offKeyboardInput'](), zqhjlk['window']['wx']['showKeyboard']({ 'defaultValue': r30xyn['text'], 'maxLength': r30xyn['maxChars'], 'multiple': r30xyn['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y3rm0) {}, 'fail': function (ltqf59) {} }), zqhjlk['window']['wx']['onKeyboardConfirm'](function (x0rc3) {
        var e17gv = x0rc3 ? x0rc3['value'] : '';r30xyn['text'] = e17gv, r30xyn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zqhjlk['window']['wx']['onKeyboardInput'](function (vo97e) {
        var r3icmw = vo97e ? vo97e['value'] : '';if (!r30xyn['multiline']) {
          if (r3icmw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }r30xyn['text'] = r3icmw, r30xyn['event']('input');
      });
    }, q5flzt['inputEnter'] = function () {
      qz5fl['inputElement']['target']['focus'] = ![];
    }, q5flzt['wxinputblur'] = function () {
      q5flzt['hideKeyboard']();
    }, q5flzt['hideKeyboard'] = function () {
      zqhjlk['window']['wx']['offKeyboardConfirm'](), zqhjlk['window']['wx']['offKeyboardInput'](), zqhjlk['window']['wx']['hideKeyboard']({ 'success': function (jlhzqk) {
          console['log']('隐藏键盘');
        }, 'fail': function (egvo7) {
          console['log']('隐藏键盘出错:' + (egvo7 ? egvo7['errMsg'] : ''));
        } });
    }, q5flzt;
  }(),
      t9o57f = function () {
    function u1vg6() {}lfzt(u1vg6, 'laya.wx.mini.MiniLoader');var xc3y = u1vg6['prototype'];return xc3y['load'] = function (g7, akbhjz, nx4_s, r3xc0y, ft79o5) {
      nx4_s === void 0x0 && (nx4_s = !![]), ft79o5 === void 0x0 && (ft79o5 = ![]);var $sabd = this;$sabd['_url'] = g7;if (g7['indexOf']('data:image') === 0x0) $sabd['_type'] = akbhjz = 'image';else $sabd['_type'] = akbhjz || (akbhjz = $sabd['getTypeFromUrl'](g7));$sabd['_cache'] = nx4_s, $sabd['_data'] = null;var n_8y = 'ascii';if (g7['indexOf']('.fnt') != -0x1) n_8y = 'utf8';else akbhjz == 'arraybuffer' && (n_8y = '');;var x30n_y = khb['getFileExtension'](g7);if (u1vg6['_fileTypeArr']['indexOf'](x30n_y) != -0x1) zqhjlk['EnvConfig']['load']['call'](this, g7, akbhjz, nx4_s, r3xc0y, ft79o5);else {
        if (!e9vo71['getFileInfo'](g7)) {
          if (g7['indexOf']('layaNativeDir/') != -0x1) {
            if (zqhjlk['isZiYu']) {
              var o5v7f9 = e9vo71['ziyuFileData'][g7];$sabd['onLoaded'](o5v7f9);return;
            } else {
              cosnole['log']('read read'), e9vo71['read'](g7, n_8y, new cwmi3(u1vg6, u1vg6['onReadNativeCallBack'], [n_8y, g7, akbhjz, nx4_s, r3xc0y, ft79o5, $sabd]));return;
            }
          }if (cyrm0['rootPath'] == '') var dba2s = g7;else dba2s = g7['split'](cyrm0['rootPath'])[0x0];g7['indexOf']('http://') != -0x1 || g7['indexOf']('https://') != -0x1 ? zqhjlk['EnvConfig']['load']['call']($sabd, g7, akbhjz, nx4_s, r3xc0y, ft79o5) : e9vo71['readFile'](dba2s, n_8y, new cwmi3(u1vg6, u1vg6['onReadNativeCallBack'], [n_8y, g7, akbhjz, nx4_s, r3xc0y, ft79o5, $sabd]), g7);
        } else zqhjlk['EnvConfig']['load']['call'](this, g7, akbhjz, nx4_s, r3xc0y, ft79o5);
      }
    }, xc3y['resMgrLoad'] = function (s_$4, loft, bk2daj, ue17vg, voe917, r3xny, xn04y_) {
      bk2daj === void 0x0 && (bk2daj = 0x0), ue17vg === void 0x0 && (ue17vg = ![]), voe917 === void 0x0 && (voe917 = ![]), r3xny === void 0x0 && (r3xny = 0x0), xn04y_ === void 0x0 && (xn04y_ = 0x3), s_$4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s_$4), zqhjlk['EnvConfig']['resMgrLoad'](s_$4, (d8$4_s, eu1v7, zltfq) => {
        u1vg6['prototype']['resMgrLoadCallBack'](d8$4_s, eu1v7, zltfq, loft);
      }, bk2daj, ue17vg, voe917, r3xny, xn04y_);
    }, xc3y['resMgrLoadCallBack'] = function ($_ds84, o7vg1, _sn48, kjd2a) {
      console['log']('buff:::', $_ds84, _sn48, e9vo71['fileNativeDir'] + '///' + e9vo71['fileListName']), kjd2a($_ds84, o7vg1, _sn48);
    }, xc3y['clearRes'] = function (htjz, qf9lt) {
      qf9lt === void 0x0 && (qf9lt = ![]);var gu1ev = this;gu1ev['clearRes'](htjz, qf9lt);var rn03xy = e9vo71['getFileInfo'](htjz);if (rn03xy && (htjz['indexOf']('http://') != -0x1 || htjz['indexOf']('https://') != -0x1)) {
        var bd2as = rn03xy['md5'],
            dbka2$ = e9vo71['getFileNativePath'](bd2as);e9vo71['remove'](dbka2$);
      }
    }, u1vg6['onReadNativeCallBack'] = function (x3n_0y, g71e, qzlt5h, ge71vo, $k2bda, zjlqth, hqtj, c3rmiw, t9l5of) {
      ge71vo === void 0x0 && (ge71vo = !![]), zjlqth === void 0x0 && (zjlqth = ![]), c3rmiw === void 0x0 && (c3rmiw = 0x0);if (!c3rmiw) {
        var xry0n;if (qzlt5h == 'json' || qzlt5h == 'atlas') xry0n = zqhjlk['getJson'](t9l5of['data']);else qzlt5h == 'xml' ? xry0n = khb['parseXMLFromString'](t9l5of['data']) : xry0n = t9l5of['data'];hqtj['onLoaded'](xry0n), !zqhjlk['isZiYu'] && zqhjlk['isPosMsgYu'] && qzlt5h != 'arraybuffer' && wx['postMessage']({ 'url': g71e, 'data': xry0n, 'isLoad': !![] });
      } else c3rmiw == 0x1 && zqhjlk['EnvConfig']['load']['call'](hqtj, g71e, qzlt5h, ge71vo, $k2bda, zjlqth);
    }, ev71gu(u1vg6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), u1vg6;
  }(),
      e9vo71 = function (tf5l9o) {
    function zqhja() {
      zqhja['__super']['call'](this);;
    }return lfzt(zqhja, 'laya.wx.mini.MiniFileMgr', tf5l9o), zqhja['isLoadFile'] = function (d2$k) {
      return zqhja['_fileTypeArr']['indexOf'](d2$k) != -0x1 ? !![] : ![];
    }, zqhja['getFileInfo'] = function (bjakzh) {
      var q5thz = bjakzh['split']('?')[0x0],
          gpe16 = zqhja['filesListObj'][q5thz];if (gpe16 == null) return null;else return gpe16;return null;
    }, zqhja['onFileUpdate'] = function (ve9o71, jabdk) {
      var vf9o57 = ve9o71['split']('/'),
          kbh2 = vf9o57[vf9o57['length'] - 0x1],
          abjhz = zqhja['getFileInfo'](jabdk);if (abjhz == null) zqhja['onSaveFile'](jabdk, kbh2);else {
        if (abjhz['readyUrl'] != jabdk) zqhja['remove'](kbh2, jabdk);
      }
    }, zqhja['exits'] = function (y0cm3, qzkljh) {
      var _84nxy = zqhja['getFileNativePath'](y0cm3);zqhja['fs']['getFileInfo']({ 'filePath': _84nxy, 'success': function (f17v) {
          qzkljh != null && qzkljh['runWith']([0x0, f17v]);
        }, 'fail': function (akhbz) {
          qzkljh != null && qzkljh['runWith']([0x1, akhbz]);
        } });
    }, zqhja['read'] = function (tqfl9, cx0ry, v91e, u1veg7) {
      cx0ry === void 0x0 && (cx0ry = 'ascill'), u1veg7 === void 0x0 && (u1veg7 = '');var sb$d2;u1veg7 != '' ? sb$d2 = zqhja['getFileNativePath'](tqfl9) : sb$d2 = tqfl9, zqhja['fs']['readFile']({ 'filePath': sb$d2, 'encoding': cx0ry, 'success': function (x30ynr) {
          v91e != null && v91e['runWith']([0x0, x30ynr]);
        }, 'fail': function (rxn0y) {
          if (rxn0y && u1veg7 != '') zqhja['down'](u1veg7, cx0ry, v91e, u1veg7);else v91e != null && v91e['runWith']([0x1]);
        } });
    }, zqhja['readNativeFile'] = function (qjkzhl, u1pg6) {
      zqhja['fs']['readFile']({ 'filePath': qjkzhl, 'encoding': '', 'success': function (qajkhz) {
          u1pg6 != null && u1pg6['runWith']([0x0]);
        }, 'fail': function ($dasb2) {
          u1pg6 != null && u1pg6['runWith']([0x1]);
        } });
    }, zqhja['down'] = function (f9l5qt, bkd$2a, gpe61, gu) {
      bkd$2a === void 0x0 && (bkd$2a = 'ascill'), gu === void 0x0 && (gu = '');var ak2$d = zqhja['getFileNativePath'](gu),
          y3nx0_ = zqhja['wxdown']({ 'url': f9l5qt, 'filePath': ak2$d, 'success': function (c3mwi) {
          if (c3mwi['statusCode'] === 0xc8) zqhja['readFile'](c3mwi['filePath'], bkd$2a, gpe61, gu);
        }, 'fail': function (ztlhjq) {
          gpe61 != null && gpe61['runWith']([0x1, ztlhjq]);
        } });y3nx0_['onProgressUpdate'](function (mrc0i3) {
        gpe61 != null && gpe61['runWith']([0x2, mrc0i3['progress']]);
      });
    }, zqhja['readFile'] = function (aj2kd, xr30cy, mri03c, d28sb) {
      xr30cy === void 0x0 && (xr30cy = 'ascill'), d28sb === void 0x0 && (d28sb = ''), zqhja['fs']['readFile']({ 'filePath': aj2kd, 'encoding': xr30cy, 'success': function (x8yn_) {
          if (aj2kd['indexOf']('http://') != -0x1 || aj2kd['indexOf']('https://') != -0x1) zqhja['onFileUpdate'](aj2kd, d28sb);mri03c != null && mri03c['runWith']([0x0, x8yn_]);
        }, 'fail': function (vegu16) {
          if (vegu16) mri03c != null && mri03c['runWith']([0x1, vegu16]);
        } });
    }, zqhja['downImg'] = function (q5lhzt, t5lfzq, abd2$) {
      abd2$ === void 0x0 && (abd2$ = '');var bd2$ = zqhja['wxdown']({ 'url': q5lhzt, 'success': function (_x04y) {
          _x04y['statusCode'] === 0xc8 && zqhja['copyFile'](_x04y['tempFilePath'], abd2$, t5lfzq);
        }, 'fail': function (_s$4d) {
          t5lfzq != null && t5lfzq['runWith']([0x1, _s$4d]);
        } });
    }, zqhja['copyFile'] = function ($28ds4, kjqhlz, bda$2) {
      var yx_4n = $28ds4['split']('/'),
          o97fv = yx_4n[yx_4n['length'] - 0x1],
          s2da$b = kjqhlz['split']('?')[0x0],
          jhkqz = zqhja['getFileInfo'](kjqhlz),
          f9qt5 = zqhja['getFileNativePath'](o97fv);zqhja['fs']['copyFile']({ 'srcPath': $28ds4, 'destPath': f9qt5, 'success': function (zabh) {
          if (!jhkqz) zqhja['onSaveFile'](kjqhlz, o97fv), bda$2 != null && bda$2['runWith']([0x0]);else {
            if (jhkqz['readyUrl'] != kjqhlz) zqhja['remove'](o97fv, kjqhlz, bda$2);
          }
        }, 'fail': function (y03_n) {
          bda$2 != null && bda$2['runWith']([0x1, y03_n]);
        } });
    }, zqhja['getFileNativePath'] = function (xc3ry0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xc3ry0;
    }, zqhja['remove'] = function (o7evg, kqzhj, wicrm3) {
      kqzhj === void 0x0 && (kqzhj = '');var oe1v7 = zqhja['getFileInfo'](kqzhj),
          $sb28d = zqhja['getFileNativePath'](oe1v7['md5']);n3y0x_['loader']['clearRes'](oe1v7['readyUrl']), zqhja['fs']['unlink']({ 'filePath': $sb28d, 'success': function (ueg16p) {
          if (kqzhj != '') zqhja['onSaveFile'](kqzhj, o7evg);wicrm3 != null && wicrm3['runWith']([0x0]);
        }, 'fail': function (lf5o) {} });
    }, zqhja['onSaveFile'] = function ($428, jbhza) {
      var $2as = $428['split']('?')[0x0];zqhja['filesListObj'][$2as] = { 'md5': jbhza, 'readyUrl': $428 }, zqhja['fs']['writeFile']({ 'filePath': zqhja['fileNativeDir'] + '/' + zqhja['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zqhja['filesListObj']), 'success': function (q5hz) {
          console['log']('写入测试测试成功：', q5hz);
        }, 'fail': function (q5ht) {
          console['log']('写入测试测试失败：', q5ht);
        } });
    }, zqhja['existDir'] = function (t5qzlf, l9fo5) {
      zqhja['fs']['mkdir']({ 'dirPath': t5qzlf, 'success': function (y48_xn) {
          l9fo5 != null && l9fo5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (s_4n) {
          if (s_4n['errMsg']['indexOf']('file already exists') != -0x1) zqhja['readSync'](zqhja['fileListName'], 'utf8', l9fo5);else l9fo5 != null && l9fo5['runWith']([0x1, s_4n]);
        } });
    }, zqhja['readSync'] = function (x0n3_y, o17e9, i0cm3r, r03cyx) {
      o17e9 === void 0x0 && (o17e9 = 'ascill'), r03cyx === void 0x0 && (r03cyx = '');var hjlqk = zqhja['getFileNativePath'](x0n3_y),
          gu7ev1;try {
        gu7ev1 = zqhja['fs']['readFileSync'](hjlqk), i0cm3r != null && i0cm3r['runWith']([0x0, { 'data': gu7ev1 }]);
      } catch (oegv7) {
        i0cm3r != null && i0cm3r['runWith']([0x1]);
      }
    }, zqhja['readCache'] = function () {}, zqhja['writeCache'] = function (tlq5zh) {
      var kda2jb = readyUrl['split']('?')[0x0];zqhja['filesListObj'][kda2jb] = { 'md5': md5Name, 'readyUrl': readyUrl }, zqhja['fs']['writeFile']({ 'filePath': zqhja['fileNativeDir'] + '/' + zqhja['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zqhja['filesListObj']), 'success': function (kqahz) {}, 'fail': function (b2ajk) {} });
    }, zqhja['setNativeFileDir'] = function ($s2bd) {
      zqhja['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $s2bd;
    }, zqhja['filesListObj'] = {}, zqhja['fileNativeDir'] = null, zqhja['fileListName'] = 'layaairfiles.txt', zqhja['ziyuFileData'] = {}, ev71gu(zqhja, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), zqhja;
  }(wmrc),
      qtzh5l = function (hlkjzq) {
    function ajbkzh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ajbkzh['__super']['call'](this), this['_sound'] = ajbkzh['_createSound']();
    }lfzt(ajbkzh, 'laya.wx.mini.MiniSound', hlkjzq);var zlhqj = ajbkzh['prototype'];return zlhqj['load'] = function (bd2ak) {
      var eu6gp1 = this;bd2ak = cyrm0['formatURL'](bd2ak), this['url'] = bd2ak;if (ajbkzh['_audioCache'][bd2ak]) {
        this['event']('complete');return;
      }function o5f9v() {
        if (ajbkzh['_null'] != undefined) eu6gp1['_sound']['onCanplay'](ajbkzh['_null']), eu6gp1['_sound']['onError'](ajbkzh['_null']);else try {
          eu6gp1['_sound']['onCanplay'](null), eu6gp1['_sound']['onError'](null), ajbkzh['_null'] = null;
        } catch (_0ny) {
          console['warn']('[wxmini] _clearSound:' + _0ny), eu6gp1['_sound']['onCanplay'](sb$ad), eu6gp1['_sound']['onError'](sb$ad), ajbkzh['_null'] = sb$ad;
        }
      }function v71oe() {
        o5f9v(), $n_84['loaded'] = !![], $n_84['event']('complete'), ajbkzh['_audioCache'][$n_84['url']] = $n_84;
      }function hkjaz(ol59tf) {
        console['error']('errCode=' + ol59tf['errCode'] + '  errMsg=' + ol59tf['errMsg']), o5f9v(), $n_84['event']('error');
      }function sb$ad() {}this['_sound']['onCanplay'](v71oe), this['_sound']['onError'](hkjaz), this['_sound']['src'] = bd2ak;var $n_84 = this;
    }, zlhqj['play'] = function (n$8s4_, rx03c) {
      n$8s4_ === void 0x0 && (n$8s4_ = 0x0), rx03c === void 0x0 && (rx03c = 0x0);var y0_3x;if (this['url'] == u1ep6g['_tMusic']) {
        if (!ajbkzh['_musicAudio']) ajbkzh['_musicAudio'] = ajbkzh['_createSound']();y0_3x = ajbkzh['_musicAudio'];
      } else y0_3x = ajbkzh['_createSound']();y0_3x['src'] = this['url'];var yrn30 = new g1ep6u(y0_3x);return yrn30['url'] = this['url'], yrn30['loops'] = rx03c, yrn30['startTime'] = n$8s4_, yrn30['play'](), u1ep6g['addChannel'](yrn30), yrn30;
    }, zlhqj['dispose'] = function () {
      var lhzq5t = ajbkzh['_audioCache'][this['url']];lhzq5t && (lhzq5t['src'] = '', delete ajbkzh['_audioCache'][this['url']]);
    }, tf975o(0x0, zlhqj, 'duration', function () {
      return this['_sound']['duration'];
    }), ajbkzh['_createSound'] = function () {
      return ajbkzh['_id']++, zqhjlk['window']['wx']['createInnerAudioContext']();
    }, ajbkzh['_musicAudio'] = null, ajbkzh['_id'] = 0x0, ajbkzh['_audioCache'] = {}, ajbkzh['_null'] = undefined, ajbkzh;
  }(wmrc),
      g1ep6u = function (cwir) {
    function kd$2ba(nxry03) {
      this['_audio'] = null, this['_onEnd'] = null, kd$2ba['__super']['call'](this), this['_audio'] = nxry03, this['_onEnd'] = khb['bind'](this['__onEnd'], this), nxry03['onEnded'](this['_onEnd']);
    }lfzt(kd$2ba, 'laya.wx.mini.MiniSoundChannel', cwir);var olt5 = kd$2ba['prototype'];return olt5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (n3y0x_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, olt5['__onNull'] = function () {}, olt5['play'] = function () {
      this['isStopped'] = ![], u1ep6g['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, olt5['stop'] = function () {
      this['isStopped'] = !![], u1ep6g['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kd$2ba['_null'] != undefined) this['_audio']['onEnded'](kd$2ba['_null']);else try {
        this['_audio']['onEnded'](null), kd$2ba['_null'] = null;
      } catch (jqlhtz) {
        console['warn']('[wxmini] stop:' + jqlhtz), this['_audio']['onEnded'](khb['bind'](this['__onNull'], this)), kd$2ba['_null'] = khb['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, olt5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, olt5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u1ep6g['addChannel'](this), this['_audio']['play']();
    }, tf975o(0x0, olt5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tf975o(0x0, olt5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tf975o(0x0, olt5, 'volume', function () {
      return 0x1;
    }, function (da2$sb) {}), kd$2ba['_null'] = undefined, kd$2ba;
  }(v19f);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var n40y_x in Laya) {
    var v957 = Laya[n40y_x];v957 && v957['__isclass'] && (exports[n40y_x] = v957);
  }
});