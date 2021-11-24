var I = wx.$R;
function r_yk8rm(jyxoi) {
  this['options'] = jyxoi || { 'locator': {} };
}function r_xizjo2(cqdfn, $u91b, fdpn5c) {
  function _uc5(gmkrw7) {
    var qge7mr = cqdfn[gmkrw7];!qge7mr && qfndp && (qge7mr = 0x2 == cqdfn['length'] ? function (h_c6n5) {
      cqdfn(gmkrw7, h_c6n5);
    } : cqdfn), $9b4a[gmkrw7] = qge7mr && function (x8yjoi) {
      qge7mr('[xmldom ' + gmkrw7 + ']\t' + x8yjoi + r_cnqd(fdpn5c));
    } || function () {};
  }if (!cqdfn) {
    if ($u91b instanceof r_rywkm) return $u91b;cqdfn = $u91b;
  }var $9b4a = {},
      qfndp = cqdfn instanceof Function;return fdpn5c = fdpn5c || {}, _uc5('warning'), _uc5('error'), _uc5('fatalError'), $9b4a;
}function r_rywkm() {
  this['cdata'] = !0x1;
}function r_wme(_uh651, t2zj) {
  t2zj['lineNumber'] = _uh651['lineNumber'], t2zj['columnNumber'] = _uh651['columnNumber'];
}function r_cnqd(fqde) {
  return fqde ? '\x0a@' + (fqde['systemId'] || '') + '#[line:' + fqde['lineNumber'] + ',col:' + fqde['columnNumber'] + ']' : void 0x0;
}function r_sj2zt(kj8io, fhcn56, cnf5h6) {
  return 'string' == typeof kj8io ? kj8io['substr'](fhcn56, cnf5h6) : kj8io['length'] >= fhcn56 + cnf5h6 || fhcn56 ? new java['lang']['String'](kj8io, fhcn56, cnf5h6) + '' : kj8io;
}function r_slvt0(h1_6a, io2z) {
  h1_6a['currentElement'] ? h1_6a['currentElement']['appendChild'](io2z) : h1_6a['doc']['appendChild'](io2z);
}r_yk8rm['prototype']['parseFromString'] = function (wko8i, j8iyxo) {
  var xzj2s = this['options'],
      wy8iko = new r_my8rkw(),
      _1hab = xzj2s['domBuilder'] || new r_rywkm(),
      $au9b1 = xzj2s['errorHandler'],
      x2jszi = xzj2s['locator'],
      a1_bhu = xzj2s['xmlns'] || {},
      a419$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return x2jszi && _1hab['setDocumentLocator'](x2jszi), wy8iko['errorHandler'] = r_xizjo2($au9b1, _1hab, x2jszi), wy8iko['domBuilder'] = xzj2s['domBuilder'] || _1hab, /\/x?html?$/['test'](j8iyxo) && (a419$['nbsp'] = '\u00a0', a419$['copy'] = '©', a1_bhu[''] = 'http://www.w3.org/1999/xhtml'), a1_bhu['xml'] = a1_bhu['xml'] || 'http://www.w3.org/XML/1998/namespace', wko8i ? wy8iko['parse'](wko8i, a1_bhu, a419$) : wy8iko['errorHandler']['error']('invalid doc source'), _1hab['doc'];
}, r_rywkm['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_mkyow()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (j2tsxz, mk87w, df5pc, uba9$) {
    var jxi2oy = this['doc'],
        mr7wkg = jxi2oy['createElementNS'](j2tsxz, df5pc || mk87w),
        tzls32 = uba9$['length'];r_slvt0(this, mr7wkg), this['currentElement'] = mr7wkg, this['locator'] && r_wme(this['locator'], mr7wkg);for (var x2zts3 = 0x0; tzls32 > x2zts3; x2zts3++) {
      var j2tsxz = uba9$['getURI'](x2zts3),
          pdfcn5 = uba9$['getValue'](x2zts3),
          df5pc = uba9$['getQName'](x2zts3),
          b_u1a$ = jxi2oy['createAttributeNS'](j2tsxz, df5pc);this['locator'] && r_wme(uba9$['getLocator'](x2zts3), b_u1a$), b_u1a$['value'] = b_u1a$['nodeValue'] = pdfcn5, mr7wkg['setAttributeNode'](b_u1a$);
    }
  }, 'endElement': function () {
    {
      var ywrm = this['currentElement'];ywrm['tagName'];
    }this['currentElement'] = ywrm['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (b9u1a$, ywik8o) {
    var qcdfpn = this['doc']['createProcessingInstruction'](b9u1a$, ywik8o);this['locator'] && r_wme(this['locator'], qcdfpn), r_slvt0(this, qcdfpn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zsjxt2) {
    if (zsjxt2 = r_sj2zt['apply'](this, arguments)) {
      if (this['cdata']) var vl03st = this['doc']['createCDATASection'](zsjxt2);else var vl03st = this['doc']['createTextNode'](zsjxt2);this['currentElement'] ? this['currentElement']['appendChild'](vl03st) : /^\s*$/['test'](zsjxt2) && this['doc']['appendChild'](vl03st), this['locator'] && r_wme(this['locator'], vl03st);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (h6c_5u) {
    (this['locator'] = h6c_5u) && (h6c_5u['lineNumber'] = 0x0);
  }, 'comment': function (zj2st) {
    zj2st = r_sj2zt['apply'](this, arguments);var b1hu_a = this['doc']['createComment'](zj2st);this['locator'] && r_wme(this['locator'], b1hu_a), r_slvt0(this, b1hu_a);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (c_n65, gefdp, tslv) {
    var wkom8 = this['doc']['implementation'];if (wkom8 && wkom8['createDocumentType']) {
      var hau_16 = wkom8['createDocumentType'](c_n65, gefdp, tslv);this['locator'] && r_wme(this['locator'], hau_16), r_slvt0(this, hau_16);
    }
  }, 'warning': function (b1h_ua) {
    console['warn']('[xmldom warning]\t' + b1h_ua, r_cnqd(this['locator']));
  }, 'error': function (tlvs3) {
    console['error']('[xmldom error]\t' + tlvs3, r_cnqd(this['locator']));
  }, 'fatalError': function (iyj) {
    throw console['error']('[xmldom fatalError]\t' + iyj, r_cnqd(this['locator'])), iyj;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r7gpe) {
  r_rywkm['prototype'][r7gpe] = function () {
    return null;
  };
});var r_my8rkw = require('./rS12r')['XMLReader'],
    r_mkyow = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_yk8rm;