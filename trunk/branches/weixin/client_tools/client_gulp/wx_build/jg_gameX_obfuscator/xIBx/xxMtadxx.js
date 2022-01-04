var u = wx.$x;
(function (window, document, ph_raq) {
  var m2o5s = ph_raq['un'],
      epbk = ph_raq['uns'],
      k1ew0 = ph_raq['static'],
      ew0bhk = ph_raq['class'],
      vigd4u = ph_raq['getset'],
      ozsx = ph_raq['__newvec'],
      qphe_ = laya['utils']['Browser'],
      clf87 = laya['events']['Event'],
      ucv = laya['events']['EventDispatcher'],
      fj97c = laya['resource']['HTMLImage'],
      vufcj = laya['utils']['Handler'],
      idgv = laya['display']['Input'],
      mo4xs = laya['net']['Loader'],
      kb1ew = laya['maths']['Matrix'],
      mz5s2o = laya['renders']['Render'],
      vnujf = laya['utils']['RunDriver'],
      osx5mz = laya['media']['Sound'],
      kew0b = laya['media']['SoundChannel'],
      w1bke0 = laya['media']['SoundManager'],
      v4dgx = laya['display']['Stage'],
      a0ph = laya['net']['URL'],
      jcl9f = laya['utils']['Utils'],
      xz5o = function () {
    function imozs() {}return ew0bhk(imozs, 'laya.wx.mini.MiniAdpter'), imozs['getJson'] = function (z2536) {
      return JSON['parse'](z2536);
    }, imozs['init'] = function (ndgv4, jvung) {
      ndgv4 === void 0x0 && (ndgv4 = ![]), jvung === void 0x0 && (jvung = ![]);if (imozs['_inited']) return;imozs['window'] = window;if (imozs['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;imozs['_inited'] = !![], imozs['isZiYu'] = jvung, imozs['isPosMsgYu'] = ndgv4, imozs['EnvConfig'] = {}, !imozs['isZiYu'] && (l7cfj9['setNativeFileDir']('/layaairGame'), l7cfj9['existDir'](l7cfj9['fileNativeDir'], vufcj['create'](imozs, imozs['onMkdirCallBack']))), imozs['window']['focus'] = function () {}, ph_raq['getUrlPath'] = function () {}, imozs['window']['logtime'] = function (bw0e) {}, imozs['window']['alertTimeLog'] = function (fclj7) {}, imozs['window']['resetShareInfo'] = function () {}, imozs['window']['CanvasRenderingContext2D'] = function () {}, imozs['window']['CanvasRenderingContext2D']['prototype'] = imozs['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], imozs['window']['document']['body']['appendChild'] = function () {}, imozs['EnvConfig']['pixelRatioInt'] = 0x0, vnujf['getPixelRatio'] = imozs['pixelRatio'], imozs['_preCreateElement'] = qphe_['createElement'], qphe_['createElement'] = imozs['createElement'], vnujf['createShaderCondition'] = imozs['createShaderCondition'], jcl9f['parseXMLFromString'] = imozs['parseXMLFromString'], idgv['_createInputElement'] = pq_he['_createInputElement'], imozs['EnvConfig']['load'] = mo4xs['prototype']['load'], mo4xs['prototype']['load'] = nf9jcl['prototype']['load'], imozs['isZiYu'] && ndgv4 && wx['onMessage'](function (k0b3w1) {
        k0b3w1['isLoad'] && (l7cfj9['ziyuFileData'][k0b3w1['url']] = k0b3w1['data']);
      });
    }, imozs['onMkdirCallBack'] = function (bwe0k, i4dgvx) {
      if (!bwe0k) l7cfj9['filesListObj'] = JSON['parse'](i4dgvx['data']);
    }, imozs['pixelRatio'] = function () {
      if (!imozs['EnvConfig']['pixelRatioInt']) try {
        var rpqah_ = wx['getSystemInfoSync']();return imozs['EnvConfig']['pixelRatioInt'] = rpqah_['pixelRatio'], rpqah_ = rpqah_, rpqah_['pixelRatio'];
      } catch (fc9nj) {}return imozs['EnvConfig']['pixelRatioInt'];
    }, imozs['createElement'] = function (epb0) {
      if (epb0 == 'canvas') {
        var uncjf;return imozs['idx'] == 0x1 ? imozs['isZiYu'] ? (uncjf = sharedCanvas, uncjf['style'] = {}) : uncjf = window['canvas'] : uncjf = window['wx']['createCanvas'](), imozs['idx']++, uncjf;
      } else {
        if (epb0 == 'textarea' || epb0 == 'input') return imozs['onCreateInput'](epb0);else {
          if (epb0 == 'div') {
            var xo4ims = imozs['_preCreateElement'](epb0);return xo4ims['contains'] = function (z5omx) {
              return null;
            }, xo4ims['removeChild'] = function (t5z6o2) {}, xo4ims;
          } else return imozs['_preCreateElement'](epb0);
        }
      }
    }, imozs['onCreateInput'] = function (t1w3b) {
      var he0bap = imozs['_preCreateElement'](t1w3b);return he0bap['focus'] = pq_he['wxinputFocus'], he0bap['blur'] = pq_he['wxinputblur'], he0bap['style'] = {}, he0bap['value'] = 0x0, he0bap['parentElement'] = {}, he0bap['placeholder'] = {}, he0bap['type'] = {}, he0bap['setColor'] = function (nfjvcu) {}, he0bap['setType'] = function (vun) {}, he0bap['setFontFace'] = function (tkwb1) {}, he0bap['addEventListener'] = function (k1t36) {}, he0bap['contains'] = function (sz5mox) {
        return null;
      }, he0bap['removeChild'] = function (o4imx) {}, he0bap;
    }, imozs['createShaderCondition'] = function (vujd) {
      var msxo4 = this,
          ehk = function () {
        var bwek10 = vujd;return msxo4[vujd['replace']('this.', '')];
      };return ehk;
    }, imozs['EnvConfig'] = null, imozs['window'] = null, imozs['_preCreateElement'] = null, imozs['_inited'] = ![], imozs['wxRequest'] = null, imozs['systemInfo'] = null, imozs['version'] = '0.0.1', imozs['isZiYu'] = ![], imozs['isPosMsgYu'] = ![], imozs['parseXMLFromString'] = function (abp0) {
      var i4udgv, vxgd4;abp0 = abp0['replace'](/>\s+</g, '><');try {
        i4udgv = new window['Parser']['DOMParser']()['parseFromString'](abp0, 'text/xml');
      } catch (ep_ha) {
        throw '需要引入xml解析库文件';
      }return i4udgv;
    }, imozs['idx'] = 0x1, imozs;
  }(),
      yl8$79 = function () {
    function sgimx() {}ew0bhk(sgimx, 'laya.wx.mini.MiniImage');var smo5 = sgimx['prototype'];return smo5['_loadImage'] = function (wt3216) {
      var kwhb = this,
          bhap = ![];wt3216['indexOf']('layaNativeDir/') == -0x1 && (bhap = !![], wt3216 = a0ph['formatURL'](wt3216));if (!l7cfj9['getFileInfo'](wt3216)) {
        if (wt3216['indexOf']('http://') != -0x1 || wt3216['indexOf']('https://') != -0x1) l7cfj9['downImg'](wt3216, new vufcj(sgimx, sgimx['onDownImgCallBack'], [wt3216, kwhb]), wt3216);else sgimx['onCreateImage'](wt3216, kwhb, !![]);
      } else sgimx['onCreateImage'](wt3216, kwhb, !bhap);
    }, sgimx['onDownImgCallBack'] = function (f9ujcn, hr_pqa, y978f) {
      if (!y978f) sgimx['onCreateImage'](f9ujcn, hr_pqa);else hr_pqa['onError'](null);
    }, sgimx['onCreateImage'] = function (sigxd, p_eha, hp_ar) {
      hp_ar === void 0x0 && (hp_ar = ![]);var mo4is;if (!hp_ar) {
        var w10kb3 = l7cfj9['getFileInfo'](sigxd),
            k01b = w10kb3['md5'];mo4is = l7cfj9['getFileNativePath'](k01b);
      } else mo4is = sigxd;if (p_eha['imgCache'] == null) p_eha['imgCache'] = {};var imoxzs;function oz62() {
        imoxzs['onload'] = null, imoxzs['onerror'] = null, delete p_eha['imgCache'][sigxd];
      };var xid4s = function () {
        oz62(), p_eha['onLoaded'](imoxzs);
      },
          zmsoix = function () {
        oz62(), p_eha['event']('error', 'Load image failed');
      };p_eha['_type'] == 'nativeimage' ? (imoxzs = new qphe_['window']['Image'](), imoxzs['crossOrigin'] = '', imoxzs['onload'] = xid4s, imoxzs['onerror'] = zmsoix, imoxzs['src'] = mo4is, p_eha['imgCache'][sigxd] = imoxzs) : new fj97c['create'](mo4is, { 'onload': xid4s, 'onerror': zmsoix, 'onCreate': function (o62z5t) {
          imoxzs = o62z5t, p_eha['imgCache'][sigxd] = o62z5t;
        } });
    }, sgimx;
  }(),
      pq_he = function () {
    function khpbe() {}return ew0bhk(khpbe, 'laya.wx.mini.MiniInput'), khpbe['_createInputElement'] = function () {
      idgv['_initInput'](idgv['area'] = qphe_['createElement']('textarea')), idgv['_initInput'](idgv['input'] = qphe_['createElement']('input')), idgv['inputContainer'] = qphe_['createElement']('div'), idgv['inputContainer']['style']['position'] = 'absolute', idgv['inputContainer']['style']['zIndex'] = 0x186a0, qphe_['container']['appendChild'](idgv['inputContainer']), idgv['inputContainer']['setPos'] = function (fncju9, vxgd4i) {
        idgv['inputContainer']['style']['left'] = fncju9 + 'px', idgv['inputContainer']['style']['top'] = vxgd4i + 'px';
      }, ph_raq['stage']['on']('resize', null, khpbe['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lf87) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w1bke0['_soundClass'] = nuv4gd, w1bke0['_musicClass'] = nuv4gd;
    }, khpbe['_onStageResize'] = function () {
      var uvjnd = ph_raq['stage']['_canvasTransform']['identity']();uvjnd['scale'](qphe_['width'] / mz5s2o['canvas']['width'] / vnujf['getPixelRatio'](), qphe_['height'] / mz5s2o['canvas']['height'] / vnujf['getPixelRatio']());
    }, khpbe['wxinputFocus'] = function (ah0qep) {
      var f798y = idgv['inputElement']['target'];if (f798y && !f798y['editable']) return;xz5o['window']['wx']['offKeyboardConfirm'](), xz5o['window']['wx']['offKeyboardInput'](), xz5o['window']['wx']['showKeyboard']({ 'defaultValue': f798y['text'], 'maxLength': f798y['maxChars'], 'multiple': f798y['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (om52z6) {}, 'fail': function (pqaeh) {} }), xz5o['window']['wx']['onKeyboardConfirm'](function (ahp0q) {
        var $yl97 = ahp0q ? ahp0q['value'] : '';f798y['text'] = $yl97, f798y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xz5o['window']['wx']['onKeyboardInput'](function (b0wk) {
        var a0epb = b0wk ? b0wk['value'] : '';if (!f798y['multiline']) {
          if (a0epb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }f798y['text'] = a0epb, f798y['event']('input');
      });
    }, khpbe['inputEnter'] = function () {
      idgv['inputElement']['target']['focus'] = ![];
    }, khpbe['wxinputblur'] = function () {
      khpbe['hideKeyboard']();
    }, khpbe['hideKeyboard'] = function () {
      xz5o['window']['wx']['offKeyboardConfirm'](), xz5o['window']['wx']['offKeyboardInput'](), xz5o['window']['wx']['hideKeyboard']({ 'success': function (phk0) {
          console['log']('隐藏键盘');
        }, 'fail': function (peah0) {
          console['log']('隐藏键盘出错:' + (peah0 ? peah0['errMsg'] : ''));
        } });
    }, khpbe;
  }(),
      nf9jcl = function () {
    function peqha_() {}ew0bhk(peqha_, 'laya.wx.mini.MiniLoader');var gui4d = peqha_['prototype'];return gui4d['load'] = function (nu9cjf, cnfjv, w361, j79flc, nv4gd) {
      w361 === void 0x0 && (w361 = !![]), nv4gd === void 0x0 && (nv4gd = ![]);var ly$ = this;ly$['_url'] = nu9cjf;if (nu9cjf['indexOf']('data:image') === 0x0) ly$['_type'] = cnfjv = 'image';else ly$['_type'] = cnfjv || (cnfjv = ly$['getTypeFromUrl'](nu9cjf));ly$['_cache'] = w361, ly$['_data'] = null;var d4s = 'ascii';if (nu9cjf['indexOf']('.fnt') != -0x1) d4s = 'utf8';else cnfjv == 'arraybuffer' && (d4s = '');;var kpbh0e = jcl9f['getFileExtension'](nu9cjf);if (peqha_['_fileTypeArr']['indexOf'](kpbh0e) != -0x1) xz5o['EnvConfig']['load']['call'](this, nu9cjf, cnfjv, w361, j79flc, nv4gd);else {
        if (!l7cfj9['getFileInfo'](nu9cjf)) {
          if (nu9cjf['indexOf']('layaNativeDir/') != -0x1) {
            if (xz5o['isZiYu']) {
              var eh_aqp = l7cfj9['ziyuFileData'][nu9cjf];ly$['onLoaded'](eh_aqp);return;
            } else {
              cosnole['log']('read read'), l7cfj9['read'](nu9cjf, d4s, new vufcj(peqha_, peqha_['onReadNativeCallBack'], [d4s, nu9cjf, cnfjv, w361, j79flc, nv4gd, ly$]));return;
            }
          }if (a0ph['rootPath'] == '') var ape0 = nu9cjf;else ape0 = nu9cjf['split'](a0ph['rootPath'])[0x0];nu9cjf['indexOf']('http://') != -0x1 || nu9cjf['indexOf']('https://') != -0x1 ? xz5o['EnvConfig']['load']['call'](ly$, nu9cjf, cnfjv, w361, j79flc, nv4gd) : l7cfj9['readFile'](ape0, d4s, new vufcj(peqha_, peqha_['onReadNativeCallBack'], [d4s, nu9cjf, cnfjv, w361, j79flc, nv4gd, ly$]), nu9cjf);
        } else xz5o['EnvConfig']['load']['call'](this, nu9cjf, cnfjv, w361, j79flc, nv4gd);
      }
    }, gui4d['resMgrLoad'] = function (m2sz5o, w6k1t, cuvnj, zisxo, ehkpb, to2z6, cvnfju) {
      cuvnj === void 0x0 && (cuvnj = 0x0), zisxo === void 0x0 && (zisxo = ![]), ehkpb === void 0x0 && (ehkpb = ![]), to2z6 === void 0x0 && (to2z6 = 0x0), cvnfju === void 0x0 && (cvnfju = 0x3), m2sz5o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m2sz5o), xz5o['EnvConfig']['resMgrLoad'](m2sz5o, (kt61, njfucv, bhke0p) => {
        peqha_['prototype']['resMgrLoadCallBack'](kt61, njfucv, bhke0p, w6k1t);
      }, cuvnj, zisxo, ehkpb, to2z6, cvnfju);
    }, gui4d['resMgrLoadCallBack'] = function (dnujg, pkbhe, xd4gi, kwh0) {
      console['log']('buff:::', dnujg, xd4gi, l7cfj9['fileNativeDir'] + '///' + l7cfj9['fileListName']), kwh0(dnujg, pkbhe, xd4gi);
    }, gui4d['clearRes'] = function (smx4, eq0hpa) {
      eq0hpa === void 0x0 && (eq0hpa = ![]);var n9jl = this;n9jl['clearRes'](smx4, eq0hpa);var fjn9u = l7cfj9['getFileInfo'](smx4);if (fjn9u && (smx4['indexOf']('http://') != -0x1 || smx4['indexOf']('https://') != -0x1)) {
        var qa_pe = fjn9u['md5'],
            kp0he = l7cfj9['getFileNativePath'](qa_pe);l7cfj9['remove'](kp0he);
      }
    }, peqha_['onReadNativeCallBack'] = function (q_eap, be0wk1, zm5o2s, ugidv4, sxmg4, t21536, a0pqhe, gnvju, zxmoi) {
      ugidv4 === void 0x0 && (ugidv4 = !![]), t21536 === void 0x0 && (t21536 = ![]), gnvju === void 0x0 && (gnvju = 0x0);if (!gnvju) {
        var m2z5so;if (zm5o2s == 'json' || zm5o2s == 'atlas') m2z5so = xz5o['getJson'](zxmoi['data']);else zm5o2s == 'xml' ? m2z5so = jcl9f['parseXMLFromString'](zxmoi['data']) : m2z5so = zxmoi['data'];a0pqhe['onLoaded'](m2z5so), !xz5o['isZiYu'] && xz5o['isPosMsgYu'] && zm5o2s != 'arraybuffer' && wx['postMessage']({ 'url': be0wk1, 'data': m2z5so, 'isLoad': !![] });
      } else gnvju == 0x1 && xz5o['EnvConfig']['load']['call'](a0pqhe, be0wk1, zm5o2s, ugidv4, sxmg4, t21536);
    }, k1ew0(peqha_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), peqha_;
  }(),
      l7cfj9 = function (gjdvu) {
    function vnudj() {
      vnudj['__super']['call'](this);;
    }return ew0bhk(vnudj, 'laya.wx.mini.MiniFileMgr', gjdvu), vnudj['isLoadFile'] = function (mxsi) {
      return vnudj['_fileTypeArr']['indexOf'](mxsi) != -0x1 ? !![] : ![];
    }, vnudj['getFileInfo'] = function (b3kw1) {
      var ot52z6 = b3kw1['split']('?')[0x0],
          vndjug = vnudj['filesListObj'][ot52z6];if (vndjug == null) return null;else return vndjug;return null;
    }, vnudj['onFileUpdate'] = function (b0hae, qhpra_) {
      var x4dgi = b0hae['split']('/'),
          hbwk0e = x4dgi[x4dgi['length'] - 0x1],
          k3twb1 = vnudj['getFileInfo'](qhpra_);if (k3twb1 == null) vnudj['onSaveFile'](qhpra_, hbwk0e);else {
        if (k3twb1['readyUrl'] != qhpra_) vnudj['remove'](hbwk0e, qhpra_);
      }
    }, vnudj['exits'] = function (vjunfc, dvnjc) {
      var juncd = vnudj['getFileNativePath'](vjunfc);vnudj['fs']['getFileInfo']({ 'filePath': juncd, 'success': function (haq0pe) {
          dvnjc != null && dvnjc['runWith']([0x0, haq0pe]);
        }, 'fail': function (sxom) {
          dvnjc != null && dvnjc['runWith']([0x1, sxom]);
        } });
    }, vnudj['read'] = function (jdvgnu, y87l$9, apeq_, j9ncfu) {
      y87l$9 === void 0x0 && (y87l$9 = 'ascill'), j9ncfu === void 0x0 && (j9ncfu = '');var bt1k;j9ncfu != '' ? bt1k = vnudj['getFileNativePath'](jdvgnu) : bt1k = jdvgnu, vnudj['fs']['readFile']({ 'filePath': bt1k, 'encoding': y87l$9, 'success': function (gndu4) {
          apeq_ != null && apeq_['runWith']([0x0, gndu4]);
        }, 'fail': function (rph_aq) {
          if (rph_aq && j9ncfu != '') vnudj['down'](j9ncfu, y87l$9, apeq_, j9ncfu);else apeq_ != null && apeq_['runWith']([0x1]);
        } });
    }, vnudj['readNativeFile'] = function (xo5s, sox5) {
      vnudj['fs']['readFile']({ 'filePath': xo5s, 'encoding': '', 'success': function (l9nfj) {
          sox5 != null && sox5['runWith']([0x0]);
        }, 'fail': function (nuvg4d) {
          sox5 != null && sox5['runWith']([0x1]);
        } });
    }, vnudj['down'] = function (arp_, ahpeb0, qp_ahe, kepb0h) {
      ahpeb0 === void 0x0 && (ahpeb0 = 'ascill'), kepb0h === void 0x0 && (kepb0h = '');var ebpah = vnudj['getFileNativePath'](kepb0h),
          cnfju = vnudj['wxdown']({ 'url': arp_, 'filePath': ebpah, 'success': function (o5mz6) {
          if (o5mz6['statusCode'] === 0xc8) vnudj['readFile'](o5mz6['filePath'], ahpeb0, qp_ahe, kepb0h);
        }, 'fail': function (dcju) {
          qp_ahe != null && qp_ahe['runWith']([0x1, dcju]);
        } });cnfju['onProgressUpdate'](function (kw1t3b) {
        qp_ahe != null && qp_ahe['runWith']([0x2, kw1t3b['progress']]);
      });
    }, vnudj['readFile'] = function (ap_hqr, ae_pqh, w1tk36, xv4gi) {
      ae_pqh === void 0x0 && (ae_pqh = 'ascill'), xv4gi === void 0x0 && (xv4gi = ''), vnudj['fs']['readFile']({ 'filePath': ap_hqr, 'encoding': ae_pqh, 'success': function (ot6z25) {
          if (ap_hqr['indexOf']('http://') != -0x1 || ap_hqr['indexOf']('https://') != -0x1) vnudj['onFileUpdate'](ap_hqr, xv4gi);w1tk36 != null && w1tk36['runWith']([0x0, ot6z25]);
        }, 'fail': function (zo256m) {
          if (zo256m) w1tk36 != null && w1tk36['runWith']([0x1, zo256m]);
        } });
    }, vnudj['downImg'] = function (f9jl7, qahep0, z2m56o) {
      z2m56o === void 0x0 && (z2m56o = '');var qape0 = vnudj['wxdown']({ 'url': f9jl7, 'success': function (tk61w3) {
          tk61w3['statusCode'] === 0xc8 && vnudj['copyFile'](tk61w3['tempFilePath'], z2m56o, qahep0);
        }, 'fail': function (oizsx) {
          qahep0 != null && qahep0['runWith']([0x1, oizsx]);
        } });
    }, vnudj['copyFile'] = function (gi4xsm, cvfj, x4omi) {
      var qph_a = gi4xsm['split']('/'),
          yl79f = qph_a[qph_a['length'] - 0x1],
          idv4x = cvfj['split']('?')[0x0],
          iuvd = vnudj['getFileInfo'](cvfj),
          _qeph = vnudj['getFileNativePath'](yl79f);vnudj['fs']['copyFile']({ 'srcPath': gi4xsm, 'destPath': _qeph, 'success': function (izxosm) {
          if (!iuvd) vnudj['onSaveFile'](cvfj, yl79f), x4omi != null && x4omi['runWith']([0x0]);else {
            if (iuvd['readyUrl'] != cvfj) vnudj['remove'](yl79f, cvfj, x4omi);
          }
        }, 'fail': function (i4dvg) {
          x4omi != null && x4omi['runWith']([0x1, i4dvg]);
        } });
    }, vnudj['getFileNativePath'] = function (sxgi4d) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sxgi4d;
    }, vnudj['remove'] = function (idv4gx, unvcj, guvj) {
      unvcj === void 0x0 && (unvcj = '');var ug4idv = vnudj['getFileInfo'](unvcj),
          jncvfu = vnudj['getFileNativePath'](ug4idv['md5']);ph_raq['loader']['clearRes'](ug4idv['readyUrl']), vnudj['fs']['unlink']({ 'filePath': jncvfu, 'success': function (lfy78) {
          if (unvcj != '') vnudj['onSaveFile'](unvcj, idv4gx);guvj != null && guvj['runWith']([0x0]);
        }, 'fail': function (bhw0e) {} });
    }, vnudj['onSaveFile'] = function (b3wk, zmox) {
      var z6m5o = b3wk['split']('?')[0x0];vnudj['filesListObj'][z6m5o] = { 'md5': zmox, 'readyUrl': b3wk }, vnudj['fs']['writeFile']({ 'filePath': vnudj['fileNativeDir'] + '/' + vnudj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vnudj['filesListObj']), 'success': function (oizms) {
          console['log']('写入测试测试成功：', oizms);
        }, 'fail': function (pebha0) {
          console['log']('写入测试测试失败：', pebha0);
        } });
    }, vnudj['existDir'] = function (ha0eb, hapqe_) {
      vnudj['fs']['mkdir']({ 'dirPath': ha0eb, 'success': function (vg4iud) {
          hapqe_ != null && hapqe_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (e0kw1) {
          if (e0kw1['errMsg']['indexOf']('file already exists') != -0x1) vnudj['readSync'](vnudj['fileListName'], 'utf8', hapqe_);else hapqe_ != null && hapqe_['runWith']([0x1, e0kw1]);
        } });
    }, vnudj['readSync'] = function (gnju, f789cl, r_apq, xosim4) {
      f789cl === void 0x0 && (f789cl = 'ascill'), xosim4 === void 0x0 && (xosim4 = '');var smixg4 = vnudj['getFileNativePath'](gnju),
          ig4sxm;try {
        ig4sxm = vnudj['fs']['readFileSync'](smixg4), r_apq != null && r_apq['runWith']([0x0, { 'data': ig4sxm }]);
      } catch (gu4idv) {
        r_apq != null && r_apq['runWith']([0x1]);
      }
    }, vnudj['readCache'] = function () {}, vnudj['writeCache'] = function (wbk013) {
      var xo5sz = readyUrl['split']('?')[0x0];vnudj['filesListObj'][xo5sz] = { 'md5': md5Name, 'readyUrl': readyUrl }, vnudj['fs']['writeFile']({ 'filePath': vnudj['fileNativeDir'] + '/' + vnudj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vnudj['filesListObj']), 'success': function (hebw0) {}, 'fail': function (dngvu) {} });
    }, vnudj['setNativeFileDir'] = function (ke0bh) {
      vnudj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ke0bh;
    }, vnudj['filesListObj'] = {}, vnudj['fileNativeDir'] = null, vnudj['fileListName'] = 'layaairfiles.txt', vnudj['ziyuFileData'] = {}, k1ew0(vnudj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), vnudj;
  }(ucv),
      nuv4gd = function (ewb0) {
    function njflc9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], njflc9['__super']['call'](this), this['_sound'] = njflc9['_createSound']();
    }ew0bhk(njflc9, 'laya.wx.mini.MiniSound', ewb0);var parqh = njflc9['prototype'];return parqh['load'] = function (ebkh0w) {
      var dnvugj = this;ebkh0w = a0ph['formatURL'](ebkh0w), this['url'] = ebkh0w;if (njflc9['_audioCache'][ebkh0w]) {
        this['event']('complete');return;
      }function tz5236() {
        if (njflc9['_null'] != undefined) dnvugj['_sound']['onCanplay'](njflc9['_null']), dnvugj['_sound']['onError'](njflc9['_null']);else try {
          dnvugj['_sound']['onCanplay'](null), dnvugj['_sound']['onError'](null), njflc9['_null'] = null;
        } catch (szx5m) {
          console['warn']('[wxmini] _clearSound:' + szx5m), dnvugj['_sound']['onCanplay']($l97), dnvugj['_sound']['onError']($l97), njflc9['_null'] = $l97;
        }
      }function os52m() {
        tz5236(), dnug4['loaded'] = !![], dnug4['event']('complete'), njflc9['_audioCache'][dnug4['url']] = dnug4;
      }function pb0he(e0kpb) {
        console['error']('errCode=' + e0kpb['errCode'] + '  errMsg=' + e0kpb['errMsg']), tz5236(), dnug4['event']('error');
      }function $l97() {}this['_sound']['onCanplay'](os52m), this['_sound']['onError'](pb0he), this['_sound']['src'] = ebkh0w;var dnug4 = this;
    }, parqh['play'] = function (cnf9ju, v4xd) {
      cnf9ju === void 0x0 && (cnf9ju = 0x0), v4xd === void 0x0 && (v4xd = 0x0);var kb31tw;if (this['url'] == w1bke0['_tMusic']) {
        if (!njflc9['_musicAudio']) njflc9['_musicAudio'] = njflc9['_createSound']();kb31tw = njflc9['_musicAudio'];
      } else kb31tw = njflc9['_createSound']();kb31tw['src'] = this['url'];var a_hqpr = new wb01k3(kb31tw);return a_hqpr['url'] = this['url'], a_hqpr['loops'] = v4xd, a_hqpr['startTime'] = cnf9ju, a_hqpr['play'](), w1bke0['addChannel'](a_hqpr), a_hqpr;
    }, parqh['dispose'] = function () {
      var ephk0 = njflc9['_audioCache'][this['url']];ephk0 && (ephk0['src'] = '', delete njflc9['_audioCache'][this['url']]);
    }, vigd4u(0x0, parqh, 'duration', function () {
      return this['_sound']['duration'];
    }), njflc9['_createSound'] = function () {
      return njflc9['_id']++, xz5o['window']['wx']['createInnerAudioContext']();
    }, njflc9['_musicAudio'] = null, njflc9['_id'] = 0x0, njflc9['_audioCache'] = {}, njflc9['_null'] = undefined, njflc9;
  }(ucv),
      wb01k3 = function (so5mz) {
    function toz(gs4id) {
      this['_audio'] = null, this['_onEnd'] = null, toz['__super']['call'](this), this['_audio'] = gs4id, this['_onEnd'] = jcl9f['bind'](this['__onEnd'], this), gs4id['onEnded'](this['_onEnd']);
    }ew0bhk(toz, 'laya.wx.mini.MiniSoundChannel', so5mz);var ew1 = toz['prototype'];return ew1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ph_raq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ew1['__onNull'] = function () {}, ew1['play'] = function () {
      this['isStopped'] = ![], w1bke0['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ew1['stop'] = function () {
      this['isStopped'] = !![], w1bke0['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (toz['_null'] != undefined) this['_audio']['onEnded'](toz['_null']);else try {
        this['_audio']['onEnded'](null), toz['_null'] = null;
      } catch (sm5x) {
        console['warn']('[wxmini] stop:' + sm5x), this['_audio']['onEnded'](jcl9f['bind'](this['__onNull'], this)), toz['_null'] = jcl9f['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ew1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ew1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w1bke0['addChannel'](this), this['_audio']['play']();
    }, vigd4u(0x0, ew1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vigd4u(0x0, ew1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vigd4u(0x0, ew1, 'volume', function () {
      return 0x1;
    }, function (k3tw) {}), toz['_null'] = undefined, toz;
  }(kew0b);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gvx4id in Laya) {
    var xidsg = Laya[gvx4id];xidsg && xidsg['__isclass'] && (exports[gvx4id] = xidsg);
  }
});