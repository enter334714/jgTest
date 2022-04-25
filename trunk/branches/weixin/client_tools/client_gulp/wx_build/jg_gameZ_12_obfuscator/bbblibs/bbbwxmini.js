var _ = wx.y$;
(function (window, document, tsuvq) {
  var yz$x0_ = tsuvq['un'],
      zx0y = tsuvq['uns'],
      wsvrut = tsuvq['static'],
      ihgdf = tsuvq['class'],
      pu = tsuvq['getset'],
      lnojk = tsuvq['__newvec'],
      zxy$0 = laya['utils']['Browser'],
      bgf = laya['events']['Event'],
      nkjilm = laya['events']['EventDispatcher'],
      xvzyw = laya['resource']['HTMLImage'],
      txvws = laya['utils']['Handler'],
      plnmko = laya['display']['Input'],
      rvwtu = laya['net']['Loader'],
      cgfhd = laya['maths']['Matrix'],
      tqpro = laya['renders']['Render'],
      wusvr = laya['utils']['RunDriver'],
      gjihkl = laya['media']['Sound'],
      uxtywv = laya['media']['SoundChannel'],
      qvtsu = laya['media']['SoundManager'],
      zxuyw = laya['display']['Stage'],
      lkopnm = laya['net']['URL'],
      becafd = laya['utils']['Utils'],
      tvw = function () {
    function zxuywv() {}return ihgdf(zxuywv, 'laya.wx.mini.MiniAdpter'), zxuywv['getJson'] = function (qsropn) {
      return JSON['parse'](qsropn);
    }, zxuywv['init'] = function (ponmk, qnpmor) {
      ponmk === void 0x0 && (ponmk = ![]), qnpmor === void 0x0 && (qnpmor = ![]);if (zxuywv['_inited']) return;zxuywv['window'] = window;if (zxuywv['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zxuywv['_inited'] = !![], zxuywv['isZiYu'] = qnpmor, zxuywv['isPosMsgYu'] = ponmk, zxuywv['EnvConfig'] = {}, !zxuywv['isZiYu'] && (lmkjo['setNativeFileDir']('/layaairGame'), lmkjo['existDir'](lmkjo['fileNativeDir'], txvws['create'](zxuywv, zxuywv['onMkdirCallBack']))), zxuywv['window']['focus'] = function () {}, tsuvq['getUrlPath'] = function () {}, zxuywv['window']['logtime'] = function (pmoqr) {}, zxuywv['window']['alertTimeLog'] = function (miljn) {}, zxuywv['window']['resetShareInfo'] = function () {}, zxuywv['window']['CanvasRenderingContext2D'] = function () {}, zxuywv['window']['CanvasRenderingContext2D']['prototype'] = zxuywv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zxuywv['window']['document']['body']['appendChild'] = function () {}, zxuywv['EnvConfig']['pixelRatioInt'] = 0x0, wusvr['getPixelRatio'] = zxuywv['pixelRatio'], zxuywv['_preCreateElement'] = zxy$0['createElement'], zxy$0['createElement'] = zxuywv['createElement'], wusvr['createShaderCondition'] = zxuywv['createShaderCondition'], becafd['parseXMLFromString'] = zxuywv['parseXMLFromString'], plnmko['_createInputElement'] = dfehcg['_createInputElement'], zxuywv['EnvConfig']['load'] = rvwtu['prototype']['load'], rvwtu['prototype']['load'] = dbgfc['prototype']['load'], zxuywv['isZiYu'] && ponmk && wx['onMessage'](function (vuqsrt) {
        vuqsrt['isLoad'] && (lmkjo['ziyuFileData'][vuqsrt['url']] = vuqsrt['data']);
      });
    }, zxuywv['onMkdirCallBack'] = function (_yz$0, otps) {
      if (!_yz$0) lmkjo['filesListObj'] = JSON['parse'](otps['data']);
    }, zxuywv['pixelRatio'] = function () {
      if (!zxuywv['EnvConfig']['pixelRatioInt']) try {
        var _431 = wx['getSystemInfoSync']();return zxuywv['EnvConfig']['pixelRatioInt'] = _431['pixelRatio'], _431 = _431, _431['pixelRatio'];
      } catch ($y1_z) {}return zxuywv['EnvConfig']['pixelRatioInt'];
    }, zxuywv['createElement'] = function (vtsrqu) {
      if (vtsrqu == 'canvas') {
        var feijhg;return zxuywv['idx'] == 0x1 ? zxuywv['isZiYu'] ? (feijhg = sharedCanvas, feijhg['style'] = {}) : feijhg = window['canvas'] : feijhg = window['wx']['createCanvas'](), zxuywv['idx']++, feijhg;
      } else {
        if (vtsrqu == 'textarea' || vtsrqu == 'input') return zxuywv['onCreateInput'](vtsrqu);else {
          if (vtsrqu == 'div') {
            var jnmik = zxuywv['_preCreateElement'](vtsrqu);return jnmik['contains'] = function (trqs) {
              return null;
            }, jnmik['removeChild'] = function (oqrpnm) {}, jnmik;
          } else return zxuywv['_preCreateElement'](vtsrqu);
        }
      }
    }, zxuywv['onCreateInput'] = function (jlkmi) {
      var hefdg = zxuywv['_preCreateElement'](jlkmi);return hefdg['focus'] = dfehcg['wxinputFocus'], hefdg['blur'] = dfehcg['wxinputblur'], hefdg['style'] = {}, hefdg['value'] = 0x0, hefdg['parentElement'] = {}, hefdg['placeholder'] = {}, hefdg['type'] = {}, hefdg['setColor'] = function (okpnlm) {}, hefdg['setType'] = function (xvw$) {}, hefdg['setFontFace'] = function (rtsop) {}, hefdg['addEventListener'] = function (bdcfge) {}, hefdg['contains'] = function (ijgkh) {
        return null;
      }, hefdg['removeChild'] = function (rswt) {}, hefdg;
    }, zxuywv['createShaderCondition'] = function (vutxs) {
      var _23140 = this,
          gjkfh = function () {
        var defhi = vutxs;return _23140[vutxs['replace']('this.', '')];
      };return gjkfh;
    }, zxuywv['EnvConfig'] = null, zxuywv['window'] = null, zxuywv['_preCreateElement'] = null, zxuywv['_inited'] = ![], zxuywv['wxRequest'] = null, zxuywv['systemInfo'] = null, zxuywv['version'] = '0.0.1', zxuywv['isZiYu'] = ![], zxuywv['isPosMsgYu'] = ![], zxuywv['parseXMLFromString'] = function (vxuswt) {
      var jifh, wzy$;vxuswt = vxuswt['replace'](/>\s+</g, '><');try {
        jifh = new window['Parser']['DOMParser']()['parseFromString'](vxuswt, 'text/xml');
      } catch (kmnp) {
        throw '需要引入xml解析库文件';
      }return jifh;
    }, zxuywv['idx'] = 0x1, zxuywv;
  }(),
      ijklgh = function () {
    function zvw$xy() {}ihgdf(zvw$xy, 'laya.wx.mini.MiniImage');var y_0$1 = zvw$xy['prototype'];return y_0$1['_loadImage'] = function (qmpnro) {
      var _01y$ = this,
          ieghdf = ![];qmpnro['indexOf']('layaNativeDir/') == -0x1 && (ieghdf = !![], qmpnro = lkopnm['formatURL'](qmpnro));if (!lmkjo['getFileInfo'](qmpnro)) {
        if (qmpnro['indexOf']('http://') != -0x1 || qmpnro['indexOf']('https://') != -0x1) lmkjo['downImg'](qmpnro, new txvws(zvw$xy, zvw$xy['onDownImgCallBack'], [qmpnro, _01y$]), qmpnro);else zvw$xy['onCreateImage'](qmpnro, _01y$, !![]);
      } else zvw$xy['onCreateImage'](qmpnro, _01y$, !ieghdf);
    }, zvw$xy['onDownImgCallBack'] = function (fhej, gjhife, rmnp) {
      if (!rmnp) zvw$xy['onCreateImage'](fhej, gjhife);else gjhife['onError'](null);
    }, zvw$xy['onCreateImage'] = function (vywtu, _y$z01, eijhf) {
      eijhf === void 0x0 && (eijhf = ![]);var echfdg;if (!eijhf) {
        var ligjk = lmkjo['getFileInfo'](vywtu),
            dcfeab = ligjk['md5'];echfdg = lmkjo['getFileNativePath'](dcfeab);
      } else echfdg = vywtu;if (_y$z01['imgCache'] == null) _y$z01['imgCache'] = {};var qrut;function y1_z0() {
        qrut['onload'] = null, qrut['onerror'] = null, delete _y$z01['imgCache'][vywtu];
      };var qvt = function () {
        y1_z0(), _y$z01['onLoaded'](qrut);
      },
          uvzwyx = function () {
        y1_z0(), _y$z01['event']('error', 'Load image failed');
      };_y$z01['_type'] == 'nativeimage' ? (qrut = new zxy$0['window']['Image'](), qrut['crossOrigin'] = '', qrut['onload'] = qvt, qrut['onerror'] = uvzwyx, qrut['src'] = echfdg, _y$z01['imgCache'][vywtu] = qrut) : new xvzyw['create'](echfdg, { 'onload': qvt, 'onerror': uvzwyx, 'onCreate': function (qnolpm) {
          qrut = qnolpm, _y$z01['imgCache'][vywtu] = qnolpm;
        } });
    }, zvw$xy;
  }(),
      dfehcg = function () {
    function vrwut() {}return ihgdf(vrwut, 'laya.wx.mini.MiniInput'), vrwut['_createInputElement'] = function () {
      plnmko['_initInput'](plnmko['area'] = zxy$0['createElement']('textarea')), plnmko['_initInput'](plnmko['input'] = zxy$0['createElement']('input')), plnmko['inputContainer'] = zxy$0['createElement']('div'), plnmko['inputContainer']['style']['position'] = 'absolute', plnmko['inputContainer']['style']['zIndex'] = 0x186a0, zxy$0['container']['appendChild'](plnmko['inputContainer']), plnmko['inputContainer']['setPos'] = function (nmpkl, mnlijk) {
        plnmko['inputContainer']['style']['left'] = nmpkl + 'px', plnmko['inputContainer']['style']['top'] = mnlijk + 'px';
      }, tsuvq['stage']['on']('resize', null, vrwut['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gbfcd) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qvtsu['_soundClass'] = osnrqp, qvtsu['_musicClass'] = osnrqp, window['_videoClass'] = ihfedg;
    }, vrwut['_onStageResize'] = function () {
      var tosrqp = tsuvq['stage']['_canvasTransform']['identity']();tosrqp['scale'](zxy$0['width'] / tqpro['canvas']['width'] / wusvr['getPixelRatio'](), zxy$0['height'] / tqpro['canvas']['height'] / wusvr['getPixelRatio']());
    }, vrwut['wxinputFocus'] = function (tqpor) {
      var yzvxuw = plnmko['inputElement']['target'];if (yzvxuw && !yzvxuw['editable']) return;tvw['window']['wx']['offKeyboardConfirm'](), tvw['window']['wx']['offKeyboardInput'](), tvw['window']['wx']['showKeyboard']({ 'defaultValue': yzvxuw['text'], 'maxLength': yzvxuw['maxChars'], 'multiple': yzvxuw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lkgi) {}, 'fail': function (oklj) {} }), tvw['window']['wx']['onKeyboardConfirm'](function (xwy_z$) {
        var vyxwz = xwy_z$ ? xwy_z$['value'] : '';yzvxuw['text'] = vyxwz, yzvxuw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tvw['window']['wx']['onKeyboardInput'](function (rwvust) {
        var degf = rwvust ? rwvust['value'] : '';if (!yzvxuw['multiline']) {
          if (degf['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yzvxuw['text'] = degf, yzvxuw['event']('input');
      });
    }, vrwut['inputEnter'] = function () {
      plnmko['inputElement']['target']['focus'] = ![];
    }, vrwut['wxinputblur'] = function () {
      vrwut['hideKeyboard']();
    }, vrwut['hideKeyboard'] = function () {
      tvw['window']['wx']['offKeyboardConfirm'](), tvw['window']['wx']['offKeyboardInput'](), tvw['window']['wx']['hideKeyboard']({ 'success': function (qutsvr) {
          console['log']('隐藏键盘');
        }, 'fail': function (jhikl) {
          console['log']('隐藏键盘出错:' + (jhikl ? jhikl['errMsg'] : ''));
        } });
    }, vrwut;
  }(),
      dbgfc = function () {
    function ruvswt() {}ihgdf(ruvswt, 'laya.wx.mini.MiniLoader');var hfiegd = ruvswt['prototype'];return hfiegd['load'] = function (zx0$_y, uwsrtv, fehj, yxz, pnqos) {
      fehj === void 0x0 && (fehj = !![]), pnqos === void 0x0 && (pnqos = ![]);var rnmqp = this;rnmqp['_url'] = zx0$_y;if (zx0$_y['indexOf']('data:image') === 0x0) rnmqp['_type'] = uwsrtv = 'image';else rnmqp['_type'] = uwsrtv || (uwsrtv = rnmqp['getTypeFromUrl'](zx0$_y));rnmqp['_cache'] = fehj, rnmqp['_data'] = null;var trqops = 'ascii';if (zx0$_y['indexOf']('.fnt') != -0x1) trqops = 'utf8';else uwsrtv == 'arraybuffer' && (trqops = '');;var qtosr = becafd['getFileExtension'](zx0$_y);if (ruvswt['_fileTypeArr']['indexOf'](qtosr) != -0x1) tvw['EnvConfig']['load']['call'](this, zx0$_y, uwsrtv, fehj, yxz, pnqos);else {
        if (!lmkjo['getFileInfo'](zx0$_y)) {
          if (zx0$_y['indexOf']('layaNativeDir/') != -0x1) {
            if (tvw['isZiYu']) {
              var z_x0 = lmkjo['ziyuFileData'][zx0$_y];rnmqp['onLoaded'](z_x0);return;
            } else {
              cosnole['log']('read read'), lmkjo['read'](zx0$_y, trqops, new txvws(ruvswt, ruvswt['onReadNativeCallBack'], [trqops, zx0$_y, uwsrtv, fehj, yxz, pnqos, rnmqp]));return;
            }
          }if (lkopnm['rootPath'] == '') var ejhif = zx0$_y;else ejhif = zx0$_y['split'](lkopnm['rootPath'])[0x0];zx0$_y['indexOf']('http://') != -0x1 || zx0$_y['indexOf']('https://') != -0x1 ? tvw['EnvConfig']['load']['call'](rnmqp, zx0$_y, uwsrtv, fehj, yxz, pnqos) : lmkjo['readFile'](ejhif, trqops, new txvws(ruvswt, ruvswt['onReadNativeCallBack'], [trqops, zx0$_y, uwsrtv, fehj, yxz, pnqos, rnmqp]), zx0$_y);
        } else tvw['EnvConfig']['load']['call'](this, zx0$_y, uwsrtv, fehj, yxz, pnqos);
      }
    }, hfiegd['resMgrLoad'] = function (x_y$z0, troqps, hmilkj, nmpoql, sropqt, qvrsut, y_$x) {
      hmilkj === void 0x0 && (hmilkj = 0x0), nmpoql === void 0x0 && (nmpoql = ![]), sropqt === void 0x0 && (sropqt = ![]), qvrsut === void 0x0 && (qvrsut = 0x0), y_$x === void 0x0 && (y_$x = 0x3), x_y$z0['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', x_y$z0), tvw['EnvConfig']['resMgrLoad'](x_y$z0, (lhmjk, wsvtx, $23) => {
        ruvswt['prototype']['resMgrLoadCallBack'](lhmjk, wsvtx, $23, troqps);
      }, hmilkj, nmpoql, sropqt, qvrsut, y_$x);
    }, hfiegd['resMgrLoadCallBack'] = function (fkgij, jgefh, ruqps, pnmlq) {
      console['log']('buff:::', fkgij, ruqps, lmkjo['fileNativeDir'] + '///' + lmkjo['fileListName']), pnmlq(fkgij, jgefh, ruqps);
    }, hfiegd['clearRes'] = function (mnplko, stuqr) {
      stuqr === void 0x0 && (stuqr = ![]);var hjlg = this;hjlg['clearRes'](mnplko, stuqr);var utsrv = lmkjo['getFileInfo'](mnplko);if (utsrv && (mnplko['indexOf']('http://') != -0x1 || mnplko['indexOf']('https://') != -0x1)) {
        var yx$z = utsrv['md5'],
            rnqosp = lmkjo['getFileNativePath'](yx$z);lmkjo['remove'](rnqosp);
      }
    }, ruvswt['onReadNativeCallBack'] = function (y0z_x$, tqos, wyxzuv, y$vw, qlnpom, gdheif, okml, jhefig, _4012) {
      y$vw === void 0x0 && (y$vw = !![]), gdheif === void 0x0 && (gdheif = ![]), jhefig === void 0x0 && (jhefig = 0x0);if (!jhefig) {
        var usp;if (wyxzuv == 'json' || wyxzuv == 'atlas') usp = tvw['getJson'](_4012['data']);else wyxzuv == 'xml' ? usp = becafd['parseXMLFromString'](_4012['data']) : usp = _4012['data'];okml['onLoaded'](usp), !tvw['isZiYu'] && tvw['isPosMsgYu'] && wyxzuv != 'arraybuffer' && wx['postMessage']({ 'url': tqos, 'data': usp, 'isLoad': !![] });
      } else jhefig == 0x1 && tvw['EnvConfig']['load']['call'](okml, tqos, wyxzuv, y$vw, qlnpom, gdheif);
    }, wsvrut(ruvswt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ruvswt;
  }(),
      lmkjo = function (qpstur) {
    function yx_z() {
      yx_z['__super']['call'](this);;
    }return ihgdf(yx_z, 'laya.wx.mini.MiniFileMgr', qpstur), yx_z['isLoadFile'] = function (lmnq) {
      return yx_z['_fileTypeArr']['indexOf'](lmnq) != -0x1 ? !![] : ![];
    }, yx_z['getFileInfo'] = function (cedfh) {
      var dghife = cedfh['split']('?')[0x0],
          bcad = yx_z['filesListObj'][dghife];if (bcad == null) return null;else return bcad;return null;
    }, yx_z['onFileUpdate'] = function (hgifed, zx$_) {
      var fdegb = hgifed['split']('/'),
          ptosr = fdegb[fdegb['length'] - 0x1],
          xwsut = yx_z['getFileInfo'](zx$_);if (xwsut == null) yx_z['onSaveFile'](zx$_, ptosr);else {
        if (xwsut['readyUrl'] != zx$_) yx_z['remove'](ptosr, zx$_);
      }
    }, yx_z['exits'] = function (suqtpr, hdgc) {
      var mljko = yx_z['getFileNativePath'](suqtpr);yx_z['fs']['getFileInfo']({ 'filePath': mljko, 'success': function (kgifjh) {
          hdgc != null && hdgc['runWith']([0x0, kgifjh]);
        }, 'fail': function (fgjhik) {
          hdgc != null && hdgc['runWith']([0x1, fgjhik]);
        } });
    }, yx_z['read'] = function (_1z2$, fdcghe, $z_1, hdfige) {
      fdcghe === void 0x0 && (fdcghe = 'ascill'), hdfige === void 0x0 && (hdfige = '');var wvsru;hdfige != '' ? wvsru = yx_z['getFileNativePath'](_1z2$) : wvsru = _1z2$, yx_z['fs']['readFile']({ 'filePath': wvsru, 'encoding': fdcghe, 'success': function (gchdef) {
          $z_1 != null && $z_1['runWith']([0x0, gchdef]);
        }, 'fail': function (x$0_zy) {
          if (x$0_zy && hdfige != '') yx_z['down'](hdfige, fdcghe, $z_1, hdfige);else $z_1 != null && $z_1['runWith']([0x1]);
        } });
    }, yx_z['readNativeFile'] = function (ebdgf, ihjgkl) {
      yx_z['fs']['readFile']({ 'filePath': ebdgf, 'encoding': '', 'success': function (cgedf) {
          ihjgkl != null && ihjgkl['runWith']([0x0]);
        }, 'fail': function (xwvzy$) {
          ihjgkl != null && ihjgkl['runWith']([0x1]);
        } });
    }, yx_z['down'] = function (_4320, gfdc, sqnrpo, _1402) {
      gfdc === void 0x0 && (gfdc = 'ascill'), _1402 === void 0x0 && (_1402 = '');var vstruq = yx_z['getFileNativePath'](_1402),
          qrtpos = yx_z['wxdown']({ 'url': _4320, 'filePath': vstruq, 'success': function (qvs) {
          if (qvs['statusCode'] === 0xc8) yx_z['readFile'](qvs['filePath'], gfdc, sqnrpo, _1402);
        }, 'fail': function (xy$wvz) {
          sqnrpo != null && sqnrpo['runWith']([0x1, xy$wvz]);
        } });qrtpos['onProgressUpdate'](function (uwsvtr) {
        sqnrpo != null && sqnrpo['runWith']([0x2, uwsvtr['progress']]);
      });
    }, yx_z['readFile'] = function (olqn, nr, wvturs, kijlhg) {
      nr === void 0x0 && (nr = 'ascill'), kijlhg === void 0x0 && (kijlhg = ''), yx_z['fs']['readFile']({ 'filePath': olqn, 'encoding': nr, 'success': function (omnrqp) {
          if (olqn['indexOf']('http://') != -0x1 || olqn['indexOf']('https://') != -0x1) yx_z['onFileUpdate'](olqn, kijlhg);wvturs != null && wvturs['runWith']([0x0, omnrqp]);
        }, 'fail': function (stuwr) {
          if (stuwr) wvturs != null && wvturs['runWith']([0x1, stuwr]);
        } });
    }, yx_z['downImg'] = function (pstu, xsuvwt, jhilg) {
      jhilg === void 0x0 && (jhilg = '');var vrsuwt = yx_z['wxdown']({ 'url': pstu, 'success': function (cfedhg) {
          cfedhg['statusCode'] === 0xc8 && yx_z['copyFile'](cfedhg['tempFilePath'], jhilg, xsuvwt);
        }, 'fail': function (efgdbc) {
          xsuvwt != null && xsuvwt['runWith']([0x1, efgdbc]);
        } });
    }, yx_z['copyFile'] = function (miljnk, jigfeh, yz0_) {
      var ebcdgf = miljnk['split']('/'),
          y_0 = ebcdgf[ebcdgf['length'] - 0x1],
          lkjhg = jigfeh['split']('?')[0x0],
          z210 = yx_z['getFileInfo'](jigfeh),
          _y$xw = yx_z['getFileNativePath'](y_0);yx_z['fs']['copyFile']({ 'srcPath': miljnk, 'destPath': _y$xw, 'success': function (jni) {
          if (!z210) yx_z['onSaveFile'](jigfeh, y_0), yz0_ != null && yz0_['runWith']([0x0]);else {
            if (z210['readyUrl'] != jigfeh) yx_z['remove'](y_0, jigfeh, yz0_);
          }
        }, 'fail': function (ijmkl) {
          yz0_ != null && yz0_['runWith']([0x1, ijmkl]);
        } });
    }, yx_z['getFileNativePath'] = function (fecda) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fecda;
    }, yx_z['remove'] = function (stuw, $x_wyz, prqnso) {
      $x_wyz === void 0x0 && ($x_wyz = '');var quvsrt = yx_z['getFileInfo']($x_wyz),
          mlon = yx_z['getFileNativePath'](quvsrt['md5']);tsuvq['loader']['clearRes'](quvsrt['readyUrl']), yx_z['fs']['unlink']({ 'filePath': mlon, 'success': function (iefj) {
          if ($x_wyz != '') yx_z['onSaveFile']($x_wyz, stuw);prqnso != null && prqnso['runWith']([0x0]);
        }, 'fail': function (jkm) {} });
    }, yx_z['onSaveFile'] = function ($021_3, hgjfie) {
      var gfch = $021_3['split']('?')[0x0];yx_z['filesListObj'][gfch] = { 'md5': hgjfie, 'readyUrl': $021_3 }, yx_z['fs']['writeFile']({ 'filePath': yx_z['fileNativeDir'] + '/' + yx_z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yx_z['filesListObj']), 'success': function (_$02z1) {
          console['log']('写入测试测试成功：', _$02z1);
        }, 'fail': function ($yxzwv) {
          console['log']('写入测试测试失败：', $yxzwv);
        } });
    }, yx_z['existDir'] = function (nklpmo, ihkgfj) {
      yx_z['fs']['mkdir']({ 'dirPath': nklpmo, 'success': function (purtq) {
          ihkgfj != null && ihkgfj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pruqs) {
          if (pruqs['errMsg']['indexOf']('file already exists') != -0x1) yx_z['readSync'](yx_z['fileListName'], 'utf8', ihkgfj);else ihkgfj != null && ihkgfj['runWith']([0x1, pruqs]);
        } });
    }, yx_z['readSync'] = function (uvsqt, debaf, yw_z, fbea) {
      debaf === void 0x0 && (debaf = 'ascill'), fbea === void 0x0 && (fbea = '');var osn = yx_z['getFileNativePath'](uvsqt),
          klgi;try {
        klgi = yx_z['fs']['readFileSync'](osn), yw_z != null && yw_z['runWith']([0x0, { 'data': klgi }]);
      } catch (lpmk) {
        yw_z != null && yw_z['runWith']([0x1]);
      }
    }, yx_z['readCache'] = function () {}, yx_z['writeCache'] = function (npolqm) {
      var tpuq = readyUrl['split']('?')[0x0];yx_z['filesListObj'][tpuq] = { 'md5': md5Name, 'readyUrl': readyUrl }, yx_z['fs']['writeFile']({ 'filePath': yx_z['fileNativeDir'] + '/' + yx_z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yx_z['filesListObj']), 'success': function (spqrut) {}, 'fail': function (ebcg) {} });
    }, yx_z['setNativeFileDir'] = function (nqolp) {
      yx_z['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nqolp;
    }, yx_z['filesListObj'] = {}, yx_z['fileNativeDir'] = null, yx_z['fileListName'] = 'layaairfiles.txt', yx_z['ziyuFileData'] = {}, wsvrut(yx_z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yx_z;
  }(nkjilm),
      osnrqp = function (ghkif) {
    function yv$zx() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], yv$zx['__super']['call'](this), this['_sound'] = yv$zx['_createSound'](), this['_chanell'] = new limkj(this['_sound']);
    }ihgdf(yv$zx, 'laya.wx.mini.MiniSound', ghkif);var xuvzy = yv$zx['prototype'];return xuvzy['load'] = function (w$_yz) {
      var _$y0 = this;w$_yz = lkopnm['formatURL'](w$_yz), this['url'] = w$_yz;if (yv$zx['_audioCache'][w$_yz]) {
        this['event']('complete');return;
      }function bdgc() {
        if (yv$zx['_null'] != undefined) _$y0['_sound']['onCanplay'](yv$zx['_null']), _$y0['_sound']['onError'](yv$zx['_null']);else try {
          _$y0['_sound']['onCanplay'](null), _$y0['_sound']['onError'](null), yv$zx['_null'] = null;
        } catch (x_wyz) {
          console['warn']('[wxmini] _clearSound:' + x_wyz), _$y0['_sound']['onCanplay'](_x$yzw), _$y0['_sound']['onError'](_x$yzw), yv$zx['_null'] = _x$yzw;
        }
      }function khmjl() {
        eijgf['loaded'] = !![], eijgf['event']('complete'), yv$zx['_audioCache'][eijgf['url']] = eijgf;
      }function mpon(fgdebc) {
        console['error']('errCode=' + fgdebc['errCode'] + '  errMsg=' + fgdebc['errMsg']), eijgf['event']('error');
      }function _x$yzw() {}this['_sound']['onCanplay'](khmjl), this['_sound']['onError'](mpon), this['_sound']['src'] = w$_yz;var eijgf = this;
    }, xuvzy['play'] = function (lnokmp, z$x_) {
      lnokmp === void 0x0 && (lnokmp = 0x0), z$x_ === void 0x0 && (z$x_ = 0x0);var trsuvw, jlikmn;if (this['url'] == qvtsu['_tMusic']) {
        if (!yv$zx['_musicAudio']) yv$zx['_musicAudio'] = this['_sound'];trsuvw = yv$zx['_musicAudio'], jlikmn = this['_chanell'];
      } else trsuvw = this['_sound'], jlikmn = this['_chanell'];return trsuvw['src'] = this['url'], trsuvw['startTime'] = 0x0, jlikmn['isStopped'] && (jlikmn['url'] = this['url'], jlikmn['loops'] = z$x_, jlikmn['startTime'] = lnokmp, jlikmn['play'](), qvtsu['addChannel'](jlikmn)), jlikmn;
    }, xuvzy['dispose'] = function () {
      var rsuq = yv$zx['_audioCache'][this['url']];rsuq && (rsuq['src'] = '', delete yv$zx['_audioCache'][this['url']]);
    }, pu(0x0, xuvzy, 'duration', function () {
      return this['_sound']['duration'];
    }), yv$zx['_createSound'] = function () {
      yv$zx['_id']++;var ilnkj = tvw['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ilnkj;
    }, yv$zx['_musicAudio'] = null, yv$zx['_id'] = 0x0, yv$zx['_audioCache'] = {}, yv$zx['_null'] = undefined, yv$zx;
  }(nkjilm),
      limkj = function (efhcgd) {
    function prqon(nlojkm) {
      this['_audio'] = null, this['_onEnd'] = null, prqon['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = nlojkm, this['_onEnd'] = becafd['bind'](this['__onEnd'], this), nlojkm['onEnded'](this['_onEnd']);
    }ihgdf(prqon, 'laya.wx.mini.MiniSoundChannel', efhcgd);var tprusq = prqon['prototype'];return tprusq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tsuvq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, tprusq['__onNull'] = function () {}, tprusq['play'] = function () {
      this['isStopped'] = ![], qvtsu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, tprusq['stop'] = function () {
      this['isStopped'] = !![], qvtsu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, tprusq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, tprusq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qvtsu['addChannel'](this), this['_audio']['play']();
    }, pu(0x0, tprusq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), pu(0x0, tprusq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), pu(0x0, tprusq, 'volume', function () {
      return 0x1;
    }, function (vwy$x) {}), prqon['_null'] = undefined, prqon;
  }(uxtywv),
      ihfedg = function () {
    function rsvutq() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tvw['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }ihgdf(rsvutq, 'laya.wx.mini.MiniVideo');var $_z20 = rsvutq['prototype'];return $_z20['on'] = function (_1423, nso, egfi) {
      if (_1423 == 'loadedmetadata') this['onPlayFunc'] = egfi['bind'](nso), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else _1423 == 'ended' && (this['onEndedFunC'] = egfi['bind'](nso), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, $_z20['onTimeUpdateFunc'] = function (xwuz) {
      this['position'] = xwuz['position'], this['_duration'] = xwuz['duration'];
    }, $_z20['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, $_z20['onended'] = function (_z1y$, $yvz) {
      this['onEndedFunC'] = $yvz['bind'](_z1y$), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, $_z20['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, $_z20['off'] = function ($zx_yw, ebdfc, _z201$) {
      if ($zx_yw == 'loadedmetadata') this['onPlayFunc'] = _z201$['bind'](ebdfc), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else $zx_yw == 'ended' && (this['onEndedFunC'] = _z201$['bind'](ebdfc), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, $_z20['load'] = function (utywvx) {
      if (!this['videoElement']) return;this['videoElement']['src'] = utywvx;
    }, $_z20['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, $_z20['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, $_z20['size'] = function (xyv$w, pqost) {
      if (!this['videoElement']) return;this['videoElement']['width'] = xyv$w, this['videoElement']['height'] = pqost;
    }, $_z20['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, $_z20['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, pu(0x0, $_z20, 'duration', function () {
      return this['_duration'];
    }), pu(0x0, $_z20, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (dehgcf) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = dehgcf;
    }), pu(0x0, $_z20, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), pu(0x0, $_z20, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), pu(0x0, $_z20, 'ended', function () {
      return this['videoend'];
    }), pu(0x0, $_z20, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (_3$10) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = _3$10;
    }), pu(0x0, $_z20, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (sqotp) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = sqotp;
    }), pu(0x0, $_z20, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (orts) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = orts;
    }), pu(0x0, $_z20, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), pu(0x0, $_z20, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (qormnp) {
      if (!this['videoElement']) return;this['videoElement']['x'] = qormnp;
    }), pu(0x0, $_z20, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (mnqolp) {
      if (!this['videoElement']) return;this['videoElement']['y'] = mnqolp;
    }), pu(0x0, $_z20, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), pu(0x0, $_z20, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (kfhjg) {
      if (!this['videoElement']) return;this['videoElement']['src'] = kfhjg;
    }), pu(0x0, $_z20, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (ijnk) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = ijnk;
    }), pu(0x0, $_z20, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (psoqr) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = psoqr;
    }), rsvutq;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var xtwvs in Laya) {
    var $132_0 = Laya[xtwvs];$132_0 && $132_0['__isclass'] && (exports[xtwvs] = $132_0);
  }
});