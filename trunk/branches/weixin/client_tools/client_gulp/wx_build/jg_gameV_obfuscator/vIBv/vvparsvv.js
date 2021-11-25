var Q = wx.$v;
function vzlu8eb(zlue8b) {
  this['options'] = zlue8b || { 'locator': {} };
}function vzly(sr$9, no23, s3$no4) {
  function f9r$si(v07k5c) {
    var e8ubql = sr$9[v07k5c];!e8ubql && egxw && (e8ubql = 0x2 == sr$9['length'] ? function (mck70d) {
      sr$9(v07k5c, mck70d);
    } : sr$9), lu[v07k5c] = e8ubql && function (_t312) {
      e8ubql('[xmldom ' + v07k5c + ']\t' + _t312 + vzul8(s3$no4));
    } || function () {};
  }if (!sr$9) {
    if (no23 instanceof vueqb8) return no23;sr$9 = no23;
  }var lu = {},
      egxw = sr$9 instanceof Function;return s3$no4 = s3$no4 || {}, f9r$si('warning'), f9r$si('error'), f9r$si('fatalError'), lu;
}function vueqb8() {
  this['cdata'] = !0x1;
}function vbg8weq(bewgqx, t32_4) {
  t32_4['lineNumber'] = bewgqx['lineNumber'], t32_4['columnNumber'] = bewgqx['columnNumber'];
}function vzul8(cj0ma) {
  return cj0ma ? '\x0a@' + (cj0ma['systemId'] || '') + '#[line:' + cj0ma['lineNumber'] + ',col:' + cj0ma['columnNumber'] + ']' : void 0x0;
}function vso$34i(xp7g5v, t24n3o, xp5wgv) {
  return 'string' == typeof xp7g5v ? xp7g5v['substr'](t24n3o, xp5wgv) : xp7g5v['length'] >= t24n3o + xp5wgv || t24n3o ? new java['lang']['String'](xp7g5v, t24n3o, xp5wgv) + '' : xp7g5v;
}function vq8bweu(of9i$s, ulzbe8) {
  of9i$s['currentElement'] ? of9i$s['currentElement']['appendChild'](ulzbe8) : of9i$s['doc']['appendChild'](ulzbe8);
}vzlu8eb['prototype']['parseFromString'] = function (dmc0aj, h61z_y) {
  var xeqp = this['options'],
      no3$s = new vzbu8l(),
      if$9s = xeqp['domBuilder'] || new vueqb8(),
      bezu8l = xeqp['errorHandler'],
      y_6zh = xeqp['locator'],
      i9rs$f = xeqp['xmlns'] || {},
      x5wgvp = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return y_6zh && if$9s['setDocumentLocator'](y_6zh), no3$s['errorHandler'] = vzly(bezu8l, if$9s, y_6zh), no3$s['domBuilder'] = xeqp['domBuilder'] || if$9s, /\/x?html?$/['test'](h61z_y) && (x5wgvp['nbsp'] = '\u00a0', x5wgvp['copy'] = '©', i9rs$f[''] = 'http://www.w3.org/1999/xhtml'), i9rs$f['xml'] = i9rs$f['xml'] || 'http://www.w3.org/XML/1998/namespace', dmc0aj ? no3$s['parse'](dmc0aj, i9rs$f, x5wgvp) : no3$s['errorHandler']['error']('invalid doc source'), if$9s['doc'];
}, vueqb8['prototype'] = { 'startDocument': function () {
    this['doc'] = new vdk7mc0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_1yz, _12n3, ck7v0, c057) {
    var hz6y1_ = this['doc'],
        pg57xv = hz6y1_['createElementNS'](_1yz, ck7v0 || _12n3),
        c0dmjk = c057['length'];vq8bweu(this, pg57xv), this['currentElement'] = pg57xv, this['locator'] && vbg8weq(this['locator'], pg57xv);for (var uhzy6 = 0x0; c0dmjk > uhzy6; uhzy6++) {
      var _1yz = c057['getURI'](uhzy6),
          qexwbg = c057['getValue'](uhzy6),
          ck7v0 = c057['getQName'](uhzy6),
          y1_t2 = hz6y1_['createAttributeNS'](_1yz, ck7v0);this['locator'] && vbg8weq(c057['getLocator'](uhzy6), y1_t2), y1_t2['value'] = y1_t2['nodeValue'] = qexwbg, pg57xv['setAttributeNode'](y1_t2);
    }
  }, 'endElement': function () {
    {
      var gqpe = this['currentElement'];gqpe['tagName'];
    }this['currentElement'] = gqpe['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (beuz, mdkc7) {
    var tnh_12 = this['doc']['createProcessingInstruction'](beuz, mdkc7);this['locator'] && vbg8weq(this['locator'], tnh_12), vq8bweu(this, tnh_12);
  }, 'ignorableWhitespace': function () {}, 'characters': function (u68zly) {
    if (u68zly = vso$34i['apply'](this, arguments)) {
      if (this['cdata']) var $osi9f = this['doc']['createCDATASection'](u68zly);else var $osi9f = this['doc']['createTextNode'](u68zly);this['currentElement'] ? this['currentElement']['appendChild']($osi9f) : /^\s*$/['test'](u68zly) && this['doc']['appendChild']($osi9f), this['locator'] && vbg8weq(this['locator'], $osi9f);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zy6ul8) {
    (this['locator'] = zy6ul8) && (zy6ul8['lineNumber'] = 0x0);
  }, 'comment': function ($fo4) {
    $fo4 = vso$34i['apply'](this, arguments);var n3$t4 = this['doc']['createComment']($fo4);this['locator'] && vbg8weq(this['locator'], n3$t4), vq8bweu(this, n3$t4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xpg5, on4$3, xqvwp) {
    var k57p0 = this['doc']['implementation'];if (k57p0 && k57p0['createDocumentType']) {
      var _1n = k57p0['createDocumentType'](xpg5, on4$3, xqvwp);this['locator'] && vbg8weq(this['locator'], _1n), vq8bweu(this, _1n);
    }
  }, 'warning': function (ot432) {
    console['warn']('[xmldom warning]\t' + ot432, vzul8(this['locator']));
  }, 'error': function ($43osi) {
    console['error']('[xmldom error]\t' + $43osi, vzul8(this['locator']));
  }, 'fatalError': function (o243n) {
    throw console['error']('[xmldom fatalError]\t' + o243n, vzul8(this['locator'])), o243n;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (l6zu8b) {
  vueqb8['prototype'][l6zu8b] = function () {
    return null;
  };
});var vzbu8l = require('./vv12vv')['XMLReader'],
    vdk7mc0 = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vzlu8eb;