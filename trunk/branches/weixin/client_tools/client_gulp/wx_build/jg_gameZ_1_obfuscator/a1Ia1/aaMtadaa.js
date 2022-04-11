var C = wx.$a;
(function (window, document, qcrsv_) {
  var tbhxi = qcrsv_['un'],
      lyfk = qcrsv_['uns'],
      jm4z_ = qcrsv_['static'],
      ql0v$r = qcrsv_['class'],
      ixh5to = qcrsv_['getset'],
      mi5d4 = qcrsv_['__newvec'],
      lvk$q0 = laya['utils']['Browser'],
      ti5oh = laya['events']['Event'],
      bx82op = laya['events']['EventDispatcher'],
      e8pn32 = laya['resource']['HTMLImage'],
      ht5iox = laya['utils']['Handler'],
      otihd = laya['display']['Input'],
      id5ht = laya['net']['Loader'],
      i5djm = laya['maths']['Matrix'],
      it4d5j = laya['renders']['Render'],
      hbtio = laya['utils']['RunDriver'],
      dij45t = laya['media']['Sound'],
      jm45dz = laya['media']['SoundChannel'],
      ij5d = laya['media']['SoundManager'],
      h5tix = laya['display']['Stage'],
      hdto = laya['net']['URL'],
      ibxto = laya['utils']['Utils'],
      f176y = function () {
    function yf0l6() {}return ql0v$r(yf0l6, 'laya.wx.mini.MiniAdpter'), yf0l6['getJson'] = function (dzmj4) {
      return JSON['parse'](dzmj4);
    }, yf0l6['init'] = function (f61u7y, ioht) {
      f61u7y === void 0x0 && (f61u7y = ![]), ioht === void 0x0 && (ioht = ![]);if (yf0l6['_inited']) return;yf0l6['window'] = window;if (yf0l6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yf0l6['_inited'] = !![], yf0l6['isZiYu'] = ioht, yf0l6['isPosMsgYu'] = f61u7y, yf0l6['EnvConfig'] = {}, !yf0l6['isZiYu'] && (n3eg82['setNativeFileDir']('/layaairGame'), n3eg82['existDir'](n3eg82['fileNativeDir'], ht5iox['create'](yf0l6, yf0l6['onMkdirCallBack']))), yf0l6['window']['focus'] = function () {}, qcrsv_['getUrlPath'] = function () {}, yf0l6['window']['logtime'] = function ($yf0) {}, yf0l6['window']['alertTimeLog'] = function (kly$f0) {}, yf0l6['window']['resetShareInfo'] = function () {}, yf0l6['window']['CanvasRenderingContext2D'] = function () {}, yf0l6['window']['CanvasRenderingContext2D']['prototype'] = yf0l6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yf0l6['window']['document']['body']['appendChild'] = function () {}, yf0l6['EnvConfig']['pixelRatioInt'] = 0x0, hbtio['getPixelRatio'] = yf0l6['pixelRatio'], yf0l6['_preCreateElement'] = lvk$q0['createElement'], lvk$q0['createElement'] = yf0l6['createElement'], hbtio['createShaderCondition'] = yf0l6['createShaderCondition'], ibxto['parseXMLFromString'] = yf0l6['parseXMLFromString'], otihd['_createInputElement'] = d4mi['_createInputElement'], yf0l6['EnvConfig']['load'] = id5ht['prototype']['load'], id5ht['prototype']['load'] = lk6yf['prototype']['load'], yf0l6['isZiYu'] && f61u7y && wx['onMessage'](function (sc_9rq) {
        sc_9rq['isLoad'] && (n3eg82['ziyuFileData'][sc_9rq['url']] = sc_9rq['data']);
      });
    }, yf0l6['onMkdirCallBack'] = function (yw67u1, jt5i4d) {
      if (!yw67u1) n3eg82['filesListObj'] = JSON['parse'](jt5i4d['data']);
    }, yf0l6['pixelRatio'] = function () {
      if (!yf0l6['EnvConfig']['pixelRatioInt']) try {
        var e8ng = wx['getSystemInfoSync']();return yf0l6['EnvConfig']['pixelRatioInt'] = e8ng['pixelRatio'], e8ng = e8ng, e8ng['pixelRatio'];
      } catch (jz9md4) {}return yf0l6['EnvConfig']['pixelRatioInt'];
    }, yf0l6['createElement'] = function (fkyl6) {
      if (fkyl6 == 'canvas') {
        var j5t4d;return yf0l6['idx'] == 0x1 ? yf0l6['isZiYu'] ? (j5t4d = sharedCanvas, j5t4d['style'] = {}) : j5t4d = window['canvas'] : j5t4d = window['wx']['createCanvas'](), yf0l6['idx']++, j5t4d;
      } else {
        if (fkyl6 == 'textarea' || fkyl6 == 'input') return yf0l6['onCreateInput'](fkyl6);else {
          if (fkyl6 == 'div') {
            var xbht = yf0l6['_preCreateElement'](fkyl6);return xbht['contains'] = function (rs9qc_) {
              return null;
            }, xbht['removeChild'] = function (y0lk6f) {}, xbht;
          } else return yf0l6['_preCreateElement'](fkyl6);
        }
      }
    }, yf0l6['onCreateInput'] = function (qlvs$r) {
      var k7f0y = yf0l6['_preCreateElement'](qlvs$r);return k7f0y['focus'] = d4mi['wxinputFocus'], k7f0y['blur'] = d4mi['wxinputblur'], k7f0y['style'] = {}, k7f0y['value'] = 0x0, k7f0y['parentElement'] = {}, k7f0y['placeholder'] = {}, k7f0y['type'] = {}, k7f0y['setColor'] = function (b28np) {}, k7f0y['setType'] = function (yfl$k) {}, k7f0y['setFontFace'] = function (d9zm) {}, k7f0y['addEventListener'] = function (e2bn) {}, k7f0y['contains'] = function (_vsqc) {
        return null;
      }, k7f0y['removeChild'] = function (vr0) {}, k7f0y;
    }, yf0l6['createShaderCondition'] = function (ithod5) {
      var csrvq = this,
          e8n3 = function () {
        var yl06fk = ithod5;return csrvq[ithod5['replace']('this.', '')];
      };return e8n3;
    }, yf0l6['EnvConfig'] = null, yf0l6['window'] = null, yf0l6['_preCreateElement'] = null, yf0l6['_inited'] = ![], yf0l6['wxRequest'] = null, yf0l6['systemInfo'] = null, yf0l6['version'] = '0.0.1', yf0l6['isZiYu'] = ![], yf0l6['isPosMsgYu'] = ![], yf0l6['parseXMLFromString'] = function (r_9sc) {
      var _4m9z, idh45;r_9sc = r_9sc['replace'](/>\s+</g, '><');try {
        _4m9z = new window['Parser']['DOMParser']()['parseFromString'](r_9sc, 'text/xml');
      } catch (b8e2p) {
        throw '需要引入xml解析库文件';
      }return _4m9z;
    }, yf0l6['idx'] = 0x1, yf0l6;
  }(),
      i5ot = function () {
    function sqrcv$() {}ql0v$r(sqrcv$, 'laya.wx.mini.MiniImage');var yu176 = sqrcv$['prototype'];return yu176['_loadImage'] = function (rvls) {
      var ykl0f$ = this,
          phx = ![];rvls['indexOf']('layaNativeDir/') == -0x1 && (phx = !![], rvls = hdto['formatURL'](rvls));if (!n3eg82['getFileInfo'](rvls)) {
        if (rvls['indexOf']('http://') != -0x1 || rvls['indexOf']('https://') != -0x1) n3eg82['downImg'](rvls, new ht5iox(sqrcv$, sqrcv$['onDownImgCallBack'], [rvls, ykl0f$]), rvls);else sqrcv$['onCreateImage'](rvls, ykl0f$, !![]);
      } else sqrcv$['onCreateImage'](rvls, ykl0f$, !phx);
    }, sqrcv$['onDownImgCallBack'] = function (jd5it4, y$0klf, zj_9m) {
      if (!zj_9m) sqrcv$['onCreateImage'](jd5it4, y$0klf);else y$0klf['onError'](null);
    }, sqrcv$['onCreateImage'] = function (ky$f0l, _9rsz, c$vrqs) {
      c$vrqs === void 0x0 && (c$vrqs = ![]);var uwy71;if (!c$vrqs) {
        var jm9z4d = n3eg82['getFileInfo'](ky$f0l),
            io5ht = jm9z4d['md5'];uwy71 = n3eg82['getFileNativePath'](io5ht);
      } else uwy71 = ky$f0l;if (_9rsz['imgCache'] == null) _9rsz['imgCache'] = {};var di5tho;function f6y07() {
        di5tho['onload'] = null, di5tho['onerror'] = null, delete _9rsz['imgCache'][ky$f0l];
      };var q9rsc = function () {
        f6y07(), _9rsz['onLoaded'](di5tho);
      },
          e28pnb = function () {
        f6y07(), _9rsz['event']('error', 'Load image failed');
      };_9rsz['_type'] == 'nativeimage' ? (di5tho = new lvk$q0['window']['Image'](), di5tho['crossOrigin'] = '', di5tho['onload'] = q9rsc, di5tho['onerror'] = e28pnb, di5tho['src'] = uwy71, _9rsz['imgCache'][ky$f0l] = di5tho) : new e8pn32['create'](uwy71, { 'onload': q9rsc, 'onerror': e28pnb, 'onCreate': function (k06y7) {
          di5tho = k06y7, _9rsz['imgCache'][ky$f0l] = k06y7;
        } });
    }, sqrcv$;
  }(),
      d4mi = function () {
    function ohdi() {}return ql0v$r(ohdi, 'laya.wx.mini.MiniInput'), ohdi['_createInputElement'] = function () {
      otihd['_initInput'](otihd['area'] = lvk$q0['createElement']('textarea')), otihd['_initInput'](otihd['input'] = lvk$q0['createElement']('input')), otihd['inputContainer'] = lvk$q0['createElement']('div'), otihd['inputContainer']['style']['position'] = 'absolute', otihd['inputContainer']['style']['zIndex'] = 0x186a0, lvk$q0['container']['appendChild'](otihd['inputContainer']), otihd['inputContainer']['setPos'] = function (mczs9, b8xpn) {
        otihd['inputContainer']['style']['left'] = mczs9 + 'px', otihd['inputContainer']['style']['top'] = b8xpn + 'px';
      }, qcrsv_['stage']['on']('resize', null, ohdi['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kf761) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ij5d['_soundClass'] = lq0r$, ij5d['_musicClass'] = lq0r$;
    }, ohdi['_onStageResize'] = function () {
      var pn2e83 = qcrsv_['stage']['_canvasTransform']['identity']();pn2e83['scale'](lvk$q0['width'] / it4d5j['canvas']['width'] / hbtio['getPixelRatio'](), lvk$q0['height'] / it4d5j['canvas']['height'] / hbtio['getPixelRatio']());
    }, ohdi['wxinputFocus'] = function (b2x8po) {
      var ti5dj4 = otihd['inputElement']['target'];if (ti5dj4 && !ti5dj4['editable']) return;f176y['window']['wx']['offKeyboardConfirm'](), f176y['window']['wx']['offKeyboardInput'](), f176y['window']['wx']['showKeyboard']({ 'defaultValue': ti5dj4['text'], 'maxLength': ti5dj4['maxChars'], 'multiple': ti5dj4['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (g8ne32) {}, 'fail': function (r_scz) {} }), f176y['window']['wx']['onKeyboardConfirm'](function (hp2xb) {
        var cs9rq = hp2xb ? hp2xb['value'] : '';ti5dj4['text'] = cs9rq, ti5dj4['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), f176y['window']['wx']['onKeyboardInput'](function (c9q_) {
        var _rcvsq = c9q_ ? c9q_['value'] : '';if (!ti5dj4['multiline']) {
          if (_rcvsq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ti5dj4['text'] = _rcvsq, ti5dj4['event']('input');
      });
    }, ohdi['inputEnter'] = function () {
      otihd['inputElement']['target']['focus'] = ![];
    }, ohdi['wxinputblur'] = function () {
      ohdi['hideKeyboard']();
    }, ohdi['hideKeyboard'] = function () {
      f176y['window']['wx']['offKeyboardConfirm'](), f176y['window']['wx']['offKeyboardInput'](), f176y['window']['wx']['hideKeyboard']({ 'success': function (u7w6y) {
          console['log']('隐藏键盘');
        }, 'fail': function (kfy0$) {
          console['log']('隐藏键盘出错:' + (kfy0$ ? kfy0$['errMsg'] : ''));
        } });
    }, ohdi;
  }(),
      lk6yf = function () {
    function j4t() {}ql0v$r(j4t, 'laya.wx.mini.MiniLoader');var csqv$ = j4t['prototype'];return csqv$['load'] = function (bhoitx, fky617, fk06ly, cvs_q, lr$0vq) {
      fk06ly === void 0x0 && (fk06ly = !![]), lr$0vq === void 0x0 && (lr$0vq = ![]);var _9crzs = this;_9crzs['_url'] = bhoitx;if (bhoitx['indexOf']('data:image') === 0x0) _9crzs['_type'] = fky617 = 'image';else _9crzs['_type'] = fky617 || (fky617 = _9crzs['getTypeFromUrl'](bhoitx));_9crzs['_cache'] = fk06ly, _9crzs['_data'] = null;var $qrvsc = 'ascii';if (bhoitx['indexOf']('.fnt') != -0x1) $qrvsc = 'utf8';else fky617 == 'arraybuffer' && ($qrvsc = '');;var $svqc = ibxto['getFileExtension'](bhoitx);if (j4t['_fileTypeArr']['indexOf']($svqc) != -0x1) f176y['EnvConfig']['load']['call'](this, bhoitx, fky617, fk06ly, cvs_q, lr$0vq);else {
        if (!n3eg82['getFileInfo'](bhoitx)) {
          if (bhoitx['indexOf']('layaNativeDir/') != -0x1) {
            if (f176y['isZiYu']) {
              var ge2 = n3eg82['ziyuFileData'][bhoitx];_9crzs['onLoaded'](ge2);return;
            } else {
              cosnole['log']('read read'), n3eg82['read'](bhoitx, $qrvsc, new ht5iox(j4t, j4t['onReadNativeCallBack'], [$qrvsc, bhoitx, fky617, fk06ly, cvs_q, lr$0vq, _9crzs]));return;
            }
          }if (hdto['rootPath'] == '') var i5mj4d = bhoitx;else i5mj4d = bhoitx['split'](hdto['rootPath'])[0x0];bhoitx['indexOf']('http://') != -0x1 || bhoitx['indexOf']('https://') != -0x1 ? f176y['EnvConfig']['load']['call'](_9crzs, bhoitx, fky617, fk06ly, cvs_q, lr$0vq) : n3eg82['readFile'](i5mj4d, $qrvsc, new ht5iox(j4t, j4t['onReadNativeCallBack'], [$qrvsc, bhoitx, fky617, fk06ly, cvs_q, lr$0vq, _9crzs]), bhoitx);
        } else f176y['EnvConfig']['load']['call'](this, bhoitx, fky617, fk06ly, cvs_q, lr$0vq);
      }
    }, csqv$['resMgrLoad'] = function (oxp28b, y06kfl, k60yfl, k6y0f7, xb2n, xbhoti, f07k6) {
      k60yfl === void 0x0 && (k60yfl = 0x0), k6y0f7 === void 0x0 && (k6y0f7 = ![]), xb2n === void 0x0 && (xb2n = ![]), xbhoti === void 0x0 && (xbhoti = 0x0), f07k6 === void 0x0 && (f07k6 = 0x3), oxp28b['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', oxp28b), f176y['EnvConfig']['resMgrLoad'](oxp28b, (k17fy6, z5mdj, z9mcs) => {
        j4t['prototype']['resMgrLoadCallBack'](k17fy6, z5mdj, z9mcs, y06kfl);
      }, k60yfl, k6y0f7, xb2n, xbhoti, f07k6);
    }, csqv$['resMgrLoadCallBack'] = function (sq$vrl, box8p2, _svqrc, v$0rql) {
      console['log']('buff:::', sq$vrl, _svqrc, n3eg82['fileNativeDir'] + '///' + n3eg82['fileListName']), v$0rql(sq$vrl, box8p2, _svqrc);
    }, csqv$['clearRes'] = function ($lfky, _qsc) {
      _qsc === void 0x0 && (_qsc = ![]);var v0l$kf = this;v0l$kf['clearRes']($lfky, _qsc);var rq0$v = n3eg82['getFileInfo']($lfky);if (rq0$v && ($lfky['indexOf']('http://') != -0x1 || $lfky['indexOf']('https://') != -0x1)) {
        var hiobx = rq0$v['md5'],
            dtji5 = n3eg82['getFileNativePath'](hiobx);n3eg82['remove'](dtji5);
      }
    }, j4t['onReadNativeCallBack'] = function (bp2ho, dj4i, $vqsr, u1f7y, w6u, k$f0yl, y6k70f, m9c_s, $rqcv) {
      u1f7y === void 0x0 && (u1f7y = !![]), k$f0yl === void 0x0 && (k$f0yl = ![]), m9c_s === void 0x0 && (m9c_s = 0x0);if (!m9c_s) {
        var _srcvq;if ($vqsr == 'json' || $vqsr == 'atlas') _srcvq = f176y['getJson']($rqcv['data']);else $vqsr == 'xml' ? _srcvq = ibxto['parseXMLFromString']($rqcv['data']) : _srcvq = $rqcv['data'];y6k70f['onLoaded'](_srcvq), !f176y['isZiYu'] && f176y['isPosMsgYu'] && $vqsr != 'arraybuffer' && wx['postMessage']({ 'url': dj4i, 'data': _srcvq, 'isLoad': !![] });
      } else m9c_s == 0x1 && f176y['EnvConfig']['load']['call'](y6k70f, dj4i, $vqsr, u1f7y, w6u, k$f0yl);
    }, jm4z_(j4t, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), j4t;
  }(),
      n3eg82 = function (rqcs_) {
    function td5j4i() {
      td5j4i['__super']['call'](this);;
    }return ql0v$r(td5j4i, 'laya.wx.mini.MiniFileMgr', rqcs_), td5j4i['isLoadFile'] = function (yu71f6) {
      return td5j4i['_fileTypeArr']['indexOf'](yu71f6) != -0x1 ? !![] : ![];
    }, td5j4i['getFileInfo'] = function (fykl06) {
      var nep2 = fykl06['split']('?')[0x0],
          pxo8b2 = td5j4i['filesListObj'][nep2];if (pxo8b2 == null) return null;else return pxo8b2;return null;
    }, td5j4i['onFileUpdate'] = function (yf60kl, ly06kf) {
      var rqc9s = yf60kl['split']('/'),
          h4dti = rqc9s[rqc9s['length'] - 0x1],
          y71uf = td5j4i['getFileInfo'](ly06kf);if (y71uf == null) td5j4i['onSaveFile'](ly06kf, h4dti);else {
        if (y71uf['readyUrl'] != ly06kf) td5j4i['remove'](h4dti, ly06kf);
      }
    }, td5j4i['exits'] = function (g23ne, jd9mz4) {
      var dj4z9m = td5j4i['getFileNativePath'](g23ne);td5j4i['fs']['getFileInfo']({ 'filePath': dj4z9m, 'success': function (n32e) {
          jd9mz4 != null && jd9mz4['runWith']([0x0, n32e]);
        }, 'fail': function (h5oitd) {
          jd9mz4 != null && jd9mz4['runWith']([0x1, h5oitd]);
        } });
    }, td5j4i['read'] = function (yk61, qc_s, v$r0, vl$sqr) {
      qc_s === void 0x0 && (qc_s = 'ascill'), vl$sqr === void 0x0 && (vl$sqr = '');var dih5ot;vl$sqr != '' ? dih5ot = td5j4i['getFileNativePath'](yk61) : dih5ot = yk61, td5j4i['fs']['readFile']({ 'filePath': dih5ot, 'encoding': qc_s, 'success': function (l0$vk) {
          v$r0 != null && v$r0['runWith']([0x0, l0$vk]);
        }, 'fail': function (d5t4ih) {
          if (d5t4ih && vl$sqr != '') td5j4i['down'](vl$sqr, qc_s, v$r0, vl$sqr);else v$r0 != null && v$r0['runWith']([0x1]);
        } });
    }, td5j4i['readNativeFile'] = function (svq$, zm4j9) {
      td5j4i['fs']['readFile']({ 'filePath': svq$, 'encoding': '', 'success': function (fy0$l) {
          zm4j9 != null && zm4j9['runWith']([0x0]);
        }, 'fail': function (jimd5) {
          zm4j9 != null && zm4j9['runWith']([0x1]);
        } });
    }, td5j4i['down'] = function (epb2n8, xphto, iohbx, vqsc_r) {
      xphto === void 0x0 && (xphto = 'ascill'), vqsc_r === void 0x0 && (vqsc_r = '');var oxthi5 = td5j4i['getFileNativePath'](vqsc_r),
          lfyk0 = td5j4i['wxdown']({ 'url': epb2n8, 'filePath': oxthi5, 'success': function (cj_9) {
          if (cj_9['statusCode'] === 0xc8) td5j4i['readFile'](cj_9['filePath'], xphto, iohbx, vqsc_r);
        }, 'fail': function (ohtx5i) {
          iohbx != null && iohbx['runWith']([0x1, ohtx5i]);
        } });lfyk0['onProgressUpdate'](function (u1fy7) {
        iohbx != null && iohbx['runWith']([0x2, u1fy7['progress']]);
      });
    }, td5j4i['readFile'] = function (lv0$qk, mdj5z, ng38e2, x2ohb) {
      mdj5z === void 0x0 && (mdj5z = 'ascill'), x2ohb === void 0x0 && (x2ohb = ''), td5j4i['fs']['readFile']({ 'filePath': lv0$qk, 'encoding': mdj5z, 'success': function (cqvrs_) {
          if (lv0$qk['indexOf']('http://') != -0x1 || lv0$qk['indexOf']('https://') != -0x1) td5j4i['onFileUpdate'](lv0$qk, x2ohb);ng38e2 != null && ng38e2['runWith']([0x0, cqvrs_]);
        }, 'fail': function (rvc$sq) {
          if (rvc$sq) ng38e2 != null && ng38e2['runWith']([0x1, rvc$sq]);
        } });
    }, td5j4i['downImg'] = function (h5iotx, vk$0f, o5ihd) {
      o5ihd === void 0x0 && (o5ihd = '');var yw167 = td5j4i['wxdown']({ 'url': h5iotx, 'success': function (yf16) {
          yf16['statusCode'] === 0xc8 && td5j4i['copyFile'](yf16['tempFilePath'], o5ihd, vk$0f);
        }, 'fail': function (oixbh) {
          vk$0f != null && vk$0f['runWith']([0x1, oixbh]);
        } });
    }, td5j4i['copyFile'] = function (rl$vsq, otix5, vc$sqr) {
      var zcrs9_ = rl$vsq['split']('/'),
          yl0fk$ = zcrs9_[zcrs9_['length'] - 0x1],
          _cqr9 = otix5['split']('?')[0x0],
          qlv0k$ = td5j4i['getFileInfo'](otix5),
          bpx82 = td5j4i['getFileNativePath'](yl0fk$);td5j4i['fs']['copyFile']({ 'srcPath': rl$vsq, 'destPath': bpx82, 'success': function (hi5oxt) {
          if (!qlv0k$) td5j4i['onSaveFile'](otix5, yl0fk$), vc$sqr != null && vc$sqr['runWith']([0x0]);else {
            if (qlv0k$['readyUrl'] != otix5) td5j4i['remove'](yl0fk$, otix5, vc$sqr);
          }
        }, 'fail': function (xbi) {
          vc$sqr != null && vc$sqr['runWith']([0x1, xbi]);
        } });
    }, td5j4i['getFileNativePath'] = function (qs) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + qs;
    }, td5j4i['remove'] = function (b8npe, f71uy6, z9jc) {
      f71uy6 === void 0x0 && (f71uy6 = '');var fk76y0 = td5j4i['getFileInfo'](f71uy6),
          yk07f = td5j4i['getFileNativePath'](fk76y0['md5']);qcrsv_['loader']['clearRes'](fk76y0['readyUrl']), td5j4i['fs']['unlink']({ 'filePath': yk07f, 'success': function (dit) {
          if (f71uy6 != '') td5j4i['onSaveFile'](f71uy6, b8npe);z9jc != null && z9jc['runWith']([0x0]);
        }, 'fail': function (jz_9m) {} });
    }, td5j4i['onSaveFile'] = function (hd54, kfl6) {
      var _srz = hd54['split']('?')[0x0];td5j4i['filesListObj'][_srz] = { 'md5': kfl6, 'readyUrl': hd54 }, td5j4i['fs']['writeFile']({ 'filePath': td5j4i['fileNativeDir'] + '/' + td5j4i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](td5j4i['filesListObj']), 'success': function (u6f1y7) {
          console['log']('写入测试测试成功：', u6f1y7);
        }, 'fail': function (i5xth) {
          console['log']('写入测试测试失败：', i5xth);
        } });
    }, td5j4i['existDir'] = function (c$qsv, mdj4z9) {
      td5j4i['fs']['mkdir']({ 'dirPath': c$qsv, 'success': function (ibxth) {
          mdj4z9 != null && mdj4z9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jm4_z9) {
          if (jm4_z9['errMsg']['indexOf']('file already exists') != -0x1) td5j4i['readSync'](td5j4i['fileListName'], 'utf8', mdj4z9);else mdj4z9 != null && mdj4z9['runWith']([0x1, jm4_z9]);
        } });
    }, td5j4i['readSync'] = function (btoh, s9cqr, lsqrv, th4di) {
      s9cqr === void 0x0 && (s9cqr = 'ascill'), th4di === void 0x0 && (th4di = '');var kf6y70 = td5j4i['getFileNativePath'](btoh),
          zj45m;try {
        zj45m = td5j4i['fs']['readFileSync'](kf6y70), lsqrv != null && lsqrv['runWith']([0x0, { 'data': zj45m }]);
      } catch (kvq$0l) {
        lsqrv != null && lsqrv['runWith']([0x1]);
      }
    }, td5j4i['readCache'] = function () {}, td5j4i['writeCache'] = function (sc9zm) {
      var $qv0k = readyUrl['split']('?')[0x0];td5j4i['filesListObj'][$qv0k] = { 'md5': md5Name, 'readyUrl': readyUrl }, td5j4i['fs']['writeFile']({ 'filePath': td5j4i['fileNativeDir'] + '/' + td5j4i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](td5j4i['filesListObj']), 'success': function (ben82p) {}, 'fail': function (im45dj) {} });
    }, td5j4i['setNativeFileDir'] = function (kf0) {
      td5j4i['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + kf0;
    }, td5j4i['filesListObj'] = {}, td5j4i['fileNativeDir'] = null, td5j4i['fileListName'] = 'layaairfiles.txt', td5j4i['ziyuFileData'] = {}, jm4z_(td5j4i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), td5j4i;
  }(bx82op),
      lq0r$ = function (m54zj) {
    function bx2op8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], bx2op8['__super']['call'](this), this['_sound'] = bx2op8['_createSound']();
    }ql0v$r(bx2op8, 'laya.wx.mini.MiniSound', m54zj);var l$yk0 = bx2op8['prototype'];return l$yk0['load'] = function (cs9r_z) {
      var otbphx = this;cs9r_z = hdto['formatURL'](cs9r_z), this['url'] = cs9r_z;if (bx2op8['_audioCache'][cs9r_z]) {
        this['event']('complete');return;
      }function x82pbn() {
        if (bx2op8['_null'] != undefined) otbphx['_sound']['onCanplay'](bx2op8['_null']), otbphx['_sound']['onError'](bx2op8['_null']);else try {
          otbphx['_sound']['onCanplay'](null), otbphx['_sound']['onError'](null), bx2op8['_null'] = null;
        } catch (rsq9) {
          console['warn']('[wxmini] _clearSound:' + rsq9), otbphx['_sound']['onCanplay'](xtbo), otbphx['_sound']['onError'](xtbo), bx2op8['_null'] = xtbo;
        }
      }function e2ng8() {
        x82pbn(), c9z_m['loaded'] = !![], c9z_m['event']('complete'), bx2op8['_audioCache'][c9z_m['url']] = c9z_m;
      }function _csm9(z9rcs_) {
        console['error']('errCode=' + z9rcs_['errCode'] + '  errMsg=' + z9rcs_['errMsg']), x82pbn(), c9z_m['event']('error');
      }function xtbo() {}this['_sound']['onCanplay'](e2ng8), this['_sound']['onError'](_csm9), this['_sound']['src'] = cs9r_z;var c9z_m = this;
    }, l$yk0['play'] = function (l$kf0, cvs$rq) {
      l$kf0 === void 0x0 && (l$kf0 = 0x0), cvs$rq === void 0x0 && (cvs$rq = 0x0);var lvsrq;if (this['url'] == ij5d['_tMusic']) {
        if (!bx2op8['_musicAudio']) bx2op8['_musicAudio'] = bx2op8['_createSound']();lvsrq = bx2op8['_musicAudio'];
      } else lvsrq = bx2op8['_createSound']();lvsrq['src'] = this['url'];var vk0q$ = new rsq$cv(lvsrq);return vk0q$['url'] = this['url'], vk0q$['loops'] = cvs$rq, vk0q$['startTime'] = l$kf0, vk0q$['play'](), ij5d['addChannel'](vk0q$), vk0q$;
    }, l$yk0['dispose'] = function () {
      var s$rlqv = bx2op8['_audioCache'][this['url']];s$rlqv && (s$rlqv['src'] = '', delete bx2op8['_audioCache'][this['url']]);
    }, ixh5to(0x0, l$yk0, 'duration', function () {
      return this['_sound']['duration'];
    }), bx2op8['_createSound'] = function () {
      return bx2op8['_id']++, f176y['window']['wx']['createInnerAudioContext']();
    }, bx2op8['_musicAudio'] = null, bx2op8['_id'] = 0x0, bx2op8['_audioCache'] = {}, bx2op8['_null'] = undefined, bx2op8;
  }(bx82op),
      rsq$cv = function (cj_z9) {
    function src_z(mz4j) {
      this['_audio'] = null, this['_onEnd'] = null, src_z['__super']['call'](this), this['_audio'] = mz4j, this['_onEnd'] = ibxto['bind'](this['__onEnd'], this), mz4j['onEnded'](this['_onEnd']);
    }ql0v$r(src_z, 'laya.wx.mini.MiniSoundChannel', cj_z9);var e32np = src_z['prototype'];return e32np['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qcrsv_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, e32np['__onNull'] = function () {}, e32np['play'] = function () {
      this['isStopped'] = ![], ij5d['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, e32np['stop'] = function () {
      this['isStopped'] = !![], ij5d['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (src_z['_null'] != undefined) this['_audio']['onEnded'](src_z['_null']);else try {
        this['_audio']['onEnded'](null), src_z['_null'] = null;
      } catch (p2bxh) {
        console['warn']('[wxmini] stop:' + p2bxh), this['_audio']['onEnded'](ibxto['bind'](this['__onNull'], this)), src_z['_null'] = ibxto['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, e32np['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, e32np['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ij5d['addChannel'](this), this['_audio']['play']();
    }, ixh5to(0x0, e32np, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ixh5to(0x0, e32np, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ixh5to(0x0, e32np, 'volume', function () {
      return 0x1;
    }, function (nbe2p8) {}), src_z['_null'] = undefined, src_z;
  }(jm45dz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m_sc in Laya) {
    var bop = Laya[m_sc];bop && bop['__isclass'] && (exports[m_sc] = bop);
  }
});