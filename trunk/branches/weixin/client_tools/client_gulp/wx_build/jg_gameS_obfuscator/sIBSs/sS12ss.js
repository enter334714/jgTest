var K = wx.$S;
function sau$ed() {}function sjpgq1(w_9c0k, yhd$a5, erou3, p18qj, had5sy) {
  function day5$h(c9zk0w) {
    if (c9zk0w > 0xffff) {
      c9zk0w -= 0x10000;var nxti2m = 0xd800 + (c9zk0w >> 0xa),
          $5hda = 0xdc00 + (0x3ff & c9zk0w);return String['fromCharCode'](nxti2m, $5hda);
    }return String['fromCharCode'](c9zk0w);
  }function imc_x2(_cxm2i) {
    var hgpqys = _cxm2i['slice'](0x1, -0x1);return hgpqys in erou3 ? erou3[hgpqys] : '#' === hgpqys['charAt'](0x0) ? day5$h(parseInt(hgpqys['substr'](0x1)['replace']('x', '0x'))) : (had5sy['error']('entity not found:' + _cxm2i), _cxm2i);
  }function h5$d4a($eu4ad) {
    if ($eu4ad > $4a5) {
      var z9ovk3 = w_9c0k['substring']($4a5, $eu4ad)['replace'](/&#?\w+;/g, imc_x2);$3u4re && k9z3ov($4a5), p18qj['characters'](z9ovk3, 0x0, $eu4ad - $4a5), $4a5 = $eu4ad;
    }
  }function k9z3ov(o3zuvr, hsdp5y) {
    for (; o3zuvr >= t7x2mn && (hsdp5y = eu$ad4['exec'](w_9c0k));) xmn72 = hsdp5y['index'], t7x2mn = xmn72 + hsdp5y[0x0]['length'], $3u4re['lineNumber']++;$3u4re['columnNumber'] = o3zuvr - xmn72 + 0x1;
  }for (var xmn72 = 0x0, t7x2mn = 0x0, eu$ad4 = /.*(?:\r\n?|\n)|.*$/g, $3u4re = p18qj['locator'], sygqjp = [{ 'currentNSMap': yhd$a5 }], uar4e = {}, $4a5 = 0x0;;) {
    try {
      var xi_0mc = w_9c0k['indexOf']('<', $4a5);if (0x0 > xi_0mc) {
        if (!w_9c0k['substr']($4a5)['match'](/^\s*$/)) {
          var zkov = p18qj['doc'],
              n2imxt = zkov['createTextNode'](w_9c0k['substr']($4a5));zkov['appendChild'](n2imxt), p18qj['currentElement'] = n2imxt;
        }return;
      }switch (xi_0mc > $4a5 && h5$d4a(xi_0mc), w_9c0k['charAt'](xi_0mc + 0x1)) {case '/':
          var qgbj81 = w_9c0k['indexOf']('>', xi_0mc + 0x3),
              _9iw0c = w_9c0k['substring'](xi_0mc + 0x2, qgbj81),
              iw9c0_ = sygqjp['pop']();0x0 > qgbj81 ? (_9iw0c = w_9c0k['substring'](xi_0mc + 0x2)['replace'](/[\s<].*/, ''), had5sy['error']('end tag name: ' + _9iw0c + ' is not complete:' + iw9c0_['tagName']), qgbj81 = xi_0mc + 0x1 + _9iw0c['length']) : _9iw0c['match'](/\s</) && (_9iw0c = _9iw0c['replace'](/[\s<].*/, ''), had5sy['error']('end tag name: ' + _9iw0c + ' maybe not complete'), qgbj81 = xi_0mc + 0x1 + _9iw0c['length']);var pq8g = iw9c0_['localNSMap'],
              fb68 = iw9c0_['tagName'] == _9iw0c,
              yps5 = fb68 || iw9c0_['tagName'] && iw9c0_['tagName']['toLowerCase']() == _9iw0c['toLowerCase']();if (yps5) {
            if (p18qj['endElement'](iw9c0_['uri'], iw9c0_['localName'], _9iw0c), pq8g) {
              for (var w0ci in pq8g) p18qj['endPrefixMapping'](w0ci);
            }fb68 || had5sy['fatalError']('end tag name: ' + _9iw0c + ' is not match the current start tagName:' + iw9c0_['tagName']);
          } else sygqjp['push'](iw9c0_);qgbj81++;break;case '?':
          $3u4re && k9z3ov(xi_0mc), qgbj81 = seda5$4(w_9c0k, xi_0mc, p18qj);break;case '!':
          $3u4re && k9z3ov(xi_0mc), qgbj81 = syqhps(w_9c0k, xi_0mc, p18qj, had5sy);break;default:
          $3u4re && k9z3ov(xi_0mc);var dah5sy = new sps5hq(),
              z3rovk = sygqjp[sygqjp['length'] - 0x1]['currentNSMap'],
              qgbj81 = s$5a4e(w_9c0k, xi_0mc, dah5sy, z3rovk, imc_x2, had5sy),
              cmx0i = dah5sy['length'];if (!dah5sy['closed'] && sde5a4(w_9c0k, qgbj81, dah5sy['tagName'], uar4e) && (dah5sy['closed'] = !0x0, erou3['nbsp'] || had5sy['warning']('unclosed xml attribute')), $3u4re && cmx0i) {
            for (var h5 = sa$eu4d($3u4re, {}), bf18 = 0x0; cmx0i > bf18; bf18++) {
              var orkv3 = dah5sy[bf18];k9z3ov(orkv3['offset']), orkv3['locator'] = sa$eu4d($3u4re, {});
            }p18qj['locator'] = h5, skz3vr(dah5sy, p18qj, z3rovk) && sygqjp['push'](dah5sy), p18qj['locator'] = $3u4re;
          } else skz3vr(dah5sy, p18qj, z3rovk) && sygqjp['push'](dah5sy);'http://www.w3.org/1999/xhtml' !== dah5sy['uri'] || dah5sy['closed'] ? qgbj81++ : qgbj81 = su3r4e(w_9c0k, qgbj81, dah5sy['tagName'], imc_x2, p18qj);}
    } catch (v3oz) {
      had5sy['error']('element parse error: ' + v3oz), qgbj81 = -0x1;
    }qgbj81 > $4a5 ? $4a5 = qgbj81 : h5$d4a(Math['max'](xi_0mc, $4a5) + 0x1);
  }
}function sa$eu4d(l68b1f, u$ea) {
  return u$ea['lineNumber'] = l68b1f['lineNumber'], u$ea['columnNumber'] = l68b1f['columnNumber'], u$ea;
}function s$5a4e($a5dyh, kv9zw0, zw9ck, bg618j, ur4ae, gj1b8) {
  for (var x_wic, c9k_w, hdays5 = ++kv9zw0, z09 = skvzo93;;) {
    var r3zkv = $a5dyh['charAt'](hdays5);switch (r3zkv) {case '=':
        if (z09 === sgb68) x_wic = $a5dyh['slice'](kv9zw0, hdays5), z09 = sqpgy;else {
          if (z09 !== shsygpq) throw new Error('attribute equal must after attrName');z09 = sqpgy;
        }break;case '\x27':case '\x22':
        if (z09 === sqpgy || z09 === sgb68) {
          if (z09 === sgb68 && (gj1b8['warning']('attribute value must after "="'), x_wic = $a5dyh['slice'](kv9zw0, hdays5)), kv9zw0 = hdays5 + 0x1, hdays5 = $a5dyh['indexOf'](r3zkv, kv9zw0), !(hdays5 > 0x0)) throw new Error('attribute value no end \'' + r3zkv + '\' match');c9k_w = $a5dyh['slice'](kv9zw0, hdays5)['replace'](/&#?\w+;/g, ur4ae), zw9ck['add'](x_wic, c9k_w, kv9zw0 - 0x1), z09 = spq5hys;
        } else {
          if (z09 != sspg1) throw new Error('attribute value must after "="');c9k_w = $a5dyh['slice'](kv9zw0, hdays5)['replace'](/&#?\w+;/g, ur4ae), zw9ck['add'](x_wic, c9k_w, kv9zw0), gj1b8['warning']('attribute "' + x_wic + '" missed start quot(' + r3zkv + ')!!'), kv9zw0 = hdays5 + 0x1, z09 = spq5hys;
        }break;case '/':
        switch (z09) {case skvzo93:
            zw9ck['setTagName']($a5dyh['slice'](kv9zw0, hdays5));case spq5hys:case si2xmnt:case sjqpgy:
            z09 = sjqpgy, zw9ck['closed'] = !0x0;case sspg1:case sgb68:case shsygpq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gj1b8['error']('unexpected end of input'), z09 == skvzo93 && zw9ck['setTagName']($a5dyh['slice'](kv9zw0, hdays5)), hdays5;case '>':
        switch (z09) {case skvzo93:
            zw9ck['setTagName']($a5dyh['slice'](kv9zw0, hdays5));case spq5hys:case si2xmnt:case sjqpgy:
            break;case sspg1:case sgb68:
            c9k_w = $a5dyh['slice'](kv9zw0, hdays5), '/' === c9k_w['slice'](-0x1) && (zw9ck['closed'] = !0x0, c9k_w = c9k_w['slice'](0x0, -0x1));case shsygpq:
            z09 === shsygpq && (c9k_w = x_wic), z09 == sspg1 ? (gj1b8['warning']('attribute "' + c9k_w + '" missed quot(")!!'), zw9ck['add'](x_wic, c9k_w['replace'](/&#?\w+;/g, ur4ae), kv9zw0)) : ('http://www.w3.org/1999/xhtml' === bg618j[''] && c9k_w['match'](/^(?:disabled|checked|selected)$/i) || gj1b8['warning']('attribute "' + c9k_w + '" missed value!! "' + c9k_w + '" instead!!'), zw9ck['add'](c9k_w, c9k_w, kv9zw0));break;case sqpgy:
            throw new Error('attribute value missed!!');}return hdays5;case '\u0080':
        r3zkv = '\x20';default:
        if ('\x20' >= r3zkv) switch (z09) {case skvzo93:
            zw9ck['setTagName']($a5dyh['slice'](kv9zw0, hdays5)), z09 = si2xmnt;break;case sgb68:
            x_wic = $a5dyh['slice'](kv9zw0, hdays5), z09 = shsygpq;break;case sspg1:
            var c9k_w = $a5dyh['slice'](kv9zw0, hdays5)['replace'](/&#?\w+;/g, ur4ae);gj1b8['warning']('attribute "' + c9k_w + '" missed quot(")!!'), zw9ck['add'](x_wic, c9k_w, kv9zw0);case spq5hys:
            z09 = si2xmnt;} else switch (z09) {case shsygpq:
            {
              zw9ck['tagName'];
            }'http://www.w3.org/1999/xhtml' === bg618j[''] && x_wic['match'](/^(?:disabled|checked|selected)$/i) || gj1b8['warning']('attribute "' + x_wic + '" missed value!! "' + x_wic + '" instead2!!'), zw9ck['add'](x_wic, x_wic, kv9zw0), kv9zw0 = hdays5, z09 = sgb68;break;case spq5hys:
            gj1b8['warning']('attribute space is required"' + x_wic + '\x22!!');case si2xmnt:
            z09 = sgb68, kv9zw0 = hdays5;break;case sqpgy:
            z09 = sspg1, kv9zw0 = hdays5;break;case sjqpgy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hdays5++;
  }
}function skz3vr(x_c2mi, _w9c0i, $5ea4d) {
  for (var zrv3ko = x_c2mi['tagName'], wc9_i = null, i2mtn = x_c2mi['length']; i2mtn--;) {
    var vz39ok = x_c2mi[i2mtn],
        vzw90k = vz39ok['qName'],
        a$dhy5 = vz39ok['value'],
        o3vz = vzw90k['indexOf'](':');if (o3vz > 0x0) var _c9w = vz39ok['prefix'] = vzw90k['slice'](0x0, o3vz),
        eaur = vzw90k['slice'](o3vz + 0x1),
        kz90v = 'xmlns' === _c9w && eaur;else eaur = vzw90k, _c9w = null, kz90v = 'xmlns' === vzw90k && '';vz39ok['localName'] = eaur, kz90v !== !0x1 && (null == wc9_i && (wc9_i = {}, sjgspq($5ea4d, $5ea4d = {})), $5ea4d[kz90v] = wc9_i[kz90v] = a$dhy5, vz39ok['uri'] = 'http://www.w3.org/2000/xmlns/', _w9c0i['startPrefixMapping'](kz90v, a$dhy5));
  }for (var i2mtn = x_c2mi['length']; i2mtn--;) {
    vz39ok = x_c2mi[i2mtn];var _c9w = vz39ok['prefix'];_c9w && ('xml' === _c9w && (vz39ok['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _c9w && (vz39ok['uri'] = $5ea4d[_c9w || '']));
  }var o3vz = zrv3ko['indexOf'](':');o3vz > 0x0 ? (_c9w = x_c2mi['prefix'] = zrv3ko['slice'](0x0, o3vz), eaur = x_c2mi['localName'] = zrv3ko['slice'](o3vz + 0x1)) : (_c9w = null, eaur = x_c2mi['localName'] = zrv3ko);var u3eo4 = x_c2mi['uri'] = $5ea4d[_c9w || ''];if (_w9c0i['startElement'](u3eo4, eaur, zrv3ko, x_c2mi), !x_c2mi['closed']) return x_c2mi['currentNSMap'] = $5ea4d, x_c2mi['localNSMap'] = wc9_i, !0x0;if (_w9c0i['endElement'](u3eo4, eaur, zrv3ko), wc9_i) {
    for (_c9w in wc9_i) _w9c0i['endPrefixMapping'](_c9w);
  }
}function su3r4e(gyps, ad5$hy, r3e$4u, u3oz, f6) {
  if (/^(?:script|textarea)$/i['test'](r3e$4u)) {
    var mn2ixt = gyps['indexOf']('</' + r3e$4u + '>', ad5$hy),
        kvz39o = gyps['substring'](ad5$hy + 0x1, mn2ixt);if (/[&<]/['test'](kvz39o)) return (/^script$/i['test'](r3e$4u) ? (f6['characters'](kvz39o, 0x0, kvz39o['length']), mn2ixt) : (kvz39o = kvz39o['replace'](/&#?\w+;/g, u3oz), f6['characters'](kvz39o, 0x0, kvz39o['length']), mn2ixt)
    );
  }return ad5$hy + 0x1;
}function sde5a4(reu43$, wk9zov, ruv, u34eo) {
  var e34rou = u34eo[ruv];return null == e34rou && (e34rou = reu43$['lastIndexOf']('</' + ruv + '>'), wk9zov > e34rou && (e34rou = reu43$['lastIndexOf']('</' + ruv)), u34eo[ruv] = e34rou), wk9zov > e34rou;
}function sjgspq(ix_w, wi0c_9) {
  for (var a4u$de in ix_w) wi0c_9[a4u$de] = ix_w[a4u$de];
}function syqhps(sdy5h, _ixcm, gb8j16, dphs) {
  var bg8q1j = sdy5h['charAt'](_ixcm + 0x2);switch (bg8q1j) {case '-':
      if ('-' === sdy5h['charAt'](_ixcm + 0x3)) {
        var pqj1sg = sdy5h['indexOf']('-->', _ixcm + 0x4);return pqj1sg > _ixcm ? (gb8j16['comment'](sdy5h, _ixcm + 0x4, pqj1sg - _ixcm - 0x4), pqj1sg + 0x3) : (dphs['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == sdy5h['substr'](_ixcm + 0x3, 0x6)) {
        var pqj1sg = sdy5h['indexOf'](']]>', _ixcm + 0x9);return gb8j16['startCDATA'](), gb8j16['characters'](sdy5h, _ixcm + 0x9, pqj1sg - _ixcm - 0x9), gb8j16['endCDATA'](), pqj1sg + 0x3;
      }var rk3 = sday5hs(sdy5h, _ixcm),
          jpq = rk3['length'];if (jpq > 0x1 && /!doctype/i['test'](rk3[0x0][0x0])) {
        var mcxi0_ = rk3[0x1][0x0],
            ciw90_ = jpq > 0x3 && /^public$/i['test'](rk3[0x2][0x0]) && rk3[0x3][0x0],
            rov3k = jpq > 0x4 && rk3[0x4][0x0],
            psgjq1 = rk3[jpq - 0x1];return gb8j16['startDTD'](mcxi0_, ciw90_ && ciw90_['replace'](/^(['"])(.*?)\1$/, '$2'), rov3k && rov3k['replace'](/^(['"])(.*?)\1$/, '$2')), gb8j16['endDTD'](), psgjq1['index'] + psgjq1[0x0]['length'];
      }}return -0x1;
}function seda5$4(yqg, kr3oz, c09zkw) {
  var kov3zr = yqg['indexOf']('?>', kr3oz);if (kov3zr) {
    var e$4uar = yqg['substring'](kr3oz, kov3zr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (e$4uar) {
      {
        e$4uar[0x0]['length'];
      }return c09zkw['processingInstruction'](e$4uar[0x1], e$4uar[0x2]), kov3zr + 0x2;
    }return -0x1;
  }return -0x1;
}function sps5hq() {}function sua4$de(z3rvuo, jygps) {
  return z3rvuo['__proto__'] = jygps, z3rvuo;
}function sday5hs(ypjsg, mtnix2) {
  var aysh5,
      eur4o3 = [],
      k3z9vo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (k3z9vo['lastIndex'] = mtnix2, k3z9vo['exec'](ypjsg); aysh5 = k3z9vo['exec'](ypjsg);) if (eur4o3['push'](aysh5), aysh5[0x1]) return eur4o3;
}var sy5dpsh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    sru3$e = new RegExp('[\\-\\.0-9' + sy5dpsh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    sfb6l81 = new RegExp('^' + sy5dpsh['source'] + sru3$e['source'] + '*(?::' + sy5dpsh['source'] + sru3$e['source'] + '*)?$'),
    skvzo93 = 0x0,
    sgb68 = 0x1,
    shsygpq = 0x2,
    sqpgy = 0x3,
    sspg1 = 0x4,
    spq5hys = 0x5,
    si2xmnt = 0x6,
    sjqpgy = 0x7;sau$ed['prototype'] = { 'parse': function (tmnx27, g68b1j, h4) {
    var sjqyg = this['domBuilder'];sjqyg['startDocument'](), sjgspq(g68b1j, g68b1j = {}), sjpgq1(tmnx27, g68b1j, h4, sjqyg, this['errorHandler']), sjqyg['endDocument']();
  } }, sps5hq['prototype'] = { 'setTagName': function (phgys) {
    if (!sfb6l81['test'](phgys)) throw new Error('invalid tagName:' + phgys);this['tagName'] = phgys;
  }, 'add': function (xntm7, a$hd54, pqjy) {
    if (!sfb6l81['test'](xntm7)) throw new Error('invalid attribute:' + xntm7);this[this['length']++] = { 'qName': xntm7, 'value': a$hd54, 'offset': pqjy };
  }, 'length': 0x0, 'getLocalName': function (c2x_m) {
    return this[c2x_m]['localName'];
  }, 'getLocator': function (e$aru) {
    return this[e$aru]['locator'];
  }, 'getQName': function (vour) {
    return this[vour]['qName'];
  }, 'getURI': function (x2cmi) {
    return this[x2cmi]['uri'];
  }, 'getValue': function (i_0c) {
    return this[i_0c]['value'];
  } }, sua4$de({}, sua4$de['prototype']) instanceof sua4$de || (sua4$de = function (xti2m, o3kv) {
  function sghp() {}sghp['prototype'] = o3kv, sghp = new sghp();for (o3kv in xti2m) sghp[o3kv] = xti2m[o3kv];return sghp;
}), exports['XMLReader'] = sau$ed;