var f = wx.$B;
function Sfa9s(zn1mp) {
    this['options'] = zn1mp || { 'locator': {} };
}
function Sj1$pn(rtw40, sbdk, jo$) {
    function d6huf(m$p1n) {
        var fus6d = rtw40[m$p1n];
        !fus6d && zyquh && (fus6d = 0x2 == rtw40['length'] ? function (mj1np$) {
            rtw40(m$p1n, mj1np$);
        } : rtw40), uqhezy[m$p1n] = fus6d && function (l32g) {
            fus6d('[xmldom ' + m$p1n + ']\t' + l32g + Sabs6f(jo$));
        } || function () {};
    }
    if (!rtw40) {
        if (sbdk instanceof Syzpnmj) return sbdk;
        rtw40 = sbdk;
    }
    var uqhezy = {},
        zyquh = rtw40 instanceof Function;
    return jo$ = jo$ || {}, d6huf('warning'), d6huf('error'), d6huf('fatalError'), uqhezy;
}
function Syzpnmj() {
    this['cdata'] = !0x1;
}
function Sp$mj1(kxs9, db9sf) {
    db9sf['lineNumber'] = kxs9['lineNumber'], db9sf['columnNumber'] = kxs9['columnNumber'];
}
function Sabs6f(sa9fb) {
    return sa9fb ? '\x0a@' + (sa9fb['systemId'] || '') + '#[line:' + sa9fb['lineNumber'] + ',col:' + sa9fb['columnNumber'] + ']' : void 0x0;
}
function Szhyuqe(t_xk0, l3$2g, uyezqh) {
    return 'string' == typeof t_xk0 ? t_xk0['substr'](l3$2g, uyezqh) : t_xk0['length'] >= l3$2g + uyezqh || l3$2g ? new java['lang']['String'](t_xk0, l3$2g, uyezqh) + '' : t_xk0;
}
function S_t50k(m1$on, t54wr) {
    m1$on['currentElement'] ? m1$on['currentElement']['appendChild'](t54wr) : m1$on['doc']['appendChild'](t54wr);
}
Sfa9s['prototype']['parseFromString'] = function (ef6q, ol32$) {
    var $132ol = this['options'],
        xt_09 = new Stxr045(),
        skba9d = $132ol['domBuilder'] || new Syzpnmj(),
        abds9f = $132ol['errorHandler'],
        mpjnzy = $132ol['locator'],
        wrt50 = $132ol['xmlns'] || {},
        t0r4w5 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return mpjnzy && skba9d['setDocumentLocator'](mpjnzy), xt_09['errorHandler'] = Sj1$pn(abds9f, skba9d, mpjnzy), xt_09['domBuilder'] = $132ol['domBuilder'] || skba9d, /\/x?html?$/['test'](ol32$) && (t0r4w5['nbsp'] = '\u00a0', t0r4w5['copy'] = '©', wrt50[''] = 'http://www.w3.org/1999/xhtml'), wrt50['xml'] = wrt50['xml'] || 'http://www.w3.org/XML/1998/namespace', ef6q ? xt_09['parse'](ef6q, wrt50, t0r4w5) : xt_09['errorHandler']['error']('invalid doc source'), skba9d['doc'];
}, Syzpnmj['prototype'] = {
    'startDocument': function () {
        this['doc'] = new S$nm1jp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (yjzmpn, $1o2j, d9s, _9ka0x) {
        var ksd9 = this['doc'],
            wr5t40 = ksd9['createElementNS'](yjzmpn, d9s || $1o2j),
            nm1j$ = _9ka0x['length'];
        S_t50k(this, wr5t40), this['currentElement'] = wr5t40, this['locator'] && Sp$mj1(this['locator'], wr5t40);
        for (var sba6d = 0x0; nm1j$ > sba6d; sba6d++) {
            var yjzmpn = _9ka0x['getURI'](sba6d),
                znp1m = _9ka0x['getValue'](sba6d),
                d9s = _9ka0x['getQName'](sba6d),
                oj2l1$ = ksd9['createAttributeNS'](yjzmpn, d9s);
            this['locator'] && Sp$mj1(_9ka0x['getLocator'](sba6d), oj2l1$), oj2l1$['value'] = oj2l1$['nodeValue'] = znp1m, wr5t40['setAttributeNode'](oj2l1$);
        }
    },
    'endElement': function () {
        {
            var fsd9 = this['currentElement'];
            fsd9['tagName'];
        }
        this['currentElement'] = fsd9['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (v3gl2i, zyqnp) {
        var $1ojl = this['doc']['createProcessingInstruction'](v3gl2i, zyqnp);
        this['locator'] && Sp$mj1(this['locator'], $1ojl), S_t50k(this, $1ojl);
    },
    'ignorableWhitespace': function () {},
    'characters': function (zpeyhq) {
        if (zpeyhq = Szhyuqe['apply'](this, arguments)) {
            if (this['cdata']) var dasf9 = this['doc']['createCDATASection'](zpeyhq);else var dasf9 = this['doc']['createTextNode'](zpeyhq);
            this['currentElement'] ? this['currentElement']['appendChild'](dasf9) : /^\s*$/['test'](zpeyhq) && this['doc']['appendChild'](dasf9), this['locator'] && Sp$mj1(this['locator'], dasf9);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (lmjo1) {
        (this['locator'] = lmjo1) && (lmjo1['lineNumber'] = 0x0);
    },
    'comment': function (xk_s) {
        xk_s = Szhyuqe['apply'](this, arguments);
        var zyenp = this['doc']['createComment'](xk_s);
        this['locator'] && Sp$mj1(this['locator'], zyenp), S_t50k(this, zyenp);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (jnzp1m, heub, npmy) {
        var znpqye = this['doc']['implementation'];
        if (znpqye && znpqye['createDocumentType']) {
            var yzpqhe = znpqye['createDocumentType'](jnzp1m, heub, npmy);
            this['locator'] && Sp$mj1(this['locator'], yzpqhe), S_t50k(this, yzpqhe);
        }
    },
    'warning': function (_0txk9) {
        console['warn']('[xmldom warning]\t' + _0txk9, Sabs6f(this['locator']));
    },
    'error': function (kx9a_) {
        console['error']('[xmldom error]\t' + kx9a_, Sabs6f(this['locator']));
    },
    'fatalError': function (o1ljm$) {
        throw console['error']('[xmldom fatalError]\t' + o1ljm$, Sabs6f(this['locator'])), o1ljm$;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (badsf9) {
    Syzpnmj['prototype'][badsf9] = function () {
        return null;
    };
});
var Stxr045 = require('./p3sh5a')['XMLReader'],
    S$nm1jp = exports['DOMImplementation'] = require('./a4lu')['DOMImplementation'];
exports['XMLSerializer'] = require('./a4lu')['XMLSerializer'], exports['DOMParser'] = Sfa9s;