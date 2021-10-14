var S = wx.$J;
!function (na0fql, g1oq$8) {
  g1oq$8['un'], g1oq$8['uns'];var $g28co = g1oq$8['static'],
      jmewy4 = g1oq$8['class'],
      b3z6 = g1oq$8['getset'];g1oq$8['__newvec'];var i3ph6 = laya['utils']['Browser'],
      ews_7 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      hip6x = laya['resource']['HTMLImage'],
      ktv25b = laya['utils']['Handler'],
      cto2$g = laya['display']['Input'],
      launf = laya['net']['Loader'];laya['maths']['Matrix'];var b56z = laya['renders']['Render'],
      $o8c2 = laya['utils']['RunDriver'];laya['media']['Sound'];var co28g = laya['media']['SoundChannel'],
      bz6p3 = laya['media']['SoundManager'],
      ldnfua = (laya['display']['Stage'], laya['net']['URL']),
      o08qg1 = laya['utils']['Utils'],
      rpx3h = (jmewy4(xpi3h, 'laya.wx.mini.MiniAdpter'), xpi3h['getJson'] = function (c25tvk) {
    return JSON['parse'](c25tvk);
  }, xpi3h['init'] = function (o1$gc, iz3pb6) {
    void 0x0 === o1$gc && (o1$gc = !0x1), void 0x0 === iz3pb6 && (iz3pb6 = !0x1), xpi3h['_inited'] || (xpi3h['window'] = na0fql)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (xpi3h['_inited'] = !0x0, xpi3h['isZiYu'] = iz3pb6, xpi3h['isPosMsgYu'] = o1$gc, xpi3h['EnvConfig'] = {}, xpi3h['isZiYu'] || (n80l1['setNativeFileDir']('/layaairGame'), n80l1['existDir'](n80l1['fileNativeDir'], ktv25b['create'](xpi3h, xpi3h['onMkdirCallBack']))), xpi3h['window']['focus'] = function () {}, g1oq$8['getUrlPath'] = function () {}, xpi3h['window']['logtime'] = function (z5vkb) {}, xpi3h['window']['alertTimeLog'] = function (myj4w) {}, xpi3h['window']['resetShareInfo'] = function () {}, xpi3h['window']['CanvasRenderingContext2D'] = function () {}, xpi3h['window']['CanvasRenderingContext2D']['prototype'] = xpi3h['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xpi3h['window']['document']['body']['appendChild'] = function () {}, xpi3h['EnvConfig']['pixelRatioInt'] = 0x0, $o8c2['getPixelRatio'] = xpi3h['pixelRatio'], xpi3h['_preCreateElement'] = i3ph6['createElement'], i3ph6['createElement'] = xpi3h['createElement'], $o8c2['createShaderCondition'] = xpi3h['createShaderCondition'], o08qg1['parseXMLFromString'] = xpi3h['parseXMLFromString'], cto2$g['_createInputElement'] = aflduj['_createInputElement'], xpi3h['EnvConfig']['load'] = launf['prototype']['load'], launf['prototype']['load'] = d4umy['prototype']['load'], xpi3h['isZiYu'] && o1$gc && wx['onMessage'](function (nlfau) {
      nlfau['isLoad'] && (n80l1['ziyuFileData'][nlfau['url']] = nlfau['data']);
    }));
  }, xpi3h['onMkdirCallBack'] = function (z3k6, ct5o$) {
    z3k6 || (n80l1['filesListObj'] = JSON['parse'](ct5o$['data']));
  }, xpi3h['pixelRatio'] = function () {
    if (!xpi3h['EnvConfig']['pixelRatioInt']) try {
      var k3i6bz = wx['getSystemInfoSync']();return xpi3h['EnvConfig']['pixelRatioInt'] = k3i6bz['pixelRatio'], k3i6bz['pixelRatio'];
    } catch (g0oq) {}return xpi3h['EnvConfig']['pixelRatioInt'];
  }, xpi3h['createElement'] = function (m4jdwy) {
    var bizk63;if ('canvas' == m4jdwy) return 0x1 == xpi3h['idx'] ? xpi3h['isZiYu'] ? (bizk63 = sharedCanvas)['style'] = {} : bizk63 = na0fql['canvas'] : bizk63 = na0fql['wx']['createCanvas'](), xpi3h['idx']++, bizk63;if ('textarea' == m4jdwy || 'input' == m4jdwy) return xpi3h['onCreateInput'](m4jdwy);if ('div' != m4jdwy) return xpi3h['_preCreateElement'](m4jdwy);return m4jdwy = xpi3h['_preCreateElement'](m4jdwy), (m4jdwy['contains'] = function (c2tkv) {
      return null;
    }, m4jdwy['removeChild'] = function (z3ikb6) {}, m4jdwy);
  }, xpi3h['onCreateInput'] = function (cv$t) {
    return cv$t = xpi3h['_preCreateElement'](cv$t), (cv$t['focus'] = aflduj['wxinputFocus'], cv$t['blur'] = aflduj['wxinputblur'], cv$t['style'] = {}, cv$t['value'] = 0x0, cv$t['parentElement'] = {}, cv$t['placeholder'] = {}, cv$t['type'] = {}, cv$t['setColor'] = function (pbzi36) {}, cv$t['setType'] = function (tc$2go) {}, cv$t['setFontFace'] = function (dajulf) {}, cv$t['addEventListener'] = function (hpzi3) {}, cv$t['contains'] = function (bi63kz) {
      return null;
    }, cv$t['removeChild'] = function (tc$25o) {}, cv$t);
  }, xpi3h['createShaderCondition'] = function (yj4wd) {
    var c2$tog = this;return function () {
      return c2$tog[yj4wd['replace']('this.', '')];
    };
  }, xpi3h['EnvConfig'] = null, xpi3h['window'] = null, xpi3h['_preCreateElement'] = null, xpi3h['_inited'] = !0x1, xpi3h['wxRequest'] = null, xpi3h['systemInfo'] = null, xpi3h['version'] = '0.0.1', xpi3h['isZiYu'] = !0x1, xpi3h['isPosMsgYu'] = !0x1, xpi3h['parseXMLFromString'] = function (es97w_) {
    var jy4mwe;es97w_ = es97w_['replace'](/>\s+</g, '><');try {
      jy4mwe = new na0fql['Parser']['DOMParser']()['parseFromString'](es97w_, 'text/xml');
    } catch (tc5$v2) {
      throw '需要引入xml解析库文件';
    }return jy4mwe;
  }, xpi3h['idx'] = 0x1, xpi3h);function xpi3h() {}jmewy4(c8og, 'laya.wx.mini.MiniImage'), c8og['prototype']['_loadImage'] = function (p3h6x) {
    var bz5k6 = !0x1;-0x1 == p3h6x['indexOf']('layaNativeDir/') && (bz5k6 = !0x0, p3h6x = ldnfua['formatURL'](p3h6x)), n80l1['getFileInfo'](p3h6x) ? c8og['onCreateImage'](p3h6x, this, !bz5k6) : -0x1 != p3h6x['indexOf']('http://') || -0x1 != p3h6x['indexOf']('https://') ? n80l1['downImg'](p3h6x, new ktv25b(c8og, c8og['onDownImgCallBack'], [p3h6x, this]), p3h6x) : c8og['onCreateImage'](p3h6x, this, !0x0);
  }, c8og['onDownImgCallBack'] = function (wyjd4, $cto, ydjmw4) {
    ydjmw4 ? $cto['onError'](null) : c8og['onCreateImage'](wyjd4, $cto);
  }, c8og['onCreateImage'] = function (go$q18, x6h3i, xihp63) {
    var uyjmd, uamjd;function gn80q1() {
      uamjd['onload'] = null, uamjd['onerror'] = null, delete x6h3i['imgCache'][go$q18];
    }uyjmd = (xihp63 = void 0x0 === xihp63 ? !0x1 : xihp63) ? go$q18 : (q08l1 = n80l1['getFileInfo'](go$q18)['md5'], n80l1['getFileNativePath'](q08l1)), null == x6h3i['imgCache'] && (x6h3i['imgCache'] = {}), xihp63 = function () {
      gn80q1(), x6h3i['onLoaded'](uamjd);
    };var q08l1 = function () {
      gn80q1(), x6h3i['event']('error', 'Load image failed');
    };'nativeimage' == x6h3i['_type'] ? ((uamjd = new i3ph6['window']['Image']())['crossOrigin'] = '', uamjd['onload'] = xihp63, uamjd['onerror'] = q08l1, uamjd['src'] = uyjmd, x6h3i['imgCache'][go$q18] = uamjd) : new hip6x['create'](uyjmd, { 'onload': xihp63, 'onerror': q08l1, 'onCreate': function (bp3i) {
        uamjd = bp3i, x6h3i['imgCache'][go$q18] = bp3i;
      } });
  };function c8og() {}var aflduj = (jmewy4(l1fqn, 'laya.wx.mini.MiniInput'), l1fqn['_createInputElement'] = function () {
    cto2$g['_initInput'](cto2$g['area'] = i3ph6['createElement']('textarea')), cto2$g['_initInput'](cto2$g['input'] = i3ph6['createElement']('input')), cto2$g['inputContainer'] = i3ph6['createElement']('div'), cto2$g['inputContainer']['style']['position'] = 'absolute', cto2$g['inputContainer']['style']['zIndex'] = 0x186a0, i3ph6['container']['appendChild'](cto2$g['inputContainer']), cto2$g['inputContainer']['setPos'] = function (z6ipb, qg8n10) {
      cto2$g['inputContainer']['style']['left'] = z6ipb + 'px', cto2$g['inputContainer']['style']['top'] = qg8n10 + 'px';
    }, g1oq$8['stage']['on']('resize', null, l1fqn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (falnq0) {
      na0fql['dispatchEvent'] && na0fql['dispatchEvent']('resize');
    }), bz6p3['_soundClass'] = phri3x, bz6p3['_musicClass'] = phri3x;
  }, l1fqn['_onStageResize'] = function () {
    g1oq$8['stage']['_canvasTransform']['identity']()['scale'](i3ph6['width'] / b56z['canvas']['width'] / $o8c2['getPixelRatio'](), i3ph6['height'] / b56z['canvas']['height'] / $o8c2['getPixelRatio']());
  }, l1fqn['wxinputFocus'] = function (w9_s) {
    var biz63 = cto2$g['inputElement']['target'];biz63 && !biz63['editable'] || (rpx3h['window']['wx']['offKeyboardConfirm'](), rpx3h['window']['wx']['offKeyboardInput'](), rpx3h['window']['wx']['showKeyboard']({ 'defaultValue': biz63['text'], 'maxLength': biz63['maxChars'], 'multiple': biz63['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ng80) {}, 'fail': function (tv5b2) {} }), rpx3h['window']['wx']['onKeyboardConfirm'](function (q18g$o) {
      q18g$o = q18g$o ? q18g$o['value'] : '', (biz63['text'] = q18g$o, biz63['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), rpx3h['window']['wx']['onKeyboardInput'](function (c5o$2t) {
      c5o$2t = c5o$2t ? c5o$2t['value'] : '', biz63['multiline'] || -0x1 == c5o$2t['indexOf']('\x0a') ? (biz63['text'] = c5o$2t, biz63['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, l1fqn['inputEnter'] = function () {
    cto2$g['inputElement']['target']['focus'] = !0x1;
  }, l1fqn['wxinputblur'] = function () {
    l1fqn['hideKeyboard']();
  }, l1fqn['hideKeyboard'] = function () {
    rpx3h['window']['wx']['offKeyboardConfirm'](), rpx3h['window']['wx']['offKeyboardInput'](), rpx3h['window']['wx']['hideKeyboard']({ 'success': function (j4myw) {
        console['log']('隐藏键盘');
      }, 'fail': function (a0uln) {
        console['log']('隐藏键盘出错:' + (a0uln ? a0uln['errMsg'] : ''));
      } });
  }, l1fqn);function l1fqn() {}var d4umy = function () {
    function w9e7_s() {}jmewy4(w9e7_s, 'laya.wx.mini.MiniLoader');var dum4aj = w9e7_s['prototype'];return dum4aj['load'] = function (btv2, kb52, o$2t5, s9ew7, myjwd) {
      void 0x0 === o$2t5 && (o$2t5 = !0x0), void 0x0 === myjwd && (myjwd = !0x1);var i3zp6 = this;0x0 === (i3zp6['_url'] = btv2)['indexOf']('data:image') ? i3zp6['_type'] = kb52 = 'image' : i3zp6['_type'] = kb52 = kb52 || i3zp6['getTypeFromUrl'](btv2), i3zp6['_cache'] = o$2t5, i3zp6['_data'] = null;var qgn018 = 'ascii';-0x1 != btv2['indexOf']('.fnt') ? qgn018 = 'utf8' : 'arraybuffer' == kb52 && (qgn018 = '');var g1q08 = o08qg1['getFileExtension'](btv2);if (-0x1 != w9e7_s['_fileTypeArr']['indexOf'](g1q08)) rpx3h['EnvConfig']['load']['call'](this, btv2, kb52, o$2t5, s9ew7, myjwd);else {
        if (n80l1['getFileInfo'](btv2)) rpx3h['EnvConfig']['load']['call'](this, btv2, kb52, o$2t5, s9ew7, myjwd);else {
          if (-0x1 != btv2['indexOf']('layaNativeDir/')) {
            if (rpx3h['isZiYu']) {
              var yjwe4 = n80l1['ziyuFileData'][btv2];return void i3zp6['onLoaded'](yjwe4);
            }return cosnole['log']('read read'), void n80l1['read'](btv2, qgn018, new ktv25b(w9e7_s, w9e7_s['onReadNativeCallBack'], [qgn018, btv2, kb52, o$2t5, s9ew7, myjwd, i3zp6]));
          }yjwe4 = '' == ldnfua['rootPath'] ? btv2 : btv2['split'](ldnfua['rootPath'])[0x0], -0x1 != btv2['indexOf']('http://') || -0x1 != btv2['indexOf']('https://') ? rpx3h['EnvConfig']['load']['call'](i3zp6, btv2, kb52, o$2t5, s9ew7, myjwd) : n80l1['readFile'](yjwe4, qgn018, new ktv25b(w9e7_s, w9e7_s['onReadNativeCallBack'], [qgn018, btv2, kb52, o$2t5, s9ew7, myjwd, i3zp6]), btv2);
        }
      }
    }, dum4aj['resMgrLoad'] = function (zb63ip, vztkb, b5vk2, hz36i, p6zb3i, c$t52, tbv2k5) {
      void 0x0 === b5vk2 && (b5vk2 = 0x0), void 0x0 === hz36i && (hz36i = !0x1), void 0x0 === p6zb3i && (p6zb3i = !0x1), void 0x0 === c$t52 && (c$t52 = 0x0), void 0x0 === tbv2k5 && (tbv2k5 = 0x3), -0x1 != zb63ip['indexOf']('mpack') && console['log']('=============resMgrLoad url:', zb63ip), rpx3h['EnvConfig']['resMgrLoad'](zb63ip, (fndua, t25v$c, ct$v) => {
        w9e7_s['prototype']['resMgrLoadCallBack'](fndua, t25v$c, ct$v, vztkb);
      }, b5vk2, hz36i, p6zb3i, c$t52, tbv2k5);
    }, dum4aj['resMgrLoadCallBack'] = function (k6bvz, jyu4, k3zib6, qnf1l0) {
      console['log']('buff:::', k6bvz, k3zib6, n80l1['fileNativeDir'] + '///' + n80l1['fileListName']), qnf1l0(k6bvz, jyu4, k3zib6);
    }, dum4aj['clearRes'] = function (nqal0f, v5tc$2) {
      this['clearRes'](nqal0f, v5tc$2 = void 0x0 === v5tc$2 ? !0x1 : v5tc$2), v5tc$2 = n80l1['getFileInfo'](nqal0f), !v5tc$2 || -0x1 == nqal0f['indexOf']('http://') && -0x1 == nqal0f['indexOf']('https://') || (v5tc$2 = v5tc$2['md5'], v5tc$2 = n80l1['getFileNativePath'](v5tc$2), n80l1['remove'](v5tc$2));
    }, w9e7_s['onReadNativeCallBack'] = function (c$vt52, n80g, juafd, oc$8g1, p63zh, j4ewym, t5zv, bk6z, ln0ua) {
      void 0x0 === oc$8g1 && (oc$8g1 = !0x0), void 0x0 === j4ewym && (j4ewym = !0x1), (bk6z = void 0x0 === bk6z ? 0x0 : bk6z) ? 0x1 == bk6z && rpx3h['EnvConfig']['load']['call'](t5zv, n80g, juafd, oc$8g1, p63zh, j4ewym) : (ln0ua = 'json' == juafd || 'atlas' == juafd ? rpx3h['getJson'](ln0ua['data']) : 'xml' == juafd ? o08qg1['parseXMLFromString'](ln0ua['data']) : ln0ua['data'], t5zv['onLoaded'](ln0ua), !rpx3h['isZiYu'] && rpx3h['isPosMsgYu'] && 'arraybuffer' != juafd && wx['postMessage']({ 'url': n80g, 'data': ln0ua, 'isLoad': !0x0 }));
    }, $g28co(w9e7_s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w9e7_s;
  }(),
      n80l1 = (jmewy4(w4sye_, 'laya.wx.mini.MiniFileMgr', ews_7), w4sye_['isLoadFile'] = function (o8$gc) {
    return -0x1 != w4sye_['_fileTypeArr']['indexOf'](o8$gc);
  }, w4sye_['getFileInfo'] = function (ye4wmj) {
    return ye4wmj = ye4wmj['split']('?')[0x0], ye4wmj = w4sye_['filesListObj'][ye4wmj], null == ye4wmj ? null : ye4wmj;
  }, w4sye_['onFileUpdate'] = function (fad, q0fna) {
    var t5zkb = fad['split']('/');fad = t5zkb[t5zkb['length'] - 0x1], t5zkb = w4sye_['getFileInfo'](q0fna), null == t5zkb ? w4sye_['onSaveFile'](q0fna, fad) : t5zkb['readyUrl'] != q0fna && w4sye_['remove'](fad, q0fna);
  }, w4sye_['exits'] = function (ogq80, k2v5) {
    ogq80 = w4sye_['getFileNativePath'](ogq80), w4sye_['fs']['getFileInfo']({ 'filePath': ogq80, 'success': function (aufn0l) {
        null != k2v5 && k2v5['runWith']([0x0, aufn0l]);
      }, 'fail': function (t2kv5) {
        null != k2v5 && k2v5['runWith']([0x1, t2kv5]);
      } });
  }, w4sye_['read'] = function (nq0l18, o$2cgt, v5tkc2, bv2kt5) {
    void 0x0 === o$2cgt && (o$2cgt = 'ascill'), nq0l18 = '' != (bv2kt5 = void 0x0 === bv2kt5 ? '' : bv2kt5) ? w4sye_['getFileNativePath'](nq0l18) : nq0l18, w4sye_['fs']['readFile']({ 'filePath': nq0l18, 'encoding': o$2cgt, 'success': function (qnl01f) {
        null != v5tkc2 && v5tkc2['runWith']([0x0, qnl01f]);
      }, 'fail': function (bkztv) {
        bkztv && '' != bv2kt5 ? w4sye_['down'](bv2kt5, o$2cgt, v5tkc2, bv2kt5) : null != v5tkc2 && v5tkc2['runWith']([0x1]);
      } });
  }, w4sye_['readNativeFile'] = function (e4wmjy, afulj) {
    w4sye_['fs']['readFile']({ 'filePath': e4wmjy, 'encoding': '', 'success': function ($q8g1o) {
        null != afulj && afulj['runWith']([0x0]);
      }, 'fail': function (qo18) {
        null != afulj && afulj['runWith']([0x1]);
      } });
  }, w4sye_['down'] = function (vb2k, zi3p6b, g8q0n1, pxrih) {
    void 0x0 === zi3p6b && (zi3p6b = 'ascill'), void 0x0 === pxrih && (pxrih = '');var zvt = w4sye_['getFileNativePath'](pxrih);w4sye_['wxdown']({ 'url': vb2k, 'filePath': zvt, 'success': function (f0uln) {
        0xc8 === f0uln['statusCode'] && w4sye_['readFile'](f0uln['filePath'], zi3p6b, g8q0n1, pxrih);
      }, 'fail': function (g$t2o) {
        null != g8q0n1 && g8q0n1['runWith']([0x1, g$t2o]);
      } })['onProgressUpdate'](function (ywmje) {
      null != g8q0n1 && g8q0n1['runWith']([0x2, ywmje['progress']]);
    });
  }, w4sye_['readFile'] = function (f01ln, s7e_9, ws4y_e, udamf) {
    void 0x0 === udamf && (udamf = ''), w4sye_['fs']['readFile']({ 'filePath': f01ln, 'encoding': s7e_9 = void 0x0 === s7e_9 ? 'ascill' : s7e_9, 'success': function (g2$ct) {
        -0x1 == f01ln['indexOf']('http://') && -0x1 == f01ln['indexOf']('https://') || w4sye_['onFileUpdate'](f01ln, udamf), null != ws4y_e && ws4y_e['runWith']([0x0, g2$ct]);
      }, 'fail': function (hp3z) {
        hp3z && null != ws4y_e && ws4y_e['runWith']([0x1, hp3z]);
      } });
  }, w4sye_['downImg'] = function (bi3z, c28o$g, ogt2) {
    void 0x0 === ogt2 && (ogt2 = ''), w4sye_['wxdown']({ 'url': bi3z, 'success': function (s_w4y) {
        0xc8 === s_w4y['statusCode'] && w4sye_['copyFile'](s_w4y['tempFilePath'], ogt2, c28o$g);
      }, 'fail': function (zp3ih) {
        null != c28o$g && c28o$g['runWith']([0x1, zp3ih]);
      } });
  }, w4sye_['copyFile'] = function (y4s_we, hizp, n8g0) {
    var k2tvc = y4s_we['split']('/'),
        wy4jdm = k2tvc[k2tvc['length'] - 0x1];hizp['split']('?')[0x0];var c$o2gt = w4sye_['getFileInfo'](hizp);k2tvc = w4sye_['getFileNativePath'](wy4jdm), w4sye_['fs']['copyFile']({ 'srcPath': y4s_we, 'destPath': k2tvc, 'success': function (ulnf0) {
        c$o2gt ? c$o2gt['readyUrl'] != hizp && w4sye_['remove'](wy4jdm, hizp, n8g0) : (w4sye_['onSaveFile'](hizp, wy4jdm), null != n8g0 && n8g0['runWith']([0x0]));
      }, 'fail': function (h3zp6) {
        null != n8g0 && n8g0['runWith']([0x1, h3zp6]);
      } });
  }, w4sye_['getFileNativePath'] = function (jmywe) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jmywe;
  }, w4sye_['remove'] = function (eyjm4w, s97w, vkz36b) {
    void 0x0 === s97w && (s97w = '');var px36hi = w4sye_['getFileInfo'](s97w),
        vkzb36 = w4sye_['getFileNativePath'](px36hi['md5']);g1oq$8['loader']['clearRes'](px36hi['readyUrl']), w4sye_['fs']['unlink']({ 'filePath': vkzb36, 'success': function (wyj) {
        '' != s97w && w4sye_['onSaveFile'](s97w, eyjm4w), null != vkz36b && vkz36b['runWith']([0x0]);
      }, 'fail': function (ctg$2) {} });
  }, w4sye_['onSaveFile'] = function (oct2g$, ldjaf) {
    var $goc = oct2g$['split']('?')[0x0];w4sye_['filesListObj'][$goc] = { 'md5': ldjaf, 'readyUrl': oct2g$ }, w4sye_['fs']['writeFile']({ 'filePath': w4sye_['fileNativeDir'] + '/' + w4sye_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w4sye_['filesListObj']), 'success': function (g8n01) {
        console['log']('写入测试测试成功：', g8n01);
      }, 'fail': function (go108) {
        console['log']('写入测试测试失败：', go108);
      } });
  }, w4sye_['existDir'] = function (hpr3i, jaulfd) {
    w4sye_['fs']['mkdir']({ 'dirPath': hpr3i, 'success': function (uajm4) {
        null != jaulfd && jaulfd['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (g2o) {
        -0x1 != g2o['errMsg']['indexOf']('file already exists') ? w4sye_['readSync'](w4sye_['fileListName'], 'utf8', jaulfd) : null != jaulfd && jaulfd['runWith']([0x1, g2o]);
      } });
  }, w4sye_['readSync'] = function (g8$c2, c2$ot, kzb5v, v5tzkb) {
    void 0x0 === c2$ot && (c2$ot = 'ascill'), void 0x0 === v5tzkb && (v5tzkb = ''), g8$c2 = w4sye_['getFileNativePath'](g8$c2);var g18n;try {
      g18n = w4sye_['fs']['readFileSync'](g8$c2), null != kzb5v && kzb5v['runWith']([0x0, { 'data': g18n }]);
    } catch (afndl) {
      null != kzb5v && kzb5v['runWith']([0x1]);
    }
  }, w4sye_['readCache'] = function () {}, w4sye_['writeCache'] = function (g1q08n) {
    var j4we = readyUrl['split']('?')[0x0];w4sye_['filesListObj'][j4we] = { 'md5': md5Name, 'readyUrl': readyUrl }, w4sye_['fs']['writeFile']({ 'filePath': w4sye_['fileNativeDir'] + '/' + w4sye_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w4sye_['filesListObj']), 'success': function (gnq08) {}, 'fail': function (fjlu) {} });
  }, w4sye_['setNativeFileDir'] = function (bk6z5v) {
    w4sye_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bk6z5v;
  }, w4sye_['filesListObj'] = {}, w4sye_['fileNativeDir'] = null, w4sye_['fileListName'] = 'layaairfiles.txt', w4sye_['ziyuFileData'] = {}, $g28co(w4sye_, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), w4sye_);function w4sye_() {
    w4sye_['__super']['call'](this);
  }var phri3x = function () {
    function m4wjdy() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, m4wjdy['__super']['call'](this), this['_sound'] = m4wjdy['_createSound']();
    }jmewy4(m4wjdy, 'laya.wx.mini.MiniSound', ews_7);var uyjd4 = m4wjdy['prototype'];return uyjd4['load'] = function (g1c8$) {
      var amfuj = this,
          cto5$;function ujafdl() {
        if (null != m4wjdy['_null']) amfuj['_sound']['onCanplay'](m4wjdy['_null']), amfuj['_sound']['onError'](m4wjdy['_null']);else try {
          amfuj['_sound']['onCanplay'](null), amfuj['_sound']['onError'](null), m4wjdy['_null'] = null;
        } catch (pxh63i) {
          console['warn']('[wxmini] _clearSound:' + pxh63i), amfuj['_sound']['onCanplay'](ujm4dy), amfuj['_sound']['onError'](ujm4dy), m4wjdy['_null'] = ujm4dy;
        }
      }function ujm4dy() {}g1c8$ = ldnfua['formatURL'](g1c8$), this['url'] = g1c8$, m4wjdy['_audioCache'][g1c8$] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        ujafdl(), cto5$['loaded'] = !0x0, cto5$['event']('complete'), m4wjdy['_audioCache'][cto5$['url']] = cto5$;
      }), this['_sound']['onError'](function (s4_y) {
        console['error']('errCode=' + s4_y['errCode'] + '  errMsg=' + s4_y['errMsg']), ujafdl(), cto5$['event']('error');
      }), this['_sound']['src'] = g1c8$, cto5$ = this);
    }, uyjd4['play'] = function (u0na, j4wme) {
      void 0x0 === u0na && (u0na = 0x0), void 0x0 === j4wme && (j4wme = 0x0), (yesw4_ = this['url'] == bz6p3['_tMusic'] ? (m4wjdy['_musicAudio'] || (m4wjdy['_musicAudio'] = m4wjdy['_createSound']()), m4wjdy['_musicAudio']) : m4wjdy['_createSound']())['src'] = this['url'];var yesw4_ = new y_9s(yesw4_);return yesw4_['url'] = this['url'], yesw4_['loops'] = j4wme, yesw4_['startTime'] = u0na, yesw4_['play'](), bz6p3['addChannel'](yesw4_), yesw4_;
    }, uyjd4['dispose'] = function () {
      var o1q8$ = m4wjdy['_audioCache'][this['url']];o1q8$ && (o1q8$['src'] = '', delete m4wjdy['_audioCache'][this['url']]);
    }, b3z6(0x0, uyjd4, 'duration', function () {
      return this['_sound']['duration'];
    }), m4wjdy['_createSound'] = function () {
      return m4wjdy['_id']++, rpx3h['window']['wx']['createInnerAudioContext']();
    }, m4wjdy['_musicAudio'] = null, m4wjdy['_id'] = 0x0, m4wjdy['_audioCache'] = {}, m4wjdy['_null'] = void 0x0, m4wjdy;
  }(),
      y_9s = function () {
    function c$2ot(n1lf0) {
      this['_audio'] = null, this['_onEnd'] = null, c$2ot['__super']['call'](this), this['_audio'] = n1lf0, this['_onEnd'] = o08qg1['bind'](this['__onEnd'], this), n1lf0['onEnded'](this['_onEnd']);
    }jmewy4(c$2ot, 'laya.wx.mini.MiniSoundChannel', co28g);var q8gn1 = c$2ot['prototype'];return q8gn1['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (g1oq$8['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, q8gn1['__onNull'] = function () {}, q8gn1['play'] = function () {
      this['isStopped'] = !0x1, bz6p3['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, q8gn1['stop'] = function () {
      if (this['isStopped'] = !0x0, bz6p3['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != c$2ot['_null']) this['_audio']['onEnded'](c$2ot['_null']);else try {
          this['_audio']['onEnded'](null), c$2ot['_null'] = null;
        } catch (tg$2co) {
          console['warn']('[wxmini] stop:' + tg$2co), this['_audio']['onEnded'](o08qg1['bind'](this['__onNull'], this)), c$2ot['_null'] = o08qg1['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, q8gn1['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, q8gn1['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, bz6p3['addChannel'](this), this['_audio']['play']());
    }, b3z6(0x0, q8gn1, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), b3z6(0x0, q8gn1, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), b3z6(0x0, q8gn1, 'volume', function () {
      return 0x1;
    }, function (fna0lq) {}), c$2ot['_null'] = void 0x0, c$2ot;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function ($g2toc, uafdn) {
  'use strict';

  for (var ip6xh in Object['defineProperty'](uafdn, '__esModule', { 'value': !0x0 }), Laya) {
    var lajdu = Laya[ip6xh];lajdu && lajdu['__isclass'] && (uafdn[ip6xh] = lajdu);
  }
});