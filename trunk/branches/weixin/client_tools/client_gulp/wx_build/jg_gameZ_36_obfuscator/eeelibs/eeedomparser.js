var b = wx.$e;
function ea47f_v(n3jq$i) {
    this['options'] = n3jq$i || { 'locator': {} };
}
function eemoacp(f4a_7, zlhty, mocpe) {
    function pac7om(mo7p) {
        var f_4vzy = f4a_7[mo7p];
        !f_4vzy && ti$g && (f_4vzy = 0x2 == f4a_7['length'] ? function (thzgr) {
            f4a_7(mo7p, thzgr);
        } : f4a_7), fyrz4[mo7p] = f_4vzy && function (n6s9) {
            f_4vzy('[xmldom ' + mo7p + ']\t' + n6s9 + eb08d(mocpe));
        } || function () {};
    }
    if (!f4a_7) {
        if (zlhty instanceof elzhfr) return zlhty;
        f4a_7 = zlhty;
    }
    var fyrz4 = {},
        ti$g = f4a_7 instanceof Function;
    return mocpe = mocpe || {}, pac7om('warning'), pac7om('error'), pac7om('fatalError'), fyrz4;
}
function elzhfr() {
    this['cdata'] = !0x1;
}
function evy_f47(amp7, a_f4v) {
    a_f4v['lineNumber'] = amp7['lineNumber'], a_f4v['columnNumber'] = amp7['columnNumber'];
}
function eb08d(snk6u) {
    return snk6u ? '\x0a@' + (snk6u['systemId'] || '') + '#[line:' + snk6u['lineNumber'] + ',col:' + snk6u['columnNumber'] + ']' : void 0x0;
}
function etlix$(lyzhtr, bd506, unqjs3) {
    return 'string' == typeof lyzhtr ? lyzhtr['substr'](bd506, unqjs3) : lyzhtr['length'] >= bd506 + unqjs3 || bd506 ? new java['lang']['String'](lyzhtr, bd506, unqjs3) + '' : lyzhtr;
}
function ew5d8b(ytlzhr, po7ma) {
    ytlzhr['currentElement'] ? ytlzhr['currentElement']['appendChild'](po7ma) : ytlzhr['doc']['appendChild'](po7ma);
}
ea47f_v['prototype']['parseFromString'] = function (zfrylh, s6ukb) {
    var nj3suq = this['options'],
        aoec = new ezrlyth(),
        zyv4fr = nj3suq['domBuilder'] || new elzhfr(),
        sjnqu3 = nj3suq['errorHandler'],
        rf4zy = nj3suq['locator'],
        g$hx = nj3suq['xmlns'] || {},
        rlthyz = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return rf4zy && zyv4fr['setDocumentLocator'](rf4zy), aoec['errorHandler'] = eemoacp(sjnqu3, zyv4fr, rf4zy), aoec['domBuilder'] = nj3suq['domBuilder'] || zyv4fr, /\/x?html?$/['test'](s6ukb) && (rlthyz['nbsp'] = '\u00a0', rlthyz['copy'] = '©', g$hx[''] = 'http://www.w3.org/1999/xhtml'), g$hx['xml'] = g$hx['xml'] || 'http://www.w3.org/XML/1998/namespace', zfrylh ? aoec['parse'](zfrylh, g$hx, rlthyz) : aoec['errorHandler']['error']('invalid doc source'), zyv4fr['doc'];
}, elzhfr['prototype'] = {
    'startDocument': function () {
        this['doc'] = new e$glxht()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (li$txg, wd52, gh$lx, jt$xi) {
        var fyz_v4 = this['doc'],
            bd6508 = fyz_v4['createElementNS'](li$txg, gh$lx || wd52),
            z_4vyf = jt$xi['length'];
        ew5d8b(this, bd6508), this['currentElement'] = bd6508, this['locator'] && evy_f47(this['locator'], bd6508);
        for (var m4v7a_ = 0x0; z_4vyf > m4v7a_; m4v7a_++) {
            var li$txg = jt$xi['getURI'](m4v7a_),
                ijg$x3 = jt$xi['getValue'](m4v7a_),
                gh$lx = jt$xi['getQName'](m4v7a_),
                fzy4 = fyz_v4['createAttributeNS'](li$txg, gh$lx);
            this['locator'] && evy_f47(jt$xi['getLocator'](m4v7a_), fzy4), fzy4['value'] = fzy4['nodeValue'] = ijg$x3, bd6508['setAttributeNode'](fzy4);
        }
    },
    'endElement': function () {
        {
            var hxlgr = this['currentElement'];
            hxlgr['tagName'];
        }
        this['currentElement'] = hxlgr['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (gxtj$, xij3q) {
        var gtrlhz = this['doc']['createProcessingInstruction'](gxtj$, xij3q);
        this['locator'] && evy_f47(this['locator'], gtrlhz), ew5d8b(this, gtrlhz);
    },
    'ignorableWhitespace': function () {},
    'characters': function (m7v_4) {
        if (m7v_4 = etlix$['apply'](this, arguments)) {
            if (this['cdata']) var _mao = this['doc']['createCDATASection'](m7v_4);else var _mao = this['doc']['createTextNode'](m7v_4);
            this['currentElement'] ? this['currentElement']['appendChild'](_mao) : /^\s*$/['test'](m7v_4) && this['doc']['appendChild'](_mao), this['locator'] && evy_f47(this['locator'], _mao);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (sn6u9) {
        (this['locator'] = sn6u9) && (sn6u9['lineNumber'] = 0x0);
    },
    'comment': function (hyflr) {
        hyflr = etlix$['apply'](this, arguments);
        var w8125 = this['doc']['createComment'](hyflr);
        this['locator'] && evy_f47(this['locator'], w8125), ew5d8b(this, w8125);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (h$lgtx, moa_, _a4v7m) {
        var $qi3n = this['doc']['implementation'];
        if ($qi3n && $qi3n['createDocumentType']) {
            var sjun3q = $qi3n['createDocumentType'](h$lgtx, moa_, _a4v7m);
            this['locator'] && evy_f47(this['locator'], sjun3q), ew5d8b(this, sjun3q);
        }
    },
    'warning': function (u9skn) {
        console['warn']('[xmldom warning]\t' + u9skn, eb08d(this['locator']));
    },
    'error': function (c7_amo) {
        console['error']('[xmldom error]\t' + c7_amo, eb08d(this['locator']));
    },
    'fatalError': function (k9u6sn) {
        throw console['error']('[xmldom fatalError]\t' + k9u6sn, eb08d(this['locator'])), k9u6sn;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ghz) {
    elzhfr['prototype'][ghz] = function () {
        return null;
    };
});
var ezrlyth = require('./eeesax')['XMLReader'],
    e$glxht = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ea47f_v;