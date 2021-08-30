var _ = wx.y$;
!function ($2z_0, nklm) {
  nklm['un'], nklm['uns'];var z0y1 = nklm['static'],
      opqln = nklm['class'],
      lqnop = nklm['getset'];nklm['__newvec'];var tvqru = laya['utils']['Browser'],
      wsux = (laya['events']['Event'], laya['events']['EventDispatcher']),
      pqustr = laya['resource']['HTMLImage'],
      gijfkh = laya['utils']['Handler'],
      omkln = laya['display']['Input'],
      zwv = laya['net']['Loader'];laya['maths']['Matrix'];var $0yz_x = laya['renders']['Render'],
      onklm = laya['utils']['RunDriver'];laya['media']['Sound'];var wyzxv = laya['media']['SoundChannel'],
      mijhk = laya['media']['SoundManager'],
      jmil = (laya['display']['Stage'], laya['net']['URL']),
      afed = laya['utils']['Utils'],
      jmknl = (opqln(imjl, 'laya.wx.mini.MiniAdpter'), imjl['getJson'] = function (lpoqnm) {
    return JSON['parse'](lpoqnm);
  }, imjl['init'] = function (okmnlp, hejig) {
    void 0x0 === okmnlp && (okmnlp = !0x1), void 0x0 === hejig && (hejig = !0x1), imjl['_inited'] || (imjl['window'] = $2z_0)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (imjl['_inited'] = !0x0, imjl['isZiYu'] = hejig, imjl['isPosMsgYu'] = okmnlp, imjl['EnvConfig'] = {}, imjl['isZiYu'] || (_210z['setNativeFileDir']('/layaairGame'), _210z['existDir'](_210z['fileNativeDir'], gijfkh['create'](imjl, imjl['onMkdirCallBack']))), imjl['window']['focus'] = function () {}, nklm['getUrlPath'] = function () {}, imjl['window']['logtime'] = function (egihfj) {}, imjl['window']['alertTimeLog'] = function (z1_y$0) {}, imjl['window']['resetShareInfo'] = function () {}, imjl['window']['CanvasRenderingContext2D'] = function () {}, imjl['window']['CanvasRenderingContext2D']['prototype'] = imjl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], imjl['window']['document']['body']['appendChild'] = function () {}, imjl['EnvConfig']['pixelRatioInt'] = 0x0, onklm['getPixelRatio'] = imjl['pixelRatio'], imjl['_preCreateElement'] = tvqru['createElement'], tvqru['createElement'] = imjl['createElement'], onklm['createShaderCondition'] = imjl['createShaderCondition'], afed['parseXMLFromString'] = imjl['parseXMLFromString'], omkln['_createInputElement'] = soqrpn['_createInputElement'], imjl['EnvConfig']['load'] = zwv['prototype']['load'], zwv['prototype']['load'] = mhlkji['prototype']['load'], imjl['isZiYu'] && okmnlp && wx['onMessage'](function (z$vyxw) {
      z$vyxw['isLoad'] && (_210z['ziyuFileData'][z$vyxw['url']] = z$vyxw['data']);
    }));
  }, imjl['onMkdirCallBack'] = function (_0$z1y, wtuxv) {
    _0$z1y || (_210z['filesListObj'] = JSON['parse'](wtuxv['data']));
  }, imjl['pixelRatio'] = function () {
    if (!imjl['EnvConfig']['pixelRatioInt']) try {
      var jihfe = wx['getSystemInfoSync']();return imjl['EnvConfig']['pixelRatioInt'] = jihfe['pixelRatio'], jihfe['pixelRatio'];
    } catch (cdefba) {}return imjl['EnvConfig']['pixelRatioInt'];
  }, imjl['createElement'] = function (ijnlk) {
    var rusptq;if ('canvas' == ijnlk) return 0x1 == imjl['idx'] ? imjl['isZiYu'] ? (rusptq = sharedCanvas)['style'] = {} : rusptq = $2z_0['canvas'] : rusptq = $2z_0['wx']['createCanvas'](), imjl['idx']++, rusptq;if ('textarea' == ijnlk || 'input' == ijnlk) return imjl['onCreateInput'](ijnlk);if ('div' != ijnlk) return imjl['_preCreateElement'](ijnlk);return ijnlk = imjl['_preCreateElement'](ijnlk), (ijnlk['contains'] = function (ifkhj) {
      return null;
    }, ijnlk['removeChild'] = function (xzwy_$) {}, ijnlk);
  }, imjl['onCreateInput'] = function (uzywvx) {
    return uzywvx = imjl['_preCreateElement'](uzywvx), (uzywvx['focus'] = soqrpn['wxinputFocus'], uzywvx['blur'] = soqrpn['wxinputblur'], uzywvx['style'] = {}, uzywvx['value'] = 0x0, uzywvx['parentElement'] = {}, uzywvx['placeholder'] = {}, uzywvx['type'] = {}, uzywvx['setColor'] = function (fdcgb) {}, uzywvx['setType'] = function (y0x$z) {}, uzywvx['setFontFace'] = function (rtuwvs) {}, uzywvx['addEventListener'] = function (okmnj) {}, uzywvx['contains'] = function (kjimlh) {
      return null;
    }, uzywvx['removeChild'] = function (vqrsut) {}, uzywvx);
  }, imjl['createShaderCondition'] = function (gcfbe) {
    var z21$_0 = this;return function () {
      return z21$_0[gcfbe['replace']('this.', '')];
    };
  }, imjl['EnvConfig'] = null, imjl['window'] = null, imjl['_preCreateElement'] = null, imjl['_inited'] = !0x1, imjl['wxRequest'] = null, imjl['systemInfo'] = null, imjl['version'] = '0.0.1', imjl['isZiYu'] = !0x1, imjl['isPosMsgYu'] = !0x1, imjl['parseXMLFromString'] = function (vtwsur) {
    var uwvxy;vtwsur = vtwsur['replace'](/>\s+</g, '><');try {
      uwvxy = new $2z_0['Parser']['DOMParser']()['parseFromString'](vtwsur, 'text/xml');
    } catch (sqtuv) {
      throw '需要引入xml解析库文件';
    }return uwvxy;
  }, imjl['idx'] = 0x1, imjl);function imjl() {}opqln(hde, 'laya.wx.mini.MiniImage'), hde['prototype']['_loadImage'] = function (txywu) {
    var hkf = !0x1;-0x1 == txywu['indexOf']('layaNativeDir/') && (hkf = !0x0, txywu = jmil['formatURL'](txywu)), _210z['getFileInfo'](txywu) ? hde['onCreateImage'](txywu, this, !hkf) : -0x1 != txywu['indexOf']('http://') || -0x1 != txywu['indexOf']('https://') ? _210z['downImg'](txywu, new gijfkh(hde, hde['onDownImgCallBack'], [txywu, this]), txywu) : hde['onCreateImage'](txywu, this, !0x0);
  }, hde['onDownImgCallBack'] = function (gfhik, kihjg, srnq) {
    srnq ? kihjg['onError'](null) : hde['onCreateImage'](gfhik, kihjg);
  }, hde['onCreateImage'] = function (mhjki, hjgli, ytv) {
    var rstqpo, jinmlk;function omplk() {
      jinmlk['onload'] = null, jinmlk['onerror'] = null, delete hjgli['imgCache'][mhjki];
    }rstqpo = (ytv = void 0x0 === ytv ? !0x1 : ytv) ? mhjki : (w$xy_ = _210z['getFileInfo'](mhjki)['md5'], _210z['getFileNativePath'](w$xy_)), null == hjgli['imgCache'] && (hjgli['imgCache'] = {}), ytv = function () {
      omplk(), hjgli['onLoaded'](jinmlk);
    };var w$xy_ = function () {
      omplk(), hjgli['event']('error', 'Load image failed');
    };'nativeimage' == hjgli['_type'] ? ((jinmlk = new tvqru['window']['Image']())['crossOrigin'] = '', jinmlk['onload'] = ytv, jinmlk['onerror'] = w$xy_, jinmlk['src'] = rstqpo, hjgli['imgCache'][mhjki] = jinmlk) : new pqustr['create'](rstqpo, { 'onload': ytv, 'onerror': w$xy_, 'onCreate': function (rsutp) {
        jinmlk = rsutp, hjgli['imgCache'][mhjki] = rsutp;
      } });
  };function hde() {}var soqrpn = (opqln(gdfbce, 'laya.wx.mini.MiniInput'), gdfbce['_createInputElement'] = function () {
    omkln['_initInput'](omkln['area'] = tvqru['createElement']('textarea')), omkln['_initInput'](omkln['input'] = tvqru['createElement']('input')), omkln['inputContainer'] = tvqru['createElement']('div'), omkln['inputContainer']['style']['position'] = 'absolute', omkln['inputContainer']['style']['zIndex'] = 0x186a0, tvqru['container']['appendChild'](omkln['inputContainer']), omkln['inputContainer']['setPos'] = function (mlkjo, mnqlo) {
      omkln['inputContainer']['style']['left'] = mlkjo + 'px', omkln['inputContainer']['style']['top'] = mnqlo + 'px';
    }, nklm['stage']['on']('resize', null, gdfbce['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jmlonk) {
      $2z_0['dispatchEvent'] && $2z_0['dispatchEvent']('resize');
    }), mijhk['_soundClass'] = x$_z, mijhk['_musicClass'] = x$_z;
  }, gdfbce['_onStageResize'] = function () {
    nklm['stage']['_canvasTransform']['identity']()['scale'](tvqru['width'] / $0yz_x['canvas']['width'] / onklm['getPixelRatio'](), tvqru['height'] / $0yz_x['canvas']['height'] / onklm['getPixelRatio']());
  }, gdfbce['wxinputFocus'] = function (rnmoq) {
    var nmolqp = omkln['inputElement']['target'];nmolqp && !nmolqp['editable'] || (jmknl['window']['wx']['offKeyboardConfirm'](), jmknl['window']['wx']['offKeyboardInput'](), jmknl['window']['wx']['showKeyboard']({ 'defaultValue': nmolqp['text'], 'maxLength': nmolqp['maxChars'], 'multiple': nmolqp['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (_yw) {}, 'fail': function (gfijeh) {} }), jmknl['window']['wx']['onKeyboardConfirm'](function (twvur) {
      twvur = twvur ? twvur['value'] : '', (nmolqp['text'] = twvur, nmolqp['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), jmknl['window']['wx']['onKeyboardInput'](function (qnrmp) {
      qnrmp = qnrmp ? qnrmp['value'] : '', nmolqp['multiline'] || -0x1 == qnrmp['indexOf']('\x0a') ? (nmolqp['text'] = qnrmp, nmolqp['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, gdfbce['inputEnter'] = function () {
    omkln['inputElement']['target']['focus'] = !0x1;
  }, gdfbce['wxinputblur'] = function () {
    gdfbce['hideKeyboard']();
  }, gdfbce['hideKeyboard'] = function () {
    jmknl['window']['wx']['offKeyboardConfirm'](), jmknl['window']['wx']['offKeyboardInput'](), jmknl['window']['wx']['hideKeyboard']({ 'success': function (hjiglk) {
        console['log']('隐藏键盘');
      }, 'fail': function ($xw_yz) {
        console['log']('隐藏键盘出错:' + ($xw_yz ? $xw_yz['errMsg'] : ''));
      } });
  }, gdfbce);function gdfbce() {}var mhlkji = function () {
    function imnlkj() {}opqln(imnlkj, 'laya.wx.mini.MiniLoader');var xyuvzw = imnlkj['prototype'];return xyuvzw['load'] = function (rtsvqu, ifgjhk, jnlmo, qmlnpo, fghec) {
      void 0x0 === jnlmo && (jnlmo = !0x0), void 0x0 === fghec && (fghec = !0x1);var fdbgc = this;0x0 === (fdbgc['_url'] = rtsvqu)['indexOf']('data:image') ? fdbgc['_type'] = ifgjhk = 'image' : fdbgc['_type'] = ifgjhk = ifgjhk || fdbgc['getTypeFromUrl'](rtsvqu), fdbgc['_cache'] = jnlmo, fdbgc['_data'] = null;var tsvr = 'ascii';-0x1 != rtsvqu['indexOf']('.fnt') ? tsvr = 'utf8' : 'arraybuffer' == ifgjhk && (tsvr = '');var svxtuw = afed['getFileExtension'](rtsvqu);if (-0x1 != imnlkj['_fileTypeArr']['indexOf'](svxtuw)) jmknl['EnvConfig']['load']['call'](this, rtsvqu, ifgjhk, jnlmo, qmlnpo, fghec);else {
        if (_210z['getFileInfo'](rtsvqu)) jmknl['EnvConfig']['load']['call'](this, rtsvqu, ifgjhk, jnlmo, qmlnpo, fghec);else {
          if (-0x1 != rtsvqu['indexOf']('layaNativeDir/')) {
            if (jmknl['isZiYu']) {
              var vxwuz = _210z['ziyuFileData'][rtsvqu];return void fdbgc['onLoaded'](vxwuz);
            }return cosnole['log']('read read'), void _210z['read'](rtsvqu, tsvr, new gijfkh(imnlkj, imnlkj['onReadNativeCallBack'], [tsvr, rtsvqu, ifgjhk, jnlmo, qmlnpo, fghec, fdbgc]));
          }vxwuz = '' == jmil['rootPath'] ? rtsvqu : rtsvqu['split'](jmil['rootPath'])[0x0], -0x1 != rtsvqu['indexOf']('http://') || -0x1 != rtsvqu['indexOf']('https://') ? jmknl['EnvConfig']['load']['call'](fdbgc, rtsvqu, ifgjhk, jnlmo, qmlnpo, fghec) : _210z['readFile'](vxwuz, tsvr, new gijfkh(imnlkj, imnlkj['onReadNativeCallBack'], [tsvr, rtsvqu, ifgjhk, jnlmo, qmlnpo, fghec, fdbgc]), rtsvqu);
        }
      }
    }, xyuvzw['resMgrLoad'] = function (w$vxyz, hgijl, jghfi, vxwuty, plnomk, yzuxw, hkgfij) {
      void 0x0 === jghfi && (jghfi = 0x0), void 0x0 === vxwuty && (vxwuty = !0x1), void 0x0 === plnomk && (plnomk = !0x1), void 0x0 === yzuxw && (yzuxw = 0x0), void 0x0 === hkgfij && (hkgfij = 0x3), -0x1 != w$vxyz['indexOf']('mpack') && console['log']('=============resMgrLoad url:', w$vxyz), jmknl['EnvConfig']['resMgrLoad'](w$vxyz, (vwzx$, _zy$01, tpsrq) => {
        imnlkj['prototype']['resMgrLoadCallBack'](vwzx$, _zy$01, tpsrq, hgijl);
      }, jghfi, vxwuty, plnomk, yzuxw, hkgfij);
    }, xyuvzw['resMgrLoadCallBack'] = function (twusv, hijkg, hgjefi, nlmpo) {
      console['log']('buff:::', twusv, hgjefi, _210z['fileNativeDir'] + '///' + _210z['fileListName']), nlmpo(twusv, hijkg, hgjefi);
    }, xyuvzw['clearRes'] = function (efjigh, z$0y1_) {
      this['clearRes'](efjigh, z$0y1_ = void 0x0 === z$0y1_ ? !0x1 : z$0y1_), z$0y1_ = _210z['getFileInfo'](efjigh), !z$0y1_ || -0x1 == efjigh['indexOf']('http://') && -0x1 == efjigh['indexOf']('https://') || (z$0y1_ = z$0y1_['md5'], z$0y1_ = _210z['getFileNativePath'](z$0y1_), _210z['remove'](z$0y1_));
    }, imnlkj['onReadNativeCallBack'] = function (kmpo, xw$vzy, nkjilm, wsvxu, pomlk, $13, w$_zyx, uwtxy, cbfead) {
      void 0x0 === wsvxu && (wsvxu = !0x0), void 0x0 === $13 && ($13 = !0x1), (uwtxy = void 0x0 === uwtxy ? 0x0 : uwtxy) ? 0x1 == uwtxy && jmknl['EnvConfig']['load']['call'](w$_zyx, xw$vzy, nkjilm, wsvxu, pomlk, $13) : (cbfead = 'json' == nkjilm || 'atlas' == nkjilm ? jmknl['getJson'](cbfead['data']) : 'xml' == nkjilm ? afed['parseXMLFromString'](cbfead['data']) : cbfead['data'], w$_zyx['onLoaded'](cbfead), !jmknl['isZiYu'] && jmknl['isPosMsgYu'] && 'arraybuffer' != nkjilm && wx['postMessage']({ 'url': xw$vzy, 'data': cbfead, 'isLoad': !0x0 }));
    }, z0y1(imnlkj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), imnlkj;
  }(),
      _210z = (opqln(jglk, 'laya.wx.mini.MiniFileMgr', wsux), jglk['isLoadFile'] = function (rust) {
    return -0x1 != jglk['_fileTypeArr']['indexOf'](rust);
  }, jglk['getFileInfo'] = function (rtosp) {
    return rtosp = rtosp['split']('?')[0x0], rtosp = jglk['filesListObj'][rtosp], null == rtosp ? null : rtosp;
  }, jglk['onFileUpdate'] = function (_314, fijh) {
    var $0231 = _314['split']('/');_314 = $0231[$0231['length'] - 0x1], $0231 = jglk['getFileInfo'](fijh), null == $0231 ? jglk['onSaveFile'](fijh, _314) : $0231['readyUrl'] != fijh && jglk['remove'](_314, fijh);
  }, jglk['exits'] = function (yzw_x, hjklgi) {
    yzw_x = jglk['getFileNativePath'](yzw_x), jglk['fs']['getFileInfo']({ 'filePath': yzw_x, 'success': function (uxywtv) {
        null != hjklgi && hjklgi['runWith']([0x0, uxywtv]);
      }, 'fail': function (jghl) {
        null != hjklgi && hjklgi['runWith']([0x1, jghl]);
      } });
  }, jglk['read'] = function (mopql, txwsv, ijhfeg, monk) {
    void 0x0 === txwsv && (txwsv = 'ascill'), mopql = '' != (monk = void 0x0 === monk ? '' : monk) ? jglk['getFileNativePath'](mopql) : mopql, jglk['fs']['readFile']({ 'filePath': mopql, 'encoding': txwsv, 'success': function (_z$021) {
        null != ijhfeg && ijhfeg['runWith']([0x0, _z$021]);
      }, 'fail': function (x$0z_y) {
        x$0z_y && '' != monk ? jglk['down'](monk, txwsv, ijhfeg, monk) : null != ijhfeg && ijhfeg['runWith']([0x1]);
      } });
  }, jglk['readNativeFile'] = function (x_z$y, omnrqp) {
    jglk['fs']['readFile']({ 'filePath': x_z$y, 'encoding': '', 'success': function (gkjlih) {
        null != omnrqp && omnrqp['runWith']([0x0]);
      }, 'fail': function (jklin) {
        null != omnrqp && omnrqp['runWith']([0x1]);
      } });
  }, jglk['down'] = function (v$xwyz, egfij, zw_y, tursw) {
    void 0x0 === egfij && (egfij = 'ascill'), void 0x0 === tursw && (tursw = '');var jfieg = jglk['getFileNativePath'](tursw);jglk['wxdown']({ 'url': v$xwyz, 'filePath': jfieg, 'success': function (mqonrp) {
        0xc8 === mqonrp['statusCode'] && jglk['readFile'](mqonrp['filePath'], egfij, zw_y, tursw);
      }, 'fail': function (z0$_2) {
        null != zw_y && zw_y['runWith']([0x1, z0$_2]);
      } })['onProgressUpdate'](function (olknjm) {
      null != zw_y && zw_y['runWith']([0x2, olknjm['progress']]);
    });
  }, jglk['readFile'] = function ($w_xzy, kjlon, qonrm, qstrv) {
    void 0x0 === qstrv && (qstrv = ''), jglk['fs']['readFile']({ 'filePath': $w_xzy, 'encoding': kjlon = void 0x0 === kjlon ? 'ascill' : kjlon, 'success': function (vrwtsu) {
        -0x1 == $w_xzy['indexOf']('http://') && -0x1 == $w_xzy['indexOf']('https://') || jglk['onFileUpdate']($w_xzy, qstrv), null != qonrm && qonrm['runWith']([0x0, vrwtsu]);
      }, 'fail': function (khjiml) {
        khjiml && null != qonrm && qonrm['runWith']([0x1, khjiml]);
      } });
  }, jglk['downImg'] = function (vuxstw, ijegfh, dafc) {
    void 0x0 === dafc && (dafc = ''), jglk['wxdown']({ 'url': vuxstw, 'success': function (_1$0yz) {
        0xc8 === _1$0yz['statusCode'] && jglk['copyFile'](_1$0yz['tempFilePath'], dafc, ijegfh);
      }, 'fail': function (kmojl) {
        null != ijegfh && ijegfh['runWith']([0x1, kmojl]);
      } });
  }, jglk['copyFile'] = function (gefdch, ghedi, efgdb) {
    var mklinj = gefdch['split']('/'),
        bcfdge = mklinj[mklinj['length'] - 0x1];ghedi['split']('?')[0x0];var z1$0 = jglk['getFileInfo'](ghedi);mklinj = jglk['getFileNativePath'](bcfdge), jglk['fs']['copyFile']({ 'srcPath': gefdch, 'destPath': mklinj, 'success': function (w_zyx$) {
        z1$0 ? z1$0['readyUrl'] != ghedi && jglk['remove'](bcfdge, ghedi, efgdb) : (jglk['onSaveFile'](ghedi, bcfdge), null != efgdb && efgdb['runWith']([0x0]));
      }, 'fail': function (fhegdc) {
        null != efgdb && efgdb['runWith']([0x1, fhegdc]);
      } });
  }, jglk['getFileNativePath'] = function (ikjlm) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ikjlm;
  }, jglk['remove'] = function (squ, degih, hegcd) {
    void 0x0 === degih && (degih = '');var edhgcf = jglk['getFileInfo'](degih),
        nilm = jglk['getFileNativePath'](edhgcf['md5']);nklm['loader']['clearRes'](edhgcf['readyUrl']), jglk['fs']['unlink']({ 'filePath': nilm, 'success': function (uxvws) {
        '' != degih && jglk['onSaveFile'](degih, squ), null != hegcd && hegcd['runWith']([0x0]);
      }, 'fail': function (dgbfc) {} });
  }, jglk['onSaveFile'] = function (qolpm, iefj) {
    var mlo = qolpm['split']('?')[0x0];jglk['filesListObj'][mlo] = { 'md5': iefj, 'readyUrl': qolpm }, jglk['fs']['writeFile']({ 'filePath': jglk['fileNativeDir'] + '/' + jglk['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jglk['filesListObj']), 'success': function (roqnpm) {
        console['log']('写入测试测试成功：', roqnpm);
      }, 'fail': function (stwr) {
        console['log']('写入测试测试失败：', stwr);
      } });
  }, jglk['existDir'] = function (tspqro, cbgf) {
    jglk['fs']['mkdir']({ 'dirPath': tspqro, 'success': function (mprn) {
        null != cbgf && cbgf['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (txsu) {
        -0x1 != txsu['errMsg']['indexOf']('file already exists') ? jglk['readSync'](jglk['fileListName'], 'utf8', cbgf) : null != cbgf && cbgf['runWith']([0x1, txsu]);
      } });
  }, jglk['readSync'] = function (otrsp, mqpol, wurvs, zxy$v) {
    void 0x0 === mqpol && (mqpol = 'ascill'), void 0x0 === zxy$v && (zxy$v = ''), otrsp = jglk['getFileNativePath'](otrsp);var yzuvx;try {
      yzuvx = jglk['fs']['readFileSync'](otrsp), null != wurvs && wurvs['runWith']([0x0, { 'data': yzuvx }]);
    } catch (y_$0xz) {
      null != wurvs && wurvs['runWith']([0x1]);
    }
  }, jglk['readCache'] = function () {}, jglk['writeCache'] = function (kfhi) {
    var gihfe = readyUrl['split']('?')[0x0];jglk['filesListObj'][gihfe] = { 'md5': md5Name, 'readyUrl': readyUrl }, jglk['fs']['writeFile']({ 'filePath': jglk['fileNativeDir'] + '/' + jglk['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jglk['filesListObj']), 'success': function (okpml) {}, 'fail': function (khifgj) {} });
  }, jglk['setNativeFileDir'] = function (mik) {
    jglk['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mik;
  }, jglk['filesListObj'] = {}, jglk['fileNativeDir'] = null, jglk['fileListName'] = 'layaairfiles.txt', jglk['ziyuFileData'] = {}, z0y1(jglk, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), jglk);function jglk() {
    jglk['__super']['call'](this);
  }var x$_z = function () {
    function molqpn() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, molqpn['__super']['call'](this), this['_sound'] = molqpn['_createSound']();
    }opqln(molqpn, 'laya.wx.mini.MiniSound', wsux);var rustqv = molqpn['prototype'];return rustqv['load'] = function (fdeb) {
      var lnjmo = this,
          _xzyw;function cdeh() {
        if (null != molqpn['_null']) lnjmo['_sound']['onCanplay'](molqpn['_null']), lnjmo['_sound']['onError'](molqpn['_null']);else try {
          lnjmo['_sound']['onCanplay'](null), lnjmo['_sound']['onError'](null), molqpn['_null'] = null;
        } catch (ecgfd) {
          console['warn']('[wxmini] _clearSound:' + ecgfd), lnjmo['_sound']['onCanplay'](hijefg), lnjmo['_sound']['onError'](hijefg), molqpn['_null'] = hijefg;
        }
      }function hijefg() {}fdeb = jmil['formatURL'](fdeb), this['url'] = fdeb, molqpn['_audioCache'][fdeb] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        cdeh(), _xzyw['loaded'] = !0x0, _xzyw['event']('complete'), molqpn['_audioCache'][_xzyw['url']] = _xzyw;
      }), this['_sound']['onError'](function (fhdeg) {
        console['error']('errCode=' + fhdeg['errCode'] + '  errMsg=' + fhdeg['errMsg']), cdeh(), _xzyw['event']('error');
      }), this['_sound']['src'] = fdeb, _xzyw = this);
    }, rustqv['play'] = function (_2410, kmhji) {
      void 0x0 === _2410 && (_2410 = 0x0), void 0x0 === kmhji && (kmhji = 0x0), ($vxy = this['url'] == mijhk['_tMusic'] ? (molqpn['_musicAudio'] || (molqpn['_musicAudio'] = molqpn['_createSound']()), molqpn['_musicAudio']) : molqpn['_createSound']())['src'] = this['url'];var $vxy = new jeigh($vxy);return $vxy['url'] = this['url'], $vxy['loops'] = kmhji, $vxy['startTime'] = _2410, $vxy['play'](), mijhk['addChannel']($vxy), $vxy;
    }, rustqv['dispose'] = function () {
      var fegi = molqpn['_audioCache'][this['url']];fegi && (fegi['src'] = '', delete molqpn['_audioCache'][this['url']]);
    }, lqnop(0x0, rustqv, 'duration', function () {
      return this['_sound']['duration'];
    }), molqpn['_createSound'] = function () {
      return molqpn['_id']++, jmknl['window']['wx']['createInnerAudioContext']();
    }, molqpn['_musicAudio'] = null, molqpn['_id'] = 0x0, molqpn['_audioCache'] = {}, molqpn['_null'] = void 0x0, molqpn;
  }(),
      jeigh = function () {
    function molkp(qstrop) {
      this['_audio'] = null, this['_onEnd'] = null, molkp['__super']['call'](this), this['_audio'] = qstrop, this['_onEnd'] = afed['bind'](this['__onEnd'], this), qstrop['onEnded'](this['_onEnd']);
    }opqln(molkp, 'laya.wx.mini.MiniSoundChannel', wyzxv);var wyz$ = molkp['prototype'];return wyz$['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (nklm['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wyz$['__onNull'] = function () {}, wyz$['play'] = function () {
      this['isStopped'] = !0x1, mijhk['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, wyz$['stop'] = function () {
      if (this['isStopped'] = !0x0, mijhk['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != molkp['_null']) this['_audio']['onEnded'](molkp['_null']);else try {
          this['_audio']['onEnded'](null), molkp['_null'] = null;
        } catch (ilhkm) {
          console['warn']('[wxmini] stop:' + ilhkm), this['_audio']['onEnded'](afed['bind'](this['__onNull'], this)), molkp['_null'] = afed['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, wyz$['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, wyz$['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, mijhk['addChannel'](this), this['_audio']['play']());
    }, lqnop(0x0, wyz$, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), lqnop(0x0, wyz$, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), lqnop(0x0, wyz$, 'volume', function () {
      return 0x1;
    }, function (fjik) {}), molkp['_null'] = void 0x0, molkp;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (zxy$, khfg) {
  'use strict';

  for (var opnlm in Object['defineProperty'](khfg, '__esModule', { 'value': !0x0 }), Laya) {
    var wyx$_z = Laya[opnlm];wyx$_z && wyx$_z['__isclass'] && (khfg[opnlm] = wyx$_z);
  }
});