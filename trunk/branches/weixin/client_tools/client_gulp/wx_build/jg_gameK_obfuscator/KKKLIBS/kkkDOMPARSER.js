var U = wx.$k;
function K1_$drp_5(eitmj7) {
  this['options'] = eitmj7 || { 'locator': {} };
}function K1_e6kish(n1owb, adu$, ks896) {
  function g53frp(i47jtm) {
    var k6s2h9 = n1owb[i47jtm];!k6s2h9 && esh96k && (k6s2h9 = 0x2 == n1owb['length'] ? function (s968) {
      n1owb(i47jtm, s968);
    } : n1owb), e6sk9h[i47jtm] = k6s2h9 && function (p5cg3) {
      k6s2h9('[xmldom ' + i47jtm + ']\t' + p5cg3 + K1_plr_d(ks896));
    } || function () {};
  }if (!n1owb) {
    if (adu$ instanceof K1_nq0928) return adu$;n1owb = adu$;
  }var e6sk9h = {},
      esh96k = n1owb instanceof Function;return ks896 = ks896 || {}, g53frp('warning'), g53frp('error'), g53frp('fatalError'), e6sk9h;
}function K1_nq0928() {
  this['cdata'] = !0x1;
}function K1_qnv1(c5gy, xblu) {
  xblu['lineNumber'] = c5gy['lineNumber'], xblu['columnNumber'] = c5gy['columnNumber'];
}function K1_plr_d(xuadl$) {
  return xuadl$ ? '\x0a@' + (xuadl$['systemId'] || '') + '#[line:' + xuadl$['lineNumber'] + ',col:' + xuadl$['columnNumber'] + ']' : void 0x0;
}function K1_jmet(gp, hkeis, mtej7) {
  return 'string' == typeof gp ? gp['substr'](hkeis, mtej7) : gp['length'] >= hkeis + mtej7 || hkeis ? new java['lang']['String'](gp, hkeis, mtej7) + '' : gp;
}function K1_da$l_(emi7, dl_ru) {
  emi7['currentElement'] ? emi7['currentElement']['appendChild'](dl_ru) : emi7['doc']['appendChild'](dl_ru);
}K1_$drp_5['prototype']['parseFromString'] = function (lxaub, r35p_) {
  var azlxbu = this['options'],
      teh = new K1_tij74m(),
      ladxu$ = azlxbu['domBuilder'] || new K1_nq0928(),
      ehk9 = azlxbu['errorHandler'],
      hj7tei = azlxbu['locator'],
      d_$5r = azlxbu['xmlns'] || {},
      ulda_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hj7tei && ladxu$['setDocumentLocator'](hj7tei), teh['errorHandler'] = K1_e6kish(ehk9, ladxu$, hj7tei), teh['domBuilder'] = azlxbu['domBuilder'] || ladxu$, /\/x?html?$/['test'](r35p_) && (ulda_['nbsp'] = '\u00a0', ulda_['copy'] = '©', d_$5r[''] = 'http://www.w3.org/1999/xhtml'), d_$5r['xml'] = d_$5r['xml'] || 'http://www.w3.org/XML/1998/namespace', lxaub ? teh['parse'](lxaub, d_$5r, ulda_) : teh['errorHandler']['error']('invalid doc source'), ladxu$['doc'];
}, K1_nq0928['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_k6829()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (q1wnov, xwuza, mt47, rlpd_$) {
    var nq0812 = this['doc'],
        $pdr5 = nq0812['createElementNS'](q1wnov, mt47 || xwuza),
        axzubl = rlpd_$['length'];K1_da$l_(this, $pdr5), this['currentElement'] = $pdr5, this['locator'] && K1_qnv1(this['locator'], $pdr5);for (var htik6e = 0x0; axzubl > htik6e; htik6e++) {
      var q1wnov = rlpd_$['getURI'](htik6e),
          _d5p$r = rlpd_$['getValue'](htik6e),
          mt47 = rlpd_$['getQName'](htik6e),
          mt4 = nq0812['createAttributeNS'](q1wnov, mt47);this['locator'] && K1_qnv1(rlpd_$['getLocator'](htik6e), mt4), mt4['value'] = mt4['nodeValue'] = _d5p$r, $pdr5['setAttributeNode'](mt4);
    }
  }, 'endElement': function () {
    {
      var s682k = this['currentElement'];s682k['tagName'];
    }this['currentElement'] = s682k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (h269s, nwb) {
    var $zulax = this['doc']['createProcessingInstruction'](h269s, nwb);this['locator'] && K1_qnv1(this['locator'], $zulax), K1_da$l_(this, $zulax);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s8q2) {
    if (s8q2 = K1_jmet['apply'](this, arguments)) {
      if (this['cdata']) var abxwzu = this['doc']['createCDATASection'](s8q2);else var abxwzu = this['doc']['createTextNode'](s8q2);this['currentElement'] ? this['currentElement']['appendChild'](abxwzu) : /^\s*$/['test'](s8q2) && this['doc']['appendChild'](abxwzu), this['locator'] && K1_qnv1(this['locator'], abxwzu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (al_du) {
    (this['locator'] = al_du) && (al_du['lineNumber'] = 0x0);
  }, 'comment': function (qwvon1) {
    qwvon1 = K1_jmet['apply'](this, arguments);var cg5y3f = this['doc']['createComment'](qwvon1);this['locator'] && K1_qnv1(this['locator'], cg5y3f), K1_da$l_(this, cg5y3f);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (adxl$u, $xazlu, fcp3g5) {
    var wb1vno = this['doc']['implementation'];if (wb1vno && wb1vno['createDocumentType']) {
      var iejm7 = wb1vno['createDocumentType'](adxl$u, $xazlu, fcp3g5);this['locator'] && K1_qnv1(this['locator'], iejm7), K1_da$l_(this, iejm7);
    }
  }, 'warning': function (awbzx) {
    console['warn']('[xmldom warning]\t' + awbzx, K1_plr_d(this['locator']));
  }, 'error': function (ov1) {
    console['error']('[xmldom error]\t' + ov1, K1_plr_d(this['locator']));
  }, 'fatalError': function (zxawbu) {
    throw console['error']('[xmldom fatalError]\t' + zxawbu, K1_plr_d(this['locator'])), zxawbu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($drul_) {
  K1_nq0928['prototype'][$drul_] = function () {
    return null;
  };
});var K1_tij74m = require('./kkkSAX')['XMLReader'],
    K1_k6829 = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_$drp_5;