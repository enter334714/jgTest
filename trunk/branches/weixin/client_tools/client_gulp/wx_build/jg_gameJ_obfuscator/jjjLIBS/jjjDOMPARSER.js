var S = wx.$J;
function j1_mqd1r(fd12q) {
    this['options'] = fd12q || { 'locator': {} };
}
function j1_nb4pu(rfd1qm, drm1q, izxha9) {
    function oy0cgl(pe3n) {
        var soy7 = rfd1qm[pe3n];
        !soy7 && zah9x$ && (soy7 = 0x2 == rfd1qm['length'] ? function (yl0) {
            rfd1qm(pe3n, yl0);
        } : rfd1qm), pebn5j[pe3n] = soy7 && function (d21f) {
            soy7('[xmldom ' + pe3n + ']\t' + d21f + j1_fr6m1(izxha9));
        } || function () {};
    }
    if (!rfd1qm) {
        if (drm1q instanceof j1_zi2x98) return drm1q;
        rfd1qm = drm1q;
    }
    var pebn5j = {},
        zah9x$ = rfd1qm instanceof Function;
    return izxha9 = izxha9 || {}, oy0cgl('warning'), oy0cgl('error'), oy0cgl('fatalError'), pebn5j;
}
function j1_zi2x98() {
    this['cdata'] = !0x1;
}
function j1_g6syok(az, rys67) {
    rys67['lineNumber'] = az['lineNumber'], rys67['columnNumber'] = az['columnNumber'];
}
function j1_fr6m1(pul4b) {
    return pul4b ? '\x0a@' + (pul4b['systemId'] || '') + '#[line:' + pul4b['lineNumber'] + ',col:' + pul4b['columnNumber'] + ']' : void 0x0;
}
function j1_b4c0lu(rd1qm, nj3p5w, q8m2d1) {
    return 'string' == typeof rd1qm ? rd1qm['substr'](nj3p5w, q8m2d1) : rd1qm['length'] >= nj3p5w + q8m2d1 || nj3p5w ? new java['lang']['String'](rd1qm, nj3p5w, q8m2d1) + '' : rd1qm;
}
function j1_vjw53n(ejnbp5, i1) {
    ejnbp5['currentElement'] ? ejnbp5['currentElement']['appendChild'](i1) : ejnbp5['doc']['appendChild'](i1);
}
j1_mqd1r['prototype']['parseFromString'] = function (ysrk7, $xhaz9) {
    var kf7mr6 = this['options'],
        i8d21q = new j1_x8qi2(),
        $zax9 = kf7mr6['domBuilder'] || new j1_zi2x98(),
        lc0u4b = kf7mr6['errorHandler'],
        fm67k = kf7mr6['locator'],
        zxa9$h = kf7mr6['xmlns'] || {},
        iq2d18 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return fm67k && $zax9['setDocumentLocator'](fm67k), i8d21q['errorHandler'] = j1_nb4pu(lc0u4b, $zax9, fm67k), i8d21q['domBuilder'] = kf7mr6['domBuilder'] || $zax9, /\/x?html?$/['test']($xhaz9) && (iq2d18['nbsp'] = '\u00a0', iq2d18['copy'] = '©', zxa9$h[''] = 'http://www.w3.org/1999/xhtml'), zxa9$h['xml'] = zxa9$h['xml'] || 'http://www.w3.org/XML/1998/namespace', ysrk7 ? i8d21q['parse'](ysrk7, zxa9$h, iq2d18) : i8d21q['errorHandler']['error']('invalid doc source'), $zax9['doc'];
}, j1_zi2x98['prototype'] = {
    'startDocument': function () {
        this['doc'] = new j1_enp4bu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (g04u, lo0c, s67ykr, xz9i8) {
        var dm218q = this['doc'],
            i9hza = dm218q['createElementNS'](g04u, s67ykr || lo0c),
            nej5p3 = xz9i8['length'];
        j1_vjw53n(this, i9hza), this['currentElement'] = i9hza, this['locator'] && j1_g6syok(this['locator'], i9hza);
        for (var zx9a = 0x0; nej5p3 > zx9a; zx9a++) {
            var g04u = xz9i8['getURI'](zx9a),
                ygsco = xz9i8['getValue'](zx9a),
                s67ykr = xz9i8['getQName'](zx9a),
                d8i = dm218q['createAttributeNS'](g04u, s67ykr);
            this['locator'] && j1_g6syok(xz9i8['getLocator'](zx9a), d8i), d8i['value'] = d8i['nodeValue'] = ygsco, i9hza['setAttributeNode'](d8i);
        }
    },
    'endElement': function () {
        {
            var qd2i8x = this['currentElement'];
            qd2i8x['tagName'];
        }
        this['currentElement'] = qd2i8x['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (lcgu0, goylc0) {
        var m7r16f = this['doc']['createProcessingInstruction'](lcgu0, goylc0);
        this['locator'] && j1_g6syok(this['locator'], m7r16f), j1_vjw53n(this, m7r16f);
    },
    'ignorableWhitespace': function () {},
    'characters': function (l0ug4c) {
        if (l0ug4c = j1_b4c0lu['apply'](this, arguments)) {
            if (this['cdata']) var id12q = this['doc']['createCDATASection'](l0ug4c);else var id12q = this['doc']['createTextNode'](l0ug4c);
            this['currentElement'] ? this['currentElement']['appendChild'](id12q) : /^\s*$/['test'](l0ug4c) && this['doc']['appendChild'](id12q), this['locator'] && j1_g6syok(this['locator'], id12q);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hazx9i) {
        (this['locator'] = hazx9i) && (hazx9i['lineNumber'] = 0x0);
    },
    'comment': function (aixz8) {
        aixz8 = j1_b4c0lu['apply'](this, arguments);
        var l0guo = this['doc']['createComment'](aixz8);
        this['locator'] && j1_g6syok(this['locator'], l0guo), j1_vjw53n(this, l0guo);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (m1dq2f, i8qxd, ucl0b4) {
        var wv5jn3 = this['doc']['implementation'];
        if (wv5jn3 && wv5jn3['createDocumentType']) {
            var bl0uc = wv5jn3['createDocumentType'](m1dq2f, i8qxd, ucl0b4);
            this['locator'] && j1_g6syok(this['locator'], bl0uc), j1_vjw53n(this, bl0uc);
        }
    },
    'warning': function (bue4pl) {
        console['warn']('[xmldom warning]\t' + bue4pl, j1_fr6m1(this['locator']));
    },
    'error': function (lgy0co) {
        console['error']('[xmldom error]\t' + lgy0co, j1_fr6m1(this['locator']));
    },
    'fatalError': function (eb4pl) {
        throw console['error']('[xmldom fatalError]\t' + eb4pl, j1_fr6m1(this['locator'])), eb4pl;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d289i) {
    j1_zi2x98['prototype'][d289i] = function () {
        return null;
    };
});
var j1_x8qi2 = require('./jjjSAX')['XMLReader'],
    j1_enp4bu = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];
exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_mqd1r;