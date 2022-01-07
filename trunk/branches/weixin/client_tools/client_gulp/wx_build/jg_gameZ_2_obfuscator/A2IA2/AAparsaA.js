var d = wx.$A;
function A$9anem(kpxy1i) {
  this['options'] = kpxy1i || { 'locator': {} };
}function Ajwh2l(y1kxpi, a0v93, _gbtqo) {
  function s6w(smjn6d) {
    var u81k = y1kxpi[smjn6d];!u81k && j6sdhz && (u81k = 0x2 == y1kxpi['length'] ? function (sm6dn) {
      y1kxpi(smjn6d, sm6dn);
    } : y1kxpi), qxtbi[smjn6d] = u81k && function (tqxob_) {
      u81k('[xmldom ' + smjn6d + ']\t' + tqxob_ + Aqbo_4g(_gbtqo));
    } || function () {};
  }if (!y1kxpi) {
    if (a0v93 instanceof Ar4oq) return a0v93;y1kxpi = a0v93;
  }var qxtbi = {},
      j6sdhz = y1kxpi instanceof Function;return _gbtqo = _gbtqo || {}, s6w('warning'), s6w('error'), s6w('fatalError'), qxtbi;
}function Ar4oq() {
  this['cdata'] = !0x1;
}function Apuki1y(d6jz, obgt_) {
  obgt_['lineNumber'] = d6jz['lineNumber'], obgt_['columnNumber'] = d6jz['columnNumber'];
}function Aqbo_4g(zsd6jh) {
  return zsd6jh ? '\x0a@' + (zsd6jh['systemId'] || '') + '#[line:' + zsd6jh['lineNumber'] + ',col:' + zsd6jh['columnNumber'] + ']' : void 0x0;
}function Axyqobt(y1pki, mdne9$, sh6zwj) {
  return 'string' == typeof y1pki ? y1pki['substr'](mdne9$, sh6zwj) : y1pki['length'] >= mdne9$ + sh6zwj || mdne9$ ? new java['lang']['String'](y1pki, mdne9$, sh6zwj) + '' : y1pki;
}function Aavme(a839v, va$908) {
  a839v['currentElement'] ? a839v['currentElement']['appendChild'](va$908) : a839v['doc']['appendChild'](va$908);
}A$9anem['prototype']['parseFromString'] = function (k1u03, og_b) {
  var wj2hz = this['options'],
      nd6shj = new Abxoqy(),
      itqb = wj2hz['domBuilder'] || new Ar4oq(),
      lhw6j = wj2hz['errorHandler'],
      sjzhw6 = wj2hz['locator'],
      m6den = wj2hz['xmlns'] || {},
      tbyipx = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sjzhw6 && itqb['setDocumentLocator'](sjzhw6), nd6shj['errorHandler'] = Ajwh2l(lhw6j, itqb, sjzhw6), nd6shj['domBuilder'] = wj2hz['domBuilder'] || itqb, /\/x?html?$/['test'](og_b) && (tbyipx['nbsp'] = '\u00a0', tbyipx['copy'] = '©', m6den[''] = 'http://www.w3.org/1999/xhtml'), m6den['xml'] = m6den['xml'] || 'http://www.w3.org/XML/1998/namespace', k1u03 ? nd6shj['parse'](k1u03, m6den, tbyipx) : nd6shj['errorHandler']['error']('invalid doc source'), itqb['doc'];
}, Ar4oq['prototype'] = { 'startDocument': function () {
    this['doc'] = new Adnms6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qtib, gt_boq, q4gob, yxpb) {
    var xiykp1 = this['doc'],
        msdj6n = xiykp1['createElementNS'](qtib, q4gob || gt_boq),
        qboyt = yxpb['length'];Aavme(this, msdj6n), this['currentElement'] = msdj6n, this['locator'] && Apuki1y(this['locator'], msdj6n);for (var grf4_7 = 0x0; qboyt > grf4_7; grf4_7++) {
      var qtib = yxpb['getURI'](grf4_7),
          h6jzsw = yxpb['getValue'](grf4_7),
          q4gob = yxpb['getQName'](grf4_7),
          ityb = xiykp1['createAttributeNS'](qtib, q4gob);this['locator'] && Apuki1y(yxpb['getLocator'](grf4_7), ityb), ityb['value'] = ityb['nodeValue'] = h6jzsw, msdj6n['setAttributeNode'](ityb);
    }
  }, 'endElement': function () {
    {
      var rfo4g = this['currentElement'];rfo4g['tagName'];
    }this['currentElement'] = rfo4g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mnde$, bix) {
    var grf_7 = this['doc']['createProcessingInstruction'](mnde$, bix);this['locator'] && Apuki1y(this['locator'], grf_7), Aavme(this, grf_7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (z6hjd) {
    if (z6hjd = Axyqobt['apply'](this, arguments)) {
      if (this['cdata']) var _4rogq = this['doc']['createCDATASection'](z6hjd);else var _4rogq = this['doc']['createTextNode'](z6hjd);this['currentElement'] ? this['currentElement']['appendChild'](_4rogq) : /^\s*$/['test'](z6hjd) && this['doc']['appendChild'](_4rogq), this['locator'] && Apuki1y(this['locator'], _4rogq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (esmn$) {
    (this['locator'] = esmn$) && (esmn$['lineNumber'] = 0x0);
  }, 'comment': function ($809av) {
    $809av = Axyqobt['apply'](this, arguments);var hzs6dj = this['doc']['createComment']($809av);this['locator'] && Apuki1y(this['locator'], hzs6dj), Aavme(this, hzs6dj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g4o_fr, qo_bg, jmn6ds) {
    var k183p = this['doc']['implementation'];if (k183p && k183p['createDocumentType']) {
      var upki31 = k183p['createDocumentType'](g4o_fr, qo_bg, jmn6ds);this['locator'] && Apuki1y(this['locator'], upki31), Aavme(this, upki31);
    }
  }, 'warning': function (av809) {
    console['warn']('[xmldom warning]\t' + av809, Aqbo_4g(this['locator']));
  }, 'error': function (q_otgb) {
    console['error']('[xmldom error]\t' + q_otgb, Aqbo_4g(this['locator']));
  }, 'fatalError': function (a$9mne) {
    throw console['error']('[xmldom fatalError]\t' + a$9mne, Aqbo_4g(this['locator'])), a$9mne;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (bxqtyi) {
  Ar4oq['prototype'][bxqtyi] = function () {
    return null;
  };
});var Abxoqy = require('./AAcAA')['XMLReader'],
    Adnms6 = exports['DOMImplementation'] = require('./AADOAA')['DOMImplementation'];exports['XMLSerializer'] = require('./AADOAA')['XMLSerializer'], exports['DOMParser'] = A$9anem;