var b = wx.$e;
function egx$73(r$xmsg) {
    this['options'] = r$xmsg || { 'locator': {} };
}
function ed6ht4q(r8l0ze, p137b, ze8lr) {
    function qfh4d6(gpb17) {
        var g$xsmb = r8l0ze[gpb17];
        !g$xsmb && $0msx && (g$xsmb = 0x2 == r8l0ze['length'] ? function (p73v) {
            r8l0ze(gpb17, p73v);
        } : r8l0ze), cqf95[gpb17] = g$xsmb && function (p2v7w) {
            g$xsmb('[xmldom ' + gpb17 + ']\t' + p2v7w + ei9zlc5(ze8lr));
        } || function () {};
    }
    if (!r8l0ze) {
        if (p137b instanceof ef4dch) return p137b;
        r8l0ze = p137b;
    }
    var cqf95 = {},
        $0msx = r8l0ze instanceof Function;
    return ze8lr = ze8lr || {}, qfh4d6('warning'), qfh4d6('error'), qfh4d6('fatalError'), cqf95;
}
function ef4dch() {
    this['cdata'] = !0x1;
}
function efqdcih(p27, cdfi) {
    cdfi['lineNumber'] = p27['lineNumber'], cdfi['columnNumber'] = p27['columnNumber'];
}
function ei9zlc5(s3bx$g) {
    return s3bx$g ? '\x0a@' + (s3bx$g['systemId'] || '') + '#[line:' + s3bx$g['lineNumber'] + ',col:' + s3bx$g['columnNumber'] + ']' : void 0x0;
}
function er0mesx(e08l, oup2w, qi5f) {
    return 'string' == typeof e08l ? e08l['substr'](oup2w, qi5f) : e08l['length'] >= oup2w + qi5f || oup2w ? new java['lang']['String'](e08l, oup2w, qi5f) + '' : e08l;
}
function eaktnj(l89ze0, bsm$gx) {
    l89ze0['currentElement'] ? l89ze0['currentElement']['appendChild'](bsm$gx) : l89ze0['doc']['appendChild'](bsm$gx);
}
egx$73['prototype']['parseFromString'] = function (s3xb, tn46k) {
    var yuow2 = this['options'],
        ci5 = new ee8l5(),
        xsr = yuow2['domBuilder'] || new ef4dch(),
        bg1$7 = yuow2['errorHandler'],
        p371vw = yuow2['locator'],
        ow2pvu = yuow2['xmlns'] || {},
        sxrme = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return p371vw && xsr['setDocumentLocator'](p371vw), ci5['errorHandler'] = ed6ht4q(bg1$7, xsr, p371vw), ci5['domBuilder'] = yuow2['domBuilder'] || xsr, /\/x?html?$/['test'](tn46k) && (sxrme['nbsp'] = '\u00a0', sxrme['copy'] = '©', ow2pvu[''] = 'http://www.w3.org/1999/xhtml'), ow2pvu['xml'] = ow2pvu['xml'] || 'http://www.w3.org/XML/1998/namespace', s3xb ? ci5['parse'](s3xb, ow2pvu, sxrme) : ci5['errorHandler']['error']('invalid doc source'), xsr['doc'];
}, ef4dch['prototype'] = {
    'startDocument': function () {
        this['doc'] = new eic5hfq()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (v3b, wo2p1, dqh6f4, s08e) {
        var nk6jt = this['doc'],
            nak_t = nk6jt['createElementNS'](v3b, dqh6f4 || wo2p1),
            $7g3bx = s08e['length'];
        eaktnj(this, nak_t), this['currentElement'] = nak_t, this['locator'] && efqdcih(this['locator'], nak_t);
        for (var $sxmb = 0x0; $7g3bx > $sxmb; $sxmb++) {
            var v3b = s08e['getURI']($sxmb),
                q6dfh4 = s08e['getValue']($sxmb),
                dqh6f4 = s08e['getQName']($sxmb),
                l895iz = nk6jt['createAttributeNS'](v3b, dqh6f4);
            this['locator'] && efqdcih(s08e['getLocator']($sxmb), l895iz), l895iz['value'] = l895iz['nodeValue'] = q6dfh4, nak_t['setAttributeNode'](l895iz);
        }
    },
    'endElement': function () {
        {
            var $3x7gb = this['currentElement'];
            $3x7gb['tagName'];
        }
        this['currentElement'] = $3x7gb['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (cf4hq, _knt6j) {
        var k4_6n = this['doc']['createProcessingInstruction'](cf4hq, _knt6j);
        this['locator'] && efqdcih(this['locator'], k4_6n), eaktnj(this, k4_6n);
    },
    'ignorableWhitespace': function () {},
    'characters': function (l8r0ze) {
        if (l8r0ze = er0mesx['apply'](this, arguments)) {
            if (this['cdata']) var g3$7bx = this['doc']['createCDATASection'](l8r0ze);else var g3$7bx = this['doc']['createTextNode'](l8r0ze);
            this['currentElement'] ? this['currentElement']['appendChild'](g3$7bx) : /^\s*$/['test'](l8r0ze) && this['doc']['appendChild'](g3$7bx), this['locator'] && efqdcih(this['locator'], g3$7bx);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (l89e5) {
        (this['locator'] = l89e5) && (l89e5['lineNumber'] = 0x0);
    },
    'comment': function (re8m) {
        re8m = er0mesx['apply'](this, arguments);
        var ez58 = this['doc']['createComment'](re8m);
        this['locator'] && efqdcih(this['locator'], ez58), eaktnj(this, ez58);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (ze8rl, x$37g, lz98e5) {
        var mxre = this['doc']['implementation'];
        if (mxre && mxre['createDocumentType']) {
            var cf4hd = mxre['createDocumentType'](ze8rl, x$37g, lz98e5);
            this['locator'] && efqdcih(this['locator'], cf4hd), eaktnj(this, cf4hd);
        }
    },
    'warning': function (cihf5q) {
        console['warn']('[xmldom warning]\t' + cihf5q, ei9zlc5(this['locator']));
    },
    'error': function (dh6q4) {
        console['error']('[xmldom error]\t' + dh6q4, ei9zlc5(this['locator']));
    },
    'fatalError': function (tjn_k6) {
        throw console['error']('[xmldom fatalError]\t' + tjn_k6, ei9zlc5(this['locator'])), tjn_k6;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vpo1) {
    ef4dch['prototype'][vpo1] = function () {
        return null;
    };
});
var ee8l5 = require('./eeesax')['XMLReader'],
    eic5hfq = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = egx$73;