var M = wx.$T;
function tbjg3n(h_5ywm) {
  this['options'] = h_5ywm || { 'locator': {} };
}function tn3r1g8($d7fz, icd$, ticv92) {
  function $pdvf9(cti294) {
    var xm_hw = $d7fz[cti294];!xm_hw && jsr && (xm_hw = 0x2 == $d7fz['length'] ? function (ilc2t) {
      $d7fz(cti294, ilc2t);
    } : $d7fz), zefpo7[cti294] = xm_hw && function (vt9c2i) {
      xm_hw('[xmldom ' + cti294 + ']\t' + vt9c2i + tgn31r(ticv92));
    } || function () {};
  }if (!$d7fz) {
    if (icd$ instanceof tp$id) return icd$;$d7fz = icd$;
  }var zefpo7 = {},
      jsr = $d7fz instanceof Function;return ticv92 = ticv92 || {}, $pdvf9('warning'), $pdvf9('error'), $pdvf9('fatalError'), zefpo7;
}function tp$id() {
  this['cdata'] = !0x1;
}function tg3n68($pv9id, yhw5m_) {
  yhw5m_['lineNumber'] = $pv9id['lineNumber'], yhw5m_['columnNumber'] = $pv9id['columnNumber'];
}function tgn31r(mh_5wy) {
  return mh_5wy ? '\x0a@' + (mh_5wy['systemId'] || '') + '#[line:' + mh_5wy['lineNumber'] + ',col:' + mh_5wy['columnNumber'] + ']' : void 0x0;
}function ti$t9vc(ofqe7z, p$9, q0e7o) {
  return 'string' == typeof ofqe7z ? ofqe7z['substr'](p$9, q0e7o) : ofqe7z['length'] >= p$9 + q0e7o || p$9 ? new java['lang']['String'](ofqe7z, p$9, q0e7o) + '' : ofqe7z;
}function tymxwh(xe_y0q, bskra) {
  xe_y0q['currentElement'] ? xe_y0q['currentElement']['appendChild'](bskra) : xe_y0q['doc']['appendChild'](bskra);
}tbjg3n['prototype']['parseFromString'] = function (z$fp7, n1853) {
  var y0qxm_ = this['options'],
      citl24 = new twyhm5(),
      h_5my = y0qxm_['domBuilder'] || new tp$id(),
      q0o = y0qxm_['errorHandler'],
      ngb3jr = y0qxm_['locator'],
      h6_5wm = y0qxm_['xmlns'] || {},
      yxq_0m = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ngb3jr && h_5my['setDocumentLocator'](ngb3jr), citl24['errorHandler'] = tn3r1g8(q0o, h_5my, ngb3jr), citl24['domBuilder'] = y0qxm_['domBuilder'] || h_5my, /\/x?html?$/['test'](n1853) && (yxq_0m['nbsp'] = '\u00a0', yxq_0m['copy'] = '©', h6_5wm[''] = 'http://www.w3.org/1999/xhtml'), h6_5wm['xml'] = h6_5wm['xml'] || 'http://www.w3.org/XML/1998/namespace', z$fp7 ? citl24['parse'](z$fp7, h6_5wm, yxq_0m) : citl24['errorHandler']['error']('invalid doc source'), h_5my['doc'];
}, tp$id['prototype'] = { 'startDocument': function () {
    this['doc'] = new tyhm_0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (itv$9c, c9vti, gr3jn8, vdpf) {
    var w5381 = this['doc'],
        i9$vpd = w5381['createElementNS'](itv$9c, gr3jn8 || c9vti),
        eq_0y = vdpf['length'];tymxwh(this, i9$vpd), this['currentElement'] = i9$vpd, this['locator'] && tg3n68(this['locator'], i9$vpd);for (var oe7zfp = 0x0; eq_0y > oe7zfp; oe7zfp++) {
      var itv$9c = vdpf['getURI'](oe7zfp),
          tc429i = vdpf['getValue'](oe7zfp),
          gr3jn8 = vdpf['getQName'](oe7zfp),
          subk = w5381['createAttributeNS'](itv$9c, gr3jn8);this['locator'] && tg3n68(vdpf['getLocator'](oe7zfp), subk), subk['value'] = subk['nodeValue'] = tc429i, i9$vpd['setAttributeNode'](subk);
    }
  }, 'endElement': function () {
    {
      var t249c = this['currentElement'];t249c['tagName'];
    }this['currentElement'] = t249c['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pfdv, _6wh5) {
    var d$fpv9 = this['doc']['createProcessingInstruction'](pfdv, _6wh5);this['locator'] && tg3n68(this['locator'], d$fpv9), tymxwh(this, d$fpv9);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hy5w_) {
    if (hy5w_ = ti$t9vc['apply'](this, arguments)) {
      if (this['cdata']) var _5my = this['doc']['createCDATASection'](hy5w_);else var _5my = this['doc']['createTextNode'](hy5w_);this['currentElement'] ? this['currentElement']['appendChild'](_5my) : /^\s*$/['test'](hy5w_) && this['doc']['appendChild'](_5my), this['locator'] && tg3n68(this['locator'], _5my);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jg8n3r) {
    (this['locator'] = jg8n3r) && (jg8n3r['lineNumber'] = 0x0);
  }, 'comment': function (w51h) {
    w51h = ti$t9vc['apply'](this, arguments);var vp$f9 = this['doc']['createComment'](w51h);this['locator'] && tg3n68(this['locator'], vp$f9), tymxwh(this, vp$f9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uskjab, mwhx, qx0ym) {
    var $v9ipd = this['doc']['implementation'];if ($v9ipd && $v9ipd['createDocumentType']) {
      var vdpf9 = $v9ipd['createDocumentType'](uskjab, mwhx, qx0ym);this['locator'] && tg3n68(this['locator'], vdpf9), tymxwh(this, vdpf9);
    }
  }, 'warning': function (arsjb) {
    console['warn']('[xmldom warning]\t' + arsjb, tgn31r(this['locator']));
  }, 'error': function (c24i9) {
    console['error']('[xmldom error]\t' + c24i9, tgn31r(this['locator']));
  }, 'fatalError': function ($v9ip) {
    throw console['error']('[xmldom fatalError]\t' + $v9ip, tgn31r(this['locator'])), $v9ip;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w6851) {
  tp$id['prototype'][w6851] = function () {
    return null;
  };
});var twyhm5 = require('./tT12tt')['XMLReader'],
    tyhm_0 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tbjg3n;