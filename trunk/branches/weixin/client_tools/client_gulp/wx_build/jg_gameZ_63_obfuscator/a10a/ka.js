var f = wx.$B;
function Skbdfs4(aojqum) {
    this['options'] = aojqum || { 'locator': {} };
}
function Souymj(krts4, kft4s, $8rw) {
    function hya6m9(fbgkd2) {
        var g3bv = krts4[fbgkd2];
        !g3bv && ayjoum && (g3bv = 0x2 == krts4['length'] ? function ($rwtx) {
            krts4(fbgkd2, $rwtx);
        } : krts4), am6uy[fbgkd2] = g3bv && function (h6ay9m) {
            g3bv('[xmldom ' + fbgkd2 + ']\t' + h6ay9m + Sm6a9y($8rw));
        } || function () {};
    }
    if (!krts4) {
        if (kft4s instanceof Sfsbdk) return kft4s;
        krts4 = kft4s;
    }
    var am6uy = {},
        ayjoum = krts4 instanceof Function;
    return $8rw = $8rw || {}, hya6m9('warning'), hya6m9('error'), hya6m9('fatalError'), am6uy;
}
function Sfsbdk() {
    this['cdata'] = !0x1;
}
function Srw8x$(eolz1q, zoeq1l) {
    zoeq1l['lineNumber'] = eolz1q['lineNumber'], zoeq1l['columnNumber'] = eolz1q['columnNumber'];
}
function Sm6a9y(pi$8xw) {
    return pi$8xw ? '\x0a@' + (pi$8xw['systemId'] || '') + '#[line:' + pi$8xw['lineNumber'] + ',col:' + pi$8xw['columnNumber'] + ']' : void 0x0;
}
function Sh6ma9(h3290v, pw8i$, w$xr) {
    return 'string' == typeof h3290v ? h3290v['substr'](pw8i$, w$xr) : h3290v['length'] >= pw8i$ + w$xr || pw8i$ ? new java['lang']['String'](h3290v, pw8i$, w$xr) + '' : h3290v;
}
function Sojau(fkbg2, d4f7ks) {
    fkbg2['currentElement'] ? fkbg2['currentElement']['appendChild'](d4f7ks) : fkbg2['doc']['appendChild'](d4f7ks);
}
Skbdfs4['prototype']['parseFromString'] = function (r8x$i, h6y9ma) {
    var fb4dk = this['options'],
        yh6a9m = new Suoamy(),
        $ip_8x = fb4dk['domBuilder'] || new Sfsbdk(),
        i8_ = fb4dk['errorHandler'],
        jomayu = fb4dk['locator'],
        gfdbk = fb4dk['xmlns'] || {},
        dbk2gf = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return jomayu && $ip_8x['setDocumentLocator'](jomayu), yh6a9m['errorHandler'] = Souymj(i8_, $ip_8x, jomayu), yh6a9m['domBuilder'] = fb4dk['domBuilder'] || $ip_8x, /\/x?html?$/['test'](h6y9ma) && (dbk2gf['nbsp'] = '\u00a0', dbk2gf['copy'] = '©', gfdbk[''] = 'http://www.w3.org/1999/xhtml'), gfdbk['xml'] = gfdbk['xml'] || 'http://www.w3.org/XML/1998/namespace', r8x$i ? yh6a9m['parse'](r8x$i, gfdbk, dbk2gf) : yh6a9m['errorHandler']['error']('invalid doc source'), $ip_8x['doc'];
}, Sfsbdk['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Se15lzq()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (rs8wt7, gvh203, bgd2vf, $ip) {
        var t4s7f = this['doc'],
            au6mj = t4s7f['createElementNS'](rs8wt7, bgd2vf || gvh203),
            irw8x$ = $ip['length'];
        Sojau(this, au6mj), this['currentElement'] = au6mj, this['locator'] && Srw8x$(this['locator'], au6mj);
        for (var dvg2bf = 0x0; irw8x$ > dvg2bf; dvg2bf++) {
            var rs8wt7 = $ip['getURI'](dvg2bf),
                tkf7 = $ip['getValue'](dvg2bf),
                bgd2vf = $ip['getQName'](dvg2bf),
                b4gkdf = t4s7f['createAttributeNS'](rs8wt7, bgd2vf);
            this['locator'] && Srw8x$($ip['getLocator'](dvg2bf), b4gkdf), b4gkdf['value'] = b4gkdf['nodeValue'] = tkf7, au6mj['setAttributeNode'](b4gkdf);
        }
    },
    'endElement': function () {
        {
            var xrwt$8 = this['currentElement'];
            xrwt$8['tagName'];
        }
        this['currentElement'] = xrwt$8['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (d7f4s, f2dvbg) {
        var z1oeq = this['doc']['createProcessingInstruction'](d7f4s, f2dvbg);
        this['locator'] && Srw8x$(this['locator'], z1oeq), Sojau(this, z1oeq);
    },
    'ignorableWhitespace': function () {},
    'characters': function (gdf2v) {
        if (gdf2v = Sh6ma9['apply'](this, arguments)) {
            if (this['cdata']) var d4fkgb = this['doc']['createCDATASection'](gdf2v);else var d4fkgb = this['doc']['createTextNode'](gdf2v);
            this['currentElement'] ? this['currentElement']['appendChild'](d4fkgb) : /^\s*$/['test'](gdf2v) && this['doc']['appendChild'](d4fkgb), this['locator'] && Srw8x$(this['locator'], d4fkgb);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (yuma69) {
        (this['locator'] = yuma69) && (yuma69['lineNumber'] = 0x0);
    },
    'comment': function (ojuqma) {
        ojuqma = Sh6ma9['apply'](this, arguments);
        var vbgd32 = this['doc']['createComment'](ojuqma);
        this['locator'] && Srw8x$(this['locator'], vbgd32), Sojau(this, vbgd32);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (n$xi_, qjzl1, ojq1u) {
        var x$tr8w = this['doc']['implementation'];
        if (x$tr8w && x$tr8w['createDocumentType']) {
            var tx8 = x$tr8w['createDocumentType'](n$xi_, qjzl1, ojq1u);
            this['locator'] && Srw8x$(this['locator'], tx8), Sojau(this, tx8);
        }
    },
    'warning': function (vh3906) {
        console['warn']('[xmldom warning]\t' + vh3906, Sm6a9y(this['locator']));
    },
    'error': function (ojaqu) {
        console['error']('[xmldom error]\t' + ojaqu, Sm6a9y(this['locator']));
    },
    'fatalError': function (ulqj) {
        throw console['error']('[xmldom fatalError]\t' + ulqj, Sm6a9y(this['locator'])), ulqj;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ayum6j) {
    Sfsbdk['prototype'][ayum6j] = function () {
        return null;
    };
});
var Suoamy = require('./wl8tk')['XMLReader'],
    Se15lzq = exports['DOMImplementation'] = require('./fi')['DOMImplementation'];
exports['XMLSerializer'] = require('./fi')['XMLSerializer'], exports['DOMParser'] = Skbdfs4;