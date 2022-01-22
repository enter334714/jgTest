var a = wx.$y;
function ydjwt4(dwt4u) {
  this['options'] = dwt4u || { 'locator': {} };
}function yyzr0v3(y3va0, ya635v, u51dtm) {
  function wh41dt(djw4th) {
    var u1dt5 = y3va0[djw4th];!u1dt5 && _8cl7 && (u1dt5 = 0x2 == y3va0['length'] ? function (iqg2n$) {
      y3va0(djw4th, iqg2n$);
    } : y3va0), oj4thw[djw4th] = u1dt5 && function (v6a0y3) {
      u1dt5('[xmldom ' + djw4th + ']\t' + v6a0y3 + yklc98(u51dtm));
    } || function () {};
  }if (!y3va0) {
    if (ya635v instanceof y$iqpgn) return ya635v;y3va0 = ya635v;
  }var oj4thw = {},
      _8cl7 = y3va0 instanceof Function;return u51dtm = u51dtm || {}, wh41dt('warning'), wh41dt('error'), wh41dt('fatalError'), oj4thw;
}function y$iqpgn() {
  this['cdata'] = !0x1;
}function yf4ohjw(in$2gq, c2ks9n) {
  c2ks9n['lineNumber'] = in$2gq['lineNumber'], c2ks9n['columnNumber'] = in$2gq['columnNumber'];
}function yklc98(s7lf_8) {
  return s7lf_8 ? '\x0a@' + (s7lf_8['systemId'] || '') + '#[line:' + s7lf_8['lineNumber'] + ',col:' + s7lf_8['columnNumber'] + ']' : void 0x0;
}function yzeyr(ay0v36, s8clk9, dua5m) {
  return 'string' == typeof ay0v36 ? ay0v36['substr'](s8clk9, dua5m) : ay0v36['length'] >= s8clk9 + dua5m || s8clk9 ? new java['lang']['String'](ay0v36, s8clk9, dua5m) + '' : ay0v36;
}function ysl8_f(w4du, h7_of) {
  w4du['currentElement'] ? w4du['currentElement']['appendChild'](h7_of) : w4du['doc']['appendChild'](h7_of);
}ydjwt4['prototype']['parseFromString'] = function (jwdh4, t1wumd) {
  var whd41t = this['options'],
      h1t = new yzrvy(),
      oj8f = whd41t['domBuilder'] || new y$iqpgn(),
      kl2s9 = whd41t['errorHandler'],
      a0y6 = whd41t['locator'],
      zry03 = whd41t['xmlns'] || {},
      _oh4jf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return a0y6 && oj8f['setDocumentLocator'](a0y6), h1t['errorHandler'] = yyzr0v3(kl2s9, oj8f, a0y6), h1t['domBuilder'] = whd41t['domBuilder'] || oj8f, /\/x?html?$/['test'](t1wumd) && (_oh4jf['nbsp'] = '\u00a0', _oh4jf['copy'] = '©', zry03[''] = 'http://www.w3.org/1999/xhtml'), zry03['xml'] = zry03['xml'] || 'http://www.w3.org/XML/1998/namespace', jwdh4 ? h1t['parse'](jwdh4, zry03, _oh4jf) : h1t['errorHandler']['error']('invalid doc source'), oj8f['doc'];
}, y$iqpgn['prototype'] = { 'startDocument': function () {
    this['doc'] = new ywjohf()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_f7ojh, q$p, f7oh, qgpni$) {
    var um651a = this['doc'],
        u35a6m = um651a['createElementNS'](_f7ojh, f7oh || q$p),
        q$ngi = qgpni$['length'];ysl8_f(this, u35a6m), this['currentElement'] = u35a6m, this['locator'] && yf4ohjw(this['locator'], u35a6m);for (var r3y0v6 = 0x0; q$ngi > r3y0v6; r3y0v6++) {
      var _f7ojh = qgpni$['getURI'](r3y0v6),
          v5am = qgpni$['getValue'](r3y0v6),
          f7oh = qgpni$['getQName'](r3y0v6),
          o7_f8 = um651a['createAttributeNS'](_f7ojh, f7oh);this['locator'] && yf4ohjw(qgpni$['getLocator'](r3y0v6), o7_f8), o7_f8['value'] = o7_f8['nodeValue'] = v5am, u35a6m['setAttributeNode'](o7_f8);
    }
  }, 'endElement': function () {
    {
      var _o7hjf = this['currentElement'];_o7hjf['tagName'];
    }this['currentElement'] = _o7hjf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fo_h7, cl798) {
    var _7jho = this['doc']['createProcessingInstruction'](fo_h7, cl798);this['locator'] && yf4ohjw(this['locator'], _7jho), ysl8_f(this, _7jho);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vzxr0y) {
    if (vzxr0y = yzeyr['apply'](this, arguments)) {
      if (this['cdata']) var vrzx0y = this['doc']['createCDATASection'](vzxr0y);else var vrzx0y = this['doc']['createTextNode'](vzxr0y);this['currentElement'] ? this['currentElement']['appendChild'](vrzx0y) : /^\s*$/['test'](vzxr0y) && this['doc']['appendChild'](vrzx0y), this['locator'] && yf4ohjw(this['locator'], vrzx0y);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pnq$g) {
    (this['locator'] = pnq$g) && (pnq$g['lineNumber'] = 0x0);
  }, 'comment': function (jh4t) {
    jh4t = yzeyr['apply'](this, arguments);var sn29k = this['doc']['createComment'](jh4t);this['locator'] && yf4ohjw(this['locator'], sn29k), ysl8_f(this, sn29k);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (th4wo, _jof, s8f_7l) {
    var l97s8c = this['doc']['implementation'];if (l97s8c && l97s8c['createDocumentType']) {
      var in2$gq = l97s8c['createDocumentType'](th4wo, _jof, s8f_7l);this['locator'] && yf4ohjw(this['locator'], in2$gq), ysl8_f(this, in2$gq);
    }
  }, 'warning': function (uam635) {
    console['warn']('[xmldom warning]\t' + uam635, yklc98(this['locator']));
  }, 'error': function (tmud) {
    console['error']('[xmldom error]\t' + tmud, yklc98(this['locator']));
  }, 'fatalError': function (z0yxe) {
    throw console['error']('[xmldom fatalError]\t' + z0yxe, yklc98(this['locator'])), z0yxe;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (o78) {
  y$iqpgn['prototype'][o78] = function () {
    return null;
  };
});var yzrvy = require('./yycyy')['XMLReader'],
    ywjohf = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = ydjwt4;