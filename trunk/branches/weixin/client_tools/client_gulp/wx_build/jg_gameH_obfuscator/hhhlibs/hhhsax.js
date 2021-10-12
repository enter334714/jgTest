var O = wx.$C;
function h_tpygmv() {}function h_axi$(w5yud, g5dvy, wr, eix$0, jlo83) {
  function nhtpm6(qbkf0x) {
    var j57w4 = qbkf0x['slice'](0x1, -0x1);return j57w4 in wr ? wr[j57w4] : '#' === j57w4['charAt'](0x0) ? 0xffff < (j57w4 = parseInt(j57w4['substr'](0x1)['replace']('x', '0x'))) ? (j57w4 -= 0x10000, String['fromCharCode'](0xd800 + (j57w4 >> 0xa), 0xdc00 + (0x3ff & j57w4))) : String['fromCharCode'](j57w4) : (jlo83['error']('entity not found:' + qbkf0x), qbkf0x);
  }function c9s1zk(ibf20) {
    var _or74j;hs91 < ibf20 && (_or74j = w5yud['substring'](hs91, ibf20)['replace'](/&#?\w+;/g, nhtpm6), vypmg && r_7w4j(hs91), eix$0['characters'](_or74j, 0x0, ibf20 - hs91), hs91 = ibf20);
  }function r_7w4j(gdmyvu, _o7rj4) {
    for (; wj4r7 <= gdmyvu && (_o7rj4 = c1k9q['exec'](w5yud));) vmyu = _o7rj4['index'], wj4r7 = vmyu + _o7rj4[0x0]['length'], vypmg['lineNumber']++;vypmg['columnNumber'] = gdmyvu - vmyu + 0x1;
  }for (var vmyu = 0x0, wj4r7 = 0x0, c1k9q = /.*(?:\r\n?|\n)|.*$/g, vypmg = eix$0['locator'], w47d_ = [{ 'currentNSMap': g5dvy }], ph6t = {}, hs91 = 0x0;;) {
    try {
      var ntgy = w5yud['indexOf']('<', hs91),
          w5d47,
          $ae2i;if (ntgy < 0x0) return void (w5yud['substr'](hs91)['match'](/^\s*$/) || ($ae2i = (w5d47 = eix$0['doc'])['createTextNode'](w5yud['substr'](hs91)), w5d47['appendChild']($ae2i), eix$0['currentElement'] = $ae2i));switch (hs91 < ntgy && c9s1zk(ntgy), w5yud['charAt'](ntgy + 0x1)) {case '/':
          var tp6h = w5yud['indexOf']('>', ntgy + 0x3),
              bksfq = w5yud['substring'](ntgy + 0x2, tp6h),
              b0fi = w47d_['pop']();tp6h < 0x0 ? (bksfq = w5yud['substring'](ntgy + 0x2)['replace'](/[\s<].*/, ''), jlo83['error']('end tag name: ' + bksfq + ' is not complete:' + b0fi['tagName']), tp6h = ntgy + 0x1 + bksfq['length']) : bksfq['match'](/\s</) && (bksfq = bksfq['replace'](/[\s<].*/, ''), jlo83['error']('end tag name: ' + bksfq + ' maybe not complete'), tp6h = ntgy + 0x1 + bksfq['length']);var k0bfqs = b0fi['localNSMap'],
              s1zch = b0fi['tagName'] == bksfq;if (s1zch || b0fi['tagName'] && b0fi['tagName']['toLowerCase']() == bksfq['toLowerCase']()) {
            if (eix$0['endElement'](b0fi['uri'], b0fi['localName'], bksfq), k0bfqs) {
              for (var o_rj74 in k0bfqs) eix$0['endPrefixMapping'](o_rj74);
            }s1zch || jlo83['fatalError']('end tag name: ' + bksfq + ' is not match the current start tagName:' + b0fi['tagName']);
          } else w47d_['push'](b0fi);tp6h++;break;case '?':
          vypmg && r_7w4j(ntgy), tp6h = h__7wrj(w5yud, ntgy, eix$0);break;case '!':
          vypmg && r_7w4j(ntgy), tp6h = h_qf0xk(w5yud, ntgy, eix$0, jlo83);break;default:
          vypmg && r_7w4j(ntgy);var rjw4_ = new h_fk0qbx(),
              mtvuy = w47d_[w47d_['length'] - 0x1]['currentNSMap'],
              tp6h = h_tng6(w5yud, ntgy, rjw4_, mtvuy, nhtpm6, jlo83),
              vugd = rjw4_['length'];if (!rjw4_['closed'] && h_i$2e(w5yud, tp6h, rjw4_['tagName'], ph6t) && (rjw4_['closed'] = !0x0, wr['nbsp'] || jlo83['warning']('unclosed xml attribute')), vypmg && vugd) {
            for (var mypgnt = h_fxbq02(vypmg, {}), _u5w4d = 0x0; _u5w4d < vugd; _u5w4d++) {
              var sbk1q = rjw4_[_u5w4d];r_7w4j(sbk1q['offset']), sbk1q['locator'] = h_fxbq02(vypmg, {});
            }eix$0['locator'] = mypgnt, h_c6nph(rjw4_, eix$0, mtvuy) && w47d_['push'](rjw4_), eix$0['locator'] = vypmg;
          } else h_c6nph(rjw4_, eix$0, mtvuy) && w47d_['push'](rjw4_);'http://www.w3.org/1999/xhtml' !== rjw4_['uri'] || rjw4_['closed'] ? tp6h++ : tp6h = h_udgv5(w5yud, tp6h, rjw4_['tagName'], nhtpm6, eix$0);}
    } catch (j7_o) {
      jlo83['error']('element parse error: ' + j7_o), tp6h = -0x1;
    }hs91 < tp6h ? hs91 = tp6h : c9s1zk(Math['max'](ntgy, hs91) + 0x1);
  }
}function h_fxbq02(sh19cz, phcn6) {
  return phcn6['lineNumber'] = sh19cz['lineNumber'], phcn6['columnNumber'] = sh19cz['columnNumber'], phcn6;
}function h_tng6(thmnp, xe0i2, _du, jrl3o8, j_w4r, _7w4d5) {
  for (var e2i$xa, x$a2e = ++xe0i2, d5_v = h_xfkq0b;;) {
    var lrj83o = thmnp['charAt'](x$a2e);switch (lrj83o) {case '=':
        if (d5_v === h_tvgu) e2i$xa = thmnp['slice'](xe0i2, x$a2e), d5_v = h_hc691z;else {
          if (d5_v !== h_fbx02i) throw new Error('attribute equal must after attrName');d5_v = h_hc691z;
        }break;case '\x27':case '\x22':
        if (d5_v === h_hc691z || d5_v === h_tvgu) {
          if (d5_v === h_tvgu && (_7w4d5['warning']('attribute value must after "="'), e2i$xa = thmnp['slice'](xe0i2, x$a2e)), !(0x0 < (x$a2e = thmnp['indexOf'](lrj83o, xe0i2 = x$a2e + 0x1)))) throw new Error('attribute value no end \'' + lrj83o + '\' match');sz91k = thmnp['slice'](xe0i2, x$a2e)['replace'](/&#?\w+;/g, j_w4r), _du['add'](e2i$xa, sz91k, xe0i2 - 0x1), d5_v = h_fk0qsb;
        } else {
          if (d5_v != h_mnpth) throw new Error('attribute value must after "="');sz91k = thmnp['slice'](xe0i2, x$a2e)['replace'](/&#?\w+;/g, j_w4r), _du['add'](e2i$xa, sz91k, xe0i2), _7w4d5['warning']('attribute "' + e2i$xa + '" missed start quot(' + lrj83o + ')!!'), xe0i2 = x$a2e + 0x1, d5_v = h_fk0qsb;
        }break;case '/':
        switch (d5_v) {case h_xfkq0b:
            _du['setTagName'](thmnp['slice'](xe0i2, x$a2e));case h_fk0qsb:case h_gptmn6:case h_bif2x:
            d5_v = h_bif2x, _du['closed'] = !0x0;case h_mnpth:case h_tvgu:case h_fbx02i:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _7w4d5['error']('unexpected end of input'), d5_v == h_xfkq0b && _du['setTagName'](thmnp['slice'](xe0i2, x$a2e)), x$a2e;case '>':
        switch (d5_v) {case h_xfkq0b:
            _du['setTagName'](thmnp['slice'](xe0i2, x$a2e));case h_fk0qsb:case h_gptmn6:case h_bif2x:
            break;case h_mnpth:case h_tvgu:
            '/' === (sz91k = thmnp['slice'](xe0i2, x$a2e))['slice'](-0x1) && (_du['closed'] = !0x0, sz91k = sz91k['slice'](0x0, -0x1));case h_fbx02i:
            d5_v === h_fbx02i && (sz91k = e2i$xa), d5_v == h_mnpth ? (_7w4d5['warning']('attribute "' + sz91k + '" missed quot(")!!'), _du['add'](e2i$xa, sz91k['replace'](/&#?\w+;/g, j_w4r), xe0i2)) : ('http://www.w3.org/1999/xhtml' === jrl3o8[''] && sz91k['match'](/^(?:disabled|checked|selected)$/i) || _7w4d5['warning']('attribute "' + sz91k + '" missed value!! "' + sz91k + '" instead!!'), _du['add'](sz91k, sz91k, xe0i2));break;case h_hc691z:
            throw new Error('attribute value missed!!');}return x$a2e;case '\u0080':
        lrj83o = '\x20';default:
        if (lrj83o <= '\x20') switch (d5_v) {case h_xfkq0b:
            _du['setTagName'](thmnp['slice'](xe0i2, x$a2e)), d5_v = h_gptmn6;break;case h_tvgu:
            e2i$xa = thmnp['slice'](xe0i2, x$a2e), d5_v = h_fbx02i;break;case h_mnpth:
            var sz91k = thmnp['slice'](xe0i2, x$a2e)['replace'](/&#?\w+;/g, j_w4r);_7w4d5['warning']('attribute "' + sz91k + '" missed quot(")!!'), _du['add'](e2i$xa, sz91k, xe0i2);case h_fk0qsb:
            d5_v = h_gptmn6;} else switch (d5_v) {case h_fbx02i:
            _du['tagName'], 'http://www.w3.org/1999/xhtml' === jrl3o8[''] && e2i$xa['match'](/^(?:disabled|checked|selected)$/i) || _7w4d5['warning']('attribute "' + e2i$xa + '" missed value!! "' + e2i$xa + '" instead2!!'), _du['add'](e2i$xa, e2i$xa, xe0i2), xe0i2 = x$a2e, d5_v = h_tvgu;break;case h_fk0qsb:
            _7w4d5['warning']('attribute space is required"' + e2i$xa + '\x22!!');case h_gptmn6:
            d5_v = h_tvgu, xe0i2 = x$a2e;break;case h_hc691z:
            d5_v = h_mnpth, xe0i2 = x$a2e;break;case h_bif2x:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x$a2e++;
  }
}function h_c6nph(fsbq, f0, u4d5w_) {
  for (var kq0sf = fsbq['tagName'], pgvmty = null, ksfq1b = fsbq['length']; ksfq1b--;) {
    var _5j47w = fsbq[ksfq1b],
        w_475 = _5j47w['qName'],
        guyv = _5j47w['value'],
        ro4j3;w_475 = 0x0 < (gy5uv = w_475['indexOf'](':')) ? (kbxq0f = _5j47w['prefix'] = w_475['slice'](0x0, gy5uv), ro4j3 = w_475['slice'](gy5uv + 0x1), 'xmlns' === kbxq0f && ro4j3) : (kbxq0f = null, 'xmlns' === (ro4j3 = w_475) && ''), _5j47w['localName'] = ro4j3, !0x1 !== w_475 && (null == pgvmty && (pgvmty = {}, h_gy5vud(u4d5w_, u4d5w_ = {})), u4d5w_[w_475] = pgvmty[w_475] = guyv, _5j47w['uri'] = 'http://www.w3.org/2000/xmlns/', f0['startPrefixMapping'](w_475, guyv));
  }for (ksfq1b = fsbq['length']; ksfq1b--;) (kbxq0f = (_5j47w = fsbq[ksfq1b])['prefix']) && ('xml' === kbxq0f && (_5j47w['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kbxq0f && (_5j47w['uri'] = u4d5w_[kbxq0f || '']));var gy5uv;ro4j3 = 0x0 < (gy5uv = kq0sf['indexOf'](':')) ? (kbxq0f = fsbq['prefix'] = kq0sf['slice'](0x0, gy5uv), fsbq['localName'] = kq0sf['slice'](gy5uv + 0x1)) : (kbxq0f = null, fsbq['localName'] = kq0sf);var kfqbs1 = fsbq['uri'] = u4d5w_[kbxq0f || ''];if (f0['startElement'](kfqbs1, ro4j3, kq0sf, fsbq), !fsbq['closed']) return fsbq['currentNSMap'] = u4d5w_, fsbq['localNSMap'] = pgvmty, !0x0;if (f0['endElement'](kfqbs1, ro4j3, kq0sf), pgvmty) {
    for (var kbxq0f in pgvmty) f0['endPrefixMapping'](kbxq0f);
  }
}function h_udgv5(bq0skf, f20xqb, gvdmu, jr743, tgypv) {
  if (/^(?:script|textarea)$/i['test'](gvdmu)) {
    var q0fsk = bq0skf['indexOf']('</' + gvdmu + '>', f20xqb),
        bq0skf = bq0skf['substring'](f20xqb + 0x1, q0fsk);if (/[&<]/['test'](bq0skf)) return (/^script$/i['test'](gvdmu) || (bq0skf = bq0skf['replace'](/&#?\w+;/g, jr743)), tgypv['characters'](bq0skf, 0x0, bq0skf['length']), q0fsk
    );
  }return f20xqb + 0x1;
}function h_i$2e(qxkf, hs91z, j57w4_, e2i0x$) {
  var muvg = e2i0x$[j57w4_];return null == muvg && ((muvg = qxkf['lastIndexOf']('</' + j57w4_ + '>')) < hs91z && (muvg = qxkf['lastIndexOf']('</' + j57w4_)), e2i0x$[j57w4_] = muvg), muvg < hs91z;
}function h_gy5vud(vptmg, z1chs9) {
  for (var d754w_ in vptmg) z1chs9[d754w_] = vptmg[d754w_];
}function h_qf0xk(typgv, yptvmg, sbf1kq, s1h9zc) {
  var skf0bq = typgv['charAt'](yptvmg + 0x2);if ('-' === skf0bq) return '-' !== typgv['charAt'](yptvmg + 0x3) ? -0x1 : yptvmg < (bsqk0 = typgv['indexOf']('-->', yptvmg + 0x4)) ? (sbf1kq['comment'](typgv, yptvmg + 0x4, bsqk0 - yptvmg - 0x4), bsqk0 + 0x3) : (s1h9zc['error']('Unclosed comment'), -0x1);if ('CDATA[' == typgv['substr'](yptvmg + 0x3, 0x6)) {
    var bsqk0 = typgv['indexOf'](']]>', yptvmg + 0x9);return sbf1kq['startCDATA'](), sbf1kq['characters'](typgv, yptvmg + 0x9, bsqk0 - yptvmg - 0x9), sbf1kq['endCDATA'](), bsqk0 + 0x3;
  }skf0bq = h_ks1cq(typgv, yptvmg), s1h9zc = skf0bq['length'];if (0x1 < s1h9zc && /!doctype/i['test'](skf0bq[0x0][0x0])) return bsqk0 = skf0bq[0x1][0x0], typgv = 0x3 < s1h9zc && /^public$/i['test'](skf0bq[0x2][0x0]) && skf0bq[0x3][0x0], yptvmg = 0x4 < s1h9zc && skf0bq[0x4][0x0], s1h9zc = skf0bq[s1h9zc - 0x1], (sbf1kq['startDTD'](bsqk0, typgv && typgv['replace'](/^(['"])(.*?)\1$/, '$2'), yptvmg && yptvmg['replace'](/^(['"])(.*?)\1$/, '$2')), sbf1kq['endDTD'](), s1h9zc['index'] + s1h9zc[0x0]['length']);return -0x1;
}function h__7wrj(vumy, utygv, kbq0xf) {
  var dvuy5w = vumy['indexOf']('?>', utygv);if (dvuy5w) return utygv = vumy['substring'](utygv, dvuy5w)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), utygv ? (utygv[0x0]['length'], kbq0xf['processingInstruction'](utygv[0x1], utygv[0x2]), dvuy5w + 0x2) : -0x1;return -0x1;
}function h_fk0qbx() {}function h_ydvuw5($ie2ax, qkb1) {
  return $ie2ax['__proto__'] = qkb1, $ie2ax;
}function h_ks1cq(c9z1k, mpgn6t) {
  var hc9zs,
      f1ksq = [],
      f0xe2i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (f0xe2i['lastIndex'] = mpgn6t, f0xe2i['exec'](c9z1k); hc9zs = f0xe2i['exec'](c9z1k);) if (f1ksq['push'](hc9zs), hc9zs[0x1]) return f1ksq;
}var h_c9sq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_ntpgm = new RegExp('[\\-\\.0-9' + h_c9sq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_dug5yv = new RegExp('^' + h_c9sq['source'] + h_ntpgm['source'] + '*(?::' + h_c9sq['source'] + h_ntpgm['source'] + '*)?$'),
    h_xfkq0b = 0x0,
    h_tvgu = 0x1,
    h_fbx02i = 0x2,
    h_hc691z = 0x3,
    h_mnpth = 0x4,
    h_fk0qsb = 0x5,
    h_gptmn6 = 0x6,
    h_bif2x = 0x7;h_tpygmv['prototype'] = { 'parse': function (i20fxe, mygnp, ytpmg) {
    var duyw5 = this['domBuilder'];duyw5['startDocument'](), h_gy5vud(mygnp, mygnp = {}), h_axi$(i20fxe, mygnp, ytpmg, duyw5, this['errorHandler']), duyw5['endDocument']();
  } }, h_fk0qbx['prototype'] = { 'setTagName': function (yuvmgt) {
    if (!h_dug5yv['test'](yuvmgt)) throw new Error('invalid tagName:' + yuvmgt);this['tagName'] = yuvmgt;
  }, 'add': function (l3j8o, qfx02b, thzn6p) {
    if (!h_dug5yv['test'](l3j8o)) throw new Error('invalid attribute:' + l3j8o);this[this['length']++] = { 'qName': l3j8o, 'value': qfx02b, 'offset': thzn6p };
  }, 'length': 0x0, 'getLocalName': function (i$xea2) {
    return this[i$xea2]['localName'];
  }, 'getLocator': function (nht6pm) {
    return this[nht6pm]['locator'];
  }, 'getQName': function (b2q0) {
    return this[b2q0]['qName'];
  }, 'getURI': function (chzn6p) {
    return this[chzn6p]['uri'];
  }, 'getValue': function (ol3j8r) {
    return this[ol3j8r]['value'];
  } }, h_ydvuw5({}, h_ydvuw5['prototype']) instanceof h_ydvuw5 || (h_ydvuw5 = function (_rw74, chzp6) {
  function l3or() {}for (chzp6 in l3or['prototype'] = chzp6, l3or = new l3or(), _rw74) l3or[chzp6] = _rw74[chzp6];return l3or;
}), exports['XMLReader'] = h_tpygmv;