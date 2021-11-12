var Q = wx.$v;
function ve0iq1_(msjt2c) {
  this['options'] = msjt2c || { 'locator': {} };
}function v$q_f1(n0irzu, xv5dwk, cs2tm) {
  function lb467(s3m79) {
    var s972 = n0irzu[s3m79];!s972 && uni10r && (s972 = 0x2 == n0irzu['length'] ? function (kd5) {
      n0irzu(s3m79, kd5);
    } : n0irzu), qkf_e$[s3m79] = s972 && function (_kf$qe) {
      s972('[xmldom ' + s3m79 + ']\t' + _kf$qe + vvdw5x(cs2tm));
    } || function () {};
  }if (!n0irzu) {
    if (xv5dwk instanceof vm7329s) return xv5dwk;n0irzu = xv5dwk;
  }var qkf_e$ = {},
      uni10r = n0irzu instanceof Function;return cs2tm = cs2tm || {}, lb467('warning'), lb467('error'), lb467('fatalError'), qkf_e$;
}function vm7329s() {
  this['cdata'] = !0x1;
}function ve01i_(uza6n, tj2scm) {
  tj2scm['lineNumber'] = uza6n['lineNumber'], tj2scm['columnNumber'] = uza6n['columnNumber'];
}function vvdw5x(m9l3s7) {
  return m9l3s7 ? '\x0a@' + (m9l3s7['systemId'] || '') + '#[line:' + m9l3s7['lineNumber'] + ',col:' + m9l3s7['columnNumber'] + ']' : void 0x0;
}function ve_q1i(ui0rz, fe1_, al4b) {
  return 'string' == typeof ui0rz ? ui0rz['substr'](fe1_, al4b) : ui0rz['length'] >= fe1_ + al4b || fe1_ ? new java['lang']['String'](ui0rz, fe1_, al4b) + '' : ui0rz;
}function vkdf5wv(bl4379, qk5wf) {
  bl4379['currentElement'] ? bl4379['currentElement']['appendChild'](qk5wf) : bl4379['doc']['appendChild'](qk5wf);
}ve0iq1_['prototype']['parseFromString'] = function (ypjh, n4abz6) {
  var vx5kdw = this['options'],
      zu46na = new vu0nz(),
      q$5kef = vx5kdw['domBuilder'] || new vm7329s(),
      mj2ct8 = vx5kdw['errorHandler'],
      cjoy = vx5kdw['locator'],
      i0zrn = vx5kdw['xmlns'] || {},
      wv5kf$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cjoy && q$5kef['setDocumentLocator'](cjoy), zu46na['errorHandler'] = v$q_f1(mj2ct8, q$5kef, cjoy), zu46na['domBuilder'] = vx5kdw['domBuilder'] || q$5kef, /\/x?html?$/['test'](n4abz6) && (wv5kf$['nbsp'] = '\u00a0', wv5kf$['copy'] = '©', i0zrn[''] = 'http://www.w3.org/1999/xhtml'), i0zrn['xml'] = i0zrn['xml'] || 'http://www.w3.org/XML/1998/namespace', ypjh ? zu46na['parse'](ypjh, i0zrn, wv5kf$) : zu46na['errorHandler']['error']('invalid doc source'), q$5kef['doc'];
}, vm7329s['prototype'] = { 'startDocument': function () {
    this['doc'] = new viur1_0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (c8ohyj, kdv5, t2j, n6bz4) {
    var w5xdk = this['doc'],
        z0u6 = w5xdk['createElementNS'](c8ohyj, t2j || kdv5),
        r01u_i = n6bz4['length'];vkdf5wv(this, z0u6), this['currentElement'] = z0u6, this['locator'] && ve01i_(this['locator'], z0u6);for (var jsm2ct = 0x0; r01u_i > jsm2ct; jsm2ct++) {
      var c8ohyj = n6bz4['getURI'](jsm2ct),
          i_qe10 = n6bz4['getValue'](jsm2ct),
          t2j = n6bz4['getQName'](jsm2ct),
          oytc = w5xdk['createAttributeNS'](c8ohyj, t2j);this['locator'] && ve01i_(n6bz4['getLocator'](jsm2ct), oytc), oytc['value'] = oytc['nodeValue'] = i_qe10, z0u6['setAttributeNode'](oytc);
    }
  }, 'endElement': function () {
    {
      var j8yop = this['currentElement'];j8yop['tagName'];
    }this['currentElement'] = j8yop['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dkx5w, e_ir) {
    var z4an6 = this['doc']['createProcessingInstruction'](dkx5w, e_ir);this['locator'] && ve01i_(this['locator'], z4an6), vkdf5wv(this, z4an6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (riu0_1) {
    if (riu0_1 = ve_q1i['apply'](this, arguments)) {
      if (this['cdata']) var iq0_e = this['doc']['createCDATASection'](riu0_1);else var iq0_e = this['doc']['createTextNode'](riu0_1);this['currentElement'] ? this['currentElement']['appendChild'](iq0_e) : /^\s*$/['test'](riu0_1) && this['doc']['appendChild'](iq0_e), this['locator'] && ve01i_(this['locator'], iq0_e);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s293t) {
    (this['locator'] = s293t) && (s293t['lineNumber'] = 0x0);
  }, 'comment': function (z6ba) {
    z6ba = ve_q1i['apply'](this, arguments);var jm8ct2 = this['doc']['createComment'](z6ba);this['locator'] && ve01i_(this['locator'], jm8ct2), vkdf5wv(this, jm8ct2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ke_q$f, yhp8j, toj2) {
    var r6nauz = this['doc']['implementation'];if (r6nauz && r6nauz['createDocumentType']) {
      var eq_1i0 = r6nauz['createDocumentType'](ke_q$f, yhp8j, toj2);this['locator'] && ve01i_(this['locator'], eq_1i0), vkdf5wv(this, eq_1i0);
    }
  }, 'warning': function (l974b) {
    console['warn']('[xmldom warning]\t' + l974b, vvdw5x(this['locator']));
  }, 'error': function ($ie) {
    console['error']('[xmldom error]\t' + $ie, vvdw5x(this['locator']));
  }, 'fatalError': function (cm28) {
    throw console['error']('[xmldom fatalError]\t' + cm28, vvdw5x(this['locator'])), cm28;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i_10u) {
  vm7329s['prototype'][i_10u] = function () {
    return null;
  };
});var vu0nz = require('./vv12vv')['XMLReader'],
    viur1_0 = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = ve0iq1_;