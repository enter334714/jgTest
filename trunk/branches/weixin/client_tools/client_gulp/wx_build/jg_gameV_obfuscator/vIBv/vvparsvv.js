var Q = wx.$v;
function vbe8lq(qwbeg8) {
  this['options'] = qwbeg8 || { 'locator': {} };
}function vi$f4so(qegbw8, bzeu8l, t2_h) {
  function d0cjm(vpg75x) {
    var dac0m = qegbw8[vpg75x];!dac0m && wpxg && (dac0m = 0x2 == qegbw8['length'] ? function ($is9o) {
      qegbw8(vpg75x, $is9o);
    } : qegbw8), z_6h[vpg75x] = dac0m && function (wqeub8) {
      dac0m('[xmldom ' + vpg75x + ']\t' + wqeub8 + vwvgqx(t2_h));
    } || function () {};
  }if (!qegbw8) {
    if (bzeu8l instanceof vh_nt21) return bzeu8l;qegbw8 = bzeu8l;
  }var z_6h = {},
      wpxg = qegbw8 instanceof Function;return t2_h = t2_h || {}, d0cjm('warning'), d0cjm('error'), d0cjm('fatalError'), z_6h;
}function vh_nt21() {
  this['cdata'] = !0x1;
}function vbxwqe(yluz68, h_162y) {
  h_162y['lineNumber'] = yluz68['lineNumber'], h_162y['columnNumber'] = yluz68['columnNumber'];
}function vwvgqx(vk5) {
  return vk5 ? '\x0a@' + (vk5['systemId'] || '') + '#[line:' + vk5['lineNumber'] + ',col:' + vk5['columnNumber'] + ']' : void 0x0;
}function vuz6lhy(cdmk70, ton$43, be8uzl) {
  return 'string' == typeof cdmk70 ? cdmk70['substr'](ton$43, be8uzl) : cdmk70['length'] >= ton$43 + be8uzl || ton$43 ? new java['lang']['String'](cdmk70, ton$43, be8uzl) + '' : cdmk70;
}function vzblue8(wpx5vg, n2t1_) {
  wpx5vg['currentElement'] ? wpx5vg['currentElement']['appendChild'](n2t1_) : wpx5vg['doc']['appendChild'](n2t1_);
}vbe8lq['prototype']['parseFromString'] = function (qpvg, $sr9f) {
  var ri$fs9 = this['options'],
      t_21n3 = new vbqxgew(),
      tn$4o3 = ri$fs9['domBuilder'] || new vh_nt21(),
      t4_n23 = ri$fs9['errorHandler'],
      d0k7cm = ri$fs9['locator'],
      $son43 = ri$fs9['xmlns'] || {},
      _t21n = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return d0k7cm && tn$4o3['setDocumentLocator'](d0k7cm), t_21n3['errorHandler'] = vi$f4so(t4_n23, tn$4o3, d0k7cm), t_21n3['domBuilder'] = ri$fs9['domBuilder'] || tn$4o3, /\/x?html?$/['test']($sr9f) && (_t21n['nbsp'] = '\u00a0', _t21n['copy'] = '©', $son43[''] = 'http://www.w3.org/1999/xhtml'), $son43['xml'] = $son43['xml'] || 'http://www.w3.org/XML/1998/namespace', qpvg ? t_21n3['parse'](qpvg, $son43, _t21n) : t_21n3['errorHandler']['error']('invalid doc source'), tn$4o3['doc'];
}, vh_nt21['prototype'] = { 'startDocument': function () {
    this['doc'] = new vxgwb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_t2h1n, yh16l, t1h2n, dkmc70) {
    var vc57k = this['doc'],
        c705 = vc57k['createElementNS'](_t2h1n, t1h2n || yh16l),
        n4o2t = dkmc70['length'];vzblue8(this, c705), this['currentElement'] = c705, this['locator'] && vbxwqe(this['locator'], c705);for (var xvp75k = 0x0; n4o2t > xvp75k; xvp75k++) {
      var _t2h1n = dkmc70['getURI'](xvp75k),
          eqpgw = dkmc70['getValue'](xvp75k),
          t1h2n = dkmc70['getQName'](xvp75k),
          dcj = vc57k['createAttributeNS'](_t2h1n, t1h2n);this['locator'] && vbxwqe(dkmc70['getLocator'](xvp75k), dcj), dcj['value'] = dcj['nodeValue'] = eqpgw, c705['setAttributeNode'](dcj);
    }
  }, 'endElement': function () {
    {
      var kmc0j = this['currentElement'];kmc0j['tagName'];
    }this['currentElement'] = kmc0j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wpgeq, xkp75) {
    var ebg8 = this['doc']['createProcessingInstruction'](wpgeq, xkp75);this['locator'] && vbxwqe(this['locator'], ebg8), vzblue8(this, ebg8);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($fi9r) {
    if ($fi9r = vuz6lhy['apply'](this, arguments)) {
      if (this['cdata']) var x5wpg = this['doc']['createCDATASection']($fi9r);else var x5wpg = this['doc']['createTextNode']($fi9r);this['currentElement'] ? this['currentElement']['appendChild'](x5wpg) : /^\s*$/['test']($fi9r) && this['doc']['appendChild'](x5wpg), this['locator'] && vbxwqe(this['locator'], x5wpg);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (i$fos) {
    (this['locator'] = i$fos) && (i$fos['lineNumber'] = 0x0);
  }, 'comment': function (ly68u) {
    ly68u = vuz6lhy['apply'](this, arguments);var so3$n4 = this['doc']['createComment'](ly68u);this['locator'] && vbxwqe(this['locator'], so3$n4), vzblue8(this, so3$n4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (b8we, cmd70, gvx57) {
    var gx7pv5 = this['doc']['implementation'];if (gx7pv5 && gx7pv5['createDocumentType']) {
      var s9$ri = gx7pv5['createDocumentType'](b8we, cmd70, gvx57);this['locator'] && vbxwqe(this['locator'], s9$ri), vzblue8(this, s9$ri);
    }
  }, 'warning': function (osi34) {
    console['warn']('[xmldom warning]\t' + osi34, vwvgqx(this['locator']));
  }, 'error': function (iofs$) {
    console['error']('[xmldom error]\t' + iofs$, vwvgqx(this['locator']));
  }, 'fatalError': function (y_2h1) {
    throw console['error']('[xmldom fatalError]\t' + y_2h1, vwvgqx(this['locator'])), y_2h1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cv7k5) {
  vh_nt21['prototype'][cv7k5] = function () {
    return null;
  };
});var vbqxgew = require('./vv12vv')['XMLReader'],
    vxgwb = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vbe8lq;