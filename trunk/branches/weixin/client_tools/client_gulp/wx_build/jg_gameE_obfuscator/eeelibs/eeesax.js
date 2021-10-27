var b = wx.$e;
function ekhlfpi() {}function eijp5kf(w2g1v$, usn4e, u8nsqe, v$0ao, eudq8) {
  function i59fk(a$0rv) {
    if (a$0rv > 0xffff) {
      a$0rv -= 0x10000;var l8dunq = 0xd800 + (a$0rv >> 0xa),
          ki9jf5 = 0xdc00 + (0x3ff & a$0rv);return String['fromCharCode'](l8dunq, ki9jf5);
    }return String['fromCharCode'](a$0rv);
  }function x1w2g(vg1$2) {
    var w2v1$g = vg1$2['slice'](0x1, -0x1);return w2v1$g in u8nsqe ? u8nsqe[w2v1$g] : '#' === w2v1$g['charAt'](0x0) ? i59fk(parseInt(w2v1$g['substr'](0x1)['replace']('x', '0x'))) : (eudq8['error']('entity not found:' + vg1$2), vg1$2);
  }function hiqlp(fkj) {
    if (fkj > r$v0ao) {
      var dqnlhu = w2g1v$['substring'](r$v0ao, fkj)['replace'](/&#?\w+;/g, x1w2g);i5fjpk && pjhkfi(r$v0ao), v$0ao['characters'](dqnlhu, 0x0, fkj - r$v0ao), r$v0ao = fkj;
    }
  }function pjhkfi(j9fi5k, hqldpn) {
    for (; j9fi5k >= u84te && (hqldpn = f9kjz['exec'](w2g1v$));) j5k9z7 = hqldpn['index'], u84te = j5k9z7 + hqldpn[0x0]['length'], i5fjpk['lineNumber']++;i5fjpk['columnNumber'] = j9fi5k - j5k9z7 + 0x1;
  }for (var j5k9z7 = 0x0, u84te = 0x0, f9kjz = /.*(?:\r\n?|\n)|.*$/g, i5fjpk = v$0ao['locator'], fhjki = [{ 'currentNSMap': usn4e }], hfijpk = {}, r$v0ao = 0x0;;) {
    try {
      var w2v1g = w2g1v$['indexOf']('<', r$v0ao);if (0x0 > w2v1g) {
        if (!w2g1v$['substr'](r$v0ao)['match'](/^\s*$/)) {
          var su4 = v$0ao['doc'],
              xzm716 = su4['createTextNode'](w2g1v$['substr'](r$v0ao));su4['appendChild'](xzm716), v$0ao['currentElement'] = xzm716;
        }return;
      }switch (w2v1g > r$v0ao && hiqlp(w2v1g), w2g1v$['charAt'](w2v1g + 0x1)) {case '/':
          var kfplih = w2g1v$['indexOf']('>', w2v1g + 0x3),
              b34 = w2g1v$['substring'](w2v1g + 0x2, kfplih),
              nu4es = fhjki['pop']();0x0 > kfplih ? (b34 = w2g1v$['substring'](w2v1g + 0x2)['replace'](/[\s<].*/, ''), eudq8['error']('end tag name: ' + b34 + ' is not complete:' + nu4es['tagName']), kfplih = w2v1g + 0x1 + b34['length']) : b34['match'](/\s</) && (b34 = b34['replace'](/[\s<].*/, ''), eudq8['error']('end tag name: ' + b34 + ' maybe not complete'), kfplih = w2v1g + 0x1 + b34['length']);var nu48s = nu4es['localNSMap'],
              ildhp = nu4es['tagName'] == b34,
              lidpfh = ildhp || nu4es['tagName'] && nu4es['tagName']['toLowerCase']() == b34['toLowerCase']();if (lidpfh) {
            if (v$0ao['endElement'](nu4es['uri'], nu4es['localName'], b34), nu48s) {
              for (var tsu48 in nu48s) v$0ao['endPrefixMapping'](tsu48);
            }ildhp || eudq8['fatalError']('end tag name: ' + b34 + ' is not match the current start tagName:' + nu4es['tagName']);
          } else fhjki['push'](nu4es);kfplih++;break;case '?':
          i5fjpk && pjhkfi(w2v1g), kfplih = ezjm(w2g1v$, w2v1g, v$0ao);break;case '!':
          i5fjpk && pjhkfi(w2v1g), kfplih = exm17(w2g1v$, w2v1g, v$0ao, eudq8);break;default:
          i5fjpk && pjhkfi(w2v1g);var es48ut = new epikl(),
              equsn = fhjki[fhjki['length'] - 0x1]['currentNSMap'],
              kfplih = es8n4ue(w2g1v$, w2v1g, es48ut, equsn, x1w2g, eudq8),
              hkfip = es48ut['length'];if (!es48ut['closed'] && ephikfj(w2g1v$, kfplih, es48ut['tagName'], hfijpk) && (es48ut['closed'] = !0x0, u8nsqe['nbsp'] || eudq8['warning']('unclosed xml attribute')), i5fjpk && hkfip) {
            for (var eus4n = esetu8(i5fjpk, {}), zmj59 = 0x0; hkfip > zmj59; zmj59++) {
              var m16xg = es48ut[zmj59];pjhkfi(m16xg['offset']), m16xg['locator'] = esetu8(i5fjpk, {});
            }v$0ao['locator'] = eus4n, e$2vgw(es48ut, v$0ao, equsn) && fhjki['push'](es48ut), v$0ao['locator'] = i5fjpk;
          } else e$2vgw(es48ut, v$0ao, equsn) && fhjki['push'](es48ut);'http://www.w3.org/1999/xhtml' !== es48ut['uri'] || es48ut['closed'] ? kfplih++ : kfplih = eg16v2(w2g1v$, kfplih, es48ut['tagName'], x1w2g, v$0ao);}
    } catch (by34t) {
      eudq8['error']('element parse error: ' + by34t), kfplih = -0x1;
    }kfplih > r$v0ao ? r$v0ao = kfplih : hiqlp(Math['max'](w2v1g, r$v0ao) + 0x1);
  }
}function esetu8(dhil, ijhp) {
  return ijhp['lineNumber'] = dhil['lineNumber'], ijhp['columnNumber'] = dhil['columnNumber'], ijhp;
}function es8n4ue(qnesu, j5k97, z69xm, $02vwg, dquhnl, $0v2w) {
  for (var lkfhip, $oavr, x9z57 = ++j5k97, t3be4 = eb4ste;;) {
    var pdnhq = qnesu['charAt'](x9z57);switch (pdnhq) {case '=':
        if (t3be4 === ehfipl) lkfhip = qnesu['slice'](j5k97, x9z57), t3be4 = euenq8d;else {
          if (t3be4 !== e$vra0o) throw new Error('attribute equal must after attrName');t3be4 = euenq8d;
        }break;case '\x27':case '\x22':
        if (t3be4 === euenq8d || t3be4 === ehfipl) {
          if (t3be4 === ehfipl && ($0v2w['warning']('attribute value must after "="'), lkfhip = qnesu['slice'](j5k97, x9z57)), j5k97 = x9z57 + 0x1, x9z57 = qnesu['indexOf'](pdnhq, j5k97), !(x9z57 > 0x0)) throw new Error('attribute value no end \'' + pdnhq + '\' match');$oavr = qnesu['slice'](j5k97, x9z57)['replace'](/&#?\w+;/g, dquhnl), z69xm['add'](lkfhip, $oavr, j5k97 - 0x1), t3be4 = eeu8st;
        } else {
          if (t3be4 != ejkifhp) throw new Error('attribute value must after "="');$oavr = qnesu['slice'](j5k97, x9z57)['replace'](/&#?\w+;/g, dquhnl), z69xm['add'](lkfhip, $oavr, j5k97), $0v2w['warning']('attribute "' + lkfhip + '" missed start quot(' + pdnhq + ')!!'), j5k97 = x9z57 + 0x1, t3be4 = eeu8st;
        }break;case '/':
        switch (t3be4) {case eb4ste:
            z69xm['setTagName'](qnesu['slice'](j5k97, x9z57));case eeu8st:case ednu8eq:case eipkhfl:
            t3be4 = eipkhfl, z69xm['closed'] = !0x0;case ejkifhp:case ehfipl:case e$vra0o:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $0v2w['error']('unexpected end of input'), t3be4 == eb4ste && z69xm['setTagName'](qnesu['slice'](j5k97, x9z57)), x9z57;case '>':
        switch (t3be4) {case eb4ste:
            z69xm['setTagName'](qnesu['slice'](j5k97, x9z57));case eeu8st:case ednu8eq:case eipkhfl:
            break;case ejkifhp:case ehfipl:
            $oavr = qnesu['slice'](j5k97, x9z57), '/' === $oavr['slice'](-0x1) && (z69xm['closed'] = !0x0, $oavr = $oavr['slice'](0x0, -0x1));case e$vra0o:
            t3be4 === e$vra0o && ($oavr = lkfhip), t3be4 == ejkifhp ? ($0v2w['warning']('attribute "' + $oavr + '" missed quot(")!!'), z69xm['add'](lkfhip, $oavr['replace'](/&#?\w+;/g, dquhnl), j5k97)) : ('http://www.w3.org/1999/xhtml' === $02vwg[''] && $oavr['match'](/^(?:disabled|checked|selected)$/i) || $0v2w['warning']('attribute "' + $oavr + '" missed value!! "' + $oavr + '" instead!!'), z69xm['add']($oavr, $oavr, j5k97));break;case euenq8d:
            throw new Error('attribute value missed!!');}return x9z57;case '\u0080':
        pdnhq = '\x20';default:
        if ('\x20' >= pdnhq) switch (t3be4) {case eb4ste:
            z69xm['setTagName'](qnesu['slice'](j5k97, x9z57)), t3be4 = ednu8eq;break;case ehfipl:
            lkfhip = qnesu['slice'](j5k97, x9z57), t3be4 = e$vra0o;break;case ejkifhp:
            var $oavr = qnesu['slice'](j5k97, x9z57)['replace'](/&#?\w+;/g, dquhnl);$0v2w['warning']('attribute "' + $oavr + '" missed quot(")!!'), z69xm['add'](lkfhip, $oavr, j5k97);case eeu8st:
            t3be4 = ednu8eq;} else switch (t3be4) {case e$vra0o:
            {
              z69xm['tagName'];
            }'http://www.w3.org/1999/xhtml' === $02vwg[''] && lkfhip['match'](/^(?:disabled|checked|selected)$/i) || $0v2w['warning']('attribute "' + lkfhip + '" missed value!! "' + lkfhip + '" instead2!!'), z69xm['add'](lkfhip, lkfhip, j5k97), j5k97 = x9z57, t3be4 = ehfipl;break;case eeu8st:
            $0v2w['warning']('attribute space is required"' + lkfhip + '\x22!!');case ednu8eq:
            t3be4 = ehfipl, j5k97 = x9z57;break;case euenq8d:
            t3be4 = ejkifhp, j5k97 = x9z57;break;case eipkhfl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x9z57++;
  }
}function e$2vgw(qphidl, fkpj, $vaw0r) {
  for (var m761z = qphidl['tagName'], wg0$2v = null, dihlf = qphidl['length']; dihlf--;) {
    var _b4y = qphidl[dihlf],
        hfpjki = _b4y['qName'],
        a$vwr0 = _b4y['value'],
        hlqnud = hfpjki['indexOf'](':');if (hlqnud > 0x0) var hpjfk = _b4y['prefix'] = hfpjki['slice'](0x0, hlqnud),
        esuqn = hfpjki['slice'](hlqnud + 0x1),
        zj75k = 'xmlns' === hpjfk && esuqn;else esuqn = hfpjki, hpjfk = null, zj75k = 'xmlns' === hfpjki && '';_b4y['localName'] = esuqn, zj75k !== !0x1 && (null == wg0$2v && (wg0$2v = {}, een8s4($vaw0r, $vaw0r = {})), $vaw0r[zj75k] = wg0$2v[zj75k] = a$vwr0, _b4y['uri'] = 'http://www.w3.org/2000/xmlns/', fkpj['startPrefixMapping'](zj75k, a$vwr0));
  }for (var dihlf = qphidl['length']; dihlf--;) {
    _b4y = qphidl[dihlf];var hpjfk = _b4y['prefix'];hpjfk && ('xml' === hpjfk && (_b4y['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hpjfk && (_b4y['uri'] = $vaw0r[hpjfk || '']));
  }var hlqnud = m761z['indexOf'](':');hlqnud > 0x0 ? (hpjfk = qphidl['prefix'] = m761z['slice'](0x0, hlqnud), esuqn = qphidl['localName'] = m761z['slice'](hlqnud + 0x1)) : (hpjfk = null, esuqn = qphidl['localName'] = m761z);var $rv0wa = qphidl['uri'] = $vaw0r[hpjfk || ''];if (fkpj['startElement']($rv0wa, esuqn, m761z, qphidl), !qphidl['closed']) return qphidl['currentNSMap'] = $vaw0r, qphidl['localNSMap'] = wg0$2v, !0x0;if (fkpj['endElement']($rv0wa, esuqn, m761z), wg0$2v) {
    for (hpjfk in wg0$2v) fkpj['endPrefixMapping'](hpjfk);
  }
}function eg16v2(jkhi, su4en8, u84ne, fpihjk, $0rvw) {
  if (/^(?:script|textarea)$/i['test'](u84ne)) {
    var $g20v = jkhi['indexOf']('</' + u84ne + '>', su4en8),
        qudnl8 = jkhi['substring'](su4en8 + 0x1, $g20v);if (/[&<]/['test'](qudnl8)) return (/^script$/i['test'](u84ne) ? ($0rvw['characters'](qudnl8, 0x0, qudnl8['length']), $g20v) : (qudnl8 = qudnl8['replace'](/&#?\w+;/g, fpihjk), $0rvw['characters'](qudnl8, 0x0, qudnl8['length']), $g20v)
    );
  }return su4en8 + 0x1;
}function ephikfj(qdnl8u, tu8e4s, f5j9ik, jihfk) {
  var rv0wa = jihfk[f5j9ik];return null == rv0wa && (rv0wa = qdnl8u['lastIndexOf']('</' + f5j9ik + '>'), tu8e4s > rv0wa && (rv0wa = qdnl8u['lastIndexOf']('</' + f5j9ik)), jihfk[f5j9ik] = rv0wa), tu8e4s > rv0wa;
}function een8s4(ty_b3, t4s8ue) {
  for (var ijf9k5 in ty_b3) t4s8ue[ijf9k5] = ty_b3[ijf9k5];
}function exm17(f5pkji, aov$0r, w2gv0$, ut8e4) {
  var w62xg1 = f5pkji['charAt'](aov$0r + 0x2);switch (w62xg1) {case '-':
      if ('-' === f5pkji['charAt'](aov$0r + 0x3)) {
        var hpdlnq = f5pkji['indexOf']('-->', aov$0r + 0x4);return hpdlnq > aov$0r ? (w2gv0$['comment'](f5pkji, aov$0r + 0x4, hpdlnq - aov$0r - 0x4), hpdlnq + 0x3) : (ut8e4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == f5pkji['substr'](aov$0r + 0x3, 0x6)) {
        var hpdlnq = f5pkji['indexOf'](']]>', aov$0r + 0x9);return w2gv0$['startCDATA'](), w2gv0$['characters'](f5pkji, aov$0r + 0x9, hpdlnq - aov$0r - 0x9), w2gv0$['endCDATA'](), hpdlnq + 0x3;
      }var fpklh = ewg6v21(f5pkji, aov$0r),
          gw$1 = fpklh['length'];if (gw$1 > 0x1 && /!doctype/i['test'](fpklh[0x0][0x0])) {
        var p5kji = fpklh[0x1][0x0],
            hnpdq = gw$1 > 0x3 && /^public$/i['test'](fpklh[0x2][0x0]) && fpklh[0x3][0x0],
            dpqlnh = gw$1 > 0x4 && fpklh[0x4][0x0],
            o$0arv = fpklh[gw$1 - 0x1];return w2gv0$['startDTD'](p5kji, hnpdq && hnpdq['replace'](/^(['"])(.*?)\1$/, '$2'), dpqlnh && dpqlnh['replace'](/^(['"])(.*?)\1$/, '$2')), w2gv0$['endDTD'](), o$0arv['index'] + o$0arv[0x0]['length'];
      }}return -0x1;
}function ezjm(qdl8, $0vwr, r$avw0) {
  var lfhki = qdl8['indexOf']('?>', $0vwr);if (lfhki) {
    var te84su = qdl8['substring']($0vwr, lfhki)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (te84su) {
      {
        te84su[0x0]['length'];
      }return r$avw0['processingInstruction'](te84su[0x1], te84su[0x2]), lfhki + 0x2;
    }return -0x1;
  }return -0x1;
}function epikl() {}function eqhnl(vwg20$, b34_ty) {
  return vwg20$['__proto__'] = b34_ty, vwg20$;
}function ewg6v21(nse84, if5pj) {
  var quen8,
      dqlhpi = [],
      r$w0v2 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (r$w0v2['lastIndex'] = if5pj, r$w0v2['exec'](nse84); quen8 = r$w0v2['exec'](nse84);) if (dqlhpi['push'](quen8), quen8[0x1]) return dqlhpi;
}var eplik = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eikp5jf = new RegExp('[\\-\\.0-9' + eplik['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eqn8eud = new RegExp('^' + eplik['source'] + eikp5jf['source'] + '*(?::' + eplik['source'] + eikp5jf['source'] + '*)?$'),
    eb4ste = 0x0,
    ehfipl = 0x1,
    e$vra0o = 0x2,
    euenq8d = 0x3,
    ejkifhp = 0x4,
    eeu8st = 0x5,
    ednu8eq = 0x6,
    eipkhfl = 0x7;ekhlfpi['prototype'] = { 'parse': function (ldunh, pif5kj, ji9k5f) {
    var ifdlhp = this['domBuilder'];ifdlhp['startDocument'](), een8s4(pif5kj, pif5kj = {}), eijp5kf(ldunh, pif5kj, ji9k5f, ifdlhp, this['errorHandler']), ifdlhp['endDocument']();
  } }, epikl['prototype'] = { 'setTagName': function (s38et) {
    if (!eqn8eud['test'](s38et)) throw new Error('invalid tagName:' + s38et);this['tagName'] = s38et;
  }, 'add': function (v0$2w, $0vra, fikj5) {
    if (!eqn8eud['test'](v0$2w)) throw new Error('invalid attribute:' + v0$2w);this[this['length']++] = { 'qName': v0$2w, 'value': $0vra, 'offset': fikj5 };
  }, 'length': 0x0, 'getLocalName': function (teb3) {
    return this[teb3]['localName'];
  }, 'getLocator': function (ipkfhj) {
    return this[ipkfhj]['locator'];
  }, 'getQName': function (fjk5pi) {
    return this[fjk5pi]['qName'];
  }, 'getURI': function (pkhlfi) {
    return this[pkhlfi]['uri'];
  }, 'getValue': function (s84tu) {
    return this[s84tu]['value'];
  } }, eqhnl({}, eqhnl['prototype']) instanceof eqhnl || (eqhnl = function (nsequ, b_4y3) {
  function zk5j97() {}zk5j97['prototype'] = b_4y3, zk5j97 = new zk5j97();for (b_4y3 in nsequ) zk5j97[b_4y3] = nsequ[b_4y3];return zk5j97;
}), exports['XMLReader'] = ekhlfpi;