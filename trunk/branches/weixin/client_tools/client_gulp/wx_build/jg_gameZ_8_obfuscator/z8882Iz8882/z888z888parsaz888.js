var G = wx.$G;
function al6v83(kf75av) {
  this['options'] = kf75av || { 'locator': {} };
}function a$res_(mn_sr, tzsbnm, nrzbms) {
  function ok5d4f(yhxti) {
    var iyxtnb = mn_sr[yhxti];!iyxtnb && _3eqr && (iyxtnb = 0x2 == mn_sr['length'] ? function (ihtx2y) {
      mn_sr(yhxti, ihtx2y);
    } : mn_sr), ychi2j[yhxti] = iyxtnb && function (btzi) {
      iyxtnb('[xmldom ' + yhxti + ']\t' + btzi + aqr3$_e(nrzbms));
    } || function () {};
  }if (!mn_sr) {
    if (tzsbnm instanceof atnbxi) return tzsbnm;mn_sr = tzsbnm;
  }var ychi2j = {},
      _3eqr = mn_sr instanceof Function;return nrzbms = nrzbms || {}, ok5d4f('warning'), ok5d4f('error'), ok5d4f('fatalError'), ychi2j;
}function atnbxi() {
  this['cdata'] = !0x1;
}function aiyxth(t2xh, fa5k7) {
  fa5k7['lineNumber'] = t2xh['lineNumber'], fa5k7['columnNumber'] = t2xh['columnNumber'];
}function aqr3$_e(rq$s) {
  return rq$s ? '\x0a@' + (rq$s['systemId'] || '') + '#[line:' + rq$s['lineNumber'] + ',col:' + rq$s['columnNumber'] + ']' : void 0x0;
}function aiynbtx(uwd4o1, e8q6, _er$ms) {
  return 'string' == typeof uwd4o1 ? uwd4o1['substr'](e8q6, _er$ms) : uwd4o1['length'] >= e8q6 + _er$ms || e8q6 ? new java['lang']['String'](uwd4o1, e8q6, _er$ms) + '' : uwd4o1;
}function ae3q$r(akv54f, ytni) {
  akv54f['currentElement'] ? akv54f['currentElement']['appendChild'](ytni) : akv54f['doc']['appendChild'](ytni);
}al6v83['prototype']['parseFromString'] = function (w1opu, u0w1o) {
  var wpg = this['options'],
      r_e$3 = new a_e38q$(),
      e6l38 = wpg['domBuilder'] || new atnbxi(),
      v876l3 = wpg['errorHandler'],
      _seqr = wpg['locator'],
      bmxzn = wpg['xmlns'] || {},
      zrsnb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _seqr && e6l38['setDocumentLocator'](_seqr), r_e$3['errorHandler'] = a$res_(v876l3, e6l38, _seqr), r_e$3['domBuilder'] = wpg['domBuilder'] || e6l38, /\/x?html?$/['test'](u0w1o) && (zrsnb['nbsp'] = '\u00a0', zrsnb['copy'] = '©', bmxzn[''] = 'http://www.w3.org/1999/xhtml'), bmxzn['xml'] = bmxzn['xml'] || 'http://www.w3.org/XML/1998/namespace', w1opu ? r_e$3['parse'](w1opu, bmxzn, zrsnb) : r_e$3['errorHandler']['error']('invalid doc source'), e6l38['doc'];
}, atnbxi['prototype'] = { 'startDocument': function () {
    this['doc'] = new at2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (va7l68, xtzn, douf, zrbsmn) {
    var esqr$ = this['doc'],
        uwd10 = esqr$['createElementNS'](va7l68, douf || xtzn),
        w4od = zrbsmn['length'];ae3q$r(this, uwd10), this['currentElement'] = uwd10, this['locator'] && aiyxth(this['locator'], uwd10);for (var f7av5k = 0x0; w4od > f7av5k; f7av5k++) {
      var va7l68 = zrbsmn['getURI'](f7av5k),
          u14of = zrbsmn['getValue'](f7av5k),
          douf = zrbsmn['getQName'](f7av5k),
          u41wd = esqr$['createAttributeNS'](va7l68, douf);this['locator'] && aiyxth(zrbsmn['getLocator'](f7av5k), u41wd), u41wd['value'] = u41wd['nodeValue'] = u14of, uwd10['setAttributeNode'](u41wd);
    }
  }, 'endElement': function () {
    {
      var ms$ = this['currentElement'];ms$['tagName'];
    }this['currentElement'] = ms$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zbitx, tnzbm) {
    var e8lq3 = this['doc']['createProcessingInstruction'](zbitx, tnzbm);this['locator'] && aiyxth(this['locator'], e8lq3), ae3q$r(this, e8lq3);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nyxi) {
    if (nyxi = aiynbtx['apply'](this, arguments)) {
      if (this['cdata']) var op1w = this['doc']['createCDATASection'](nyxi);else var op1w = this['doc']['createTextNode'](nyxi);this['currentElement'] ? this['currentElement']['appendChild'](op1w) : /^\s*$/['test'](nyxi) && this['doc']['appendChild'](op1w), this['locator'] && aiyxth(this['locator'], op1w);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bnxmt) {
    (this['locator'] = bnxmt) && (bnxmt['lineNumber'] = 0x0);
  }, 'comment': function (zmsn) {
    zmsn = aiynbtx['apply'](this, arguments);var zs$m_ = this['doc']['createComment'](zmsn);this['locator'] && aiyxth(this['locator'], zs$m_), ae3q$r(this, zs$m_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (le3$, f5a7kv, l3$qe) {
    var $_8e3q = this['doc']['implementation'];if ($_8e3q && $_8e3q['createDocumentType']) {
      var rm$_s = $_8e3q['createDocumentType'](le3$, f5a7kv, l3$qe);this['locator'] && aiyxth(this['locator'], rm$_s), ae3q$r(this, rm$_s);
    }
  }, 'warning': function (iyxnb) {
    console['warn']('[xmldom warning]\t' + iyxnb, aqr3$_e(this['locator']));
  }, 'error': function (er$m_s) {
    console['error']('[xmldom error]\t' + er$m_s, aqr3$_e(this['locator']));
  }, 'fatalError': function (yx2hti) {
    throw console['error']('[xmldom fatalError]\t' + yx2hti, aqr3$_e(this['locator'])), yx2hti;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (s_erm$) {
  atnbxi['prototype'][s_erm$] = function () {
    return null;
  };
});var a_e38q$ = require('./z888z888cz888z888')['XMLReader'],
    at2 = exports['DOMImplementation'] = require('./z888z888DOz888z888')['DOMImplementation'];exports['XMLSerializer'] = require('./z888z888DOz888z888')['XMLSerializer'], exports['DOMParser'] = al6v83;