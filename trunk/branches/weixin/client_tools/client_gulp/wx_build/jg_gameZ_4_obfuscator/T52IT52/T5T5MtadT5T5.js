var B = wx.$B;
(function (window, document, z40lv) {
  var eigpnu = z40lv['un'],
      yzbl = z40lv['uns'],
      egnui = z40lv['static'],
      y_t0 = z40lv['class'],
      a28i3 = z40lv['getset'],
      p2weai = z40lv['__newvec'],
      lk4bz = laya['utils']['Browser'],
      rm15oj = laya['events']['Event'],
      wiae2p = laya['events']['EventDispatcher'],
      x_dq$ = laya['resource']['HTMLImage'],
      hz6bk = laya['utils']['Handler'],
      u7s6 = laya['display']['Input'],
      b9l4 = laya['net']['Loader'],
      iea3w2 = laya['maths']['Matrix'],
      bl4zvy = laya['renders']['Render'],
      aw83f2 = laya['utils']['RunDriver'],
      $ltyv0 = laya['media']['Sound'],
      un67hs = laya['media']['SoundChannel'],
      ngespu = laya['media']['SoundManager'],
      pueg2i = laya['display']['Stage'],
      f3a8rw = laya['net']['URL'],
      _dtx = laya['utils']['Utils'],
      n67hus = function () {
    function h7su6n() {}return y_t0(h7su6n, 'laya.wx.mini.MiniAdpter'), h7su6n['getJson'] = function (lv$0y) {
      return JSON['parse'](lv$0y);
    }, h7su6n['init'] = function (ew3ai, enpsug) {
      ew3ai === void 0x0 && (ew3ai = ![]), enpsug === void 0x0 && (enpsug = ![]);if (h7su6n['_inited']) return;h7su6n['window'] = window;if (h7su6n['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;h7su6n['_inited'] = !![], h7su6n['isZiYu'] = enpsug, h7su6n['isPosMsgYu'] = ew3ai, h7su6n['EnvConfig'] = {}, !h7su6n['isZiYu'] && (zh69['setNativeFileDir']('/layaairGame'), zh69['existDir'](zh69['fileNativeDir'], hz6bk['create'](h7su6n, h7su6n['onMkdirCallBack']))), h7su6n['window']['focus'] = function () {}, z40lv['getUrlPath'] = function () {}, h7su6n['window']['logtime'] = function (paig2e) {}, h7su6n['window']['alertTimeLog'] = function (faw3r) {}, h7su6n['window']['resetShareInfo'] = function () {}, h7su6n['window']['CanvasRenderingContext2D'] = function () {}, h7su6n['window']['CanvasRenderingContext2D']['prototype'] = h7su6n['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h7su6n['window']['document']['body']['appendChild'] = function () {}, h7su6n['EnvConfig']['pixelRatioInt'] = 0x0, aw83f2['getPixelRatio'] = h7su6n['pixelRatio'], h7su6n['_preCreateElement'] = lk4bz['createElement'], lk4bz['createElement'] = h7su6n['createElement'], aw83f2['createShaderCondition'] = h7su6n['createShaderCondition'], _dtx['parseXMLFromString'] = h7su6n['parseXMLFromString'], u7s6['_createInputElement'] = pigea['_createInputElement'], h7su6n['EnvConfig']['load'] = b9l4['prototype']['load'], b9l4['prototype']['load'] = $yvt0x['prototype']['load'], h7su6n['isZiYu'] && ew3ai && wx['onMessage'](function (khb967) {
        khb967['isLoad'] && (zh69['ziyuFileData'][khb967['url']] = khb967['data']);
      });
    }, h7su6n['onMkdirCallBack'] = function (l4yzbv, f85w3r) {
      if (!l4yzbv) zh69['filesListObj'] = JSON['parse'](f85w3r['data']);
    }, h7su6n['pixelRatio'] = function () {
      if (!h7su6n['EnvConfig']['pixelRatioInt']) try {
        var z96bkh = wx['getSystemInfoSync']();return h7su6n['EnvConfig']['pixelRatioInt'] = z96bkh['pixelRatio'], z96bkh = z96bkh, z96bkh['pixelRatio'];
      } catch (b4zv) {}return h7su6n['EnvConfig']['pixelRatioInt'];
    }, h7su6n['createElement'] = function (pagie) {
      if (pagie == 'canvas') {
        var s7gnpu;return h7su6n['idx'] == 0x1 ? h7su6n['isZiYu'] ? (s7gnpu = sharedCanvas, s7gnpu['style'] = {}) : s7gnpu = window['canvas'] : s7gnpu = window['wx']['createCanvas'](), h7su6n['idx']++, s7gnpu;
      } else {
        if (pagie == 'textarea' || pagie == 'input') return h7su6n['onCreateInput'](pagie);else {
          if (pagie == 'div') {
            var y4lzvb = h7su6n['_preCreateElement'](pagie);return y4lzvb['contains'] = function (y04$l) {
              return null;
            }, y4lzvb['removeChild'] = function (ngpuei) {}, y4lzvb;
          } else return h7su6n['_preCreateElement'](pagie);
        }
      }
    }, h7su6n['onCreateInput'] = function (f58r3j) {
      var weaip2 = h7su6n['_preCreateElement'](f58r3j);return weaip2['focus'] = pigea['wxinputFocus'], weaip2['blur'] = pigea['wxinputblur'], weaip2['style'] = {}, weaip2['value'] = 0x0, weaip2['parentElement'] = {}, weaip2['placeholder'] = {}, weaip2['type'] = {}, weaip2['setColor'] = function (weiap2) {}, weaip2['setType'] = function (ly4zv0) {}, weaip2['setFontFace'] = function (j38fr5) {}, weaip2['addEventListener'] = function ($yl0) {}, weaip2['contains'] = function (b6k) {
        return null;
      }, weaip2['removeChild'] = function (sg7uhn) {}, weaip2;
    }, h7su6n['createShaderCondition'] = function (l$04) {
      var ytv$x = this,
          gui2ep = function () {
        var kh6z9 = l$04;return ytv$x[l$04['replace']('this.', '')];
      };return gui2ep;
    }, h7su6n['EnvConfig'] = null, h7su6n['window'] = null, h7su6n['_preCreateElement'] = null, h7su6n['_inited'] = ![], h7su6n['wxRequest'] = null, h7su6n['systemInfo'] = null, h7su6n['version'] = '0.0.1', h7su6n['isZiYu'] = ![], h7su6n['isPosMsgYu'] = ![], h7su6n['parseXMLFromString'] = function (tvy0$l) {
      var bk64z, ly4zbv;tvy0$l = tvy0$l['replace'](/>\s+</g, '><');try {
        bk64z = new window['Parser']['DOMParser']()['parseFromString'](tvy0$l, 'text/xml');
      } catch (unpsge) {
        throw '需要引入xml解析库文件';
      }return bk64z;
    }, h7su6n['idx'] = 0x1, h7su6n;
  }(),
      pe2a = function () {
    function $0xy() {}y_t0($0xy, 'laya.wx.mini.MiniImage');var txd$q_ = $0xy['prototype'];return txd$q_['_loadImage'] = function (k9lb4z) {
      var uspneg = this,
          ipw2e = ![];k9lb4z['indexOf']('layaNativeDir/') == -0x1 && (ipw2e = !![], k9lb4z = f3a8rw['formatURL'](k9lb4z));if (!zh69['getFileInfo'](k9lb4z)) {
        if (k9lb4z['indexOf']('http://') != -0x1 || k9lb4z['indexOf']('https://') != -0x1) zh69['downImg'](k9lb4z, new hz6bk($0xy, $0xy['onDownImgCallBack'], [k9lb4z, uspneg]), k9lb4z);else $0xy['onCreateImage'](k9lb4z, uspneg, !![]);
      } else $0xy['onCreateImage'](k9lb4z, uspneg, !ipw2e);
    }, $0xy['onDownImgCallBack'] = function (eia2w, a83r, fw83ra) {
      if (!fw83ra) $0xy['onCreateImage'](eia2w, a83r);else a83r['onError'](null);
    }, $0xy['onCreateImage'] = function (f581rj, zv4yl0, snu6h) {
      snu6h === void 0x0 && (snu6h = ![]);var pia2w;if (!snu6h) {
        var af382 = zh69['getFileInfo'](f581rj),
            p7gnsu = af382['md5'];pia2w = zh69['getFileNativePath'](p7gnsu);
      } else pia2w = f581rj;if (zv4yl0['imgCache'] == null) zv4yl0['imgCache'] = {};var gieun;function psnug() {
        gieun['onload'] = null, gieun['onerror'] = null, delete zv4yl0['imgCache'][f581rj];
      };var jr = function () {
        psnug(), zv4yl0['onLoaded'](gieun);
      },
          lb4vyz = function () {
        psnug(), zv4yl0['event']('error', 'Load image failed');
      };zv4yl0['_type'] == 'nativeimage' ? (gieun = new lk4bz['window']['Image'](), gieun['crossOrigin'] = '', gieun['onload'] = jr, gieun['onerror'] = lb4vyz, gieun['src'] = pia2w, zv4yl0['imgCache'][f581rj] = gieun) : new x_dq$['create'](pia2w, { 'onload': jr, 'onerror': lb4vyz, 'onCreate': function (b7h6k9) {
          gieun = b7h6k9, zv4yl0['imgCache'][f581rj] = b7h6k9;
        } });
    }, $0xy;
  }(),
      pigea = function () {
    function h7sk9() {}return y_t0(h7sk9, 'laya.wx.mini.MiniInput'), h7sk9['_createInputElement'] = function () {
      u7s6['_initInput'](u7s6['area'] = lk4bz['createElement']('textarea')), u7s6['_initInput'](u7s6['input'] = lk4bz['createElement']('input')), u7s6['inputContainer'] = lk4bz['createElement']('div'), u7s6['inputContainer']['style']['position'] = 'absolute', u7s6['inputContainer']['style']['zIndex'] = 0x186a0, lk4bz['container']['appendChild'](u7s6['inputContainer']), u7s6['inputContainer']['setPos'] = function (n7sh, wa83i2) {
        u7s6['inputContainer']['style']['left'] = n7sh + 'px', u7s6['inputContainer']['style']['top'] = wa83i2 + 'px';
      }, z40lv['stage']['on']('resize', null, h7sk9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (n7s96h) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ngespu['_soundClass'] = u6n7hs, ngespu['_musicClass'] = u6n7hs;
    }, h7sk9['_onStageResize'] = function () {
      var yb4vz = z40lv['stage']['_canvasTransform']['identity']();yb4vz['scale'](lk4bz['width'] / bl4zvy['canvas']['width'] / aw83f2['getPixelRatio'](), lk4bz['height'] / bl4zvy['canvas']['height'] / aw83f2['getPixelRatio']());
    }, h7sk9['wxinputFocus'] = function (yv$0) {
      var t0vl$ = u7s6['inputElement']['target'];if (t0vl$ && !t0vl$['editable']) return;n67hus['window']['wx']['offKeyboardConfirm'](), n67hus['window']['wx']['offKeyboardInput'](), n67hus['window']['wx']['showKeyboard']({ 'defaultValue': t0vl$['text'], 'maxLength': t0vl$['maxChars'], 'multiple': t0vl$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ly0v4$) {}, 'fail': function (wa2e3) {} }), n67hus['window']['wx']['onKeyboardConfirm'](function ($0x_dt) {
        var h769n = $0x_dt ? $0x_dt['value'] : '';t0vl$['text'] = h769n, t0vl$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), n67hus['window']['wx']['onKeyboardInput'](function (j15rm) {
        var zlb4vk = j15rm ? j15rm['value'] : '';if (!t0vl$['multiline']) {
          if (zlb4vk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }t0vl$['text'] = zlb4vk, t0vl$['event']('input');
      });
    }, h7sk9['inputEnter'] = function () {
      u7s6['inputElement']['target']['focus'] = ![];
    }, h7sk9['wxinputblur'] = function () {
      h7sk9['hideKeyboard']();
    }, h7sk9['hideKeyboard'] = function () {
      n67hus['window']['wx']['offKeyboardConfirm'](), n67hus['window']['wx']['offKeyboardInput'](), n67hus['window']['wx']['hideKeyboard']({ 'success': function (enspug) {
          console['log']('隐藏键盘');
        }, 'fail': function (blvyz) {
          console['log']('隐藏键盘出错:' + (blvyz ? blvyz['errMsg'] : ''));
        } });
    }, h7sk9;
  }(),
      $yvt0x = function () {
    function _xqtd$() {}y_t0(_xqtd$, 'laya.wx.mini.MiniLoader');var uepsgn = _xqtd$['prototype'];return uepsgn['load'] = function (r358j, yv0zl4, _txy$0, epi2ag, s9n7h) {
      _txy$0 === void 0x0 && (_txy$0 = !![]), s9n7h === void 0x0 && (s9n7h = ![]);var kb96zh = this;kb96zh['_url'] = r358j;if (r358j['indexOf']('data:image') === 0x0) kb96zh['_type'] = yv0zl4 = 'image';else kb96zh['_type'] = yv0zl4 || (yv0zl4 = kb96zh['getTypeFromUrl'](r358j));kb96zh['_cache'] = _txy$0, kb96zh['_data'] = null;var t0v$ly = 'ascii';if (r358j['indexOf']('.fnt') != -0x1) t0v$ly = 'utf8';else yv0zl4 == 'arraybuffer' && (t0v$ly = '');;var v$ty0l = _dtx['getFileExtension'](r358j);if (_xqtd$['_fileTypeArr']['indexOf'](v$ty0l) != -0x1) n67hus['EnvConfig']['load']['call'](this, r358j, yv0zl4, _txy$0, epi2ag, s9n7h);else {
        if (!zh69['getFileInfo'](r358j)) {
          if (r358j['indexOf']('layaNativeDir/') != -0x1) {
            if (n67hus['isZiYu']) {
              var bkz69h = zh69['ziyuFileData'][r358j];kb96zh['onLoaded'](bkz69h);return;
            } else {
              cosnole['log']('read read'), zh69['read'](r358j, t0v$ly, new hz6bk(_xqtd$, _xqtd$['onReadNativeCallBack'], [t0v$ly, r358j, yv0zl4, _txy$0, epi2ag, s9n7h, kb96zh]));return;
            }
          }if (f3a8rw['rootPath'] == '') var xtd$0_ = r358j;else xtd$0_ = r358j['split'](f3a8rw['rootPath'])[0x0];r358j['indexOf']('http://') != -0x1 || r358j['indexOf']('https://') != -0x1 ? n67hus['EnvConfig']['load']['call'](kb96zh, r358j, yv0zl4, _txy$0, epi2ag, s9n7h) : zh69['readFile'](xtd$0_, t0v$ly, new hz6bk(_xqtd$, _xqtd$['onReadNativeCallBack'], [t0v$ly, r358j, yv0zl4, _txy$0, epi2ag, s9n7h, kb96zh]), r358j);
        } else n67hus['EnvConfig']['load']['call'](this, r358j, yv0zl4, _txy$0, epi2ag, s9n7h);
      }
    }, uepsgn['resMgrLoad'] = function (lvz0y4, r38w5, h9s6, b9z6h, usnh67, yxv0t$, j85f3) {
      h9s6 === void 0x0 && (h9s6 = 0x0), b9z6h === void 0x0 && (b9z6h = ![]), usnh67 === void 0x0 && (usnh67 = ![]), yxv0t$ === void 0x0 && (yxv0t$ = 0x0), j85f3 === void 0x0 && (j85f3 = 0x3), lvz0y4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lvz0y4), n67hus['EnvConfig']['resMgrLoad'](lvz0y4, (k649zb, dxt0_$, ng7suh) => {
        _xqtd$['prototype']['resMgrLoadCallBack'](k649zb, dxt0_$, ng7suh, r38w5);
      }, h9s6, b9z6h, usnh67, yxv0t$, j85f3);
    }, uepsgn['resMgrLoadCallBack'] = function (f8awr, _qdxt, hn7sug, unsegp) {
      console['log']('buff:::', f8awr, hn7sug, zh69['fileNativeDir'] + '///' + zh69['fileListName']), unsegp(f8awr, _qdxt, hn7sug);
    }, uepsgn['clearRes'] = function (b69z4k, lt0v$) {
      lt0v$ === void 0x0 && (lt0v$ = ![]);var ra3w8f = this;ra3w8f['clearRes'](b69z4k, lt0v$);var o15rmj = zh69['getFileInfo'](b69z4k);if (o15rmj && (b69z4k['indexOf']('http://') != -0x1 || b69z4k['indexOf']('https://') != -0x1)) {
        var zkb496 = o15rmj['md5'],
            ush7 = zh69['getFileNativePath'](zkb496);zh69['remove'](ush7);
      }
    }, _xqtd$['onReadNativeCallBack'] = function (fwr53, nsguh7, iue2g, k4b96, tqx$_, yxt0, ea32, ugiep2, nh7sug) {
      k4b96 === void 0x0 && (k4b96 = !![]), yxt0 === void 0x0 && (yxt0 = ![]), ugiep2 === void 0x0 && (ugiep2 = 0x0);if (!ugiep2) {
        var nhsgu;if (iue2g == 'json' || iue2g == 'atlas') nhsgu = n67hus['getJson'](nh7sug['data']);else iue2g == 'xml' ? nhsgu = _dtx['parseXMLFromString'](nh7sug['data']) : nhsgu = nh7sug['data'];ea32['onLoaded'](nhsgu), !n67hus['isZiYu'] && n67hus['isPosMsgYu'] && iue2g != 'arraybuffer' && wx['postMessage']({ 'url': nsguh7, 'data': nhsgu, 'isLoad': !![] });
      } else ugiep2 == 0x1 && n67hus['EnvConfig']['load']['call'](ea32, nsguh7, iue2g, k4b96, tqx$_, yxt0);
    }, egnui(_xqtd$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _xqtd$;
  }(),
      zh69 = function (j1rm5) {
    function u7sp() {
      u7sp['__super']['call'](this);;
    }return y_t0(u7sp, 'laya.wx.mini.MiniFileMgr', j1rm5), u7sp['isLoadFile'] = function (hz6k) {
      return u7sp['_fileTypeArr']['indexOf'](hz6k) != -0x1 ? !![] : ![];
    }, u7sp['getFileInfo'] = function ($t_y) {
      var nguei = $t_y['split']('?')[0x0],
          g2eiup = u7sp['filesListObj'][nguei];if (g2eiup == null) return null;else return g2eiup;return null;
    }, u7sp['onFileUpdate'] = function (gunp7, kb4lz9) {
      var rfmj51 = gunp7['split']('/'),
          tx$0y_ = rfmj51[rfmj51['length'] - 0x1],
          j5omr = u7sp['getFileInfo'](kb4lz9);if (j5omr == null) u7sp['onSaveFile'](kb4lz9, tx$0y_);else {
        if (j5omr['readyUrl'] != kb4lz9) u7sp['remove'](tx$0y_, kb4lz9);
      }
    }, u7sp['exits'] = function (jm1fr, tdxq) {
      var f2w3a = u7sp['getFileNativePath'](jm1fr);u7sp['fs']['getFileInfo']({ 'filePath': f2w3a, 'success': function (f35rj) {
          tdxq != null && tdxq['runWith']([0x0, f35rj]);
        }, 'fail': function (ai382) {
          tdxq != null && tdxq['runWith']([0x1, ai382]);
        } });
    }, u7sp['read'] = function (bvzly, hs796n, rf1m5j, gs7hn) {
      hs796n === void 0x0 && (hs796n = 'ascill'), gs7hn === void 0x0 && (gs7hn = '');var a83w2i;gs7hn != '' ? a83w2i = u7sp['getFileNativePath'](bvzly) : a83w2i = bvzly, u7sp['fs']['readFile']({ 'filePath': a83w2i, 'encoding': hs796n, 'success': function ($t_y0) {
          rf1m5j != null && rf1m5j['runWith']([0x0, $t_y0]);
        }, 'fail': function (w3fa82) {
          if (w3fa82 && gs7hn != '') u7sp['down'](gs7hn, hs796n, rf1m5j, gs7hn);else rf1m5j != null && rf1m5j['runWith']([0x1]);
        } });
    }, u7sp['readNativeFile'] = function (uspnge, nusp7g) {
      u7sp['fs']['readFile']({ 'filePath': uspnge, 'encoding': '', 'success': function (gu2eip) {
          nusp7g != null && nusp7g['runWith']([0x0]);
        }, 'fail': function ($dqxt_) {
          nusp7g != null && nusp7g['runWith']([0x1]);
        } });
    }, u7sp['down'] = function ($dtx0, h79sk6, gp7snu, z4vlb) {
      h79sk6 === void 0x0 && (h79sk6 = 'ascill'), z4vlb === void 0x0 && (z4vlb = '');var m51rj = u7sp['getFileNativePath'](z4vlb),
          tx$_0 = u7sp['wxdown']({ 'url': $dtx0, 'filePath': m51rj, 'success': function (_x0ty) {
          if (_x0ty['statusCode'] === 0xc8) u7sp['readFile'](_x0ty['filePath'], h79sk6, gp7snu, z4vlb);
        }, 'fail': function (a382wi) {
          gp7snu != null && gp7snu['runWith']([0x1, a382wi]);
        } });tx$_0['onProgressUpdate'](function (gp2eui) {
        gp7snu != null && gp7snu['runWith']([0x2, gp2eui['progress']]);
      });
    }, u7sp['readFile'] = function (uesgp, y_x$0, hk9z, iaeg2) {
      y_x$0 === void 0x0 && (y_x$0 = 'ascill'), iaeg2 === void 0x0 && (iaeg2 = ''), u7sp['fs']['readFile']({ 'filePath': uesgp, 'encoding': y_x$0, 'success': function (uegi2p) {
          if (uesgp['indexOf']('http://') != -0x1 || uesgp['indexOf']('https://') != -0x1) u7sp['onFileUpdate'](uesgp, iaeg2);hk9z != null && hk9z['runWith']([0x0, uegi2p]);
        }, 'fail': function (t_x0$) {
          if (t_x0$) hk9z != null && hk9z['runWith']([0x1, t_x0$]);
        } });
    }, u7sp['downImg'] = function (k69b4z, z0yv4, mjf1r) {
      mjf1r === void 0x0 && (mjf1r = '');var _$dt0x = u7sp['wxdown']({ 'url': k69b4z, 'success': function ($x0vty) {
          $x0vty['statusCode'] === 0xc8 && u7sp['copyFile']($x0vty['tempFilePath'], mjf1r, z0yv4);
        }, 'fail': function (geapi) {
          z0yv4 != null && z0yv4['runWith']([0x1, geapi]);
        } });
    }, u7sp['copyFile'] = function (afw38r, fw385, bl4kzv) {
      var d_tx$q = afw38r['split']('/'),
          su7ngp = d_tx$q[d_tx$q['length'] - 0x1],
          nhugs7 = fw385['split']('?')[0x0],
          neugps = u7sp['getFileInfo'](fw385),
          r3f8wa = u7sp['getFileNativePath'](su7ngp);u7sp['fs']['copyFile']({ 'srcPath': afw38r, 'destPath': r3f8wa, 'success': function (pwi2a) {
          if (!neugps) u7sp['onSaveFile'](fw385, su7ngp), bl4kzv != null && bl4kzv['runWith']([0x0]);else {
            if (neugps['readyUrl'] != fw385) u7sp['remove'](su7ngp, fw385, bl4kzv);
          }
        }, 'fail': function (t0$y_x) {
          bl4kzv != null && bl4kzv['runWith']([0x1, t0$y_x]);
        } });
    }, u7sp['getFileNativePath'] = function (hgsn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hgsn;
    }, u7sp['remove'] = function (iepgu2, ugpi2, bhz9) {
      ugpi2 === void 0x0 && (ugpi2 = '');var l4yvbz = u7sp['getFileInfo'](ugpi2),
          pnusge = u7sp['getFileNativePath'](l4yvbz['md5']);z40lv['loader']['clearRes'](l4yvbz['readyUrl']), u7sp['fs']['unlink']({ 'filePath': pnusge, 'success': function (l4yvzb) {
          if (ugpi2 != '') u7sp['onSaveFile'](ugpi2, iepgu2);bhz9 != null && bhz9['runWith']([0x0]);
        }, 'fail': function (rf8a3w) {} });
    }, u7sp['onSaveFile'] = function (khb697, yl0tv) {
      var gunip = khb697['split']('?')[0x0];u7sp['filesListObj'][gunip] = { 'md5': yl0tv, 'readyUrl': khb697 }, u7sp['fs']['writeFile']({ 'filePath': u7sp['fileNativeDir'] + '/' + u7sp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](u7sp['filesListObj']), 'success': function (nugie) {
          console['log']('写入测试测试成功：', nugie);
        }, 'fail': function (yvl40z) {
          console['log']('写入测试测试失败：', yvl40z);
        } });
    }, u7sp['existDir'] = function (fw58, eguinp) {
      u7sp['fs']['mkdir']({ 'dirPath': fw58, 'success': function (v4yl0$) {
          eguinp != null && eguinp['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zk4bl) {
          if (zk4bl['errMsg']['indexOf']('file already exists') != -0x1) u7sp['readSync'](u7sp['fileListName'], 'utf8', eguinp);else eguinp != null && eguinp['runWith']([0x1, zk4bl]);
        } });
    }, u7sp['readSync'] = function (a23ie, upsn7, xq_dt, bk4z9) {
      upsn7 === void 0x0 && (upsn7 = 'ascill'), bk4z9 === void 0x0 && (bk4z9 = '');var np7su = u7sp['getFileNativePath'](a23ie),
          a8rf;try {
        a8rf = u7sp['fs']['readFileSync'](np7su), xq_dt != null && xq_dt['runWith']([0x0, { 'data': a8rf }]);
      } catch (vy4) {
        xq_dt != null && xq_dt['runWith']([0x1]);
      }
    }, u7sp['readCache'] = function () {}, u7sp['writeCache'] = function (mo5jr) {
      var mjo51 = readyUrl['split']('?')[0x0];u7sp['filesListObj'][mjo51] = { 'md5': md5Name, 'readyUrl': readyUrl }, u7sp['fs']['writeFile']({ 'filePath': u7sp['fileNativeDir'] + '/' + u7sp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](u7sp['filesListObj']), 'success': function (t_$0yx) {}, 'fail': function (eignpu) {} });
    }, u7sp['setNativeFileDir'] = function (vlz4kb) {
      u7sp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vlz4kb;
    }, u7sp['filesListObj'] = {}, u7sp['fileNativeDir'] = null, u7sp['fileListName'] = 'layaairfiles.txt', u7sp['ziyuFileData'] = {}, egnui(u7sp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), u7sp;
  }(wiae2p),
      u6n7hs = function ($_qtdx) {
    function g7uhn() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], g7uhn['__super']['call'](this), this['_sound'] = g7uhn['_createSound']();
    }y_t0(g7uhn, 'laya.wx.mini.MiniSound', $_qtdx);var s7nhu6 = g7uhn['prototype'];return s7nhu6['load'] = function (mfj51r) {
      var hs7nu6 = this;mfj51r = f3a8rw['formatURL'](mfj51r), this['url'] = mfj51r;if (g7uhn['_audioCache'][mfj51r]) {
        this['event']('complete');return;
      }function zkb6() {
        if (g7uhn['_null'] != undefined) hs7nu6['_sound']['onCanplay'](g7uhn['_null']), hs7nu6['_sound']['onError'](g7uhn['_null']);else try {
          hs7nu6['_sound']['onCanplay'](null), hs7nu6['_sound']['onError'](null), g7uhn['_null'] = null;
        } catch (xt$q_) {
          console['warn']('[wxmini] _clearSound:' + xt$q_), hs7nu6['_sound']['onCanplay'](n6ush), hs7nu6['_sound']['onError'](n6ush), g7uhn['_null'] = n6ush;
        }
      }function tvy0l$() {
        zkb6(), eugnp['loaded'] = !![], eugnp['event']('complete'), g7uhn['_audioCache'][eugnp['url']] = eugnp;
      }function rm5j1(b7k6h) {
        console['error']('errCode=' + b7k6h['errCode'] + '  errMsg=' + b7k6h['errMsg']), zkb6(), eugnp['event']('error');
      }function n6ush() {}this['_sound']['onCanplay'](tvy0l$), this['_sound']['onError'](rm5j1), this['_sound']['src'] = mfj51r;var eugnp = this;
    }, s7nhu6['play'] = function (r58f3j, u7pgs) {
      r58f3j === void 0x0 && (r58f3j = 0x0), u7pgs === void 0x0 && (u7pgs = 0x0);var pu2ie;if (this['url'] == ngespu['_tMusic']) {
        if (!g7uhn['_musicAudio']) g7uhn['_musicAudio'] = g7uhn['_createSound']();pu2ie = g7uhn['_musicAudio'];
      } else pu2ie = g7uhn['_createSound']();pu2ie['src'] = this['url'];var shun6 = new xt0$_(pu2ie);return shun6['url'] = this['url'], shun6['loops'] = u7pgs, shun6['startTime'] = r58f3j, shun6['play'](), ngespu['addChannel'](shun6), shun6;
    }, s7nhu6['dispose'] = function () {
      var jro5 = g7uhn['_audioCache'][this['url']];jro5 && (jro5['src'] = '', delete g7uhn['_audioCache'][this['url']]);
    }, a28i3(0x0, s7nhu6, 'duration', function () {
      return this['_sound']['duration'];
    }), g7uhn['_createSound'] = function () {
      return g7uhn['_id']++, n67hus['window']['wx']['createInnerAudioContext']();
    }, g7uhn['_musicAudio'] = null, g7uhn['_id'] = 0x0, g7uhn['_audioCache'] = {}, g7uhn['_null'] = undefined, g7uhn;
  }(wiae2p),
      xt0$_ = function (yt0x$) {
    function h9bk(qt_dx) {
      this['_audio'] = null, this['_onEnd'] = null, h9bk['__super']['call'](this), this['_audio'] = qt_dx, this['_onEnd'] = _dtx['bind'](this['__onEnd'], this), qt_dx['onEnded'](this['_onEnd']);
    }y_t0(h9bk, 'laya.wx.mini.MiniSoundChannel', yt0x$);var ksh7 = h9bk['prototype'];return ksh7['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z40lv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ksh7['__onNull'] = function () {}, ksh7['play'] = function () {
      this['isStopped'] = ![], ngespu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ksh7['stop'] = function () {
      this['isStopped'] = !![], ngespu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (h9bk['_null'] != undefined) this['_audio']['onEnded'](h9bk['_null']);else try {
        this['_audio']['onEnded'](null), h9bk['_null'] = null;
      } catch (i2gpea) {
        console['warn']('[wxmini] stop:' + i2gpea), this['_audio']['onEnded'](_dtx['bind'](this['__onNull'], this)), h9bk['_null'] = _dtx['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ksh7['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ksh7['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ngespu['addChannel'](this), this['_audio']['play']();
    }, a28i3(0x0, ksh7, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), a28i3(0x0, ksh7, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), a28i3(0x0, ksh7, 'volume', function () {
      return 0x1;
    }, function (rmj1o5) {}), h9bk['_null'] = undefined, h9bk;
  }(un67hs);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var iungp in Laya) {
    var pg7sn = Laya[iungp];pg7sn && pg7sn['__isclass'] && (exports[iungp] = pg7sn);
  }
});