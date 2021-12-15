var u = wx.$x;
(function (window, document, xzomi) {
  var jc9l = xzomi['un'],
      wt631 = xzomi['uns'],
      zsx = xzomi['static'],
      ixg4v = xzomi['class'],
      l8f9y7 = xzomi['getset'],
      b0hae = xzomi['__newvec'],
      oi4xs = laya['utils']['Browser'],
      qp_hae = laya['events']['Event'],
      ly$789 = laya['events']['EventDispatcher'],
      ixmozs = laya['resource']['HTMLImage'],
      gidx4v = laya['utils']['Handler'],
      e0hpab = laya['display']['Input'],
      ke0b1w = laya['net']['Loader'],
      f89cl7 = laya['maths']['Matrix'],
      wb3k10 = laya['renders']['Render'],
      p_qa = laya['utils']['RunDriver'],
      i4soxm = laya['media']['Sound'],
      nuvdjc = laya['media']['SoundChannel'],
      bkwh0e = laya['media']['SoundManager'],
      vudgn4 = laya['display']['Stage'],
      v4udgi = laya['net']['URL'],
      hbpk0 = laya['utils']['Utils'],
      mo52zs = function () {
    function vdgi4() {}return ixg4v(vdgi4, 'laya.wx.mini.MiniAdpter'), vdgi4['getJson'] = function (nugjv) {
      return JSON['parse'](nugjv);
    }, vdgi4['init'] = function (z5sm, b0pk) {
      z5sm === void 0x0 && (z5sm = ![]), b0pk === void 0x0 && (b0pk = ![]);if (vdgi4['_inited']) return;vdgi4['window'] = window;if (vdgi4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vdgi4['_inited'] = !![], vdgi4['isZiYu'] = b0pk, vdgi4['isPosMsgYu'] = z5sm, vdgi4['EnvConfig'] = {}, !vdgi4['isZiYu'] && (beahp['setNativeFileDir']('/layaairGame'), beahp['existDir'](beahp['fileNativeDir'], gidx4v['create'](vdgi4, vdgi4['onMkdirCallBack']))), vdgi4['window']['focus'] = function () {}, xzomi['getUrlPath'] = function () {}, vdgi4['window']['logtime'] = function (ucnvjf) {}, vdgi4['window']['alertTimeLog'] = function (xigm) {}, vdgi4['window']['resetShareInfo'] = function () {}, vdgi4['window']['CanvasRenderingContext2D'] = function () {}, vdgi4['window']['CanvasRenderingContext2D']['prototype'] = vdgi4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vdgi4['window']['document']['body']['appendChild'] = function () {}, vdgi4['EnvConfig']['pixelRatioInt'] = 0x0, p_qa['getPixelRatio'] = vdgi4['pixelRatio'], vdgi4['_preCreateElement'] = oi4xs['createElement'], oi4xs['createElement'] = vdgi4['createElement'], p_qa['createShaderCondition'] = vdgi4['createShaderCondition'], hbpk0['parseXMLFromString'] = vdgi4['parseXMLFromString'], e0hpab['_createInputElement'] = y7f9['_createInputElement'], vdgi4['EnvConfig']['load'] = ke0b1w['prototype']['load'], ke0b1w['prototype']['load'] = vfnuc['prototype']['load'], vdgi4['isZiYu'] && z5sm && wx['onMessage'](function (x5somz) {
        x5somz['isLoad'] && (beahp['ziyuFileData'][x5somz['url']] = x5somz['data']);
      });
    }, vdgi4['onMkdirCallBack'] = function (i4moxs, x4divg) {
      if (!i4moxs) beahp['filesListObj'] = JSON['parse'](x4divg['data']);
    }, vdgi4['pixelRatio'] = function () {
      if (!vdgi4['EnvConfig']['pixelRatioInt']) try {
        var hekpb = wx['getSystemInfoSync']();return vdgi4['EnvConfig']['pixelRatioInt'] = hekpb['pixelRatio'], hekpb = hekpb, hekpb['pixelRatio'];
      } catch (dcvnuj) {}return vdgi4['EnvConfig']['pixelRatioInt'];
    }, vdgi4['createElement'] = function (njvdcu) {
      if (njvdcu == 'canvas') {
        var dig4x;return vdgi4['idx'] == 0x1 ? vdgi4['isZiYu'] ? (dig4x = sharedCanvas, dig4x['style'] = {}) : dig4x = window['canvas'] : dig4x = window['wx']['createCanvas'](), vdgi4['idx']++, dig4x;
      } else {
        if (njvdcu == 'textarea' || njvdcu == 'input') return vdgi4['onCreateInput'](njvdcu);else {
          if (njvdcu == 'div') {
            var misx4 = vdgi4['_preCreateElement'](njvdcu);return misx4['contains'] = function (iomxzs) {
              return null;
            }, misx4['removeChild'] = function (mi4ox) {}, misx4;
          } else return vdgi4['_preCreateElement'](njvdcu);
        }
      }
    }, vdgi4['onCreateInput'] = function (ekb0w1) {
      var gnu = vdgi4['_preCreateElement'](ekb0w1);return gnu['focus'] = y7f9['wxinputFocus'], gnu['blur'] = y7f9['wxinputblur'], gnu['style'] = {}, gnu['value'] = 0x0, gnu['parentElement'] = {}, gnu['placeholder'] = {}, gnu['type'] = {}, gnu['setColor'] = function (k1w03) {}, gnu['setType'] = function (k63) {}, gnu['setFontFace'] = function (omz5) {}, gnu['addEventListener'] = function (aqe_h) {}, gnu['contains'] = function (aqhp) {
        return null;
      }, gnu['removeChild'] = function (vfucnj) {}, gnu;
    }, vdgi4['createShaderCondition'] = function (sx4di) {
      var rqh_ap = this,
          y$89l7 = function () {
        var wkb0e1 = sx4di;return rqh_ap[sx4di['replace']('this.', '')];
      };return y$89l7;
    }, vdgi4['EnvConfig'] = null, vdgi4['window'] = null, vdgi4['_preCreateElement'] = null, vdgi4['_inited'] = ![], vdgi4['wxRequest'] = null, vdgi4['systemInfo'] = null, vdgi4['version'] = '0.0.1', vdgi4['isZiYu'] = ![], vdgi4['isPosMsgYu'] = ![], vdgi4['parseXMLFromString'] = function (b0pke) {
      var cljnf9, w3tk1;b0pke = b0pke['replace'](/>\s+</g, '><');try {
        cljnf9 = new window['Parser']['DOMParser']()['parseFromString'](b0pke, 'text/xml');
      } catch (xoismz) {
        throw '需要引入xml解析库文件';
      }return cljnf9;
    }, vdgi4['idx'] = 0x1, vdgi4;
  }(),
      btkw13 = function () {
    function qep0() {}ixg4v(qep0, 'laya.wx.mini.MiniImage');var xsmoi4 = qep0['prototype'];return xsmoi4['_loadImage'] = function (vgnjud) {
      var unvgd4 = this,
          o2mzs5 = ![];vgnjud['indexOf']('layaNativeDir/') == -0x1 && (o2mzs5 = !![], vgnjud = v4udgi['formatURL'](vgnjud));if (!beahp['getFileInfo'](vgnjud)) {
        if (vgnjud['indexOf']('http://') != -0x1 || vgnjud['indexOf']('https://') != -0x1) beahp['downImg'](vgnjud, new gidx4v(qep0, qep0['onDownImgCallBack'], [vgnjud, unvgd4]), vgnjud);else qep0['onCreateImage'](vgnjud, unvgd4, !![]);
      } else qep0['onCreateImage'](vgnjud, unvgd4, !o2mzs5);
    }, qep0['onDownImgCallBack'] = function (lf978c, hw0ekb, sxig4d) {
      if (!sxig4d) qep0['onCreateImage'](lf978c, hw0ekb);else hw0ekb['onError'](null);
    }, qep0['onCreateImage'] = function (a_phqr, nujcfv, zxmois) {
      zxmois === void 0x0 && (zxmois = ![]);var oz5;if (!zxmois) {
        var l9fj = beahp['getFileInfo'](a_phqr),
            ekb10 = l9fj['md5'];oz5 = beahp['getFileNativePath'](ekb10);
      } else oz5 = a_phqr;if (nujcfv['imgCache'] == null) nujcfv['imgCache'] = {};var pahe_q;function t1625() {
        pahe_q['onload'] = null, pahe_q['onerror'] = null, delete nujcfv['imgCache'][a_phqr];
      };var zsimox = function () {
        t1625(), nujcfv['onLoaded'](pahe_q);
      },
          mxoz5 = function () {
        t1625(), nujcfv['event']('error', 'Load image failed');
      };nujcfv['_type'] == 'nativeimage' ? (pahe_q = new oi4xs['window']['Image'](), pahe_q['crossOrigin'] = '', pahe_q['onload'] = zsimox, pahe_q['onerror'] = mxoz5, pahe_q['src'] = oz5, nujcfv['imgCache'][a_phqr] = pahe_q) : new ixmozs['create'](oz5, { 'onload': zsimox, 'onerror': mxoz5, 'onCreate': function (vxdi) {
          pahe_q = vxdi, nujcfv['imgCache'][a_phqr] = vxdi;
        } });
    }, qep0;
  }(),
      y7f9 = function () {
    function _harq() {}return ixg4v(_harq, 'laya.wx.mini.MiniInput'), _harq['_createInputElement'] = function () {
      e0hpab['_initInput'](e0hpab['area'] = oi4xs['createElement']('textarea')), e0hpab['_initInput'](e0hpab['input'] = oi4xs['createElement']('input')), e0hpab['inputContainer'] = oi4xs['createElement']('div'), e0hpab['inputContainer']['style']['position'] = 'absolute', e0hpab['inputContainer']['style']['zIndex'] = 0x186a0, oi4xs['container']['appendChild'](e0hpab['inputContainer']), e0hpab['inputContainer']['setPos'] = function (ncuj, iug4vd) {
        e0hpab['inputContainer']['style']['left'] = ncuj + 'px', e0hpab['inputContainer']['style']['top'] = iug4vd + 'px';
      }, xzomi['stage']['on']('resize', null, _harq['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mios4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bkwh0e['_soundClass'] = y$8l, bkwh0e['_musicClass'] = y$8l;
    }, _harq['_onStageResize'] = function () {
      var o2s5mz = xzomi['stage']['_canvasTransform']['identity']();o2s5mz['scale'](oi4xs['width'] / wb3k10['canvas']['width'] / p_qa['getPixelRatio'](), oi4xs['height'] / wb3k10['canvas']['height'] / p_qa['getPixelRatio']());
    }, _harq['wxinputFocus'] = function (m5zo26) {
      var cfnu9j = e0hpab['inputElement']['target'];if (cfnu9j && !cfnu9j['editable']) return;mo52zs['window']['wx']['offKeyboardConfirm'](), mo52zs['window']['wx']['offKeyboardInput'](), mo52zs['window']['wx']['showKeyboard']({ 'defaultValue': cfnu9j['text'], 'maxLength': cfnu9j['maxChars'], 'multiple': cfnu9j['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (keb10) {}, 'fail': function (vujgdn) {} }), mo52zs['window']['wx']['onKeyboardConfirm'](function (yl8f7) {
        var w1236 = yl8f7 ? yl8f7['value'] : '';cfnu9j['text'] = w1236, cfnu9j['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mo52zs['window']['wx']['onKeyboardInput'](function (w0hekb) {
        var w1b0k3 = w0hekb ? w0hekb['value'] : '';if (!cfnu9j['multiline']) {
          if (w1b0k3['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }cfnu9j['text'] = w1b0k3, cfnu9j['event']('input');
      });
    }, _harq['inputEnter'] = function () {
      e0hpab['inputElement']['target']['focus'] = ![];
    }, _harq['wxinputblur'] = function () {
      _harq['hideKeyboard']();
    }, _harq['hideKeyboard'] = function () {
      mo52zs['window']['wx']['offKeyboardConfirm'](), mo52zs['window']['wx']['offKeyboardInput'](), mo52zs['window']['wx']['hideKeyboard']({ 'success': function (jncv) {
          console['log']('隐藏键盘');
        }, 'fail': function (om6) {
          console['log']('隐藏键盘出错:' + (om6 ? om6['errMsg'] : ''));
        } });
    }, _harq;
  }(),
      vfnuc = function () {
    function p_eq() {}ixg4v(p_eq, 'laya.wx.mini.MiniLoader');var o4sxi = p_eq['prototype'];return o4sxi['load'] = function (gnv4d, t615, moisz, hbe0kw, igs4mx) {
      moisz === void 0x0 && (moisz = !![]), igs4mx === void 0x0 && (igs4mx = ![]);var m4igx = this;m4igx['_url'] = gnv4d;if (gnv4d['indexOf']('data:image') === 0x0) m4igx['_type'] = t615 = 'image';else m4igx['_type'] = t615 || (t615 = m4igx['getTypeFromUrl'](gnv4d));m4igx['_cache'] = moisz, m4igx['_data'] = null;var eqpa0h = 'ascii';if (gnv4d['indexOf']('.fnt') != -0x1) eqpa0h = 'utf8';else t615 == 'arraybuffer' && (eqpa0h = '');;var igud4v = hbpk0['getFileExtension'](gnv4d);if (p_eq['_fileTypeArr']['indexOf'](igud4v) != -0x1) mo52zs['EnvConfig']['load']['call'](this, gnv4d, t615, moisz, hbe0kw, igs4mx);else {
        if (!beahp['getFileInfo'](gnv4d)) {
          if (gnv4d['indexOf']('layaNativeDir/') != -0x1) {
            if (mo52zs['isZiYu']) {
              var x5so = beahp['ziyuFileData'][gnv4d];m4igx['onLoaded'](x5so);return;
            } else {
              cosnole['log']('read read'), beahp['read'](gnv4d, eqpa0h, new gidx4v(p_eq, p_eq['onReadNativeCallBack'], [eqpa0h, gnv4d, t615, moisz, hbe0kw, igs4mx, m4igx]));return;
            }
          }if (v4udgi['rootPath'] == '') var gidv4u = gnv4d;else gidv4u = gnv4d['split'](v4udgi['rootPath'])[0x0];gnv4d['indexOf']('http://') != -0x1 || gnv4d['indexOf']('https://') != -0x1 ? mo52zs['EnvConfig']['load']['call'](m4igx, gnv4d, t615, moisz, hbe0kw, igs4mx) : beahp['readFile'](gidv4u, eqpa0h, new gidx4v(p_eq, p_eq['onReadNativeCallBack'], [eqpa0h, gnv4d, t615, moisz, hbe0kw, igs4mx, m4igx]), gnv4d);
        } else mo52zs['EnvConfig']['load']['call'](this, gnv4d, t615, moisz, hbe0kw, igs4mx);
      }
    }, o4sxi['resMgrLoad'] = function (mzos25, vcfuj, udvcn, oz5xs, zoxmsi, xzism, vg4nd) {
      udvcn === void 0x0 && (udvcn = 0x0), oz5xs === void 0x0 && (oz5xs = ![]), zoxmsi === void 0x0 && (zoxmsi = ![]), xzism === void 0x0 && (xzism = 0x0), vg4nd === void 0x0 && (vg4nd = 0x3), mzos25['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mzos25), mo52zs['EnvConfig']['resMgrLoad'](mzos25, (nfjuc9, m6o5, dgu4nv) => {
        p_eq['prototype']['resMgrLoadCallBack'](nfjuc9, m6o5, dgu4nv, vcfuj);
      }, udvcn, oz5xs, zoxmsi, xzism, vg4nd);
    }, o4sxi['resMgrLoadCallBack'] = function (vndguj, nvdu, sox4i, z325t6) {
      console['log']('buff:::', vndguj, sox4i, beahp['fileNativeDir'] + '///' + beahp['fileListName']), z325t6(vndguj, nvdu, sox4i);
    }, o4sxi['clearRes'] = function (w31kb, xmzs) {
      xmzs === void 0x0 && (xmzs = ![]);var hbek = this;hbek['clearRes'](w31kb, xmzs);var f9lcnj = beahp['getFileInfo'](w31kb);if (f9lcnj && (w31kb['indexOf']('http://') != -0x1 || w31kb['indexOf']('https://') != -0x1)) {
        var gun4d = f9lcnj['md5'],
            k1tw6 = beahp['getFileNativePath'](gun4d);beahp['remove'](k1tw6);
      }
    }, p_eq['onReadNativeCallBack'] = function (xmzsi, smzi, xvdi4, cjf9nl, uvdcjn, l$8y79, vcfj, w1236t, nflc9j) {
      cjf9nl === void 0x0 && (cjf9nl = !![]), l$8y79 === void 0x0 && (l$8y79 = ![]), w1236t === void 0x0 && (w1236t = 0x0);if (!w1236t) {
        var ixgm;if (xvdi4 == 'json' || xvdi4 == 'atlas') ixgm = mo52zs['getJson'](nflc9j['data']);else xvdi4 == 'xml' ? ixgm = hbpk0['parseXMLFromString'](nflc9j['data']) : ixgm = nflc9j['data'];vcfj['onLoaded'](ixgm), !mo52zs['isZiYu'] && mo52zs['isPosMsgYu'] && xvdi4 != 'arraybuffer' && wx['postMessage']({ 'url': smzi, 'data': ixgm, 'isLoad': !![] });
      } else w1236t == 0x1 && mo52zs['EnvConfig']['load']['call'](vcfj, smzi, xvdi4, cjf9nl, uvdcjn, l$8y79);
    }, zsx(p_eq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), p_eq;
  }(),
      beahp = function (bkpe) {
    function o6zt2() {
      o6zt2['__super']['call'](this);;
    }return ixg4v(o6zt2, 'laya.wx.mini.MiniFileMgr', bkpe), o6zt2['isLoadFile'] = function (yf98l7) {
      return o6zt2['_fileTypeArr']['indexOf'](yf98l7) != -0x1 ? !![] : ![];
    }, o6zt2['getFileInfo'] = function (duvi4g) {
      var xd4gv = duvi4g['split']('?')[0x0],
          ep0ab = o6zt2['filesListObj'][xd4gv];if (ep0ab == null) return null;else return ep0ab;return null;
    }, o6zt2['onFileUpdate'] = function (fjn9lc, bp0hk) {
      var nug4vd = fjn9lc['split']('/'),
          vjgund = nug4vd[nug4vd['length'] - 0x1],
          hqeap_ = o6zt2['getFileInfo'](bp0hk);if (hqeap_ == null) o6zt2['onSaveFile'](bp0hk, vjgund);else {
        if (hqeap_['readyUrl'] != bp0hk) o6zt2['remove'](vjgund, bp0hk);
      }
    }, o6zt2['exits'] = function (t61w, ncvu) {
      var ujcn9f = o6zt2['getFileNativePath'](t61w);o6zt2['fs']['getFileInfo']({ 'filePath': ujcn9f, 'success': function (vfnj) {
          ncvu != null && ncvu['runWith']([0x0, vfnj]);
        }, 'fail': function (dnug) {
          ncvu != null && ncvu['runWith']([0x1, dnug]);
        } });
    }, o6zt2['read'] = function (szxmio, mzxo5, c89f7l, z6o25) {
      mzxo5 === void 0x0 && (mzxo5 = 'ascill'), z6o25 === void 0x0 && (z6o25 = '');var osimx;z6o25 != '' ? osimx = o6zt2['getFileNativePath'](szxmio) : osimx = szxmio, o6zt2['fs']['readFile']({ 'filePath': osimx, 'encoding': mzxo5, 'success': function (jfnv) {
          c89f7l != null && c89f7l['runWith']([0x0, jfnv]);
        }, 'fail': function (o5m2zs) {
          if (o5m2zs && z6o25 != '') o6zt2['down'](z6o25, mzxo5, c89f7l, z6o25);else c89f7l != null && c89f7l['runWith']([0x1]);
        } });
    }, o6zt2['readNativeFile'] = function (moxs5, zsxoi) {
      o6zt2['fs']['readFile']({ 'filePath': moxs5, 'encoding': '', 'success': function (z5sxm) {
          zsxoi != null && zsxoi['runWith']([0x0]);
        }, 'fail': function (fcl97) {
          zsxoi != null && zsxoi['runWith']([0x1]);
        } });
    }, o6zt2['down'] = function (t12w36, xsm4ig, hb0aep, m5xzo) {
      xsm4ig === void 0x0 && (xsm4ig = 'ascill'), m5xzo === void 0x0 && (m5xzo = '');var w6123t = o6zt2['getFileNativePath'](m5xzo),
          mxig4s = o6zt2['wxdown']({ 'url': t12w36, 'filePath': w6123t, 'success': function (nudvg4) {
          if (nudvg4['statusCode'] === 0xc8) o6zt2['readFile'](nudvg4['filePath'], xsm4ig, hb0aep, m5xzo);
        }, 'fail': function (beha0p) {
          hb0aep != null && hb0aep['runWith']([0x1, beha0p]);
        } });mxig4s['onProgressUpdate'](function (szom) {
        hb0aep != null && hb0aep['runWith']([0x2, szom['progress']]);
      });
    }, o6zt2['readFile'] = function (e01b, wk6t31, v4dnug, jncf9l) {
      wk6t31 === void 0x0 && (wk6t31 = 'ascill'), jncf9l === void 0x0 && (jncf9l = ''), o6zt2['fs']['readFile']({ 'filePath': e01b, 'encoding': wk6t31, 'success': function (lfy897) {
          if (e01b['indexOf']('http://') != -0x1 || e01b['indexOf']('https://') != -0x1) o6zt2['onFileUpdate'](e01b, jncf9l);v4dnug != null && v4dnug['runWith']([0x0, lfy897]);
        }, 'fail': function (njvucd) {
          if (njvucd) v4dnug != null && v4dnug['runWith']([0x1, njvucd]);
        } });
    }, o6zt2['downImg'] = function (xi4ds, b10ek, cnujd) {
      cnujd === void 0x0 && (cnujd = '');var paq_rh = o6zt2['wxdown']({ 'url': xi4ds, 'success': function (w0ebhk) {
          w0ebhk['statusCode'] === 0xc8 && o6zt2['copyFile'](w0ebhk['tempFilePath'], cnujd, b10ek);
        }, 'fail': function (dngju) {
          b10ek != null && b10ek['runWith']([0x1, dngju]);
        } });
    }, o6zt2['copyFile'] = function (h0bkp, ujd, tw326) {
      var cf987 = h0bkp['split']('/'),
          w130k = cf987[cf987['length'] - 0x1],
          sdgxi = ujd['split']('?')[0x0],
          he0apq = o6zt2['getFileInfo'](ujd),
          gm4sx = o6zt2['getFileNativePath'](w130k);o6zt2['fs']['copyFile']({ 'srcPath': h0bkp, 'destPath': gm4sx, 'success': function (mos25z) {
          if (!he0apq) o6zt2['onSaveFile'](ujd, w130k), tw326 != null && tw326['runWith']([0x0]);else {
            if (he0apq['readyUrl'] != ujd) o6zt2['remove'](w130k, ujd, tw326);
          }
        }, 'fail': function (ujgdn) {
          tw326 != null && tw326['runWith']([0x1, ujgdn]);
        } });
    }, o6zt2['getFileNativePath'] = function (sxomi) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sxomi;
    }, o6zt2['remove'] = function (kbh0pe, aq_eph, gvudn4) {
      aq_eph === void 0x0 && (aq_eph = '');var x4gis = o6zt2['getFileInfo'](aq_eph),
          iduvg4 = o6zt2['getFileNativePath'](x4gis['md5']);xzomi['loader']['clearRes'](x4gis['readyUrl']), o6zt2['fs']['unlink']({ 'filePath': iduvg4, 'success': function (w031k) {
          if (aq_eph != '') o6zt2['onSaveFile'](aq_eph, kbh0pe);gvudn4 != null && gvudn4['runWith']([0x0]);
        }, 'fail': function (xv4gi) {} });
    }, o6zt2['onSaveFile'] = function (nvgdu4, g4xds) {
      var vd = nvgdu4['split']('?')[0x0];o6zt2['filesListObj'][vd] = { 'md5': g4xds, 'readyUrl': nvgdu4 }, o6zt2['fs']['writeFile']({ 'filePath': o6zt2['fileNativeDir'] + '/' + o6zt2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o6zt2['filesListObj']), 'success': function (fl9y) {
          console['log']('写入测试测试成功：', fl9y);
        }, 'fail': function (e0apbh) {
          console['log']('写入测试测试失败：', e0apbh);
        } });
    }, o6zt2['existDir'] = function (isgd4, hpa0qe) {
      o6zt2['fs']['mkdir']({ 'dirPath': isgd4, 'success': function (qp_he) {
          hpa0qe != null && hpa0qe['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (nflc9) {
          if (nflc9['errMsg']['indexOf']('file already exists') != -0x1) o6zt2['readSync'](o6zt2['fileListName'], 'utf8', hpa0qe);else hpa0qe != null && hpa0qe['runWith']([0x1, nflc9]);
        } });
    }, o6zt2['readSync'] = function (k0web1, $78l, qpha0e, mixszo) {
      $78l === void 0x0 && ($78l = 'ascill'), mixszo === void 0x0 && (mixszo = '');var e0paq = o6zt2['getFileNativePath'](k0web1),
          pk0hbe;try {
        pk0hbe = o6zt2['fs']['readFileSync'](e0paq), qpha0e != null && qpha0e['runWith']([0x0, { 'data': pk0hbe }]);
      } catch (t12w6) {
        qpha0e != null && qpha0e['runWith']([0x1]);
      }
    }, o6zt2['readCache'] = function () {}, o6zt2['writeCache'] = function (dgnju) {
      var fvncju = readyUrl['split']('?')[0x0];o6zt2['filesListObj'][fvncju] = { 'md5': md5Name, 'readyUrl': readyUrl }, o6zt2['fs']['writeFile']({ 'filePath': o6zt2['fileNativeDir'] + '/' + o6zt2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o6zt2['filesListObj']), 'success': function (pahbe) {}, 'fail': function (ea0phb) {} });
    }, o6zt2['setNativeFileDir'] = function (i4sgd) {
      o6zt2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i4sgd;
    }, o6zt2['filesListObj'] = {}, o6zt2['fileNativeDir'] = null, o6zt2['fileListName'] = 'layaairfiles.txt', o6zt2['ziyuFileData'] = {}, zsx(o6zt2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), o6zt2;
  }(ly$789),
      y$8l = function (x4sdi) {
    function xdiv4g() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xdiv4g['__super']['call'](this), this['_sound'] = xdiv4g['_createSound']();
    }ixg4v(xdiv4g, 'laya.wx.mini.MiniSound', x4sdi);var yl879$ = xdiv4g['prototype'];return yl879$['load'] = function ($y9l8) {
      var x5mzo = this;$y9l8 = v4udgi['formatURL']($y9l8), this['url'] = $y9l8;if (xdiv4g['_audioCache'][$y9l8]) {
        this['event']('complete');return;
      }function iu4v() {
        if (xdiv4g['_null'] != undefined) x5mzo['_sound']['onCanplay'](xdiv4g['_null']), x5mzo['_sound']['onError'](xdiv4g['_null']);else try {
          x5mzo['_sound']['onCanplay'](null), x5mzo['_sound']['onError'](null), xdiv4g['_null'] = null;
        } catch (vun4d) {
          console['warn']('[wxmini] _clearSound:' + vun4d), x5mzo['_sound']['onCanplay'](kew10), x5mzo['_sound']['onError'](kew10), xdiv4g['_null'] = kew10;
        }
      }function m25z6() {
        iu4v(), cnuvj['loaded'] = !![], cnuvj['event']('complete'), xdiv4g['_audioCache'][cnuvj['url']] = cnuvj;
      }function eqp_ha(ncl9jf) {
        console['error']('errCode=' + ncl9jf['errCode'] + '  errMsg=' + ncl9jf['errMsg']), iu4v(), cnuvj['event']('error');
      }function kew10() {}this['_sound']['onCanplay'](m25z6), this['_sound']['onError'](eqp_ha), this['_sound']['src'] = $y9l8;var cnuvj = this;
    }, yl879$['play'] = function (x4msig, kwe1b) {
      x4msig === void 0x0 && (x4msig = 0x0), kwe1b === void 0x0 && (kwe1b = 0x0);var giud4v;if (this['url'] == bkwh0e['_tMusic']) {
        if (!xdiv4g['_musicAudio']) xdiv4g['_musicAudio'] = xdiv4g['_createSound']();giud4v = xdiv4g['_musicAudio'];
      } else giud4v = xdiv4g['_createSound']();giud4v['src'] = this['url'];var dxsg = new aebh(giud4v);return dxsg['url'] = this['url'], dxsg['loops'] = kwe1b, dxsg['startTime'] = x4msig, dxsg['play'](), bkwh0e['addChannel'](dxsg), dxsg;
    }, yl879$['dispose'] = function () {
      var _ap = xdiv4g['_audioCache'][this['url']];_ap && (_ap['src'] = '', delete xdiv4g['_audioCache'][this['url']]);
    }, l8f9y7(0x0, yl879$, 'duration', function () {
      return this['_sound']['duration'];
    }), xdiv4g['_createSound'] = function () {
      return xdiv4g['_id']++, mo52zs['window']['wx']['createInnerAudioContext']();
    }, xdiv4g['_musicAudio'] = null, xdiv4g['_id'] = 0x0, xdiv4g['_audioCache'] = {}, xdiv4g['_null'] = undefined, xdiv4g;
  }(ly$789),
      aebh = function (ahp0be) {
    function i4x(bwhke) {
      this['_audio'] = null, this['_onEnd'] = null, i4x['__super']['call'](this), this['_audio'] = bwhke, this['_onEnd'] = hbpk0['bind'](this['__onEnd'], this), bwhke['onEnded'](this['_onEnd']);
    }ixg4v(i4x, 'laya.wx.mini.MiniSoundChannel', ahp0be);var h_aqrp = i4x['prototype'];return h_aqrp['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xzomi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, h_aqrp['__onNull'] = function () {}, h_aqrp['play'] = function () {
      this['isStopped'] = ![], bkwh0e['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, h_aqrp['stop'] = function () {
      this['isStopped'] = !![], bkwh0e['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (i4x['_null'] != undefined) this['_audio']['onEnded'](i4x['_null']);else try {
        this['_audio']['onEnded'](null), i4x['_null'] = null;
      } catch (pra_hq) {
        console['warn']('[wxmini] stop:' + pra_hq), this['_audio']['onEnded'](hbpk0['bind'](this['__onNull'], this)), i4x['_null'] = hbpk0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, h_aqrp['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, h_aqrp['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bkwh0e['addChannel'](this), this['_audio']['play']();
    }, l8f9y7(0x0, h_aqrp, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), l8f9y7(0x0, h_aqrp, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), l8f9y7(0x0, h_aqrp, 'volume', function () {
      return 0x1;
    }, function (gdixv4) {}), i4x['_null'] = undefined, i4x;
  }(nuvdjc);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t3z652 in Laya) {
    var x5om = Laya[t3z652];x5om && x5om['__isclass'] && (exports[t3z652] = x5om);
  }
});