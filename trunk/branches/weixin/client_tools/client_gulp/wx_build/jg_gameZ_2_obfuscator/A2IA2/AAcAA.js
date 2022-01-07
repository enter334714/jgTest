var d = wx.$A;
function Aqto_xb() {}function Aszhw6j(iy1pxt, edsn6, _xtqob, gbqto_, u3kip1) {
  function u0138k(ame$9) {
    if (ame$9 > 0xffff) {
      ame$9 -= 0x10000;var d9n$e = 0xd800 + (ame$9 >> 0xa),
          ve90$a = 0xdc00 + (0x3ff & ame$9);return String['fromCharCode'](d9n$e, ve90$a);
    }return String['fromCharCode'](ame$9);
  }function u1kpyi(kypi1u) {
    var x1tyip = kypi1u['slice'](0x1, -0x1);return x1tyip in _xtqob ? _xtqob[x1tyip] : '#' === x1tyip['charAt'](0x0) ? u0138k(parseInt(x1tyip['substr'](0x1)['replace']('x', '0x'))) : (u3kip1['error']('entity not found:' + kypi1u), kypi1u);
  }function d9mne$($esmnd) {
    if ($esmnd > g4r57f) {
      var ms6ned = iy1pxt['substring'](g4r57f, $esmnd)['replace'](/&#?\w+;/g, u1kpyi);u3vk80 && qrog(g4r57f), gbqto_['characters'](ms6ned, 0x0, $esmnd - g4r57f), g4r57f = $esmnd;
    }
  }function qrog(qobtg_, dsz6h) {
    for (; qobtg_ >= u3k081 && (dsz6h = j6hdn['exec'](iy1pxt));) w6zsj = dsz6h['index'], u3k081 = w6zsj + dsz6h[0x0]['length'], u3vk80['lineNumber']++;u3vk80['columnNumber'] = qobtg_ - w6zsj + 0x1;
  }for (var w6zsj = 0x0, u3k081 = 0x0, j6hdn = /.*(?:\r\n?|\n)|.*$/g, u3vk80 = gbqto_['locator'], zjlh6 = [{ 'currentNSMap': edsn6 }], dhjs = {}, g4r57f = 0x0;;) {
    try {
      var $9aen = iy1pxt['indexOf']('<', g4r57f);if (0x0 > $9aen) {
        if (!iy1pxt['substr'](g4r57f)['match'](/^\s*$/)) {
          var b_oqg = gbqto_['doc'],
              u30k8 = b_oqg['createTextNode'](iy1pxt['substr'](g4r57f));b_oqg['appendChild'](u30k8), gbqto_['currentElement'] = u30k8;
        }return;
      }switch ($9aen > g4r57f && d9mne$($9aen), iy1pxt['charAt']($9aen + 0x1)) {case '/':
          var _r4ogf = iy1pxt['indexOf']('>', $9aen + 0x3),
              auv = iy1pxt['substring']($9aen + 0x2, _r4ogf),
              iky = zjlh6['pop']();0x0 > _r4ogf ? (auv = iy1pxt['substring']($9aen + 0x2)['replace'](/[\s<].*/, ''), u3kip1['error']('end tag name: ' + auv + ' is not complete:' + iky['tagName']), _r4ogf = $9aen + 0x1 + auv['length']) : auv['match'](/\s</) && (auv = auv['replace'](/[\s<].*/, ''), u3kip1['error']('end tag name: ' + auv + ' maybe not complete'), _r4ogf = $9aen + 0x1 + auv['length']);var a38u0v = iky['localNSMap'],
              md6es = iky['tagName'] == auv,
              btoyx = md6es || iky['tagName'] && iky['tagName']['toLowerCase']() == auv['toLowerCase']();if (btoyx) {
            if (gbqto_['endElement'](iky['uri'], iky['localName'], auv), a38u0v) {
              for (var dmjsn6 in a38u0v) gbqto_['endPrefixMapping'](dmjsn6);
            }md6es || u3kip1['fatalError']('end tag name: ' + auv + ' is not match the current start tagName:' + iky['tagName']);
          } else zjlh6['push'](iky);_r4ogf++;break;case '?':
          u3vk80 && qrog($9aen), _r4ogf = Atybqxi(iy1pxt, $9aen, gbqto_);break;case '!':
          u3vk80 && qrog($9aen), _r4ogf = Axbtyi(iy1pxt, $9aen, gbqto_, u3kip1);break;default:
          u3vk80 && qrog($9aen);var nae9$ = new A_4rqgo(),
              ku1yip = zjlh6[zjlh6['length'] - 0x1]['currentNSMap'],
              _r4ogf = Amnea$9(iy1pxt, $9aen, nae9$, ku1yip, u1kpyi, u3kip1),
              dmse$ = nae9$['length'];if (!nae9$['closed'] && Aku83p1(iy1pxt, _r4ogf, nae9$['tagName'], dhjs) && (nae9$['closed'] = !0x0, _xtqob['nbsp'] || u3kip1['warning']('unclosed xml attribute')), u3vk80 && dmse$) {
            for (var tqo_bg = Adms6(u3vk80, {}), v03au = 0x0; dmse$ > v03au; v03au++) {
              var v$ae0 = nae9$[v03au];qrog(v$ae0['offset']), v$ae0['locator'] = Adms6(u3vk80, {});
            }gbqto_['locator'] = tqo_bg, A$0a8(nae9$, gbqto_, ku1yip) && zjlh6['push'](nae9$), gbqto_['locator'] = u3vk80;
          } else A$0a8(nae9$, gbqto_, ku1yip) && zjlh6['push'](nae9$);'http://www.w3.org/1999/xhtml' !== nae9$['uri'] || nae9$['closed'] ? _r4ogf++ : _r4ogf = Alj2hz(iy1pxt, _r4ogf, nae9$['tagName'], u1kpyi, gbqto_);}
    } catch (wjz6hl) {
      u3kip1['error']('element parse error: ' + wjz6hl), _r4ogf = -0x1;
    }_r4ogf > g4r57f ? g4r57f = _r4ogf : d9mne$(Math['max']($9aen, g4r57f) + 0x1);
  }
}function Adms6(js6hw, _gf4o) {
  return _gf4o['lineNumber'] = js6hw['lineNumber'], _gf4o['columnNumber'] = js6hw['columnNumber'], _gf4o;
}function Amnea$9(obg_q, v8390a, g_o4qb, _o4bgq, mn$se, itxqby) {
  for (var k8u03, yqtixb, bixpyt = ++v8390a, jdshn = Ar4gf;;) {
    var py1xt = obg_q['charAt'](bixpyt);switch (py1xt) {case '=':
        if (jdshn === Aq4o_r) k8u03 = obg_q['slice'](v8390a, bixpyt), jdshn = Atbx_q;else {
          if (jdshn !== Aszjwh6) throw new Error('attribute equal must after attrName');jdshn = Atbx_q;
        }break;case '\x27':case '\x22':
        if (jdshn === Atbx_q || jdshn === Aq4o_r) {
          if (jdshn === Aq4o_r && (itxqby['warning']('attribute value must after "="'), k8u03 = obg_q['slice'](v8390a, bixpyt)), v8390a = bixpyt + 0x1, bixpyt = obg_q['indexOf'](py1xt, v8390a), !(bixpyt > 0x0)) throw new Error('attribute value no end \'' + py1xt + '\' match');yqtixb = obg_q['slice'](v8390a, bixpyt)['replace'](/&#?\w+;/g, mn$se), g_o4qb['add'](k8u03, yqtixb, v8390a - 0x1), jdshn = Aswzh6j;
        } else {
          if (jdshn != Avku803) throw new Error('attribute value must after "="');yqtixb = obg_q['slice'](v8390a, bixpyt)['replace'](/&#?\w+;/g, mn$se), g_o4qb['add'](k8u03, yqtixb, v8390a), itxqby['warning']('attribute "' + k8u03 + '" missed start quot(' + py1xt + ')!!'), v8390a = bixpyt + 0x1, jdshn = Aswzh6j;
        }break;case '/':
        switch (jdshn) {case Ar4gf:
            g_o4qb['setTagName'](obg_q['slice'](v8390a, bixpyt));case Aswzh6j:case Adhnj:case Ae$9mav:
            jdshn = Ae$9mav, g_o4qb['closed'] = !0x0;case Avku803:case Aq4o_r:case Aszjwh6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return itxqby['error']('unexpected end of input'), jdshn == Ar4gf && g_o4qb['setTagName'](obg_q['slice'](v8390a, bixpyt)), bixpyt;case '>':
        switch (jdshn) {case Ar4gf:
            g_o4qb['setTagName'](obg_q['slice'](v8390a, bixpyt));case Aswzh6j:case Adhnj:case Ae$9mav:
            break;case Avku803:case Aq4o_r:
            yqtixb = obg_q['slice'](v8390a, bixpyt), '/' === yqtixb['slice'](-0x1) && (g_o4qb['closed'] = !0x0, yqtixb = yqtixb['slice'](0x0, -0x1));case Aszjwh6:
            jdshn === Aszjwh6 && (yqtixb = k8u03), jdshn == Avku803 ? (itxqby['warning']('attribute "' + yqtixb + '" missed quot(")!!'), g_o4qb['add'](k8u03, yqtixb['replace'](/&#?\w+;/g, mn$se), v8390a)) : ('http://www.w3.org/1999/xhtml' === _o4bgq[''] && yqtixb['match'](/^(?:disabled|checked|selected)$/i) || itxqby['warning']('attribute "' + yqtixb + '" missed value!! "' + yqtixb + '" instead!!'), g_o4qb['add'](yqtixb, yqtixb, v8390a));break;case Atbx_q:
            throw new Error('attribute value missed!!');}return bixpyt;case '\u0080':
        py1xt = '\x20';default:
        if ('\x20' >= py1xt) switch (jdshn) {case Ar4gf:
            g_o4qb['setTagName'](obg_q['slice'](v8390a, bixpyt)), jdshn = Adhnj;break;case Aq4o_r:
            k8u03 = obg_q['slice'](v8390a, bixpyt), jdshn = Aszjwh6;break;case Avku803:
            var yqtixb = obg_q['slice'](v8390a, bixpyt)['replace'](/&#?\w+;/g, mn$se);itxqby['warning']('attribute "' + yqtixb + '" missed quot(")!!'), g_o4qb['add'](k8u03, yqtixb, v8390a);case Aswzh6j:
            jdshn = Adhnj;} else switch (jdshn) {case Aszjwh6:
            {
              g_o4qb['tagName'];
            }'http://www.w3.org/1999/xhtml' === _o4bgq[''] && k8u03['match'](/^(?:disabled|checked|selected)$/i) || itxqby['warning']('attribute "' + k8u03 + '" missed value!! "' + k8u03 + '" instead2!!'), g_o4qb['add'](k8u03, k8u03, v8390a), v8390a = bixpyt, jdshn = Aq4o_r;break;case Aswzh6j:
            itxqby['warning']('attribute space is required"' + k8u03 + '\x22!!');case Adhnj:
            jdshn = Aq4o_r, v8390a = bixpyt;break;case Atbx_q:
            jdshn = Avku803, v8390a = bixpyt;break;case Ae$9mav:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bixpyt++;
  }
}function A$0a8(_qbo, gf4_, g_bt) {
  for (var _qxbt = _qbo['tagName'], gq4or_ = null, u0kv38 = _qbo['length']; u0kv38--;) {
    var o4gq_ = _qbo[u0kv38],
        jh6n = o4gq_['qName'],
        zwlh6j = o4gq_['value'],
        a9emn = jh6n['indexOf'](':');if (a9emn > 0x0) var obtqg_ = o4gq_['prefix'] = jh6n['slice'](0x0, a9emn),
        smnjd6 = jh6n['slice'](a9emn + 0x1),
        rfo = 'xmlns' === obtqg_ && smnjd6;else smnjd6 = jh6n, obtqg_ = null, rfo = 'xmlns' === jh6n && '';o4gq_['localName'] = smnjd6, rfo !== !0x1 && (null == gq4or_ && (gq4or_ = {}, Ads6jhz(g_bt, g_bt = {})), g_bt[rfo] = gq4or_[rfo] = zwlh6j, o4gq_['uri'] = 'http://www.w3.org/2000/xmlns/', gf4_['startPrefixMapping'](rfo, zwlh6j));
  }for (var u0kv38 = _qbo['length']; u0kv38--;) {
    o4gq_ = _qbo[u0kv38];var obtqg_ = o4gq_['prefix'];obtqg_ && ('xml' === obtqg_ && (o4gq_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== obtqg_ && (o4gq_['uri'] = g_bt[obtqg_ || '']));
  }var a9emn = _qxbt['indexOf'](':');a9emn > 0x0 ? (obtqg_ = _qbo['prefix'] = _qxbt['slice'](0x0, a9emn), smnjd6 = _qbo['localName'] = _qxbt['slice'](a9emn + 0x1)) : (obtqg_ = null, smnjd6 = _qbo['localName'] = _qxbt);var shjw = _qbo['uri'] = g_bt[obtqg_ || ''];if (gf4_['startElement'](shjw, smnjd6, _qxbt, _qbo), !_qbo['closed']) return _qbo['currentNSMap'] = g_bt, _qbo['localNSMap'] = gq4or_, !0x0;if (gf4_['endElement'](shjw, smnjd6, _qxbt), gq4or_) {
    for (obtqg_ in gq4or_) gf4_['endPrefixMapping'](obtqg_);
  }
}function Alj2hz(ui13p, puki1, qb_otx, q_xotb, g_of) {
  if (/^(?:script|textarea)$/i['test'](qb_otx)) {
    var k3uip = ui13p['indexOf']('</' + qb_otx + '>', puki1),
        e9am$n = ui13p['substring'](puki1 + 0x1, k3uip);if (/[&<]/['test'](e9am$n)) return (/^script$/i['test'](qb_otx) ? (g_of['characters'](e9am$n, 0x0, e9am$n['length']), k3uip) : (e9am$n = e9am$n['replace'](/&#?\w+;/g, q_xotb), g_of['characters'](e9am$n, 0x0, e9am$n['length']), k3uip)
    );
  }return puki1 + 0x1;
}function Aku83p1(szj6w, gfr475, fro_g, iku3p1) {
  var dshj6n = iku3p1[fro_g];return null == dshj6n && (dshj6n = szj6w['lastIndexOf']('</' + fro_g + '>'), gfr475 > dshj6n && (dshj6n = szj6w['lastIndexOf']('</' + fro_g)), iku3p1[fro_g] = dshj6n), gfr475 > dshj6n;
}function Ads6jhz(or4_gf, pbixy) {
  for (var tqybo in or4_gf) pbixy[tqybo] = or4_gf[tqybo];
}function Axbtyi(_boq4, ypkix, yupki1, _g4qor) {
  var btx_qo = _boq4['charAt'](ypkix + 0x2);switch (btx_qo) {case '-':
      if ('-' === _boq4['charAt'](ypkix + 0x3)) {
        var e$09a = _boq4['indexOf']('-->', ypkix + 0x4);return e$09a > ypkix ? (yupki1['comment'](_boq4, ypkix + 0x4, e$09a - ypkix - 0x4), e$09a + 0x3) : (_g4qor['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _boq4['substr'](ypkix + 0x3, 0x6)) {
        var e$09a = _boq4['indexOf'](']]>', ypkix + 0x9);return yupki1['startCDATA'](), yupki1['characters'](_boq4, ypkix + 0x9, e$09a - ypkix - 0x9), yupki1['endCDATA'](), e$09a + 0x3;
      }var v83 = Atpiyxb(_boq4, ypkix),
          kiyp1x = v83['length'];if (kiyp1x > 0x1 && /!doctype/i['test'](v83[0x0][0x0])) {
        var ds$ = v83[0x1][0x0],
            ykpx = kiyp1x > 0x3 && /^public$/i['test'](v83[0x2][0x0]) && v83[0x3][0x0],
            $d9nme = kiyp1x > 0x4 && v83[0x4][0x0],
            v30k8 = v83[kiyp1x - 0x1];return yupki1['startDTD'](ds$, ykpx && ykpx['replace'](/^(['"])(.*?)\1$/, '$2'), $d9nme && $d9nme['replace'](/^(['"])(.*?)\1$/, '$2')), yupki1['endDTD'](), v30k8['index'] + v30k8[0x0]['length'];
      }}return -0x1;
}function Atybqxi(q_bxt, yit1x, djz6hs) {
  var h6wjs = q_bxt['indexOf']('?>', yit1x);if (h6wjs) {
    var otx_bq = q_bxt['substring'](yit1x, h6wjs)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (otx_bq) {
      {
        otx_bq[0x0]['length'];
      }return djz6hs['processingInstruction'](otx_bq[0x1], otx_bq[0x2]), h6wjs + 0x2;
    }return -0x1;
  }return -0x1;
}function A_4rqgo() {}function Ai3pu(o_bgq4, bg4oq) {
  return o_bgq4['__proto__'] = bg4oq, o_bgq4;
}function Atpiyxb(dh6sn, uikp31) {
  var gf_4or,
      k803v = [],
      jshw6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jshw6['lastIndex'] = uikp31, jshw6['exec'](dh6sn); gf_4or = jshw6['exec'](dh6sn);) if (k803v['push'](gf_4or), gf_4or[0x1]) return k803v;
}var Agqb4o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Asnmdj = new RegExp('[\\-\\.0-9' + Agqb4o['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Awzh6sj = new RegExp('^' + Agqb4o['source'] + Asnmdj['source'] + '*(?::' + Agqb4o['source'] + Asnmdj['source'] + '*)?$'),
    Ar4gf = 0x0,
    Aq4o_r = 0x1,
    Aszjwh6 = 0x2,
    Atbx_q = 0x3,
    Avku803 = 0x4,
    Aswzh6j = 0x5,
    Adhnj = 0x6,
    Ae$9mav = 0x7;Aqto_xb['prototype'] = { 'parse': function (pyx1i, k0u13, boytq) {
    var grq = this['domBuilder'];grq['startDocument'](), Ads6jhz(k0u13, k0u13 = {}), Aszhw6j(pyx1i, k0u13, boytq, grq, this['errorHandler']), grq['endDocument']();
  } }, A_4rqgo['prototype'] = { 'setTagName': function ($enma9) {
    if (!Awzh6sj['test']($enma9)) throw new Error('invalid tagName:' + $enma9);this['tagName'] = $enma9;
  }, 'add': function (whj, xtbiqy, w6s) {
    if (!Awzh6sj['test'](whj)) throw new Error('invalid attribute:' + whj);this[this['length']++] = { 'qName': whj, 'value': xtbiqy, 'offset': w6s };
  }, 'length': 0x0, 'getLocalName': function (zhwsj) {
    return this[zhwsj]['localName'];
  }, 'getLocator': function (ip1x) {
    return this[ip1x]['locator'];
  }, 'getQName': function (tqg_) {
    return this[tqg_]['qName'];
  }, 'getURI': function (x1ypti) {
    return this[x1ypti]['uri'];
  }, 'getValue': function (btiyx) {
    return this[btiyx]['value'];
  } }, Ai3pu({}, Ai3pu['prototype']) instanceof Ai3pu || (Ai3pu = function (jhsnd6, kiy1px) {
  function ed$snm() {}ed$snm['prototype'] = kiy1px, ed$snm = new ed$snm();for (kiy1px in jhsnd6) ed$snm[kiy1px] = jhsnd6[kiy1px];return ed$snm;
}), exports['XMLReader'] = Aqto_xb;