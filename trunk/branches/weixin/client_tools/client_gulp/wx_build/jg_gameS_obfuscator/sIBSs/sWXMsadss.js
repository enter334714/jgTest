var K = wx.$S;
(function (window, document, sady5) {
  var $au4r = sady5['un'],
      bj681 = sady5['uns'],
      nm2_ix = sady5['static'],
      nitm = sady5['class'],
      gyhqps = sady5['getset'],
      b1j8l = sady5['__newvec'],
      ov3eru = laya['utils']['Browser'],
      d5syah = laya['events']['Event'],
      evu3 = laya['events']['EventDispatcher'],
      xcw0_i = laya['resource']['HTMLImage'],
      pjyqgs = laya['utils']['Handler'],
      bjgq81 = laya['display']['Input'],
      ix_m2c = laya['net']['Loader'],
      gjqy = laya['maths']['Matrix'],
      qbg18j = laya['renders']['Render'],
      o3zkvr = laya['utils']['RunDriver'],
      qyjgs = laya['media']['Sound'],
      kwc0_ = laya['media']['SoundChannel'],
      q1g8jb = laya['media']['SoundManager'],
      nxi2_ = laya['display']['Stage'],
      tnim = laya['net']['URL'],
      qgyjps = laya['utils']['Utils'],
      kzv93o = function () {
    function zvk39o() {}return nitm(zvk39o, 'laya.wx.mini.MiniAdpter'), zvk39o['getJson'] = function ($yahd5) {
      return JSON['parse']($yahd5);
    }, zvk39o['init'] = function (c9i0w_, re$4au) {
      c9i0w_ === void 0x0 && (c9i0w_ = ![]), re$4au === void 0x0 && (re$4au = ![]);if (zvk39o['_inited']) return;zvk39o['window'] = window;if (zvk39o['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zvk39o['_inited'] = !![], zvk39o['isZiYu'] = re$4au, zvk39o['isPosMsgYu'] = c9i0w_, zvk39o['EnvConfig'] = {}, !zvk39o['isZiYu'] && (uz3ov['setNativeFileDir']('/layaairGame'), uz3ov['existDir'](uz3ov['fileNativeDir'], pjyqgs['create'](zvk39o, zvk39o['onMkdirCallBack']))), zvk39o['window']['focus'] = function () {}, sady5['getUrlPath'] = function () {}, zvk39o['window']['logtime'] = function (c0k9w) {}, zvk39o['window']['alertTimeLog'] = function (k09wvz) {}, zvk39o['window']['resetShareInfo'] = function () {}, zvk39o['window']['CanvasRenderingContext2D'] = function () {}, zvk39o['window']['CanvasRenderingContext2D']['prototype'] = zvk39o['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zvk39o['window']['document']['body']['appendChild'] = function () {}, zvk39o['EnvConfig']['pixelRatioInt'] = 0x0, o3zkvr['getPixelRatio'] = zvk39o['pixelRatio'], zvk39o['_preCreateElement'] = ov3eru['createElement'], ov3eru['createElement'] = zvk39o['createElement'], o3zkvr['createShaderCondition'] = zvk39o['createShaderCondition'], qgyjps['parseXMLFromString'] = zvk39o['parseXMLFromString'], bjgq81['_createInputElement'] = hpyqgs['_createInputElement'], zvk39o['EnvConfig']['load'] = ix_m2c['prototype']['load'], ix_m2c['prototype']['load'] = roeu34['prototype']['load'], zvk39o['isZiYu'] && c9i0w_ && wx['onMessage'](function (u$ade) {
        u$ade['isLoad'] && (uz3ov['ziyuFileData'][u$ade['url']] = u$ade['data']);
      });
    }, zvk39o['onMkdirCallBack'] = function (yspqh, d$eu) {
      if (!yspqh) uz3ov['filesListObj'] = JSON['parse'](d$eu['data']);
    }, zvk39o['pixelRatio'] = function () {
      if (!zvk39o['EnvConfig']['pixelRatioInt']) try {
        var b861j = wx['getSystemInfoSync']();return zvk39o['EnvConfig']['pixelRatioInt'] = b861j['pixelRatio'], b861j = b861j, b861j['pixelRatio'];
      } catch (qhysp5) {}return zvk39o['EnvConfig']['pixelRatioInt'];
    }, zvk39o['createElement'] = function (vzk3o) {
      if (vzk3o == 'canvas') {
        var n2txm;return zvk39o['idx'] == 0x1 ? zvk39o['isZiYu'] ? (n2txm = sharedCanvas, n2txm['style'] = {}) : n2txm = window['canvas'] : n2txm = window['wx']['createCanvas'](), zvk39o['idx']++, n2txm;
      } else {
        if (vzk3o == 'textarea' || vzk3o == 'input') return zvk39o['onCreateInput'](vzk3o);else {
          if (vzk3o == 'div') {
            var $5h = zvk39o['_preCreateElement'](vzk3o);return $5h['contains'] = function (yphgq) {
              return null;
            }, $5h['removeChild'] = function (hsgyp) {}, $5h;
          } else return zvk39o['_preCreateElement'](vzk3o);
        }
      }
    }, zvk39o['onCreateInput'] = function ($45ae) {
      var lj1b6 = zvk39o['_preCreateElement']($45ae);return lj1b6['focus'] = hpyqgs['wxinputFocus'], lj1b6['blur'] = hpyqgs['wxinputblur'], lj1b6['style'] = {}, lj1b6['value'] = 0x0, lj1b6['parentElement'] = {}, lj1b6['placeholder'] = {}, lj1b6['type'] = {}, lj1b6['setColor'] = function (imt) {}, lj1b6['setType'] = function (kzo93v) {}, lj1b6['setFontFace'] = function (vwzko9) {}, lj1b6['addEventListener'] = function (zvu3r) {}, lj1b6['contains'] = function (m7x2tn) {
        return null;
      }, lj1b6['removeChild'] = function (v9zk3) {}, lj1b6;
    }, zvk39o['createShaderCondition'] = function (_xicm) {
      var qh5psy = this,
          euo3v = function () {
        var syph5 = _xicm;return qh5psy[_xicm['replace']('this.', '')];
      };return euo3v;
    }, zvk39o['EnvConfig'] = null, zvk39o['window'] = null, zvk39o['_preCreateElement'] = null, zvk39o['_inited'] = ![], zvk39o['wxRequest'] = null, zvk39o['systemInfo'] = null, zvk39o['version'] = '0.0.1', zvk39o['isZiYu'] = ![], zvk39o['isPosMsgYu'] = ![], zvk39o['parseXMLFromString'] = function (bqj8g1) {
      var ay$5dh, f18bl;bqj8g1 = bqj8g1['replace'](/>\s+</g, '><');try {
        ay$5dh = new window['Parser']['DOMParser']()['parseFromString'](bqj8g1, 'text/xml');
      } catch (kw9_0) {
        throw '需要引入xml解析库文件';
      }return ay$5dh;
    }, zvk39o['idx'] = 0x1, zvk39o;
  }(),
      x2tn = function () {
    function $e5d4a() {}nitm($e5d4a, 'laya.wx.mini.MiniImage');var u3ve = $e5d4a['prototype'];return u3ve['_loadImage'] = function (pd5sh) {
      var xc2mi = this,
          i_m2n = ![];pd5sh['indexOf']('layaNativeDir/') == -0x1 && (i_m2n = !![], pd5sh = tnim['formatURL'](pd5sh));if (!uz3ov['getFileInfo'](pd5sh)) {
        if (pd5sh['indexOf']('http://') != -0x1 || pd5sh['indexOf']('https://') != -0x1) uz3ov['downImg'](pd5sh, new pjyqgs($e5d4a, $e5d4a['onDownImgCallBack'], [pd5sh, xc2mi]), pd5sh);else $e5d4a['onCreateImage'](pd5sh, xc2mi, !![]);
      } else $e5d4a['onCreateImage'](pd5sh, xc2mi, !i_m2n);
    }, $e5d4a['onDownImgCallBack'] = function (gpsjqy, kz0w9c, $d5) {
      if (!$d5) $e5d4a['onCreateImage'](gpsjqy, kz0w9c);else kz0w9c['onError'](null);
    }, $e5d4a['onCreateImage'] = function (ov93kz, c9_, kov93) {
      kov93 === void 0x0 && (kov93 = ![]);var gj8;if (!kov93) {
        var mintx = uz3ov['getFileInfo'](ov93kz),
            dysh5 = mintx['md5'];gj8 = uz3ov['getFileNativePath'](dysh5);
      } else gj8 = ov93kz;if (c9_['imgCache'] == null) c9_['imgCache'] = {};var vo9wk;function $4reau() {
        vo9wk['onload'] = null, vo9wk['onerror'] = null, delete c9_['imgCache'][ov93kz];
      };var phygsq = function () {
        $4reau(), c9_['onLoaded'](vo9wk);
      },
          oreuv3 = function () {
        $4reau(), c9_['event']('error', 'Load image failed');
      };c9_['_type'] == 'nativeimage' ? (vo9wk = new ov3eru['window']['Image'](), vo9wk['crossOrigin'] = '', vo9wk['onload'] = phygsq, vo9wk['onerror'] = oreuv3, vo9wk['src'] = gj8, c9_['imgCache'][ov93kz] = vo9wk) : new xcw0_i['create'](gj8, { 'onload': phygsq, 'onerror': oreuv3, 'onCreate': function (zwv09k) {
          vo9wk = zwv09k, c9_['imgCache'][ov93kz] = zwv09k;
        } });
    }, $e5d4a;
  }(),
      hpyqgs = function () {
    function gj1qp8() {}return nitm(gj1qp8, 'laya.wx.mini.MiniInput'), gj1qp8['_createInputElement'] = function () {
      bjgq81['_initInput'](bjgq81['area'] = ov3eru['createElement']('textarea')), bjgq81['_initInput'](bjgq81['input'] = ov3eru['createElement']('input')), bjgq81['inputContainer'] = ov3eru['createElement']('div'), bjgq81['inputContainer']['style']['position'] = 'absolute', bjgq81['inputContainer']['style']['zIndex'] = 0x186a0, ov3eru['container']['appendChild'](bjgq81['inputContainer']), bjgq81['inputContainer']['setPos'] = function (l6f81b, $udea) {
        bjgq81['inputContainer']['style']['left'] = l6f81b + 'px', bjgq81['inputContainer']['style']['top'] = $udea + 'px';
      }, sady5['stage']['on']('resize', null, gj1qp8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (h4$5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), q1g8jb['_soundClass'] = eu$4a, q1g8jb['_musicClass'] = eu$4a;
    }, gj1qp8['_onStageResize'] = function () {
      var c09k_w = sady5['stage']['_canvasTransform']['identity']();c09k_w['scale'](ov3eru['width'] / qbg18j['canvas']['width'] / o3zkvr['getPixelRatio'](), ov3eru['height'] / qbg18j['canvas']['height'] / o3zkvr['getPixelRatio']());
    }, gj1qp8['wxinputFocus'] = function (tn72) {
      var nxmti2 = bjgq81['inputElement']['target'];if (nxmti2 && !nxmti2['editable']) return;kzv93o['window']['wx']['offKeyboardConfirm'](), kzv93o['window']['wx']['offKeyboardInput'](), kzv93o['window']['wx']['showKeyboard']({ 'defaultValue': nxmti2['text'], 'maxLength': nxmti2['maxChars'], 'multiple': nxmti2['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (b6l81j) {}, 'fail': function (_i2xm) {} }), kzv93o['window']['wx']['onKeyboardConfirm'](function (ea$ud4) {
        var i0m_c = ea$ud4 ? ea$ud4['value'] : '';nxmti2['text'] = i0m_c, nxmti2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kzv93o['window']['wx']['onKeyboardInput'](function (ygqpsj) {
        var r4u$3 = ygqpsj ? ygqpsj['value'] : '';if (!nxmti2['multiline']) {
          if (r4u$3['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }nxmti2['text'] = r4u$3, nxmti2['event']('input');
      });
    }, gj1qp8['inputEnter'] = function () {
      bjgq81['inputElement']['target']['focus'] = ![];
    }, gj1qp8['wxinputblur'] = function () {
      gj1qp8['hideKeyboard']();
    }, gj1qp8['hideKeyboard'] = function () {
      kzv93o['window']['wx']['offKeyboardConfirm'](), kzv93o['window']['wx']['offKeyboardInput'](), kzv93o['window']['wx']['hideKeyboard']({ 'success': function (hy5qs) {
          console['log']('隐藏键盘');
        }, 'fail': function (eo34) {
          console['log']('隐藏键盘出错:' + (eo34 ? eo34['errMsg'] : ''));
        } });
    }, gj1qp8;
  }(),
      roeu34 = function () {
    function k09_wc() {}nitm(k09_wc, 'laya.wx.mini.MiniLoader');var j1b8g = k09_wc['prototype'];return j1b8g['load'] = function (psqhgy, vzwk9o, zo39k, c_ixm2, pqg8) {
      zo39k === void 0x0 && (zo39k = !![]), pqg8 === void 0x0 && (pqg8 = ![]);var w9i_0c = this;w9i_0c['_url'] = psqhgy;if (psqhgy['indexOf']('data:image') === 0x0) w9i_0c['_type'] = vzwk9o = 'image';else w9i_0c['_type'] = vzwk9o || (vzwk9o = w9i_0c['getTypeFromUrl'](psqhgy));w9i_0c['_cache'] = zo39k, w9i_0c['_data'] = null;var bj81q = 'ascii';if (psqhgy['indexOf']('.fnt') != -0x1) bj81q = 'utf8';else vzwk9o == 'arraybuffer' && (bj81q = '');;var e$a4u = qgyjps['getFileExtension'](psqhgy);if (k09_wc['_fileTypeArr']['indexOf'](e$a4u) != -0x1) kzv93o['EnvConfig']['load']['call'](this, psqhgy, vzwk9o, zo39k, c_ixm2, pqg8);else {
        if (!uz3ov['getFileInfo'](psqhgy)) {
          if (psqhgy['indexOf']('layaNativeDir/') != -0x1) {
            if (kzv93o['isZiYu']) {
              var b6 = uz3ov['ziyuFileData'][psqhgy];w9i_0c['onLoaded'](b6);return;
            } else {
              cosnole['log']('read read'), uz3ov['read'](psqhgy, bj81q, new pjyqgs(k09_wc, k09_wc['onReadNativeCallBack'], [bj81q, psqhgy, vzwk9o, zo39k, c_ixm2, pqg8, w9i_0c]));return;
            }
          }if (tnim['rootPath'] == '') var xtnmi = psqhgy;else xtnmi = psqhgy['split'](tnim['rootPath'])[0x0];psqhgy['indexOf']('http://') != -0x1 || psqhgy['indexOf']('https://') != -0x1 ? kzv93o['EnvConfig']['load']['call'](w9i_0c, psqhgy, vzwk9o, zo39k, c_ixm2, pqg8) : uz3ov['readFile'](xtnmi, bj81q, new pjyqgs(k09_wc, k09_wc['onReadNativeCallBack'], [bj81q, psqhgy, vzwk9o, zo39k, c_ixm2, pqg8, w9i_0c]), psqhgy);
        } else kzv93o['EnvConfig']['load']['call'](this, psqhgy, vzwk9o, zo39k, c_ixm2, pqg8);
      }
    }, j1b8g['resMgrLoad'] = function (rvzo3, qg8pj, g8b6j1, x_wic0, yha5$, i_xw, sj1gq) {
      g8b6j1 === void 0x0 && (g8b6j1 = 0x0), x_wic0 === void 0x0 && (x_wic0 = ![]), yha5$ === void 0x0 && (yha5$ = ![]), i_xw === void 0x0 && (i_xw = 0x0), sj1gq === void 0x0 && (sj1gq = 0x3), rvzo3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rvzo3), kzv93o['EnvConfig']['resMgrLoad'](rvzo3, (yph5sq, yhsda5, gbqj1) => {
        k09_wc['prototype']['resMgrLoadCallBack'](yph5sq, yhsda5, gbqj1, qg8pj);
      }, g8b6j1, x_wic0, yha5$, i_xw, sj1gq);
    }, j1b8g['resMgrLoadCallBack'] = function (k_9cw0, _xmc2, ea$54, m_2c) {
      console['log']('buff:::', k_9cw0, ea$54, uz3ov['fileNativeDir'] + '///' + uz3ov['fileListName']), m_2c(k_9cw0, _xmc2, ea$54);
    }, j1b8g['clearRes'] = function (c_9w0, sydp) {
      sydp === void 0x0 && (sydp = ![]);var g1j8qb = this;g1j8qb['clearRes'](c_9w0, sydp);var $5ae = uz3ov['getFileInfo'](c_9w0);if ($5ae && (c_9w0['indexOf']('http://') != -0x1 || c_9w0['indexOf']('https://') != -0x1)) {
        var o3zkrv = $5ae['md5'],
            o9k3 = uz3ov['getFileNativePath'](o3zkrv);uz3ov['remove'](o9k3);
      }
    }, k09_wc['onReadNativeCallBack'] = function (jpy, j1gp8, ok3rzv, re4ou, h5$ad, uor3, v9w0k, vz0k9, wi_09c) {
      re4ou === void 0x0 && (re4ou = !![]), uor3 === void 0x0 && (uor3 = ![]), vz0k9 === void 0x0 && (vz0k9 = 0x0);if (!vz0k9) {
        var zko3;if (ok3rzv == 'json' || ok3rzv == 'atlas') zko3 = kzv93o['getJson'](wi_09c['data']);else ok3rzv == 'xml' ? zko3 = qgyjps['parseXMLFromString'](wi_09c['data']) : zko3 = wi_09c['data'];v9w0k['onLoaded'](zko3), !kzv93o['isZiYu'] && kzv93o['isPosMsgYu'] && ok3rzv != 'arraybuffer' && wx['postMessage']({ 'url': j1gp8, 'data': zko3, 'isLoad': !![] });
      } else vz0k9 == 0x1 && kzv93o['EnvConfig']['load']['call'](v9w0k, j1gp8, ok3rzv, re4ou, h5$ad, uor3);
    }, nm2_ix(k09_wc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), k09_wc;
  }(),
      uz3ov = function (qshpy) {
    function _mnx2i() {
      _mnx2i['__super']['call'](this);;
    }return nitm(_mnx2i, 'laya.wx.mini.MiniFileMgr', qshpy), _mnx2i['isLoadFile'] = function (gyjqsp) {
      return _mnx2i['_fileTypeArr']['indexOf'](gyjqsp) != -0x1 ? !![] : ![];
    }, _mnx2i['getFileInfo'] = function (cx_wi) {
      var eur3$ = cx_wi['split']('?')[0x0],
          n2m_ix = _mnx2i['filesListObj'][eur3$];if (n2m_ix == null) return null;else return n2m_ix;return null;
    }, _mnx2i['onFileUpdate'] = function (sqy5p, u3e4r) {
      var vz3k = sqy5p['split']('/'),
          wzck = vz3k[vz3k['length'] - 0x1],
          ev3uor = _mnx2i['getFileInfo'](u3e4r);if (ev3uor == null) _mnx2i['onSaveFile'](u3e4r, wzck);else {
        if (ev3uor['readyUrl'] != u3e4r) _mnx2i['remove'](wzck, u3e4r);
      }
    }, _mnx2i['exits'] = function (er3$u, xmn7t2) {
      var vzk0w9 = _mnx2i['getFileNativePath'](er3$u);_mnx2i['fs']['getFileInfo']({ 'filePath': vzk0w9, 'success': function (z3kor) {
          xmn7t2 != null && xmn7t2['runWith']([0x0, z3kor]);
        }, 'fail': function (wc0xi_) {
          xmn7t2 != null && xmn7t2['runWith']([0x1, wc0xi_]);
        } });
    }, _mnx2i['read'] = function (ure43$, yjpgqs, qpjg18, bl8j) {
      yjpgqs === void 0x0 && (yjpgqs = 'ascill'), bl8j === void 0x0 && (bl8j = '');var hpsyqg;bl8j != '' ? hpsyqg = _mnx2i['getFileNativePath'](ure43$) : hpsyqg = ure43$, _mnx2i['fs']['readFile']({ 'filePath': hpsyqg, 'encoding': yjpgqs, 'success': function (qpsy5) {
          qpjg18 != null && qpjg18['runWith']([0x0, qpsy5]);
        }, 'fail': function (dhy$5) {
          if (dhy$5 && bl8j != '') _mnx2i['down'](bl8j, yjpgqs, qpjg18, bl8j);else qpjg18 != null && qpjg18['runWith']([0x1]);
        } });
    }, _mnx2i['readNativeFile'] = function (vue, dy5ha$) {
      _mnx2i['fs']['readFile']({ 'filePath': vue, 'encoding': '', 'success': function (_mxi) {
          dy5ha$ != null && dy5ha$['runWith']([0x0]);
        }, 'fail': function (xnmt72) {
          dy5ha$ != null && dy5ha$['runWith']([0x1]);
        } });
    }, _mnx2i['down'] = function (sypg, de4a$u, wzc0k, ra4) {
      de4a$u === void 0x0 && (de4a$u = 'ascill'), ra4 === void 0x0 && (ra4 = '');var a4$re = _mnx2i['getFileNativePath'](ra4),
          y5phd = _mnx2i['wxdown']({ 'url': sypg, 'filePath': a4$re, 'success': function (rvk3o) {
          if (rvk3o['statusCode'] === 0xc8) _mnx2i['readFile'](rvk3o['filePath'], de4a$u, wzc0k, ra4);
        }, 'fail': function ($d4e5a) {
          wzc0k != null && wzc0k['runWith']([0x1, $d4e5a]);
        } });y5phd['onProgressUpdate'](function (phygq) {
        wzc0k != null && wzc0k['runWith']([0x2, phygq['progress']]);
      });
    }, _mnx2i['readFile'] = function (_w9i0c, y5$ahd, o3vue, e3urvo) {
      y5$ahd === void 0x0 && (y5$ahd = 'ascill'), e3urvo === void 0x0 && (e3urvo = ''), _mnx2i['fs']['readFile']({ 'filePath': _w9i0c, 'encoding': y5$ahd, 'success': function (ue3or4) {
          if (_w9i0c['indexOf']('http://') != -0x1 || _w9i0c['indexOf']('https://') != -0x1) _mnx2i['onFileUpdate'](_w9i0c, e3urvo);o3vue != null && o3vue['runWith']([0x0, ue3or4]);
        }, 'fail': function (k9w0c_) {
          if (k9w0c_) o3vue != null && o3vue['runWith']([0x1, k9w0c_]);
        } });
    }, _mnx2i['downImg'] = function (iw0x_c, sp1, $had5y) {
      $had5y === void 0x0 && ($had5y = '');var flb = _mnx2i['wxdown']({ 'url': iw0x_c, 'success': function (y$h) {
          y$h['statusCode'] === 0xc8 && _mnx2i['copyFile'](y$h['tempFilePath'], $had5y, sp1);
        }, 'fail': function ($ead4u) {
          sp1 != null && sp1['runWith']([0x1, $ead4u]);
        } });
    }, _mnx2i['copyFile'] = function (er4$u3, b8j1gq, oruzv3) {
      var e5$ = er4$u3['split']('/'),
          eau$4 = e5$[e5$['length'] - 0x1],
          y5phq = b8j1gq['split']('?')[0x0],
          u3veor = _mnx2i['getFileInfo'](b8j1gq),
          ntxmi2 = _mnx2i['getFileNativePath'](eau$4);_mnx2i['fs']['copyFile']({ 'srcPath': er4$u3, 'destPath': ntxmi2, 'success': function (orv3) {
          if (!u3veor) _mnx2i['onSaveFile'](b8j1gq, eau$4), oruzv3 != null && oruzv3['runWith']([0x0]);else {
            if (u3veor['readyUrl'] != b8j1gq) _mnx2i['remove'](eau$4, b8j1gq, oruzv3);
          }
        }, 'fail': function (zwvk9) {
          oruzv3 != null && oruzv3['runWith']([0x1, zwvk9]);
        } });
    }, _mnx2i['getFileNativePath'] = function (gj6) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gj6;
    }, _mnx2i['remove'] = function (e4aur$, ruvoe, sdph) {
      ruvoe === void 0x0 && (ruvoe = '');var ur43oe = _mnx2i['getFileInfo'](ruvoe),
          qypj = _mnx2i['getFileNativePath'](ur43oe['md5']);sady5['loader']['clearRes'](ur43oe['readyUrl']), _mnx2i['fs']['unlink']({ 'filePath': qypj, 'success': function (x2m7t) {
          if (ruvoe != '') _mnx2i['onSaveFile'](ruvoe, e4aur$);sdph != null && sdph['runWith']([0x0]);
        }, 'fail': function (b61lj8) {} });
    }, _mnx2i['onSaveFile'] = function (sydah, gsyqjp) {
      var phsy5d = sydah['split']('?')[0x0];_mnx2i['filesListObj'][phsy5d] = { 'md5': gsyqjp, 'readyUrl': sydah }, _mnx2i['fs']['writeFile']({ 'filePath': _mnx2i['fileNativeDir'] + '/' + _mnx2i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_mnx2i['filesListObj']), 'success': function (dysph) {
          console['log']('写入测试测试成功：', dysph);
        }, 'fail': function (nmx27t) {
          console['log']('写入测试测试失败：', nmx27t);
        } });
    }, _mnx2i['existDir'] = function (ozkr3v, _iw09c) {
      _mnx2i['fs']['mkdir']({ 'dirPath': ozkr3v, 'success': function (phgys) {
          _iw09c != null && _iw09c['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (tn2mx) {
          if (tn2mx['errMsg']['indexOf']('file already exists') != -0x1) _mnx2i['readSync'](_mnx2i['fileListName'], 'utf8', _iw09c);else _iw09c != null && _iw09c['runWith']([0x1, tn2mx]);
        } });
    }, _mnx2i['readSync'] = function (cw9k_0, r4uae$, nim2x, shygq) {
      r4uae$ === void 0x0 && (r4uae$ = 'ascill'), shygq === void 0x0 && (shygq = '');var pg1sjq = _mnx2i['getFileNativePath'](cw9k_0),
          m2txn7;try {
        m2txn7 = _mnx2i['fs']['readFileSync'](pg1sjq), nim2x != null && nim2x['runWith']([0x0, { 'data': m2txn7 }]);
      } catch (dhsp5) {
        nim2x != null && nim2x['runWith']([0x1]);
      }
    }, _mnx2i['readCache'] = function () {}, _mnx2i['writeCache'] = function (psdy5h) {
      var z9vwko = readyUrl['split']('?')[0x0];_mnx2i['filesListObj'][z9vwko] = { 'md5': md5Name, 'readyUrl': readyUrl }, _mnx2i['fs']['writeFile']({ 'filePath': _mnx2i['fileNativeDir'] + '/' + _mnx2i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_mnx2i['filesListObj']), 'success': function (ghqpsy) {}, 'fail': function (c0k9w_) {} });
    }, _mnx2i['setNativeFileDir'] = function (zrv3) {
      _mnx2i['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zrv3;
    }, _mnx2i['filesListObj'] = {}, _mnx2i['fileNativeDir'] = null, _mnx2i['fileListName'] = 'layaairfiles.txt', _mnx2i['ziyuFileData'] = {}, nm2_ix(_mnx2i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _mnx2i;
  }(evu3),
      eu$4a = function (e4r3ou) {
    function vo3k() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vo3k['__super']['call'](this), this['_sound'] = vo3k['_createSound']();
    }nitm(vo3k, 'laya.wx.mini.MiniSound', e4r3ou);var i2_cx = vo3k['prototype'];return i2_cx['load'] = function (vzko3) {
      var zo9vkw = this;vzko3 = tnim['formatURL'](vzko3), this['url'] = vzko3;if (vo3k['_audioCache'][vzko3]) {
        this['event']('complete');return;
      }function $aude4() {
        if (vo3k['_null'] != undefined) zo9vkw['_sound']['onCanplay'](vo3k['_null']), zo9vkw['_sound']['onError'](vo3k['_null']);else try {
          zo9vkw['_sound']['onCanplay'](null), zo9vkw['_sound']['onError'](null), vo3k['_null'] = null;
        } catch (vkoz93) {
          console['warn']('[wxmini] _clearSound:' + vkoz93), zo9vkw['_sound']['onCanplay'](j6gb1), zo9vkw['_sound']['onError'](j6gb1), vo3k['_null'] = j6gb1;
        }
      }function urozv3() {
        $aude4(), nx_mi2['loaded'] = !![], nx_mi2['event']('complete'), vo3k['_audioCache'][nx_mi2['url']] = nx_mi2;
      }function w0v9k(zv9k) {
        console['error']('errCode=' + zv9k['errCode'] + '  errMsg=' + zv9k['errMsg']), $aude4(), nx_mi2['event']('error');
      }function j6gb1() {}this['_sound']['onCanplay'](urozv3), this['_sound']['onError'](w0v9k), this['_sound']['src'] = vzko3;var nx_mi2 = this;
    }, i2_cx['play'] = function (da$y, mt2nxi) {
      da$y === void 0x0 && (da$y = 0x0), mt2nxi === void 0x0 && (mt2nxi = 0x0);var mnt;if (this['url'] == q1g8jb['_tMusic']) {
        if (!vo3k['_musicAudio']) vo3k['_musicAudio'] = vo3k['_createSound']();mnt = vo3k['_musicAudio'];
      } else mnt = vo3k['_createSound']();mnt['src'] = this['url'];var zv9 = new qb81g(mnt);return zv9['url'] = this['url'], zv9['loops'] = mt2nxi, zv9['startTime'] = da$y, zv9['play'](), q1g8jb['addChannel'](zv9), zv9;
    }, i2_cx['dispose'] = function () {
      var da5h$y = vo3k['_audioCache'][this['url']];da5h$y && (da5h$y['src'] = '', delete vo3k['_audioCache'][this['url']]);
    }, gyhqps(0x0, i2_cx, 'duration', function () {
      return this['_sound']['duration'];
    }), vo3k['_createSound'] = function () {
      return vo3k['_id']++, kzv93o['window']['wx']['createInnerAudioContext']();
    }, vo3k['_musicAudio'] = null, vo3k['_id'] = 0x0, vo3k['_audioCache'] = {}, vo3k['_null'] = undefined, vo3k;
  }(evu3),
      qb81g = function (pygsh) {
    function jqspy(qghy) {
      this['_audio'] = null, this['_onEnd'] = null, jqspy['__super']['call'](this), this['_audio'] = qghy, this['_onEnd'] = qgyjps['bind'](this['__onEnd'], this), qghy['onEnded'](this['_onEnd']);
    }nitm(jqspy, 'laya.wx.mini.MiniSoundChannel', pygsh);var kw9zc = jqspy['prototype'];return kw9zc['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (sady5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kw9zc['__onNull'] = function () {}, kw9zc['play'] = function () {
      this['isStopped'] = ![], q1g8jb['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kw9zc['stop'] = function () {
      this['isStopped'] = !![], q1g8jb['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jqspy['_null'] != undefined) this['_audio']['onEnded'](jqspy['_null']);else try {
        this['_audio']['onEnded'](null), jqspy['_null'] = null;
      } catch (v0k9w) {
        console['warn']('[wxmini] stop:' + v0k9w), this['_audio']['onEnded'](qgyjps['bind'](this['__onNull'], this)), jqspy['_null'] = qgyjps['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kw9zc['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kw9zc['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], q1g8jb['addChannel'](this), this['_audio']['play']();
    }, gyhqps(0x0, kw9zc, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), gyhqps(0x0, kw9zc, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), gyhqps(0x0, kw9zc, 'volume', function () {
      return 0x1;
    }, function (qjygp) {}), jqspy['_null'] = undefined, jqspy;
  }(kwc0_);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var e4da$5 in Laya) {
    var k0wz9c = Laya[e4da$5];k0wz9c && k0wz9c['__isclass'] && (exports[e4da$5] = k0wz9c);
  }
});