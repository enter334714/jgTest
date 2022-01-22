var G = wx.$G;
(function (window, document, d4u1w) {
  var kfav4 = d4u1w['un'],
      op01uw = d4u1w['uns'],
      vk7la = d4u1w['static'],
      nz_rsm = d4u1w['class'],
      zmrsnb = d4u1w['getset'],
      uop01 = d4u1w['__newvec'],
      v4k = laya['utils']['Browser'],
      kal76 = laya['events']['Event'],
      p0uwo1 = laya['events']['EventDispatcher'],
      od4f5 = laya['resource']['HTMLImage'],
      bhity = laya['utils']['Handler'],
      ufo5d = laya['display']['Input'],
      a86 = laya['net']['Loader'],
      ud4wo1 = laya['maths']['Matrix'],
      msbntz = laya['renders']['Render'],
      c2xyih = laya['utils']['RunDriver'],
      r_es$m = laya['media']['Sound'],
      fudo = laya['media']['SoundChannel'],
      q3687 = laya['media']['SoundManager'],
      ntbmxz = laya['display']['Stage'],
      _ers$q = laya['net']['URL'],
      xbnmtz = laya['utils']['Utils'],
      sqr_ = function () {
    function tbzixn() {}return nz_rsm(tbzixn, 'laya.wx.mini.MiniAdpter'), tbzixn['getJson'] = function (_3qre$) {
      return JSON['parse'](_3qre$);
    }, tbzixn['init'] = function (znitbx, smnzbt) {
      znitbx === void 0x0 && (znitbx = ![]), smnzbt === void 0x0 && (smnzbt = ![]);if (tbzixn['_inited']) return;tbzixn['window'] = window;if (tbzixn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;tbzixn['_inited'] = !![], tbzixn['isZiYu'] = smnzbt, tbzixn['isPosMsgYu'] = znitbx, tbzixn['EnvConfig'] = {}, !tbzixn['isZiYu'] && (m$r_e['setNativeFileDir']('/layaairGame'), m$r_e['existDir'](m$r_e['fileNativeDir'], bhity['create'](tbzixn, tbzixn['onMkdirCallBack']))), tbzixn['window']['focus'] = function () {}, d4u1w['getUrlPath'] = function () {}, tbzixn['window']['logtime'] = function (fa4vk5) {}, tbzixn['window']['alertTimeLog'] = function (bthxiy) {}, tbzixn['window']['resetShareInfo'] = function () {}, tbzixn['window']['CanvasRenderingContext2D'] = function () {}, tbzixn['window']['CanvasRenderingContext2D']['prototype'] = tbzixn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tbzixn['window']['document']['body']['appendChild'] = function () {}, tbzixn['EnvConfig']['pixelRatioInt'] = 0x0, c2xyih['getPixelRatio'] = tbzixn['pixelRatio'], tbzixn['_preCreateElement'] = v4k['createElement'], v4k['createElement'] = tbzixn['createElement'], c2xyih['createShaderCondition'] = tbzixn['createShaderCondition'], xbnmtz['parseXMLFromString'] = tbzixn['parseXMLFromString'], ufo5d['_createInputElement'] = sztb['_createInputElement'], tbzixn['EnvConfig']['load'] = a86['prototype']['load'], a86['prototype']['load'] = ty2h['prototype']['load'], tbzixn['isZiYu'] && znitbx && wx['onMessage'](function (bsmzt) {
        bsmzt['isLoad'] && (m$r_e['ziyuFileData'][bsmzt['url']] = bsmzt['data']);
      });
    }, tbzixn['onMkdirCallBack'] = function (kfd5, kdfo5) {
      if (!kfd5) m$r_e['filesListObj'] = JSON['parse'](kdfo5['data']);
    }, tbzixn['pixelRatio'] = function () {
      if (!tbzixn['EnvConfig']['pixelRatioInt']) try {
        var kadf5 = wx['getSystemInfoSync']();return tbzixn['EnvConfig']['pixelRatioInt'] = kadf5['pixelRatio'], kadf5 = kadf5, kadf5['pixelRatio'];
      } catch (ih2ycx) {}return tbzixn['EnvConfig']['pixelRatioInt'];
    }, tbzixn['createElement'] = function (mz) {
      if (mz == 'canvas') {
        var itxynb;return tbzixn['idx'] == 0x1 ? tbzixn['isZiYu'] ? (itxynb = sharedCanvas, itxynb['style'] = {}) : itxynb = window['canvas'] : itxynb = window['wx']['createCanvas'](), tbzixn['idx']++, itxynb;
      } else {
        if (mz == 'textarea' || mz == 'input') return tbzixn['onCreateInput'](mz);else {
          if (mz == 'div') {
            var bnrsm = tbzixn['_preCreateElement'](mz);return bnrsm['contains'] = function (zr_msn) {
              return null;
            }, bnrsm['removeChild'] = function (qe638) {}, bnrsm;
          } else return tbzixn['_preCreateElement'](mz);
        }
      }
    }, tbzixn['onCreateInput'] = function (sbnm) {
      var ciyjh = tbzixn['_preCreateElement'](sbnm);return ciyjh['focus'] = sztb['wxinputFocus'], ciyjh['blur'] = sztb['wxinputblur'], ciyjh['style'] = {}, ciyjh['value'] = 0x0, ciyjh['parentElement'] = {}, ciyjh['placeholder'] = {}, ciyjh['type'] = {}, ciyjh['setColor'] = function (ql$e38) {}, ciyjh['setType'] = function (xt2y) {}, ciyjh['setFontFace'] = function (k4fa5d) {}, ciyjh['addEventListener'] = function (d1o4f) {}, ciyjh['contains'] = function (zxmnt) {
        return null;
      }, ciyjh['removeChild'] = function (wp1ou) {}, ciyjh;
    }, tbzixn['createShaderCondition'] = function (q3678) {
      var fk4va5 = this,
          tmxnzb = function () {
        var nrm_zs = q3678;return fk4va5[q3678['replace']('this.', '')];
      };return tmxnzb;
    }, tbzixn['EnvConfig'] = null, tbzixn['window'] = null, tbzixn['_preCreateElement'] = null, tbzixn['_inited'] = ![], tbzixn['wxRequest'] = null, tbzixn['systemInfo'] = null, tbzixn['version'] = '0.0.1', tbzixn['isZiYu'] = ![], tbzixn['isPosMsgYu'] = ![], tbzixn['parseXMLFromString'] = function (bznst) {
      var ofd45u, y2ixth;bznst = bznst['replace'](/>\s+</g, '><');try {
        ofd45u = new window['Parser']['DOMParser']()['parseFromString'](bznst, 'text/xml');
      } catch (bnsmr) {
        throw '需要引入xml解析库文件';
      }return ofd45u;
    }, tbzixn['idx'] = 0x1, tbzixn;
  }(),
      snbtm = function () {
    function lk() {}nz_rsm(lk, 'laya.wx.mini.MiniImage');var k54fad = lk['prototype'];return k54fad['_loadImage'] = function (iyx2t) {
      var vl67 = this,
          ka76v5 = ![];iyx2t['indexOf']('layaNativeDir/') == -0x1 && (ka76v5 = !![], iyx2t = _ers$q['formatURL'](iyx2t));if (!m$r_e['getFileInfo'](iyx2t)) {
        if (iyx2t['indexOf']('http://') != -0x1 || iyx2t['indexOf']('https://') != -0x1) m$r_e['downImg'](iyx2t, new bhity(lk, lk['onDownImgCallBack'], [iyx2t, vl67]), iyx2t);else lk['onCreateImage'](iyx2t, vl67, !![]);
      } else lk['onCreateImage'](iyx2t, vl67, !ka76v5);
    }, lk['onDownImgCallBack'] = function (f45udo, opuw01, af5kv7) {
      if (!af5kv7) lk['onCreateImage'](f45udo, opuw01);else opuw01['onError'](null);
    }, lk['onCreateImage'] = function (vl78a, btmsn, tyixbh) {
      tyixbh === void 0x0 && (tyixbh = ![]);var eq63l8;if (!tyixbh) {
        var q_sr = m$r_e['getFileInfo'](vl78a),
            uwo1d = q_sr['md5'];eq63l8 = m$r_e['getFileNativePath'](uwo1d);
      } else eq63l8 = vl78a;if (btmsn['imgCache'] == null) btmsn['imgCache'] = {};var fd14u;function al86() {
        fd14u['onload'] = null, fd14u['onerror'] = null, delete btmsn['imgCache'][vl78a];
      };var rsqe = function () {
        al86(), btmsn['onLoaded'](fd14u);
      },
          a76lv8 = function () {
        al86(), btmsn['event']('error', 'Load image failed');
      };btmsn['_type'] == 'nativeimage' ? (fd14u = new v4k['window']['Image'](), fd14u['crossOrigin'] = '', fd14u['onload'] = rsqe, fd14u['onerror'] = a76lv8, fd14u['src'] = eq63l8, btmsn['imgCache'][vl78a] = fd14u) : new od4f5['create'](eq63l8, { 'onload': rsqe, 'onerror': a76lv8, 'onCreate': function (_e$sqr) {
          fd14u = _e$sqr, btmsn['imgCache'][vl78a] = _e$sqr;
        } });
    }, lk;
  }(),
      sztb = function () {
    function nszrb() {}return nz_rsm(nszrb, 'laya.wx.mini.MiniInput'), nszrb['_createInputElement'] = function () {
      ufo5d['_initInput'](ufo5d['area'] = v4k['createElement']('textarea')), ufo5d['_initInput'](ufo5d['input'] = v4k['createElement']('input')), ufo5d['inputContainer'] = v4k['createElement']('div'), ufo5d['inputContainer']['style']['position'] = 'absolute', ufo5d['inputContainer']['style']['zIndex'] = 0x186a0, v4k['container']['appendChild'](ufo5d['inputContainer']), ufo5d['inputContainer']['setPos'] = function (k75, nxbiyt) {
        ufo5d['inputContainer']['style']['left'] = k75 + 'px', ufo5d['inputContainer']['style']['top'] = nxbiyt + 'px';
      }, d4u1w['stage']['on']('resize', null, nszrb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fa5v7) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), q3687['_soundClass'] = q83_$e, q3687['_musicClass'] = q83_$e;
    }, nszrb['_onStageResize'] = function () {
      var hy2ixc = d4u1w['stage']['_canvasTransform']['identity']();hy2ixc['scale'](v4k['width'] / msbntz['canvas']['width'] / c2xyih['getPixelRatio'](), v4k['height'] / msbntz['canvas']['height'] / c2xyih['getPixelRatio']());
    }, nszrb['wxinputFocus'] = function (o14f) {
      var ka67 = ufo5d['inputElement']['target'];if (ka67 && !ka67['editable']) return;sqr_['window']['wx']['offKeyboardConfirm'](), sqr_['window']['wx']['offKeyboardInput'](), sqr_['window']['wx']['showKeyboard']({ 'defaultValue': ka67['text'], 'maxLength': ka67['maxChars'], 'multiple': ka67['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (owu4d1) {}, 'fail': function (zrbnm) {} }), sqr_['window']['wx']['onKeyboardConfirm'](function (z$mrs) {
        var u41 = z$mrs ? z$mrs['value'] : '';ka67['text'] = u41, ka67['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sqr_['window']['wx']['onKeyboardInput'](function (q3el) {
        var fk45ad = q3el ? q3el['value'] : '';if (!ka67['multiline']) {
          if (fk45ad['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ka67['text'] = fk45ad, ka67['event']('input');
      });
    }, nszrb['inputEnter'] = function () {
      ufo5d['inputElement']['target']['focus'] = ![];
    }, nszrb['wxinputblur'] = function () {
      nszrb['hideKeyboard']();
    }, nszrb['hideKeyboard'] = function () {
      sqr_['window']['wx']['offKeyboardConfirm'](), sqr_['window']['wx']['offKeyboardInput'](), sqr_['window']['wx']['hideKeyboard']({ 'success': function (nbiyt) {
          console['log']('隐藏键盘');
        }, 'fail': function (q3e_8$) {
          console['log']('隐藏键盘出错:' + (q3e_8$ ? q3e_8$['errMsg'] : ''));
        } });
    }, nszrb;
  }(),
      ty2h = function () {
    function bmzntx() {}nz_rsm(bmzntx, 'laya.wx.mini.MiniLoader');var akfv = bmzntx['prototype'];return akfv['load'] = function (vla7k6, q_r$3e, q$_ser, q$_3r, pu0) {
      q$_ser === void 0x0 && (q$_ser = !![]), pu0 === void 0x0 && (pu0 = ![]);var ibxnz = this;ibxnz['_url'] = vla7k6;if (vla7k6['indexOf']('data:image') === 0x0) ibxnz['_type'] = q_r$3e = 'image';else ibxnz['_type'] = q_r$3e || (q_r$3e = ibxnz['getTypeFromUrl'](vla7k6));ibxnz['_cache'] = q$_ser, ibxnz['_data'] = null;var a6k57 = 'ascii';if (vla7k6['indexOf']('.fnt') != -0x1) a6k57 = 'utf8';else q_r$3e == 'arraybuffer' && (a6k57 = '');;var yih2t = xbnmtz['getFileExtension'](vla7k6);if (bmzntx['_fileTypeArr']['indexOf'](yih2t) != -0x1) sqr_['EnvConfig']['load']['call'](this, vla7k6, q_r$3e, q$_ser, q$_3r, pu0);else {
        if (!m$r_e['getFileInfo'](vla7k6)) {
          if (vla7k6['indexOf']('layaNativeDir/') != -0x1) {
            if (sqr_['isZiYu']) {
              var _qs$e = m$r_e['ziyuFileData'][vla7k6];ibxnz['onLoaded'](_qs$e);return;
            } else {
              cosnole['log']('read read'), m$r_e['read'](vla7k6, a6k57, new bhity(bmzntx, bmzntx['onReadNativeCallBack'], [a6k57, vla7k6, q_r$3e, q$_ser, q$_3r, pu0, ibxnz]));return;
            }
          }if (_ers$q['rootPath'] == '') var u5dfo4 = vla7k6;else u5dfo4 = vla7k6['split'](_ers$q['rootPath'])[0x0];vla7k6['indexOf']('http://') != -0x1 || vla7k6['indexOf']('https://') != -0x1 ? sqr_['EnvConfig']['load']['call'](ibxnz, vla7k6, q_r$3e, q$_ser, q$_3r, pu0) : m$r_e['readFile'](u5dfo4, a6k57, new bhity(bmzntx, bmzntx['onReadNativeCallBack'], [a6k57, vla7k6, q_r$3e, q$_ser, q$_3r, pu0, ibxnz]), vla7k6);
        } else sqr_['EnvConfig']['load']['call'](this, vla7k6, q_r$3e, q$_ser, q$_3r, pu0);
      }
    }, akfv['resMgrLoad'] = function (xtyhbi, up0o1w, v7ak65, ztmb, v638, brsmz, es$qr_) {
      v7ak65 === void 0x0 && (v7ak65 = 0x0), ztmb === void 0x0 && (ztmb = ![]), v638 === void 0x0 && (v638 = ![]), brsmz === void 0x0 && (brsmz = 0x0), es$qr_ === void 0x0 && (es$qr_ = 0x3), xtyhbi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xtyhbi), sqr_['EnvConfig']['resMgrLoad'](xtyhbi, ($rmz_s, df45a, wpu019) => {
        bmzntx['prototype']['resMgrLoadCallBack']($rmz_s, df45a, wpu019, up0o1w);
      }, v7ak65, ztmb, v638, brsmz, es$qr_);
    }, akfv['resMgrLoadCallBack'] = function (srzmbn, fa4k5, xbhtiy, xbty) {
      console['log']('buff:::', srzmbn, xbhtiy, m$r_e['fileNativeDir'] + '///' + m$r_e['fileListName']), xbty(srzmbn, fa4k5, xbhtiy);
    }, akfv['clearRes'] = function (_se$mr, adf4k) {
      adf4k === void 0x0 && (adf4k = ![]);var kdof5 = this;kdof5['clearRes'](_se$mr, adf4k);var tsz = m$r_e['getFileInfo'](_se$mr);if (tsz && (_se$mr['indexOf']('http://') != -0x1 || _se$mr['indexOf']('https://') != -0x1)) {
        var _r$qe3 = tsz['md5'],
            $_3erq = m$r_e['getFileNativePath'](_r$qe3);m$r_e['remove']($_3erq);
      }
    }, bmzntx['onReadNativeCallBack'] = function (s_rn, vaf7k5, xbyint, j2cih, brmsz, szmr_n, vfka57, $8qe_, f4ko) {
      j2cih === void 0x0 && (j2cih = !![]), szmr_n === void 0x0 && (szmr_n = ![]), $8qe_ === void 0x0 && ($8qe_ = 0x0);if (!$8qe_) {
        var rzms_;if (xbyint == 'json' || xbyint == 'atlas') rzms_ = sqr_['getJson'](f4ko['data']);else xbyint == 'xml' ? rzms_ = xbnmtz['parseXMLFromString'](f4ko['data']) : rzms_ = f4ko['data'];vfka57['onLoaded'](rzms_), !sqr_['isZiYu'] && sqr_['isPosMsgYu'] && xbyint != 'arraybuffer' && wx['postMessage']({ 'url': vaf7k5, 'data': rzms_, 'isLoad': !![] });
      } else $8qe_ == 0x1 && sqr_['EnvConfig']['load']['call'](vfka57, vaf7k5, xbyint, j2cih, brmsz, szmr_n);
    }, vk7la(bmzntx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bmzntx;
  }(),
      m$r_e = function (ser$q) {
    function rmz_$() {
      rmz_$['__super']['call'](this);;
    }return nz_rsm(rmz_$, 'laya.wx.mini.MiniFileMgr', ser$q), rmz_$['isLoadFile'] = function (e$8q_) {
      return rmz_$['_fileTypeArr']['indexOf'](e$8q_) != -0x1 ? !![] : ![];
    }, rmz_$['getFileInfo'] = function (mres$_) {
      var $_8e = mres$_['split']('?')[0x0],
          kfod45 = rmz_$['filesListObj'][$_8e];if (kfod45 == null) return null;else return kfod45;return null;
    }, rmz_$['onFileUpdate'] = function (y2hcj, thbxi) {
      var szm$ = y2hcj['split']('/'),
          $msr = szm$[szm$['length'] - 0x1],
          vf7ka = rmz_$['getFileInfo'](thbxi);if (vf7ka == null) rmz_$['onSaveFile'](thbxi, $msr);else {
        if (vf7ka['readyUrl'] != thbxi) rmz_$['remove']($msr, thbxi);
      }
    }, rmz_$['exits'] = function (kvl6, szrmn) {
      var dfu5o4 = rmz_$['getFileNativePath'](kvl6);rmz_$['fs']['getFileInfo']({ 'filePath': dfu5o4, 'success': function (ql8e$) {
          szrmn != null && szrmn['runWith']([0x0, ql8e$]);
        }, 'fail': function (f4) {
          szrmn != null && szrmn['runWith']([0x1, f4]);
        } });
    }, rmz_$['read'] = function (mn_srz, vla67, mr_s$e, cijhy2) {
      vla67 === void 0x0 && (vla67 = 'ascill'), cijhy2 === void 0x0 && (cijhy2 = '');var esqr$;cijhy2 != '' ? esqr$ = rmz_$['getFileNativePath'](mn_srz) : esqr$ = mn_srz, rmz_$['fs']['readFile']({ 'filePath': esqr$, 'encoding': vla67, 'success': function (xhbiyt) {
          mr_s$e != null && mr_s$e['runWith']([0x0, xhbiyt]);
        }, 'fail': function (tyixh2) {
          if (tyixh2 && cijhy2 != '') rmz_$['down'](cijhy2, vla67, mr_s$e, cijhy2);else mr_s$e != null && mr_s$e['runWith']([0x1]);
        } });
    }, rmz_$['readNativeFile'] = function (_rnzm, bxtm) {
      rmz_$['fs']['readFile']({ 'filePath': _rnzm, 'encoding': '', 'success': function (_ers$) {
          bxtm != null && bxtm['runWith']([0x0]);
        }, 'fail': function ($er3_q) {
          bxtm != null && bxtm['runWith']([0x1]);
        } });
    }, rmz_$['down'] = function (ql836, f1d4ou, ych2xi, lv837) {
      f1d4ou === void 0x0 && (f1d4ou = 'ascill'), lv837 === void 0x0 && (lv837 = '');var v5kf4a = rmz_$['getFileNativePath'](lv837),
          o1duf = rmz_$['wxdown']({ 'url': ql836, 'filePath': v5kf4a, 'success': function (k5fva7) {
          if (k5fva7['statusCode'] === 0xc8) rmz_$['readFile'](k5fva7['filePath'], f1d4ou, ych2xi, lv837);
        }, 'fail': function (ixhbyt) {
          ych2xi != null && ych2xi['runWith']([0x1, ixhbyt]);
        } });o1duf['onProgressUpdate'](function (el8q3$) {
        ych2xi != null && ych2xi['runWith']([0x2, el8q3$['progress']]);
      });
    }, rmz_$['readFile'] = function (zrmbsn, d1wo4, gw09p, jihy2c) {
      d1wo4 === void 0x0 && (d1wo4 = 'ascill'), jihy2c === void 0x0 && (jihy2c = ''), rmz_$['fs']['readFile']({ 'filePath': zrmbsn, 'encoding': d1wo4, 'success': function (v57akf) {
          if (zrmbsn['indexOf']('http://') != -0x1 || zrmbsn['indexOf']('https://') != -0x1) rmz_$['onFileUpdate'](zrmbsn, jihy2c);gw09p != null && gw09p['runWith']([0x0, v57akf]);
        }, 'fail': function (bintz) {
          if (bintz) gw09p != null && gw09p['runWith']([0x1, bintz]);
        } });
    }, rmz_$['downImg'] = function (pg19w0, $_smrz, $re3) {
      $re3 === void 0x0 && ($re3 = '');var bms = rmz_$['wxdown']({ 'url': pg19w0, 'success': function (wdou1) {
          wdou1['statusCode'] === 0xc8 && rmz_$['copyFile'](wdou1['tempFilePath'], $re3, $_smrz);
        }, 'fail': function (f5o4dk) {
          $_smrz != null && $_smrz['runWith']([0x1, f5o4dk]);
        } });
    }, rmz_$['copyFile'] = function (bsmnzr, ql736, bstn) {
      var $el8q3 = bsmnzr['split']('/'),
          g0w9 = $el8q3[$el8q3['length'] - 0x1],
          wud01o = ql736['split']('?')[0x0],
          q$38le = rmz_$['getFileInfo'](ql736),
          d0wo1u = rmz_$['getFileNativePath'](g0w9);rmz_$['fs']['copyFile']({ 'srcPath': bsmnzr, 'destPath': d0wo1u, 'success': function (zrn_m) {
          if (!q$38le) rmz_$['onSaveFile'](ql736, g0w9), bstn != null && bstn['runWith']([0x0]);else {
            if (q$38le['readyUrl'] != ql736) rmz_$['remove'](g0w9, ql736, bstn);
          }
        }, 'fail': function (btyhi) {
          bstn != null && bstn['runWith']([0x1, btyhi]);
        } });
    }, rmz_$['getFileNativePath'] = function (sntzmb) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sntzmb;
    }, rmz_$['remove'] = function (vl7a86, lak7, s$m_rz) {
      lak7 === void 0x0 && (lak7 = '');var nmtsb = rmz_$['getFileInfo'](lak7),
          d1uo = rmz_$['getFileNativePath'](nmtsb['md5']);d4u1w['loader']['clearRes'](nmtsb['readyUrl']), rmz_$['fs']['unlink']({ 'filePath': d1uo, 'success': function (vaf4k) {
          if (lak7 != '') rmz_$['onSaveFile'](lak7, vl7a86);s$m_rz != null && s$m_rz['runWith']([0x0]);
        }, 'fail': function (ud14w) {} });
    }, rmz_$['onSaveFile'] = function (_mser$, zm_r) {
      var xi2yht = _mser$['split']('?')[0x0];rmz_$['filesListObj'][xi2yht] = { 'md5': zm_r, 'readyUrl': _mser$ }, rmz_$['fs']['writeFile']({ 'filePath': rmz_$['fileNativeDir'] + '/' + rmz_$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rmz_$['filesListObj']), 'success': function (of4du) {
          console['log']('写入测试测试成功：', of4du);
        }, 'fail': function (_z$sr) {
          console['log']('写入测试测试失败：', _z$sr);
        } });
    }, rmz_$['existDir'] = function (jciy2, w9g10p) {
      rmz_$['fs']['mkdir']({ 'dirPath': jciy2, 'success': function (cih) {
          w9g10p != null && w9g10p['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($zs_rm) {
          if ($zs_rm['errMsg']['indexOf']('file already exists') != -0x1) rmz_$['readSync'](rmz_$['fileListName'], 'utf8', w9g10p);else w9g10p != null && w9g10p['runWith']([0x1, $zs_rm]);
        } });
    }, rmz_$['readSync'] = function (d0w1, sm_znr, q8l, rsmznb) {
      sm_znr === void 0x0 && (sm_znr = 'ascill'), rsmznb === void 0x0 && (rsmznb = '');var e$_m = rmz_$['getFileNativePath'](d0w1),
          es$;try {
        es$ = rmz_$['fs']['readFileSync'](e$_m), q8l != null && q8l['runWith']([0x0, { 'data': es$ }]);
      } catch (v7683l) {
        q8l != null && q8l['runWith']([0x1]);
      }
    }, rmz_$['readCache'] = function () {}, rmz_$['writeCache'] = function (s_nm) {
      var du14fo = readyUrl['split']('?')[0x0];rmz_$['filesListObj'][du14fo] = { 'md5': md5Name, 'readyUrl': readyUrl }, rmz_$['fs']['writeFile']({ 'filePath': rmz_$['fileNativeDir'] + '/' + rmz_$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rmz_$['filesListObj']), 'success': function (bsmzrn) {}, 'fail': function (iy2t) {} });
    }, rmz_$['setNativeFileDir'] = function (znrm_) {
      rmz_$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + znrm_;
    }, rmz_$['filesListObj'] = {}, rmz_$['fileNativeDir'] = null, rmz_$['fileListName'] = 'layaairfiles.txt', rmz_$['ziyuFileData'] = {}, vk7la(rmz_$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rmz_$;
  }(p0uwo1),
      q83_$e = function (vka7l) {
    function nzsrb() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], nzsrb['__super']['call'](this), this['_sound'] = nzsrb['_createSound']();
    }nz_rsm(nzsrb, 'laya.wx.mini.MiniSound', vka7l);var mr$_se = nzsrb['prototype'];return mr$_se['load'] = function (r$s_z) {
      var m$zr_s = this;r$s_z = _ers$q['formatURL'](r$s_z), this['url'] = r$s_z;if (nzsrb['_audioCache'][r$s_z]) {
        this['event']('complete');return;
      }function a876l() {
        if (nzsrb['_null'] != undefined) m$zr_s['_sound']['onCanplay'](nzsrb['_null']), m$zr_s['_sound']['onError'](nzsrb['_null']);else try {
          m$zr_s['_sound']['onCanplay'](null), m$zr_s['_sound']['onError'](null), nzsrb['_null'] = null;
        } catch (ih2xy) {
          console['warn']('[wxmini] _clearSound:' + ih2xy), m$zr_s['_sound']['onCanplay'](vka4f), m$zr_s['_sound']['onError'](vka4f), nzsrb['_null'] = vka4f;
        }
      }function nyibt() {
        a876l(), ixtbn['loaded'] = !![], ixtbn['event']('complete'), nzsrb['_audioCache'][ixtbn['url']] = ixtbn;
      }function s$mr_e(e3q8$l) {
        console['error']('errCode=' + e3q8$l['errCode'] + '  errMsg=' + e3q8$l['errMsg']), a876l(), ixtbn['event']('error');
      }function vka4f() {}this['_sound']['onCanplay'](nyibt), this['_sound']['onError'](s$mr_e), this['_sound']['src'] = r$s_z;var ixtbn = this;
    }, mr$_se['play'] = function (ixhy2c, o4kdf5) {
      ixhy2c === void 0x0 && (ixhy2c = 0x0), o4kdf5 === void 0x0 && (o4kdf5 = 0x0);var mxbznt;if (this['url'] == q3687['_tMusic']) {
        if (!nzsrb['_musicAudio']) nzsrb['_musicAudio'] = nzsrb['_createSound']();mxbznt = nzsrb['_musicAudio'];
      } else mxbznt = nzsrb['_createSound']();mxbznt['src'] = this['url'];var eql36 = new v6a5(mxbznt);return eql36['url'] = this['url'], eql36['loops'] = o4kdf5, eql36['startTime'] = ixhy2c, eql36['play'](), q3687['addChannel'](eql36), eql36;
    }, mr$_se['dispose'] = function () {
      var gw019p = nzsrb['_audioCache'][this['url']];gw019p && (gw019p['src'] = '', delete nzsrb['_audioCache'][this['url']]);
    }, zmrsnb(0x0, mr$_se, 'duration', function () {
      return this['_sound']['duration'];
    }), nzsrb['_createSound'] = function () {
      return nzsrb['_id']++, sqr_['window']['wx']['createInnerAudioContext']();
    }, nzsrb['_musicAudio'] = null, nzsrb['_id'] = 0x0, nzsrb['_audioCache'] = {}, nzsrb['_null'] = undefined, nzsrb;
  }(p0uwo1),
      v6a5 = function (bitnz) {
    function e_q8(avk54f) {
      this['_audio'] = null, this['_onEnd'] = null, e_q8['__super']['call'](this), this['_audio'] = avk54f, this['_onEnd'] = xbnmtz['bind'](this['__onEnd'], this), avk54f['onEnded'](this['_onEnd']);
    }nz_rsm(e_q8, 'laya.wx.mini.MiniSoundChannel', bitnz);var u4df5 = e_q8['prototype'];return u4df5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (d4u1w['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, u4df5['__onNull'] = function () {}, u4df5['play'] = function () {
      this['isStopped'] = ![], q3687['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, u4df5['stop'] = function () {
      this['isStopped'] = !![], q3687['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (e_q8['_null'] != undefined) this['_audio']['onEnded'](e_q8['_null']);else try {
        this['_audio']['onEnded'](null), e_q8['_null'] = null;
      } catch (eq38$) {
        console['warn']('[wxmini] stop:' + eq38$), this['_audio']['onEnded'](xbnmtz['bind'](this['__onNull'], this)), e_q8['_null'] = xbnmtz['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, u4df5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, u4df5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], q3687['addChannel'](this), this['_audio']['play']();
    }, zmrsnb(0x0, u4df5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), zmrsnb(0x0, u4df5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), zmrsnb(0x0, u4df5, 'volume', function () {
      return 0x1;
    }, function (rmzb) {}), e_q8['_null'] = undefined, e_q8;
  }(fudo);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var k7v65a in Laya) {
    var nzmtxb = Laya[k7v65a];nzmtxb && nzmtxb['__isclass'] && (exports[k7v65a] = nzmtxb);
  }
});