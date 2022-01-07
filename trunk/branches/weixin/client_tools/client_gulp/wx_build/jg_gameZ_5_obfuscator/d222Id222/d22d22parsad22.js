var F = wx.$D;
function Dbp9uf(c0esu) {
  this['options'] = c0esu || { 'locator': {} };
}function Depuc03(v6wqkt, qxvwk, kw6xv) {
  function ufp93b(jgmo5) {
    var zn12rh = v6wqkt[jgmo5];!zn12rh && jxw6a && (zn12rh = 0x2 == v6wqkt['length'] ? function (m_5gol) {
      v6wqkt(jgmo5, m_5gol);
    } : v6wqkt), yhn$81[jgmo5] = zn12rh && function (cvs0et) {
      zn12rh('[xmldom ' + jgmo5 + ']\t' + cvs0et + Dwqste(kw6xv));
    } || function () {};
  }if (!v6wqkt) {
    if (qxvwk instanceof Dhyn81$) return qxvwk;v6wqkt = qxvwk;
  }var yhn$81 = {},
      jxw6a = v6wqkt instanceof Function;return kw6xv = kw6xv || {}, ufp93b('warning'), ufp93b('error'), ufp93b('fatalError'), yhn$81;
}function Dhyn81$() {
  this['cdata'] = !0x1;
}function Dr_zhi2(p3bc, e0c3pu) {
  e0c3pu['lineNumber'] = p3bc['lineNumber'], e0c3pu['columnNumber'] = p3bc['columnNumber'];
}function Dwqste(kvswq) {
  return kvswq ? '\x0a@' + (kvswq['systemId'] || '') + '#[line:' + kvswq['lineNumber'] + ',col:' + kvswq['columnNumber'] + ']' : void 0x0;
}function Dqx6wjk(zi_om, h1$82, iz1rh) {
  return 'string' == typeof zi_om ? zi_om['substr'](h1$82, iz1rh) : zi_om['length'] >= h1$82 + iz1rh || h1$82 ? new java['lang']['String'](zi_om, h1$82, iz1rh) + '' : zi_om;
}function Dlzroi_(olgma5, u9c3) {
  olgma5['currentElement'] ? olgma5['currentElement']['appendChild'](u9c3) : olgma5['doc']['appendChild'](u9c3);
}Dbp9uf['prototype']['parseFromString'] = function (wkv6tq, ces0tv) {
  var agx6j5 = this['options'],
      lo_z = new Ds3eu0c(),
      st3c = agx6j5['domBuilder'] || new Dhyn81$(),
      upf3 = agx6j5['errorHandler'],
      fb479 = agx6j5['locator'],
      ct0e = agx6j5['xmlns'] || {},
      vqtes0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fb479 && st3c['setDocumentLocator'](fb479), lo_z['errorHandler'] = Depuc03(upf3, st3c, fb479), lo_z['domBuilder'] = agx6j5['domBuilder'] || st3c, /\/x?html?$/['test'](ces0tv) && (vqtes0['nbsp'] = '\u00a0', vqtes0['copy'] = '©', ct0e[''] = 'http://www.w3.org/1999/xhtml'), ct0e['xml'] = ct0e['xml'] || 'http://www.w3.org/XML/1998/namespace', wkv6tq ? lo_z['parse'](wkv6tq, ct0e, vqtes0) : lo_z['errorHandler']['error']('invalid doc source'), st3c['doc'];
}, Dhyn81$['prototype'] = { 'startDocument': function () {
    this['doc'] = new Doamgl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ol5_mi, se0vct, up7fb, milo) {
    var xk6gja = this['doc'],
        ewqvst = xk6gja['createElementNS'](ol5_mi, up7fb || se0vct),
        g5oj = milo['length'];Dlzroi_(this, ewqvst), this['currentElement'] = ewqvst, this['locator'] && Dr_zhi2(this['locator'], ewqvst);for (var gmaxj = 0x0; g5oj > gmaxj; gmaxj++) {
      var ol5_mi = milo['getURI'](gmaxj),
          hzri_2 = milo['getValue'](gmaxj),
          up7fb = milo['getQName'](gmaxj),
          stc03 = xk6gja['createAttributeNS'](ol5_mi, up7fb);this['locator'] && Dr_zhi2(milo['getLocator'](gmaxj), stc03), stc03['value'] = stc03['nodeValue'] = hzri_2, ewqvst['setAttributeNode'](stc03);
    }
  }, 'endElement': function () {
    {
      var kjxwa6 = this['currentElement'];kjxwa6['tagName'];
    }this['currentElement'] = kjxwa6['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (amj5g, jkagx6) {
    var es0ct = this['doc']['createProcessingInstruction'](amj5g, jkagx6);this['locator'] && Dr_zhi2(this['locator'], es0ct), Dlzroi_(this, es0ct);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qwvtes) {
    if (qwvtes = Dqx6wjk['apply'](this, arguments)) {
      if (this['cdata']) var oml5i_ = this['doc']['createCDATASection'](qwvtes);else var oml5i_ = this['doc']['createTextNode'](qwvtes);this['currentElement'] ? this['currentElement']['appendChild'](oml5i_) : /^\s*$/['test'](qwvtes) && this['doc']['appendChild'](oml5i_), this['locator'] && Dr_zhi2(this['locator'], oml5i_);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (r12ihz) {
    (this['locator'] = r12ihz) && (r12ihz['lineNumber'] = 0x0);
  }, 'comment': function (esu30c) {
    esu30c = Dqx6wjk['apply'](this, arguments);var vwqste = this['doc']['createComment'](esu30c);this['locator'] && Dr_zhi2(this['locator'], vwqste), Dlzroi_(this, vwqste);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s0vtc, ax6wkj, or_liz) {
    var ir_2 = this['doc']['implementation'];if (ir_2 && ir_2['createDocumentType']) {
      var rhiz21 = ir_2['createDocumentType'](s0vtc, ax6wkj, or_liz);this['locator'] && Dr_zhi2(this['locator'], rhiz21), Dlzroi_(this, rhiz21);
    }
  }, 'warning': function (z_2rli) {
    console['warn']('[xmldom warning]\t' + z_2rli, Dwqste(this['locator']));
  }, 'error': function (h2izr1) {
    console['error']('[xmldom error]\t' + h2izr1, Dwqste(this['locator']));
  }, 'fatalError': function (use0c3) {
    throw console['error']('[xmldom fatalError]\t' + use0c3, Dwqste(this['locator'])), use0c3;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (t0vsce) {
  Dhyn81$['prototype'][t0vsce] = function () {
    return null;
  };
});var Ds3eu0c = require('./d22d22cd22d22')['XMLReader'],
    Doamgl = exports['DOMImplementation'] = require('./d22d22DOd22d22')['DOMImplementation'];exports['XMLSerializer'] = require('./d22d22DOd22d22')['XMLSerializer'], exports['DOMParser'] = Dbp9uf;