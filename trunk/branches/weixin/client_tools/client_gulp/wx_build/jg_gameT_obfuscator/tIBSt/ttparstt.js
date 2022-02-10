var M = wx.$T;
function tz70qo(wh61m) {
  this['options'] = wh61m || { 'locator': {} };
}function to0qz(sbkraj, ym_qx0, gjkra) {
  function $vict(p9vi$) {
    var q_x0ey = sbkraj[p9vi$];!q_x0ey && p9$vd && (q_x0ey = 0x2 == sbkraj['length'] ? function (vc29) {
      sbkraj(p9vi$, vc29);
    } : sbkraj), fdpzv$[p9vi$] = q_x0ey && function (kgba) {
      q_x0ey('[xmldom ' + p9vi$ + ']\t' + kgba + tz7qfo(gjkra));
    } || function () {};
  }if (!sbkraj) {
    if (ym_qx0 instanceof txmq_y0) return ym_qx0;sbkraj = ym_qx0;
  }var fdpzv$ = {},
      p9$vd = sbkraj instanceof Function;return gjkra = gjkra || {}, $vict('warning'), $vict('error'), $vict('fatalError'), fdpzv$;
}function txmq_y0() {
  this['cdata'] = !0x1;
}function tjrkbga(vip$, pvdfz) {
  pvdfz['lineNumber'] = vip$['lineNumber'], pvdfz['columnNumber'] = vip$['columnNumber'];
}function tz7qfo(njrga) {
  return njrga ? '\x0a@' + (njrga['systemId'] || '') + '#[line:' + njrga['lineNumber'] + ',col:' + njrga['columnNumber'] + ']' : void 0x0;
}function tbrgka(f7ope, jgb3, w5638) {
  return 'string' == typeof f7ope ? f7ope['substr'](jgb3, w5638) : f7ope['length'] >= jgb3 + w5638 || jgb3 ? new java['lang']['String'](f7ope, jgb3, w5638) + '' : f7ope;
}function tzdv$p(cit942, _0mhyx) {
  cit942['currentElement'] ? cit942['currentElement']['appendChild'](_0mhyx) : cit942['doc']['appendChild'](_0mhyx);
}tz70qo['prototype']['parseFromString'] = function (ksjuba, zqoef7) {
  var jrabg = this['options'],
      qfe7z = new tngabrj(),
      _m5wy = jrabg['domBuilder'] || new txmq_y0(),
      $p7zf = jrabg['errorHandler'],
      dzv$ = jrabg['locator'],
      hmy_x = jrabg['xmlns'] || {},
      jabsu = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return dzv$ && _m5wy['setDocumentLocator'](dzv$), qfe7z['errorHandler'] = to0qz($p7zf, _m5wy, dzv$), qfe7z['domBuilder'] = jrabg['domBuilder'] || _m5wy, /\/x?html?$/['test'](zqoef7) && (jabsu['nbsp'] = '\u00a0', jabsu['copy'] = '©', hmy_x[''] = 'http://www.w3.org/1999/xhtml'), hmy_x['xml'] = hmy_x['xml'] || 'http://www.w3.org/XML/1998/namespace', ksjuba ? qfe7z['parse'](ksjuba, hmy_x, jabsu) : qfe7z['errorHandler']['error']('invalid doc source'), _m5wy['doc'];
}, txmq_y0['prototype'] = { 'startDocument': function () {
    this['doc'] = new tgkjrba()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (c24, y_mqx, d9vc$i, yqx0eo) {
    var zpo7f = this['doc'],
        y5hm_w = zpo7f['createElementNS'](c24, d9vc$i || y_mqx),
        $vicd9 = yqx0eo['length'];tzdv$p(this, y5hm_w), this['currentElement'] = y5hm_w, this['locator'] && tjrkbga(this['locator'], y5hm_w);for (var yw_hmx = 0x0; $vicd9 > yw_hmx; yw_hmx++) {
      var c24 = yqx0eo['getURI'](yw_hmx),
          fpdv9 = yqx0eo['getValue'](yw_hmx),
          d9vc$i = yqx0eo['getQName'](yw_hmx),
          rjks = zpo7f['createAttributeNS'](c24, d9vc$i);this['locator'] && tjrkbga(yqx0eo['getLocator'](yw_hmx), rjks), rjks['value'] = rjks['nodeValue'] = fpdv9, y5hm_w['setAttributeNode'](rjks);
    }
  }, 'endElement': function () {
    {
      var d$i9v = this['currentElement'];d$i9v['tagName'];
    }this['currentElement'] = d$i9v['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sjaukb, vzdpf$) {
    var rbgkja = this['doc']['createProcessingInstruction'](sjaukb, vzdpf$);this['locator'] && tjrkbga(this['locator'], rbgkja), tzdv$p(this, rbgkja);
  }, 'ignorableWhitespace': function () {}, 'characters': function (yxq0oe) {
    if (yxq0oe = tbrgka['apply'](this, arguments)) {
      if (this['cdata']) var il2 = this['doc']['createCDATASection'](yxq0oe);else var il2 = this['doc']['createTextNode'](yxq0oe);this['currentElement'] ? this['currentElement']['appendChild'](il2) : /^\s*$/['test'](yxq0oe) && this['doc']['appendChild'](il2), this['locator'] && tjrkbga(this['locator'], il2);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zefo7) {
    (this['locator'] = zefo7) && (zefo7['lineNumber'] = 0x0);
  }, 'comment': function (f9dv) {
    f9dv = tbrgka['apply'](this, arguments);var kagrbj = this['doc']['createComment'](f9dv);this['locator'] && tjrkbga(this['locator'], kagrbj), tzdv$p(this, kagrbj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ym_w5h, c9i24t, $zvd) {
    var d7fp$z = this['doc']['implementation'];if (d7fp$z && d7fp$z['createDocumentType']) {
      var pzodf7 = d7fp$z['createDocumentType'](ym_w5h, c9i24t, $zvd);this['locator'] && tjrkbga(this['locator'], pzodf7), tzdv$p(this, pzodf7);
    }
  }, 'warning': function (ti94) {
    console['warn']('[xmldom warning]\t' + ti94, tz7qfo(this['locator']));
  }, 'error': function (rnj) {
    console['error']('[xmldom error]\t' + rnj, tz7qfo(this['locator']));
  }, 'fatalError': function (yeoqx0) {
    throw console['error']('[xmldom fatalError]\t' + yeoqx0, tz7qfo(this['locator'])), yeoqx0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f7$dzp) {
  txmq_y0['prototype'][f7$dzp] = function () {
    return null;
  };
});var tngabrj = require('./tT12tt')['XMLReader'],
    tgkjrba = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tz70qo;