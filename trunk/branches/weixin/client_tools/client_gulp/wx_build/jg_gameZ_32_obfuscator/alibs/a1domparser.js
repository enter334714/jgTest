var c = wx.$a;
function gmcbla$(lmb9a$) {
  this['options'] = lmb9a$ || { 'locator': {} };
}function gshvxj(oy0$bc, $bmyc, yco40_) {
  function b$yoc0(r7q58t) {
    var cbyo$ = oy0$bc[r7q58t];!cbyo$ && o0$cyb && (cbyo$ = 0x2 == oy0$bc['length'] ? function (rqd8t) {
      oy0$bc(r7q58t, rqd8t);
    } : oy0$bc), sj12[r7q58t] = cbyo$ && function (vhjnsz) {
      cbyo$('[xmldom ' + r7q58t + ']\t' + vhjnsz + gt537r(yco40_));
    } || function () {};
  }if (!oy0$bc) {
    if ($bmyc instanceof gt3587r) return $bmyc;oy0$bc = $bmyc;
  }var sj12 = {},
      o0$cyb = oy0$bc instanceof Function;return yco40_ = yco40_ || {}, b$yoc0('warning'), b$yoc0('error'), b$yoc0('fatalError'), sj12;
}function gt3587r() {
  this['cdata'] = !0x1;
}function gvjnxf(q8tr5, vnjhsz) {
  vnjhsz['lineNumber'] = q8tr5['lineNumber'], vnjhsz['columnNumber'] = q8tr5['columnNumber'];
}function gt537r(_4uwe) {
  return _4uwe ? '\x0a@' + (_4uwe['systemId'] || '') + '#[line:' + _4uwe['lineNumber'] + ',col:' + _4uwe['columnNumber'] + ']' : void 0x0;
}function gtd8qr6(zjhsv, $byco, znk) {
  return 'string' == typeof zjhsv ? zjhsv['substr']($byco, znk) : zjhsv['length'] >= $byco + znk || $byco ? new java['lang']['String'](zjhsv, $byco, znk) + '' : zjhsv;
}function gr758q(i357pr, ml9$b) {
  i357pr['currentElement'] ? i357pr['currentElement']['appendChild'](ml9$b) : i357pr['doc']['appendChild'](ml9$b);
}gmcbla$['prototype']['parseFromString'] = function (fs1g2x, hznjkv) {
  var $mblc = this['options'],
      l$0b = new gy0l$cb(),
      ew2_ = $mblc['domBuilder'] || new gt3587r(),
      ymb$c = $mblc['errorHandler'],
      gw_4ue = $mblc['locator'],
      blc$0 = $mblc['xmlns'] || {},
      e_4uw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gw_4ue && ew2_['setDocumentLocator'](gw_4ue), l$0b['errorHandler'] = gshvxj(ymb$c, ew2_, gw_4ue), l$0b['domBuilder'] = $mblc['domBuilder'] || ew2_, /\/x?html?$/['test'](hznjkv) && (e_4uw['nbsp'] = '\u00a0', e_4uw['copy'] = '©', blc$0[''] = 'http://www.w3.org/1999/xhtml'), blc$0['xml'] = blc$0['xml'] || 'http://www.w3.org/XML/1998/namespace', fs1g2x ? l$0b['parse'](fs1g2x, blc$0, e_4uw) : l$0b['errorHandler']['error']('invalid doc source'), ew2_['doc'];
}, gt3587r['prototype'] = { 'startDocument': function () {
    this['doc'] = new g_o4we0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (j1x2sf, _0ow, b$oy0c, jhsxv) {
    var t5qr87 = this['doc'],
        kn6hvz = t5qr87['createElementNS'](j1x2sf, b$oy0c || _0ow),
        d8t6k = jhsxv['length'];gr758q(this, kn6hvz), this['currentElement'] = kn6hvz, this['locator'] && gvjnxf(this['locator'], kn6hvz);for (var yl$m = 0x0; d8t6k > yl$m; yl$m++) {
      var j1x2sf = jhsxv['getURI'](yl$m),
          vhk6zn = jhsxv['getValue'](yl$m),
          b$oy0c = jhsxv['getQName'](yl$m),
          q5rd8t = t5qr87['createAttributeNS'](j1x2sf, b$oy0c);this['locator'] && gvjnxf(jhsxv['getLocator'](yl$m), q5rd8t), q5rd8t['value'] = q5rd8t['nodeValue'] = vhk6zn, kn6hvz['setAttributeNode'](q5rd8t);
    }
  }, 'endElement': function () {
    {
      var d8zq6 = this['currentElement'];d8zq6['tagName'];
    }this['currentElement'] = d8zq6['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (khznj, sfx) {
    var ue2w_ = this['doc']['createProcessingInstruction'](khznj, sfx);this['locator'] && gvjnxf(this['locator'], ue2w_), gr758q(this, ue2w_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (d6khzv) {
    if (d6khzv = gtd8qr6['apply'](this, arguments)) {
      if (this['cdata']) var xgf12u = this['doc']['createCDATASection'](d6khzv);else var xgf12u = this['doc']['createTextNode'](d6khzv);this['currentElement'] ? this['currentElement']['appendChild'](xgf12u) : /^\s*$/['test'](d6khzv) && this['doc']['appendChild'](xgf12u), this['locator'] && gvjnxf(this['locator'], xgf12u);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (m$ycl) {
    (this['locator'] = m$ycl) && (m$ycl['lineNumber'] = 0x0);
  }, 'comment': function (hnsjvx) {
    hnsjvx = gtd8qr6['apply'](this, arguments);var nhv6 = this['doc']['createComment'](hnsjvx);this['locator'] && gvjnxf(this['locator'], nhv6), gr758q(this, nhv6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($yblm, fs2xg1, nzhv6k) {
    var $boy0c = this['doc']['implementation'];if ($boy0c && $boy0c['createDocumentType']) {
      var zk6qd = $boy0c['createDocumentType']($yblm, fs2xg1, nzhv6k);this['locator'] && gvjnxf(this['locator'], zk6qd), gr758q(this, zk6qd);
    }
  }, 'warning': function (tr87) {
    console['warn']('[xmldom warning]\t' + tr87, gt537r(this['locator']));
  }, 'error': function (sfnxjv) {
    console['error']('[xmldom error]\t' + sfnxjv, gt537r(this['locator']));
  }, 'fatalError': function (svjfxn) {
    throw console['error']('[xmldom fatalError]\t' + svjfxn, gt537r(this['locator'])), svjfxn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hvjns) {
  gt3587r['prototype'][hvjns] = function () {
    return null;
  };
});var gy0l$cb = require('./a1sax')['XMLReader'],
    g_o4we0 = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gmcbla$;