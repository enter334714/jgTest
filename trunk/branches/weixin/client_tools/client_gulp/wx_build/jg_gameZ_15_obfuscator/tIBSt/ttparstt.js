var P = wx.$y;
function Tetpwz(fw2k$) {
    this['options'] = fw2k$ || { 'locator': {} };
}
function Tv1jh09(pz6w2, _gxs, y_lqcs) {
    function ysl_cr(o8nxd$) {
        var rycl_s = pz6w2[o8nxd$];
        !rycl_s && j09ve && (rycl_s = 0x2 == pz6w2['length'] ? function (b374mi) {
            pz6w2(o8nxd$, b374mi);
        } : pz6w2), dg[o8nxd$] = rycl_s && function (nxod8) {
            rycl_s('[xmldom ' + o8nxd$ + ']\t' + nxod8 + Tmc_rl(y_lqcs));
        } || function () {};
    }
    if (!pz6w2) {
        if (_gxs instanceof Tk2fp$) return _gxs;
        pz6w2 = _gxs;
    }
    var dg = {},
        j09ve = pz6w2 instanceof Function;
    return y_lqcs = y_lqcs || {}, ysl_cr('warning'), ysl_cr('error'), ysl_cr('fatalError'), dg;
}
function Tk2fp$() {
    this['cdata'] = !0x1;
}
function Twk$of2(kwf2pt, qgy8xn) {
    qgy8xn['lineNumber'] = kwf2pt['lineNumber'], qgy8xn['columnNumber'] = kwf2pt['columnNumber'];
}
function Tmc_rl($2wpfk) {
    return $2wpfk ? '\x0a@' + ($2wpfk['systemId'] || '') + '#[line:' + $2wpfk['lineNumber'] + ',col:' + $2wpfk['columnNumber'] + ']' : void 0x0;
}
function Tj9e1v(xn_yq, lsyqg_, ub4i) {
    return 'string' == typeof xn_yq ? xn_yq['substr'](lsyqg_, ub4i) : xn_yq['length'] >= lsyqg_ + ub4i || lsyqg_ ? new java['lang']['String'](xn_yq, lsyqg_, ub4i) + '' : xn_yq;
}
function Tlmc_(ptkf2w, ndgx8) {
    ptkf2w['currentElement'] ? ptkf2w['currentElement']['appendChild'](ndgx8) : ptkf2w['doc']['appendChild'](ndgx8);
}
Tetpwz['prototype']['parseFromString'] = function (r37b, xg_yqs) {
    var dn8xq = this['options'],
        z2ftp = new Tysglq_(),
        $dkfo2 = dn8xq['domBuilder'] || new Tk2fp$(),
        w2pfk = dn8xq['errorHandler'],
        scq_yl = dn8xq['locator'],
        qgsx = dn8xq['xmlns'] || {},
        i3bau = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return scq_yl && $dkfo2['setDocumentLocator'](scq_yl), z2ftp['errorHandler'] = Tv1jh09(w2pfk, $dkfo2, scq_yl), z2ftp['domBuilder'] = dn8xq['domBuilder'] || $dkfo2, /\/x?html?$/['test'](xg_yqs) && (i3bau['nbsp'] = '\u00a0', i3bau['copy'] = '©', qgsx[''] = 'http://www.w3.org/1999/xhtml'), qgsx['xml'] = qgsx['xml'] || 'http://www.w3.org/XML/1998/namespace', r37b ? z2ftp['parse'](r37b, qgsx, i3bau) : z2ftp['errorHandler']['error']('invalid doc source'), $dkfo2['doc'];
}, Tk2fp$['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Txn_g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (mscl, jv160e, sqlg_, rm_lc) {
        var okfd$8 = this['doc'],
            ev01z = okfd$8['createElementNS'](mscl, sqlg_ || jv160e),
            ry_ls = rm_lc['length'];
        Tlmc_(this, ev01z), this['currentElement'] = ev01z, this['locator'] && Twk$of2(this['locator'], ev01z);
        for (var pzftw2 = 0x0; ry_ls > pzftw2; pzftw2++) {
            var mscl = rm_lc['getURI'](pzftw2),
                f2w = rm_lc['getValue'](pzftw2),
                sqlg_ = rm_lc['getQName'](pzftw2),
                qgxyn = okfd$8['createAttributeNS'](mscl, sqlg_);
            this['locator'] && Twk$of2(rm_lc['getLocator'](pzftw2), qgxyn), qgxyn['value'] = qgxyn['nodeValue'] = f2w, ev01z['setAttributeNode'](qgxyn);
        }
    },
    'endElement': function () {
        {
            var t6pw2 = this['currentElement'];
            t6pw2['tagName'];
        }
        this['currentElement'] = t6pw2['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (fdo$2, $odn) {
        var ev0j19 = this['doc']['createProcessingInstruction'](fdo$2, $odn);
        this['locator'] && Twk$of2(this['locator'], ev0j19), Tlmc_(this, ev0j19);
    },
    'ignorableWhitespace': function () {},
    'characters': function (v19jh) {
        if (v19jh = Tj9e1v['apply'](this, arguments)) {
            if (this['cdata']) var fpz2t = this['doc']['createCDATASection'](v19jh);else var fpz2t = this['doc']['createTextNode'](v19jh);
            this['currentElement'] ? this['currentElement']['appendChild'](fpz2t) : /^\s*$/['test'](v19jh) && this['doc']['appendChild'](fpz2t), this['locator'] && Twk$of2(this['locator'], fpz2t);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (odn$x8) {
        (this['locator'] = odn$x8) && (odn$x8['lineNumber'] = 0x0);
    },
    'comment': function (yqc) {
        yqc = Tj9e1v['apply'](this, arguments);
        var mcs7l = this['doc']['createComment'](yqc);
        this['locator'] && Twk$of2(this['locator'], mcs7l), Tlmc_(this, mcs7l);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (a4i3u, _ygql, o2f$d) {
        var rscl_ = this['doc']['implementation'];
        if (rscl_ && rscl_['createDocumentType']) {
            var m7r3 = rscl_['createDocumentType'](a4i3u, _ygql, o2f$d);
            this['locator'] && Twk$of2(this['locator'], m7r3), Tlmc_(this, m7r3);
        }
    },
    'warning': function (syx_gq) {
        console['warn']('[xmldom warning]\t' + syx_gq, Tmc_rl(this['locator']));
    },
    'error': function (r7cmbl) {
        console['error']('[xmldom error]\t' + r7cmbl, Tmc_rl(this['locator']));
    },
    'fatalError': function ($8ofkd) {
        throw console['error']('[xmldom fatalError]\t' + $8ofkd, Tmc_rl(this['locator'])), $8ofkd;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rsyl) {
    Tk2fp$['prototype'][rsyl] = function () {
        return null;
    };
});
var Tysglq_ = require('./tT12tt')['XMLReader'],
    Txn_g = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = Tetpwz;