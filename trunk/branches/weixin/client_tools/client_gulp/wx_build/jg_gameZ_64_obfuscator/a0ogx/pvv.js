var f = wx.$B;
function S$e47(wgiol) {
    this['options'] = wgiol || { 'locator': {} };
}
function Su3as5(pmhxgo, z$fn, xl1owi) {
    function rbn_zf(_$7zr) {
        var rfz = pmhxgo[_$7zr];
        !rfz && mthpkg && (rfz = 0x2 == pmhxgo['length'] ? function (sqa2) {
            pmhxgo(_$7zr, sqa2);
        } : pmhxgo), jk47e9[_$7zr] = rfz && function (l5u316) {
            rfz('[xmldom ' + _$7zr + ']\t' + l5u316 + Sgpkm(xl1owi));
        } || function () {};
    }
    if (!pmhxgo) {
        if (z$fn instanceof Somh) return z$fn;
        pmhxgo = z$fn;
    }
    var jk47e9 = {},
        mthpkg = pmhxgo instanceof Function;
    return xl1owi = xl1owi || {}, rbn_zf('warning'), rbn_zf('error'), rbn_zf('fatalError'), jk47e9;
}
function Somh() {
    this['cdata'] = !0x1;
}
function Sb_rn(t4phk, ixwl1) {
    ixwl1['lineNumber'] = t4phk['lineNumber'], ixwl1['columnNumber'] = t4phk['columnNumber'];
}
function Sgpkm(lxwi3) {
    return lxwi3 ? '\x0a@' + (lxwi3['systemId'] || '') + '#[line:' + lxwi3['lineNumber'] + ',col:' + lxwi3['columnNumber'] + ']' : void 0x0;
}
function Sioxhgm(oxgih, r_fbn, hktg) {
    return 'string' == typeof oxgih ? oxgih['substr'](r_fbn, hktg) : oxgih['length'] >= r_fbn + hktg || r_fbn ? new java['lang']['String'](oxgih, r_fbn, hktg) + '' : oxgih;
}
function Sowgxm(aq82vs, hmpe) {
    aq82vs['currentElement'] ? aq82vs['currentElement']['appendChild'](hmpe) : aq82vs['doc']['appendChild'](hmpe);
}
S$e47['prototype']['parseFromString'] = function (xwigom, ej97k4) {
    var ketmph = this['options'],
        jn$94 = new Smogthp(),
        kgtmh = ketmph['domBuilder'] || new Somh(),
        u631a5 = ketmph['errorHandler'],
        kpe4 = ketmph['locator'],
        $j749n = ketmph['xmlns'] || {},
        ke = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return kpe4 && kgtmh['setDocumentLocator'](kpe4), jn$94['errorHandler'] = Su3as5(u631a5, kgtmh, kpe4), jn$94['domBuilder'] = ketmph['domBuilder'] || kgtmh, /\/x?html?$/['test'](ej97k4) && (ke['nbsp'] = '\u00a0', ke['copy'] = '©', $j749n[''] = 'http://www.w3.org/1999/xhtml'), $j749n['xml'] = $j749n['xml'] || 'http://www.w3.org/XML/1998/namespace', xwigom ? jn$94['parse'](xwigom, $j749n, ke) : jn$94['errorHandler']['error']('invalid doc source'), kgtmh['doc'];
}, Somh['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Sdbz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (nj7$r_, j9$e74, xwi, hioxgm) {
        var wmio = this['doc'],
            n97$j4 = wmio['createElementNS'](nj7$r_, xwi || j9$e74),
            e97j4k = hioxgm['length'];
        Sowgxm(this, n97$j4), this['currentElement'] = n97$j4, this['locator'] && Sb_rn(this['locator'], n97$j4);
        for (var ehmktp = 0x0; e97j4k > ehmktp; ehmktp++) {
            var nj7$r_ = hioxgm['getURI'](ehmktp),
                pxomh = hioxgm['getValue'](ehmktp),
                xwi = hioxgm['getQName'](ehmktp),
                bf_nz = wmio['createAttributeNS'](nj7$r_, xwi);
            this['locator'] && Sb_rn(hioxgm['getLocator'](ehmktp), bf_nz), bf_nz['value'] = bf_nz['nodeValue'] = pxomh, n97$j4['setAttributeNode'](bf_nz);
        }
    },
    'endElement': function () {
        {
            var t9ep4k = this['currentElement'];
            t9ep4k['tagName'];
        }
        this['currentElement'] = t9ep4k['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (qsv28, qv28as) {
        var yqv8 = this['doc']['createProcessingInstruction'](qsv28, qv28as);
        this['locator'] && Sb_rn(this['locator'], yqv8), Sowgxm(this, yqv8);
    },
    'ignorableWhitespace': function () {},
    'characters': function (yvs2) {
        if (yvs2 = Sioxhgm['apply'](this, arguments)) {
            if (this['cdata']) var pgomt = this['doc']['createCDATASection'](yvs2);else var pgomt = this['doc']['createTextNode'](yvs2);
            this['currentElement'] ? this['currentElement']['appendChild'](pgomt) : /^\s*$/['test'](yvs2) && this['doc']['appendChild'](pgomt), this['locator'] && Sb_rn(this['locator'], pgomt);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (frbz_) {
        (this['locator'] = frbz_) && (frbz_['lineNumber'] = 0x0);
    },
    'comment': function (nr79) {
        nr79 = Sioxhgm['apply'](this, arguments);
        var bfdz_ = this['doc']['createComment'](nr79);
        this['locator'] && Sb_rn(this['locator'], bfdz_), Sowgxm(this, bfdz_);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (s65ua, tk4p9, iogxh) {
        var _f$zn = this['doc']['implementation'];
        if (_f$zn && _f$zn['createDocumentType']) {
            var gohtm = _f$zn['createDocumentType'](s65ua, tk4p9, iogxh);
            this['locator'] && Sb_rn(this['locator'], gohtm), Sowgxm(this, gohtm);
        }
    },
    'warning': function (jr_7$) {
        console['warn']('[xmldom warning]\t' + jr_7$, Sgpkm(this['locator']));
    },
    'error': function (xgliwo) {
        console['error']('[xmldom error]\t' + xgliwo, Sgpkm(this['locator']));
    },
    'fatalError': function (qaus28) {
        throw console['error']('[xmldom fatalError]\t' + qaus28, Sgpkm(this['locator'])), qaus28;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hixmo) {
    Somh['prototype'][hixmo] = function () {
        return null;
    };
});
var Smogthp = require('./l58a')['XMLReader'],
    Sdbz = exports['DOMImplementation'] = require('./gg635a')['DOMImplementation'];
exports['XMLSerializer'] = require('./gg635a')['XMLSerializer'], exports['DOMParser'] = S$e47;