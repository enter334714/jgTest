var v = wx.$d;
function zitudme() {}function zikgtfu(r8x1$, qba0g, edu6i, w7rvp, bzqxa) {
  function nh9_4(rvp1$w) {
    var w1r = rvp1$w['slice'](0x1, -0x1);return w1r in edu6i ? edu6i[w1r] : '#' === w1r['charAt'](0x0) ? 0xffff < (w1r = parseInt(w1r['substr'](0x1)['replace']('x', '0x'))) ? (w1r -= 0x10000, String['fromCharCode'](0xd800 + (w1r >> 0xa), 0xdc00 + (0x3ff & w1r))) : String['fromCharCode'](w1r) : (bzqxa['error']('entity not found:' + rvp1$w), rvp1$w);
  }function w7$vr(u6dm) {
    var $rx8w1;tfgki < u6dm && ($rx8w1 = r8x1$['substring'](tfgki, u6dm)['replace'](/&#?\w+;/g, nh9_4), eu6 && gktuq(tfgki), w7rvp['characters']($rx8w1, 0x0, u6dm - tfgki), tfgki = u6dm);
  }function gktuq(n3c4_, rb81a) {
    for (; mhe6nj <= n3c4_ && (rb81a = azqg0['exec'](r8x1$));) xr18w = rb81a['index'], mhe6nj = xr18w + rb81a[0x0]['length'], eu6['lineNumber']++;eu6['columnNumber'] = n3c4_ - xr18w + 0x1;
  }for (var xr18w = 0x0, mhe6nj = 0x0, azqg0 = /.*(?:\r\n?|\n)|.*$/g, eu6 = w7rvp['locator'], tgkiuf = [{ 'currentNSMap': qba0g }], $wprv = {}, tfgki = 0x0;;) {
    try {
      var p7vl = r8x1$['indexOf']('<', tfgki),
          prw81,
          rp$vw7;if (p7vl < 0x0) return void (r8x1$['substr'](tfgki)['match'](/^\s*$/) || (rp$vw7 = (prw81 = w7rvp['doc'])['createTextNode'](r8x1$['substr'](tfgki)), prw81['appendChild'](rp$vw7), w7rvp['currentElement'] = rp$vw7));switch (tfgki < p7vl && w7$vr(p7vl), r8x1$['charAt'](p7vl + 0x1)) {case '/':
          var xz81b = r8x1$['indexOf']('>', p7vl + 0x3),
              dhe6i = r8x1$['substring'](p7vl + 0x2, xz81b),
              $7rwv = tgkiuf['pop']();xz81b < 0x0 ? (dhe6i = r8x1$['substring'](p7vl + 0x2)['replace'](/[\s<].*/, ''), bzqxa['error']('end tag name: ' + dhe6i + ' is not complete:' + $7rwv['tagName']), xz81b = p7vl + 0x1 + dhe6i['length']) : dhe6i['match'](/\s</) && (dhe6i = dhe6i['replace'](/[\s<].*/, ''), bzqxa['error']('end tag name: ' + dhe6i + ' maybe not complete'), xz81b = p7vl + 0x1 + dhe6i['length']);var kiudft = $7rwv['localNSMap'],
              n_j6h = $7rwv['tagName'] == dhe6i;if (n_j6h || $7rwv['tagName'] && $7rwv['tagName']['toLowerCase']() == dhe6i['toLowerCase']()) {
            if (w7rvp['endElement']($7rwv['uri'], $7rwv['localName'], dhe6i), kiudft) {
              for (var bazx18 in kiudft) w7rvp['endPrefixMapping'](bazx18);
            }n_j6h || bzqxa['fatalError']('end tag name: ' + dhe6i + ' is not match the current start tagName:' + $7rwv['tagName']);
          } else tgkiuf['push']($7rwv);xz81b++;break;case '?':
          eu6 && gktuq(p7vl), xz81b = zp1$rw8(r8x1$, p7vl, w7rvp);break;case '!':
          eu6 && gktuq(p7vl), xz81b = zax0bzq(r8x1$, p7vl, w7rvp, bzqxa);break;default:
          eu6 && gktuq(p7vl);var djeh6 = new zhjdm(),
              o59c_ = tgkiuf[tgkiuf['length'] - 0x1]['currentNSMap'],
              xz81b = zhjd6em(r8x1$, p7vl, djeh6, o59c_, nh9_4, bzqxa),
              xar8 = djeh6['length'];if (!djeh6['closed'] && zz8x1ab(r8x1$, xz81b, djeh6['tagName'], $wprv) && (djeh6['closed'] = !0x0, edu6i['nbsp'] || bzqxa['warning']('unclosed xml attribute')), eu6 && xar8) {
            for (var _j39n = zx1z8b(eu6, {}), fgzk0 = 0x0; fgzk0 < xar8; fgzk0++) {
              var zq0gk = djeh6[fgzk0];gktuq(zq0gk['offset']), zq0gk['locator'] = zx1z8b(eu6, {});
            }w7rvp['locator'] = _j39n, zp$7lv(djeh6, w7rvp, o59c_) && tgkiuf['push'](djeh6), w7rvp['locator'] = eu6;
          } else zp$7lv(djeh6, w7rvp, o59c_) && tgkiuf['push'](djeh6);'http://www.w3.org/1999/xhtml' !== djeh6['uri'] || djeh6['closed'] ? xz81b++ : xz81b = zb0aqzg(r8x1$, xz81b, djeh6['tagName'], nh9_4, w7rvp);}
    } catch (f0tkqg) {
      bzqxa['error']('element parse error: ' + f0tkqg), xz81b = -0x1;
    }tfgki < xz81b ? tfgki = xz81b : w7$vr(Math['max'](p7vl, tfgki) + 0x1);
  }
}function zx1z8b(rvpw7, nm6ej) {
  return nm6ej['lineNumber'] = rvpw7['lineNumber'], nm6ej['columnNumber'] = rvpw7['columnNumber'], nm6ej;
}function zhjd6em(ypv$l7, h9_n, ab8xz1, oc9_43, a0gzqb, $vr1) {
  for (var p7wy, vpy$7l = ++h9_n, jnmh = zz0bxqa;;) {
    var feudt = ypv$l7['charAt'](vpy$7l);switch (feudt) {case '=':
        if (jnmh === zco_9) p7wy = ypv$l7['slice'](h9_n, vpy$7l), jnmh = zbr1x8;else {
          if (jnmh !== ztkgfq0) throw new Error('attribute equal must after attrName');jnmh = zbr1x8;
        }break;case '\x27':case '\x22':
        if (jnmh === zbr1x8 || jnmh === zco_9) {
          if (jnmh === zco_9 && ($vr1['warning']('attribute value must after "="'), p7wy = ypv$l7['slice'](h9_n, vpy$7l)), !(0x0 < (vpy$7l = ypv$l7['indexOf'](feudt, h9_n = vpy$7l + 0x1)))) throw new Error('attribute value no end \'' + feudt + '\' match');tfkdu = ypv$l7['slice'](h9_n, vpy$7l)['replace'](/&#?\w+;/g, a0gzqb), ab8xz1['add'](p7wy, tfkdu, h9_n - 0x1), jnmh = zzbgq;
        } else {
          if (jnmh != zm6dhe) throw new Error('attribute value must after "="');tfkdu = ypv$l7['slice'](h9_n, vpy$7l)['replace'](/&#?\w+;/g, a0gzqb), ab8xz1['add'](p7wy, tfkdu, h9_n), $vr1['warning']('attribute "' + p7wy + '" missed start quot(' + feudt + ')!!'), h9_n = vpy$7l + 0x1, jnmh = zzbgq;
        }break;case '/':
        switch (jnmh) {case zz0bxqa:
            ab8xz1['setTagName'](ypv$l7['slice'](h9_n, vpy$7l));case zzbgq:case zf0kzgq:case zrpv7w:
            jnmh = zrpv7w, ab8xz1['closed'] = !0x0;case zm6dhe:case zco_9:case ztkgfq0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $vr1['error']('unexpected end of input'), jnmh == zz0bxqa && ab8xz1['setTagName'](ypv$l7['slice'](h9_n, vpy$7l)), vpy$7l;case '>':
        switch (jnmh) {case zz0bxqa:
            ab8xz1['setTagName'](ypv$l7['slice'](h9_n, vpy$7l));case zzbgq:case zf0kzgq:case zrpv7w:
            break;case zm6dhe:case zco_9:
            '/' === (tfkdu = ypv$l7['slice'](h9_n, vpy$7l))['slice'](-0x1) && (ab8xz1['closed'] = !0x0, tfkdu = tfkdu['slice'](0x0, -0x1));case ztkgfq0:
            jnmh === ztkgfq0 && (tfkdu = p7wy), jnmh == zm6dhe ? ($vr1['warning']('attribute "' + tfkdu + '" missed quot(")!!'), ab8xz1['add'](p7wy, tfkdu['replace'](/&#?\w+;/g, a0gzqb), h9_n)) : ('http://www.w3.org/1999/xhtml' === oc9_43[''] && tfkdu['match'](/^(?:disabled|checked|selected)$/i) || $vr1['warning']('attribute "' + tfkdu + '" missed value!! "' + tfkdu + '" instead!!'), ab8xz1['add'](tfkdu, tfkdu, h9_n));break;case zbr1x8:
            throw new Error('attribute value missed!!');}return vpy$7l;case '\u0080':
        feudt = '\x20';default:
        if (feudt <= '\x20') switch (jnmh) {case zz0bxqa:
            ab8xz1['setTagName'](ypv$l7['slice'](h9_n, vpy$7l)), jnmh = zf0kzgq;break;case zco_9:
            p7wy = ypv$l7['slice'](h9_n, vpy$7l), jnmh = ztkgfq0;break;case zm6dhe:
            var tfkdu = ypv$l7['slice'](h9_n, vpy$7l)['replace'](/&#?\w+;/g, a0gzqb);$vr1['warning']('attribute "' + tfkdu + '" missed quot(")!!'), ab8xz1['add'](p7wy, tfkdu, h9_n);case zzbgq:
            jnmh = zf0kzgq;} else switch (jnmh) {case ztkgfq0:
            ab8xz1['tagName'], 'http://www.w3.org/1999/xhtml' === oc9_43[''] && p7wy['match'](/^(?:disabled|checked|selected)$/i) || $vr1['warning']('attribute "' + p7wy + '" missed value!! "' + p7wy + '" instead2!!'), ab8xz1['add'](p7wy, p7wy, h9_n), h9_n = vpy$7l, jnmh = zco_9;break;case zzbgq:
            $vr1['warning']('attribute space is required"' + p7wy + '\x22!!');case zf0kzgq:
            jnmh = zco_9, h9_n = vpy$7l;break;case zbr1x8:
            jnmh = zm6dhe, h9_n = vpy$7l;break;case zrpv7w:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}vpy$7l++;
  }
}function zp$7lv(edmti, b1ax8z, p1$wr) {
  for (var fkugt = edmti['tagName'], me6hjd = null, r1ba8 = edmti['length']; r1ba8--;) {
    var idf = edmti[r1ba8],
        _3j9n4 = idf['qName'],
        fkgtui = idf['value'],
        yvpw;_3j9n4 = 0x0 < (xaz81 = _3j9n4['indexOf'](':')) ? (axqz0 = idf['prefix'] = _3j9n4['slice'](0x0, xaz81), yvpw = _3j9n4['slice'](xaz81 + 0x1), 'xmlns' === axqz0 && yvpw) : (axqz0 = null, 'xmlns' === (yvpw = _3j9n4) && ''), idf['localName'] = yvpw, !0x1 !== _3j9n4 && (null == me6hjd && (me6hjd = {}, z_n49hj(p1$wr, p1$wr = {})), p1$wr[_3j9n4] = me6hjd[_3j9n4] = fkgtui, idf['uri'] = 'http://www.w3.org/2000/xmlns/', b1ax8z['startPrefixMapping'](_3j9n4, fkgtui));
  }for (r1ba8 = edmti['length']; r1ba8--;) (axqz0 = (idf = edmti[r1ba8])['prefix']) && ('xml' === axqz0 && (idf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== axqz0 && (idf['uri'] = p1$wr[axqz0 || '']));var xaz81;yvpw = 0x0 < (xaz81 = fkugt['indexOf'](':')) ? (axqz0 = edmti['prefix'] = fkugt['slice'](0x0, xaz81), edmti['localName'] = fkugt['slice'](xaz81 + 0x1)) : (axqz0 = null, edmti['localName'] = fkugt);var zgqkf0 = edmti['uri'] = p1$wr[axqz0 || ''];if (b1ax8z['startElement'](zgqkf0, yvpw, fkugt, edmti), !edmti['closed']) return edmti['currentNSMap'] = p1$wr, edmti['localNSMap'] = me6hjd, !0x0;if (b1ax8z['endElement'](zgqkf0, yvpw, fkugt), me6hjd) {
    for (var axqz0 in me6hjd) b1ax8z['endPrefixMapping'](axqz0);
  }
}function zb0aqzg($pwvy7, zk0gqf, x81rw$, tkgqu, gqbz) {
  if (/^(?:script|textarea)$/i['test'](x81rw$)) {
    var pr$wv = $pwvy7['indexOf']('</' + x81rw$ + '>', zk0gqf),
        $pwvy7 = $pwvy7['substring'](zk0gqf + 0x1, pr$wv);if (/[&<]/['test']($pwvy7)) return (/^script$/i['test'](x81rw$) || ($pwvy7 = $pwvy7['replace'](/&#?\w+;/g, tkgqu)), gqbz['characters']($pwvy7, 0x0, $pwvy7['length']), pr$wv
    );
  }return zk0gqf + 0x1;
}function zz8x1ab(qagbz0, ugkqtf, dtmeiu, itfde) {
  var utqkg = itfde[dtmeiu];return null == utqkg && ((utqkg = qagbz0['lastIndexOf']('</' + dtmeiu + '>')) < ugkqtf && (utqkg = qagbz0['lastIndexOf']('</' + dtmeiu)), itfde[dtmeiu] = utqkg), utqkg < ugkqtf;
}function z_n49hj(j9hn_4, tfk0q) {
  for (var qxab0 in j9hn_4) tfk0q[qxab0] = j9hn_4[qxab0];
}function zax0bzq(bz81x, njh9_, k0zfq, _35oc) {
  var $1wr8 = bz81x['charAt'](njh9_ + 0x2);if ('-' === $1wr8) return '-' !== bz81x['charAt'](njh9_ + 0x3) ? -0x1 : njh9_ < (zkf0gq = bz81x['indexOf']('-->', njh9_ + 0x4)) ? (k0zfq['comment'](bz81x, njh9_ + 0x4, zkf0gq - njh9_ - 0x4), zkf0gq + 0x3) : (_35oc['error']('Unclosed comment'), -0x1);if ('CDATA[' == bz81x['substr'](njh9_ + 0x3, 0x6)) return zkf0gq = bz81x['indexOf'](']]>', njh9_ + 0x9), k0zfq['startCDATA'](), k0zfq['characters'](bz81x, njh9_ + 0x9, zkf0gq - njh9_ - 0x9), k0zfq['endCDATA'](), zkf0gq + 0x3;$1wr8 = zktgf0(bz81x, njh9_), _35oc = $1wr8['length'];var zkf0gq;return 0x1 < _35oc && /!doctype/i['test']($1wr8[0x0][0x0]) ? (zkf0gq = $1wr8[0x1][0x0], bz81x = 0x3 < _35oc && /^public$/i['test']($1wr8[0x2][0x0]) && $1wr8[0x3][0x0], njh9_ = 0x4 < _35oc && $1wr8[0x4][0x0], $1wr8 = $1wr8[_35oc - 0x1], k0zfq['startDTD'](zkf0gq, bz81x && bz81x['replace'](/^(['"])(.*?)\1$/, '$2'), njh9_ && njh9_['replace'](/^(['"])(.*?)\1$/, '$2')), k0zfq['endDTD'](), $1wr8['index'] + $1wr8[0x0]['length']) : -0x1;
}function zp1$rw8(p7vwr, h4nj_, n9) {
  var me6dh = p7vwr['indexOf']('?>', h4nj_);return me6dh && (p7vwr = p7vwr['substring'](h4nj_, me6dh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (p7vwr[0x0]['length'], n9['processingInstruction'](p7vwr[0x1], p7vwr[0x2]), me6dh + 0x2) : -0x1;
}function zhjdm() {}function zmhide(_o9c35, mhed) {
  return _o9c35['__proto__'] = mhed, _o9c35;
}function zktgf0(w8r, b8r1a) {
  var med6ui,
      bz8x0 = [],
      ft0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ft0['lastIndex'] = b8r1a, ft0['exec'](w8r); med6ui = ft0['exec'](w8r);) if (bz8x0['push'](med6ui), med6ui[0x1]) return bz8x0;
}var zudftk = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    z_9h4j = new RegExp('[\\-\\.0-9' + zudftk['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zfktid = new RegExp('^' + zudftk['source'] + z_9h4j['source'] + '*(?::' + zudftk['source'] + z_9h4j['source'] + '*)?$'),
    zz0bxqa = 0x0,
    zco_9 = 0x1,
    ztkgfq0 = 0x2,
    zbr1x8 = 0x3,
    zm6dhe = 0x4,
    zzbgq = 0x5,
    zf0kzgq = 0x6,
    zrpv7w = 0x7;zitudme['prototype'] = { 'parse': function (ukgtif, zkaqg0, _93n4j) {
    var c49_n3 = this['domBuilder'];c49_n3['startDocument'](), z_n49hj(zkaqg0, zkaqg0 = {}), zikgtfu(ukgtif, zkaqg0, _93n4j, c49_n3, this['errorHandler']), c49_n3['endDocument']();
  } }, zhjdm['prototype'] = { 'setTagName': function (qkutf) {
    if (!zfktid['test'](qkutf)) throw new Error('invalid tagName:' + qkutf);this['tagName'] = qkutf;
  }, 'add': function (_nh94j, xb8ar1, _jn439) {
    if (!zfktid['test'](_nh94j)) throw new Error('invalid attribute:' + _nh94j);this[this['length']++] = { 'qName': _nh94j, 'value': xb8ar1, 'offset': _jn439 };
  }, 'length': 0x0, 'getLocalName': function (qab0x) {
    return this[qab0x]['localName'];
  }, 'getLocator': function ($7pvy) {
    return this[$7pvy]['locator'];
  }, 'getQName': function (azkgq0) {
    return this[azkgq0]['qName'];
  }, 'getURI': function (ukdi) {
    return this[ukdi]['uri'];
  }, 'getValue': function (dtfki) {
    return this[dtfki]['value'];
  } }, zmhide({}, zmhide['prototype']) instanceof zmhide || (zmhide = function (e6md, ba81x) {
  function hj6n_() {}for (ba81x in hj6n_['prototype'] = ba81x, hj6n_ = new hj6n_(), e6md) hj6n_[ba81x] = e6md[ba81x];return hj6n_;
}), exports['XMLReader'] = zitudme;