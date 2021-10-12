var m = wx.$g;
!function (a34ev, juq3t) {
  juq3t['un'], juq3t['uns'];var f_$i = juq3t['static'],
      zfgs8k = juq3t['class'],
      pkz5lg = juq3t['getset'];juq3t['__newvec'];var gzp5lk = laya['utils']['Browser'],
      i_r$1 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      avd3e = laya['resource']['HTMLImage'],
      ifr$ = laya['utils']['Handler'],
      awdv4e = laya['display']['Input'],
      v3mje = laya['net']['Loader'];laya['maths']['Matrix'];var $_rsf8 = laya['renders']['Render'],
      dae3 = laya['utils']['RunDriver'];laya['media']['Sound'];var zgpfk = laya['media']['SoundChannel'],
      l295c0 = laya['media']['SoundManager'],
      hbywi1 = (laya['display']['Stage'], laya['net']['URL']),
      _isfr$ = laya['utils']['Utils'],
      ib1w = (zfgs8k(o2069c, 'laya.wx.mini.MiniAdpter'), o2069c['getJson'] = function (dhwy) {
    return JSON['parse'](dhwy);
  }, o2069c['init'] = function ($sfgz8, dy4wbh) {
    void 0x0 === $sfgz8 && ($sfgz8 = !0x1), void 0x0 === dy4wbh && (dy4wbh = !0x1), o2069c['_inited'] || (o2069c['window'] = a34ev)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (o2069c['_inited'] = !0x0, o2069c['isZiYu'] = dy4wbh, o2069c['isPosMsgYu'] = $sfgz8, o2069c['EnvConfig'] = {}, o2069c['isZiYu'] || (fz8gk['setNativeFileDir']('/layaairGame'), fz8gk['existDir'](fz8gk['fileNativeDir'], ifr$['create'](o2069c, o2069c['onMkdirCallBack']))), o2069c['window']['focus'] = function () {}, juq3t['getUrlPath'] = function () {}, o2069c['window']['logtime'] = function (yawdh) {}, o2069c['window']['alertTimeLog'] = function (fr8_) {}, o2069c['window']['resetShareInfo'] = function () {}, o2069c['window']['CanvasRenderingContext2D'] = function () {}, o2069c['window']['CanvasRenderingContext2D']['prototype'] = o2069c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o2069c['window']['document']['body']['appendChild'] = function () {}, o2069c['EnvConfig']['pixelRatioInt'] = 0x0, dae3['getPixelRatio'] = o2069c['pixelRatio'], o2069c['_preCreateElement'] = gzp5lk['createElement'], gzp5lk['createElement'] = o2069c['createElement'], dae3['createShaderCondition'] = o2069c['createShaderCondition'], _isfr$['parseXMLFromString'] = o2069c['parseXMLFromString'], awdv4e['_createInputElement'] = $sif_r['_createInputElement'], o2069c['EnvConfig']['load'] = v3mje['prototype']['load'], v3mje['prototype']['load'] = g8fkzs['prototype']['load'], o2069c['isZiYu'] && $sfgz8 && wx['onMessage'](function (cpk9l) {
      cpk9l['isLoad'] && (fz8gk['ziyuFileData'][cpk9l['url']] = cpk9l['data']);
    }));
  }, o2069c['onMkdirCallBack'] = function (gp8f, i_r1hb) {
    gp8f || (fz8gk['filesListObj'] = JSON['parse'](i_r1hb['data']));
  }, o2069c['pixelRatio'] = function () {
    if (!o2069c['EnvConfig']['pixelRatioInt']) try {
      var zg5l = wx['getSystemInfoSync']();return o2069c['EnvConfig']['pixelRatioInt'] = zg5l['pixelRatio'], zg5l['pixelRatio'];
    } catch (dve) {}return o2069c['EnvConfig']['pixelRatioInt'];
  }, o2069c['createElement'] = function (fpk8z) {
    var temvj;if ('canvas' == fpk8z) return 0x1 == o2069c['idx'] ? o2069c['isZiYu'] ? (temvj = sharedCanvas)['style'] = {} : temvj = a34ev['canvas'] : temvj = a34ev['wx']['createCanvas'](), o2069c['idx']++, temvj;if ('textarea' == fpk8z || 'input' == fpk8z) return o2069c['onCreateInput'](fpk8z);if ('div' != fpk8z) return o2069c['_preCreateElement'](fpk8z);return fpk8z = o2069c['_preCreateElement'](fpk8z), (fpk8z['contains'] = function (b1ihyw) {
      return null;
    }, fpk8z['removeChild'] = function (o9) {}, fpk8z);
  }, o2069c['onCreateInput'] = function (pcl5) {
    return pcl5 = o2069c['_preCreateElement'](pcl5), (pcl5['focus'] = $sif_r['wxinputFocus'], pcl5['blur'] = $sif_r['wxinputblur'], pcl5['style'] = {}, pcl5['value'] = 0x0, pcl5['parentElement'] = {}, pcl5['placeholder'] = {}, pcl5['type'] = {}, pcl5['setColor'] = function (sr$i1) {}, pcl5['setType'] = function (e3tm) {}, pcl5['setFontFace'] = function (vm3jt) {}, pcl5['addEventListener'] = function (jtum3) {}, pcl5['contains'] = function (i_1b$) {
      return null;
    }, pcl5['removeChild'] = function (a3vmd) {}, pcl5);
  }, o2069c['createShaderCondition'] = function (_ib1r) {
    var qv3j = this;return function () {
      return qv3j[_ib1r['replace']('this.', '')];
    };
  }, o2069c['EnvConfig'] = null, o2069c['window'] = null, o2069c['_preCreateElement'] = null, o2069c['_inited'] = !0x1, o2069c['wxRequest'] = null, o2069c['systemInfo'] = null, o2069c['version'] = '0.0.1', o2069c['isZiYu'] = !0x1, o2069c['isPosMsgYu'] = !0x1, o2069c['parseXMLFromString'] = function ($f_rsi) {
    var dyw4hb;$f_rsi = $f_rsi['replace'](/>\s+</g, '><');try {
      dyw4hb = new a34ev['Parser']['DOMParser']()['parseFromString']($f_rsi, 'text/xml');
    } catch (bywh1i) {
      throw '需要引入xml解析库文件';
    }return dyw4hb;
  }, o2069c['idx'] = 0x1, o2069c);function o2069c() {}zfgs8k(v3team, 'laya.wx.mini.MiniImage'), v3team['prototype']['_loadImage'] = function (oc096) {
    var v3tjme = !0x1;-0x1 == oc096['indexOf']('layaNativeDir/') && (v3tjme = !0x0, oc096 = hbywi1['formatURL'](oc096)), fz8gk['getFileInfo'](oc096) ? v3team['onCreateImage'](oc096, this, !v3tjme) : -0x1 != oc096['indexOf']('http://') || -0x1 != oc096['indexOf']('https://') ? fz8gk['downImg'](oc096, new ifr$(v3team, v3team['onDownImgCallBack'], [oc096, this]), oc096) : v3team['onCreateImage'](oc096, this, !0x0);
  }, v3team['onDownImgCallBack'] = function (l5p9kc, yw4dah, zkgfp) {
    zkgfp ? yw4dah['onError'](null) : v3team['onCreateImage'](l5p9kc, yw4dah);
  }, v3team['onCreateImage'] = function (ae4vdw, h_1irb, _r1s$) {
    var l95c2, f8kszg;function qmu3jt() {
      f8kszg['onload'] = null, f8kszg['onerror'] = null, delete h_1irb['imgCache'][ae4vdw];
    }l95c2 = (_r1s$ = void 0x0 === _r1s$ ? !0x1 : _r1s$) ? ae4vdw : ($8rs_f = fz8gk['getFileInfo'](ae4vdw)['md5'], fz8gk['getFileNativePath']($8rs_f)), null == h_1irb['imgCache'] && (h_1irb['imgCache'] = {}), _r1s$ = function () {
      qmu3jt(), h_1irb['onLoaded'](f8kszg);
    };var $8rs_f = function () {
      qmu3jt(), h_1irb['event']('error', 'Load image failed');
    };'nativeimage' == h_1irb['_type'] ? ((f8kszg = new gzp5lk['window']['Image']())['crossOrigin'] = '', f8kszg['onload'] = _r1s$, f8kszg['onerror'] = $8rs_f, f8kszg['src'] = l95c2, h_1irb['imgCache'][ae4vdw] = f8kszg) : new avd3e['create'](l95c2, { 'onload': _r1s$, 'onerror': $8rs_f, 'onCreate': function (mv3j) {
        f8kszg = mv3j, h_1irb['imgCache'][ae4vdw] = mv3j;
      } });
  };function v3team() {}var $sif_r = (zfgs8k(klzg8p, 'laya.wx.mini.MiniInput'), klzg8p['_createInputElement'] = function () {
    awdv4e['_initInput'](awdv4e['area'] = gzp5lk['createElement']('textarea')), awdv4e['_initInput'](awdv4e['input'] = gzp5lk['createElement']('input')), awdv4e['inputContainer'] = gzp5lk['createElement']('div'), awdv4e['inputContainer']['style']['position'] = 'absolute', awdv4e['inputContainer']['style']['zIndex'] = 0x186a0, gzp5lk['container']['appendChild'](awdv4e['inputContainer']), awdv4e['inputContainer']['setPos'] = function (o96207, ev3d4) {
      awdv4e['inputContainer']['style']['left'] = o96207 + 'px', awdv4e['inputContainer']['style']['top'] = ev3d4 + 'px';
    }, juq3t['stage']['on']('resize', null, klzg8p['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zlp8kg) {
      a34ev['dispatchEvent'] && a34ev['dispatchEvent']('resize');
    }), l295c0['_soundClass'] = lgk8p, l295c0['_musicClass'] = lgk8p;
  }, klzg8p['_onStageResize'] = function () {
    juq3t['stage']['_canvasTransform']['identity']()['scale'](gzp5lk['width'] / $_rsf8['canvas']['width'] / dae3['getPixelRatio'](), gzp5lk['height'] / $_rsf8['canvas']['height'] / dae3['getPixelRatio']());
  }, klzg8p['wxinputFocus'] = function (wdy4ae) {
    var hbir1_ = awdv4e['inputElement']['target'];hbir1_ && !hbir1_['editable'] || (ib1w['window']['wx']['offKeyboardConfirm'](), ib1w['window']['wx']['offKeyboardInput'](), ib1w['window']['wx']['showKeyboard']({ 'defaultValue': hbir1_['text'], 'maxLength': hbir1_['maxChars'], 'multiple': hbir1_['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (gkl8pz) {}, 'fail': function ($g8zfs) {} }), ib1w['window']['wx']['onKeyboardConfirm'](function (kgz8fs) {
      kgz8fs = kgz8fs ? kgz8fs['value'] : '', (hbir1_['text'] = kgz8fs, hbir1_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), ib1w['window']['wx']['onKeyboardInput'](function (v3qm) {
      v3qm = v3qm ? v3qm['value'] : '', hbir1_['multiline'] || -0x1 == v3qm['indexOf']('\x0a') ? (hbir1_['text'] = v3qm, hbir1_['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, klzg8p['inputEnter'] = function () {
    awdv4e['inputElement']['target']['focus'] = !0x1;
  }, klzg8p['wxinputblur'] = function () {
    klzg8p['hideKeyboard']();
  }, klzg8p['hideKeyboard'] = function () {
    ib1w['window']['wx']['offKeyboardConfirm'](), ib1w['window']['wx']['offKeyboardInput'](), ib1w['window']['wx']['hideKeyboard']({ 'success': function (b1_$i) {
        console['log']('隐藏键盘');
      }, 'fail': function (pc950l) {
        console['log']('隐藏键盘出错:' + (pc950l ? pc950l['errMsg'] : ''));
      } });
  }, klzg8p);function klzg8p() {}var g8fkzs = function () {
    function ifr_$s() {}zfgs8k(ifr_$s, 'laya.wx.mini.MiniLoader');var f$s_i = ifr_$s['prototype'];return f$s_i['load'] = function (pg8k, $rsf8_, plkg8, eydaw4, $_br1) {
      void 0x0 === plkg8 && (plkg8 = !0x0), void 0x0 === $_br1 && ($_br1 = !0x1);var r$fs_ = this;0x0 === (r$fs_['_url'] = pg8k)['indexOf']('data:image') ? r$fs_['_type'] = $rsf8_ = 'image' : r$fs_['_type'] = $rsf8_ = $rsf8_ || r$fs_['getTypeFromUrl'](pg8k), r$fs_['_cache'] = plkg8, r$fs_['_data'] = null;var avmed = 'ascii';-0x1 != pg8k['indexOf']('.fnt') ? avmed = 'utf8' : 'arraybuffer' == $rsf8_ && (avmed = '');var ae3tmv = _isfr$['getFileExtension'](pg8k);if (-0x1 != ifr_$s['_fileTypeArr']['indexOf'](ae3tmv)) ib1w['EnvConfig']['load']['call'](this, pg8k, $rsf8_, plkg8, eydaw4, $_br1);else {
        if (fz8gk['getFileInfo'](pg8k)) ib1w['EnvConfig']['load']['call'](this, pg8k, $rsf8_, plkg8, eydaw4, $_br1);else {
          if (-0x1 != pg8k['indexOf']('layaNativeDir/')) {
            if (ib1w['isZiYu']) {
              var xtjum = fz8gk['ziyuFileData'][pg8k];return void r$fs_['onLoaded'](xtjum);
            }return cosnole['log']('read read'), void fz8gk['read'](pg8k, avmed, new ifr$(ifr_$s, ifr_$s['onReadNativeCallBack'], [avmed, pg8k, $rsf8_, plkg8, eydaw4, $_br1, r$fs_]));
          }xtjum = '' == hbywi1['rootPath'] ? pg8k : pg8k['split'](hbywi1['rootPath'])[0x0], -0x1 != pg8k['indexOf']('http://') || -0x1 != pg8k['indexOf']('https://') ? ib1w['EnvConfig']['load']['call'](r$fs_, pg8k, $rsf8_, plkg8, eydaw4, $_br1) : fz8gk['readFile'](xtjum, avmed, new ifr$(ifr_$s, ifr_$s['onReadNativeCallBack'], [avmed, pg8k, $rsf8_, plkg8, eydaw4, $_br1, r$fs_]), pg8k);
        }
      }
    }, f$s_i['resMgrLoad'] = function (txjqu, zf8gkp, pglzk5, g$szf8, q3mtj, d4wyah, z8gkpl) {
      void 0x0 === pglzk5 && (pglzk5 = 0x0), void 0x0 === g$szf8 && (g$szf8 = !0x1), void 0x0 === q3mtj && (q3mtj = !0x1), void 0x0 === d4wyah && (d4wyah = 0x0), void 0x0 === z8gkpl && (z8gkpl = 0x3), -0x1 != txjqu['indexOf']('mpack') && console['log']('=============resMgrLoad url:', txjqu), ib1w['EnvConfig']['resMgrLoad'](txjqu, (_sf8$r, g8lzpk, $b1r_i) => {
        ifr_$s['prototype']['resMgrLoadCallBack'](_sf8$r, g8lzpk, $b1r_i, zf8gkp);
      }, pglzk5, g$szf8, q3mtj, d4wyah, z8gkpl);
    }, f$s_i['resMgrLoadCallBack'] = function (wy4a, wh1y4b, v3mjte, qmjtu) {
      console['log']('buff:::', wy4a, v3mjte, fz8gk['fileNativeDir'] + '///' + fz8gk['fileListName']), qmjtu(wy4a, wh1y4b, v3mjte);
    }, f$s_i['clearRes'] = function (r$s, awd4) {
      this['clearRes'](r$s, awd4 = void 0x0 === awd4 ? !0x1 : awd4), awd4 = fz8gk['getFileInfo'](r$s), !awd4 || -0x1 == r$s['indexOf']('http://') && -0x1 == r$s['indexOf']('https://') || (awd4 = awd4['md5'], awd4 = fz8gk['getFileNativePath'](awd4), fz8gk['remove'](awd4));
    }, ifr_$s['onReadNativeCallBack'] = function (lk5cp9, fr_$s, gpkzf8, f8r_$s, jqmt3u, s_g, _firs, $_8fs, c25l0) {
      void 0x0 === f8r_$s && (f8r_$s = !0x0), void 0x0 === s_g && (s_g = !0x1), ($_8fs = void 0x0 === $_8fs ? 0x0 : $_8fs) ? 0x1 == $_8fs && ib1w['EnvConfig']['load']['call'](_firs, fr_$s, gpkzf8, f8r_$s, jqmt3u, s_g) : (c25l0 = 'json' == gpkzf8 || 'atlas' == gpkzf8 ? ib1w['getJson'](c25l0['data']) : 'xml' == gpkzf8 ? _isfr$['parseXMLFromString'](c25l0['data']) : c25l0['data'], _firs['onLoaded'](c25l0), !ib1w['isZiYu'] && ib1w['isPosMsgYu'] && 'arraybuffer' != gpkzf8 && wx['postMessage']({ 'url': fr_$s, 'data': c25l0, 'isLoad': !0x0 }));
    }, f_$i(ifr_$s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ifr_$s;
  }(),
      fz8gk = (zfgs8k(f8zkpg, 'laya.wx.mini.MiniFileMgr', i_r$1), f8zkpg['isLoadFile'] = function (sr$i) {
    return -0x1 != f8zkpg['_fileTypeArr']['indexOf'](sr$i);
  }, f8zkpg['getFileInfo'] = function (v4ewad) {
    return v4ewad = v4ewad['split']('?')[0x0], v4ewad = f8zkpg['filesListObj'][v4ewad], null == v4ewad ? null : v4ewad;
  }, f8zkpg['onFileUpdate'] = function ($f8gs_, wev4da) {
    var ir$b_1 = $f8gs_['split']('/');$f8gs_ = ir$b_1[ir$b_1['length'] - 0x1], ir$b_1 = f8zkpg['getFileInfo'](wev4da), null == ir$b_1 ? f8zkpg['onSaveFile'](wev4da, $f8gs_) : ir$b_1['readyUrl'] != wev4da && f8zkpg['remove']($f8gs_, wev4da);
  }, f8zkpg['exits'] = function ($zfs8, mavet3) {
    $zfs8 = f8zkpg['getFileNativePath']($zfs8), f8zkpg['fs']['getFileInfo']({ 'filePath': $zfs8, 'success': function (gl8pkz) {
        null != mavet3 && mavet3['runWith']([0x0, gl8pkz]);
      }, 'fail': function (klzpc5) {
        null != mavet3 && mavet3['runWith']([0x1, klzpc5]);
      } });
  }, f8zkpg['read'] = function (evtam, yhrbi, $8gzfs, hri1yb) {
    void 0x0 === yhrbi && (yhrbi = 'ascill'), evtam = '' != (hri1yb = void 0x0 === hri1yb ? '' : hri1yb) ? f8zkpg['getFileNativePath'](evtam) : evtam, f8zkpg['fs']['readFile']({ 'filePath': evtam, 'encoding': yhrbi, 'success': function (ev3jm) {
        null != $8gzfs && $8gzfs['runWith']([0x0, ev3jm]);
      }, 'fail': function (_bhir) {
        _bhir && '' != hri1yb ? f8zkpg['down'](hri1yb, yhrbi, $8gzfs, hri1yb) : null != $8gzfs && $8gzfs['runWith']([0x1]);
      } });
  }, f8zkpg['readNativeFile'] = function (bi1_, mtjxuq) {
    f8zkpg['fs']['readFile']({ 'filePath': bi1_, 'encoding': '', 'success': function (f8zs$) {
        null != mtjxuq && mtjxuq['runWith']([0x0]);
      }, 'fail': function (klzgp) {
        null != mtjxuq && mtjxuq['runWith']([0x1]);
      } });
  }, f8zkpg['down'] = function (ev3d, _1$isr, lpk5zg, kzpf) {
    void 0x0 === _1$isr && (_1$isr = 'ascill'), void 0x0 === kzpf && (kzpf = '');var de4vaw = f8zkpg['getFileNativePath'](kzpf);f8zkpg['wxdown']({ 'url': ev3d, 'filePath': de4vaw, 'success': function (hir1b) {
        0xc8 === hir1b['statusCode'] && f8zkpg['readFile'](hir1b['filePath'], _1$isr, lpk5zg, kzpf);
      }, 'fail': function (d4yawe) {
        null != lpk5zg && lpk5zg['runWith']([0x1, d4yawe]);
      } })['onProgressUpdate'](function (avw) {
      null != lpk5zg && lpk5zg['runWith']([0x2, avw['progress']]);
    });
  }, f8zkpg['readFile'] = function (ae4wd, w4adyh, k5lc, bhi) {
    void 0x0 === bhi && (bhi = ''), f8zkpg['fs']['readFile']({ 'filePath': ae4wd, 'encoding': w4adyh = void 0x0 === w4adyh ? 'ascill' : w4adyh, 'success': function (pzlk8g) {
        -0x1 == ae4wd['indexOf']('http://') && -0x1 == ae4wd['indexOf']('https://') || f8zkpg['onFileUpdate'](ae4wd, bhi), null != k5lc && k5lc['runWith']([0x0, pzlk8g]);
      }, 'fail': function (irhby) {
        irhby && null != k5lc && k5lc['runWith']([0x1, irhby]);
      } });
  }, f8zkpg['downImg'] = function (lp9k5, kpl5zg, $r_i1s) {
    void 0x0 === $r_i1s && ($r_i1s = ''), f8zkpg['wxdown']({ 'url': lp9k5, 'success': function (glpk5) {
        0xc8 === glpk5['statusCode'] && f8zkpg['copyFile'](glpk5['tempFilePath'], $r_i1s, kpl5zg);
      }, 'fail': function (ed3va) {
        null != kpl5zg && kpl5zg['runWith']([0x1, ed3va]);
      } });
  }, f8zkpg['copyFile'] = function (bwyh1, g8lzk, o6209) {
    var ryhb1i = bwyh1['split']('/'),
        ir$fs = ryhb1i[ryhb1i['length'] - 0x1];g8lzk['split']('?')[0x0];var h_b1ri = f8zkpg['getFileInfo'](g8lzk);ryhb1i = f8zkpg['getFileNativePath'](ir$fs), f8zkpg['fs']['copyFile']({ 'srcPath': bwyh1, 'destPath': ryhb1i, 'success': function (ybdw4h) {
        h_b1ri ? h_b1ri['readyUrl'] != g8lzk && f8zkpg['remove'](ir$fs, g8lzk, o6209) : (f8zkpg['onSaveFile'](g8lzk, ir$fs), null != o6209 && o6209['runWith']([0x0]));
      }, 'fail': function (hrbi1_) {
        null != o6209 && o6209['runWith']([0x1, hrbi1_]);
      } });
  }, f8zkpg['getFileNativePath'] = function (tjevm3) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tjevm3;
  }, f8zkpg['remove'] = function (awdyh4, demva, sf$g_) {
    void 0x0 === demva && (demva = '');var l0c5p9 = f8zkpg['getFileInfo'](demva),
        xqjm = f8zkpg['getFileNativePath'](l0c5p9['md5']);juq3t['loader']['clearRes'](l0c5p9['readyUrl']), f8zkpg['fs']['unlink']({ 'filePath': xqjm, 'success': function (a43evd) {
        '' != demva && f8zkpg['onSaveFile'](demva, awdyh4), null != sf$g_ && sf$g_['runWith']([0x0]);
      }, 'fail': function (y4dbwh) {} });
  }, f8zkpg['onSaveFile'] = function (pclk95, jutm3q) {
    var s8f$_g = pclk95['split']('?')[0x0];f8zkpg['filesListObj'][s8f$_g] = { 'md5': jutm3q, 'readyUrl': pclk95 }, f8zkpg['fs']['writeFile']({ 'filePath': f8zkpg['fileNativeDir'] + '/' + f8zkpg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f8zkpg['filesListObj']), 'success': function (sfi_r) {
        console['log']('写入测试测试成功：', sfi_r);
      }, 'fail': function (sf8g$_) {
        console['log']('写入测试测试失败：', sf8g$_);
      } });
  }, f8zkpg['existDir'] = function (s$rf8_, ve3amt) {
    f8zkpg['fs']['mkdir']({ 'dirPath': s$rf8_, 'success': function (xuqmjt) {
        null != ve3amt && ve3amt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (pzgkf) {
        -0x1 != pzgkf['errMsg']['indexOf']('file already exists') ? f8zkpg['readSync'](f8zkpg['fileListName'], 'utf8', ve3amt) : null != ve3amt && ve3amt['runWith']([0x1, pzgkf]);
      } });
  }, f8zkpg['readSync'] = function (f$s_r, ahy4wd, ya4dew, $g8z) {
    void 0x0 === ahy4wd && (ahy4wd = 'ascill'), void 0x0 === $g8z && ($g8z = ''), f$s_r = f8zkpg['getFileNativePath'](f$s_r);var s$f_ir;try {
      s$f_ir = f8zkpg['fs']['readFileSync'](f$s_r), null != ya4dew && ya4dew['runWith']([0x0, { 'data': s$f_ir }]);
    } catch (umjxqt) {
      null != ya4dew && ya4dew['runWith']([0x1]);
    }
  }, f8zkpg['readCache'] = function () {}, f8zkpg['writeCache'] = function (zlgkp) {
    var kzgl = readyUrl['split']('?')[0x0];f8zkpg['filesListObj'][kzgl] = { 'md5': md5Name, 'readyUrl': readyUrl }, f8zkpg['fs']['writeFile']({ 'filePath': f8zkpg['fileNativeDir'] + '/' + f8zkpg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f8zkpg['filesListObj']), 'success': function (g$zs8) {}, 'fail': function (vmae3d) {} });
  }, f8zkpg['setNativeFileDir'] = function (dw4ye) {
    f8zkpg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dw4ye;
  }, f8zkpg['filesListObj'] = {}, f8zkpg['fileNativeDir'] = null, f8zkpg['fileListName'] = 'layaairfiles.txt', f8zkpg['ziyuFileData'] = {}, f_$i(f8zkpg, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), f8zkpg);function f8zkpg() {
    f8zkpg['__super']['call'](this);
  }var lgk8p = function () {
    function klgz8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, klgz8['__super']['call'](this), this['_sound'] = klgz8['_createSound']();
    }zfgs8k(klgz8, 'laya.wx.mini.MiniSound', i_r$1);var rf$8_s = klgz8['prototype'];return rf$8_s['load'] = function (ead4w) {
      var jxqu = this,
          vd3a4e;function f8zgsk() {
        if (null != klgz8['_null']) jxqu['_sound']['onCanplay'](klgz8['_null']), jxqu['_sound']['onError'](klgz8['_null']);else try {
          jxqu['_sound']['onCanplay'](null), jxqu['_sound']['onError'](null), klgz8['_null'] = null;
        } catch ($f8_r) {
          console['warn']('[wxmini] _clearSound:' + $f8_r), jxqu['_sound']['onCanplay'](xujq), jxqu['_sound']['onError'](xujq), klgz8['_null'] = xujq;
        }
      }function xujq() {}ead4w = hbywi1['formatURL'](ead4w), this['url'] = ead4w, klgz8['_audioCache'][ead4w] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        f8zgsk(), vd3a4e['loaded'] = !0x0, vd3a4e['event']('complete'), klgz8['_audioCache'][vd3a4e['url']] = vd3a4e;
      }), this['_sound']['onError'](function (demva3) {
        console['error']('errCode=' + demva3['errCode'] + '  errMsg=' + demva3['errMsg']), f8zgsk(), vd3a4e['event']('error');
      }), this['_sound']['src'] = ead4w, vd3a4e = this);
    }, rf$8_s['play'] = function (fgpk8, z$fg8s) {
      void 0x0 === fgpk8 && (fgpk8 = 0x0), void 0x0 === z$fg8s && (z$fg8s = 0x0), (b_h = this['url'] == l295c0['_tMusic'] ? (klgz8['_musicAudio'] || (klgz8['_musicAudio'] = klgz8['_createSound']()), klgz8['_musicAudio']) : klgz8['_createSound']())['src'] = this['url'];var b_h = new b1hywi(b_h);return b_h['url'] = this['url'], b_h['loops'] = z$fg8s, b_h['startTime'] = fgpk8, b_h['play'](), l295c0['addChannel'](b_h), b_h;
    }, rf$8_s['dispose'] = function () {
      var r_1s = klgz8['_audioCache'][this['url']];r_1s && (r_1s['src'] = '', delete klgz8['_audioCache'][this['url']]);
    }, pkz5lg(0x0, rf$8_s, 'duration', function () {
      return this['_sound']['duration'];
    }), klgz8['_createSound'] = function () {
      return klgz8['_id']++, ib1w['window']['wx']['createInnerAudioContext']();
    }, klgz8['_musicAudio'] = null, klgz8['_id'] = 0x0, klgz8['_audioCache'] = {}, klgz8['_null'] = void 0x0, klgz8;
  }(),
      b1hywi = function () {
    function o09c6(jqxmt) {
      this['_audio'] = null, this['_onEnd'] = null, o09c6['__super']['call'](this), this['_audio'] = jqxmt, this['_onEnd'] = _isfr$['bind'](this['__onEnd'], this), jqxmt['onEnded'](this['_onEnd']);
    }zfgs8k(o09c6, 'laya.wx.mini.MiniSoundChannel', zgpfk);var l5c02 = o09c6['prototype'];return l5c02['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (juq3t['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, l5c02['__onNull'] = function () {}, l5c02['play'] = function () {
      this['isStopped'] = !0x1, l295c0['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, l5c02['stop'] = function () {
      if (this['isStopped'] = !0x0, l295c0['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != o09c6['_null']) this['_audio']['onEnded'](o09c6['_null']);else try {
          this['_audio']['onEnded'](null), o09c6['_null'] = null;
        } catch (ewv) {
          console['warn']('[wxmini] stop:' + ewv), this['_audio']['onEnded'](_isfr$['bind'](this['__onNull'], this)), o09c6['_null'] = _isfr$['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, l5c02['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, l5c02['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, l295c0['addChannel'](this), this['_audio']['play']());
    }, pkz5lg(0x0, l5c02, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), pkz5lg(0x0, l5c02, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), pkz5lg(0x0, l5c02, 'volume', function () {
      return 0x1;
    }, function (bwh) {}), o09c6['_null'] = void 0x0, o09c6;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (bi1hyr, why4b1) {
  'use strict';

  for (var zsfg$8 in Object['defineProperty'](why4b1, '__esModule', { 'value': !0x0 }), Laya) {
    var s1ri = Laya[zsfg$8];s1ri && s1ri['__isclass'] && (why4b1[zsfg$8] = s1ri);
  }
});