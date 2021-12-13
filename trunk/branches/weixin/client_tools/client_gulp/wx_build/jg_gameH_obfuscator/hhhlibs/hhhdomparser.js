var O = wx.$C;
function h_jwhz9d(wjhd9z) {
  this['options'] = wjhd9z || { 'locator': {} };
}function h_q1730(v_f34g, zu8r$9, dx0hw) {
  function a_sy(n4_fgv) {
    var w07xq = v_f34g[n4_fgv];!w07xq && j9drz && (w07xq = 0x2 == v_f34g['length'] ? function (pcl8u) {
      v_f34g(n4_fgv, pcl8u);
    } : v_f34g), r9zdj[n4_fgv] = w07xq && function (e2bia6) {
      w07xq('[xmldom ' + n4_fgv + ']\t' + e2bia6 + h_$8uprz(dx0hw));
    } || function () {};
  }if (!v_f34g) {
    if (zu8r$9 instanceof h_cuop5) return zu8r$9;v_f34g = zu8r$9;
  }var r9zdj = {},
      j9drz = v_f34g instanceof Function;return dx0hw = dx0hw || {}, a_sy('warning'), a_sy('error'), a_sy('fatalError'), r9zdj;
}function h_cuop5() {
  this['cdata'] = !0x1;
}function h_pc8$ru(w0hj, h7) {
  h7['lineNumber'] = w0hj['lineNumber'], h7['columnNumber'] = w0hj['columnNumber'];
}function h_$8uprz(ba2i) {
  return ba2i ? '\x0a@' + (ba2i['systemId'] || '') + '#[line:' + ba2i['lineNumber'] + ',col:' + ba2i['columnNumber'] + ']' : void 0x0;
}function h_u9z8r$(ko5tml, a6yn2s, w1x7q) {
  return 'string' == typeof ko5tml ? ko5tml['substr'](a6yn2s, w1x7q) : ko5tml['length'] >= a6yn2s + w1x7q || a6yn2s ? new java['lang']['String'](ko5tml, a6yn2s, w1x7q) + '' : ko5tml;
}function h_$8rzj(na2y6, hq0dw) {
  na2y6['currentElement'] ? na2y6['currentElement']['appendChild'](hq0dw) : na2y6['doc']['appendChild'](hq0dw);
}h_jwhz9d['prototype']['parseFromString'] = function (p$cl, $uc8lp) {
  var lc5otp = this['options'],
      pcl$5 = new h_v4_g3f(),
      a_y = lc5otp['domBuilder'] || new h_cuop5(),
      n6ys_ = lc5otp['errorHandler'],
      f4n_v = lc5otp['locator'],
      hdxq0w = lc5otp['xmlns'] || {},
      o5clu = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return f4n_v && a_y['setDocumentLocator'](f4n_v), pcl$5['errorHandler'] = h_q1730(n6ys_, a_y, f4n_v), pcl$5['domBuilder'] = lc5otp['domBuilder'] || a_y, /\/x?html?$/['test']($uc8lp) && (o5clu['nbsp'] = '\u00a0', o5clu['copy'] = '©', hdxq0w[''] = 'http://www.w3.org/1999/xhtml'), hdxq0w['xml'] = hdxq0w['xml'] || 'http://www.w3.org/XML/1998/namespace', p$cl ? pcl$5['parse'](p$cl, hdxq0w, o5clu) : pcl$5['errorHandler']['error']('invalid doc source'), a_y['doc'];
}, h_cuop5['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_wqhx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vgn_, klotm, o5lctp, wjdx) {
    var y6ai2 = this['doc'],
        wz9djh = y6ai2['createElementNS'](vgn_, o5lctp || klotm),
        g143 = wjdx['length'];h_$8rzj(this, wz9djh), this['currentElement'] = wz9djh, this['locator'] && h_pc8$ru(this['locator'], wz9djh);for (var p5uol = 0x0; g143 > p5uol; p5uol++) {
      var vgn_ = wjdx['getURI'](p5uol),
          $zu8p = wjdx['getValue'](p5uol),
          o5lctp = wjdx['getQName'](p5uol),
          $pluc8 = y6ai2['createAttributeNS'](vgn_, o5lctp);this['locator'] && h_pc8$ru(wjdx['getLocator'](p5uol), $pluc8), $pluc8['value'] = $pluc8['nodeValue'] = $zu8p, wz9djh['setAttributeNode']($pluc8);
    }
  }, 'endElement': function () {
    {
      var ngvfs = this['currentElement'];ngvfs['tagName'];
    }this['currentElement'] = ngvfs['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($r8pcu, dj0wh) {
    var z9hrdj = this['doc']['createProcessingInstruction']($r8pcu, dj0wh);this['locator'] && h_pc8$ru(this['locator'], z9hrdj), h_$8rzj(this, z9hrdj);
  }, 'ignorableWhitespace': function () {}, 'characters': function (f4v_gn) {
    if (f4v_gn = h_u9z8r$['apply'](this, arguments)) {
      if (this['cdata']) var xwhq0 = this['doc']['createCDATASection'](f4v_gn);else var xwhq0 = this['doc']['createTextNode'](f4v_gn);this['currentElement'] ? this['currentElement']['appendChild'](xwhq0) : /^\s*$/['test'](f4v_gn) && this['doc']['appendChild'](xwhq0), this['locator'] && h_pc8$ru(this['locator'], xwhq0);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (y62b) {
    (this['locator'] = y62b) && (y62b['lineNumber'] = 0x0);
  }, 'comment': function (bie2a6) {
    bie2a6 = h_u9z8r$['apply'](this, arguments);var xq073 = this['doc']['createComment'](bie2a6);this['locator'] && h_pc8$ru(this['locator'], xq073), h_$8rzj(this, xq073);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (zhwd9j, pouc5l, f_gv3) {
    var _syn = this['doc']['implementation'];if (_syn && _syn['createDocumentType']) {
      var ns26y = _syn['createDocumentType'](zhwd9j, pouc5l, f_gv3);this['locator'] && h_pc8$ru(this['locator'], ns26y), h_$8rzj(this, ns26y);
    }
  }, 'warning': function (hrz9jd) {
    console['warn']('[xmldom warning]\t' + hrz9jd, h_$8uprz(this['locator']));
  }, 'error': function (x30q1) {
    console['error']('[xmldom error]\t' + x30q1, h_$8uprz(this['locator']));
  }, 'fatalError': function (_nvsgy) {
    throw console['error']('[xmldom fatalError]\t' + _nvsgy, h_$8uprz(this['locator'])), _nvsgy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_gyns) {
  h_cuop5['prototype'][_gyns] = function () {
    return null;
  };
});var h_v4_g3f = require('./hhhsax')['XMLReader'],
    h_wqhx = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_jwhz9d;