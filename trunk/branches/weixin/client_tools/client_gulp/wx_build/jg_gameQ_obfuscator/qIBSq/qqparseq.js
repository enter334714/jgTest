var g = wx.$Q;
function q_pa02(s4h) {
  this['options'] = s4h || { 'locator': {} };
}function q_n6o9m4(ibgvl, jh8wu, bialgp) {
  function z9eo_(alivbg) {
    var ag0lpf = ibgvl[alivbg];!ag0lpf && n4mo69 && (ag0lpf = 0x2 == ibgvl['length'] ? function (jm1h) {
      ibgvl(alivbg, jm1h);
    } : ibgvl), eno6_[alivbg] = ag0lpf && function (ycdk5) {
      ag0lpf('[xmldom ' + alivbg + ']\t' + ycdk5 + q_x302(bialgp));
    } || function () {};
  }if (!ibgvl) {
    if (jh8wu instanceof q_bplgi) return jh8wu;ibgvl = jh8wu;
  }var eno6_ = {},
      n4mo69 = ibgvl instanceof Function;return bialgp = bialgp || {}, z9eo_('warning'), z9eo_('error'), z9eo_('fatalError'), eno6_;
}function q_bplgi() {
  this['cdata'] = !0x1;
}function q_x02f35(e9zr$, czr_) {
  czr_['lineNumber'] = e9zr$['lineNumber'], czr_['columnNumber'] = e9zr$['columnNumber'];
}function q_x302(bfpa) {
  return bfpa ? '\x0a@' + (bfpa['systemId'] || '') + '#[line:' + bfpa['lineNumber'] + ',col:' + bfpa['columnNumber'] + ']' : void 0x0;
}function q_bpalg($oe_z9, f2lpa, _rz) {
  return 'string' == typeof $oe_z9 ? $oe_z9['substr'](f2lpa, _rz) : $oe_z9['length'] >= f2lpa + _rz || f2lpa ? new java['lang']['String']($oe_z9, f2lpa, _rz) + '' : $oe_z9;
}function q_h8swj1(en69_, z$oe9_) {
  en69_['currentElement'] ? en69_['currentElement']['appendChild'](z$oe9_) : en69_['doc']['appendChild'](z$oe9_);
}q_pa02['prototype']['parseFromString'] = function (zcdr_, hm8j41) {
  var _$9ne = this['options'],
      ze9o_ = new q_j81w(),
      o9n64m = _$9ne['domBuilder'] || new q_bplgi(),
      j184hs = _$9ne['errorHandler'],
      lbga = _$9ne['locator'],
      m1h = _$9ne['xmlns'] || {},
      bvga7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lbga && o9n64m['setDocumentLocator'](lbga), ze9o_['errorHandler'] = q_n6o9m4(j184hs, o9n64m, lbga), ze9o_['domBuilder'] = _$9ne['domBuilder'] || o9n64m, /\/x?html?$/['test'](hm8j41) && (bvga7['nbsp'] = '\u00a0', bvga7['copy'] = '©', m1h[''] = 'http://www.w3.org/1999/xhtml'), m1h['xml'] = m1h['xml'] || 'http://www.w3.org/XML/1998/namespace', zcdr_ ? ze9o_['parse'](zcdr_, m1h, bvga7) : ze9o_['errorHandler']['error']('invalid doc source'), o9n64m['doc'];
}, q_bplgi['prototype'] = { 'startDocument': function () {
    this['doc'] = new q_p2lfa0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (galp0, z_cdr$, k2yx35, cyk5t3) {
    var l0pgfa = this['doc'],
        nom964 = l0pgfa['createElementNS'](galp0, k2yx35 || z_cdr$),
        bilvag = cyk5t3['length'];q_h8swj1(this, nom964), this['currentElement'] = nom964, this['locator'] && q_x02f35(this['locator'], nom964);for (var n46h1m = 0x0; bilvag > n46h1m; n46h1m++) {
      var galp0 = cyk5t3['getURI'](n46h1m),
          lbfgp = cyk5t3['getValue'](n46h1m),
          k2yx35 = cyk5t3['getQName'](n46h1m),
          gvblai = l0pgfa['createAttributeNS'](galp0, k2yx35);this['locator'] && q_x02f35(cyk5t3['getLocator'](n46h1m), gvblai), gvblai['value'] = gvblai['nodeValue'] = lbfgp, nom964['setAttributeNode'](gvblai);
    }
  }, 'endElement': function () {
    {
      var x2yk = this['currentElement'];x2yk['tagName'];
    }this['currentElement'] = x2yk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zrktd, er$9_z) {
    var bv7aig = this['doc']['createProcessingInstruction'](zrktd, er$9_z);this['locator'] && q_x02f35(this['locator'], bv7aig), q_h8swj1(this, bv7aig);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_rz9e$) {
    if (_rz9e$ = q_bpalg['apply'](this, arguments)) {
      if (this['cdata']) var bigv7 = this['doc']['createCDATASection'](_rz9e$);else var bigv7 = this['doc']['createTextNode'](_rz9e$);this['currentElement'] ? this['currentElement']['appendChild'](bigv7) : /^\s*$/['test'](_rz9e$) && this['doc']['appendChild'](bigv7), this['locator'] && q_x02f35(this['locator'], bigv7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ialgb) {
    (this['locator'] = ialgb) && (ialgb['lineNumber'] = 0x0);
  }, 'comment': function (drt$z) {
    drt$z = q_bpalg['apply'](this, arguments);var o164mn = this['doc']['createComment'](drt$z);this['locator'] && q_x02f35(this['locator'], o164mn), q_h8swj1(this, o164mn);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (on9_e, lgavb, js4h8) {
    var r$c = this['doc']['implementation'];if (r$c && r$c['createDocumentType']) {
      var af0gpl = r$c['createDocumentType'](on9_e, lgavb, js4h8);this['locator'] && q_x02f35(this['locator'], af0gpl), q_h8swj1(this, af0gpl);
    }
  }, 'warning': function (e_9z) {
    console['warn']('[xmldom warning]\t' + e_9z, q_x302(this['locator']));
  }, 'error': function (qswu8) {
    console['error']('[xmldom error]\t' + qswu8, q_x302(this['locator']));
  }, 'fatalError': function (kcty53) {
    throw console['error']('[xmldom fatalError]\t' + kcty53, q_x302(this['locator'])), kcty53;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (su8wj) {
  q_bplgi['prototype'][su8wj] = function () {
    return null;
  };
});var q_j81w = require('./qS12q')['XMLReader'],
    q_p2lfa0 = exports['DOMImplementation'] = require('./qqDOMq')['DOMImplementation'];exports['XMLSerializer'] = require('./qqDOMq')['XMLSerializer'], exports['DOMParser'] = q_pa02;