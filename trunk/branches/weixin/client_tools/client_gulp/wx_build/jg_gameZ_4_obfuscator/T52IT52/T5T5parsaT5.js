var B = wx.$B;
function Bw823f(ieung) {
  this['options'] = ieung || { 'locator': {} };
}function Bd0$xt_(apew, h6sk9, zhbk96) {
  function egsp(a2wf) {
    var $y0x_t = apew[a2wf];!$y0x_t && sugn7h && ($y0x_t = 0x2 == apew['length'] ? function (g2euip) {
      apew(a2wf, g2euip);
    } : apew), ghnu[a2wf] = $y0x_t && function (peinug) {
      $y0x_t('[xmldom ' + a2wf + ']\t' + peinug + Bytx0(zhbk96));
    } || function () {};
  }if (!apew) {
    if (h6sk9 instanceof Blb4yvz) return h6sk9;apew = h6sk9;
  }var ghnu = {},
      sugn7h = apew instanceof Function;return zhbk96 = zhbk96 || {}, egsp('warning'), egsp('error'), egsp('fatalError'), ghnu;
}function Blb4yvz() {
  this['cdata'] = !0x1;
}function Bhbz(ns976h, $dtxq_) {
  $dtxq_['lineNumber'] = ns976h['lineNumber'], $dtxq_['columnNumber'] = ns976h['columnNumber'];
}function Bytx0(gs7np) {
  return gs7np ? '\x0a@' + (gs7np['systemId'] || '') + '#[line:' + gs7np['lineNumber'] + ',col:' + gs7np['columnNumber'] + ']' : void 0x0;
}function Bieu(ugpi2e, iugp2e, ei2ugp) {
  return 'string' == typeof ugpi2e ? ugpi2e['substr'](iugp2e, ei2ugp) : ugpi2e['length'] >= iugp2e + ei2ugp || iugp2e ? new java['lang']['String'](ugpi2e, iugp2e, ei2ugp) + '' : ugpi2e;
}function Br583f(i2ap, a2ewi3) {
  i2ap['currentElement'] ? i2ap['currentElement']['appendChild'](a2ewi3) : i2ap['doc']['appendChild'](a2ewi3);
}Bw823f['prototype']['parseFromString'] = function (i2peg, i2geu) {
  var _tx$0y = this['options'],
      lyvt$0 = new Bafw8r3(),
      yxtv0 = _tx$0y['domBuilder'] || new Blb4yvz(),
      m5j1or = _tx$0y['errorHandler'],
      h76n9s = _tx$0y['locator'],
      s9k6 = _tx$0y['xmlns'] || {},
      a2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h76n9s && yxtv0['setDocumentLocator'](h76n9s), lyvt$0['errorHandler'] = Bd0$xt_(m5j1or, yxtv0, h76n9s), lyvt$0['domBuilder'] = _tx$0y['domBuilder'] || yxtv0, /\/x?html?$/['test'](i2geu) && (a2['nbsp'] = '\u00a0', a2['copy'] = '©', s9k6[''] = 'http://www.w3.org/1999/xhtml'), s9k6['xml'] = s9k6['xml'] || 'http://www.w3.org/XML/1998/namespace', i2peg ? lyvt$0['parse'](i2peg, s9k6, a2) : lyvt$0['errorHandler']['error']('invalid doc source'), yxtv0['doc'];
}, Blb4yvz['prototype'] = { 'startDocument': function () {
    this['doc'] = new Bpiea()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_dqt$x, vl4by, gi2uep, uh7gn) {
    var us7h = this['doc'],
        zbv4ly = us7h['createElementNS'](_dqt$x, gi2uep || vl4by),
        $_0xty = uh7gn['length'];Br583f(this, zbv4ly), this['currentElement'] = zbv4ly, this['locator'] && Bhbz(this['locator'], zbv4ly);for (var _dt = 0x0; $_0xty > _dt; _dt++) {
      var _dqt$x = uh7gn['getURI'](_dt),
          yl0$v4 = uh7gn['getValue'](_dt),
          gi2uep = uh7gn['getQName'](_dt),
          iepw2a = us7h['createAttributeNS'](_dqt$x, gi2uep);this['locator'] && Bhbz(uh7gn['getLocator'](_dt), iepw2a), iepw2a['value'] = iepw2a['nodeValue'] = yl0$v4, zbv4ly['setAttributeNode'](iepw2a);
    }
  }, 'endElement': function () {
    {
      var u7h6s = this['currentElement'];u7h6s['tagName'];
    }this['currentElement'] = u7h6s['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($ly0tv, v04$y) {
    var penugs = this['doc']['createProcessingInstruction']($ly0tv, v04$y);this['locator'] && Bhbz(this['locator'], penugs), Br583f(this, penugs);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gsu) {
    if (gsu = Bieu['apply'](this, arguments)) {
      if (this['cdata']) var npugei = this['doc']['createCDATASection'](gsu);else var npugei = this['doc']['createTextNode'](gsu);this['currentElement'] ? this['currentElement']['appendChild'](npugei) : /^\s*$/['test'](gsu) && this['doc']['appendChild'](npugei), this['locator'] && Bhbz(this['locator'], npugei);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dqx_$t) {
    (this['locator'] = dqx_$t) && (dqx_$t['lineNumber'] = 0x0);
  }, 'comment': function (d_xtq$) {
    d_xtq$ = Bieu['apply'](this, arguments);var e2gp = this['doc']['createComment'](d_xtq$);this['locator'] && Bhbz(this['locator'], e2gp), Br583f(this, e2gp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kh69bz, eaw32i, pe2awi) {
    var h67nsu = this['doc']['implementation'];if (h67nsu && h67nsu['createDocumentType']) {
      var bz649k = h67nsu['createDocumentType'](kh69bz, eaw32i, pe2awi);this['locator'] && Bhbz(this['locator'], bz649k), Br583f(this, bz649k);
    }
  }, 'warning': function (kh69zb) {
    console['warn']('[xmldom warning]\t' + kh69zb, Bytx0(this['locator']));
  }, 'error': function (xt_0y) {
    console['error']('[xmldom error]\t' + xt_0y, Bytx0(this['locator']));
  }, 'fatalError': function (vby4z) {
    throw console['error']('[xmldom fatalError]\t' + vby4z, Bytx0(this['locator'])), vby4z;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (iaw3) {
  Blb4yvz['prototype'][iaw3] = function () {
    return null;
  };
});var Bafw8r3 = require('./T5T5cT5T5')['XMLReader'],
    Bpiea = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Bw823f;