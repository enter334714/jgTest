var B = wx.$z;
function zr_oj(b5u7si) {
  this['options'] = b5u7si || { 'locator': {} };
}function zruojg(hzn0wm, zfmh, wzd93) {
  function orusij(soujgr) {
    var jgre = hzn0wm[soujgr];!jgre && hz0f && (jgre = 0x2 == hzn0wm['length'] ? function (ujosri) {
      hzn0wm(soujgr, ujosri);
    } : hzn0wm), ehnqa[soujgr] = jgre && function (anhq0) {
      jgre('[xmldom ' + soujgr + ']\t' + anhq0 + zf39zwd(wzd93));
    } || function () {};
  }if (!hzn0wm) {
    if (zfmh instanceof zyltv$2) return zfmh;hzn0wm = zfmh;
  }var ehnqa = {},
      hz0f = hzn0wm instanceof Function;return wzd93 = wzd93 || {}, orusij('warning'), orusij('error'), orusij('fatalError'), ehnqa;
}function zyltv$2() {
  this['cdata'] = !0x1;
}function zosr7(sb57ui, hnqe) {
  hnqe['lineNumber'] = sb57ui['lineNumber'], hnqe['columnNumber'] = sb57ui['columnNumber'];
}function zf39zwd(x83p16) {
  return x83p16 ? '\x0a@' + (x83p16['systemId'] || '') + '#[line:' + x83p16['lineNumber'] + ',col:' + x83p16['columnNumber'] + ']' : void 0x0;
}function zmhan0(e_rga, p81x6, rus7i) {
  return 'string' == typeof e_rga ? e_rga['substr'](p81x6, rus7i) : e_rga['length'] >= p81x6 + rus7i || p81x6 ? new java['lang']['String'](e_rga, p81x6, rus7i) + '' : e_rga;
}function zouijsr(yt$25, mwz9d) {
  yt$25['currentElement'] ? yt$25['currentElement']['appendChild'](mwz9d) : yt$25['doc']['appendChild'](mwz9d);
}zr_oj['prototype']['parseFromString'] = function (d83, f96z3) {
  var dm9fzw = this['options'],
      whf0m = new zj_grae(),
      hw0q = dm9fzw['domBuilder'] || new zyltv$2(),
      xp831 = dm9fzw['errorHandler'],
      g_eqan = dm9fzw['locator'],
      ergaj = dm9fzw['xmlns'] || {},
      f93z = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return g_eqan && hw0q['setDocumentLocator'](g_eqan), whf0m['errorHandler'] = zruojg(xp831, hw0q, g_eqan), whf0m['domBuilder'] = dm9fzw['domBuilder'] || hw0q, /\/x?html?$/['test'](f96z3) && (f93z['nbsp'] = '\u00a0', f93z['copy'] = '©', ergaj[''] = 'http://www.w3.org/1999/xhtml'), ergaj['xml'] = ergaj['xml'] || 'http://www.w3.org/XML/1998/namespace', d83 ? whf0m['parse'](d83, ergaj, f93z) : whf0m['errorHandler']['error']('invalid doc source'), hw0q['doc'];
}, zyltv$2['prototype'] = { 'startDocument': function () {
    this['doc'] = new zp316x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mh0wz, jrosi, tb72y, uiy5b7) {
    var px4k = this['doc'],
        hqw0nm = px4k['createElementNS'](mh0wz, tb72y || jrosi),
        y2v$ = uiy5b7['length'];zouijsr(this, hqw0nm), this['currentElement'] = hqw0nm, this['locator'] && zosr7(this['locator'], hqw0nm);for (var aerg_j = 0x0; y2v$ > aerg_j; aerg_j++) {
      var mh0wz = uiy5b7['getURI'](aerg_j),
          u7iy = uiy5b7['getValue'](aerg_j),
          tb72y = uiy5b7['getQName'](aerg_j),
          ybi5 = px4k['createAttributeNS'](mh0wz, tb72y);this['locator'] && zosr7(uiy5b7['getLocator'](aerg_j), ybi5), ybi5['value'] = ybi5['nodeValue'] = u7iy, hqw0nm['setAttributeNode'](ybi5);
    }
  }, 'endElement': function () {
    {
      var bu7ois = this['currentElement'];bu7ois['tagName'];
    }this['currentElement'] = bu7ois['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ejr_a, f9d6) {
    var by7iu5 = this['doc']['createProcessingInstruction'](ejr_a, f9d6);this['locator'] && zosr7(this['locator'], by7iu5), zouijsr(this, by7iu5);
  }, 'ignorableWhitespace': function () {}, 'characters': function (q0ma) {
    if (q0ma = zmhan0['apply'](this, arguments)) {
      if (this['cdata']) var $2tyl = this['doc']['createCDATASection'](q0ma);else var $2tyl = this['doc']['createTextNode'](q0ma);this['currentElement'] ? this['currentElement']['appendChild']($2tyl) : /^\s*$/['test'](q0ma) && this['doc']['appendChild']($2tyl), this['locator'] && zosr7(this['locator'], $2tyl);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (q0mhan) {
    (this['locator'] = q0mhan) && (q0mhan['lineNumber'] = 0x0);
  }, 'comment': function (f316) {
    f316 = zmhan0['apply'](this, arguments);var ae_hq = this['doc']['createComment'](f316);this['locator'] && zosr7(this['locator'], ae_hq), zouijsr(this, ae_hq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (b7i, yl2$v, $tby52) {
    var vtl$ = this['doc']['implementation'];if (vtl$ && vtl$['createDocumentType']) {
      var eng = vtl$['createDocumentType'](b7i, yl2$v, $tby52);this['locator'] && zosr7(this['locator'], eng), zouijsr(this, eng);
    }
  }, 'warning': function (vl$2y) {
    console['warn']('[xmldom warning]\t' + vl$2y, zf39zwd(this['locator']));
  }, 'error': function (_0qanh) {
    console['error']('[xmldom error]\t' + _0qanh, zf39zwd(this['locator']));
  }, 'fatalError': function (zmwhf0) {
    throw console['error']('[xmldom fatalError]\t' + zmwhf0, zf39zwd(this['locator'])), zmwhf0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yb25t$) {
  zyltv$2['prototype'][yb25t$] = function () {
    return null;
  };
});var zj_grae = require('./Z11sax')['XMLReader'],
    zp316x = exports['DOMImplementation'] = require('./Z11dom')['DOMImplementation'];exports['XMLSerializer'] = require('./Z11dom')['XMLSerializer'], exports['DOMParser'] = zr_oj;