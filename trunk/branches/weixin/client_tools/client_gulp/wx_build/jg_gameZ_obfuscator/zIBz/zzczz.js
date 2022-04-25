var B = wx.$z;
function zpxh1() {}function zivn7l(im37nq, $m73qi, tzyoe, ykbr8_, vnf7i) {
  function ax91e(xaest) {
    if (xaest > 0xffff) {
      xaest -= 0x10000;var _r5bk8 = 0xd800 + (xaest >> 0xa),
          _0wu52 = 0xdc00 + (0x3ff & xaest);return String['fromCharCode'](_r5bk8, _0wu52);
    }return String['fromCharCode'](xaest);
  }function l46nvf(nilv) {
    var uw5_r = nilv['slice'](0x1, -0x1);return uw5_r in tzyoe ? tzyoe[uw5_r] : '#' === uw5_r['charAt'](0x0) ? ax91e(parseInt(uw5_r['substr'](0x1)['replace']('x', '0x'))) : (vnf7i['error']('entity not found:' + nilv), nilv);
  }function tzesxa(mq37n) {
    if (mq37n > il3n) {
      var k8y_r = im37nq['substring'](il3n, mq37n)['replace'](/&#?\w+;/g, l46nvf);eoas && rbk_8(il3n), ykbr8_['characters'](k8y_r, 0x0, mq37n - il3n), il3n = mq37n;
    }
  }function rbk_8(atdezo, flg4v) {
    for (; atdezo >= dytob && (flg4v = f4p6vg['exec'](im37nq));) ykrbd8 = flg4v['index'], dytob = ykrbd8 + flg4v[0x0]['length'], eoas['lineNumber']++;eoas['columnNumber'] = atdezo - ykrbd8 + 0x1;
  }for (var ykrbd8 = 0x0, dytob = 0x0, f4p6vg = /.*(?:\r\n?|\n)|.*$/g, eoas = ykbr8_['locator'], dytok = [{ 'currentNSMap': $m73qi }], odtky = {}, il3n = 0x0;;) {
    try {
      var u2wr = im37nq['indexOf']('<', il3n);if (0x0 > u2wr) {
        if (!im37nq['substr'](il3n)['match'](/^\s*$/)) {
          var ydtbo = ykbr8_['doc'],
              q3j = ydtbo['createTextNode'](im37nq['substr'](il3n));ydtbo['appendChild'](q3j), ykbr8_['currentElement'] = q3j;
        }return;
      }switch (u2wr > il3n && tzesxa(u2wr), im37nq['charAt'](u2wr + 0x1)) {case '/':
          var p1xs = im37nq['indexOf']('>', u2wr + 0x3),
              oadezt = im37nq['substring'](u2wr + 0x2, p1xs),
              dzoaet = dytok['pop']();0x0 > p1xs ? (oadezt = im37nq['substring'](u2wr + 0x2)['replace'](/[\s<].*/, ''), vnf7i['error']('end tag name: ' + oadezt + ' is not complete:' + dzoaet['tagName']), p1xs = u2wr + 0x1 + oadezt['length']) : oadezt['match'](/\s</) && (oadezt = oadezt['replace'](/[\s<].*/, ''), vnf7i['error']('end tag name: ' + oadezt + ' maybe not complete'), p1xs = u2wr + 0x1 + oadezt['length']);var _85kb = dzoaet['localNSMap'],
              ybk = dzoaet['tagName'] == oadezt,
              rkb5_ = ybk || dzoaet['tagName'] && dzoaet['tagName']['toLowerCase']() == oadezt['toLowerCase']();if (rkb5_) {
            if (ykbr8_['endElement'](dzoaet['uri'], dzoaet['localName'], oadezt), _85kb) {
              for (var hgp14 in _85kb) ykbr8_['endPrefixMapping'](hgp14);
            }ybk || vnf7i['fatalError']('end tag name: ' + oadezt + ' is not match the current start tagName:' + dzoaet['tagName']);
          } else dytok['push'](dzoaet);p1xs++;break;case '?':
          eoas && rbk_8(u2wr), p1xs = zsx1e(im37nq, u2wr, ykbr8_);break;case '!':
          eoas && rbk_8(u2wr), p1xs = zy8kdbr(im37nq, u2wr, ykbr8_, vnf7i);break;default:
          eoas && rbk_8(u2wr);var p4gh61 = new zsazx(),
              q$i3m7 = dytok[dytok['length'] - 0x1]['currentNSMap'],
              p1xs = zs9e1(im37nq, u2wr, p4gh61, q$i3m7, l46nvf, vnf7i),
              zdyet = p4gh61['length'];if (!p4gh61['closed'] && zdzoety(im37nq, p1xs, p4gh61['tagName'], odtky) && (p4gh61['closed'] = !0x0, tzyoe['nbsp'] || vnf7i['warning']('unclosed xml attribute')), eoas && zdyet) {
            for (var hg41p = zur285_(eoas, {}), fvn67l = 0x0; zdyet > fvn67l; fvn67l++) {
              var dyk8o = p4gh61[fvn67l];rbk_8(dyk8o['offset']), dyk8o['locator'] = zur285_(eoas, {});
            }ykbr8_['locator'] = hg41p, zb28_5r(p4gh61, ykbr8_, q$i3m7) && dytok['push'](p4gh61), ykbr8_['locator'] = eoas;
          } else zb28_5r(p4gh61, ykbr8_, q$i3m7) && dytok['push'](p4gh61);'http://www.w3.org/1999/xhtml' !== p4gh61['uri'] || p4gh61['closed'] ? p1xs++ : p1xs = zb2r_85(im37nq, p1xs, p4gh61['tagName'], l46nvf, ykbr8_);}
    } catch (ezod) {
      vnf7i['error']('element parse error: ' + ezod), p1xs = -0x1;
    }p1xs > il3n ? il3n = p1xs : tzesxa(Math['max'](u2wr, il3n) + 0x1);
  }
}function zur285_(s1xhp9, esatzo) {
  return esatzo['lineNumber'] = s1xhp9['lineNumber'], esatzo['columnNumber'] = s1xhp9['columnNumber'], esatzo;
}function zs9e1(phx1s9, hfp4, aset, p4fvg6, oaet, ru5w2) {
  for (var fnl6v4, k_8b5, yrkd8b = ++hfp4, rd8bk = zsxtz;;) {
    var l7nvim = phx1s9['charAt'](yrkd8b);switch (l7nvim) {case '=':
        if (rd8bk === zfgvl46) fnl6v4 = phx1s9['slice'](hfp4, yrkd8b), rd8bk = zotzsa;else {
          if (rd8bk !== zax9s1e) throw new Error('attribute equal must after attrName');rd8bk = zotzsa;
        }break;case '\x27':case '\x22':
        if (rd8bk === zotzsa || rd8bk === zfgvl46) {
          if (rd8bk === zfgvl46 && (ru5w2['warning']('attribute value must after "="'), fnl6v4 = phx1s9['slice'](hfp4, yrkd8b)), hfp4 = yrkd8b + 0x1, yrkd8b = phx1s9['indexOf'](l7nvim, hfp4), !(yrkd8b > 0x0)) throw new Error('attribute value no end \'' + l7nvim + '\' match');k_8b5 = phx1s9['slice'](hfp4, yrkd8b)['replace'](/&#?\w+;/g, oaet), aset['add'](fnl6v4, k_8b5, hfp4 - 0x1), rd8bk = znflv67;
        } else {
          if (rd8bk != ze9asx) throw new Error('attribute value must after "="');k_8b5 = phx1s9['slice'](hfp4, yrkd8b)['replace'](/&#?\w+;/g, oaet), aset['add'](fnl6v4, k_8b5, hfp4), ru5w2['warning']('attribute "' + fnl6v4 + '" missed start quot(' + l7nvim + ')!!'), hfp4 = yrkd8b + 0x1, rd8bk = znflv67;
        }break;case '/':
        switch (rd8bk) {case zsxtz:
            aset['setTagName'](phx1s9['slice'](hfp4, yrkd8b));case znflv67:case zdzkyot:case zqm3$7:
            rd8bk = zqm3$7, aset['closed'] = !0x0;case ze9asx:case zfgvl46:case zax9s1e:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ru5w2['error']('unexpected end of input'), rd8bk == zsxtz && aset['setTagName'](phx1s9['slice'](hfp4, yrkd8b)), yrkd8b;case '>':
        switch (rd8bk) {case zsxtz:
            aset['setTagName'](phx1s9['slice'](hfp4, yrkd8b));case znflv67:case zdzkyot:case zqm3$7:
            break;case ze9asx:case zfgvl46:
            k_8b5 = phx1s9['slice'](hfp4, yrkd8b), '/' === k_8b5['slice'](-0x1) && (aset['closed'] = !0x0, k_8b5 = k_8b5['slice'](0x0, -0x1));case zax9s1e:
            rd8bk === zax9s1e && (k_8b5 = fnl6v4), rd8bk == ze9asx ? (ru5w2['warning']('attribute "' + k_8b5 + '" missed quot(")!!'), aset['add'](fnl6v4, k_8b5['replace'](/&#?\w+;/g, oaet), hfp4)) : ('http://www.w3.org/1999/xhtml' === p4fvg6[''] && k_8b5['match'](/^(?:disabled|checked|selected)$/i) || ru5w2['warning']('attribute "' + k_8b5 + '" missed value!! "' + k_8b5 + '" instead!!'), aset['add'](k_8b5, k_8b5, hfp4));break;case zotzsa:
            throw new Error('attribute value missed!!');}return yrkd8b;case '\u0080':
        l7nvim = '\x20';default:
        if ('\x20' >= l7nvim) switch (rd8bk) {case zsxtz:
            aset['setTagName'](phx1s9['slice'](hfp4, yrkd8b)), rd8bk = zdzkyot;break;case zfgvl46:
            fnl6v4 = phx1s9['slice'](hfp4, yrkd8b), rd8bk = zax9s1e;break;case ze9asx:
            var k_8b5 = phx1s9['slice'](hfp4, yrkd8b)['replace'](/&#?\w+;/g, oaet);ru5w2['warning']('attribute "' + k_8b5 + '" missed quot(")!!'), aset['add'](fnl6v4, k_8b5, hfp4);case znflv67:
            rd8bk = zdzkyot;} else switch (rd8bk) {case zax9s1e:
            {
              aset['tagName'];
            }'http://www.w3.org/1999/xhtml' === p4fvg6[''] && fnl6v4['match'](/^(?:disabled|checked|selected)$/i) || ru5w2['warning']('attribute "' + fnl6v4 + '" missed value!! "' + fnl6v4 + '" instead2!!'), aset['add'](fnl6v4, fnl6v4, hfp4), hfp4 = yrkd8b, rd8bk = zfgvl46;break;case znflv67:
            ru5w2['warning']('attribute space is required"' + fnl6v4 + '\x22!!');case zdzkyot:
            rd8bk = zfgvl46, hfp4 = yrkd8b;break;case zotzsa:
            rd8bk = ze9asx, hfp4 = yrkd8b;break;case zqm3$7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}yrkd8b++;
  }
}function zb28_5r(e9a1s, m7livn, _r285b) {
  for (var h91ax = e9a1s['tagName'], m7vln = null, w_2r = e9a1s['length']; w_2r--;) {
    var h9g1xp = e9a1s[w_2r],
        ni3 = h9g1xp['qName'],
        _5k8br = h9g1xp['value'],
        stxez = ni3['indexOf'](':');if (stxez > 0x0) var r258b_ = h9g1xp['prefix'] = ni3['slice'](0x0, stxez),
        _ybkr8 = ni3['slice'](stxez + 0x1),
        eozda = 'xmlns' === r258b_ && _ybkr8;else _ybkr8 = ni3, r258b_ = null, eozda = 'xmlns' === ni3 && '';h9g1xp['localName'] = _ybkr8, eozda !== !0x1 && (null == m7vln && (m7vln = {}, zr82b_5(_r285b, _r285b = {})), _r285b[eozda] = m7vln[eozda] = _5k8br, h9g1xp['uri'] = 'http://www.w3.org/2000/xmlns/', m7livn['startPrefixMapping'](eozda, _5k8br));
  }for (var w_2r = e9a1s['length']; w_2r--;) {
    h9g1xp = e9a1s[w_2r];var r258b_ = h9g1xp['prefix'];r258b_ && ('xml' === r258b_ && (h9g1xp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r258b_ && (h9g1xp['uri'] = _r285b[r258b_ || '']));
  }var stxez = h91ax['indexOf'](':');stxez > 0x0 ? (r258b_ = e9a1s['prefix'] = h91ax['slice'](0x0, stxez), _ybkr8 = e9a1s['localName'] = h91ax['slice'](stxez + 0x1)) : (r258b_ = null, _ybkr8 = e9a1s['localName'] = h91ax);var odatez = e9a1s['uri'] = _r285b[r258b_ || ''];if (m7livn['startElement'](odatez, _ybkr8, h91ax, e9a1s), !e9a1s['closed']) return e9a1s['currentNSMap'] = _r285b, e9a1s['localNSMap'] = m7vln, !0x0;if (m7livn['endElement'](odatez, _ybkr8, h91ax), m7vln) {
    for (r258b_ in m7vln) m7livn['endPrefixMapping'](r258b_);
  }
}function zb2r_85(mvn7i, bkdo, shx9a, fgv4p, $mijq3) {
  if (/^(?:script|textarea)$/i['test'](shx9a)) {
    var w02u_5 = mvn7i['indexOf']('</' + shx9a + '>', bkdo),
        pgxh19 = mvn7i['substring'](bkdo + 0x1, w02u_5);if (/[&<]/['test'](pgxh19)) return (/^script$/i['test'](shx9a) ? ($mijq3['characters'](pgxh19, 0x0, pgxh19['length']), w02u_5) : (pgxh19 = pgxh19['replace'](/&#?\w+;/g, fgv4p), $mijq3['characters'](pgxh19, 0x0, pgxh19['length']), w02u_5)
    );
  }return bkdo + 0x1;
}function zdzoety(gfp4, m3inl7, nmil7, ybk_r8) {
  var doybtk = ybk_r8[nmil7];return null == doybtk && (doybtk = gfp4['lastIndexOf']('</' + nmil7 + '>'), m3inl7 > doybtk && (doybtk = gfp4['lastIndexOf']('</' + nmil7)), ybk_r8[nmil7] = doybtk), m3inl7 > doybtk;
}function zr82b_5(wu25, btyko) {
  for (var p64vf in wu25) btyko[p64vf] = wu25[p64vf];
}function zy8kdbr(_uw, xzsaet, r82_b, satoze) {
  var vl7fn6 = _uw['charAt'](xzsaet + 0x2);switch (vl7fn6) {case '-':
      if ('-' === _uw['charAt'](xzsaet + 0x3)) {
        var lnvfi7 = _uw['indexOf']('-->', xzsaet + 0x4);return lnvfi7 > xzsaet ? (r82_b['comment'](_uw, xzsaet + 0x4, lnvfi7 - xzsaet - 0x4), lnvfi7 + 0x3) : (satoze['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _uw['substr'](xzsaet + 0x3, 0x6)) {
        var lnvfi7 = _uw['indexOf'](']]>', xzsaet + 0x9);return r82_b['startCDATA'](), r82_b['characters'](_uw, xzsaet + 0x9, lnvfi7 - xzsaet - 0x9), r82_b['endCDATA'](), lnvfi7 + 0x3;
      }var edztoa = zghpf4(_uw, xzsaet),
          lvi7nf = edztoa['length'];if (lvi7nf > 0x1 && /!doctype/i['test'](edztoa[0x0][0x0])) {
        var p491 = edztoa[0x1][0x0],
            tazsoe = lvi7nf > 0x3 && /^public$/i['test'](edztoa[0x2][0x0]) && edztoa[0x3][0x0],
            yoe = lvi7nf > 0x4 && edztoa[0x4][0x0],
            ilf = edztoa[lvi7nf - 0x1];return r82_b['startDTD'](p491, tazsoe && tazsoe['replace'](/^(['"])(.*?)\1$/, '$2'), yoe && yoe['replace'](/^(['"])(.*?)\1$/, '$2')), r82_b['endDTD'](), ilf['index'] + ilf[0x0]['length'];
      }}return -0x1;
}function zsx1e(bytd, fvg6, ykodzt) {
  var r8_b2 = bytd['indexOf']('?>', fvg6);if (r8_b2) {
    var rbdyk = bytd['substring'](fvg6, r8_b2)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (rbdyk) {
      {
        rbdyk[0x0]['length'];
      }return ykodzt['processingInstruction'](rbdyk[0x1], rbdyk[0x2]), r8_b2 + 0x2;
    }return -0x1;
  }return -0x1;
}function zsazx() {}function zrbk_5(x19ea, l76fnv) {
  return x19ea['__proto__'] = l76fnv, x19ea;
}function zghpf4(doky8b, edto) {
  var u_8,
      m$qij = [],
      hp64fg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hp64fg['lastIndex'] = edto, hp64fg['exec'](doky8b); u_8 = hp64fg['exec'](doky8b);) if (m$qij['push'](u_8), u_8[0x1]) return m$qij;
}var zadtoze = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zbdr8 = new RegExp('[\\-\\.0-9' + zadtoze['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zr8dk = new RegExp('^' + zadtoze['source'] + zbdr8['source'] + '*(?::' + zadtoze['source'] + zbdr8['source'] + '*)?$'),
    zsxtz = 0x0,
    zfgvl46 = 0x1,
    zax9s1e = 0x2,
    zotzsa = 0x3,
    ze9asx = 0x4,
    znflv67 = 0x5,
    zdzkyot = 0x6,
    zqm3$7 = 0x7;zpxh1['prototype'] = { 'parse': function (fglv46, m$q37i, okdyb8) {
    var x1gh9 = this['domBuilder'];x1gh9['startDocument'](), zr82b_5(m$q37i, m$q37i = {}), zivn7l(fglv46, m$q37i, okdyb8, x1gh9, this['errorHandler']), x1gh9['endDocument']();
  } }, zsazx['prototype'] = { 'setTagName': function (zoeytd) {
    if (!zr8dk['test'](zoeytd)) throw new Error('invalid tagName:' + zoeytd);this['tagName'] = zoeytd;
  }, 'add': function (f6nv, tzyeod, gfv6l) {
    if (!zr8dk['test'](f6nv)) throw new Error('invalid attribute:' + f6nv);this[this['length']++] = { 'qName': f6nv, 'value': tzyeod, 'offset': gfv6l };
  }, 'length': 0x0, 'getLocalName': function (zoety) {
    return this[zoety]['localName'];
  }, 'getLocator': function (tzsa) {
    return this[tzsa]['locator'];
  }, 'getQName': function (es1a9) {
    return this[es1a9]['qName'];
  }, 'getURI': function (okztyd) {
    return this[okztyd]['uri'];
  }, 'getValue': function (zoyd) {
    return this[zoyd]['value'];
  } }, zrbk_5({}, zrbk_5['prototype']) instanceof zrbk_5 || (zrbk_5 = function (kbdt, $mq3ji) {
  function tkodb() {}tkodb['prototype'] = $mq3ji, tkodb = new tkodb();for ($mq3ji in kbdt) tkodb[$mq3ji] = kbdt[$mq3ji];return tkodb;
}), exports['XMLReader'] = zpxh1;