var b = wx.$e;
function enj$qi(xgtli$) {
    this['options'] = xgtli$ || { 'locator': {} };
}
function esbk609(xhlr, frzlhy, bdk09) {
    function u39qs(ma7p) {
        var x$h = xhlr[ma7p];
        !x$h && b0w8d && (x$h = 0x2 == xhlr['length'] ? function (s9ubk) {
            xhlr(ma7p, s9ubk);
        } : xhlr), xt$lgi[ma7p] = x$h && function (zrflyh) {
            x$h('[xmldom ' + ma7p + ']\t' + zrflyh + em_4(bdk09));
        } || function () {};
    }
    if (!xhlr) {
        if (frzlhy instanceof ek96sb) return frzlhy;
        xhlr = frzlhy;
    }
    var xt$lgi = {},
        b0w8d = xhlr instanceof Function;
    return bdk09 = bdk09 || {}, u39qs('warning'), u39qs('error'), u39qs('fatalError'), xt$lgi;
}
function ek96sb() {
    this['cdata'] = !0x1;
}
function ej$3ixg(q3usj, k0d9b6) {
    k0d9b6['lineNumber'] = q3usj['lineNumber'], k0d9b6['columnNumber'] = q3usj['columnNumber'];
}
function em_4(lfrhyz) {
    return lfrhyz ? '\x0a@' + (lfrhyz['systemId'] || '') + '#[line:' + lfrhyz['lineNumber'] + ',col:' + lfrhyz['columnNumber'] + ']' : void 0x0;
}
function extlig(juq3in, f4va7, zrgtl) {
    return 'string' == typeof juq3in ? juq3in['substr'](f4va7, zrgtl) : juq3in['length'] >= f4va7 + zrgtl || f4va7 ? new java['lang']['String'](juq3in, f4va7, zrgtl) + '' : juq3in;
}
function e$qxji(zrvhyf, njqui3) {
    zrvhyf['currentElement'] ? zrvhyf['currentElement']['appendChild'](njqui3) : zrvhyf['doc']['appendChild'](njqui3);
}
enj$qi['prototype']['parseFromString'] = function (d8w512, usnk96) {
    var vfrhzy = this['options'],
        qu9nsk = new ef_4vyz(),
        q$i3xj = vfrhzy['domBuilder'] || new ek96sb(),
        mcoa_ = vfrhzy['errorHandler'],
        _a4cm7 = vfrhzy['locator'],
        apoem = vfrhzy['xmlns'] || {},
        nj3q$ = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return _a4cm7 && q$i3xj['setDocumentLocator'](_a4cm7), qu9nsk['errorHandler'] = esbk609(mcoa_, q$i3xj, _a4cm7), qu9nsk['domBuilder'] = vfrhzy['domBuilder'] || q$i3xj, /\/x?html?$/['test'](usnk96) && (nj3q$['nbsp'] = '\u00a0', nj3q$['copy'] = '©', apoem[''] = 'http://www.w3.org/1999/xhtml'), apoem['xml'] = apoem['xml'] || 'http://www.w3.org/XML/1998/namespace', d8w512 ? qu9nsk['parse'](d8w512, apoem, nj3q$) : qu9nsk['errorHandler']['error']('invalid doc source'), q$i3xj['doc'];
}, ek96sb['prototype'] = {
    'startDocument': function () {
        this['doc'] = new eam7co_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function ($txi, s3q9nu, gjxt$, u6skb) {
        var lhzyrf = this['doc'],
            x$3j = lhzyrf['createElementNS']($txi, gjxt$ || s3q9nu),
            zrhglt = u6skb['length'];
        e$qxji(this, x$3j), this['currentElement'] = x$3j, this['locator'] && ej$3ixg(this['locator'], x$3j);
        for (var i$xj3q = 0x0; zrhglt > i$xj3q; i$xj3q++) {
            var $txi = u6skb['getURI'](i$xj3q),
                q3x$i = u6skb['getValue'](i$xj3q),
                gjxt$ = u6skb['getQName'](i$xj3q),
                yzfvh = lhzyrf['createAttributeNS']($txi, gjxt$);
            this['locator'] && ej$3ixg(u6skb['getLocator'](i$xj3q), yzfvh), yzfvh['value'] = yzfvh['nodeValue'] = q3x$i, x$3j['setAttributeNode'](yzfvh);
        }
    },
    'endElement': function () {
        {
            var tlhrg = this['currentElement'];
            tlhrg['tagName'];
        }
        this['currentElement'] = tlhrg['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (u3qn9s, fy74v) {
        var q3i$jn = this['doc']['createProcessingInstruction'](u3qn9s, fy74v);
        this['locator'] && ej$3ixg(this['locator'], q3i$jn), e$qxji(this, q3i$jn);
    },
    'ignorableWhitespace': function () {},
    'characters': function (vfrzy4) {
        if (vfrzy4 = extlig['apply'](this, arguments)) {
            if (this['cdata']) var vrhyfz = this['doc']['createCDATASection'](vfrzy4);else var vrhyfz = this['doc']['createTextNode'](vfrzy4);
            this['currentElement'] ? this['currentElement']['appendChild'](vrhyfz) : /^\s*$/['test'](vfrzy4) && this['doc']['appendChild'](vrhyfz), this['locator'] && ej$3ixg(this['locator'], vrhyfz);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (w0d5) {
        (this['locator'] = w0d5) && (w0d5['lineNumber'] = 0x0);
    },
    'comment': function (xtg$hl) {
        xtg$hl = extlig['apply'](this, arguments);
        var jnq = this['doc']['createComment'](xtg$hl);
        this['locator'] && ej$3ixg(this['locator'], jnq), e$qxji(this, jnq);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (qnu9k, jt$xg, li$gt) {
        var tgzhl = this['doc']['implementation'];
        if (tgzhl && tgzhl['createDocumentType']) {
            var s9qu = tgzhl['createDocumentType'](qnu9k, jt$xg, li$gt);
            this['locator'] && ej$3ixg(this['locator'], s9qu), e$qxji(this, s9qu);
        }
    },
    'warning': function (kuns9q) {
        console['warn']('[xmldom warning]\t' + kuns9q, em_4(this['locator']));
    },
    'error': function (oamc_) {
        console['error']('[xmldom error]\t' + oamc_, em_4(this['locator']));
    },
    'fatalError': function (x3q$) {
        throw console['error']('[xmldom fatalError]\t' + x3q$, em_4(this['locator'])), x3q$;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f4_v7) {
    ek96sb['prototype'][f4_v7] = function () {
        return null;
    };
});
var ef_4vyz = require('./eeesax')['XMLReader'],
    eam7co_ = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = enj$qi;