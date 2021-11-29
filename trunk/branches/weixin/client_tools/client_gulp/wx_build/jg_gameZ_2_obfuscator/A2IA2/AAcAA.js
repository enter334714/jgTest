var d = wx.$A;
function Apu3k8() {}function Aae09(rgq4_o, snhdj, va30, tybxiq, bgt_qo) {
  function v8ua03(e9m$na) {
    if (e9m$na > 0xffff) {
      e9m$na -= 0x10000;var sdem$n = 0xd800 + (e9m$na >> 0xa),
          ixq = 0xdc00 + (0x3ff & e9m$na);return String['fromCharCode'](sdem$n, ixq);
    }return String['fromCharCode'](e9m$na);
  }function ob_gqt(boxytq) {
    var vk803u = boxytq['slice'](0x1, -0x1);return vk803u in va30 ? va30[vk803u] : '#' === vk803u['charAt'](0x0) ? v8ua03(parseInt(vk803u['substr'](0x1)['replace']('x', '0x'))) : (bgt_qo['error']('entity not found:' + boxytq), boxytq);
  }function jhsz6w(gb_tqo) {
    if (gb_tqo > r4qog_) {
      var rq4go = rgq4_o['substring'](r4qog_, gb_tqo)['replace'](/&#?\w+;/g, ob_gqt);dsme && $9ae(r4qog_), tybxiq['characters'](rq4go, 0x0, gb_tqo - r4qog_), r4qog_ = gb_tqo;
    }
  }function $9ae(enmsd6, ku3v) {
    for (; enmsd6 >= sjwhz6 && (ku3v = mn$de9['exec'](rgq4_o));) a$9nm = ku3v['index'], sjwhz6 = a$9nm + ku3v[0x0]['length'], dsme['lineNumber']++;dsme['columnNumber'] = enmsd6 - a$9nm + 0x1;
  }for (var a$9nm = 0x0, sjwhz6 = 0x0, mn$de9 = /.*(?:\r\n?|\n)|.*$/g, dsme = tybxiq['locator'], jhds = [{ 'currentNSMap': snhdj }], qg4o_r = {}, r4qog_ = 0x0;;) {
    try {
      var jl2 = rgq4_o['indexOf']('<', r4qog_);if (0x0 > jl2) {
        if (!rgq4_o['substr'](r4qog_)['match'](/^\s*$/)) {
          var b_qtox = tybxiq['doc'],
              whjl2 = b_qtox['createTextNode'](rgq4_o['substr'](r4qog_));b_qtox['appendChild'](whjl2), tybxiq['currentElement'] = whjl2;
        }return;
      }switch (jl2 > r4qog_ && jhsz6w(jl2), rgq4_o['charAt'](jl2 + 0x1)) {case '/':
          var med$ = rgq4_o['indexOf']('>', jl2 + 0x3),
              ypbitx = rgq4_o['substring'](jl2 + 0x2, med$),
              u0v8a = jhds['pop']();0x0 > med$ ? (ypbitx = rgq4_o['substring'](jl2 + 0x2)['replace'](/[\s<].*/, ''), bgt_qo['error']('end tag name: ' + ypbitx + ' is not complete:' + u0v8a['tagName']), med$ = jl2 + 0x1 + ypbitx['length']) : ypbitx['match'](/\s</) && (ypbitx = ypbitx['replace'](/[\s<].*/, ''), bgt_qo['error']('end tag name: ' + ypbitx + ' maybe not complete'), med$ = jl2 + 0x1 + ypbitx['length']);var u8k0v = u0v8a['localNSMap'],
              va08u = u0v8a['tagName'] == ypbitx,
              va89$ = va08u || u0v8a['tagName'] && u0v8a['tagName']['toLowerCase']() == ypbitx['toLowerCase']();if (va89$) {
            if (tybxiq['endElement'](u0v8a['uri'], u0v8a['localName'], ypbitx), u8k0v) {
              for (var boqxyt in u8k0v) tybxiq['endPrefixMapping'](boqxyt);
            }va08u || bgt_qo['fatalError']('end tag name: ' + ypbitx + ' is not match the current start tagName:' + u0v8a['tagName']);
          } else jhds['push'](u0v8a);med$++;break;case '?':
          dsme && $9ae(jl2), med$ = Amne6sd(rgq4_o, jl2, tybxiq);break;case '!':
          dsme && $9ae(jl2), med$ = A$8av9(rgq4_o, jl2, tybxiq, bgt_qo);break;default:
          dsme && $9ae(jl2);var m9eav$ = new Abyxit(),
              xyqobt = jhds[jhds['length'] - 0x1]['currentNSMap'],
              med$ = Awjzh6l(rgq4_o, jl2, m9eav$, xyqobt, ob_gqt, bgt_qo),
              $de9 = m9eav$['length'];if (!m9eav$['closed'] && Asdme$n(rgq4_o, med$, m9eav$['tagName'], qg4o_r) && (m9eav$['closed'] = !0x0, va30['nbsp'] || bgt_qo['warning']('unclosed xml attribute')), dsme && $de9) {
            for (var iupk = Aean9$m(dsme, {}), toqb_g = 0x0; $de9 > toqb_g; toqb_g++) {
              var jzhd = m9eav$[toqb_g];$9ae(jzhd['offset']), jzhd['locator'] = Aean9$m(dsme, {});
            }tybxiq['locator'] = iupk, Au8v3k0(m9eav$, tybxiq, xyqobt) && jhds['push'](m9eav$), tybxiq['locator'] = dsme;
          } else Au8v3k0(m9eav$, tybxiq, xyqobt) && jhds['push'](m9eav$);'http://www.w3.org/1999/xhtml' !== m9eav$['uri'] || m9eav$['closed'] ? med$++ : med$ = Avuk(rgq4_o, med$, m9eav$['tagName'], ob_gqt, tybxiq);}
    } catch (_obqt) {
      bgt_qo['error']('element parse error: ' + _obqt), med$ = -0x1;
    }med$ > r4qog_ ? r4qog_ = med$ : jhsz6w(Math['max'](jl2, r4qog_) + 0x1);
  }
}function Aean9$m(o4gr_q, qyxotb) {
  return qyxotb['lineNumber'] = o4gr_q['lineNumber'], qyxotb['columnNumber'] = o4gr_q['columnNumber'], qyxotb;
}function Awjzh6l(e$mv9a, $e0av, iukp3, dhnsj6, xpbtiy, yiqbxt) {
  for (var r4fg7, ypbxt, $eva90 = ++$e0av, jhl6zw = Az6sdhj;;) {
    var goq = e$mv9a['charAt']($eva90);switch (goq) {case '=':
        if (jhl6zw === Ands$me) r4fg7 = e$mv9a['slice']($e0av, $eva90), jhl6zw = Auk1ypi;else {
          if (jhl6zw !== A$v9em) throw new Error('attribute equal must after attrName');jhl6zw = Auk1ypi;
        }break;case '\x27':case '\x22':
        if (jhl6zw === Auk1ypi || jhl6zw === Ands$me) {
          if (jhl6zw === Ands$me && (yiqbxt['warning']('attribute value must after "="'), r4fg7 = e$mv9a['slice']($e0av, $eva90)), $e0av = $eva90 + 0x1, $eva90 = e$mv9a['indexOf'](goq, $e0av), !($eva90 > 0x0)) throw new Error('attribute value no end \'' + goq + '\' match');ypbxt = e$mv9a['slice']($e0av, $eva90)['replace'](/&#?\w+;/g, xpbtiy), iukp3['add'](r4fg7, ypbxt, $e0av - 0x1), jhl6zw = Asn6me;
        } else {
          if (jhl6zw != Aix1ytp) throw new Error('attribute value must after "="');ypbxt = e$mv9a['slice']($e0av, $eva90)['replace'](/&#?\w+;/g, xpbtiy), iukp3['add'](r4fg7, ypbxt, $e0av), yiqbxt['warning']('attribute "' + r4fg7 + '" missed start quot(' + goq + ')!!'), $e0av = $eva90 + 0x1, jhl6zw = Asn6me;
        }break;case '/':
        switch (jhl6zw) {case Az6sdhj:
            iukp3['setTagName'](e$mv9a['slice']($e0av, $eva90));case Asn6me:case As6hzd:case Ap1k8u3:
            jhl6zw = Ap1k8u3, iukp3['closed'] = !0x0;case Aix1ytp:case Ands$me:case A$v9em:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yiqbxt['error']('unexpected end of input'), jhl6zw == Az6sdhj && iukp3['setTagName'](e$mv9a['slice']($e0av, $eva90)), $eva90;case '>':
        switch (jhl6zw) {case Az6sdhj:
            iukp3['setTagName'](e$mv9a['slice']($e0av, $eva90));case Asn6me:case As6hzd:case Ap1k8u3:
            break;case Aix1ytp:case Ands$me:
            ypbxt = e$mv9a['slice']($e0av, $eva90), '/' === ypbxt['slice'](-0x1) && (iukp3['closed'] = !0x0, ypbxt = ypbxt['slice'](0x0, -0x1));case A$v9em:
            jhl6zw === A$v9em && (ypbxt = r4fg7), jhl6zw == Aix1ytp ? (yiqbxt['warning']('attribute "' + ypbxt + '" missed quot(")!!'), iukp3['add'](r4fg7, ypbxt['replace'](/&#?\w+;/g, xpbtiy), $e0av)) : ('http://www.w3.org/1999/xhtml' === dhnsj6[''] && ypbxt['match'](/^(?:disabled|checked|selected)$/i) || yiqbxt['warning']('attribute "' + ypbxt + '" missed value!! "' + ypbxt + '" instead!!'), iukp3['add'](ypbxt, ypbxt, $e0av));break;case Auk1ypi:
            throw new Error('attribute value missed!!');}return $eva90;case '\u0080':
        goq = '\x20';default:
        if ('\x20' >= goq) switch (jhl6zw) {case Az6sdhj:
            iukp3['setTagName'](e$mv9a['slice']($e0av, $eva90)), jhl6zw = As6hzd;break;case Ands$me:
            r4fg7 = e$mv9a['slice']($e0av, $eva90), jhl6zw = A$v9em;break;case Aix1ytp:
            var ypbxt = e$mv9a['slice']($e0av, $eva90)['replace'](/&#?\w+;/g, xpbtiy);yiqbxt['warning']('attribute "' + ypbxt + '" missed quot(")!!'), iukp3['add'](r4fg7, ypbxt, $e0av);case Asn6me:
            jhl6zw = As6hzd;} else switch (jhl6zw) {case A$v9em:
            {
              iukp3['tagName'];
            }'http://www.w3.org/1999/xhtml' === dhnsj6[''] && r4fg7['match'](/^(?:disabled|checked|selected)$/i) || yiqbxt['warning']('attribute "' + r4fg7 + '" missed value!! "' + r4fg7 + '" instead2!!'), iukp3['add'](r4fg7, r4fg7, $e0av), $e0av = $eva90, jhl6zw = Ands$me;break;case Asn6me:
            yiqbxt['warning']('attribute space is required"' + r4fg7 + '\x22!!');case As6hzd:
            jhl6zw = Ands$me, $e0av = $eva90;break;case Auk1ypi:
            jhl6zw = Aix1ytp, $e0av = $eva90;break;case Ap1k8u3:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$eva90++;
  }
}function Au8v3k0(f475g, d$mnes, lwzj2) {
  for (var xip1yt = f475g['tagName'], u08a = null, r_fog4 = f475g['length']; r_fog4--;) {
    var jwzs6h = f475g[r_fog4],
        ljwzh2 = jwzs6h['qName'],
        n6jshd = jwzs6h['value'],
        s6dmnj = ljwzh2['indexOf'](':');if (s6dmnj > 0x0) var r47g = jwzs6h['prefix'] = ljwzh2['slice'](0x0, s6dmnj),
        d6hnsj = ljwzh2['slice'](s6dmnj + 0x1),
        $9ane = 'xmlns' === r47g && d6hnsj;else d6hnsj = ljwzh2, r47g = null, $9ane = 'xmlns' === ljwzh2 && '';jwzs6h['localName'] = d6hnsj, $9ane !== !0x1 && (null == u08a && (u08a = {}, Av$908a(lwzj2, lwzj2 = {})), lwzj2[$9ane] = u08a[$9ane] = n6jshd, jwzs6h['uri'] = 'http://www.w3.org/2000/xmlns/', d$mnes['startPrefixMapping']($9ane, n6jshd));
  }for (var r_fog4 = f475g['length']; r_fog4--;) {
    jwzs6h = f475g[r_fog4];var r47g = jwzs6h['prefix'];r47g && ('xml' === r47g && (jwzs6h['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r47g && (jwzs6h['uri'] = lwzj2[r47g || '']));
  }var s6dmnj = xip1yt['indexOf'](':');s6dmnj > 0x0 ? (r47g = f475g['prefix'] = xip1yt['slice'](0x0, s6dmnj), d6hnsj = f475g['localName'] = xip1yt['slice'](s6dmnj + 0x1)) : (r47g = null, d6hnsj = f475g['localName'] = xip1yt);var kipx = f475g['uri'] = lwzj2[r47g || ''];if (d$mnes['startElement'](kipx, d6hnsj, xip1yt, f475g), !f475g['closed']) return f475g['currentNSMap'] = lwzj2, f475g['localNSMap'] = u08a, !0x0;if (d$mnes['endElement'](kipx, d6hnsj, xip1yt), u08a) {
    for (r47g in u08a) d$mnes['endPrefixMapping'](r47g);
  }
}function Avuk(v0ua3, au80v3, $v89a, gqo_r, den6ms) {
  if (/^(?:script|textarea)$/i['test']($v89a)) {
    var d6 = v0ua3['indexOf']('</' + $v89a + '>', au80v3),
        jzsd6h = v0ua3['substring'](au80v3 + 0x1, d6);if (/[&<]/['test'](jzsd6h)) return (/^script$/i['test']($v89a) ? (den6ms['characters'](jzsd6h, 0x0, jzsd6h['length']), d6) : (jzsd6h = jzsd6h['replace'](/&#?\w+;/g, gqo_r), den6ms['characters'](jzsd6h, 0x0, jzsd6h['length']), d6)
    );
  }return au80v3 + 0x1;
}function Asdme$n(e$vma9, ms6ndj, $809, zlhwj2) {
  var dsj = zlhwj2[$809];return null == dsj && (dsj = e$vma9['lastIndexOf']('</' + $809 + '>'), ms6ndj > dsj && (dsj = e$vma9['lastIndexOf']('</' + $809)), zlhwj2[$809] = dsj), ms6ndj > dsj;
}function Av$908a(qbty, itxp1) {
  for (var pxy1 in qbty) itxp1[pxy1] = qbty[pxy1];
}function A$8av9(qtox, iuk1p, va09$8, qxtib) {
  var box_qt = qtox['charAt'](iuk1p + 0x2);switch (box_qt) {case '-':
      if ('-' === qtox['charAt'](iuk1p + 0x3)) {
        var t_oqg = qtox['indexOf']('-->', iuk1p + 0x4);return t_oqg > iuk1p ? (va09$8['comment'](qtox, iuk1p + 0x4, t_oqg - iuk1p - 0x4), t_oqg + 0x3) : (qxtib['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qtox['substr'](iuk1p + 0x3, 0x6)) {
        var t_oqg = qtox['indexOf'](']]>', iuk1p + 0x9);return va09$8['startCDATA'](), va09$8['characters'](qtox, iuk1p + 0x9, t_oqg - iuk1p - 0x9), va09$8['endCDATA'](), t_oqg + 0x3;
      }var o4_gb = Abixy(qtox, iuk1p),
          enmd6 = o4_gb['length'];if (enmd6 > 0x1 && /!doctype/i['test'](o4_gb[0x0][0x0])) {
        var t_xqb = o4_gb[0x1][0x0],
            _o4rqg = enmd6 > 0x3 && /^public$/i['test'](o4_gb[0x2][0x0]) && o4_gb[0x3][0x0],
            xkyip = enmd6 > 0x4 && o4_gb[0x4][0x0],
            s6hjwz = o4_gb[enmd6 - 0x1];return va09$8['startDTD'](t_xqb, _o4rqg && _o4rqg['replace'](/^(['"])(.*?)\1$/, '$2'), xkyip && xkyip['replace'](/^(['"])(.*?)\1$/, '$2')), va09$8['endDTD'](), s6hjwz['index'] + s6hjwz[0x0]['length'];
      }}return -0x1;
}function Amne6sd(smdnj, f745r, v$m9ae) {
  var pk13u = smdnj['indexOf']('?>', f745r);if (pk13u) {
    var l2zhjw = smdnj['substring'](f745r, pk13u)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (l2zhjw) {
      {
        l2zhjw[0x0]['length'];
      }return v$m9ae['processingInstruction'](l2zhjw[0x1], l2zhjw[0x2]), pk13u + 0x2;
    }return -0x1;
  }return -0x1;
}function Abyxit() {}function Asnd$e(zs6hwj, hw6zjl) {
  return zs6hwj['__proto__'] = hw6zjl, zs6hwj;
}function Abixy(bqtyix, sjn6m) {
  var kp1ui,
      fg_74 = [],
      tyix1p = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (tyix1p['lastIndex'] = sjn6m, tyix1p['exec'](bqtyix); kp1ui = tyix1p['exec'](bqtyix);) if (fg_74['push'](kp1ui), kp1ui[0x1]) return fg_74;
}var Ajdh6zs = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    A$vmea = new RegExp('[\\-\\.0-9' + Ajdh6zs['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Aobyqx = new RegExp('^' + Ajdh6zs['source'] + A$vmea['source'] + '*(?::' + Ajdh6zs['source'] + A$vmea['source'] + '*)?$'),
    Az6sdhj = 0x0,
    Ands$me = 0x1,
    A$v9em = 0x2,
    Auk1ypi = 0x3,
    Aix1ytp = 0x4,
    Asn6me = 0x5,
    As6hzd = 0x6,
    Ap1k8u3 = 0x7;Apu3k8['prototype'] = { 'parse': function (i1yxkp, qb_g4, r_g47f) {
    var tqiy = this['domBuilder'];tqiy['startDocument'](), Av$908a(qb_g4, qb_g4 = {}), Aae09(i1yxkp, qb_g4, r_g47f, tqiy, this['errorHandler']), tqiy['endDocument']();
  } }, Abyxit['prototype'] = { 'setTagName': function (k8p31) {
    if (!Aobyqx['test'](k8p31)) throw new Error('invalid tagName:' + k8p31);this['tagName'] = k8p31;
  }, 'add': function ($an9, og4r_f, u031k) {
    if (!Aobyqx['test']($an9)) throw new Error('invalid attribute:' + $an9);this[this['length']++] = { 'qName': $an9, 'value': og4r_f, 'offset': u031k };
  }, 'length': 0x0, 'getLocalName': function (v3k8u) {
    return this[v3k8u]['localName'];
  }, 'getLocator': function (e9md$n) {
    return this[e9md$n]['locator'];
  }, 'getQName': function (i1pxk) {
    return this[i1pxk]['qName'];
  }, 'getURI': function (frg_4) {
    return this[frg_4]['uri'];
  }, 'getValue': function (i31kpu) {
    return this[i31kpu]['value'];
  } }, Asnd$e({}, Asnd$e['prototype']) instanceof Asnd$e || (Asnd$e = function (v3k08, xpt1iy) {
  function itxqy() {}itxqy['prototype'] = xpt1iy, itxqy = new itxqy();for (xpt1iy in v3k08) itxqy[xpt1iy] = v3k08[xpt1iy];return itxqy;
}), exports['XMLReader'] = Apu3k8;