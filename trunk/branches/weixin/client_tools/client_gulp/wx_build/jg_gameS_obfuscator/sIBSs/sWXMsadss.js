var K = wx.$S;
(function (window, document, qb18) {
  var h4a$5d = qb18['un'],
      udea$ = qb18['uns'],
      k_w90 = qb18['static'],
      s5q = qb18['class'],
      b81qg = qb18['getset'],
      jyqs = qb18['__newvec'],
      ghyqps = laya['utils']['Browser'],
      yqspgh = laya['events']['Event'],
      k9ov3 = laya['events']['EventDispatcher'],
      ysha5 = laya['resource']['HTMLImage'],
      pyh5d = laya['utils']['Handler'],
      ix_wc0 = laya['display']['Input'],
      $h5da4 = laya['net']['Loader'],
      z3o9k = laya['maths']['Matrix'],
      veuor3 = laya['renders']['Render'],
      kz39ov = laya['utils']['RunDriver'],
      s5qhyp = laya['media']['Sound'],
      iw0x_ = laya['media']['SoundChannel'],
      b8lf1 = laya['media']['SoundManager'],
      spy = laya['display']['Stage'],
      m2txni = laya['net']['URL'],
      l16f8b = laya['utils']['Utils'],
      b168fl = function () {
    function ozkvw9() {}return s5q(ozkvw9, 'laya.wx.mini.MiniAdpter'), ozkvw9['getJson'] = function (a4d5e$) {
      return JSON['parse'](a4d5e$);
    }, ozkvw9['init'] = function (dhp, _i0cx) {
      dhp === void 0x0 && (dhp = ![]), _i0cx === void 0x0 && (_i0cx = ![]);if (ozkvw9['_inited']) return;ozkvw9['window'] = window;if (ozkvw9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ozkvw9['_inited'] = !![], ozkvw9['isZiYu'] = _i0cx, ozkvw9['isPosMsgYu'] = dhp, ozkvw9['EnvConfig'] = {}, !ozkvw9['isZiYu'] && (lb68['setNativeFileDir']('/layaairGame'), lb68['existDir'](lb68['fileNativeDir'], pyh5d['create'](ozkvw9, ozkvw9['onMkdirCallBack']))), ozkvw9['window']['focus'] = function () {}, qb18['getUrlPath'] = function () {}, ozkvw9['window']['logtime'] = function (syjgqp) {}, ozkvw9['window']['alertTimeLog'] = function (ad$h45) {}, ozkvw9['window']['resetShareInfo'] = function () {}, ozkvw9['window']['CanvasRenderingContext2D'] = function () {}, ozkvw9['window']['CanvasRenderingContext2D']['prototype'] = ozkvw9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ozkvw9['window']['document']['body']['appendChild'] = function () {}, ozkvw9['EnvConfig']['pixelRatioInt'] = 0x0, kz39ov['getPixelRatio'] = ozkvw9['pixelRatio'], ozkvw9['_preCreateElement'] = ghyqps['createElement'], ghyqps['createElement'] = ozkvw9['createElement'], kz39ov['createShaderCondition'] = ozkvw9['createShaderCondition'], l16f8b['parseXMLFromString'] = ozkvw9['parseXMLFromString'], ix_wc0['_createInputElement'] = im2_nx['_createInputElement'], ozkvw9['EnvConfig']['load'] = $h5da4['prototype']['load'], $h5da4['prototype']['load'] = cmx_2['prototype']['load'], ozkvw9['isZiYu'] && dhp && wx['onMessage'](function (wvzo9) {
        wvzo9['isLoad'] && (lb68['ziyuFileData'][wvzo9['url']] = wvzo9['data']);
      });
    }, ozkvw9['onMkdirCallBack'] = function (bjg81q, xi_w0) {
      if (!bjg81q) lb68['filesListObj'] = JSON['parse'](xi_w0['data']);
    }, ozkvw9['pixelRatio'] = function () {
      if (!ozkvw9['EnvConfig']['pixelRatioInt']) try {
        var r3okz = wx['getSystemInfoSync']();return ozkvw9['EnvConfig']['pixelRatioInt'] = r3okz['pixelRatio'], r3okz = r3okz, r3okz['pixelRatio'];
      } catch (pj8qg1) {}return ozkvw9['EnvConfig']['pixelRatioInt'];
    }, ozkvw9['createElement'] = function (rv) {
      if (rv == 'canvas') {
        var fl8;return ozkvw9['idx'] == 0x1 ? ozkvw9['isZiYu'] ? (fl8 = sharedCanvas, fl8['style'] = {}) : fl8 = window['canvas'] : fl8 = window['wx']['createCanvas'](), ozkvw9['idx']++, fl8;
      } else {
        if (rv == 'textarea' || rv == 'input') return ozkvw9['onCreateInput'](rv);else {
          if (rv == 'div') {
            var oz93 = ozkvw9['_preCreateElement'](rv);return oz93['contains'] = function (b8g16j) {
              return null;
            }, oz93['removeChild'] = function (orkz3) {}, oz93;
          } else return ozkvw9['_preCreateElement'](rv);
        }
      }
    }, ozkvw9['onCreateInput'] = function (qyhs5) {
      var ysph5d = ozkvw9['_preCreateElement'](qyhs5);return ysph5d['focus'] = im2_nx['wxinputFocus'], ysph5d['blur'] = im2_nx['wxinputblur'], ysph5d['style'] = {}, ysph5d['value'] = 0x0, ysph5d['parentElement'] = {}, ysph5d['placeholder'] = {}, ysph5d['type'] = {}, ysph5d['setColor'] = function (sgyph) {}, ysph5d['setType'] = function (wkzc90) {}, ysph5d['setFontFace'] = function (u43er) {}, ysph5d['addEventListener'] = function (cix0w_) {}, ysph5d['contains'] = function (m2xtn7) {
        return null;
      }, ysph5d['removeChild'] = function (zo9kv) {}, ysph5d;
    }, ozkvw9['createShaderCondition'] = function (y$h5ad) {
      var c0xw = this,
          a$r4 = function () {
        var i2 = y$h5ad;return c0xw[y$h5ad['replace']('this.', '')];
      };return a$r4;
    }, ozkvw9['EnvConfig'] = null, ozkvw9['window'] = null, ozkvw9['_preCreateElement'] = null, ozkvw9['_inited'] = ![], ozkvw9['wxRequest'] = null, ozkvw9['systemInfo'] = null, ozkvw9['version'] = '0.0.1', ozkvw9['isZiYu'] = ![], ozkvw9['isPosMsgYu'] = ![], ozkvw9['parseXMLFromString'] = function (gs1jpq) {
      var i9_0c, gq18b;gs1jpq = gs1jpq['replace'](/>\s+</g, '><');try {
        i9_0c = new window['Parser']['DOMParser']()['parseFromString'](gs1jpq, 'text/xml');
      } catch (u4$aer) {
        throw '需要引入xml解析库文件';
      }return i9_0c;
    }, ozkvw9['idx'] = 0x1, ozkvw9;
  }(),
      nxm2i_ = function () {
    function wo9vzk() {}s5q(wo9vzk, 'laya.wx.mini.MiniImage');var ci0m_x = wo9vzk['prototype'];return ci0m_x['_loadImage'] = function (mntix2) {
      var jb6g81 = this,
          hdpy5 = ![];mntix2['indexOf']('layaNativeDir/') == -0x1 && (hdpy5 = !![], mntix2 = m2txni['formatURL'](mntix2));if (!lb68['getFileInfo'](mntix2)) {
        if (mntix2['indexOf']('http://') != -0x1 || mntix2['indexOf']('https://') != -0x1) lb68['downImg'](mntix2, new pyh5d(wo9vzk, wo9vzk['onDownImgCallBack'], [mntix2, jb6g81]), mntix2);else wo9vzk['onCreateImage'](mntix2, jb6g81, !![]);
      } else wo9vzk['onCreateImage'](mntix2, jb6g81, !hdpy5);
    }, wo9vzk['onDownImgCallBack'] = function (e$a, mi_c2x, $ura4e) {
      if (!$ura4e) wo9vzk['onCreateImage'](e$a, mi_c2x);else mi_c2x['onError'](null);
    }, wo9vzk['onCreateImage'] = function (gqy, ade$, e3$r4u) {
      e3$r4u === void 0x0 && (e3$r4u = ![]);var ci9_w0;if (!e3$r4u) {
        var x_0icm = lb68['getFileInfo'](gqy),
            mxc_2 = x_0icm['md5'];ci9_w0 = lb68['getFileNativePath'](mxc_2);
      } else ci9_w0 = gqy;if (ade$['imgCache'] == null) ade$['imgCache'] = {};var $u3re;function k9cw_0() {
        $u3re['onload'] = null, $u3re['onerror'] = null, delete ade$['imgCache'][gqy];
      };var pq5ys = function () {
        k9cw_0(), ade$['onLoaded']($u3re);
      },
          wc09zk = function () {
        k9cw_0(), ade$['event']('error', 'Load image failed');
      };ade$['_type'] == 'nativeimage' ? ($u3re = new ghyqps['window']['Image'](), $u3re['crossOrigin'] = '', $u3re['onload'] = pq5ys, $u3re['onerror'] = wc09zk, $u3re['src'] = ci9_w0, ade$['imgCache'][gqy] = $u3re) : new ysha5['create'](ci9_w0, { 'onload': pq5ys, 'onerror': wc09zk, 'onCreate': function (kvro) {
          $u3re = kvro, ade$['imgCache'][gqy] = kvro;
        } });
    }, wo9vzk;
  }(),
      im2_nx = function () {
    function sqy5hp() {}return s5q(sqy5hp, 'laya.wx.mini.MiniInput'), sqy5hp['_createInputElement'] = function () {
      ix_wc0['_initInput'](ix_wc0['area'] = ghyqps['createElement']('textarea')), ix_wc0['_initInput'](ix_wc0['input'] = ghyqps['createElement']('input')), ix_wc0['inputContainer'] = ghyqps['createElement']('div'), ix_wc0['inputContainer']['style']['position'] = 'absolute', ix_wc0['inputContainer']['style']['zIndex'] = 0x186a0, ghyqps['container']['appendChild'](ix_wc0['inputContainer']), ix_wc0['inputContainer']['setPos'] = function (min_2, $4a5ed) {
        ix_wc0['inputContainer']['style']['left'] = min_2 + 'px', ix_wc0['inputContainer']['style']['top'] = $4a5ed + 'px';
      }, qb18['stage']['on']('resize', null, sqy5hp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e4r3u$) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), b8lf1['_soundClass'] = _w09, b8lf1['_musicClass'] = _w09;
    }, sqy5hp['_onStageResize'] = function () {
      var mn2tx = qb18['stage']['_canvasTransform']['identity']();mn2tx['scale'](ghyqps['width'] / veuor3['canvas']['width'] / kz39ov['getPixelRatio'](), ghyqps['height'] / veuor3['canvas']['height'] / kz39ov['getPixelRatio']());
    }, sqy5hp['wxinputFocus'] = function (_2xni) {
      var yqp5sh = ix_wc0['inputElement']['target'];if (yqp5sh && !yqp5sh['editable']) return;b168fl['window']['wx']['offKeyboardConfirm'](), b168fl['window']['wx']['offKeyboardInput'](), b168fl['window']['wx']['showKeyboard']({ 'defaultValue': yqp5sh['text'], 'maxLength': yqp5sh['maxChars'], 'multiple': yqp5sh['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (w09_i) {}, 'fail': function (dy5) {} }), b168fl['window']['wx']['onKeyboardConfirm'](function (spqyh) {
        var e$u3r = spqyh ? spqyh['value'] : '';yqp5sh['text'] = e$u3r, yqp5sh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), b168fl['window']['wx']['onKeyboardInput'](function (qgjsp1) {
        var x27tm = qgjsp1 ? qgjsp1['value'] : '';if (!yqp5sh['multiline']) {
          if (x27tm['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yqp5sh['text'] = x27tm, yqp5sh['event']('input');
      });
    }, sqy5hp['inputEnter'] = function () {
      ix_wc0['inputElement']['target']['focus'] = ![];
    }, sqy5hp['wxinputblur'] = function () {
      sqy5hp['hideKeyboard']();
    }, sqy5hp['hideKeyboard'] = function () {
      b168fl['window']['wx']['offKeyboardConfirm'](), b168fl['window']['wx']['offKeyboardInput'](), b168fl['window']['wx']['hideKeyboard']({ 'success': function (g8j1b) {
          console['log']('隐藏键盘');
        }, 'fail': function (jp8qg) {
          console['log']('隐藏键盘出错:' + (jp8qg ? jp8qg['errMsg'] : ''));
        } });
    }, sqy5hp;
  }(),
      cmx_2 = function () {
    function $aeud() {}s5q($aeud, 'laya.wx.mini.MiniLoader');var dsy5ha = $aeud['prototype'];return dsy5ha['load'] = function (it, b8gj1q, tinx2, _9k0c, mtxi2n) {
      tinx2 === void 0x0 && (tinx2 = !![]), mtxi2n === void 0x0 && (mtxi2n = ![]);var y$a5 = this;y$a5['_url'] = it;if (it['indexOf']('data:image') === 0x0) y$a5['_type'] = b8gj1q = 'image';else y$a5['_type'] = b8gj1q || (b8gj1q = y$a5['getTypeFromUrl'](it));y$a5['_cache'] = tinx2, y$a5['_data'] = null;var phgys = 'ascii';if (it['indexOf']('.fnt') != -0x1) phgys = 'utf8';else b8gj1q == 'arraybuffer' && (phgys = '');;var kvozr = l16f8b['getFileExtension'](it);if ($aeud['_fileTypeArr']['indexOf'](kvozr) != -0x1) b168fl['EnvConfig']['load']['call'](this, it, b8gj1q, tinx2, _9k0c, mtxi2n);else {
        if (!lb68['getFileInfo'](it)) {
          if (it['indexOf']('layaNativeDir/') != -0x1) {
            if (b168fl['isZiYu']) {
              var zvowk9 = lb68['ziyuFileData'][it];y$a5['onLoaded'](zvowk9);return;
            } else {
              cosnole['log']('read read'), lb68['read'](it, phgys, new pyh5d($aeud, $aeud['onReadNativeCallBack'], [phgys, it, b8gj1q, tinx2, _9k0c, mtxi2n, y$a5]));return;
            }
          }if (m2txni['rootPath'] == '') var vkzo9 = it;else vkzo9 = it['split'](m2txni['rootPath'])[0x0];it['indexOf']('http://') != -0x1 || it['indexOf']('https://') != -0x1 ? b168fl['EnvConfig']['load']['call'](y$a5, it, b8gj1q, tinx2, _9k0c, mtxi2n) : lb68['readFile'](vkzo9, phgys, new pyh5d($aeud, $aeud['onReadNativeCallBack'], [phgys, it, b8gj1q, tinx2, _9k0c, mtxi2n, y$a5]), it);
        } else b168fl['EnvConfig']['load']['call'](this, it, b8gj1q, tinx2, _9k0c, mtxi2n);
      }
    }, dsy5ha['resMgrLoad'] = function (k_wc90, u$er, yjspqg, d5hy, x2mnit, zvrko3, ue4a$d) {
      yjspqg === void 0x0 && (yjspqg = 0x0), d5hy === void 0x0 && (d5hy = ![]), x2mnit === void 0x0 && (x2mnit = ![]), zvrko3 === void 0x0 && (zvrko3 = 0x0), ue4a$d === void 0x0 && (ue4a$d = 0x3), k_wc90['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k_wc90), b168fl['EnvConfig']['resMgrLoad'](k_wc90, (f18l6b, w0ic_x, bl1f68) => {
        $aeud['prototype']['resMgrLoadCallBack'](f18l6b, w0ic_x, bl1f68, u$er);
      }, yjspqg, d5hy, x2mnit, zvrko3, ue4a$d);
    }, dsy5ha['resMgrLoadCallBack'] = function (earu, _xwic0, yg, blj681) {
      console['log']('buff:::', earu, yg, lb68['fileNativeDir'] + '///' + lb68['fileListName']), blj681(earu, _xwic0, yg);
    }, dsy5ha['clearRes'] = function (pshq, wkc_) {
      wkc_ === void 0x0 && (wkc_ = ![]);var j8b1l = this;j8b1l['clearRes'](pshq, wkc_);var c_m0ix = lb68['getFileInfo'](pshq);if (c_m0ix && (pshq['indexOf']('http://') != -0x1 || pshq['indexOf']('https://') != -0x1)) {
        var vkz9w = c_m0ix['md5'],
            $aer4u = lb68['getFileNativePath'](vkz9w);lb68['remove']($aer4u);
      }
    }, $aeud['onReadNativeCallBack'] = function ($rau4, ovuzr, kz0wv, reu$43, hdy5sp, tn2x, r3$eu, ntm2x, y5dsp) {
      reu$43 === void 0x0 && (reu$43 = !![]), tn2x === void 0x0 && (tn2x = ![]), ntm2x === void 0x0 && (ntm2x = 0x0);if (!ntm2x) {
        var gqjsp1;if (kz0wv == 'json' || kz0wv == 'atlas') gqjsp1 = b168fl['getJson'](y5dsp['data']);else kz0wv == 'xml' ? gqjsp1 = l16f8b['parseXMLFromString'](y5dsp['data']) : gqjsp1 = y5dsp['data'];r3$eu['onLoaded'](gqjsp1), !b168fl['isZiYu'] && b168fl['isPosMsgYu'] && kz0wv != 'arraybuffer' && wx['postMessage']({ 'url': ovuzr, 'data': gqjsp1, 'isLoad': !![] });
      } else ntm2x == 0x1 && b168fl['EnvConfig']['load']['call'](r3$eu, ovuzr, kz0wv, reu$43, hdy5sp, tn2x);
    }, k_w90($aeud, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $aeud;
  }(),
      lb68 = function (ozr3) {
    function i0x_c() {
      i0x_c['__super']['call'](this);;
    }return s5q(i0x_c, 'laya.wx.mini.MiniFileMgr', ozr3), i0x_c['isLoadFile'] = function (ervuo3) {
      return i0x_c['_fileTypeArr']['indexOf'](ervuo3) != -0x1 ? !![] : ![];
    }, i0x_c['getFileInfo'] = function (shdpy5) {
      var inmt2 = shdpy5['split']('?')[0x0],
          ea4$ru = i0x_c['filesListObj'][inmt2];if (ea4$ru == null) return null;else return ea4$ru;return null;
    }, i0x_c['onFileUpdate'] = function (w0_9c, wi09_) {
      var pj81g = w0_9c['split']('/'),
          jbg8q1 = pj81g[pj81g['length'] - 0x1],
          urev3 = i0x_c['getFileInfo'](wi09_);if (urev3 == null) i0x_c['onSaveFile'](wi09_, jbg8q1);else {
        if (urev3['readyUrl'] != wi09_) i0x_c['remove'](jbg8q1, wi09_);
      }
    }, i0x_c['exits'] = function (hqp5y, sqg1pj) {
      var cxm0 = i0x_c['getFileNativePath'](hqp5y);i0x_c['fs']['getFileInfo']({ 'filePath': cxm0, 'success': function (rozk) {
          sqg1pj != null && sqg1pj['runWith']([0x0, rozk]);
        }, 'fail': function (q5yh) {
          sqg1pj != null && sqg1pj['runWith']([0x1, q5yh]);
        } });
    }, i0x_c['read'] = function (hsp5yq, j8q1gp, zk3vro, cxi_2m) {
      j8q1gp === void 0x0 && (j8q1gp = 'ascill'), cxi_2m === void 0x0 && (cxi_2m = '');var a$4h;cxi_2m != '' ? a$4h = i0x_c['getFileNativePath'](hsp5yq) : a$4h = hsp5yq, i0x_c['fs']['readFile']({ 'filePath': a$4h, 'encoding': j8q1gp, 'success': function (qjb8) {
          zk3vro != null && zk3vro['runWith']([0x0, qjb8]);
        }, 'fail': function (xni2) {
          if (xni2 && cxi_2m != '') i0x_c['down'](cxi_2m, j8q1gp, zk3vro, cxi_2m);else zk3vro != null && zk3vro['runWith']([0x1]);
        } });
    }, i0x_c['readNativeFile'] = function (_ni2m, e3urvo) {
      i0x_c['fs']['readFile']({ 'filePath': _ni2m, 'encoding': '', 'success': function (jgp1) {
          e3urvo != null && e3urvo['runWith']([0x0]);
        }, 'fail': function (pq8j1g) {
          e3urvo != null && e3urvo['runWith']([0x1]);
        } });
    }, i0x_c['down'] = function (x_mni, f618b, n2mx7t, $r4e3) {
      f618b === void 0x0 && (f618b = 'ascill'), $r4e3 === void 0x0 && ($r4e3 = '');var ckw_0 = i0x_c['getFileNativePath']($r4e3),
          d5hyp = i0x_c['wxdown']({ 'url': x_mni, 'filePath': ckw_0, 'success': function (j18qpg) {
          if (j18qpg['statusCode'] === 0xc8) i0x_c['readFile'](j18qpg['filePath'], f618b, n2mx7t, $r4e3);
        }, 'fail': function (dya5$) {
          n2mx7t != null && n2mx7t['runWith']([0x1, dya5$]);
        } });d5hyp['onProgressUpdate'](function (x_c0iw) {
        n2mx7t != null && n2mx7t['runWith']([0x2, x_c0iw['progress']]);
      });
    }, i0x_c['readFile'] = function (i_c9, z3ruvo, rz3uv, pg1sj) {
      z3ruvo === void 0x0 && (z3ruvo = 'ascill'), pg1sj === void 0x0 && (pg1sj = ''), i0x_c['fs']['readFile']({ 'filePath': i_c9, 'encoding': z3ruvo, 'success': function (r$u43e) {
          if (i_c9['indexOf']('http://') != -0x1 || i_c9['indexOf']('https://') != -0x1) i0x_c['onFileUpdate'](i_c9, pg1sj);rz3uv != null && rz3uv['runWith']([0x0, r$u43e]);
        }, 'fail': function (re3uo) {
          if (re3uo) rz3uv != null && rz3uv['runWith']([0x1, re3uo]);
        } });
    }, i0x_c['downImg'] = function (i0wc_x, zkro, cxiw) {
      cxiw === void 0x0 && (cxiw = '');var qpyhs5 = i0x_c['wxdown']({ 'url': i0wc_x, 'success': function (yash5d) {
          yash5d['statusCode'] === 0xc8 && i0x_c['copyFile'](yash5d['tempFilePath'], cxiw, zkro);
        }, 'fail': function (pjqsy) {
          zkro != null && zkro['runWith']([0x1, pjqsy]);
        } });
    }, i0x_c['copyFile'] = function (mtnx2i, h$5ya, qsgpjy) {
      var wk09_c = mtnx2i['split']('/'),
          zck0 = wk09_c[wk09_c['length'] - 0x1],
          w0ci_x = h$5ya['split']('?')[0x0],
          gqhpys = i0x_c['getFileInfo'](h$5ya),
          z3k = i0x_c['getFileNativePath'](zck0);i0x_c['fs']['copyFile']({ 'srcPath': mtnx2i, 'destPath': z3k, 'success': function (v9kw0z) {
          if (!gqhpys) i0x_c['onSaveFile'](h$5ya, zck0), qsgpjy != null && qsgpjy['runWith']([0x0]);else {
            if (gqhpys['readyUrl'] != h$5ya) i0x_c['remove'](zck0, h$5ya, qsgpjy);
          }
        }, 'fail': function (mic0) {
          qsgpjy != null && qsgpjy['runWith']([0x1, mic0]);
        } });
    }, i0x_c['getFileNativePath'] = function (vk93z) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vk93z;
    }, i0x_c['remove'] = function (d$4au, $au, qsgj1) {
      $au === void 0x0 && ($au = '');var k0w_c9 = i0x_c['getFileInfo']($au),
          pgqshy = i0x_c['getFileNativePath'](k0w_c9['md5']);qb18['loader']['clearRes'](k0w_c9['readyUrl']), i0x_c['fs']['unlink']({ 'filePath': pgqshy, 'success': function (k9vwzo) {
          if ($au != '') i0x_c['onSaveFile']($au, d$4au);qsgj1 != null && qsgj1['runWith']([0x0]);
        }, 'fail': function (b8f) {} });
    }, i0x_c['onSaveFile'] = function (yh5qs, w0zc9k) {
      var sy5hda = yh5qs['split']('?')[0x0];i0x_c['filesListObj'][sy5hda] = { 'md5': w0zc9k, 'readyUrl': yh5qs }, i0x_c['fs']['writeFile']({ 'filePath': i0x_c['fileNativeDir'] + '/' + i0x_c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i0x_c['filesListObj']), 'success': function (cmxi_2) {
          console['log']('写入测试测试成功：', cmxi_2);
        }, 'fail': function (dhy$5a) {
          console['log']('写入测试测试失败：', dhy$5a);
        } });
    }, i0x_c['existDir'] = function (in2x, c0_xm) {
      i0x_c['fs']['mkdir']({ 'dirPath': in2x, 'success': function (ruz3vo) {
          c0_xm != null && c0_xm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (okz3r) {
          if (okz3r['errMsg']['indexOf']('file already exists') != -0x1) i0x_c['readSync'](i0x_c['fileListName'], 'utf8', c0_xm);else c0_xm != null && c0_xm['runWith']([0x1, okz3r]);
        } });
    }, i0x_c['readSync'] = function (j1bq8, sgp1, dh5sya, syha5d) {
      sgp1 === void 0x0 && (sgp1 = 'ascill'), syha5d === void 0x0 && (syha5d = '');var qj1b8 = i0x_c['getFileNativePath'](j1bq8),
          r$4e3u;try {
        r$4e3u = i0x_c['fs']['readFileSync'](qj1b8), dh5sya != null && dh5sya['runWith']([0x0, { 'data': r$4e3u }]);
      } catch ($54hd) {
        dh5sya != null && dh5sya['runWith']([0x1]);
      }
    }, i0x_c['readCache'] = function () {}, i0x_c['writeCache'] = function (c90iw) {
      var gsj1p = readyUrl['split']('?')[0x0];i0x_c['filesListObj'][gsj1p] = { 'md5': md5Name, 'readyUrl': readyUrl }, i0x_c['fs']['writeFile']({ 'filePath': i0x_c['fileNativeDir'] + '/' + i0x_c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i0x_c['filesListObj']), 'success': function (qgb18) {}, 'fail': function (w0xi_) {} });
    }, i0x_c['setNativeFileDir'] = function (yshd5) {
      i0x_c['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yshd5;
    }, i0x_c['filesListObj'] = {}, i0x_c['fileNativeDir'] = null, i0x_c['fileListName'] = 'layaairfiles.txt', i0x_c['ziyuFileData'] = {}, k_w90(i0x_c, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), i0x_c;
  }(k9ov3),
      _w09 = function (hd$ya) {
    function gyqsh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], gyqsh['__super']['call'](this), this['_sound'] = gyqsh['_createSound']();
    }s5q(gyqsh, 'laya.wx.mini.MiniSound', hd$ya);var _9cwi0 = gyqsh['prototype'];return _9cwi0['load'] = function (tmnix2) {
      var ay$5d = this;tmnix2 = m2txni['formatURL'](tmnix2), this['url'] = tmnix2;if (gyqsh['_audioCache'][tmnix2]) {
        this['event']('complete');return;
      }function mn7xt2() {
        if (gyqsh['_null'] != undefined) ay$5d['_sound']['onCanplay'](gyqsh['_null']), ay$5d['_sound']['onError'](gyqsh['_null']);else try {
          ay$5d['_sound']['onCanplay'](null), ay$5d['_sound']['onError'](null), gyqsh['_null'] = null;
        } catch (d5yh$a) {
          console['warn']('[wxmini] _clearSound:' + d5yh$a), ay$5d['_sound']['onCanplay'](n_2mx), ay$5d['_sound']['onError'](n_2mx), gyqsh['_null'] = n_2mx;
        }
      }function s5yadh() {
        mn7xt2(), t27n['loaded'] = !![], t27n['event']('complete'), gyqsh['_audioCache'][t27n['url']] = t27n;
      }function b8l61(q1jpg8) {
        console['error']('errCode=' + q1jpg8['errCode'] + '  errMsg=' + q1jpg8['errMsg']), mn7xt2(), t27n['event']('error');
      }function n_2mx() {}this['_sound']['onCanplay'](s5yadh), this['_sound']['onError'](b8l61), this['_sound']['src'] = tmnix2;var t27n = this;
    }, _9cwi0['play'] = function (qypgsh, hsypq) {
      qypgsh === void 0x0 && (qypgsh = 0x0), hsypq === void 0x0 && (hsypq = 0x0);var w9_kc0;if (this['url'] == b8lf1['_tMusic']) {
        if (!gyqsh['_musicAudio']) gyqsh['_musicAudio'] = gyqsh['_createSound']();w9_kc0 = gyqsh['_musicAudio'];
      } else w9_kc0 = gyqsh['_createSound']();w9_kc0['src'] = this['url'];var i_cm = new du$4(w9_kc0);return i_cm['url'] = this['url'], i_cm['loops'] = hsypq, i_cm['startTime'] = qypgsh, i_cm['play'](), b8lf1['addChannel'](i_cm), i_cm;
    }, _9cwi0['dispose'] = function () {
      var xim_2c = gyqsh['_audioCache'][this['url']];xim_2c && (xim_2c['src'] = '', delete gyqsh['_audioCache'][this['url']]);
    }, b81qg(0x0, _9cwi0, 'duration', function () {
      return this['_sound']['duration'];
    }), gyqsh['_createSound'] = function () {
      return gyqsh['_id']++, b168fl['window']['wx']['createInnerAudioContext']();
    }, gyqsh['_musicAudio'] = null, gyqsh['_id'] = 0x0, gyqsh['_audioCache'] = {}, gyqsh['_null'] = undefined, gyqsh;
  }(k9ov3),
      du$4 = function (xt7mn2) {
    function kw09(j61) {
      this['_audio'] = null, this['_onEnd'] = null, kw09['__super']['call'](this), this['_audio'] = j61, this['_onEnd'] = l16f8b['bind'](this['__onEnd'], this), j61['onEnded'](this['_onEnd']);
    }s5q(kw09, 'laya.wx.mini.MiniSoundChannel', xt7mn2);var _90iw = kw09['prototype'];return _90iw['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qb18['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _90iw['__onNull'] = function () {}, _90iw['play'] = function () {
      this['isStopped'] = ![], b8lf1['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _90iw['stop'] = function () {
      this['isStopped'] = !![], b8lf1['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kw09['_null'] != undefined) this['_audio']['onEnded'](kw09['_null']);else try {
        this['_audio']['onEnded'](null), kw09['_null'] = null;
      } catch (yha$5d) {
        console['warn']('[wxmini] stop:' + yha$5d), this['_audio']['onEnded'](l16f8b['bind'](this['__onNull'], this)), kw09['_null'] = l16f8b['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _90iw['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _90iw['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], b8lf1['addChannel'](this), this['_audio']['play']();
    }, b81qg(0x0, _90iw, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), b81qg(0x0, _90iw, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), b81qg(0x0, _90iw, 'volume', function () {
      return 0x1;
    }, function (h5qps) {}), kw09['_null'] = undefined, kw09;
  }(iw0x_);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var z9kvo in Laya) {
    var zc0k9 = Laya[z9kvo];zc0k9 && zc0k9['__isclass'] && (exports[z9kvo] = zc0k9);
  }
});