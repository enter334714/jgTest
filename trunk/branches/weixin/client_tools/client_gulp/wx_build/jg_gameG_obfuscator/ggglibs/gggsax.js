var m = wx.$g;
function gqevyw7() {}function gwkaxh(we7vky, s8gc7q, v7qey, kia1x, ot3d4z) {
  function f_0b5p(zdot4) {
    if (zdot4 > 0xffff) {
      zdot4 -= 0x10000;var o3d24z = 0xd800 + (zdot4 >> 0xa),
          r6dzj2 = 0xdc00 + (0x3ff & zdot4);return String['fromCharCode'](o3d24z, r6dzj2);
    }return String['fromCharCode'](zdot4);
  }function svq7g(z2jr6) {
    var $mur = z2jr6['slice'](0x1, -0x1);return $mur in v7qey ? v7qey[$mur] : '#' === $mur['charAt'](0x0) ? f_0b5p(parseInt($mur['substr'](0x1)['replace']('x', '0x'))) : (ot3d4z['error']('entity not found:' + z2jr6), z2jr6);
  }function j6r2(w7yeq) {
    if (w7yeq > jd62rz) {
      var f4dot3 = we7vky['substring'](jd62rz, w7yeq)['replace'](/&#?\w+;/g, svq7g);vweky7 && b05p_f(jd62rz), kia1x['characters'](f4dot3, 0x0, w7yeq - jd62rz), jd62rz = w7yeq;
    }
  }function b05p_f(ywvqe7, vgq7ce) {
    for (; ywvqe7 >= yxwh && (vgq7ce = bi5axp['exec'](we7vky));) eyvqw7 = vgq7ce['index'], yxwh = eyvqw7 + vgq7ce[0x0]['length'], vweky7['lineNumber']++;vweky7['columnNumber'] = ywvqe7 - eyvqw7 + 0x1;
  }for (var eyvqw7 = 0x0, yxwh = 0x0, bi5axp = /.*(?:\r\n?|\n)|.*$/g, vweky7 = kia1x['locator'], $z6 = [{ 'currentNSMap': s8gc7q }], fp5b0_ = {}, jd62rz = 0x0;;) {
    try {
      var oz2d = we7vky['indexOf']('<', jd62rz);if (0x0 > oz2d) {
        if (!we7vky['substr'](jd62rz)['match'](/^\s*$/)) {
          var vywe7k = kia1x['doc'],
              ixka = vywe7k['createTextNode'](we7vky['substr'](jd62rz));vywe7k['appendChild'](ixka), kia1x['currentElement'] = ixka;
        }return;
      }switch (oz2d > jd62rz && j6r2(oz2d), we7vky['charAt'](oz2d + 0x1)) {case '/':
          var ye1kwh = we7vky['indexOf']('>', oz2d + 0x3),
              abx = we7vky['substring'](oz2d + 0x2, ye1kwh),
              c7qvgs = $z6['pop']();0x0 > ye1kwh ? (abx = we7vky['substring'](oz2d + 0x2)['replace'](/[\s<].*/, ''), ot3d4z['error']('end tag name: ' + abx + ' is not complete:' + c7qvgs['tagName']), ye1kwh = oz2d + 0x1 + abx['length']) : abx['match'](/\s</) && (abx = abx['replace'](/[\s<].*/, ''), ot3d4z['error']('end tag name: ' + abx + ' maybe not complete'), ye1kwh = oz2d + 0x1 + abx['length']);var f3o4dt = c7qvgs['localNSMap'],
              _tp0b = c7qvgs['tagName'] == abx,
              rdj6z = _tp0b || c7qvgs['tagName'] && c7qvgs['tagName']['toLowerCase']() == abx['toLowerCase']();if (rdj6z) {
            if (kia1x['endElement'](c7qvgs['uri'], c7qvgs['localName'], abx), f3o4dt) {
              for (var cgq7s in f3o4dt) kia1x['endPrefixMapping'](cgq7s);
            }_tp0b || ot3d4z['fatalError']('end tag name: ' + abx + ' is not match the current start tagName:' + c7qvgs['tagName']);
          } else $z6['push'](c7qvgs);ye1kwh++;break;case '?':
          vweky7 && b05p_f(oz2d), ye1kwh = go_t4f(we7vky, oz2d, kia1x);break;case '!':
          vweky7 && b05p_f(oz2d), ye1kwh = ggs7qc(we7vky, oz2d, kia1x, ot3d4z);break;default:
          vweky7 && b05p_f(oz2d);var uj$r62 = new gt43_fo(),
              baxhi5 = $z6[$z6['length'] - 0x1]['currentNSMap'],
              ye1kwh = gyge(we7vky, oz2d, uj$r62, baxhi5, svq7g, ot3d4z),
              doz423 = uj$r62['length'];if (!uj$r62['closed'] && gvegy7q(we7vky, ye1kwh, uj$r62['tagName'], fp5b0_) && (uj$r62['closed'] = !0x0, v7qey['nbsp'] || ot3d4z['warning']('unclosed xml attribute')), vweky7 && doz423) {
            for (var btf0_ = go3zd24(vweky7, {}), o34d2 = 0x0; doz423 > o34d2; o34d2++) {
              var $ujrm = uj$r62[o34d2];b05p_f($ujrm['offset']), $ujrm['locator'] = go3zd24(vweky7, {});
            }kia1x['locator'] = btf0_, gi1hxak(uj$r62, kia1x, baxhi5) && $z6['push'](uj$r62), kia1x['locator'] = vweky7;
          } else gi1hxak(uj$r62, kia1x, baxhi5) && $z6['push'](uj$r62);'http://www.w3.org/1999/xhtml' !== uj$r62['uri'] || uj$r62['closed'] ? ye1kwh++ : ye1kwh = gx1ai5h(we7vky, ye1kwh, uj$r62['tagName'], svq7g, kia1x);}
    } catch (b5_0fp) {
      ot3d4z['error']('element parse error: ' + b5_0fp), ye1kwh = -0x1;
    }ye1kwh > jd62rz ? jd62rz = ye1kwh : j6r2(Math['max'](oz2d, jd62rz) + 0x1);
  }
}function go3zd24(wqy7ve, ai1h) {
  return ai1h['lineNumber'] = wqy7ve['lineNumber'], ai1h['columnNumber'] = wqy7ve['columnNumber'], ai1h;
}function gyge(d2z63o, pba, z2o63d, qc7s8g, l8gcq, pb5a0i) {
  for (var qsvc7, we7vyq, f_043t = ++pba, b_0tpf = god6z3;;) {
    var b_05 = d2z63o['charAt'](f_043t);switch (b_05) {case '=':
        if (b_0tpf === ga1xkw) qsvc7 = d2z63o['slice'](pba, f_043t), b_0tpf = gdoz43;else {
          if (b_0tpf !== gq7yvew) throw new Error('attribute equal must after attrName');b_0tpf = gdoz43;
        }break;case '\x27':case '\x22':
        if (b_0tpf === gdoz43 || b_0tpf === ga1xkw) {
          if (b_0tpf === ga1xkw && (pb5a0i['warning']('attribute value must after "="'), qsvc7 = d2z63o['slice'](pba, f_043t)), pba = f_043t + 0x1, f_043t = d2z63o['indexOf'](b_05, pba), !(f_043t > 0x0)) throw new Error('attribute value no end \'' + b_05 + '\' match');we7vyq = d2z63o['slice'](pba, f_043t)['replace'](/&#?\w+;/g, l8gcq), z2o63d['add'](qsvc7, we7vyq, pba - 0x1), b_0tpf = go24d;
        } else {
          if (b_0tpf != ghb5iax) throw new Error('attribute value must after "="');we7vyq = d2z63o['slice'](pba, f_043t)['replace'](/&#?\w+;/g, l8gcq), z2o63d['add'](qsvc7, we7vyq, pba), pb5a0i['warning']('attribute "' + qsvc7 + '" missed start quot(' + b_05 + ')!!'), pba = f_043t + 0x1, b_0tpf = go24d;
        }break;case '/':
        switch (b_0tpf) {case god6z3:
            z2o63d['setTagName'](d2z63o['slice'](pba, f_043t));case go24d:case gglcs98:case gj$ru62:
            b_0tpf = gj$ru62, z2o63d['closed'] = !0x0;case ghb5iax:case ga1xkw:case gq7yvew:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return pb5a0i['error']('unexpected end of input'), b_0tpf == god6z3 && z2o63d['setTagName'](d2z63o['slice'](pba, f_043t)), f_043t;case '>':
        switch (b_0tpf) {case god6z3:
            z2o63d['setTagName'](d2z63o['slice'](pba, f_043t));case go24d:case gglcs98:case gj$ru62:
            break;case ghb5iax:case ga1xkw:
            we7vyq = d2z63o['slice'](pba, f_043t), '/' === we7vyq['slice'](-0x1) && (z2o63d['closed'] = !0x0, we7vyq = we7vyq['slice'](0x0, -0x1));case gq7yvew:
            b_0tpf === gq7yvew && (we7vyq = qsvc7), b_0tpf == ghb5iax ? (pb5a0i['warning']('attribute "' + we7vyq + '" missed quot(")!!'), z2o63d['add'](qsvc7, we7vyq['replace'](/&#?\w+;/g, l8gcq), pba)) : ('http://www.w3.org/1999/xhtml' === qc7s8g[''] && we7vyq['match'](/^(?:disabled|checked|selected)$/i) || pb5a0i['warning']('attribute "' + we7vyq + '" missed value!! "' + we7vyq + '" instead!!'), z2o63d['add'](we7vyq, we7vyq, pba));break;case gdoz43:
            throw new Error('attribute value missed!!');}return f_043t;case '\u0080':
        b_05 = '\x20';default:
        if ('\x20' >= b_05) switch (b_0tpf) {case god6z3:
            z2o63d['setTagName'](d2z63o['slice'](pba, f_043t)), b_0tpf = gglcs98;break;case ga1xkw:
            qsvc7 = d2z63o['slice'](pba, f_043t), b_0tpf = gq7yvew;break;case ghb5iax:
            var we7vyq = d2z63o['slice'](pba, f_043t)['replace'](/&#?\w+;/g, l8gcq);pb5a0i['warning']('attribute "' + we7vyq + '" missed quot(")!!'), z2o63d['add'](qsvc7, we7vyq, pba);case go24d:
            b_0tpf = gglcs98;} else switch (b_0tpf) {case gq7yvew:
            {
              z2o63d['tagName'];
            }'http://www.w3.org/1999/xhtml' === qc7s8g[''] && qsvc7['match'](/^(?:disabled|checked|selected)$/i) || pb5a0i['warning']('attribute "' + qsvc7 + '" missed value!! "' + qsvc7 + '" instead2!!'), z2o63d['add'](qsvc7, qsvc7, pba), pba = f_043t, b_0tpf = ga1xkw;break;case go24d:
            pb5a0i['warning']('attribute space is required"' + qsvc7 + '\x22!!');case gglcs98:
            b_0tpf = ga1xkw, pba = f_043t;break;case gdoz43:
            b_0tpf = ghb5iax, pba = f_043t;break;case gj$ru62:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}f_043t++;
  }
}function gi1hxak(mrj6$u, s7, ibx5h) {
  for (var i5_p0b = mrj6$u['tagName'], rd26z = null, gv7yqe = mrj6$u['length']; gv7yqe--;) {
    var $zj6r2 = mrj6$u[gv7yqe],
        um$6rj = $zj6r2['qName'],
        b0t_p = $zj6r2['value'],
        ia05pb = um$6rj['indexOf'](':');if (ia05pb > 0x0) var hy1k = $zj6r2['prefix'] = um$6rj['slice'](0x0, ia05pb),
        bfp5 = um$6rj['slice'](ia05pb + 0x1),
        abip50 = 'xmlns' === hy1k && bfp5;else bfp5 = um$6rj, hy1k = null, abip50 = 'xmlns' === um$6rj && '';$zj6r2['localName'] = bfp5, abip50 !== !0x1 && (null == rd26z && (rd26z = {}, gslcq8g(ibx5h, ibx5h = {})), ibx5h[abip50] = rd26z[abip50] = b0t_p, $zj6r2['uri'] = 'http://www.w3.org/2000/xmlns/', s7['startPrefixMapping'](abip50, b0t_p));
  }for (var gv7yqe = mrj6$u['length']; gv7yqe--;) {
    $zj6r2 = mrj6$u[gv7yqe];var hy1k = $zj6r2['prefix'];hy1k && ('xml' === hy1k && ($zj6r2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hy1k && ($zj6r2['uri'] = ibx5h[hy1k || '']));
  }var ia05pb = i5_p0b['indexOf'](':');ia05pb > 0x0 ? (hy1k = mrj6$u['prefix'] = i5_p0b['slice'](0x0, ia05pb), bfp5 = mrj6$u['localName'] = i5_p0b['slice'](ia05pb + 0x1)) : (hy1k = null, bfp5 = mrj6$u['localName'] = i5_p0b);var c8q7gs = mrj6$u['uri'] = ibx5h[hy1k || ''];if (s7['startElement'](c8q7gs, bfp5, i5_p0b, mrj6$u), !mrj6$u['closed']) return mrj6$u['currentNSMap'] = ibx5h, mrj6$u['localNSMap'] = rd26z, !0x0;if (s7['endElement'](c8q7gs, bfp5, i5_p0b), rd26z) {
    for (hy1k in rd26z) s7['endPrefixMapping'](hy1k);
  }
}function gx1ai5h(rjz2$, wkyh1x, u$jr6, ixbah, r$m6u) {
  if (/^(?:script|textarea)$/i['test'](u$jr6)) {
    var veqgy = rjz2$['indexOf']('</' + u$jr6 + '>', wkyh1x),
        cvq7g = rjz2$['substring'](wkyh1x + 0x1, veqgy);if (/[&<]/['test'](cvq7g)) return (/^script$/i['test'](u$jr6) ? (r$m6u['characters'](cvq7g, 0x0, cvq7g['length']), veqgy) : (cvq7g = cvq7g['replace'](/&#?\w+;/g, ixbah), r$m6u['characters'](cvq7g, 0x0, cvq7g['length']), veqgy)
    );
  }return wkyh1x + 0x1;
}function gvegy7q(b5p_0f, sgq8cl, awhxk, t03) {
  var z2od6 = t03[awhxk];return null == z2od6 && (z2od6 = b5p_0f['lastIndexOf']('</' + awhxk + '>'), sgq8cl > z2od6 && (z2od6 = b5p_0f['lastIndexOf']('</' + awhxk)), t03[awhxk] = z2od6), sgq8cl > z2od6;
}function gslcq8g(ju6mr$, x5iha) {
  for (var sl8g9c in ju6mr$) x5iha[sl8g9c] = ju6mr$[sl8g9c];
}function ggs7qc(tdz34o, wkyve7, hxkwy1, t430_) {
  var fp5b0 = tdz34o['charAt'](wkyve7 + 0x2);switch (fp5b0) {case '-':
      if ('-' === tdz34o['charAt'](wkyve7 + 0x3)) {
        var kyvw7e = tdz34o['indexOf']('-->', wkyve7 + 0x4);return kyvw7e > wkyve7 ? (hxkwy1['comment'](tdz34o, wkyve7 + 0x4, kyvw7e - wkyve7 - 0x4), kyvw7e + 0x3) : (t430_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tdz34o['substr'](wkyve7 + 0x3, 0x6)) {
        var kyvw7e = tdz34o['indexOf'](']]>', wkyve7 + 0x9);return hxkwy1['startCDATA'](), hxkwy1['characters'](tdz34o, wkyve7 + 0x9, kyvw7e - wkyve7 - 0x9), hxkwy1['endCDATA'](), kyvw7e + 0x3;
      }var yhk1we = gb5_pi(tdz34o, wkyve7),
          kywev1 = yhk1we['length'];if (kywev1 > 0x1 && /!doctype/i['test'](yhk1we[0x0][0x0])) {
        var qy7we = yhk1we[0x1][0x0],
            qs8gcl = kywev1 > 0x3 && /^public$/i['test'](yhk1we[0x2][0x0]) && yhk1we[0x3][0x0],
            t3f40_ = kywev1 > 0x4 && yhk1we[0x4][0x0],
            hkeyw = yhk1we[kywev1 - 0x1];return hxkwy1['startDTD'](qy7we, qs8gcl && qs8gcl['replace'](/^(['"])(.*?)\1$/, '$2'), t3f40_ && t3f40_['replace'](/^(['"])(.*?)\1$/, '$2')), hxkwy1['endDTD'](), hkeyw['index'] + hkeyw[0x0]['length'];
      }}return -0x1;
}function go_t4f(d34tzo, gqvs7, j26ur) {
  var urjm6$ = d34tzo['indexOf']('?>', gqvs7);if (urjm6$) {
    var f43_to = d34tzo['substring'](gqvs7, urjm6$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f43_to) {
      {
        f43_to[0x0]['length'];
      }return j26ur['processingInstruction'](f43_to[0x1], f43_to[0x2]), urjm6$ + 0x2;
    }return -0x1;
  }return -0x1;
}function gt43_fo() {}function gqg8lsc(bftp_0, ykv1e) {
  return bftp_0['__proto__'] = ykv1e, bftp_0;
}function gb5_pi(sv7qc, j2r6u$) {
  var bf05p,
      xkhw1 = [],
      egcqv7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (egcqv7['lastIndex'] = j2r6u$, egcqv7['exec'](sv7qc); bf05p = egcqv7['exec'](sv7qc);) if (xkhw1['push'](bf05p), bf05p[0x1]) return xkhw1;
}var gd3z62o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gqc8s = new RegExp('[\\-\\.0-9' + gd3z62o['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gbhxa5i = new RegExp('^' + gd3z62o['source'] + gqc8s['source'] + '*(?::' + gd3z62o['source'] + gqc8s['source'] + '*)?$'),
    god6z3 = 0x0,
    ga1xkw = 0x1,
    gq7yvew = 0x2,
    gdoz43 = 0x3,
    ghb5iax = 0x4,
    go24d = 0x5,
    gglcs98 = 0x6,
    gj$ru62 = 0x7;gqevyw7['prototype'] = { 'parse': function (akhix1, u62rj, iahk) {
    var g8cs9l = this['domBuilder'];g8cs9l['startDocument'](), gslcq8g(u62rj, u62rj = {}), gwkaxh(akhix1, u62rj, iahk, g8cs9l, this['errorHandler']), g8cs9l['endDocument']();
  } }, gt43_fo['prototype'] = { 'setTagName': function (vsc7q) {
    if (!gbhxa5i['test'](vsc7q)) throw new Error('invalid tagName:' + vsc7q);this['tagName'] = vsc7q;
  }, 'add': function (d6o3z, ru2$j, zod632) {
    if (!gbhxa5i['test'](d6o3z)) throw new Error('invalid attribute:' + d6o3z);this[this['length']++] = { 'qName': d6o3z, 'value': ru2$j, 'offset': zod632 };
  }, 'length': 0x0, 'getLocalName': function (bpiax5) {
    return this[bpiax5]['localName'];
  }, 'getLocator': function ($u2rj) {
    return this[$u2rj]['locator'];
  }, 'getQName': function (rm$uj6) {
    return this[rm$uj6]['qName'];
  }, 'getURI': function (qsgc7) {
    return this[qsgc7]['uri'];
  }, 'getValue': function (kxhia1) {
    return this[kxhia1]['value'];
  } }, gqg8lsc({}, gqg8lsc['prototype']) instanceof gqg8lsc || (gqg8lsc = function (a5xpib, jzrd6) {
  function d2oz3() {}d2oz3['prototype'] = jzrd6, d2oz3 = new d2oz3();for (jzrd6 in a5xpib) d2oz3[jzrd6] = a5xpib[jzrd6];return d2oz3;
}), exports['XMLReader'] = gqevyw7;