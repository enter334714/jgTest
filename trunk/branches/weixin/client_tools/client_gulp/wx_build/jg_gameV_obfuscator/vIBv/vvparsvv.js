var Q = wx.$v;
function vp0v5k7(t1hy) {
  this['options'] = t1hy || { 'locator': {} };
}function veuqbw8(qgewb, o4isf$, daj0cm) {
  function vp5k7(_n3t) {
    var v057p = qgewb[_n3t];!v057p && vpgw && (v057p = 0x2 == qgewb['length'] ? function (c0jdk) {
      qgewb(_n3t, c0jdk);
    } : qgewb), t243n[_n3t] = v057p && function (z8bul) {
      v057p('[xmldom ' + _n3t + ']\t' + z8bul + vs$rf(daj0cm));
    } || function () {};
  }if (!qgewb) {
    if (o4isf$ instanceof v$4o3is) return o4isf$;qgewb = o4isf$;
  }var t243n = {},
      vpgw = qgewb instanceof Function;return daj0cm = daj0cm || {}, vp5k7('warning'), vp5k7('error'), vp5k7('fatalError'), t243n;
}function v$4o3is() {
  this['cdata'] = !0x1;
}function vkjmcd0(k75p, ifr$) {
  ifr$['lineNumber'] = k75p['lineNumber'], ifr$['columnNumber'] = k75p['columnNumber'];
}function vs$rf(yh_16) {
  return yh_16 ? '\x0a@' + (yh_16['systemId'] || '') + '#[line:' + yh_16['lineNumber'] + ',col:' + yh_16['columnNumber'] + ']' : void 0x0;
}function vy8ul6z(_6y2, zh1, o34$i) {
  return 'string' == typeof _6y2 ? _6y2['substr'](zh1, o34$i) : _6y2['length'] >= zh1 + o34$i || zh1 ? new java['lang']['String'](_6y2, zh1, o34$i) + '' : _6y2;
}function vd0jmkc(uzl, wqx) {
  uzl['currentElement'] ? uzl['currentElement']['appendChild'](wqx) : uzl['doc']['appendChild'](wqx);
}vp0v5k7['prototype']['parseFromString'] = function (cd0j, lbueq8) {
  var qlb = this['options'],
      d0cmja = new vpvw5xg(),
      ulze = qlb['domBuilder'] || new v$4o3is(),
      vk7p50 = qlb['errorHandler'],
      cdjm0 = qlb['locator'],
      l6u8b = qlb['xmlns'] || {},
      t4_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cdjm0 && ulze['setDocumentLocator'](cdjm0), d0cmja['errorHandler'] = veuqbw8(vk7p50, ulze, cdjm0), d0cmja['domBuilder'] = qlb['domBuilder'] || ulze, /\/x?html?$/['test'](lbueq8) && (t4_['nbsp'] = '\u00a0', t4_['copy'] = '©', l6u8b[''] = 'http://www.w3.org/1999/xhtml'), l6u8b['xml'] = l6u8b['xml'] || 'http://www.w3.org/XML/1998/namespace', cd0j ? d0cmja['parse'](cd0j, l6u8b, t4_) : d0cmja['errorHandler']['error']('invalid doc source'), ulze['doc'];
}, v$4o3is['prototype'] = { 'startDocument': function () {
    this['doc'] = new vyh_1z6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i3o4s, cdmjk0, pkv0, fo) {
    var eqxgw = this['doc'],
        zhly = eqxgw['createElementNS'](i3o4s, pkv0 || cdmjk0),
        vx5pk7 = fo['length'];vd0jmkc(this, zhly), this['currentElement'] = zhly, this['locator'] && vkjmcd0(this['locator'], zhly);for (var gewpxq = 0x0; vx5pk7 > gewpxq; gewpxq++) {
      var i3o4s = fo['getURI'](gewpxq),
          c75k0 = fo['getValue'](gewpxq),
          pkv0 = fo['getQName'](gewpxq),
          si9fo = eqxgw['createAttributeNS'](i3o4s, pkv0);this['locator'] && vkjmcd0(fo['getLocator'](gewpxq), si9fo), si9fo['value'] = si9fo['nodeValue'] = c75k0, zhly['setAttributeNode'](si9fo);
    }
  }, 'endElement': function () {
    {
      var y216h = this['currentElement'];y216h['tagName'];
    }this['currentElement'] = y216h['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (yh21, zy1h6l) {
    var srf$i9 = this['doc']['createProcessingInstruction'](yh21, zy1h6l);this['locator'] && vkjmcd0(this['locator'], srf$i9), vd0jmkc(this, srf$i9);
  }, 'ignorableWhitespace': function () {}, 'characters': function (h_zy6) {
    if (h_zy6 = vy8ul6z['apply'](this, arguments)) {
      if (this['cdata']) var fri9$s = this['doc']['createCDATASection'](h_zy6);else var fri9$s = this['doc']['createTextNode'](h_zy6);this['currentElement'] ? this['currentElement']['appendChild'](fri9$s) : /^\s*$/['test'](h_zy6) && this['doc']['appendChild'](fri9$s), this['locator'] && vkjmcd0(this['locator'], fri9$s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u8q) {
    (this['locator'] = u8q) && (u8q['lineNumber'] = 0x0);
  }, 'comment': function (gv5x) {
    gv5x = vy8ul6z['apply'](this, arguments);var mkcjd0 = this['doc']['createComment'](gv5x);this['locator'] && vkjmcd0(this['locator'], mkcjd0), vd0jmkc(this, mkcjd0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (j0kdmc, t3n_4, luyz6) {
    var _1yh = this['doc']['implementation'];if (_1yh && _1yh['createDocumentType']) {
      var lyz1h6 = _1yh['createDocumentType'](j0kdmc, t3n_4, luyz6);this['locator'] && vkjmcd0(this['locator'], lyz1h6), vd0jmkc(this, lyz1h6);
    }
  }, 'warning': function (i9o$) {
    console['warn']('[xmldom warning]\t' + i9o$, vs$rf(this['locator']));
  }, 'error': function (gxqweb) {
    console['error']('[xmldom error]\t' + gxqweb, vs$rf(this['locator']));
  }, 'fatalError': function (h_2yt1) {
    throw console['error']('[xmldom fatalError]\t' + h_2yt1, vs$rf(this['locator'])), h_2yt1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cv705k) {
  v$4o3is['prototype'][cv705k] = function () {
    return null;
  };
});var vpvw5xg = require('./vv12vv')['XMLReader'],
    vyh_1z6 = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vp0v5k7;