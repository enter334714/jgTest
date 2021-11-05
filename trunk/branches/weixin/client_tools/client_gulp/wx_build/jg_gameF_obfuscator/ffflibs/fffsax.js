var k = wx.$f;
function fre7z8$() {}function f$3y87(rezx8n, mufivb, kq452, k4_62, _4qk52) {
  function uiv1m($ap3y7) {
    if ($ap3y7 > 0xffff) {
      $ap3y7 -= 0x10000;var $y7r = 0xd800 + ($ap3y7 >> 0xa),
          o_624 = 0xdc00 + (0x3ff & $ap3y7);return String['fromCharCode']($y7r, o_624);
    }return String['fromCharCode']($ap3y7);
  }function k24_o6(bmitv) {
    var sxde = bmitv['slice'](0x1, -0x1);return sxde in kq452 ? kq452[sxde] : '#' === sxde['charAt'](0x0) ? uiv1m(parseInt(sxde['substr'](0x1)['replace']('x', '0x'))) : (_4qk52['error']('entity not found:' + bmitv), bmitv);
  }function cosj(qth50k) {
    if (qth50k > ndsjcw) {
      var g91bu = rezx8n['substring'](ndsjcw, qth50k)['replace'](/&#?\w+;/g, k24_o6);fbtih && oj2c6(ndsjcw), k4_62['characters'](g91bu, 0x0, qth50k - ndsjcw), ndsjcw = qth50k;
    }
  }function oj2c6(mhbf, k_0qh) {
    for (; mhbf >= dcwsjo && (k_0qh = csndwj['exec'](rezx8n));) o264c = k_0qh['index'], dcwsjo = o264c + k_0qh[0x0]['length'], fbtih['lineNumber']++;fbtih['columnNumber'] = mhbf - o264c + 0x1;
  }for (var o264c = 0x0, dcwsjo = 0x0, csndwj = /.*(?:\r\n?|\n)|.*$/g, fbtih = k4_62['locator'], nzr = [{ 'currentNSMap': mufivb }], o42jc = {}, ndsjcw = 0x0;;) {
    try {
      var vu1b9i = rezx8n['indexOf']('<', ndsjcw);if (0x0 > vu1b9i) {
        if (!rezx8n['substr'](ndsjcw)['match'](/^\s*$/)) {
          var ft5q0h = k4_62['doc'],
              ary73 = ft5q0h['createTextNode'](rezx8n['substr'](ndsjcw));ft5q0h['appendChild'](ary73), k4_62['currentElement'] = ary73;
        }return;
      }switch (vu1b9i > ndsjcw && cosj(vu1b9i), rezx8n['charAt'](vu1b9i + 0x1)) {case '/':
          var sednw = rezx8n['indexOf']('>', vu1b9i + 0x3),
              zn8xw = rezx8n['substring'](vu1b9i + 0x2, sednw),
              hk_05 = nzr['pop']();0x0 > sednw ? (zn8xw = rezx8n['substring'](vu1b9i + 0x2)['replace'](/[\s<].*/, ''), _4qk52['error']('end tag name: ' + zn8xw + ' is not complete:' + hk_05['tagName']), sednw = vu1b9i + 0x1 + zn8xw['length']) : zn8xw['match'](/\s</) && (zn8xw = zn8xw['replace'](/[\s<].*/, ''), _4qk52['error']('end tag name: ' + zn8xw + ' maybe not complete'), sednw = vu1b9i + 0x1 + zn8xw['length']);var zsxwne = hk_05['localNSMap'],
              xdnjws = hk_05['tagName'] == zn8xw,
              mf0hi = xdnjws || hk_05['tagName'] && hk_05['tagName']['toLowerCase']() == zn8xw['toLowerCase']();if (mf0hi) {
            if (k4_62['endElement'](hk_05['uri'], hk_05['localName'], zn8xw), zsxwne) {
              for (var py$ in zsxwne) k4_62['endPrefixMapping'](py$);
            }xdnjws || _4qk52['fatalError']('end tag name: ' + zn8xw + ' is not match the current start tagName:' + hk_05['tagName']);
          } else nzr['push'](hk_05);sednw++;break;case '?':
          fbtih && oj2c6(vu1b9i), sednw = fmibuv(rezx8n, vu1b9i, k4_62);break;case '!':
          fbtih && oj2c6(vu1b9i), sednw = fsdjnx(rezx8n, vu1b9i, k4_62, _4qk52);break;default:
          fbtih && oj2c6(vu1b9i);var sncwj = new fxesnwz(),
              snwedx = nzr[nzr['length'] - 0x1]['currentNSMap'],
              sednw = f$78e(rezx8n, vu1b9i, sncwj, snwedx, k24_o6, _4qk52),
              ojc426 = sncwj['length'];if (!sncwj['closed'] && ffvmib(rezx8n, sednw, sncwj['tagName'], o42jc) && (sncwj['closed'] = !0x0, kq452['nbsp'] || _4qk52['warning']('unclosed xml attribute')), fbtih && ojc426) {
            for (var fm0iht = fzre8x(fbtih, {}), fbmvui = 0x0; ojc426 > fbmvui; fbmvui++) {
              var y73$ap = sncwj[fbmvui];oj2c6(y73$ap['offset']), y73$ap['locator'] = fzre8x(fbtih, {});
            }k4_62['locator'] = fm0iht, fh_5(sncwj, k4_62, snwedx) && nzr['push'](sncwj), k4_62['locator'] = fbtih;
          } else fh_5(sncwj, k4_62, snwedx) && nzr['push'](sncwj);'http://www.w3.org/1999/xhtml' !== sncwj['uri'] || sncwj['closed'] ? sednw++ : sednw = f_q4(rezx8n, sednw, sncwj['tagName'], k24_o6, k4_62);}
    } catch (htmfbi) {
      _4qk52['error']('element parse error: ' + htmfbi), sednw = -0x1;
    }sednw > ndsjcw ? ndsjcw = sednw : cosj(Math['max'](vu1b9i, ndsjcw) + 0x1);
  }
}function fzre8x(hqk0_, cjodsw) {
  return cjodsw['lineNumber'] = hqk0_['lineNumber'], cjodsw['columnNumber'] = hqk0_['columnNumber'], cjodsw;
}function f$78e(jscwn, mbvufi, tbvi, k0q, dwso, ndjwcs) {
  for (var dxnsw, j24oc, e8r$7z = ++mbvufi, ft0q5h = fo6scdj;;) {
    var y$a7r = jscwn['charAt'](e8r$7z);switch (y$a7r) {case '=':
        if (ft0q5h === fq0tm) dxnsw = jscwn['slice'](mbvufi, e8r$7z), ft0q5h = fcwsd;else {
          if (ft0q5h !== fdnwjcs) throw new Error('attribute equal must after attrName');ft0q5h = fcwsd;
        }break;case '\x27':case '\x22':
        if (ft0q5h === fcwsd || ft0q5h === fq0tm) {
          if (ft0q5h === fq0tm && (ndjwcs['warning']('attribute value must after "="'), dxnsw = jscwn['slice'](mbvufi, e8r$7z)), mbvufi = e8r$7z + 0x1, e8r$7z = jscwn['indexOf'](y$a7r, mbvufi), !(e8r$7z > 0x0)) throw new Error('attribute value no end \'' + y$a7r + '\' match');j24oc = jscwn['slice'](mbvufi, e8r$7z)['replace'](/&#?\w+;/g, dwso), tbvi['add'](dxnsw, j24oc, mbvufi - 0x1), ft0q5h = fedxsn;
        } else {
          if (ft0q5h != f$rz837) throw new Error('attribute value must after "="');j24oc = jscwn['slice'](mbvufi, e8r$7z)['replace'](/&#?\w+;/g, dwso), tbvi['add'](dxnsw, j24oc, mbvufi), ndjwcs['warning']('attribute "' + dxnsw + '" missed start quot(' + y$a7r + ')!!'), mbvufi = e8r$7z + 0x1, ft0q5h = fedxsn;
        }break;case '/':
        switch (ft0q5h) {case fo6scdj:
            tbvi['setTagName'](jscwn['slice'](mbvufi, e8r$7z));case fedxsn:case fitmvf:case fmq0f:
            ft0q5h = fmq0f, tbvi['closed'] = !0x0;case f$rz837:case fq0tm:case fdnwjcs:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ndjwcs['error']('unexpected end of input'), ft0q5h == fo6scdj && tbvi['setTagName'](jscwn['slice'](mbvufi, e8r$7z)), e8r$7z;case '>':
        switch (ft0q5h) {case fo6scdj:
            tbvi['setTagName'](jscwn['slice'](mbvufi, e8r$7z));case fedxsn:case fitmvf:case fmq0f:
            break;case f$rz837:case fq0tm:
            j24oc = jscwn['slice'](mbvufi, e8r$7z), '/' === j24oc['slice'](-0x1) && (tbvi['closed'] = !0x0, j24oc = j24oc['slice'](0x0, -0x1));case fdnwjcs:
            ft0q5h === fdnwjcs && (j24oc = dxnsw), ft0q5h == f$rz837 ? (ndjwcs['warning']('attribute "' + j24oc + '" missed quot(")!!'), tbvi['add'](dxnsw, j24oc['replace'](/&#?\w+;/g, dwso), mbvufi)) : ('http://www.w3.org/1999/xhtml' === k0q[''] && j24oc['match'](/^(?:disabled|checked|selected)$/i) || ndjwcs['warning']('attribute "' + j24oc + '" missed value!! "' + j24oc + '" instead!!'), tbvi['add'](j24oc, j24oc, mbvufi));break;case fcwsd:
            throw new Error('attribute value missed!!');}return e8r$7z;case '\u0080':
        y$a7r = '\x20';default:
        if ('\x20' >= y$a7r) switch (ft0q5h) {case fo6scdj:
            tbvi['setTagName'](jscwn['slice'](mbvufi, e8r$7z)), ft0q5h = fitmvf;break;case fq0tm:
            dxnsw = jscwn['slice'](mbvufi, e8r$7z), ft0q5h = fdnwjcs;break;case f$rz837:
            var j24oc = jscwn['slice'](mbvufi, e8r$7z)['replace'](/&#?\w+;/g, dwso);ndjwcs['warning']('attribute "' + j24oc + '" missed quot(")!!'), tbvi['add'](dxnsw, j24oc, mbvufi);case fedxsn:
            ft0q5h = fitmvf;} else switch (ft0q5h) {case fdnwjcs:
            {
              tbvi['tagName'];
            }'http://www.w3.org/1999/xhtml' === k0q[''] && dxnsw['match'](/^(?:disabled|checked|selected)$/i) || ndjwcs['warning']('attribute "' + dxnsw + '" missed value!! "' + dxnsw + '" instead2!!'), tbvi['add'](dxnsw, dxnsw, mbvufi), mbvufi = e8r$7z, ft0q5h = fq0tm;break;case fedxsn:
            ndjwcs['warning']('attribute space is required"' + dxnsw + '\x22!!');case fitmvf:
            ft0q5h = fq0tm, mbvufi = e8r$7z;break;case fcwsd:
            ft0q5h = f$rz837, mbvufi = e8r$7z;break;case fmq0f:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}e8r$7z++;
  }
}function fh_5(bvtfi, o246_c, cnwsdj) {
  for (var cosj6 = bvtfi['tagName'], q5k0th = null, exszwn = bvtfi['length']; exszwn--;) {
    var v9u1gb = bvtfi[exszwn],
        r$ay = v9u1gb['qName'],
        dnwsxj = v9u1gb['value'],
        $z83 = r$ay['indexOf'](':');if ($z83 > 0x0) var sxd = v9u1gb['prefix'] = r$ay['slice'](0x0, $z83),
        rz3$78 = r$ay['slice']($z83 + 0x1),
        cwojsd = 'xmlns' === sxd && rz3$78;else rz3$78 = r$ay, sxd = null, cwojsd = 'xmlns' === r$ay && '';v9u1gb['localName'] = rz3$78, cwojsd !== !0x1 && (null == q5k0th && (q5k0th = {}, fodwcs(cnwsdj, cnwsdj = {})), cnwsdj[cwojsd] = q5k0th[cwojsd] = dnwsxj, v9u1gb['uri'] = 'http://www.w3.org/2000/xmlns/', o246_c['startPrefixMapping'](cwojsd, dnwsxj));
  }for (var exszwn = bvtfi['length']; exszwn--;) {
    v9u1gb = bvtfi[exszwn];var sxd = v9u1gb['prefix'];sxd && ('xml' === sxd && (v9u1gb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sxd && (v9u1gb['uri'] = cnwsdj[sxd || '']));
  }var $z83 = cosj6['indexOf'](':');$z83 > 0x0 ? (sxd = bvtfi['prefix'] = cosj6['slice'](0x0, $z83), rz3$78 = bvtfi['localName'] = cosj6['slice']($z83 + 0x1)) : (sxd = null, rz3$78 = bvtfi['localName'] = cosj6);var jc26od = bvtfi['uri'] = cnwsdj[sxd || ''];if (o246_c['startElement'](jc26od, rz3$78, cosj6, bvtfi), !bvtfi['closed']) return bvtfi['currentNSMap'] = cnwsdj, bvtfi['localNSMap'] = q5k0th, !0x0;if (o246_c['endElement'](jc26od, rz3$78, cosj6), q5k0th) {
    for (sxd in q5k0th) o246_c['endPrefixMapping'](sxd);
  }
}function f_q4(dscn, k_5hq0, oj6d2c, ar7y3, odwsjc) {
  if (/^(?:script|textarea)$/i['test'](oj6d2c)) {
    var odjs6 = dscn['indexOf']('</' + oj6d2c + '>', k_5hq0),
        u1vib9 = dscn['substring'](k_5hq0 + 0x1, odjs6);if (/[&<]/['test'](u1vib9)) return (/^script$/i['test'](oj6d2c) ? (odwsjc['characters'](u1vib9, 0x0, u1vib9['length']), odjs6) : (u1vib9 = u1vib9['replace'](/&#?\w+;/g, ar7y3), odwsjc['characters'](u1vib9, 0x0, u1vib9['length']), odjs6)
    );
  }return k_5hq0 + 0x1;
}function ffvmib(ihmf0t, zesxwn, kt0h5q, hitfb) {
  var z3r$8 = hitfb[kt0h5q];return null == z3r$8 && (z3r$8 = ihmf0t['lastIndexOf']('</' + kt0h5q + '>'), zesxwn > z3r$8 && (z3r$8 = ihmf0t['lastIndexOf']('</' + kt0h5q)), hitfb[kt0h5q] = z3r$8), zesxwn > z3r$8;
}function fodwcs(jwsxnd, itfhmb) {
  for (var ftbihm in jwsxnd) itfhmb[ftbihm] = jwsxnd[ftbihm];
}function fsdjnx(w8znxe, nxdesw, h05qt, fvub) {
  var dxns = w8znxe['charAt'](nxdesw + 0x2);switch (dxns) {case '-':
      if ('-' === w8znxe['charAt'](nxdesw + 0x3)) {
        var jdnsc = w8znxe['indexOf']('-->', nxdesw + 0x4);return jdnsc > nxdesw ? (h05qt['comment'](w8znxe, nxdesw + 0x4, jdnsc - nxdesw - 0x4), jdnsc + 0x3) : (fvub['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == w8znxe['substr'](nxdesw + 0x3, 0x6)) {
        var jdnsc = w8znxe['indexOf'](']]>', nxdesw + 0x9);return h05qt['startCDATA'](), h05qt['characters'](w8znxe, nxdesw + 0x9, jdnsc - nxdesw - 0x9), h05qt['endCDATA'](), jdnsc + 0x3;
      }var tfvmib = fub19(w8znxe, nxdesw),
          _64oc2 = tfvmib['length'];if (_64oc2 > 0x1 && /!doctype/i['test'](tfvmib[0x0][0x0])) {
        var swncd = tfvmib[0x1][0x0],
            $3py = _64oc2 > 0x3 && /^public$/i['test'](tfvmib[0x2][0x0]) && tfvmib[0x3][0x0],
            vfiub = _64oc2 > 0x4 && tfvmib[0x4][0x0],
            dncjws = tfvmib[_64oc2 - 0x1];return h05qt['startDTD'](swncd, $3py && $3py['replace'](/^(['"])(.*?)\1$/, '$2'), vfiub && vfiub['replace'](/^(['"])(.*?)\1$/, '$2')), h05qt['endDTD'](), dncjws['index'] + dncjws[0x0]['length'];
      }}return -0x1;
}function fmibuv(osc, xnwse, o_c24) {
  var sxdjnw = osc['indexOf']('?>', xnwse);if (sxdjnw) {
    var nsjwc = osc['substring'](xnwse, sxdjnw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nsjwc) {
      {
        nsjwc[0x0]['length'];
      }return o_c24['processingInstruction'](nsjwc[0x1], nsjwc[0x2]), sxdjnw + 0x2;
    }return -0x1;
  }return -0x1;
}function fxesnwz() {}function fwnxze(_2k4o, _6o4c) {
  return _2k4o['__proto__'] = _6o4c, _2k4o;
}function fub19(ubvfmi, ojc6s) {
  var u1gvb,
      th0fi = [],
      snzxwe = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (snzxwe['lastIndex'] = ojc6s, snzxwe['exec'](ubvfmi); u1gvb = snzxwe['exec'](ubvfmi);) if (th0fi['push'](u1gvb), u1gvb[0x1]) return th0fi;
}var ftmfh0q = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fh5qt0f = new RegExp('[\\-\\.0-9' + ftmfh0q['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fsedxw = new RegExp('^' + ftmfh0q['source'] + fh5qt0f['source'] + '*(?::' + ftmfh0q['source'] + fh5qt0f['source'] + '*)?$'),
    fo6scdj = 0x0,
    fq0tm = 0x1,
    fdnwjcs = 0x2,
    fcwsd = 0x3,
    f$rz837 = 0x4,
    fedxsn = 0x5,
    fitmvf = 0x6,
    fmq0f = 0x7;fre7z8$['prototype'] = { 'parse': function (qhfmt, tfh05, hi0fmt) {
    var t5qh = this['domBuilder'];t5qh['startDocument'](), fodwcs(tfh05, tfh05 = {}), f$3y87(qhfmt, tfh05, hi0fmt, t5qh, this['errorHandler']), t5qh['endDocument']();
  } }, fxesnwz['prototype'] = { 'setTagName': function (qt5fh) {
    if (!fsedxw['test'](qt5fh)) throw new Error('invalid tagName:' + qt5fh);this['tagName'] = qt5fh;
  }, 'add': function (fmvbiu, hmibt, mvibu1) {
    if (!fsedxw['test'](fmvbiu)) throw new Error('invalid attribute:' + fmvbiu);this[this['length']++] = { 'qName': fmvbiu, 'value': hmibt, 'offset': mvibu1 };
  }, 'length': 0x0, 'getLocalName': function (o462_k) {
    return this[o462_k]['localName'];
  }, 'getLocator': function (wscjo) {
    return this[wscjo]['locator'];
  }, 'getQName': function (qk0t5) {
    return this[qk0t5]['qName'];
  }, 'getURI': function (bhmift) {
    return this[bhmift]['uri'];
  }, 'getValue': function (hbtim) {
    return this[hbtim]['value'];
  } }, fwnxze({}, fwnxze['prototype']) instanceof fwnxze || (fwnxze = function (iu9v1b, wendxs) {
  function c4o_6() {}c4o_6['prototype'] = wendxs, c4o_6 = new c4o_6();for (wendxs in iu9v1b) c4o_6[wendxs] = iu9v1b[wendxs];return c4o_6;
}), exports['XMLReader'] = fre7z8$;