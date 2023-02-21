var b = wx.$e;
function ex1sj35(ofx9g) {
    this['options'] = ofx9g || { 'locator': {} };
}
function ey2u(n2sqj5, luhnq2, w8tv4r) {
    function b47drz(jqs325) {
        var wv8r4t = n2sqj5[jqs325];
        !wv8r4t && cz7 && (wv8r4t = 0x2 == n2sqj5['length'] ? function (wvte84) {
            n2sqj5(jqs325, wvte84);
        } : n2sqj5), a$iwet[jqs325] = wv8r4t && function (_0kf9) {
            wv8r4t('[xmldom ' + jqs325 + ']\t' + _0kf9 + en5qhu(w8tv4r));
        } || function () {};
    }
    if (!n2sqj5) {
        if (luhnq2 instanceof ewdr4) return luhnq2;
        n2sqj5 = luhnq2;
    }
    var a$iwet = {},
        cz7 = n2sqj5 instanceof Function;
    return w8tv4r = w8tv4r || {}, b47drz('warning'), b47drz('error'), b47drz('fatalError'), a$iwet;
}
function ewdr4() {
    this['cdata'] = !0x1;
}
function e_kaf(tv$wea, vr4t) {
    vr4t['lineNumber'] = tv$wea['lineNumber'], vr4t['columnNumber'] = tv$wea['columnNumber'];
}
function en5qhu(keia$t) {
    return keia$t ? '\x0a@' + (keia$t['systemId'] || '') + '#[line:' + keia$t['lineNumber'] + ',col:' + keia$t['columnNumber'] + ']' : void 0x0;
}
function eia$ke(f9km_0, omf90g, m9oxg1) {
    return 'string' == typeof f9km_0 ? f9km_0['substr'](omf90g, m9oxg1) : f9km_0['length'] >= omf90g + m9oxg1 || omf90g ? new java['lang']['String'](f9km_0, omf90g, m9oxg1) + '' : f9km_0;
}
function efmgo9(j32s5, t$wve8) {
    j32s5['currentElement'] ? j32s5['currentElement']['appendChild'](t$wve8) : j32s5['doc']['appendChild'](t$wve8);
}
ex1sj35['prototype']['parseFromString'] = function (w4, rz78d) {
    var watv$ = this['options'],
        lny2h = new eik$t(),
        vw48 = watv$['domBuilder'] || new ewdr4(),
        s3ox1 = watv$['errorHandler'],
        zb76cd = watv$['locator'],
        w84rv = watv$['xmlns'] || {},
        vwt8r = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return zb76cd && vw48['setDocumentLocator'](zb76cd), lny2h['errorHandler'] = ey2u(s3ox1, vw48, zb76cd), lny2h['domBuilder'] = watv$['domBuilder'] || vw48, /\/x?html?$/['test'](rz78d) && (vwt8r['nbsp'] = '\u00a0', vwt8r['copy'] = '©', w84rv[''] = 'http://www.w3.org/1999/xhtml'), w84rv['xml'] = w84rv['xml'] || 'http://www.w3.org/XML/1998/namespace', w4 ? lny2h['parse'](w4, w84rv, vwt8r) : lny2h['errorHandler']['error']('invalid doc source'), vw48['doc'];
}, ewdr4['prototype'] = {
    'startDocument': function () {
        this['doc'] = new eawtve$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (j35s2q, rzb4, bc7d, _09mfk) {
        var os1x3 = this['doc'],
            $wev8t = os1x3['createElementNS'](j35s2q, bc7d || rzb4),
            njqs = _09mfk['length'];
        efmgo9(this, $wev8t), this['currentElement'] = $wev8t, this['locator'] && e_kaf(this['locator'], $wev8t);
        for (var eiat$ = 0x0; njqs > eiat$; eiat$++) {
            var j35s2q = _09mfk['getURI'](eiat$),
                xm9o = _09mfk['getValue'](eiat$),
                bc7d = _09mfk['getQName'](eiat$),
                rdcz7 = os1x3['createAttributeNS'](j35s2q, bc7d);
            this['locator'] && e_kaf(_09mfk['getLocator'](eiat$), rdcz7), rdcz7['value'] = rdcz7['nodeValue'] = xm9o, $wev8t['setAttributeNode'](rdcz7);
        }
    },
    'endElement': function () {
        {
            var aeit$w = this['currentElement'];
            aeit$w['tagName'];
        }
        this['currentElement'] = aeit$w['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (mxfo9, j2n5sq) {
        var ogmf = this['doc']['createProcessingInstruction'](mxfo9, j2n5sq);
        this['locator'] && e_kaf(this['locator'], ogmf), efmgo9(this, ogmf);
    },
    'ignorableWhitespace': function () {},
    'characters': function ($0ki_a) {
        if ($0ki_a = eia$ke['apply'](this, arguments)) {
            if (this['cdata']) var _ika0f = this['doc']['createCDATASection']($0ki_a);else var _ika0f = this['doc']['createTextNode']($0ki_a);
            this['currentElement'] ? this['currentElement']['appendChild'](_ika0f) : /^\s*$/['test']($0ki_a) && this['doc']['appendChild'](_ika0f), this['locator'] && e_kaf(this['locator'], _ika0f);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (nu2hql) {
        (this['locator'] = nu2hql) && (nu2hql['lineNumber'] = 0x0);
    },
    'comment': function (_af0) {
        _af0 = eia$ke['apply'](this, arguments);
        var iaf0k_ = this['doc']['createComment'](_af0);
        this['locator'] && e_kaf(this['locator'], iaf0k_), efmgo9(this, iaf0k_);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (h2ynul, mg19xo, of9mg) {
        var dczrb = this['doc']['implementation'];
        if (dczrb && dczrb['createDocumentType']) {
            var w$8te = dczrb['createDocumentType'](h2ynul, mg19xo, of9mg);
            this['locator'] && e_kaf(this['locator'], w$8te), efmgo9(this, w$8te);
        }
    },
    'warning': function ($t8wev) {
        console['warn']('[xmldom warning]\t' + $t8wev, en5qhu(this['locator']));
    },
    'error': function ($eik) {
        console['error']('[xmldom error]\t' + $eik, en5qhu(this['locator']));
    },
    'fatalError': function (ofx9mg) {
        throw console['error']('[xmldom fatalError]\t' + ofx9mg, en5qhu(this['locator'])), ofx9mg;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vawe$t) {
    ewdr4['prototype'][vawe$t] = function () {
        return null;
    };
});
var eik$t = require('./a0njj')['XMLReader'],
    eawtve$ = exports['DOMImplementation'] = require('./gc')['DOMImplementation'];
exports['XMLSerializer'] = require('./gc')['XMLSerializer'], exports['DOMParser'] = ex1sj35;