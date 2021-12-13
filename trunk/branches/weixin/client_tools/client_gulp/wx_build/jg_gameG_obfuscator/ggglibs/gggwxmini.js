var m = wx.$g;
(function (window, document, t34fdo) {
  var ec7gvq = t34fdo['un'],
      t3fo_4 = t34fdo['uns'],
      vqyeg7 = t34fdo['static'],
      fp5b_0 = t34fdo['class'],
      ia1x = t34fdo['getset'],
      o6rdz = t34fdo['__newvec'],
      ihx5ba = laya['utils']['Browser'],
      cs7qgv = laya['events']['Event'],
      v1yewk = laya['events']['EventDispatcher'],
      axh1i5 = laya['resource']['HTMLImage'],
      qv7wye = laya['utils']['Handler'],
      eqy7w = laya['display']['Input'],
      ihx1ka = laya['net']['Loader'],
      zor6 = laya['maths']['Matrix'],
      qwey7 = laya['renders']['Render'],
      ixab5p = laya['utils']['RunDriver'],
      p_ib = laya['media']['Sound'],
      r2j$z6 = laya['media']['SoundChannel'],
      qg8cs = laya['media']['SoundManager'],
      ecqg7v = laya['display']['Stage'],
      gqcs78 = laya['net']['URL'],
      xwah = laya['utils']['Utils'],
      rdjz26 = function () {
    function t_430() {}return fp5b_0(t_430, 'laya.wx.mini.MiniAdpter'), t_430['getJson'] = function (t_3fo4) {
      return JSON['parse'](t_3fo4);
    }, t_430['init'] = function (ve1ky, wv1kye) {
      ve1ky === void 0x0 && (ve1ky = ![]), wv1kye === void 0x0 && (wv1kye = ![]);if (t_430['_inited']) return;t_430['window'] = window;if (t_430['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;t_430['_inited'] = !![], t_430['isZiYu'] = wv1kye, t_430['isPosMsgYu'] = ve1ky, t_430['EnvConfig'] = {}, !t_430['isZiYu'] && (_04pt['setNativeFileDir']('/layaairGame'), _04pt['existDir'](_04pt['fileNativeDir'], qv7wye['create'](t_430, t_430['onMkdirCallBack']))), t_430['window']['focus'] = function () {}, t34fdo['getUrlPath'] = function () {}, t_430['window']['logtime'] = function (hb5iax) {}, t_430['window']['alertTimeLog'] = function (o632d) {}, t_430['window']['resetShareInfo'] = function () {}, t_430['window']['CanvasRenderingContext2D'] = function () {}, t_430['window']['CanvasRenderingContext2D']['prototype'] = t_430['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t_430['window']['document']['body']['appendChild'] = function () {}, t_430['EnvConfig']['pixelRatioInt'] = 0x0, ixab5p['getPixelRatio'] = t_430['pixelRatio'], t_430['_preCreateElement'] = ihx5ba['createElement'], ihx5ba['createElement'] = t_430['createElement'], ixab5p['createShaderCondition'] = t_430['createShaderCondition'], xwah['parseXMLFromString'] = t_430['parseXMLFromString'], eqy7w['_createInputElement'] = pb5iax['_createInputElement'], t_430['EnvConfig']['load'] = ihx1ka['prototype']['load'], ihx1ka['prototype']['load'] = xwh1ak['prototype']['load'], t_430['isZiYu'] && ve1ky && wx['onMessage'](function (j$umr6) {
        j$umr6['isLoad'] && (_04pt['ziyuFileData'][j$umr6['url']] = j$umr6['data']);
      });
    }, t_430['onMkdirCallBack'] = function (e1wkhy, p50bi_) {
      if (!e1wkhy) _04pt['filesListObj'] = JSON['parse'](p50bi_['data']);
    }, t_430['pixelRatio'] = function () {
      if (!t_430['EnvConfig']['pixelRatioInt']) try {
        var baix5 = wx['getSystemInfoSync']();return t_430['EnvConfig']['pixelRatioInt'] = baix5['pixelRatio'], baix5 = baix5, baix5['pixelRatio'];
      } catch (hixak) {}return t_430['EnvConfig']['pixelRatioInt'];
    }, t_430['createElement'] = function (eg7vqy) {
      if (eg7vqy == 'canvas') {
        var h5bix;return t_430['idx'] == 0x1 ? t_430['isZiYu'] ? (h5bix = sharedCanvas, h5bix['style'] = {}) : h5bix = window['canvas'] : h5bix = window['wx']['createCanvas'](), t_430['idx']++, h5bix;
      } else {
        if (eg7vqy == 'textarea' || eg7vqy == 'input') return t_430['onCreateInput'](eg7vqy);else {
          if (eg7vqy == 'div') {
            var l8qcgs = t_430['_preCreateElement'](eg7vqy);return l8qcgs['contains'] = function (jur6$m) {
              return null;
            }, l8qcgs['removeChild'] = function (ihx5a) {}, l8qcgs;
          } else return t_430['_preCreateElement'](eg7vqy);
        }
      }
    }, t_430['onCreateInput'] = function (dzr2o6) {
      var slgc98 = t_430['_preCreateElement'](dzr2o6);return slgc98['focus'] = pb5iax['wxinputFocus'], slgc98['blur'] = pb5iax['wxinputblur'], slgc98['style'] = {}, slgc98['value'] = 0x0, slgc98['parentElement'] = {}, slgc98['placeholder'] = {}, slgc98['type'] = {}, slgc98['setColor'] = function (p_0b5f) {}, slgc98['setType'] = function (j62$ur) {}, slgc98['setFontFace'] = function (qegc7) {}, slgc98['addEventListener'] = function (_5p0i) {}, slgc98['contains'] = function (svgc) {
        return null;
      }, slgc98['removeChild'] = function (w1ykh) {}, slgc98;
    }, t_430['createShaderCondition'] = function (h1wykx) {
      var e1 = this,
          b5_fp = function () {
        var rjz$2 = h1wykx;return e1[h1wykx['replace']('this.', '')];
      };return b5_fp;
    }, t_430['EnvConfig'] = null, t_430['window'] = null, t_430['_preCreateElement'] = null, t_430['_inited'] = ![], t_430['wxRequest'] = null, t_430['systemInfo'] = null, t_430['version'] = '0.0.1', t_430['isZiYu'] = ![], t_430['isPosMsgYu'] = ![], t_430['parseXMLFromString'] = function (g9c8l) {
      var sl8c, eqy7vw;g9c8l = g9c8l['replace'](/>\s+</g, '><');try {
        sl8c = new window['Parser']['DOMParser']()['parseFromString'](g9c8l, 'text/xml');
      } catch (pbt_f) {
        throw '需要引入xml解析库文件';
      }return sl8c;
    }, t_430['idx'] = 0x1, t_430;
  }(),
      ha51i = function () {
    function aixk1h() {}fp5b_0(aixk1h, 'laya.wx.mini.MiniImage');var y7gv = aixk1h['prototype'];return y7gv['_loadImage'] = function (_pi5b0) {
      var hik = this,
          baxpi5 = ![];_pi5b0['indexOf']('layaNativeDir/') == -0x1 && (baxpi5 = !![], _pi5b0 = gqcs78['formatURL'](_pi5b0));if (!_04pt['getFileInfo'](_pi5b0)) {
        if (_pi5b0['indexOf']('http://') != -0x1 || _pi5b0['indexOf']('https://') != -0x1) _04pt['downImg'](_pi5b0, new qv7wye(aixk1h, aixk1h['onDownImgCallBack'], [_pi5b0, hik]), _pi5b0);else aixk1h['onCreateImage'](_pi5b0, hik, !![]);
      } else aixk1h['onCreateImage'](_pi5b0, hik, !baxpi5);
    }, aixk1h['onDownImgCallBack'] = function (q8lcsg, ro6, c98slg) {
      if (!c98slg) aixk1h['onCreateImage'](q8lcsg, ro6);else ro6['onError'](null);
    }, aixk1h['onCreateImage'] = function (f50_pb, b5pf_0, mu6rj) {
      mu6rj === void 0x0 && (mu6rj = ![]);var hw1yke;if (!mu6rj) {
        var xi5bpa = _04pt['getFileInfo'](f50_pb),
            lq8sgc = xi5bpa['md5'];hw1yke = _04pt['getFileNativePath'](lq8sgc);
      } else hw1yke = f50_pb;if (b5pf_0['imgCache'] == null) b5pf_0['imgCache'] = {};var b_p50i;function wkxh() {
        b_p50i['onload'] = null, b_p50i['onerror'] = null, delete b5pf_0['imgCache'][f50_pb];
      };var fpb0t_ = function () {
        wkxh(), b5pf_0['onLoaded'](b_p50i);
      },
          xia5hb = function () {
        wkxh(), b5pf_0['event']('error', 'Load image failed');
      };b5pf_0['_type'] == 'nativeimage' ? (b_p50i = new ihx5ba['window']['Image'](), b_p50i['crossOrigin'] = '', b_p50i['onload'] = fpb0t_, b_p50i['onerror'] = xia5hb, b_p50i['src'] = hw1yke, b5pf_0['imgCache'][f50_pb] = b_p50i) : new axh1i5['create'](hw1yke, { 'onload': fpb0t_, 'onerror': xia5hb, 'onCreate': function (gl9c) {
          b_p50i = gl9c, b5pf_0['imgCache'][f50_pb] = gl9c;
        } });
    }, aixk1h;
  }(),
      pb5iax = function () {
    function _to34() {}return fp5b_0(_to34, 'laya.wx.mini.MiniInput'), _to34['_createInputElement'] = function () {
      eqy7w['_initInput'](eqy7w['area'] = ihx5ba['createElement']('textarea')), eqy7w['_initInput'](eqy7w['input'] = ihx5ba['createElement']('input')), eqy7w['inputContainer'] = ihx5ba['createElement']('div'), eqy7w['inputContainer']['style']['position'] = 'absolute', eqy7w['inputContainer']['style']['zIndex'] = 0x186a0, ihx5ba['container']['appendChild'](eqy7w['inputContainer']), eqy7w['inputContainer']['setPos'] = function (fo34td, cvq7gs) {
        eqy7w['inputContainer']['style']['left'] = fo34td + 'px', eqy7w['inputContainer']['style']['top'] = cvq7gs + 'px';
      }, t34fdo['stage']['on']('resize', null, _to34['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (g7qeyv) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qg8cs['_soundClass'] = a5xibh, qg8cs['_musicClass'] = a5xibh;
    }, _to34['_onStageResize'] = function () {
      var eky1vw = t34fdo['stage']['_canvasTransform']['identity']();eky1vw['scale'](ihx5ba['width'] / qwey7['canvas']['width'] / ixab5p['getPixelRatio'](), ihx5ba['height'] / qwey7['canvas']['height'] / ixab5p['getPixelRatio']());
    }, _to34['wxinputFocus'] = function (_ftbp) {
      var x1i5h = eqy7w['inputElement']['target'];if (x1i5h && !x1i5h['editable']) return;rdjz26['window']['wx']['offKeyboardConfirm'](), rdjz26['window']['wx']['offKeyboardInput'](), rdjz26['window']['wx']['showKeyboard']({ 'defaultValue': x1i5h['text'], 'maxLength': x1i5h['maxChars'], 'multiple': x1i5h['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (p0b5ia) {}, 'fail': function (vkwy1e) {} }), rdjz26['window']['wx']['onKeyboardConfirm'](function (df4to3) {
        var _fo3t4 = df4to3 ? df4to3['value'] : '';x1i5h['text'] = _fo3t4, x1i5h['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rdjz26['window']['wx']['onKeyboardInput'](function (vyw7eq) {
        var r26$ju = vyw7eq ? vyw7eq['value'] : '';if (!x1i5h['multiline']) {
          if (r26$ju['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x1i5h['text'] = r26$ju, x1i5h['event']('input');
      });
    }, _to34['inputEnter'] = function () {
      eqy7w['inputElement']['target']['focus'] = ![];
    }, _to34['wxinputblur'] = function () {
      _to34['hideKeyboard']();
    }, _to34['hideKeyboard'] = function () {
      rdjz26['window']['wx']['offKeyboardConfirm'](), rdjz26['window']['wx']['offKeyboardInput'](), rdjz26['window']['wx']['hideKeyboard']({ 'success': function (vew7ky) {
          console['log']('隐藏键盘');
        }, 'fail': function (bhax5i) {
          console['log']('隐藏键盘出错:' + (bhax5i ? bhax5i['errMsg'] : ''));
        } });
    }, _to34;
  }(),
      xwh1ak = function () {
    function fd43ot() {}fp5b_0(fd43ot, 'laya.wx.mini.MiniLoader');var j6u$r = fd43ot['prototype'];return j6u$r['load'] = function (vy1ew, eywq7, gscq, hk1ax, $u2j6r) {
      gscq === void 0x0 && (gscq = !![]), $u2j6r === void 0x0 && ($u2j6r = ![]);var cg89ls = this;cg89ls['_url'] = vy1ew;if (vy1ew['indexOf']('data:image') === 0x0) cg89ls['_type'] = eywq7 = 'image';else cg89ls['_type'] = eywq7 || (eywq7 = cg89ls['getTypeFromUrl'](vy1ew));cg89ls['_cache'] = gscq, cg89ls['_data'] = null;var ewqy7v = 'ascii';if (vy1ew['indexOf']('.fnt') != -0x1) ewqy7v = 'utf8';else eywq7 == 'arraybuffer' && (ewqy7v = '');;var cs7vq = xwah['getFileExtension'](vy1ew);if (fd43ot['_fileTypeArr']['indexOf'](cs7vq) != -0x1) rdjz26['EnvConfig']['load']['call'](this, vy1ew, eywq7, gscq, hk1ax, $u2j6r);else {
        if (!_04pt['getFileInfo'](vy1ew)) {
          if (vy1ew['indexOf']('layaNativeDir/') != -0x1) {
            if (rdjz26['isZiYu']) {
              var sg8c9l = _04pt['ziyuFileData'][vy1ew];cg89ls['onLoaded'](sg8c9l);return;
            } else {
              cosnole['log']('read read'), _04pt['read'](vy1ew, ewqy7v, new qv7wye(fd43ot, fd43ot['onReadNativeCallBack'], [ewqy7v, vy1ew, eywq7, gscq, hk1ax, $u2j6r, cg89ls]));return;
            }
          }if (gqcs78['rootPath'] == '') var qwvye7 = vy1ew;else qwvye7 = vy1ew['split'](gqcs78['rootPath'])[0x0];vy1ew['indexOf']('http://') != -0x1 || vy1ew['indexOf']('https://') != -0x1 ? rdjz26['EnvConfig']['load']['call'](cg89ls, vy1ew, eywq7, gscq, hk1ax, $u2j6r) : _04pt['readFile'](qwvye7, ewqy7v, new qv7wye(fd43ot, fd43ot['onReadNativeCallBack'], [ewqy7v, vy1ew, eywq7, gscq, hk1ax, $u2j6r, cg89ls]), vy1ew);
        } else rdjz26['EnvConfig']['load']['call'](this, vy1ew, eywq7, gscq, hk1ax, $u2j6r);
      }
    }, j6u$r['resMgrLoad'] = function (s78g, _3tf, p5ib0_, o32zd4, mur, ew1yhk, o3tdf) {
      p5ib0_ === void 0x0 && (p5ib0_ = 0x0), o32zd4 === void 0x0 && (o32zd4 = ![]), mur === void 0x0 && (mur = ![]), ew1yhk === void 0x0 && (ew1yhk = 0x0), o3tdf === void 0x0 && (o3tdf = 0x3), s78g['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s78g), rdjz26['EnvConfig']['resMgrLoad'](s78g, (j$6ru, x5ap, $mur6) => {
        fd43ot['prototype']['resMgrLoadCallBack'](j$6ru, x5ap, $mur6, _3tf);
      }, p5ib0_, o32zd4, mur, ew1yhk, o3tdf);
    }, j6u$r['resMgrLoadCallBack'] = function (o6rd2z, vsc, t_b0fp, g7ecq) {
      console['log']('buff:::', o6rd2z, t_b0fp, _04pt['fileNativeDir'] + '///' + _04pt['fileListName']), g7ecq(o6rd2z, vsc, t_b0fp);
    }, j6u$r['clearRes'] = function (q8c, t4p0f_) {
      t4p0f_ === void 0x0 && (t4p0f_ = ![]);var ixap = this;ixap['clearRes'](q8c, t4p0f_);var xp5ab = _04pt['getFileInfo'](q8c);if (xp5ab && (q8c['indexOf']('http://') != -0x1 || q8c['indexOf']('https://') != -0x1)) {
        var wyv7eq = xp5ab['md5'],
            r6u2$j = _04pt['getFileNativePath'](wyv7eq);_04pt['remove'](r6u2$j);
      }
    }, fd43ot['onReadNativeCallBack'] = function (t40_3f, vewy7q, d4zt3, ur$j, um, ehk1y, xh5ai, j26drz, wvkey7) {
      ur$j === void 0x0 && (ur$j = !![]), ehk1y === void 0x0 && (ehk1y = ![]), j26drz === void 0x0 && (j26drz = 0x0);if (!j26drz) {
        var rdz6o2;if (d4zt3 == 'json' || d4zt3 == 'atlas') rdz6o2 = rdjz26['getJson'](wvkey7['data']);else d4zt3 == 'xml' ? rdz6o2 = xwah['parseXMLFromString'](wvkey7['data']) : rdz6o2 = wvkey7['data'];xh5ai['onLoaded'](rdz6o2), !rdjz26['isZiYu'] && rdjz26['isPosMsgYu'] && d4zt3 != 'arraybuffer' && wx['postMessage']({ 'url': vewy7q, 'data': rdz6o2, 'isLoad': !![] });
      } else j26drz == 0x1 && rdjz26['EnvConfig']['load']['call'](xh5ai, vewy7q, d4zt3, ur$j, um, ehk1y);
    }, vqyeg7(fd43ot, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fd43ot;
  }(),
      _04pt = function (j2r6u) {
    function qg8lc() {
      qg8lc['__super']['call'](this);;
    }return fp5b_0(qg8lc, 'laya.wx.mini.MiniFileMgr', j2r6u), qg8lc['isLoadFile'] = function (ip0a5) {
      return qg8lc['_fileTypeArr']['indexOf'](ip0a5) != -0x1 ? !![] : ![];
    }, qg8lc['getFileInfo'] = function (kyhx) {
      var vqy7 = kyhx['split']('?')[0x0],
          u26rj$ = qg8lc['filesListObj'][vqy7];if (u26rj$ == null) return null;else return u26rj$;return null;
    }, qg8lc['onFileUpdate'] = function (sl9gc, qy7eg) {
      var doft3 = sl9gc['split']('/'),
          w7yqve = doft3[doft3['length'] - 0x1],
          ek1yv = qg8lc['getFileInfo'](qy7eg);if (ek1yv == null) qg8lc['onSaveFile'](qy7eg, w7yqve);else {
        if (ek1yv['readyUrl'] != qy7eg) qg8lc['remove'](w7yqve, qy7eg);
      }
    }, qg8lc['exits'] = function (gyeq7, g8q7sc) {
      var vkw1e = qg8lc['getFileNativePath'](gyeq7);qg8lc['fs']['getFileInfo']({ 'filePath': vkw1e, 'success': function (dt4f3) {
          g8q7sc != null && g8q7sc['runWith']([0x0, dt4f3]);
        }, 'fail': function (z632do) {
          g8q7sc != null && g8q7sc['runWith']([0x1, z632do]);
        } });
    }, qg8lc['read'] = function (jrz6$2, kiaxh1, bpi5_, q7wye) {
      kiaxh1 === void 0x0 && (kiaxh1 = 'ascill'), q7wye === void 0x0 && (q7wye = '');var gvqec;q7wye != '' ? gvqec = qg8lc['getFileNativePath'](jrz6$2) : gvqec = jrz6$2, qg8lc['fs']['readFile']({ 'filePath': gvqec, 'encoding': kiaxh1, 'success': function (uj62r$) {
          bpi5_ != null && bpi5_['runWith']([0x0, uj62r$]);
        }, 'fail': function (xi1) {
          if (xi1 && q7wye != '') qg8lc['down'](q7wye, kiaxh1, bpi5_, q7wye);else bpi5_ != null && bpi5_['runWith']([0x1]);
        } });
    }, qg8lc['readNativeFile'] = function (ia5hx, vcg7qe) {
      qg8lc['fs']['readFile']({ 'filePath': ia5hx, 'encoding': '', 'success': function (gvqc7s) {
          vcg7qe != null && vcg7qe['runWith']([0x0]);
        }, 'fail': function (r$2ju6) {
          vcg7qe != null && vcg7qe['runWith']([0x1]);
        } });
    }, qg8lc['down'] = function (p5xbia, yh1xw, a1kihx, ceq7gv) {
      yh1xw === void 0x0 && (yh1xw = 'ascill'), ceq7gv === void 0x0 && (ceq7gv = '');var p05b_ = qg8lc['getFileNativePath'](ceq7gv),
          hwk1yx = qg8lc['wxdown']({ 'url': p5xbia, 'filePath': p05b_, 'success': function (zd43) {
          if (zd43['statusCode'] === 0xc8) qg8lc['readFile'](zd43['filePath'], yh1xw, a1kihx, ceq7gv);
        }, 'fail': function (ye1wv) {
          a1kihx != null && a1kihx['runWith']([0x1, ye1wv]);
        } });hwk1yx['onProgressUpdate'](function (gs8lqc) {
        a1kihx != null && a1kihx['runWith']([0x2, gs8lqc['progress']]);
      });
    }, qg8lc['readFile'] = function (bixap5, f3od4, w1kehy, f30t_4) {
      f3od4 === void 0x0 && (f3od4 = 'ascill'), f30t_4 === void 0x0 && (f30t_4 = ''), qg8lc['fs']['readFile']({ 'filePath': bixap5, 'encoding': f3od4, 'success': function (qcl8sg) {
          if (bixap5['indexOf']('http://') != -0x1 || bixap5['indexOf']('https://') != -0x1) qg8lc['onFileUpdate'](bixap5, f30t_4);w1kehy != null && w1kehy['runWith']([0x0, qcl8sg]);
        }, 'fail': function (r$2z6) {
          if (r$2z6) w1kehy != null && w1kehy['runWith']([0x1, r$2z6]);
        } });
    }, qg8lc['downImg'] = function (fp0_t, ey1vk, ju26r) {
      ju26r === void 0x0 && (ju26r = '');var xh5i = qg8lc['wxdown']({ 'url': fp0_t, 'success': function (p_5b) {
          p_5b['statusCode'] === 0xc8 && qg8lc['copyFile'](p_5b['tempFilePath'], ju26r, ey1vk);
        }, 'fail': function (i0_) {
          ey1vk != null && ey1vk['runWith']([0x1, i0_]);
        } });
    }, qg8lc['copyFile'] = function (xywk1h, wax1k, qeywv) {
      var v7gye = xywk1h['split']('/'),
          a5x1hi = v7gye[v7gye['length'] - 0x1],
          b5haxi = wax1k['split']('?')[0x0],
          ro2z = qg8lc['getFileInfo'](wax1k),
          yvw7e = qg8lc['getFileNativePath'](a5x1hi);qg8lc['fs']['copyFile']({ 'srcPath': xywk1h, 'destPath': yvw7e, 'success': function (um6jr) {
          if (!ro2z) qg8lc['onSaveFile'](wax1k, a5x1hi), qeywv != null && qeywv['runWith']([0x0]);else {
            if (ro2z['readyUrl'] != wax1k) qg8lc['remove'](a5x1hi, wax1k, qeywv);
          }
        }, 'fail': function (qye7g) {
          qeywv != null && qeywv['runWith']([0x1, qye7g]);
        } });
    }, qg8lc['getFileNativePath'] = function (td3o4f) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + td3o4f;
    }, qg8lc['remove'] = function (z3do42, dr2j6, yhek) {
      dr2j6 === void 0x0 && (dr2j6 = '');var $2ruj6 = qg8lc['getFileInfo'](dr2j6),
          tfd3o = qg8lc['getFileNativePath']($2ruj6['md5']);t34fdo['loader']['clearRes']($2ruj6['readyUrl']), qg8lc['fs']['unlink']({ 'filePath': tfd3o, 'success': function (i05_p) {
          if (dr2j6 != '') qg8lc['onSaveFile'](dr2j6, z3do42);yhek != null && yhek['runWith']([0x0]);
        }, 'fail': function (a5ixb) {} });
    }, qg8lc['onSaveFile'] = function (qg7cev, vecg7) {
      var kh1axw = qg7cev['split']('?')[0x0];qg8lc['filesListObj'][kh1axw] = { 'md5': vecg7, 'readyUrl': qg7cev }, qg8lc['fs']['writeFile']({ 'filePath': qg8lc['fileNativeDir'] + '/' + qg8lc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qg8lc['filesListObj']), 'success': function (z$jr6) {
          console['log']('写入测试测试成功：', z$jr6);
        }, 'fail': function (qcve7g) {
          console['log']('写入测试测试失败：', qcve7g);
        } });
    }, qg8lc['existDir'] = function (ek1wy, _t4f03) {
      qg8lc['fs']['mkdir']({ 'dirPath': ek1wy, 'success': function (p04f_t) {
          _t4f03 != null && _t4f03['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (oz342d) {
          if (oz342d['errMsg']['indexOf']('file already exists') != -0x1) qg8lc['readSync'](qg8lc['fileListName'], 'utf8', _t4f03);else _t4f03 != null && _t4f03['runWith']([0x1, oz342d]);
        } });
    }, qg8lc['readSync'] = function (bi0p_5, q7sgc, cg7sqv, ew7vk) {
      q7sgc === void 0x0 && (q7sgc = 'ascill'), ew7vk === void 0x0 && (ew7vk = '');var wky7ve = qg8lc['getFileNativePath'](bi0p_5),
          yqe7v;try {
        yqe7v = qg8lc['fs']['readFileSync'](wky7ve), cg7sqv != null && cg7sqv['runWith']([0x0, { 'data': yqe7v }]);
      } catch (sclgq8) {
        cg7sqv != null && cg7sqv['runWith']([0x1]);
      }
    }, qg8lc['readCache'] = function () {}, qg8lc['writeCache'] = function ($r62ju) {
      var rz62od = readyUrl['split']('?')[0x0];qg8lc['filesListObj'][rz62od] = { 'md5': md5Name, 'readyUrl': readyUrl }, qg8lc['fs']['writeFile']({ 'filePath': qg8lc['fileNativeDir'] + '/' + qg8lc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qg8lc['filesListObj']), 'success': function (eyqgv) {}, 'fail': function (o23d4z) {} });
    }, qg8lc['setNativeFileDir'] = function (zo263) {
      qg8lc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zo263;
    }, qg8lc['filesListObj'] = {}, qg8lc['fileNativeDir'] = null, qg8lc['fileListName'] = 'layaairfiles.txt', qg8lc['ziyuFileData'] = {}, vqyeg7(qg8lc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qg8lc;
  }(v1yewk),
      a5xibh = function (h1xkwa) {
    function m6j$u() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], m6j$u['__super']['call'](this), this['_sound'] = m6j$u['_createSound']();
    }fp5b_0(m6j$u, 'laya.wx.mini.MiniSound', h1xkwa);var xbp5i = m6j$u['prototype'];return xbp5i['load'] = function (f0_5pb) {
      var hwy1ek = this;f0_5pb = gqcs78['formatURL'](f0_5pb), this['url'] = f0_5pb;if (m6j$u['_audioCache'][f0_5pb]) {
        this['event']('complete');return;
      }function tdo4z3() {
        if (m6j$u['_null'] != undefined) hwy1ek['_sound']['onCanplay'](m6j$u['_null']), hwy1ek['_sound']['onError'](m6j$u['_null']);else try {
          hwy1ek['_sound']['onCanplay'](null), hwy1ek['_sound']['onError'](null), m6j$u['_null'] = null;
        } catch (cqve7) {
          console['warn']('[wxmini] _clearSound:' + cqve7), hwy1ek['_sound']['onCanplay'](xpi), hwy1ek['_sound']['onError'](xpi), m6j$u['_null'] = xpi;
        }
      }function r62j() {
        tdo4z3(), do4tf['loaded'] = !![], do4tf['event']('complete'), m6j$u['_audioCache'][do4tf['url']] = do4tf;
      }function sclq8(e7vky) {
        console['error']('errCode=' + e7vky['errCode'] + '  errMsg=' + e7vky['errMsg']), tdo4z3(), do4tf['event']('error');
      }function xpi() {}this['_sound']['onCanplay'](r62j), this['_sound']['onError'](sclq8), this['_sound']['src'] = f0_5pb;var do4tf = this;
    }, xbp5i['play'] = function (z234o, r6zj$) {
      z234o === void 0x0 && (z234o = 0x0), r6zj$ === void 0x0 && (r6zj$ = 0x0);var pi05b_;if (this['url'] == qg8cs['_tMusic']) {
        if (!m6j$u['_musicAudio']) m6j$u['_musicAudio'] = m6j$u['_createSound']();pi05b_ = m6j$u['_musicAudio'];
      } else pi05b_ = m6j$u['_createSound']();pi05b_['src'] = this['url'];var fdo4t3 = new haxbi5(pi05b_);return fdo4t3['url'] = this['url'], fdo4t3['loops'] = r6zj$, fdo4t3['startTime'] = z234o, fdo4t3['play'](), qg8cs['addChannel'](fdo4t3), fdo4t3;
    }, xbp5i['dispose'] = function () {
      var vqgey7 = m6j$u['_audioCache'][this['url']];vqgey7 && (vqgey7['src'] = '', delete m6j$u['_audioCache'][this['url']]);
    }, ia1x(0x0, xbp5i, 'duration', function () {
      return this['_sound']['duration'];
    }), m6j$u['_createSound'] = function () {
      return m6j$u['_id']++, rdjz26['window']['wx']['createInnerAudioContext']();
    }, m6j$u['_musicAudio'] = null, m6j$u['_id'] = 0x0, m6j$u['_audioCache'] = {}, m6j$u['_null'] = undefined, m6j$u;
  }(v1yewk),
      haxbi5 = function (yx1wk) {
    function f_t4(r2j6u) {
      this['_audio'] = null, this['_onEnd'] = null, f_t4['__super']['call'](this), this['_audio'] = r2j6u, this['_onEnd'] = xwah['bind'](this['__onEnd'], this), r2j6u['onEnded'](this['_onEnd']);
    }fp5b_0(f_t4, 'laya.wx.mini.MiniSoundChannel', yx1wk);var t4f_ = f_t4['prototype'];return t4f_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (t34fdo['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, t4f_['__onNull'] = function () {}, t4f_['play'] = function () {
      this['isStopped'] = ![], qg8cs['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, t4f_['stop'] = function () {
      this['isStopped'] = !![], qg8cs['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (f_t4['_null'] != undefined) this['_audio']['onEnded'](f_t4['_null']);else try {
        this['_audio']['onEnded'](null), f_t4['_null'] = null;
      } catch (ib5_) {
        console['warn']('[wxmini] stop:' + ib5_), this['_audio']['onEnded'](xwah['bind'](this['__onNull'], this)), f_t4['_null'] = xwah['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, t4f_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, t4f_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qg8cs['addChannel'](this), this['_audio']['play']();
    }, ia1x(0x0, t4f_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ia1x(0x0, t4f_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ia1x(0x0, t4f_, 'volume', function () {
      return 0x1;
    }, function (ipbxa) {}), f_t4['_null'] = undefined, f_t4;
  }(r2j$z6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wk7yve in Laya) {
    var a0bip5 = Laya[wk7yve];a0bip5 && a0bip5['__isclass'] && (exports[wk7yve] = a0bip5);
  }
});