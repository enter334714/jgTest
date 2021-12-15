var m = wx.$g;
(function (window, document, doz263) {
  var fdot4 = doz263['un'],
      sgc8l = doz263['uns'],
      _tf403 = doz263['static'],
      weq7y = doz263['class'],
      p_50ib = doz263['getset'],
      wha1k = doz263['__newvec'],
      aix1h = laya['utils']['Browser'],
      ftbp0_ = laya['events']['Event'],
      ruj26$ = laya['events']['EventDispatcher'],
      q8slg = laya['resource']['HTMLImage'],
      p_5b0 = laya['utils']['Handler'],
      bxi5pa = laya['display']['Input'],
      zod243 = laya['net']['Loader'],
      xbha = laya['maths']['Matrix'],
      $6r2z = laya['renders']['Render'],
      ozr6d2 = laya['utils']['RunDriver'],
      pib5x = laya['media']['Sound'],
      z6odr = laya['media']['SoundChannel'],
      c87sqg = laya['media']['SoundManager'],
      qscg7 = laya['display']['Stage'],
      u2$jr6 = laya['net']['URL'],
      h1wyxk = laya['utils']['Utils'],
      t34df = function () {
    function b05ai() {}return weq7y(b05ai, 'laya.wx.mini.MiniAdpter'), b05ai['getJson'] = function ($6umr) {
      return JSON['parse']($6umr);
    }, b05ai['init'] = function (_5fp0b, keh) {
      _5fp0b === void 0x0 && (_5fp0b = ![]), keh === void 0x0 && (keh = ![]);if (b05ai['_inited']) return;b05ai['window'] = window;if (b05ai['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;b05ai['_inited'] = !![], b05ai['isZiYu'] = keh, b05ai['isPosMsgYu'] = _5fp0b, b05ai['EnvConfig'] = {}, !b05ai['isZiYu'] && (o4_t['setNativeFileDir']('/layaairGame'), o4_t['existDir'](o4_t['fileNativeDir'], p_5b0['create'](b05ai, b05ai['onMkdirCallBack']))), b05ai['window']['focus'] = function () {}, doz263['getUrlPath'] = function () {}, b05ai['window']['logtime'] = function (o34tzd) {}, b05ai['window']['alertTimeLog'] = function (tb_0p) {}, b05ai['window']['resetShareInfo'] = function () {}, b05ai['window']['CanvasRenderingContext2D'] = function () {}, b05ai['window']['CanvasRenderingContext2D']['prototype'] = b05ai['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], b05ai['window']['document']['body']['appendChild'] = function () {}, b05ai['EnvConfig']['pixelRatioInt'] = 0x0, ozr6d2['getPixelRatio'] = b05ai['pixelRatio'], b05ai['_preCreateElement'] = aix1h['createElement'], aix1h['createElement'] = b05ai['createElement'], ozr6d2['createShaderCondition'] = b05ai['createShaderCondition'], h1wyxk['parseXMLFromString'] = b05ai['parseXMLFromString'], bxi5pa['_createInputElement'] = cs7gq['_createInputElement'], b05ai['EnvConfig']['load'] = zod243['prototype']['load'], zod243['prototype']['load'] = iax5hb['prototype']['load'], b05ai['isZiYu'] && _5fp0b && wx['onMessage'](function (c89gl) {
        c89gl['isLoad'] && (o4_t['ziyuFileData'][c89gl['url']] = c89gl['data']);
      });
    }, b05ai['onMkdirCallBack'] = function (vkyw7, p5b_0i) {
      if (!vkyw7) o4_t['filesListObj'] = JSON['parse'](p5b_0i['data']);
    }, b05ai['pixelRatio'] = function () {
      if (!b05ai['EnvConfig']['pixelRatioInt']) try {
        var s8glc = wx['getSystemInfoSync']();return b05ai['EnvConfig']['pixelRatioInt'] = s8glc['pixelRatio'], s8glc = s8glc, s8glc['pixelRatio'];
      } catch (hkey1) {}return b05ai['EnvConfig']['pixelRatioInt'];
    }, b05ai['createElement'] = function (kyve1w) {
      if (kyve1w == 'canvas') {
        var qg8;return b05ai['idx'] == 0x1 ? b05ai['isZiYu'] ? (qg8 = sharedCanvas, qg8['style'] = {}) : qg8 = window['canvas'] : qg8 = window['wx']['createCanvas'](), b05ai['idx']++, qg8;
      } else {
        if (kyve1w == 'textarea' || kyve1w == 'input') return b05ai['onCreateInput'](kyve1w);else {
          if (kyve1w == 'div') {
            var zd3o2 = b05ai['_preCreateElement'](kyve1w);return zd3o2['contains'] = function (b_5p0i) {
              return null;
            }, zd3o2['removeChild'] = function (doz432) {}, zd3o2;
          } else return b05ai['_preCreateElement'](kyve1w);
        }
      }
    }, b05ai['onCreateInput'] = function (d4t3f) {
      var pf_b0 = b05ai['_preCreateElement'](d4t3f);return pf_b0['focus'] = cs7gq['wxinputFocus'], pf_b0['blur'] = cs7gq['wxinputblur'], pf_b0['style'] = {}, pf_b0['value'] = 0x0, pf_b0['parentElement'] = {}, pf_b0['placeholder'] = {}, pf_b0['type'] = {}, pf_b0['setColor'] = function (qgl) {}, pf_b0['setType'] = function (i5pxba) {}, pf_b0['setFontFace'] = function (vw1yek) {}, pf_b0['addEventListener'] = function (ftdo3) {}, pf_b0['contains'] = function (sg8c) {
        return null;
      }, pf_b0['removeChild'] = function ($rjm) {}, pf_b0;
    }, b05ai['createShaderCondition'] = function (ql8s) {
      var e7ywv = this,
          rdj = function () {
        var gqcs8 = ql8s;return e7ywv[ql8s['replace']('this.', '')];
      };return rdj;
    }, b05ai['EnvConfig'] = null, b05ai['window'] = null, b05ai['_preCreateElement'] = null, b05ai['_inited'] = ![], b05ai['wxRequest'] = null, b05ai['systemInfo'] = null, b05ai['version'] = '0.0.1', b05ai['isZiYu'] = ![], b05ai['isPosMsgYu'] = ![], b05ai['parseXMLFromString'] = function (ix) {
      var m$uj6r, sl8c;ix = ix['replace'](/>\s+</g, '><');try {
        m$uj6r = new window['Parser']['DOMParser']()['parseFromString'](ix, 'text/xml');
      } catch (sq8cl) {
        throw '需要引入xml解析库文件';
      }return m$uj6r;
    }, b05ai['idx'] = 0x1, b05ai;
  }(),
      cqlgs = function () {
    function w1evky() {}weq7y(w1evky, 'laya.wx.mini.MiniImage');var pb_0f = w1evky['prototype'];return pb_0f['_loadImage'] = function (b_ftp) {
      var d4tof3 = this,
          bftp_0 = ![];b_ftp['indexOf']('layaNativeDir/') == -0x1 && (bftp_0 = !![], b_ftp = u2$jr6['formatURL'](b_ftp));if (!o4_t['getFileInfo'](b_ftp)) {
        if (b_ftp['indexOf']('http://') != -0x1 || b_ftp['indexOf']('https://') != -0x1) o4_t['downImg'](b_ftp, new p_5b0(w1evky, w1evky['onDownImgCallBack'], [b_ftp, d4tof3]), b_ftp);else w1evky['onCreateImage'](b_ftp, d4tof3, !![]);
      } else w1evky['onCreateImage'](b_ftp, d4tof3, !bftp_0);
    }, w1evky['onDownImgCallBack'] = function (xwhy, k1ey, z4o2d3) {
      if (!z4o2d3) w1evky['onCreateImage'](xwhy, k1ey);else k1ey['onError'](null);
    }, w1evky['onCreateImage'] = function (c7vge, $62ju, vekw1) {
      vekw1 === void 0x0 && (vekw1 = ![]);var o4dz;if (!vekw1) {
        var ywke = o4_t['getFileInfo'](c7vge),
            wyk1e = ywke['md5'];o4dz = o4_t['getFileNativePath'](wyk1e);
      } else o4dz = c7vge;if ($62ju['imgCache'] == null) $62ju['imgCache'] = {};var gv7eqy;function g7vsqc() {
        gv7eqy['onload'] = null, gv7eqy['onerror'] = null, delete $62ju['imgCache'][c7vge];
      };var t3d4z = function () {
        g7vsqc(), $62ju['onLoaded'](gv7eqy);
      },
          r$j6mu = function () {
        g7vsqc(), $62ju['event']('error', 'Load image failed');
      };$62ju['_type'] == 'nativeimage' ? (gv7eqy = new aix1h['window']['Image'](), gv7eqy['crossOrigin'] = '', gv7eqy['onload'] = t3d4z, gv7eqy['onerror'] = r$j6mu, gv7eqy['src'] = o4dz, $62ju['imgCache'][c7vge] = gv7eqy) : new q8slg['create'](o4dz, { 'onload': t3d4z, 'onerror': r$j6mu, 'onCreate': function (tf_4p) {
          gv7eqy = tf_4p, $62ju['imgCache'][c7vge] = tf_4p;
        } });
    }, w1evky;
  }(),
      cs7gq = function () {
    function sqgv() {}return weq7y(sqgv, 'laya.wx.mini.MiniInput'), sqgv['_createInputElement'] = function () {
      bxi5pa['_initInput'](bxi5pa['area'] = aix1h['createElement']('textarea')), bxi5pa['_initInput'](bxi5pa['input'] = aix1h['createElement']('input')), bxi5pa['inputContainer'] = aix1h['createElement']('div'), bxi5pa['inputContainer']['style']['position'] = 'absolute', bxi5pa['inputContainer']['style']['zIndex'] = 0x186a0, aix1h['container']['appendChild'](bxi5pa['inputContainer']), bxi5pa['inputContainer']['setPos'] = function (f4_03, a0bip) {
        bxi5pa['inputContainer']['style']['left'] = f4_03 + 'px', bxi5pa['inputContainer']['style']['top'] = a0bip + 'px';
      }, doz263['stage']['on']('resize', null, sqgv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tbp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), c87sqg['_soundClass'] = cgq87s, c87sqg['_musicClass'] = cgq87s;
    }, sqgv['_onStageResize'] = function () {
      var _ft04 = doz263['stage']['_canvasTransform']['identity']();_ft04['scale'](aix1h['width'] / $6r2z['canvas']['width'] / ozr6d2['getPixelRatio'](), aix1h['height'] / $6r2z['canvas']['height'] / ozr6d2['getPixelRatio']());
    }, sqgv['wxinputFocus'] = function (vkewy7) {
      var j2$z6 = bxi5pa['inputElement']['target'];if (j2$z6 && !j2$z6['editable']) return;t34df['window']['wx']['offKeyboardConfirm'](), t34df['window']['wx']['offKeyboardInput'](), t34df['window']['wx']['showKeyboard']({ 'defaultValue': j2$z6['text'], 'maxLength': j2$z6['maxChars'], 'multiple': j2$z6['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tzo4d3) {}, 'fail': function (xy1whk) {} }), t34df['window']['wx']['onKeyboardConfirm'](function (otdz4) {
        var cg8q7s = otdz4 ? otdz4['value'] : '';j2$z6['text'] = cg8q7s, j2$z6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), t34df['window']['wx']['onKeyboardInput'](function ($z6r) {
        var bxipa = $z6r ? $z6r['value'] : '';if (!j2$z6['multiline']) {
          if (bxipa['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }j2$z6['text'] = bxipa, j2$z6['event']('input');
      });
    }, sqgv['inputEnter'] = function () {
      bxi5pa['inputElement']['target']['focus'] = ![];
    }, sqgv['wxinputblur'] = function () {
      sqgv['hideKeyboard']();
    }, sqgv['hideKeyboard'] = function () {
      t34df['window']['wx']['offKeyboardConfirm'](), t34df['window']['wx']['offKeyboardInput'](), t34df['window']['wx']['hideKeyboard']({ 'success': function (s7gq8) {
          console['log']('隐藏键盘');
        }, 'fail': function (p0b_t) {
          console['log']('隐藏键盘出错:' + (p0b_t ? p0b_t['errMsg'] : ''));
        } });
    }, sqgv;
  }(),
      iax5hb = function () {
    function csgvq() {}weq7y(csgvq, 'laya.wx.mini.MiniLoader');var heywk = csgvq['prototype'];return heywk['load'] = function (of4d3, dr62jz, rmju$6, yw1ke, vq7ew) {
      rmju$6 === void 0x0 && (rmju$6 = !![]), vq7ew === void 0x0 && (vq7ew = ![]);var kwyx = this;kwyx['_url'] = of4d3;if (of4d3['indexOf']('data:image') === 0x0) kwyx['_type'] = dr62jz = 'image';else kwyx['_type'] = dr62jz || (dr62jz = kwyx['getTypeFromUrl'](of4d3));kwyx['_cache'] = rmju$6, kwyx['_data'] = null;var gs8cl9 = 'ascii';if (of4d3['indexOf']('.fnt') != -0x1) gs8cl9 = 'utf8';else dr62jz == 'arraybuffer' && (gs8cl9 = '');;var $6rjz2 = h1wyxk['getFileExtension'](of4d3);if (csgvq['_fileTypeArr']['indexOf']($6rjz2) != -0x1) t34df['EnvConfig']['load']['call'](this, of4d3, dr62jz, rmju$6, yw1ke, vq7ew);else {
        if (!o4_t['getFileInfo'](of4d3)) {
          if (of4d3['indexOf']('layaNativeDir/') != -0x1) {
            if (t34df['isZiYu']) {
              var sglcq = o4_t['ziyuFileData'][of4d3];kwyx['onLoaded'](sglcq);return;
            } else {
              cosnole['log']('read read'), o4_t['read'](of4d3, gs8cl9, new p_5b0(csgvq, csgvq['onReadNativeCallBack'], [gs8cl9, of4d3, dr62jz, rmju$6, yw1ke, vq7ew, kwyx]));return;
            }
          }if (u2$jr6['rootPath'] == '') var pfbt_ = of4d3;else pfbt_ = of4d3['split'](u2$jr6['rootPath'])[0x0];of4d3['indexOf']('http://') != -0x1 || of4d3['indexOf']('https://') != -0x1 ? t34df['EnvConfig']['load']['call'](kwyx, of4d3, dr62jz, rmju$6, yw1ke, vq7ew) : o4_t['readFile'](pfbt_, gs8cl9, new p_5b0(csgvq, csgvq['onReadNativeCallBack'], [gs8cl9, of4d3, dr62jz, rmju$6, yw1ke, vq7ew, kwyx]), of4d3);
        } else t34df['EnvConfig']['load']['call'](this, of4d3, dr62jz, rmju$6, yw1ke, vq7ew);
      }
    }, heywk['resMgrLoad'] = function (gq7vc, _05fpb, ju$r62, ikah1x, i50_p, egv7q, e1hwy) {
      ju$r62 === void 0x0 && (ju$r62 = 0x0), ikah1x === void 0x0 && (ikah1x = ![]), i50_p === void 0x0 && (i50_p = ![]), egv7q === void 0x0 && (egv7q = 0x0), e1hwy === void 0x0 && (e1hwy = 0x3), gq7vc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gq7vc), t34df['EnvConfig']['resMgrLoad'](gq7vc, (e1vkw, do34zt, cveg) => {
        csgvq['prototype']['resMgrLoadCallBack'](e1vkw, do34zt, cveg, _05fpb);
      }, ju$r62, ikah1x, i50_p, egv7q, e1hwy);
    }, heywk['resMgrLoadCallBack'] = function (jdr, t_fbp, ygqve7, veyw1) {
      console['log']('buff:::', jdr, ygqve7, o4_t['fileNativeDir'] + '///' + o4_t['fileListName']), veyw1(jdr, t_fbp, ygqve7);
    }, heywk['clearRes'] = function (kev, rj26u$) {
      rj26u$ === void 0x0 && (rj26u$ = ![]);var ot_43 = this;ot_43['clearRes'](kev, rj26u$);var fo3 = o4_t['getFileInfo'](kev);if (fo3 && (kev['indexOf']('http://') != -0x1 || kev['indexOf']('https://') != -0x1)) {
        var hewy = fo3['md5'],
            yvke1 = o4_t['getFileNativePath'](hewy);o4_t['remove'](yvke1);
      }
    }, csgvq['onReadNativeCallBack'] = function (s78qc, _3ot4, xkwhy1, gcsl98, ykewh1, rz$62, cqsl8g, p_05i, ecgqv) {
      gcsl98 === void 0x0 && (gcsl98 = !![]), rz$62 === void 0x0 && (rz$62 = ![]), p_05i === void 0x0 && (p_05i = 0x0);if (!p_05i) {
        var $rm6u;if (xkwhy1 == 'json' || xkwhy1 == 'atlas') $rm6u = t34df['getJson'](ecgqv['data']);else xkwhy1 == 'xml' ? $rm6u = h1wyxk['parseXMLFromString'](ecgqv['data']) : $rm6u = ecgqv['data'];cqsl8g['onLoaded']($rm6u), !t34df['isZiYu'] && t34df['isPosMsgYu'] && xkwhy1 != 'arraybuffer' && wx['postMessage']({ 'url': _3ot4, 'data': $rm6u, 'isLoad': !![] });
      } else p_05i == 0x1 && t34df['EnvConfig']['load']['call'](cqsl8g, _3ot4, xkwhy1, gcsl98, ykewh1, rz$62);
    }, _tf403(csgvq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), csgvq;
  }(),
      o4_t = function (f_50) {
    function yk1vwe() {
      yk1vwe['__super']['call'](this);;
    }return weq7y(yk1vwe, 'laya.wx.mini.MiniFileMgr', f_50), yk1vwe['isLoadFile'] = function (r$ju6) {
      return yk1vwe['_fileTypeArr']['indexOf'](r$ju6) != -0x1 ? !![] : ![];
    }, yk1vwe['getFileInfo'] = function (q7gecv) {
      var xakwh = q7gecv['split']('?')[0x0],
          t_p4f = yk1vwe['filesListObj'][xakwh];if (t_p4f == null) return null;else return t_p4f;return null;
    }, yk1vwe['onFileUpdate'] = function (zr6d2o, _fot3) {
      var wye1h = zr6d2o['split']('/'),
          pf_b0t = wye1h[wye1h['length'] - 0x1],
          t34_o = yk1vwe['getFileInfo'](_fot3);if (t34_o == null) yk1vwe['onSaveFile'](_fot3, pf_b0t);else {
        if (t34_o['readyUrl'] != _fot3) yk1vwe['remove'](pf_b0t, _fot3);
      }
    }, yk1vwe['exits'] = function (_5pbf, ru2$6) {
      var _f04pt = yk1vwe['getFileNativePath'](_5pbf);yk1vwe['fs']['getFileInfo']({ 'filePath': _f04pt, 'success': function (b0tpf) {
          ru2$6 != null && ru2$6['runWith']([0x0, b0tpf]);
        }, 'fail': function (h1ixa5) {
          ru2$6 != null && ru2$6['runWith']([0x1, h1ixa5]);
        } });
    }, yk1vwe['read'] = function (ykw1hx, xha1wk, r2dj6z, o42zd3) {
      xha1wk === void 0x0 && (xha1wk = 'ascill'), o42zd3 === void 0x0 && (o42zd3 = '');var csvq7g;o42zd3 != '' ? csvq7g = yk1vwe['getFileNativePath'](ykw1hx) : csvq7g = ykw1hx, yk1vwe['fs']['readFile']({ 'filePath': csvq7g, 'encoding': xha1wk, 'success': function (to4dz) {
          r2dj6z != null && r2dj6z['runWith']([0x0, to4dz]);
        }, 'fail': function (k7w) {
          if (k7w && o42zd3 != '') yk1vwe['down'](o42zd3, xha1wk, r2dj6z, o42zd3);else r2dj6z != null && r2dj6z['runWith']([0x1]);
        } });
    }, yk1vwe['readNativeFile'] = function (d4to3f, k7ev) {
      yk1vwe['fs']['readFile']({ 'filePath': d4to3f, 'encoding': '', 'success': function (khxi) {
          k7ev != null && k7ev['runWith']([0x0]);
        }, 'fail': function (g7cq8) {
          k7ev != null && k7ev['runWith']([0x1]);
        } });
    }, yk1vwe['down'] = function (wykx1h, vgs7cq, hi5abx, wkh) {
      vgs7cq === void 0x0 && (vgs7cq = 'ascill'), wkh === void 0x0 && (wkh = '');var wy7eq = yk1vwe['getFileNativePath'](wkh),
          d4z32 = yk1vwe['wxdown']({ 'url': wykx1h, 'filePath': wy7eq, 'success': function (p5i_b0) {
          if (p5i_b0['statusCode'] === 0xc8) yk1vwe['readFile'](p5i_b0['filePath'], vgs7cq, hi5abx, wkh);
        }, 'fail': function (ahkxi) {
          hi5abx != null && hi5abx['runWith']([0x1, ahkxi]);
        } });d4z32['onProgressUpdate'](function (odz2r) {
        hi5abx != null && hi5abx['runWith']([0x2, odz2r['progress']]);
      });
    }, yk1vwe['readFile'] = function (gye7q, $mj6ur, hkwey1, kh1iax) {
      $mj6ur === void 0x0 && ($mj6ur = 'ascill'), kh1iax === void 0x0 && (kh1iax = ''), yk1vwe['fs']['readFile']({ 'filePath': gye7q, 'encoding': $mj6ur, 'success': function (tf0pb) {
          if (gye7q['indexOf']('http://') != -0x1 || gye7q['indexOf']('https://') != -0x1) yk1vwe['onFileUpdate'](gye7q, kh1iax);hkwey1 != null && hkwey1['runWith']([0x0, tf0pb]);
        }, 'fail': function (awhxk) {
          if (awhxk) hkwey1 != null && hkwey1['runWith']([0x1, awhxk]);
        } });
    }, yk1vwe['downImg'] = function (tf4_, ftp_, khyx) {
      khyx === void 0x0 && (khyx = '');var vk1ywe = yk1vwe['wxdown']({ 'url': tf4_, 'success': function (odr6z2) {
          odr6z2['statusCode'] === 0xc8 && yk1vwe['copyFile'](odr6z2['tempFilePath'], khyx, ftp_);
        }, 'fail': function (f_t0pb) {
          ftp_ != null && ftp_['runWith']([0x1, f_t0pb]);
        } });
    }, yk1vwe['copyFile'] = function (z342, i5baxh, b_5pf) {
      var w7ykve = z342['split']('/'),
          t3dzo = w7ykve[w7ykve['length'] - 0x1],
          eyv7wk = i5baxh['split']('?')[0x0],
          zo3td = yk1vwe['getFileInfo'](i5baxh),
          g7yveq = yk1vwe['getFileNativePath'](t3dzo);yk1vwe['fs']['copyFile']({ 'srcPath': z342, 'destPath': g7yveq, 'success': function (zod62) {
          if (!zo3td) yk1vwe['onSaveFile'](i5baxh, t3dzo), b_5pf != null && b_5pf['runWith']([0x0]);else {
            if (zo3td['readyUrl'] != i5baxh) yk1vwe['remove'](t3dzo, i5baxh, b_5pf);
          }
        }, 'fail': function (gc9s8l) {
          b_5pf != null && b_5pf['runWith']([0x1, gc9s8l]);
        } });
    }, yk1vwe['getFileNativePath'] = function (ew7vk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ew7vk;
    }, yk1vwe['remove'] = function (j6ur, _5bp0, lgsq8c) {
      _5bp0 === void 0x0 && (_5bp0 = '');var h1x5i = yk1vwe['getFileInfo'](_5bp0),
          eyw1kh = yk1vwe['getFileNativePath'](h1x5i['md5']);doz263['loader']['clearRes'](h1x5i['readyUrl']), yk1vwe['fs']['unlink']({ 'filePath': eyw1kh, 'success': function (ai0pb) {
          if (_5bp0 != '') yk1vwe['onSaveFile'](_5bp0, j6ur);lgsq8c != null && lgsq8c['runWith']([0x0]);
        }, 'fail': function (d26rjz) {} });
    }, yk1vwe['onSaveFile'] = function (p5iba, l9sg) {
      var ba0 = p5iba['split']('?')[0x0];yk1vwe['filesListObj'][ba0] = { 'md5': l9sg, 'readyUrl': p5iba }, yk1vwe['fs']['writeFile']({ 'filePath': yk1vwe['fileNativeDir'] + '/' + yk1vwe['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yk1vwe['filesListObj']), 'success': function (oft3_4) {
          console['log']('写入测试测试成功：', oft3_4);
        }, 'fail': function (vc7gqe) {
          console['log']('写入测试测试失败：', vc7gqe);
        } });
    }, yk1vwe['existDir'] = function (t04fp, we7qyv) {
      yk1vwe['fs']['mkdir']({ 'dirPath': t04fp, 'success': function (ecq7gv) {
          we7qyv != null && we7qyv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (s7vgqc) {
          if (s7vgqc['errMsg']['indexOf']('file already exists') != -0x1) yk1vwe['readSync'](yk1vwe['fileListName'], 'utf8', we7qyv);else we7qyv != null && we7qyv['runWith']([0x1, s7vgqc]);
        } });
    }, yk1vwe['readSync'] = function (wykxh1, f_b05p, $6jmru, lqsc8) {
      f_b05p === void 0x0 && (f_b05p = 'ascill'), lqsc8 === void 0x0 && (lqsc8 = '');var tf = yk1vwe['getFileNativePath'](wykxh1),
          h1weky;try {
        h1weky = yk1vwe['fs']['readFileSync'](tf), $6jmru != null && $6jmru['runWith']([0x0, { 'data': h1weky }]);
      } catch (do3) {
        $6jmru != null && $6jmru['runWith']([0x1]);
      }
    }, yk1vwe['readCache'] = function () {}, yk1vwe['writeCache'] = function (ot3d4z) {
      var w1xh = readyUrl['split']('?')[0x0];yk1vwe['filesListObj'][w1xh] = { 'md5': md5Name, 'readyUrl': readyUrl }, yk1vwe['fs']['writeFile']({ 'filePath': yk1vwe['fileNativeDir'] + '/' + yk1vwe['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yk1vwe['filesListObj']), 'success': function (xhiba) {}, 'fail': function (o3d26) {} });
    }, yk1vwe['setNativeFileDir'] = function (i5apxb) {
      yk1vwe['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i5apxb;
    }, yk1vwe['filesListObj'] = {}, yk1vwe['fileNativeDir'] = null, yk1vwe['fileListName'] = 'layaairfiles.txt', yk1vwe['ziyuFileData'] = {}, _tf403(yk1vwe, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yk1vwe;
  }(ruj26$),
      cgq87s = function (whkx1y) {
    function drj6z2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], drj6z2['__super']['call'](this), this['_sound'] = drj6z2['_createSound']();
    }weq7y(drj6z2, 'laya.wx.mini.MiniSound', whkx1y);var xi1a = drj6z2['prototype'];return xi1a['load'] = function (r6j2$u) {
      var kiha1 = this;r6j2$u = u2$jr6['formatURL'](r6j2$u), this['url'] = r6j2$u;if (drj6z2['_audioCache'][r6j2$u]) {
        this['event']('complete');return;
      }function vqwy7e() {
        if (drj6z2['_null'] != undefined) kiha1['_sound']['onCanplay'](drj6z2['_null']), kiha1['_sound']['onError'](drj6z2['_null']);else try {
          kiha1['_sound']['onCanplay'](null), kiha1['_sound']['onError'](null), drj6z2['_null'] = null;
        } catch (pt4_0) {
          console['warn']('[wxmini] _clearSound:' + pt4_0), kiha1['_sound']['onCanplay'](zt34d), kiha1['_sound']['onError'](zt34d), drj6z2['_null'] = zt34d;
        }
      }function ykweh1() {
        vqwy7e(), to43f_['loaded'] = !![], to43f_['event']('complete'), drj6z2['_audioCache'][to43f_['url']] = to43f_;
      }function e7vwy(eyqw7v) {
        console['error']('errCode=' + eyqw7v['errCode'] + '  errMsg=' + eyqw7v['errMsg']), vqwy7e(), to43f_['event']('error');
      }function zt34d() {}this['_sound']['onCanplay'](ykweh1), this['_sound']['onError'](e7vwy), this['_sound']['src'] = r6j2$u;var to43f_ = this;
    }, xi1a['play'] = function (yg7qve, xih5a) {
      yg7qve === void 0x0 && (yg7qve = 0x0), xih5a === void 0x0 && (xih5a = 0x0);var qeg;if (this['url'] == c87sqg['_tMusic']) {
        if (!drj6z2['_musicAudio']) drj6z2['_musicAudio'] = drj6z2['_createSound']();qeg = drj6z2['_musicAudio'];
      } else qeg = drj6z2['_createSound']();qeg['src'] = this['url'];var egq = new d6r2zo(qeg);return egq['url'] = this['url'], egq['loops'] = xih5a, egq['startTime'] = yg7qve, egq['play'](), c87sqg['addChannel'](egq), egq;
    }, xi1a['dispose'] = function () {
      var ju6$mr = drj6z2['_audioCache'][this['url']];ju6$mr && (ju6$mr['src'] = '', delete drj6z2['_audioCache'][this['url']]);
    }, p_50ib(0x0, xi1a, 'duration', function () {
      return this['_sound']['duration'];
    }), drj6z2['_createSound'] = function () {
      return drj6z2['_id']++, t34df['window']['wx']['createInnerAudioContext']();
    }, drj6z2['_musicAudio'] = null, drj6z2['_id'] = 0x0, drj6z2['_audioCache'] = {}, drj6z2['_null'] = undefined, drj6z2;
  }(ruj26$),
      d6r2zo = function (zt4d3) {
    function k1hix(hykx1w) {
      this['_audio'] = null, this['_onEnd'] = null, k1hix['__super']['call'](this), this['_audio'] = hykx1w, this['_onEnd'] = h1wyxk['bind'](this['__onEnd'], this), hykx1w['onEnded'](this['_onEnd']);
    }weq7y(k1hix, 'laya.wx.mini.MiniSoundChannel', zt4d3);var s9cl8 = k1hix['prototype'];return s9cl8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (doz263['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, s9cl8['__onNull'] = function () {}, s9cl8['play'] = function () {
      this['isStopped'] = ![], c87sqg['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, s9cl8['stop'] = function () {
      this['isStopped'] = !![], c87sqg['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (k1hix['_null'] != undefined) this['_audio']['onEnded'](k1hix['_null']);else try {
        this['_audio']['onEnded'](null), k1hix['_null'] = null;
      } catch (ywke1h) {
        console['warn']('[wxmini] stop:' + ywke1h), this['_audio']['onEnded'](h1wyxk['bind'](this['__onNull'], this)), k1hix['_null'] = h1wyxk['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, s9cl8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, s9cl8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], c87sqg['addChannel'](this), this['_audio']['play']();
    }, p_50ib(0x0, s9cl8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p_50ib(0x0, s9cl8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p_50ib(0x0, s9cl8, 'volume', function () {
      return 0x1;
    }, function (e7gqv) {}), k1hix['_null'] = undefined, k1hix;
  }(z6odr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var i_5pb in Laya) {
    var i05ba = Laya[i_5pb];i05ba && i05ba['__isclass'] && (exports[i_5pb] = i05ba);
  }
});