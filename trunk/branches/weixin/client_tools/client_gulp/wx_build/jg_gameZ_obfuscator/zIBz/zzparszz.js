var B = wx.$z;
function zrbd8yk(nvf46l) {
  this['options'] = nvf46l || { 'locator': {} };
}function zsez9ax(k8b_, ateodz, esazo) {
  function pf6h4g(hpg61) {
    var xe9zs = k8b_[hpg61];!xe9zs && xea && (xe9zs = 0x2 == k8b_['length'] ? function (n7lmiv) {
      k8b_(hpg61, n7lmiv);
    } : k8b_), yzeod[hpg61] = xe9zs && function (h91xpg) {
      xe9zs('[xmldom ' + hpg61 + ']\t' + h91xpg + zhg91(esazo));
    } || function () {};
  }if (!k8b_) {
    if (ateodz instanceof zwu_052) return ateodz;k8b_ = ateodz;
  }var yzeod = {},
      xea = k8b_ instanceof Function;return esazo = esazo || {}, pf6h4g('warning'), pf6h4g('error'), pf6h4g('fatalError'), yzeod;
}function zwu_052() {
  this['cdata'] = !0x1;
}function zlv7inf(sz9xe, by8rdk) {
  by8rdk['lineNumber'] = sz9xe['lineNumber'], by8rdk['columnNumber'] = sz9xe['columnNumber'];
}function zhg91(otdye) {
  return otdye ? '\x0a@' + (otdye['systemId'] || '') + '#[line:' + otdye['lineNumber'] + ',col:' + otdye['columnNumber'] + ']' : void 0x0;
}function zykzotd(y8b_, date, r25_8) {
  return 'string' == typeof y8b_ ? y8b_['substr'](date, r25_8) : y8b_['length'] >= date + r25_8 || date ? new java['lang']['String'](y8b_, date, r25_8) + '' : y8b_;
}function zky8bod(gvp6f4, okdt) {
  gvp6f4['currentElement'] ? gvp6f4['currentElement']['appendChild'](okdt) : gvp6f4['doc']['appendChild'](okdt);
}zrbd8yk['prototype']['parseFromString'] = function (nml7i, obdky) {
  var u52wr_ = this['options'],
      gh1x9p = new zotsaez(),
      pg9h1x = u52wr_['domBuilder'] || new zwu_052(),
      axzst = u52wr_['errorHandler'],
      l6nvf7 = u52wr_['locator'],
      lvmn7 = u52wr_['xmlns'] || {},
      zase9x = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l6nvf7 && pg9h1x['setDocumentLocator'](l6nvf7), gh1x9p['errorHandler'] = zsez9ax(axzst, pg9h1x, l6nvf7), gh1x9p['domBuilder'] = u52wr_['domBuilder'] || pg9h1x, /\/x?html?$/['test'](obdky) && (zase9x['nbsp'] = '\u00a0', zase9x['copy'] = '©', lvmn7[''] = 'http://www.w3.org/1999/xhtml'), lvmn7['xml'] = lvmn7['xml'] || 'http://www.w3.org/XML/1998/namespace', nml7i ? gh1x9p['parse'](nml7i, lvmn7, zase9x) : gh1x9p['errorHandler']['error']('invalid doc source'), pg9h1x['doc'];
}, zwu_052['prototype'] = { 'startDocument': function () {
    this['doc'] = new zmli37()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xzs9ea, _5r82b, g64hp1, ahs9) {
    var vf6g4p = this['doc'],
        h4g6f = vf6g4p['createElementNS'](xzs9ea, g64hp1 || _5r82b),
        as9ezx = ahs9['length'];zky8bod(this, h4g6f), this['currentElement'] = h4g6f, this['locator'] && zlv7inf(this['locator'], h4g6f);for (var oetzas = 0x0; as9ezx > oetzas; oetzas++) {
      var xzs9ea = ahs9['getURI'](oetzas),
          lmin3 = ahs9['getValue'](oetzas),
          g64hp1 = ahs9['getQName'](oetzas),
          xa9e1 = vf6g4p['createAttributeNS'](xzs9ea, g64hp1);this['locator'] && zlv7inf(ahs9['getLocator'](oetzas), xa9e1), xa9e1['value'] = xa9e1['nodeValue'] = lmin3, h4g6f['setAttributeNode'](xa9e1);
    }
  }, 'endElement': function () {
    {
      var e9axsz = this['currentElement'];e9axsz['tagName'];
    }this['currentElement'] = e9axsz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hp9x1, k8r5b_) {
    var gp19x = this['doc']['createProcessingInstruction'](hp9x1, k8r5b_);this['locator'] && zlv7inf(this['locator'], gp19x), zky8bod(this, gp19x);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hp4g16) {
    if (hp4g16 = zykzotd['apply'](this, arguments)) {
      if (this['cdata']) var oytdkb = this['doc']['createCDATASection'](hp4g16);else var oytdkb = this['doc']['createTextNode'](hp4g16);this['currentElement'] ? this['currentElement']['appendChild'](oytdkb) : /^\s*$/['test'](hp4g16) && this['doc']['appendChild'](oytdkb), this['locator'] && zlv7inf(this['locator'], oytdkb);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (uw02_) {
    (this['locator'] = uw02_) && (uw02_['lineNumber'] = 0x0);
  }, 'comment': function (tzeaos) {
    tzeaos = zykzotd['apply'](this, arguments);var dtoeza = this['doc']['createComment'](tzeaos);this['locator'] && zlv7inf(this['locator'], dtoeza), zky8bod(this, dtoeza);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (invf, h9px1s, lnv7im) {
    var imq3j = this['doc']['implementation'];if (imq3j && imq3j['createDocumentType']) {
      var fn64v = imq3j['createDocumentType'](invf, h9px1s, lnv7im);this['locator'] && zlv7inf(this['locator'], fn64v), zky8bod(this, fn64v);
    }
  }, 'warning': function (p9hg1) {
    console['warn']('[xmldom warning]\t' + p9hg1, zhg91(this['locator']));
  }, 'error': function (tkdzo) {
    console['error']('[xmldom error]\t' + tkdzo, zhg91(this['locator']));
  }, 'fatalError': function (f4lvn) {
    throw console['error']('[xmldom fatalError]\t' + f4lvn, zhg91(this['locator'])), f4lvn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (n3qmi) {
  zwu_052['prototype'][n3qmi] = function () {
    return null;
  };
});var zotsaez = require('./zzczz')['XMLReader'],
    zmli37 = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zrbd8yk;