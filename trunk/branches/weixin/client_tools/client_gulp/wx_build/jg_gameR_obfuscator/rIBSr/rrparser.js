var I = wx.$R;
function r__h5cu6(q7gpe) {
  this['options'] = q7gpe || { 'locator': {} };
}function r_d5cn6(xt3z2, t32sz, chf5n6) {
  function tzs2(cfqdp) {
    var w8koym = xt3z2[cfqdp];!w8koym && fd5nc6 && (w8koym = 0x2 == xt3z2['length'] ? function (cpnqd) {
      xt3z2(cfqdp, cpnqd);
    } : xt3z2), lts3v[cfqdp] = w8koym && function (joiyx2) {
      w8koym('[xmldom ' + cfqdp + ']\t' + joiyx2 + r_b1a4$9(chf5n6));
    } || function () {};
  }if (!xt3z2) {
    if (t32sz instanceof r_s3ltzv) return t32sz;xt3z2 = t32sz;
  }var lts3v = {},
      fd5nc6 = xt3z2 instanceof Function;return chf5n6 = chf5n6 || {}, tzs2('warning'), tzs2('error'), tzs2('fatalError'), lts3v;
}function r_s3ltzv() {
  this['cdata'] = !0x1;
}function r_eg7wr(edpqg7, oik8w) {
  oik8w['lineNumber'] = edpqg7['lineNumber'], oik8w['columnNumber'] = edpqg7['columnNumber'];
}function r_b1a4$9(wyko8i) {
  return wyko8i ? '\x0a@' + (wyko8i['systemId'] || '') + '#[line:' + wyko8i['lineNumber'] + ',col:' + wyko8i['columnNumber'] + ']' : void 0x0;
}function r_pdqg7e(f65cnd, h65c_u, pcf5n) {
  return 'string' == typeof f65cnd ? f65cnd['substr'](h65c_u, pcf5n) : f65cnd['length'] >= h65c_u + pcf5n || h65c_u ? new java['lang']['String'](f65cnd, h65c_u, pcf5n) + '' : f65cnd;
}function r_zx2isj(a1u9$b, k8i) {
  a1u9$b['currentElement'] ? a1u9$b['currentElement']['appendChild'](k8i) : a1u9$b['doc']['appendChild'](k8i);
}r__h5cu6['prototype']['parseFromString'] = function (fcdpqn, buh1) {
  var o8ykw = this['options'],
      mgew = new r_lzsvt3(),
      s0vtl = o8ykw['domBuilder'] || new r_s3ltzv(),
      u156 = o8ykw['errorHandler'],
      r7mewg = o8ykw['locator'],
      hu5c_ = o8ykw['xmlns'] || {},
      mr7wgk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return r7mewg && s0vtl['setDocumentLocator'](r7mewg), mgew['errorHandler'] = r_d5cn6(u156, s0vtl, r7mewg), mgew['domBuilder'] = o8ykw['domBuilder'] || s0vtl, /\/x?html?$/['test'](buh1) && (mr7wgk['nbsp'] = '\u00a0', mr7wgk['copy'] = '©', hu5c_[''] = 'http://www.w3.org/1999/xhtml'), hu5c_['xml'] = hu5c_['xml'] || 'http://www.w3.org/XML/1998/namespace', fcdpqn ? mgew['parse'](fcdpqn, hu5c_, mr7wgk) : mgew['errorHandler']['error']('invalid doc source'), s0vtl['doc'];
}, r_s3ltzv['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_ahb_1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (kw8rmy, _6h51, u9b, t3vszl) {
    var mo8kyw = this['doc'],
        slvt30 = mo8kyw['createElementNS'](kw8rmy, u9b || _6h51),
        iokjy8 = t3vszl['length'];r_zx2isj(this, slvt30), this['currentElement'] = slvt30, this['locator'] && r_eg7wr(this['locator'], slvt30);for (var $1_ = 0x0; iokjy8 > $1_; $1_++) {
      var kw8rmy = t3vszl['getURI']($1_),
          ojixz = t3vszl['getValue']($1_),
          u9b = t3vszl['getQName']($1_),
          szx2j = mo8kyw['createAttributeNS'](kw8rmy, u9b);this['locator'] && r_eg7wr(t3vszl['getLocator']($1_), szx2j), szx2j['value'] = szx2j['nodeValue'] = ojixz, slvt30['setAttributeNode'](szx2j);
    }
  }, 'endElement': function () {
    {
      var qgfpde = this['currentElement'];qgfpde['tagName'];
    }this['currentElement'] = qgfpde['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dqfgp, ba9u1) {
    var defpnq = this['doc']['createProcessingInstruction'](dqfgp, ba9u1);this['locator'] && r_eg7wr(this['locator'], defpnq), r_zx2isj(this, defpnq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (pdqcf) {
    if (pdqcf = r_pdqg7e['apply'](this, arguments)) {
      if (this['cdata']) var _6ha = this['doc']['createCDATASection'](pdqcf);else var _6ha = this['doc']['createTextNode'](pdqcf);this['currentElement'] ? this['currentElement']['appendChild'](_6ha) : /^\s*$/['test'](pdqcf) && this['doc']['appendChild'](_6ha), this['locator'] && r_eg7wr(this['locator'], _6ha);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (regm7q) {
    (this['locator'] = regm7q) && (regm7q['lineNumber'] = 0x0);
  }, 'comment': function (mrw8y) {
    mrw8y = r_pdqg7e['apply'](this, arguments);var _h56uc = this['doc']['createComment'](mrw8y);this['locator'] && r_eg7wr(this['locator'], _h56uc), r_zx2isj(this, _h56uc);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fndepq, u_c5, c5fndp) {
    var l3ztvs = this['doc']['implementation'];if (l3ztvs && l3ztvs['createDocumentType']) {
      var a19u$b = l3ztvs['createDocumentType'](fndepq, u_c5, c5fndp);this['locator'] && r_eg7wr(this['locator'], a19u$b), r_zx2isj(this, a19u$b);
    }
  }, 'warning': function (gme7q) {
    console['warn']('[xmldom warning]\t' + gme7q, r_b1a4$9(this['locator']));
  }, 'error': function (joxi8) {
    console['error']('[xmldom error]\t' + joxi8, r_b1a4$9(this['locator']));
  }, 'fatalError': function (jt2xs) {
    throw console['error']('[xmldom fatalError]\t' + jt2xs, r_b1a4$9(this['locator'])), jt2xs;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w7ermg) {
  r_s3ltzv['prototype'][w7ermg] = function () {
    return null;
  };
});var r_lzsvt3 = require('./rS12r')['XMLReader'],
    r_ahb_1 = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r__h5cu6;