var A = wx.$N;
function n_kspiv(xs1g7) {
  this['options'] = xs1g7 || { 'locator': {} };
}function n_ryqb49(q4ry9, w$qab, jml0en) {
  function lez3o0(nh8_) {
    var vgc1 = q4ry9[nh8_];!vgc1 && e4z3y && (vgc1 = 0x2 == q4ry9['length'] ? function (q$9b4) {
      q4ry9(nh8_, q$9b4);
    } : q4ry9), nju0m_[nh8_] = vgc1 && function (tdf57g) {
      vgc1('[xmldom ' + nh8_ + ']\t' + tdf57g + n_roy9z4(jml0en));
    } || function () {};
  }if (!q4ry9) {
    if (w$qab instanceof n_svg1xc) return w$qab;q4ry9 = w$qab;
  }var nju0m_ = {},
      e4z3y = q4ry9 instanceof Function;return jml0en = jml0en || {}, lez3o0('warning'), lez3o0('error'), lez3o0('fatalError'), nju0m_;
}function n_svg1xc() {
  this['cdata'] = !0x1;
}function n_qyz49r(qwrb$9, e34oyz) {
  e34oyz['lineNumber'] = qwrb$9['lineNumber'], e34oyz['columnNumber'] = qwrb$9['columnNumber'];
}function n_roy9z4(q$w9br) {
  return q$w9br ? '\x0a@' + (q$w9br['systemId'] || '') + '#[line:' + q$w9br['lineNumber'] + ',col:' + q$w9br['columnNumber'] + ']' : void 0x0;
}function n_s2vpik(h8ft, n8umh, melj0) {
  return 'string' == typeof h8ft ? h8ft['substr'](n8umh, melj0) : h8ft['length'] >= n8umh + melj0 || n8umh ? new java['lang']['String'](h8ft, n8umh, melj0) + '' : h8ft;
}function n_j8_un(muhn, vkp) {
  muhn['currentElement'] ? muhn['currentElement']['appendChild'](vkp) : muhn['doc']['appendChild'](vkp);
}n_kspiv['prototype']['parseFromString'] = function (svpi, oyze43) {
  var kx2isv = this['options'],
      nlem0j = new n_h5df7(),
      t_f8h = kx2isv['domBuilder'] || new n_svg1xc(),
      scg7x = kx2isv['errorHandler'],
      d8hf5 = kx2isv['locator'],
      rz34 = kx2isv['xmlns'] || {},
      unj0lm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return d8hf5 && t_f8h['setDocumentLocator'](d8hf5), nlem0j['errorHandler'] = n_ryqb49(scg7x, t_f8h, d8hf5), nlem0j['domBuilder'] = kx2isv['domBuilder'] || t_f8h, /\/x?html?$/['test'](oyze43) && (unj0lm['nbsp'] = '\u00a0', unj0lm['copy'] = '©', rz34[''] = 'http://www.w3.org/1999/xhtml'), rz34['xml'] = rz34['xml'] || 'http://www.w3.org/XML/1998/namespace', svpi ? nlem0j['parse'](svpi, rz34, unj0lm) : nlem0j['errorHandler']['error']('invalid doc source'), t_f8h['doc'];
}, n_svg1xc['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_vs1cgx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_8tfhd, r9zq4, sx1g, ht8fd) {
    var yzq94 = this['doc'],
        ivsxk = yzq94['createElementNS'](_8tfhd, sx1g || r9zq4),
        iv2sx = ht8fd['length'];n_j8_un(this, ivsxk), this['currentElement'] = ivsxk, this['locator'] && n_qyz49r(this['locator'], ivsxk);for (var j0unml = 0x0; iv2sx > j0unml; j0unml++) {
      var _8tfhd = ht8fd['getURI'](j0unml),
          s1kxv = ht8fd['getValue'](j0unml),
          sx1g = ht8fd['getQName'](j0unml),
          n0l = yzq94['createAttributeNS'](_8tfhd, sx1g);this['locator'] && n_qyz49r(ht8fd['getLocator'](j0unml), n0l), n0l['value'] = n0l['nodeValue'] = s1kxv, ivsxk['setAttributeNode'](n0l);
    }
  }, 'endElement': function () {
    {
      var mu_j = this['currentElement'];mu_j['tagName'];
    }this['currentElement'] = mu_j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hu_, thdf_) {
    var ckxv1 = this['doc']['createProcessingInstruction'](hu_, thdf_);this['locator'] && n_qyz49r(this['locator'], ckxv1), n_j8_un(this, ckxv1);
  }, 'ignorableWhitespace': function () {}, 'characters': function (oy4ez3) {
    if (oy4ez3 = n_s2vpik['apply'](this, arguments)) {
      if (this['cdata']) var yezl3o = this['doc']['createCDATASection'](oy4ez3);else var yezl3o = this['doc']['createTextNode'](oy4ez3);this['currentElement'] ? this['currentElement']['appendChild'](yezl3o) : /^\s*$/['test'](oy4ez3) && this['doc']['appendChild'](yezl3o), this['locator'] && n_qyz49r(this['locator'], yezl3o);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (i2vksp) {
    (this['locator'] = i2vksp) && (i2vksp['lineNumber'] = 0x0);
  }, 'comment': function ($9brq) {
    $9brq = n_s2vpik['apply'](this, arguments);var zy3eo = this['doc']['createComment']($9brq);this['locator'] && n_qyz49r(this['locator'], zy3eo), n_j8_un(this, zy3eo);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (l0njmu, dh_8, n_m8hu) {
    var hf_td8 = this['doc']['implementation'];if (hf_td8 && hf_td8['createDocumentType']) {
      var h8ufd_ = hf_td8['createDocumentType'](l0njmu, dh_8, n_m8hu);this['locator'] && n_qyz49r(this['locator'], h8ufd_), n_j8_un(this, h8ufd_);
    }
  }, 'warning': function (fhu_d8) {
    console['warn']('[xmldom warning]\t' + fhu_d8, n_roy9z4(this['locator']));
  }, 'error': function (ba) {
    console['error']('[xmldom error]\t' + ba, n_roy9z4(this['locator']));
  }, 'fatalError': function (uhd8) {
    throw console['error']('[xmldom fatalError]\t' + uhd8, n_roy9z4(this['locator'])), uhd8;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ivs2xk) {
  n_svg1xc['prototype'][ivs2xk] = function () {
    return null;
  };
});var n_h5df7 = require('./nnnSAX')['XMLReader'],
    n_vs1cgx = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_kspiv;