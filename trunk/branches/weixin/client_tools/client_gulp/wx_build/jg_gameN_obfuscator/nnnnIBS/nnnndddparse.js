var A = wx.$N;
function n_u_k1(nxmdzl) {
  this['options'] = nxmdzl || { 'locator': {} };
}function n_ryfig(dszxcn, $k4h_, ea86o2) {
  function vgfr(yjf9i) {
    var _$h4ku = dszxcn[yjf9i];!_$h4ku && xzmnld && (_$h4ku = 0x2 == dszxcn['length'] ? function (hdmxzl) {
      dszxcn(yjf9i, hdmxzl);
    } : dszxcn), xsnzd[yjf9i] = _$h4ku && function (yi9pq) {
      _$h4ku('[xmldom ' + yjf9i + ']\t' + yi9pq + n_fry3v(ea86o2));
    } || function () {};
  }if (!dszxcn) {
    if ($k4h_ instanceof n_nz7c5) return $k4h_;dszxcn = $k4h_;
  }var xsnzd = {},
      xzmnld = dszxcn instanceof Function;return ea86o2 = ea86o2 || {}, vgfr('warning'), vgfr('error'), vgfr('fatalError'), xsnzd;
}function n_nz7c5() {
  this['cdata'] = !0x1;
}function n__km$h4(ijpq, dzmnlx) {
  dzmnlx['lineNumber'] = ijpq['lineNumber'], dzmnlx['columnNumber'] = ijpq['columnNumber'];
}function n_fry3v(gvf38) {
  return gvf38 ? '\x0a@' + (gvf38['systemId'] || '') + '#[line:' + gvf38['lineNumber'] + ',col:' + gvf38['columnNumber'] + ']' : void 0x0;
}function n_xcsnd(ve38rg, lmh$_k, snldzx) {
  return 'string' == typeof ve38rg ? ve38rg['substr'](lmh$_k, snldzx) : ve38rg['length'] >= lmh$_k + snldzx || lmh$_k ? new java['lang']['String'](ve38rg, lmh$_k, snldzx) + '' : ve38rg;
}function n_mnlxz(yp9qi, iyq9jp) {
  yp9qi['currentElement'] ? yp9qi['currentElement']['appendChild'](iyq9jp) : yp9qi['doc']['appendChild'](iyq9jp);
}n_u_k1['prototype']['parseFromString'] = function (voe38, n0c75) {
  var zmdx = this['options'],
      snldxz = new n_xldk(),
      ra83oe = zmdx['domBuilder'] || new n_nz7c5(),
      xnmdzl = zmdx['errorHandler'],
      k$4_1 = zmdx['locator'],
      kxhl_ = zmdx['xmlns'] || {},
      _h4$mk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return k$4_1 && ra83oe['setDocumentLocator'](k$4_1), snldxz['errorHandler'] = n_ryfig(xnmdzl, ra83oe, k$4_1), snldxz['domBuilder'] = zmdx['domBuilder'] || ra83oe, /\/x?html?$/['test'](n0c75) && (_h4$mk['nbsp'] = '\u00a0', _h4$mk['copy'] = '©', kxhl_[''] = 'http://www.w3.org/1999/xhtml'), kxhl_['xml'] = kxhl_['xml'] || 'http://www.w3.org/XML/1998/namespace', voe38 ? snldxz['parse'](voe38, kxhl_, _h4$mk) : snldxz['errorHandler']['error']('invalid doc source'), ra83oe['doc'];
}, n_nz7c5['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_wa26e()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xdmln, g3fv8r, dnzsxc, m_kxl) {
    var dcn7z = this['doc'],
        xzcnds = dcn7z['createElementNS'](xdmln, dnzsxc || g3fv8r),
        q9ipjy = m_kxl['length'];n_mnlxz(this, xzcnds), this['currentElement'] = xzcnds, this['locator'] && n__km$h4(this['locator'], xzcnds);for (var oab = 0x0; q9ipjy > oab; oab++) {
      var xdmln = m_kxl['getURI'](oab),
          ijyfgv = m_kxl['getValue'](oab),
          dnzsxc = m_kxl['getQName'](oab),
          _khm4 = dcn7z['createAttributeNS'](xdmln, dnzsxc);this['locator'] && n__km$h4(m_kxl['getLocator'](oab), _khm4), _khm4['value'] = _khm4['nodeValue'] = ijyfgv, xzcnds['setAttributeNode'](_khm4);
    }
  }, 'endElement': function () {
    {
      var mlkdxh = this['currentElement'];mlkdxh['tagName'];
    }this['currentElement'] = mlkdxh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (l_xhkm, gjyfvi) {
    var we62oa = this['doc']['createProcessingInstruction'](l_xhkm, gjyfvi);this['locator'] && n__km$h4(this['locator'], we62oa), n_mnlxz(this, we62oa);
  }, 'ignorableWhitespace': function () {}, 'characters': function (fijygq) {
    if (fijygq = n_xcsnd['apply'](this, arguments)) {
      if (this['cdata']) var eow2a6 = this['doc']['createCDATASection'](fijygq);else var eow2a6 = this['doc']['createTextNode'](fijygq);this['currentElement'] ? this['currentElement']['appendChild'](eow2a6) : /^\s*$/['test'](fijygq) && this['doc']['appendChild'](eow2a6), this['locator'] && n__km$h4(this['locator'], eow2a6);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dxzlh) {
    (this['locator'] = dxzlh) && (dxzlh['lineNumber'] = 0x0);
  }, 'comment': function (csnzd7) {
    csnzd7 = n_xcsnd['apply'](this, arguments);var t6wb2a = this['doc']['createComment'](csnzd7);this['locator'] && n__km$h4(this['locator'], t6wb2a), n_mnlxz(this, t6wb2a);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (i9q0pj, lkhm$_, xhmldk) {
    var nlzdmx = this['doc']['implementation'];if (nlzdmx && nlzdmx['createDocumentType']) {
      var ifqy9 = nlzdmx['createDocumentType'](i9q0pj, lkhm$_, xhmldk);this['locator'] && n__km$h4(this['locator'], ifqy9), n_mnlxz(this, ifqy9);
    }
  }, 'warning': function (ldkxmh) {
    console['warn']('[xmldom warning]\t' + ldkxmh, n_fry3v(this['locator']));
  }, 'error': function (m$4hk) {
    console['error']('[xmldom error]\t' + m$4hk, n_fry3v(this['locator']));
  }, 'fatalError': function (ps057) {
    throw console['error']('[xmldom fatalError]\t' + ps057, n_fry3v(this['locator'])), ps057;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j05p) {
  n_nz7c5['prototype'][j05p] = function () {
    return null;
  };
});var n_xldk = require('./nnnSAX')['XMLReader'],
    n_wa26e = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_u_k1;