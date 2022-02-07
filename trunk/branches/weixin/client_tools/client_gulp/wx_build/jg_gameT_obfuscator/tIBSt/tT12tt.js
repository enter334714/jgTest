var M = wx.$T;
function tz0qe7() {}function tz7pfoe(e7xo0q, qe70z, ym_w5, z0eqo7, q0y_xm) {
  function qo7fe(_5hm6w) {
    if (_5hm6w > 0xffff) {
      _5hm6w -= 0x10000;var pz7oe = 0xd800 + (_5hm6w >> 0xa),
          df$9vp = 0xdc00 + (0x3ff & _5hm6w);return String['fromCharCode'](pz7oe, df$9vp);
    }return String['fromCharCode'](_5hm6w);
  }function z7$dp(h61w58) {
    var x_q0ey = h61w58['slice'](0x1, -0x1);return x_q0ey in ym_w5 ? ym_w5[x_q0ey] : '#' === x_q0ey['charAt'](0x0) ? qo7fe(parseInt(x_q0ey['substr'](0x1)['replace']('x', '0x'))) : (q0y_xm['error']('entity not found:' + h61w58), h61w58);
  }function wh_(od7zf) {
    if (od7zf > rng31) {
      var d9p$vf = e7xo0q['substring'](rng31, od7zf)['replace'](/&#?\w+;/g, z7$dp);m5_6 && xe7oq(rng31), z0eqo7['characters'](d9p$vf, 0x0, od7zf - rng31), rng31 = od7zf;
    }
  }function xe7oq(zq70o, _m0yh) {
    for (; zq70o >= jaskbr && (_m0yh = cl4['exec'](e7xo0q));) qexy0_ = _m0yh['index'], jaskbr = qexy0_ + _m0yh[0x0]['length'], m5_6['lineNumber']++;m5_6['columnNumber'] = zq70o - qexy0_ + 0x1;
  }for (var qexy0_ = 0x0, jaskbr = 0x0, cl4 = /.*(?:\r\n?|\n)|.*$/g, m5_6 = z0eqo7['locator'], d9$fpv = [{ 'currentNSMap': qe70z }], pzf7oe = {}, rng31 = 0x0;;) {
    try {
      var x_0hy = e7xo0q['indexOf']('<', rng31);if (0x0 > x_0hy) {
        if (!e7xo0q['substr'](rng31)['match'](/^\s*$/)) {
          var y5wm_h = z0eqo7['doc'],
              qo0y = y5wm_h['createTextNode'](e7xo0q['substr'](rng31));y5wm_h['appendChild'](qo0y), z0eqo7['currentElement'] = qo0y;
        }return;
      }switch (x_0hy > rng31 && wh_(x_0hy), e7xo0q['charAt'](x_0hy + 0x1)) {case '/':
          var mhxy_ = e7xo0q['indexOf']('>', x_0hy + 0x3),
              kbasu = e7xo0q['substring'](x_0hy + 0x2, mhxy_),
              ajnb = d9$fpv['pop']();0x0 > mhxy_ ? (kbasu = e7xo0q['substring'](x_0hy + 0x2)['replace'](/[\s<].*/, ''), q0y_xm['error']('end tag name: ' + kbasu + ' is not complete:' + ajnb['tagName']), mhxy_ = x_0hy + 0x1 + kbasu['length']) : kbasu['match'](/\s</) && (kbasu = kbasu['replace'](/[\s<].*/, ''), q0y_xm['error']('end tag name: ' + kbasu + ' maybe not complete'), mhxy_ = x_0hy + 0x1 + kbasu['length']);var uksbja = ajnb['localNSMap'],
              v$d9ci = ajnb['tagName'] == kbasu,
              tci49 = v$d9ci || ajnb['tagName'] && ajnb['tagName']['toLowerCase']() == kbasu['toLowerCase']();if (tci49) {
            if (z0eqo7['endElement'](ajnb['uri'], ajnb['localName'], kbasu), uksbja) {
              for (var _ywmh in uksbja) z0eqo7['endPrefixMapping'](_ywmh);
            }v$d9ci || q0y_xm['fatalError']('end tag name: ' + kbasu + ' is not match the current start tagName:' + ajnb['tagName']);
          } else d9$fpv['push'](ajnb);mhxy_++;break;case '?':
          m5_6 && xe7oq(x_0hy), mhxy_ = thy_xm0(e7xo0q, x_0hy, z0eqo7);break;case '!':
          m5_6 && xe7oq(x_0hy), mhxy_ = thw5_ym(e7xo0q, x_0hy, z0eqo7, q0y_xm);break;default:
          m5_6 && xe7oq(x_0hy);var m15w6 = new tzdpfv(),
              ezqof7 = d9$fpv[d9$fpv['length'] - 0x1]['currentNSMap'],
              mhxy_ = tofe7p(e7xo0q, x_0hy, m15w6, ezqof7, z7$dp, q0y_xm),
              _xey0q = m15w6['length'];if (!m15w6['closed'] && tm_wy5(e7xo0q, mhxy_, m15w6['tagName'], pzf7oe) && (m15w6['closed'] = !0x0, ym_w5['nbsp'] || q0y_xm['warning']('unclosed xml attribute')), m5_6 && _xey0q) {
            for (var jksrab = ti9d$vp(m5_6, {}), w_xh = 0x0; _xey0q > w_xh; w_xh++) {
              var qx_m0y = m15w6[w_xh];xe7oq(qx_m0y['offset']), qx_m0y['locator'] = ti9d$vp(m5_6, {});
            }z0eqo7['locator'] = jksrab, tq_0ymx(m15w6, z0eqo7, ezqof7) && d9$fpv['push'](m15w6), z0eqo7['locator'] = m5_6;
          } else tq_0ymx(m15w6, z0eqo7, ezqof7) && d9$fpv['push'](m15w6);'http://www.w3.org/1999/xhtml' !== m15w6['uri'] || m15w6['closed'] ? mhxy_++ : mhxy_ = tanrbj(e7xo0q, mhxy_, m15w6['tagName'], z7$dp, z0eqo7);}
    } catch (f7oep) {
      q0y_xm['error']('element parse error: ' + f7oep), mhxy_ = -0x1;
    }mhxy_ > rng31 ? rng31 = mhxy_ : wh_(Math['max'](x_0hy, rng31) + 0x1);
  }
}function ti9d$vp(_qmxy, yq_x0) {
  return yq_x0['lineNumber'] = _qmxy['lineNumber'], yq_x0['columnNumber'] = _qmxy['columnNumber'], yq_x0;
}function tofe7p(gbj3nr, cit2v9, kagjb, z$pvd, h0xmy_, sjbakr) {
  for (var abnrgj, v9pd$i, bjnra = ++cit2v9, qyx_e0 = tdpv9$f;;) {
    var m_0xqy = gbj3nr['charAt'](bjnra);switch (m_0xqy) {case '=':
        if (qyx_e0 === thmyx0) abnrgj = gbj3nr['slice'](cit2v9, bjnra), qyx_e0 = trn3g8j;else {
          if (qyx_e0 !== t_hmx0) throw new Error('attribute equal must after attrName');qyx_e0 = trn3g8j;
        }break;case '\x27':case '\x22':
        if (qyx_e0 === trn3g8j || qyx_e0 === thmyx0) {
          if (qyx_e0 === thmyx0 && (sjbakr['warning']('attribute value must after "="'), abnrgj = gbj3nr['slice'](cit2v9, bjnra)), cit2v9 = bjnra + 0x1, bjnra = gbj3nr['indexOf'](m_0xqy, cit2v9), !(bjnra > 0x0)) throw new Error('attribute value no end \'' + m_0xqy + '\' match');v9pd$i = gbj3nr['slice'](cit2v9, bjnra)['replace'](/&#?\w+;/g, h0xmy_), kagjb['add'](abnrgj, v9pd$i, cit2v9 - 0x1), qyx_e0 = tyhm5w_;
        } else {
          if (qyx_e0 != tp$fzd7) throw new Error('attribute value must after "="');v9pd$i = gbj3nr['slice'](cit2v9, bjnra)['replace'](/&#?\w+;/g, h0xmy_), kagjb['add'](abnrgj, v9pd$i, cit2v9), sjbakr['warning']('attribute "' + abnrgj + '" missed start quot(' + m_0xqy + ')!!'), cit2v9 = bjnra + 0x1, qyx_e0 = tyhm5w_;
        }break;case '/':
        switch (qyx_e0) {case tdpv9$f:
            kagjb['setTagName'](gbj3nr['slice'](cit2v9, bjnra));case tyhm5w_:case tozdf7:case tf$dvz:
            qyx_e0 = tf$dvz, kagjb['closed'] = !0x0;case tp$fzd7:case thmyx0:case t_hmx0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sjbakr['error']('unexpected end of input'), qyx_e0 == tdpv9$f && kagjb['setTagName'](gbj3nr['slice'](cit2v9, bjnra)), bjnra;case '>':
        switch (qyx_e0) {case tdpv9$f:
            kagjb['setTagName'](gbj3nr['slice'](cit2v9, bjnra));case tyhm5w_:case tozdf7:case tf$dvz:
            break;case tp$fzd7:case thmyx0:
            v9pd$i = gbj3nr['slice'](cit2v9, bjnra), '/' === v9pd$i['slice'](-0x1) && (kagjb['closed'] = !0x0, v9pd$i = v9pd$i['slice'](0x0, -0x1));case t_hmx0:
            qyx_e0 === t_hmx0 && (v9pd$i = abnrgj), qyx_e0 == tp$fzd7 ? (sjbakr['warning']('attribute "' + v9pd$i + '" missed quot(")!!'), kagjb['add'](abnrgj, v9pd$i['replace'](/&#?\w+;/g, h0xmy_), cit2v9)) : ('http://www.w3.org/1999/xhtml' === z$pvd[''] && v9pd$i['match'](/^(?:disabled|checked|selected)$/i) || sjbakr['warning']('attribute "' + v9pd$i + '" missed value!! "' + v9pd$i + '" instead!!'), kagjb['add'](v9pd$i, v9pd$i, cit2v9));break;case trn3g8j:
            throw new Error('attribute value missed!!');}return bjnra;case '\u0080':
        m_0xqy = '\x20';default:
        if ('\x20' >= m_0xqy) switch (qyx_e0) {case tdpv9$f:
            kagjb['setTagName'](gbj3nr['slice'](cit2v9, bjnra)), qyx_e0 = tozdf7;break;case thmyx0:
            abnrgj = gbj3nr['slice'](cit2v9, bjnra), qyx_e0 = t_hmx0;break;case tp$fzd7:
            var v9pd$i = gbj3nr['slice'](cit2v9, bjnra)['replace'](/&#?\w+;/g, h0xmy_);sjbakr['warning']('attribute "' + v9pd$i + '" missed quot(")!!'), kagjb['add'](abnrgj, v9pd$i, cit2v9);case tyhm5w_:
            qyx_e0 = tozdf7;} else switch (qyx_e0) {case t_hmx0:
            {
              kagjb['tagName'];
            }'http://www.w3.org/1999/xhtml' === z$pvd[''] && abnrgj['match'](/^(?:disabled|checked|selected)$/i) || sjbakr['warning']('attribute "' + abnrgj + '" missed value!! "' + abnrgj + '" instead2!!'), kagjb['add'](abnrgj, abnrgj, cit2v9), cit2v9 = bjnra, qyx_e0 = thmyx0;break;case tyhm5w_:
            sjbakr['warning']('attribute space is required"' + abnrgj + '\x22!!');case tozdf7:
            qyx_e0 = thmyx0, cit2v9 = bjnra;break;case trn3g8j:
            qyx_e0 = tp$fzd7, cit2v9 = bjnra;break;case tf$dvz:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bjnra++;
  }
}function tq_0ymx(xyeoq, d7pzf$, pdi$v9) {
  for (var yx0mq = xyeoq['tagName'], _hmxyw = null, b3grn = xyeoq['length']; b3grn--;) {
    var bsukaj = xyeoq[b3grn],
        cti$ = bsukaj['qName'],
        lt2ci4 = bsukaj['value'],
        wh51 = cti$['indexOf'](':');if (wh51 > 0x0) var r3g8n1 = bsukaj['prefix'] = cti$['slice'](0x0, wh51),
        kbau = cti$['slice'](wh51 + 0x1),
        v9c$i = 'xmlns' === r3g8n1 && kbau;else kbau = cti$, r3g8n1 = null, v9c$i = 'xmlns' === cti$ && '';bsukaj['localName'] = kbau, v9c$i !== !0x1 && (null == _hmxyw && (_hmxyw = {}, tksjau(pdi$v9, pdi$v9 = {})), pdi$v9[v9c$i] = _hmxyw[v9c$i] = lt2ci4, bsukaj['uri'] = 'http://www.w3.org/2000/xmlns/', d7pzf$['startPrefixMapping'](v9c$i, lt2ci4));
  }for (var b3grn = xyeoq['length']; b3grn--;) {
    bsukaj = xyeoq[b3grn];var r3g8n1 = bsukaj['prefix'];r3g8n1 && ('xml' === r3g8n1 && (bsukaj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r3g8n1 && (bsukaj['uri'] = pdi$v9[r3g8n1 || '']));
  }var wh51 = yx0mq['indexOf'](':');wh51 > 0x0 ? (r3g8n1 = xyeoq['prefix'] = yx0mq['slice'](0x0, wh51), kbau = xyeoq['localName'] = yx0mq['slice'](wh51 + 0x1)) : (r3g8n1 = null, kbau = xyeoq['localName'] = yx0mq);var qoe70x = xyeoq['uri'] = pdi$v9[r3g8n1 || ''];if (d7pzf$['startElement'](qoe70x, kbau, yx0mq, xyeoq), !xyeoq['closed']) return xyeoq['currentNSMap'] = pdi$v9, xyeoq['localNSMap'] = _hmxyw, !0x0;if (d7pzf$['endElement'](qoe70x, kbau, yx0mq), _hmxyw) {
    for (r3g8n1 in _hmxyw) d7pzf$['endPrefixMapping'](r3g8n1);
  }
}function tanrbj(efz7p, dpiv, vc9i, y_w5, gbjka) {
  if (/^(?:script|textarea)$/i['test'](vc9i)) {
    var n3rjb = efz7p['indexOf']('</' + vc9i + '>', dpiv),
        hw_m56 = efz7p['substring'](dpiv + 0x1, n3rjb);if (/[&<]/['test'](hw_m56)) return (/^script$/i['test'](vc9i) ? (gbjka['characters'](hw_m56, 0x0, hw_m56['length']), n3rjb) : (hw_m56 = hw_m56['replace'](/&#?\w+;/g, y_w5), gbjka['characters'](hw_m56, 0x0, hw_m56['length']), n3rjb)
    );
  }return dpiv + 0x1;
}function tm_wy5(basjkr, fpd$vz, o0eq7, y_exq0) {
  var opez7f = y_exq0[o0eq7];return null == opez7f && (opez7f = basjkr['lastIndexOf']('</' + o0eq7 + '>'), fpd$vz > opez7f && (opez7f = basjkr['lastIndexOf']('</' + o0eq7)), y_exq0[o0eq7] = opez7f), fpd$vz > opez7f;
}function tksjau(vtci, $ivdc9) {
  for (var b3n in vtci) $ivdc9[b3n] = vtci[b3n];
}function thw5_ym(nr38, pd9$iv, hw65m, m_0yx) {
  var grabn = nr38['charAt'](pd9$iv + 0x2);switch (grabn) {case '-':
      if ('-' === nr38['charAt'](pd9$iv + 0x3)) {
        var _hm65 = nr38['indexOf']('-->', pd9$iv + 0x4);return _hm65 > pd9$iv ? (hw65m['comment'](nr38, pd9$iv + 0x4, _hm65 - pd9$iv - 0x4), _hm65 + 0x3) : (m_0yx['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nr38['substr'](pd9$iv + 0x3, 0x6)) {
        var _hm65 = nr38['indexOf'](']]>', pd9$iv + 0x9);return hw65m['startCDATA'](), hw65m['characters'](nr38, pd9$iv + 0x9, _hm65 - pd9$iv - 0x9), hw65m['endCDATA'](), _hm65 + 0x3;
      }var pvf$d9 = ti9t42c(nr38, pd9$iv),
          m6hw15 = pvf$d9['length'];if (m6hw15 > 0x1 && /!doctype/i['test'](pvf$d9[0x0][0x0])) {
        var rbkga = pvf$d9[0x1][0x0],
            eqz0o = m6hw15 > 0x3 && /^public$/i['test'](pvf$d9[0x2][0x0]) && pvf$d9[0x3][0x0],
            c9i2v = m6hw15 > 0x4 && pvf$d9[0x4][0x0],
            zdpo = pvf$d9[m6hw15 - 0x1];return hw65m['startDTD'](rbkga, eqz0o && eqz0o['replace'](/^(['"])(.*?)\1$/, '$2'), c9i2v && c9i2v['replace'](/^(['"])(.*?)\1$/, '$2')), hw65m['endDTD'](), zdpo['index'] + zdpo[0x0]['length'];
      }}return -0x1;
}function thy_xm0(fzoep7, m5_hyw, nbj3r) {
  var ng8rj3 = fzoep7['indexOf']('?>', m5_hyw);if (ng8rj3) {
    var ep7zf = fzoep7['substring'](m5_hyw, ng8rj3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ep7zf) {
      {
        ep7zf[0x0]['length'];
      }return nbj3r['processingInstruction'](ep7zf[0x1], ep7zf[0x2]), ng8rj3 + 0x2;
    }return -0x1;
  }return -0x1;
}function tzdpfv() {}function tyx_m0q(bgnajr, akrbjs) {
  return bgnajr['__proto__'] = akrbjs, bgnajr;
}function ti9t42c(fp7dz, nabgjr) {
  var n683g,
      oy0qx = [],
      hy0xm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hy0xm['lastIndex'] = nabgjr, hy0xm['exec'](fp7dz); n683g = hy0xm['exec'](fp7dz);) if (oy0qx['push'](n683g), n683g[0x1]) return oy0qx;
}var tqz0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tagnjbr = new RegExp('[\\-\\.0-9' + tqz0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    trjga = new RegExp('^' + tqz0['source'] + tagnjbr['source'] + '*(?::' + tqz0['source'] + tagnjbr['source'] + '*)?$'),
    tdpv9$f = 0x0,
    thmyx0 = 0x1,
    t_hmx0 = 0x2,
    trn3g8j = 0x3,
    tp$fzd7 = 0x4,
    tyhm5w_ = 0x5,
    tozdf7 = 0x6,
    tf$dvz = 0x7;tz0qe7['prototype'] = { 'parse': function (zfp$vd, n183r, poz7e) {
    var wm65 = this['domBuilder'];wm65['startDocument'](), tksjau(n183r, n183r = {}), tz7pfoe(zfp$vd, n183r, poz7e, wm65, this['errorHandler']), wm65['endDocument']();
  } }, tzdpfv['prototype'] = { 'setTagName': function (hy_5) {
    if (!trjga['test'](hy_5)) throw new Error('invalid tagName:' + hy_5);this['tagName'] = hy_5;
  }, 'add': function (w1358, dvfp$z, xe0yoq) {
    if (!trjga['test'](w1358)) throw new Error('invalid attribute:' + w1358);this[this['length']++] = { 'qName': w1358, 'value': dvfp$z, 'offset': xe0yoq };
  }, 'length': 0x0, 'getLocalName': function (kusj) {
    return this[kusj]['localName'];
  }, 'getLocator': function (xo7qe0) {
    return this[xo7qe0]['locator'];
  }, 'getQName': function (gjbra) {
    return this[gjbra]['qName'];
  }, 'getURI': function (xy0hm_) {
    return this[xy0hm_]['uri'];
  }, 'getValue': function (ivc9t$) {
    return this[ivc9t$]['value'];
  } }, tyx_m0q({}, tyx_m0q['prototype']) instanceof tyx_m0q || (tyx_m0q = function (gjr83, zf) {
  function zdf$vp() {}zdf$vp['prototype'] = zf, zdf$vp = new zdf$vp();for (zf in gjr83) zdf$vp[zf] = gjr83[zf];return zdf$vp;
}), exports['XMLReader'] = tz0qe7;