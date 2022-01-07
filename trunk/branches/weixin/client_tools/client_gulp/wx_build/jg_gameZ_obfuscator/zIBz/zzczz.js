var B = wx.$z;
function zw2_50u() {}function zxah9s(xz, kyobtd, oeyzd, h61, zdtao) {
  function m7ilnv(iv7f) {
    if (iv7f > 0xffff) {
      iv7f -= 0x10000;var btyodk = 0xd800 + (iv7f >> 0xa),
          $7i3q = 0xdc00 + (0x3ff & iv7f);return String['fromCharCode'](btyodk, $7i3q);
    }return String['fromCharCode'](iv7f);
  }function mq$3ji(p1s) {
    var fgv46p = p1s['slice'](0x1, -0x1);return fgv46p in oeyzd ? oeyzd[fgv46p] : '#' === fgv46p['charAt'](0x0) ? m7ilnv(parseInt(fgv46p['substr'](0x1)['replace']('x', '0x'))) : (zdtao['error']('entity not found:' + p1s), p1s);
  }function btdyok(y8bkr) {
    if (y8bkr > lvf6g) {
      var w5_2ru = xz['substring'](lvf6g, y8bkr)['replace'](/&#?\w+;/g, mq$3ji);f7nlvi && edtz(lvf6g), h61['characters'](w5_2ru, 0x0, y8bkr - lvf6g), lvf6g = y8bkr;
    }
  }function edtz(tzexas, w52r_) {
    for (; tzexas >= koz && (w52r_ = rd['exec'](xz));) dez = w52r_['index'], koz = dez + w52r_[0x0]['length'], f7nlvi['lineNumber']++;f7nlvi['columnNumber'] = tzexas - dez + 0x1;
  }for (var dez = 0x0, koz = 0x0, rd = /.*(?:\r\n?|\n)|.*$/g, f7nlvi = h61['locator'], zdoky = [{ 'currentNSMap': kyobtd }], a9e1xs = {}, lvf6g = 0x0;;) {
    try {
      var bky8r_ = xz['indexOf']('<', lvf6g);if (0x0 > bky8r_) {
        if (!xz['substr'](lvf6g)['match'](/^\s*$/)) {
          var qmi$7 = h61['doc'],
              _2rb = qmi$7['createTextNode'](xz['substr'](lvf6g));qmi$7['appendChild'](_2rb), h61['currentElement'] = _2rb;
        }return;
      }switch (bky8r_ > lvf6g && btdyok(bky8r_), xz['charAt'](bky8r_ + 0x1)) {case '/':
          var nl3 = xz['indexOf']('>', bky8r_ + 0x3),
              se1a = xz['substring'](bky8r_ + 0x2, nl3),
              g4p6f = zdoky['pop']();0x0 > nl3 ? (se1a = xz['substring'](bky8r_ + 0x2)['replace'](/[\s<].*/, ''), zdtao['error']('end tag name: ' + se1a + ' is not complete:' + g4p6f['tagName']), nl3 = bky8r_ + 0x1 + se1a['length']) : se1a['match'](/\s</) && (se1a = se1a['replace'](/[\s<].*/, ''), zdtao['error']('end tag name: ' + se1a + ' maybe not complete'), nl3 = bky8r_ + 0x1 + se1a['length']);var azex9 = g4p6f['localNSMap'],
              _2w = g4p6f['tagName'] == se1a,
              w05u_2 = _2w || g4p6f['tagName'] && g4p6f['tagName']['toLowerCase']() == se1a['toLowerCase']();if (w05u_2) {
            if (h61['endElement'](g4p6f['uri'], g4p6f['localName'], se1a), azex9) {
              for (var dkytob in azex9) h61['endPrefixMapping'](dkytob);
            }_2w || zdtao['fatalError']('end tag name: ' + se1a + ' is not match the current start tagName:' + g4p6f['tagName']);
          } else zdoky['push'](g4p6f);nl3++;break;case '?':
          f7nlvi && edtz(bky8r_), nl3 = zkdzyt(xz, bky8r_, h61);break;case '!':
          f7nlvi && edtz(bky8r_), nl3 = znl7vi(xz, bky8r_, h61, zdtao);break;default:
          f7nlvi && edtz(bky8r_);var x9sph = new ztadzoe(),
              f4gvl6 = zdoky[zdoky['length'] - 0x1]['currentNSMap'],
              nl3 = zobtdk(xz, bky8r_, x9sph, f4gvl6, mq$3ji, zdtao),
              e9ax1 = x9sph['length'];if (!x9sph['closed'] && zl7m3n(xz, nl3, x9sph['tagName'], a9e1xs) && (x9sph['closed'] = !0x0, oeyzd['nbsp'] || zdtao['warning']('unclosed xml attribute')), f7nlvi && e9ax1) {
            for (var oetsz = zyotz(f7nlvi, {}), vfl4 = 0x0; e9ax1 > vfl4; vfl4++) {
              var fnv = x9sph[vfl4];edtz(fnv['offset']), fnv['locator'] = zyotz(f7nlvi, {});
            }h61['locator'] = oetsz, zg4h61p(x9sph, h61, f4gvl6) && zdoky['push'](x9sph), h61['locator'] = f7nlvi;
          } else zg4h61p(x9sph, h61, f4gvl6) && zdoky['push'](x9sph);'http://www.w3.org/1999/xhtml' !== x9sph['uri'] || x9sph['closed'] ? nl3++ : nl3 = zostaez(xz, nl3, x9sph['tagName'], mq$3ji, h61);}
    } catch (p164) {
      zdtao['error']('element parse error: ' + p164), nl3 = -0x1;
    }nl3 > lvf6g ? lvf6g = nl3 : btdyok(Math['max'](bky8r_, lvf6g) + 0x1);
  }
}function zyotz(satzo, w5r2) {
  return w5r2['lineNumber'] = satzo['lineNumber'], w5r2['columnNumber'] = satzo['columnNumber'], w5r2;
}function zobtdk(_r58b2, yktzd, r_5w, h4g19, rk8_, _5b8r2) {
  for (var _bk58, edtyz, i3nl7 = ++yktzd, _ur2 = zbtkoy;;) {
    var l6nf4v = _r58b2['charAt'](i3nl7);switch (l6nf4v) {case '=':
        if (_ur2 === zdyokbt) _bk58 = _r58b2['slice'](yktzd, i3nl7), _ur2 = zw5_2;else {
          if (_ur2 !== zlni7vm) throw new Error('attribute equal must after attrName');_ur2 = zw5_2;
        }break;case '\x27':case '\x22':
        if (_ur2 === zw5_2 || _ur2 === zdyokbt) {
          if (_ur2 === zdyokbt && (_5b8r2['warning']('attribute value must after "="'), _bk58 = _r58b2['slice'](yktzd, i3nl7)), yktzd = i3nl7 + 0x1, i3nl7 = _r58b2['indexOf'](l6nf4v, yktzd), !(i3nl7 > 0x0)) throw new Error('attribute value no end \'' + l6nf4v + '\' match');edtyz = _r58b2['slice'](yktzd, i3nl7)['replace'](/&#?\w+;/g, rk8_), r_5w['add'](_bk58, edtyz, yktzd - 0x1), _ur2 = zykoz;
        } else {
          if (_ur2 != zr2w5_u) throw new Error('attribute value must after "="');edtyz = _r58b2['slice'](yktzd, i3nl7)['replace'](/&#?\w+;/g, rk8_), r_5w['add'](_bk58, edtyz, yktzd), _5b8r2['warning']('attribute "' + _bk58 + '" missed start quot(' + l6nf4v + ')!!'), yktzd = i3nl7 + 0x1, _ur2 = zykoz;
        }break;case '/':
        switch (_ur2) {case zbtkoy:
            r_5w['setTagName'](_r58b2['slice'](yktzd, i3nl7));case zykoz:case zeas9xz:case zybdtok:
            _ur2 = zybdtok, r_5w['closed'] = !0x0;case zr2w5_u:case zdyokbt:case zlni7vm:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _5b8r2['error']('unexpected end of input'), _ur2 == zbtkoy && r_5w['setTagName'](_r58b2['slice'](yktzd, i3nl7)), i3nl7;case '>':
        switch (_ur2) {case zbtkoy:
            r_5w['setTagName'](_r58b2['slice'](yktzd, i3nl7));case zykoz:case zeas9xz:case zybdtok:
            break;case zr2w5_u:case zdyokbt:
            edtyz = _r58b2['slice'](yktzd, i3nl7), '/' === edtyz['slice'](-0x1) && (r_5w['closed'] = !0x0, edtyz = edtyz['slice'](0x0, -0x1));case zlni7vm:
            _ur2 === zlni7vm && (edtyz = _bk58), _ur2 == zr2w5_u ? (_5b8r2['warning']('attribute "' + edtyz + '" missed quot(")!!'), r_5w['add'](_bk58, edtyz['replace'](/&#?\w+;/g, rk8_), yktzd)) : ('http://www.w3.org/1999/xhtml' === h4g19[''] && edtyz['match'](/^(?:disabled|checked|selected)$/i) || _5b8r2['warning']('attribute "' + edtyz + '" missed value!! "' + edtyz + '" instead!!'), r_5w['add'](edtyz, edtyz, yktzd));break;case zw5_2:
            throw new Error('attribute value missed!!');}return i3nl7;case '\u0080':
        l6nf4v = '\x20';default:
        if ('\x20' >= l6nf4v) switch (_ur2) {case zbtkoy:
            r_5w['setTagName'](_r58b2['slice'](yktzd, i3nl7)), _ur2 = zeas9xz;break;case zdyokbt:
            _bk58 = _r58b2['slice'](yktzd, i3nl7), _ur2 = zlni7vm;break;case zr2w5_u:
            var edtyz = _r58b2['slice'](yktzd, i3nl7)['replace'](/&#?\w+;/g, rk8_);_5b8r2['warning']('attribute "' + edtyz + '" missed quot(")!!'), r_5w['add'](_bk58, edtyz, yktzd);case zykoz:
            _ur2 = zeas9xz;} else switch (_ur2) {case zlni7vm:
            {
              r_5w['tagName'];
            }'http://www.w3.org/1999/xhtml' === h4g19[''] && _bk58['match'](/^(?:disabled|checked|selected)$/i) || _5b8r2['warning']('attribute "' + _bk58 + '" missed value!! "' + _bk58 + '" instead2!!'), r_5w['add'](_bk58, _bk58, yktzd), yktzd = i3nl7, _ur2 = zdyokbt;break;case zykoz:
            _5b8r2['warning']('attribute space is required"' + _bk58 + '\x22!!');case zeas9xz:
            _ur2 = zdyokbt, yktzd = i3nl7;break;case zw5_2:
            _ur2 = zr2w5_u, yktzd = i3nl7;break;case zybdtok:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i3nl7++;
  }
}function zg4h61p(u_wr25, ykzt, zxse9a) {
  for (var _ru25 = u_wr25['tagName'], gpx9h1 = null, g4h1 = u_wr25['length']; g4h1--;) {
    var vfnl7 = u_wr25[g4h1],
        vfln67 = vfnl7['qName'],
        bykdt = vfnl7['value'],
        kdo8yb = vfln67['indexOf'](':');if (kdo8yb > 0x0) var x1ae = vfnl7['prefix'] = vfln67['slice'](0x0, kdo8yb),
        _825r = vfln67['slice'](kdo8yb + 0x1),
        vl4f = 'xmlns' === x1ae && _825r;else _825r = vfln67, x1ae = null, vl4f = 'xmlns' === vfln67 && '';vfnl7['localName'] = _825r, vl4f !== !0x1 && (null == gpx9h1 && (gpx9h1 = {}, zazest(zxse9a, zxse9a = {})), zxse9a[vl4f] = gpx9h1[vl4f] = bykdt, vfnl7['uri'] = 'http://www.w3.org/2000/xmlns/', ykzt['startPrefixMapping'](vl4f, bykdt));
  }for (var g4h1 = u_wr25['length']; g4h1--;) {
    vfnl7 = u_wr25[g4h1];var x1ae = vfnl7['prefix'];x1ae && ('xml' === x1ae && (vfnl7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== x1ae && (vfnl7['uri'] = zxse9a[x1ae || '']));
  }var kdo8yb = _ru25['indexOf'](':');kdo8yb > 0x0 ? (x1ae = u_wr25['prefix'] = _ru25['slice'](0x0, kdo8yb), _825r = u_wr25['localName'] = _ru25['slice'](kdo8yb + 0x1)) : (x1ae = null, _825r = u_wr25['localName'] = _ru25);var vlin = u_wr25['uri'] = zxse9a[x1ae || ''];if (ykzt['startElement'](vlin, _825r, _ru25, u_wr25), !u_wr25['closed']) return u_wr25['currentNSMap'] = zxse9a, u_wr25['localNSMap'] = gpx9h1, !0x0;if (ykzt['endElement'](vlin, _825r, _ru25), gpx9h1) {
    for (x1ae in gpx9h1) ykzt['endPrefixMapping'](x1ae);
  }
}function zostaez(h1x9, u2w5_r, pg4vf6, ni7lf, odzat) {
  if (/^(?:script|textarea)$/i['test'](pg4vf6)) {
    var dr8bk = h1x9['indexOf']('</' + pg4vf6 + '>', u2w5_r),
        u_r285 = h1x9['substring'](u2w5_r + 0x1, dr8bk);if (/[&<]/['test'](u_r285)) return (/^script$/i['test'](pg4vf6) ? (odzat['characters'](u_r285, 0x0, u_r285['length']), dr8bk) : (u_r285 = u_r285['replace'](/&#?\w+;/g, ni7lf), odzat['characters'](u_r285, 0x0, u_r285['length']), dr8bk)
    );
  }return u2w5_r + 0x1;
}function zl7m3n(_u205, bkodyt, k8ody, _yr8bk) {
  var s19ahx = _yr8bk[k8ody];return null == s19ahx && (s19ahx = _u205['lastIndexOf']('</' + k8ody + '>'), bkodyt > s19ahx && (s19ahx = _u205['lastIndexOf']('</' + k8ody)), _yr8bk[k8ody] = s19ahx), bkodyt > s19ahx;
}function zazest(zeaotd, vgl4f) {
  for (var bdrk8 in zeaotd) vgl4f[bdrk8] = zeaotd[bdrk8];
}function znl7vi(ivf7l, tdzko, rb2_5, b5rk_8) {
  var rydbk = ivf7l['charAt'](tdzko + 0x2);switch (rydbk) {case '-':
      if ('-' === ivf7l['charAt'](tdzko + 0x3)) {
        var zde = ivf7l['indexOf']('-->', tdzko + 0x4);return zde > tdzko ? (rb2_5['comment'](ivf7l, tdzko + 0x4, zde - tdzko - 0x4), zde + 0x3) : (b5rk_8['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ivf7l['substr'](tdzko + 0x3, 0x6)) {
        var zde = ivf7l['indexOf'](']]>', tdzko + 0x9);return rb2_5['startCDATA'](), rb2_5['characters'](ivf7l, tdzko + 0x9, zde - tdzko - 0x9), rb2_5['endCDATA'](), zde + 0x3;
      }var r8k_yb = zl4vf6g(ivf7l, tdzko),
          b582_ = r8k_yb['length'];if (b582_ > 0x1 && /!doctype/i['test'](r8k_yb[0x0][0x0])) {
        var g14hp6 = r8k_yb[0x1][0x0],
            exzs9 = b582_ > 0x3 && /^public$/i['test'](r8k_yb[0x2][0x0]) && r8k_yb[0x3][0x0],
            n6fl = b582_ > 0x4 && r8k_yb[0x4][0x0],
            staz = r8k_yb[b582_ - 0x1];return rb2_5['startDTD'](g14hp6, exzs9 && exzs9['replace'](/^(['"])(.*?)\1$/, '$2'), n6fl && n6fl['replace'](/^(['"])(.*?)\1$/, '$2')), rb2_5['endDTD'](), staz['index'] + staz[0x0]['length'];
      }}return -0x1;
}function zkdzyt(etdza, aex19s, k_b58r) {
  var seaxtz = etdza['indexOf']('?>', aex19s);if (seaxtz) {
    var nl4 = etdza['substring'](aex19s, seaxtz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nl4) {
      {
        nl4[0x0]['length'];
      }return k_b58r['processingInstruction'](nl4[0x1], nl4[0x2]), seaxtz + 0x2;
    }return -0x1;
  }return -0x1;
}function ztadzoe() {}function zijq(sa1h9, aztes) {
  return sa1h9['__proto__'] = aztes, sa1h9;
}function zl4vf6g(vnf7l6, zsaxte) {
  var oaze,
      x1psh9 = [],
      oadtze = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oadtze['lastIndex'] = zsaxte, oadtze['exec'](vnf7l6); oaze = oadtze['exec'](vnf7l6);) if (x1psh9['push'](oaze), oaze[0x1]) return x1psh9;
}var zxs1h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zxeasz9 = new RegExp('[\\-\\.0-9' + zxs1h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zvn46l = new RegExp('^' + zxs1h['source'] + zxeasz9['source'] + '*(?::' + zxs1h['source'] + zxeasz9['source'] + '*)?$'),
    zbtkoy = 0x0,
    zdyokbt = 0x1,
    zlni7vm = 0x2,
    zw5_2 = 0x3,
    zr2w5_u = 0x4,
    zykoz = 0x5,
    zeas9xz = 0x6,
    zybdtok = 0x7;zw2_50u['prototype'] = { 'parse': function (pxg1h, rw_25, mqi3n) {
    var xsh91p = this['domBuilder'];xsh91p['startDocument'](), zazest(rw_25, rw_25 = {}), zxah9s(pxg1h, rw_25, mqi3n, xsh91p, this['errorHandler']), xsh91p['endDocument']();
  } }, ztadzoe['prototype'] = { 'setTagName': function (x19ah) {
    if (!zvn46l['test'](x19ah)) throw new Error('invalid tagName:' + x19ah);this['tagName'] = x19ah;
  }, 'add': function (fl4v6, ydzotk, g6pfv4) {
    if (!zvn46l['test'](fl4v6)) throw new Error('invalid attribute:' + fl4v6);this[this['length']++] = { 'qName': fl4v6, 'value': ydzotk, 'offset': g6pfv4 };
  }, 'length': 0x0, 'getLocalName': function (ivm7) {
    return this[ivm7]['localName'];
  }, 'getLocator': function (pxhs) {
    return this[pxhs]['locator'];
  }, 'getQName': function (gp41h9) {
    return this[gp41h9]['qName'];
  }, 'getURI': function (vm7nil) {
    return this[vm7nil]['uri'];
  }, 'getValue': function (q$mi3) {
    return this[q$mi3]['value'];
  } }, zijq({}, zijq['prototype']) instanceof zijq || (zijq = function (nvl7if, qin3) {
  function h1ax9() {}h1ax9['prototype'] = qin3, h1ax9 = new h1ax9();for (qin3 in nvl7if) h1ax9[qin3] = nvl7if[qin3];return h1ax9;
}), exports['XMLReader'] = zw2_50u;