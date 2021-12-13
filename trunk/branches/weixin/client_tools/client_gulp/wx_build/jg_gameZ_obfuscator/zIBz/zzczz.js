var B = wx.$z;
function zgf4p6h() {}function zdkb8oy(qmn7, toeyd, gfhp4, p91gxh, h146) {
  function mn7il(odtey) {
    if (odtey > 0xffff) {
      odtey -= 0x10000;var gp641h = 0xd800 + (odtey >> 0xa),
          lvfin7 = 0xdc00 + (0x3ff & odtey);return String['fromCharCode'](gp641h, lvfin7);
    }return String['fromCharCode'](odtey);
  }function qj$im3(vnf76) {
    var u5_02w = vnf76['slice'](0x1, -0x1);return u5_02w in gfhp4 ? gfhp4[u5_02w] : '#' === u5_02w['charAt'](0x0) ? mn7il(parseInt(u5_02w['substr'](0x1)['replace']('x', '0x'))) : (h146['error']('entity not found:' + vnf76), vnf76);
  }function ktoybd(yk_r8b) {
    if (yk_r8b > tkydz) {
      var g6h4fp = qmn7['substring'](tkydz, yk_r8b)['replace'](/&#?\w+;/g, qj$im3);p149h && ea1x9(tkydz), p91gxh['characters'](g6h4fp, 0x0, yk_r8b - tkydz), tkydz = yk_r8b;
    }
  }function ea1x9(_krb, g14ph9) {
    for (; _krb >= sa9xh && (g14ph9 = $jq3i['exec'](qmn7));) ydoe = g14ph9['index'], sa9xh = ydoe + g14ph9[0x0]['length'], p149h['lineNumber']++;p149h['columnNumber'] = _krb - ydoe + 0x1;
  }for (var ydoe = 0x0, sa9xh = 0x0, $jq3i = /.*(?:\r\n?|\n)|.*$/g, p149h = p91gxh['locator'], xatsez = [{ 'currentNSMap': toeyd }], dtoez = {}, tkydz = 0x0;;) {
    try {
      var tezso = qmn7['indexOf']('<', tkydz);if (0x0 > tezso) {
        if (!qmn7['substr'](tkydz)['match'](/^\s*$/)) {
          var r_52w = p91gxh['doc'],
              p4vf6 = r_52w['createTextNode'](qmn7['substr'](tkydz));r_52w['appendChild'](p4vf6), p91gxh['currentElement'] = p4vf6;
        }return;
      }switch (tezso > tkydz && ktoybd(tezso), qmn7['charAt'](tezso + 0x1)) {case '/':
          var pf4h6g = qmn7['indexOf']('>', tezso + 0x3),
              inl = qmn7['substring'](tezso + 0x2, pf4h6g),
              v46 = xatsez['pop']();0x0 > pf4h6g ? (inl = qmn7['substring'](tezso + 0x2)['replace'](/[\s<].*/, ''), h146['error']('end tag name: ' + inl + ' is not complete:' + v46['tagName']), pf4h6g = tezso + 0x1 + inl['length']) : inl['match'](/\s</) && (inl = inl['replace'](/[\s<].*/, ''), h146['error']('end tag name: ' + inl + ' maybe not complete'), pf4h6g = tezso + 0x1 + inl['length']);var ae19s = v46['localNSMap'],
              p61g = v46['tagName'] == inl,
              px1sh = p61g || v46['tagName'] && v46['tagName']['toLowerCase']() == inl['toLowerCase']();if (px1sh) {
            if (p91gxh['endElement'](v46['uri'], v46['localName'], inl), ae19s) {
              for (var dotez in ae19s) p91gxh['endPrefixMapping'](dotez);
            }p61g || h146['fatalError']('end tag name: ' + inl + ' is not match the current start tagName:' + v46['tagName']);
          } else xatsez['push'](v46);pf4h6g++;break;case '?':
          p149h && ea1x9(tezso), pf4h6g = zybr8d(qmn7, tezso, p91gxh);break;case '!':
          p149h && ea1x9(tezso), pf4h6g = zdoykbt(qmn7, tezso, p91gxh, h146);break;default:
          p149h && ea1x9(tezso);var hgf46 = new zp914(),
              gxp91h = xatsez[xatsez['length'] - 0x1]['currentNSMap'],
              pf4h6g = zn3mil(qmn7, tezso, hgf46, gxp91h, qj$im3, h146),
              rw_u5 = hgf46['length'];if (!hgf46['closed'] && zaesxzt(qmn7, pf4h6g, hgf46['tagName'], dtoez) && (hgf46['closed'] = !0x0, gfhp4['nbsp'] || h146['warning']('unclosed xml attribute')), p149h && rw_u5) {
            for (var $mqi3j = zp9sxh(p149h, {}), n7viml = 0x0; rw_u5 > n7viml; n7viml++) {
              var seaozt = hgf46[n7viml];ea1x9(seaozt['offset']), seaozt['locator'] = zp9sxh(p149h, {});
            }p91gxh['locator'] = $mqi3j, zoeyzd(hgf46, p91gxh, gxp91h) && xatsez['push'](hgf46), p91gxh['locator'] = p149h;
          } else zoeyzd(hgf46, p91gxh, gxp91h) && xatsez['push'](hgf46);'http://www.w3.org/1999/xhtml' !== hgf46['uri'] || hgf46['closed'] ? pf4h6g++ : pf4h6g = zoytdb(qmn7, pf4h6g, hgf46['tagName'], qj$im3, p91gxh);}
    } catch (u25w0) {
      h146['error']('element parse error: ' + u25w0), pf4h6g = -0x1;
    }pf4h6g > tkydz ? tkydz = pf4h6g : ktoybd(Math['max'](tezso, tkydz) + 0x1);
  }
}function zp9sxh(k8yrdb, kztoyd) {
  return kztoyd['lineNumber'] = k8yrdb['lineNumber'], kztoyd['columnNumber'] = k8yrdb['columnNumber'], kztoyd;
}function zn3mil(nl7iv, br8kyd, hs1px9, oztyde, _2r, gh614) {
  for (var zeasx, kr8_b5, zestao = ++br8kyd, exazst = zlnmiv;;) {
    var mil7v = nl7iv['charAt'](zestao);switch (mil7v) {case '=':
        if (exazst === zyk8bd) zeasx = nl7iv['slice'](br8kyd, zestao), exazst = zqi3$m;else {
          if (exazst !== ztezado) throw new Error('attribute equal must after attrName');exazst = zqi3$m;
        }break;case '\x27':case '\x22':
        if (exazst === zqi3$m || exazst === zyk8bd) {
          if (exazst === zyk8bd && (gh614['warning']('attribute value must after "="'), zeasx = nl7iv['slice'](br8kyd, zestao)), br8kyd = zestao + 0x1, zestao = nl7iv['indexOf'](mil7v, br8kyd), !(zestao > 0x0)) throw new Error('attribute value no end \'' + mil7v + '\' match');kr8_b5 = nl7iv['slice'](br8kyd, zestao)['replace'](/&#?\w+;/g, _2r), hs1px9['add'](zeasx, kr8_b5, br8kyd - 0x1), exazst = zxgph;
        } else {
          if (exazst != zgpfh46) throw new Error('attribute value must after "="');kr8_b5 = nl7iv['slice'](br8kyd, zestao)['replace'](/&#?\w+;/g, _2r), hs1px9['add'](zeasx, kr8_b5, br8kyd), gh614['warning']('attribute "' + zeasx + '" missed start quot(' + mil7v + ')!!'), br8kyd = zestao + 0x1, exazst = zxgph;
        }break;case '/':
        switch (exazst) {case zlnmiv:
            hs1px9['setTagName'](nl7iv['slice'](br8kyd, zestao));case zxgph:case zxa91sh:case zeotazs:
            exazst = zeotazs, hs1px9['closed'] = !0x0;case zgpfh46:case zyk8bd:case ztezado:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gh614['error']('unexpected end of input'), exazst == zlnmiv && hs1px9['setTagName'](nl7iv['slice'](br8kyd, zestao)), zestao;case '>':
        switch (exazst) {case zlnmiv:
            hs1px9['setTagName'](nl7iv['slice'](br8kyd, zestao));case zxgph:case zxa91sh:case zeotazs:
            break;case zgpfh46:case zyk8bd:
            kr8_b5 = nl7iv['slice'](br8kyd, zestao), '/' === kr8_b5['slice'](-0x1) && (hs1px9['closed'] = !0x0, kr8_b5 = kr8_b5['slice'](0x0, -0x1));case ztezado:
            exazst === ztezado && (kr8_b5 = zeasx), exazst == zgpfh46 ? (gh614['warning']('attribute "' + kr8_b5 + '" missed quot(")!!'), hs1px9['add'](zeasx, kr8_b5['replace'](/&#?\w+;/g, _2r), br8kyd)) : ('http://www.w3.org/1999/xhtml' === oztyde[''] && kr8_b5['match'](/^(?:disabled|checked|selected)$/i) || gh614['warning']('attribute "' + kr8_b5 + '" missed value!! "' + kr8_b5 + '" instead!!'), hs1px9['add'](kr8_b5, kr8_b5, br8kyd));break;case zqi3$m:
            throw new Error('attribute value missed!!');}return zestao;case '\u0080':
        mil7v = '\x20';default:
        if ('\x20' >= mil7v) switch (exazst) {case zlnmiv:
            hs1px9['setTagName'](nl7iv['slice'](br8kyd, zestao)), exazst = zxa91sh;break;case zyk8bd:
            zeasx = nl7iv['slice'](br8kyd, zestao), exazst = ztezado;break;case zgpfh46:
            var kr8_b5 = nl7iv['slice'](br8kyd, zestao)['replace'](/&#?\w+;/g, _2r);gh614['warning']('attribute "' + kr8_b5 + '" missed quot(")!!'), hs1px9['add'](zeasx, kr8_b5, br8kyd);case zxgph:
            exazst = zxa91sh;} else switch (exazst) {case ztezado:
            {
              hs1px9['tagName'];
            }'http://www.w3.org/1999/xhtml' === oztyde[''] && zeasx['match'](/^(?:disabled|checked|selected)$/i) || gh614['warning']('attribute "' + zeasx + '" missed value!! "' + zeasx + '" instead2!!'), hs1px9['add'](zeasx, zeasx, br8kyd), br8kyd = zestao, exazst = zyk8bd;break;case zxgph:
            gh614['warning']('attribute space is required"' + zeasx + '\x22!!');case zxa91sh:
            exazst = zyk8bd, br8kyd = zestao;break;case zqi3$m:
            exazst = zgpfh46, br8kyd = zestao;break;case zeotazs:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zestao++;
  }
}function zoeyzd(_5k8br, vgp64, by8rk_) {
  for (var mqj3 = _5k8br['tagName'], b_r28 = null, oteza = _5k8br['length']; oteza--;) {
    var deoaz = _5k8br[oteza],
        n7m3il = deoaz['qName'],
        pg64 = deoaz['value'],
        v6nf = n7m3il['indexOf'](':');if (v6nf > 0x0) var ah1xs9 = deoaz['prefix'] = n7m3il['slice'](0x0, v6nf),
        g46fp = n7m3il['slice'](v6nf + 0x1),
        s9xae = 'xmlns' === ah1xs9 && g46fp;else g46fp = n7m3il, ah1xs9 = null, s9xae = 'xmlns' === n7m3il && '';deoaz['localName'] = g46fp, s9xae !== !0x1 && (null == b_r28 && (b_r28 = {}, zs9aezx(by8rk_, by8rk_ = {})), by8rk_[s9xae] = b_r28[s9xae] = pg64, deoaz['uri'] = 'http://www.w3.org/2000/xmlns/', vgp64['startPrefixMapping'](s9xae, pg64));
  }for (var oteza = _5k8br['length']; oteza--;) {
    deoaz = _5k8br[oteza];var ah1xs9 = deoaz['prefix'];ah1xs9 && ('xml' === ah1xs9 && (deoaz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ah1xs9 && (deoaz['uri'] = by8rk_[ah1xs9 || '']));
  }var v6nf = mqj3['indexOf'](':');v6nf > 0x0 ? (ah1xs9 = _5k8br['prefix'] = mqj3['slice'](0x0, v6nf), g46fp = _5k8br['localName'] = mqj3['slice'](v6nf + 0x1)) : (ah1xs9 = null, g46fp = _5k8br['localName'] = mqj3);var tozes = _5k8br['uri'] = by8rk_[ah1xs9 || ''];if (vgp64['startElement'](tozes, g46fp, mqj3, _5k8br), !_5k8br['closed']) return _5k8br['currentNSMap'] = by8rk_, _5k8br['localNSMap'] = b_r28, !0x0;if (vgp64['endElement'](tozes, g46fp, mqj3), b_r28) {
    for (ah1xs9 in b_r28) vgp64['endPrefixMapping'](ah1xs9);
  }
}function zoytdb(n3im, m7iln, x9p1hs, oeadt, h9p1g) {
  if (/^(?:script|textarea)$/i['test'](x9p1hs)) {
    var oatzse = n3im['indexOf']('</' + x9p1hs + '>', m7iln),
        rk8bdy = n3im['substring'](m7iln + 0x1, oatzse);if (/[&<]/['test'](rk8bdy)) return (/^script$/i['test'](x9p1hs) ? (h9p1g['characters'](rk8bdy, 0x0, rk8bdy['length']), oatzse) : (rk8bdy = rk8bdy['replace'](/&#?\w+;/g, oeadt), h9p1g['characters'](rk8bdy, 0x0, rk8bdy['length']), oatzse)
    );
  }return m7iln + 0x1;
}function zaesxzt(rbdk8, otdk, pxhg9, wu5_0) {
  var ahxs91 = wu5_0[pxhg9];return null == ahxs91 && (ahxs91 = rbdk8['lastIndexOf']('</' + pxhg9 + '>'), otdk > ahxs91 && (ahxs91 = rbdk8['lastIndexOf']('</' + pxhg9)), wu5_0[pxhg9] = ahxs91), otdk > ahxs91;
}function zs9aezx(v6lf4n, pghx91) {
  for (var g46ph in v6lf4n) pghx91[g46ph] = v6lf4n[g46ph];
}function zdoykbt(tyeoz, okbt, tzoyed, tbyok) {
  var n7ivl = tyeoz['charAt'](okbt + 0x2);switch (n7ivl) {case '-':
      if ('-' === tyeoz['charAt'](okbt + 0x3)) {
        var _ru852 = tyeoz['indexOf']('-->', okbt + 0x4);return _ru852 > okbt ? (tzoyed['comment'](tyeoz, okbt + 0x4, _ru852 - okbt - 0x4), _ru852 + 0x3) : (tbyok['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tyeoz['substr'](okbt + 0x3, 0x6)) {
        var _ru852 = tyeoz['indexOf'](']]>', okbt + 0x9);return tzoyed['startCDATA'](), tzoyed['characters'](tyeoz, okbt + 0x9, _ru852 - okbt - 0x9), tzoyed['endCDATA'](), _ru852 + 0x3;
      }var sae9z = zdkyrb(tyeoz, okbt),
          a1shx9 = sae9z['length'];if (a1shx9 > 0x1 && /!doctype/i['test'](sae9z[0x0][0x0])) {
        var vm7inl = sae9z[0x1][0x0],
            h14g6 = a1shx9 > 0x3 && /^public$/i['test'](sae9z[0x2][0x0]) && sae9z[0x3][0x0],
            ah1s9 = a1shx9 > 0x4 && sae9z[0x4][0x0],
            hpg16 = sae9z[a1shx9 - 0x1];return tzoyed['startDTD'](vm7inl, h14g6 && h14g6['replace'](/^(['"])(.*?)\1$/, '$2'), ah1s9 && ah1s9['replace'](/^(['"])(.*?)\1$/, '$2')), tzoyed['endDTD'](), hpg16['index'] + hpg16[0x0]['length'];
      }}return -0x1;
}function zybr8d(deyzo, vpg4, dtoaez) {
  var qm3j = deyzo['indexOf']('?>', vpg4);if (qm3j) {
    var hsp91x = deyzo['substring'](vpg4, qm3j)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hsp91x) {
      {
        hsp91x[0x0]['length'];
      }return dtoaez['processingInstruction'](hsp91x[0x1], hsp91x[0x2]), qm3j + 0x2;
    }return -0x1;
  }return -0x1;
}function zp914() {}function zivnf(y8dr, dea) {
  return y8dr['__proto__'] = dea, y8dr;
}function zdkyrb(o8ykb, m3nli7) {
  var xhp1,
      qmji$3 = [],
      s1h = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (s1h['lastIndex'] = m3nli7, s1h['exec'](o8ykb); xhp1 = s1h['exec'](o8ykb);) if (qmji$3['push'](xhp1), xhp1[0x1]) return qmji$3;
}var zmi37$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    z_r28 = new RegExp('[\\-\\.0-9' + zmi37$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    znflv7i = new RegExp('^' + zmi37$['source'] + z_r28['source'] + '*(?::' + zmi37$['source'] + z_r28['source'] + '*)?$'),
    zlnmiv = 0x0,
    zyk8bd = 0x1,
    ztezado = 0x2,
    zqi3$m = 0x3,
    zgpfh46 = 0x4,
    zxgph = 0x5,
    zxa91sh = 0x6,
    zeotazs = 0x7;zgf4p6h['prototype'] = { 'parse': function (pv4f, v6gpf, x9gh1) {
    var m3nl7i = this['domBuilder'];m3nl7i['startDocument'](), zs9aezx(v6gpf, v6gpf = {}), zdkb8oy(pv4f, v6gpf, x9gh1, m3nl7i, this['errorHandler']), m3nl7i['endDocument']();
  } }, zp914['prototype'] = { 'setTagName': function (tozsa) {
    if (!znflv7i['test'](tozsa)) throw new Error('invalid tagName:' + tozsa);this['tagName'] = tozsa;
  }, 'add': function (teax, edotaz, mi7vn) {
    if (!znflv7i['test'](teax)) throw new Error('invalid attribute:' + teax);this[this['length']++] = { 'qName': teax, 'value': edotaz, 'offset': mi7vn };
  }, 'length': 0x0, 'getLocalName': function (mvl7i) {
    return this[mvl7i]['localName'];
  }, 'getLocator': function (vn7ilm) {
    return this[vn7ilm]['locator'];
  }, 'getQName': function (drykb) {
    return this[drykb]['qName'];
  }, 'getURI': function ($m3j) {
    return this[$m3j]['uri'];
  }, 'getValue': function (ghp) {
    return this[ghp]['value'];
  } }, zivnf({}, zivnf['prototype']) instanceof zivnf || (zivnf = function (r58_k, rw52u) {
  function dato() {}dato['prototype'] = rw52u, dato = new dato();for (rw52u in r58_k) dato[rw52u] = r58_k[rw52u];return dato;
}), exports['XMLReader'] = zgf4p6h;