var D = wx.$b;
function bxklqg(o8lsd) {
  this['options'] = o8lsd || { 'locator': {} };
}function bcymtuz(rs98, njyiu0, tzw1m) {
  function r298sd(pwhvc) {
    var zcym = rs98[pwhvc];!zcym && x67k && (zcym = 0x2 == rs98['length'] ? function (mz0yu) {
      rs98(pwhvc, mz0yu);
    } : rs98), wpv1h_[pwhvc] = zcym && function (ldx) {
      zcym('[xmldom ' + pwhvc + ']\t' + ldx + ba$4nj5(tzw1m));
    } || function () {};
  }if (!rs98) {
    if (njyiu0 instanceof bjf54$) return njyiu0;rs98 = njyiu0;
  }var wpv1h_ = {},
      x67k = rs98 instanceof Function;return tzw1m = tzw1m || {}, r298sd('warning'), r298sd('error'), r298sd('fatalError'), wpv1h_;
}function bjf54$() {
  this['cdata'] = !0x1;
}function bd8o(tzym1, y1mztc) {
  y1mztc['lineNumber'] = tzym1['lineNumber'], y1mztc['columnNumber'] = tzym1['columnNumber'];
}function ba$4nj5(u4ij0n) {
  return u4ij0n ? '\x0a@' + (u4ij0n['systemId'] || '') + '#[line:' + u4ij0n['lineNumber'] + ',col:' + u4ij0n['columnNumber'] + ']' : void 0x0;
}function bg37x(xl7kg, yzi0nu, vw1cp) {
  return 'string' == typeof xl7kg ? xl7kg['substr'](yzi0nu, vw1cp) : xl7kg['length'] >= yzi0nu + vw1cp || yzi0nu ? new java['lang']['String'](xl7kg, yzi0nu, vw1cp) + '' : xl7kg;
}function brsh(nyju0, ef$a5) {
  nyju0['currentElement'] ? nyju0['currentElement']['appendChild'](ef$a5) : nyju0['doc']['appendChild'](ef$a5);
}bxklqg['prototype']['parseFromString'] = function (miyzu, jn0$) {
  var kxl7 = this['options'],
      odl86k = new bxd(),
      _rhs9 = kxl7['domBuilder'] || new bjf54$(),
      ja$f54 = kxl7['errorHandler'],
      $j45af = kxl7['locator'],
      wph_v = kxl7['xmlns'] || {},
      r9_h2v = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $j45af && _rhs9['setDocumentLocator']($j45af), odl86k['errorHandler'] = bcymtuz(ja$f54, _rhs9, $j45af), odl86k['domBuilder'] = kxl7['domBuilder'] || _rhs9, /\/x?html?$/['test'](jn0$) && (r9_h2v['nbsp'] = '\u00a0', r9_h2v['copy'] = '©', wph_v[''] = 'http://www.w3.org/1999/xhtml'), wph_v['xml'] = wph_v['xml'] || 'http://www.w3.org/XML/1998/namespace', miyzu ? odl86k['parse'](miyzu, wph_v, r9_h2v) : odl86k['errorHandler']['error']('invalid doc source'), _rhs9['doc'];
}, bjf54$['prototype'] = { 'startDocument': function () {
    this['doc'] = new bn$5j04()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (iz0uym, kod8l6, qok7, lo7qk) {
    var zn0iy = this['doc'],
        f54$a = zn0iy['createElementNS'](iz0uym, qok7 || kod8l6),
        mzt1wc = lo7qk['length'];brsh(this, f54$a), this['currentElement'] = f54$a, this['locator'] && bd8o(this['locator'], f54$a);for (var g37qxk = 0x0; mzt1wc > g37qxk; g37qxk++) {
      var iz0uym = lo7qk['getURI'](g37qxk),
          ol6xk = lo7qk['getValue'](g37qxk),
          qok7 = lo7qk['getQName'](g37qxk),
          niuyz0 = zn0iy['createAttributeNS'](iz0uym, qok7);this['locator'] && bd8o(lo7qk['getLocator'](g37qxk), niuyz0), niuyz0['value'] = niuyz0['nodeValue'] = ol6xk, f54$a['setAttributeNode'](niuyz0);
    }
  }, 'endElement': function () {
    {
      var hrv92 = this['currentElement'];hrv92['tagName'];
    }this['currentElement'] = hrv92['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (h2r_v, _hv2r9) {
    var nji04u = this['doc']['createProcessingInstruction'](h2r_v, _hv2r9);this['locator'] && bd8o(this['locator'], nji04u), brsh(this, nji04u);
  }, 'ignorableWhitespace': function () {}, 'characters': function (osld) {
    if (osld = bg37x['apply'](this, arguments)) {
      if (this['cdata']) var _r29hv = this['doc']['createCDATASection'](osld);else var _r29hv = this['doc']['createTextNode'](osld);this['currentElement'] ? this['currentElement']['appendChild'](_r29hv) : /^\s*$/['test'](osld) && this['doc']['appendChild'](_r29hv), this['locator'] && bd8o(this['locator'], _r29hv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tym1cz) {
    (this['locator'] = tym1cz) && (tym1cz['lineNumber'] = 0x0);
  }, 'comment': function (tvc) {
    tvc = bg37x['apply'](this, arguments);var i0ym = this['doc']['createComment'](tvc);this['locator'] && bd8o(this['locator'], i0ym), brsh(this, i0ym);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xlgqk7, ea5$f4, lgqxk7) {
    var x6ko = this['doc']['implementation'];if (x6ko && x6ko['createDocumentType']) {
      var rsd89 = x6ko['createDocumentType'](xlgqk7, ea5$f4, lgqxk7);this['locator'] && bd8o(this['locator'], rsd89), brsh(this, rsd89);
    }
  }, 'warning': function (ph_2r) {
    console['warn']('[xmldom warning]\t' + ph_2r, ba$4nj5(this['locator']));
  }, 'error': function (yzum) {
    console['error']('[xmldom error]\t' + yzum, ba$4nj5(this['locator']));
  }, 'fatalError': function (_h9v2) {
    throw console['error']('[xmldom fatalError]\t' + _h9v2, ba$4nj5(this['locator'])), _h9v2;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vh2_pr) {
  bjf54$['prototype'][vh2_pr] = function () {
    return null;
  };
});var bxd = require('./BBcBB')['XMLReader'],
    bn$5j04 = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = bxklqg;