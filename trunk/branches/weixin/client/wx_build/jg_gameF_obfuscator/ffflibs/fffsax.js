var k = wx.$f;
function ff57uo() {}function fu4d5of(ka0tw, jw0kta, xqs$2, p$_m, s_x2z) {
  function s_z$pc(vdynf4) {
    var $3mcp_ = vdynf4['slice'](0x1, -0x1);return $3mcp_ in xqs$2 ? xqs$2[$3mcp_] : '#' === $3mcp_['charAt'](0x0) ? 0xffff < ($3mcp_ = parseInt($3mcp_['substr'](0x1)['replace']('x', '0x'))) ? ($3mcp_ -= 0x10000, String['fromCharCode'](0xd800 + ($3mcp_ >> 0xa), 0xdc00 + (0x3ff & $3mcp_))) : String['fromCharCode']($3mcp_) : (s_x2z['error']('entity not found:' + vdynf4), vdynf4);
  }function fbu75(yfd4nv) {
    var z_pcs$;tja0k < yfd4nv && (z_pcs$ = ka0tw['substring'](tja0k, yfd4nv)['replace'](/&#?\w+;/g, s_z$pc), x$_s2z && j70(tja0k), p$_m['characters'](z_pcs$, 0x0, yfd4nv - tja0k), tja0k = yfd4nv);
  }function j70(z2axqs, uo4n) {
    for (; h6g9 <= z2axqs && (uo4n = _zs$cx['exec'](ka0tw));) fd4ny = uo4n['index'], h6g9 = fd4ny + uo4n[0x0]['length'], x$_s2z['lineNumber']++;x$_s2z['columnNumber'] = z2axqs - fd4ny + 0x1;
  }for (var fd4ny = 0x0, h6g9 = 0x0, _zs$cx = /.*(?:\r\n?|\n)|.*$/g, x$_s2z = p$_m['locator'], h69g3 = [{ 'currentNSMap': jw0kta }], h3m9ig = {}, tja0k = 0x0;;) {
    try {
      var r18evy = ka0tw['indexOf']('<', tja0k),
          qxwa2j,
          i96gh;if (r18evy < 0x0) return void (ka0tw['substr'](tja0k)['match'](/^\s*$/) || (i96gh = (qxwa2j = p$_m['doc'])['createTextNode'](ka0tw['substr'](tja0k)), qxwa2j['appendChild'](i96gh), p$_m['currentElement'] = i96gh));switch (tja0k < r18evy && fbu75(r18evy), ka0tw['charAt'](r18evy + 0x1)) {case '/':
          var sxz$_c = ka0tw['indexOf']('>', r18evy + 0x3),
              pmc$3_ = ka0tw['substring'](r18evy + 0x2, sxz$_c),
              y814v = h69g3['pop']();sxz$_c < 0x0 ? (pmc$3_ = ka0tw['substring'](r18evy + 0x2)['replace'](/[\s<].*/, ''), s_x2z['error']('end tag name: ' + pmc$3_ + ' is not complete:' + y814v['tagName']), sxz$_c = r18evy + 0x1 + pmc$3_['length']) : pmc$3_['match'](/\s</) && (pmc$3_ = pmc$3_['replace'](/[\s<].*/, ''), s_x2z['error']('end tag name: ' + pmc$3_ + ' maybe not complete'), sxz$_c = r18evy + 0x1 + pmc$3_['length']);var a2xs = y814v['localNSMap'],
              ih963g = y814v['tagName'] == pmc$3_;if (ih963g || y814v['tagName'] && y814v['tagName']['toLowerCase']() == pmc$3_['toLowerCase']()) {
            if (p$_m['endElement'](y814v['uri'], y814v['localName'], pmc$3_), a2xs) {
              for (var n1yv84 in a2xs) p$_m['endPrefixMapping'](n1yv84);
            }ih963g || s_x2z['fatalError']('end tag name: ' + pmc$3_ + ' is not match the current start tagName:' + y814v['tagName']);
          } else h69g3['push'](y814v);sxz$_c++;break;case '?':
          x$_s2z && j70(r18evy), sxz$_c = fobtu57(ka0tw, r18evy, p$_m);break;case '!':
          x$_s2z && j70(r18evy), sxz$_c = fdfyu4(ka0tw, r18evy, p$_m, s_x2z);break;default:
          x$_s2z && j70(r18evy);var jt70k = new fx_$z2s(),
              k07jb = h69g3[h69g3['length'] - 0x1]['currentNSMap'],
              sxz$_c = fgh9i63(ka0tw, r18evy, jt70k, k07jb, s_z$pc, s_x2z),
              v8ny1e = jt70k['length'];if (!jt70k['closed'] && fh6gi93(ka0tw, sxz$_c, jt70k['tagName'], h3m9ig) && (jt70k['closed'] = !0x0, xqs$2['nbsp'] || s_x2z['warning']('unclosed xml attribute')), x$_s2z && v8ny1e) {
            for (var j0wkb = fgpm9(x$_s2z, {}), kt0ajw = 0x0; kt0ajw < v8ny1e; kt0ajw++) {
              var ajwqk = jt70k[kt0ajw];j70(ajwqk['offset']), ajwqk['locator'] = fgpm9(x$_s2z, {});
            }p$_m['locator'] = j0wkb, fndfyu4(jt70k, p$_m, k07jb) && h69g3['push'](jt70k), p$_m['locator'] = x$_s2z;
          } else fndfyu4(jt70k, p$_m, k07jb) && h69g3['push'](jt70k);'http://www.w3.org/1999/xhtml' !== jt70k['uri'] || jt70k['closed'] ? sxz$_c++ : sxz$_c = fq2jwak(ka0tw, sxz$_c, jt70k['tagName'], s_z$pc, p$_m);}
    } catch (a2wqjx) {
      s_x2z['error']('element parse error: ' + a2wqjx), sxz$_c = -0x1;
    }tja0k < sxz$_c ? tja0k = sxz$_c : fbu75(Math['max'](r18evy, tja0k) + 0x1);
  }
}function fgpm9(n18vye, oufn) {
  return oufn['lineNumber'] = n18vye['lineNumber'], oufn['columnNumber'] = n18vye['columnNumber'], oufn;
}function fgh9i63(q$2szx, dy8v, j7tb0k, y8v1ne, x2qazs, x2_s) {
  for (var f4nudo, xz2_ = ++dy8v, q0kjw = fyv4fn;;) {
    var mpc_g = q$2szx['charAt'](xz2_);switch (mpc_g) {case '=':
        if (q0kjw === fudf4no) f4nudo = q$2szx['slice'](dy8v, xz2_), q0kjw = fyvd48n;else {
          if (q0kjw !== fb0o75) throw new Error('attribute equal must after attrName');q0kjw = fyvd48n;
        }break;case '\x27':case '\x22':
        if (q0kjw === fyvd48n || q0kjw === fudf4no) {
          if (q0kjw === fudf4no && (x2_s['warning']('attribute value must after "="'), f4nudo = q$2szx['slice'](dy8v, xz2_)), !(0x0 < (xz2_ = q$2szx['indexOf'](mpc_g, dy8v = xz2_ + 0x1)))) throw new Error('attribute value no end \'' + mpc_g + '\' match');xa2q = q$2szx['slice'](dy8v, xz2_)['replace'](/&#?\w+;/g, x2qazs), j7tb0k['add'](f4nudo, xa2q, dy8v - 0x1), q0kjw = fudfn4y;
        } else {
          if (q0kjw != ffy4dnu) throw new Error('attribute value must after "="');xa2q = q$2szx['slice'](dy8v, xz2_)['replace'](/&#?\w+;/g, x2qazs), j7tb0k['add'](f4nudo, xa2q, dy8v), x2_s['warning']('attribute "' + f4nudo + '" missed start quot(' + mpc_g + ')!!'), dy8v = xz2_ + 0x1, q0kjw = fudfn4y;
        }break;case '/':
        switch (q0kjw) {case fyv4fn:
            j7tb0k['setTagName'](q$2szx['slice'](dy8v, xz2_));case fudfn4y:case fc_g3mp:case fs_$2zx:
            q0kjw = fs_$2zx, j7tb0k['closed'] = !0x0;case ffy4dnu:case fudf4no:case fb0o75:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return x2_s['error']('unexpected end of input'), q0kjw == fyv4fn && j7tb0k['setTagName'](q$2szx['slice'](dy8v, xz2_)), xz2_;case '>':
        switch (q0kjw) {case fyv4fn:
            j7tb0k['setTagName'](q$2szx['slice'](dy8v, xz2_));case fudfn4y:case fc_g3mp:case fs_$2zx:
            break;case ffy4dnu:case fudf4no:
            '/' === (xa2q = q$2szx['slice'](dy8v, xz2_))['slice'](-0x1) && (j7tb0k['closed'] = !0x0, xa2q = xa2q['slice'](0x0, -0x1));case fb0o75:
            q0kjw === fb0o75 && (xa2q = f4nudo), q0kjw == ffy4dnu ? (x2_s['warning']('attribute "' + xa2q + '" missed quot(")!!'), j7tb0k['add'](f4nudo, xa2q['replace'](/&#?\w+;/g, x2qazs), dy8v)) : ('http://www.w3.org/1999/xhtml' === y8v1ne[''] && xa2q['match'](/^(?:disabled|checked|selected)$/i) || x2_s['warning']('attribute "' + xa2q + '" missed value!! "' + xa2q + '" instead!!'), j7tb0k['add'](xa2q, xa2q, dy8v));break;case fyvd48n:
            throw new Error('attribute value missed!!');}return xz2_;case '\u0080':
        mpc_g = '\x20';default:
        if (mpc_g <= '\x20') switch (q0kjw) {case fyv4fn:
            j7tb0k['setTagName'](q$2szx['slice'](dy8v, xz2_)), q0kjw = fc_g3mp;break;case fudf4no:
            f4nudo = q$2szx['slice'](dy8v, xz2_), q0kjw = fb0o75;break;case ffy4dnu:
            var xa2q = q$2szx['slice'](dy8v, xz2_)['replace'](/&#?\w+;/g, x2qazs);x2_s['warning']('attribute "' + xa2q + '" missed quot(")!!'), j7tb0k['add'](f4nudo, xa2q, dy8v);case fudfn4y:
            q0kjw = fc_g3mp;} else switch (q0kjw) {case fb0o75:
            j7tb0k['tagName'], 'http://www.w3.org/1999/xhtml' === y8v1ne[''] && f4nudo['match'](/^(?:disabled|checked|selected)$/i) || x2_s['warning']('attribute "' + f4nudo + '" missed value!! "' + f4nudo + '" instead2!!'), j7tb0k['add'](f4nudo, f4nudo, dy8v), dy8v = xz2_, q0kjw = fudf4no;break;case fudfn4y:
            x2_s['warning']('attribute space is required"' + f4nudo + '\x22!!');case fc_g3mp:
            q0kjw = fudf4no, dy8v = xz2_;break;case fyvd48n:
            q0kjw = ffy4dnu, dy8v = xz2_;break;case fs_$2zx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xz2_++;
  }
}function fndfyu4(fv4ndy, o50tb, q2jw) {
  for (var z2axw = fv4ndy['tagName'], _cx$s = null, $zscx_ = fv4ndy['length']; $zscx_--;) {
    var y8ndv4 = fv4ndy[$zscx_],
        e18r = y8ndv4['qName'],
        ve1 = y8ndv4['value'],
        sq$z2;e18r = 0x0 < (_$mc3 = e18r['indexOf'](':')) ? (c_$ms = y8ndv4['prefix'] = e18r['slice'](0x0, _$mc3), sq$z2 = e18r['slice'](_$mc3 + 0x1), 'xmlns' === c_$ms && sq$z2) : (c_$ms = null, 'xmlns' === (sq$z2 = e18r) && ''), y8ndv4['localName'] = sq$z2, !0x1 !== e18r && (null == _cx$s && (_cx$s = {}, fn4y81(q2jw, q2jw = {})), q2jw[e18r] = _cx$s[e18r] = ve1, y8ndv4['uri'] = 'http://www.w3.org/2000/xmlns/', o50tb['startPrefixMapping'](e18r, ve1));
  }for ($zscx_ = fv4ndy['length']; $zscx_--;) (c_$ms = (y8ndv4 = fv4ndy[$zscx_])['prefix']) && ('xml' === c_$ms && (y8ndv4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== c_$ms && (y8ndv4['uri'] = q2jw[c_$ms || '']));var _$mc3;sq$z2 = 0x0 < (_$mc3 = z2axw['indexOf'](':')) ? (c_$ms = fv4ndy['prefix'] = z2axw['slice'](0x0, _$mc3), fv4ndy['localName'] = z2axw['slice'](_$mc3 + 0x1)) : (c_$ms = null, fv4ndy['localName'] = z2axw);var xsqza2 = fv4ndy['uri'] = q2jw[c_$ms || ''];if (o50tb['startElement'](xsqza2, sq$z2, z2axw, fv4ndy), !fv4ndy['closed']) return fv4ndy['currentNSMap'] = q2jw, fv4ndy['localNSMap'] = _cx$s, !0x0;if (o50tb['endElement'](xsqza2, sq$z2, z2axw), _cx$s) {
    for (var c_$ms in _cx$s) o50tb['endPrefixMapping'](c_$ms);
  }
}function fq2jwak(q2zxa, qxw2z, $m_s, w0qa, _cm3$) {
  if (/^(?:script|textarea)$/i['test']($m_s)) {
    var k57b0t = q2zxa['indexOf']('</' + $m_s + '>', qxw2z),
        q2zxa = q2zxa['substring'](qxw2z + 0x1, k57b0t);if (/[&<]/['test'](q2zxa)) return (/^script$/i['test']($m_s) || (q2zxa = q2zxa['replace'](/&#?\w+;/g, w0qa)), _cm3$['characters'](q2zxa, 0x0, q2zxa['length']), k57b0t
    );
  }return qxw2z + 0x1;
}function fh6gi93(j2qa, e8vy1r, _$szp, b75k0t) {
  var _s$x2 = b75k0t[_$szp];return null == _s$x2 && ((_s$x2 = j2qa['lastIndexOf']('</' + _$szp + '>')) < e8vy1r && (_s$x2 = j2qa['lastIndexOf']('</' + _$szp)), b75k0t[_$szp] = _s$x2), _s$x2 < e8vy1r;
}function fn4y81(dfonu, cz_ps) {
  for (var jbwkt0 in dfonu) cz_ps[jbwkt0] = dfonu[jbwkt0];
}function fdfyu4(g96i, _scxz, ih96g3, e8n) {
  var dyv48n = g96i['charAt'](_scxz + 0x2);if ('-' === dyv48n) return '-' !== g96i['charAt'](_scxz + 0x3) ? -0x1 : _scxz < (j07btk = g96i['indexOf']('-->', _scxz + 0x4)) ? (ih96g3['comment'](g96i, _scxz + 0x4, j07btk - _scxz - 0x4), j07btk + 0x3) : (e8n['error']('Unclosed comment'), -0x1);if ('CDATA[' == g96i['substr'](_scxz + 0x3, 0x6)) {
    var j07btk = g96i['indexOf'](']]>', _scxz + 0x9);return ih96g3['startCDATA'](), ih96g3['characters'](g96i, _scxz + 0x9, j07btk - _scxz - 0x9), ih96g3['endCDATA'](), j07btk + 0x3;
  }dyv48n = fu75bt(g96i, _scxz), e8n = dyv48n['length'];if (0x1 < e8n && /!doctype/i['test'](dyv48n[0x0][0x0])) return j07btk = dyv48n[0x1][0x0], g96i = 0x3 < e8n && /^public$/i['test'](dyv48n[0x2][0x0]) && dyv48n[0x3][0x0], _scxz = 0x4 < e8n && dyv48n[0x4][0x0], e8n = dyv48n[e8n - 0x1], (ih96g3['startDTD'](j07btk, g96i && g96i['replace'](/^(['"])(.*?)\1$/, '$2'), _scxz && _scxz['replace'](/^(['"])(.*?)\1$/, '$2')), ih96g3['endDTD'](), e8n['index'] + e8n[0x0]['length']);return -0x1;
}function fobtu57(_2$zs, fodu4, x2aqwj) {
  var z2$xs = _2$zs['indexOf']('?>', fodu4);if (z2$xs) return fodu4 = _2$zs['substring'](fodu4, z2$xs)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), fodu4 ? (fodu4[0x0]['length'], x2aqwj['processingInstruction'](fodu4[0x1], fodu4[0x2]), z2$xs + 0x2) : -0x1;return -0x1;
}function fx_$z2s() {}function fzs$2x(mcs$, sx2q$z) {
  return mcs$['__proto__'] = sx2q$z, mcs$;
}function fu75bt(wat0, g3mp_) {
  var $2szxq,
      _spmc = [],
      kj0wat = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kj0wat['lastIndex'] = g3mp_, kj0wat['exec'](wat0); $2szxq = kj0wat['exec'](wat0);) if (_spmc['push']($2szxq), $2szxq[0x1]) return _spmc;
}var fp3ig9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fyf4nv = new RegExp('[\\-\\.0-9' + fp3ig9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fcgm3p9 = new RegExp('^' + fp3ig9['source'] + fyf4nv['source'] + '*(?::' + fp3ig9['source'] + fyf4nv['source'] + '*)?$'),
    fyv4fn = 0x0,
    fudf4no = 0x1,
    fb0o75 = 0x2,
    fyvd48n = 0x3,
    ffy4dnu = 0x4,
    fudfn4y = 0x5,
    fc_g3mp = 0x6,
    fs_$2zx = 0x7;ff57uo['prototype'] = { 'parse': function (qxsaz2, tjw0k, t0j7bk) {
    var $cm_p3 = this['domBuilder'];$cm_p3['startDocument'](), fn4y81(tjw0k, tjw0k = {}), fu4d5of(qxsaz2, tjw0k, t0j7bk, $cm_p3, this['errorHandler']), $cm_p3['endDocument']();
  } }, fx_$z2s['prototype'] = { 'setTagName': function (wkt0aj) {
    if (!fcgm3p9['test'](wkt0aj)) throw new Error('invalid tagName:' + wkt0aj);this['tagName'] = wkt0aj;
  }, 'add': function (mc$_p3, m$3p, h3ig9) {
    if (!fcgm3p9['test'](mc$_p3)) throw new Error('invalid attribute:' + mc$_p3);this[this['length']++] = { 'qName': mc$_p3, 'value': m$3p, 'offset': h3ig9 };
  }, 'length': 0x0, 'getLocalName': function (w0bk) {
    return this[w0bk]['localName'];
  }, 'getLocator': function (rv18ey) {
    return this[rv18ey]['locator'];
  }, 'getQName': function (i9gp3m) {
    return this[i9gp3m]['qName'];
  }, 'getURI': function (i639gh) {
    return this[i639gh]['uri'];
  }, 'getValue': function (ny4v8) {
    return this[ny4v8]['value'];
  } }, fzs$2x({}, fzs$2x['prototype']) instanceof fzs$2x || (fzs$2x = function (gp39cm, z_$s) {
  function fo5b7u() {}for (z_$s in fo5b7u['prototype'] = z_$s, fo5b7u = new fo5b7u(), gp39cm) fo5b7u[z_$s] = gp39cm[z_$s];return fo5b7u;
}), exports['XMLReader'] = ff57uo;