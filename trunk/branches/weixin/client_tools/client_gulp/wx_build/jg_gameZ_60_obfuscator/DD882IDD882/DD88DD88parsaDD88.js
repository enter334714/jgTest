var G = wx.$E;
function Evfw8qr(ylon) {
    this['options'] = ylon || { 'locator': {} };
}
function Egy9nh(pyxonl, qarh, ugq9h) {
    function q9uvr(pyon) {
        var rfq = pyxonl[pyon];
        !rfq && v9uqar && (rfq = 0x2 == pyxonl['length'] ? function (ti2_s1) {
            pyxonl(pyon, ti2_s1);
        } : pyxonl), vfmw78[pyon] = rfq && function (yglpxn) {
            rfq('[xmldom ' + pyon + ']\t' + yglpxn + E$cmk4(ugq9h));
        } || function () {};
    }
    if (!pyxonl) {
        if (qarh instanceof Ev8rqf) return qarh;
        pyxonl = qarh;
    }
    var vfmw78 = {},
        v9uqar = pyxonl instanceof Function;
    return ugq9h = ugq9h || {}, q9uvr('warning'), q9uvr('error'), q9uvr('fatalError'), vfmw78;
}
function Ev8rqf() {
    this['cdata'] = !0x1;
}
function Epnxygl(zs023t, quhra9) {
    quhra9['lineNumber'] = zs023t['lineNumber'], quhra9['columnNumber'] = zs023t['columnNumber'];
}
function E$cmk4($kcbm) {
    return $kcbm ? '\x0a@' + ($kcbm['systemId'] || '') + '#[line:' + $kcbm['lineNumber'] + ',col:' + $kcbm['columnNumber'] + ']' : void 0x0;
}
function Efbw7m8(i_sdt, hg9aup, mv7f8) {
    return 'string' == typeof i_sdt ? i_sdt['substr'](hg9aup, mv7f8) : i_sdt['length'] >= hg9aup + mv7f8 || hg9aup ? new java['lang']['String'](i_sdt, hg9aup, mv7f8) + '' : i_sdt;
}
function Ef7v8wm(kc5j$6, npoly) {
    kc5j$6['currentElement'] ? kc5j$6['currentElement']['appendChild'](npoly) : kc5j$6['doc']['appendChild'](npoly);
}
Evfw8qr['prototype']['parseFromString'] = function (z0t2s3, b748fm) {
    var c4mb7f = this['options'],
        yghnp = new Egn9yp(),
        huqra = c4mb7f['domBuilder'] || new Ev8rqf(),
        rw78f = c4mb7f['errorHandler'],
        qvwfr8 = c4mb7f['locator'],
        wv8qr = c4mb7f['xmlns'] || {},
        r9quha = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qvwfr8 && huqra['setDocumentLocator'](qvwfr8), yghnp['errorHandler'] = Egy9nh(rw78f, huqra, qvwfr8), yghnp['domBuilder'] = c4mb7f['domBuilder'] || huqra, /\/x?html?$/['test'](b748fm) && (r9quha['nbsp'] = '\u00a0', r9quha['copy'] = '©', wv8qr[''] = 'http://www.w3.org/1999/xhtml'), wv8qr['xml'] = wv8qr['xml'] || 'http://www.w3.org/XML/1998/namespace', z0t2s3 ? yghnp['parse'](z0t2s3, wv8qr, r9quha) : yghnp['errorHandler']['error']('invalid doc source'), huqra['doc'];
}, Ev8rqf['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Es1_t2i()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (sdt, mkc4$, quawvr, pxygnl) {
        var _s12 = this['doc'],
            w7f8vm = _s12['createElementNS'](sdt, quawvr || mkc4$),
            olnpyx = pxygnl['length'];
        Ef7v8wm(this, w7f8vm), this['currentElement'] = w7f8vm, this['locator'] && Epnxygl(this['locator'], w7f8vm);
        for (var $cj5 = 0x0; olnpyx > $cj5; $cj5++) {
            var sdt = pxygnl['getURI']($cj5),
                mvfw87 = pxygnl['getValue']($cj5),
                quawvr = pxygnl['getQName']($cj5),
                f8vr7 = _s12['createAttributeNS'](sdt, quawvr);
            this['locator'] && Epnxygl(pxygnl['getLocator']($cj5), f8vr7), f8vr7['value'] = f8vr7['nodeValue'] = mvfw87, w7f8vm['setAttributeNode'](f8vr7);
        }
    },
    'endElement': function () {
        {
            var ygphu9 = this['currentElement'];
            ygphu9['tagName'];
        }
        this['currentElement'] = ygphu9['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (jd165i, loynx) {
        var mk4b = this['doc']['createProcessingInstruction'](jd165i, loynx);
        this['locator'] && Epnxygl(this['locator'], mk4b), Ef7v8wm(this, mk4b);
    },
    'ignorableWhitespace': function () {},
    'characters': function (b6$ck4) {
        if (b6$ck4 = Efbw7m8['apply'](this, arguments)) {
            if (this['cdata']) var gphuy = this['doc']['createCDATASection'](b6$ck4);else var gphuy = this['doc']['createTextNode'](b6$ck4);
            this['currentElement'] ? this['currentElement']['appendChild'](gphuy) : /^\s*$/['test'](b6$ck4) && this['doc']['appendChild'](gphuy), this['locator'] && Epnxygl(this['locator'], gphuy);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (fv8wm7) {
        (this['locator'] = fv8wm7) && (fv8wm7['lineNumber'] = 0x0);
    },
    'comment': function (aqrv9) {
        aqrv9 = Efbw7m8['apply'](this, arguments);
        var aqrwu = this['doc']['createComment'](aqrv9);
        this['locator'] && Epnxygl(this['locator'], aqrwu), Ef7v8wm(this, aqrwu);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (f8vwr7, i_2st1, b7$cm4) {
        var td1j_i = this['doc']['implementation'];
        if (td1j_i && td1j_i['createDocumentType']) {
            var sz30t2 = td1j_i['createDocumentType'](f8vwr7, i_2st1, b7$cm4);
            this['locator'] && Epnxygl(this['locator'], sz30t2), Ef7v8wm(this, sz30t2);
        }
    },
    'warning': function (f87vwr) {
        console['warn']('[xmldom warning]\t' + f87vwr, E$cmk4(this['locator']));
    },
    'error': function ($j65c) {
        console['error']('[xmldom error]\t' + $j65c, E$cmk4(this['locator']));
    },
    'fatalError': function (t1_32) {
        throw console['error']('[xmldom fatalError]\t' + t1_32, E$cmk4(this['locator'])), t1_32;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kd6$j) {
    Ev8rqf['prototype'][kd6$j] = function () {
        return null;
    };
});
var Egn9yp = require('./DD88DD88cDD88DD88')['XMLReader'],
    Es1_t2i = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];
exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Evfw8qr;