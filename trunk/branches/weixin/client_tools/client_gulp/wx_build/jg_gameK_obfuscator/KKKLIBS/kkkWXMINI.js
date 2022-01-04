var U = wx.$k;
(function (window, document, s9k6h) {
  var xaul = s9k6h['un'],
      jti7h = s9k6h['uns'],
      dlu_$ = s9k6h['static'],
      p_rl$ = s9k6h['class'],
      vzoxwb = s9k6h['getset'],
      r_d$p5 = s9k6h['__newvec'],
      uxa$ld = laya['utils']['Browser'],
      mij47 = laya['events']['Event'],
      rd_$lp = laya['events']['EventDispatcher'],
      pd$5r = laya['resource']['HTMLImage'],
      rd_p = laya['utils']['Handler'],
      v1bwzo = laya['display']['Input'],
      lzxub = laya['net']['Loader'],
      ihte6k = laya['maths']['Matrix'],
      f3rpg5 = laya['renders']['Render'],
      ike6sh = laya['utils']['RunDriver'],
      qn9082 = laya['media']['Sound'],
      _$drul = laya['media']['SoundChannel'],
      eikh = laya['media']['SoundManager'],
      q092 = laya['display']['Stage'],
      wvn1bo = laya['net']['URL'],
      ei7jtm = laya['utils']['Utils'],
      v1nwq = function () {
    function wo1vqn() {}return p_rl$(wo1vqn, 'laya.wx.mini.MiniAdpter'), wo1vqn['getJson'] = function (i76het) {
      return JSON['parse'](i76het);
    }, wo1vqn['init'] = function (adu$, h67ite) {
      adu$ === void 0x0 && (adu$ = ![]), h67ite === void 0x0 && (h67ite = ![]);if (wo1vqn['_inited']) return;wo1vqn['window'] = window;if (wo1vqn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wo1vqn['_inited'] = !![], wo1vqn['isZiYu'] = h67ite, wo1vqn['isPosMsgYu'] = adu$, wo1vqn['EnvConfig'] = {}, !wo1vqn['isZiYu'] && (teij7h['setNativeFileDir']('/layaairGame'), teij7h['existDir'](teij7h['fileNativeDir'], rd_p['create'](wo1vqn, wo1vqn['onMkdirCallBack']))), wo1vqn['window']['focus'] = function () {}, s9k6h['getUrlPath'] = function () {}, wo1vqn['window']['logtime'] = function (k9eh6) {}, wo1vqn['window']['alertTimeLog'] = function (n102q) {}, wo1vqn['window']['resetShareInfo'] = function () {}, wo1vqn['window']['CanvasRenderingContext2D'] = function () {}, wo1vqn['window']['CanvasRenderingContext2D']['prototype'] = wo1vqn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wo1vqn['window']['document']['body']['appendChild'] = function () {}, wo1vqn['EnvConfig']['pixelRatioInt'] = 0x0, ike6sh['getPixelRatio'] = wo1vqn['pixelRatio'], wo1vqn['_preCreateElement'] = uxa$ld['createElement'], uxa$ld['createElement'] = wo1vqn['createElement'], ike6sh['createShaderCondition'] = wo1vqn['createShaderCondition'], ei7jtm['parseXMLFromString'] = wo1vqn['parseXMLFromString'], v1bwzo['_createInputElement'] = rdp5_['_createInputElement'], wo1vqn['EnvConfig']['load'] = lzxub['prototype']['load'], lzxub['prototype']['load'] = n890['prototype']['load'], wo1vqn['isZiYu'] && adu$ && wx['onMessage'](function (xbwuaz) {
        xbwuaz['isLoad'] && (teij7h['ziyuFileData'][xbwuaz['url']] = xbwuaz['data']);
      });
    }, wo1vqn['onMkdirCallBack'] = function (etjm, ad$xul) {
      if (!etjm) teij7h['filesListObj'] = JSON['parse'](ad$xul['data']);
    }, wo1vqn['pixelRatio'] = function () {
      if (!wo1vqn['EnvConfig']['pixelRatioInt']) try {
        var n0vo = wx['getSystemInfoSync']();return wo1vqn['EnvConfig']['pixelRatioInt'] = n0vo['pixelRatio'], n0vo = n0vo, n0vo['pixelRatio'];
      } catch (rdp35_) {}return wo1vqn['EnvConfig']['pixelRatioInt'];
    }, wo1vqn['createElement'] = function (bno1w) {
      if (bno1w == 'canvas') {
        var ikth6e;return wo1vqn['idx'] == 0x1 ? wo1vqn['isZiYu'] ? (ikth6e = sharedCanvas, ikth6e['style'] = {}) : ikth6e = window['canvas'] : ikth6e = window['wx']['createCanvas'](), wo1vqn['idx']++, ikth6e;
      } else {
        if (bno1w == 'textarea' || bno1w == 'input') return wo1vqn['onCreateInput'](bno1w);else {
          if (bno1w == 'div') {
            var pr$dl = wo1vqn['_preCreateElement'](bno1w);return pr$dl['contains'] = function (qwno) {
              return null;
            }, pr$dl['removeChild'] = function (obxvz) {}, pr$dl;
          } else return wo1vqn['_preCreateElement'](bno1w);
        }
      }
    }, wo1vqn['onCreateInput'] = function (ij7m4t) {
      var azxl$u = wo1vqn['_preCreateElement'](ij7m4t);return azxl$u['focus'] = rdp5_['wxinputFocus'], azxl$u['blur'] = rdp5_['wxinputblur'], azxl$u['style'] = {}, azxl$u['value'] = 0x0, azxl$u['parentElement'] = {}, azxl$u['placeholder'] = {}, azxl$u['type'] = {}, azxl$u['setColor'] = function ($p5_) {}, azxl$u['setType'] = function (tj7mi4) {}, azxl$u['setFontFace'] = function (da_u$) {}, azxl$u['addEventListener'] = function (s89) {}, azxl$u['contains'] = function (qn08) {
        return null;
      }, azxl$u['removeChild'] = function (o1bwv) {}, azxl$u;
    }, wo1vqn['createShaderCondition'] = function (ovzw1b) {
      var q0n218 = this,
          vq10o = function () {
        var bzwaxo = ovzw1b;return q0n218[ovzw1b['replace']('this.', '')];
      };return vq10o;
    }, wo1vqn['EnvConfig'] = null, wo1vqn['window'] = null, wo1vqn['_preCreateElement'] = null, wo1vqn['_inited'] = ![], wo1vqn['wxRequest'] = null, wo1vqn['systemInfo'] = null, wo1vqn['version'] = '0.0.1', wo1vqn['isZiYu'] = ![], wo1vqn['isPosMsgYu'] = ![], wo1vqn['parseXMLFromString'] = function (ht6ie) {
      var du$lxa, s89q02;ht6ie = ht6ie['replace'](/>\s+</g, '><');try {
        du$lxa = new window['Parser']['DOMParser']()['parseFromString'](ht6ie, 'text/xml');
      } catch (wb1on) {
        throw '需要引入xml解析库文件';
      }return du$lxa;
    }, wo1vqn['idx'] = 0x1, wo1vqn;
  }(),
      _udrl = function () {
    function bwoxa() {}p_rl$(bwoxa, 'laya.wx.mini.MiniImage');var obwax = bwoxa['prototype'];return obwax['_loadImage'] = function (on01qv) {
      var vqw1n = this,
          tjim = ![];on01qv['indexOf']('layaNativeDir/') == -0x1 && (tjim = !![], on01qv = wvn1bo['formatURL'](on01qv));if (!teij7h['getFileInfo'](on01qv)) {
        if (on01qv['indexOf']('http://') != -0x1 || on01qv['indexOf']('https://') != -0x1) teij7h['downImg'](on01qv, new rd_p(bwoxa, bwoxa['onDownImgCallBack'], [on01qv, vqw1n]), on01qv);else bwoxa['onCreateImage'](on01qv, vqw1n, !![]);
      } else bwoxa['onCreateImage'](on01qv, vqw1n, !tjim);
    }, bwoxa['onDownImgCallBack'] = function (mite, $lrp_d, itm7j4) {
      if (!itm7j4) bwoxa['onCreateImage'](mite, $lrp_d);else $lrp_d['onError'](null);
    }, bwoxa['onCreateImage'] = function (gr5_3p, wb1oz, uaxbzw) {
      uaxbzw === void 0x0 && (uaxbzw = ![]);var q1v0n;if (!uaxbzw) {
        var abow = teij7h['getFileInfo'](gr5_3p),
            t6i7e = abow['md5'];q1v0n = teij7h['getFileNativePath'](t6i7e);
      } else q1v0n = gr5_3p;if (wb1oz['imgCache'] == null) wb1oz['imgCache'] = {};var _r$dl;function d$p5() {
        _r$dl['onload'] = null, _r$dl['onerror'] = null, delete wb1oz['imgCache'][gr5_3p];
      };var z1bowv = function () {
        d$p5(), wb1oz['onLoaded'](_r$dl);
      },
          l_au$d = function () {
        d$p5(), wb1oz['event']('error', 'Load image failed');
      };wb1oz['_type'] == 'nativeimage' ? (_r$dl = new uxa$ld['window']['Image'](), _r$dl['crossOrigin'] = '', _r$dl['onload'] = z1bowv, _r$dl['onerror'] = l_au$d, _r$dl['src'] = q1v0n, wb1oz['imgCache'][gr5_3p] = _r$dl) : new pd$5r['create'](q1v0n, { 'onload': z1bowv, 'onerror': l_au$d, 'onCreate': function (c53f) {
          _r$dl = c53f, wb1oz['imgCache'][gr5_3p] = c53f;
        } });
    }, bwoxa;
  }(),
      rdp5_ = function () {
    function hite67() {}return p_rl$(hite67, 'laya.wx.mini.MiniInput'), hite67['_createInputElement'] = function () {
      v1bwzo['_initInput'](v1bwzo['area'] = uxa$ld['createElement']('textarea')), v1bwzo['_initInput'](v1bwzo['input'] = uxa$ld['createElement']('input')), v1bwzo['inputContainer'] = uxa$ld['createElement']('div'), v1bwzo['inputContainer']['style']['position'] = 'absolute', v1bwzo['inputContainer']['style']['zIndex'] = 0x186a0, uxa$ld['container']['appendChild'](v1bwzo['inputContainer']), v1bwzo['inputContainer']['setPos'] = function (hk29, hse6ik) {
        v1bwzo['inputContainer']['style']['left'] = hk29 + 'px', v1bwzo['inputContainer']['style']['top'] = hse6ik + 'px';
      }, s9k6h['stage']['on']('resize', null, hite67['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (axwbzu) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), eikh['_soundClass'] = pr_d, eikh['_musicClass'] = pr_d;
    }, hite67['_onStageResize'] = function () {
      var wvob1z = s9k6h['stage']['_canvasTransform']['identity']();wvob1z['scale'](uxa$ld['width'] / f3rpg5['canvas']['width'] / ike6sh['getPixelRatio'](), uxa$ld['height'] / f3rpg5['canvas']['height'] / ike6sh['getPixelRatio']());
    }, hite67['wxinputFocus'] = function (h7tije) {
      var n89q2 = v1bwzo['inputElement']['target'];if (n89q2 && !n89q2['editable']) return;v1nwq['window']['wx']['offKeyboardConfirm'](), v1nwq['window']['wx']['offKeyboardInput'](), v1nwq['window']['wx']['showKeyboard']({ 'defaultValue': n89q2['text'], 'maxLength': n89q2['maxChars'], 'multiple': n89q2['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nwov1) {}, 'fail': function (ijmt7e) {} }), v1nwq['window']['wx']['onKeyboardConfirm'](function (i6th) {
        var h6k9e = i6th ? i6th['value'] : '';n89q2['text'] = h6k9e, n89q2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), v1nwq['window']['wx']['onKeyboardInput'](function (dlu$r) {
        var pd_53r = dlu$r ? dlu$r['value'] : '';if (!n89q2['multiline']) {
          if (pd_53r['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n89q2['text'] = pd_53r, n89q2['event']('input');
      });
    }, hite67['inputEnter'] = function () {
      v1bwzo['inputElement']['target']['focus'] = ![];
    }, hite67['wxinputblur'] = function () {
      hite67['hideKeyboard']();
    }, hite67['hideKeyboard'] = function () {
      v1nwq['window']['wx']['offKeyboardConfirm'](), v1nwq['window']['wx']['offKeyboardInput'](), v1nwq['window']['wx']['hideKeyboard']({ 'success': function (laxb) {
          console['log']('隐藏键盘');
        }, 'fail': function (owvz1b) {
          console['log']('隐藏键盘出错:' + (owvz1b ? owvz1b['errMsg'] : ''));
        } });
    }, hite67;
  }(),
      n890 = function () {
    function fg5r3p() {}p_rl$(fg5r3p, 'laya.wx.mini.MiniLoader');var gfc = fg5r3p['prototype'];return gfc['load'] = function (e6hsik, m7jit, e7jt, p53rd, $lpd) {
      e7jt === void 0x0 && (e7jt = !![]), $lpd === void 0x0 && ($lpd = ![]);var jtim = this;jtim['_url'] = e6hsik;if (e6hsik['indexOf']('data:image') === 0x0) jtim['_type'] = m7jit = 'image';else jtim['_type'] = m7jit || (m7jit = jtim['getTypeFromUrl'](e6hsik));jtim['_cache'] = e7jt, jtim['_data'] = null;var $uz = 'ascii';if (e6hsik['indexOf']('.fnt') != -0x1) $uz = 'utf8';else m7jit == 'arraybuffer' && ($uz = '');;var zwaxu = ei7jtm['getFileExtension'](e6hsik);if (fg5r3p['_fileTypeArr']['indexOf'](zwaxu) != -0x1) v1nwq['EnvConfig']['load']['call'](this, e6hsik, m7jit, e7jt, p53rd, $lpd);else {
        if (!teij7h['getFileInfo'](e6hsik)) {
          if (e6hsik['indexOf']('layaNativeDir/') != -0x1) {
            if (v1nwq['isZiYu']) {
              var uld$xa = teij7h['ziyuFileData'][e6hsik];jtim['onLoaded'](uld$xa);return;
            } else {
              cosnole['log']('read read'), teij7h['read'](e6hsik, $uz, new rd_p(fg5r3p, fg5r3p['onReadNativeCallBack'], [$uz, e6hsik, m7jit, e7jt, p53rd, $lpd, jtim]));return;
            }
          }if (wvn1bo['rootPath'] == '') var cgp5f = e6hsik;else cgp5f = e6hsik['split'](wvn1bo['rootPath'])[0x0];e6hsik['indexOf']('http://') != -0x1 || e6hsik['indexOf']('https://') != -0x1 ? v1nwq['EnvConfig']['load']['call'](jtim, e6hsik, m7jit, e7jt, p53rd, $lpd) : teij7h['readFile'](cgp5f, $uz, new rd_p(fg5r3p, fg5r3p['onReadNativeCallBack'], [$uz, e6hsik, m7jit, e7jt, p53rd, $lpd, jtim]), e6hsik);
        } else v1nwq['EnvConfig']['load']['call'](this, e6hsik, m7jit, e7jt, p53rd, $lpd);
      }
    }, gfc['resMgrLoad'] = function (bzxov, wovbn, s6eh, v8n0q, bwz1o, wv1nq, eij7tm) {
      s6eh === void 0x0 && (s6eh = 0x0), v8n0q === void 0x0 && (v8n0q = ![]), bwz1o === void 0x0 && (bwz1o = ![]), wv1nq === void 0x0 && (wv1nq = 0x0), eij7tm === void 0x0 && (eij7tm = 0x3), bzxov['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bzxov), v1nwq['EnvConfig']['resMgrLoad'](bzxov, (g53cf, te6k, xulbaz) => {
        fg5r3p['prototype']['resMgrLoadCallBack'](g53cf, te6k, xulbaz, wovbn);
      }, s6eh, v8n0q, bwz1o, wv1nq, eij7tm);
    }, gfc['resMgrLoadCallBack'] = function (rpgf3, fp3c, d3_p5, q1von) {
      console['log']('buff:::', rpgf3, d3_p5, teij7h['fileNativeDir'] + '///' + teij7h['fileListName']), q1von(rpgf3, fp3c, d3_p5);
    }, gfc['clearRes'] = function (_$udr, xauzw) {
      xauzw === void 0x0 && (xauzw = ![]);var $d5_p = this;$d5_p['clearRes'](_$udr, xauzw);var bzuxal = teij7h['getFileInfo'](_$udr);if (bzuxal && (_$udr['indexOf']('http://') != -0x1 || _$udr['indexOf']('https://') != -0x1)) {
        var d$ua = bzuxal['md5'],
            ehs6 = teij7h['getFileNativePath'](d$ua);teij7h['remove'](ehs6);
      }
    }, fg5r3p['onReadNativeCallBack'] = function (d5r3_, g_35rp, s2q890, pf5gr, khies6, alz$, h7it6, wuzabx, zuxalb) {
      pf5gr === void 0x0 && (pf5gr = !![]), alz$ === void 0x0 && (alz$ = ![]), wuzabx === void 0x0 && (wuzabx = 0x0);if (!wuzabx) {
        var n1wbov;if (s2q890 == 'json' || s2q890 == 'atlas') n1wbov = v1nwq['getJson'](zuxalb['data']);else s2q890 == 'xml' ? n1wbov = ei7jtm['parseXMLFromString'](zuxalb['data']) : n1wbov = zuxalb['data'];h7it6['onLoaded'](n1wbov), !v1nwq['isZiYu'] && v1nwq['isPosMsgYu'] && s2q890 != 'arraybuffer' && wx['postMessage']({ 'url': g_35rp, 'data': n1wbov, 'isLoad': !![] });
      } else wuzabx == 0x1 && v1nwq['EnvConfig']['load']['call'](h7it6, g_35rp, s2q890, pf5gr, khies6, alz$);
    }, dlu_$(fg5r3p, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fg5r3p;
  }(),
      teij7h = function (d5$pr_) {
    function _3r5() {
      _3r5['__super']['call'](this);;
    }return p_rl$(_3r5, 'laya.wx.mini.MiniFileMgr', d5$pr_), _3r5['isLoadFile'] = function (s2h9) {
      return _3r5['_fileTypeArr']['indexOf'](s2h9) != -0x1 ? !![] : ![];
    }, _3r5['getFileInfo'] = function (wbazx) {
      var $rl_ = wbazx['split']('?')[0x0],
          ozwaxb = _3r5['filesListObj'][$rl_];if (ozwaxb == null) return null;else return ozwaxb;return null;
    }, _3r5['onFileUpdate'] = function (nw1qov, dr_p5$) {
      var xozwb = nw1qov['split']('/'),
          c3f5g = xozwb[xozwb['length'] - 0x1],
          bawuz = _3r5['getFileInfo'](dr_p5$);if (bawuz == null) _3r5['onSaveFile'](dr_p5$, c3f5g);else {
        if (bawuz['readyUrl'] != dr_p5$) _3r5['remove'](c3f5g, dr_p5$);
      }
    }, _3r5['exits'] = function (bnwo1v, wvboxz) {
      var h7j = _3r5['getFileNativePath'](bnwo1v);_3r5['fs']['getFileInfo']({ 'filePath': h7j, 'success': function (etkhi6) {
          wvboxz != null && wvboxz['runWith']([0x0, etkhi6]);
        }, 'fail': function (nv810q) {
          wvboxz != null && wvboxz['runWith']([0x1, nv810q]);
        } });
    }, _3r5['read'] = function (buxzw, kh6ie, ks289, m7ie) {
      kh6ie === void 0x0 && (kh6ie = 'ascill'), m7ie === void 0x0 && (m7ie = '');var n80q;m7ie != '' ? n80q = _3r5['getFileNativePath'](buxzw) : n80q = buxzw, _3r5['fs']['readFile']({ 'filePath': n80q, 'encoding': kh6ie, 'success': function (o0qvn) {
          ks289 != null && ks289['runWith']([0x0, o0qvn]);
        }, 'fail': function (tj7eih) {
          if (tj7eih && m7ie != '') _3r5['down'](m7ie, kh6ie, ks289, m7ie);else ks289 != null && ks289['runWith']([0x1]);
        } });
    }, _3r5['readNativeFile'] = function (sk028, ud$_l) {
      _3r5['fs']['readFile']({ 'filePath': sk028, 'encoding': '', 'success': function (wzo) {
          ud$_l != null && ud$_l['runWith']([0x0]);
        }, 'fail': function (xz$ua) {
          ud$_l != null && ud$_l['runWith']([0x1]);
        } });
    }, _3r5['down'] = function (y3c5fg, e9shk, ehkti6, uxlzb) {
      e9shk === void 0x0 && (e9shk = 'ascill'), uxlzb === void 0x0 && (uxlzb = '');var $dual_ = _3r5['getFileNativePath'](uxlzb),
          r$_pl = _3r5['wxdown']({ 'url': y3c5fg, 'filePath': $dual_, 'success': function (s089q2) {
          if (s089q2['statusCode'] === 0xc8) _3r5['readFile'](s089q2['filePath'], e9shk, ehkti6, uxlzb);
        }, 'fail': function (s6k8) {
          ehkti6 != null && ehkti6['runWith']([0x1, s6k8]);
        } });r$_pl['onProgressUpdate'](function (fr35pg) {
        ehkti6 != null && ehkti6['runWith']([0x2, fr35pg['progress']]);
      });
    }, _3r5['readFile'] = function (iet76, wnvo1b, u_rd, k9862) {
      wnvo1b === void 0x0 && (wnvo1b = 'ascill'), k9862 === void 0x0 && (k9862 = ''), _3r5['fs']['readFile']({ 'filePath': iet76, 'encoding': wnvo1b, 'success': function (ikthe) {
          if (iet76['indexOf']('http://') != -0x1 || iet76['indexOf']('https://') != -0x1) _3r5['onFileUpdate'](iet76, k9862);u_rd != null && u_rd['runWith']([0x0, ikthe]);
        }, 'fail': function ($dula) {
          if ($dula) u_rd != null && u_rd['runWith']([0x1, $dula]);
        } });
    }, _3r5['downImg'] = function ($urd_, jim74t, bzwov1) {
      bzwov1 === void 0x0 && (bzwov1 = '');var r5dp$_ = _3r5['wxdown']({ 'url': $urd_, 'success': function (e6ksih) {
          e6ksih['statusCode'] === 0xc8 && _3r5['copyFile'](e6ksih['tempFilePath'], bzwov1, jim74t);
        }, 'fail': function (etki6h) {
          jim74t != null && jim74t['runWith']([0x1, etki6h]);
        } });
    }, _3r5['copyFile'] = function (e7htj, uxawz, fg3yc5) {
      var n8q09 = e7htj['split']('/'),
          ekish = n8q09[n8q09['length'] - 0x1],
          xalud$ = uxawz['split']('?')[0x0],
          e69hs = _3r5['getFileInfo'](uxawz),
          hteik6 = _3r5['getFileNativePath'](ekish);_3r5['fs']['copyFile']({ 'srcPath': e7htj, 'destPath': hteik6, 'success': function (c5ygf) {
          if (!e69hs) _3r5['onSaveFile'](uxawz, ekish), fg3yc5 != null && fg3yc5['runWith']([0x0]);else {
            if (e69hs['readyUrl'] != uxawz) _3r5['remove'](ekish, uxawz, fg3yc5);
          }
        }, 'fail': function (uadx) {
          fg3yc5 != null && fg3yc5['runWith']([0x1, uadx]);
        } });
    }, _3r5['getFileNativePath'] = function (vbzw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vbzw;
    }, _3r5['remove'] = function (tihje7, frgp, ie6shk) {
      frgp === void 0x0 && (frgp = '');var ks6ieh = _3r5['getFileInfo'](frgp),
          on1vq0 = _3r5['getFileNativePath'](ks6ieh['md5']);s9k6h['loader']['clearRes'](ks6ieh['readyUrl']), _3r5['fs']['unlink']({ 'filePath': on1vq0, 'success': function (xaobzw) {
          if (frgp != '') _3r5['onSaveFile'](frgp, tihje7);ie6shk != null && ie6shk['runWith']([0x0]);
        }, 'fail': function (thke6) {} });
    }, _3r5['onSaveFile'] = function (zulax, xzabl) {
      var u$_dal = zulax['split']('?')[0x0];_3r5['filesListObj'][u$_dal] = { 'md5': xzabl, 'readyUrl': zulax }, _3r5['fs']['writeFile']({ 'filePath': _3r5['fileNativeDir'] + '/' + _3r5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_3r5['filesListObj']), 'success': function (pfgc) {
          console['log']('写入测试测试成功：', pfgc);
        }, 'fail': function (z$l) {
          console['log']('写入测试测试失败：', z$l);
        } });
    }, _3r5['existDir'] = function (lxu$za, pgr_3) {
      _3r5['fs']['mkdir']({ 'dirPath': lxu$za, 'success': function (zvo1b) {
          pgr_3 != null && pgr_3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (n1vq0) {
          if (n1vq0['errMsg']['indexOf']('file already exists') != -0x1) _3r5['readSync'](_3r5['fileListName'], 'utf8', pgr_3);else pgr_3 != null && pgr_3['runWith']([0x1, n1vq0]);
        } });
    }, _3r5['readSync'] = function (albxuz, dp5_r, ij4m, _$dp5) {
      dp5_r === void 0x0 && (dp5_r = 'ascill'), _$dp5 === void 0x0 && (_$dp5 = '');var abwuz = _3r5['getFileNativePath'](albxuz),
          iemt7;try {
        iemt7 = _3r5['fs']['readFileSync'](abwuz), ij4m != null && ij4m['runWith']([0x0, { 'data': iemt7 }]);
      } catch (uzlxba) {
        ij4m != null && ij4m['runWith']([0x1]);
      }
    }, _3r5['readCache'] = function () {}, _3r5['writeCache'] = function (et67hi) {
      var luxbza = readyUrl['split']('?')[0x0];_3r5['filesListObj'][luxbza] = { 'md5': md5Name, 'readyUrl': readyUrl }, _3r5['fs']['writeFile']({ 'filePath': _3r5['fileNativeDir'] + '/' + _3r5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_3r5['filesListObj']), 'success': function (dau_l$) {}, 'fail': function (xbaz) {} });
    }, _3r5['setNativeFileDir'] = function (zuwab) {
      _3r5['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zuwab;
    }, _3r5['filesListObj'] = {}, _3r5['fileNativeDir'] = null, _3r5['fileListName'] = 'layaairfiles.txt', _3r5['ziyuFileData'] = {}, dlu_$(_3r5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _3r5;
  }(rd_$lp),
      pr_d = function (vxowzb) {
    function _d35pr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _d35pr['__super']['call'](this), this['_sound'] = _d35pr['_createSound']();
    }p_rl$(_d35pr, 'laya.wx.mini.MiniSound', vxowzb);var s9k6e = _d35pr['prototype'];return s9k6e['load'] = function (bwoz) {
      var lxau$d = this;bwoz = wvn1bo['formatURL'](bwoz), this['url'] = bwoz;if (_d35pr['_audioCache'][bwoz]) {
        this['event']('complete');return;
      }function alxuz$() {
        if (_d35pr['_null'] != undefined) lxau$d['_sound']['onCanplay'](_d35pr['_null']), lxau$d['_sound']['onError'](_d35pr['_null']);else try {
          lxau$d['_sound']['onCanplay'](null), lxau$d['_sound']['onError'](null), _d35pr['_null'] = null;
        } catch (zuwbax) {
          console['warn']('[wxmini] _clearSound:' + zuwbax), lxau$d['_sound']['onCanplay'](n28q), lxau$d['_sound']['onError'](n28q), _d35pr['_null'] = n28q;
        }
      }function zuwabx() {
        alxuz$(), jtiem7['loaded'] = !![], jtiem7['event']('complete'), _d35pr['_audioCache'][jtiem7['url']] = jtiem7;
      }function oaxbzw(l$r_u) {
        console['error']('errCode=' + l$r_u['errCode'] + '  errMsg=' + l$r_u['errMsg']), alxuz$(), jtiem7['event']('error');
      }function n28q() {}this['_sound']['onCanplay'](zuwabx), this['_sound']['onError'](oaxbzw), this['_sound']['src'] = bwoz;var jtiem7 = this;
    }, s9k6e['play'] = function (axulbz, i7tjm4) {
      axulbz === void 0x0 && (axulbz = 0x0), i7tjm4 === void 0x0 && (i7tjm4 = 0x0);var eh6sik;if (this['url'] == eikh['_tMusic']) {
        if (!_d35pr['_musicAudio']) _d35pr['_musicAudio'] = _d35pr['_createSound']();eh6sik = _d35pr['_musicAudio'];
      } else eh6sik = _d35pr['_createSound']();eh6sik['src'] = this['url'];var wabxz = new qn209(eh6sik);return wabxz['url'] = this['url'], wabxz['loops'] = i7tjm4, wabxz['startTime'] = axulbz, wabxz['play'](), eikh['addChannel'](wabxz), wabxz;
    }, s9k6e['dispose'] = function () {
      var d_5r3p = _d35pr['_audioCache'][this['url']];d_5r3p && (d_5r3p['src'] = '', delete _d35pr['_audioCache'][this['url']]);
    }, vzoxwb(0x0, s9k6e, 'duration', function () {
      return this['_sound']['duration'];
    }), _d35pr['_createSound'] = function () {
      return _d35pr['_id']++, v1nwq['window']['wx']['createInnerAudioContext']();
    }, _d35pr['_musicAudio'] = null, _d35pr['_id'] = 0x0, _d35pr['_audioCache'] = {}, _d35pr['_null'] = undefined, _d35pr;
  }(rd_$lp),
      qn209 = function ($_alud) {
    function uazlbx(bon1vw) {
      this['_audio'] = null, this['_onEnd'] = null, uazlbx['__super']['call'](this), this['_audio'] = bon1vw, this['_onEnd'] = ei7jtm['bind'](this['__onEnd'], this), bon1vw['onEnded'](this['_onEnd']);
    }p_rl$(uazlbx, 'laya.wx.mini.MiniSoundChannel', $_alud);var uzalb = uazlbx['prototype'];return uzalb['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (s9k6h['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, uzalb['__onNull'] = function () {}, uzalb['play'] = function () {
      this['isStopped'] = ![], eikh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, uzalb['stop'] = function () {
      this['isStopped'] = !![], eikh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (uazlbx['_null'] != undefined) this['_audio']['onEnded'](uazlbx['_null']);else try {
        this['_audio']['onEnded'](null), uazlbx['_null'] = null;
      } catch (zubaw) {
        console['warn']('[wxmini] stop:' + zubaw), this['_audio']['onEnded'](ei7jtm['bind'](this['__onNull'], this)), uazlbx['_null'] = ei7jtm['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, uzalb['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, uzalb['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], eikh['addChannel'](this), this['_audio']['play']();
    }, vzoxwb(0x0, uzalb, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vzoxwb(0x0, uzalb, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vzoxwb(0x0, uzalb, 'volume', function () {
      return 0x1;
    }, function (yc35f) {}), uazlbx['_null'] = undefined, uazlbx;
  }(_$drul);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var uxbzw in Laya) {
    var vqnow = Laya[uxbzw];vqnow && vqnow['__isclass'] && (exports[uxbzw] = vqnow);
  }
});