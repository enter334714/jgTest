var Z = wx.$L;
function l1rtxz6(che8dl) {
  this['options'] = che8dl || { 'locator': {} };
}function l1jy(jh82o, wfz, jh28c) {
  function ed8cl(i_1mpb) {
    var imbo_ = jh82o[i_1mpb];!imbo_ && _io1bm && (imbo_ = 0x2 == jh82o['length'] ? function (mi1bp) {
      jh82o(i_1mpb, mi1bp);
    } : jh82o), lk7cd[i_1mpb] = imbo_ && function (i69rp) {
      imbo_('[xmldom ' + i_1mpb + ']\t' + i69rp + l1$g5k(jh28c));
    } || function () {};
  }if (!jh82o) {
    if (wfz instanceof l1m1_ipb) return wfz;jh82o = wfz;
  }var lk7cd = {},
      _io1bm = jh82o instanceof Function;return jh28c = jh28c || {}, ed8cl('warning'), ed8cl('error'), ed8cl('fatalError'), lk7cd;
}function l1m1_ipb() {
  this['cdata'] = !0x1;
}function l1_1iom(uw6txz, om1_b) {
  om1_b['lineNumber'] = uw6txz['lineNumber'], om1_b['columnNumber'] = uw6txz['columnNumber'];
}function l1$g5k(obj1_) {
  return obj1_ ? '\x0a@' + (obj1_['systemId'] || '') + '#[line:' + obj1_['lineNumber'] + ',col:' + obj1_['columnNumber'] + ']' : void 0x0;
}function l1ael$k(asnq5g, q$s5ga, dch2) {
  return 'string' == typeof asnq5g ? asnq5g['substr'](q$s5ga, dch2) : asnq5g['length'] >= q$s5ga + dch2 || q$s5ga ? new java['lang']['String'](asnq5g, q$s5ga, dch2) + '' : asnq5g;
}function l1ckel7d(ag5$sk, nqs45) {
  ag5$sk['currentElement'] ? ag5$sk['currentElement']['appendChild'](nqs45) : ag5$sk['doc']['appendChild'](nqs45);
}l1rtxz6['prototype']['parseFromString'] = function (xp0r6, $qa5) {
  var oh2jy_ = this['options'],
      ch2y8j = new l1elkd(),
      ekcl7d = oh2jy_['domBuilder'] || new l1m1_ipb(),
      p0xr96 = oh2jy_['errorHandler'],
      vq4s5 = oh2jy_['locator'],
      lc7dk = oh2jy_['xmlns'] || {},
      xuztf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vq4s5 && ekcl7d['setDocumentLocator'](vq4s5), ch2y8j['errorHandler'] = l1jy(p0xr96, ekcl7d, vq4s5), ch2y8j['domBuilder'] = oh2jy_['domBuilder'] || ekcl7d, /\/x?html?$/['test']($qa5) && (xuztf['nbsp'] = '\u00a0', xuztf['copy'] = '©', lc7dk[''] = 'http://www.w3.org/1999/xhtml'), lc7dk['xml'] = lc7dk['xml'] || 'http://www.w3.org/XML/1998/namespace', xp0r6 ? ch2y8j['parse'](xp0r6, lc7dk, xuztf) : ch2y8j['errorHandler']['error']('invalid doc source'), ekcl7d['doc'];
}, l1m1_ipb['prototype'] = { 'startDocument': function () {
    this['doc'] = new l1ceh8dl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_oj1mb, yedch8, yc8j2h, akg$s) {
    var i_bp = this['doc'],
        vg5nsq = i_bp['createElementNS'](_oj1mb, yc8j2h || yedch8),
        h2ojy = akg$s['length'];l1ckel7d(this, vg5nsq), this['currentElement'] = vg5nsq, this['locator'] && l1_1iom(this['locator'], vg5nsq);for (var $7elkd = 0x0; h2ojy > $7elkd; $7elkd++) {
      var _oj1mb = akg$s['getURI']($7elkd),
          lde7c = akg$s['getValue']($7elkd),
          yc8j2h = akg$s['getQName']($7elkd),
          gs$a5 = i_bp['createAttributeNS'](_oj1mb, yc8j2h);this['locator'] && l1_1iom(akg$s['getLocator']($7elkd), gs$a5), gs$a5['value'] = gs$a5['nodeValue'] = lde7c, vg5nsq['setAttributeNode'](gs$a5);
    }
  }, 'endElement': function () {
    {
      var le8hd = this['currentElement'];le8hd['tagName'];
    }this['currentElement'] = le8hd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bo1_2, i0m9p) {
    var gla = this['doc']['createProcessingInstruction'](bo1_2, i0m9p);this['locator'] && l1_1iom(this['locator'], gla), l1ckel7d(this, gla);
  }, 'ignorableWhitespace': function () {}, 'characters': function (i1m9pb) {
    if (i1m9pb = l1ael$k['apply'](this, arguments)) {
      if (this['cdata']) var yd28ch = this['doc']['createCDATASection'](i1m9pb);else var yd28ch = this['doc']['createTextNode'](i1m9pb);this['currentElement'] ? this['currentElement']['appendChild'](yd28ch) : /^\s*$/['test'](i1m9pb) && this['doc']['appendChild'](yd28ch), this['locator'] && l1_1iom(this['locator'], yd28ch);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (sg5qna) {
    (this['locator'] = sg5qna) && (sg5qna['lineNumber'] = 0x0);
  }, 'comment': function (utxf) {
    utxf = l1ael$k['apply'](this, arguments);var hy2jc8 = this['doc']['createComment'](utxf);this['locator'] && l1_1iom(this['locator'], hy2jc8), l1ckel7d(this, hy2jc8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (oy2_, ho2_, oj2h8y) {
    var xr6t0 = this['doc']['implementation'];if (xr6t0 && xr6t0['createDocumentType']) {
      var c78el = xr6t0['createDocumentType'](oy2_, ho2_, oj2h8y);this['locator'] && l1_1iom(this['locator'], c78el), l1ckel7d(this, c78el);
    }
  }, 'warning': function (c78le) {
    console['warn']('[xmldom warning]\t' + c78le, l1$g5k(this['locator']));
  }, 'error': function (lec78) {
    console['error']('[xmldom error]\t' + lec78, l1$g5k(this['locator']));
  }, 'fatalError': function (e78ld) {
    throw console['error']('[xmldom fatalError]\t' + e78ld, l1$g5k(this['locator'])), e78ld;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (n5g) {
  l1m1_ipb['prototype'][n5g] = function () {
    return null;
  };
});var l1elkd = require('./lllSAX')['XMLReader'],
    l1ceh8dl = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = l1rtxz6;