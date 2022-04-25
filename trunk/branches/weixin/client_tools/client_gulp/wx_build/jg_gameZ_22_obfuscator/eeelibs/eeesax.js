var b = wx.$e;
function erltyh() {}function eq3ju(k0bs6, nqu3, aom_7, thlrgx, qn9) {
  function p7cm(i$xt) {
    if (i$xt > 0xffff) {
      i$xt -= 0x10000;var ameoc = 0xd800 + (i$xt >> 0xa),
          d06b5k = 0xdc00 + (0x3ff & i$xt);return String['fromCharCode'](ameoc, d06b5k);
    }return String['fromCharCode'](i$xt);
  }function ig$3x(yrlzt) {
    var ijt$g = yrlzt['slice'](0x1, -0x1);return ijt$g in aom_7 ? aom_7[ijt$g] : '#' === ijt$g['charAt'](0x0) ? p7cm(parseInt(ijt$g['substr'](0x1)['replace']('x', '0x'))) : (qn9['error']('entity not found:' + yrlzt), yrlzt);
  }function ylhrzt(hrlyfz) {
    if (hrlyfz > d58b6) {
      var o_mac7 = k0bs6['substring'](d58b6, hrlyfz)['replace'](/&#?\w+;/g, ig$3x);rxhltg && iq3$j(d58b6), thlrgx['characters'](o_mac7, 0x0, hrlyfz - d58b6), d58b6 = hrlyfz;
    }
  }function iq3$j(uks6n, _a74) {
    for (; uks6n >= d5bw08 && (_a74 = gtxh$l['exec'](k0bs6));) x3qi = _a74['index'], d5bw08 = x3qi + _a74[0x0]['length'], rxhltg['lineNumber']++;rxhltg['columnNumber'] = uks6n - x3qi + 0x1;
  }for (var x3qi = 0x0, d5bw08 = 0x0, gtxh$l = /.*(?:\r\n?|\n)|.*$/g, rxhltg = thlrgx['locator'], wb0d5 = [{ 'currentNSMap': nqu3 }], lyrzht = {}, d58b6 = 0x0;;) {
    try {
      var fyhvrz = k0bs6['indexOf']('<', d58b6);if (0x0 > fyhvrz) {
        if (!k0bs6['substr'](d58b6)['match'](/^\s*$/)) {
          var coampe = thlrgx['doc'],
              hgtlr = coampe['createTextNode'](k0bs6['substr'](d58b6));coampe['appendChild'](hgtlr), thlrgx['currentElement'] = hgtlr;
        }return;
      }switch (fyhvrz > d58b6 && ylhrzt(fyhvrz), k0bs6['charAt'](fyhvrz + 0x1)) {case '/':
          var b9kd6 = k0bs6['indexOf']('>', fyhvrz + 0x3),
              d0285 = k0bs6['substring'](fyhvrz + 0x2, b9kd6),
              q3ji$x = wb0d5['pop']();0x0 > b9kd6 ? (d0285 = k0bs6['substring'](fyhvrz + 0x2)['replace'](/[\s<].*/, ''), qn9['error']('end tag name: ' + d0285 + ' is not complete:' + q3ji$x['tagName']), b9kd6 = fyhvrz + 0x1 + d0285['length']) : d0285['match'](/\s</) && (d0285 = d0285['replace'](/[\s<].*/, ''), qn9['error']('end tag name: ' + d0285 + ' maybe not complete'), b9kd6 = fyhvrz + 0x1 + d0285['length']);var tryz = q3ji$x['localNSMap'],
              s3n9qu = q3ji$x['tagName'] == d0285,
              jg3ix = s3n9qu || q3ji$x['tagName'] && q3ji$x['tagName']['toLowerCase']() == d0285['toLowerCase']();if (jg3ix) {
            if (thlrgx['endElement'](q3ji$x['uri'], q3ji$x['localName'], d0285), tryz) {
              for (var _f4v7 in tryz) thlrgx['endPrefixMapping'](_f4v7);
            }s3n9qu || qn9['fatalError']('end tag name: ' + d0285 + ' is not match the current start tagName:' + q3ji$x['tagName']);
          } else wb0d5['push'](q3ji$x);b9kd6++;break;case '?':
          rxhltg && iq3$j(fyhvrz), b9kd6 = eo7mca_(k0bs6, fyhvrz, thlrgx);break;case '!':
          rxhltg && iq3$j(fyhvrz), b9kd6 = eku9qns(k0bs6, fyhvrz, thlrgx, qn9);break;default:
          rxhltg && iq3$j(fyhvrz);var txlg = new esk0b69(),
              thglzr = wb0d5[wb0d5['length'] - 0x1]['currentNSMap'],
              b9kd6 = ew582(k0bs6, fyhvrz, txlg, thglzr, ig$3x, qn9),
              _4va7m = txlg['length'];if (!txlg['closed'] && exjigt(k0bs6, b9kd6, txlg['tagName'], lyrzht) && (txlg['closed'] = !0x0, aom_7['nbsp'] || qn9['warning']('unclosed xml attribute')), rxhltg && _4va7m) {
            for (var tyhrl = etlrgz(rxhltg, {}), ma4v_ = 0x0; _4va7m > ma4v_; ma4v_++) {
              var lhgzr = txlg[ma4v_];iq3$j(lhgzr['offset']), lhgzr['locator'] = etlrgz(rxhltg, {});
            }thlrgx['locator'] = tyhrl, eamc7po(txlg, thlrgx, thglzr) && wb0d5['push'](txlg), thlrgx['locator'] = rxhltg;
          } else eamc7po(txlg, thlrgx, thglzr) && wb0d5['push'](txlg);'http://www.w3.org/1999/xhtml' !== txlg['uri'] || txlg['closed'] ? b9kd6++ : b9kd6 = egltxh$(k0bs6, b9kd6, txlg['tagName'], ig$3x, thlrgx);}
    } catch (fyhzrl) {
      qn9['error']('element parse error: ' + fyhzrl), b9kd6 = -0x1;
    }b9kd6 > d58b6 ? d58b6 = b9kd6 : ylhrzt(Math['max'](fyhvrz, d58b6) + 0x1);
  }
}function etlrgz(m7ao, kunsq) {
  return kunsq['lineNumber'] = m7ao['lineNumber'], kunsq['columnNumber'] = m7ao['columnNumber'], kunsq;
}function ew582(su9q3, usjn, $ilg, q3ni$j, qjusn3, hrfv) {
  for (var f4_vyz, x$jgit, ytzlrh = ++usjn, gi$x3j = esnk9;;) {
    var tlzghr = su9q3['charAt'](ytzlrh);switch (tlzghr) {case '=':
        if (gi$x3j === etzlghr) f4_vyz = su9q3['slice'](usjn, ytzlrh), gi$x3j = einq3j$;else {
          if (gi$x3j !== ex3gji) throw new Error('attribute equal must after attrName');gi$x3j = einq3j$;
        }break;case '\x27':case '\x22':
        if (gi$x3j === einq3j$ || gi$x3j === etzlghr) {
          if (gi$x3j === etzlghr && (hrfv['warning']('attribute value must after "="'), f4_vyz = su9q3['slice'](usjn, ytzlrh)), usjn = ytzlrh + 0x1, ytzlrh = su9q3['indexOf'](tlzghr, usjn), !(ytzlrh > 0x0)) throw new Error('attribute value no end \'' + tlzghr + '\' match');x$jgit = su9q3['slice'](usjn, ytzlrh)['replace'](/&#?\w+;/g, qjusn3), $ilg['add'](f4_vyz, x$jgit, usjn - 0x1), gi$x3j = ez4vry;
        } else {
          if (gi$x3j != epeom) throw new Error('attribute value must after "="');x$jgit = su9q3['slice'](usjn, ytzlrh)['replace'](/&#?\w+;/g, qjusn3), $ilg['add'](f4_vyz, x$jgit, usjn), hrfv['warning']('attribute "' + f4_vyz + '" missed start quot(' + tlzghr + ')!!'), usjn = ytzlrh + 0x1, gi$x3j = ez4vry;
        }break;case '/':
        switch (gi$x3j) {case esnk9:
            $ilg['setTagName'](su9q3['slice'](usjn, ytzlrh));case ez4vry:case ecm74_:case ehrtlgx:
            gi$x3j = ehrtlgx, $ilg['closed'] = !0x0;case epeom:case etzlghr:case ex3gji:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hrfv['error']('unexpected end of input'), gi$x3j == esnk9 && $ilg['setTagName'](su9q3['slice'](usjn, ytzlrh)), ytzlrh;case '>':
        switch (gi$x3j) {case esnk9:
            $ilg['setTagName'](su9q3['slice'](usjn, ytzlrh));case ez4vry:case ecm74_:case ehrtlgx:
            break;case epeom:case etzlghr:
            x$jgit = su9q3['slice'](usjn, ytzlrh), '/' === x$jgit['slice'](-0x1) && ($ilg['closed'] = !0x0, x$jgit = x$jgit['slice'](0x0, -0x1));case ex3gji:
            gi$x3j === ex3gji && (x$jgit = f4_vyz), gi$x3j == epeom ? (hrfv['warning']('attribute "' + x$jgit + '" missed quot(")!!'), $ilg['add'](f4_vyz, x$jgit['replace'](/&#?\w+;/g, qjusn3), usjn)) : ('http://www.w3.org/1999/xhtml' === q3ni$j[''] && x$jgit['match'](/^(?:disabled|checked|selected)$/i) || hrfv['warning']('attribute "' + x$jgit + '" missed value!! "' + x$jgit + '" instead!!'), $ilg['add'](x$jgit, x$jgit, usjn));break;case einq3j$:
            throw new Error('attribute value missed!!');}return ytzlrh;case '\u0080':
        tlzghr = '\x20';default:
        if ('\x20' >= tlzghr) switch (gi$x3j) {case esnk9:
            $ilg['setTagName'](su9q3['slice'](usjn, ytzlrh)), gi$x3j = ecm74_;break;case etzlghr:
            f4_vyz = su9q3['slice'](usjn, ytzlrh), gi$x3j = ex3gji;break;case epeom:
            var x$jgit = su9q3['slice'](usjn, ytzlrh)['replace'](/&#?\w+;/g, qjusn3);hrfv['warning']('attribute "' + x$jgit + '" missed quot(")!!'), $ilg['add'](f4_vyz, x$jgit, usjn);case ez4vry:
            gi$x3j = ecm74_;} else switch (gi$x3j) {case ex3gji:
            {
              $ilg['tagName'];
            }'http://www.w3.org/1999/xhtml' === q3ni$j[''] && f4_vyz['match'](/^(?:disabled|checked|selected)$/i) || hrfv['warning']('attribute "' + f4_vyz + '" missed value!! "' + f4_vyz + '" instead2!!'), $ilg['add'](f4_vyz, f4_vyz, usjn), usjn = ytzlrh, gi$x3j = etzlghr;break;case ez4vry:
            hrfv['warning']('attribute space is required"' + f4_vyz + '\x22!!');case ecm74_:
            gi$x3j = etzlghr, usjn = ytzlrh;break;case einq3j$:
            gi$x3j = epeom, usjn = ytzlrh;break;case ehrtlgx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ytzlrh++;
  }
}function eamc7po(g$tij, thglrx, tyzrlh) {
  for (var k0d65 = g$tij['tagName'], htgr = null, ijgx$3 = g$tij['length']; ijgx$3--;) {
    var vzyfr = g$tij[ijgx$3],
        q$j3i = vzyfr['qName'],
        y_fz4v = vzyfr['value'],
        n$jq = q$j3i['indexOf'](':');if (n$jq > 0x0) var ju3qsn = vzyfr['prefix'] = q$j3i['slice'](0x0, n$jq),
        yz_v4 = q$j3i['slice'](n$jq + 0x1),
        jxq$ = 'xmlns' === ju3qsn && yz_v4;else yz_v4 = q$j3i, ju3qsn = null, jxq$ = 'xmlns' === q$j3i && '';vzyfr['localName'] = yz_v4, jxq$ !== !0x1 && (null == htgr && (htgr = {}, ehylzrt(tyzrlh, tyzrlh = {})), tyzrlh[jxq$] = htgr[jxq$] = y_fz4v, vzyfr['uri'] = 'http://www.w3.org/2000/xmlns/', thglrx['startPrefixMapping'](jxq$, y_fz4v));
  }for (var ijgx$3 = g$tij['length']; ijgx$3--;) {
    vzyfr = g$tij[ijgx$3];var ju3qsn = vzyfr['prefix'];ju3qsn && ('xml' === ju3qsn && (vzyfr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ju3qsn && (vzyfr['uri'] = tyzrlh[ju3qsn || '']));
  }var n$jq = k0d65['indexOf'](':');n$jq > 0x0 ? (ju3qsn = g$tij['prefix'] = k0d65['slice'](0x0, n$jq), yz_v4 = g$tij['localName'] = k0d65['slice'](n$jq + 0x1)) : (ju3qsn = null, yz_v4 = g$tij['localName'] = k0d65);var us6kn = g$tij['uri'] = tyzrlh[ju3qsn || ''];if (thglrx['startElement'](us6kn, yz_v4, k0d65, g$tij), !g$tij['closed']) return g$tij['currentNSMap'] = tyzrlh, g$tij['localNSMap'] = htgr, !0x0;if (thglrx['endElement'](us6kn, yz_v4, k0d65), htgr) {
    for (ju3qsn in htgr) thglrx['endPrefixMapping'](ju3qsn);
  }
}function egltxh$(lht, oea, acemp, _v4zfy, hgx) {
  if (/^(?:script|textarea)$/i['test'](acemp)) {
    var hzyfrv = lht['indexOf']('</' + acemp + '>', oea),
        xjgti$ = lht['substring'](oea + 0x1, hzyfrv);if (/[&<]/['test'](xjgti$)) return (/^script$/i['test'](acemp) ? (hgx['characters'](xjgti$, 0x0, xjgti$['length']), hzyfrv) : (xjgti$ = xjgti$['replace'](/&#?\w+;/g, _v4zfy), hgx['characters'](xjgti$, 0x0, xjgti$['length']), hzyfrv)
    );
  }return oea + 0x1;
}function exjigt(uns9kq, s0k69, v4ma, ryzf4v) {
  var knqu9 = ryzf4v[v4ma];return null == knqu9 && (knqu9 = uns9kq['lastIndexOf']('</' + v4ma + '>'), s0k69 > knqu9 && (knqu9 = uns9kq['lastIndexOf']('</' + v4ma)), ryzf4v[v4ma] = knqu9), s0k69 > knqu9;
}function ehylzrt(fyvr4, sb09) {
  for (var j$qi in fyvr4) sb09[j$qi] = fyvr4[j$qi];
}function eku9qns(rfhylz, zv4fy_, sknu, ubs6k) {
  var d08w5b = rfhylz['charAt'](zv4fy_ + 0x2);switch (d08w5b) {case '-':
      if ('-' === rfhylz['charAt'](zv4fy_ + 0x3)) {
        var mpocae = rfhylz['indexOf']('-->', zv4fy_ + 0x4);return mpocae > zv4fy_ ? (sknu['comment'](rfhylz, zv4fy_ + 0x4, mpocae - zv4fy_ - 0x4), mpocae + 0x3) : (ubs6k['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rfhylz['substr'](zv4fy_ + 0x3, 0x6)) {
        var mpocae = rfhylz['indexOf'](']]>', zv4fy_ + 0x9);return sknu['startCDATA'](), sknu['characters'](rfhylz, zv4fy_ + 0x9, mpocae - zv4fy_ - 0x9), sknu['endCDATA'](), mpocae + 0x3;
      }var _47vyf = ed9k0b(rfhylz, zv4fy_),
          trylh = _47vyf['length'];if (trylh > 0x1 && /!doctype/i['test'](_47vyf[0x0][0x0])) {
        var fva_4 = _47vyf[0x1][0x0],
            $igtx = trylh > 0x3 && /^public$/i['test'](_47vyf[0x2][0x0]) && _47vyf[0x3][0x0],
            moapec = trylh > 0x4 && _47vyf[0x4][0x0],
            g$lxth = _47vyf[trylh - 0x1];return sknu['startDTD'](fva_4, $igtx && $igtx['replace'](/^(['"])(.*?)\1$/, '$2'), moapec && moapec['replace'](/^(['"])(.*?)\1$/, '$2')), sknu['endDTD'](), g$lxth['index'] + g$lxth[0x0]['length'];
      }}return -0x1;
}function eo7mca_(nuqs39, fzvh, b6d508) {
  var usb69k = nuqs39['indexOf']('?>', fzvh);if (usb69k) {
    var n$q = nuqs39['substring'](fzvh, usb69k)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (n$q) {
      {
        n$q[0x0]['length'];
      }return b6d508['processingInstruction'](n$q[0x1], n$q[0x2]), usb69k + 0x2;
    }return -0x1;
  }return -0x1;
}function esk0b69() {}function eltgxi$(s9bk6u, zglrt) {
  return s9bk6u['__proto__'] = zglrt, s9bk6u;
}function ed9k0b(qnjsu3, nkus9q) {
  var j3iq,
      gxitl = [],
      b80w = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (b80w['lastIndex'] = nkus9q, b80w['exec'](qnjsu3); j3iq = b80w['exec'](qnjsu3);) if (gxitl['push'](j3iq), j3iq[0x1]) return gxitl;
}var eltrh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eapcom7 = new RegExp('[\\-\\.0-9' + eltrh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ensqu3j = new RegExp('^' + eltrh['source'] + eapcom7['source'] + '*(?::' + eltrh['source'] + eapcom7['source'] + '*)?$'),
    esnk9 = 0x0,
    etzlghr = 0x1,
    ex3gji = 0x2,
    einq3j$ = 0x3,
    epeom = 0x4,
    ez4vry = 0x5,
    ecm74_ = 0x6,
    ehrtlgx = 0x7;erltyh['prototype'] = { 'parse': function (ks069, us9k, tgixj$) {
    var hgxltr = this['domBuilder'];hgxltr['startDocument'](), ehylzrt(us9k, us9k = {}), eq3ju(ks069, us9k, tgixj$, hgxltr, this['errorHandler']), hgxltr['endDocument']();
  } }, esk0b69['prototype'] = { 'setTagName': function (kn6su) {
    if (!ensqu3j['test'](kn6su)) throw new Error('invalid tagName:' + kn6su);this['tagName'] = kn6su;
  }, 'add': function (j3q$ni, lhrt, njus3) {
    if (!ensqu3j['test'](j3q$ni)) throw new Error('invalid attribute:' + j3q$ni);this[this['length']++] = { 'qName': j3q$ni, 'value': lhrt, 'offset': njus3 };
  }, 'length': 0x0, 'getLocalName': function (kusn6) {
    return this[kusn6]['localName'];
  }, 'getLocator': function (aoce) {
    return this[aoce]['locator'];
  }, 'getQName': function (qusn3) {
    return this[qusn3]['qName'];
  }, 'getURI': function (mco_7a) {
    return this[mco_7a]['uri'];
  }, 'getValue': function (b09kd) {
    return this[b09kd]['value'];
  } }, eltgxi$({}, eltgxi$['prototype']) instanceof eltgxi$ || (eltgxi$ = function (j3nsqu, vzy4f_) {
  function n9uk() {}n9uk['prototype'] = vzy4f_, n9uk = new n9uk();for (vzy4f_ in j3nsqu) n9uk[vzy4f_] = j3nsqu[vzy4f_];return n9uk;
}), exports['XMLReader'] = erltyh;