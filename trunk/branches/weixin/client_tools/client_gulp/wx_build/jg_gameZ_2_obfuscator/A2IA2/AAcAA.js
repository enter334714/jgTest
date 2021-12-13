var d = wx.$A;
function Asdzh6j() {}function Ane9a$m(hlwzj, tqiyx, upk3i1, ogq_bt, w6lzj) {
  function wl2(nm6s) {
    if (nm6s > 0xffff) {
      nm6s -= 0x10000;var wj6zlh = 0xd800 + (nm6s >> 0xa),
          z6whs = 0xdc00 + (0x3ff & nm6s);return String['fromCharCode'](wj6zlh, z6whs);
    }return String['fromCharCode'](nm6s);
  }function o_tqb(v03u) {
    var tboyqx = v03u['slice'](0x1, -0x1);return tboyqx in upk3i1 ? upk3i1[tboyqx] : '#' === tboyqx['charAt'](0x0) ? wl2(parseInt(tboyqx['substr'](0x1)['replace']('x', '0x'))) : (w6lzj['error']('entity not found:' + v03u), v03u);
  }function qg4_(o4_fgr) {
    if (o4_fgr > mne$ds) {
      var $n9ma = hlwzj['substring'](mne$ds, o4_fgr)['replace'](/&#?\w+;/g, o_tqb);jshz6w && rfo_g4(mne$ds), ogq_bt['characters']($n9ma, 0x0, o4_fgr - mne$ds), mne$ds = o4_fgr;
    }
  }function rfo_g4(em9v, v30a8u) {
    for (; em9v >= v9$8a && (v30a8u = n$me['exec'](hlwzj));) itxpy1 = v30a8u['index'], v9$8a = itxpy1 + v30a8u[0x0]['length'], jshz6w['lineNumber']++;jshz6w['columnNumber'] = em9v - itxpy1 + 0x1;
  }for (var itxpy1 = 0x0, v9$8a = 0x0, n$me = /.*(?:\r\n?|\n)|.*$/g, jshz6w = ogq_bt['locator'], b_4qo = [{ 'currentNSMap': tqiyx }], ns$e = {}, mne$ds = 0x0;;) {
    try {
      var xyti1 = hlwzj['indexOf']('<', mne$ds);if (0x0 > xyti1) {
        if (!hlwzj['substr'](mne$ds)['match'](/^\s*$/)) {
          var p1uyik = ogq_bt['doc'],
              itypx = p1uyik['createTextNode'](hlwzj['substr'](mne$ds));p1uyik['appendChild'](itypx), ogq_bt['currentElement'] = itypx;
        }return;
      }switch (xyti1 > mne$ds && qg4_(xyti1), hlwzj['charAt'](xyti1 + 0x1)) {case '/':
          var t1piyx = hlwzj['indexOf']('>', xyti1 + 0x3),
              edn9$m = hlwzj['substring'](xyti1 + 0x2, t1piyx),
              sd6jh = b_4qo['pop']();0x0 > t1piyx ? (edn9$m = hlwzj['substring'](xyti1 + 0x2)['replace'](/[\s<].*/, ''), w6lzj['error']('end tag name: ' + edn9$m + ' is not complete:' + sd6jh['tagName']), t1piyx = xyti1 + 0x1 + edn9$m['length']) : edn9$m['match'](/\s</) && (edn9$m = edn9$m['replace'](/[\s<].*/, ''), w6lzj['error']('end tag name: ' + edn9$m + ' maybe not complete'), t1piyx = xyti1 + 0x1 + edn9$m['length']);var _otqbg = sd6jh['localNSMap'],
              u38kv = sd6jh['tagName'] == edn9$m,
              mdne6s = u38kv || sd6jh['tagName'] && sd6jh['tagName']['toLowerCase']() == edn9$m['toLowerCase']();if (mdne6s) {
            if (ogq_bt['endElement'](sd6jh['uri'], sd6jh['localName'], edn9$m), _otqbg) {
              for (var f_o4gr in _otqbg) ogq_bt['endPrefixMapping'](f_o4gr);
            }u38kv || w6lzj['fatalError']('end tag name: ' + edn9$m + ' is not match the current start tagName:' + sd6jh['tagName']);
          } else b_4qo['push'](sd6jh);t1piyx++;break;case '?':
          jshz6w && rfo_g4(xyti1), t1piyx = Amed9n(hlwzj, xyti1, ogq_bt);break;case '!':
          jshz6w && rfo_g4(xyti1), t1piyx = Ar47gf5(hlwzj, xyti1, ogq_bt, w6lzj);break;default:
          jshz6w && rfo_g4(xyti1);var zljh6w = new Aqobt_g(),
              jhz6wl = b_4qo[b_4qo['length'] - 0x1]['currentNSMap'],
              t1piyx = Aikypx(hlwzj, xyti1, zljh6w, jhz6wl, o_tqb, w6lzj),
              pyk1i = zljh6w['length'];if (!zljh6w['closed'] && Ay1pkiu(hlwzj, t1piyx, zljh6w['tagName'], ns$e) && (zljh6w['closed'] = !0x0, upk3i1['nbsp'] || w6lzj['warning']('unclosed xml attribute')), jshz6w && pyk1i) {
            for (var pyibx = Abt_xo(jshz6w, {}), wzhj6s = 0x0; pyk1i > wzhj6s; wzhj6s++) {
              var jzhsd6 = zljh6w[wzhj6s];rfo_g4(jzhsd6['offset']), jzhsd6['locator'] = Abt_xo(jshz6w, {});
            }ogq_bt['locator'] = pyibx, Alzjh(zljh6w, ogq_bt, jhz6wl) && b_4qo['push'](zljh6w), ogq_bt['locator'] = jshz6w;
          } else Alzjh(zljh6w, ogq_bt, jhz6wl) && b_4qo['push'](zljh6w);'http://www.w3.org/1999/xhtml' !== zljh6w['uri'] || zljh6w['closed'] ? t1piyx++ : t1piyx = Axi1ytp(hlwzj, t1piyx, zljh6w['tagName'], o_tqb, ogq_bt);}
    } catch (p138) {
      w6lzj['error']('element parse error: ' + p138), t1piyx = -0x1;
    }t1piyx > mne$ds ? mne$ds = t1piyx : qg4_(Math['max'](xyti1, mne$ds) + 0x1);
  }
}function Abt_xo(otq_, p1tyix) {
  return p1tyix['lineNumber'] = otq_['lineNumber'], p1tyix['columnNumber'] = otq_['columnNumber'], p1tyix;
}function Aikypx(ensm$d, m9$n, _gotb, _gr7f4, oytqb, hjsw6) {
  for (var rg47, wlzh, u3v8a = ++m9$n, u3v80a = Atqgbo;;) {
    var ik1uyp = ensm$d['charAt'](u3v8a);switch (ik1uyp) {case '=':
        if (u3v80a === Ai3ku) rg47 = ensm$d['slice'](m9$n, u3v8a), u3v80a = Ahz2ljw;else {
          if (u3v80a !== Azhswj6) throw new Error('attribute equal must after attrName');u3v80a = Ahz2ljw;
        }break;case '\x27':case '\x22':
        if (u3v80a === Ahz2ljw || u3v80a === Ai3ku) {
          if (u3v80a === Ai3ku && (hjsw6['warning']('attribute value must after "="'), rg47 = ensm$d['slice'](m9$n, u3v8a)), m9$n = u3v8a + 0x1, u3v8a = ensm$d['indexOf'](ik1uyp, m9$n), !(u3v8a > 0x0)) throw new Error('attribute value no end \'' + ik1uyp + '\' match');wlzh = ensm$d['slice'](m9$n, u3v8a)['replace'](/&#?\w+;/g, oytqb), _gotb['add'](rg47, wlzh, m9$n - 0x1), u3v80a = Aav38u0;
        } else {
          if (u3v80a != Ae6d) throw new Error('attribute value must after "="');wlzh = ensm$d['slice'](m9$n, u3v8a)['replace'](/&#?\w+;/g, oytqb), _gotb['add'](rg47, wlzh, m9$n), hjsw6['warning']('attribute "' + rg47 + '" missed start quot(' + ik1uyp + ')!!'), m9$n = u3v8a + 0x1, u3v80a = Aav38u0;
        }break;case '/':
        switch (u3v80a) {case Atqgbo:
            _gotb['setTagName'](ensm$d['slice'](m9$n, u3v8a));case Aav38u0:case Asme:case Ap38ku1:
            u3v80a = Ap38ku1, _gotb['closed'] = !0x0;case Ae6d:case Ai3ku:case Azhswj6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hjsw6['error']('unexpected end of input'), u3v80a == Atqgbo && _gotb['setTagName'](ensm$d['slice'](m9$n, u3v8a)), u3v8a;case '>':
        switch (u3v80a) {case Atqgbo:
            _gotb['setTagName'](ensm$d['slice'](m9$n, u3v8a));case Aav38u0:case Asme:case Ap38ku1:
            break;case Ae6d:case Ai3ku:
            wlzh = ensm$d['slice'](m9$n, u3v8a), '/' === wlzh['slice'](-0x1) && (_gotb['closed'] = !0x0, wlzh = wlzh['slice'](0x0, -0x1));case Azhswj6:
            u3v80a === Azhswj6 && (wlzh = rg47), u3v80a == Ae6d ? (hjsw6['warning']('attribute "' + wlzh + '" missed quot(")!!'), _gotb['add'](rg47, wlzh['replace'](/&#?\w+;/g, oytqb), m9$n)) : ('http://www.w3.org/1999/xhtml' === _gr7f4[''] && wlzh['match'](/^(?:disabled|checked|selected)$/i) || hjsw6['warning']('attribute "' + wlzh + '" missed value!! "' + wlzh + '" instead!!'), _gotb['add'](wlzh, wlzh, m9$n));break;case Ahz2ljw:
            throw new Error('attribute value missed!!');}return u3v8a;case '\u0080':
        ik1uyp = '\x20';default:
        if ('\x20' >= ik1uyp) switch (u3v80a) {case Atqgbo:
            _gotb['setTagName'](ensm$d['slice'](m9$n, u3v8a)), u3v80a = Asme;break;case Ai3ku:
            rg47 = ensm$d['slice'](m9$n, u3v8a), u3v80a = Azhswj6;break;case Ae6d:
            var wlzh = ensm$d['slice'](m9$n, u3v8a)['replace'](/&#?\w+;/g, oytqb);hjsw6['warning']('attribute "' + wlzh + '" missed quot(")!!'), _gotb['add'](rg47, wlzh, m9$n);case Aav38u0:
            u3v80a = Asme;} else switch (u3v80a) {case Azhswj6:
            {
              _gotb['tagName'];
            }'http://www.w3.org/1999/xhtml' === _gr7f4[''] && rg47['match'](/^(?:disabled|checked|selected)$/i) || hjsw6['warning']('attribute "' + rg47 + '" missed value!! "' + rg47 + '" instead2!!'), _gotb['add'](rg47, rg47, m9$n), m9$n = u3v8a, u3v80a = Ai3ku;break;case Aav38u0:
            hjsw6['warning']('attribute space is required"' + rg47 + '\x22!!');case Asme:
            u3v80a = Ai3ku, m9$n = u3v8a;break;case Ahz2ljw:
            u3v80a = Ae6d, m9$n = u3v8a;break;case Ap38ku1:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}u3v8a++;
  }
}function Alzjh(wzhj2l, pu1ik3, ev$a0) {
  for (var ae$n9 = wzhj2l['tagName'], $a0v89 = null, px1ty = wzhj2l['length']; px1ty--;) {
    var a0v8u = wzhj2l[px1ty],
        me9 = a0v8u['qName'],
        mnsd6 = a0v8u['value'],
        jz6w = me9['indexOf'](':');if (jz6w > 0x0) var hsn6 = a0v8u['prefix'] = me9['slice'](0x0, jz6w),
        shj6 = me9['slice'](jz6w + 0x1),
        bipxty = 'xmlns' === hsn6 && shj6;else shj6 = me9, hsn6 = null, bipxty = 'xmlns' === me9 && '';a0v8u['localName'] = shj6, bipxty !== !0x1 && (null == $a0v89 && ($a0v89 = {}, Av3(ev$a0, ev$a0 = {})), ev$a0[bipxty] = $a0v89[bipxty] = mnsd6, a0v8u['uri'] = 'http://www.w3.org/2000/xmlns/', pu1ik3['startPrefixMapping'](bipxty, mnsd6));
  }for (var px1ty = wzhj2l['length']; px1ty--;) {
    a0v8u = wzhj2l[px1ty];var hsn6 = a0v8u['prefix'];hsn6 && ('xml' === hsn6 && (a0v8u['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hsn6 && (a0v8u['uri'] = ev$a0[hsn6 || '']));
  }var jz6w = ae$n9['indexOf'](':');jz6w > 0x0 ? (hsn6 = wzhj2l['prefix'] = ae$n9['slice'](0x0, jz6w), shj6 = wzhj2l['localName'] = ae$n9['slice'](jz6w + 0x1)) : (hsn6 = null, shj6 = wzhj2l['localName'] = ae$n9);var ybitxq = wzhj2l['uri'] = ev$a0[hsn6 || ''];if (pu1ik3['startElement'](ybitxq, shj6, ae$n9, wzhj2l), !wzhj2l['closed']) return wzhj2l['currentNSMap'] = ev$a0, wzhj2l['localNSMap'] = $a0v89, !0x0;if (pu1ik3['endElement'](ybitxq, shj6, ae$n9), $a0v89) {
    for (hsn6 in $a0v89) pu1ik3['endPrefixMapping'](hsn6);
  }
}function Axi1ytp(k3v8u, zsd6, zdshj, vua308, v90ae$) {
  if (/^(?:script|textarea)$/i['test'](zdshj)) {
    var piyuk1 = k3v8u['indexOf']('</' + zdshj + '>', zsd6),
        mnd9$e = k3v8u['substring'](zsd6 + 0x1, piyuk1);if (/[&<]/['test'](mnd9$e)) return (/^script$/i['test'](zdshj) ? (v90ae$['characters'](mnd9$e, 0x0, mnd9$e['length']), piyuk1) : (mnd9$e = mnd9$e['replace'](/&#?\w+;/g, vua308), v90ae$['characters'](mnd9$e, 0x0, mnd9$e['length']), piyuk1)
    );
  }return zsd6 + 0x1;
}function Ay1pkiu(yx1kpi, a0v938, ky1pu, qob_4) {
  var fr4g_o = qob_4[ky1pu];return null == fr4g_o && (fr4g_o = yx1kpi['lastIndexOf']('</' + ky1pu + '>'), a0v938 > fr4g_o && (fr4g_o = yx1kpi['lastIndexOf']('</' + ky1pu)), qob_4[ky1pu] = fr4g_o), a0v938 > fr4g_o;
}function Av3(ky1u, u01k8) {
  for (var e9$nm in ky1u) u01k8[e9$nm] = ky1u[e9$nm];
}function Ar47gf5(xityp, hdsj6, v089$, _qxbot) {
  var txypi = xityp['charAt'](hdsj6 + 0x2);switch (txypi) {case '-':
      if ('-' === xityp['charAt'](hdsj6 + 0x3)) {
        var qgb4_o = xityp['indexOf']('-->', hdsj6 + 0x4);return qgb4_o > hdsj6 ? (v089$['comment'](xityp, hdsj6 + 0x4, qgb4_o - hdsj6 - 0x4), qgb4_o + 0x3) : (_qxbot['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xityp['substr'](hdsj6 + 0x3, 0x6)) {
        var qgb4_o = xityp['indexOf'](']]>', hdsj6 + 0x9);return v089$['startCDATA'](), v089$['characters'](xityp, hdsj6 + 0x9, qgb4_o - hdsj6 - 0x9), v089$['endCDATA'](), qgb4_o + 0x3;
      }var wljz2 = Ayqtbix(xityp, hdsj6),
          $dsne = wljz2['length'];if ($dsne > 0x1 && /!doctype/i['test'](wljz2[0x0][0x0])) {
        var yxp1ti = wljz2[0x1][0x0],
            hjlw = $dsne > 0x3 && /^public$/i['test'](wljz2[0x2][0x0]) && wljz2[0x3][0x0],
            _rgf = $dsne > 0x4 && wljz2[0x4][0x0],
            $mena = wljz2[$dsne - 0x1];return v089$['startDTD'](yxp1ti, hjlw && hjlw['replace'](/^(['"])(.*?)\1$/, '$2'), _rgf && _rgf['replace'](/^(['"])(.*?)\1$/, '$2')), v089$['endDTD'](), $mena['index'] + $mena[0x0]['length'];
      }}return -0x1;
}function Amed9n(v08ku3, hl6, dne9) {
  var og4rq_ = v08ku3['indexOf']('?>', hl6);if (og4rq_) {
    var txip1 = v08ku3['substring'](hl6, og4rq_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (txip1) {
      {
        txip1[0x0]['length'];
      }return dne9['processingInstruction'](txip1[0x1], txip1[0x2]), og4rq_ + 0x2;
    }return -0x1;
  }return -0x1;
}function Aqobt_g() {}function Atpbix(wj2lh, m$na) {
  return wj2lh['__proto__'] = m$na, wj2lh;
}function Ayqtbix(s6mden, r4fgo_) {
  var ixk1py,
      sdenm$ = [],
      y1kup = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (y1kup['lastIndex'] = r4fgo_, y1kup['exec'](s6mden); ixk1py = y1kup['exec'](s6mden);) if (sdenm$['push'](ixk1py), ixk1py[0x1]) return sdenm$;
}var Aq_rgo4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Au1kiyp = new RegExp('[\\-\\.0-9' + Aq_rgo4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ap1tiy = new RegExp('^' + Aq_rgo4['source'] + Au1kiyp['source'] + '*(?::' + Aq_rgo4['source'] + Au1kiyp['source'] + '*)?$'),
    Atqgbo = 0x0,
    Ai3ku = 0x1,
    Azhswj6 = 0x2,
    Ahz2ljw = 0x3,
    Ae6d = 0x4,
    Aav38u0 = 0x5,
    Asme = 0x6,
    Ap38ku1 = 0x7;Asdzh6j['prototype'] = { 'parse': function (d$s, qbo_, pyuki1) {
    var fg_7 = this['domBuilder'];fg_7['startDocument'](), Av3(qbo_, qbo_ = {}), Ane9a$m(d$s, qbo_, pyuki1, fg_7, this['errorHandler']), fg_7['endDocument']();
  } }, Aqobt_g['prototype'] = { 'setTagName': function (_gtob) {
    if (!Ap1tiy['test'](_gtob)) throw new Error('invalid tagName:' + _gtob);this['tagName'] = _gtob;
  }, 'add': function (f54gr, ybtxpi, bxqi) {
    if (!Ap1tiy['test'](f54gr)) throw new Error('invalid attribute:' + f54gr);this[this['length']++] = { 'qName': f54gr, 'value': ybtxpi, 'offset': bxqi };
  }, 'length': 0x0, 'getLocalName': function (sjn6m) {
    return this[sjn6m]['localName'];
  }, 'getLocator': function (txyp1) {
    return this[txyp1]['locator'];
  }, 'getQName': function (u380k1) {
    return this[u380k1]['qName'];
  }, 'getURI': function (a3980) {
    return this[a3980]['uri'];
  }, 'getValue': function (a$9v0) {
    return this[a$9v0]['value'];
  } }, Atpbix({}, Atpbix['prototype']) instanceof Atpbix || (Atpbix = function (oqgb4, n9ame) {
  function iukpy1() {}iukpy1['prototype'] = n9ame, iukpy1 = new iukpy1();for (n9ame in oqgb4) iukpy1[n9ame] = oqgb4[n9ame];return iukpy1;
}), exports['XMLReader'] = Asdzh6j;