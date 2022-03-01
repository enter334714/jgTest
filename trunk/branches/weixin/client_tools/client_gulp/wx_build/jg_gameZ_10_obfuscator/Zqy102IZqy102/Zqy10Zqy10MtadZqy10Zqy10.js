var J = wx.h$;
(function (window, document, t68cd) {
  var amlu34 = t68cd['un'],
      tce8h = t68cd['uns'],
      fwp_2 = t68cd['static'],
      x7i1jn = t68cd['class'],
      gc6d8t = t68cd['getset'],
      jirx = t68cd['__newvec'],
      boq05k = laya['utils']['Browser'],
      bd60k = laya['events']['Event'],
      xjv7ni = laya['events']['EventDispatcher'],
      u3na = laya['resource']['HTMLImage'],
      qk5b0g = laya['utils']['Handler'],
      e2_hzp = laya['display']['Input'],
      n71ixj = laya['net']['Loader'],
      g86dc = laya['maths']['Matrix'],
      qybo5 = laya['renders']['Render'],
      jxnv7 = laya['utils']['RunDriver'],
      e2pz_ = laya['media']['Sound'],
      dgk68c = laya['media']['SoundChannel'],
      xjyvr7 = laya['media']['SoundManager'],
      ixjr7 = laya['display']['Stage'],
      dt68 = laya['net']['URL'],
      t8hzc6 = laya['utils']['Utils'],
      thzce = function () {
    function yvrj7x() {}return x7i1jn(yvrj7x, 'laya.wx.mini.MiniAdpter'), yvrj7x['getJson'] = function (w2_9f$) {
      return JSON['parse'](w2_9f$);
    }, yvrj7x['init'] = function (bq5o0, ck8dg) {
      bq5o0 === void 0x0 && (bq5o0 = ![]), ck8dg === void 0x0 && (ck8dg = ![]);if (yvrj7x['_inited']) return;yvrj7x['window'] = window;if (yvrj7x['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yvrj7x['_inited'] = !![], yvrj7x['isZiYu'] = ck8dg, yvrj7x['isPosMsgYu'] = bq5o0, yvrj7x['EnvConfig'] = {}, !yvrj7x['isZiYu'] && (p9e_2w['setNativeFileDir']('/layaairGame'), p9e_2w['existDir'](p9e_2w['fileNativeDir'], qk5b0g['create'](yvrj7x, yvrj7x['onMkdirCallBack']))), yvrj7x['window']['focus'] = function () {}, t68cd['getUrlPath'] = function () {}, yvrj7x['window']['logtime'] = function (dct8g6) {}, yvrj7x['window']['alertTimeLog'] = function (yovq5) {}, yvrj7x['window']['resetShareInfo'] = function () {}, yvrj7x['window']['CanvasRenderingContext2D'] = function () {}, yvrj7x['window']['CanvasRenderingContext2D']['prototype'] = yvrj7x['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yvrj7x['window']['document']['body']['appendChild'] = function () {}, yvrj7x['EnvConfig']['pixelRatioInt'] = 0x0, jxnv7['getPixelRatio'] = yvrj7x['pixelRatio'], yvrj7x['_preCreateElement'] = boq05k['createElement'], boq05k['createElement'] = yvrj7x['createElement'], jxnv7['createShaderCondition'] = yvrj7x['createShaderCondition'], t8hzc6['parseXMLFromString'] = yvrj7x['parseXMLFromString'], e2_hzp['_createInputElement'] = o5jr['_createInputElement'], yvrj7x['EnvConfig']['load'] = n71ixj['prototype']['load'], n71ixj['prototype']['load'] = n71xi['prototype']['load'], yvrj7x['isZiYu'] && bq5o0 && wx['onMessage'](function (h68dct) {
        h68dct['isLoad'] && (p9e_2w['ziyuFileData'][h68dct['url']] = h68dct['data']);
      });
    }, yvrj7x['onMkdirCallBack'] = function (d6c8ht, pw2f9_) {
      if (!d6c8ht) p9e_2w['filesListObj'] = JSON['parse'](pw2f9_['data']);
    }, yvrj7x['pixelRatio'] = function () {
      if (!yvrj7x['EnvConfig']['pixelRatioInt']) try {
        var bd0 = wx['getSystemInfoSync']();return yvrj7x['EnvConfig']['pixelRatioInt'] = bd0['pixelRatio'], bd0 = bd0, bd0['pixelRatio'];
      } catch (z8ect) {}return yvrj7x['EnvConfig']['pixelRatioInt'];
    }, yvrj7x['createElement'] = function (tdc6h8) {
      if (tdc6h8 == 'canvas') {
        var xirjv7;return yvrj7x['idx'] == 0x1 ? yvrj7x['isZiYu'] ? (xirjv7 = sharedCanvas, xirjv7['style'] = {}) : xirjv7 = window['canvas'] : xirjv7 = window['wx']['createCanvas'](), yvrj7x['idx']++, xirjv7;
      } else {
        if (tdc6h8 == 'textarea' || tdc6h8 == 'input') return yvrj7x['onCreateInput'](tdc6h8);else {
          if (tdc6h8 == 'div') {
            var zep2 = yvrj7x['_preCreateElement'](tdc6h8);return zep2['contains'] = function (ch8etz) {
              return null;
            }, zep2['removeChild'] = function (b5yr) {}, zep2;
          } else return yvrj7x['_preCreateElement'](tdc6h8);
        }
      }
    }, yvrj7x['onCreateInput'] = function (qb05g) {
      var qro5 = yvrj7x['_preCreateElement'](qb05g);return qro5['focus'] = o5jr['wxinputFocus'], qro5['blur'] = o5jr['wxinputblur'], qro5['style'] = {}, qro5['value'] = 0x0, qro5['parentElement'] = {}, qro5['placeholder'] = {}, qro5['type'] = {}, qro5['setColor'] = function (w29$_) {}, qro5['setType'] = function (k50bgq) {}, qro5['setFontFace'] = function (yvroj) {}, qro5['addEventListener'] = function (yb0q) {}, qro5['contains'] = function (rv5q) {
        return null;
      }, qro5['removeChild'] = function (d86cht) {}, qro5;
    }, yvrj7x['createShaderCondition'] = function (ezcpht) {
      var y0qb = this,
          v7ryjo = function () {
        var gb50 = ezcpht;return y0qb[ezcpht['replace']('this.', '')];
      };return v7ryjo;
    }, yvrj7x['EnvConfig'] = null, yvrj7x['window'] = null, yvrj7x['_preCreateElement'] = null, yvrj7x['_inited'] = ![], yvrj7x['wxRequest'] = null, yvrj7x['systemInfo'] = null, yvrj7x['version'] = '0.0.1', yvrj7x['isZiYu'] = ![], yvrj7x['isPosMsgYu'] = ![], yvrj7x['parseXMLFromString'] = function (htcpe) {
      var nvjx, kdg80;htcpe = htcpe['replace'](/>\s+</g, '><');try {
        nvjx = new window['Parser']['DOMParser']()['parseFromString'](htcpe, 'text/xml');
      } catch (hpectz) {
        throw '需要引入xml解析库文件';
      }return nvjx;
    }, yvrj7x['idx'] = 0x1, yvrj7x;
  }(),
      g0k8d = function () {
    function t_zeh() {}x7i1jn(t_zeh, 'laya.wx.mini.MiniImage');var t8cz = t_zeh['prototype'];return t8cz['_loadImage'] = function (cgd8t6) {
      var f_92w = this,
          c8td6h = ![];cgd8t6['indexOf']('layaNativeDir/') == -0x1 && (c8td6h = !![], cgd8t6 = dt68['formatURL'](cgd8t6));if (!p9e_2w['getFileInfo'](cgd8t6)) {
        if (cgd8t6['indexOf']('http://') != -0x1 || cgd8t6['indexOf']('https://') != -0x1) p9e_2w['downImg'](cgd8t6, new qk5b0g(t_zeh, t_zeh['onDownImgCallBack'], [cgd8t6, f_92w]), cgd8t6);else t_zeh['onCreateImage'](cgd8t6, f_92w, !![]);
      } else t_zeh['onCreateImage'](cgd8t6, f_92w, !c8td6h);
    }, t_zeh['onDownImgCallBack'] = function (fpw_, xjni1, fw_9$2) {
      if (!fw_9$2) t_zeh['onCreateImage'](fpw_, xjni1);else xjni1['onError'](null);
    }, t_zeh['onCreateImage'] = function (wp92e_, ma43lu, r5vjy) {
      r5vjy === void 0x0 && (r5vjy = ![]);var na31u4;if (!r5vjy) {
        var n34xi = p9e_2w['getFileInfo'](wp92e_),
            an1u = n34xi['md5'];na31u4 = p9e_2w['getFileNativePath'](an1u);
      } else na31u4 = wp92e_;if (ma43lu['imgCache'] == null) ma43lu['imgCache'] = {};var rjo7y;function phtez() {
        rjo7y['onload'] = null, rjo7y['onerror'] = null, delete ma43lu['imgCache'][wp92e_];
      };var xj7vy = function () {
        phtez(), ma43lu['onLoaded'](rjo7y);
      },
          l134au = function () {
        phtez(), ma43lu['event']('error', 'Load image failed');
      };ma43lu['_type'] == 'nativeimage' ? (rjo7y = new boq05k['window']['Image'](), rjo7y['crossOrigin'] = '', rjo7y['onload'] = xj7vy, rjo7y['onerror'] = l134au, rjo7y['src'] = na31u4, ma43lu['imgCache'][wp92e_] = rjo7y) : new u3na['create'](na31u4, { 'onload': xj7vy, 'onerror': l134au, 'onCreate': function (ryoqv5) {
          rjo7y = ryoqv5, ma43lu['imgCache'][wp92e_] = ryoqv5;
        } });
    }, t_zeh;
  }(),
      o5jr = function () {
    function gqd0b() {}return x7i1jn(gqd0b, 'laya.wx.mini.MiniInput'), gqd0b['_createInputElement'] = function () {
      e2_hzp['_initInput'](e2_hzp['area'] = boq05k['createElement']('textarea')), e2_hzp['_initInput'](e2_hzp['input'] = boq05k['createElement']('input')), e2_hzp['inputContainer'] = boq05k['createElement']('div'), e2_hzp['inputContainer']['style']['position'] = 'absolute', e2_hzp['inputContainer']['style']['zIndex'] = 0x186a0, boq05k['container']['appendChild'](e2_hzp['inputContainer']), e2_hzp['inputContainer']['setPos'] = function (g0kd68, orv5j) {
        e2_hzp['inputContainer']['style']['left'] = g0kd68 + 'px', e2_hzp['inputContainer']['style']['top'] = orv5j + 'px';
      }, t68cd['stage']['on']('resize', null, gqd0b['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_thpe) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xjyvr7['_soundClass'] = q0boy, xjyvr7['_musicClass'] = q0boy;
    }, gqd0b['_onStageResize'] = function () {
      var w29f$s = t68cd['stage']['_canvasTransform']['identity']();w29f$s['scale'](boq05k['width'] / qybo5['canvas']['width'] / jxnv7['getPixelRatio'](), boq05k['height'] / qybo5['canvas']['height'] / jxnv7['getPixelRatio']());
    }, gqd0b['wxinputFocus'] = function (g068kd) {
      var ko05 = e2_hzp['inputElement']['target'];if (ko05 && !ko05['editable']) return;thzce['window']['wx']['offKeyboardConfirm'](), thzce['window']['wx']['offKeyboardInput'](), thzce['window']['wx']['showKeyboard']({ 'defaultValue': ko05['text'], 'maxLength': ko05['maxChars'], 'multiple': ko05['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (v7ixj) {}, 'fail': function (h6ct8d) {} }), thzce['window']['wx']['onKeyboardConfirm'](function (bq05k) {
        var ctd6g = bq05k ? bq05k['value'] : '';ko05['text'] = ctd6g, ko05['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), thzce['window']['wx']['onKeyboardInput'](function ($2f9sw) {
        var oby05q = $2f9sw ? $2f9sw['value'] : '';if (!ko05['multiline']) {
          if (oby05q['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ko05['text'] = oby05q, ko05['event']('input');
      });
    }, gqd0b['inputEnter'] = function () {
      e2_hzp['inputElement']['target']['focus'] = ![];
    }, gqd0b['wxinputblur'] = function () {
      gqd0b['hideKeyboard']();
    }, gqd0b['hideKeyboard'] = function () {
      thzce['window']['wx']['offKeyboardConfirm'](), thzce['window']['wx']['offKeyboardInput'](), thzce['window']['wx']['hideKeyboard']({ 'success': function (pztech) {
          console['log']('隐藏键盘');
        }, 'fail': function (j7xryv) {
          console['log']('隐藏键盘出错:' + (j7xryv ? j7xryv['errMsg'] : ''));
        } });
    }, gqd0b;
  }(),
      n71xi = function () {
    function j7yor() {}x7i1jn(j7yor, 'laya.wx.mini.MiniLoader');var zw2pe = j7yor['prototype'];return zw2pe['load'] = function (ht8ce, htpe_z, _w2f, oqyr5, tcd8h6) {
      _w2f === void 0x0 && (_w2f = !![]), tcd8h6 === void 0x0 && (tcd8h6 = ![]);var v5qr = this;v5qr['_url'] = ht8ce;if (ht8ce['indexOf']('data:image') === 0x0) v5qr['_type'] = htpe_z = 'image';else v5qr['_type'] = htpe_z || (htpe_z = v5qr['getTypeFromUrl'](ht8ce));v5qr['_cache'] = _w2f, v5qr['_data'] = null;var na3u = 'ascii';if (ht8ce['indexOf']('.fnt') != -0x1) na3u = 'utf8';else htpe_z == 'arraybuffer' && (na3u = '');;var hez_pt = t8hzc6['getFileExtension'](ht8ce);if (j7yor['_fileTypeArr']['indexOf'](hez_pt) != -0x1) thzce['EnvConfig']['load']['call'](this, ht8ce, htpe_z, _w2f, oqyr5, tcd8h6);else {
        if (!p9e_2w['getFileInfo'](ht8ce)) {
          if (ht8ce['indexOf']('layaNativeDir/') != -0x1) {
            if (thzce['isZiYu']) {
              var _w29fp = p9e_2w['ziyuFileData'][ht8ce];v5qr['onLoaded'](_w29fp);return;
            } else {
              cosnole['log']('read read'), p9e_2w['read'](ht8ce, na3u, new qk5b0g(j7yor, j7yor['onReadNativeCallBack'], [na3u, ht8ce, htpe_z, _w2f, oqyr5, tcd8h6, v5qr]));return;
            }
          }if (dt68['rootPath'] == '') var orbqy5 = ht8ce;else orbqy5 = ht8ce['split'](dt68['rootPath'])[0x0];ht8ce['indexOf']('http://') != -0x1 || ht8ce['indexOf']('https://') != -0x1 ? thzce['EnvConfig']['load']['call'](v5qr, ht8ce, htpe_z, _w2f, oqyr5, tcd8h6) : p9e_2w['readFile'](orbqy5, na3u, new qk5b0g(j7yor, j7yor['onReadNativeCallBack'], [na3u, ht8ce, htpe_z, _w2f, oqyr5, tcd8h6, v5qr]), ht8ce);
        } else thzce['EnvConfig']['load']['call'](this, ht8ce, htpe_z, _w2f, oqyr5, tcd8h6);
      }
    }, zw2pe['resMgrLoad'] = function (n7ijvx, t8h6cd, yvorq5, wf9p_, d86hct, pf2w9_, phtze) {
      yvorq5 === void 0x0 && (yvorq5 = 0x0), wf9p_ === void 0x0 && (wf9p_ = ![]), d86hct === void 0x0 && (d86hct = ![]), pf2w9_ === void 0x0 && (pf2w9_ = 0x0), phtze === void 0x0 && (phtze = 0x3), n7ijvx['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', n7ijvx), thzce['EnvConfig']['resMgrLoad'](n7ijvx, (hp2z_, bk05qg, v7jroy) => {
        j7yor['prototype']['resMgrLoadCallBack'](hp2z_, bk05qg, v7jroy, t8h6cd);
      }, yvorq5, wf9p_, d86hct, pf2w9_, phtze);
    }, zw2pe['resMgrLoadCallBack'] = function (lu41a3, t8dcg6, vor7jy, qk5bo0) {
      console['log']('buff:::', lu41a3, vor7jy, p9e_2w['fileNativeDir'] + '///' + p9e_2w['fileListName']), qk5bo0(lu41a3, t8dcg6, vor7jy);
    }, zw2pe['clearRes'] = function (czteh, oyb50q) {
      oyb50q === void 0x0 && (oyb50q = ![]);var k0g6db = this;k0g6db['clearRes'](czteh, oyb50q);var nx1i3 = p9e_2w['getFileInfo'](czteh);if (nx1i3 && (czteh['indexOf']('http://') != -0x1 || czteh['indexOf']('https://') != -0x1)) {
        var h8zc6t = nx1i3['md5'],
            pzeht_ = p9e_2w['getFileNativePath'](h8zc6t);p9e_2w['remove'](pzeht_);
      }
    }, j7yor['onReadNativeCallBack'] = function (_9we2p, u1i4n, sf92$w, f2ws$9, rixj, jn1xi, pz_eht, gb5qk, oqr5b) {
      f2ws$9 === void 0x0 && (f2ws$9 = !![]), jn1xi === void 0x0 && (jn1xi = ![]), gb5qk === void 0x0 && (gb5qk = 0x0);if (!gb5qk) {
        var ethcz8;if (sf92$w == 'json' || sf92$w == 'atlas') ethcz8 = thzce['getJson'](oqr5b['data']);else sf92$w == 'xml' ? ethcz8 = t8hzc6['parseXMLFromString'](oqr5b['data']) : ethcz8 = oqr5b['data'];pz_eht['onLoaded'](ethcz8), !thzce['isZiYu'] && thzce['isPosMsgYu'] && sf92$w != 'arraybuffer' && wx['postMessage']({ 'url': u1i4n, 'data': ethcz8, 'isLoad': !![] });
      } else gb5qk == 0x1 && thzce['EnvConfig']['load']['call'](pz_eht, u1i4n, sf92$w, f2ws$9, rixj, jn1xi);
    }, fwp_2(j7yor, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), j7yor;
  }(),
      p9e_2w = function (yrx7jv) {
    function qg0bkd() {
      qg0bkd['__super']['call'](this);;
    }return x7i1jn(qg0bkd, 'laya.wx.mini.MiniFileMgr', yrx7jv), qg0bkd['isLoadFile'] = function (ectzhp) {
      return qg0bkd['_fileTypeArr']['indexOf'](ectzhp) != -0x1 ? !![] : ![];
    }, qg0bkd['getFileInfo'] = function (yv5jor) {
      var oqb50k = yv5jor['split']('?')[0x0],
          pz_te = qg0bkd['filesListObj'][oqb50k];if (pz_te == null) return null;else return pz_te;return null;
    }, qg0bkd['onFileUpdate'] = function (rv5oyj, $9wsf) {
      var rjiv = rv5oyj['split']('/'),
          hz_tpe = rjiv[rjiv['length'] - 0x1],
          z6hct = qg0bkd['getFileInfo']($9wsf);if (z6hct == null) qg0bkd['onSaveFile']($9wsf, hz_tpe);else {
        if (z6hct['readyUrl'] != $9wsf) qg0bkd['remove'](hz_tpe, $9wsf);
      }
    }, qg0bkd['exits'] = function (inu134, x1n43) {
      var x7i41 = qg0bkd['getFileNativePath'](inu134);qg0bkd['fs']['getFileInfo']({ 'filePath': x7i41, 'success': function (w9p2_) {
          x1n43 != null && x1n43['runWith']([0x0, w9p2_]);
        }, 'fail': function (pw2_) {
          x1n43 != null && x1n43['runWith']([0x1, pw2_]);
        } });
    }, qg0bkd['read'] = function (o0y5qb, d8c6gt, q5r, bqo0y) {
      d8c6gt === void 0x0 && (d8c6gt = 'ascill'), bqo0y === void 0x0 && (bqo0y = '');var jxvy7;bqo0y != '' ? jxvy7 = qg0bkd['getFileNativePath'](o0y5qb) : jxvy7 = o0y5qb, qg0bkd['fs']['readFile']({ 'filePath': jxvy7, 'encoding': d8c6gt, 'success': function (g0qdk) {
          q5r != null && q5r['runWith']([0x0, g0qdk]);
        }, 'fail': function (jy7ov) {
          if (jy7ov && bqo0y != '') qg0bkd['down'](bqo0y, d8c6gt, q5r, bqo0y);else q5r != null && q5r['runWith']([0x1]);
        } });
    }, qg0bkd['readNativeFile'] = function (gb05, kq5bg) {
      qg0bkd['fs']['readFile']({ 'filePath': gb05, 'encoding': '', 'success': function (l41a3u) {
          kq5bg != null && kq5bg['runWith']([0x0]);
        }, 'fail': function (ivxn7) {
          kq5bg != null && kq5bg['runWith']([0x1]);
        } });
    }, qg0bkd['down'] = function (yjor5v, hpezt_, _9w2f$, byq5ro) {
      hpezt_ === void 0x0 && (hpezt_ = 'ascill'), byq5ro === void 0x0 && (byq5ro = '');var t6c8z = qg0bkd['getFileNativePath'](byq5ro),
          qorv = qg0bkd['wxdown']({ 'url': yjor5v, 'filePath': t6c8z, 'success': function (h6d8t) {
          if (h6d8t['statusCode'] === 0xc8) qg0bkd['readFile'](h6d8t['filePath'], hpezt_, _9w2f$, byq5ro);
        }, 'fail': function (th86dc) {
          _9w2f$ != null && _9w2f$['runWith']([0x1, th86dc]);
        } });qorv['onProgressUpdate'](function (qo05) {
        _9w2f$ != null && _9w2f$['runWith']([0x2, qo05['progress']]);
      });
    }, qg0bkd['readFile'] = function (ptezh, tecz8h, kd6b0, rj5yo) {
      tecz8h === void 0x0 && (tecz8h = 'ascill'), rj5yo === void 0x0 && (rj5yo = ''), qg0bkd['fs']['readFile']({ 'filePath': ptezh, 'encoding': tecz8h, 'success': function (hteczp) {
          if (ptezh['indexOf']('http://') != -0x1 || ptezh['indexOf']('https://') != -0x1) qg0bkd['onFileUpdate'](ptezh, rj5yo);kd6b0 != null && kd6b0['runWith']([0x0, hteczp]);
        }, 'fail': function (rx7ji) {
          if (rx7ji) kd6b0 != null && kd6b0['runWith']([0x1, rx7ji]);
        } });
    }, qg0bkd['downImg'] = function (nxi4, phtzec, yrj5vo) {
      yrj5vo === void 0x0 && (yrj5vo = '');var g60db = qg0bkd['wxdown']({ 'url': nxi4, 'success': function (chptze) {
          chptze['statusCode'] === 0xc8 && qg0bkd['copyFile'](chptze['tempFilePath'], yrj5vo, phtzec);
        }, 'fail': function (o0qyb5) {
          phtzec != null && phtzec['runWith']([0x1, o0qyb5]);
        } });
    }, qg0bkd['copyFile'] = function (pw_2e, yjv5o, bd06k) {
      var cz6ht8 = pw_2e['split']('/'),
          g6kcd8 = cz6ht8[cz6ht8['length'] - 0x1],
          ph_zte = yjv5o['split']('?')[0x0],
          pe9w2_ = qg0bkd['getFileInfo'](yjv5o),
          hdc86 = qg0bkd['getFileNativePath'](g6kcd8);qg0bkd['fs']['copyFile']({ 'srcPath': pw_2e, 'destPath': hdc86, 'success': function (k608) {
          if (!pe9w2_) qg0bkd['onSaveFile'](yjv5o, g6kcd8), bd06k != null && bd06k['runWith']([0x0]);else {
            if (pe9w2_['readyUrl'] != yjv5o) qg0bkd['remove'](g6kcd8, yjv5o, bd06k);
          }
        }, 'fail': function (vjin7x) {
          bd06k != null && bd06k['runWith']([0x1, vjin7x]);
        } });
    }, qg0bkd['getFileNativePath'] = function (x7n1j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + x7n1j;
    }, qg0bkd['remove'] = function (s2$w, ptehc, ji7n) {
      ptehc === void 0x0 && (ptehc = '');var $29_wf = qg0bkd['getFileInfo'](ptehc),
          r5qovy = qg0bkd['getFileNativePath']($29_wf['md5']);t68cd['loader']['clearRes']($29_wf['readyUrl']), qg0bkd['fs']['unlink']({ 'filePath': r5qovy, 'success': function (d8k6g0) {
          if (ptehc != '') qg0bkd['onSaveFile'](ptehc, s2$w);ji7n != null && ji7n['runWith']([0x0]);
        }, 'fail': function (y5o0) {} });
    }, qg0bkd['onSaveFile'] = function (nu41, o5kb0q) {
      var yoqb05 = nu41['split']('?')[0x0];qg0bkd['filesListObj'][yoqb05] = { 'md5': o5kb0q, 'readyUrl': nu41 }, qg0bkd['fs']['writeFile']({ 'filePath': qg0bkd['fileNativeDir'] + '/' + qg0bkd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qg0bkd['filesListObj']), 'success': function (zhtp_) {
          console['log']('写入测试测试成功：', zhtp_);
        }, 'fail': function (bq5ry) {
          console['log']('写入测试测试失败：', bq5ry);
        } });
    }, qg0bkd['existDir'] = function (f$9w_, zh86ct) {
      qg0bkd['fs']['mkdir']({ 'dirPath': f$9w_, 'success': function (l4ma) {
          zh86ct != null && zh86ct['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gd6k8c) {
          if (gd6k8c['errMsg']['indexOf']('file already exists') != -0x1) qg0bkd['readSync'](qg0bkd['fileListName'], 'utf8', zh86ct);else zh86ct != null && zh86ct['runWith']([0x1, gd6k8c]);
        } });
    }, qg0bkd['readSync'] = function (g0kqbd, bory5, ht68dc, dtc68h) {
      bory5 === void 0x0 && (bory5 = 'ascill'), dtc68h === void 0x0 && (dtc68h = '');var hct86z = qg0bkd['getFileNativePath'](g0kqbd),
          cpeth;try {
        cpeth = qg0bkd['fs']['readFileSync'](hct86z), ht68dc != null && ht68dc['runWith']([0x0, { 'data': cpeth }]);
      } catch (b60kgd) {
        ht68dc != null && ht68dc['runWith']([0x1]);
      }
    }, qg0bkd['readCache'] = function () {}, qg0bkd['writeCache'] = function (qb0kg5) {
      var ulma4 = readyUrl['split']('?')[0x0];qg0bkd['filesListObj'][ulma4] = { 'md5': md5Name, 'readyUrl': readyUrl }, qg0bkd['fs']['writeFile']({ 'filePath': qg0bkd['fileNativeDir'] + '/' + qg0bkd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qg0bkd['filesListObj']), 'success': function (ep92w_) {}, 'fail': function ($ws2f9) {} });
    }, qg0bkd['setNativeFileDir'] = function (zt6ch8) {
      qg0bkd['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zt6ch8;
    }, qg0bkd['filesListObj'] = {}, qg0bkd['fileNativeDir'] = null, qg0bkd['fileListName'] = 'layaairfiles.txt', qg0bkd['ziyuFileData'] = {}, fwp_2(qg0bkd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qg0bkd;
  }(xjv7ni),
      q0boy = function (m3a4l) {
    function sw$2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], sw$2['__super']['call'](this), this['_sound'] = sw$2['_createSound']();
    }x7i1jn(sw$2, 'laya.wx.mini.MiniSound', m3a4l);var v7jn = sw$2['prototype'];return v7jn['load'] = function (g8dtc6) {
      var n1u4 = this;g8dtc6 = dt68['formatURL'](g8dtc6), this['url'] = g8dtc6;if (sw$2['_audioCache'][g8dtc6]) {
        this['event']('complete');return;
      }function cdk68() {
        if (sw$2['_null'] != undefined) n1u4['_sound']['onCanplay'](sw$2['_null']), n1u4['_sound']['onError'](sw$2['_null']);else try {
          n1u4['_sound']['onCanplay'](null), n1u4['_sound']['onError'](null), sw$2['_null'] = null;
        } catch (pw_) {
          console['warn']('[wxmini] _clearSound:' + pw_), n1u4['_sound']['onCanplay'](fws29$), n1u4['_sound']['onError'](fws29$), sw$2['_null'] = fws29$;
        }
      }function hte8zc() {
        cdk68(), _pez['loaded'] = !![], _pez['event']('complete'), sw$2['_audioCache'][_pez['url']] = _pez;
      }function qbg5(wz_ep2) {
        console['error']('errCode=' + wz_ep2['errCode'] + '  errMsg=' + wz_ep2['errMsg']), cdk68(), _pez['event']('error');
      }function fws29$() {}this['_sound']['onCanplay'](hte8zc), this['_sound']['onError'](qbg5), this['_sound']['src'] = g8dtc6;var _pez = this;
    }, v7jn['play'] = function (qkd0bg, dc6th) {
      qkd0bg === void 0x0 && (qkd0bg = 0x0), dc6th === void 0x0 && (dc6th = 0x0);var peh_2z;if (this['url'] == xjyvr7['_tMusic']) {
        if (!sw$2['_musicAudio']) sw$2['_musicAudio'] = sw$2['_createSound']();peh_2z = sw$2['_musicAudio'];
      } else peh_2z = sw$2['_createSound']();peh_2z['src'] = this['url'];var tphe_ = new w_9e2p(peh_2z);return tphe_['url'] = this['url'], tphe_['loops'] = dc6th, tphe_['startTime'] = qkd0bg, tphe_['play'](), xjyvr7['addChannel'](tphe_), tphe_;
    }, v7jn['dispose'] = function () {
      var wf29_ = sw$2['_audioCache'][this['url']];wf29_ && (wf29_['src'] = '', delete sw$2['_audioCache'][this['url']]);
    }, gc6d8t(0x0, v7jn, 'duration', function () {
      return this['_sound']['duration'];
    }), sw$2['_createSound'] = function () {
      return sw$2['_id']++, thzce['window']['wx']['createInnerAudioContext']();
    }, sw$2['_musicAudio'] = null, sw$2['_id'] = 0x0, sw$2['_audioCache'] = {}, sw$2['_null'] = undefined, sw$2;
  }(xjv7ni),
      w_9e2p = function (ezhp_t) {
    function tp_zeh(oyvrj5) {
      this['_audio'] = null, this['_onEnd'] = null, tp_zeh['__super']['call'](this), this['_audio'] = oyvrj5, this['_onEnd'] = t8hzc6['bind'](this['__onEnd'], this), oyvrj5['onEnded'](this['_onEnd']);
    }x7i1jn(tp_zeh, 'laya.wx.mini.MiniSoundChannel', ezhp_t);var z_ew2p = tp_zeh['prototype'];return z_ew2p['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (t68cd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, z_ew2p['__onNull'] = function () {}, z_ew2p['play'] = function () {
      this['isStopped'] = ![], xjyvr7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, z_ew2p['stop'] = function () {
      this['isStopped'] = !![], xjyvr7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (tp_zeh['_null'] != undefined) this['_audio']['onEnded'](tp_zeh['_null']);else try {
        this['_audio']['onEnded'](null), tp_zeh['_null'] = null;
      } catch (f_9$) {
        console['warn']('[wxmini] stop:' + f_9$), this['_audio']['onEnded'](t8hzc6['bind'](this['__onNull'], this)), tp_zeh['_null'] = t8hzc6['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, z_ew2p['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, z_ew2p['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xjyvr7['addChannel'](this), this['_audio']['play']();
    }, gc6d8t(0x0, z_ew2p, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), gc6d8t(0x0, z_ew2p, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), gc6d8t(0x0, z_ew2p, 'volume', function () {
      return 0x1;
    }, function (c86zht) {}), tp_zeh['_null'] = undefined, tp_zeh;
  }(dgk68c);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var pz2ew in Laya) {
    var kgdc = Laya[pz2ew];kgdc && kgdc['__isclass'] && (exports[pz2ew] = kgdc);
  }
});