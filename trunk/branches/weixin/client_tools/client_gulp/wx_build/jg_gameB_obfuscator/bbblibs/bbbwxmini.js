var _ = wx.y$;
(function (window, document, tuxwvy) {
  var lpmnk = tuxwvy['un'],
      kghjil = tuxwvy['uns'],
      wv$xz = tuxwvy['static'],
      dbfaec = tuxwvy['class'],
      _40321 = tuxwvy['getset'],
      qvs = tuxwvy['__newvec'],
      zwuxvy = laya['utils']['Browser'],
      tvurq = laya['events']['Event'],
      kojnml = laya['events']['EventDispatcher'],
      ifedhg = laya['resource']['HTMLImage'],
      fhkgij = laya['utils']['Handler'],
      $1_230 = laya['display']['Input'],
      ijglkh = laya['net']['Loader'],
      $zw_x = laya['maths']['Matrix'],
      ompqln = laya['renders']['Render'],
      gchfde = laya['utils']['RunDriver'],
      gefb = laya['media']['Sound'],
      stvuwr = laya['media']['SoundChannel'],
      twvuy = laya['media']['SoundManager'],
      gfjehi = laya['display']['Stage'],
      hdcfe = laya['net']['URL'],
      hgjfei = laya['utils']['Utils'],
      tpsoq = function () {
    function $_xwy() {}return dbfaec($_xwy, 'laya.wx.mini.MiniAdpter'), $_xwy['getJson'] = function (ywz$_x) {
      return JSON['parse'](ywz$_x);
    }, $_xwy['init'] = function (psro, oqrpts) {
      psro === void 0x0 && (psro = ![]), oqrpts === void 0x0 && (oqrpts = ![]);if ($_xwy['_inited']) return;$_xwy['window'] = window;if ($_xwy['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$_xwy['_inited'] = !![], $_xwy['isZiYu'] = oqrpts, $_xwy['isPosMsgYu'] = psro, $_xwy['EnvConfig'] = {}, !$_xwy['isZiYu'] && (vurw['setNativeFileDir']('/layaairGame'), vurw['existDir'](vurw['fileNativeDir'], fhkgij['create']($_xwy, $_xwy['onMkdirCallBack']))), $_xwy['window']['focus'] = function () {}, tuxwvy['getUrlPath'] = function () {}, $_xwy['window']['logtime'] = function (prmqn) {}, $_xwy['window']['alertTimeLog'] = function (jkih) {}, $_xwy['window']['resetShareInfo'] = function () {}, $_xwy['window']['CanvasRenderingContext2D'] = function () {}, $_xwy['window']['CanvasRenderingContext2D']['prototype'] = $_xwy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $_xwy['window']['document']['body']['appendChild'] = function () {}, $_xwy['EnvConfig']['pixelRatioInt'] = 0x0, gchfde['getPixelRatio'] = $_xwy['pixelRatio'], $_xwy['_preCreateElement'] = zwuxvy['createElement'], zwuxvy['createElement'] = $_xwy['createElement'], gchfde['createShaderCondition'] = $_xwy['createShaderCondition'], hgjfei['parseXMLFromString'] = $_xwy['parseXMLFromString'], $1_230['_createInputElement'] = cfegdb['_createInputElement'], $_xwy['EnvConfig']['load'] = ijglkh['prototype']['load'], ijglkh['prototype']['load'] = bdgefc['prototype']['load'], $_xwy['isZiYu'] && psro && wx['onMessage'](function (pnqs) {
        pnqs['isLoad'] && (vurw['ziyuFileData'][pnqs['url']] = pnqs['data']);
      });
    }, $_xwy['onMkdirCallBack'] = function (fkj, olkp) {
      if (!fkj) vurw['filesListObj'] = JSON['parse'](olkp['data']);
    }, $_xwy['pixelRatio'] = function () {
      if (!$_xwy['EnvConfig']['pixelRatioInt']) try {
        var lpqomn = wx['getSystemInfoSync']();return $_xwy['EnvConfig']['pixelRatioInt'] = lpqomn['pixelRatio'], lpqomn = lpqomn, lpqomn['pixelRatio'];
      } catch (jhigfe) {}return $_xwy['EnvConfig']['pixelRatioInt'];
    }, $_xwy['createElement'] = function (y0z_$) {
      if (y0z_$ == 'canvas') {
        var wuxyt;return $_xwy['idx'] == 0x1 ? $_xwy['isZiYu'] ? (wuxyt = sharedCanvas, wuxyt['style'] = {}) : wuxyt = window['canvas'] : wuxyt = window['wx']['createCanvas'](), $_xwy['idx']++, wuxyt;
      } else {
        if (y0z_$ == 'textarea' || y0z_$ == 'input') return $_xwy['onCreateInput'](y0z_$);else {
          if (y0z_$ == 'div') {
            var mokp = $_xwy['_preCreateElement'](y0z_$);return mokp['contains'] = function (hegfd) {
              return null;
            }, mokp['removeChild'] = function (fdhec) {}, mokp;
          } else return $_xwy['_preCreateElement'](y0z_$);
        }
      }
    }, $_xwy['onCreateInput'] = function (vxust) {
      var ecgfdb = $_xwy['_preCreateElement'](vxust);return ecgfdb['focus'] = cfegdb['wxinputFocus'], ecgfdb['blur'] = cfegdb['wxinputblur'], ecgfdb['style'] = {}, ecgfdb['value'] = 0x0, ecgfdb['parentElement'] = {}, ecgfdb['placeholder'] = {}, ecgfdb['type'] = {}, ecgfdb['setColor'] = function (bdcgfe) {}, ecgfdb['setType'] = function (tup) {}, ecgfdb['setFontFace'] = function (wy_xz$) {}, ecgfdb['addEventListener'] = function (mjnolk) {}, ecgfdb['contains'] = function (lpoq) {
        return null;
      }, ecgfdb['removeChild'] = function (qlon) {}, ecgfdb;
    }, $_xwy['createShaderCondition'] = function (nkmlop) {
      var $_20z1 = this,
          gfkhij = function () {
        var xvywu = nkmlop;return $_20z1[nkmlop['replace']('this.', '')];
      };return gfkhij;
    }, $_xwy['EnvConfig'] = null, $_xwy['window'] = null, $_xwy['_preCreateElement'] = null, $_xwy['_inited'] = ![], $_xwy['wxRequest'] = null, $_xwy['systemInfo'] = null, $_xwy['version'] = '0.0.1', $_xwy['isZiYu'] = ![], $_xwy['isPosMsgYu'] = ![], $_xwy['parseXMLFromString'] = function (tqvru) {
      var stxwvu, y$xz0;tqvru = tqvru['replace'](/>\s+</g, '><');try {
        stxwvu = new window['Parser']['DOMParser']()['parseFromString'](tqvru, 'text/xml');
      } catch (z_yxw$) {
        throw '需要引入xml解析库文件';
      }return stxwvu;
    }, $_xwy['idx'] = 0x1, $_xwy;
  }(),
      mronp = function () {
    function opnlq() {}dbfaec(opnlq, 'laya.wx.mini.MiniImage');var vwtuyx = opnlq['prototype'];return vwtuyx['_loadImage'] = function (pornq) {
      var utpqrs = this,
          tqosr = ![];pornq['indexOf']('layaNativeDir/') == -0x1 && (tqosr = !![], pornq = hdcfe['formatURL'](pornq));if (!vurw['getFileInfo'](pornq)) {
        if (pornq['indexOf']('http://') != -0x1 || pornq['indexOf']('https://') != -0x1) vurw['downImg'](pornq, new fhkgij(opnlq, opnlq['onDownImgCallBack'], [pornq, utpqrs]), pornq);else opnlq['onCreateImage'](pornq, utpqrs, !![]);
      } else opnlq['onCreateImage'](pornq, utpqrs, !tqosr);
    }, opnlq['onDownImgCallBack'] = function (vtxuw, _230, tsopr) {
      if (!tsopr) opnlq['onCreateImage'](vtxuw, _230);else _230['onError'](null);
    }, opnlq['onCreateImage'] = function (srupqt, nilk, utrw) {
      utrw === void 0x0 && (utrw = ![]);var njokml;if (!utrw) {
        var ehfji = vurw['getFileInfo'](srupqt),
            y1_z$ = ehfji['md5'];njokml = vurw['getFileNativePath'](y1_z$);
      } else njokml = srupqt;if (nilk['imgCache'] == null) nilk['imgCache'] = {};var $z0y1_;function khmlj() {
        $z0y1_['onload'] = null, $z0y1_['onerror'] = null, delete nilk['imgCache'][srupqt];
      };var wuzvx = function () {
        khmlj(), nilk['onLoaded']($z0y1_);
      },
          wtuxs = function () {
        khmlj(), nilk['event']('error', 'Load image failed');
      };nilk['_type'] == 'nativeimage' ? ($z0y1_ = new zwuxvy['window']['Image'](), $z0y1_['crossOrigin'] = '', $z0y1_['onload'] = wuzvx, $z0y1_['onerror'] = wtuxs, $z0y1_['src'] = njokml, nilk['imgCache'][srupqt] = $z0y1_) : new ifedhg['create'](njokml, { 'onload': wuzvx, 'onerror': wtuxs, 'onCreate': function (fhcdg) {
          $z0y1_ = fhcdg, nilk['imgCache'][srupqt] = fhcdg;
        } });
    }, opnlq;
  }(),
      cfegdb = function () {
    function tvqrus() {}return dbfaec(tvqrus, 'laya.wx.mini.MiniInput'), tvqrus['_createInputElement'] = function () {
      $1_230['_initInput']($1_230['area'] = zwuxvy['createElement']('textarea')), $1_230['_initInput']($1_230['input'] = zwuxvy['createElement']('input')), $1_230['inputContainer'] = zwuxvy['createElement']('div'), $1_230['inputContainer']['style']['position'] = 'absolute', $1_230['inputContainer']['style']['zIndex'] = 0x186a0, zwuxvy['container']['appendChild']($1_230['inputContainer']), $1_230['inputContainer']['setPos'] = function (trsvuq, lgj) {
        $1_230['inputContainer']['style']['left'] = trsvuq + 'px', $1_230['inputContainer']['style']['top'] = lgj + 'px';
      }, tuxwvy['stage']['on']('resize', null, tvqrus['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lhimj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), twvuy['_soundClass'] = prsqut, twvuy['_musicClass'] = prsqut;
    }, tvqrus['_onStageResize'] = function () {
      var rpqu = tuxwvy['stage']['_canvasTransform']['identity']();rpqu['scale'](zwuxvy['width'] / ompqln['canvas']['width'] / gchfde['getPixelRatio'](), zwuxvy['height'] / ompqln['canvas']['height'] / gchfde['getPixelRatio']());
    }, tvqrus['wxinputFocus'] = function (jfgehi) {
      var komlj = $1_230['inputElement']['target'];if (komlj && !komlj['editable']) return;tpsoq['window']['wx']['offKeyboardConfirm'](), tpsoq['window']['wx']['offKeyboardInput'](), tpsoq['window']['wx']['showKeyboard']({ 'defaultValue': komlj['text'], 'maxLength': komlj['maxChars'], 'multiple': komlj['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (v$xw) {}, 'fail': function (jlimhk) {} }), tpsoq['window']['wx']['onKeyboardConfirm'](function (fcbae) {
        var wutsx = fcbae ? fcbae['value'] : '';komlj['text'] = wutsx, komlj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tpsoq['window']['wx']['onKeyboardInput'](function (glijkh) {
        var bcfdg = glijkh ? glijkh['value'] : '';if (!komlj['multiline']) {
          if (bcfdg['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }komlj['text'] = bcfdg, komlj['event']('input');
      });
    }, tvqrus['inputEnter'] = function () {
      $1_230['inputElement']['target']['focus'] = ![];
    }, tvqrus['wxinputblur'] = function () {
      tvqrus['hideKeyboard']();
    }, tvqrus['hideKeyboard'] = function () {
      tpsoq['window']['wx']['offKeyboardConfirm'](), tpsoq['window']['wx']['offKeyboardInput'](), tpsoq['window']['wx']['hideKeyboard']({ 'success': function (lkopm) {
          console['log']('隐藏键盘');
        }, 'fail': function (ifjge) {
          console['log']('隐藏键盘出错:' + (ifjge ? ifjge['errMsg'] : ''));
        } });
    }, tvqrus;
  }(),
      bdgefc = function () {
    function _$01y() {}dbfaec(_$01y, 'laya.wx.mini.MiniLoader');var rtvqus = _$01y['prototype'];return rtvqus['load'] = function (nojklm, fab, feghi, pruqts, x$yv) {
      feghi === void 0x0 && (feghi = !![]), x$yv === void 0x0 && (x$yv = ![]);var y_z$01 = this;y_z$01['_url'] = nojklm;if (nojklm['indexOf']('data:image') === 0x0) y_z$01['_type'] = fab = 'image';else y_z$01['_type'] = fab || (fab = y_z$01['getTypeFromUrl'](nojklm));y_z$01['_cache'] = feghi, y_z$01['_data'] = null;var edafb = 'ascii';if (nojklm['indexOf']('.fnt') != -0x1) edafb = 'utf8';else fab == 'arraybuffer' && (edafb = '');;var ilmjnk = hgjfei['getFileExtension'](nojklm);if (_$01y['_fileTypeArr']['indexOf'](ilmjnk) != -0x1) tpsoq['EnvConfig']['load']['call'](this, nojklm, fab, feghi, pruqts, x$yv);else {
        if (!vurw['getFileInfo'](nojklm)) {
          if (nojklm['indexOf']('layaNativeDir/') != -0x1) {
            if (tpsoq['isZiYu']) {
              var yz$wv = vurw['ziyuFileData'][nojklm];y_z$01['onLoaded'](yz$wv);return;
            } else {
              cosnole['log']('read read'), vurw['read'](nojklm, edafb, new fhkgij(_$01y, _$01y['onReadNativeCallBack'], [edafb, nojklm, fab, feghi, pruqts, x$yv, y_z$01]));return;
            }
          }if (hdcfe['rootPath'] == '') var eh = nojklm;else eh = nojklm['split'](hdcfe['rootPath'])[0x0];nojklm['indexOf']('http://') != -0x1 || nojklm['indexOf']('https://') != -0x1 ? tpsoq['EnvConfig']['load']['call'](y_z$01, nojklm, fab, feghi, pruqts, x$yv) : vurw['readFile'](eh, edafb, new fhkgij(_$01y, _$01y['onReadNativeCallBack'], [edafb, nojklm, fab, feghi, pruqts, x$yv, y_z$01]), nojklm);
        } else tpsoq['EnvConfig']['load']['call'](this, nojklm, fab, feghi, pruqts, x$yv);
      }
    }, rtvqus['resMgrLoad'] = function (xvwuty, bfaedc, lkhijg, onmpk, qrupts, lkjmni, jklmn) {
      lkhijg === void 0x0 && (lkhijg = 0x0), onmpk === void 0x0 && (onmpk = ![]), qrupts === void 0x0 && (qrupts = ![]), lkjmni === void 0x0 && (lkjmni = 0x0), jklmn === void 0x0 && (jklmn = 0x3), xvwuty['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xvwuty), tpsoq['EnvConfig']['resMgrLoad'](xvwuty, (onr, xvwz, w$yz_) => {
        _$01y['prototype']['resMgrLoadCallBack'](onr, xvwz, w$yz_, bfaedc);
      }, lkhijg, onmpk, qrupts, lkjmni, jklmn);
    }, rtvqus['resMgrLoadCallBack'] = function (qlopmn, kfjgi, zy$x0, mpolkn) {
      console['log']('buff:::', qlopmn, zy$x0, vurw['fileNativeDir'] + '///' + vurw['fileListName']), mpolkn(qlopmn, kfjgi, zy$x0);
    }, rtvqus['clearRes'] = function (lpnom, nkolmp) {
      nkolmp === void 0x0 && (nkolmp = ![]);var uxstv = this;uxstv['clearRes'](lpnom, nkolmp);var fdgecb = vurw['getFileInfo'](lpnom);if (fdgecb && (lpnom['indexOf']('http://') != -0x1 || lpnom['indexOf']('https://') != -0x1)) {
        var wuyzvx = fdgecb['md5'],
            hkjg = vurw['getFileNativePath'](wuyzvx);vurw['remove'](hkjg);
      }
    }, _$01y['onReadNativeCallBack'] = function (egfdih, qlnpm, fgheji, sqtpo, $zvxyw, $wyv, kihjl, gjihlk, y$wzx) {
      sqtpo === void 0x0 && (sqtpo = !![]), $wyv === void 0x0 && ($wyv = ![]), gjihlk === void 0x0 && (gjihlk = 0x0);if (!gjihlk) {
        var edbaf;if (fgheji == 'json' || fgheji == 'atlas') edbaf = tpsoq['getJson'](y$wzx['data']);else fgheji == 'xml' ? edbaf = hgjfei['parseXMLFromString'](y$wzx['data']) : edbaf = y$wzx['data'];kihjl['onLoaded'](edbaf), !tpsoq['isZiYu'] && tpsoq['isPosMsgYu'] && fgheji != 'arraybuffer' && wx['postMessage']({ 'url': qlnpm, 'data': edbaf, 'isLoad': !![] });
      } else gjihlk == 0x1 && tpsoq['EnvConfig']['load']['call'](kihjl, qlnpm, fgheji, sqtpo, $zvxyw, $wyv);
    }, wv$xz(_$01y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _$01y;
  }(),
      vurw = function (nlmkij) {
    function ruwvst() {
      ruwvst['__super']['call'](this);;
    }return dbfaec(ruwvst, 'laya.wx.mini.MiniFileMgr', nlmkij), ruwvst['isLoadFile'] = function (_0231$) {
      return ruwvst['_fileTypeArr']['indexOf'](_0231$) != -0x1 ? !![] : ![];
    }, ruwvst['getFileInfo'] = function (lnkmop) {
      var z0_1y = lnkmop['split']('?')[0x0],
          befa = ruwvst['filesListObj'][z0_1y];if (befa == null) return null;else return befa;return null;
    }, ruwvst['onFileUpdate'] = function (rtqspu, ijnmkl) {
      var lgkj = rtqspu['split']('/'),
          lonjmk = lgkj[lgkj['length'] - 0x1],
          cbfed = ruwvst['getFileInfo'](ijnmkl);if (cbfed == null) ruwvst['onSaveFile'](ijnmkl, lonjmk);else {
        if (cbfed['readyUrl'] != ijnmkl) ruwvst['remove'](lonjmk, ijnmkl);
      }
    }, ruwvst['exits'] = function (z_1y$, kglhji) {
      var usqptr = ruwvst['getFileNativePath'](z_1y$);ruwvst['fs']['getFileInfo']({ 'filePath': usqptr, 'success': function (sturw) {
          kglhji != null && kglhji['runWith']([0x0, sturw]);
        }, 'fail': function (nqsopr) {
          kglhji != null && kglhji['runWith']([0x1, nqsopr]);
        } });
    }, ruwvst['read'] = function (ojlkn, yw_zx$, lkmi, ikjmn) {
      yw_zx$ === void 0x0 && (yw_zx$ = 'ascill'), ikjmn === void 0x0 && (ikjmn = '');var gklihj;ikjmn != '' ? gklihj = ruwvst['getFileNativePath'](ojlkn) : gklihj = ojlkn, ruwvst['fs']['readFile']({ 'filePath': gklihj, 'encoding': yw_zx$, 'success': function (sqtpru) {
          lkmi != null && lkmi['runWith']([0x0, sqtpru]);
        }, 'fail': function (_$y1z0) {
          if (_$y1z0 && ikjmn != '') ruwvst['down'](ikjmn, yw_zx$, lkmi, ikjmn);else lkmi != null && lkmi['runWith']([0x1]);
        } });
    }, ruwvst['readNativeFile'] = function (z21$, iljhg) {
      ruwvst['fs']['readFile']({ 'filePath': z21$, 'encoding': '', 'success': function (knljmo) {
          iljhg != null && iljhg['runWith']([0x0]);
        }, 'fail': function (normqp) {
          iljhg != null && iljhg['runWith']([0x1]);
        } });
    }, ruwvst['down'] = function (trusv, mkhjl, tvsurq, mkno) {
      mkhjl === void 0x0 && (mkhjl = 'ascill'), mkno === void 0x0 && (mkno = '');var cdfba = ruwvst['getFileNativePath'](mkno),
          vzxy$ = ruwvst['wxdown']({ 'url': trusv, 'filePath': cdfba, 'success': function (oqptsr) {
          if (oqptsr['statusCode'] === 0xc8) ruwvst['readFile'](oqptsr['filePath'], mkhjl, tvsurq, mkno);
        }, 'fail': function (rsqon) {
          tvsurq != null && tvsurq['runWith']([0x1, rsqon]);
        } });vzxy$['onProgressUpdate'](function (xtswuv) {
        tvsurq != null && tvsurq['runWith']([0x2, xtswuv['progress']]);
      });
    }, ruwvst['readFile'] = function (dhe, yx0_$, $zw_, vutsw) {
      yx0_$ === void 0x0 && (yx0_$ = 'ascill'), vutsw === void 0x0 && (vutsw = ''), ruwvst['fs']['readFile']({ 'filePath': dhe, 'encoding': yx0_$, 'success': function (mopkn) {
          if (dhe['indexOf']('http://') != -0x1 || dhe['indexOf']('https://') != -0x1) ruwvst['onFileUpdate'](dhe, vutsw);$zw_ != null && $zw_['runWith']([0x0, mopkn]);
        }, 'fail': function ($w_yx) {
          if ($w_yx) $zw_ != null && $zw_['runWith']([0x1, $w_yx]);
        } });
    }, ruwvst['downImg'] = function (caebdf, inmjl, ifhkj) {
      ifhkj === void 0x0 && (ifhkj = '');var wsutxv = ruwvst['wxdown']({ 'url': caebdf, 'success': function (wyxut) {
          wyxut['statusCode'] === 0xc8 && ruwvst['copyFile'](wyxut['tempFilePath'], ifhkj, inmjl);
        }, 'fail': function (stuvxw) {
          inmjl != null && inmjl['runWith']([0x1, stuvxw]);
        } });
    }, ruwvst['copyFile'] = function (pomnk, zx$vw, pqnors) {
      var dfe = pomnk['split']('/'),
          vusw = dfe[dfe['length'] - 0x1],
          wvtuxs = zx$vw['split']('?')[0x0],
          mop = ruwvst['getFileInfo'](zx$vw),
          hcgdfe = ruwvst['getFileNativePath'](vusw);ruwvst['fs']['copyFile']({ 'srcPath': pomnk, 'destPath': hcgdfe, 'success': function (kmonpl) {
          if (!mop) ruwvst['onSaveFile'](zx$vw, vusw), pqnors != null && pqnors['runWith']([0x0]);else {
            if (mop['readyUrl'] != zx$vw) ruwvst['remove'](vusw, zx$vw, pqnors);
          }
        }, 'fail': function (rqt) {
          pqnors != null && pqnors['runWith']([0x1, rqt]);
        } });
    }, ruwvst['getFileNativePath'] = function (iehdgf) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + iehdgf;
    }, ruwvst['remove'] = function (oplmk, xvy$w, _2z01) {
      xvy$w === void 0x0 && (xvy$w = '');var dbaecf = ruwvst['getFileInfo'](xvy$w),
          fhjkig = ruwvst['getFileNativePath'](dbaecf['md5']);tuxwvy['loader']['clearRes'](dbaecf['readyUrl']), ruwvst['fs']['unlink']({ 'filePath': fhjkig, 'success': function (ljmhk) {
          if (xvy$w != '') ruwvst['onSaveFile'](xvy$w, oplmk);_2z01 != null && _2z01['runWith']([0x0]);
        }, 'fail': function (nrqp) {} });
    }, ruwvst['onSaveFile'] = function (pokm, svur) {
      var hikg = pokm['split']('?')[0x0];ruwvst['filesListObj'][hikg] = { 'md5': svur, 'readyUrl': pokm }, ruwvst['fs']['writeFile']({ 'filePath': ruwvst['fileNativeDir'] + '/' + ruwvst['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ruwvst['filesListObj']), 'success': function (z_0x) {
          console['log']('写入测试测试成功：', z_0x);
        }, 'fail': function (onspr) {
          console['log']('写入测试测试失败：', onspr);
        } });
    }, ruwvst['existDir'] = function (qspno, $2z1_0) {
      ruwvst['fs']['mkdir']({ 'dirPath': qspno, 'success': function (yvwtux) {
          $2z1_0 != null && $2z1_0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (khligj) {
          if (khligj['errMsg']['indexOf']('file already exists') != -0x1) ruwvst['readSync'](ruwvst['fileListName'], 'utf8', $2z1_0);else $2z1_0 != null && $2z1_0['runWith']([0x1, khligj]);
        } });
    }, ruwvst['readSync'] = function (vqtr, _4023, xtsuv, opnr) {
      _4023 === void 0x0 && (_4023 = 'ascill'), opnr === void 0x0 && (opnr = '');var lkhmji = ruwvst['getFileNativePath'](vqtr),
          gcfdb;try {
        gcfdb = ruwvst['fs']['readFileSync'](lkhmji), xtsuv != null && xtsuv['runWith']([0x0, { 'data': gcfdb }]);
      } catch (qmnrop) {
        xtsuv != null && xtsuv['runWith']([0x1]);
      }
    }, ruwvst['readCache'] = function () {}, ruwvst['writeCache'] = function ($z0xy_) {
      var mronpq = readyUrl['split']('?')[0x0];ruwvst['filesListObj'][mronpq] = { 'md5': md5Name, 'readyUrl': readyUrl }, ruwvst['fs']['writeFile']({ 'filePath': ruwvst['fileNativeDir'] + '/' + ruwvst['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ruwvst['filesListObj']), 'success': function (nkjmo) {}, 'fail': function (lhikg) {} });
    }, ruwvst['setNativeFileDir'] = function (hgije) {
      ruwvst['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hgije;
    }, ruwvst['filesListObj'] = {}, ruwvst['fileNativeDir'] = null, ruwvst['fileListName'] = 'layaairfiles.txt', ruwvst['ziyuFileData'] = {}, wv$xz(ruwvst, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ruwvst;
  }(kojnml),
      prsqut = function (lhkgij) {
    function $2z_0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $2z_0['__super']['call'](this), this['_sound'] = $2z_0['_createSound']();
    }dbfaec($2z_0, 'laya.wx.mini.MiniSound', lhkgij);var upqstr = $2z_0['prototype'];return upqstr['load'] = function (khijlg) {
      var $xzy = this;khijlg = hdcfe['formatURL'](khijlg), this['url'] = khijlg;if ($2z_0['_audioCache'][khijlg]) {
        this['event']('complete');return;
      }function zx$0_y() {
        if ($2z_0['_null'] != undefined) $xzy['_sound']['onCanplay']($2z_0['_null']), $xzy['_sound']['onError']($2z_0['_null']);else try {
          $xzy['_sound']['onCanplay'](null), $xzy['_sound']['onError'](null), $2z_0['_null'] = null;
        } catch (jihfk) {
          console['warn']('[wxmini] _clearSound:' + jihfk), $xzy['_sound']['onCanplay'](hfedcg), $xzy['_sound']['onError'](hfedcg), $2z_0['_null'] = hfedcg;
        }
      }function nop() {
        zx$0_y(), lmopn['loaded'] = !![], lmopn['event']('complete'), $2z_0['_audioCache'][lmopn['url']] = lmopn;
      }function z0$_1(ptqro) {
        console['error']('errCode=' + ptqro['errCode'] + '  errMsg=' + ptqro['errMsg']), zx$0_y(), lmopn['event']('error');
      }function hfedcg() {}this['_sound']['onCanplay'](nop), this['_sound']['onError'](z0$_1), this['_sound']['src'] = khijlg;var lmopn = this;
    }, upqstr['play'] = function (rvtuq, txvywu) {
      rvtuq === void 0x0 && (rvtuq = 0x0), txvywu === void 0x0 && (txvywu = 0x0);var $z1y0;if (this['url'] == twvuy['_tMusic']) {
        if (!$2z_0['_musicAudio']) $2z_0['_musicAudio'] = $2z_0['_createSound']();$z1y0 = $2z_0['_musicAudio'];
      } else $z1y0 = $2z_0['_createSound']();$z1y0['src'] = this['url'];var eigf = new txvyu($z1y0);return eigf['url'] = this['url'], eigf['loops'] = txvywu, eigf['startTime'] = rvtuq, eigf['play'](), twvuy['addChannel'](eigf), eigf;
    }, upqstr['dispose'] = function () {
      var beafc = $2z_0['_audioCache'][this['url']];beafc && (beafc['src'] = '', delete $2z_0['_audioCache'][this['url']]);
    }, _40321(0x0, upqstr, 'duration', function () {
      return this['_sound']['duration'];
    }), $2z_0['_createSound'] = function () {
      return $2z_0['_id']++, tpsoq['window']['wx']['createInnerAudioContext']();
    }, $2z_0['_musicAudio'] = null, $2z_0['_id'] = 0x0, $2z_0['_audioCache'] = {}, $2z_0['_null'] = undefined, $2z_0;
  }(kojnml),
      txvyu = function (tvrsw) {
    function qnro(purtsq) {
      this['_audio'] = null, this['_onEnd'] = null, qnro['__super']['call'](this), this['_audio'] = purtsq, this['_onEnd'] = hgjfei['bind'](this['__onEnd'], this), purtsq['onEnded'](this['_onEnd']);
    }dbfaec(qnro, 'laya.wx.mini.MiniSoundChannel', tvrsw);var yz = qnro['prototype'];return yz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tuxwvy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yz['__onNull'] = function () {}, yz['play'] = function () {
      this['isStopped'] = ![], twvuy['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, yz['stop'] = function () {
      this['isStopped'] = !![], twvuy['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qnro['_null'] != undefined) this['_audio']['onEnded'](qnro['_null']);else try {
        this['_audio']['onEnded'](null), qnro['_null'] = null;
      } catch (fcda) {
        console['warn']('[wxmini] stop:' + fcda), this['_audio']['onEnded'](hgjfei['bind'](this['__onNull'], this)), qnro['_null'] = hgjfei['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, yz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, yz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], twvuy['addChannel'](this), this['_audio']['play']();
    }, _40321(0x0, yz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _40321(0x0, yz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _40321(0x0, yz, 'volume', function () {
      return 0x1;
    }, function (lmjnko) {}), qnro['_null'] = undefined, qnro;
  }(stvuwr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wvrust in Laya) {
    var uxywzv = Laya[wvrust];uxywzv && uxywzv['__isclass'] && (exports[wvrust] = uxywzv);
  }
});