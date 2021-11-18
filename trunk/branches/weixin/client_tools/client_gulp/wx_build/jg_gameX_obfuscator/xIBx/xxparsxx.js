var u = wx.$x;
function xsiomzx(guivd) {
  this['options'] = guivd || { 'locator': {} };
}function xaeph_q(wt3k16, z3265, vdugnj) {
  function yl$7(b0ewkh) {
    var w1236t = wt3k16[b0ewkh];!w1236t && f7cj9l && (w1236t = 0x2 == wt3k16['length'] ? function (_qaprh) {
      wt3k16(b0ewkh, _qaprh);
    } : wt3k16), wk0hb[b0ewkh] = w1236t && function (udj) {
      w1236t('[xmldom ' + b0ewkh + ']\t' + udj + xz6o25(vdugnj));
    } || function () {};
  }if (!wt3k16) {
    if (z3265 instanceof xcufnvj) return z3265;wt3k16 = z3265;
  }var wk0hb = {},
      f7cj9l = wt3k16 instanceof Function;return vdugnj = vdugnj || {}, yl$7('warning'), yl$7('error'), yl$7('fatalError'), wk0hb;
}function xcufnvj() {
  this['cdata'] = !0x1;
}function xwb0k31(zmx5, s4xmoi) {
  s4xmoi['lineNumber'] = zmx5['lineNumber'], s4xmoi['columnNumber'] = zmx5['columnNumber'];
}function xz6o25(und4g) {
  return und4g ? '\x0a@' + (und4g['systemId'] || '') + '#[line:' + und4g['lineNumber'] + ',col:' + und4g['columnNumber'] + ']' : void 0x0;
}function xsmix4o(smzxi, ngvdju, vgn4) {
  return 'string' == typeof smzxi ? smzxi['substr'](ngvdju, vgn4) : smzxi['length'] >= ngvdju + vgn4 || ngvdju ? new java['lang']['String'](smzxi, ngvdju, vgn4) + '' : smzxi;
}function xjunf9c(ds4ixg, qpahr_) {
  ds4ixg['currentElement'] ? ds4ixg['currentElement']['appendChild'](qpahr_) : ds4ixg['doc']['appendChild'](qpahr_);
}xsiomzx['prototype']['parseFromString'] = function (xmio4, uidgv4) {
  var ufjnc9 = this['options'],
      tz62o = new xufnvc(),
      w213t6 = ufjnc9['domBuilder'] || new xcufnvj(),
      rqha_ = ufjnc9['errorHandler'],
      ucjf9n = ufjnc9['locator'],
      pkbhe0 = ufjnc9['xmlns'] || {},
      nuvdj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ucjf9n && w213t6['setDocumentLocator'](ucjf9n), tz62o['errorHandler'] = xaeph_q(rqha_, w213t6, ucjf9n), tz62o['domBuilder'] = ufjnc9['domBuilder'] || w213t6, /\/x?html?$/['test'](uidgv4) && (nuvdj['nbsp'] = '\u00a0', nuvdj['copy'] = '©', pkbhe0[''] = 'http://www.w3.org/1999/xhtml'), pkbhe0['xml'] = pkbhe0['xml'] || 'http://www.w3.org/XML/1998/namespace', xmio4 ? tz62o['parse'](xmio4, pkbhe0, nuvdj) : tz62o['errorHandler']['error']('invalid doc source'), w213t6['doc'];
}, xcufnvj['prototype'] = { 'startDocument': function () {
    this['doc'] = new xvfcnu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (b0hwek, eb0aph, kebw, cnfj9l) {
    var ekbw1 = this['doc'],
        tz236 = ekbw1['createElementNS'](b0hwek, kebw || eb0aph),
        d4xi = cnfj9l['length'];xjunf9c(this, tz236), this['currentElement'] = tz236, this['locator'] && xwb0k31(this['locator'], tz236);for (var gxmis4 = 0x0; d4xi > gxmis4; gxmis4++) {
      var b0hwek = cnfj9l['getURI'](gxmis4),
          h0ebp = cnfj9l['getValue'](gxmis4),
          kebw = cnfj9l['getQName'](gxmis4),
          a0ehbp = ekbw1['createAttributeNS'](b0hwek, kebw);this['locator'] && xwb0k31(cnfj9l['getLocator'](gxmis4), a0ehbp), a0ehbp['value'] = a0ehbp['nodeValue'] = h0ebp, tz236['setAttributeNode'](a0ehbp);
    }
  }, 'endElement': function () {
    {
      var mx5so = this['currentElement'];mx5so['tagName'];
    }this['currentElement'] = mx5so['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pe0haq, k310wb) {
    var phek0 = this['doc']['createProcessingInstruction'](pe0haq, k310wb);this['locator'] && xwb0k31(this['locator'], phek0), xjunf9c(this, phek0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (smi4xg) {
    if (smi4xg = xsmix4o['apply'](this, arguments)) {
      if (this['cdata']) var z2t356 = this['doc']['createCDATASection'](smi4xg);else var z2t356 = this['doc']['createTextNode'](smi4xg);this['currentElement'] ? this['currentElement']['appendChild'](z2t356) : /^\s*$/['test'](smi4xg) && this['doc']['appendChild'](z2t356), this['locator'] && xwb0k31(this['locator'], z2t356);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (f9ncj) {
    (this['locator'] = f9ncj) && (f9ncj['lineNumber'] = 0x0);
  }, 'comment': function (keb01w) {
    keb01w = xsmix4o['apply'](this, arguments);var ixgsm4 = this['doc']['createComment'](keb01w);this['locator'] && xwb0k31(this['locator'], ixgsm4), xjunf9c(this, ixgsm4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (l87y$9, ekwb0h, pea0qh) {
    var t63z52 = this['doc']['implementation'];if (t63z52 && t63z52['createDocumentType']) {
      var aehq_p = t63z52['createDocumentType'](l87y$9, ekwb0h, pea0qh);this['locator'] && xwb0k31(this['locator'], aehq_p), xjunf9c(this, aehq_p);
    }
  }, 'warning': function (t562z3) {
    console['warn']('[xmldom warning]\t' + t562z3, xz6o25(this['locator']));
  }, 'error': function (xisozm) {
    console['error']('[xmldom error]\t' + xisozm, xz6o25(this['locator']));
  }, 'fatalError': function (o2smz5) {
    throw console['error']('[xmldom fatalError]\t' + o2smz5, xz6o25(this['locator'])), o2smz5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zsixo) {
  xcufnvj['prototype'][zsixo] = function () {
    return null;
  };
});var xufnvc = require('./xxqxx')['XMLReader'],
    xvfcnu = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xsiomzx;