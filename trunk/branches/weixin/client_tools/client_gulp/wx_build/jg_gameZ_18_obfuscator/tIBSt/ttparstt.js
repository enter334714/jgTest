var v = wx.$d;
function zavjm6(tukly) {
    this['options'] = tukly || { 'locator': {} };
}
function zf_159(manp06, a0nm6p, tkyzr) {
    function turzk(z75_1) {
        var lkhu43 = manp06[z75_1];
        !lkhu43 && h8l4 && (lkhu43 = 0x2 == manp06['length'] ? function (v06m) {
            manp06(z75_1, v06m);
        } : manp06), vap[z75_1] = lkhu43 && function (h23d84) {
            lkhu43('[xmldom ' + z75_1 + ']\t' + h23d84 + zp0n6ma(tkyzr));
        } || function () {};
    }
    if (!manp06) {
        if (a0nm6p instanceof zlh3d4u) return a0nm6p;
        manp06 = a0nm6p;
    }
    var vap = {},
        h8l4 = manp06 instanceof Function;
    return tkyzr = tkyzr || {}, turzk('warning'), turzk('error'), turzk('fatalError'), vap;
}
function zlh3d4u() {
    this['cdata'] = !0x1;
}
function znap6m(anbm, vpjm6a) {
    vpjm6a['lineNumber'] = anbm['lineNumber'], vpjm6a['columnNumber'] = anbm['columnNumber'];
}
function zp0n6ma(xf$_) {
    return xf$_ ? '\x0a@' + (xf$_['systemId'] || '') + '#[line:' + xf$_['lineNumber'] + ',col:' + xf$_['columnNumber'] + ']' : void 0x0;
}
function zn0gabp(f51zr, abpgn0, yhltuk) {
    return 'string' == typeof f51zr ? f51zr['substr'](abpgn0, yhltuk) : f51zr['length'] >= abpgn0 + yhltuk || abpgn0 ? new java['lang']['String'](f51zr, abpgn0, yhltuk) + '' : f51zr;
}
function zc28dqo(bn0pag, anbpg) {
    bn0pag['currentElement'] ? bn0pag['currentElement']['appendChild'](anbpg) : bn0pag['doc']['appendChild'](anbpg);
}
zavjm6['prototype']['parseFromString'] = function (vj7x9$, zf_1r) {
    var k1zyr = this['options'],
        av6pm0 = new zingb0(),
        z_7 = k1zyr['domBuilder'] || new zlh3d4u(),
        n0eib = k1zyr['errorHandler'],
        hkuly3 = k1zyr['locator'],
        _9f$7x = k1zyr['xmlns'] || {},
        zf1r5_ = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return hkuly3 && z_7['setDocumentLocator'](hkuly3), av6pm0['errorHandler'] = zf_159(n0eib, z_7, hkuly3), av6pm0['domBuilder'] = k1zyr['domBuilder'] || z_7, /\/x?html?$/['test'](zf_1r) && (zf1r5_['nbsp'] = '\u00a0', zf1r5_['copy'] = '©', _9f$7x[''] = 'http://www.w3.org/1999/xhtml'), _9f$7x['xml'] = _9f$7x['xml'] || 'http://www.w3.org/XML/1998/namespace', vj7x9$ ? av6pm0['parse'](vj7x9$, _9f$7x, zf1r5_) : av6pm0['errorHandler']['error']('invalid doc source'), z_7['doc'];
}, zlh3d4u['prototype'] = {
    'startDocument': function () {
        this['doc'] = new zp0gbn()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (tzr15, pjmvx, xmjvp, q8dc24) {
        var ztyru = this['doc'],
            egbna = ztyru['createElementNS'](tzr15, xmjvp || pjmvx),
            ud4 = q8dc24['length'];
        zc28dqo(this, egbna), this['currentElement'] = egbna, this['locator'] && znap6m(this['locator'], egbna);
        for (var a6mpvj = 0x0; ud4 > a6mpvj; a6mpvj++) {
            var tzr15 = q8dc24['getURI'](a6mpvj),
                ea0bng = q8dc24['getValue'](a6mpvj),
                xmjvp = q8dc24['getQName'](a6mpvj),
                f$x_7 = ztyru['createAttributeNS'](tzr15, xmjvp);
            this['locator'] && znap6m(q8dc24['getLocator'](a6mpvj), f$x_7), f$x_7['value'] = f$x_7['nodeValue'] = ea0bng, egbna['setAttributeNode'](f$x_7);
        }
    },
    'endElement': function () {
        {
            var b0apn = this['currentElement'];
            b0apn['tagName'];
        }
        this['currentElement'] = b0apn['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (pv0m6, rtyuz) {
        var dhl3u4 = this['doc']['createProcessingInstruction'](pv0m6, rtyuz);
        this['locator'] && znap6m(this['locator'], dhl3u4), zc28dqo(this, dhl3u4);
    },
    'ignorableWhitespace': function () {},
    'characters': function (vxm$j) {
        if (vxm$j = zn0gabp['apply'](this, arguments)) {
            if (this['cdata']) var fz5_17 = this['doc']['createCDATASection'](vxm$j);else var fz5_17 = this['doc']['createTextNode'](vxm$j);
            this['currentElement'] ? this['currentElement']['appendChild'](fz5_17) : /^\s*$/['test'](vxm$j) && this['doc']['appendChild'](fz5_17), this['locator'] && znap6m(this['locator'], fz5_17);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (l3kuy) {
        (this['locator'] = l3kuy) && (l3kuy['lineNumber'] = 0x0);
    },
    'comment': function (f79$) {
        f79$ = zn0gabp['apply'](this, arguments);
        var m6vxpj = this['doc']['createComment'](f79$);
        this['locator'] && znap6m(this['locator'], m6vxpj), zc28dqo(this, m6vxpj);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (c82d43, hy3ul, $f7_5) {
        var hltkyu = this['doc']['implementation'];
        if (hltkyu && hltkyu['createDocumentType']) {
            var jmv$6x = hltkyu['createDocumentType'](c82d43, hy3ul, $f7_5);
            this['locator'] && znap6m(this['locator'], jmv$6x), zc28dqo(this, jmv$6x);
        }
    },
    'warning': function (wqo28) {
        console['warn']('[xmldom warning]\t' + wqo28, zp0n6ma(this['locator']));
    },
    'error': function (yt5z) {
        console['error']('[xmldom error]\t' + yt5z, zp0n6ma(this['locator']));
    },
    'fatalError': function (mpavj) {
        throw console['error']('[xmldom fatalError]\t' + mpavj, zp0n6ma(this['locator'])), mpavj;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ebn0) {
    zlh3d4u['prototype'][ebn0] = function () {
        return null;
    };
});
var zingb0 = require('./tT12tt')['XMLReader'],
    zp0gbn = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = zavjm6;