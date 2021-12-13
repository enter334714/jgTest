var K = wx.$S;
function scimx_2() {}function sa4ued(txn2i, hgpyq, shya, xmit2n, vk0zw) {
  function sdyph(sgyqpj) {
    if (sgyqpj > 0xffff) {
      sgyqpj -= 0x10000;var cw_9k = 0xd800 + (sgyqpj >> 0xa),
          q5phsy = 0xdc00 + (0x3ff & sgyqpj);return String['fromCharCode'](cw_9k, q5phsy);
    }return String['fromCharCode'](sgyqpj);
  }function hday5$(xi2mc_) {
    var ovur3 = xi2mc_['slice'](0x1, -0x1);return ovur3 in shya ? shya[ovur3] : '#' === ovur3['charAt'](0x0) ? sdyph(parseInt(ovur3['substr'](0x1)['replace']('x', '0x'))) : (vk0zw['error']('entity not found:' + xi2mc_), xi2mc_);
  }function cxm_(i_w90c) {
    if (i_w90c > jg18b) {
      var _xi2nm = txn2i['substring'](jg18b, i_w90c)['replace'](/&#?\w+;/g, hday5$);b8q1gj && g8bqj(jg18b), xmit2n['characters'](_xi2nm, 0x0, i_w90c - jg18b), jg18b = i_w90c;
    }
  }function g8bqj(yqs, k9zovw) {
    for (; yqs >= uo3rz && (k9zovw = wck_9['exec'](txn2i));) qbj1 = k9zovw['index'], uo3rz = qbj1 + k9zovw[0x0]['length'], b8q1gj['lineNumber']++;b8q1gj['columnNumber'] = yqs - qbj1 + 0x1;
  }for (var qbj1 = 0x0, uo3rz = 0x0, wck_9 = /.*(?:\r\n?|\n)|.*$/g, b8q1gj = xmit2n['locator'], d45ae$ = [{ 'currentNSMap': hgpyq }], c9_k = {}, jg18b = 0x0;;) {
    try {
      var fl8b6 = txn2i['indexOf']('<', jg18b);if (0x0 > fl8b6) {
        if (!txn2i['substr'](jg18b)['match'](/^\s*$/)) {
          var eo3r = xmit2n['doc'],
              h$4ad5 = eo3r['createTextNode'](txn2i['substr'](jg18b));eo3r['appendChild'](h$4ad5), xmit2n['currentElement'] = h$4ad5;
        }return;
      }switch (fl8b6 > jg18b && cxm_(fl8b6), txn2i['charAt'](fl8b6 + 0x1)) {case '/':
          var y5$had = txn2i['indexOf']('>', fl8b6 + 0x3),
              jlb618 = txn2i['substring'](fl8b6 + 0x2, y5$had),
              k90v = d45ae$['pop']();0x0 > y5$had ? (jlb618 = txn2i['substring'](fl8b6 + 0x2)['replace'](/[\s<].*/, ''), vk0zw['error']('end tag name: ' + jlb618 + ' is not complete:' + k90v['tagName']), y5$had = fl8b6 + 0x1 + jlb618['length']) : jlb618['match'](/\s</) && (jlb618 = jlb618['replace'](/[\s<].*/, ''), vk0zw['error']('end tag name: ' + jlb618 + ' maybe not complete'), y5$had = fl8b6 + 0x1 + jlb618['length']);var w_0cix = k90v['localNSMap'],
              ead5 = k90v['tagName'] == jlb618,
              spqjy = ead5 || k90v['tagName'] && k90v['tagName']['toLowerCase']() == jlb618['toLowerCase']();if (spqjy) {
            if (xmit2n['endElement'](k90v['uri'], k90v['localName'], jlb618), w_0cix) {
              for (var zw9o in w_0cix) xmit2n['endPrefixMapping'](zw9o);
            }ead5 || vk0zw['fatalError']('end tag name: ' + jlb618 + ' is not match the current start tagName:' + k90v['tagName']);
          } else d45ae$['push'](k90v);y5$had++;break;case '?':
          b8q1gj && g8bqj(fl8b6), y5$had = suvzo(txn2i, fl8b6, xmit2n);break;case '!':
          b8q1gj && g8bqj(fl8b6), y5$had = srvz3(txn2i, fl8b6, xmit2n, vk0zw);break;default:
          b8q1gj && g8bqj(fl8b6);var xwi = new syhsq5(),
              xitnm = d45ae$[d45ae$['length'] - 0x1]['currentNSMap'],
              y5$had = ssqp5(txn2i, fl8b6, xwi, xitnm, hday5$, vk0zw),
              de$u4a = xwi['length'];if (!xwi['closed'] && sruozv(txn2i, y5$had, xwi['tagName'], c9_k) && (xwi['closed'] = !0x0, shya['nbsp'] || vk0zw['warning']('unclosed xml attribute')), b8q1gj && de$u4a) {
            for (var n2_i = s_ic2x(b8q1gj, {}), b81gqj = 0x0; de$u4a > b81gqj; b81gqj++) {
              var wk9zc0 = xwi[b81gqj];g8bqj(wk9zc0['offset']), wk9zc0['locator'] = s_ic2x(b8q1gj, {});
            }xmit2n['locator'] = n2_i, sl16f8(xwi, xmit2n, xitnm) && d45ae$['push'](xwi), xmit2n['locator'] = b8q1gj;
          } else sl16f8(xwi, xmit2n, xitnm) && d45ae$['push'](xwi);'http://www.w3.org/1999/xhtml' !== xwi['uri'] || xwi['closed'] ? y5$had++ : y5$had = sz90kw(txn2i, y5$had, xwi['tagName'], hday5$, xmit2n);}
    } catch (da) {
      vk0zw['error']('element parse error: ' + da), y5$had = -0x1;
    }y5$had > jg18b ? jg18b = y5$had : cxm_(Math['max'](fl8b6, jg18b) + 0x1);
  }
}function s_ic2x(xc0m_, w90c_k) {
  return w90c_k['lineNumber'] = xc0m_['lineNumber'], w90c_k['columnNumber'] = xc0m_['columnNumber'], w90c_k;
}function ssqp5(dha4$5, gq18j, sjpqyg, rou3vz, o3v9, v3reu) {
  for (var _i2cm, jypsqg, syd5a = ++gq18j, mi2xn_ = sqspyj;;) {
    var q1sgpj = dha4$5['charAt'](syd5a);switch (q1sgpj) {case '=':
        if (mi2xn_ === sw_i90c) _i2cm = dha4$5['slice'](gq18j, syd5a), mi2xn_ = sphsyq5;else {
          if (mi2xn_ !== s_w9kc) throw new Error('attribute equal must after attrName');mi2xn_ = sphsyq5;
        }break;case '\x27':case '\x22':
        if (mi2xn_ === sphsyq5 || mi2xn_ === sw_i90c) {
          if (mi2xn_ === sw_i90c && (v3reu['warning']('attribute value must after "="'), _i2cm = dha4$5['slice'](gq18j, syd5a)), gq18j = syd5a + 0x1, syd5a = dha4$5['indexOf'](q1sgpj, gq18j), !(syd5a > 0x0)) throw new Error('attribute value no end \'' + q1sgpj + '\' match');jypsqg = dha4$5['slice'](gq18j, syd5a)['replace'](/&#?\w+;/g, o3v9), sjpqyg['add'](_i2cm, jypsqg, gq18j - 0x1), mi2xn_ = sy$adh5;
        } else {
          if (mi2xn_ != ssgq1) throw new Error('attribute value must after "="');jypsqg = dha4$5['slice'](gq18j, syd5a)['replace'](/&#?\w+;/g, o3v9), sjpqyg['add'](_i2cm, jypsqg, gq18j), v3reu['warning']('attribute "' + _i2cm + '" missed start quot(' + q1sgpj + ')!!'), gq18j = syd5a + 0x1, mi2xn_ = sy$adh5;
        }break;case '/':
        switch (mi2xn_) {case sqspyj:
            sjpqyg['setTagName'](dha4$5['slice'](gq18j, syd5a));case sy$adh5:case szv09kw:case sc_xmi0:
            mi2xn_ = sc_xmi0, sjpqyg['closed'] = !0x0;case ssgq1:case sw_i90c:case s_w9kc:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return v3reu['error']('unexpected end of input'), mi2xn_ == sqspyj && sjpqyg['setTagName'](dha4$5['slice'](gq18j, syd5a)), syd5a;case '>':
        switch (mi2xn_) {case sqspyj:
            sjpqyg['setTagName'](dha4$5['slice'](gq18j, syd5a));case sy$adh5:case szv09kw:case sc_xmi0:
            break;case ssgq1:case sw_i90c:
            jypsqg = dha4$5['slice'](gq18j, syd5a), '/' === jypsqg['slice'](-0x1) && (sjpqyg['closed'] = !0x0, jypsqg = jypsqg['slice'](0x0, -0x1));case s_w9kc:
            mi2xn_ === s_w9kc && (jypsqg = _i2cm), mi2xn_ == ssgq1 ? (v3reu['warning']('attribute "' + jypsqg + '" missed quot(")!!'), sjpqyg['add'](_i2cm, jypsqg['replace'](/&#?\w+;/g, o3v9), gq18j)) : ('http://www.w3.org/1999/xhtml' === rou3vz[''] && jypsqg['match'](/^(?:disabled|checked|selected)$/i) || v3reu['warning']('attribute "' + jypsqg + '" missed value!! "' + jypsqg + '" instead!!'), sjpqyg['add'](jypsqg, jypsqg, gq18j));break;case sphsyq5:
            throw new Error('attribute value missed!!');}return syd5a;case '\u0080':
        q1sgpj = '\x20';default:
        if ('\x20' >= q1sgpj) switch (mi2xn_) {case sqspyj:
            sjpqyg['setTagName'](dha4$5['slice'](gq18j, syd5a)), mi2xn_ = szv09kw;break;case sw_i90c:
            _i2cm = dha4$5['slice'](gq18j, syd5a), mi2xn_ = s_w9kc;break;case ssgq1:
            var jypsqg = dha4$5['slice'](gq18j, syd5a)['replace'](/&#?\w+;/g, o3v9);v3reu['warning']('attribute "' + jypsqg + '" missed quot(")!!'), sjpqyg['add'](_i2cm, jypsqg, gq18j);case sy$adh5:
            mi2xn_ = szv09kw;} else switch (mi2xn_) {case s_w9kc:
            {
              sjpqyg['tagName'];
            }'http://www.w3.org/1999/xhtml' === rou3vz[''] && _i2cm['match'](/^(?:disabled|checked|selected)$/i) || v3reu['warning']('attribute "' + _i2cm + '" missed value!! "' + _i2cm + '" instead2!!'), sjpqyg['add'](_i2cm, _i2cm, gq18j), gq18j = syd5a, mi2xn_ = sw_i90c;break;case sy$adh5:
            v3reu['warning']('attribute space is required"' + _i2cm + '\x22!!');case szv09kw:
            mi2xn_ = sw_i90c, gq18j = syd5a;break;case sphsyq5:
            mi2xn_ = ssgq1, gq18j = syd5a;break;case sc_xmi0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}syd5a++;
  }
}function sl16f8(mxic2_, m7tn2x, yq5hsp) {
  for (var vorz3 = mxic2_['tagName'], ueor4 = null, zvwo9 = mxic2_['length']; zvwo9--;) {
    var qysphg = mxic2_[zvwo9],
        bg6j18 = qysphg['qName'],
        wk0c9_ = qysphg['value'],
        w9c0i = bg6j18['indexOf'](':');if (w9c0i > 0x0) var aed45$ = qysphg['prefix'] = bg6j18['slice'](0x0, w9c0i),
        sqjpg1 = bg6j18['slice'](w9c0i + 0x1),
        x7nt = 'xmlns' === aed45$ && sqjpg1;else sqjpg1 = bg6j18, aed45$ = null, x7nt = 'xmlns' === bg6j18 && '';qysphg['localName'] = sqjpg1, x7nt !== !0x1 && (null == ueor4 && (ueor4 = {}, sphysq(yq5hsp, yq5hsp = {})), yq5hsp[x7nt] = ueor4[x7nt] = wk0c9_, qysphg['uri'] = 'http://www.w3.org/2000/xmlns/', m7tn2x['startPrefixMapping'](x7nt, wk0c9_));
  }for (var zvwo9 = mxic2_['length']; zvwo9--;) {
    qysphg = mxic2_[zvwo9];var aed45$ = qysphg['prefix'];aed45$ && ('xml' === aed45$ && (qysphg['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== aed45$ && (qysphg['uri'] = yq5hsp[aed45$ || '']));
  }var w9c0i = vorz3['indexOf'](':');w9c0i > 0x0 ? (aed45$ = mxic2_['prefix'] = vorz3['slice'](0x0, w9c0i), sqjpg1 = mxic2_['localName'] = vorz3['slice'](w9c0i + 0x1)) : (aed45$ = null, sqjpg1 = mxic2_['localName'] = vorz3);var w_c9i0 = mxic2_['uri'] = yq5hsp[aed45$ || ''];if (m7tn2x['startElement'](w_c9i0, sqjpg1, vorz3, mxic2_), !mxic2_['closed']) return mxic2_['currentNSMap'] = yq5hsp, mxic2_['localNSMap'] = ueor4, !0x0;if (m7tn2x['endElement'](w_c9i0, sqjpg1, vorz3), ueor4) {
    for (aed45$ in ueor4) m7tn2x['endPrefixMapping'](aed45$);
  }
}function sz90kw(s5hdpy, e5$, okr3z, r4ua$e, zrk3vo) {
  if (/^(?:script|textarea)$/i['test'](okr3z)) {
    var jbl61 = s5hdpy['indexOf']('</' + okr3z + '>', e5$),
        yh5a$ = s5hdpy['substring'](e5$ + 0x1, jbl61);if (/[&<]/['test'](yh5a$)) return (/^script$/i['test'](okr3z) ? (zrk3vo['characters'](yh5a$, 0x0, yh5a$['length']), jbl61) : (yh5a$ = yh5a$['replace'](/&#?\w+;/g, r4ua$e), zrk3vo['characters'](yh5a$, 0x0, yh5a$['length']), jbl61)
    );
  }return e5$ + 0x1;
}function sruozv(yhdps, sqhpy, u$4eda, rvkzo3) {
  var ru$a = rvkzo3[u$4eda];return null == ru$a && (ru$a = yhdps['lastIndexOf']('</' + u$4eda + '>'), sqhpy > ru$a && (ru$a = yhdps['lastIndexOf']('</' + u$4eda)), rvkzo3[u$4eda] = ru$a), sqhpy > ru$a;
}function sphysq(y5pdhs, wz9kv) {
  for (var jgq in y5pdhs) wz9kv[jgq] = y5pdhs[jgq];
}function srvz3(bjg1, _xnmi, xn2_i, psg1jq) {
  var cw90k_ = bjg1['charAt'](_xnmi + 0x2);switch (cw90k_) {case '-':
      if ('-' === bjg1['charAt'](_xnmi + 0x3)) {
        var k9w0vz = bjg1['indexOf']('-->', _xnmi + 0x4);return k9w0vz > _xnmi ? (xn2_i['comment'](bjg1, _xnmi + 0x4, k9w0vz - _xnmi - 0x4), k9w0vz + 0x3) : (psg1jq['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bjg1['substr'](_xnmi + 0x3, 0x6)) {
        var k9w0vz = bjg1['indexOf'](']]>', _xnmi + 0x9);return xn2_i['startCDATA'](), xn2_i['characters'](bjg1, _xnmi + 0x9, k9w0vz - _xnmi - 0x9), xn2_i['endCDATA'](), k9w0vz + 0x3;
      }var dsa = sadyh5s(bjg1, _xnmi),
          uozv3r = dsa['length'];if (uozv3r > 0x1 && /!doctype/i['test'](dsa[0x0][0x0])) {
        var s5dhya = dsa[0x1][0x0],
            yghq = uozv3r > 0x3 && /^public$/i['test'](dsa[0x2][0x0]) && dsa[0x3][0x0],
            dah4$ = uozv3r > 0x4 && dsa[0x4][0x0],
            ou4er3 = dsa[uozv3r - 0x1];return xn2_i['startDTD'](s5dhya, yghq && yghq['replace'](/^(['"])(.*?)\1$/, '$2'), dah4$ && dah4$['replace'](/^(['"])(.*?)\1$/, '$2')), xn2_i['endDTD'](), ou4er3['index'] + ou4er3[0x0]['length'];
      }}return -0x1;
}function suvzo(h45ad, a5$h4, a$d45h) {
  var rvzko = h45ad['indexOf']('?>', a5$h4);if (rvzko) {
    var wvko = h45ad['substring'](a5$h4, rvzko)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (wvko) {
      {
        wvko[0x0]['length'];
      }return a$d45h['processingInstruction'](wvko[0x1], wvko[0x2]), rvzko + 0x2;
    }return -0x1;
  }return -0x1;
}function syhsq5() {}function shsya(ov3r, jp1q) {
  return ov3r['__proto__'] = jp1q, ov3r;
}function sadyh5s(ozk3rv, sy) {
  var adh5y,
      o9wvz = [],
      gqypsh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (gqypsh['lastIndex'] = sy, gqypsh['exec'](ozk3rv); adh5y = gqypsh['exec'](ozk3rv);) if (o9wvz['push'](adh5y), adh5y[0x1]) return o9wvz;
}var spqsgj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    spqgj81 = new RegExp('[\\-\\.0-9' + spqsgj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ss5a = new RegExp('^' + spqsgj['source'] + spqgj81['source'] + '*(?::' + spqsgj['source'] + spqgj81['source'] + '*)?$'),
    sqspyj = 0x0,
    sw_i90c = 0x1,
    s_w9kc = 0x2,
    sphsyq5 = 0x3,
    ssgq1 = 0x4,
    sy$adh5 = 0x5,
    szv09kw = 0x6,
    sc_xmi0 = 0x7;scimx_2['prototype'] = { 'parse': function (n2x7m, jygps, w0cxi_) {
    var $aeu4d = this['domBuilder'];$aeu4d['startDocument'](), sphysq(jygps, jygps = {}), sa4ued(n2x7m, jygps, w0cxi_, $aeu4d, this['errorHandler']), $aeu4d['endDocument']();
  } }, syhsq5['prototype'] = { 'setTagName': function (bg1jq8) {
    if (!ss5a['test'](bg1jq8)) throw new Error('invalid tagName:' + bg1jq8);this['tagName'] = bg1jq8;
  }, 'add': function (hqsp5y, au4d$, syqpgj) {
    if (!ss5a['test'](hqsp5y)) throw new Error('invalid attribute:' + hqsp5y);this[this['length']++] = { 'qName': hqsp5y, 'value': au4d$, 'offset': syqpgj };
  }, 'length': 0x0, 'getLocalName': function (hpyq5) {
    return this[hpyq5]['localName'];
  }, 'getLocator': function (cwi0x) {
    return this[cwi0x]['locator'];
  }, 'getQName': function (gq1) {
    return this[gq1]['qName'];
  }, 'getURI': function (i0x) {
    return this[i0x]['uri'];
  }, 'getValue': function (c_wix) {
    return this[c_wix]['value'];
  } }, shsya({}, shsya['prototype']) instanceof shsya || (shsya = function (pygqhs, w0c9) {
  function nxm27t() {}nxm27t['prototype'] = w0c9, nxm27t = new nxm27t();for (w0c9 in pygqhs) nxm27t[w0c9] = pygqhs[w0c9];return nxm27t;
}), exports['XMLReader'] = scimx_2;