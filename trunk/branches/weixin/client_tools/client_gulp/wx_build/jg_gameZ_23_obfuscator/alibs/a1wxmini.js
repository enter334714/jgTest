var c = wx.$a;
(function (window, document, _2ugew) {
  var jsx21f = _2ugew['un'],
      _gue2 = _2ugew['uns'],
      wf1gu2 = _2ugew['static'],
      rqd5t8 = _2ugew['class'],
      y$cbo = _2ugew['getset'],
      oyc_40 = _2ugew['__newvec'],
      u4e_gw = laya['utils']['Browser'],
      vzdhk = laya['events']['Event'],
      r753tp = laya['events']['EventDispatcher'],
      $b0co = laya['resource']['HTMLImage'],
      ybc0$o = laya['utils']['Handler'],
      _uegw4 = laya['display']['Input'],
      calbm$ = laya['net']['Loader'],
      fsxj = laya['maths']['Matrix'],
      hkn = laya['renders']['Render'],
      ml$acb = laya['utils']['RunDriver'],
      r68td = laya['media']['Sound'],
      almb$ = laya['media']['SoundChannel'],
      u_wge2 = laya['media']['SoundManager'],
      w2gu_e = laya['display']['Stage'],
      sjxvh = laya['net']['URL'],
      cma$l = laya['utils']['Utils'],
      rq5t78 = function () {
    function we1g() {}return rqd5t8(we1g, 'laya.wx.mini.MiniAdpter'), we1g['getJson'] = function (yb0$lc) {
      return JSON['parse'](yb0$lc);
    }, we1g['init'] = function (vsfxnj, g2f1) {
      vsfxnj === void 0x0 && (vsfxnj = ![]), g2f1 === void 0x0 && (g2f1 = ![]);if (we1g['_inited']) return;we1g['window'] = window;if (we1g['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;we1g['_inited'] = !![], we1g['isZiYu'] = g2f1, we1g['isPosMsgYu'] = vsfxnj, we1g['EnvConfig'] = {}, !we1g['isZiYu'] && (b$mla9['setNativeFileDir']('/layaairGame'), b$mla9['existDir'](b$mla9['fileNativeDir'], ybc0$o['create'](we1g, we1g['onMkdirCallBack']))), we1g['window']['focus'] = function () {}, _2ugew['getUrlPath'] = function () {}, we1g['window']['logtime'] = function (p735rt) {}, we1g['window']['alertTimeLog'] = function (njs1xf) {}, we1g['window']['resetShareInfo'] = function () {}, we1g['window']['CanvasRenderingContext2D'] = function () {}, we1g['window']['CanvasRenderingContext2D']['prototype'] = we1g['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], we1g['window']['document']['body']['appendChild'] = function () {}, we1g['EnvConfig']['pixelRatioInt'] = 0x0, ml$acb['getPixelRatio'] = we1g['pixelRatio'], we1g['_preCreateElement'] = u4e_gw['createElement'], u4e_gw['createElement'] = we1g['createElement'], ml$acb['createShaderCondition'] = we1g['createShaderCondition'], cma$l['parseXMLFromString'] = we1g['parseXMLFromString'], _uegw4['_createInputElement'] = gewu2['_createInputElement'], we1g['EnvConfig']['load'] = calbm$['prototype']['load'], calbm$['prototype']['load'] = zvhkn['prototype']['load'], we1g['isZiYu'] && vsfxnj && wx['onMessage'](function (mbal9$) {
        mbal9$['isLoad'] && (b$mla9['ziyuFileData'][mbal9$['url']] = mbal9$['data']);
      });
    }, we1g['onMkdirCallBack'] = function (g1u2f, qkz86) {
      if (!g1u2f) b$mla9['filesListObj'] = JSON['parse'](qkz86['data']);
    }, we1g['pixelRatio'] = function () {
      if (!we1g['EnvConfig']['pixelRatioInt']) try {
        var f2j1s = wx['getSystemInfoSync']();return we1g['EnvConfig']['pixelRatioInt'] = f2j1s['pixelRatio'], f2j1s = f2j1s, f2j1s['pixelRatio'];
      } catch (hjvnkz) {}return we1g['EnvConfig']['pixelRatioInt'];
    }, we1g['createElement'] = function (ufgx2) {
      if (ufgx2 == 'canvas') {
        var njvsx;return we1g['idx'] == 0x1 ? we1g['isZiYu'] ? (njvsx = sharedCanvas, njvsx['style'] = {}) : njvsx = window['canvas'] : njvsx = window['wx']['createCanvas'](), we1g['idx']++, njvsx;
      } else {
        if (ufgx2 == 'textarea' || ufgx2 == 'input') return we1g['onCreateInput'](ufgx2);else {
          if (ufgx2 == 'div') {
            var c0$yob = we1g['_preCreateElement'](ufgx2);return c0$yob['contains'] = function (o0e_4w) {
              return null;
            }, c0$yob['removeChild'] = function (t8dr6) {}, c0$yob;
          } else return we1g['_preCreateElement'](ufgx2);
        }
      }
    }, we1g['onCreateInput'] = function (u_2ge) {
      var qtr5 = we1g['_preCreateElement'](u_2ge);return qtr5['focus'] = gewu2['wxinputFocus'], qtr5['blur'] = gewu2['wxinputblur'], qtr5['style'] = {}, qtr5['value'] = 0x0, qtr5['parentElement'] = {}, qtr5['placeholder'] = {}, qtr5['type'] = {}, qtr5['setColor'] = function (zn6v) {}, qtr5['setType'] = function (jhzvs) {}, qtr5['setFontFace'] = function (ir75) {}, qtr5['addEventListener'] = function ($ymcl) {}, qtr5['contains'] = function (xs1f2) {
        return null;
      }, qtr5['removeChild'] = function (sfgx) {}, qtr5;
    }, we1g['createShaderCondition'] = function (fuw1g2) {
      var qkzd6 = this,
          hjvnsx = function () {
        var r5i7 = fuw1g2;return qkzd6[fuw1g2['replace']('this.', '')];
      };return hjvnsx;
    }, we1g['EnvConfig'] = null, we1g['window'] = null, we1g['_preCreateElement'] = null, we1g['_inited'] = ![], we1g['wxRequest'] = null, we1g['systemInfo'] = null, we1g['version'] = '0.0.1', we1g['isZiYu'] = ![], we1g['isPosMsgYu'] = ![], we1g['parseXMLFromString'] = function (qrd58t) {
      var qr8d, vhsxjn;qrd58t = qrd58t['replace'](/>\s+</g, '><');try {
        qr8d = new window['Parser']['DOMParser']()['parseFromString'](qrd58t, 'text/xml');
      } catch (g1f2) {
        throw '需要引入xml解析库文件';
      }return qr8d;
    }, we1g['idx'] = 0x1, we1g;
  }(),
      y4c0 = function () {
    function t8k6() {}rqd5t8(t8k6, 'laya.wx.mini.MiniImage');var zkq6d = t8k6['prototype'];return zkq6d['_loadImage'] = function (hzvnk) {
      var rd5 = this,
          $blcy0 = ![];hzvnk['indexOf']('layaNativeDir/') == -0x1 && ($blcy0 = !![], hzvnk = sjxvh['formatURL'](hzvnk));if (!b$mla9['getFileInfo'](hzvnk)) {
        if (hzvnk['indexOf']('http://') != -0x1 || hzvnk['indexOf']('https://') != -0x1) b$mla9['downImg'](hzvnk, new ybc0$o(t8k6, t8k6['onDownImgCallBack'], [hzvnk, rd5]), hzvnk);else t8k6['onCreateImage'](hzvnk, rd5, !![]);
      } else t8k6['onCreateImage'](hzvnk, rd5, !$blcy0);
    }, t8k6['onDownImgCallBack'] = function (q6zk8d, ab$ml9, _guw2e) {
      if (!_guw2e) t8k6['onCreateImage'](q6zk8d, ab$ml9);else ab$ml9['onError'](null);
    }, t8k6['onCreateImage'] = function (vkjnzh, tp37r, bal$9) {
      bal$9 === void 0x0 && (bal$9 = ![]);var jnhsvx;if (!bal$9) {
        var eo_wu4 = b$mla9['getFileInfo'](vkjnzh),
            hv6kzn = eo_wu4['md5'];jnhsvx = b$mla9['getFileNativePath'](hv6kzn);
      } else jnhsvx = vkjnzh;if (tp37r['imgCache'] == null) tp37r['imgCache'] = {};var yclb$0;function e0w4_() {
        yclb$0['onload'] = null, yclb$0['onerror'] = null, delete tp37r['imgCache'][vkjnzh];
      };var jvhnxs = function () {
        e0w4_(), tp37r['onLoaded'](yclb$0);
      },
          z6kqh = function () {
        e0w4_(), tp37r['event']('error', 'Load image failed');
      };tp37r['_type'] == 'nativeimage' ? (yclb$0 = new u4e_gw['window']['Image'](), yclb$0['crossOrigin'] = '', yclb$0['onload'] = jvhnxs, yclb$0['onerror'] = z6kqh, yclb$0['src'] = jnhsvx, tp37r['imgCache'][vkjnzh] = yclb$0) : new $b0co['create'](jnhsvx, { 'onload': jvhnxs, 'onerror': z6kqh, 'onCreate': function (ma$l9b) {
          yclb$0 = ma$l9b, tp37r['imgCache'][vkjnzh] = ma$l9b;
        } });
    }, t8k6;
  }(),
      gewu2 = function () {
    function wgue1() {}return rqd5t8(wgue1, 'laya.wx.mini.MiniInput'), wgue1['_createInputElement'] = function () {
      _uegw4['_initInput'](_uegw4['area'] = u4e_gw['createElement']('textarea')), _uegw4['_initInput'](_uegw4['input'] = u4e_gw['createElement']('input')), _uegw4['inputContainer'] = u4e_gw['createElement']('div'), _uegw4['inputContainer']['style']['position'] = 'absolute', _uegw4['inputContainer']['style']['zIndex'] = 0x186a0, u4e_gw['container']['appendChild'](_uegw4['inputContainer']), _uegw4['inputContainer']['setPos'] = function (fxvjn, by4co0) {
        _uegw4['inputContainer']['style']['left'] = fxvjn + 'px', _uegw4['inputContainer']['style']['top'] = by4co0 + 'px';
      }, _2ugew['stage']['on']('resize', null, wgue1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (abl9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u_wge2['_soundClass'] = vznjhs, u_wge2['_musicClass'] = vznjhs, window['_videoClass'] = _wg2;
    }, wgue1['_onStageResize'] = function () {
      var g1f2w = _2ugew['stage']['_canvasTransform']['identity']();g1f2w['scale'](u4e_gw['width'] / hkn['canvas']['width'] / ml$acb['getPixelRatio'](), u4e_gw['height'] / hkn['canvas']['height'] / ml$acb['getPixelRatio']());
    }, wgue1['wxinputFocus'] = function (bmcy) {
      var qtkd8 = _uegw4['inputElement']['target'];if (qtkd8 && !qtkd8['editable']) return;rq5t78['window']['wx']['offKeyboardConfirm'](), rq5t78['window']['wx']['offKeyboardInput'](), rq5t78['window']['wx']['showKeyboard']({ 'defaultValue': qtkd8['text'], 'maxLength': qtkd8['maxChars'], 'multiple': qtkd8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (bl$m9a) {}, 'fail': function (dtq6k) {} }), rq5t78['window']['wx']['onKeyboardConfirm'](function (t7r53) {
        var _u2e = t7r53 ? t7r53['value'] : '';qtkd8['text'] = _u2e, qtkd8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rq5t78['window']['wx']['onKeyboardInput'](function (i53r7p) {
        var hxnvs = i53r7p ? i53r7p['value'] : '';if (!qtkd8['multiline']) {
          if (hxnvs['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }qtkd8['text'] = hxnvs, qtkd8['event']('input');
      });
    }, wgue1['inputEnter'] = function () {
      _uegw4['inputElement']['target']['focus'] = ![];
    }, wgue1['wxinputblur'] = function () {
      wgue1['hideKeyboard']();
    }, wgue1['hideKeyboard'] = function () {
      rq5t78['window']['wx']['offKeyboardConfirm'](), rq5t78['window']['wx']['offKeyboardInput'](), rq5t78['window']['wx']['hideKeyboard']({ 'success': function (mbcly$) {
          console['log']('隐藏键盘');
        }, 'fail': function (ow_u4e) {
          console['log']('隐藏键盘出错:' + (ow_u4e ? ow_u4e['errMsg'] : ''));
        } });
    }, wgue1;
  }(),
      zvhkn = function () {
    function c$ylb() {}rqd5t8(c$ylb, 'laya.wx.mini.MiniLoader');var e_w4 = c$ylb['prototype'];return e_w4['load'] = function (f1gux, $bymlc, co04b, vzn6k, snxvjf) {
      co04b === void 0x0 && (co04b = !![]), snxvjf === void 0x0 && (snxvjf = ![]);var _oew40 = this;_oew40['_url'] = f1gux;if (f1gux['indexOf']('data:image') === 0x0) _oew40['_type'] = $bymlc = 'image';else _oew40['_type'] = $bymlc || ($bymlc = _oew40['getTypeFromUrl'](f1gux));_oew40['_cache'] = co04b, _oew40['_data'] = null;var t53 = 'ascii';if (f1gux['indexOf']('.fnt') != -0x1) t53 = 'utf8';else $bymlc == 'arraybuffer' && (t53 = '');;var zhvn = cma$l['getFileExtension'](f1gux);if (c$ylb['_fileTypeArr']['indexOf'](zhvn) != -0x1) rq5t78['EnvConfig']['load']['call'](this, f1gux, $bymlc, co04b, vzn6k, snxvjf);else {
        if (!b$mla9['getFileInfo'](f1gux)) {
          if (f1gux['indexOf']('layaNativeDir/') != -0x1) {
            if (rq5t78['isZiYu']) {
              var kz6qhd = b$mla9['ziyuFileData'][f1gux];_oew40['onLoaded'](kz6qhd);return;
            } else {
              cosnole['log']('read read'), b$mla9['read'](f1gux, t53, new ybc0$o(c$ylb, c$ylb['onReadNativeCallBack'], [t53, f1gux, $bymlc, co04b, vzn6k, snxvjf, _oew40]));return;
            }
          }if (sjxvh['rootPath'] == '') var l0cb$ = f1gux;else l0cb$ = f1gux['split'](sjxvh['rootPath'])[0x0];f1gux['indexOf']('http://') != -0x1 || f1gux['indexOf']('https://') != -0x1 ? rq5t78['EnvConfig']['load']['call'](_oew40, f1gux, $bymlc, co04b, vzn6k, snxvjf) : b$mla9['readFile'](l0cb$, t53, new ybc0$o(c$ylb, c$ylb['onReadNativeCallBack'], [t53, f1gux, $bymlc, co04b, vzn6k, snxvjf, _oew40]), f1gux);
        } else rq5t78['EnvConfig']['load']['call'](this, f1gux, $bymlc, co04b, vzn6k, snxvjf);
      }
    }, e_w4['resMgrLoad'] = function (amb$l9, z6hvnk, ow_4ue, vhjszn, z6dkq, njs1, albm$9) {
      ow_4ue === void 0x0 && (ow_4ue = 0x0), vhjszn === void 0x0 && (vhjszn = ![]), z6dkq === void 0x0 && (z6dkq = ![]), njs1 === void 0x0 && (njs1 = 0x0), albm$9 === void 0x0 && (albm$9 = 0x3), amb$l9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', amb$l9), rq5t78['EnvConfig']['resMgrLoad'](amb$l9, (by$m, c04ob, w1fg) => {
        c$ylb['prototype']['resMgrLoadCallBack'](by$m, c04ob, w1fg, z6hvnk);
      }, ow_4ue, vhjszn, z6dkq, njs1, albm$9);
    }, e_w4['resMgrLoadCallBack'] = function (g1uf2w, t8qdk, t86d, y$c0bl) {
      console['log']('buff:::', g1uf2w, t86d, b$mla9['fileNativeDir'] + '///' + b$mla9['fileListName']), y$c0bl(g1uf2w, t8qdk, t86d);
    }, e_w4['clearRes'] = function (svfjx, pt35r7) {
      pt35r7 === void 0x0 && (pt35r7 = ![]);var $o0c = this;$o0c['clearRes'](svfjx, pt35r7);var fu1gw2 = b$mla9['getFileInfo'](svfjx);if (fu1gw2 && (svfjx['indexOf']('http://') != -0x1 || svfjx['indexOf']('https://') != -0x1)) {
        var ylm$b = fu1gw2['md5'],
            g21fw = b$mla9['getFileNativePath'](ylm$b);b$mla9['remove'](g21fw);
      }
    }, c$ylb['onReadNativeCallBack'] = function (sx21jf, xn1, zjsnvh, o$cy0, zvjnkh, o$0c, uw2e1, nvzk, szjn) {
      o$cy0 === void 0x0 && (o$cy0 = !![]), o$0c === void 0x0 && (o$0c = ![]), nvzk === void 0x0 && (nvzk = 0x0);if (!nvzk) {
        var g1fx2;if (zjsnvh == 'json' || zjsnvh == 'atlas') g1fx2 = rq5t78['getJson'](szjn['data']);else zjsnvh == 'xml' ? g1fx2 = cma$l['parseXMLFromString'](szjn['data']) : g1fx2 = szjn['data'];uw2e1['onLoaded'](g1fx2), !rq5t78['isZiYu'] && rq5t78['isPosMsgYu'] && zjsnvh != 'arraybuffer' && wx['postMessage']({ 'url': xn1, 'data': g1fx2, 'isLoad': !![] });
      } else nvzk == 0x1 && rq5t78['EnvConfig']['load']['call'](uw2e1, xn1, zjsnvh, o$cy0, zvjnkh, o$0c);
    }, wf1gu2(c$ylb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), c$ylb;
  }(),
      b$mla9 = function (khnzjv) {
    function c0_4yo() {
      c0_4yo['__super']['call'](this);;
    }return rqd5t8(c0_4yo, 'laya.wx.mini.MiniFileMgr', khnzjv), c0_4yo['isLoadFile'] = function (dr86qt) {
      return c0_4yo['_fileTypeArr']['indexOf'](dr86qt) != -0x1 ? !![] : ![];
    }, c0_4yo['getFileInfo'] = function (kh6qzd) {
      var ug12fw = kh6qzd['split']('?')[0x0],
          qk6d8z = c0_4yo['filesListObj'][ug12fw];if (qk6d8z == null) return null;else return qk6d8z;return null;
    }, c0_4yo['onFileUpdate'] = function (ge1uw2, y4bco) {
      var bcoy40 = ge1uw2['split']('/'),
          d6zq = bcoy40[bcoy40['length'] - 0x1],
          e2u = c0_4yo['getFileInfo'](y4bco);if (e2u == null) c0_4yo['onSaveFile'](y4bco, d6zq);else {
        if (e2u['readyUrl'] != y4bco) c0_4yo['remove'](d6zq, y4bco);
      }
    }, c0_4yo['exits'] = function (q6t8dr, r5783) {
      var hnv = c0_4yo['getFileNativePath'](q6t8dr);c0_4yo['fs']['getFileInfo']({ 'filePath': hnv, 'success': function (fgw2) {
          r5783 != null && r5783['runWith']([0x0, fgw2]);
        }, 'fail': function (o4y0e_) {
          r5783 != null && r5783['runWith']([0x1, o4y0e_]);
        } });
    }, c0_4yo['read'] = function (guw_e4, ab9$l, blma$, fu1gw) {
      ab9$l === void 0x0 && (ab9$l = 'ascill'), fu1gw === void 0x0 && (fu1gw = '');var g_u2w;fu1gw != '' ? g_u2w = c0_4yo['getFileNativePath'](guw_e4) : g_u2w = guw_e4, c0_4yo['fs']['readFile']({ 'filePath': g_u2w, 'encoding': ab9$l, 'success': function (lc$ba) {
          blma$ != null && blma$['runWith']([0x0, lc$ba]);
        }, 'fail': function (dqkt6) {
          if (dqkt6 && fu1gw != '') c0_4yo['down'](fu1gw, ab9$l, blma$, fu1gw);else blma$ != null && blma$['runWith']([0x1]);
        } });
    }, c0_4yo['readNativeFile'] = function (rpt73, fu2gx1) {
      c0_4yo['fs']['readFile']({ 'filePath': rpt73, 'encoding': '', 'success': function (f1uwg) {
          fu2gx1 != null && fu2gx1['runWith']([0x0]);
        }, 'fail': function (pr735t) {
          fu2gx1 != null && fu2gx1['runWith']([0x1]);
        } });
    }, c0_4yo['down'] = function (qdtr68, cyo0$b, $clby, u1fwg) {
      cyo0$b === void 0x0 && (cyo0$b = 'ascill'), u1fwg === void 0x0 && (u1fwg = '');var svhnxj = c0_4yo['getFileNativePath'](u1fwg),
          qzd6 = c0_4yo['wxdown']({ 'url': qdtr68, 'filePath': svhnxj, 'success': function (jvxsf) {
          if (jvxsf['statusCode'] === 0xc8) c0_4yo['readFile'](jvxsf['filePath'], cyo0$b, $clby, u1fwg);
        }, 'fail': function (jvsxf) {
          $clby != null && $clby['runWith']([0x1, jvsxf]);
        } });qzd6['onProgressUpdate'](function (owe40) {
        $clby != null && $clby['runWith']([0x2, owe40['progress']]);
      });
    }, c0_4yo['readFile'] = function (fs2xj, fu1xg2, dkqt6, qdhkz) {
      fu1xg2 === void 0x0 && (fu1xg2 = 'ascill'), qdhkz === void 0x0 && (qdhkz = ''), c0_4yo['fs']['readFile']({ 'filePath': fs2xj, 'encoding': fu1xg2, 'success': function (t5378) {
          if (fs2xj['indexOf']('http://') != -0x1 || fs2xj['indexOf']('https://') != -0x1) c0_4yo['onFileUpdate'](fs2xj, qdhkz);dkqt6 != null && dkqt6['runWith']([0x0, t5378]);
        }, 'fail': function (r5qt7) {
          if (r5qt7) dkqt6 != null && dkqt6['runWith']([0x1, r5qt7]);
        } });
    }, c0_4yo['downImg'] = function (kh6znv, tp3r7, cbmy$l) {
      cbmy$l === void 0x0 && (cbmy$l = '');var vnk6h = c0_4yo['wxdown']({ 'url': kh6znv, 'success': function (hjszvn) {
          hjszvn['statusCode'] === 0xc8 && c0_4yo['copyFile'](hjszvn['tempFilePath'], cbmy$l, tp3r7);
        }, 'fail': function (sx1jnf) {
          tp3r7 != null && tp3r7['runWith']([0x1, sx1jnf]);
        } });
    }, c0_4yo['copyFile'] = function (d86k, hjvzn, euwg_2) {
      var hvk6n = d86k['split']('/'),
          jx2sf1 = hvk6n[hvk6n['length'] - 0x1],
          p7i53 = hjvzn['split']('?')[0x0],
          qd85rt = c0_4yo['getFileInfo'](hjvzn),
          b0$oc = c0_4yo['getFileNativePath'](jx2sf1);c0_4yo['fs']['copyFile']({ 'srcPath': d86k, 'destPath': b0$oc, 'success': function (kvz6hd) {
          if (!qd85rt) c0_4yo['onSaveFile'](hjvzn, jx2sf1), euwg_2 != null && euwg_2['runWith']([0x0]);else {
            if (qd85rt['readyUrl'] != hjvzn) c0_4yo['remove'](jx2sf1, hjvzn, euwg_2);
          }
        }, 'fail': function (kd6t) {
          euwg_2 != null && euwg_2['runWith']([0x1, kd6t]);
        } });
    }, c0_4yo['getFileNativePath'] = function (r7ip5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r7ip5;
    }, c0_4yo['remove'] = function (yob0c, _y0oe4, qrt85d) {
      _y0oe4 === void 0x0 && (_y0oe4 = '');var jfvnx = c0_4yo['getFileInfo'](_y0oe4),
          vknj = c0_4yo['getFileNativePath'](jfvnx['md5']);_2ugew['loader']['clearRes'](jfvnx['readyUrl']), c0_4yo['fs']['unlink']({ 'filePath': vknj, 'success': function (svxjnh) {
          if (_y0oe4 != '') c0_4yo['onSaveFile'](_y0oe4, yob0c);qrt85d != null && qrt85d['runWith']([0x0]);
        }, 'fail': function (_weo04) {} });
    }, c0_4yo['onSaveFile'] = function (fx1nsj, nzshvj) {
      var o_euw = fx1nsj['split']('?')[0x0];c0_4yo['filesListObj'][o_euw] = { 'md5': nzshvj, 'readyUrl': fx1nsj }, c0_4yo['fs']['writeFile']({ 'filePath': c0_4yo['fileNativeDir'] + '/' + c0_4yo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c0_4yo['filesListObj']), 'success': function (lb$myc) {
          console['log']('写入测试测试成功：', lb$myc);
        }, 'fail': function (qk8zd6) {
          console['log']('写入测试测试失败：', qk8zd6);
        } });
    }, c0_4yo['existDir'] = function (ybo0c, u21ew) {
      c0_4yo['fs']['mkdir']({ 'dirPath': ybo0c, 'success': function (vjnshz) {
          u21ew != null && u21ew['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_w2ueg) {
          if (_w2ueg['errMsg']['indexOf']('file already exists') != -0x1) c0_4yo['readSync'](c0_4yo['fileListName'], 'utf8', u21ew);else u21ew != null && u21ew['runWith']([0x1, _w2ueg]);
        } });
    }, c0_4yo['readSync'] = function (cblm$a, jfnvx, jf2x, jsfx1n) {
      jfnvx === void 0x0 && (jfnvx = 'ascill'), jsfx1n === void 0x0 && (jsfx1n = '');var c4yb0o = c0_4yo['getFileNativePath'](cblm$a),
          cyo_;try {
        cyo_ = c0_4yo['fs']['readFileSync'](c4yb0o), jf2x != null && jf2x['runWith']([0x0, { 'data': cyo_ }]);
      } catch (u2_) {
        jf2x != null && jf2x['runWith']([0x1]);
      }
    }, c0_4yo['readCache'] = function () {}, c0_4yo['writeCache'] = function (_gu4we) {
      var c$mabl = readyUrl['split']('?')[0x0];c0_4yo['filesListObj'][c$mabl] = { 'md5': md5Name, 'readyUrl': readyUrl }, c0_4yo['fs']['writeFile']({ 'filePath': c0_4yo['fileNativeDir'] + '/' + c0_4yo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c0_4yo['filesListObj']), 'success': function (vkh6) {}, 'fail': function (albcm$) {} });
    }, c0_4yo['setNativeFileDir'] = function (f2gx) {
      c0_4yo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + f2gx;
    }, c0_4yo['filesListObj'] = {}, c0_4yo['fileNativeDir'] = null, c0_4yo['fileListName'] = 'layaairfiles.txt', c0_4yo['ziyuFileData'] = {}, wf1gu2(c0_4yo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), c0_4yo;
  }(r753tp),
      vznjhs = function (z6hq) {
    function o4y0cb() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], o4y0cb['__super']['call'](this), this['_sound'] = o4y0cb['_createSound'](), this['_chanell'] = new p57rt3(this['_sound']);
    }rqd5t8(o4y0cb, 'laya.wx.mini.MiniSound', z6hq);var kq6d8z = o4y0cb['prototype'];return kq6d8z['load'] = function (e40o_w) {
      var xvfjsn = this;e40o_w = sjxvh['formatURL'](e40o_w), this['url'] = e40o_w;if (o4y0cb['_audioCache'][e40o_w]) {
        this['event']('complete');return;
      }function qr6t8d() {
        if (o4y0cb['_null'] != undefined) xvfjsn['_sound']['onCanplay'](o4y0cb['_null']), xvfjsn['_sound']['onError'](o4y0cb['_null']);else try {
          xvfjsn['_sound']['onCanplay'](null), xvfjsn['_sound']['onError'](null), o4y0cb['_null'] = null;
        } catch (zhk6d) {
          console['warn']('[wxmini] _clearSound:' + zhk6d), xvfjsn['_sound']['onCanplay'](nsxjvh), xvfjsn['_sound']['onError'](nsxjvh), o4y0cb['_null'] = nsxjvh;
        }
      }function nkhzv6() {
        szvhnj['loaded'] = !![], szvhnj['event']('complete'), o4y0cb['_audioCache'][szvhnj['url']] = szvhnj;
      }function tp3r($0b) {
        console['error']('errCode=' + $0b['errCode'] + '  errMsg=' + $0b['errMsg']), szvhnj['event']('error');
      }function nsxjvh() {}this['_sound']['onCanplay'](nkhzv6), this['_sound']['onError'](tp3r), this['_sound']['src'] = e40o_w;var szvhnj = this;
    }, kq6d8z['play'] = function (_uwoe4, lca$bm) {
      _uwoe4 === void 0x0 && (_uwoe4 = 0x0), lca$bm === void 0x0 && (lca$bm = 0x0);var knzhv, gwuf;if (this['url'] == u_wge2['_tMusic']) {
        if (!o4y0cb['_musicAudio']) o4y0cb['_musicAudio'] = this['_sound'];knzhv = o4y0cb['_musicAudio'], gwuf = this['_chanell'];
      } else knzhv = this['_sound'], gwuf = this['_chanell'];return knzhv['src'] = this['url'], knzhv['startTime'] = 0x0, gwuf['isStopped'] && (gwuf['url'] = this['url'], gwuf['loops'] = lca$bm, gwuf['startTime'] = _uwoe4, gwuf['play'](), u_wge2['addChannel'](gwuf)), gwuf;
    }, kq6d8z['dispose'] = function () {
      var jfxsn1 = o4y0cb['_audioCache'][this['url']];jfxsn1 && (jfxsn1['src'] = '', delete o4y0cb['_audioCache'][this['url']]);
    }, y$cbo(0x0, kq6d8z, 'duration', function () {
      return this['_sound']['duration'];
    }), o4y0cb['_createSound'] = function () {
      o4y0cb['_id']++;var r578 = rq5t78['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return r578;
    }, o4y0cb['_musicAudio'] = null, o4y0cb['_id'] = 0x0, o4y0cb['_audioCache'] = {}, o4y0cb['_null'] = undefined, o4y0cb;
  }(r753tp),
      p57rt3 = function (m$bc) {
    function nvjx(kqtd8) {
      this['_audio'] = null, this['_onEnd'] = null, nvjx['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = kqtd8, this['_onEnd'] = cma$l['bind'](this['__onEnd'], this), kqtd8['onEnded'](this['_onEnd']);
    }rqd5t8(nvjx, 'laya.wx.mini.MiniSoundChannel', m$bc);var r5d = nvjx['prototype'];return r5d['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_2ugew['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r5d['__onNull'] = function () {}, r5d['play'] = function () {
      this['isStopped'] = ![], u_wge2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, r5d['stop'] = function () {
      this['isStopped'] = !![], u_wge2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, r5d['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, r5d['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u_wge2['addChannel'](this), this['_audio']['play']();
    }, y$cbo(0x0, r5d, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), y$cbo(0x0, r5d, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), y$cbo(0x0, r5d, 'volume', function () {
      return 0x1;
    }, function (s1fnjx) {}), nvjx['_null'] = undefined, nvjx;
  }(almb$),
      _wg2 = function () {
    function mbla9() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rq5t78['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }rqd5t8(mbla9, 'laya.wx.mini.MiniVideo');var ktq86 = mbla9['prototype'];return ktq86['on'] = function (svhj, kh6vnz, njvshz) {
      if (svhj == 'loadedmetadata') this['onPlayFunc'] = njvshz['bind'](kh6vnz), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else svhj == 'ended' && (this['onEndedFunC'] = njvshz['bind'](kh6vnz), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, ktq86['onTimeUpdateFunc'] = function (mylc$b) {
      this['position'] = mylc$b['position'], this['_duration'] = mylc$b['duration'];
    }, ktq86['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, ktq86['onended'] = function (xgfu21, z6qhkd) {
      this['onEndedFunC'] = z6qhkd['bind'](xgfu21), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, ktq86['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, ktq86['off'] = function (e4_wuo, lb$cy, hvjnz) {
      if (e4_wuo == 'loadedmetadata') this['onPlayFunc'] = hvjnz['bind'](lb$cy), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else e4_wuo == 'ended' && (this['onEndedFunC'] = hvjnz['bind'](lb$cy), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, ktq86['load'] = function (lby$0) {
      if (!this['videoElement']) return;this['videoElement']['src'] = lby$0;
    }, ktq86['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, ktq86['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, ktq86['size'] = function ($bmlcy, hkqz) {
      if (!this['videoElement']) return;this['videoElement']['width'] = $bmlcy, this['videoElement']['height'] = hkqz;
    }, ktq86['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, ktq86['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, y$cbo(0x0, ktq86, 'duration', function () {
      return this['_duration'];
    }), y$cbo(0x0, ktq86, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (t57rp3) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = t57rp3;
    }), y$cbo(0x0, ktq86, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), y$cbo(0x0, ktq86, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), y$cbo(0x0, ktq86, 'ended', function () {
      return this['videoend'];
    }), y$cbo(0x0, ktq86, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (dq8kz) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = dq8kz;
    }), y$cbo(0x0, ktq86, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (qd86rt) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = qd86rt;
    }), y$cbo(0x0, ktq86, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (z8dq6k) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = z8dq6k;
    }), y$cbo(0x0, ktq86, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), y$cbo(0x0, ktq86, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (d8kz) {
      if (!this['videoElement']) return;this['videoElement']['x'] = d8kz;
    }), y$cbo(0x0, ktq86, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (gw1fu2) {
      if (!this['videoElement']) return;this['videoElement']['y'] = gw1fu2;
    }), y$cbo(0x0, ktq86, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), y$cbo(0x0, ktq86, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (ew_u4) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ew_u4;
    }), y$cbo(0x0, ktq86, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (s1fxj) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = s1fxj;
    }), y$cbo(0x0, ktq86, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (hnjzs) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = hnjzs;
    }), mbla9;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t6dqk in Laya) {
    var nvxjsh = Laya[t6dqk];nvxjsh && nvxjsh['__isclass'] && (exports[t6dqk] = nvxjsh);
  }
});