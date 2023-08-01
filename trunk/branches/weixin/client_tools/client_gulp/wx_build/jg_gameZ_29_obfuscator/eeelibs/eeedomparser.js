var b = wx.$e;
function ewvabe(tgkfj$) {
    this['options'] = tgkfj$ || { 'locator': {} };
}
function epx$jo(ihqvsl, mdzp9, $j2kx) {
    function libhq(a4wveb) {
        var dpmx = ihqvsl[a4wveb];
        !dpmx && qis6 && (dpmx = 0x2 == ihqvsl['length'] ? function (f$jxk2) {
            ihqvsl(a4wveb, f$jxk2);
        } : ihqvsl), jtfgk[a4wveb] = dpmx && function (uzmd9) {
            dpmx('[xmldom ' + a4wveb + ']\t' + uzmd9 + elivqb($j2kx));
        } || function () {};
    }
    if (!ihqvsl) {
        if (mdzp9 instanceof eb4vae) return mdzp9;
        ihqvsl = mdzp9;
    }
    var jtfgk = {},
        qis6 = ihqvsl instanceof Function;
    return $j2kx = $j2kx || {}, libhq('warning'), libhq('error'), libhq('fatalError'), jtfgk;
}
function eb4vae() {
    this['cdata'] = !0x1;
}
function ebilqvh(kgjtf, dm19o) {
    dm19o['lineNumber'] = kgjtf['lineNumber'], dm19o['columnNumber'] = kgjtf['columnNumber'];
}
function elivqb(wv) {
    return wv ? '\x0a@' + (wv['systemId'] || '') + '#[line:' + wv['lineNumber'] + ',col:' + wv['columnNumber'] + ']' : void 0x0;
}
function ef4ak(aktf, xo$j2, vshlqi) {
    return 'string' == typeof aktf ? aktf['substr'](xo$j2, vshlqi) : aktf['length'] >= xo$j2 + vshlqi || xo$j2 ? new java['lang']['String'](aktf, xo$j2, vshlqi) + '' : aktf;
}
function efg$jt(twk4g, k$fxj) {
    twk4g['currentElement'] ? twk4g['currentElement']['appendChild'](k$fxj) : twk4g['doc']['appendChild'](k$fxj);
}
ewvabe['prototype']['parseFromString'] = function ($j2o, r5370) {
    var l6ihs = this['options'],
        ftjk2 = new eishvl(),
        y5c = l6ihs['domBuilder'] || new eb4vae(),
        agw4tk = l6ihs['errorHandler'],
        z91umd = l6ihs['locator'],
        jft2k$ = l6ihs['xmlns'] || {},
        o$p2mx = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return z91umd && y5c['setDocumentLocator'](z91umd), ftjk2['errorHandler'] = epx$jo(agw4tk, y5c, z91umd), ftjk2['domBuilder'] = l6ihs['domBuilder'] || y5c, /\/x?html?$/['test'](r5370) && (o$p2mx['nbsp'] = '\u00a0', o$p2mx['copy'] = '©', jft2k$[''] = 'http://www.w3.org/1999/xhtml'), jft2k$['xml'] = jft2k$['xml'] || 'http://www.w3.org/XML/1998/namespace', $j2o ? ftjk2['parse']($j2o, jft2k$, o$p2mx) : ftjk2['errorHandler']['error']('invalid doc source'), y5c['doc'];
}, eb4vae['prototype'] = {
    'startDocument': function () {
        this['doc'] = new em1odz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (evbiql, xmp2oz, bivwa, l6hsqi) {
        var o2j$p = this['doc'],
            qilhs6 = o2j$p['createElementNS'](evbiql, bivwa || xmp2oz),
            opx2$ = l6hsqi['length'];
        efg$jt(this, qilhs6), this['currentElement'] = qilhs6, this['locator'] && ebilqvh(this['locator'], qilhs6);
        for (var y5rn7c = 0x0; opx2$ > y5rn7c; y5rn7c++) {
            var evbiql = l6hsqi['getURI'](y5rn7c),
                kxj2 = l6hsqi['getValue'](y5rn7c),
                bivwa = l6hsqi['getQName'](y5rn7c),
                slh8 = o2j$p['createAttributeNS'](evbiql, bivwa);
            this['locator'] && ebilqvh(l6hsqi['getLocator'](y5rn7c), slh8), slh8['value'] = slh8['nodeValue'] = kxj2, qilhs6['setAttributeNode'](slh8);
        }
    },
    'endElement': function () {
        {
            var gtfk4 = this['currentElement'];
            gtfk4['tagName'];
        }
        this['currentElement'] = gtfk4['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (e4bga, k2$tj) {
        var c75y0 = this['doc']['createProcessingInstruction'](e4bga, k2$tj);
        this['locator'] && ebilqvh(this['locator'], c75y0), efg$jt(this, c75y0);
    },
    'ignorableWhitespace': function () {},
    'characters': function (ivqle) {
        if (ivqle = ef4ak['apply'](this, arguments)) {
            if (this['cdata']) var ebqvil = this['doc']['createCDATASection'](ivqle);else var ebqvil = this['doc']['createTextNode'](ivqle);
            this['currentElement'] ? this['currentElement']['appendChild'](ebqvil) : /^\s*$/['test'](ivqle) && this['doc']['appendChild'](ebqvil), this['locator'] && ebilqvh(this['locator'], ebqvil);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (r03s8) {
        (this['locator'] = r03s8) && (r03s8['lineNumber'] = 0x0);
    },
    'comment': function (eibvaw) {
        eibvaw = ef4ak['apply'](this, arguments);
        var mo2zp = this['doc']['createComment'](eibvaw);
        this['locator'] && ebilqvh(this['locator'], mo2zp), efg$jt(this, mo2zp);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (h6sl8, op$m2x, r5yn7c) {
        var $x2fjk = this['doc']['implementation'];
        if ($x2fjk && $x2fjk['createDocumentType']) {
            var isq6h = $x2fjk['createDocumentType'](h6sl8, op$m2x, r5yn7c);
            this['locator'] && ebilqvh(this['locator'], isq6h), efg$jt(this, isq6h);
        }
    },
    'warning': function (n57ycr) {
        console['warn']('[xmldom warning]\t' + n57ycr, elivqb(this['locator']));
    },
    'error': function (fjt$g) {
        console['error']('[xmldom error]\t' + fjt$g, elivqb(this['locator']));
    },
    'fatalError': function (z9o1) {
        throw console['error']('[xmldom fatalError]\t' + z9o1, elivqb(this['locator'])), z9o1;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lsq8) {
    eb4vae['prototype'][lsq8] = function () {
        return null;
    };
});
var eishvl = require('./eeesax')['XMLReader'],
    em1odz = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ewvabe;