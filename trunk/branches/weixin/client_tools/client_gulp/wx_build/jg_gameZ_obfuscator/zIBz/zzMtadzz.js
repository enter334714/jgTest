var B = wx.$z;
(function (window, document, xh9p1s) {
  var ph914 = xh9p1s['un'],
      wu_5r2 = xh9p1s['uns'],
      $qim = xh9p1s['static'],
      x1as9h = xh9p1s['class'],
      $m7i = xh9p1s['getset'],
      g94p = xh9p1s['__newvec'],
      nim7 = laya['utils']['Browser'],
      xs19ea = laya['events']['Event'],
      stexz = laya['events']['EventDispatcher'],
      wru5_ = laya['resource']['HTMLImage'],
      tsx = laya['utils']['Handler'],
      e9xzas = laya['display']['Input'],
      satoe = laya['net']['Loader'],
      lnm37 = laya['maths']['Matrix'],
      lnf46 = laya['renders']['Render'],
      k8dbr = laya['utils']['RunDriver'],
      g4pfv6 = laya['media']['Sound'],
      b8_kr = laya['media']['SoundChannel'],
      br85_k = laya['media']['SoundManager'],
      hgp941 = laya['display']['Stage'],
      axez9s = laya['net']['URL'],
      ezxsat = laya['utils']['Utils'],
      toyzed = function () {
    function nm7i3q() {}return x1as9h(nm7i3q, 'laya.wx.mini.MiniAdpter'), nm7i3q['getJson'] = function (edtzoy) {
      return JSON['parse'](edtzoy);
    }, nm7i3q['init'] = function (f7nv6, f76l) {
      f7nv6 === void 0x0 && (f7nv6 = ![]), f76l === void 0x0 && (f76l = ![]);if (nm7i3q['_inited']) return;nm7i3q['window'] = window;if (nm7i3q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;nm7i3q['_inited'] = !![], nm7i3q['isZiYu'] = f76l, nm7i3q['isPosMsgYu'] = f7nv6, nm7i3q['EnvConfig'] = {}, !nm7i3q['isZiYu'] && (f6vl7n['setNativeFileDir']('/layaairGame'), f6vl7n['existDir'](f6vl7n['fileNativeDir'], tsx['create'](nm7i3q, nm7i3q['onMkdirCallBack']))), nm7i3q['window']['focus'] = function () {}, xh9p1s['getUrlPath'] = function () {}, nm7i3q['window']['logtime'] = function (xs91hp) {}, nm7i3q['window']['alertTimeLog'] = function (q7mi$) {}, nm7i3q['window']['resetShareInfo'] = function () {}, nm7i3q['window']['CanvasRenderingContext2D'] = function () {}, nm7i3q['window']['CanvasRenderingContext2D']['prototype'] = nm7i3q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nm7i3q['window']['document']['body']['appendChild'] = function () {}, nm7i3q['EnvConfig']['pixelRatioInt'] = 0x0, k8dbr['getPixelRatio'] = nm7i3q['pixelRatio'], nm7i3q['_preCreateElement'] = nim7['createElement'], nim7['createElement'] = nm7i3q['createElement'], k8dbr['createShaderCondition'] = nm7i3q['createShaderCondition'], ezxsat['parseXMLFromString'] = nm7i3q['parseXMLFromString'], e9xzas['_createInputElement'] = gpf['_createInputElement'], nm7i3q['EnvConfig']['load'] = satoe['prototype']['load'], satoe['prototype']['load'] = wu52r['prototype']['load'], nm7i3q['isZiYu'] && f7nv6 && wx['onMessage'](function (eoadzt) {
        eoadzt['isLoad'] && (f6vl7n['ziyuFileData'][eoadzt['url']] = eoadzt['data']);
      });
    }, nm7i3q['onMkdirCallBack'] = function ($ijm3q, uw25_0) {
      if (!$ijm3q) f6vl7n['filesListObj'] = JSON['parse'](uw25_0['data']);
    }, nm7i3q['pixelRatio'] = function () {
      if (!nm7i3q['EnvConfig']['pixelRatioInt']) try {
        var mlin = wx['getSystemInfoSync']();return nm7i3q['EnvConfig']['pixelRatioInt'] = mlin['pixelRatio'], mlin = mlin, mlin['pixelRatio'];
      } catch (fpv4g6) {}return nm7i3q['EnvConfig']['pixelRatioInt'];
    }, nm7i3q['createElement'] = function (flgv64) {
      if (flgv64 == 'canvas') {
        var kyodtb;return nm7i3q['idx'] == 0x1 ? nm7i3q['isZiYu'] ? (kyodtb = sharedCanvas, kyodtb['style'] = {}) : kyodtb = window['canvas'] : kyodtb = window['wx']['createCanvas'](), nm7i3q['idx']++, kyodtb;
      } else {
        if (flgv64 == 'textarea' || flgv64 == 'input') return nm7i3q['onCreateInput'](flgv64);else {
          if (flgv64 == 'div') {
            var xgh1 = nm7i3q['_preCreateElement'](flgv64);return xgh1['contains'] = function (h19xp) {
              return null;
            }, xgh1['removeChild'] = function (fiv7nl) {}, xgh1;
          } else return nm7i3q['_preCreateElement'](flgv64);
        }
      }
    }, nm7i3q['onCreateInput'] = function (oet) {
      var ytkzd = nm7i3q['_preCreateElement'](oet);return ytkzd['focus'] = gpf['wxinputFocus'], ytkzd['blur'] = gpf['wxinputblur'], ytkzd['style'] = {}, ytkzd['value'] = 0x0, ytkzd['parentElement'] = {}, ytkzd['placeholder'] = {}, ytkzd['type'] = {}, ytkzd['setColor'] = function (v64gfp) {}, ytkzd['setType'] = function (r_2wu5) {}, ytkzd['setFontFace'] = function (tdoyk) {}, ytkzd['addEventListener'] = function (lgv64f) {}, ytkzd['contains'] = function (o8kyb) {
        return null;
      }, ytkzd['removeChild'] = function (kbyr8) {}, ytkzd;
    }, nm7i3q['createShaderCondition'] = function (ozedy) {
      var g9h14p = this,
          dbyko = function () {
        var dtky = ozedy;return g9h14p[ozedy['replace']('this.', '')];
      };return dbyko;
    }, nm7i3q['EnvConfig'] = null, nm7i3q['window'] = null, nm7i3q['_preCreateElement'] = null, nm7i3q['_inited'] = ![], nm7i3q['wxRequest'] = null, nm7i3q['systemInfo'] = null, nm7i3q['version'] = '0.0.1', nm7i3q['isZiYu'] = ![], nm7i3q['isPosMsgYu'] = ![], nm7i3q['parseXMLFromString'] = function (ln73m) {
      var rb85k_, bdoy8;ln73m = ln73m['replace'](/>\s+</g, '><');try {
        rb85k_ = new window['Parser']['DOMParser']()['parseFromString'](ln73m, 'text/xml');
      } catch (v7nlim) {
        throw '需要引入xml解析库文件';
      }return rb85k_;
    }, nm7i3q['idx'] = 0x1, nm7i3q;
  }(),
      x9h1sp = function () {
    function f4p6v() {}x1as9h(f4p6v, 'laya.wx.mini.MiniImage');var flnv7i = f4p6v['prototype'];return flnv7i['_loadImage'] = function (ykrdb) {
      var bryk_8 = this,
          fg6pv4 = ![];ykrdb['indexOf']('layaNativeDir/') == -0x1 && (fg6pv4 = !![], ykrdb = axez9s['formatURL'](ykrdb));if (!f6vl7n['getFileInfo'](ykrdb)) {
        if (ykrdb['indexOf']('http://') != -0x1 || ykrdb['indexOf']('https://') != -0x1) f6vl7n['downImg'](ykrdb, new tsx(f4p6v, f4p6v['onDownImgCallBack'], [ykrdb, bryk_8]), ykrdb);else f4p6v['onCreateImage'](ykrdb, bryk_8, !![]);
      } else f4p6v['onCreateImage'](ykrdb, bryk_8, !fg6pv4);
    }, f4p6v['onDownImgCallBack'] = function (r8b_5k, tzyedo, kb8ry) {
      if (!kb8ry) f4p6v['onCreateImage'](r8b_5k, tzyedo);else tzyedo['onError'](null);
    }, f4p6v['onCreateImage'] = function (ur582, teoasz, ae19x) {
      ae19x === void 0x0 && (ae19x = ![]);var r_8yk;if (!ae19x) {
        var $37m = f6vl7n['getFileInfo'](ur582),
            byot = $37m['md5'];r_8yk = f6vl7n['getFileNativePath'](byot);
      } else r_8yk = ur582;if (teoasz['imgCache'] == null) teoasz['imgCache'] = {};var ez9axs;function l64g() {
        ez9axs['onload'] = null, ez9axs['onerror'] = null, delete teoasz['imgCache'][ur582];
      };var atsxez = function () {
        l64g(), teoasz['onLoaded'](ez9axs);
      },
          n7ml3i = function () {
        l64g(), teoasz['event']('error', 'Load image failed');
      };teoasz['_type'] == 'nativeimage' ? (ez9axs = new nim7['window']['Image'](), ez9axs['crossOrigin'] = '', ez9axs['onload'] = atsxez, ez9axs['onerror'] = n7ml3i, ez9axs['src'] = r_8yk, teoasz['imgCache'][ur582] = ez9axs) : new wru5_['create'](r_8yk, { 'onload': atsxez, 'onerror': n7ml3i, 'onCreate': function (ozdtyk) {
          ez9axs = ozdtyk, teoasz['imgCache'][ur582] = ozdtyk;
        } });
    }, f4p6v;
  }(),
      gpf = function () {
    function dkb() {}return x1as9h(dkb, 'laya.wx.mini.MiniInput'), dkb['_createInputElement'] = function () {
      e9xzas['_initInput'](e9xzas['area'] = nim7['createElement']('textarea')), e9xzas['_initInput'](e9xzas['input'] = nim7['createElement']('input')), e9xzas['inputContainer'] = nim7['createElement']('div'), e9xzas['inputContainer']['style']['position'] = 'absolute', e9xzas['inputContainer']['style']['zIndex'] = 0x186a0, nim7['container']['appendChild'](e9xzas['inputContainer']), e9xzas['inputContainer']['setPos'] = function (lnmi37, v6gf4l) {
        e9xzas['inputContainer']['style']['left'] = lnmi37 + 'px', e9xzas['inputContainer']['style']['top'] = v6gf4l + 'px';
      }, xh9p1s['stage']['on']('resize', null, dkb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e1s9a) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), br85_k['_soundClass'] = o8, br85_k['_musicClass'] = o8, window['_videoClass'] = mqi3;
    }, dkb['_onStageResize'] = function () {
      var k_8rb = xh9p1s['stage']['_canvasTransform']['identity']();k_8rb['scale'](nim7['width'] / lnf46['canvas']['width'] / k8dbr['getPixelRatio'](), nim7['height'] / lnf46['canvas']['height'] / k8dbr['getPixelRatio']());
    }, dkb['wxinputFocus'] = function (n6vl) {
      var p1h9x = e9xzas['inputElement']['target'];if (p1h9x && !p1h9x['editable']) return;toyzed['window']['wx']['offKeyboardConfirm'](), toyzed['window']['wx']['offKeyboardInput'](), toyzed['window']['wx']['showKeyboard']({ 'defaultValue': p1h9x['text'], 'maxLength': p1h9x['maxChars'], 'multiple': p1h9x['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (miq$3) {}, 'fail': function (tzasxe) {} }), toyzed['window']['wx']['onKeyboardConfirm'](function (i$7q3) {
        var r_5b2 = i$7q3 ? i$7q3['value'] : '';p1h9x['text'] = r_5b2, p1h9x['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), toyzed['window']['wx']['onKeyboardInput'](function (aezxs9) {
        var f7vl = aezxs9 ? aezxs9['value'] : '';if (!p1h9x['multiline']) {
          if (f7vl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }p1h9x['text'] = f7vl, p1h9x['event']('input');
      });
    }, dkb['inputEnter'] = function () {
      e9xzas['inputElement']['target']['focus'] = ![];
    }, dkb['wxinputblur'] = function () {
      dkb['hideKeyboard']();
    }, dkb['hideKeyboard'] = function () {
      toyzed['window']['wx']['offKeyboardConfirm'](), toyzed['window']['wx']['offKeyboardInput'](), toyzed['window']['wx']['hideKeyboard']({ 'success': function (p6ghf4) {
          console['log']('隐藏键盘');
        }, 'fail': function (b8kd) {
          console['log']('隐藏键盘出错:' + (b8kd ? b8kd['errMsg'] : ''));
        } });
    }, dkb;
  }(),
      wu52r = function () {
    function vli7() {}x1as9h(vli7, 'laya.wx.mini.MiniLoader');var b8okdy = vli7['prototype'];return b8okdy['load'] = function (ghp4f, tszx, iq73mn, h19pgx, f7vn6) {
      iq73mn === void 0x0 && (iq73mn = !![]), f7vn6 === void 0x0 && (f7vn6 = ![]);var aezd = this;aezd['_url'] = ghp4f;if (ghp4f['indexOf']('data:image') === 0x0) aezd['_type'] = tszx = 'image';else aezd['_type'] = tszx || (tszx = aezd['getTypeFromUrl'](ghp4f));aezd['_cache'] = iq73mn, aezd['_data'] = null;var pvg = 'ascii';if (ghp4f['indexOf']('.fnt') != -0x1) pvg = 'utf8';else tszx == 'arraybuffer' && (pvg = '');;var f4pv6 = ezxsat['getFileExtension'](ghp4f);if (vli7['_fileTypeArr']['indexOf'](f4pv6) != -0x1) toyzed['EnvConfig']['load']['call'](this, ghp4f, tszx, iq73mn, h19pgx, f7vn6);else {
        if (!f6vl7n['getFileInfo'](ghp4f)) {
          if (ghp4f['indexOf']('layaNativeDir/') != -0x1) {
            if (toyzed['isZiYu']) {
              var flvi7n = f6vl7n['ziyuFileData'][ghp4f];aezd['onLoaded'](flvi7n);return;
            } else {
              cosnole['log']('read read'), f6vl7n['read'](ghp4f, pvg, new tsx(vli7, vli7['onReadNativeCallBack'], [pvg, ghp4f, tszx, iq73mn, h19pgx, f7vn6, aezd]));return;
            }
          }if (axez9s['rootPath'] == '') var ivnlf7 = ghp4f;else ivnlf7 = ghp4f['split'](axez9s['rootPath'])[0x0];ghp4f['indexOf']('http://') != -0x1 || ghp4f['indexOf']('https://') != -0x1 ? toyzed['EnvConfig']['load']['call'](aezd, ghp4f, tszx, iq73mn, h19pgx, f7vn6) : f6vl7n['readFile'](ivnlf7, pvg, new tsx(vli7, vli7['onReadNativeCallBack'], [pvg, ghp4f, tszx, iq73mn, h19pgx, f7vn6, aezd]), ghp4f);
        } else toyzed['EnvConfig']['load']['call'](this, ghp4f, tszx, iq73mn, h19pgx, f7vn6);
      }
    }, b8okdy['resMgrLoad'] = function (n4v6f, esa9x, odtb, sa1ex, u2_rw5, dztoe, v4g6fp) {
      odtb === void 0x0 && (odtb = 0x0), sa1ex === void 0x0 && (sa1ex = ![]), u2_rw5 === void 0x0 && (u2_rw5 = ![]), dztoe === void 0x0 && (dztoe = 0x0), v4g6fp === void 0x0 && (v4g6fp = 0x3), n4v6f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', n4v6f), toyzed['EnvConfig']['resMgrLoad'](n4v6f, (rdk8, inl37m, vfp6) => {
        vli7['prototype']['resMgrLoadCallBack'](rdk8, inl37m, vfp6, esa9x);
      }, odtb, sa1ex, u2_rw5, dztoe, v4g6fp);
    }, b8okdy['resMgrLoadCallBack'] = function (kdbyt, dk8rb, aozt, pfg6h4) {
      console['log']('buff:::', kdbyt, aozt, f6vl7n['fileNativeDir'] + '///' + f6vl7n['fileListName']), pfg6h4(kdbyt, dk8rb, aozt);
    }, b8okdy['clearRes'] = function (xahs, ur25_) {
      ur25_ === void 0x0 && (ur25_ = ![]);var s1ah = this;s1ah['clearRes'](xahs, ur25_);var azetxs = f6vl7n['getFileInfo'](xahs);if (azetxs && (xahs['indexOf']('http://') != -0x1 || xahs['indexOf']('https://') != -0x1)) {
        var z9saex = azetxs['md5'],
            bkotdy = f6vl7n['getFileNativePath'](z9saex);f6vl7n['remove'](bkotdy);
      }
    }, vli7['onReadNativeCallBack'] = function (jq$, bkdyot, _w2ru5, ha19s, i7m$3, drby8, yrk, _2w5, hp1g6) {
      ha19s === void 0x0 && (ha19s = !![]), drby8 === void 0x0 && (drby8 = ![]), _2w5 === void 0x0 && (_2w5 = 0x0);if (!_2w5) {
        var in37lm;if (_w2ru5 == 'json' || _w2ru5 == 'atlas') in37lm = toyzed['getJson'](hp1g6['data']);else _w2ru5 == 'xml' ? in37lm = ezxsat['parseXMLFromString'](hp1g6['data']) : in37lm = hp1g6['data'];yrk['onLoaded'](in37lm), !toyzed['isZiYu'] && toyzed['isPosMsgYu'] && _w2ru5 != 'arraybuffer' && wx['postMessage']({ 'url': bkdyot, 'data': in37lm, 'isLoad': !![] });
      } else _2w5 == 0x1 && toyzed['EnvConfig']['load']['call'](yrk, bkdyot, _w2ru5, ha19s, i7m$3, drby8);
    }, $qim(vli7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vli7;
  }(),
      f6vl7n = function (pgf4h) {
    function x1hsp9() {
      x1hsp9['__super']['call'](this);;
    }return x1as9h(x1hsp9, 'laya.wx.mini.MiniFileMgr', pgf4h), x1hsp9['isLoadFile'] = function (w025_u) {
      return x1hsp9['_fileTypeArr']['indexOf'](w025_u) != -0x1 ? !![] : ![];
    }, x1hsp9['getFileInfo'] = function (niml37) {
      var b5r_8k = niml37['split']('?')[0x0],
          h64pf = x1hsp9['filesListObj'][b5r_8k];if (h64pf == null) return null;else return h64pf;return null;
    }, x1hsp9['onFileUpdate'] = function (i73$mq, rwu_25) {
      var a9shx = i73$mq['split']('/'),
          p1xsh9 = a9shx[a9shx['length'] - 0x1],
          _5r8kb = x1hsp9['getFileInfo'](rwu_25);if (_5r8kb == null) x1hsp9['onSaveFile'](rwu_25, p1xsh9);else {
        if (_5r8kb['readyUrl'] != rwu_25) x1hsp9['remove'](p1xsh9, rwu_25);
      }
    }, x1hsp9['exits'] = function (kr_b58, q7ni) {
      var se19xa = x1hsp9['getFileNativePath'](kr_b58);x1hsp9['fs']['getFileInfo']({ 'filePath': se19xa, 'success': function (y8kdrb) {
          q7ni != null && q7ni['runWith']([0x0, y8kdrb]);
        }, 'fail': function (tdoz) {
          q7ni != null && q7ni['runWith']([0x1, tdoz]);
        } });
    }, x1hsp9['read'] = function (nlvf, miq3$j, oytezd, hxas19) {
      miq3$j === void 0x0 && (miq3$j = 'ascill'), hxas19 === void 0x0 && (hxas19 = '');var ea9xsz;hxas19 != '' ? ea9xsz = x1hsp9['getFileNativePath'](nlvf) : ea9xsz = nlvf, x1hsp9['fs']['readFile']({ 'filePath': ea9xsz, 'encoding': miq3$j, 'success': function (zs9aex) {
          oytezd != null && oytezd['runWith']([0x0, zs9aex]);
        }, 'fail': function (e1sax) {
          if (e1sax && hxas19 != '') x1hsp9['down'](hxas19, miq3$j, oytezd, hxas19);else oytezd != null && oytezd['runWith']([0x1]);
        } });
    }, x1hsp9['readNativeFile'] = function (mi3ln7, xs19e) {
      x1hsp9['fs']['readFile']({ 'filePath': mi3ln7, 'encoding': '', 'success': function (vg6l4f) {
          xs19e != null && xs19e['runWith']([0x0]);
        }, 'fail': function (rb5k_) {
          xs19e != null && xs19e['runWith']([0x1]);
        } });
    }, x1hsp9['down'] = function (ozdtky, _02w, _0u2w, f67vn) {
      _02w === void 0x0 && (_02w = 'ascill'), f67vn === void 0x0 && (f67vn = '');var kyob8d = x1hsp9['getFileNativePath'](f67vn),
          qi3j$ = x1hsp9['wxdown']({ 'url': ozdtky, 'filePath': kyob8d, 'success': function (ilmvn) {
          if (ilmvn['statusCode'] === 0xc8) x1hsp9['readFile'](ilmvn['filePath'], _02w, _0u2w, f67vn);
        }, 'fail': function (eoyzt) {
          _0u2w != null && _0u2w['runWith']([0x1, eoyzt]);
        } });qi3j$['onProgressUpdate'](function (dktob) {
        _0u2w != null && _0u2w['runWith']([0x2, dktob['progress']]);
      });
    }, x1hsp9['readFile'] = function (k8by_r, texazs, xez9s, g9h1p) {
      texazs === void 0x0 && (texazs = 'ascill'), g9h1p === void 0x0 && (g9h1p = ''), x1hsp9['fs']['readFile']({ 'filePath': k8by_r, 'encoding': texazs, 'success': function (taosez) {
          if (k8by_r['indexOf']('http://') != -0x1 || k8by_r['indexOf']('https://') != -0x1) x1hsp9['onFileUpdate'](k8by_r, g9h1p);xez9s != null && xez9s['runWith']([0x0, taosez]);
        }, 'fail': function (ezxsta) {
          if (ezxsta) xez9s != null && xez9s['runWith']([0x1, ezxsta]);
        } });
    }, x1hsp9['downImg'] = function (xhs1, r8k_yb, gp6f4h) {
      gp6f4h === void 0x0 && (gp6f4h = '');var k85_b = x1hsp9['wxdown']({ 'url': xhs1, 'success': function (yzodet) {
          yzodet['statusCode'] === 0xc8 && x1hsp9['copyFile'](yzodet['tempFilePath'], gp6f4h, r8k_yb);
        }, 'fail': function (n4lvf) {
          r8k_yb != null && r8k_yb['runWith']([0x1, n4lvf]);
        } });
    }, x1hsp9['copyFile'] = function (oatzes, tzyd, sz9axe) {
      var _by8kr = oatzes['split']('/'),
          i3qnm = _by8kr[_by8kr['length'] - 0x1],
          flvn7i = tzyd['split']('?')[0x0],
          toase = x1hsp9['getFileInfo'](tzyd),
          ur852 = x1hsp9['getFileNativePath'](i3qnm);x1hsp9['fs']['copyFile']({ 'srcPath': oatzes, 'destPath': ur852, 'success': function (fg64v) {
          if (!toase) x1hsp9['onSaveFile'](tzyd, i3qnm), sz9axe != null && sz9axe['runWith']([0x0]);else {
            if (toase['readyUrl'] != tzyd) x1hsp9['remove'](i3qnm, tzyd, sz9axe);
          }
        }, 'fail': function (d8ykb) {
          sz9axe != null && sz9axe['runWith']([0x1, d8ykb]);
        } });
    }, x1hsp9['getFileNativePath'] = function (x1ae) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + x1ae;
    }, x1hsp9['remove'] = function (ry8kdb, ni37m, gpvf64) {
      ni37m === void 0x0 && (ni37m = '');var ru_285 = x1hsp9['getFileInfo'](ni37m),
          ktodyb = x1hsp9['getFileNativePath'](ru_285['md5']);xh9p1s['loader']['clearRes'](ru_285['readyUrl']), x1hsp9['fs']['unlink']({ 'filePath': ktodyb, 'success': function (kydo8b) {
          if (ni37m != '') x1hsp9['onSaveFile'](ni37m, ry8kdb);gpvf64 != null && gpvf64['runWith']([0x0]);
        }, 'fail': function (h1s9xp) {} });
    }, x1hsp9['onSaveFile'] = function (vlf6n, ydetoz) {
      var edzota = vlf6n['split']('?')[0x0];x1hsp9['filesListObj'][edzota] = { 'md5': ydetoz, 'readyUrl': vlf6n }, x1hsp9['fs']['writeFile']({ 'filePath': x1hsp9['fileNativeDir'] + '/' + x1hsp9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x1hsp9['filesListObj']), 'success': function (i7mnvl) {
          console['log']('写入测试测试成功：', i7mnvl);
        }, 'fail': function (_58rb) {
          console['log']('写入测试测试失败：', _58rb);
        } });
    }, x1hsp9['existDir'] = function (tezs, zdaeot) {
      x1hsp9['fs']['mkdir']({ 'dirPath': tezs, 'success': function (k_ybr) {
          zdaeot != null && zdaeot['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (p64vg) {
          if (p64vg['errMsg']['indexOf']('file already exists') != -0x1) x1hsp9['readSync'](x1hsp9['fileListName'], 'utf8', zdaeot);else zdaeot != null && zdaeot['runWith']([0x1, p64vg]);
        } });
    }, x1hsp9['readSync'] = function (tkdy, hg4pf, aozet, nli3m) {
      hg4pf === void 0x0 && (hg4pf = 'ascill'), nli3m === void 0x0 && (nli3m = '');var lf = x1hsp9['getFileNativePath'](tkdy),
          fl7i;try {
        fl7i = x1hsp9['fs']['readFileSync'](lf), aozet != null && aozet['runWith']([0x0, { 'data': fl7i }]);
      } catch (h6pfg) {
        aozet != null && aozet['runWith']([0x1]);
      }
    }, x1hsp9['readCache'] = function () {}, x1hsp9['writeCache'] = function (hx9ps) {
      var d8okby = readyUrl['split']('?')[0x0];x1hsp9['filesListObj'][d8okby] = { 'md5': md5Name, 'readyUrl': readyUrl }, x1hsp9['fs']['writeFile']({ 'filePath': x1hsp9['fileNativeDir'] + '/' + x1hsp9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x1hsp9['filesListObj']), 'success': function (kr85_) {}, 'fail': function (r_5u) {} });
    }, x1hsp9['setNativeFileDir'] = function (oestza) {
      x1hsp9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oestza;
    }, x1hsp9['filesListObj'] = {}, x1hsp9['fileNativeDir'] = null, x1hsp9['fileListName'] = 'layaairfiles.txt', x1hsp9['ziyuFileData'] = {}, $qim(x1hsp9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), x1hsp9;
  }(stexz),
      o8 = function (fp4gv) {
    function n7f6() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], n7f6['__super']['call'](this), this['_sound'] = n7f6['_createSound'](), this['_chanell'] = new mij3q$(this['_sound']);
    }x1as9h(n7f6, 'laya.wx.mini.MiniSound', fp4gv);var p4f = n7f6['prototype'];return p4f['load'] = function (yrkd8b) {
      var mv7ln = this;yrkd8b = axez9s['formatURL'](yrkd8b), this['url'] = yrkd8b;if (n7f6['_audioCache'][yrkd8b]) {
        this['event']('complete');return;
      }function ytzk() {
        if (n7f6['_null'] != undefined) mv7ln['_sound']['onCanplay'](n7f6['_null']), mv7ln['_sound']['onError'](n7f6['_null']);else try {
          mv7ln['_sound']['onCanplay'](null), mv7ln['_sound']['onError'](null), n7f6['_null'] = null;
        } catch (uwr_) {
          console['warn']('[wxmini] _clearSound:' + uwr_), mv7ln['_sound']['onCanplay'](im$3jq), mv7ln['_sound']['onError'](im$3jq), n7f6['_null'] = im$3jq;
        }
      }function toasz() {
        h914['loaded'] = !![], h914['event']('complete'), n7f6['_audioCache'][h914['url']] = h914;
      }function nf6lv4(datez) {
        console['error']('errCode=' + datez['errCode'] + '  errMsg=' + datez['errMsg']), h914['event']('error');
      }function im$3jq() {}this['_sound']['onCanplay'](toasz), this['_sound']['onError'](nf6lv4), this['_sound']['src'] = yrkd8b;var h914 = this;
    }, p4f['play'] = function (il3n, im73q$) {
      il3n === void 0x0 && (il3n = 0x0), im73q$ === void 0x0 && (im73q$ = 0x0);var pvg4f, dzyt;if (this['url'] == br85_k['_tMusic']) {
        if (!n7f6['_musicAudio']) n7f6['_musicAudio'] = this['_sound'];pvg4f = n7f6['_musicAudio'], dzyt = this['_chanell'];
      } else pvg4f = this['_sound'], dzyt = this['_chanell'];return pvg4f['src'] = this['url'], pvg4f['startTime'] = 0x0, dzyt['isStopped'] && (dzyt['url'] = this['url'], dzyt['loops'] = im73q$, dzyt['startTime'] = il3n, dzyt['play'](), br85_k['addChannel'](dzyt)), dzyt;
    }, p4f['dispose'] = function () {
      var by_8r = n7f6['_audioCache'][this['url']];by_8r && (by_8r['src'] = '', delete n7f6['_audioCache'][this['url']]);
    }, $m7i(0x0, p4f, 'duration', function () {
      return this['_sound']['duration'];
    }), n7f6['_createSound'] = function () {
      n7f6['_id']++;var xzs = toyzed['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return xzs;
    }, n7f6['_musicAudio'] = null, n7f6['_id'] = 0x0, n7f6['_audioCache'] = {}, n7f6['_null'] = undefined, n7f6;
  }(stexz),
      mij3q$ = function (hg41) {
    function axes(p6g14h) {
      this['_audio'] = null, this['_onEnd'] = null, axes['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = p6g14h, this['_onEnd'] = ezxsat['bind'](this['__onEnd'], this), p6g14h['onEnded'](this['_onEnd']);
    }x1as9h(axes, 'laya.wx.mini.MiniSoundChannel', hg41);var l46n = axes['prototype'];return l46n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xh9p1s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, l46n['__onNull'] = function () {}, l46n['play'] = function () {
      this['isStopped'] = ![], br85_k['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, l46n['stop'] = function () {
      this['isStopped'] = !![], br85_k['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, l46n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, l46n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], br85_k['addChannel'](this), this['_audio']['play']();
    }, $m7i(0x0, l46n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $m7i(0x0, l46n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $m7i(0x0, l46n, 'volume', function () {
      return 0x1;
    }, function (lfiv) {}), axes['_null'] = undefined, axes;
  }(b8_kr),
      mqi3 = function () {
    function g1h9p() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = toyzed['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }x1as9h(g1h9p, 'laya.wx.mini.MiniVideo');var vlnf = g1h9p['prototype'];return vlnf['on'] = function (ruw5_2, xzs9e, xzas9) {
      if (ruw5_2 == 'loadedmetadata') this['onPlayFunc'] = xzas9['bind'](xzs9e), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else ruw5_2 == 'ended' && (this['onEndedFunC'] = xzas9['bind'](xzs9e), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, vlnf['onTimeUpdateFunc'] = function (setaz) {
      this['position'] = setaz['position'], this['_duration'] = setaz['duration'];
    }, vlnf['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, vlnf['onended'] = function (d8boky, phg4) {
      this['onEndedFunC'] = phg4['bind'](d8boky), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, vlnf['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, vlnf['off'] = function (fgv4l6, odytez, hg94) {
      if (fgv4l6 == 'loadedmetadata') this['onPlayFunc'] = hg94['bind'](odytez), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else fgv4l6 == 'ended' && (this['onEndedFunC'] = hg94['bind'](odytez), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, vlnf['load'] = function (mq3in) {
      if (!this['videoElement']) return;this['videoElement']['src'] = mq3in;
    }, vlnf['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, vlnf['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, vlnf['size'] = function (eodtz, imlvn) {
      if (!this['videoElement']) return;this['videoElement']['width'] = eodtz, this['videoElement']['height'] = imlvn;
    }, vlnf['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, vlnf['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, $m7i(0x0, vlnf, 'duration', function () {
      return this['_duration'];
    }), $m7i(0x0, vlnf, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (lm) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = lm;
    }), $m7i(0x0, vlnf, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), $m7i(0x0, vlnf, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), $m7i(0x0, vlnf, 'ended', function () {
      return this['videoend'];
    }), $m7i(0x0, vlnf, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (sea19) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = sea19;
    }), $m7i(0x0, vlnf, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (texzs) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = texzs;
    }), $m7i(0x0, vlnf, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (zotae) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = zotae;
    }), $m7i(0x0, vlnf, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), $m7i(0x0, vlnf, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (g6hp14) {
      if (!this['videoElement']) return;this['videoElement']['x'] = g6hp14;
    }), $m7i(0x0, vlnf, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (b_ky8) {
      if (!this['videoElement']) return;this['videoElement']['y'] = b_ky8;
    }), $m7i(0x0, vlnf, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), $m7i(0x0, vlnf, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (phf64g) {
      if (!this['videoElement']) return;this['videoElement']['src'] = phf64g;
    }), $m7i(0x0, vlnf, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (setazx) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = setazx;
    }), $m7i(0x0, vlnf, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (flvg6) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = flvg6;
    }), g1h9p;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var linv7m in Laya) {
    var zdyko = Laya[linv7m];zdyko && zdyko['__isclass'] && (exports[linv7m] = zdyko);
  }
});