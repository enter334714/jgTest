var P = wx.$y;
function Txgdon8() {}function Tfwt2z(sm7cl, ylc_, xognd, dqnx8g, ezt6vp) {
  function h1905(e06vz1) {
    if (e06vz1 > 0xffff) {
      e06vz1 -= 0x10000;var v91hj0 = 0xd800 + (e06vz1 >> 0xa),
          wp$k2f = 0xdc00 + (0x3ff & e06vz1);return String['fromCharCode'](v91hj0, wp$k2f);
    }return String['fromCharCode'](e06vz1);
  }function hj90v(f8ko) {
    var e90 = f8ko['slice'](0x1, -0x1);return e90 in xognd ? xognd[e90] : '#' === e90['charAt'](0x0) ? h1905(parseInt(e90['substr'](0x1)['replace']('x', '0x'))) : (ezt6vp['error']('entity not found:' + f8ko), f8ko);
  }function bc3rm7(_sylq) {
    if (_sylq > gyxnq8) {
      var ptz2w6 = sm7cl['substring'](gyxnq8, _sylq)['replace'](/&#?\w+;/g, hj90v);yg8xn && iu4(gyxnq8), dqnx8g['characters'](ptz2w6, 0x0, _sylq - gyxnq8), gyxnq8 = _sylq;
    }
  }function iu4(ok$n8, wkf2$o) {
    for (; ok$n8 >= c_lsyq && (wkf2$o = o$2k['exec'](sm7cl));) $d8nxo = wkf2$o['index'], c_lsyq = $d8nxo + wkf2$o[0x0]['length'], yg8xn['lineNumber']++;yg8xn['columnNumber'] = ok$n8 - $d8nxo + 0x1;
  }for (var $d8nxo = 0x0, c_lsyq = 0x0, o$2k = /.*(?:\r\n?|\n)|.*$/g, yg8xn = dqnx8g['locator'], lr_c = [{ 'currentNSMap': ylc_ }], v9ej01 = {}, gyxnq8 = 0x0;;) {
    try {
      var d2f$ok = sm7cl['indexOf']('<', gyxnq8);if (0x0 > d2f$ok) {
        if (!sm7cl['substr'](gyxnq8)['match'](/^\s*$/)) {
          var tp6vze = dqnx8g['doc'],
              pvze = tp6vze['createTextNode'](sm7cl['substr'](gyxnq8));tp6vze['appendChild'](pvze), dqnx8g['currentElement'] = pvze;
        }return;
      }switch (d2f$ok > gyxnq8 && bc3rm7(d2f$ok), sm7cl['charAt'](d2f$ok + 0x1)) {case '/':
          var gondx8 = sm7cl['indexOf']('>', d2f$ok + 0x3),
              lg_ysq = sm7cl['substring'](d2f$ok + 0x2, gondx8),
              qxg8 = lr_c['pop']();0x0 > gondx8 ? (lg_ysq = sm7cl['substring'](d2f$ok + 0x2)['replace'](/[\s<].*/, ''), ezt6vp['error']('end tag name: ' + lg_ysq + ' is not complete:' + qxg8['tagName']), gondx8 = d2f$ok + 0x1 + lg_ysq['length']) : lg_ysq['match'](/\s</) && (lg_ysq = lg_ysq['replace'](/[\s<].*/, ''), ezt6vp['error']('end tag name: ' + lg_ysq + ' maybe not complete'), gondx8 = d2f$ok + 0x1 + lg_ysq['length']);var t6v1ez = qxg8['localNSMap'],
              b7mr34 = qxg8['tagName'] == lg_ysq,
              $ofkd = b7mr34 || qxg8['tagName'] && qxg8['tagName']['toLowerCase']() == lg_ysq['toLowerCase']();if ($ofkd) {
            if (dqnx8g['endElement'](qxg8['uri'], qxg8['localName'], lg_ysq), t6v1ez) {
              for (var d$kn8 in t6v1ez) dqnx8g['endPrefixMapping'](d$kn8);
            }b7mr34 || ezt6vp['fatalError']('end tag name: ' + lg_ysq + ' is not match the current start tagName:' + qxg8['tagName']);
          } else lr_c['push'](qxg8);gondx8++;break;case '?':
          yg8xn && iu4(d2f$ok), gondx8 = Tua34ib(sm7cl, d2f$ok, dqnx8g);break;case '!':
          yg8xn && iu4(d2f$ok), gondx8 = Tqx_sy(sm7cl, d2f$ok, dqnx8g, ezt6vp);break;default:
          yg8xn && iu4(d2f$ok);var m347bi = new Tn8kd(),
              r7lcb = lr_c[lr_c['length'] - 0x1]['currentNSMap'],
              gondx8 = Tr74b3(sm7cl, d2f$ok, m347bi, r7lcb, hj90v, ezt6vp),
              gl_ = m347bi['length'];if (!m347bi['closed'] && Tg8dnqx(sm7cl, gondx8, m347bi['tagName'], v9ej01) && (m347bi['closed'] = !0x0, xognd['nbsp'] || ezt6vp['warning']('unclosed xml attribute')), yg8xn && gl_) {
            for (var b47ui3 = Tnygqx_(yg8xn, {}), msrcl_ = 0x0; gl_ > msrcl_; msrcl_++) {
              var xygqn = m347bi[msrcl_];iu4(xygqn['offset']), xygqn['locator'] = Tnygqx_(yg8xn, {});
            }dqnx8g['locator'] = b47ui3, Tqs_yx(m347bi, dqnx8g, r7lcb) && lr_c['push'](m347bi), dqnx8g['locator'] = yg8xn;
          } else Tqs_yx(m347bi, dqnx8g, r7lcb) && lr_c['push'](m347bi);'http://www.w3.org/1999/xhtml' !== m347bi['uri'] || m347bi['closed'] ? gondx8++ : gondx8 = Tod2$(sm7cl, gondx8, m347bi['tagName'], hj90v, dqnx8g);}
    } catch (kpf2w$) {
      ezt6vp['error']('element parse error: ' + kpf2w$), gondx8 = -0x1;
    }gondx8 > gyxnq8 ? gyxnq8 = gondx8 : bc3rm7(Math['max'](d2f$ok, gyxnq8) + 0x1);
  }
}function Tnygqx_(dn$8ox, xgsq_) {
  return xgsq_['lineNumber'] = dn$8ox['lineNumber'], xgsq_['columnNumber'] = dn$8ox['columnNumber'], xgsq_;
}function Tr74b3(mc7l, gqysx, $fkow, _lygq, t6wpze, j9vh) {
  for (var evt1, mrbc37, hjv91 = ++gqysx, sr_lyc = Tjve60;;) {
    var gy_qn = mc7l['charAt'](hjv91);switch (gy_qn) {case '=':
        if (sr_lyc === Tkftpw2) evt1 = mc7l['slice'](gqysx, hjv91), sr_lyc = Tyq_slc;else {
          if (sr_lyc !== Tj6ev01) throw new Error('attribute equal must after attrName');sr_lyc = Tyq_slc;
        }break;case '\x27':case '\x22':
        if (sr_lyc === Tyq_slc || sr_lyc === Tkftpw2) {
          if (sr_lyc === Tkftpw2 && (j9vh['warning']('attribute value must after "="'), evt1 = mc7l['slice'](gqysx, hjv91)), gqysx = hjv91 + 0x1, hjv91 = mc7l['indexOf'](gy_qn, gqysx), !(hjv91 > 0x0)) throw new Error('attribute value no end \'' + gy_qn + '\' match');mrbc37 = mc7l['slice'](gqysx, hjv91)['replace'](/&#?\w+;/g, t6wpze), $fkow['add'](evt1, mrbc37, gqysx - 0x1), sr_lyc = Tcq_yl;
        } else {
          if (sr_lyc != T_ngyx) throw new Error('attribute value must after "="');mrbc37 = mc7l['slice'](gqysx, hjv91)['replace'](/&#?\w+;/g, t6wpze), $fkow['add'](evt1, mrbc37, gqysx), j9vh['warning']('attribute "' + evt1 + '" missed start quot(' + gy_qn + ')!!'), gqysx = hjv91 + 0x1, sr_lyc = Tcq_yl;
        }break;case '/':
        switch (sr_lyc) {case Tjve60:
            $fkow['setTagName'](mc7l['slice'](gqysx, hjv91));case Tcq_yl:case Txno8g:case T_rclsy:
            sr_lyc = T_rclsy, $fkow['closed'] = !0x0;case T_ngyx:case Tkftpw2:case Tj6ev01:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return j9vh['error']('unexpected end of input'), sr_lyc == Tjve60 && $fkow['setTagName'](mc7l['slice'](gqysx, hjv91)), hjv91;case '>':
        switch (sr_lyc) {case Tjve60:
            $fkow['setTagName'](mc7l['slice'](gqysx, hjv91));case Tcq_yl:case Txno8g:case T_rclsy:
            break;case T_ngyx:case Tkftpw2:
            mrbc37 = mc7l['slice'](gqysx, hjv91), '/' === mrbc37['slice'](-0x1) && ($fkow['closed'] = !0x0, mrbc37 = mrbc37['slice'](0x0, -0x1));case Tj6ev01:
            sr_lyc === Tj6ev01 && (mrbc37 = evt1), sr_lyc == T_ngyx ? (j9vh['warning']('attribute "' + mrbc37 + '" missed quot(")!!'), $fkow['add'](evt1, mrbc37['replace'](/&#?\w+;/g, t6wpze), gqysx)) : ('http://www.w3.org/1999/xhtml' === _lygq[''] && mrbc37['match'](/^(?:disabled|checked|selected)$/i) || j9vh['warning']('attribute "' + mrbc37 + '" missed value!! "' + mrbc37 + '" instead!!'), $fkow['add'](mrbc37, mrbc37, gqysx));break;case Tyq_slc:
            throw new Error('attribute value missed!!');}return hjv91;case '\u0080':
        gy_qn = '\x20';default:
        if ('\x20' >= gy_qn) switch (sr_lyc) {case Tjve60:
            $fkow['setTagName'](mc7l['slice'](gqysx, hjv91)), sr_lyc = Txno8g;break;case Tkftpw2:
            evt1 = mc7l['slice'](gqysx, hjv91), sr_lyc = Tj6ev01;break;case T_ngyx:
            var mrbc37 = mc7l['slice'](gqysx, hjv91)['replace'](/&#?\w+;/g, t6wpze);j9vh['warning']('attribute "' + mrbc37 + '" missed quot(")!!'), $fkow['add'](evt1, mrbc37, gqysx);case Tcq_yl:
            sr_lyc = Txno8g;} else switch (sr_lyc) {case Tj6ev01:
            {
              $fkow['tagName'];
            }'http://www.w3.org/1999/xhtml' === _lygq[''] && evt1['match'](/^(?:disabled|checked|selected)$/i) || j9vh['warning']('attribute "' + evt1 + '" missed value!! "' + evt1 + '" instead2!!'), $fkow['add'](evt1, evt1, gqysx), gqysx = hjv91, sr_lyc = Tkftpw2;break;case Tcq_yl:
            j9vh['warning']('attribute space is required"' + evt1 + '\x22!!');case Txno8g:
            sr_lyc = Tkftpw2, gqysx = hjv91;break;case Tyq_slc:
            sr_lyc = T_ngyx, gqysx = hjv91;break;case T_rclsy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hjv91++;
  }
}function Tqs_yx(k8$fd, blmc, gnyx_q) {
  for (var wpetz = k8$fd['tagName'], e10z6v = null, fkw2o = k8$fd['length']; fkw2o--;) {
    var dxg8o = k8$fd[fkw2o],
        $owkf2 = dxg8o['qName'],
        p$kw2 = dxg8o['value'],
        tzp6ve = $owkf2['indexOf'](':');if (tzp6ve > 0x0) var $8ndox = dxg8o['prefix'] = $owkf2['slice'](0x0, tzp6ve),
        $8kodf = $owkf2['slice'](tzp6ve + 0x1),
        p2tkf = 'xmlns' === $8ndox && $8kodf;else $8kodf = $owkf2, $8ndox = null, p2tkf = 'xmlns' === $owkf2 && '';dxg8o['localName'] = $8kodf, p2tkf !== !0x1 && (null == e10z6v && (e10z6v = {}, Twzp6(gnyx_q, gnyx_q = {})), gnyx_q[p2tkf] = e10z6v[p2tkf] = p$kw2, dxg8o['uri'] = 'http://www.w3.org/2000/xmlns/', blmc['startPrefixMapping'](p2tkf, p$kw2));
  }for (var fkw2o = k8$fd['length']; fkw2o--;) {
    dxg8o = k8$fd[fkw2o];var $8ndox = dxg8o['prefix'];$8ndox && ('xml' === $8ndox && (dxg8o['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $8ndox && (dxg8o['uri'] = gnyx_q[$8ndox || '']));
  }var tzp6ve = wpetz['indexOf'](':');tzp6ve > 0x0 ? ($8ndox = k8$fd['prefix'] = wpetz['slice'](0x0, tzp6ve), $8kodf = k8$fd['localName'] = wpetz['slice'](tzp6ve + 0x1)) : ($8ndox = null, $8kodf = k8$fd['localName'] = wpetz);var vpt6 = k8$fd['uri'] = gnyx_q[$8ndox || ''];if (blmc['startElement'](vpt6, $8kodf, wpetz, k8$fd), !k8$fd['closed']) return k8$fd['currentNSMap'] = gnyx_q, k8$fd['localNSMap'] = e10z6v, !0x0;if (blmc['endElement'](vpt6, $8kodf, wpetz), e10z6v) {
    for ($8ndox in e10z6v) blmc['endPrefixMapping']($8ndox);
  }
}function Tod2$(d8gxn, m74, zpe, h0vj91, p2wfk$) {
  if (/^(?:script|textarea)$/i['test'](zpe)) {
    var rlc7m = d8gxn['indexOf']('</' + zpe + '>', m74),
        rlsy_c = d8gxn['substring'](m74 + 0x1, rlc7m);if (/[&<]/['test'](rlsy_c)) return (/^script$/i['test'](zpe) ? (p2wfk$['characters'](rlsy_c, 0x0, rlsy_c['length']), rlc7m) : (rlsy_c = rlsy_c['replace'](/&#?\w+;/g, h0vj91), p2wfk$['characters'](rlsy_c, 0x0, rlsy_c['length']), rlc7m)
    );
  }return m74 + 0x1;
}function Tg8dnqx(ofd8, $wo2kf, w2tkpf, xqygn_) {
  var mlrcs_ = xqygn_[w2tkpf];return null == mlrcs_ && (mlrcs_ = ofd8['lastIndexOf']('</' + w2tkpf + '>'), $wo2kf > mlrcs_ && (mlrcs_ = ofd8['lastIndexOf']('</' + w2tkpf)), xqygn_[w2tkpf] = mlrcs_), $wo2kf > mlrcs_;
}function Twzp6(hvj901, ve1tz6) {
  for (var xdon8$ in hvj901) ve1tz6[xdon8$] = hvj901[xdon8$];
}function Tqx_sy(kp2ft, kfod8$, d2o$fk, t6v1e) {
  var rmb347 = kp2ft['charAt'](kfod8$ + 0x2);switch (rmb347) {case '-':
      if ('-' === kp2ft['charAt'](kfod8$ + 0x3)) {
        var o8xn$d = kp2ft['indexOf']('-->', kfod8$ + 0x4);return o8xn$d > kfod8$ ? (d2o$fk['comment'](kp2ft, kfod8$ + 0x4, o8xn$d - kfod8$ - 0x4), o8xn$d + 0x3) : (t6v1e['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kp2ft['substr'](kfod8$ + 0x3, 0x6)) {
        var o8xn$d = kp2ft['indexOf'](']]>', kfod8$ + 0x9);return d2o$fk['startCDATA'](), d2o$fk['characters'](kp2ft, kfod8$ + 0x9, o8xn$d - kfod8$ - 0x9), d2o$fk['endCDATA'](), o8xn$d + 0x3;
      }var mcb73r = Tnq_gy(kp2ft, kfod8$),
          m37rcb = mcb73r['length'];if (m37rcb > 0x1 && /!doctype/i['test'](mcb73r[0x0][0x0])) {
        var wf2ok$ = mcb73r[0x1][0x0],
            rm7lcs = m37rcb > 0x3 && /^public$/i['test'](mcb73r[0x2][0x0]) && mcb73r[0x3][0x0],
            v1z = m37rcb > 0x4 && mcb73r[0x4][0x0],
            $x8on = mcb73r[m37rcb - 0x1];return d2o$fk['startDTD'](wf2ok$, rm7lcs && rm7lcs['replace'](/^(['"])(.*?)\1$/, '$2'), v1z && v1z['replace'](/^(['"])(.*?)\1$/, '$2')), d2o$fk['endDTD'](), $x8on['index'] + $x8on[0x0]['length'];
      }}return -0x1;
}function Tua34ib(j9e0v, ycsq_, _lrcsy) {
  var b3m74r = j9e0v['indexOf']('?>', ycsq_);if (b3m74r) {
    var r7mlcs = j9e0v['substring'](ycsq_, b3m74r)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r7mlcs) {
      {
        r7mlcs[0x0]['length'];
      }return _lrcsy['processingInstruction'](r7mlcs[0x1], r7mlcs[0x2]), b3m74r + 0x2;
    }return -0x1;
  }return -0x1;
}function Tn8kd() {}function Twfpz2t(b3rc7, d$xno8) {
  return b3rc7['__proto__'] = d$xno8, b3rc7;
}function Tnq_gy(slg_qy, mb734i) {
  var mc7rsl,
      kd8o$ = [],
      i4bua = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (i4bua['lastIndex'] = mb734i, i4bua['exec'](slg_qy); mc7rsl = i4bua['exec'](slg_qy);) if (kd8o$['push'](mc7rsl), mc7rsl[0x1]) return kd8o$;
}var Tg_sqyl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Tlmr7cs = new RegExp('[\\-\\.0-9' + Tg_sqyl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Tej01v9 = new RegExp('^' + Tg_sqyl['source'] + Tlmr7cs['source'] + '*(?::' + Tg_sqyl['source'] + Tlmr7cs['source'] + '*)?$'),
    Tjve60 = 0x0,
    Tkftpw2 = 0x1,
    Tj6ev01 = 0x2,
    Tyq_slc = 0x3,
    T_ngyx = 0x4,
    Tcq_yl = 0x5,
    Txno8g = 0x6,
    T_rclsy = 0x7;Txgdon8['prototype'] = { 'parse': function (m7lsrc, v109hj, rlcsm_) {
    var q_sylg = this['domBuilder'];q_sylg['startDocument'](), Twzp6(v109hj, v109hj = {}), Tfwt2z(m7lsrc, v109hj, rlcsm_, q_sylg, this['errorHandler']), q_sylg['endDocument']();
  } }, Tn8kd['prototype'] = { 'setTagName': function (z61v0) {
    if (!Tej01v9['test'](z61v0)) throw new Error('invalid tagName:' + z61v0);this['tagName'] = z61v0;
  }, 'add': function ($fkd8, sryl_c, zp26t) {
    if (!Tej01v9['test']($fkd8)) throw new Error('invalid attribute:' + $fkd8);this[this['length']++] = { 'qName': $fkd8, 'value': sryl_c, 'offset': zp26t };
  }, 'length': 0x0, 'getLocalName': function (rmsl7) {
    return this[rmsl7]['localName'];
  }, 'getLocator': function (pevtz6) {
    return this[pevtz6]['locator'];
  }, 'getQName': function (n8xdq) {
    return this[n8xdq]['qName'];
  }, 'getURI': function (cq_sly) {
    return this[cq_sly]['uri'];
  }, 'getValue': function (m3b4i) {
    return this[m3b4i]['value'];
  } }, Twfpz2t({}, Twfpz2t['prototype']) instanceof Twfpz2t || (Twfpz2t = function (gon8, qcsy) {
  function $do2kf() {}$do2kf['prototype'] = qcsy, $do2kf = new $do2kf();for (qcsy in gon8) $do2kf[qcsy] = gon8[qcsy];return $do2kf;
}), exports['XMLReader'] = Txgdon8;