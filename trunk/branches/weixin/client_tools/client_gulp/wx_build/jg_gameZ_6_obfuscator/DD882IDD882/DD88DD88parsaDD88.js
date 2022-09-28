var G = wx.$E;
function Ejd5$k(i2ts1) {
    this['options'] = i2ts1 || { 'locator': {} };
}
function Ehnp9g(plnygx, wb8f7m, ckm$4) {
    function hu9gyp(g9hqua) {
        var c4mb$7 = plnygx[g9hqua];
        !c4mb$7 && jdi56 && (c4mb$7 = 0x2 == plnygx['length'] ? function (vf8qwr) {
            plnygx(g9hqua, vf8qwr);
        } : plnygx), s_it21[g9hqua] = c4mb$7 && function (_032ts) {
            c4mb$7('[xmldom ' + g9hqua + ']\t' + _032ts + Epglhyn(ckm$4));
        } || function () {};
    }
    if (!plnygx) {
        if (wb8f7m instanceof Em4b7c) return wb8f7m;
        plnygx = wb8f7m;
    }
    var s_it21 = {},
        jdi56 = plnygx instanceof Function;
    return ckm$4 = ckm$4 || {}, hu9gyp('warning'), hu9gyp('error'), hu9gyp('fatalError'), s_it21;
}
function Em4b7c() {
    this['cdata'] = !0x1;
}
function Enyxlop(qwra8v, xglnpy) {
    xglnpy['lineNumber'] = qwra8v['lineNumber'], xglnpy['columnNumber'] = qwra8v['columnNumber'];
}
function Epglhyn(hnygpl) {
    return hnygpl ? '\x0a@' + (hnygpl['systemId'] || '') + '#[line:' + hnygpl['lineNumber'] + ',col:' + hnygpl['columnNumber'] + ']' : void 0x0;
}
function Em74$b(rhq9u, hagu9q, yhgpu) {
    return 'string' == typeof rhq9u ? rhq9u['substr'](hagu9q, yhgpu) : rhq9u['length'] >= hagu9q + yhgpu || hagu9q ? new java['lang']['String'](rhq9u, hagu9q, yhgpu) + '' : rhq9u;
}
function Et_02(gyup9h, fw7m) {
    gyup9h['currentElement'] ? gyup9h['currentElement']['appendChild'](fw7m) : gyup9h['doc']['appendChild'](fw7m);
}
Ejd5$k['prototype']['parseFromString'] = function (s13t2, nxpyg) {
    var bk4$c6 = this['options'],
        _231s = new Et3z20s(),
        _3t2s0 = bk4$c6['domBuilder'] || new Em4b7c(),
        f8wv7r = bk4$c6['errorHandler'],
        k$j56d = bk4$c6['locator'],
        ck64 = bk4$c6['xmlns'] || {},
        augh9p = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return k$j56d && _3t2s0['setDocumentLocator'](k$j56d), _231s['errorHandler'] = Ehnp9g(f8wv7r, _3t2s0, k$j56d), _231s['domBuilder'] = bk4$c6['domBuilder'] || _3t2s0, /\/x?html?$/['test'](nxpyg) && (augh9p['nbsp'] = '\u00a0', augh9p['copy'] = '©', ck64[''] = 'http://www.w3.org/1999/xhtml'), ck64['xml'] = ck64['xml'] || 'http://www.w3.org/XML/1998/namespace', s13t2 ? _231s['parse'](s13t2, ck64, augh9p) : _231s['errorHandler']['error']('invalid doc source'), _3t2s0['doc'];
}, Em4b7c['prototype'] = {
    'startDocument': function () {
        this['doc'] = new E$jc65k()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (s1_2, s_2i1, a8vq, m874) {
        var tzs032 = this['doc'],
            huapg = tzs032['createElementNS'](s1_2, a8vq || s_2i1),
            yhn9g = m874['length'];
        Et_02(this, huapg), this['currentElement'] = huapg, this['locator'] && Enyxlop(this['locator'], huapg);
        for (var kj6$c = 0x0; yhn9g > kj6$c; kj6$c++) {
            var s1_2 = m874['getURI'](kj6$c),
                wqf8vr = m874['getValue'](kj6$c),
                a8vq = m874['getQName'](kj6$c),
                t3s20z = tzs032['createAttributeNS'](s1_2, a8vq);
            this['locator'] && Enyxlop(m874['getLocator'](kj6$c), t3s20z), t3s20z['value'] = t3s20z['nodeValue'] = wqf8vr, huapg['setAttributeNode'](t3s20z);
        }
    },
    'endElement': function () {
        {
            var gnhlyp = this['currentElement'];
            gnhlyp['tagName'];
        }
        this['currentElement'] = gnhlyp['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (kc$645, xyngl) {
        var y9gu = this['doc']['createProcessingInstruction'](kc$645, xyngl);
        this['locator'] && Enyxlop(this['locator'], y9gu), Et_02(this, y9gu);
    },
    'ignorableWhitespace': function () {},
    'characters': function (wrfv8q) {
        if (wrfv8q = Em74$b['apply'](this, arguments)) {
            if (this['cdata']) var p9yh = this['doc']['createCDATASection'](wrfv8q);else var p9yh = this['doc']['createTextNode'](wrfv8q);
            this['currentElement'] ? this['currentElement']['appendChild'](p9yh) : /^\s*$/['test'](wrfv8q) && this['doc']['appendChild'](p9yh), this['locator'] && Enyxlop(this['locator'], p9yh);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (ygxnlp) {
        (this['locator'] = ygxnlp) && (ygxnlp['lineNumber'] = 0x0);
    },
    'comment': function (ahr) {
        ahr = Em74$b['apply'](this, arguments);
        var arvwq8 = this['doc']['createComment'](ahr);
        this['locator'] && Enyxlop(this['locator'], arvwq8), Et_02(this, arvwq8);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (avwuq, rqh, rqwav8) {
        var i5dj6 = this['doc']['implementation'];
        if (i5dj6 && i5dj6['createDocumentType']) {
            var c7mfb = i5dj6['createDocumentType'](avwuq, rqh, rqwav8);
            this['locator'] && Enyxlop(this['locator'], c7mfb), Et_02(this, c7mfb);
        }
    },
    'warning': function (xyplo) {
        console['warn']('[xmldom warning]\t' + xyplo, Epglhyn(this['locator']));
    },
    'error': function (mfb748) {
        console['error']('[xmldom error]\t' + mfb748, Epglhyn(this['locator']));
    },
    'fatalError': function (t1s2_i) {
        throw console['error']('[xmldom fatalError]\t' + t1s2_i, Epglhyn(this['locator'])), t1s2_i;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (v8f7mw) {
    Em4b7c['prototype'][v8f7mw] = function () {
        return null;
    };
});
var Et3z20s = require('./DD88DD88cDD88DD88')['XMLReader'],
    E$jc65k = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];
exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Ejd5$k;