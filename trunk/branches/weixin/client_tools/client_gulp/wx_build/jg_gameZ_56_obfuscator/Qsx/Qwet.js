var u = wx.$x;
function xkgrx(p0$w) {
    this['options'] = p0$w || { 'locator': {} };
}
function x$sw06(lob8q, cm06t, rgxz3k) {
    function m0t$p6(xcgk) {
        var eih = lob8q[xcgk];
        !eih && ps$y && (eih = 0x2 == lob8q['length'] ? function (pt6m$0) {
            lob8q(xcgk, pt6m$0);
        } : lob8q), x3ct[xcgk] = eih && function (m6tgc5) {
            eih('[xmldom ' + xcgk + ']\t' + m6tgc5 + xvad(rgxz3k));
        } || function () {};
    }
    if (!lob8q) {
        if (cm06t instanceof x$sm06p) return cm06t;
        lob8q = cm06t;
    }
    var x3ct = {},
        ps$y = lob8q instanceof Function;
    return rgxz3k = rgxz3k || {}, m0t$p6('warning'), m0t$p6('error'), m0t$p6('fatalError'), x3ct;
}
function x$sm06p() {
    this['cdata'] = !0x1;
}
function xad71yv(_qlo2, wyp$s7) {
    wyp$s7['lineNumber'] = _qlo2['lineNumber'], wyp$s7['columnNumber'] = _qlo2['columnNumber'];
}
function xvad(rzfku) {
    return rzfku ? '\x0a@' + (rzfku['systemId'] || '') + '#[line:' + rzfku['lineNumber'] + ',col:' + rzfku['columnNumber'] + ']' : void 0x0;
}
function x$0ms6p(t6c0m5, kr_2f, ol8qjb) {
    return 'string' == typeof t6c0m5 ? t6c0m5['substr'](kr_2f, ol8qjb) : t6c0m5['length'] >= kr_2f + ol8qjb || kr_2f ? new java['lang']['String'](t6c0m5, kr_2f, ol8qjb) + '' : t6c0m5;
}
function xy1da7v(pys$7w, kfzur3) {
    pys$7w['currentElement'] ? pys$7w['currentElement']['appendChild'](kfzur3) : pys$7w['doc']['appendChild'](kfzur3);
}
xkgrx['prototype']['parseFromString'] = function (vdwya, p0ms) {
    var $06psm = this['options'],
        gz3rk = new xcz3x5(),
        wpv7s = $06psm['domBuilder'] || new x$sm06p(),
        $p7 = $06psm['errorHandler'],
        t6mp0 = $06psm['locator'],
        $ps6m0 = $06psm['xmlns'] || {},
        _2ku = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return t6mp0 && wpv7s['setDocumentLocator'](t6mp0), gz3rk['errorHandler'] = x$sw06($p7, wpv7s, t6mp0), gz3rk['domBuilder'] = $06psm['domBuilder'] || wpv7s, /\/x?html?$/['test'](p0ms) && (_2ku['nbsp'] = '\u00a0', _2ku['copy'] = '©', $ps6m0[''] = 'http://www.w3.org/1999/xhtml'), $ps6m0['xml'] = $ps6m0['xml'] || 'http://www.w3.org/XML/1998/namespace', vdwya ? gz3rk['parse'](vdwya, $ps6m0, _2ku) : gz3rk['errorHandler']['error']('invalid doc source'), wpv7s['doc'];
}, x$sm06p['prototype'] = {
    'startDocument': function () {
        this['doc'] = new xctg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (iah1e4, k3gxcz, q8bojl, wyva) {
        var s0p6m$ = this['doc'],
            d7wy = s0p6m$['createElementNS'](iah1e4, q8bojl || k3gxcz),
            gtc5m6 = wyva['length'];
        xy1da7v(this, d7wy), this['currentElement'] = d7wy, this['locator'] && xad71yv(this['locator'], d7wy);
        for (var nie = 0x0; gtc5m6 > nie; nie++) {
            var iah1e4 = wyva['getURI'](nie),
                yvds = wyva['getValue'](nie),
                q8bojl = wyva['getQName'](nie),
                wpvsy = s0p6m$['createAttributeNS'](iah1e4, q8bojl);
            this['locator'] && xad71yv(wyva['getLocator'](nie), wpvsy), wpvsy['value'] = wpvsy['nodeValue'] = yvds, d7wy['setAttributeNode'](wpvsy);
        }
    },
    'endElement': function () {
        {
            var zrk2uf = this['currentElement'];
            zrk2uf['tagName'];
        }
        this['currentElement'] = zrk2uf['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (eahd41, x3tgc5) {
        var $m650t = this['doc']['createProcessingInstruction'](eahd41, x3tgc5);
        this['locator'] && xad71yv(this['locator'], $m650t), xy1da7v(this, $m650t);
    },
    'ignorableWhitespace': function () {},
    'characters': function (t$6m) {
        if (t$6m = x$0ms6p['apply'](this, arguments)) {
            if (this['cdata']) var vea1y = this['doc']['createCDATASection'](t$6m);else var vea1y = this['doc']['createTextNode'](t$6m);
            this['currentElement'] ? this['currentElement']['appendChild'](vea1y) : /^\s*$/['test'](t$6m) && this['doc']['appendChild'](vea1y), this['locator'] && xad71yv(this['locator'], vea1y);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (tcg6m) {
        (this['locator'] = tcg6m) && (tcg6m['lineNumber'] = 0x0);
    },
    'comment': function (e9h4in) {
        e9h4in = x$0ms6p['apply'](this, arguments);
        var m5gtxc = this['doc']['createComment'](e9h4in);
        this['locator'] && xad71yv(this['locator'], m5gtxc), xy1da7v(this, m5gtxc);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (p7w$0s, f3zxkr, l_8o2) {
        var o_8q2 = this['doc']['implementation'];
        if (o_8q2 && o_8q2['createDocumentType']) {
            var k3fzu = o_8q2['createDocumentType'](p7w$0s, f3zxkr, l_8o2);
            this['locator'] && xad71yv(this['locator'], k3fzu), xy1da7v(this, k3fzu);
        }
    },
    'warning': function ($swp60) {
        console['warn']('[xmldom warning]\t' + $swp60, xvad(this['locator']));
    },
    'error': function (bq8lo) {
        console['error']('[xmldom error]\t' + bq8lo, xvad(this['locator']));
    },
    'fatalError': function (k3rufz) {
        throw console['error']('[xmldom fatalError]\t' + k3rufz, xvad(this['locator'])), k3rufz;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wvyps7) {
    x$sm06p['prototype'][wvyps7] = function () {
        return null;
    };
});
var xcz3x5 = require('./Qweo')['XMLReader'],
    xctg = exports['DOMImplementation'] = require('./Qwer')['DOMImplementation'];
exports['XMLSerializer'] = require('./Qwer')['XMLSerializer'], exports['DOMParser'] = xkgrx;