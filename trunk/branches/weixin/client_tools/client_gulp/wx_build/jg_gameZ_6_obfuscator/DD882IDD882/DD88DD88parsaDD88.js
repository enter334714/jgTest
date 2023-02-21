var G = wx.$E;
function Ep9hyug(wmb7f) {
    this['options'] = wmb7f || { 'locator': {} };
}
function Elxyn(wuaqv, ts023z, xygpl) {
    function urqawv(s_1idt) {
        var wq8rv = wuaqv[s_1idt];
        !wq8rv && _1tdi && (wq8rv = 0x2 == wuaqv['length'] ? function (opl) {
            wuaqv(s_1idt, opl);
        } : wuaqv), $dk5j6[s_1idt] = wq8rv && function (wuvarq) {
            wq8rv('[xmldom ' + s_1idt + ']\t' + wuvarq + Ehqgua(xygpl));
        } || function () {};
    }
    if (!wuaqv) {
        if (ts023z instanceof Em8bf74) return ts023z;
        wuaqv = ts023z;
    }
    var $dk5j6 = {},
        _1tdi = wuaqv instanceof Function;
    return xygpl = xygpl || {}, urqawv('warning'), urqawv('error'), urqawv('fatalError'), $dk5j6;
}
function Em8bf74() {
    this['cdata'] = !0x1;
}
function Elpoyxn(ypnh9, wmv8) {
    wmv8['lineNumber'] = ypnh9['lineNumber'], wmv8['columnNumber'] = ypnh9['columnNumber'];
}
function Ehqgua(dik5j) {
    return dik5j ? '\x0a@' + (dik5j['systemId'] || '') + '#[line:' + dik5j['lineNumber'] + ',col:' + dik5j['columnNumber'] + ']' : void 0x0;
}
function Ehauq9(u9ra, b$6k4, wfv7r) {
    return 'string' == typeof u9ra ? u9ra['substr'](b$6k4, wfv7r) : u9ra['length'] >= b$6k4 + wfv7r || b$6k4 ? new java['lang']['String'](u9ra, b$6k4, wfv7r) + '' : u9ra;
}
function Edtsi_(h9aurq, ck56) {
    h9aurq['currentElement'] ? h9aurq['currentElement']['appendChild'](ck56) : h9aurq['doc']['appendChild'](ck56);
}
Ep9hyug['prototype']['parseFromString'] = function (c64kb$, fwb7) {
    var rvw78 = this['options'],
        avqwru = new Egyplx(),
        m4cb = rvw78['domBuilder'] || new Em8bf74(),
        wuvraq = rvw78['errorHandler'],
        c4k$65 = rvw78['locator'],
        nylxp = rvw78['xmlns'] || {},
        $bmc4 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return c4k$65 && m4cb['setDocumentLocator'](c4k$65), avqwru['errorHandler'] = Elxyn(wuvraq, m4cb, c4k$65), avqwru['domBuilder'] = rvw78['domBuilder'] || m4cb, /\/x?html?$/['test'](fwb7) && ($bmc4['nbsp'] = '\u00a0', $bmc4['copy'] = '©', nylxp[''] = 'http://www.w3.org/1999/xhtml'), nylxp['xml'] = nylxp['xml'] || 'http://www.w3.org/XML/1998/namespace', c64kb$ ? avqwru['parse'](c64kb$, nylxp, $bmc4) : avqwru['errorHandler']['error']('invalid doc source'), m4cb['doc'];
}, Em8bf74['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Eqawrv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (m7vf, k6c$j, zt03s, phu) {
        var v8ar = this['doc'],
            fcm4b7 = v8ar['createElementNS'](m7vf, zt03s || k6c$j),
            m478f = phu['length'];
        Edtsi_(this, fcm4b7), this['currentElement'] = fcm4b7, this['locator'] && Elpoyxn(this['locator'], fcm4b7);
        for (var dist = 0x0; m478f > dist; dist++) {
            var m7vf = phu['getURI'](dist),
                quva9 = phu['getValue'](dist),
                zt03s = phu['getQName'](dist),
                itj1_d = v8ar['createAttributeNS'](m7vf, zt03s);
            this['locator'] && Elpoyxn(phu['getLocator'](dist), itj1_d), itj1_d['value'] = itj1_d['nodeValue'] = quva9, fcm4b7['setAttributeNode'](itj1_d);
        }
    },
    'endElement': function () {
        {
            var wf8mv = this['currentElement'];
            wf8mv['tagName'];
        }
        this['currentElement'] = wf8mv['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ghq9u, sd1ti) {
        var qf8w = this['doc']['createProcessingInstruction'](ghq9u, sd1ti);
        this['locator'] && Elpoyxn(this['locator'], qf8w), Edtsi_(this, qf8w);
    },
    'ignorableWhitespace': function () {},
    'characters': function (idt_j1) {
        if (idt_j1 = Ehauq9['apply'](this, arguments)) {
            if (this['cdata']) var ji5k6 = this['doc']['createCDATASection'](idt_j1);else var ji5k6 = this['doc']['createTextNode'](idt_j1);
            this['currentElement'] ? this['currentElement']['appendChild'](ji5k6) : /^\s*$/['test'](idt_j1) && this['doc']['appendChild'](ji5k6), this['locator'] && Elpoyxn(this['locator'], ji5k6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (f78mwb) {
        (this['locator'] = f78mwb) && (f78mwb['lineNumber'] = 0x0);
    },
    'comment': function (hu) {
        hu = Ehauq9['apply'](this, arguments);
        var ikd = this['doc']['createComment'](hu);
        this['locator'] && Elpoyxn(this['locator'], ikd), Edtsi_(this, ikd);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (ghqa, m4fc, _2t3) {
        var lphg = this['doc']['implementation'];
        if (lphg && lphg['createDocumentType']) {
            var $ck4b = lphg['createDocumentType'](ghqa, m4fc, _2t3);
            this['locator'] && Elpoyxn(this['locator'], $ck4b), Edtsi_(this, $ck4b);
        }
    },
    'warning': function (hlnypg) {
        console['warn']('[xmldom warning]\t' + hlnypg, Ehqgua(this['locator']));
    },
    'error': function (bc4km) {
        console['error']('[xmldom error]\t' + bc4km, Ehqgua(this['locator']));
    },
    'fatalError': function (h9ngp) {
        throw console['error']('[xmldom fatalError]\t' + h9ngp, Ehqgua(this['locator'])), h9ngp;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d1_ij) {
    Em8bf74['prototype'][d1_ij] = function () {
        return null;
    };
});
var Egyplx = require('./DD88DD88cDD88DD88')['XMLReader'],
    Eqawrv = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];
exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Ep9hyug;