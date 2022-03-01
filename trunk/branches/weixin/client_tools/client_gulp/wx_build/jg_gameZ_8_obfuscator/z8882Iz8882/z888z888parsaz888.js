var G = wx.$G;
function aeq_r3(o5f4) {
  this['options'] = o5f4 || { 'locator': {} };
}function ac2hjy(kda54, iy2h, tbzinx) {
  function bsnr(l867av) {
    var tybxin = kda54[l867av];!tybxin && zsnrbm && (tybxin = 0x2 == kda54['length'] ? function (ich2y) {
      kda54(l867av, ich2y);
    } : kda54), u0wp9[l867av] = tybxin && function (ixbynt) {
      tybxin('[xmldom ' + l867av + ']\t' + ixbynt + ae$3_q8(tbzinx));
    } || function () {};
  }if (!kda54) {
    if (iy2h instanceof az_$) return iy2h;kda54 = iy2h;
  }var u0wp9 = {},
      zsnrbm = kda54 instanceof Function;return tbzinx = tbzinx || {}, bsnr('warning'), bsnr('error'), bsnr('fatalError'), u0wp9;
}function az_$() {
  this['cdata'] = !0x1;
}function atnmzb(th2y, lkv) {
  lkv['lineNumber'] = th2y['lineNumber'], lkv['columnNumber'] = th2y['columnNumber'];
}function ae$3_q8(ijhcy) {
  return ijhcy ? '\x0a@' + (ijhcy['systemId'] || '') + '#[line:' + ijhcy['lineNumber'] + ',col:' + ijhcy['columnNumber'] + ']' : void 0x0;
}function a$3ql8e(kv56, t2xy, inxtb) {
  return 'string' == typeof kv56 ? kv56['substr'](t2xy, inxtb) : kv56['length'] >= t2xy + inxtb || t2xy ? new java['lang']['String'](kv56, t2xy, inxtb) + '' : kv56;
}function a$q3_r(d4w1, ka56v) {
  d4w1['currentElement'] ? d4w1['currentElement']['appendChild'](ka56v) : d4w1['doc']['appendChild'](ka56v);
}aeq_r3['prototype']['parseFromString'] = function (zmtxbn, $_qr3e) {
  var _ems$r = this['options'],
      ci2yj = new aihcj2y(),
      cij2yh = _ems$r['domBuilder'] || new az_$(),
      elq$ = _ems$r['errorHandler'],
      bxmnz = _ems$r['locator'],
      sem$r = _ems$r['xmlns'] || {},
      ich2jy = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bxmnz && cij2yh['setDocumentLocator'](bxmnz), ci2yj['errorHandler'] = ac2hjy(elq$, cij2yh, bxmnz), ci2yj['domBuilder'] = _ems$r['domBuilder'] || cij2yh, /\/x?html?$/['test']($_qr3e) && (ich2jy['nbsp'] = '\u00a0', ich2jy['copy'] = '©', sem$r[''] = 'http://www.w3.org/1999/xhtml'), sem$r['xml'] = sem$r['xml'] || 'http://www.w3.org/XML/1998/namespace', zmtxbn ? ci2yj['parse'](zmtxbn, sem$r, ich2jy) : ci2yj['errorHandler']['error']('invalid doc source'), cij2yh['doc'];
}, az_$['prototype'] = { 'startDocument': function () {
    this['doc'] = new al6va7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (r$_zs, $_qes, o41wd, $q8_3) {
    var tnyxb = this['doc'],
        fvk7a = tnyxb['createElementNS'](r$_zs, o41wd || $_qes),
        r_$sem = $q8_3['length'];a$q3_r(this, fvk7a), this['currentElement'] = fvk7a, this['locator'] && atnmzb(this['locator'], fvk7a);for (var ud14f = 0x0; r_$sem > ud14f; ud14f++) {
      var r$_zs = $q8_3['getURI'](ud14f),
          x2hc = $q8_3['getValue'](ud14f),
          o41wd = $q8_3['getQName'](ud14f),
          $eq38_ = tnyxb['createAttributeNS'](r$_zs, o41wd);this['locator'] && atnmzb($q8_3['getLocator'](ud14f), $eq38_), $eq38_['value'] = $eq38_['nodeValue'] = x2hc, fvk7a['setAttributeNode']($eq38_);
    }
  }, 'endElement': function () {
    {
      var ihc2 = this['currentElement'];ihc2['tagName'];
    }this['currentElement'] = ihc2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sm_$rz, bhyt) {
    var q6378 = this['doc']['createProcessingInstruction'](sm_$rz, bhyt);this['locator'] && atnmzb(this['locator'], q6378), a$q3_r(this, q6378);
  }, 'ignorableWhitespace': function () {}, 'characters': function (m$rse) {
    if (m$rse = a$3ql8e['apply'](this, arguments)) {
      if (this['cdata']) var hyi2jc = this['doc']['createCDATASection'](m$rse);else var hyi2jc = this['doc']['createTextNode'](m$rse);this['currentElement'] ? this['currentElement']['appendChild'](hyi2jc) : /^\s*$/['test'](m$rse) && this['doc']['appendChild'](hyi2jc), this['locator'] && atnmzb(this['locator'], hyi2jc);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u9w1p0) {
    (this['locator'] = u9w1p0) && (u9w1p0['lineNumber'] = 0x0);
  }, 'comment': function (_rn) {
    _rn = a$3ql8e['apply'](this, arguments);var se$rm = this['doc']['createComment'](_rn);this['locator'] && atnmzb(this['locator'], se$rm), a$q3_r(this, se$rm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mn, jch2yi, ixyn) {
    var do10 = this['doc']['implementation'];if (do10 && do10['createDocumentType']) {
      var wp01g9 = do10['createDocumentType'](mn, jch2yi, ixyn);this['locator'] && atnmzb(this['locator'], wp01g9), a$q3_r(this, wp01g9);
    }
  }, 'warning': function (uo10wp) {
    console['warn']('[xmldom warning]\t' + uo10wp, ae$3_q8(this['locator']));
  }, 'error': function (r$e3q) {
    console['error']('[xmldom error]\t' + r$e3q, ae$3_q8(this['locator']));
  }, 'fatalError': function (yxibtn) {
    throw console['error']('[xmldom fatalError]\t' + yxibtn, ae$3_q8(this['locator'])), yxibtn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a5fv7k) {
  az_$['prototype'][a5fv7k] = function () {
    return null;
  };
});var aihcj2y = require('./z888z888cz888z888')['XMLReader'],
    al6va7 = exports['DOMImplementation'] = require('./z888z888DOz888z888')['DOMImplementation'];exports['XMLSerializer'] = require('./z888z888DOz888z888')['XMLSerializer'], exports['DOMParser'] = aeq_r3;