var M = wx.$T;
function tbkuasj() {}function tfd7z$p(fpze, it9c$v, qye, vic$t9, askjbu) {
  function jkbsau(jbakgr) {
    if (jbakgr > 0xffff) {
      jbakgr -= 0x10000;var zoe = 0xd800 + (jbakgr >> 0xa),
          rg18n = 0xdc00 + (0x3ff & jbakgr);return String['fromCharCode'](zoe, rg18n);
    }return String['fromCharCode'](jbakgr);
  }function hy0mx_(iv2tc) {
    var eyqo0 = iv2tc['slice'](0x1, -0x1);return eyqo0 in qye ? qye[eyqo0] : '#' === eyqo0['charAt'](0x0) ? jkbsau(parseInt(eyqo0['substr'](0x1)['replace']('x', '0x'))) : (askjbu['error']('entity not found:' + iv2tc), iv2tc);
  }function mqy0x($d9fpv) {
    if ($d9fpv > y_mhx) {
      var dfzp7$ = fpze['substring'](y_mhx, $d9fpv)['replace'](/&#?\w+;/g, hy0mx_);abkrsj && dip$v(y_mhx), vic$t9['characters'](dfzp7$, 0x0, $d9fpv - y_mhx), y_mhx = $d9fpv;
    }
  }function dip$v(x0ye_, njbra) {
    for (; x0ye_ >= gr3bn && (njbra = dz7pof['exec'](fpze));) zdf$p = njbra['index'], gr3bn = zdf$p + njbra[0x0]['length'], abkrsj['lineNumber']++;abkrsj['columnNumber'] = x0ye_ - zdf$p + 0x1;
  }for (var zdf$p = 0x0, gr3bn = 0x0, dz7pof = /.*(?:\r\n?|\n)|.*$/g, abkrsj = vic$t9['locator'], d$pfz7 = [{ 'currentNSMap': it9c$v }], rabjkg = {}, y_mhx = 0x0;;) {
    try {
      var jnabgr = fpze['indexOf']('<', y_mhx);if (0x0 > jnabgr) {
        if (!fpze['substr'](y_mhx)['match'](/^\s*$/)) {
          var ex70qo = vic$t9['doc'],
              mxq_0y = ex70qo['createTextNode'](fpze['substr'](y_mhx));ex70qo['appendChild'](mxq_0y), vic$t9['currentElement'] = mxq_0y;
        }return;
      }switch (jnabgr > y_mhx && mqy0x(jnabgr), fpze['charAt'](jnabgr + 0x1)) {case '/':
          var rkgjab = fpze['indexOf']('>', jnabgr + 0x3),
              jksabu = fpze['substring'](jnabgr + 0x2, rkgjab),
              y0oqex = d$pfz7['pop']();0x0 > rkgjab ? (jksabu = fpze['substring'](jnabgr + 0x2)['replace'](/[\s<].*/, ''), askjbu['error']('end tag name: ' + jksabu + ' is not complete:' + y0oqex['tagName']), rkgjab = jnabgr + 0x1 + jksabu['length']) : jksabu['match'](/\s</) && (jksabu = jksabu['replace'](/[\s<].*/, ''), askjbu['error']('end tag name: ' + jksabu + ' maybe not complete'), rkgjab = jnabgr + 0x1 + jksabu['length']);var x_my0h = y0oqex['localNSMap'],
              nbrag = y0oqex['tagName'] == jksabu,
              hm0_ = nbrag || y0oqex['tagName'] && y0oqex['tagName']['toLowerCase']() == jksabu['toLowerCase']();if (hm0_) {
            if (vic$t9['endElement'](y0oqex['uri'], y0oqex['localName'], jksabu), x_my0h) {
              for (var n3816 in x_my0h) vic$t9['endPrefixMapping'](n3816);
            }nbrag || askjbu['fatalError']('end tag name: ' + jksabu + ' is not match the current start tagName:' + y0oqex['tagName']);
          } else d$pfz7['push'](y0oqex);rkgjab++;break;case '?':
          abkrsj && dip$v(jnabgr), rkgjab = tr8n3g(fpze, jnabgr, vic$t9);break;case '!':
          abkrsj && dip$v(jnabgr), rkgjab = t$zfvd(fpze, jnabgr, vic$t9, askjbu);break;default:
          abkrsj && dip$v(jnabgr);var ze0oq = new tp$fdv(),
              qe07x = d$pfz7[d$pfz7['length'] - 0x1]['currentNSMap'],
              rkgjab = tn51638(fpze, jnabgr, ze0oq, qe07x, hy0mx_, askjbu),
              mqy0x_ = ze0oq['length'];if (!ze0oq['closed'] && tabuj(fpze, rkgjab, ze0oq['tagName'], rabjkg) && (ze0oq['closed'] = !0x0, qye['nbsp'] || askjbu['warning']('unclosed xml attribute')), abkrsj && mqy0x_) {
            for (var qeyx_0 = tjkrsa(abkrsj, {}), oeq07z = 0x0; mqy0x_ > oeq07z; oeq07z++) {
              var dfoz7p = ze0oq[oeq07z];dip$v(dfoz7p['offset']), dfoz7p['locator'] = tjkrsa(abkrsj, {});
            }vic$t9['locator'] = qeyx_0, toe7z0(ze0oq, vic$t9, qe07x) && d$pfz7['push'](ze0oq), vic$t9['locator'] = abkrsj;
          } else toe7z0(ze0oq, vic$t9, qe07x) && d$pfz7['push'](ze0oq);'http://www.w3.org/1999/xhtml' !== ze0oq['uri'] || ze0oq['closed'] ? rkgjab++ : rkgjab = tv$p9id(fpze, rkgjab, ze0oq['tagName'], hy0mx_, vic$t9);}
    } catch (exy_) {
      askjbu['error']('element parse error: ' + exy_), rkgjab = -0x1;
    }rkgjab > y_mhx ? y_mhx = rkgjab : mqy0x(Math['max'](jnabgr, y_mhx) + 0x1);
  }
}function tjkrsa(nagjr, i9$vdp) {
  return i9$vdp['lineNumber'] = nagjr['lineNumber'], i9$vdp['columnNumber'] = nagjr['columnNumber'], i9$vdp;
}function tn51638($id9, ozpf7, _yhmxw, ngr8j3, kjrag, bn3j) {
  for (var pf$7zd, xeq0, rj3ngb = ++ozpf7, _0yeqx = tjnrgb3;;) {
    var tc9$iv = $id9['charAt'](rj3ngb);switch (tc9$iv) {case '=':
        if (_0yeqx === tgrjbn) pf$7zd = $id9['slice'](ozpf7, rj3ngb), _0yeqx = tv$it;else {
          if (_0yeqx !== tpi$v9) throw new Error('attribute equal must after attrName');_0yeqx = tv$it;
        }break;case '\x27':case '\x22':
        if (_0yeqx === tv$it || _0yeqx === tgrjbn) {
          if (_0yeqx === tgrjbn && (bn3j['warning']('attribute value must after "="'), pf$7zd = $id9['slice'](ozpf7, rj3ngb)), ozpf7 = rj3ngb + 0x1, rj3ngb = $id9['indexOf'](tc9$iv, ozpf7), !(rj3ngb > 0x0)) throw new Error('attribute value no end \'' + tc9$iv + '\' match');xeq0 = $id9['slice'](ozpf7, rj3ngb)['replace'](/&#?\w+;/g, kjrag), _yhmxw['add'](pf$7zd, xeq0, ozpf7 - 0x1), _0yeqx = tvp9df$;
        } else {
          if (_0yeqx != tkrgbja) throw new Error('attribute value must after "="');xeq0 = $id9['slice'](ozpf7, rj3ngb)['replace'](/&#?\w+;/g, kjrag), _yhmxw['add'](pf$7zd, xeq0, ozpf7), bn3j['warning']('attribute "' + pf$7zd + '" missed start quot(' + tc9$iv + ')!!'), ozpf7 = rj3ngb + 0x1, _0yeqx = tvp9df$;
        }break;case '/':
        switch (_0yeqx) {case tjnrgb3:
            _yhmxw['setTagName']($id9['slice'](ozpf7, rj3ngb));case tvp9df$:case tkbgrja:case tfze7qo:
            _0yeqx = tfze7qo, _yhmxw['closed'] = !0x0;case tkrgbja:case tgrjbn:case tpi$v9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bn3j['error']('unexpected end of input'), _0yeqx == tjnrgb3 && _yhmxw['setTagName']($id9['slice'](ozpf7, rj3ngb)), rj3ngb;case '>':
        switch (_0yeqx) {case tjnrgb3:
            _yhmxw['setTagName']($id9['slice'](ozpf7, rj3ngb));case tvp9df$:case tkbgrja:case tfze7qo:
            break;case tkrgbja:case tgrjbn:
            xeq0 = $id9['slice'](ozpf7, rj3ngb), '/' === xeq0['slice'](-0x1) && (_yhmxw['closed'] = !0x0, xeq0 = xeq0['slice'](0x0, -0x1));case tpi$v9:
            _0yeqx === tpi$v9 && (xeq0 = pf$7zd), _0yeqx == tkrgbja ? (bn3j['warning']('attribute "' + xeq0 + '" missed quot(")!!'), _yhmxw['add'](pf$7zd, xeq0['replace'](/&#?\w+;/g, kjrag), ozpf7)) : ('http://www.w3.org/1999/xhtml' === ngr8j3[''] && xeq0['match'](/^(?:disabled|checked|selected)$/i) || bn3j['warning']('attribute "' + xeq0 + '" missed value!! "' + xeq0 + '" instead!!'), _yhmxw['add'](xeq0, xeq0, ozpf7));break;case tv$it:
            throw new Error('attribute value missed!!');}return rj3ngb;case '\u0080':
        tc9$iv = '\x20';default:
        if ('\x20' >= tc9$iv) switch (_0yeqx) {case tjnrgb3:
            _yhmxw['setTagName']($id9['slice'](ozpf7, rj3ngb)), _0yeqx = tkbgrja;break;case tgrjbn:
            pf$7zd = $id9['slice'](ozpf7, rj3ngb), _0yeqx = tpi$v9;break;case tkrgbja:
            var xeq0 = $id9['slice'](ozpf7, rj3ngb)['replace'](/&#?\w+;/g, kjrag);bn3j['warning']('attribute "' + xeq0 + '" missed quot(")!!'), _yhmxw['add'](pf$7zd, xeq0, ozpf7);case tvp9df$:
            _0yeqx = tkbgrja;} else switch (_0yeqx) {case tpi$v9:
            {
              _yhmxw['tagName'];
            }'http://www.w3.org/1999/xhtml' === ngr8j3[''] && pf$7zd['match'](/^(?:disabled|checked|selected)$/i) || bn3j['warning']('attribute "' + pf$7zd + '" missed value!! "' + pf$7zd + '" instead2!!'), _yhmxw['add'](pf$7zd, pf$7zd, ozpf7), ozpf7 = rj3ngb, _0yeqx = tgrjbn;break;case tvp9df$:
            bn3j['warning']('attribute space is required"' + pf$7zd + '\x22!!');case tkbgrja:
            _0yeqx = tgrjbn, ozpf7 = rj3ngb;break;case tv$it:
            _0yeqx = tkrgbja, ozpf7 = rj3ngb;break;case tfze7qo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rj3ngb++;
  }
}function toe7z0(hymw_, $p9ivd, agkbr) {
  for (var q0z7e = hymw_['tagName'], fp$d9 = null, b3grjn = hymw_['length']; b3grjn--;) {
    var ivd9p = hymw_[b3grjn],
        sakjbu = ivd9p['qName'],
        z$7fdp = ivd9p['value'],
        p7fdo = sakjbu['indexOf'](':');if (p7fdo > 0x0) var bjsakr = ivd9p['prefix'] = sakjbu['slice'](0x0, p7fdo),
        $fp9v = sakjbu['slice'](p7fdo + 0x1),
        krja = 'xmlns' === bjsakr && $fp9v;else $fp9v = sakjbu, bjsakr = null, krja = 'xmlns' === sakjbu && '';ivd9p['localName'] = $fp9v, krja !== !0x1 && (null == fp$d9 && (fp$d9 = {}, tbksra(agkbr, agkbr = {})), agkbr[krja] = fp$d9[krja] = z$7fdp, ivd9p['uri'] = 'http://www.w3.org/2000/xmlns/', $p9ivd['startPrefixMapping'](krja, z$7fdp));
  }for (var b3grjn = hymw_['length']; b3grjn--;) {
    ivd9p = hymw_[b3grjn];var bjsakr = ivd9p['prefix'];bjsakr && ('xml' === bjsakr && (ivd9p['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== bjsakr && (ivd9p['uri'] = agkbr[bjsakr || '']));
  }var p7fdo = q0z7e['indexOf'](':');p7fdo > 0x0 ? (bjsakr = hymw_['prefix'] = q0z7e['slice'](0x0, p7fdo), $fp9v = hymw_['localName'] = q0z7e['slice'](p7fdo + 0x1)) : (bjsakr = null, $fp9v = hymw_['localName'] = q0z7e);var vdf9$ = hymw_['uri'] = agkbr[bjsakr || ''];if ($p9ivd['startElement'](vdf9$, $fp9v, q0z7e, hymw_), !hymw_['closed']) return hymw_['currentNSMap'] = agkbr, hymw_['localNSMap'] = fp$d9, !0x0;if ($p9ivd['endElement'](vdf9$, $fp9v, q0z7e), fp$d9) {
    for (bjsakr in fp$d9) $p9ivd['endPrefixMapping'](bjsakr);
  }
}function tv$p9id(f7$pd, f$zvp, dpf7oz, q0o7x, nagr) {
  if (/^(?:script|textarea)$/i['test'](dpf7oz)) {
    var x0qoey = f7$pd['indexOf']('</' + dpf7oz + '>', f$zvp),
        y5h = f7$pd['substring'](f$zvp + 0x1, x0qoey);if (/[&<]/['test'](y5h)) return (/^script$/i['test'](dpf7oz) ? (nagr['characters'](y5h, 0x0, y5h['length']), x0qoey) : (y5h = y5h['replace'](/&#?\w+;/g, q0o7x), nagr['characters'](y5h, 0x0, y5h['length']), x0qoey)
    );
  }return f$zvp + 0x1;
}function tabuj(eyx0q, gjanbr, $tci9v, mhx0y_) {
  var ct9v$ = mhx0y_[$tci9v];return null == ct9v$ && (ct9v$ = eyx0q['lastIndexOf']('</' + $tci9v + '>'), gjanbr > ct9v$ && (ct9v$ = eyx0q['lastIndexOf']('</' + $tci9v)), mhx0y_[$tci9v] = ct9v$), gjanbr > ct9v$;
}function tbksra(c2t9i, jakgb) {
  for (var wym_ in c2t9i) jakgb[wym_] = c2t9i[wym_];
}function t$zfvd(kbaus, h_6wm5, kujba, p$fvzd) {
  var xeyq0o = kbaus['charAt'](h_6wm5 + 0x2);switch (xeyq0o) {case '-':
      if ('-' === kbaus['charAt'](h_6wm5 + 0x3)) {
        var of7ezq = kbaus['indexOf']('-->', h_6wm5 + 0x4);return of7ezq > h_6wm5 ? (kujba['comment'](kbaus, h_6wm5 + 0x4, of7ezq - h_6wm5 - 0x4), of7ezq + 0x3) : (p$fvzd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kbaus['substr'](h_6wm5 + 0x3, 0x6)) {
        var of7ezq = kbaus['indexOf'](']]>', h_6wm5 + 0x9);return kujba['startCDATA'](), kujba['characters'](kbaus, h_6wm5 + 0x9, of7ezq - h_6wm5 - 0x9), kujba['endCDATA'](), of7ezq + 0x3;
      }var $9dicv = trg1n8(kbaus, h_6wm5),
          ozepf = $9dicv['length'];if (ozepf > 0x1 && /!doctype/i['test']($9dicv[0x0][0x0])) {
        var m_yxh0 = $9dicv[0x1][0x0],
            jabsk = ozepf > 0x3 && /^public$/i['test']($9dicv[0x2][0x0]) && $9dicv[0x3][0x0],
            i9pd = ozepf > 0x4 && $9dicv[0x4][0x0],
            cvi2t = $9dicv[ozepf - 0x1];return kujba['startDTD'](m_yxh0, jabsk && jabsk['replace'](/^(['"])(.*?)\1$/, '$2'), i9pd && i9pd['replace'](/^(['"])(.*?)\1$/, '$2')), kujba['endDTD'](), cvi2t['index'] + cvi2t[0x0]['length'];
      }}return -0x1;
}function tr8n3g(ubkjs, $pzdf, oqze70) {
  var tc42li = ubkjs['indexOf']('?>', $pzdf);if (tc42li) {
    var v9d$pf = ubkjs['substring']($pzdf, tc42li)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (v9d$pf) {
      {
        v9d$pf[0x0]['length'];
      }return oqze70['processingInstruction'](v9d$pf[0x1], v9d$pf[0x2]), tc42li + 0x2;
    }return -0x1;
  }return -0x1;
}function tp$fdv() {}function tbukasj(jnabrg, h_wym5) {
  return jnabrg['__proto__'] = h_wym5, jnabrg;
}function trg1n8(m0_y, aubkjs) {
  var eoz70q,
      _hxmy0 = [],
      wmhxy_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (wmhxy_['lastIndex'] = aubkjs, wmhxy_['exec'](m0_y); eoz70q = wmhxy_['exec'](m0_y);) if (_hxmy0['push'](eoz70q), eoz70q[0x1]) return _hxmy0;
}var tgban = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tci4l = new RegExp('[\\-\\.0-9' + tgban['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tfopd7 = new RegExp('^' + tgban['source'] + tci4l['source'] + '*(?::' + tgban['source'] + tci4l['source'] + '*)?$'),
    tjnrgb3 = 0x0,
    tgrjbn = 0x1,
    tpi$v9 = 0x2,
    tv$it = 0x3,
    tkrgbja = 0x4,
    tvp9df$ = 0x5,
    tkbgrja = 0x6,
    tfze7qo = 0x7;tbkuasj['prototype'] = { 'parse': function (akjubs, d9vf$p, dvp9$f) {
    var xqe0oy = this['domBuilder'];xqe0oy['startDocument'](), tbksra(d9vf$p, d9vf$p = {}), tfd7z$p(akjubs, d9vf$p, dvp9$f, xqe0oy, this['errorHandler']), xqe0oy['endDocument']();
  } }, tp$fdv['prototype'] = { 'setTagName': function (brgka) {
    if (!tfopd7['test'](brgka)) throw new Error('invalid tagName:' + brgka);this['tagName'] = brgka;
  }, 'add': function (tv9, $dvfzp, abkjrs) {
    if (!tfopd7['test'](tv9)) throw new Error('invalid attribute:' + tv9);this[this['length']++] = { 'qName': tv9, 'value': $dvfzp, 'offset': abkjrs };
  }, 'length': 0x0, 'getLocalName': function (krsb) {
    return this[krsb]['localName'];
  }, 'getLocator': function (xhy0m_) {
    return this[xhy0m_]['locator'];
  }, 'getQName': function (q07ox) {
    return this[q07ox]['qName'];
  }, 'getURI': function (bgnar) {
    return this[bgnar]['uri'];
  }, 'getValue': function (akbuj) {
    return this[akbuj]['value'];
  } }, tbukasj({}, tbukasj['prototype']) instanceof tbukasj || (tbukasj = function (v$pdi, fvpd$9) {
  function m5h6w1() {}m5h6w1['prototype'] = fvpd$9, m5h6w1 = new m5h6w1();for (fvpd$9 in v$pdi) m5h6w1[fvpd$9] = v$pdi[fvpd$9];return m5h6w1;
}), exports['XMLReader'] = tbkuasj;