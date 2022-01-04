var Q = wx.$v;
function vwebu(kv57px) {
  this['options'] = kv57px || { 'locator': {} };
}function vbxewg($o3t4n, zlu, z1y_) {
  function vqgxwp($t43no) {
    var wg5vp = $o3t4n[$t43no];!wg5vp && frsi && (wg5vp = 0x2 == $o3t4n['length'] ? function ($sf9i) {
      $o3t4n($t43no, $sf9i);
    } : $o3t4n), i$[$t43no] = wg5vp && function (rsf9i$) {
      wg5vp('[xmldom ' + $t43no + ']\t' + rsf9i$ + vt243_n(z1y_));
    } || function () {};
  }if (!$o3t4n) {
    if (zlu instanceof v$o4s3n) return zlu;$o3t4n = zlu;
  }var i$ = {},
      frsi = $o3t4n instanceof Function;return z1y_ = z1y_ || {}, vqgxwp('warning'), vqgxwp('error'), vqgxwp('fatalError'), i$;
}function v$o4s3n() {
  this['cdata'] = !0x1;
}function vfir$9(wqebg, pvxg57) {
  pvxg57['lineNumber'] = wqebg['lineNumber'], pvxg57['columnNumber'] = wqebg['columnNumber'];
}function vt243_n(bueql8) {
  return bueql8 ? '\x0a@' + (bueql8['systemId'] || '') + '#[line:' + bueql8['lineNumber'] + ',col:' + bueql8['columnNumber'] + ']' : void 0x0;
}function vwqgpxv(g7xv5p, dcm0, dmck0) {
  return 'string' == typeof g7xv5p ? g7xv5p['substr'](dcm0, dmck0) : g7xv5p['length'] >= dcm0 + dmck0 || dcm0 ? new java['lang']['String'](g7xv5p, dcm0, dmck0) + '' : g7xv5p;
}function vsn4(pgwq, hzl6y) {
  pgwq['currentElement'] ? pgwq['currentElement']['appendChild'](hzl6y) : pgwq['doc']['appendChild'](hzl6y);
}vwebu['prototype']['parseFromString'] = function (_h2y61, dmj0ac) {
  var bgxweq = this['options'],
      h2y1_6 = new v_132n(),
      l61yzh = bgxweq['domBuilder'] || new v$o4s3n(),
      le8bz = bgxweq['errorHandler'],
      h12y_ = bgxweq['locator'],
      $4nso3 = bgxweq['xmlns'] || {},
      _tn243 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h12y_ && l61yzh['setDocumentLocator'](h12y_), h2y1_6['errorHandler'] = vbxewg(le8bz, l61yzh, h12y_), h2y1_6['domBuilder'] = bgxweq['domBuilder'] || l61yzh, /\/x?html?$/['test'](dmj0ac) && (_tn243['nbsp'] = '\u00a0', _tn243['copy'] = '©', $4nso3[''] = 'http://www.w3.org/1999/xhtml'), $4nso3['xml'] = $4nso3['xml'] || 'http://www.w3.org/XML/1998/namespace', _h2y61 ? h2y1_6['parse'](_h2y61, $4nso3, _tn243) : h2y1_6['errorHandler']['error']('invalid doc source'), l61yzh['doc'];
}, v$o4s3n['prototype'] = { 'startDocument': function () {
    this['doc'] = new vyu6zl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i4os3, fio$s4, h1zy, km5c) {
    var ewgpxq = this['doc'],
        lz86bu = ewgpxq['createElementNS'](i4os3, h1zy || fio$s4),
        s9$irf = km5c['length'];vsn4(this, lz86bu), this['currentElement'] = lz86bu, this['locator'] && vfir$9(this['locator'], lz86bu);for (var jckdm = 0x0; s9$irf > jckdm; jckdm++) {
      var i4os3 = km5c['getURI'](jckdm),
          que8 = km5c['getValue'](jckdm),
          h1zy = km5c['getQName'](jckdm),
          h2nt_ = ewgpxq['createAttributeNS'](i4os3, h1zy);this['locator'] && vfir$9(km5c['getLocator'](jckdm), h2nt_), h2nt_['value'] = h2nt_['nodeValue'] = que8, lz86bu['setAttributeNode'](h2nt_);
    }
  }, 'endElement': function () {
    {
      var djac = this['currentElement'];djac['tagName'];
    }this['currentElement'] = djac['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tn4o3, hul6z) {
    var cjmd0a = this['doc']['createProcessingInstruction'](tn4o3, hul6z);this['locator'] && vfir$9(this['locator'], cjmd0a), vsn4(this, cjmd0a);
  }, 'ignorableWhitespace': function () {}, 'characters': function (uz68ly) {
    if (uz68ly = vwqgpxv['apply'](this, arguments)) {
      if (this['cdata']) var p5v07k = this['doc']['createCDATASection'](uz68ly);else var p5v07k = this['doc']['createTextNode'](uz68ly);this['currentElement'] ? this['currentElement']['appendChild'](p5v07k) : /^\s*$/['test'](uz68ly) && this['doc']['appendChild'](p5v07k), this['locator'] && vfir$9(this['locator'], p5v07k);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (uq8ew) {
    (this['locator'] = uq8ew) && (uq8ew['lineNumber'] = 0x0);
  }, 'comment': function (_y12th) {
    _y12th = vwqgpxv['apply'](this, arguments);var xbeg = this['doc']['createComment'](_y12th);this['locator'] && vfir$9(this['locator'], xbeg), vsn4(this, xbeg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($s4foi, t2n4_3, vw5gx) {
    var fi4os$ = this['doc']['implementation'];if (fi4os$ && fi4os$['createDocumentType']) {
      var yul8z = fi4os$['createDocumentType']($s4foi, t2n4_3, vw5gx);this['locator'] && vfir$9(this['locator'], yul8z), vsn4(this, yul8z);
    }
  }, 'warning': function (dk0jc) {
    console['warn']('[xmldom warning]\t' + dk0jc, vt243_n(this['locator']));
  }, 'error': function (yh61z_) {
    console['error']('[xmldom error]\t' + yh61z_, vt243_n(this['locator']));
  }, 'fatalError': function (_1htn) {
    throw console['error']('[xmldom fatalError]\t' + _1htn, vt243_n(this['locator'])), _1htn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a0cjdm) {
  v$o4s3n['prototype'][a0cjdm] = function () {
    return null;
  };
});var v_132n = require('./vv12vv')['XMLReader'],
    vyu6zl = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vwebu;