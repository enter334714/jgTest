var m = wx.$g;
function go36z2d(k1wyx) {
  this['options'] = k1wyx || { 'locator': {} };
}function gkwye1v(zo3td, drz26j, pf_0t) {
  function dtf34(to4fd) {
    var s89gcl = zo3td[to4fd];!s89gcl && _ptf && (s89gcl = 0x2 == zo3td['length'] ? function (hkx1wy) {
      zo3td(to4fd, hkx1wy);
    } : zo3td), ahkxi[to4fd] = s89gcl && function (wev1) {
      s89gcl('[xmldom ' + to4fd + ']\t' + wev1 + ge7wvq(pf_0t));
    } || function () {};
  }if (!zo3td) {
    if (drz26j instanceof gi5a1xh) return drz26j;zo3td = drz26j;
  }var ahkxi = {},
      _ptf = zo3td instanceof Function;return pf_0t = pf_0t || {}, dtf34('warning'), dtf34('error'), dtf34('fatalError'), ahkxi;
}function gi5a1xh() {
  this['cdata'] = !0x1;
}function gp0_bf5(xpa5, wekh) {
  wekh['lineNumber'] = xpa5['lineNumber'], wekh['columnNumber'] = xpa5['columnNumber'];
}function ge7wvq(z2rj$6) {
  return z2rj$6 ? '\x0a@' + (z2rj$6['systemId'] || '') + '#[line:' + z2rj$6['lineNumber'] + ',col:' + z2rj$6['columnNumber'] + ']' : void 0x0;
}function gevkyw7(u6rmj$, f3_, b_i0p5) {
  return 'string' == typeof u6rmj$ ? u6rmj$['substr'](f3_, b_i0p5) : u6rmj$['length'] >= f3_ + b_i0p5 || f3_ ? new java['lang']['String'](u6rmj$, f3_, b_i0p5) + '' : u6rmj$;
}function gxyh1w(dt3f4, x5ibh) {
  dt3f4['currentElement'] ? dt3f4['currentElement']['appendChild'](x5ibh) : dt3f4['doc']['appendChild'](x5ibh);
}go36z2d['prototype']['parseFromString'] = function (r6jm$, q7yge) {
  var eywhk = this['options'],
      f34t0_ = new gqc8gs(),
      pbi50_ = eywhk['domBuilder'] || new gi5a1xh(),
      p5xbia = eywhk['errorHandler'],
      kyhe = eywhk['locator'],
      tf0_p = eywhk['xmlns'] || {},
      d62j = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kyhe && pbi50_['setDocumentLocator'](kyhe), f34t0_['errorHandler'] = gkwye1v(p5xbia, pbi50_, kyhe), f34t0_['domBuilder'] = eywhk['domBuilder'] || pbi50_, /\/x?html?$/['test'](q7yge) && (d62j['nbsp'] = '\u00a0', d62j['copy'] = '©', tf0_p[''] = 'http://www.w3.org/1999/xhtml'), tf0_p['xml'] = tf0_p['xml'] || 'http://www.w3.org/XML/1998/namespace', r6jm$ ? f34t0_['parse'](r6jm$, tf0_p, d62j) : f34t0_['errorHandler']['error']('invalid doc source'), pbi50_['doc'];
}, gi5a1xh['prototype'] = { 'startDocument': function () {
    this['doc'] = new gd623o()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cqslg8, w7evk, tp0_, ahibx5) {
    var $ru6j2 = this['doc'],
        yqwe = $ru6j2['createElementNS'](cqslg8, tp0_ || w7evk),
        gsqcl8 = ahibx5['length'];gxyh1w(this, yqwe), this['currentElement'] = yqwe, this['locator'] && gp0_bf5(this['locator'], yqwe);for (var $6jrum = 0x0; gsqcl8 > $6jrum; $6jrum++) {
      var cqslg8 = ahibx5['getURI']($6jrum),
          tfdo43 = ahibx5['getValue']($6jrum),
          tp0_ = ahibx5['getQName']($6jrum),
          ey = $ru6j2['createAttributeNS'](cqslg8, tp0_);this['locator'] && gp0_bf5(ahibx5['getLocator']($6jrum), ey), ey['value'] = ey['nodeValue'] = tfdo43, yqwe['setAttributeNode'](ey);
    }
  }, 'endElement': function () {
    {
      var ls8qg = this['currentElement'];ls8qg['tagName'];
    }this['currentElement'] = ls8qg['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (e7vgqc, r$jum6) {
    var vkew1y = this['doc']['createProcessingInstruction'](e7vgqc, r$jum6);this['locator'] && gp0_bf5(this['locator'], vkew1y), gxyh1w(this, vkew1y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zdr26) {
    if (zdr26 = gevkyw7['apply'](this, arguments)) {
      if (this['cdata']) var fo4_t = this['doc']['createCDATASection'](zdr26);else var fo4_t = this['doc']['createTextNode'](zdr26);this['currentElement'] ? this['currentElement']['appendChild'](fo4_t) : /^\s*$/['test'](zdr26) && this['doc']['appendChild'](fo4_t), this['locator'] && gp0_bf5(this['locator'], fo4_t);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tbfp0_) {
    (this['locator'] = tbfp0_) && (tbfp0_['lineNumber'] = 0x0);
  }, 'comment': function (r2dz6) {
    r2dz6 = gevkyw7['apply'](this, arguments);var qe7vyw = this['doc']['createComment'](r2dz6);this['locator'] && gp0_bf5(this['locator'], qe7vyw), gxyh1w(this, qe7vyw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mj6ur$, pb05i, u6m) {
    var xwky = this['doc']['implementation'];if (xwky && xwky['createDocumentType']) {
      var kwhye = xwky['createDocumentType'](mj6ur$, pb05i, u6m);this['locator'] && gp0_bf5(this['locator'], kwhye), gxyh1w(this, kwhye);
    }
  }, 'warning': function (r6zod2) {
    console['warn']('[xmldom warning]\t' + r6zod2, ge7wvq(this['locator']));
  }, 'error': function (j6m$ru) {
    console['error']('[xmldom error]\t' + j6m$ru, ge7wvq(this['locator']));
  }, 'fatalError': function (qcgl8) {
    throw console['error']('[xmldom fatalError]\t' + qcgl8, ge7wvq(this['locator'])), qcgl8;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ql) {
  gi5a1xh['prototype'][ql] = function () {
    return null;
  };
});var gqc8gs = require('./gggsax')['XMLReader'],
    gd623o = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = go36z2d;