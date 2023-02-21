var f = wx.$B;
function Sf$nhu(lbgqr) {
    this['options'] = lbgqr || { 'locator': {} };
}
function Sp8xkrq(tiz4v, zeia37, o5) {
    function kr8pxq(tiav) {
        var ot1v4s = tiz4v[tiav];
        !ot1v4s && bgrxq && (ot1v4s = 0x2 == tiz4v['length'] ? function (umh$n2) {
            tiz4v(tiav, umh$n2);
        } : tiz4v), f3ae97[tiav] = ot1v4s && function (eita) {
            ot1v4s('[xmldom ' + tiav + ']\t' + eita + Sw6lkb(o5));
        } || function () {};
    }
    if (!tiz4v) {
        if (zeia37 instanceof Sgqkw) return zeia37;
        tiz4v = zeia37;
    }
    var f3ae97 = {},
        bgrxq = tiz4v instanceof Function;
    return o5 = o5 || {}, kr8pxq('warning'), kr8pxq('error'), kr8pxq('fatalError'), f3ae97;
}
function Sgqkw() {
    this['cdata'] = !0x1;
}
function Sdjp08y(k8xbr, qwl) {
    qwl['lineNumber'] = k8xbr['lineNumber'], qwl['columnNumber'] = k8xbr['columnNumber'];
}
function Sw6lkb(xqgbk) {
    return xqgbk ? '\x0a@' + (xqgbk['systemId'] || '') + '#[line:' + xqgbk['lineNumber'] + ',col:' + xqgbk['columnNumber'] + ']' : void 0x0;
}
function Sf27$9(t14o5v, gkrxq, tivsza) {
    return 'string' == typeof t14o5v ? t14o5v['substr'](gkrxq, tivsza) : t14o5v['length'] >= gkrxq + tivsza || gkrxq ? new java['lang']['String'](t14o5v, gkrxq, tivsza) + '' : t14o5v;
}
function Snh9(v_1o, bqkgxr) {
    v_1o['currentElement'] ? v_1o['currentElement']['appendChild'](bqkgxr) : v_1o['doc']['appendChild'](bqkgxr);
}
Sf$nhu['prototype']['parseFromString'] = function (eiszt, xrq0p) {
    var gwlk = this['options'],
        a3zesi = new Sot1v5(),
        p8yrx0 = gwlk['domBuilder'] || new Sgqkw(),
        i4vot = gwlk['errorHandler'],
        yp8x0d = gwlk['locator'],
        nh2f$ = gwlk['xmlns'] || {},
        kbglwq = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return yp8x0d && p8yrx0['setDocumentLocator'](yp8x0d), a3zesi['errorHandler'] = Sp8xkrq(i4vot, p8yrx0, yp8x0d), a3zesi['domBuilder'] = gwlk['domBuilder'] || p8yrx0, /\/x?html?$/['test'](xrq0p) && (kbglwq['nbsp'] = '\u00a0', kbglwq['copy'] = '©', nh2f$[''] = 'http://www.w3.org/1999/xhtml'), nh2f$['xml'] = nh2f$['xml'] || 'http://www.w3.org/XML/1998/namespace', eiszt ? a3zesi['parse'](eiszt, nh2f$, kbglwq) : a3zesi['errorHandler']['error']('invalid doc source'), p8yrx0['doc'];
}, Sgqkw['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Sv4o51t()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (l_15w6, _5ow, $huf, f72h9) {
        var j8pdy0 = this['doc'],
            f73a9e = j8pdy0['createElementNS'](l_15w6, $huf || _5ow),
            l56g_w = f72h9['length'];
        Snh9(this, f73a9e), this['currentElement'] = f73a9e, this['locator'] && Sdjp08y(this['locator'], f73a9e);
        for (var e9273 = 0x0; l56g_w > e9273; e9273++) {
            var l_15w6 = f72h9['getURI'](e9273),
                to1v5 = f72h9['getValue'](e9273),
                $huf = f72h9['getQName'](e9273),
                az3e7 = j8pdy0['createAttributeNS'](l_15w6, $huf);
            this['locator'] && Sdjp08y(f72h9['getLocator'](e9273), az3e7), az3e7['value'] = az3e7['nodeValue'] = to1v5, f73a9e['setAttributeNode'](az3e7);
        }
    },
    'endElement': function () {
        {
            var ow_61 = this['currentElement'];
            ow_61['tagName'];
        }
        this['currentElement'] = ow_61['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ziea, xpd08y) {
        var v4zsti = this['doc']['createProcessingInstruction'](ziea, xpd08y);
        this['locator'] && Sdjp08y(this['locator'], v4zsti), Snh9(this, v4zsti);
    },
    'ignorableWhitespace': function () {},
    'characters': function (r8xqkb) {
        if (r8xqkb = Sf27$9['apply'](this, arguments)) {
            if (this['cdata']) var $f9237 = this['doc']['createCDATASection'](r8xqkb);else var $f9237 = this['doc']['createTextNode'](r8xqkb);
            this['currentElement'] ? this['currentElement']['appendChild']($f9237) : /^\s*$/['test'](r8xqkb) && this['doc']['appendChild']($f9237), this['locator'] && Sdjp08y(this['locator'], $f9237);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (lrqbk) {
        (this['locator'] = lrqbk) && (lrqbk['lineNumber'] = 0x0);
    },
    'comment': function (z7e3a9) {
        z7e3a9 = Sf27$9['apply'](this, arguments);
        var numh = this['doc']['createComment'](z7e3a9);
        this['locator'] && Sdjp08y(this['locator'], numh), Snh9(this, numh);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (qrkp8x, azsti, _w516l) {
        var o1_v54 = this['doc']['implementation'];
        if (o1_v54 && o1_v54['createDocumentType']) {
            var iavstz = o1_v54['createDocumentType'](qrkp8x, azsti, _w516l);
            this['locator'] && Sdjp08y(this['locator'], iavstz), Snh9(this, iavstz);
        }
    },
    'warning': function (s4to1) {
        console['warn']('[xmldom warning]\t' + s4to1, Sw6lkb(this['locator']));
    },
    'error': function (pj0dy8) {
        console['error']('[xmldom error]\t' + pj0dy8, Sw6lkb(this['locator']));
    },
    'fatalError': function (klgqb) {
        throw console['error']('[xmldom fatalError]\t' + klgqb, Sw6lkb(this['locator'])), klgqb;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wg_6l) {
    Sgqkw['prototype'][wg_6l] = function () {
        return null;
    };
});
var Sot1v5 = require('./rmgmn')['XMLReader'],
    Sv4o51t = exports['DOMImplementation'] = require('./pb')['DOMImplementation'];
exports['XMLSerializer'] = require('./pb')['XMLSerializer'], exports['DOMParser'] = Sf$nhu;