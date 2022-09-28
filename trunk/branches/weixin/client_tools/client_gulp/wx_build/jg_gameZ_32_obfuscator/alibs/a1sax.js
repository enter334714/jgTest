var c = wx.$a;
function go0w_4() {}function gjf1snx(u4g_e, ewo_0, t6rqd8, e4_ug, c$bm) {
  function sgfx12($l9bma) {
    if ($l9bma > 0xffff) {
      $l9bma -= 0x10000;var hvnsjx = 0xd800 + ($l9bma >> 0xa),
          k6nv = 0xdc00 + (0x3ff & $l9bma);return String['fromCharCode'](hvnsjx, k6nv);
    }return String['fromCharCode']($l9bma);
  }function lb$m(yc0$bo) {
    var tq8kd = yc0$bo['slice'](0x1, -0x1);return tq8kd in t6rqd8 ? t6rqd8[tq8kd] : '#' === tq8kd['charAt'](0x0) ? sgfx12(parseInt(tq8kd['substr'](0x1)['replace']('x', '0x'))) : (c$bm['error']('entity not found:' + yc0$bo), yc0$bo);
  }function jnzvk(nhvjxs) {
    if (nhvjxs > bc0$l) {
      var w4_oe = u4g_e['substring'](bc0$l, nhvjxs)['replace'](/&#?\w+;/g, lb$m);zk86qd && $mlacb(bc0$l), e4_ug['characters'](w4_oe, 0x0, nhvjxs - bc0$l), bc0$l = nhvjxs;
    }
  }function $mlacb(z8qkd, xjvnf) {
    for (; z8qkd >= gew2_u && (xjvnf = q58rt7['exec'](u4g_e));) mybcl = xjvnf['index'], gew2_u = mybcl + xjvnf[0x0]['length'], zk86qd['lineNumber']++;zk86qd['columnNumber'] = z8qkd - mybcl + 0x1;
  }for (var mybcl = 0x0, gew2_u = 0x0, q58rt7 = /.*(?:\r\n?|\n)|.*$/g, zk86qd = e4_ug['locator'], w4o0_ = [{ 'currentNSMap': ewo_0 }], $clby0 = {}, bc0$l = 0x0;;) {
    try {
      var co_y0 = u4g_e['indexOf']('<', bc0$l);if (0x0 > co_y0) {
        if (!u4g_e['substr'](bc0$l)['match'](/^\s*$/)) {
          var r758t3 = e4_ug['doc'],
              zvhkd = r758t3['createTextNode'](u4g_e['substr'](bc0$l));r758t3['appendChild'](zvhkd), e4_ug['currentElement'] = zvhkd;
        }return;
      }switch (co_y0 > bc0$l && jnzvk(co_y0), u4g_e['charAt'](co_y0 + 0x1)) {case '/':
          var rq78 = u4g_e['indexOf']('>', co_y0 + 0x3),
              dqk6z8 = u4g_e['substring'](co_y0 + 0x2, rq78),
              i7r3p5 = w4o0_['pop']();0x0 > rq78 ? (dqk6z8 = u4g_e['substring'](co_y0 + 0x2)['replace'](/[\s<].*/, ''), c$bm['error']('end tag name: ' + dqk6z8 + ' is not complete:' + i7r3p5['tagName']), rq78 = co_y0 + 0x1 + dqk6z8['length']) : dqk6z8['match'](/\s</) && (dqk6z8 = dqk6z8['replace'](/[\s<].*/, ''), c$bm['error']('end tag name: ' + dqk6z8 + ' maybe not complete'), rq78 = co_y0 + 0x1 + dqk6z8['length']);var sx1n = i7r3p5['localNSMap'],
              ybco4 = i7r3p5['tagName'] == dqk6z8,
              w2eug_ = ybco4 || i7r3p5['tagName'] && i7r3p5['tagName']['toLowerCase']() == dqk6z8['toLowerCase']();if (w2eug_) {
            if (e4_ug['endElement'](i7r3p5['uri'], i7r3p5['localName'], dqk6z8), sx1n) {
              for (var oy40e_ in sx1n) e4_ug['endPrefixMapping'](oy40e_);
            }ybco4 || c$bm['fatalError']('end tag name: ' + dqk6z8 + ' is not match the current start tagName:' + i7r3p5['tagName']);
          } else w4o0_['push'](i7r3p5);rq78++;break;case '?':
          zk86qd && $mlacb(co_y0), rq78 = gob$cy(u4g_e, co_y0, e4_ug);break;case '!':
          zk86qd && $mlacb(co_y0), rq78 = grt735p(u4g_e, co_y0, e4_ug, c$bm);break;default:
          zk86qd && $mlacb(co_y0);var zkqd = new gb0o(),
              rdq86t = w4o0_[w4o0_['length'] - 0x1]['currentNSMap'],
              rq78 = guge4(u4g_e, co_y0, zkqd, rdq86t, lb$m, c$bm),
              ocb4 = zkqd['length'];if (!zkqd['closed'] && gh6kzdv(u4g_e, rq78, zkqd['tagName'], $clby0) && (zkqd['closed'] = !0x0, t6rqd8['nbsp'] || c$bm['warning']('unclosed xml attribute')), zk86qd && ocb4) {
            for (var l$cmby = gyblm$(zk86qd, {}), by = 0x0; ocb4 > by; by++) {
              var y0bl$c = zkqd[by];$mlacb(y0bl$c['offset']), y0bl$c['locator'] = gyblm$(zk86qd, {});
            }e4_ug['locator'] = l$cmby, geu1wg2(zkqd, e4_ug, rdq86t) && w4o0_['push'](zkqd), e4_ug['locator'] = zk86qd;
          } else geu1wg2(zkqd, e4_ug, rdq86t) && w4o0_['push'](zkqd);'http://www.w3.org/1999/xhtml' !== zkqd['uri'] || zkqd['closed'] ? rq78++ : rq78 = gqtk8d6(u4g_e, rq78, zkqd['tagName'], lb$m, e4_ug);}
    } catch (tkqd8) {
      c$bm['error']('element parse error: ' + tkqd8), rq78 = -0x1;
    }rq78 > bc0$l ? bc0$l = rq78 : jnzvk(Math['max'](co_y0, bc0$l) + 0x1);
  }
}function gyblm$(hkqd6, wu4e_) {
  return wu4e_['lineNumber'] = hkqd6['lineNumber'], wu4e_['columnNumber'] = hkqd6['columnNumber'], wu4e_;
}function guge4(hjsvxn, jkzh, _g4we, njvxfs, mcb$ly, ew4o0) {
  for (var b0ocy, t68kd, sfxvj = ++jkzh, ybl$0c = gi5rp37;;) {
    var $mycb = hjsvxn['charAt'](sfxvj);switch ($mycb) {case '=':
        if (ybl$0c === gjhsnx) b0ocy = hjsvxn['slice'](jkzh, sfxvj), ybl$0c = gkqz;else {
          if (ybl$0c !== g$c0y) throw new Error('attribute equal must after attrName');ybl$0c = gkqz;
        }break;case '\x27':case '\x22':
        if (ybl$0c === gkqz || ybl$0c === gjhsnx) {
          if (ybl$0c === gjhsnx && (ew4o0['warning']('attribute value must after "="'), b0ocy = hjsvxn['slice'](jkzh, sfxvj)), jkzh = sfxvj + 0x1, sfxvj = hjsvxn['indexOf']($mycb, jkzh), !(sfxvj > 0x0)) throw new Error('attribute value no end \'' + $mycb + '\' match');t68kd = hjsvxn['slice'](jkzh, sfxvj)['replace'](/&#?\w+;/g, mcb$ly), _g4we['add'](b0ocy, t68kd, jkzh - 0x1), ybl$0c = gu1eg2w;
        } else {
          if (ybl$0c != ghnzvjs) throw new Error('attribute value must after "="');t68kd = hjsvxn['slice'](jkzh, sfxvj)['replace'](/&#?\w+;/g, mcb$ly), _g4we['add'](b0ocy, t68kd, jkzh), ew4o0['warning']('attribute "' + b0ocy + '" missed start quot(' + $mycb + ')!!'), jkzh = sfxvj + 0x1, ybl$0c = gu1eg2w;
        }break;case '/':
        switch (ybl$0c) {case gi5rp37:
            _g4we['setTagName'](hjsvxn['slice'](jkzh, sfxvj));case gu1eg2w:case gzkh6v:case g_c40:
            ybl$0c = g_c40, _g4we['closed'] = !0x0;case ghnzvjs:case gjhsnx:case g$c0y:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ew4o0['error']('unexpected end of input'), ybl$0c == gi5rp37 && _g4we['setTagName'](hjsvxn['slice'](jkzh, sfxvj)), sfxvj;case '>':
        switch (ybl$0c) {case gi5rp37:
            _g4we['setTagName'](hjsvxn['slice'](jkzh, sfxvj));case gu1eg2w:case gzkh6v:case g_c40:
            break;case ghnzvjs:case gjhsnx:
            t68kd = hjsvxn['slice'](jkzh, sfxvj), '/' === t68kd['slice'](-0x1) && (_g4we['closed'] = !0x0, t68kd = t68kd['slice'](0x0, -0x1));case g$c0y:
            ybl$0c === g$c0y && (t68kd = b0ocy), ybl$0c == ghnzvjs ? (ew4o0['warning']('attribute "' + t68kd + '" missed quot(")!!'), _g4we['add'](b0ocy, t68kd['replace'](/&#?\w+;/g, mcb$ly), jkzh)) : ('http://www.w3.org/1999/xhtml' === njvxfs[''] && t68kd['match'](/^(?:disabled|checked|selected)$/i) || ew4o0['warning']('attribute "' + t68kd + '" missed value!! "' + t68kd + '" instead!!'), _g4we['add'](t68kd, t68kd, jkzh));break;case gkqz:
            throw new Error('attribute value missed!!');}return sfxvj;case '\u0080':
        $mycb = '\x20';default:
        if ('\x20' >= $mycb) switch (ybl$0c) {case gi5rp37:
            _g4we['setTagName'](hjsvxn['slice'](jkzh, sfxvj)), ybl$0c = gzkh6v;break;case gjhsnx:
            b0ocy = hjsvxn['slice'](jkzh, sfxvj), ybl$0c = g$c0y;break;case ghnzvjs:
            var t68kd = hjsvxn['slice'](jkzh, sfxvj)['replace'](/&#?\w+;/g, mcb$ly);ew4o0['warning']('attribute "' + t68kd + '" missed quot(")!!'), _g4we['add'](b0ocy, t68kd, jkzh);case gu1eg2w:
            ybl$0c = gzkh6v;} else switch (ybl$0c) {case g$c0y:
            {
              _g4we['tagName'];
            }'http://www.w3.org/1999/xhtml' === njvxfs[''] && b0ocy['match'](/^(?:disabled|checked|selected)$/i) || ew4o0['warning']('attribute "' + b0ocy + '" missed value!! "' + b0ocy + '" instead2!!'), _g4we['add'](b0ocy, b0ocy, jkzh), jkzh = sfxvj, ybl$0c = gjhsnx;break;case gu1eg2w:
            ew4o0['warning']('attribute space is required"' + b0ocy + '\x22!!');case gzkh6v:
            ybl$0c = gjhsnx, jkzh = sfxvj;break;case gkqz:
            ybl$0c = ghnzvjs, jkzh = sfxvj;break;case g_c40:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sfxvj++;
  }
}function geu1wg2(h6zvnk, f21gsx, xgs12f) {
  for (var z6nvh = h6zvnk['tagName'], g_u4e = null, ob0yc$ = h6zvnk['length']; ob0yc$--;) {
    var eu2g_ = h6zvnk[ob0yc$],
        uwg = eu2g_['qName'],
        g2we_u = eu2g_['value'],
        x21js = uwg['indexOf'](':');if (x21js > 0x0) var zvkhd = eu2g_['prefix'] = uwg['slice'](0x0, x21js),
        f2xg = uwg['slice'](x21js + 0x1),
        t753p = 'xmlns' === zvkhd && f2xg;else f2xg = uwg, zvkhd = null, t753p = 'xmlns' === uwg && '';eu2g_['localName'] = f2xg, t753p !== !0x1 && (null == g_u4e && (g_u4e = {}, gblc$my(xgs12f, xgs12f = {})), xgs12f[t753p] = g_u4e[t753p] = g2we_u, eu2g_['uri'] = 'http://www.w3.org/2000/xmlns/', f21gsx['startPrefixMapping'](t753p, g2we_u));
  }for (var ob0yc$ = h6zvnk['length']; ob0yc$--;) {
    eu2g_ = h6zvnk[ob0yc$];var zvkhd = eu2g_['prefix'];zvkhd && ('xml' === zvkhd && (eu2g_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zvkhd && (eu2g_['uri'] = xgs12f[zvkhd || '']));
  }var x21js = z6nvh['indexOf'](':');x21js > 0x0 ? (zvkhd = h6zvnk['prefix'] = z6nvh['slice'](0x0, x21js), f2xg = h6zvnk['localName'] = z6nvh['slice'](x21js + 0x1)) : (zvkhd = null, f2xg = h6zvnk['localName'] = z6nvh);var e12wgu = h6zvnk['uri'] = xgs12f[zvkhd || ''];if (f21gsx['startElement'](e12wgu, f2xg, z6nvh, h6zvnk), !h6zvnk['closed']) return h6zvnk['currentNSMap'] = xgs12f, h6zvnk['localNSMap'] = g_u4e, !0x0;if (f21gsx['endElement'](e12wgu, f2xg, z6nvh), g_u4e) {
    for (zvkhd in g_u4e) f21gsx['endPrefixMapping'](zvkhd);
  }
}function gqtk8d6(baml9, zhk6v, snvjzh, m$abcl, jsfnxv) {
  if (/^(?:script|textarea)$/i['test'](snvjzh)) {
    var sg2fx1 = baml9['indexOf']('</' + snvjzh + '>', zhk6v),
        bm$lyc = baml9['substring'](zhk6v + 0x1, sg2fx1);if (/[&<]/['test'](bm$lyc)) return (/^script$/i['test'](snvjzh) ? (jsfnxv['characters'](bm$lyc, 0x0, bm$lyc['length']), sg2fx1) : (bm$lyc = bm$lyc['replace'](/&#?\w+;/g, m$abcl), jsfnxv['characters'](bm$lyc, 0x0, bm$lyc['length']), sg2fx1)
    );
  }return zhk6v + 0x1;
}function gh6kzdv(d8rtq5, blcm, dqk86, vnj) {
  var cy40o = vnj[dqk86];return null == cy40o && (cy40o = d8rtq5['lastIndexOf']('</' + dqk86 + '>'), blcm > cy40o && (cy40o = d8rtq5['lastIndexOf']('</' + dqk86)), vnj[dqk86] = cy40o), blcm > cy40o;
}function gblc$my(hzjvkn, qzd8) {
  for (var oby$ in hzjvkn) qzd8[oby$] = hzjvkn[oby$];
}function grt735p(qrdt5, t78r5, ba$m9, xvsfj) {
  var jsf2x1 = qrdt5['charAt'](t78r5 + 0x2);switch (jsf2x1) {case '-':
      if ('-' === qrdt5['charAt'](t78r5 + 0x3)) {
        var c0o4yb = qrdt5['indexOf']('-->', t78r5 + 0x4);return c0o4yb > t78r5 ? (ba$m9['comment'](qrdt5, t78r5 + 0x4, c0o4yb - t78r5 - 0x4), c0o4yb + 0x3) : (xvsfj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qrdt5['substr'](t78r5 + 0x3, 0x6)) {
        var c0o4yb = qrdt5['indexOf'](']]>', t78r5 + 0x9);return ba$m9['startCDATA'](), ba$m9['characters'](qrdt5, t78r5 + 0x9, c0o4yb - t78r5 - 0x9), ba$m9['endCDATA'](), c0o4yb + 0x3;
      }var fvxnjs = gc$ly(qrdt5, t78r5),
          dtq86k = fvxnjs['length'];if (dtq86k > 0x1 && /!doctype/i['test'](fvxnjs[0x0][0x0])) {
        var hnxjvs = fvxnjs[0x1][0x0],
            uoe_ = dtq86k > 0x3 && /^public$/i['test'](fvxnjs[0x2][0x0]) && fvxnjs[0x3][0x0],
            weuo4 = dtq86k > 0x4 && fvxnjs[0x4][0x0],
            hvd6z = fvxnjs[dtq86k - 0x1];return ba$m9['startDTD'](hnxjvs, uoe_ && uoe_['replace'](/^(['"])(.*?)\1$/, '$2'), weuo4 && weuo4['replace'](/^(['"])(.*?)\1$/, '$2')), ba$m9['endDTD'](), hvd6z['index'] + hvd6z[0x0]['length'];
      }}return -0x1;
}function gob$cy(xshjnv, r57, nxvj) {
  var xvsh = xshjnv['indexOf']('?>', r57);if (xvsh) {
    var vnkzh6 = xshjnv['substring'](r57, xvsh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (vnkzh6) {
      {
        vnkzh6[0x0]['length'];
      }return nxvj['processingInstruction'](vnkzh6[0x1], vnkzh6[0x2]), xvsh + 0x2;
    }return -0x1;
  }return -0x1;
}function gb0o() {}function gwu1f(dqhzk6, zdk6) {
  return dqhzk6['__proto__'] = zdk6, dqhzk6;
}function gc$ly(ir5p37, r73p5t) {
  var wu2e,
      u_ew4g = [],
      zhnjv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zhnjv['lastIndex'] = r73p5t, zhnjv['exec'](ir5p37); wu2e = zhnjv['exec'](ir5p37);) if (u_ew4g['push'](wu2e), wu2e[0x1]) return u_ew4g;
}var gm$lab9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gt75r8 = new RegExp('[\\-\\.0-9' + gm$lab9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gxjnfs = new RegExp('^' + gm$lab9['source'] + gt75r8['source'] + '*(?::' + gm$lab9['source'] + gt75r8['source'] + '*)?$'),
    gi5rp37 = 0x0,
    gjhsnx = 0x1,
    g$c0y = 0x2,
    gkqz = 0x3,
    ghnzvjs = 0x4,
    gu1eg2w = 0x5,
    gzkh6v = 0x6,
    g_c40 = 0x7;go0w_4['prototype'] = { 'parse': function (sxf1jn, coy0b4, g1u2fw) {
    var nvh6k = this['domBuilder'];nvh6k['startDocument'](), gblc$my(coy0b4, coy0b4 = {}), gjf1snx(sxf1jn, coy0b4, g1u2fw, nvh6k, this['errorHandler']), nvh6k['endDocument']();
  } }, gb0o['prototype'] = { 'setTagName': function (dtk8) {
    if (!gxjnfs['test'](dtk8)) throw new Error('invalid tagName:' + dtk8);this['tagName'] = dtk8;
  }, 'add': function (cabl, xnjvhs, cbl$y) {
    if (!gxjnfs['test'](cabl)) throw new Error('invalid attribute:' + cabl);this[this['length']++] = { 'qName': cabl, 'value': xnjvhs, 'offset': cbl$y };
  }, 'length': 0x0, 'getLocalName': function (_4woue) {
    return this[_4woue]['localName'];
  }, 'getLocator': function (we_0) {
    return this[we_0]['locator'];
  }, 'getQName': function (cm$alb) {
    return this[cm$alb]['qName'];
  }, 'getURI': function (hzkqd6) {
    return this[hzkqd6]['uri'];
  }, 'getValue': function ($o) {
    return this[$o]['value'];
  } }, gwu1f({}, gwu1f['prototype']) instanceof gwu1f || (gwu1f = function (w2fug1, u4_g) {
  function hjsvx() {}hjsvx['prototype'] = u4_g, hjsvx = new hjsvx();for (u4_g in w2fug1) hjsvx[u4_g] = w2fug1[u4_g];return hjsvx;
}), exports['XMLReader'] = go0w_4;