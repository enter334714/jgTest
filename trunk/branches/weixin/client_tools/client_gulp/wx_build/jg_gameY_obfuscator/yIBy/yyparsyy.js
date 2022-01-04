var a = wx.$y;
function yhtdw(f_8o7l) {
  this['options'] = f_8o7l || { 'locator': {} };
}function yc9ksl(m5da, w4othj, vy653) {
  function um5d1t(k9ncs) {
    var mva5 = m5da[k9ncs];!mva5 && ofjh7_ && (mva5 = 0x2 == m5da['length'] ? function (mad15) {
      m5da(k9ncs, mad15);
    } : m5da), $k9ng[k9ncs] = mva5 && function (n$g) {
      mva5('[xmldom ' + k9ncs + ']\t' + n$g + yw4dht1(vy653));
    } || function () {};
  }if (!m5da) {
    if (w4othj instanceof yuda51m) return w4othj;m5da = w4othj;
  }var $k9ng = {},
      ofjh7_ = m5da instanceof Function;return vy653 = vy653 || {}, um5d1t('warning'), um5d1t('error'), um5d1t('fatalError'), $k9ng;
}function yuda51m() {
  this['cdata'] = !0x1;
}function yc2n$9(vzx0y, d1mt5u) {
  d1mt5u['lineNumber'] = vzx0y['lineNumber'], d1mt5u['columnNumber'] = vzx0y['columnNumber'];
}function yw4dht1(m561a) {
  return m561a ? '\x0a@' + (m561a['systemId'] || '') + '#[line:' + m561a['lineNumber'] + ',col:' + m561a['columnNumber'] + ']' : void 0x0;
}function yvz0r($k92ng, $igqn2, vx0zy) {
  return 'string' == typeof $k92ng ? $k92ng['substr']($igqn2, vx0zy) : $k92ng['length'] >= $igqn2 + vx0zy || $igqn2 ? new java['lang']['String']($k92ng, $igqn2, vx0zy) + '' : $k92ng;
}function yoh7_j(jhf4o_, kg$in2) {
  jhf4o_['currentElement'] ? jhf4o_['currentElement']['appendChild'](kg$in2) : jhf4o_['doc']['appendChild'](kg$in2);
}yhtdw['prototype']['parseFromString'] = function (t1muw, vr0yxz) {
  var f_jh4 = this['options'],
      o_7f8 = new yscl2(),
      gk9$n2 = f_jh4['domBuilder'] || new yuda51m(),
      i$nk = f_jh4['errorHandler'],
      cls2k = f_jh4['locator'],
      d4jtw = f_jh4['xmlns'] || {},
      f_s8l = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cls2k && gk9$n2['setDocumentLocator'](cls2k), o_7f8['errorHandler'] = yc9ksl(i$nk, gk9$n2, cls2k), o_7f8['domBuilder'] = f_jh4['domBuilder'] || gk9$n2, /\/x?html?$/['test'](vr0yxz) && (f_s8l['nbsp'] = '\u00a0', f_s8l['copy'] = '©', d4jtw[''] = 'http://www.w3.org/1999/xhtml'), d4jtw['xml'] = d4jtw['xml'] || 'http://www.w3.org/XML/1998/namespace', t1muw ? o_7f8['parse'](t1muw, d4jtw, f_s8l) : o_7f8['errorHandler']['error']('invalid doc source'), gk9$n2['doc'];
}, yuda51m['prototype'] = { 'startDocument': function () {
    this['doc'] = new ylcs9k8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (z30vry, csk2, wd4j, nck$29) {
    var ryvxz0 = this['doc'],
        twjdh = ryvxz0['createElementNS'](z30vry, wd4j || csk2),
        sl8c_ = nck$29['length'];yoh7_j(this, twjdh), this['currentElement'] = twjdh, this['locator'] && yc2n$9(this['locator'], twjdh);for (var wdh4t = 0x0; sl8c_ > wdh4t; wdh4t++) {
      var z30vry = nck$29['getURI'](wdh4t),
          hoj_f7 = nck$29['getValue'](wdh4t),
          wd4j = nck$29['getQName'](wdh4t),
          wojh4 = ryvxz0['createAttributeNS'](z30vry, wd4j);this['locator'] && yc2n$9(nck$29['getLocator'](wdh4t), wojh4), wojh4['value'] = wojh4['nodeValue'] = hoj_f7, twjdh['setAttributeNode'](wojh4);
    }
  }, 'endElement': function () {
    {
      var ckls89 = this['currentElement'];ckls89['tagName'];
    }this['currentElement'] = ckls89['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (muwt, ol_f) {
    var n9g2$k = this['doc']['createProcessingInstruction'](muwt, ol_f);this['locator'] && yc2n$9(this['locator'], n9g2$k), yoh7_j(this, n9g2$k);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gqp$in) {
    if (gqp$in = yvz0r['apply'](this, arguments)) {
      if (this['cdata']) var fo_7l8 = this['doc']['createCDATASection'](gqp$in);else var fo_7l8 = this['doc']['createTextNode'](gqp$in);this['currentElement'] ? this['currentElement']['appendChild'](fo_7l8) : /^\s*$/['test'](gqp$in) && this['doc']['appendChild'](fo_7l8), this['locator'] && yc2n$9(this['locator'], fo_7l8);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hjd4tw) {
    (this['locator'] = hjd4tw) && (hjd4tw['lineNumber'] = 0x0);
  }, 'comment': function (_87lcs) {
    _87lcs = yvz0r['apply'](this, arguments);var s9nc2k = this['doc']['createComment'](_87lcs);this['locator'] && yc2n$9(this['locator'], s9nc2k), yoh7_j(this, s9nc2k);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gni2q$, ma63u, jhtw4) {
    var tu1md5 = this['doc']['implementation'];if (tu1md5 && tu1md5['createDocumentType']) {
      var n9k2 = tu1md5['createDocumentType'](gni2q$, ma63u, jhtw4);this['locator'] && yc2n$9(this['locator'], n9k2), yoh7_j(this, n9k2);
    }
  }, 'warning': function (rzx) {
    console['warn']('[xmldom warning]\t' + rzx, yw4dht1(this['locator']));
  }, 'error': function (o4hfwj) {
    console['error']('[xmldom error]\t' + o4hfwj, yw4dht1(this['locator']));
  }, 'fatalError': function (fwj4o) {
    throw console['error']('[xmldom fatalError]\t' + fwj4o, yw4dht1(this['locator'])), fwj4o;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wudt1) {
  yuda51m['prototype'][wudt1] = function () {
    return null;
  };
});var yscl2 = require('./yycyy')['XMLReader'],
    ylcs9k8 = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yhtdw;