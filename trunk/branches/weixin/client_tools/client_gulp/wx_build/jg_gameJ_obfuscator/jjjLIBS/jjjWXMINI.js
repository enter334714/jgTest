var S = wx.$J;
(function (window, document, gcsyo0) {
  var u0g4lc = gcsyo0['un'],
      yc0os = gcsyo0['uns'],
      m1fdq = gcsyo0['static'],
      n3jv5 = gcsyo0['class'],
      p53en = gcsyo0['getset'],
      enb4 = gcsyo0['__newvec'],
      lg40uc = laya['utils']['Browser'],
      z9xia = laya['events']['Event'],
      xidq28 = laya['events']['EventDispatcher'],
      b4lu0c = laya['resource']['HTMLImage'],
      bne4p = laya['utils']['Handler'],
      mfq2d1 = laya['display']['Input'],
      be4n = laya['net']['Loader'],
      p5en4 = laya['maths']['Matrix'],
      kogy6s = laya['renders']['Render'],
      z8i92x = laya['utils']['RunDriver'],
      ks76rf = laya['media']['Sound'],
      x9hzia = laya['media']['SoundChannel'],
      q8xdi = laya['media']['SoundManager'],
      ix98a = laya['display']['Stage'],
      np4eb5 = laya['net']['URL'],
      npe3j5 = laya['utils']['Utils'],
      m218dq = function () {
    function d2m8q() {}return n3jv5(d2m8q, 'laya.wx.mini.MiniAdpter'), d2m8q['getJson'] = function (o67) {
      return JSON['parse'](o67);
    }, d2m8q['init'] = function (jvn5w3, qrf7m) {
      jvn5w3 === void 0x0 && (jvn5w3 = ![]), qrf7m === void 0x0 && (qrf7m = ![]);if (d2m8q['_inited']) return;d2m8q['window'] = window;if (d2m8q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;d2m8q['_inited'] = !![], d2m8q['isZiYu'] = qrf7m, d2m8q['isPosMsgYu'] = jvn5w3, d2m8q['EnvConfig'] = {}, !d2m8q['isZiYu'] && (z$9ahx['setNativeFileDir']('/layaairGame'), z$9ahx['existDir'](z$9ahx['fileNativeDir'], bne4p['create'](d2m8q, d2m8q['onMkdirCallBack']))), d2m8q['window']['focus'] = function () {}, gcsyo0['getUrlPath'] = function () {}, d2m8q['window']['logtime'] = function (d1iq8) {}, d2m8q['window']['alertTimeLog'] = function (axi9h) {}, d2m8q['window']['resetShareInfo'] = function () {}, d2m8q['window']['CanvasRenderingContext2D'] = function () {}, d2m8q['window']['CanvasRenderingContext2D']['prototype'] = d2m8q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d2m8q['window']['document']['body']['appendChild'] = function () {}, d2m8q['EnvConfig']['pixelRatioInt'] = 0x0, z8i92x['getPixelRatio'] = d2m8q['pixelRatio'], d2m8q['_preCreateElement'] = lg40uc['createElement'], lg40uc['createElement'] = d2m8q['createElement'], z8i92x['createShaderCondition'] = d2m8q['createShaderCondition'], npe3j5['parseXMLFromString'] = d2m8q['parseXMLFromString'], mfq2d1['_createInputElement'] = k7frs['_createInputElement'], d2m8q['EnvConfig']['load'] = be4n['prototype']['load'], be4n['prototype']['load'] = xz9aih['prototype']['load'], d2m8q['isZiYu'] && jvn5w3 && wx['onMessage'](function (nj5pb) {
        nj5pb['isLoad'] && (z$9ahx['ziyuFileData'][nj5pb['url']] = nj5pb['data']);
      });
    }, d2m8q['onMkdirCallBack'] = function (ksy0, y0gko) {
      if (!ksy0) z$9ahx['filesListObj'] = JSON['parse'](y0gko['data']);
    }, d2m8q['pixelRatio'] = function () {
      if (!d2m8q['EnvConfig']['pixelRatioInt']) try {
        var lb4u = wx['getSystemInfoSync']();return d2m8q['EnvConfig']['pixelRatioInt'] = lb4u['pixelRatio'], lb4u = lb4u, lb4u['pixelRatio'];
      } catch (o7yk6) {}return d2m8q['EnvConfig']['pixelRatioInt'];
    }, d2m8q['createElement'] = function (up4ebl) {
      if (up4ebl == 'canvas') {
        var idxq82;return d2m8q['idx'] == 0x1 ? d2m8q['isZiYu'] ? (idxq82 = sharedCanvas, idxq82['style'] = {}) : idxq82 = window['canvas'] : idxq82 = window['wx']['createCanvas'](), d2m8q['idx']++, idxq82;
      } else {
        if (up4ebl == 'textarea' || up4ebl == 'input') return d2m8q['onCreateInput'](up4ebl);else {
          if (up4ebl == 'div') {
            var p3nj5 = d2m8q['_preCreateElement'](up4ebl);return p3nj5['contains'] = function (neb) {
              return null;
            }, p3nj5['removeChild'] = function (y6krs7) {}, p3nj5;
          } else return d2m8q['_preCreateElement'](up4ebl);
        }
      }
    }, d2m8q['onCreateInput'] = function (bl4pue) {
      var ks7yr6 = d2m8q['_preCreateElement'](bl4pue);return ks7yr6['focus'] = k7frs['wxinputFocus'], ks7yr6['blur'] = k7frs['wxinputblur'], ks7yr6['style'] = {}, ks7yr6['value'] = 0x0, ks7yr6['parentElement'] = {}, ks7yr6['placeholder'] = {}, ks7yr6['type'] = {}, ks7yr6['setColor'] = function (csgo0y) {}, ks7yr6['setType'] = function (b5jnpe) {}, ks7yr6['setFontFace'] = function (uc04bl) {}, ks7yr6['addEventListener'] = function (zi892x) {}, ks7yr6['contains'] = function (bjpe) {
        return null;
      }, ks7yr6['removeChild'] = function (u4lepb) {}, ks7yr6;
    }, d2m8q['createShaderCondition'] = function (x8zia) {
      var cubel4 = this,
          azhx = function () {
        var sgoy0 = x8zia;return cubel4[x8zia['replace']('this.', '')];
      };return azhx;
    }, d2m8q['EnvConfig'] = null, d2m8q['window'] = null, d2m8q['_preCreateElement'] = null, d2m8q['_inited'] = ![], d2m8q['wxRequest'] = null, d2m8q['systemInfo'] = null, d2m8q['version'] = '0.0.1', d2m8q['isZiYu'] = ![], d2m8q['isPosMsgYu'] = ![], d2m8q['parseXMLFromString'] = function (en5bpj) {
      var i9d82x, d2xi;en5bpj = en5bpj['replace'](/>\s+</g, '><');try {
        i9d82x = new window['Parser']['DOMParser']()['parseFromString'](en5bpj, 'text/xml');
      } catch (sko0yg) {
        throw '需要引入xml解析库文件';
      }return i9d82x;
    }, d2m8q['idx'] = 0x1, d2m8q;
  }(),
      x9zi28 = function () {
    function ysgo6k() {}n3jv5(ysgo6k, 'laya.wx.mini.MiniImage');var j5nep = ysgo6k['prototype'];return j5nep['_loadImage'] = function (pb4un) {
      var pj5n3 = this,
          qrf = ![];pb4un['indexOf']('layaNativeDir/') == -0x1 && (qrf = !![], pb4un = np4eb5['formatURL'](pb4un));if (!z$9ahx['getFileInfo'](pb4un)) {
        if (pb4un['indexOf']('http://') != -0x1 || pb4un['indexOf']('https://') != -0x1) z$9ahx['downImg'](pb4un, new bne4p(ysgo6k, ysgo6k['onDownImgCallBack'], [pb4un, pj5n3]), pb4un);else ysgo6k['onCreateImage'](pb4un, pj5n3, !![]);
      } else ysgo6k['onCreateImage'](pb4un, pj5n3, !qrf);
    }, ysgo6k['onDownImgCallBack'] = function (mqf, qid18, celbu4) {
      if (!celbu4) ysgo6k['onCreateImage'](mqf, qid18);else qid18['onError'](null);
    }, ysgo6k['onCreateImage'] = function (yskog0, pbl4eu, wp53n) {
      wp53n === void 0x0 && (wp53n = ![]);var m1qrf;if (!wp53n) {
        var q2di8x = z$9ahx['getFileInfo'](yskog0),
            q2ixd8 = q2di8x['md5'];m1qrf = z$9ahx['getFileNativePath'](q2ixd8);
      } else m1qrf = yskog0;if (pbl4eu['imgCache'] == null) pbl4eu['imgCache'] = {};var qdr1fm;function gc40u() {
        qdr1fm['onload'] = null, qdr1fm['onerror'] = null, delete pbl4eu['imgCache'][yskog0];
      };var w5nj3 = function () {
        gc40u(), pbl4eu['onLoaded'](qdr1fm);
      },
          b4u0l = function () {
        gc40u(), pbl4eu['event']('error', 'Load image failed');
      };pbl4eu['_type'] == 'nativeimage' ? (qdr1fm = new lg40uc['window']['Image'](), qdr1fm['crossOrigin'] = '', qdr1fm['onload'] = w5nj3, qdr1fm['onerror'] = b4u0l, qdr1fm['src'] = m1qrf, pbl4eu['imgCache'][yskog0] = qdr1fm) : new b4lu0c['create'](m1qrf, { 'onload': w5nj3, 'onerror': b4u0l, 'onCreate': function (x2z8i) {
          qdr1fm = x2z8i, pbl4eu['imgCache'][yskog0] = x2z8i;
        } });
    }, ysgo6k;
  }(),
      k7frs = function () {
    function jpneb5() {}return n3jv5(jpneb5, 'laya.wx.mini.MiniInput'), jpneb5['_createInputElement'] = function () {
      mfq2d1['_initInput'](mfq2d1['area'] = lg40uc['createElement']('textarea')), mfq2d1['_initInput'](mfq2d1['input'] = lg40uc['createElement']('input')), mfq2d1['inputContainer'] = lg40uc['createElement']('div'), mfq2d1['inputContainer']['style']['position'] = 'absolute', mfq2d1['inputContainer']['style']['zIndex'] = 0x186a0, lg40uc['container']['appendChild'](mfq2d1['inputContainer']), mfq2d1['inputContainer']['setPos'] = function (bl4c0, lb40cu) {
        mfq2d1['inputContainer']['style']['left'] = bl4c0 + 'px', mfq2d1['inputContainer']['style']['top'] = lb40cu + 'px';
      }, gcsyo0['stage']['on']('resize', null, jpneb5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (b4le) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), q8xdi['_soundClass'] = luc04, q8xdi['_musicClass'] = luc04;
    }, jpneb5['_onStageResize'] = function () {
      var j5pneb = gcsyo0['stage']['_canvasTransform']['identity']();j5pneb['scale'](lg40uc['width'] / kogy6s['canvas']['width'] / z8i92x['getPixelRatio'](), lg40uc['height'] / kogy6s['canvas']['height'] / z8i92x['getPixelRatio']());
    }, jpneb5['wxinputFocus'] = function (kfr) {
      var gyc0ol = mfq2d1['inputElement']['target'];if (gyc0ol && !gyc0ol['editable']) return;m218dq['window']['wx']['offKeyboardConfirm'](), m218dq['window']['wx']['offKeyboardInput'](), m218dq['window']['wx']['showKeyboard']({ 'defaultValue': gyc0ol['text'], 'maxLength': gyc0ol['maxChars'], 'multiple': gyc0ol['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (i829xz) {}, 'fail': function (n5e3pj) {} }), m218dq['window']['wx']['onKeyboardConfirm'](function (s6k7) {
        var d8i1q = s6k7 ? s6k7['value'] : '';gyc0ol['text'] = d8i1q, gyc0ol['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m218dq['window']['wx']['onKeyboardInput'](function (lyoc) {
        var z8i2x = lyoc ? lyoc['value'] : '';if (!gyc0ol['multiline']) {
          if (z8i2x['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gyc0ol['text'] = z8i2x, gyc0ol['event']('input');
      });
    }, jpneb5['inputEnter'] = function () {
      mfq2d1['inputElement']['target']['focus'] = ![];
    }, jpneb5['wxinputblur'] = function () {
      jpneb5['hideKeyboard']();
    }, jpneb5['hideKeyboard'] = function () {
      m218dq['window']['wx']['offKeyboardConfirm'](), m218dq['window']['wx']['offKeyboardInput'](), m218dq['window']['wx']['hideKeyboard']({ 'success': function (bpul4e) {
          console['log']('隐藏键盘');
        }, 'fail': function ($zxh) {
          console['log']('隐藏键盘出错:' + ($zxh ? $zxh['errMsg'] : ''));
        } });
    }, jpneb5;
  }(),
      xz9aih = function () {
    function fr71mq() {}n3jv5(fr71mq, 'laya.wx.mini.MiniLoader');var ziax89 = fr71mq['prototype'];return ziax89['load'] = function (f17mq, n4pb5e, fr67sk, xazh$9, qdfrm) {
      fr67sk === void 0x0 && (fr67sk = !![]), qdfrm === void 0x0 && (qdfrm = ![]);var $ax9zh = this;$ax9zh['_url'] = f17mq;if (f17mq['indexOf']('data:image') === 0x0) $ax9zh['_type'] = n4pb5e = 'image';else $ax9zh['_type'] = n4pb5e || (n4pb5e = $ax9zh['getTypeFromUrl'](f17mq));$ax9zh['_cache'] = fr67sk, $ax9zh['_data'] = null;var bj5ne = 'ascii';if (f17mq['indexOf']('.fnt') != -0x1) bj5ne = 'utf8';else n4pb5e == 'arraybuffer' && (bj5ne = '');;var fm21qd = npe3j5['getFileExtension'](f17mq);if (fr71mq['_fileTypeArr']['indexOf'](fm21qd) != -0x1) m218dq['EnvConfig']['load']['call'](this, f17mq, n4pb5e, fr67sk, xazh$9, qdfrm);else {
        if (!z$9ahx['getFileInfo'](f17mq)) {
          if (f17mq['indexOf']('layaNativeDir/') != -0x1) {
            if (m218dq['isZiYu']) {
              var blu4ce = z$9ahx['ziyuFileData'][f17mq];$ax9zh['onLoaded'](blu4ce);return;
            } else {
              cosnole['log']('read read'), z$9ahx['read'](f17mq, bj5ne, new bne4p(fr71mq, fr71mq['onReadNativeCallBack'], [bj5ne, f17mq, n4pb5e, fr67sk, xazh$9, qdfrm, $ax9zh]));return;
            }
          }if (np4eb5['rootPath'] == '') var ax$h9z = f17mq;else ax$h9z = f17mq['split'](np4eb5['rootPath'])[0x0];f17mq['indexOf']('http://') != -0x1 || f17mq['indexOf']('https://') != -0x1 ? m218dq['EnvConfig']['load']['call']($ax9zh, f17mq, n4pb5e, fr67sk, xazh$9, qdfrm) : z$9ahx['readFile'](ax$h9z, bj5ne, new bne4p(fr71mq, fr71mq['onReadNativeCallBack'], [bj5ne, f17mq, n4pb5e, fr67sk, xazh$9, qdfrm, $ax9zh]), f17mq);
        } else m218dq['EnvConfig']['load']['call'](this, f17mq, n4pb5e, fr67sk, xazh$9, qdfrm);
      }
    }, ziax89['resMgrLoad'] = function (eluc4, n5w3jv, z928x, yg6k, s0og, n3v5, bepun4) {
      z928x === void 0x0 && (z928x = 0x0), yg6k === void 0x0 && (yg6k = ![]), s0og === void 0x0 && (s0og = ![]), n3v5 === void 0x0 && (n3v5 = 0x0), bepun4 === void 0x0 && (bepun4 = 0x3), eluc4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', eluc4), m218dq['EnvConfig']['resMgrLoad'](eluc4, (i2x9, dqm821, up4lbe) => {
        fr71mq['prototype']['resMgrLoadCallBack'](i2x9, dqm821, up4lbe, n5w3jv);
      }, z928x, yg6k, s0og, n3v5, bepun4);
    }, ziax89['resMgrLoadCallBack'] = function (nepbj, qf7m1, gsy6ko, m1f7rq) {
      console['log']('buff:::', nepbj, gsy6ko, z$9ahx['fileNativeDir'] + '///' + z$9ahx['fileListName']), m1f7rq(nepbj, qf7m1, gsy6ko);
    }, ziax89['clearRes'] = function (cg40ul, h$zxa) {
      h$zxa === void 0x0 && (h$zxa = ![]);var sr6k7f = this;sr6k7f['clearRes'](cg40ul, h$zxa);var h9$xz = z$9ahx['getFileInfo'](cg40ul);if (h9$xz && (cg40ul['indexOf']('http://') != -0x1 || cg40ul['indexOf']('https://') != -0x1)) {
        var i92z8 = h9$xz['md5'],
            izaxh = z$9ahx['getFileNativePath'](i92z8);z$9ahx['remove'](izaxh);
      }
    }, fr71mq['onReadNativeCallBack'] = function (r71f6, pnej5, hz9a$, lyocg, ix28z, ej3np5, gyloc, iq2d18, i281dq) {
      lyocg === void 0x0 && (lyocg = !![]), ej3np5 === void 0x0 && (ej3np5 = ![]), iq2d18 === void 0x0 && (iq2d18 = 0x0);if (!iq2d18) {
        var axz89i;if (hz9a$ == 'json' || hz9a$ == 'atlas') axz89i = m218dq['getJson'](i281dq['data']);else hz9a$ == 'xml' ? axz89i = npe3j5['parseXMLFromString'](i281dq['data']) : axz89i = i281dq['data'];gyloc['onLoaded'](axz89i), !m218dq['isZiYu'] && m218dq['isPosMsgYu'] && hz9a$ != 'arraybuffer' && wx['postMessage']({ 'url': pnej5, 'data': axz89i, 'isLoad': !![] });
      } else iq2d18 == 0x1 && m218dq['EnvConfig']['load']['call'](gyloc, pnej5, hz9a$, lyocg, ix28z, ej3np5);
    }, m1fdq(fr71mq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fr71mq;
  }(),
      z$9ahx = function (ogksy0) {
    function ocg0yl() {
      ocg0yl['__super']['call'](this);;
    }return n3jv5(ocg0yl, 'laya.wx.mini.MiniFileMgr', ogksy0), ocg0yl['isLoadFile'] = function (p45e) {
      return ocg0yl['_fileTypeArr']['indexOf'](p45e) != -0x1 ? !![] : ![];
    }, ocg0yl['getFileInfo'] = function (qfmdr1) {
      var z2xi9 = qfmdr1['split']('?')[0x0],
          i18dq = ocg0yl['filesListObj'][z2xi9];if (i18dq == null) return null;else return i18dq;return null;
    }, ocg0yl['onFileUpdate'] = function (ub4e, rfm7k) {
      var ksyo67 = ub4e['split']('/'),
          nuep4 = ksyo67[ksyo67['length'] - 0x1],
          lguco0 = ocg0yl['getFileInfo'](rfm7k);if (lguco0 == null) ocg0yl['onSaveFile'](rfm7k, nuep4);else {
        if (lguco0['readyUrl'] != rfm7k) ocg0yl['remove'](nuep4, rfm7k);
      }
    }, ocg0yl['exits'] = function (ygl0c, j3pen5) {
      var iahz9x = ocg0yl['getFileNativePath'](ygl0c);ocg0yl['fs']['getFileInfo']({ 'filePath': iahz9x, 'success': function (x8iq2d) {
          j3pen5 != null && j3pen5['runWith']([0x0, x8iq2d]);
        }, 'fail': function (lubc4) {
          j3pen5 != null && j3pen5['runWith']([0x1, lubc4]);
        } });
    }, ocg0yl['read'] = function (rmf17, zaxi, qd28i, lyo) {
      zaxi === void 0x0 && (zaxi = 'ascill'), lyo === void 0x0 && (lyo = '');var drmf1;lyo != '' ? drmf1 = ocg0yl['getFileNativePath'](rmf17) : drmf1 = rmf17, ocg0yl['fs']['readFile']({ 'filePath': drmf1, 'encoding': zaxi, 'success': function (d28) {
          qd28i != null && qd28i['runWith']([0x0, d28]);
        }, 'fail': function (h9iza) {
          if (h9iza && lyo != '') ocg0yl['down'](lyo, zaxi, qd28i, lyo);else qd28i != null && qd28i['runWith']([0x1]);
        } });
    }, ocg0yl['readNativeFile'] = function (lgcu04, blu0c) {
      ocg0yl['fs']['readFile']({ 'filePath': lgcu04, 'encoding': '', 'success': function (o0lgc) {
          blu0c != null && blu0c['runWith']([0x0]);
        }, 'fail': function (lgcy0) {
          blu0c != null && blu0c['runWith']([0x1]);
        } });
    }, ocg0yl['down'] = function (beu4c, p3n5je, f1dm2, i9za8) {
      p3n5je === void 0x0 && (p3n5je = 'ascill'), i9za8 === void 0x0 && (i9za8 = '');var dmfq1r = ocg0yl['getFileNativePath'](i9za8),
          p5bn = ocg0yl['wxdown']({ 'url': beu4c, 'filePath': dmfq1r, 'success': function (a89z) {
          if (a89z['statusCode'] === 0xc8) ocg0yl['readFile'](a89z['filePath'], p3n5je, f1dm2, i9za8);
        }, 'fail': function (enpub) {
          f1dm2 != null && f1dm2['runWith']([0x1, enpub]);
        } });p5bn['onProgressUpdate'](function ($z9ah) {
        f1dm2 != null && f1dm2['runWith']([0x2, $z9ah['progress']]);
      });
    }, ocg0yl['readFile'] = function (mdqf2, bnep5j, qm182, y6oks7) {
      bnep5j === void 0x0 && (bnep5j = 'ascill'), y6oks7 === void 0x0 && (y6oks7 = ''), ocg0yl['fs']['readFile']({ 'filePath': mdqf2, 'encoding': bnep5j, 'success': function (v3n5) {
          if (mdqf2['indexOf']('http://') != -0x1 || mdqf2['indexOf']('https://') != -0x1) ocg0yl['onFileUpdate'](mdqf2, y6oks7);qm182 != null && qm182['runWith']([0x0, v3n5]);
        }, 'fail': function (ahx9zi) {
          if (ahx9zi) qm182 != null && qm182['runWith']([0x1, ahx9zi]);
        } });
    }, ocg0yl['downImg'] = function (mfk6, l4pbeu, d1rfqm) {
      d1rfqm === void 0x0 && (d1rfqm = '');var o0sgyc = ocg0yl['wxdown']({ 'url': mfk6, 'success': function (ul0g4) {
          ul0g4['statusCode'] === 0xc8 && ocg0yl['copyFile'](ul0g4['tempFilePath'], d1rfqm, l4pbeu);
        }, 'fail': function (epjb5) {
          l4pbeu != null && l4pbeu['runWith']([0x1, epjb5]);
        } });
    }, ocg0yl['copyFile'] = function (eclb, l0gcou, ksr7y6) {
      var yr7 = eclb['split']('/'),
          fdmq12 = yr7[yr7['length'] - 0x1],
          plub4e = l0gcou['split']('?')[0x0],
          zixa9 = ocg0yl['getFileInfo'](l0gcou),
          ubenp4 = ocg0yl['getFileNativePath'](fdmq12);ocg0yl['fs']['copyFile']({ 'srcPath': eclb, 'destPath': ubenp4, 'success': function (qx82i) {
          if (!zixa9) ocg0yl['onSaveFile'](l0gcou, fdmq12), ksr7y6 != null && ksr7y6['runWith']([0x0]);else {
            if (zixa9['readyUrl'] != l0gcou) ocg0yl['remove'](fdmq12, l0gcou, ksr7y6);
          }
        }, 'fail': function (ihz9) {
          ksr7y6 != null && ksr7y6['runWith']([0x1, ihz9]);
        } });
    }, ocg0yl['getFileNativePath'] = function (z$xha) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + z$xha;
    }, ocg0yl['remove'] = function (x928, p5jn3w, blc4eu) {
      p5jn3w === void 0x0 && (p5jn3w = '');var upeb4n = ocg0yl['getFileInfo'](p5jn3w),
          xh9a$ = ocg0yl['getFileNativePath'](upeb4n['md5']);gcsyo0['loader']['clearRes'](upeb4n['readyUrl']), ocg0yl['fs']['unlink']({ 'filePath': xh9a$, 'success': function (qd21f) {
          if (p5jn3w != '') ocg0yl['onSaveFile'](p5jn3w, x928);blc4eu != null && blc4eu['runWith']([0x0]);
        }, 'fail': function (wvj5n3) {} });
    }, ocg0yl['onSaveFile'] = function (kf6, xiz982) {
      var pj5nbe = kf6['split']('?')[0x0];ocg0yl['filesListObj'][pj5nbe] = { 'md5': xiz982, 'readyUrl': kf6 }, ocg0yl['fs']['writeFile']({ 'filePath': ocg0yl['fileNativeDir'] + '/' + ocg0yl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ocg0yl['filesListObj']), 'success': function (m1fq7r) {
          console['log']('写入测试测试成功：', m1fq7r);
        }, 'fail': function (kf6s) {
          console['log']('写入测试测试失败：', kf6s);
        } });
    }, ocg0yl['existDir'] = function (ksf6r, uoc0l) {
      ocg0yl['fs']['mkdir']({ 'dirPath': ksf6r, 'success': function (dr1qf) {
          uoc0l != null && uoc0l['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gyko6s) {
          if (gyko6s['errMsg']['indexOf']('file already exists') != -0x1) ocg0yl['readSync'](ocg0yl['fileListName'], 'utf8', uoc0l);else uoc0l != null && uoc0l['runWith']([0x1, gyko6s]);
        } });
    }, ocg0yl['readSync'] = function (di8q2x, sco0, dqix8, m6r7fk) {
      sco0 === void 0x0 && (sco0 = 'ascill'), m6r7fk === void 0x0 && (m6r7fk = '');var i2dq81 = ocg0yl['getFileNativePath'](di8q2x),
          ogk0s;try {
        ogk0s = ocg0yl['fs']['readFileSync'](i2dq81), dqix8 != null && dqix8['runWith']([0x0, { 'data': ogk0s }]);
      } catch (ogcys0) {
        dqix8 != null && dqix8['runWith']([0x1]);
      }
    }, ocg0yl['readCache'] = function () {}, ocg0yl['writeCache'] = function (gsy6) {
      var wjp35n = readyUrl['split']('?')[0x0];ocg0yl['filesListObj'][wjp35n] = { 'md5': md5Name, 'readyUrl': readyUrl }, ocg0yl['fs']['writeFile']({ 'filePath': ocg0yl['fileNativeDir'] + '/' + ocg0yl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ocg0yl['filesListObj']), 'success': function (ysk0go) {}, 'fail': function (hix9za) {} });
    }, ocg0yl['setNativeFileDir'] = function (diq21) {
      ocg0yl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + diq21;
    }, ocg0yl['filesListObj'] = {}, ocg0yl['fileNativeDir'] = null, ocg0yl['fileListName'] = 'layaairfiles.txt', ocg0yl['ziyuFileData'] = {}, m1fdq(ocg0yl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ocg0yl;
  }(xidq28),
      luc04 = function (uoclg) {
    function co0ysg() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], co0ysg['__super']['call'](this), this['_sound'] = co0ysg['_createSound']();
    }n3jv5(co0ysg, 'laya.wx.mini.MiniSound', uoclg);var d8iqx2 = co0ysg['prototype'];return d8iqx2['load'] = function (pnjb5e) {
      var d82qxi = this;pnjb5e = np4eb5['formatURL'](pnjb5e), this['url'] = pnjb5e;if (co0ysg['_audioCache'][pnjb5e]) {
        this['event']('complete');return;
      }function ihax9z() {
        if (co0ysg['_null'] != undefined) d82qxi['_sound']['onCanplay'](co0ysg['_null']), d82qxi['_sound']['onError'](co0ysg['_null']);else try {
          d82qxi['_sound']['onCanplay'](null), d82qxi['_sound']['onError'](null), co0ysg['_null'] = null;
        } catch (osg0y) {
          console['warn']('[wxmini] _clearSound:' + osg0y), d82qxi['_sound']['onCanplay'](puneb), d82qxi['_sound']['onError'](puneb), co0ysg['_null'] = puneb;
        }
      }function j3pw5() {
        ihax9z(), az$xh9['loaded'] = !![], az$xh9['event']('complete'), co0ysg['_audioCache'][az$xh9['url']] = az$xh9;
      }function rky76(ygok0s) {
        console['error']('errCode=' + ygok0s['errCode'] + '  errMsg=' + ygok0s['errMsg']), ihax9z(), az$xh9['event']('error');
      }function puneb() {}this['_sound']['onCanplay'](j3pw5), this['_sound']['onError'](rky76), this['_sound']['src'] = pnjb5e;var az$xh9 = this;
    }, d8iqx2['play'] = function (n3j5wp, a$xz) {
      n3j5wp === void 0x0 && (n3j5wp = 0x0), a$xz === void 0x0 && (a$xz = 0x0);var diqx28;if (this['url'] == q8xdi['_tMusic']) {
        if (!co0ysg['_musicAudio']) co0ysg['_musicAudio'] = co0ysg['_createSound']();diqx28 = co0ysg['_musicAudio'];
      } else diqx28 = co0ysg['_createSound']();diqx28['src'] = this['url'];var rsky67 = new xd29(diqx28);return rsky67['url'] = this['url'], rsky67['loops'] = a$xz, rsky67['startTime'] = n3j5wp, rsky67['play'](), q8xdi['addChannel'](rsky67), rsky67;
    }, d8iqx2['dispose'] = function () {
      var ys6rk = co0ysg['_audioCache'][this['url']];ys6rk && (ys6rk['src'] = '', delete co0ysg['_audioCache'][this['url']]);
    }, p53en(0x0, d8iqx2, 'duration', function () {
      return this['_sound']['duration'];
    }), co0ysg['_createSound'] = function () {
      return co0ysg['_id']++, m218dq['window']['wx']['createInnerAudioContext']();
    }, co0ysg['_musicAudio'] = null, co0ysg['_id'] = 0x0, co0ysg['_audioCache'] = {}, co0ysg['_null'] = undefined, co0ysg;
  }(xidq28),
      xd29 = function (cu0lg) {
    function e5nb(lbec4) {
      this['_audio'] = null, this['_onEnd'] = null, e5nb['__super']['call'](this), this['_audio'] = lbec4, this['_onEnd'] = npe3j5['bind'](this['__onEnd'], this), lbec4['onEnded'](this['_onEnd']);
    }n3jv5(e5nb, 'laya.wx.mini.MiniSoundChannel', cu0lg);var q81m2d = e5nb['prototype'];return q81m2d['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gcsyo0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, q81m2d['__onNull'] = function () {}, q81m2d['play'] = function () {
      this['isStopped'] = ![], q8xdi['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, q81m2d['stop'] = function () {
      this['isStopped'] = !![], q8xdi['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (e5nb['_null'] != undefined) this['_audio']['onEnded'](e5nb['_null']);else try {
        this['_audio']['onEnded'](null), e5nb['_null'] = null;
      } catch (bp) {
        console['warn']('[wxmini] stop:' + bp), this['_audio']['onEnded'](npe3j5['bind'](this['__onNull'], this)), e5nb['_null'] = npe3j5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, q81m2d['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, q81m2d['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], q8xdi['addChannel'](this), this['_audio']['play']();
    }, p53en(0x0, q81m2d, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p53en(0x0, q81m2d, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p53en(0x0, q81m2d, 'volume', function () {
      return 0x1;
    }, function (v3jw) {}), e5nb['_null'] = undefined, e5nb;
  }(x9hzia);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a9hz$ in Laya) {
    var ygko6 = Laya[a9hz$];ygko6 && ygko6['__isclass'] && (exports[a9hz$] = ygko6);
  }
});