var k = wx.$f;
function fwoqf(m5t24) {
  this['options'] = m5t24 || { 'locator': {} };
}function fb8r967(ko_nfc, r7p96b, bp$rv) {
  function m542(sx2eg) {
    var b86y = ko_nfc[sx2eg];!b86y && o_nkf && (b86y = 0x2 == ko_nfc['length'] ? function (j$m) {
      ko_nfc(sx2eg, j$m);
    } : ko_nfc), enugs3[sx2eg] = b86y ? function (v4$5mt) {
      b86y('[xmldom ' + sx2eg + ']\t' + v4$5mt + fn_cku(bp$rv));
    } : function () {};
  }if (!ko_nfc) {
    if (r7p96b instanceof fi7dy) return r7p96b;ko_nfc = r7p96b;
  }var enugs3 = {},
      o_nkf = ko_nfc instanceof Function;return bp$rv = bp$rv || {}, m542('warning'), m542('error'), m542('fatalError'), enugs3;
}function fi7dy() {
  this['cdata'] = !0x1;
}function fd7869(m5$4vp, awzf1) {
  awzf1['lineNumber'] = m5$4vp['lineNumber'], awzf1['columnNumber'] = m5$4vp['columnNumber'];
}function fn_cku($6b) {
  return $6b ? '\x0a@' + ($6b['systemId'] || '') + '#[line:' + $6b['lineNumber'] + ',col:' + $6b['columnNumber'] + ']' : void 0x0;
}function ft2jm4(t4vm$, _zf, i87y0d) {
  return 'string' == typeof t4vm$ ? t4vm$['substr'](_zf, i87y0d) : t4vm$['length'] >= _zf + i87y0d || _zf ? new java['lang']['String'](t4vm$, _zf, i87y0d) + '' : t4vm$;
}function fneug3(vr$6pb, ngeu3s) {
  (vr$6pb['currentElement'] || vr$6pb['doc'])['appendChild'](ngeu3s);
}fwoqf['prototype']['parseFromString'] = function (y798d0, wo_) {
  var rp4vb = this['options'],
      $5mvt = new fgs3eu(),
      p$vm54 = rp4vb['domBuilder'] || new fi7dy(),
      p976 = rp4vb['errorHandler'],
      jxgt2 = rp4vb['locator'],
      f_qzaw = rp4vb['xmlns'] || {},
      ec3ku = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jxgt2 && p$vm54['setDocumentLocator'](jxgt2), $5mvt['errorHandler'] = fb8r967(p976, p$vm54, jxgt2), $5mvt['domBuilder'] = rp4vb['domBuilder'] || p$vm54, /\/x?html?$/['test'](wo_) && (ec3ku['nbsp'] = '\u00a0', ec3ku['copy'] = '©', f_qzaw[''] = 'http://www.w3.org/1999/xhtml'), f_qzaw['xml'] = f_qzaw['xml'] || 'http://www.w3.org/XML/1998/namespace', y798d0 ? $5mvt['parse'](y798d0, f_qzaw, ec3ku) : $5mvt['errorHandler']['error']('invalid doc source'), p$vm54['doc'];
}, fi7dy['prototype'] = { 'startDocument': function () {
    this['doc'] = new fo_kcfn()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xjs2ge, nuoc_, ekgn, v5m4) {
    var $p54mv = this['doc'],
        s25tj = $p54mv['createElementNS'](xjs2ge, ekgn || nuoc_),
        _fwock = v5m4['length'];fneug3(this, s25tj), this['currentElement'] = s25tj, this['locator'] && fd7869(this['locator'], s25tj);for (var gxsue = 0x0; gxsue < _fwock; gxsue++) {
      var xjs2ge = v5m4['getURI'](gxsue),
          s3eu = v5m4['getValue'](gxsue),
          ekgn = v5m4['getQName'](gxsue),
          jgx2st = $p54mv['createAttributeNS'](xjs2ge, ekgn);this['locator'] && fd7869(v5m4['getLocator'](gxsue), jgx2st), jgx2st['value'] = jgx2st['nodeValue'] = s3eu, s25tj['setAttributeNode'](jgx2st);
    }
  }, 'endElement': function () {
    var rvp96 = this['currentElement'];rvp96['tagName'], this['currentElement'] = rvp96['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sx2jgt, js2ex) {
    js2ex = this['doc']['createProcessingInstruction'](sx2jgt, js2ex), (this['locator'] && fd7869(this['locator'], js2ex), fneug3(this, js2ex));
  }, 'ignorableWhitespace': function () {}, 'characters': function (nu3cok) {
    var nfo_ck;(nu3cok = ft2jm4['apply'](this, arguments)) && (nfo_ck = this['cdata'] ? this['doc']['createCDATASection'](nu3cok) : this['doc']['createTextNode'](nu3cok), this['currentElement'] ? this['currentElement']['appendChild'](nfo_ck) : /^\s*$/['test'](nu3cok) && this['doc']['appendChild'](nfo_ck), this['locator'] && fd7869(this['locator'], nfo_ck));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (q_awzf) {
    (this['locator'] = q_awzf) && (q_awzf['lineNumber'] = 0x0);
  }, 'comment': function (e3knc) {
    e3knc = ft2jm4['apply'](this, arguments);var xsgu3 = this['doc']['createComment'](e3knc);this['locator'] && fd7869(this['locator'], xsgu3), fneug3(this, xsgu3);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ok_fn, d86y9, egs32) {
    var b4p$r = this['doc']['implementation'];b4p$r && b4p$r['createDocumentType'] && (egs32 = b4p$r['createDocumentType'](ok_fn, d86y9, egs32), this['locator'] && fd7869(this['locator'], egs32), fneug3(this, egs32));
  }, 'warning': function (sun3ge) {
    console['warn']('[xmldom warning]\t' + sun3ge, fn_cku(this['locator']));
  }, 'error': function (gxs2t) {
    console['error']('[xmldom error]\t' + gxs2t, fn_cku(this['locator']));
  }, 'fatalError': function (jm$45t) {
    throw console['error']('[xmldom fatalError]\t' + jm$45t, fn_cku(this['locator'])), jm$45t;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x5jm2) {
  fi7dy['prototype'][x5jm2] = function () {
    return null;
  };
});var fgs3eu = require('./fffsax')['XMLReader'],
    fo_kcfn = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fwoqf;