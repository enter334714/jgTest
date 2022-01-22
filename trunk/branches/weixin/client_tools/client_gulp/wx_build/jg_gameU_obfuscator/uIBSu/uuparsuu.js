var o = wx.$U;
function uc0ar6k(qojhim) {
  this['options'] = qojhim || { 'locator': {} };
}function u_s$kvn(lqhom, ue4pf3, sakn) {
  function $u4fep(kav_c) {
    var knvs$ = lqhom[kav_c];!knvs$ && u$pf && (knvs$ = 0x2 == lqhom['length'] ? function (r08ac6) {
      lqhom(kav_c, r08ac6);
    } : lqhom), phj3[kav_c] = knvs$ && function (r810cb) {
      knvs$('[xmldom ' + kav_c + ']\t' + r810cb + ue$fsn(sakn));
    } || function () {};
  }if (!lqhom) {
    if (ue4pf3 instanceof uak0rc) return ue4pf3;lqhom = ue4pf3;
  }var phj3 = {},
      u$pf = lqhom instanceof Function;return sakn = sakn || {}, $u4fep('warning'), $u4fep('error'), $u4fep('fatalError'), phj3;
}function uak0rc() {
  this['cdata'] = !0x1;
}function u$en_sv(qgw7xl, oqlxim) {
  oqlxim['lineNumber'] = qgw7xl['lineNumber'], oqlxim['columnNumber'] = qgw7xl['columnNumber'];
}function ue$fsn(c6_kr) {
  return c6_kr ? '\x0a@' + (c6_kr['systemId'] || '') + '#[line:' + c6_kr['lineNumber'] + ',col:' + c6_kr['columnNumber'] + ']' : void 0x0;
}function uwgzd(gql7w, glx9w, eu3pf4) {
  return 'string' == typeof gql7w ? gql7w['substr'](glx9w, eu3pf4) : gql7w['length'] >= glx9w + eu3pf4 || glx9w ? new java['lang']['String'](gql7w, glx9w, eu3pf4) + '' : gql7w;
}function uilomqx(dt5z9, z29td) {
  dt5z9['currentElement'] ? dt5z9['currentElement']['appendChild'](z29td) : dt5z9['doc']['appendChild'](z29td);
}uc0ar6k['prototype']['parseFromString'] = function (c816r, cr68a) {
  var c6r0ka = this['options'],
      w79lxg = new uvas_n(),
      m34hjp = c6r0ka['domBuilder'] || new uak0rc(),
      pf4eu$ = c6r0ka['errorHandler'],
      jph4 = c6r0ka['locator'],
      wolq = c6r0ka['xmlns'] || {},
      $sn_vk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jph4 && m34hjp['setDocumentLocator'](jph4), w79lxg['errorHandler'] = u_s$kvn(pf4eu$, m34hjp, jph4), w79lxg['domBuilder'] = c6r0ka['domBuilder'] || m34hjp, /\/x?html?$/['test'](cr68a) && ($sn_vk['nbsp'] = '\u00a0', $sn_vk['copy'] = '©', wolq[''] = 'http://www.w3.org/1999/xhtml'), wolq['xml'] = wolq['xml'] || 'http://www.w3.org/XML/1998/namespace', c816r ? w79lxg['parse'](c816r, wolq, $sn_vk) : w79lxg['errorHandler']['error']('invalid doc source'), m34hjp['doc'];
}, uak0rc['prototype'] = { 'startDocument': function () {
    this['doc'] = new un$sv_k()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lq7, hojqm, fne$us, rc081) {
    var tzg95 = this['doc'],
        y0r1b = tzg95['createElementNS'](lq7, fne$us || hojqm),
        cka_6v = rc081['length'];uilomqx(this, y0r1b), this['currentElement'] = y0r1b, this['locator'] && u$en_sv(this['locator'], y0r1b);for (var iloxmq = 0x0; cka_6v > iloxmq; iloxmq++) {
      var lq7 = rc081['getURI'](iloxmq),
          gdw79z = rc081['getValue'](iloxmq),
          fne$us = rc081['getQName'](iloxmq),
          qx7lwg = tzg95['createAttributeNS'](lq7, fne$us);this['locator'] && u$en_sv(rc081['getLocator'](iloxmq), qx7lwg), qx7lwg['value'] = qx7lwg['nodeValue'] = gdw79z, y0r1b['setAttributeNode'](qx7lwg);
    }
  }, 'endElement': function () {
    {
      var omx = this['currentElement'];omx['tagName'];
    }this['currentElement'] = omx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (upf4$e, nusef) {
    var v$eusn = this['doc']['createProcessingInstruction'](upf4$e, nusef);this['locator'] && u$en_sv(this['locator'], v$eusn), uilomqx(this, v$eusn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (c0r81) {
    if (c0r81 = uwgzd['apply'](this, arguments)) {
      if (this['cdata']) var m4jih3 = this['doc']['createCDATASection'](c0r81);else var m4jih3 = this['doc']['createTextNode'](c0r81);this['currentElement'] ? this['currentElement']['appendChild'](m4jih3) : /^\s*$/['test'](c0r81) && this['doc']['appendChild'](m4jih3), this['locator'] && u$en_sv(this['locator'], m4jih3);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (joi3) {
    (this['locator'] = joi3) && (joi3['lineNumber'] = 0x0);
  }, 'comment': function (g9wd5z) {
    g9wd5z = uwgzd['apply'](this, arguments);var cra60k = this['doc']['createComment'](g9wd5z);this['locator'] && u$en_sv(this['locator'], cra60k), uilomqx(this, cra60k);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (c1680r, qhimol, c01) {
    var sn$feu = this['doc']['implementation'];if (sn$feu && sn$feu['createDocumentType']) {
      var uvs$n = sn$feu['createDocumentType'](c1680r, qhimol, c01);this['locator'] && u$en_sv(this['locator'], uvs$n), uilomqx(this, uvs$n);
    }
  }, 'warning': function (s$e_) {
    console['warn']('[xmldom warning]\t' + s$e_, ue$fsn(this['locator']));
  }, 'error': function (tdzg59) {
    console['error']('[xmldom error]\t' + tdzg59, ue$fsn(this['locator']));
  }, 'fatalError': function (u3fj4p) {
    throw console['error']('[xmldom fatalError]\t' + u3fj4p, ue$fsn(this['locator'])), u3fj4p;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oqwlx) {
  uak0rc['prototype'][oqwlx] = function () {
    return null;
  };
});var uvas_n = require('./uu12uu')['XMLReader'],
    un$sv_k = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uc0ar6k;