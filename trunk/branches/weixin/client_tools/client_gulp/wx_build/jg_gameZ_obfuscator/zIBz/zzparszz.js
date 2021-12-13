var B = wx.$z;
function zg461ph(kodzy) {
  this['options'] = kodzy || { 'locator': {} };
}function zjq$i3(zs, j$imq, spx91h) {
  function zsoae(ktodb) {
    var u5_r = zs[ktodb];!u5_r && ytzk && (u5_r = 0x2 == zs['length'] ? function (asezo) {
      zs(ktodb, asezo);
    } : zs), ahx1[ktodb] = u5_r && function (p1gh9x) {
      u5_r('[xmldom ' + ktodb + ']\t' + p1gh9x + znl73im(spx91h));
    } || function () {};
  }if (!zs) {
    if (j$imq instanceof zq$mi3) return j$imq;zs = j$imq;
  }var ahx1 = {},
      ytzk = zs instanceof Function;return spx91h = spx91h || {}, zsoae('warning'), zsoae('error'), zsoae('fatalError'), ahx1;
}function zq$mi3() {
  this['cdata'] = !0x1;
}function zbkyot(mq73$i, lm7n3i) {
  lm7n3i['lineNumber'] = mq73$i['lineNumber'], lm7n3i['columnNumber'] = mq73$i['columnNumber'];
}function znl73im(r_8yb) {
  return r_8yb ? '\x0a@' + (r_8yb['systemId'] || '') + '#[line:' + r_8yb['lineNumber'] + ',col:' + r_8yb['columnNumber'] + ']' : void 0x0;
}function zgp19h4(mvl7i, aext, xa19) {
  return 'string' == typeof mvl7i ? mvl7i['substr'](aext, xa19) : mvl7i['length'] >= aext + xa19 || aext ? new java['lang']['String'](mvl7i, aext, xa19) + '' : mvl7i;
}function zrdk8by(azs9x, dtkoy) {
  azs9x['currentElement'] ? azs9x['currentElement']['appendChild'](dtkoy) : azs9x['doc']['appendChild'](dtkoy);
}zg461ph['prototype']['parseFromString'] = function (dykz, tbdkyo) {
  var kdbry = this['options'],
      xasezt = new zmnl7v(),
      rd8bky = kdbry['domBuilder'] || new zq$mi3(),
      m37inq = kdbry['errorHandler'],
      rk8dyb = kdbry['locator'],
      _8r5b2 = kdbry['xmlns'] || {},
      f4vp6g = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rk8dyb && rd8bky['setDocumentLocator'](rk8dyb), xasezt['errorHandler'] = zjq$i3(m37inq, rd8bky, rk8dyb), xasezt['domBuilder'] = kdbry['domBuilder'] || rd8bky, /\/x?html?$/['test'](tbdkyo) && (f4vp6g['nbsp'] = '\u00a0', f4vp6g['copy'] = '©', _8r5b2[''] = 'http://www.w3.org/1999/xhtml'), _8r5b2['xml'] = _8r5b2['xml'] || 'http://www.w3.org/XML/1998/namespace', dykz ? xasezt['parse'](dykz, _8r5b2, f4vp6g) : xasezt['errorHandler']['error']('invalid doc source'), rd8bky['doc'];
}, zq$mi3['prototype'] = { 'startDocument': function () {
    this['doc'] = new zvl4n6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (kbd8ry, tsx, xsea91, r_b285) {
    var a9hs = this['doc'],
        b_8r2 = a9hs['createElementNS'](kbd8ry, xsea91 || tsx),
        j$qi3m = r_b285['length'];zrdk8by(this, b_8r2), this['currentElement'] = b_8r2, this['locator'] && zbkyot(this['locator'], b_8r2);for (var v76f = 0x0; j$qi3m > v76f; v76f++) {
      var kbd8ry = r_b285['getURI'](v76f),
          jmi3$ = r_b285['getValue'](v76f),
          xsea91 = r_b285['getQName'](v76f),
          br_825 = a9hs['createAttributeNS'](kbd8ry, xsea91);this['locator'] && zbkyot(r_b285['getLocator'](v76f), br_825), br_825['value'] = br_825['nodeValue'] = jmi3$, b_8r2['setAttributeNode'](br_825);
    }
  }, 'endElement': function () {
    {
      var m$37i = this['currentElement'];m$37i['tagName'];
    }this['currentElement'] = m$37i['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rk85_b, u_58r) {
    var b5k_ = this['doc']['createProcessingInstruction'](rk85_b, u_58r);this['locator'] && zbkyot(this['locator'], b5k_), zrdk8by(this, b5k_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (iqm$73) {
    if (iqm$73 = zgp19h4['apply'](this, arguments)) {
      if (this['cdata']) var tazsx = this['doc']['createCDATASection'](iqm$73);else var tazsx = this['doc']['createTextNode'](iqm$73);this['currentElement'] ? this['currentElement']['appendChild'](tazsx) : /^\s*$/['test'](iqm$73) && this['doc']['appendChild'](tazsx), this['locator'] && zbkyot(this['locator'], tazsx);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (toasez) {
    (this['locator'] = toasez) && (toasez['lineNumber'] = 0x0);
  }, 'comment': function (tkod) {
    tkod = zgp19h4['apply'](this, arguments);var h9spx1 = this['doc']['createComment'](tkod);this['locator'] && zbkyot(this['locator'], h9spx1), zrdk8by(this, h9spx1);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v7mil, i$m3jq, u825r) {
    var edzoa = this['doc']['implementation'];if (edzoa && edzoa['createDocumentType']) {
      var fv64ln = edzoa['createDocumentType'](v7mil, i$m3jq, u825r);this['locator'] && zbkyot(this['locator'], fv64ln), zrdk8by(this, fv64ln);
    }
  }, 'warning': function (uw0_52) {
    console['warn']('[xmldom warning]\t' + uw0_52, znl73im(this['locator']));
  }, 'error': function (yobd) {
    console['error']('[xmldom error]\t' + yobd, znl73im(this['locator']));
  }, 'fatalError': function (r_852b) {
    throw console['error']('[xmldom fatalError]\t' + r_852b, znl73im(this['locator'])), r_852b;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (g64p1h) {
  zq$mi3['prototype'][g64p1h] = function () {
    return null;
  };
});var zmnl7v = require('./zzczz')['XMLReader'],
    zvl4n6 = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zg461ph;