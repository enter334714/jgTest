var c = wx.$a;
function gvnhz6k(hsvzjn) {
  this['options'] = hsvzjn || { 'locator': {} };
}function gvk(xgf2s, fx1u2, k6hdz) {
  function $mylbc(tpr75) {
    var vjkhzn = xgf2s[tpr75];!vjkhzn && ou4e_ && (vjkhzn = 0x2 == xgf2s['length'] ? function (t7q5r8) {
      xgf2s(tpr75, t7q5r8);
    } : xgf2s), k86dqt[tpr75] = vjkhzn && function (zkd8q6) {
      vjkhzn('[xmldom ' + tpr75 + ']\t' + zkd8q6 + ghxvjsn(k6hdz));
    } || function () {};
  }if (!xgf2s) {
    if (fx1u2 instanceof gt85r) return fx1u2;xgf2s = fx1u2;
  }var k86dqt = {},
      ou4e_ = xgf2s instanceof Function;return k6hdz = k6hdz || {}, $mylbc('warning'), $mylbc('error'), $mylbc('fatalError'), k86dqt;
}function gt85r() {
  this['cdata'] = !0x1;
}function gk8qz6d(fu21gx, yo0bc$) {
  yo0bc$['lineNumber'] = fu21gx['lineNumber'], yo0bc$['columnNumber'] = fu21gx['columnNumber'];
}function ghxvjsn(jxvnsh) {
  return jxvnsh ? '\x0a@' + (jxvnsh['systemId'] || '') + '#[line:' + jxvnsh['lineNumber'] + ',col:' + jxvnsh['columnNumber'] + ']' : void 0x0;
}function gguf1w(vzjhsn, gu_2, hkvzd) {
  return 'string' == typeof vzjhsn ? vzjhsn['substr'](gu_2, hkvzd) : vzjhsn['length'] >= gu_2 + hkvzd || gu_2 ? new java['lang']['String'](vzjhsn, gu_2, hkvzd) + '' : vzjhsn;
}function gmclb$(xfsjn1, znk6v) {
  xfsjn1['currentElement'] ? xfsjn1['currentElement']['appendChild'](znk6v) : xfsjn1['doc']['appendChild'](znk6v);
}gvnhz6k['prototype']['parseFromString'] = function (zhjvkn, rt8d6q) {
  var oby0 = this['options'],
      szvh = new gjvzsn(),
      vsfnjx = oby0['domBuilder'] || new gt85r(),
      sxjhvn = oby0['errorHandler'],
      _eoy04 = oby0['locator'],
      trd8q5 = oby0['xmlns'] || {},
      kqhdz6 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _eoy04 && vsfnjx['setDocumentLocator'](_eoy04), szvh['errorHandler'] = gvk(sxjhvn, vsfnjx, _eoy04), szvh['domBuilder'] = oby0['domBuilder'] || vsfnjx, /\/x?html?$/['test'](rt8d6q) && (kqhdz6['nbsp'] = '\u00a0', kqhdz6['copy'] = '©', trd8q5[''] = 'http://www.w3.org/1999/xhtml'), trd8q5['xml'] = trd8q5['xml'] || 'http://www.w3.org/XML/1998/namespace', zhjvkn ? szvh['parse'](zhjvkn, trd8q5, kqhdz6) : szvh['errorHandler']['error']('invalid doc source'), vsfnjx['doc'];
}, gt85r['prototype'] = { 'startDocument': function () {
    this['doc'] = new gycl0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (eu_gw4, dvh6z, hvd, o_e04) {
    var xjhnsv = this['doc'],
        t86rdq = xjhnsv['createElementNS'](eu_gw4, hvd || dvh6z),
        hzn = o_e04['length'];gmclb$(this, t86rdq), this['currentElement'] = t86rdq, this['locator'] && gk8qz6d(this['locator'], t86rdq);for (var sf1g2x = 0x0; hzn > sf1g2x; sf1g2x++) {
      var eu_gw4 = o_e04['getURI'](sf1g2x),
          e_4uo = o_e04['getValue'](sf1g2x),
          hvd = o_e04['getQName'](sf1g2x),
          _c40o = xjhnsv['createAttributeNS'](eu_gw4, hvd);this['locator'] && gk8qz6d(o_e04['getLocator'](sf1g2x), _c40o), _c40o['value'] = _c40o['nodeValue'] = e_4uo, t86rdq['setAttributeNode'](_c40o);
    }
  }, 'endElement': function () {
    {
      var u_w = this['currentElement'];u_w['tagName'];
    }this['currentElement'] = u_w['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (lcy$b0, tp7r35) {
    var bm$cla = this['doc']['createProcessingInstruction'](lcy$b0, tp7r35);this['locator'] && gk8qz6d(this['locator'], bm$cla), gmclb$(this, bm$cla);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_uow4e) {
    if (_uow4e = gguf1w['apply'](this, arguments)) {
      if (this['cdata']) var sjhvzn = this['doc']['createCDATASection'](_uow4e);else var sjhvzn = this['doc']['createTextNode'](_uow4e);this['currentElement'] ? this['currentElement']['appendChild'](sjhvzn) : /^\s*$/['test'](_uow4e) && this['doc']['appendChild'](sjhvzn), this['locator'] && gk8qz6d(this['locator'], sjhvzn);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b$mal) {
    (this['locator'] = b$mal) && (b$mal['lineNumber'] = 0x0);
  }, 'comment': function (l$abm9) {
    l$abm9 = gguf1w['apply'](this, arguments);var wu_4e = this['doc']['createComment'](l$abm9);this['locator'] && gk8qz6d(this['locator'], wu_4e), gmclb$(this, wu_4e);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mab$, nhszvj, _4ewg) {
    var y_0o4c = this['doc']['implementation'];if (y_0o4c && y_0o4c['createDocumentType']) {
      var hjnszv = y_0o4c['createDocumentType'](mab$, nhszvj, _4ewg);this['locator'] && gk8qz6d(this['locator'], hjnszv), gmclb$(this, hjnszv);
    }
  }, 'warning': function (_4y0o) {
    console['warn']('[xmldom warning]\t' + _4y0o, ghxvjsn(this['locator']));
  }, 'error': function (f2) {
    console['error']('[xmldom error]\t' + f2, ghxvjsn(this['locator']));
  }, 'fatalError': function (u_w4g) {
    throw console['error']('[xmldom fatalError]\t' + u_w4g, ghxvjsn(this['locator'])), u_w4g;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($ylc) {
  gt85r['prototype'][$ylc] = function () {
    return null;
  };
});var gjvzsn = require('./a1sax')['XMLReader'],
    gycl0 = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gvnhz6k;