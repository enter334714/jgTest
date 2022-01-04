var B = wx.$z;
(function (window, document, eatxz) {
  var l3ni = eatxz['un'],
      dzeoa = eatxz['uns'],
      jim$q = eatxz['static'],
      hf4g = eatxz['class'],
      p1g94 = eatxz['getset'],
      uw52r_ = eatxz['__newvec'],
      tky = laya['utils']['Browser'],
      pxg9 = laya['events']['Event'],
      n7qi3 = laya['events']['EventDispatcher'],
      mqij$3 = laya['resource']['HTMLImage'],
      w_r2u = laya['utils']['Handler'],
      p9xg1h = laya['display']['Input'],
      obdy8 = laya['net']['Loader'],
      m3$7 = laya['maths']['Matrix'],
      ezytdo = laya['renders']['Render'],
      ml3 = laya['utils']['RunDriver'],
      k_r5 = laya['media']['Sound'],
      $q7m3i = laya['media']['SoundChannel'],
      v7nilm = laya['media']['SoundManager'],
      gp9h4 = laya['display']['Stage'],
      u582r = laya['net']['URL'],
      kybtod = laya['utils']['Utils'],
      miqn7 = function () {
    function x9zes() {}return hf4g(x9zes, 'laya.wx.mini.MiniAdpter'), x9zes['getJson'] = function (ph19xg) {
      return JSON['parse'](ph19xg);
    }, x9zes['init'] = function (lvm7in, ezdta) {
      lvm7in === void 0x0 && (lvm7in = ![]), ezdta === void 0x0 && (ezdta = ![]);if (x9zes['_inited']) return;x9zes['window'] = window;if (x9zes['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;x9zes['_inited'] = !![], x9zes['isZiYu'] = ezdta, x9zes['isPosMsgYu'] = lvm7in, x9zes['EnvConfig'] = {}, !x9zes['isZiYu'] && (ykrb_8['setNativeFileDir']('/layaairGame'), ykrb_8['existDir'](ykrb_8['fileNativeDir'], w_r2u['create'](x9zes, x9zes['onMkdirCallBack']))), x9zes['window']['focus'] = function () {}, eatxz['getUrlPath'] = function () {}, x9zes['window']['logtime'] = function (ilfvn) {}, x9zes['window']['alertTimeLog'] = function (lv76n) {}, x9zes['window']['resetShareInfo'] = function () {}, x9zes['window']['CanvasRenderingContext2D'] = function () {}, x9zes['window']['CanvasRenderingContext2D']['prototype'] = x9zes['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], x9zes['window']['document']['body']['appendChild'] = function () {}, x9zes['EnvConfig']['pixelRatioInt'] = 0x0, ml3['getPixelRatio'] = x9zes['pixelRatio'], x9zes['_preCreateElement'] = tky['createElement'], tky['createElement'] = x9zes['createElement'], ml3['createShaderCondition'] = x9zes['createShaderCondition'], kybtod['parseXMLFromString'] = x9zes['parseXMLFromString'], p9xg1h['_createInputElement'] = aetoz['_createInputElement'], x9zes['EnvConfig']['load'] = obdy8['prototype']['load'], obdy8['prototype']['load'] = kb8ry_['prototype']['load'], x9zes['isZiYu'] && lvm7in && wx['onMessage'](function (p1hgx) {
        p1hgx['isLoad'] && (ykrb_8['ziyuFileData'][p1hgx['url']] = p1hgx['data']);
      });
    }, x9zes['onMkdirCallBack'] = function (gpx1h, nvli7m) {
      if (!gpx1h) ykrb_8['filesListObj'] = JSON['parse'](nvli7m['data']);
    }, x9zes['pixelRatio'] = function () {
      if (!x9zes['EnvConfig']['pixelRatioInt']) try {
        var $7imq3 = wx['getSystemInfoSync']();return x9zes['EnvConfig']['pixelRatioInt'] = $7imq3['pixelRatio'], $7imq3 = $7imq3, $7imq3['pixelRatio'];
      } catch (u2w5_r) {}return x9zes['EnvConfig']['pixelRatioInt'];
    }, x9zes['createElement'] = function (axhs) {
      if (axhs == 'canvas') {
        var j$3miq;return x9zes['idx'] == 0x1 ? x9zes['isZiYu'] ? (j$3miq = sharedCanvas, j$3miq['style'] = {}) : j$3miq = window['canvas'] : j$3miq = window['wx']['createCanvas'](), x9zes['idx']++, j$3miq;
      } else {
        if (axhs == 'textarea' || axhs == 'input') return x9zes['onCreateInput'](axhs);else {
          if (axhs == 'div') {
            var taezod = x9zes['_preCreateElement'](axhs);return taezod['contains'] = function (kb_5r) {
              return null;
            }, taezod['removeChild'] = function (edatoz) {}, taezod;
          } else return x9zes['_preCreateElement'](axhs);
        }
      }
    }, x9zes['onCreateInput'] = function (g6pvf) {
      var gf6ph = x9zes['_preCreateElement'](g6pvf);return gf6ph['focus'] = aetoz['wxinputFocus'], gf6ph['blur'] = aetoz['wxinputblur'], gf6ph['style'] = {}, gf6ph['value'] = 0x0, gf6ph['parentElement'] = {}, gf6ph['placeholder'] = {}, gf6ph['type'] = {}, gf6ph['setColor'] = function (y8dkrb) {}, gf6ph['setType'] = function (b2r_) {}, gf6ph['setFontFace'] = function (l7ivnf) {}, gf6ph['addEventListener'] = function (doyk8) {}, gf6ph['contains'] = function (w_ru) {
        return null;
      }, gf6ph['removeChild'] = function (ivnf) {}, gf6ph;
    }, x9zes['createShaderCondition'] = function (zdato) {
      var u0w_52 = this,
          szoeta = function () {
        var v6 = zdato;return u0w_52[zdato['replace']('this.', '')];
      };return szoeta;
    }, x9zes['EnvConfig'] = null, x9zes['window'] = null, x9zes['_preCreateElement'] = null, x9zes['_inited'] = ![], x9zes['wxRequest'] = null, x9zes['systemInfo'] = null, x9zes['version'] = '0.0.1', x9zes['isZiYu'] = ![], x9zes['isPosMsgYu'] = ![], x9zes['parseXMLFromString'] = function (dtyko) {
      var qm7n, m7iq$;dtyko = dtyko['replace'](/>\s+</g, '><');try {
        qm7n = new window['Parser']['DOMParser']()['parseFromString'](dtyko, 'text/xml');
      } catch ($mj3iq) {
        throw '需要引入xml解析库文件';
      }return qm7n;
    }, x9zes['idx'] = 0x1, x9zes;
  }(),
      wur5_ = function () {
    function mvln7i() {}hf4g(mvln7i, 'laya.wx.mini.MiniImage');var nqm3i7 = mvln7i['prototype'];return nqm3i7['_loadImage'] = function (l64vnf) {
      var esatz = this,
          b5kr = ![];l64vnf['indexOf']('layaNativeDir/') == -0x1 && (b5kr = !![], l64vnf = u582r['formatURL'](l64vnf));if (!ykrb_8['getFileInfo'](l64vnf)) {
        if (l64vnf['indexOf']('http://') != -0x1 || l64vnf['indexOf']('https://') != -0x1) ykrb_8['downImg'](l64vnf, new w_r2u(mvln7i, mvln7i['onDownImgCallBack'], [l64vnf, esatz]), l64vnf);else mvln7i['onCreateImage'](l64vnf, esatz, !![]);
      } else mvln7i['onCreateImage'](l64vnf, esatz, !b5kr);
    }, mvln7i['onDownImgCallBack'] = function (_2br58, fgph46, rybk8) {
      if (!rybk8) mvln7i['onCreateImage'](_2br58, fgph46);else fgph46['onError'](null);
    }, mvln7i['onCreateImage'] = function (kdtb, tszeo, shp) {
      shp === void 0x0 && (shp = ![]);var xps1h9;if (!shp) {
        var deaz = ykrb_8['getFileInfo'](kdtb),
            p6h14g = deaz['md5'];xps1h9 = ykrb_8['getFileNativePath'](p6h14g);
      } else xps1h9 = kdtb;if (tszeo['imgCache'] == null) tszeo['imgCache'] = {};var dobtk;function tdezyo() {
        dobtk['onload'] = null, dobtk['onerror'] = null, delete tszeo['imgCache'][kdtb];
      };var _rk85 = function () {
        tdezyo(), tszeo['onLoaded'](dobtk);
      },
          teydoz = function () {
        tdezyo(), tszeo['event']('error', 'Load image failed');
      };tszeo['_type'] == 'nativeimage' ? (dobtk = new tky['window']['Image'](), dobtk['crossOrigin'] = '', dobtk['onload'] = _rk85, dobtk['onerror'] = teydoz, dobtk['src'] = xps1h9, tszeo['imgCache'][kdtb] = dobtk) : new mqij$3['create'](xps1h9, { 'onload': _rk85, 'onerror': teydoz, 'onCreate': function (dtkb) {
          dobtk = dtkb, tszeo['imgCache'][kdtb] = dtkb;
        } });
    }, mvln7i;
  }(),
      aetoz = function () {
    function mv7inl() {}return hf4g(mv7inl, 'laya.wx.mini.MiniInput'), mv7inl['_createInputElement'] = function () {
      p9xg1h['_initInput'](p9xg1h['area'] = tky['createElement']('textarea')), p9xg1h['_initInput'](p9xg1h['input'] = tky['createElement']('input')), p9xg1h['inputContainer'] = tky['createElement']('div'), p9xg1h['inputContainer']['style']['position'] = 'absolute', p9xg1h['inputContainer']['style']['zIndex'] = 0x186a0, tky['container']['appendChild'](p9xg1h['inputContainer']), p9xg1h['inputContainer']['setPos'] = function (x19gp, n7ivm) {
        p9xg1h['inputContainer']['style']['left'] = x19gp + 'px', p9xg1h['inputContainer']['style']['top'] = n7ivm + 'px';
      }, eatxz['stage']['on']('resize', null, mv7inl['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xseaz9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v7nilm['_soundClass'] = s19p, v7nilm['_musicClass'] = s19p;
    }, mv7inl['_onStageResize'] = function () {
      var u_rw5 = eatxz['stage']['_canvasTransform']['identity']();u_rw5['scale'](tky['width'] / ezytdo['canvas']['width'] / ml3['getPixelRatio'](), tky['height'] / ezytdo['canvas']['height'] / ml3['getPixelRatio']());
    }, mv7inl['wxinputFocus'] = function (dtyzeo) {
      var x1p9hg = p9xg1h['inputElement']['target'];if (x1p9hg && !x1p9hg['editable']) return;miqn7['window']['wx']['offKeyboardConfirm'](), miqn7['window']['wx']['offKeyboardInput'](), miqn7['window']['wx']['showKeyboard']({ 'defaultValue': x1p9hg['text'], 'maxLength': x1p9hg['maxChars'], 'multiple': x1p9hg['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (soza) {}, 'fail': function (i7n3qm) {} }), miqn7['window']['wx']['onKeyboardConfirm'](function (h4pfg) {
        var ydr8 = h4pfg ? h4pfg['value'] : '';x1p9hg['text'] = ydr8, x1p9hg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), miqn7['window']['wx']['onKeyboardInput'](function (lv7im) {
        var pf4v = lv7im ? lv7im['value'] : '';if (!x1p9hg['multiline']) {
          if (pf4v['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x1p9hg['text'] = pf4v, x1p9hg['event']('input');
      });
    }, mv7inl['inputEnter'] = function () {
      p9xg1h['inputElement']['target']['focus'] = ![];
    }, mv7inl['wxinputblur'] = function () {
      mv7inl['hideKeyboard']();
    }, mv7inl['hideKeyboard'] = function () {
      miqn7['window']['wx']['offKeyboardConfirm'](), miqn7['window']['wx']['offKeyboardInput'](), miqn7['window']['wx']['hideKeyboard']({ 'success': function (vfni7l) {
          console['log']('隐藏键盘');
        }, 'fail': function (yokdtz) {
          console['log']('隐藏键盘出错:' + (yokdtz ? yokdtz['errMsg'] : ''));
        } });
    }, mv7inl;
  }(),
      kb8ry_ = function () {
    function b8kryd() {}hf4g(b8kryd, 'laya.wx.mini.MiniLoader');var zado = b8kryd['prototype'];return zado['load'] = function (k8dbr, tokdzy, ln7i3, h1px9g, mi$q7) {
      ln7i3 === void 0x0 && (ln7i3 = !![]), mi$q7 === void 0x0 && (mi$q7 = ![]);var ztexs = this;ztexs['_url'] = k8dbr;if (k8dbr['indexOf']('data:image') === 0x0) ztexs['_type'] = tokdzy = 'image';else ztexs['_type'] = tokdzy || (tokdzy = ztexs['getTypeFromUrl'](k8dbr));ztexs['_cache'] = ln7i3, ztexs['_data'] = null;var ifnl7 = 'ascii';if (k8dbr['indexOf']('.fnt') != -0x1) ifnl7 = 'utf8';else tokdzy == 'arraybuffer' && (ifnl7 = '');;var j3iq$m = kybtod['getFileExtension'](k8dbr);if (b8kryd['_fileTypeArr']['indexOf'](j3iq$m) != -0x1) miqn7['EnvConfig']['load']['call'](this, k8dbr, tokdzy, ln7i3, h1px9g, mi$q7);else {
        if (!ykrb_8['getFileInfo'](k8dbr)) {
          if (k8dbr['indexOf']('layaNativeDir/') != -0x1) {
            if (miqn7['isZiYu']) {
              var h64fg = ykrb_8['ziyuFileData'][k8dbr];ztexs['onLoaded'](h64fg);return;
            } else {
              cosnole['log']('read read'), ykrb_8['read'](k8dbr, ifnl7, new w_r2u(b8kryd, b8kryd['onReadNativeCallBack'], [ifnl7, k8dbr, tokdzy, ln7i3, h1px9g, mi$q7, ztexs]));return;
            }
          }if (u582r['rootPath'] == '') var lv6f4n = k8dbr;else lv6f4n = k8dbr['split'](u582r['rootPath'])[0x0];k8dbr['indexOf']('http://') != -0x1 || k8dbr['indexOf']('https://') != -0x1 ? miqn7['EnvConfig']['load']['call'](ztexs, k8dbr, tokdzy, ln7i3, h1px9g, mi$q7) : ykrb_8['readFile'](lv6f4n, ifnl7, new w_r2u(b8kryd, b8kryd['onReadNativeCallBack'], [ifnl7, k8dbr, tokdzy, ln7i3, h1px9g, mi$q7, ztexs]), k8dbr);
        } else miqn7['EnvConfig']['load']['call'](this, k8dbr, tokdzy, ln7i3, h1px9g, mi$q7);
      }
    }, zado['resMgrLoad'] = function (lnmi73, fnv6l7, in7vml, hx9s1p, rbkyd8, ps, m3jqi$) {
      in7vml === void 0x0 && (in7vml = 0x0), hx9s1p === void 0x0 && (hx9s1p = ![]), rbkyd8 === void 0x0 && (rbkyd8 = ![]), ps === void 0x0 && (ps = 0x0), m3jqi$ === void 0x0 && (m3jqi$ = 0x3), lnmi73['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lnmi73), miqn7['EnvConfig']['resMgrLoad'](lnmi73, (xh9as1, qjm3i, v7fi) => {
        b8kryd['prototype']['resMgrLoadCallBack'](xh9as1, qjm3i, v7fi, fnv6l7);
      }, in7vml, hx9s1p, rbkyd8, ps, m3jqi$);
    }, zado['resMgrLoadCallBack'] = function (doztk, i37q, sotz, fn7liv) {
      console['log']('buff:::', doztk, sotz, ykrb_8['fileNativeDir'] + '///' + ykrb_8['fileListName']), fn7liv(doztk, i37q, sotz);
    }, zado['clearRes'] = function (mi7vln, a19xse) {
      a19xse === void 0x0 && (a19xse = ![]);var u2w_5 = this;u2w_5['clearRes'](mi7vln, a19xse);var ruw25_ = ykrb_8['getFileInfo'](mi7vln);if (ruw25_ && (mi7vln['indexOf']('http://') != -0x1 || mi7vln['indexOf']('https://') != -0x1)) {
        var w2ru = ruw25_['md5'],
            oeazt = ykrb_8['getFileNativePath'](w2ru);ykrb_8['remove'](oeazt);
      }
    }, b8kryd['onReadNativeCallBack'] = function (p419, hxp1, u5r2_, tzdok, eazx, odbt, gh149, fv64nl, vln7f6) {
      tzdok === void 0x0 && (tzdok = !![]), odbt === void 0x0 && (odbt = ![]), fv64nl === void 0x0 && (fv64nl = 0x0);if (!fv64nl) {
        var oyktbd;if (u5r2_ == 'json' || u5r2_ == 'atlas') oyktbd = miqn7['getJson'](vln7f6['data']);else u5r2_ == 'xml' ? oyktbd = kybtod['parseXMLFromString'](vln7f6['data']) : oyktbd = vln7f6['data'];gh149['onLoaded'](oyktbd), !miqn7['isZiYu'] && miqn7['isPosMsgYu'] && u5r2_ != 'arraybuffer' && wx['postMessage']({ 'url': hxp1, 'data': oyktbd, 'isLoad': !![] });
      } else fv64nl == 0x1 && miqn7['EnvConfig']['load']['call'](gh149, hxp1, u5r2_, tzdok, eazx, odbt);
    }, jim$q(b8kryd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), b8kryd;
  }(),
      ykrb_8 = function (ln3) {
    function zeodty() {
      zeodty['__super']['call'](this);;
    }return hf4g(zeodty, 'laya.wx.mini.MiniFileMgr', ln3), zeodty['isLoadFile'] = function (lv7fi) {
      return zeodty['_fileTypeArr']['indexOf'](lv7fi) != -0x1 ? !![] : ![];
    }, zeodty['getFileInfo'] = function (es1xa9) {
      var u5_rw = es1xa9['split']('?')[0x0],
          hg641p = zeodty['filesListObj'][u5_rw];if (hg641p == null) return null;else return hg641p;return null;
    }, zeodty['onFileUpdate'] = function (u85_2, xe9sa1) {
      var vln7im = u85_2['split']('/'),
          mn3l = vln7im[vln7im['length'] - 0x1],
          vfg4l = zeodty['getFileInfo'](xe9sa1);if (vfg4l == null) zeodty['onSaveFile'](xe9sa1, mn3l);else {
        if (vfg4l['readyUrl'] != xe9sa1) zeodty['remove'](mn3l, xe9sa1);
      }
    }, zeodty['exits'] = function (imq3, q3inm) {
      var gfvp46 = zeodty['getFileNativePath'](imq3);zeodty['fs']['getFileInfo']({ 'filePath': gfvp46, 'success': function (lg4f6) {
          q3inm != null && q3inm['runWith']([0x0, lg4f6]);
        }, 'fail': function ($73qi) {
          q3inm != null && q3inm['runWith']([0x1, $73qi]);
        } });
    }, zeodty['read'] = function (atzeod, pg6hf, ztdye, w5ru) {
      pg6hf === void 0x0 && (pg6hf = 'ascill'), w5ru === void 0x0 && (w5ru = '');var ps1x9h;w5ru != '' ? ps1x9h = zeodty['getFileNativePath'](atzeod) : ps1x9h = atzeod, zeodty['fs']['readFile']({ 'filePath': ps1x9h, 'encoding': pg6hf, 'success': function (n7ilvf) {
          ztdye != null && ztdye['runWith']([0x0, n7ilvf]);
        }, 'fail': function (p1gh94) {
          if (p1gh94 && w5ru != '') zeodty['down'](w5ru, pg6hf, ztdye, w5ru);else ztdye != null && ztdye['runWith']([0x1]);
        } });
    }, zeodty['readNativeFile'] = function (byt, n6vlf4) {
      zeodty['fs']['readFile']({ 'filePath': byt, 'encoding': '', 'success': function (mni) {
          n6vlf4 != null && n6vlf4['runWith']([0x0]);
        }, 'fail': function (r_b8y) {
          n6vlf4 != null && n6vlf4['runWith']([0x1]);
        } });
    }, zeodty['down'] = function (b25_8, hpg64, liv7fn, bokytd) {
      hpg64 === void 0x0 && (hpg64 = 'ascill'), bokytd === void 0x0 && (bokytd = '');var aeztos = zeodty['getFileNativePath'](bokytd),
          bkdry = zeodty['wxdown']({ 'url': b25_8, 'filePath': aeztos, 'success': function (rw2u_) {
          if (rw2u_['statusCode'] === 0xc8) zeodty['readFile'](rw2u_['filePath'], hpg64, liv7fn, bokytd);
        }, 'fail': function (p6f4g) {
          liv7fn != null && liv7fn['runWith']([0x1, p6f4g]);
        } });bkdry['onProgressUpdate'](function (_y8br) {
        liv7fn != null && liv7fn['runWith']([0x2, _y8br['progress']]);
      });
    }, zeodty['readFile'] = function (m7nli, dotzky, bd8k, nq3i) {
      dotzky === void 0x0 && (dotzky = 'ascill'), nq3i === void 0x0 && (nq3i = ''), zeodty['fs']['readFile']({ 'filePath': m7nli, 'encoding': dotzky, 'success': function (m73$iq) {
          if (m7nli['indexOf']('http://') != -0x1 || m7nli['indexOf']('https://') != -0x1) zeodty['onFileUpdate'](m7nli, nq3i);bd8k != null && bd8k['runWith']([0x0, m73$iq]);
        }, 'fail': function (l7vnf) {
          if (l7vnf) bd8k != null && bd8k['runWith']([0x1, l7vnf]);
        } });
    }, zeodty['downImg'] = function (eax19s, atoez, asextz) {
      asextz === void 0x0 && (asextz = '');var lnif7 = zeodty['wxdown']({ 'url': eax19s, 'success': function (_ybr8) {
          _ybr8['statusCode'] === 0xc8 && zeodty['copyFile'](_ybr8['tempFilePath'], asextz, atoez);
        }, 'fail': function (osetz) {
          atoez != null && atoez['runWith']([0x1, osetz]);
        } });
    }, zeodty['copyFile'] = function (n37mli, j$qi3, tozda) {
      var bodky = n37mli['split']('/'),
          otzky = bodky[bodky['length'] - 0x1],
          br285_ = j$qi3['split']('?')[0x0],
          q7i3n = zeodty['getFileInfo'](j$qi3),
          o8kdyb = zeodty['getFileNativePath'](otzky);zeodty['fs']['copyFile']({ 'srcPath': n37mli, 'destPath': o8kdyb, 'success': function (u2w5_0) {
          if (!q7i3n) zeodty['onSaveFile'](j$qi3, otzky), tozda != null && tozda['runWith']([0x0]);else {
            if (q7i3n['readyUrl'] != j$qi3) zeodty['remove'](otzky, j$qi3, tozda);
          }
        }, 'fail': function (r52_b8) {
          tozda != null && tozda['runWith']([0x1, r52_b8]);
        } });
    }, zeodty['getFileNativePath'] = function (koydb8) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + koydb8;
    }, zeodty['remove'] = function (btkdoy, eozas, aezst) {
      eozas === void 0x0 && (eozas = '');var g64flv = zeodty['getFileInfo'](eozas),
          il = zeodty['getFileNativePath'](g64flv['md5']);eatxz['loader']['clearRes'](g64flv['readyUrl']), zeodty['fs']['unlink']({ 'filePath': il, 'success': function (rk5) {
          if (eozas != '') zeodty['onSaveFile'](eozas, btkdoy);aezst != null && aezst['runWith']([0x0]);
        }, 'fail': function (x9zesa) {} });
    }, zeodty['onSaveFile'] = function (r2_58u, ph91sx) {
      var jqi$m = r2_58u['split']('?')[0x0];zeodty['filesListObj'][jqi$m] = { 'md5': ph91sx, 'readyUrl': r2_58u }, zeodty['fs']['writeFile']({ 'filePath': zeodty['fileNativeDir'] + '/' + zeodty['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zeodty['filesListObj']), 'success': function (_uwr2) {
          console['log']('写入测试测试成功：', _uwr2);
        }, 'fail': function (ilmn7v) {
          console['log']('写入测试测试失败：', ilmn7v);
        } });
    }, zeodty['existDir'] = function (koyb8d, h9xp1g) {
      zeodty['fs']['mkdir']({ 'dirPath': koyb8d, 'success': function (xp9s1) {
          h9xp1g != null && h9xp1g['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ykbr8_) {
          if (ykbr8_['errMsg']['indexOf']('file already exists') != -0x1) zeodty['readSync'](zeodty['fileListName'], 'utf8', h9xp1g);else h9xp1g != null && h9xp1g['runWith']([0x1, ykbr8_]);
        } });
    }, zeodty['readSync'] = function (r58b2_, zyoted, exsza9, ghxp) {
      zyoted === void 0x0 && (zyoted = 'ascill'), ghxp === void 0x0 && (ghxp = '');var lv7n6 = zeodty['getFileNativePath'](r58b2_),
          _u02w;try {
        _u02w = zeodty['fs']['readFileSync'](lv7n6), exsza9 != null && exsza9['runWith']([0x0, { 'data': _u02w }]);
      } catch (p4gvf6) {
        exsza9 != null && exsza9['runWith']([0x1]);
      }
    }, zeodty['readCache'] = function () {}, zeodty['writeCache'] = function (odyb8) {
      var qin73m = readyUrl['split']('?')[0x0];zeodty['filesListObj'][qin73m] = { 'md5': md5Name, 'readyUrl': readyUrl }, zeodty['fs']['writeFile']({ 'filePath': zeodty['fileNativeDir'] + '/' + zeodty['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zeodty['filesListObj']), 'success': function (gph491) {}, 'fail': function (_50u) {} });
    }, zeodty['setNativeFileDir'] = function (zedtyo) {
      zeodty['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zedtyo;
    }, zeodty['filesListObj'] = {}, zeodty['fileNativeDir'] = null, zeodty['fileListName'] = 'layaairfiles.txt', zeodty['ziyuFileData'] = {}, jim$q(zeodty, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), zeodty;
  }(n7qi3),
      s19p = function (n7il3m) {
    function b25r_() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], b25r_['__super']['call'](this), this['_sound'] = b25r_['_createSound']();
    }hf4g(b25r_, 'laya.wx.mini.MiniSound', n7il3m);var dtykob = b25r_['prototype'];return dtykob['load'] = function (sze9xa) {
      var r_2w5 = this;sze9xa = u582r['formatURL'](sze9xa), this['url'] = sze9xa;if (b25r_['_audioCache'][sze9xa]) {
        this['event']('complete');return;
      }function qi3$jm() {
        if (b25r_['_null'] != undefined) r_2w5['_sound']['onCanplay'](b25r_['_null']), r_2w5['_sound']['onError'](b25r_['_null']);else try {
          r_2w5['_sound']['onCanplay'](null), r_2w5['_sound']['onError'](null), b25r_['_null'] = null;
        } catch (zodkyt) {
          console['warn']('[wxmini] _clearSound:' + zodkyt), r_2w5['_sound']['onCanplay'](yr_8kb), r_2w5['_sound']['onError'](yr_8kb), b25r_['_null'] = yr_8kb;
        }
      }function etdzao() {
        qi3$jm(), ydob8['loaded'] = !![], ydob8['event']('complete'), b25r_['_audioCache'][ydob8['url']] = ydob8;
      }function _ru2w5(y_rk8b) {
        console['error']('errCode=' + y_rk8b['errCode'] + '  errMsg=' + y_rk8b['errMsg']), qi3$jm(), ydob8['event']('error');
      }function yr_8kb() {}this['_sound']['onCanplay'](etdzao), this['_sound']['onError'](_ru2w5), this['_sound']['src'] = sze9xa;var ydob8 = this;
    }, dtykob['play'] = function (flv67n, niq3m7) {
      flv67n === void 0x0 && (flv67n = 0x0), niq3m7 === void 0x0 && (niq3m7 = 0x0);var h64fpg;if (this['url'] == v7nilm['_tMusic']) {
        if (!b25r_['_musicAudio']) b25r_['_musicAudio'] = b25r_['_createSound']();h64fpg = b25r_['_musicAudio'];
      } else h64fpg = b25r_['_createSound']();h64fpg['src'] = this['url'];var dzetoa = new i3nm7l(h64fpg);return dzetoa['url'] = this['url'], dzetoa['loops'] = niq3m7, dzetoa['startTime'] = flv67n, dzetoa['play'](), v7nilm['addChannel'](dzetoa), dzetoa;
    }, dtykob['dispose'] = function () {
      var x1s9e = b25r_['_audioCache'][this['url']];x1s9e && (x1s9e['src'] = '', delete b25r_['_audioCache'][this['url']]);
    }, p1g94(0x0, dtykob, 'duration', function () {
      return this['_sound']['duration'];
    }), b25r_['_createSound'] = function () {
      return b25r_['_id']++, miqn7['window']['wx']['createInnerAudioContext']();
    }, b25r_['_musicAudio'] = null, b25r_['_id'] = 0x0, b25r_['_audioCache'] = {}, b25r_['_null'] = undefined, b25r_;
  }(n7qi3),
      i3nm7l = function (xtsea) {
    function se9x1(w0_u52) {
      this['_audio'] = null, this['_onEnd'] = null, se9x1['__super']['call'](this), this['_audio'] = w0_u52, this['_onEnd'] = kybtod['bind'](this['__onEnd'], this), w0_u52['onEnded'](this['_onEnd']);
    }hf4g(se9x1, 'laya.wx.mini.MiniSoundChannel', xtsea);var e1sx9a = se9x1['prototype'];return e1sx9a['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (eatxz['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, e1sx9a['__onNull'] = function () {}, e1sx9a['play'] = function () {
      this['isStopped'] = ![], v7nilm['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, e1sx9a['stop'] = function () {
      this['isStopped'] = !![], v7nilm['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (se9x1['_null'] != undefined) this['_audio']['onEnded'](se9x1['_null']);else try {
        this['_audio']['onEnded'](null), se9x1['_null'] = null;
      } catch (k_5rb) {
        console['warn']('[wxmini] stop:' + k_5rb), this['_audio']['onEnded'](kybtod['bind'](this['__onNull'], this)), se9x1['_null'] = kybtod['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, e1sx9a['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, e1sx9a['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v7nilm['addChannel'](this), this['_audio']['play']();
    }, p1g94(0x0, e1sx9a, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p1g94(0x0, e1sx9a, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p1g94(0x0, e1sx9a, 'volume', function () {
      return 0x1;
    }, function (a9eszx) {}), se9x1['_null'] = undefined, se9x1;
  }($q7m3i);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var s91ex in Laya) {
    var xa9s1 = Laya[s91ex];xa9s1 && xa9s1['__isclass'] && (exports[s91ex] = xa9s1);
  }
});