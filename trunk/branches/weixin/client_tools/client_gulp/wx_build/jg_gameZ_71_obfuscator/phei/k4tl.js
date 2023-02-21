var f = wx.$B;
function Sz72pb3(bwem2s) {
    this['options'] = bwem2s || { 'locator': {} };
}
function Sw$vsm(lg8aix, luot8x, hg61a) {
    function loxa8(h1iga6) {
        var z4_37p = lg8aix[h1iga6];
        !z4_37p && ia1gx8 && (z4_37p = 0x2 == lg8aix['length'] ? function (yn59u) {
            lg8aix(h1iga6, yn59u);
        } : lg8aix), uy9[h1iga6] = z4_37p && function (p4_37) {
            z4_37p('[xmldom ' + h1iga6 + ']\t' + p4_37 + Sxat(hg61a));
        } || function () {};
    }
    if (!lg8aix) {
        if (luot8x instanceof Snot5uy) return luot8x;
        lg8aix = luot8x;
    }
    var uy9 = {},
        ia1gx8 = lg8aix instanceof Function;
    return hg61a = hg61a || {}, loxa8('warning'), loxa8('error'), loxa8('fatalError'), uy9;
}
function Snot5uy() {
    this['cdata'] = !0x1;
}
function S$hs6vw(s6$1, $61vi) {
    $61vi['lineNumber'] = s6$1['lineNumber'], $61vi['columnNumber'] = s6$1['columnNumber'];
}
function Sxat(vbswem) {
    return vbswem ? '\x0a@' + (vbswem['systemId'] || '') + '#[line:' + vbswem['lineNumber'] + ',col:' + vbswem['columnNumber'] + ']' : void 0x0;
}
function Ssebmw2(pz7_3, kjr9, n05yr) {
    return 'string' == typeof pz7_3 ? pz7_3['substr'](kjr9, n05yr) : pz7_3['length'] >= kjr9 + n05yr || kjr9 ? new java['lang']['String'](pz7_3, kjr9, n05yr) + '' : pz7_3;
}
function Slontu(pbz3e, dqrkj) {
    pbz3e['currentElement'] ? pbz3e['currentElement']['appendChild'](dqrkj) : pbz3e['doc']['appendChild'](dqrkj);
}
Sz72pb3['prototype']['parseFromString'] = function (tlu5ox, y5nr09) {
    var dqf = this['options'],
        yk9r0 = new Soun5(),
        g8a1ih = dqf['domBuilder'] || new Snot5uy(),
        em$wvs = dqf['errorHandler'],
        gi18a = dqf['locator'],
        lo8u = dqf['xmlns'] || {},
        oul = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return gi18a && g8a1ih['setDocumentLocator'](gi18a), yk9r0['errorHandler'] = Sw$vsm(em$wvs, g8a1ih, gi18a), yk9r0['domBuilder'] = dqf['domBuilder'] || g8a1ih, /\/x?html?$/['test'](y5nr09) && (oul['nbsp'] = '\u00a0', oul['copy'] = '©', lo8u[''] = 'http://www.w3.org/1999/xhtml'), lo8u['xml'] = lo8u['xml'] || 'http://www.w3.org/XML/1998/namespace', tlu5ox ? yk9r0['parse'](tlu5ox, lo8u, oul) : yk9r0['errorHandler']['error']('invalid doc source'), g8a1ih['doc'];
}, Snot5uy['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Syn9r5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (mse2bw, i8x1ga, mvs, t8lxao) {
        var ou8lxt = this['doc'],
            v$s16 = ou8lxt['createElementNS'](mse2bw, mvs || i8x1ga),
            b72zp3 = t8lxao['length'];
        Slontu(this, v$s16), this['currentElement'] = v$s16, this['locator'] && S$hs6vw(this['locator'], v$s16);
        for (var ot5uy = 0x0; b72zp3 > ot5uy; ot5uy++) {
            var mse2bw = t8lxao['getURI'](ot5uy),
                wm2bs = t8lxao['getValue'](ot5uy),
                mvs = t8lxao['getQName'](ot5uy),
                p2bez3 = ou8lxt['createAttributeNS'](mse2bw, mvs);
            this['locator'] && S$hs6vw(t8lxao['getLocator'](ot5uy), p2bez3), p2bez3['value'] = p2bez3['nodeValue'] = wm2bs, v$s16['setAttributeNode'](p2bez3);
        }
    },
    'endElement': function () {
        {
            var uxot = this['currentElement'];
            uxot['tagName'];
        }
        this['currentElement'] = uxot['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (xg8lta, w2pem) {
        var ax8ol = this['doc']['createProcessingInstruction'](xg8lta, w2pem);
        this['locator'] && S$hs6vw(this['locator'], ax8ol), Slontu(this, ax8ol);
    },
    'ignorableWhitespace': function () {},
    'characters': function (hs$6w) {
        if (hs$6w = Ssebmw2['apply'](this, arguments)) {
            if (this['cdata']) var olx8u = this['doc']['createCDATASection'](hs$6w);else var olx8u = this['doc']['createTextNode'](hs$6w);
            this['currentElement'] ? this['currentElement']['appendChild'](olx8u) : /^\s*$/['test'](hs$6w) && this['doc']['appendChild'](olx8u), this['locator'] && S$hs6vw(this['locator'], olx8u);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (xtulo5) {
        (this['locator'] = xtulo5) && (xtulo5['lineNumber'] = 0x0);
    },
    'comment': function (rny095) {
        rny095 = Ssebmw2['apply'](this, arguments);
        var ult = this['doc']['createComment'](rny095);
        this['locator'] && S$hs6vw(this['locator'], ult), Slontu(this, ult);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (r0dk9, olax8, $evmsw) {
        var tl8xa = this['doc']['implementation'];
        if (tl8xa && tl8xa['createDocumentType']) {
            var t8xol = tl8xa['createDocumentType'](r0dk9, olax8, $evmsw);
            this['locator'] && S$hs6vw(this['locator'], t8xol), Slontu(this, t8xol);
        }
    },
    'warning': function (gl8ia) {
        console['warn']('[xmldom warning]\t' + gl8ia, Sxat(this['locator']));
    },
    'error': function (r09jny) {
        console['error']('[xmldom error]\t' + r09jny, Sxat(this['locator']));
    },
    'fatalError': function (lg8) {
        throw console['error']('[xmldom fatalError]\t' + lg8, Sxat(this['locator'])), lg8;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (e3bm) {
    Snot5uy['prototype'][e3bm] = function () {
        return null;
    };
});
var Soun5 = require('./a13a')['XMLReader'],
    Syn9r5 = exports['DOMImplementation'] = require('./wj')['DOMImplementation'];
exports['XMLSerializer'] = require('./wj')['XMLSerializer'], exports['DOMParser'] = Sz72pb3;