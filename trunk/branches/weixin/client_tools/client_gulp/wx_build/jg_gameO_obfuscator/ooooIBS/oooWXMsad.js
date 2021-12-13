var c = wx.$o;
(function (window, document, _un) {
  var rc58pm = _un['un'],
      zhpcb = _un['uns'],
      ch8pr = _un['static'],
      bzoc8h = _un['class'],
      mp5ct = _un['getset'],
      ph8 = _un['__newvec'],
      zb8ohg = laya['utils']['Browser'],
      qt5ms7 = laya['events']['Event'],
      aldi26 = laya['events']['EventDispatcher'],
      nu3_vl = laya['resource']['HTMLImage'],
      t5pc = laya['utils']['Handler'],
      pzr8ch = laya['display']['Input'],
      cptr5 = laya['net']['Loader'],
      t5pm = laya['maths']['Matrix'],
      zhgb = laya['renders']['Render'],
      nyuv_3 = laya['utils']['RunDriver'],
      hzog8 = laya['media']['Sound'],
      wid6 = laya['media']['SoundChannel'],
      w1fxi9 = laya['media']['SoundManager'],
      gxh4b = laya['display']['Stage'],
      bzoh8c = laya['net']['URL'],
      o4xghb = laya['utils']['Utils'],
      key_0u = function () {
    function pzm8cr() {}return bzoc8h(pzm8cr, 'laya.wx.mini.MiniAdpter'), pzm8cr['getJson'] = function (hbzp8) {
      return JSON['parse'](hbzp8);
    }, pzm8cr['init'] = function (m7s5, c8bpzh) {
      m7s5 === void 0x0 && (m7s5 = ![]), c8bpzh === void 0x0 && (c8bpzh = ![]);if (pzm8cr['_inited']) return;pzm8cr['window'] = window;if (pzm8cr['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;pzm8cr['_inited'] = !![], pzm8cr['isZiYu'] = c8bpzh, pzm8cr['isPosMsgYu'] = m7s5, pzm8cr['EnvConfig'] = {}, !pzm8cr['isZiYu'] && (bochz['setNativeFileDir']('/layaairGame'), bochz['existDir'](bochz['fileNativeDir'], t5pc['create'](pzm8cr, pzm8cr['onMkdirCallBack']))), pzm8cr['window']['focus'] = function () {}, _un['getUrlPath'] = function () {}, pzm8cr['window']['logtime'] = function (ai2ld) {}, pzm8cr['window']['alertTimeLog'] = function (fogx94) {}, pzm8cr['window']['resetShareInfo'] = function () {}, pzm8cr['window']['CanvasRenderingContext2D'] = function () {}, pzm8cr['window']['CanvasRenderingContext2D']['prototype'] = pzm8cr['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pzm8cr['window']['document']['body']['appendChild'] = function () {}, pzm8cr['EnvConfig']['pixelRatioInt'] = 0x0, nyuv_3['getPixelRatio'] = pzm8cr['pixelRatio'], pzm8cr['_preCreateElement'] = zb8ohg['createElement'], zb8ohg['createElement'] = pzm8cr['createElement'], nyuv_3['createShaderCondition'] = pzm8cr['createShaderCondition'], o4xghb['parseXMLFromString'] = pzm8cr['parseXMLFromString'], pzr8ch['_createInputElement'] = gx9ob4['_createInputElement'], pzm8cr['EnvConfig']['load'] = cptr5['prototype']['load'], cptr5['prototype']['load'] = a2dv6l['prototype']['load'], pzm8cr['isZiYu'] && m7s5 && wx['onMessage'](function (i12dw) {
        i12dw['isLoad'] && (bochz['ziyuFileData'][i12dw['url']] = i12dw['data']);
      });
    }, pzm8cr['onMkdirCallBack'] = function (zob, y0_ke$) {
      if (!zob) bochz['filesListObj'] = JSON['parse'](y0_ke$['data']);
    }, pzm8cr['pixelRatio'] = function () {
      if (!pzm8cr['EnvConfig']['pixelRatioInt']) try {
        var w2i9f1 = wx['getSystemInfoSync']();return pzm8cr['EnvConfig']['pixelRatioInt'] = w2i9f1['pixelRatio'], w2i9f1 = w2i9f1, w2i9f1['pixelRatio'];
      } catch (a26dil) {}return pzm8cr['EnvConfig']['pixelRatioInt'];
    }, pzm8cr['createElement'] = function (kneuy_) {
      if (kneuy_ == 'canvas') {
        var iw21df;return pzm8cr['idx'] == 0x1 ? pzm8cr['isZiYu'] ? (iw21df = sharedCanvas, iw21df['style'] = {}) : iw21df = window['canvas'] : iw21df = window['wx']['createCanvas'](), pzm8cr['idx']++, iw21df;
      } else {
        if (kneuy_ == 'textarea' || kneuy_ == 'input') return pzm8cr['onCreateInput'](kneuy_);else {
          if (kneuy_ == 'div') {
            var nv_l3u = pzm8cr['_preCreateElement'](kneuy_);return nv_l3u['contains'] = function (m5rtsq) {
              return null;
            }, nv_l3u['removeChild'] = function (vadl62) {}, nv_l3u;
          } else return pzm8cr['_preCreateElement'](kneuy_);
        }
      }
    }, pzm8cr['onCreateInput'] = function (zrp8cm) {
      var vl3an6 = pzm8cr['_preCreateElement'](zrp8cm);return vl3an6['focus'] = gx9ob4['wxinputFocus'], vl3an6['blur'] = gx9ob4['wxinputblur'], vl3an6['style'] = {}, vl3an6['value'] = 0x0, vl3an6['parentElement'] = {}, vl3an6['placeholder'] = {}, vl3an6['type'] = {}, vl3an6['setColor'] = function (xhb) {}, vl3an6['setType'] = function (czm8r) {}, vl3an6['setFontFace'] = function (dv63la) {}, vl3an6['addEventListener'] = function (g4xbo) {}, vl3an6['contains'] = function (la3vnu) {
        return null;
      }, vl3an6['removeChild'] = function (y0j$ke) {}, vl3an6;
    }, pzm8cr['createShaderCondition'] = function (fiw21) {
      var yk$0_e = this,
          n3_yue = function () {
        var wf1d = fiw21;return yk$0_e[fiw21['replace']('this.', '')];
      };return n3_yue;
    }, pzm8cr['EnvConfig'] = null, pzm8cr['window'] = null, pzm8cr['_preCreateElement'] = null, pzm8cr['_inited'] = ![], pzm8cr['wxRequest'] = null, pzm8cr['systemInfo'] = null, pzm8cr['version'] = '0.0.1', pzm8cr['isZiYu'] = ![], pzm8cr['isPosMsgYu'] = ![], pzm8cr['parseXMLFromString'] = function (ej$yk0) {
      var ms, bchz;ej$yk0 = ej$yk0['replace'](/>\s+</g, '><');try {
        ms = new window['Parser']['DOMParser']()['parseFromString'](ej$yk0, 'text/xml');
      } catch (v3n6) {
        throw '需要引入xml解析库文件';
      }return ms;
    }, pzm8cr['idx'] = 0x1, pzm8cr;
  }(),
      gof9 = function () {
    function i91xw() {}bzoc8h(i91xw, 'laya.wx.mini.MiniImage');var of49x = i91xw['prototype'];return of49x['_loadImage'] = function ($yje) {
      var yen3 = this,
          fw9xg4 = ![];$yje['indexOf']('layaNativeDir/') == -0x1 && (fw9xg4 = !![], $yje = bzoh8c['formatURL']($yje));if (!bochz['getFileInfo']($yje)) {
        if ($yje['indexOf']('http://') != -0x1 || $yje['indexOf']('https://') != -0x1) bochz['downImg']($yje, new t5pc(i91xw, i91xw['onDownImgCallBack'], [$yje, yen3]), $yje);else i91xw['onCreateImage']($yje, yen3, !![]);
      } else i91xw['onCreateImage']($yje, yen3, !fw9xg4);
    }, i91xw['onDownImgCallBack'] = function (pc58m, w6id2, mqtsr5) {
      if (!mqtsr5) i91xw['onCreateImage'](pc58m, w6id2);else w6id2['onError'](null);
    }, i91xw['onCreateImage'] = function (w62d1, hbgxo, pc8r) {
      pc8r === void 0x0 && (pc8r = ![]);var hgb4zo;if (!pc8r) {
        var pcz8bh = bochz['getFileInfo'](w62d1),
            lv3aun = pcz8bh['md5'];hgb4zo = bochz['getFileNativePath'](lv3aun);
      } else hgb4zo = w62d1;if (hbgxo['imgCache'] == null) hbgxo['imgCache'] = {};var zo4bgh;function i6dw12() {
        zo4bgh['onload'] = null, zo4bgh['onerror'] = null, delete hbgxo['imgCache'][w62d1];
      };var euny3_ = function () {
        i6dw12(), hbgxo['onLoaded'](zo4bgh);
      },
          zhpr8 = function () {
        i6dw12(), hbgxo['event']('error', 'Load image failed');
      };hbgxo['_type'] == 'nativeimage' ? (zo4bgh = new zb8ohg['window']['Image'](), zo4bgh['crossOrigin'] = '', zo4bgh['onload'] = euny3_, zo4bgh['onerror'] = zhpr8, zo4bgh['src'] = hgb4zo, hbgxo['imgCache'][w62d1] = zo4bgh) : new nu3_vl['create'](hgb4zo, { 'onload': euny3_, 'onerror': zhpr8, 'onCreate': function (li2d6a) {
          zo4bgh = li2d6a, hbgxo['imgCache'][w62d1] = li2d6a;
        } });
    }, i91xw;
  }(),
      gx9ob4 = function () {
    function qmrs() {}return bzoc8h(qmrs, 'laya.wx.mini.MiniInput'), qmrs['_createInputElement'] = function () {
      pzr8ch['_initInput'](pzr8ch['area'] = zb8ohg['createElement']('textarea')), pzr8ch['_initInput'](pzr8ch['input'] = zb8ohg['createElement']('input')), pzr8ch['inputContainer'] = zb8ohg['createElement']('div'), pzr8ch['inputContainer']['style']['position'] = 'absolute', pzr8ch['inputContainer']['style']['zIndex'] = 0x186a0, zb8ohg['container']['appendChild'](pzr8ch['inputContainer']), pzr8ch['inputContainer']['setPos'] = function (pcmrt, _keuyn) {
        pzr8ch['inputContainer']['style']['left'] = pcmrt + 'px', pzr8ch['inputContainer']['style']['top'] = _keuyn + 'px';
      }, _un['stage']['on']('resize', null, qmrs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dl6i2a) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w1fxi9['_soundClass'] = bhzpc, w1fxi9['_musicClass'] = bhzpc;
    }, qmrs['_onStageResize'] = function () {
      var mq5t7s = _un['stage']['_canvasTransform']['identity']();mq5t7s['scale'](zb8ohg['width'] / zhgb['canvas']['width'] / nyuv_3['getPixelRatio'](), zb8ohg['height'] / zhgb['canvas']['height'] / nyuv_3['getPixelRatio']());
    }, qmrs['wxinputFocus'] = function (uvln3_) {
      var nyu = pzr8ch['inputElement']['target'];if (nyu && !nyu['editable']) return;key_0u['window']['wx']['offKeyboardConfirm'](), key_0u['window']['wx']['offKeyboardInput'](), key_0u['window']['wx']['showKeyboard']({ 'defaultValue': nyu['text'], 'maxLength': nyu['maxChars'], 'multiple': nyu['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (pm58) {}, 'fail': function (ogf94x) {} }), key_0u['window']['wx']['onKeyboardConfirm'](function (zcr8ph) {
        var d62ila = zcr8ph ? zcr8ph['value'] : '';nyu['text'] = d62ila, nyu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), key_0u['window']['wx']['onKeyboardInput'](function (k_eyun) {
        var uyk0 = k_eyun ? k_eyun['value'] : '';if (!nyu['multiline']) {
          if (uyk0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }nyu['text'] = uyk0, nyu['event']('input');
      });
    }, qmrs['inputEnter'] = function () {
      pzr8ch['inputElement']['target']['focus'] = ![];
    }, qmrs['wxinputblur'] = function () {
      qmrs['hideKeyboard']();
    }, qmrs['hideKeyboard'] = function () {
      key_0u['window']['wx']['offKeyboardConfirm'](), key_0u['window']['wx']['offKeyboardInput'](), key_0u['window']['wx']['hideKeyboard']({ 'success': function (oc8bzh) {
          console['log']('隐藏键盘');
        }, 'fail': function (ke0$y) {
          console['log']('隐藏键盘出错:' + (ke0$y ? ke0$y['errMsg'] : ''));
        } });
    }, qmrs;
  }(),
      a2dv6l = function () {
    function la2vd6() {}bzoc8h(la2vd6, 'laya.wx.mini.MiniLoader');var d62lav = la2vd6['prototype'];return d62lav['load'] = function (cprm8, iw1, foxg9, l3v6d, uy_nke) {
      foxg9 === void 0x0 && (foxg9 = !![]), uy_nke === void 0x0 && (uy_nke = ![]);var _n3v = this;_n3v['_url'] = cprm8;if (cprm8['indexOf']('data:image') === 0x0) _n3v['_type'] = iw1 = 'image';else _n3v['_type'] = iw1 || (iw1 = _n3v['getTypeFromUrl'](cprm8));_n3v['_cache'] = foxg9, _n3v['_data'] = null;var ptrc5m = 'ascii';if (cprm8['indexOf']('.fnt') != -0x1) ptrc5m = 'utf8';else iw1 == 'arraybuffer' && (ptrc5m = '');;var rhc8pz = o4xghb['getFileExtension'](cprm8);if (la2vd6['_fileTypeArr']['indexOf'](rhc8pz) != -0x1) key_0u['EnvConfig']['load']['call'](this, cprm8, iw1, foxg9, l3v6d, uy_nke);else {
        if (!bochz['getFileInfo'](cprm8)) {
          if (cprm8['indexOf']('layaNativeDir/') != -0x1) {
            if (key_0u['isZiYu']) {
              var f1wid2 = bochz['ziyuFileData'][cprm8];_n3v['onLoaded'](f1wid2);return;
            } else {
              cosnole['log']('read read'), bochz['read'](cprm8, ptrc5m, new t5pc(la2vd6, la2vd6['onReadNativeCallBack'], [ptrc5m, cprm8, iw1, foxg9, l3v6d, uy_nke, _n3v]));return;
            }
          }if (bzoh8c['rootPath'] == '') var hob8zg = cprm8;else hob8zg = cprm8['split'](bzoh8c['rootPath'])[0x0];cprm8['indexOf']('http://') != -0x1 || cprm8['indexOf']('https://') != -0x1 ? key_0u['EnvConfig']['load']['call'](_n3v, cprm8, iw1, foxg9, l3v6d, uy_nke) : bochz['readFile'](hob8zg, ptrc5m, new t5pc(la2vd6, la2vd6['onReadNativeCallBack'], [ptrc5m, cprm8, iw1, foxg9, l3v6d, uy_nke, _n3v]), cprm8);
        } else key_0u['EnvConfig']['load']['call'](this, cprm8, iw1, foxg9, l3v6d, uy_nke);
      }
    }, d62lav['resMgrLoad'] = function (hzo8cb, wdf12i, u3nla, vnl3u_, f9i1x, $0e_ky, hzobc) {
      u3nla === void 0x0 && (u3nla = 0x0), vnl3u_ === void 0x0 && (vnl3u_ = ![]), f9i1x === void 0x0 && (f9i1x = ![]), $0e_ky === void 0x0 && ($0e_ky = 0x0), hzobc === void 0x0 && (hzobc = 0x3), hzo8cb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hzo8cb), key_0u['EnvConfig']['resMgrLoad'](hzo8cb, (ghz8b, b4gho, r5tqs) => {
        la2vd6['prototype']['resMgrLoadCallBack'](ghz8b, b4gho, r5tqs, wdf12i);
      }, u3nla, vnl3u_, f9i1x, $0e_ky, hzobc);
    }, d62lav['resMgrLoadCallBack'] = function (pc5t, y3vun, ye$0j, fi129) {
      console['log']('buff:::', pc5t, ye$0j, bochz['fileNativeDir'] + '///' + bochz['fileListName']), fi129(pc5t, y3vun, ye$0j);
    }, d62lav['clearRes'] = function (r8mcp, pb8chz) {
      pb8chz === void 0x0 && (pb8chz = ![]);var u3ln_v = this;u3ln_v['clearRes'](r8mcp, pb8chz);var xo9g4 = bochz['getFileInfo'](r8mcp);if (xo9g4 && (r8mcp['indexOf']('http://') != -0x1 || r8mcp['indexOf']('https://') != -0x1)) {
        var cz8hb = xo9g4['md5'],
            ejy$0 = bochz['getFileNativePath'](cz8hb);bochz['remove'](ejy$0);
      }
    }, la2vd6['onReadNativeCallBack'] = function (gw, i216dw, dval63, mtpr5q, id1a, g4oxh, v62, p8rcz, keu0y_) {
      mtpr5q === void 0x0 && (mtpr5q = !![]), g4oxh === void 0x0 && (g4oxh = ![]), p8rcz === void 0x0 && (p8rcz = 0x0);if (!p8rcz) {
        var hogxb;if (dval63 == 'json' || dval63 == 'atlas') hogxb = key_0u['getJson'](keu0y_['data']);else dval63 == 'xml' ? hogxb = o4xghb['parseXMLFromString'](keu0y_['data']) : hogxb = keu0y_['data'];v62['onLoaded'](hogxb), !key_0u['isZiYu'] && key_0u['isPosMsgYu'] && dval63 != 'arraybuffer' && wx['postMessage']({ 'url': i216dw, 'data': hogxb, 'isLoad': !![] });
      } else p8rcz == 0x1 && key_0u['EnvConfig']['load']['call'](v62, i216dw, dval63, mtpr5q, id1a, g4oxh);
    }, ch8pr(la2vd6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), la2vd6;
  }(),
      bochz = function (a36lnv) {
    function bp8hcz() {
      bp8hcz['__super']['call'](this);;
    }return bzoc8h(bp8hcz, 'laya.wx.mini.MiniFileMgr', a36lnv), bp8hcz['isLoadFile'] = function (pcr8mz) {
      return bp8hcz['_fileTypeArr']['indexOf'](pcr8mz) != -0x1 ? !![] : ![];
    }, bp8hcz['getFileInfo'] = function (lida6) {
      var iw91fx = lida6['split']('?')[0x0],
          hbc8oz = bp8hcz['filesListObj'][iw91fx];if (hbc8oz == null) return null;else return hbc8oz;return null;
    }, bp8hcz['onFileUpdate'] = function (yeku, b8czo) {
      var fid1w = yeku['split']('/'),
          nv_l3 = fid1w[fid1w['length'] - 0x1],
          fi921 = bp8hcz['getFileInfo'](b8czo);if (fi921 == null) bp8hcz['onSaveFile'](b8czo, nv_l3);else {
        if (fi921['readyUrl'] != b8czo) bp8hcz['remove'](nv_l3, b8czo);
      }
    }, bp8hcz['exits'] = function (lnu_3v, i261dw) {
      var gfox4 = bp8hcz['getFileNativePath'](lnu_3v);bp8hcz['fs']['getFileInfo']({ 'filePath': gfox4, 'success': function (dav2l) {
          i261dw != null && i261dw['runWith']([0x0, dav2l]);
        }, 'fail': function (w61d2) {
          i261dw != null && i261dw['runWith']([0x1, w61d2]);
        } });
    }, bp8hcz['read'] = function (qtr5s, pmr85c, b49ogx, zbogh) {
      pmr85c === void 0x0 && (pmr85c = 'ascill'), zbogh === void 0x0 && (zbogh = '');var sqr5t;zbogh != '' ? sqr5t = bp8hcz['getFileNativePath'](qtr5s) : sqr5t = qtr5s, bp8hcz['fs']['readFile']({ 'filePath': sqr5t, 'encoding': pmr85c, 'success': function (xogb49) {
          b49ogx != null && b49ogx['runWith']([0x0, xogb49]);
        }, 'fail': function (xbh4) {
          if (xbh4 && zbogh != '') bp8hcz['down'](zbogh, pmr85c, b49ogx, zbogh);else b49ogx != null && b49ogx['runWith']([0x1]);
        } });
    }, bp8hcz['readNativeFile'] = function (ai261d, a3v6dl) {
      bp8hcz['fs']['readFile']({ 'filePath': ai261d, 'encoding': '', 'success': function (u_ye0k) {
          a3v6dl != null && a3v6dl['runWith']([0x0]);
        }, 'fail': function (e$yj0) {
          a3v6dl != null && a3v6dl['runWith']([0x1]);
        } });
    }, bp8hcz['down'] = function (mptq5, g4xohb, r58pcm, ogf4) {
      g4xohb === void 0x0 && (g4xohb = 'ascill'), ogf4 === void 0x0 && (ogf4 = '');var pcrm = bp8hcz['getFileNativePath'](ogf4),
          q5rsmt = bp8hcz['wxdown']({ 'url': mptq5, 'filePath': pcrm, 'success': function (hzbp) {
          if (hzbp['statusCode'] === 0xc8) bp8hcz['readFile'](hzbp['filePath'], g4xohb, r58pcm, ogf4);
        }, 'fail': function (oz8bhc) {
          r58pcm != null && r58pcm['runWith']([0x1, oz8bhc]);
        } });q5rsmt['onProgressUpdate'](function (g9x4ob) {
        r58pcm != null && r58pcm['runWith']([0x2, g9x4ob['progress']]);
      });
    }, bp8hcz['readFile'] = function (unlv3, y$ekj, ghbx4, pcm5tr) {
      y$ekj === void 0x0 && (y$ekj = 'ascill'), pcm5tr === void 0x0 && (pcm5tr = ''), bp8hcz['fs']['readFile']({ 'filePath': unlv3, 'encoding': y$ekj, 'success': function (chz8) {
          if (unlv3['indexOf']('http://') != -0x1 || unlv3['indexOf']('https://') != -0x1) bp8hcz['onFileUpdate'](unlv3, pcm5tr);ghbx4 != null && ghbx4['runWith']([0x0, chz8]);
        }, 'fail': function (f91w2i) {
          if (f91w2i) ghbx4 != null && ghbx4['runWith']([0x1, f91w2i]);
        } });
    }, bp8hcz['downImg'] = function ($ey0kj, zb4gh, xb9g4o) {
      xb9g4o === void 0x0 && (xb9g4o = '');var zbohg8 = bp8hcz['wxdown']({ 'url': $ey0kj, 'success': function (l6) {
          l6['statusCode'] === 0xc8 && bp8hcz['copyFile'](l6['tempFilePath'], xb9g4o, zb4gh);
        }, 'fail': function (uvy_3n) {
          zb4gh != null && zb4gh['runWith']([0x1, uvy_3n]);
        } });
    }, bp8hcz['copyFile'] = function (z8g, a6vl2d, gbho) {
      var hzrc = z8g['split']('/'),
          wi9 = hzrc[hzrc['length'] - 0x1],
          euy_k0 = a6vl2d['split']('?')[0x0],
          v6l3 = bp8hcz['getFileInfo'](a6vl2d),
          zg8bo = bp8hcz['getFileNativePath'](wi9);bp8hcz['fs']['copyFile']({ 'srcPath': z8g, 'destPath': zg8bo, 'success': function (iw61d) {
          if (!v6l3) bp8hcz['onSaveFile'](a6vl2d, wi9), gbho != null && gbho['runWith']([0x0]);else {
            if (v6l3['readyUrl'] != a6vl2d) bp8hcz['remove'](wi9, a6vl2d, gbho);
          }
        }, 'fail': function (pr8hcz) {
          gbho != null && gbho['runWith']([0x1, pr8hcz]);
        } });
    }, bp8hcz['getFileNativePath'] = function (ld6v) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ld6v;
    }, bp8hcz['remove'] = function (d3a6lv, yvn_3, m7s) {
      yvn_3 === void 0x0 && (yvn_3 = '');var nu_yke = bp8hcz['getFileInfo'](yvn_3),
          eykj = bp8hcz['getFileNativePath'](nu_yke['md5']);_un['loader']['clearRes'](nu_yke['readyUrl']), bp8hcz['fs']['unlink']({ 'filePath': eykj, 'success': function (la6vn3) {
          if (yvn_3 != '') bp8hcz['onSaveFile'](yvn_3, d3a6lv);m7s != null && m7s['runWith']([0x0]);
        }, 'fail': function (a2vld6) {} });
    }, bp8hcz['onSaveFile'] = function (if12w9, hogx4b) {
      var s5mqr = if12w9['split']('?')[0x0];bp8hcz['filesListObj'][s5mqr] = { 'md5': hogx4b, 'readyUrl': if12w9 }, bp8hcz['fs']['writeFile']({ 'filePath': bp8hcz['fileNativeDir'] + '/' + bp8hcz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bp8hcz['filesListObj']), 'success': function (y_uek0) {
          console['log']('写入测试测试成功：', y_uek0);
        }, 'fail': function ($kye0_) {
          console['log']('写入测试测试失败：', $kye0_);
        } });
    }, bp8hcz['existDir'] = function (il2d6a, hp8cr) {
      bp8hcz['fs']['mkdir']({ 'dirPath': il2d6a, 'success': function (zh8pc) {
          hp8cr != null && hp8cr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (k_0e) {
          if (k_0e['errMsg']['indexOf']('file already exists') != -0x1) bp8hcz['readSync'](bp8hcz['fileListName'], 'utf8', hp8cr);else hp8cr != null && hp8cr['runWith']([0x1, k_0e]);
        } });
    }, bp8hcz['readSync'] = function (hc8zrp, a62d1, x9wg4f, bg4hox) {
      a62d1 === void 0x0 && (a62d1 = 'ascill'), bg4hox === void 0x0 && (bg4hox = '');var bzo4hg = bp8hcz['getFileNativePath'](hc8zrp),
          xbg94o;try {
        xbg94o = bp8hcz['fs']['readFileSync'](bzo4hg), x9wg4f != null && x9wg4f['runWith']([0x0, { 'data': xbg94o }]);
      } catch (ogz4h) {
        x9wg4f != null && x9wg4f['runWith']([0x1]);
      }
    }, bp8hcz['readCache'] = function () {}, bp8hcz['writeCache'] = function (dw16i) {
      var u_ykne = readyUrl['split']('?')[0x0];bp8hcz['filesListObj'][u_ykne] = { 'md5': md5Name, 'readyUrl': readyUrl }, bp8hcz['fs']['writeFile']({ 'filePath': bp8hcz['fileNativeDir'] + '/' + bp8hcz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bp8hcz['filesListObj']), 'success': function (idf2w) {}, 'fail': function (ixfw19) {} });
    }, bp8hcz['setNativeFileDir'] = function (uvl3) {
      bp8hcz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uvl3;
    }, bp8hcz['filesListObj'] = {}, bp8hcz['fileNativeDir'] = null, bp8hcz['fileListName'] = 'layaairfiles.txt', bp8hcz['ziyuFileData'] = {}, ch8pr(bp8hcz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bp8hcz;
  }(aldi26),
      bhzpc = function (i1) {
    function y_ek0u() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], y_ek0u['__super']['call'](this), this['_sound'] = y_ek0u['_createSound']();
    }bzoc8h(y_ek0u, 'laya.wx.mini.MiniSound', i1);var fiw219 = y_ek0u['prototype'];return fiw219['load'] = function (czoh8) {
      var p58c = this;czoh8 = bzoh8c['formatURL'](czoh8), this['url'] = czoh8;if (y_ek0u['_audioCache'][czoh8]) {
        this['event']('complete');return;
      }function rcph8() {
        if (y_ek0u['_null'] != undefined) p58c['_sound']['onCanplay'](y_ek0u['_null']), p58c['_sound']['onError'](y_ek0u['_null']);else try {
          p58c['_sound']['onCanplay'](null), p58c['_sound']['onError'](null), y_ek0u['_null'] = null;
        } catch (mzrc8) {
          console['warn']('[wxmini] _clearSound:' + mzrc8), p58c['_sound']['onCanplay'](fw9x1), p58c['_sound']['onError'](fw9x1), y_ek0u['_null'] = fw9x1;
        }
      }function zco8hb() {
        rcph8(), kye0$['loaded'] = !![], kye0$['event']('complete'), y_ek0u['_audioCache'][kye0$['url']] = kye0$;
      }function g4xhbo(avlun3) {
        console['error']('errCode=' + avlun3['errCode'] + '  errMsg=' + avlun3['errMsg']), rcph8(), kye0$['event']('error');
      }function fw9x1() {}this['_sound']['onCanplay'](zco8hb), this['_sound']['onError'](g4xhbo), this['_sound']['src'] = czoh8;var kye0$ = this;
    }, fiw219['play'] = function (vd2la, rpmc5) {
      vd2la === void 0x0 && (vd2la = 0x0), rpmc5 === void 0x0 && (rpmc5 = 0x0);var nkyue_;if (this['url'] == w1fxi9['_tMusic']) {
        if (!y_ek0u['_musicAudio']) y_ek0u['_musicAudio'] = y_ek0u['_createSound']();nkyue_ = y_ek0u['_musicAudio'];
      } else nkyue_ = y_ek0u['_createSound']();nkyue_['src'] = this['url'];var xof9 = new vun3la(nkyue_);return xof9['url'] = this['url'], xof9['loops'] = rpmc5, xof9['startTime'] = vd2la, xof9['play'](), w1fxi9['addChannel'](xof9), xof9;
    }, fiw219['dispose'] = function () {
      var h4gbo = y_ek0u['_audioCache'][this['url']];h4gbo && (h4gbo['src'] = '', delete y_ek0u['_audioCache'][this['url']]);
    }, mp5ct(0x0, fiw219, 'duration', function () {
      return this['_sound']['duration'];
    }), y_ek0u['_createSound'] = function () {
      return y_ek0u['_id']++, key_0u['window']['wx']['createInnerAudioContext']();
    }, y_ek0u['_musicAudio'] = null, y_ek0u['_id'] = 0x0, y_ek0u['_audioCache'] = {}, y_ek0u['_null'] = undefined, y_ek0u;
  }(aldi26),
      vun3la = function (zb8hco) {
    function f1dwi(uvy_n3) {
      this['_audio'] = null, this['_onEnd'] = null, f1dwi['__super']['call'](this), this['_audio'] = uvy_n3, this['_onEnd'] = o4xghb['bind'](this['__onEnd'], this), uvy_n3['onEnded'](this['_onEnd']);
    }bzoc8h(f1dwi, 'laya.wx.mini.MiniSoundChannel', zb8hco);var un3ey_ = f1dwi['prototype'];return un3ey_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_un['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, un3ey_['__onNull'] = function () {}, un3ey_['play'] = function () {
      this['isStopped'] = ![], w1fxi9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, un3ey_['stop'] = function () {
      this['isStopped'] = !![], w1fxi9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (f1dwi['_null'] != undefined) this['_audio']['onEnded'](f1dwi['_null']);else try {
        this['_audio']['onEnded'](null), f1dwi['_null'] = null;
      } catch (unl3) {
        console['warn']('[wxmini] stop:' + unl3), this['_audio']['onEnded'](o4xghb['bind'](this['__onNull'], this)), f1dwi['_null'] = o4xghb['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, un3ey_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, un3ey_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w1fxi9['addChannel'](this), this['_audio']['play']();
    }, mp5ct(0x0, un3ey_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mp5ct(0x0, un3ey_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mp5ct(0x0, un3ey_, 'volume', function () {
      return 0x1;
    }, function (og4bx) {}), f1dwi['_null'] = undefined, f1dwi;
  }(wid6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var rqts5 in Laya) {
    var n3uav = Laya[rqts5];n3uav && n3uav['__isclass'] && (exports[rqts5] = n3uav);
  }
});