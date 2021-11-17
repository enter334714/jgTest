var b = wx.$e;
(function (window, document, v_z4y) {
  var qji$3n = v_z4y['un'],
      d605bk = v_z4y['uns'],
      zrv4y = v_z4y['static'],
      iuqn3 = v_z4y['class'],
      vzhryf = v_z4y['getset'],
      zv4y_f = v_z4y['__newvec'],
      vzry4f = laya['utils']['Browser'],
      q3xi$ = laya['events']['Event'],
      v_74am = laya['events']['EventDispatcher'],
      j$xgi3 = laya['resource']['HTMLImage'],
      lgxi$t = laya['utils']['Handler'],
      y4zvf_ = laya['display']['Input'],
      camop7 = laya['net']['Loader'],
      b9s0k = laya['maths']['Matrix'],
      bu = laya['renders']['Render'],
      vm_4a = laya['utils']['RunDriver'],
      b5d6k = laya['media']['Sound'],
      k9un6 = laya['media']['SoundChannel'],
      a_4v = laya['media']['SoundManager'],
      bd56 = laya['display']['Stage'],
      g$tjxi = laya['net']['URL'],
      iq3$jx = laya['utils']['Utils'],
      k9nqsu = function () {
    function yfv47_() {}return iuqn3(yfv47_, 'laya.wx.mini.MiniAdpter'), yfv47_['getJson'] = function (nsq9k) {
      return JSON['parse'](nsq9k);
    }, yfv47_['init'] = function (yrhfzl, mpcao7) {
      yrhfzl === void 0x0 && (yrhfzl = ![]), mpcao7 === void 0x0 && (mpcao7 = ![]);if (yfv47_['_inited']) return;yfv47_['window'] = window;if (yfv47_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yfv47_['_inited'] = !![], yfv47_['isZiYu'] = mpcao7, yfv47_['isPosMsgYu'] = yrhfzl, yfv47_['EnvConfig'] = {}, !yfv47_['isZiYu'] && (f_4av7['setNativeFileDir']('/layaairGame'), f_4av7['existDir'](f_4av7['fileNativeDir'], lgxi$t['create'](yfv47_, yfv47_['onMkdirCallBack']))), yfv47_['window']['focus'] = function () {}, v_z4y['getUrlPath'] = function () {}, yfv47_['window']['logtime'] = function (s93n) {}, yfv47_['window']['alertTimeLog'] = function (b5w08d) {}, yfv47_['window']['resetShareInfo'] = function () {}, yfv47_['window']['CanvasRenderingContext2D'] = function () {}, yfv47_['window']['CanvasRenderingContext2D']['prototype'] = yfv47_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yfv47_['window']['document']['body']['appendChild'] = function () {}, yfv47_['EnvConfig']['pixelRatioInt'] = 0x0, vm_4a['getPixelRatio'] = yfv47_['pixelRatio'], yfv47_['_preCreateElement'] = vzry4f['createElement'], vzry4f['createElement'] = yfv47_['createElement'], vm_4a['createShaderCondition'] = yfv47_['createShaderCondition'], iq3$jx['parseXMLFromString'] = yfv47_['parseXMLFromString'], y4zvf_['_createInputElement'] = d9k0b['_createInputElement'], yfv47_['EnvConfig']['load'] = camop7['prototype']['load'], camop7['prototype']['load'] = lg$xti['prototype']['load'], yfv47_['isZiYu'] && yrhfzl && wx['onMessage'](function (xgi3) {
        xgi3['isLoad'] && (f_4av7['ziyuFileData'][xgi3['url']] = xgi3['data']);
      });
    }, yfv47_['onMkdirCallBack'] = function (w0d52, dw58) {
      if (!w0d52) f_4av7['filesListObj'] = JSON['parse'](dw58['data']);
    }, yfv47_['pixelRatio'] = function () {
      if (!yfv47_['EnvConfig']['pixelRatioInt']) try {
        var qxij3 = wx['getSystemInfoSync']();return yfv47_['EnvConfig']['pixelRatioInt'] = qxij3['pixelRatio'], qxij3 = qxij3, qxij3['pixelRatio'];
      } catch (y_4zv) {}return yfv47_['EnvConfig']['pixelRatioInt'];
    }, yfv47_['createElement'] = function (tlgxi$) {
      if (tlgxi$ == 'canvas') {
        var su6k;return yfv47_['idx'] == 0x1 ? yfv47_['isZiYu'] ? (su6k = sharedCanvas, su6k['style'] = {}) : su6k = window['canvas'] : su6k = window['wx']['createCanvas'](), yfv47_['idx']++, su6k;
      } else {
        if (tlgxi$ == 'textarea' || tlgxi$ == 'input') return yfv47_['onCreateInput'](tlgxi$);else {
          if (tlgxi$ == 'div') {
            var lrzhtg = yfv47_['_preCreateElement'](tlgxi$);return lrzhtg['contains'] = function (hyvfr) {
              return null;
            }, lrzhtg['removeChild'] = function (n39q) {}, lrzhtg;
          } else return yfv47_['_preCreateElement'](tlgxi$);
        }
      }
    }, yfv47_['onCreateInput'] = function (jn3ui) {
      var htzlr = yfv47_['_preCreateElement'](jn3ui);return htzlr['focus'] = d9k0b['wxinputFocus'], htzlr['blur'] = d9k0b['wxinputblur'], htzlr['style'] = {}, htzlr['value'] = 0x0, htzlr['parentElement'] = {}, htzlr['placeholder'] = {}, htzlr['type'] = {}, htzlr['setColor'] = function (usn9q) {}, htzlr['setType'] = function (jtg$ix) {}, htzlr['setFontFace'] = function (s3nujq) {}, htzlr['addEventListener'] = function (njuqs) {}, htzlr['contains'] = function (q$nj3) {
        return null;
      }, htzlr['removeChild'] = function (ac7p) {}, htzlr;
    }, yfv47_['createShaderCondition'] = function (bs0k96) {
      var f4rz = this,
          _47vfa = function () {
        var xgilt = bs0k96;return f4rz[bs0k96['replace']('this.', '')];
      };return _47vfa;
    }, yfv47_['EnvConfig'] = null, yfv47_['window'] = null, yfv47_['_preCreateElement'] = null, yfv47_['_inited'] = ![], yfv47_['wxRequest'] = null, yfv47_['systemInfo'] = null, yfv47_['version'] = '0.0.1', yfv47_['isZiYu'] = ![], yfv47_['isPosMsgYu'] = ![], yfv47_['parseXMLFromString'] = function (bks9u) {
      var d8250w, gxltrh;bks9u = bks9u['replace'](/>\s+</g, '><');try {
        d8250w = new window['Parser']['DOMParser']()['parseFromString'](bks9u, 'text/xml');
      } catch (jquns3) {
        throw '需要引入xml解析库文件';
      }return d8250w;
    }, yfv47_['idx'] = 0x1, yfv47_;
  }(),
      fvr4yz = function () {
    function vrzhf() {}iuqn3(vrzhf, 'laya.wx.mini.MiniImage');var s9n3 = vrzhf['prototype'];return s9n3['_loadImage'] = function (mpaeco) {
      var lhtg = this,
          d685b = ![];mpaeco['indexOf']('layaNativeDir/') == -0x1 && (d685b = !![], mpaeco = g$tjxi['formatURL'](mpaeco));if (!f_4av7['getFileInfo'](mpaeco)) {
        if (mpaeco['indexOf']('http://') != -0x1 || mpaeco['indexOf']('https://') != -0x1) f_4av7['downImg'](mpaeco, new lgxi$t(vrzhf, vrzhf['onDownImgCallBack'], [mpaeco, lhtg]), mpaeco);else vrzhf['onCreateImage'](mpaeco, lhtg, !![]);
      } else vrzhf['onCreateImage'](mpaeco, lhtg, !d685b);
    }, vrzhf['onDownImgCallBack'] = function (gtjx$i, tji$, qnj$3) {
      if (!qnj$3) vrzhf['onCreateImage'](gtjx$i, tji$);else tji$['onError'](null);
    }, vrzhf['onCreateImage'] = function (a_o, y4_fz, s09kb) {
      s09kb === void 0x0 && (s09kb = ![]);var qi3$xj;if (!s09kb) {
        var co_m = f_4av7['getFileInfo'](a_o),
            thzrg = co_m['md5'];qi3$xj = f_4av7['getFileNativePath'](thzrg);
      } else qi3$xj = a_o;if (y4_fz['imgCache'] == null) y4_fz['imgCache'] = {};var jqi;function d056bk() {
        jqi['onload'] = null, jqi['onerror'] = null, delete y4_fz['imgCache'][a_o];
      };var $xqi3j = function () {
        d056bk(), y4_fz['onLoaded'](jqi);
      },
          b6d58 = function () {
        d056bk(), y4_fz['event']('error', 'Load image failed');
      };y4_fz['_type'] == 'nativeimage' ? (jqi = new vzry4f['window']['Image'](), jqi['crossOrigin'] = '', jqi['onload'] = $xqi3j, jqi['onerror'] = b6d58, jqi['src'] = qi3$xj, y4_fz['imgCache'][a_o] = jqi) : new j$xgi3['create'](qi3$xj, { 'onload': $xqi3j, 'onerror': b6d58, 'onCreate': function (jg$ixt) {
          jqi = jg$ixt, y4_fz['imgCache'][a_o] = jg$ixt;
        } });
    }, vrzhf;
  }(),
      d9k0b = function () {
    function a7om() {}return iuqn3(a7om, 'laya.wx.mini.MiniInput'), a7om['_createInputElement'] = function () {
      y4zvf_['_initInput'](y4zvf_['area'] = vzry4f['createElement']('textarea')), y4zvf_['_initInput'](y4zvf_['input'] = vzry4f['createElement']('input')), y4zvf_['inputContainer'] = vzry4f['createElement']('div'), y4zvf_['inputContainer']['style']['position'] = 'absolute', y4zvf_['inputContainer']['style']['zIndex'] = 0x186a0, vzry4f['container']['appendChild'](y4zvf_['inputContainer']), y4zvf_['inputContainer']['setPos'] = function (d208, aeompc) {
        y4zvf_['inputContainer']['style']['left'] = d208 + 'px', y4zvf_['inputContainer']['style']['top'] = aeompc + 'px';
      }, v_z4y['stage']['on']('resize', null, a7om['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fvzyr) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), a_4v['_soundClass'] = y_47vf, a_4v['_musicClass'] = y_47vf;
    }, a7om['_onStageResize'] = function () {
      var hrzy = v_z4y['stage']['_canvasTransform']['identity']();hrzy['scale'](vzry4f['width'] / bu['canvas']['width'] / vm_4a['getPixelRatio'](), vzry4f['height'] / bu['canvas']['height'] / vm_4a['getPixelRatio']());
    }, a7om['wxinputFocus'] = function (yrtlz) {
      var _47avf = y4zvf_['inputElement']['target'];if (_47avf && !_47avf['editable']) return;k9nqsu['window']['wx']['offKeyboardConfirm'](), k9nqsu['window']['wx']['offKeyboardInput'](), k9nqsu['window']['wx']['showKeyboard']({ 'defaultValue': _47avf['text'], 'maxLength': _47avf['maxChars'], 'multiple': _47avf['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qnji3$) {}, 'fail': function (vhrzy) {} }), k9nqsu['window']['wx']['onKeyboardConfirm'](function ($tjix) {
        var d08wb = $tjix ? $tjix['value'] : '';_47avf['text'] = d08wb, _47avf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), k9nqsu['window']['wx']['onKeyboardInput'](function (rlzfh) {
        var ac7_o = rlzfh ? rlzfh['value'] : '';if (!_47avf['multiline']) {
          if (ac7_o['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_47avf['text'] = ac7_o, _47avf['event']('input');
      });
    }, a7om['inputEnter'] = function () {
      y4zvf_['inputElement']['target']['focus'] = ![];
    }, a7om['wxinputblur'] = function () {
      a7om['hideKeyboard']();
    }, a7om['hideKeyboard'] = function () {
      k9nqsu['window']['wx']['offKeyboardConfirm'](), k9nqsu['window']['wx']['offKeyboardInput'](), k9nqsu['window']['wx']['hideKeyboard']({ 'success': function (xijg$t) {
          console['log']('隐藏键盘');
        }, 'fail': function (jq3ni$) {
          console['log']('隐藏键盘出错:' + (jq3ni$ ? jq3ni$['errMsg'] : ''));
        } });
    }, a7om;
  }(),
      lg$xti = function () {
    function y47v_f() {}iuqn3(y47v_f, 'laya.wx.mini.MiniLoader');var rlhzf = y47v_f['prototype'];return rlhzf['load'] = function (i$lgxt, ixgtj$, zhlryt, x$h, $txj) {
      zhlryt === void 0x0 && (zhlryt = !![]), $txj === void 0x0 && ($txj = ![]);var y_zv = this;y_zv['_url'] = i$lgxt;if (i$lgxt['indexOf']('data:image') === 0x0) y_zv['_type'] = ixgtj$ = 'image';else y_zv['_type'] = ixgtj$ || (ixgtj$ = y_zv['getTypeFromUrl'](i$lgxt));y_zv['_cache'] = zhlryt, y_zv['_data'] = null;var tlgrxh = 'ascii';if (i$lgxt['indexOf']('.fnt') != -0x1) tlgrxh = 'utf8';else ixgtj$ == 'arraybuffer' && (tlgrxh = '');;var f4zyr = iq3$jx['getFileExtension'](i$lgxt);if (y47v_f['_fileTypeArr']['indexOf'](f4zyr) != -0x1) k9nqsu['EnvConfig']['load']['call'](this, i$lgxt, ixgtj$, zhlryt, x$h, $txj);else {
        if (!f_4av7['getFileInfo'](i$lgxt)) {
          if (i$lgxt['indexOf']('layaNativeDir/') != -0x1) {
            if (k9nqsu['isZiYu']) {
              var j$gxti = f_4av7['ziyuFileData'][i$lgxt];y_zv['onLoaded'](j$gxti);return;
            } else {
              cosnole['log']('read read'), f_4av7['read'](i$lgxt, tlgrxh, new lgxi$t(y47v_f, y47v_f['onReadNativeCallBack'], [tlgrxh, i$lgxt, ixgtj$, zhlryt, x$h, $txj, y_zv]));return;
            }
          }if (g$tjxi['rootPath'] == '') var m4v7_a = i$lgxt;else m4v7_a = i$lgxt['split'](g$tjxi['rootPath'])[0x0];i$lgxt['indexOf']('http://') != -0x1 || i$lgxt['indexOf']('https://') != -0x1 ? k9nqsu['EnvConfig']['load']['call'](y_zv, i$lgxt, ixgtj$, zhlryt, x$h, $txj) : f_4av7['readFile'](m4v7_a, tlgrxh, new lgxi$t(y47v_f, y47v_f['onReadNativeCallBack'], [tlgrxh, i$lgxt, ixgtj$, zhlryt, x$h, $txj, y_zv]), i$lgxt);
        } else k9nqsu['EnvConfig']['load']['call'](this, i$lgxt, ixgtj$, zhlryt, x$h, $txj);
      }
    }, rlhzf['resMgrLoad'] = function (_cma7o, _7cam4, yrv, ztghl, j$tix, iqunj3, sk0) {
      yrv === void 0x0 && (yrv = 0x0), ztghl === void 0x0 && (ztghl = ![]), j$tix === void 0x0 && (j$tix = ![]), iqunj3 === void 0x0 && (iqunj3 = 0x0), sk0 === void 0x0 && (sk0 = 0x3), _cma7o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _cma7o), k9nqsu['EnvConfig']['resMgrLoad'](_cma7o, (ij3$qn, bw580, xq$3ij) => {
        y47v_f['prototype']['resMgrLoadCallBack'](ij3$qn, bw580, xq$3ij, _7cam4);
      }, yrv, ztghl, j$tix, iqunj3, sk0);
    }, rlhzf['resMgrLoadCallBack'] = function (pa, u3ni, zvyhrf, opaemc) {
      console['log']('buff:::', pa, zvyhrf, f_4av7['fileNativeDir'] + '///' + f_4av7['fileListName']), opaemc(pa, u3ni, zvyhrf);
    }, rlhzf['clearRes'] = function (hxt$g, g$xlt) {
      g$xlt === void 0x0 && (g$xlt = ![]);var ltrzgh = this;ltrzgh['clearRes'](hxt$g, g$xlt);var v7a = f_4av7['getFileInfo'](hxt$g);if (v7a && (hxt$g['indexOf']('http://') != -0x1 || hxt$g['indexOf']('https://') != -0x1)) {
        var k6uns = v7a['md5'],
            zghlt = f_4av7['getFileNativePath'](k6uns);f_4av7['remove'](zghlt);
      }
    }, y47v_f['onReadNativeCallBack'] = function (usk6, ghlrzt, qij3$x, ma4v, lhrzyt, i3$xjq, m4_v7, _co7, q$3jxi) {
      ma4v === void 0x0 && (ma4v = !![]), i3$xjq === void 0x0 && (i3$xjq = ![]), _co7 === void 0x0 && (_co7 = 0x0);if (!_co7) {
        var $itl;if (qij3$x == 'json' || qij3$x == 'atlas') $itl = k9nqsu['getJson'](q$3jxi['data']);else qij3$x == 'xml' ? $itl = iq3$jx['parseXMLFromString'](q$3jxi['data']) : $itl = q$3jxi['data'];m4_v7['onLoaded']($itl), !k9nqsu['isZiYu'] && k9nqsu['isPosMsgYu'] && qij3$x != 'arraybuffer' && wx['postMessage']({ 'url': ghlrzt, 'data': $itl, 'isLoad': !![] });
      } else _co7 == 0x1 && k9nqsu['EnvConfig']['load']['call'](m4_v7, ghlrzt, qij3$x, ma4v, lhrzyt, i3$xjq);
    }, zrv4y(y47v_f, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), y47v_f;
  }(),
      f_4av7 = function (d0bk6) {
    function _vyf4z() {
      _vyf4z['__super']['call'](this);;
    }return iuqn3(_vyf4z, 'laya.wx.mini.MiniFileMgr', d0bk6), _vyf4z['isLoadFile'] = function (rzhgl) {
      return _vyf4z['_fileTypeArr']['indexOf'](rzhgl) != -0x1 ? !![] : ![];
    }, _vyf4z['getFileInfo'] = function ($i3xjq) {
      var zv4ryf = $i3xjq['split']('?')[0x0],
          _mv7 = _vyf4z['filesListObj'][zv4ryf];if (_mv7 == null) return null;else return _mv7;return null;
    }, _vyf4z['onFileUpdate'] = function (u9kb6s, dw2851) {
      var maocp = u9kb6s['split']('/'),
          ijunq3 = maocp[maocp['length'] - 0x1],
          zhgtrl = _vyf4z['getFileInfo'](dw2851);if (zhgtrl == null) _vyf4z['onSaveFile'](dw2851, ijunq3);else {
        if (zhgtrl['readyUrl'] != dw2851) _vyf4z['remove'](ijunq3, dw2851);
      }
    }, _vyf4z['exits'] = function (ks9un6, dk6b05) {
      var b06 = _vyf4z['getFileNativePath'](ks9un6);_vyf4z['fs']['getFileInfo']({ 'filePath': b06, 'success': function (iun3qj) {
          dk6b05 != null && dk6b05['runWith']([0x0, iun3qj]);
        }, 'fail': function (xgli$t) {
          dk6b05 != null && dk6b05['runWith']([0x1, xgli$t]);
        } });
    }, _vyf4z['read'] = function (d09kb6, k9nuqs, kunsq, frvhzy) {
      k9nuqs === void 0x0 && (k9nuqs = 'ascill'), frvhzy === void 0x0 && (frvhzy = '');var rfzvy4;frvhzy != '' ? rfzvy4 = _vyf4z['getFileNativePath'](d09kb6) : rfzvy4 = d09kb6, _vyf4z['fs']['readFile']({ 'filePath': rfzvy4, 'encoding': k9nuqs, 'success': function (itj$x) {
          kunsq != null && kunsq['runWith']([0x0, itj$x]);
        }, 'fail': function (su3nq9) {
          if (su3nq9 && frvhzy != '') _vyf4z['down'](frvhzy, k9nuqs, kunsq, frvhzy);else kunsq != null && kunsq['runWith']([0x1]);
        } });
    }, _vyf4z['readNativeFile'] = function (fzvy, xthrg) {
      _vyf4z['fs']['readFile']({ 'filePath': fzvy, 'encoding': '', 'success': function (v7_4a) {
          xthrg != null && xthrg['runWith']([0x0]);
        }, 'fail': function (qiuj) {
          xthrg != null && xthrg['runWith']([0x1]);
        } });
    }, _vyf4z['down'] = function (u3snqj, usq93, fry4, nk) {
      usq93 === void 0x0 && (usq93 = 'ascill'), nk === void 0x0 && (nk = '');var nqk9s = _vyf4z['getFileNativePath'](nk),
          xrgtl = _vyf4z['wxdown']({ 'url': u3snqj, 'filePath': nqk9s, 'success': function (gixtj$) {
          if (gixtj$['statusCode'] === 0xc8) _vyf4z['readFile'](gixtj$['filePath'], usq93, fry4, nk);
        }, 'fail': function (xij$) {
          fry4 != null && fry4['runWith']([0x1, xij$]);
        } });xrgtl['onProgressUpdate'](function (vrf4zy) {
        fry4 != null && fry4['runWith']([0x2, vrf4zy['progress']]);
      });
    }, _vyf4z['readFile'] = function (zytrlh, w2d805, _v47f, tgx$j) {
      w2d805 === void 0x0 && (w2d805 = 'ascill'), tgx$j === void 0x0 && (tgx$j = ''), _vyf4z['fs']['readFile']({ 'filePath': zytrlh, 'encoding': w2d805, 'success': function (s09b6) {
          if (zytrlh['indexOf']('http://') != -0x1 || zytrlh['indexOf']('https://') != -0x1) _vyf4z['onFileUpdate'](zytrlh, tgx$j);_v47f != null && _v47f['runWith']([0x0, s09b6]);
        }, 'fail': function (sb9u) {
          if (sb9u) _v47f != null && _v47f['runWith']([0x1, sb9u]);
        } });
    }, _vyf4z['downImg'] = function (gt$hl, thrzly, u9kns) {
      u9kns === void 0x0 && (u9kns = '');var oampec = _vyf4z['wxdown']({ 'url': gt$hl, 'success': function (zrhvy) {
          zrhvy['statusCode'] === 0xc8 && _vyf4z['copyFile'](zrhvy['tempFilePath'], u9kns, thrzly);
        }, 'fail': function (gi$jt) {
          thrzly != null && thrzly['runWith']([0x1, gi$jt]);
        } });
    }, _vyf4z['copyFile'] = function (av_m47, a47_, zthlry) {
      var kn9qs = av_m47['split']('/'),
          it$xj = kn9qs[kn9qs['length'] - 0x1],
          s069 = a47_['split']('?')[0x0],
          yvhzr = _vyf4z['getFileInfo'](a47_),
          y_v7 = _vyf4z['getFileNativePath'](it$xj);_vyf4z['fs']['copyFile']({ 'srcPath': av_m47, 'destPath': y_v7, 'success': function (bwd05) {
          if (!yvhzr) _vyf4z['onSaveFile'](a47_, it$xj), zthlry != null && zthlry['runWith']([0x0]);else {
            if (yvhzr['readyUrl'] != a47_) _vyf4z['remove'](it$xj, a47_, zthlry);
          }
        }, 'fail': function (q3nsj) {
          zthlry != null && zthlry['runWith']([0x1, q3nsj]);
        } });
    }, _vyf4z['getFileNativePath'] = function (n3$ijq) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + n3$ijq;
    }, _vyf4z['remove'] = function (ji$n3q, hxtl$, sqnj) {
      hxtl$ === void 0x0 && (hxtl$ = '');var $ixlg = _vyf4z['getFileInfo'](hxtl$),
          kbsu = _vyf4z['getFileNativePath']($ixlg['md5']);v_z4y['loader']['clearRes']($ixlg['readyUrl']), _vyf4z['fs']['unlink']({ 'filePath': kbsu, 'success': function (eopma) {
          if (hxtl$ != '') _vyf4z['onSaveFile'](hxtl$, ji$n3q);sqnj != null && sqnj['runWith']([0x0]);
        }, 'fail': function (fryzl) {} });
    }, _vyf4z['onSaveFile'] = function (yrv4zf, pem) {
      var xhlgt = yrv4zf['split']('?')[0x0];_vyf4z['filesListObj'][xhlgt] = { 'md5': pem, 'readyUrl': yrv4zf }, _vyf4z['fs']['writeFile']({ 'filePath': _vyf4z['fileNativeDir'] + '/' + _vyf4z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_vyf4z['filesListObj']), 'success': function (_am74) {
          console['log']('写入测试测试成功：', _am74);
        }, 'fail': function (jixg$3) {
          console['log']('写入测试测试失败：', jixg$3);
        } });
    }, _vyf4z['existDir'] = function (kuq9ns, empa) {
      _vyf4z['fs']['mkdir']({ 'dirPath': kuq9ns, 'success': function (ig$txl) {
          empa != null && empa['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (y_4f7v) {
          if (y_4f7v['errMsg']['indexOf']('file already exists') != -0x1) _vyf4z['readSync'](_vyf4z['fileListName'], 'utf8', empa);else empa != null && empa['runWith']([0x1, y_4f7v]);
        } });
    }, _vyf4z['readSync'] = function (b08d65, vyz4r, zy_4v, ksbu69) {
      vyz4r === void 0x0 && (vyz4r = 'ascill'), ksbu69 === void 0x0 && (ksbu69 = '');var h$tlgx = _vyf4z['getFileNativePath'](b08d65),
          sbk09;try {
        sbk09 = _vyf4z['fs']['readFileSync'](h$tlgx), zy_4v != null && zy_4v['runWith']([0x0, { 'data': sbk09 }]);
      } catch (ij3q$x) {
        zy_4v != null && zy_4v['runWith']([0x1]);
      }
    }, _vyf4z['readCache'] = function () {}, _vyf4z['writeCache'] = function (qs3jnu) {
      var qs3n9 = readyUrl['split']('?')[0x0];_vyf4z['filesListObj'][qs3n9] = { 'md5': md5Name, 'readyUrl': readyUrl }, _vyf4z['fs']['writeFile']({ 'filePath': _vyf4z['fileNativeDir'] + '/' + _vyf4z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_vyf4z['filesListObj']), 'success': function (fzyvh) {}, 'fail': function (w8d1) {} });
    }, _vyf4z['setNativeFileDir'] = function (rgzht) {
      _vyf4z['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rgzht;
    }, _vyf4z['filesListObj'] = {}, _vyf4z['fileNativeDir'] = null, _vyf4z['fileListName'] = 'layaairfiles.txt', _vyf4z['ziyuFileData'] = {}, zrv4y(_vyf4z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _vyf4z;
  }(v_74am),
      y_47vf = function (capmeo) {
    function i$q() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], i$q['__super']['call'](this), this['_sound'] = i$q['_createSound']();
    }iuqn3(i$q, 'laya.wx.mini.MiniSound', capmeo);var x$gitl = i$q['prototype'];return x$gitl['load'] = function (oma7) {
      var mepc = this;oma7 = g$tjxi['formatURL'](oma7), this['url'] = oma7;if (i$q['_audioCache'][oma7]) {
        this['event']('complete');return;
      }function jq3i$() {
        if (i$q['_null'] != undefined) mepc['_sound']['onCanplay'](i$q['_null']), mepc['_sound']['onError'](i$q['_null']);else try {
          mepc['_sound']['onCanplay'](null), mepc['_sound']['onError'](null), i$q['_null'] = null;
        } catch (b0ks6) {
          console['warn']('[wxmini] _clearSound:' + b0ks6), mepc['_sound']['onCanplay'](ceomp), mepc['_sound']['onError'](ceomp), i$q['_null'] = ceomp;
        }
      }function z4yrv() {
        jq3i$(), ecmao['loaded'] = !![], ecmao['event']('complete'), i$q['_audioCache'][ecmao['url']] = ecmao;
      }function frvy(rhtgx) {
        console['error']('errCode=' + rhtgx['errCode'] + '  errMsg=' + rhtgx['errMsg']), jq3i$(), ecmao['event']('error');
      }function ceomp() {}this['_sound']['onCanplay'](z4yrv), this['_sound']['onError'](frvy), this['_sound']['src'] = oma7;var ecmao = this;
    }, x$gitl['play'] = function (n9uqs3, ltrgx) {
      n9uqs3 === void 0x0 && (n9uqs3 = 0x0), ltrgx === void 0x0 && (ltrgx = 0x0);var yrhvfz;if (this['url'] == a_4v['_tMusic']) {
        if (!i$q['_musicAudio']) i$q['_musicAudio'] = i$q['_createSound']();yrhvfz = i$q['_musicAudio'];
      } else yrhvfz = i$q['_createSound']();yrhvfz['src'] = this['url'];var yzhfrl = new $ijgt(yrhvfz);return yzhfrl['url'] = this['url'], yzhfrl['loops'] = ltrgx, yzhfrl['startTime'] = n9uqs3, yzhfrl['play'](), a_4v['addChannel'](yzhfrl), yzhfrl;
    }, x$gitl['dispose'] = function () {
      var un39q = i$q['_audioCache'][this['url']];un39q && (un39q['src'] = '', delete i$q['_audioCache'][this['url']]);
    }, vzhryf(0x0, x$gitl, 'duration', function () {
      return this['_sound']['duration'];
    }), i$q['_createSound'] = function () {
      return i$q['_id']++, k9nqsu['window']['wx']['createInnerAudioContext']();
    }, i$q['_musicAudio'] = null, i$q['_id'] = 0x0, i$q['_audioCache'] = {}, i$q['_null'] = undefined, i$q;
  }(v_74am),
      $ijgt = function (xi3jg) {
    function w8d521(b0d658) {
      this['_audio'] = null, this['_onEnd'] = null, w8d521['__super']['call'](this), this['_audio'] = b0d658, this['_onEnd'] = iq3$jx['bind'](this['__onEnd'], this), b0d658['onEnded'](this['_onEnd']);
    }iuqn3(w8d521, 'laya.wx.mini.MiniSoundChannel', xi3jg);var qs39un = w8d521['prototype'];return qs39un['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (v_z4y['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qs39un['__onNull'] = function () {}, qs39un['play'] = function () {
      this['isStopped'] = ![], a_4v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qs39un['stop'] = function () {
      this['isStopped'] = !![], a_4v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (w8d521['_null'] != undefined) this['_audio']['onEnded'](w8d521['_null']);else try {
        this['_audio']['onEnded'](null), w8d521['_null'] = null;
      } catch (macp) {
        console['warn']('[wxmini] stop:' + macp), this['_audio']['onEnded'](iq3$jx['bind'](this['__onNull'], this)), w8d521['_null'] = iq3$jx['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qs39un['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qs39un['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], a_4v['addChannel'](this), this['_audio']['play']();
    }, vzhryf(0x0, qs39un, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vzhryf(0x0, qs39un, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vzhryf(0x0, qs39un, 'volume', function () {
      return 0x1;
    }, function (acm7_4) {}), w8d521['_null'] = undefined, w8d521;
  }(k9un6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $tgi in Laya) {
    var jnqs3u = Laya[$tgi];jnqs3u && jnqs3u['__isclass'] && (exports[$tgi] = jnqs3u);
  }
});