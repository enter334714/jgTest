var B = wx.$z;
function zodetza() {}function zyrb8kd(l67nfv, eztsxa, xhp91s, tkdzy, phg149) {
  function f6gl4(jqim$) {
    if (jqim$ > 0xffff) {
      jqim$ -= 0x10000;var aetzso = 0xd800 + (jqim$ >> 0xa),
          kby_r8 = 0xdc00 + (0x3ff & jqim$);return String['fromCharCode'](aetzso, kby_r8);
    }return String['fromCharCode'](jqim$);
  }function k_8ryb(mqni) {
    var p9g1x = mqni['slice'](0x1, -0x1);return p9g1x in xhp91s ? xhp91s[p9g1x] : '#' === p9g1x['charAt'](0x0) ? f6gl4(parseInt(p9g1x['substr'](0x1)['replace']('x', '0x'))) : (phg149['error']('entity not found:' + mqni), mqni);
  }function pf6g4v(nl64vf) {
    if (nl64vf > xa9zse) {
      var _2wu50 = l67nfv['substring'](xa9zse, nl64vf)['replace'](/&#?\w+;/g, k_8ryb);yzotde && g6fp4v(xa9zse), tkdzy['characters'](_2wu50, 0x0, nl64vf - xa9zse), xa9zse = nl64vf;
    }
  }function g6fp4v(li7nmv, db8oyk) {
    for (; li7nmv >= $j3qm && (db8oyk = _b2r['exec'](l67nfv));) flivn = db8oyk['index'], $j3qm = flivn + db8oyk[0x0]['length'], yzotde['lineNumber']++;yzotde['columnNumber'] = li7nmv - flivn + 0x1;
  }for (var flivn = 0x0, $j3qm = 0x0, _b2r = /.*(?:\r\n?|\n)|.*$/g, yzotde = tkdzy['locator'], ph6f4g = [{ 'currentNSMap': eztsxa }], f4gh6 = {}, xa9zse = 0x0;;) {
    try {
      var p1g49 = l67nfv['indexOf']('<', xa9zse);if (0x0 > p1g49) {
        if (!l67nfv['substr'](xa9zse)['match'](/^\s*$/)) {
          var pvgf46 = tkdzy['doc'],
              n6lf7v = pvgf46['createTextNode'](l67nfv['substr'](xa9zse));pvgf46['appendChild'](n6lf7v), tkdzy['currentElement'] = n6lf7v;
        }return;
      }switch (p1g49 > xa9zse && pf6g4v(p1g49), l67nfv['charAt'](p1g49 + 0x1)) {case '/':
          var dtze = l67nfv['indexOf']('>', p1g49 + 0x3),
              inf7l = l67nfv['substring'](p1g49 + 0x2, dtze),
              bd8 = ph6f4g['pop']();0x0 > dtze ? (inf7l = l67nfv['substring'](p1g49 + 0x2)['replace'](/[\s<].*/, ''), phg149['error']('end tag name: ' + inf7l + ' is not complete:' + bd8['tagName']), dtze = p1g49 + 0x1 + inf7l['length']) : inf7l['match'](/\s</) && (inf7l = inf7l['replace'](/[\s<].*/, ''), phg149['error']('end tag name: ' + inf7l + ' maybe not complete'), dtze = p1g49 + 0x1 + inf7l['length']);var n67f = bd8['localNSMap'],
              h41g6p = bd8['tagName'] == inf7l,
              nq7im3 = h41g6p || bd8['tagName'] && bd8['tagName']['toLowerCase']() == inf7l['toLowerCase']();if (nq7im3) {
            if (tkdzy['endElement'](bd8['uri'], bd8['localName'], inf7l), n67f) {
              for (var a1x9h in n67f) tkdzy['endPrefixMapping'](a1x9h);
            }h41g6p || phg149['fatalError']('end tag name: ' + inf7l + ' is not match the current start tagName:' + bd8['tagName']);
          } else ph6f4g['push'](bd8);dtze++;break;case '?':
          yzotde && g6fp4v(p1g49), dtze = zl6gvf4(l67nfv, p1g49, tkdzy);break;case '!':
          yzotde && g6fp4v(p1g49), dtze = zr8dkb(l67nfv, p1g49, tkdzy, phg149);break;default:
          yzotde && g6fp4v(p1g49);var p9hx1s = new zv64pgf(),
              r_52u = ph6f4g[ph6f4g['length'] - 0x1]['currentNSMap'],
              dtze = zk8_b(l67nfv, p1g49, p9hx1s, r_52u, k_8ryb, phg149),
              x91gph = p9hx1s['length'];if (!p9hx1s['closed'] && zv6gl4f(l67nfv, dtze, p9hx1s['tagName'], f4gh6) && (p9hx1s['closed'] = !0x0, xhp91s['nbsp'] || phg149['warning']('unclosed xml attribute')), yzotde && x91gph) {
            for (var s9exaz = zxats(yzotde, {}), xztaes = 0x0; x91gph > xztaes; xztaes++) {
              var ozdty = p9hx1s[xztaes];g6fp4v(ozdty['offset']), ozdty['locator'] = zxats(yzotde, {});
            }tkdzy['locator'] = s9exaz, zas9e(p9hx1s, tkdzy, r_52u) && ph6f4g['push'](p9hx1s), tkdzy['locator'] = yzotde;
          } else zas9e(p9hx1s, tkdzy, r_52u) && ph6f4g['push'](p9hx1s);'http://www.w3.org/1999/xhtml' !== p9hx1s['uri'] || p9hx1s['closed'] ? dtze++ : dtze = zgf46pv(l67nfv, dtze, p9hx1s['tagName'], k_8ryb, tkdzy);}
    } catch (dr8by) {
      phg149['error']('element parse error: ' + dr8by), dtze = -0x1;
    }dtze > xa9zse ? xa9zse = dtze : pf6g4v(Math['max'](p1g49, xa9zse) + 0x1);
  }
}function zxats(ade, seaxt) {
  return seaxt['lineNumber'] = ade['lineNumber'], seaxt['columnNumber'] = ade['columnNumber'], seaxt;
}function zk8_b(otes, bkry8d, r_u5, oet, a9hx1s, zatx) {
  for (var dbktoy, l7ivn, psx91h = ++bkry8d, flv7in = zs9eax;;) {
    var v6lfg4 = otes['charAt'](psx91h);switch (v6lfg4) {case '=':
        if (flv7in === zu025w) dbktoy = otes['slice'](bkry8d, psx91h), flv7in = z_w25ru;else {
          if (flv7in !== zq37min) throw new Error('attribute equal must after attrName');flv7in = z_w25ru;
        }break;case '\x27':case '\x22':
        if (flv7in === z_w25ru || flv7in === zu025w) {
          if (flv7in === zu025w && (zatx['warning']('attribute value must after "="'), dbktoy = otes['slice'](bkry8d, psx91h)), bkry8d = psx91h + 0x1, psx91h = otes['indexOf'](v6lfg4, bkry8d), !(psx91h > 0x0)) throw new Error('attribute value no end \'' + v6lfg4 + '\' match');l7ivn = otes['slice'](bkry8d, psx91h)['replace'](/&#?\w+;/g, a9hx1s), r_u5['add'](dbktoy, l7ivn, bkry8d - 0x1), flv7in = zx9hp;
        } else {
          if (flv7in != zur5w_) throw new Error('attribute value must after "="');l7ivn = otes['slice'](bkry8d, psx91h)['replace'](/&#?\w+;/g, a9hx1s), r_u5['add'](dbktoy, l7ivn, bkry8d), zatx['warning']('attribute "' + dbktoy + '" missed start quot(' + v6lfg4 + ')!!'), bkry8d = psx91h + 0x1, flv7in = zx9hp;
        }break;case '/':
        switch (flv7in) {case zs9eax:
            r_u5['setTagName'](otes['slice'](bkry8d, psx91h));case zx9hp:case zokybt:case zxezta:
            flv7in = zxezta, r_u5['closed'] = !0x0;case zur5w_:case zu025w:case zq37min:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return zatx['error']('unexpected end of input'), flv7in == zs9eax && r_u5['setTagName'](otes['slice'](bkry8d, psx91h)), psx91h;case '>':
        switch (flv7in) {case zs9eax:
            r_u5['setTagName'](otes['slice'](bkry8d, psx91h));case zx9hp:case zokybt:case zxezta:
            break;case zur5w_:case zu025w:
            l7ivn = otes['slice'](bkry8d, psx91h), '/' === l7ivn['slice'](-0x1) && (r_u5['closed'] = !0x0, l7ivn = l7ivn['slice'](0x0, -0x1));case zq37min:
            flv7in === zq37min && (l7ivn = dbktoy), flv7in == zur5w_ ? (zatx['warning']('attribute "' + l7ivn + '" missed quot(")!!'), r_u5['add'](dbktoy, l7ivn['replace'](/&#?\w+;/g, a9hx1s), bkry8d)) : ('http://www.w3.org/1999/xhtml' === oet[''] && l7ivn['match'](/^(?:disabled|checked|selected)$/i) || zatx['warning']('attribute "' + l7ivn + '" missed value!! "' + l7ivn + '" instead!!'), r_u5['add'](l7ivn, l7ivn, bkry8d));break;case z_w25ru:
            throw new Error('attribute value missed!!');}return psx91h;case '\u0080':
        v6lfg4 = '\x20';default:
        if ('\x20' >= v6lfg4) switch (flv7in) {case zs9eax:
            r_u5['setTagName'](otes['slice'](bkry8d, psx91h)), flv7in = zokybt;break;case zu025w:
            dbktoy = otes['slice'](bkry8d, psx91h), flv7in = zq37min;break;case zur5w_:
            var l7ivn = otes['slice'](bkry8d, psx91h)['replace'](/&#?\w+;/g, a9hx1s);zatx['warning']('attribute "' + l7ivn + '" missed quot(")!!'), r_u5['add'](dbktoy, l7ivn, bkry8d);case zx9hp:
            flv7in = zokybt;} else switch (flv7in) {case zq37min:
            {
              r_u5['tagName'];
            }'http://www.w3.org/1999/xhtml' === oet[''] && dbktoy['match'](/^(?:disabled|checked|selected)$/i) || zatx['warning']('attribute "' + dbktoy + '" missed value!! "' + dbktoy + '" instead2!!'), r_u5['add'](dbktoy, dbktoy, bkry8d), bkry8d = psx91h, flv7in = zu025w;break;case zx9hp:
            zatx['warning']('attribute space is required"' + dbktoy + '\x22!!');case zokybt:
            flv7in = zu025w, bkry8d = psx91h;break;case z_w25ru:
            flv7in = zur5w_, bkry8d = psx91h;break;case zxezta:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}psx91h++;
  }
}function zas9e(jqm3, i7nlm, lnv7m) {
  for (var r8kb_ = jqm3['tagName'], tdyoez = null, v6gpf4 = jqm3['length']; v6gpf4--;) {
    var etosz = jqm3[v6gpf4],
        nf4vl = etosz['qName'],
        nqi73m = etosz['value'],
        gflv46 = nf4vl['indexOf'](':');if (gflv46 > 0x0) var atsoz = etosz['prefix'] = nf4vl['slice'](0x0, gflv46),
        mni7v = nf4vl['slice'](gflv46 + 0x1),
        mj$3i = 'xmlns' === atsoz && mni7v;else mni7v = nf4vl, atsoz = null, mj$3i = 'xmlns' === nf4vl && '';etosz['localName'] = mni7v, mj$3i !== !0x1 && (null == tdyoez && (tdyoez = {}, zp6gf4v(lnv7m, lnv7m = {})), lnv7m[mj$3i] = tdyoez[mj$3i] = nqi73m, etosz['uri'] = 'http://www.w3.org/2000/xmlns/', i7nlm['startPrefixMapping'](mj$3i, nqi73m));
  }for (var v6gpf4 = jqm3['length']; v6gpf4--;) {
    etosz = jqm3[v6gpf4];var atsoz = etosz['prefix'];atsoz && ('xml' === atsoz && (etosz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== atsoz && (etosz['uri'] = lnv7m[atsoz || '']));
  }var gflv46 = r8kb_['indexOf'](':');gflv46 > 0x0 ? (atsoz = jqm3['prefix'] = r8kb_['slice'](0x0, gflv46), mni7v = jqm3['localName'] = r8kb_['slice'](gflv46 + 0x1)) : (atsoz = null, mni7v = jqm3['localName'] = r8kb_);var n3m = jqm3['uri'] = lnv7m[atsoz || ''];if (i7nlm['startElement'](n3m, mni7v, r8kb_, jqm3), !jqm3['closed']) return jqm3['currentNSMap'] = lnv7m, jqm3['localNSMap'] = tdyoez, !0x0;if (i7nlm['endElement'](n3m, mni7v, r8kb_), tdyoez) {
    for (atsoz in tdyoez) i7nlm['endPrefixMapping'](atsoz);
  }
}function zgf46pv(u05w_2, vl76n, mqn3i, esatxz, mlvi7n) {
  if (/^(?:script|textarea)$/i['test'](mqn3i)) {
    var r_58b2 = u05w_2['indexOf']('</' + mqn3i + '>', vl76n),
        by8kod = u05w_2['substring'](vl76n + 0x1, r_58b2);if (/[&<]/['test'](by8kod)) return (/^script$/i['test'](mqn3i) ? (mlvi7n['characters'](by8kod, 0x0, by8kod['length']), r_58b2) : (by8kod = by8kod['replace'](/&#?\w+;/g, esatxz), mlvi7n['characters'](by8kod, 0x0, by8kod['length']), r_58b2)
    );
  }return vl76n + 0x1;
}function zv6gl4f(zes9xa, tdoyez, asoez, v7mlin) {
  var xp19 = v7mlin[asoez];return null == xp19 && (xp19 = zes9xa['lastIndexOf']('</' + asoez + '>'), tdoyez > xp19 && (xp19 = zes9xa['lastIndexOf']('</' + asoez)), v7mlin[asoez] = xp19), tdoyez > xp19;
}function zp6gf4v(linvf, btdkyo) {
  for (var exz9s in linvf) btdkyo[exz9s] = linvf[exz9s];
}function zr8dkb(tyodb, x9hps, linv7m, mlvn7i) {
  var pg6vf = tyodb['charAt'](x9hps + 0x2);switch (pg6vf) {case '-':
      if ('-' === tyodb['charAt'](x9hps + 0x3)) {
        var l73n = tyodb['indexOf']('-->', x9hps + 0x4);return l73n > x9hps ? (linv7m['comment'](tyodb, x9hps + 0x4, l73n - x9hps - 0x4), l73n + 0x3) : (mlvn7i['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tyodb['substr'](x9hps + 0x3, 0x6)) {
        var l73n = tyodb['indexOf'](']]>', x9hps + 0x9);return linv7m['startCDATA'](), linv7m['characters'](tyodb, x9hps + 0x9, l73n - x9hps - 0x9), linv7m['endCDATA'](), l73n + 0x3;
      }var yod = zr_25u(tyodb, x9hps),
          stazo = yod['length'];if (stazo > 0x1 && /!doctype/i['test'](yod[0x0][0x0])) {
        var h19 = yod[0x1][0x0],
            kr_b8y = stazo > 0x3 && /^public$/i['test'](yod[0x2][0x0]) && yod[0x3][0x0],
            y_bkr = stazo > 0x4 && yod[0x4][0x0],
            ob8k = yod[stazo - 0x1];return linv7m['startDTD'](h19, kr_b8y && kr_b8y['replace'](/^(['"])(.*?)\1$/, '$2'), y_bkr && y_bkr['replace'](/^(['"])(.*?)\1$/, '$2')), linv7m['endDTD'](), ob8k['index'] + ob8k[0x0]['length'];
      }}return -0x1;
}function zl6gvf4(m3n7q, vl4g6f, rb852) {
  var hs9ax = m3n7q['indexOf']('?>', vl4g6f);if (hs9ax) {
    var zaoedt = m3n7q['substring'](vl4g6f, hs9ax)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (zaoedt) {
      {
        zaoedt[0x0]['length'];
      }return rb852['processingInstruction'](zaoedt[0x1], zaoedt[0x2]), hs9ax + 0x2;
    }return -0x1;
  }return -0x1;
}function zv64pgf() {}function zv7infl(dyztk, ph1g9x) {
  return dyztk['__proto__'] = ph1g9x, dyztk;
}function zr_25u(azexst, h9g14p) {
  var _u52rw,
      okbd8y = [],
      odeatz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (odeatz['lastIndex'] = h9g14p, odeatz['exec'](azexst); _u52rw = odeatz['exec'](azexst);) if (okbd8y['push'](_u52rw), _u52rw[0x1]) return okbd8y;
}var zxpsh1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ztsoeaz = new RegExp('[\\-\\.0-9' + zxpsh1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zo8kdy = new RegExp('^' + zxpsh1['source'] + ztsoeaz['source'] + '*(?::' + zxpsh1['source'] + ztsoeaz['source'] + '*)?$'),
    zs9eax = 0x0,
    zu025w = 0x1,
    zq37min = 0x2,
    z_w25ru = 0x3,
    zur5w_ = 0x4,
    zx9hp = 0x5,
    zokybt = 0x6,
    zxezta = 0x7;zodetza['prototype'] = { 'parse': function (b8r25, dytzko, koydb8) {
    var h46gfp = this['domBuilder'];h46gfp['startDocument'](), zp6gf4v(dytzko, dytzko = {}), zyrb8kd(b8r25, dytzko, koydb8, h46gfp, this['errorHandler']), h46gfp['endDocument']();
  } }, zv64pgf['prototype'] = { 'setTagName': function (r_25w) {
    if (!zo8kdy['test'](r_25w)) throw new Error('invalid tagName:' + r_25w);this['tagName'] = r_25w;
  }, 'add': function (zkto, lifvn, g9xp) {
    if (!zo8kdy['test'](zkto)) throw new Error('invalid attribute:' + zkto);this[this['length']++] = { 'qName': zkto, 'value': lifvn, 'offset': g9xp };
  }, 'length': 0x0, 'getLocalName': function ($3q7) {
    return this[$3q7]['localName'];
  }, 'getLocator': function (xasz) {
    return this[xasz]['locator'];
  }, 'getQName': function (u250_) {
    return this[u250_]['qName'];
  }, 'getURI': function (szx9) {
    return this[szx9]['uri'];
  }, 'getValue': function (f7vnl) {
    return this[f7vnl]['value'];
  } }, zv7infl({}, zv7infl['prototype']) instanceof zv7infl || (zv7infl = function (ahx19s, _8kb) {
  function n7fvil() {}n7fvil['prototype'] = _8kb, n7fvil = new n7fvil();for (_8kb in ahx19s) n7fvil[_8kb] = ahx19s[_8kb];return n7fvil;
}), exports['XMLReader'] = zodetza;