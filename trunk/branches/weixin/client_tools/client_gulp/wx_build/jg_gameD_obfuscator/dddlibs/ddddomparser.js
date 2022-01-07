var v = wx.$d;
function zb18axz(mejnh6) {
  this['options'] = mejnh6 || { 'locator': {} };
}function zeitud(mitdu, a0xbz, tiudef) {
  function uifkt(oc9_) {
    var dtefu = mitdu[oc9_];!dtefu && q0fgz && (dtefu = 0x2 == mitdu['length'] ? function (em6nh) {
      mitdu(oc9_, em6nh);
    } : mitdu), _9j43[oc9_] = dtefu && function (x1w8r) {
      dtefu('[xmldom ' + oc9_ + ']\t' + x1w8r + zgukti(tiudef));
    } || function () {};
  }if (!mitdu) {
    if (a0xbz instanceof zmej6h) return a0xbz;mitdu = a0xbz;
  }var _9j43 = {},
      q0fgz = mitdu instanceof Function;return tiudef = tiudef || {}, uifkt('warning'), uifkt('error'), uifkt('fatalError'), _9j43;
}function zmej6h() {
  this['cdata'] = !0x1;
}function zfgiktu(bqax0z, j_hn) {
  j_hn['lineNumber'] = bqax0z['lineNumber'], j_hn['columnNumber'] = bqax0z['columnNumber'];
}function zgukti(jnem6) {
  return jnem6 ? '\x0a@' + (jnem6['systemId'] || '') + '#[line:' + jnem6['lineNumber'] + ',col:' + jnem6['columnNumber'] + ']' : void 0x0;
}function zp$r7w(umeitd, dkti, mh6dj) {
  return 'string' == typeof umeitd ? umeitd['substr'](dkti, mh6dj) : umeitd['length'] >= dkti + mh6dj || dkti ? new java['lang']['String'](umeitd, dkti, mh6dj) + '' : umeitd;
}function zgb0(h_9jn, ejn6mh) {
  h_9jn['currentElement'] ? h_9jn['currentElement']['appendChild'](ejn6mh) : h_9jn['doc']['appendChild'](ejn6mh);
}zb18axz['prototype']['parseFromString'] = function (gkqt0f, udmtie) {
  var pr$v7 = this['options'],
      hn6_j = new zzgqf(),
      vy$7w = pr$v7['domBuilder'] || new zmej6h(),
      fqtuk = pr$v7['errorHandler'],
      ftuqgk = pr$v7['locator'],
      dtemiu = pr$v7['xmlns'] || {},
      w$v1r = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ftuqgk && vy$7w['setDocumentLocator'](ftuqgk), hn6_j['errorHandler'] = zeitud(fqtuk, vy$7w, ftuqgk), hn6_j['domBuilder'] = pr$v7['domBuilder'] || vy$7w, /\/x?html?$/['test'](udmtie) && (w$v1r['nbsp'] = '\u00a0', w$v1r['copy'] = '©', dtemiu[''] = 'http://www.w3.org/1999/xhtml'), dtemiu['xml'] = dtemiu['xml'] || 'http://www.w3.org/XML/1998/namespace', gkqt0f ? hn6_j['parse'](gkqt0f, dtemiu, w$v1r) : hn6_j['errorHandler']['error']('invalid doc source'), vy$7w['doc'];
}, zmej6h['prototype'] = { 'startDocument': function () {
    this['doc'] = new ztgqfuk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ukgtq, tfdkiu, x8rwb, o395_) {
    var kidf = this['doc'],
        uietdm = kidf['createElementNS'](ukgtq, x8rwb || tfdkiu),
        bwr = o395_['length'];zgb0(this, uietdm), this['currentElement'] = uietdm, this['locator'] && zfgiktu(this['locator'], uietdm);for (var enm = 0x0; bwr > enm; enm++) {
      var ukgtq = o395_['getURI'](enm),
          pyl$7 = o395_['getValue'](enm),
          x8rwb = o395_['getQName'](enm),
          j3n94_ = kidf['createAttributeNS'](ukgtq, x8rwb);this['locator'] && zfgiktu(o395_['getLocator'](enm), j3n94_), j3n94_['value'] = j3n94_['nodeValue'] = pyl$7, uietdm['setAttributeNode'](j3n94_);
    }
  }, 'endElement': function () {
    {
      var e6mi = this['currentElement'];e6mi['tagName'];
    }this['currentElement'] = e6mi['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_3nc9, v$1pw) {
    var $7yvw = this['doc']['createProcessingInstruction'](_3nc9, v$1pw);this['locator'] && zfgiktu(this['locator'], $7yvw), zgb0(this, $7yvw);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ejh) {
    if (ejh = zp$r7w['apply'](this, arguments)) {
      if (this['cdata']) var dmhie6 = this['doc']['createCDATASection'](ejh);else var dmhie6 = this['doc']['createTextNode'](ejh);this['currentElement'] ? this['currentElement']['appendChild'](dmhie6) : /^\s*$/['test'](ejh) && this['doc']['appendChild'](dmhie6), this['locator'] && zfgiktu(this['locator'], dmhie6);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mh4jn) {
    (this['locator'] = mh4jn) && (mh4jn['lineNumber'] = 0x0);
  }, 'comment': function (ugifkt) {
    ugifkt = zp$r7w['apply'](this, arguments);var fitduk = this['doc']['createComment'](ugifkt);this['locator'] && zfgiktu(this['locator'], fitduk), zgb0(this, fitduk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (imud6e, idfuk, m6hdj) {
    var ab18xz = this['doc']['implementation'];if (ab18xz && ab18xz['createDocumentType']) {
      var $w1vr = ab18xz['createDocumentType'](imud6e, idfuk, m6hdj);this['locator'] && zfgiktu(this['locator'], $w1vr), zgb0(this, $w1vr);
    }
  }, 'warning': function (a1zxb8) {
    console['warn']('[xmldom warning]\t' + a1zxb8, zgukti(this['locator']));
  }, 'error': function (h46nj_) {
    console['error']('[xmldom error]\t' + h46nj_, zgukti(this['locator']));
  }, 'fatalError': function (prv7) {
    throw console['error']('[xmldom fatalError]\t' + prv7, zgukti(this['locator'])), prv7;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vlp7) {
  zmej6h['prototype'][vlp7] = function () {
    return null;
  };
});var zzgqf = require('./dddsax')['XMLReader'],
    ztgqfuk = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zb18axz;