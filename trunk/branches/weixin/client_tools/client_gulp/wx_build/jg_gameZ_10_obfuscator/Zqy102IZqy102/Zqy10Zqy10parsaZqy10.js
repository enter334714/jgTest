var J = wx.h$;
function gbgdk6(pcez) {
  this['options'] = pcez || { 'locator': {} };
}function gh6c8(tpzhe, n7i41x, z_pe2) {
  function $fws9(cpt) {
    var jxrv7y = tpzhe[cpt];!jxrv7y && f$w2_9 && (jxrv7y = 0x2 == tpzhe['length'] ? function (xnj71i) {
      tpzhe(cpt, xnj71i);
    } : tpzhe), $9f2s[cpt] = jxrv7y && function (_hetz) {
      jxrv7y('[xmldom ' + cpt + ']\t' + _hetz + gp2he(z_pe2));
    } || function () {};
  }if (!tpzhe) {
    if (n7i41x instanceof gi7rv) return n7i41x;tpzhe = n7i41x;
  }var $9f2s = {},
      f$w2_9 = tpzhe instanceof Function;return z_pe2 = z_pe2 || {}, $fws9('warning'), $fws9('error'), $fws9('fatalError'), $9f2s;
}function gi7rv() {
  this['cdata'] = !0x1;
}function gkqo05b(rybq5o, t86c) {
  t86c['lineNumber'] = rybq5o['lineNumber'], t86c['columnNumber'] = rybq5o['columnNumber'];
}function gp2he(we2p9) {
  return we2p9 ? '\x0a@' + (we2p9['systemId'] || '') + '#[line:' + we2p9['lineNumber'] + ',col:' + we2p9['columnNumber'] + ']' : void 0x0;
}function gthcez8(ep_zt, z_wpe, qv5or) {
  return 'string' == typeof ep_zt ? ep_zt['substr'](z_wpe, qv5or) : ep_zt['length'] >= z_wpe + qv5or || z_wpe ? new java['lang']['String'](ep_zt, z_wpe, qv5or) + '' : ep_zt;
}function gin14x3(g6d0k, n14a) {
  g6d0k['currentElement'] ? g6d0k['currentElement']['appendChild'](n14a) : g6d0k['doc']['appendChild'](n14a);
}gbgdk6['prototype']['parseFromString'] = function (bgdk, czpt) {
  var b0gdq = this['options'],
      $_fw29 = new ge2ph(),
      yorv5q = b0gdq['domBuilder'] || new gi7rv(),
      ixn7 = b0gdq['errorHandler'],
      _ehpzt = b0gdq['locator'],
      cgt6d8 = b0gdq['xmlns'] || {},
      i1xn4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _ehpzt && yorv5q['setDocumentLocator'](_ehpzt), $_fw29['errorHandler'] = gh6c8(ixn7, yorv5q, _ehpzt), $_fw29['domBuilder'] = b0gdq['domBuilder'] || yorv5q, /\/x?html?$/['test'](czpt) && (i1xn4['nbsp'] = '\u00a0', i1xn4['copy'] = '©', cgt6d8[''] = 'http://www.w3.org/1999/xhtml'), cgt6d8['xml'] = cgt6d8['xml'] || 'http://www.w3.org/XML/1998/namespace', bgdk ? $_fw29['parse'](bgdk, cgt6d8, i1xn4) : $_fw29['errorHandler']['error']('invalid doc source'), yorv5q['doc'];
}, gi7rv['prototype'] = { 'startDocument': function () {
    this['doc'] = new gkd8g6c()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (r7oy, pcetz, tz68ch, or5q) {
    var ep29_w = this['doc'],
        wf9_$2 = ep29_w['createElementNS'](r7oy, tz68ch || pcetz),
        ezcth = or5q['length'];gin14x3(this, wf9_$2), this['currentElement'] = wf9_$2, this['locator'] && gkqo05b(this['locator'], wf9_$2);for (var i14x3n = 0x0; ezcth > i14x3n; i14x3n++) {
      var r7oy = or5q['getURI'](i14x3n),
          tc6z8h = or5q['getValue'](i14x3n),
          tz68ch = or5q['getQName'](i14x3n),
          cd68kg = ep29_w['createAttributeNS'](r7oy, tz68ch);this['locator'] && gkqo05b(or5q['getLocator'](i14x3n), cd68kg), cd68kg['value'] = cd68kg['nodeValue'] = tc6z8h, wf9_$2['setAttributeNode'](cd68kg);
    }
  }, 'endElement': function () {
    {
      var _2zph = this['currentElement'];_2zph['tagName'];
    }this['currentElement'] = _2zph['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (yvj7ro, d8cgk) {
    var sfw92 = this['doc']['createProcessingInstruction'](yvj7ro, d8cgk);this['locator'] && gkqo05b(this['locator'], sfw92), gin14x3(this, sfw92);
  }, 'ignorableWhitespace': function () {}, 'characters': function (e_9p2w) {
    if (e_9p2w = gthcez8['apply'](this, arguments)) {
      if (this['cdata']) var ua4l13 = this['doc']['createCDATASection'](e_9p2w);else var ua4l13 = this['doc']['createTextNode'](e_9p2w);this['currentElement'] ? this['currentElement']['appendChild'](ua4l13) : /^\s*$/['test'](e_9p2w) && this['doc']['appendChild'](ua4l13), this['locator'] && gkqo05b(this['locator'], ua4l13);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (yvorj7) {
    (this['locator'] = yvorj7) && (yvorj7['lineNumber'] = 0x0);
  }, 'comment': function (qbg0k) {
    qbg0k = gthcez8['apply'](this, arguments);var ix431n = this['doc']['createComment'](qbg0k);this['locator'] && gkqo05b(this['locator'], ix431n), gin14x3(this, ix431n);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xni147, $w2f, gk6bd) {
    var z_pth = this['doc']['implementation'];if (z_pth && z_pth['createDocumentType']) {
      var ixjv7r = z_pth['createDocumentType'](xni147, $w2f, gk6bd);this['locator'] && gkqo05b(this['locator'], ixjv7r), gin14x3(this, ixjv7r);
    }
  }, 'warning': function (zhtc68) {
    console['warn']('[xmldom warning]\t' + zhtc68, gp2he(this['locator']));
  }, 'error': function (kd8c6g) {
    console['error']('[xmldom error]\t' + kd8c6g, gp2he(this['locator']));
  }, 'fatalError': function (yoqb0) {
    throw console['error']('[xmldom fatalError]\t' + yoqb0, gp2he(this['locator'])), yoqb0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i7xn1) {
  gi7rv['prototype'][i7xn1] = function () {
    return null;
  };
});var ge2ph = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gkd8g6c = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gbgdk6;