var u = wx.$x;
function xxvdi4g(o4mxsi) {
    this['options'] = o4mxsi || { 'locator': {} };
}
function xg4vnud(iszxo, t65zo2, wb01) {
    function hb0kw(cfj9) {
        var k1btw = iszxo[cfj9];
        !k1btw && hpq_ea && (k1btw = 0x2 == iszxo['length'] ? function (im4xso) {
            iszxo(cfj9, im4xso);
        } : iszxo), iv4ud[cfj9] = k1btw && function (pe0aqh) {
            k1btw('[xmldom ' + cfj9 + ']\t' + pe0aqh + xuidv4g(wb01));
        } || function () {};
    }
    if (!iszxo) {
        if (t65zo2 instanceof xmzo2s5) return t65zo2;
        iszxo = t65zo2;
    }
    var iv4ud = {},
        hpq_ea = iszxo instanceof Function;
    return wb01 = wb01 || {}, hb0kw('warning'), hb0kw('error'), hb0kw('fatalError'), iv4ud;
}
function xmzo2s5() {
    this['cdata'] = !0x1;
}
function xm25z6(s5zxmo, jclf) {
    jclf['lineNumber'] = s5zxmo['lineNumber'], jclf['columnNumber'] = s5zxmo['columnNumber'];
}
function xuidv4g(kw0eb1) {
    return kw0eb1 ? '\x0a@' + (kw0eb1['systemId'] || '') + '#[line:' + kw0eb1['lineNumber'] + ',col:' + kw0eb1['columnNumber'] + ']' : void 0x0;
}
function xdvcunj(fly879, w1btk3, j9nfcu) {
    return 'string' == typeof fly879 ? fly879['substr'](w1btk3, j9nfcu) : fly879['length'] >= w1btk3 + j9nfcu || w1btk3 ? new java['lang']['String'](fly879, w1btk3, j9nfcu) + '' : fly879;
}
function xqa0eph(eqh_a, l978y) {
    eqh_a['currentElement'] ? eqh_a['currentElement']['appendChild'](l978y) : eqh_a['doc']['appendChild'](l978y);
}
xxvdi4g['prototype']['parseFromString'] = function (t623, dxis) {
    var kb3w01 = this['options'],
        t1635 = new xz562to(),
        bh0kep = kb3w01['domBuilder'] || new xmzo2s5(),
        izoxm = kb3w01['errorHandler'],
        vfnucj = kb3w01['locator'],
        haepb0 = kb3w01['xmlns'] || {},
        ucjvfn = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return vfnucj && bh0kep['setDocumentLocator'](vfnucj), t1635['errorHandler'] = xg4vnud(izoxm, bh0kep, vfnucj), t1635['domBuilder'] = kb3w01['domBuilder'] || bh0kep, /\/x?html?$/['test'](dxis) && (ucjvfn['nbsp'] = '\u00a0', ucjvfn['copy'] = '©', haepb0[''] = 'http://www.w3.org/1999/xhtml'), haepb0['xml'] = haepb0['xml'] || 'http://www.w3.org/XML/1998/namespace', t623 ? t1635['parse'](t623, haepb0, ucjvfn) : t1635['errorHandler']['error']('invalid doc source'), bh0kep['doc'];
}, xmzo2s5['prototype'] = {
    'startDocument': function () {
        this['doc'] = new xkbe0ph()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (e0hq, gmsx4i, phe0qa, gsxi4m) {
        var vgixd = this['doc'],
            kbew0h = vgixd['createElementNS'](e0hq, phe0qa || gmsx4i),
            uvgd4i = gsxi4m['length'];
        xqa0eph(this, kbew0h), this['currentElement'] = kbew0h, this['locator'] && xm25z6(this['locator'], kbew0h);
        for (var l9f7j = 0x0; uvgd4i > l9f7j; l9f7j++) {
            var e0hq = gsxi4m['getURI'](l9f7j),
                s5zx = gsxi4m['getValue'](l9f7j),
                phe0qa = gsxi4m['getQName'](l9f7j),
                l7$8y = vgixd['createAttributeNS'](e0hq, phe0qa);
            this['locator'] && xm25z6(gsxi4m['getLocator'](l9f7j), l7$8y), l7$8y['value'] = l7$8y['nodeValue'] = s5zx, kbew0h['setAttributeNode'](l7$8y);
        }
    },
    'endElement': function () {
        {
            var apbeh0 = this['currentElement'];
            apbeh0['tagName'];
        }
        this['currentElement'] = apbeh0['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (pe0ahq, yl978$) {
        var hb0w = this['doc']['createProcessingInstruction'](pe0ahq, yl978$);
        this['locator'] && xm25z6(this['locator'], hb0w), xqa0eph(this, hb0w);
    },
    'ignorableWhitespace': function () {},
    'characters': function (duvgn) {
        if (duvgn = xdvcunj['apply'](this, arguments)) {
            if (this['cdata']) var xmszi = this['doc']['createCDATASection'](duvgn);else var xmszi = this['doc']['createTextNode'](duvgn);
            this['currentElement'] ? this['currentElement']['appendChild'](xmszi) : /^\s*$/['test'](duvgn) && this['doc']['appendChild'](xmszi), this['locator'] && xm25z6(this['locator'], xmszi);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (kebp0) {
        (this['locator'] = kebp0) && (kebp0['lineNumber'] = 0x0);
    },
    'comment': function (ncfvuj) {
        ncfvuj = xdvcunj['apply'](this, arguments);
        var _ehpqa = this['doc']['createComment'](ncfvuj);
        this['locator'] && xm25z6(this['locator'], _ehpqa), xqa0eph(this, _ehpqa);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (d4givx, ktb13, dv4iug) {
        var viud = this['doc']['implementation'];
        if (viud && viud['createDocumentType']) {
            var gims = viud['createDocumentType'](d4givx, ktb13, dv4iug);
            this['locator'] && xm25z6(this['locator'], gims), xqa0eph(this, gims);
        }
    },
    'warning': function (j79) {
        console['warn']('[xmldom warning]\t' + j79, xuidv4g(this['locator']));
    },
    'error': function (qa0p) {
        console['error']('[xmldom error]\t' + qa0p, xuidv4g(this['locator']));
    },
    'fatalError': function (p0hkeb) {
        throw console['error']('[xmldom fatalError]\t' + p0hkeb, xuidv4g(this['locator'])), p0hkeb;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (msxoiz) {
    xmzo2s5['prototype'][msxoiz] = function () {
        return null;
    };
});
var xz562to = require('./xxqxx')['XMLReader'],
    xkbe0ph = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];
exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xxvdi4g;