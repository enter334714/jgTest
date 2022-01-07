var a = wx.$y;
function yj7_of(s_l87c) {
  this['options'] = s_l87c || { 'locator': {} };
}function yamv356(jfwh4, nsk92c, _78lc) {
  function ing2k(c29nks) {
    var $gi2k = jfwh4[c29nks];!$gi2k && fsl8_7 && ($gi2k = 0x2 == jfwh4['length'] ? function (j_o4) {
      jfwh4(c29nks, j_o4);
    } : jfwh4), tm5ud[c29nks] = $gi2k && function (ni2q$) {
      $gi2k('[xmldom ' + c29nks + ']\t' + ni2q$ + yum1a(_78lc));
    } || function () {};
  }if (!jfwh4) {
    if (nsk92c instanceof yol8f_7) return nsk92c;jfwh4 = nsk92c;
  }var tm5ud = {},
      fsl8_7 = jfwh4 instanceof Function;return _78lc = _78lc || {}, ing2k('warning'), ing2k('error'), ing2k('fatalError'), tm5ud;
}function yol8f_7() {
  this['cdata'] = !0x1;
}function ywj4hof(am563v, hwj4o) {
  hwj4o['lineNumber'] = am563v['lineNumber'], hwj4o['columnNumber'] = am563v['columnNumber'];
}function yum1a(r63v0) {
  return r63v0 ? '\x0a@' + (r63v0['systemId'] || '') + '#[line:' + r63v0['lineNumber'] + ',col:' + r63v0['columnNumber'] + ']' : void 0x0;
}function yc2$kn9(s92ckl, nq$i2, ksn9c2) {
  return 'string' == typeof s92ckl ? s92ckl['substr'](nq$i2, ksn9c2) : s92ckl['length'] >= nq$i2 + ksn9c2 || nq$i2 ? new java['lang']['String'](s92ckl, nq$i2, ksn9c2) + '' : s92ckl;
}function yg9n2k$(a063v, $2gniq) {
  a063v['currentElement'] ? a063v['currentElement']['appendChild']($2gniq) : a063v['doc']['appendChild']($2gniq);
}yj7_of['prototype']['parseFromString'] = function (hf7, scl29k) {
  var ki$n = this['options'],
      yav30 = new yam65u3(),
      cksl92 = ki$n['domBuilder'] || new yol8f_7(),
      o8_jf7 = ki$n['errorHandler'],
      duwtm1 = ki$n['locator'],
      o4jf = ki$n['xmlns'] || {},
      yzx = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return duwtm1 && cksl92['setDocumentLocator'](duwtm1), yav30['errorHandler'] = yamv356(o8_jf7, cksl92, duwtm1), yav30['domBuilder'] = ki$n['domBuilder'] || cksl92, /\/x?html?$/['test'](scl29k) && (yzx['nbsp'] = '\u00a0', yzx['copy'] = '©', o4jf[''] = 'http://www.w3.org/1999/xhtml'), o4jf['xml'] = o4jf['xml'] || 'http://www.w3.org/XML/1998/namespace', hf7 ? yav30['parse'](hf7, o4jf, yzx) : yav30['errorHandler']['error']('invalid doc source'), cksl92['doc'];
}, yol8f_7['prototype'] = { 'startDocument': function () {
    this['doc'] = new ytd5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y03zrv, _ls78c, tu4d, f8lo_7) {
    var x0rye = this['doc'],
        pg$ = x0rye['createElementNS'](y03zrv, tu4d || _ls78c),
        j4to = f8lo_7['length'];yg9n2k$(this, pg$), this['currentElement'] = pg$, this['locator'] && ywj4hof(this['locator'], pg$);for (var j4o_hf = 0x0; j4to > j4o_hf; j4o_hf++) {
      var y03zrv = f8lo_7['getURI'](j4o_hf),
          dtjw = f8lo_7['getValue'](j4o_hf),
          tu4d = f8lo_7['getQName'](j4o_hf),
          aum563 = x0rye['createAttributeNS'](y03zrv, tu4d);this['locator'] && ywj4hof(f8lo_7['getLocator'](j4o_hf), aum563), aum563['value'] = aum563['nodeValue'] = dtjw, pg$['setAttributeNode'](aum563);
    }
  }, 'endElement': function () {
    {
      var r0xzy = this['currentElement'];r0xzy['tagName'];
    }this['currentElement'] = r0xzy['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (r0zy3v, t4wh1) {
    var lfo7 = this['doc']['createProcessingInstruction'](r0zy3v, t4wh1);this['locator'] && ywj4hof(this['locator'], lfo7), yg9n2k$(this, lfo7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sck29n) {
    if (sck29n = yc2$kn9['apply'](this, arguments)) {
      if (this['cdata']) var l_fo78 = this['doc']['createCDATASection'](sck29n);else var l_fo78 = this['doc']['createTextNode'](sck29n);this['currentElement'] ? this['currentElement']['appendChild'](l_fo78) : /^\s*$/['test'](sck29n) && this['doc']['appendChild'](l_fo78), this['locator'] && ywj4hof(this['locator'], l_fo78);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (y30rz) {
    (this['locator'] = y30rz) && (y30rz['lineNumber'] = 0x0);
  }, 'comment': function (sk89c) {
    sk89c = yc2$kn9['apply'](this, arguments);var l7c89s = this['doc']['createComment'](sk89c);this['locator'] && ywj4hof(this['locator'], l7c89s), yg9n2k$(this, l7c89s);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kc2, pqgn$, f4_jo) {
    var a53mu = this['doc']['implementation'];if (a53mu && a53mu['createDocumentType']) {
      var ngki2 = a53mu['createDocumentType'](kc2, pqgn$, f4_jo);this['locator'] && ywj4hof(this['locator'], ngki2), yg9n2k$(this, ngki2);
    }
  }, 'warning': function (hjo_4f) {
    console['warn']('[xmldom warning]\t' + hjo_4f, yum1a(this['locator']));
  }, 'error': function (nk2$c9) {
    console['error']('[xmldom error]\t' + nk2$c9, yum1a(this['locator']));
  }, 'fatalError': function (wojht) {
    throw console['error']('[xmldom fatalError]\t' + wojht, yum1a(this['locator'])), wojht;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (l8_s7f) {
  yol8f_7['prototype'][l8_s7f] = function () {
    return null;
  };
});var yam65u3 = require('./yycyy')['XMLReader'],
    ytd5 = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yj7_of;