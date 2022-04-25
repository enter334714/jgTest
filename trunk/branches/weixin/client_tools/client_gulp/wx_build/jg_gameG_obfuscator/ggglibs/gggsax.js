var m = wx.$g;
function gg7cvq() {}function gz6r2o(t4d3f, ykh1, q7sgc, rz2do6, cvq) {
  function o3d42z(pabi05) {
    if (pabi05 > 0xffff) {
      pabi05 -= 0x10000;var t_034 = 0xd800 + (pabi05 >> 0xa),
          wqv7e = 0xdc00 + (0x3ff & pabi05);return String['fromCharCode'](t_034, wqv7e);
    }return String['fromCharCode'](pabi05);
  }function sql8c(wha1x) {
    var f_340t = wha1x['slice'](0x1, -0x1);return f_340t in q7sgc ? q7sgc[f_340t] : '#' === f_340t['charAt'](0x0) ? o3d42z(parseInt(f_340t['substr'](0x1)['replace']('x', '0x'))) : (cvq['error']('entity not found:' + wha1x), wha1x);
  }function ix1hk(cs8l9) {
    if (cs8l9 > v7geqy) {
      var ai5pb = t4d3f['substring'](v7geqy, cs8l9)['replace'](/&#?\w+;/g, sql8c);o4tfd3 && p5f0_b(v7geqy), rz2do6['characters'](ai5pb, 0x0, cs8l9 - v7geqy), v7geqy = cs8l9;
    }
  }function p5f0_b($26ju, r$6ju) {
    for (; $26ju >= khaxw1 && (r$6ju = xki1a['exec'](t4d3f));) evg7c = r$6ju['index'], khaxw1 = evg7c + r$6ju[0x0]['length'], o4tfd3['lineNumber']++;o4tfd3['columnNumber'] = $26ju - evg7c + 0x1;
  }for (var evg7c = 0x0, khaxw1 = 0x0, xki1a = /.*(?:\r\n?|\n)|.*$/g, o4tfd3 = rz2do6['locator'], qs8gl = [{ 'currentNSMap': ykh1 }], t0p4f_ = {}, v7geqy = 0x0;;) {
    try {
      var p0_5i = t4d3f['indexOf']('<', v7geqy);if (0x0 > p0_5i) {
        if (!t4d3f['substr'](v7geqy)['match'](/^\s*$/)) {
          var zot43 = rz2do6['doc'],
              p4_ft = zot43['createTextNode'](t4d3f['substr'](v7geqy));zot43['appendChild'](p4_ft), rz2do6['currentElement'] = p4_ft;
        }return;
      }switch (p0_5i > v7geqy && ix1hk(p0_5i), t4d3f['charAt'](p0_5i + 0x1)) {case '/':
          var u2$j6 = t4d3f['indexOf']('>', p0_5i + 0x3),
              dtzo4 = t4d3f['substring'](p0_5i + 0x2, u2$j6),
              lcg8qs = qs8gl['pop']();0x0 > u2$j6 ? (dtzo4 = t4d3f['substring'](p0_5i + 0x2)['replace'](/[\s<].*/, ''), cvq['error']('end tag name: ' + dtzo4 + ' is not complete:' + lcg8qs['tagName']), u2$j6 = p0_5i + 0x1 + dtzo4['length']) : dtzo4['match'](/\s</) && (dtzo4 = dtzo4['replace'](/[\s<].*/, ''), cvq['error']('end tag name: ' + dtzo4 + ' maybe not complete'), u2$j6 = p0_5i + 0x1 + dtzo4['length']);var pt_fb = lcg8qs['localNSMap'],
              drz2j6 = lcg8qs['tagName'] == dtzo4,
              gcsl9 = drz2j6 || lcg8qs['tagName'] && lcg8qs['tagName']['toLowerCase']() == dtzo4['toLowerCase']();if (gcsl9) {
            if (rz2do6['endElement'](lcg8qs['uri'], lcg8qs['localName'], dtzo4), pt_fb) {
              for (var g8slc in pt_fb) rz2do6['endPrefixMapping'](g8slc);
            }drz2j6 || cvq['fatalError']('end tag name: ' + dtzo4 + ' is not match the current start tagName:' + lcg8qs['tagName']);
          } else qs8gl['push'](lcg8qs);u2$j6++;break;case '?':
          o4tfd3 && p5f0_b(p0_5i), u2$j6 = go6d2r(t4d3f, p0_5i, rz2do6);break;case '!':
          o4tfd3 && p5f0_b(p0_5i), u2$j6 = geg7yq(t4d3f, p0_5i, rz2do6, cvq);break;default:
          o4tfd3 && p5f0_b(p0_5i);var do26r = new ghiax15(),
              of_t = qs8gl[qs8gl['length'] - 0x1]['currentNSMap'],
              u2$j6 = glc89g(t4d3f, p0_5i, do26r, of_t, sql8c, cvq),
              ywke1v = do26r['length'];if (!do26r['closed'] && gur62(t4d3f, u2$j6, do26r['tagName'], t0p4f_) && (do26r['closed'] = !0x0, q7sgc['nbsp'] || cvq['warning']('unclosed xml attribute')), o4tfd3 && ywke1v) {
            for (var r2z6$ = gh5xbi(o4tfd3, {}), pbxai5 = 0x0; ywke1v > pbxai5; pbxai5++) {
              var zd362o = do26r[pbxai5];p5f0_b(zd362o['offset']), zd362o['locator'] = gh5xbi(o4tfd3, {});
            }rz2do6['locator'] = r2z6$, gbpi50_(do26r, rz2do6, of_t) && qs8gl['push'](do26r), rz2do6['locator'] = o4tfd3;
          } else gbpi50_(do26r, rz2do6, of_t) && qs8gl['push'](do26r);'http://www.w3.org/1999/xhtml' !== do26r['uri'] || do26r['closed'] ? u2$j6++ : u2$j6 = gt_p0f(t4d3f, u2$j6, do26r['tagName'], sql8c, rz2do6);}
    } catch (wyh1ek) {
      cvq['error']('element parse error: ' + wyh1ek), u2$j6 = -0x1;
    }u2$j6 > v7geqy ? v7geqy = u2$j6 : ix1hk(Math['max'](p0_5i, v7geqy) + 0x1);
  }
}function gh5xbi(wk1yhx, s8g9) {
  return s8g9['lineNumber'] = wk1yhx['lineNumber'], s8g9['columnNumber'] = wk1yhx['columnNumber'], s8g9;
}function glc89g(z2o63, t34fo_, hkwe1, oz243, a5hbi, yw7eq) {
  for (var xaib5, dozt3, apb0 = ++t34fo_, ftb0p = gekvy7;;) {
    var whxy1 = z2o63['charAt'](apb0);switch (whxy1) {case '=':
        if (ftb0p === gkhwye1) xaib5 = z2o63['slice'](t34fo_, apb0), ftb0p = gzo2r6;else {
          if (ftb0p !== gptb0f_) throw new Error('attribute equal must after attrName');ftb0p = gzo2r6;
        }break;case '\x27':case '\x22':
        if (ftb0p === gzo2r6 || ftb0p === gkhwye1) {
          if (ftb0p === gkhwye1 && (yw7eq['warning']('attribute value must after "="'), xaib5 = z2o63['slice'](t34fo_, apb0)), t34fo_ = apb0 + 0x1, apb0 = z2o63['indexOf'](whxy1, t34fo_), !(apb0 > 0x0)) throw new Error('attribute value no end \'' + whxy1 + '\' match');dozt3 = z2o63['slice'](t34fo_, apb0)['replace'](/&#?\w+;/g, a5hbi), hkwe1['add'](xaib5, dozt3, t34fo_ - 0x1), ftb0p = godt3z4;
        } else {
          if (ftb0p != gur6$j2) throw new Error('attribute value must after "="');dozt3 = z2o63['slice'](t34fo_, apb0)['replace'](/&#?\w+;/g, a5hbi), hkwe1['add'](xaib5, dozt3, t34fo_), yw7eq['warning']('attribute "' + xaib5 + '" missed start quot(' + whxy1 + ')!!'), t34fo_ = apb0 + 0x1, ftb0p = godt3z4;
        }break;case '/':
        switch (ftb0p) {case gekvy7:
            hkwe1['setTagName'](z2o63['slice'](t34fo_, apb0));case godt3z4:case gyhx1w:case gh5ixb:
            ftb0p = gh5ixb, hkwe1['closed'] = !0x0;case gur6$j2:case gkhwye1:case gptb0f_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yw7eq['error']('unexpected end of input'), ftb0p == gekvy7 && hkwe1['setTagName'](z2o63['slice'](t34fo_, apb0)), apb0;case '>':
        switch (ftb0p) {case gekvy7:
            hkwe1['setTagName'](z2o63['slice'](t34fo_, apb0));case godt3z4:case gyhx1w:case gh5ixb:
            break;case gur6$j2:case gkhwye1:
            dozt3 = z2o63['slice'](t34fo_, apb0), '/' === dozt3['slice'](-0x1) && (hkwe1['closed'] = !0x0, dozt3 = dozt3['slice'](0x0, -0x1));case gptb0f_:
            ftb0p === gptb0f_ && (dozt3 = xaib5), ftb0p == gur6$j2 ? (yw7eq['warning']('attribute "' + dozt3 + '" missed quot(")!!'), hkwe1['add'](xaib5, dozt3['replace'](/&#?\w+;/g, a5hbi), t34fo_)) : ('http://www.w3.org/1999/xhtml' === oz243[''] && dozt3['match'](/^(?:disabled|checked|selected)$/i) || yw7eq['warning']('attribute "' + dozt3 + '" missed value!! "' + dozt3 + '" instead!!'), hkwe1['add'](dozt3, dozt3, t34fo_));break;case gzo2r6:
            throw new Error('attribute value missed!!');}return apb0;case '\u0080':
        whxy1 = '\x20';default:
        if ('\x20' >= whxy1) switch (ftb0p) {case gekvy7:
            hkwe1['setTagName'](z2o63['slice'](t34fo_, apb0)), ftb0p = gyhx1w;break;case gkhwye1:
            xaib5 = z2o63['slice'](t34fo_, apb0), ftb0p = gptb0f_;break;case gur6$j2:
            var dozt3 = z2o63['slice'](t34fo_, apb0)['replace'](/&#?\w+;/g, a5hbi);yw7eq['warning']('attribute "' + dozt3 + '" missed quot(")!!'), hkwe1['add'](xaib5, dozt3, t34fo_);case godt3z4:
            ftb0p = gyhx1w;} else switch (ftb0p) {case gptb0f_:
            {
              hkwe1['tagName'];
            }'http://www.w3.org/1999/xhtml' === oz243[''] && xaib5['match'](/^(?:disabled|checked|selected)$/i) || yw7eq['warning']('attribute "' + xaib5 + '" missed value!! "' + xaib5 + '" instead2!!'), hkwe1['add'](xaib5, xaib5, t34fo_), t34fo_ = apb0, ftb0p = gkhwye1;break;case godt3z4:
            yw7eq['warning']('attribute space is required"' + xaib5 + '\x22!!');case gyhx1w:
            ftb0p = gkhwye1, t34fo_ = apb0;break;case gzo2r6:
            ftb0p = gur6$j2, t34fo_ = apb0;break;case gh5ixb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}apb0++;
  }
}function gbpi50_(g7qecv, pba5xi, b_5p0) {
  for (var z4d = g7qecv['tagName'], x1ikha = null, xhai1k = g7qecv['length']; xhai1k--;) {
    var jrmu$6 = g7qecv[xhai1k],
        kx1iah = jrmu$6['qName'],
        d26zro = jrmu$6['value'],
        o4zd32 = kx1iah['indexOf'](':');if (o4zd32 > 0x0) var jr6um = jrmu$6['prefix'] = kx1iah['slice'](0x0, o4zd32),
        umjr6$ = kx1iah['slice'](o4zd32 + 0x1),
        xak1hw = 'xmlns' === jr6um && umjr6$;else umjr6$ = kx1iah, jr6um = null, xak1hw = 'xmlns' === kx1iah && '';jrmu$6['localName'] = umjr6$, xak1hw !== !0x1 && (null == x1ikha && (x1ikha = {}, g_t3f4(b_5p0, b_5p0 = {})), b_5p0[xak1hw] = x1ikha[xak1hw] = d26zro, jrmu$6['uri'] = 'http://www.w3.org/2000/xmlns/', pba5xi['startPrefixMapping'](xak1hw, d26zro));
  }for (var xhai1k = g7qecv['length']; xhai1k--;) {
    jrmu$6 = g7qecv[xhai1k];var jr6um = jrmu$6['prefix'];jr6um && ('xml' === jr6um && (jrmu$6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jr6um && (jrmu$6['uri'] = b_5p0[jr6um || '']));
  }var o4zd32 = z4d['indexOf'](':');o4zd32 > 0x0 ? (jr6um = g7qecv['prefix'] = z4d['slice'](0x0, o4zd32), umjr6$ = g7qecv['localName'] = z4d['slice'](o4zd32 + 0x1)) : (jr6um = null, umjr6$ = g7qecv['localName'] = z4d);var t0pb_ = g7qecv['uri'] = b_5p0[jr6um || ''];if (pba5xi['startElement'](t0pb_, umjr6$, z4d, g7qecv), !g7qecv['closed']) return g7qecv['currentNSMap'] = b_5p0, g7qecv['localNSMap'] = x1ikha, !0x0;if (pba5xi['endElement'](t0pb_, umjr6$, z4d), x1ikha) {
    for (jr6um in x1ikha) pba5xi['endPrefixMapping'](jr6um);
  }
}function gt_p0f(qlgsc8, ykwe7, $6urm, qg7vce, cs9l) {
  if (/^(?:script|textarea)$/i['test']($6urm)) {
    var xhwk1a = qlgsc8['indexOf']('</' + $6urm + '>', ykwe7),
        x1hai5 = qlgsc8['substring'](ykwe7 + 0x1, xhwk1a);if (/[&<]/['test'](x1hai5)) return (/^script$/i['test']($6urm) ? (cs9l['characters'](x1hai5, 0x0, x1hai5['length']), xhwk1a) : (x1hai5 = x1hai5['replace'](/&#?\w+;/g, qg7vce), cs9l['characters'](x1hai5, 0x0, x1hai5['length']), xhwk1a)
    );
  }return ykwe7 + 0x1;
}function gur62(tf4, cgq87, t4_f30, m$6ur) {
  var gqe7vc = m$6ur[t4_f30];return null == gqe7vc && (gqe7vc = tf4['lastIndexOf']('</' + t4_f30 + '>'), cgq87 > gqe7vc && (gqe7vc = tf4['lastIndexOf']('</' + t4_f30)), m$6ur[t4_f30] = gqe7vc), cgq87 > gqe7vc;
}function g_t3f4(xh1kwy, btp) {
  for (var yxk1 in xh1kwy) btp[yxk1] = xh1kwy[yxk1];
}function geg7yq(ru$m6, bhxia, _0fpb5, awh1k) {
  var hixa1k = ru$m6['charAt'](bhxia + 0x2);switch (hixa1k) {case '-':
      if ('-' === ru$m6['charAt'](bhxia + 0x3)) {
        var _40f3t = ru$m6['indexOf']('-->', bhxia + 0x4);return _40f3t > bhxia ? (_0fpb5['comment'](ru$m6, bhxia + 0x4, _40f3t - bhxia - 0x4), _40f3t + 0x3) : (awh1k['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ru$m6['substr'](bhxia + 0x3, 0x6)) {
        var _40f3t = ru$m6['indexOf'](']]>', bhxia + 0x9);return _0fpb5['startCDATA'](), _0fpb5['characters'](ru$m6, bhxia + 0x9, _40f3t - bhxia - 0x9), _0fpb5['endCDATA'](), _40f3t + 0x3;
      }var ywekv1 = gcqge7(ru$m6, bhxia),
          r6j = ywekv1['length'];if (r6j > 0x1 && /!doctype/i['test'](ywekv1[0x0][0x0])) {
        var b5pf0_ = ywekv1[0x1][0x0],
            akhw = r6j > 0x3 && /^public$/i['test'](ywekv1[0x2][0x0]) && ywekv1[0x3][0x0],
            axh1w = r6j > 0x4 && ywekv1[0x4][0x0],
            s8q7 = ywekv1[r6j - 0x1];return _0fpb5['startDTD'](b5pf0_, akhw && akhw['replace'](/^(['"])(.*?)\1$/, '$2'), axh1w && axh1w['replace'](/^(['"])(.*?)\1$/, '$2')), _0fpb5['endDTD'](), s8q7['index'] + s8q7[0x0]['length'];
      }}return -0x1;
}function go6d2r(q7y, p40f_t, i5p_b0) {
  var xh1yw = q7y['indexOf']('?>', p40f_t);if (xh1yw) {
    var kx1hia = q7y['substring'](p40f_t, xh1yw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kx1hia) {
      {
        kx1hia[0x0]['length'];
      }return i5p_b0['processingInstruction'](kx1hia[0x1], kx1hia[0x2]), xh1yw + 0x2;
    }return -0x1;
  }return -0x1;
}function ghiax15() {}function gfdo34t(ke1yvw, kwahx1) {
  return ke1yvw['__proto__'] = kwahx1, ke1yvw;
}function gcqge7(j6$2rz, cqve7) {
  var cs7v,
      ywehk1 = [],
      x1whyk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (x1whyk['lastIndex'] = cqve7, x1whyk['exec'](j6$2rz); cs7v = x1whyk['exec'](j6$2rz);) if (ywehk1['push'](cs7v), cs7v[0x1]) return ywehk1;
}var gf_05pb = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gr$jm6 = new RegExp('[\\-\\.0-9' + gf_05pb['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gkwy1e = new RegExp('^' + gf_05pb['source'] + gr$jm6['source'] + '*(?::' + gf_05pb['source'] + gr$jm6['source'] + '*)?$'),
    gekvy7 = 0x0,
    gkhwye1 = 0x1,
    gptb0f_ = 0x2,
    gzo2r6 = 0x3,
    gur6$j2 = 0x4,
    godt3z4 = 0x5,
    gyhx1w = 0x6,
    gh5ixb = 0x7;gg7cvq['prototype'] = { 'parse': function (_4t3f, pa5b, gl9c) {
    var ruj$m = this['domBuilder'];ruj$m['startDocument'](), g_t3f4(pa5b, pa5b = {}), gz6r2o(_4t3f, pa5b, gl9c, ruj$m, this['errorHandler']), ruj$m['endDocument']();
  } }, ghiax15['prototype'] = { 'setTagName': function (h1yxk) {
    if (!gkwy1e['test'](h1yxk)) throw new Error('invalid tagName:' + h1yxk);this['tagName'] = h1yxk;
  }, 'add': function (zj62dr, w1ekhy, qcsl) {
    if (!gkwy1e['test'](zj62dr)) throw new Error('invalid attribute:' + zj62dr);this[this['length']++] = { 'qName': zj62dr, 'value': w1ekhy, 'offset': qcsl };
  }, 'length': 0x0, 'getLocalName': function (hx51i) {
    return this[hx51i]['localName'];
  }, 'getLocator': function (zd3o) {
    return this[zd3o]['locator'];
  }, 'getQName': function (xhk1w) {
    return this[xhk1w]['qName'];
  }, 'getURI': function (zr2do6) {
    return this[zr2do6]['uri'];
  }, 'getValue': function (g7vsq) {
    return this[g7vsq]['value'];
  } }, gfdo34t({}, gfdo34t['prototype']) instanceof gfdo34t || (gfdo34t = function (i5ahbx, tf_pb) {
  function he1yk() {}he1yk['prototype'] = tf_pb, he1yk = new he1yk();for (tf_pb in i5ahbx) he1yk[tf_pb] = i5ahbx[tf_pb];return he1yk;
}), exports['XMLReader'] = gg7cvq;