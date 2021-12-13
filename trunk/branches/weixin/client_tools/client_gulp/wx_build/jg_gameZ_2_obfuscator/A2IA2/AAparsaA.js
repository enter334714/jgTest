var d = wx.$A;
function Au1k3pi(jnsd6m) {
  this['options'] = jnsd6m || { 'locator': {} };
}function Aoq_gb(tq_o, g_qb4, k3u1) {
  function hlwj(d$m9) {
    var o4q_b = tq_o[d$m9];!o4q_b && _btog && (o4q_b = 0x2 == tq_o['length'] ? function (_gbqo) {
      tq_o(d$m9, _gbqo);
    } : tq_o), uk038[d$m9] = o4q_b && function (upi1k3) {
      o4q_b('[xmldom ' + d$m9 + ']\t' + upi1k3 + Asjwh(k3u1));
    } || function () {};
  }if (!tq_o) {
    if (g_qb4 instanceof Au13pk8) return g_qb4;tq_o = g_qb4;
  }var uk038 = {},
      _btog = tq_o instanceof Function;return k3u1 = k3u1 || {}, hlwj('warning'), hlwj('error'), hlwj('fatalError'), uk038;
}function Au13pk8() {
  this['cdata'] = !0x1;
}function Ahlzj6(dzjh, u8v30k) {
  u8v30k['lineNumber'] = dzjh['lineNumber'], u8v30k['columnNumber'] = dzjh['columnNumber'];
}function Asjwh($0v) {
  return $0v ? '\x0a@' + ($0v['systemId'] || '') + '#[line:' + $0v['lineNumber'] + ',col:' + $0v['columnNumber'] + ']' : void 0x0;
}function Aq_gbot(r4_gqo, kiyup, o_bqgt) {
  return 'string' == typeof r4_gqo ? r4_gqo['substr'](kiyup, o_bqgt) : r4_gqo['length'] >= kiyup + o_bqgt || kiyup ? new java['lang']['String'](r4_gqo, kiyup, o_bqgt) + '' : r4_gqo;
}function Ae9a$vm(k0u, go_tb) {
  k0u['currentElement'] ? k0u['currentElement']['appendChild'](go_tb) : k0u['doc']['appendChild'](go_tb);
}Au1k3pi['prototype']['parseFromString'] = function (o_, sjdh6) {
  var g_4orq = this['options'],
      bqityx = new Anmse$d(),
      a$em9v = g_4orq['domBuilder'] || new Au13pk8(),
      sedm6 = g_4orq['errorHandler'],
      tbyipx = g_4orq['locator'],
      u180k = g_4orq['xmlns'] || {},
      r7g4f5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return tbyipx && a$em9v['setDocumentLocator'](tbyipx), bqityx['errorHandler'] = Aoq_gb(sedm6, a$em9v, tbyipx), bqityx['domBuilder'] = g_4orq['domBuilder'] || a$em9v, /\/x?html?$/['test'](sjdh6) && (r7g4f5['nbsp'] = '\u00a0', r7g4f5['copy'] = '©', u180k[''] = 'http://www.w3.org/1999/xhtml'), u180k['xml'] = u180k['xml'] || 'http://www.w3.org/XML/1998/namespace', o_ ? bqityx['parse'](o_, u180k, r7g4f5) : bqityx['errorHandler']['error']('invalid doc source'), a$em9v['doc'];
}, Au13pk8['prototype'] = { 'startDocument': function () {
    this['doc'] = new Ayi1xp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y1xpi, xboyq, qxtb_, ykx1p) {
    var jz2lwh = this['doc'],
        b_qxto = jz2lwh['createElementNS'](y1xpi, qxtb_ || xboyq),
        $evma = ykx1p['length'];Ae9a$vm(this, b_qxto), this['currentElement'] = b_qxto, this['locator'] && Ahlzj6(this['locator'], b_qxto);for (var a9038v = 0x0; $evma > a9038v; a9038v++) {
      var y1xpi = ykx1p['getURI'](a9038v),
          tibxy = ykx1p['getValue'](a9038v),
          qxtb_ = ykx1p['getQName'](a9038v),
          v$a0e = jz2lwh['createAttributeNS'](y1xpi, qxtb_);this['locator'] && Ahlzj6(ykx1p['getLocator'](a9038v), v$a0e), v$a0e['value'] = v$a0e['nodeValue'] = tibxy, b_qxto['setAttributeNode'](v$a0e);
    }
  }, 'endElement': function () {
    {
      var u03av8 = this['currentElement'];u03av8['tagName'];
    }this['currentElement'] = u03av8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ikuy1p, _rgoq) {
    var btqxiy = this['doc']['createProcessingInstruction'](ikuy1p, _rgoq);this['locator'] && Ahlzj6(this['locator'], btqxiy), Ae9a$vm(this, btqxiy);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_qtbg) {
    if (_qtbg = Aq_gbot['apply'](this, arguments)) {
      if (this['cdata']) var o_rfg4 = this['doc']['createCDATASection'](_qtbg);else var o_rfg4 = this['doc']['createTextNode'](_qtbg);this['currentElement'] ? this['currentElement']['appendChild'](o_rfg4) : /^\s*$/['test'](_qtbg) && this['doc']['appendChild'](o_rfg4), this['locator'] && Ahlzj6(this['locator'], o_rfg4);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ki1pyu) {
    (this['locator'] = ki1pyu) && (ki1pyu['lineNumber'] = 0x0);
  }, 'comment': function (xqtyb) {
    xqtyb = Aq_gbot['apply'](this, arguments);var ipuk13 = this['doc']['createComment'](xqtyb);this['locator'] && Ahlzj6(this['locator'], ipuk13), Ae9a$vm(this, ipuk13);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (byxpit, gbo4q, dnhjs) {
    var ne6dms = this['doc']['implementation'];if (ne6dms && ne6dms['createDocumentType']) {
      var k0381u = ne6dms['createDocumentType'](byxpit, gbo4q, dnhjs);this['locator'] && Ahlzj6(this['locator'], k0381u), Ae9a$vm(this, k0381u);
    }
  }, 'warning': function (dmsn$e) {
    console['warn']('[xmldom warning]\t' + dmsn$e, Asjwh(this['locator']));
  }, 'error': function (h2jwlz) {
    console['error']('[xmldom error]\t' + h2jwlz, Asjwh(this['locator']));
  }, 'fatalError': function (uk38v) {
    throw console['error']('[xmldom fatalError]\t' + uk38v, Asjwh(this['locator'])), uk38v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ev$9am) {
  Au13pk8['prototype'][ev$9am] = function () {
    return null;
  };
});var Anmse$d = require('./AAcAA')['XMLReader'],
    Ayi1xp = exports['DOMImplementation'] = require('./AADOAA')['DOMImplementation'];exports['XMLSerializer'] = require('./AADOAA')['XMLSerializer'], exports['DOMParser'] = Au1k3pi;