var f = wx.$B;
function Sj974$n(r7nj9) {
    this['options'] = r7nj9 || { 'locator': {} };
}
function Sgiwlox(r_dbzf, a5s36u, bzd_fr) {
    function mxiogw(mxpg) {
        var vs28 = r_dbzf[mxpg];
        !vs28 && $_ && (vs28 = 0x2 == r_dbzf['length'] ? function (l635w) {
            r_dbzf(mxpg, l635w);
        } : r_dbzf), _7rn$j[mxpg] = vs28 && function (z_drb) {
            vs28('[xmldom ' + mxpg + ']\t' + z_drb + Sa3u56s(bzd_fr));
        } || function () {};
    }
    if (!r_dbzf) {
        if (a5s36u instanceof Skgphmt) return a5s36u;
        r_dbzf = a5s36u;
    }
    var _7rn$j = {},
        $_ = r_dbzf instanceof Function;
    return bzd_fr = bzd_fr || {}, mxiogw('warning'), mxiogw('error'), mxiogw('fatalError'), _7rn$j;
}
function Skgphmt() {
    this['cdata'] = !0x1;
}
function Sr_7(n4j7, th4pk) {
    th4pk['lineNumber'] = n4j7['lineNumber'], th4pk['columnNumber'] = n4j7['columnNumber'];
}
function Sa3u56s(gxoh) {
    return gxoh ? '\x0a@' + (gxoh['systemId'] || '') + '#[line:' + gxoh['lineNumber'] + ',col:' + gxoh['columnNumber'] + ']' : void 0x0;
}
function Sogmt(e794j, _7z, nz$_fr) {
    return 'string' == typeof e794j ? e794j['substr'](_7z, nz$_fr) : e794j['length'] >= _7z + nz$_fr || _7z ? new java['lang']['String'](e794j, _7z, nz$_fr) + '' : e794j;
}
function Stmkpg(br_zfd, pgmtoh) {
    br_zfd['currentElement'] ? br_zfd['currentElement']['appendChild'](pgmtoh) : br_zfd['doc']['appendChild'](pgmtoh);
}
Sj974$n['prototype']['parseFromString'] = function (kje497, _bzrnf) {
    var xhgmop = this['options'],
        bdfrz_ = new Svy802(),
        fbznr = xhgmop['domBuilder'] || new Skgphmt(),
        e$j74 = xhgmop['errorHandler'],
        ixghmo = xhgmop['locator'],
        n_7$rz = xhgmop['xmlns'] || {},
        gmt = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ixghmo && fbznr['setDocumentLocator'](ixghmo), bdfrz_['errorHandler'] = Sgiwlox(e$j74, fbznr, ixghmo), bdfrz_['domBuilder'] = xhgmop['domBuilder'] || fbznr, /\/x?html?$/['test'](_bzrnf) && (gmt['nbsp'] = '\u00a0', gmt['copy'] = '©', n_7$rz[''] = 'http://www.w3.org/1999/xhtml'), n_7$rz['xml'] = n_7$rz['xml'] || 'http://www.w3.org/XML/1998/namespace', kje497 ? bdfrz_['parse'](kje497, n_7$rz, gmt) : bdfrz_['errorHandler']['error']('invalid doc source'), fbznr['doc'];
}, Skgphmt['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Ssa856()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (q8s6au, ek74, phke4t, _rdz) {
        var tp94 = this['doc'],
            u5a63 = tp94['createElementNS'](q8s6au, phke4t || ek74),
            ohptgm = _rdz['length'];
        Stmkpg(this, u5a63), this['currentElement'] = u5a63, this['locator'] && Sr_7(this['locator'], u5a63);
        for (var mxwo = 0x0; ohptgm > mxwo; mxwo++) {
            var q8s6au = _rdz['getURI'](mxwo),
                $r7_ = _rdz['getValue'](mxwo),
                phke4t = _rdz['getQName'](mxwo),
                u6a58s = tp94['createAttributeNS'](q8s6au, phke4t);
            this['locator'] && Sr_7(_rdz['getLocator'](mxwo), u6a58s), u6a58s['value'] = u6a58s['nodeValue'] = $r7_, u5a63['setAttributeNode'](u6a58s);
        }
    },
    'endElement': function () {
        {
            var aq2us = this['currentElement'];
            aq2us['tagName'];
        }
        this['currentElement'] = aq2us['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (u6s5a3, gmhxp) {
        var q0y82 = this['doc']['createProcessingInstruction'](u6s5a3, gmhxp);
        this['locator'] && Sr_7(this['locator'], q0y82), Stmkpg(this, q0y82);
    },
    'ignorableWhitespace': function () {},
    'characters': function (fzb) {
        if (fzb = Sogmt['apply'](this, arguments)) {
            if (this['cdata']) var gktmp = this['doc']['createCDATASection'](fzb);else var gktmp = this['doc']['createTextNode'](fzb);
            this['currentElement'] ? this['currentElement']['appendChild'](gktmp) : /^\s*$/['test'](fzb) && this['doc']['appendChild'](gktmp), this['locator'] && Sr_7(this['locator'], gktmp);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (_7$nj) {
        (this['locator'] = _7$nj) && (_7$nj['lineNumber'] = 0x0);
    },
    'comment': function (hmxig) {
        hmxig = Sogmt['apply'](this, arguments);
        var hetpk4 = this['doc']['createComment'](hmxig);
        this['locator'] && Sr_7(this['locator'], hetpk4), Stmkpg(this, hetpk4);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (sa6uq8, goxhp, q80yv2) {
        var _n$j = this['doc']['implementation'];
        if (_n$j && _n$j['createDocumentType']) {
            var $z_rn7 = _n$j['createDocumentType'](sa6uq8, goxhp, q80yv2);
            this['locator'] && Sr_7(this['locator'], $z_rn7), Stmkpg(this, $z_rn7);
        }
    },
    'warning': function (u31a65) {
        console['warn']('[xmldom warning]\t' + u31a65, Sa3u56s(this['locator']));
    },
    'error': function (e4j$) {
        console['error']('[xmldom error]\t' + e4j$, Sa3u56s(this['locator']));
    },
    'fatalError': function (s28qau) {
        throw console['error']('[xmldom fatalError]\t' + s28qau, Sa3u56s(this['locator'])), s28qau;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fr_$n) {
    Skgphmt['prototype'][fr_$n] = function () {
        return null;
    };
});
var Svy802 = require('./l58a')['XMLReader'],
    Ssa856 = exports['DOMImplementation'] = require('./gg635a')['DOMImplementation'];
exports['XMLSerializer'] = require('./gg635a')['XMLSerializer'], exports['DOMParser'] = Sj974$n;