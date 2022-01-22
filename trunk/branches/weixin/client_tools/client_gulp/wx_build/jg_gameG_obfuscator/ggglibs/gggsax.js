var m = wx.$g;
function gpb_0i5() {}function g_t3o(ujm6r$, m6$rju, r6$jz2, bpft0_, ixh5ba) {
  function dto4f(_pb50i) {
    if (_pb50i > 0xffff) {
      _pb50i -= 0x10000;var v7ywke = 0xd800 + (_pb50i >> 0xa),
          ewqyv7 = 0xdc00 + (0x3ff & _pb50i);return String['fromCharCode'](v7ywke, ewqyv7);
    }return String['fromCharCode'](_pb50i);
  }function hxbia(d26o3z) {
    var veyk7w = d26o3z['slice'](0x1, -0x1);return veyk7w in r6$jz2 ? r6$jz2[veyk7w] : '#' === veyk7w['charAt'](0x0) ? dto4f(parseInt(veyk7w['substr'](0x1)['replace']('x', '0x'))) : (ixh5ba['error']('entity not found:' + d26o3z), d26o3z);
  }function ykehw(q7yvw) {
    if (q7yvw > kxy1wh) {
      var jdzr = ujm6r$['substring'](kxy1wh, q7yvw)['replace'](/&#?\w+;/g, hxbia);ft43_ && $62j(kxy1wh), bpft0_['characters'](jdzr, 0x0, q7yvw - kxy1wh), kxy1wh = q7yvw;
    }
  }function $62j(f_o34, hw1kye) {
    for (; f_o34 >= of43d && (hw1kye = zord6['exec'](ujm6r$));) sqcv7g = hw1kye['index'], of43d = sqcv7g + hw1kye[0x0]['length'], ft43_['lineNumber']++;ft43_['columnNumber'] = f_o34 - sqcv7g + 0x1;
  }for (var sqcv7g = 0x0, of43d = 0x0, zord6 = /.*(?:\r\n?|\n)|.*$/g, ft43_ = bpft0_['locator'], o_4ft3 = [{ 'currentNSMap': m6$rju }], dzo2r = {}, kxy1wh = 0x0;;) {
    try {
      var kvy = ujm6r$['indexOf']('<', kxy1wh);if (0x0 > kvy) {
        if (!ujm6r$['substr'](kxy1wh)['match'](/^\s*$/)) {
          var hba5xi = bpft0_['doc'],
              _0tpfb = hba5xi['createTextNode'](ujm6r$['substr'](kxy1wh));hba5xi['appendChild'](_0tpfb), bpft0_['currentElement'] = _0tpfb;
        }return;
      }switch (kvy > kxy1wh && ykehw(kvy), ujm6r$['charAt'](kvy + 0x1)) {case '/':
          var t3ozd4 = ujm6r$['indexOf']('>', kvy + 0x3),
              _ftp40 = ujm6r$['substring'](kvy + 0x2, t3ozd4),
              gqcs78 = o_4ft3['pop']();0x0 > t3ozd4 ? (_ftp40 = ujm6r$['substring'](kvy + 0x2)['replace'](/[\s<].*/, ''), ixh5ba['error']('end tag name: ' + _ftp40 + ' is not complete:' + gqcs78['tagName']), t3ozd4 = kvy + 0x1 + _ftp40['length']) : _ftp40['match'](/\s</) && (_ftp40 = _ftp40['replace'](/[\s<].*/, ''), ixh5ba['error']('end tag name: ' + _ftp40 + ' maybe not complete'), t3ozd4 = kvy + 0x1 + _ftp40['length']);var ki1hx = gqcs78['localNSMap'],
              y1khwe = gqcs78['tagName'] == _ftp40,
              otf4_3 = y1khwe || gqcs78['tagName'] && gqcs78['tagName']['toLowerCase']() == _ftp40['toLowerCase']();if (otf4_3) {
            if (bpft0_['endElement'](gqcs78['uri'], gqcs78['localName'], _ftp40), ki1hx) {
              for (var vcqs in ki1hx) bpft0_['endPrefixMapping'](vcqs);
            }y1khwe || ixh5ba['fatalError']('end tag name: ' + _ftp40 + ' is not match the current start tagName:' + gqcs78['tagName']);
          } else o_4ft3['push'](gqcs78);t3ozd4++;break;case '?':
          ft43_ && $62j(kvy), t3ozd4 = gykwev7(ujm6r$, kvy, bpft0_);break;case '!':
          ft43_ && $62j(kvy), t3ozd4 = g_f4t30(ujm6r$, kvy, bpft0_, ixh5ba);break;default:
          ft43_ && $62j(kvy);var rmu6 = new goz26rd(),
              slc8qg = o_4ft3[o_4ft3['length'] - 0x1]['currentNSMap'],
              t3ozd4 = go_43ft(ujm6r$, kvy, rmu6, slc8qg, hxbia, ixh5ba),
              jzr26$ = rmu6['length'];if (!rmu6['closed'] && gvky7ew(ujm6r$, t3ozd4, rmu6['tagName'], dzo2r) && (rmu6['closed'] = !0x0, r6$jz2['nbsp'] || ixh5ba['warning']('unclosed xml attribute')), ft43_ && jzr26$) {
            for (var $j62ur = gwyq7ve(ft43_, {}), sc7qvg = 0x0; jzr26$ > sc7qvg; sc7qvg++) {
              var yg7evq = rmu6[sc7qvg];$62j(yg7evq['offset']), yg7evq['locator'] = gwyq7ve(ft43_, {});
            }bpft0_['locator'] = $j62ur, gk1whax(rmu6, bpft0_, slc8qg) && o_4ft3['push'](rmu6), bpft0_['locator'] = ft43_;
          } else gk1whax(rmu6, bpft0_, slc8qg) && o_4ft3['push'](rmu6);'http://www.w3.org/1999/xhtml' !== rmu6['uri'] || rmu6['closed'] ? t3ozd4++ : t3ozd4 = gtf_403(ujm6r$, t3ozd4, rmu6['tagName'], hxbia, bpft0_);}
    } catch (scqv7) {
      ixh5ba['error']('element parse error: ' + scqv7), t3ozd4 = -0x1;
    }t3ozd4 > kxy1wh ? kxy1wh = t3ozd4 : ykehw(Math['max'](kvy, kxy1wh) + 0x1);
  }
}function gwyq7ve(dtzo3, gvcqs7) {
  return gvcqs7['lineNumber'] = dtzo3['lineNumber'], gvcqs7['columnNumber'] = dtzo3['columnNumber'], gvcqs7;
}function go_43ft(d63oz, j6$zr2, u6j, o3td4, q8gsc, $um6jr) {
  for (var ab5ip, ap5bix, l8gsc = ++j6$zr2, kewy1h = gsc8gl;;) {
    var t4_f0 = d63oz['charAt'](l8gsc);switch (t4_f0) {case '=':
        if (kewy1h === gkwev7y) ab5ip = d63oz['slice'](j6$zr2, l8gsc), kewy1h = g$rz2j;else {
          if (kewy1h !== gxia1k) throw new Error('attribute equal must after attrName');kewy1h = g$rz2j;
        }break;case '\x27':case '\x22':
        if (kewy1h === g$rz2j || kewy1h === gkwev7y) {
          if (kewy1h === gkwev7y && ($um6jr['warning']('attribute value must after "="'), ab5ip = d63oz['slice'](j6$zr2, l8gsc)), j6$zr2 = l8gsc + 0x1, l8gsc = d63oz['indexOf'](t4_f0, j6$zr2), !(l8gsc > 0x0)) throw new Error('attribute value no end \'' + t4_f0 + '\' match');ap5bix = d63oz['slice'](j6$zr2, l8gsc)['replace'](/&#?\w+;/g, q8gsc), u6j['add'](ab5ip, ap5bix, j6$zr2 - 0x1), kewy1h = gyhx1k;
        } else {
          if (kewy1h != ggsc7q) throw new Error('attribute value must after "="');ap5bix = d63oz['slice'](j6$zr2, l8gsc)['replace'](/&#?\w+;/g, q8gsc), u6j['add'](ab5ip, ap5bix, j6$zr2), $um6jr['warning']('attribute "' + ab5ip + '" missed start quot(' + t4_f0 + ')!!'), j6$zr2 = l8gsc + 0x1, kewy1h = gyhx1k;
        }break;case '/':
        switch (kewy1h) {case gsc8gl:
            u6j['setTagName'](d63oz['slice'](j6$zr2, l8gsc));case gyhx1k:case gb5hia:case godtz4:
            kewy1h = godtz4, u6j['closed'] = !0x0;case ggsc7q:case gkwev7y:case gxia1k:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $um6jr['error']('unexpected end of input'), kewy1h == gsc8gl && u6j['setTagName'](d63oz['slice'](j6$zr2, l8gsc)), l8gsc;case '>':
        switch (kewy1h) {case gsc8gl:
            u6j['setTagName'](d63oz['slice'](j6$zr2, l8gsc));case gyhx1k:case gb5hia:case godtz4:
            break;case ggsc7q:case gkwev7y:
            ap5bix = d63oz['slice'](j6$zr2, l8gsc), '/' === ap5bix['slice'](-0x1) && (u6j['closed'] = !0x0, ap5bix = ap5bix['slice'](0x0, -0x1));case gxia1k:
            kewy1h === gxia1k && (ap5bix = ab5ip), kewy1h == ggsc7q ? ($um6jr['warning']('attribute "' + ap5bix + '" missed quot(")!!'), u6j['add'](ab5ip, ap5bix['replace'](/&#?\w+;/g, q8gsc), j6$zr2)) : ('http://www.w3.org/1999/xhtml' === o3td4[''] && ap5bix['match'](/^(?:disabled|checked|selected)$/i) || $um6jr['warning']('attribute "' + ap5bix + '" missed value!! "' + ap5bix + '" instead!!'), u6j['add'](ap5bix, ap5bix, j6$zr2));break;case g$rz2j:
            throw new Error('attribute value missed!!');}return l8gsc;case '\u0080':
        t4_f0 = '\x20';default:
        if ('\x20' >= t4_f0) switch (kewy1h) {case gsc8gl:
            u6j['setTagName'](d63oz['slice'](j6$zr2, l8gsc)), kewy1h = gb5hia;break;case gkwev7y:
            ab5ip = d63oz['slice'](j6$zr2, l8gsc), kewy1h = gxia1k;break;case ggsc7q:
            var ap5bix = d63oz['slice'](j6$zr2, l8gsc)['replace'](/&#?\w+;/g, q8gsc);$um6jr['warning']('attribute "' + ap5bix + '" missed quot(")!!'), u6j['add'](ab5ip, ap5bix, j6$zr2);case gyhx1k:
            kewy1h = gb5hia;} else switch (kewy1h) {case gxia1k:
            {
              u6j['tagName'];
            }'http://www.w3.org/1999/xhtml' === o3td4[''] && ab5ip['match'](/^(?:disabled|checked|selected)$/i) || $um6jr['warning']('attribute "' + ab5ip + '" missed value!! "' + ab5ip + '" instead2!!'), u6j['add'](ab5ip, ab5ip, j6$zr2), j6$zr2 = l8gsc, kewy1h = gkwev7y;break;case gyhx1k:
            $um6jr['warning']('attribute space is required"' + ab5ip + '\x22!!');case gb5hia:
            kewy1h = gkwev7y, j6$zr2 = l8gsc;break;case g$rz2j:
            kewy1h = ggsc7q, j6$zr2 = l8gsc;break;case godtz4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}l8gsc++;
  }
}function gk1whax(yvwek1, wke1y, ehkyw) {
  for (var $6rjz2 = yvwek1['tagName'], b5_ip0 = null, c9sl8 = yvwek1['length']; c9sl8--;) {
    var pb0f_t = yvwek1[c9sl8],
        gqe7yv = pb0f_t['qName'],
        cegqv = pb0f_t['value'],
        s8gcql = gqe7yv['indexOf'](':');if (s8gcql > 0x0) var kwey1v = pb0f_t['prefix'] = gqe7yv['slice'](0x0, s8gcql),
        bxih5a = gqe7yv['slice'](s8gcql + 0x1),
        qgyve = 'xmlns' === kwey1v && bxih5a;else bxih5a = gqe7yv, kwey1v = null, qgyve = 'xmlns' === gqe7yv && '';pb0f_t['localName'] = bxih5a, qgyve !== !0x1 && (null == b5_ip0 && (b5_ip0 = {}, gkxhia(ehkyw, ehkyw = {})), ehkyw[qgyve] = b5_ip0[qgyve] = cegqv, pb0f_t['uri'] = 'http://www.w3.org/2000/xmlns/', wke1y['startPrefixMapping'](qgyve, cegqv));
  }for (var c9sl8 = yvwek1['length']; c9sl8--;) {
    pb0f_t = yvwek1[c9sl8];var kwey1v = pb0f_t['prefix'];kwey1v && ('xml' === kwey1v && (pb0f_t['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kwey1v && (pb0f_t['uri'] = ehkyw[kwey1v || '']));
  }var s8gcql = $6rjz2['indexOf'](':');s8gcql > 0x0 ? (kwey1v = yvwek1['prefix'] = $6rjz2['slice'](0x0, s8gcql), bxih5a = yvwek1['localName'] = $6rjz2['slice'](s8gcql + 0x1)) : (kwey1v = null, bxih5a = yvwek1['localName'] = $6rjz2);var ecv7q = yvwek1['uri'] = ehkyw[kwey1v || ''];if (wke1y['startElement'](ecv7q, bxih5a, $6rjz2, yvwek1), !yvwek1['closed']) return yvwek1['currentNSMap'] = ehkyw, yvwek1['localNSMap'] = b5_ip0, !0x0;if (wke1y['endElement'](ecv7q, bxih5a, $6rjz2), b5_ip0) {
    for (kwey1v in b5_ip0) wke1y['endPrefixMapping'](kwey1v);
  }
}function gtf_403(bh5xai, xahk1, _fp40t, ft0_p, axib5p) {
  if (/^(?:script|textarea)$/i['test'](_fp40t)) {
    var ekhwy1 = bh5xai['indexOf']('</' + _fp40t + '>', xahk1),
        $u62rj = bh5xai['substring'](xahk1 + 0x1, ekhwy1);if (/[&<]/['test']($u62rj)) return (/^script$/i['test'](_fp40t) ? (axib5p['characters']($u62rj, 0x0, $u62rj['length']), ekhwy1) : ($u62rj = $u62rj['replace'](/&#?\w+;/g, ft0_p), axib5p['characters']($u62rj, 0x0, $u62rj['length']), ekhwy1)
    );
  }return xahk1 + 0x1;
}function gvky7ew(_f3, ia1kh, ixba5, rz2dj6) {
  var _tfb0 = rz2dj6[ixba5];return null == _tfb0 && (_tfb0 = _f3['lastIndexOf']('</' + ixba5 + '>'), ia1kh > _tfb0 && (_tfb0 = _f3['lastIndexOf']('</' + ixba5)), rz2dj6[ixba5] = _tfb0), ia1kh > _tfb0;
}function gkxhia(ywhek, px5ia) {
  for (var qvg7ey in ywhek) px5ia[qvg7ey] = ywhek[qvg7ey];
}function g_f4t30(_4pt, u6$2, tdzo34, hwk1yx) {
  var i0p5b_ = _4pt['charAt'](u6$2 + 0x2);switch (i0p5b_) {case '-':
      if ('-' === _4pt['charAt'](u6$2 + 0x3)) {
        var hbxi = _4pt['indexOf']('-->', u6$2 + 0x4);return hbxi > u6$2 ? (tdzo34['comment'](_4pt, u6$2 + 0x4, hbxi - u6$2 - 0x4), hbxi + 0x3) : (hwk1yx['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _4pt['substr'](u6$2 + 0x3, 0x6)) {
        var hbxi = _4pt['indexOf'](']]>', u6$2 + 0x9);return tdzo34['startCDATA'](), tdzo34['characters'](_4pt, u6$2 + 0x9, hbxi - u6$2 - 0x9), tdzo34['endCDATA'](), hbxi + 0x3;
      }var kyhwe1 = gevy1(_4pt, u6$2),
          d3z4ot = kyhwe1['length'];if (d3z4ot > 0x1 && /!doctype/i['test'](kyhwe1[0x0][0x0])) {
        var a5xibp = kyhwe1[0x1][0x0],
            vy7egq = d3z4ot > 0x3 && /^public$/i['test'](kyhwe1[0x2][0x0]) && kyhwe1[0x3][0x0],
            qs7cvg = d3z4ot > 0x4 && kyhwe1[0x4][0x0],
            _ft0p4 = kyhwe1[d3z4ot - 0x1];return tdzo34['startDTD'](a5xibp, vy7egq && vy7egq['replace'](/^(['"])(.*?)\1$/, '$2'), qs7cvg && qs7cvg['replace'](/^(['"])(.*?)\1$/, '$2')), tdzo34['endDTD'](), _ft0p4['index'] + _ft0p4[0x0]['length'];
      }}return -0x1;
}function gykwev7(xa1hkw, y7vkwe, y7v) {
  var wkxh1a = xa1hkw['indexOf']('?>', y7vkwe);if (wkxh1a) {
    var xw1ykh = xa1hkw['substring'](y7vkwe, wkxh1a)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xw1ykh) {
      {
        xw1ykh[0x0]['length'];
      }return y7v['processingInstruction'](xw1ykh[0x1], xw1ykh[0x2]), wkxh1a + 0x2;
    }return -0x1;
  }return -0x1;
}function goz26rd() {}function gev7kwy(mur6$j, dt43zo) {
  return mur6$j['__proto__'] = dt43zo, mur6$j;
}function gevy1(ewk1yh, j6r$z) {
  var _pbft,
      qs7cv = [],
      $jurm6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($jurm6['lastIndex'] = j6r$z, $jurm6['exec'](ewk1yh); _pbft = $jurm6['exec'](ewk1yh);) if (qs7cv['push'](_pbft), _pbft[0x1]) return qs7cv;
}var gyq7vwe = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gcsgl9 = new RegExp('[\\-\\.0-9' + gyq7vwe['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gl9s8g = new RegExp('^' + gyq7vwe['source'] + gcsgl9['source'] + '*(?::' + gyq7vwe['source'] + gcsgl9['source'] + '*)?$'),
    gsc8gl = 0x0,
    gkwev7y = 0x1,
    gxia1k = 0x2,
    g$rz2j = 0x3,
    ggsc7q = 0x4,
    gyhx1k = 0x5,
    gb5hia = 0x6,
    godtz4 = 0x7;gpb_0i5['prototype'] = { 'parse': function (kyxhw, yvekw1, a1xih5) {
    var bi5_p = this['domBuilder'];bi5_p['startDocument'](), gkxhia(yvekw1, yvekw1 = {}), g_t3o(kyxhw, yvekw1, a1xih5, bi5_p, this['errorHandler']), bi5_p['endDocument']();
  } }, goz26rd['prototype'] = { 'setTagName': function (murj$) {
    if (!gl9s8g['test'](murj$)) throw new Error('invalid tagName:' + murj$);this['tagName'] = murj$;
  }, 'add': function (zo32d, p4t0_, xiap) {
    if (!gl9s8g['test'](zo32d)) throw new Error('invalid attribute:' + zo32d);this[this['length']++] = { 'qName': zo32d, 'value': p4t0_, 'offset': xiap };
  }, 'length': 0x0, 'getLocalName': function (eh1wky) {
    return this[eh1wky]['localName'];
  }, 'getLocator': function (axkhw1) {
    return this[axkhw1]['locator'];
  }, 'getQName': function (j2r$) {
    return this[j2r$]['qName'];
  }, 'getURI': function ($m6rju) {
    return this[$m6rju]['uri'];
  }, 'getValue': function (wve1yk) {
    return this[wve1yk]['value'];
  } }, gev7kwy({}, gev7kwy['prototype']) instanceof gev7kwy || (gev7kwy = function (khye, zj6d2r) {
  function gq7cvs() {}gq7cvs['prototype'] = zj6d2r, gq7cvs = new gq7cvs();for (zj6d2r in khye) gq7cvs[zj6d2r] = khye[zj6d2r];return gq7cvs;
}), exports['XMLReader'] = gpb_0i5;