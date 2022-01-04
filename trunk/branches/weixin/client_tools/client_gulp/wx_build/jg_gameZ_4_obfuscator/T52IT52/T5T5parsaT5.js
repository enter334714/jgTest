var B = wx.$B;
function Bh69kb(tvl$y) {
  this['options'] = tvl$y || { 'locator': {} };
}function Buh6ns(vz04yl, f382a, m51jor) {
  function ugiepn(bz4lk9) {
    var vyl$0 = vz04yl[bz4lk9];!vyl$0 && ps7n && (vyl$0 = 0x2 == vz04yl['length'] ? function (a2w) {
      vz04yl(bz4lk9, a2w);
    } : vz04yl), sn7ug[bz4lk9] = vyl$0 && function (afr8) {
      vyl$0('[xmldom ' + bz4lk9 + ']\t' + afr8 + Bxt$q_d(m51jor));
    } || function () {};
  }if (!vz04yl) {
    if (f382a instanceof Bbyv4l) return f382a;vz04yl = f382a;
  }var sn7ug = {},
      ps7n = vz04yl instanceof Function;return m51jor = m51jor || {}, ugiepn('warning'), ugiepn('error'), ugiepn('fatalError'), sn7ug;
}function Bbyv4l() {
  this['cdata'] = !0x1;
}function Bsg(l04yzv, b6k49) {
  b6k49['lineNumber'] = l04yzv['lineNumber'], b6k49['columnNumber'] = l04yzv['columnNumber'];
}function Bxt$q_d(yl4$0v) {
  return yl4$0v ? '\x0a@' + (yl4$0v['systemId'] || '') + '#[line:' + yl4$0v['lineNumber'] + ',col:' + yl4$0v['columnNumber'] + ']' : void 0x0;
}function Brj5o1(dx_q$t, v4lz0y, ngeup) {
  return 'string' == typeof dx_q$t ? dx_q$t['substr'](v4lz0y, ngeup) : dx_q$t['length'] >= v4lz0y + ngeup || v4lz0y ? new java['lang']['String'](dx_q$t, v4lz0y, ngeup) + '' : dx_q$t;
}function Bi3a8w(kz6b9, wi2ea) {
  kz6b9['currentElement'] ? kz6b9['currentElement']['appendChild'](wi2ea) : kz6b9['doc']['appendChild'](wi2ea);
}Bh69kb['prototype']['parseFromString'] = function (r8aw, i2ug) {
  var v$l40y = this['options'],
      hgun = new Bgipu2e(),
      m5jo1 = v$l40y['domBuilder'] || new Bbyv4l(),
      a2wi = v$l40y['errorHandler'],
      ei3wa = v$l40y['locator'],
      j1om = v$l40y['xmlns'] || {},
      x0$tyv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ei3wa && m5jo1['setDocumentLocator'](ei3wa), hgun['errorHandler'] = Buh6ns(a2wi, m5jo1, ei3wa), hgun['domBuilder'] = v$l40y['domBuilder'] || m5jo1, /\/x?html?$/['test'](i2ug) && (x0$tyv['nbsp'] = '\u00a0', x0$tyv['copy'] = '©', j1om[''] = 'http://www.w3.org/1999/xhtml'), j1om['xml'] = j1om['xml'] || 'http://www.w3.org/XML/1998/namespace', r8aw ? hgun['parse'](r8aw, j1om, x0$tyv) : hgun['errorHandler']['error']('invalid doc source'), m5jo1['doc'];
}, Bbyv4l['prototype'] = { 'startDocument': function () {
    this['doc'] = new Byl$vt0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (n69h7s, arf8w, ty0lv$, $t0xy) {
    var s69h7k = this['doc'],
        gupnes = s69h7k['createElementNS'](n69h7s, ty0lv$ || arf8w),
        yl0v4$ = $t0xy['length'];Bi3a8w(this, gupnes), this['currentElement'] = gupnes, this['locator'] && Bsg(this['locator'], gupnes);for (var uhs7n = 0x0; yl0v4$ > uhs7n; uhs7n++) {
      var n69h7s = $t0xy['getURI'](uhs7n),
          piw2a = $t0xy['getValue'](uhs7n),
          ty0lv$ = $t0xy['getQName'](uhs7n),
          _d$t0 = s69h7k['createAttributeNS'](n69h7s, ty0lv$);this['locator'] && Bsg($t0xy['getLocator'](uhs7n), _d$t0), _d$t0['value'] = _d$t0['nodeValue'] = piw2a, gupnes['setAttributeNode'](_d$t0);
    }
  }, 'endElement': function () {
    {
      var g7unsh = this['currentElement'];g7unsh['tagName'];
    }this['currentElement'] = g7unsh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kb4z96, aep) {
    var nhgus7 = this['doc']['createProcessingInstruction'](kb4z96, aep);this['locator'] && Bsg(this['locator'], nhgus7), Bi3a8w(this, nhgus7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (npsg7) {
    if (npsg7 = Brj5o1['apply'](this, arguments)) {
      if (this['cdata']) var bh69 = this['doc']['createCDATASection'](npsg7);else var bh69 = this['doc']['createTextNode'](npsg7);this['currentElement'] ? this['currentElement']['appendChild'](bh69) : /^\s*$/['test'](npsg7) && this['doc']['appendChild'](bh69), this['locator'] && Bsg(this['locator'], bh69);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zh96kb) {
    (this['locator'] = zh96kb) && (zh96kb['lineNumber'] = 0x0);
  }, 'comment': function ($0dt) {
    $0dt = Brj5o1['apply'](this, arguments);var z6k9bh = this['doc']['createComment']($0dt);this['locator'] && Bsg(this['locator'], z6k9bh), Bi3a8w(this, z6k9bh);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ojm5r, ip2wae, y0_t$) {
    var iae23w = this['doc']['implementation'];if (iae23w && iae23w['createDocumentType']) {
      var sug7h = iae23w['createDocumentType'](ojm5r, ip2wae, y0_t$);this['locator'] && Bsg(this['locator'], sug7h), Bi3a8w(this, sug7h);
    }
  }, 'warning': function (bvyz) {
    console['warn']('[xmldom warning]\t' + bvyz, Bxt$q_d(this['locator']));
  }, 'error': function (wiae2) {
    console['error']('[xmldom error]\t' + wiae2, Bxt$q_d(this['locator']));
  }, 'fatalError': function (y0vl) {
    throw console['error']('[xmldom fatalError]\t' + y0vl, Bxt$q_d(this['locator'])), y0vl;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fr8w) {
  Bbyv4l['prototype'][fr8w] = function () {
    return null;
  };
});var Bgipu2e = require('./T5T5cT5T5')['XMLReader'],
    Byl$vt0 = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Bh69kb;