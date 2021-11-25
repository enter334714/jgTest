var W = wx.$l;
(function (window, document, g1pu) {
  var f7ov9 = g1pu['un'],
      s2$8 = g1pu['uns'],
      cxy3r = g1pu['static'],
      l9otf5 = g1pu['class'],
      rcim30 = g1pu['getset'],
      x04n_ = g1pu['__newvec'],
      kbzha = laya['utils']['Browser'],
      o971fv = laya['events']['Event'],
      ftol59 = laya['events']['EventDispatcher'],
      v9f1o = laya['resource']['HTMLImage'],
      ug17e = laya['utils']['Handler'],
      e71ov = laya['display']['Input'],
      ds_$48 = laya['net']['Loader'],
      e71o9v = laya['maths']['Matrix'],
      rycm = laya['renders']['Render'],
      k2 = laya['utils']['RunDriver'],
      v9e1 = laya['media']['Sound'],
      dbj2 = laya['media']['SoundChannel'],
      _8ds4 = laya['media']['SoundManager'],
      tzlq = laya['display']['Stage'],
      f9o71 = laya['net']['URL'],
      u6epg = laya['utils']['Utils'],
      fzq = function () {
    function lqtz5f() {}return l9otf5(lqtz5f, 'laya.wx.mini.MiniAdpter'), lqtz5f['getJson'] = function (jhkqzl) {
      return JSON['parse'](jhkqzl);
    }, lqtz5f['init'] = function (o7t95, sb2d$a) {
      o7t95 === void 0x0 && (o7t95 = ![]), sb2d$a === void 0x0 && (sb2d$a = ![]);if (lqtz5f['_inited']) return;lqtz5f['window'] = window;if (lqtz5f['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;lqtz5f['_inited'] = !![], lqtz5f['isZiYu'] = sb2d$a, lqtz5f['isPosMsgYu'] = o7t95, lqtz5f['EnvConfig'] = {}, !lqtz5f['isZiYu'] && (n04x['setNativeFileDir']('/layaairGame'), n04x['existDir'](n04x['fileNativeDir'], ug17e['create'](lqtz5f, lqtz5f['onMkdirCallBack']))), lqtz5f['window']['focus'] = function () {}, g1pu['getUrlPath'] = function () {}, lqtz5f['window']['logtime'] = function (s$b2ad) {}, lqtz5f['window']['alertTimeLog'] = function (imcrw) {}, lqtz5f['window']['resetShareInfo'] = function () {}, lqtz5f['window']['CanvasRenderingContext2D'] = function () {}, lqtz5f['window']['CanvasRenderingContext2D']['prototype'] = lqtz5f['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lqtz5f['window']['document']['body']['appendChild'] = function () {}, lqtz5f['EnvConfig']['pixelRatioInt'] = 0x0, k2['getPixelRatio'] = lqtz5f['pixelRatio'], lqtz5f['_preCreateElement'] = kbzha['createElement'], kbzha['createElement'] = lqtz5f['createElement'], k2['createShaderCondition'] = lqtz5f['createShaderCondition'], u6epg['parseXMLFromString'] = lqtz5f['parseXMLFromString'], e71ov['_createInputElement'] = ry3m['_createInputElement'], lqtz5f['EnvConfig']['load'] = ds_$48['prototype']['load'], ds_$48['prototype']['load'] = ht5zlq['prototype']['load'], lqtz5f['isZiYu'] && o7t95 && wx['onMessage'](function (f9o5v) {
        f9o5v['isLoad'] && (n04x['ziyuFileData'][f9o5v['url']] = f9o5v['data']);
      });
    }, lqtz5f['onMkdirCallBack'] = function (m0c, jbah) {
      if (!m0c) n04x['filesListObj'] = JSON['parse'](jbah['data']);
    }, lqtz5f['pixelRatio'] = function () {
      if (!lqtz5f['EnvConfig']['pixelRatioInt']) try {
        var otl9f5 = wx['getSystemInfoSync']();return lqtz5f['EnvConfig']['pixelRatioInt'] = otl9f5['pixelRatio'], otl9f5 = otl9f5, otl9f5['pixelRatio'];
      } catch (gu6pe) {}return lqtz5f['EnvConfig']['pixelRatioInt'];
    }, lqtz5f['createElement'] = function (xsn4_8) {
      if (xsn4_8 == 'canvas') {
        var xc3;return lqtz5f['idx'] == 0x1 ? lqtz5f['isZiYu'] ? (xc3 = sharedCanvas, xc3['style'] = {}) : xc3 = window['canvas'] : xc3 = window['wx']['createCanvas'](), lqtz5f['idx']++, xc3;
      } else {
        if (xsn4_8 == 'textarea' || xsn4_8 == 'input') return lqtz5f['onCreateInput'](xsn4_8);else {
          if (xsn4_8 == 'div') {
            var hkb = lqtz5f['_preCreateElement'](xsn4_8);return hkb['contains'] = function (zq5ltf) {
              return null;
            }, hkb['removeChild'] = function (ql59f) {}, hkb;
          } else return lqtz5f['_preCreateElement'](xsn4_8);
        }
      }
    }, lqtz5f['onCreateInput'] = function (s$2d84) {
      var hzjtql = lqtz5f['_preCreateElement'](s$2d84);return hzjtql['focus'] = ry3m['wxinputFocus'], hzjtql['blur'] = ry3m['wxinputblur'], hzjtql['style'] = {}, hzjtql['value'] = 0x0, hzjtql['parentElement'] = {}, hzjtql['placeholder'] = {}, hzjtql['type'] = {}, hzjtql['setColor'] = function (b$kd2a) {}, hzjtql['setType'] = function (cmi0r3) {}, hzjtql['setFontFace'] = function (s2d8$b) {}, hzjtql['addEventListener'] = function (_s$) {}, hzjtql['contains'] = function (jkhaz) {
        return null;
      }, hzjtql['removeChild'] = function (ds4) {}, hzjtql;
    }, lqtz5f['createShaderCondition'] = function (dbjak2) {
      var nxs_8 = this,
          _4nx0 = function () {
        var zkhqlj = dbjak2;return nxs_8[dbjak2['replace']('this.', '')];
      };return _4nx0;
    }, lqtz5f['EnvConfig'] = null, lqtz5f['window'] = null, lqtz5f['_preCreateElement'] = null, lqtz5f['_inited'] = ![], lqtz5f['wxRequest'] = null, lqtz5f['systemInfo'] = null, lqtz5f['version'] = '0.0.1', lqtz5f['isZiYu'] = ![], lqtz5f['isPosMsgYu'] = ![], lqtz5f['parseXMLFromString'] = function (tfq5) {
      var x0c3, hjzql;tfq5 = tfq5['replace'](/>\s+</g, '><');try {
        x0c3 = new window['Parser']['DOMParser']()['parseFromString'](tfq5, 'text/xml');
      } catch (g7e1) {
        throw '需要引入xml解析库文件';
      }return x0c3;
    }, lqtz5f['idx'] = 0x1, lqtz5f;
  }(),
      ahkjb2 = function () {
    function klqhz() {}l9otf5(klqhz, 'laya.wx.mini.MiniImage');var hqzlj = klqhz['prototype'];return hqzlj['_loadImage'] = function (adj2kb) {
      var djkb2a = this,
          ci3wm = ![];adj2kb['indexOf']('layaNativeDir/') == -0x1 && (ci3wm = !![], adj2kb = f9o71['formatURL'](adj2kb));if (!n04x['getFileInfo'](adj2kb)) {
        if (adj2kb['indexOf']('http://') != -0x1 || adj2kb['indexOf']('https://') != -0x1) n04x['downImg'](adj2kb, new ug17e(klqhz, klqhz['onDownImgCallBack'], [adj2kb, djkb2a]), adj2kb);else klqhz['onCreateImage'](adj2kb, djkb2a, !![]);
      } else klqhz['onCreateImage'](adj2kb, djkb2a, !ci3wm);
    }, klqhz['onDownImgCallBack'] = function (y0rnx3, abjhkz, hbzakj) {
      if (!hbzakj) klqhz['onCreateImage'](y0rnx3, abjhkz);else abjhkz['onError'](null);
    }, klqhz['onCreateImage'] = function (zftl5q, kb2aj, lft9o) {
      lft9o === void 0x0 && (lft9o = ![]);var tq9lf5;if (!lft9o) {
        var nxy_40 = n04x['getFileInfo'](zftl5q),
            l5f9ot = nxy_40['md5'];tq9lf5 = n04x['getFileNativePath'](l5f9ot);
      } else tq9lf5 = zftl5q;if (kb2aj['imgCache'] == null) kb2aj['imgCache'] = {};var $abk2;function d$s248() {
        $abk2['onload'] = null, $abk2['onerror'] = null, delete kb2aj['imgCache'][zftl5q];
      };var x0c3yr = function () {
        d$s248(), kb2aj['onLoaded']($abk2);
      },
          bsa$ = function () {
        d$s248(), kb2aj['event']('error', 'Load image failed');
      };kb2aj['_type'] == 'nativeimage' ? ($abk2 = new kbzha['window']['Image'](), $abk2['crossOrigin'] = '', $abk2['onload'] = x0c3yr, $abk2['onerror'] = bsa$, $abk2['src'] = tq9lf5, kb2aj['imgCache'][zftl5q] = $abk2) : new v9f1o['create'](tq9lf5, { 'onload': x0c3yr, 'onerror': bsa$, 'onCreate': function (r3icwm) {
          $abk2 = r3icwm, kb2aj['imgCache'][zftl5q] = r3icwm;
        } });
    }, klqhz;
  }(),
      ry3m = function () {
    function og71ve() {}return l9otf5(og71ve, 'laya.wx.mini.MiniInput'), og71ve['_createInputElement'] = function () {
      e71ov['_initInput'](e71ov['area'] = kbzha['createElement']('textarea')), e71ov['_initInput'](e71ov['input'] = kbzha['createElement']('input')), e71ov['inputContainer'] = kbzha['createElement']('div'), e71ov['inputContainer']['style']['position'] = 'absolute', e71ov['inputContainer']['style']['zIndex'] = 0x186a0, kbzha['container']['appendChild'](e71ov['inputContainer']), e71ov['inputContainer']['setPos'] = function (e1v7o9, hkqajz) {
        e71ov['inputContainer']['style']['left'] = e1v7o9 + 'px', e71ov['inputContainer']['style']['top'] = hkqajz + 'px';
      }, g1pu['stage']['on']('resize', null, og71ve['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qzhjk) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _8ds4['_soundClass'] = lq5htz, _8ds4['_musicClass'] = lq5htz;
    }, og71ve['_onStageResize'] = function () {
      var uv1e7g = g1pu['stage']['_canvasTransform']['identity']();uv1e7g['scale'](kbzha['width'] / rycm['canvas']['width'] / k2['getPixelRatio'](), kbzha['height'] / rycm['canvas']['height'] / k2['getPixelRatio']());
    }, og71ve['wxinputFocus'] = function (ge6pu1) {
      var q9tlf5 = e71ov['inputElement']['target'];if (q9tlf5 && !q9tlf5['editable']) return;fzq['window']['wx']['offKeyboardConfirm'](), fzq['window']['wx']['offKeyboardInput'](), fzq['window']['wx']['showKeyboard']({ 'defaultValue': q9tlf5['text'], 'maxLength': q9tlf5['maxChars'], 'multiple': q9tlf5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (u16gve) {}, 'fail': function (x4_n0) {} }), fzq['window']['wx']['onKeyboardConfirm'](function (tlf5zq) {
        var kjzhq = tlf5zq ? tlf5zq['value'] : '';q9tlf5['text'] = kjzhq, q9tlf5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fzq['window']['wx']['onKeyboardInput'](function ($sn4_) {
        var v91e7o = $sn4_ ? $sn4_['value'] : '';if (!q9tlf5['multiline']) {
          if (v91e7o['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }q9tlf5['text'] = v91e7o, q9tlf5['event']('input');
      });
    }, og71ve['inputEnter'] = function () {
      e71ov['inputElement']['target']['focus'] = ![];
    }, og71ve['wxinputblur'] = function () {
      og71ve['hideKeyboard']();
    }, og71ve['hideKeyboard'] = function () {
      fzq['window']['wx']['offKeyboardConfirm'](), fzq['window']['wx']['offKeyboardInput'](), fzq['window']['wx']['hideKeyboard']({ 'success': function (ljhzkq) {
          console['log']('隐藏键盘');
        }, 'fail': function (n_84$) {
          console['log']('隐藏键盘出错:' + (n_84$ ? n_84$['errMsg'] : ''));
        } });
    }, og71ve;
  }(),
      ht5zlq = function () {
    function zqlhkj() {}l9otf5(zqlhkj, 'laya.wx.mini.MiniLoader');var tqhzlj = zqlhkj['prototype'];return tqhzlj['load'] = function (kazjb, f5ltqz, gu1e, otf759, uev6g1) {
      gu1e === void 0x0 && (gu1e = !![]), uev6g1 === void 0x0 && (uev6g1 = ![]);var tq9f = this;tq9f['_url'] = kazjb;if (kazjb['indexOf']('data:image') === 0x0) tq9f['_type'] = f5ltqz = 'image';else tq9f['_type'] = f5ltqz || (f5ltqz = tq9f['getTypeFromUrl'](kazjb));tq9f['_cache'] = gu1e, tq9f['_data'] = null;var i3mwr = 'ascii';if (kazjb['indexOf']('.fnt') != -0x1) i3mwr = 'utf8';else f5ltqz == 'arraybuffer' && (i3mwr = '');;var ug6ve1 = u6epg['getFileExtension'](kazjb);if (zqlhkj['_fileTypeArr']['indexOf'](ug6ve1) != -0x1) fzq['EnvConfig']['load']['call'](this, kazjb, f5ltqz, gu1e, otf759, uev6g1);else {
        if (!n04x['getFileInfo'](kazjb)) {
          if (kazjb['indexOf']('layaNativeDir/') != -0x1) {
            if (fzq['isZiYu']) {
              var lqf = n04x['ziyuFileData'][kazjb];tq9f['onLoaded'](lqf);return;
            } else {
              cosnole['log']('read read'), n04x['read'](kazjb, i3mwr, new ug17e(zqlhkj, zqlhkj['onReadNativeCallBack'], [i3mwr, kazjb, f5ltqz, gu1e, otf759, uev6g1, tq9f]));return;
            }
          }if (f9o71['rootPath'] == '') var n4_x8s = kazjb;else n4_x8s = kazjb['split'](f9o71['rootPath'])[0x0];kazjb['indexOf']('http://') != -0x1 || kazjb['indexOf']('https://') != -0x1 ? fzq['EnvConfig']['load']['call'](tq9f, kazjb, f5ltqz, gu1e, otf759, uev6g1) : n04x['readFile'](n4_x8s, i3mwr, new ug17e(zqlhkj, zqlhkj['onReadNativeCallBack'], [i3mwr, kazjb, f5ltqz, gu1e, otf759, uev6g1, tq9f]), kazjb);
        } else fzq['EnvConfig']['load']['call'](this, kazjb, f5ltqz, gu1e, otf759, uev6g1);
      }
    }, tqhzlj['resMgrLoad'] = function (gov7e, e7u1v, jazh, g1uev7, j2dbka, _n4$8s, htjlz) {
      jazh === void 0x0 && (jazh = 0x0), g1uev7 === void 0x0 && (g1uev7 = ![]), j2dbka === void 0x0 && (j2dbka = ![]), _n4$8s === void 0x0 && (_n4$8s = 0x0), htjlz === void 0x0 && (htjlz = 0x3), gov7e['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gov7e), fzq['EnvConfig']['resMgrLoad'](gov7e, (yx3rn0, vge7, r3miwc) => {
        zqlhkj['prototype']['resMgrLoadCallBack'](yx3rn0, vge7, r3miwc, e7u1v);
      }, jazh, g1uev7, j2dbka, _n4$8s, htjlz);
    }, tqhzlj['resMgrLoadCallBack'] = function (qfz, b28s$, qhzl, guep16) {
      console['log']('buff:::', qfz, qhzl, n04x['fileNativeDir'] + '///' + n04x['fileListName']), guep16(qfz, b28s$, qhzl);
    }, tqhzlj['clearRes'] = function (t7o9f5, t5l9fq) {
      t5l9fq === void 0x0 && (t5l9fq = ![]);var badjk2 = this;badjk2['clearRes'](t7o9f5, t5l9fq);var d2kjba = n04x['getFileInfo'](t7o9f5);if (d2kjba && (t7o9f5['indexOf']('http://') != -0x1 || t7o9f5['indexOf']('https://') != -0x1)) {
        var tl5of = d2kjba['md5'],
            o957fv = n04x['getFileNativePath'](tl5of);n04x['remove'](o957fv);
      }
    }, zqlhkj['onReadNativeCallBack'] = function (nxs_, bj2kda, ev6u1g, u6g1, vegu7, xyn03, f75, d$bs, ftqz5) {
      u6g1 === void 0x0 && (u6g1 = !![]), xyn03 === void 0x0 && (xyn03 = ![]), d$bs === void 0x0 && (d$bs = 0x0);if (!d$bs) {
        var u1ve6g;if (ev6u1g == 'json' || ev6u1g == 'atlas') u1ve6g = fzq['getJson'](ftqz5['data']);else ev6u1g == 'xml' ? u1ve6g = u6epg['parseXMLFromString'](ftqz5['data']) : u1ve6g = ftqz5['data'];f75['onLoaded'](u1ve6g), !fzq['isZiYu'] && fzq['isPosMsgYu'] && ev6u1g != 'arraybuffer' && wx['postMessage']({ 'url': bj2kda, 'data': u1ve6g, 'isLoad': !![] });
      } else d$bs == 0x1 && fzq['EnvConfig']['load']['call'](f75, bj2kda, ev6u1g, u6g1, vegu7, xyn03);
    }, cxy3r(zqlhkj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zqlhkj;
  }(),
      n04x = function (sd$4_) {
    function ftlo59() {
      ftlo59['__super']['call'](this);;
    }return l9otf5(ftlo59, 'laya.wx.mini.MiniFileMgr', sd$4_), ftlo59['isLoadFile'] = function (bkjzh) {
      return ftlo59['_fileTypeArr']['indexOf'](bkjzh) != -0x1 ? !![] : ![];
    }, ftlo59['getFileInfo'] = function (o9lft) {
      var hl5tq = o9lft['split']('?')[0x0],
          s8$4d2 = ftlo59['filesListObj'][hl5tq];if (s8$4d2 == null) return null;else return s8$4d2;return null;
    }, ftlo59['onFileUpdate'] = function (v6g1e, jzlhkq) {
      var gu1e6p = v6g1e['split']('/'),
          qlkjz = gu1e6p[gu1e6p['length'] - 0x1],
          _x8n4y = ftlo59['getFileInfo'](jzlhkq);if (_x8n4y == null) ftlo59['onSaveFile'](jzlhkq, qlkjz);else {
        if (_x8n4y['readyUrl'] != jzlhkq) ftlo59['remove'](qlkjz, jzlhkq);
      }
    }, ftlo59['exits'] = function (aj2kh, $bdka2) {
      var n_yx30 = ftlo59['getFileNativePath'](aj2kh);ftlo59['fs']['getFileInfo']({ 'filePath': n_yx30, 'success': function (jtqz) {
          $bdka2 != null && $bdka2['runWith']([0x0, jtqz]);
        }, 'fail': function (p16eg) {
          $bdka2 != null && $bdka2['runWith']([0x1, p16eg]);
        } });
    }, ftlo59['read'] = function (v61ue, t9qf5, qzkhaj, dak$) {
      t9qf5 === void 0x0 && (t9qf5 = 'ascill'), dak$ === void 0x0 && (dak$ = '');var abhk;dak$ != '' ? abhk = ftlo59['getFileNativePath'](v61ue) : abhk = v61ue, ftlo59['fs']['readFile']({ 'filePath': abhk, 'encoding': t9qf5, 'success': function (q95ltf) {
          qzkhaj != null && qzkhaj['runWith']([0x0, q95ltf]);
        }, 'fail': function (bka2$) {
          if (bka2$ && dak$ != '') ftlo59['down'](dak$, t9qf5, qzkhaj, dak$);else qzkhaj != null && qzkhaj['runWith']([0x1]);
        } });
    }, ftlo59['readNativeFile'] = function (jhzkq, ns84x) {
      ftlo59['fs']['readFile']({ 'filePath': jhzkq, 'encoding': '', 'success': function (e7o9v) {
          ns84x != null && ns84x['runWith']([0x0]);
        }, 'fail': function (mrc0) {
          ns84x != null && ns84x['runWith']([0x1]);
        } });
    }, ftlo59['down'] = function (azhk, kbhaz, ka$d2, da2kbj) {
      kbhaz === void 0x0 && (kbhaz = 'ascill'), da2kbj === void 0x0 && (da2kbj = '');var xs48n = ftlo59['getFileNativePath'](da2kbj),
          epgu1 = ftlo59['wxdown']({ 'url': azhk, 'filePath': xs48n, 'success': function (fzql5) {
          if (fzql5['statusCode'] === 0xc8) ftlo59['readFile'](fzql5['filePath'], kbhaz, ka$d2, da2kbj);
        }, 'fail': function (hlqz5t) {
          ka$d2 != null && ka$d2['runWith']([0x1, hlqz5t]);
        } });epgu1['onProgressUpdate'](function (t5qlz) {
        ka$d2 != null && ka$d2['runWith']([0x2, t5qlz['progress']]);
      });
    }, ftlo59['readFile'] = function (fot79, qt5zhl, vf19, ad2k$b) {
      qt5zhl === void 0x0 && (qt5zhl = 'ascill'), ad2k$b === void 0x0 && (ad2k$b = ''), ftlo59['fs']['readFile']({ 'filePath': fot79, 'encoding': qt5zhl, 'success': function (yxr3c0) {
          if (fot79['indexOf']('http://') != -0x1 || fot79['indexOf']('https://') != -0x1) ftlo59['onFileUpdate'](fot79, ad2k$b);vf19 != null && vf19['runWith']([0x0, yxr3c0]);
        }, 'fail': function (fzlqt) {
          if (fzlqt) vf19 != null && vf19['runWith']([0x1, fzlqt]);
        } });
    }, ftlo59['downImg'] = function (xy03r, tq5zh, zlhj) {
      zlhj === void 0x0 && (zlhj = '');var e7gvu = ftlo59['wxdown']({ 'url': xy03r, 'success': function (o1e7v9) {
          o1e7v9['statusCode'] === 0xc8 && ftlo59['copyFile'](o1e7v9['tempFilePath'], zlhj, tq5zh);
        }, 'fail': function (n84y) {
          tq5zh != null && tq5zh['runWith']([0x1, n84y]);
        } });
    }, ftlo59['copyFile'] = function (fl9q, n0_yx3, azhqk) {
      var lhqtjz = fl9q['split']('/'),
          zahq = lhqtjz[lhqtjz['length'] - 0x1],
          x8_n4 = n0_yx3['split']('?')[0x0],
          zlqh5t = ftlo59['getFileInfo'](n0_yx3),
          ny3x_ = ftlo59['getFileNativePath'](zahq);ftlo59['fs']['copyFile']({ 'srcPath': fl9q, 'destPath': ny3x_, 'success': function (d$82sb) {
          if (!zlqh5t) ftlo59['onSaveFile'](n0_yx3, zahq), azhqk != null && azhqk['runWith']([0x0]);else {
            if (zlqh5t['readyUrl'] != n0_yx3) ftlo59['remove'](zahq, n0_yx3, azhqk);
          }
        }, 'fail': function (d28bs$) {
          azhqk != null && azhqk['runWith']([0x1, d28bs$]);
        } });
    }, ftlo59['getFileNativePath'] = function (z5ftlq) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + z5ftlq;
    }, ftlo59['remove'] = function (sd4$, d2akb$, e6vu1) {
      d2akb$ === void 0x0 && (d2akb$ = '');var m30cyr = ftlo59['getFileInfo'](d2akb$),
          hzlkj = ftlo59['getFileNativePath'](m30cyr['md5']);g1pu['loader']['clearRes'](m30cyr['readyUrl']), ftlo59['fs']['unlink']({ 'filePath': hzlkj, 'success': function ($s_d48) {
          if (d2akb$ != '') ftlo59['onSaveFile'](d2akb$, sd4$);e6vu1 != null && e6vu1['runWith']([0x0]);
        }, 'fail': function (qh5tz) {} });
    }, ftlo59['onSaveFile'] = function (ztfql5, x0_yn4) {
      var kad$ = ztfql5['split']('?')[0x0];ftlo59['filesListObj'][kad$] = { 'md5': x0_yn4, 'readyUrl': ztfql5 }, ftlo59['fs']['writeFile']({ 'filePath': ftlo59['fileNativeDir'] + '/' + ftlo59['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ftlo59['filesListObj']), 'success': function (dkba2) {
          console['log']('写入测试测试成功：', dkba2);
        }, 'fail': function (v1o9e7) {
          console['log']('写入测试测试失败：', v1o9e7);
        } });
    }, ftlo59['existDir'] = function (kaj2bd, mic3r0) {
      ftlo59['fs']['mkdir']({ 'dirPath': kaj2bd, 'success': function (v9of1) {
          mic3r0 != null && mic3r0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ab$k) {
          if (ab$k['errMsg']['indexOf']('file already exists') != -0x1) ftlo59['readSync'](ftlo59['fileListName'], 'utf8', mic3r0);else mic3r0 != null && mic3r0['runWith']([0x1, ab$k]);
        } });
    }, ftlo59['readSync'] = function (_n4xs8, dab2jk, lqf9t5, l5tz) {
      dab2jk === void 0x0 && (dab2jk = 'ascill'), l5tz === void 0x0 && (l5tz = '');var s84d = ftlo59['getFileNativePath'](_n4xs8),
          v197o;try {
        v197o = ftlo59['fs']['readFileSync'](s84d), lqf9t5 != null && lqf9t5['runWith']([0x0, { 'data': v197o }]);
      } catch (b$akd) {
        lqf9t5 != null && lqf9t5['runWith']([0x1]);
      }
    }, ftlo59['readCache'] = function () {}, ftlo59['writeCache'] = function (s_n8x4) {
      var gp16 = readyUrl['split']('?')[0x0];ftlo59['filesListObj'][gp16] = { 'md5': md5Name, 'readyUrl': readyUrl }, ftlo59['fs']['writeFile']({ 'filePath': ftlo59['fileNativeDir'] + '/' + ftlo59['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ftlo59['filesListObj']), 'success': function (vfo971) {}, 'fail': function (n40x_) {} });
    }, ftlo59['setNativeFileDir'] = function (yn0x) {
      ftlo59['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yn0x;
    }, ftlo59['filesListObj'] = {}, ftlo59['fileNativeDir'] = null, ftlo59['fileListName'] = 'layaairfiles.txt', ftlo59['ziyuFileData'] = {}, cxy3r(ftlo59, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ftlo59;
  }(ftol59),
      lq5htz = function (d42$s8) {
    function e6gvu1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], e6gvu1['__super']['call'](this), this['_sound'] = e6gvu1['_createSound']();
    }l9otf5(e6gvu1, 'laya.wx.mini.MiniSound', d42$s8);var ot9l5f = e6gvu1['prototype'];return ot9l5f['load'] = function (y04_x) {
      var bs$2d = this;y04_x = f9o71['formatURL'](y04_x), this['url'] = y04_x;if (e6gvu1['_audioCache'][y04_x]) {
        this['event']('complete');return;
      }function cm3r0() {
        if (e6gvu1['_null'] != undefined) bs$2d['_sound']['onCanplay'](e6gvu1['_null']), bs$2d['_sound']['onError'](e6gvu1['_null']);else try {
          bs$2d['_sound']['onCanplay'](null), bs$2d['_sound']['onError'](null), e6gvu1['_null'] = null;
        } catch (ab$d) {
          console['warn']('[wxmini] _clearSound:' + ab$d), bs$2d['_sound']['onCanplay'](jkzbha), bs$2d['_sound']['onError'](jkzbha), e6gvu1['_null'] = jkzbha;
        }
      }function sbd2a$() {
        cm3r0(), g7veu1['loaded'] = !![], g7veu1['event']('complete'), e6gvu1['_audioCache'][g7veu1['url']] = g7veu1;
      }function n_8s(l5f) {
        console['error']('errCode=' + l5f['errCode'] + '  errMsg=' + l5f['errMsg']), cm3r0(), g7veu1['event']('error');
      }function jkzbha() {}this['_sound']['onCanplay'](sbd2a$), this['_sound']['onError'](n_8s), this['_sound']['src'] = y04_x;var g7veu1 = this;
    }, ot9l5f['play'] = function (cirmw3, zkqjlh) {
      cirmw3 === void 0x0 && (cirmw3 = 0x0), zkqjlh === void 0x0 && (zkqjlh = 0x0);var g1ev7;if (this['url'] == _8ds4['_tMusic']) {
        if (!e6gvu1['_musicAudio']) e6gvu1['_musicAudio'] = e6gvu1['_createSound']();g1ev7 = e6gvu1['_musicAudio'];
      } else g1ev7 = e6gvu1['_createSound']();g1ev7['src'] = this['url'];var crm3y0 = new nx4_s8(g1ev7);return crm3y0['url'] = this['url'], crm3y0['loops'] = zkqjlh, crm3y0['startTime'] = cirmw3, crm3y0['play'](), _8ds4['addChannel'](crm3y0), crm3y0;
    }, ot9l5f['dispose'] = function () {
      var fv95o = e6gvu1['_audioCache'][this['url']];fv95o && (fv95o['src'] = '', delete e6gvu1['_audioCache'][this['url']]);
    }, rcim30(0x0, ot9l5f, 'duration', function () {
      return this['_sound']['duration'];
    }), e6gvu1['_createSound'] = function () {
      return e6gvu1['_id']++, fzq['window']['wx']['createInnerAudioContext']();
    }, e6gvu1['_musicAudio'] = null, e6gvu1['_id'] = 0x0, e6gvu1['_audioCache'] = {}, e6gvu1['_null'] = undefined, e6gvu1;
  }(ftol59),
      nx4_s8 = function (xn40y) {
    function x_4y8(b2hkja) {
      this['_audio'] = null, this['_onEnd'] = null, x_4y8['__super']['call'](this), this['_audio'] = b2hkja, this['_onEnd'] = u6epg['bind'](this['__onEnd'], this), b2hkja['onEnded'](this['_onEnd']);
    }l9otf5(x_4y8, 'laya.wx.mini.MiniSoundChannel', xn40y);var ak2djb = x_4y8['prototype'];return ak2djb['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (g1pu['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ak2djb['__onNull'] = function () {}, ak2djb['play'] = function () {
      this['isStopped'] = ![], _8ds4['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ak2djb['stop'] = function () {
      this['isStopped'] = !![], _8ds4['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (x_4y8['_null'] != undefined) this['_audio']['onEnded'](x_4y8['_null']);else try {
        this['_audio']['onEnded'](null), x_4y8['_null'] = null;
      } catch (ljkqh) {
        console['warn']('[wxmini] stop:' + ljkqh), this['_audio']['onEnded'](u6epg['bind'](this['__onNull'], this)), x_4y8['_null'] = u6epg['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ak2djb['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ak2djb['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _8ds4['addChannel'](this), this['_audio']['play']();
    }, rcim30(0x0, ak2djb, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), rcim30(0x0, ak2djb, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), rcim30(0x0, ak2djb, 'volume', function () {
      return 0x1;
    }, function (s_d$84) {}), x_4y8['_null'] = undefined, x_4y8;
  }(dbj2);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jabkzh in Laya) {
    var tzq5l = Laya[jabkzh];tzq5l && tzq5l['__isclass'] && (exports[jabkzh] = tzq5l);
  }
});