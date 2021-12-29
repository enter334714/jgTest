var M = wx.$T;
function tsukjba(jgnbr) {
  this['options'] = jgnbr || { 'locator': {} };
}function thm0y_x(oz7fe, jabsu, l24cti) {
  function rakjbg(m_whx) {
    var bajngr = oz7fe[m_whx];!bajngr && $p9vid && (bajngr = 0x2 == oz7fe['length'] ? function (v29ic) {
      oz7fe(m_whx, v29ic);
    } : oz7fe), vfd9p$[m_whx] = bajngr && function (c4lit) {
      bajngr('[xmldom ' + m_whx + ']\t' + c4lit + tt94(l24cti));
    } || function () {};
  }if (!oz7fe) {
    if (jabsu instanceof ti2c4) return jabsu;oz7fe = jabsu;
  }var vfd9p$ = {},
      $p9vid = oz7fe instanceof Function;return l24cti = l24cti || {}, rakjbg('warning'), rakjbg('error'), rakjbg('fatalError'), vfd9p$;
}function ti2c4() {
  this['cdata'] = !0x1;
}function tn653(i$9dpv, df9$vp) {
  df9$vp['lineNumber'] = i$9dpv['lineNumber'], df9$vp['columnNumber'] = i$9dpv['columnNumber'];
}function tt94(x_0qy) {
  return x_0qy ? '\x0a@' + (x_0qy['systemId'] || '') + '#[line:' + x_0qy['lineNumber'] + ',col:' + x_0qy['columnNumber'] + ']' : void 0x0;
}function trabjks(x0_y, $i9vtc, ajgrb) {
  return 'string' == typeof x0_y ? x0_y['substr']($i9vtc, ajgrb) : x0_y['length'] >= $i9vtc + ajgrb || $i9vtc ? new java['lang']['String'](x0_y, $i9vtc, ajgrb) + '' : x0_y;
}function tqe0y(rjbkas, rbgnj) {
  rjbkas['currentElement'] ? rjbkas['currentElement']['appendChild'](rbgnj) : rjbkas['doc']['appendChild'](rbgnj);
}tsukjba['prototype']['parseFromString'] = function (yh5, myh5w_) {
  var krbgj = this['options'],
      efzq = new t$vi9pd(),
      hw_5y = krbgj['domBuilder'] || new ti2c4(),
      fvzdp$ = krbgj['errorHandler'],
      eyq_0 = krbgj['locator'],
      f9vp = krbgj['xmlns'] || {},
      rgnjab = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return eyq_0 && hw_5y['setDocumentLocator'](eyq_0), efzq['errorHandler'] = thm0y_x(fvzdp$, hw_5y, eyq_0), efzq['domBuilder'] = krbgj['domBuilder'] || hw_5y, /\/x?html?$/['test'](myh5w_) && (rgnjab['nbsp'] = '\u00a0', rgnjab['copy'] = '©', f9vp[''] = 'http://www.w3.org/1999/xhtml'), f9vp['xml'] = f9vp['xml'] || 'http://www.w3.org/XML/1998/namespace', yh5 ? efzq['parse'](yh5, f9vp, rgnjab) : efzq['errorHandler']['error']('invalid doc source'), hw_5y['doc'];
}, ti2c4['prototype'] = { 'startDocument': function () {
    this['doc'] = new tx_my0h()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i$vc9d, q0xye_, oe7z, tv$) {
    var banj = this['doc'],
        rbaskj = banj['createElementNS'](i$vc9d, oe7z || q0xye_),
        h_0y = tv$['length'];tqe0y(this, rbaskj), this['currentElement'] = rbaskj, this['locator'] && tn653(this['locator'], rbaskj);for (var ex0yo = 0x0; h_0y > ex0yo; ex0yo++) {
      var i$vc9d = tv$['getURI'](ex0yo),
          ag = tv$['getValue'](ex0yo),
          oe7z = tv$['getQName'](ex0yo),
          v9p$df = banj['createAttributeNS'](i$vc9d, oe7z);this['locator'] && tn653(tv$['getLocator'](ex0yo), v9p$df), v9p$df['value'] = v9p$df['nodeValue'] = ag, rbaskj['setAttributeNode'](v9p$df);
    }
  }, 'endElement': function () {
    {
      var jsukab = this['currentElement'];jsukab['tagName'];
    }this['currentElement'] = jsukab['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ye_, vpd9f) {
    var vfzp$d = this['doc']['createProcessingInstruction'](ye_, vpd9f);this['locator'] && tn653(this['locator'], vfzp$d), tqe0y(this, vfzp$d);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_mywhx) {
    if (_mywhx = trabjks['apply'](this, arguments)) {
      if (this['cdata']) var p7 = this['doc']['createCDATASection'](_mywhx);else var p7 = this['doc']['createTextNode'](_mywhx);this['currentElement'] ? this['currentElement']['appendChild'](p7) : /^\s*$/['test'](_mywhx) && this['doc']['appendChild'](p7), this['locator'] && tn653(this['locator'], p7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (h5mw_6) {
    (this['locator'] = h5mw_6) && (h5mw_6['lineNumber'] = 0x0);
  }, 'comment': function (w8h5) {
    w8h5 = trabjks['apply'](this, arguments);var $vzfdp = this['doc']['createComment'](w8h5);this['locator'] && tn653(this['locator'], $vzfdp), tqe0y(this, $vzfdp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fzq7oe, $zvfdp, m0xq_y) {
    var ivc9$ = this['doc']['implementation'];if (ivc9$ && ivc9$['createDocumentType']) {
      var qyx_m0 = ivc9$['createDocumentType'](fzq7oe, $zvfdp, m0xq_y);this['locator'] && tn653(this['locator'], qyx_m0), tqe0y(this, qyx_m0);
    }
  }, 'warning': function (bagrjn) {
    console['warn']('[xmldom warning]\t' + bagrjn, tt94(this['locator']));
  }, 'error': function (gbjak) {
    console['error']('[xmldom error]\t' + gbjak, tt94(this['locator']));
  }, 'fatalError': function (tv9c) {
    throw console['error']('[xmldom fatalError]\t' + tv9c, tt94(this['locator'])), tv9c;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($vpd9) {
  ti2c4['prototype'][$vpd9] = function () {
    return null;
  };
});var t$vi9pd = require('./tT12tt')['XMLReader'],
    tx_my0h = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tsukjba;