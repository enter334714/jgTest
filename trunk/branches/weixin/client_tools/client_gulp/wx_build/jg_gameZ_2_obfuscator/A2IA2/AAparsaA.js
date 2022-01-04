var d = wx.$A;
function Aeav9m(esn6m) {
  this['options'] = esn6m || { 'locator': {} };
}function A_fr4og(zsjdh6, y1xi, iqtbxy) {
  function r745f(yqbit) {
    var uk83v0 = zsjdh6[yqbit];!uk83v0 && jl2wzh && (uk83v0 = 0x2 == zsjdh6['length'] ? function (jhz6ds) {
      zsjdh6(yqbit, jhz6ds);
    } : zsjdh6), otyb[yqbit] = uk83v0 && function (ave$0) {
      uk83v0('[xmldom ' + yqbit + ']\t' + ave$0 + Aesdmn6(iqtbxy));
    } || function () {};
  }if (!zsjdh6) {
    if (y1xi instanceof Al6hwz) return y1xi;zsjdh6 = y1xi;
  }var otyb = {},
      jl2wzh = zsjdh6 instanceof Function;return iqtbxy = iqtbxy || {}, r745f('warning'), r745f('error'), r745f('fatalError'), otyb;
}function Al6hwz() {
  this['cdata'] = !0x1;
}function A$0v9a(dh6s, ipkyx) {
  ipkyx['lineNumber'] = dh6s['lineNumber'], ipkyx['columnNumber'] = dh6s['columnNumber'];
}function Aesdmn6(u083a) {
  return u083a ? '\x0a@' + (u083a['systemId'] || '') + '#[line:' + u083a['lineNumber'] + ',col:' + u083a['columnNumber'] + ']' : void 0x0;
}function Au0k8v3(qybitx, g57f4r, ma9n$e) {
  return 'string' == typeof qybitx ? qybitx['substr'](g57f4r, ma9n$e) : qybitx['length'] >= g57f4r + ma9n$e || g57f4r ? new java['lang']['String'](qybitx, g57f4r, ma9n$e) + '' : qybitx;
}function Ap1uki(a9n$e, pyix) {
  a9n$e['currentElement'] ? a9n$e['currentElement']['appendChild'](pyix) : a9n$e['doc']['appendChild'](pyix);
}Aeav9m['prototype']['parseFromString'] = function ($9mna, iptyxb) {
  var _r4qo = this['options'],
      ds6jnh = new Ag4qbo(),
      nesd$ = _r4qo['domBuilder'] || new Al6hwz(),
      sde$ = _r4qo['errorHandler'],
      xqbt = _r4qo['locator'],
      zjwl = _r4qo['xmlns'] || {},
      h6snd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xqbt && nesd$['setDocumentLocator'](xqbt), ds6jnh['errorHandler'] = A_fr4og(sde$, nesd$, xqbt), ds6jnh['domBuilder'] = _r4qo['domBuilder'] || nesd$, /\/x?html?$/['test'](iptyxb) && (h6snd['nbsp'] = '\u00a0', h6snd['copy'] = '©', zjwl[''] = 'http://www.w3.org/1999/xhtml'), zjwl['xml'] = zjwl['xml'] || 'http://www.w3.org/XML/1998/namespace', $9mna ? ds6jnh['parse']($9mna, zjwl, h6snd) : ds6jnh['errorHandler']['error']('invalid doc source'), nesd$['doc'];
}, Al6hwz['prototype'] = { 'startDocument': function () {
    this['doc'] = new A_botgq()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ae$90v, uav380, me$9dn, m$ne) {
    var txqo = this['doc'],
        zljh6w = txqo['createElementNS'](ae$90v, me$9dn || uav380),
        am9$ev = m$ne['length'];Ap1uki(this, zljh6w), this['currentElement'] = zljh6w, this['locator'] && A$0v9a(this['locator'], zljh6w);for (var tbqxy = 0x0; am9$ev > tbqxy; tbqxy++) {
      var ae$90v = m$ne['getURI'](tbqxy),
          anm$9e = m$ne['getValue'](tbqxy),
          me$9dn = m$ne['getQName'](tbqxy),
          vame$ = txqo['createAttributeNS'](ae$90v, me$9dn);this['locator'] && A$0v9a(m$ne['getLocator'](tbqxy), vame$), vame$['value'] = vame$['nodeValue'] = anm$9e, zljh6w['setAttributeNode'](vame$);
    }
  }, 'endElement': function () {
    {
      var xy = this['currentElement'];xy['tagName'];
    }this['currentElement'] = xy['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zwj, ki1yxp) {
    var mdne$s = this['doc']['createProcessingInstruction'](zwj, ki1yxp);this['locator'] && A$0v9a(this['locator'], mdne$s), Ap1uki(this, mdne$s);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bto_g) {
    if (bto_g = Au0k8v3['apply'](this, arguments)) {
      if (this['cdata']) var _o4gr = this['doc']['createCDATASection'](bto_g);else var _o4gr = this['doc']['createTextNode'](bto_g);this['currentElement'] ? this['currentElement']['appendChild'](_o4gr) : /^\s*$/['test'](bto_g) && this['doc']['appendChild'](_o4gr), this['locator'] && A$0v9a(this['locator'], _o4gr);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (avu803) {
    (this['locator'] = avu803) && (avu803['lineNumber'] = 0x0);
  }, 'comment': function (tbqxyi) {
    tbqxyi = Au0k8v3['apply'](this, arguments);var wsjhz6 = this['doc']['createComment'](tbqxyi);this['locator'] && A$0v9a(this['locator'], wsjhz6), Ap1uki(this, wsjhz6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v$89, a8v$0, v930) {
    var yxikp1 = this['doc']['implementation'];if (yxikp1 && yxikp1['createDocumentType']) {
      var mne$a9 = yxikp1['createDocumentType'](v$89, a8v$0, v930);this['locator'] && A$0v9a(this['locator'], mne$a9), Ap1uki(this, mne$a9);
    }
  }, 'warning': function (_rg4qo) {
    console['warn']('[xmldom warning]\t' + _rg4qo, Aesdmn6(this['locator']));
  }, 'error': function (jwzl2h) {
    console['error']('[xmldom error]\t' + jwzl2h, Aesdmn6(this['locator']));
  }, 'fatalError': function (up1yk) {
    throw console['error']('[xmldom fatalError]\t' + up1yk, Aesdmn6(this['locator'])), up1yk;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nm$e9d) {
  Al6hwz['prototype'][nm$e9d] = function () {
    return null;
  };
});var Ag4qbo = require('./AAcAA')['XMLReader'],
    A_botgq = exports['DOMImplementation'] = require('./AADOAA')['DOMImplementation'];exports['XMLSerializer'] = require('./AADOAA')['XMLSerializer'], exports['DOMParser'] = Aeav9m;