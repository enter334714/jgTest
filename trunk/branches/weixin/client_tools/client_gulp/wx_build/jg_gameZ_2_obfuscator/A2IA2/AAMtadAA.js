var d = wx.$A;
(function (window, document, ev$a) {
  var $amen = ev$a['un'],
      jsw = ev$a['uns'],
      pt1ixy = ev$a['static'],
      l2hwj = ev$a['class'],
      sed6m = ev$a['getset'],
      jzh6wl = ev$a['__newvec'],
      wjlhz2 = laya['utils']['Browser'],
      $9mn = laya['events']['Event'],
      mes6nd = laya['events']['EventDispatcher'],
      ma$ve9 = laya['resource']['HTMLImage'],
      lzj6w = laya['utils']['Handler'],
      hjnd = laya['display']['Input'],
      txboyq = laya['net']['Loader'],
      ptyx1i = laya['maths']['Matrix'],
      ae90$v = laya['renders']['Render'],
      s6wjhz = laya['utils']['RunDriver'],
      $v0ae = laya['media']['Sound'],
      xbo_qt = laya['media']['SoundChannel'],
      a9ne$ = laya['media']['SoundManager'],
      pk38 = laya['display']['Stage'],
      qity = laya['net']['URL'],
      gf_or4 = laya['utils']['Utils'],
      tbp = function () {
    function hjw2lz() {}return l2hwj(hjw2lz, 'laya.wx.mini.MiniAdpter'), hjw2lz['getJson'] = function (m$d9ne) {
      return JSON['parse'](m$d9ne);
    }, hjw2lz['init'] = function (bt_og, x1pti) {
      bt_og === void 0x0 && (bt_og = ![]), x1pti === void 0x0 && (x1pti = ![]);if (hjw2lz['_inited']) return;hjw2lz['window'] = window;if (hjw2lz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;hjw2lz['_inited'] = !![], hjw2lz['isZiYu'] = x1pti, hjw2lz['isPosMsgYu'] = bt_og, hjw2lz['EnvConfig'] = {}, !hjw2lz['isZiYu'] && ($me9dn['setNativeFileDir']('/layaairGame'), $me9dn['existDir']($me9dn['fileNativeDir'], lzj6w['create'](hjw2lz, hjw2lz['onMkdirCallBack']))), hjw2lz['window']['focus'] = function () {}, ev$a['getUrlPath'] = function () {}, hjw2lz['window']['logtime'] = function (qyxbto) {}, hjw2lz['window']['alertTimeLog'] = function (go_4f) {}, hjw2lz['window']['resetShareInfo'] = function () {}, hjw2lz['window']['CanvasRenderingContext2D'] = function () {}, hjw2lz['window']['CanvasRenderingContext2D']['prototype'] = hjw2lz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hjw2lz['window']['document']['body']['appendChild'] = function () {}, hjw2lz['EnvConfig']['pixelRatioInt'] = 0x0, s6wjhz['getPixelRatio'] = hjw2lz['pixelRatio'], hjw2lz['_preCreateElement'] = wjlhz2['createElement'], wjlhz2['createElement'] = hjw2lz['createElement'], s6wjhz['createShaderCondition'] = hjw2lz['createShaderCondition'], gf_or4['parseXMLFromString'] = hjw2lz['parseXMLFromString'], hjnd['_createInputElement'] = r57g4f['_createInputElement'], hjw2lz['EnvConfig']['load'] = txboyq['prototype']['load'], txboyq['prototype']['load'] = q4gor['prototype']['load'], hjw2lz['isZiYu'] && bt_og && wx['onMessage'](function (ndhj) {
        ndhj['isLoad'] && ($me9dn['ziyuFileData'][ndhj['url']] = ndhj['data']);
      });
    }, hjw2lz['onMkdirCallBack'] = function (ea0$v9, ypuki) {
      if (!ea0$v9) $me9dn['filesListObj'] = JSON['parse'](ypuki['data']);
    }, hjw2lz['pixelRatio'] = function () {
      if (!hjw2lz['EnvConfig']['pixelRatioInt']) try {
        var eam9$v = wx['getSystemInfoSync']();return hjw2lz['EnvConfig']['pixelRatioInt'] = eam9$v['pixelRatio'], eam9$v = eam9$v, eam9$v['pixelRatio'];
      } catch (ty1xip) {}return hjw2lz['EnvConfig']['pixelRatioInt'];
    }, hjw2lz['createElement'] = function (xiky) {
      if (xiky == 'canvas') {
        var kip1yu;return hjw2lz['idx'] == 0x1 ? hjw2lz['isZiYu'] ? (kip1yu = sharedCanvas, kip1yu['style'] = {}) : kip1yu = window['canvas'] : kip1yu = window['wx']['createCanvas'](), hjw2lz['idx']++, kip1yu;
      } else {
        if (xiky == 'textarea' || xiky == 'input') return hjw2lz['onCreateInput'](xiky);else {
          if (xiky == 'div') {
            var n9ma$e = hjw2lz['_preCreateElement'](xiky);return n9ma$e['contains'] = function (frg547) {
              return null;
            }, n9ma$e['removeChild'] = function (oytbx) {}, n9ma$e;
          } else return hjw2lz['_preCreateElement'](xiky);
        }
      }
    }, hjw2lz['onCreateInput'] = function (v90$8) {
      var va$e9m = hjw2lz['_preCreateElement'](v90$8);return va$e9m['focus'] = r57g4f['wxinputFocus'], va$e9m['blur'] = r57g4f['wxinputblur'], va$e9m['style'] = {}, va$e9m['value'] = 0x0, va$e9m['parentElement'] = {}, va$e9m['placeholder'] = {}, va$e9m['type'] = {}, va$e9m['setColor'] = function (tyxi1) {}, va$e9m['setType'] = function (gr7_4f) {}, va$e9m['setFontFace'] = function (qt_og) {}, va$e9m['addEventListener'] = function (sd6emn) {}, va$e9m['contains'] = function (emdn$9) {
        return null;
      }, va$e9m['removeChild'] = function (p1k3ui) {}, va$e9m;
    }, hjw2lz['createShaderCondition'] = function (dm6nsj) {
      var tx1ypi = this,
          e0av9 = function () {
        var toq_bg = dm6nsj;return tx1ypi[dm6nsj['replace']('this.', '')];
      };return e0av9;
    }, hjw2lz['EnvConfig'] = null, hjw2lz['window'] = null, hjw2lz['_preCreateElement'] = null, hjw2lz['_inited'] = ![], hjw2lz['wxRequest'] = null, hjw2lz['systemInfo'] = null, hjw2lz['version'] = '0.0.1', hjw2lz['isZiYu'] = ![], hjw2lz['isPosMsgYu'] = ![], hjw2lz['parseXMLFromString'] = function (pk31ui) {
      var gro_, sdme$;pk31ui = pk31ui['replace'](/>\s+</g, '><');try {
        gro_ = new window['Parser']['DOMParser']()['parseFromString'](pk31ui, 'text/xml');
      } catch (o_tq) {
        throw '需要引入xml解析库文件';
      }return gro_;
    }, hjw2lz['idx'] = 0x1, hjw2lz;
  }(),
      k103u8 = function () {
    function bqg4() {}l2hwj(bqg4, 'laya.wx.mini.MiniImage');var nd6mjs = bqg4['prototype'];return nd6mjs['_loadImage'] = function (nsdm6e) {
      var k3u1 = this,
          mse$d = ![];nsdm6e['indexOf']('layaNativeDir/') == -0x1 && (mse$d = !![], nsdm6e = qity['formatURL'](nsdm6e));if (!$me9dn['getFileInfo'](nsdm6e)) {
        if (nsdm6e['indexOf']('http://') != -0x1 || nsdm6e['indexOf']('https://') != -0x1) $me9dn['downImg'](nsdm6e, new lzj6w(bqg4, bqg4['onDownImgCallBack'], [nsdm6e, k3u1]), nsdm6e);else bqg4['onCreateImage'](nsdm6e, k3u1, !![]);
      } else bqg4['onCreateImage'](nsdm6e, k3u1, !mse$d);
    }, bqg4['onDownImgCallBack'] = function (u180k3, oqyxt, dme$9n) {
      if (!dme$9n) bqg4['onCreateImage'](u180k3, oqyxt);else oqyxt['onError'](null);
    }, bqg4['onCreateImage'] = function (piy1kx, fr4_g, v0u83k) {
      v0u83k === void 0x0 && (v0u83k = ![]);var kiy;if (!v0u83k) {
        var swz6j = $me9dn['getFileInfo'](piy1kx),
            uk18p3 = swz6j['md5'];kiy = $me9dn['getFileNativePath'](uk18p3);
      } else kiy = piy1kx;if (fr4_g['imgCache'] == null) fr4_g['imgCache'] = {};var a90$8;function jds() {
        a90$8['onload'] = null, a90$8['onerror'] = null, delete fr4_g['imgCache'][piy1kx];
      };var xbiytp = function () {
        jds(), fr4_g['onLoaded'](a90$8);
      },
          _ob4gq = function () {
        jds(), fr4_g['event']('error', 'Load image failed');
      };fr4_g['_type'] == 'nativeimage' ? (a90$8 = new wjlhz2['window']['Image'](), a90$8['crossOrigin'] = '', a90$8['onload'] = xbiytp, a90$8['onerror'] = _ob4gq, a90$8['src'] = kiy, fr4_g['imgCache'][piy1kx] = a90$8) : new ma$ve9['create'](kiy, { 'onload': xbiytp, 'onerror': _ob4gq, 'onCreate': function (zjwsh) {
          a90$8 = zjwsh, fr4_g['imgCache'][piy1kx] = zjwsh;
        } });
    }, bqg4;
  }(),
      r57g4f = function () {
    function dmns6() {}return l2hwj(dmns6, 'laya.wx.mini.MiniInput'), dmns6['_createInputElement'] = function () {
      hjnd['_initInput'](hjnd['area'] = wjlhz2['createElement']('textarea')), hjnd['_initInput'](hjnd['input'] = wjlhz2['createElement']('input')), hjnd['inputContainer'] = wjlhz2['createElement']('div'), hjnd['inputContainer']['style']['position'] = 'absolute', hjnd['inputContainer']['style']['zIndex'] = 0x186a0, wjlhz2['container']['appendChild'](hjnd['inputContainer']), hjnd['inputContainer']['setPos'] = function (a90, otx_qb) {
        hjnd['inputContainer']['style']['left'] = a90 + 'px', hjnd['inputContainer']['style']['top'] = otx_qb + 'px';
      }, ev$a['stage']['on']('resize', null, dmns6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (btyoxq) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), a9ne$['_soundClass'] = p3iuk1, a9ne$['_musicClass'] = p3iuk1;
    }, dmns6['_onStageResize'] = function () {
      var $9veam = ev$a['stage']['_canvasTransform']['identity']();$9veam['scale'](wjlhz2['width'] / ae90$v['canvas']['width'] / s6wjhz['getPixelRatio'](), wjlhz2['height'] / ae90$v['canvas']['height'] / s6wjhz['getPixelRatio']());
    }, dmns6['wxinputFocus'] = function (ensdm) {
      var ed9$mn = hjnd['inputElement']['target'];if (ed9$mn && !ed9$mn['editable']) return;tbp['window']['wx']['offKeyboardConfirm'](), tbp['window']['wx']['offKeyboardInput'](), tbp['window']['wx']['showKeyboard']({ 'defaultValue': ed9$mn['text'], 'maxLength': ed9$mn['maxChars'], 'multiple': ed9$mn['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (p38u1) {}, 'fail': function (og_q4) {} }), tbp['window']['wx']['onKeyboardConfirm'](function (sjhwz) {
        var p1txi = sjhwz ? sjhwz['value'] : '';ed9$mn['text'] = p1txi, ed9$mn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tbp['window']['wx']['onKeyboardInput'](function (vku80) {
        var nmde = vku80 ? vku80['value'] : '';if (!ed9$mn['multiline']) {
          if (nmde['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ed9$mn['text'] = nmde, ed9$mn['event']('input');
      });
    }, dmns6['inputEnter'] = function () {
      hjnd['inputElement']['target']['focus'] = ![];
    }, dmns6['wxinputblur'] = function () {
      dmns6['hideKeyboard']();
    }, dmns6['hideKeyboard'] = function () {
      tbp['window']['wx']['offKeyboardConfirm'](), tbp['window']['wx']['offKeyboardInput'](), tbp['window']['wx']['hideKeyboard']({ 'success': function (h6dzj) {
          console['log']('隐藏键盘');
        }, 'fail': function (av$09e) {
          console['log']('隐藏键盘出错:' + (av$09e ? av$09e['errMsg'] : ''));
        } });
    }, dmns6;
  }(),
      q4gor = function () {
    function u031k() {}l2hwj(u031k, 'laya.wx.mini.MiniLoader');var v0a$e9 = u031k['prototype'];return v0a$e9['load'] = function (r7g4f_, uik, ox_tq, $eamv9, up1ik3) {
      ox_tq === void 0x0 && (ox_tq = !![]), up1ik3 === void 0x0 && (up1ik3 = ![]);var b4o_qg = this;b4o_qg['_url'] = r7g4f_;if (r7g4f_['indexOf']('data:image') === 0x0) b4o_qg['_type'] = uik = 'image';else b4o_qg['_type'] = uik || (uik = b4o_qg['getTypeFromUrl'](r7g4f_));b4o_qg['_cache'] = ox_tq, b4o_qg['_data'] = null;var w6jhz = 'ascii';if (r7g4f_['indexOf']('.fnt') != -0x1) w6jhz = 'utf8';else uik == 'arraybuffer' && (w6jhz = '');;var s6mdn = gf_or4['getFileExtension'](r7g4f_);if (u031k['_fileTypeArr']['indexOf'](s6mdn) != -0x1) tbp['EnvConfig']['load']['call'](this, r7g4f_, uik, ox_tq, $eamv9, up1ik3);else {
        if (!$me9dn['getFileInfo'](r7g4f_)) {
          if (r7g4f_['indexOf']('layaNativeDir/') != -0x1) {
            if (tbp['isZiYu']) {
              var ytibx = $me9dn['ziyuFileData'][r7g4f_];b4o_qg['onLoaded'](ytibx);return;
            } else {
              cosnole['log']('read read'), $me9dn['read'](r7g4f_, w6jhz, new lzj6w(u031k, u031k['onReadNativeCallBack'], [w6jhz, r7g4f_, uik, ox_tq, $eamv9, up1ik3, b4o_qg]));return;
            }
          }if (qity['rootPath'] == '') var ljwhz2 = r7g4f_;else ljwhz2 = r7g4f_['split'](qity['rootPath'])[0x0];r7g4f_['indexOf']('http://') != -0x1 || r7g4f_['indexOf']('https://') != -0x1 ? tbp['EnvConfig']['load']['call'](b4o_qg, r7g4f_, uik, ox_tq, $eamv9, up1ik3) : $me9dn['readFile'](ljwhz2, w6jhz, new lzj6w(u031k, u031k['onReadNativeCallBack'], [w6jhz, r7g4f_, uik, ox_tq, $eamv9, up1ik3, b4o_qg]), r7g4f_);
        } else tbp['EnvConfig']['load']['call'](this, r7g4f_, uik, ox_tq, $eamv9, up1ik3);
      }
    }, v0a$e9['resMgrLoad'] = function (u813kp, dnhj6, a0ev$9, kpuiy, l6whj, md6sn, xbipy) {
      a0ev$9 === void 0x0 && (a0ev$9 = 0x0), kpuiy === void 0x0 && (kpuiy = ![]), l6whj === void 0x0 && (l6whj = ![]), md6sn === void 0x0 && (md6sn = 0x0), xbipy === void 0x0 && (xbipy = 0x3), u813kp['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', u813kp), tbp['EnvConfig']['resMgrLoad'](u813kp, (zjl6wh, av9em, nmsde) => {
        u031k['prototype']['resMgrLoadCallBack'](zjl6wh, av9em, nmsde, dnhj6);
      }, a0ev$9, kpuiy, l6whj, md6sn, xbipy);
    }, v0a$e9['resMgrLoadCallBack'] = function (g_fr47, iuk13p, $ve9, qo_4bg) {
      console['log']('buff:::', g_fr47, $ve9, $me9dn['fileNativeDir'] + '///' + $me9dn['fileListName']), qo_4bg(g_fr47, iuk13p, $ve9);
    }, v0a$e9['clearRes'] = function (b4gqo_, g74_r) {
      g74_r === void 0x0 && (g74_r = ![]);var n6mjsd = this;n6mjsd['clearRes'](b4gqo_, g74_r);var _4roq = $me9dn['getFileInfo'](b4gqo_);if (_4roq && (b4gqo_['indexOf']('http://') != -0x1 || b4gqo_['indexOf']('https://') != -0x1)) {
        var btx = _4roq['md5'],
            av3098 = $me9dn['getFileNativePath'](btx);$me9dn['remove'](av3098);
      }
    }, u031k['onReadNativeCallBack'] = function (p138ku, vua0, dhs6nj, mnes, n$s, bgqo4_, jwzs6h, mane, kiy1pu) {
      mnes === void 0x0 && (mnes = !![]), bgqo4_ === void 0x0 && (bgqo4_ = ![]), mane === void 0x0 && (mane = 0x0);if (!mane) {
        var yip1t;if (dhs6nj == 'json' || dhs6nj == 'atlas') yip1t = tbp['getJson'](kiy1pu['data']);else dhs6nj == 'xml' ? yip1t = gf_or4['parseXMLFromString'](kiy1pu['data']) : yip1t = kiy1pu['data'];jwzs6h['onLoaded'](yip1t), !tbp['isZiYu'] && tbp['isPosMsgYu'] && dhs6nj != 'arraybuffer' && wx['postMessage']({ 'url': vua0, 'data': yip1t, 'isLoad': !![] });
      } else mane == 0x1 && tbp['EnvConfig']['load']['call'](jwzs6h, vua0, dhs6nj, mnes, n$s, bgqo4_);
    }, pt1ixy(u031k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), u031k;
  }(),
      $me9dn = function (shnj) {
    function ykiup1() {
      ykiup1['__super']['call'](this);;
    }return l2hwj(ykiup1, 'laya.wx.mini.MiniFileMgr', shnj), ykiup1['isLoadFile'] = function (iu13pk) {
      return ykiup1['_fileTypeArr']['indexOf'](iu13pk) != -0x1 ? !![] : ![];
    }, ykiup1['getFileInfo'] = function (u8kp31) {
      var rf754 = u8kp31['split']('?')[0x0],
          me6snd = ykiup1['filesListObj'][rf754];if (me6snd == null) return null;else return me6snd;return null;
    }, ykiup1['onFileUpdate'] = function (r4_qog, jlwzh2) {
      var i3pk1 = r4_qog['split']('/'),
          pi1xt = i3pk1[i3pk1['length'] - 0x1],
          tyxbpi = ykiup1['getFileInfo'](jlwzh2);if (tyxbpi == null) ykiup1['onSaveFile'](jlwzh2, pi1xt);else {
        if (tyxbpi['readyUrl'] != jlwzh2) ykiup1['remove'](pi1xt, jlwzh2);
      }
    }, ykiup1['exits'] = function (q_o4gb, $0ea9) {
      var qoybtx = ykiup1['getFileNativePath'](q_o4gb);ykiup1['fs']['getFileInfo']({ 'filePath': qoybtx, 'success': function (jhds6) {
          $0ea9 != null && $0ea9['runWith']([0x0, jhds6]);
        }, 'fail': function (pyk1ui) {
          $0ea9 != null && $0ea9['runWith']([0x1, pyk1ui]);
        } });
    }, ykiup1['read'] = function (qoxtb_, wz6hjl, pu3ik1, ityqx) {
      wz6hjl === void 0x0 && (wz6hjl = 'ascill'), ityqx === void 0x0 && (ityqx = '');var a90ve$;ityqx != '' ? a90ve$ = ykiup1['getFileNativePath'](qoxtb_) : a90ve$ = qoxtb_, ykiup1['fs']['readFile']({ 'filePath': a90ve$, 'encoding': wz6hjl, 'success': function (ityq) {
          pu3ik1 != null && pu3ik1['runWith']([0x0, ityq]);
        }, 'fail': function (o_xqbt) {
          if (o_xqbt && ityqx != '') ykiup1['down'](ityqx, wz6hjl, pu3ik1, ityqx);else pu3ik1 != null && pu3ik1['runWith']([0x1]);
        } });
    }, ykiup1['readNativeFile'] = function (vku30, av980$) {
      ykiup1['fs']['readFile']({ 'filePath': vku30, 'encoding': '', 'success': function (ik1xpy) {
          av980$ != null && av980$['runWith']([0x0]);
        }, 'fail': function (jhsz6) {
          av980$ != null && av980$['runWith']([0x1]);
        } });
    }, ykiup1['down'] = function (b_xqt, amve9$, ku318, hwj6s) {
      amve9$ === void 0x0 && (amve9$ = 'ascill'), hwj6s === void 0x0 && (hwj6s = '');var i1ytpx = ykiup1['getFileNativePath'](hwj6s),
          t_qgbo = ykiup1['wxdown']({ 'url': b_xqt, 'filePath': i1ytpx, 'success': function (u38pk) {
          if (u38pk['statusCode'] === 0xc8) ykiup1['readFile'](u38pk['filePath'], amve9$, ku318, hwj6s);
        }, 'fail': function (bqg_o) {
          ku318 != null && ku318['runWith']([0x1, bqg_o]);
        } });t_qgbo['onProgressUpdate'](function (n9dm$) {
        ku318 != null && ku318['runWith']([0x2, n9dm$['progress']]);
      });
    }, ykiup1['readFile'] = function (j6hzlw, mde9, _roq4, gr4o_q) {
      mde9 === void 0x0 && (mde9 = 'ascill'), gr4o_q === void 0x0 && (gr4o_q = ''), ykiup1['fs']['readFile']({ 'filePath': j6hzlw, 'encoding': mde9, 'success': function (fr4g) {
          if (j6hzlw['indexOf']('http://') != -0x1 || j6hzlw['indexOf']('https://') != -0x1) ykiup1['onFileUpdate'](j6hzlw, gr4o_q);_roq4 != null && _roq4['runWith']([0x0, fr4g]);
        }, 'fail': function (or_) {
          if (or_) _roq4 != null && _roq4['runWith']([0x1, or_]);
        } });
    }, ykiup1['downImg'] = function (qot_g, gq_or, l6zwjh) {
      l6zwjh === void 0x0 && (l6zwjh = '');var tq_xo = ykiup1['wxdown']({ 'url': qot_g, 'success': function (wl2zjh) {
          wl2zjh['statusCode'] === 0xc8 && ykiup1['copyFile'](wl2zjh['tempFilePath'], l6zwjh, gq_or);
        }, 'fail': function (tbqix) {
          gq_or != null && gq_or['runWith']([0x1, tbqix]);
        } });
    }, ykiup1['copyFile'] = function (b_qx, jz6hlw, q4o_gr) {
      var u83k0v = b_qx['split']('/'),
          hszj6w = u83k0v[u83k0v['length'] - 0x1],
          byxpi = jz6hlw['split']('?')[0x0],
          bq_tg = ykiup1['getFileInfo'](jz6hlw),
          txypb = ykiup1['getFileNativePath'](hszj6w);ykiup1['fs']['copyFile']({ 'srcPath': b_qx, 'destPath': txypb, 'success': function (nmsde$) {
          if (!bq_tg) ykiup1['onSaveFile'](jz6hlw, hszj6w), q4o_gr != null && q4o_gr['runWith']([0x0]);else {
            if (bq_tg['readyUrl'] != jz6hlw) ykiup1['remove'](hszj6w, jz6hlw, q4o_gr);
          }
        }, 'fail': function (boxtqy) {
          q4o_gr != null && q4o_gr['runWith']([0x1, boxtqy]);
        } });
    }, ykiup1['getFileNativePath'] = function (ofr4_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ofr4_;
    }, ykiup1['remove'] = function (sd6zh, piy1x, yikpu) {
      piy1x === void 0x0 && (piy1x = '');var mdsj = ykiup1['getFileInfo'](piy1x),
          iyxpk = ykiup1['getFileNativePath'](mdsj['md5']);ev$a['loader']['clearRes'](mdsj['readyUrl']), ykiup1['fs']['unlink']({ 'filePath': iyxpk, 'success': function (m6sdjn) {
          if (piy1x != '') ykiup1['onSaveFile'](piy1x, sd6zh);yikpu != null && yikpu['runWith']([0x0]);
        }, 'fail': function (xybipt) {} });
    }, ykiup1['onSaveFile'] = function (sj6d, qbo4_) {
      var zwh6 = sj6d['split']('?')[0x0];ykiup1['filesListObj'][zwh6] = { 'md5': qbo4_, 'readyUrl': sj6d }, ykiup1['fs']['writeFile']({ 'filePath': ykiup1['fileNativeDir'] + '/' + ykiup1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ykiup1['filesListObj']), 'success': function (dsnh6) {
          console['log']('写入测试测试成功：', dsnh6);
        }, 'fail': function ($9mean) {
          console['log']('写入测试测试失败：', $9mean);
        } });
    }, ykiup1['existDir'] = function (p1ykxi, qytbox) {
      ykiup1['fs']['mkdir']({ 'dirPath': p1ykxi, 'success': function (r_) {
          qytbox != null && qytbox['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (oqyx) {
          if (oqyx['errMsg']['indexOf']('file already exists') != -0x1) ykiup1['readSync'](ykiup1['fileListName'], 'utf8', qytbox);else qytbox != null && qytbox['runWith']([0x1, oqyx]);
        } });
    }, ykiup1['readSync'] = function (qg_bo4, ipkyu1, r57gf, yupki) {
      ipkyu1 === void 0x0 && (ipkyu1 = 'ascill'), yupki === void 0x0 && (yupki = '');var q_otx = ykiup1['getFileNativePath'](qg_bo4),
          dh6nj;try {
        dh6nj = ykiup1['fs']['readFileSync'](q_otx), r57gf != null && r57gf['runWith']([0x0, { 'data': dh6nj }]);
      } catch (ems) {
        r57gf != null && r57gf['runWith']([0x1]);
      }
    }, ykiup1['readCache'] = function () {}, ykiup1['writeCache'] = function (a098v$) {
      var pkui3 = readyUrl['split']('?')[0x0];ykiup1['filesListObj'][pkui3] = { 'md5': md5Name, 'readyUrl': readyUrl }, ykiup1['fs']['writeFile']({ 'filePath': ykiup1['fileNativeDir'] + '/' + ykiup1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ykiup1['filesListObj']), 'success': function (a$09e) {}, 'fail': function (mne9a$) {} });
    }, ykiup1['setNativeFileDir'] = function (h6njsd) {
      ykiup1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + h6njsd;
    }, ykiup1['filesListObj'] = {}, ykiup1['fileNativeDir'] = null, ykiup1['fileListName'] = 'layaairfiles.txt', ykiup1['ziyuFileData'] = {}, pt1ixy(ykiup1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ykiup1;
  }(mes6nd),
      p3iuk1 = function (puy) {
    function lj6hw() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lj6hw['__super']['call'](this), this['_sound'] = lj6hw['_createSound']();
    }l2hwj(lj6hw, 'laya.wx.mini.MiniSound', puy);var eav0$ = lj6hw['prototype'];return eav0$['load'] = function (h6lzwj) {
      var bot_g = this;h6lzwj = qity['formatURL'](h6lzwj), this['url'] = h6lzwj;if (lj6hw['_audioCache'][h6lzwj]) {
        this['event']('complete');return;
      }function goqt_b() {
        if (lj6hw['_null'] != undefined) bot_g['_sound']['onCanplay'](lj6hw['_null']), bot_g['_sound']['onError'](lj6hw['_null']);else try {
          bot_g['_sound']['onCanplay'](null), bot_g['_sound']['onError'](null), lj6hw['_null'] = null;
        } catch (a$mv9e) {
          console['warn']('[wxmini] _clearSound:' + a$mv9e), bot_g['_sound']['onCanplay'](ogqr4_), bot_g['_sound']['onError'](ogqr4_), lj6hw['_null'] = ogqr4_;
        }
      }function hns() {
        goqt_b(), $denm['loaded'] = !![], $denm['event']('complete'), lj6hw['_audioCache'][$denm['url']] = $denm;
      }function nme6(p1kyiu) {
        console['error']('errCode=' + p1kyiu['errCode'] + '  errMsg=' + p1kyiu['errMsg']), goqt_b(), $denm['event']('error');
      }function ogqr4_() {}this['_sound']['onCanplay'](hns), this['_sound']['onError'](nme6), this['_sound']['src'] = h6lzwj;var $denm = this;
    }, eav0$['play'] = function (bogqt, j6mnsd) {
      bogqt === void 0x0 && (bogqt = 0x0), j6mnsd === void 0x0 && (j6mnsd = 0x0);var xyti;if (this['url'] == a9ne$['_tMusic']) {
        if (!lj6hw['_musicAudio']) lj6hw['_musicAudio'] = lj6hw['_createSound']();xyti = lj6hw['_musicAudio'];
      } else xyti = lj6hw['_createSound']();xyti['src'] = this['url'];var txp1i = new qtbiy(xyti);return txp1i['url'] = this['url'], txp1i['loops'] = j6mnsd, txp1i['startTime'] = bogqt, txp1i['play'](), a9ne$['addChannel'](txp1i), txp1i;
    }, eav0$['dispose'] = function () {
      var ns6dmj = lj6hw['_audioCache'][this['url']];ns6dmj && (ns6dmj['src'] = '', delete lj6hw['_audioCache'][this['url']]);
    }, sed6m(0x0, eav0$, 'duration', function () {
      return this['_sound']['duration'];
    }), lj6hw['_createSound'] = function () {
      return lj6hw['_id']++, tbp['window']['wx']['createInnerAudioContext']();
    }, lj6hw['_musicAudio'] = null, lj6hw['_id'] = 0x0, lj6hw['_audioCache'] = {}, lj6hw['_null'] = undefined, lj6hw;
  }(mes6nd),
      qtbiy = function (yi1ku) {
    function n6sed(iyqtbx) {
      this['_audio'] = null, this['_onEnd'] = null, n6sed['__super']['call'](this), this['_audio'] = iyqtbx, this['_onEnd'] = gf_or4['bind'](this['__onEnd'], this), iyqtbx['onEnded'](this['_onEnd']);
    }l2hwj(n6sed, 'laya.wx.mini.MiniSoundChannel', yi1ku);var m9av = n6sed['prototype'];return m9av['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ev$a['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, m9av['__onNull'] = function () {}, m9av['play'] = function () {
      this['isStopped'] = ![], a9ne$['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, m9av['stop'] = function () {
      this['isStopped'] = !![], a9ne$['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n6sed['_null'] != undefined) this['_audio']['onEnded'](n6sed['_null']);else try {
        this['_audio']['onEnded'](null), n6sed['_null'] = null;
      } catch (pbtxiy) {
        console['warn']('[wxmini] stop:' + pbtxiy), this['_audio']['onEnded'](gf_or4['bind'](this['__onNull'], this)), n6sed['_null'] = gf_or4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, m9av['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, m9av['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], a9ne$['addChannel'](this), this['_audio']['play']();
    }, sed6m(0x0, m9av, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), sed6m(0x0, m9av, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), sed6m(0x0, m9av, 'volume', function () {
      return 0x1;
    }, function (zjshw) {}), n6sed['_null'] = undefined, n6sed;
  }(xbo_qt);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ndjms in Laya) {
    var qtby = Laya[ndjms];qtby && qtby['__isclass'] && (exports[ndjms] = qtby);
  }
});