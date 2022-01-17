var Q = wx.$v;
function vkvpx7(_n43t2) {
  this['options'] = _n43t2 || { 'locator': {} };
}function vk5pv7x(xp5wvg, euwb, qvpxwg) {
  function xqbe(pvxq) {
    var cdjmk = xp5wvg[pvxq];!cdjmk && _6z1h && (cdjmk = 0x2 == xp5wvg['length'] ? function (pvx7g5) {
      xp5wvg(pvxq, pvx7g5);
    } : xp5wvg), s9o$f[pvxq] = cdjmk && function (f$4io) {
      cdjmk('[xmldom ' + pvxq + ']\t' + f$4io + vh1zyl(qvpxwg));
    } || function () {};
  }if (!xp5wvg) {
    if (euwb instanceof vtn2o) return euwb;xp5wvg = euwb;
  }var s9o$f = {},
      _6z1h = xp5wvg instanceof Function;return qvpxwg = qvpxwg || {}, xqbe('warning'), xqbe('error'), xqbe('fatalError'), s9o$f;
}function vtn2o() {
  this['cdata'] = !0x1;
}function v_61hy(p5vgx, o34ns$) {
  o34ns$['lineNumber'] = p5vgx['lineNumber'], o34ns$['columnNumber'] = p5vgx['columnNumber'];
}function vh1zyl(x5pvg) {
  return x5pvg ? '\x0a@' + (x5pvg['systemId'] || '') + '#[line:' + x5pvg['lineNumber'] + ',col:' + x5pvg['columnNumber'] + ']' : void 0x0;
}function vo3$4nt(o$if4, fs$9oi, hy1l6) {
  return 'string' == typeof o$if4 ? o$if4['substr'](fs$9oi, hy1l6) : o$if4['length'] >= fs$9oi + hy1l6 || fs$9oi ? new java['lang']['String'](o$if4, fs$9oi, hy1l6) + '' : o$if4;
}function vj0camd(pvgw, y_h12) {
  pvgw['currentElement'] ? pvgw['currentElement']['appendChild'](y_h12) : pvgw['doc']['appendChild'](y_h12);
}vkvpx7['prototype']['parseFromString'] = function (yh6z_1, bgw8e) {
  var xpv5k = this['options'],
      hu6yl = new vn4t$o3(),
      v57xpg = xpv5k['domBuilder'] || new vtn2o(),
      cajm0d = xpv5k['errorHandler'],
      _t312 = xpv5k['locator'],
      $4t3o = xpv5k['xmlns'] || {},
      wqb8ue = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _t312 && v57xpg['setDocumentLocator'](_t312), hu6yl['errorHandler'] = vk5pv7x(cajm0d, v57xpg, _t312), hu6yl['domBuilder'] = xpv5k['domBuilder'] || v57xpg, /\/x?html?$/['test'](bgw8e) && (wqb8ue['nbsp'] = '\u00a0', wqb8ue['copy'] = '©', $4t3o[''] = 'http://www.w3.org/1999/xhtml'), $4t3o['xml'] = $4t3o['xml'] || 'http://www.w3.org/XML/1998/namespace', yh6z_1 ? hu6yl['parse'](yh6z_1, $4t3o, wqb8ue) : hu6yl['errorHandler']['error']('invalid doc source'), v57xpg['doc'];
}, vtn2o['prototype'] = { 'startDocument': function () {
    this['doc'] = new vy1t()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cm5k0, i3$4os, kxv7p, ge8b) {
    var pvg5w = this['doc'],
        hyul6 = pvg5w['createElementNS'](cm5k0, kxv7p || i3$4os),
        k75 = ge8b['length'];vj0camd(this, hyul6), this['currentElement'] = hyul6, this['locator'] && v_61hy(this['locator'], hyul6);for (var fis$9o = 0x0; k75 > fis$9o; fis$9o++) {
      var cm5k0 = ge8b['getURI'](fis$9o),
          qxgb = ge8b['getValue'](fis$9o),
          kxv7p = ge8b['getQName'](fis$9o),
          _y6h21 = pvg5w['createAttributeNS'](cm5k0, kxv7p);this['locator'] && v_61hy(ge8b['getLocator'](fis$9o), _y6h21), _y6h21['value'] = _y6h21['nodeValue'] = qxgb, hyul6['setAttributeNode'](_y6h21);
    }
  }, 'endElement': function () {
    {
      var n3$t = this['currentElement'];n3$t['tagName'];
    }this['currentElement'] = n3$t['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sfr, egpw) {
    var _hy162 = this['doc']['createProcessingInstruction'](sfr, egpw);this['locator'] && v_61hy(this['locator'], _hy162), vj0camd(this, _hy162);
  }, 'ignorableWhitespace': function () {}, 'characters': function (isr$f9) {
    if (isr$f9 = vo3$4nt['apply'](this, arguments)) {
      if (this['cdata']) var gxw5pv = this['doc']['createCDATASection'](isr$f9);else var gxw5pv = this['doc']['createTextNode'](isr$f9);this['currentElement'] ? this['currentElement']['appendChild'](gxw5pv) : /^\s*$/['test'](isr$f9) && this['doc']['appendChild'](gxw5pv), this['locator'] && v_61hy(this['locator'], gxw5pv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (so4$f) {
    (this['locator'] = so4$f) && (so4$f['lineNumber'] = 0x0);
  }, 'comment': function (be8zl) {
    be8zl = vo3$4nt['apply'](this, arguments);var ulz6y8 = this['doc']['createComment'](be8zl);this['locator'] && v_61hy(this['locator'], ulz6y8), vj0camd(this, ulz6y8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vx7pg, p5x7g, k5cm7) {
    var i$rfs = this['doc']['implementation'];if (i$rfs && i$rfs['createDocumentType']) {
      var z6h1l = i$rfs['createDocumentType'](vx7pg, p5x7g, k5cm7);this['locator'] && v_61hy(this['locator'], z6h1l), vj0camd(this, z6h1l);
    }
  }, 'warning': function (_tn) {
    console['warn']('[xmldom warning]\t' + _tn, vh1zyl(this['locator']));
  }, 'error': function (lb6z8) {
    console['error']('[xmldom error]\t' + lb6z8, vh1zyl(this['locator']));
  }, 'fatalError': function (n$o4t) {
    throw console['error']('[xmldom fatalError]\t' + n$o4t, vh1zyl(this['locator'])), n$o4t;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (so34n) {
  vtn2o['prototype'][so34n] = function () {
    return null;
  };
});var vn4t$o3 = require('./vv12vv')['XMLReader'],
    vy1t = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vkvpx7;