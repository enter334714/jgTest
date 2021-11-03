var c = wx.$o;
function o_w1x4(fwd1) {
  this['options'] = fwd1 || { 'locator': {} };
}function o_q5rmp(tmcpr5, unl3_v, a6lv) {
  function ek$y0(p5cmt) {
    var y_ku0 = tmcpr5[p5cmt];!y_ku0 && bh8zg && (y_ku0 = 0x2 == tmcpr5['length'] ? function (xoghb) {
      tmcpr5(p5cmt, xoghb);
    } : tmcpr5), r5smtq[p5cmt] = y_ku0 ? function (cp85) {
      y_ku0('[xmldom ' + p5cmt + ']\t' + cp85 + o_xogb94(a6lv));
    } : function () {};
  }if (!tmcpr5) {
    if (unl3_v instanceof o_zprm) return unl3_v;tmcpr5 = unl3_v;
  }var r5smtq = {},
      bh8zg = tmcpr5 instanceof Function;return a6lv = a6lv || {}, ek$y0('warning'), ek$y0('error'), ek$y0('fatalError'), r5smtq;
}function o_zprm() {
  this['cdata'] = !0x1;
}function o_zbhgo4(v26al, crz8p) {
  crz8p['lineNumber'] = v26al['lineNumber'], crz8p['columnNumber'] = v26al['columnNumber'];
}function o_xogb94(tsr5m) {
  return tsr5m ? '\x0a@' + (tsr5m['systemId'] || '') + '#[line:' + tsr5m['lineNumber'] + ',col:' + tsr5m['columnNumber'] + ']' : void 0x0;
}function o_da26v(ghobz, w9gxf4, _k$ey) {
  return 'string' == typeof ghobz ? ghobz['substr'](w9gxf4, _k$ey) : ghobz['length'] >= w9gxf4 + _k$ey || w9gxf4 ? new java['lang']['String'](ghobz, w9gxf4, _k$ey) + '' : ghobz;
}function o_a63d(nv_y3u, a621d) {
  (nv_y3u['currentElement'] || nv_y3u['doc'])['appendChild'](a621d);
}o_w1x4['prototype']['parseFromString'] = function (rmc5tp, _eyuk0) {
  var e_yuk = this['options'],
      of4x = new o_li2d(),
      xgf9o4 = e_yuk['domBuilder'] || new o_zprm(),
      w9i1f2 = e_yuk['errorHandler'],
      p8zchb = e_yuk['locator'],
      nuyk = e_yuk['xmlns'] || {},
      mtrqs5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p8zchb && xgf9o4['setDocumentLocator'](p8zchb), of4x['errorHandler'] = o_q5rmp(w9i1f2, xgf9o4, p8zchb), of4x['domBuilder'] = e_yuk['domBuilder'] || xgf9o4, /\/x?html?$/['test'](_eyuk0) && (mtrqs5['nbsp'] = '\u00a0', mtrqs5['copy'] = '©', nuyk[''] = 'http://www.w3.org/1999/xhtml'), nuyk['xml'] = nuyk['xml'] || 'http://www.w3.org/XML/1998/namespace', rmc5tp ? of4x['parse'](rmc5tp, nuyk, mtrqs5) : of4x['errorHandler']['error']('invalid doc source'), xgf9o4['doc'];
}, o_zprm['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_uek()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (fix9, zhg8bo, j$0eyk, ix9f) {
    var f49wgx = this['doc'],
        xf9i = f49wgx['createElementNS'](fix9, j$0eyk || zhg8bo),
        pr8zhc = ix9f['length'];o_a63d(this, xf9i), this['currentElement'] = xf9i, this['locator'] && o_zbhgo4(this['locator'], xf9i);for (var vnyu_3 = 0x0; vnyu_3 < pr8zhc; vnyu_3++) {
      var fix9 = ix9f['getURI'](vnyu_3),
          z8bhgo = ix9f['getValue'](vnyu_3),
          j$0eyk = ix9f['getQName'](vnyu_3),
          n_ulv3 = f49wgx['createAttributeNS'](fix9, j$0eyk);this['locator'] && o_zbhgo4(ix9f['getLocator'](vnyu_3), n_ulv3), n_ulv3['value'] = n_ulv3['nodeValue'] = z8bhgo, xf9i['setAttributeNode'](n_ulv3);
    }
  }, 'endElement': function () {
    var wfx14 = this['currentElement'];wfx14['tagName'], this['currentElement'] = wfx14['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rpq5mt, dva3) {
    dva3 = this['doc']['createProcessingInstruction'](rpq5mt, dva3), (this['locator'] && o_zbhgo4(this['locator'], dva3), o_a63d(this, dva3));
  }, 'ignorableWhitespace': function () {}, 'characters': function (o4gx9f) {
    var $ye0k_;(o4gx9f = o_da26v['apply'](this, arguments)) && ($ye0k_ = this['cdata'] ? this['doc']['createCDATASection'](o4gx9f) : this['doc']['createTextNode'](o4gx9f), this['currentElement'] ? this['currentElement']['appendChild']($ye0k_) : /^\s*$/['test'](o4gx9f) && this['doc']['appendChild']($ye0k_), this['locator'] && o_zbhgo4(this['locator'], $ye0k_));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($ky_e) {
    (this['locator'] = $ky_e) && ($ky_e['lineNumber'] = 0x0);
  }, 'comment': function (czo8h) {
    czo8h = o_da26v['apply'](this, arguments);var yun_v = this['doc']['createComment'](czo8h);this['locator'] && o_zbhgo4(this['locator'], yun_v), o_a63d(this, yun_v);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vl3n_, x49bgo, x94fgo) {
    var v3yun = this['doc']['implementation'];v3yun && v3yun['createDocumentType'] && (x94fgo = v3yun['createDocumentType'](vl3n_, x49bgo, x94fgo), this['locator'] && o_zbhgo4(this['locator'], x94fgo), o_a63d(this, x94fgo));
  }, 'warning': function (yj$k0) {
    console['warn']('[xmldom warning]\t' + yj$k0, o_xogb94(this['locator']));
  }, 'error': function (rtpmc5) {
    console['error']('[xmldom error]\t' + rtpmc5, o_xogb94(this['locator']));
  }, 'fatalError': function (lu3_v) {
    throw console['error']('[xmldom fatalError]\t' + lu3_v, o_xogb94(this['locator'])), lu3_v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dla3) {
  o_zprm['prototype'][dla3] = function () {
    return null;
  };
});var o_li2d = require('./oooSAX')['XMLReader'],
    o_uek = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_w1x4;