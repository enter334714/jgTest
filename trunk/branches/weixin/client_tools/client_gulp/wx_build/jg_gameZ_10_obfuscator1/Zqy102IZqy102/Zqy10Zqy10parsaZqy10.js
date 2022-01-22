var I1 = wx.h$;
function gezch8(bk0d) {
  this['options'] = bk0d || { 'locator': {} };
}function gyr5qov(we, bqo05y, r5vyjo) {
  function r7xiv(a4nu) {
    var $fs9 = we[a4nu];!$fs9 && xijr7 && ($fs9 = 0x2 == we['length'] ? function (db0g) {
      we(a4nu, db0g);
    } : we), $2fw_9[a4nu] = $fs9 && function (qb0oy5) {
      $fs9('[xmldom ' + a4nu + ']\t' + qb0oy5 + gzethp(r5vyjo));
    } || function () {};
  }if (!we) {
    if (bqo05y instanceof gixn71) return bqo05y;we = bqo05y;
  }var $2fw_9 = {},
      xijr7 = we instanceof Function;return r5vyjo = r5vyjo || {}, r7xiv('warning'), r7xiv('error'), r7xiv('fatalError'), $2fw_9;
}function gixn71() {
  this['cdata'] = !0x1;
}function gxjnv7(zt8hec, pthcez) {
  pthcez['lineNumber'] = zt8hec['lineNumber'], pthcez['columnNumber'] = zt8hec['columnNumber'];
}function gzethp(w9f$_) {
  return w9f$_ ? '\x0a@' + (w9f$_['systemId'] || '') + '#[line:' + w9f$_['lineNumber'] + ',col:' + w9f$_['columnNumber'] + ']' : void 0x0;
}function gx4(gdkbq, p29_, jxvn) {
  return 'string' == typeof gdkbq ? gdkbq['substr'](p29_, jxvn) : gdkbq['length'] >= p29_ + jxvn || p29_ ? new java['lang']['String'](gdkbq, p29_, jxvn) + '' : gdkbq;
}function gwf$29(s2f, wpz2_) {
  s2f['currentElement'] ? s2f['currentElement']['appendChild'](wpz2_) : s2f['doc']['appendChild'](wpz2_);
}gezch8['prototype']['parseFromString'] = function (zetc8, gk0b6d) {
  var w2$f_ = this['options'],
      a1n3 = new ghp_tz(),
      ep_hzt = w2$f_['domBuilder'] || new gixn71(),
      dgq0b = w2$f_['errorHandler'],
      _pz = w2$f_['locator'],
      d8t6h = w2$f_['xmlns'] || {},
      jxy7v = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _pz && ep_hzt['setDocumentLocator'](_pz), a1n3['errorHandler'] = gyr5qov(dgq0b, ep_hzt, _pz), a1n3['domBuilder'] = w2$f_['domBuilder'] || ep_hzt, /\/x?html?$/['test'](gk0b6d) && (jxy7v['nbsp'] = '\u00a0', jxy7v['copy'] = '©', d8t6h[''] = 'http://www.w3.org/1999/xhtml'), d8t6h['xml'] = d8t6h['xml'] || 'http://www.w3.org/XML/1998/namespace', zetc8 ? a1n3['parse'](zetc8, d8t6h, jxy7v) : a1n3['errorHandler']['error']('invalid doc source'), ep_hzt['doc'];
}, gixn71['prototype'] = { 'startDocument': function () {
    this['doc'] = new gtdhc6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gdtc6, vx7yjr, hzcpe, f_2wp9) {
    var pzect = this['doc'],
        ryboq = pzect['createElementNS'](gdtc6, hzcpe || vx7yjr),
        l13ua4 = f_2wp9['length'];gwf$29(this, ryboq), this['currentElement'] = ryboq, this['locator'] && gxjnv7(this['locator'], ryboq);for (var un1i3 = 0x0; l13ua4 > un1i3; un1i3++) {
      var gdtc6 = f_2wp9['getURI'](un1i3),
          dtc68h = f_2wp9['getValue'](un1i3),
          hzcpe = f_2wp9['getQName'](un1i3),
          kbqgd = pzect['createAttributeNS'](gdtc6, hzcpe);this['locator'] && gxjnv7(f_2wp9['getLocator'](un1i3), kbqgd), kbqgd['value'] = kbqgd['nodeValue'] = dtc68h, ryboq['setAttributeNode'](kbqgd);
    }
  }, 'endElement': function () {
    {
      var byq5ro = this['currentElement'];byq5ro['tagName'];
    }this['currentElement'] = byq5ro['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d0gbk, zphcte) {
    var chzpet = this['doc']['createProcessingInstruction'](d0gbk, zphcte);this['locator'] && gxjnv7(this['locator'], chzpet), gwf$29(this, chzpet);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s$fw2) {
    if (s$fw2 = gx4['apply'](this, arguments)) {
      if (this['cdata']) var mul34 = this['doc']['createCDATASection'](s$fw2);else var mul34 = this['doc']['createTextNode'](s$fw2);this['currentElement'] ? this['currentElement']['appendChild'](mul34) : /^\s*$/['test'](s$fw2) && this['doc']['appendChild'](mul34), this['locator'] && gxjnv7(this['locator'], mul34);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rqby) {
    (this['locator'] = rqby) && (rqby['lineNumber'] = 0x0);
  }, 'comment': function (ry7jxv) {
    ry7jxv = gx4['apply'](this, arguments);var w_92p = this['doc']['createComment'](ry7jxv);this['locator'] && gxjnv7(this['locator'], w_92p), gwf$29(this, w_92p);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vxir7j, qg0b, x7vni) {
    var ivr7 = this['doc']['implementation'];if (ivr7 && ivr7['createDocumentType']) {
      var c8dt6h = ivr7['createDocumentType'](vxir7j, qg0b, x7vni);this['locator'] && gxjnv7(this['locator'], c8dt6h), gwf$29(this, c8dt6h);
    }
  }, 'warning': function (o5yb) {
    console['warn']('[xmldom warning]\t' + o5yb, gzethp(this['locator']));
  }, 'error': function (n3i1x) {
    console['error']('[xmldom error]\t' + n3i1x, gzethp(this['locator']));
  }, 'fatalError': function (l1u3) {
    throw console['error']('[xmldom fatalError]\t' + l1u3, gzethp(this['locator'])), l1u3;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oq0by) {
  gixn71['prototype'][oq0by] = function () {
    return null;
  };
});var ghp_tz = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gtdhc6 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gezch8;