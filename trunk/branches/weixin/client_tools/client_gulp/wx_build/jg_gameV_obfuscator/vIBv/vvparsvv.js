var Q = wx.$v;
function vi$mc1(_o75fe) {
    this['options'] = _o75fe || { 'locator': {} };
}
function vi102(tw3k, h$cym, hl$ycm) {
    function d0pu(hlv3mw) {
        var b_6zp = tw3k[hlv3mw];
        !b_6zp && gqs8xj && (b_6zp = 0x2 == tw3k['length'] ? function (xqtw) {
            tw3k(hlv3mw, xqtw);
        } : tw3k), m$cyi1[hlv3mw] = b_6zp && function (yiuc) {
            b_6zp('[xmldom ' + hlv3mw + ']\t' + yiuc + vj8t(hl$ycm));
        } || function () {};
    }
    if (!tw3k) {
        if (h$cym instanceof v$yic) return h$cym;
        tw3k = h$cym;
    }
    var m$cyi1 = {},
        gqs8xj = tw3k instanceof Function;
    return hl$ycm = hl$ycm || {}, d0pu('warning'), d0pu('error'), d0pu('fatalError'), m$cyi1;
}
function v$yic() {
    this['cdata'] = !0x1;
}
function vd0uni2(zb6_9p, o69_bz) {
    o69_bz['lineNumber'] = zb6_9p['lineNumber'], o69_bz['columnNumber'] = zb6_9p['columnNumber'];
}
function vj8t(e5_7) {
    return e5_7 ? '\x0a@' + (e5_7['systemId'] || '') + '#[line:' + e5_7['lineNumber'] + ',col:' + e5_7['columnNumber'] + ']' : void 0x0;
}
function vef457a(xrvktw, lhy3, hvklw) {
    return 'string' == typeof xrvktw ? xrvktw['substr'](lhy3, hvklw) : xrvktw['length'] >= lhy3 + hvklw || lhy3 ? new java['lang']['String'](xrvktw, lhy3, hvklw) + '' : xrvktw;
}
function vw3trkv(qxwrkt, tkxwrv) {
    qxwrkt['currentElement'] ? qxwrkt['currentElement']['appendChild'](tkxwrv) : qxwrkt['doc']['appendChild'](tkxwrv);
}
vi$mc1['prototype']['parseFromString'] = function (xtvkwr, e7f4) {
    var qtkxrw = this['options'],
        qxkwt = new v$yc1iu(),
        qt8r = qtkxrw['domBuilder'] || new v$yic(),
        pud20n = qtkxrw['errorHandler'],
        vkwl3r = qtkxrw['locator'],
        zb5o6_ = qtkxrw['xmlns'] || {},
        d92p6 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return vkwl3r && qt8r['setDocumentLocator'](vkwl3r), qxkwt['errorHandler'] = vi102(pud20n, qt8r, vkwl3r), qxkwt['domBuilder'] = qtkxrw['domBuilder'] || qt8r, /\/x?html?$/['test'](e7f4) && (d92p6['nbsp'] = '\u00a0', d92p6['copy'] = '©', zb5o6_[''] = 'http://www.w3.org/1999/xhtml'), zb5o6_['xml'] = zb5o6_['xml'] || 'http://www.w3.org/XML/1998/namespace', xtvkwr ? qxkwt['parse'](xtvkwr, zb5o6_, d92p6) : qxkwt['errorHandler']['error']('invalid doc source'), qt8r['doc'];
}, v$yic['prototype'] = {
    'startDocument': function () {
        this['doc'] = new vlvw3hk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (vwmh3, o6z5b, _9z, vxktwr) {
        var jqxt8r = this['doc'],
            ni0d = jqxt8r['createElementNS'](vwmh3, _9z || o6z5b),
            yhlvm3 = vxktwr['length'];
        vw3trkv(this, ni0d), this['currentElement'] = ni0d, this['locator'] && vd0uni2(this['locator'], ni0d);
        for (var vm3hly = 0x0; yhlvm3 > vm3hly; vm3hly++) {
            var vwmh3 = vxktwr['getURI'](vm3hly),
                m$3ly = vxktwr['getValue'](vm3hly),
                _9z = vxktwr['getQName'](vm3hly),
                tr3kw = jqxt8r['createAttributeNS'](vwmh3, _9z);
            this['locator'] && vd0uni2(vxktwr['getLocator'](vm3hly), tr3kw), tr3kw['value'] = tr3kw['nodeValue'] = m$3ly, ni0d['setAttributeNode'](tr3kw);
        }
    },
    'endElement': function () {
        {
            var vtxkr = this['currentElement'];
            vtxkr['tagName'];
        }
        this['currentElement'] = vtxkr['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (pbd9z6, e5fao7) {
        var vlr3w = this['doc']['createProcessingInstruction'](pbd9z6, e5fao7);
        this['locator'] && vd0uni2(this['locator'], vlr3w), vw3trkv(this, vlr3w);
    },
    'ignorableWhitespace': function () {},
    'characters': function (clh$y) {
        if (clh$y = vef457a['apply'](this, arguments)) {
            if (this['cdata']) var ylhm3$ = this['doc']['createCDATASection'](clh$y);else var ylhm3$ = this['doc']['createTextNode'](clh$y);
            this['currentElement'] ? this['currentElement']['appendChild'](ylhm3$) : /^\s*$/['test'](clh$y) && this['doc']['appendChild'](ylhm3$), this['locator'] && vd0uni2(this['locator'], ylhm3$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (_b69pz) {
        (this['locator'] = _b69pz) && (_b69pz['lineNumber'] = 0x0);
    },
    'comment': function (myhl$3) {
        myhl$3 = vef457a['apply'](this, arguments);
        var j8q = this['doc']['createComment'](myhl$3);
        this['locator'] && vd0uni2(this['locator'], j8q), vw3trkv(this, j8q);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (c$hm, jkt, d9260p) {
        var trxk = this['doc']['implementation'];
        if (trxk && trxk['createDocumentType']) {
            var qtg8 = trxk['createDocumentType'](c$hm, jkt, d9260p);
            this['locator'] && vd0uni2(this['locator'], qtg8), vw3trkv(this, qtg8);
        }
    },
    'warning': function (_e57) {
        console['warn']('[xmldom warning]\t' + _e57, vj8t(this['locator']));
    },
    'error': function (rqjkt) {
        console['error']('[xmldom error]\t' + rqjkt, vj8t(this['locator']));
    },
    'fatalError': function (qxtrkw) {
        throw console['error']('[xmldom fatalError]\t' + qxtrkw, vj8t(this['locator'])), qxtrkw;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (foa57) {
    v$yic['prototype'][foa57] = function () {
        return null;
    };
});
var v$yc1iu = require('./vv12vv')['XMLReader'],
    vlvw3hk = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];
exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vi$mc1;