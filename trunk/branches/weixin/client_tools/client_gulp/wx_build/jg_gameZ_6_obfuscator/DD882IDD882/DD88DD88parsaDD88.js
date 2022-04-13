var G = wx.$E;
function Ehu9qr(j1d_5) {
  this['options'] = j1d_5 || { 'locator': {} };
}function Eyhpng9(lhnyp, yxplon, st32_) {
  function a9qghu(frwq8) {
    var xpn = lhnyp[frwq8];!xpn && k64bc && (xpn = 0x2 == lhnyp['length'] ? function (pauh9g) {
      lhnyp(frwq8, pauh9g);
    } : lhnyp), km$4c[frwq8] = xpn && function (jc6k) {
      xpn('[xmldom ' + frwq8 + ']\t' + jc6k + Edik56(st32_));
    } || function () {};
  }if (!lhnyp) {
    if (yxplon instanceof Eu9gaqh) return yxplon;lhnyp = yxplon;
  }var km$4c = {},
      k64bc = lhnyp instanceof Function;return st32_ = st32_ || {}, a9qghu('warning'), a9qghu('error'), a9qghu('fatalError'), km$4c;
}function Eu9gaqh() {
  this['cdata'] = !0x1;
}function Ewrvau(jdk, i1_jd) {
  i1_jd['lineNumber'] = jdk['lineNumber'], i1_jd['columnNumber'] = jdk['columnNumber'];
}function Edik56(d15_ji) {
  return d15_ji ? '\x0a@' + (d15_ji['systemId'] || '') + '#[line:' + d15_ji['lineNumber'] + ',col:' + d15_ji['columnNumber'] + ']' : void 0x0;
}function Eik5j6d(v8f7m, g9ypnh, ua9ghq) {
  return 'string' == typeof v8f7m ? v8f7m['substr'](g9ypnh, ua9ghq) : v8f7m['length'] >= g9ypnh + ua9ghq || g9ypnh ? new java['lang']['String'](v8f7m, g9ypnh, ua9ghq) + '' : v8f7m;
}function Eyugph(nglyp, s_12t) {
  nglyp['currentElement'] ? nglyp['currentElement']['appendChild'](s_12t) : nglyp['doc']['appendChild'](s_12t);
}Ehu9qr['prototype']['parseFromString'] = function (j5_1id, is1t_) {
  var pxnl = this['options'],
      xynp = new Euqva9r(),
      aq8rw = pxnl['domBuilder'] || new Eu9gaqh(),
      vrua = pxnl['errorHandler'],
      st_1i = pxnl['locator'],
      k4cm$ = pxnl['xmlns'] || {},
      lynpgx = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return st_1i && aq8rw['setDocumentLocator'](st_1i), xynp['errorHandler'] = Eyhpng9(vrua, aq8rw, st_1i), xynp['domBuilder'] = pxnl['domBuilder'] || aq8rw, /\/x?html?$/['test'](is1t_) && (lynpgx['nbsp'] = '\u00a0', lynpgx['copy'] = '©', k4cm$[''] = 'http://www.w3.org/1999/xhtml'), k4cm$['xml'] = k4cm$['xml'] || 'http://www.w3.org/XML/1998/namespace', j5_1id ? xynp['parse'](j5_1id, k4cm$, lynpgx) : xynp['errorHandler']['error']('invalid doc source'), aq8rw['doc'];
}, Eu9gaqh['prototype'] = { 'startDocument': function () {
    this['doc'] = new Ev8w7fm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ds1ti_, vr7wf, _t1si, d56ki) {
    var ug9aqh = this['doc'],
        c6k54 = ug9aqh['createElementNS'](ds1ti_, _t1si || vr7wf),
        dtij_1 = d56ki['length'];Eyugph(this, c6k54), this['currentElement'] = c6k54, this['locator'] && Ewrvau(this['locator'], c6k54);for (var quag9h = 0x0; dtij_1 > quag9h; quag9h++) {
      var ds1ti_ = d56ki['getURI'](quag9h),
          pygnlh = d56ki['getValue'](quag9h),
          _t1si = d56ki['getQName'](quag9h),
          c46bk = ug9aqh['createAttributeNS'](ds1ti_, _t1si);this['locator'] && Ewrvau(d56ki['getLocator'](quag9h), c46bk), c46bk['value'] = c46bk['nodeValue'] = pygnlh, c6k54['setAttributeNode'](c46bk);
    }
  }, 'endElement': function () {
    {
      var m7vwf8 = this['currentElement'];m7vwf8['tagName'];
    }this['currentElement'] = m7vwf8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ua9rq, qrv9au) {
    var fmw78v = this['doc']['createProcessingInstruction'](ua9rq, qrv9au);this['locator'] && Ewrvau(this['locator'], fmw78v), Eyugph(this, fmw78v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (rh9a) {
    if (rh9a = Eik5j6d['apply'](this, arguments)) {
      if (this['cdata']) var b4m$k = this['doc']['createCDATASection'](rh9a);else var b4m$k = this['doc']['createTextNode'](rh9a);this['currentElement'] ? this['currentElement']['appendChild'](b4m$k) : /^\s*$/['test'](rh9a) && this['doc']['appendChild'](b4m$k), this['locator'] && Ewrvau(this['locator'], b4m$k);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b8wf7m) {
    (this['locator'] = b8wf7m) && (b8wf7m['lineNumber'] = 0x0);
  }, 'comment': function (ijd56) {
    ijd56 = Eik5j6d['apply'](this, arguments);var ts023_ = this['doc']['createComment'](ijd56);this['locator'] && Ewrvau(this['locator'], ts023_), Eyugph(this, ts023_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($bmkc, j$k, ponx) {
    var jtd_ = this['doc']['implementation'];if (jtd_ && jtd_['createDocumentType']) {
      var d_is = jtd_['createDocumentType']($bmkc, j$k, ponx);this['locator'] && Ewrvau(this['locator'], d_is), Eyugph(this, d_is);
    }
  }, 'warning': function (j$k6c) {
    console['warn']('[xmldom warning]\t' + j$k6c, Edik56(this['locator']));
  }, 'error': function (vqa9ur) {
    console['error']('[xmldom error]\t' + vqa9ur, Edik56(this['locator']));
  }, 'fatalError': function (qa9vur) {
    throw console['error']('[xmldom fatalError]\t' + qa9vur, Edik56(this['locator'])), qa9vur;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j65$k) {
  Eu9gaqh['prototype'][j65$k] = function () {
    return null;
  };
});var Euqva9r = require('./DD88DD88cDD88DD88')['XMLReader'],
    Ev8w7fm = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Ehu9qr;