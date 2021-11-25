var b = wx.$e;
function eks6un(b6u9ks) {
  this['options'] = b6u9ks || { 'locator': {} };
}function eyf47v(zhltrg, w82d1, av4f7_) {
  function lhfzyr(aocmp) {
    var vfy4 = zhltrg[aocmp];!vfy4 && sq39un && (vfy4 = 0x2 == zhltrg['length'] ? function (_7vm4) {
      zhltrg(aocmp, _7vm4);
    } : zhltrg), lrzfh[aocmp] = vfy4 && function (xi$jq3) {
      vfy4('[xmldom ' + aocmp + ']\t' + xi$jq3 + eav_47f(av4f7_));
    } || function () {};
  }if (!zhltrg) {
    if (w82d1 instanceof e_mao7c) return w82d1;zhltrg = w82d1;
  }var lrzfh = {},
      sq39un = zhltrg instanceof Function;return av4f7_ = av4f7_ || {}, lhfzyr('warning'), lhfzyr('error'), lhfzyr('fatalError'), lrzfh;
}function e_mao7c() {
  this['cdata'] = !0x1;
}function e$3ijgx(nk69u, jq$3ix) {
  jq$3ix['lineNumber'] = nk69u['lineNumber'], jq$3ix['columnNumber'] = nk69u['columnNumber'];
}function eav_47f(bd605k) {
  return bd605k ? '\x0a@' + (bd605k['systemId'] || '') + '#[line:' + bd605k['lineNumber'] + ',col:' + bd605k['columnNumber'] + ']' : void 0x0;
}function eqi3$(a7omc, tlhz, oam_7) {
  return 'string' == typeof a7omc ? a7omc['substr'](tlhz, oam_7) : a7omc['length'] >= tlhz + oam_7 || tlhz ? new java['lang']['String'](a7omc, tlhz, oam_7) + '' : a7omc;
}function etlghzr(gthlz, d0865) {
  gthlz['currentElement'] ? gthlz['currentElement']['appendChild'](d0865) : gthlz['doc']['appendChild'](d0865);
}eks6un['prototype']['parseFromString'] = function (n9sq, yzhflr) {
  var d521w8 = this['options'],
      x$ig3 = new ejt$xig(),
      hrltzy = d521w8['domBuilder'] || new e_mao7c(),
      k60b9s = d521w8['errorHandler'],
      a_74f = d521w8['locator'],
      dbw85 = d521w8['xmlns'] || {},
      yfrlz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return a_74f && hrltzy['setDocumentLocator'](a_74f), x$ig3['errorHandler'] = eyf47v(k60b9s, hrltzy, a_74f), x$ig3['domBuilder'] = d521w8['domBuilder'] || hrltzy, /\/x?html?$/['test'](yzhflr) && (yfrlz['nbsp'] = '\u00a0', yfrlz['copy'] = '©', dbw85[''] = 'http://www.w3.org/1999/xhtml'), dbw85['xml'] = dbw85['xml'] || 'http://www.w3.org/XML/1998/namespace', n9sq ? x$ig3['parse'](n9sq, dbw85, yfrlz) : x$ig3['errorHandler']['error']('invalid doc source'), hrltzy['doc'];
}, e_mao7c['prototype'] = { 'startDocument': function () {
    this['doc'] = new eryhlzt()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ytlz, tl$hxg, b96kus, kb9s60) {
    var y4_fz = this['doc'],
        cpmaoe = y4_fz['createElementNS'](ytlz, b96kus || tl$hxg),
        dk9 = kb9s60['length'];etlghzr(this, cpmaoe), this['currentElement'] = cpmaoe, this['locator'] && e$3ijgx(this['locator'], cpmaoe);for (var js3uqn = 0x0; dk9 > js3uqn; js3uqn++) {
      var ytlz = kb9s60['getURI'](js3uqn),
          vzr4y = kb9s60['getValue'](js3uqn),
          b96kus = kb9s60['getQName'](js3uqn),
          snqku9 = y4_fz['createAttributeNS'](ytlz, b96kus);this['locator'] && e$3ijgx(kb9s60['getLocator'](js3uqn), snqku9), snqku9['value'] = snqku9['nodeValue'] = vzr4y, cpmaoe['setAttributeNode'](snqku9);
    }
  }, 'endElement': function () {
    {
      var bs9u = this['currentElement'];bs9u['tagName'];
    }this['currentElement'] = bs9u['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nksu9, ltzrgh) {
    var tlgrxh = this['doc']['createProcessingInstruction'](nksu9, ltzrgh);this['locator'] && e$3ijgx(this['locator'], tlgrxh), etlghzr(this, tlgrxh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (acm_7) {
    if (acm_7 = eqi3$['apply'](this, arguments)) {
      if (this['cdata']) var rltxh = this['doc']['createCDATASection'](acm_7);else var rltxh = this['doc']['createTextNode'](acm_7);this['currentElement'] ? this['currentElement']['appendChild'](rltxh) : /^\s*$/['test'](acm_7) && this['doc']['appendChild'](rltxh), this['locator'] && e$3ijgx(this['locator'], rltxh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (d8125) {
    (this['locator'] = d8125) && (d8125['lineNumber'] = 0x0);
  }, 'comment': function (nji$q3) {
    nji$q3 = eqi3$['apply'](this, arguments);var ilgxt = this['doc']['createComment'](nji$q3);this['locator'] && e$3ijgx(this['locator'], ilgxt), etlghzr(this, ilgxt);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g$thxl, rtyhz, _am7v) {
    var $lxg = this['doc']['implementation'];if ($lxg && $lxg['createDocumentType']) {
      var jun3i = $lxg['createDocumentType'](g$thxl, rtyhz, _am7v);this['locator'] && e$3ijgx(this['locator'], jun3i), etlghzr(this, jun3i);
    }
  }, 'warning': function (b9s60) {
    console['warn']('[xmldom warning]\t' + b9s60, eav_47f(this['locator']));
  }, 'error': function (xt$igl) {
    console['error']('[xmldom error]\t' + xt$igl, eav_47f(this['locator']));
  }, 'fatalError': function (sn93) {
    throw console['error']('[xmldom fatalError]\t' + sn93, eav_47f(this['locator'])), sn93;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hzlrtg) {
  e_mao7c['prototype'][hzlrtg] = function () {
    return null;
  };
});var ejt$xig = require('./eeesax')['XMLReader'],
    eryhlzt = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eks6un;