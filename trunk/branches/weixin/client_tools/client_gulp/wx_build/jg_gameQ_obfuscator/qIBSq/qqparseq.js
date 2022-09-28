var g = wx.$Q;
function q_rdz$e_(t5ckdy) {
    this['options'] = t5ckdy || { 'locator': {} };
}
function q__zo(o_ze$, jqswu8, r$c_zd) {
    function _eon9(fal2p) {
        var dkztrc = o_ze$[fal2p];
        !dkztrc && drz$c && (dkztrc = 0x2 == o_ze$['length'] ? function (h81wjs) {
            o_ze$(fal2p, h81wjs);
        } : o_ze$), no9me[fal2p] = dkztrc && function (x3520) {
            dkztrc('[xmldom ' + fal2p + ']\t' + x3520 + q_mo6ne9(r$c_zd));
        } || function () {};
    }
    if (!o_ze$) {
        if (jqswu8 instanceof q_mnh14) return jqswu8;
        o_ze$ = jqswu8;
    }
    var no9me = {},
        drz$c = o_ze$ instanceof Function;
    return r$c_zd = r$c_zd || {}, _eon9('warning'), _eon9('error'), _eon9('fatalError'), no9me;
}
function q_mnh14() {
    this['cdata'] = !0x1;
}
function q_re_z$d(xytk53, rcdytk) {
    rcdytk['lineNumber'] = xytk53['lineNumber'], rcdytk['columnNumber'] = xytk53['columnNumber'];
}
function q_mo6ne9(hwj8su) {
    return hwj8su ? '\x0a@' + (hwj8su['systemId'] || '') + '#[line:' + hwj8su['lineNumber'] + ',col:' + hwj8su['columnNumber'] + ']' : void 0x0;
}
function q_oz_$9e(alfg0p, albiv, gilapb) {
    return 'string' == typeof alfg0p ? alfg0p['substr'](albiv, gilapb) : alfg0p['length'] >= albiv + gilapb || albiv ? new java['lang']['String'](alfg0p, albiv, gilapb) + '' : alfg0p;
}
function q_$e_no(oe69m, gbila) {
    oe69m['currentElement'] ? oe69m['currentElement']['appendChild'](gbila) : oe69m['doc']['appendChild'](gbila);
}
q_rdz$e_['prototype']['parseFromString'] = function (ujwq8s, n6hm) {
    var gfplb = this['options'],
        ctdr = new q__r$zcd(),
        c$zd_ = gfplb['domBuilder'] || new q_mnh14(),
        wshj18 = gfplb['errorHandler'],
        $zrdtc = gfplb['locator'],
        y5x20 = gfplb['xmlns'] || {},
        x02pf3 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return $zrdtc && c$zd_['setDocumentLocator']($zrdtc), ctdr['errorHandler'] = q__zo(wshj18, c$zd_, $zrdtc), ctdr['domBuilder'] = gfplb['domBuilder'] || c$zd_, /\/x?html?$/['test'](n6hm) && (x02pf3['nbsp'] = '\u00a0', x02pf3['copy'] = '©', y5x20[''] = 'http://www.w3.org/1999/xhtml'), y5x20['xml'] = y5x20['xml'] || 'http://www.w3.org/XML/1998/namespace', ujwq8s ? ctdr['parse'](ujwq8s, y5x20, x02pf3) : ctdr['errorHandler']['error']('invalid doc source'), c$zd_['doc'];
}, q_mnh14['prototype'] = {
    'startDocument': function () {
        this['doc'] = new q_agbpfl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ipaglb, hm1j48, hsj8w1, n1mo4) {
        var plgbia = this['doc'],
            o9$en_ = plgbia['createElementNS'](ipaglb, hsj8w1 || hm1j48),
            rkdt = n1mo4['length'];
        q_$e_no(this, o9$en_), this['currentElement'] = o9$en_, this['locator'] && q_re_z$d(this['locator'], o9$en_);
        for (var z9$eo = 0x0; rkdt > z9$eo; z9$eo++) {
            var ipaglb = n1mo4['getURI'](z9$eo),
                jws1 = n1mo4['getValue'](z9$eo),
                hsj8w1 = n1mo4['getQName'](z9$eo),
                bilvag = plgbia['createAttributeNS'](ipaglb, hsj8w1);
            this['locator'] && q_re_z$d(n1mo4['getLocator'](z9$eo), bilvag), bilvag['value'] = bilvag['nodeValue'] = jws1, o9$en_['setAttributeNode'](bilvag);
        }
    },
    'endElement': function () {
        {
            var e9_on6 = this['currentElement'];
            e9_on6['tagName'];
        }
        this['currentElement'] = e9_on6['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (o96ne, ty5d) {
        var kczdrt = this['doc']['createProcessingInstruction'](o96ne, ty5d);
        this['locator'] && q_re_z$d(this['locator'], kczdrt), q_$e_no(this, kczdrt);
    },
    'ignorableWhitespace': function () {},
    'characters': function (o_9n6e) {
        if (o_9n6e = q_oz_$9e['apply'](this, arguments)) {
            if (this['cdata']) var xy3k5t = this['doc']['createCDATASection'](o_9n6e);else var xy3k5t = this['doc']['createTextNode'](o_9n6e);
            this['currentElement'] ? this['currentElement']['appendChild'](xy3k5t) : /^\s*$/['test'](o_9n6e) && this['doc']['appendChild'](xy3k5t), this['locator'] && q_re_z$d(this['locator'], xy3k5t);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (n94m6) {
        (this['locator'] = n94m6) && (n94m6['lineNumber'] = 0x0);
    },
    'comment': function (k5y3ct) {
        k5y3ct = q_oz_$9e['apply'](this, arguments);
        var h48m = this['doc']['createComment'](k5y3ct);
        this['locator'] && q_re_z$d(this['locator'], h48m), q_$e_no(this, h48m);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (rz$cd_, _rezd, x253k) {
        var wsj8h1 = this['doc']['implementation'];
        if (wsj8h1 && wsj8h1['createDocumentType']) {
            var xytk5 = wsj8h1['createDocumentType'](rz$cd_, _rezd, x253k);
            this['locator'] && q_re_z$d(this['locator'], xytk5), q_$e_no(this, xytk5);
        }
    },
    'warning': function (cr_dz) {
        console['warn']('[xmldom warning]\t' + cr_dz, q_mo6ne9(this['locator']));
    },
    'error': function (aflpgb) {
        console['error']('[xmldom error]\t' + aflpgb, q_mo6ne9(this['locator']));
    },
    'fatalError': function (er_z$) {
        throw console['error']('[xmldom fatalError]\t' + er_z$, q_mo6ne9(this['locator'])), er_z$;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (trd$c) {
    q_mnh14['prototype'][trd$c] = function () {
        return null;
    };
});
var q__r$zcd = require('./qS12q')['XMLReader'],
    q_agbpfl = exports['DOMImplementation'] = require('./qqDOMq')['DOMImplementation'];
exports['XMLSerializer'] = require('./qqDOMq')['XMLSerializer'], exports['DOMParser'] = q_rdz$e_;