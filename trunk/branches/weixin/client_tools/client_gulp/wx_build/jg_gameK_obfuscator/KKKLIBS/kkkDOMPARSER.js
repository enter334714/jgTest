var U = wx.$k;
function K1_f35cgy(te7jm) {
  this['options'] = te7jm || { 'locator': {} };
}function K1_baxuwz(k0s92, awbxz, lr_u$) {
  function yf5c3(ei6sk) {
    var cpfg35 = k0s92[ei6sk];!cpfg35 && vwbno && (cpfg35 = 0x2 == k0s92['length'] ? function (p5g) {
      k0s92(ei6sk, p5g);
    } : k0s92), lxa$ud[ei6sk] = cpfg35 && function (g3r_) {
      cpfg35('[xmldom ' + ei6sk + ']\t' + g3r_ + K1_g53fy(lr_u$));
    } || function () {};
  }if (!k0s92) {
    if (awbxz instanceof K1_ovqwn1) return awbxz;k0s92 = awbxz;
  }var lxa$ud = {},
      vwbno = k0s92 instanceof Function;return lr_u$ = lr_u$ || {}, yf5c3('warning'), yf5c3('error'), yf5c3('fatalError'), lxa$ud;
}function K1_ovqwn1() {
  this['cdata'] = !0x1;
}function K1_a$xzu(qn018v, lxazbu) {
  lxazbu['lineNumber'] = qn018v['lineNumber'], lxazbu['columnNumber'] = qn018v['columnNumber'];
}function K1_g53fy(wbvn1) {
  return wbvn1 ? '\x0a@' + (wbvn1['systemId'] || '') + '#[line:' + wbvn1['lineNumber'] + ',col:' + wbvn1['columnNumber'] + ']' : void 0x0;
}function K1_$xz(oq1v0, y3cg5f, _5$rdp) {
  return 'string' == typeof oq1v0 ? oq1v0['substr'](y3cg5f, _5$rdp) : oq1v0['length'] >= y3cg5f + _5$rdp || y3cg5f ? new java['lang']['String'](oq1v0, y3cg5f, _5$rdp) + '' : oq1v0;
}function K1_theki(zwvxbo, dal_$) {
  zwvxbo['currentElement'] ? zwvxbo['currentElement']['appendChild'](dal_$) : zwvxbo['doc']['appendChild'](dal_$);
}K1_f35cgy['prototype']['parseFromString'] = function (xluba, _r53gp) {
  var shk629 = this['options'],
      vxbzw = new K1_abwuz(),
      xblua = shk629['domBuilder'] || new K1_ovqwn1(),
      fgc3p = shk629['errorHandler'],
      no1bv = shk629['locator'],
      keshi6 = shk629['xmlns'] || {},
      e7imjt = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return no1bv && xblua['setDocumentLocator'](no1bv), vxbzw['errorHandler'] = K1_baxuwz(fgc3p, xblua, no1bv), vxbzw['domBuilder'] = shk629['domBuilder'] || xblua, /\/x?html?$/['test'](_r53gp) && (e7imjt['nbsp'] = '\u00a0', e7imjt['copy'] = '©', keshi6[''] = 'http://www.w3.org/1999/xhtml'), keshi6['xml'] = keshi6['xml'] || 'http://www.w3.org/XML/1998/namespace', xluba ? vxbzw['parse'](xluba, keshi6, e7imjt) : vxbzw['errorHandler']['error']('invalid doc source'), xblua['doc'];
}, K1_ovqwn1['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_k896s2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rld_$, zxwaub, k6s98, xwzboa) {
    var lpd = this['doc'],
        luxa$ = lpd['createElementNS'](rld_$, k6s98 || zxwaub),
        al$_d = xwzboa['length'];K1_theki(this, luxa$), this['currentElement'] = luxa$, this['locator'] && K1_a$xzu(this['locator'], luxa$);for (var l$_pdr = 0x0; al$_d > l$_pdr; l$_pdr++) {
      var rld_$ = xwzboa['getURI'](l$_pdr),
          rp_d5$ = xwzboa['getValue'](l$_pdr),
          k6s98 = xwzboa['getQName'](l$_pdr),
          $d_5rp = lpd['createAttributeNS'](rld_$, k6s98);this['locator'] && K1_a$xzu(xwzboa['getLocator'](l$_pdr), $d_5rp), $d_5rp['value'] = $d_5rp['nodeValue'] = rp_d5$, luxa$['setAttributeNode']($d_5rp);
    }
  }, 'endElement': function () {
    {
      var zlaxu = this['currentElement'];zlaxu['tagName'];
    }this['currentElement'] = zlaxu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ad$u_l, bxawzo) {
    var r$d5p_ = this['doc']['createProcessingInstruction'](ad$u_l, bxawzo);this['locator'] && K1_a$xzu(this['locator'], r$d5p_), K1_theki(this, r$d5p_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k90s82) {
    if (k90s82 = K1_$xz['apply'](this, arguments)) {
      if (this['cdata']) var e7mtj = this['doc']['createCDATASection'](k90s82);else var e7mtj = this['doc']['createTextNode'](k90s82);this['currentElement'] ? this['currentElement']['appendChild'](e7mtj) : /^\s*$/['test'](k90s82) && this['doc']['appendChild'](e7mtj), this['locator'] && K1_a$xzu(this['locator'], e7mtj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zbo1w) {
    (this['locator'] = zbo1w) && (zbo1w['lineNumber'] = 0x0);
  }, 'comment': function (ozb1wv) {
    ozb1wv = K1_$xz['apply'](this, arguments);var d5r_3p = this['doc']['createComment'](ozb1wv);this['locator'] && K1_a$xzu(this['locator'], d5r_3p), K1_theki(this, d5r_3p);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hetik, zbwax, k2h9s6) {
    var e6ihtk = this['doc']['implementation'];if (e6ihtk && e6ihtk['createDocumentType']) {
      var u$alz = e6ihtk['createDocumentType'](hetik, zbwax, k2h9s6);this['locator'] && K1_a$xzu(this['locator'], u$alz), K1_theki(this, u$alz);
    }
  }, 'warning': function ($lprd_) {
    console['warn']('[xmldom warning]\t' + $lprd_, K1_g53fy(this['locator']));
  }, 'error': function (zo1bw) {
    console['error']('[xmldom error]\t' + zo1bw, K1_g53fy(this['locator']));
  }, 'fatalError': function (n10qv) {
    throw console['error']('[xmldom fatalError]\t' + n10qv, K1_g53fy(this['locator'])), n10qv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j7emit) {
  K1_ovqwn1['prototype'][j7emit] = function () {
    return null;
  };
});var K1_abwuz = require('./kkkSAX')['XMLReader'],
    K1_k896s2 = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_f35cgy;