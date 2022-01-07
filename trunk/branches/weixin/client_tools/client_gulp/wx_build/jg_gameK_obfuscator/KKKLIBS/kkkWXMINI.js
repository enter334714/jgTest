var U = wx.$k;
(function (window, document, uxda$l) {
  var ovwbn = uxda$l['un'],
      r$_pld = uxda$l['uns'],
      x$u = uxda$l['static'],
      f53yg = uxda$l['class'],
      kie6hs = uxda$l['getset'],
      daux$l = uxda$l['__newvec'],
      uld_a$ = laya['utils']['Browser'],
      e96ksh = laya['events']['Event'],
      $xuald = laya['events']['EventDispatcher'],
      ki6she = laya['resource']['HTMLImage'],
      r_p$dl = laya['utils']['Handler'],
      ejht7 = laya['display']['Input'],
      n8q2 = laya['net']['Loader'],
      qonw = laya['maths']['Matrix'],
      ti6khe = laya['renders']['Render'],
      on1q = laya['utils']['RunDriver'],
      d35p_ = laya['media']['Sound'],
      lxu$da = laya['media']['SoundChannel'],
      skhe9 = laya['media']['SoundManager'],
      g5cyf = laya['display']['Stage'],
      nqvow = laya['net']['URL'],
      q29s0 = laya['utils']['Utils'],
      imtje = function () {
    function xobaw() {}return f53yg(xobaw, 'laya.wx.mini.MiniAdpter'), xobaw['getJson'] = function (jm47ti) {
      return JSON['parse'](jm47ti);
    }, xobaw['init'] = function (q820n1, a$ud) {
      q820n1 === void 0x0 && (q820n1 = ![]), a$ud === void 0x0 && (a$ud = ![]);if (xobaw['_inited']) return;xobaw['window'] = window;if (xobaw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xobaw['_inited'] = !![], xobaw['isZiYu'] = a$ud, xobaw['isPosMsgYu'] = q820n1, xobaw['EnvConfig'] = {}, !xobaw['isZiYu'] && (vnwb1['setNativeFileDir']('/layaairGame'), vnwb1['existDir'](vnwb1['fileNativeDir'], r_p$dl['create'](xobaw, xobaw['onMkdirCallBack']))), xobaw['window']['focus'] = function () {}, uxda$l['getUrlPath'] = function () {}, xobaw['window']['logtime'] = function ($zluax) {}, xobaw['window']['alertTimeLog'] = function ($xaldu) {}, xobaw['window']['resetShareInfo'] = function () {}, xobaw['window']['CanvasRenderingContext2D'] = function () {}, xobaw['window']['CanvasRenderingContext2D']['prototype'] = xobaw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xobaw['window']['document']['body']['appendChild'] = function () {}, xobaw['EnvConfig']['pixelRatioInt'] = 0x0, on1q['getPixelRatio'] = xobaw['pixelRatio'], xobaw['_preCreateElement'] = uld_a$['createElement'], uld_a$['createElement'] = xobaw['createElement'], on1q['createShaderCondition'] = xobaw['createShaderCondition'], q29s0['parseXMLFromString'] = xobaw['parseXMLFromString'], ejht7['_createInputElement'] = o0qvn['_createInputElement'], xobaw['EnvConfig']['load'] = n8q2['prototype']['load'], n8q2['prototype']['load'] = r_dp35['prototype']['load'], xobaw['isZiYu'] && q820n1 && wx['onMessage'](function (w1zob) {
        w1zob['isLoad'] && (vnwb1['ziyuFileData'][w1zob['url']] = w1zob['data']);
      });
    }, xobaw['onMkdirCallBack'] = function (jt74, e6ks) {
      if (!jt74) vnwb1['filesListObj'] = JSON['parse'](e6ks['data']);
    }, xobaw['pixelRatio'] = function () {
      if (!xobaw['EnvConfig']['pixelRatioInt']) try {
        var zlux = wx['getSystemInfoSync']();return xobaw['EnvConfig']['pixelRatioInt'] = zlux['pixelRatio'], zlux = zlux, zlux['pixelRatio'];
      } catch (q180n2) {}return xobaw['EnvConfig']['pixelRatioInt'];
    }, xobaw['createElement'] = function (oza) {
      if (oza == 'canvas') {
        var wobax;return xobaw['idx'] == 0x1 ? xobaw['isZiYu'] ? (wobax = sharedCanvas, wobax['style'] = {}) : wobax = window['canvas'] : wobax = window['wx']['createCanvas'](), xobaw['idx']++, wobax;
      } else {
        if (oza == 'textarea' || oza == 'input') return xobaw['onCreateInput'](oza);else {
          if (oza == 'div') {
            var ek6thi = xobaw['_preCreateElement'](oza);return ek6thi['contains'] = function (e9sk6h) {
              return null;
            }, ek6thi['removeChild'] = function (sh926k) {}, ek6thi;
          } else return xobaw['_preCreateElement'](oza);
        }
      }
    }, xobaw['onCreateInput'] = function (a$dxul) {
      var ygc = xobaw['_preCreateElement'](a$dxul);return ygc['focus'] = o0qvn['wxinputFocus'], ygc['blur'] = o0qvn['wxinputblur'], ygc['style'] = {}, ygc['value'] = 0x0, ygc['parentElement'] = {}, ygc['placeholder'] = {}, ygc['type'] = {}, ygc['setColor'] = function (du$l_a) {}, ygc['setType'] = function (uzlxb) {}, ygc['setFontFace'] = function (zu$xla) {}, ygc['addEventListener'] = function ($zalux) {}, ygc['contains'] = function (dr$) {
        return null;
      }, ygc['removeChild'] = function (ki6hes) {}, ygc;
    }, xobaw['createShaderCondition'] = function (pr53d_) {
      var ldx$au = this,
          qn1v8 = function () {
        var ozbwvx = pr53d_;return ldx$au[pr53d_['replace']('this.', '')];
      };return qn1v8;
    }, xobaw['EnvConfig'] = null, xobaw['window'] = null, xobaw['_preCreateElement'] = null, xobaw['_inited'] = ![], xobaw['wxRequest'] = null, xobaw['systemInfo'] = null, xobaw['version'] = '0.0.1', xobaw['isZiYu'] = ![], xobaw['isPosMsgYu'] = ![], xobaw['parseXMLFromString'] = function (axwubz) {
      var awozb, i4jm7;axwubz = axwubz['replace'](/>\s+</g, '><');try {
        awozb = new window['Parser']['DOMParser']()['parseFromString'](axwubz, 'text/xml');
      } catch (a$uld) {
        throw '需要引入xml解析库文件';
      }return awozb;
    }, xobaw['idx'] = 0x1, xobaw;
  }(),
      qn1v0 = function () {
    function oqvw() {}f53yg(oqvw, 'laya.wx.mini.MiniImage');var t4i7m = oqvw['prototype'];return t4i7m['_loadImage'] = function (d_lpr$) {
      var frp = this,
          k6h29 = ![];d_lpr$['indexOf']('layaNativeDir/') == -0x1 && (k6h29 = !![], d_lpr$ = nqvow['formatURL'](d_lpr$));if (!vnwb1['getFileInfo'](d_lpr$)) {
        if (d_lpr$['indexOf']('http://') != -0x1 || d_lpr$['indexOf']('https://') != -0x1) vnwb1['downImg'](d_lpr$, new r_p$dl(oqvw, oqvw['onDownImgCallBack'], [d_lpr$, frp]), d_lpr$);else oqvw['onCreateImage'](d_lpr$, frp, !![]);
      } else oqvw['onCreateImage'](d_lpr$, frp, !k6h29);
    }, oqvw['onDownImgCallBack'] = function (m7ejit, ket6h, hiekt6) {
      if (!hiekt6) oqvw['onCreateImage'](m7ejit, ket6h);else ket6h['onError'](null);
    }, oqvw['onCreateImage'] = function (r$d5p_, jm74ti, $rdp_) {
      $rdp_ === void 0x0 && ($rdp_ = ![]);var f3cgp5;if (!$rdp_) {
        var b1zv = vnwb1['getFileInfo'](r$d5p_),
            a$uld_ = b1zv['md5'];f3cgp5 = vnwb1['getFileNativePath'](a$uld_);
      } else f3cgp5 = r$d5p_;if (jm74ti['imgCache'] == null) jm74ti['imgCache'] = {};var kih6se;function $ul_r() {
        kih6se['onload'] = null, kih6se['onerror'] = null, delete jm74ti['imgCache'][r$d5p_];
      };var t7ih6 = function () {
        $ul_r(), jm74ti['onLoaded'](kih6se);
      },
          yf5gc3 = function () {
        $ul_r(), jm74ti['event']('error', 'Load image failed');
      };jm74ti['_type'] == 'nativeimage' ? (kih6se = new uld_a$['window']['Image'](), kih6se['crossOrigin'] = '', kih6se['onload'] = t7ih6, kih6se['onerror'] = yf5gc3, kih6se['src'] = f3cgp5, jm74ti['imgCache'][r$d5p_] = kih6se) : new ki6she['create'](f3cgp5, { 'onload': t7ih6, 'onerror': yf5gc3, 'onCreate': function (f5cyg3) {
          kih6se = f5cyg3, jm74ti['imgCache'][r$d5p_] = f5cyg3;
        } });
    }, oqvw;
  }(),
      o0qvn = function () {
    function w1vobn() {}return f53yg(w1vobn, 'laya.wx.mini.MiniInput'), w1vobn['_createInputElement'] = function () {
      ejht7['_initInput'](ejht7['area'] = uld_a$['createElement']('textarea')), ejht7['_initInput'](ejht7['input'] = uld_a$['createElement']('input')), ejht7['inputContainer'] = uld_a$['createElement']('div'), ejht7['inputContainer']['style']['position'] = 'absolute', ejht7['inputContainer']['style']['zIndex'] = 0x186a0, uld_a$['container']['appendChild'](ejht7['inputContainer']), ejht7['inputContainer']['setPos'] = function (n0qv, xbwazo) {
        ejht7['inputContainer']['style']['left'] = n0qv + 'px', ejht7['inputContainer']['style']['top'] = xbwazo + 'px';
      }, uxda$l['stage']['on']('resize', null, w1vobn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zovxw) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), skhe9['_soundClass'] = r5_pd$, skhe9['_musicClass'] = r5_pd$;
    }, w1vobn['_onStageResize'] = function () {
      var i67ht = uxda$l['stage']['_canvasTransform']['identity']();i67ht['scale'](uld_a$['width'] / ti6khe['canvas']['width'] / on1q['getPixelRatio'](), uld_a$['height'] / ti6khe['canvas']['height'] / on1q['getPixelRatio']());
    }, w1vobn['wxinputFocus'] = function (kiseh) {
      var ji7emt = ejht7['inputElement']['target'];if (ji7emt && !ji7emt['editable']) return;imtje['window']['wx']['offKeyboardConfirm'](), imtje['window']['wx']['offKeyboardInput'](), imtje['window']['wx']['showKeyboard']({ 'defaultValue': ji7emt['text'], 'maxLength': ji7emt['maxChars'], 'multiple': ji7emt['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zblxua) {}, 'fail': function (sihk) {} }), imtje['window']['wx']['onKeyboardConfirm'](function (bon1vw) {
        var vo1n0 = bon1vw ? bon1vw['value'] : '';ji7emt['text'] = vo1n0, ji7emt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), imtje['window']['wx']['onKeyboardInput'](function (ov10n) {
        var au$ld_ = ov10n ? ov10n['value'] : '';if (!ji7emt['multiline']) {
          if (au$ld_['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ji7emt['text'] = au$ld_, ji7emt['event']('input');
      });
    }, w1vobn['inputEnter'] = function () {
      ejht7['inputElement']['target']['focus'] = ![];
    }, w1vobn['wxinputblur'] = function () {
      w1vobn['hideKeyboard']();
    }, w1vobn['hideKeyboard'] = function () {
      imtje['window']['wx']['offKeyboardConfirm'](), imtje['window']['wx']['offKeyboardInput'](), imtje['window']['wx']['hideKeyboard']({ 'success': function (vw1zbo) {
          console['log']('隐藏键盘');
        }, 'fail': function (i74jm) {
          console['log']('隐藏键盘出错:' + (i74jm ? i74jm['errMsg'] : ''));
        } });
    }, w1vobn;
  }(),
      r_dp35 = function () {
    function n021q() {}f53yg(n021q, 'laya.wx.mini.MiniLoader');var m7jtei = n021q['prototype'];return m7jtei['load'] = function (k296sh, gf3cp, dx$lau, eihkt6, xvzob) {
      dx$lau === void 0x0 && (dx$lau = !![]), xvzob === void 0x0 && (xvzob = ![]);var $xulad = this;$xulad['_url'] = k296sh;if (k296sh['indexOf']('data:image') === 0x0) $xulad['_type'] = gf3cp = 'image';else $xulad['_type'] = gf3cp || (gf3cp = $xulad['getTypeFromUrl'](k296sh));$xulad['_cache'] = dx$lau, $xulad['_data'] = null;var emt = 'ascii';if (k296sh['indexOf']('.fnt') != -0x1) emt = 'utf8';else gf3cp == 'arraybuffer' && (emt = '');;var k0s829 = q29s0['getFileExtension'](k296sh);if (n021q['_fileTypeArr']['indexOf'](k0s829) != -0x1) imtje['EnvConfig']['load']['call'](this, k296sh, gf3cp, dx$lau, eihkt6, xvzob);else {
        if (!vnwb1['getFileInfo'](k296sh)) {
          if (k296sh['indexOf']('layaNativeDir/') != -0x1) {
            if (imtje['isZiYu']) {
              var uwzaxb = vnwb1['ziyuFileData'][k296sh];$xulad['onLoaded'](uwzaxb);return;
            } else {
              cosnole['log']('read read'), vnwb1['read'](k296sh, emt, new r_p$dl(n021q, n021q['onReadNativeCallBack'], [emt, k296sh, gf3cp, dx$lau, eihkt6, xvzob, $xulad]));return;
            }
          }if (nqvow['rootPath'] == '') var da_lu$ = k296sh;else da_lu$ = k296sh['split'](nqvow['rootPath'])[0x0];k296sh['indexOf']('http://') != -0x1 || k296sh['indexOf']('https://') != -0x1 ? imtje['EnvConfig']['load']['call']($xulad, k296sh, gf3cp, dx$lau, eihkt6, xvzob) : vnwb1['readFile'](da_lu$, emt, new r_p$dl(n021q, n021q['onReadNativeCallBack'], [emt, k296sh, gf3cp, dx$lau, eihkt6, xvzob, $xulad]), k296sh);
        } else imtje['EnvConfig']['load']['call'](this, k296sh, gf3cp, dx$lau, eihkt6, xvzob);
      }
    }, m7jtei['resMgrLoad'] = function (zaxwub, qn2081, n21q08, xzowab, mi7e, ovwbzx, pd35r_) {
      n21q08 === void 0x0 && (n21q08 = 0x0), xzowab === void 0x0 && (xzowab = ![]), mi7e === void 0x0 && (mi7e = ![]), ovwbzx === void 0x0 && (ovwbzx = 0x0), pd35r_ === void 0x0 && (pd35r_ = 0x3), zaxwub['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zaxwub), imtje['EnvConfig']['resMgrLoad'](zaxwub, (vqown, d_$a, ks92h) => {
        n021q['prototype']['resMgrLoadCallBack'](vqown, d_$a, ks92h, qn2081);
      }, n21q08, xzowab, mi7e, ovwbzx, pd35r_);
    }, m7jtei['resMgrLoadCallBack'] = function (hetij, r$u_d, e6khi, $p_5) {
      console['log']('buff:::', hetij, e6khi, vnwb1['fileNativeDir'] + '///' + vnwb1['fileListName']), $p_5(hetij, r$u_d, e6khi);
    }, m7jtei['clearRes'] = function (gcy5, t6eh7i) {
      t6eh7i === void 0x0 && (t6eh7i = ![]);var ik6e = this;ik6e['clearRes'](gcy5, t6eh7i);var rpg5_3 = vnwb1['getFileInfo'](gcy5);if (rpg5_3 && (gcy5['indexOf']('http://') != -0x1 || gcy5['indexOf']('https://') != -0x1)) {
        var drul_ = rpg5_3['md5'],
            $udxla = vnwb1['getFileNativePath'](drul_);vnwb1['remove']($udxla);
      }
    }, n021q['onReadNativeCallBack'] = function (k8962, _5r3p, ru_d$l, p5rfg, cy3, e6ht7, s8209k, i47tjm, $ud_a) {
      p5rfg === void 0x0 && (p5rfg = !![]), e6ht7 === void 0x0 && (e6ht7 = ![]), i47tjm === void 0x0 && (i47tjm = 0x0);if (!i47tjm) {
        var zlaxub;if (ru_d$l == 'json' || ru_d$l == 'atlas') zlaxub = imtje['getJson']($ud_a['data']);else ru_d$l == 'xml' ? zlaxub = q29s0['parseXMLFromString']($ud_a['data']) : zlaxub = $ud_a['data'];s8209k['onLoaded'](zlaxub), !imtje['isZiYu'] && imtje['isPosMsgYu'] && ru_d$l != 'arraybuffer' && wx['postMessage']({ 'url': _5r3p, 'data': zlaxub, 'isLoad': !![] });
      } else i47tjm == 0x1 && imtje['EnvConfig']['load']['call'](s8209k, _5r3p, ru_d$l, p5rfg, cy3, e6ht7);
    }, x$u(n021q, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), n021q;
  }(),
      vnwb1 = function (s2890q) {
    function vonbw1() {
      vonbw1['__super']['call'](this);;
    }return f53yg(vonbw1, 'laya.wx.mini.MiniFileMgr', s2890q), vonbw1['isLoadFile'] = function (p5d$r_) {
      return vonbw1['_fileTypeArr']['indexOf'](p5d$r_) != -0x1 ? !![] : ![];
    }, vonbw1['getFileInfo'] = function (jie7h) {
      var z1ovw = jie7h['split']('?')[0x0],
          k96s2 = vonbw1['filesListObj'][z1ovw];if (k96s2 == null) return null;else return k96s2;return null;
    }, vonbw1['onFileUpdate'] = function (qv081n, hekit6) {
      var abzoxw = qv081n['split']('/'),
          etmij7 = abzoxw[abzoxw['length'] - 0x1],
          s0982 = vonbw1['getFileInfo'](hekit6);if (s0982 == null) vonbw1['onSaveFile'](hekit6, etmij7);else {
        if (s0982['readyUrl'] != hekit6) vonbw1['remove'](etmij7, hekit6);
      }
    }, vonbw1['exits'] = function (a$ul_d, fy3gc) {
      var r_l$ = vonbw1['getFileNativePath'](a$ul_d);vonbw1['fs']['getFileInfo']({ 'filePath': r_l$, 'success': function (boz1w) {
          fy3gc != null && fy3gc['runWith']([0x0, boz1w]);
        }, 'fail': function (p$lrd_) {
          fy3gc != null && fy3gc['runWith']([0x1, p$lrd_]);
        } });
    }, vonbw1['read'] = function ($axuld, luadx, $azuxl, teihj) {
      luadx === void 0x0 && (luadx = 'ascill'), teihj === void 0x0 && (teihj = '');var skih6e;teihj != '' ? skih6e = vonbw1['getFileNativePath']($axuld) : skih6e = $axuld, vonbw1['fs']['readFile']({ 'filePath': skih6e, 'encoding': luadx, 'success': function (s6e9) {
          $azuxl != null && $azuxl['runWith']([0x0, s6e9]);
        }, 'fail': function (teikh) {
          if (teikh && teihj != '') vonbw1['down'](teihj, luadx, $azuxl, teihj);else $azuxl != null && $azuxl['runWith']([0x1]);
        } });
    }, vonbw1['readNativeFile'] = function (qo10, fcpg35) {
      vonbw1['fs']['readFile']({ 'filePath': qo10, 'encoding': '', 'success': function (s9k80) {
          fcpg35 != null && fcpg35['runWith']([0x0]);
        }, 'fail': function (esh) {
          fcpg35 != null && fcpg35['runWith']([0x1]);
        } });
    }, vonbw1['down'] = function (he, ks269h, g3rfp, gf5y3c) {
      ks269h === void 0x0 && (ks269h = 'ascill'), gf5y3c === void 0x0 && (gf5y3c = '');var iemt7 = vonbw1['getFileNativePath'](gf5y3c),
          prl$_ = vonbw1['wxdown']({ 'url': he, 'filePath': iemt7, 'success': function (ie6ks) {
          if (ie6ks['statusCode'] === 0xc8) vonbw1['readFile'](ie6ks['filePath'], ks269h, g3rfp, gf5y3c);
        }, 'fail': function (qvon) {
          g3rfp != null && g3rfp['runWith']([0x1, qvon]);
        } });prl$_['onProgressUpdate'](function (bazlx) {
        g3rfp != null && g3rfp['runWith']([0x2, bazlx['progress']]);
      });
    }, vonbw1['readFile'] = function (q0n128, jm7i4, f35cyg, $xlauz) {
      jm7i4 === void 0x0 && (jm7i4 = 'ascill'), $xlauz === void 0x0 && ($xlauz = ''), vonbw1['fs']['readFile']({ 'filePath': q0n128, 'encoding': jm7i4, 'success': function (s0q89) {
          if (q0n128['indexOf']('http://') != -0x1 || q0n128['indexOf']('https://') != -0x1) vonbw1['onFileUpdate'](q0n128, $xlauz);f35cyg != null && f35cyg['runWith']([0x0, s0q89]);
        }, 'fail': function (eikt) {
          if (eikt) f35cyg != null && f35cyg['runWith']([0x1, eikt]);
        } });
    }, vonbw1['downImg'] = function (a$_udl, novwq1, itme7) {
      itme7 === void 0x0 && (itme7 = '');var a$xuz = vonbw1['wxdown']({ 'url': a$_udl, 'success': function (s692k8) {
          s692k8['statusCode'] === 0xc8 && vonbw1['copyFile'](s692k8['tempFilePath'], itme7, novwq1);
        }, 'fail': function (k209s8) {
          novwq1 != null && novwq1['runWith']([0x1, k209s8]);
        } });
    }, vonbw1['copyFile'] = function (htek6, mt7e, g35y) {
      var t7eimj = htek6['split']('/'),
          l_du$a = t7eimj[t7eimj['length'] - 0x1],
          hsk9e6 = mt7e['split']('?')[0x0],
          g53p = vonbw1['getFileInfo'](mt7e),
          abxwu = vonbw1['getFileNativePath'](l_du$a);vonbw1['fs']['copyFile']({ 'srcPath': htek6, 'destPath': abxwu, 'success': function (k6se) {
          if (!g53p) vonbw1['onSaveFile'](mt7e, l_du$a), g35y != null && g35y['runWith']([0x0]);else {
            if (g53p['readyUrl'] != mt7e) vonbw1['remove'](l_du$a, mt7e, g35y);
          }
        }, 'fail': function (s8962) {
          g35y != null && g35y['runWith']([0x1, s8962]);
        } });
    }, vonbw1['getFileNativePath'] = function (s9q820) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s9q820;
    }, vonbw1['remove'] = function (q1onw, h7jet, wz1ovb) {
      h7jet === void 0x0 && (h7jet = '');var $rld_u = vonbw1['getFileInfo'](h7jet),
          dp5$ = vonbw1['getFileNativePath']($rld_u['md5']);uxda$l['loader']['clearRes']($rld_u['readyUrl']), vonbw1['fs']['unlink']({ 'filePath': dp5$, 'success': function (ud$alx) {
          if (h7jet != '') vonbw1['onSaveFile'](h7jet, q1onw);wz1ovb != null && wz1ovb['runWith']([0x0]);
        }, 'fail': function (lua_d) {} });
    }, vonbw1['onSaveFile'] = function (axzbwu, g5r_3p) {
      var wob1zv = axzbwu['split']('?')[0x0];vonbw1['filesListObj'][wob1zv] = { 'md5': g5r_3p, 'readyUrl': axzbwu }, vonbw1['fs']['writeFile']({ 'filePath': vonbw1['fileNativeDir'] + '/' + vonbw1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vonbw1['filesListObj']), 'success': function (owzab) {
          console['log']('写入测试测试成功：', owzab);
        }, 'fail': function (ozvxb) {
          console['log']('写入测试测试失败：', ozvxb);
        } });
    }, vonbw1['existDir'] = function (fcp5g3, es69hk) {
      vonbw1['fs']['mkdir']({ 'dirPath': fcp5g3, 'success': function (rp_5g3) {
          es69hk != null && es69hk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($udxal) {
          if ($udxal['errMsg']['indexOf']('file already exists') != -0x1) vonbw1['readSync'](vonbw1['fileListName'], 'utf8', es69hk);else es69hk != null && es69hk['runWith']([0x1, $udxal]);
        } });
    }, vonbw1['readSync'] = function (t7ej, $duax, hek6s9, _rpg) {
      $duax === void 0x0 && ($duax = 'ascill'), _rpg === void 0x0 && (_rpg = '');var _5$rdp = vonbw1['getFileNativePath'](t7ej),
          qvon0;try {
        qvon0 = vonbw1['fs']['readFileSync'](_5$rdp), hek6s9 != null && hek6s9['runWith']([0x0, { 'data': qvon0 }]);
      } catch (f5gyc) {
        hek6s9 != null && hek6s9['runWith']([0x1]);
      }
    }, vonbw1['readCache'] = function () {}, vonbw1['writeCache'] = function (wnv1) {
      var l_r$p = readyUrl['split']('?')[0x0];vonbw1['filesListObj'][l_r$p] = { 'md5': md5Name, 'readyUrl': readyUrl }, vonbw1['fs']['writeFile']({ 'filePath': vonbw1['fileNativeDir'] + '/' + vonbw1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vonbw1['filesListObj']), 'success': function (noqv0) {}, 'fail': function (_lru$) {} });
    }, vonbw1['setNativeFileDir'] = function (tji7m4) {
      vonbw1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tji7m4;
    }, vonbw1['filesListObj'] = {}, vonbw1['fileNativeDir'] = null, vonbw1['fileListName'] = 'layaairfiles.txt', vonbw1['ziyuFileData'] = {}, x$u(vonbw1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), vonbw1;
  }($xuald),
      r5_pd$ = function (_d$alu) {
    function cp3fg5() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cp3fg5['__super']['call'](this), this['_sound'] = cp3fg5['_createSound']();
    }f53yg(cp3fg5, 'laya.wx.mini.MiniSound', _d$alu);var jie7m = cp3fg5['prototype'];return jie7m['load'] = function (nvb1o) {
      var s9k2 = this;nvb1o = nqvow['formatURL'](nvb1o), this['url'] = nvb1o;if (cp3fg5['_audioCache'][nvb1o]) {
        this['event']('complete');return;
      }function l_d$() {
        if (cp3fg5['_null'] != undefined) s9k2['_sound']['onCanplay'](cp3fg5['_null']), s9k2['_sound']['onError'](cp3fg5['_null']);else try {
          s9k2['_sound']['onCanplay'](null), s9k2['_sound']['onError'](null), cp3fg5['_null'] = null;
        } catch (zaxblu) {
          console['warn']('[wxmini] _clearSound:' + zaxblu), s9k2['_sound']['onCanplay'](thj7), s9k2['_sound']['onError'](thj7), cp3fg5['_null'] = thj7;
        }
      }function gf5p3r() {
        l_d$(), xadu$['loaded'] = !![], xadu$['event']('complete'), cp3fg5['_audioCache'][xadu$['url']] = xadu$;
      }function lud$_a(zxoawb) {
        console['error']('errCode=' + zxoawb['errCode'] + '  errMsg=' + zxoawb['errMsg']), l_d$(), xadu$['event']('error');
      }function thj7() {}this['_sound']['onCanplay'](gf5p3r), this['_sound']['onError'](lud$_a), this['_sound']['src'] = nvb1o;var xadu$ = this;
    }, jie7m['play'] = function (n1bvo, pr$ld_) {
      n1bvo === void 0x0 && (n1bvo = 0x0), pr$ld_ === void 0x0 && (pr$ld_ = 0x0);var qnwov;if (this['url'] == skhe9['_tMusic']) {
        if (!cp3fg5['_musicAudio']) cp3fg5['_musicAudio'] = cp3fg5['_createSound']();qnwov = cp3fg5['_musicAudio'];
      } else qnwov = cp3fg5['_createSound']();qnwov['src'] = this['url'];var zobxv = new temi7(qnwov);return zobxv['url'] = this['url'], zobxv['loops'] = pr$ld_, zobxv['startTime'] = n1bvo, zobxv['play'](), skhe9['addChannel'](zobxv), zobxv;
    }, jie7m['dispose'] = function () {
      var $dpr5 = cp3fg5['_audioCache'][this['url']];$dpr5 && ($dpr5['src'] = '', delete cp3fg5['_audioCache'][this['url']]);
    }, kie6hs(0x0, jie7m, 'duration', function () {
      return this['_sound']['duration'];
    }), cp3fg5['_createSound'] = function () {
      return cp3fg5['_id']++, imtje['window']['wx']['createInnerAudioContext']();
    }, cp3fg5['_musicAudio'] = null, cp3fg5['_id'] = 0x0, cp3fg5['_audioCache'] = {}, cp3fg5['_null'] = undefined, cp3fg5;
  }($xuald),
      temi7 = function (qn9820) {
    function gr3p_5(q8029n) {
      this['_audio'] = null, this['_onEnd'] = null, gr3p_5['__super']['call'](this), this['_audio'] = q8029n, this['_onEnd'] = q29s0['bind'](this['__onEnd'], this), q8029n['onEnded'](this['_onEnd']);
    }f53yg(gr3p_5, 'laya.wx.mini.MiniSoundChannel', qn9820);var mtij47 = gr3p_5['prototype'];return mtij47['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (uxda$l['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mtij47['__onNull'] = function () {}, mtij47['play'] = function () {
      this['isStopped'] = ![], skhe9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, mtij47['stop'] = function () {
      this['isStopped'] = !![], skhe9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (gr3p_5['_null'] != undefined) this['_audio']['onEnded'](gr3p_5['_null']);else try {
        this['_audio']['onEnded'](null), gr3p_5['_null'] = null;
      } catch (vbxz) {
        console['warn']('[wxmini] stop:' + vbxz), this['_audio']['onEnded'](q29s0['bind'](this['__onNull'], this)), gr3p_5['_null'] = q29s0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, mtij47['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, mtij47['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], skhe9['addChannel'](this), this['_audio']['play']();
    }, kie6hs(0x0, mtij47, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), kie6hs(0x0, mtij47, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), kie6hs(0x0, mtij47, 'volume', function () {
      return 0x1;
    }, function (rf35gp) {}), gr3p_5['_null'] = undefined, gr3p_5;
  }(lxu$da);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jite7h in Laya) {
    var cyfg = Laya[jite7h];cyfg && cyfg['__isclass'] && (exports[jite7h] = cyfg);
  }
});