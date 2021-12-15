var B = wx.$B;
function Btl(inup) {
  this['options'] = inup || { 'locator': {} };
}function Bbkl4z9(gp7un, xq_$td, bzlv) {
  function x_0t(upeig) {
    var $ytx = gp7un[upeig];!$ytx && nuipe && ($ytx = 0x2 == gp7un['length'] ? function (uh7ngs) {
      gp7un(upeig, uh7ngs);
    } : gp7un), ewa32[upeig] = $ytx && function ($l04v) {
      $ytx('[xmldom ' + upeig + ']\t' + $l04v + Bv4zy(bzlv));
    } || function () {};
  }if (!gp7un) {
    if (xq_$td instanceof Bup2egi) return xq_$td;gp7un = xq_$td;
  }var ewa32 = {},
      nuipe = gp7un instanceof Function;return bzlv = bzlv || {}, x_0t('warning'), x_0t('error'), x_0t('fatalError'), ewa32;
}function Bup2egi() {
  this['cdata'] = !0x1;
}function Bshn76(a3ei2, yt) {
  yt['lineNumber'] = a3ei2['lineNumber'], yt['columnNumber'] = a3ei2['columnNumber'];
}function Bv4zy(snuh) {
  return snuh ? '\x0a@' + (snuh['systemId'] || '') + '#[line:' + snuh['lineNumber'] + ',col:' + snuh['columnNumber'] + ']' : void 0x0;
}function Brf58j1(z4lvk, k4z96b, f15rj8) {
  return 'string' == typeof z4lvk ? z4lvk['substr'](k4z96b, f15rj8) : z4lvk['length'] >= k4z96b + f15rj8 || k4z96b ? new java['lang']['String'](z4lvk, k4z96b, f15rj8) + '' : z4lvk;
}function Ba2ip(uns7, l04yzv) {
  uns7['currentElement'] ? uns7['currentElement']['appendChild'](l04yzv) : uns7['doc']['appendChild'](l04yzv);
}Btl['prototype']['parseFromString'] = function (ag2eip, awi8) {
  var l4v$ = this['options'],
      d_$xqt = new Bl40vz(),
      gnpeui = l4v$['domBuilder'] || new Bup2egi(),
      vzl4 = l4v$['errorHandler'],
      kzb6h9 = l4v$['locator'],
      ewia2p = l4v$['xmlns'] || {},
      hb96zk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kzb6h9 && gnpeui['setDocumentLocator'](kzb6h9), d_$xqt['errorHandler'] = Bbkl4z9(vzl4, gnpeui, kzb6h9), d_$xqt['domBuilder'] = l4v$['domBuilder'] || gnpeui, /\/x?html?$/['test'](awi8) && (hb96zk['nbsp'] = '\u00a0', hb96zk['copy'] = '©', ewia2p[''] = 'http://www.w3.org/1999/xhtml'), ewia2p['xml'] = ewia2p['xml'] || 'http://www.w3.org/XML/1998/namespace', ag2eip ? d_$xqt['parse'](ag2eip, ewia2p, hb96zk) : d_$xqt['errorHandler']['error']('invalid doc source'), gnpeui['doc'];
}, Bup2egi['prototype'] = { 'startDocument': function () {
    this['doc'] = new Beig2up()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (z4lv0y, r5mo, lvb4zk, ro51m) {
    var td$q = this['doc'],
        z69khb = td$q['createElementNS'](z4lv0y, lvb4zk || r5mo),
        hu7nsg = ro51m['length'];Ba2ip(this, z69khb), this['currentElement'] = z69khb, this['locator'] && Bshn76(this['locator'], z69khb);for (var awfr3 = 0x0; hu7nsg > awfr3; awfr3++) {
      var z4lv0y = ro51m['getURI'](awfr3),
          bzk9h = ro51m['getValue'](awfr3),
          lvb4zk = ro51m['getQName'](awfr3),
          f15mj = td$q['createAttributeNS'](z4lv0y, lvb4zk);this['locator'] && Bshn76(ro51m['getLocator'](awfr3), f15mj), f15mj['value'] = f15mj['nodeValue'] = bzk9h, z69khb['setAttributeNode'](f15mj);
    }
  }, 'endElement': function () {
    {
      var gpu7ns = this['currentElement'];gpu7ns['tagName'];
    }this['currentElement'] = gpu7ns['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (yxt$v, ewai3) {
    var npeus = this['doc']['createProcessingInstruction'](yxt$v, ewai3);this['locator'] && Bshn76(this['locator'], npeus), Ba2ip(this, npeus);
  }, 'ignorableWhitespace': function () {}, 'characters': function (v$yt) {
    if (v$yt = Brf58j1['apply'](this, arguments)) {
      if (this['cdata']) var sgh7 = this['doc']['createCDATASection'](v$yt);else var sgh7 = this['doc']['createTextNode'](v$yt);this['currentElement'] ? this['currentElement']['appendChild'](sgh7) : /^\s*$/['test'](v$yt) && this['doc']['appendChild'](sgh7), this['locator'] && Bshn76(this['locator'], sgh7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bvz) {
    (this['locator'] = bvz) && (bvz['lineNumber'] = 0x0);
  }, 'comment': function (f58j) {
    f58j = Brf58j1['apply'](this, arguments);var fr81j5 = this['doc']['createComment'](f58j);this['locator'] && Bshn76(this['locator'], fr81j5), Ba2ip(this, fr81j5);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_xt$d, ew3, r1moj) {
    var y0tv = this['doc']['implementation'];if (y0tv && y0tv['createDocumentType']) {
      var t_0$yx = y0tv['createDocumentType'](_xt$d, ew3, r1moj);this['locator'] && Bshn76(this['locator'], t_0$yx), Ba2ip(this, t_0$yx);
    }
  }, 'warning': function ($0_tyx) {
    console['warn']('[xmldom warning]\t' + $0_tyx, Bv4zy(this['locator']));
  }, 'error': function (h6un7s) {
    console['error']('[xmldom error]\t' + h6un7s, Bv4zy(this['locator']));
  }, 'fatalError': function (psnegu) {
    throw console['error']('[xmldom fatalError]\t' + psnegu, Bv4zy(this['locator'])), psnegu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (l4zvb) {
  Bup2egi['prototype'][l4zvb] = function () {
    return null;
  };
});var Bl40vz = require('./T5T5cT5T5')['XMLReader'],
    Beig2up = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Btl;