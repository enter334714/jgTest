var b = wx.$e;
function eklpf(xw21) {
  this['options'] = xw21 || { 'locator': {} };
}function e_34bts(dlpqn, m9z6, nhldqu) {
  function nhdq(hqi) {
    var pfkhij = dlpqn[hqi];!pfkhij && khijp && (pfkhij = 0x2 == dlpqn['length'] ? function (nldhp) {
      dlpqn(hqi, nldhp);
    } : dlpqn), mx1z[hqi] = pfkhij && function (zjk975) {
      pfkhij('[xmldom ' + hqi + ']\t' + zjk975 + ejifph(nhldqu));
    } || function () {};
  }if (!dlpqn) {
    if (m9z6 instanceof este83) return m9z6;dlpqn = m9z6;
  }var mx1z = {},
      khijp = dlpqn instanceof Function;return nhldqu = nhldqu || {}, nhdq('warning'), nhdq('error'), nhdq('fatalError'), mx1z;
}function este83() {
  this['cdata'] = !0x1;
}function es4e38(s_b3t, hfkipl) {
  hfkipl['lineNumber'] = s_b3t['lineNumber'], hfkipl['columnNumber'] = s_b3t['columnNumber'];
}function ejifph(ikhlfp) {
  return ikhlfp ? '\x0a@' + (ikhlfp['systemId'] || '') + '#[line:' + ikhlfp['lineNumber'] + ',col:' + ikhlfp['columnNumber'] + ']' : void 0x0;
}function elqdhun(yb_4, ipkjfh, m76gx1) {
  return 'string' == typeof yb_4 ? yb_4['substr'](ipkjfh, m76gx1) : yb_4['length'] >= ipkjfh + m76gx1 || ipkjfh ? new java['lang']['String'](yb_4, ipkjfh, m76gx1) + '' : yb_4;
}function e$wg1(v$r20, hdpnlq) {
  v$r20['currentElement'] ? v$r20['currentElement']['appendChild'](hdpnlq) : v$r20['doc']['appendChild'](hdpnlq);
}eklpf['prototype']['parseFromString'] = function (g1x62w, z9j5m) {
  var _tb4y = this['options'],
      x1mg26 = new eesn8u(),
      vg216 = _tb4y['domBuilder'] || new este83(),
      ldhifp = _tb4y['errorHandler'],
      pndlqh = _tb4y['locator'],
      fjkpi5 = _tb4y['xmlns'] || {},
      en8us = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pndlqh && vg216['setDocumentLocator'](pndlqh), x1mg26['errorHandler'] = e_34bts(ldhifp, vg216, pndlqh), x1mg26['domBuilder'] = _tb4y['domBuilder'] || vg216, /\/x?html?$/['test'](z9j5m) && (en8us['nbsp'] = '\u00a0', en8us['copy'] = '©', fjkpi5[''] = 'http://www.w3.org/1999/xhtml'), fjkpi5['xml'] = fjkpi5['xml'] || 'http://www.w3.org/XML/1998/namespace', g1x62w ? x1mg26['parse'](g1x62w, fjkpi5, en8us) : x1mg26['errorHandler']['error']('invalid doc source'), vg216['doc'];
}, este83['prototype'] = { 'startDocument': function () {
    this['doc'] = new ewv2$1g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (neuq8, n48su, sueqn, eqn8s) {
    var dqph = this['doc'],
        klihfp = dqph['createElementNS'](neuq8, sueqn || n48su),
        seqnu8 = eqn8s['length'];e$wg1(this, klihfp), this['currentElement'] = klihfp, this['locator'] && es4e38(this['locator'], klihfp);for (var jihpfk = 0x0; seqnu8 > jihpfk; jihpfk++) {
      var neuq8 = eqn8s['getURI'](jihpfk),
          en8uq = eqn8s['getValue'](jihpfk),
          sueqn = eqn8s['getQName'](jihpfk),
          q8snu = dqph['createAttributeNS'](neuq8, sueqn);this['locator'] && es4e38(eqn8s['getLocator'](jihpfk), q8snu), q8snu['value'] = q8snu['nodeValue'] = en8uq, klihfp['setAttributeNode'](q8snu);
    }
  }, 'endElement': function () {
    {
      var gw162 = this['currentElement'];gw162['tagName'];
    }this['currentElement'] = gw162['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (flphk, nhudql) {
    var bt3y = this['doc']['createProcessingInstruction'](flphk, nhudql);this['locator'] && es4e38(this['locator'], bt3y), e$wg1(this, bt3y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ldqu) {
    if (ldqu = elqdhun['apply'](this, arguments)) {
      if (this['cdata']) var jzm795 = this['doc']['createCDATASection'](ldqu);else var jzm795 = this['doc']['createTextNode'](ldqu);this['currentElement'] ? this['currentElement']['appendChild'](jzm795) : /^\s*$/['test'](ldqu) && this['doc']['appendChild'](jzm795), this['locator'] && es4e38(this['locator'], jzm795);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (k59zfj) {
    (this['locator'] = k59zfj) && (k59zfj['lineNumber'] = 0x0);
  }, 'comment': function (equn) {
    equn = elqdhun['apply'](this, arguments);var $w0vg2 = this['doc']['createComment'](equn);this['locator'] && es4e38(this['locator'], $w0vg2), e$wg1(this, $w0vg2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jhipf, zj9m75, jk75z9) {
    var v$awr = this['doc']['implementation'];if (v$awr && v$awr['createDocumentType']) {
      var w1gv$2 = v$awr['createDocumentType'](jhipf, zj9m75, jk75z9);this['locator'] && es4e38(this['locator'], w1gv$2), e$wg1(this, w1gv$2);
    }
  }, 'warning': function (jm9) {
    console['warn']('[xmldom warning]\t' + jm9, ejifph(this['locator']));
  }, 'error': function (sb4) {
    console['error']('[xmldom error]\t' + sb4, ejifph(this['locator']));
  }, 'fatalError': function ($rwav0) {
    throw console['error']('[xmldom fatalError]\t' + $rwav0, ejifph(this['locator'])), $rwav0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wv2g16) {
  este83['prototype'][wv2g16] = function () {
    return null;
  };
});var eesn8u = require('./eeesax')['XMLReader'],
    ewv2$1g = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eklpf;