var Q = wx.$v;
function vwqge8(xvpw5g) {
  this['options'] = xvpw5g || { 'locator': {} };
}function vvx5(qg8wb, son43$, lhz) {
  function ot32n4(m70ck5) {
    var s4o$3n = qg8wb[m70ck5];!s4o$3n && gwebqx && (s4o$3n = 0x2 == qg8wb['length'] ? function (h6lyz) {
      qg8wb(m70ck5, h6lyz);
    } : qg8wb), $ifs9o[m70ck5] = s4o$3n && function (yh6ulz) {
      s4o$3n('[xmldom ' + m70ck5 + ']\t' + yh6ulz + vhlu6y(lhz));
    } || function () {};
  }if (!qg8wb) {
    if (son43$ instanceof vt12_hy) return son43$;qg8wb = son43$;
  }var $ifs9o = {},
      gwebqx = qg8wb instanceof Function;return lhz = lhz || {}, ot32n4('warning'), ot32n4('error'), ot32n4('fatalError'), $ifs9o;
}function vt12_hy() {
  this['cdata'] = !0x1;
}function vdjcam0(n_32, o432tn) {
  o432tn['lineNumber'] = n_32['lineNumber'], o432tn['columnNumber'] = n_32['columnNumber'];
}function vhlu6y(x5pgwv) {
  return x5pgwv ? '\x0a@' + (x5pgwv['systemId'] || '') + '#[line:' + x5pgwv['lineNumber'] + ',col:' + x5pgwv['columnNumber'] + ']' : void 0x0;
}function vweq8ub(gxqwe, si9fo, hn1t_2) {
  return 'string' == typeof gxqwe ? gxqwe['substr'](si9fo, hn1t_2) : gxqwe['length'] >= si9fo + hn1t_2 || si9fo ? new java['lang']['String'](gxqwe, si9fo, hn1t_2) + '' : gxqwe;
}function vkp05(dj0ckm, wqg8be) {
  dj0ckm['currentElement'] ? dj0ckm['currentElement']['appendChild'](wqg8be) : dj0ckm['doc']['appendChild'](wqg8be);
}vwqge8['prototype']['parseFromString'] = function (h2y1_, on2t43) {
  var km0dcj = this['options'],
      i$9s = new vp75vk0(),
      bul8eq = km0dcj['domBuilder'] || new vt12_hy(),
      k0c5v7 = km0dcj['errorHandler'],
      u8yz6 = km0dcj['locator'],
      jkdcm0 = km0dcj['xmlns'] || {},
      hl6z1y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return u8yz6 && bul8eq['setDocumentLocator'](u8yz6), i$9s['errorHandler'] = vvx5(k0c5v7, bul8eq, u8yz6), i$9s['domBuilder'] = km0dcj['domBuilder'] || bul8eq, /\/x?html?$/['test'](on2t43) && (hl6z1y['nbsp'] = '\u00a0', hl6z1y['copy'] = '©', jkdcm0[''] = 'http://www.w3.org/1999/xhtml'), jkdcm0['xml'] = jkdcm0['xml'] || 'http://www.w3.org/XML/1998/namespace', h2y1_ ? i$9s['parse'](h2y1_, jkdcm0, hl6z1y) : i$9s['errorHandler']['error']('invalid doc source'), bul8eq['doc'];
}, vt12_hy['prototype'] = { 'startDocument': function () {
    this['doc'] = new vd7mc0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qub8l, e8wu, qe8ulb, l68bz) {
    var _24n3 = this['doc'],
        t34o = _24n3['createElementNS'](qub8l, qe8ulb || e8wu),
        is9o$ = l68bz['length'];vkp05(this, t34o), this['currentElement'] = t34o, this['locator'] && vdjcam0(this['locator'], t34o);for (var s$o3n = 0x0; is9o$ > s$o3n; s$o3n++) {
      var qub8l = l68bz['getURI'](s$o3n),
          tn4 = l68bz['getValue'](s$o3n),
          qe8ulb = l68bz['getQName'](s$o3n),
          _1t2n3 = _24n3['createAttributeNS'](qub8l, qe8ulb);this['locator'] && vdjcam0(l68bz['getLocator'](s$o3n), _1t2n3), _1t2n3['value'] = _1t2n3['nodeValue'] = tn4, t34o['setAttributeNode'](_1t2n3);
    }
  }, 'endElement': function () {
    {
      var n24o = this['currentElement'];n24o['tagName'];
    }this['currentElement'] = n24o['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (eqg, nos3$) {
    var i9rfs$ = this['doc']['createProcessingInstruction'](eqg, nos3$);this['locator'] && vdjcam0(this['locator'], i9rfs$), vkp05(this, i9rfs$);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vxpk7) {
    if (vxpk7 = vweq8ub['apply'](this, arguments)) {
      if (this['cdata']) var ofis$4 = this['doc']['createCDATASection'](vxpk7);else var ofis$4 = this['doc']['createTextNode'](vxpk7);this['currentElement'] ? this['currentElement']['appendChild'](ofis$4) : /^\s*$/['test'](vxpk7) && this['doc']['appendChild'](ofis$4), this['locator'] && vdjcam0(this['locator'], ofis$4);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nso34$) {
    (this['locator'] = nso34$) && (nso34$['lineNumber'] = 0x0);
  }, 'comment': function (eulb) {
    eulb = vweq8ub['apply'](this, arguments);var p750vk = this['doc']['createComment'](eulb);this['locator'] && vdjcam0(this['locator'], p750vk), vkp05(this, p750vk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jcmkd0, zly8u6, b8elq) {
    var m0kc57 = this['doc']['implementation'];if (m0kc57 && m0kc57['createDocumentType']) {
      var ns3$4o = m0kc57['createDocumentType'](jcmkd0, zly8u6, b8elq);this['locator'] && vdjcam0(this['locator'], ns3$4o), vkp05(this, ns3$4o);
    }
  }, 'warning': function (h1nt2_) {
    console['warn']('[xmldom warning]\t' + h1nt2_, vhlu6y(this['locator']));
  }, 'error': function (u8wbeq) {
    console['error']('[xmldom error]\t' + u8wbeq, vhlu6y(this['locator']));
  }, 'fatalError': function (x5vkp) {
    throw console['error']('[xmldom fatalError]\t' + x5vkp, vhlu6y(this['locator'])), x5vkp;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (le8) {
  vt12_hy['prototype'][le8] = function () {
    return null;
  };
});var vp75vk0 = require('./vv12vv')['XMLReader'],
    vd7mc0 = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vwqge8;