var b = wx.$e;
function ervzy(am_c) {
  this['options'] = am_c || { 'locator': {} };
}function ejuiqn(lzthrg, s69nku, i$jq3) {
  function v47af_(f4_vyz) {
    var suk96n = lzthrg[f4_vyz];!suk96n && grltzh && (suk96n = 0x2 == lzthrg['length'] ? function (pmca7o) {
      lzthrg(f4_vyz, pmca7o);
    } : lzthrg), zlry[f4_vyz] = suk96n && function (y74vf_) {
      suk96n('[xmldom ' + f4_vyz + ']\t' + y74vf_ + e_mca47(i$jq3));
    } || function () {};
  }if (!lzthrg) {
    if (s69nku instanceof esuq3n) return s69nku;lzthrg = s69nku;
  }var zlry = {},
      grltzh = lzthrg instanceof Function;return i$jq3 = i$jq3 || {}, v47af_('warning'), v47af_('error'), v47af_('fatalError'), zlry;
}function esuq3n() {
  this['cdata'] = !0x1;
}function ea47_vf(j3$ni, cam7po) {
  cam7po['lineNumber'] = j3$ni['lineNumber'], cam7po['columnNumber'] = j3$ni['columnNumber'];
}function e_mca47(lix$g) {
  return lix$g ? '\x0a@' + (lix$g['systemId'] || '') + '#[line:' + lix$g['lineNumber'] + ',col:' + lix$g['columnNumber'] + ']' : void 0x0;
}function ehtzlry(ji3x, b6d08, mva_47) {
  return 'string' == typeof ji3x ? ji3x['substr'](b6d08, mva_47) : ji3x['length'] >= b6d08 + mva_47 || b6d08 ? new java['lang']['String'](ji3x, b6d08, mva_47) + '' : ji3x;
}function ev4_f7y(xqj3$i, ac_4m) {
  xqj3$i['currentElement'] ? xqj3$i['currentElement']['appendChild'](ac_4m) : xqj3$i['doc']['appendChild'](ac_4m);
}ervzy['prototype']['parseFromString'] = function (fhrlzy, f4rzvy) {
  var m_7av4 = this['options'],
      cpeaom = new emv4_7a(),
      pmao = m_7av4['domBuilder'] || new esuq3n(),
      w0b8d5 = m_7av4['errorHandler'],
      rlfyz = m_7av4['locator'],
      a_o7c = m_7av4['xmlns'] || {},
      h$glx = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rlfyz && pmao['setDocumentLocator'](rlfyz), cpeaom['errorHandler'] = ejuiqn(w0b8d5, pmao, rlfyz), cpeaom['domBuilder'] = m_7av4['domBuilder'] || pmao, /\/x?html?$/['test'](f4rzvy) && (h$glx['nbsp'] = '\u00a0', h$glx['copy'] = '©', a_o7c[''] = 'http://www.w3.org/1999/xhtml'), a_o7c['xml'] = a_o7c['xml'] || 'http://www.w3.org/XML/1998/namespace', fhrlzy ? cpeaom['parse'](fhrlzy, a_o7c, h$glx) : cpeaom['errorHandler']['error']('invalid doc source'), pmao['doc'];
}, esuq3n['prototype'] = { 'startDocument': function () {
    this['doc'] = new einj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($litx, q3niu, bd609k, hrt) {
    var qns9k = this['doc'],
        ij$3gx = qns9k['createElementNS']($litx, bd609k || q3niu),
        qjn3i = hrt['length'];ev4_f7y(this, ij$3gx), this['currentElement'] = ij$3gx, this['locator'] && ea47_vf(this['locator'], ij$3gx);for (var gti$x = 0x0; qjn3i > gti$x; gti$x++) {
      var $litx = hrt['getURI'](gti$x),
          ltzrh = hrt['getValue'](gti$x),
          bd609k = hrt['getQName'](gti$x),
          $ixq3 = qns9k['createAttributeNS']($litx, bd609k);this['locator'] && ea47_vf(hrt['getLocator'](gti$x), $ixq3), $ixq3['value'] = $ixq3['nodeValue'] = ltzrh, ij$3gx['setAttributeNode']($ixq3);
    }
  }, 'endElement': function () {
    {
      var dw58 = this['currentElement'];dw58['tagName'];
    }this['currentElement'] = dw58['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (y_fv47, v4f7_y) {
    var $gil = this['doc']['createProcessingInstruction'](y_fv47, v4f7_y);this['locator'] && ea47_vf(this['locator'], $gil), ev4_f7y(this, $gil);
  }, 'ignorableWhitespace': function () {}, 'characters': function (moea) {
    if (moea = ehtzlry['apply'](this, arguments)) {
      if (this['cdata']) var acmo7p = this['doc']['createCDATASection'](moea);else var acmo7p = this['doc']['createTextNode'](moea);this['currentElement'] ? this['currentElement']['appendChild'](acmo7p) : /^\s*$/['test'](moea) && this['doc']['appendChild'](acmo7p), this['locator'] && ea47_vf(this['locator'], acmo7p);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hfzryl) {
    (this['locator'] = hfzryl) && (hfzryl['lineNumber'] = 0x0);
  }, 'comment': function (amcep) {
    amcep = ehtzlry['apply'](this, arguments);var i3nj = this['doc']['createComment'](amcep);this['locator'] && ea47_vf(this['locator'], i3nj), ev4_f7y(this, i3nj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (af7_v4, jx$3g, ghtxrl) {
    var lgrth = this['doc']['implementation'];if (lgrth && lgrth['createDocumentType']) {
      var ji$x = lgrth['createDocumentType'](af7_v4, jx$3g, ghtxrl);this['locator'] && ea47_vf(this['locator'], ji$x), ev4_f7y(this, ji$x);
    }
  }, 'warning': function (x3gi) {
    console['warn']('[xmldom warning]\t' + x3gi, e_mca47(this['locator']));
  }, 'error': function (q$j3ix) {
    console['error']('[xmldom error]\t' + q$j3ix, e_mca47(this['locator']));
  }, 'fatalError': function (sqku) {
    throw console['error']('[xmldom fatalError]\t' + sqku, e_mca47(this['locator'])), sqku;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (acepm) {
  esuq3n['prototype'][acepm] = function () {
    return null;
  };
});var emv4_7a = require('./eeesax')['XMLReader'],
    einj = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ervzy;