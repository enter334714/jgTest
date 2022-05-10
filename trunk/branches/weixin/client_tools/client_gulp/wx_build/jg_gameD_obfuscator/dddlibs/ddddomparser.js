var v = wx.$d;
function zo39c4(x1ba8z) {
  this['options'] = x1ba8z || { 'locator': {} };
}function z$1rx(c352o9, co2, j9n3_4) {
  function _n43j9(vy7pw$) {
    var j6hnm = c352o9[vy7pw$];!j6hnm && fkqg0z && (j6hnm = 0x2 == c352o9['length'] ? function (nmejh6) {
      c352o9(vy7pw$, nmejh6);
    } : c352o9), ufdtik[vy7pw$] = j6hnm && function (gfuk) {
      j6hnm('[xmldom ' + vy7pw$ + ']\t' + gfuk + zgikft(j9n3_4));
    } || function () {};
  }if (!c352o9) {
    if (co2 instanceof zn4hjm6) return co2;c352o9 = co2;
  }var ufdtik = {},
      fkqg0z = c352o9 instanceof Function;return j9n3_4 = j9n3_4 || {}, _n43j9('warning'), _n43j9('error'), _n43j9('fatalError'), ufdtik;
}function zn4hjm6() {
  this['cdata'] = !0x1;
}function zpw$v7r(n49j_, eimut) {
  eimut['lineNumber'] = n49j_['lineNumber'], eimut['columnNumber'] = n49j_['columnNumber'];
}function zgikft(pv7wy) {
  return pv7wy ? '\x0a@' + (pv7wy['systemId'] || '') + '#[line:' + pv7wy['lineNumber'] + ',col:' + pv7wy['columnNumber'] + ']' : void 0x0;
}function ziefut(hjen6m, dituef, fetid) {
  return 'string' == typeof hjen6m ? hjen6m['substr'](dituef, fetid) : hjen6m['length'] >= dituef + fetid || dituef ? new java['lang']['String'](hjen6m, dituef, fetid) + '' : hjen6m;
}function zzb18xa(h6j4_n, wv$7py) {
  h6j4_n['currentElement'] ? h6j4_n['currentElement']['appendChild'](wv$7py) : h6j4_n['doc']['appendChild'](wv$7py);
}zo39c4['prototype']['parseFromString'] = function (kfqu, aqz0bg) {
  var imeu6 = this['options'],
      aqk = new z$rw18p(),
      fgiktu = imeu6['domBuilder'] || new zn4hjm6(),
      _jn93 = imeu6['errorHandler'],
      azb08x = imeu6['locator'],
      gakq0 = imeu6['xmlns'] || {},
      h4mn = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return azb08x && fgiktu['setDocumentLocator'](azb08x), aqk['errorHandler'] = z$1rx(_jn93, fgiktu, azb08x), aqk['domBuilder'] = imeu6['domBuilder'] || fgiktu, /\/x?html?$/['test'](aqz0bg) && (h4mn['nbsp'] = '\u00a0', h4mn['copy'] = '©', gakq0[''] = 'http://www.w3.org/1999/xhtml'), gakq0['xml'] = gakq0['xml'] || 'http://www.w3.org/XML/1998/namespace', kfqu ? aqk['parse'](kfqu, gakq0, h4mn) : aqk['errorHandler']['error']('invalid doc source'), fgiktu['doc'];
}, zn4hjm6['prototype'] = { 'startDocument': function () {
    this['doc'] = new zz1x8b()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (idmhe6, pwy7$v, yp7lv, co95) {
    var c2o39 = this['doc'],
        _n39j4 = c2o39['createElementNS'](idmhe6, yp7lv || pwy7$v),
        bxw18r = co95['length'];zzb18xa(this, _n39j4), this['currentElement'] = _n39j4, this['locator'] && zpw$v7r(this['locator'], _n39j4);for (var xz0b8a = 0x0; bxw18r > xz0b8a; xz0b8a++) {
      var idmhe6 = co95['getURI'](xz0b8a),
          uftgki = co95['getValue'](xz0b8a),
          yp7lv = co95['getQName'](xz0b8a),
          $wvy7 = c2o39['createAttributeNS'](idmhe6, yp7lv);this['locator'] && zpw$v7r(co95['getLocator'](xz0b8a), $wvy7), $wvy7['value'] = $wvy7['nodeValue'] = uftgki, _n39j4['setAttributeNode']($wvy7);
    }
  }, 'endElement': function () {
    {
      var j39n_ = this['currentElement'];j39n_['tagName'];
    }this['currentElement'] = j39n_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (gbq0az, _jh6n4) {
    var xqb0za = this['doc']['createProcessingInstruction'](gbq0az, _jh6n4);this['locator'] && zpw$v7r(this['locator'], xqb0za), zzb18xa(this, xqb0za);
  }, 'ignorableWhitespace': function () {}, 'characters': function (etdfu) {
    if (etdfu = ziefut['apply'](this, arguments)) {
      if (this['cdata']) var $xw = this['doc']['createCDATASection'](etdfu);else var $xw = this['doc']['createTextNode'](etdfu);this['currentElement'] ? this['currentElement']['appendChild']($xw) : /^\s*$/['test'](etdfu) && this['doc']['appendChild']($xw), this['locator'] && zpw$v7r(this['locator'], $xw);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (n_34j) {
    (this['locator'] = n_34j) && (n_34j['lineNumber'] = 0x0);
  }, 'comment': function (c53o2) {
    c53o2 = ziefut['apply'](this, arguments);var prv$7w = this['doc']['createComment'](c53o2);this['locator'] && zpw$v7r(this['locator'], prv$7w), zzb18xa(this, prv$7w);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uktgf, kuftig, tdiufk) {
    var iktg = this['doc']['implementation'];if (iktg && iktg['createDocumentType']) {
      var hjn9 = iktg['createDocumentType'](uktgf, kuftig, tdiufk);this['locator'] && zpw$v7r(this['locator'], hjn9), zzb18xa(this, hjn9);
    }
  }, 'warning': function (fzkg) {
    console['warn']('[xmldom warning]\t' + fzkg, zgikft(this['locator']));
  }, 'error': function (jh_64) {
    console['error']('[xmldom error]\t' + jh_64, zgikft(this['locator']));
  }, 'fatalError': function (_4j9nh) {
    throw console['error']('[xmldom fatalError]\t' + _4j9nh, zgikft(this['locator'])), _4j9nh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (idem) {
  zn4hjm6['prototype'][idem] = function () {
    return null;
  };
});var z$rw18p = require('./dddsax')['XMLReader'],
    zz1x8b = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zo39c4;