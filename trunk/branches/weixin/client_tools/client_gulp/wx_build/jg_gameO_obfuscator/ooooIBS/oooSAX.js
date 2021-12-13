var c = wx.$o;
function o_rmtc5p() {}function o_yv3un(wi9f12, mst75q, fg9o4x, nlau3, rmqp5) {
  function unk_ye(k_y$0e) {
    if (k_y$0e > 0xffff) {
      k_y$0e -= 0x10000;var sr5mqt = 0xd800 + (k_y$0e >> 0xa),
          pmt5cr = 0xdc00 + (0x3ff & k_y$0e);return String['fromCharCode'](sr5mqt, pmt5cr);
    }return String['fromCharCode'](k_y$0e);
  }function gxh(_uye0) {
    var i62 = _uye0['slice'](0x1, -0x1);return i62 in fg9o4x ? fg9o4x[i62] : '#' === i62['charAt'](0x0) ? unk_ye(parseInt(i62['substr'](0x1)['replace']('x', '0x'))) : (rmqp5['error']('entity not found:' + _uye0), _uye0);
  }function i21d6(id2wf1) {
    if (id2wf1 > _uv3ny) {
      var w2id1 = wi9f12['substring'](_uv3ny, id2wf1)['replace'](/&#?\w+;/g, gxh);a62idl && p5mrc(_uv3ny), nlau3['characters'](w2id1, 0x0, id2wf1 - _uv3ny), _uv3ny = id2wf1;
    }
  }function p5mrc(zbhog4, zrpc8h) {
    for (; zbhog4 >= mrqst5 && (zrpc8h = vun['exec'](wi9f12));) alvn36 = zrpc8h['index'], mrqst5 = alvn36 + zrpc8h[0x0]['length'], a62idl['lineNumber']++;a62idl['columnNumber'] = zbhog4 - alvn36 + 0x1;
  }for (var alvn36 = 0x0, mrqst5 = 0x0, vun = /.*(?:\r\n?|\n)|.*$/g, a62idl = nlau3['locator'], f94xog = [{ 'currentNSMap': mst75q }], la3vnu = {}, _uv3ny = 0x0;;) {
    try {
      var cprm8z = wi9f12['indexOf']('<', _uv3ny);if (0x0 > cprm8z) {
        if (!wi9f12['substr'](_uv3ny)['match'](/^\s*$/)) {
          var uy_nv3 = nlau3['doc'],
              bgz8ho = uy_nv3['createTextNode'](wi9f12['substr'](_uv3ny));uy_nv3['appendChild'](bgz8ho), nlau3['currentElement'] = bgz8ho;
        }return;
      }switch (cprm8z > _uv3ny && i21d6(cprm8z), wi9f12['charAt'](cprm8z + 0x1)) {case '/':
          var boc8zh = wi9f12['indexOf']('>', cprm8z + 0x3),
              $_k0 = wi9f12['substring'](cprm8z + 0x2, boc8zh),
              gboh4z = f94xog['pop']();0x0 > boc8zh ? ($_k0 = wi9f12['substring'](cprm8z + 0x2)['replace'](/[\s<].*/, ''), rmqp5['error']('end tag name: ' + $_k0 + ' is not complete:' + gboh4z['tagName']), boc8zh = cprm8z + 0x1 + $_k0['length']) : $_k0['match'](/\s</) && ($_k0 = $_k0['replace'](/[\s<].*/, ''), rmqp5['error']('end tag name: ' + $_k0 + ' maybe not complete'), boc8zh = cprm8z + 0x1 + $_k0['length']);var p8 = gboh4z['localNSMap'],
              $k_e0 = gboh4z['tagName'] == $_k0,
              g4hbx = $k_e0 || gboh4z['tagName'] && gboh4z['tagName']['toLowerCase']() == $_k0['toLowerCase']();if (g4hbx) {
            if (nlau3['endElement'](gboh4z['uri'], gboh4z['localName'], $_k0), p8) {
              for (var k_y0u in p8) nlau3['endPrefixMapping'](k_y0u);
            }$k_e0 || rmqp5['fatalError']('end tag name: ' + $_k0 + ' is not match the current start tagName:' + gboh4z['tagName']);
          } else f94xog['push'](gboh4z);boc8zh++;break;case '?':
          a62idl && p5mrc(cprm8z), boc8zh = o_ogbhz4(wi9f12, cprm8z, nlau3);break;case '!':
          a62idl && p5mrc(cprm8z), boc8zh = o_$_0e(wi9f12, cprm8z, nlau3, rmqp5);break;default:
          a62idl && p5mrc(cprm8z);var nal63 = new o_q5t7s(),
              v3an = f94xog[f94xog['length'] - 0x1]['currentNSMap'],
              boc8zh = o_keyu0(wi9f12, cprm8z, nal63, v3an, gxh, rmqp5),
              u_y0ke = nal63['length'];if (!nal63['closed'] && o_zhc8rp(wi9f12, boc8zh, nal63['tagName'], la3vnu) && (nal63['closed'] = !0x0, fg9o4x['nbsp'] || rmqp5['warning']('unclosed xml attribute')), a62idl && u_y0ke) {
            for (var zbhg8o = o_xg49(a62idl, {}), bhzc8p = 0x0; u_y0ke > bhzc8p; bhzc8p++) {
              var dval = nal63[bhzc8p];p5mrc(dval['offset']), dval['locator'] = o_xg49(a62idl, {});
            }nlau3['locator'] = zbhg8o, o_z8pcbh(nal63, nlau3, v3an) && f94xog['push'](nal63), nlau3['locator'] = a62idl;
          } else o_z8pcbh(nal63, nlau3, v3an) && f94xog['push'](nal63);'http://www.w3.org/1999/xhtml' !== nal63['uri'] || nal63['closed'] ? boc8zh++ : boc8zh = o_vn_l3u(wi9f12, boc8zh, nal63['tagName'], gxh, nlau3);}
    } catch (_ky$0) {
      rmqp5['error']('element parse error: ' + _ky$0), boc8zh = -0x1;
    }boc8zh > _uv3ny ? _uv3ny = boc8zh : i21d6(Math['max'](cprm8z, _uv3ny) + 0x1);
  }
}function o_xg49(d6la3, keyj0) {
  return keyj0['lineNumber'] = d6la3['lineNumber'], keyj0['columnNumber'] = d6la3['columnNumber'], keyj0;
}function o_keyu0(zhc8pb, fd21wi, n6vl3, lad2, pchz8b, e_$yk) {
  for (var vuny3_, ghzob, pcm85 = ++fd21wi, sqt7m = o_ohczb;;) {
    var lavn = zhc8pb['charAt'](pcm85);switch (lavn) {case '=':
        if (sqt7m === o_w1fi2) vuny3_ = zhc8pb['slice'](fd21wi, pcm85), sqt7m = o_ld6a2;else {
          if (sqt7m !== o_qtrp5) throw new Error('attribute equal must after attrName');sqt7m = o_ld6a2;
        }break;case '\x27':case '\x22':
        if (sqt7m === o_ld6a2 || sqt7m === o_w1fi2) {
          if (sqt7m === o_w1fi2 && (e_$yk['warning']('attribute value must after "="'), vuny3_ = zhc8pb['slice'](fd21wi, pcm85)), fd21wi = pcm85 + 0x1, pcm85 = zhc8pb['indexOf'](lavn, fd21wi), !(pcm85 > 0x0)) throw new Error('attribute value no end \'' + lavn + '\' match');ghzob = zhc8pb['slice'](fd21wi, pcm85)['replace'](/&#?\w+;/g, pchz8b), n6vl3['add'](vuny3_, ghzob, fd21wi - 0x1), sqt7m = o_v3dal;
        } else {
          if (sqt7m != o_rcpz8m) throw new Error('attribute value must after "="');ghzob = zhc8pb['slice'](fd21wi, pcm85)['replace'](/&#?\w+;/g, pchz8b), n6vl3['add'](vuny3_, ghzob, fd21wi), e_$yk['warning']('attribute "' + vuny3_ + '" missed start quot(' + lavn + ')!!'), fd21wi = pcm85 + 0x1, sqt7m = o_v3dal;
        }break;case '/':
        switch (sqt7m) {case o_ohczb:
            n6vl3['setTagName'](zhc8pb['slice'](fd21wi, pcm85));case o_v3dal:case o_vy3nu_:case o_u_nkey:
            sqt7m = o_u_nkey, n6vl3['closed'] = !0x0;case o_rcpz8m:case o_w1fi2:case o_qtrp5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return e_$yk['error']('unexpected end of input'), sqt7m == o_ohczb && n6vl3['setTagName'](zhc8pb['slice'](fd21wi, pcm85)), pcm85;case '>':
        switch (sqt7m) {case o_ohczb:
            n6vl3['setTagName'](zhc8pb['slice'](fd21wi, pcm85));case o_v3dal:case o_vy3nu_:case o_u_nkey:
            break;case o_rcpz8m:case o_w1fi2:
            ghzob = zhc8pb['slice'](fd21wi, pcm85), '/' === ghzob['slice'](-0x1) && (n6vl3['closed'] = !0x0, ghzob = ghzob['slice'](0x0, -0x1));case o_qtrp5:
            sqt7m === o_qtrp5 && (ghzob = vuny3_), sqt7m == o_rcpz8m ? (e_$yk['warning']('attribute "' + ghzob + '" missed quot(")!!'), n6vl3['add'](vuny3_, ghzob['replace'](/&#?\w+;/g, pchz8b), fd21wi)) : ('http://www.w3.org/1999/xhtml' === lad2[''] && ghzob['match'](/^(?:disabled|checked|selected)$/i) || e_$yk['warning']('attribute "' + ghzob + '" missed value!! "' + ghzob + '" instead!!'), n6vl3['add'](ghzob, ghzob, fd21wi));break;case o_ld6a2:
            throw new Error('attribute value missed!!');}return pcm85;case '\u0080':
        lavn = '\x20';default:
        if ('\x20' >= lavn) switch (sqt7m) {case o_ohczb:
            n6vl3['setTagName'](zhc8pb['slice'](fd21wi, pcm85)), sqt7m = o_vy3nu_;break;case o_w1fi2:
            vuny3_ = zhc8pb['slice'](fd21wi, pcm85), sqt7m = o_qtrp5;break;case o_rcpz8m:
            var ghzob = zhc8pb['slice'](fd21wi, pcm85)['replace'](/&#?\w+;/g, pchz8b);e_$yk['warning']('attribute "' + ghzob + '" missed quot(")!!'), n6vl3['add'](vuny3_, ghzob, fd21wi);case o_v3dal:
            sqt7m = o_vy3nu_;} else switch (sqt7m) {case o_qtrp5:
            {
              n6vl3['tagName'];
            }'http://www.w3.org/1999/xhtml' === lad2[''] && vuny3_['match'](/^(?:disabled|checked|selected)$/i) || e_$yk['warning']('attribute "' + vuny3_ + '" missed value!! "' + vuny3_ + '" instead2!!'), n6vl3['add'](vuny3_, vuny3_, fd21wi), fd21wi = pcm85, sqt7m = o_w1fi2;break;case o_v3dal:
            e_$yk['warning']('attribute space is required"' + vuny3_ + '\x22!!');case o_vy3nu_:
            sqt7m = o_w1fi2, fd21wi = pcm85;break;case o_ld6a2:
            sqt7m = o_rcpz8m, fd21wi = pcm85;break;case o_u_nkey:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}pcm85++;
  }
}function o_z8pcbh(u_ykn, x1f9, k0yje$) {
  for (var uvn3_ = u_ykn['tagName'], qpm5tr = null, boh = u_ykn['length']; boh--;) {
    var l3anv = u_ykn[boh],
        i6l2ad = l3anv['qName'],
        mtp5rc = l3anv['value'],
        unk_ = i6l2ad['indexOf'](':');if (unk_ > 0x0) var wg9x4 = l3anv['prefix'] = i6l2ad['slice'](0x0, unk_),
        n3uvl_ = i6l2ad['slice'](unk_ + 0x1),
        dw6i2 = 'xmlns' === wg9x4 && n3uvl_;else n3uvl_ = i6l2ad, wg9x4 = null, dw6i2 = 'xmlns' === i6l2ad && '';l3anv['localName'] = n3uvl_, dw6i2 !== !0x1 && (null == qpm5tr && (qpm5tr = {}, o_lad26v(k0yje$, k0yje$ = {})), k0yje$[dw6i2] = qpm5tr[dw6i2] = mtp5rc, l3anv['uri'] = 'http://www.w3.org/2000/xmlns/', x1f9['startPrefixMapping'](dw6i2, mtp5rc));
  }for (var boh = u_ykn['length']; boh--;) {
    l3anv = u_ykn[boh];var wg9x4 = l3anv['prefix'];wg9x4 && ('xml' === wg9x4 && (l3anv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wg9x4 && (l3anv['uri'] = k0yje$[wg9x4 || '']));
  }var unk_ = uvn3_['indexOf'](':');unk_ > 0x0 ? (wg9x4 = u_ykn['prefix'] = uvn3_['slice'](0x0, unk_), n3uvl_ = u_ykn['localName'] = uvn3_['slice'](unk_ + 0x1)) : (wg9x4 = null, n3uvl_ = u_ykn['localName'] = uvn3_);var x4fo9g = u_ykn['uri'] = k0yje$[wg9x4 || ''];if (x1f9['startElement'](x4fo9g, n3uvl_, uvn3_, u_ykn), !u_ykn['closed']) return u_ykn['currentNSMap'] = k0yje$, u_ykn['localNSMap'] = qpm5tr, !0x0;if (x1f9['endElement'](x4fo9g, n3uvl_, uvn3_), qpm5tr) {
    for (wg9x4 in qpm5tr) x1f9['endPrefixMapping'](wg9x4);
  }
}function o_vn_l3u(un3_e, m5tcp, nek_, ldai6, ey$kj0) {
  if (/^(?:script|textarea)$/i['test'](nek_)) {
    var pcmrz = un3_e['indexOf']('</' + nek_ + '>', m5tcp),
        yn3_vu = un3_e['substring'](m5tcp + 0x1, pcmrz);if (/[&<]/['test'](yn3_vu)) return (/^script$/i['test'](nek_) ? (ey$kj0['characters'](yn3_vu, 0x0, yn3_vu['length']), pcmrz) : (yn3_vu = yn3_vu['replace'](/&#?\w+;/g, ldai6), ey$kj0['characters'](yn3_vu, 0x0, yn3_vu['length']), pcmrz)
    );
  }return m5tcp + 0x1;
}function o_zhc8rp(rt5qs, t75sm, zg8, y0ue_) {
  var i26w1 = y0ue_[zg8];return null == i26w1 && (i26w1 = rt5qs['lastIndexOf']('</' + zg8 + '>'), t75sm > i26w1 && (i26w1 = rt5qs['lastIndexOf']('</' + zg8)), y0ue_[zg8] = i26w1), t75sm > i26w1;
}function o_lad26v(en_3y, m5rptq) {
  for (var u3al in en_3y) m5rptq[u3al] = en_3y[u3al];
}function o_$_0e(vnu3_y, nek_uy, dwi16, goz8h) {
  var ue_ny = vnu3_y['charAt'](nek_uy + 0x2);switch (ue_ny) {case '-':
      if ('-' === vnu3_y['charAt'](nek_uy + 0x3)) {
        var ho4bx = vnu3_y['indexOf']('-->', nek_uy + 0x4);return ho4bx > nek_uy ? (dwi16['comment'](vnu3_y, nek_uy + 0x4, ho4bx - nek_uy - 0x4), ho4bx + 0x3) : (goz8h['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == vnu3_y['substr'](nek_uy + 0x3, 0x6)) {
        var ho4bx = vnu3_y['indexOf'](']]>', nek_uy + 0x9);return dwi16['startCDATA'](), dwi16['characters'](vnu3_y, nek_uy + 0x9, ho4bx - nek_uy - 0x9), dwi16['endCDATA'](), ho4bx + 0x3;
      }var hz8cb = o_mzp(vnu3_y, nek_uy),
          neu_y3 = hz8cb['length'];if (neu_y3 > 0x1 && /!doctype/i['test'](hz8cb[0x0][0x0])) {
        var dfiw21 = hz8cb[0x1][0x0],
            oxg49b = neu_y3 > 0x3 && /^public$/i['test'](hz8cb[0x2][0x0]) && hz8cb[0x3][0x0],
            gxf49w = neu_y3 > 0x4 && hz8cb[0x4][0x0],
            wf49gx = hz8cb[neu_y3 - 0x1];return dwi16['startDTD'](dfiw21, oxg49b && oxg49b['replace'](/^(['"])(.*?)\1$/, '$2'), gxf49w && gxf49w['replace'](/^(['"])(.*?)\1$/, '$2')), dwi16['endDTD'](), wf49gx['index'] + wf49gx[0x0]['length'];
      }}return -0x1;
}function o_ogbhz4(eu0_k, a3vnl, og4h) {
  var iw19x = eu0_k['indexOf']('?>', a3vnl);if (iw19x) {
    var a3vn6l = eu0_k['substring'](a3vnl, iw19x)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (a3vn6l) {
      {
        a3vn6l[0x0]['length'];
      }return og4h['processingInstruction'](a3vn6l[0x1], a3vn6l[0x2]), iw19x + 0x2;
    }return -0x1;
  }return -0x1;
}function o_q5t7s() {}function o_mpr8(eyu0k, h4zg) {
  return eyu0k['__proto__'] = h4zg, eyu0k;
}function o_mzp(msrq5t, oh8zbc) {
  var x4wfg,
      xwg49f = [],
      ai61 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ai61['lastIndex'] = oh8zbc, ai61['exec'](msrq5t); x4wfg = ai61['exec'](msrq5t);) if (xwg49f['push'](x4wfg), x4wfg[0x1]) return xwg49f;
}var o_zh4o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_mp8c5 = new RegExp('[\\-\\.0-9' + o_zh4o['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_g4bohx = new RegExp('^' + o_zh4o['source'] + o_mp8c5['source'] + '*(?::' + o_zh4o['source'] + o_mp8c5['source'] + '*)?$'),
    o_ohczb = 0x0,
    o_w1fi2 = 0x1,
    o_qtrp5 = 0x2,
    o_ld6a2 = 0x3,
    o_rcpz8m = 0x4,
    o_v3dal = 0x5,
    o_vy3nu_ = 0x6,
    o_u_nkey = 0x7;o_rmtc5p['prototype'] = { 'parse': function (vu3lan, b8gh, gw49xf) {
    var gho4 = this['domBuilder'];gho4['startDocument'](), o_lad26v(b8gh, b8gh = {}), o_yv3un(vu3lan, b8gh, gw49xf, gho4, this['errorHandler']), gho4['endDocument']();
  } }, o_q5t7s['prototype'] = { 'setTagName': function (y_e0k) {
    if (!o_g4bohx['test'](y_e0k)) throw new Error('invalid tagName:' + y_e0k);this['tagName'] = y_e0k;
  }, 'add': function (ky$j, u_yvn, bpzhc) {
    if (!o_g4bohx['test'](ky$j)) throw new Error('invalid attribute:' + ky$j);this[this['length']++] = { 'qName': ky$j, 'value': u_yvn, 'offset': bpzhc };
  }, 'length': 0x0, 'getLocalName': function (l26ad) {
    return this[l26ad]['localName'];
  }, 'getLocator': function (x9gbo) {
    return this[x9gbo]['locator'];
  }, 'getQName': function (xf49go) {
    return this[xf49go]['qName'];
  }, 'getURI': function (val3u) {
    return this[val3u]['uri'];
  }, 'getValue': function (lvad62) {
    return this[lvad62]['value'];
  } }, o_mpr8({}, o_mpr8['prototype']) instanceof o_mpr8 || (o_mpr8 = function (ykenu, t5rsqm) {
  function van3() {}van3['prototype'] = t5rsqm, van3 = new van3();for (t5rsqm in ykenu) van3[t5rsqm] = ykenu[t5rsqm];return van3;
}), exports['XMLReader'] = o_rmtc5p;