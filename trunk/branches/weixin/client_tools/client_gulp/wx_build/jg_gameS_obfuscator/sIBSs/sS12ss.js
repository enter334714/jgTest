var K = wx.$S;
function so9k3v() {}function ssqg1pj(dhpsy, shdpy, qys5p, ouzvr, jsg1p) {
  function d$4ah5(ozw9) {
    if (ozw9 > 0xffff) {
      ozw9 -= 0x10000;var ure43$ = 0xd800 + (ozw9 >> 0xa),
          uae$4d = 0xdc00 + (0x3ff & ozw9);return String['fromCharCode'](ure43$, uae$4d);
    }return String['fromCharCode'](ozw9);
  }function r3zkv(zvk) {
    var hd45$a = zvk['slice'](0x1, -0x1);return hd45$a in qys5p ? qys5p[hd45$a] : '#' === hd45$a['charAt'](0x0) ? d$4ah5(parseInt(hd45$a['substr'](0x1)['replace']('x', '0x'))) : (jsg1p['error']('entity not found:' + zvk), zvk);
  }function kw09zc($d5e4) {
    if ($d5e4 > yjpqsg) {
      var qyj = dhpsy['substring'](yjpqsg, $d5e4)['replace'](/&#?\w+;/g, r3zkv);deu$a4 && m7tnx2(yjpqsg), ouzvr['characters'](qyj, 0x0, $d5e4 - yjpqsg), yjpqsg = $d5e4;
    }
  }function m7tnx2(_wi90, h$d45a) {
    for (; _wi90 >= ea$54 && (h$d45a = x2_i['exec'](dhpsy));) vk3oz9 = h$d45a['index'], ea$54 = vk3oz9 + h$d45a[0x0]['length'], deu$a4['lineNumber']++;deu$a4['columnNumber'] = _wi90 - vk3oz9 + 0x1;
  }for (var vk3oz9 = 0x0, ea$54 = 0x0, x2_i = /.*(?:\r\n?|\n)|.*$/g, deu$a4 = ouzvr['locator'], j6b18l = [{ 'currentNSMap': shdpy }], x2tn = {}, yjpqsg = 0x0;;) {
    try {
      var a5d$e = dhpsy['indexOf']('<', yjpqsg);if (0x0 > a5d$e) {
        if (!dhpsy['substr'](yjpqsg)['match'](/^\s*$/)) {
          var l81f6b = ouzvr['doc'],
              reo3v = l81f6b['createTextNode'](dhpsy['substr'](yjpqsg));l81f6b['appendChild'](reo3v), ouzvr['currentElement'] = reo3v;
        }return;
      }switch (a5d$e > yjpqsg && kw09zc(a5d$e), dhpsy['charAt'](a5d$e + 0x1)) {case '/':
          var ti2nxm = dhpsy['indexOf']('>', a5d$e + 0x3),
              j8l6b1 = dhpsy['substring'](a5d$e + 0x2, ti2nxm),
              mtx27 = j6b18l['pop']();0x0 > ti2nxm ? (j8l6b1 = dhpsy['substring'](a5d$e + 0x2)['replace'](/[\s<].*/, ''), jsg1p['error']('end tag name: ' + j8l6b1 + ' is not complete:' + mtx27['tagName']), ti2nxm = a5d$e + 0x1 + j8l6b1['length']) : j8l6b1['match'](/\s</) && (j8l6b1 = j8l6b1['replace'](/[\s<].*/, ''), jsg1p['error']('end tag name: ' + j8l6b1 + ' maybe not complete'), ti2nxm = a5d$e + 0x1 + j8l6b1['length']);var u$d4ae = mtx27['localNSMap'],
              bl861f = mtx27['tagName'] == j8l6b1,
              gspjyq = bl861f || mtx27['tagName'] && mtx27['tagName']['toLowerCase']() == j8l6b1['toLowerCase']();if (gspjyq) {
            if (ouzvr['endElement'](mtx27['uri'], mtx27['localName'], j8l6b1), u$d4ae) {
              for (var qjg1p in u$d4ae) ouzvr['endPrefixMapping'](qjg1p);
            }bl861f || jsg1p['fatalError']('end tag name: ' + j8l6b1 + ' is not match the current start tagName:' + mtx27['tagName']);
          } else j6b18l['push'](mtx27);ti2nxm++;break;case '?':
          deu$a4 && m7tnx2(a5d$e), ti2nxm = se43$ur(dhpsy, a5d$e, ouzvr);break;case '!':
          deu$a4 && m7tnx2(a5d$e), ti2nxm = si2cmx(dhpsy, a5d$e, ouzvr, jsg1p);break;default:
          deu$a4 && m7tnx2(a5d$e);var zov3k = new swk9(),
              _0icw = j6b18l[j6b18l['length'] - 0x1]['currentNSMap'],
              ti2nxm = sdhs5ya(dhpsy, a5d$e, zov3k, _0icw, r3zkv, jsg1p),
              ur3eov = zov3k['length'];if (!zov3k['closed'] && sr4o3(dhpsy, ti2nxm, zov3k['tagName'], x2tn) && (zov3k['closed'] = !0x0, qys5p['nbsp'] || jsg1p['warning']('unclosed xml attribute')), deu$a4 && ur3eov) {
            for (var l6j81 = sw_09k(deu$a4, {}), mnxit = 0x0; ur3eov > mnxit; mnxit++) {
              var phq5y = zov3k[mnxit];m7tnx2(phq5y['offset']), phq5y['locator'] = sw_09k(deu$a4, {});
            }ouzvr['locator'] = l6j81, svw0k9z(zov3k, ouzvr, _0icw) && j6b18l['push'](zov3k), ouzvr['locator'] = deu$a4;
          } else svw0k9z(zov3k, ouzvr, _0icw) && j6b18l['push'](zov3k);'http://www.w3.org/1999/xhtml' !== zov3k['uri'] || zov3k['closed'] ? ti2nxm++ : ti2nxm = sour43e(dhpsy, ti2nxm, zov3k['tagName'], r3zkv, ouzvr);}
    } catch (_9c0wi) {
      jsg1p['error']('element parse error: ' + _9c0wi), ti2nxm = -0x1;
    }ti2nxm > yjpqsg ? yjpqsg = ti2nxm : kw09zc(Math['max'](a5d$e, yjpqsg) + 0x1);
  }
}function sw_09k(bj1l68, phqgy) {
  return phqgy['lineNumber'] = bj1l68['lineNumber'], phqgy['columnNumber'] = bj1l68['columnNumber'], phqgy;
}function sdhs5ya(_cxi0w, w90ic_, yha$5, ea$u4d, pgyjqs, w90czk) {
  for (var jg1b8q, $ayh5, ur43oe = ++w90ic_, k9vz0 = s_x;;) {
    var d$hay = _cxi0w['charAt'](ur43oe);switch (d$hay) {case '=':
        if (k9vz0 === sygqsh) jg1b8q = _cxi0w['slice'](w90ic_, ur43oe), k9vz0 = sdys5ah;else {
          if (k9vz0 !== su3r4$e) throw new Error('attribute equal must after attrName');k9vz0 = sdys5ah;
        }break;case '\x27':case '\x22':
        if (k9vz0 === sdys5ah || k9vz0 === sygqsh) {
          if (k9vz0 === sygqsh && (w90czk['warning']('attribute value must after "="'), jg1b8q = _cxi0w['slice'](w90ic_, ur43oe)), w90ic_ = ur43oe + 0x1, ur43oe = _cxi0w['indexOf'](d$hay, w90ic_), !(ur43oe > 0x0)) throw new Error('attribute value no end \'' + d$hay + '\' match');$ayh5 = _cxi0w['slice'](w90ic_, ur43oe)['replace'](/&#?\w+;/g, pgyjqs), yha$5['add'](jg1b8q, $ayh5, w90ic_ - 0x1), k9vz0 = sysphg;
        } else {
          if (k9vz0 != s_c0k9) throw new Error('attribute value must after "="');$ayh5 = _cxi0w['slice'](w90ic_, ur43oe)['replace'](/&#?\w+;/g, pgyjqs), yha$5['add'](jg1b8q, $ayh5, w90ic_), w90czk['warning']('attribute "' + jg1b8q + '" missed start quot(' + d$hay + ')!!'), w90ic_ = ur43oe + 0x1, k9vz0 = sysphg;
        }break;case '/':
        switch (k9vz0) {case s_x:
            yha$5['setTagName'](_cxi0w['slice'](w90ic_, ur43oe));case sysphg:case syhd$a5:case sh4a$d5:
            k9vz0 = sh4a$d5, yha$5['closed'] = !0x0;case s_c0k9:case sygqsh:case su3r4$e:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w90czk['error']('unexpected end of input'), k9vz0 == s_x && yha$5['setTagName'](_cxi0w['slice'](w90ic_, ur43oe)), ur43oe;case '>':
        switch (k9vz0) {case s_x:
            yha$5['setTagName'](_cxi0w['slice'](w90ic_, ur43oe));case sysphg:case syhd$a5:case sh4a$d5:
            break;case s_c0k9:case sygqsh:
            $ayh5 = _cxi0w['slice'](w90ic_, ur43oe), '/' === $ayh5['slice'](-0x1) && (yha$5['closed'] = !0x0, $ayh5 = $ayh5['slice'](0x0, -0x1));case su3r4$e:
            k9vz0 === su3r4$e && ($ayh5 = jg1b8q), k9vz0 == s_c0k9 ? (w90czk['warning']('attribute "' + $ayh5 + '" missed quot(")!!'), yha$5['add'](jg1b8q, $ayh5['replace'](/&#?\w+;/g, pgyjqs), w90ic_)) : ('http://www.w3.org/1999/xhtml' === ea$u4d[''] && $ayh5['match'](/^(?:disabled|checked|selected)$/i) || w90czk['warning']('attribute "' + $ayh5 + '" missed value!! "' + $ayh5 + '" instead!!'), yha$5['add']($ayh5, $ayh5, w90ic_));break;case sdys5ah:
            throw new Error('attribute value missed!!');}return ur43oe;case '\u0080':
        d$hay = '\x20';default:
        if ('\x20' >= d$hay) switch (k9vz0) {case s_x:
            yha$5['setTagName'](_cxi0w['slice'](w90ic_, ur43oe)), k9vz0 = syhd$a5;break;case sygqsh:
            jg1b8q = _cxi0w['slice'](w90ic_, ur43oe), k9vz0 = su3r4$e;break;case s_c0k9:
            var $ayh5 = _cxi0w['slice'](w90ic_, ur43oe)['replace'](/&#?\w+;/g, pgyjqs);w90czk['warning']('attribute "' + $ayh5 + '" missed quot(")!!'), yha$5['add'](jg1b8q, $ayh5, w90ic_);case sysphg:
            k9vz0 = syhd$a5;} else switch (k9vz0) {case su3r4$e:
            {
              yha$5['tagName'];
            }'http://www.w3.org/1999/xhtml' === ea$u4d[''] && jg1b8q['match'](/^(?:disabled|checked|selected)$/i) || w90czk['warning']('attribute "' + jg1b8q + '" missed value!! "' + jg1b8q + '" instead2!!'), yha$5['add'](jg1b8q, jg1b8q, w90ic_), w90ic_ = ur43oe, k9vz0 = sygqsh;break;case sysphg:
            w90czk['warning']('attribute space is required"' + jg1b8q + '\x22!!');case syhd$a5:
            k9vz0 = sygqsh, w90ic_ = ur43oe;break;case sdys5ah:
            k9vz0 = s_c0k9, w90ic_ = ur43oe;break;case sh4a$d5:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ur43oe++;
  }
}function svw0k9z(reu3$4, $ar4e, c_xm2i) {
  for (var jqpy = reu3$4['tagName'], n2xmt = null, ni2x = reu3$4['length']; ni2x--;) {
    var ur$e4a = reu3$4[ni2x],
        _2icm = ur$e4a['qName'],
        pyh5q = ur$e4a['value'],
        w0xic = _2icm['indexOf'](':');if (w0xic > 0x0) var rzv3 = ur$e4a['prefix'] = _2icm['slice'](0x0, w0xic),
        xci2m = _2icm['slice'](w0xic + 0x1),
        w_0i9c = 'xmlns' === rzv3 && xci2m;else xci2m = _2icm, rzv3 = null, w_0i9c = 'xmlns' === _2icm && '';ur$e4a['localName'] = xci2m, w_0i9c !== !0x1 && (null == n2xmt && (n2xmt = {}, svk9(c_xm2i, c_xm2i = {})), c_xm2i[w_0i9c] = n2xmt[w_0i9c] = pyh5q, ur$e4a['uri'] = 'http://www.w3.org/2000/xmlns/', $ar4e['startPrefixMapping'](w_0i9c, pyh5q));
  }for (var ni2x = reu3$4['length']; ni2x--;) {
    ur$e4a = reu3$4[ni2x];var rzv3 = ur$e4a['prefix'];rzv3 && ('xml' === rzv3 && (ur$e4a['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rzv3 && (ur$e4a['uri'] = c_xm2i[rzv3 || '']));
  }var w0xic = jqpy['indexOf'](':');w0xic > 0x0 ? (rzv3 = reu3$4['prefix'] = jqpy['slice'](0x0, w0xic), xci2m = reu3$4['localName'] = jqpy['slice'](w0xic + 0x1)) : (rzv3 = null, xci2m = reu3$4['localName'] = jqpy);var vz3kro = reu3$4['uri'] = c_xm2i[rzv3 || ''];if ($ar4e['startElement'](vz3kro, xci2m, jqpy, reu3$4), !reu3$4['closed']) return reu3$4['currentNSMap'] = c_xm2i, reu3$4['localNSMap'] = n2xmt, !0x0;if ($ar4e['endElement'](vz3kro, xci2m, jqpy), n2xmt) {
    for (rzv3 in n2xmt) $ar4e['endPrefixMapping'](rzv3);
  }
}function sour43e(v9zkw0, zovk39, u3zvo, t2mnx7, pq5shy) {
  if (/^(?:script|textarea)$/i['test'](u3zvo)) {
    var u4ar$ = v9zkw0['indexOf']('</' + u3zvo + '>', zovk39),
        rzovk = v9zkw0['substring'](zovk39 + 0x1, u4ar$);if (/[&<]/['test'](rzovk)) return (/^script$/i['test'](u3zvo) ? (pq5shy['characters'](rzovk, 0x0, rzovk['length']), u4ar$) : (rzovk = rzovk['replace'](/&#?\w+;/g, t2mnx7), pq5shy['characters'](rzovk, 0x0, rzovk['length']), u4ar$)
    );
  }return zovk39 + 0x1;
}function sr4o3($eu4ar, r34oue, jq1gs, sqpyh) {
  var ypq = sqpyh[jq1gs];return null == ypq && (ypq = $eu4ar['lastIndexOf']('</' + jq1gs + '>'), r34oue > ypq && (ypq = $eu4ar['lastIndexOf']('</' + jq1gs)), sqpyh[jq1gs] = ypq), r34oue > ypq;
}function svk9(e3ovu, ad4$ue) {
  for (var _90wci in e3ovu) ad4$ue[_90wci] = e3ovu[_90wci];
}function si2cmx(xmn_i, yhqspg, xci0_, nxt2mi) {
  var ur4e3 = xmn_i['charAt'](yhqspg + 0x2);switch (ur4e3) {case '-':
      if ('-' === xmn_i['charAt'](yhqspg + 0x3)) {
        var ghpyqs = xmn_i['indexOf']('-->', yhqspg + 0x4);return ghpyqs > yhqspg ? (xci0_['comment'](xmn_i, yhqspg + 0x4, ghpyqs - yhqspg - 0x4), ghpyqs + 0x3) : (nxt2mi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xmn_i['substr'](yhqspg + 0x3, 0x6)) {
        var ghpyqs = xmn_i['indexOf'](']]>', yhqspg + 0x9);return xci0_['startCDATA'](), xci0_['characters'](xmn_i, yhqspg + 0x9, ghpyqs - yhqspg - 0x9), xci0_['endCDATA'](), ghpyqs + 0x3;
      }var hy5a = ser$4u3(xmn_i, yhqspg),
          ude4a$ = hy5a['length'];if (ude4a$ > 0x1 && /!doctype/i['test'](hy5a[0x0][0x0])) {
        var g1jb8 = hy5a[0x1][0x0],
            wz9c0 = ude4a$ > 0x3 && /^public$/i['test'](hy5a[0x2][0x0]) && hy5a[0x3][0x0],
            ic_2 = ude4a$ > 0x4 && hy5a[0x4][0x0],
            qp18j = hy5a[ude4a$ - 0x1];return xci0_['startDTD'](g1jb8, wz9c0 && wz9c0['replace'](/^(['"])(.*?)\1$/, '$2'), ic_2 && ic_2['replace'](/^(['"])(.*?)\1$/, '$2')), xci0_['endDTD'](), qp18j['index'] + qp18j[0x0]['length'];
      }}return -0x1;
}function se43$ur(fl1b68, x2nimt, jlb8) {
  var kvoz3r = fl1b68['indexOf']('?>', x2nimt);if (kvoz3r) {
    var lj8b1 = fl1b68['substring'](x2nimt, kvoz3r)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lj8b1) {
      {
        lj8b1[0x0]['length'];
      }return jlb8['processingInstruction'](lj8b1[0x1], lj8b1[0x2]), kvoz3r + 0x2;
    }return -0x1;
  }return -0x1;
}function swk9() {}function s$dhy5a(ah$5d, i2ntx) {
  return ah$5d['__proto__'] = i2ntx, ah$5d;
}function ser$4u3(hyqgps, cm_x0) {
  var i2mx_,
      ur3oe = [],
      rzouv3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rzouv3['lastIndex'] = cm_x0, rzouv3['exec'](hyqgps); i2mx_ = rzouv3['exec'](hyqgps);) if (ur3oe['push'](i2mx_), i2mx_[0x1]) return ur3oe;
}var sn2m7x = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    swoz = new RegExp('[\\-\\.0-9' + sn2m7x['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    s_0ck9w = new RegExp('^' + sn2m7x['source'] + swoz['source'] + '*(?::' + sn2m7x['source'] + swoz['source'] + '*)?$'),
    s_x = 0x0,
    sygqsh = 0x1,
    su3r4$e = 0x2,
    sdys5ah = 0x3,
    s_c0k9 = 0x4,
    sysphg = 0x5,
    syhd$a5 = 0x6,
    sh4a$d5 = 0x7;so9k3v['prototype'] = { 'parse': function ($e4dau, uzo3vr, jpys) {
    var z3our = this['domBuilder'];z3our['startDocument'](), svk9(uzo3vr, uzo3vr = {}), ssqg1pj($e4dau, uzo3vr, jpys, z3our, this['errorHandler']), z3our['endDocument']();
  } }, swk9['prototype'] = { 'setTagName': function (e4$aru) {
    if (!s_0ck9w['test'](e4$aru)) throw new Error('invalid tagName:' + e4$aru);this['tagName'] = e4$aru;
  }, 'add': function (yqgj, j8, xiwc0) {
    if (!s_0ck9w['test'](yqgj)) throw new Error('invalid attribute:' + yqgj);this[this['length']++] = { 'qName': yqgj, 'value': j8, 'offset': xiwc0 };
  }, 'length': 0x0, 'getLocalName': function (ah5dy) {
    return this[ah5dy]['localName'];
  }, 'getLocator': function (zk09vw) {
    return this[zk09vw]['locator'];
  }, 'getQName': function (r4euo) {
    return this[r4euo]['qName'];
  }, 'getURI': function (mnx2i) {
    return this[mnx2i]['uri'];
  }, 'getValue': function (x_wc) {
    return this[x_wc]['value'];
  } }, s$dhy5a({}, s$dhy5a['prototype']) instanceof s$dhy5a || (s$dhy5a = function (zv3ru, syqgp) {
  function ysjqg() {}ysjqg['prototype'] = syqgp, ysjqg = new ysjqg();for (syqgp in zv3ru) ysjqg[syqgp] = zv3ru[syqgp];return ysjqg;
}), exports['XMLReader'] = so9k3v;