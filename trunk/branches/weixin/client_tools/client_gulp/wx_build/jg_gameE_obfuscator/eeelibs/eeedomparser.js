var b = wx.$e;
function ezyfv(a74vm_) {
  this['options'] = a74vm_ || { 'locator': {} };
}function eztrylh(un3s, omeac, map7c) {
  function bs906(rhlytz) {
    var _cma = un3s[rhlytz];!_cma && ubk69 && (_cma = 0x2 == un3s['length'] ? function (qi$j) {
      un3s(rhlytz, qi$j);
    } : un3s), c7amop[rhlytz] = _cma && function (oc_7) {
      _cma('[xmldom ' + rhlytz + ']\t' + oc_7 + em4a_v7(map7c));
    } || function () {};
  }if (!un3s) {
    if (omeac instanceof ev4f7a) return omeac;un3s = omeac;
  }var c7amop = {},
      ubk69 = un3s instanceof Function;return map7c = map7c || {}, bs906('warning'), bs906('error'), bs906('fatalError'), c7amop;
}function ev4f7a() {
  this['cdata'] = !0x1;
}function eva7_4m(lzrhfy, _mao7) {
  _mao7['lineNumber'] = lzrhfy['lineNumber'], _mao7['columnNumber'] = lzrhfy['columnNumber'];
}function em4a_v7(d508) {
  return d508 ? '\x0a@' + (d508['systemId'] || '') + '#[line:' + d508['lineNumber'] + ',col:' + d508['columnNumber'] + ']' : void 0x0;
}function ehfryv(qunks9, vf_zy4, oam_7c) {
  return 'string' == typeof qunks9 ? qunks9['substr'](vf_zy4, oam_7c) : qunks9['length'] >= vf_zy4 + oam_7c || vf_zy4 ? new java['lang']['String'](qunks9, vf_zy4, oam_7c) + '' : qunks9;
}function equn3j(gxitj$, tylrz) {
  gxitj$['currentElement'] ? gxitj$['currentElement']['appendChild'](tylrz) : gxitj$['doc']['appendChild'](tylrz);
}ezyfv['prototype']['parseFromString'] = function (rhfv, w508) {
  var kb5 = this['options'],
      rlfh = new e$gjti(),
      af47_ = kb5['domBuilder'] || new ev4f7a(),
      fzyvr4 = kb5['errorHandler'],
      fvrzy4 = kb5['locator'],
      jxg$3i = kb5['xmlns'] || {},
      u69ksb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fvrzy4 && af47_['setDocumentLocator'](fvrzy4), rlfh['errorHandler'] = eztrylh(fzyvr4, af47_, fvrzy4), rlfh['domBuilder'] = kb5['domBuilder'] || af47_, /\/x?html?$/['test'](w508) && (u69ksb['nbsp'] = '\u00a0', u69ksb['copy'] = '©', jxg$3i[''] = 'http://www.w3.org/1999/xhtml'), jxg$3i['xml'] = jxg$3i['xml'] || 'http://www.w3.org/XML/1998/namespace', rhfv ? rlfh['parse'](rhfv, jxg$3i, u69ksb) : rlfh['errorHandler']['error']('invalid doc source'), af47_['doc'];
}, ev4f7a['prototype'] = { 'startDocument': function () {
    this['doc'] = new ey_v47f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xq3$j, ocm7a, meap, jiqun) {
    var _7caom = this['doc'],
        gx3j$ = _7caom['createElementNS'](xq3$j, meap || ocm7a),
        amo7pc = jiqun['length'];equn3j(this, gx3j$), this['currentElement'] = gx3j$, this['locator'] && eva7_4m(this['locator'], gx3j$);for (var qju3i = 0x0; amo7pc > qju3i; qju3i++) {
      var xq3$j = jiqun['getURI'](qju3i),
          v47_f = jiqun['getValue'](qju3i),
          meap = jiqun['getQName'](qju3i),
          kq9usn = _7caom['createAttributeNS'](xq3$j, meap);this['locator'] && eva7_4m(jiqun['getLocator'](qju3i), kq9usn), kq9usn['value'] = kq9usn['nodeValue'] = v47_f, gx3j$['setAttributeNode'](kq9usn);
    }
  }, 'endElement': function () {
    {
      var qxji$3 = this['currentElement'];qxji$3['tagName'];
    }this['currentElement'] = qxji$3['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (n6sk, hxtglr) {
    var xtrhgl = this['doc']['createProcessingInstruction'](n6sk, hxtglr);this['locator'] && eva7_4m(this['locator'], xtrhgl), equn3j(this, xtrhgl);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sbk96u) {
    if (sbk96u = ehfryv['apply'](this, arguments)) {
      if (this['cdata']) var _4c7a = this['doc']['createCDATASection'](sbk96u);else var _4c7a = this['doc']['createTextNode'](sbk96u);this['currentElement'] ? this['currentElement']['appendChild'](_4c7a) : /^\s*$/['test'](sbk96u) && this['doc']['appendChild'](_4c7a), this['locator'] && eva7_4m(this['locator'], _4c7a);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c_oam) {
    (this['locator'] = c_oam) && (c_oam['lineNumber'] = 0x0);
  }, 'comment': function (i$3xjq) {
    i$3xjq = ehfryv['apply'](this, arguments);var xitg$l = this['doc']['createComment'](i$3xjq);this['locator'] && eva7_4m(this['locator'], xitg$l), equn3j(this, xitg$l);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ac_4, oa_mc, v4a7f_) {
    var zfryhv = this['doc']['implementation'];if (zfryhv && zfryhv['createDocumentType']) {
      var fzyvh = zfryhv['createDocumentType'](ac_4, oa_mc, v4a7f_);this['locator'] && eva7_4m(this['locator'], fzyvh), equn3j(this, fzyvh);
    }
  }, 'warning': function (b5068) {
    console['warn']('[xmldom warning]\t' + b5068, em4a_v7(this['locator']));
  }, 'error': function (dw8251) {
    console['error']('[xmldom error]\t' + dw8251, em4a_v7(this['locator']));
  }, 'fatalError': function (rlyzhf) {
    throw console['error']('[xmldom fatalError]\t' + rlyzhf, em4a_v7(this['locator'])), rlyzhf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yht) {
  ev4f7a['prototype'][yht] = function () {
    return null;
  };
});var e$gjti = require('./eeesax')['XMLReader'],
    ey_v47f = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ezyfv;