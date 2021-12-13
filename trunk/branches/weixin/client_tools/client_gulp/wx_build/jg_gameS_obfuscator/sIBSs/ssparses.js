var K = wx.$S;
function sur$3e(o9kzv) {
  this['options'] = o9kzv || { 'locator': {} };
}function srz3uv($ua4ed, i0wc_x, ci0_9w) {
  function mxc0_i(y5shda) {
    var c_90k = $ua4ed[y5shda];!c_90k && sy5dh && (c_90k = 0x2 == $ua4ed['length'] ? function (syp5hq) {
      $ua4ed(y5shda, syp5hq);
    } : $ua4ed), ua$4ed[y5shda] = c_90k && function (cw0_9k) {
      c_90k('[xmldom ' + y5shda + ']\t' + cw0_9k + sa4$5e(ci0_9w));
    } || function () {};
  }if (!$ua4ed) {
    if (i0wc_x instanceof sjq1b8g) return i0wc_x;$ua4ed = i0wc_x;
  }var ua$4ed = {},
      sy5dh = $ua4ed instanceof Function;return ci0_9w = ci0_9w || {}, mxc0_i('warning'), mxc0_i('error'), mxc0_i('fatalError'), ua$4ed;
}function sjq1b8g() {
  this['cdata'] = !0x1;
}function seua4(psghyq, dh$a54) {
  dh$a54['lineNumber'] = psghyq['lineNumber'], dh$a54['columnNumber'] = psghyq['columnNumber'];
}function sa4$5e(a$5yd) {
  return a$5yd ? '\x0a@' + (a$5yd['systemId'] || '') + '#[line:' + a$5yd['lineNumber'] + ',col:' + a$5yd['columnNumber'] + ']' : void 0x0;
}function svo9kzw(v39z, j6g1b, i2mn_) {
  return 'string' == typeof v39z ? v39z['substr'](j6g1b, i2mn_) : v39z['length'] >= j6g1b + i2mn_ || j6g1b ? new java['lang']['String'](v39z, j6g1b, i2mn_) + '' : v39z;
}function sda$(ix_c2m, qpgj) {
  ix_c2m['currentElement'] ? ix_c2m['currentElement']['appendChild'](qpgj) : ix_c2m['doc']['appendChild'](qpgj);
}sur$3e['prototype']['parseFromString'] = function (hy5sq, hqpg) {
  var z9k3vo = this['options'],
      mx72n = new sbl861j(),
      jyspqg = z9k3vo['domBuilder'] || new sjq1b8g(),
      $d4ha5 = z9k3vo['errorHandler'],
      yh5a$ = z9k3vo['locator'],
      r4e$u = z9k3vo['xmlns'] || {},
      xm_c = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return yh5a$ && jyspqg['setDocumentLocator'](yh5a$), mx72n['errorHandler'] = srz3uv($d4ha5, jyspqg, yh5a$), mx72n['domBuilder'] = z9k3vo['domBuilder'] || jyspqg, /\/x?html?$/['test'](hqpg) && (xm_c['nbsp'] = '\u00a0', xm_c['copy'] = '©', r4e$u[''] = 'http://www.w3.org/1999/xhtml'), r4e$u['xml'] = r4e$u['xml'] || 'http://www.w3.org/XML/1998/namespace', hy5sq ? mx72n['parse'](hy5sq, r4e$u, xm_c) : mx72n['errorHandler']['error']('invalid doc source'), jyspqg['doc'];
}, sjq1b8g['prototype'] = { 'startDocument': function () {
    this['doc'] = new sx0icm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qpgsj, ura$, kzovw9, a5ydh) {
    var cm_ix = this['doc'],
        itn2xm = cm_ix['createElementNS'](qpgsj, kzovw9 || ura$),
        y5ahs = a5ydh['length'];sda$(this, itn2xm), this['currentElement'] = itn2xm, this['locator'] && seua4(this['locator'], itn2xm);for (var zk9wv = 0x0; y5ahs > zk9wv; zk9wv++) {
      var qpgsj = a5ydh['getURI'](zk9wv),
          s5hdp = a5ydh['getValue'](zk9wv),
          kzovw9 = a5ydh['getQName'](zk9wv),
          zkorv3 = cm_ix['createAttributeNS'](qpgsj, kzovw9);this['locator'] && seua4(a5ydh['getLocator'](zk9wv), zkorv3), zkorv3['value'] = zkorv3['nodeValue'] = s5hdp, itn2xm['setAttributeNode'](zkorv3);
    }
  }, 'endElement': function () {
    {
      var rzvu3o = this['currentElement'];rzvu3o['tagName'];
    }this['currentElement'] = rzvu3o['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vrzou, o9zkwv) {
    var yh5d$a = this['doc']['createProcessingInstruction'](vrzou, o9zkwv);this['locator'] && seua4(this['locator'], yh5d$a), sda$(this, yh5d$a);
  }, 'ignorableWhitespace': function () {}, 'characters': function (wi9c0) {
    if (wi9c0 = svo9kzw['apply'](this, arguments)) {
      if (this['cdata']) var in2_x = this['doc']['createCDATASection'](wi9c0);else var in2_x = this['doc']['createTextNode'](wi9c0);this['currentElement'] ? this['currentElement']['appendChild'](in2_x) : /^\s*$/['test'](wi9c0) && this['doc']['appendChild'](in2_x), this['locator'] && seua4(this['locator'], in2_x);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (m2nx7) {
    (this['locator'] = m2nx7) && (m2nx7['lineNumber'] = 0x0);
  }, 'comment': function (ni_m) {
    ni_m = svo9kzw['apply'](this, arguments);var b1fl6 = this['doc']['createComment'](ni_m);this['locator'] && seua4(this['locator'], b1fl6), sda$(this, b1fl6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ur3oe4, r3vozk, gpsyjq) {
    var x2ntm = this['doc']['implementation'];if (x2ntm && x2ntm['createDocumentType']) {
      var vrou = x2ntm['createDocumentType'](ur3oe4, r3vozk, gpsyjq);this['locator'] && seua4(this['locator'], vrou), sda$(this, vrou);
    }
  }, 'warning': function (zrkv3) {
    console['warn']('[xmldom warning]\t' + zrkv3, sa4$5e(this['locator']));
  }, 'error': function (vw) {
    console['error']('[xmldom error]\t' + vw, sa4$5e(this['locator']));
  }, 'fatalError': function (voeur3) {
    throw console['error']('[xmldom fatalError]\t' + voeur3, sa4$5e(this['locator'])), voeur3;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x_m0i) {
  sjq1b8g['prototype'][x_m0i] = function () {
    return null;
  };
});var sbl861j = require('./sS12ss')['XMLReader'],
    sx0icm = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = sur$3e;