var k = wx.$f;
function fos1yt(e6cqk) {
  this['options'] = e6cqk || { 'locator': {} };
}function fj_grb(kc64ev, z4ec6v, e9k6q4) {
  function bu7mr(ra3j) {
    var rj_g$a = kc64ev[ra3j];!rj_g$a && rja3_ && (rj_g$a = 0x2 == kc64ev['length'] ? function (gr_mjb) {
      kc64ev(ra3j, gr_mjb);
    } : kc64ev), j$3az[ra3j] = rj_g$a ? function (fmgu7b) {
      rj_g$a('[xmldom ' + ra3j + ']\t' + fmgu7b + fp8hd25(e9k6q4));
    } : function () {};
  }if (!kc64ev) {
    if (z4ec6v instanceof f$3avj) return z4ec6v;kc64ev = z4ec6v;
  }var j$3az = {},
      rja3_ = kc64ev instanceof Function;return e9k6q4 = e9k6q4 || {}, bu7mr('warning'), bu7mr('error'), bu7mr('fatalError'), j$3az;
}function f$3avj() {
  this['cdata'] = !0x1;
}function fyspo(bru, u7fb) {
  u7fb['lineNumber'] = bru['lineNumber'], u7fb['columnNumber'] = bru['columnNumber'];
}function fp8hd25(s25ydp) {
  return s25ydp ? '\x0a@' + (s25ydp['systemId'] || '') + '#[line:' + s25ydp['lineNumber'] + ',col:' + s25ydp['columnNumber'] + ']' : void 0x0;
}function fjgm_ar(cqk, ypto5, vazj3$) {
  return 'string' == typeof cqk ? cqk['substr'](ypto5, vazj3$) : cqk['length'] >= ypto5 + vazj3$ || ypto5 ? new java['lang']['String'](cqk, ypto5, vazj3$) + '' : cqk;
}function fx9q6k0(cv4$z, x0so) {
  (cv4$z['currentElement'] || cv4$z['doc'])['appendChild'](x0so);
}fos1yt['prototype']['parseFromString'] = function (x10sto, so5pty) {
  var sd2 = this['options'],
      xsy1 = new ftops5(),
      v4z$3 = sd2['domBuilder'] || new f$3avj(),
      jgb_ = sd2['errorHandler'],
      eq69k0 = sd2['locator'],
      $a3zj = sd2['xmlns'] || {},
      ja = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return eq69k0 && v4z$3['setDocumentLocator'](eq69k0), xsy1['errorHandler'] = fj_grb(jgb_, v4z$3, eq69k0), xsy1['domBuilder'] = sd2['domBuilder'] || v4z$3, /\/x?html?$/['test'](so5pty) && (ja['nbsp'] = '\u00a0', ja['copy'] = '©', $a3zj[''] = 'http://www.w3.org/1999/xhtml'), $a3zj['xml'] = $a3zj['xml'] || 'http://www.w3.org/XML/1998/namespace', x10sto ? xsy1['parse'](x10sto, $a3zj, ja) : xsy1['errorHandler']['error']('invalid doc source'), v4z$3['doc'];
}, f$3avj['prototype'] = { 'startDocument': function () {
    this['doc'] = new fek6v4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ck4ev, p5d2y, jrmgb, ph82d5) {
    var $vajz = this['doc'],
        x0ot9 = $vajz['createElementNS'](ck4ev, jrmgb || p5d2y),
        yd285p = ph82d5['length'];fx9q6k0(this, x0ot9), this['currentElement'] = x0ot9, this['locator'] && fyspo(this['locator'], x0ot9);for (var ve64k = 0x0; ve64k < yd285p; ve64k++) {
      var ck4ev = ph82d5['getURI'](ve64k),
          z_3ja$ = ph82d5['getValue'](ve64k),
          jrmgb = ph82d5['getQName'](ve64k),
          $4z3vc = $vajz['createAttributeNS'](ck4ev, jrmgb);this['locator'] && fyspo(ph82d5['getLocator'](ve64k), $4z3vc), $4z3vc['value'] = $4z3vc['nodeValue'] = z_3ja$, x0ot9['setAttributeNode']($4z3vc);
    }
  }, 'endElement': function () {
    var ra_$j = this['currentElement'];ra_$j['tagName'], this['currentElement'] = ra_$j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ts01xo, hp85d2) {
    hp85d2 = this['doc']['createProcessingInstruction'](ts01xo, hp85d2), (this['locator'] && fyspo(this['locator'], hp85d2), fx9q6k0(this, hp85d2));
  }, 'ignorableWhitespace': function () {}, 'characters': function (za_j) {
    var t09ox1;(za_j = fjgm_ar['apply'](this, arguments)) && (t09ox1 = this['cdata'] ? this['doc']['createCDATASection'](za_j) : this['doc']['createTextNode'](za_j), this['currentElement'] ? this['currentElement']['appendChild'](t09ox1) : /^\s*$/['test'](za_j) && this['doc']['appendChild'](t09ox1), this['locator'] && fyspo(this['locator'], t09ox1));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jg_m) {
    (this['locator'] = jg_m) && (jg_m['lineNumber'] = 0x0);
  }, 'comment': function (bfimu) {
    bfimu = fjgm_ar['apply'](this, arguments);var _gmjbr = this['doc']['createComment'](bfimu);this['locator'] && fyspo(this['locator'], _gmjbr), fx9q6k0(this, _gmjbr);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (p5y, os1pt, ke906q) {
    var fu7wbi = this['doc']['implementation'];fu7wbi && fu7wbi['createDocumentType'] && (ke906q = fu7wbi['createDocumentType'](p5y, os1pt, ke906q), this['locator'] && fyspo(this['locator'], ke906q), fx9q6k0(this, ke906q));
  }, 'warning': function (dp528h) {
    console['warn']('[xmldom warning]\t' + dp528h, fp8hd25(this['locator']));
  }, 'error': function (k9q0x1) {
    console['error']('[xmldom error]\t' + k9q0x1, fp8hd25(this['locator']));
  }, 'fatalError': function (aj_) {
    throw console['error']('[xmldom fatalError]\t' + aj_, fp8hd25(this['locator'])), aj_;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rg$ja) {
  f$3avj['prototype'][rg$ja] = function () {
    return null;
  };
});var ftops5 = require('./fffsax')['XMLReader'],
    fek6v4 = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fos1yt;