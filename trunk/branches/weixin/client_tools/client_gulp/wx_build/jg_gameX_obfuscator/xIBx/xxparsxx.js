var u = wx.$x;
function xjfnc9u(dxis4) {
  this['options'] = dxis4 || { 'locator': {} };
}function xfjnl(k3twb, p0hkeb, cfn9l) {
  function b0kpe(udn4) {
    var oxims4 = k3twb[udn4];!oxims4 && f9clj && (oxims4 = 0x2 == k3twb['length'] ? function (msx4gi) {
      k3twb(udn4, msx4gi);
    } : k3twb), cl7f98[udn4] = oxims4 && function (udcvjn) {
      oxims4('[xmldom ' + udn4 + ']\t' + udcvjn + xxv4idg(cfn9l));
    } || function () {};
  }if (!k3twb) {
    if (p0hkeb instanceof xunfjvc) return p0hkeb;k3twb = p0hkeb;
  }var cl7f98 = {},
      f9clj = k3twb instanceof Function;return cfn9l = cfn9l || {}, b0kpe('warning'), b0kpe('error'), b0kpe('fatalError'), cl7f98;
}function xunfjvc() {
  this['cdata'] = !0x1;
}function xisomzx(omsz25, dug4nv) {
  dug4nv['lineNumber'] = omsz25['lineNumber'], dug4nv['columnNumber'] = omsz25['columnNumber'];
}function xxv4idg(apqh_) {
  return apqh_ ? '\x0a@' + (apqh_['systemId'] || '') + '#[line:' + apqh_['lineNumber'] + ',col:' + apqh_['columnNumber'] + ']' : void 0x0;
}function xrqp_ah(iud4gv, kb1e, f98y7l) {
  return 'string' == typeof iud4gv ? iud4gv['substr'](kb1e, f98y7l) : iud4gv['length'] >= kb1e + f98y7l || kb1e ? new java['lang']['String'](iud4gv, kb1e, f98y7l) + '' : iud4gv;
}function xvcn(tz5362, cfunj) {
  tz5362['currentElement'] ? tz5362['currentElement']['appendChild'](cfunj) : tz5362['doc']['appendChild'](cfunj);
}xjfnc9u['prototype']['parseFromString'] = function (f98ly, gxvi) {
  var wt13 = this['options'],
      vfcju = new xkhp0e(),
      gixm4 = wt13['domBuilder'] || new xunfjvc(),
      fuvn = wt13['errorHandler'],
      jc79fl = wt13['locator'],
      c9l8 = wt13['xmlns'] || {},
      omsxz5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jc79fl && gixm4['setDocumentLocator'](jc79fl), vfcju['errorHandler'] = xfjnl(fuvn, gixm4, jc79fl), vfcju['domBuilder'] = wt13['domBuilder'] || gixm4, /\/x?html?$/['test'](gxvi) && (omsxz5['nbsp'] = '\u00a0', omsxz5['copy'] = '©', c9l8[''] = 'http://www.w3.org/1999/xhtml'), c9l8['xml'] = c9l8['xml'] || 'http://www.w3.org/XML/1998/namespace', f98ly ? vfcju['parse'](f98ly, c9l8, omsxz5) : vfcju['errorHandler']['error']('invalid doc source'), gixm4['doc'];
}, xunfjvc['prototype'] = { 'startDocument': function () {
    this['doc'] = new xkeh0wb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (t1bw3k, si4xg, pba, msig) {
    var dgsx4 = this['doc'],
        gd4nu = dgsx4['createElementNS'](t1bw3k, pba || si4xg),
        g4xmsi = msig['length'];xvcn(this, gd4nu), this['currentElement'] = gd4nu, this['locator'] && xisomzx(this['locator'], gd4nu);for (var u4idvg = 0x0; g4xmsi > u4idvg; u4idvg++) {
      var t1bw3k = msig['getURI'](u4idvg),
          _aqrph = msig['getValue'](u4idvg),
          pba = msig['getQName'](u4idvg),
          z6235t = dgsx4['createAttributeNS'](t1bw3k, pba);this['locator'] && xisomzx(msig['getLocator'](u4idvg), z6235t), z6235t['value'] = z6235t['nodeValue'] = _aqrph, gd4nu['setAttributeNode'](z6235t);
    }
  }, 'endElement': function () {
    {
      var ix = this['currentElement'];ix['tagName'];
    }this['currentElement'] = ix['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (f8l7y9, vujgn) {
    var xgi4ds = this['doc']['createProcessingInstruction'](f8l7y9, vujgn);this['locator'] && xisomzx(this['locator'], xgi4ds), xvcn(this, xgi4ds);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tkw631) {
    if (tkw631 = xrqp_ah['apply'](this, arguments)) {
      if (this['cdata']) var fvnjc = this['doc']['createCDATASection'](tkw631);else var fvnjc = this['doc']['createTextNode'](tkw631);this['currentElement'] ? this['currentElement']['appendChild'](fvnjc) : /^\s*$/['test'](tkw631) && this['doc']['appendChild'](fvnjc), this['locator'] && xisomzx(this['locator'], fvnjc);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (n9jufc) {
    (this['locator'] = n9jufc) && (n9jufc['lineNumber'] = 0x0);
  }, 'comment': function (hwekb) {
    hwekb = xrqp_ah['apply'](this, arguments);var x4dvgi = this['doc']['createComment'](hwekb);this['locator'] && xisomzx(this['locator'], x4dvgi), xvcn(this, x4dvgi);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (clnfj, j7lfc9, zsmixo) {
    var xisdg = this['doc']['implementation'];if (xisdg && xisdg['createDocumentType']) {
      var udjc = xisdg['createDocumentType'](clnfj, j7lfc9, zsmixo);this['locator'] && xisomzx(this['locator'], udjc), xvcn(this, udjc);
    }
  }, 'warning': function (y8l9) {
    console['warn']('[xmldom warning]\t' + y8l9, xxv4idg(this['locator']));
  }, 'error': function (lf789y) {
    console['error']('[xmldom error]\t' + lf789y, xxv4idg(this['locator']));
  }, 'fatalError': function (sx4dgi) {
    throw console['error']('[xmldom fatalError]\t' + sx4dgi, xxv4idg(this['locator'])), sx4dgi;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (guvnd4) {
  xunfjvc['prototype'][guvnd4] = function () {
    return null;
  };
});var xkhp0e = require('./xxqxx')['XMLReader'],
    xkeh0wb = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xjfnc9u;