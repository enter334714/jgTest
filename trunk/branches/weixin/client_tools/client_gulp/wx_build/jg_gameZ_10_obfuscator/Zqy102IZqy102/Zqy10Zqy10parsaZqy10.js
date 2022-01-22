var J = wx.h$;
function gthzep_(q0dgbk) {
  this['options'] = q0dgbk || { 'locator': {} };
}function gv7ryjx(ew_pz, p2w_ze, e_pht) {
  function n7jix1(ehtczp) {
    var t8hzc = ew_pz[ehtczp];!t8hzc && ix4n17 && (t8hzc = 0x2 == ew_pz['length'] ? function (u43m) {
      ew_pz(ehtczp, u43m);
    } : ew_pz), t_hze[ehtczp] = t8hzc && function (qyro5b) {
      t8hzc('[xmldom ' + ehtczp + ']\t' + qyro5b + g_wf9$2(e_pht));
    } || function () {};
  }if (!ew_pz) {
    if (p2w_ze instanceof gan431u) return p2w_ze;ew_pz = p2w_ze;
  }var t_hze = {},
      ix4n17 = ew_pz instanceof Function;return e_pht = e_pht || {}, n7jix1('warning'), n7jix1('error'), n7jix1('fatalError'), t_hze;
}function gan431u() {
  this['cdata'] = !0x1;
}function gct6gd(ry7v, ze2ph_) {
  ze2ph_['lineNumber'] = ry7v['lineNumber'], ze2ph_['columnNumber'] = ry7v['columnNumber'];
}function g_wf9$2(w92f$_) {
  return w92f$_ ? '\x0a@' + (w92f$_['systemId'] || '') + '#[line:' + w92f$_['lineNumber'] + ',col:' + w92f$_['columnNumber'] + ']' : void 0x0;
}function gvojr7y(w_$f29, gb, anu43) {
  return 'string' == typeof w_$f29 ? w_$f29['substr'](gb, anu43) : w_$f29['length'] >= gb + anu43 || gb ? new java['lang']['String'](w_$f29, gb, anu43) + '' : w_$f29;
}function gokq50(h2pez, gd86tc) {
  h2pez['currentElement'] ? h2pez['currentElement']['appendChild'](gd86tc) : h2pez['doc']['appendChild'](gd86tc);
}gthzep_['prototype']['parseFromString'] = function (kd6g0, u1n4i) {
  var yorq5 = this['options'],
      n34a = new gdt68(),
      ew29_ = yorq5['domBuilder'] || new gan431u(),
      gkd80 = yorq5['errorHandler'],
      p29_w = yorq5['locator'],
      yv5rqo = yorq5['xmlns'] || {},
      ry5voq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p29_w && ew29_['setDocumentLocator'](p29_w), n34a['errorHandler'] = gv7ryjx(gkd80, ew29_, p29_w), n34a['domBuilder'] = yorq5['domBuilder'] || ew29_, /\/x?html?$/['test'](u1n4i) && (ry5voq['nbsp'] = '\u00a0', ry5voq['copy'] = '©', yv5rqo[''] = 'http://www.w3.org/1999/xhtml'), yv5rqo['xml'] = yv5rqo['xml'] || 'http://www.w3.org/XML/1998/namespace', kd6g0 ? n34a['parse'](kd6g0, yv5rqo, ry5voq) : n34a['errorHandler']['error']('invalid doc source'), ew29_['doc'];
}, gan431u['prototype'] = { 'startDocument': function () {
    this['doc'] = new gz8htc6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i4x3n, tdg6c8, pe2z, jvyo) {
    var c6d = this['doc'],
        dbkg0 = c6d['createElementNS'](i4x3n, pe2z || tdg6c8),
        ixrv = jvyo['length'];gokq50(this, dbkg0), this['currentElement'] = dbkg0, this['locator'] && gct6gd(this['locator'], dbkg0);for (var _eth = 0x0; ixrv > _eth; _eth++) {
      var i4x3n = jvyo['getURI'](_eth),
          _2fw9 = jvyo['getValue'](_eth),
          pe2z = jvyo['getQName'](_eth),
          d8cth6 = c6d['createAttributeNS'](i4x3n, pe2z);this['locator'] && gct6gd(jvyo['getLocator'](_eth), d8cth6), d8cth6['value'] = d8cth6['nodeValue'] = _2fw9, dbkg0['setAttributeNode'](d8cth6);
    }
  }, 'endElement': function () {
    {
      var ivnx7 = this['currentElement'];ivnx7['tagName'];
    }this['currentElement'] = ivnx7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (j7inx1, ze_pw2) {
    var hpte = this['doc']['createProcessingInstruction'](j7inx1, ze_pw2);this['locator'] && gct6gd(this['locator'], hpte), gokq50(this, hpte);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jo7yr) {
    if (jo7yr = gvojr7y['apply'](this, arguments)) {
      if (this['cdata']) var _h2ep = this['doc']['createCDATASection'](jo7yr);else var _h2ep = this['doc']['createTextNode'](jo7yr);this['currentElement'] ? this['currentElement']['appendChild'](_h2ep) : /^\s*$/['test'](jo7yr) && this['doc']['appendChild'](_h2ep), this['locator'] && gct6gd(this['locator'], _h2ep);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lu14a) {
    (this['locator'] = lu14a) && (lu14a['lineNumber'] = 0x0);
  }, 'comment': function (hc86d) {
    hc86d = gvojr7y['apply'](this, arguments);var j7xrv = this['doc']['createComment'](hc86d);this['locator'] && gct6gd(this['locator'], j7xrv), gokq50(this, j7xrv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dk68c, vjrix, kbqdg) {
    var x3i14 = this['doc']['implementation'];if (x3i14 && x3i14['createDocumentType']) {
      var e2wpz = x3i14['createDocumentType'](dk68c, vjrix, kbqdg);this['locator'] && gct6gd(this['locator'], e2wpz), gokq50(this, e2wpz);
    }
  }, 'warning': function (kqgb5) {
    console['warn']('[xmldom warning]\t' + kqgb5, g_wf9$2(this['locator']));
  }, 'error': function (tezp_h) {
    console['error']('[xmldom error]\t' + tezp_h, g_wf9$2(this['locator']));
  }, 'fatalError': function (orvy5q) {
    throw console['error']('[xmldom fatalError]\t' + orvy5q, g_wf9$2(this['locator'])), orvy5q;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (eztc8) {
  gan431u['prototype'][eztc8] = function () {
    return null;
  };
});var gdt68 = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gz8htc6 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gthzep_;