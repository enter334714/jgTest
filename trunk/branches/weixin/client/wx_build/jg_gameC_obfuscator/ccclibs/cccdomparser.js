var p = wx.$h;
function a_$h9v_p(w8yqm) {
  this['options'] = w8yqm || { 'locator': {} };
}function a_xf5id3(ngtpbv, mosjew, $lah1k) {
  function oems(alr17) {
    var b20z48 = ngtpbv[alr17];!b20z48 && al1h$k && (b20z48 = 0x2 == ngtpbv['length'] ? function (r6l7ai) {
      ngtpbv(alr17, r6l7ai);
    } : ngtpbv), $hka_[alr17] = b20z48 ? function (ywq8sm) {
      b20z48('[xmldom ' + alr17 + ']\t' + ywq8sm + a_syqom($lah1k));
    } : function () {};
  }if (!ngtpbv) {
    if (mosjew instanceof a_h1aklr) return mosjew;ngtpbv = mosjew;
  }var $hka_ = {},
      al1h$k = ngtpbv instanceof Function;return $lah1k = $lah1k || {}, oems('warning'), oems('error'), oems('fatalError'), $hka_;
}function a_h1aklr() {
  this['cdata'] = !0x1;
}function a_vbgtn(ha_1, mswqy8) {
  mswqy8['lineNumber'] = ha_1['lineNumber'], mswqy8['columnNumber'] = ha_1['columnNumber'];
}function a_syqom(phv$_) {
  return phv$_ ? '\x0a@' + (phv$_['systemId'] || '') + '#[line:' + phv$_['lineNumber'] + ',col:' + phv$_['columnNumber'] + ']' : void 0x0;
}function a_i376rl(nbgp2, l6k, tnvpb) {
  return 'string' == typeof nbgp2 ? nbgp2['substr'](l6k, tnvpb) : nbgp2['length'] >= l6k + tnvpb || l6k ? new java['lang']['String'](nbgp2, l6k, tnvpb) + '' : nbgp2;
}function a_idr63(gtb2, a6il) {
  (gtb2['currentElement'] || gtb2['doc'])['appendChild'](a6il);
}a_$h9v_p['prototype']['parseFromString'] = function (tn9gpv, h_k$91) {
  var n2gzt = this['options'],
      k$1lh = new a_wysojm(),
      ojw = n2gzt['domBuilder'] || new a_h1aklr(),
      a167rl = n2gzt['errorHandler'],
      l6ira7 = n2gzt['locator'],
      p9_$g = n2gzt['xmlns'] || {},
      yq0z8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l6ira7 && ojw['setDocumentLocator'](l6ira7), k$1lh['errorHandler'] = a_xf5id3(a167rl, ojw, l6ira7), k$1lh['domBuilder'] = n2gzt['domBuilder'] || ojw, /\/x?html?$/['test'](h_k$91) && (yq0z8['nbsp'] = '\u00a0', yq0z8['copy'] = '©', p9_$g[''] = 'http://www.w3.org/1999/xhtml'), p9_$g['xml'] = p9_$g['xml'] || 'http://www.w3.org/XML/1998/namespace', tn9gpv ? k$1lh['parse'](tn9gpv, p9_$g, yq0z8) : k$1lh['errorHandler']['error']('invalid doc source'), ojw['doc'];
}, a_h1aklr['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_pngv9()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wjem, zy4q8, smje, al1rkh) {
    var gzb2nt = this['doc'],
        kha1lr = gzb2nt['createElementNS'](wjem, smje || zy4q8),
        gpt9n = al1rkh['length'];a_idr63(this, kha1lr), this['currentElement'] = kha1lr, this['locator'] && a_vbgtn(this['locator'], kha1lr);for (var z48qy = 0x0; z48qy < gpt9n; z48qy++) {
      var wjem = al1rkh['getURI'](z48qy),
          jwmseo = al1rkh['getValue'](z48qy),
          smje = al1rkh['getQName'](z48qy),
          sq0w8 = gzb2nt['createAttributeNS'](wjem, smje);this['locator'] && a_vbgtn(al1rkh['getLocator'](z48qy), sq0w8), sq0w8['value'] = sq0w8['nodeValue'] = jwmseo, kha1lr['setAttributeNode'](sq0w8);
    }
  }, 'endElement': function () {
    var _g9pt = this['currentElement'];_g9pt['tagName'], this['currentElement'] = _g9pt['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rla6i7, f5dx3i) {
    f5dx3i = this['doc']['createProcessingInstruction'](rla6i7, f5dx3i), (this['locator'] && a_vbgtn(this['locator'], f5dx3i), a_idr63(this, f5dx3i));
  }, 'ignorableWhitespace': function () {}, 'characters': function (w0q8sy) {
    var vnt;(w0q8sy = a_i376rl['apply'](this, arguments)) && (vnt = this['cdata'] ? this['doc']['createCDATASection'](w0q8sy) : this['doc']['createTextNode'](w0q8sy), this['currentElement'] ? this['currentElement']['appendChild'](vnt) : /^\s*$/['test'](w0q8sy) && this['doc']['appendChild'](vnt), this['locator'] && a_vbgtn(this['locator'], vnt));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lrakh1) {
    (this['locator'] = lrakh1) && (lrakh1['lineNumber'] = 0x0);
  }, 'comment': function (ejwmos) {
    ejwmos = a_i376rl['apply'](this, arguments);var h_$kv9 = this['doc']['createComment'](ejwmos);this['locator'] && a_vbgtn(this['locator'], h_$kv9), a_idr63(this, h_$kv9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yms8w, gvbtp, jwocem) {
    var cemo = this['doc']['implementation'];cemo && cemo['createDocumentType'] && (jwocem = cemo['createDocumentType'](yms8w, gvbtp, jwocem), this['locator'] && a_vbgtn(this['locator'], jwocem), a_idr63(this, jwocem));
  }, 'warning': function (ah1_$) {
    console['warn']('[xmldom warning]\t' + ah1_$, a_syqom(this['locator']));
  }, 'error': function (a1$k_) {
    console['error']('[xmldom error]\t' + a1$k_, a_syqom(this['locator']));
  }, 'fatalError': function (z28b04) {
    throw console['error']('[xmldom fatalError]\t' + z28b04, a_syqom(this['locator'])), z28b04;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vgn9tp) {
  a_h1aklr['prototype'][vgn9tp] = function () {
    return null;
  };
});var a_wysojm = require('./cccsax')['XMLReader'],
    a_pngv9 = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_$h9v_p;