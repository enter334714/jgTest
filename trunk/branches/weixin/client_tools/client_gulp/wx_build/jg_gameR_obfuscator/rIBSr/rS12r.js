var I = wx.$R;
function r_myrwk() {}function r_r7ep(r8kywm, qdnpef, au61_h, qdge7, qdp7ge) {
  function pfqde(pdeq) {
    if (pdeq > 0xffff) {
      pdeq -= 0x10000;var dqefp = 0xd800 + (pdeq >> 0xa),
          uch_56 = 0xdc00 + (0x3ff & pdeq);return String['fromCharCode'](dqefp, uch_56);
    }return String['fromCharCode'](pdeq);
  }function yiojk(cfh6n5) {
    var wymr8 = cfh6n5['slice'](0x1, -0x1);return wymr8 in au61_h ? au61_h[wymr8] : '#' === wymr8['charAt'](0x0) ? pfqde(parseInt(wymr8['substr'](0x1)['replace']('x', '0x'))) : (qdp7ge['error']('entity not found:' + cfh6n5), cfh6n5);
  }function pnfdc5(svt03) {
    if (svt03 > pndefq) {
      var hc56nf = r8kywm['substring'](pndefq, svt03)['replace'](/&#?\w+;/g, yiojk);yrk8 && uh156(pndefq), qdge7['characters'](hc56nf, 0x0, svt03 - pndefq), pndefq = svt03;
    }
  }function uh156(_n56ch, ah61u) {
    for (; _n56ch >= a6uh_ && (ah61u = tz32xs['exec'](r8kywm));) z2sl3 = ah61u['index'], a6uh_ = z2sl3 + ah61u[0x0]['length'], yrk8['lineNumber']++;yrk8['columnNumber'] = _n56ch - z2sl3 + 0x1;
  }for (var z2sl3 = 0x0, a6uh_ = 0x0, tz32xs = /.*(?:\r\n?|\n)|.*$/g, yrk8 = qdge7['locator'], xjz2st = [{ 'currentNSMap': qdnpef }], k8ojy = {}, pndefq = 0x0;;) {
    try {
      var sjizx2 = r8kywm['indexOf']('<', pndefq);if (0x0 > sjizx2) {
        if (!r8kywm['substr'](pndefq)['match'](/^\s*$/)) {
          var deqpnf = qdge7['doc'],
              qrp = deqpnf['createTextNode'](r8kywm['substr'](pndefq));deqpnf['appendChild'](qrp), qdge7['currentElement'] = qrp;
        }return;
      }switch (sjizx2 > pndefq && pnfdc5(sjizx2), r8kywm['charAt'](sjizx2 + 0x1)) {case '/':
          var enpfqd = r8kywm['indexOf']('>', sjizx2 + 0x3),
              u_5c6h = r8kywm['substring'](sjizx2 + 0x2, enpfqd),
              dpfnqc = xjz2st['pop']();0x0 > enpfqd ? (u_5c6h = r8kywm['substring'](sjizx2 + 0x2)['replace'](/[\s<].*/, ''), qdp7ge['error']('end tag name: ' + u_5c6h + ' is not complete:' + dpfnqc['tagName']), enpfqd = sjizx2 + 0x1 + u_5c6h['length']) : u_5c6h['match'](/\s</) && (u_5c6h = u_5c6h['replace'](/[\s<].*/, ''), qdp7ge['error']('end tag name: ' + u_5c6h + ' maybe not complete'), enpfqd = sjizx2 + 0x1 + u_5c6h['length']);var jx2zoi = dpfnqc['localNSMap'],
              ua6h1 = dpfnqc['tagName'] == u_5c6h,
              hab1u = ua6h1 || dpfnqc['tagName'] && dpfnqc['tagName']['toLowerCase']() == u_5c6h['toLowerCase']();if (hab1u) {
            if (qdge7['endElement'](dpfnqc['uri'], dpfnqc['localName'], u_5c6h), jx2zoi) {
              for (var pge in jx2zoi) qdge7['endPrefixMapping'](pge);
            }ua6h1 || qdp7ge['fatalError']('end tag name: ' + u_5c6h + ' is not match the current start tagName:' + dpfnqc['tagName']);
          } else xjz2st['push'](dpfnqc);enpfqd++;break;case '?':
          yrk8 && uh156(sjizx2), enpfqd = r_xi2zoj(r8kywm, sjizx2, qdge7);break;case '!':
          yrk8 && uh156(sjizx2), enpfqd = r_qfcpd(r8kywm, sjizx2, qdge7, qdp7ge);break;default:
          yrk8 && uh156(sjizx2);var o8w = new r_xs(),
              $b194a = xjz2st[xjz2st['length'] - 0x1]['currentNSMap'],
              enpfqd = r_d65c(r8kywm, sjizx2, o8w, $b194a, yiojk, qdp7ge),
              u1ba_$ = o8w['length'];if (!o8w['closed'] && r_h1a_(r8kywm, enpfqd, o8w['tagName'], k8ojy) && (o8w['closed'] = !0x0, au61_h['nbsp'] || qdp7ge['warning']('unclosed xml attribute')), yrk8 && u1ba_$) {
            for (var l3t0vs = r_gmqe(yrk8, {}), hn5c = 0x0; u1ba_$ > hn5c; hn5c++) {
              var m8wo = o8w[hn5c];uh156(m8wo['offset']), m8wo['locator'] = r_gmqe(yrk8, {});
            }qdge7['locator'] = l3t0vs, r_edqfp(o8w, qdge7, $b194a) && xjz2st['push'](o8w), qdge7['locator'] = yrk8;
          } else r_edqfp(o8w, qdge7, $b194a) && xjz2st['push'](o8w);'http://www.w3.org/1999/xhtml' !== o8w['uri'] || o8w['closed'] ? enpfqd++ : enpfqd = r_gmkw(r8kywm, enpfqd, o8w['tagName'], yiojk, qdge7);}
    } catch (tsj2x) {
      qdp7ge['error']('element parse error: ' + tsj2x), enpfqd = -0x1;
    }enpfqd > pndefq ? pndefq = enpfqd : pnfdc5(Math['max'](sjizx2, pndefq) + 0x1);
  }
}function r_gmqe(wk7r, tjz) {
  return tjz['lineNumber'] = wk7r['lineNumber'], tjz['columnNumber'] = wk7r['columnNumber'], tjz;
}function r_d65c(qpedgf, rqm7ge, qpe7d, _hu1ab, yrmk8, d5fpc) {
  for (var n65hc, zis, c65hu = ++rqm7ge, ua1b$ = r_l23s;;) {
    var ywoi = qpedgf['charAt'](c65hu);switch (ywoi) {case '=':
        if (ua1b$ === r_pqfcn) n65hc = qpedgf['slice'](rqm7ge, c65hu), ua1b$ = r_yr8kw;else {
          if (ua1b$ !== r_qd7gp) throw new Error('attribute equal must after attrName');ua1b$ = r_yr8kw;
        }break;case '\x27':case '\x22':
        if (ua1b$ === r_yr8kw || ua1b$ === r_pqfcn) {
          if (ua1b$ === r_pqfcn && (d5fpc['warning']('attribute value must after "="'), n65hc = qpedgf['slice'](rqm7ge, c65hu)), rqm7ge = c65hu + 0x1, c65hu = qpedgf['indexOf'](ywoi, rqm7ge), !(c65hu > 0x0)) throw new Error('attribute value no end \'' + ywoi + '\' match');zis = qpedgf['slice'](rqm7ge, c65hu)['replace'](/&#?\w+;/g, yrmk8), qpe7d['add'](n65hc, zis, rqm7ge - 0x1), ua1b$ = r_hc6_5u;
        } else {
          if (ua1b$ != r_w7grm) throw new Error('attribute value must after "="');zis = qpedgf['slice'](rqm7ge, c65hu)['replace'](/&#?\w+;/g, yrmk8), qpe7d['add'](n65hc, zis, rqm7ge), d5fpc['warning']('attribute "' + n65hc + '" missed start quot(' + ywoi + ')!!'), rqm7ge = c65hu + 0x1, ua1b$ = r_hc6_5u;
        }break;case '/':
        switch (ua1b$) {case r_l23s:
            qpe7d['setTagName'](qpedgf['slice'](rqm7ge, c65hu));case r_hc6_5u:case r_jo8iyx:case r_oy8kmw:
            ua1b$ = r_oy8kmw, qpe7d['closed'] = !0x0;case r_w7grm:case r_pqfcn:case r_qd7gp:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return d5fpc['error']('unexpected end of input'), ua1b$ == r_l23s && qpe7d['setTagName'](qpedgf['slice'](rqm7ge, c65hu)), c65hu;case '>':
        switch (ua1b$) {case r_l23s:
            qpe7d['setTagName'](qpedgf['slice'](rqm7ge, c65hu));case r_hc6_5u:case r_jo8iyx:case r_oy8kmw:
            break;case r_w7grm:case r_pqfcn:
            zis = qpedgf['slice'](rqm7ge, c65hu), '/' === zis['slice'](-0x1) && (qpe7d['closed'] = !0x0, zis = zis['slice'](0x0, -0x1));case r_qd7gp:
            ua1b$ === r_qd7gp && (zis = n65hc), ua1b$ == r_w7grm ? (d5fpc['warning']('attribute "' + zis + '" missed quot(")!!'), qpe7d['add'](n65hc, zis['replace'](/&#?\w+;/g, yrmk8), rqm7ge)) : ('http://www.w3.org/1999/xhtml' === _hu1ab[''] && zis['match'](/^(?:disabled|checked|selected)$/i) || d5fpc['warning']('attribute "' + zis + '" missed value!! "' + zis + '" instead!!'), qpe7d['add'](zis, zis, rqm7ge));break;case r_yr8kw:
            throw new Error('attribute value missed!!');}return c65hu;case '\u0080':
        ywoi = '\x20';default:
        if ('\x20' >= ywoi) switch (ua1b$) {case r_l23s:
            qpe7d['setTagName'](qpedgf['slice'](rqm7ge, c65hu)), ua1b$ = r_jo8iyx;break;case r_pqfcn:
            n65hc = qpedgf['slice'](rqm7ge, c65hu), ua1b$ = r_qd7gp;break;case r_w7grm:
            var zis = qpedgf['slice'](rqm7ge, c65hu)['replace'](/&#?\w+;/g, yrmk8);d5fpc['warning']('attribute "' + zis + '" missed quot(")!!'), qpe7d['add'](n65hc, zis, rqm7ge);case r_hc6_5u:
            ua1b$ = r_jo8iyx;} else switch (ua1b$) {case r_qd7gp:
            {
              qpe7d['tagName'];
            }'http://www.w3.org/1999/xhtml' === _hu1ab[''] && n65hc['match'](/^(?:disabled|checked|selected)$/i) || d5fpc['warning']('attribute "' + n65hc + '" missed value!! "' + n65hc + '" instead2!!'), qpe7d['add'](n65hc, n65hc, rqm7ge), rqm7ge = c65hu, ua1b$ = r_pqfcn;break;case r_hc6_5u:
            d5fpc['warning']('attribute space is required"' + n65hc + '\x22!!');case r_jo8iyx:
            ua1b$ = r_pqfcn, rqm7ge = c65hu;break;case r_yr8kw:
            ua1b$ = r_w7grm, rqm7ge = c65hu;break;case r_oy8kmw:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}c65hu++;
  }
}function r_edqfp(s30l, fn6cd, $uba1) {
  for (var hc_n65 = s30l['tagName'], fpdqne = null, $19bua = s30l['length']; $19bua--;) {
    var t0svl = s30l[$19bua],
        nc5dp = t0svl['qName'],
        egpqf = t0svl['value'],
        yw8kmo = nc5dp['indexOf'](':');if (yw8kmo > 0x0) var m7rgeq = t0svl['prefix'] = nc5dp['slice'](0x0, yw8kmo),
        k8jo = nc5dp['slice'](yw8kmo + 0x1),
        zisjx = 'xmlns' === m7rgeq && k8jo;else k8jo = nc5dp, m7rgeq = null, zisjx = 'xmlns' === nc5dp && '';t0svl['localName'] = k8jo, zisjx !== !0x1 && (null == fpdqne && (fpdqne = {}, r_a$914b($uba1, $uba1 = {})), $uba1[zisjx] = fpdqne[zisjx] = egpqf, t0svl['uri'] = 'http://www.w3.org/2000/xmlns/', fn6cd['startPrefixMapping'](zisjx, egpqf));
  }for (var $19bua = s30l['length']; $19bua--;) {
    t0svl = s30l[$19bua];var m7rgeq = t0svl['prefix'];m7rgeq && ('xml' === m7rgeq && (t0svl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m7rgeq && (t0svl['uri'] = $uba1[m7rgeq || '']));
  }var yw8kmo = hc_n65['indexOf'](':');yw8kmo > 0x0 ? (m7rgeq = s30l['prefix'] = hc_n65['slice'](0x0, yw8kmo), k8jo = s30l['localName'] = hc_n65['slice'](yw8kmo + 0x1)) : (m7rgeq = null, k8jo = s30l['localName'] = hc_n65);var oyk8i = s30l['uri'] = $uba1[m7rgeq || ''];if (fn6cd['startElement'](oyk8i, k8jo, hc_n65, s30l), !s30l['closed']) return s30l['currentNSMap'] = $uba1, s30l['localNSMap'] = fpdqne, !0x0;if (fn6cd['endElement'](oyk8i, k8jo, hc_n65), fpdqne) {
    for (m7rgeq in fpdqne) fn6cd['endPrefixMapping'](m7rgeq);
  }
}function r_gmkw(kyw8rm, qr7e, xo2ijy, cn6fd, pnfc5) {
  if (/^(?:script|textarea)$/i['test'](xo2ijy)) {
    var e7qdgp = kyw8rm['indexOf']('</' + xo2ijy + '>', qr7e),
        szxji2 = kyw8rm['substring'](qr7e + 0x1, e7qdgp);if (/[&<]/['test'](szxji2)) return (/^script$/i['test'](xo2ijy) ? (pnfc5['characters'](szxji2, 0x0, szxji2['length']), e7qdgp) : (szxji2 = szxji2['replace'](/&#?\w+;/g, cn6fd), pnfc5['characters'](szxji2, 0x0, szxji2['length']), e7qdgp)
    );
  }return qr7e + 0x1;
}function r_h1a_(oxji, peqg7d, svltz, mqgr) {
  var ojxiz2 = mqgr[svltz];return null == ojxiz2 && (ojxiz2 = oxji['lastIndexOf']('</' + svltz + '>'), peqg7d > ojxiz2 && (ojxiz2 = oxji['lastIndexOf']('</' + svltz)), mqgr[svltz] = ojxiz2), peqg7d > ojxiz2;
}function r_a$914b(dc5n, f5h6) {
  for (var fdpeg in dc5n) f5h6[fdpeg] = dc5n[fdpeg];
}function r_qfcpd(ch5u6_, cdpf, dc6fn, n6_hc) {
  var l2tz3s = ch5u6_['charAt'](cdpf + 0x2);switch (l2tz3s) {case '-':
      if ('-' === ch5u6_['charAt'](cdpf + 0x3)) {
        var cfqdpn = ch5u6_['indexOf']('-->', cdpf + 0x4);return cfqdpn > cdpf ? (dc6fn['comment'](ch5u6_, cdpf + 0x4, cfqdpn - cdpf - 0x4), cfqdpn + 0x3) : (n6_hc['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ch5u6_['substr'](cdpf + 0x3, 0x6)) {
        var cfqdpn = ch5u6_['indexOf'](']]>', cdpf + 0x9);return dc6fn['startCDATA'](), dc6fn['characters'](ch5u6_, cdpf + 0x9, cfqdpn - cdpf - 0x9), dc6fn['endCDATA'](), cfqdpn + 0x3;
      }var ozxj2i = r_u6ch5_(ch5u6_, cdpf),
          rg7mkw = ozxj2i['length'];if (rg7mkw > 0x1 && /!doctype/i['test'](ozxj2i[0x0][0x0])) {
        var u9ba = ozxj2i[0x1][0x0],
            fdgq = rg7mkw > 0x3 && /^public$/i['test'](ozxj2i[0x2][0x0]) && ozxj2i[0x3][0x0],
            iok8j = rg7mkw > 0x4 && ozxj2i[0x4][0x0],
            z2jxio = ozxj2i[rg7mkw - 0x1];return dc6fn['startDTD'](u9ba, fdgq && fdgq['replace'](/^(['"])(.*?)\1$/, '$2'), iok8j && iok8j['replace'](/^(['"])(.*?)\1$/, '$2')), dc6fn['endDTD'](), z2jxio['index'] + z2jxio[0x0]['length'];
      }}return -0x1;
}function r_xi2zoj(pqncd, gdqepf, nfep) {
  var l3tv0 = pqncd['indexOf']('?>', gdqepf);if (l3tv0) {
    var u$a = pqncd['substring'](gdqepf, l3tv0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (u$a) {
      {
        u$a[0x0]['length'];
      }return nfep['processingInstruction'](u$a[0x1], u$a[0x2]), l3tv0 + 0x2;
    }return -0x1;
  }return -0x1;
}function r_xs() {}function r_mk8wr(ge7r, jioky8) {
  return ge7r['__proto__'] = jioky8, ge7r;
}function r_u6ch5_(b491$, uc_h) {
  var mokyw,
      w78 = [],
      kyjo8i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kyjo8i['lastIndex'] = uc_h, kyjo8i['exec'](b491$); mokyw = kyjo8i['exec'](b491$);) if (w78['push'](mokyw), mokyw[0x1]) return w78;
}var r_epfqdg = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_fepnd = new RegExp('[\\-\\.0-9' + r_epfqdg['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_mgwre7 = new RegExp('^' + r_epfqdg['source'] + r_fepnd['source'] + '*(?::' + r_epfqdg['source'] + r_fepnd['source'] + '*)?$'),
    r_l23s = 0x0,
    r_pqfcn = 0x1,
    r_qd7gp = 0x2,
    r_yr8kw = 0x3,
    r_w7grm = 0x4,
    r_hc6_5u = 0x5,
    r_jo8iyx = 0x6,
    r_oy8kmw = 0x7;r_myrwk['prototype'] = { 'parse': function (k7wg, ab$_u, h_1a6u) {
    var dnpfc5 = this['domBuilder'];dnpfc5['startDocument'](), r_a$914b(ab$_u, ab$_u = {}), r_r7ep(k7wg, ab$_u, h_1a6u, dnpfc5, this['errorHandler']), dnpfc5['endDocument']();
  } }, r_xs['prototype'] = { 'setTagName': function (iokyj) {
    if (!r_mgwre7['test'](iokyj)) throw new Error('invalid tagName:' + iokyj);this['tagName'] = iokyj;
  }, 'add': function (_bhau, ykji8o, xijo2) {
    if (!r_mgwre7['test'](_bhau)) throw new Error('invalid attribute:' + _bhau);this[this['length']++] = { 'qName': _bhau, 'value': ykji8o, 'offset': xijo2 };
  }, 'length': 0x0, 'getLocalName': function (b1$) {
    return this[b1$]['localName'];
  }, 'getLocator': function (jy2xo) {
    return this[jy2xo]['locator'];
  }, 'getQName': function (xjzt2s) {
    return this[xjzt2s]['qName'];
  }, 'getURI': function (_c6n5) {
    return this[_c6n5]['uri'];
  }, 'getValue': function (a19b) {
    return this[a19b]['value'];
  } }, r_mk8wr({}, r_mk8wr['prototype']) instanceof r_mk8wr || (r_mk8wr = function (i2xjsz, y8krwm) {
  function gfedqp() {}gfedqp['prototype'] = y8krwm, gfedqp = new gfedqp();for (y8krwm in i2xjsz) gfedqp[y8krwm] = i2xjsz[y8krwm];return gfedqp;
}), exports['XMLReader'] = r_myrwk;