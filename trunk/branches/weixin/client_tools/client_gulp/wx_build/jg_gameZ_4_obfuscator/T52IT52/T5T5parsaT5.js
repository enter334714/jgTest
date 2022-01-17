var B = wx.$B;
function Bgu7n(l9k4z) {
  this['options'] = l9k4z || { 'locator': {} };
}function Bghu7ns(sh96, wipae2, iea2w) {
  function r15om(z4lk9) {
    var e32i = sh96[z4lk9];!e32i && _ytx$0 && (e32i = 0x2 == sh96['length'] ? function (_d$xqt) {
      sh96(z4lk9, _d$xqt);
    } : sh96), vlyt[z4lk9] = e32i && function (o5rm1j) {
      e32i('[xmldom ' + z4lk9 + ']\t' + o5rm1j + Bpag2e(iea2w));
    } || function () {};
  }if (!sh96) {
    if (wipae2 instanceof Bawi328) return wipae2;sh96 = wipae2;
  }var vlyt = {},
      _ytx$0 = sh96 instanceof Function;return iea2w = iea2w || {}, r15om('warning'), r15om('error'), r15om('fatalError'), vlyt;
}function Bawi328() {
  this['cdata'] = !0x1;
}function Bx$t_(khzb96, psgnue) {
  psgnue['lineNumber'] = khzb96['lineNumber'], psgnue['columnNumber'] = khzb96['columnNumber'];
}function Bpag2e(farw83) {
  return farw83 ? '\x0a@' + (farw83['systemId'] || '') + '#[line:' + farw83['lineNumber'] + ',col:' + farw83['columnNumber'] + ']' : void 0x0;
}function Br1o5j(u7sg, yx$_0t, $dxt_0) {
  return 'string' == typeof u7sg ? u7sg['substr'](yx$_0t, $dxt_0) : u7sg['length'] >= yx$_0t + $dxt_0 || yx$_0t ? new java['lang']['String'](u7sg, yx$_0t, $dxt_0) + '' : u7sg;
}function Bf538jr(z6kh9b, h7sgun) {
  z6kh9b['currentElement'] ? z6kh9b['currentElement']['appendChild'](h7sgun) : z6kh9b['doc']['appendChild'](h7sgun);
}Bgu7n['prototype']['parseFromString'] = function (h6bkz, h67n) {
  var u6hns7 = this['options'],
      bk679h = new Bzvly(),
      ep = u6hns7['domBuilder'] || new Bawi328(),
      f18r = u6hns7['errorHandler'],
      j5f1r8 = u6hns7['locator'],
      w8f5 = u6hns7['xmlns'] || {},
      eagpi2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j5f1r8 && ep['setDocumentLocator'](j5f1r8), bk679h['errorHandler'] = Bghu7ns(f18r, ep, j5f1r8), bk679h['domBuilder'] = u6hns7['domBuilder'] || ep, /\/x?html?$/['test'](h67n) && (eagpi2['nbsp'] = '\u00a0', eagpi2['copy'] = '©', w8f5[''] = 'http://www.w3.org/1999/xhtml'), w8f5['xml'] = w8f5['xml'] || 'http://www.w3.org/XML/1998/namespace', h6bkz ? bk679h['parse'](h6bkz, w8f5, eagpi2) : bk679h['errorHandler']['error']('invalid doc source'), ep['doc'];
}, Bawi328['prototype'] = { 'startDocument': function () {
    this['doc'] = new B$yvl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_qt$dx, u2, f3rj8, i2guep) {
    var zb4kl9 = this['doc'],
        e2iwa = zb4kl9['createElementNS'](_qt$dx, f3rj8 || u2),
        w538fr = i2guep['length'];Bf538jr(this, e2iwa), this['currentElement'] = e2iwa, this['locator'] && Bx$t_(this['locator'], e2iwa);for (var ag2ie = 0x0; w538fr > ag2ie; ag2ie++) {
      var _qt$dx = i2guep['getURI'](ag2ie),
          lv0z = i2guep['getValue'](ag2ie),
          f3rj8 = i2guep['getQName'](ag2ie),
          p2giue = zb4kl9['createAttributeNS'](_qt$dx, f3rj8);this['locator'] && Bx$t_(i2guep['getLocator'](ag2ie), p2giue), p2giue['value'] = p2giue['nodeValue'] = lv0z, e2iwa['setAttributeNode'](p2giue);
    }
  }, 'endElement': function () {
    {
      var z0vly = this['currentElement'];z0vly['tagName'];
    }this['currentElement'] = z0vly['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (h7uns, w8ra) {
    var ep2gai = this['doc']['createProcessingInstruction'](h7uns, w8ra);this['locator'] && Bx$t_(this['locator'], ep2gai), Bf538jr(this, ep2gai);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($_0x) {
    if ($_0x = Br1o5j['apply'](this, arguments)) {
      if (this['cdata']) var wrf58 = this['doc']['createCDATASection']($_0x);else var wrf58 = this['doc']['createTextNode']($_0x);this['currentElement'] ? this['currentElement']['appendChild'](wrf58) : /^\s*$/['test']($_0x) && this['doc']['appendChild'](wrf58), this['locator'] && Bx$t_(this['locator'], wrf58);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (supn7) {
    (this['locator'] = supn7) && (supn7['lineNumber'] = 0x0);
  }, 'comment': function (f358rw) {
    f358rw = Br1o5j['apply'](this, arguments);var pugs = this['doc']['createComment'](f358rw);this['locator'] && Bx$t_(this['locator'], pugs), Bf538jr(this, pugs);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h6bz9, shu76, kzh) {
    var fj38r5 = this['doc']['implementation'];if (fj38r5 && fj38r5['createDocumentType']) {
      var o5m1r = fj38r5['createDocumentType'](h6bz9, shu76, kzh);this['locator'] && Bx$t_(this['locator'], o5m1r), Bf538jr(this, o5m1r);
    }
  }, 'warning': function (_yx$) {
    console['warn']('[xmldom warning]\t' + _yx$, Bpag2e(this['locator']));
  }, 'error': function (uinegp) {
    console['error']('[xmldom error]\t' + uinegp, Bpag2e(this['locator']));
  }, 'fatalError': function (j5r83f) {
    throw console['error']('[xmldom fatalError]\t' + j5r83f, Bpag2e(this['locator'])), j5r83f;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r8aw) {
  Bawi328['prototype'][r8aw] = function () {
    return null;
  };
});var Bzvly = require('./T5T5cT5T5')['XMLReader'],
    B$yvl = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Bgu7n;