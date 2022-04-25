var Q = wx.$v;
function vuy86lz() {}function vlzuy8(os4$3n, z6huy, k50cv, z68ubl, $4f) {
  function euzb8l(el8zu) {
    if (el8zu > 0xffff) {
      el8zu -= 0x10000;var s4foi$ = 0xd800 + (el8zu >> 0xa),
          y12th = 0xdc00 + (0x3ff & el8zu);return String['fromCharCode'](s4foi$, y12th);
    }return String['fromCharCode'](el8zu);
  }function hyz61l(is$rf) {
    var $n4o3s = is$rf['slice'](0x1, -0x1);return $n4o3s in k50cv ? k50cv[$n4o3s] : '#' === $n4o3s['charAt'](0x0) ? euzb8l(parseInt($n4o3s['substr'](0x1)['replace']('x', '0x'))) : ($4f['error']('entity not found:' + is$rf), is$rf);
  }function fr(gwpvqx) {
    if (gwpvqx > _h1t2) {
      var d07 = os4$3n['substring'](_h1t2, gwpvqx)['replace'](/&#?\w+;/g, hyz61l);pv7k5x && t3n_1(_h1t2), z68ubl['characters'](d07, 0x0, gwpvqx - _h1t2), _h1t2 = gwpvqx;
    }
  }function t3n_1(cvk05, fos4i) {
    for (; cvk05 >= xegwqb && (fos4i = h2tn['exec'](os4$3n));) qewg = fos4i['index'], xegwqb = qewg + fos4i[0x0]['length'], pv7k5x['lineNumber']++;pv7k5x['columnNumber'] = cvk05 - qewg + 0x1;
  }for (var qewg = 0x0, xegwqb = 0x0, h2tn = /.*(?:\r\n?|\n)|.*$/g, pv7k5x = z68ubl['locator'], gxv7p5 = [{ 'currentNSMap': z6huy }], ton2 = {}, _h1t2 = 0x0;;) {
    try {
      var que8w = os4$3n['indexOf']('<', _h1t2);if (0x0 > que8w) {
        if (!os4$3n['substr'](_h1t2)['match'](/^\s*$/)) {
          var uz68 = z68ubl['doc'],
              u6yhl = uz68['createTextNode'](os4$3n['substr'](_h1t2));uz68['appendChild'](u6yhl), z68ubl['currentElement'] = u6yhl;
        }return;
      }switch (que8w > _h1t2 && fr(que8w), os4$3n['charAt'](que8w + 0x1)) {case '/':
          var cj0mad = os4$3n['indexOf']('>', que8w + 0x3),
              pxweqg = os4$3n['substring'](que8w + 0x2, cj0mad),
              _zhy16 = gxv7p5['pop']();0x0 > cj0mad ? (pxweqg = os4$3n['substring'](que8w + 0x2)['replace'](/[\s<].*/, ''), $4f['error']('end tag name: ' + pxweqg + ' is not complete:' + _zhy16['tagName']), cj0mad = que8w + 0x1 + pxweqg['length']) : pxweqg['match'](/\s</) && (pxweqg = pxweqg['replace'](/[\s<].*/, ''), $4f['error']('end tag name: ' + pxweqg + ' maybe not complete'), cj0mad = que8w + 0x1 + pxweqg['length']);var n423t_ = _zhy16['localNSMap'],
              o$is43 = _zhy16['tagName'] == pxweqg,
              xqepw = o$is43 || _zhy16['tagName'] && _zhy16['tagName']['toLowerCase']() == pxweqg['toLowerCase']();if (xqepw) {
            if (z68ubl['endElement'](_zhy16['uri'], _zhy16['localName'], pxweqg), n423t_) {
              for (var xwp5 in n423t_) z68ubl['endPrefixMapping'](xwp5);
            }o$is43 || $4f['fatalError']('end tag name: ' + pxweqg + ' is not match the current start tagName:' + _zhy16['tagName']);
          } else gxv7p5['push'](_zhy16);cj0mad++;break;case '?':
          pv7k5x && t3n_1(que8w), cj0mad = v$t3no4(os4$3n, que8w, z68ubl);break;case '!':
          pv7k5x && t3n_1(que8w), cj0mad = vxgwvp(os4$3n, que8w, z68ubl, $4f);break;default:
          pv7k5x && t3n_1(que8w);var md7 = new vwbu8q(),
              c0amj = gxv7p5[gxv7p5['length'] - 0x1]['currentNSMap'],
              cj0mad = vm07cdk(os4$3n, que8w, md7, c0amj, hyz61l, $4f),
              km0cdj = md7['length'];if (!md7['closed'] && vf9$rsi(os4$3n, cj0mad, md7['tagName'], ton2) && (md7['closed'] = !0x0, k50cv['nbsp'] || $4f['warning']('unclosed xml attribute')), pv7k5x && km0cdj) {
            for (var _hy61z = vn3o$4s(pv7k5x, {}), d0cmaj = 0x0; km0cdj > d0cmaj; d0cmaj++) {
              var pqxgwe = md7[d0cmaj];t3n_1(pqxgwe['offset']), pqxgwe['locator'] = vn3o$4s(pv7k5x, {});
            }z68ubl['locator'] = _hy61z, v_yh126(md7, z68ubl, c0amj) && gxv7p5['push'](md7), z68ubl['locator'] = pv7k5x;
          } else v_yh126(md7, z68ubl, c0amj) && gxv7p5['push'](md7);'http://www.w3.org/1999/xhtml' !== md7['uri'] || md7['closed'] ? cj0mad++ : cj0mad = vy86lz(os4$3n, cj0mad, md7['tagName'], hyz61l, z68ubl);}
    } catch (_432tn) {
      $4f['error']('element parse error: ' + _432tn), cj0mad = -0x1;
    }cj0mad > _h1t2 ? _h1t2 = cj0mad : fr(Math['max'](que8w, _h1t2) + 0x1);
  }
}function vn3o$4s(cv7k5, cmk7) {
  return cmk7['lineNumber'] = cv7k5['lineNumber'], cmk7['columnNumber'] = cv7k5['columnNumber'], cmk7;
}function vm07cdk(xk5vp7, gbe8w, lub8z6, i$s9o, vpxwq, qgbexw) {
  for (var fi$s4o, qvxpgw, weu8qb = ++gbe8w, v5c7k = vkp7x5;;) {
    var y1z6h = xk5vp7['charAt'](weu8qb);switch (y1z6h) {case '=':
        if (v5c7k === vv5wpgx) fi$s4o = xk5vp7['slice'](gbe8w, weu8qb), v5c7k = v$3no4s;else {
          if (v5c7k !== vx5vpk7) throw new Error('attribute equal must after attrName');v5c7k = v$3no4s;
        }break;case '\x27':case '\x22':
        if (v5c7k === v$3no4s || v5c7k === vv5wpgx) {
          if (v5c7k === vv5wpgx && (qgbexw['warning']('attribute value must after "="'), fi$s4o = xk5vp7['slice'](gbe8w, weu8qb)), gbe8w = weu8qb + 0x1, weu8qb = xk5vp7['indexOf'](y1z6h, gbe8w), !(weu8qb > 0x0)) throw new Error('attribute value no end \'' + y1z6h + '\' match');qvxpgw = xk5vp7['slice'](gbe8w, weu8qb)['replace'](/&#?\w+;/g, vpxwq), lub8z6['add'](fi$s4o, qvxpgw, gbe8w - 0x1), v5c7k = vgx75pv;
        } else {
          if (v5c7k != vof9$) throw new Error('attribute value must after "="');qvxpgw = xk5vp7['slice'](gbe8w, weu8qb)['replace'](/&#?\w+;/g, vpxwq), lub8z6['add'](fi$s4o, qvxpgw, gbe8w), qgbexw['warning']('attribute "' + fi$s4o + '" missed start quot(' + y1z6h + ')!!'), gbe8w = weu8qb + 0x1, v5c7k = vgx75pv;
        }break;case '/':
        switch (v5c7k) {case vkp7x5:
            lub8z6['setTagName'](xk5vp7['slice'](gbe8w, weu8qb));case vgx75pv:case vyz6u8l:case vt3n2o4:
            v5c7k = vt3n2o4, lub8z6['closed'] = !0x0;case vof9$:case vv5wpgx:case vx5vpk7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qgbexw['error']('unexpected end of input'), v5c7k == vkp7x5 && lub8z6['setTagName'](xk5vp7['slice'](gbe8w, weu8qb)), weu8qb;case '>':
        switch (v5c7k) {case vkp7x5:
            lub8z6['setTagName'](xk5vp7['slice'](gbe8w, weu8qb));case vgx75pv:case vyz6u8l:case vt3n2o4:
            break;case vof9$:case vv5wpgx:
            qvxpgw = xk5vp7['slice'](gbe8w, weu8qb), '/' === qvxpgw['slice'](-0x1) && (lub8z6['closed'] = !0x0, qvxpgw = qvxpgw['slice'](0x0, -0x1));case vx5vpk7:
            v5c7k === vx5vpk7 && (qvxpgw = fi$s4o), v5c7k == vof9$ ? (qgbexw['warning']('attribute "' + qvxpgw + '" missed quot(")!!'), lub8z6['add'](fi$s4o, qvxpgw['replace'](/&#?\w+;/g, vpxwq), gbe8w)) : ('http://www.w3.org/1999/xhtml' === i$s9o[''] && qvxpgw['match'](/^(?:disabled|checked|selected)$/i) || qgbexw['warning']('attribute "' + qvxpgw + '" missed value!! "' + qvxpgw + '" instead!!'), lub8z6['add'](qvxpgw, qvxpgw, gbe8w));break;case v$3no4s:
            throw new Error('attribute value missed!!');}return weu8qb;case '\u0080':
        y1z6h = '\x20';default:
        if ('\x20' >= y1z6h) switch (v5c7k) {case vkp7x5:
            lub8z6['setTagName'](xk5vp7['slice'](gbe8w, weu8qb)), v5c7k = vyz6u8l;break;case vv5wpgx:
            fi$s4o = xk5vp7['slice'](gbe8w, weu8qb), v5c7k = vx5vpk7;break;case vof9$:
            var qvxpgw = xk5vp7['slice'](gbe8w, weu8qb)['replace'](/&#?\w+;/g, vpxwq);qgbexw['warning']('attribute "' + qvxpgw + '" missed quot(")!!'), lub8z6['add'](fi$s4o, qvxpgw, gbe8w);case vgx75pv:
            v5c7k = vyz6u8l;} else switch (v5c7k) {case vx5vpk7:
            {
              lub8z6['tagName'];
            }'http://www.w3.org/1999/xhtml' === i$s9o[''] && fi$s4o['match'](/^(?:disabled|checked|selected)$/i) || qgbexw['warning']('attribute "' + fi$s4o + '" missed value!! "' + fi$s4o + '" instead2!!'), lub8z6['add'](fi$s4o, fi$s4o, gbe8w), gbe8w = weu8qb, v5c7k = vv5wpgx;break;case vgx75pv:
            qgbexw['warning']('attribute space is required"' + fi$s4o + '\x22!!');case vyz6u8l:
            v5c7k = vv5wpgx, gbe8w = weu8qb;break;case v$3no4s:
            v5c7k = vof9$, gbe8w = weu8qb;break;case vt3n2o4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}weu8qb++;
  }
}function v_yh126(so34i$, px75kv, ckd07m) {
  for (var km70 = so34i$['tagName'], l6ubz8 = null, yu68lz = so34i$['length']; yu68lz--;) {
    var zeubl8 = so34i$[yu68lz],
        ton23 = zeubl8['qName'],
        zeub8 = zeubl8['value'],
        kv05c7 = ton23['indexOf'](':');if (kv05c7 > 0x0) var c7dmk = zeubl8['prefix'] = ton23['slice'](0x0, kv05c7),
        epwgq = ton23['slice'](kv05c7 + 0x1),
        isf9$o = 'xmlns' === c7dmk && epwgq;else epwgq = ton23, c7dmk = null, isf9$o = 'xmlns' === ton23 && '';zeubl8['localName'] = epwgq, isf9$o !== !0x1 && (null == l6ubz8 && (l6ubz8 = {}, vwvxgq(ckd07m, ckd07m = {})), ckd07m[isf9$o] = l6ubz8[isf9$o] = zeub8, zeubl8['uri'] = 'http://www.w3.org/2000/xmlns/', px75kv['startPrefixMapping'](isf9$o, zeub8));
  }for (var yu68lz = so34i$['length']; yu68lz--;) {
    zeubl8 = so34i$[yu68lz];var c7dmk = zeubl8['prefix'];c7dmk && ('xml' === c7dmk && (zeubl8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== c7dmk && (zeubl8['uri'] = ckd07m[c7dmk || '']));
  }var kv05c7 = km70['indexOf'](':');kv05c7 > 0x0 ? (c7dmk = so34i$['prefix'] = km70['slice'](0x0, kv05c7), epwgq = so34i$['localName'] = km70['slice'](kv05c7 + 0x1)) : (c7dmk = null, epwgq = so34i$['localName'] = km70);var qul8e = so34i$['uri'] = ckd07m[c7dmk || ''];if (px75kv['startElement'](qul8e, epwgq, km70, so34i$), !so34i$['closed']) return so34i$['currentNSMap'] = ckd07m, so34i$['localNSMap'] = l6ubz8, !0x0;if (px75kv['endElement'](qul8e, epwgq, km70), l6ubz8) {
    for (c7dmk in l6ubz8) px75kv['endPrefixMapping'](c7dmk);
  }
}function vy86lz(o3$4nt, lzb, n4t32, jk0mdc, pegwqx) {
  if (/^(?:script|textarea)$/i['test'](n4t32)) {
    var y1_6h = o3$4nt['indexOf']('</' + n4t32 + '>', lzb),
        xpwv = o3$4nt['substring'](lzb + 0x1, y1_6h);if (/[&<]/['test'](xpwv)) return (/^script$/i['test'](n4t32) ? (pegwqx['characters'](xpwv, 0x0, xpwv['length']), y1_6h) : (xpwv = xpwv['replace'](/&#?\w+;/g, jk0mdc), pegwqx['characters'](xpwv, 0x0, xpwv['length']), y1_6h)
    );
  }return lzb + 0x1;
}function vf9$rsi(zy16l, vg7px5, $o3ns, s4$o) {
  var y612 = s4$o[$o3ns];return null == y612 && (y612 = zy16l['lastIndexOf']('</' + $o3ns + '>'), vg7px5 > y612 && (y612 = zy16l['lastIndexOf']('</' + $o3ns)), s4$o[$o3ns] = y612), vg7px5 > y612;
}function vwvxgq(uqbe, v7k0c) {
  for (var _6hy12 in uqbe) v7k0c[_6hy12] = uqbe[_6hy12];
}function vxgwvp(gp7, s$43no, mdc0aj, y1t_2) {
  var c0jkmd = gp7['charAt'](s$43no + 0x2);switch (c0jkmd) {case '-':
      if ('-' === gp7['charAt'](s$43no + 0x3)) {
        var _6yzh = gp7['indexOf']('-->', s$43no + 0x4);return _6yzh > s$43no ? (mdc0aj['comment'](gp7, s$43no + 0x4, _6yzh - s$43no - 0x4), _6yzh + 0x3) : (y1t_2['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gp7['substr'](s$43no + 0x3, 0x6)) {
        var _6yzh = gp7['indexOf'](']]>', s$43no + 0x9);return mdc0aj['startCDATA'](), mdc0aj['characters'](gp7, s$43no + 0x9, _6yzh - s$43no - 0x9), mdc0aj['endCDATA'](), _6yzh + 0x3;
      }var pwg5xv = vth21n(gp7, s$43no),
          buew8 = pwg5xv['length'];if (buew8 > 0x1 && /!doctype/i['test'](pwg5xv[0x0][0x0])) {
        var isof9$ = pwg5xv[0x1][0x0],
            i4$os = buew8 > 0x3 && /^public$/i['test'](pwg5xv[0x2][0x0]) && pwg5xv[0x3][0x0],
            cd0m7 = buew8 > 0x4 && pwg5xv[0x4][0x0],
            si4$3 = pwg5xv[buew8 - 0x1];return mdc0aj['startDTD'](isof9$, i4$os && i4$os['replace'](/^(['"])(.*?)\1$/, '$2'), cd0m7 && cd0m7['replace'](/^(['"])(.*?)\1$/, '$2')), mdc0aj['endDTD'](), si4$3['index'] + si4$3[0x0]['length'];
      }}return -0x1;
}function v$t3no4(fs$4io, i9r$s, gqwpvx) {
  var ly6zuh = fs$4io['indexOf']('?>', i9r$s);if (ly6zuh) {
    var sr9i$ = fs$4io['substring'](i9r$s, ly6zuh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sr9i$) {
      {
        sr9i$[0x0]['length'];
      }return gqwpvx['processingInstruction'](sr9i$[0x1], sr9i$[0x2]), ly6zuh + 0x2;
    }return -0x1;
  }return -0x1;
}function vwbu8q() {}function vio$9(z8ylu, ewq8gb) {
  return z8ylu['__proto__'] = ewq8gb, z8ylu;
}function vth21n(eub8lz, y1zh_) {
  var s4on,
      pwvqg = [],
      q8be = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q8be['lastIndex'] = y1zh_, q8be['exec'](eub8lz); s4on = q8be['exec'](eub8lz);) if (pwvqg['push'](s4on), s4on[0x1]) return pwvqg;
}var vo3tn$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vxpe = new RegExp('[\\-\\.0-9' + vo3tn$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vdmck0j = new RegExp('^' + vo3tn$['source'] + vxpe['source'] + '*(?::' + vo3tn$['source'] + vxpe['source'] + '*)?$'),
    vkp7x5 = 0x0,
    vv5wpgx = 0x1,
    vx5vpk7 = 0x2,
    v$3no4s = 0x3,
    vof9$ = 0x4,
    vgx75pv = 0x5,
    vyz6u8l = 0x6,
    vt3n2o4 = 0x7;vuy86lz['prototype'] = { 'parse': function (i$os3, vx5kp7, w8bg) {
    var os34$ = this['domBuilder'];os34$['startDocument'](), vwvxgq(vx5kp7, vx5kp7 = {}), vlzuy8(i$os3, vx5kp7, w8bg, os34$, this['errorHandler']), os34$['endDocument']();
  } }, vwbu8q['prototype'] = { 'setTagName': function (ewg8bq) {
    if (!vdmck0j['test'](ewg8bq)) throw new Error('invalid tagName:' + ewg8bq);this['tagName'] = ewg8bq;
  }, 'add': function (leqb8u, buw8qe, xbewgq) {
    if (!vdmck0j['test'](leqb8u)) throw new Error('invalid attribute:' + leqb8u);this[this['length']++] = { 'qName': leqb8u, 'value': buw8qe, 'offset': xbewgq };
  }, 'length': 0x0, 'getLocalName': function (x5gvwp) {
    return this[x5gvwp]['localName'];
  }, 'getLocator': function (bqxewg) {
    return this[bqxewg]['locator'];
  }, 'getQName': function (t2y_h) {
    return this[t2y_h]['qName'];
  }, 'getURI': function (km75c0) {
    return this[km75c0]['uri'];
  }, 'getValue': function (pgqxwe) {
    return this[pgqxwe]['value'];
  } }, vio$9({}, vio$9['prototype']) instanceof vio$9 || (vio$9 = function (beuwq8, oi4f$) {
  function uqwb8e() {}uqwb8e['prototype'] = oi4f$, uqwb8e = new uqwb8e();for (oi4f$ in beuwq8) uqwb8e[oi4f$] = beuwq8[oi4f$];return uqwb8e;
}), exports['XMLReader'] = vuy86lz;