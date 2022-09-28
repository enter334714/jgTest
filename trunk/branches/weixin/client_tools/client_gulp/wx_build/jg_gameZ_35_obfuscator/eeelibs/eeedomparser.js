var b = wx.$e;
function ejx$gt(ijq$3n) {
    this['options'] = ijq$3n || { 'locator': {} };
}
function eoemp(y7fv, hfylr, qnuij) {
    function iqj$n(s0b69) {
        var ji$g3 = y7fv[s0b69];
        !ji$g3 && p7aco && (ji$g3 = 0x2 == y7fv['length'] ? function (hfryl) {
            y7fv(s0b69, hfryl);
        } : y7fv), $hlt[s0b69] = ji$g3 && function (mac_o7) {
            ji$g3('[xmldom ' + s0b69 + ']\t' + mac_o7 + ef4_zv(qnuij));
        } || function () {};
    }
    if (!y7fv) {
        if (hfylr instanceof exthr) return hfylr;
        y7fv = hfylr;
    }
    var $hlt = {},
        p7aco = y7fv instanceof Function;
    return qnuij = qnuij || {}, iqj$n('warning'), iqj$n('error'), iqj$n('fatalError'), $hlt;
}
function exthr() {
    this['cdata'] = !0x1;
}
function ehtyrzl(b8560d, fyz) {
    fyz['lineNumber'] = b8560d['lineNumber'], fyz['columnNumber'] = b8560d['columnNumber'];
}
function ef4_zv(ubs69k) {
    return ubs69k ? '\x0a@' + (ubs69k['systemId'] || '') + '#[line:' + ubs69k['lineNumber'] + ',col:' + ubs69k['columnNumber'] + ']' : void 0x0;
}
function ef4rzyv(n3qu9s, lrt, opa7m) {
    return 'string' == typeof n3qu9s ? n3qu9s['substr'](lrt, opa7m) : n3qu9s['length'] >= lrt + opa7m || lrt ? new java['lang']['String'](n3qu9s, lrt, opa7m) + '' : n3qu9s;
}
function ens9ku(hrtglz, jns3q) {
    hrtglz['currentElement'] ? hrtglz['currentElement']['appendChild'](jns3q) : hrtglz['doc']['appendChild'](jns3q);
}
ejx$gt['prototype']['parseFromString'] = function (xj$gt, nk9s6) {
    var gx3 = this['options'],
        _y4vf7 = new eb05kd6(),
        g$xh = gx3['domBuilder'] || new exthr(),
        yrlh = gx3['errorHandler'],
        j$xgti = gx3['locator'],
        sqnju3 = gx3['xmlns'] || {},
        xlgi$ = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return j$xgti && g$xh['setDocumentLocator'](j$xgti), _y4vf7['errorHandler'] = eoemp(yrlh, g$xh, j$xgti), _y4vf7['domBuilder'] = gx3['domBuilder'] || g$xh, /\/x?html?$/['test'](nk9s6) && (xlgi$['nbsp'] = '\u00a0', xlgi$['copy'] = '©', sqnju3[''] = 'http://www.w3.org/1999/xhtml'), sqnju3['xml'] = sqnju3['xml'] || 'http://www.w3.org/XML/1998/namespace', xj$gt ? _y4vf7['parse'](xj$gt, sqnju3, xlgi$) : _y4vf7['errorHandler']['error']('invalid doc source'), g$xh['doc'];
}, exthr['prototype'] = {
    'startDocument': function () {
        this['doc'] = new etxi$j()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (jxg3, dw0b85, zyf4_v, x$i3) {
        var glhtrx = this['doc'],
            tgxhlr = glhtrx['createElementNS'](jxg3, zyf4_v || dw0b85),
            xhrtg = x$i3['length'];
        ens9ku(this, tgxhlr), this['currentElement'] = tgxhlr, this['locator'] && ehtyrzl(this['locator'], tgxhlr);
        for (var sn6k9 = 0x0; xhrtg > sn6k9; sn6k9++) {
            var jxg3 = x$i3['getURI'](sn6k9),
                zrtlg = x$i3['getValue'](sn6k9),
                zyf4_v = x$i3['getQName'](sn6k9),
                zfhy = glhtrx['createAttributeNS'](jxg3, zyf4_v);
            this['locator'] && ehtyrzl(x$i3['getLocator'](sn6k9), zfhy), zfhy['value'] = zfhy['nodeValue'] = zrtlg, tgxhlr['setAttributeNode'](zfhy);
        }
    },
    'endElement': function () {
        {
            var injq = this['currentElement'];
            injq['tagName'];
        }
        this['currentElement'] = injq['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (k9suq, d0w28) {
        var fylrzh = this['doc']['createProcessingInstruction'](k9suq, d0w28);
        this['locator'] && ehtyrzl(this['locator'], fylrzh), ens9ku(this, fylrzh);
    },
    'ignorableWhitespace': function () {},
    'characters': function (rzgthl) {
        if (rzgthl = ef4rzyv['apply'](this, arguments)) {
            if (this['cdata']) var uskn = this['doc']['createCDATASection'](rzgthl);else var uskn = this['doc']['createTextNode'](rzgthl);
            this['currentElement'] ? this['currentElement']['appendChild'](uskn) : /^\s*$/['test'](rzgthl) && this['doc']['appendChild'](uskn), this['locator'] && ehtyrzl(this['locator'], uskn);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (_ac47) {
        (this['locator'] = _ac47) && (_ac47['lineNumber'] = 0x0);
    },
    'comment': function (mpeac) {
        mpeac = ef4rzyv['apply'](this, arguments);
        var j$qx3i = this['doc']['createComment'](mpeac);
        this['locator'] && ehtyrzl(this['locator'], j$qx3i), ens9ku(this, j$qx3i);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (v4a_, xhtglr, _7m4ca) {
        var fzy4r = this['doc']['implementation'];
        if (fzy4r && fzy4r['createDocumentType']) {
            var wd851 = fzy4r['createDocumentType'](v4a_, xhtglr, _7m4ca);
            this['locator'] && ehtyrzl(this['locator'], wd851), ens9ku(this, wd851);
        }
    },
    'warning': function (qsuj3) {
        console['warn']('[xmldom warning]\t' + qsuj3, ef4_zv(this['locator']));
    },
    'error': function (rlfyhz) {
        console['error']('[xmldom error]\t' + rlfyhz, ef4_zv(this['locator']));
    },
    'fatalError': function ($gxtji) {
        throw console['error']('[xmldom fatalError]\t' + $gxtji, ef4_zv(this['locator'])), $gxtji;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ltxhg) {
    exthr['prototype'][ltxhg] = function () {
        return null;
    };
});
var eb05kd6 = require('./eeesax')['XMLReader'],
    etxi$j = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ejx$gt;