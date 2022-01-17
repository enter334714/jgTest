var Q = wx.$v;
(function (window, document, ulbeq) {
  var bq8wue = ulbeq['un'],
      bgqex = ulbeq['uns'],
      u8wqbe = ulbeq['static'],
      jdm0k = ulbeq['class'],
      qvpxgw = ulbeq['getset'],
      s43$on = ulbeq['__newvec'],
      wg8qbe = laya['utils']['Browser'],
      i$sfr = laya['events']['Event'],
      p5wvx = laya['events']['EventDispatcher'],
      o$3i4 = laya['resource']['HTMLImage'],
      wbqgx = laya['utils']['Handler'],
      km750 = laya['display']['Input'],
      beqxgw = laya['net']['Loader'],
      t23o = laya['maths']['Matrix'],
      eqwbu = laya['renders']['Render'],
      q8uewb = laya['utils']['RunDriver'],
      s$iof = laya['media']['Sound'],
      eu8zl = laya['media']['SoundChannel'],
      bqwg = laya['media']['SoundManager'],
      k7pv = laya['display']['Stage'],
      s$o3n4 = laya['net']['URL'],
      y16z_ = laya['utils']['Utils'],
      eql8 = function () {
    function b8luez() {}return jdm0k(b8luez, 'laya.wx.mini.MiniAdpter'), b8luez['getJson'] = function (kjc) {
      return JSON['parse'](kjc);
    }, b8luez['init'] = function (mc0a, l8zb6) {
      mc0a === void 0x0 && (mc0a = ![]), l8zb6 === void 0x0 && (l8zb6 = ![]);if (b8luez['_inited']) return;b8luez['window'] = window;if (b8luez['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;b8luez['_inited'] = !![], b8luez['isZiYu'] = l8zb6, b8luez['isPosMsgYu'] = mc0a, b8luez['EnvConfig'] = {}, !b8luez['isZiYu'] && (gwvpq['setNativeFileDir']('/layaairGame'), gwvpq['existDir'](gwvpq['fileNativeDir'], wbqgx['create'](b8luez, b8luez['onMkdirCallBack']))), b8luez['window']['focus'] = function () {}, ulbeq['getUrlPath'] = function () {}, b8luez['window']['logtime'] = function (k7v50c) {}, b8luez['window']['alertTimeLog'] = function (yz1h6_) {}, b8luez['window']['resetShareInfo'] = function () {}, b8luez['window']['CanvasRenderingContext2D'] = function () {}, b8luez['window']['CanvasRenderingContext2D']['prototype'] = b8luez['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], b8luez['window']['document']['body']['appendChild'] = function () {}, b8luez['EnvConfig']['pixelRatioInt'] = 0x0, q8uewb['getPixelRatio'] = b8luez['pixelRatio'], b8luez['_preCreateElement'] = wg8qbe['createElement'], wg8qbe['createElement'] = b8luez['createElement'], q8uewb['createShaderCondition'] = b8luez['createShaderCondition'], y16z_['parseXMLFromString'] = b8luez['parseXMLFromString'], km750['_createInputElement'] = wqpvgx['_createInputElement'], b8luez['EnvConfig']['load'] = beqxgw['prototype']['load'], beqxgw['prototype']['load'] = djcmk['prototype']['load'], b8luez['isZiYu'] && mc0a && wx['onMessage'](function (egqwpx) {
        egqwpx['isLoad'] && (gwvpq['ziyuFileData'][egqwpx['url']] = egqwpx['data']);
      });
    }, b8luez['onMkdirCallBack'] = function (t234o, yzl68u) {
      if (!t234o) gwvpq['filesListObj'] = JSON['parse'](yzl68u['data']);
    }, b8luez['pixelRatio'] = function () {
      if (!b8luez['EnvConfig']['pixelRatioInt']) try {
        var ubl8e = wx['getSystemInfoSync']();return b8luez['EnvConfig']['pixelRatioInt'] = ubl8e['pixelRatio'], ubl8e = ubl8e, ubl8e['pixelRatio'];
      } catch ($of) {}return b8luez['EnvConfig']['pixelRatioInt'];
    }, b8luez['createElement'] = function (c705km) {
      if (c705km == 'canvas') {
        var mda0jc;return b8luez['idx'] == 0x1 ? b8luez['isZiYu'] ? (mda0jc = sharedCanvas, mda0jc['style'] = {}) : mda0jc = window['canvas'] : mda0jc = window['wx']['createCanvas'](), b8luez['idx']++, mda0jc;
      } else {
        if (c705km == 'textarea' || c705km == 'input') return b8luez['onCreateInput'](c705km);else {
          if (c705km == 'div') {
            var n12t = b8luez['_preCreateElement'](c705km);return n12t['contains'] = function (yu8lz6) {
              return null;
            }, n12t['removeChild'] = function (gqxweb) {}, n12t;
          } else return b8luez['_preCreateElement'](c705km);
        }
      }
    }, b8luez['onCreateInput'] = function (pk7v0) {
      var _tn34 = b8luez['_preCreateElement'](pk7v0);return _tn34['focus'] = wqpvgx['wxinputFocus'], _tn34['blur'] = wqpvgx['wxinputblur'], _tn34['style'] = {}, _tn34['value'] = 0x0, _tn34['parentElement'] = {}, _tn34['placeholder'] = {}, _tn34['type'] = {}, _tn34['setColor'] = function (t_2hy1) {}, _tn34['setType'] = function (vg75p) {}, _tn34['setFontFace'] = function (_z61yh) {}, _tn34['addEventListener'] = function (p07v) {}, _tn34['contains'] = function (pv075) {
        return null;
      }, _tn34['removeChild'] = function (h6ly1z) {}, _tn34;
    }, b8luez['createShaderCondition'] = function (cm0j) {
      var osf9 = this,
          p57kxv = function () {
        var nht = cm0j;return osf9[cm0j['replace']('this.', '')];
      };return p57kxv;
    }, b8luez['EnvConfig'] = null, b8luez['window'] = null, b8luez['_preCreateElement'] = null, b8luez['_inited'] = ![], b8luez['wxRequest'] = null, b8luez['systemInfo'] = null, b8luez['version'] = '0.0.1', b8luez['isZiYu'] = ![], b8luez['isPosMsgYu'] = ![], b8luez['parseXMLFromString'] = function (z6u8) {
      var euqbl, mdcj0a;z6u8 = z6u8['replace'](/>\s+</g, '><');try {
        euqbl = new window['Parser']['DOMParser']()['parseFromString'](z6u8, 'text/xml');
      } catch ($irf9) {
        throw '需要引入xml解析库文件';
      }return euqbl;
    }, b8luez['idx'] = 0x1, b8luez;
  }(),
      wqbue8 = function () {
    function $34is() {}jdm0k($34is, 'laya.wx.mini.MiniImage');var d70cm = $34is['prototype'];return d70cm['_loadImage'] = function (hzy1) {
      var quel8 = this,
          kx7p = ![];hzy1['indexOf']('layaNativeDir/') == -0x1 && (kx7p = !![], hzy1 = s$o3n4['formatURL'](hzy1));if (!gwvpq['getFileInfo'](hzy1)) {
        if (hzy1['indexOf']('http://') != -0x1 || hzy1['indexOf']('https://') != -0x1) gwvpq['downImg'](hzy1, new wbqgx($34is, $34is['onDownImgCallBack'], [hzy1, quel8]), hzy1);else $34is['onCreateImage'](hzy1, quel8, !![]);
      } else $34is['onCreateImage'](hzy1, quel8, !kx7p);
    }, $34is['onDownImgCallBack'] = function (pg5wvx, kv0c5, mj0k) {
      if (!mj0k) $34is['onCreateImage'](pg5wvx, kv0c5);else kv0c5['onError'](null);
    }, $34is['onCreateImage'] = function (t4n$o, eul8, n_23t1) {
      n_23t1 === void 0x0 && (n_23t1 = ![]);var n4o$3;if (!n_23t1) {
        var xwqgb = gwvpq['getFileInfo'](t4n$o),
            nt2_34 = xwqgb['md5'];n4o$3 = gwvpq['getFileNativePath'](nt2_34);
      } else n4o$3 = t4n$o;if (eul8['imgCache'] == null) eul8['imgCache'] = {};var tn_1;function p5xwvg() {
        tn_1['onload'] = null, tn_1['onerror'] = null, delete eul8['imgCache'][t4n$o];
      };var ajmcd0 = function () {
        p5xwvg(), eul8['onLoaded'](tn_1);
      },
          i3$4 = function () {
        p5xwvg(), eul8['event']('error', 'Load image failed');
      };eul8['_type'] == 'nativeimage' ? (tn_1 = new wg8qbe['window']['Image'](), tn_1['crossOrigin'] = '', tn_1['onload'] = ajmcd0, tn_1['onerror'] = i3$4, tn_1['src'] = n4o$3, eul8['imgCache'][t4n$o] = tn_1) : new o$3i4['create'](n4o$3, { 'onload': ajmcd0, 'onerror': i3$4, 'onCreate': function (h1n_t) {
          tn_1 = h1n_t, eul8['imgCache'][t4n$o] = h1n_t;
        } });
    }, $34is;
  }(),
      wqpvgx = function () {
    function $o9fis() {}return jdm0k($o9fis, 'laya.wx.mini.MiniInput'), $o9fis['_createInputElement'] = function () {
      km750['_initInput'](km750['area'] = wg8qbe['createElement']('textarea')), km750['_initInput'](km750['input'] = wg8qbe['createElement']('input')), km750['inputContainer'] = wg8qbe['createElement']('div'), km750['inputContainer']['style']['position'] = 'absolute', km750['inputContainer']['style']['zIndex'] = 0x186a0, wg8qbe['container']['appendChild'](km750['inputContainer']), km750['inputContainer']['setPos'] = function (j0amcd, no4t3) {
        km750['inputContainer']['style']['left'] = j0amcd + 'px', km750['inputContainer']['style']['top'] = no4t3 + 'px';
      }, ulbeq['stage']['on']('resize', null, $o9fis['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jdacm0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bqwg['_soundClass'] = q8gwb, bqwg['_musicClass'] = q8gwb;
    }, $o9fis['_onStageResize'] = function () {
      var b8lzeu = ulbeq['stage']['_canvasTransform']['identity']();b8lzeu['scale'](wg8qbe['width'] / eqwbu['canvas']['width'] / q8uewb['getPixelRatio'](), wg8qbe['height'] / eqwbu['canvas']['height'] / q8uewb['getPixelRatio']());
    }, $o9fis['wxinputFocus'] = function (t2n1h) {
      var lbu8 = km750['inputElement']['target'];if (lbu8 && !lbu8['editable']) return;eql8['window']['wx']['offKeyboardConfirm'](), eql8['window']['wx']['offKeyboardInput'](), eql8['window']['wx']['showKeyboard']({ 'defaultValue': lbu8['text'], 'maxLength': lbu8['maxChars'], 'multiple': lbu8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($t34no) {}, 'fail': function (l6zu8) {} }), eql8['window']['wx']['onKeyboardConfirm'](function (qvwgp) {
        var eb8qwu = qvwgp ? qvwgp['value'] : '';lbu8['text'] = eb8qwu, lbu8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), eql8['window']['wx']['onKeyboardInput'](function (wqbexg) {
        var $s4fio = wqbexg ? wqbexg['value'] : '';if (!lbu8['multiline']) {
          if ($s4fio['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }lbu8['text'] = $s4fio, lbu8['event']('input');
      });
    }, $o9fis['inputEnter'] = function () {
      km750['inputElement']['target']['focus'] = ![];
    }, $o9fis['wxinputblur'] = function () {
      $o9fis['hideKeyboard']();
    }, $o9fis['hideKeyboard'] = function () {
      eql8['window']['wx']['offKeyboardConfirm'](), eql8['window']['wx']['offKeyboardInput'](), eql8['window']['wx']['hideKeyboard']({ 'success': function (we8uqb) {
          console['log']('隐藏键盘');
        }, 'fail': function (ly16hz) {
          console['log']('隐藏键盘出错:' + (ly16hz ? ly16hz['errMsg'] : ''));
        } });
    }, $o9fis;
  }(),
      djcmk = function () {
    function zl6yhu() {}jdm0k(zl6yhu, 'laya.wx.mini.MiniLoader');var $of4si = zl6yhu['prototype'];return $of4si['load'] = function (u6yl, xqvwpg, f9$r, ir$s9f, dkcm7) {
      f9$r === void 0x0 && (f9$r = !![]), dkcm7 === void 0x0 && (dkcm7 = ![]);var i$r9s = this;i$r9s['_url'] = u6yl;if (u6yl['indexOf']('data:image') === 0x0) i$r9s['_type'] = xqvwpg = 'image';else i$r9s['_type'] = xqvwpg || (xqvwpg = i$r9s['getTypeFromUrl'](u6yl));i$r9s['_cache'] = f9$r, i$r9s['_data'] = null;var m70kdc = 'ascii';if (u6yl['indexOf']('.fnt') != -0x1) m70kdc = 'utf8';else xqvwpg == 'arraybuffer' && (m70kdc = '');;var bq8wge = y16z_['getFileExtension'](u6yl);if (zl6yhu['_fileTypeArr']['indexOf'](bq8wge) != -0x1) eql8['EnvConfig']['load']['call'](this, u6yl, xqvwpg, f9$r, ir$s9f, dkcm7);else {
        if (!gwvpq['getFileInfo'](u6yl)) {
          if (u6yl['indexOf']('layaNativeDir/') != -0x1) {
            if (eql8['isZiYu']) {
              var q8l = gwvpq['ziyuFileData'][u6yl];i$r9s['onLoaded'](q8l);return;
            } else {
              cosnole['log']('read read'), gwvpq['read'](u6yl, m70kdc, new wbqgx(zl6yhu, zl6yhu['onReadNativeCallBack'], [m70kdc, u6yl, xqvwpg, f9$r, ir$s9f, dkcm7, i$r9s]));return;
            }
          }if (s$o3n4['rootPath'] == '') var wg5pxv = u6yl;else wg5pxv = u6yl['split'](s$o3n4['rootPath'])[0x0];u6yl['indexOf']('http://') != -0x1 || u6yl['indexOf']('https://') != -0x1 ? eql8['EnvConfig']['load']['call'](i$r9s, u6yl, xqvwpg, f9$r, ir$s9f, dkcm7) : gwvpq['readFile'](wg5pxv, m70kdc, new wbqgx(zl6yhu, zl6yhu['onReadNativeCallBack'], [m70kdc, u6yl, xqvwpg, f9$r, ir$s9f, dkcm7, i$r9s]), u6yl);
        } else eql8['EnvConfig']['load']['call'](this, u6yl, xqvwpg, f9$r, ir$s9f, dkcm7);
      }
    }, $of4si['resMgrLoad'] = function (ebgwq, k0p5, u6l8b, mcdj0a, quwb8e, z16_y, i34) {
      u6l8b === void 0x0 && (u6l8b = 0x0), mcdj0a === void 0x0 && (mcdj0a = ![]), quwb8e === void 0x0 && (quwb8e = ![]), z16_y === void 0x0 && (z16_y = 0x0), i34 === void 0x0 && (i34 = 0x3), ebgwq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ebgwq), eql8['EnvConfig']['resMgrLoad'](ebgwq, (jdm, v705pk, kmj0dc) => {
        zl6yhu['prototype']['resMgrLoadCallBack'](jdm, v705pk, kmj0dc, k0p5);
      }, u6l8b, mcdj0a, quwb8e, z16_y, i34);
    }, $of4si['resMgrLoadCallBack'] = function (lb8uze, zyl6hu, h261y, qpgxw) {
      console['log']('buff:::', lb8uze, h261y, gwvpq['fileNativeDir'] + '///' + gwvpq['fileListName']), qpgxw(lb8uze, zyl6hu, h261y);
    }, $of4si['clearRes'] = function (m0kjd, lzh16y) {
      lzh16y === void 0x0 && (lzh16y = ![]);var qgwpxv = this;qgwpxv['clearRes'](m0kjd, lzh16y);var s$3on4 = gwvpq['getFileInfo'](m0kjd);if (s$3on4 && (m0kjd['indexOf']('http://') != -0x1 || m0kjd['indexOf']('https://') != -0x1)) {
        var t$3n = s$3on4['md5'],
            vp075 = gwvpq['getFileNativePath'](t$3n);gwvpq['remove'](vp075);
      }
    }, zl6yhu['onReadNativeCallBack'] = function (beq8, bu8w, cdj0km, t_43n2, s4f$i, cdj, yzhl16, l8zy6u, hlz6u) {
      t_43n2 === void 0x0 && (t_43n2 = !![]), cdj === void 0x0 && (cdj = ![]), l8zy6u === void 0x0 && (l8zy6u = 0x0);if (!l8zy6u) {
        var h1y2_t;if (cdj0km == 'json' || cdj0km == 'atlas') h1y2_t = eql8['getJson'](hlz6u['data']);else cdj0km == 'xml' ? h1y2_t = y16z_['parseXMLFromString'](hlz6u['data']) : h1y2_t = hlz6u['data'];yzhl16['onLoaded'](h1y2_t), !eql8['isZiYu'] && eql8['isPosMsgYu'] && cdj0km != 'arraybuffer' && wx['postMessage']({ 'url': bu8w, 'data': h1y2_t, 'isLoad': !![] });
      } else l8zy6u == 0x1 && eql8['EnvConfig']['load']['call'](yzhl16, bu8w, cdj0km, t_43n2, s4f$i, cdj);
    }, u8wqbe(zl6yhu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zl6yhu;
  }(),
      gwvpq = function ($fri9) {
    function b8uw() {
      b8uw['__super']['call'](this);;
    }return jdm0k(b8uw, 'laya.wx.mini.MiniFileMgr', $fri9), b8uw['isLoadFile'] = function (jcd0) {
      return b8uw['_fileTypeArr']['indexOf'](jcd0) != -0x1 ? !![] : ![];
    }, b8uw['getFileInfo'] = function (t2_3n4) {
      var k7c0v5 = t2_3n4['split']('?')[0x0],
          $o4if = b8uw['filesListObj'][k7c0v5];if ($o4if == null) return null;else return $o4if;return null;
    }, b8uw['onFileUpdate'] = function (y_61h2, k75pv0) {
      var l6h1yz = y_61h2['split']('/'),
          n231t_ = l6h1yz[l6h1yz['length'] - 0x1],
          gxp5vw = b8uw['getFileInfo'](k75pv0);if (gxp5vw == null) b8uw['onSaveFile'](k75pv0, n231t_);else {
        if (gxp5vw['readyUrl'] != k75pv0) b8uw['remove'](n231t_, k75pv0);
      }
    }, b8uw['exits'] = function (euq8l, ulzy68) {
      var gqxvpw = b8uw['getFileNativePath'](euq8l);b8uw['fs']['getFileInfo']({ 'filePath': gqxvpw, 'success': function (xwqb) {
          ulzy68 != null && ulzy68['runWith']([0x0, xwqb]);
        }, 'fail': function (h61y_z) {
          ulzy68 != null && ulzy68['runWith']([0x1, h61y_z]);
        } });
    }, b8uw['read'] = function (dcaj, _y2h1, $s4, on3s$4) {
      _y2h1 === void 0x0 && (_y2h1 = 'ascill'), on3s$4 === void 0x0 && (on3s$4 = '');var v5xwpg;on3s$4 != '' ? v5xwpg = b8uw['getFileNativePath'](dcaj) : v5xwpg = dcaj, b8uw['fs']['readFile']({ 'filePath': v5xwpg, 'encoding': _y2h1, 'success': function (t1nh2_) {
          $s4 != null && $s4['runWith']([0x0, t1nh2_]);
        }, 'fail': function (t123n) {
          if (t123n && on3s$4 != '') b8uw['down'](on3s$4, _y2h1, $s4, on3s$4);else $s4 != null && $s4['runWith']([0x1]);
        } });
    }, b8uw['readNativeFile'] = function (v7p5g, gqpvx) {
      b8uw['fs']['readFile']({ 'filePath': v7p5g, 'encoding': '', 'success': function (xgew) {
          gqpvx != null && gqpvx['runWith']([0x0]);
        }, 'fail': function (gpvq) {
          gqpvx != null && gqpvx['runWith']([0x1]);
        } });
    }, b8uw['down'] = function (v7k5x, mcdkj, ofs4i, $irf) {
      mcdkj === void 0x0 && (mcdkj = 'ascill'), $irf === void 0x0 && ($irf = '');var nt_42 = b8uw['getFileNativePath']($irf),
          _3nt42 = b8uw['wxdown']({ 'url': v7k5x, 'filePath': nt_42, 'success': function (hyz6ul) {
          if (hyz6ul['statusCode'] === 0xc8) b8uw['readFile'](hyz6ul['filePath'], mcdkj, ofs4i, $irf);
        }, 'fail': function (t21n_h) {
          ofs4i != null && ofs4i['runWith']([0x1, t21n_h]);
        } });_3nt42['onProgressUpdate'](function (rs$9i) {
        ofs4i != null && ofs4i['runWith']([0x2, rs$9i['progress']]);
      });
    }, b8uw['readFile'] = function (g5wvpx, cd7, p7xkv5, ifso) {
      cd7 === void 0x0 && (cd7 = 'ascill'), ifso === void 0x0 && (ifso = ''), b8uw['fs']['readFile']({ 'filePath': g5wvpx, 'encoding': cd7, 'success': function (yz6_h1) {
          if (g5wvpx['indexOf']('http://') != -0x1 || g5wvpx['indexOf']('https://') != -0x1) b8uw['onFileUpdate'](g5wvpx, ifso);p7xkv5 != null && p7xkv5['runWith']([0x0, yz6_h1]);
        }, 'fail': function (fs4oi$) {
          if (fs4oi$) p7xkv5 != null && p7xkv5['runWith']([0x1, fs4oi$]);
        } });
    }, b8uw['downImg'] = function (qu8el, bg8wq, on43$) {
      on43$ === void 0x0 && (on43$ = '');var f$io9s = b8uw['wxdown']({ 'url': qu8el, 'success': function (hy16_z) {
          hy16_z['statusCode'] === 0xc8 && b8uw['copyFile'](hy16_z['tempFilePath'], on43$, bg8wq);
        }, 'fail': function (bq8euw) {
          bg8wq != null && bg8wq['runWith']([0x1, bq8euw]);
        } });
    }, b8uw['copyFile'] = function (o3ns4, ont3$, exwqgb) {
      var _1h6 = o3ns4['split']('/'),
          g5p7xv = _1h6[_1h6['length'] - 0x1],
          ckv05 = ont3$['split']('?')[0x0],
          e8bz = b8uw['getFileInfo'](ont3$),
          to42n3 = b8uw['getFileNativePath'](g5p7xv);b8uw['fs']['copyFile']({ 'srcPath': o3ns4, 'destPath': to42n3, 'success': function (n24_t3) {
          if (!e8bz) b8uw['onSaveFile'](ont3$, g5p7xv), exwqgb != null && exwqgb['runWith']([0x0]);else {
            if (e8bz['readyUrl'] != ont3$) b8uw['remove'](g5p7xv, ont3$, exwqgb);
          }
        }, 'fail': function (wvxg5p) {
          exwqgb != null && exwqgb['runWith']([0x1, wvxg5p]);
        } });
    }, b8uw['getFileNativePath'] = function (g7xpv) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g7xpv;
    }, b8uw['remove'] = function (y_h126, y6hl1z, vg5x7p) {
      y6hl1z === void 0x0 && (y6hl1z = '');var zh6y_ = b8uw['getFileInfo'](y6hl1z),
          h2nt1 = b8uw['getFileNativePath'](zh6y_['md5']);ulbeq['loader']['clearRes'](zh6y_['readyUrl']), b8uw['fs']['unlink']({ 'filePath': h2nt1, 'success': function (p5vxgw) {
          if (y6hl1z != '') b8uw['onSaveFile'](y6hl1z, y_h126);vg5x7p != null && vg5x7p['runWith']([0x0]);
        }, 'fail': function (_hy12) {} });
    }, b8uw['onSaveFile'] = function (_tnh, iof) {
      var qelbu8 = _tnh['split']('?')[0x0];b8uw['filesListObj'][qelbu8] = { 'md5': iof, 'readyUrl': _tnh }, b8uw['fs']['writeFile']({ 'filePath': b8uw['fileNativeDir'] + '/' + b8uw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b8uw['filesListObj']), 'success': function (o4i3) {
          console['log']('写入测试测试成功：', o4i3);
        }, 'fail': function (lz8y6) {
          console['log']('写入测试测试失败：', lz8y6);
        } });
    }, b8uw['existDir'] = function (uze, osf9$i) {
      b8uw['fs']['mkdir']({ 'dirPath': uze, 'success': function ($i9sr) {
          osf9$i != null && osf9$i['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_2n3) {
          if (_2n3['errMsg']['indexOf']('file already exists') != -0x1) b8uw['readSync'](b8uw['fileListName'], 'utf8', osf9$i);else osf9$i != null && osf9$i['runWith']([0x1, _2n3]);
        } });
    }, b8uw['readSync'] = function (tn43$, tn_12h, q8geb, x7vgp) {
      tn_12h === void 0x0 && (tn_12h = 'ascill'), x7vgp === void 0x0 && (x7vgp = '');var vkc05 = b8uw['getFileNativePath'](tn43$),
          d0jmac;try {
        d0jmac = b8uw['fs']['readFileSync'](vkc05), q8geb != null && q8geb['runWith']([0x0, { 'data': d0jmac }]);
      } catch (y162) {
        q8geb != null && q8geb['runWith']([0x1]);
      }
    }, b8uw['readCache'] = function () {}, b8uw['writeCache'] = function (caj0d) {
      var j0cam = readyUrl['split']('?')[0x0];b8uw['filesListObj'][j0cam] = { 'md5': md5Name, 'readyUrl': readyUrl }, b8uw['fs']['writeFile']({ 'filePath': b8uw['fileNativeDir'] + '/' + b8uw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b8uw['filesListObj']), 'success': function (km7c0) {}, 'fail': function (leu8bq) {} });
    }, b8uw['setNativeFileDir'] = function (cm0daj) {
      b8uw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cm0daj;
    }, b8uw['filesListObj'] = {}, b8uw['fileNativeDir'] = null, b8uw['fileListName'] = 'layaairfiles.txt', b8uw['ziyuFileData'] = {}, u8wqbe(b8uw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), b8uw;
  }(p5wvx),
      q8gwb = function (mjc0) {
    function luy68z() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], luy68z['__super']['call'](this), this['_sound'] = luy68z['_createSound']();
    }jdm0k(luy68z, 'laya.wx.mini.MiniSound', mjc0);var wqxbge = luy68z['prototype'];return wqxbge['load'] = function (_31t2) {
      var e8lq = this;_31t2 = s$o3n4['formatURL'](_31t2), this['url'] = _31t2;if (luy68z['_audioCache'][_31t2]) {
        this['event']('complete');return;
      }function kv0c57() {
        if (luy68z['_null'] != undefined) e8lq['_sound']['onCanplay'](luy68z['_null']), e8lq['_sound']['onError'](luy68z['_null']);else try {
          e8lq['_sound']['onCanplay'](null), e8lq['_sound']['onError'](null), luy68z['_null'] = null;
        } catch (ul6z8) {
          console['warn']('[wxmini] _clearSound:' + ul6z8), e8lq['_sound']['onCanplay'](dc7mk), e8lq['_sound']['onError'](dc7mk), luy68z['_null'] = dc7mk;
        }
      }function i3() {
        kv0c57(), huz6y['loaded'] = !![], huz6y['event']('complete'), luy68z['_audioCache'][huz6y['url']] = huz6y;
      }function c0dmkj(qvxw) {
        console['error']('errCode=' + qvxw['errCode'] + '  errMsg=' + qvxw['errMsg']), kv0c57(), huz6y['event']('error');
      }function dc7mk() {}this['_sound']['onCanplay'](i3), this['_sound']['onError'](c0dmkj), this['_sound']['src'] = _31t2;var huz6y = this;
    }, wqxbge['play'] = function (s$fir, kdmj0) {
      s$fir === void 0x0 && (s$fir = 0x0), kdmj0 === void 0x0 && (kdmj0 = 0x0);var v57xgp;if (this['url'] == bqwg['_tMusic']) {
        if (!luy68z['_musicAudio']) luy68z['_musicAudio'] = luy68z['_createSound']();v57xgp = luy68z['_musicAudio'];
      } else v57xgp = luy68z['_createSound']();v57xgp['src'] = this['url'];var gqewp = new c0mja(v57xgp);return gqewp['url'] = this['url'], gqewp['loops'] = kdmj0, gqewp['startTime'] = s$fir, gqewp['play'](), bqwg['addChannel'](gqewp), gqewp;
    }, wqxbge['dispose'] = function () {
      var zhy6_ = luy68z['_audioCache'][this['url']];zhy6_ && (zhy6_['src'] = '', delete luy68z['_audioCache'][this['url']]);
    }, qvpxgw(0x0, wqxbge, 'duration', function () {
      return this['_sound']['duration'];
    }), luy68z['_createSound'] = function () {
      return luy68z['_id']++, eql8['window']['wx']['createInnerAudioContext']();
    }, luy68z['_musicAudio'] = null, luy68z['_id'] = 0x0, luy68z['_audioCache'] = {}, luy68z['_null'] = undefined, luy68z;
  }(p5wvx),
      c0mja = function (s4$iof) {
    function $isr9(dk70cm) {
      this['_audio'] = null, this['_onEnd'] = null, $isr9['__super']['call'](this), this['_audio'] = dk70cm, this['_onEnd'] = y16z_['bind'](this['__onEnd'], this), dk70cm['onEnded'](this['_onEnd']);
    }jdm0k($isr9, 'laya.wx.mini.MiniSoundChannel', s4$iof);var $9sri = $isr9['prototype'];return $9sri['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ulbeq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $9sri['__onNull'] = function () {}, $9sri['play'] = function () {
      this['isStopped'] = ![], bqwg['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $9sri['stop'] = function () {
      this['isStopped'] = !![], bqwg['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($isr9['_null'] != undefined) this['_audio']['onEnded']($isr9['_null']);else try {
        this['_audio']['onEnded'](null), $isr9['_null'] = null;
      } catch (h1yt2) {
        console['warn']('[wxmini] stop:' + h1yt2), this['_audio']['onEnded'](y16z_['bind'](this['__onNull'], this)), $isr9['_null'] = y16z_['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $9sri['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $9sri['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bqwg['addChannel'](this), this['_audio']['play']();
    }, qvpxgw(0x0, $9sri, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qvpxgw(0x0, $9sri, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qvpxgw(0x0, $9sri, 'volume', function () {
      return 0x1;
    }, function (t32on) {}), $isr9['_null'] = undefined, $isr9;
  }(eu8zl);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var g8w in Laya) {
    var qwube8 = Laya[g8w];qwube8 && qwube8['__isclass'] && (exports[g8w] = qwube8);
  }
});