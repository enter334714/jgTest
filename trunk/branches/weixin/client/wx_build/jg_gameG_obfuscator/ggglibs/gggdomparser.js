var m = wx.$g;
function giy1hbw(l0cp) {
  this['options'] = l0cp || { 'locator': {} };
}function gw4vea(ejt3, $fi_rs, qmutxj) {
  function r8(kglzp) {
    var ay4dh = ejt3[kglzp];!ay4dh && h4bdy && (ay4dh = 0x2 == ejt3['length'] ? function (lzp8) {
      ejt3(kglzp, lzp8);
    } : ejt3), vade4[kglzp] = ay4dh ? function (z8fgks) {
      ay4dh('[xmldom ' + kglzp + ']\t' + z8fgks + gzsgkf(qmutxj));
    } : function () {};
  }if (!ejt3) {
    if ($fi_rs instanceof gf_$g) return $fi_rs;ejt3 = $fi_rs;
  }var vade4 = {},
      h4bdy = ejt3 instanceof Function;return qmutxj = qmutxj || {}, r8('warning'), r8('error'), r8('fatalError'), vade4;
}function gf_$g() {
  this['cdata'] = !0x1;
}function gyiw1h(ywbh1i, a4e3d) {
  a4e3d['lineNumber'] = ywbh1i['lineNumber'], a4e3d['columnNumber'] = ywbh1i['columnNumber'];
}function gzsgkf(qjmt3) {
  return qjmt3 ? '\x0a@' + (qjmt3['systemId'] || '') + '#[line:' + qjmt3['lineNumber'] + ',col:' + qjmt3['columnNumber'] + ']' : void 0x0;
}function gplzk5g(mv3dae, h1yibr, zs8gf$) {
  return 'string' == typeof mv3dae ? mv3dae['substr'](h1yibr, zs8gf$) : mv3dae['length'] >= h1yibr + zs8gf$ || h1yibr ? new java['lang']['String'](mv3dae, h1yibr, zs8gf$) + '' : mv3dae;
}function gfsz8k(umtqx, oc0962) {
  (umtqx['currentElement'] || umtqx['doc'])['appendChild'](oc0962);
}giy1hbw['prototype']['parseFromString'] = function ($_ifr, si$1_r) {
  var yih1wb = this['options'],
      ribyh1 = new g$zfg8(),
      s8gkfz = yih1wb['domBuilder'] || new gf_$g(),
      amte = yih1wb['errorHandler'],
      qtvj3 = yih1wb['locator'],
      y1rih = yih1wb['xmlns'] || {},
      s$z8f = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qtvj3 && s8gkfz['setDocumentLocator'](qtvj3), ribyh1['errorHandler'] = gw4vea(amte, s8gkfz, qtvj3), ribyh1['domBuilder'] = yih1wb['domBuilder'] || s8gkfz, /\/x?html?$/['test'](si$1_r) && (s$z8f['nbsp'] = '\u00a0', s$z8f['copy'] = '©', y1rih[''] = 'http://www.w3.org/1999/xhtml'), y1rih['xml'] = y1rih['xml'] || 'http://www.w3.org/XML/1998/namespace', $_ifr ? ribyh1['parse']($_ifr, y1rih, s$z8f) : ribyh1['errorHandler']['error']('invalid doc source'), s8gkfz['doc'];
}, gf_$g['prototype'] = { 'startDocument': function () {
    this['doc'] = new g$gzf8s()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hbiwy, cl02, mq3jvt, tq3vjm) {
    var pzgl5k = this['doc'],
        k5zc = pzgl5k['createElementNS'](hbiwy, mq3jvt || cl02),
        r1_s$i = tq3vjm['length'];gfsz8k(this, k5zc), this['currentElement'] = k5zc, this['locator'] && gyiw1h(this['locator'], k5zc);for (var haydw = 0x0; haydw < r1_s$i; haydw++) {
      var hbiwy = tq3vjm['getURI'](haydw),
          ir_1hb = tq3vjm['getValue'](haydw),
          mq3jvt = tq3vjm['getQName'](haydw),
          vedaw4 = pzgl5k['createAttributeNS'](hbiwy, mq3jvt);this['locator'] && gyiw1h(tq3vjm['getLocator'](haydw), vedaw4), vedaw4['value'] = vedaw4['nodeValue'] = ir_1hb, k5zc['setAttributeNode'](vedaw4);
    }
  }, 'endElement': function () {
    var tvm3ae = this['currentElement'];tvm3ae['tagName'], this['currentElement'] = tvm3ae['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (y1ri, aydw4) {
    aydw4 = this['doc']['createProcessingInstruction'](y1ri, aydw4), (this['locator'] && gyiw1h(this['locator'], aydw4), gfsz8k(this, aydw4));
  }, 'ignorableWhitespace': function () {}, 'characters': function (qtmj3u) {
    var bhywi;(qtmj3u = gplzk5g['apply'](this, arguments)) && (bhywi = this['cdata'] ? this['doc']['createCDATASection'](qtmj3u) : this['doc']['createTextNode'](qtmj3u), this['currentElement'] ? this['currentElement']['appendChild'](bhywi) : /^\s*$/['test'](qtmj3u) && this['doc']['appendChild'](bhywi), this['locator'] && gyiw1h(this['locator'], bhywi));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (meavd) {
    (this['locator'] = meavd) && (meavd['lineNumber'] = 0x0);
  }, 'comment': function (am3dev) {
    am3dev = gplzk5g['apply'](this, arguments);var rfis$_ = this['doc']['createComment'](am3dev);this['locator'] && gyiw1h(this['locator'], rfis$_), gfsz8k(this, rfis$_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (wybh1i, h1_r, c095pl) {
    var zfsk8g = this['doc']['implementation'];zfsk8g && zfsk8g['createDocumentType'] && (c095pl = zfsk8g['createDocumentType'](wybh1i, h1_r, c095pl), this['locator'] && gyiw1h(this['locator'], c095pl), gfsz8k(this, c095pl));
  }, 'warning': function (cp9k5l) {
    console['warn']('[xmldom warning]\t' + cp9k5l, gzsgkf(this['locator']));
  }, 'error': function (ea3mvt) {
    console['error']('[xmldom error]\t' + ea3mvt, gzsgkf(this['locator']));
  }, 'fatalError': function (s_$r1i) {
    throw console['error']('[xmldom fatalError]\t' + s_$r1i, gzsgkf(this['locator'])), s_$r1i;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (aydwe) {
  gf_$g['prototype'][aydwe] = function () {
    return null;
  };
});var g$zfg8 = require('./gggsax')['XMLReader'],
    g$gzf8s = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = giy1hbw;