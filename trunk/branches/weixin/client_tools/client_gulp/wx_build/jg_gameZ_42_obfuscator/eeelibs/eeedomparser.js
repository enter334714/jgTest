var b = wx.$e;
function exi$j3g(yf4v7_) {
    this['options'] = yf4v7_ || { 'locator': {} };
}
function eylrhzt(vyfrz4, f7vy4_, yztlrh) {
    function bd5k(z_f4vy) {
        var g$3 = vyfrz4[z_f4vy];
        !g$3 && kub6 && (g$3 = 0x2 == vyfrz4['length'] ? function (_cm7a) {
            vyfrz4(z_f4vy, _cm7a);
        } : vyfrz4), v4a_[z_f4vy] = g$3 && function (cpmaoe) {
            g$3('[xmldom ' + z_f4vy + ']\t' + cpmaoe + emcao7(yztlrh));
        } || function () {};
    }
    if (!vyfrz4) {
        if (f7vy4_ instanceof esn6u) return f7vy4_;
        vyfrz4 = f7vy4_;
    }
    var v4a_ = {},
        kub6 = vyfrz4 instanceof Function;
    return yztlrh = yztlrh || {}, bd5k('warning'), bd5k('error'), bd5k('fatalError'), v4a_;
}
function esn6u() {
    this['cdata'] = !0x1;
}
function ejt$(hl$gxt, qksn) {
    qksn['lineNumber'] = hl$gxt['lineNumber'], qksn['columnNumber'] = hl$gxt['columnNumber'];
}
function emcao7(q$3xj) {
    return q$3xj ? '\x0a@' + (q$3xj['systemId'] || '') + '#[line:' + q$3xj['lineNumber'] + ',col:' + q$3xj['columnNumber'] + ']' : void 0x0;
}
function ejnq$i(yrfhl, ac7_mo, jq3n$i) {
    return 'string' == typeof yrfhl ? yrfhl['substr'](ac7_mo, jq3n$i) : yrfhl['length'] >= ac7_mo + jq3n$i || ac7_mo ? new java['lang']['String'](yrfhl, ac7_mo, jq3n$i) + '' : yrfhl;
}
function em_a4(d685, bd0586) {
    d685['currentElement'] ? d685['currentElement']['appendChild'](bd0586) : d685['doc']['appendChild'](bd0586);
}
exi$j3g['prototype']['parseFromString'] = function (w58d0b, igt$j) {
    var tixlg$ = this['options'],
        v4zf = new en9sk6(),
        f_vzy = tixlg$['domBuilder'] || new esn6u(),
        jus3 = tixlg$['errorHandler'],
        _cma47 = tixlg$['locator'],
        dw1528 = tixlg$['xmlns'] || {},
        sukb = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return _cma47 && f_vzy['setDocumentLocator'](_cma47), v4zf['errorHandler'] = eylrhzt(jus3, f_vzy, _cma47), v4zf['domBuilder'] = tixlg$['domBuilder'] || f_vzy, /\/x?html?$/['test'](igt$j) && (sukb['nbsp'] = '\u00a0', sukb['copy'] = '©', dw1528[''] = 'http://www.w3.org/1999/xhtml'), dw1528['xml'] = dw1528['xml'] || 'http://www.w3.org/XML/1998/namespace', w58d0b ? v4zf['parse'](w58d0b, dw1528, sukb) : v4zf['errorHandler']['error']('invalid doc source'), f_vzy['doc'];
}, esn6u['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ehlryt()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (kb60d5, apcome, xgj3i$, $jgx3) {
        var jxgt$ = this['doc'],
            fa4v = jxgt$['createElementNS'](kb60d5, xgj3i$ || apcome),
            yhztrl = $jgx3['length'];
        em_a4(this, fa4v), this['currentElement'] = fa4v, this['locator'] && ejt$(this['locator'], fa4v);
        for (var ujn3iq = 0x0; yhztrl > ujn3iq; ujn3iq++) {
            var kb60d5 = $jgx3['getURI'](ujn3iq),
                suq3nj = $jgx3['getValue'](ujn3iq),
                xgj3i$ = $jgx3['getQName'](ujn3iq),
                i$jgtx = jxgt$['createAttributeNS'](kb60d5, xgj3i$);
            this['locator'] && ejt$($jgx3['getLocator'](ujn3iq), i$jgtx), i$jgtx['value'] = i$jgtx['nodeValue'] = suq3nj, fa4v['setAttributeNode'](i$jgtx);
        }
    },
    'endElement': function () {
        {
            var w5bd0 = this['currentElement'];
            w5bd0['tagName'];
        }
        this['currentElement'] = w5bd0['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (fvry4z, n3qu9s) {
        var zyrfv = this['doc']['createProcessingInstruction'](fvry4z, n3qu9s);
        this['locator'] && ejt$(this['locator'], zyrfv), em_a4(this, zyrfv);
    },
    'ignorableWhitespace': function () {},
    'characters': function (trxhlg) {
        if (trxhlg = ejnq$i['apply'](this, arguments)) {
            if (this['cdata']) var gixl$ = this['doc']['createCDATASection'](trxhlg);else var gixl$ = this['doc']['createTextNode'](trxhlg);
            this['currentElement'] ? this['currentElement']['appendChild'](gixl$) : /^\s*$/['test'](trxhlg) && this['doc']['appendChild'](gixl$), this['locator'] && ejt$(this['locator'], gixl$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (eopamc) {
        (this['locator'] = eopamc) && (eopamc['lineNumber'] = 0x0);
    },
    'comment': function (xi$tl) {
        xi$tl = ejnq$i['apply'](this, arguments);
        var k0bs69 = this['doc']['createComment'](xi$tl);
        this['locator'] && ejt$(this['locator'], k0bs69), em_a4(this, k0bs69);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (qnui, n3iq$, _vm4a7) {
        var jus = this['doc']['implementation'];
        if (jus && jus['createDocumentType']) {
            var j3$xig = jus['createDocumentType'](qnui, n3iq$, _vm4a7);
            this['locator'] && ejt$(this['locator'], j3$xig), em_a4(this, j3$xig);
        }
    },
    'warning': function (b5w8d) {
        console['warn']('[xmldom warning]\t' + b5w8d, emcao7(this['locator']));
    },
    'error': function (zgtlh) {
        console['error']('[xmldom error]\t' + zgtlh, emcao7(this['locator']));
    },
    'fatalError': function (fyrh) {
        throw console['error']('[xmldom fatalError]\t' + fyrh, emcao7(this['locator'])), fyrh;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yvfz4_) {
    esn6u['prototype'][yvfz4_] = function () {
        return null;
    };
});
var en9sk6 = require('./eeesax')['XMLReader'],
    ehlryt = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = exi$j3g;