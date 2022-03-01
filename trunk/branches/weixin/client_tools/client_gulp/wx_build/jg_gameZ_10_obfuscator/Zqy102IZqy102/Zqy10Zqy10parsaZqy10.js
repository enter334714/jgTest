var J = wx.h$;
function go5rqyb(yoqb05) {
  this['options'] = yoqb05 || { 'locator': {} };
}function gvqoy5r(lm3a4, vjy7r, g0bkqd) {
  function ojyv7(e_2wzp) {
    var f29 = lm3a4[e_2wzp];!f29 && et_hz && (f29 = 0x2 == lm3a4['length'] ? function (cetzp) {
      lm3a4(e_2wzp, cetzp);
    } : lm3a4), ob0q5[e_2wzp] = f29 && function (nxi7jv) {
      f29('[xmldom ' + e_2wzp + ']\t' + nxi7jv + g$w9_2f(g0bkqd));
    } || function () {};
  }if (!lm3a4) {
    if (vjy7r instanceof gtzh6c8) return vjy7r;lm3a4 = vjy7r;
  }var ob0q5 = {},
      et_hz = lm3a4 instanceof Function;return g0bkqd = g0bkqd || {}, ojyv7('warning'), ojyv7('error'), ojyv7('fatalError'), ob0q5;
}function gtzh6c8() {
  this['cdata'] = !0x1;
}function gc8hzt(jv7yo, s9f2w$) {
  s9f2w$['lineNumber'] = jv7yo['lineNumber'], s9f2w$['columnNumber'] = jv7yo['columnNumber'];
}function g$w9_2f(kq0gb5) {
  return kq0gb5 ? '\x0a@' + (kq0gb5['systemId'] || '') + '#[line:' + kq0gb5['lineNumber'] + ',col:' + kq0gb5['columnNumber'] + ']' : void 0x0;
}function gjivxn7($2fws9, qor5vy, u1l3) {
  return 'string' == typeof $2fws9 ? $2fws9['substr'](qor5vy, u1l3) : $2fws9['length'] >= qor5vy + u1l3 || qor5vy ? new java['lang']['String']($2fws9, qor5vy, u1l3) + '' : $2fws9;
}function ginjv(w29$f_, tgdc86) {
  w29$f_['currentElement'] ? w29$f_['currentElement']['appendChild'](tgdc86) : w29$f_['doc']['appendChild'](tgdc86);
}go5rqyb['prototype']['parseFromString'] = function (or7, kd608) {
  var y5boq0 = this['options'],
      luma4 = new gh6cd8(),
      ovy5r = y5boq0['domBuilder'] || new gtzh6c8(),
      cg8dt = y5boq0['errorHandler'],
      zc6th = y5boq0['locator'],
      l314au = y5boq0['xmlns'] || {},
      alm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zc6th && ovy5r['setDocumentLocator'](zc6th), luma4['errorHandler'] = gvqoy5r(cg8dt, ovy5r, zc6th), luma4['domBuilder'] = y5boq0['domBuilder'] || ovy5r, /\/x?html?$/['test'](kd608) && (alm['nbsp'] = '\u00a0', alm['copy'] = '©', l314au[''] = 'http://www.w3.org/1999/xhtml'), l314au['xml'] = l314au['xml'] || 'http://www.w3.org/XML/1998/namespace', or7 ? luma4['parse'](or7, l314au, alm) : luma4['errorHandler']['error']('invalid doc source'), ovy5r['doc'];
}, gtzh6c8['prototype'] = { 'startDocument': function () {
    this['doc'] = new g_eh2z()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (h86d, i71jx, _zepw, i7rvjx) {
    var j7nxi = this['doc'],
        vxjr7 = j7nxi['createElementNS'](h86d, _zepw || i71jx),
        vix7n = i7rvjx['length'];ginjv(this, vxjr7), this['currentElement'] = vxjr7, this['locator'] && gc8hzt(this['locator'], vxjr7);for (var z_w2e = 0x0; vix7n > z_w2e; z_w2e++) {
      var h86d = i7rvjx['getURI'](z_w2e),
          cg6td8 = i7rvjx['getValue'](z_w2e),
          _zepw = i7rvjx['getQName'](z_w2e),
          e2h_pz = j7nxi['createAttributeNS'](h86d, _zepw);this['locator'] && gc8hzt(i7rvjx['getLocator'](z_w2e), e2h_pz), e2h_pz['value'] = e2h_pz['nodeValue'] = cg6td8, vxjr7['setAttributeNode'](e2h_pz);
    }
  }, 'endElement': function () {
    {
      var n1x7 = this['currentElement'];n1x7['tagName'];
    }this['currentElement'] = n1x7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_zpew2, w2z_e) {
    var kgq50b = this['doc']['createProcessingInstruction'](_zpew2, w2z_e);this['locator'] && gc8hzt(this['locator'], kgq50b), ginjv(this, kgq50b);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hctp) {
    if (hctp = gjivxn7['apply'](this, arguments)) {
      if (this['cdata']) var royjv7 = this['doc']['createCDATASection'](hctp);else var royjv7 = this['doc']['createTextNode'](hctp);this['currentElement'] ? this['currentElement']['appendChild'](royjv7) : /^\s*$/['test'](hctp) && this['doc']['appendChild'](royjv7), this['locator'] && gc8hzt(this['locator'], royjv7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xvjr) {
    (this['locator'] = xvjr) && (xvjr['lineNumber'] = 0x0);
  }, 'comment': function (hpz_2e) {
    hpz_2e = gjivxn7['apply'](this, arguments);var s$2 = this['doc']['createComment'](hpz_2e);this['locator'] && gc8hzt(this['locator'], s$2), ginjv(this, s$2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (f_w2p, jyorv, yxrvj7) {
    var w2_9ep = this['doc']['implementation'];if (w2_9ep && w2_9ep['createDocumentType']) {
      var _ezp2 = w2_9ep['createDocumentType'](f_w2p, jyorv, yxrvj7);this['locator'] && gc8hzt(this['locator'], _ezp2), ginjv(this, _ezp2);
    }
  }, 'warning': function (qb0y5) {
    console['warn']('[xmldom warning]\t' + qb0y5, g$w9_2f(this['locator']));
  }, 'error': function (rov5qy) {
    console['error']('[xmldom error]\t' + rov5qy, g$w9_2f(this['locator']));
  }, 'fatalError': function (xi143) {
    throw console['error']('[xmldom fatalError]\t' + xi143, g$w9_2f(this['locator'])), xi143;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a1l3u4) {
  gtzh6c8['prototype'][a1l3u4] = function () {
    return null;
  };
});var gh6cd8 = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    g_eh2z = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = go5rqyb;