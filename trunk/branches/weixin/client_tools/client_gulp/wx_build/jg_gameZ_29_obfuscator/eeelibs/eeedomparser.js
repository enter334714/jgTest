var b = wx.$e;
function emopxdz(p2zmox) {
    this['options'] = p2zmox || { 'locator': {} };
}
function eielbwv(evbai, biqlh, d9u1mz) {
    function q8h36s(tgfjk$) {
        var r530y7 = evbai[tgfjk$];
        !r530y7 && y5cn_7 && (r530y7 = 0x2 == evbai['length'] ? function (cr507y) {
            evbai(tgfjk$, cr507y);
        } : evbai), ftgk4j[tgfjk$] = r530y7 && function (podzxm) {
            r530y7('[xmldom ' + tgfjk$ + ']\t' + podzxm + es6l8q(d9u1mz));
        } || function () {};
    }
    if (!evbai) {
        if (biqlh instanceof ekfx2$) return biqlh;
        evbai = biqlh;
    }
    var ftgk4j = {},
        y5cn_7 = evbai instanceof Function;
    return d9u1mz = d9u1mz || {}, q8h36s('warning'), q8h36s('error'), q8h36s('fatalError'), ftgk4j;
}
function ekfx2$() {
    this['cdata'] = !0x1;
}
function efjtk$g(ga4kw, iavweb) {
    iavweb['lineNumber'] = ga4kw['lineNumber'], iavweb['columnNumber'] = ga4kw['columnNumber'];
}
function es6l8q(f4gktj) {
    return f4gktj ? '\x0a@' + (f4gktj['systemId'] || '') + '#[line:' + f4gktj['lineNumber'] + ',col:' + f4gktj['columnNumber'] + ']' : void 0x0;
}
function eatgk(x2$p, cr57ny, isqvhl) {
    return 'string' == typeof x2$p ? x2$p['substr'](cr57ny, isqvhl) : x2$p['length'] >= cr57ny + isqvhl || cr57ny ? new java['lang']['String'](x2$p, cr57ny, isqvhl) + '' : x2$p;
}
function e$2kjf(dopz, px2m) {
    dopz['currentElement'] ? dopz['currentElement']['appendChild'](px2m) : dopz['doc']['appendChild'](px2m);
}
emopxdz['prototype']['parseFromString'] = function (fkt4ag, fk4gat) {
    var fgka4 = this['options'],
        s860h = new ek$fx2j(),
        fxj2 = fgka4['domBuilder'] || new ekfx2$(),
        tkga4 = fgka4['errorHandler'],
        jt$f2k = fgka4['locator'],
        moz1 = fgka4['xmlns'] || {},
        awgeb4 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return jt$f2k && fxj2['setDocumentLocator'](jt$f2k), s860h['errorHandler'] = eielbwv(tkga4, fxj2, jt$f2k), s860h['domBuilder'] = fgka4['domBuilder'] || fxj2, /\/x?html?$/['test'](fk4gat) && (awgeb4['nbsp'] = '\u00a0', awgeb4['copy'] = '©', moz1[''] = 'http://www.w3.org/1999/xhtml'), moz1['xml'] = moz1['xml'] || 'http://www.w3.org/XML/1998/namespace', fkt4ag ? s860h['parse'](fkt4ag, moz1, awgeb4) : s860h['errorHandler']['error']('invalid doc source'), fxj2['doc'];
}, ekfx2$['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ewiblev()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (bva4, islqh, si6lh, lwvibe) {
        var mz9pdo = this['doc'],
            nr5c = mz9pdo['createElementNS'](bva4, si6lh || islqh),
            r5ync = lwvibe['length'];
        e$2kjf(this, nr5c), this['currentElement'] = nr5c, this['locator'] && efjtk$g(this['locator'], nr5c);
        for (var jtk4f = 0x0; r5ync > jtk4f; jtk4f++) {
            var bva4 = lwvibe['getURI'](jtk4f),
                awkgt4 = lwvibe['getValue'](jtk4f),
                si6lh = lwvibe['getQName'](jtk4f),
                kfgj4 = mz9pdo['createAttributeNS'](bva4, si6lh);
            this['locator'] && efjtk$g(lwvibe['getLocator'](jtk4f), kfgj4), kfgj4['value'] = kfgj4['nodeValue'] = awkgt4, nr5c['setAttributeNode'](kfgj4);
        }
    },
    'endElement': function () {
        {
            var ls68q = this['currentElement'];
            ls68q['tagName'];
        }
        this['currentElement'] = ls68q['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (pxm2$, zpom9) {
        var mo$px2 = this['doc']['createProcessingInstruction'](pxm2$, zpom9);
        this['locator'] && efjtk$g(this['locator'], mo$px2), e$2kjf(this, mo$px2);
    },
    'ignorableWhitespace': function () {},
    'characters': function (pmzox) {
        if (pmzox = eatgk['apply'](this, arguments)) {
            if (this['cdata']) var pj$2ox = this['doc']['createCDATASection'](pmzox);else var pj$2ox = this['doc']['createTextNode'](pmzox);
            this['currentElement'] ? this['currentElement']['appendChild'](pj$2ox) : /^\s*$/['test'](pmzox) && this['doc']['appendChild'](pj$2ox), this['locator'] && efjtk$g(this['locator'], pj$2ox);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (r8063) {
        (this['locator'] = r8063) && (r8063['lineNumber'] = 0x0);
    },
    'comment': function (biwlve) {
        biwlve = eatgk['apply'](this, arguments);
        var tk$2jf = this['doc']['createComment'](biwlve);
        this['locator'] && efjtk$g(this['locator'], tk$2jf), e$2kjf(this, tk$2jf);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (watge4, ae4twg, l6s8hq) {
        var r76083 = this['doc']['implementation'];
        if (r76083 && r76083['createDocumentType']) {
            var o2xm$ = r76083['createDocumentType'](watge4, ae4twg, l6s8hq);
            this['locator'] && efjtk$g(this['locator'], o2xm$), e$2kjf(this, o2xm$);
        }
    },
    'warning': function (q6ihs) {
        console['warn']('[xmldom warning]\t' + q6ihs, es6l8q(this['locator']));
    },
    'error': function (blvewi) {
        console['error']('[xmldom error]\t' + blvewi, es6l8q(this['locator']));
    },
    'fatalError': function (y_7nc) {
        throw console['error']('[xmldom fatalError]\t' + y_7nc, es6l8q(this['locator'])), y_7nc;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ishq) {
    ekfx2$['prototype'][ishq] = function () {
        return null;
    };
});
var ek$fx2j = require('./eeesax')['XMLReader'],
    ewiblev = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = emopxdz;