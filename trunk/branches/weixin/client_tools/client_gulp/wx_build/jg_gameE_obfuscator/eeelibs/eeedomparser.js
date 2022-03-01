var b = wx.$e;
function extgji$(i3$qjn) {
  this['options'] = i3$qjn || { 'locator': {} };
}function eixgjt(ixq, hyzfr, _acm74) {
  function zflr(mceaop) {
    var frvhz = ixq[mceaop];!frvhz && fv74 && (frvhz = 0x2 == ixq['length'] ? function (v_m4a) {
      ixq(mceaop, v_m4a);
    } : ixq), s0b96k[mceaop] = frvhz ? function (tlg) {
      frvhz('[xmldom ' + mceaop + ']\t' + tlg + ef4y_v7(_acm74));
    } : function () {};
  }if (!ixq) {
    if (hyzfr instanceof ec_4a) return hyzfr;ixq = hyzfr;
  }var s0b96k = {},
      fv74 = ixq instanceof Function;return _acm74 = _acm74 || {}, zflr('warning'), zflr('error'), zflr('fatalError'), s0b96k;
}function ec_4a() {
  this['cdata'] = !0x1;
}function evzrhf(yrhvzf, gtrhl) {
  gtrhl['lineNumber'] = yrhvzf['lineNumber'], gtrhl['columnNumber'] = yrhvzf['columnNumber'];
}function ef4y_v7(lztgr) {
  return lztgr ? '\x0a@' + (lztgr['systemId'] || '') + '#[line:' + lztgr['lineNumber'] + ',col:' + lztgr['columnNumber'] + ']' : void 0x0;
}function ehxl$(rxtgl, xigj, $q3xj) {
  return 'string' == typeof rxtgl ? rxtgl['substr'](xigj, $q3xj) : rxtgl['length'] >= xigj + $q3xj || xigj ? new java['lang']['String'](rxtgl, xigj, $q3xj) + '' : rxtgl;
}function ejnqs3u(kd0b9, d0b6) {
  (kd0b9['currentElement'] || kd0b9['doc'])['appendChild'](d0b6);
}extgji$['prototype']['parseFromString'] = function (qij3n, trg) {
  var l$ix = this['options'],
      av7_m = new ep7oma(),
      trgxl = l$ix['domBuilder'] || new ec_4a(),
      cp7 = l$ix['errorHandler'],
      gxthlr = l$ix['locator'],
      _7cma = l$ix['xmlns'] || {},
      htxg = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gxthlr && trgxl['setDocumentLocator'](gxthlr), av7_m['errorHandler'] = eixgjt(cp7, trgxl, gxthlr), av7_m['domBuilder'] = l$ix['domBuilder'] || trgxl, /\/x?html?$/['test'](trg) && (htxg['nbsp'] = '\u00a0', htxg['copy'] = '©', _7cma[''] = 'http://www.w3.org/1999/xhtml'), _7cma['xml'] = _7cma['xml'] || 'http://www.w3.org/XML/1998/namespace', qij3n ? av7_m['parse'](qij3n, _7cma, htxg) : av7_m['errorHandler']['error']('invalid doc source'), trgxl['doc'];
}, ec_4a['prototype'] = { 'startDocument': function () {
    this['doc'] = new erzlgt()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bd80w5, ltrxh, hrtlgx, rvf4z) {
    var f_a4 = this['doc'],
        sk9b = f_a4['createElementNS'](bd80w5, hrtlgx || ltrxh),
        thyl = rvf4z['length'];ejnqs3u(this, sk9b), this['currentElement'] = sk9b, this['locator'] && evzrhf(this['locator'], sk9b);for (var vm47_a = 0x0; vm47_a < thyl; vm47_a++) {
      var bd80w5 = rvf4z['getURI'](vm47_a),
          acmep = rvf4z['getValue'](vm47_a),
          hrtlgx = rvf4z['getQName'](vm47_a),
          $jqxi = f_a4['createAttributeNS'](bd80w5, hrtlgx);this['locator'] && evzrhf(rvf4z['getLocator'](vm47_a), $jqxi), $jqxi['value'] = $jqxi['nodeValue'] = acmep, sk9b['setAttributeNode']($jqxi);
    }
  }, 'endElement': function () {
    var uj3inq = this['currentElement'];uj3inq['tagName'], this['currentElement'] = uj3inq['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (juqn3i, ix$jgt) {
    juqn3i = this['doc']['createProcessingInstruction'](juqn3i, ix$jgt), (this['locator'] && evzrhf(this['locator'], juqn3i), ejnqs3u(this, juqn3i));
  }, 'ignorableWhitespace': function () {}, 'characters': function (com_a7) {
    var ocmea;(com_a7 = ehxl$['apply'](this, arguments)) && (ocmea = this['cdata'] ? this['doc']['createCDATASection'](com_a7) : this['doc']['createTextNode'](com_a7), this['currentElement'] ? this['currentElement']['appendChild'](ocmea) : /^\s*$/['test'](com_a7) && this['doc']['appendChild'](ocmea), this['locator'] && evzrhf(this['locator'], ocmea));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (d0685) {
    (this['locator'] = d0685) && (d0685['lineNumber'] = 0x0);
  }, 'comment': function (dw15) {
    dw15 = ehxl$['apply'](this, arguments);var f_a7v4 = this['doc']['createComment'](dw15);this['locator'] && evzrhf(this['locator'], f_a7v4), ejnqs3u(this, f_a7v4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_am4, sn9uq3, ix$tl) {
    var $tjgxi = this['doc']['implementation'];$tjgxi && $tjgxi['createDocumentType'] && ($tjgxi = $tjgxi['createDocumentType'](_am4, sn9uq3, ix$tl), this['locator'] && evzrhf(this['locator'], $tjgxi), ejnqs3u(this, $tjgxi));
  }, 'warning': function (fzyv4) {
    console['warn']('[xmldom warning]\t' + fzyv4, ef4y_v7(this['locator']));
  }, 'error': function (uqj3) {
    console['error']('[xmldom error]\t' + uqj3, ef4y_v7(this['locator']));
  }, 'fatalError': function (htyzr) {
    throw console['error']('[xmldom fatalError]\t' + htyzr, ef4y_v7(this['locator'])), htyzr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_acmo7) {
  ec_4a['prototype'][_acmo7] = function () {
    return null;
  };
});var ep7oma = require('./eeesax')['XMLReader'],
    erzlgt = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = extgji$;