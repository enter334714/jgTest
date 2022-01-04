var k = wx.$f;
(function (window, document, z7re8x) {
  var wze8x = z7re8x['un'],
      buv1im = z7re8x['uns'],
      mfbtv = z7re8x['static'],
      ivu9b1 = z7re8x['class'],
      k_5624 = z7re8x['getset'],
      fbith = z7re8x['__newvec'],
      m0qht = laya['utils']['Browser'],
      z8xew = laya['events']['Event'],
      ocwjs = laya['events']['EventDispatcher'],
      cod6sj = laya['resource']['HTMLImage'],
      k2_q5 = laya['utils']['Handler'],
      jsdn = laya['display']['Input'],
      doc6js = laya['net']['Loader'],
      hq0_5k = laya['maths']['Matrix'],
      f0qt5h = laya['renders']['Render'],
      sodjc = laya['utils']['RunDriver'],
      wjcsn = laya['media']['Sound'],
      a$r3 = laya['media']['SoundChannel'],
      t50fq = laya['media']['SoundManager'],
      weznsx = laya['display']['Stage'],
      ezw8x = laya['net']['URL'],
      xz8nr = laya['utils']['Utils'],
      wdcjs = function () {
    function djo6s() {}return ivu9b1(djo6s, 'laya.wx.mini.MiniAdpter'), djo6s['getJson'] = function (y7$3p) {
      return JSON['parse'](y7$3p);
    }, djo6s['init'] = function (tfbmiv, e8xznr) {
      tfbmiv === void 0x0 && (tfbmiv = ![]), e8xznr === void 0x0 && (e8xznr = ![]);if (djo6s['_inited']) return;djo6s['window'] = window;if (djo6s['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;djo6s['_inited'] = !![], djo6s['isZiYu'] = e8xznr, djo6s['isPosMsgYu'] = tfbmiv, djo6s['EnvConfig'] = {}, !djo6s['isZiYu'] && (i0hfm['setNativeFileDir']('/layaairGame'), i0hfm['existDir'](i0hfm['fileNativeDir'], k2_q5['create'](djo6s, djo6s['onMkdirCallBack']))), djo6s['window']['focus'] = function () {}, z7re8x['getUrlPath'] = function () {}, djo6s['window']['logtime'] = function (nxz8) {}, djo6s['window']['alertTimeLog'] = function (enrz) {}, djo6s['window']['resetShareInfo'] = function () {}, djo6s['window']['CanvasRenderingContext2D'] = function () {}, djo6s['window']['CanvasRenderingContext2D']['prototype'] = djo6s['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], djo6s['window']['document']['body']['appendChild'] = function () {}, djo6s['EnvConfig']['pixelRatioInt'] = 0x0, sodjc['getPixelRatio'] = djo6s['pixelRatio'], djo6s['_preCreateElement'] = m0qht['createElement'], m0qht['createElement'] = djo6s['createElement'], sodjc['createShaderCondition'] = djo6s['createShaderCondition'], xz8nr['parseXMLFromString'] = djo6s['parseXMLFromString'], jsdn['_createInputElement'] = q0_h5['_createInputElement'], djo6s['EnvConfig']['load'] = doc6js['prototype']['load'], doc6js['prototype']['load'] = zewsnx['prototype']['load'], djo6s['isZiYu'] && tfbmiv && wx['onMessage'](function (ui9v1) {
        ui9v1['isLoad'] && (i0hfm['ziyuFileData'][ui9v1['url']] = ui9v1['data']);
      });
    }, djo6s['onMkdirCallBack'] = function (_2k6o4, c46o2) {
      if (!_2k6o4) i0hfm['filesListObj'] = JSON['parse'](c46o2['data']);
    }, djo6s['pixelRatio'] = function () {
      if (!djo6s['EnvConfig']['pixelRatioInt']) try {
        var hmtq0f = wx['getSystemInfoSync']();return djo6s['EnvConfig']['pixelRatioInt'] = hmtq0f['pixelRatio'], hmtq0f = hmtq0f, hmtq0f['pixelRatio'];
      } catch (mibu1v) {}return djo6s['EnvConfig']['pixelRatioInt'];
    }, djo6s['createElement'] = function (x8enr) {
      if (x8enr == 'canvas') {
        var scnj;return djo6s['idx'] == 0x1 ? djo6s['isZiYu'] ? (scnj = sharedCanvas, scnj['style'] = {}) : scnj = window['canvas'] : scnj = window['wx']['createCanvas'](), djo6s['idx']++, scnj;
      } else {
        if (x8enr == 'textarea' || x8enr == 'input') return djo6s['onCreateInput'](x8enr);else {
          if (x8enr == 'div') {
            var h5q0 = djo6s['_preCreateElement'](x8enr);return h5q0['contains'] = function (ezx8rn) {
              return null;
            }, h5q0['removeChild'] = function (qf0t5h) {}, h5q0;
          } else return djo6s['_preCreateElement'](x8enr);
        }
      }
    }, djo6s['onCreateInput'] = function (k45_q0) {
      var dwjnc = djo6s['_preCreateElement'](k45_q0);return dwjnc['focus'] = q0_h5['wxinputFocus'], dwjnc['blur'] = q0_h5['wxinputblur'], dwjnc['style'] = {}, dwjnc['value'] = 0x0, dwjnc['parentElement'] = {}, dwjnc['placeholder'] = {}, dwjnc['type'] = {}, dwjnc['setColor'] = function (qtf0h) {}, dwjnc['setType'] = function (z$re87) {}, dwjnc['setFontFace'] = function (mi0htf) {}, dwjnc['addEventListener'] = function (swocj) {}, dwjnc['contains'] = function (wzxs) {
        return null;
      }, dwjnc['removeChild'] = function (_q52k) {}, dwjnc;
    }, djo6s['createShaderCondition'] = function (_4k562) {
      var k0qt = this,
          g9bvu = function () {
        var bmfviu = _4k562;return k0qt[_4k562['replace']('this.', '')];
      };return g9bvu;
    }, djo6s['EnvConfig'] = null, djo6s['window'] = null, djo6s['_preCreateElement'] = null, djo6s['_inited'] = ![], djo6s['wxRequest'] = null, djo6s['systemInfo'] = null, djo6s['version'] = '0.0.1', djo6s['isZiYu'] = ![], djo6s['isPosMsgYu'] = ![], djo6s['parseXMLFromString'] = function (js6o) {
      var jodwsc, ojdc6s;js6o = js6o['replace'](/>\s+</g, '><');try {
        jodwsc = new window['Parser']['DOMParser']()['parseFromString'](js6o, 'text/xml');
      } catch (yp73$a) {
        throw '需要引入xml解析库文件';
      }return jodwsc;
    }, djo6s['idx'] = 0x1, djo6s;
  }(),
      ocdsw = function () {
    function c46jo() {}ivu9b1(c46jo, 'laya.wx.mini.MiniImage');var ft50h = c46jo['prototype'];return ft50h['_loadImage'] = function (umibv) {
      var scjdow = this,
          eszxn = ![];umibv['indexOf']('layaNativeDir/') == -0x1 && (eszxn = !![], umibv = ezw8x['formatURL'](umibv));if (!i0hfm['getFileInfo'](umibv)) {
        if (umibv['indexOf']('http://') != -0x1 || umibv['indexOf']('https://') != -0x1) i0hfm['downImg'](umibv, new k2_q5(c46jo, c46jo['onDownImgCallBack'], [umibv, scjdow]), umibv);else c46jo['onCreateImage'](umibv, scjdow, !![]);
      } else c46jo['onCreateImage'](umibv, scjdow, !eszxn);
    }, c46jo['onDownImgCallBack'] = function (p$ay37, xzwse, bmiuv) {
      if (!bmiuv) c46jo['onCreateImage'](p$ay37, xzwse);else xzwse['onError'](null);
    }, c46jo['onCreateImage'] = function (exwzs, _2k46o, tbihf) {
      tbihf === void 0x0 && (tbihf = ![]);var e87x;if (!tbihf) {
        var tih0 = i0hfm['getFileInfo'](exwzs),
            ez$7r = tih0['md5'];e87x = i0hfm['getFileNativePath'](ez$7r);
      } else e87x = exwzs;if (_2k46o['imgCache'] == null) _2k46o['imgCache'] = {};var qf05ht;function c4j26o() {
        qf05ht['onload'] = null, qf05ht['onerror'] = null, delete _2k46o['imgCache'][exwzs];
      };var zern = function () {
        c4j26o(), _2k46o['onLoaded'](qf05ht);
      },
          _kq05 = function () {
        c4j26o(), _2k46o['event']('error', 'Load image failed');
      };_2k46o['_type'] == 'nativeimage' ? (qf05ht = new m0qht['window']['Image'](), qf05ht['crossOrigin'] = '', qf05ht['onload'] = zern, qf05ht['onerror'] = _kq05, qf05ht['src'] = e87x, _2k46o['imgCache'][exwzs] = qf05ht) : new cod6sj['create'](e87x, { 'onload': zern, 'onerror': _kq05, 'onCreate': function (nsexdw) {
          qf05ht = nsexdw, _2k46o['imgCache'][exwzs] = nsexdw;
        } });
    }, c46jo;
  }(),
      q0_h5 = function () {
    function ivtm() {}return ivu9b1(ivtm, 'laya.wx.mini.MiniInput'), ivtm['_createInputElement'] = function () {
      jsdn['_initInput'](jsdn['area'] = m0qht['createElement']('textarea')), jsdn['_initInput'](jsdn['input'] = m0qht['createElement']('input')), jsdn['inputContainer'] = m0qht['createElement']('div'), jsdn['inputContainer']['style']['position'] = 'absolute', jsdn['inputContainer']['style']['zIndex'] = 0x186a0, m0qht['container']['appendChild'](jsdn['inputContainer']), jsdn['inputContainer']['setPos'] = function (zxe7, cd6jso) {
        jsdn['inputContainer']['style']['left'] = zxe7 + 'px', jsdn['inputContainer']['style']['top'] = cd6jso + 'px';
      }, z7re8x['stage']['on']('resize', null, ivtm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rz87xe) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), t50fq['_soundClass'] = jwdnsx, t50fq['_musicClass'] = jwdnsx;
    }, ivtm['_onStageResize'] = function () {
      var _2546k = z7re8x['stage']['_canvasTransform']['identity']();_2546k['scale'](m0qht['width'] / f0qt5h['canvas']['width'] / sodjc['getPixelRatio'](), m0qht['height'] / f0qt5h['canvas']['height'] / sodjc['getPixelRatio']());
    }, ivtm['wxinputFocus'] = function (ibv1um) {
      var znx8e = jsdn['inputElement']['target'];if (znx8e && !znx8e['editable']) return;wdcjs['window']['wx']['offKeyboardConfirm'](), wdcjs['window']['wx']['offKeyboardInput'](), wdcjs['window']['wx']['showKeyboard']({ 'defaultValue': znx8e['text'], 'maxLength': znx8e['maxChars'], 'multiple': znx8e['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ftibv) {}, 'fail': function (djns) {} }), wdcjs['window']['wx']['onKeyboardConfirm'](function (codj2) {
        var o264k = codj2 ? codj2['value'] : '';znx8e['text'] = o264k, znx8e['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), wdcjs['window']['wx']['onKeyboardInput'](function (j6o2cd) {
        var ojcsd = j6o2cd ? j6o2cd['value'] : '';if (!znx8e['multiline']) {
          if (ojcsd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }znx8e['text'] = ojcsd, znx8e['event']('input');
      });
    }, ivtm['inputEnter'] = function () {
      jsdn['inputElement']['target']['focus'] = ![];
    }, ivtm['wxinputblur'] = function () {
      ivtm['hideKeyboard']();
    }, ivtm['hideKeyboard'] = function () {
      wdcjs['window']['wx']['offKeyboardConfirm'](), wdcjs['window']['wx']['offKeyboardInput'](), wdcjs['window']['wx']['hideKeyboard']({ 'success': function (tqh50) {
          console['log']('隐藏键盘');
        }, 'fail': function (xwensd) {
          console['log']('隐藏键盘出错:' + (xwensd ? xwensd['errMsg'] : ''));
        } });
    }, ivtm;
  }(),
      zewsnx = function () {
    function uifv() {}ivu9b1(uifv, 'laya.wx.mini.MiniLoader');var do6js = uifv['prototype'];return do6js['load'] = function (swndj, wdnexs, $ry387, o4c_, dxwsj) {
      $ry387 === void 0x0 && ($ry387 = !![]), dxwsj === void 0x0 && (dxwsj = ![]);var q254_k = this;q254_k['_url'] = swndj;if (swndj['indexOf']('data:image') === 0x0) q254_k['_type'] = wdnexs = 'image';else q254_k['_type'] = wdnexs || (wdnexs = q254_k['getTypeFromUrl'](swndj));q254_k['_cache'] = $ry387, q254_k['_data'] = null;var sdojc = 'ascii';if (swndj['indexOf']('.fnt') != -0x1) sdojc = 'utf8';else wdnexs == 'arraybuffer' && (sdojc = '');;var h0tmqf = xz8nr['getFileExtension'](swndj);if (uifv['_fileTypeArr']['indexOf'](h0tmqf) != -0x1) wdcjs['EnvConfig']['load']['call'](this, swndj, wdnexs, $ry387, o4c_, dxwsj);else {
        if (!i0hfm['getFileInfo'](swndj)) {
          if (swndj['indexOf']('layaNativeDir/') != -0x1) {
            if (wdcjs['isZiYu']) {
              var vmb1ui = i0hfm['ziyuFileData'][swndj];q254_k['onLoaded'](vmb1ui);return;
            } else {
              cosnole['log']('read read'), i0hfm['read'](swndj, sdojc, new k2_q5(uifv, uifv['onReadNativeCallBack'], [sdojc, swndj, wdnexs, $ry387, o4c_, dxwsj, q254_k]));return;
            }
          }if (ezw8x['rootPath'] == '') var jcos6d = swndj;else jcos6d = swndj['split'](ezw8x['rootPath'])[0x0];swndj['indexOf']('http://') != -0x1 || swndj['indexOf']('https://') != -0x1 ? wdcjs['EnvConfig']['load']['call'](q254_k, swndj, wdnexs, $ry387, o4c_, dxwsj) : i0hfm['readFile'](jcos6d, sdojc, new k2_q5(uifv, uifv['onReadNativeCallBack'], [sdojc, swndj, wdnexs, $ry387, o4c_, dxwsj, q254_k]), swndj);
        } else wdcjs['EnvConfig']['load']['call'](this, swndj, wdnexs, $ry387, o4c_, dxwsj);
      }
    }, do6js['resMgrLoad'] = function (jnxw, mtq, mu1bvi, u9vg1b, u1b9gv, r7ya$, mfvui) {
      mu1bvi === void 0x0 && (mu1bvi = 0x0), u9vg1b === void 0x0 && (u9vg1b = ![]), u1b9gv === void 0x0 && (u1b9gv = ![]), r7ya$ === void 0x0 && (r7ya$ = 0x0), mfvui === void 0x0 && (mfvui = 0x3), jnxw['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jnxw), wdcjs['EnvConfig']['resMgrLoad'](jnxw, (u9bv1, b1imvu, o2c4j6) => {
        uifv['prototype']['resMgrLoadCallBack'](u9bv1, b1imvu, o2c4j6, mtq);
      }, mu1bvi, u9vg1b, u1b9gv, r7ya$, mfvui);
    }, do6js['resMgrLoadCallBack'] = function (vg9b1, e87rz, hit0fm, y873$) {
      console['log']('buff:::', vg9b1, hit0fm, i0hfm['fileNativeDir'] + '///' + i0hfm['fileListName']), y873$(vg9b1, e87rz, hit0fm);
    }, do6js['clearRes'] = function (ht0im, imfubv) {
      imfubv === void 0x0 && (imfubv = ![]);var bmiu1v = this;bmiu1v['clearRes'](ht0im, imfubv);var bmtivf = i0hfm['getFileInfo'](ht0im);if (bmtivf && (ht0im['indexOf']('http://') != -0x1 || ht0im['indexOf']('https://') != -0x1)) {
        var sxwed = bmtivf['md5'],
            k4o62 = i0hfm['getFileNativePath'](sxwed);i0hfm['remove'](k4o62);
      }
    }, uifv['onReadNativeCallBack'] = function (qfhm, _k4q05, ojdsw, dwsncj, vfbtmi, mu1i, fivubm, ugbv19, j6csod) {
      dwsncj === void 0x0 && (dwsncj = !![]), mu1i === void 0x0 && (mu1i = ![]), ugbv19 === void 0x0 && (ugbv19 = 0x0);if (!ugbv19) {
        var x8nz;if (ojdsw == 'json' || ojdsw == 'atlas') x8nz = wdcjs['getJson'](j6csod['data']);else ojdsw == 'xml' ? x8nz = xz8nr['parseXMLFromString'](j6csod['data']) : x8nz = j6csod['data'];fivubm['onLoaded'](x8nz), !wdcjs['isZiYu'] && wdcjs['isPosMsgYu'] && ojdsw != 'arraybuffer' && wx['postMessage']({ 'url': _k4q05, 'data': x8nz, 'isLoad': !![] });
      } else ugbv19 == 0x1 && wdcjs['EnvConfig']['load']['call'](fivubm, _k4q05, ojdsw, dwsncj, vfbtmi, mu1i);
    }, mfbtv(uifv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), uifv;
  }(),
      i0hfm = function (xdwse) {
    function r8$73() {
      r8$73['__super']['call'](this);;
    }return ivu9b1(r8$73, 'laya.wx.mini.MiniFileMgr', xdwse), r8$73['isLoadFile'] = function ($r3ay7) {
      return r8$73['_fileTypeArr']['indexOf']($r3ay7) != -0x1 ? !![] : ![];
    }, r8$73['getFileInfo'] = function (htkq0) {
      var x8n = htkq0['split']('?')[0x0],
          sdjncw = r8$73['filesListObj'][x8n];if (sdjncw == null) return null;else return sdjncw;return null;
    }, r8$73['onFileUpdate'] = function (c2jo64, r8ez7) {
      var o642c_ = c2jo64['split']('/'),
          x8erz = o642c_[o642c_['length'] - 0x1],
          z7r$3 = r8$73['getFileInfo'](r8ez7);if (z7r$3 == null) r8$73['onSaveFile'](r8ez7, x8erz);else {
        if (z7r$3['readyUrl'] != r8ez7) r8$73['remove'](x8erz, r8ez7);
      }
    }, r8$73['exits'] = function (wzxsen, c6o2dj) {
      var fitbm = r8$73['getFileNativePath'](wzxsen);r8$73['fs']['getFileInfo']({ 'filePath': fitbm, 'success': function ($a73) {
          c6o2dj != null && c6o2dj['runWith']([0x0, $a73]);
        }, 'fail': function (_k6542) {
          c6o2dj != null && c6o2dj['runWith']([0x1, _k6542]);
        } });
    }, r8$73['read'] = function (_q4k0, _42kq, tfhq5, sdwo) {
      _42kq === void 0x0 && (_42kq = 'ascill'), sdwo === void 0x0 && (sdwo = '');var mibuf;sdwo != '' ? mibuf = r8$73['getFileNativePath'](_q4k0) : mibuf = _q4k0, r8$73['fs']['readFile']({ 'filePath': mibuf, 'encoding': _42kq, 'success': function (bvmufi) {
          tfhq5 != null && tfhq5['runWith']([0x0, bvmufi]);
        }, 'fail': function ($37pa) {
          if ($37pa && sdwo != '') r8$73['down'](sdwo, _42kq, tfhq5, sdwo);else tfhq5 != null && tfhq5['runWith']([0x1]);
        } });
    }, r8$73['readNativeFile'] = function (q_0k, y378) {
      r8$73['fs']['readFile']({ 'filePath': q_0k, 'encoding': '', 'success': function (oc26_) {
          y378 != null && y378['runWith']([0x0]);
        }, 'fail': function (qh5tf0) {
          y378 != null && y378['runWith']([0x1]);
        } });
    }, r8$73['down'] = function (nxwzs, mqfth0, mivbft, wodcsj) {
      mqfth0 === void 0x0 && (mqfth0 = 'ascill'), wodcsj === void 0x0 && (wodcsj = '');var $rze8 = r8$73['getFileNativePath'](wodcsj),
          timfb = r8$73['wxdown']({ 'url': nxwzs, 'filePath': $rze8, 'success': function (thqk0) {
          if (thqk0['statusCode'] === 0xc8) r8$73['readFile'](thqk0['filePath'], mqfth0, mivbft, wodcsj);
        }, 'fail': function (bfmhti) {
          mivbft != null && mivbft['runWith']([0x1, bfmhti]);
        } });timfb['onProgressUpdate'](function (v9ub1) {
        mivbft != null && mivbft['runWith']([0x2, v9ub1['progress']]);
      });
    }, r8$73['readFile'] = function (ti0hm, cd, k6_4, o4c62j) {
      cd === void 0x0 && (cd = 'ascill'), o4c62j === void 0x0 && (o4c62j = ''), r8$73['fs']['readFile']({ 'filePath': ti0hm, 'encoding': cd, 'success': function (vum) {
          if (ti0hm['indexOf']('http://') != -0x1 || ti0hm['indexOf']('https://') != -0x1) r8$73['onFileUpdate'](ti0hm, o4c62j);k6_4 != null && k6_4['runWith']([0x0, vum]);
        }, 'fail': function (jxdnsw) {
          if (jxdnsw) k6_4 != null && k6_4['runWith']([0x1, jxdnsw]);
        } });
    }, r8$73['downImg'] = function (zr$387, xnjd, _64ok2) {
      _64ok2 === void 0x0 && (_64ok2 = '');var q0k_4 = r8$73['wxdown']({ 'url': zr$387, 'success': function (xwnds) {
          xwnds['statusCode'] === 0xc8 && r8$73['copyFile'](xwnds['tempFilePath'], _64ok2, xnjd);
        }, 'fail': function (sdjxn) {
          xnjd != null && xnjd['runWith']([0x1, sdjxn]);
        } });
    }, r8$73['copyFile'] = function (jcswdo, c46oj, nzre8) {
      var cjos = jcswdo['split']('/'),
          r3y87 = cjos[cjos['length'] - 0x1],
          fhmt0 = c46oj['split']('?')[0x0],
          ib1uvm = r8$73['getFileInfo'](c46oj),
          pa$7y = r8$73['getFileNativePath'](r3y87);r8$73['fs']['copyFile']({ 'srcPath': jcswdo, 'destPath': pa$7y, 'success': function (ifvb) {
          if (!ib1uvm) r8$73['onSaveFile'](c46oj, r3y87), nzre8 != null && nzre8['runWith']([0x0]);else {
            if (ib1uvm['readyUrl'] != c46oj) r8$73['remove'](r3y87, c46oj, nzre8);
          }
        }, 'fail': function (u1miv) {
          nzre8 != null && nzre8['runWith']([0x1, u1miv]);
        } });
    }, r8$73['getFileNativePath'] = function (exdsn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + exdsn;
    }, r8$73['remove'] = function (_26o, oc6_42, mtf0hq) {
      oc6_42 === void 0x0 && (oc6_42 = '');var r87ez$ = r8$73['getFileInfo'](oc6_42),
          r$37 = r8$73['getFileNativePath'](r87ez$['md5']);z7re8x['loader']['clearRes'](r87ez$['readyUrl']), r8$73['fs']['unlink']({ 'filePath': r$37, 'success': function (qhkt0) {
          if (oc6_42 != '') r8$73['onSaveFile'](oc6_42, _26o);mtf0hq != null && mtf0hq['runWith']([0x0]);
        }, 'fail': function (kq2_5) {} });
    }, r8$73['onSaveFile'] = function (umfvi, _c2) {
      var c4o6_ = umfvi['split']('?')[0x0];r8$73['filesListObj'][c4o6_] = { 'md5': _c2, 'readyUrl': umfvi }, r8$73['fs']['writeFile']({ 'filePath': r8$73['fileNativeDir'] + '/' + r8$73['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8$73['filesListObj']), 'success': function (c_4o) {
          console['log']('写入测试测试成功：', c_4o);
        }, 'fail': function (nxs) {
          console['log']('写入测试测试失败：', nxs);
        } });
    }, r8$73['existDir'] = function ($ap3y7, hq0k_) {
      r8$73['fs']['mkdir']({ 'dirPath': $ap3y7, 'success': function (c6_o2) {
          hq0k_ != null && hq0k_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (o62cdj) {
          if (o62cdj['errMsg']['indexOf']('file already exists') != -0x1) r8$73['readSync'](r8$73['fileListName'], 'utf8', hq0k_);else hq0k_ != null && hq0k_['runWith']([0x1, o62cdj]);
        } });
    }, r8$73['readSync'] = function (njxdw, $7r8ze, c4oj2, z7xe8) {
      $7r8ze === void 0x0 && ($7r8ze = 'ascill'), z7xe8 === void 0x0 && (z7xe8 = '');var ensz = r8$73['getFileNativePath'](njxdw),
          o6_c4;try {
        o6_c4 = r8$73['fs']['readFileSync'](ensz), c4oj2 != null && c4oj2['runWith']([0x0, { 'data': o6_c4 }]);
      } catch (q0hft5) {
        c4oj2 != null && c4oj2['runWith']([0x1]);
      }
    }, r8$73['readCache'] = function () {}, r8$73['writeCache'] = function (tvmbi) {
      var z8e7$r = readyUrl['split']('?')[0x0];r8$73['filesListObj'][z8e7$r] = { 'md5': md5Name, 'readyUrl': readyUrl }, r8$73['fs']['writeFile']({ 'filePath': r8$73['fileNativeDir'] + '/' + r8$73['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8$73['filesListObj']), 'success': function (r8en) {}, 'fail': function (xjds) {} });
    }, r8$73['setNativeFileDir'] = function (exwds) {
      r8$73['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + exwds;
    }, r8$73['filesListObj'] = {}, r8$73['fileNativeDir'] = null, r8$73['fileListName'] = 'layaairfiles.txt', r8$73['ziyuFileData'] = {}, mfbtv(r8$73, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), r8$73;
  }(ocwjs),
      jwdnsx = function (mfhq0) {
    function vmift() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vmift['__super']['call'](this), this['_sound'] = vmift['_createSound']();
    }ivu9b1(vmift, 'laya.wx.mini.MiniSound', mfhq0);var r3y$a = vmift['prototype'];return r3y$a['load'] = function (r783) {
      var m0hqt = this;r783 = ezw8x['formatURL'](r783), this['url'] = r783;if (vmift['_audioCache'][r783]) {
        this['event']('complete');return;
      }function y$37a() {
        if (vmift['_null'] != undefined) m0hqt['_sound']['onCanplay'](vmift['_null']), m0hqt['_sound']['onError'](vmift['_null']);else try {
          m0hqt['_sound']['onCanplay'](null), m0hqt['_sound']['onError'](null), vmift['_null'] = null;
        } catch (exnw8z) {
          console['warn']('[wxmini] _clearSound:' + exnw8z), m0hqt['_sound']['onCanplay'](ibvft), m0hqt['_sound']['onError'](ibvft), vmift['_null'] = ibvft;
        }
      }function y$ra3() {
        y$37a(), thmfib['loaded'] = !![], thmfib['event']('complete'), vmift['_audioCache'][thmfib['url']] = thmfib;
      }function uv1bi9(fibmt) {
        console['error']('errCode=' + fibmt['errCode'] + '  errMsg=' + fibmt['errMsg']), y$37a(), thmfib['event']('error');
      }function ibvft() {}this['_sound']['onCanplay'](y$ra3), this['_sound']['onError'](uv1bi9), this['_sound']['src'] = r783;var thmfib = this;
    }, r3y$a['play'] = function (tivbmf, tfm0h) {
      tivbmf === void 0x0 && (tivbmf = 0x0), tfm0h === void 0x0 && (tfm0h = 0x0);var jcods;if (this['url'] == t50fq['_tMusic']) {
        if (!vmift['_musicAudio']) vmift['_musicAudio'] = vmift['_createSound']();jcods = vmift['_musicAudio'];
      } else jcods = vmift['_createSound']();jcods['src'] = this['url'];var r73$ay = new zr37$8(jcods);return r73$ay['url'] = this['url'], r73$ay['loops'] = tfm0h, r73$ay['startTime'] = tivbmf, r73$ay['play'](), t50fq['addChannel'](r73$ay), r73$ay;
    }, r3y$a['dispose'] = function () {
      var wsexn = vmift['_audioCache'][this['url']];wsexn && (wsexn['src'] = '', delete vmift['_audioCache'][this['url']]);
    }, k_5624(0x0, r3y$a, 'duration', function () {
      return this['_sound']['duration'];
    }), vmift['_createSound'] = function () {
      return vmift['_id']++, wdcjs['window']['wx']['createInnerAudioContext']();
    }, vmift['_musicAudio'] = null, vmift['_id'] = 0x0, vmift['_audioCache'] = {}, vmift['_null'] = undefined, vmift;
  }(ocwjs),
      zr37$8 = function (odw) {
    function nsxjdw(mif0t) {
      this['_audio'] = null, this['_onEnd'] = null, nsxjdw['__super']['call'](this), this['_audio'] = mif0t, this['_onEnd'] = xz8nr['bind'](this['__onEnd'], this), mif0t['onEnded'](this['_onEnd']);
    }ivu9b1(nsxjdw, 'laya.wx.mini.MiniSoundChannel', odw);var k45q0_ = nsxjdw['prototype'];return k45q0_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z7re8x['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, k45q0_['__onNull'] = function () {}, k45q0_['play'] = function () {
      this['isStopped'] = ![], t50fq['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, k45q0_['stop'] = function () {
      this['isStopped'] = !![], t50fq['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (nsxjdw['_null'] != undefined) this['_audio']['onEnded'](nsxjdw['_null']);else try {
        this['_audio']['onEnded'](null), nsxjdw['_null'] = null;
      } catch (iufmv) {
        console['warn']('[wxmini] stop:' + iufmv), this['_audio']['onEnded'](xz8nr['bind'](this['__onNull'], this)), nsxjdw['_null'] = xz8nr['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, k45q0_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, k45q0_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], t50fq['addChannel'](this), this['_audio']['play']();
    }, k_5624(0x0, k45q0_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), k_5624(0x0, k45q0_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), k_5624(0x0, k45q0_, 'volume', function () {
      return 0x1;
    }, function (ry8$) {}), nsxjdw['_null'] = undefined, nsxjdw;
  }(a$r3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ib1uv9 in Laya) {
    var vftimb = Laya[ib1uv9];vftimb && vftimb['__isclass'] && (exports[ib1uv9] = vftimb);
  }
});