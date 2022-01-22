var v = wx.$d;
function zz80bxa() {}function zw18p$r(r$8w1p, hnj49_, xa18b, j493n_, wp7$rv) {
  function utmie(eiud6m) {
    if (eiud6m > 0xffff) {
      eiud6m -= 0x10000;var zkga0q = 0xd800 + (eiud6m >> 0xa),
          b8zx0a = 0xdc00 + (0x3ff & eiud6m);return String['fromCharCode'](zkga0q, b8zx0a);
    }return String['fromCharCode'](eiud6m);
  }function _o4c3(g0azq) {
    var rpw81$ = g0azq['slice'](0x1, -0x1);return rpw81$ in xa18b ? xa18b[rpw81$] : '#' === rpw81$['charAt'](0x0) ? utmie(parseInt(rpw81$['substr'](0x1)['replace']('x', '0x'))) : (wp7$rv['error']('entity not found:' + g0azq), g0azq);
  }function _n9c4(uefid) {
    if (uefid > p$8r1w) {
      var m6ehjd = r$8w1p['substring'](p$8r1w, uefid)['replace'](/&#?\w+;/g, _o4c3);a1br8x && w8rx1$(p$8r1w), j493n_['characters'](m6ehjd, 0x0, uefid - p$8r1w), p$8r1w = uefid;
    }
  }function w8rx1$(dfeiu, _n3j4) {
    for (; dfeiu >= tfkud && (_n3j4 = f0qg['exec'](r$8w1p));) rpw$7 = _n3j4['index'], tfkud = rpw$7 + _n3j4[0x0]['length'], a1br8x['lineNumber']++;a1br8x['columnNumber'] = dfeiu - rpw$7 + 0x1;
  }for (var rpw$7 = 0x0, tfkud = 0x0, f0qg = /.*(?:\r\n?|\n)|.*$/g, a1br8x = j493n_['locator'], ktdifu = [{ 'currentNSMap': hnj49_ }], f0q = {}, p$8r1w = 0x0;;) {
    try {
      var fqzg0 = r$8w1p['indexOf']('<', p$8r1w);if (0x0 > fqzg0) {
        if (!r$8w1p['substr'](p$8r1w)['match'](/^\s*$/)) {
          var baz = j493n_['doc'],
              ieufdt = baz['createTextNode'](r$8w1p['substr'](p$8r1w));baz['appendChild'](ieufdt), j493n_['currentElement'] = ieufdt;
        }return;
      }switch (fqzg0 > p$8r1w && _n9c4(fqzg0), r$8w1p['charAt'](fqzg0 + 0x1)) {case '/':
          var hedm = r$8w1p['indexOf']('>', fqzg0 + 0x3),
              d6imhe = r$8w1p['substring'](fqzg0 + 0x2, hedm),
              v$wpr = ktdifu['pop']();0x0 > hedm ? (d6imhe = r$8w1p['substring'](fqzg0 + 0x2)['replace'](/[\s<].*/, ''), wp7$rv['error']('end tag name: ' + d6imhe + ' is not complete:' + v$wpr['tagName']), hedm = fqzg0 + 0x1 + d6imhe['length']) : d6imhe['match'](/\s</) && (d6imhe = d6imhe['replace'](/[\s<].*/, ''), wp7$rv['error']('end tag name: ' + d6imhe + ' maybe not complete'), hedm = fqzg0 + 0x1 + d6imhe['length']);var wvr7$ = v$wpr['localNSMap'],
              xqa0zb = v$wpr['tagName'] == d6imhe,
              q0zxba = xqa0zb || v$wpr['tagName'] && v$wpr['tagName']['toLowerCase']() == d6imhe['toLowerCase']();if (q0zxba) {
            if (j493n_['endElement'](v$wpr['uri'], v$wpr['localName'], d6imhe), wvr7$) {
              for (var n39c4_ in wvr7$) j493n_['endPrefixMapping'](n39c4_);
            }xqa0zb || wp7$rv['fatalError']('end tag name: ' + d6imhe + ' is not match the current start tagName:' + v$wpr['tagName']);
          } else ktdifu['push'](v$wpr);hedm++;break;case '?':
          a1br8x && w8rx1$(fqzg0), hedm = zgkufti(r$8w1p, fqzg0, j493n_);break;case '!':
          a1br8x && w8rx1$(fqzg0), hedm = zvw$pr(r$8w1p, fqzg0, j493n_, wp7$rv);break;default:
          a1br8x && w8rx1$(fqzg0);var rbx1a = new zbz0g(),
              qgtku = ktdifu[ktdifu['length'] - 0x1]['currentNSMap'],
              hedm = zo3c925(r$8w1p, fqzg0, rbx1a, qgtku, _o4c3, wp7$rv),
              l$vp7y = rbx1a['length'];if (!rbx1a['closed'] && zp7w$rv(r$8w1p, hedm, rbx1a['tagName'], f0q) && (rbx1a['closed'] = !0x0, xa18b['nbsp'] || wp7$rv['warning']('unclosed xml attribute')), a1br8x && l$vp7y) {
            for (var tikug = zm6uid(a1br8x, {}), co359 = 0x0; l$vp7y > co359; co359++) {
              var d6ejm = rbx1a[co359];w8rx1$(d6ejm['offset']), d6ejm['locator'] = zm6uid(a1br8x, {});
            }j493n_['locator'] = tikug, zkftdui(rbx1a, j493n_, qgtku) && ktdifu['push'](rbx1a), j493n_['locator'] = a1br8x;
          } else zkftdui(rbx1a, j493n_, qgtku) && ktdifu['push'](rbx1a);'http://www.w3.org/1999/xhtml' !== rbx1a['uri'] || rbx1a['closed'] ? hedm++ : hedm = zzfgq0(r$8w1p, hedm, rbx1a['tagName'], _o4c3, j493n_);}
    } catch ($vwp7r) {
      wp7$rv['error']('element parse error: ' + $vwp7r), hedm = -0x1;
    }hedm > p$8r1w ? p$8r1w = hedm : _n9c4(Math['max'](fqzg0, p$8r1w) + 0x1);
  }
}function zm6uid(pyvl, bax0) {
  return bax0['lineNumber'] = pyvl['lineNumber'], bax0['columnNumber'] = pyvl['columnNumber'], bax0;
}function zo3c925(brx81a, q0akgz, a8b0, x8a1rb, hn_4j, fgu) {
  for (var gtkf0q, x8br1a, q0kfz = ++q0akgz, _o34 = zag0bq;;) {
    var gq0kza = brx81a['charAt'](q0kfz);switch (gq0kza) {case '=':
        if (_o34 === z$p1v) gtkf0q = brx81a['slice'](q0akgz, q0kfz), _o34 = znhj6e;else {
          if (_o34 !== zkfgutq) throw new Error('attribute equal must after attrName');_o34 = znhj6e;
        }break;case '\x27':case '\x22':
        if (_o34 === znhj6e || _o34 === z$p1v) {
          if (_o34 === z$p1v && (fgu['warning']('attribute value must after "="'), gtkf0q = brx81a['slice'](q0akgz, q0kfz)), q0akgz = q0kfz + 0x1, q0kfz = brx81a['indexOf'](gq0kza, q0akgz), !(q0kfz > 0x0)) throw new Error('attribute value no end \'' + gq0kza + '\' match');x8br1a = brx81a['slice'](q0akgz, q0kfz)['replace'](/&#?\w+;/g, hn_4j), a8b0['add'](gtkf0q, x8br1a, q0akgz - 0x1), _o34 = zutmdei;
        } else {
          if (_o34 != zba8x1) throw new Error('attribute value must after "="');x8br1a = brx81a['slice'](q0akgz, q0kfz)['replace'](/&#?\w+;/g, hn_4j), a8b0['add'](gtkf0q, x8br1a, q0akgz), fgu['warning']('attribute "' + gtkf0q + '" missed start quot(' + gq0kza + ')!!'), q0akgz = q0kfz + 0x1, _o34 = zutmdei;
        }break;case '/':
        switch (_o34) {case zag0bq:
            a8b0['setTagName'](brx81a['slice'](q0akgz, q0kfz));case zutmdei:case zc9_5o:case zvypw7:
            _o34 = zvypw7, a8b0['closed'] = !0x0;case zba8x1:case z$p1v:case zkfgutq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fgu['error']('unexpected end of input'), _o34 == zag0bq && a8b0['setTagName'](brx81a['slice'](q0akgz, q0kfz)), q0kfz;case '>':
        switch (_o34) {case zag0bq:
            a8b0['setTagName'](brx81a['slice'](q0akgz, q0kfz));case zutmdei:case zc9_5o:case zvypw7:
            break;case zba8x1:case z$p1v:
            x8br1a = brx81a['slice'](q0akgz, q0kfz), '/' === x8br1a['slice'](-0x1) && (a8b0['closed'] = !0x0, x8br1a = x8br1a['slice'](0x0, -0x1));case zkfgutq:
            _o34 === zkfgutq && (x8br1a = gtkf0q), _o34 == zba8x1 ? (fgu['warning']('attribute "' + x8br1a + '" missed quot(")!!'), a8b0['add'](gtkf0q, x8br1a['replace'](/&#?\w+;/g, hn_4j), q0akgz)) : ('http://www.w3.org/1999/xhtml' === x8a1rb[''] && x8br1a['match'](/^(?:disabled|checked|selected)$/i) || fgu['warning']('attribute "' + x8br1a + '" missed value!! "' + x8br1a + '" instead!!'), a8b0['add'](x8br1a, x8br1a, q0akgz));break;case znhj6e:
            throw new Error('attribute value missed!!');}return q0kfz;case '\u0080':
        gq0kza = '\x20';default:
        if ('\x20' >= gq0kza) switch (_o34) {case zag0bq:
            a8b0['setTagName'](brx81a['slice'](q0akgz, q0kfz)), _o34 = zc9_5o;break;case z$p1v:
            gtkf0q = brx81a['slice'](q0akgz, q0kfz), _o34 = zkfgutq;break;case zba8x1:
            var x8br1a = brx81a['slice'](q0akgz, q0kfz)['replace'](/&#?\w+;/g, hn_4j);fgu['warning']('attribute "' + x8br1a + '" missed quot(")!!'), a8b0['add'](gtkf0q, x8br1a, q0akgz);case zutmdei:
            _o34 = zc9_5o;} else switch (_o34) {case zkfgutq:
            {
              a8b0['tagName'];
            }'http://www.w3.org/1999/xhtml' === x8a1rb[''] && gtkf0q['match'](/^(?:disabled|checked|selected)$/i) || fgu['warning']('attribute "' + gtkf0q + '" missed value!! "' + gtkf0q + '" instead2!!'), a8b0['add'](gtkf0q, gtkf0q, q0akgz), q0akgz = q0kfz, _o34 = z$p1v;break;case zutmdei:
            fgu['warning']('attribute space is required"' + gtkf0q + '\x22!!');case zc9_5o:
            _o34 = z$p1v, q0akgz = q0kfz;break;case znhj6e:
            _o34 = zba8x1, q0akgz = q0kfz;break;case zvypw7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}q0kfz++;
  }
}function zkftdui(j_4h6n, $1vrp, xza) {
  for (var fkudi = j_4h6n['tagName'], aqx0b = null, _co953 = j_4h6n['length']; _co953--;) {
    var bxqza0 = j_4h6n[_co953],
        ikfu = bxqza0['qName'],
        g0zqka = bxqza0['value'],
        w1$rv = ikfu['indexOf'](':');if (w1$rv > 0x0) var uetfdi = bxqza0['prefix'] = ikfu['slice'](0x0, w1$rv),
        ied6mu = ikfu['slice'](w1$rv + 0x1),
        co_394 = 'xmlns' === uetfdi && ied6mu;else ied6mu = ikfu, uetfdi = null, co_394 = 'xmlns' === ikfu && '';bxqza0['localName'] = ied6mu, co_394 !== !0x1 && (null == aqx0b && (aqx0b = {}, zp1vr$w(xza, xza = {})), xza[co_394] = aqx0b[co_394] = g0zqka, bxqza0['uri'] = 'http://www.w3.org/2000/xmlns/', $1vrp['startPrefixMapping'](co_394, g0zqka));
  }for (var _co953 = j_4h6n['length']; _co953--;) {
    bxqza0 = j_4h6n[_co953];var uetfdi = bxqza0['prefix'];uetfdi && ('xml' === uetfdi && (bxqza0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uetfdi && (bxqza0['uri'] = xza[uetfdi || '']));
  }var w1$rv = fkudi['indexOf'](':');w1$rv > 0x0 ? (uetfdi = j_4h6n['prefix'] = fkudi['slice'](0x0, w1$rv), ied6mu = j_4h6n['localName'] = fkudi['slice'](w1$rv + 0x1)) : (uetfdi = null, ied6mu = j_4h6n['localName'] = fkudi);var x1z8a = j_4h6n['uri'] = xza[uetfdi || ''];if ($1vrp['startElement'](x1z8a, ied6mu, fkudi, j_4h6n), !j_4h6n['closed']) return j_4h6n['currentNSMap'] = xza, j_4h6n['localNSMap'] = aqx0b, !0x0;if ($1vrp['endElement'](x1z8a, ied6mu, fkudi), aqx0b) {
    for (uetfdi in aqx0b) $1vrp['endPrefixMapping'](uetfdi);
  }
}function zzfgq0(_4n93j, ugtifk, fkuigt, ktfgq0, nh6mej) {
  if (/^(?:script|textarea)$/i['test'](fkuigt)) {
    var x8w1br = _4n93j['indexOf']('</' + fkuigt + '>', ugtifk),
        itudme = _4n93j['substring'](ugtifk + 0x1, x8w1br);if (/[&<]/['test'](itudme)) return (/^script$/i['test'](fkuigt) ? (nh6mej['characters'](itudme, 0x0, itudme['length']), x8w1br) : (itudme = itudme['replace'](/&#?\w+;/g, ktfgq0), nh6mej['characters'](itudme, 0x0, itudme['length']), x8w1br)
    );
  }return ugtifk + 0x1;
}function zp7w$rv(q0bzx, $r81p, j_hn46, pyvw$7) {
  var qgtkuf = pyvw$7[j_hn46];return null == qgtkuf && (qgtkuf = q0bzx['lastIndexOf']('</' + j_hn46 + '>'), $r81p > qgtkuf && (qgtkuf = q0bzx['lastIndexOf']('</' + j_hn46)), pyvw$7[j_hn46] = qgtkuf), $r81p > qgtkuf;
}function zp1vr$w(eium, $pw1) {
  for (var prw8$ in eium) $pw1[prw8$] = eium[prw8$];
}function zvw$pr(jmnh6e, j6mn4h, rwv7$p, $y7l) {
  var yw7v = jmnh6e['charAt'](j6mn4h + 0x2);switch (yw7v) {case '-':
      if ('-' === jmnh6e['charAt'](j6mn4h + 0x3)) {
        var fugkit = jmnh6e['indexOf']('-->', j6mn4h + 0x4);return fugkit > j6mn4h ? (rwv7$p['comment'](jmnh6e, j6mn4h + 0x4, fugkit - j6mn4h - 0x4), fugkit + 0x3) : ($y7l['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jmnh6e['substr'](j6mn4h + 0x3, 0x6)) {
        var fugkit = jmnh6e['indexOf'](']]>', j6mn4h + 0x9);return rwv7$p['startCDATA'](), rwv7$p['characters'](jmnh6e, j6mn4h + 0x9, fugkit - j6mn4h - 0x9), rwv7$p['endCDATA'](), fugkit + 0x3;
      }var zg0qa = zmh64n(jmnh6e, j6mn4h),
          je6mhn = zg0qa['length'];if (je6mhn > 0x1 && /!doctype/i['test'](zg0qa[0x0][0x0])) {
        var qkt0g = zg0qa[0x1][0x0],
            enhj6 = je6mhn > 0x3 && /^public$/i['test'](zg0qa[0x2][0x0]) && zg0qa[0x3][0x0],
            g0kqt = je6mhn > 0x4 && zg0qa[0x4][0x0],
            jhn6m = zg0qa[je6mhn - 0x1];return rwv7$p['startDTD'](qkt0g, enhj6 && enhj6['replace'](/^(['"])(.*?)\1$/, '$2'), g0kqt && g0kqt['replace'](/^(['"])(.*?)\1$/, '$2')), rwv7$p['endDTD'](), jhn6m['index'] + jhn6m[0x0]['length'];
      }}return -0x1;
}function zgkufti(l7$vpy, hn_j94, mu6edi) {
  var kqgtuf = l7$vpy['indexOf']('?>', hn_j94);if (kqgtuf) {
    var z0qfgk = l7$vpy['substring'](hn_j94, kqgtuf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (z0qfgk) {
      {
        z0qfgk[0x0]['length'];
      }return mu6edi['processingInstruction'](z0qfgk[0x1], z0qfgk[0x2]), kqgtuf + 0x2;
    }return -0x1;
  }return -0x1;
}function zbz0g() {}function zj4n(zq0gka, bqxa0z) {
  return zq0gka['__proto__'] = bqxa0z, zq0gka;
}function zmh64n(n4hj_9, ab81r) {
  var _co93,
      xba1z8 = [],
      x1zb8 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (x1zb8['lastIndex'] = ab81r, x1zb8['exec'](n4hj_9); _co93 = x1zb8['exec'](n4hj_9);) if (xba1z8['push'](_co93), _co93[0x1]) return xba1z8;
}var zj3n9_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zg0fkq = new RegExp('[\\-\\.0-9' + zj3n9_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    z_59o3 = new RegExp('^' + zj3n9_['source'] + zg0fkq['source'] + '*(?::' + zj3n9_['source'] + zg0fkq['source'] + '*)?$'),
    zag0bq = 0x0,
    z$p1v = 0x1,
    zkfgutq = 0x2,
    znhj6e = 0x3,
    zba8x1 = 0x4,
    zutmdei = 0x5,
    zc9_5o = 0x6,
    zvypw7 = 0x7;zz80bxa['prototype'] = { 'parse': function (de6hm, c329o, ehjnm6) {
    var c_n394 = this['domBuilder'];c_n394['startDocument'](), zp1vr$w(c329o, c329o = {}), zw18p$r(de6hm, c329o, ehjnm6, c_n394, this['errorHandler']), c_n394['endDocument']();
  } }, zbz0g['prototype'] = { 'setTagName': function ($18rx) {
    if (!z_59o3['test']($18rx)) throw new Error('invalid tagName:' + $18rx);this['tagName'] = $18rx;
  }, 'add': function ($vlyp, tmuei, bx80za) {
    if (!z_59o3['test']($vlyp)) throw new Error('invalid attribute:' + $vlyp);this[this['length']++] = { 'qName': $vlyp, 'value': tmuei, 'offset': bx80za };
  }, 'length': 0x0, 'getLocalName': function (h4j6_n) {
    return this[h4j6_n]['localName'];
  }, 'getLocator': function (abz80) {
    return this[abz80]['locator'];
  }, 'getQName': function (rv1w$) {
    return this[rv1w$]['qName'];
  }, 'getURI': function (tgfkqu) {
    return this[tgfkqu]['uri'];
  }, 'getValue': function (xbza1) {
    return this[xbza1]['value'];
  } }, zj4n({}, zj4n['prototype']) instanceof zj4n || (zj4n = function (gtqfk, dimte) {
  function idfeu() {}idfeu['prototype'] = dimte, idfeu = new idfeu();for (dimte in gtqfk) idfeu[dimte] = gtqfk[dimte];return idfeu;
}), exports['XMLReader'] = zz80bxa;