var B = wx.$z;
function zbykr_() {}function zf64l(yobdk8, tkodyb, i7vfnl, s9hxp, oybdkt) {
  function eotdaz(v4nfl) {
    if (v4nfl > 0xffff) {
      v4nfl -= 0x10000;var k_8r = 0xd800 + (v4nfl >> 0xa),
          bkyo = 0xdc00 + (0x3ff & v4nfl);return String['fromCharCode'](k_8r, bkyo);
    }return String['fromCharCode'](v4nfl);
  }function lf6n4v(lm3in) {
    var adtezo = lm3in['slice'](0x1, -0x1);return adtezo in i7vfnl ? i7vfnl[adtezo] : '#' === adtezo['charAt'](0x0) ? eotdaz(parseInt(adtezo['substr'](0x1)['replace']('x', '0x'))) : (oybdkt['error']('entity not found:' + lm3in), lm3in);
  }function g6vf4(lvm7in) {
    if (lvm7in > zdoey) {
      var b_kry = yobdk8['substring'](zdoey, lvm7in)['replace'](/&#?\w+;/g, lf6n4v);p1ghx9 && ztodea(zdoey), s9hxp['characters'](b_kry, 0x0, lvm7in - zdoey), zdoey = lvm7in;
    }
  }function ztodea(r58u_, v6pfg) {
    for (; r58u_ >= iq3$jm && (v6pfg = _2rwu['exec'](yobdk8));) nvml7 = v6pfg['index'], iq3$jm = nvml7 + v6pfg[0x0]['length'], p1ghx9['lineNumber']++;p1ghx9['columnNumber'] = r58u_ - nvml7 + 0x1;
  }for (var nvml7 = 0x0, iq3$jm = 0x0, _2rwu = /.*(?:\r\n?|\n)|.*$/g, p1ghx9 = s9hxp['locator'], kr8b_y = [{ 'currentNSMap': tkodyb }], zoyedt = {}, zdoey = 0x0;;) {
    try {
      var rb258 = yobdk8['indexOf']('<', zdoey);if (0x0 > rb258) {
        if (!yobdk8['substr'](zdoey)['match'](/^\s*$/)) {
          var mj3q$i = s9hxp['doc'],
              aztoes = mj3q$i['createTextNode'](yobdk8['substr'](zdoey));mj3q$i['appendChild'](aztoes), s9hxp['currentElement'] = aztoes;
        }return;
      }switch (rb258 > zdoey && g6vf4(rb258), yobdk8['charAt'](rb258 + 0x1)) {case '/':
          var mvni7l = yobdk8['indexOf']('>', rb258 + 0x3),
              otbykd = yobdk8['substring'](rb258 + 0x2, mvni7l),
              _5brk = kr8b_y['pop']();0x0 > mvni7l ? (otbykd = yobdk8['substring'](rb258 + 0x2)['replace'](/[\s<].*/, ''), oybdkt['error']('end tag name: ' + otbykd + ' is not complete:' + _5brk['tagName']), mvni7l = rb258 + 0x1 + otbykd['length']) : otbykd['match'](/\s</) && (otbykd = otbykd['replace'](/[\s<].*/, ''), oybdkt['error']('end tag name: ' + otbykd + ' maybe not complete'), mvni7l = rb258 + 0x1 + otbykd['length']);var azxse = _5brk['localNSMap'],
              ztexs = _5brk['tagName'] == otbykd,
              yeztd = ztexs || _5brk['tagName'] && _5brk['tagName']['toLowerCase']() == otbykd['toLowerCase']();if (yeztd) {
            if (s9hxp['endElement'](_5brk['uri'], _5brk['localName'], otbykd), azxse) {
              for (var eao in azxse) s9hxp['endPrefixMapping'](eao);
            }ztexs || oybdkt['fatalError']('end tag name: ' + otbykd + ' is not match the current start tagName:' + _5brk['tagName']);
          } else kr8b_y['push'](_5brk);mvni7l++;break;case '?':
          p1ghx9 && ztodea(rb258), mvni7l = zdatzoe(yobdk8, rb258, s9hxp);break;case '!':
          p1ghx9 && ztodea(rb258), mvni7l = z_yk8rb(yobdk8, rb258, s9hxp, oybdkt);break;default:
          p1ghx9 && ztodea(rb258);var toydzk = new zilnfv7(),
              vflg64 = kr8b_y[kr8b_y['length'] - 0x1]['currentNSMap'],
              mvni7l = z_258ru(yobdk8, rb258, toydzk, vflg64, lf6n4v, oybdkt),
              u_r528 = toydzk['length'];if (!toydzk['closed'] && ztsaoze(yobdk8, mvni7l, toydzk['tagName'], zoyedt) && (toydzk['closed'] = !0x0, i7vfnl['nbsp'] || oybdkt['warning']('unclosed xml attribute')), p1ghx9 && u_r528) {
            for (var _u205w = zbr8_5k(p1ghx9, {}), n4f = 0x0; u_r528 > n4f; n4f++) {
              var g6f4hp = toydzk[n4f];ztodea(g6f4hp['offset']), g6f4hp['locator'] = zbr8_5k(p1ghx9, {});
            }s9hxp['locator'] = _u205w, zsh9x(toydzk, s9hxp, vflg64) && kr8b_y['push'](toydzk), s9hxp['locator'] = p1ghx9;
          } else zsh9x(toydzk, s9hxp, vflg64) && kr8b_y['push'](toydzk);'http://www.w3.org/1999/xhtml' !== toydzk['uri'] || toydzk['closed'] ? mvni7l++ : mvni7l = zkbtoyd(yobdk8, mvni7l, toydzk['tagName'], lf6n4v, s9hxp);}
    } catch (l46f) {
      oybdkt['error']('element parse error: ' + l46f), mvni7l = -0x1;
    }mvni7l > zdoey ? zdoey = mvni7l : g6vf4(Math['max'](rb258, zdoey) + 0x1);
  }
}function zbr8_5k(kby, tdoykz) {
  return tdoykz['lineNumber'] = kby['lineNumber'], tdoykz['columnNumber'] = kby['columnNumber'], tdoykz;
}function z_258ru(y8br_k, il7nv, hs1a, hs1xp9, okdb, lf67v) {
  for (var bd8kyr, zateos, m3i = ++il7nv, zate = zv64gp;;) {
    var etodz = y8br_k['charAt'](m3i);switch (etodz) {case '=':
        if (zate === zmilv7) bd8kyr = y8br_k['slice'](il7nv, m3i), zate = zr_85kb;else {
          if (zate !== zpsh1x) throw new Error('attribute equal must after attrName');zate = zr_85kb;
        }break;case '\x27':case '\x22':
        if (zate === zr_85kb || zate === zmilv7) {
          if (zate === zmilv7 && (lf67v['warning']('attribute value must after "="'), bd8kyr = y8br_k['slice'](il7nv, m3i)), il7nv = m3i + 0x1, m3i = y8br_k['indexOf'](etodz, il7nv), !(m3i > 0x0)) throw new Error('attribute value no end \'' + etodz + '\' match');zateos = y8br_k['slice'](il7nv, m3i)['replace'](/&#?\w+;/g, okdb), hs1a['add'](bd8kyr, zateos, il7nv - 0x1), zate = zyodtze;
        } else {
          if (zate != zflvni7) throw new Error('attribute value must after "="');zateos = y8br_k['slice'](il7nv, m3i)['replace'](/&#?\w+;/g, okdb), hs1a['add'](bd8kyr, zateos, il7nv), lf67v['warning']('attribute "' + bd8kyr + '" missed start quot(' + etodz + ')!!'), il7nv = m3i + 0x1, zate = zyodtze;
        }break;case '/':
        switch (zate) {case zv64gp:
            hs1a['setTagName'](y8br_k['slice'](il7nv, m3i));case zyodtze:case znv7l6f:case zb_25r:
            zate = zb_25r, hs1a['closed'] = !0x0;case zflvni7:case zmilv7:case zpsh1x:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lf67v['error']('unexpected end of input'), zate == zv64gp && hs1a['setTagName'](y8br_k['slice'](il7nv, m3i)), m3i;case '>':
        switch (zate) {case zv64gp:
            hs1a['setTagName'](y8br_k['slice'](il7nv, m3i));case zyodtze:case znv7l6f:case zb_25r:
            break;case zflvni7:case zmilv7:
            zateos = y8br_k['slice'](il7nv, m3i), '/' === zateos['slice'](-0x1) && (hs1a['closed'] = !0x0, zateos = zateos['slice'](0x0, -0x1));case zpsh1x:
            zate === zpsh1x && (zateos = bd8kyr), zate == zflvni7 ? (lf67v['warning']('attribute "' + zateos + '" missed quot(")!!'), hs1a['add'](bd8kyr, zateos['replace'](/&#?\w+;/g, okdb), il7nv)) : ('http://www.w3.org/1999/xhtml' === hs1xp9[''] && zateos['match'](/^(?:disabled|checked|selected)$/i) || lf67v['warning']('attribute "' + zateos + '" missed value!! "' + zateos + '" instead!!'), hs1a['add'](zateos, zateos, il7nv));break;case zr_85kb:
            throw new Error('attribute value missed!!');}return m3i;case '\u0080':
        etodz = '\x20';default:
        if ('\x20' >= etodz) switch (zate) {case zv64gp:
            hs1a['setTagName'](y8br_k['slice'](il7nv, m3i)), zate = znv7l6f;break;case zmilv7:
            bd8kyr = y8br_k['slice'](il7nv, m3i), zate = zpsh1x;break;case zflvni7:
            var zateos = y8br_k['slice'](il7nv, m3i)['replace'](/&#?\w+;/g, okdb);lf67v['warning']('attribute "' + zateos + '" missed quot(")!!'), hs1a['add'](bd8kyr, zateos, il7nv);case zyodtze:
            zate = znv7l6f;} else switch (zate) {case zpsh1x:
            {
              hs1a['tagName'];
            }'http://www.w3.org/1999/xhtml' === hs1xp9[''] && bd8kyr['match'](/^(?:disabled|checked|selected)$/i) || lf67v['warning']('attribute "' + bd8kyr + '" missed value!! "' + bd8kyr + '" instead2!!'), hs1a['add'](bd8kyr, bd8kyr, il7nv), il7nv = m3i, zate = zmilv7;break;case zyodtze:
            lf67v['warning']('attribute space is required"' + bd8kyr + '\x22!!');case znv7l6f:
            zate = zmilv7, il7nv = m3i;break;case zr_85kb:
            zate = zflvni7, il7nv = m3i;break;case zb_25r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}m3i++;
  }
}function zsh9x(lg64, vnl4f, zxsea) {
  for (var x9ah1s = lg64['tagName'], xtzas = null, y8r_ = lg64['length']; y8r_--;) {
    var n7v = lg64[y8r_],
        iqm$73 = n7v['qName'],
        x9sh1p = n7v['value'],
        edta = iqm$73['indexOf'](':');if (edta > 0x0) var l7v = n7v['prefix'] = iqm$73['slice'](0x0, edta),
        r_5b8 = iqm$73['slice'](edta + 0x1),
        dzoet = 'xmlns' === l7v && r_5b8;else r_5b8 = iqm$73, l7v = null, dzoet = 'xmlns' === iqm$73 && '';n7v['localName'] = r_5b8, dzoet !== !0x1 && (null == xtzas && (xtzas = {}, zm3$(zxsea, zxsea = {})), zxsea[dzoet] = xtzas[dzoet] = x9sh1p, n7v['uri'] = 'http://www.w3.org/2000/xmlns/', vnl4f['startPrefixMapping'](dzoet, x9sh1p));
  }for (var y8r_ = lg64['length']; y8r_--;) {
    n7v = lg64[y8r_];var l7v = n7v['prefix'];l7v && ('xml' === l7v && (n7v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== l7v && (n7v['uri'] = zxsea[l7v || '']));
  }var edta = x9ah1s['indexOf'](':');edta > 0x0 ? (l7v = lg64['prefix'] = x9ah1s['slice'](0x0, edta), r_5b8 = lg64['localName'] = x9ah1s['slice'](edta + 0x1)) : (l7v = null, r_5b8 = lg64['localName'] = x9ah1s);var b_58k = lg64['uri'] = zxsea[l7v || ''];if (vnl4f['startElement'](b_58k, r_5b8, x9ah1s, lg64), !lg64['closed']) return lg64['currentNSMap'] = zxsea, lg64['localNSMap'] = xtzas, !0x0;if (vnl4f['endElement'](b_58k, r_5b8, x9ah1s), xtzas) {
    for (l7v in xtzas) vnl4f['endPrefixMapping'](l7v);
  }
}function zkbtoyd(xstza, ykdotz, bkr58_, kyztod, yktodb) {
  if (/^(?:script|textarea)$/i['test'](bkr58_)) {
    var ybrdk8 = xstza['indexOf']('</' + bkr58_ + '>', ykdotz),
        eozdat = xstza['substring'](ykdotz + 0x1, ybrdk8);if (/[&<]/['test'](eozdat)) return (/^script$/i['test'](bkr58_) ? (yktodb['characters'](eozdat, 0x0, eozdat['length']), ybrdk8) : (eozdat = eozdat['replace'](/&#?\w+;/g, kyztod), yktodb['characters'](eozdat, 0x0, eozdat['length']), ybrdk8)
    );
  }return ykdotz + 0x1;
}function ztsaoze(btkyo, kbyd8o, nvlif7, eodt) {
  var gfpv46 = eodt[nvlif7];return null == gfpv46 && (gfpv46 = btkyo['lastIndexOf']('</' + nvlif7 + '>'), kbyd8o > gfpv46 && (gfpv46 = btkyo['lastIndexOf']('</' + nvlif7)), eodt[nvlif7] = gfpv46), kbyd8o > gfpv46;
}function zm3$(fv4nl6, g6hp4) {
  for (var y_rb in fv4nl6) g6hp4[y_rb] = fv4nl6[y_rb];
}function z_yk8rb(eaxzs, kytod, m$3j, yokzd) {
  var asezto = eaxzs['charAt'](kytod + 0x2);switch (asezto) {case '-':
      if ('-' === eaxzs['charAt'](kytod + 0x3)) {
        var azotde = eaxzs['indexOf']('-->', kytod + 0x4);return azotde > kytod ? (m$3j['comment'](eaxzs, kytod + 0x4, azotde - kytod - 0x4), azotde + 0x3) : (yokzd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == eaxzs['substr'](kytod + 0x3, 0x6)) {
        var azotde = eaxzs['indexOf'](']]>', kytod + 0x9);return m$3j['startCDATA'](), m$3j['characters'](eaxzs, kytod + 0x9, azotde - kytod - 0x9), m$3j['endCDATA'](), azotde + 0x3;
      }var etasxz = zbr58_(eaxzs, kytod),
          ko8b = etasxz['length'];if (ko8b > 0x1 && /!doctype/i['test'](etasxz[0x0][0x0])) {
        var ifl7n = etasxz[0x1][0x0],
            xsta = ko8b > 0x3 && /^public$/i['test'](etasxz[0x2][0x0]) && etasxz[0x3][0x0],
            vf6g4 = ko8b > 0x4 && etasxz[0x4][0x0],
            xzsat = etasxz[ko8b - 0x1];return m$3j['startDTD'](ifl7n, xsta && xsta['replace'](/^(['"])(.*?)\1$/, '$2'), vf6g4 && vf6g4['replace'](/^(['"])(.*?)\1$/, '$2')), m$3j['endDTD'](), xzsat['index'] + xzsat[0x0]['length'];
      }}return -0x1;
}function zdatzoe(d8byko, h419pg, fgl6) {
  var exas1 = d8byko['indexOf']('?>', h419pg);if (exas1) {
    var f6vl4g = d8byko['substring'](h419pg, exas1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f6vl4g) {
      {
        f6vl4g[0x0]['length'];
      }return fgl6['processingInstruction'](f6vl4g[0x1], f6vl4g[0x2]), exas1 + 0x2;
    }return -0x1;
  }return -0x1;
}function zilnfv7() {}function zs9xp(vlf76n, xse) {
  return vlf76n['__proto__'] = xse, vlf76n;
}function zbr58_(hfg64p, gp6v) {
  var nl73i,
      oatdze = [],
      g46lvf = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (g46lvf['lastIndex'] = gp6v, g46lvf['exec'](hfg64p); nl73i = g46lvf['exec'](hfg64p);) if (oatdze['push'](nl73i), nl73i[0x1]) return oatdze;
}var zxes9a1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zn7qim = new RegExp('[\\-\\.0-9' + zxes9a1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zj3mq$ = new RegExp('^' + zxes9a1['source'] + zn7qim['source'] + '*(?::' + zxes9a1['source'] + zn7qim['source'] + '*)?$'),
    zv64gp = 0x0,
    zmilv7 = 0x1,
    zpsh1x = 0x2,
    zr_85kb = 0x3,
    zflvni7 = 0x4,
    zyodtze = 0x5,
    znv7l6f = 0x6,
    zb_25r = 0x7;zbykr_['prototype'] = { 'parse': function (zetod, dtozea, mq$37) {
    var v7fnli = this['domBuilder'];v7fnli['startDocument'](), zm3$(dtozea, dtozea = {}), zf64l(zetod, dtozea, mq$37, v7fnli, this['errorHandler']), v7fnli['endDocument']();
  } }, zilnfv7['prototype'] = { 'setTagName': function (mniv7l) {
    if (!zj3mq$['test'](mniv7l)) throw new Error('invalid tagName:' + mniv7l);this['tagName'] = mniv7l;
  }, 'add': function (adtez, setoaz, _85rbk) {
    if (!zj3mq$['test'](adtez)) throw new Error('invalid attribute:' + adtez);this[this['length']++] = { 'qName': adtez, 'value': setoaz, 'offset': _85rbk };
  }, 'length': 0x0, 'getLocalName': function (ydzot) {
    return this[ydzot]['localName'];
  }, 'getLocator': function (dzetao) {
    return this[dzetao]['locator'];
  }, 'getQName': function (xsh91) {
    return this[xsh91]['qName'];
  }, 'getURI': function (ydrb8) {
    return this[ydrb8]['uri'];
  }, 'getValue': function (u58r_) {
    return this[u58r_]['value'];
  } }, zs9xp({}, zs9xp['prototype']) instanceof zs9xp || (zs9xp = function (h9s1p, u5_w20) {
  function rk8bd() {}rk8bd['prototype'] = u5_w20, rk8bd = new rk8bd();for (u5_w20 in h9s1p) rk8bd[u5_w20] = h9s1p[u5_w20];return rk8bd;
}), exports['XMLReader'] = zbykr_;