var d = wx.$A;
(function (window, document, u1pyi) {
  var yipx1 = u1pyi['un'],
      a$9vm = u1pyi['uns'],
      qxybto = u1pyi['static'],
      lj2hw = u1pyi['class'],
      xypk1 = u1pyi['getset'],
      jlz = u1pyi['__newvec'],
      p3uki1 = laya['utils']['Browser'],
      ena$m = laya['events']['Event'],
      gf4_r = laya['events']['EventDispatcher'],
      hswz6 = laya['resource']['HTMLImage'],
      ndme9 = laya['utils']['Handler'],
      yk1pu = laya['display']['Input'],
      _go4rf = laya['net']['Loader'],
      ve9$0 = laya['maths']['Matrix'],
      tp1ix = laya['renders']['Render'],
      r5fg = laya['utils']['RunDriver'],
      qbgo_t = laya['media']['Sound'],
      o_txq = laya['media']['SoundChannel'],
      mev$a9 = laya['media']['SoundManager'],
      up1kyi = laya['display']['Stage'],
      tyobx = laya['net']['URL'],
      sjnmd = laya['utils']['Utils'],
      t1yixp = function () {
    function kiy1px() {}return lj2hw(kiy1px, 'laya.wx.mini.MiniAdpter'), kiy1px['getJson'] = function (dsj6n) {
      return JSON['parse'](dsj6n);
    }, kiy1px['init'] = function (tpxyib, njm6ds) {
      tpxyib === void 0x0 && (tpxyib = ![]), njm6ds === void 0x0 && (njm6ds = ![]);if (kiy1px['_inited']) return;kiy1px['window'] = window;if (kiy1px['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;kiy1px['_inited'] = !![], kiy1px['isZiYu'] = njm6ds, kiy1px['isPosMsgYu'] = tpxyib, kiy1px['EnvConfig'] = {}, !kiy1px['isZiYu'] && (a0389v['setNativeFileDir']('/layaairGame'), a0389v['existDir'](a0389v['fileNativeDir'], ndme9['create'](kiy1px, kiy1px['onMkdirCallBack']))), kiy1px['window']['focus'] = function () {}, u1pyi['getUrlPath'] = function () {}, kiy1px['window']['logtime'] = function (go4b_q) {}, kiy1px['window']['alertTimeLog'] = function (mn6j) {}, kiy1px['window']['resetShareInfo'] = function () {}, kiy1px['window']['CanvasRenderingContext2D'] = function () {}, kiy1px['window']['CanvasRenderingContext2D']['prototype'] = kiy1px['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kiy1px['window']['document']['body']['appendChild'] = function () {}, kiy1px['EnvConfig']['pixelRatioInt'] = 0x0, r5fg['getPixelRatio'] = kiy1px['pixelRatio'], kiy1px['_preCreateElement'] = p3uki1['createElement'], p3uki1['createElement'] = kiy1px['createElement'], r5fg['createShaderCondition'] = kiy1px['createShaderCondition'], sjnmd['parseXMLFromString'] = kiy1px['parseXMLFromString'], yk1pu['_createInputElement'] = dz6s['_createInputElement'], kiy1px['EnvConfig']['load'] = _go4rf['prototype']['load'], _go4rf['prototype']['load'] = pk831['prototype']['load'], kiy1px['isZiYu'] && tpxyib && wx['onMessage'](function (v9a$e) {
        v9a$e['isLoad'] && (a0389v['ziyuFileData'][v9a$e['url']] = v9a$e['data']);
      });
    }, kiy1px['onMkdirCallBack'] = function (qiyt, xbpyti) {
      if (!qiyt) a0389v['filesListObj'] = JSON['parse'](xbpyti['data']);
    }, kiy1px['pixelRatio'] = function () {
      if (!kiy1px['EnvConfig']['pixelRatioInt']) try {
        var _oq4r = wx['getSystemInfoSync']();return kiy1px['EnvConfig']['pixelRatioInt'] = _oq4r['pixelRatio'], _oq4r = _oq4r, _oq4r['pixelRatio'];
      } catch (f4g75r) {}return kiy1px['EnvConfig']['pixelRatioInt'];
    }, kiy1px['createElement'] = function (bgq4_) {
      if (bgq4_ == 'canvas') {
        var u3k08v;return kiy1px['idx'] == 0x1 ? kiy1px['isZiYu'] ? (u3k08v = sharedCanvas, u3k08v['style'] = {}) : u3k08v = window['canvas'] : u3k08v = window['wx']['createCanvas'](), kiy1px['idx']++, u3k08v;
      } else {
        if (bgq4_ == 'textarea' || bgq4_ == 'input') return kiy1px['onCreateInput'](bgq4_);else {
          if (bgq4_ == 'div') {
            var nmd = kiy1px['_preCreateElement'](bgq4_);return nmd['contains'] = function (q4gor_) {
              return null;
            }, nmd['removeChild'] = function (obtq_x) {}, nmd;
          } else return kiy1px['_preCreateElement'](bgq4_);
        }
      }
    }, kiy1px['onCreateInput'] = function (bgq_o) {
      var qtyxi = kiy1px['_preCreateElement'](bgq_o);return qtyxi['focus'] = dz6s['wxinputFocus'], qtyxi['blur'] = dz6s['wxinputblur'], qtyxi['style'] = {}, qtyxi['value'] = 0x0, qtyxi['parentElement'] = {}, qtyxi['placeholder'] = {}, qtyxi['type'] = {}, qtyxi['setColor'] = function (qyotb) {}, qtyxi['setType'] = function (y1pki) {}, qtyxi['setFontFace'] = function (y1xp) {}, qtyxi['addEventListener'] = function (pyik1u) {}, qtyxi['contains'] = function (qotb_) {
        return null;
      }, qtyxi['removeChild'] = function (b_go4) {}, qtyxi;
    }, kiy1px['createShaderCondition'] = function (qbo4g) {
      var nm9$a = this,
          ik3p1u = function () {
        var dse = qbo4g;return nm9$a[qbo4g['replace']('this.', '')];
      };return ik3p1u;
    }, kiy1px['EnvConfig'] = null, kiy1px['window'] = null, kiy1px['_preCreateElement'] = null, kiy1px['_inited'] = ![], kiy1px['wxRequest'] = null, kiy1px['systemInfo'] = null, kiy1px['version'] = '0.0.1', kiy1px['isZiYu'] = ![], kiy1px['isPosMsgYu'] = ![], kiy1px['parseXMLFromString'] = function (r7_) {
      var ndj6m, r45f7g;r7_ = r7_['replace'](/>\s+</g, '><');try {
        ndj6m = new window['Parser']['DOMParser']()['parseFromString'](r7_, 'text/xml');
      } catch (mnsd$) {
        throw '需要引入xml解析库文件';
      }return ndj6m;
    }, kiy1px['idx'] = 0x1, kiy1px;
  }(),
      _go4q = function () {
    function o_bqxt() {}lj2hw(o_bqxt, 'laya.wx.mini.MiniImage');var ku1p83 = o_bqxt['prototype'];return ku1p83['_loadImage'] = function (fg57r4) {
      var ea$m9n = this,
          e$d9nm = ![];fg57r4['indexOf']('layaNativeDir/') == -0x1 && (e$d9nm = !![], fg57r4 = tyobx['formatURL'](fg57r4));if (!a0389v['getFileInfo'](fg57r4)) {
        if (fg57r4['indexOf']('http://') != -0x1 || fg57r4['indexOf']('https://') != -0x1) a0389v['downImg'](fg57r4, new ndme9(o_bqxt, o_bqxt['onDownImgCallBack'], [fg57r4, ea$m9n]), fg57r4);else o_bqxt['onCreateImage'](fg57r4, ea$m9n, !![]);
      } else o_bqxt['onCreateImage'](fg57r4, ea$m9n, !e$d9nm);
    }, o_bqxt['onDownImgCallBack'] = function (v8a90, mn$dse, $8) {
      if (!$8) o_bqxt['onCreateImage'](v8a90, mn$dse);else mn$dse['onError'](null);
    }, o_bqxt['onCreateImage'] = function (msnde, t1iyxp, a0u8) {
      a0u8 === void 0x0 && (a0u8 = ![]);var h2jwl;if (!a0u8) {
        var jzh6d = a0389v['getFileInfo'](msnde),
            e$mdn9 = jzh6d['md5'];h2jwl = a0389v['getFileNativePath'](e$mdn9);
      } else h2jwl = msnde;if (t1iyxp['imgCache'] == null) t1iyxp['imgCache'] = {};var bxiyqt;function kiuy() {
        bxiyqt['onload'] = null, bxiyqt['onerror'] = null, delete t1iyxp['imgCache'][msnde];
      };var sz = function () {
        kiuy(), t1iyxp['onLoaded'](bxiyqt);
      },
          yt = function () {
        kiuy(), t1iyxp['event']('error', 'Load image failed');
      };t1iyxp['_type'] == 'nativeimage' ? (bxiyqt = new p3uki1['window']['Image'](), bxiyqt['crossOrigin'] = '', bxiyqt['onload'] = sz, bxiyqt['onerror'] = yt, bxiyqt['src'] = h2jwl, t1iyxp['imgCache'][msnde] = bxiyqt) : new hswz6['create'](h2jwl, { 'onload': sz, 'onerror': yt, 'onCreate': function (wzjh2) {
          bxiyqt = wzjh2, t1iyxp['imgCache'][msnde] = wzjh2;
        } });
    }, o_bqxt;
  }(),
      dz6s = function () {
    function ptib() {}return lj2hw(ptib, 'laya.wx.mini.MiniInput'), ptib['_createInputElement'] = function () {
      yk1pu['_initInput'](yk1pu['area'] = p3uki1['createElement']('textarea')), yk1pu['_initInput'](yk1pu['input'] = p3uki1['createElement']('input')), yk1pu['inputContainer'] = p3uki1['createElement']('div'), yk1pu['inputContainer']['style']['position'] = 'absolute', yk1pu['inputContainer']['style']['zIndex'] = 0x186a0, p3uki1['container']['appendChild'](yk1pu['inputContainer']), yk1pu['inputContainer']['setPos'] = function (jzlw6h, ik1uyp) {
        yk1pu['inputContainer']['style']['left'] = jzlw6h + 'px', yk1pu['inputContainer']['style']['top'] = ik1uyp + 'px';
      }, u1pyi['stage']['on']('resize', null, ptib['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pixybt) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), mev$a9['_soundClass'] = qbgo4, mev$a9['_musicClass'] = qbgo4;
    }, ptib['_onStageResize'] = function () {
      var _bqox = u1pyi['stage']['_canvasTransform']['identity']();_bqox['scale'](p3uki1['width'] / tp1ix['canvas']['width'] / r5fg['getPixelRatio'](), p3uki1['height'] / tp1ix['canvas']['height'] / r5fg['getPixelRatio']());
    }, ptib['wxinputFocus'] = function (d$nms) {
      var sn6j = yk1pu['inputElement']['target'];if (sn6j && !sn6j['editable']) return;t1yixp['window']['wx']['offKeyboardConfirm'](), t1yixp['window']['wx']['offKeyboardInput'](), t1yixp['window']['wx']['showKeyboard']({ 'defaultValue': sn6j['text'], 'maxLength': sn6j['maxChars'], 'multiple': sn6j['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gr4f75) {}, 'fail': function (me9v) {} }), t1yixp['window']['wx']['onKeyboardConfirm'](function (nm$s) {
        var mn9d = nm$s ? nm$s['value'] : '';sn6j['text'] = mn9d, sn6j['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), t1yixp['window']['wx']['onKeyboardInput'](function (gf75r) {
        var u0a3 = gf75r ? gf75r['value'] : '';if (!sn6j['multiline']) {
          if (u0a3['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sn6j['text'] = u0a3, sn6j['event']('input');
      });
    }, ptib['inputEnter'] = function () {
      yk1pu['inputElement']['target']['focus'] = ![];
    }, ptib['wxinputblur'] = function () {
      ptib['hideKeyboard']();
    }, ptib['hideKeyboard'] = function () {
      t1yixp['window']['wx']['offKeyboardConfirm'](), t1yixp['window']['wx']['offKeyboardInput'](), t1yixp['window']['wx']['hideKeyboard']({ 'success': function (ku8130) {
          console['log']('隐藏键盘');
        }, 'fail': function (u3vk0) {
          console['log']('隐藏键盘出错:' + (u3vk0 ? u3vk0['errMsg'] : ''));
        } });
    }, ptib;
  }(),
      pk831 = function () {
    function qb_4() {}lj2hw(qb_4, 'laya.wx.mini.MiniLoader');var k1u38 = qb_4['prototype'];return k1u38['load'] = function (px1tiy, gr_7f4, u108k3, pyxik1, p1tyx) {
      u108k3 === void 0x0 && (u108k3 = !![]), p1tyx === void 0x0 && (p1tyx = ![]);var qbxtyi = this;qbxtyi['_url'] = px1tiy;if (px1tiy['indexOf']('data:image') === 0x0) qbxtyi['_type'] = gr_7f4 = 'image';else qbxtyi['_type'] = gr_7f4 || (gr_7f4 = qbxtyi['getTypeFromUrl'](px1tiy));qbxtyi['_cache'] = u108k3, qbxtyi['_data'] = null;var q_r4go = 'ascii';if (px1tiy['indexOf']('.fnt') != -0x1) q_r4go = 'utf8';else gr_7f4 == 'arraybuffer' && (q_r4go = '');;var nde$ = sjnmd['getFileExtension'](px1tiy);if (qb_4['_fileTypeArr']['indexOf'](nde$) != -0x1) t1yixp['EnvConfig']['load']['call'](this, px1tiy, gr_7f4, u108k3, pyxik1, p1tyx);else {
        if (!a0389v['getFileInfo'](px1tiy)) {
          if (px1tiy['indexOf']('layaNativeDir/') != -0x1) {
            if (t1yixp['isZiYu']) {
              var yqbti = a0389v['ziyuFileData'][px1tiy];qbxtyi['onLoaded'](yqbti);return;
            } else {
              cosnole['log']('read read'), a0389v['read'](px1tiy, q_r4go, new ndme9(qb_4, qb_4['onReadNativeCallBack'], [q_r4go, px1tiy, gr_7f4, u108k3, pyxik1, p1tyx, qbxtyi]));return;
            }
          }if (tyobx['rootPath'] == '') var ykx1i = px1tiy;else ykx1i = px1tiy['split'](tyobx['rootPath'])[0x0];px1tiy['indexOf']('http://') != -0x1 || px1tiy['indexOf']('https://') != -0x1 ? t1yixp['EnvConfig']['load']['call'](qbxtyi, px1tiy, gr_7f4, u108k3, pyxik1, p1tyx) : a0389v['readFile'](ykx1i, q_r4go, new ndme9(qb_4, qb_4['onReadNativeCallBack'], [q_r4go, px1tiy, gr_7f4, u108k3, pyxik1, p1tyx, qbxtyi]), px1tiy);
        } else t1yixp['EnvConfig']['load']['call'](this, px1tiy, gr_7f4, u108k3, pyxik1, p1tyx);
      }
    }, k1u38['resMgrLoad'] = function (nh6d, u38k1p, uk1pi, qxti, a8v30u, f5rg, bxy) {
      uk1pi === void 0x0 && (uk1pi = 0x0), qxti === void 0x0 && (qxti = ![]), a8v30u === void 0x0 && (a8v30u = ![]), f5rg === void 0x0 && (f5rg = 0x0), bxy === void 0x0 && (bxy = 0x3), nh6d['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nh6d), t1yixp['EnvConfig']['resMgrLoad'](nh6d, (qxobt_, iyxtp, rg_4f7) => {
        qb_4['prototype']['resMgrLoadCallBack'](qxobt_, iyxtp, rg_4f7, u38k1p);
      }, uk1pi, qxti, a8v30u, f5rg, bxy);
    }, k1u38['resMgrLoadCallBack'] = function (a0vu3, senm$, k3810, qoyxtb) {
      console['log']('buff:::', a0vu3, k3810, a0389v['fileNativeDir'] + '///' + a0389v['fileListName']), qoyxtb(a0vu3, senm$, k3810);
    }, k1u38['clearRes'] = function (jzhlw, snjhd) {
      snjhd === void 0x0 && (snjhd = ![]);var jwl2hz = this;jwl2hz['clearRes'](jzhlw, snjhd);var _og4f = a0389v['getFileInfo'](jzhlw);if (_og4f && (jzhlw['indexOf']('http://') != -0x1 || jzhlw['indexOf']('https://') != -0x1)) {
        var xbqty = _og4f['md5'],
            ofg4 = a0389v['getFileNativePath'](xbqty);a0389v['remove'](ofg4);
      }
    }, qb_4['onReadNativeCallBack'] = function (j6hlz, og_rf4, md6jn, jwz6h, k3iu1p, sjd6zh, d9nm$, z6hsdj, r7g4) {
      jwz6h === void 0x0 && (jwz6h = !![]), sjd6zh === void 0x0 && (sjd6zh = ![]), z6hsdj === void 0x0 && (z6hsdj = 0x0);if (!z6hsdj) {
        var hwzj6s;if (md6jn == 'json' || md6jn == 'atlas') hwzj6s = t1yixp['getJson'](r7g4['data']);else md6jn == 'xml' ? hwzj6s = sjnmd['parseXMLFromString'](r7g4['data']) : hwzj6s = r7g4['data'];d9nm$['onLoaded'](hwzj6s), !t1yixp['isZiYu'] && t1yixp['isPosMsgYu'] && md6jn != 'arraybuffer' && wx['postMessage']({ 'url': og_rf4, 'data': hwzj6s, 'isLoad': !![] });
      } else z6hsdj == 0x1 && t1yixp['EnvConfig']['load']['call'](d9nm$, og_rf4, md6jn, jwz6h, k3iu1p, sjd6zh);
    }, qxybto(qb_4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qb_4;
  }(),
      a0389v = function (t1pyi) {
    function $emv9a() {
      $emv9a['__super']['call'](this);;
    }return lj2hw($emv9a, 'laya.wx.mini.MiniFileMgr', t1pyi), $emv9a['isLoadFile'] = function (k13pu) {
      return $emv9a['_fileTypeArr']['indexOf'](k13pu) != -0x1 ? !![] : ![];
    }, $emv9a['getFileInfo'] = function (obtqx_) {
      var n9dm$e = obtqx_['split']('?')[0x0],
          tbo = $emv9a['filesListObj'][n9dm$e];if (tbo == null) return null;else return tbo;return null;
    }, $emv9a['onFileUpdate'] = function ($m9na, sjw6zh) {
      var i1xpty = $m9na['split']('/'),
          oqbxt = i1xpty[i1xpty['length'] - 0x1],
          gt_bqo = $emv9a['getFileInfo'](sjw6zh);if (gt_bqo == null) $emv9a['onSaveFile'](sjw6zh, oqbxt);else {
        if (gt_bqo['readyUrl'] != sjw6zh) $emv9a['remove'](oqbxt, sjw6zh);
      }
    }, $emv9a['exits'] = function (ybtxpi, r7f4g) {
      var zshw = $emv9a['getFileNativePath'](ybtxpi);$emv9a['fs']['getFileInfo']({ 'filePath': zshw, 'success': function (zsjwh6) {
          r7f4g != null && r7f4g['runWith']([0x0, zsjwh6]);
        }, 'fail': function (iytxb) {
          r7f4g != null && r7f4g['runWith']([0x1, iytxb]);
        } });
    }, $emv9a['read'] = function (va$0e9, v0a938, obgt, $9aen) {
      v0a938 === void 0x0 && (v0a938 = 'ascill'), $9aen === void 0x0 && ($9aen = '');var ro_f4g;$9aen != '' ? ro_f4g = $emv9a['getFileNativePath'](va$0e9) : ro_f4g = va$0e9, $emv9a['fs']['readFile']({ 'filePath': ro_f4g, 'encoding': v0a938, 'success': function (en9$m) {
          obgt != null && obgt['runWith']([0x0, en9$m]);
        }, 'fail': function (q4_ro) {
          if (q4_ro && $9aen != '') $emv9a['down']($9aen, v0a938, obgt, $9aen);else obgt != null && obgt['runWith']([0x1]);
        } });
    }, $emv9a['readNativeFile'] = function (dhn6sj, txqiby) {
      $emv9a['fs']['readFile']({ 'filePath': dhn6sj, 'encoding': '', 'success': function (_oqr4) {
          txqiby != null && txqiby['runWith']([0x0]);
        }, 'fail': function (yqoxt) {
          txqiby != null && txqiby['runWith']([0x1]);
        } });
    }, $emv9a['down'] = function (an9$e, jzhsd6, ikp1yx, a83vu0) {
      jzhsd6 === void 0x0 && (jzhsd6 = 'ascill'), a83vu0 === void 0x0 && (a83vu0 = '');var _4gf = $emv9a['getFileNativePath'](a83vu0),
          iu1py = $emv9a['wxdown']({ 'url': an9$e, 'filePath': _4gf, 'success': function (r_goq) {
          if (r_goq['statusCode'] === 0xc8) $emv9a['readFile'](r_goq['filePath'], jzhsd6, ikp1yx, a83vu0);
        }, 'fail': function (au803v) {
          ikp1yx != null && ikp1yx['runWith']([0x1, au803v]);
        } });iu1py['onProgressUpdate'](function (v0$9) {
        ikp1yx != null && ikp1yx['runWith']([0x2, v0$9['progress']]);
      });
    }, $emv9a['readFile'] = function (rg_oq4, g5rf, b_xtq, o4qrg) {
      g5rf === void 0x0 && (g5rf = 'ascill'), o4qrg === void 0x0 && (o4qrg = ''), $emv9a['fs']['readFile']({ 'filePath': rg_oq4, 'encoding': g5rf, 'success': function ($9v0) {
          if (rg_oq4['indexOf']('http://') != -0x1 || rg_oq4['indexOf']('https://') != -0x1) $emv9a['onFileUpdate'](rg_oq4, o4qrg);b_xtq != null && b_xtq['runWith']([0x0, $9v0]);
        }, 'fail': function (iy1pxk) {
          if (iy1pxk) b_xtq != null && b_xtq['runWith']([0x1, iy1pxk]);
        } });
    }, $emv9a['downImg'] = function (u018, bo_gq, tg_b) {
      tg_b === void 0x0 && (tg_b = '');var k8pu13 = $emv9a['wxdown']({ 'url': u018, 'success': function (r5g7) {
          r5g7['statusCode'] === 0xc8 && $emv9a['copyFile'](r5g7['tempFilePath'], tg_b, bo_gq);
        }, 'fail': function (wj2lhz) {
          bo_gq != null && bo_gq['runWith']([0x1, wj2lhz]);
        } });
    }, $emv9a['copyFile'] = function ($m9n, yuikp1, kyip1x) {
      var p1xkiy = $m9n['split']('/'),
          d9m$ = p1xkiy[p1xkiy['length'] - 0x1],
          qxybti = yuikp1['split']('?')[0x0],
          roqg = $emv9a['getFileInfo'](yuikp1),
          dzj = $emv9a['getFileNativePath'](d9m$);$emv9a['fs']['copyFile']({ 'srcPath': $m9n, 'destPath': dzj, 'success': function (n6jm) {
          if (!roqg) $emv9a['onSaveFile'](yuikp1, d9m$), kyip1x != null && kyip1x['runWith']([0x0]);else {
            if (roqg['readyUrl'] != yuikp1) $emv9a['remove'](d9m$, yuikp1, kyip1x);
          }
        }, 'fail': function (rqo4) {
          kyip1x != null && kyip1x['runWith']([0x1, rqo4]);
        } });
    }, $emv9a['getFileNativePath'] = function (u18) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + u18;
    }, $emv9a['remove'] = function (hjds6, i3u1pk, w2lhjz) {
      i3u1pk === void 0x0 && (i3u1pk = '');var ipku13 = $emv9a['getFileInfo'](i3u1pk),
          qtxob = $emv9a['getFileNativePath'](ipku13['md5']);u1pyi['loader']['clearRes'](ipku13['readyUrl']), $emv9a['fs']['unlink']({ 'filePath': qtxob, 'success': function (z2whl) {
          if (i3u1pk != '') $emv9a['onSaveFile'](i3u1pk, hjds6);w2lhjz != null && w2lhjz['runWith']([0x0]);
        }, 'fail': function (zs6j) {} });
    }, $emv9a['onSaveFile'] = function (wlhzj, o_qrg4) {
      var hs6zdj = wlhzj['split']('?')[0x0];$emv9a['filesListObj'][hs6zdj] = { 'md5': o_qrg4, 'readyUrl': wlhzj }, $emv9a['fs']['writeFile']({ 'filePath': $emv9a['fileNativeDir'] + '/' + $emv9a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($emv9a['filesListObj']), 'success': function (hj6zsw) {
          console['log']('写入测试测试成功：', hj6zsw);
        }, 'fail': function (aevm) {
          console['log']('写入测试测试失败：', aevm);
        } });
    }, $emv9a['existDir'] = function (ua3v80, ws6jzh) {
      $emv9a['fs']['mkdir']({ 'dirPath': ua3v80, 'success': function (fg4r75) {
          ws6jzh != null && ws6jzh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g7r4_) {
          if (g7r4_['errMsg']['indexOf']('file already exists') != -0x1) $emv9a['readSync']($emv9a['fileListName'], 'utf8', ws6jzh);else ws6jzh != null && ws6jzh['runWith']([0x1, g7r4_]);
        } });
    }, $emv9a['readSync'] = function (iy1tp, m$e9va, s6j, u80av3) {
      m$e9va === void 0x0 && (m$e9va = 'ascill'), u80av3 === void 0x0 && (u80av3 = '');var bo_g4 = $emv9a['getFileNativePath'](iy1tp),
          jzd6hs;try {
        jzd6hs = $emv9a['fs']['readFileSync'](bo_g4), s6j != null && s6j['runWith']([0x0, { 'data': jzd6hs }]);
      } catch (snd6h) {
        s6j != null && s6j['runWith']([0x1]);
      }
    }, $emv9a['readCache'] = function () {}, $emv9a['writeCache'] = function (g47r5) {
      var kp1x = readyUrl['split']('?')[0x0];$emv9a['filesListObj'][kp1x] = { 'md5': md5Name, 'readyUrl': readyUrl }, $emv9a['fs']['writeFile']({ 'filePath': $emv9a['fileNativeDir'] + '/' + $emv9a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($emv9a['filesListObj']), 'success': function (t_xqbo) {}, 'fail': function (sjw6hz) {} });
    }, $emv9a['setNativeFileDir'] = function (d$me9n) {
      $emv9a['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d$me9n;
    }, $emv9a['filesListObj'] = {}, $emv9a['fileNativeDir'] = null, $emv9a['fileListName'] = 'layaairfiles.txt', $emv9a['ziyuFileData'] = {}, qxybto($emv9a, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $emv9a;
  }(gf4_r),
      qbgo4 = function (nd6j) {
    function edm6n() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], edm6n['__super']['call'](this), this['_sound'] = edm6n['_createSound']();
    }lj2hw(edm6n, 'laya.wx.mini.MiniSound', nd6j);var u3pk18 = edm6n['prototype'];return u3pk18['load'] = function (ytibxp) {
      var f745rg = this;ytibxp = tyobx['formatURL'](ytibxp), this['url'] = ytibxp;if (edm6n['_audioCache'][ytibxp]) {
        this['event']('complete');return;
      }function e0a9() {
        if (edm6n['_null'] != undefined) f745rg['_sound']['onCanplay'](edm6n['_null']), f745rg['_sound']['onError'](edm6n['_null']);else try {
          f745rg['_sound']['onCanplay'](null), f745rg['_sound']['onError'](null), edm6n['_null'] = null;
        } catch (bypit) {
          console['warn']('[wxmini] _clearSound:' + bypit), f745rg['_sound']['onCanplay'](n6smj), f745rg['_sound']['onError'](n6smj), edm6n['_null'] = n6smj;
        }
      }function zhjds() {
        e0a9(), na$m['loaded'] = !![], na$m['event']('complete'), edm6n['_audioCache'][na$m['url']] = na$m;
      }function g47_rf(ipx1y) {
        console['error']('errCode=' + ipx1y['errCode'] + '  errMsg=' + ipx1y['errMsg']), e0a9(), na$m['event']('error');
      }function n6smj() {}this['_sound']['onCanplay'](zhjds), this['_sound']['onError'](g47_rf), this['_sound']['src'] = ytibxp;var na$m = this;
    }, u3pk18['play'] = function (yk, jhsd) {
      yk === void 0x0 && (yk = 0x0), jhsd === void 0x0 && (jhsd = 0x0);var vea$0;if (this['url'] == mev$a9['_tMusic']) {
        if (!edm6n['_musicAudio']) edm6n['_musicAudio'] = edm6n['_createSound']();vea$0 = edm6n['_musicAudio'];
      } else vea$0 = edm6n['_createSound']();vea$0['src'] = this['url'];var m9nde$ = new hs6njd(vea$0);return m9nde$['url'] = this['url'], m9nde$['loops'] = jhsd, m9nde$['startTime'] = yk, m9nde$['play'](), mev$a9['addChannel'](m9nde$), m9nde$;
    }, u3pk18['dispose'] = function () {
      var tpx1y = edm6n['_audioCache'][this['url']];tpx1y && (tpx1y['src'] = '', delete edm6n['_audioCache'][this['url']]);
    }, xypk1(0x0, u3pk18, 'duration', function () {
      return this['_sound']['duration'];
    }), edm6n['_createSound'] = function () {
      return edm6n['_id']++, t1yixp['window']['wx']['createInnerAudioContext']();
    }, edm6n['_musicAudio'] = null, edm6n['_id'] = 0x0, edm6n['_audioCache'] = {}, edm6n['_null'] = undefined, edm6n;
  }(gf4_r),
      hs6njd = function (ma9ne) {
    function a8u03(tbo_gq) {
      this['_audio'] = null, this['_onEnd'] = null, a8u03['__super']['call'](this), this['_audio'] = tbo_gq, this['_onEnd'] = sjnmd['bind'](this['__onEnd'], this), tbo_gq['onEnded'](this['_onEnd']);
    }lj2hw(a8u03, 'laya.wx.mini.MiniSoundChannel', ma9ne);var v83k0u = a8u03['prototype'];return v83k0u['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (u1pyi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, v83k0u['__onNull'] = function () {}, v83k0u['play'] = function () {
      this['isStopped'] = ![], mev$a9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, v83k0u['stop'] = function () {
      this['isStopped'] = !![], mev$a9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (a8u03['_null'] != undefined) this['_audio']['onEnded'](a8u03['_null']);else try {
        this['_audio']['onEnded'](null), a8u03['_null'] = null;
      } catch (d$enms) {
        console['warn']('[wxmini] stop:' + d$enms), this['_audio']['onEnded'](sjnmd['bind'](this['__onNull'], this)), a8u03['_null'] = sjnmd['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, v83k0u['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, v83k0u['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], mev$a9['addChannel'](this), this['_audio']['play']();
    }, xypk1(0x0, v83k0u, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xypk1(0x0, v83k0u, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xypk1(0x0, v83k0u, 'volume', function () {
      return 0x1;
    }, function (tyboqx) {}), a8u03['_null'] = undefined, a8u03;
  }(o_txq);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hzsd in Laya) {
    var xot_b = Laya[hzsd];xot_b && xot_b['__isclass'] && (exports[hzsd] = xot_b);
  }
});