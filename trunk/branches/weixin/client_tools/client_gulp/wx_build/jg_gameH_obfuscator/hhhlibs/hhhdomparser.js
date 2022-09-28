var O = wx.$C;
function h_kuz35c(jbnrs8) {
    this['options'] = jbnrs8 || { 'locator': {} };
}
function h_l36kzc(et1qr, rsjnq, uk6c) {
    function voh_y(goa0p) {
        var sqn8j = et1qr[goa0p];
        !sqn8j && teqm && (sqn8j = 0x2 == et1qr['length'] ? function (ib5cd) {
            et1qr(goa0p, ib5cd);
        } : et1qr), rmt1qe[goa0p] = sqn8j && function (yogx0) {
            sqn8j('[xmldom ' + goa0p + ']\t' + yogx0 + h_dnj8sb(uk6c));
        } || function () {};
    }
    if (!et1qr) {
        if (rsjnq instanceof h_n8id5) return rsjnq;
        et1qr = rsjnq;
    }
    var rmt1qe = {},
        teqm = et1qr instanceof Function;
    return uk6c = uk6c || {}, voh_y('warning'), voh_y('error'), voh_y('fatalError'), rmt1qe;
}
function h_n8id5() {
    this['cdata'] = !0x1;
}
function h__oy0xg(srj, qje1rt) {
    qje1rt['lineNumber'] = srj['lineNumber'], qje1rt['columnNumber'] = srj['columnNumber'];
}
function h_dnj8sb(_xohv) {
    return _xohv ? '\x0a@' + (_xohv['systemId'] || '') + '#[line:' + _xohv['lineNumber'] + ',col:' + _xohv['columnNumber'] + ']' : void 0x0;
}
function h_m1rte(yx_gho, a9p7, vxh_oy) {
    return 'string' == typeof yx_gho ? yx_gho['substr'](a9p7, vxh_oy) : yx_gho['length'] >= a9p7 + vxh_oy || a9p7 ? new java['lang']['String'](yx_gho, a9p7, vxh_oy) + '' : yx_gho;
}
function h_qjre1t(yfgp0, xg_o) {
    yfgp0['currentElement'] ? yfgp0['currentElement']['appendChild'](xg_o) : yfgp0['doc']['appendChild'](xg_o);
}
h_kuz35c['prototype']['parseFromString'] = function (c5dibu, _xog) {
    var $mteq1 = this['options'],
        udicb5 = new h_et2$7m(),
        erjsq1 = $mteq1['domBuilder'] || new h_n8id5(),
        dbsj8 = $mteq1['errorHandler'],
        fo0pg = $mteq1['locator'],
        e$t2m = $mteq1['xmlns'] || {},
        yo0g_x = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return fo0pg && erjsq1['setDocumentLocator'](fo0pg), udicb5['errorHandler'] = h_l36kzc(dbsj8, erjsq1, fo0pg), udicb5['domBuilder'] = $mteq1['domBuilder'] || erjsq1, /\/x?html?$/['test'](_xog) && (yo0g_x['nbsp'] = '\u00a0', yo0g_x['copy'] = '©', e$t2m[''] = 'http://www.w3.org/1999/xhtml'), e$t2m['xml'] = e$t2m['xml'] || 'http://www.w3.org/XML/1998/namespace', c5dibu ? udicb5['parse'](c5dibu, e$t2m, yo0g_x) : udicb5['errorHandler']['error']('invalid doc source'), erjsq1['doc'];
}, h_n8id5['prototype'] = {
    'startDocument': function () {
        this['doc'] = new h_pfyg0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (mt72$, m9$72w, $e7t1, zc5uid) {
        var bud85 = this['doc'],
            cku36 = bud85['createElementNS'](mt72$, $e7t1 || m9$72w),
            mq$et1 = zc5uid['length'];
        h_qjre1t(this, cku36), this['currentElement'] = cku36, this['locator'] && h__oy0xg(this['locator'], cku36);
        for (var m17t = 0x0; mq$et1 > m17t; m17t++) {
            var mt72$ = zc5uid['getURI'](m17t),
                gpyf0o = zc5uid['getValue'](m17t),
                $e7t1 = zc5uid['getQName'](m17t),
                fga9 = bud85['createAttributeNS'](mt72$, $e7t1);
            this['locator'] && h__oy0xg(zc5uid['getLocator'](m17t), fga9), fga9['value'] = fga9['nodeValue'] = gpyf0o, cku36['setAttributeNode'](fga9);
        }
    },
    'endElement': function () {
        {
            var rtj1 = this['currentElement'];
            rtj1['tagName'];
        }
        this['currentElement'] = rtj1['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (z3kcu6, yxf0go) {
        var gp90af = this['doc']['createProcessingInstruction'](z3kcu6, yxf0go);
        this['locator'] && h__oy0xg(this['locator'], gp90af), h_qjre1t(this, gp90af);
    },
    'ignorableWhitespace': function () {},
    'characters': function (nbi58) {
        if (nbi58 = h_m1rte['apply'](this, arguments)) {
            if (this['cdata']) var o_gh = this['doc']['createCDATASection'](nbi58);else var o_gh = this['doc']['createTextNode'](nbi58);
            this['currentElement'] ? this['currentElement']['appendChild'](o_gh) : /^\s*$/['test'](nbi58) && this['doc']['appendChild'](o_gh), this['locator'] && h__oy0xg(this['locator'], o_gh);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (i5kc) {
        (this['locator'] = i5kc) && (i5kc['lineNumber'] = 0x0);
    },
    'comment': function (pg90fa) {
        pg90fa = h_m1rte['apply'](this, arguments);
        var r8nqjs = this['doc']['createComment'](pg90fa);
        this['locator'] && h__oy0xg(this['locator'], r8nqjs), h_qjre1t(this, r8nqjs);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (lzk64, _oxvy, w2t$m) {
        var pa0wf = this['doc']['implementation'];
        if (pa0wf && pa0wf['createDocumentType']) {
            var $29wm7 = pa0wf['createDocumentType'](lzk64, _oxvy, w2t$m);
            this['locator'] && h__oy0xg(this['locator'], $29wm7), h_qjre1t(this, $29wm7);
        }
    },
    'warning': function (teqrj1) {
        console['warn']('[xmldom warning]\t' + teqrj1, h_dnj8sb(this['locator']));
    },
    'error': function (m71e$t) {
        console['error']('[xmldom error]\t' + m71e$t, h_dnj8sb(this['locator']));
    },
    'fatalError': function (e17t$) {
        throw console['error']('[xmldom fatalError]\t' + e17t$, h_dnj8sb(this['locator'])), e17t$;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (u6z3ck) {
    h_n8id5['prototype'][u6z3ck] = function () {
        return null;
    };
});
var h_et2$7m = require('./hhhsax')['XMLReader'],
    h_pfyg0 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_kuz35c;