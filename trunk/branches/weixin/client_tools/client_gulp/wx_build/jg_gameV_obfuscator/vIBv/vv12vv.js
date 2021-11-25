var Q = wx.$v;
function vo3i$4() {}function vis4$3(_y1th2, dk0mcj, v5g7p, be8uqw, $ton43) {
  function oif$s9(o$fi) {
    if (o$fi > 0xffff) {
      o$fi -= 0x10000;var soi9f = 0xd800 + (o$fi >> 0xa),
          hz6ylu = 0xdc00 + (0x3ff & o$fi);return String['fromCharCode'](soi9f, hz6ylu);
    }return String['fromCharCode'](o$fi);
  }function $9ri(eqgpw) {
    var uebql8 = eqgpw['slice'](0x1, -0x1);return uebql8 in v5g7p ? v5g7p[uebql8] : '#' === uebql8['charAt'](0x0) ? oif$s9(parseInt(uebql8['substr'](0x1)['replace']('x', '0x'))) : ($ton43['error']('entity not found:' + eqgpw), eqgpw);
  }function p7kxv5($3s4io) {
    if ($3s4io > r9$sfi) {
      var jc0mk = _y1th2['substring'](r9$sfi, $3s4io)['replace'](/&#?\w+;/g, $9ri);lb8uez && bexqw(r9$sfi), be8uqw['characters'](jc0mk, 0x0, $3s4io - r9$sfi), r9$sfi = $3s4io;
    }
  }function bexqw(lue8bz, z1ylh) {
    for (; lue8bz >= l8bequ && (z1ylh = cjm0['exec'](_y1th2));) g7pv5 = z1ylh['index'], l8bequ = g7pv5 + z1ylh[0x0]['length'], lb8uez['lineNumber']++;lb8uez['columnNumber'] = lue8bz - g7pv5 + 0x1;
  }for (var g7pv5 = 0x0, l8bequ = 0x0, cjm0 = /.*(?:\r\n?|\n)|.*$/g, lb8uez = be8uqw['locator'], w8bue = [{ 'currentNSMap': dk0mcj }], irs9$f = {}, r9$sfi = 0x0;;) {
    try {
      var n4$ot = _y1th2['indexOf']('<', r9$sfi);if (0x0 > n4$ot) {
        if (!_y1th2['substr'](r9$sfi)['match'](/^\s*$/)) {
          var kvp5 = be8uqw['doc'],
              oi$s4 = kvp5['createTextNode'](_y1th2['substr'](r9$sfi));kvp5['appendChild'](oi$s4), be8uqw['currentElement'] = oi$s4;
        }return;
      }switch (n4$ot > r9$sfi && p7kxv5(n4$ot), _y1th2['charAt'](n4$ot + 0x1)) {case '/':
          var xwvgqp = _y1th2['indexOf']('>', n4$ot + 0x3),
              dckj0 = _y1th2['substring'](n4$ot + 0x2, xwvgqp),
              l86zuy = w8bue['pop']();0x0 > xwvgqp ? (dckj0 = _y1th2['substring'](n4$ot + 0x2)['replace'](/[\s<].*/, ''), $ton43['error']('end tag name: ' + dckj0 + ' is not complete:' + l86zuy['tagName']), xwvgqp = n4$ot + 0x1 + dckj0['length']) : dckj0['match'](/\s</) && (dckj0 = dckj0['replace'](/[\s<].*/, ''), $ton43['error']('end tag name: ' + dckj0 + ' maybe not complete'), xwvgqp = n4$ot + 0x1 + dckj0['length']);var z8eub = l86zuy['localNSMap'],
              ezl8ub = l86zuy['tagName'] == dckj0,
              n_t321 = ezl8ub || l86zuy['tagName'] && l86zuy['tagName']['toLowerCase']() == dckj0['toLowerCase']();if (n_t321) {
            if (be8uqw['endElement'](l86zuy['uri'], l86zuy['localName'], dckj0), z8eub) {
              for (var lubq8e in z8eub) be8uqw['endPrefixMapping'](lubq8e);
            }ezl8ub || $ton43['fatalError']('end tag name: ' + dckj0 + ' is not match the current start tagName:' + l86zuy['tagName']);
          } else w8bue['push'](l86zuy);xwvgqp++;break;case '?':
          lb8uez && bexqw(n4$ot), xwvgqp = vk7cv0(_y1th2, n4$ot, be8uqw);break;case '!':
          lb8uez && bexqw(n4$ot), xwvgqp = vgp5vx(_y1th2, n4$ot, be8uqw, $ton43);break;default:
          lb8uez && bexqw(n4$ot);var v75xpg = new vr$sf9i(),
              t324n_ = w8bue[w8bue['length'] - 0x1]['currentNSMap'],
              xwvgqp = vqe8w(_y1th2, n4$ot, v75xpg, t324n_, $9ri, $ton43),
              z6uhl = v75xpg['length'];if (!v75xpg['closed'] && vbegxwq(_y1th2, xwvgqp, v75xpg['tagName'], irs9$f) && (v75xpg['closed'] = !0x0, v5g7p['nbsp'] || $ton43['warning']('unclosed xml attribute')), lb8uez && z6uhl) {
            for (var h12_ty = vmc0(lb8uez, {}), dacm = 0x0; z6uhl > dacm; dacm++) {
              var o3ns$ = v75xpg[dacm];bexqw(o3ns$['offset']), o3ns$['locator'] = vmc0(lb8uez, {});
            }be8uqw['locator'] = h12_ty, vi4$ofs(v75xpg, be8uqw, t324n_) && w8bue['push'](v75xpg), be8uqw['locator'] = lb8uez;
          } else vi4$ofs(v75xpg, be8uqw, t324n_) && w8bue['push'](v75xpg);'http://www.w3.org/1999/xhtml' !== v75xpg['uri'] || v75xpg['closed'] ? xwvgqp++ : xwvgqp = vkdmj0c(_y1th2, xwvgqp, v75xpg['tagName'], $9ri, be8uqw);}
    } catch (h_t21y) {
      $ton43['error']('element parse error: ' + h_t21y), xwvgqp = -0x1;
    }xwvgqp > r9$sfi ? r9$sfi = xwvgqp : p7kxv5(Math['max'](n4$ot, r9$sfi) + 0x1);
  }
}function vmc0(qeuw8b, if$o4) {
  return if$o4['lineNumber'] = qeuw8b['lineNumber'], if$o4['columnNumber'] = qeuw8b['columnNumber'], if$o4;
}function vqe8w(_3tn24, zl6hy1, gxqbe, vc05, g8qb, dk7c0m) {
  for (var si4, zly6hu, k0c5m7 = ++zl6hy1, qpvxwg = vlbz8e;;) {
    var io$4sf = _3tn24['charAt'](k0c5m7);switch (io$4sf) {case '=':
        if (qpvxwg === vluh) si4 = _3tn24['slice'](zl6hy1, k0c5m7), qpvxwg = vmacj0;else {
          if (qpvxwg !== vn23_1) throw new Error('attribute equal must after attrName');qpvxwg = vmacj0;
        }break;case '\x27':case '\x22':
        if (qpvxwg === vmacj0 || qpvxwg === vluh) {
          if (qpvxwg === vluh && (dk7c0m['warning']('attribute value must after "="'), si4 = _3tn24['slice'](zl6hy1, k0c5m7)), zl6hy1 = k0c5m7 + 0x1, k0c5m7 = _3tn24['indexOf'](io$4sf, zl6hy1), !(k0c5m7 > 0x0)) throw new Error('attribute value no end \'' + io$4sf + '\' match');zly6hu = _3tn24['slice'](zl6hy1, k0c5m7)['replace'](/&#?\w+;/g, g8qb), gxqbe['add'](si4, zly6hu, zl6hy1 - 0x1), qpvxwg = vot324;
        } else {
          if (qpvxwg != vp5xv7g) throw new Error('attribute value must after "="');zly6hu = _3tn24['slice'](zl6hy1, k0c5m7)['replace'](/&#?\w+;/g, g8qb), gxqbe['add'](si4, zly6hu, zl6hy1), dk7c0m['warning']('attribute "' + si4 + '" missed start quot(' + io$4sf + ')!!'), zl6hy1 = k0c5m7 + 0x1, qpvxwg = vot324;
        }break;case '/':
        switch (qpvxwg) {case vlbz8e:
            gxqbe['setTagName'](_3tn24['slice'](zl6hy1, k0c5m7));case vot324:case vz86uly:case v_1n2h:
            qpvxwg = v_1n2h, gxqbe['closed'] = !0x0;case vp5xv7g:case vluh:case vn23_1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return dk7c0m['error']('unexpected end of input'), qpvxwg == vlbz8e && gxqbe['setTagName'](_3tn24['slice'](zl6hy1, k0c5m7)), k0c5m7;case '>':
        switch (qpvxwg) {case vlbz8e:
            gxqbe['setTagName'](_3tn24['slice'](zl6hy1, k0c5m7));case vot324:case vz86uly:case v_1n2h:
            break;case vp5xv7g:case vluh:
            zly6hu = _3tn24['slice'](zl6hy1, k0c5m7), '/' === zly6hu['slice'](-0x1) && (gxqbe['closed'] = !0x0, zly6hu = zly6hu['slice'](0x0, -0x1));case vn23_1:
            qpvxwg === vn23_1 && (zly6hu = si4), qpvxwg == vp5xv7g ? (dk7c0m['warning']('attribute "' + zly6hu + '" missed quot(")!!'), gxqbe['add'](si4, zly6hu['replace'](/&#?\w+;/g, g8qb), zl6hy1)) : ('http://www.w3.org/1999/xhtml' === vc05[''] && zly6hu['match'](/^(?:disabled|checked|selected)$/i) || dk7c0m['warning']('attribute "' + zly6hu + '" missed value!! "' + zly6hu + '" instead!!'), gxqbe['add'](zly6hu, zly6hu, zl6hy1));break;case vmacj0:
            throw new Error('attribute value missed!!');}return k0c5m7;case '\u0080':
        io$4sf = '\x20';default:
        if ('\x20' >= io$4sf) switch (qpvxwg) {case vlbz8e:
            gxqbe['setTagName'](_3tn24['slice'](zl6hy1, k0c5m7)), qpvxwg = vz86uly;break;case vluh:
            si4 = _3tn24['slice'](zl6hy1, k0c5m7), qpvxwg = vn23_1;break;case vp5xv7g:
            var zly6hu = _3tn24['slice'](zl6hy1, k0c5m7)['replace'](/&#?\w+;/g, g8qb);dk7c0m['warning']('attribute "' + zly6hu + '" missed quot(")!!'), gxqbe['add'](si4, zly6hu, zl6hy1);case vot324:
            qpvxwg = vz86uly;} else switch (qpvxwg) {case vn23_1:
            {
              gxqbe['tagName'];
            }'http://www.w3.org/1999/xhtml' === vc05[''] && si4['match'](/^(?:disabled|checked|selected)$/i) || dk7c0m['warning']('attribute "' + si4 + '" missed value!! "' + si4 + '" instead2!!'), gxqbe['add'](si4, si4, zl6hy1), zl6hy1 = k0c5m7, qpvxwg = vluh;break;case vot324:
            dk7c0m['warning']('attribute space is required"' + si4 + '\x22!!');case vz86uly:
            qpvxwg = vluh, zl6hy1 = k0c5m7;break;case vmacj0:
            qpvxwg = vp5xv7g, zl6hy1 = k0c5m7;break;case v_1n2h:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}k0c5m7++;
  }
}function vi4$ofs(l8ubz6, y86ulz, dm0ca) {
  for (var osif$9 = l8ubz6['tagName'], q8uew = null, gx5p = l8ubz6['length']; gx5p--;) {
    var t$3on4 = l8ubz6[gx5p],
        $4so3i = t$3on4['qName'],
        bue8l = t$3on4['value'],
        p705 = $4so3i['indexOf'](':');if (p705 > 0x0) var gw8beq = t$3on4['prefix'] = $4so3i['slice'](0x0, p705),
        we8bg = $4so3i['slice'](p705 + 0x1),
        _yh1t2 = 'xmlns' === gw8beq && we8bg;else we8bg = $4so3i, gw8beq = null, _yh1t2 = 'xmlns' === $4so3i && '';t$3on4['localName'] = we8bg, _yh1t2 !== !0x1 && (null == q8uew && (q8uew = {}, v$f4soi(dm0ca, dm0ca = {})), dm0ca[_yh1t2] = q8uew[_yh1t2] = bue8l, t$3on4['uri'] = 'http://www.w3.org/2000/xmlns/', y86ulz['startPrefixMapping'](_yh1t2, bue8l));
  }for (var gx5p = l8ubz6['length']; gx5p--;) {
    t$3on4 = l8ubz6[gx5p];var gw8beq = t$3on4['prefix'];gw8beq && ('xml' === gw8beq && (t$3on4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gw8beq && (t$3on4['uri'] = dm0ca[gw8beq || '']));
  }var p705 = osif$9['indexOf'](':');p705 > 0x0 ? (gw8beq = l8ubz6['prefix'] = osif$9['slice'](0x0, p705), we8bg = l8ubz6['localName'] = osif$9['slice'](p705 + 0x1)) : (gw8beq = null, we8bg = l8ubz6['localName'] = osif$9);var t432o = l8ubz6['uri'] = dm0ca[gw8beq || ''];if (y86ulz['startElement'](t432o, we8bg, osif$9, l8ubz6), !l8ubz6['closed']) return l8ubz6['currentNSMap'] = dm0ca, l8ubz6['localNSMap'] = q8uew, !0x0;if (y86ulz['endElement'](t432o, we8bg, osif$9), q8uew) {
    for (gw8beq in q8uew) y86ulz['endPrefixMapping'](gw8beq);
  }
}function vkdmj0c(eqpwgx, $o3is4, gqvwpx, ofi4$s, $i34) {
  if (/^(?:script|textarea)$/i['test'](gqvwpx)) {
    var eqgw8b = eqpwgx['indexOf']('</' + gqvwpx + '>', $o3is4),
        t2o3 = eqpwgx['substring']($o3is4 + 0x1, eqgw8b);if (/[&<]/['test'](t2o3)) return (/^script$/i['test'](gqvwpx) ? ($i34['characters'](t2o3, 0x0, t2o3['length']), eqgw8b) : (t2o3 = t2o3['replace'](/&#?\w+;/g, ofi4$s), $i34['characters'](t2o3, 0x0, t2o3['length']), eqgw8b)
    );
  }return $o3is4 + 0x1;
}function vbegxwq(yh61_z, xqgw, vp75x, o$3s) {
  var t1n2h_ = o$3s[vp75x];return null == t1n2h_ && (t1n2h_ = yh61_z['lastIndexOf']('</' + vp75x + '>'), xqgw > t1n2h_ && (t1n2h_ = yh61_z['lastIndexOf']('</' + vp75x)), o$3s[vp75x] = t1n2h_), xqgw > t1n2h_;
}function v$f4soi(z68lyu, p5x7g) {
  for (var bw8ue in z68lyu) p5x7g[bw8ue] = z68lyu[bw8ue];
}function vgp5vx(kjcd0m, mckd70, mkcd, qewu8b) {
  var q8bewg = kjcd0m['charAt'](mckd70 + 0x2);switch (q8bewg) {case '-':
      if ('-' === kjcd0m['charAt'](mckd70 + 0x3)) {
        var z1h_y6 = kjcd0m['indexOf']('-->', mckd70 + 0x4);return z1h_y6 > mckd70 ? (mkcd['comment'](kjcd0m, mckd70 + 0x4, z1h_y6 - mckd70 - 0x4), z1h_y6 + 0x3) : (qewu8b['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kjcd0m['substr'](mckd70 + 0x3, 0x6)) {
        var z1h_y6 = kjcd0m['indexOf'](']]>', mckd70 + 0x9);return mkcd['startCDATA'](), mkcd['characters'](kjcd0m, mckd70 + 0x9, z1h_y6 - mckd70 - 0x9), mkcd['endCDATA'](), z1h_y6 + 0x3;
      }var gqbwe = vt234on(kjcd0m, mckd70),
          buzl86 = gqbwe['length'];if (buzl86 > 0x1 && /!doctype/i['test'](gqbwe[0x0][0x0])) {
        var xepw = gqbwe[0x1][0x0],
            gwe = buzl86 > 0x3 && /^public$/i['test'](gqbwe[0x2][0x0]) && gqbwe[0x3][0x0],
            n1t2_h = buzl86 > 0x4 && gqbwe[0x4][0x0],
            is34o$ = gqbwe[buzl86 - 0x1];return mkcd['startDTD'](xepw, gwe && gwe['replace'](/^(['"])(.*?)\1$/, '$2'), n1t2_h && n1t2_h['replace'](/^(['"])(.*?)\1$/, '$2')), mkcd['endDTD'](), is34o$['index'] + is34o$[0x0]['length'];
      }}return -0x1;
}function vk7cv0(hluy6, mj0ck, i$so43) {
  var m07kc = hluy6['indexOf']('?>', mj0ck);if (m07kc) {
    var _162yh = hluy6['substring'](mj0ck, m07kc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (_162yh) {
      {
        _162yh[0x0]['length'];
      }return i$so43['processingInstruction'](_162yh[0x1], _162yh[0x2]), m07kc + 0x2;
    }return -0x1;
  }return -0x1;
}function vr$sf9i() {}function vo$43i(vp57x, ir9f$) {
  return vp57x['__proto__'] = ir9f$, vp57x;
}function vt234on(b8l6z, p0k) {
  var vxgpw5,
      km0dcj = [],
      t_n3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (t_n3['lastIndex'] = p0k, t_n3['exec'](b8l6z); vxgpw5 = t_n3['exec'](b8l6z);) if (km0dcj['push'](vxgpw5), vxgpw5[0x1]) return km0dcj;
}var vdc0ajm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vzu68b = new RegExp('[\\-\\.0-9' + vdc0ajm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vbgxqw = new RegExp('^' + vdc0ajm['source'] + vzu68b['source'] + '*(?::' + vdc0ajm['source'] + vzu68b['source'] + '*)?$'),
    vlbz8e = 0x0,
    vluh = 0x1,
    vn23_1 = 0x2,
    vmacj0 = 0x3,
    vp5xv7g = 0x4,
    vot324 = 0x5,
    vz86uly = 0x6,
    v_1n2h = 0x7;vo3i$4['prototype'] = { 'parse': function (qb8w, $sn34, bqwgxe) {
    var vkx7p5 = this['domBuilder'];vkx7p5['startDocument'](), v$f4soi($sn34, $sn34 = {}), vis4$3(qb8w, $sn34, bqwgxe, vkx7p5, this['errorHandler']), vkx7p5['endDocument']();
  } }, vr$sf9i['prototype'] = { 'setTagName': function (z6yl1h) {
    if (!vbgxqw['test'](z6yl1h)) throw new Error('invalid tagName:' + z6yl1h);this['tagName'] = z6yl1h;
  }, 'add': function (no4s, lequ8b, xebqwg) {
    if (!vbgxqw['test'](no4s)) throw new Error('invalid attribute:' + no4s);this[this['length']++] = { 'qName': no4s, 'value': lequ8b, 'offset': xebqwg };
  }, 'length': 0x0, 'getLocalName': function (c0kv75) {
    return this[c0kv75]['localName'];
  }, 'getLocator': function (bgwex) {
    return this[bgwex]['locator'];
  }, 'getQName': function (ht1_y) {
    return this[ht1_y]['qName'];
  }, 'getURI': function (egbxqw) {
    return this[egbxqw]['uri'];
  }, 'getValue': function (beqwu8) {
    return this[beqwu8]['value'];
  } }, vo$43i({}, vo$43i['prototype']) instanceof vo$43i || (vo$43i = function (eqw8, tn2h1_) {
  function $sr9i() {}$sr9i['prototype'] = tn2h1_, $sr9i = new $sr9i();for (tn2h1_ in eqw8) $sr9i[tn2h1_] = eqw8[tn2h1_];return $sr9i;
}), exports['XMLReader'] = vo3i$4;