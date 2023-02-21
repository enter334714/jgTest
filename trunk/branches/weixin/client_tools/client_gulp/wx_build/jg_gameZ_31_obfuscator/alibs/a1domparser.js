var c = wx.$a;
function gdhzq6k(b$lam9) {
    this['options'] = b$lam9 || { 'locator': {} };
}
function gx1jsfn(mbyc, k86dtq, znvsj) {
    function kq6dt8(oy$b0) {
        var dq6kt = mbyc[oy$b0];
        !dq6kt && lcby$ && (dq6kt = 0x2 == mbyc['length'] ? function (jvkhz) {
            mbyc(oy$b0, jvkhz);
        } : mbyc), jsfxnv[oy$b0] = dq6kt && function (yc0o$b) {
            dq6kt('[xmldom ' + oy$b0 + ']\t' + yc0o$b + gdz86k(znvsj));
        } || function () {};
    }
    if (!mbyc) {
        if (k86dtq instanceof gf2jx) return k86dtq;
        mbyc = k86dtq;
    }
    var jsfxnv = {},
        lcby$ = mbyc instanceof Function;
    return znvsj = znvsj || {}, kq6dt8('warning'), kq6dt8('error'), kq6dt8('fatalError'), jsfxnv;
}
function gf2jx() {
    this['cdata'] = !0x1;
}
function g_oye(ug2e1, vhzjk) {
    vhzjk['lineNumber'] = ug2e1['lineNumber'], vhzjk['columnNumber'] = ug2e1['columnNumber'];
}
function gdz86k(xsn1) {
    return xsn1 ? '\x0a@' + (xsn1['systemId'] || '') + '#[line:' + xsn1['lineNumber'] + ',col:' + xsn1['columnNumber'] + ']' : void 0x0;
}
function gkqd8z6(jvh, fjvnsx, tr6dq) {
    return 'string' == typeof jvh ? jvh['substr'](fjvnsx, tr6dq) : jvh['length'] >= fjvnsx + tr6dq || fjvnsx ? new java['lang']['String'](jvh, fjvnsx, tr6dq) + '' : jvh;
}
function gkv6nh(co0y$, d8q5t) {
    co0y$['currentElement'] ? co0y$['currentElement']['appendChild'](d8q5t) : co0y$['doc']['appendChild'](d8q5t);
}
gdhzq6k['prototype']['parseFromString'] = function (rt87q, fsx1g) {
    var ly0cb = this['options'],
        ew4u_ = new gq6k8z(),
        wg1e2 = ly0cb['domBuilder'] || new gf2jx(),
        e_4o0w = ly0cb['errorHandler'],
        _ou4e = ly0cb['locator'],
        $blc0 = ly0cb['xmlns'] || {},
        r8dtq = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return _ou4e && wg1e2['setDocumentLocator'](_ou4e), ew4u_['errorHandler'] = gx1jsfn(e_4o0w, wg1e2, _ou4e), ew4u_['domBuilder'] = ly0cb['domBuilder'] || wg1e2, /\/x?html?$/['test'](fsx1g) && (r8dtq['nbsp'] = '\u00a0', r8dtq['copy'] = '©', $blc0[''] = 'http://www.w3.org/1999/xhtml'), $blc0['xml'] = $blc0['xml'] || 'http://www.w3.org/XML/1998/namespace', rt87q ? ew4u_['parse'](rt87q, $blc0, r8dtq) : ew4u_['errorHandler']['error']('invalid doc source'), wg1e2['doc'];
}, gf2jx['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gt78r5q()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (oc40, b9l$am, kqd6h, gue4w) {
        var l$m9a = this['doc'],
            nzhvs = l$m9a['createElementNS'](oc40, kqd6h || b9l$am),
            xgs2f = gue4w['length'];
        gkv6nh(this, nzhvs), this['currentElement'] = nzhvs, this['locator'] && g_oye(this['locator'], nzhvs);
        for (var sxf1jn = 0x0; xgs2f > sxf1jn; sxf1jn++) {
            var oc40 = gue4w['getURI'](sxf1jn),
                p3rt = gue4w['getValue'](sxf1jn),
                kqd6h = gue4w['getQName'](sxf1jn),
                qd68kz = l$m9a['createAttributeNS'](oc40, kqd6h);
            this['locator'] && g_oye(gue4w['getLocator'](sxf1jn), qd68kz), qd68kz['value'] = qd68kz['nodeValue'] = p3rt, nzhvs['setAttributeNode'](qd68kz);
        }
    },
    'endElement': function () {
        {
            var vzsjh = this['currentElement'];
            vzsjh['tagName'];
        }
        this['currentElement'] = vzsjh['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (jsfxn1, g1eu2) {
        var q7r58 = this['doc']['createProcessingInstruction'](jsfxn1, g1eu2);
        this['locator'] && g_oye(this['locator'], q7r58), gkv6nh(this, q7r58);
    },
    'ignorableWhitespace': function () {},
    'characters': function (rt5d) {
        if (rt5d = gkqd8z6['apply'](this, arguments)) {
            if (this['cdata']) var nzvshj = this['doc']['createCDATASection'](rt5d);else var nzvshj = this['doc']['createTextNode'](rt5d);
            this['currentElement'] ? this['currentElement']['appendChild'](nzvshj) : /^\s*$/['test'](rt5d) && this['doc']['appendChild'](nzvshj), this['locator'] && g_oye(this['locator'], nzvshj);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (cl$0yb) {
        (this['locator'] = cl$0yb) && (cl$0yb['lineNumber'] = 0x0);
    },
    'comment': function (lyc$b) {
        lyc$b = gkqd8z6['apply'](this, arguments);
        var yc4bo = this['doc']['createComment'](lyc$b);
        this['locator'] && g_oye(this['locator'], yc4bo), gkv6nh(this, yc4bo);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (lb$mac, $bcyo0, zdkq8) {
        var u4wge_ = this['doc']['implementation'];
        if (u4wge_ && u4wge_['createDocumentType']) {
            var b$clym = u4wge_['createDocumentType'](lb$mac, $bcyo0, zdkq8);
            this['locator'] && g_oye(this['locator'], b$clym), gkv6nh(this, b$clym);
        }
    },
    'warning': function (u21gfx) {
        console['warn']('[xmldom warning]\t' + u21gfx, gdz86k(this['locator']));
    },
    'error': function (weug21) {
        console['error']('[xmldom error]\t' + weug21, gdz86k(this['locator']));
    },
    'fatalError': function (vn6zh) {
        throw console['error']('[xmldom fatalError]\t' + vn6zh, gdz86k(this['locator'])), vn6zh;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yb$) {
    gf2jx['prototype'][yb$] = function () {
        return null;
    };
});
var gq6k8z = require('./a1sax')['XMLReader'],
    gt78r5q = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gdhzq6k;