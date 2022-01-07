var m = wx.$g;
function got_f34(bip05) {
  this['options'] = bip05 || { 'locator': {} };
}function gixh(z263d, hxib5a, z2j$r6) {
  function i0b_5p(mu6) {
    var rd6o = z263d[mu6];!rd6o && hx1wa && (rd6o = 0x2 == z263d['length'] ? function (scgqv) {
      z263d(mu6, scgqv);
    } : z263d), z2r$[mu6] = rd6o && function (zrj$62) {
      rd6o('[xmldom ' + mu6 + ']\t' + zrj$62 + gy1ewkv(z2j$r6));
    } || function () {};
  }if (!z263d) {
    if (hxib5a instanceof gvqg7) return hxib5a;z263d = hxib5a;
  }var z2r$ = {},
      hx1wa = z263d instanceof Function;return z2j$r6 = z2j$r6 || {}, i0b_5p('warning'), i0b_5p('error'), i0b_5p('fatalError'), z2r$;
}function gvqg7() {
  this['cdata'] = !0x1;
}function gekvy7(ipb0a, ve7kyw) {
  ve7kyw['lineNumber'] = ipb0a['lineNumber'], ve7kyw['columnNumber'] = ipb0a['columnNumber'];
}function gy1ewkv(jm$6u) {
  return jm$6u ? '\x0a@' + (jm$6u['systemId'] || '') + '#[line:' + jm$6u['lineNumber'] + ',col:' + jm$6u['columnNumber'] + ']' : void 0x0;
}function go3t4dz(pt4f_0, fb_5, _of4t) {
  return 'string' == typeof pt4f_0 ? pt4f_0['substr'](fb_5, _of4t) : pt4f_0['length'] >= fb_5 + _of4t || fb_5 ? new java['lang']['String'](pt4f_0, fb_5, _of4t) + '' : pt4f_0;
}function gyh1kwe(j$m6ur, i5bp_) {
  j$m6ur['currentElement'] ? j$m6ur['currentElement']['appendChild'](i5bp_) : j$m6ur['doc']['appendChild'](i5bp_);
}got_f34['prototype']['parseFromString'] = function (lcqgs, q8gcs7) {
  var tp0f = this['options'],
      slc = new gb0f_p5(),
      $2rzj6 = tp0f['domBuilder'] || new gvqg7(),
      ywh1ek = tp0f['errorHandler'],
      p05_f = tp0f['locator'],
      vgcqe7 = tp0f['xmlns'] || {},
      t3dzo4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p05_f && $2rzj6['setDocumentLocator'](p05_f), slc['errorHandler'] = gixh(ywh1ek, $2rzj6, p05_f), slc['domBuilder'] = tp0f['domBuilder'] || $2rzj6, /\/x?html?$/['test'](q8gcs7) && (t3dzo4['nbsp'] = '\u00a0', t3dzo4['copy'] = '©', vgcqe7[''] = 'http://www.w3.org/1999/xhtml'), vgcqe7['xml'] = vgcqe7['xml'] || 'http://www.w3.org/XML/1998/namespace', lcqgs ? slc['parse'](lcqgs, vgcqe7, t3dzo4) : slc['errorHandler']['error']('invalid doc source'), $2rzj6['doc'];
}, gvqg7['prototype'] = { 'startDocument': function () {
    this['doc'] = new gveg7qy()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (f0t4_, ahi1x, jr2$z, dz42o3) {
    var u$m6rj = this['doc'],
        f40pt = u$m6rj['createElementNS'](f0t4_, jr2$z || ahi1x),
        q8g7c = dz42o3['length'];gyh1kwe(this, f40pt), this['currentElement'] = f40pt, this['locator'] && gekvy7(this['locator'], f40pt);for (var of4t_3 = 0x0; q8g7c > of4t_3; of4t_3++) {
      var f0t4_ = dz42o3['getURI'](of4t_3),
          _34tfo = dz42o3['getValue'](of4t_3),
          jr2$z = dz42o3['getQName'](of4t_3),
          $26 = u$m6rj['createAttributeNS'](f0t4_, jr2$z);this['locator'] && gekvy7(dz42o3['getLocator'](of4t_3), $26), $26['value'] = $26['nodeValue'] = _34tfo, f40pt['setAttributeNode']($26);
    }
  }, 'endElement': function () {
    {
      var bpi5 = this['currentElement'];bpi5['tagName'];
    }this['currentElement'] = bpi5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vk7yew, kh1axi) {
    var qlsg8 = this['doc']['createProcessingInstruction'](vk7yew, kh1axi);this['locator'] && gekvy7(this['locator'], qlsg8), gyh1kwe(this, qlsg8);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_tfp4) {
    if (_tfp4 = go3t4dz['apply'](this, arguments)) {
      if (this['cdata']) var wyh = this['doc']['createCDATASection'](_tfp4);else var wyh = this['doc']['createTextNode'](_tfp4);this['currentElement'] ? this['currentElement']['appendChild'](wyh) : /^\s*$/['test'](_tfp4) && this['doc']['appendChild'](wyh), this['locator'] && gekvy7(this['locator'], wyh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tf4_o) {
    (this['locator'] = tf4_o) && (tf4_o['lineNumber'] = 0x0);
  }, 'comment': function (y1vwk) {
    y1vwk = go3t4dz['apply'](this, arguments);var qs78gc = this['doc']['createComment'](y1vwk);this['locator'] && gekvy7(this['locator'], qs78gc), gyh1kwe(this, qs78gc);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hak1xw, fb50p_, ehkwy1) {
    var jur26 = this['doc']['implementation'];if (jur26 && jur26['createDocumentType']) {
      var kwh1ye = jur26['createDocumentType'](hak1xw, fb50p_, ehkwy1);this['locator'] && gekvy7(this['locator'], kwh1ye), gyh1kwe(this, kwh1ye);
    }
  }, 'warning': function (p0f_5) {
    console['warn']('[xmldom warning]\t' + p0f_5, gy1ewkv(this['locator']));
  }, 'error': function (_pf0t4) {
    console['error']('[xmldom error]\t' + _pf0t4, gy1ewkv(this['locator']));
  }, 'fatalError': function (ipaxb5) {
    throw console['error']('[xmldom fatalError]\t' + ipaxb5, gy1ewkv(this['locator'])), ipaxb5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ipb50) {
  gvqg7['prototype'][ipb50] = function () {
    return null;
  };
});var gb0f_p5 = require('./gggsax')['XMLReader'],
    gveg7qy = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = got_f34;