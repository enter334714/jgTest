var v = wx.$d;
function za94px() {}function zw3kzy(mot0, om$t0, _2k3v, ahq, ew7crn) {
  function px954a(z_kv32) {
    if (z_kv32 > 0xffff) {
      z_kv32 -= 0x10000;var _1ib = 0xd800 + (z_kv32 >> 0xa),
          ubfd8 = 0xdc00 + (0x3ff & z_kv32);return String['fromCharCode'](_1ib, ubfd8);
    }return String['fromCharCode'](z_kv32);
  }function lifu8($o0hq) {
    var _16zv = $o0hq['slice'](0x1, -0x1);return _16zv in _2k3v ? _2k3v[_16zv] : '#' === _16zv['charAt'](0x0) ? px954a(parseInt(_16zv['substr'](0x1)['replace']('x', '0x'))) : (ew7crn['error']('entity not found:' + $o0hq), $o0hq);
  }function x4a9p5(q4ohp) {
    if (q4ohp > i_61b) {
      var ecrjn7 = mot0['substring'](i_61b, q4ohp)['replace'](/&#?\w+;/g, lifu8);nejc && necr7j(i_61b), ahq['characters'](ecrjn7, 0x0, q4ohp - i_61b), i_61b = q4ohp;
    }
  }function necr7j(u95dx, d8ulf) {
    for (; u95dx >= aq45xp && (d8ulf = o0m$t['exec'](mot0));) l6ib18 = d8ulf['index'], aq45xp = l6ib18 + d8ulf[0x0]['length'], nejc['lineNumber']++;nejc['columnNumber'] = u95dx - l6ib18 + 0x1;
  }for (var l6ib18 = 0x0, aq45xp = 0x0, o0m$t = /.*(?:\r\n?|\n)|.*$/g, nejc = ahq['locator'], ncwe7y = [{ 'currentNSMap': om$t0 }], k7ncw = {}, i_61b = 0x0;;) {
    try {
      var y3ck = mot0['indexOf']('<', i_61b);if (0x0 > y3ck) {
        if (!mot0['substr'](i_61b)['match'](/^\s*$/)) {
          var pxq54 = ahq['doc'],
              cewn = pxq54['createTextNode'](mot0['substr'](i_61b));pxq54['appendChild'](cewn), ahq['currentElement'] = cewn;
        }return;
      }switch (y3ck > i_61b && x4a9p5(y3ck), mot0['charAt'](y3ck + 0x1)) {case '/':
          var jc7e = mot0['indexOf']('>', y3ck + 0x3),
              d5xau = mot0['substring'](y3ck + 0x2, jc7e),
              n7cey = ncwe7y['pop']();0x0 > jc7e ? (d5xau = mot0['substring'](y3ck + 0x2)['replace'](/[\s<].*/, ''), ew7crn['error']('end tag name: ' + d5xau + ' is not complete:' + n7cey['tagName']), jc7e = y3ck + 0x1 + d5xau['length']) : d5xau['match'](/\s</) && (d5xau = d5xau['replace'](/[\s<].*/, ''), ew7crn['error']('end tag name: ' + d5xau + ' maybe not complete'), jc7e = y3ck + 0x1 + d5xau['length']);var xa = n7cey['localNSMap'],
              _1z26 = n7cey['tagName'] == d5xau,
              m$0oq = _1z26 || n7cey['tagName'] && n7cey['tagName']['toLowerCase']() == d5xau['toLowerCase']();if (m$0oq) {
            if (ahq['endElement'](n7cey['uri'], n7cey['localName'], d5xau), xa) {
              for (var nr7c in xa) ahq['endPrefixMapping'](nr7c);
            }_1z26 || ew7crn['fatalError']('end tag name: ' + d5xau + ' is not match the current start tagName:' + n7cey['tagName']);
          } else ncwe7y['push'](n7cey);jc7e++;break;case '?':
          nejc && necr7j(y3ck), jc7e = zxu9fl(mot0, y3ck, ahq);break;case '!':
          nejc && necr7j(y3ck), jc7e = z$htm0(mot0, y3ck, ahq, ew7crn);break;default:
          nejc && necr7j(y3ck);var i681_2 = new zq45xp(),
              omt0$g = ncwe7y[ncwe7y['length'] - 0x1]['currentNSMap'],
              jc7e = zpa45q(mot0, y3ck, i681_2, omt0$g, lifu8, ew7crn),
              pq4a5x = i681_2['length'];if (!i681_2['closed'] && zfu9xdl(mot0, jc7e, i681_2['tagName'], k7ncw) && (i681_2['closed'] = !0x0, _2k3v['nbsp'] || ew7crn['warning']('unclosed xml attribute')), nejc && pq4a5x) {
            for (var q45po = znky7cw(nejc, {}), lf1i8 = 0x0; pq4a5x > lf1i8; lf1i8++) {
              var xaqp5 = i681_2[lf1i8];necr7j(xaqp5['offset']), xaqp5['locator'] = znky7cw(nejc, {});
            }ahq['locator'] = q45po, zlu8fbi(i681_2, ahq, omt0$g) && ncwe7y['push'](i681_2), ahq['locator'] = nejc;
          } else zlu8fbi(i681_2, ahq, omt0$g) && ncwe7y['push'](i681_2);'http://www.w3.org/1999/xhtml' !== i681_2['uri'] || i681_2['closed'] ? jc7e++ : jc7e = zqh40mo(mot0, jc7e, i681_2['tagName'], lifu8, ahq);}
    } catch (t$m) {
      ew7crn['error']('element parse error: ' + t$m), jc7e = -0x1;
    }jc7e > i_61b ? i_61b = jc7e : x4a9p5(Math['max'](y3ck, i_61b) + 0x1);
  }
}function znky7cw(kc3wyz, pqa45x) {
  return pqa45x['lineNumber'] = kc3wyz['lineNumber'], pqa45x['columnNumber'] = kc3wyz['columnNumber'], pqa45x;
}function zpa45q(cr7en, pq4h, lbu9d, $gto, y3wc, a9dxuf) {
  for (var oth$0, erc7nj, bu8ld = ++pq4h, vkz23 = zq0o$hm;;) {
    var n7rj = cr7en['charAt'](bu8ld);switch (n7rj) {case '=':
        if (vkz23 === znj7rce) oth$0 = cr7en['slice'](pq4h, bu8ld), vkz23 = zf9xdua;else {
          if (vkz23 !== za94p5x) throw new Error('attribute equal must after attrName');vkz23 = zf9xdua;
        }break;case '\x27':case '\x22':
        if (vkz23 === zf9xdua || vkz23 === znj7rce) {
          if (vkz23 === znj7rce && (a9dxuf['warning']('attribute value must after "="'), oth$0 = cr7en['slice'](pq4h, bu8ld)), pq4h = bu8ld + 0x1, bu8ld = cr7en['indexOf'](n7rj, pq4h), !(bu8ld > 0x0)) throw new Error('attribute value no end \'' + n7rj + '\' match');erc7nj = cr7en['slice'](pq4h, bu8ld)['replace'](/&#?\w+;/g, y3wc), lbu9d['add'](oth$0, erc7nj, pq4h - 0x1), vkz23 = z_812i;
        } else {
          if (vkz23 != zkvwyz) throw new Error('attribute value must after "="');erc7nj = cr7en['slice'](pq4h, bu8ld)['replace'](/&#?\w+;/g, y3wc), lbu9d['add'](oth$0, erc7nj, pq4h), a9dxuf['warning']('attribute "' + oth$0 + '" missed start quot(' + n7rj + ')!!'), pq4h = bu8ld + 0x1, vkz23 = z_812i;
        }break;case '/':
        switch (vkz23) {case zq0o$hm:
            lbu9d['setTagName'](cr7en['slice'](pq4h, bu8ld));case z_812i:case zkv2z3y:case z_6i12v:
            vkz23 = z_6i12v, lbu9d['closed'] = !0x0;case zkvwyz:case znj7rce:case za94p5x:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return a9dxuf['error']('unexpected end of input'), vkz23 == zq0o$hm && lbu9d['setTagName'](cr7en['slice'](pq4h, bu8ld)), bu8ld;case '>':
        switch (vkz23) {case zq0o$hm:
            lbu9d['setTagName'](cr7en['slice'](pq4h, bu8ld));case z_812i:case zkv2z3y:case z_6i12v:
            break;case zkvwyz:case znj7rce:
            erc7nj = cr7en['slice'](pq4h, bu8ld), '/' === erc7nj['slice'](-0x1) && (lbu9d['closed'] = !0x0, erc7nj = erc7nj['slice'](0x0, -0x1));case za94p5x:
            vkz23 === za94p5x && (erc7nj = oth$0), vkz23 == zkvwyz ? (a9dxuf['warning']('attribute "' + erc7nj + '" missed quot(")!!'), lbu9d['add'](oth$0, erc7nj['replace'](/&#?\w+;/g, y3wc), pq4h)) : ('http://www.w3.org/1999/xhtml' === $gto[''] && erc7nj['match'](/^(?:disabled|checked|selected)$/i) || a9dxuf['warning']('attribute "' + erc7nj + '" missed value!! "' + erc7nj + '" instead!!'), lbu9d['add'](erc7nj, erc7nj, pq4h));break;case zf9xdua:
            throw new Error('attribute value missed!!');}return bu8ld;case '\u0080':
        n7rj = '\x20';default:
        if ('\x20' >= n7rj) switch (vkz23) {case zq0o$hm:
            lbu9d['setTagName'](cr7en['slice'](pq4h, bu8ld)), vkz23 = zkv2z3y;break;case znj7rce:
            oth$0 = cr7en['slice'](pq4h, bu8ld), vkz23 = za94p5x;break;case zkvwyz:
            var erc7nj = cr7en['slice'](pq4h, bu8ld)['replace'](/&#?\w+;/g, y3wc);a9dxuf['warning']('attribute "' + erc7nj + '" missed quot(")!!'), lbu9d['add'](oth$0, erc7nj, pq4h);case z_812i:
            vkz23 = zkv2z3y;} else switch (vkz23) {case za94p5x:
            {
              lbu9d['tagName'];
            }'http://www.w3.org/1999/xhtml' === $gto[''] && oth$0['match'](/^(?:disabled|checked|selected)$/i) || a9dxuf['warning']('attribute "' + oth$0 + '" missed value!! "' + oth$0 + '" instead2!!'), lbu9d['add'](oth$0, oth$0, pq4h), pq4h = bu8ld, vkz23 = znj7rce;break;case z_812i:
            a9dxuf['warning']('attribute space is required"' + oth$0 + '\x22!!');case zkv2z3y:
            vkz23 = znj7rce, pq4h = bu8ld;break;case zf9xdua:
            vkz23 = zkvwyz, pq4h = bu8ld;break;case z_6i12v:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bu8ld++;
  }
}function zlu8fbi(u8ibf, lxd, mh0t$o) {
  for (var b6l8 = u8ibf['tagName'], _1i = null, biuf8l = u8ibf['length']; biuf8l--;) {
    var ykwzc = u8ibf[biuf8l],
        p5q4oh = ykwzc['qName'],
        ldubf = ykwzc['value'],
        ud8bfl = p5q4oh['indexOf'](':');if (ud8bfl > 0x0) var ykw37 = ykwzc['prefix'] = p5q4oh['slice'](0x0, ud8bfl),
        re7nw = p5q4oh['slice'](ud8bfl + 0x1),
        xp5a4 = 'xmlns' === ykw37 && re7nw;else re7nw = p5q4oh, ykw37 = null, xp5a4 = 'xmlns' === p5q4oh && '';ykwzc['localName'] = re7nw, xp5a4 !== !0x1 && (null == _1i && (_1i = {}, zjrnec7(mh0t$o, mh0t$o = {})), mh0t$o[xp5a4] = _1i[xp5a4] = ldubf, ykwzc['uri'] = 'http://www.w3.org/2000/xmlns/', lxd['startPrefixMapping'](xp5a4, ldubf));
  }for (var biuf8l = u8ibf['length']; biuf8l--;) {
    ykwzc = u8ibf[biuf8l];var ykw37 = ykwzc['prefix'];ykw37 && ('xml' === ykw37 && (ykwzc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ykw37 && (ykwzc['uri'] = mh0t$o[ykw37 || '']));
  }var ud8bfl = b6l8['indexOf'](':');ud8bfl > 0x0 ? (ykw37 = u8ibf['prefix'] = b6l8['slice'](0x0, ud8bfl), re7nw = u8ibf['localName'] = b6l8['slice'](ud8bfl + 0x1)) : (ykw37 = null, re7nw = u8ibf['localName'] = b6l8);var o$tm0 = u8ibf['uri'] = mh0t$o[ykw37 || ''];if (lxd['startElement'](o$tm0, re7nw, b6l8, u8ibf), !u8ibf['closed']) return u8ibf['currentNSMap'] = mh0t$o, u8ibf['localNSMap'] = _1i, !0x0;if (lxd['endElement'](o$tm0, re7nw, b6l8), _1i) {
    for (ykw37 in _1i) lxd['endPrefixMapping'](ykw37);
  }
}function zqh40mo(z2v61, gomt0$, bil816, vi16, oh4p0) {
  if (/^(?:script|textarea)$/i['test'](bil816)) {
    var ykw7c = z2v61['indexOf']('</' + bil816 + '>', gomt0$),
        au9df = z2v61['substring'](gomt0$ + 0x1, ykw7c);if (/[&<]/['test'](au9df)) return (/^script$/i['test'](bil816) ? (oh4p0['characters'](au9df, 0x0, au9df['length']), ykw7c) : (au9df = au9df['replace'](/&#?\w+;/g, vi16), oh4p0['characters'](au9df, 0x0, au9df['length']), ykw7c)
    );
  }return gomt0$ + 0x1;
}function zfu9xdl(v2_k3z, i8luf, zcwky, p954ax) {
  var nkw7y = p954ax[zcwky];return null == nkw7y && (nkw7y = v2_k3z['lastIndexOf']('</' + zcwky + '>'), i8luf > nkw7y && (nkw7y = v2_k3z['lastIndexOf']('</' + zcwky)), p954ax[zcwky] = nkw7y), i8luf > nkw7y;
}function zjrnec7(bflu, buf) {
  for (var z32v in bflu) buf[z32v] = bflu[z32v];
}function z$htm0(qx5ap, w3kczy, fd8ulb, z_16) {
  var t0m$g = qx5ap['charAt'](w3kczy + 0x2);switch (t0m$g) {case '-':
      if ('-' === qx5ap['charAt'](w3kczy + 0x3)) {
        var u59axd = qx5ap['indexOf']('-->', w3kczy + 0x4);return u59axd > w3kczy ? (fd8ulb['comment'](qx5ap, w3kczy + 0x4, u59axd - w3kczy - 0x4), u59axd + 0x3) : (z_16['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qx5ap['substr'](w3kczy + 0x3, 0x6)) {
        var u59axd = qx5ap['indexOf'](']]>', w3kczy + 0x9);return fd8ulb['startCDATA'](), fd8ulb['characters'](qx5ap, w3kczy + 0x9, u59axd - w3kczy - 0x9), fd8ulb['endCDATA'](), u59axd + 0x3;
      }var v12_6i = zk3wvz(qx5ap, w3kczy),
          lfdb9u = v12_6i['length'];if (lfdb9u > 0x1 && /!doctype/i['test'](v12_6i[0x0][0x0])) {
        var cweny = v12_6i[0x1][0x0],
            z612_v = lfdb9u > 0x3 && /^public$/i['test'](v12_6i[0x2][0x0]) && v12_6i[0x3][0x0],
            cnwr = lfdb9u > 0x4 && v12_6i[0x4][0x0],
            ywkz3c = v12_6i[lfdb9u - 0x1];return fd8ulb['startDTD'](cweny, z612_v && z612_v['replace'](/^(['"])(.*?)\1$/, '$2'), cnwr && cnwr['replace'](/^(['"])(.*?)\1$/, '$2')), fd8ulb['endDTD'](), ywkz3c['index'] + ywkz3c[0x0]['length'];
      }}return -0x1;
}function zxu9fl(ht$0, kvzw3y, pxa4) {
  var p9da5 = ht$0['indexOf']('?>', kvzw3y);if (p9da5) {
    var ax9du = ht$0['substring'](kvzw3y, p9da5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ax9du) {
      {
        ax9du[0x0]['length'];
      }return pxa4['processingInstruction'](ax9du[0x1], ax9du[0x2]), p9da5 + 0x2;
    }return -0x1;
  }return -0x1;
}function zq45xp() {}function zw7c(l9fu, cynwe) {
  return l9fu['__proto__'] = cynwe, l9fu;
}function zk3wvz(qhop4, d59pax) {
  var fl9bu,
      b6_1i = [],
      we7nrc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (we7nrc['lastIndex'] = d59pax, we7nrc['exec'](qhop4); fl9bu = we7nrc['exec'](qhop4);) if (b6_1i['push'](fl9bu), fl9bu[0x1]) return b6_1i;
}var zl9bu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zxa59p = new RegExp('[\\-\\.0-9' + zl9bu['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zopqh = new RegExp('^' + zl9bu['source'] + zxa59p['source'] + '*(?::' + zl9bu['source'] + zxa59p['source'] + '*)?$'),
    zq0o$hm = 0x0,
    znj7rce = 0x1,
    za94p5x = 0x2,
    zf9xdua = 0x3,
    zkvwyz = 0x4,
    z_812i = 0x5,
    zkv2z3y = 0x6,
    z_6i12v = 0x7;za94px['prototype'] = { 'parse': function (u9x5da, bil1f8, $ogmt0) {
    var o4hpq5 = this['domBuilder'];o4hpq5['startDocument'](), zjrnec7(bil1f8, bil1f8 = {}), zw3kzy(u9x5da, bil1f8, $ogmt0, o4hpq5, this['errorHandler']), o4hpq5['endDocument']();
  } }, zq45xp['prototype'] = { 'setTagName': function (iblf1) {
    if (!zopqh['test'](iblf1)) throw new Error('invalid tagName:' + iblf1);this['tagName'] = iblf1;
  }, 'add': function (kw7ync, o0thm$, l9dbuf) {
    if (!zopqh['test'](kw7ync)) throw new Error('invalid attribute:' + kw7ync);this[this['length']++] = { 'qName': kw7ync, 'value': o0thm$, 'offset': l9dbuf };
  }, 'length': 0x0, 'getLocalName': function (eywn7c) {
    return this[eywn7c]['localName'];
  }, 'getLocator': function (mt0) {
    return this[mt0]['locator'];
  }, 'getQName': function (h4o5qp) {
    return this[h4o5qp]['qName'];
  }, 'getURI': function (jenr) {
    return this[jenr]['uri'];
  }, 'getValue': function (cywk3z) {
    return this[cywk3z]['value'];
  } }, zw7c({}, zw7c['prototype']) instanceof zw7c || (zw7c = function (_263, ho0q) {
  function tom$g() {}tom$g['prototype'] = ho0q, tom$g = new tom$g();for (ho0q in _263) tom$g[ho0q] = _263[ho0q];return tom$g;
}), exports['XMLReader'] = za94px;