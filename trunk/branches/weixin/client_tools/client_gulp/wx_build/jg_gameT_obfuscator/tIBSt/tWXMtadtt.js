var M = wx.$T;
(function (window, document, akujbs) {
  var y0eoqx = akujbs['un'],
      efozp = akujbs['uns'],
      njbr = akujbs['static'],
      f7pze = akujbs['class'],
      pdf7$z = akujbs['getset'],
      zf$7dp = akujbs['__newvec'],
      buasj = laya['utils']['Browser'],
      h5_my = laya['events']['Event'],
      odzf7 = laya['events']['EventDispatcher'],
      exqo7 = laya['resource']['HTMLImage'],
      oyexq = laya['utils']['Handler'],
      n831r = laya['display']['Input'],
      hw5my_ = laya['net']['Loader'],
      d$cvi9 = laya['maths']['Matrix'],
      mh6w_5 = laya['renders']['Render'],
      xm0qy = laya['utils']['RunDriver'],
      dz7pof = laya['media']['Sound'],
      d$vi9c = laya['media']['SoundChannel'],
      ubas = laya['media']['SoundManager'],
      mqx0y = laya['display']['Stage'],
      hx_0m = laya['net']['URL'],
      i$pvd9 = laya['utils']['Utils'],
      e7qfzo = function () {
    function $9vdpf() {}return f7pze($9vdpf, 'laya.wx.mini.MiniAdpter'), $9vdpf['getJson'] = function (t4li) {
      return JSON['parse'](t4li);
    }, $9vdpf['init'] = function (gkbr, mh5wy) {
      gkbr === void 0x0 && (gkbr = ![]), mh5wy === void 0x0 && (mh5wy = ![]);if ($9vdpf['_inited']) return;$9vdpf['window'] = window;if ($9vdpf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$9vdpf['_inited'] = !![], $9vdpf['isZiYu'] = mh5wy, $9vdpf['isPosMsgYu'] = gkbr, $9vdpf['EnvConfig'] = {}, !$9vdpf['isZiYu'] && (xh_0y['setNativeFileDir']('/layaairGame'), xh_0y['existDir'](xh_0y['fileNativeDir'], oyexq['create']($9vdpf, $9vdpf['onMkdirCallBack']))), $9vdpf['window']['focus'] = function () {}, akujbs['getUrlPath'] = function () {}, $9vdpf['window']['logtime'] = function (zfo7eq) {}, $9vdpf['window']['alertTimeLog'] = function (hmxwy) {}, $9vdpf['window']['resetShareInfo'] = function () {}, $9vdpf['window']['CanvasRenderingContext2D'] = function () {}, $9vdpf['window']['CanvasRenderingContext2D']['prototype'] = $9vdpf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $9vdpf['window']['document']['body']['appendChild'] = function () {}, $9vdpf['EnvConfig']['pixelRatioInt'] = 0x0, xm0qy['getPixelRatio'] = $9vdpf['pixelRatio'], $9vdpf['_preCreateElement'] = buasj['createElement'], buasj['createElement'] = $9vdpf['createElement'], xm0qy['createShaderCondition'] = $9vdpf['createShaderCondition'], i$pvd9['parseXMLFromString'] = $9vdpf['parseXMLFromString'], n831r['_createInputElement'] = rng81['_createInputElement'], $9vdpf['EnvConfig']['load'] = hw5my_['prototype']['load'], hw5my_['prototype']['load'] = kagjrb['prototype']['load'], $9vdpf['isZiYu'] && gkbr && wx['onMessage'](function (mxw_) {
        mxw_['isLoad'] && (xh_0y['ziyuFileData'][mxw_['url']] = mxw_['data']);
      });
    }, $9vdpf['onMkdirCallBack'] = function (bujs, kbragj) {
      if (!bujs) xh_0y['filesListObj'] = JSON['parse'](kbragj['data']);
    }, $9vdpf['pixelRatio'] = function () {
      if (!$9vdpf['EnvConfig']['pixelRatioInt']) try {
        var ci2l4t = wx['getSystemInfoSync']();return $9vdpf['EnvConfig']['pixelRatioInt'] = ci2l4t['pixelRatio'], ci2l4t = ci2l4t, ci2l4t['pixelRatio'];
      } catch ($zdv) {}return $9vdpf['EnvConfig']['pixelRatioInt'];
    }, $9vdpf['createElement'] = function (eo0qx7) {
      if (eo0qx7 == 'canvas') {
        var yxo0e;return $9vdpf['idx'] == 0x1 ? $9vdpf['isZiYu'] ? (yxo0e = sharedCanvas, yxo0e['style'] = {}) : yxo0e = window['canvas'] : yxo0e = window['wx']['createCanvas'](), $9vdpf['idx']++, yxo0e;
      } else {
        if (eo0qx7 == 'textarea' || eo0qx7 == 'input') return $9vdpf['onCreateInput'](eo0qx7);else {
          if (eo0qx7 == 'div') {
            var j3rgn8 = $9vdpf['_preCreateElement'](eo0qx7);return j3rgn8['contains'] = function (p$vf9) {
              return null;
            }, j3rgn8['removeChild'] = function (xeoyq) {}, j3rgn8;
          } else return $9vdpf['_preCreateElement'](eo0qx7);
        }
      }
    }, $9vdpf['onCreateInput'] = function (n1365) {
      var w56_ = $9vdpf['_preCreateElement'](n1365);return w56_['focus'] = rng81['wxinputFocus'], w56_['blur'] = rng81['wxinputblur'], w56_['style'] = {}, w56_['value'] = 0x0, w56_['parentElement'] = {}, w56_['placeholder'] = {}, w56_['type'] = {}, w56_['setColor'] = function (y5mwh_) {}, w56_['setType'] = function (grb3n) {}, w56_['setFontFace'] = function (v9$pfd) {}, w56_['addEventListener'] = function (e0qz) {}, w56_['contains'] = function (n3grj) {
        return null;
      }, w56_['removeChild'] = function (_yexq) {}, w56_;
    }, $9vdpf['createShaderCondition'] = function (p$fdz7) {
      var zeo07q = this,
          pfdo7 = function () {
        var gakr = p$fdz7;return zeo07q[p$fdz7['replace']('this.', '')];
      };return pfdo7;
    }, $9vdpf['EnvConfig'] = null, $9vdpf['window'] = null, $9vdpf['_preCreateElement'] = null, $9vdpf['_inited'] = ![], $9vdpf['wxRequest'] = null, $9vdpf['systemInfo'] = null, $9vdpf['version'] = '0.0.1', $9vdpf['isZiYu'] = ![], $9vdpf['isPosMsgYu'] = ![], $9vdpf['parseXMLFromString'] = function (arbsk) {
      var n38g1, i42lc;arbsk = arbsk['replace'](/>\s+</g, '><');try {
        n38g1 = new window['Parser']['DOMParser']()['parseFromString'](arbsk, 'text/xml');
      } catch (y_0mq) {
        throw '需要引入xml解析库文件';
      }return n38g1;
    }, $9vdpf['idx'] = 0x1, $9vdpf;
  }(),
      $v9pd = function () {
    function braskj() {}f7pze(braskj, 'laya.wx.mini.MiniImage');var xqm0y = braskj['prototype'];return xqm0y['_loadImage'] = function (rkbgj) {
      var _xmyh = this,
          w3168 = ![];rkbgj['indexOf']('layaNativeDir/') == -0x1 && (w3168 = !![], rkbgj = hx_0m['formatURL'](rkbgj));if (!xh_0y['getFileInfo'](rkbgj)) {
        if (rkbgj['indexOf']('http://') != -0x1 || rkbgj['indexOf']('https://') != -0x1) xh_0y['downImg'](rkbgj, new oyexq(braskj, braskj['onDownImgCallBack'], [rkbgj, _xmyh]), rkbgj);else braskj['onCreateImage'](rkbgj, _xmyh, !![]);
      } else braskj['onCreateImage'](rkbgj, _xmyh, !w3168);
    }, braskj['onDownImgCallBack'] = function (qo0ex, hw1685, q7oez0) {
      if (!q7oez0) braskj['onCreateImage'](qo0ex, hw1685);else hw1685['onError'](null);
    }, braskj['onCreateImage'] = function (qoe0z, r3gbj, n31g86) {
      n31g86 === void 0x0 && (n31g86 = ![]);var $dzp7f;if (!n31g86) {
        var abksu = xh_0y['getFileInfo'](qoe0z),
            xm_hy0 = abksu['md5'];$dzp7f = xh_0y['getFileNativePath'](xm_hy0);
      } else $dzp7f = qoe0z;if (r3gbj['imgCache'] == null) r3gbj['imgCache'] = {};var sbkarj;function kajgrb() {
        sbkarj['onload'] = null, sbkarj['onerror'] = null, delete r3gbj['imgCache'][qoe0z];
      };var h5m16 = function () {
        kajgrb(), r3gbj['onLoaded'](sbkarj);
      },
          z7fpe = function () {
        kajgrb(), r3gbj['event']('error', 'Load image failed');
      };r3gbj['_type'] == 'nativeimage' ? (sbkarj = new buasj['window']['Image'](), sbkarj['crossOrigin'] = '', sbkarj['onload'] = h5m16, sbkarj['onerror'] = z7fpe, sbkarj['src'] = $dzp7f, r3gbj['imgCache'][qoe0z] = sbkarj) : new exqo7['create']($dzp7f, { 'onload': h5m16, 'onerror': z7fpe, 'onCreate': function (gar) {
          sbkarj = gar, r3gbj['imgCache'][qoe0z] = gar;
        } });
    }, braskj;
  }(),
      rng81 = function () {
    function dvp9f$() {}return f7pze(dvp9f$, 'laya.wx.mini.MiniInput'), dvp9f$['_createInputElement'] = function () {
      n831r['_initInput'](n831r['area'] = buasj['createElement']('textarea')), n831r['_initInput'](n831r['input'] = buasj['createElement']('input')), n831r['inputContainer'] = buasj['createElement']('div'), n831r['inputContainer']['style']['position'] = 'absolute', n831r['inputContainer']['style']['zIndex'] = 0x186a0, buasj['container']['appendChild'](n831r['inputContainer']), n831r['inputContainer']['setPos'] = function (bgrjk, ajngr) {
        n831r['inputContainer']['style']['left'] = bgrjk + 'px', n831r['inputContainer']['style']['top'] = ajngr + 'px';
      }, akujbs['stage']['on']('resize', null, dvp9f$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (oexq07) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ubas['_soundClass'] = eyq0_x, ubas['_musicClass'] = eyq0_x;
    }, dvp9f$['_onStageResize'] = function () {
      var krbjag = akujbs['stage']['_canvasTransform']['identity']();krbjag['scale'](buasj['width'] / mh6w_5['canvas']['width'] / xm0qy['getPixelRatio'](), buasj['height'] / mh6w_5['canvas']['height'] / xm0qy['getPixelRatio']());
    }, dvp9f$['wxinputFocus'] = function (cl42t) {
      var efozq7 = n831r['inputElement']['target'];if (efozq7 && !efozq7['editable']) return;e7qfzo['window']['wx']['offKeyboardConfirm'](), e7qfzo['window']['wx']['offKeyboardInput'](), e7qfzo['window']['wx']['showKeyboard']({ 'defaultValue': efozq7['text'], 'maxLength': efozq7['maxChars'], 'multiple': efozq7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (asbkuj) {}, 'fail': function (krasjb) {} }), e7qfzo['window']['wx']['onKeyboardConfirm'](function (dv$c9i) {
        var y0q_xe = dv$c9i ? dv$c9i['value'] : '';efozq7['text'] = y0q_xe, efozq7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), e7qfzo['window']['wx']['onKeyboardInput'](function (cti42l) {
        var zo7fqe = cti42l ? cti42l['value'] : '';if (!efozq7['multiline']) {
          if (zo7fqe['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }efozq7['text'] = zo7fqe, efozq7['event']('input');
      });
    }, dvp9f$['inputEnter'] = function () {
      n831r['inputElement']['target']['focus'] = ![];
    }, dvp9f$['wxinputblur'] = function () {
      dvp9f$['hideKeyboard']();
    }, dvp9f$['hideKeyboard'] = function () {
      e7qfzo['window']['wx']['offKeyboardConfirm'](), e7qfzo['window']['wx']['offKeyboardInput'](), e7qfzo['window']['wx']['hideKeyboard']({ 'success': function (feozq) {
          console['log']('隐藏键盘');
        }, 'fail': function (zqefo) {
          console['log']('隐藏键盘出错:' + (zqefo ? zqefo['errMsg'] : ''));
        } });
    }, dvp9f$;
  }(),
      kagjrb = function () {
    function _h56m() {}f7pze(_h56m, 'laya.wx.mini.MiniLoader');var zoe7q = _h56m['prototype'];return zoe7q['load'] = function (dv9fp$, barj, $d9pi, qy_e0x, bakrs) {
      $d9pi === void 0x0 && ($d9pi = !![]), bakrs === void 0x0 && (bakrs = ![]);var h5m_6 = this;h5m_6['_url'] = dv9fp$;if (dv9fp$['indexOf']('data:image') === 0x0) h5m_6['_type'] = barj = 'image';else h5m_6['_type'] = barj || (barj = h5m_6['getTypeFromUrl'](dv9fp$));h5m_6['_cache'] = $d9pi, h5m_6['_data'] = null;var njb = 'ascii';if (dv9fp$['indexOf']('.fnt') != -0x1) njb = 'utf8';else barj == 'arraybuffer' && (njb = '');;var t$9ci = i$pvd9['getFileExtension'](dv9fp$);if (_h56m['_fileTypeArr']['indexOf'](t$9ci) != -0x1) e7qfzo['EnvConfig']['load']['call'](this, dv9fp$, barj, $d9pi, qy_e0x, bakrs);else {
        if (!xh_0y['getFileInfo'](dv9fp$)) {
          if (dv9fp$['indexOf']('layaNativeDir/') != -0x1) {
            if (e7qfzo['isZiYu']) {
              var ujbask = xh_0y['ziyuFileData'][dv9fp$];h5m_6['onLoaded'](ujbask);return;
            } else {
              cosnole['log']('read read'), xh_0y['read'](dv9fp$, njb, new oyexq(_h56m, _h56m['onReadNativeCallBack'], [njb, dv9fp$, barj, $d9pi, qy_e0x, bakrs, h5m_6]));return;
            }
          }if (hx_0m['rootPath'] == '') var pfz7 = dv9fp$;else pfz7 = dv9fp$['split'](hx_0m['rootPath'])[0x0];dv9fp$['indexOf']('http://') != -0x1 || dv9fp$['indexOf']('https://') != -0x1 ? e7qfzo['EnvConfig']['load']['call'](h5m_6, dv9fp$, barj, $d9pi, qy_e0x, bakrs) : xh_0y['readFile'](pfz7, njb, new oyexq(_h56m, _h56m['onReadNativeCallBack'], [njb, dv9fp$, barj, $d9pi, qy_e0x, bakrs, h5m_6]), dv9fp$);
        } else e7qfzo['EnvConfig']['load']['call'](this, dv9fp$, barj, $d9pi, qy_e0x, bakrs);
      }
    }, zoe7q['resMgrLoad'] = function (bsraj, xoy0, i2c4l, w5_y, bakju, $pdf9v, y0qox) {
      i2c4l === void 0x0 && (i2c4l = 0x0), w5_y === void 0x0 && (w5_y = ![]), bakju === void 0x0 && (bakju = ![]), $pdf9v === void 0x0 && ($pdf9v = 0x0), y0qox === void 0x0 && (y0qox = 0x3), bsraj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bsraj), e7qfzo['EnvConfig']['resMgrLoad'](bsraj, (sjuakb, i$c9, $9vp) => {
        _h56m['prototype']['resMgrLoadCallBack'](sjuakb, i$c9, $9vp, xoy0);
      }, i2c4l, w5_y, bakju, $pdf9v, y0qox);
    }, zoe7q['resMgrLoadCallBack'] = function (p$9v, v$df9, q_0, eoxq0y) {
      console['log']('buff:::', p$9v, q_0, xh_0y['fileNativeDir'] + '///' + xh_0y['fileListName']), eoxq0y(p$9v, v$df9, q_0);
    }, zoe7q['clearRes'] = function (bnajgr, abnjr) {
      abnjr === void 0x0 && (abnjr = ![]);var gbrka = this;gbrka['clearRes'](bnajgr, abnjr);var zv$pfd = xh_0y['getFileInfo'](bnajgr);if (zv$pfd && (bnajgr['indexOf']('http://') != -0x1 || bnajgr['indexOf']('https://') != -0x1)) {
        var d9ivp = zv$pfd['md5'],
            o7qz0 = xh_0y['getFileNativePath'](d9ivp);xh_0y['remove'](o7qz0);
      }
    }, _h56m['onReadNativeCallBack'] = function (usbk, $p7df, gbrn, odf7p, rbsja, n83g16, vdip9, zfpvd, oxyeq) {
      odf7p === void 0x0 && (odf7p = !![]), n83g16 === void 0x0 && (n83g16 = ![]), zfpvd === void 0x0 && (zfpvd = 0x0);if (!zfpvd) {
        var bjsaku;if (gbrn == 'json' || gbrn == 'atlas') bjsaku = e7qfzo['getJson'](oxyeq['data']);else gbrn == 'xml' ? bjsaku = i$pvd9['parseXMLFromString'](oxyeq['data']) : bjsaku = oxyeq['data'];vdip9['onLoaded'](bjsaku), !e7qfzo['isZiYu'] && e7qfzo['isPosMsgYu'] && gbrn != 'arraybuffer' && wx['postMessage']({ 'url': $p7df, 'data': bjsaku, 'isLoad': !![] });
      } else zfpvd == 0x1 && e7qfzo['EnvConfig']['load']['call'](vdip9, $p7df, gbrn, odf7p, rbsja, n83g16);
    }, njbr(_h56m, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _h56m;
  }(),
      xh_0y = function (y_xe0q) {
    function o7qez0() {
      o7qez0['__super']['call'](this);;
    }return f7pze(o7qez0, 'laya.wx.mini.MiniFileMgr', y_xe0q), o7qez0['isLoadFile'] = function (bjra) {
      return o7qez0['_fileTypeArr']['indexOf'](bjra) != -0x1 ? !![] : ![];
    }, o7qez0['getFileInfo'] = function (hm_65w) {
      var icv$9t = hm_65w['split']('?')[0x0],
          c2i9t4 = o7qez0['filesListObj'][icv$9t];if (c2i9t4 == null) return null;else return c2i9t4;return null;
    }, o7qez0['onFileUpdate'] = function (y5m_hw, ci9vd) {
      var opez7f = y5m_hw['split']('/'),
          til2c4 = opez7f[opez7f['length'] - 0x1],
          o7xe = o7qez0['getFileInfo'](ci9vd);if (o7xe == null) o7qez0['onSaveFile'](ci9vd, til2c4);else {
        if (o7xe['readyUrl'] != ci9vd) o7qez0['remove'](til2c4, ci9vd);
      }
    }, o7qez0['exits'] = function (oefz7q, fpoe7) {
      var rbjsak = o7qez0['getFileNativePath'](oefz7q);o7qez0['fs']['getFileInfo']({ 'filePath': rbjsak, 'success': function (e7of) {
          fpoe7 != null && fpoe7['runWith']([0x0, e7of]);
        }, 'fail': function (fdzo) {
          fpoe7 != null && fpoe7['runWith']([0x1, fdzo]);
        } });
    }, o7qez0['read'] = function (baskju, ct94, t2il4c, ezoq70) {
      ct94 === void 0x0 && (ct94 = 'ascill'), ezoq70 === void 0x0 && (ezoq70 = '');var jgnr83;ezoq70 != '' ? jgnr83 = o7qez0['getFileNativePath'](baskju) : jgnr83 = baskju, o7qez0['fs']['readFile']({ 'filePath': jgnr83, 'encoding': ct94, 'success': function (bngra) {
          t2il4c != null && t2il4c['runWith']([0x0, bngra]);
        }, 'fail': function (oefq7) {
          if (oefq7 && ezoq70 != '') o7qez0['down'](ezoq70, ct94, t2il4c, ezoq70);else t2il4c != null && t2il4c['runWith']([0x1]);
        } });
    }, o7qez0['readNativeFile'] = function (x_m, exoyq0) {
      o7qez0['fs']['readFile']({ 'filePath': x_m, 'encoding': '', 'success': function (o0qey) {
          exoyq0 != null && exoyq0['runWith']([0x0]);
        }, 'fail': function (ct24i9) {
          exoyq0 != null && exoyq0['runWith']([0x1]);
        } });
    }, o7qez0['down'] = function (c9v$di, nr38, akjs, juka) {
      nr38 === void 0x0 && (nr38 = 'ascill'), juka === void 0x0 && (juka = '');var grnb3 = o7qez0['getFileNativePath'](juka),
          rbanj = o7qez0['wxdown']({ 'url': c9v$di, 'filePath': grnb3, 'success': function (podz7) {
          if (podz7['statusCode'] === 0xc8) o7qez0['readFile'](podz7['filePath'], nr38, akjs, juka);
        }, 'fail': function (r1g8n3) {
          akjs != null && akjs['runWith']([0x1, r1g8n3]);
        } });rbanj['onProgressUpdate'](function (xq_my0) {
        akjs != null && akjs['runWith']([0x2, xq_my0['progress']]);
      });
    }, o7qez0['readFile'] = function (z$dfpv, whm56_, zd$f7, vd$fp9) {
      whm56_ === void 0x0 && (whm56_ = 'ascill'), vd$fp9 === void 0x0 && (vd$fp9 = ''), o7qez0['fs']['readFile']({ 'filePath': z$dfpv, 'encoding': whm56_, 'success': function (xh_my) {
          if (z$dfpv['indexOf']('http://') != -0x1 || z$dfpv['indexOf']('https://') != -0x1) o7qez0['onFileUpdate'](z$dfpv, vd$fp9);zd$f7 != null && zd$f7['runWith']([0x0, xh_my]);
        }, 'fail': function (j3rbn) {
          if (j3rbn) zd$f7 != null && zd$f7['runWith']([0x1, j3rbn]);
        } });
    }, o7qez0['downImg'] = function (i9t4, sju, kagjr) {
      kagjr === void 0x0 && (kagjr = '');var v9fpd = o7qez0['wxdown']({ 'url': i9t4, 'success': function (qezo70) {
          qezo70['statusCode'] === 0xc8 && o7qez0['copyFile'](qezo70['tempFilePath'], kagjr, sju);
        }, 'fail': function (zf7pe) {
          sju != null && sju['runWith']([0x1, zf7pe]);
        } });
    }, o7qez0['copyFile'] = function (di$c, eq_x0y, ivd9$c) {
      var pdozf = di$c['split']('/'),
          jng3r = pdozf[pdozf['length'] - 0x1],
          pdfz7o = eq_x0y['split']('?')[0x0],
          p$zdf = o7qez0['getFileInfo'](eq_x0y),
          icdv = o7qez0['getFileNativePath'](jng3r);o7qez0['fs']['copyFile']({ 'srcPath': di$c, 'destPath': icdv, 'success': function (rbskj) {
          if (!p$zdf) o7qez0['onSaveFile'](eq_x0y, jng3r), ivd9$c != null && ivd9$c['runWith']([0x0]);else {
            if (p$zdf['readyUrl'] != eq_x0y) o7qez0['remove'](jng3r, eq_x0y, ivd9$c);
          }
        }, 'fail': function ($z7d) {
          ivd9$c != null && ivd9$c['runWith']([0x1, $z7d]);
        } });
    }, o7qez0['getFileNativePath'] = function (vfd$9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vfd$9;
    }, o7qez0['remove'] = function (rn1g8, jkbra, fq7zo) {
      jkbra === void 0x0 && (jkbra = '');var jrnb = o7qez0['getFileInfo'](jkbra),
          yx_qe = o7qez0['getFileNativePath'](jrnb['md5']);akujbs['loader']['clearRes'](jrnb['readyUrl']), o7qez0['fs']['unlink']({ 'filePath': yx_qe, 'success': function (itc92) {
          if (jkbra != '') o7qez0['onSaveFile'](jkbra, rn1g8);fq7zo != null && fq7zo['runWith']([0x0]);
        }, 'fail': function (ksrjab) {} });
    }, o7qez0['onSaveFile'] = function (wh5y_, cvd9$i) {
      var brg = wh5y_['split']('?')[0x0];o7qez0['filesListObj'][brg] = { 'md5': cvd9$i, 'readyUrl': wh5y_ }, o7qez0['fs']['writeFile']({ 'filePath': o7qez0['fileNativeDir'] + '/' + o7qez0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o7qez0['filesListObj']), 'success': function (wymh5_) {
          console['log']('写入测试测试成功：', wymh5_);
        }, 'fail': function (i2t) {
          console['log']('写入测试测试失败：', i2t);
        } });
    }, o7qez0['existDir'] = function (ezq07, ict2) {
      o7qez0['fs']['mkdir']({ 'dirPath': ezq07, 'success': function (hmxy_) {
          ict2 != null && ict2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_6mw5) {
          if (_6mw5['errMsg']['indexOf']('file already exists') != -0x1) o7qez0['readSync'](o7qez0['fileListName'], 'utf8', ict2);else ict2 != null && ict2['runWith']([0x1, _6mw5]);
        } });
    }, o7qez0['readSync'] = function (q7ozf, whmx_y, gjbr, d7pzo) {
      whmx_y === void 0x0 && (whmx_y = 'ascill'), d7pzo === void 0x0 && (d7pzo = '');var w5mh61 = o7qez0['getFileNativePath'](q7ozf),
          n31685;try {
        n31685 = o7qez0['fs']['readFileSync'](w5mh61), gjbr != null && gjbr['runWith']([0x0, { 'data': n31685 }]);
      } catch (ez07oq) {
        gjbr != null && gjbr['runWith']([0x1]);
      }
    }, o7qez0['readCache'] = function () {}, o7qez0['writeCache'] = function (gkbjra) {
      var yeo0x = readyUrl['split']('?')[0x0];o7qez0['filesListObj'][yeo0x] = { 'md5': md5Name, 'readyUrl': readyUrl }, o7qez0['fs']['writeFile']({ 'filePath': o7qez0['fileNativeDir'] + '/' + o7qez0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o7qez0['filesListObj']), 'success': function (zp7do) {}, 'fail': function (jbkga) {} });
    }, o7qez0['setNativeFileDir'] = function (zfd$vp) {
      o7qez0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zfd$vp;
    }, o7qez0['filesListObj'] = {}, o7qez0['fileNativeDir'] = null, o7qez0['fileListName'] = 'layaairfiles.txt', o7qez0['ziyuFileData'] = {}, njbr(o7qez0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), o7qez0;
  }(odzf7),
      eyq0_x = function (c2t4il) {
    function qm0x_() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qm0x_['__super']['call'](this), this['_sound'] = qm0x_['_createSound']();
    }f7pze(qm0x_, 'laya.wx.mini.MiniSound', c2t4il);var cvi92 = qm0x_['prototype'];return cvi92['load'] = function (h_65w) {
      var qoxe = this;h_65w = hx_0m['formatURL'](h_65w), this['url'] = h_65w;if (qm0x_['_audioCache'][h_65w]) {
        this['event']('complete');return;
      }function dv$pz() {
        if (qm0x_['_null'] != undefined) qoxe['_sound']['onCanplay'](qm0x_['_null']), qoxe['_sound']['onError'](qm0x_['_null']);else try {
          qoxe['_sound']['onCanplay'](null), qoxe['_sound']['onError'](null), qm0x_['_null'] = null;
        } catch (i$t9vc) {
          console['warn']('[wxmini] _clearSound:' + i$t9vc), qoxe['_sound']['onCanplay'](it$9c), qoxe['_sound']['onError'](it$9c), qm0x_['_null'] = it$9c;
        }
      }function wh_yxm() {
        dv$pz(), _yhwmx['loaded'] = !![], _yhwmx['event']('complete'), qm0x_['_audioCache'][_yhwmx['url']] = _yhwmx;
      }function $9civ(ict9v) {
        console['error']('errCode=' + ict9v['errCode'] + '  errMsg=' + ict9v['errMsg']), dv$pz(), _yhwmx['event']('error');
      }function it$9c() {}this['_sound']['onCanplay'](wh_yxm), this['_sound']['onError']($9civ), this['_sound']['src'] = h_65w;var _yhwmx = this;
    }, cvi92['play'] = function (ksjua, njg38r) {
      ksjua === void 0x0 && (ksjua = 0x0), njg38r === void 0x0 && (njg38r = 0x0);var nrj3;if (this['url'] == ubas['_tMusic']) {
        if (!qm0x_['_musicAudio']) qm0x_['_musicAudio'] = qm0x_['_createSound']();nrj3 = qm0x_['_musicAudio'];
      } else nrj3 = qm0x_['_createSound']();nrj3['src'] = this['url'];var zdp$f = new f7ozq(nrj3);return zdp$f['url'] = this['url'], zdp$f['loops'] = njg38r, zdp$f['startTime'] = ksjua, zdp$f['play'](), ubas['addChannel'](zdp$f), zdp$f;
    }, cvi92['dispose'] = function () {
      var _xqmy = qm0x_['_audioCache'][this['url']];_xqmy && (_xqmy['src'] = '', delete qm0x_['_audioCache'][this['url']]);
    }, pdf7$z(0x0, cvi92, 'duration', function () {
      return this['_sound']['duration'];
    }), qm0x_['_createSound'] = function () {
      return qm0x_['_id']++, e7qfzo['window']['wx']['createInnerAudioContext']();
    }, qm0x_['_musicAudio'] = null, qm0x_['_id'] = 0x0, qm0x_['_audioCache'] = {}, qm0x_['_null'] = undefined, qm0x_;
  }(odzf7),
      f7ozq = function (vic9$) {
    function rkbg(ubk) {
      this['_audio'] = null, this['_onEnd'] = null, rkbg['__super']['call'](this), this['_audio'] = ubk, this['_onEnd'] = i$pvd9['bind'](this['__onEnd'], this), ubk['onEnded'](this['_onEnd']);
    }f7pze(rkbg, 'laya.wx.mini.MiniSoundChannel', vic9$);var m_yq0 = rkbg['prototype'];return m_yq0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (akujbs['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, m_yq0['__onNull'] = function () {}, m_yq0['play'] = function () {
      this['isStopped'] = ![], ubas['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, m_yq0['stop'] = function () {
      this['isStopped'] = !![], ubas['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (rkbg['_null'] != undefined) this['_audio']['onEnded'](rkbg['_null']);else try {
        this['_audio']['onEnded'](null), rkbg['_null'] = null;
      } catch (e0zq) {
        console['warn']('[wxmini] stop:' + e0zq), this['_audio']['onEnded'](i$pvd9['bind'](this['__onNull'], this)), rkbg['_null'] = i$pvd9['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, m_yq0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, m_yq0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ubas['addChannel'](this), this['_audio']['play']();
    }, pdf7$z(0x0, m_yq0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), pdf7$z(0x0, m_yq0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), pdf7$z(0x0, m_yq0, 'volume', function () {
      return 0x1;
    }, function (oq0y) {}), rkbg['_null'] = undefined, rkbg;
  }(d$vi9c);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w5368 in Laya) {
    var $9vfp = Laya[w5368];$9vfp && $9vfp['__isclass'] && (exports[w5368] = $9vfp);
  }
});