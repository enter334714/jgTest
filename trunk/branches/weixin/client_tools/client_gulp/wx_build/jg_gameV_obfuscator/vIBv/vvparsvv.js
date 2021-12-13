var Q = wx.$v;
function vx5gv7(xpwqvg) {
  this['options'] = xpwqvg || { 'locator': {} };
}function vl6bu8(y86luz, $fsio4, hty21_) {
  function r$9sif(mkd0c7) {
    var xpvgqw = y86luz[mkd0c7];!xpvgqw && _3t21 && (xpvgqw = 0x2 == y86luz['length'] ? function (gwqbx) {
      y86luz(mkd0c7, gwqbx);
    } : y86luz), k50cv7[mkd0c7] = xpvgqw && function (y6zu) {
      xpvgqw('[xmldom ' + mkd0c7 + ']\t' + y6zu + vvp5xgw(hty21_));
    } || function () {};
  }if (!y86luz) {
    if ($fsio4 instanceof vso$3i) return $fsio4;y86luz = $fsio4;
  }var k50cv7 = {},
      _3t21 = y86luz instanceof Function;return hty21_ = hty21_ || {}, r$9sif('warning'), r$9sif('error'), r$9sif('fatalError'), k50cv7;
}function vso$3i() {
  this['cdata'] = !0x1;
}function vfi9$o(bqel8, k0jdmc) {
  k0jdmc['lineNumber'] = bqel8['lineNumber'], k0jdmc['columnNumber'] = bqel8['columnNumber'];
}function vvp5xgw(n4o3$) {
  return n4o3$ ? '\x0a@' + (n4o3$['systemId'] || '') + '#[line:' + n4o3$['lineNumber'] + ',col:' + n4o3$['columnNumber'] + ']' : void 0x0;
}function vbge8wq(qgpw, pgewqx, jm0cd) {
  return 'string' == typeof qgpw ? qgpw['substr'](pgewqx, jm0cd) : qgpw['length'] >= pgewqx + jm0cd || pgewqx ? new java['lang']['String'](qgpw, pgewqx, jm0cd) + '' : qgpw;
}function vw8qeg(jk0m, ulh) {
  jk0m['currentElement'] ? jk0m['currentElement']['appendChild'](ulh) : jk0m['doc']['appendChild'](ulh);
}vx5gv7['prototype']['parseFromString'] = function (pwqxvg, l8z) {
  var p5k07 = this['options'],
      t_21y = new vt12_n3(),
      h6yzul = p5k07['domBuilder'] || new vso$3i(),
      t3n2o4 = p5k07['errorHandler'],
      zy6lhu = p5k07['locator'],
      _2n43 = p5k07['xmlns'] || {},
      eqlb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zy6lhu && h6yzul['setDocumentLocator'](zy6lhu), t_21y['errorHandler'] = vl6bu8(t3n2o4, h6yzul, zy6lhu), t_21y['domBuilder'] = p5k07['domBuilder'] || h6yzul, /\/x?html?$/['test'](l8z) && (eqlb['nbsp'] = '\u00a0', eqlb['copy'] = '©', _2n43[''] = 'http://www.w3.org/1999/xhtml'), _2n43['xml'] = _2n43['xml'] || 'http://www.w3.org/XML/1998/namespace', pwqxvg ? t_21y['parse'](pwqxvg, _2n43, eqlb) : t_21y['errorHandler']['error']('invalid doc source'), h6yzul['doc'];
}, vso$3i['prototype'] = { 'startDocument': function () {
    this['doc'] = new vot42n()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pkv05, bulze8, x5g7vp, exbqwg) {
    var bwgex = this['doc'],
        i9$fo = bwgex['createElementNS'](pkv05, x5g7vp || bulze8),
        xewqgb = exbqwg['length'];vw8qeg(this, i9$fo), this['currentElement'] = i9$fo, this['locator'] && vfi9$o(this['locator'], i9$fo);for (var h_2tn = 0x0; xewqgb > h_2tn; h_2tn++) {
      var pkv05 = exbqwg['getURI'](h_2tn),
          gvqx = exbqwg['getValue'](h_2tn),
          x5g7vp = exbqwg['getQName'](h_2tn),
          o43$si = bwgex['createAttributeNS'](pkv05, x5g7vp);this['locator'] && vfi9$o(exbqwg['getLocator'](h_2tn), o43$si), o43$si['value'] = o43$si['nodeValue'] = gvqx, i9$fo['setAttributeNode'](o43$si);
    }
  }, 'endElement': function () {
    {
      var xg7v = this['currentElement'];xg7v['tagName'];
    }this['currentElement'] = xg7v['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qbew8, gbe) {
    var p5v7gx = this['doc']['createProcessingInstruction'](qbew8, gbe);this['locator'] && vfi9$o(this['locator'], p5v7gx), vw8qeg(this, p5v7gx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (b6lu) {
    if (b6lu = vbge8wq['apply'](this, arguments)) {
      if (this['cdata']) var gqxwbe = this['doc']['createCDATASection'](b6lu);else var gqxwbe = this['doc']['createTextNode'](b6lu);this['currentElement'] ? this['currentElement']['appendChild'](gqxwbe) : /^\s*$/['test'](b6lu) && this['doc']['appendChild'](gqxwbe), this['locator'] && vfi9$o(this['locator'], gqxwbe);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hul6) {
    (this['locator'] = hul6) && (hul6['lineNumber'] = 0x0);
  }, 'comment': function (p07k) {
    p07k = vbge8wq['apply'](this, arguments);var $3son4 = this['doc']['createComment'](p07k);this['locator'] && vfi9$o(this['locator'], $3son4), vw8qeg(this, $3son4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_h21y6, t4n_2, _hyt21) {
    var weu8q = this['doc']['implementation'];if (weu8q && weu8q['createDocumentType']) {
      var n$4s3 = weu8q['createDocumentType'](_h21y6, t4n_2, _hyt21);this['locator'] && vfi9$o(this['locator'], n$4s3), vw8qeg(this, n$4s3);
    }
  }, 'warning': function (zl61hy) {
    console['warn']('[xmldom warning]\t' + zl61hy, vvp5xgw(this['locator']));
  }, 'error': function (i$fos9) {
    console['error']('[xmldom error]\t' + i$fos9, vvp5xgw(this['locator']));
  }, 'fatalError': function (jma0cd) {
    throw console['error']('[xmldom fatalError]\t' + jma0cd, vvp5xgw(this['locator'])), jma0cd;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (xepwqg) {
  vso$3i['prototype'][xepwqg] = function () {
    return null;
  };
});var vt12_n3 = require('./vv12vv')['XMLReader'],
    vot42n = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vx5gv7;