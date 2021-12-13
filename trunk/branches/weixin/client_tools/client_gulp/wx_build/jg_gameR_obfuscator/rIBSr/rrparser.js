var I = wx.$R;
function r_fhn5(z3t) {
  this['options'] = z3t || { 'locator': {} };
}function r_ua9b$(xji8oy, gkw7mr, rmkg7w) {
  function _a1b$(mk8ryw) {
    var u_h65c = xji8oy[mk8ryw];!u_h65c && iwky8 && (u_h65c = 0x2 == xji8oy['length'] ? function (mr7eg) {
      xji8oy(mk8ryw, mr7eg);
    } : xji8oy), eqfpdg[mk8ryw] = u_h65c && function (jyio8) {
      u_h65c('[xmldom ' + mk8ryw + ']\t' + jyio8 + r_rpe(rmkg7w));
    } || function () {};
  }if (!xji8oy) {
    if (gkw7mr instanceof r_ba$_1u) return gkw7mr;xji8oy = gkw7mr;
  }var eqfpdg = {},
      iwky8 = xji8oy instanceof Function;return rmkg7w = rmkg7w || {}, _a1b$('warning'), _a1b$('error'), _a1b$('fatalError'), eqfpdg;
}function r_ba$_1u() {
  this['cdata'] = !0x1;
}function r_a9b41$(f5ncd, weg7m) {
  weg7m['lineNumber'] = f5ncd['lineNumber'], weg7m['columnNumber'] = f5ncd['columnNumber'];
}function r_rpe(b$ua_1) {
  return b$ua_1 ? '\x0a@' + (b$ua_1['systemId'] || '') + '#[line:' + b$ua_1['lineNumber'] + ',col:' + b$ua_1['columnNumber'] + ']' : void 0x0;
}function r_h61_u5(zo2ix, zj2ox, ab$19u) {
  return 'string' == typeof zo2ix ? zo2ix['substr'](zj2ox, ab$19u) : zo2ix['length'] >= zj2ox + ab$19u || zj2ox ? new java['lang']['String'](zo2ix, zj2ox, ab$19u) + '' : zo2ix;
}function r_x2t3zs(gdpf, g7qper) {
  gdpf['currentElement'] ? gdpf['currentElement']['appendChild'](g7qper) : gdpf['doc']['appendChild'](g7qper);
}r_fhn5['prototype']['parseFromString'] = function (a4b1$, c5h_6u) {
  var _5hn6 = this['options'],
      tsj = new r_zl2st(),
      zsji2x = _5hn6['domBuilder'] || new r_ba$_1u(),
      ojy2ix = _5hn6['errorHandler'],
      ub1a$_ = _5hn6['locator'],
      a61h_ = _5hn6['xmlns'] || {},
      u1_$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ub1a$_ && zsji2x['setDocumentLocator'](ub1a$_), tsj['errorHandler'] = r_ua9b$(ojy2ix, zsji2x, ub1a$_), tsj['domBuilder'] = _5hn6['domBuilder'] || zsji2x, /\/x?html?$/['test'](c5h_6u) && (u1_$['nbsp'] = '\u00a0', u1_$['copy'] = '©', a61h_[''] = 'http://www.w3.org/1999/xhtml'), a61h_['xml'] = a61h_['xml'] || 'http://www.w3.org/XML/1998/namespace', a4b1$ ? tsj['parse'](a4b1$, a61h_, u1_$) : tsj['errorHandler']['error']('invalid doc source'), zsji2x['doc'];
}, r_ba$_1u['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_b$49a1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (zi2sx, xsjz2t, grkmw, x2yoij) {
    var qpedg = this['doc'],
        b$u1a = qpedg['createElementNS'](zi2sx, grkmw || xsjz2t),
        om8kwy = x2yoij['length'];r_x2t3zs(this, b$u1a), this['currentElement'] = b$u1a, this['locator'] && r_a9b41$(this['locator'], b$u1a);for (var ab1$u_ = 0x0; om8kwy > ab1$u_; ab1$u_++) {
      var zi2sx = x2yoij['getURI'](ab1$u_),
          yxoji8 = x2yoij['getValue'](ab1$u_),
          grkmw = x2yoij['getQName'](ab1$u_),
          fh6nc = qpedg['createAttributeNS'](zi2sx, grkmw);this['locator'] && r_a9b41$(x2yoij['getLocator'](ab1$u_), fh6nc), fh6nc['value'] = fh6nc['nodeValue'] = yxoji8, b$u1a['setAttributeNode'](fh6nc);
    }
  }, 'endElement': function () {
    {
      var o8jxiy = this['currentElement'];o8jxiy['tagName'];
    }this['currentElement'] = o8jxiy['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (f5n, a1h_u6) {
    var ijsxz2 = this['doc']['createProcessingInstruction'](f5n, a1h_u6);this['locator'] && r_a9b41$(this['locator'], ijsxz2), r_x2t3zs(this, ijsxz2);
  }, 'ignorableWhitespace': function () {}, 'characters': function (q7megr) {
    if (q7megr = r_h61_u5['apply'](this, arguments)) {
      if (this['cdata']) var iowyk8 = this['doc']['createCDATASection'](q7megr);else var iowyk8 = this['doc']['createTextNode'](q7megr);this['currentElement'] ? this['currentElement']['appendChild'](iowyk8) : /^\s*$/['test'](q7megr) && this['doc']['appendChild'](iowyk8), this['locator'] && r_a9b41$(this['locator'], iowyk8);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ge7rwm) {
    (this['locator'] = ge7rwm) && (ge7rwm['lineNumber'] = 0x0);
  }, 'comment': function ($aub1_) {
    $aub1_ = r_h61_u5['apply'](this, arguments);var woyi8k = this['doc']['createComment']($aub1_);this['locator'] && r_a9b41$(this['locator'], woyi8k), r_x2t3zs(this, woyi8k);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dp7, fc6n5, hnfc5) {
    var jx2is = this['doc']['implementation'];if (jx2is && jx2is['createDocumentType']) {
      var k8iywo = jx2is['createDocumentType'](dp7, fc6n5, hnfc5);this['locator'] && r_a9b41$(this['locator'], k8iywo), r_x2t3zs(this, k8iywo);
    }
  }, 'warning': function (qed7gp) {
    console['warn']('[xmldom warning]\t' + qed7gp, r_rpe(this['locator']));
  }, 'error': function (prq7e) {
    console['error']('[xmldom error]\t' + prq7e, r_rpe(this['locator']));
  }, 'fatalError': function ($uba19) {
    throw console['error']('[xmldom fatalError]\t' + $uba19, r_rpe(this['locator'])), $uba19;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hu5_1) {
  r_ba$_1u['prototype'][hu5_1] = function () {
    return null;
  };
});var r_zl2st = require('./rS12r')['XMLReader'],
    r_b$49a1 = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_fhn5;