var U = wx.$k;
(function (window, document, $daxlu) {
  var e6ishk = $daxlu['un'],
      t7e = $daxlu['uns'],
      h9kes = $daxlu['static'],
      vw1nb = $daxlu['class'],
      azobxw = $daxlu['getset'],
      nq8290 = $daxlu['__newvec'],
      xlu$za = laya['utils']['Browser'],
      c53yg = laya['events']['Event'],
      audl$ = laya['events']['EventDispatcher'],
      t6hkei = laya['resource']['HTMLImage'],
      kseih = laya['utils']['Handler'],
      cp35gf = laya['display']['Input'],
      m4ji = laya['net']['Loader'],
      $xlauz = laya['maths']['Matrix'],
      vo1wnq = laya['renders']['Render'],
      r53g = laya['utils']['RunDriver'],
      zwov = laya['media']['Sound'],
      s6keh = laya['media']['SoundChannel'],
      zobwax = laya['media']['SoundManager'],
      dp$rl = laya['display']['Stage'],
      $axd = laya['net']['URL'],
      q0s829 = laya['utils']['Utils'],
      _lu$ad = function () {
    function lbau() {}return vw1nb(lbau, 'laya.wx.mini.MiniAdpter'), lbau['getJson'] = function (bwaox) {
      return JSON['parse'](bwaox);
    }, lbau['init'] = function (ulaz, xwbzov) {
      ulaz === void 0x0 && (ulaz = ![]), xwbzov === void 0x0 && (xwbzov = ![]);if (lbau['_inited']) return;lbau['window'] = window;if (lbau['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;lbau['_inited'] = !![], lbau['isZiYu'] = xwbzov, lbau['isPosMsgYu'] = ulaz, lbau['EnvConfig'] = {}, !lbau['isZiYu'] && (n90q2['setNativeFileDir']('/layaairGame'), n90q2['existDir'](n90q2['fileNativeDir'], kseih['create'](lbau, lbau['onMkdirCallBack']))), lbau['window']['focus'] = function () {}, $daxlu['getUrlPath'] = function () {}, lbau['window']['logtime'] = function (la_u$d) {}, lbau['window']['alertTimeLog'] = function (_g5) {}, lbau['window']['resetShareInfo'] = function () {}, lbau['window']['CanvasRenderingContext2D'] = function () {}, lbau['window']['CanvasRenderingContext2D']['prototype'] = lbau['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lbau['window']['document']['body']['appendChild'] = function () {}, lbau['EnvConfig']['pixelRatioInt'] = 0x0, r53g['getPixelRatio'] = lbau['pixelRatio'], lbau['_preCreateElement'] = xlu$za['createElement'], xlu$za['createElement'] = lbau['createElement'], r53g['createShaderCondition'] = lbau['createShaderCondition'], q0s829['parseXMLFromString'] = lbau['parseXMLFromString'], cp35gf['_createInputElement'] = $_rdp['_createInputElement'], lbau['EnvConfig']['load'] = m4ji['prototype']['load'], m4ji['prototype']['load'] = k6e9['prototype']['load'], lbau['isZiYu'] && ulaz && wx['onMessage'](function (e7h6ti) {
        e7h6ti['isLoad'] && (n90q2['ziyuFileData'][e7h6ti['url']] = e7h6ti['data']);
      });
    }, lbau['onMkdirCallBack'] = function (g5rf, vnwob) {
      if (!g5rf) n90q2['filesListObj'] = JSON['parse'](vnwob['data']);
    }, lbau['pixelRatio'] = function () {
      if (!lbau['EnvConfig']['pixelRatioInt']) try {
        var xa$ld = wx['getSystemInfoSync']();return lbau['EnvConfig']['pixelRatioInt'] = xa$ld['pixelRatio'], xa$ld = xa$ld, xa$ld['pixelRatio'];
      } catch (ietj7m) {}return lbau['EnvConfig']['pixelRatioInt'];
    }, lbau['createElement'] = function (xvzwbo) {
      if (xvzwbo == 'canvas') {
        var laxu$;return lbau['idx'] == 0x1 ? lbau['isZiYu'] ? (laxu$ = sharedCanvas, laxu$['style'] = {}) : laxu$ = window['canvas'] : laxu$ = window['wx']['createCanvas'](), lbau['idx']++, laxu$;
      } else {
        if (xvzwbo == 'textarea' || xvzwbo == 'input') return lbau['onCreateInput'](xvzwbo);else {
          if (xvzwbo == 'div') {
            var ozwvbx = lbau['_preCreateElement'](xvzwbo);return ozwvbx['contains'] = function (v0on1q) {
              return null;
            }, ozwvbx['removeChild'] = function (etijh) {}, ozwvbx;
          } else return lbau['_preCreateElement'](xvzwbo);
        }
      }
    }, lbau['onCreateInput'] = function (_$dr) {
      var wbzvo = lbau['_preCreateElement'](_$dr);return wbzvo['focus'] = $_rdp['wxinputFocus'], wbzvo['blur'] = $_rdp['wxinputblur'], wbzvo['style'] = {}, wbzvo['value'] = 0x0, wbzvo['parentElement'] = {}, wbzvo['placeholder'] = {}, wbzvo['type'] = {}, wbzvo['setColor'] = function (aludx$) {}, wbzvo['setType'] = function (s29k6) {}, wbzvo['setFontFace'] = function ($p_rd5) {}, wbzvo['addEventListener'] = function (d_lau$) {}, wbzvo['contains'] = function (rd_lu) {
        return null;
      }, wbzvo['removeChild'] = function (lbzax) {}, wbzvo;
    }, lbau['createShaderCondition'] = function (xzalub) {
      var hsk962 = this,
          k6h92 = function () {
        var xuwaz = xzalub;return hsk962[xzalub['replace']('this.', '')];
      };return k6h92;
    }, lbau['EnvConfig'] = null, lbau['window'] = null, lbau['_preCreateElement'] = null, lbau['_inited'] = ![], lbau['wxRequest'] = null, lbau['systemInfo'] = null, lbau['version'] = '0.0.1', lbau['isZiYu'] = ![], lbau['isPosMsgYu'] = ![], lbau['parseXMLFromString'] = function (dl$u_r) {
      var $la_u, tjie;dl$u_r = dl$u_r['replace'](/>\s+</g, '><');try {
        $la_u = new window['Parser']['DOMParser']()['parseFromString'](dl$u_r, 'text/xml');
      } catch (ietmj7) {
        throw '需要引入xml解析库文件';
      }return $la_u;
    }, lbau['idx'] = 0x1, lbau;
  }(),
      $zluax = function () {
    function azxwbo() {}vw1nb(azxwbo, 'laya.wx.mini.MiniImage');var zwab = azxwbo['prototype'];return zwab['_loadImage'] = function (fgp35c) {
      var v0n1o = this,
          s69k2 = ![];fgp35c['indexOf']('layaNativeDir/') == -0x1 && (s69k2 = !![], fgp35c = $axd['formatURL'](fgp35c));if (!n90q2['getFileInfo'](fgp35c)) {
        if (fgp35c['indexOf']('http://') != -0x1 || fgp35c['indexOf']('https://') != -0x1) n90q2['downImg'](fgp35c, new kseih(azxwbo, azxwbo['onDownImgCallBack'], [fgp35c, v0n1o]), fgp35c);else azxwbo['onCreateImage'](fgp35c, v0n1o, !![]);
      } else azxwbo['onCreateImage'](fgp35c, v0n1o, !s69k2);
    }, azxwbo['onDownImgCallBack'] = function (ovxbzw, l$udxa, prd5$) {
      if (!prd5$) azxwbo['onCreateImage'](ovxbzw, l$udxa);else l$udxa['onError'](null);
    }, azxwbo['onCreateImage'] = function (oqn01v, b1nw, wbovz) {
      wbovz === void 0x0 && (wbovz = ![]);var fr53;if (!wbovz) {
        var _$5dp = n90q2['getFileInfo'](oqn01v),
            i74 = _$5dp['md5'];fr53 = n90q2['getFileNativePath'](i74);
      } else fr53 = oqn01v;if (b1nw['imgCache'] == null) b1nw['imgCache'] = {};var vownq;function _$dlu() {
        vownq['onload'] = null, vownq['onerror'] = null, delete b1nw['imgCache'][oqn01v];
      };var etm = function () {
        _$dlu(), b1nw['onLoaded'](vownq);
      },
          h6eit = function () {
        _$dlu(), b1nw['event']('error', 'Load image failed');
      };b1nw['_type'] == 'nativeimage' ? (vownq = new xlu$za['window']['Image'](), vownq['crossOrigin'] = '', vownq['onload'] = etm, vownq['onerror'] = h6eit, vownq['src'] = fr53, b1nw['imgCache'][oqn01v] = vownq) : new t6hkei['create'](fr53, { 'onload': etm, 'onerror': h6eit, 'onCreate': function (abox) {
          vownq = abox, b1nw['imgCache'][oqn01v] = abox;
        } });
    }, azxwbo;
  }(),
      $_rdp = function () {
    function hsek6() {}return vw1nb(hsek6, 'laya.wx.mini.MiniInput'), hsek6['_createInputElement'] = function () {
      cp35gf['_initInput'](cp35gf['area'] = xlu$za['createElement']('textarea')), cp35gf['_initInput'](cp35gf['input'] = xlu$za['createElement']('input')), cp35gf['inputContainer'] = xlu$za['createElement']('div'), cp35gf['inputContainer']['style']['position'] = 'absolute', cp35gf['inputContainer']['style']['zIndex'] = 0x186a0, xlu$za['container']['appendChild'](cp35gf['inputContainer']), cp35gf['inputContainer']['setPos'] = function (r_dp$l, r5d_p3) {
        cp35gf['inputContainer']['style']['left'] = r_dp$l + 'px', cp35gf['inputContainer']['style']['top'] = r5d_p3 + 'px';
      }, $daxlu['stage']['on']('resize', null, hsek6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mi4t7j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), zobwax['_soundClass'] = von1wb, zobwax['_musicClass'] = von1wb;
    }, hsek6['_onStageResize'] = function () {
      var e7i6th = $daxlu['stage']['_canvasTransform']['identity']();e7i6th['scale'](xlu$za['width'] / vo1wnq['canvas']['width'] / r53g['getPixelRatio'](), xlu$za['height'] / vo1wnq['canvas']['height'] / r53g['getPixelRatio']());
    }, hsek6['wxinputFocus'] = function ($_ruld) {
      var r3p5d_ = cp35gf['inputElement']['target'];if (r3p5d_ && !r3p5d_['editable']) return;_lu$ad['window']['wx']['offKeyboardConfirm'](), _lu$ad['window']['wx']['offKeyboardInput'](), _lu$ad['window']['wx']['showKeyboard']({ 'defaultValue': r3p5d_['text'], 'maxLength': r3p5d_['maxChars'], 'multiple': r3p5d_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($_pdr) {}, 'fail': function (ekiht6) {} }), _lu$ad['window']['wx']['onKeyboardConfirm'](function (rlu$d_) {
        var woz1b = rlu$d_ ? rlu$d_['value'] : '';r3p5d_['text'] = woz1b, r3p5d_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _lu$ad['window']['wx']['onKeyboardInput'](function (dpr_) {
        var eth67 = dpr_ ? dpr_['value'] : '';if (!r3p5d_['multiline']) {
          if (eth67['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }r3p5d_['text'] = eth67, r3p5d_['event']('input');
      });
    }, hsek6['inputEnter'] = function () {
      cp35gf['inputElement']['target']['focus'] = ![];
    }, hsek6['wxinputblur'] = function () {
      hsek6['hideKeyboard']();
    }, hsek6['hideKeyboard'] = function () {
      _lu$ad['window']['wx']['offKeyboardConfirm'](), _lu$ad['window']['wx']['offKeyboardInput'](), _lu$ad['window']['wx']['hideKeyboard']({ 'success': function (_d3pr5) {
          console['log']('隐藏键盘');
        }, 'fail': function (xwboz) {
          console['log']('隐藏键盘出错:' + (xwboz ? xwboz['errMsg'] : ''));
        } });
    }, hsek6;
  }(),
      k6e9 = function () {
    function ovxbw() {}vw1nb(ovxbw, 'laya.wx.mini.MiniLoader');var $uxaz = ovxbw['prototype'];return $uxaz['load'] = function (nq089, ie6t7h, pr_, thij7, a$duxl) {
      pr_ === void 0x0 && (pr_ = !![]), a$duxl === void 0x0 && (a$duxl = ![]);var o1qnwv = this;o1qnwv['_url'] = nq089;if (nq089['indexOf']('data:image') === 0x0) o1qnwv['_type'] = ie6t7h = 'image';else o1qnwv['_type'] = ie6t7h || (ie6t7h = o1qnwv['getTypeFromUrl'](nq089));o1qnwv['_cache'] = pr_, o1qnwv['_data'] = null;var dlxa = 'ascii';if (nq089['indexOf']('.fnt') != -0x1) dlxa = 'utf8';else ie6t7h == 'arraybuffer' && (dlxa = '');;var p5r3g = q0s829['getFileExtension'](nq089);if (ovxbw['_fileTypeArr']['indexOf'](p5r3g) != -0x1) _lu$ad['EnvConfig']['load']['call'](this, nq089, ie6t7h, pr_, thij7, a$duxl);else {
        if (!n90q2['getFileInfo'](nq089)) {
          if (nq089['indexOf']('layaNativeDir/') != -0x1) {
            if (_lu$ad['isZiYu']) {
              var j7ieht = n90q2['ziyuFileData'][nq089];o1qnwv['onLoaded'](j7ieht);return;
            } else {
              cosnole['log']('read read'), n90q2['read'](nq089, dlxa, new kseih(ovxbw, ovxbw['onReadNativeCallBack'], [dlxa, nq089, ie6t7h, pr_, thij7, a$duxl, o1qnwv]));return;
            }
          }if ($axd['rootPath'] == '') var axbwzu = nq089;else axbwzu = nq089['split']($axd['rootPath'])[0x0];nq089['indexOf']('http://') != -0x1 || nq089['indexOf']('https://') != -0x1 ? _lu$ad['EnvConfig']['load']['call'](o1qnwv, nq089, ie6t7h, pr_, thij7, a$duxl) : n90q2['readFile'](axbwzu, dlxa, new kseih(ovxbw, ovxbw['onReadNativeCallBack'], [dlxa, nq089, ie6t7h, pr_, thij7, a$duxl, o1qnwv]), nq089);
        } else _lu$ad['EnvConfig']['load']['call'](this, nq089, ie6t7h, pr_, thij7, a$duxl);
      }
    }, $uxaz['resMgrLoad'] = function (p3fr5, q9820s, q82, $zuxla, jet7mi, p_rld, wozv1) {
      q82 === void 0x0 && (q82 = 0x0), $zuxla === void 0x0 && ($zuxla = ![]), jet7mi === void 0x0 && (jet7mi = ![]), p_rld === void 0x0 && (p_rld = 0x0), wozv1 === void 0x0 && (wozv1 = 0x3), p3fr5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', p3fr5), _lu$ad['EnvConfig']['resMgrLoad'](p3fr5, (m7jit4, fp35r, ehk) => {
        ovxbw['prototype']['resMgrLoadCallBack'](m7jit4, fp35r, ehk, q9820s);
      }, q82, $zuxla, jet7mi, p_rld, wozv1);
    }, $uxaz['resMgrLoadCallBack'] = function (s92, $5_dpr, rgp53f, s2q908) {
      console['log']('buff:::', s92, rgp53f, n90q2['fileNativeDir'] + '///' + n90q2['fileListName']), s2q908(s92, $5_dpr, rgp53f);
    }, $uxaz['clearRes'] = function (prdl$, fc5g3y) {
      fc5g3y === void 0x0 && (fc5g3y = ![]);var _rd$5p = this;_rd$5p['clearRes'](prdl$, fc5g3y);var vn1b = n90q2['getFileInfo'](prdl$);if (vn1b && (prdl$['indexOf']('http://') != -0x1 || prdl$['indexOf']('https://') != -0x1)) {
        var r_ud = vn1b['md5'],
            dplr_$ = n90q2['getFileNativePath'](r_ud);n90q2['remove'](dplr_$);
      }
    }, ovxbw['onReadNativeCallBack'] = function (jmi7et, p5rd3, nwv1bo, jmtei7, hsk6ei, u_l$dr, lp$r_d, b1vwn, rg3p) {
      jmtei7 === void 0x0 && (jmtei7 = !![]), u_l$dr === void 0x0 && (u_l$dr = ![]), b1vwn === void 0x0 && (b1vwn = 0x0);if (!b1vwn) {
        var lrdu$_;if (nwv1bo == 'json' || nwv1bo == 'atlas') lrdu$_ = _lu$ad['getJson'](rg3p['data']);else nwv1bo == 'xml' ? lrdu$_ = q0s829['parseXMLFromString'](rg3p['data']) : lrdu$_ = rg3p['data'];lp$r_d['onLoaded'](lrdu$_), !_lu$ad['isZiYu'] && _lu$ad['isPosMsgYu'] && nwv1bo != 'arraybuffer' && wx['postMessage']({ 'url': p5rd3, 'data': lrdu$_, 'isLoad': !![] });
      } else b1vwn == 0x1 && _lu$ad['EnvConfig']['load']['call'](lp$r_d, p5rd3, nwv1bo, jmtei7, hsk6ei, u_l$dr);
    }, h9kes(ovxbw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ovxbw;
  }(),
      n90q2 = function (nq1v08) {
    function p5$rd_() {
      p5$rd_['__super']['call'](this);;
    }return vw1nb(p5$rd_, 'laya.wx.mini.MiniFileMgr', nq1v08), p5$rd_['isLoadFile'] = function (pg_3r5) {
      return p5$rd_['_fileTypeArr']['indexOf'](pg_3r5) != -0x1 ? !![] : ![];
    }, p5$rd_['getFileInfo'] = function (l_dru) {
      var p_3d = l_dru['split']('?')[0x0],
          nvqo01 = p5$rd_['filesListObj'][p_3d];if (nvqo01 == null) return null;else return nvqo01;return null;
    }, p5$rd_['onFileUpdate'] = function (eikhs6, s90k28) {
      var frg53p = eikhs6['split']('/'),
          pc3f = frg53p[frg53p['length'] - 0x1],
          grp35_ = p5$rd_['getFileInfo'](s90k28);if (grp35_ == null) p5$rd_['onSaveFile'](s90k28, pc3f);else {
        if (grp35_['readyUrl'] != s90k28) p5$rd_['remove'](pc3f, s90k28);
      }
    }, p5$rd_['exits'] = function (du_lr$, p$r_d5) {
      var _l$ur = p5$rd_['getFileNativePath'](du_lr$);p5$rd_['fs']['getFileInfo']({ 'filePath': _l$ur, 'success': function ($_rul) {
          p$r_d5 != null && p$r_d5['runWith']([0x0, $_rul]);
        }, 'fail': function (pd5_$r) {
          p$r_d5 != null && p$r_d5['runWith']([0x1, pd5_$r]);
        } });
    }, p5$rd_['read'] = function (bxua, novq1, ua_dl, n8q209) {
      novq1 === void 0x0 && (novq1 = 'ascill'), n8q209 === void 0x0 && (n8q209 = '');var _p3rd5;n8q209 != '' ? _p3rd5 = p5$rd_['getFileNativePath'](bxua) : _p3rd5 = bxua, p5$rd_['fs']['readFile']({ 'filePath': _p3rd5, 'encoding': novq1, 'success': function (vn0q18) {
          ua_dl != null && ua_dl['runWith']([0x0, vn0q18]);
        }, 'fail': function (bluax) {
          if (bluax && n8q209 != '') p5$rd_['down'](n8q209, novq1, ua_dl, n8q209);else ua_dl != null && ua_dl['runWith']([0x1]);
        } });
    }, p5$rd_['readNativeFile'] = function (b1onwv, r$_ld) {
      p5$rd_['fs']['readFile']({ 'filePath': b1onwv, 'encoding': '', 'success': function (i7tem) {
          r$_ld != null && r$_ld['runWith']([0x0]);
        }, 'fail': function (ua_$dl) {
          r$_ld != null && r$_ld['runWith']([0x1]);
        } });
    }, p5$rd_['down'] = function (awboxz, p5gcf3, vb1w, ih7et6) {
      p5gcf3 === void 0x0 && (p5gcf3 = 'ascill'), ih7et6 === void 0x0 && (ih7et6 = '');var kh6s29 = p5$rd_['getFileNativePath'](ih7et6),
          m74ti = p5$rd_['wxdown']({ 'url': awboxz, 'filePath': kh6s29, 'success': function (rd_lp) {
          if (rd_lp['statusCode'] === 0xc8) p5$rd_['readFile'](rd_lp['filePath'], p5gcf3, vb1w, ih7et6);
        }, 'fail': function (pfgc) {
          vb1w != null && vb1w['runWith']([0x1, pfgc]);
        } });m74ti['onProgressUpdate'](function (q280n9) {
        vb1w != null && vb1w['runWith']([0x2, q280n9['progress']]);
      });
    }, p5$rd_['readFile'] = function (vwnq, teh76i, n92q0, fr3g5p) {
      teh76i === void 0x0 && (teh76i = 'ascill'), fr3g5p === void 0x0 && (fr3g5p = ''), p5$rd_['fs']['readFile']({ 'filePath': vwnq, 'encoding': teh76i, 'success': function (yfg5c3) {
          if (vwnq['indexOf']('http://') != -0x1 || vwnq['indexOf']('https://') != -0x1) p5$rd_['onFileUpdate'](vwnq, fr3g5p);n92q0 != null && n92q0['runWith']([0x0, yfg5c3]);
        }, 'fail': function (prld_$) {
          if (prld_$) n92q0 != null && n92q0['runWith']([0x1, prld_$]);
        } });
    }, p5$rd_['downImg'] = function ($l_dau, buazl, d_ul$a) {
      d_ul$a === void 0x0 && (d_ul$a = '');var wvnq = p5$rd_['wxdown']({ 'url': $l_dau, 'success': function (qnow1v) {
          qnow1v['statusCode'] === 0xc8 && p5$rd_['copyFile'](qnow1v['tempFilePath'], d_ul$a, buazl);
        }, 'fail': function (dp5$r) {
          buazl != null && buazl['runWith']([0x1, dp5$r]);
        } });
    }, p5$rd_['copyFile'] = function (rp_53g, g3c5y, r3p_) {
      var u$zlax = rp_53g['split']('/'),
          $r_dp5 = u$zlax[u$zlax['length'] - 0x1],
          uwazb = g3c5y['split']('?')[0x0],
          $zua = p5$rd_['getFileInfo'](g3c5y),
          q29s80 = p5$rd_['getFileNativePath']($r_dp5);p5$rd_['fs']['copyFile']({ 'srcPath': rp_53g, 'destPath': q29s80, 'success': function (q92n) {
          if (!$zua) p5$rd_['onSaveFile'](g3c5y, $r_dp5), r3p_ != null && r3p_['runWith']([0x0]);else {
            if ($zua['readyUrl'] != g3c5y) p5$rd_['remove']($r_dp5, g3c5y, r3p_);
          }
        }, 'fail': function (q1n02) {
          r3p_ != null && r3p_['runWith']([0x1, q1n02]);
        } });
    }, p5$rd_['getFileNativePath'] = function (qo) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + qo;
    }, p5$rd_['remove'] = function (pc53gf, bwzvo, cgf3y) {
      bwzvo === void 0x0 && (bwzvo = '');var c5pfg3 = p5$rd_['getFileInfo'](bwzvo),
          vwb1no = p5$rd_['getFileNativePath'](c5pfg3['md5']);$daxlu['loader']['clearRes'](c5pfg3['readyUrl']), p5$rd_['fs']['unlink']({ 'filePath': vwb1no, 'success': function (ld_pr$) {
          if (bwzvo != '') p5$rd_['onSaveFile'](bwzvo, pc53gf);cgf3y != null && cgf3y['runWith']([0x0]);
        }, 'fail': function (gp5fc3) {} });
    }, p5$rd_['onSaveFile'] = function (w1novb, ies6kh) {
      var zxwbu = w1novb['split']('?')[0x0];p5$rd_['filesListObj'][zxwbu] = { 'md5': ies6kh, 'readyUrl': w1novb }, p5$rd_['fs']['writeFile']({ 'filePath': p5$rd_['fileNativeDir'] + '/' + p5$rd_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](p5$rd_['filesListObj']), 'success': function (bvo1z) {
          console['log']('写入测试测试成功：', bvo1z);
        }, 'fail': function (zaxw) {
          console['log']('写入测试测试失败：', zaxw);
        } });
    }, p5$rd_['existDir'] = function (vn01oq, eijht) {
      p5$rd_['fs']['mkdir']({ 'dirPath': vn01oq, 'success': function (l_p$d) {
          eijht != null && eijht['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (p_dr$) {
          if (p_dr$['errMsg']['indexOf']('file already exists') != -0x1) p5$rd_['readSync'](p5$rd_['fileListName'], 'utf8', eijht);else eijht != null && eijht['runWith']([0x1, p_dr$]);
        } });
    }, p5$rd_['readSync'] = function (ks209, t67ihe, wbvzx, wzuax) {
      t67ihe === void 0x0 && (t67ihe = 'ascill'), wzuax === void 0x0 && (wzuax = '');var i7tjm4 = p5$rd_['getFileNativePath'](ks209),
          l$rdp;try {
        l$rdp = p5$rd_['fs']['readFileSync'](i7tjm4), wbvzx != null && wbvzx['runWith']([0x0, { 'data': l$rdp }]);
      } catch (uzabxl) {
        wbvzx != null && wbvzx['runWith']([0x1]);
      }
    }, p5$rd_['readCache'] = function () {}, p5$rd_['writeCache'] = function (ulza$x) {
      var xwvbo = readyUrl['split']('?')[0x0];p5$rd_['filesListObj'][xwvbo] = { 'md5': md5Name, 'readyUrl': readyUrl }, p5$rd_['fs']['writeFile']({ 'filePath': p5$rd_['fileNativeDir'] + '/' + p5$rd_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](p5$rd_['filesListObj']), 'success': function (d$u_la) {}, 'fail': function (q890) {} });
    }, p5$rd_['setNativeFileDir'] = function (gp3c5) {
      p5$rd_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gp3c5;
    }, p5$rd_['filesListObj'] = {}, p5$rd_['fileNativeDir'] = null, p5$rd_['fileListName'] = 'layaairfiles.txt', p5$rd_['ziyuFileData'] = {}, h9kes(p5$rd_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), p5$rd_;
  }(audl$),
      von1wb = function (rp5_g) {
    function qv0n8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qv0n8['__super']['call'](this), this['_sound'] = qv0n8['_createSound']();
    }vw1nb(qv0n8, 'laya.wx.mini.MiniSound', rp5_g);var ovq1nw = qv0n8['prototype'];return ovq1nw['load'] = function (h76tei) {
      var s9q80 = this;h76tei = $axd['formatURL'](h76tei), this['url'] = h76tei;if (qv0n8['_audioCache'][h76tei]) {
        this['event']('complete');return;
      }function lda() {
        if (qv0n8['_null'] != undefined) s9q80['_sound']['onCanplay'](qv0n8['_null']), s9q80['_sound']['onError'](qv0n8['_null']);else try {
          s9q80['_sound']['onCanplay'](null), s9q80['_sound']['onError'](null), qv0n8['_null'] = null;
        } catch (r$d_p) {
          console['warn']('[wxmini] _clearSound:' + r$d_p), s9q80['_sound']['onCanplay'](drpl_), s9q80['_sound']['onError'](drpl_), qv0n8['_null'] = drpl_;
        }
      }function hjt7ei() {
        lda(), dx$lau['loaded'] = !![], dx$lau['event']('complete'), qv0n8['_audioCache'][dx$lau['url']] = dx$lau;
      }function gp53(kihse) {
        console['error']('errCode=' + kihse['errCode'] + '  errMsg=' + kihse['errMsg']), lda(), dx$lau['event']('error');
      }function drpl_() {}this['_sound']['onCanplay'](hjt7ei), this['_sound']['onError'](gp53), this['_sound']['src'] = h76tei;var dx$lau = this;
    }, ovq1nw['play'] = function (bazo, f5g3y) {
      bazo === void 0x0 && (bazo = 0x0), f5g3y === void 0x0 && (f5g3y = 0x0);var _r$dlu;if (this['url'] == zobwax['_tMusic']) {
        if (!qv0n8['_musicAudio']) qv0n8['_musicAudio'] = qv0n8['_createSound']();_r$dlu = qv0n8['_musicAudio'];
      } else _r$dlu = qv0n8['_createSound']();_r$dlu['src'] = this['url'];var ygc35f = new heki6(_r$dlu);return ygc35f['url'] = this['url'], ygc35f['loops'] = f5g3y, ygc35f['startTime'] = bazo, ygc35f['play'](), zobwax['addChannel'](ygc35f), ygc35f;
    }, ovq1nw['dispose'] = function () {
      var uxlda$ = qv0n8['_audioCache'][this['url']];uxlda$ && (uxlda$['src'] = '', delete qv0n8['_audioCache'][this['url']]);
    }, azobxw(0x0, ovq1nw, 'duration', function () {
      return this['_sound']['duration'];
    }), qv0n8['_createSound'] = function () {
      return qv0n8['_id']++, _lu$ad['window']['wx']['createInnerAudioContext']();
    }, qv0n8['_musicAudio'] = null, qv0n8['_id'] = 0x0, qv0n8['_audioCache'] = {}, qv0n8['_null'] = undefined, qv0n8;
  }(audl$),
      heki6 = function (azbox) {
    function wzbx(emtj7) {
      this['_audio'] = null, this['_onEnd'] = null, wzbx['__super']['call'](this), this['_audio'] = emtj7, this['_onEnd'] = q0s829['bind'](this['__onEnd'], this), emtj7['onEnded'](this['_onEnd']);
    }vw1nb(wzbx, 'laya.wx.mini.MiniSoundChannel', azbox);var buxaw = wzbx['prototype'];return buxaw['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($daxlu['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, buxaw['__onNull'] = function () {}, buxaw['play'] = function () {
      this['isStopped'] = ![], zobwax['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, buxaw['stop'] = function () {
      this['isStopped'] = !![], zobwax['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wzbx['_null'] != undefined) this['_audio']['onEnded'](wzbx['_null']);else try {
        this['_audio']['onEnded'](null), wzbx['_null'] = null;
      } catch ($_dulr) {
        console['warn']('[wxmini] stop:' + $_dulr), this['_audio']['onEnded'](q0s829['bind'](this['__onNull'], this)), wzbx['_null'] = q0s829['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, buxaw['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, buxaw['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], zobwax['addChannel'](this), this['_audio']['play']();
    }, azobxw(0x0, buxaw, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), azobxw(0x0, buxaw, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), azobxw(0x0, buxaw, 'volume', function () {
      return 0x1;
    }, function (udal$_) {}), wzbx['_null'] = undefined, wzbx;
  }(s6keh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ux in Laya) {
    var kh629 = Laya[ux];kh629 && kh629['__isclass'] && (exports[ux] = kh629);
  }
});