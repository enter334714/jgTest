var b = wx.$e;
(function (window, document, uq9sk) {
  var _amo = uq9sk['un'],
      lhgx$t = uq9sk['uns'],
      jniq3u = uq9sk['static'],
      x$3jig = uq9sk['class'],
      z4yfv_ = uq9sk['getset'],
      zv4rfy = uq9sk['__newvec'],
      gt$xh = laya['utils']['Browser'],
      f74_y = laya['events']['Event'],
      rvf4 = laya['events']['EventDispatcher'],
      fzlrhy = laya['resource']['HTMLImage'],
      j3un = laya['utils']['Handler'],
      jnq3$i = laya['display']['Input'],
      acepmo = laya['net']['Loader'],
      aco7 = laya['maths']['Matrix'],
      s9un = laya['renders']['Render'],
      u3inqj = laya['utils']['RunDriver'],
      q3nij = laya['media']['Sound'],
      f_y4 = laya['media']['SoundChannel'],
      l$tigx = laya['media']['SoundManager'],
      mecpo = laya['display']['Stage'],
      xt$gji = laya['net']['URL'],
      glhxr = laya['utils']['Utils'],
      aoc7p = function () {
    function h$lxgt() {}return x$3jig(h$lxgt, 'laya.wx.mini.MiniAdpter'), h$lxgt['getJson'] = function (lrtyh) {
      return JSON['parse'](lrtyh);
    }, h$lxgt['init'] = function (uiq, bw85d0) {
      uiq === void 0x0 && (uiq = ![]), bw85d0 === void 0x0 && (bw85d0 = ![]);if (h$lxgt['_inited']) return;h$lxgt['window'] = window;if (h$lxgt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;h$lxgt['_inited'] = !![], h$lxgt['isZiYu'] = bw85d0, h$lxgt['isPosMsgYu'] = uiq, h$lxgt['EnvConfig'] = {}, !h$lxgt['isZiYu'] && (vm_a['setNativeFileDir']('/layaairGame'), vm_a['existDir'](vm_a['fileNativeDir'], j3un['create'](h$lxgt, h$lxgt['onMkdirCallBack']))), h$lxgt['window']['focus'] = function () {}, uq9sk['getUrlPath'] = function () {}, h$lxgt['window']['logtime'] = function (d50w) {}, h$lxgt['window']['alertTimeLog'] = function (lthxr) {}, h$lxgt['window']['resetShareInfo'] = function () {}, h$lxgt['window']['CanvasRenderingContext2D'] = function () {}, h$lxgt['window']['CanvasRenderingContext2D']['prototype'] = h$lxgt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h$lxgt['window']['document']['body']['appendChild'] = function () {}, h$lxgt['EnvConfig']['pixelRatioInt'] = 0x0, u3inqj['getPixelRatio'] = h$lxgt['pixelRatio'], h$lxgt['_preCreateElement'] = gt$xh['createElement'], gt$xh['createElement'] = h$lxgt['createElement'], u3inqj['createShaderCondition'] = h$lxgt['createShaderCondition'], glhxr['parseXMLFromString'] = h$lxgt['parseXMLFromString'], jnq3$i['_createInputElement'] = d0['_createInputElement'], h$lxgt['EnvConfig']['load'] = acepmo['prototype']['load'], acepmo['prototype']['load'] = $jxq['prototype']['load'], h$lxgt['isZiYu'] && uiq && wx['onMessage'](function (ocpae) {
        ocpae['isLoad'] && (vm_a['ziyuFileData'][ocpae['url']] = ocpae['data']);
      });
    }, h$lxgt['onMkdirCallBack'] = function (yzrflh, q3jnsu) {
      if (!yzrflh) vm_a['filesListObj'] = JSON['parse'](q3jnsu['data']);
    }, h$lxgt['pixelRatio'] = function () {
      if (!h$lxgt['EnvConfig']['pixelRatioInt']) try {
        var g$x3ij = wx['getSystemInfoSync']();return h$lxgt['EnvConfig']['pixelRatioInt'] = g$x3ij['pixelRatio'], g$x3ij = g$x3ij, g$x3ij['pixelRatio'];
      } catch (nu9ks6) {}return h$lxgt['EnvConfig']['pixelRatioInt'];
    }, h$lxgt['createElement'] = function (m7_4) {
      if (m7_4 == 'canvas') {
        var gijx$;return h$lxgt['idx'] == 0x1 ? h$lxgt['isZiYu'] ? (gijx$ = sharedCanvas, gijx$['style'] = {}) : gijx$ = window['canvas'] : gijx$ = window['wx']['createCanvas'](), h$lxgt['idx']++, gijx$;
      } else {
        if (m7_4 == 'textarea' || m7_4 == 'input') return h$lxgt['onCreateInput'](m7_4);else {
          if (m7_4 == 'div') {
            var af_v = h$lxgt['_preCreateElement'](m7_4);return af_v['contains'] = function (trhxgl) {
              return null;
            }, af_v['removeChild'] = function (b0wd85) {}, af_v;
          } else return h$lxgt['_preCreateElement'](m7_4);
        }
      }
    }, h$lxgt['onCreateInput'] = function (nkq9su) {
      var hzvf = h$lxgt['_preCreateElement'](nkq9su);return hzvf['focus'] = d0['wxinputFocus'], hzvf['blur'] = d0['wxinputblur'], hzvf['style'] = {}, hzvf['value'] = 0x0, hzvf['parentElement'] = {}, hzvf['placeholder'] = {}, hzvf['type'] = {}, hzvf['setColor'] = function ($qjn3i) {}, hzvf['setType'] = function (cm_oa7) {}, hzvf['setFontFace'] = function (_4vyzf) {}, hzvf['addEventListener'] = function (hzyvfr) {}, hzvf['contains'] = function (d280w5) {
        return null;
      }, hzvf['removeChild'] = function (_47yvf) {}, hzvf;
    }, h$lxgt['createShaderCondition'] = function (l$gix) {
      var ac7p = this,
          $xglth = function () {
        var zf_y4v = l$gix;return ac7p[l$gix['replace']('this.', '')];
      };return $xglth;
    }, h$lxgt['EnvConfig'] = null, h$lxgt['window'] = null, h$lxgt['_preCreateElement'] = null, h$lxgt['_inited'] = ![], h$lxgt['wxRequest'] = null, h$lxgt['systemInfo'] = null, h$lxgt['version'] = '0.0.1', h$lxgt['isZiYu'] = ![], h$lxgt['isPosMsgYu'] = ![], h$lxgt['parseXMLFromString'] = function (lgtrhz) {
      var _fy4v7, uk9s6;lgtrhz = lgtrhz['replace'](/>\s+</g, '><');try {
        _fy4v7 = new window['Parser']['DOMParser']()['parseFromString'](lgtrhz, 'text/xml');
      } catch (_vfy4) {
        throw '需要引入xml解析库文件';
      }return _fy4v7;
    }, h$lxgt['idx'] = 0x1, h$lxgt;
  }(),
      _m4v7a = function () {
    function us6k9() {}x$3jig(us6k9, 'laya.wx.mini.MiniImage');var f4 = us6k9['prototype'];return f4['_loadImage'] = function (_7cm4a) {
      var ltzrhg = this,
          vyf47_ = ![];_7cm4a['indexOf']('layaNativeDir/') == -0x1 && (vyf47_ = !![], _7cm4a = xt$gji['formatURL'](_7cm4a));if (!vm_a['getFileInfo'](_7cm4a)) {
        if (_7cm4a['indexOf']('http://') != -0x1 || _7cm4a['indexOf']('https://') != -0x1) vm_a['downImg'](_7cm4a, new j3un(us6k9, us6k9['onDownImgCallBack'], [_7cm4a, ltzrhg]), _7cm4a);else us6k9['onCreateImage'](_7cm4a, ltzrhg, !![]);
      } else us6k9['onCreateImage'](_7cm4a, ltzrhg, !vyf47_);
    }, us6k9['onDownImgCallBack'] = function (xig$jt, x$3gji, ac7pmo) {
      if (!ac7pmo) us6k9['onCreateImage'](xig$jt, x$3gji);else x$3gji['onError'](null);
    }, us6k9['onCreateImage'] = function (rlzfhy, bks90, w81d5) {
      w81d5 === void 0x0 && (w81d5 = ![]);var hyzvf;if (!w81d5) {
        var d5860b = vm_a['getFileInfo'](rlzfhy),
            vryzf = d5860b['md5'];hyzvf = vm_a['getFileNativePath'](vryzf);
      } else hyzvf = rlzfhy;if (bks90['imgCache'] == null) bks90['imgCache'] = {};var qs9ukn;function paceo() {
        qs9ukn['onload'] = null, qs9ukn['onerror'] = null, delete bks90['imgCache'][rlzfhy];
      };var s960kb = function () {
        paceo(), bks90['onLoaded'](qs9ukn);
      },
          zvy_4f = function () {
        paceo(), bks90['event']('error', 'Load image failed');
      };bks90['_type'] == 'nativeimage' ? (qs9ukn = new gt$xh['window']['Image'](), qs9ukn['crossOrigin'] = '', qs9ukn['onload'] = s960kb, qs9ukn['onerror'] = zvy_4f, qs9ukn['src'] = hyzvf, bks90['imgCache'][rlzfhy] = qs9ukn) : new fzlrhy['create'](hyzvf, { 'onload': s960kb, 'onerror': zvy_4f, 'onCreate': function (zhrgt) {
          qs9ukn = zhrgt, bks90['imgCache'][rlzfhy] = zhrgt;
        } });
    }, us6k9;
  }(),
      d0 = function () {
    function qin$j() {}return x$3jig(qin$j, 'laya.wx.mini.MiniInput'), qin$j['_createInputElement'] = function () {
      jnq3$i['_initInput'](jnq3$i['area'] = gt$xh['createElement']('textarea')), jnq3$i['_initInput'](jnq3$i['input'] = gt$xh['createElement']('input')), jnq3$i['inputContainer'] = gt$xh['createElement']('div'), jnq3$i['inputContainer']['style']['position'] = 'absolute', jnq3$i['inputContainer']['style']['zIndex'] = 0x186a0, gt$xh['container']['appendChild'](jnq3$i['inputContainer']), jnq3$i['inputContainer']['setPos'] = function (uqnij, ixgl) {
        jnq3$i['inputContainer']['style']['left'] = uqnij + 'px', jnq3$i['inputContainer']['style']['top'] = ixgl + 'px';
      }, uq9sk['stage']['on']('resize', null, qin$j['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jnqui3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), l$tigx['_soundClass'] = bd508, l$tigx['_musicClass'] = bd508;
    }, qin$j['_onStageResize'] = function () {
      var poam7 = uq9sk['stage']['_canvasTransform']['identity']();poam7['scale'](gt$xh['width'] / s9un['canvas']['width'] / u3inqj['getPixelRatio'](), gt$xh['height'] / s9un['canvas']['height'] / u3inqj['getPixelRatio']());
    }, qin$j['wxinputFocus'] = function (qin3) {
      var bdk690 = jnq3$i['inputElement']['target'];if (bdk690 && !bdk690['editable']) return;aoc7p['window']['wx']['offKeyboardConfirm'](), aoc7p['window']['wx']['offKeyboardInput'](), aoc7p['window']['wx']['showKeyboard']({ 'defaultValue': bdk690['text'], 'maxLength': bdk690['maxChars'], 'multiple': bdk690['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (x$ig3j) {}, 'fail': function (lhztr) {} }), aoc7p['window']['wx']['onKeyboardConfirm'](function (hfzrvy) {
        var qi3ju = hfzrvy ? hfzrvy['value'] : '';bdk690['text'] = qi3ju, bdk690['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), aoc7p['window']['wx']['onKeyboardInput'](function (lzthr) {
        var dk60 = lzthr ? lzthr['value'] : '';if (!bdk690['multiline']) {
          if (dk60['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }bdk690['text'] = dk60, bdk690['event']('input');
      });
    }, qin$j['inputEnter'] = function () {
      jnq3$i['inputElement']['target']['focus'] = ![];
    }, qin$j['wxinputblur'] = function () {
      qin$j['hideKeyboard']();
    }, qin$j['hideKeyboard'] = function () {
      aoc7p['window']['wx']['offKeyboardConfirm'](), aoc7p['window']['wx']['offKeyboardInput'](), aoc7p['window']['wx']['hideKeyboard']({ 'success': function (rflh) {
          console['log']('隐藏键盘');
        }, 'fail': function ($3jiqx) {
          console['log']('隐藏键盘出错:' + ($3jiqx ? $3jiqx['errMsg'] : ''));
        } });
    }, qin$j;
  }(),
      $jxq = function () {
    function nuj() {}x$3jig(nuj, 'laya.wx.mini.MiniLoader');var $xj = nuj['prototype'];return $xj['load'] = function (ku6s9b, sq9, jgx$it, rzy4vf, gx$h) {
      jgx$it === void 0x0 && (jgx$it = !![]), gx$h === void 0x0 && (gx$h = ![]);var qnsu = this;qnsu['_url'] = ku6s9b;if (ku6s9b['indexOf']('data:image') === 0x0) qnsu['_type'] = sq9 = 'image';else qnsu['_type'] = sq9 || (sq9 = qnsu['getTypeFromUrl'](ku6s9b));qnsu['_cache'] = jgx$it, qnsu['_data'] = null;var d052 = 'ascii';if (ku6s9b['indexOf']('.fnt') != -0x1) d052 = 'utf8';else sq9 == 'arraybuffer' && (d052 = '');;var hlyrfz = glhxr['getFileExtension'](ku6s9b);if (nuj['_fileTypeArr']['indexOf'](hlyrfz) != -0x1) aoc7p['EnvConfig']['load']['call'](this, ku6s9b, sq9, jgx$it, rzy4vf, gx$h);else {
        if (!vm_a['getFileInfo'](ku6s9b)) {
          if (ku6s9b['indexOf']('layaNativeDir/') != -0x1) {
            if (aoc7p['isZiYu']) {
              var k960s = vm_a['ziyuFileData'][ku6s9b];qnsu['onLoaded'](k960s);return;
            } else {
              cosnole['log']('read read'), vm_a['read'](ku6s9b, d052, new j3un(nuj, nuj['onReadNativeCallBack'], [d052, ku6s9b, sq9, jgx$it, rzy4vf, gx$h, qnsu]));return;
            }
          }if (xt$gji['rootPath'] == '') var v_m7 = ku6s9b;else v_m7 = ku6s9b['split'](xt$gji['rootPath'])[0x0];ku6s9b['indexOf']('http://') != -0x1 || ku6s9b['indexOf']('https://') != -0x1 ? aoc7p['EnvConfig']['load']['call'](qnsu, ku6s9b, sq9, jgx$it, rzy4vf, gx$h) : vm_a['readFile'](v_m7, d052, new j3un(nuj, nuj['onReadNativeCallBack'], [d052, ku6s9b, sq9, jgx$it, rzy4vf, gx$h, qnsu]), ku6s9b);
        } else aoc7p['EnvConfig']['load']['call'](this, ku6s9b, sq9, jgx$it, rzy4vf, gx$h);
      }
    }, $xj['resMgrLoad'] = function (xlgrth, l$itgx, db0586, txlg$, qnju, _avf, vfry4) {
      db0586 === void 0x0 && (db0586 = 0x0), txlg$ === void 0x0 && (txlg$ = ![]), qnju === void 0x0 && (qnju = ![]), _avf === void 0x0 && (_avf = 0x0), vfry4 === void 0x0 && (vfry4 = 0x3), xlgrth['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xlgrth), aoc7p['EnvConfig']['resMgrLoad'](xlgrth, (inu3qj, vzrf4, qj$3i) => {
        nuj['prototype']['resMgrLoadCallBack'](inu3qj, vzrf4, qj$3i, l$itgx);
      }, db0586, txlg$, qnju, _avf, vfry4);
    }, $xj['resMgrLoadCallBack'] = function (zfhrly, trhgz, lzryfh, s096) {
      console['log']('buff:::', zfhrly, lzryfh, vm_a['fileNativeDir'] + '///' + vm_a['fileListName']), s096(zfhrly, trhgz, lzryfh);
    }, $xj['clearRes'] = function (zfv4ry, qsu3nj) {
      qsu3nj === void 0x0 && (qsu3nj = ![]);var u9s6kb = this;u9s6kb['clearRes'](zfv4ry, qsu3nj);var yflhz = vm_a['getFileInfo'](zfv4ry);if (yflhz && (zfv4ry['indexOf']('http://') != -0x1 || zfv4ry['indexOf']('https://') != -0x1)) {
        var x$tli = yflhz['md5'],
            rzvf4 = vm_a['getFileNativePath'](x$tli);vm_a['remove'](rzvf4);
      }
    }, nuj['onReadNativeCallBack'] = function (b6kus, kb096s, xg$l, d05w8b, txil$, yrlfz, hrylz, hgrzt, m_4v) {
      d05w8b === void 0x0 && (d05w8b = !![]), yrlfz === void 0x0 && (yrlfz = ![]), hgrzt === void 0x0 && (hgrzt = 0x0);if (!hgrzt) {
        var yrhzlt;if (xg$l == 'json' || xg$l == 'atlas') yrhzlt = aoc7p['getJson'](m_4v['data']);else xg$l == 'xml' ? yrhzlt = glhxr['parseXMLFromString'](m_4v['data']) : yrhzlt = m_4v['data'];hrylz['onLoaded'](yrhzlt), !aoc7p['isZiYu'] && aoc7p['isPosMsgYu'] && xg$l != 'arraybuffer' && wx['postMessage']({ 'url': kb096s, 'data': yrhzlt, 'isLoad': !![] });
      } else hgrzt == 0x1 && aoc7p['EnvConfig']['load']['call'](hrylz, kb096s, xg$l, d05w8b, txil$, yrlfz);
    }, jniq3u(nuj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nuj;
  }(),
      vm_a = function (rzgtl) {
    function c_ma47() {
      c_ma47['__super']['call'](this);;
    }return x$3jig(c_ma47, 'laya.wx.mini.MiniFileMgr', rzgtl), c_ma47['isLoadFile'] = function (sn9uqk) {
      return c_ma47['_fileTypeArr']['indexOf'](sn9uqk) != -0x1 ? !![] : ![];
    }, c_ma47['getFileInfo'] = function (rythlz) {
      var xrhlgt = rythlz['split']('?')[0x0],
          yrlt = c_ma47['filesListObj'][xrhlgt];if (yrlt == null) return null;else return yrlt;return null;
    }, c_ma47['onFileUpdate'] = function (j3sn, nksu6) {
      var va4_7 = j3sn['split']('/'),
          zyfrv4 = va4_7[va4_7['length'] - 0x1],
          f4vy7 = c_ma47['getFileInfo'](nksu6);if (f4vy7 == null) c_ma47['onSaveFile'](nksu6, zyfrv4);else {
        if (f4vy7['readyUrl'] != nksu6) c_ma47['remove'](zyfrv4, nksu6);
      }
    }, c_ma47['exits'] = function (rgz, xglit) {
      var b0685 = c_ma47['getFileNativePath'](rgz);c_ma47['fs']['getFileInfo']({ 'filePath': b0685, 'success': function (s3qnuj) {
          xglit != null && xglit['runWith']([0x0, s3qnuj]);
        }, 'fail': function (_47fva) {
          xglit != null && xglit['runWith']([0x1, _47fva]);
        } });
    }, c_ma47['read'] = function (htzl, vf_74a, xthrlg, nqkus) {
      vf_74a === void 0x0 && (vf_74a = 'ascill'), nqkus === void 0x0 && (nqkus = '');var q$ji3;nqkus != '' ? q$ji3 = c_ma47['getFileNativePath'](htzl) : q$ji3 = htzl, c_ma47['fs']['readFile']({ 'filePath': q$ji3, 'encoding': vf_74a, 'success': function (maco7) {
          xthrlg != null && xthrlg['runWith']([0x0, maco7]);
        }, 'fail': function (_c4a7m) {
          if (_c4a7m && nqkus != '') c_ma47['down'](nqkus, vf_74a, xthrlg, nqkus);else xthrlg != null && xthrlg['runWith']([0x1]);
        } });
    }, c_ma47['readNativeFile'] = function (b8d56, o7m_c) {
      c_ma47['fs']['readFile']({ 'filePath': b8d56, 'encoding': '', 'success': function (lg$ti) {
          o7m_c != null && o7m_c['runWith']([0x0]);
        }, 'fail': function (c74m_a) {
          o7m_c != null && o7m_c['runWith']([0x1]);
        } });
    }, c_ma47['down'] = function (mepo, hfvy, ns93uq, bk6s0) {
      hfvy === void 0x0 && (hfvy = 'ascill'), bk6s0 === void 0x0 && (bk6s0 = '');var rfzlhy = c_ma47['getFileNativePath'](bk6s0),
          amo7c = c_ma47['wxdown']({ 'url': mepo, 'filePath': rfzlhy, 'success': function (dk6b90) {
          if (dk6b90['statusCode'] === 0xc8) c_ma47['readFile'](dk6b90['filePath'], hfvy, ns93uq, bk6s0);
        }, 'fail': function (kn9s6) {
          ns93uq != null && ns93uq['runWith']([0x1, kn9s6]);
        } });amo7c['onProgressUpdate'](function (fv4ry) {
        ns93uq != null && ns93uq['runWith']([0x2, fv4ry['progress']]);
      });
    }, c_ma47['readFile'] = function (zvy_f4, nsku69, _74fva, lhrzt) {
      nsku69 === void 0x0 && (nsku69 = 'ascill'), lhrzt === void 0x0 && (lhrzt = ''), c_ma47['fs']['readFile']({ 'filePath': zvy_f4, 'encoding': nsku69, 'success': function (lrhfz) {
          if (zvy_f4['indexOf']('http://') != -0x1 || zvy_f4['indexOf']('https://') != -0x1) c_ma47['onFileUpdate'](zvy_f4, lhrzt);_74fva != null && _74fva['runWith']([0x0, lrhfz]);
        }, 'fail': function (_7am) {
          if (_7am) _74fva != null && _74fva['runWith']([0x1, _7am]);
        } });
    }, c_ma47['downImg'] = function (inu, n$i3q, q39us) {
      q39us === void 0x0 && (q39us = '');var hxgr = c_ma47['wxdown']({ 'url': inu, 'success': function (nqji$3) {
          nqji$3['statusCode'] === 0xc8 && c_ma47['copyFile'](nqji$3['tempFilePath'], q39us, n$i3q);
        }, 'fail': function (wd058) {
          n$i3q != null && n$i3q['runWith']([0x1, wd058]);
        } });
    }, c_ma47['copyFile'] = function (g3j$x, _vy4zf, xijtg) {
      var sk960b = g3j$x['split']('/'),
          xig = sk960b[sk960b['length'] - 0x1],
          mo7cp = _vy4zf['split']('?')[0x0],
          $igx3j = c_ma47['getFileInfo'](_vy4zf),
          n9sqk = c_ma47['getFileNativePath'](xig);c_ma47['fs']['copyFile']({ 'srcPath': g3j$x, 'destPath': n9sqk, 'success': function (v47f_) {
          if (!$igx3j) c_ma47['onSaveFile'](_vy4zf, xig), xijtg != null && xijtg['runWith']([0x0]);else {
            if ($igx3j['readyUrl'] != _vy4zf) c_ma47['remove'](xig, _vy4zf, xijtg);
          }
        }, 'fail': function (yfrzlh) {
          xijtg != null && xijtg['runWith']([0x1, yfrzlh]);
        } });
    }, c_ma47['getFileNativePath'] = function (hytzl) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hytzl;
    }, c_ma47['remove'] = function (ryv4zf, xj3qi, zfrlyh) {
      xj3qi === void 0x0 && (xj3qi = '');var k60b9 = c_ma47['getFileInfo'](xj3qi),
          x3i$jg = c_ma47['getFileNativePath'](k60b9['md5']);uq9sk['loader']['clearRes'](k60b9['readyUrl']), c_ma47['fs']['unlink']({ 'filePath': x3i$jg, 'success': function (m_7ca4) {
          if (xj3qi != '') c_ma47['onSaveFile'](xj3qi, ryv4zf);zfrlyh != null && zfrlyh['runWith']([0x0]);
        }, 'fail': function (av4_f) {} });
    }, c_ma47['onSaveFile'] = function ($qnj, _cao) {
      var ryvz4 = $qnj['split']('?')[0x0];c_ma47['filesListObj'][ryvz4] = { 'md5': _cao, 'readyUrl': $qnj }, c_ma47['fs']['writeFile']({ 'filePath': c_ma47['fileNativeDir'] + '/' + c_ma47['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c_ma47['filesListObj']), 'success': function (u3qnij) {
          console['log']('写入测试测试成功：', u3qnij);
        }, 'fail': function (d5wb8) {
          console['log']('写入测试测试失败：', d5wb8);
        } });
    }, c_ma47['existDir'] = function (hrflyz, d56b) {
      c_ma47['fs']['mkdir']({ 'dirPath': hrflyz, 'success': function (juiq) {
          d56b != null && d56b['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gjixt$) {
          if (gjixt$['errMsg']['indexOf']('file already exists') != -0x1) c_ma47['readSync'](c_ma47['fileListName'], 'utf8', d56b);else d56b != null && d56b['runWith']([0x1, gjixt$]);
        } });
    }, c_ma47['readSync'] = function (c_o7m, xrlh, trhyz, rlhyf) {
      xrlh === void 0x0 && (xrlh = 'ascill'), rlhyf === void 0x0 && (rlhyf = '');var rlthyz = c_ma47['getFileNativePath'](c_o7m),
          jiu3n;try {
        jiu3n = c_ma47['fs']['readFileSync'](rlthyz), trhyz != null && trhyz['runWith']([0x0, { 'data': jiu3n }]);
      } catch (nus9q) {
        trhyz != null && trhyz['runWith']([0x1]);
      }
    }, c_ma47['readCache'] = function () {}, c_ma47['writeCache'] = function (wd5802) {
      var m7 = readyUrl['split']('?')[0x0];c_ma47['filesListObj'][m7] = { 'md5': md5Name, 'readyUrl': readyUrl }, c_ma47['fs']['writeFile']({ 'filePath': c_ma47['fileNativeDir'] + '/' + c_ma47['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c_ma47['filesListObj']), 'success': function (d06k5b) {}, 'fail': function (iqjx$3) {} });
    }, c_ma47['setNativeFileDir'] = function (ylzht) {
      c_ma47['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ylzht;
    }, c_ma47['filesListObj'] = {}, c_ma47['fileNativeDir'] = null, c_ma47['fileListName'] = 'layaairfiles.txt', c_ma47['ziyuFileData'] = {}, jniq3u(c_ma47, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), c_ma47;
  }(rvf4),
      bd508 = function (vf_74y) {
    function d2581() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], d2581['__super']['call'](this), this['_sound'] = d2581['_createSound']();
    }x$3jig(d2581, 'laya.wx.mini.MiniSound', vf_74y);var nuq3i = d2581['prototype'];return nuq3i['load'] = function ($lxht) {
      var tig$lx = this;$lxht = xt$gji['formatURL']($lxht), this['url'] = $lxht;if (d2581['_audioCache'][$lxht]) {
        this['event']('complete');return;
      }function trxg() {
        if (d2581['_null'] != undefined) tig$lx['_sound']['onCanplay'](d2581['_null']), tig$lx['_sound']['onError'](d2581['_null']);else try {
          tig$lx['_sound']['onCanplay'](null), tig$lx['_sound']['onError'](null), d2581['_null'] = null;
        } catch (pacom7) {
          console['warn']('[wxmini] _clearSound:' + pacom7), tig$lx['_sound']['onCanplay'](g3jxi), tig$lx['_sound']['onError'](g3jxi), d2581['_null'] = g3jxi;
        }
      }function sbku9() {
        trxg(), ca_['loaded'] = !![], ca_['event']('complete'), d2581['_audioCache'][ca_['url']] = ca_;
      }function yzfhrv($hgtlx) {
        console['error']('errCode=' + $hgtlx['errCode'] + '  errMsg=' + $hgtlx['errMsg']), trxg(), ca_['event']('error');
      }function g3jxi() {}this['_sound']['onCanplay'](sbku9), this['_sound']['onError'](yzfhrv), this['_sound']['src'] = $lxht;var ca_ = this;
    }, nuq3i['play'] = function (yhlt, oampec) {
      yhlt === void 0x0 && (yhlt = 0x0), oampec === void 0x0 && (oampec = 0x0);var vfzhr;if (this['url'] == l$tigx['_tMusic']) {
        if (!d2581['_musicAudio']) d2581['_musicAudio'] = d2581['_createSound']();vfzhr = d2581['_musicAudio'];
      } else vfzhr = d2581['_createSound']();vfzhr['src'] = this['url'];var snujq3 = new nusk9q(vfzhr);return snujq3['url'] = this['url'], snujq3['loops'] = oampec, snujq3['startTime'] = yhlt, snujq3['play'](), l$tigx['addChannel'](snujq3), snujq3;
    }, nuq3i['dispose'] = function () {
      var zfryhv = d2581['_audioCache'][this['url']];zfryhv && (zfryhv['src'] = '', delete d2581['_audioCache'][this['url']]);
    }, z4yfv_(0x0, nuq3i, 'duration', function () {
      return this['_sound']['duration'];
    }), d2581['_createSound'] = function () {
      return d2581['_id']++, aoc7p['window']['wx']['createInnerAudioContext']();
    }, d2581['_musicAudio'] = null, d2581['_id'] = 0x0, d2581['_audioCache'] = {}, d2581['_null'] = undefined, d2581;
  }(rvf4),
      nusk9q = function (rzythl) {
    function d6bk09(zv4_) {
      this['_audio'] = null, this['_onEnd'] = null, d6bk09['__super']['call'](this), this['_audio'] = zv4_, this['_onEnd'] = glhxr['bind'](this['__onEnd'], this), zv4_['onEnded'](this['_onEnd']);
    }x$3jig(d6bk09, 'laya.wx.mini.MiniSoundChannel', rzythl);var rthlyz = d6bk09['prototype'];return rthlyz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (uq9sk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rthlyz['__onNull'] = function () {}, rthlyz['play'] = function () {
      this['isStopped'] = ![], l$tigx['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rthlyz['stop'] = function () {
      this['isStopped'] = !![], l$tigx['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (d6bk09['_null'] != undefined) this['_audio']['onEnded'](d6bk09['_null']);else try {
        this['_audio']['onEnded'](null), d6bk09['_null'] = null;
      } catch (uq93sn) {
        console['warn']('[wxmini] stop:' + uq93sn), this['_audio']['onEnded'](glhxr['bind'](this['__onNull'], this)), d6bk09['_null'] = glhxr['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, rthlyz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rthlyz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], l$tigx['addChannel'](this), this['_audio']['play']();
    }, z4yfv_(0x0, rthlyz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), z4yfv_(0x0, rthlyz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), z4yfv_(0x0, rthlyz, 'volume', function () {
      return 0x1;
    }, function (it$glx) {}), d6bk09['_null'] = undefined, d6bk09;
  }(f_y4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ksub96 in Laya) {
    var w8d0b = Laya[ksub96];w8d0b && w8d0b['__isclass'] && (exports[ksub96] = w8d0b);
  }
});