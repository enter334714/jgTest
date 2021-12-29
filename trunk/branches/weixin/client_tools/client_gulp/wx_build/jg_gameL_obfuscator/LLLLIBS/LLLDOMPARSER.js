var W = wx.$l;
function L9mi30rc(hakqz) {
  this['options'] = hakqz || { 'locator': {} };
}function L9_$8ds4(d842$, kqazhj, cyxr03) {
  function gp16ue(kqh) {
    var n0_4x = d842$[kqh];!n0_4x && jlqzth && (n0_4x = 0x2 == d842$['length'] ? function (o95ftl) {
      d842$(kqh, o95ftl);
    } : d842$), zth[kqh] = n0_4x && function (r0m3c) {
      n0_4x('[xmldom ' + kqh + ']\t' + r0m3c + L9r03cm(cyxr03));
    } || function () {};
  }if (!d842$) {
    if (kqazhj instanceof L9zjhbka) return kqazhj;d842$ = kqazhj;
  }var zth = {},
      jlqzth = d842$ instanceof Function;return cyxr03 = cyxr03 || {}, gp16ue('warning'), gp16ue('error'), gp16ue('fatalError'), zth;
}function L9zjhbka() {
  this['cdata'] = !0x1;
}function L9ajkbd(q9ft5, n_yx48) {
  n_yx48['lineNumber'] = q9ft5['lineNumber'], n_yx48['columnNumber'] = q9ft5['columnNumber'];
}function L9r03cm($s8b2) {
  return $s8b2 ? '\x0a@' + ($s8b2['systemId'] || '') + '#[line:' + $s8b2['lineNumber'] + ',col:' + $s8b2['columnNumber'] + ']' : void 0x0;
}function L9x_8ns4(rwim3, khj2ab, wrc3) {
  return 'string' == typeof rwim3 ? rwim3['substr'](khj2ab, wrc3) : rwim3['length'] >= khj2ab + wrc3 || khj2ab ? new java['lang']['String'](rwim3, khj2ab, wrc3) + '' : rwim3;
}function L9y0n_4(qht5lz, tlqzh) {
  qht5lz['currentElement'] ? qht5lz['currentElement']['appendChild'](tlqzh) : qht5lz['doc']['appendChild'](tlqzh);
}L9mi30rc['prototype']['parseFromString'] = function (dkj, y3cm0) {
  var s$_4d = this['options'],
      rc30y = new L9fzt5l(),
      zht5lq = s$_4d['domBuilder'] || new L9zjhbka(),
      hzlj = s$_4d['errorHandler'],
      tzlq5 = s$_4d['locator'],
      n84y_x = s$_4d['xmlns'] || {},
      m3icw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return tzlq5 && zht5lq['setDocumentLocator'](tzlq5), rc30y['errorHandler'] = L9_$8ds4(hzlj, zht5lq, tzlq5), rc30y['domBuilder'] = s$_4d['domBuilder'] || zht5lq, /\/x?html?$/['test'](y3cm0) && (m3icw['nbsp'] = '\u00a0', m3icw['copy'] = '©', n84y_x[''] = 'http://www.w3.org/1999/xhtml'), n84y_x['xml'] = n84y_x['xml'] || 'http://www.w3.org/XML/1998/namespace', dkj ? rc30y['parse'](dkj, n84y_x, m3icw) : rc30y['errorHandler']['error']('invalid doc source'), zht5lq['doc'];
}, L9zjhbka['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9s24d$8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qt, geuv1, bjkda, tl5zf) {
    var jtlhz = this['doc'],
        lhzkq = jtlhz['createElementNS'](qt, bjkda || geuv1),
        d48_$ = tl5zf['length'];L9y0n_4(this, lhzkq), this['currentElement'] = lhzkq, this['locator'] && L9ajkbd(this['locator'], lhzkq);for (var a2sd = 0x0; d48_$ > a2sd; a2sd++) {
      var qt = tl5zf['getURI'](a2sd),
          s2$ba = tl5zf['getValue'](a2sd),
          bjkda = tl5zf['getQName'](a2sd),
          cmri03 = jtlhz['createAttributeNS'](qt, bjkda);this['locator'] && L9ajkbd(tl5zf['getLocator'](a2sd), cmri03), cmri03['value'] = cmri03['nodeValue'] = s2$ba, lhzkq['setAttributeNode'](cmri03);
    }
  }, 'endElement': function () {
    {
      var s824 = this['currentElement'];s824['tagName'];
    }this['currentElement'] = s824['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fzq5lt, r0yxn) {
    var jhkaz = this['doc']['createProcessingInstruction'](fzq5lt, r0yxn);this['locator'] && L9ajkbd(this['locator'], jhkaz), L9y0n_4(this, jhkaz);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qazhkj) {
    if (qazhkj = L9x_8ns4['apply'](this, arguments)) {
      if (this['cdata']) var eg7uv = this['doc']['createCDATASection'](qazhkj);else var eg7uv = this['doc']['createTextNode'](qazhkj);this['currentElement'] ? this['currentElement']['appendChild'](eg7uv) : /^\s*$/['test'](qazhkj) && this['doc']['appendChild'](eg7uv), this['locator'] && L9ajkbd(this['locator'], eg7uv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bkjah) {
    (this['locator'] = bkjah) && (bkjah['lineNumber'] = 0x0);
  }, 'comment': function (zahjk) {
    zahjk = L9x_8ns4['apply'](this, arguments);var qtf59 = this['doc']['createComment'](zahjk);this['locator'] && L9ajkbd(this['locator'], qtf59), L9y0n_4(this, qtf59);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (q5f, nx3y_0, o9lf) {
    var p6e = this['doc']['implementation'];if (p6e && p6e['createDocumentType']) {
      var h5tlzq = p6e['createDocumentType'](q5f, nx3y_0, o9lf);this['locator'] && L9ajkbd(this['locator'], h5tlzq), L9y0n_4(this, h5tlzq);
    }
  }, 'warning': function (ltzqf) {
    console['warn']('[xmldom warning]\t' + ltzqf, L9r03cm(this['locator']));
  }, 'error': function (hljtq) {
    console['error']('[xmldom error]\t' + hljtq, L9r03cm(this['locator']));
  }, 'fatalError': function (cm3wi) {
    throw console['error']('[xmldom fatalError]\t' + cm3wi, L9r03cm(this['locator'])), cm3wi;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (evog) {
  L9zjhbka['prototype'][evog] = function () {
    return null;
  };
});var L9fzt5l = require('./lllSAX')['XMLReader'],
    L9s24d$8 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9mi30rc;