var b = wx.$e;
function es3nuj(w0d25) {
    this['options'] = w0d25 || { 'locator': {} };
}
function egijx3$(lx$th, d0k9b6, tji$g) {
    function dw5802(qin3$j) {
        var b06d9k = lx$th[qin3$j];
        !b06d9k && txl$ && (b06d9k = 0x2 == lx$th['length'] ? function (m_o7c) {
            lx$th(qin3$j, m_o7c);
        } : lx$th), acp7m[qin3$j] = b06d9k && function (jquns3) {
            b06d9k('[xmldom ' + qin3$j + ']\t' + jquns3 + exq3$i(tji$g));
        } || function () {};
    }
    if (!lx$th) {
        if (d0k9b6 instanceof es0bk9) return d0k9b6;
        lx$th = d0k9b6;
    }
    var acp7m = {},
        txl$ = lx$th instanceof Function;
    return tji$g = tji$g || {}, dw5802('warning'), dw5802('error'), dw5802('fatalError'), acp7m;
}
function es0bk9() {
    this['cdata'] = !0x1;
}
function ed1w58(macp, _moca7) {
    _moca7['lineNumber'] = macp['lineNumber'], _moca7['columnNumber'] = macp['columnNumber'];
}
function exq3$i(d0b6k5) {
    return d0b6k5 ? '\x0a@' + (d0b6k5['systemId'] || '') + '#[line:' + d0b6k5['lineNumber'] + ',col:' + d0b6k5['columnNumber'] + ']' : void 0x0;
}
function esq3un(av_47, ghtx, d0w5b) {
    return 'string' == typeof av_47 ? av_47['substr'](ghtx, d0w5b) : av_47['length'] >= ghtx + d0w5b || ghtx ? new java['lang']['String'](av_47, ghtx, d0w5b) + '' : av_47;
}
function em_c7o(pceo, jsnuq) {
    pceo['currentElement'] ? pceo['currentElement']['appendChild'](jsnuq) : pceo['doc']['appendChild'](jsnuq);
}
es3nuj['prototype']['parseFromString'] = function (dkb506, ecamo) {
    var sk90b = this['options'],
        hrzf = new edbk09(),
        ylzth = sk90b['domBuilder'] || new es0bk9(),
        s6k0b = sk90b['errorHandler'],
        yzrvhf = sk90b['locator'],
        $gijxt = sk90b['xmlns'] || {},
        u3qni = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return yzrvhf && ylzth['setDocumentLocator'](yzrvhf), hrzf['errorHandler'] = egijx3$(s6k0b, ylzth, yzrvhf), hrzf['domBuilder'] = sk90b['domBuilder'] || ylzth, /\/x?html?$/['test'](ecamo) && (u3qni['nbsp'] = '\u00a0', u3qni['copy'] = '©', $gijxt[''] = 'http://www.w3.org/1999/xhtml'), $gijxt['xml'] = $gijxt['xml'] || 'http://www.w3.org/XML/1998/namespace', dkb506 ? hrzf['parse'](dkb506, $gijxt, u3qni) : hrzf['errorHandler']['error']('invalid doc source'), ylzth['doc'];
}, es0bk9['prototype'] = {
    'startDocument': function () {
        this['doc'] = new emaop7c()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (iq3u, i$nj3q, w580db, un39q) {
        var z4vyrf = this['doc'],
            htzg = z4vyrf['createElementNS'](iq3u, w580db || i$nj3q),
            kd6b90 = un39q['length'];
        em_c7o(this, htzg), this['currentElement'] = htzg, this['locator'] && ed1w58(this['locator'], htzg);
        for (var d580wb = 0x0; kd6b90 > d580wb; d580wb++) {
            var iq3u = un39q['getURI'](d580wb),
                f4zv = un39q['getValue'](d580wb),
                w580db = un39q['getQName'](d580wb),
                s9ub6 = z4vyrf['createAttributeNS'](iq3u, w580db);
            this['locator'] && ed1w58(un39q['getLocator'](d580wb), s9ub6), s9ub6['value'] = s9ub6['nodeValue'] = f4zv, htzg['setAttributeNode'](s9ub6);
        }
    },
    'endElement': function () {
        {
            var a4f = this['currentElement'];
            a4f['tagName'];
        }
        this['currentElement'] = a4f['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ecao, $3injq) {
        var iqj3 = this['doc']['createProcessingInstruction'](ecao, $3injq);
        this['locator'] && ed1w58(this['locator'], iqj3), em_c7o(this, iqj3);
    },
    'ignorableWhitespace': function () {},
    'characters': function (grlzt) {
        if (grlzt = esq3un['apply'](this, arguments)) {
            if (this['cdata']) var k9snuq = this['doc']['createCDATASection'](grlzt);else var k9snuq = this['doc']['createTextNode'](grlzt);
            this['currentElement'] ? this['currentElement']['appendChild'](k9snuq) : /^\s*$/['test'](grlzt) && this['doc']['appendChild'](k9snuq), this['locator'] && ed1w58(this['locator'], k9snuq);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (rzf4y) {
        (this['locator'] = rzf4y) && (rzf4y['lineNumber'] = 0x0);
    },
    'comment': function (lxtr) {
        lxtr = esq3un['apply'](this, arguments);
        var ac7om = this['doc']['createComment'](lxtr);
        this['locator'] && ed1w58(this['locator'], ac7om), em_c7o(this, ac7om);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (b85wd0, yfhrv, $qni3j) {
        var d6k0b5 = this['doc']['implementation'];
        if (d6k0b5 && d6k0b5['createDocumentType']) {
            var $ixqj = d6k0b5['createDocumentType'](b85wd0, yfhrv, $qni3j);
            this['locator'] && ed1w58(this['locator'], $ixqj), em_c7o(this, $ixqj);
        }
    },
    'warning': function (txhlg$) {
        console['warn']('[xmldom warning]\t' + txhlg$, exq3$i(this['locator']));
    },
    'error': function (itlgx) {
        console['error']('[xmldom error]\t' + itlgx, exq3$i(this['locator']));
    },
    'fatalError': function (v4_a7f) {
        throw console['error']('[xmldom fatalError]\t' + v4_a7f, exq3$i(this['locator'])), v4_a7f;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (unqij3) {
    es0bk9['prototype'][unqij3] = function () {
        return null;
    };
});
var edbk09 = require('./eeesax')['XMLReader'],
    emaop7c = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = es3nuj;