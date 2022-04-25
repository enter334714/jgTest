var W = wx.$l;
function L9xu9a5(vz1_6) {
  this['options'] = vz1_6 || { 'locator': {} };
}function L9iuf(ecnwy, rjc7, yk3zwc) {
  function f81ibl(z_261) {
    var iu8b = ecnwy[z_261];!iu8b && i8lbfu && (iu8b = 0x2 == ecnwy['length'] ? function (_i816) {
      ecnwy(z_261, _i816);
    } : ecnwy), phsq4o[z_261] = iu8b && function (duf9b) {
      iu8b('[xmldom ' + z_261 + ']\t' + duf9b + L9p04oh(yk3zwc));
    } || function () {};
  }if (!ecnwy) {
    if (rjc7 instanceof L9i_628) return rjc7;ecnwy = rjc7;
  }var phsq4o = {},
      i8lbfu = ecnwy instanceof Function;return yk3zwc = yk3zwc || {}, f81ibl('warning'), f81ibl('error'), f81ibl('fatalError'), phsq4o;
}function L9i_628() {
  this['cdata'] = !0x1;
}function L9yzk2v(i8ul, ywc7en) {
  ywc7en['lineNumber'] = i8ul['lineNumber'], ywc7en['columnNumber'] = i8ul['columnNumber'];
}function L9p04oh(w3zkv) {
  return w3zkv ? '\x0a@' + (w3zkv['systemId'] || '') + '#[line:' + w3zkv['lineNumber'] + ',col:' + w3zkv['columnNumber'] + ']' : void 0x0;
}function L9rnew7c(f9uldb, s4qp5a, to$hm) {
  return 'string' == typeof f9uldb ? f9uldb['substr'](s4qp5a, to$hm) : f9uldb['length'] >= s4qp5a + to$hm || s4qp5a ? new java['lang']['String'](f9uldb, s4qp5a, to$hm) + '' : f9uldb;
}function L9ewnrc7(zvk_23, vz126_) {
  zvk_23['currentElement'] ? zvk_23['currentElement']['appendChild'](vz126_) : zvk_23['doc']['appendChild'](vz126_);
}L9xu9a5['prototype']['parseFromString'] = function (_623z, erjnc) {
  var _23kv = this['options'],
      $m0tog = new L9f9uda(),
      sp5aq = _23kv['domBuilder'] || new L9i_628(),
      k3_v = _23kv['errorHandler'],
      k7nwcy = _23kv['locator'],
      zkvwy = _23kv['xmlns'] || {},
      v_zk2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return k7nwcy && sp5aq['setDocumentLocator'](k7nwcy), $m0tog['errorHandler'] = L9iuf(k3_v, sp5aq, k7nwcy), $m0tog['domBuilder'] = _23kv['domBuilder'] || sp5aq, /\/x?html?$/['test'](erjnc) && (v_zk2['nbsp'] = '\u00a0', v_zk2['copy'] = '©', zkvwy[''] = 'http://www.w3.org/1999/xhtml'), zkvwy['xml'] = zkvwy['xml'] || 'http://www.w3.org/XML/1998/namespace', _623z ? $m0tog['parse'](_623z, zkvwy, v_zk2) : $m0tog['errorHandler']['error']('invalid doc source'), sp5aq['doc'];
}, L9i_628['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9cnr7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ud59x, adsx59, xfu9a, sho4p) {
    var fub8li = this['doc'],
        b8_6i = fub8li['createElementNS'](ud59x, xfu9a || adsx59),
        hmoq4 = sho4p['length'];L9ewnrc7(this, b8_6i), this['currentElement'] = b8_6i, this['locator'] && L9yzk2v(this['locator'], b8_6i);for (var ohmq = 0x0; hmoq4 > ohmq; ohmq++) {
      var ud59x = sho4p['getURI'](ohmq),
          fubd8 = sho4p['getValue'](ohmq),
          xfu9a = sho4p['getQName'](ohmq),
          i8_126 = fub8li['createAttributeNS'](ud59x, xfu9a);this['locator'] && L9yzk2v(sho4p['getLocator'](ohmq), i8_126), i8_126['value'] = i8_126['nodeValue'] = fubd8, b8_6i['setAttributeNode'](i8_126);
    }
  }, 'endElement': function () {
    {
      var d9lxuf = this['currentElement'];d9lxuf['tagName'];
    }this['currentElement'] = d9lxuf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kzvw3, ld9fx) {
    var ywc37k = this['doc']['createProcessingInstruction'](kzvw3, ld9fx);this['locator'] && L9yzk2v(this['locator'], ywc37k), L9ewnrc7(this, ywc37k);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hm0o$t) {
    if (hm0o$t = L9rnew7c['apply'](this, arguments)) {
      if (this['cdata']) var yvkz32 = this['doc']['createCDATASection'](hm0o$t);else var yvkz32 = this['doc']['createTextNode'](hm0o$t);this['currentElement'] ? this['currentElement']['appendChild'](yvkz32) : /^\s*$/['test'](hm0o$t) && this['doc']['appendChild'](yvkz32), this['locator'] && L9yzk2v(this['locator'], yvkz32);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (v_326z) {
    (this['locator'] = v_326z) && (v_326z['lineNumber'] = 0x0);
  }, 'comment': function (u9xdlf) {
    u9xdlf = L9rnew7c['apply'](this, arguments);var k3w7 = this['doc']['createComment'](u9xdlf);this['locator'] && L9yzk2v(this['locator'], k3w7), L9ewnrc7(this, k3w7);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rnce7w, wczk, ycwn7k) {
    var a4s5xp = this['doc']['implementation'];if (a4s5xp && a4s5xp['createDocumentType']) {
      var ad9fxu = a4s5xp['createDocumentType'](rnce7w, wczk, ycwn7k);this['locator'] && L9yzk2v(this['locator'], ad9fxu), L9ewnrc7(this, ad9fxu);
    }
  }, 'warning': function (ho04pq) {
    console['warn']('[xmldom warning]\t' + ho04pq, L9p04oh(this['locator']));
  }, 'error': function (p5xa) {
    console['error']('[xmldom error]\t' + p5xa, L9p04oh(this['locator']));
  }, 'fatalError': function (ewc7ny) {
    throw console['error']('[xmldom fatalError]\t' + ewc7ny, L9p04oh(this['locator'])), ewc7ny;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ib168_) {
  L9i_628['prototype'][ib168_] = function () {
    return null;
  };
});var L9f9uda = require('./lllSAX')['XMLReader'],
    L9cnr7 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9xu9a5;