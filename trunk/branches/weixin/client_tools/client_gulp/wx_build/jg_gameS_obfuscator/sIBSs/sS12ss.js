var K = wx.$S;
function szr3vu() {}function sur$43e(gb1j, x2_cim, kvzro3, edau, ae$4) {
  function f68b(jqsgp) {
    if (jqsgp > 0xffff) {
      jqsgp -= 0x10000;var hd5ysa = 0xd800 + (jqsgp >> 0xa),
          mic0_ = 0xdc00 + (0x3ff & jqsgp);return String['fromCharCode'](hd5ysa, mic0_);
    }return String['fromCharCode'](jqsgp);
  }function z0ckw(d5y$h) {
    var o34er = d5y$h['slice'](0x1, -0x1);return o34er in kvzro3 ? kvzro3[o34er] : '#' === o34er['charAt'](0x0) ? f68b(parseInt(o34er['substr'](0x1)['replace']('x', '0x'))) : (ae$4['error']('entity not found:' + d5y$h), d5y$h);
  }function $adyh5(h$5) {
    if (h$5 > hpgqsy) {
      var nt2mxi = gb1j['substring'](hpgqsy, h$5)['replace'](/&#?\w+;/g, z0ckw);u34$er && dyshp(hpgqsy), edau['characters'](nt2mxi, 0x0, h$5 - hpgqsy), hpgqsy = h$5;
    }
  }function dyshp(qhpsy, gqj1s) {
    for (; qhpsy >= z9okv3 && (gqj1s = e3oruv['exec'](gb1j));) r34u$ = gqj1s['index'], z9okv3 = r34u$ + gqj1s[0x0]['length'], u34$er['lineNumber']++;u34$er['columnNumber'] = qhpsy - r34u$ + 0x1;
  }for (var r34u$ = 0x0, z9okv3 = 0x0, e3oruv = /.*(?:\r\n?|\n)|.*$/g, u34$er = edau['locator'], ru3ozv = [{ 'currentNSMap': x2_cim }], ha54$ = {}, hpgqsy = 0x0;;) {
    try {
      var yhqps = gb1j['indexOf']('<', hpgqsy);if (0x0 > yhqps) {
        if (!gb1j['substr'](hpgqsy)['match'](/^\s*$/)) {
          var zov = edau['doc'],
              a5dh4$ = zov['createTextNode'](gb1j['substr'](hpgqsy));zov['appendChild'](a5dh4$), edau['currentElement'] = a5dh4$;
        }return;
      }switch (yhqps > hpgqsy && $adyh5(yhqps), gb1j['charAt'](yhqps + 0x1)) {case '/':
          var xi_w0 = gb1j['indexOf']('>', yhqps + 0x3),
              e4ra$u = gb1j['substring'](yhqps + 0x2, xi_w0),
              j6l1b = ru3ozv['pop']();0x0 > xi_w0 ? (e4ra$u = gb1j['substring'](yhqps + 0x2)['replace'](/[\s<].*/, ''), ae$4['error']('end tag name: ' + e4ra$u + ' is not complete:' + j6l1b['tagName']), xi_w0 = yhqps + 0x1 + e4ra$u['length']) : e4ra$u['match'](/\s</) && (e4ra$u = e4ra$u['replace'](/[\s<].*/, ''), ae$4['error']('end tag name: ' + e4ra$u + ' maybe not complete'), xi_w0 = yhqps + 0x1 + e4ra$u['length']);var ckw_9 = j6l1b['localNSMap'],
              u$r4a = j6l1b['tagName'] == e4ra$u,
              ha$54 = u$r4a || j6l1b['tagName'] && j6l1b['tagName']['toLowerCase']() == e4ra$u['toLowerCase']();if (ha$54) {
            if (edau['endElement'](j6l1b['uri'], j6l1b['localName'], e4ra$u), ckw_9) {
              for (var _2icmx in ckw_9) edau['endPrefixMapping'](_2icmx);
            }u$r4a || ae$4['fatalError']('end tag name: ' + e4ra$u + ' is not match the current start tagName:' + j6l1b['tagName']);
          } else ru3ozv['push'](j6l1b);xi_w0++;break;case '?':
          u34$er && dyshp(yhqps), xi_w0 = ssgqjp1(gb1j, yhqps, edau);break;case '!':
          u34$er && dyshp(yhqps), xi_w0 = spqjgs1(gb1j, yhqps, edau, ae$4);break;default:
          u34$er && dyshp(yhqps);var g1jb6 = new soru3ve(),
              rokv3z = ru3ozv[ru3ozv['length'] - 0x1]['currentNSMap'],
              xi_w0 = spysgjq(gb1j, yhqps, g1jb6, rokv3z, z0ckw, ae$4),
              u3r$e = g1jb6['length'];if (!g1jb6['closed'] && sg16b(gb1j, xi_w0, g1jb6['tagName'], ha54$) && (g1jb6['closed'] = !0x0, kvzro3['nbsp'] || ae$4['warning']('unclosed xml attribute')), u34$er && u3r$e) {
            for (var qygph = s_imc0(u34$er, {}), g8q1jb = 0x0; u3r$e > g8q1jb; g8q1jb++) {
              var c0w_ix = g1jb6[g8q1jb];dyshp(c0w_ix['offset']), c0w_ix['locator'] = s_imc0(u34$er, {});
            }edau['locator'] = qygph, sd5hy(g1jb6, edau, rokv3z) && ru3ozv['push'](g1jb6), edau['locator'] = u34$er;
          } else sd5hy(g1jb6, edau, rokv3z) && ru3ozv['push'](g1jb6);'http://www.w3.org/1999/xhtml' !== g1jb6['uri'] || g1jb6['closed'] ? xi_w0++ : xi_w0 = szv3r(gb1j, xi_w0, g1jb6['tagName'], z0ckw, edau);}
    } catch (xi2nmt) {
      ae$4['error']('element parse error: ' + xi2nmt), xi_w0 = -0x1;
    }xi_w0 > hpgqsy ? hpgqsy = xi_w0 : $adyh5(Math['max'](yhqps, hpgqsy) + 0x1);
  }
}function s_imc0(rueo, k09zwc) {
  return k09zwc['lineNumber'] = rueo['lineNumber'], k09zwc['columnNumber'] = rueo['columnNumber'], k09zwc;
}function spysgjq(vou3rz, i_m0cx, sqhpy5, cwi9, x2in, aed5) {
  for (var jpsg1q, z0ck, q8j1p = ++i_m0cx, xnim_ = ssdayh5;;) {
    var u4$re3 = vou3rz['charAt'](q8j1p);switch (u4$re3) {case '=':
        if (xnim_ === sk9wvoz) jpsg1q = vou3rz['slice'](i_m0cx, q8j1p), xnim_ = sn72tmx;else {
          if (xnim_ !== sh$45a) throw new Error('attribute equal must after attrName');xnim_ = sn72tmx;
        }break;case '\x27':case '\x22':
        if (xnim_ === sn72tmx || xnim_ === sk9wvoz) {
          if (xnim_ === sk9wvoz && (aed5['warning']('attribute value must after "="'), jpsg1q = vou3rz['slice'](i_m0cx, q8j1p)), i_m0cx = q8j1p + 0x1, q8j1p = vou3rz['indexOf'](u4$re3, i_m0cx), !(q8j1p > 0x0)) throw new Error('attribute value no end \'' + u4$re3 + '\' match');z0ck = vou3rz['slice'](i_m0cx, q8j1p)['replace'](/&#?\w+;/g, x2in), sqhpy5['add'](jpsg1q, z0ck, i_m0cx - 0x1), xnim_ = seur3vo;
        } else {
          if (xnim_ != sgq18jp) throw new Error('attribute value must after "="');z0ck = vou3rz['slice'](i_m0cx, q8j1p)['replace'](/&#?\w+;/g, x2in), sqhpy5['add'](jpsg1q, z0ck, i_m0cx), aed5['warning']('attribute "' + jpsg1q + '" missed start quot(' + u4$re3 + ')!!'), i_m0cx = q8j1p + 0x1, xnim_ = seur3vo;
        }break;case '/':
        switch (xnim_) {case ssdayh5:
            sqhpy5['setTagName'](vou3rz['slice'](i_m0cx, q8j1p));case seur3vo:case shgpys:case sae4ru:
            xnim_ = sae4ru, sqhpy5['closed'] = !0x0;case sgq18jp:case sk9wvoz:case sh$45a:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return aed5['error']('unexpected end of input'), xnim_ == ssdayh5 && sqhpy5['setTagName'](vou3rz['slice'](i_m0cx, q8j1p)), q8j1p;case '>':
        switch (xnim_) {case ssdayh5:
            sqhpy5['setTagName'](vou3rz['slice'](i_m0cx, q8j1p));case seur3vo:case shgpys:case sae4ru:
            break;case sgq18jp:case sk9wvoz:
            z0ck = vou3rz['slice'](i_m0cx, q8j1p), '/' === z0ck['slice'](-0x1) && (sqhpy5['closed'] = !0x0, z0ck = z0ck['slice'](0x0, -0x1));case sh$45a:
            xnim_ === sh$45a && (z0ck = jpsg1q), xnim_ == sgq18jp ? (aed5['warning']('attribute "' + z0ck + '" missed quot(")!!'), sqhpy5['add'](jpsg1q, z0ck['replace'](/&#?\w+;/g, x2in), i_m0cx)) : ('http://www.w3.org/1999/xhtml' === cwi9[''] && z0ck['match'](/^(?:disabled|checked|selected)$/i) || aed5['warning']('attribute "' + z0ck + '" missed value!! "' + z0ck + '" instead!!'), sqhpy5['add'](z0ck, z0ck, i_m0cx));break;case sn72tmx:
            throw new Error('attribute value missed!!');}return q8j1p;case '\u0080':
        u4$re3 = '\x20';default:
        if ('\x20' >= u4$re3) switch (xnim_) {case ssdayh5:
            sqhpy5['setTagName'](vou3rz['slice'](i_m0cx, q8j1p)), xnim_ = shgpys;break;case sk9wvoz:
            jpsg1q = vou3rz['slice'](i_m0cx, q8j1p), xnim_ = sh$45a;break;case sgq18jp:
            var z0ck = vou3rz['slice'](i_m0cx, q8j1p)['replace'](/&#?\w+;/g, x2in);aed5['warning']('attribute "' + z0ck + '" missed quot(")!!'), sqhpy5['add'](jpsg1q, z0ck, i_m0cx);case seur3vo:
            xnim_ = shgpys;} else switch (xnim_) {case sh$45a:
            {
              sqhpy5['tagName'];
            }'http://www.w3.org/1999/xhtml' === cwi9[''] && jpsg1q['match'](/^(?:disabled|checked|selected)$/i) || aed5['warning']('attribute "' + jpsg1q + '" missed value!! "' + jpsg1q + '" instead2!!'), sqhpy5['add'](jpsg1q, jpsg1q, i_m0cx), i_m0cx = q8j1p, xnim_ = sk9wvoz;break;case seur3vo:
            aed5['warning']('attribute space is required"' + jpsg1q + '\x22!!');case shgpys:
            xnim_ = sk9wvoz, i_m0cx = q8j1p;break;case sn72tmx:
            xnim_ = sgq18jp, i_m0cx = q8j1p;break;case sae4ru:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}q8j1p++;
  }
}function sd5hy(pd5sy, c9kz0w, hsdy5) {
  for (var w_ck0 = pd5sy['tagName'], oevur = null, kzcw09 = pd5sy['length']; kzcw09--;) {
    var xi_ = pd5sy[kzcw09],
        i9_0c = xi_['qName'],
        u4are = xi_['value'],
        wzk9c = i9_0c['indexOf'](':');if (wzk9c > 0x0) var g1b6j = xi_['prefix'] = i9_0c['slice'](0x0, wzk9c),
        z9wkov = i9_0c['slice'](wzk9c + 0x1),
        yqjp = 'xmlns' === g1b6j && z9wkov;else z9wkov = i9_0c, g1b6j = null, yqjp = 'xmlns' === i9_0c && '';xi_['localName'] = z9wkov, yqjp !== !0x1 && (null == oevur && (oevur = {}, shygqp(hsdy5, hsdy5 = {})), hsdy5[yqjp] = oevur[yqjp] = u4are, xi_['uri'] = 'http://www.w3.org/2000/xmlns/', c9kz0w['startPrefixMapping'](yqjp, u4are));
  }for (var kzcw09 = pd5sy['length']; kzcw09--;) {
    xi_ = pd5sy[kzcw09];var g1b6j = xi_['prefix'];g1b6j && ('xml' === g1b6j && (xi_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== g1b6j && (xi_['uri'] = hsdy5[g1b6j || '']));
  }var wzk9c = w_ck0['indexOf'](':');wzk9c > 0x0 ? (g1b6j = pd5sy['prefix'] = w_ck0['slice'](0x0, wzk9c), z9wkov = pd5sy['localName'] = w_ck0['slice'](wzk9c + 0x1)) : (g1b6j = null, z9wkov = pd5sy['localName'] = w_ck0);var evru3 = pd5sy['uri'] = hsdy5[g1b6j || ''];if (c9kz0w['startElement'](evru3, z9wkov, w_ck0, pd5sy), !pd5sy['closed']) return pd5sy['currentNSMap'] = hsdy5, pd5sy['localNSMap'] = oevur, !0x0;if (c9kz0w['endElement'](evru3, z9wkov, w_ck0), oevur) {
    for (g1b6j in oevur) c9kz0w['endPrefixMapping'](g1b6j);
  }
}function szv3r(uorzv, _xic, wk9cz0, _cxi0w, xmc2i) {
  if (/^(?:script|textarea)$/i['test'](wk9cz0)) {
    var h5dasy = uorzv['indexOf']('</' + wk9cz0 + '>', _xic),
        x2tmn7 = uorzv['substring'](_xic + 0x1, h5dasy);if (/[&<]/['test'](x2tmn7)) return (/^script$/i['test'](wk9cz0) ? (xmc2i['characters'](x2tmn7, 0x0, x2tmn7['length']), h5dasy) : (x2tmn7 = x2tmn7['replace'](/&#?\w+;/g, _cxi0w), xmc2i['characters'](x2tmn7, 0x0, x2tmn7['length']), h5dasy)
    );
  }return _xic + 0x1;
}function sg16b(ci, rz3kov, $eru, a45de$) {
  var zr3u = a45de$[$eru];return null == zr3u && (zr3u = ci['lastIndexOf']('</' + $eru + '>'), rz3kov > zr3u && (zr3u = ci['lastIndexOf']('</' + $eru)), a45de$[$eru] = zr3u), rz3kov > zr3u;
}function shygqp(w_90, eaud$4) {
  for (var r$43e in w_90) eaud$4[r$43e] = w_90[r$43e];
}function spqjgs1(wi09c, hqyspg, vwk09, nxi2_) {
  var tx2m = wi09c['charAt'](hqyspg + 0x2);switch (tx2m) {case '-':
      if ('-' === wi09c['charAt'](hqyspg + 0x3)) {
        var jgq8b1 = wi09c['indexOf']('-->', hqyspg + 0x4);return jgq8b1 > hqyspg ? (vwk09['comment'](wi09c, hqyspg + 0x4, jgq8b1 - hqyspg - 0x4), jgq8b1 + 0x3) : (nxi2_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == wi09c['substr'](hqyspg + 0x3, 0x6)) {
        var jgq8b1 = wi09c['indexOf'](']]>', hqyspg + 0x9);return vwk09['startCDATA'](), vwk09['characters'](wi09c, hqyspg + 0x9, jgq8b1 - hqyspg - 0x9), vwk09['endCDATA'](), jgq8b1 + 0x3;
      }var a4eur = su3roev(wi09c, hqyspg),
          yjp = a4eur['length'];if (yjp > 0x1 && /!doctype/i['test'](a4eur[0x0][0x0])) {
        var c2im_ = a4eur[0x1][0x0],
            zovru3 = yjp > 0x3 && /^public$/i['test'](a4eur[0x2][0x0]) && a4eur[0x3][0x0],
            ph5sqy = yjp > 0x4 && a4eur[0x4][0x0],
            q8gjb = a4eur[yjp - 0x1];return vwk09['startDTD'](c2im_, zovru3 && zovru3['replace'](/^(['"])(.*?)\1$/, '$2'), ph5sqy && ph5sqy['replace'](/^(['"])(.*?)\1$/, '$2')), vwk09['endDTD'](), q8gjb['index'] + q8gjb[0x0]['length'];
      }}return -0x1;
}function ssgqjp1(yhd5$a, xm, gjqb81) {
  var ov3kr = yhd5$a['indexOf']('?>', xm);if (ov3kr) {
    var o3euv = yhd5$a['substring'](xm, ov3kr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (o3euv) {
      {
        o3euv[0x0]['length'];
      }return gjqb81['processingInstruction'](o3euv[0x1], o3euv[0x2]), ov3kr + 0x2;
    }return -0x1;
  }return -0x1;
}function soru3ve() {}function sq5psh(wcix0, kr3zo) {
  return wcix0['__proto__'] = kr3zo, wcix0;
}function su3roev(ad5h, ro3u4) {
  var ude4$,
      yah$ = [],
      o43 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (o43['lastIndex'] = ro3u4, o43['exec'](ad5h); ude4$ = o43['exec'](ad5h);) if (yah$['push'](ude4$), ude4$[0x1]) return yah$;
}var sysa5h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    sae$du4 = new RegExp('[\\-\\.0-9' + sysa5h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    sm_i0xc = new RegExp('^' + sysa5h['source'] + sae$du4['source'] + '*(?::' + sysa5h['source'] + sae$du4['source'] + '*)?$'),
    ssdayh5 = 0x0,
    sk9wvoz = 0x1,
    sh$45a = 0x2,
    sn72tmx = 0x3,
    sgq18jp = 0x4,
    seur3vo = 0x5,
    shgpys = 0x6,
    sae4ru = 0x7;szr3vu['prototype'] = { 'parse': function (a$54ed, jgqpy, cx_2im) {
    var ozrv3 = this['domBuilder'];ozrv3['startDocument'](), shygqp(jgqpy, jgqpy = {}), sur$43e(a$54ed, jgqpy, cx_2im, ozrv3, this['errorHandler']), ozrv3['endDocument']();
  } }, soru3ve['prototype'] = { 'setTagName': function (ck9_w0) {
    if (!sm_i0xc['test'](ck9_w0)) throw new Error('invalid tagName:' + ck9_w0);this['tagName'] = ck9_w0;
  }, 'add': function (h$45d, w09ckz, gqhp) {
    if (!sm_i0xc['test'](h$45d)) throw new Error('invalid attribute:' + h$45d);this[this['length']++] = { 'qName': h$45d, 'value': w09ckz, 'offset': gqhp };
  }, 'length': 0x0, 'getLocalName': function (h5da$) {
    return this[h5da$]['localName'];
  }, 'getLocator': function (zk9c0w) {
    return this[zk9c0w]['locator'];
  }, 'getQName': function (zwv9k0) {
    return this[zwv9k0]['qName'];
  }, 'getURI': function (ure$a4) {
    return this[ure$a4]['uri'];
  }, 'getValue': function (cxwi) {
    return this[cxwi]['value'];
  } }, sq5psh({}, sq5psh['prototype']) instanceof sq5psh || (sq5psh = function (w0xci, q1p8g) {
  function gjpy() {}gjpy['prototype'] = q1p8g, gjpy = new gjpy();for (q1p8g in w0xci) gjpy[q1p8g] = w0xci[q1p8g];return gjpy;
}), exports['XMLReader'] = szr3vu;