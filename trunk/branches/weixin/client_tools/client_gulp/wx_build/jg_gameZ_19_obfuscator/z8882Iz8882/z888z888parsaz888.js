var u = wx.$x;
function xer3_q$($3ql) {
    this['options'] = $3ql || { 'locator': {} };
}
function xrz_$m(df45k, eq8l$, hjicy2) {
    function zibn(zrs$_) {
        var ntxzm = df45k[zrs$_];
        !ntxzm && rm_ns && (ntxzm = 0x2 == df45k['length'] ? function (l368e) {
            df45k(zrs$_, l368e);
        } : df45k), $_es[zrs$_] = ntxzm && function ($zm) {
            ntxzm('[xmldom ' + zrs$_ + ']\t' + $zm + xxhty2i(hjicy2));
        } || function () {};
    }
    if (!df45k) {
        if (eq8l$ instanceof xytbhxi) return eq8l$;
        df45k = eq8l$;
    }
    var $_es = {},
        rm_ns = df45k instanceof Function;
    return hjicy2 = hjicy2 || {}, zibn('warning'), zibn('error'), zibn('fatalError'), $_es;
}
function xytbhxi() {
    this['cdata'] = !0x1;
}
function xw1o0p(_3$rq, nbzti) {
    nbzti['lineNumber'] = _3$rq['lineNumber'], nbzti['columnNumber'] = _3$rq['columnNumber'];
}
function xxhty2i(nyxib) {
    return nyxib ? '\x0a@' + (nyxib['systemId'] || '') + '#[line:' + nyxib['lineNumber'] + ',col:' + nyxib['columnNumber'] + ']' : void 0x0;
}
function x$esmr(iyhj2, fodu4, r_3$qe) {
    return 'string' == typeof iyhj2 ? iyhj2['substr'](fodu4, r_3$qe) : iyhj2['length'] >= fodu4 + r_3$qe || fodu4 ? new java['lang']['String'](iyhj2, fodu4, r_3$qe) + '' : iyhj2;
}
function xod4uw1(k6la7v, uwod14) {
    k6la7v['currentElement'] ? k6la7v['currentElement']['appendChild'](uwod14) : k6la7v['doc']['appendChild'](uwod14);
}
xer3_q$['prototype']['parseFromString'] = function (fo14ud, _q$3r) {
    var xyi2ch = this['options'],
        q$3re_ = new xc2ixh(),
        nr_zsm = xyi2ch['domBuilder'] || new xytbhxi(),
        d5ok4f = xyi2ch['errorHandler'],
        q36l8 = xyi2ch['locator'],
        k5va4f = xyi2ch['xmlns'] || {},
        rmzbns = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return q36l8 && nr_zsm['setDocumentLocator'](q36l8), q$3re_['errorHandler'] = xrz_$m(d5ok4f, nr_zsm, q36l8), q$3re_['domBuilder'] = xyi2ch['domBuilder'] || nr_zsm, /\/x?html?$/['test'](_q$3r) && (rmzbns['nbsp'] = '\u00a0', rmzbns['copy'] = '©', k5va4f[''] = 'http://www.w3.org/1999/xhtml'), k5va4f['xml'] = k5va4f['xml'] || 'http://www.w3.org/XML/1998/namespace', fo14ud ? q$3re_['parse'](fo14ud, k5va4f, rmzbns) : q$3re_['errorHandler']['error']('invalid doc source'), nr_zsm['doc'];
}, xytbhxi['prototype'] = {
    'startDocument': function () {
        this['doc'] = new xre$sm_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (z$rm, u54odf, a54fkv, va7f) {
        var tiby = this['doc'],
            x2c = tiby['createElementNS'](z$rm, a54fkv || u54odf),
            hiycx2 = va7f['length'];
        xod4uw1(this, x2c), this['currentElement'] = x2c, this['locator'] && xw1o0p(this['locator'], x2c);
        for (var es$ = 0x0; hiycx2 > es$; es$++) {
            var z$rm = va7f['getURI'](es$),
                $lq83e = va7f['getValue'](es$),
                a54fkv = va7f['getQName'](es$),
                a87l6 = tiby['createAttributeNS'](z$rm, a54fkv);
            this['locator'] && xw1o0p(va7f['getLocator'](es$), a87l6), a87l6['value'] = a87l6['nodeValue'] = $lq83e, x2c['setAttributeNode'](a87l6);
        }
    },
    'endElement': function () {
        {
            var xht2 = this['currentElement'];
            xht2['tagName'];
        }
        this['currentElement'] = xht2['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (rs_mn, ou1) {
        var xhibyt = this['doc']['createProcessingInstruction'](rs_mn, ou1);
        this['locator'] && xw1o0p(this['locator'], xhibyt), xod4uw1(this, xhibyt);
    },
    'ignorableWhitespace': function () {},
    'characters': function (xynitb) {
        if (xynitb = x$esmr['apply'](this, arguments)) {
            if (this['cdata']) var eq6l8 = this['doc']['createCDATASection'](xynitb);else var eq6l8 = this['doc']['createTextNode'](xynitb);
            this['currentElement'] ? this['currentElement']['appendChild'](eq6l8) : /^\s*$/['test'](xynitb) && this['doc']['appendChild'](eq6l8), this['locator'] && xw1o0p(this['locator'], eq6l8);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (rn_szm) {
        (this['locator'] = rn_szm) && (rn_szm['lineNumber'] = 0x0);
    },
    'comment': function (d4fuo) {
        d4fuo = x$esmr['apply'](this, arguments);
        var xtzbnm = this['doc']['createComment'](d4fuo);
        this['locator'] && xw1o0p(this['locator'], xtzbnm), xod4uw1(this, xtzbnm);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (rnm_zs, o01wpu, dwo4u) {
        var wdou41 = this['doc']['implementation'];
        if (wdou41 && wdou41['createDocumentType']) {
            var zsbntm = wdou41['createDocumentType'](rnm_zs, o01wpu, dwo4u);
            this['locator'] && xw1o0p(this['locator'], zsbntm), xod4uw1(this, zsbntm);
        }
    },
    'warning': function (l8) {
        console['warn']('[xmldom warning]\t' + l8, xxhty2i(this['locator']));
    },
    'error': function (vf75) {
        console['error']('[xmldom error]\t' + vf75, xxhty2i(this['locator']));
    },
    'fatalError': function (q63le) {
        throw console['error']('[xmldom fatalError]\t' + q63le, xxhty2i(this['locator'])), q63le;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (of4du5) {
    xytbhxi['prototype'][of4du5] = function () {
        return null;
    };
});
var xc2ixh = require('./z888z888cz888z888')['XMLReader'],
    xre$sm_ = exports['DOMImplementation'] = require('./z888z888DOz888z888')['DOMImplementation'];
exports['XMLSerializer'] = require('./z888z888DOz888z888')['XMLSerializer'], exports['DOMParser'] = xer3_q$;