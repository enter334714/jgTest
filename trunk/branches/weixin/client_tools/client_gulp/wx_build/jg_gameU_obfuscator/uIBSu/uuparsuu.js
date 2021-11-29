var o = wx.$U;
function ukas_v(k6v_an) {
  this['options'] = k6v_an || { 'locator': {} };
}function u_aknvs(x7oqwl, m43hjp, z9dgw5) {
  function rb80(gd9zt5) {
    var h3pj4m = x7oqwl[gd9zt5];!h3pj4m && zg97wd && (h3pj4m = 0x2 == x7oqwl['length'] ? function (f4ju3p) {
      x7oqwl(gd9zt5, f4ju3p);
    } : x7oqwl), oqhjim[gd9zt5] = h3pj4m && function (br8c1) {
      h3pj4m('[xmldom ' + gd9zt5 + ']\t' + br8c1 + uohqimj(z9dgw5));
    } || function () {};
  }if (!x7oqwl) {
    if (m43hjp instanceof ucb10r8) return m43hjp;x7oqwl = m43hjp;
  }var oqhjim = {},
      zg97wd = x7oqwl instanceof Function;return z9dgw5 = z9dgw5 || {}, rb80('warning'), rb80('error'), rb80('fatalError'), oqhjim;
}function ucb10r8() {
  this['cdata'] = !0x1;
}function uoihjmq(kn6v_, jh4mp) {
  jh4mp['lineNumber'] = kn6v_['lineNumber'], jh4mp['columnNumber'] = kn6v_['columnNumber'];
}function uohqimj(a860) {
  return a860 ? '\x0a@' + (a860['systemId'] || '') + '#[line:' + a860['lineNumber'] + ',col:' + a860['columnNumber'] + ']' : void 0x0;
}function uohmj(v_es$n, wgxz, eu$fp4) {
  return 'string' == typeof v_es$n ? v_es$n['substr'](wgxz, eu$fp4) : v_es$n['length'] >= wgxz + eu$fp4 || wgxz ? new java['lang']['String'](v_es$n, wgxz, eu$fp4) + '' : v_es$n;
}function uwd9gz(mh43i, snakv_) {
  mh43i['currentElement'] ? mh43i['currentElement']['appendChild'](snakv_) : mh43i['doc']['appendChild'](snakv_);
}ukas_v['prototype']['parseFromString'] = function (_nk, mhqoji) {
  var l79xwg = this['options'],
      zt9dg5 = new unks_$v(),
      wl97xg = l79xwg['domBuilder'] || new ucb10r8(),
      $_sev = l79xwg['errorHandler'],
      pjuf = l79xwg['locator'],
      ihjmo = l79xwg['xmlns'] || {},
      euvs$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pjuf && wl97xg['setDocumentLocator'](pjuf), zt9dg5['errorHandler'] = u_aknvs($_sev, wl97xg, pjuf), zt9dg5['domBuilder'] = l79xwg['domBuilder'] || wl97xg, /\/x?html?$/['test'](mhqoji) && (euvs$['nbsp'] = '\u00a0', euvs$['copy'] = '©', ihjmo[''] = 'http://www.w3.org/1999/xhtml'), ihjmo['xml'] = ihjmo['xml'] || 'http://www.w3.org/XML/1998/namespace', _nk ? zt9dg5['parse'](_nk, ihjmo, euvs$) : zt9dg5['errorHandler']['error']('invalid doc source'), wl97xg['doc'];
}, ucb10r8['prototype'] = { 'startDocument': function () {
    this['doc'] = new ulqhim()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cr018, u34jpf, m3jhio, oqxl7i) {
    var oimq = this['doc'],
        p3hf4j = oimq['createElementNS'](cr018, m3jhio || u34jpf),
        r180by = oqxl7i['length'];uwd9gz(this, p3hf4j), this['currentElement'] = p3hf4j, this['locator'] && uoihjmq(this['locator'], p3hf4j);for (var s_$vn = 0x0; r180by > s_$vn; s_$vn++) {
      var cr018 = oqxl7i['getURI'](s_$vn),
          omjq = oqxl7i['getValue'](s_$vn),
          m3jhio = oqxl7i['getQName'](s_$vn),
          j4i3h = oimq['createAttributeNS'](cr018, m3jhio);this['locator'] && uoihjmq(oqxl7i['getLocator'](s_$vn), j4i3h), j4i3h['value'] = j4i3h['nodeValue'] = omjq, p3hf4j['setAttributeNode'](j4i3h);
    }
  }, 'endElement': function () {
    {
      var z95t = this['currentElement'];z95t['tagName'];
    }this['currentElement'] = z95t['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (w7ox, ak6vc) {
    var cak6 = this['doc']['createProcessingInstruction'](w7ox, ak6vc);this['locator'] && uoihjmq(this['locator'], cak6), uwd9gz(this, cak6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vk_c6a) {
    if (vk_c6a = uohmj['apply'](this, arguments)) {
      if (this['cdata']) var z9t2d = this['doc']['createCDATASection'](vk_c6a);else var z9t2d = this['doc']['createTextNode'](vk_c6a);this['currentElement'] ? this['currentElement']['appendChild'](z9t2d) : /^\s*$/['test'](vk_c6a) && this['doc']['appendChild'](z9t2d), this['locator'] && uoihjmq(this['locator'], z9t2d);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (j3mhio) {
    (this['locator'] = j3mhio) && (j3mhio['lineNumber'] = 0x0);
  }, 'comment': function (qjihmo) {
    qjihmo = uohmj['apply'](this, arguments);var ih43m = this['doc']['createComment'](qjihmo);this['locator'] && uoihjmq(this['locator'], ih43m), uwd9gz(this, ih43m);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (p4ef$, g5zwd9, _sk) {
    var b0r81c = this['doc']['implementation'];if (b0r81c && b0r81c['createDocumentType']) {
      var lxg9w = b0r81c['createDocumentType'](p4ef$, g5zwd9, _sk);this['locator'] && uoihjmq(this['locator'], lxg9w), uwd9gz(this, lxg9w);
    }
  }, 'warning': function (gzw97d) {
    console['warn']('[xmldom warning]\t' + gzw97d, uohqimj(this['locator']));
  }, 'error': function (qlhio) {
    console['error']('[xmldom error]\t' + qlhio, uohqimj(this['locator']));
  }, 'fatalError': function (ak6n) {
    throw console['error']('[xmldom fatalError]\t' + ak6n, uohqimj(this['locator'])), ak6n;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (v$snue) {
  ucb10r8['prototype'][v$snue] = function () {
    return null;
  };
});var unks_$v = require('./uu12uu')['XMLReader'],
    ulqhim = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = ukas_v;