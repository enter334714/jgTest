var G = wx.$E;
function Ekd5i(ck5j6$) {
  this['options'] = ck5j6$ || { 'locator': {} };
}function Ei165j(t0_s32, bc47$m, phyg9) {
  function $j6c(wvaruq) {
    var urqah = t0_s32[wvaruq];!urqah && qug9ha && (urqah = 0x2 == t0_s32['length'] ? function (wv8f) {
      t0_s32(wvaruq, wv8f);
    } : t0_s32), c4mk[wvaruq] = urqah && function (dti1s) {
      urqah('[xmldom ' + wvaruq + ']\t' + dti1s + Et23s_(phyg9));
    } || function () {};
  }if (!t0_s32) {
    if (bc47$m instanceof Ei6dkj) return bc47$m;t0_s32 = bc47$m;
  }var c4mk = {},
      qug9ha = t0_s32 instanceof Function;return phyg9 = phyg9 || {}, $j6c('warning'), $j6c('error'), $j6c('fatalError'), c4mk;
}function Ei6dkj() {
  this['cdata'] = !0x1;
}function Emc47bf(aq9hug, $jk5d) {
  $jk5d['lineNumber'] = aq9hug['lineNumber'], $jk5d['columnNumber'] = aq9hug['columnNumber'];
}function Et23s_(nh9y) {
  return nh9y ? '\x0a@' + (nh9y['systemId'] || '') + '#[line:' + nh9y['lineNumber'] + ',col:' + nh9y['columnNumber'] + ']' : void 0x0;
}function Eb$4kc(b46$kc, _0ts3, m48b7f) {
  return 'string' == typeof b46$kc ? b46$kc['substr'](_0ts3, m48b7f) : b46$kc['length'] >= _0ts3 + m48b7f || _0ts3 ? new java['lang']['String'](b46$kc, _0ts3, m48b7f) + '' : b46$kc;
}function Ek5j$c(wmf78, j5_1i) {
  wmf78['currentElement'] ? wmf78['currentElement']['appendChild'](j5_1i) : wmf78['doc']['appendChild'](j5_1i);
}Ekd5i['prototype']['parseFromString'] = function (auwvrq, c5$64) {
  var w7vmf = this['options'],
      uwqa = new Erqva8w(),
      k56di = w7vmf['domBuilder'] || new Ei6dkj(),
      b46kc = w7vmf['errorHandler'],
      qr9ua = w7vmf['locator'],
      vqr9au = w7vmf['xmlns'] || {},
      pyhgu9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qr9ua && k56di['setDocumentLocator'](qr9ua), uwqa['errorHandler'] = Ei165j(b46kc, k56di, qr9ua), uwqa['domBuilder'] = w7vmf['domBuilder'] || k56di, /\/x?html?$/['test'](c5$64) && (pyhgu9['nbsp'] = '\u00a0', pyhgu9['copy'] = '©', vqr9au[''] = 'http://www.w3.org/1999/xhtml'), vqr9au['xml'] = vqr9au['xml'] || 'http://www.w3.org/XML/1998/namespace', auwvrq ? uwqa['parse'](auwvrq, vqr9au, pyhgu9) : uwqa['errorHandler']['error']('invalid doc source'), k56di['doc'];
}, Ei6dkj['prototype'] = { 'startDocument': function () {
    this['doc'] = new Ets2_13()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bm4k$c, lxypo, lxonpy, d6j5) {
    var _2s30 = this['doc'],
        d1t_is = _2s30['createElementNS'](bm4k$c, lxonpy || lxypo),
        wbf7 = d6j5['length'];Ek5j$c(this, d1t_is), this['currentElement'] = d1t_is, this['locator'] && Emc47bf(this['locator'], d1t_is);for (var mcb47 = 0x0; wbf7 > mcb47; mcb47++) {
      var bm4k$c = d6j5['getURI'](mcb47),
          uhq9ga = d6j5['getValue'](mcb47),
          lxonpy = d6j5['getQName'](mcb47),
          rv8qaw = _2s30['createAttributeNS'](bm4k$c, lxonpy);this['locator'] && Emc47bf(d6j5['getLocator'](mcb47), rv8qaw), rv8qaw['value'] = rv8qaw['nodeValue'] = uhq9ga, d1t_is['setAttributeNode'](rv8qaw);
    }
  }, 'endElement': function () {
    {
      var $7m4b = this['currentElement'];$7m4b['tagName'];
    }this['currentElement'] = $7m4b['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d65k, ck4$b6) {
    var t31_s = this['doc']['createProcessingInstruction'](d65k, ck4$b6);this['locator'] && Emc47bf(this['locator'], t31_s), Ek5j$c(this, t31_s);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sd_it) {
    if (sd_it = Eb$4kc['apply'](this, arguments)) {
      if (this['cdata']) var ugq9a = this['doc']['createCDATASection'](sd_it);else var ugq9a = this['doc']['createTextNode'](sd_it);this['currentElement'] ? this['currentElement']['appendChild'](ugq9a) : /^\s*$/['test'](sd_it) && this['doc']['appendChild'](ugq9a), this['locator'] && Emc47bf(this['locator'], ugq9a);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ugy9ph) {
    (this['locator'] = ugy9ph) && (ugy9ph['lineNumber'] = 0x0);
  }, 'comment': function (z02s3) {
    z02s3 = Eb$4kc['apply'](this, arguments);var w7mbf = this['doc']['createComment'](z02s3);this['locator'] && Emc47bf(this['locator'], w7mbf), Ek5j$c(this, w7mbf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (varq8w, xpolyn, $6k5j) {
    var n9p = this['doc']['implementation'];if (n9p && n9p['createDocumentType']) {
      var hu9pga = n9p['createDocumentType'](varq8w, xpolyn, $6k5j);this['locator'] && Emc47bf(this['locator'], hu9pga), Ek5j$c(this, hu9pga);
    }
  }, 'warning': function (bcmf74) {
    console['warn']('[xmldom warning]\t' + bcmf74, Et23s_(this['locator']));
  }, 'error': function (t320zs) {
    console['error']('[xmldom error]\t' + t320zs, Et23s_(this['locator']));
  }, 'fatalError': function (t03z2) {
    throw console['error']('[xmldom fatalError]\t' + t03z2, Et23s_(this['locator'])), t03z2;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (aphg) {
  Ei6dkj['prototype'][aphg] = function () {
    return null;
  };
});var Erqva8w = require('./DD88DD88cDD88DD88')['XMLReader'],
    Ets2_13 = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Ekd5i;