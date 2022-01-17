var M = wx.$T;
function tvf9d(pe) {
  this['options'] = pe || { 'locator': {} };
}function tvf9pd$(_0eqyx, arjkbs, rkjbsa) {
  function h5_ywm(qy0e_) {
    var h5 = _0eqyx[qy0e_];!h5 && qfz7eo && (h5 = 0x2 == _0eqyx['length'] ? function (vcd$) {
      _0eqyx(qy0e_, vcd$);
    } : _0eqyx), it2v9[qy0e_] = h5 && function (cvi9) {
      h5('[xmldom ' + qy0e_ + ']\t' + cvi9 + tzeoq0(rkjbsa));
    } || function () {};
  }if (!_0eqyx) {
    if (arjkbs instanceof tn163g8) return arjkbs;_0eqyx = arjkbs;
  }var it2v9 = {},
      qfz7eo = _0eqyx instanceof Function;return rkjbsa = rkjbsa || {}, h5_ywm('warning'), h5_ywm('error'), h5_ywm('fatalError'), it2v9;
}function tn163g8() {
  this['cdata'] = !0x1;
}function tnbgj3(ksrbj, w638) {
  w638['lineNumber'] = ksrbj['lineNumber'], w638['columnNumber'] = ksrbj['columnNumber'];
}function tzeoq0(arjg) {
  return arjg ? '\x0a@' + (arjg['systemId'] || '') + '#[line:' + arjg['lineNumber'] + ',col:' + arjg['columnNumber'] + ']' : void 0x0;
}function tpod7zf(wh_xy, fdz$p, xqyoe) {
  return 'string' == typeof wh_xy ? wh_xy['substr'](fdz$p, xqyoe) : wh_xy['length'] >= fdz$p + xqyoe || fdz$p ? new java['lang']['String'](wh_xy, fdz$p, xqyoe) + '' : wh_xy;
}function tjbagkr(pv$fd, hwm6) {
  pv$fd['currentElement'] ? pv$fd['currentElement']['appendChild'](hwm6) : pv$fd['doc']['appendChild'](hwm6);
}tvf9d['prototype']['parseFromString'] = function (f$dzv, _e0x) {
  var anjgbr = this['options'],
      wmh_y = new toz70eq(),
      bakuj = anjgbr['domBuilder'] || new tn163g8(),
      fezqo = anjgbr['errorHandler'],
      w8h516 = anjgbr['locator'],
      jrgan = anjgbr['xmlns'] || {},
      pvdz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return w8h516 && bakuj['setDocumentLocator'](w8h516), wmh_y['errorHandler'] = tvf9pd$(fezqo, bakuj, w8h516), wmh_y['domBuilder'] = anjgbr['domBuilder'] || bakuj, /\/x?html?$/['test'](_e0x) && (pvdz['nbsp'] = '\u00a0', pvdz['copy'] = '©', jrgan[''] = 'http://www.w3.org/1999/xhtml'), jrgan['xml'] = jrgan['xml'] || 'http://www.w3.org/XML/1998/namespace', f$dzv ? wmh_y['parse'](f$dzv, jrgan, pvdz) : wmh_y['errorHandler']['error']('invalid doc source'), bakuj['doc'];
}, tn163g8['prototype'] = { 'startDocument': function () {
    this['doc'] = new tp7foz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (eozfq, gjbrk, dpv9i, bjsaku) {
    var d$vzf = this['doc'],
        hwm51 = d$vzf['createElementNS'](eozfq, dpv9i || gjbrk),
        vi$c9t = bjsaku['length'];tjbagkr(this, hwm51), this['currentElement'] = hwm51, this['locator'] && tnbgj3(this['locator'], hwm51);for (var hm6w_ = 0x0; vi$c9t > hm6w_; hm6w_++) {
      var eozfq = bjsaku['getURI'](hm6w_),
          id$9vc = bjsaku['getValue'](hm6w_),
          dpv9i = bjsaku['getQName'](hm6w_),
          qo7x0 = d$vzf['createAttributeNS'](eozfq, dpv9i);this['locator'] && tnbgj3(bjsaku['getLocator'](hm6w_), qo7x0), qo7x0['value'] = qo7x0['nodeValue'] = id$9vc, hwm51['setAttributeNode'](qo7x0);
    }
  }, 'endElement': function () {
    {
      var v92ct = this['currentElement'];v92ct['tagName'];
    }this['currentElement'] = v92ct['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (iv29, ngr83) {
    var najgrb = this['doc']['createProcessingInstruction'](iv29, ngr83);this['locator'] && tnbgj3(this['locator'], najgrb), tjbagkr(this, najgrb);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($t9vi) {
    if ($t9vi = tpod7zf['apply'](this, arguments)) {
      if (this['cdata']) var yx0_qm = this['doc']['createCDATASection']($t9vi);else var yx0_qm = this['doc']['createTextNode']($t9vi);this['currentElement'] ? this['currentElement']['appendChild'](yx0_qm) : /^\s*$/['test']($t9vi) && this['doc']['appendChild'](yx0_qm), this['locator'] && tnbgj3(this['locator'], yx0_qm);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (x_hmyw) {
    (this['locator'] = x_hmyw) && (x_hmyw['lineNumber'] = 0x0);
  }, 'comment': function (gr8n) {
    gr8n = tpod7zf['apply'](this, arguments);var r1gn83 = this['doc']['createComment'](gr8n);this['locator'] && tnbgj3(this['locator'], r1gn83), tjbagkr(this, r1gn83);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nrjg8, vpid9, ranbgj) {
    var fz7dop = this['doc']['implementation'];if (fz7dop && fz7dop['createDocumentType']) {
      var mxy0_ = fz7dop['createDocumentType'](nrjg8, vpid9, ranbgj);this['locator'] && tnbgj3(this['locator'], mxy0_), tjbagkr(this, mxy0_);
    }
  }, 'warning': function (pd9$) {
    console['warn']('[xmldom warning]\t' + pd9$, tzeoq0(this['locator']));
  }, 'error': function (fz7p$) {
    console['error']('[xmldom error]\t' + fz7p$, tzeoq0(this['locator']));
  }, 'fatalError': function ($vid9p) {
    throw console['error']('[xmldom fatalError]\t' + $vid9p, tzeoq0(this['locator'])), $vid9p;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c2vt9) {
  tn163g8['prototype'][c2vt9] = function () {
    return null;
  };
});var toz70eq = require('./tT12tt')['XMLReader'],
    tp7foz = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tvf9d;