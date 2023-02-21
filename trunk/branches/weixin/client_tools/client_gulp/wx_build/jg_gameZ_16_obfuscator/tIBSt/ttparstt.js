var W = wx.$l;
function L9sq2$7f(vadb5) {
    this['options'] = vadb5 || { 'locator': {} };
}
function L9zb4n5(efwck7, ylq3$s, zbdj) {
    function s$q2f(l3q$py) {
        var $3qyl = efwck7[l3q$py];
        !$3qyl && l$fsq2 && ($3qyl = 0x2 == efwck7['length'] ? function (gp3t6) {
            efwck7(l3q$py, gp3t6);
        } : efwck7), da4z5b[l3q$py] = $3qyl && function (l3pq$y) {
            $3qyl('[xmldom ' + l3q$py + ']\t' + l3pq$y + L9i0n54(zbdj));
        } || function () {};
    }
    if (!efwck7) {
        if (ylq3$s instanceof L9n8i) return ylq3$s;
        efwck7 = ylq3$s;
    }
    var da4z5b = {},
        l$fsq2 = efwck7 instanceof Function;
    return zbdj = zbdj || {}, s$q2f('warning'), s$q2f('error'), s$q2f('fatalError'), da4z5b;
}
function L9n8i() {
    this['cdata'] = !0x1;
}
function L9n4abz5(n4mir0, vzdb1) {
    vzdb1['lineNumber'] = n4mir0['lineNumber'], vzdb1['columnNumber'] = n4mir0['columnNumber'];
}
function L9i0n54(swk2f) {
    return swk2f ? '\x0a@' + (swk2f['systemId'] || '') + '#[line:' + swk2f['lineNumber'] + ',col:' + swk2f['columnNumber'] + ']' : void 0x0;
}
function L9sq$l3y(c72fkw, jvud1, am40) {
    return 'string' == typeof c72fkw ? c72fkw['substr'](jvud1, am40) : c72fkw['length'] >= jvud1 + am40 || jvud1 ? new java['lang']['String'](c72fkw, jvud1, am40) + '' : c72fkw;
}
function L9k_e7wc(yl$3, gpt6oy) {
    yl$3['currentElement'] ? yl$3['currentElement']['appendChild'](gpt6oy) : yl$3['doc']['appendChild'](gpt6oy);
}
L9sq2$7f['prototype']['parseFromString'] = function (go8pt, abvz1) {
    var a5zbvd = this['options'],
        ujdbv = new L9mi8og(),
        ex9kc = a5zbvd['domBuilder'] || new L9n8i(),
        kexc_9 = a5zbvd['errorHandler'],
        ubjdv = a5zbvd['locator'],
        cf2 = a5zbvd['xmlns'] || {},
        n0ri4 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ubjdv && ex9kc['setDocumentLocator'](ubjdv), ujdbv['errorHandler'] = L9zb4n5(kexc_9, ex9kc, ubjdv), ujdbv['domBuilder'] = a5zbvd['domBuilder'] || ex9kc, /\/x?html?$/['test'](abvz1) && (n0ri4['nbsp'] = '\u00a0', n0ri4['copy'] = '©', cf2[''] = 'http://www.w3.org/1999/xhtml'), cf2['xml'] = cf2['xml'] || 'http://www.w3.org/XML/1998/namespace', go8pt ? ujdbv['parse'](go8pt, cf2, n0ri4) : ujdbv['errorHandler']['error']('invalid doc source'), ex9kc['doc'];
}, L9n8i['prototype'] = {
    'startDocument': function () {
        this['doc'] = new L9pgty3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (i40rmn, c9ekx_, _x9kec, pogt6y) {
        var l3qp$ = this['doc'],
            wecx = l3qp$['createElementNS'](i40rmn, _x9kec || c9ekx_),
            n4zba5 = pogt6y['length'];
        L9k_e7wc(this, wecx), this['currentElement'] = wecx, this['locator'] && L9n4abz5(this['locator'], wecx);
        for (var op6ty = 0x0; n4zba5 > op6ty; op6ty++) {
            var i40rmn = pogt6y['getURI'](op6ty),
                dbvu1j = pogt6y['getValue'](op6ty),
                _x9kec = pogt6y['getQName'](op6ty),
                i4n0mr = l3qp$['createAttributeNS'](i40rmn, _x9kec);
            this['locator'] && L9n4abz5(pogt6y['getLocator'](op6ty), i4n0mr), i4n0mr['value'] = i4n0mr['nodeValue'] = dbvu1j, wecx['setAttributeNode'](i4n0mr);
        }
    },
    'endElement': function () {
        {
            var tl3qpy = this['currentElement'];
            tl3qpy['tagName'];
        }
        this['currentElement'] = tl3qpy['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (v5abz, q32s$) {
        var ke7wf = this['doc']['createProcessingInstruction'](v5abz, q32s$);
        this['locator'] && L9n4abz5(this['locator'], ke7wf), L9k_e7wc(this, ke7wf);
    },
    'ignorableWhitespace': function () {},
    'characters': function (an4z05) {
        if (an4z05 = L9sq$l3y['apply'](this, arguments)) {
            if (this['cdata']) var we7_ = this['doc']['createCDATASection'](an4z05);else var we7_ = this['doc']['createTextNode'](an4z05);
            this['currentElement'] ? this['currentElement']['appendChild'](we7_) : /^\s*$/['test'](an4z05) && this['doc']['appendChild'](we7_), this['locator'] && L9n4abz5(this['locator'], we7_);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (ck2fw) {
        (this['locator'] = ck2fw) && (ck2fw['lineNumber'] = 0x0);
    },
    'comment': function ($qs23l) {
        $qs23l = L9sq$l3y['apply'](this, arguments);
        var q$2fl = this['doc']['createComment']($qs23l);
        this['locator'] && L9n4abz5(this['locator'], q$2fl), L9k_e7wc(this, q$2fl);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (bzadv, j1zdvb, ogrt6) {
        var $3qs2 = this['doc']['implementation'];
        if ($3qs2 && $3qs2['createDocumentType']) {
            var ad = $3qs2['createDocumentType'](bzadv, j1zdvb, ogrt6);
            this['locator'] && L9n4abz5(this['locator'], ad), L9k_e7wc(this, ad);
        }
    },
    'warning': function (pt36) {
        console['warn']('[xmldom warning]\t' + pt36, L9i0n54(this['locator']));
    },
    'error': function (l2sq) {
        console['error']('[xmldom error]\t' + l2sq, L9i0n54(this['locator']));
    },
    'fatalError': function (anb) {
        throw console['error']('[xmldom fatalError]\t' + anb, L9i0n54(this['locator'])), anb;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_e9c) {
    L9n8i['prototype'][_e9c] = function () {
        return null;
    };
});
var L9mi8og = require('./tT12tt')['XMLReader'],
    L9pgty3 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = L9sq2$7f;