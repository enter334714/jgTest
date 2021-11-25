var b = wx.$e;
(function (window, document, v_a7f4) {
  var us6kb9 = v_a7f4['un'],
      n9ks = v_a7f4['uns'],
      d2815 = v_a7f4['static'],
      nj3qui = v_a7f4['class'],
      i$jxg = v_a7f4['getset'],
      d6bk9 = v_a7f4['__newvec'],
      acemp = laya['utils']['Browser'],
      bs690k = laya['events']['Event'],
      ijq3n$ = laya['events']['EventDispatcher'],
      w052d = laya['resource']['HTMLImage'],
      nu6k9s = laya['utils']['Handler'],
      $j3x = laya['display']['Input'],
      rltghz = laya['net']['Loader'],
      rlgthx = laya['maths']['Matrix'],
      ix$gt = laya['renders']['Render'],
      mac74 = laya['utils']['RunDriver'],
      jqn3u = laya['media']['Sound'],
      apmo7c = laya['media']['SoundChannel'],
      vzyhfr = laya['media']['SoundManager'],
      ghrxt = laya['display']['Stage'],
      uksn9 = laya['net']['URL'],
      lzyrht = laya['utils']['Utils'],
      l$hxg = function () {
    function o_7c() {}return nj3qui(o_7c, 'laya.wx.mini.MiniAdpter'), o_7c['getJson'] = function (oampce) {
      return JSON['parse'](oampce);
    }, o_7c['init'] = function (g$ix3j, c7m4_a) {
      g$ix3j === void 0x0 && (g$ix3j = ![]), c7m4_a === void 0x0 && (c7m4_a = ![]);if (o_7c['_inited']) return;o_7c['window'] = window;if (o_7c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o_7c['_inited'] = !![], o_7c['isZiYu'] = c7m4_a, o_7c['isPosMsgYu'] = g$ix3j, o_7c['EnvConfig'] = {}, !o_7c['isZiYu'] && (tzrgl['setNativeFileDir']('/layaairGame'), tzrgl['existDir'](tzrgl['fileNativeDir'], nu6k9s['create'](o_7c, o_7c['onMkdirCallBack']))), o_7c['window']['focus'] = function () {}, v_a7f4['getUrlPath'] = function () {}, o_7c['window']['logtime'] = function (pom) {}, o_7c['window']['alertTimeLog'] = function (tl$igx) {}, o_7c['window']['resetShareInfo'] = function () {}, o_7c['window']['CanvasRenderingContext2D'] = function () {}, o_7c['window']['CanvasRenderingContext2D']['prototype'] = o_7c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o_7c['window']['document']['body']['appendChild'] = function () {}, o_7c['EnvConfig']['pixelRatioInt'] = 0x0, mac74['getPixelRatio'] = o_7c['pixelRatio'], o_7c['_preCreateElement'] = acemp['createElement'], acemp['createElement'] = o_7c['createElement'], mac74['createShaderCondition'] = o_7c['createShaderCondition'], lzyrht['parseXMLFromString'] = o_7c['parseXMLFromString'], $j3x['_createInputElement'] = qusnj3['_createInputElement'], o_7c['EnvConfig']['load'] = rltghz['prototype']['load'], rltghz['prototype']['load'] = y_4fv7['prototype']['load'], o_7c['isZiYu'] && g$ix3j && wx['onMessage'](function (fv) {
        fv['isLoad'] && (tzrgl['ziyuFileData'][fv['url']] = fv['data']);
      });
    }, o_7c['onMkdirCallBack'] = function (qj3, nu9qks) {
      if (!qj3) tzrgl['filesListObj'] = JSON['parse'](nu9qks['data']);
    }, o_7c['pixelRatio'] = function () {
      if (!o_7c['EnvConfig']['pixelRatioInt']) try {
        var qix3j = wx['getSystemInfoSync']();return o_7c['EnvConfig']['pixelRatioInt'] = qix3j['pixelRatio'], qix3j = qix3j, qix3j['pixelRatio'];
      } catch (trlzh) {}return o_7c['EnvConfig']['pixelRatioInt'];
    }, o_7c['createElement'] = function (k05d6b) {
      if (k05d6b == 'canvas') {
        var gxt$ij;return o_7c['idx'] == 0x1 ? o_7c['isZiYu'] ? (gxt$ij = sharedCanvas, gxt$ij['style'] = {}) : gxt$ij = window['canvas'] : gxt$ij = window['wx']['createCanvas'](), o_7c['idx']++, gxt$ij;
      } else {
        if (k05d6b == 'textarea' || k05d6b == 'input') return o_7c['onCreateInput'](k05d6b);else {
          if (k05d6b == 'div') {
            var ltzyrh = o_7c['_preCreateElement'](k05d6b);return ltzyrh['contains'] = function (n3$ji) {
              return null;
            }, ltzyrh['removeChild'] = function (ixtj$g) {}, ltzyrh;
          } else return o_7c['_preCreateElement'](k05d6b);
        }
      }
    }, o_7c['onCreateInput'] = function (coemap) {
      var r4yfzv = o_7c['_preCreateElement'](coemap);return r4yfzv['focus'] = qusnj3['wxinputFocus'], r4yfzv['blur'] = qusnj3['wxinputblur'], r4yfzv['style'] = {}, r4yfzv['value'] = 0x0, r4yfzv['parentElement'] = {}, r4yfzv['placeholder'] = {}, r4yfzv['type'] = {}, r4yfzv['setColor'] = function (g$xjti) {}, r4yfzv['setType'] = function (mcpeoa) {}, r4yfzv['setFontFace'] = function (hrtglz) {}, r4yfzv['addEventListener'] = function ($jig3x) {}, r4yfzv['contains'] = function (rfhz) {
        return null;
      }, r4yfzv['removeChild'] = function (yrzvf) {}, r4yfzv;
    }, o_7c['createShaderCondition'] = function (ixq3j$) {
      var gixt$l = this,
          unij3 = function () {
        var bs90 = ixq3j$;return gixt$l[ixq3j$['replace']('this.', '')];
      };return unij3;
    }, o_7c['EnvConfig'] = null, o_7c['window'] = null, o_7c['_preCreateElement'] = null, o_7c['_inited'] = ![], o_7c['wxRequest'] = null, o_7c['systemInfo'] = null, o_7c['version'] = '0.0.1', o_7c['isZiYu'] = ![], o_7c['isPosMsgYu'] = ![], o_7c['parseXMLFromString'] = function (yf_v4z) {
      var ilgt$x, n3usqj;yf_v4z = yf_v4z['replace'](/>\s+</g, '><');try {
        ilgt$x = new window['Parser']['DOMParser']()['parseFromString'](yf_v4z, 'text/xml');
      } catch (rzgh) {
        throw '需要引入xml解析库文件';
      }return ilgt$x;
    }, o_7c['idx'] = 0x1, o_7c;
  }(),
      uskq9 = function () {
    function qu3jn() {}nj3qui(qu3jn, 'laya.wx.mini.MiniImage');var txigj$ = qu3jn['prototype'];return txigj$['_loadImage'] = function (txil$g) {
      var xl$hg = this,
          yfz4 = ![];txil$g['indexOf']('layaNativeDir/') == -0x1 && (yfz4 = !![], txil$g = uksn9['formatURL'](txil$g));if (!tzrgl['getFileInfo'](txil$g)) {
        if (txil$g['indexOf']('http://') != -0x1 || txil$g['indexOf']('https://') != -0x1) tzrgl['downImg'](txil$g, new nu6k9s(qu3jn, qu3jn['onDownImgCallBack'], [txil$g, xl$hg]), txil$g);else qu3jn['onCreateImage'](txil$g, xl$hg, !![]);
      } else qu3jn['onCreateImage'](txil$g, xl$hg, !yfz4);
    }, qu3jn['onDownImgCallBack'] = function (iqj, eaocm, jq3nus) {
      if (!jq3nus) qu3jn['onCreateImage'](iqj, eaocm);else eaocm['onError'](null);
    }, qu3jn['onCreateImage'] = function (nskuq9, a47vf_, jixtg$) {
      jixtg$ === void 0x0 && (jixtg$ = ![]);var bd580;if (!jixtg$) {
        var k9b06d = tzrgl['getFileInfo'](nskuq9),
            co7a_ = k9b06d['md5'];bd580 = tzrgl['getFileNativePath'](co7a_);
      } else bd580 = nskuq9;if (a47vf_['imgCache'] == null) a47vf_['imgCache'] = {};var fyrzhl;function ns3q9u() {
        fyrzhl['onload'] = null, fyrzhl['onerror'] = null, delete a47vf_['imgCache'][nskuq9];
      };var fhvzry = function () {
        ns3q9u(), a47vf_['onLoaded'](fyrzhl);
      },
          bs069k = function () {
        ns3q9u(), a47vf_['event']('error', 'Load image failed');
      };a47vf_['_type'] == 'nativeimage' ? (fyrzhl = new acemp['window']['Image'](), fyrzhl['crossOrigin'] = '', fyrzhl['onload'] = fhvzry, fyrzhl['onerror'] = bs069k, fyrzhl['src'] = bd580, a47vf_['imgCache'][nskuq9] = fyrzhl) : new w052d['create'](bd580, { 'onload': fhvzry, 'onerror': bs069k, 'onCreate': function (dkb960) {
          fyrzhl = dkb960, a47vf_['imgCache'][nskuq9] = dkb960;
        } });
    }, qu3jn;
  }(),
      qusnj3 = function () {
    function fzv_y() {}return nj3qui(fzv_y, 'laya.wx.mini.MiniInput'), fzv_y['_createInputElement'] = function () {
      $j3x['_initInput']($j3x['area'] = acemp['createElement']('textarea')), $j3x['_initInput']($j3x['input'] = acemp['createElement']('input')), $j3x['inputContainer'] = acemp['createElement']('div'), $j3x['inputContainer']['style']['position'] = 'absolute', $j3x['inputContainer']['style']['zIndex'] = 0x186a0, acemp['container']['appendChild']($j3x['inputContainer']), $j3x['inputContainer']['setPos'] = function (x$3, us6n9) {
        $j3x['inputContainer']['style']['left'] = x$3 + 'px', $j3x['inputContainer']['style']['top'] = us6n9 + 'px';
      }, v_a7f4['stage']['on']('resize', null, fzv_y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xhg$l) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vzyhfr['_soundClass'] = s0k9b6, vzyhfr['_musicClass'] = s0k9b6;
    }, fzv_y['_onStageResize'] = function () {
      var ui3qjn = v_a7f4['stage']['_canvasTransform']['identity']();ui3qjn['scale'](acemp['width'] / ix$gt['canvas']['width'] / mac74['getPixelRatio'](), acemp['height'] / ix$gt['canvas']['height'] / mac74['getPixelRatio']());
    }, fzv_y['wxinputFocus'] = function (qn3jui) {
      var m_4a7v = $j3x['inputElement']['target'];if (m_4a7v && !m_4a7v['editable']) return;l$hxg['window']['wx']['offKeyboardConfirm'](), l$hxg['window']['wx']['offKeyboardInput'](), l$hxg['window']['wx']['showKeyboard']({ 'defaultValue': m_4a7v['text'], 'maxLength': m_4a7v['maxChars'], 'multiple': m_4a7v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_4vfz) {}, 'fail': function (v74am_) {} }), l$hxg['window']['wx']['onKeyboardConfirm'](function (macop) {
        var fy4v = macop ? macop['value'] : '';m_4a7v['text'] = fy4v, m_4a7v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), l$hxg['window']['wx']['onKeyboardInput'](function (hl$tg) {
        var xgrthl = hl$tg ? hl$tg['value'] : '';if (!m_4a7v['multiline']) {
          if (xgrthl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }m_4a7v['text'] = xgrthl, m_4a7v['event']('input');
      });
    }, fzv_y['inputEnter'] = function () {
      $j3x['inputElement']['target']['focus'] = ![];
    }, fzv_y['wxinputblur'] = function () {
      fzv_y['hideKeyboard']();
    }, fzv_y['hideKeyboard'] = function () {
      l$hxg['window']['wx']['offKeyboardConfirm'](), l$hxg['window']['wx']['offKeyboardInput'](), l$hxg['window']['wx']['hideKeyboard']({ 'success': function ($xgij) {
          console['log']('隐藏键盘');
        }, 'fail': function (a_4v7m) {
          console['log']('隐藏键盘出错:' + (a_4v7m ? a_4v7m['errMsg'] : ''));
        } });
    }, fzv_y;
  }(),
      y_4fv7 = function () {
    function ixq() {}nj3qui(ixq, 'laya.wx.mini.MiniLoader');var b0w8d = ixq['prototype'];return b0w8d['load'] = function (ujiq, hzvyf, q93us, m7_oca, qun93s) {
      q93us === void 0x0 && (q93us = !![]), qun93s === void 0x0 && (qun93s = ![]);var kubs96 = this;kubs96['_url'] = ujiq;if (ujiq['indexOf']('data:image') === 0x0) kubs96['_type'] = hzvyf = 'image';else kubs96['_type'] = hzvyf || (hzvyf = kubs96['getTypeFromUrl'](ujiq));kubs96['_cache'] = q93us, kubs96['_data'] = null;var ukqs9 = 'ascii';if (ujiq['indexOf']('.fnt') != -0x1) ukqs9 = 'utf8';else hzvyf == 'arraybuffer' && (ukqs9 = '');;var hyrzl = lzyrht['getFileExtension'](ujiq);if (ixq['_fileTypeArr']['indexOf'](hyrzl) != -0x1) l$hxg['EnvConfig']['load']['call'](this, ujiq, hzvyf, q93us, m7_oca, qun93s);else {
        if (!tzrgl['getFileInfo'](ujiq)) {
          if (ujiq['indexOf']('layaNativeDir/') != -0x1) {
            if (l$hxg['isZiYu']) {
              var qiujn = tzrgl['ziyuFileData'][ujiq];kubs96['onLoaded'](qiujn);return;
            } else {
              cosnole['log']('read read'), tzrgl['read'](ujiq, ukqs9, new nu6k9s(ixq, ixq['onReadNativeCallBack'], [ukqs9, ujiq, hzvyf, q93us, m7_oca, qun93s, kubs96]));return;
            }
          }if (uksn9['rootPath'] == '') var gt$ilx = ujiq;else gt$ilx = ujiq['split'](uksn9['rootPath'])[0x0];ujiq['indexOf']('http://') != -0x1 || ujiq['indexOf']('https://') != -0x1 ? l$hxg['EnvConfig']['load']['call'](kubs96, ujiq, hzvyf, q93us, m7_oca, qun93s) : tzrgl['readFile'](gt$ilx, ukqs9, new nu6k9s(ixq, ixq['onReadNativeCallBack'], [ukqs9, ujiq, hzvyf, q93us, m7_oca, qun93s, kubs96]), ujiq);
        } else l$hxg['EnvConfig']['load']['call'](this, ujiq, hzvyf, q93us, m7_oca, qun93s);
      }
    }, b0w8d['resMgrLoad'] = function (hrgtx, ixtg$j, b0d6, gxrlth, d05w28, _47fy, p7o) {
      b0d6 === void 0x0 && (b0d6 = 0x0), gxrlth === void 0x0 && (gxrlth = ![]), d05w28 === void 0x0 && (d05w28 = ![]), _47fy === void 0x0 && (_47fy = 0x0), p7o === void 0x0 && (p7o = 0x3), hrgtx['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hrgtx), l$hxg['EnvConfig']['resMgrLoad'](hrgtx, (n9usk6, gl$txi, buk9) => {
        ixq['prototype']['resMgrLoadCallBack'](n9usk6, gl$txi, buk9, ixtg$j);
      }, b0d6, gxrlth, d05w28, _47fy, p7o);
    }, b0w8d['resMgrLoadCallBack'] = function (sk6nu9, q3$ji, m7a4v_, n$ji3q) {
      console['log']('buff:::', sk6nu9, m7a4v_, tzrgl['fileNativeDir'] + '///' + tzrgl['fileListName']), n$ji3q(sk6nu9, q3$ji, m7a4v_);
    }, b0w8d['clearRes'] = function (unk69s, lyz) {
      lyz === void 0x0 && (lyz = ![]);var rhyfl = this;rhyfl['clearRes'](unk69s, lyz);var y4zvrf = tzrgl['getFileInfo'](unk69s);if (y4zvrf && (unk69s['indexOf']('http://') != -0x1 || unk69s['indexOf']('https://') != -0x1)) {
        var vfa_7 = y4zvrf['md5'],
            rghtxl = tzrgl['getFileNativePath'](vfa_7);tzrgl['remove'](rghtxl);
      }
    }, ixq['onReadNativeCallBack'] = function (mpcea, ma7v_, dwb058, q9sku, b5d8, cmp7ao, sujq3, k0s6, y4v7_f) {
      q9sku === void 0x0 && (q9sku = !![]), cmp7ao === void 0x0 && (cmp7ao = ![]), k0s6 === void 0x0 && (k0s6 = 0x0);if (!k0s6) {
        var b6s9k0;if (dwb058 == 'json' || dwb058 == 'atlas') b6s9k0 = l$hxg['getJson'](y4v7_f['data']);else dwb058 == 'xml' ? b6s9k0 = lzyrht['parseXMLFromString'](y4v7_f['data']) : b6s9k0 = y4v7_f['data'];sujq3['onLoaded'](b6s9k0), !l$hxg['isZiYu'] && l$hxg['isPosMsgYu'] && dwb058 != 'arraybuffer' && wx['postMessage']({ 'url': ma7v_, 'data': b6s9k0, 'isLoad': !![] });
      } else k0s6 == 0x1 && l$hxg['EnvConfig']['load']['call'](sujq3, ma7v_, dwb058, q9sku, b5d8, cmp7ao);
    }, d2815(ixq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ixq;
  }(),
      tzrgl = function (fva_7) {
    function yhfzrv() {
      yhfzrv['__super']['call'](this);;
    }return nj3qui(yhfzrv, 'laya.wx.mini.MiniFileMgr', fva_7), yhfzrv['isLoadFile'] = function (nqku) {
      return yhfzrv['_fileTypeArr']['indexOf'](nqku) != -0x1 ? !![] : ![];
    }, yhfzrv['getFileInfo'] = function (xi$3gj) {
      var _7fy = xi$3gj['split']('?')[0x0],
          h$ = yhfzrv['filesListObj'][_7fy];if (h$ == null) return null;else return h$;return null;
    }, yhfzrv['onFileUpdate'] = function (jiu3nq, tryz) {
      var yzv4 = jiu3nq['split']('/'),
          dk09 = yzv4[yzv4['length'] - 0x1],
          ix3jg$ = yhfzrv['getFileInfo'](tryz);if (ix3jg$ == null) yhfzrv['onSaveFile'](tryz, dk09);else {
        if (ix3jg$['readyUrl'] != tryz) yhfzrv['remove'](dk09, tryz);
      }
    }, yhfzrv['exits'] = function (qn3iuj, zvf) {
      var jigx$3 = yhfzrv['getFileNativePath'](qn3iuj);yhfzrv['fs']['getFileInfo']({ 'filePath': jigx$3, 'success': function ($igjtx) {
          zvf != null && zvf['runWith']([0x0, $igjtx]);
        }, 'fail': function (p7moac) {
          zvf != null && zvf['runWith']([0x1, p7moac]);
        } });
    }, yhfzrv['read'] = function (_47am, ilg$x, $nq3j, b0856d) {
      ilg$x === void 0x0 && (ilg$x = 'ascill'), b0856d === void 0x0 && (b0856d = '');var k69u;b0856d != '' ? k69u = yhfzrv['getFileNativePath'](_47am) : k69u = _47am, yhfzrv['fs']['readFile']({ 'filePath': k69u, 'encoding': ilg$x, 'success': function (dbk560) {
          $nq3j != null && $nq3j['runWith']([0x0, dbk560]);
        }, 'fail': function (ocpem) {
          if (ocpem && b0856d != '') yhfzrv['down'](b0856d, ilg$x, $nq3j, b0856d);else $nq3j != null && $nq3j['runWith']([0x1]);
        } });
    }, yhfzrv['readNativeFile'] = function ($xhtl, qnjiu3) {
      yhfzrv['fs']['readFile']({ 'filePath': $xhtl, 'encoding': '', 'success': function (_fv47) {
          qnjiu3 != null && qnjiu3['runWith']([0x0]);
        }, 'fail': function (quji) {
          qnjiu3 != null && qnjiu3['runWith']([0x1]);
        } });
    }, yhfzrv['down'] = function (yzrv, nsu9qk, fvz_4, jg3$) {
      nsu9qk === void 0x0 && (nsu9qk = 'ascill'), jg3$ === void 0x0 && (jg3$ = '');var txgij = yhfzrv['getFileNativePath'](jg3$),
          $gtli = yhfzrv['wxdown']({ 'url': yzrv, 'filePath': txgij, 'success': function (o_mca) {
          if (o_mca['statusCode'] === 0xc8) yhfzrv['readFile'](o_mca['filePath'], nsu9qk, fvz_4, jg3$);
        }, 'fail': function (qnij3) {
          fvz_4 != null && fvz_4['runWith']([0x1, qnij3]);
        } });$gtli['onProgressUpdate'](function (fzvy4) {
        fvz_4 != null && fvz_4['runWith']([0x2, fzvy4['progress']]);
      });
    }, yhfzrv['readFile'] = function (kn9s6u, rlfzyh, _4ca7, yzf_4v) {
      rlfzyh === void 0x0 && (rlfzyh = 'ascill'), yzf_4v === void 0x0 && (yzf_4v = ''), yhfzrv['fs']['readFile']({ 'filePath': kn9s6u, 'encoding': rlfzyh, 'success': function (jxt$ig) {
          if (kn9s6u['indexOf']('http://') != -0x1 || kn9s6u['indexOf']('https://') != -0x1) yhfzrv['onFileUpdate'](kn9s6u, yzf_4v);_4ca7 != null && _4ca7['runWith']([0x0, jxt$ig]);
        }, 'fail': function (yv7_) {
          if (yv7_) _4ca7 != null && _4ca7['runWith']([0x1, yv7_]);
        } });
    }, yhfzrv['downImg'] = function (jq3sun, dw028, qn9s3u) {
      qn9s3u === void 0x0 && (qn9s3u = '');var v7f4y = yhfzrv['wxdown']({ 'url': jq3sun, 'success': function (j3xig$) {
          j3xig$['statusCode'] === 0xc8 && yhfzrv['copyFile'](j3xig$['tempFilePath'], qn9s3u, dw028);
        }, 'fail': function (yrhltz) {
          dw028 != null && dw028['runWith']([0x1, yrhltz]);
        } });
    }, yhfzrv['copyFile'] = function (vr4y, qin, y4fzr) {
      var w5d0b8 = vr4y['split']('/'),
          w02d = w5d0b8[w5d0b8['length'] - 0x1],
          $jg = qin['split']('?')[0x0],
          glhzrt = yhfzrv['getFileInfo'](qin),
          yhrfl = yhfzrv['getFileNativePath'](w02d);yhfzrv['fs']['copyFile']({ 'srcPath': vr4y, 'destPath': yhrfl, 'success': function (q$i) {
          if (!glhzrt) yhfzrv['onSaveFile'](qin, w02d), y4fzr != null && y4fzr['runWith']([0x0]);else {
            if (glhzrt['readyUrl'] != qin) yhfzrv['remove'](w02d, qin, y4fzr);
          }
        }, 'fail': function (lztyrh) {
          y4fzr != null && y4fzr['runWith']([0x1, lztyrh]);
        } });
    }, yhfzrv['getFileNativePath'] = function (zthlr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zthlr;
    }, yhfzrv['remove'] = function (gzltr, $j3ig, v47f_y) {
      $j3ig === void 0x0 && ($j3ig = '');var fzyrh = yhfzrv['getFileInfo']($j3ig),
          ltyz = yhfzrv['getFileNativePath'](fzyrh['md5']);v_a7f4['loader']['clearRes'](fzyrh['readyUrl']), yhfzrv['fs']['unlink']({ 'filePath': ltyz, 'success': function (wd5218) {
          if ($j3ig != '') yhfzrv['onSaveFile']($j3ig, gzltr);v47f_y != null && v47f_y['runWith']([0x0]);
        }, 'fail': function (m_c7a4) {} });
    }, yhfzrv['onSaveFile'] = function (lyr, ltzrgh) {
      var amv7 = lyr['split']('?')[0x0];yhfzrv['filesListObj'][amv7] = { 'md5': ltzrgh, 'readyUrl': lyr }, yhfzrv['fs']['writeFile']({ 'filePath': yhfzrv['fileNativeDir'] + '/' + yhfzrv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yhfzrv['filesListObj']), 'success': function (in3uq) {
          console['log']('写入测试测试成功：', in3uq);
        }, 'fail': function (apcm7o) {
          console['log']('写入测试测试失败：', apcm7o);
        } });
    }, yhfzrv['existDir'] = function (rzg, s06kb) {
      yhfzrv['fs']['mkdir']({ 'dirPath': rzg, 'success': function (m_co7a) {
          s06kb != null && s06kb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (iu3qn) {
          if (iu3qn['errMsg']['indexOf']('file already exists') != -0x1) yhfzrv['readSync'](yhfzrv['fileListName'], 'utf8', s06kb);else s06kb != null && s06kb['runWith']([0x1, iu3qn]);
        } });
    }, yhfzrv['readSync'] = function (usn9, f4_, a_f4, niq) {
      f4_ === void 0x0 && (f4_ = 'ascill'), niq === void 0x0 && (niq = '');var htrxg = yhfzrv['getFileNativePath'](usn9),
          xrtgh;try {
        xrtgh = yhfzrv['fs']['readFileSync'](htrxg), a_f4 != null && a_f4['runWith']([0x0, { 'data': xrtgh }]);
      } catch (_amv47) {
        a_f4 != null && a_f4['runWith']([0x1]);
      }
    }, yhfzrv['readCache'] = function () {}, yhfzrv['writeCache'] = function (nksq9u) {
      var tlrhz = readyUrl['split']('?')[0x0];yhfzrv['filesListObj'][tlrhz] = { 'md5': md5Name, 'readyUrl': readyUrl }, yhfzrv['fs']['writeFile']({ 'filePath': yhfzrv['fileNativeDir'] + '/' + yhfzrv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yhfzrv['filesListObj']), 'success': function (h$tx) {}, 'fail': function (k06d9) {} });
    }, yhfzrv['setNativeFileDir'] = function (hfzlr) {
      yhfzrv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hfzlr;
    }, yhfzrv['filesListObj'] = {}, yhfzrv['fileNativeDir'] = null, yhfzrv['fileListName'] = 'layaairfiles.txt', yhfzrv['ziyuFileData'] = {}, d2815(yhfzrv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yhfzrv;
  }(ijq3n$),
      s0k9b6 = function (xg3j$i) {
    function nuj3q() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], nuj3q['__super']['call'](this), this['_sound'] = nuj3q['_createSound']();
    }nj3qui(nuj3q, 'laya.wx.mini.MiniSound', xg3j$i);var unsj3q = nuj3q['prototype'];return unsj3q['load'] = function (m_a7c) {
      var hzgrtl = this;m_a7c = uksn9['formatURL'](m_a7c), this['url'] = m_a7c;if (nuj3q['_audioCache'][m_a7c]) {
        this['event']('complete');return;
      }function nji3uq() {
        if (nuj3q['_null'] != undefined) hzgrtl['_sound']['onCanplay'](nuj3q['_null']), hzgrtl['_sound']['onError'](nuj3q['_null']);else try {
          hzgrtl['_sound']['onCanplay'](null), hzgrtl['_sound']['onError'](null), nuj3q['_null'] = null;
        } catch (uq9s) {
          console['warn']('[wxmini] _clearSound:' + uq9s), hzgrtl['_sound']['onCanplay'](ac7mp), hzgrtl['_sound']['onError'](ac7mp), nuj3q['_null'] = ac7mp;
        }
      }function mc7a() {
        nji3uq(), poecam['loaded'] = !![], poecam['event']('complete'), nuj3q['_audioCache'][poecam['url']] = poecam;
      }function p7acom(jn3$i) {
        console['error']('errCode=' + jn3$i['errCode'] + '  errMsg=' + jn3$i['errMsg']), nji3uq(), poecam['event']('error');
      }function ac7mp() {}this['_sound']['onCanplay'](mc7a), this['_sound']['onError'](p7acom), this['_sound']['src'] = m_a7c;var poecam = this;
    }, unsj3q['play'] = function (opeca, ji$xg) {
      opeca === void 0x0 && (opeca = 0x0), ji$xg === void 0x0 && (ji$xg = 0x0);var v7fy_4;if (this['url'] == vzyhfr['_tMusic']) {
        if (!nuj3q['_musicAudio']) nuj3q['_musicAudio'] = nuj3q['_createSound']();v7fy_4 = nuj3q['_musicAudio'];
      } else v7fy_4 = nuj3q['_createSound']();v7fy_4['src'] = this['url'];var thgl$x = new ca7m_o(v7fy_4);return thgl$x['url'] = this['url'], thgl$x['loops'] = ji$xg, thgl$x['startTime'] = opeca, thgl$x['play'](), vzyhfr['addChannel'](thgl$x), thgl$x;
    }, unsj3q['dispose'] = function () {
      var m_ac4 = nuj3q['_audioCache'][this['url']];m_ac4 && (m_ac4['src'] = '', delete nuj3q['_audioCache'][this['url']]);
    }, i$jxg(0x0, unsj3q, 'duration', function () {
      return this['_sound']['duration'];
    }), nuj3q['_createSound'] = function () {
      return nuj3q['_id']++, l$hxg['window']['wx']['createInnerAudioContext']();
    }, nuj3q['_musicAudio'] = null, nuj3q['_id'] = 0x0, nuj3q['_audioCache'] = {}, nuj3q['_null'] = undefined, nuj3q;
  }(ijq3n$),
      ca7m_o = function (ryzthl) {
    function zhlr(k60sb) {
      this['_audio'] = null, this['_onEnd'] = null, zhlr['__super']['call'](this), this['_audio'] = k60sb, this['_onEnd'] = lzyrht['bind'](this['__onEnd'], this), k60sb['onEnded'](this['_onEnd']);
    }nj3qui(zhlr, 'laya.wx.mini.MiniSoundChannel', ryzthl);var yfv4z_ = zhlr['prototype'];return yfv4z_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (v_a7f4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yfv4z_['__onNull'] = function () {}, yfv4z_['play'] = function () {
      this['isStopped'] = ![], vzyhfr['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, yfv4z_['stop'] = function () {
      this['isStopped'] = !![], vzyhfr['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (zhlr['_null'] != undefined) this['_audio']['onEnded'](zhlr['_null']);else try {
        this['_audio']['onEnded'](null), zhlr['_null'] = null;
      } catch (gix3$j) {
        console['warn']('[wxmini] stop:' + gix3$j), this['_audio']['onEnded'](lzyrht['bind'](this['__onNull'], this)), zhlr['_null'] = lzyrht['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, yfv4z_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, yfv4z_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vzyhfr['addChannel'](this), this['_audio']['play']();
    }, i$jxg(0x0, yfv4z_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), i$jxg(0x0, yfv4z_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), i$jxg(0x0, yfv4z_, 'volume', function () {
      return 0x1;
    }, function (zlrf) {}), zhlr['_null'] = undefined, zhlr;
  }(apmo7c);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var r4zf in Laya) {
    var ksuq9 = Laya[r4zf];ksuq9 && ksuq9['__isclass'] && (exports[r4zf] = ksuq9);
  }
});