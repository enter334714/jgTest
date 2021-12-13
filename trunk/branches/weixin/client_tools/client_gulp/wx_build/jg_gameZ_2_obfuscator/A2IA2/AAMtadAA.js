var d = wx.$A;
(function (window, document, yxqob) {
  var u1pki3 = yxqob['un'],
      $a9mev = yxqob['uns'],
      oqbt_x = yxqob['static'],
      snd6e = yxqob['class'],
      txiqyb = yxqob['getset'],
      d6zhjs = yxqob['__newvec'],
      k831up = laya['utils']['Browser'],
      jnms = laya['events']['Event'],
      _qb = laya['events']['EventDispatcher'],
      ipuk13 = laya['resource']['HTMLImage'],
      $ma9v = laya['utils']['Handler'],
      kui13 = laya['display']['Input'],
      r7gf5 = laya['net']['Loader'],
      $ndm9 = laya['maths']['Matrix'],
      med$n = laya['renders']['Render'],
      oq_4bg = laya['utils']['RunDriver'],
      jd6hzs = laya['media']['Sound'],
      _f7g4 = laya['media']['SoundChannel'],
      x_obqt = laya['media']['SoundManager'],
      gq_to = laya['display']['Stage'],
      xtoby = laya['net']['URL'],
      ogb_4q = laya['utils']['Utils'],
      yxki1p = function () {
    function txpi1() {}return snd6e(txpi1, 'laya.wx.mini.MiniAdpter'), txpi1['getJson'] = function ($980av) {
      return JSON['parse']($980av);
    }, txpi1['init'] = function (qyxib, piby) {
      qyxib === void 0x0 && (qyxib = ![]), piby === void 0x0 && (piby = ![]);if (txpi1['_inited']) return;txpi1['window'] = window;if (txpi1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;txpi1['_inited'] = !![], txpi1['isZiYu'] = piby, txpi1['isPosMsgYu'] = qyxib, txpi1['EnvConfig'] = {}, !txpi1['isZiYu'] && (piybx['setNativeFileDir']('/layaairGame'), piybx['existDir'](piybx['fileNativeDir'], $ma9v['create'](txpi1, txpi1['onMkdirCallBack']))), txpi1['window']['focus'] = function () {}, yxqob['getUrlPath'] = function () {}, txpi1['window']['logtime'] = function (jhlz6) {}, txpi1['window']['alertTimeLog'] = function (j2zlwh) {}, txpi1['window']['resetShareInfo'] = function () {}, txpi1['window']['CanvasRenderingContext2D'] = function () {}, txpi1['window']['CanvasRenderingContext2D']['prototype'] = txpi1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], txpi1['window']['document']['body']['appendChild'] = function () {}, txpi1['EnvConfig']['pixelRatioInt'] = 0x0, oq_4bg['getPixelRatio'] = txpi1['pixelRatio'], txpi1['_preCreateElement'] = k831up['createElement'], k831up['createElement'] = txpi1['createElement'], oq_4bg['createShaderCondition'] = txpi1['createShaderCondition'], ogb_4q['parseXMLFromString'] = txpi1['parseXMLFromString'], kui13['_createInputElement'] = y1pkui['_createInputElement'], txpi1['EnvConfig']['load'] = r7gf5['prototype']['load'], r7gf5['prototype']['load'] = zj6sdh['prototype']['load'], txpi1['isZiYu'] && qyxib && wx['onMessage'](function (e$09a) {
        e$09a['isLoad'] && (piybx['ziyuFileData'][e$09a['url']] = e$09a['data']);
      });
    }, txpi1['onMkdirCallBack'] = function (rg_4o, l2w) {
      if (!rg_4o) piybx['filesListObj'] = JSON['parse'](l2w['data']);
    }, txpi1['pixelRatio'] = function () {
      if (!txpi1['EnvConfig']['pixelRatioInt']) try {
        var tqiybx = wx['getSystemInfoSync']();return txpi1['EnvConfig']['pixelRatioInt'] = tqiybx['pixelRatio'], tqiybx = tqiybx, tqiybx['pixelRatio'];
      } catch (v9a08$) {}return txpi1['EnvConfig']['pixelRatioInt'];
    }, txpi1['createElement'] = function (bxytp) {
      if (bxytp == 'canvas') {
        var uk3810;return txpi1['idx'] == 0x1 ? txpi1['isZiYu'] ? (uk3810 = sharedCanvas, uk3810['style'] = {}) : uk3810 = window['canvas'] : uk3810 = window['wx']['createCanvas'](), txpi1['idx']++, uk3810;
      } else {
        if (bxytp == 'textarea' || bxytp == 'input') return txpi1['onCreateInput'](bxytp);else {
          if (bxytp == 'div') {
            var qgto_ = txpi1['_preCreateElement'](bxytp);return qgto_['contains'] = function (man9$) {
              return null;
            }, qgto_['removeChild'] = function (py1ik) {}, qgto_;
          } else return txpi1['_preCreateElement'](bxytp);
        }
      }
    }, txpi1['onCreateInput'] = function (e9$v0) {
      var xtbyiq = txpi1['_preCreateElement'](e9$v0);return xtbyiq['focus'] = y1pkui['wxinputFocus'], xtbyiq['blur'] = y1pkui['wxinputblur'], xtbyiq['style'] = {}, xtbyiq['value'] = 0x0, xtbyiq['parentElement'] = {}, xtbyiq['placeholder'] = {}, xtbyiq['type'] = {}, xtbyiq['setColor'] = function (v0e) {}, xtbyiq['setType'] = function (p831uk) {}, xtbyiq['setFontFace'] = function (h2wj) {}, xtbyiq['addEventListener'] = function (_f4gr) {}, xtbyiq['contains'] = function (xyptb) {
        return null;
      }, xtbyiq['removeChild'] = function ($ane9m) {}, xtbyiq;
    }, txpi1['createShaderCondition'] = function (go_bq) {
      var hsz6d = this,
          a9e$v0 = function () {
        var f5gr74 = go_bq;return hsz6d[go_bq['replace']('this.', '')];
      };return a9e$v0;
    }, txpi1['EnvConfig'] = null, txpi1['window'] = null, txpi1['_preCreateElement'] = null, txpi1['_inited'] = ![], txpi1['wxRequest'] = null, txpi1['systemInfo'] = null, txpi1['version'] = '0.0.1', txpi1['isZiYu'] = ![], txpi1['isPosMsgYu'] = ![], txpi1['parseXMLFromString'] = function (o_4gr) {
      var xkiy1p, btxqyo;o_4gr = o_4gr['replace'](/>\s+</g, '><');try {
        xkiy1p = new window['Parser']['DOMParser']()['parseFromString'](o_4gr, 'text/xml');
      } catch (dmse$) {
        throw '需要引入xml解析库文件';
      }return xkiy1p;
    }, txpi1['idx'] = 0x1, txpi1;
  }(),
      txi1p = function () {
    function jhwsz() {}snd6e(jhwsz, 'laya.wx.mini.MiniImage');var g7f4_r = jhwsz['prototype'];return g7f4_r['_loadImage'] = function (am$9ev) {
      var _gobq4 = this,
          ndsem$ = ![];am$9ev['indexOf']('layaNativeDir/') == -0x1 && (ndsem$ = !![], am$9ev = xtoby['formatURL'](am$9ev));if (!piybx['getFileInfo'](am$9ev)) {
        if (am$9ev['indexOf']('http://') != -0x1 || am$9ev['indexOf']('https://') != -0x1) piybx['downImg'](am$9ev, new $ma9v(jhwsz, jhwsz['onDownImgCallBack'], [am$9ev, _gobq4]), am$9ev);else jhwsz['onCreateImage'](am$9ev, _gobq4, !![]);
      } else jhwsz['onCreateImage'](am$9ev, _gobq4, !ndsem$);
    }, jhwsz['onDownImgCallBack'] = function (yiuk, $densm, mnd$s) {
      if (!mnd$s) jhwsz['onCreateImage'](yiuk, $densm);else $densm['onError'](null);
    }, jhwsz['onCreateImage'] = function (bxyqti, obxt_q, bix) {
      bix === void 0x0 && (bix = ![]);var to_xq;if (!bix) {
        var med6ns = piybx['getFileInfo'](bxyqti),
            ds6nh = med6ns['md5'];to_xq = piybx['getFileNativePath'](ds6nh);
      } else to_xq = bxyqti;if (obxt_q['imgCache'] == null) obxt_q['imgCache'] = {};var sd6zhj;function njd6sm() {
        sd6zhj['onload'] = null, sd6zhj['onerror'] = null, delete obxt_q['imgCache'][bxyqti];
      };var ibyxpt = function () {
        njd6sm(), obxt_q['onLoaded'](sd6zhj);
      },
          qxoyt = function () {
        njd6sm(), obxt_q['event']('error', 'Load image failed');
      };obxt_q['_type'] == 'nativeimage' ? (sd6zhj = new k831up['window']['Image'](), sd6zhj['crossOrigin'] = '', sd6zhj['onload'] = ibyxpt, sd6zhj['onerror'] = qxoyt, sd6zhj['src'] = to_xq, obxt_q['imgCache'][bxyqti] = sd6zhj) : new ipuk13['create'](to_xq, { 'onload': ibyxpt, 'onerror': qxoyt, 'onCreate': function (nd6hjs) {
          sd6zhj = nd6hjs, obxt_q['imgCache'][bxyqti] = nd6hjs;
        } });
    }, jhwsz;
  }(),
      y1pkui = function () {
    function djns6m() {}return snd6e(djns6m, 'laya.wx.mini.MiniInput'), djns6m['_createInputElement'] = function () {
      kui13['_initInput'](kui13['area'] = k831up['createElement']('textarea')), kui13['_initInput'](kui13['input'] = k831up['createElement']('input')), kui13['inputContainer'] = k831up['createElement']('div'), kui13['inputContainer']['style']['position'] = 'absolute', kui13['inputContainer']['style']['zIndex'] = 0x186a0, k831up['container']['appendChild'](kui13['inputContainer']), kui13['inputContainer']['setPos'] = function (_obq, ixk1py) {
        kui13['inputContainer']['style']['left'] = _obq + 'px', kui13['inputContainer']['style']['top'] = ixk1py + 'px';
      }, yxqob['stage']['on']('resize', null, djns6m['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (v$098a) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), x_obqt['_soundClass'] = gorf, x_obqt['_musicClass'] = gorf;
    }, djns6m['_onStageResize'] = function () {
      var v0ea9 = yxqob['stage']['_canvasTransform']['identity']();v0ea9['scale'](k831up['width'] / med$n['canvas']['width'] / oq_4bg['getPixelRatio'](), k831up['height'] / med$n['canvas']['height'] / oq_4bg['getPixelRatio']());
    }, djns6m['wxinputFocus'] = function (v30ua8) {
      var kxy1i = kui13['inputElement']['target'];if (kxy1i && !kxy1i['editable']) return;yxki1p['window']['wx']['offKeyboardConfirm'](), yxki1p['window']['wx']['offKeyboardInput'](), yxki1p['window']['wx']['showKeyboard']({ 'defaultValue': kxy1i['text'], 'maxLength': kxy1i['maxChars'], 'multiple': kxy1i['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tqbixy) {}, 'fail': function (yqibtx) {} }), yxki1p['window']['wx']['onKeyboardConfirm'](function (qtboxy) {
        var e$nd = qtboxy ? qtboxy['value'] : '';kxy1i['text'] = e$nd, kxy1i['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), yxki1p['window']['wx']['onKeyboardInput'](function (p1yuki) {
        var qbog = p1yuki ? p1yuki['value'] : '';if (!kxy1i['multiline']) {
          if (qbog['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kxy1i['text'] = qbog, kxy1i['event']('input');
      });
    }, djns6m['inputEnter'] = function () {
      kui13['inputElement']['target']['focus'] = ![];
    }, djns6m['wxinputblur'] = function () {
      djns6m['hideKeyboard']();
    }, djns6m['hideKeyboard'] = function () {
      yxki1p['window']['wx']['offKeyboardConfirm'](), yxki1p['window']['wx']['offKeyboardInput'](), yxki1p['window']['wx']['hideKeyboard']({ 'success': function (r4g_f7) {
          console['log']('隐藏键盘');
        }, 'fail': function ($v90a) {
          console['log']('隐藏键盘出错:' + ($v90a ? $v90a['errMsg'] : ''));
        } });
    }, djns6m;
  }(),
      zj6sdh = function () {
    function q_gotb() {}snd6e(q_gotb, 'laya.wx.mini.MiniLoader');var xotyb = q_gotb['prototype'];return xotyb['load'] = function (qg_ob4, btxiqy, obxq, hnsj6, a$ev0) {
      obxq === void 0x0 && (obxq = !![]), a$ev0 === void 0x0 && (a$ev0 = ![]);var msdne = this;msdne['_url'] = qg_ob4;if (qg_ob4['indexOf']('data:image') === 0x0) msdne['_type'] = btxiqy = 'image';else msdne['_type'] = btxiqy || (btxiqy = msdne['getTypeFromUrl'](qg_ob4));msdne['_cache'] = obxq, msdne['_data'] = null;var dem6 = 'ascii';if (qg_ob4['indexOf']('.fnt') != -0x1) dem6 = 'utf8';else btxiqy == 'arraybuffer' && (dem6 = '');;var _4f7gr = ogb_4q['getFileExtension'](qg_ob4);if (q_gotb['_fileTypeArr']['indexOf'](_4f7gr) != -0x1) yxki1p['EnvConfig']['load']['call'](this, qg_ob4, btxiqy, obxq, hnsj6, a$ev0);else {
        if (!piybx['getFileInfo'](qg_ob4)) {
          if (qg_ob4['indexOf']('layaNativeDir/') != -0x1) {
            if (yxki1p['isZiYu']) {
              var o_qbtx = piybx['ziyuFileData'][qg_ob4];msdne['onLoaded'](o_qbtx);return;
            } else {
              cosnole['log']('read read'), piybx['read'](qg_ob4, dem6, new $ma9v(q_gotb, q_gotb['onReadNativeCallBack'], [dem6, qg_ob4, btxiqy, obxq, hnsj6, a$ev0, msdne]));return;
            }
          }if (xtoby['rootPath'] == '') var _tgqbo = qg_ob4;else _tgqbo = qg_ob4['split'](xtoby['rootPath'])[0x0];qg_ob4['indexOf']('http://') != -0x1 || qg_ob4['indexOf']('https://') != -0x1 ? yxki1p['EnvConfig']['load']['call'](msdne, qg_ob4, btxiqy, obxq, hnsj6, a$ev0) : piybx['readFile'](_tgqbo, dem6, new $ma9v(q_gotb, q_gotb['onReadNativeCallBack'], [dem6, qg_ob4, btxiqy, obxq, hnsj6, a$ev0, msdne]), qg_ob4);
        } else yxki1p['EnvConfig']['load']['call'](this, qg_ob4, btxiqy, obxq, hnsj6, a$ev0);
      }
    }, xotyb['resMgrLoad'] = function (tiyq, iykup, yit1x, uk0v38, xti, yp1iu, gqobt) {
      yit1x === void 0x0 && (yit1x = 0x0), uk0v38 === void 0x0 && (uk0v38 = ![]), xti === void 0x0 && (xti = ![]), yp1iu === void 0x0 && (yp1iu = 0x0), gqobt === void 0x0 && (gqobt = 0x3), tiyq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tiyq), yxki1p['EnvConfig']['resMgrLoad'](tiyq, (m6es, obyqtx, h2jwl) => {
        q_gotb['prototype']['resMgrLoadCallBack'](m6es, obyqtx, h2jwl, iykup);
      }, yit1x, uk0v38, xti, yp1iu, gqobt);
    }, xotyb['resMgrLoadCallBack'] = function (p1ixky, _gf4r, tpi1y, a0e9$) {
      console['log']('buff:::', p1ixky, tpi1y, piybx['fileNativeDir'] + '///' + piybx['fileListName']), a0e9$(p1ixky, _gf4r, tpi1y);
    }, xotyb['clearRes'] = function (sem6n, wj6hzl) {
      wj6hzl === void 0x0 && (wj6hzl = ![]);var _bqogt = this;_bqogt['clearRes'](sem6n, wj6hzl);var jhszd6 = piybx['getFileInfo'](sem6n);if (jhszd6 && (sem6n['indexOf']('http://') != -0x1 || sem6n['indexOf']('https://') != -0x1)) {
        var j6sdz = jhszd6['md5'],
            j6zlhw = piybx['getFileNativePath'](j6sdz);piybx['remove'](j6zlhw);
      }
    }, q_gotb['onReadNativeCallBack'] = function (qity, nmsd6j, $va, jshnd, pxtybi, mends6, e6msdn, h6szjw, h2wzjl) {
      jshnd === void 0x0 && (jshnd = !![]), mends6 === void 0x0 && (mends6 = ![]), h6szjw === void 0x0 && (h6szjw = 0x0);if (!h6szjw) {
        var sdhn;if ($va == 'json' || $va == 'atlas') sdhn = yxki1p['getJson'](h2wzjl['data']);else $va == 'xml' ? sdhn = ogb_4q['parseXMLFromString'](h2wzjl['data']) : sdhn = h2wzjl['data'];e6msdn['onLoaded'](sdhn), !yxki1p['isZiYu'] && yxki1p['isPosMsgYu'] && $va != 'arraybuffer' && wx['postMessage']({ 'url': nmsd6j, 'data': sdhn, 'isLoad': !![] });
      } else h6szjw == 0x1 && yxki1p['EnvConfig']['load']['call'](e6msdn, nmsd6j, $va, jshnd, pxtybi, mends6);
    }, oqbt_x(q_gotb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), q_gotb;
  }(),
      piybx = function (h6wsz) {
    function pk8u13() {
      pk8u13['__super']['call'](this);;
    }return snd6e(pk8u13, 'laya.wx.mini.MiniFileMgr', h6wsz), pk8u13['isLoadFile'] = function (xypti) {
      return pk8u13['_fileTypeArr']['indexOf'](xypti) != -0x1 ? !![] : ![];
    }, pk8u13['getFileInfo'] = function (jnd6) {
      var xk1yi = jnd6['split']('?')[0x0],
          u83kp1 = pk8u13['filesListObj'][xk1yi];if (u83kp1 == null) return null;else return u83kp1;return null;
    }, pk8u13['onFileUpdate'] = function (txoq_b, obyt) {
      var xpky1 = txoq_b['split']('/'),
          v$mea9 = xpky1[xpky1['length'] - 0x1],
          b_oxt = pk8u13['getFileInfo'](obyt);if (b_oxt == null) pk8u13['onSaveFile'](obyt, v$mea9);else {
        if (b_oxt['readyUrl'] != obyt) pk8u13['remove'](v$mea9, obyt);
      }
    }, pk8u13['exits'] = function (a$ev90, bqgt) {
      var nsed$m = pk8u13['getFileNativePath'](a$ev90);pk8u13['fs']['getFileInfo']({ 'filePath': nsed$m, 'success': function (ema9) {
          bqgt != null && bqgt['runWith']([0x0, ema9]);
        }, 'fail': function ($a0v) {
          bqgt != null && bqgt['runWith']([0x1, $a0v]);
        } });
    }, pk8u13['read'] = function ($a980v, em$nds, piu1yk, s6jmd) {
      em$nds === void 0x0 && (em$nds = 'ascill'), s6jmd === void 0x0 && (s6jmd = '');var nsmde;s6jmd != '' ? nsmde = pk8u13['getFileNativePath']($a980v) : nsmde = $a980v, pk8u13['fs']['readFile']({ 'filePath': nsmde, 'encoding': em$nds, 'success': function (v$9e0) {
          piu1yk != null && piu1yk['runWith']([0x0, v$9e0]);
        }, 'fail': function (tgbo_q) {
          if (tgbo_q && s6jmd != '') pk8u13['down'](s6jmd, em$nds, piu1yk, s6jmd);else piu1yk != null && piu1yk['runWith']([0x1]);
        } });
    }, pk8u13['readNativeFile'] = function (hwzjl6, ky1ipu) {
      pk8u13['fs']['readFile']({ 'filePath': hwzjl6, 'encoding': '', 'success': function (ox_tqb) {
          ky1ipu != null && ky1ipu['runWith']([0x0]);
        }, 'fail': function (_f47r) {
          ky1ipu != null && ky1ipu['runWith']([0x1]);
        } });
    }, pk8u13['down'] = function (i1py, pk3u1, _4rf7, qogb_4) {
      pk3u1 === void 0x0 && (pk3u1 = 'ascill'), qogb_4 === void 0x0 && (qogb_4 = '');var g_rq4 = pk8u13['getFileNativePath'](qogb_4),
          _fog = pk8u13['wxdown']({ 'url': i1py, 'filePath': g_rq4, 'success': function (m9den) {
          if (m9den['statusCode'] === 0xc8) pk8u13['readFile'](m9den['filePath'], pk3u1, _4rf7, qogb_4);
        }, 'fail': function (iyk1xp) {
          _4rf7 != null && _4rf7['runWith']([0x1, iyk1xp]);
        } });_fog['onProgressUpdate'](function (zlw2hj) {
        _4rf7 != null && _4rf7['runWith']([0x2, zlw2hj['progress']]);
      });
    }, pk8u13['readFile'] = function (dsmne$, ndjm6, jsdmn6, m9e) {
      ndjm6 === void 0x0 && (ndjm6 = 'ascill'), m9e === void 0x0 && (m9e = ''), pk8u13['fs']['readFile']({ 'filePath': dsmne$, 'encoding': ndjm6, 'success': function (tyx1i) {
          if (dsmne$['indexOf']('http://') != -0x1 || dsmne$['indexOf']('https://') != -0x1) pk8u13['onFileUpdate'](dsmne$, m9e);jsdmn6 != null && jsdmn6['runWith']([0x0, tyx1i]);
        }, 'fail': function (gbo_q4) {
          if (gbo_q4) jsdmn6 != null && jsdmn6['runWith']([0x1, gbo_q4]);
        } });
    }, pk8u13['downImg'] = function (n6dh, wzlhj2, v80k3) {
      v80k3 === void 0x0 && (v80k3 = '');var gbq_ot = pk8u13['wxdown']({ 'url': n6dh, 'success': function (rg754) {
          rg754['statusCode'] === 0xc8 && pk8u13['copyFile'](rg754['tempFilePath'], v80k3, wzlhj2);
        }, 'fail': function (r4gf5) {
          wzlhj2 != null && wzlhj2['runWith']([0x1, r4gf5]);
        } });
    }, pk8u13['copyFile'] = function (f_or4g, fgr47, a089$) {
      var de9n$m = f_or4g['split']('/'),
          k3u180 = de9n$m[de9n$m['length'] - 0x1],
          e$nam = fgr47['split']('?')[0x0],
          g4r5f7 = pk8u13['getFileInfo'](fgr47),
          bo4_q = pk8u13['getFileNativePath'](k3u180);pk8u13['fs']['copyFile']({ 'srcPath': f_or4g, 'destPath': bo4_q, 'success': function (e0$av) {
          if (!g4r5f7) pk8u13['onSaveFile'](fgr47, k3u180), a089$ != null && a089$['runWith']([0x0]);else {
            if (g4r5f7['readyUrl'] != fgr47) pk8u13['remove'](k3u180, fgr47, a089$);
          }
        }, 'fail': function (ypixtb) {
          a089$ != null && a089$['runWith']([0x1, ypixtb]);
        } });
    }, pk8u13['getFileNativePath'] = function (xyt1ip) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xyt1ip;
    }, pk8u13['remove'] = function (lwj2, bqtx, v09$a) {
      bqtx === void 0x0 && (bqtx = '');var fro4g_ = pk8u13['getFileInfo'](bqtx),
          _74gr = pk8u13['getFileNativePath'](fro4g_['md5']);yxqob['loader']['clearRes'](fro4g_['readyUrl']), pk8u13['fs']['unlink']({ 'filePath': _74gr, 'success': function (pxiyt1) {
          if (bqtx != '') pk8u13['onSaveFile'](bqtx, lwj2);v09$a != null && v09$a['runWith']([0x0]);
        }, 'fail': function (xtyob) {} });
    }, pk8u13['onSaveFile'] = function (xqtbyi, og_q4r) {
      var jd6 = xqtbyi['split']('?')[0x0];pk8u13['filesListObj'][jd6] = { 'md5': og_q4r, 'readyUrl': xqtbyi }, pk8u13['fs']['writeFile']({ 'filePath': pk8u13['fileNativeDir'] + '/' + pk8u13['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pk8u13['filesListObj']), 'success': function (gf5r7) {
          console['log']('写入测试测试成功：', gf5r7);
        }, 'fail': function (up31ki) {
          console['log']('写入测试测试失败：', up31ki);
        } });
    }, pk8u13['existDir'] = function (r54gf, njd6hs) {
      pk8u13['fs']['mkdir']({ 'dirPath': r54gf, 'success': function (xtqi) {
          njd6hs != null && njd6hs['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mj6nds) {
          if (mj6nds['errMsg']['indexOf']('file already exists') != -0x1) pk8u13['readSync'](pk8u13['fileListName'], 'utf8', njd6hs);else njd6hs != null && njd6hs['runWith']([0x1, mj6nds]);
        } });
    }, pk8u13['readSync'] = function ($9dmen, jz6lw, wh6sj, v30) {
      jz6lw === void 0x0 && (jz6lw = 'ascill'), v30 === void 0x0 && (v30 = '');var p1ikuy = pk8u13['getFileNativePath']($9dmen),
          frg745;try {
        frg745 = pk8u13['fs']['readFileSync'](p1ikuy), wh6sj != null && wh6sj['runWith']([0x0, { 'data': frg745 }]);
      } catch (goqt) {
        wh6sj != null && wh6sj['runWith']([0x1]);
      }
    }, pk8u13['readCache'] = function () {}, pk8u13['writeCache'] = function (xtiqyb) {
      var w2jz = readyUrl['split']('?')[0x0];pk8u13['filesListObj'][w2jz] = { 'md5': md5Name, 'readyUrl': readyUrl }, pk8u13['fs']['writeFile']({ 'filePath': pk8u13['fileNativeDir'] + '/' + pk8u13['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pk8u13['filesListObj']), 'success': function (yxbtoq) {}, 'fail': function (btqxiy) {} });
    }, pk8u13['setNativeFileDir'] = function (upi3k) {
      pk8u13['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + upi3k;
    }, pk8u13['filesListObj'] = {}, pk8u13['fileNativeDir'] = null, pk8u13['fileListName'] = 'layaairfiles.txt', pk8u13['ziyuFileData'] = {}, oqbt_x(pk8u13, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pk8u13;
  }(_qb),
      gorf = function (es6nmd) {
    function emv9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], emv9['__super']['call'](this), this['_sound'] = emv9['_createSound']();
    }snd6e(emv9, 'laya.wx.mini.MiniSound', es6nmd);var z6lwjh = emv9['prototype'];return z6lwjh['load'] = function ($9emn) {
      var iup31 = this;$9emn = xtoby['formatURL']($9emn), this['url'] = $9emn;if (emv9['_audioCache'][$9emn]) {
        this['event']('complete');return;
      }function nmsj() {
        if (emv9['_null'] != undefined) iup31['_sound']['onCanplay'](emv9['_null']), iup31['_sound']['onError'](emv9['_null']);else try {
          iup31['_sound']['onCanplay'](null), iup31['_sound']['onError'](null), emv9['_null'] = null;
        } catch (_tqbox) {
          console['warn']('[wxmini] _clearSound:' + _tqbox), iup31['_sound']['onCanplay'](xqbtoy), iup31['_sound']['onError'](xqbtoy), emv9['_null'] = xqbtoy;
        }
      }function am$v9() {
        nmsj(), gr_o4q['loaded'] = !![], gr_o4q['event']('complete'), emv9['_audioCache'][gr_o4q['url']] = gr_o4q;
      }function enm$9d(g_4b) {
        console['error']('errCode=' + g_4b['errCode'] + '  errMsg=' + g_4b['errMsg']), nmsj(), gr_o4q['event']('error');
      }function xqbtoy() {}this['_sound']['onCanplay'](am$v9), this['_sound']['onError'](enm$9d), this['_sound']['src'] = $9emn;var gr_o4q = this;
    }, z6lwjh['play'] = function (sdnme6, yipxtb) {
      sdnme6 === void 0x0 && (sdnme6 = 0x0), yipxtb === void 0x0 && (yipxtb = 0x0);var s6jnh;if (this['url'] == x_obqt['_tMusic']) {
        if (!emv9['_musicAudio']) emv9['_musicAudio'] = emv9['_createSound']();s6jnh = emv9['_musicAudio'];
      } else s6jnh = emv9['_createSound']();s6jnh['src'] = this['url'];var xt1py = new a9v08(s6jnh);return xt1py['url'] = this['url'], xt1py['loops'] = yipxtb, xt1py['startTime'] = sdnme6, xt1py['play'](), x_obqt['addChannel'](xt1py), xt1py;
    }, z6lwjh['dispose'] = function () {
      var av908$ = emv9['_audioCache'][this['url']];av908$ && (av908$['src'] = '', delete emv9['_audioCache'][this['url']]);
    }, txiqyb(0x0, z6lwjh, 'duration', function () {
      return this['_sound']['duration'];
    }), emv9['_createSound'] = function () {
      return emv9['_id']++, yxki1p['window']['wx']['createInnerAudioContext']();
    }, emv9['_musicAudio'] = null, emv9['_id'] = 0x0, emv9['_audioCache'] = {}, emv9['_null'] = undefined, emv9;
  }(_qb),
      a9v08 = function (whlzj2) {
    function upiky1(dsnm$e) {
      this['_audio'] = null, this['_onEnd'] = null, upiky1['__super']['call'](this), this['_audio'] = dsnm$e, this['_onEnd'] = ogb_4q['bind'](this['__onEnd'], this), dsnm$e['onEnded'](this['_onEnd']);
    }snd6e(upiky1, 'laya.wx.mini.MiniSoundChannel', whlzj2);var g4_oq = upiky1['prototype'];return g4_oq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (yxqob['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, g4_oq['__onNull'] = function () {}, g4_oq['play'] = function () {
      this['isStopped'] = ![], x_obqt['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, g4_oq['stop'] = function () {
      this['isStopped'] = !![], x_obqt['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (upiky1['_null'] != undefined) this['_audio']['onEnded'](upiky1['_null']);else try {
        this['_audio']['onEnded'](null), upiky1['_null'] = null;
      } catch (sdjh) {
        console['warn']('[wxmini] stop:' + sdjh), this['_audio']['onEnded'](ogb_4q['bind'](this['__onNull'], this)), upiky1['_null'] = ogb_4q['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, g4_oq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, g4_oq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], x_obqt['addChannel'](this), this['_audio']['play']();
    }, txiqyb(0x0, g4_oq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), txiqyb(0x0, g4_oq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), txiqyb(0x0, g4_oq, 'volume', function () {
      return 0x1;
    }, function (bpxtiy) {}), upiky1['_null'] = undefined, upiky1;
  }(_f7g4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var u380k1 in Laya) {
    var u318p = Laya[u380k1];u318p && u318p['__isclass'] && (exports[u380k1] = u318p);
  }
});