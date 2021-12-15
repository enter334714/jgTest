var Q = wx.$v;
(function (window, document, is9$f) {
  var _1nth = is9$f['un'],
      ule = is9$f['uns'],
      $3s4n = is9$f['static'],
      m70ck5 = is9$f['class'],
      g5vxp7 = is9$f['getset'],
      l6uyzh = is9$f['__newvec'],
      n3s = laya['utils']['Browser'],
      vkc7 = laya['events']['Event'],
      kx57 = laya['events']['EventDispatcher'],
      $ofis4 = laya['resource']['HTMLImage'],
      bwe8 = laya['utils']['Handler'],
      nt2_h = laya['display']['Input'],
      xqbeg = laya['net']['Loader'],
      k57xvp = laya['maths']['Matrix'],
      v7pk50 = laya['renders']['Render'],
      hyzlu6 = laya['utils']['RunDriver'],
      z8lu6 = laya['media']['Sound'],
      k5m0c = laya['media']['SoundChannel'],
      so3$i4 = laya['media']['SoundManager'],
      i34o = laya['display']['Stage'],
      ofi$ = laya['net']['URL'],
      gvpqw = laya['utils']['Utils'],
      isr$f = function () {
    function of$4s() {}return m70ck5(of$4s, 'laya.wx.mini.MiniAdpter'), of$4s['getJson'] = function (u8lbeq) {
      return JSON['parse'](u8lbeq);
    }, of$4s['init'] = function (uqb, $3tn4) {
      uqb === void 0x0 && (uqb = ![]), $3tn4 === void 0x0 && ($3tn4 = ![]);if (of$4s['_inited']) return;of$4s['window'] = window;if (of$4s['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;of$4s['_inited'] = !![], of$4s['isZiYu'] = $3tn4, of$4s['isPosMsgYu'] = uqb, of$4s['EnvConfig'] = {}, !of$4s['isZiYu'] && (u6lzb8['setNativeFileDir']('/layaairGame'), u6lzb8['existDir'](u6lzb8['fileNativeDir'], bwe8['create'](of$4s, of$4s['onMkdirCallBack']))), of$4s['window']['focus'] = function () {}, is9$f['getUrlPath'] = function () {}, of$4s['window']['logtime'] = function (v5xkp) {}, of$4s['window']['alertTimeLog'] = function (_nh1t2) {}, of$4s['window']['resetShareInfo'] = function () {}, of$4s['window']['CanvasRenderingContext2D'] = function () {}, of$4s['window']['CanvasRenderingContext2D']['prototype'] = of$4s['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], of$4s['window']['document']['body']['appendChild'] = function () {}, of$4s['EnvConfig']['pixelRatioInt'] = 0x0, hyzlu6['getPixelRatio'] = of$4s['pixelRatio'], of$4s['_preCreateElement'] = n3s['createElement'], n3s['createElement'] = of$4s['createElement'], hyzlu6['createShaderCondition'] = of$4s['createShaderCondition'], gvpqw['parseXMLFromString'] = of$4s['parseXMLFromString'], nt2_h['_createInputElement'] = p07v5['_createInputElement'], of$4s['EnvConfig']['load'] = xqbeg['prototype']['load'], xqbeg['prototype']['load'] = wpv5gx['prototype']['load'], of$4s['isZiYu'] && uqb && wx['onMessage'](function (c0kmjd) {
        c0kmjd['isLoad'] && (u6lzb8['ziyuFileData'][c0kmjd['url']] = c0kmjd['data']);
      });
    }, of$4s['onMkdirCallBack'] = function (n4t_23, f$s9r) {
      if (!n4t_23) u6lzb8['filesListObj'] = JSON['parse'](f$s9r['data']);
    }, of$4s['pixelRatio'] = function () {
      if (!of$4s['EnvConfig']['pixelRatioInt']) try {
        var xgpvq = wx['getSystemInfoSync']();return of$4s['EnvConfig']['pixelRatioInt'] = xgpvq['pixelRatio'], xgpvq = xgpvq, xgpvq['pixelRatio'];
      } catch (lz6u8y) {}return of$4s['EnvConfig']['pixelRatioInt'];
    }, of$4s['createElement'] = function (kc05v7) {
      if (kc05v7 == 'canvas') {
        var kmjc0;return of$4s['idx'] == 0x1 ? of$4s['isZiYu'] ? (kmjc0 = sharedCanvas, kmjc0['style'] = {}) : kmjc0 = window['canvas'] : kmjc0 = window['wx']['createCanvas'](), of$4s['idx']++, kmjc0;
      } else {
        if (kc05v7 == 'textarea' || kc05v7 == 'input') return of$4s['onCreateInput'](kc05v7);else {
          if (kc05v7 == 'div') {
            var no324 = of$4s['_preCreateElement'](kc05v7);return no324['contains'] = function (pq) {
              return null;
            }, no324['removeChild'] = function (qeuw8) {}, no324;
          } else return of$4s['_preCreateElement'](kc05v7);
        }
      }
    }, of$4s['onCreateInput'] = function (mk0dcj) {
      var lzuhy6 = of$4s['_preCreateElement'](mk0dcj);return lzuhy6['focus'] = p07v5['wxinputFocus'], lzuhy6['blur'] = p07v5['wxinputblur'], lzuhy6['style'] = {}, lzuhy6['value'] = 0x0, lzuhy6['parentElement'] = {}, lzuhy6['placeholder'] = {}, lzuhy6['type'] = {}, lzuhy6['setColor'] = function (yz6_) {}, lzuhy6['setType'] = function (blzu86) {}, lzuhy6['setFontFace'] = function ($43nto) {}, lzuhy6['addEventListener'] = function (u8bql) {}, lzuhy6['contains'] = function (bwg8eq) {
        return null;
      }, lzuhy6['removeChild'] = function (begwq) {}, lzuhy6;
    }, of$4s['createShaderCondition'] = function (h6_y12) {
      var xp5v7 = this,
          qge8wb = function () {
        var zl1y6h = h6_y12;return xp5v7[h6_y12['replace']('this.', '')];
      };return qge8wb;
    }, of$4s['EnvConfig'] = null, of$4s['window'] = null, of$4s['_preCreateElement'] = null, of$4s['_inited'] = ![], of$4s['wxRequest'] = null, of$4s['systemInfo'] = null, of$4s['version'] = '0.0.1', of$4s['isZiYu'] = ![], of$4s['isPosMsgYu'] = ![], of$4s['parseXMLFromString'] = function (v05pk7) {
      var $34oi, h1l6yz;v05pk7 = v05pk7['replace'](/>\s+</g, '><');try {
        $34oi = new window['Parser']['DOMParser']()['parseFromString'](v05pk7, 'text/xml');
      } catch (cv0k57) {
        throw '需要引入xml解析库文件';
      }return $34oi;
    }, of$4s['idx'] = 0x1, of$4s;
  }(),
      $iosf = function () {
    function y1_h26() {}m70ck5(y1_h26, 'laya.wx.mini.MiniImage');var kcm0j = y1_h26['prototype'];return kcm0j['_loadImage'] = function (cmjk0d) {
      var g8bwqe = this,
          t2o3 = ![];cmjk0d['indexOf']('layaNativeDir/') == -0x1 && (t2o3 = !![], cmjk0d = ofi$['formatURL'](cmjk0d));if (!u6lzb8['getFileInfo'](cmjk0d)) {
        if (cmjk0d['indexOf']('http://') != -0x1 || cmjk0d['indexOf']('https://') != -0x1) u6lzb8['downImg'](cmjk0d, new bwe8(y1_h26, y1_h26['onDownImgCallBack'], [cmjk0d, g8bwqe]), cmjk0d);else y1_h26['onCreateImage'](cmjk0d, g8bwqe, !![]);
      } else y1_h26['onCreateImage'](cmjk0d, g8bwqe, !t2o3);
    }, y1_h26['onDownImgCallBack'] = function (z8uyl6, _2t3n4, zhuy) {
      if (!zhuy) y1_h26['onCreateImage'](z8uyl6, _2t3n4);else _2t3n4['onError'](null);
    }, y1_h26['onCreateImage'] = function (xwpq, u6y, adc0mj) {
      adc0mj === void 0x0 && (adc0mj = ![]);var y2h1_;if (!adc0mj) {
        var xpgv57 = u6lzb8['getFileInfo'](xwpq),
            y_h62 = xpgv57['md5'];y2h1_ = u6lzb8['getFileNativePath'](y_h62);
      } else y2h1_ = xwpq;if (u6y['imgCache'] == null) u6y['imgCache'] = {};var si$4o;function kp5v7x() {
        si$4o['onload'] = null, si$4o['onerror'] = null, delete u6y['imgCache'][xwpq];
      };var zyu6 = function () {
        kp5v7x(), u6y['onLoaded'](si$4o);
      },
          fi$os = function () {
        kp5v7x(), u6y['event']('error', 'Load image failed');
      };u6y['_type'] == 'nativeimage' ? (si$4o = new n3s['window']['Image'](), si$4o['crossOrigin'] = '', si$4o['onload'] = zyu6, si$4o['onerror'] = fi$os, si$4o['src'] = y2h1_, u6y['imgCache'][xwpq] = si$4o) : new $ofis4['create'](y2h1_, { 'onload': zyu6, 'onerror': fi$os, 'onCreate': function (mk5c7) {
          si$4o = mk5c7, u6y['imgCache'][xwpq] = mk5c7;
        } });
    }, y1_h26;
  }(),
      p07v5 = function () {
    function wqeu8b() {}return m70ck5(wqeu8b, 'laya.wx.mini.MiniInput'), wqeu8b['_createInputElement'] = function () {
      nt2_h['_initInput'](nt2_h['area'] = n3s['createElement']('textarea')), nt2_h['_initInput'](nt2_h['input'] = n3s['createElement']('input')), nt2_h['inputContainer'] = n3s['createElement']('div'), nt2_h['inputContainer']['style']['position'] = 'absolute', nt2_h['inputContainer']['style']['zIndex'] = 0x186a0, n3s['container']['appendChild'](nt2_h['inputContainer']), nt2_h['inputContainer']['setPos'] = function (vxgp7, euqw8) {
        nt2_h['inputContainer']['style']['left'] = vxgp7 + 'px', nt2_h['inputContainer']['style']['top'] = euqw8 + 'px';
      }, is9$f['stage']['on']('resize', null, wqeu8b['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zh1y_) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), so3$i4['_soundClass'] = p50v, so3$i4['_musicClass'] = p50v;
    }, wqeu8b['_onStageResize'] = function () {
      var n13_2t = is9$f['stage']['_canvasTransform']['identity']();n13_2t['scale'](n3s['width'] / v7pk50['canvas']['width'] / hyzlu6['getPixelRatio'](), n3s['height'] / v7pk50['canvas']['height'] / hyzlu6['getPixelRatio']());
    }, wqeu8b['wxinputFocus'] = function (fr$is) {
      var uqwe8b = nt2_h['inputElement']['target'];if (uqwe8b && !uqwe8b['editable']) return;isr$f['window']['wx']['offKeyboardConfirm'](), isr$f['window']['wx']['offKeyboardInput'](), isr$f['window']['wx']['showKeyboard']({ 'defaultValue': uqwe8b['text'], 'maxLength': uqwe8b['maxChars'], 'multiple': uqwe8b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($4n3s) {}, 'fail': function (otn324) {} }), isr$f['window']['wx']['onKeyboardConfirm'](function (i4s) {
        var h2_1 = i4s ? i4s['value'] : '';uqwe8b['text'] = h2_1, uqwe8b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), isr$f['window']['wx']['onKeyboardInput'](function (gwpx5v) {
        var sif$ = gwpx5v ? gwpx5v['value'] : '';if (!uqwe8b['multiline']) {
          if (sif$['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uqwe8b['text'] = sif$, uqwe8b['event']('input');
      });
    }, wqeu8b['inputEnter'] = function () {
      nt2_h['inputElement']['target']['focus'] = ![];
    }, wqeu8b['wxinputblur'] = function () {
      wqeu8b['hideKeyboard']();
    }, wqeu8b['hideKeyboard'] = function () {
      isr$f['window']['wx']['offKeyboardConfirm'](), isr$f['window']['wx']['offKeyboardInput'](), isr$f['window']['wx']['hideKeyboard']({ 'success': function (_h26y) {
          console['log']('隐藏键盘');
        }, 'fail': function (xgvp57) {
          console['log']('隐藏键盘出错:' + (xgvp57 ? xgvp57['errMsg'] : ''));
        } });
    }, wqeu8b;
  }(),
      wpv5gx = function () {
    function jacmd() {}m70ck5(jacmd, 'laya.wx.mini.MiniLoader');var _yh12 = jacmd['prototype'];return _yh12['load'] = function (kcd7m0, cdk0mj, n$s34, _hz6y, eublq8) {
      n$s34 === void 0x0 && (n$s34 = !![]), eublq8 === void 0x0 && (eublq8 = ![]);var lhy6 = this;lhy6['_url'] = kcd7m0;if (kcd7m0['indexOf']('data:image') === 0x0) lhy6['_type'] = cdk0mj = 'image';else lhy6['_type'] = cdk0mj || (cdk0mj = lhy6['getTypeFromUrl'](kcd7m0));lhy6['_cache'] = n$s34, lhy6['_data'] = null;var lu8be = 'ascii';if (kcd7m0['indexOf']('.fnt') != -0x1) lu8be = 'utf8';else cdk0mj == 'arraybuffer' && (lu8be = '');;var nth12_ = gvpqw['getFileExtension'](kcd7m0);if (jacmd['_fileTypeArr']['indexOf'](nth12_) != -0x1) isr$f['EnvConfig']['load']['call'](this, kcd7m0, cdk0mj, n$s34, _hz6y, eublq8);else {
        if (!u6lzb8['getFileInfo'](kcd7m0)) {
          if (kcd7m0['indexOf']('layaNativeDir/') != -0x1) {
            if (isr$f['isZiYu']) {
              var oi9s = u6lzb8['ziyuFileData'][kcd7m0];lhy6['onLoaded'](oi9s);return;
            } else {
              cosnole['log']('read read'), u6lzb8['read'](kcd7m0, lu8be, new bwe8(jacmd, jacmd['onReadNativeCallBack'], [lu8be, kcd7m0, cdk0mj, n$s34, _hz6y, eublq8, lhy6]));return;
            }
          }if (ofi$['rootPath'] == '') var k0cv5 = kcd7m0;else k0cv5 = kcd7m0['split'](ofi$['rootPath'])[0x0];kcd7m0['indexOf']('http://') != -0x1 || kcd7m0['indexOf']('https://') != -0x1 ? isr$f['EnvConfig']['load']['call'](lhy6, kcd7m0, cdk0mj, n$s34, _hz6y, eublq8) : u6lzb8['readFile'](k0cv5, lu8be, new bwe8(jacmd, jacmd['onReadNativeCallBack'], [lu8be, kcd7m0, cdk0mj, n$s34, _hz6y, eublq8, lhy6]), kcd7m0);
        } else isr$f['EnvConfig']['load']['call'](this, kcd7m0, cdk0mj, n$s34, _hz6y, eublq8);
      }
    }, _yh12['resMgrLoad'] = function (ifrs9$, sif$r, o4$3nt, _2hy16, ulhy6z, n$os4, kj0cdm) {
      o4$3nt === void 0x0 && (o4$3nt = 0x0), _2hy16 === void 0x0 && (_2hy16 = ![]), ulhy6z === void 0x0 && (ulhy6z = ![]), n$os4 === void 0x0 && (n$os4 = 0x0), kj0cdm === void 0x0 && (kj0cdm = 0x3), ifrs9$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ifrs9$), isr$f['EnvConfig']['resMgrLoad'](ifrs9$, (wgeqp, jdck, dacj0m) => {
        jacmd['prototype']['resMgrLoadCallBack'](wgeqp, jdck, dacj0m, sif$r);
      }, o4$3nt, _2hy16, ulhy6z, n$os4, kj0cdm);
    }, _yh12['resMgrLoadCallBack'] = function (gxqep, yul8z6, hnt_21, $isfr) {
      console['log']('buff:::', gxqep, hnt_21, u6lzb8['fileNativeDir'] + '///' + u6lzb8['fileListName']), $isfr(gxqep, yul8z6, hnt_21);
    }, _yh12['clearRes'] = function (wqxp, n4o3$s) {
      n4o3$s === void 0x0 && (n4o3$s = ![]);var s34o$n = this;s34o$n['clearRes'](wqxp, n4o3$s);var uq8bl = u6lzb8['getFileInfo'](wqxp);if (uq8bl && (wqxp['indexOf']('http://') != -0x1 || wqxp['indexOf']('https://') != -0x1)) {
        var v05k7 = uq8bl['md5'],
            beq8u = u6lzb8['getFileNativePath'](v05k7);u6lzb8['remove'](beq8u);
      }
    }, jacmd['onReadNativeCallBack'] = function (djc0, eub8zl, ebuw8q, zhyu6l, p70kv, elq8, ofsi9, gpv57, m0cdjk) {
      zhyu6l === void 0x0 && (zhyu6l = !![]), elq8 === void 0x0 && (elq8 = ![]), gpv57 === void 0x0 && (gpv57 = 0x0);if (!gpv57) {
        var _2h1t;if (ebuw8q == 'json' || ebuw8q == 'atlas') _2h1t = isr$f['getJson'](m0cdjk['data']);else ebuw8q == 'xml' ? _2h1t = gvpqw['parseXMLFromString'](m0cdjk['data']) : _2h1t = m0cdjk['data'];ofsi9['onLoaded'](_2h1t), !isr$f['isZiYu'] && isr$f['isPosMsgYu'] && ebuw8q != 'arraybuffer' && wx['postMessage']({ 'url': eub8zl, 'data': _2h1t, 'isLoad': !![] });
      } else gpv57 == 0x1 && isr$f['EnvConfig']['load']['call'](ofsi9, eub8zl, ebuw8q, zhyu6l, p70kv, elq8);
    }, $3s4n(jacmd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jacmd;
  }(),
      u6lzb8 = function (hy612_) {
    function xwpg() {
      xwpg['__super']['call'](this);;
    }return m70ck5(xwpg, 'laya.wx.mini.MiniFileMgr', hy612_), xwpg['isLoadFile'] = function (os34n$) {
      return xwpg['_fileTypeArr']['indexOf'](os34n$) != -0x1 ? !![] : ![];
    }, xwpg['getFileInfo'] = function (bgw8q) {
      var t2o3n4 = bgw8q['split']('?')[0x0],
          webxgq = xwpg['filesListObj'][t2o3n4];if (webxgq == null) return null;else return webxgq;return null;
    }, xwpg['onFileUpdate'] = function (x7k5, uz86lb) {
      var s4n = x7k5['split']('/'),
          g5vxp = s4n[s4n['length'] - 0x1],
          y1_h62 = xwpg['getFileInfo'](uz86lb);if (y1_h62 == null) xwpg['onSaveFile'](uz86lb, g5vxp);else {
        if (y1_h62['readyUrl'] != uz86lb) xwpg['remove'](g5vxp, uz86lb);
      }
    }, xwpg['exits'] = function (m7c, if$sr) {
      var zul68b = xwpg['getFileNativePath'](m7c);xwpg['fs']['getFileInfo']({ 'filePath': zul68b, 'success': function ($sio4f) {
          if$sr != null && if$sr['runWith']([0x0, $sio4f]);
        }, 'fail': function (yl6hzu) {
          if$sr != null && if$sr['runWith']([0x1, yl6hzu]);
        } });
    }, xwpg['read'] = function (_16hy, m5ck, n2t_, t12_n) {
      m5ck === void 0x0 && (m5ck = 'ascill'), t12_n === void 0x0 && (t12_n = '');var k75cm;t12_n != '' ? k75cm = xwpg['getFileNativePath'](_16hy) : k75cm = _16hy, xwpg['fs']['readFile']({ 'filePath': k75cm, 'encoding': m5ck, 'success': function (cad0jm) {
          n2t_ != null && n2t_['runWith']([0x0, cad0jm]);
        }, 'fail': function (dmk0c7) {
          if (dmk0c7 && t12_n != '') xwpg['down'](t12_n, m5ck, n2t_, t12_n);else n2t_ != null && n2t_['runWith']([0x1]);
        } });
    }, xwpg['readNativeFile'] = function (yht2_, qw8eg) {
      xwpg['fs']['readFile']({ 'filePath': yht2_, 'encoding': '', 'success': function (t4n23o) {
          qw8eg != null && qw8eg['runWith']([0x0]);
        }, 'fail': function (egqxwb) {
          qw8eg != null && qw8eg['runWith']([0x1]);
        } });
    }, xwpg['down'] = function (v5gpx, yz16l, lbeu8, kdcmj) {
      yz16l === void 0x0 && (yz16l = 'ascill'), kdcmj === void 0x0 && (kdcmj = '');var f4$ios = xwpg['getFileNativePath'](kdcmj),
          qulbe8 = xwpg['wxdown']({ 'url': v5gpx, 'filePath': f4$ios, 'success': function (t1_h) {
          if (t1_h['statusCode'] === 0xc8) xwpg['readFile'](t1_h['filePath'], yz16l, lbeu8, kdcmj);
        }, 'fail': function (p75k0v) {
          lbeu8 != null && lbeu8['runWith']([0x1, p75k0v]);
        } });qulbe8['onProgressUpdate'](function (o42t3n) {
        lbeu8 != null && lbeu8['runWith']([0x2, o42t3n['progress']]);
      });
    }, xwpg['readFile'] = function (qgvwp, ns3$4o, _34t, lhz) {
      ns3$4o === void 0x0 && (ns3$4o = 'ascill'), lhz === void 0x0 && (lhz = ''), xwpg['fs']['readFile']({ 'filePath': qgvwp, 'encoding': ns3$4o, 'success': function ($43to) {
          if (qgvwp['indexOf']('http://') != -0x1 || qgvwp['indexOf']('https://') != -0x1) xwpg['onFileUpdate'](qgvwp, lhz);_34t != null && _34t['runWith']([0x0, $43to]);
        }, 'fail': function (tn3_42) {
          if (tn3_42) _34t != null && _34t['runWith']([0x1, tn3_42]);
        } });
    }, xwpg['downImg'] = function (dmj0, _1nth2, _62hy) {
      _62hy === void 0x0 && (_62hy = '');var ont$ = xwpg['wxdown']({ 'url': dmj0, 'success': function (p075kv) {
          p075kv['statusCode'] === 0xc8 && xwpg['copyFile'](p075kv['tempFilePath'], _62hy, _1nth2);
        }, 'fail': function (ze8bu) {
          _1nth2 != null && _1nth2['runWith']([0x1, ze8bu]);
        } });
    }, xwpg['copyFile'] = function (lbqeu, gxe, g5xpvw) {
      var _6z1hy = lbqeu['split']('/'),
          o$4n = _6z1hy[_6z1hy['length'] - 0x1],
          tn13_ = gxe['split']('?')[0x0],
          n$4s3o = xwpg['getFileInfo'](gxe),
          zl16 = xwpg['getFileNativePath'](o$4n);xwpg['fs']['copyFile']({ 'srcPath': lbqeu, 'destPath': zl16, 'success': function (_nt43) {
          if (!n$4s3o) xwpg['onSaveFile'](gxe, o$4n), g5xpvw != null && g5xpvw['runWith']([0x0]);else {
            if (n$4s3o['readyUrl'] != gxe) xwpg['remove'](o$4n, gxe, g5xpvw);
          }
        }, 'fail': function (djkm) {
          g5xpvw != null && g5xpvw['runWith']([0x1, djkm]);
        } });
    }, xwpg['getFileNativePath'] = function ($fis4o) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $fis4o;
    }, xwpg['remove'] = function (kc57v, n$3ot4, d0mck) {
      n$3ot4 === void 0x0 && (n$3ot4 = '');var h6lzuy = xwpg['getFileInfo'](n$3ot4),
          zl8ueb = xwpg['getFileNativePath'](h6lzuy['md5']);is9$f['loader']['clearRes'](h6lzuy['readyUrl']), xwpg['fs']['unlink']({ 'filePath': zl8ueb, 'success': function (qbwue) {
          if (n$3ot4 != '') xwpg['onSaveFile'](n$3ot4, kc57v);d0mck != null && d0mck['runWith']([0x0]);
        }, 'fail': function ($o43ns) {} });
    }, xwpg['onSaveFile'] = function ($3t4, yulz6) {
      var _21hty = $3t4['split']('?')[0x0];xwpg['filesListObj'][_21hty] = { 'md5': yulz6, 'readyUrl': $3t4 }, xwpg['fs']['writeFile']({ 'filePath': xwpg['fileNativeDir'] + '/' + xwpg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xwpg['filesListObj']), 'success': function (qxegpw) {
          console['log']('写入测试测试成功：', qxegpw);
        }, 'fail': function (ht_n21) {
          console['log']('写入测试测试失败：', ht_n21);
        } });
    }, xwpg['existDir'] = function (vxpg5, ubwq) {
      xwpg['fs']['mkdir']({ 'dirPath': vxpg5, 'success': function (blueq) {
          ubwq != null && ubwq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($9ofs) {
          if ($9ofs['errMsg']['indexOf']('file already exists') != -0x1) xwpg['readSync'](xwpg['fileListName'], 'utf8', ubwq);else ubwq != null && ubwq['runWith']([0x1, $9ofs]);
        } });
    }, xwpg['readSync'] = function (uzlb, o$s9if, t24, xwgqbe) {
      o$s9if === void 0x0 && (o$s9if = 'ascill'), xwgqbe === void 0x0 && (xwgqbe = '');var lbqeu8 = xwpg['getFileNativePath'](uzlb),
          mj0acd;try {
        mj0acd = xwpg['fs']['readFileSync'](lbqeu8), t24 != null && t24['runWith']([0x0, { 'data': mj0acd }]);
      } catch (gpxv5) {
        t24 != null && t24['runWith']([0x1]);
      }
    }, xwpg['readCache'] = function () {}, xwpg['writeCache'] = function (_t34n2) {
      var xqgebw = readyUrl['split']('?')[0x0];xwpg['filesListObj'][xqgebw] = { 'md5': md5Name, 'readyUrl': readyUrl }, xwpg['fs']['writeFile']({ 'filePath': xwpg['fileNativeDir'] + '/' + xwpg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xwpg['filesListObj']), 'success': function (kv70) {}, 'fail': function (k5vc7) {} });
    }, xwpg['setNativeFileDir'] = function (p70v) {
      xwpg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p70v;
    }, xwpg['filesListObj'] = {}, xwpg['fileNativeDir'] = null, xwpg['fileListName'] = 'layaairfiles.txt', xwpg['ziyuFileData'] = {}, $3s4n(xwpg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), xwpg;
  }(kx57),
      p50v = function (o4f$is) {
    function pgxv5w() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], pgxv5w['__super']['call'](this), this['_sound'] = pgxv5w['_createSound']();
    }m70ck5(pgxv5w, 'laya.wx.mini.MiniSound', o4f$is);var $s4on = pgxv5w['prototype'];return $s4on['load'] = function (_621) {
      var $of4is = this;_621 = ofi$['formatURL'](_621), this['url'] = _621;if (pgxv5w['_audioCache'][_621]) {
        this['event']('complete');return;
      }function _tn423() {
        if (pgxv5w['_null'] != undefined) $of4is['_sound']['onCanplay'](pgxv5w['_null']), $of4is['_sound']['onError'](pgxv5w['_null']);else try {
          $of4is['_sound']['onCanplay'](null), $of4is['_sound']['onError'](null), pgxv5w['_null'] = null;
        } catch (m7dck) {
          console['warn']('[wxmini] _clearSound:' + m7dck), $of4is['_sound']['onCanplay'](n4_3t2), $of4is['_sound']['onError'](n4_3t2), pgxv5w['_null'] = n4_3t2;
        }
      }function s4$o3() {
        _tn423(), xk7vp['loaded'] = !![], xk7vp['event']('complete'), pgxv5w['_audioCache'][xk7vp['url']] = xk7vp;
      }function thn12_(d0aj) {
        console['error']('errCode=' + d0aj['errCode'] + '  errMsg=' + d0aj['errMsg']), _tn423(), xk7vp['event']('error');
      }function n4_3t2() {}this['_sound']['onCanplay'](s4$o3), this['_sound']['onError'](thn12_), this['_sound']['src'] = _621;var xk7vp = this;
    }, $s4on['play'] = function (c0jmd, f$sri9) {
      c0jmd === void 0x0 && (c0jmd = 0x0), f$sri9 === void 0x0 && (f$sri9 = 0x0);var t42no;if (this['url'] == so3$i4['_tMusic']) {
        if (!pgxv5w['_musicAudio']) pgxv5w['_musicAudio'] = pgxv5w['_createSound']();t42no = pgxv5w['_musicAudio'];
      } else t42no = pgxv5w['_createSound']();t42no['src'] = this['url'];var i$fso = new $i4sf(t42no);return i$fso['url'] = this['url'], i$fso['loops'] = f$sri9, i$fso['startTime'] = c0jmd, i$fso['play'](), so3$i4['addChannel'](i$fso), i$fso;
    }, $s4on['dispose'] = function () {
      var hn_21 = pgxv5w['_audioCache'][this['url']];hn_21 && (hn_21['src'] = '', delete pgxv5w['_audioCache'][this['url']]);
    }, g5vxp7(0x0, $s4on, 'duration', function () {
      return this['_sound']['duration'];
    }), pgxv5w['_createSound'] = function () {
      return pgxv5w['_id']++, isr$f['window']['wx']['createInnerAudioContext']();
    }, pgxv5w['_musicAudio'] = null, pgxv5w['_id'] = 0x0, pgxv5w['_audioCache'] = {}, pgxv5w['_null'] = undefined, pgxv5w;
  }(kx57),
      $i4sf = function (uyhzl6) {
    function u8belz(o4nt$) {
      this['_audio'] = null, this['_onEnd'] = null, u8belz['__super']['call'](this), this['_audio'] = o4nt$, this['_onEnd'] = gvpqw['bind'](this['__onEnd'], this), o4nt$['onEnded'](this['_onEnd']);
    }m70ck5(u8belz, 'laya.wx.mini.MiniSoundChannel', uyhzl6);var no$t34 = u8belz['prototype'];return no$t34['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (is9$f['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, no$t34['__onNull'] = function () {}, no$t34['play'] = function () {
      this['isStopped'] = ![], so3$i4['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, no$t34['stop'] = function () {
      this['isStopped'] = !![], so3$i4['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (u8belz['_null'] != undefined) this['_audio']['onEnded'](u8belz['_null']);else try {
        this['_audio']['onEnded'](null), u8belz['_null'] = null;
      } catch (n2t4o3) {
        console['warn']('[wxmini] stop:' + n2t4o3), this['_audio']['onEnded'](gvpqw['bind'](this['__onNull'], this)), u8belz['_null'] = gvpqw['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, no$t34['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, no$t34['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], so3$i4['addChannel'](this), this['_audio']['play']();
    }, g5vxp7(0x0, no$t34, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), g5vxp7(0x0, no$t34, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), g5vxp7(0x0, no$t34, 'volume', function () {
      return 0x1;
    }, function (xpgwe) {}), u8belz['_null'] = undefined, u8belz;
  }(k5m0c);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var q8leu in Laya) {
    var wgpexq = Laya[q8leu];wgpexq && wgpexq['__isclass'] && (exports[q8leu] = wgpexq);
  }
});