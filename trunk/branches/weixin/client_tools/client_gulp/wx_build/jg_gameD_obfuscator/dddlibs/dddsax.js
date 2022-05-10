var v = wx.$d;
function zn_h4j() {}function zeutimd(p$v1r, kaq0z, uftqgk, bxaz80, bzaq0x) {
  function vyp$7w(kgqutf) {
    if (kgqutf > 0xffff) {
      kgqutf -= 0x10000;var n9j43 = 0xd800 + (kgqutf >> 0xa),
          xa08bz = 0xdc00 + (0x3ff & kgqutf);return String['fromCharCode'](n9j43, xa08bz);
    }return String['fromCharCode'](kgqutf);
  }function $xrw1(j_3n) {
    var v$wyp = j_3n['slice'](0x1, -0x1);return v$wyp in uftqgk ? uftqgk[v$wyp] : '#' === v$wyp['charAt'](0x0) ? vyp$7w(parseInt(v$wyp['substr'](0x1)['replace']('x', '0x'))) : (bzaq0x['error']('entity not found:' + j_3n), j_3n);
  }function x1$8w($rxw8) {
    if ($rxw8 > edumi) {
      var uqkftg = p$v1r['substring'](edumi, $rxw8)['replace'](/&#?\w+;/g, $xrw1);z0aqxb && tfkugq(edumi), bxaz80['characters'](uqkftg, 0x0, $rxw8 - edumi), edumi = $rxw8;
    }
  }function tfkugq(r1x$8, gf0zkq) {
    for (; r1x$8 >= x8ba && (gf0zkq = qkgtfu['exec'](p$v1r));) ft0qkg = gf0zkq['index'], x8ba = ft0qkg + gf0zkq[0x0]['length'], z0aqxb['lineNumber']++;z0aqxb['columnNumber'] = r1x$8 - ft0qkg + 0x1;
  }for (var ft0qkg = 0x0, x8ba = 0x0, qkgtfu = /.*(?:\r\n?|\n)|.*$/g, z0aqxb = bxaz80['locator'], p$8w = [{ 'currentNSMap': kaq0z }], qxbaz = {}, edumi = 0x0;;) {
    try {
      var uemid = p$v1r['indexOf']('<', edumi);if (0x0 > uemid) {
        if (!p$v1r['substr'](edumi)['match'](/^\s*$/)) {
          var zb0a = bxaz80['doc'],
              gkq0ft = zb0a['createTextNode'](p$v1r['substr'](edumi));zb0a['appendChild'](gkq0ft), bxaz80['currentElement'] = gkq0ft;
        }return;
      }switch (uemid > edumi && x1$8w(uemid), p$v1r['charAt'](uemid + 0x1)) {case '/':
          var ejm6dh = p$v1r['indexOf']('>', uemid + 0x3),
              xb81rw = p$v1r['substring'](uemid + 0x2, ejm6dh),
              vl7$yp = p$8w['pop']();0x0 > ejm6dh ? (xb81rw = p$v1r['substring'](uemid + 0x2)['replace'](/[\s<].*/, ''), bzaq0x['error']('end tag name: ' + xb81rw + ' is not complete:' + vl7$yp['tagName']), ejm6dh = uemid + 0x1 + xb81rw['length']) : xb81rw['match'](/\s</) && (xb81rw = xb81rw['replace'](/[\s<].*/, ''), bzaq0x['error']('end tag name: ' + xb81rw + ' maybe not complete'), ejm6dh = uemid + 0x1 + xb81rw['length']);var iuem6 = vl7$yp['localNSMap'],
              tuiemd = vl7$yp['tagName'] == xb81rw,
              $w7vrp = tuiemd || vl7$yp['tagName'] && vl7$yp['tagName']['toLowerCase']() == xb81rw['toLowerCase']();if ($w7vrp) {
            if (bxaz80['endElement'](vl7$yp['uri'], vl7$yp['localName'], xb81rw), iuem6) {
              for (var pr in iuem6) bxaz80['endPrefixMapping'](pr);
            }tuiemd || bzaq0x['fatalError']('end tag name: ' + xb81rw + ' is not match the current start tagName:' + vl7$yp['tagName']);
          } else p$8w['push'](vl7$yp);ejm6dh++;break;case '?':
          z0aqxb && tfkugq(uemid), ejm6dh = z_34j9(p$v1r, uemid, bxaz80);break;case '!':
          z0aqxb && tfkugq(uemid), ejm6dh = zabr18(p$v1r, uemid, bxaz80, bzaq0x);break;default:
          z0aqxb && tfkugq(uemid);var mieutd = new zzbxqa(),
              dtfei = p$8w[p$8w['length'] - 0x1]['currentNSMap'],
              ejm6dh = zvw7r$(p$v1r, uemid, mieutd, dtfei, $xrw1, bzaq0x),
              r$81wp = mieutd['length'];if (!mieutd['closed'] && zwvp7$(p$v1r, ejm6dh, mieutd['tagName'], qxbaz) && (mieutd['closed'] = !0x0, uftqgk['nbsp'] || bzaq0x['warning']('unclosed xml attribute')), z0aqxb && r$81wp) {
            for (var im6ud = zn3c49(z0aqxb, {}), o3c59_ = 0x0; r$81wp > o3c59_; o3c59_++) {
              var $p1r = mieutd[o3c59_];tfkugq($p1r['offset']), $p1r['locator'] = zn3c49(z0aqxb, {});
            }bxaz80['locator'] = im6ud, zhn_9(mieutd, bxaz80, dtfei) && p$8w['push'](mieutd), bxaz80['locator'] = z0aqxb;
          } else zhn_9(mieutd, bxaz80, dtfei) && p$8w['push'](mieutd);'http://www.w3.org/1999/xhtml' !== mieutd['uri'] || mieutd['closed'] ? ejm6dh++ : ejm6dh = zrv7w$(p$v1r, ejm6dh, mieutd['tagName'], $xrw1, bxaz80);}
    } catch (udtfki) {
      bzaq0x['error']('element parse error: ' + udtfki), ejm6dh = -0x1;
    }ejm6dh > edumi ? edumi = ejm6dh : x1$8w(Math['max'](uemid, edumi) + 0x1);
  }
}function zn3c49($7ypw, imud6) {
  return imud6['lineNumber'] = $7ypw['lineNumber'], imud6['columnNumber'] = $7ypw['columnNumber'], imud6;
}function zvw7r$(pw7y, qgzfk0, ue6i, fduiet, r8bx, n439_j) {
  for (var hn4_j9, c5o3_9, y7v = ++qgzfk0, dme6iu = zedftiu;;) {
    var tdfui = pw7y['charAt'](y7v);switch (tdfui) {case '=':
        if (dme6iu === zgfz0q) hn4_j9 = pw7y['slice'](qgzfk0, y7v), dme6iu = zp7w$vy;else {
          if (dme6iu !== zieu6md) throw new Error('attribute equal must after attrName');dme6iu = zp7w$vy;
        }break;case '\x27':case '\x22':
        if (dme6iu === zp7w$vy || dme6iu === zgfz0q) {
          if (dme6iu === zgfz0q && (n439_j['warning']('attribute value must after "="'), hn4_j9 = pw7y['slice'](qgzfk0, y7v)), qgzfk0 = y7v + 0x1, y7v = pw7y['indexOf'](tdfui, qgzfk0), !(y7v > 0x0)) throw new Error('attribute value no end \'' + tdfui + '\' match');c5o3_9 = pw7y['slice'](qgzfk0, y7v)['replace'](/&#?\w+;/g, r8bx), ue6i['add'](hn4_j9, c5o3_9, qgzfk0 - 0x1), dme6iu = zdkftu;
        } else {
          if (dme6iu != zh_n9) throw new Error('attribute value must after "="');c5o3_9 = pw7y['slice'](qgzfk0, y7v)['replace'](/&#?\w+;/g, r8bx), ue6i['add'](hn4_j9, c5o3_9, qgzfk0), n439_j['warning']('attribute "' + hn4_j9 + '" missed start quot(' + tdfui + ')!!'), qgzfk0 = y7v + 0x1, dme6iu = zdkftu;
        }break;case '/':
        switch (dme6iu) {case zedftiu:
            ue6i['setTagName'](pw7y['slice'](qgzfk0, y7v));case zdkftu:case z$rvp1:case ztdfeiu:
            dme6iu = ztdfeiu, ue6i['closed'] = !0x0;case zh_n9:case zgfz0q:case zieu6md:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return n439_j['error']('unexpected end of input'), dme6iu == zedftiu && ue6i['setTagName'](pw7y['slice'](qgzfk0, y7v)), y7v;case '>':
        switch (dme6iu) {case zedftiu:
            ue6i['setTagName'](pw7y['slice'](qgzfk0, y7v));case zdkftu:case z$rvp1:case ztdfeiu:
            break;case zh_n9:case zgfz0q:
            c5o3_9 = pw7y['slice'](qgzfk0, y7v), '/' === c5o3_9['slice'](-0x1) && (ue6i['closed'] = !0x0, c5o3_9 = c5o3_9['slice'](0x0, -0x1));case zieu6md:
            dme6iu === zieu6md && (c5o3_9 = hn4_j9), dme6iu == zh_n9 ? (n439_j['warning']('attribute "' + c5o3_9 + '" missed quot(")!!'), ue6i['add'](hn4_j9, c5o3_9['replace'](/&#?\w+;/g, r8bx), qgzfk0)) : ('http://www.w3.org/1999/xhtml' === fduiet[''] && c5o3_9['match'](/^(?:disabled|checked|selected)$/i) || n439_j['warning']('attribute "' + c5o3_9 + '" missed value!! "' + c5o3_9 + '" instead!!'), ue6i['add'](c5o3_9, c5o3_9, qgzfk0));break;case zp7w$vy:
            throw new Error('attribute value missed!!');}return y7v;case '\u0080':
        tdfui = '\x20';default:
        if ('\x20' >= tdfui) switch (dme6iu) {case zedftiu:
            ue6i['setTagName'](pw7y['slice'](qgzfk0, y7v)), dme6iu = z$rvp1;break;case zgfz0q:
            hn4_j9 = pw7y['slice'](qgzfk0, y7v), dme6iu = zieu6md;break;case zh_n9:
            var c5o3_9 = pw7y['slice'](qgzfk0, y7v)['replace'](/&#?\w+;/g, r8bx);n439_j['warning']('attribute "' + c5o3_9 + '" missed quot(")!!'), ue6i['add'](hn4_j9, c5o3_9, qgzfk0);case zdkftu:
            dme6iu = z$rvp1;} else switch (dme6iu) {case zieu6md:
            {
              ue6i['tagName'];
            }'http://www.w3.org/1999/xhtml' === fduiet[''] && hn4_j9['match'](/^(?:disabled|checked|selected)$/i) || n439_j['warning']('attribute "' + hn4_j9 + '" missed value!! "' + hn4_j9 + '" instead2!!'), ue6i['add'](hn4_j9, hn4_j9, qgzfk0), qgzfk0 = y7v, dme6iu = zgfz0q;break;case zdkftu:
            n439_j['warning']('attribute space is required"' + hn4_j9 + '\x22!!');case z$rvp1:
            dme6iu = zgfz0q, qgzfk0 = y7v;break;case zp7w$vy:
            dme6iu = zh_n9, qgzfk0 = y7v;break;case ztdfeiu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}y7v++;
  }
}function zhn_9(l7vpy, q0fk, aqk0g) {
  for (var qugfkt = l7vpy['tagName'], eftid = null, _3cn94 = l7vpy['length']; _3cn94--;) {
    var bqz0 = l7vpy[_3cn94],
        qtf0g = bqz0['qName'],
        jhn49 = bqz0['value'],
        jmh4 = qtf0g['indexOf'](':');if (jmh4 > 0x0) var tgukfq = bqz0['prefix'] = qtf0g['slice'](0x0, jmh4),
        qkz0g = qtf0g['slice'](jmh4 + 0x1),
        jn6_4h = 'xmlns' === tgukfq && qkz0g;else qkz0g = qtf0g, tgukfq = null, jn6_4h = 'xmlns' === qtf0g && '';bqz0['localName'] = qkz0g, jn6_4h !== !0x1 && (null == eftid && (eftid = {}, zimhd6e(aqk0g, aqk0g = {})), aqk0g[jn6_4h] = eftid[jn6_4h] = jhn49, bqz0['uri'] = 'http://www.w3.org/2000/xmlns/', q0fk['startPrefixMapping'](jn6_4h, jhn49));
  }for (var _3cn94 = l7vpy['length']; _3cn94--;) {
    bqz0 = l7vpy[_3cn94];var tgukfq = bqz0['prefix'];tgukfq && ('xml' === tgukfq && (bqz0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== tgukfq && (bqz0['uri'] = aqk0g[tgukfq || '']));
  }var jmh4 = qugfkt['indexOf'](':');jmh4 > 0x0 ? (tgukfq = l7vpy['prefix'] = qugfkt['slice'](0x0, jmh4), qkz0g = l7vpy['localName'] = qugfkt['slice'](jmh4 + 0x1)) : (tgukfq = null, qkz0g = l7vpy['localName'] = qugfkt);var r$1xw8 = l7vpy['uri'] = aqk0g[tgukfq || ''];if (q0fk['startElement'](r$1xw8, qkz0g, qugfkt, l7vpy), !l7vpy['closed']) return l7vpy['currentNSMap'] = aqk0g, l7vpy['localNSMap'] = eftid, !0x0;if (q0fk['endElement'](r$1xw8, qkz0g, qugfkt), eftid) {
    for (tgukfq in eftid) q0fk['endPrefixMapping'](tgukfq);
  }
}function zrv7w$(o_5c39, c9_o, qtgk, h4j6mn, yv$7l) {
  if (/^(?:script|textarea)$/i['test'](qtgk)) {
    var tkfguq = o_5c39['indexOf']('</' + qtgk + '>', c9_o),
        a0b8 = o_5c39['substring'](c9_o + 0x1, tkfguq);if (/[&<]/['test'](a0b8)) return (/^script$/i['test'](qtgk) ? (yv$7l['characters'](a0b8, 0x0, a0b8['length']), tkfguq) : (a0b8 = a0b8['replace'](/&#?\w+;/g, h4j6mn), yv$7l['characters'](a0b8, 0x0, a0b8['length']), tkfguq)
    );
  }return c9_o + 0x1;
}function zwvp7$(zk0g, wb8r1, mn46jh, xb8a1) {
  var i6uemd = xb8a1[mn46jh];return null == i6uemd && (i6uemd = zk0g['lastIndexOf']('</' + mn46jh + '>'), wb8r1 > i6uemd && (i6uemd = zk0g['lastIndexOf']('</' + mn46jh)), xb8a1[mn46jh] = i6uemd), wb8r1 > i6uemd;
}function zimhd6e(azgb0q, rax) {
  for (var b8a1r in azgb0q) rax[b8a1r] = azgb0q[b8a1r];
}function zabr18(h6j4m, gftukq, ga0qzk, tdm) {
  var nj46h = h6j4m['charAt'](gftukq + 0x2);switch (nj46h) {case '-':
      if ('-' === h6j4m['charAt'](gftukq + 0x3)) {
        var abq0g = h6j4m['indexOf']('-->', gftukq + 0x4);return abq0g > gftukq ? (ga0qzk['comment'](h6j4m, gftukq + 0x4, abq0g - gftukq - 0x4), abq0g + 0x3) : (tdm['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == h6j4m['substr'](gftukq + 0x3, 0x6)) {
        var abq0g = h6j4m['indexOf'](']]>', gftukq + 0x9);return ga0qzk['startCDATA'](), ga0qzk['characters'](h6j4m, gftukq + 0x9, abq0g - gftukq - 0x9), ga0qzk['endCDATA'](), abq0g + 0x3;
      }var zb81 = zv1r$(h6j4m, gftukq),
          dim6eh = zb81['length'];if (dim6eh > 0x1 && /!doctype/i['test'](zb81[0x0][0x0])) {
        var kfgq0t = zb81[0x1][0x0],
            yvpl7 = dim6eh > 0x3 && /^public$/i['test'](zb81[0x2][0x0]) && zb81[0x3][0x0],
            wr$pv1 = dim6eh > 0x4 && zb81[0x4][0x0],
            bq0gz = zb81[dim6eh - 0x1];return ga0qzk['startDTD'](kfgq0t, yvpl7 && yvpl7['replace'](/^(['"])(.*?)\1$/, '$2'), wr$pv1 && wr$pv1['replace'](/^(['"])(.*?)\1$/, '$2')), ga0qzk['endDTD'](), bq0gz['index'] + bq0gz[0x0]['length'];
      }}return -0x1;
}function z_34j9(du6eim, d6jhe, $rvwp1) {
  var zbaq = du6eim['indexOf']('?>', d6jhe);if (zbaq) {
    var $r81w = du6eim['substring'](d6jhe, zbaq)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($r81w) {
      {
        $r81w[0x0]['length'];
      }return $rvwp1['processingInstruction']($r81w[0x1], $r81w[0x2]), zbaq + 0x2;
    }return -0x1;
  }return -0x1;
}function zzbxqa() {}function zr$w8(n3_9j, qkt0f) {
  return n3_9j['__proto__'] = qkt0f, n3_9j;
}function zv1r$(y$p7vw, t0gfkq) {
  var a0qkg,
      iutdf = [],
      zkfg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zkfg['lastIndex'] = t0gfkq, zkfg['exec'](y$p7vw); a0qkg = zkfg['exec'](y$p7vw);) if (iutdf['push'](a0qkg), a0qkg[0x1]) return iutdf;
}var zidukt = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zdhmej = new RegExp('[\\-\\.0-9' + zidukt['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zp1vrw = new RegExp('^' + zidukt['source'] + zdhmej['source'] + '*(?::' + zidukt['source'] + zdhmej['source'] + '*)?$'),
    zedftiu = 0x0,
    zgfz0q = 0x1,
    zieu6md = 0x2,
    zp7w$vy = 0x3,
    zh_n9 = 0x4,
    zdkftu = 0x5,
    z$rvp1 = 0x6,
    ztdfeiu = 0x7;zn_h4j['prototype'] = { 'parse': function (py$7vl, tufik, $v1prw) {
    var wr$81 = this['domBuilder'];wr$81['startDocument'](), zimhd6e(tufik, tufik = {}), zeutimd(py$7vl, tufik, $v1prw, wr$81, this['errorHandler']), wr$81['endDocument']();
  } }, zzbxqa['prototype'] = { 'setTagName': function (nh46) {
    if (!zp1vrw['test'](nh46)) throw new Error('invalid tagName:' + nh46);this['tagName'] = nh46;
  }, 'add': function (xba0qz, wv1rp, uimedt) {
    if (!zp1vrw['test'](xba0qz)) throw new Error('invalid attribute:' + xba0qz);this[this['length']++] = { 'qName': xba0qz, 'value': wv1rp, 'offset': uimedt };
  }, 'length': 0x0, 'getLocalName': function (u6mi) {
    return this[u6mi]['localName'];
  }, 'getLocator': function (medtui) {
    return this[medtui]['locator'];
  }, 'getQName': function (p$rv7) {
    return this[p$rv7]['qName'];
  }, 'getURI': function (wv$1rp) {
    return this[wv$1rp]['uri'];
  }, 'getValue': function (iu6ed) {
    return this[iu6ed]['value'];
  } }, zr$w8({}, zr$w8['prototype']) instanceof zr$w8 || (zr$w8 = function (tdeifu, $18prw) {
  function qa0gb() {}qa0gb['prototype'] = $18prw, qa0gb = new qa0gb();for ($18prw in tdeifu) qa0gb[$18prw] = tdeifu[$18prw];return qa0gb;
}), exports['XMLReader'] = zn_h4j;