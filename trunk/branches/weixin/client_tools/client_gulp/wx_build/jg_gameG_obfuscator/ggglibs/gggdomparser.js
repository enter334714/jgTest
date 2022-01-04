var m = wx.$g;
function ggls8(h1yk) {
  this['options'] = h1yk || { 'locator': {} };
}function g$z6j2(hw1kyx, t4o3_, b0ia) {
  function yeg7qv(z2odr) {
    var v7cegq = hw1kyx[z2odr];!v7cegq && p50_ && (v7cegq = 0x2 == hw1kyx['length'] ? function (uj26r) {
      hw1kyx(z2odr, uj26r);
    } : hw1kyx), ztd3o4[z2odr] = v7cegq && function (p05iab) {
      v7cegq('[xmldom ' + z2odr + ']\t' + p05iab + gahx1k(b0ia));
    } || function () {};
  }if (!hw1kyx) {
    if (t4o3_ instanceof gqvcs7g) return t4o3_;hw1kyx = t4o3_;
  }var ztd3o4 = {},
      p50_ = hw1kyx instanceof Function;return b0ia = b0ia || {}, yeg7qv('warning'), yeg7qv('error'), yeg7qv('fatalError'), ztd3o4;
}function gqvcs7g() {
  this['cdata'] = !0x1;
}function gd6zjr2(qywve7, b_i05p) {
  b_i05p['lineNumber'] = qywve7['lineNumber'], b_i05p['columnNumber'] = qywve7['columnNumber'];
}function gahx1k(x1iahk) {
  return x1iahk ? '\x0a@' + (x1iahk['systemId'] || '') + '#[line:' + x1iahk['lineNumber'] + ',col:' + x1iahk['columnNumber'] + ']' : void 0x0;
}function gevykw7(sgc89l, yhkx1w, whka1x) {
  return 'string' == typeof sgc89l ? sgc89l['substr'](yhkx1w, whka1x) : sgc89l['length'] >= yhkx1w + whka1x || yhkx1w ? new java['lang']['String'](sgc89l, yhkx1w, whka1x) + '' : sgc89l;
}function gh1xaw(ceq7vg, i5_bp0) {
  ceq7vg['currentElement'] ? ceq7vg['currentElement']['appendChild'](i5_bp0) : ceq7vg['doc']['appendChild'](i5_bp0);
}ggls8['prototype']['parseFromString'] = function (ke1wyh, f_o4t) {
  var _0tpfb = this['options'],
      y1kvew = new gd6rzo2(),
      ihab5x = _0tpfb['domBuilder'] || new gqvcs7g(),
      i1khax = _0tpfb['errorHandler'],
      _4fot = _0tpfb['locator'],
      mu$r = _0tpfb['xmlns'] || {},
      vyeq7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _4fot && ihab5x['setDocumentLocator'](_4fot), y1kvew['errorHandler'] = g$z6j2(i1khax, ihab5x, _4fot), y1kvew['domBuilder'] = _0tpfb['domBuilder'] || ihab5x, /\/x?html?$/['test'](f_o4t) && (vyeq7['nbsp'] = '\u00a0', vyeq7['copy'] = '©', mu$r[''] = 'http://www.w3.org/1999/xhtml'), mu$r['xml'] = mu$r['xml'] || 'http://www.w3.org/XML/1998/namespace', ke1wyh ? y1kvew['parse'](ke1wyh, mu$r, vyeq7) : y1kvew['errorHandler']['error']('invalid doc source'), ihab5x['doc'];
}, gqvcs7g['prototype'] = { 'startDocument': function () {
    this['doc'] = new geqywv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (we7kvy, kweyv, kiax1, sqlgc) {
    var y7qewv = this['doc'],
        d423o = y7qewv['createElementNS'](we7kvy, kiax1 || kweyv),
        a1hw = sqlgc['length'];gh1xaw(this, d423o), this['currentElement'] = d423o, this['locator'] && gd6zjr2(this['locator'], d423o);for (var zd26jr = 0x0; a1hw > zd26jr; zd26jr++) {
      var we7kvy = sqlgc['getURI'](zd26jr),
          s98lcg = sqlgc['getValue'](zd26jr),
          kiax1 = sqlgc['getQName'](zd26jr),
          hewk1y = y7qewv['createAttributeNS'](we7kvy, kiax1);this['locator'] && gd6zjr2(sqlgc['getLocator'](zd26jr), hewk1y), hewk1y['value'] = hewk1y['nodeValue'] = s98lcg, d423o['setAttributeNode'](hewk1y);
    }
  }, 'endElement': function () {
    {
      var xp5bia = this['currentElement'];xp5bia['tagName'];
    }this['currentElement'] = xp5bia['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rod2, fot_43) {
    var $62ru = this['doc']['createProcessingInstruction'](rod2, fot_43);this['locator'] && gd6zjr2(this['locator'], $62ru), gh1xaw(this, $62ru);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gcs9) {
    if (gcs9 = gevykw7['apply'](this, arguments)) {
      if (this['cdata']) var ewhk1 = this['doc']['createCDATASection'](gcs9);else var ewhk1 = this['doc']['createTextNode'](gcs9);this['currentElement'] ? this['currentElement']['appendChild'](ewhk1) : /^\s*$/['test'](gcs9) && this['doc']['appendChild'](ewhk1), this['locator'] && gd6zjr2(this['locator'], ewhk1);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (otz3) {
    (this['locator'] = otz3) && (otz3['lineNumber'] = 0x0);
  }, 'comment': function (y7vqeg) {
    y7vqeg = gevykw7['apply'](this, arguments);var t0_pf = this['doc']['createComment'](y7vqeg);this['locator'] && gd6zjr2(this['locator'], t0_pf), gh1xaw(this, t0_pf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (pib0_, zt34do, sg89) {
    var bai5hx = this['doc']['implementation'];if (bai5hx && bai5hx['createDocumentType']) {
      var vgqcs = bai5hx['createDocumentType'](pib0_, zt34do, sg89);this['locator'] && gd6zjr2(this['locator'], vgqcs), gh1xaw(this, vgqcs);
    }
  }, 'warning': function (gs8cl9) {
    console['warn']('[xmldom warning]\t' + gs8cl9, gahx1k(this['locator']));
  }, 'error': function (_4) {
    console['error']('[xmldom error]\t' + _4, gahx1k(this['locator']));
  }, 'fatalError': function (_4tpf) {
    throw console['error']('[xmldom fatalError]\t' + _4tpf, gahx1k(this['locator'])), _4tpf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_tf30) {
  gqvcs7g['prototype'][_tf30] = function () {
    return null;
  };
});var gd6rzo2 = require('./gggsax')['XMLReader'],
    geqywv = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = ggls8;