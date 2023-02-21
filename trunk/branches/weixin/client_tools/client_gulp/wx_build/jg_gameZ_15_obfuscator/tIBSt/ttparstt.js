var P = wx.$y;
function Tok$w2(hj109v) {
    this['options'] = hj109v || { 'locator': {} };
}
function Tko2$w(fko$w2, d8xnog, f$dok2) {
    function fd$k8(z01) {
        var yrl_cs = fko$w2[z01];
        !yrl_cs && dqgn && (yrl_cs = 0x2 == fko$w2['length'] ? function (ep6w) {
            fko$w2(z01, ep6w);
        } : fko$w2), gs_xqy[z01] = yrl_cs && function (zv016e) {
            yrl_cs('[xmldom ' + z01 + ']\t' + zv016e + Tb4u37i(f$dok2));
        } || function () {};
    }
    if (!fko$w2) {
        if (d8xnog instanceof Tmc_lrs) return d8xnog;
        fko$w2 = d8xnog;
    }
    var gs_xqy = {},
        dqgn = fko$w2 instanceof Function;
    return f$dok2 = f$dok2 || {}, fd$k8('warning'), fd$k8('error'), fd$k8('fatalError'), gs_xqy;
}
function Tmc_lrs() {
    this['cdata'] = !0x1;
}
function Tjh1v9(zev6t1, brmc73) {
    brmc73['lineNumber'] = zev6t1['lineNumber'], brmc73['columnNumber'] = zev6t1['columnNumber'];
}
function Tb4u37i(wofk2$) {
    return wofk2$ ? '\x0a@' + (wofk2$['systemId'] || '') + '#[line:' + wofk2$['lineNumber'] + ',col:' + wofk2$['columnNumber'] + ']' : void 0x0;
}
function Tnqgd8x(twpez, g8nxod, evptz) {
    return 'string' == typeof twpez ? twpez['substr'](g8nxod, evptz) : twpez['length'] >= g8nxod + evptz || g8nxod ? new java['lang']['String'](twpez, g8nxod, evptz) + '' : twpez;
}
function Te901v(lrys, gxs) {
    lrys['currentElement'] ? lrys['currentElement']['appendChild'](gxs) : lrys['doc']['appendChild'](gxs);
}
Tok$w2['prototype']['parseFromString'] = function (cyls_r, vh10) {
    var vt6pez = this['options'],
        biu3a4 = new Tr37cb(),
        clq_s = vt6pez['domBuilder'] || new Tmc_lrs(),
        g8nyxq = vt6pez['errorHandler'],
        gnq8y = vt6pez['locator'],
        z6ewpt = vt6pez['xmlns'] || {},
        _xgys = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return gnq8y && clq_s['setDocumentLocator'](gnq8y), biu3a4['errorHandler'] = Tko2$w(g8nyxq, clq_s, gnq8y), biu3a4['domBuilder'] = vt6pez['domBuilder'] || clq_s, /\/x?html?$/['test'](vh10) && (_xgys['nbsp'] = '\u00a0', _xgys['copy'] = '©', z6ewpt[''] = 'http://www.w3.org/1999/xhtml'), z6ewpt['xml'] = z6ewpt['xml'] || 'http://www.w3.org/XML/1998/namespace', cyls_r ? biu3a4['parse'](cyls_r, z6ewpt, _xgys) : biu3a4['errorHandler']['error']('invalid doc source'), clq_s['doc'];
}, Tmc_lrs['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Te60zv1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (v6z10, d$f8ok, x$nd8o, b7rm34) {
        var c7rb3 = this['doc'],
            im3b74 = c7rb3['createElementNS'](v6z10, x$nd8o || d$f8ok),
            gynx8 = b7rm34['length'];
        Te901v(this, im3b74), this['currentElement'] = im3b74, this['locator'] && Tjh1v9(this['locator'], im3b74);
        for (var mlscr7 = 0x0; gynx8 > mlscr7; mlscr7++) {
            var v6z10 = b7rm34['getURI'](mlscr7),
                nygx_q = b7rm34['getValue'](mlscr7),
                x$nd8o = b7rm34['getQName'](mlscr7),
                n$dx8 = c7rb3['createAttributeNS'](v6z10, x$nd8o);
            this['locator'] && Tjh1v9(b7rm34['getLocator'](mlscr7), n$dx8), n$dx8['value'] = n$dx8['nodeValue'] = nygx_q, im3b74['setAttributeNode'](n$dx8);
        }
    },
    'endElement': function () {
        {
            var qyg8n = this['currentElement'];
            qyg8n['tagName'];
        }
        this['currentElement'] = qyg8n['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (zptw6e, rmcb3) {
        var lcm7 = this['doc']['createProcessingInstruction'](zptw6e, rmcb3);
        this['locator'] && Tjh1v9(this['locator'], lcm7), Te901v(this, lcm7);
    },
    'ignorableWhitespace': function () {},
    'characters': function (m3rb7c) {
        if (m3rb7c = Tnqgd8x['apply'](this, arguments)) {
            if (this['cdata']) var p6zwe = this['doc']['createCDATASection'](m3rb7c);else var p6zwe = this['doc']['createTextNode'](m3rb7c);
            this['currentElement'] ? this['currentElement']['appendChild'](p6zwe) : /^\s*$/['test'](m3rb7c) && this['doc']['appendChild'](p6zwe), this['locator'] && Tjh1v9(this['locator'], p6zwe);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (pt6) {
        (this['locator'] = pt6) && (pt6['lineNumber'] = 0x0);
    },
    'comment': function (xq_sgy) {
        xq_sgy = Tnqgd8x['apply'](this, arguments);
        var ptwkf = this['doc']['createComment'](xq_sgy);
        this['locator'] && Tjh1v9(this['locator'], ptwkf), Te901v(this, ptwkf);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (gqynx_, cblm7, d$xn8) {
        var f8kd$o = this['doc']['implementation'];
        if (f8kd$o && f8kd$o['createDocumentType']) {
            var o$kf2 = f8kd$o['createDocumentType'](gqynx_, cblm7, d$xn8);
            this['locator'] && Tjh1v9(this['locator'], o$kf2), Te901v(this, o$kf2);
        }
    },
    'warning': function (ibm) {
        console['warn']('[xmldom warning]\t' + ibm, Tb4u37i(this['locator']));
    },
    'error': function (d$fo8) {
        console['error']('[xmldom error]\t' + d$fo8, Tb4u37i(this['locator']));
    },
    'fatalError': function (m3cbr7) {
        throw console['error']('[xmldom fatalError]\t' + m3cbr7, Tb4u37i(this['locator'])), m3cbr7;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lcr7ms) {
    Tmc_lrs['prototype'][lcr7ms] = function () {
        return null;
    };
});
var Tr37cb = require('./tT12tt')['XMLReader'],
    Te60zv1 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = Tok$w2;