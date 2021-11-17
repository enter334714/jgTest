var k = wx.$f;
function fq0k_(vifmbt) {
  this['options'] = vifmbt || { 'locator': {} };
}function fo_42k(u9b1vi, m1vbi, wdjxs) {
  function sdnc(h5_k0) {
    var _5h0kq = u9b1vi[h5_k0];!_5h0kq && j6c2od && (_5h0kq = 0x2 == u9b1vi['length'] ? function (rz$387) {
      u9b1vi(h5_k0, rz$387);
    } : u9b1vi), dsnjcw[h5_k0] = _5h0kq && function (r78z$) {
      _5h0kq('[xmldom ' + h5_k0 + ']\t' + r78z$ + fdsowj(wdjxs));
    } || function () {};
  }if (!u9b1vi) {
    if (m1vbi instanceof fwjdn) return m1vbi;u9b1vi = m1vbi;
  }var dsnjcw = {},
      j6c2od = u9b1vi instanceof Function;return wdjxs = wdjxs || {}, sdnc('warning'), sdnc('error'), sdnc('fatalError'), dsnjcw;
}function fwjdn() {
  this['cdata'] = !0x1;
}function fdjwsco(mihf, x8wne) {
  x8wne['lineNumber'] = mihf['lineNumber'], x8wne['columnNumber'] = mihf['columnNumber'];
}function fdsowj(uifm) {
  return uifm ? '\x0a@' + (uifm['systemId'] || '') + '#[line:' + uifm['lineNumber'] + ',col:' + uifm['columnNumber'] + ']' : void 0x0;
}function fb1miv(fuimb, i1bvmu, jo624) {
  return 'string' == typeof fuimb ? fuimb['substr'](i1bvmu, jo624) : fuimb['length'] >= i1bvmu + jo624 || i1bvmu ? new java['lang']['String'](fuimb, i1bvmu, jo624) + '' : fuimb;
}function f_25q4(fivt, gv19ub) {
  fivt['currentElement'] ? fivt['currentElement']['appendChild'](gv19ub) : fivt['doc']['appendChild'](gv19ub);
}fq0k_['prototype']['parseFromString'] = function (imhbf, tq5h0) {
  var mubv1 = this['options'],
      uv1bmi = new fz7xre(),
      dwsnxe = mubv1['domBuilder'] || new fwjdn(),
      wexdns = mubv1['errorHandler'],
      erx7z8 = mubv1['locator'],
      t0hqm = mubv1['xmlns'] || {},
      hqf50 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return erx7z8 && dwsnxe['setDocumentLocator'](erx7z8), uv1bmi['errorHandler'] = fo_42k(wexdns, dwsnxe, erx7z8), uv1bmi['domBuilder'] = mubv1['domBuilder'] || dwsnxe, /\/x?html?$/['test'](tq5h0) && (hqf50['nbsp'] = '\u00a0', hqf50['copy'] = '©', t0hqm[''] = 'http://www.w3.org/1999/xhtml'), t0hqm['xml'] = t0hqm['xml'] || 'http://www.w3.org/XML/1998/namespace', imhbf ? uv1bmi['parse'](imhbf, t0hqm, hqf50) : uv1bmi['errorHandler']['error']('invalid doc source'), dwsnxe['doc'];
}, fwjdn['prototype'] = { 'startDocument': function () {
    this['doc'] = new fcoswdj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (w8ezx, p3a7y, k54_q2, jnwcsd) {
    var b1g = this['doc'],
        c2o4_ = b1g['createElementNS'](w8ezx, k54_q2 || p3a7y),
        enxzs = jnwcsd['length'];f_25q4(this, c2o4_), this['currentElement'] = c2o4_, this['locator'] && fdjwsco(this['locator'], c2o4_);for (var en8rz = 0x0; enxzs > en8rz; en8rz++) {
      var w8ezx = jnwcsd['getURI'](en8rz),
          tfivmb = jnwcsd['getValue'](en8rz),
          k54_q2 = jnwcsd['getQName'](en8rz),
          wzexns = b1g['createAttributeNS'](w8ezx, k54_q2);this['locator'] && fdjwsco(jnwcsd['getLocator'](en8rz), wzexns), wzexns['value'] = wzexns['nodeValue'] = tfivmb, c2o4_['setAttributeNode'](wzexns);
    }
  }, 'endElement': function () {
    {
      var kq52 = this['currentElement'];kq52['tagName'];
    }this['currentElement'] = kq52['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (b1vum, q5kht) {
    var htfmi0 = this['doc']['createProcessingInstruction'](b1vum, q5kht);this['locator'] && fdjwsco(this['locator'], htfmi0), f_25q4(this, htfmi0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (djsoc6) {
    if (djsoc6 = fb1miv['apply'](this, arguments)) {
      if (this['cdata']) var c264_o = this['doc']['createCDATASection'](djsoc6);else var c264_o = this['doc']['createTextNode'](djsoc6);this['currentElement'] ? this['currentElement']['appendChild'](c264_o) : /^\s*$/['test'](djsoc6) && this['doc']['appendChild'](c264_o), this['locator'] && fdjwsco(this['locator'], c264_o);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ibtvf) {
    (this['locator'] = ibtvf) && (ibtvf['lineNumber'] = 0x0);
  }, 'comment': function (xwdns) {
    xwdns = fb1miv['apply'](this, arguments);var hf0mit = this['doc']['createComment'](xwdns);this['locator'] && fdjwsco(this['locator'], hf0mit), f_25q4(this, hf0mit);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (wnjxs, ifmh, _562) {
    var xndse = this['doc']['implementation'];if (xndse && xndse['createDocumentType']) {
      var d26joc = xndse['createDocumentType'](wnjxs, ifmh, _562);this['locator'] && fdjwsco(this['locator'], d26joc), f_25q4(this, d26joc);
    }
  }, 'warning': function (vbimf) {
    console['warn']('[xmldom warning]\t' + vbimf, fdsowj(this['locator']));
  }, 'error': function (h0kt) {
    console['error']('[xmldom error]\t' + h0kt, fdsowj(this['locator']));
  }, 'fatalError': function (y7$8r) {
    throw console['error']('[xmldom fatalError]\t' + y7$8r, fdsowj(this['locator'])), y7$8r;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sezwn) {
  fwjdn['prototype'][sezwn] = function () {
    return null;
  };
});var fz7xre = require('./fffsax')['XMLReader'],
    fcoswdj = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fq0k_;