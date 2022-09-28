var Z = wx.$L;
function l1y2h_jo(wu6ztx) {
    this['options'] = wu6ztx || { 'locator': {} };
}
function l1_oy(o1bm_j, uwzt3f, dhce8) {
    function x06r(oi1_m) {
        var ir960p = o1bm_j[oi1_m];
        !ir960p && as$k5 && (ir960p = 0x2 == o1bm_j['length'] ? function (tuf3zw) {
            o1bm_j(oi1_m, tuf3zw);
        } : o1bm_j), v4s5qn[oi1_m] = ir960p && function (j_2ho) {
            ir960p('[xmldom ' + oi1_m + ']\t' + j_2ho + l1r6ip9(dhce8));
        } || function () {};
    }
    if (!o1bm_j) {
        if (uwzt3f instanceof l1ftw3uz) return uwzt3f;
        o1bm_j = uwzt3f;
    }
    var v4s5qn = {},
        as$k5 = o1bm_j instanceof Function;
    return dhce8 = dhce8 || {}, x06r('warning'), x06r('error'), x06r('fatalError'), v4s5qn;
}
function l1ftw3uz() {
    this['cdata'] = !0x1;
}
function l1jmbo_1(ip0mr9, wu6xz) {
    wu6xz['lineNumber'] = ip0mr9['lineNumber'], wu6xz['columnNumber'] = ip0mr9['columnNumber'];
}
function l1r6ip9(ip0m) {
    return ip0m ? '\x0a@' + (ip0m['systemId'] || '') + '#[line:' + ip0m['lineNumber'] + ',col:' + ip0m['columnNumber'] + ']' : void 0x0;
}
function l1_yj21(elc8dh, $5sgaq, $5ga7k) {
    return 'string' == typeof elc8dh ? elc8dh['substr']($5sgaq, $5ga7k) : elc8dh['length'] >= $5sgaq + $5ga7k || $5sgaq ? new java['lang']['String'](elc8dh, $5sgaq, $5ga7k) + '' : elc8dh;
}
function l1cy8hd(imr09, pbmi_) {
    imr09['currentElement'] ? imr09['currentElement']['appendChild'](pbmi_) : imr09['doc']['appendChild'](pbmi_);
}
l1y2h_jo['prototype']['parseFromString'] = function (cde7lk, i6p0) {
    var bim_p = this['options'],
        p0b9mi = new l1xtrwz(),
        kcd = bim_p['domBuilder'] || new l1ftw3uz(),
        ztwr6x = bim_p['errorHandler'],
        _omib1 = bim_p['locator'],
        uxwt6z = bim_p['xmlns'] || {},
        ka5g = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return _omib1 && kcd['setDocumentLocator'](_omib1), p0b9mi['errorHandler'] = l1_oy(ztwr6x, kcd, _omib1), p0b9mi['domBuilder'] = bim_p['domBuilder'] || kcd, /\/x?html?$/['test'](i6p0) && (ka5g['nbsp'] = '\u00a0', ka5g['copy'] = '©', uxwt6z[''] = 'http://www.w3.org/1999/xhtml'), uxwt6z['xml'] = uxwt6z['xml'] || 'http://www.w3.org/XML/1998/namespace', cde7lk ? p0b9mi['parse'](cde7lk, uxwt6z, ka5g) : p0b9mi['errorHandler']['error']('invalid doc source'), kcd['doc'];
}, l1ftw3uz['prototype'] = {
    'startDocument': function () {
        this['doc'] = new l1oy2j_1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (q5a$s, gqs$5, d8lch, wfz3) {
        var kas5 = this['doc'],
            cdyh8 = kas5['createElementNS'](q5a$s, d8lch || gqs$5),
            m1jb = wfz3['length'];
        l1cy8hd(this, cdyh8), this['currentElement'] = cdyh8, this['locator'] && l1jmbo_1(this['locator'], cdyh8);
        for (var y8cdh2 = 0x0; m1jb > y8cdh2; y8cdh2++) {
            var q5a$s = wfz3['getURI'](y8cdh2),
                cld8he = wfz3['getValue'](y8cdh2),
                d8lch = wfz3['getQName'](y8cdh2),
                rpi = kas5['createAttributeNS'](q5a$s, d8lch);
            this['locator'] && l1jmbo_1(wfz3['getLocator'](y8cdh2), rpi), rpi['value'] = rpi['nodeValue'] = cld8he, cdyh8['setAttributeNode'](rpi);
        }
    },
    'endElement': function () {
        {
            var s5$aq = this['currentElement'];
            s5$aq['tagName'];
        }
        this['currentElement'] = s5$aq['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (c8elh, j2_y1) {
        var imp9r0 = this['doc']['createProcessingInstruction'](c8elh, j2_y1);
        this['locator'] && l1jmbo_1(this['locator'], imp9r0), l1cy8hd(this, imp9r0);
    },
    'ignorableWhitespace': function () {},
    'characters': function (uxzw6t) {
        if (uxzw6t = l1_yj21['apply'](this, arguments)) {
            if (this['cdata']) var oy28 = this['doc']['createCDATASection'](uxzw6t);else var oy28 = this['doc']['createTextNode'](uxzw6t);
            this['currentElement'] ? this['currentElement']['appendChild'](oy28) : /^\s*$/['test'](uxzw6t) && this['doc']['appendChild'](oy28), this['locator'] && l1jmbo_1(this['locator'], oy28);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (dhcle) {
        (this['locator'] = dhcle) && (dhcle['lineNumber'] = 0x0);
    },
    'comment': function (_2yj) {
        _2yj = l1_yj21['apply'](this, arguments);
        var l7ckde = this['doc']['createComment'](_2yj);
        this['locator'] && l1jmbo_1(this['locator'], l7ckde), l1cy8hd(this, l7ckde);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (j8y2oh, x6z0tr, trx6z) {
        var cl8hed = this['doc']['implementation'];
        if (cl8hed && cl8hed['createDocumentType']) {
            var l7d$k = cl8hed['createDocumentType'](j8y2oh, x6z0tr, trx6z);
            this['locator'] && l1jmbo_1(this['locator'], l7d$k), l1cy8hd(this, l7d$k);
        }
    },
    'warning': function (k$gla7) {
        console['warn']('[xmldom warning]\t' + k$gla7, l1r6ip9(this['locator']));
    },
    'error': function (jo1) {
        console['error']('[xmldom error]\t' + jo1, l1r6ip9(this['locator']));
    },
    'fatalError': function (ke7al) {
        throw console['error']('[xmldom fatalError]\t' + ke7al, l1r6ip9(this['locator'])), ke7al;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rz6tw) {
    l1ftw3uz['prototype'][rz6tw] = function () {
        return null;
    };
});
var l1xtrwz = require('./lllSAX')['XMLReader'],
    l1oy2j_1 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];
exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = l1y2h_jo;