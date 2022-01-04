var s = wx.$W;
function wcbgrdk(z2e13) {
  this['options'] = z2e13 || { 'locator': {} };
}function wwnosj(dbc5, owjnf, yda$) {
  function wfnezj(fwsoj) {
    var s6m4qo = dbc5[fwsoj];!s6m4qo && z3e271 && (s6m4qo = 0x2 == dbc5['length'] ? function (mnswo) {
      dbc5(fwsoj, mnswo);
    } : dbc5), c5k8b[fwsoj] = s6m4qo && function (tg508) {
      s6m4qo('[xmldom ' + fwsoj + ']\t' + tg508 + wmojnsw(yda$));
    } || function () {};
  }if (!dbc5) {
    if (owjnf instanceof wjnweo) return owjnf;dbc5 = owjnf;
  }var c5k8b = {},
      z3e271 = dbc5 instanceof Function;return yda$ = yda$ || {}, wfnezj('warning'), wfnezj('error'), wfnezj('fatalError'), c5k8b;
}function wjnweo() {
  this['cdata'] = !0x1;
}function wfzj3e(fnojsw, s4omq) {
  s4omq['lineNumber'] = fnojsw['lineNumber'], s4omq['columnNumber'] = fnojsw['columnNumber'];
}function wmojnsw(h6ut4p) {
  return h6ut4p ? '\x0a@' + (h6ut4p['systemId'] || '') + '#[line:' + h6ut4p['lineNumber'] + ',col:' + h6ut4p['columnNumber'] + ']' : void 0x0;
}function wgb5ckd(ary$x, mjn, la$v) {
  return 'string' == typeof ary$x ? ary$x['substr'](mjn, la$v) : ary$x['length'] >= mjn + la$v || mjn ? new java['lang']['String'](ary$x, mjn, la$v) + '' : ary$x;
}function wh8pu(al$9vy, o4sqmn) {
  al$9vy['currentElement'] ? al$9vy['currentElement']['appendChild'](o4sqmn) : al$9vy['doc']['appendChild'](o4sqmn);
}wcbgrdk['prototype']['parseFromString'] = function (mspq, ryxa) {
  var monq = this['options'],
      hu50 = new wtc58g(),
      rvx$ya = monq['domBuilder'] || new wjnweo(),
      fezwj1 = monq['errorHandler'],
      i7z213 = monq['locator'],
      drbgkx = monq['xmlns'] || {},
      ay$vr = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i7z213 && rvx$ya['setDocumentLocator'](i7z213), hu50['errorHandler'] = wwnosj(fezwj1, rvx$ya, i7z213), hu50['domBuilder'] = monq['domBuilder'] || rvx$ya, /\/x?html?$/['test'](ryxa) && (ay$vr['nbsp'] = '\u00a0', ay$vr['copy'] = '©', drbgkx[''] = 'http://www.w3.org/1999/xhtml'), drbgkx['xml'] = drbgkx['xml'] || 'http://www.w3.org/XML/1998/namespace', mspq ? hu50['parse'](mspq, drbgkx, ay$vr) : hu50['errorHandler']['error']('invalid doc source'), rvx$ya['doc'];
}, wjnweo['prototype'] = { 'startDocument': function () {
    this['doc'] = new wfoe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (dgkcrb, s6p4q, rgkcbd, h8p0t) {
    var crdgk = this['doc'],
        mqo6s = crdgk['createElementNS'](dgkcrb, rgkcbd || s6p4q),
        dkra = h8p0t['length'];wh8pu(this, mqo6s), this['currentElement'] = mqo6s, this['locator'] && wfzj3e(this['locator'], mqo6s);for (var xkdra = 0x0; dkra > xkdra; xkdra++) {
      var dgkcrb = h8p0t['getURI'](xkdra),
          m6hq4 = h8p0t['getValue'](xkdra),
          rgkcbd = h8p0t['getQName'](xkdra),
          drxkg = crdgk['createAttributeNS'](dgkcrb, rgkcbd);this['locator'] && wfzj3e(h8p0t['getLocator'](xkdra), drxkg), drxkg['value'] = drxkg['nodeValue'] = m6hq4, mqo6s['setAttributeNode'](drxkg);
    }
  }, 'endElement': function () {
    {
      var fwjon = this['currentElement'];fwjon['tagName'];
    }this['currentElement'] = fwjon['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dcbk5g, a$yxv9) {
    var ejw = this['doc']['createProcessingInstruction'](dcbk5g, a$yxv9);this['locator'] && wfzj3e(this['locator'], ejw), wh8pu(this, ejw);
  }, 'ignorableWhitespace': function () {}, 'characters': function (rybdk) {
    if (rybdk = wgb5ckd['apply'](this, arguments)) {
      if (this['cdata']) var p64mqs = this['doc']['createCDATASection'](rybdk);else var p64mqs = this['doc']['createTextNode'](rybdk);this['currentElement'] ? this['currentElement']['appendChild'](p64mqs) : /^\s*$/['test'](rybdk) && this['doc']['appendChild'](p64mqs), this['locator'] && wfzj3e(this['locator'], p64mqs);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($lay9v) {
    (this['locator'] = $lay9v) && ($lay9v['lineNumber'] = 0x0);
  }, 'comment': function (z372i1) {
    z372i1 = wgb5ckd['apply'](this, arguments);var smwnq = this['doc']['createComment'](z372i1);this['locator'] && wfzj3e(this['locator'], smwnq), wh8pu(this, smwnq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mwno, onwf, g5b8k) {
    var pmqs64 = this['doc']['implementation'];if (pmqs64 && pmqs64['createDocumentType']) {
      var l$vy9a = pmqs64['createDocumentType'](mwno, onwf, g5b8k);this['locator'] && wfzj3e(this['locator'], l$vy9a), wh8pu(this, l$vy9a);
    }
  }, 'warning': function (mhqp46) {
    console['warn']('[xmldom warning]\t' + mhqp46, wmojnsw(this['locator']));
  }, 'error': function (oewjnf) {
    console['error']('[xmldom error]\t' + oewjnf, wmojnsw(this['locator']));
  }, 'fatalError': function (x9av$) {
    throw console['error']('[xmldom fatalError]\t' + x9av$, wmojnsw(this['locator'])), x9av$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_a$9l) {
  wjnweo['prototype'][_a$9l] = function () {
    return null;
  };
});var wtc58g = require('./wwqww')['XMLReader'],
    wfoe = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wcbgrdk;