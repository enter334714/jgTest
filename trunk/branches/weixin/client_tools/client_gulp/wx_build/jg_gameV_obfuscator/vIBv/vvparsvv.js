var Q = wx.$v;
function vbl4a76(ur_01) {
  this['options'] = ur_01 || { 'locator': {} };
}function veqk$5(t2c3m, jotcy8, _$f1e) {
  function fq_$e(tsmcj2) {
    var m2cjt = t2c3m[tsmcj2];!m2cjt && ru0iz && (m2cjt = 0x2 == t2c3m['length'] ? function (cyotj) {
      t2c3m(tsmcj2, cyotj);
    } : t2c3m), z6una4[tsmcj2] = m2cjt && function (m9st3) {
      m2cjt('[xmldom ' + tsmcj2 + ']\t' + m9st3 + vb397ls(_$f1e));
    } || function () {};
  }if (!t2c3m) {
    if (jotcy8 instanceof vuizr0n) return jotcy8;t2c3m = jotcy8;
  }var z6una4 = {},
      ru0iz = t2c3m instanceof Function;return _$f1e = _$f1e || {}, fq_$e('warning'), fq_$e('error'), fq_$e('fatalError'), z6una4;
}function vuizr0n() {
  this['cdata'] = !0x1;
}function vu6an4(jct2o, lza64) {
  lza64['lineNumber'] = jct2o['lineNumber'], lza64['columnNumber'] = jct2o['columnNumber'];
}function vb397ls(cm8t) {
  return cm8t ? '\x0a@' + (cm8t['systemId'] || '') + '#[line:' + cm8t['lineNumber'] + ',col:' + cm8t['columnNumber'] + ']' : void 0x0;
}function vkf5dvw(m2937s, cs2mjt, ph8yjo) {
  return 'string' == typeof m2937s ? m2937s['substr'](cs2mjt, ph8yjo) : m2937s['length'] >= cs2mjt + ph8yjo || cs2mjt ? new java['lang']['String'](m2937s, cs2mjt, ph8yjo) + '' : m2937s;
}function vm9t2s(nrau6z, _0ui1) {
  nrau6z['currentElement'] ? nrau6z['currentElement']['appendChild'](_0ui1) : nrau6z['doc']['appendChild'](_0ui1);
}vbl4a76['prototype']['parseFromString'] = function (mjsc2, fqe$5) {
  var u0rz6 = this['options'],
      zu06rn = new vt8yjoc(),
      lba746 = u0rz6['domBuilder'] || new vuizr0n(),
      fwk5v = u0rz6['errorHandler'],
      kfw5vd = u0rz6['locator'],
      mt29 = u0rz6['xmlns'] || {},
      yoc8jh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kfw5vd && lba746['setDocumentLocator'](kfw5vd), zu06rn['errorHandler'] = veqk$5(fwk5v, lba746, kfw5vd), zu06rn['domBuilder'] = u0rz6['domBuilder'] || lba746, /\/x?html?$/['test'](fqe$5) && (yoc8jh['nbsp'] = '\u00a0', yoc8jh['copy'] = '©', mt29[''] = 'http://www.w3.org/1999/xhtml'), mt29['xml'] = mt29['xml'] || 'http://www.w3.org/XML/1998/namespace', mjsc2 ? zu06rn['parse'](mjsc2, mt29, yoc8jh) : zu06rn['errorHandler']['error']('invalid doc source'), lba746['doc'];
}, vuizr0n['prototype'] = { 'startDocument': function () {
    this['doc'] = new v_0q1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (eq0_1, _$1qie, s2m937, a4zlb) {
    var u0rzn6 = this['doc'],
        bla794 = u0rzn6['createElementNS'](eq0_1, s2m937 || _$1qie),
        z6ba4 = a4zlb['length'];vm9t2s(this, bla794), this['currentElement'] = bla794, this['locator'] && vu6an4(this['locator'], bla794);for (var d5kw = 0x0; z6ba4 > d5kw; d5kw++) {
      var eq0_1 = a4zlb['getURI'](d5kw),
          b4an6z = a4zlb['getValue'](d5kw),
          s2m937 = a4zlb['getQName'](d5kw),
          w5kx = u0rzn6['createAttributeNS'](eq0_1, s2m937);this['locator'] && vu6an4(a4zlb['getLocator'](d5kw), w5kx), w5kx['value'] = w5kx['nodeValue'] = b4an6z, bla794['setAttributeNode'](w5kx);
    }
  }, 'endElement': function () {
    {
      var iq1e_$ = this['currentElement'];iq1e_$['tagName'];
    }this['currentElement'] = iq1e_$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cjyto, j2cmst) {
    var l4b37 = this['doc']['createProcessingInstruction'](cjyto, j2cmst);this['locator'] && vu6an4(this['locator'], l4b37), vm9t2s(this, l4b37);
  }, 'ignorableWhitespace': function () {}, 'characters': function (y8jco) {
    if (y8jco = vkf5dvw['apply'](this, arguments)) {
      if (this['cdata']) var $5keq = this['doc']['createCDATASection'](y8jco);else var $5keq = this['doc']['createTextNode'](y8jco);this['currentElement'] ? this['currentElement']['appendChild']($5keq) : /^\s*$/['test'](y8jco) && this['doc']['appendChild']($5keq), this['locator'] && vu6an4(this['locator'], $5keq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kw5$v) {
    (this['locator'] = kw5$v) && (kw5$v['lineNumber'] = 0x0);
  }, 'comment': function (qe_i10) {
    qe_i10 = vkf5dvw['apply'](this, arguments);var ochj = this['doc']['createComment'](qe_i10);this['locator'] && vu6an4(this['locator'], ochj), vm9t2s(this, ochj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (w5fkq, k$vwf, ojct) {
    var iru_1 = this['doc']['implementation'];if (iru_1 && iru_1['createDocumentType']) {
      var wk$q = iru_1['createDocumentType'](w5fkq, k$vwf, ojct);this['locator'] && vu6an4(this['locator'], wk$q), vm9t2s(this, wk$q);
    }
  }, 'warning': function (fqe5$) {
    console['warn']('[xmldom warning]\t' + fqe5$, vb397ls(this['locator']));
  }, 'error': function (chj8) {
    console['error']('[xmldom error]\t' + chj8, vb397ls(this['locator']));
  }, 'fatalError': function (fkw5q$) {
    throw console['error']('[xmldom fatalError]\t' + fkw5q$, vb397ls(this['locator'])), fkw5q$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (anu6) {
  vuizr0n['prototype'][anu6] = function () {
    return null;
  };
});var vt8yjoc = require('./vv12vv')['XMLReader'],
    v_0q1 = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vbl4a76;