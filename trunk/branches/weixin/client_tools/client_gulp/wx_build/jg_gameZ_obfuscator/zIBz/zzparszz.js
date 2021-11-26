var B = wx.$z;
function zkzyodt(rbd8k) {
  this['options'] = rbd8k || { 'locator': {} };
}function znim7v(bkody, ytdzok, b_kr8y) {
  function vfl6n7(bdk8yr) {
    var hsx = bkody[bdk8yr];!hsx && rb58_ && (hsx = 0x2 == bkody['length'] ? function (mq3$ij) {
      bkody(bdk8yr, mq3$ij);
    } : bkody), mlnv7[bdk8yr] = hsx && function (f4hp6g) {
      hsx('[xmldom ' + bdk8yr + ']\t' + f4hp6g + zytokb(b_kr8y));
    } || function () {};
  }if (!bkody) {
    if (ytdzok instanceof zvin) return ytdzok;bkody = ytdzok;
  }var mlnv7 = {},
      rb58_ = bkody instanceof Function;return b_kr8y = b_kr8y || {}, vfl6n7('warning'), vfl6n7('error'), vfl6n7('fatalError'), mlnv7;
}function zvin() {
  this['cdata'] = !0x1;
}function zazotd(ybod8k, ry_8) {
  ry_8['lineNumber'] = ybod8k['lineNumber'], ry_8['columnNumber'] = ybod8k['columnNumber'];
}function zytokb(xeszta) {
  return xeszta ? '\x0a@' + (xeszta['systemId'] || '') + '#[line:' + xeszta['lineNumber'] + ',col:' + xeszta['columnNumber'] + ']' : void 0x0;
}function zotsez(zktdoy, okby8, sazetx) {
  return 'string' == typeof zktdoy ? zktdoy['substr'](okby8, sazetx) : zktdoy['length'] >= okby8 + sazetx || okby8 ? new java['lang']['String'](zktdoy, okby8, sazetx) + '' : zktdoy;
}function zyotdez(stxza, koydb) {
  stxza['currentElement'] ? stxza['currentElement']['appendChild'](koydb) : stxza['doc']['appendChild'](koydb);
}zkzyodt['prototype']['parseFromString'] = function (pg1h, xg1h9) {
  var g6f4pv = this['options'],
      ytkodz = new zas91e(),
      nimq3 = g6f4pv['domBuilder'] || new zvin(),
      m3qn = g6f4pv['errorHandler'],
      ryd8bk = g6f4pv['locator'],
      ezsxa = g6f4pv['xmlns'] || {},
      fv6ln = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ryd8bk && nimq3['setDocumentLocator'](ryd8bk), ytkodz['errorHandler'] = znim7v(m3qn, nimq3, ryd8bk), ytkodz['domBuilder'] = g6f4pv['domBuilder'] || nimq3, /\/x?html?$/['test'](xg1h9) && (fv6ln['nbsp'] = '\u00a0', fv6ln['copy'] = '©', ezsxa[''] = 'http://www.w3.org/1999/xhtml'), ezsxa['xml'] = ezsxa['xml'] || 'http://www.w3.org/XML/1998/namespace', pg1h ? ytkodz['parse'](pg1h, ezsxa, fv6ln) : ytkodz['errorHandler']['error']('invalid doc source'), nimq3['doc'];
}, zvin['prototype'] = { 'startDocument': function () {
    this['doc'] = new zzext()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (r2_8u, fli7n, by8r, n7vlm) {
    var mi$j3 = this['doc'],
        mq37n = mi$j3['createElementNS'](r2_8u, by8r || fli7n),
        ph = n7vlm['length'];zyotdez(this, mq37n), this['currentElement'] = mq37n, this['locator'] && zazotd(this['locator'], mq37n);for (var $imq = 0x0; ph > $imq; $imq++) {
      var r2_8u = n7vlm['getURI']($imq),
          gp4v6 = n7vlm['getValue']($imq),
          by8r = n7vlm['getQName']($imq),
          f46gl = mi$j3['createAttributeNS'](r2_8u, by8r);this['locator'] && zazotd(n7vlm['getLocator']($imq), f46gl), f46gl['value'] = f46gl['nodeValue'] = gp4v6, mq37n['setAttributeNode'](f46gl);
    }
  }, 'endElement': function () {
    {
      var oktyd = this['currentElement'];oktyd['tagName'];
    }this['currentElement'] = oktyd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qm3$7, dybkr8) {
    var mni3l = this['doc']['createProcessingInstruction'](qm3$7, dybkr8);this['locator'] && zazotd(this['locator'], mni3l), zyotdez(this, mni3l);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hp46f) {
    if (hp46f = zotsez['apply'](this, arguments)) {
      if (this['cdata']) var otzykd = this['doc']['createCDATASection'](hp46f);else var otzykd = this['doc']['createTextNode'](hp46f);this['currentElement'] ? this['currentElement']['appendChild'](otzykd) : /^\s*$/['test'](hp46f) && this['doc']['appendChild'](otzykd), this['locator'] && zazotd(this['locator'], otzykd);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (w0_52u) {
    (this['locator'] = w0_52u) && (w0_52u['lineNumber'] = 0x0);
  }, 'comment': function (nviml7) {
    nviml7 = zotsez['apply'](this, arguments);var xa9esz = this['doc']['createComment'](nviml7);this['locator'] && zazotd(this['locator'], xa9esz), zyotdez(this, xa9esz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (p49h, u852r, e9sxaz) {
    var y_kr = this['doc']['implementation'];if (y_kr && y_kr['createDocumentType']) {
      var $3imqj = y_kr['createDocumentType'](p49h, u852r, e9sxaz);this['locator'] && zazotd(this['locator'], $3imqj), zyotdez(this, $3imqj);
    }
  }, 'warning': function (ur5w2) {
    console['warn']('[xmldom warning]\t' + ur5w2, zytokb(this['locator']));
  }, 'error': function (ktdyb) {
    console['error']('[xmldom error]\t' + ktdyb, zytokb(this['locator']));
  }, 'fatalError': function (azes) {
    throw console['error']('[xmldom fatalError]\t' + azes, zytokb(this['locator'])), azes;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (b28_5r) {
  zvin['prototype'][b28_5r] = function () {
    return null;
  };
});var zas91e = require('./zzczz')['XMLReader'],
    zzext = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zkzyodt;