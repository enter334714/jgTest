var O = wx.$C;
function h__ysn(ol5cm) {
  this['options'] = ol5cm || { 'locator': {} };
}function h_$plu8(g4_vf, h9zrdj, jhwzd) {
  function ngv4f_(hd90w) {
    var jzh9 = g4_vf[hd90w];!jzh9 && aibe && (jzh9 = 0x2 == g4_vf['length'] ? function (vnyg_) {
      g4_vf(hd90w, vnyg_);
    } : g4_vf), r89zj[hd90w] = jzh9 && function ($r9u8) {
      jzh9('[xmldom ' + hd90w + ']\t' + $r9u8 + h_pcur$(jhwzd));
    } || function () {};
  }if (!g4_vf) {
    if (h9zrdj instanceof h_oupl5) return h9zrdj;g4_vf = h9zrdj;
  }var r89zj = {},
      aibe = g4_vf instanceof Function;return jhwzd = jhwzd || {}, ngv4f_('warning'), ngv4f_('error'), ngv4f_('fatalError'), r89zj;
}function h_oupl5() {
  this['cdata'] = !0x1;
}function h_zr8$9u(jzr9, b6ia2) {
  b6ia2['lineNumber'] = jzr9['lineNumber'], b6ia2['columnNumber'] = jzr9['columnNumber'];
}function h_pcur$(zwh9) {
  return zwh9 ? '\x0a@' + (zwh9['systemId'] || '') + '#[line:' + zwh9['lineNumber'] + ',col:' + zwh9['columnNumber'] + ']' : void 0x0;
}function h_g4371(ot5cpl, dqxhw0, xhdwj) {
  return 'string' == typeof ot5cpl ? ot5cpl['substr'](dqxhw0, xhdwj) : ot5cpl['length'] >= dqxhw0 + xhdwj || dqxhw0 ? new java['lang']['String'](ot5cpl, dqxhw0, xhdwj) + '' : ot5cpl;
}function h_y_asvn(vyngs_, f3v_) {
  vyngs_['currentElement'] ? vyngs_['currentElement']['appendChild'](f3v_) : vyngs_['doc']['appendChild'](f3v_);
}h__ysn['prototype']['parseFromString'] = function (v_syn, _3vgf) {
  var ia6y2s = this['options'],
      yn6_s = new h_rzu8$(),
      potc5 = ia6y2s['domBuilder'] || new h_oupl5(),
      whj9zd = ia6y2s['errorHandler'],
      $r8pu = ia6y2s['locator'],
      ys62n = ia6y2s['xmlns'] || {},
      vfg143 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $r8pu && potc5['setDocumentLocator']($r8pu), yn6_s['errorHandler'] = h_$plu8(whj9zd, potc5, $r8pu), yn6_s['domBuilder'] = ia6y2s['domBuilder'] || potc5, /\/x?html?$/['test'](_3vgf) && (vfg143['nbsp'] = '\u00a0', vfg143['copy'] = '©', ys62n[''] = 'http://www.w3.org/1999/xhtml'), ys62n['xml'] = ys62n['xml'] || 'http://www.w3.org/XML/1998/namespace', v_syn ? yn6_s['parse'](v_syn, ys62n, vfg143) : yn6_s['errorHandler']['error']('invalid doc source'), potc5['doc'];
}, h_oupl5['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_d9whz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ouc5l, $r8cu, wdh0j9, q0371x) {
    var c5u = this['doc'],
        olk5tm = c5u['createElementNS'](ouc5l, wdh0j9 || $r8cu),
        djw0xh = q0371x['length'];h_y_asvn(this, olk5tm), this['currentElement'] = olk5tm, this['locator'] && h_zr8$9u(this['locator'], olk5tm);for (var ctolp5 = 0x0; djw0xh > ctolp5; ctolp5++) {
      var ouc5l = q0371x['getURI'](ctolp5),
          r98zjd = q0371x['getValue'](ctolp5),
          wdh0j9 = q0371x['getQName'](ctolp5),
          nygsv = c5u['createAttributeNS'](ouc5l, wdh0j9);this['locator'] && h_zr8$9u(q0371x['getLocator'](ctolp5), nygsv), nygsv['value'] = nygsv['nodeValue'] = r98zjd, olk5tm['setAttributeNode'](nygsv);
    }
  }, 'endElement': function () {
    {
      var siy = this['currentElement'];siy['tagName'];
    }this['currentElement'] = siy['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (x7qwh, yis2) {
    var s2i6 = this['doc']['createProcessingInstruction'](x7qwh, yis2);this['locator'] && h_zr8$9u(this['locator'], s2i6), h_y_asvn(this, s2i6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (q1x473) {
    if (q1x473 = h_g4371['apply'](this, arguments)) {
      if (this['cdata']) var gns_vy = this['doc']['createCDATASection'](q1x473);else var gns_vy = this['doc']['createTextNode'](q1x473);this['currentElement'] ? this['currentElement']['appendChild'](gns_vy) : /^\s*$/['test'](q1x473) && this['doc']['appendChild'](gns_vy), this['locator'] && h_zr8$9u(this['locator'], gns_vy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (yas26n) {
    (this['locator'] = yas26n) && (yas26n['lineNumber'] = 0x0);
  }, 'comment': function (eab2i) {
    eab2i = h_g4371['apply'](this, arguments);var wj9h = this['doc']['createComment'](eab2i);this['locator'] && h_zr8$9u(this['locator'], wj9h), h_y_asvn(this, wj9h);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (a62isy, jrz89d, sya6) {
    var tok = this['doc']['implementation'];if (tok && tok['createDocumentType']) {
      var pcl8 = tok['createDocumentType'](a62isy, jrz89d, sya6);this['locator'] && h_zr8$9u(this['locator'], pcl8), h_y_asvn(this, pcl8);
    }
  }, 'warning': function (g_nysv) {
    console['warn']('[xmldom warning]\t' + g_nysv, h_pcur$(this['locator']));
  }, 'error': function ($culp8) {
    console['error']('[xmldom error]\t' + $culp8, h_pcur$(this['locator']));
  }, 'fatalError': function (n2a6s) {
    throw console['error']('[xmldom fatalError]\t' + n2a6s, h_pcur$(this['locator'])), n2a6s;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_nvsy) {
  h_oupl5['prototype'][_nvsy] = function () {
    return null;
  };
});var h_rzu8$ = require('./hhhsax')['XMLReader'],
    h_d9whz = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h__ysn;