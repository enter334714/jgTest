var I = wx.$R;
(function (window, document, wmoky8) {
  var slz3t2 = wmoky8['un'],
      mq7ger = wmoky8['uns'],
      wmkrg7 = wmoky8['static'],
      u6ha_ = wmoky8['class'],
      $ua_b1 = wmoky8['getset'],
      xoz2ij = wmoky8['__newvec'],
      z2oixj = laya['utils']['Browser'],
      wm87kr = laya['events']['Event'],
      fdcpn5 = laya['events']['EventDispatcher'],
      pndcqf = laya['resource']['HTMLImage'],
      kw8rm = laya['utils']['Handler'],
      cfn5d6 = laya['display']['Input'],
      oky8 = laya['net']['Loader'],
      pg7q = laya['maths']['Matrix'],
      $ba19 = laya['renders']['Render'],
      a_bhu = laya['utils']['RunDriver'],
      qegd = laya['media']['Sound'],
      z2xsjt = laya['media']['SoundChannel'],
      qermg = laya['media']['SoundManager'],
      xjoi8 = laya['display']['Stage'],
      _b1u = laya['net']['URL'],
      _6hau = laya['utils']['Utils'],
      koiw8 = function () {
    function t2jxzs() {}return u6ha_(t2jxzs, 'laya.wx.mini.MiniAdpter'), t2jxzs['getJson'] = function (q7merg) {
      return JSON['parse'](q7merg);
    }, t2jxzs['init'] = function (x8joy, ikj) {
      x8joy === void 0x0 && (x8joy = ![]), ikj === void 0x0 && (ikj = ![]);if (t2jxzs['_inited']) return;t2jxzs['window'] = window;if (t2jxzs['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;t2jxzs['_inited'] = !![], t2jxzs['isZiYu'] = ikj, t2jxzs['isPosMsgYu'] = x8joy, t2jxzs['EnvConfig'] = {}, !t2jxzs['isZiYu'] && (rykm8w['setNativeFileDir']('/layaairGame'), rykm8w['existDir'](rykm8w['fileNativeDir'], kw8rm['create'](t2jxzs, t2jxzs['onMkdirCallBack']))), t2jxzs['window']['focus'] = function () {}, wmoky8['getUrlPath'] = function () {}, t2jxzs['window']['logtime'] = function (qgedp) {}, t2jxzs['window']['alertTimeLog'] = function ($_1au) {}, t2jxzs['window']['resetShareInfo'] = function () {}, t2jxzs['window']['CanvasRenderingContext2D'] = function () {}, t2jxzs['window']['CanvasRenderingContext2D']['prototype'] = t2jxzs['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t2jxzs['window']['document']['body']['appendChild'] = function () {}, t2jxzs['EnvConfig']['pixelRatioInt'] = 0x0, a_bhu['getPixelRatio'] = t2jxzs['pixelRatio'], t2jxzs['_preCreateElement'] = z2oixj['createElement'], z2oixj['createElement'] = t2jxzs['createElement'], a_bhu['createShaderCondition'] = t2jxzs['createShaderCondition'], _6hau['parseXMLFromString'] = t2jxzs['parseXMLFromString'], cfn5d6['_createInputElement'] = ymw8kr['_createInputElement'], t2jxzs['EnvConfig']['load'] = oky8['prototype']['load'], oky8['prototype']['load'] = lt03v['prototype']['load'], t2jxzs['isZiYu'] && x8joy && wx['onMessage'](function (jyx8io) {
        jyx8io['isLoad'] && (rykm8w['ziyuFileData'][jyx8io['url']] = jyx8io['data']);
      });
    }, t2jxzs['onMkdirCallBack'] = function (_6uh5, u516) {
      if (!_6uh5) rykm8w['filesListObj'] = JSON['parse'](u516['data']);
    }, t2jxzs['pixelRatio'] = function () {
      if (!t2jxzs['EnvConfig']['pixelRatioInt']) try {
        var zvst3 = wx['getSystemInfoSync']();return t2jxzs['EnvConfig']['pixelRatioInt'] = zvst3['pixelRatio'], zvst3 = zvst3, zvst3['pixelRatio'];
      } catch (fpe) {}return t2jxzs['EnvConfig']['pixelRatioInt'];
    }, t2jxzs['createElement'] = function (a_1buh) {
      if (a_1buh == 'canvas') {
        var xzjst2;return t2jxzs['idx'] == 0x1 ? t2jxzs['isZiYu'] ? (xzjst2 = sharedCanvas, xzjst2['style'] = {}) : xzjst2 = window['canvas'] : xzjst2 = window['wx']['createCanvas'](), t2jxzs['idx']++, xzjst2;
      } else {
        if (a_1buh == 'textarea' || a_1buh == 'input') return t2jxzs['onCreateInput'](a_1buh);else {
          if (a_1buh == 'div') {
            var wom8 = t2jxzs['_preCreateElement'](a_1buh);return wom8['contains'] = function (fdnc65) {
              return null;
            }, wom8['removeChild'] = function (dpcn5) {}, wom8;
          } else return t2jxzs['_preCreateElement'](a_1buh);
        }
      }
    }, t2jxzs['onCreateInput'] = function (gmer) {
      var koj = t2jxzs['_preCreateElement'](gmer);return koj['focus'] = ymw8kr['wxinputFocus'], koj['blur'] = ymw8kr['wxinputblur'], koj['style'] = {}, koj['value'] = 0x0, koj['parentElement'] = {}, koj['placeholder'] = {}, koj['type'] = {}, koj['setColor'] = function (dqfg) {}, koj['setType'] = function (dp7) {}, koj['setFontFace'] = function (u_b) {}, koj['addEventListener'] = function (dqp7eg) {}, koj['contains'] = function (h6cu_) {
        return null;
      }, koj['removeChild'] = function (jszx2t) {}, koj;
    }, t2jxzs['createShaderCondition'] = function (oyji8x) {
      var rep7g = this,
          tl3v0s = function () {
        var $a1ub = oyji8x;return rep7g[oyji8x['replace']('this.', '')];
      };return tl3v0s;
    }, t2jxzs['EnvConfig'] = null, t2jxzs['window'] = null, t2jxzs['_preCreateElement'] = null, t2jxzs['_inited'] = ![], t2jxzs['wxRequest'] = null, t2jxzs['systemInfo'] = null, t2jxzs['version'] = '0.0.1', t2jxzs['isZiYu'] = ![], t2jxzs['isPosMsgYu'] = ![], t2jxzs['parseXMLFromString'] = function (xi8oj) {
      var ixyo2j, nhcf6;xi8oj = xi8oj['replace'](/>\s+</g, '><');try {
        ixyo2j = new window['Parser']['DOMParser']()['parseFromString'](xi8oj, 'text/xml');
      } catch (xt) {
        throw '需要引入xml解析库文件';
      }return ixyo2j;
    }, t2jxzs['idx'] = 0x1, t2jxzs;
  }(),
      mg7we = function () {
    function yjo8ik() {}u6ha_(yjo8ik, 'laya.wx.mini.MiniImage');var ndepfq = yjo8ik['prototype'];return ndepfq['_loadImage'] = function (dpfqnc) {
      var wmk8ry = this,
          zsl23 = ![];dpfqnc['indexOf']('layaNativeDir/') == -0x1 && (zsl23 = !![], dpfqnc = _b1u['formatURL'](dpfqnc));if (!rykm8w['getFileInfo'](dpfqnc)) {
        if (dpfqnc['indexOf']('http://') != -0x1 || dpfqnc['indexOf']('https://') != -0x1) rykm8w['downImg'](dpfqnc, new kw8rm(yjo8ik, yjo8ik['onDownImgCallBack'], [dpfqnc, wmk8ry]), dpfqnc);else yjo8ik['onCreateImage'](dpfqnc, wmk8ry, !![]);
      } else yjo8ik['onCreateImage'](dpfqnc, wmk8ry, !zsl23);
    }, yjo8ik['onDownImgCallBack'] = function (ox2i, ergw7m, dpn5fc) {
      if (!dpn5fc) yjo8ik['onCreateImage'](ox2i, ergw7m);else ergw7m['onError'](null);
    }, yjo8ik['onCreateImage'] = function (o8kiyw, l3t2, egq7d) {
      egq7d === void 0x0 && (egq7d = ![]);var v03sl;if (!egq7d) {
        var ixyj2o = rykm8w['getFileInfo'](o8kiyw),
            zo2 = ixyj2o['md5'];v03sl = rykm8w['getFileNativePath'](zo2);
      } else v03sl = o8kiyw;if (l3t2['imgCache'] == null) l3t2['imgCache'] = {};var dp5fnc;function sjtxz2() {
        dp5fnc['onload'] = null, dp5fnc['onerror'] = null, delete l3t2['imgCache'][o8kiyw];
      };var hc_u6 = function () {
        sjtxz2(), l3t2['onLoaded'](dp5fnc);
      },
          t32zs = function () {
        sjtxz2(), l3t2['event']('error', 'Load image failed');
      };l3t2['_type'] == 'nativeimage' ? (dp5fnc = new z2oixj['window']['Image'](), dp5fnc['crossOrigin'] = '', dp5fnc['onload'] = hc_u6, dp5fnc['onerror'] = t32zs, dp5fnc['src'] = v03sl, l3t2['imgCache'][o8kiyw] = dp5fnc) : new pndcqf['create'](v03sl, { 'onload': hc_u6, 'onerror': t32zs, 'onCreate': function (yjiox2) {
          dp5fnc = yjiox2, l3t2['imgCache'][o8kiyw] = yjiox2;
        } });
    }, yjo8ik;
  }(),
      ymw8kr = function () {
    function dncfp5() {}return u6ha_(dncfp5, 'laya.wx.mini.MiniInput'), dncfp5['_createInputElement'] = function () {
      cfn5d6['_initInput'](cfn5d6['area'] = z2oixj['createElement']('textarea')), cfn5d6['_initInput'](cfn5d6['input'] = z2oixj['createElement']('input')), cfn5d6['inputContainer'] = z2oixj['createElement']('div'), cfn5d6['inputContainer']['style']['position'] = 'absolute', cfn5d6['inputContainer']['style']['zIndex'] = 0x186a0, z2oixj['container']['appendChild'](cfn5d6['inputContainer']), cfn5d6['inputContainer']['setPos'] = function (u_65h, u516_h) {
        cfn5d6['inputContainer']['style']['left'] = u_65h + 'px', cfn5d6['inputContainer']['style']['top'] = u516_h + 'px';
      }, wmoky8['stage']['on']('resize', null, dncfp5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vl3t0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qermg['_soundClass'] = wm8ko, qermg['_musicClass'] = wm8ko;
    }, dncfp5['_onStageResize'] = function () {
      var _h51u6 = wmoky8['stage']['_canvasTransform']['identity']();_h51u6['scale'](z2oixj['width'] / $ba19['canvas']['width'] / a_bhu['getPixelRatio'](), z2oixj['height'] / $ba19['canvas']['height'] / a_bhu['getPixelRatio']());
    }, dncfp5['wxinputFocus'] = function (kjoyi) {
      var huc_65 = cfn5d6['inputElement']['target'];if (huc_65 && !huc_65['editable']) return;koiw8['window']['wx']['offKeyboardConfirm'](), koiw8['window']['wx']['offKeyboardInput'](), koiw8['window']['wx']['showKeyboard']({ 'defaultValue': huc_65['text'], 'maxLength': huc_65['maxChars'], 'multiple': huc_65['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xzoj2i) {}, 'fail': function (wrmg7e) {} }), koiw8['window']['wx']['onKeyboardConfirm'](function (g7kwmr) {
        var a4b$91 = g7kwmr ? g7kwmr['value'] : '';huc_65['text'] = a4b$91, huc_65['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), koiw8['window']['wx']['onKeyboardInput'](function (dqpnc) {
        var gp7qr = dqpnc ? dqpnc['value'] : '';if (!huc_65['multiline']) {
          if (gp7qr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }huc_65['text'] = gp7qr, huc_65['event']('input');
      });
    }, dncfp5['inputEnter'] = function () {
      cfn5d6['inputElement']['target']['focus'] = ![];
    }, dncfp5['wxinputblur'] = function () {
      dncfp5['hideKeyboard']();
    }, dncfp5['hideKeyboard'] = function () {
      koiw8['window']['wx']['offKeyboardConfirm'](), koiw8['window']['wx']['offKeyboardInput'](), koiw8['window']['wx']['hideKeyboard']({ 'success': function (qe7d) {
          console['log']('隐藏键盘');
        }, 'fail': function (i2ojzx) {
          console['log']('隐藏键盘出错:' + (i2ojzx ? i2ojzx['errMsg'] : ''));
        } });
    }, dncfp5;
  }(),
      lt03v = function () {
    function stv0() {}u6ha_(stv0, 'laya.wx.mini.MiniLoader');var iojx2y = stv0['prototype'];return iojx2y['load'] = function (me, joxiy8, _a1uh, gwr7me, h61u_a) {
      _a1uh === void 0x0 && (_a1uh = !![]), h61u_a === void 0x0 && (h61u_a = ![]);var epdq7g = this;epdq7g['_url'] = me;if (me['indexOf']('data:image') === 0x0) epdq7g['_type'] = joxiy8 = 'image';else epdq7g['_type'] = joxiy8 || (joxiy8 = epdq7g['getTypeFromUrl'](me));epdq7g['_cache'] = _a1uh, epdq7g['_data'] = null;var izxoj2 = 'ascii';if (me['indexOf']('.fnt') != -0x1) izxoj2 = 'utf8';else joxiy8 == 'arraybuffer' && (izxoj2 = '');;var f5hnc = _6hau['getFileExtension'](me);if (stv0['_fileTypeArr']['indexOf'](f5hnc) != -0x1) koiw8['EnvConfig']['load']['call'](this, me, joxiy8, _a1uh, gwr7me, h61u_a);else {
        if (!rykm8w['getFileInfo'](me)) {
          if (me['indexOf']('layaNativeDir/') != -0x1) {
            if (koiw8['isZiYu']) {
              var b9a$41 = rykm8w['ziyuFileData'][me];epdq7g['onLoaded'](b9a$41);return;
            } else {
              cosnole['log']('read read'), rykm8w['read'](me, izxoj2, new kw8rm(stv0, stv0['onReadNativeCallBack'], [izxoj2, me, joxiy8, _a1uh, gwr7me, h61u_a, epdq7g]));return;
            }
          }if (_b1u['rootPath'] == '') var dfpneq = me;else dfpneq = me['split'](_b1u['rootPath'])[0x0];me['indexOf']('http://') != -0x1 || me['indexOf']('https://') != -0x1 ? koiw8['EnvConfig']['load']['call'](epdq7g, me, joxiy8, _a1uh, gwr7me, h61u_a) : rykm8w['readFile'](dfpneq, izxoj2, new kw8rm(stv0, stv0['onReadNativeCallBack'], [izxoj2, me, joxiy8, _a1uh, gwr7me, h61u_a, epdq7g]), me);
        } else koiw8['EnvConfig']['load']['call'](this, me, joxiy8, _a1uh, gwr7me, h61u_a);
      }
    }, iojx2y['resMgrLoad'] = function ($abu1_, z2sjx, edgpq, ncdf5p, rq7m, uh_6, ba49) {
      edgpq === void 0x0 && (edgpq = 0x0), ncdf5p === void 0x0 && (ncdf5p = ![]), rq7m === void 0x0 && (rq7m = ![]), uh_6 === void 0x0 && (uh_6 = 0x0), ba49 === void 0x0 && (ba49 = 0x3), $abu1_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $abu1_), koiw8['EnvConfig']['resMgrLoad']($abu1_, (ijzsx2, pegdq, edfpn) => {
        stv0['prototype']['resMgrLoadCallBack'](ijzsx2, pegdq, edfpn, z2sjx);
      }, edgpq, ncdf5p, rq7m, uh_6, ba49);
    }, iojx2y['resMgrLoadCallBack'] = function (pdgf, p7qgre, mr7eg, fnh) {
      console['log']('buff:::', pdgf, mr7eg, rykm8w['fileNativeDir'] + '///' + rykm8w['fileListName']), fnh(pdgf, p7qgre, mr7eg);
    }, iojx2y['clearRes'] = function (ndc6f, iox2yj) {
      iox2yj === void 0x0 && (iox2yj = ![]);var i8yojk = this;i8yojk['clearRes'](ndc6f, iox2yj);var rkg7m = rykm8w['getFileInfo'](ndc6f);if (rkg7m && (ndc6f['indexOf']('http://') != -0x1 || ndc6f['indexOf']('https://') != -0x1)) {
        var stl23 = rkg7m['md5'],
            h15u_ = rykm8w['getFileNativePath'](stl23);rykm8w['remove'](h15u_);
      }
    }, stv0['onReadNativeCallBack'] = function (kwiy8o, $b41a9, me7, c5nd6, ojx8iy, dpf5, xj8i, zvts3, npf5) {
      c5nd6 === void 0x0 && (c5nd6 = !![]), dpf5 === void 0x0 && (dpf5 = ![]), zvts3 === void 0x0 && (zvts3 = 0x0);if (!zvts3) {
        var rpg7qe;if (me7 == 'json' || me7 == 'atlas') rpg7qe = koiw8['getJson'](npf5['data']);else me7 == 'xml' ? rpg7qe = _6hau['parseXMLFromString'](npf5['data']) : rpg7qe = npf5['data'];xj8i['onLoaded'](rpg7qe), !koiw8['isZiYu'] && koiw8['isPosMsgYu'] && me7 != 'arraybuffer' && wx['postMessage']({ 'url': $b41a9, 'data': rpg7qe, 'isLoad': !![] });
      } else zvts3 == 0x1 && koiw8['EnvConfig']['load']['call'](xj8i, $b41a9, me7, c5nd6, ojx8iy, dpf5);
    }, wmkrg7(stv0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), stv0;
  }(),
      rykm8w = function (lzvts) {
    function yjk8oi() {
      yjk8oi['__super']['call'](this);;
    }return u6ha_(yjk8oi, 'laya.wx.mini.MiniFileMgr', lzvts), yjk8oi['isLoadFile'] = function (geqp) {
      return yjk8oi['_fileTypeArr']['indexOf'](geqp) != -0x1 ? !![] : ![];
    }, yjk8oi['getFileInfo'] = function (h_cn6) {
      var qemg = h_cn6['split']('?')[0x0],
          c_5 = yjk8oi['filesListObj'][qemg];if (c_5 == null) return null;else return c_5;return null;
    }, yjk8oi['onFileUpdate'] = function (pneqf, vtls3) {
      var xst3z = pneqf['split']('/'),
          a91b$u = xst3z[xst3z['length'] - 0x1],
          qfnpdc = yjk8oi['getFileInfo'](vtls3);if (qfnpdc == null) yjk8oi['onSaveFile'](vtls3, a91b$u);else {
        if (qfnpdc['readyUrl'] != vtls3) yjk8oi['remove'](a91b$u, vtls3);
      }
    }, yjk8oi['exits'] = function (myw8ko, yi8kow) {
      var wy8om = yjk8oi['getFileNativePath'](myw8ko);yjk8oi['fs']['getFileInfo']({ 'filePath': wy8om, 'success': function (zoj2i) {
          yi8kow != null && yi8kow['runWith']([0x0, zoj2i]);
        }, 'fail': function (zsvl3) {
          yi8kow != null && yi8kow['runWith']([0x1, zsvl3]);
        } });
    }, yjk8oi['read'] = function (jxyoi2, w8ykom, tjsx2z, a1$_) {
      w8ykom === void 0x0 && (w8ykom = 'ascill'), a1$_ === void 0x0 && (a1$_ = '');var nepfdq;a1$_ != '' ? nepfdq = yjk8oi['getFileNativePath'](jxyoi2) : nepfdq = jxyoi2, yjk8oi['fs']['readFile']({ 'filePath': nepfdq, 'encoding': w8ykom, 'success': function ($uba_1) {
          tjsx2z != null && tjsx2z['runWith']([0x0, $uba_1]);
        }, 'fail': function (t03vsl) {
          if (t03vsl && a1$_ != '') yjk8oi['down'](a1$_, w8ykom, tjsx2z, a1$_);else tjsx2z != null && tjsx2z['runWith']([0x1]);
        } });
    }, yjk8oi['readNativeFile'] = function (rgem7, nfqep) {
      yjk8oi['fs']['readFile']({ 'filePath': rgem7, 'encoding': '', 'success': function (_ah61) {
          nfqep != null && nfqep['runWith']([0x0]);
        }, 'fail': function (zlv3st) {
          nfqep != null && nfqep['runWith']([0x1]);
        } });
    }, yjk8oi['down'] = function (j2ozx, nfdc, cpnqdf, uab1$9) {
      nfdc === void 0x0 && (nfdc = 'ascill'), uab1$9 === void 0x0 && (uab1$9 = '');var iyxj8o = yjk8oi['getFileNativePath'](uab1$9),
          f5d = yjk8oi['wxdown']({ 'url': j2ozx, 'filePath': iyxj8o, 'success': function (n5ch6) {
          if (n5ch6['statusCode'] === 0xc8) yjk8oi['readFile'](n5ch6['filePath'], nfdc, cpnqdf, uab1$9);
        }, 'fail': function (p5ncdf) {
          cpnqdf != null && cpnqdf['runWith']([0x1, p5ncdf]);
        } });f5d['onProgressUpdate'](function (_hbua) {
        cpnqdf != null && cpnqdf['runWith']([0x2, _hbua['progress']]);
      });
    }, yjk8oi['readFile'] = function (wm8o, dc5pf, xi8, okw8yi) {
      dc5pf === void 0x0 && (dc5pf = 'ascill'), okw8yi === void 0x0 && (okw8yi = ''), yjk8oi['fs']['readFile']({ 'filePath': wm8o, 'encoding': dc5pf, 'success': function (xj8yoi) {
          if (wm8o['indexOf']('http://') != -0x1 || wm8o['indexOf']('https://') != -0x1) yjk8oi['onFileUpdate'](wm8o, okw8yi);xi8 != null && xi8['runWith']([0x0, xj8yoi]);
        }, 'fail': function (xtz2s) {
          if (xtz2s) xi8 != null && xi8['runWith']([0x1, xtz2s]);
        } });
    }, yjk8oi['downImg'] = function (oxj2i, zi2sxj, _c5u6) {
      _c5u6 === void 0x0 && (_c5u6 = '');var o2xyj = yjk8oi['wxdown']({ 'url': oxj2i, 'success': function (mrwgk) {
          mrwgk['statusCode'] === 0xc8 && yjk8oi['copyFile'](mrwgk['tempFilePath'], _c5u6, zi2sxj);
        }, 'fail': function (cpqdn) {
          zi2sxj != null && zi2sxj['runWith']([0x1, cpqdn]);
        } });
    }, yjk8oi['copyFile'] = function (stxzj2, gdeq7p, qcdfnp) {
      var cu6h5_ = stxzj2['split']('/'),
          tlv0s = cu6h5_[cu6h5_['length'] - 0x1],
          iyjox8 = gdeq7p['split']('?')[0x0],
          deqgp7 = yjk8oi['getFileInfo'](gdeq7p),
          xt2szj = yjk8oi['getFileNativePath'](tlv0s);yjk8oi['fs']['copyFile']({ 'srcPath': stxzj2, 'destPath': xt2szj, 'success': function (sixj) {
          if (!deqgp7) yjk8oi['onSaveFile'](gdeq7p, tlv0s), qcdfnp != null && qcdfnp['runWith']([0x0]);else {
            if (deqgp7['readyUrl'] != gdeq7p) yjk8oi['remove'](tlv0s, gdeq7p, qcdfnp);
          }
        }, 'fail': function (oix2jz) {
          qcdfnp != null && qcdfnp['runWith']([0x1, oix2jz]);
        } });
    }, yjk8oi['getFileNativePath'] = function (mg7e) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mg7e;
    }, yjk8oi['remove'] = function (h5u61, ab9$u1, owmk) {
      ab9$u1 === void 0x0 && (ab9$u1 = '');var grw7k = yjk8oi['getFileInfo'](ab9$u1),
          mryw = yjk8oi['getFileNativePath'](grw7k['md5']);wmoky8['loader']['clearRes'](grw7k['readyUrl']), yjk8oi['fs']['unlink']({ 'filePath': mryw, 'success': function (ua9$1) {
          if (ab9$u1 != '') yjk8oi['onSaveFile'](ab9$u1, h5u61);owmk != null && owmk['runWith']([0x0]);
        }, 'fail': function (hn56c_) {} });
    }, yjk8oi['onSaveFile'] = function (rmegq7, u9$1b) {
      var d65n = rmegq7['split']('?')[0x0];yjk8oi['filesListObj'][d65n] = { 'md5': u9$1b, 'readyUrl': rmegq7 }, yjk8oi['fs']['writeFile']({ 'filePath': yjk8oi['fileNativeDir'] + '/' + yjk8oi['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yjk8oi['filesListObj']), 'success': function (h6au_) {
          console['log']('写入测试测试成功：', h6au_);
        }, 'fail': function (b1a$9) {
          console['log']('写入测试测试失败：', b1a$9);
        } });
    }, yjk8oi['existDir'] = function (ts3xz, v3st0) {
      yjk8oi['fs']['mkdir']({ 'dirPath': ts3xz, 'success': function (nqdefp) {
          v3st0 != null && v3st0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fdncpq) {
          if (fdncpq['errMsg']['indexOf']('file already exists') != -0x1) yjk8oi['readSync'](yjk8oi['fileListName'], 'utf8', v3st0);else v3st0 != null && v3st0['runWith']([0x1, fdncpq]);
        } });
    }, yjk8oi['readSync'] = function (wmre, zo2ij, uc6_h5, oykw) {
      zo2ij === void 0x0 && (zo2ij = 'ascill'), oykw === void 0x0 && (oykw = '');var r7kmgw = yjk8oi['getFileNativePath'](wmre),
          nf5ch6;try {
        nf5ch6 = yjk8oi['fs']['readFileSync'](r7kmgw), uc6_h5 != null && uc6_h5['runWith']([0x0, { 'data': nf5ch6 }]);
      } catch ($94b1) {
        uc6_h5 != null && uc6_h5['runWith']([0x1]);
      }
    }, yjk8oi['readCache'] = function () {}, yjk8oi['writeCache'] = function (l3tz2s) {
      var oyi8jx = readyUrl['split']('?')[0x0];yjk8oi['filesListObj'][oyi8jx] = { 'md5': md5Name, 'readyUrl': readyUrl }, yjk8oi['fs']['writeFile']({ 'filePath': yjk8oi['fileNativeDir'] + '/' + yjk8oi['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yjk8oi['filesListObj']), 'success': function (ergw) {}, 'fail': function (hc5n_) {} });
    }, yjk8oi['setNativeFileDir'] = function (joy8) {
      yjk8oi['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + joy8;
    }, yjk8oi['filesListObj'] = {}, yjk8oi['fileNativeDir'] = null, yjk8oi['fileListName'] = 'layaairfiles.txt', yjk8oi['ziyuFileData'] = {}, wmkrg7(yjk8oi, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yjk8oi;
  }(fdcpn5),
      wm8ko = function (a$u_b) {
    function t2sl() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], t2sl['__super']['call'](this), this['_sound'] = t2sl['_createSound']();
    }u6ha_(t2sl, 'laya.wx.mini.MiniSound', a$u_b);var oiyk = t2sl['prototype'];return oiyk['load'] = function (npfqdc) {
      var z32x = this;npfqdc = _b1u['formatURL'](npfqdc), this['url'] = npfqdc;if (t2sl['_audioCache'][npfqdc]) {
        this['event']('complete');return;
      }function df6cn5() {
        if (t2sl['_null'] != undefined) z32x['_sound']['onCanplay'](t2sl['_null']), z32x['_sound']['onError'](t2sl['_null']);else try {
          z32x['_sound']['onCanplay'](null), z32x['_sound']['onError'](null), t2sl['_null'] = null;
        } catch (kmw8r) {
          console['warn']('[wxmini] _clearSound:' + kmw8r), z32x['_sound']['onCanplay'](b$1_a), z32x['_sound']['onError'](b$1_a), t2sl['_null'] = b$1_a;
        }
      }function ba$149() {
        df6cn5(), u5_16h['loaded'] = !![], u5_16h['event']('complete'), t2sl['_audioCache'][u5_16h['url']] = u5_16h;
      }function ewg(m8k7w) {
        console['error']('errCode=' + m8k7w['errCode'] + '  errMsg=' + m8k7w['errMsg']), df6cn5(), u5_16h['event']('error');
      }function b$1_a() {}this['_sound']['onCanplay'](ba$149), this['_sound']['onError'](ewg), this['_sound']['src'] = npfqdc;var u5_16h = this;
    }, oiyk['play'] = function (r8kmw7, _1ah6) {
      r8kmw7 === void 0x0 && (r8kmw7 = 0x0), _1ah6 === void 0x0 && (_1ah6 = 0x0);var y8kw;if (this['url'] == qermg['_tMusic']) {
        if (!t2sl['_musicAudio']) t2sl['_musicAudio'] = t2sl['_createSound']();y8kw = t2sl['_musicAudio'];
      } else y8kw = t2sl['_createSound']();y8kw['src'] = this['url'];var $b19u = new io2jyx(y8kw);return $b19u['url'] = this['url'], $b19u['loops'] = _1ah6, $b19u['startTime'] = r8kmw7, $b19u['play'](), qermg['addChannel']($b19u), $b19u;
    }, oiyk['dispose'] = function () {
      var vltsz3 = t2sl['_audioCache'][this['url']];vltsz3 && (vltsz3['src'] = '', delete t2sl['_audioCache'][this['url']]);
    }, $ua_b1(0x0, oiyk, 'duration', function () {
      return this['_sound']['duration'];
    }), t2sl['_createSound'] = function () {
      return t2sl['_id']++, koiw8['window']['wx']['createInnerAudioContext']();
    }, t2sl['_musicAudio'] = null, t2sl['_id'] = 0x0, t2sl['_audioCache'] = {}, t2sl['_null'] = undefined, t2sl;
  }(fdcpn5),
      io2jyx = function (fcn5) {
    function zs2jxi(pdcnf5) {
      this['_audio'] = null, this['_onEnd'] = null, zs2jxi['__super']['call'](this), this['_audio'] = pdcnf5, this['_onEnd'] = _6hau['bind'](this['__onEnd'], this), pdcnf5['onEnded'](this['_onEnd']);
    }u6ha_(zs2jxi, 'laya.wx.mini.MiniSoundChannel', fcn5);var efdgq = zs2jxi['prototype'];return efdgq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wmoky8['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, efdgq['__onNull'] = function () {}, efdgq['play'] = function () {
      this['isStopped'] = ![], qermg['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, efdgq['stop'] = function () {
      this['isStopped'] = !![], qermg['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (zs2jxi['_null'] != undefined) this['_audio']['onEnded'](zs2jxi['_null']);else try {
        this['_audio']['onEnded'](null), zs2jxi['_null'] = null;
      } catch (mwrgk) {
        console['warn']('[wxmini] stop:' + mwrgk), this['_audio']['onEnded'](_6hau['bind'](this['__onNull'], this)), zs2jxi['_null'] = _6hau['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, efdgq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, efdgq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qermg['addChannel'](this), this['_audio']['play']();
    }, $ua_b1(0x0, efdgq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $ua_b1(0x0, efdgq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $ua_b1(0x0, efdgq, 'volume', function () {
      return 0x1;
    }, function (dnp5cf) {}), zs2jxi['_null'] = undefined, zs2jxi;
  }(z2xsjt);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var uha6 in Laya) {
    var xoj8y = Laya[uha6];xoj8y && xoj8y['__isclass'] && (exports[uha6] = xoj8y);
  }
});