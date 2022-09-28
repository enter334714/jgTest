var b = wx.$e;
(function (window, document, sk9b0) {
  var gtlhx$ = sk9b0['un'],
      rthzyl = sk9b0['uns'],
      ijq3 = sk9b0['static'],
      mcao = sk9b0['class'],
      xtji$g = sk9b0['getset'],
      yzfv = sk9b0['__newvec'],
      itlgx$ = laya['utils']['Browser'],
      k90s = laya['events']['Event'],
      cm_4a7 = laya['events']['EventDispatcher'],
      x$ti = laya['resource']['HTMLImage'],
      igtl$x = laya['utils']['Handler'],
      apemco = laya['display']['Input'],
      $3jgxi = laya['net']['Loader'],
      zryht = laya['maths']['Matrix'],
      rztlh = laya['renders']['Render'],
      vyzfhr = laya['utils']['RunDriver'],
      unq9 = laya['media']['Sound'],
      pamoec = laya['media']['SoundChannel'],
      hrtyz = laya['media']['SoundManager'],
      u3nsq = laya['display']['Stage'],
      v47af = laya['net']['URL'],
      vzf4_y = laya['utils']['Utils'],
      nu3s9 = function () {
    function zr4yf() {}return mcao(zr4yf, 'laya.wx.mini.MiniAdpter'), zr4yf['getJson'] = function ($lht) {
      return JSON['parse']($lht);
    }, zr4yf['init'] = function ($tlxgh, m_oac) {
      $tlxgh === void 0x0 && ($tlxgh = ![]), m_oac === void 0x0 && (m_oac = ![]);if (zr4yf['_inited']) return;zr4yf['window'] = window;if (zr4yf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zr4yf['_inited'] = !![], zr4yf['isZiYu'] = m_oac, zr4yf['isPosMsgYu'] = $tlxgh, zr4yf['EnvConfig'] = {}, !zr4yf['isZiYu'] && (uks9qn['setNativeFileDir']('/layaairGame'), uks9qn['existDir'](uks9qn['fileNativeDir'], igtl$x['create'](zr4yf, zr4yf['onMkdirCallBack']))), zr4yf['window']['focus'] = function () {}, sk9b0['getUrlPath'] = function () {}, zr4yf['window']['logtime'] = function (skqun) {}, zr4yf['window']['alertTimeLog'] = function (tlzrhy) {}, zr4yf['window']['resetShareInfo'] = function () {}, zr4yf['window']['CanvasRenderingContext2D'] = function () {}, zr4yf['window']['CanvasRenderingContext2D']['prototype'] = zr4yf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zr4yf['window']['document']['body']['appendChild'] = function () {}, zr4yf['EnvConfig']['pixelRatioInt'] = 0x0, vyzfhr['getPixelRatio'] = zr4yf['pixelRatio'], zr4yf['_preCreateElement'] = itlgx$['createElement'], itlgx$['createElement'] = zr4yf['createElement'], vyzfhr['createShaderCondition'] = zr4yf['createShaderCondition'], vzf4_y['parseXMLFromString'] = zr4yf['parseXMLFromString'], apemco['_createInputElement'] = lhryf['_createInputElement'], zr4yf['EnvConfig']['load'] = $3jgxi['prototype']['load'], $3jgxi['prototype']['load'] = unsq39['prototype']['load'], zr4yf['isZiYu'] && $tlxgh && wx['onMessage'](function (xtij) {
        xtij['isLoad'] && (uks9qn['ziyuFileData'][xtij['url']] = xtij['data']);
      });
    }, zr4yf['onMkdirCallBack'] = function (empaoc, jx$gi3) {
      if (!empaoc) uks9qn['filesListObj'] = JSON['parse'](jx$gi3['data']);
    }, zr4yf['pixelRatio'] = function () {
      if (!zr4yf['EnvConfig']['pixelRatioInt']) try {
        var iq3n$j = wx['getSystemInfoSync']();return zr4yf['EnvConfig']['pixelRatioInt'] = iq3n$j['pixelRatio'], iq3n$j = iq3n$j, iq3n$j['pixelRatio'];
      } catch ($ix3jq) {}return zr4yf['EnvConfig']['pixelRatioInt'];
    }, zr4yf['createElement'] = function ($3qin) {
      if ($3qin == 'canvas') {
        var b0kd5;return zr4yf['idx'] == 0x1 ? zr4yf['isZiYu'] ? (b0kd5 = sharedCanvas, b0kd5['style'] = {}) : b0kd5 = window['canvas'] : b0kd5 = window['wx']['createCanvas'](), zr4yf['idx']++, b0kd5;
      } else {
        if ($3qin == 'textarea' || $3qin == 'input') return zr4yf['onCreateInput']($3qin);else {
          if ($3qin == 'div') {
            var jn3qi = zr4yf['_preCreateElement']($3qin);return jn3qi['contains'] = function (k60db9) {
              return null;
            }, jn3qi['removeChild'] = function (ij3gx) {}, jn3qi;
          } else return zr4yf['_preCreateElement']($3qin);
        }
      }
    }, zr4yf['onCreateInput'] = function (pomcea) {
      var ji$x3 = zr4yf['_preCreateElement'](pomcea);return ji$x3['focus'] = lhryf['wxinputFocus'], ji$x3['blur'] = lhryf['wxinputblur'], ji$x3['style'] = {}, ji$x3['value'] = 0x0, ji$x3['parentElement'] = {}, ji$x3['placeholder'] = {}, ji$x3['type'] = {}, ji$x3['setColor'] = function (kd09b6) {}, ji$x3['setType'] = function (gtjxi) {}, ji$x3['setFontFace'] = function (knsu69) {}, ji$x3['addEventListener'] = function ($q3ji) {}, ji$x3['contains'] = function (rvfzhy) {
        return null;
      }, ji$x3['removeChild'] = function (jqn) {}, ji$x3;
    }, zr4yf['createShaderCondition'] = function (ub69k) {
      var glthx = this,
          t$xgij = function () {
        var hzfyl = ub69k;return glthx[ub69k['replace']('this.', '')];
      };return t$xgij;
    }, zr4yf['EnvConfig'] = null, zr4yf['window'] = null, zr4yf['_preCreateElement'] = null, zr4yf['_inited'] = ![], zr4yf['wxRequest'] = null, zr4yf['systemInfo'] = null, zr4yf['version'] = '0.0.1', zr4yf['isZiYu'] = ![], zr4yf['isPosMsgYu'] = ![], zr4yf['parseXMLFromString'] = function (uqns3j) {
      var nujiq, skb9u;uqns3j = uqns3j['replace'](/>\s+</g, '><');try {
        nujiq = new window['Parser']['DOMParser']()['parseFromString'](uqns3j, 'text/xml');
      } catch (yzlt) {
        throw '需要引入xml解析库文件';
      }return nujiq;
    }, zr4yf['idx'] = 0x1, zr4yf;
  }(),
      s6k = function () {
    function $3gijx() {}mcao($3gijx, 'laya.wx.mini.MiniImage');var git$jx = $3gijx['prototype'];return git$jx['_loadImage'] = function ($txjgi) {
      var rhzglt = this,
          t$ixg = ![];$txjgi['indexOf']('layaNativeDir/') == -0x1 && (t$ixg = !![], $txjgi = v47af['formatURL']($txjgi));if (!uks9qn['getFileInfo']($txjgi)) {
        if ($txjgi['indexOf']('http://') != -0x1 || $txjgi['indexOf']('https://') != -0x1) uks9qn['downImg']($txjgi, new igtl$x($3gijx, $3gijx['onDownImgCallBack'], [$txjgi, rhzglt]), $txjgi);else $3gijx['onCreateImage']($txjgi, rhzglt, !![]);
      } else $3gijx['onCreateImage']($txjgi, rhzglt, !t$ixg);
    }, $3gijx['onDownImgCallBack'] = function (f47_av, $gxji3, xthlg$) {
      if (!xthlg$) $3gijx['onCreateImage'](f47_av, $gxji3);else $gxji3['onError'](null);
    }, $3gijx['onCreateImage'] = function (usjqn3, iqn3ju, s9u6) {
      s9u6 === void 0x0 && (s9u6 = ![]);var hztlgr;if (!s9u6) {
        var trzyhl = uks9qn['getFileInfo'](usjqn3),
            y4v7f = trzyhl['md5'];hztlgr = uks9qn['getFileNativePath'](y4v7f);
      } else hztlgr = usjqn3;if (iqn3ju['imgCache'] == null) iqn3ju['imgCache'] = {};var d8152w;function hlfy() {
        d8152w['onload'] = null, d8152w['onerror'] = null, delete iqn3ju['imgCache'][usjqn3];
      };var x3gj$ = function () {
        hlfy(), iqn3ju['onLoaded'](d8152w);
      },
          s3qj = function () {
        hlfy(), iqn3ju['event']('error', 'Load image failed');
      };iqn3ju['_type'] == 'nativeimage' ? (d8152w = new itlgx$['window']['Image'](), d8152w['crossOrigin'] = '', d8152w['onload'] = x3gj$, d8152w['onerror'] = s3qj, d8152w['src'] = hztlgr, iqn3ju['imgCache'][usjqn3] = d8152w) : new x$ti['create'](hztlgr, { 'onload': x3gj$, 'onerror': s3qj, 'onCreate': function (k0s) {
          d8152w = k0s, iqn3ju['imgCache'][usjqn3] = k0s;
        } });
    }, $3gijx;
  }(),
      lhryf = function () {
    function d215() {}return mcao(d215, 'laya.wx.mini.MiniInput'), d215['_createInputElement'] = function () {
      apemco['_initInput'](apemco['area'] = itlgx$['createElement']('textarea')), apemco['_initInput'](apemco['input'] = itlgx$['createElement']('input')), apemco['inputContainer'] = itlgx$['createElement']('div'), apemco['inputContainer']['style']['position'] = 'absolute', apemco['inputContainer']['style']['zIndex'] = 0x186a0, itlgx$['container']['appendChild'](apemco['inputContainer']), apemco['inputContainer']['setPos'] = function (yf_4v, kqn9us) {
        apemco['inputContainer']['style']['left'] = yf_4v + 'px', apemco['inputContainer']['style']['top'] = kqn9us + 'px';
      }, sk9b0['stage']['on']('resize', null, d215['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (a74vf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), hrtyz['_soundClass'] = ecpom, hrtyz['_musicClass'] = ecpom, window['_videoClass'] = hyztrl;
    }, d215['_onStageResize'] = function () {
      var i3quj = sk9b0['stage']['_canvasTransform']['identity']();i3quj['scale'](itlgx$['width'] / rztlh['canvas']['width'] / vyzfhr['getPixelRatio'](), itlgx$['height'] / rztlh['canvas']['height'] / vyzfhr['getPixelRatio']());
    }, d215['wxinputFocus'] = function (d5k60) {
      var $hxl = apemco['inputElement']['target'];if ($hxl && !$hxl['editable']) return;nu3s9['window']['wx']['offKeyboardConfirm'](), nu3s9['window']['wx']['offKeyboardInput'](), nu3s9['window']['wx']['showKeyboard']({ 'defaultValue': $hxl['text'], 'maxLength': $hxl['maxChars'], 'multiple': $hxl['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (iqx3j) {}, 'fail': function ($ht) {} }), nu3s9['window']['wx']['onKeyboardConfirm'](function (oa7_m) {
        var a4m_ = oa7_m ? oa7_m['value'] : '';$hxl['text'] = a4m_, $hxl['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nu3s9['window']['wx']['onKeyboardInput'](function (g$ix3) {
        var unqj = g$ix3 ? g$ix3['value'] : '';if (!$hxl['multiline']) {
          if (unqj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$hxl['text'] = unqj, $hxl['event']('input');
      });
    }, d215['inputEnter'] = function () {
      apemco['inputElement']['target']['focus'] = ![];
    }, d215['wxinputblur'] = function () {
      d215['hideKeyboard']();
    }, d215['hideKeyboard'] = function () {
      nu3s9['window']['wx']['offKeyboardConfirm'](), nu3s9['window']['wx']['offKeyboardInput'](), nu3s9['window']['wx']['hideKeyboard']({ 'success': function (cm7poa) {
          console['log']('隐藏键盘');
        }, 'fail': function (gxhl$t) {
          console['log']('隐藏键盘出错:' + (gxhl$t ? gxhl$t['errMsg'] : ''));
        } });
    }, d215;
  }(),
      unsq39 = function () {
    function yrtzhl() {}mcao(yrtzhl, 'laya.wx.mini.MiniLoader');var kb0d5 = yrtzhl['prototype'];return kb0d5['load'] = function (lhrytz, d1w5, eoma, pmoc7a, s9uk6) {
      eoma === void 0x0 && (eoma = !![]), s9uk6 === void 0x0 && (s9uk6 = ![]);var qnu3js = this;qnu3js['_url'] = lhrytz;if (lhrytz['indexOf']('data:image') === 0x0) qnu3js['_type'] = d1w5 = 'image';else qnu3js['_type'] = d1w5 || (d1w5 = qnu3js['getTypeFromUrl'](lhrytz));qnu3js['_cache'] = eoma, qnu3js['_data'] = null;var pcmoe = 'ascii';if (lhrytz['indexOf']('.fnt') != -0x1) pcmoe = 'utf8';else d1w5 == 'arraybuffer' && (pcmoe = '');;var hltyz = vzf4_y['getFileExtension'](lhrytz);if (yrtzhl['_fileTypeArr']['indexOf'](hltyz) != -0x1) nu3s9['EnvConfig']['load']['call'](this, lhrytz, d1w5, eoma, pmoc7a, s9uk6);else {
        if (!uks9qn['getFileInfo'](lhrytz)) {
          if (lhrytz['indexOf']('layaNativeDir/') != -0x1) {
            if (nu3s9['isZiYu']) {
              var peoc = uks9qn['ziyuFileData'][lhrytz];qnu3js['onLoaded'](peoc);return;
            } else {
              cosnole['log']('read read'), uks9qn['read'](lhrytz, pcmoe, new igtl$x(yrtzhl, yrtzhl['onReadNativeCallBack'], [pcmoe, lhrytz, d1w5, eoma, pmoc7a, s9uk6, qnu3js]));return;
            }
          }if (v47af['rootPath'] == '') var mac7 = lhrytz;else mac7 = lhrytz['split'](v47af['rootPath'])[0x0];lhrytz['indexOf']('http://') != -0x1 || lhrytz['indexOf']('https://') != -0x1 ? nu3s9['EnvConfig']['load']['call'](qnu3js, lhrytz, d1w5, eoma, pmoc7a, s9uk6) : uks9qn['readFile'](mac7, pcmoe, new igtl$x(yrtzhl, yrtzhl['onReadNativeCallBack'], [pcmoe, lhrytz, d1w5, eoma, pmoc7a, s9uk6, qnu3js]), lhrytz);
        } else nu3s9['EnvConfig']['load']['call'](this, lhrytz, d1w5, eoma, pmoc7a, s9uk6);
      }
    }, kb0d5['resMgrLoad'] = function (wd5280, v74ma_, mp7cao, vzhyfr, kbs690, nusk96, _7ao) {
      mp7cao === void 0x0 && (mp7cao = 0x0), vzhyfr === void 0x0 && (vzhyfr = ![]), kbs690 === void 0x0 && (kbs690 = ![]), nusk96 === void 0x0 && (nusk96 = 0x0), _7ao === void 0x0 && (_7ao = 0x3), wd5280['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wd5280), nu3s9['EnvConfig']['resMgrLoad'](wd5280, (poae, v_f4, tgj$x) => {
        yrtzhl['prototype']['resMgrLoadCallBack'](poae, v_f4, tgj$x, v74ma_);
      }, mp7cao, vzhyfr, kbs690, nusk96, _7ao);
    }, kb0d5['resMgrLoadCallBack'] = function (rfyzv4, _f7vy, fv7y4_, h$lxg) {
      console['log']('buff:::', rfyzv4, fv7y4_, uks9qn['fileNativeDir'] + '///' + uks9qn['fileListName']), h$lxg(rfyzv4, _f7vy, fv7y4_);
    }, kb0d5['clearRes'] = function (l$gxit, b5068) {
      b5068 === void 0x0 && (b5068 = ![]);var vyzf = this;vyzf['clearRes'](l$gxit, b5068);var b0d96 = uks9qn['getFileInfo'](l$gxit);if (b0d96 && (l$gxit['indexOf']('http://') != -0x1 || l$gxit['indexOf']('https://') != -0x1)) {
        var oaep = b0d96['md5'],
            m4ac7_ = uks9qn['getFileNativePath'](oaep);uks9qn['remove'](m4ac7_);
      }
    }, yrtzhl['onReadNativeCallBack'] = function (lhg$tx, vrz4, fa7, njuq3s, j3gx$i, yrzthl, epo, _oamc7, cpmea) {
      njuq3s === void 0x0 && (njuq3s = !![]), yrzthl === void 0x0 && (yrzthl = ![]), _oamc7 === void 0x0 && (_oamc7 = 0x0);if (!_oamc7) {
        var m7_oac;if (fa7 == 'json' || fa7 == 'atlas') m7_oac = nu3s9['getJson'](cpmea['data']);else fa7 == 'xml' ? m7_oac = vzf4_y['parseXMLFromString'](cpmea['data']) : m7_oac = cpmea['data'];epo['onLoaded'](m7_oac), !nu3s9['isZiYu'] && nu3s9['isPosMsgYu'] && fa7 != 'arraybuffer' && wx['postMessage']({ 'url': vrz4, 'data': m7_oac, 'isLoad': !![] });
      } else _oamc7 == 0x1 && nu3s9['EnvConfig']['load']['call'](epo, vrz4, fa7, njuq3s, j3gx$i, yrzthl);
    }, ijq3(yrtzhl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), yrtzhl;
  }(),
      uks9qn = function (m_a4c7) {
    function nsj3uq() {
      nsj3uq['__super']['call'](this);;
    }return mcao(nsj3uq, 'laya.wx.mini.MiniFileMgr', m_a4c7), nsj3uq['isLoadFile'] = function (k6d) {
      return nsj3uq['_fileTypeArr']['indexOf'](k6d) != -0x1 ? !![] : ![];
    }, nsj3uq['getFileInfo'] = function (bd09k) {
      var d15w28 = bd09k['split']('?')[0x0],
          _7af4v = nsj3uq['filesListObj'][d15w28];if (_7af4v == null) return null;else return _7af4v;return null;
    }, nsj3uq['onFileUpdate'] = function (gztrh, sunq) {
      var _74avm = gztrh['split']('/'),
          s096k = _74avm[_74avm['length'] - 0x1],
          x3$gji = nsj3uq['getFileInfo'](sunq);if (x3$gji == null) nsj3uq['onSaveFile'](sunq, s096k);else {
        if (x3$gji['readyUrl'] != sunq) nsj3uq['remove'](s096k, sunq);
      }
    }, nsj3uq['exits'] = function (hrtylz, tlyh) {
      var itjg = nsj3uq['getFileNativePath'](hrtylz);nsj3uq['fs']['getFileInfo']({ 'filePath': itjg, 'success': function (rhzfly) {
          tlyh != null && tlyh['runWith']([0x0, rhzfly]);
        }, 'fail': function (yvf47) {
          tlyh != null && tlyh['runWith']([0x1, yvf47]);
        } });
    }, nsj3uq['read'] = function (macp7, trylhz, ltzyhr, _7mcoa) {
      trylhz === void 0x0 && (trylhz = 'ascill'), _7mcoa === void 0x0 && (_7mcoa = '');var caeop;_7mcoa != '' ? caeop = nsj3uq['getFileNativePath'](macp7) : caeop = macp7, nsj3uq['fs']['readFile']({ 'filePath': caeop, 'encoding': trylhz, 'success': function (zfvr4) {
          ltzyhr != null && ltzyhr['runWith']([0x0, zfvr4]);
        }, 'fail': function (gx$itl) {
          if (gx$itl && _7mcoa != '') nsj3uq['down'](_7mcoa, trylhz, ltzyhr, _7mcoa);else ltzyhr != null && ltzyhr['runWith']([0x1]);
        } });
    }, nsj3uq['readNativeFile'] = function (av_f47, zfyvrh) {
      nsj3uq['fs']['readFile']({ 'filePath': av_f47, 'encoding': '', 'success': function (z4_vf) {
          zfyvrh != null && zfyvrh['runWith']([0x0]);
        }, 'fail': function (gt$ix) {
          zfyvrh != null && zfyvrh['runWith']([0x1]);
        } });
    }, nsj3uq['down'] = function (uqnji, lzthr, fhlyrz, b80w5d) {
      lzthr === void 0x0 && (lzthr = 'ascill'), b80w5d === void 0x0 && (b80w5d = '');var hrfly = nsj3uq['getFileNativePath'](b80w5d),
          unk = nsj3uq['wxdown']({ 'url': uqnji, 'filePath': hrfly, 'success': function (zrvyf4) {
          if (zrvyf4['statusCode'] === 0xc8) nsj3uq['readFile'](zrvyf4['filePath'], lzthr, fhlyrz, b80w5d);
        }, 'fail': function (gtzhr) {
          fhlyrz != null && fhlyrz['runWith']([0x1, gtzhr]);
        } });unk['onProgressUpdate'](function (qiu) {
        fhlyrz != null && fhlyrz['runWith']([0x2, qiu['progress']]);
      });
    }, nsj3uq['readFile'] = function (hltxg$, d960bk, jx$3g, k9ub) {
      d960bk === void 0x0 && (d960bk = 'ascill'), k9ub === void 0x0 && (k9ub = ''), nsj3uq['fs']['readFile']({ 'filePath': hltxg$, 'encoding': d960bk, 'success': function (g$it) {
          if (hltxg$['indexOf']('http://') != -0x1 || hltxg$['indexOf']('https://') != -0x1) nsj3uq['onFileUpdate'](hltxg$, k9ub);jx$3g != null && jx$3g['runWith']([0x0, g$it]);
        }, 'fail': function (qjsn) {
          if (qjsn) jx$3g != null && jx$3g['runWith']([0x1, qjsn]);
        } });
    }, nsj3uq['downImg'] = function (k05bd, _fv7a, db580) {
      db580 === void 0x0 && (db580 = '');var qnu39s = nsj3uq['wxdown']({ 'url': k05bd, 'success': function (d5w281) {
          d5w281['statusCode'] === 0xc8 && nsj3uq['copyFile'](d5w281['tempFilePath'], db580, _fv7a);
        }, 'fail': function (epcoam) {
          _fv7a != null && _fv7a['runWith']([0x1, epcoam]);
        } });
    }, nsj3uq['copyFile'] = function (xlt, yht, x$hglt) {
      var s9kn = xlt['split']('/'),
          j3qu = s9kn[s9kn['length'] - 0x1],
          hyrfv = yht['split']('?')[0x0],
          yth = nsj3uq['getFileInfo'](yht),
          v7_fy4 = nsj3uq['getFileNativePath'](j3qu);nsj3uq['fs']['copyFile']({ 'srcPath': xlt, 'destPath': v7_fy4, 'success': function (yv_z4) {
          if (!yth) nsj3uq['onSaveFile'](yht, j3qu), x$hglt != null && x$hglt['runWith']([0x0]);else {
            if (yth['readyUrl'] != yht) nsj3uq['remove'](j3qu, yht, x$hglt);
          }
        }, 'fail': function (va4_m) {
          x$hglt != null && x$hglt['runWith']([0x1, va4_m]);
        } });
    }, nsj3uq['getFileNativePath'] = function (camop) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + camop;
    }, nsj3uq['remove'] = function (yltrzh, rzvyf4, k6usb) {
      rzvyf4 === void 0x0 && (rzvyf4 = '');var gji3 = nsj3uq['getFileInfo'](rzvyf4),
          jus3qn = nsj3uq['getFileNativePath'](gji3['md5']);sk9b0['loader']['clearRes'](gji3['readyUrl']), nsj3uq['fs']['unlink']({ 'filePath': jus3qn, 'success': function (x3iqj$) {
          if (rzvyf4 != '') nsj3uq['onSaveFile'](rzvyf4, yltrzh);k6usb != null && k6usb['runWith']([0x0]);
        }, 'fail': function (ji3$xg) {} });
    }, nsj3uq['onSaveFile'] = function (nk9, v4am_7) {
      var hzyrlf = nk9['split']('?')[0x0];nsj3uq['filesListObj'][hzyrlf] = { 'md5': v4am_7, 'readyUrl': nk9 }, nsj3uq['fs']['writeFile']({ 'filePath': nsj3uq['fileNativeDir'] + '/' + nsj3uq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nsj3uq['filesListObj']), 'success': function (qsj3un) {
          console['log']('写入测试测试成功：', qsj3un);
        }, 'fail': function (ksu96) {
          console['log']('写入测试测试失败：', ksu96);
        } });
    }, nsj3uq['existDir'] = function ($lg, d6850b) {
      nsj3uq['fs']['mkdir']({ 'dirPath': $lg, 'success': function (ryzhfv) {
          d6850b != null && d6850b['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (d5wb80) {
          if (d5wb80['errMsg']['indexOf']('file already exists') != -0x1) nsj3uq['readSync'](nsj3uq['fileListName'], 'utf8', d6850b);else d6850b != null && d6850b['runWith']([0x1, d5wb80]);
        } });
    }, nsj3uq['readSync'] = function (lht, lzfrh, qs9u, uiqj3n) {
      lzfrh === void 0x0 && (lzfrh = 'ascill'), uiqj3n === void 0x0 && (uiqj3n = '');var oac7m = nsj3uq['getFileNativePath'](lht),
          xitjg$;try {
        xitjg$ = nsj3uq['fs']['readFileSync'](oac7m), qs9u != null && qs9u['runWith']([0x0, { 'data': xitjg$ }]);
      } catch (zrvf4) {
        qs9u != null && qs9u['runWith']([0x1]);
      }
    }, nsj3uq['readCache'] = function () {}, nsj3uq['writeCache'] = function (w5d820) {
      var $xtl = readyUrl['split']('?')[0x0];nsj3uq['filesListObj'][$xtl] = { 'md5': md5Name, 'readyUrl': readyUrl }, nsj3uq['fs']['writeFile']({ 'filePath': nsj3uq['fileNativeDir'] + '/' + nsj3uq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nsj3uq['filesListObj']), 'success': function (x$qj3) {}, 'fail': function (yvzf4r) {} });
    }, nsj3uq['setNativeFileDir'] = function (d9k6b) {
      nsj3uq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d9k6b;
    }, nsj3uq['filesListObj'] = {}, nsj3uq['fileNativeDir'] = null, nsj3uq['fileListName'] = 'layaairfiles.txt', nsj3uq['ziyuFileData'] = {}, ijq3(nsj3uq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), nsj3uq;
  }(cm_4a7),
      ecpom = function (xtij$) {
    function db0856() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], db0856['__super']['call'](this), this['_sound'] = db0856['_createSound'](), this['_chanell'] = new yfrzv4(this['_sound']);
    }mcao(db0856, 'laya.wx.mini.MiniSound', xtij$);var j$gix3 = db0856['prototype'];return j$gix3['load'] = function (b8d06) {
      var kusb69 = this;b8d06 = v47af['formatURL'](b8d06), this['url'] = b8d06;if (db0856['_audioCache'][b8d06]) {
        this['event']('complete');return;
      }function amv_() {
        if (db0856['_null'] != undefined) kusb69['_sound']['onCanplay'](db0856['_null']), kusb69['_sound']['onError'](db0856['_null']);else try {
          kusb69['_sound']['onCanplay'](null), kusb69['_sound']['onError'](null), db0856['_null'] = null;
        } catch (k0b96) {
          console['warn']('[wxmini] _clearSound:' + k0b96), kusb69['_sound']['onCanplay'](_f7y), kusb69['_sound']['onError'](_f7y), db0856['_null'] = _f7y;
        }
      }function lrzg() {
        d2158['loaded'] = !![], d2158['event']('complete'), db0856['_audioCache'][d2158['url']] = d2158;
      }function x3j$i(htryzl) {
        console['error']('errCode=' + htryzl['errCode'] + '  errMsg=' + htryzl['errMsg']), d2158['event']('error');
      }function _f7y() {}this['_sound']['onCanplay'](lrzg), this['_sound']['onError'](x3j$i), this['_sound']['src'] = b8d06;var d2158 = this;
    }, j$gix3['play'] = function (kqns, lrfy) {
      kqns === void 0x0 && (kqns = 0x0), lrfy === void 0x0 && (lrfy = 0x0);var us6b9k, thzrl;if (this['url'] == hrtyz['_tMusic']) {
        if (!db0856['_musicAudio']) db0856['_musicAudio'] = this['_sound'];us6b9k = db0856['_musicAudio'], thzrl = this['_chanell'];
      } else us6b9k = this['_sound'], thzrl = this['_chanell'];return us6b9k['src'] = this['url'], us6b9k['startTime'] = 0x0, thzrl['isStopped'] && (thzrl['url'] = this['url'], thzrl['loops'] = lrfy, thzrl['startTime'] = kqns, thzrl['play'](), hrtyz['addChannel'](thzrl)), thzrl;
    }, j$gix3['dispose'] = function () {
      var dkb06 = db0856['_audioCache'][this['url']];dkb06 && (dkb06['src'] = '', delete db0856['_audioCache'][this['url']]);
    }, xtji$g(0x0, j$gix3, 'duration', function () {
      return this['_sound']['duration'];
    }), db0856['_createSound'] = function () {
      db0856['_id']++;var ryzlfh = nu3s9['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ryzlfh;
    }, db0856['_musicAudio'] = null, db0856['_id'] = 0x0, db0856['_audioCache'] = {}, db0856['_null'] = undefined, db0856;
  }(cm_4a7),
      yfrzv4 = function (gtxil) {
    function n3s9uq(j3x$) {
      this['_audio'] = null, this['_onEnd'] = null, n3s9uq['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = j3x$, this['_onEnd'] = vzf4_y['bind'](this['__onEnd'], this), j3x$['onEnded'](this['_onEnd']);
    }mcao(n3s9uq, 'laya.wx.mini.MiniSoundChannel', gtxil);var zlyhtr = n3s9uq['prototype'];return zlyhtr['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (sk9b0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zlyhtr['__onNull'] = function () {}, zlyhtr['play'] = function () {
      this['isStopped'] = ![], hrtyz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zlyhtr['stop'] = function () {
      this['isStopped'] = !![], hrtyz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, zlyhtr['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zlyhtr['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], hrtyz['addChannel'](this), this['_audio']['play']();
    }, xtji$g(0x0, zlyhtr, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xtji$g(0x0, zlyhtr, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xtji$g(0x0, zlyhtr, 'volume', function () {
      return 0x1;
    }, function (_vyz4) {}), n3s9uq['_null'] = undefined, n3s9uq;
  }(pamoec),
      hyztrl = function () {
    function hrlxtg() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = nu3s9['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }mcao(hrlxtg, 'laya.wx.mini.MiniVideo');var u69ksb = hrlxtg['prototype'];return u69ksb['on'] = function (gtixl$, nsuq9, k5b0d6) {
      if (gtixl$ == 'loadedmetadata') this['onPlayFunc'] = k5b0d6['bind'](nsuq9), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else gtixl$ == 'ended' && (this['onEndedFunC'] = k5b0d6['bind'](nsuq9), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, u69ksb['onTimeUpdateFunc'] = function (skq9u) {
      this['position'] = skq9u['position'], this['_duration'] = skq9u['duration'];
    }, u69ksb['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, u69ksb['onended'] = function (yz4, b6kd05) {
      this['onEndedFunC'] = b6kd05['bind'](yz4), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, u69ksb['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, u69ksb['off'] = function (bks09, tg$i, txrglh) {
      if (bks09 == 'loadedmetadata') this['onPlayFunc'] = txrglh['bind'](tg$i), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else bks09 == 'ended' && (this['onEndedFunC'] = txrglh['bind'](tg$i), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, u69ksb['load'] = function (su96k) {
      if (!this['videoElement']) return;this['videoElement']['src'] = su96k;
    }, u69ksb['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, u69ksb['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, u69ksb['size'] = function (_mcoa7, k9qsun) {
      if (!this['videoElement']) return;this['videoElement']['width'] = _mcoa7, this['videoElement']['height'] = k9qsun;
    }, u69ksb['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, u69ksb['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, xtji$g(0x0, u69ksb, 'duration', function () {
      return this['_duration'];
    }), xtji$g(0x0, u69ksb, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (cp7) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = cp7;
    }), xtji$g(0x0, u69ksb, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), xtji$g(0x0, u69ksb, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), xtji$g(0x0, u69ksb, 'ended', function () {
      return this['videoend'];
    }), xtji$g(0x0, u69ksb, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (uk9b6s) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = uk9b6s;
    }), xtji$g(0x0, u69ksb, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (_47fyv) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = _47fyv;
    }), xtji$g(0x0, u69ksb, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (q3j$in) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = q3j$in;
    }), xtji$g(0x0, u69ksb, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), xtji$g(0x0, u69ksb, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (_7y4v) {
      if (!this['videoElement']) return;this['videoElement']['x'] = _7y4v;
    }), xtji$g(0x0, u69ksb, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (vzyf) {
      if (!this['videoElement']) return;this['videoElement']['y'] = vzyf;
    }), xtji$g(0x0, u69ksb, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), xtji$g(0x0, u69ksb, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (v4_y7) {
      if (!this['videoElement']) return;this['videoElement']['src'] = v4_y7;
    }), xtji$g(0x0, u69ksb, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (m7poa) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = m7poa;
    }), xtji$g(0x0, u69ksb, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (tzlgrh) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = tzlgrh;
    }), hrlxtg;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _47y in Laya) {
    var xgtl = Laya[_47y];xgtl && xgtl['__isclass'] && (exports[_47y] = xgtl);
  }
});