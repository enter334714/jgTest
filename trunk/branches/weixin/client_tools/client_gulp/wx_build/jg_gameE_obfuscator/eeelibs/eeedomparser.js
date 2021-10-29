var b = wx.$e;
function eq2ib(vw3ma) {
  this['options'] = vw3ma || { 'locator': {} };
}function egklxah(x_4glh, xgklva, ei2qb) {
  function avmk3u(o5d10r) {
    var st49f = x_4glh[o5d10r];!st49f && ybe2i && (st49f = 0x2 == x_4glh['length'] ? function (ezft) {
      x_4glh(o5d10r, ezft);
    } : x_4glh), zfe9s[o5d10r] = st49f && function (_4fhs) {
      st49f('[xmldom ' + o5d10r + ']\t' + _4fhs + eod6$(ei2qb));
    } || function () {};
  }if (!x_4glh) {
    if (xgklva instanceof ed6w$no) return xgklva;x_4glh = xgklva;
  }var zfe9s = {},
      ybe2i = x_4glh instanceof Function;return ei2qb = ei2qb || {}, avmk3u('warning'), avmk3u('error'), avmk3u('fatalError'), zfe9s;
}function ed6w$no() {
  this['cdata'] = !0x1;
}function eeybi(pi2by, hlg_xk) {
  hlg_xk['lineNumber'] = pi2by['lineNumber'], hlg_xk['columnNumber'] = pi2by['columnNumber'];
}function eod6$(qp) {
  return qp ? '\x0a@' + (qp['systemId'] || '') + '#[line:' + qp['lineNumber'] + ',col:' + qp['columnNumber'] + ']' : void 0x0;
}function es4_z9(u36v, mw3$u, lhgx4_) {
  return 'string' == typeof u36v ? u36v['substr'](mw3$u, lhgx4_) : u36v['length'] >= mw3$u + lhgx4_ || mw3$u ? new java['lang']['String'](u36v, mw3$u, lhgx4_) + '' : u36v;
}function etiy(wva3, vwau) {
  wva3['currentElement'] ? wva3['currentElement']['appendChild'](vwau) : wva3['doc']['appendChild'](vwau);
}eq2ib['prototype']['parseFromString'] = function (dnwm$, vuk3am) {
  var h4szl = this['options'],
      $6nwum = new euv3mw6(),
      avkl = h4szl['domBuilder'] || new ed6w$no(),
      glk_ = h4szl['errorHandler'],
      nm = h4szl['locator'],
      nod5r$ = h4szl['xmlns'] || {},
      umwn = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nm && avkl['setDocumentLocator'](nm), $6nwum['errorHandler'] = egklxah(glk_, avkl, nm), $6nwum['domBuilder'] = h4szl['domBuilder'] || avkl, /\/x?html?$/['test'](vuk3am) && (umwn['nbsp'] = '\u00a0', umwn['copy'] = '©', nod5r$[''] = 'http://www.w3.org/1999/xhtml'), nod5r$['xml'] = nod5r$['xml'] || 'http://www.w3.org/XML/1998/namespace', dnwm$ ? $6nwum['parse'](dnwm$, nod5r$, umwn) : $6nwum['errorHandler']['error']('invalid doc source'), avkl['doc'];
}, ed6w$no['prototype'] = { 'startDocument': function () {
    this['doc'] = new ef9tsze()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mv3uw6, wm3u$6, g_k, q92f) {
    var a3kuvx = this['doc'],
        vw6um = a3kuvx['createElementNS'](mv3uw6, g_k || wm3u$6),
        nwm = q92f['length'];etiy(this, vw6um), this['currentElement'] = vw6um, this['locator'] && eeybi(this['locator'], vw6um);for (var gh4_x = 0x0; nwm > gh4_x; gh4_x++) {
      var mv3uw6 = q92f['getURI'](gh4_x),
          od$r5n = q92f['getValue'](gh4_x),
          g_k = q92f['getQName'](gh4_x),
          qpb = a3kuvx['createAttributeNS'](mv3uw6, g_k);this['locator'] && eeybi(q92f['getLocator'](gh4_x), qpb), qpb['value'] = qpb['nodeValue'] = od$r5n, vw6um['setAttributeNode'](qpb);
    }
  }, 'endElement': function () {
    {
      var dn$mw = this['currentElement'];dn$mw['tagName'];
    }this['currentElement'] = dn$mw['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (l_ghx, fzse) {
    var agx3v = this['doc']['createProcessingInstruction'](l_ghx, fzse);this['locator'] && eeybi(this['locator'], agx3v), etiy(this, agx3v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (don$56) {
    if (don$56 = es4_z9['apply'](this, arguments)) {
      if (this['cdata']) var ipy2qb = this['doc']['createCDATASection'](don$56);else var ipy2qb = this['doc']['createTextNode'](don$56);this['currentElement'] ? this['currentElement']['appendChild'](ipy2qb) : /^\s*$/['test'](don$56) && this['doc']['appendChild'](ipy2qb), this['locator'] && eeybi(this['locator'], ipy2qb);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xk3g) {
    (this['locator'] = xk3g) && (xk3g['lineNumber'] = 0x0);
  }, 'comment': function (_fsh4z) {
    _fsh4z = es4_z9['apply'](this, arguments);var _4f9z = this['doc']['createComment'](_fsh4z);this['locator'] && eeybi(this['locator'], _4f9z), etiy(this, _4f9z);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nwo6, x_4hgl, k3vxau) {
    var tieq2y = this['doc']['implementation'];if (tieq2y && tieq2y['createDocumentType']) {
      var z9tq = tieq2y['createDocumentType'](nwo6, x_4hgl, k3vxau);this['locator'] && eeybi(this['locator'], z9tq), etiy(this, z9tq);
    }
  }, 'warning': function (n5r0d) {
    console['warn']('[xmldom warning]\t' + n5r0d, eod6$(this['locator']));
  }, 'error': function (q2iybp) {
    console['error']('[xmldom error]\t' + q2iybp, eod6$(this['locator']));
  }, 'fatalError': function (s_4g) {
    throw console['error']('[xmldom fatalError]\t' + s_4g, eod6$(this['locator'])), s_4g;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w$6unm) {
  ed6w$no['prototype'][w$6unm] = function () {
    return null;
  };
});var euv3mw6 = require('./eeesax')['XMLReader'],
    ef9tsze = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eq2ib;