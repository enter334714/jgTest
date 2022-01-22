var u = wx.$x;
function xsmzox5() {}function xm6(fnvcu, ixds4, dvncu, vgnujd, ea_qhp) {
  function wbk0eh(gdunvj) {
    if (gdunvj > 0xffff) {
      gdunvj -= 0x10000;var dgxi4v = 0xd800 + (gdunvj >> 0xa),
          b30k1w = 0xdc00 + (0x3ff & gdunvj);return String['fromCharCode'](dgxi4v, b30k1w);
    }return String['fromCharCode'](gdunvj);
  }function xids4g(qhpae) {
    var ixm4gs = qhpae['slice'](0x1, -0x1);return ixm4gs in dvncu ? dvncu[ixm4gs] : '#' === ixm4gs['charAt'](0x0) ? wbk0eh(parseInt(ixm4gs['substr'](0x1)['replace']('x', '0x'))) : (ea_qhp['error']('entity not found:' + qhpae), qhpae);
  }function $y789(n9flj) {
    if (n9flj > ndvcj) {
      var v4xdig = fnvcu['substring'](ndvcj, n9flj)['replace'](/&#?\w+;/g, xids4g);gi4 && j9nfu(ndvcj), vgnujd['characters'](v4xdig, 0x0, n9flj - ndvcj), ndvcj = n9flj;
    }
  }function j9nfu(cj79lf, xo5sz) {
    for (; cj79lf >= l87$y && (xo5sz = kb13['exec'](fnvcu));) ivdx4g = xo5sz['index'], l87$y = ivdx4g + xo5sz[0x0]['length'], gi4['lineNumber']++;gi4['columnNumber'] = cj79lf - ivdx4g + 0x1;
  }for (var ivdx4g = 0x0, l87$y = 0x0, kb13 = /.*(?:\r\n?|\n)|.*$/g, gi4 = vgnujd['locator'], zmos5x = [{ 'currentNSMap': ixds4 }], o2t = {}, ndvcj = 0x0;;) {
    try {
      var t5z63 = fnvcu['indexOf']('<', ndvcj);if (0x0 > t5z63) {
        if (!fnvcu['substr'](ndvcj)['match'](/^\s*$/)) {
          var l9ncj = vgnujd['doc'],
              imxs = l9ncj['createTextNode'](fnvcu['substr'](ndvcj));l9ncj['appendChild'](imxs), vgnujd['currentElement'] = imxs;
        }return;
      }switch (t5z63 > ndvcj && $y789(t5z63), fnvcu['charAt'](t5z63 + 0x1)) {case '/':
          var cndju = fnvcu['indexOf']('>', t5z63 + 0x3),
              wb13 = fnvcu['substring'](t5z63 + 0x2, cndju),
              xsd4g = zmos5x['pop']();0x0 > cndju ? (wb13 = fnvcu['substring'](t5z63 + 0x2)['replace'](/[\s<].*/, ''), ea_qhp['error']('end tag name: ' + wb13 + ' is not complete:' + xsd4g['tagName']), cndju = t5z63 + 0x1 + wb13['length']) : wb13['match'](/\s</) && (wb13 = wb13['replace'](/[\s<].*/, ''), ea_qhp['error']('end tag name: ' + wb13 + ' maybe not complete'), cndju = t5z63 + 0x1 + wb13['length']);var dgx4is = xsd4g['localNSMap'],
              zt532 = xsd4g['tagName'] == wb13,
              msoz52 = zt532 || xsd4g['tagName'] && xsd4g['tagName']['toLowerCase']() == wb13['toLowerCase']();if (msoz52) {
            if (vgnujd['endElement'](xsd4g['uri'], xsd4g['localName'], wb13), dgx4is) {
              for (var pea_q in dgx4is) vgnujd['endPrefixMapping'](pea_q);
            }zt532 || ea_qhp['fatalError']('end tag name: ' + wb13 + ' is not match the current start tagName:' + xsd4g['tagName']);
          } else zmos5x['push'](xsd4g);cndju++;break;case '?':
          gi4 && j9nfu(t5z63), cndju = xbeah(fnvcu, t5z63, vgnujd);break;case '!':
          gi4 && j9nfu(t5z63), cndju = xk31bw(fnvcu, t5z63, vgnujd, ea_qhp);break;default:
          gi4 && j9nfu(t5z63);var g4xdvi = new xhqpae_(),
              kwt3 = zmos5x[zmos5x['length'] - 0x1]['currentNSMap'],
              cndju = xv4gdu(fnvcu, t5z63, g4xdvi, kwt3, xids4g, ea_qhp),
              jcvnuf = g4xdvi['length'];if (!g4xdvi['closed'] && xbphea0(fnvcu, cndju, g4xdvi['tagName'], o2t) && (g4xdvi['closed'] = !0x0, dvncu['nbsp'] || ea_qhp['warning']('unclosed xml attribute')), gi4 && jcvnuf) {
            for (var cvnfu = xmx4gis(gi4, {}), bwkhe0 = 0x0; jcvnuf > bwkhe0; bwkhe0++) {
              var vgjnd = g4xdvi[bwkhe0];j9nfu(vgjnd['offset']), vgjnd['locator'] = xmx4gis(gi4, {});
            }vgnujd['locator'] = cvnfu, xdjnuvc(g4xdvi, vgnujd, kwt3) && zmos5x['push'](g4xdvi), vgnujd['locator'] = gi4;
          } else xdjnuvc(g4xdvi, vgnujd, kwt3) && zmos5x['push'](g4xdvi);'http://www.w3.org/1999/xhtml' !== g4xdvi['uri'] || g4xdvi['closed'] ? cndju++ : cndju = xoimz(fnvcu, cndju, g4xdvi['tagName'], xids4g, vgnujd);}
    } catch (k16w3t) {
      ea_qhp['error']('element parse error: ' + k16w3t), cndju = -0x1;
    }cndju > ndvcj ? ndvcj = cndju : $y789(Math['max'](t5z63, ndvcj) + 0x1);
  }
}function xmx4gis(eq0ap, ujnf) {
  return ujnf['lineNumber'] = eq0ap['lineNumber'], ujnf['columnNumber'] = eq0ap['columnNumber'], ujnf;
}function xv4gdu(cfj97, t32165, ncdvuj, ozsm25, zo5mxs, hweb0k) {
  for (var pqa_hr, aehpb, we0hk = ++t32165, qp0ha = xehk0b;;) {
    var fjn9u = cfj97['charAt'](we0hk);switch (fjn9u) {case '=':
        if (qp0ha === xuvdig4) pqa_hr = cfj97['slice'](t32165, we0hk), qp0ha = xfnc;else {
          if (qp0ha !== xnud4vg) throw new Error('attribute equal must after attrName');qp0ha = xfnc;
        }break;case '\x27':case '\x22':
        if (qp0ha === xfnc || qp0ha === xuvdig4) {
          if (qp0ha === xuvdig4 && (hweb0k['warning']('attribute value must after "="'), pqa_hr = cfj97['slice'](t32165, we0hk)), t32165 = we0hk + 0x1, we0hk = cfj97['indexOf'](fjn9u, t32165), !(we0hk > 0x0)) throw new Error('attribute value no end \'' + fjn9u + '\' match');aehpb = cfj97['slice'](t32165, we0hk)['replace'](/&#?\w+;/g, zo5mxs), ncdvuj['add'](pqa_hr, aehpb, t32165 - 0x1), qp0ha = xoms2;
        } else {
          if (qp0ha != x_hpqr) throw new Error('attribute value must after "="');aehpb = cfj97['slice'](t32165, we0hk)['replace'](/&#?\w+;/g, zo5mxs), ncdvuj['add'](pqa_hr, aehpb, t32165), hweb0k['warning']('attribute "' + pqa_hr + '" missed start quot(' + fjn9u + ')!!'), t32165 = we0hk + 0x1, qp0ha = xoms2;
        }break;case '/':
        switch (qp0ha) {case xehk0b:
            ncdvuj['setTagName'](cfj97['slice'](t32165, we0hk));case xoms2:case xf9y8l7:case xkw10be:
            qp0ha = xkw10be, ncdvuj['closed'] = !0x0;case x_hpqr:case xuvdig4:case xnud4vg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hweb0k['error']('unexpected end of input'), qp0ha == xehk0b && ncdvuj['setTagName'](cfj97['slice'](t32165, we0hk)), we0hk;case '>':
        switch (qp0ha) {case xehk0b:
            ncdvuj['setTagName'](cfj97['slice'](t32165, we0hk));case xoms2:case xf9y8l7:case xkw10be:
            break;case x_hpqr:case xuvdig4:
            aehpb = cfj97['slice'](t32165, we0hk), '/' === aehpb['slice'](-0x1) && (ncdvuj['closed'] = !0x0, aehpb = aehpb['slice'](0x0, -0x1));case xnud4vg:
            qp0ha === xnud4vg && (aehpb = pqa_hr), qp0ha == x_hpqr ? (hweb0k['warning']('attribute "' + aehpb + '" missed quot(")!!'), ncdvuj['add'](pqa_hr, aehpb['replace'](/&#?\w+;/g, zo5mxs), t32165)) : ('http://www.w3.org/1999/xhtml' === ozsm25[''] && aehpb['match'](/^(?:disabled|checked|selected)$/i) || hweb0k['warning']('attribute "' + aehpb + '" missed value!! "' + aehpb + '" instead!!'), ncdvuj['add'](aehpb, aehpb, t32165));break;case xfnc:
            throw new Error('attribute value missed!!');}return we0hk;case '\u0080':
        fjn9u = '\x20';default:
        if ('\x20' >= fjn9u) switch (qp0ha) {case xehk0b:
            ncdvuj['setTagName'](cfj97['slice'](t32165, we0hk)), qp0ha = xf9y8l7;break;case xuvdig4:
            pqa_hr = cfj97['slice'](t32165, we0hk), qp0ha = xnud4vg;break;case x_hpqr:
            var aehpb = cfj97['slice'](t32165, we0hk)['replace'](/&#?\w+;/g, zo5mxs);hweb0k['warning']('attribute "' + aehpb + '" missed quot(")!!'), ncdvuj['add'](pqa_hr, aehpb, t32165);case xoms2:
            qp0ha = xf9y8l7;} else switch (qp0ha) {case xnud4vg:
            {
              ncdvuj['tagName'];
            }'http://www.w3.org/1999/xhtml' === ozsm25[''] && pqa_hr['match'](/^(?:disabled|checked|selected)$/i) || hweb0k['warning']('attribute "' + pqa_hr + '" missed value!! "' + pqa_hr + '" instead2!!'), ncdvuj['add'](pqa_hr, pqa_hr, t32165), t32165 = we0hk, qp0ha = xuvdig4;break;case xoms2:
            hweb0k['warning']('attribute space is required"' + pqa_hr + '\x22!!');case xf9y8l7:
            qp0ha = xuvdig4, t32165 = we0hk;break;case xfnc:
            qp0ha = x_hpqr, t32165 = we0hk;break;case xkw10be:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}we0hk++;
  }
}function xdjnuvc(cfvujn, igxs4, nvudg) {
  for (var hepa_ = cfvujn['tagName'], _prha = null, r_haq = cfvujn['length']; r_haq--;) {
    var ly$7 = cfvujn[r_haq],
        yf9l = ly$7['qName'],
        kbweh = ly$7['value'],
        uv4di = yf9l['indexOf'](':');if (uv4di > 0x0) var jncfl9 = ly$7['prefix'] = yf9l['slice'](0x0, uv4di),
        n4uv = yf9l['slice'](uv4di + 0x1),
        udcjnv = 'xmlns' === jncfl9 && n4uv;else n4uv = yf9l, jncfl9 = null, udcjnv = 'xmlns' === yf9l && '';ly$7['localName'] = n4uv, udcjnv !== !0x1 && (null == _prha && (_prha = {}, xxm5zs(nvudg, nvudg = {})), nvudg[udcjnv] = _prha[udcjnv] = kbweh, ly$7['uri'] = 'http://www.w3.org/2000/xmlns/', igxs4['startPrefixMapping'](udcjnv, kbweh));
  }for (var r_haq = cfvujn['length']; r_haq--;) {
    ly$7 = cfvujn[r_haq];var jncfl9 = ly$7['prefix'];jncfl9 && ('xml' === jncfl9 && (ly$7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jncfl9 && (ly$7['uri'] = nvudg[jncfl9 || '']));
  }var uv4di = hepa_['indexOf'](':');uv4di > 0x0 ? (jncfl9 = cfvujn['prefix'] = hepa_['slice'](0x0, uv4di), n4uv = cfvujn['localName'] = hepa_['slice'](uv4di + 0x1)) : (jncfl9 = null, n4uv = cfvujn['localName'] = hepa_);var vi4udg = cfvujn['uri'] = nvudg[jncfl9 || ''];if (igxs4['startElement'](vi4udg, n4uv, hepa_, cfvujn), !cfvujn['closed']) return cfvujn['currentNSMap'] = nvudg, cfvujn['localNSMap'] = _prha, !0x0;if (igxs4['endElement'](vi4udg, n4uv, hepa_), _prha) {
    for (jncfl9 in _prha) igxs4['endPrefixMapping'](jncfl9);
  }
}function xoimz(r_hqa, w0kb3, vu4nd, bhe0kp, c7f) {
  if (/^(?:script|textarea)$/i['test'](vu4nd)) {
    var p_hqr = r_hqa['indexOf']('</' + vu4nd + '>', w0kb3),
        mg4xi = r_hqa['substring'](w0kb3 + 0x1, p_hqr);if (/[&<]/['test'](mg4xi)) return (/^script$/i['test'](vu4nd) ? (c7f['characters'](mg4xi, 0x0, mg4xi['length']), p_hqr) : (mg4xi = mg4xi['replace'](/&#?\w+;/g, bhe0kp), c7f['characters'](mg4xi, 0x0, mg4xi['length']), p_hqr)
    );
  }return w0kb3 + 0x1;
}function xbphea0(j9nc, a_qphr, e10kbw, we0h) {
  var fncvuj = we0h[e10kbw];return null == fncvuj && (fncvuj = j9nc['lastIndexOf']('</' + e10kbw + '>'), a_qphr > fncvuj && (fncvuj = j9nc['lastIndexOf']('</' + e10kbw)), we0h[e10kbw] = fncvuj), a_qphr > fncvuj;
}function xxm5zs(m5ox, pk0be) {
  for (var ujndg in m5ox) pk0be[ujndg] = m5ox[ujndg];
}function xk31bw(dvunjg, sx4omi, szo52, xi4d) {
  var j9lnf = dvunjg['charAt'](sx4omi + 0x2);switch (j9lnf) {case '-':
      if ('-' === dvunjg['charAt'](sx4omi + 0x3)) {
        var t613wk = dvunjg['indexOf']('-->', sx4omi + 0x4);return t613wk > sx4omi ? (szo52['comment'](dvunjg, sx4omi + 0x4, t613wk - sx4omi - 0x4), t613wk + 0x3) : (xi4d['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == dvunjg['substr'](sx4omi + 0x3, 0x6)) {
        var t613wk = dvunjg['indexOf'](']]>', sx4omi + 0x9);return szo52['startCDATA'](), szo52['characters'](dvunjg, sx4omi + 0x9, t613wk - sx4omi - 0x9), szo52['endCDATA'](), t613wk + 0x3;
      }var t123w6 = xmos5(dvunjg, sx4omi),
          xs4gim = t123w6['length'];if (xs4gim > 0x1 && /!doctype/i['test'](t123w6[0x0][0x0])) {
        var aqrph = t123w6[0x1][0x0],
            uvgjn = xs4gim > 0x3 && /^public$/i['test'](t123w6[0x2][0x0]) && t123w6[0x3][0x0],
            fl79c8 = xs4gim > 0x4 && t123w6[0x4][0x0],
            t36k1 = t123w6[xs4gim - 0x1];return szo52['startDTD'](aqrph, uvgjn && uvgjn['replace'](/^(['"])(.*?)\1$/, '$2'), fl79c8 && fl79c8['replace'](/^(['"])(.*?)\1$/, '$2')), szo52['endDTD'](), t36k1['index'] + t36k1[0x0]['length'];
      }}return -0x1;
}function xbeah(t32w6, jcuvf, eaphb) {
  var bwt1k3 = t32w6['indexOf']('?>', jcuvf);if (bwt1k3) {
    var ahqrp_ = t32w6['substring'](jcuvf, bwt1k3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ahqrp_) {
      {
        ahqrp_[0x0]['length'];
      }return eaphb['processingInstruction'](ahqrp_[0x1], ahqrp_[0x2]), bwt1k3 + 0x2;
    }return -0x1;
  }return -0x1;
}function xhqpae_() {}function xxdvi4(f9c7l8, hbe0ap) {
  return f9c7l8['__proto__'] = hbe0ap, f9c7l8;
}function xmos5(_hqpra, l$97y) {
  var du4vi,
      d4gsx = [],
      w3tbk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (w3tbk['lastIndex'] = l$97y, w3tbk['exec'](_hqpra); du4vi = w3tbk['exec'](_hqpra);) if (d4gsx['push'](du4vi), du4vi[0x1]) return d4gsx;
}var xepha = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xuj9n = new RegExp('[\\-\\.0-9' + xepha['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xjugvn = new RegExp('^' + xepha['source'] + xuj9n['source'] + '*(?::' + xepha['source'] + xuj9n['source'] + '*)?$'),
    xehk0b = 0x0,
    xuvdig4 = 0x1,
    xnud4vg = 0x2,
    xfnc = 0x3,
    x_hpqr = 0x4,
    xoms2 = 0x5,
    xf9y8l7 = 0x6,
    xkw10be = 0x7;xsmzox5['prototype'] = { 'parse': function (bpk0eh, smx5zo, ncu9f) {
    var $8ly = this['domBuilder'];$8ly['startDocument'](), xxm5zs(smx5zo, smx5zo = {}), xm6(bpk0eh, smx5zo, ncu9f, $8ly, this['errorHandler']), $8ly['endDocument']();
  } }, xhqpae_['prototype'] = { 'setTagName': function (xso) {
    if (!xjugvn['test'](xso)) throw new Error('invalid tagName:' + xso);this['tagName'] = xso;
  }, 'add': function (b310wk, bk13t, iudv) {
    if (!xjugvn['test'](b310wk)) throw new Error('invalid attribute:' + b310wk);this[this['length']++] = { 'qName': b310wk, 'value': bk13t, 'offset': iudv };
  }, 'length': 0x0, 'getLocalName': function (p_h) {
    return this[p_h]['localName'];
  }, 'getLocator': function (cdjuvn) {
    return this[cdjuvn]['locator'];
  }, 'getQName': function (e0habp) {
    return this[e0habp]['qName'];
  }, 'getURI': function (ljfn9c) {
    return this[ljfn9c]['uri'];
  }, 'getValue': function (oz5smx) {
    return this[oz5smx]['value'];
  } }, xxdvi4({}, xxdvi4['prototype']) instanceof xxdvi4 || (xxdvi4 = function (divgx4, soxi4m) {
  function cunj9f() {}cunj9f['prototype'] = soxi4m, cunj9f = new cunj9f();for (soxi4m in divgx4) cunj9f[soxi4m] = divgx4[soxi4m];return cunj9f;
}), exports['XMLReader'] = xsmzox5;