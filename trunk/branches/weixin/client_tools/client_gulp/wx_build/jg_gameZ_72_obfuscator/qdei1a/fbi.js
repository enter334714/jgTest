var f = wx.$B;
function Sg1rlue(h8ij4) {
    this['options'] = h8ij4 || { 'locator': {} };
}
function Saodxq(url9, ik$, e8r7g9) {
    function qa02(jr789) {
        var z5px = url9[jr789];
        !z5px && vi6k$ && (z5px = 0x2 == url9['length'] ? function (xpqow) {
            url9(jr789, xpqow);
        } : url9), vs$m[jr789] = z5px && function (qadm2) {
            z5px('[xmldom ' + jr789 + ']\t' + qadm2 + Sxdqwoa(e8r7g9));
        } || function () {};
    }
    if (!url9) {
        if (ik$ instanceof Sf1gutl) return ik$;
        url9 = ik$;
    }
    var vs$m = {},
        vi6k$ = url9 instanceof Function;
    return e8r7g9 = e8r7g9 || {}, qa02('warning'), qa02('error'), qa02('fatalError'), vs$m;
}
function Sf1gutl() {
    this['cdata'] = !0x1;
}
function Sj3s4hi(sh3i4$, ergul1) {
    ergul1['lineNumber'] = sh3i4$['lineNumber'], ergul1['columnNumber'] = sh3i4$['columnNumber'];
}
function Sxdqwoa(yqpwo) {
    return yqpwo ? '\x0a@' + (yqpwo['systemId'] || '') + '#[line:' + yqpwo['lineNumber'] + ',col:' + yqpwo['columnNumber'] + ']' : void 0x0;
}
function Sxwpyo(elgu9, s4hki$, qdxwao) {
    return 'string' == typeof elgu9 ? elgu9['substr'](s4hki$, qdxwao) : elgu9['length'] >= s4hki$ + qdxwao || s4hki$ ? new java['lang']['String'](elgu9, s4hki$, qdxwao) + '' : elgu9;
}
function Sm0aqd2(wpoxyq, vsm$k6) {
    wpoxyq['currentElement'] ? wpoxyq['currentElement']['appendChild'](vsm$k6) : wpoxyq['doc']['appendChild'](vsm$k6);
}
Sg1rlue['prototype']['parseFromString'] = function (v6sm, leg1u) {
    var mda20q = this['options'],
        yxopwq = new Sawd0q(),
        wypxq = mda20q['domBuilder'] || new Sf1gutl(),
        utl1fg = mda20q['errorHandler'],
        elrg1u = mda20q['locator'],
        s34hj = mda20q['xmlns'] || {},
        p_5yb = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return elrg1u && wypxq['setDocumentLocator'](elrg1u), yxopwq['errorHandler'] = Saodxq(utl1fg, wypxq, elrg1u), yxopwq['domBuilder'] = mda20q['domBuilder'] || wypxq, /\/x?html?$/['test'](leg1u) && (p_5yb['nbsp'] = '\u00a0', p_5yb['copy'] = '©', s34hj[''] = 'http://www.w3.org/1999/xhtml'), s34hj['xml'] = s34hj['xml'] || 'http://www.w3.org/XML/1998/namespace', v6sm ? yxopwq['parse'](v6sm, s34hj, p_5yb) : yxopwq['errorHandler']['error']('invalid doc source'), wypxq['doc'];
}, Sf1gutl['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Sge1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (xwoap, xwyqo, k2v60, xqpaow) {
        var ki = this['doc'],
            py5zx = ki['createElementNS'](xwoap, k2v60 || xwyqo),
            zny_ = xqpaow['length'];
        Sm0aqd2(this, py5zx), this['currentElement'] = py5zx, this['locator'] && Sj3s4hi(this['locator'], py5zx);
        for (var h834i = 0x0; zny_ > h834i; h834i++) {
            var xwoap = xqpaow['getURI'](h834i),
                s4i$h = xqpaow['getValue'](h834i),
                k2v60 = xqpaow['getQName'](h834i),
                waxp = ki['createAttributeNS'](xwoap, k2v60);
            this['locator'] && Sj3s4hi(xqpaow['getLocator'](h834i), waxp), waxp['value'] = waxp['nodeValue'] = s4i$h, py5zx['setAttributeNode'](waxp);
        }
    },
    'endElement': function () {
        {
            var k26v0 = this['currentElement'];
            k26v0['tagName'];
        }
        this['currentElement'] = k26v0['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (smkv6$, wdaq) {
        var oy5w = this['doc']['createProcessingInstruction'](smkv6$, wdaq);
        this['locator'] && Sj3s4hi(this['locator'], oy5w), Sm0aqd2(this, oy5w);
    },
    'ignorableWhitespace': function () {},
    'characters': function (vmk6$) {
        if (vmk6$ = Sxwpyo['apply'](this, arguments)) {
            if (this['cdata']) var ivsk6 = this['doc']['createCDATASection'](vmk6$);else var ivsk6 = this['doc']['createTextNode'](vmk6$);
            this['currentElement'] ? this['currentElement']['appendChild'](ivsk6) : /^\s*$/['test'](vmk6$) && this['doc']['appendChild'](ivsk6), this['locator'] && Sj3s4hi(this['locator'], ivsk6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (lf1geu) {
        (this['locator'] = lf1geu) && (lf1geu['lineNumber'] = 0x0);
    },
    'comment': function (ge78r9) {
        ge78r9 = Sxwpyo['apply'](this, arguments);
        var xywo = this['doc']['createComment'](ge78r9);
        this['locator'] && Sj3s4hi(this['locator'], xywo), Sm0aqd2(this, xywo);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (w5xzy, wqpoyx, j93478) {
        var h43$ = this['doc']['implementation'];
        if (h43$ && h43$['createDocumentType']) {
            var avm0d2 = h43$['createDocumentType'](w5xzy, wqpoyx, j93478);
            this['locator'] && Sj3s4hi(this['locator'], avm0d2), Sm0aqd2(this, avm0d2);
        }
    },
    'warning': function (mkv062) {
        console['warn']('[xmldom warning]\t' + mkv062, Sxdqwoa(this['locator']));
    },
    'error': function (e1ulr) {
        console['error']('[xmldom error]\t' + e1ulr, Sxdqwoa(this['locator']));
    },
    'fatalError': function (woy5x) {
        throw console['error']('[xmldom fatalError]\t' + woy5x, Sxdqwoa(this['locator'])), woy5x;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (egufl) {
    Sf1gutl['prototype'][egufl] = function () {
        return null;
    };
});
var Sawd0q = require('./ulrf7a')['XMLReader'],
    Sge1 = exports['DOMImplementation'] = require('./g7bg')['DOMImplementation'];
exports['XMLSerializer'] = require('./g7bg')['XMLSerializer'], exports['DOMParser'] = Sg1rlue;