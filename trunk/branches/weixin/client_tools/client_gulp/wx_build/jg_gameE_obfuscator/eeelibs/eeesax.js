var b = wx.$e;
function ehxrgl() {}function e$qijx3(opcme, $xhlgt, rlthzg, f_v47a, aompce) {
  function d25w80(uqijn3) {
    if (uqijn3 > 0xffff) {
      uqijn3 -= 0x10000;var lzg = 0xd800 + (uqijn3 >> 0xa),
          $tixjg = 0xdc00 + (0x3ff & uqijn3);return String['fromCharCode'](lzg, $tixjg);
    }return String['fromCharCode'](uqijn3);
  }function snu93(zrfyh) {
    var tjx$i = zrfyh['slice'](0x1, -0x1);return tjx$i in rlthzg ? rlthzg[tjx$i] : '#' === tjx$i['charAt'](0x0) ? d25w80(parseInt(tjx$i['substr'](0x1)['replace']('x', '0x'))) : (aompce['error']('entity not found:' + zrfyh), zrfyh);
  }function ampco7(d05w82) {
    if (d05w82 > camep) {
      var txhgrl = opcme['substring'](camep, d05w82)['replace'](/&#?\w+;/g, snu93);quksn && gl$x(camep), f_v47a['characters'](txhgrl, 0x0, d05w82 - camep), camep = d05w82;
    }
  }function gl$x($htl, zvfyrh) {
    for (; $htl >= $txghl && (zvfyrh = xg$i['exec'](opcme));) xhtl$g = zvfyrh['index'], $txghl = xhtl$g + zvfyrh[0x0]['length'], quksn['lineNumber']++;quksn['columnNumber'] = $htl - xhtl$g + 0x1;
  }for (var xhtl$g = 0x0, $txghl = 0x0, xg$i = /.*(?:\r\n?|\n)|.*$/g, quksn = f_v47a['locator'], suk6n9 = [{ 'currentNSMap': $xhlgt }], uskqn = {}, camep = 0x0;;) {
    try {
      var aopme = opcme['indexOf']('<', camep);if (0x0 > aopme) {
        if (!opcme['substr'](camep)['match'](/^\s*$/)) {
          var w5d8b0 = f_v47a['doc'],
              ukq9n = w5d8b0['createTextNode'](opcme['substr'](camep));w5d8b0['appendChild'](ukq9n), f_v47a['currentElement'] = ukq9n;
        }return;
      }switch (aopme > camep && ampco7(aopme), opcme['charAt'](aopme + 0x1)) {case '/':
          var vfz4 = opcme['indexOf']('>', aopme + 0x3),
              ig3x$j = opcme['substring'](aopme + 0x2, vfz4),
              glhtzr = suk6n9['pop']();0x0 > vfz4 ? (ig3x$j = opcme['substring'](aopme + 0x2)['replace'](/[\s<].*/, ''), aompce['error']('end tag name: ' + ig3x$j + ' is not complete:' + glhtzr['tagName']), vfz4 = aopme + 0x1 + ig3x$j['length']) : ig3x$j['match'](/\s</) && (ig3x$j = ig3x$j['replace'](/[\s<].*/, ''), aompce['error']('end tag name: ' + ig3x$j + ' maybe not complete'), vfz4 = aopme + 0x1 + ig3x$j['length']);var _vy7f = glhtzr['localNSMap'],
              pa7m = glhtzr['tagName'] == ig3x$j,
              xitgl$ = pa7m || glhtzr['tagName'] && glhtzr['tagName']['toLowerCase']() == ig3x$j['toLowerCase']();if (xitgl$) {
            if (f_v47a['endElement'](glhtzr['uri'], glhtzr['localName'], ig3x$j), _vy7f) {
              for (var zryht in _vy7f) f_v47a['endPrefixMapping'](zryht);
            }pa7m || aompce['fatalError']('end tag name: ' + ig3x$j + ' is not match the current start tagName:' + glhtzr['tagName']);
          } else suk6n9['push'](glhtzr);vfz4++;break;case '?':
          quksn && gl$x(aopme), vfz4 = egx$it(opcme, aopme, f_v47a);break;case '!':
          quksn && gl$x(aopme), vfz4 = eq9sukn(opcme, aopme, f_v47a, aompce);break;default:
          quksn && gl$x(aopme);var ui3qnj = new elhg$xt(),
              _y7v = suk6n9[suk6n9['length'] - 0x1]['currentNSMap'],
              vfz4 = eb5d0w8(opcme, aopme, ui3qnj, _y7v, snu93, aompce),
              b0d5k = ui3qnj['length'];if (!ui3qnj['closed'] && epoacm7(opcme, vfz4, ui3qnj['tagName'], uskqn) && (ui3qnj['closed'] = !0x0, rlthzg['nbsp'] || aompce['warning']('unclosed xml attribute')), quksn && b0d5k) {
            for (var b9s6 = enj3$(quksn, {}), j3$ni = 0x0; b0d5k > j3$ni; j3$ni++) {
              var yrvz4 = ui3qnj[j3$ni];gl$x(yrvz4['offset']), yrvz4['locator'] = enj3$(quksn, {});
            }f_v47a['locator'] = b9s6, ez4_(ui3qnj, f_v47a, _y7v) && suk6n9['push'](ui3qnj), f_v47a['locator'] = quksn;
          } else ez4_(ui3qnj, f_v47a, _y7v) && suk6n9['push'](ui3qnj);'http://www.w3.org/1999/xhtml' !== ui3qnj['uri'] || ui3qnj['closed'] ? vfz4++ : vfz4 = eku6sb(opcme, vfz4, ui3qnj['tagName'], snu93, f_v47a);}
    } catch (tl$hxg) {
      aompce['error']('element parse error: ' + tl$hxg), vfz4 = -0x1;
    }vfz4 > camep ? camep = vfz4 : ampco7(Math['max'](aopme, camep) + 0x1);
  }
}function enj3$(vrzyh, qu9kns) {
  return qu9kns['lineNumber'] = vrzyh['lineNumber'], qu9kns['columnNumber'] = vrzyh['columnNumber'], qu9kns;
}function eb5d0w8(zthlgr, fy_4vz, igx3, ca7pmo, fa7v4_, tgrhzl) {
  for (var tigl, rzlhtg, hfrv = ++fy_4vz, tgxl$ = enquk9;;) {
    var b096s = zthlgr['charAt'](hfrv);switch (b096s) {case '=':
        if (tgxl$ === exq$3) tigl = zthlgr['slice'](fy_4vz, hfrv), tgxl$ = etgrh;else {
          if (tgxl$ !== eb8wd5) throw new Error('attribute equal must after attrName');tgxl$ = etgrh;
        }break;case '\x27':case '\x22':
        if (tgxl$ === etgrh || tgxl$ === exq$3) {
          if (tgxl$ === exq$3 && (tgrhzl['warning']('attribute value must after "="'), tigl = zthlgr['slice'](fy_4vz, hfrv)), fy_4vz = hfrv + 0x1, hfrv = zthlgr['indexOf'](b096s, fy_4vz), !(hfrv > 0x0)) throw new Error('attribute value no end \'' + b096s + '\' match');rzlhtg = zthlgr['slice'](fy_4vz, hfrv)['replace'](/&#?\w+;/g, fa7v4_), igx3['add'](tigl, rzlhtg, fy_4vz - 0x1), tgxl$ = ejx$qi;
        } else {
          if (tgxl$ != ed806) throw new Error('attribute value must after "="');rzlhtg = zthlgr['slice'](fy_4vz, hfrv)['replace'](/&#?\w+;/g, fa7v4_), igx3['add'](tigl, rzlhtg, fy_4vz), tgrhzl['warning']('attribute "' + tigl + '" missed start quot(' + b096s + ')!!'), fy_4vz = hfrv + 0x1, tgxl$ = ejx$qi;
        }break;case '/':
        switch (tgxl$) {case enquk9:
            igx3['setTagName'](zthlgr['slice'](fy_4vz, hfrv));case ejx$qi:case ev7am_4:case eyf47v_:
            tgxl$ = eyf47v_, igx3['closed'] = !0x0;case ed806:case exq$3:case eb8wd5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return tgrhzl['error']('unexpected end of input'), tgxl$ == enquk9 && igx3['setTagName'](zthlgr['slice'](fy_4vz, hfrv)), hfrv;case '>':
        switch (tgxl$) {case enquk9:
            igx3['setTagName'](zthlgr['slice'](fy_4vz, hfrv));case ejx$qi:case ev7am_4:case eyf47v_:
            break;case ed806:case exq$3:
            rzlhtg = zthlgr['slice'](fy_4vz, hfrv), '/' === rzlhtg['slice'](-0x1) && (igx3['closed'] = !0x0, rzlhtg = rzlhtg['slice'](0x0, -0x1));case eb8wd5:
            tgxl$ === eb8wd5 && (rzlhtg = tigl), tgxl$ == ed806 ? (tgrhzl['warning']('attribute "' + rzlhtg + '" missed quot(")!!'), igx3['add'](tigl, rzlhtg['replace'](/&#?\w+;/g, fa7v4_), fy_4vz)) : ('http://www.w3.org/1999/xhtml' === ca7pmo[''] && rzlhtg['match'](/^(?:disabled|checked|selected)$/i) || tgrhzl['warning']('attribute "' + rzlhtg + '" missed value!! "' + rzlhtg + '" instead!!'), igx3['add'](rzlhtg, rzlhtg, fy_4vz));break;case etgrh:
            throw new Error('attribute value missed!!');}return hfrv;case '\u0080':
        b096s = '\x20';default:
        if ('\x20' >= b096s) switch (tgxl$) {case enquk9:
            igx3['setTagName'](zthlgr['slice'](fy_4vz, hfrv)), tgxl$ = ev7am_4;break;case exq$3:
            tigl = zthlgr['slice'](fy_4vz, hfrv), tgxl$ = eb8wd5;break;case ed806:
            var rzlhtg = zthlgr['slice'](fy_4vz, hfrv)['replace'](/&#?\w+;/g, fa7v4_);tgrhzl['warning']('attribute "' + rzlhtg + '" missed quot(")!!'), igx3['add'](tigl, rzlhtg, fy_4vz);case ejx$qi:
            tgxl$ = ev7am_4;} else switch (tgxl$) {case eb8wd5:
            {
              igx3['tagName'];
            }'http://www.w3.org/1999/xhtml' === ca7pmo[''] && tigl['match'](/^(?:disabled|checked|selected)$/i) || tgrhzl['warning']('attribute "' + tigl + '" missed value!! "' + tigl + '" instead2!!'), igx3['add'](tigl, tigl, fy_4vz), fy_4vz = hfrv, tgxl$ = exq$3;break;case ejx$qi:
            tgrhzl['warning']('attribute space is required"' + tigl + '\x22!!');case ev7am_4:
            tgxl$ = exq$3, fy_4vz = hfrv;break;case etgrh:
            tgxl$ = ed806, fy_4vz = hfrv;break;case eyf47v_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hfrv++;
  }
}function ez4_(gixtl, vf_zy4, jgt$) {
  for (var gjxt$ = gixtl['tagName'], d8w05b = null, m7c4 = gixtl['length']; m7c4--;) {
    var cpmaoe = gixtl[m7c4],
        _4vz = cpmaoe['qName'],
        sk96b0 = cpmaoe['value'],
        uqsjn3 = _4vz['indexOf'](':');if (uqsjn3 > 0x0) var pacoem = cpmaoe['prefix'] = _4vz['slice'](0x0, uqsjn3),
        vzh = _4vz['slice'](uqsjn3 + 0x1),
        htrglx = 'xmlns' === pacoem && vzh;else vzh = _4vz, pacoem = null, htrglx = 'xmlns' === _4vz && '';cpmaoe['localName'] = vzh, htrglx !== !0x1 && (null == d8w05b && (d8w05b = {}, eukb69(jgt$, jgt$ = {})), jgt$[htrglx] = d8w05b[htrglx] = sk96b0, cpmaoe['uri'] = 'http://www.w3.org/2000/xmlns/', vf_zy4['startPrefixMapping'](htrglx, sk96b0));
  }for (var m7c4 = gixtl['length']; m7c4--;) {
    cpmaoe = gixtl[m7c4];var pacoem = cpmaoe['prefix'];pacoem && ('xml' === pacoem && (cpmaoe['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pacoem && (cpmaoe['uri'] = jgt$[pacoem || '']));
  }var uqsjn3 = gjxt$['indexOf'](':');uqsjn3 > 0x0 ? (pacoem = gixtl['prefix'] = gjxt$['slice'](0x0, uqsjn3), vzh = gixtl['localName'] = gjxt$['slice'](uqsjn3 + 0x1)) : (pacoem = null, vzh = gixtl['localName'] = gjxt$);var vr4zy = gixtl['uri'] = jgt$[pacoem || ''];if (vf_zy4['startElement'](vr4zy, vzh, gjxt$, gixtl), !gixtl['closed']) return gixtl['currentNSMap'] = jgt$, gixtl['localNSMap'] = d8w05b, !0x0;if (vf_zy4['endElement'](vr4zy, vzh, gjxt$), d8w05b) {
    for (pacoem in d8w05b) vf_zy4['endPrefixMapping'](pacoem);
  }
}function eku6sb(htxg$l, dk06b9, po7m, thlxr, yrltz) {
  if (/^(?:script|textarea)$/i['test'](po7m)) {
    var bdk069 = htxg$l['indexOf']('</' + po7m + '>', dk06b9),
        wd28 = htxg$l['substring'](dk06b9 + 0x1, bdk069);if (/[&<]/['test'](wd28)) return (/^script$/i['test'](po7m) ? (yrltz['characters'](wd28, 0x0, wd28['length']), bdk069) : (wd28 = wd28['replace'](/&#?\w+;/g, thlxr), yrltz['characters'](wd28, 0x0, wd28['length']), bdk069)
    );
  }return dk06b9 + 0x1;
}function epoacm7(tlxrh, w02d5, qn3jus, sb09k) {
  var _7ocm = sb09k[qn3jus];return null == _7ocm && (_7ocm = tlxrh['lastIndexOf']('</' + qn3jus + '>'), w02d5 > _7ocm && (_7ocm = tlxrh['lastIndexOf']('</' + qn3jus)), sb09k[qn3jus] = _7ocm), w02d5 > _7ocm;
}function eukb69(ksqnu, _47avf) {
  for (var $jqni3 in ksqnu) _47avf[$jqni3] = ksqnu[$jqni3];
}function eq9sukn(b5wd, db609k, quij3n, qx3j$i) {
  var a4c_7m = b5wd['charAt'](db609k + 0x2);switch (a4c_7m) {case '-':
      if ('-' === b5wd['charAt'](db609k + 0x3)) {
        var gjx$3 = b5wd['indexOf']('-->', db609k + 0x4);return gjx$3 > db609k ? (quij3n['comment'](b5wd, db609k + 0x4, gjx$3 - db609k - 0x4), gjx$3 + 0x3) : (qx3j$i['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == b5wd['substr'](db609k + 0x3, 0x6)) {
        var gjx$3 = b5wd['indexOf'](']]>', db609k + 0x9);return quij3n['startCDATA'](), quij3n['characters'](b5wd, db609k + 0x9, gjx$3 - db609k - 0x9), quij3n['endCDATA'](), gjx$3 + 0x3;
      }var b8065d = ea4mv7_(b5wd, db609k),
          uqinj3 = b8065d['length'];if (uqinj3 > 0x1 && /!doctype/i['test'](b8065d[0x0][0x0])) {
        var hrflz = b8065d[0x1][0x0],
            rvz4f = uqinj3 > 0x3 && /^public$/i['test'](b8065d[0x2][0x0]) && b8065d[0x3][0x0],
            qujn3i = uqinj3 > 0x4 && b8065d[0x4][0x0],
            ma74_c = b8065d[uqinj3 - 0x1];return quij3n['startDTD'](hrflz, rvz4f && rvz4f['replace'](/^(['"])(.*?)\1$/, '$2'), qujn3i && qujn3i['replace'](/^(['"])(.*?)\1$/, '$2')), quij3n['endDTD'](), ma74_c['index'] + ma74_c[0x0]['length'];
      }}return -0x1;
}function egx$it(ixgl, a_4cm7, tzrg) {
  var xtj$g = ixgl['indexOf']('?>', a_4cm7);if (xtj$g) {
    var dw02 = ixgl['substring'](a_4cm7, xtj$g)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (dw02) {
      {
        dw02[0x0]['length'];
      }return tzrg['processingInstruction'](dw02[0x1], dw02[0x2]), xtj$g + 0x2;
    }return -0x1;
  }return -0x1;
}function elhg$xt() {}function erhtly(ceoam, ub69s) {
  return ceoam['__proto__'] = ub69s, ceoam;
}function ea4mv7_(_mc7a4, nk6us) {
  var a7pmoc,
      jg$itx = [],
      rhx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rhx['lastIndex'] = nk6us, rhx['exec'](_mc7a4); a7pmoc = rhx['exec'](_mc7a4);) if (jg$itx['push'](a7pmoc), a7pmoc[0x1]) return jg$itx;
}var e_vm74 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ex$tglh = new RegExp('[\\-\\.0-9' + e_vm74['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eb560k = new RegExp('^' + e_vm74['source'] + ex$tglh['source'] + '*(?::' + e_vm74['source'] + ex$tglh['source'] + '*)?$'),
    enquk9 = 0x0,
    exq$3 = 0x1,
    eb8wd5 = 0x2,
    etgrh = 0x3,
    ed806 = 0x4,
    ejx$qi = 0x5,
    ev7am_4 = 0x6,
    eyf47v_ = 0x7;ehxrgl['prototype'] = { 'parse': function (_av7m, h$txlg, tzrlhy) {
    var trzyh = this['domBuilder'];trzyh['startDocument'](), eukb69(h$txlg, h$txlg = {}), e$qijx3(_av7m, h$txlg, tzrlhy, trzyh, this['errorHandler']), trzyh['endDocument']();
  } }, elhg$xt['prototype'] = { 'setTagName': function (gj$x3) {
    if (!eb560k['test'](gj$x3)) throw new Error('invalid tagName:' + gj$x3);this['tagName'] = gj$x3;
  }, 'add': function (zrvhfy, ijqu3, cpma7o) {
    if (!eb560k['test'](zrvhfy)) throw new Error('invalid attribute:' + zrvhfy);this[this['length']++] = { 'qName': zrvhfy, 'value': ijqu3, 'offset': cpma7o };
  }, 'length': 0x0, 'getLocalName': function (k0b) {
    return this[k0b]['localName'];
  }, 'getLocator': function (ghtlz) {
    return this[ghtlz]['locator'];
  }, 'getQName': function (unkqs) {
    return this[unkqs]['qName'];
  }, 'getURI': function (amv4) {
    return this[amv4]['uri'];
  }, 'getValue': function (yfvz_) {
    return this[yfvz_]['value'];
  } }, erhtly({}, erhtly['prototype']) instanceof erhtly || (erhtly = function (cop7m, n9uk6s) {
  function hfvzr() {}hfvzr['prototype'] = n9uk6s, hfvzr = new hfvzr();for (n9uk6s in cop7m) hfvzr[n9uk6s] = cop7m[n9uk6s];return hfvzr;
}), exports['XMLReader'] = ehxrgl;