var P = wx.$y;
function Td8$nk(sqc) {
  this['options'] = sqc || { 'locator': {} };
}function Tnxqd(cql_ys, k2ptf, nqxg8d) {
  function zpet6w(gsqly) {
    var qdgxn8 = cql_ys[gsqly];!qdgxn8 && $ofk2 && (qdgxn8 = 0x2 == cql_ys['length'] ? function (n$oxd) {
      cql_ys(gsqly, n$oxd);
    } : cql_ys), wt2kfp[gsqly] = qdgxn8 && function (rb37cm) {
      qdgxn8('[xmldom ' + gsqly + ']\t' + rb37cm + Tlcsy(nqxg8d));
    } || function () {};
  }if (!cql_ys) {
    if (k2ptf instanceof Tpfwk$) return k2ptf;cql_ys = k2ptf;
  }var wt2kfp = {},
      $ofk2 = cql_ys instanceof Function;return nqxg8d = nqxg8d || {}, zpet6w('warning'), zpet6w('error'), zpet6w('fatalError'), wt2kfp;
}function Tpfwk$() {
  this['cdata'] = !0x1;
}function Tylcr_(ok2f, xgqnd8) {
  xgqnd8['lineNumber'] = ok2f['lineNumber'], xgqnd8['columnNumber'] = ok2f['columnNumber'];
}function Tlcsy(t2kfw) {
  return t2kfw ? '\x0a@' + (t2kfw['systemId'] || '') + '#[line:' + t2kfw['lineNumber'] + ',col:' + t2kfw['columnNumber'] + ']' : void 0x0;
}function Tzte6vp(b3u7i4, bcm7rl, kpwft) {
  return 'string' == typeof b3u7i4 ? b3u7i4['substr'](bcm7rl, kpwft) : b3u7i4['length'] >= bcm7rl + kpwft || bcm7rl ? new java['lang']['String'](b3u7i4, bcm7rl, kpwft) + '' : b3u7i4;
}function Tz06v1e(yxq8n, rmc7b) {
  yxq8n['currentElement'] ? yxq8n['currentElement']['appendChild'](rmc7b) : yxq8n['doc']['appendChild'](rmc7b);
}Td8$nk['prototype']['parseFromString'] = function (tzpw26, h0jv19) {
  var v6z10e = this['options'],
      wz26tp = new T_gqly(),
      bia4 = v6z10e['domBuilder'] || new Tpfwk$(),
      pt26w = v6z10e['errorHandler'],
      j51h90 = v6z10e['locator'],
      vje610 = v6z10e['xmlns'] || {},
      ok8$nd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j51h90 && bia4['setDocumentLocator'](j51h90), wz26tp['errorHandler'] = Tnxqd(pt26w, bia4, j51h90), wz26tp['domBuilder'] = v6z10e['domBuilder'] || bia4, /\/x?html?$/['test'](h0jv19) && (ok8$nd['nbsp'] = '\u00a0', ok8$nd['copy'] = '©', vje610[''] = 'http://www.w3.org/1999/xhtml'), vje610['xml'] = vje610['xml'] || 'http://www.w3.org/XML/1998/namespace', tzpw26 ? wz26tp['parse'](tzpw26, vje610, ok8$nd) : wz26tp['errorHandler']['error']('invalid doc source'), bia4['doc'];
}, Tpfwk$['prototype'] = { 'startDocument': function () {
    this['doc'] = new Tqygnx_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (o8dg, s_yxg, rlys, od8kn) {
    var zte6 = this['doc'],
        y_sxq = zte6['createElementNS'](o8dg, rlys || s_yxg),
        ztp6we = od8kn['length'];Tz06v1e(this, y_sxq), this['currentElement'] = y_sxq, this['locator'] && Tylcr_(this['locator'], y_sxq);for (var z61te = 0x0; ztp6we > z61te; z61te++) {
      var o8dg = od8kn['getURI'](z61te),
          t2w6pz = od8kn['getValue'](z61te),
          rlys = od8kn['getQName'](z61te),
          x8$do = zte6['createAttributeNS'](o8dg, rlys);this['locator'] && Tylcr_(od8kn['getLocator'](z61te), x8$do), x8$do['value'] = x8$do['nodeValue'] = t2w6pz, y_sxq['setAttributeNode'](x8$do);
    }
  }, 'endElement': function () {
    {
      var ftpk = this['currentElement'];ftpk['tagName'];
    }this['currentElement'] = ftpk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (t6wz2, i74mb3) {
    var g_xyqn = this['doc']['createProcessingInstruction'](t6wz2, i74mb3);this['locator'] && Tylcr_(this['locator'], g_xyqn), Tz06v1e(this, g_xyqn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (br37m) {
    if (br37m = Tzte6vp['apply'](this, arguments)) {
      if (this['cdata']) var x8dgq = this['doc']['createCDATASection'](br37m);else var x8dgq = this['doc']['createTextNode'](br37m);this['currentElement'] ? this['currentElement']['appendChild'](x8dgq) : /^\s*$/['test'](br37m) && this['doc']['appendChild'](x8dgq), this['locator'] && Tylcr_(this['locator'], x8dgq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ezt1) {
    (this['locator'] = ezt1) && (ezt1['lineNumber'] = 0x0);
  }, 'comment': function (tzp62) {
    tzp62 = Tzte6vp['apply'](this, arguments);var ptw2z6 = this['doc']['createComment'](tzp62);this['locator'] && Tylcr_(this['locator'], ptw2z6), Tz06v1e(this, ptw2z6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ml_scr, _yxgn, qysgl_) {
    var w2tp6z = this['doc']['implementation'];if (w2tp6z && w2tp6z['createDocumentType']) {
      var _syrl = w2tp6z['createDocumentType'](ml_scr, _yxgn, qysgl_);this['locator'] && Tylcr_(this['locator'], _syrl), Tz06v1e(this, _syrl);
    }
  }, 'warning': function (d$nx8o) {
    console['warn']('[xmldom warning]\t' + d$nx8o, Tlcsy(this['locator']));
  }, 'error': function (crbl7) {
    console['error']('[xmldom error]\t' + crbl7, Tlcsy(this['locator']));
  }, 'fatalError': function (qynxg_) {
    throw console['error']('[xmldom fatalError]\t' + qynxg_, Tlcsy(this['locator'])), qynxg_;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k$2fw) {
  Tpfwk$['prototype'][k$2fw] = function () {
    return null;
  };
});var T_gqly = require('./tT12tt')['XMLReader'],
    Tqygnx_ = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = Td8$nk;