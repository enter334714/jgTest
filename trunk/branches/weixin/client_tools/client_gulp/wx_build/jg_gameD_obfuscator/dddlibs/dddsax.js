var v = wx.$d;
function znjh9() {}function zh4jm6n(w7rp$v, igu, _4nh9, futdie, r7p$) {
  function bxaq0(fkdui) {
    if (fkdui > 0xffff) {
      fkdui -= 0x10000;var h49_j = 0xd800 + (fkdui >> 0xa),
          c5o9_3 = 0xdc00 + (0x3ff & fkdui);return String['fromCharCode'](h49_j, c5o9_3);
    }return String['fromCharCode'](fkdui);
  }function dmetiu(gufqtk) {
    var rab1x8 = gufqtk['slice'](0x1, -0x1);return rab1x8 in _4nh9 ? _4nh9[rab1x8] : '#' === rab1x8['charAt'](0x0) ? bxaq0(parseInt(rab1x8['substr'](0x1)['replace']('x', '0x'))) : (r7p$['error']('entity not found:' + gufqtk), gufqtk);
  }function kqg0a(_jnh6) {
    if (_jnh6 > e6hdim) {
      var n4c3_9 = w7rp$v['substring'](e6hdim, _jnh6)['replace'](/&#?\w+;/g, dmetiu);tuikgf && a8x1rb(e6hdim), futdie['characters'](n4c3_9, 0x0, _jnh6 - e6hdim), e6hdim = _jnh6;
    }
  }function a8x1rb($vprw1, co9_4) {
    for (; $vprw1 >= $rwp7v && (co9_4 = d6mieu['exec'](w7rp$v));) b1za8 = co9_4['index'], $rwp7v = b1za8 + co9_4[0x0]['length'], tuikgf['lineNumber']++;tuikgf['columnNumber'] = $vprw1 - b1za8 + 0x1;
  }for (var b1za8 = 0x0, $rwp7v = 0x0, d6mieu = /.*(?:\r\n?|\n)|.*$/g, tuikgf = futdie['locator'], hem6nj = [{ 'currentNSMap': igu }], zgkq0f = {}, e6hdim = 0x0;;) {
    try {
      var jnm6 = w7rp$v['indexOf']('<', e6hdim);if (0x0 > jnm6) {
        if (!w7rp$v['substr'](e6hdim)['match'](/^\s*$/)) {
          var dtuikf = futdie['doc'],
              h_4jn9 = dtuikf['createTextNode'](w7rp$v['substr'](e6hdim));dtuikf['appendChild'](h_4jn9), futdie['currentElement'] = h_4jn9;
        }return;
      }switch (jnm6 > e6hdim && kqg0a(jnm6), w7rp$v['charAt'](jnm6 + 0x1)) {case '/':
          var agqk = w7rp$v['indexOf']('>', jnm6 + 0x3),
              qkutgf = w7rp$v['substring'](jnm6 + 0x2, agqk),
              b1xwr = hem6nj['pop']();0x0 > agqk ? (qkutgf = w7rp$v['substring'](jnm6 + 0x2)['replace'](/[\s<].*/, ''), r7p$['error']('end tag name: ' + qkutgf + ' is not complete:' + b1xwr['tagName']), agqk = jnm6 + 0x1 + qkutgf['length']) : qkutgf['match'](/\s</) && (qkutgf = qkutgf['replace'](/[\s<].*/, ''), r7p$['error']('end tag name: ' + qkutgf + ' maybe not complete'), agqk = jnm6 + 0x1 + qkutgf['length']);var xbz81 = b1xwr['localNSMap'],
              w1xr$8 = b1xwr['tagName'] == qkutgf,
              $pv7ly = w1xr$8 || b1xwr['tagName'] && b1xwr['tagName']['toLowerCase']() == qkutgf['toLowerCase']();if ($pv7ly) {
            if (futdie['endElement'](b1xwr['uri'], b1xwr['localName'], qkutgf), xbz81) {
              for (var nhj6em in xbz81) futdie['endPrefixMapping'](nhj6em);
            }w1xr$8 || r7p$['fatalError']('end tag name: ' + qkutgf + ' is not match the current start tagName:' + b1xwr['tagName']);
          } else hem6nj['push'](b1xwr);agqk++;break;case '?':
          tuikgf && a8x1rb(jnm6), agqk = zkift(w7rp$v, jnm6, futdie);break;case '!':
          tuikgf && a8x1rb(jnm6), agqk = zqzba(w7rp$v, jnm6, futdie, r7p$);break;default:
          tuikgf && a8x1rb(jnm6);var kfdtui = new zvp$yl(),
              x8wbr1 = hem6nj[hem6nj['length'] - 0x1]['currentNSMap'],
              agqk = ztk0gqf(w7rp$v, jnm6, kfdtui, x8wbr1, dmetiu, r7p$),
              eudi6m = kfdtui['length'];if (!kfdtui['closed'] && zqftkug(w7rp$v, agqk, kfdtui['tagName'], zgkq0f) && (kfdtui['closed'] = !0x0, _4nh9['nbsp'] || r7p$['warning']('unclosed xml attribute')), tuikgf && eudi6m) {
            for (var n_4c39 = zoc3529(tuikgf, {}), za8x1b = 0x0; eudi6m > za8x1b; za8x1b++) {
              var kaz0gq = kfdtui[za8x1b];a8x1rb(kaz0gq['offset']), kaz0gq['locator'] = zoc3529(tuikgf, {});
            }futdie['locator'] = n_4c39, zetudi(kfdtui, futdie, x8wbr1) && hem6nj['push'](kfdtui), futdie['locator'] = tuikgf;
          } else zetudi(kfdtui, futdie, x8wbr1) && hem6nj['push'](kfdtui);'http://www.w3.org/1999/xhtml' !== kfdtui['uri'] || kfdtui['closed'] ? agqk++ : agqk = zudtmie(w7rp$v, agqk, kfdtui['tagName'], dmetiu, futdie);}
    } catch (n349c_) {
      r7p$['error']('element parse error: ' + n349c_), agqk = -0x1;
    }agqk > e6hdim ? e6hdim = agqk : kqg0a(Math['max'](jnm6, e6hdim) + 0x1);
  }
}function zoc3529(mdh6ei, pvly$7) {
  return pvly$7['lineNumber'] = mdh6ei['lineNumber'], pvly$7['columnNumber'] = mdh6ei['columnNumber'], pvly$7;
}function ztk0gqf(e6ui, b1zx8a, fqtk0g, b81ra, ne6, xbar81) {
  for (var emdj, o3c9_5, oc592 = ++b1zx8a, w8br1 = zeiufd;;) {
    var demitu = e6ui['charAt'](oc592);switch (demitu) {case '=':
        if (w8br1 === z$y7vpl) emdj = e6ui['slice'](b1zx8a, oc592), w8br1 = zmhie;else {
          if (w8br1 !== zw8r) throw new Error('attribute equal must after attrName');w8br1 = zmhie;
        }break;case '\x27':case '\x22':
        if (w8br1 === zmhie || w8br1 === z$y7vpl) {
          if (w8br1 === z$y7vpl && (xbar81['warning']('attribute value must after "="'), emdj = e6ui['slice'](b1zx8a, oc592)), b1zx8a = oc592 + 0x1, oc592 = e6ui['indexOf'](demitu, b1zx8a), !(oc592 > 0x0)) throw new Error('attribute value no end \'' + demitu + '\' match');o3c9_5 = e6ui['slice'](b1zx8a, oc592)['replace'](/&#?\w+;/g, ne6), fqtk0g['add'](emdj, o3c9_5, b1zx8a - 0x1), w8br1 = zh4n_9;
        } else {
          if (w8br1 != zm6dei) throw new Error('attribute value must after "="');o3c9_5 = e6ui['slice'](b1zx8a, oc592)['replace'](/&#?\w+;/g, ne6), fqtk0g['add'](emdj, o3c9_5, b1zx8a), xbar81['warning']('attribute "' + emdj + '" missed start quot(' + demitu + ')!!'), b1zx8a = oc592 + 0x1, w8br1 = zh4n_9;
        }break;case '/':
        switch (w8br1) {case zeiufd:
            fqtk0g['setTagName'](e6ui['slice'](b1zx8a, oc592));case zh4n_9:case z$py7wv:case zkgq0fz:
            w8br1 = zkgq0fz, fqtk0g['closed'] = !0x0;case zm6dei:case z$y7vpl:case zw8r:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xbar81['error']('unexpected end of input'), w8br1 == zeiufd && fqtk0g['setTagName'](e6ui['slice'](b1zx8a, oc592)), oc592;case '>':
        switch (w8br1) {case zeiufd:
            fqtk0g['setTagName'](e6ui['slice'](b1zx8a, oc592));case zh4n_9:case z$py7wv:case zkgq0fz:
            break;case zm6dei:case z$y7vpl:
            o3c9_5 = e6ui['slice'](b1zx8a, oc592), '/' === o3c9_5['slice'](-0x1) && (fqtk0g['closed'] = !0x0, o3c9_5 = o3c9_5['slice'](0x0, -0x1));case zw8r:
            w8br1 === zw8r && (o3c9_5 = emdj), w8br1 == zm6dei ? (xbar81['warning']('attribute "' + o3c9_5 + '" missed quot(")!!'), fqtk0g['add'](emdj, o3c9_5['replace'](/&#?\w+;/g, ne6), b1zx8a)) : ('http://www.w3.org/1999/xhtml' === b81ra[''] && o3c9_5['match'](/^(?:disabled|checked|selected)$/i) || xbar81['warning']('attribute "' + o3c9_5 + '" missed value!! "' + o3c9_5 + '" instead!!'), fqtk0g['add'](o3c9_5, o3c9_5, b1zx8a));break;case zmhie:
            throw new Error('attribute value missed!!');}return oc592;case '\u0080':
        demitu = '\x20';default:
        if ('\x20' >= demitu) switch (w8br1) {case zeiufd:
            fqtk0g['setTagName'](e6ui['slice'](b1zx8a, oc592)), w8br1 = z$py7wv;break;case z$y7vpl:
            emdj = e6ui['slice'](b1zx8a, oc592), w8br1 = zw8r;break;case zm6dei:
            var o3c9_5 = e6ui['slice'](b1zx8a, oc592)['replace'](/&#?\w+;/g, ne6);xbar81['warning']('attribute "' + o3c9_5 + '" missed quot(")!!'), fqtk0g['add'](emdj, o3c9_5, b1zx8a);case zh4n_9:
            w8br1 = z$py7wv;} else switch (w8br1) {case zw8r:
            {
              fqtk0g['tagName'];
            }'http://www.w3.org/1999/xhtml' === b81ra[''] && emdj['match'](/^(?:disabled|checked|selected)$/i) || xbar81['warning']('attribute "' + emdj + '" missed value!! "' + emdj + '" instead2!!'), fqtk0g['add'](emdj, emdj, b1zx8a), b1zx8a = oc592, w8br1 = z$y7vpl;break;case zh4n_9:
            xbar81['warning']('attribute space is required"' + emdj + '\x22!!');case z$py7wv:
            w8br1 = z$y7vpl, b1zx8a = oc592;break;case zmhie:
            w8br1 = zm6dei, b1zx8a = oc592;break;case zkgq0fz:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}oc592++;
  }
}function zetudi(n9_4hj, fz0gkq, m64hn) {
  for (var zgak = n9_4hj['tagName'], qufgk = null, az0qb = n9_4hj['length']; az0qb--;) {
    var rx1a8 = n9_4hj[az0qb],
        jh9n_ = rx1a8['qName'],
        dtfeui = rx1a8['value'],
        h_ = jh9n_['indexOf'](':');if (h_ > 0x0) var hdiem = rx1a8['prefix'] = jh9n_['slice'](0x0, h_),
        n46mh = jh9n_['slice'](h_ + 0x1),
        _94co3 = 'xmlns' === hdiem && n46mh;else n46mh = jh9n_, hdiem = null, _94co3 = 'xmlns' === jh9n_ && '';rx1a8['localName'] = n46mh, _94co3 !== !0x1 && (null == qufgk && (qufgk = {}, zp7wyv(m64hn, m64hn = {})), m64hn[_94co3] = qufgk[_94co3] = dtfeui, rx1a8['uri'] = 'http://www.w3.org/2000/xmlns/', fz0gkq['startPrefixMapping'](_94co3, dtfeui));
  }for (var az0qb = n9_4hj['length']; az0qb--;) {
    rx1a8 = n9_4hj[az0qb];var hdiem = rx1a8['prefix'];hdiem && ('xml' === hdiem && (rx1a8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hdiem && (rx1a8['uri'] = m64hn[hdiem || '']));
  }var h_ = zgak['indexOf'](':');h_ > 0x0 ? (hdiem = n9_4hj['prefix'] = zgak['slice'](0x0, h_), n46mh = n9_4hj['localName'] = zgak['slice'](h_ + 0x1)) : (hdiem = null, n46mh = n9_4hj['localName'] = zgak);var $p1r8w = n9_4hj['uri'] = m64hn[hdiem || ''];if (fz0gkq['startElement']($p1r8w, n46mh, zgak, n9_4hj), !n9_4hj['closed']) return n9_4hj['currentNSMap'] = m64hn, n9_4hj['localNSMap'] = qufgk, !0x0;if (fz0gkq['endElement']($p1r8w, n46mh, zgak), qufgk) {
    for (hdiem in qufgk) fz0gkq['endPrefixMapping'](hdiem);
  }
}function zudtmie(efud, ufkitg, hm6enj, gq0z, iumde6) {
  if (/^(?:script|textarea)$/i['test'](hm6enj)) {
    var udtfki = efud['indexOf']('</' + hm6enj + '>', ufkitg),
        p$7w = efud['substring'](ufkitg + 0x1, udtfki);if (/[&<]/['test'](p$7w)) return (/^script$/i['test'](hm6enj) ? (iumde6['characters'](p$7w, 0x0, p$7w['length']), udtfki) : (p$7w = p$7w['replace'](/&#?\w+;/g, gq0z), iumde6['characters'](p$7w, 0x0, p$7w['length']), udtfki)
    );
  }return ufkitg + 0x1;
}function zqftkug(u6mid, r18bxa, dfetiu, em6dhj) {
  var gktfui = em6dhj[dfetiu];return null == gktfui && (gktfui = u6mid['lastIndexOf']('</' + dfetiu + '>'), r18bxa > gktfui && (gktfui = u6mid['lastIndexOf']('</' + dfetiu)), em6dhj[dfetiu] = gktfui), r18bxa > gktfui;
}function zp7wyv(h_4nj6, qugtfk) {
  for (var dfutie in h_4nj6) qugtfk[dfutie] = h_4nj6[dfutie];
}function zqzba(kqgft, b1z, bzax0q, e6hid) {
  var x$r1 = kqgft['charAt'](b1z + 0x2);switch (x$r1) {case '-':
      if ('-' === kqgft['charAt'](b1z + 0x3)) {
        var $p7r = kqgft['indexOf']('-->', b1z + 0x4);return $p7r > b1z ? (bzax0q['comment'](kqgft, b1z + 0x4, $p7r - b1z - 0x4), $p7r + 0x3) : (e6hid['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kqgft['substr'](b1z + 0x3, 0x6)) {
        var $p7r = kqgft['indexOf'](']]>', b1z + 0x9);return bzax0q['startCDATA'](), bzax0q['characters'](kqgft, b1z + 0x9, $p7r - b1z - 0x9), bzax0q['endCDATA'](), $p7r + 0x3;
      }var $wpvr7 = zfk0qgt(kqgft, b1z),
          r$p8 = $wpvr7['length'];if (r$p8 > 0x1 && /!doctype/i['test']($wpvr7[0x0][0x0])) {
        var oc95_ = $wpvr7[0x1][0x0],
            edft = r$p8 > 0x3 && /^public$/i['test']($wpvr7[0x2][0x0]) && $wpvr7[0x3][0x0],
            hmnj64 = r$p8 > 0x4 && $wpvr7[0x4][0x0],
            agz0qb = $wpvr7[r$p8 - 0x1];return bzax0q['startDTD'](oc95_, edft && edft['replace'](/^(['"])(.*?)\1$/, '$2'), hmnj64 && hmnj64['replace'](/^(['"])(.*?)\1$/, '$2')), bzax0q['endDTD'](), agz0qb['index'] + agz0qb[0x0]['length'];
      }}return -0x1;
}function zkift(zkgf0, qgak0, qg0zka) {
  var gfui = zkgf0['indexOf']('?>', qgak0);if (gfui) {
    var hj4n9_ = zkgf0['substring'](qgak0, gfui)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hj4n9_) {
      {
        hj4n9_[0x0]['length'];
      }return qg0zka['processingInstruction'](hj4n9_[0x1], hj4n9_[0x2]), gfui + 0x2;
    }return -0x1;
  }return -0x1;
}function zvp$yl() {}function zhemjn(uiftd, tkfi) {
  return uiftd['__proto__'] = tkfi, uiftd;
}function zfk0qgt(axqz0b, $wp7vy) {
  var d6hiem,
      $rwp1 = [],
      zg0qka = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zg0qka['lastIndex'] = $wp7vy, zg0qka['exec'](axqz0b); d6hiem = zg0qka['exec'](axqz0b);) if ($rwp1['push'](d6hiem), d6hiem[0x1]) return $rwp1;
}var zbz1ax8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zz0fgkq = new RegExp('[\\-\\.0-9' + zbz1ax8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zdi6mhe = new RegExp('^' + zbz1ax8['source'] + zz0fgkq['source'] + '*(?::' + zbz1ax8['source'] + zz0fgkq['source'] + '*)?$'),
    zeiufd = 0x0,
    z$y7vpl = 0x1,
    zw8r = 0x2,
    zmhie = 0x3,
    zm6dei = 0x4,
    zh4n_9 = 0x5,
    z$py7wv = 0x6,
    zkgq0fz = 0x7;znjh9['prototype'] = { 'parse': function (hnmej6, rb8w1x, j43_9n) {
    var ftkg0q = this['domBuilder'];ftkg0q['startDocument'](), zp7wyv(rb8w1x, rb8w1x = {}), zh4jm6n(hnmej6, rb8w1x, j43_9n, ftkg0q, this['errorHandler']), ftkg0q['endDocument']();
  } }, zvp$yl['prototype'] = { 'setTagName': function (rvwp$7) {
    if (!zdi6mhe['test'](rvwp$7)) throw new Error('invalid tagName:' + rvwp$7);this['tagName'] = rvwp$7;
  }, 'add': function (ime6u, fqgtuk, _94) {
    if (!zdi6mhe['test'](ime6u)) throw new Error('invalid attribute:' + ime6u);this[this['length']++] = { 'qName': ime6u, 'value': fqgtuk, 'offset': _94 };
  }, 'length': 0x0, 'getLocalName': function (r1$p8) {
    return this[r1$p8]['localName'];
  }, 'getLocator': function (kz0gf) {
    return this[kz0gf]['locator'];
  }, 'getQName': function (diemh6) {
    return this[diemh6]['qName'];
  }, 'getURI': function (c32o59) {
    return this[c32o59]['uri'];
  }, 'getValue': function (fkgitu) {
    return this[fkgitu]['value'];
  } }, zhemjn({}, zhemjn['prototype']) instanceof zhemjn || (zhemjn = function (hnm6je, f0kqgz) {
  function jnm4h() {}jnm4h['prototype'] = f0kqgz, jnm4h = new jnm4h();for (f0kqgz in hnm6je) jnm4h[f0kqgz] = hnm6je[f0kqgz];return jnm4h;
}), exports['XMLReader'] = znjh9;