var b = wx.$e;
function enksq9u($jx) {
  this['options'] = $jx || { 'locator': {} };
}function eg$tx(lfzhry, jxtg$, su3qn) {
  function rthyz(z_) {
    var hlrzyt = lfzhry[z_];!hlrzyt && n3juq && (hlrzyt = 0x2 == lfzhry['length'] ? function (xtj$gi) {
      lfzhry(z_, xtj$gi);
    } : lfzhry), m7v4[z_] = hlrzyt && function (vfyz) {
      hlrzyt('[xmldom ' + z_ + ']\t' + vfyz + enusqk9(su3qn));
    } || function () {};
  }if (!lfzhry) {
    if (jxtg$ instanceof ema_7co) return jxtg$;lfzhry = jxtg$;
  }var m7v4 = {},
      n3juq = lfzhry instanceof Function;return su3qn = su3qn || {}, rthyz('warning'), rthyz('error'), rthyz('fatalError'), m7v4;
}function ema_7co() {
  this['cdata'] = !0x1;
}function eksu6b9(mo7pc, k9d6) {
  k9d6['lineNumber'] = mo7pc['lineNumber'], k9d6['columnNumber'] = mo7pc['columnNumber'];
}function enusqk9($gtlxh) {
  return $gtlxh ? '\x0a@' + ($gtlxh['systemId'] || '') + '#[line:' + $gtlxh['lineNumber'] + ',col:' + $gtlxh['columnNumber'] + ']' : void 0x0;
}function en3ij$($gxh, $gli, lrtx) {
  return 'string' == typeof $gxh ? $gxh['substr']($gli, lrtx) : $gxh['length'] >= $gli + lrtx || $gli ? new java['lang']['String']($gxh, $gli, lrtx) + '' : $gxh;
}function e$lxhgt(hlzgr, l$ghtx) {
  hlzgr['currentElement'] ? hlzgr['currentElement']['appendChild'](l$ghtx) : hlzgr['doc']['appendChild'](l$ghtx);
}enksq9u['prototype']['parseFromString'] = function (qusk9, sn9u) {
  var cmepoa = this['options'],
      xgl = new eyhzfv(),
      nu3ijq = cmepoa['domBuilder'] || new ema_7co(),
      nuqji3 = cmepoa['errorHandler'],
      i$jx3q = cmepoa['locator'],
      xjg$t = cmepoa['xmlns'] || {},
      v_4a7m = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i$jx3q && nu3ijq['setDocumentLocator'](i$jx3q), xgl['errorHandler'] = eg$tx(nuqji3, nu3ijq, i$jx3q), xgl['domBuilder'] = cmepoa['domBuilder'] || nu3ijq, /\/x?html?$/['test'](sn9u) && (v_4a7m['nbsp'] = '\u00a0', v_4a7m['copy'] = '©', xjg$t[''] = 'http://www.w3.org/1999/xhtml'), xjg$t['xml'] = xjg$t['xml'] || 'http://www.w3.org/XML/1998/namespace', qusk9 ? xgl['parse'](qusk9, xjg$t, v_4a7m) : xgl['errorHandler']['error']('invalid doc source'), nu3ijq['doc'];
}, ema_7co['prototype'] = { 'startDocument': function () {
    this['doc'] = new ezrvyfh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (nq9ku, b5d0k, zhglrt, a_4v) {
    var epcmo = this['doc'],
        j3$xg = epcmo['createElementNS'](nq9ku, zhglrt || b5d0k),
        u9ns3q = a_4v['length'];e$lxhgt(this, j3$xg), this['currentElement'] = j3$xg, this['locator'] && eksu6b9(this['locator'], j3$xg);for (var jun3qs = 0x0; u9ns3q > jun3qs; jun3qs++) {
      var nq9ku = a_4v['getURI'](jun3qs),
          iglxt$ = a_4v['getValue'](jun3qs),
          zhglrt = a_4v['getQName'](jun3qs),
          g3x$ji = epcmo['createAttributeNS'](nq9ku, zhglrt);this['locator'] && eksu6b9(a_4v['getLocator'](jun3qs), g3x$ji), g3x$ji['value'] = g3x$ji['nodeValue'] = iglxt$, j3$xg['setAttributeNode'](g3x$ji);
    }
  }, 'endElement': function () {
    {
      var knus9q = this['currentElement'];knus9q['tagName'];
    }this['currentElement'] = knus9q['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ryhfv, d0k56b) {
    var u3jsn = this['doc']['createProcessingInstruction'](ryhfv, d0k56b);this['locator'] && eksu6b9(this['locator'], u3jsn), e$lxhgt(this, u3jsn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tzhgl) {
    if (tzhgl = en3ij$['apply'](this, arguments)) {
      if (this['cdata']) var s09kb = this['doc']['createCDATASection'](tzhgl);else var s09kb = this['doc']['createTextNode'](tzhgl);this['currentElement'] ? this['currentElement']['appendChild'](s09kb) : /^\s*$/['test'](tzhgl) && this['doc']['appendChild'](s09kb), this['locator'] && eksu6b9(this['locator'], s09kb);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (amc7_4) {
    (this['locator'] = amc7_4) && (amc7_4['lineNumber'] = 0x0);
  }, 'comment': function (coamp) {
    coamp = en3ij$['apply'](this, arguments);var vyzfh = this['doc']['createComment'](coamp);this['locator'] && eksu6b9(this['locator'], vyzfh), e$lxhgt(this, vyzfh);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_c7mao, af4v7_, hxgtr) {
    var mapoec = this['doc']['implementation'];if (mapoec && mapoec['createDocumentType']) {
      var a4f7_ = mapoec['createDocumentType'](_c7mao, af4v7_, hxgtr);this['locator'] && eksu6b9(this['locator'], a4f7_), e$lxhgt(this, a4f7_);
    }
  }, 'warning': function (grltx) {
    console['warn']('[xmldom warning]\t' + grltx, enusqk9(this['locator']));
  }, 'error': function (yfhrv) {
    console['error']('[xmldom error]\t' + yfhrv, enusqk9(this['locator']));
  }, 'fatalError': function (i$n3) {
    throw console['error']('[xmldom fatalError]\t' + i$n3, enusqk9(this['locator'])), i$n3;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rhvz) {
  ema_7co['prototype'][rhvz] = function () {
    return null;
  };
});var eyhzfv = require('./eeesax')['XMLReader'],
    ezrvyfh = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = enksq9u;