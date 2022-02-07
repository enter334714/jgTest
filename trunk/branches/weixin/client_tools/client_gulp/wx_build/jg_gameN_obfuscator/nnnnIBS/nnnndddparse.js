var A = wx.$N;
function n_yoz4e(o9rz) {
  this['options'] = o9rz || { 'locator': {} };
}function n_qr9wb(mjn0u, b9ry4q, ckisvx) {
  function e3lyoz(w6q9) {
    var g7cs1 = mjn0u[w6q9];!g7cs1 && td8h5 && (g7cs1 = 0x2 == mjn0u['length'] ? function (qy49z) {
      mjn0u(w6q9, qy49z);
    } : mjn0u), qr49[w6q9] = g7cs1 ? function (xs7g) {
      g7cs1('[xmldom ' + w6q9 + ']\t' + xs7g + n__ujnm0(ckisvx));
    } : function () {};
  }if (!mjn0u) {
    if (b9ry4q instanceof n_x1scvk) return b9ry4q;mjn0u = b9ry4q;
  }var qr49 = {},
      td8h5 = mjn0u instanceof Function;return ckisvx = ckisvx || {}, e3lyoz('warning'), e3lyoz('error'), e3lyoz('fatalError'), qr49;
}function n_x1scvk() {
  this['cdata'] = !0x1;
}function n_ipks2(v1cxs, yl3ez) {
  yl3ez['lineNumber'] = v1cxs['lineNumber'], yl3ez['columnNumber'] = v1cxs['columnNumber'];
}function n__ujnm0(qyb49) {
  return qyb49 ? '\x0a@' + (qyb49['systemId'] || '') + '#[line:' + qyb49['lineNumber'] + ',col:' + qyb49['columnNumber'] + ']' : void 0x0;
}function n__nu0jm(w9bqr$, t51gc, f7gdt5) {
  return 'string' == typeof w9bqr$ ? w9bqr$['substr'](t51gc, f7gdt5) : w9bqr$['length'] >= t51gc + f7gdt5 || t51gc ? new java['lang']['String'](w9bqr$, t51gc, f7gdt5) + '' : w9bqr$;
}function n_zye(iksxcv, pkvis) {
  (iksxcv['currentElement'] || iksxcv['doc'])['appendChild'](pkvis);
}n_yoz4e['prototype']['parseFromString'] = function (g5ft7, yroz4) {
  var hu8 = this['options'],
      j0nlm = new n_fh7t(),
      mujnl = hu8['domBuilder'] || new n_x1scvk(),
      ze3y4 = hu8['errorHandler'],
      en0lj3 = hu8['locator'],
      n0e3l = hu8['xmlns'] || {},
      g7xc51 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return en0lj3 && mujnl['setDocumentLocator'](en0lj3), j0nlm['errorHandler'] = n_qr9wb(ze3y4, mujnl, en0lj3), j0nlm['domBuilder'] = hu8['domBuilder'] || mujnl, /\/x?html?$/['test'](yroz4) && (g7xc51['nbsp'] = '\u00a0', g7xc51['copy'] = '©', n0e3l[''] = 'http://www.w3.org/1999/xhtml'), n0e3l['xml'] = n0e3l['xml'] || 'http://www.w3.org/XML/1998/namespace', g5ft7 ? j0nlm['parse'](g5ft7, n0e3l, g7xc51) : j0nlm['errorHandler']['error']('invalid doc source'), mujnl['doc'];
}, n_x1scvk['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_gv1sx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s2vkx, d5g7, vkcxs1, dg5t17) {
    var wrb$q = this['doc'],
        _8mnj = wrb$q['createElementNS'](s2vkx, vkcxs1 || d5g7),
        bq$a6 = dg5t17['length'];n_zye(this, _8mnj), this['currentElement'] = _8mnj, this['locator'] && n_ipks2(this['locator'], _8mnj);for (var n8hm_u = 0x0; n8hm_u < bq$a6; n8hm_u++) {
      var s2vkx = dg5t17['getURI'](n8hm_u),
          du8f_h = dg5t17['getValue'](n8hm_u),
          vkcxs1 = dg5t17['getQName'](n8hm_u),
          nm_j8 = wrb$q['createAttributeNS'](s2vkx, vkcxs1);this['locator'] && n_ipks2(dg5t17['getLocator'](n8hm_u), nm_j8), nm_j8['value'] = nm_j8['nodeValue'] = du8f_h, _8mnj['setAttributeNode'](nm_j8);
    }
  }, 'endElement': function () {
    var ufmh_ = this['currentElement'];ufmh_['tagName'], this['currentElement'] = ufmh_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (n03jel, ikscx) {
    ikscx = this['doc']['createProcessingInstruction'](n03jel, ikscx), (this['locator'] && n_ipks2(this['locator'], ikscx), n_zye(this, ikscx));
  }, 'ignorableWhitespace': function () {}, 'characters': function (_8thdf) {
    var b9wq$6;(_8thdf = n__nu0jm['apply'](this, arguments)) && (b9wq$6 = this['cdata'] ? this['doc']['createCDATASection'](_8thdf) : this['doc']['createTextNode'](_8thdf), this['currentElement'] ? this['currentElement']['appendChild'](b9wq$6) : /^\s*$/['test'](_8thdf) && this['doc']['appendChild'](b9wq$6), this['locator'] && n_ipks2(this['locator'], b9wq$6));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ulnj0) {
    (this['locator'] = ulnj0) && (ulnj0['lineNumber'] = 0x0);
  }, 'comment': function (d5t17g) {
    d5t17g = n__nu0jm['apply'](this, arguments);var xcs71g = this['doc']['createComment'](d5t17g);this['locator'] && n_ipks2(this['locator'], xcs71g), n_zye(this, xcs71g);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h8dtf5, icvs, rqb4y9) {
    var rz4oy9 = this['doc']['implementation'];rz4oy9 && rz4oy9['createDocumentType'] && (rqb4y9 = rz4oy9['createDocumentType'](h8dtf5, icvs, rqb4y9), this['locator'] && n_ipks2(this['locator'], rqb4y9), n_zye(this, rqb4y9));
  }, 'warning': function (ljun0m) {
    console['warn']('[xmldom warning]\t' + ljun0m, n__ujnm0(this['locator']));
  }, 'error': function (r3zy) {
    console['error']('[xmldom error]\t' + r3zy, n__ujnm0(this['locator']));
  }, 'fatalError': function (ljn03) {
    throw console['error']('[xmldom fatalError]\t' + ljn03, n__ujnm0(this['locator'])), ljn03;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yz4oe3) {
  n_x1scvk['prototype'][yz4oe3] = function () {
    return null;
  };
});var n_fh7t = require('./nnnSAX')['XMLReader'],
    n_gv1sx = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_yoz4e;