var g = wx.$Q;
function q_jquw8s() {}function q_hwu8(n41m, gaf0l, mon614, dkyt, o_$ze) {
  function rktcdy(r$dzct) {
    var bpgil = r$dzct['slice'](0x1, -0x1);return bpgil in mon614 ? mon614[bpgil] : '#' === bpgil['charAt'](0x0) ? 0xffff < (bpgil = parseInt(bpgil['substr'](0x1)['replace']('x', '0x'))) ? (bpgil -= 0x10000, String['fromCharCode'](0xd800 + (bpgil >> 0xa), 0xdc00 + (0x3ff & bpgil))) : String['fromCharCode'](bpgil) : (o_$ze['error']('entity not found:' + r$dzct), r$dzct);
  }function tdcy5($_z9oe) {
    var gfa0l;mj1h84 < $_z9oe && (gfa0l = n41m['substring'](mj1h84, $_z9oe)['replace'](/&#?\w+;/g, rktcdy), y5tck3 && yrd(mj1h84), dkyt['characters'](gfa0l, 0x0, $_z9oe - mj1h84), mj1h84 = $_z9oe);
  }function yrd(xf3p, meo6n) {
    for (; lp2fx <= xf3p && (meo6n = rcydk['exec'](n41m));) z9e$r = meo6n['index'], lp2fx = z9e$r + meo6n[0x0]['length'], y5tck3['lineNumber']++;y5tck3['columnNumber'] = xf3p - z9e$r + 0x1;
  }for (var z9e$r = 0x0, lp2fx = 0x0, rcydk = /.*(?:\r\n?|\n)|.*$/g, y5tck3 = dkyt['locator'], dczr = [{ 'currentNSMap': gaf0l }], tc5k3 = {}, mj1h84 = 0x0;;) {
    try {
      var j18shw = n41m['indexOf']('<', mj1h84),
          o416nm,
          f3xp0;if (j18shw < 0x0) return void (n41m['substr'](mj1h84)['match'](/^\s*$/) || (f3xp0 = (o416nm = dkyt['doc'])['createTextNode'](n41m['substr'](mj1h84)), o416nm['appendChild'](f3xp0), dkyt['currentElement'] = f3xp0));switch (mj1h84 < j18shw && tdcy5(j18shw), n41m['charAt'](j18shw + 0x1)) {case '/':
          var _zd$ = n41m['indexOf']('>', j18shw + 0x3),
              k5yct = n41m['substring'](j18shw + 0x2, _zd$),
              i7abgv = dczr['pop']();_zd$ < 0x0 ? (k5yct = n41m['substring'](j18shw + 0x2)['replace'](/[\s<].*/, ''), o_$ze['error']('end tag name: ' + k5yct + ' is not complete:' + i7abgv['tagName']), _zd$ = j18shw + 0x1 + k5yct['length']) : k5yct['match'](/\s</) && (k5yct = k5yct['replace'](/[\s<].*/, ''), o_$ze['error']('end tag name: ' + k5yct + ' maybe not complete'), _zd$ = j18shw + 0x1 + k5yct['length']);var f0lpx2 = i7abgv['localNSMap'],
              oem6 = i7abgv['tagName'] == k5yct;if (oem6 || i7abgv['tagName'] && i7abgv['tagName']['toLowerCase']() == k5yct['toLowerCase']()) {
            if (dkyt['endElement'](i7abgv['uri'], i7abgv['localName'], k5yct), f0lpx2) {
              for (var $zcrd in f0lpx2) dkyt['endPrefixMapping']($zcrd);
            }oem6 || o_$ze['fatalError']('end tag name: ' + k5yct + ' is not match the current start tagName:' + i7abgv['tagName']);
          } else dczr['push'](i7abgv);_zd$++;break;case '?':
          y5tck3 && yrd(j18shw), _zd$ = q_bagvl(n41m, j18shw, dkyt);break;case '!':
          y5tck3 && yrd(j18shw), _zd$ = q_pflx20(n41m, j18shw, dkyt, o_$ze);break;default:
          y5tck3 && yrd(j18shw);var bgvail = new q_d$_cr(),
              $neo = dczr[dczr['length'] - 0x1]['currentNSMap'],
              _zd$ = q_rd$ez(n41m, j18shw, bgvail, $neo, rktcdy, o_$ze),
              alpfg = bgvail['length'];if (!bgvail['closed'] && q_y5230(n41m, _zd$, bgvail['tagName'], tc5k3) && (bgvail['closed'] = !0x0, mon614['nbsp'] || o_$ze['warning']('unclosed xml attribute')), y5tck3 && alpfg) {
            for (var rzckt = q_mh1j(y5tck3, {}), r_ez = 0x0; r_ez < alpfg; r_ez++) {
              var erz_ = bgvail[r_ez];yrd(erz_['offset']), erz_['locator'] = q_mh1j(y5tck3, {});
            }dkyt['locator'] = rzckt, q_f0xpl2(bgvail, dkyt, $neo) && dczr['push'](bgvail), dkyt['locator'] = y5tck3;
          } else q_f0xpl2(bgvail, dkyt, $neo) && dczr['push'](bgvail);'http://www.w3.org/1999/xhtml' !== bgvail['uri'] || bgvail['closed'] ? _zd$++ : _zd$ = q_plgi(n41m, _zd$, bgvail['tagName'], rktcdy, dkyt);}
    } catch (d5kct) {
      o_$ze['error']('element parse error: ' + d5kct), _zd$ = -0x1;
    }mj1h84 < _zd$ ? mj1h84 = _zd$ : tdcy5(Math['max'](j18shw, mj1h84) + 0x1);
  }
}function q_mh1j(eo$_z, jh8uw) {
  return jh8uw['lineNumber'] = eo$_z['lineNumber'], jh8uw['columnNumber'] = eo$_z['columnNumber'], jh8uw;
}function q_rd$ez(y053, jws81, jwu8sh, t$c, gbliv, j1w8) {
  for (var glpi, on9m46 = ++jws81, juw8sq = q_c$zdrt;;) {
    var me9no6 = y053['charAt'](on9m46);switch (me9no6) {case '=':
        if (juw8sq === q_dtczkr) glpi = y053['slice'](jws81, on9m46), juw8sq = q_afpb;else {
          if (juw8sq !== q_s18j) throw new Error('attribute equal must after attrName');juw8sq = q_afpb;
        }break;case '\x27':case '\x22':
        if (juw8sq === q_afpb || juw8sq === q_dtczkr) {
          if (juw8sq === q_dtczkr && (j1w8['warning']('attribute value must after "="'), glpi = y053['slice'](jws81, on9m46)), !(0x0 < (on9m46 = y053['indexOf'](me9no6, jws81 = on9m46 + 0x1)))) throw new Error('attribute value no end \'' + me9no6 + '\' match');rdztck = y053['slice'](jws81, on9m46)['replace'](/&#?\w+;/g, gbliv), jwu8sh['add'](glpi, rdztck, jws81 - 0x1), juw8sq = q_ze9$;
        } else {
          if (juw8sq != q_lgbfa) throw new Error('attribute value must after "="');rdztck = y053['slice'](jws81, on9m46)['replace'](/&#?\w+;/g, gbliv), jwu8sh['add'](glpi, rdztck, jws81), j1w8['warning']('attribute "' + glpi + '" missed start quot(' + me9no6 + ')!!'), jws81 = on9m46 + 0x1, juw8sq = q_ze9$;
        }break;case '/':
        switch (juw8sq) {case q_c$zdrt:
            jwu8sh['setTagName'](y053['slice'](jws81, on9m46));case q_ze9$:case q_o6_ne:case q_dyrtck:
            juw8sq = q_dyrtck, jwu8sh['closed'] = !0x0;case q_lgbfa:case q_dtczkr:case q_s18j:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return j1w8['error']('unexpected end of input'), juw8sq == q_c$zdrt && jwu8sh['setTagName'](y053['slice'](jws81, on9m46)), on9m46;case '>':
        switch (juw8sq) {case q_c$zdrt:
            jwu8sh['setTagName'](y053['slice'](jws81, on9m46));case q_ze9$:case q_o6_ne:case q_dyrtck:
            break;case q_lgbfa:case q_dtczkr:
            '/' === (rdztck = y053['slice'](jws81, on9m46))['slice'](-0x1) && (jwu8sh['closed'] = !0x0, rdztck = rdztck['slice'](0x0, -0x1));case q_s18j:
            juw8sq === q_s18j && (rdztck = glpi), juw8sq == q_lgbfa ? (j1w8['warning']('attribute "' + rdztck + '" missed quot(")!!'), jwu8sh['add'](glpi, rdztck['replace'](/&#?\w+;/g, gbliv), jws81)) : ('http://www.w3.org/1999/xhtml' === t$c[''] && rdztck['match'](/^(?:disabled|checked|selected)$/i) || j1w8['warning']('attribute "' + rdztck + '" missed value!! "' + rdztck + '" instead!!'), jwu8sh['add'](rdztck, rdztck, jws81));break;case q_afpb:
            throw new Error('attribute value missed!!');}return on9m46;case '\u0080':
        me9no6 = '\x20';default:
        if (me9no6 <= '\x20') switch (juw8sq) {case q_c$zdrt:
            jwu8sh['setTagName'](y053['slice'](jws81, on9m46)), juw8sq = q_o6_ne;break;case q_dtczkr:
            glpi = y053['slice'](jws81, on9m46), juw8sq = q_s18j;break;case q_lgbfa:
            var rdztck = y053['slice'](jws81, on9m46)['replace'](/&#?\w+;/g, gbliv);j1w8['warning']('attribute "' + rdztck + '" missed quot(")!!'), jwu8sh['add'](glpi, rdztck, jws81);case q_ze9$:
            juw8sq = q_o6_ne;} else switch (juw8sq) {case q_s18j:
            jwu8sh['tagName'], 'http://www.w3.org/1999/xhtml' === t$c[''] && glpi['match'](/^(?:disabled|checked|selected)$/i) || j1w8['warning']('attribute "' + glpi + '" missed value!! "' + glpi + '" instead2!!'), jwu8sh['add'](glpi, glpi, jws81), jws81 = on9m46, juw8sq = q_dtczkr;break;case q_ze9$:
            j1w8['warning']('attribute space is required"' + glpi + '\x22!!');case q_o6_ne:
            juw8sq = q_dtczkr, jws81 = on9m46;break;case q_afpb:
            juw8sq = q_lgbfa, jws81 = on9m46;break;case q_dyrtck:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}on9m46++;
  }
}function q_f0xpl2(_e9zo, ba7ivg, _9n6) {
  for (var ctyk5d = _e9zo['tagName'], yrtckd = null, $drzt = _e9zo['length']; $drzt--;) {
    var j1swh = _e9zo[$drzt],
        _e6n9 = j1swh['qName'],
        e6o_9 = j1swh['value'],
        x5k32y;_e6n9 = 0x0 < (p32x0f = _e6n9['indexOf'](':')) ? (h86m = j1swh['prefix'] = _e6n9['slice'](0x0, p32x0f), x5k32y = _e6n9['slice'](p32x0f + 0x1), 'xmlns' === h86m && x5k32y) : (h86m = null, 'xmlns' === (x5k32y = _e6n9) && ''), j1swh['localName'] = x5k32y, !0x1 !== _e6n9 && (null == yrtckd && (yrtckd = {}, q_wu8hsj(_9n6, _9n6 = {})), _9n6[_e6n9] = yrtckd[_e6n9] = e6o_9, j1swh['uri'] = 'http://www.w3.org/2000/xmlns/', ba7ivg['startPrefixMapping'](_e6n9, e6o_9));
  }for ($drzt = _e9zo['length']; $drzt--;) (h86m = (j1swh = _e9zo[$drzt])['prefix']) && ('xml' === h86m && (j1swh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== h86m && (j1swh['uri'] = _9n6[h86m || '']));var p32x0f;x5k32y = 0x0 < (p32x0f = ctyk5d['indexOf'](':')) ? (h86m = _e9zo['prefix'] = ctyk5d['slice'](0x0, p32x0f), _e9zo['localName'] = ctyk5d['slice'](p32x0f + 0x1)) : (h86m = null, _e9zo['localName'] = ctyk5d);var u8jq = _e9zo['uri'] = _9n6[h86m || ''];if (ba7ivg['startElement'](u8jq, x5k32y, ctyk5d, _e9zo), !_e9zo['closed']) return _e9zo['currentNSMap'] = _9n6, _e9zo['localNSMap'] = yrtckd, !0x0;if (ba7ivg['endElement'](u8jq, x5k32y, ctyk5d), yrtckd) {
    for (var h86m in yrtckd) ba7ivg['endPrefixMapping'](h86m);
  }
}function q_plgi(juq8ws, a0lfp, yk35ct, rzd_, o4n61) {
  if (/^(?:script|textarea)$/i['test'](yk35ct)) {
    var tdrczk = juq8ws['indexOf']('</' + yk35ct + '>', a0lfp),
        juq8ws = juq8ws['substring'](a0lfp + 0x1, tdrczk);if (/[&<]/['test'](juq8ws)) return (/^script$/i['test'](yk35ct) || (juq8ws = juq8ws['replace'](/&#?\w+;/g, rzd_)), o4n61['characters'](juq8ws, 0x0, juq8ws['length']), tdrczk
    );
  }return a0lfp + 0x1;
}function q_y5230(galbf, p02x, qsjw8u, ne9$o_) {
  var liav = ne9$o_[qsjw8u];return null == liav && ((liav = galbf['lastIndexOf']('</' + qsjw8u + '>')) < p02x && (liav = galbf['lastIndexOf']('</' + qsjw8u)), ne9$o_[qsjw8u] = liav), liav < p02x;
}function q_wu8hsj(f0ga, jws1) {
  for (var n46om in f0ga) jws1[n46om] = f0ga[n46om];
}function q_pflx20(glp, _ze$o, bfap, _9erz$) {
  var ap0f = glp['charAt'](_ze$o + 0x2);if ('-' === ap0f) return '-' !== glp['charAt'](_ze$o + 0x3) ? -0x1 : _ze$o < (p0fla = glp['indexOf']('-->', _ze$o + 0x4)) ? (bfap['comment'](glp, _ze$o + 0x4, p0fla - _ze$o - 0x4), p0fla + 0x3) : (_9erz$['error']('Unclosed comment'), -0x1);if ('CDATA[' == glp['substr'](_ze$o + 0x3, 0x6)) return p0fla = glp['indexOf'](']]>', _ze$o + 0x9), bfap['startCDATA'](), bfap['characters'](glp, _ze$o + 0x9, p0fla - _ze$o - 0x9), bfap['endCDATA'](), p0fla + 0x3;ap0f = q_crdz_(glp, _ze$o), _9erz$ = ap0f['length'];var p0fla;return 0x1 < _9erz$ && /!doctype/i['test'](ap0f[0x0][0x0]) ? (p0fla = ap0f[0x1][0x0], glp = 0x3 < _9erz$ && /^public$/i['test'](ap0f[0x2][0x0]) && ap0f[0x3][0x0], _ze$o = 0x4 < _9erz$ && ap0f[0x4][0x0], ap0f = ap0f[_9erz$ - 0x1], bfap['startDTD'](p0fla, glp && glp['replace'](/^(['"])(.*?)\1$/, '$2'), _ze$o && _ze$o['replace'](/^(['"])(.*?)\1$/, '$2')), bfap['endDTD'](), ap0f['index'] + ap0f[0x0]['length']) : -0x1;
}function q_bagvl(_en6o, xy25k3, tkcdrz) {
  var qw8uj = _en6o['indexOf']('?>', xy25k3);return qw8uj && (_en6o = _en6o['substring'](xy25k3, qw8uj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (_en6o[0x0]['length'], tkcdrz['processingInstruction'](_en6o[0x1], _en6o[0x2]), qw8uj + 0x2) : -0x1;
}function q_d$_cr() {}function q_enm9(kytdc, lgbpai) {
  return kytdc['__proto__'] = lgbpai, kytdc;
}function q_crdz_(xy5t, re$z) {
  var p20alf,
      $on = [],
      q8wsu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q8wsu['lastIndex'] = re$z, q8wsu['exec'](xy5t); p20alf = q8wsu['exec'](xy5t);) if ($on['push'](p20alf), p20alf[0x1]) return $on;
}var q_xp02f3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    q_jhw8us = new RegExp('[\\-\\.0-9' + q_xp02f3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    q_x0p32f = new RegExp('^' + q_xp02f3['source'] + q_jhw8us['source'] + '*(?::' + q_xp02f3['source'] + q_jhw8us['source'] + '*)?$'),
    q_c$zdrt = 0x0,
    q_dtczkr = 0x1,
    q_s18j = 0x2,
    q_afpb = 0x3,
    q_lgbfa = 0x4,
    q_ze9$ = 0x5,
    q_o6_ne = 0x6,
    q_dyrtck = 0x7;q_jquw8s['prototype'] = { 'parse': function (gba7iv, f0lpx, baglfp) {
    var fpabgl = this['domBuilder'];fpabgl['startDocument'](), q_wu8hsj(f0lpx, f0lpx = {}), q_hwu8(gba7iv, f0lpx, baglfp, fpabgl, this['errorHandler']), fpabgl['endDocument']();
  } }, q_d$_cr['prototype'] = { 'setTagName': function (neo$9_) {
    if (!q_x0p32f['test'](neo$9_)) throw new Error('invalid tagName:' + neo$9_);this['tagName'] = neo$9_;
  }, 'add': function (eno96_, sj8hw1, $z_rcd) {
    if (!q_x0p32f['test'](eno96_)) throw new Error('invalid attribute:' + eno96_);this[this['length']++] = { 'qName': eno96_, 'value': sj8hw1, 'offset': $z_rcd };
  }, 'length': 0x0, 'getLocalName': function (_6oen) {
    return this[_6oen]['localName'];
  }, 'getLocator': function (ze9r_) {
    return this[ze9r_]['locator'];
  }, 'getQName': function (gpla0f) {
    return this[gpla0f]['qName'];
  }, 'getURI': function (lfpg0a) {
    return this[lfpg0a]['uri'];
  }, 'getValue': function (ykdrc) {
    return this[ykdrc]['value'];
  } }, q_enm9({}, q_enm9['prototype']) instanceof q_enm9 || (q_enm9 = function (zcrdtk, tdkczr) {
  function h8sju() {}for (tdkczr in h8sju['prototype'] = tdkczr, h8sju = new h8sju(), zcrdtk) h8sju[tdkczr] = zcrdtk[tdkczr];return h8sju;
}), exports['XMLReader'] = q_jquw8s;