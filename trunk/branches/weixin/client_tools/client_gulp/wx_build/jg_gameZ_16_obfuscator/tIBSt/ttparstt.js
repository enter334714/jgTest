var W = wx.$l;
function L9mgro8i(q3l$py) {
    this['options'] = q3l$py || { 'locator': {} };
}
function L9q3ytlp(d54azb, p3l, kef7w) {
    function abzv1d(nm04) {
        var oi6rg = d54azb[nm04];
        !oi6rg && j1vbd && (oi6rg = 0x2 == d54azb['length'] ? function (abvzd5) {
            d54azb(nm04, abvzd5);
        } : d54azb), rin4m0[nm04] = oi6rg && function (zvba1) {
            oi6rg('[xmldom ' + nm04 + ']\t' + zvba1 + L9lqytp3(kef7w));
        } || function () {};
    }
    if (!d54azb) {
        if (p3l instanceof L9zdb5v) return p3l;
        d54azb = p3l;
    }
    var rin4m0 = {},
        j1vbd = d54azb instanceof Function;
    return kef7w = kef7w || {}, abzv1d('warning'), abzv1d('error'), abzv1d('fatalError'), rin4m0;
}
function L9zdb5v() {
    this['cdata'] = !0x1;
}
function L9d4zba5(qsly, kc7_) {
    kc7_['lineNumber'] = qsly['lineNumber'], kc7_['columnNumber'] = qsly['columnNumber'];
}
function L9lqytp3(bvu1d) {
    return bvu1d ? '\x0a@' + (bvu1d['systemId'] || '') + '#[line:' + bvu1d['lineNumber'] + ',col:' + bvu1d['columnNumber'] + ']' : void 0x0;
}
function L9irmn40(dbzjv, w_ckxe, dbva) {
    return 'string' == typeof dbzjv ? dbzjv['substr'](w_ckxe, dbva) : dbzjv['length'] >= w_ckxe + dbva || w_ckxe ? new java['lang']['String'](dbzjv, w_ckxe, dbva) + '' : dbzjv;
}
function L9b1v(q3ypt, qfs$) {
    q3ypt['currentElement'] ? q3ypt['currentElement']['appendChild'](qfs$) : q3ypt['doc']['appendChild'](qfs$);
}
L9mgro8i['prototype']['parseFromString'] = function (t8r, a5dzv) {
    var i50nm = this['options'],
        gor8m = new L9a5vdzb(),
        $3ls2 = i50nm['domBuilder'] || new L9zdb5v(),
        vad1z = i50nm['errorHandler'],
        qs23$l = i50nm['locator'],
        gotp6y = i50nm['xmlns'] || {},
        qys$3 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qs23$l && $3ls2['setDocumentLocator'](qs23$l), gor8m['errorHandler'] = L9q3ytlp(vad1z, $3ls2, qs23$l), gor8m['domBuilder'] = i50nm['domBuilder'] || $3ls2, /\/x?html?$/['test'](a5dzv) && (qys$3['nbsp'] = '\u00a0', qys$3['copy'] = '©', gotp6y[''] = 'http://www.w3.org/1999/xhtml'), gotp6y['xml'] = gotp6y['xml'] || 'http://www.w3.org/XML/1998/namespace', t8r ? gor8m['parse'](t8r, gotp6y, qys$3) : gor8m['errorHandler']['error']('invalid doc source'), $3ls2['doc'];
}, L9zdb5v['prototype'] = {
    'startDocument': function () {
        this['doc'] = new L9vbza1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (a5zbvd, to8r6g, c2fkw, m54i) {
        var jdzb1 = this['doc'],
            a0z54 = jdzb1['createElementNS'](a5zbvd, c2fkw || to8r6g),
            qy$l = m54i['length'];
        L9b1v(this, a0z54), this['currentElement'] = a0z54, this['locator'] && L9d4zba5(this['locator'], a0z54);
        for (var m04in = 0x0; qy$l > m04in; m04in++) {
            var a5zbvd = m54i['getURI'](m04in),
                wkfe7 = m54i['getValue'](m04in),
                c2fkw = m54i['getQName'](m04in),
                l6y3pt = jdzb1['createAttributeNS'](a5zbvd, c2fkw);
            this['locator'] && L9d4zba5(m54i['getLocator'](m04in), l6y3pt), l6y3pt['value'] = l6y3pt['nodeValue'] = wkfe7, a0z54['setAttributeNode'](l6y3pt);
        }
    },
    'endElement': function () {
        {
            var d1hj = this['currentElement'];
            d1hj['tagName'];
        }
        this['currentElement'] = d1hj['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (bd5az4, kxc9e_) {
        var uvdbj = this['doc']['createProcessingInstruction'](bd5az4, kxc9e_);
        this['locator'] && L9d4zba5(this['locator'], uvdbj), L9b1v(this, uvdbj);
    },
    'ignorableWhitespace': function () {},
    'characters': function (bz4na) {
        if (bz4na = L9irmn40['apply'](this, arguments)) {
            if (this['cdata']) var tg68or = this['doc']['createCDATASection'](bz4na);else var tg68or = this['doc']['createTextNode'](bz4na);
            this['currentElement'] ? this['currentElement']['appendChild'](tg68or) : /^\s*$/['test'](bz4na) && this['doc']['appendChild'](tg68or), this['locator'] && L9d4zba5(this['locator'], tg68or);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (mo08i) {
        (this['locator'] = mo08i) && (mo08i['lineNumber'] = 0x0);
    },
    'comment': function (c7efwk) {
        c7efwk = L9irmn40['apply'](this, arguments);
        var qy3$pl = this['doc']['createComment'](c7efwk);
        this['locator'] && L9d4zba5(this['locator'], qy3$pl), L9b1v(this, qy3$pl);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (wcf7e, dva5z, xkcwe_) {
        var g36t = this['doc']['implementation'];
        if (g36t && g36t['createDocumentType']) {
            var kec9_x = g36t['createDocumentType'](wcf7e, dva5z, xkcwe_);
            this['locator'] && L9d4zba5(this['locator'], kec9_x), L9b1v(this, kec9_x);
        }
    },
    'warning': function (m4a5n0) {
        console['warn']('[xmldom warning]\t' + m4a5n0, L9lqytp3(this['locator']));
    },
    'error': function (c_xk9e) {
        console['error']('[xmldom error]\t' + c_xk9e, L9lqytp3(this['locator']));
    },
    'fatalError': function (qly3s$) {
        throw console['error']('[xmldom fatalError]\t' + qly3s$, L9lqytp3(this['locator'])), qly3s$;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_kxce9) {
    L9zdb5v['prototype'][_kxce9] = function () {
        return null;
    };
});
var L9a5vdzb = require('./tT12tt')['XMLReader'],
    L9vbza1 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = L9mgro8i;