var _ = wx.y$;
function _dtor(_zy$0x) {
  this['options'] = _zy$0x || { 'locator': {} };
}function _dqnprm(egchf, zx$0y_, wyxz_$) {
  function _x$yzw(zvxwyu) {
    var rpomqn = egchf[zvxwyu];!rpomqn && efcbad && (rpomqn = 0x2 == egchf['length'] ? function (pmonrq) {
      egchf(zvxwyu, pmonrq);
    } : egchf), z$x_y0[zvxwyu] = rpomqn ? function (_z$wyx) {
      rpomqn('[xmldom ' + zvxwyu + ']\t' + _z$wyx + _djmkol(wyxz_$));
    } : function () {};
  }if (!egchf) {
    if (zx$0y_ instanceof _d$z1) return zx$0y_;egchf = zx$0y_;
  }var z$x_y0 = {},
      efcbad = egchf instanceof Function;return wyxz_$ = wyxz_$ || {}, _x$yzw('warning'), _x$yzw('error'), _x$yzw('fatalError'), z$x_y0;
}function _d$z1() {
  this['cdata'] = !0x1;
}function _dknimjl(wvustx, qlmo) {
  qlmo['lineNumber'] = wvustx['lineNumber'], qlmo['columnNumber'] = wvustx['columnNumber'];
}function _djmkol(afdebc) {
  return afdebc ? '\x0a@' + (afdebc['systemId'] || '') + '#[line:' + afdebc['lineNumber'] + ',col:' + afdebc['columnNumber'] + ']' : void 0x0;
}function _dbdfgce(wyzuv, mhkijl, efdg) {
  return 'string' == typeof wyzuv ? wyzuv['substr'](mhkijl, efdg) : wyzuv['length'] >= mhkijl + efdg || mhkijl ? new java['lang']['String'](wyzuv, mhkijl, efdg) + '' : wyzuv;
}function _dy$0x(fjheg, wvutxs) {
  (fjheg['currentElement'] || fjheg['doc'])['appendChild'](wvutxs);
}_dtor['prototype']['parseFromString'] = function ($_102z, ilm) {
  var kopmnl = this['options'],
      jlnimk = new _dyxw_z$(),
      qurvt = kopmnl['domBuilder'] || new _d$z1(),
      fhgecd = kopmnl['errorHandler'],
      y10_ = kopmnl['locator'],
      qlnmop = kopmnl['xmlns'] || {},
      efdcb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return y10_ && qurvt['setDocumentLocator'](y10_), jlnimk['errorHandler'] = _dqnprm(fhgecd, qurvt, y10_), jlnimk['domBuilder'] = kopmnl['domBuilder'] || qurvt, /\/x?html?$/['test'](ilm) && (efdcb['nbsp'] = '\u00a0', efdcb['copy'] = '©', qlnmop[''] = 'http://www.w3.org/1999/xhtml'), qlnmop['xml'] = qlnmop['xml'] || 'http://www.w3.org/XML/1998/namespace', $_102z ? jlnimk['parse']($_102z, qlnmop, efdcb) : jlnimk['errorHandler']['error']('invalid doc source'), qurvt['doc'];
}, _d$z1['prototype'] = { 'startDocument': function () {
    this['doc'] = new _ddefbcg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bfcedg, milkjh, cedbfa, dhefig) {
    var aebdf = this['doc'],
        jehfi = aebdf['createElementNS'](bfcedg, cedbfa || milkjh),
        iedg = dhefig['length'];_dy$0x(this, jehfi), this['currentElement'] = jehfi, this['locator'] && _dknimjl(this['locator'], jehfi);for (var kmonjl = 0x0; kmonjl < iedg; kmonjl++) {
      var bfcedg = dhefig['getURI'](kmonjl),
          qpmon = dhefig['getValue'](kmonjl),
          cedbfa = dhefig['getQName'](kmonjl),
          fchdg = aebdf['createAttributeNS'](bfcedg, cedbfa);this['locator'] && _dknimjl(dhefig['getLocator'](kmonjl), fchdg), fchdg['value'] = fchdg['nodeValue'] = qpmon, jehfi['setAttributeNode'](fchdg);
    }
  }, 'endElement': function () {
    var qnorp = this['currentElement'];qnorp['tagName'], this['currentElement'] = qnorp['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (knimj, yz_10) {
    yz_10 = this['doc']['createProcessingInstruction'](knimj, yz_10), (this['locator'] && _dknimjl(this['locator'], yz_10), _dy$0x(this, yz_10));
  }, 'ignorableWhitespace': function () {}, 'characters': function (rstopq) {
    var spqon;(rstopq = _dbdfgce['apply'](this, arguments)) && (spqon = this['cdata'] ? this['doc']['createCDATASection'](rstopq) : this['doc']['createTextNode'](rstopq), this['currentElement'] ? this['currentElement']['appendChild'](spqon) : /^\s*$/['test'](rstopq) && this['doc']['appendChild'](spqon), this['locator'] && _dknimjl(this['locator'], spqon));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (y$0_xz) {
    (this['locator'] = y$0_xz) && (y$0_xz['lineNumber'] = 0x0);
  }, 'comment': function (mjlkih) {
    mjlkih = _dbdfgce['apply'](this, arguments);var $_1z20 = this['doc']['createComment'](mjlkih);this['locator'] && _dknimjl(this['locator'], $_1z20), _dy$0x(this, $_1z20);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mkni, $_y0, qosnr) {
    var lmknop = this['doc']['implementation'];lmknop && lmknop['createDocumentType'] && (qosnr = lmknop['createDocumentType'](mkni, $_y0, qosnr), this['locator'] && _dknimjl(this['locator'], qosnr), _dy$0x(this, qosnr));
  }, 'warning': function (koljn) {
    console['warn']('[xmldom warning]\t' + koljn, _djmkol(this['locator']));
  }, 'error': function (vyw$zx) {
    console['error']('[xmldom error]\t' + vyw$zx, _djmkol(this['locator']));
  }, 'fatalError': function (wvxuy) {
    throw console['error']('[xmldom fatalError]\t' + wvxuy, _djmkol(this['locator'])), wvxuy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_02134) {
  _d$z1['prototype'][_02134] = function () {
    return null;
  };
});var _dyxw_z$ = require('./bbbsax')['XMLReader'],
    _ddefbcg = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dtor;