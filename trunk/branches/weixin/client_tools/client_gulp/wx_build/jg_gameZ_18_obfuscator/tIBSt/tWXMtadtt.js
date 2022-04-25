var v = wx.$d;
(function (window, document, lky3h) {
  var _951f7 = lky3h['un'],
      t51zr = lky3h['uns'],
      gbena = lky3h['static'],
      dh823 = lky3h['class'],
      _1fz7 = lky3h['getset'],
      x9$j_ = lky3h['__newvec'],
      j_7x9$ = laya['utils']['Browser'],
      ulkyr = laya['events']['Event'],
      kyh3 = laya['events']['EventDispatcher'],
      bge0an = laya['resource']['HTMLImage'],
      f57$9_ = laya['utils']['Handler'],
      an0pm6 = laya['display']['Input'],
      l3k = laya['net']['Loader'],
      yrzt15 = laya['maths']['Matrix'],
      dqc284 = laya['renders']['Render'],
      ryutl = laya['utils']['RunDriver'],
      yuk3h = laya['media']['Sound'],
      hud4l = laya['media']['SoundChannel'],
      mp = laya['media']['SoundManager'],
      r_f51z = laya['display']['Stage'],
      mnp6a = laya['net']['URL'],
      vx7$9j = laya['utils']['Utils'],
      luyhk3 = function () {
    function wc8() {}return dh823(wc8, 'laya.wx.mini.MiniAdpter'), wc8['getJson'] = function (yz1tk) {
      return JSON['parse'](yz1tk);
    }, wc8['init'] = function (vxj6m$, wq28) {
      vxj6m$ === void 0x0 && (vxj6m$ = ![]), wq28 === void 0x0 && (wq28 = ![]);if (wc8['_inited']) return;wc8['window'] = window;if (wc8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wc8['_inited'] = !![], wc8['isZiYu'] = wq28, wc8['isPosMsgYu'] = vxj6m$, wc8['EnvConfig'] = {}, !wc8['isZiYu'] && (ega0b['setNativeFileDir']('/layaairGame'), ega0b['existDir'](ega0b['fileNativeDir'], f57$9_['create'](wc8, wc8['onMkdirCallBack']))), wc8['window']['focus'] = function () {}, lky3h['getUrlPath'] = function () {}, wc8['window']['logtime'] = function (htlyku) {}, wc8['window']['alertTimeLog'] = function (uy3lh) {}, wc8['window']['resetShareInfo'] = function () {}, wc8['window']['CanvasRenderingContext2D'] = function () {}, wc8['window']['CanvasRenderingContext2D']['prototype'] = wc8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wc8['window']['document']['body']['appendChild'] = function () {}, wc8['EnvConfig']['pixelRatioInt'] = 0x0, ryutl['getPixelRatio'] = wc8['pixelRatio'], wc8['_preCreateElement'] = j_7x9$['createElement'], j_7x9$['createElement'] = wc8['createElement'], ryutl['createShaderCondition'] = wc8['createShaderCondition'], vx7$9j['parseXMLFromString'] = wc8['parseXMLFromString'], an0pm6['_createInputElement'] = mv6x$['_createInputElement'], wc8['EnvConfig']['load'] = l3k['prototype']['load'], l3k['prototype']['load'] = y1z5tr['prototype']['load'], wc8['isZiYu'] && vxj6m$ && wx['onMessage'](function (cd2o8q) {
        cd2o8q['isLoad'] && (ega0b['ziyuFileData'][cd2o8q['url']] = cd2o8q['data']);
      });
    }, wc8['onMkdirCallBack'] = function (o2dq, lu43kh) {
      if (!o2dq) ega0b['filesListObj'] = JSON['parse'](lu43kh['data']);
    }, wc8['pixelRatio'] = function () {
      if (!wc8['EnvConfig']['pixelRatioInt']) try {
        var q2w8 = wx['getSystemInfoSync']();return wc8['EnvConfig']['pixelRatioInt'] = q2w8['pixelRatio'], q2w8 = q2w8, q2w8['pixelRatio'];
      } catch (d2oc) {}return wc8['EnvConfig']['pixelRatioInt'];
    }, wc8['createElement'] = function (m$jv6) {
      if (m$jv6 == 'canvas') {
        var j$vm;return wc8['idx'] == 0x1 ? wc8['isZiYu'] ? (j$vm = sharedCanvas, j$vm['style'] = {}) : j$vm = window['canvas'] : j$vm = window['wx']['createCanvas'](), wc8['idx']++, j$vm;
      } else {
        if (m$jv6 == 'textarea' || m$jv6 == 'input') return wc8['onCreateInput'](m$jv6);else {
          if (m$jv6 == 'div') {
            var khuyt = wc8['_preCreateElement'](m$jv6);return khuyt['contains'] = function (xpmj) {
              return null;
            }, khuyt['removeChild'] = function (ylktu) {}, khuyt;
          } else return wc8['_preCreateElement'](m$jv6);
        }
      }
    }, wc8['onCreateInput'] = function (_r5zf1) {
      var q8c42d = wc8['_preCreateElement'](_r5zf1);return q8c42d['focus'] = mv6x$['wxinputFocus'], q8c42d['blur'] = mv6x$['wxinputblur'], q8c42d['style'] = {}, q8c42d['value'] = 0x0, q8c42d['parentElement'] = {}, q8c42d['placeholder'] = {}, q8c42d['type'] = {}, q8c42d['setColor'] = function (hk34lu) {}, q8c42d['setType'] = function (f751_z) {}, q8c42d['setFontFace'] = function (npbam) {}, q8c42d['addEventListener'] = function (l8d34) {}, q8c42d['contains'] = function (vx$jm) {
        return null;
      }, q8c42d['removeChild'] = function (d8coq2) {}, q8c42d;
    }, wc8['createShaderCondition'] = function (_5rf1) {
      var nbgie = this,
          lh3k4 = function () {
        var lud34h = _5rf1;return nbgie[_5rf1['replace']('this.', '')];
      };return lh3k4;
    }, wc8['EnvConfig'] = null, wc8['window'] = null, wc8['_preCreateElement'] = null, wc8['_inited'] = ![], wc8['wxRequest'] = null, wc8['systemInfo'] = null, wc8['version'] = '0.0.1', wc8['isZiYu'] = ![], wc8['isPosMsgYu'] = ![], wc8['parseXMLFromString'] = function (rutkyz) {
      var h23d84, krltuy;rutkyz = rutkyz['replace'](/>\s+</g, '><');try {
        h23d84 = new window['Parser']['DOMParser']()['parseFromString'](rutkyz, 'text/xml');
      } catch (yrzkt) {
        throw '需要引入xml解析库文件';
      }return h23d84;
    }, wc8['idx'] = 0x1, wc8;
  }(),
      u4k3h = function () {
    function $5f9_() {}dh823($5f9_, 'laya.wx.mini.MiniImage');var yluth = $5f9_['prototype'];return yluth['_loadImage'] = function (u3k4h) {
      var manb = this,
          e0ang = ![];u3k4h['indexOf']('layaNativeDir/') == -0x1 && (e0ang = !![], u3k4h = mnp6a['formatURL'](u3k4h));if (!ega0b['getFileInfo'](u3k4h)) {
        if (u3k4h['indexOf']('http://') != -0x1 || u3k4h['indexOf']('https://') != -0x1) ega0b['downImg'](u3k4h, new f57$9_($5f9_, $5f9_['onDownImgCallBack'], [u3k4h, manb]), u3k4h);else $5f9_['onCreateImage'](u3k4h, manb, !![]);
      } else $5f9_['onCreateImage'](u3k4h, manb, !e0ang);
    }, $5f9_['onDownImgCallBack'] = function (nbga, j_7$, mv$6xj) {
      if (!mv$6xj) $5f9_['onCreateImage'](nbga, j_7$);else j_7$['onError'](null);
    }, $5f9_['onCreateImage'] = function (mn60p, f1_759, xj$v6m) {
      xj$v6m === void 0x0 && (xj$v6m = ![]);var hd438l;if (!xj$v6m) {
        var tz5y1r = ega0b['getFileInfo'](mn60p),
            htyl = tz5y1r['md5'];hd438l = ega0b['getFileNativePath'](htyl);
      } else hd438l = mn60p;if (f1_759['imgCache'] == null) f1_759['imgCache'] = {};var $j9x6;function pmav60() {
        $j9x6['onload'] = null, $j9x6['onerror'] = null, delete f1_759['imgCache'][mn60p];
      };var yr1zkt = function () {
        pmav60(), f1_759['onLoaded']($j9x6);
      },
          uytlk = function () {
        pmav60(), f1_759['event']('error', 'Load image failed');
      };f1_759['_type'] == 'nativeimage' ? ($j9x6 = new j_7x9$['window']['Image'](), $j9x6['crossOrigin'] = '', $j9x6['onload'] = yr1zkt, $j9x6['onerror'] = uytlk, $j9x6['src'] = hd438l, f1_759['imgCache'][mn60p] = $j9x6) : new bge0an['create'](hd438l, { 'onload': yr1zkt, 'onerror': uytlk, 'onCreate': function (zrky1) {
          $j9x6 = zrky1, f1_759['imgCache'][mn60p] = zrky1;
        } });
    }, $5f9_;
  }(),
      mv6x$ = function () {
    function egi0nb() {}return dh823(egi0nb, 'laya.wx.mini.MiniInput'), egi0nb['_createInputElement'] = function () {
      an0pm6['_initInput'](an0pm6['area'] = j_7x9$['createElement']('textarea')), an0pm6['_initInput'](an0pm6['input'] = j_7x9$['createElement']('input')), an0pm6['inputContainer'] = j_7x9$['createElement']('div'), an0pm6['inputContainer']['style']['position'] = 'absolute', an0pm6['inputContainer']['style']['zIndex'] = 0x186a0, j_7x9$['container']['appendChild'](an0pm6['inputContainer']), an0pm6['inputContainer']['setPos'] = function (h428, d34hl) {
        an0pm6['inputContainer']['style']['left'] = h428 + 'px', an0pm6['inputContainer']['style']['top'] = d34hl + 'px';
      }, lky3h['stage']['on']('resize', null, egi0nb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (l4hd8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), mp['_soundClass'] = x7$j_9, mp['_musicClass'] = x7$j_9;
    }, egi0nb['_onStageResize'] = function () {
      var yktulr = lky3h['stage']['_canvasTransform']['identity']();yktulr['scale'](j_7x9$['width'] / dqc284['canvas']['width'] / ryutl['getPixelRatio'](), j_7x9$['height'] / dqc284['canvas']['height'] / ryutl['getPixelRatio']());
    }, egi0nb['wxinputFocus'] = function (mj$6) {
      var lyutrk = an0pm6['inputElement']['target'];if (lyutrk && !lyutrk['editable']) return;luyhk3['window']['wx']['offKeyboardConfirm'](), luyhk3['window']['wx']['offKeyboardInput'](), luyhk3['window']['wx']['showKeyboard']({ 'defaultValue': lyutrk['text'], 'maxLength': lyutrk['maxChars'], 'multiple': lyutrk['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (l4h8d) {}, 'fail': function (z_r5) {} }), luyhk3['window']['wx']['onKeyboardConfirm'](function (wo2) {
        var hu4 = wo2 ? wo2['value'] : '';lyutrk['text'] = hu4, lyutrk['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), luyhk3['window']['wx']['onKeyboardInput'](function (tkuy) {
        var a06mp = tkuy ? tkuy['value'] : '';if (!lyutrk['multiline']) {
          if (a06mp['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }lyutrk['text'] = a06mp, lyutrk['event']('input');
      });
    }, egi0nb['inputEnter'] = function () {
      an0pm6['inputElement']['target']['focus'] = ![];
    }, egi0nb['wxinputblur'] = function () {
      egi0nb['hideKeyboard']();
    }, egi0nb['hideKeyboard'] = function () {
      luyhk3['window']['wx']['offKeyboardConfirm'](), luyhk3['window']['wx']['offKeyboardInput'](), luyhk3['window']['wx']['hideKeyboard']({ 'success': function (pm6) {
          console['log']('隐藏键盘');
        }, 'fail': function (l4hud) {
          console['log']('隐藏键盘出错:' + (l4hud ? l4hud['errMsg'] : ''));
        } });
    }, egi0nb;
  }(),
      y1z5tr = function () {
    function n0p6ma() {}dh823(n0p6ma, 'laya.wx.mini.MiniLoader');var $vmjx6 = n0p6ma['prototype'];return $vmjx6['load'] = function (vj7x9$, uzyr, r51tf, huy, _$xj7) {
      r51tf === void 0x0 && (r51tf = !![]), _$xj7 === void 0x0 && (_$xj7 = ![]);var ud34hl = this;ud34hl['_url'] = vj7x9$;if (vj7x9$['indexOf']('data:image') === 0x0) ud34hl['_type'] = uzyr = 'image';else ud34hl['_type'] = uzyr || (uzyr = ud34hl['getTypeFromUrl'](vj7x9$));ud34hl['_cache'] = r51tf, ud34hl['_data'] = null;var yhku = 'ascii';if (vj7x9$['indexOf']('.fnt') != -0x1) yhku = 'utf8';else uzyr == 'arraybuffer' && (yhku = '');;var bneg = vx7$9j['getFileExtension'](vj7x9$);if (n0p6ma['_fileTypeArr']['indexOf'](bneg) != -0x1) luyhk3['EnvConfig']['load']['call'](this, vj7x9$, uzyr, r51tf, huy, _$xj7);else {
        if (!ega0b['getFileInfo'](vj7x9$)) {
          if (vj7x9$['indexOf']('layaNativeDir/') != -0x1) {
            if (luyhk3['isZiYu']) {
              var bmap0n = ega0b['ziyuFileData'][vj7x9$];ud34hl['onLoaded'](bmap0n);return;
            } else {
              cosnole['log']('read read'), ega0b['read'](vj7x9$, yhku, new f57$9_(n0p6ma, n0p6ma['onReadNativeCallBack'], [yhku, vj7x9$, uzyr, r51tf, huy, _$xj7, ud34hl]));return;
            }
          }if (mnp6a['rootPath'] == '') var e0bn = vj7x9$;else e0bn = vj7x9$['split'](mnp6a['rootPath'])[0x0];vj7x9$['indexOf']('http://') != -0x1 || vj7x9$['indexOf']('https://') != -0x1 ? luyhk3['EnvConfig']['load']['call'](ud34hl, vj7x9$, uzyr, r51tf, huy, _$xj7) : ega0b['readFile'](e0bn, yhku, new f57$9_(n0p6ma, n0p6ma['onReadNativeCallBack'], [yhku, vj7x9$, uzyr, r51tf, huy, _$xj7, ud34hl]), vj7x9$);
        } else luyhk3['EnvConfig']['load']['call'](this, vj7x9$, uzyr, r51tf, huy, _$xj7);
      }
    }, $vmjx6['resMgrLoad'] = function (uhkyl, trkuyz, jvp6m, dc3824, bnma0p, tkyurl, mxpv) {
      jvp6m === void 0x0 && (jvp6m = 0x0), dc3824 === void 0x0 && (dc3824 = ![]), bnma0p === void 0x0 && (bnma0p = ![]), tkyurl === void 0x0 && (tkyurl = 0x0), mxpv === void 0x0 && (mxpv = 0x3), uhkyl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', uhkyl), luyhk3['EnvConfig']['resMgrLoad'](uhkyl, (nba0, woq8c2, f9715_) => {
        n0p6ma['prototype']['resMgrLoadCallBack'](nba0, woq8c2, f9715_, trkuyz);
      }, jvp6m, dc3824, bnma0p, tkyurl, mxpv);
    }, $vmjx6['resMgrLoadCallBack'] = function (d4u3h, mpav60, c4q2d8, agpnb0) {
      console['log']('buff:::', d4u3h, c4q2d8, ega0b['fileNativeDir'] + '///' + ega0b['fileListName']), agpnb0(d4u3h, mpav60, c4q2d8);
    }, $vmjx6['clearRes'] = function (_79$, $f9x7_) {
      $f9x7_ === void 0x0 && ($f9x7_ = ![]);var ytkz1r = this;ytkz1r['clearRes'](_79$, $f9x7_);var dcoq2 = ega0b['getFileInfo'](_79$);if (dcoq2 && (_79$['indexOf']('http://') != -0x1 || _79$['indexOf']('https://') != -0x1)) {
        var kl3yu = dcoq2['md5'],
            pm6xv = ega0b['getFileNativePath'](kl3yu);ega0b['remove'](pm6xv);
      }
    }, n0p6ma['onReadNativeCallBack'] = function (klyru, _7$x9f, _19f, amvjp6, geb0an, d24q, v6m0a, vjx6mp, ukthyl) {
      amvjp6 === void 0x0 && (amvjp6 = !![]), d24q === void 0x0 && (d24q = ![]), vjx6mp === void 0x0 && (vjx6mp = 0x0);if (!vjx6mp) {
        var neb0gi;if (_19f == 'json' || _19f == 'atlas') neb0gi = luyhk3['getJson'](ukthyl['data']);else _19f == 'xml' ? neb0gi = vx7$9j['parseXMLFromString'](ukthyl['data']) : neb0gi = ukthyl['data'];v6m0a['onLoaded'](neb0gi), !luyhk3['isZiYu'] && luyhk3['isPosMsgYu'] && _19f != 'arraybuffer' && wx['postMessage']({ 'url': _7$x9f, 'data': neb0gi, 'isLoad': !![] });
      } else vjx6mp == 0x1 && luyhk3['EnvConfig']['load']['call'](v6m0a, _7$x9f, _19f, amvjp6, geb0an, d24q);
    }, gbena(n0p6ma, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), n0p6ma;
  }(),
      ega0b = function (lrty) {
    function n0ei() {
      n0ei['__super']['call'](this);;
    }return dh823(n0ei, 'laya.wx.mini.MiniFileMgr', lrty), n0ei['isLoadFile'] = function (e0nib) {
      return n0ei['_fileTypeArr']['indexOf'](e0nib) != -0x1 ? !![] : ![];
    }, n0ei['getFileInfo'] = function (tryzuk) {
      var tf1r = tryzuk['split']('?')[0x0],
          lrktuy = n0ei['filesListObj'][tf1r];if (lrktuy == null) return null;else return lrktuy;return null;
    }, n0ei['onFileUpdate'] = function (_1f95, z1rytk) {
      var c4dq82 = _1f95['split']('/'),
          bgap0 = c4dq82[c4dq82['length'] - 0x1],
          _5zf = n0ei['getFileInfo'](z1rytk);if (_5zf == null) n0ei['onSaveFile'](z1rytk, bgap0);else {
        if (_5zf['readyUrl'] != z1rytk) n0ei['remove'](bgap0, z1rytk);
      }
    }, n0ei['exits'] = function (xmv6$, a0gebn) {
      var _791 = n0ei['getFileNativePath'](xmv6$);n0ei['fs']['getFileInfo']({ 'filePath': _791, 'success': function (lu3ykh) {
          a0gebn != null && a0gebn['runWith']([0x0, lu3ykh]);
        }, 'fail': function (mnap0b) {
          a0gebn != null && a0gebn['runWith']([0x1, mnap0b]);
        } });
    }, n0ei['read'] = function (x7_9, mxv6$, f15_z, _$97jx) {
      mxv6$ === void 0x0 && (mxv6$ = 'ascill'), _$97jx === void 0x0 && (_$97jx = '');var p6;_$97jx != '' ? p6 = n0ei['getFileNativePath'](x7_9) : p6 = x7_9, n0ei['fs']['readFile']({ 'filePath': p6, 'encoding': mxv6$, 'success': function (gn0ea) {
          f15_z != null && f15_z['runWith']([0x0, gn0ea]);
        }, 'fail': function (cd38) {
          if (cd38 && _$97jx != '') n0ei['down'](_$97jx, mxv6$, f15_z, _$97jx);else f15_z != null && f15_z['runWith']([0x1]);
        } });
    }, n0ei['readNativeFile'] = function (qd8c4, _$7x) {
      n0ei['fs']['readFile']({ 'filePath': qd8c4, 'encoding': '', 'success': function (xf9_) {
          _$7x != null && _$7x['runWith']([0x0]);
        }, 'fail': function (eagbn) {
          _$7x != null && _$7x['runWith']([0x1]);
        } });
    }, n0ei['down'] = function (d8, zkyrut, eng0ab, vpmaj6) {
      zkyrut === void 0x0 && (zkyrut = 'ascill'), vpmaj6 === void 0x0 && (vpmaj6 = '');var c42q8d = n0ei['getFileNativePath'](vpmaj6),
          c3d824 = n0ei['wxdown']({ 'url': d8, 'filePath': c42q8d, 'success': function (pa0nbg) {
          if (pa0nbg['statusCode'] === 0xc8) n0ei['readFile'](pa0nbg['filePath'], zkyrut, eng0ab, vpmaj6);
        }, 'fail': function (ulrtky) {
          eng0ab != null && eng0ab['runWith']([0x1, ulrtky]);
        } });c3d824['onProgressUpdate'](function (rytz) {
        eng0ab != null && eng0ab['runWith']([0x2, rytz['progress']]);
      });
    }, n0ei['readFile'] = function (n0ga, tkrzuy, a6n0pm, ft1r) {
      tkrzuy === void 0x0 && (tkrzuy = 'ascill'), ft1r === void 0x0 && (ft1r = ''), n0ei['fs']['readFile']({ 'filePath': n0ga, 'encoding': tkrzuy, 'success': function (hdl34u) {
          if (n0ga['indexOf']('http://') != -0x1 || n0ga['indexOf']('https://') != -0x1) n0ei['onFileUpdate'](n0ga, ft1r);a6n0pm != null && a6n0pm['runWith']([0x0, hdl34u]);
        }, 'fail': function (_7$x) {
          if (_7$x) a6n0pm != null && a6n0pm['runWith']([0x1, _7$x]);
        } });
    }, n0ei['downImg'] = function (yur, bgnp, qw2o8) {
      qw2o8 === void 0x0 && (qw2o8 = '');var qc8d24 = n0ei['wxdown']({ 'url': yur, 'success': function (p6ma0) {
          p6ma0['statusCode'] === 0xc8 && n0ei['copyFile'](p6ma0['tempFilePath'], qw2o8, bgnp);
        }, 'fail': function (_fz57) {
          bgnp != null && bgnp['runWith']([0x1, _fz57]);
        } });
    }, n0ei['copyFile'] = function (_z1f7, $j69, am6pn) {
      var x6pjm = _z1f7['split']('/'),
          _f975 = x6pjm[x6pjm['length'] - 0x1],
          ltkuyh = $j69['split']('?')[0x0],
          uh = n0ei['getFileInfo']($j69),
          nam0p6 = n0ei['getFileNativePath'](_f975);n0ei['fs']['copyFile']({ 'srcPath': _z1f7, 'destPath': nam0p6, 'success': function (ruykzt) {
          if (!uh) n0ei['onSaveFile']($j69, _f975), am6pn != null && am6pn['runWith']([0x0]);else {
            if (uh['readyUrl'] != $j69) n0ei['remove'](_f975, $j69, am6pn);
          }
        }, 'fail': function (d3h) {
          am6pn != null && am6pn['runWith']([0x1, d3h]);
        } });
    }, n0ei['getFileNativePath'] = function (yrtz1) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yrtz1;
    }, n0ei['remove'] = function (cd248q, ba0g, q2od8c) {
      ba0g === void 0x0 && (ba0g = '');var qocw = n0ei['getFileInfo'](ba0g),
          m$xv6j = n0ei['getFileNativePath'](qocw['md5']);lky3h['loader']['clearRes'](qocw['readyUrl']), n0ei['fs']['unlink']({ 'filePath': m$xv6j, 'success': function (kl4h3) {
          if (ba0g != '') n0ei['onSaveFile'](ba0g, cd248q);q2od8c != null && q2od8c['runWith']([0x0]);
        }, 'fail': function (xjmv$) {} });
    }, n0ei['onSaveFile'] = function (dl, a6pv0m) {
      var kuyl3h = dl['split']('?')[0x0];n0ei['filesListObj'][kuyl3h] = { 'md5': a6pv0m, 'readyUrl': dl }, n0ei['fs']['writeFile']({ 'filePath': n0ei['fileNativeDir'] + '/' + n0ei['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n0ei['filesListObj']), 'success': function (rt1ykz) {
          console['log']('写入测试测试成功：', rt1ykz);
        }, 'fail': function (ltyruk) {
          console['log']('写入测试测试失败：', ltyruk);
        } });
    }, n0ei['existDir'] = function (f579$, $v9) {
      n0ei['fs']['mkdir']({ 'dirPath': f579$, 'success': function (z5t1fr) {
          $v9 != null && $v9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hu43l) {
          if (hu43l['errMsg']['indexOf']('file already exists') != -0x1) n0ei['readSync'](n0ei['fileListName'], 'utf8', $v9);else $v9 != null && $v9['runWith']([0x1, hu43l]);
        } });
    }, n0ei['readSync'] = function (ulyrt, _f5z7, bena0g, _1f5z) {
      _f5z7 === void 0x0 && (_f5z7 = 'ascill'), _1f5z === void 0x0 && (_1f5z = '');var angeb0 = n0ei['getFileNativePath'](ulyrt),
          ie0b;try {
        ie0b = n0ei['fs']['readFileSync'](angeb0), bena0g != null && bena0g['runWith']([0x0, { 'data': ie0b }]);
      } catch (va6m) {
        bena0g != null && bena0g['runWith']([0x1]);
      }
    }, n0ei['readCache'] = function () {}, n0ei['writeCache'] = function (k1rtyz) {
      var tzyrk = readyUrl['split']('?')[0x0];n0ei['filesListObj'][tzyrk] = { 'md5': md5Name, 'readyUrl': readyUrl }, n0ei['fs']['writeFile']({ 'filePath': n0ei['fileNativeDir'] + '/' + n0ei['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n0ei['filesListObj']), 'success': function (f_7$9x) {}, 'fail': function (z_15) {} });
    }, n0ei['setNativeFileDir'] = function (l38h) {
      n0ei['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + l38h;
    }, n0ei['filesListObj'] = {}, n0ei['fileNativeDir'] = null, n0ei['fileListName'] = 'layaairfiles.txt', n0ei['ziyuFileData'] = {}, gbena(n0ei, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n0ei;
  }(kyh3),
      x7$j_9 = function (vp0am) {
    function ocw2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ocw2['__super']['call'](this), this['_sound'] = ocw2['_createSound']();
    }dh823(ocw2, 'laya.wx.mini.MiniSound', vp0am);var mnabp0 = ocw2['prototype'];return mnabp0['load'] = function (z_17f5) {
      var lk34uh = this;z_17f5 = mnp6a['formatURL'](z_17f5), this['url'] = z_17f5;if (ocw2['_audioCache'][z_17f5]) {
        this['event']('complete');return;
      }function ykztur() {
        if (ocw2['_null'] != undefined) lk34uh['_sound']['onCanplay'](ocw2['_null']), lk34uh['_sound']['onError'](ocw2['_null']);else try {
          lk34uh['_sound']['onCanplay'](null), lk34uh['_sound']['onError'](null), ocw2['_null'] = null;
        } catch (vma6jp) {
          console['warn']('[wxmini] _clearSound:' + vma6jp), lk34uh['_sound']['onCanplay'](xj$m6v), lk34uh['_sound']['onError'](xj$m6v), ocw2['_null'] = xj$m6v;
        }
      }function d2q4() {
        ykztur(), du34hl['loaded'] = !![], du34hl['event']('complete'), ocw2['_audioCache'][du34hl['url']] = du34hl;
      }function r5tfz(dl4uh3) {
        console['error']('errCode=' + dl4uh3['errCode'] + '  errMsg=' + dl4uh3['errMsg']), ykztur(), du34hl['event']('error');
      }function xj$m6v() {}this['_sound']['onCanplay'](d2q4), this['_sound']['onError'](r5tfz), this['_sound']['src'] = z_17f5;var du34hl = this;
    }, mnabp0['play'] = function (f57$_9, jxmvp6) {
      f57$_9 === void 0x0 && (f57$_9 = 0x0), jxmvp6 === void 0x0 && (jxmvp6 = 0x0);var tkyuz;if (this['url'] == mp['_tMusic']) {
        if (!ocw2['_musicAudio']) ocw2['_musicAudio'] = ocw2['_createSound']();tkyuz = ocw2['_musicAudio'];
      } else tkyuz = ocw2['_createSound']();tkyuz['src'] = this['url'];var ltkhy = new zyt15r(tkyuz);return ltkhy['url'] = this['url'], ltkhy['loops'] = jxmvp6, ltkhy['startTime'] = f57$_9, ltkhy['play'](), mp['addChannel'](ltkhy), ltkhy;
    }, mnabp0['dispose'] = function () {
      var hlykut = ocw2['_audioCache'][this['url']];hlykut && (hlykut['src'] = '', delete ocw2['_audioCache'][this['url']]);
    }, _1fz7(0x0, mnabp0, 'duration', function () {
      return this['_sound']['duration'];
    }), ocw2['_createSound'] = function () {
      return ocw2['_id']++, luyhk3['window']['wx']['createInnerAudioContext']();
    }, ocw2['_musicAudio'] = null, ocw2['_id'] = 0x0, ocw2['_audioCache'] = {}, ocw2['_null'] = undefined, ocw2;
  }(kyh3),
      zyt15r = function (f51r_) {
    function _9x7f(ig0en) {
      this['_audio'] = null, this['_onEnd'] = null, _9x7f['__super']['call'](this), this['_audio'] = ig0en, this['_onEnd'] = vx7$9j['bind'](this['__onEnd'], this), ig0en['onEnded'](this['_onEnd']);
    }dh823(_9x7f, 'laya.wx.mini.MiniSoundChannel', f51r_);var k1z = _9x7f['prototype'];return k1z['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (lky3h['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, k1z['__onNull'] = function () {}, k1z['play'] = function () {
      this['isStopped'] = ![], mp['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, k1z['stop'] = function () {
      this['isStopped'] = !![], mp['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (_9x7f['_null'] != undefined) this['_audio']['onEnded'](_9x7f['_null']);else try {
        this['_audio']['onEnded'](null), _9x7f['_null'] = null;
      } catch (i0nbg) {
        console['warn']('[wxmini] stop:' + i0nbg), this['_audio']['onEnded'](vx7$9j['bind'](this['__onNull'], this)), _9x7f['_null'] = vx7$9j['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, k1z['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, k1z['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], mp['addChannel'](this), this['_audio']['play']();
    }, _1fz7(0x0, k1z, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _1fz7(0x0, k1z, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _1fz7(0x0, k1z, 'volume', function () {
      return 0x1;
    }, function (mn0pab) {}), _9x7f['_null'] = undefined, _9x7f;
  }(hud4l);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var d43l8 in Laya) {
    var _57f91 = Laya[d43l8];_57f91 && _57f91['__isclass'] && (exports[d43l8] = _57f91);
  }
});