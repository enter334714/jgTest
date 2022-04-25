var J = wx.h$;
(function (window, document, fp) {
  var q5ory = fp['un'],
      kgd80 = fp['uns'],
      zcp = fp['static'],
      jn1i7 = fp['class'],
      mu3l4a = fp['getset'],
      o05bqy = fp['__newvec'],
      tcpz = laya['utils']['Browser'],
      vjyo7 = laya['events']['Event'],
      ni13x = laya['events']['EventDispatcher'],
      g05bqk = laya['resource']['HTMLImage'],
      f_pw = laya['utils']['Handler'],
      dk6bg = laya['display']['Input'],
      _tepz = laya['net']['Loader'],
      _zpe2 = laya['maths']['Matrix'],
      tc86dh = laya['renders']['Render'],
      $9wf_ = laya['utils']['RunDriver'],
      jnx7i1 = laya['media']['Sound'],
      $fws29 = laya['media']['SoundChannel'],
      _epwz = laya['media']['SoundManager'],
      t8dh6c = laya['display']['Stage'],
      i7jrv = laya['net']['URL'],
      peth_z = laya['utils']['Utils'],
      w9f_$2 = function () {
    function qk5gb() {}return jn1i7(qk5gb, 'laya.wx.mini.MiniAdpter'), qk5gb['getJson'] = function (yjor7) {
      return JSON['parse'](yjor7);
    }, qk5gb['init'] = function (czeh, gb6k0) {
      czeh === void 0x0 && (czeh = ![]), gb6k0 === void 0x0 && (gb6k0 = ![]);if (qk5gb['_inited']) return;qk5gb['window'] = window;if (qk5gb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qk5gb['_inited'] = !![], qk5gb['isZiYu'] = gb6k0, qk5gb['isPosMsgYu'] = czeh, qk5gb['EnvConfig'] = {}, !qk5gb['isZiYu'] && (k6dg8c['setNativeFileDir']('/layaairGame'), k6dg8c['existDir'](k6dg8c['fileNativeDir'], f_pw['create'](qk5gb, qk5gb['onMkdirCallBack']))), qk5gb['window']['focus'] = function () {}, fp['getUrlPath'] = function () {}, qk5gb['window']['logtime'] = function (y0o) {}, qk5gb['window']['alertTimeLog'] = function (b0koq5) {}, qk5gb['window']['resetShareInfo'] = function () {}, qk5gb['window']['CanvasRenderingContext2D'] = function () {}, qk5gb['window']['CanvasRenderingContext2D']['prototype'] = qk5gb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qk5gb['window']['document']['body']['appendChild'] = function () {}, qk5gb['EnvConfig']['pixelRatioInt'] = 0x0, $9wf_['getPixelRatio'] = qk5gb['pixelRatio'], qk5gb['_preCreateElement'] = tcpz['createElement'], tcpz['createElement'] = qk5gb['createElement'], $9wf_['createShaderCondition'] = qk5gb['createShaderCondition'], peth_z['parseXMLFromString'] = qk5gb['parseXMLFromString'], dk6bg['_createInputElement'] = nx1['_createInputElement'], qk5gb['EnvConfig']['load'] = _tepz['prototype']['load'], _tepz['prototype']['load'] = ixn134['prototype']['load'], qk5gb['isZiYu'] && czeh && wx['onMessage'](function (kqbd0g) {
        kqbd0g['isLoad'] && (k6dg8c['ziyuFileData'][kqbd0g['url']] = kqbd0g['data']);
      });
    }, qk5gb['onMkdirCallBack'] = function (gbd6k, tez8ch) {
      if (!gbd6k) k6dg8c['filesListObj'] = JSON['parse'](tez8ch['data']);
    }, qk5gb['pixelRatio'] = function () {
      if (!qk5gb['EnvConfig']['pixelRatioInt']) try {
        var ckdg68 = wx['getSystemInfoSync']();return qk5gb['EnvConfig']['pixelRatioInt'] = ckdg68['pixelRatio'], ckdg68 = ckdg68, ckdg68['pixelRatio'];
      } catch (tc8ehz) {}return qk5gb['EnvConfig']['pixelRatioInt'];
    }, qk5gb['createElement'] = function (gdkc68) {
      if (gdkc68 == 'canvas') {
        var r7yvjo;return qk5gb['idx'] == 0x1 ? qk5gb['isZiYu'] ? (r7yvjo = sharedCanvas, r7yvjo['style'] = {}) : r7yvjo = window['canvas'] : r7yvjo = window['wx']['createCanvas'](), qk5gb['idx']++, r7yvjo;
      } else {
        if (gdkc68 == 'textarea' || gdkc68 == 'input') return qk5gb['onCreateInput'](gdkc68);else {
          if (gdkc68 == 'div') {
            var ct8dg6 = qk5gb['_preCreateElement'](gdkc68);return ct8dg6['contains'] = function (u4m3l) {
              return null;
            }, ct8dg6['removeChild'] = function (pze_) {}, ct8dg6;
          } else return qk5gb['_preCreateElement'](gdkc68);
        }
      }
    }, qk5gb['onCreateInput'] = function (v5ojr) {
      var g8ckd6 = qk5gb['_preCreateElement'](v5ojr);return g8ckd6['focus'] = nx1['wxinputFocus'], g8ckd6['blur'] = nx1['wxinputblur'], g8ckd6['style'] = {}, g8ckd6['value'] = 0x0, g8ckd6['parentElement'] = {}, g8ckd6['placeholder'] = {}, g8ckd6['type'] = {}, g8ckd6['setColor'] = function (kob05) {}, g8ckd6['setType'] = function (zp_2w) {}, g8ckd6['setFontFace'] = function (o05q) {}, g8ckd6['addEventListener'] = function (_f) {}, g8ckd6['contains'] = function (t8d6hc) {
        return null;
      }, g8ckd6['removeChild'] = function (n1u3) {}, g8ckd6;
    }, qk5gb['createShaderCondition'] = function (c68gd) {
      var ehtz8 = this,
          fp2_9 = function () {
        var xn7ij = c68gd;return ehtz8[c68gd['replace']('this.', '')];
      };return fp2_9;
    }, qk5gb['EnvConfig'] = null, qk5gb['window'] = null, qk5gb['_preCreateElement'] = null, qk5gb['_inited'] = ![], qk5gb['wxRequest'] = null, qk5gb['systemInfo'] = null, qk5gb['version'] = '0.0.1', qk5gb['isZiYu'] = ![], qk5gb['isPosMsgYu'] = ![], qk5gb['parseXMLFromString'] = function (f2w$9_) {
      var tpeczh, qry;f2w$9_ = f2w$9_['replace'](/>\s+</g, '><');try {
        tpeczh = new window['Parser']['DOMParser']()['parseFromString'](f2w$9_, 'text/xml');
      } catch (j17nxi) {
        throw '需要引入xml解析库文件';
      }return tpeczh;
    }, qk5gb['idx'] = 0x1, qk5gb;
  }(),
      l4m3 = function () {
    function yq5rb() {}jn1i7(yq5rb, 'laya.wx.mini.MiniImage');var o5rq = yq5rb['prototype'];return o5rq['_loadImage'] = function (yjor5v) {
      var y5or = this,
          g5kq0b = ![];yjor5v['indexOf']('layaNativeDir/') == -0x1 && (g5kq0b = !![], yjor5v = i7jrv['formatURL'](yjor5v));if (!k6dg8c['getFileInfo'](yjor5v)) {
        if (yjor5v['indexOf']('http://') != -0x1 || yjor5v['indexOf']('https://') != -0x1) k6dg8c['downImg'](yjor5v, new f_pw(yq5rb, yq5rb['onDownImgCallBack'], [yjor5v, y5or]), yjor5v);else yq5rb['onCreateImage'](yjor5v, y5or, !![]);
      } else yq5rb['onCreateImage'](yjor5v, y5or, !g5kq0b);
    }, yq5rb['onDownImgCallBack'] = function (pzew, dhct, h6c8zt) {
      if (!h6c8zt) yq5rb['onCreateImage'](pzew, dhct);else dhct['onError'](null);
    }, yq5rb['onCreateImage'] = function (j7xry, ua3n, rvjy7x) {
      rvjy7x === void 0x0 && (rvjy7x = ![]);var qo0by;if (!rvjy7x) {
        var ctzhep = k6dg8c['getFileInfo'](j7xry),
            e_thz = ctzhep['md5'];qo0by = k6dg8c['getFileNativePath'](e_thz);
      } else qo0by = j7xry;if (ua3n['imgCache'] == null) ua3n['imgCache'] = {};var hz_pte;function ethp_() {
        hz_pte['onload'] = null, hz_pte['onerror'] = null, delete ua3n['imgCache'][j7xry];
      };var gkqd = function () {
        ethp_(), ua3n['onLoaded'](hz_pte);
      },
          al431u = function () {
        ethp_(), ua3n['event']('error', 'Load image failed');
      };ua3n['_type'] == 'nativeimage' ? (hz_pte = new tcpz['window']['Image'](), hz_pte['crossOrigin'] = '', hz_pte['onload'] = gkqd, hz_pte['onerror'] = al431u, hz_pte['src'] = qo0by, ua3n['imgCache'][j7xry] = hz_pte) : new g05bqk['create'](qo0by, { 'onload': gkqd, 'onerror': al431u, 'onCreate': function (zte8ch) {
          hz_pte = zte8ch, ua3n['imgCache'][j7xry] = zte8ch;
        } });
    }, yq5rb;
  }(),
      nx1 = function () {
    function pzh2() {}return jn1i7(pzh2, 'laya.wx.mini.MiniInput'), pzh2['_createInputElement'] = function () {
      dk6bg['_initInput'](dk6bg['area'] = tcpz['createElement']('textarea')), dk6bg['_initInput'](dk6bg['input'] = tcpz['createElement']('input')), dk6bg['inputContainer'] = tcpz['createElement']('div'), dk6bg['inputContainer']['style']['position'] = 'absolute', dk6bg['inputContainer']['style']['zIndex'] = 0x186a0, tcpz['container']['appendChild'](dk6bg['inputContainer']), dk6bg['inputContainer']['setPos'] = function (i7rxvj, kgdb) {
        dk6bg['inputContainer']['style']['left'] = i7rxvj + 'px', dk6bg['inputContainer']['style']['top'] = kgdb + 'px';
      }, fp['stage']['on']('resize', null, pzh2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bgq0k) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _epwz['_soundClass'] = hz8c6, _epwz['_musicClass'] = hz8c6, window['_videoClass'] = k0bq;
    }, pzh2['_onStageResize'] = function () {
      var ce8zh = fp['stage']['_canvasTransform']['identity']();ce8zh['scale'](tcpz['width'] / tc86dh['canvas']['width'] / $9wf_['getPixelRatio'](), tcpz['height'] / tc86dh['canvas']['height'] / $9wf_['getPixelRatio']());
    }, pzh2['wxinputFocus'] = function (cg6dt8) {
      var yvr7j = dk6bg['inputElement']['target'];if (yvr7j && !yvr7j['editable']) return;w9f_$2['window']['wx']['offKeyboardConfirm'](), w9f_$2['window']['wx']['offKeyboardInput'](), w9f_$2['window']['wx']['showKeyboard']({ 'defaultValue': yvr7j['text'], 'maxLength': yvr7j['maxChars'], 'multiple': yvr7j['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gk5q) {}, 'fail': function (z8cte) {} }), w9f_$2['window']['wx']['onKeyboardConfirm'](function (kg6c8) {
        var vjx7ri = kg6c8 ? kg6c8['value'] : '';yvr7j['text'] = vjx7ri, yvr7j['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), w9f_$2['window']['wx']['onKeyboardInput'](function (u1an3) {
        var e_w2z = u1an3 ? u1an3['value'] : '';if (!yvr7j['multiline']) {
          if (e_w2z['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yvr7j['text'] = e_w2z, yvr7j['event']('input');
      });
    }, pzh2['inputEnter'] = function () {
      dk6bg['inputElement']['target']['focus'] = ![];
    }, pzh2['wxinputblur'] = function () {
      pzh2['hideKeyboard']();
    }, pzh2['hideKeyboard'] = function () {
      w9f_$2['window']['wx']['offKeyboardConfirm'](), w9f_$2['window']['wx']['offKeyboardInput'](), w9f_$2['window']['wx']['hideKeyboard']({ 'success': function (w_z2) {
          console['log']('隐藏键盘');
        }, 'fail': function (oyrjv) {
          console['log']('隐藏键盘出错:' + (oyrjv ? oyrjv['errMsg'] : ''));
        } });
    }, pzh2;
  }(),
      ixn134 = function () {
    function jy7orv() {}jn1i7(jy7orv, 'laya.wx.mini.MiniLoader');var echpzt = jy7orv['prototype'];return echpzt['load'] = function (bgq, c8t6d, heczp, c68dth, ptz_) {
      heczp === void 0x0 && (heczp = !![]), ptz_ === void 0x0 && (ptz_ = ![]);var w$f2s = this;w$f2s['_url'] = bgq;if (bgq['indexOf']('data:image') === 0x0) w$f2s['_type'] = c8t6d = 'image';else w$f2s['_type'] = c8t6d || (c8t6d = w$f2s['getTypeFromUrl'](bgq));w$f2s['_cache'] = heczp, w$f2s['_data'] = null;var jyvx = 'ascii';if (bgq['indexOf']('.fnt') != -0x1) jyvx = 'utf8';else c8t6d == 'arraybuffer' && (jyvx = '');;var g68dtc = peth_z['getFileExtension'](bgq);if (jy7orv['_fileTypeArr']['indexOf'](g68dtc) != -0x1) w9f_$2['EnvConfig']['load']['call'](this, bgq, c8t6d, heczp, c68dth, ptz_);else {
        if (!k6dg8c['getFileInfo'](bgq)) {
          if (bgq['indexOf']('layaNativeDir/') != -0x1) {
            if (w9f_$2['isZiYu']) {
              var y7jo = k6dg8c['ziyuFileData'][bgq];w$f2s['onLoaded'](y7jo);return;
            } else {
              cosnole['log']('read read'), k6dg8c['read'](bgq, jyvx, new f_pw(jy7orv, jy7orv['onReadNativeCallBack'], [jyvx, bgq, c8t6d, heczp, c68dth, ptz_, w$f2s]));return;
            }
          }if (i7jrv['rootPath'] == '') var a41lu = bgq;else a41lu = bgq['split'](i7jrv['rootPath'])[0x0];bgq['indexOf']('http://') != -0x1 || bgq['indexOf']('https://') != -0x1 ? w9f_$2['EnvConfig']['load']['call'](w$f2s, bgq, c8t6d, heczp, c68dth, ptz_) : k6dg8c['readFile'](a41lu, jyvx, new f_pw(jy7orv, jy7orv['onReadNativeCallBack'], [jyvx, bgq, c8t6d, heczp, c68dth, ptz_, w$f2s]), bgq);
        } else w9f_$2['EnvConfig']['load']['call'](this, bgq, c8t6d, heczp, c68dth, ptz_);
      }
    }, echpzt['resMgrLoad'] = function (zt_ph, yo50b, xvnij, tcezh, oyrv5q, _9pwe, zwpe) {
      xvnij === void 0x0 && (xvnij = 0x0), tcezh === void 0x0 && (tcezh = ![]), oyrv5q === void 0x0 && (oyrv5q = ![]), _9pwe === void 0x0 && (_9pwe = 0x0), zwpe === void 0x0 && (zwpe = 0x3), zt_ph['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zt_ph), w9f_$2['EnvConfig']['resMgrLoad'](zt_ph, (w$f_29, ivn7j, epzht) => {
        jy7orv['prototype']['resMgrLoadCallBack'](w$f_29, ivn7j, epzht, yo50b);
      }, xvnij, tcezh, oyrv5q, _9pwe, zwpe);
    }, echpzt['resMgrLoadCallBack'] = function (c86htd, _hz2p, vjr7i, _w9p2f) {
      console['log']('buff:::', c86htd, vjr7i, k6dg8c['fileNativeDir'] + '///' + k6dg8c['fileListName']), _w9p2f(c86htd, _hz2p, vjr7i);
    }, echpzt['clearRes'] = function (g60k, g60db) {
      g60db === void 0x0 && (g60db = ![]);var dk6g8c = this;dk6g8c['clearRes'](g60k, g60db);var dt86ch = k6dg8c['getFileInfo'](g60k);if (dt86ch && (g60k['indexOf']('http://') != -0x1 || g60k['indexOf']('https://') != -0x1)) {
        var ko0bq = dt86ch['md5'],
            _e2hzp = k6dg8c['getFileNativePath'](ko0bq);k6dg8c['remove'](_e2hzp);
      }
    }, jy7orv['onReadNativeCallBack'] = function (wf9_, xijv7, rivxj7, kdg86c, yvj5, e29_w, vxrj, h_pz2e, _f92$w) {
      kdg86c === void 0x0 && (kdg86c = !![]), e29_w === void 0x0 && (e29_w = ![]), h_pz2e === void 0x0 && (h_pz2e = 0x0);if (!h_pz2e) {
        var x17nji;if (rivxj7 == 'json' || rivxj7 == 'atlas') x17nji = w9f_$2['getJson'](_f92$w['data']);else rivxj7 == 'xml' ? x17nji = peth_z['parseXMLFromString'](_f92$w['data']) : x17nji = _f92$w['data'];vxrj['onLoaded'](x17nji), !w9f_$2['isZiYu'] && w9f_$2['isPosMsgYu'] && rivxj7 != 'arraybuffer' && wx['postMessage']({ 'url': xijv7, 'data': x17nji, 'isLoad': !![] });
      } else h_pz2e == 0x1 && w9f_$2['EnvConfig']['load']['call'](vxrj, xijv7, rivxj7, kdg86c, yvj5, e29_w);
    }, zcp(jy7orv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jy7orv;
  }(),
      k6dg8c = function (kqd) {
    function thc8e() {
      thc8e['__super']['call'](this);;
    }return jn1i7(thc8e, 'laya.wx.mini.MiniFileMgr', kqd), thc8e['isLoadFile'] = function (yqb5o0) {
      return thc8e['_fileTypeArr']['indexOf'](yqb5o0) != -0x1 ? !![] : ![];
    }, thc8e['getFileInfo'] = function (irj7xv) {
      var w$2s9f = irj7xv['split']('?')[0x0],
          qk0ob = thc8e['filesListObj'][w$2s9f];if (qk0ob == null) return null;else return qk0ob;return null;
    }, thc8e['onFileUpdate'] = function (xjrvi7, z2we_p) {
      var epzch = xjrvi7['split']('/'),
          _hpet = epzch[epzch['length'] - 0x1],
          ybo05q = thc8e['getFileInfo'](z2we_p);if (ybo05q == null) thc8e['onSaveFile'](z2we_p, _hpet);else {
        if (ybo05q['readyUrl'] != z2we_p) thc8e['remove'](_hpet, z2we_p);
      }
    }, thc8e['exits'] = function (bg0qk, x7jrv) {
      var g5 = thc8e['getFileNativePath'](bg0qk);thc8e['fs']['getFileInfo']({ 'filePath': g5, 'success': function (zehptc) {
          x7jrv != null && x7jrv['runWith']([0x0, zehptc]);
        }, 'fail': function (e8hc) {
          x7jrv != null && x7jrv['runWith']([0x1, e8hc]);
        } });
    }, thc8e['read'] = function (zche8, zpcth, pctezh, i7vnjx) {
      zpcth === void 0x0 && (zpcth = 'ascill'), i7vnjx === void 0x0 && (i7vnjx = '');var jyo5vr;i7vnjx != '' ? jyo5vr = thc8e['getFileNativePath'](zche8) : jyo5vr = zche8, thc8e['fs']['readFile']({ 'filePath': jyo5vr, 'encoding': zpcth, 'success': function (w2ezp_) {
          pctezh != null && pctezh['runWith']([0x0, w2ezp_]);
        }, 'fail': function (gcd86k) {
          if (gcd86k && i7vnjx != '') thc8e['down'](i7vnjx, zpcth, pctezh, i7vnjx);else pctezh != null && pctezh['runWith']([0x1]);
        } });
    }, thc8e['readNativeFile'] = function (oqk0b, _$2f9w) {
      thc8e['fs']['readFile']({ 'filePath': oqk0b, 'encoding': '', 'success': function (vnix) {
          _$2f9w != null && _$2f9w['runWith']([0x0]);
        }, 'fail': function (oyj) {
          _$2f9w != null && _$2f9w['runWith']([0x1]);
        } });
    }, thc8e['down'] = function (zpec, n14u3i, g5k0qb, o7jyr) {
      n14u3i === void 0x0 && (n14u3i = 'ascill'), o7jyr === void 0x0 && (o7jyr = '');var i71n4x = thc8e['getFileNativePath'](o7jyr),
          td8h = thc8e['wxdown']({ 'url': zpec, 'filePath': i71n4x, 'success': function (xjin7) {
          if (xjin7['statusCode'] === 0xc8) thc8e['readFile'](xjin7['filePath'], n14u3i, g5k0qb, o7jyr);
        }, 'fail': function (t8cd6) {
          g5k0qb != null && g5k0qb['runWith']([0x1, t8cd6]);
        } });td8h['onProgressUpdate'](function (h8ct) {
        g5k0qb != null && g5k0qb['runWith']([0x2, h8ct['progress']]);
      });
    }, thc8e['readFile'] = function (_2fp, j7ri, c8dt6h, dgt86c) {
      j7ri === void 0x0 && (j7ri = 'ascill'), dgt86c === void 0x0 && (dgt86c = ''), thc8e['fs']['readFile']({ 'filePath': _2fp, 'encoding': j7ri, 'success': function (la1u3) {
          if (_2fp['indexOf']('http://') != -0x1 || _2fp['indexOf']('https://') != -0x1) thc8e['onFileUpdate'](_2fp, dgt86c);c8dt6h != null && c8dt6h['runWith']([0x0, la1u3]);
        }, 'fail': function (xi7jr) {
          if (xi7jr) c8dt6h != null && c8dt6h['runWith']([0x1, xi7jr]);
        } });
    }, thc8e['downImg'] = function (zeh_p2, $w2f, ehpc) {
      ehpc === void 0x0 && (ehpc = '');var ect = thc8e['wxdown']({ 'url': zeh_p2, 'success': function (u4a31l) {
          u4a31l['statusCode'] === 0xc8 && thc8e['copyFile'](u4a31l['tempFilePath'], ehpc, $w2f);
        }, 'fail': function (bg6kd) {
          $w2f != null && $w2f['runWith']([0x1, bg6kd]);
        } });
    }, thc8e['copyFile'] = function (bq05yo, bq05gk, f_9w$) {
      var kq05 = bq05yo['split']('/'),
          jivnx7 = kq05[kq05['length'] - 0x1],
          h8eczt = bq05gk['split']('?')[0x0],
          xv7ij = thc8e['getFileInfo'](bq05gk),
          yvj7xr = thc8e['getFileNativePath'](jivnx7);thc8e['fs']['copyFile']({ 'srcPath': bq05yo, 'destPath': yvj7xr, 'success': function (aul4m) {
          if (!xv7ij) thc8e['onSaveFile'](bq05gk, jivnx7), f_9w$ != null && f_9w$['runWith']([0x0]);else {
            if (xv7ij['readyUrl'] != bq05gk) thc8e['remove'](jivnx7, bq05gk, f_9w$);
          }
        }, 'fail': function (ep_z2) {
          f_9w$ != null && f_9w$['runWith']([0x1, ep_z2]);
        } });
    }, thc8e['getFileNativePath'] = function (pw92f) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pw92f;
    }, thc8e['remove'] = function (wp29e_, niv, c8d6t) {
      niv === void 0x0 && (niv = '');var c6htd = thc8e['getFileInfo'](niv),
          hztc8e = thc8e['getFileNativePath'](c6htd['md5']);fp['loader']['clearRes'](c6htd['readyUrl']), thc8e['fs']['unlink']({ 'filePath': hztc8e, 'success': function (_p92fw) {
          if (niv != '') thc8e['onSaveFile'](niv, wp29e_);c8d6t != null && c8d6t['runWith']([0x0]);
        }, 'fail': function (q5byro) {} });
    }, thc8e['onSaveFile'] = function (qb5y, yoq0) {
      var ryxv = qb5y['split']('?')[0x0];thc8e['filesListObj'][ryxv] = { 'md5': yoq0, 'readyUrl': qb5y }, thc8e['fs']['writeFile']({ 'filePath': thc8e['fileNativeDir'] + '/' + thc8e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](thc8e['filesListObj']), 'success': function (czethp) {
          console['log']('写入测试测试成功：', czethp);
        }, 'fail': function (yb0o5q) {
          console['log']('写入测试测试失败：', yb0o5q);
        } });
    }, thc8e['existDir'] = function (xj7nvi, thc86z) {
      thc8e['fs']['mkdir']({ 'dirPath': xj7nvi, 'success': function (xj7yvr) {
          thc86z != null && thc86z['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qg0kbd) {
          if (qg0kbd['errMsg']['indexOf']('file already exists') != -0x1) thc8e['readSync'](thc8e['fileListName'], 'utf8', thc86z);else thc86z != null && thc86z['runWith']([0x1, qg0kbd]);
        } });
    }, thc8e['readSync'] = function (un1i, $fs, tz8h6, t68dgc) {
      $fs === void 0x0 && ($fs = 'ascill'), t68dgc === void 0x0 && (t68dgc = '');var f9_2$w = thc8e['getFileNativePath'](un1i),
          xvnij7;try {
        xvnij7 = thc8e['fs']['readFileSync'](f9_2$w), tz8h6 != null && tz8h6['runWith']([0x0, { 'data': xvnij7 }]);
      } catch (fsw2$9) {
        tz8h6 != null && tz8h6['runWith']([0x1]);
      }
    }, thc8e['readCache'] = function () {}, thc8e['writeCache'] = function (w2zp) {
      var w_2pf = readyUrl['split']('?')[0x0];thc8e['filesListObj'][w_2pf] = { 'md5': md5Name, 'readyUrl': readyUrl }, thc8e['fs']['writeFile']({ 'filePath': thc8e['fileNativeDir'] + '/' + thc8e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](thc8e['filesListObj']), 'success': function (v7yroj) {}, 'fail': function (b05gk) {} });
    }, thc8e['setNativeFileDir'] = function (pztec) {
      thc8e['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pztec;
    }, thc8e['filesListObj'] = {}, thc8e['fileNativeDir'] = null, thc8e['fileListName'] = 'layaairfiles.txt', thc8e['ziyuFileData'] = {}, zcp(thc8e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), thc8e;
  }(ni13x),
      hz8c6 = function (_9w2pe) {
    function hz8cet() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], hz8cet['__super']['call'](this), this['_sound'] = hz8cet['_createSound'](), this['_chanell'] = new rji7(this['_sound']);
    }jn1i7(hz8cet, 'laya.wx.mini.MiniSound', _9w2pe);var _2pwz = hz8cet['prototype'];return _2pwz['load'] = function (h_te) {
      var zht_pe = this;h_te = i7jrv['formatURL'](h_te), this['url'] = h_te;if (hz8cet['_audioCache'][h_te]) {
        this['event']('complete');return;
      }function gbq0() {
        if (hz8cet['_null'] != undefined) zht_pe['_sound']['onCanplay'](hz8cet['_null']), zht_pe['_sound']['onError'](hz8cet['_null']);else try {
          zht_pe['_sound']['onCanplay'](null), zht_pe['_sound']['onError'](null), hz8cet['_null'] = null;
        } catch (nu4i1) {
          console['warn']('[wxmini] _clearSound:' + nu4i1), zht_pe['_sound']['onCanplay'](oqyrv5), zht_pe['_sound']['onError'](oqyrv5), hz8cet['_null'] = oqyrv5;
        }
      }function l1a3() {
        jnx71['loaded'] = !![], jnx71['event']('complete'), hz8cet['_audioCache'][jnx71['url']] = jnx71;
      }function pwze2(_w9p2e) {
        console['error']('errCode=' + _w9p2e['errCode'] + '  errMsg=' + _w9p2e['errMsg']), jnx71['event']('error');
      }function oqyrv5() {}this['_sound']['onCanplay'](l1a3), this['_sound']['onError'](pwze2), this['_sound']['src'] = h_te;var jnx71 = this;
    }, _2pwz['play'] = function (v7ir, lua4m) {
      v7ir === void 0x0 && (v7ir = 0x0), lua4m === void 0x0 && (lua4m = 0x0);var yorj7, q0bkgd;if (this['url'] == _epwz['_tMusic']) {
        if (!hz8cet['_musicAudio']) hz8cet['_musicAudio'] = this['_sound'];yorj7 = hz8cet['_musicAudio'], q0bkgd = this['_chanell'];
      } else yorj7 = this['_sound'], q0bkgd = this['_chanell'];return yorj7['src'] = this['url'], yorj7['startTime'] = 0x0, q0bkgd['isStopped'] && (q0bkgd['url'] = this['url'], q0bkgd['loops'] = lua4m, q0bkgd['startTime'] = v7ir, q0bkgd['play'](), _epwz['addChannel'](q0bkgd)), q0bkgd;
    }, _2pwz['dispose'] = function () {
      var o5k = hz8cet['_audioCache'][this['url']];o5k && (o5k['src'] = '', delete hz8cet['_audioCache'][this['url']]);
    }, mu3l4a(0x0, _2pwz, 'duration', function () {
      return this['_sound']['duration'];
    }), hz8cet['_createSound'] = function () {
      hz8cet['_id']++;var xvjir7 = w9f_$2['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return xvjir7;
    }, hz8cet['_musicAudio'] = null, hz8cet['_id'] = 0x0, hz8cet['_audioCache'] = {}, hz8cet['_null'] = undefined, hz8cet;
  }(ni13x),
      rji7 = function (_tzep) {
    function vroy5q(vjy7x) {
      this['_audio'] = null, this['_onEnd'] = null, vroy5q['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vjy7x, this['_onEnd'] = peth_z['bind'](this['__onEnd'], this), vjy7x['onEnded'](this['_onEnd']);
    }jn1i7(vroy5q, 'laya.wx.mini.MiniSoundChannel', _tzep);var u3a1n = vroy5q['prototype'];return u3a1n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fp['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, u3a1n['__onNull'] = function () {}, u3a1n['play'] = function () {
      this['isStopped'] = ![], _epwz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, u3a1n['stop'] = function () {
      this['isStopped'] = !![], _epwz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, u3a1n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, u3a1n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _epwz['addChannel'](this), this['_audio']['play']();
    }, mu3l4a(0x0, u3a1n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mu3l4a(0x0, u3a1n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mu3l4a(0x0, u3a1n, 'volume', function () {
      return 0x1;
    }, function (jx17i) {}), vroy5q['_null'] = undefined, vroy5q;
  }($fws29),
      k0bq = function () {
    function cg6dk8() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = w9f_$2['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }jn1i7(cg6dk8, 'laya.wx.mini.MiniVideo');var j7vyo = cg6dk8['prototype'];return j7vyo['on'] = function (qdkg0b, _9$2w, u3l1) {
      if (qdkg0b == 'loadedmetadata') this['onPlayFunc'] = u3l1['bind'](_9$2w), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else qdkg0b == 'ended' && (this['onEndedFunC'] = u3l1['bind'](_9$2w), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, j7vyo['onTimeUpdateFunc'] = function (nv7x) {
      this['position'] = nv7x['position'], this['_duration'] = nv7x['duration'];
    }, j7vyo['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, j7vyo['onended'] = function (rvyxj, dq0b) {
      this['onEndedFunC'] = dq0b['bind'](rvyxj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, j7vyo['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, j7vyo['off'] = function (qob5, g8dk6c, t_ez) {
      if (qob5 == 'loadedmetadata') this['onPlayFunc'] = t_ez['bind'](g8dk6c), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else qob5 == 'ended' && (this['onEndedFunC'] = t_ez['bind'](g8dk6c), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, j7vyo['load'] = function (e9w_2) {
      if (!this['videoElement']) return;this['videoElement']['src'] = e9w_2;
    }, j7vyo['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, j7vyo['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, j7vyo['size'] = function (o5kq0, hc6d8) {
      if (!this['videoElement']) return;this['videoElement']['width'] = o5kq0, this['videoElement']['height'] = hc6d8;
    }, j7vyo['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, j7vyo['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, mu3l4a(0x0, j7vyo, 'duration', function () {
      return this['_duration'];
    }), mu3l4a(0x0, j7vyo, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (e_z2) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = e_z2;
    }), mu3l4a(0x0, j7vyo, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), mu3l4a(0x0, j7vyo, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), mu3l4a(0x0, j7vyo, 'ended', function () {
      return this['videoend'];
    }), mu3l4a(0x0, j7vyo, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (d86cg) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = d86cg;
    }), mu3l4a(0x0, j7vyo, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (jvyrx7) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = jvyrx7;
    }), mu3l4a(0x0, j7vyo, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (w9sf) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = w9sf;
    }), mu3l4a(0x0, j7vyo, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), mu3l4a(0x0, j7vyo, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (luma43) {
      if (!this['videoElement']) return;this['videoElement']['x'] = luma43;
    }), mu3l4a(0x0, j7vyo, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (y50o) {
      if (!this['videoElement']) return;this['videoElement']['y'] = y50o;
    }), mu3l4a(0x0, j7vyo, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), mu3l4a(0x0, j7vyo, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (i7v) {
      if (!this['videoElement']) return;this['videoElement']['src'] = i7v;
    }), mu3l4a(0x0, j7vyo, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (bg5k0q) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = bg5k0q;
    }), mu3l4a(0x0, j7vyo, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (xni714) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = xni714;
    }), cg6dk8;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qbdgk in Laya) {
    var o5yvj = Laya[qbdgk];o5yvj && o5yvj['__isclass'] && (exports[qbdgk] = o5yvj);
  }
});