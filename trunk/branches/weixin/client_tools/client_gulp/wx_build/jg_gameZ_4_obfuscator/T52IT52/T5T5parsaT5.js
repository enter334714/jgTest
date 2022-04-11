var B = wx.$B;
function Brw58(lk94b) {
  this['options'] = lk94b || { 'locator': {} };
}function Blz4bk(peaw, gpnesu, e3a2wi) {
  function nh69s7(peusn) {
    var b76k9 = peaw[peusn];!b76k9 && x_$d && (b76k9 = 0x2 == peaw['length'] ? function (a8i3) {
      peaw(peusn, a8i3);
    } : peaw), hgs7[peusn] = b76k9 && function (sp7ng) {
      b76k9('[xmldom ' + peusn + ']\t' + sp7ng + Bw38r5f(e3a2wi));
    } || function () {};
  }if (!peaw) {
    if (gpnesu instanceof Bkv4b) return gpnesu;peaw = gpnesu;
  }var hgs7 = {},
      x_$d = peaw instanceof Function;return e3a2wi = e3a2wi || {}, nh69s7('warning'), nh69s7('error'), nh69s7('fatalError'), hgs7;
}function Bkv4b() {
  this['cdata'] = !0x1;
}function Bguepin(j8f15r, nsge) {
  nsge['lineNumber'] = j8f15r['lineNumber'], nsge['columnNumber'] = j8f15r['columnNumber'];
}function Bw38r5f(y40$vl) {
  return y40$vl ? '\x0a@' + (y40$vl['systemId'] || '') + '#[line:' + y40$vl['lineNumber'] + ',col:' + y40$vl['columnNumber'] + ']' : void 0x0;
}function Btq$x_(aigpe2, h97s6, _dtq$x) {
  return 'string' == typeof aigpe2 ? aigpe2['substr'](h97s6, _dtq$x) : aigpe2['length'] >= h97s6 + _dtq$x || h97s6 ? new java['lang']['String'](aigpe2, h97s6, _dtq$x) + '' : aigpe2;
}function Brjom5(d$t_qx, x$0yt) {
  d$t_qx['currentElement'] ? d$t_qx['currentElement']['appendChild'](x$0yt) : d$t_qx['doc']['appendChild'](x$0yt);
}Brw58['prototype']['parseFromString'] = function (ueg2pi, v0y$t) {
  var w28af = this['options'],
      b6h79 = new Bsk7(),
      niegpu = w28af['domBuilder'] || new Bkv4b(),
      z0lyv = w28af['errorHandler'],
      i2ug = w28af['locator'],
      b4ylv = w28af['xmlns'] || {},
      lz4vb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i2ug && niegpu['setDocumentLocator'](i2ug), b6h79['errorHandler'] = Blz4bk(z0lyv, niegpu, i2ug), b6h79['domBuilder'] = w28af['domBuilder'] || niegpu, /\/x?html?$/['test'](v0y$t) && (lz4vb['nbsp'] = '\u00a0', lz4vb['copy'] = '©', b4ylv[''] = 'http://www.w3.org/1999/xhtml'), b4ylv['xml'] = b4ylv['xml'] || 'http://www.w3.org/XML/1998/namespace', ueg2pi ? b6h79['parse'](ueg2pi, b4ylv, lz4vb) : b6h79['errorHandler']['error']('invalid doc source'), niegpu['doc'];
}, Bkv4b['prototype'] = { 'startDocument': function () {
    this['doc'] = new Biwaep()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ie2wa3, epsgun, mo1rj, j3r85) {
    var nepgu = this['doc'],
        zh96 = nepgu['createElementNS'](ie2wa3, mo1rj || epsgun),
        xt_$dq = j3r85['length'];Brjom5(this, zh96), this['currentElement'] = zh96, this['locator'] && Bguepin(this['locator'], zh96);for (var $4vl0 = 0x0; xt_$dq > $4vl0; $4vl0++) {
      var ie2wa3 = j3r85['getURI']($4vl0),
          geps = j3r85['getValue']($4vl0),
          mo1rj = j3r85['getQName']($4vl0),
          a38fwr = nepgu['createAttributeNS'](ie2wa3, mo1rj);this['locator'] && Bguepin(j3r85['getLocator']($4vl0), a38fwr), a38fwr['value'] = a38fwr['nodeValue'] = geps, zh96['setAttributeNode'](a38fwr);
    }
  }, 'endElement': function () {
    {
      var f815 = this['currentElement'];f815['tagName'];
    }this['currentElement'] = f815['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ingupe, pi2geu) {
    var k469zb = this['doc']['createProcessingInstruction'](ingupe, pi2geu);this['locator'] && Bguepin(this['locator'], k469zb), Brjom5(this, k469zb);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vzlk) {
    if (vzlk = Btq$x_['apply'](this, arguments)) {
      if (this['cdata']) var pgn7 = this['doc']['createCDATASection'](vzlk);else var pgn7 = this['doc']['createTextNode'](vzlk);this['currentElement'] ? this['currentElement']['appendChild'](pgn7) : /^\s*$/['test'](vzlk) && this['doc']['appendChild'](pgn7), this['locator'] && Bguepin(this['locator'], pgn7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (t$_dqx) {
    (this['locator'] = t$_dqx) && (t$_dqx['lineNumber'] = 0x0);
  }, 'comment': function (s7h69n) {
    s7h69n = Btq$x_['apply'](this, arguments);var lkbz9 = this['doc']['createComment'](s7h69n);this['locator'] && Bguepin(this['locator'], lkbz9), Brjom5(this, lkbz9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xq$_, z4vlb, weaip) {
    var vy0$x = this['doc']['implementation'];if (vy0$x && vy0$x['createDocumentType']) {
      var t0xv$y = vy0$x['createDocumentType'](xq$_, z4vlb, weaip);this['locator'] && Bguepin(this['locator'], t0xv$y), Brjom5(this, t0xv$y);
    }
  }, 'warning': function (bk96z) {
    console['warn']('[xmldom warning]\t' + bk96z, Bw38r5f(this['locator']));
  }, 'error': function (ewa2i) {
    console['error']('[xmldom error]\t' + ewa2i, Bw38r5f(this['locator']));
  }, 'fatalError': function (n7h69) {
    throw console['error']('[xmldom fatalError]\t' + n7h69, Bw38r5f(this['locator'])), n7h69;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ylbv) {
  Bkv4b['prototype'][ylbv] = function () {
    return null;
  };
});var Bsk7 = require('./T5T5cT5T5')['XMLReader'],
    Biwaep = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Brw58;