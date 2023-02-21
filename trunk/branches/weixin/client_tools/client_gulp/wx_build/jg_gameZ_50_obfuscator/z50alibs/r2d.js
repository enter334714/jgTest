var b = wx.$e;
function enwzh1(c_i$l) {
    this['options'] = c_i$l || { 'locator': {} };
}
function eox57u(u87or, pn, h6nws2) {
    function yvjg2a(jfayvg) {
        var k5r7ou = u87or[jfayvg];
        !k5r7ou && _c$lim && (k5r7ou = 0x2 == u87or['length'] ? function (tok5r) {
            u87or(jfayvg, tok5r);
        } : u87or), cm$4i[jfayvg] = k5r7ou && function (tgv) {
            k5r7ou('[xmldom ' + jfayvg + ']\t' + tgv + eci$m3(h6nws2));
        } || function () {};
    }
    if (!u87or) {
        if (pn instanceof easjvy2) return pn;
        u87or = pn;
    }
    var cm$4i = {},
        _c$lim = u87or instanceof Function;
    return h6nws2 = h6nws2 || {}, yvjg2a('warning'), yvjg2a('error'), yvjg2a('fatalError'), cm$4i;
}
function easjvy2() {
    this['cdata'] = !0x1;
}
function eo98urx(jgvafy, i4c) {
    i4c['lineNumber'] = jgvafy['lineNumber'], i4c['columnNumber'] = jgvafy['columnNumber'];
}
function eci$m3(rou89x) {
    return rou89x ? '\x0a@' + (rou89x['systemId'] || '') + '#[line:' + rou89x['lineNumber'] + ',col:' + rou89x['columnNumber'] + ']' : void 0x0;
}
function eagvfbt(wnze, x9ur8d, as2vy) {
    return 'string' == typeof wnze ? wnze['substr'](x9ur8d, as2vy) : wnze['length'] >= x9ur8d + as2vy || x9ur8d ? new java['lang']['String'](wnze, x9ur8d, as2vy) + '' : wnze;
}
function el$0d_m(n2h6w, d$lm_0) {
    n2h6w['currentElement'] ? n2h6w['currentElement']['appendChild'](d$lm_0) : n2h6w['doc']['appendChild'](d$lm_0);
}
enwzh1['prototype']['parseFromString'] = function (_ml0$, wenhz1) {
    var ort75 = this['options'],
        kur = new efkg5(),
        ux7o8 = ort75['domBuilder'] || new easjvy2(),
        ezn6h = ort75['errorHandler'],
        vgtbaf = ort75['locator'],
        zhw6ne = ort75['xmlns'] || {},
        m_$ci = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return vgtbaf && ux7o8['setDocumentLocator'](vgtbaf), kur['errorHandler'] = eox57u(ezn6h, ux7o8, vgtbaf), kur['domBuilder'] = ort75['domBuilder'] || ux7o8, /\/x?html?$/['test'](wenhz1) && (m_$ci['nbsp'] = '\u00a0', m_$ci['copy'] = '©', zhw6ne[''] = 'http://www.w3.org/1999/xhtml'), zhw6ne['xml'] = zhw6ne['xml'] || 'http://www.w3.org/XML/1998/namespace', _ml0$ ? kur['parse'](_ml0$, zhw6ne, m_$ci) : kur['errorHandler']['error']('invalid doc source'), ux7o8['doc'];
}, easjvy2['prototype'] = {
    'startDocument': function () {
        this['doc'] = new erox57()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (xu9dr8, cmli$4, tkbgf5, $mi3) {
        var s2nw6h = this['doc'],
            vajfg = s2nw6h['createElementNS'](xu9dr8, tkbgf5 || cmli$4),
            $l9_0 = $mi3['length'];
        el$0d_m(this, vajfg), this['currentElement'] = vajfg, this['locator'] && eo98urx(this['locator'], vajfg);
        for (var u7r5k = 0x0; $l9_0 > u7r5k; u7r5k++) {
            var xu9dr8 = $mi3['getURI'](u7r5k),
                $d9_l = $mi3['getValue'](u7r5k),
                tkbgf5 = $mi3['getQName'](u7r5k),
                d9_08 = s2nw6h['createAttributeNS'](xu9dr8, tkbgf5);
            this['locator'] && eo98urx($mi3['getLocator'](u7r5k), d9_08), d9_08['value'] = d9_08['nodeValue'] = $d9_l, vajfg['setAttributeNode'](d9_08);
        }
    },
    'endElement': function () {
        {
            var iq4m = this['currentElement'];
            iq4m['tagName'];
        }
        this['currentElement'] = iq4m['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (r57ku, z1enhw) {
        var l_dm = this['doc']['createProcessingInstruction'](r57ku, z1enhw);
        this['locator'] && eo98urx(this['locator'], l_dm), el$0d_m(this, l_dm);
    },
    'ignorableWhitespace': function () {},
    'characters': function (otkb57) {
        if (otkb57 = eagvfbt['apply'](this, arguments)) {
            if (this['cdata']) var uo89rx = this['doc']['createCDATASection'](otkb57);else var uo89rx = this['doc']['createTextNode'](otkb57);
            this['currentElement'] ? this['currentElement']['appendChild'](uo89rx) : /^\s*$/['test'](otkb57) && this['doc']['appendChild'](uo89rx), this['locator'] && eo98urx(this['locator'], uo89rx);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hnw6z) {
        (this['locator'] = hnw6z) && (hnw6z['lineNumber'] = 0x0);
    },
    'comment': function ($cl_m) {
        $cl_m = eagvfbt['apply'](this, arguments);
        var ywh2 = this['doc']['createComment']($cl_m);
        this['locator'] && eo98urx(this['locator'], ywh2), el$0d_m(this, ywh2);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (_9xd80, i4l, vjs2ay) {
        var u5xr7o = this['doc']['implementation'];
        if (u5xr7o && u5xr7o['createDocumentType']) {
            var bgvfat = u5xr7o['createDocumentType'](_9xd80, i4l, vjs2ay);
            this['locator'] && eo98urx(this['locator'], bgvfat), el$0d_m(this, bgvfat);
        }
    },
    'warning': function (x8_9d0) {
        console['warn']('[xmldom warning]\t' + x8_9d0, eci$m3(this['locator']));
    },
    'error': function (fbt5) {
        console['error']('[xmldom error]\t' + fbt5, eci$m3(this['locator']));
    },
    'fatalError': function (jsya2v) {
        throw console['error']('[xmldom fatalError]\t' + jsya2v, eci$m3(this['locator'])), jsya2v;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jfya) {
    easjvy2['prototype'][jfya] = function () {
        return null;
    };
});
var efkg5 = require('./ld')['XMLReader'],
    erox57 = exports['DOMImplementation'] = require('./vepex')['DOMImplementation'];
exports['XMLSerializer'] = require('./vepex')['XMLSerializer'], exports['DOMParser'] = enwzh1;