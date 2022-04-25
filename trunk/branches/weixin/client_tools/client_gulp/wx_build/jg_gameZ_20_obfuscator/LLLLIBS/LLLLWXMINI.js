var W = wx.$l;
(function (window, document, iv_21) {
  var uad95x = iv_21['un'],
      ohmq40 = iv_21['uns'],
      cw7ky = iv_21['static'],
      sqp5 = iv_21['class'],
      zwvy3k = iv_21['getset'],
      a9xfu = iv_21['__newvec'],
      qpas4 = laya['utils']['Browser'],
      nrwce = laya['events']['Event'],
      adx5s = laya['events']['EventDispatcher'],
      _v2k3 = laya['resource']['HTMLImage'],
      b1_i6 = laya['utils']['Handler'],
      zwy3kv = laya['display']['Input'],
      blfi18 = laya['net']['Loader'],
      cj7nr = laya['maths']['Matrix'],
      ul9db = laya['renders']['Render'],
      shqp4 = laya['utils']['RunDriver'],
      mq04h = laya['media']['Sound'],
      lui8fb = laya['media']['SoundChannel'],
      nwr7ec = laya['media']['SoundManager'],
      shp4o = laya['display']['Stage'],
      $mt0h = laya['net']['URL'],
      xfda = laya['utils']['Utils'],
      _vz = function () {
    function q4hop0() {}return sqp5(q4hop0, 'laya.wx.mini.MiniAdpter'), q4hop0['getJson'] = function (phso) {
      return JSON['parse'](phso);
    }, q4hop0['init'] = function (bdu9fl, yc3kzw) {
      bdu9fl === void 0x0 && (bdu9fl = ![]), yc3kzw === void 0x0 && (yc3kzw = ![]);if (q4hop0['_inited']) return;q4hop0['window'] = window;if (q4hop0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;q4hop0['_inited'] = !![], q4hop0['isZiYu'] = yc3kzw, q4hop0['isPosMsgYu'] = bdu9fl, q4hop0['EnvConfig'] = {}, !q4hop0['isZiYu'] && (poqh4s['setNativeFileDir']('/layaairGame'), poqh4s['existDir'](poqh4s['fileNativeDir'], b1_i6['create'](q4hop0, q4hop0['onMkdirCallBack']))), q4hop0['window']['focus'] = function () {}, iv_21['getUrlPath'] = function () {}, q4hop0['window']['logtime'] = function (qmo4) {}, q4hop0['window']['alertTimeLog'] = function (ophs4) {}, q4hop0['window']['resetShareInfo'] = function () {}, q4hop0['window']['CanvasRenderingContext2D'] = function () {}, q4hop0['window']['CanvasRenderingContext2D']['prototype'] = q4hop0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], q4hop0['window']['document']['body']['appendChild'] = function () {}, q4hop0['EnvConfig']['pixelRatioInt'] = 0x0, shqp4['getPixelRatio'] = q4hop0['pixelRatio'], q4hop0['_preCreateElement'] = qpas4['createElement'], qpas4['createElement'] = q4hop0['createElement'], shqp4['createShaderCondition'] = q4hop0['createShaderCondition'], xfda['parseXMLFromString'] = q4hop0['parseXMLFromString'], zwy3kv['_createInputElement'] = zw3vk['_createInputElement'], q4hop0['EnvConfig']['load'] = blfi18['prototype']['load'], blfi18['prototype']['load'] = cej['prototype']['load'], q4hop0['isZiYu'] && bdu9fl && wx['onMessage'](function (m0ht$o) {
        m0ht$o['isLoad'] && (poqh4s['ziyuFileData'][m0ht$o['url']] = m0ht$o['data']);
      });
    }, q4hop0['onMkdirCallBack'] = function (ey7nwc, s54x) {
      if (!ey7nwc) poqh4s['filesListObj'] = JSON['parse'](s54x['data']);
    }, q4hop0['pixelRatio'] = function () {
      if (!q4hop0['EnvConfig']['pixelRatioInt']) try {
        var yc7e = wx['getSystemInfoSync']();return q4hop0['EnvConfig']['pixelRatioInt'] = yc7e['pixelRatio'], yc7e = yc7e, yc7e['pixelRatio'];
      } catch (n7wy) {}return q4hop0['EnvConfig']['pixelRatioInt'];
    }, q4hop0['createElement'] = function (psqa45) {
      if (psqa45 == 'canvas') {
        var as4q;return q4hop0['idx'] == 0x1 ? q4hop0['isZiYu'] ? (as4q = sharedCanvas, as4q['style'] = {}) : as4q = window['canvas'] : as4q = window['wx']['createCanvas'](), q4hop0['idx']++, as4q;
      } else {
        if (psqa45 == 'textarea' || psqa45 == 'input') return q4hop0['onCreateInput'](psqa45);else {
          if (psqa45 == 'div') {
            var hqmo40 = q4hop0['_preCreateElement'](psqa45);return hqmo40['contains'] = function (_81ib) {
              return null;
            }, hqmo40['removeChild'] = function (qa4s) {}, hqmo40;
          } else return q4hop0['_preCreateElement'](psqa45);
        }
      }
    }, q4hop0['onCreateInput'] = function (lifbu8) {
      var spq45a = q4hop0['_preCreateElement'](lifbu8);return spq45a['focus'] = zw3vk['wxinputFocus'], spq45a['blur'] = zw3vk['wxinputblur'], spq45a['style'] = {}, spq45a['value'] = 0x0, spq45a['parentElement'] = {}, spq45a['placeholder'] = {}, spq45a['type'] = {}, spq45a['setColor'] = function (q4hmo0) {}, spq45a['setType'] = function (wyzv3k) {}, spq45a['setFontFace'] = function ($0tm) {}, spq45a['addEventListener'] = function (b861) {}, spq45a['contains'] = function (_12i8) {
        return null;
      }, spq45a['removeChild'] = function (vy3kw) {}, spq45a;
    }, q4hop0['createShaderCondition'] = function (k3w7yc) {
      var hs5qp4 = this,
          kvz3_2 = function () {
        var p4sxa5 = k3w7yc;return hs5qp4[k3w7yc['replace']('this.', '')];
      };return kvz3_2;
    }, q4hop0['EnvConfig'] = null, q4hop0['window'] = null, q4hop0['_preCreateElement'] = null, q4hop0['_inited'] = ![], q4hop0['wxRequest'] = null, q4hop0['systemInfo'] = null, q4hop0['version'] = '0.0.1', q4hop0['isZiYu'] = ![], q4hop0['isPosMsgYu'] = ![], q4hop0['parseXMLFromString'] = function (v_3k2z) {
      var spoqh4, sax45;v_3k2z = v_3k2z['replace'](/>\s+</g, '><');try {
        spoqh4 = new window['Parser']['DOMParser']()['parseFromString'](v_3k2z, 'text/xml');
      } catch (i8_b16) {
        throw '需要引入xml解析库文件';
      }return spoqh4;
    }, q4hop0['idx'] = 0x1, q4hop0;
  }(),
      ywczk3 = function () {
    function as9p5x() {}sqp5(as9p5x, 'laya.wx.mini.MiniImage');var v32_ = as9p5x['prototype'];return v32_['_loadImage'] = function (og$0t) {
      var d5uxa9 = this,
          zk3v_ = ![];og$0t['indexOf']('layaNativeDir/') == -0x1 && (zk3v_ = !![], og$0t = $mt0h['formatURL'](og$0t));if (!poqh4s['getFileInfo'](og$0t)) {
        if (og$0t['indexOf']('http://') != -0x1 || og$0t['indexOf']('https://') != -0x1) poqh4s['downImg'](og$0t, new b1_i6(as9p5x, as9p5x['onDownImgCallBack'], [og$0t, d5uxa9]), og$0t);else as9p5x['onCreateImage'](og$0t, d5uxa9, !![]);
      } else as9p5x['onCreateImage'](og$0t, d5uxa9, !zk3v_);
    }, as9p5x['onDownImgCallBack'] = function (qh5s4p, newrc7, e7jcr) {
      if (!e7jcr) as9p5x['onCreateImage'](qh5s4p, newrc7);else newrc7['onError'](null);
    }, as9p5x['onCreateImage'] = function (f8ulb, zvky3w, b6l81i) {
      b6l81i === void 0x0 && (b6l81i = ![]);var w3cy;if (!b6l81i) {
        var t$0ogm = poqh4s['getFileInfo'](f8ulb),
            cy3zkw = t$0ogm['md5'];w3cy = poqh4s['getFileNativePath'](cy3zkw);
      } else w3cy = f8ulb;if (zvky3w['imgCache'] == null) zvky3w['imgCache'] = {};var ax59sp;function sap9() {
        ax59sp['onload'] = null, ax59sp['onerror'] = null, delete zvky3w['imgCache'][f8ulb];
      };var f9ulx = function () {
        sap9(), zvky3w['onLoaded'](ax59sp);
      },
          v23z_6 = function () {
        sap9(), zvky3w['event']('error', 'Load image failed');
      };zvky3w['_type'] == 'nativeimage' ? (ax59sp = new qpas4['window']['Image'](), ax59sp['crossOrigin'] = '', ax59sp['onload'] = f9ulx, ax59sp['onerror'] = v23z_6, ax59sp['src'] = w3cy, zvky3w['imgCache'][f8ulb] = ax59sp) : new _v2k3['create'](w3cy, { 'onload': f9ulx, 'onerror': v23z_6, 'onCreate': function (wc3y7k) {
          ax59sp = wc3y7k, zvky3w['imgCache'][f8ulb] = wc3y7k;
        } });
    }, as9p5x;
  }(),
      zw3vk = function () {
    function kv2_z() {}return sqp5(kv2_z, 'laya.wx.mini.MiniInput'), kv2_z['_createInputElement'] = function () {
      zwy3kv['_initInput'](zwy3kv['area'] = qpas4['createElement']('textarea')), zwy3kv['_initInput'](zwy3kv['input'] = qpas4['createElement']('input')), zwy3kv['inputContainer'] = qpas4['createElement']('div'), zwy3kv['inputContainer']['style']['position'] = 'absolute', zwy3kv['inputContainer']['style']['zIndex'] = 0x186a0, qpas4['container']['appendChild'](zwy3kv['inputContainer']), zwy3kv['inputContainer']['setPos'] = function (y32vz, fl9dx) {
        zwy3kv['inputContainer']['style']['left'] = y32vz + 'px', zwy3kv['inputContainer']['style']['top'] = fl9dx + 'px';
      }, iv_21['stage']['on']('resize', null, kv2_z['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (x9as5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), nwr7ec['_soundClass'] = ad, nwr7ec['_musicClass'] = ad;
    }, kv2_z['_onStageResize'] = function () {
      var mo4h0 = iv_21['stage']['_canvasTransform']['identity']();mo4h0['scale'](qpas4['width'] / ul9db['canvas']['width'] / shqp4['getPixelRatio'](), qpas4['height'] / ul9db['canvas']['height'] / shqp4['getPixelRatio']());
    }, kv2_z['wxinputFocus'] = function (p4sq5) {
      var bi86l1 = zwy3kv['inputElement']['target'];if (bi86l1 && !bi86l1['editable']) return;_vz['window']['wx']['offKeyboardConfirm'](), _vz['window']['wx']['offKeyboardInput'](), _vz['window']['wx']['showKeyboard']({ 'defaultValue': bi86l1['text'], 'maxLength': bi86l1['maxChars'], 'multiple': bi86l1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (vwzk3y) {}, 'fail': function (ph5s4q) {} }), _vz['window']['wx']['onKeyboardConfirm'](function (wrc7ne) {
        var pa4q5s = wrc7ne ? wrc7ne['value'] : '';bi86l1['text'] = pa4q5s, bi86l1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _vz['window']['wx']['onKeyboardInput'](function (udx9lf) {
        var ho4m0 = udx9lf ? udx9lf['value'] : '';if (!bi86l1['multiline']) {
          if (ho4m0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }bi86l1['text'] = ho4m0, bi86l1['event']('input');
      });
    }, kv2_z['inputEnter'] = function () {
      zwy3kv['inputElement']['target']['focus'] = ![];
    }, kv2_z['wxinputblur'] = function () {
      kv2_z['hideKeyboard']();
    }, kv2_z['hideKeyboard'] = function () {
      _vz['window']['wx']['offKeyboardConfirm'](), _vz['window']['wx']['offKeyboardInput'](), _vz['window']['wx']['hideKeyboard']({ 'success': function (xs5ap9) {
          console['log']('隐藏键盘');
        }, 'fail': function (uf8lbd) {
          console['log']('隐藏键盘出错:' + (uf8lbd ? uf8lbd['errMsg'] : ''));
        } });
    }, kv2_z;
  }(),
      cej = function () {
    function udbf() {}sqp5(udbf, 'laya.wx.mini.MiniLoader');var vzk_3 = udbf['prototype'];return vzk_3['load'] = function (omt$h0, a9xud5, yz2vk3, jern7, rcje7) {
      yz2vk3 === void 0x0 && (yz2vk3 = !![]), rcje7 === void 0x0 && (rcje7 = ![]);var tg$mo = this;tg$mo['_url'] = omt$h0;if (omt$h0['indexOf']('data:image') === 0x0) tg$mo['_type'] = a9xud5 = 'image';else tg$mo['_type'] = a9xud5 || (a9xud5 = tg$mo['getTypeFromUrl'](omt$h0));tg$mo['_cache'] = yz2vk3, tg$mo['_data'] = null;var ywz3kc = 'ascii';if (omt$h0['indexOf']('.fnt') != -0x1) ywz3kc = 'utf8';else a9xud5 == 'arraybuffer' && (ywz3kc = '');;var z3ykvw = xfda['getFileExtension'](omt$h0);if (udbf['_fileTypeArr']['indexOf'](z3ykvw) != -0x1) _vz['EnvConfig']['load']['call'](this, omt$h0, a9xud5, yz2vk3, jern7, rcje7);else {
        if (!poqh4s['getFileInfo'](omt$h0)) {
          if (omt$h0['indexOf']('layaNativeDir/') != -0x1) {
            if (_vz['isZiYu']) {
              var s5xpa4 = poqh4s['ziyuFileData'][omt$h0];tg$mo['onLoaded'](s5xpa4);return;
            } else {
              cosnole['log']('read read'), poqh4s['read'](omt$h0, ywz3kc, new b1_i6(udbf, udbf['onReadNativeCallBack'], [ywz3kc, omt$h0, a9xud5, yz2vk3, jern7, rcje7, tg$mo]));return;
            }
          }if ($mt0h['rootPath'] == '') var g$0ot = omt$h0;else g$0ot = omt$h0['split']($mt0h['rootPath'])[0x0];omt$h0['indexOf']('http://') != -0x1 || omt$h0['indexOf']('https://') != -0x1 ? _vz['EnvConfig']['load']['call'](tg$mo, omt$h0, a9xud5, yz2vk3, jern7, rcje7) : poqh4s['readFile'](g$0ot, ywz3kc, new b1_i6(udbf, udbf['onReadNativeCallBack'], [ywz3kc, omt$h0, a9xud5, yz2vk3, jern7, rcje7, tg$mo]), omt$h0);
        } else _vz['EnvConfig']['load']['call'](this, omt$h0, a9xud5, yz2vk3, jern7, rcje7);
      }
    }, vzk_3['resMgrLoad'] = function (fli, v_z12, k2zy3v, zk_2, $0mgot, nwkyc, ib8f) {
      k2zy3v === void 0x0 && (k2zy3v = 0x0), zk_2 === void 0x0 && (zk_2 = ![]), $0mgot === void 0x0 && ($0mgot = ![]), nwkyc === void 0x0 && (nwkyc = 0x0), ib8f === void 0x0 && (ib8f = 0x3), fli['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fli), _vz['EnvConfig']['resMgrLoad'](fli, (bifu8, ib8_16, u9bdl) => {
        udbf['prototype']['resMgrLoadCallBack'](bifu8, ib8_16, u9bdl, v_z12);
      }, k2zy3v, zk_2, $0mgot, nwkyc, ib8f);
    }, vzk_3['resMgrLoadCallBack'] = function (iuf8, lfxud, ps4a5x, z32_kv) {
      console['log']('buff:::', iuf8, ps4a5x, poqh4s['fileNativeDir'] + '///' + poqh4s['fileListName']), z32_kv(iuf8, lfxud, ps4a5x);
    }, vzk_3['clearRes'] = function (tg$0mo, y3kc7w) {
      y3kc7w === void 0x0 && (y3kc7w = ![]);var afx9d = this;afx9d['clearRes'](tg$0mo, y3kc7w);var i1_v2 = poqh4s['getFileInfo'](tg$0mo);if (i1_v2 && (tg$0mo['indexOf']('http://') != -0x1 || tg$0mo['indexOf']('https://') != -0x1)) {
        var v2kz3 = i1_v2['md5'],
            l681b = poqh4s['getFileNativePath'](v2kz3);poqh4s['remove'](l681b);
      }
    }, udbf['onReadNativeCallBack'] = function (yw7ck3, xu9l, q4hops, hqps45, luxdf9, k32v, e7cwny, $othm0, ywnkc) {
      hqps45 === void 0x0 && (hqps45 = !![]), k32v === void 0x0 && (k32v = ![]), $othm0 === void 0x0 && ($othm0 = 0x0);if (!$othm0) {
        var xlf;if (q4hops == 'json' || q4hops == 'atlas') xlf = _vz['getJson'](ywnkc['data']);else q4hops == 'xml' ? xlf = xfda['parseXMLFromString'](ywnkc['data']) : xlf = ywnkc['data'];e7cwny['onLoaded'](xlf), !_vz['isZiYu'] && _vz['isPosMsgYu'] && q4hops != 'arraybuffer' && wx['postMessage']({ 'url': xu9l, 'data': xlf, 'isLoad': !![] });
      } else $othm0 == 0x1 && _vz['EnvConfig']['load']['call'](e7cwny, xu9l, q4hops, hqps45, luxdf9, k32v);
    }, cw7ky(udbf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), udbf;
  }(),
      poqh4s = function (p5aq4) {
    function mqho4() {
      mqho4['__super']['call'](this);;
    }return sqp5(mqho4, 'laya.wx.mini.MiniFileMgr', p5aq4), mqho4['isLoadFile'] = function (mht) {
      return mqho4['_fileTypeArr']['indexOf'](mht) != -0x1 ? !![] : ![];
    }, mqho4['getFileInfo'] = function (ncej7) {
      var cnw7k = ncej7['split']('?')[0x0],
          newc7y = mqho4['filesListObj'][cnw7k];if (newc7y == null) return null;else return newc7y;return null;
    }, mqho4['onFileUpdate'] = function (hq4om, lfu9b) {
      var v3_62 = hq4om['split']('/'),
          yzwk = v3_62[v3_62['length'] - 0x1],
          wynck7 = mqho4['getFileInfo'](lfu9b);if (wynck7 == null) mqho4['onSaveFile'](lfu9b, yzwk);else {
        if (wynck7['readyUrl'] != lfu9b) mqho4['remove'](yzwk, lfu9b);
      }
    }, mqho4['exits'] = function (h40oqp, auxf9) {
      var gt0m$o = mqho4['getFileNativePath'](h40oqp);mqho4['fs']['getFileInfo']({ 'filePath': gt0m$o, 'success': function (fi18) {
          auxf9 != null && auxf9['runWith']([0x0, fi18]);
        }, 'fail': function (gtm$o0) {
          auxf9 != null && auxf9['runWith']([0x1, gtm$o0]);
        } });
    }, mqho4['read'] = function (k3zv, xa4ps5, wy3k7, v6_z2) {
      xa4ps5 === void 0x0 && (xa4ps5 = 'ascill'), v6_z2 === void 0x0 && (v6_z2 = '');var f9dxul;v6_z2 != '' ? f9dxul = mqho4['getFileNativePath'](k3zv) : f9dxul = k3zv, mqho4['fs']['readFile']({ 'filePath': f9dxul, 'encoding': xa4ps5, 'success': function (p4qo0h) {
          wy3k7 != null && wy3k7['runWith']([0x0, p4qo0h]);
        }, 'fail': function (f8li1b) {
          if (f8li1b && v6_z2 != '') mqho4['down'](v6_z2, xa4ps5, wy3k7, v6_z2);else wy3k7 != null && wy3k7['runWith']([0x1]);
        } });
    }, mqho4['readNativeFile'] = function (fiubl, w7ye) {
      mqho4['fs']['readFile']({ 'filePath': fiubl, 'encoding': '', 'success': function (rw7c) {
          w7ye != null && w7ye['runWith']([0x0]);
        }, 'fail': function (_v23) {
          w7ye != null && w7ye['runWith']([0x1]);
        } });
    }, mqho4['down'] = function (cywn7, u9dxaf, x5a9s, hot) {
      u9dxaf === void 0x0 && (u9dxaf = 'ascill'), hot === void 0x0 && (hot = '');var da59s = mqho4['getFileNativePath'](hot),
          yzck3w = mqho4['wxdown']({ 'url': cywn7, 'filePath': da59s, 'success': function (ilbf18) {
          if (ilbf18['statusCode'] === 0xc8) mqho4['readFile'](ilbf18['filePath'], u9dxaf, x5a9s, hot);
        }, 'fail': function (vwz) {
          x5a9s != null && x5a9s['runWith']([0x1, vwz]);
        } });yzck3w['onProgressUpdate'](function (mo$q) {
        x5a9s != null && x5a9s['runWith']([0x2, mo$q['progress']]);
      });
    }, mqho4['readFile'] = function (zw3kvy, e7ncwr, vi2_6, d95sa) {
      e7ncwr === void 0x0 && (e7ncwr = 'ascill'), d95sa === void 0x0 && (d95sa = ''), mqho4['fs']['readFile']({ 'filePath': zw3kvy, 'encoding': e7ncwr, 'success': function (pqos4h) {
          if (zw3kvy['indexOf']('http://') != -0x1 || zw3kvy['indexOf']('https://') != -0x1) mqho4['onFileUpdate'](zw3kvy, d95sa);vi2_6 != null && vi2_6['runWith']([0x0, pqos4h]);
        }, 'fail': function (ld9fux) {
          if (ld9fux) vi2_6 != null && vi2_6['runWith']([0x1, ld9fux]);
        } });
    }, mqho4['downImg'] = function (jnc, $oq0mh, dulbf9) {
      dulbf9 === void 0x0 && (dulbf9 = '');var $hmo0 = mqho4['wxdown']({ 'url': jnc, 'success': function (p45sqh) {
          p45sqh['statusCode'] === 0xc8 && mqho4['copyFile'](p45sqh['tempFilePath'], dulbf9, $oq0mh);
        }, 'fail': function (adx95u) {
          $oq0mh != null && $oq0mh['runWith']([0x1, adx95u]);
        } });
    }, mqho4['copyFile'] = function (c7j, k23vzy, ps4hq) {
      var v1i6_2 = c7j['split']('/'),
          fx9du = v1i6_2[v1i6_2['length'] - 0x1],
          kcz3wy = k23vzy['split']('?')[0x0],
          bf8ld = mqho4['getFileInfo'](k23vzy),
          zwkv = mqho4['getFileNativePath'](fx9du);mqho4['fs']['copyFile']({ 'srcPath': c7j, 'destPath': zwkv, 'success': function (zvy3kw) {
          if (!bf8ld) mqho4['onSaveFile'](k23vzy, fx9du), ps4hq != null && ps4hq['runWith']([0x0]);else {
            if (bf8ld['readyUrl'] != k23vzy) mqho4['remove'](fx9du, k23vzy, ps4hq);
          }
        }, 'fail': function (g0tm$) {
          ps4hq != null && ps4hq['runWith']([0x1, g0tm$]);
        } });
    }, mqho4['getFileNativePath'] = function (k2_zv3) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k2_zv3;
    }, mqho4['remove'] = function (b6_i18, nwc7ky, t$oh0m) {
      nwc7ky === void 0x0 && (nwc7ky = '');var cn7we = mqho4['getFileInfo'](nwc7ky),
          u9x5ad = mqho4['getFileNativePath'](cn7we['md5']);iv_21['loader']['clearRes'](cn7we['readyUrl']), mqho4['fs']['unlink']({ 'filePath': u9x5ad, 'success': function (wckn7) {
          if (nwc7ky != '') mqho4['onSaveFile'](nwc7ky, b6_i18);t$oh0m != null && t$oh0m['runWith']([0x0]);
        }, 'fail': function (bi816l) {} });
    }, mqho4['onSaveFile'] = function (mh04o, r7ne) {
      var dbf9u = mh04o['split']('?')[0x0];mqho4['filesListObj'][dbf9u] = { 'md5': r7ne, 'readyUrl': mh04o }, mqho4['fs']['writeFile']({ 'filePath': mqho4['fileNativeDir'] + '/' + mqho4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mqho4['filesListObj']), 'success': function (wzy3kc) {
          console['log']('写入测试测试成功：', wzy3kc);
        }, 'fail': function (_1v2i) {
          console['log']('写入测试测试失败：', _1v2i);
        } });
    }, mqho4['existDir'] = function (fbdul, blufd9) {
      mqho4['fs']['mkdir']({ 'dirPath': fbdul, 'success': function (hq0om4) {
          blufd9 != null && blufd9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (cenr7) {
          if (cenr7['errMsg']['indexOf']('file already exists') != -0x1) mqho4['readSync'](mqho4['fileListName'], 'utf8', blufd9);else blufd9 != null && blufd9['runWith']([0x1, cenr7]);
        } });
    }, mqho4['readSync'] = function (hopsq4, ye7c, a5x9sd, p4qsh5) {
      ye7c === void 0x0 && (ye7c = 'ascill'), p4qsh5 === void 0x0 && (p4qsh5 = '');var $ot0 = mqho4['getFileNativePath'](hopsq4),
          t0$hom;try {
        t0$hom = mqho4['fs']['readFileSync']($ot0), a5x9sd != null && a5x9sd['runWith']([0x0, { 'data': t0$hom }]);
      } catch (hmq0o$) {
        a5x9sd != null && a5x9sd['runWith']([0x1]);
      }
    }, mqho4['readCache'] = function () {}, mqho4['writeCache'] = function ($gm0t) {
      var yvkzw3 = readyUrl['split']('?')[0x0];mqho4['filesListObj'][yvkzw3] = { 'md5': md5Name, 'readyUrl': readyUrl }, mqho4['fs']['writeFile']({ 'filePath': mqho4['fileNativeDir'] + '/' + mqho4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mqho4['filesListObj']), 'success': function (sxa95d) {}, 'fail': function (asp4x) {} });
    }, mqho4['setNativeFileDir'] = function (xdu5) {
      mqho4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xdu5;
    }, mqho4['filesListObj'] = {}, mqho4['fileNativeDir'] = null, mqho4['fileListName'] = 'layaairfiles.txt', mqho4['ziyuFileData'] = {}, cw7ky(mqho4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mqho4;
  }(adx5s),
      ad = function (o$0mgt) {
    function lfbi81() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lfbi81['__super']['call'](this), this['_sound'] = lfbi81['_createSound']();
    }sqp5(lfbi81, 'laya.wx.mini.MiniSound', o$0mgt);var z3kvwy = lfbi81['prototype'];return z3kvwy['load'] = function (kc7yw) {
      var _168 = this;kc7yw = $mt0h['formatURL'](kc7yw), this['url'] = kc7yw;if (lfbi81['_audioCache'][kc7yw]) {
        this['event']('complete');return;
      }function wcer7() {
        if (lfbi81['_null'] != undefined) _168['_sound']['onCanplay'](lfbi81['_null']), _168['_sound']['onError'](lfbi81['_null']);else try {
          _168['_sound']['onCanplay'](null), _168['_sound']['onError'](null), lfbi81['_null'] = null;
        } catch (h$t0m) {
          console['warn']('[wxmini] _clearSound:' + h$t0m), _168['_sound']['onCanplay'](qm04o), _168['_sound']['onError'](qm04o), lfbi81['_null'] = qm04o;
        }
      }function mt$go0() {
        wcer7(), i2_v1['loaded'] = !![], i2_v1['event']('complete'), lfbi81['_audioCache'][i2_v1['url']] = i2_v1;
      }function cyk7nw(cen7) {
        console['error']('errCode=' + cen7['errCode'] + '  errMsg=' + cen7['errMsg']), wcer7(), i2_v1['event']('error');
      }function qm04o() {}this['_sound']['onCanplay'](mt$go0), this['_sound']['onError'](cyk7nw), this['_sound']['src'] = kc7yw;var i2_v1 = this;
    }, z3kvwy['play'] = function (zyv, vyz3kw) {
      zyv === void 0x0 && (zyv = 0x0), vyz3kw === void 0x0 && (vyz3kw = 0x0);var enjcr;if (this['url'] == nwr7ec['_tMusic']) {
        if (!lfbi81['_musicAudio']) lfbi81['_musicAudio'] = lfbi81['_createSound']();enjcr = lfbi81['_musicAudio'];
      } else enjcr = lfbi81['_createSound']();enjcr['src'] = this['url'];var x9uad5 = new er(enjcr);return x9uad5['url'] = this['url'], x9uad5['loops'] = vyz3kw, x9uad5['startTime'] = zyv, x9uad5['play'](), nwr7ec['addChannel'](x9uad5), x9uad5;
    }, z3kvwy['dispose'] = function () {
      var cjen7 = lfbi81['_audioCache'][this['url']];cjen7 && (cjen7['src'] = '', delete lfbi81['_audioCache'][this['url']]);
    }, zwvy3k(0x0, z3kvwy, 'duration', function () {
      return this['_sound']['duration'];
    }), lfbi81['_createSound'] = function () {
      return lfbi81['_id']++, _vz['window']['wx']['createInnerAudioContext']();
    }, lfbi81['_musicAudio'] = null, lfbi81['_id'] = 0x0, lfbi81['_audioCache'] = {}, lfbi81['_null'] = undefined, lfbi81;
  }(adx5s),
      er = function (v_i62) {
    function g$m0t(z6v12) {
      this['_audio'] = null, this['_onEnd'] = null, g$m0t['__super']['call'](this), this['_audio'] = z6v12, this['_onEnd'] = xfda['bind'](this['__onEnd'], this), z6v12['onEnded'](this['_onEnd']);
    }sqp5(g$m0t, 'laya.wx.mini.MiniSoundChannel', v_i62);var i8fulb = g$m0t['prototype'];return i8fulb['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (iv_21['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, i8fulb['__onNull'] = function () {}, i8fulb['play'] = function () {
      this['isStopped'] = ![], nwr7ec['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, i8fulb['stop'] = function () {
      this['isStopped'] = !![], nwr7ec['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (g$m0t['_null'] != undefined) this['_audio']['onEnded'](g$m0t['_null']);else try {
        this['_audio']['onEnded'](null), g$m0t['_null'] = null;
      } catch (blf8) {
        console['warn']('[wxmini] stop:' + blf8), this['_audio']['onEnded'](xfda['bind'](this['__onNull'], this)), g$m0t['_null'] = xfda['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, i8fulb['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, i8fulb['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], nwr7ec['addChannel'](this), this['_audio']['play']();
    }, zwvy3k(0x0, i8fulb, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), zwvy3k(0x0, i8fulb, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), zwvy3k(0x0, i8fulb, 'volume', function () {
      return 0x1;
    }, function (fiubl8) {}), g$m0t['_null'] = undefined, g$m0t;
  }(lui8fb);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var enc7j in Laya) {
    var xldfu = Laya[enc7j];xldfu && xldfu['__isclass'] && (exports[enc7j] = xldfu);
  }
});