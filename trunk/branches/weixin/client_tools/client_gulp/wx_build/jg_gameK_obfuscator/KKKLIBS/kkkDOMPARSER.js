var U = wx.$k;
function K1_rlud$_(cfy35g) {
  this['options'] = cfy35g || { 'locator': {} };
}function K1_$dlax(isk, $ldax, q0nv8) {
  function zwoxab(xbzwv) {
    var _l$urd = isk[xbzwv];!_l$urd && r5_g3 && (_l$urd = 0x2 == isk['length'] ? function (pgf35r) {
      isk(xbzwv, pgf35r);
    } : isk), heks9[xbzwv] = _l$urd && function (uazl$x) {
      _l$urd('[xmldom ' + xbzwv + ']\t' + uazl$x + K1_p5g_3(q0nv8));
    } || function () {};
  }if (!isk) {
    if ($ldax instanceof K1_oxzbw) return $ldax;isk = $ldax;
  }var heks9 = {},
      r5_g3 = isk instanceof Function;return q0nv8 = q0nv8 || {}, zwoxab('warning'), zwoxab('error'), zwoxab('fatalError'), heks9;
}function K1_oxzbw() {
  this['cdata'] = !0x1;
}function K1_pf3c5(zubaxl, ru_$) {
  ru_$['lineNumber'] = zubaxl['lineNumber'], ru_$['columnNumber'] = zubaxl['columnNumber'];
}function K1_p5g_3(q9820s) {
  return q9820s ? '\x0a@' + (q9820s['systemId'] || '') + '#[line:' + q9820s['lineNumber'] + ',col:' + q9820s['columnNumber'] + ']' : void 0x0;
}function K1_hte67(it7je, gr5_3, _lurd) {
  return 'string' == typeof it7je ? it7je['substr'](gr5_3, _lurd) : it7je['length'] >= gr5_3 + _lurd || gr5_3 ? new java['lang']['String'](it7je, gr5_3, _lurd) + '' : it7je;
}function K1_au$zx(z1wob, w1ozv) {
  z1wob['currentElement'] ? z1wob['currentElement']['appendChild'](w1ozv) : z1wob['doc']['appendChild'](w1ozv);
}K1_rlud$_['prototype']['parseFromString'] = function (gy53, k28s9) {
  var s6kh29 = this['options'],
      n8q0v1 = new K1__l$a(),
      wb1ozv = s6kh29['domBuilder'] || new K1_oxzbw(),
      xzula$ = s6kh29['errorHandler'],
      h7ie6t = s6kh29['locator'],
      wbxzau = s6kh29['xmlns'] || {},
      r3pf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h7ie6t && wb1ozv['setDocumentLocator'](h7ie6t), n8q0v1['errorHandler'] = K1_$dlax(xzula$, wb1ozv, h7ie6t), n8q0v1['domBuilder'] = s6kh29['domBuilder'] || wb1ozv, /\/x?html?$/['test'](k28s9) && (r3pf['nbsp'] = '\u00a0', r3pf['copy'] = '©', wbxzau[''] = 'http://www.w3.org/1999/xhtml'), wbxzau['xml'] = wbxzau['xml'] || 'http://www.w3.org/XML/1998/namespace', gy53 ? n8q0v1['parse'](gy53, wbxzau, r3pf) : n8q0v1['errorHandler']['error']('invalid doc source'), wb1ozv['doc'];
}, K1_oxzbw['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_iehkt6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (q2801n, $ur_, wzuxab, pg3r) {
    var eh67it = this['doc'],
        bxwaz = eh67it['createElementNS'](q2801n, wzuxab || $ur_),
        lua$xd = pg3r['length'];K1_au$zx(this, bxwaz), this['currentElement'] = bxwaz, this['locator'] && K1_pf3c5(this['locator'], bxwaz);for (var axzwbu = 0x0; lua$xd > axzwbu; axzwbu++) {
      var q2801n = pg3r['getURI'](axzwbu),
          xl$dua = pg3r['getValue'](axzwbu),
          wzuxab = pg3r['getQName'](axzwbu),
          lu$_da = eh67it['createAttributeNS'](q2801n, wzuxab);this['locator'] && K1_pf3c5(pg3r['getLocator'](axzwbu), lu$_da), lu$_da['value'] = lu$_da['nodeValue'] = xl$dua, bxwaz['setAttributeNode'](lu$_da);
    }
  }, 'endElement': function () {
    {
      var abwzux = this['currentElement'];abwzux['tagName'];
    }this['currentElement'] = abwzux['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zabwux, xbwauz) {
    var qo1v0 = this['doc']['createProcessingInstruction'](zabwux, xbwauz);this['locator'] && K1_pf3c5(this['locator'], qo1v0), K1_au$zx(this, qo1v0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (waxzu) {
    if (waxzu = K1_hte67['apply'](this, arguments)) {
      if (this['cdata']) var zxwvob = this['doc']['createCDATASection'](waxzu);else var zxwvob = this['doc']['createTextNode'](waxzu);this['currentElement'] ? this['currentElement']['appendChild'](zxwvob) : /^\s*$/['test'](waxzu) && this['doc']['appendChild'](zxwvob), this['locator'] && K1_pf3c5(this['locator'], zxwvob);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u_ald) {
    (this['locator'] = u_ald) && (u_ald['lineNumber'] = 0x0);
  }, 'comment': function (i6keh) {
    i6keh = K1_hte67['apply'](this, arguments);var l$rdu_ = this['doc']['createComment'](i6keh);this['locator'] && K1_pf3c5(this['locator'], l$rdu_), K1_au$zx(this, l$rdu_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s6h9ke, emj7i, ji7he) {
    var gy3cf5 = this['doc']['implementation'];if (gy3cf5 && gy3cf5['createDocumentType']) {
      var jihe = gy3cf5['createDocumentType'](s6h9ke, emj7i, ji7he);this['locator'] && K1_pf3c5(this['locator'], jihe), K1_au$zx(this, jihe);
    }
  }, 'warning': function (k2h6s9) {
    console['warn']('[xmldom warning]\t' + k2h6s9, K1_p5g_3(this['locator']));
  }, 'error': function (von0q) {
    console['error']('[xmldom error]\t' + von0q, K1_p5g_3(this['locator']));
  }, 'fatalError': function (ua$l_d) {
    throw console['error']('[xmldom fatalError]\t' + ua$l_d, K1_p5g_3(this['locator'])), ua$l_d;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oaxwzb) {
  K1_oxzbw['prototype'][oaxwzb] = function () {
    return null;
  };
});var K1__l$a = require('./kkkSAX')['XMLReader'],
    K1_iehkt6 = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_rlud$_;