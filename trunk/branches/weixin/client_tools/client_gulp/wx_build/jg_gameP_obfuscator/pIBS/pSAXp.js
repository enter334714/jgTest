var E = wx.$p;
function p_vi6y() {}function p_r7621v(ftxum_, z2370r, y67$, wn0z, nw9e5) {
  function new859(bda) {
    if (bda > 0xffff) {
      bda -= 0x10000;var qacgbd = 0xd800 + (bda >> 0xa),
          ptflux = 0xdc00 + (0x3ff & bda);return String['fromCharCode'](qacgbd, ptflux);
    }return String['fromCharCode'](bda);
  }function aqb8e9(ht4p) {
    var w3n = ht4p['slice'](0x1, -0x1);return w3n in y67$ ? y67$[w3n] : '#' === w3n['charAt'](0x0) ? new859(parseInt(w3n['substr'](0x1)['replace']('x', '0x'))) : (nw9e5['error']('entity not found:' + ht4p), ht4p);
  }function jish(v7r102) {
    if (v7r102 > i1jy6$) {
      var slh4t = ftxum_['substring'](i1jy6$, v7r102)['replace'](/&#?\w+;/g, aqb8e9);aqb9g8 && qdgb(i1jy6$), wn0z['characters'](slh4t, 0x0, v7r102 - i1jy6$), i1jy6$ = v7r102;
    }
  }function qdgb(uxlt_f, dbaqcg) {
    for (; uxlt_f >= z2w3r && (dbaqcg = $6jiyk['exec'](ftxum_));) jhs = dbaqcg['index'], z2w3r = jhs + dbaqcg[0x0]['length'], aqb9g8['lineNumber']++;aqb9g8['columnNumber'] = uxlt_f - jhs + 0x1;
  }for (var jhs = 0x0, z2w3r = 0x0, $6jiyk = /.*(?:\r\n?|\n)|.*$/g, aqb9g8 = wn0z['locator'], lxp4ts = [{ 'currentNSMap': z2370r }], up4xt = {}, i1jy6$ = 0x0;;) {
    try {
      var ksijyh = ftxum_['indexOf']('<', i1jy6$);if (0x0 > ksijyh) {
        if (!ftxum_['substr'](i1jy6$)['match'](/^\s*$/)) {
          var iyk$hj = wn0z['doc'],
              yv61$7 = iyk$hj['createTextNode'](ftxum_['substr'](i1jy6$));iyk$hj['appendChild'](yv61$7), wn0z['currentElement'] = yv61$7;
        }return;
      }switch (ksijyh > i1jy6$ && jish(ksijyh), ftxum_['charAt'](ksijyh + 0x1)) {case '/':
          var si4kh = ftxum_['indexOf']('>', ksijyh + 0x3),
              q9ae = ftxum_['substring'](ksijyh + 0x2, si4kh),
              lxs = lxp4ts['pop']();0x0 > si4kh ? (q9ae = ftxum_['substring'](ksijyh + 0x2)['replace'](/[\s<].*/, ''), nw9e5['error']('end tag name: ' + q9ae + ' is not complete:' + lxs['tagName']), si4kh = ksijyh + 0x1 + q9ae['length']) : q9ae['match'](/\s</) && (q9ae = q9ae['replace'](/[\s<].*/, ''), nw9e5['error']('end tag name: ' + q9ae + ' maybe not complete'), si4kh = ksijyh + 0x1 + q9ae['length']);var y$716 = lxs['localNSMap'],
              j6ky = lxs['tagName'] == q9ae,
              bdgcq = j6ky || lxs['tagName'] && lxs['tagName']['toLowerCase']() == q9ae['toLowerCase']();if (bdgcq) {
            if (wn0z['endElement'](lxs['uri'], lxs['localName'], q9ae), y$716) {
              for (var lfxut in y$716) wn0z['endPrefixMapping'](lfxut);
            }j6ky || nw9e5['fatalError']('end tag name: ' + q9ae + ' is not match the current start tagName:' + lxs['tagName']);
          } else lxp4ts['push'](lxs);si4kh++;break;case '?':
          aqb9g8 && qdgb(ksijyh), si4kh = p_yjihs(ftxum_, ksijyh, wn0z);break;case '!':
          aqb9g8 && qdgb(ksijyh), si4kh = p_b98neq(ftxum_, ksijyh, wn0z, nw9e5);break;default:
          aqb9g8 && qdgb(ksijyh);var r162 = new p_fltxpu(),
              acqdg = lxp4ts[lxp4ts['length'] - 0x1]['currentNSMap'],
              si4kh = p_y7v$1(ftxum_, ksijyh, r162, acqdg, aqb8e9, nw9e5),
              j16yi$ = r162['length'];if (!r162['closed'] && p_v1r672(ftxum_, si4kh, r162['tagName'], up4xt) && (r162['closed'] = !0x0, y67$['nbsp'] || nw9e5['warning']('unclosed xml attribute')), aqb9g8 && j16yi$) {
            for (var bagc8 = p_aqgcb(aqb9g8, {}), v12r0 = 0x0; j16yi$ > v12r0; v12r0++) {
              var $1i6v = r162[v12r0];qdgb($1i6v['offset']), $1i6v['locator'] = p_aqgcb(aqb9g8, {});
            }wn0z['locator'] = bagc8, p_i6$1j(r162, wn0z, acqdg) && lxp4ts['push'](r162), wn0z['locator'] = aqb9g8;
          } else p_i6$1j(r162, wn0z, acqdg) && lxp4ts['push'](r162);'http://www.w3.org/1999/xhtml' !== r162['uri'] || r162['closed'] ? si4kh++ : si4kh = p_n5ew93(ftxum_, si4kh, r162['tagName'], aqb8e9, wn0z);}
    } catch (fltpu) {
      nw9e5['error']('element parse error: ' + fltpu), si4kh = -0x1;
    }si4kh > i1jy6$ ? i1jy6$ = si4kh : jish(Math['max'](ksijyh, i1jy6$) + 0x1);
  }
}function p_aqgcb(i6v$, x_tmf) {
  return x_tmf['lineNumber'] = i6v$['lineNumber'], x_tmf['columnNumber'] = i6v$['columnNumber'], x_tmf;
}function p_y7v$1(qeb98a, qa, mtx_uf, ew3nz5, psth, y6$ikj) {
  for (var mo_xu, i4jshk, bdqc = ++qa, a8cbqg = p__tul;;) {
    var hsjkp4 = qeb98a['charAt'](bdqc);switch (hsjkp4) {case '=':
        if (a8cbqg === p_x_lft) mo_xu = qeb98a['slice'](qa, bdqc), a8cbqg = p_ultf_x;else {
          if (a8cbqg !== p_umftx_) throw new Error('attribute equal must after attrName');a8cbqg = p_ultf_x;
        }break;case '\x27':case '\x22':
        if (a8cbqg === p_ultf_x || a8cbqg === p_x_lft) {
          if (a8cbqg === p_x_lft && (y6$ikj['warning']('attribute value must after "="'), mo_xu = qeb98a['slice'](qa, bdqc)), qa = bdqc + 0x1, bdqc = qeb98a['indexOf'](hsjkp4, qa), !(bdqc > 0x0)) throw new Error('attribute value no end \'' + hsjkp4 + '\' match');i4jshk = qeb98a['slice'](qa, bdqc)['replace'](/&#?\w+;/g, psth), mtx_uf['add'](mo_xu, i4jshk, qa - 0x1), a8cbqg = p_ltxpf;
        } else {
          if (a8cbqg != p_q8eab9) throw new Error('attribute value must after "="');i4jshk = qeb98a['slice'](qa, bdqc)['replace'](/&#?\w+;/g, psth), mtx_uf['add'](mo_xu, i4jshk, qa), y6$ikj['warning']('attribute "' + mo_xu + '" missed start quot(' + hsjkp4 + ')!!'), qa = bdqc + 0x1, a8cbqg = p_ltxpf;
        }break;case '/':
        switch (a8cbqg) {case p__tul:
            mtx_uf['setTagName'](qeb98a['slice'](qa, bdqc));case p_ltxpf:case p_xt_ul:case p_pskj4h:
            a8cbqg = p_pskj4h, mtx_uf['closed'] = !0x0;case p_q8eab9:case p_x_lft:case p_umftx_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return y6$ikj['error']('unexpected end of input'), a8cbqg == p__tul && mtx_uf['setTagName'](qeb98a['slice'](qa, bdqc)), bdqc;case '>':
        switch (a8cbqg) {case p__tul:
            mtx_uf['setTagName'](qeb98a['slice'](qa, bdqc));case p_ltxpf:case p_xt_ul:case p_pskj4h:
            break;case p_q8eab9:case p_x_lft:
            i4jshk = qeb98a['slice'](qa, bdqc), '/' === i4jshk['slice'](-0x1) && (mtx_uf['closed'] = !0x0, i4jshk = i4jshk['slice'](0x0, -0x1));case p_umftx_:
            a8cbqg === p_umftx_ && (i4jshk = mo_xu), a8cbqg == p_q8eab9 ? (y6$ikj['warning']('attribute "' + i4jshk + '" missed quot(")!!'), mtx_uf['add'](mo_xu, i4jshk['replace'](/&#?\w+;/g, psth), qa)) : ('http://www.w3.org/1999/xhtml' === ew3nz5[''] && i4jshk['match'](/^(?:disabled|checked|selected)$/i) || y6$ikj['warning']('attribute "' + i4jshk + '" missed value!! "' + i4jshk + '" instead!!'), mtx_uf['add'](i4jshk, i4jshk, qa));break;case p_ultf_x:
            throw new Error('attribute value missed!!');}return bdqc;case '\u0080':
        hsjkp4 = '\x20';default:
        if ('\x20' >= hsjkp4) switch (a8cbqg) {case p__tul:
            mtx_uf['setTagName'](qeb98a['slice'](qa, bdqc)), a8cbqg = p_xt_ul;break;case p_x_lft:
            mo_xu = qeb98a['slice'](qa, bdqc), a8cbqg = p_umftx_;break;case p_q8eab9:
            var i4jshk = qeb98a['slice'](qa, bdqc)['replace'](/&#?\w+;/g, psth);y6$ikj['warning']('attribute "' + i4jshk + '" missed quot(")!!'), mtx_uf['add'](mo_xu, i4jshk, qa);case p_ltxpf:
            a8cbqg = p_xt_ul;} else switch (a8cbqg) {case p_umftx_:
            {
              mtx_uf['tagName'];
            }'http://www.w3.org/1999/xhtml' === ew3nz5[''] && mo_xu['match'](/^(?:disabled|checked|selected)$/i) || y6$ikj['warning']('attribute "' + mo_xu + '" missed value!! "' + mo_xu + '" instead2!!'), mtx_uf['add'](mo_xu, mo_xu, qa), qa = bdqc, a8cbqg = p_x_lft;break;case p_ltxpf:
            y6$ikj['warning']('attribute space is required"' + mo_xu + '\x22!!');case p_xt_ul:
            a8cbqg = p_x_lft, qa = bdqc;break;case p_ultf_x:
            a8cbqg = p_q8eab9, qa = bdqc;break;case p_pskj4h:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bdqc++;
  }
}function p_i6$1j(xl4tup, wn35e, jk$yih) {
  for (var khyji = xl4tup['tagName'], hjksiy = null, q8cbg = xl4tup['length']; q8cbg--;) {
    var $y16ji = xl4tup[q8cbg],
        w8e = $y16ji['qName'],
        pltu4x = $y16ji['value'],
        w053nz = w8e['indexOf'](':');if (w053nz > 0x0) var splh4t = $y16ji['prefix'] = w8e['slice'](0x0, w053nz),
        q8ne = w8e['slice'](w053nz + 0x1),
        z02r37 = 'xmlns' === splh4t && q8ne;else q8ne = w8e, splh4t = null, z02r37 = 'xmlns' === w8e && '';$y16ji['localName'] = q8ne, z02r37 !== !0x1 && (null == hjksiy && (hjksiy = {}, p_jyki$(jk$yih, jk$yih = {})), jk$yih[z02r37] = hjksiy[z02r37] = pltu4x, $y16ji['uri'] = 'http://www.w3.org/2000/xmlns/', wn35e['startPrefixMapping'](z02r37, pltu4x));
  }for (var q8cbg = xl4tup['length']; q8cbg--;) {
    $y16ji = xl4tup[q8cbg];var splh4t = $y16ji['prefix'];splh4t && ('xml' === splh4t && ($y16ji['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== splh4t && ($y16ji['uri'] = jk$yih[splh4t || '']));
  }var w053nz = khyji['indexOf'](':');w053nz > 0x0 ? (splh4t = xl4tup['prefix'] = khyji['slice'](0x0, w053nz), q8ne = xl4tup['localName'] = khyji['slice'](w053nz + 0x1)) : (splh4t = null, q8ne = xl4tup['localName'] = khyji);var kyi$j = xl4tup['uri'] = jk$yih[splh4t || ''];if (wn35e['startElement'](kyi$j, q8ne, khyji, xl4tup), !xl4tup['closed']) return xl4tup['currentNSMap'] = jk$yih, xl4tup['localNSMap'] = hjksiy, !0x0;if (wn35e['endElement'](kyi$j, q8ne, khyji), hjksiy) {
    for (splh4t in hjksiy) wn35e['endPrefixMapping'](splh4t);
  }
}function p_n5ew93(aqcbg8, b8gqc, bqa9e, rz37, ftul) {
  if (/^(?:script|textarea)$/i['test'](bqa9e)) {
    var mxut = aqcbg8['indexOf']('</' + bqa9e + '>', b8gqc),
        hs4kij = aqcbg8['substring'](b8gqc + 0x1, mxut);if (/[&<]/['test'](hs4kij)) return (/^script$/i['test'](bqa9e) ? (ftul['characters'](hs4kij, 0x0, hs4kij['length']), mxut) : (hs4kij = hs4kij['replace'](/&#?\w+;/g, rz37), ftul['characters'](hs4kij, 0x0, hs4kij['length']), mxut)
    );
  }return b8gqc + 0x1;
}function p_v1r672(bdqcg, $j16, sh4ik, f_muxo) {
  var mx_uf = f_muxo[sh4ik];return null == mx_uf && (mx_uf = bdqcg['lastIndexOf']('</' + sh4ik + '>'), $j16 > mx_uf && (mx_uf = bdqcg['lastIndexOf']('</' + sh4ik)), f_muxo[sh4ik] = mx_uf), $j16 > mx_uf;
}function p_jyki$(rv7$6, fltpxu) {
  for (var j6$y in rv7$6) fltpxu[j6$y] = rv7$6[j6$y];
}function p_b98neq(x_ult, psl4ht, v6y71, jki$yh) {
  var tpx4 = x_ult['charAt'](psl4ht + 0x2);switch (tpx4) {case '-':
      if ('-' === x_ult['charAt'](psl4ht + 0x3)) {
        var fl_utx = x_ult['indexOf']('-->', psl4ht + 0x4);return fl_utx > psl4ht ? (v6y71['comment'](x_ult, psl4ht + 0x4, fl_utx - psl4ht - 0x4), fl_utx + 0x3) : (jki$yh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == x_ult['substr'](psl4ht + 0x3, 0x6)) {
        var fl_utx = x_ult['indexOf'](']]>', psl4ht + 0x9);return v6y71['startCDATA'](), v6y71['characters'](x_ult, psl4ht + 0x9, fl_utx - psl4ht - 0x9), v6y71['endCDATA'](), fl_utx + 0x3;
      }var we9n58 = p_yi$kjh(x_ult, psl4ht),
          bnq9 = we9n58['length'];if (bnq9 > 0x1 && /!doctype/i['test'](we9n58[0x0][0x0])) {
        var qne89 = we9n58[0x1][0x0],
            n5z3we = bnq9 > 0x3 && /^public$/i['test'](we9n58[0x2][0x0]) && we9n58[0x3][0x0],
            tfmxu_ = bnq9 > 0x4 && we9n58[0x4][0x0],
            puxf = we9n58[bnq9 - 0x1];return v6y71['startDTD'](qne89, n5z3we && n5z3we['replace'](/^(['"])(.*?)\1$/, '$2'), tfmxu_ && tfmxu_['replace'](/^(['"])(.*?)\1$/, '$2')), v6y71['endDTD'](), puxf['index'] + puxf[0x0]['length'];
      }}return -0x1;
}function p_yjihs(qbe8n, iv1y6$, uf_mo) {
  var bacgq = qbe8n['indexOf']('?>', iv1y6$);if (bacgq) {
    var ux_fm = qbe8n['substring'](iv1y6$, bacgq)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ux_fm) {
      {
        ux_fm[0x0]['length'];
      }return uf_mo['processingInstruction'](ux_fm[0x1], ux_fm[0x2]), bacgq + 0x2;
    }return -0x1;
  }return -0x1;
}function p_fltxpu() {}function p_$17vr6(ptulxf, ufxl_) {
  return ptulxf['__proto__'] = ufxl_, ptulxf;
}function p_yi$kjh(jshpk, j$yhik) {
  var qcd,
      r127v0 = [],
      wne5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (wne5['lastIndex'] = j$yhik, wne5['exec'](jshpk); qcd = wne5['exec'](jshpk);) if (r127v0['push'](qcd), qcd[0x1]) return r127v0;
}var p_w53n9e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_gdcqb = new RegExp('[\\-\\.0-9' + p_w53n9e['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p_fx_lut = new RegExp('^' + p_w53n9e['source'] + p_gdcqb['source'] + '*(?::' + p_w53n9e['source'] + p_gdcqb['source'] + '*)?$'),
    p__tul = 0x0,
    p_x_lft = 0x1,
    p_umftx_ = 0x2,
    p_ultf_x = 0x3,
    p_q8eab9 = 0x4,
    p_ltxpf = 0x5,
    p_xt_ul = 0x6,
    p_pskj4h = 0x7;p_vi6y['prototype'] = { 'parse': function (bdqcga, abcgqd, $r6v71) {
    var sjiky = this['domBuilder'];sjiky['startDocument'](), p_jyki$(abcgqd, abcgqd = {}), p_r7621v(bdqcga, abcgqd, $r6v71, sjiky, this['errorHandler']), sjiky['endDocument']();
  } }, p_fltxpu['prototype'] = { 'setTagName': function (x_ulf) {
    if (!p_fx_lut['test'](x_ulf)) throw new Error('invalid tagName:' + x_ulf);this['tagName'] = x_ulf;
  }, 'add': function (ew98, hk4ji, g9qa8b) {
    if (!p_fx_lut['test'](ew98)) throw new Error('invalid attribute:' + ew98);this[this['length']++] = { 'qName': ew98, 'value': hk4ji, 'offset': g9qa8b };
  }, 'length': 0x0, 'getLocalName': function (acqdb) {
    return this[acqdb]['localName'];
  }, 'getLocator': function (bn9qe) {
    return this[bn9qe]['locator'];
  }, 'getQName': function (lptxuf) {
    return this[lptxuf]['qName'];
  }, 'getURI': function (h4jskp) {
    return this[h4jskp]['uri'];
  }, 'getValue': function (y7v$16) {
    return this[y7v$16]['value'];
  } }, p_$17vr6({}, p_$17vr6['prototype']) instanceof p_$17vr6 || (p_$17vr6 = function (z0w32, z732r) {
  function iyksh() {}iyksh['prototype'] = z732r, iyksh = new iyksh();for (z732r in z0w32) iyksh[z732r] = z0w32[z732r];return iyksh;
}), exports['XMLReader'] = p_vi6y;