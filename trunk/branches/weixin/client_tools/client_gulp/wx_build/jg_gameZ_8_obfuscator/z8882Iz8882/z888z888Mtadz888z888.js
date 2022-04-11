var G = wx.$G;
(function (window, document, u1o4fd) {
  var xbtzn = u1o4fd['un'],
      wo1u4d = u1o4fd['uns'],
      qe$3r = u1o4fd['static'],
      xnbtiz = u1o4fd['class'],
      jcyih2 = u1o4fd['getset'],
      d4fo5k = u1o4fd['__newvec'],
      hty2ix = laya['utils']['Browser'],
      zxnib = laya['events']['Event'],
      q_ers = laya['events']['EventDispatcher'],
      txnzi = laya['resource']['HTMLImage'],
      nz = laya['utils']['Handler'],
      wdu1o4 = laya['display']['Input'],
      tyhxbi = laya['net']['Loader'],
      h2yci = laya['maths']['Matrix'],
      tbzm = laya['renders']['Render'],
      puw10o = laya['utils']['RunDriver'],
      _eqs = laya['media']['Sound'],
      yxtnb = laya['media']['SoundChannel'],
      vfk = laya['media']['SoundManager'],
      hty = laya['display']['Stage'],
      lq8673 = laya['net']['URL'],
      i2htx = laya['utils']['Utils'],
      odwu14 = function () {
    function mntzbx() {}return xnbtiz(mntzbx, 'laya.wx.mini.MiniAdpter'), mntzbx['getJson'] = function (k5odf4) {
      return JSON['parse'](k5odf4);
    }, mntzbx['init'] = function (nzs_mr, ko4df) {
      nzs_mr === void 0x0 && (nzs_mr = ![]), ko4df === void 0x0 && (ko4df = ![]);if (mntzbx['_inited']) return;mntzbx['window'] = window;if (mntzbx['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;mntzbx['_inited'] = !![], mntzbx['isZiYu'] = ko4df, mntzbx['isPosMsgYu'] = nzs_mr, mntzbx['EnvConfig'] = {}, !mntzbx['isZiYu'] && ($s_me['setNativeFileDir']('/layaairGame'), $s_me['existDir']($s_me['fileNativeDir'], nz['create'](mntzbx, mntzbx['onMkdirCallBack']))), mntzbx['window']['focus'] = function () {}, u1o4fd['getUrlPath'] = function () {}, mntzbx['window']['logtime'] = function (al86v7) {}, mntzbx['window']['alertTimeLog'] = function (o4kf) {}, mntzbx['window']['resetShareInfo'] = function () {}, mntzbx['window']['CanvasRenderingContext2D'] = function () {}, mntzbx['window']['CanvasRenderingContext2D']['prototype'] = mntzbx['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mntzbx['window']['document']['body']['appendChild'] = function () {}, mntzbx['EnvConfig']['pixelRatioInt'] = 0x0, puw10o['getPixelRatio'] = mntzbx['pixelRatio'], mntzbx['_preCreateElement'] = hty2ix['createElement'], hty2ix['createElement'] = mntzbx['createElement'], puw10o['createShaderCondition'] = mntzbx['createShaderCondition'], i2htx['parseXMLFromString'] = mntzbx['parseXMLFromString'], wdu1o4['_createInputElement'] = kd5fa['_createInputElement'], mntzbx['EnvConfig']['load'] = tyhxbi['prototype']['load'], tyhxbi['prototype']['load'] = al76vk['prototype']['load'], mntzbx['isZiYu'] && nzs_mr && wx['onMessage'](function (hjyc2) {
        hjyc2['isLoad'] && ($s_me['ziyuFileData'][hjyc2['url']] = hjyc2['data']);
      });
    }, mntzbx['onMkdirCallBack'] = function (lq8e$3, s_zn) {
      if (!lq8e$3) $s_me['filesListObj'] = JSON['parse'](s_zn['data']);
    }, mntzbx['pixelRatio'] = function () {
      if (!mntzbx['EnvConfig']['pixelRatioInt']) try {
        var znxi = wx['getSystemInfoSync']();return mntzbx['EnvConfig']['pixelRatioInt'] = znxi['pixelRatio'], znxi = znxi, znxi['pixelRatio'];
      } catch (kf4da) {}return mntzbx['EnvConfig']['pixelRatioInt'];
    }, mntzbx['createElement'] = function ($q38el) {
      if ($q38el == 'canvas') {
        var htybix;return mntzbx['idx'] == 0x1 ? mntzbx['isZiYu'] ? (htybix = sharedCanvas, htybix['style'] = {}) : htybix = window['canvas'] : htybix = window['wx']['createCanvas'](), mntzbx['idx']++, htybix;
      } else {
        if ($q38el == 'textarea' || $q38el == 'input') return mntzbx['onCreateInput']($q38el);else {
          if ($q38el == 'div') {
            var u1owd0 = mntzbx['_preCreateElement']($q38el);return u1owd0['contains'] = function (tnib) {
              return null;
            }, u1owd0['removeChild'] = function (v67la) {}, u1owd0;
          } else return mntzbx['_preCreateElement']($q38el);
        }
      }
    }, mntzbx['onCreateInput'] = function (ixtby) {
      var rsmn_ = mntzbx['_preCreateElement'](ixtby);return rsmn_['focus'] = kd5fa['wxinputFocus'], rsmn_['blur'] = kd5fa['wxinputblur'], rsmn_['style'] = {}, rsmn_['value'] = 0x0, rsmn_['parentElement'] = {}, rsmn_['placeholder'] = {}, rsmn_['type'] = {}, rsmn_['setColor'] = function (xtibn) {}, rsmn_['setType'] = function (a4f5kd) {}, rsmn_['setFontFace'] = function (p09w1u) {}, rsmn_['addEventListener'] = function (udf1) {}, rsmn_['contains'] = function (nxtiyb) {
        return null;
      }, rsmn_['removeChild'] = function (yx2ich) {}, rsmn_;
    }, mntzbx['createShaderCondition'] = function ($r_mzs) {
      var rq$e_s = this,
          od4fu5 = function () {
        var ser$ = $r_mzs;return rq$e_s[$r_mzs['replace']('this.', '')];
      };return od4fu5;
    }, mntzbx['EnvConfig'] = null, mntzbx['window'] = null, mntzbx['_preCreateElement'] = null, mntzbx['_inited'] = ![], mntzbx['wxRequest'] = null, mntzbx['systemInfo'] = null, mntzbx['version'] = '0.0.1', mntzbx['isZiYu'] = ![], mntzbx['isPosMsgYu'] = ![], mntzbx['parseXMLFromString'] = function (nxbtmz) {
      var $m_rse, mnzbs;nxbtmz = nxbtmz['replace'](/>\s+</g, '><');try {
        $m_rse = new window['Parser']['DOMParser']()['parseFromString'](nxbtmz, 'text/xml');
      } catch (zibxn) {
        throw '需要引入xml解析库文件';
      }return $m_rse;
    }, mntzbx['idx'] = 0x1, mntzbx;
  }(),
      wg9p0 = function () {
    function yixb() {}xnbtiz(yixb, 'laya.wx.mini.MiniImage');var f5kd4a = yixb['prototype'];return f5kd4a['_loadImage'] = function (xityhb) {
      var ycj2 = this,
          ztbmxn = ![];xityhb['indexOf']('layaNativeDir/') == -0x1 && (ztbmxn = !![], xityhb = lq8673['formatURL'](xityhb));if (!$s_me['getFileInfo'](xityhb)) {
        if (xityhb['indexOf']('http://') != -0x1 || xityhb['indexOf']('https://') != -0x1) $s_me['downImg'](xityhb, new nz(yixb, yixb['onDownImgCallBack'], [xityhb, ycj2]), xityhb);else yixb['onCreateImage'](xityhb, ycj2, !![]);
      } else yixb['onCreateImage'](xityhb, ycj2, !ztbmxn);
    }, yixb['onDownImgCallBack'] = function (s_$qr, ijhy2, msz_$) {
      if (!msz_$) yixb['onCreateImage'](s_$qr, ijhy2);else ijhy2['onError'](null);
    }, yixb['onCreateImage'] = function (q_3r, vk67, tyhbi) {
      tyhbi === void 0x0 && (tyhbi = ![]);var re3$q_;if (!tyhbi) {
        var l8qe6 = $s_me['getFileInfo'](q_3r),
            fv7a5 = l8qe6['md5'];re3$q_ = $s_me['getFileNativePath'](fv7a5);
      } else re3$q_ = q_3r;if (vk67['imgCache'] == null) vk67['imgCache'] = {};var ak6lv7;function xcy2i() {
        ak6lv7['onload'] = null, ak6lv7['onerror'] = null, delete vk67['imgCache'][q_3r];
      };var e$l8 = function () {
        xcy2i(), vk67['onLoaded'](ak6lv7);
      },
          wp0uo = function () {
        xcy2i(), vk67['event']('error', 'Load image failed');
      };vk67['_type'] == 'nativeimage' ? (ak6lv7 = new hty2ix['window']['Image'](), ak6lv7['crossOrigin'] = '', ak6lv7['onload'] = e$l8, ak6lv7['onerror'] = wp0uo, ak6lv7['src'] = re3$q_, vk67['imgCache'][q_3r] = ak6lv7) : new txnzi['create'](re3$q_, { 'onload': e$l8, 'onerror': wp0uo, 'onCreate': function (hcij2y) {
          ak6lv7 = hcij2y, vk67['imgCache'][q_3r] = hcij2y;
        } });
    }, yixb;
  }(),
      kd5fa = function () {
    function d5f4o() {}return xnbtiz(d5f4o, 'laya.wx.mini.MiniInput'), d5f4o['_createInputElement'] = function () {
      wdu1o4['_initInput'](wdu1o4['area'] = hty2ix['createElement']('textarea')), wdu1o4['_initInput'](wdu1o4['input'] = hty2ix['createElement']('input')), wdu1o4['inputContainer'] = hty2ix['createElement']('div'), wdu1o4['inputContainer']['style']['position'] = 'absolute', wdu1o4['inputContainer']['style']['zIndex'] = 0x186a0, hty2ix['container']['appendChild'](wdu1o4['inputContainer']), wdu1o4['inputContainer']['setPos'] = function (txhyib, lak76v) {
        wdu1o4['inputContainer']['style']['left'] = txhyib + 'px', wdu1o4['inputContainer']['style']['top'] = lak76v + 'px';
      }, u1o4fd['stage']['on']('resize', null, d5f4o['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (df1o4u) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vfk['_soundClass'] = xiythb, vfk['_musicClass'] = xiythb, window['_videoClass'] = l7q36;
    }, d5f4o['_onStageResize'] = function () {
      var x2hyit = u1o4fd['stage']['_canvasTransform']['identity']();x2hyit['scale'](hty2ix['width'] / tbzm['canvas']['width'] / puw10o['getPixelRatio'](), hty2ix['height'] / tbzm['canvas']['height'] / puw10o['getPixelRatio']());
    }, d5f4o['wxinputFocus'] = function (xhbyi) {
      var l8e6q = wdu1o4['inputElement']['target'];if (l8e6q && !l8e6q['editable']) return;odwu14['window']['wx']['offKeyboardConfirm'](), odwu14['window']['wx']['offKeyboardInput'](), odwu14['window']['wx']['showKeyboard']({ 'defaultValue': l8e6q['text'], 'maxLength': l8e6q['maxChars'], 'multiple': l8e6q['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yibtnx) {}, 'fail': function (bnzt) {} }), odwu14['window']['wx']['onKeyboardConfirm'](function (mrsb) {
        var ql3$e8 = mrsb ? mrsb['value'] : '';l8e6q['text'] = ql3$e8, l8e6q['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), odwu14['window']['wx']['onKeyboardInput'](function (fak5d) {
        var pw01o = fak5d ? fak5d['value'] : '';if (!l8e6q['multiline']) {
          if (pw01o['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }l8e6q['text'] = pw01o, l8e6q['event']('input');
      });
    }, d5f4o['inputEnter'] = function () {
      wdu1o4['inputElement']['target']['focus'] = ![];
    }, d5f4o['wxinputblur'] = function () {
      d5f4o['hideKeyboard']();
    }, d5f4o['hideKeyboard'] = function () {
      odwu14['window']['wx']['offKeyboardConfirm'](), odwu14['window']['wx']['offKeyboardInput'](), odwu14['window']['wx']['hideKeyboard']({ 'success': function (ud4fo) {
          console['log']('隐藏键盘');
        }, 'fail': function (s_rzn) {
          console['log']('隐藏键盘出错:' + (s_rzn ? s_rzn['errMsg'] : ''));
        } });
    }, d5f4o;
  }(),
      al76vk = function () {
    function icyh2x() {}xnbtiz(icyh2x, 'laya.wx.mini.MiniLoader');var bnxi = icyh2x['prototype'];return bnxi['load'] = function (l76v3, yt2ih, nztxbi, ytxh, mtzxbn) {
      nztxbi === void 0x0 && (nztxbi = !![]), mtzxbn === void 0x0 && (mtzxbn = ![]);var biyxth = this;biyxth['_url'] = l76v3;if (l76v3['indexOf']('data:image') === 0x0) biyxth['_type'] = yt2ih = 'image';else biyxth['_type'] = yt2ih || (yt2ih = biyxth['getTypeFromUrl'](l76v3));biyxth['_cache'] = nztxbi, biyxth['_data'] = null;var l3786 = 'ascii';if (l76v3['indexOf']('.fnt') != -0x1) l3786 = 'utf8';else yt2ih == 'arraybuffer' && (l3786 = '');;var zmsrb = i2htx['getFileExtension'](l76v3);if (icyh2x['_fileTypeArr']['indexOf'](zmsrb) != -0x1) odwu14['EnvConfig']['load']['call'](this, l76v3, yt2ih, nztxbi, ytxh, mtzxbn);else {
        if (!$s_me['getFileInfo'](l76v3)) {
          if (l76v3['indexOf']('layaNativeDir/') != -0x1) {
            if (odwu14['isZiYu']) {
              var ytin = $s_me['ziyuFileData'][l76v3];biyxth['onLoaded'](ytin);return;
            } else {
              cosnole['log']('read read'), $s_me['read'](l76v3, l3786, new nz(icyh2x, icyh2x['onReadNativeCallBack'], [l3786, l76v3, yt2ih, nztxbi, ytxh, mtzxbn, biyxth]));return;
            }
          }if (lq8673['rootPath'] == '') var pu09w = l76v3;else pu09w = l76v3['split'](lq8673['rootPath'])[0x0];l76v3['indexOf']('http://') != -0x1 || l76v3['indexOf']('https://') != -0x1 ? odwu14['EnvConfig']['load']['call'](biyxth, l76v3, yt2ih, nztxbi, ytxh, mtzxbn) : $s_me['readFile'](pu09w, l3786, new nz(icyh2x, icyh2x['onReadNativeCallBack'], [l3786, l76v3, yt2ih, nztxbi, ytxh, mtzxbn, biyxth]), l76v3);
        } else odwu14['EnvConfig']['load']['call'](this, l76v3, yt2ih, nztxbi, ytxh, mtzxbn);
      }
    }, bnxi['resMgrLoad'] = function (l3v687, v37l, h2ycx, zsbmr, wu19, snmrz_, nz_rs) {
      h2ycx === void 0x0 && (h2ycx = 0x0), zsbmr === void 0x0 && (zsbmr = ![]), wu19 === void 0x0 && (wu19 = ![]), snmrz_ === void 0x0 && (snmrz_ = 0x0), nz_rs === void 0x0 && (nz_rs = 0x3), l3v687['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', l3v687), odwu14['EnvConfig']['resMgrLoad'](l3v687, (chj2y, nzix, jhcy2i) => {
        icyh2x['prototype']['resMgrLoadCallBack'](chj2y, nzix, jhcy2i, v37l);
      }, h2ycx, zsbmr, wu19, snmrz_, nz_rs);
    }, bnxi['resMgrLoadCallBack'] = function (hj2c, sme_$, zmrsbn, xchiy2) {
      console['log']('buff:::', hj2c, zmrsbn, $s_me['fileNativeDir'] + '///' + $s_me['fileListName']), xchiy2(hj2c, sme_$, zmrsbn);
    }, bnxi['clearRes'] = function (r$e_3q, vf4ka5) {
      vf4ka5 === void 0x0 && (vf4ka5 = ![]);var al7v86 = this;al7v86['clearRes'](r$e_3q, vf4ka5);var p0wu = $s_me['getFileInfo'](r$e_3q);if (p0wu && (r$e_3q['indexOf']('http://') != -0x1 || r$e_3q['indexOf']('https://') != -0x1)) {
        var zmsbtn = p0wu['md5'],
            rqe$3_ = $s_me['getFileNativePath'](zmsbtn);$s_me['remove'](rqe$3_);
      }
    }, icyh2x['onReadNativeCallBack'] = function (nrbmz, q8$le, kof4d, req_s, l6837q, qr$_3, x2ityh, cjyh2, re$_ms) {
      req_s === void 0x0 && (req_s = !![]), qr$_3 === void 0x0 && (qr$_3 = ![]), cjyh2 === void 0x0 && (cjyh2 = 0x0);if (!cjyh2) {
        var k6la7;if (kof4d == 'json' || kof4d == 'atlas') k6la7 = odwu14['getJson'](re$_ms['data']);else kof4d == 'xml' ? k6la7 = i2htx['parseXMLFromString'](re$_ms['data']) : k6la7 = re$_ms['data'];x2ityh['onLoaded'](k6la7), !odwu14['isZiYu'] && odwu14['isPosMsgYu'] && kof4d != 'arraybuffer' && wx['postMessage']({ 'url': q8$le, 'data': k6la7, 'isLoad': !![] });
      } else cjyh2 == 0x1 && odwu14['EnvConfig']['load']['call'](x2ityh, q8$le, kof4d, req_s, l6837q, qr$_3);
    }, qe$3r(icyh2x, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), icyh2x;
  }(),
      $s_me = function (d1ow) {
    function btnzsm() {
      btnzsm['__super']['call'](this);;
    }return xnbtiz(btnzsm, 'laya.wx.mini.MiniFileMgr', d1ow), btnzsm['isLoadFile'] = function (al) {
      return btnzsm['_fileTypeArr']['indexOf'](al) != -0x1 ? !![] : ![];
    }, btnzsm['getFileInfo'] = function (v4af) {
      var d45fa = v4af['split']('?')[0x0],
          wo = btnzsm['filesListObj'][d45fa];if (wo == null) return null;else return wo;return null;
    }, btnzsm['onFileUpdate'] = function (a5f4dk, mbznst) {
      var pwg91 = a5f4dk['split']('/'),
          u10wp = pwg91[pwg91['length'] - 0x1],
          snzr = btnzsm['getFileInfo'](mbznst);if (snzr == null) btnzsm['onSaveFile'](mbznst, u10wp);else {
        if (snzr['readyUrl'] != mbznst) btnzsm['remove'](u10wp, mbznst);
      }
    }, btnzsm['exits'] = function ($qr_3, af45k) {
      var av765k = btnzsm['getFileNativePath']($qr_3);btnzsm['fs']['getFileInfo']({ 'filePath': av765k, 'success': function (tnmzsb) {
          af45k != null && af45k['runWith']([0x0, tnmzsb]);
        }, 'fail': function (dfo45u) {
          af45k != null && af45k['runWith']([0x1, dfo45u]);
        } });
    }, btnzsm['read'] = function (thxyi, r_$sq, o14d, u0wo1) {
      r_$sq === void 0x0 && (r_$sq = 'ascill'), u0wo1 === void 0x0 && (u0wo1 = '');var l37q6;u0wo1 != '' ? l37q6 = btnzsm['getFileNativePath'](thxyi) : l37q6 = thxyi, btnzsm['fs']['readFile']({ 'filePath': l37q6, 'encoding': r_$sq, 'success': function (zm_nr) {
          o14d != null && o14d['runWith']([0x0, zm_nr]);
        }, 'fail': function ($zrm) {
          if ($zrm && u0wo1 != '') btnzsm['down'](u0wo1, r_$sq, o14d, u0wo1);else o14d != null && o14d['runWith']([0x1]);
        } });
    }, btnzsm['readNativeFile'] = function (yxin, a75v6k) {
      btnzsm['fs']['readFile']({ 'filePath': yxin, 'encoding': '', 'success': function (avf4k5) {
          a75v6k != null && a75v6k['runWith']([0x0]);
        }, 'fail': function (avf45) {
          a75v6k != null && a75v6k['runWith']([0x1]);
        } });
    }, btnzsm['down'] = function (sn_rm, _serq, $res_m, yinbtx) {
      _serq === void 0x0 && (_serq = 'ascill'), yinbtx === void 0x0 && (yinbtx = '');var _q83$ = btnzsm['getFileNativePath'](yinbtx),
          $_qe8 = btnzsm['wxdown']({ 'url': sn_rm, 'filePath': _q83$, 'success': function (od4w1) {
          if (od4w1['statusCode'] === 0xc8) btnzsm['readFile'](od4w1['filePath'], _serq, $res_m, yinbtx);
        }, 'fail': function (rq$s) {
          $res_m != null && $res_m['runWith']([0x1, rq$s]);
        } });$_qe8['onProgressUpdate'](function (cy2hxi) {
        $res_m != null && $res_m['runWith']([0x2, cy2hxi['progress']]);
      });
    }, btnzsm['readFile'] = function (q$r3e, stznmb, bxnzi, ka67v) {
      stznmb === void 0x0 && (stznmb = 'ascill'), ka67v === void 0x0 && (ka67v = ''), btnzsm['fs']['readFile']({ 'filePath': q$r3e, 'encoding': stznmb, 'success': function (d45ka) {
          if (q$r3e['indexOf']('http://') != -0x1 || q$r3e['indexOf']('https://') != -0x1) btnzsm['onFileUpdate'](q$r3e, ka67v);bxnzi != null && bxnzi['runWith']([0x0, d45ka]);
        }, 'fail': function (_e$r3) {
          if (_e$r3) bxnzi != null && bxnzi['runWith']([0x1, _e$r3]);
        } });
    }, btnzsm['downImg'] = function (wou1p0, jhi2c, vl63) {
      vl63 === void 0x0 && (vl63 = '');var q7l3 = btnzsm['wxdown']({ 'url': wou1p0, 'success': function ($msr_) {
          $msr_['statusCode'] === 0xc8 && btnzsm['copyFile']($msr_['tempFilePath'], vl63, jhi2c);
        }, 'fail': function (tmxnzb) {
          jhi2c != null && jhi2c['runWith']([0x1, tmxnzb]);
        } });
    }, btnzsm['copyFile'] = function (oud4, v6ka7, kdo5f4) {
      var zmnsrb = oud4['split']('/'),
          a45fd = zmnsrb[zmnsrb['length'] - 0x1],
          d4u1wo = v6ka7['split']('?')[0x0],
          kv576a = btnzsm['getFileInfo'](v6ka7),
          lv637 = btnzsm['getFileNativePath'](a45fd);btnzsm['fs']['copyFile']({ 'srcPath': oud4, 'destPath': lv637, 'success': function (le$38) {
          if (!kv576a) btnzsm['onSaveFile'](v6ka7, a45fd), kdo5f4 != null && kdo5f4['runWith']([0x0]);else {
            if (kv576a['readyUrl'] != v6ka7) btnzsm['remove'](a45fd, v6ka7, kdo5f4);
          }
        }, 'fail': function (x2ity) {
          kdo5f4 != null && kdo5f4['runWith']([0x1, x2ity]);
        } });
    }, btnzsm['getFileNativePath'] = function (mtnzx) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mtnzx;
    }, btnzsm['remove'] = function (req3_$, msrz_n, gp10) {
      msrz_n === void 0x0 && (msrz_n = '');var d54fko = btnzsm['getFileInfo'](msrz_n),
          pwuo01 = btnzsm['getFileNativePath'](d54fko['md5']);u1o4fd['loader']['clearRes'](d54fko['readyUrl']), btnzsm['fs']['unlink']({ 'filePath': pwuo01, 'success': function (ibtz) {
          if (msrz_n != '') btnzsm['onSaveFile'](msrz_n, req3_$);gp10 != null && gp10['runWith']([0x0]);
        }, 'fail': function (iztnx) {} });
    }, btnzsm['onSaveFile'] = function (tzbxn, u0op) {
      var ms$e = tzbxn['split']('?')[0x0];btnzsm['filesListObj'][ms$e] = { 'md5': u0op, 'readyUrl': tzbxn }, btnzsm['fs']['writeFile']({ 'filePath': btnzsm['fileNativeDir'] + '/' + btnzsm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](btnzsm['filesListObj']), 'success': function (rnzbm) {
          console['log']('写入测试测试成功：', rnzbm);
        }, 'fail': function (ihxty) {
          console['log']('写入测试测试失败：', ihxty);
        } });
    }, btnzsm['existDir'] = function (sm_zn, $mres_) {
      btnzsm['fs']['mkdir']({ 'dirPath': sm_zn, 'success': function (bhyt) {
          $mres_ != null && $mres_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (l736v8) {
          if (l736v8['errMsg']['indexOf']('file already exists') != -0x1) btnzsm['readSync'](btnzsm['fileListName'], 'utf8', $mres_);else $mres_ != null && $mres_['runWith']([0x1, l736v8]);
        } });
    }, btnzsm['readSync'] = function (xbzitn, fkad54, yxbnt, a678l) {
      fkad54 === void 0x0 && (fkad54 = 'ascill'), a678l === void 0x0 && (a678l = '');var opw10u = btnzsm['getFileNativePath'](xbzitn),
          cix2hy;try {
        cix2hy = btnzsm['fs']['readFileSync'](opw10u), yxbnt != null && yxbnt['runWith']([0x0, { 'data': cix2hy }]);
      } catch (o5k) {
        yxbnt != null && yxbnt['runWith']([0x1]);
      }
    }, btnzsm['readCache'] = function () {}, btnzsm['writeCache'] = function (fda54) {
      var uwd01 = readyUrl['split']('?')[0x0];btnzsm['filesListObj'][uwd01] = { 'md5': md5Name, 'readyUrl': readyUrl }, btnzsm['fs']['writeFile']({ 'filePath': btnzsm['fileNativeDir'] + '/' + btnzsm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](btnzsm['filesListObj']), 'success': function (dk54fa) {}, 'fail': function (ql876) {} });
    }, btnzsm['setNativeFileDir'] = function (c2yihx) {
      btnzsm['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c2yihx;
    }, btnzsm['filesListObj'] = {}, btnzsm['fileNativeDir'] = null, btnzsm['fileListName'] = 'layaairfiles.txt', btnzsm['ziyuFileData'] = {}, qe$3r(btnzsm, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), btnzsm;
  }(q_ers),
      xiythb = function (akfv7) {
    function gp1() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], gp1['__super']['call'](this), this['_sound'] = gp1['_createSound'](), this['_chanell'] = new udf45(this['_sound']);
    }xnbtiz(gp1, 'laya.wx.mini.MiniSound', akfv7);var mzsrbn = gp1['prototype'];return mzsrbn['load'] = function (kdaf5) {
      var fu14d = this;kdaf5 = lq8673['formatURL'](kdaf5), this['url'] = kdaf5;if (gp1['_audioCache'][kdaf5]) {
        this['event']('complete');return;
      }function f5adk() {
        if (gp1['_null'] != undefined) fu14d['_sound']['onCanplay'](gp1['_null']), fu14d['_sound']['onError'](gp1['_null']);else try {
          fu14d['_sound']['onCanplay'](null), fu14d['_sound']['onError'](null), gp1['_null'] = null;
        } catch (m$rse_) {
          console['warn']('[wxmini] _clearSound:' + m$rse_), fu14d['_sound']['onCanplay'](sm$e_), fu14d['_sound']['onError'](sm$e_), gp1['_null'] = sm$e_;
        }
      }function rsmz() {
        nzst['loaded'] = !![], nzst['event']('complete'), gp1['_audioCache'][nzst['url']] = nzst;
      }function rs$m_(zsmbrn) {
        console['error']('errCode=' + zsmbrn['errCode'] + '  errMsg=' + zsmbrn['errMsg']), nzst['event']('error');
      }function sm$e_() {}this['_sound']['onCanplay'](rsmz), this['_sound']['onError'](rs$m_), this['_sound']['src'] = kdaf5;var nzst = this;
    }, mzsrbn['play'] = function (nbmzr, tyhx) {
      nbmzr === void 0x0 && (nbmzr = 0x0), tyhx === void 0x0 && (tyhx = 0x0);var m_r$se, _$e38q;if (this['url'] == vfk['_tMusic']) {
        if (!gp1['_musicAudio']) gp1['_musicAudio'] = this['_sound'];m_r$se = gp1['_musicAudio'], _$e38q = this['_chanell'];
      } else m_r$se = this['_sound'], _$e38q = this['_chanell'];return m_r$se['src'] = this['url'], m_r$se['startTime'] = 0x0, _$e38q['isStopped'] && (_$e38q['url'] = this['url'], _$e38q['loops'] = tyhx, _$e38q['startTime'] = nbmzr, _$e38q['play'](), vfk['addChannel'](_$e38q)), _$e38q;
    }, mzsrbn['dispose'] = function () {
      var yjich = gp1['_audioCache'][this['url']];yjich && (yjich['src'] = '', delete gp1['_audioCache'][this['url']]);
    }, jcyih2(0x0, mzsrbn, 'duration', function () {
      return this['_sound']['duration'];
    }), gp1['_createSound'] = function () {
      gp1['_id']++;var ad54 = odwu14['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ad54;
    }, gp1['_musicAudio'] = null, gp1['_id'] = 0x0, gp1['_audioCache'] = {}, gp1['_null'] = undefined, gp1;
  }(q_ers),
      udf45 = function (ers$m_) {
    function r$3_e(vkla) {
      this['_audio'] = null, this['_onEnd'] = null, r$3_e['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vkla, this['_onEnd'] = i2htx['bind'](this['__onEnd'], this), vkla['onEnded'](this['_onEnd']);
    }xnbtiz(r$3_e, 'laya.wx.mini.MiniSoundChannel', ers$m_);var up109 = r$3_e['prototype'];return up109['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (u1o4fd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, up109['__onNull'] = function () {}, up109['play'] = function () {
      this['isStopped'] = ![], vfk['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, up109['stop'] = function () {
      this['isStopped'] = !![], vfk['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, up109['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, up109['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vfk['addChannel'](this), this['_audio']['play']();
    }, jcyih2(0x0, up109, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jcyih2(0x0, up109, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jcyih2(0x0, up109, 'volume', function () {
      return 0x1;
    }, function (vl83) {}), r$3_e['_null'] = undefined, r$3_e;
  }(yxtnb),
      l7q36 = function () {
    function cix2y() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = odwu14['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }xnbtiz(cix2y, 'laya.wx.mini.MiniVideo');var h2ixty = cix2y['prototype'];return h2ixty['on'] = function ($83qel, s$q_r, s$z_m) {
      if ($83qel == 'loadedmetadata') this['onPlayFunc'] = s$z_m['bind'](s$q_r), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else $83qel == 'ended' && (this['onEndedFunC'] = s$z_m['bind'](s$q_r), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, h2ixty['onTimeUpdateFunc'] = function (do4w1) {
      this['position'] = do4w1['position'], this['_duration'] = do4w1['duration'];
    }, h2ixty['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, h2ixty['onended'] = function (o4kd5f, iyx) {
      this['onEndedFunC'] = iyx['bind'](o4kd5f), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, h2ixty['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, h2ixty['off'] = function (oup, k7av5, s_) {
      if (oup == 'loadedmetadata') this['onPlayFunc'] = s_['bind'](k7av5), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else oup == 'ended' && (this['onEndedFunC'] = s_['bind'](k7av5), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, h2ixty['load'] = function (qs_er) {
      if (!this['videoElement']) return;this['videoElement']['src'] = qs_er;
    }, h2ixty['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, h2ixty['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, h2ixty['size'] = function (q_$8, ytxib) {
      if (!this['videoElement']) return;this['videoElement']['width'] = q_$8, this['videoElement']['height'] = ytxib;
    }, h2ixty['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, h2ixty['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, jcyih2(0x0, h2ixty, 'duration', function () {
      return this['_duration'];
    }), jcyih2(0x0, h2ixty, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (u9p01) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = u9p01;
    }), jcyih2(0x0, h2ixty, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), jcyih2(0x0, h2ixty, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), jcyih2(0x0, h2ixty, 'ended', function () {
      return this['videoend'];
    }), jcyih2(0x0, h2ixty, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (adk5) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = adk5;
    }), jcyih2(0x0, h2ixty, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (t2yihx) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = t2yihx;
    }), jcyih2(0x0, h2ixty, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (kod4) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = kod4;
    }), jcyih2(0x0, h2ixty, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), jcyih2(0x0, h2ixty, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (_res) {
      if (!this['videoElement']) return;this['videoElement']['x'] = _res;
    }), jcyih2(0x0, h2ixty, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (nbsr) {
      if (!this['videoElement']) return;this['videoElement']['y'] = nbsr;
    }), jcyih2(0x0, h2ixty, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), jcyih2(0x0, h2ixty, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (udwo10) {
      if (!this['videoElement']) return;this['videoElement']['src'] = udwo10;
    }), jcyih2(0x0, h2ixty, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (tmbzx) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = tmbzx;
    }), jcyih2(0x0, h2ixty, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (l7v86a) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = l7v86a;
    }), cix2y;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var zbmns in Laya) {
    var bxzin = Laya[zbmns];bxzin && bxzin['__isclass'] && (exports[zbmns] = bxzin);
  }
});