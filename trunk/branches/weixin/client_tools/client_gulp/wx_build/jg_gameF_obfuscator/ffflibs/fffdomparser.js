var k = wx.$f;
function ffbtivm(s6ojdc) {
  this['options'] = s6ojdc || { 'locator': {} };
}function ff5hqt(cjd6os, mt0fi, h0q_5) {
  function fq0h5t($zr8e) {
    var d6jocs = cjd6os[$zr8e];!d6jocs && g9bvu && (d6jocs = 0x2 == cjd6os['length'] ? function (rya$3) {
      cjd6os($zr8e, rya$3);
    } : cjd6os), oj62d[$zr8e] = d6jocs && function (t50hk) {
      d6jocs('[xmldom ' + $zr8e + ']\t' + t50hk + fbim1v(h0q_5));
    } || function () {};
  }if (!cjd6os) {
    if (mt0fi instanceof fodwsj) return mt0fi;cjd6os = mt0fi;
  }var oj62d = {},
      g9bvu = cjd6os instanceof Function;return h0q_5 = h0q_5 || {}, fq0h5t('warning'), fq0h5t('error'), fq0h5t('fatalError'), oj62d;
}function fodwsj() {
  this['cdata'] = !0x1;
}function fkhq05t(xr78, c6jod) {
  c6jod['lineNumber'] = xr78['lineNumber'], c6jod['columnNumber'] = xr78['columnNumber'];
}function fbim1v(s6codj) {
  return s6codj ? '\x0a@' + (s6codj['systemId'] || '') + '#[line:' + s6codj['lineNumber'] + ',col:' + s6codj['columnNumber'] + ']' : void 0x0;
}function fiub1m(tf0mhi, nw8zxe, tvmi) {
  return 'string' == typeof tf0mhi ? tf0mhi['substr'](nw8zxe, tvmi) : tf0mhi['length'] >= nw8zxe + tvmi || nw8zxe ? new java['lang']['String'](tf0mhi, nw8zxe, tvmi) + '' : tf0mhi;
}function frzxn(t0him, o26k4_) {
  t0him['currentElement'] ? t0him['currentElement']['appendChild'](o26k4_) : t0him['doc']['appendChild'](o26k4_);
}ffbtivm['prototype']['parseFromString'] = function (vub1im, th0qk5) {
  var cjsd6 = this['options'],
      co62j4 = new fbhfim(),
      y$a3r7 = cjsd6['domBuilder'] || new fodwsj(),
      qk2_4 = cjsd6['errorHandler'],
      swdx = cjsd6['locator'],
      k24_56 = cjsd6['xmlns'] || {},
      hti0fm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return swdx && y$a3r7['setDocumentLocator'](swdx), co62j4['errorHandler'] = ff5hqt(qk2_4, y$a3r7, swdx), co62j4['domBuilder'] = cjsd6['domBuilder'] || y$a3r7, /\/x?html?$/['test'](th0qk5) && (hti0fm['nbsp'] = '\u00a0', hti0fm['copy'] = '©', k24_56[''] = 'http://www.w3.org/1999/xhtml'), k24_56['xml'] = k24_56['xml'] || 'http://www.w3.org/XML/1998/namespace', vub1im ? co62j4['parse'](vub1im, k24_56, hti0fm) : co62j4['errorHandler']['error']('invalid doc source'), y$a3r7['doc'];
}, fodwsj['prototype'] = { 'startDocument': function () {
    this['doc'] = new fj6cosd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i0tmfh, kq42, k_25q, owscjd) {
    var ub9v1g = this['doc'],
        xzer78 = ub9v1g['createElementNS'](i0tmfh, k_25q || kq42),
        gvbu1 = owscjd['length'];frzxn(this, xzer78), this['currentElement'] = xzer78, this['locator'] && fkhq05t(this['locator'], xzer78);for (var wesdx = 0x0; gvbu1 > wesdx; wesdx++) {
      var i0tmfh = owscjd['getURI'](wesdx),
          ndcsjw = owscjd['getValue'](wesdx),
          k_25q = owscjd['getQName'](wesdx),
          hk05tq = ub9v1g['createAttributeNS'](i0tmfh, k_25q);this['locator'] && fkhq05t(owscjd['getLocator'](wesdx), hk05tq), hk05tq['value'] = hk05tq['nodeValue'] = ndcsjw, xzer78['setAttributeNode'](hk05tq);
    }
  }, 'endElement': function () {
    {
      var htimfb = this['currentElement'];htimfb['tagName'];
    }this['currentElement'] = htimfb['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ojwsc, v9bg) {
    var tf0qh5 = this['doc']['createProcessingInstruction'](ojwsc, v9bg);this['locator'] && fkhq05t(this['locator'], tf0qh5), frzxn(this, tf0qh5);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ibtf) {
    if (ibtf = fiub1m['apply'](this, arguments)) {
      if (this['cdata']) var dwnes = this['doc']['createCDATASection'](ibtf);else var dwnes = this['doc']['createTextNode'](ibtf);this['currentElement'] ? this['currentElement']['appendChild'](dwnes) : /^\s*$/['test'](ibtf) && this['doc']['appendChild'](dwnes), this['locator'] && fkhq05t(this['locator'], dwnes);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ewnz8x) {
    (this['locator'] = ewnz8x) && (ewnz8x['lineNumber'] = 0x0);
  }, 'comment': function (dcj2o6) {
    dcj2o6 = fiub1m['apply'](this, arguments);var ihfbm = this['doc']['createComment'](dcj2o6);this['locator'] && fkhq05t(this['locator'], ihfbm), frzxn(this, ihfbm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (o6_2c, vu91g, wnxezs) {
    var sxwzne = this['doc']['implementation'];if (sxwzne && sxwzne['createDocumentType']) {
      var fhi0m = sxwzne['createDocumentType'](o6_2c, vu91g, wnxezs);this['locator'] && fkhq05t(this['locator'], fhi0m), frzxn(this, fhi0m);
    }
  }, 'warning': function (_5k24) {
    console['warn']('[xmldom warning]\t' + _5k24, fbim1v(this['locator']));
  }, 'error': function (hft0) {
    console['error']('[xmldom error]\t' + hft0, fbim1v(this['locator']));
  }, 'fatalError': function ($r387) {
    throw console['error']('[xmldom fatalError]\t' + $r387, fbim1v(this['locator'])), $r387;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (y7ap$3) {
  fodwsj['prototype'][y7ap$3] = function () {
    return null;
  };
});var fbhfim = require('./fffsax')['XMLReader'],
    fj6cosd = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = ffbtivm;