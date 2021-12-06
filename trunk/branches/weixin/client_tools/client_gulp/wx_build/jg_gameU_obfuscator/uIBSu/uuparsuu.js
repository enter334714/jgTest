var o = wx.$U;
function ulo7qw(sank) {
  this['options'] = sank || { 'locator': {} };
}function ujm3hp(e$vs_n, pj3u4f, wzgd7) {
  function rka6_c(_vskna) {
    var zt5dg9 = e$vs_n[_vskna];!zt5dg9 && d9z5tg && (zt5dg9 = 0x2 == e$vs_n['length'] ? function (hjio3) {
      e$vs_n(_vskna, hjio3);
    } : e$vs_n), $eufns[_vskna] = zt5dg9 && function (oji3mh) {
      zt5dg9('[xmldom ' + _vskna + ']\t' + oji3mh + uqxim(wzgd7));
    } || function () {};
  }if (!e$vs_n) {
    if (pj3u4f instanceof uva_ck6) return pj3u4f;e$vs_n = pj3u4f;
  }var $eufns = {},
      d9z5tg = e$vs_n instanceof Function;return wzgd7 = wzgd7 || {}, rka6_c('warning'), rka6_c('error'), rka6_c('fatalError'), $eufns;
}function uva_ck6() {
  this['cdata'] = !0x1;
}function unkv_$s(nv$_es, ckr6_) {
  ckr6_['lineNumber'] = nv$_es['lineNumber'], ckr6_['columnNumber'] = nv$_es['columnNumber'];
}function uqxim(mxoil) {
  return mxoil ? '\x0a@' + (mxoil['systemId'] || '') + '#[line:' + mxoil['lineNumber'] + ',col:' + mxoil['columnNumber'] + ']' : void 0x0;
}function ug9z7xw(_asknv, wqgx7, zw79d) {
  return 'string' == typeof _asknv ? _asknv['substr'](wqgx7, zw79d) : _asknv['length'] >= wqgx7 + zw79d || wqgx7 ? new java['lang']['String'](_asknv, wqgx7, zw79d) + '' : _asknv;
}function urka6c_(c6ra0, br10c8) {
  c6ra0['currentElement'] ? c6ra0['currentElement']['appendChild'](br10c8) : c6ra0['doc']['appendChild'](br10c8);
}ulo7qw['prototype']['parseFromString'] = function (dgzw95, $fusne) {
  var asnvk = this['options'],
      tgzd95 = new uuf3ep(),
      ne$us = asnvk['domBuilder'] || new uva_ck6(),
      iloxmq = asnvk['errorHandler'],
      wd9z = asnvk['locator'],
      b0yr8 = asnvk['xmlns'] || {},
      g9w7zd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wd9z && ne$us['setDocumentLocator'](wd9z), tgzd95['errorHandler'] = ujm3hp(iloxmq, ne$us, wd9z), tgzd95['domBuilder'] = asnvk['domBuilder'] || ne$us, /\/x?html?$/['test']($fusne) && (g9w7zd['nbsp'] = '\u00a0', g9w7zd['copy'] = '©', b0yr8[''] = 'http://www.w3.org/1999/xhtml'), b0yr8['xml'] = b0yr8['xml'] || 'http://www.w3.org/XML/1998/namespace', dgzw95 ? tgzd95['parse'](dgzw95, b0yr8, g9w7zd) : tgzd95['errorHandler']['error']('invalid doc source'), ne$us['doc'];
}, uva_ck6['prototype'] = { 'startDocument': function () {
    this['doc'] = new uas_knv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (up$4ef, phj3m4, j4fh3p, ka_sv) {
    var h3jmp = this['doc'],
        gd9z5t = h3jmp['createElementNS'](up$4ef, j4fh3p || phj3m4),
        avsk_n = ka_sv['length'];urka6c_(this, gd9z5t), this['currentElement'] = gd9z5t, this['locator'] && unkv_$s(this['locator'], gd9z5t);for (var r08a = 0x0; avsk_n > r08a; r08a++) {
      var up$4ef = ka_sv['getURI'](r08a),
          x9l7g = ka_sv['getValue'](r08a),
          j4fh3p = ka_sv['getQName'](r08a),
          hqlomi = h3jmp['createAttributeNS'](up$4ef, j4fh3p);this['locator'] && unkv_$s(ka_sv['getLocator'](r08a), hqlomi), hqlomi['value'] = hqlomi['nodeValue'] = x9l7g, gd9z5t['setAttributeNode'](hqlomi);
    }
  }, 'endElement': function () {
    {
      var gw59d = this['currentElement'];gw59d['tagName'];
    }this['currentElement'] = gw59d['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (s$veu, r8610) {
    var mlqoi = this['doc']['createProcessingInstruction'](s$veu, r8610);this['locator'] && unkv_$s(this['locator'], mlqoi), urka6c_(this, mlqoi);
  }, 'ignorableWhitespace': function () {}, 'characters': function (milox) {
    if (milox = ug9z7xw['apply'](this, arguments)) {
      if (this['cdata']) var kr6ac_ = this['doc']['createCDATASection'](milox);else var kr6ac_ = this['doc']['createTextNode'](milox);this['currentElement'] ? this['currentElement']['appendChild'](kr6ac_) : /^\s*$/['test'](milox) && this['doc']['appendChild'](kr6ac_), this['locator'] && unkv_$s(this['locator'], kr6ac_);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nsve_$) {
    (this['locator'] = nsve_$) && (nsve_$['lineNumber'] = 0x0);
  }, 'comment': function (esv$un) {
    esv$un = ug9z7xw['apply'](this, arguments);var fsuen = this['doc']['createComment'](esv$un);this['locator'] && unkv_$s(this['locator'], fsuen), urka6c_(this, fsuen);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (z9wg5, fep3, zdtg59) {
    var gw7dz9 = this['doc']['implementation'];if (gw7dz9 && gw7dz9['createDocumentType']) {
      var m4ihj3 = gw7dz9['createDocumentType'](z9wg5, fep3, zdtg59);this['locator'] && unkv_$s(this['locator'], m4ihj3), urka6c_(this, m4ihj3);
    }
  }, 'warning': function (qmojih) {
    console['warn']('[xmldom warning]\t' + qmojih, uqxim(this['locator']));
  }, 'error': function (un$fse) {
    console['error']('[xmldom error]\t' + un$fse, uqxim(this['locator']));
  }, 'fatalError': function ($skn_v) {
    throw console['error']('[xmldom fatalError]\t' + $skn_v, uqxim(this['locator'])), $skn_v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qjhi) {
  uva_ck6['prototype'][qjhi] = function () {
    return null;
  };
});var uuf3ep = require('./uu12uu')['XMLReader'],
    uas_knv = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = ulo7qw;