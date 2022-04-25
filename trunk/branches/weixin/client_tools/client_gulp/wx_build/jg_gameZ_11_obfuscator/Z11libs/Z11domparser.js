var B = wx.$z;
function zfzdm(mwhn) {
  this['options'] = mwhn || { 'locator': {} };
}function zwdfz39(fmw9dz, wnmh0z, mzw0f9) {
  function gqe_ja(x84p16) {
    var zfmhw0 = fmw9dz[x84p16];!zfmhw0 && rosgje && (zfmhw0 = 0x2 == fmw9dz['length'] ? function (sio7bu) {
      fmw9dz(x84p16, sio7bu);
    } : fmw9dz), rosu7[x84p16] = zfmhw0 && function (v$ytl2) {
      zfmhw0('[xmldom ' + x84p16 + ']\t' + v$ytl2 + zj_are(mzw0f9));
    } || function () {};
  }if (!fmw9dz) {
    if (wnmh0z instanceof zog_j) return wnmh0z;fmw9dz = wnmh0z;
  }var rosu7 = {},
      rosgje = fmw9dz instanceof Function;return mzw0f9 = mzw0f9 || {}, gqe_ja('warning'), gqe_ja('error'), gqe_ja('fatalError'), rosu7;
}function zog_j() {
  this['cdata'] = !0x1;
}function zosu7r(wf90mz, _jaer) {
  _jaer['lineNumber'] = wf90mz['lineNumber'], _jaer['columnNumber'] = wf90mz['columnNumber'];
}function zj_are(df631) {
  return df631 ? '\x0a@' + (df631['systemId'] || '') + '#[line:' + df631['lineNumber'] + ',col:' + df631['columnNumber'] + ']' : void 0x0;
}function zgaje_r(wn0qh, sugo, rsujog) {
  return 'string' == typeof wn0qh ? wn0qh['substr'](sugo, rsujog) : wn0qh['length'] >= sugo + rsujog || sugo ? new java['lang']['String'](wn0qh, sugo, rsujog) + '' : wn0qh;
}function zjuoirs(x68p13, r_egaj) {
  x68p13['currentElement'] ? x68p13['currentElement']['appendChild'](r_egaj) : x68p13['doc']['appendChild'](r_egaj);
}zfzdm['prototype']['parseFromString'] = function (_hqane, s7biu5) {
  var j_qg = this['options'],
      uogs = new zwz0nh(),
      h0mzw = j_qg['domBuilder'] || new zog_j(),
      y2$5tb = j_qg['errorHandler'],
      mhwn0 = j_qg['locator'],
      ui57sb = j_qg['xmlns'] || {},
      sergoj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return mhwn0 && h0mzw['setDocumentLocator'](mhwn0), uogs['errorHandler'] = zwdfz39(y2$5tb, h0mzw, mhwn0), uogs['domBuilder'] = j_qg['domBuilder'] || h0mzw, /\/x?html?$/['test'](s7biu5) && (sergoj['nbsp'] = '\u00a0', sergoj['copy'] = '©', ui57sb[''] = 'http://www.w3.org/1999/xhtml'), ui57sb['xml'] = ui57sb['xml'] || 'http://www.w3.org/XML/1998/namespace', _hqane ? uogs['parse'](_hqane, ui57sb, sergoj) : uogs['errorHandler']['error']('invalid doc source'), h0mzw['doc'];
}, zog_j['prototype'] = { 'startDocument': function () {
    this['doc'] = new zge_qna()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lyt5$2, roje_g, mzf, lty$52) {
    var sujg = this['doc'],
        qnmha0 = sujg['createElementNS'](lyt5$2, mzf || roje_g),
        b2t$y5 = lty$52['length'];zjuoirs(this, qnmha0), this['currentElement'] = qnmha0, this['locator'] && zosu7r(this['locator'], qnmha0);for (var z9dfm = 0x0; b2t$y5 > z9dfm; z9dfm++) {
      var lyt5$2 = lty$52['getURI'](z9dfm),
          osu7i = lty$52['getValue'](z9dfm),
          mzf = lty$52['getQName'](z9dfm),
          hf = sujg['createAttributeNS'](lyt5$2, mzf);this['locator'] && zosu7r(lty$52['getLocator'](z9dfm), hf), hf['value'] = hf['nodeValue'] = osu7i, qnmha0['setAttributeNode'](hf);
    }
  }, 'endElement': function () {
    {
      var y2b75 = this['currentElement'];y2b75['tagName'];
    }this['currentElement'] = y2b75['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_qah0, f91d6) {
    var d863x = this['doc']['createProcessingInstruction'](_qah0, f91d6);this['locator'] && zosu7r(this['locator'], d863x), zjuoirs(this, d863x);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zf63d9) {
    if (zf63d9 = zgaje_r['apply'](this, arguments)) {
      if (this['cdata']) var qnh0_ = this['doc']['createCDATASection'](zf63d9);else var qnh0_ = this['doc']['createTextNode'](zf63d9);this['currentElement'] ? this['currentElement']['appendChild'](qnh0_) : /^\s*$/['test'](zf63d9) && this['doc']['appendChild'](qnh0_), this['locator'] && zosu7r(this['locator'], qnh0_);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (h0aqnm) {
    (this['locator'] = h0aqnm) && (h0aqnm['lineNumber'] = 0x0);
  }, 'comment': function (_ah0) {
    _ah0 = zgaje_r['apply'](this, arguments);var srujg = this['doc']['createComment'](_ah0);this['locator'] && zosu7r(this['locator'], srujg), zjuoirs(this, srujg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vyl2t, p6381x, a_q0hn) {
    var rious = this['doc']['implementation'];if (rious && rious['createDocumentType']) {
      var z9fd3w = rious['createDocumentType'](vyl2t, p6381x, a_q0hn);this['locator'] && zosu7r(this['locator'], z9fd3w), zjuoirs(this, z9fd3w);
    }
  }, 'warning': function ($2y5tl) {
    console['warn']('[xmldom warning]\t' + $2y5tl, zj_are(this['locator']));
  }, 'error': function (o7usr) {
    console['error']('[xmldom error]\t' + o7usr, zj_are(this['locator']));
  }, 'fatalError': function (by25t7) {
    throw console['error']('[xmldom fatalError]\t' + by25t7, zj_are(this['locator'])), by25t7;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x36d18) {
  zog_j['prototype'][x36d18] = function () {
    return null;
  };
});var zwz0nh = require('./Z11sax')['XMLReader'],
    zge_qna = exports['DOMImplementation'] = require('./Z11dom')['DOMImplementation'];exports['XMLSerializer'] = require('./Z11dom')['XMLSerializer'], exports['DOMParser'] = zfzdm;