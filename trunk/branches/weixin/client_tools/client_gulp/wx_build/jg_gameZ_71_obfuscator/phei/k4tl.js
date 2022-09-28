var f = wx.$B;
function Stoy5n(gx8at) {
    this['options'] = gx8at || { 'locator': {} };
}
function Sx8il(d9rjk0, z_347, o8xut) {
    function gh$61(o8tx) {
        var v$16ih = d9rjk0[o8tx];
        !v$16ih && axig8 && (v$16ih = 0x2 == d9rjk0['length'] ? function (rk0jy9) {
            d9rjk0(o8tx, rk0jy9);
        } : d9rjk0), jkqfr[o8tx] = v$16ih && function (ouny) {
            v$16ih('[xmldom ' + o8tx + ']\t' + ouny + Sepmw2b(o8xut));
        } || function () {};
    }
    if (!d9rjk0) {
        if (z_347 instanceof Sg$h16i) return z_347;
        d9rjk0 = z_347;
    }
    var jkqfr = {},
        axig8 = d9rjk0 instanceof Function;
    return o8xut = o8xut || {}, gh$61('warning'), gh$61('error'), gh$61('fatalError'), jkqfr;
}
function Sg$h16i() {
    this['cdata'] = !0x1;
}
function Svwmse$(gia8xl, bsme2) {
    bsme2['lineNumber'] = gia8xl['lineNumber'], bsme2['columnNumber'] = gia8xl['columnNumber'];
}
function Sepmw2b(ai61) {
    return ai61 ? '\x0a@' + (ai61['systemId'] || '') + '#[line:' + ai61['lineNumber'] + ',col:' + ai61['columnNumber'] + ']' : void 0x0;
}
function Sotn(a81, d9rkq, $shvw) {
    return 'string' == typeof a81 ? a81['substr'](d9rkq, $shvw) : a81['length'] >= d9rkq + $shvw || d9rkq ? new java['lang']['String'](a81, d9rkq, $shvw) + '' : a81;
}
function Shsw(laix8, n905u) {
    laix8['currentElement'] ? laix8['currentElement']['appendChild'](n905u) : laix8['doc']['appendChild'](n905u);
}
Stoy5n['prototype']['parseFromString'] = function (y5nr9, sme2bw) {
    var m23epb = this['options'],
        msv$ = new Sai6h1(),
        n5yuto = m23epb['domBuilder'] || new Sg$h16i(),
        yo0u5 = m23epb['errorHandler'],
        e$vms = m23epb['locator'],
        i6gah = m23epb['xmlns'] || {},
        hw$v = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return e$vms && n5yuto['setDocumentLocator'](e$vms), msv$['errorHandler'] = Sx8il(yo0u5, n5yuto, e$vms), msv$['domBuilder'] = m23epb['domBuilder'] || n5yuto, /\/x?html?$/['test'](sme2bw) && (hw$v['nbsp'] = '\u00a0', hw$v['copy'] = '©', i6gah[''] = 'http://www.w3.org/1999/xhtml'), i6gah['xml'] = i6gah['xml'] || 'http://www.w3.org/XML/1998/namespace', y5nr9 ? msv$['parse'](y5nr9, i6gah, hw$v) : msv$['errorHandler']['error']('invalid doc source'), n5yuto['doc'];
}, Sg$h16i['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Seb2wmp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (w$mes, $6g1i, otu5x, yrjk0) {
        var jdkrq = this['doc'],
            mb2pe3 = jdkrq['createElementNS'](w$mes, otu5x || $6g1i),
            y0u9n5 = yrjk0['length'];
        Shsw(this, mb2pe3), this['currentElement'] = mb2pe3, this['locator'] && Svwmse$(this['locator'], mb2pe3);
        for (var kr0y = 0x0; y0u9n5 > kr0y; kr0y++) {
            var w$mes = yrjk0['getURI'](kr0y),
                b2ew = yrjk0['getValue'](kr0y),
                otu5x = yrjk0['getQName'](kr0y),
                _p374 = jdkrq['createAttributeNS'](w$mes, otu5x);
            this['locator'] && Svwmse$(yrjk0['getLocator'](kr0y), _p374), _p374['value'] = _p374['nodeValue'] = b2ew, mb2pe3['setAttributeNode'](_p374);
        }
    },
    'endElement': function () {
        {
            var i8ga1x = this['currentElement'];
            i8ga1x['tagName'];
        }
        this['currentElement'] = i8ga1x['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (g1i6a, swbvem) {
        var g8ai1h = this['doc']['createProcessingInstruction'](g1i6a, swbvem);
        this['locator'] && Svwmse$(this['locator'], g8ai1h), Shsw(this, g8ai1h);
    },
    'ignorableWhitespace': function () {},
    'characters': function (ew2sbm) {
        if (ew2sbm = Sotn['apply'](this, arguments)) {
            if (this['cdata']) var ms$wve = this['doc']['createCDATASection'](ew2sbm);else var ms$wve = this['doc']['createTextNode'](ew2sbm);
            this['currentElement'] ? this['currentElement']['appendChild'](ms$wve) : /^\s*$/['test'](ew2sbm) && this['doc']['appendChild'](ms$wve), this['locator'] && Svwmse$(this['locator'], ms$wve);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (utx) {
        (this['locator'] = utx) && (utx['lineNumber'] = 0x0);
    },
    'comment': function (xtolu8) {
        xtolu8 = Sotn['apply'](this, arguments);
        var w6$m = this['doc']['createComment'](xtolu8);
        this['locator'] && Svwmse$(this['locator'], w6$m), Shsw(this, w6$m);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function ($hg, uny905, y9nr05) {
        var jkd09r = this['doc']['implementation'];
        if (jkd09r && jkd09r['createDocumentType']) {
            var gtal = jkd09r['createDocumentType']($hg, uny905, y9nr05);
            this['locator'] && Svwmse$(this['locator'], gtal), Shsw(this, gtal);
        }
    },
    'warning': function (krfdj) {
        console['warn']('[xmldom warning]\t' + krfdj, Sepmw2b(this['locator']));
    },
    'error': function ($6hg) {
        console['error']('[xmldom error]\t' + $6hg, Sepmw2b(this['locator']));
    },
    'fatalError': function (swvmb) {
        throw console['error']('[xmldom fatalError]\t' + swvmb, Sepmw2b(this['locator'])), swvmb;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ia8g1) {
    Sg$h16i['prototype'][ia8g1] = function () {
        return null;
    };
});
var Sai6h1 = require('./a13a')['XMLReader'],
    Seb2wmp = exports['DOMImplementation'] = require('./wj')['DOMImplementation'];
exports['XMLSerializer'] = require('./wj')['XMLSerializer'], exports['DOMParser'] = Stoy5n;