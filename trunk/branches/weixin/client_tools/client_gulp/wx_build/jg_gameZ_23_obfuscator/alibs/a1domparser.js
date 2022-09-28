var c = wx.$a;
function gb$ml9a(j21sfx) {
  this['options'] = j21sfx || { 'locator': {} };
}function gdzkv(trdq85, uw2e, gsx1f2) {
  function jshvnx(b4yco0) {
    var d8t6r = trdq85[b4yco0];!d8t6r && co4 && (d8t6r = 0x2 == trdq85['length'] ? function (_uo4w) {
      trdq85(b4yco0, _uo4w);
    } : trdq85), nvxfjs[b4yco0] = d8t6r && function (e4wg) {
      d8t6r('[xmldom ' + b4yco0 + ']\t' + e4wg + gy$lb0(gsx1f2));
    } || function () {};
  }if (!trdq85) {
    if (uw2e instanceof g$m9bla) return uw2e;trdq85 = uw2e;
  }var nvxfjs = {},
      co4 = trdq85 instanceof Function;return gsx1f2 = gsx1f2 || {}, jshvnx('warning'), jshvnx('error'), jshvnx('fatalError'), nvxfjs;
}function g$m9bla() {
  this['cdata'] = !0x1;
}function gu12wge(cyo0b$, kd8z6q) {
  kd8z6q['lineNumber'] = cyo0b$['lineNumber'], kd8z6q['columnNumber'] = cyo0b$['columnNumber'];
}function gy$lb0(cb0l) {
  return cb0l ? '\x0a@' + (cb0l['systemId'] || '') + '#[line:' + cb0l['lineNumber'] + ',col:' + cb0l['columnNumber'] + ']' : void 0x0;
}function g$mlac(g1euw2, $mlbcy, gew21u) {
  return 'string' == typeof g1euw2 ? g1euw2['substr']($mlbcy, gew21u) : g1euw2['length'] >= $mlbcy + gew21u || $mlbcy ? new java['lang']['String'](g1euw2, $mlbcy, gew21u) + '' : g1euw2;
}function gd8ktq6(p73t5, n1fj) {
  p73t5['currentElement'] ? p73t5['currentElement']['appendChild'](n1fj) : p73t5['doc']['appendChild'](n1fj);
}gb$ml9a['prototype']['parseFromString'] = function (d6tk8q, zkhvnj) {
  var $ylbc0 = this['options'],
      jvs = new g_2eg(),
      y_0c4o = $ylbc0['domBuilder'] || new g$m9bla(),
      _0o4 = $ylbc0['errorHandler'],
      jfsnxv = $ylbc0['locator'],
      yco4_ = $ylbc0['xmlns'] || {},
      mb$9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jfsnxv && y_0c4o['setDocumentLocator'](jfsnxv), jvs['errorHandler'] = gdzkv(_0o4, y_0c4o, jfsnxv), jvs['domBuilder'] = $ylbc0['domBuilder'] || y_0c4o, /\/x?html?$/['test'](zkhvnj) && (mb$9['nbsp'] = '\u00a0', mb$9['copy'] = '©', yco4_[''] = 'http://www.w3.org/1999/xhtml'), yco4_['xml'] = yco4_['xml'] || 'http://www.w3.org/XML/1998/namespace', d6tk8q ? jvs['parse'](d6tk8q, yco4_, mb$9) : jvs['errorHandler']['error']('invalid doc source'), y_0c4o['doc'];
}, g$m9bla['prototype'] = { 'startDocument': function () {
    this['doc'] = new gf1jsx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (td86q, ue_gw, r8qtd5, r875tq) {
    var cy04 = this['doc'],
        kdhvz6 = cy04['createElementNS'](td86q, r8qtd5 || ue_gw),
        tp37 = r875tq['length'];gd8ktq6(this, kdhvz6), this['currentElement'] = kdhvz6, this['locator'] && gu12wge(this['locator'], kdhvz6);for (var qzk68d = 0x0; tp37 > qzk68d; qzk68d++) {
      var td86q = r875tq['getURI'](qzk68d),
          rtp73 = r875tq['getValue'](qzk68d),
          r8qtd5 = r875tq['getQName'](qzk68d),
          wu_2e = cy04['createAttributeNS'](td86q, r8qtd5);this['locator'] && gu12wge(r875tq['getLocator'](qzk68d), wu_2e), wu_2e['value'] = wu_2e['nodeValue'] = rtp73, kdhvz6['setAttributeNode'](wu_2e);
    }
  }, 'endElement': function () {
    {
      var dr5qt8 = this['currentElement'];dr5qt8['tagName'];
    }this['currentElement'] = dr5qt8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ue1g2, kzhnv6) {
    var uge4 = this['doc']['createProcessingInstruction'](ue1g2, kzhnv6);this['locator'] && gu12wge(this['locator'], uge4), gd8ktq6(this, uge4);
  }, 'ignorableWhitespace': function () {}, 'characters': function (blcym$) {
    if (blcym$ = g$mlac['apply'](this, arguments)) {
      if (this['cdata']) var vsjhnz = this['doc']['createCDATASection'](blcym$);else var vsjhnz = this['doc']['createTextNode'](blcym$);this['currentElement'] ? this['currentElement']['appendChild'](vsjhnz) : /^\s*$/['test'](blcym$) && this['doc']['appendChild'](vsjhnz), this['locator'] && gu12wge(this['locator'], vsjhnz);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (cmbl) {
    (this['locator'] = cmbl) && (cmbl['lineNumber'] = 0x0);
  }, 'comment': function (oue4w_) {
    oue4w_ = g$mlac['apply'](this, arguments);var b0oyc4 = this['doc']['createComment'](oue4w_);this['locator'] && gu12wge(this['locator'], b0oyc4), gd8ktq6(this, b0oyc4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (lbam9, $al9b, n6khvz) {
    var $cl = this['doc']['implementation'];if ($cl && $cl['createDocumentType']) {
      var l9bam$ = $cl['createDocumentType'](lbam9, $al9b, n6khvz);this['locator'] && gu12wge(this['locator'], l9bam$), gd8ktq6(this, l9bam$);
    }
  }, 'warning': function (a$blm9) {
    console['warn']('[xmldom warning]\t' + a$blm9, gy$lb0(this['locator']));
  }, 'error': function (r7p53i) {
    console['error']('[xmldom error]\t' + r7p53i, gy$lb0(this['locator']));
  }, 'fatalError': function (qhdz) {
    throw console['error']('[xmldom fatalError]\t' + qhdz, gy$lb0(this['locator'])), qhdz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rtq87) {
  g$m9bla['prototype'][rtq87] = function () {
    return null;
  };
});var g_2eg = require('./a1sax')['XMLReader'],
    gf1jsx = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gb$ml9a;