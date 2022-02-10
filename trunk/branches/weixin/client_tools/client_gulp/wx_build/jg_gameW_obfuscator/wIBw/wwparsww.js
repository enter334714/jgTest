var s = wx.$W;
function wk7e(c1a8k) {
  this['options'] = c1a8k || { 'locator': {} };
}function w_jy7r9(z318ec, wb65o, qf$slt) {
  function b3ue1z(o64) {
    var lnti$ = z318ec[o64];!lnti$ && _9jpry && (lnti$ = 0x2 == z318ec['length'] ? function (kja8c7) {
      z318ec(o64, kja8c7);
    } : z318ec), _yp9i[o64] = lnti$ && function (in90) {
      lnti$('[xmldom ' + o64 + ']\t' + in90 + wl0i$n(qf$slt));
    } || function () {};
  }if (!z318ec) {
    if (wb65o instanceof wvh4xm) return wb65o;z318ec = wb65o;
  }var _yp9i = {},
      _9jpry = z318ec instanceof Function;return qf$slt = qf$slt || {}, b3ue1z('warning'), b3ue1z('error'), b3ue1z('fatalError'), _yp9i;
}function wvh4xm() {
  this['cdata'] = !0x1;
}function wlt$in(xhm4v6, r9_j7y) {
  r9_j7y['lineNumber'] = xhm4v6['lineNumber'], r9_j7y['columnNumber'] = xhm4v6['columnNumber'];
}function wl0i$n(z1ub3w) {
  return z1ub3w ? '\x0a@' + (z1ub3w['systemId'] || '') + '#[line:' + z1ub3w['lineNumber'] + ',col:' + z1ub3w['columnNumber'] + ']' : void 0x0;
}function wbuw5d(j_9ry7, q2fst$, h65dv) {
  return 'string' == typeof j_9ry7 ? j_9ry7['substr'](q2fst$, h65dv) : j_9ry7['length'] >= q2fst$ + h65dv || q2fst$ ? new java['lang']['String'](j_9ry7, q2fst$, h65dv) + '' : j_9ry7;
}function w_jy9pr($qt2, vdoh6) {
  $qt2['currentElement'] ? $qt2['currentElement']['appendChild'](vdoh6) : $qt2['doc']['appendChild'](vdoh6);
}wk7e['prototype']['parseFromString'] = function (uzb31e, _r0) {
  var d6ov4 = this['options'],
      oubd5w = new wlp$0(),
      inp90y = d6ov4['domBuilder'] || new wvh4xm(),
      i9np0y = d6ov4['errorHandler'],
      w3zbu = d6ov4['locator'],
      ow65 = d6ov4['xmlns'] || {},
      x4hvgm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return w3zbu && inp90y['setDocumentLocator'](w3zbu), oubd5w['errorHandler'] = w_jy7r9(i9np0y, inp90y, w3zbu), oubd5w['domBuilder'] = d6ov4['domBuilder'] || inp90y, /\/x?html?$/['test'](_r0) && (x4hvgm['nbsp'] = '\u00a0', x4hvgm['copy'] = '©', ow65[''] = 'http://www.w3.org/1999/xhtml'), ow65['xml'] = ow65['xml'] || 'http://www.w3.org/XML/1998/namespace', uzb31e ? oubd5w['parse'](uzb31e, ow65, x4hvgm) : oubd5w['errorHandler']['error']('invalid doc source'), inp90y['doc'];
}, wvh4xm['prototype'] = { 'startDocument': function () {
    this['doc'] = new wz5wb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i0pn$, p_09r, ov6hd5, n$0it) {
    var wdob5 = this['doc'],
        ovhd4 = wdob5['createElementNS'](i0pn$, ov6hd5 || p_09r),
        ilns$ = n$0it['length'];w_jy9pr(this, ovhd4), this['currentElement'] = ovhd4, this['locator'] && wlt$in(this['locator'], ovhd4);for (var mhvg = 0x0; ilns$ > mhvg; mhvg++) {
      var i0pn$ = n$0it['getURI'](mhvg),
          d46hxv = n$0it['getValue'](mhvg),
          ov6hd5 = n$0it['getQName'](mhvg),
          _jyrp9 = wdob5['createAttributeNS'](i0pn$, ov6hd5);this['locator'] && wlt$in(n$0it['getLocator'](mhvg), _jyrp9), _jyrp9['value'] = _jyrp9['nodeValue'] = d46hxv, ovhd4['setAttributeNode'](_jyrp9);
    }
  }, 'endElement': function () {
    {
      var gvhmx = this['currentElement'];gvhmx['tagName'];
    }this['currentElement'] = gvhmx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($snlti, c87kj) {
    var a7j_rk = this['doc']['createProcessingInstruction']($snlti, c87kj);this['locator'] && wlt$in(this['locator'], a7j_rk), w_jy9pr(this, a7j_rk);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jc7kra) {
    if (jc7kra = wbuw5d['apply'](this, arguments)) {
      if (this['cdata']) var ubwo5d = this['doc']['createCDATASection'](jc7kra);else var ubwo5d = this['doc']['createTextNode'](jc7kra);this['currentElement'] ? this['currentElement']['appendChild'](ubwo5d) : /^\s*$/['test'](jc7kra) && this['doc']['appendChild'](ubwo5d), this['locator'] && wlt$in(this['locator'], ubwo5d);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wdbu5) {
    (this['locator'] = wdbu5) && (wdbu5['lineNumber'] = 0x0);
  }, 'comment': function (wd6v5o) {
    wd6v5o = wbuw5d['apply'](this, arguments);var ow35bu = this['doc']['createComment'](wd6v5o);this['locator'] && wlt$in(this['locator'], ow35bu), w_jy9pr(this, ow35bu);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (e81zu3, r7yj_a, sli$nt) {
    var u1ze3 = this['doc']['implementation'];if (u1ze3 && u1ze3['createDocumentType']) {
      var qs2$ = u1ze3['createDocumentType'](e81zu3, r7yj_a, sli$nt);this['locator'] && wlt$in(this['locator'], qs2$), w_jy9pr(this, qs2$);
    }
  }, 'warning': function (c3ze) {
    console['warn']('[xmldom warning]\t' + c3ze, wl0i$n(this['locator']));
  }, 'error': function (ilpn$) {
    console['error']('[xmldom error]\t' + ilpn$, wl0i$n(this['locator']));
  }, 'fatalError': function (vo5) {
    throw console['error']('[xmldom fatalError]\t' + vo5, wl0i$n(this['locator'])), vo5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i0lp9) {
  wvh4xm['prototype'][i0lp9] = function () {
    return null;
  };
});var wlp$0 = require('./wwqww')['XMLReader'],
    wz5wb = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wk7e;