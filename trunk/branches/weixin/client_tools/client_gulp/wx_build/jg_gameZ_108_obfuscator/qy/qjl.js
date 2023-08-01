var _j = wx.n$;
function _qriqfsw(om_7vc) {
    this['options'] = om_7vc || { 'locator': {} };
}
function _qri2wq(g5hk, tbnqsi, rf260p) {
    function kjy5hg(l8tnd) {
        var btl1n = g5hk[l8tnd];
        !btl1n && auv && (btl1n = 0x2 == g5hk['length'] ? function (ripw) {
            g5hk(l8tnd, ripw);
        } : g5hk), rifwp2[l8tnd] = btl1n && function (mvu) {
            btl1n('[xmldom ' + l8tnd + ']\t' + mvu + _qexyj5(rf260p));
        } || function () {};
    }
    if (!g5hk) {
        if (tbnqsi instanceof _qmavu) return tbnqsi;
        g5hk = tbnqsi;
    }
    var rifwp2 = {},
        auv = g5hk instanceof Function;
    return rf260p = rf260p || {}, kjy5hg('warning'), kjy5hg('error'), kjy5hg('fatalError'), rifwp2;
}
function _qmavu() {
    this['cdata'] = !0x1;
}
function _qnt1bs8(wi2qr, q2iwfr) {
    q2iwfr['lineNumber'] = wi2qr['lineNumber'], q2iwfr['columnNumber'] = wi2qr['columnNumber'];
}
function _qexyj5(n8t1b) {
    return n8t1b ? '\x0a@' + (n8t1b['systemId'] || '') + '#[line:' + n8t1b['lineNumber'] + ',col:' + n8t1b['columnNumber'] + ']' : void 0x0;
}
function _qocm_7(s1nb8t, ghjyak, f0r6p2) {
    return 'string' == typeof s1nb8t ? s1nb8t['substr'](ghjyak, f0r6p2) : s1nb8t['length'] >= ghjyak + f0r6p2 || ghjyak ? new java['lang']['String'](s1nb8t, ghjyak, f0r6p2) + '' : s1nb8t;
}
function _qaykjug(c7o3, s1bntq) {
    c7o3['currentElement'] ? c7o3['currentElement']['appendChild'](s1bntq) : c7o3['doc']['appendChild'](s1bntq);
}
_qriqfsw['prototype']['parseFromString'] = function (tqi, pr2f6) {
    var uv9kg = this['options'],
        ez5xy = new _qt1l8b(),
        ghjky = uv9kg['domBuilder'] || new _qmavu(),
        q1stn = uv9kg['errorHandler'],
        rwsqf = uv9kg['locator'],
        k9vagu = uv9kg['xmlns'] || {},
        hgajk = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return rwsqf && ghjky['setDocumentLocator'](rwsqf), ez5xy['errorHandler'] = _qri2wq(q1stn, ghjky, rwsqf), ez5xy['domBuilder'] = uv9kg['domBuilder'] || ghjky, /\/x?html?$/['test'](pr2f6) && (hgajk['nbsp'] = '\u00a0', hgajk['copy'] = '©', k9vagu[''] = 'http://www.w3.org/1999/xhtml'), k9vagu['xml'] = k9vagu['xml'] || 'http://www.w3.org/XML/1998/namespace', tqi ? ez5xy['parse'](tqi, k9vagu, hgajk) : ez5xy['errorHandler']['error']('invalid doc source'), ghjky['doc'];
}, _qmavu['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _qp730_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (wiqf2r, p6f02, tbn1, o0m37_) {
        var u9gak = this['doc'],
            gkhay = u9gak['createElementNS'](wiqf2r, tbn1 || p6f02),
            rfqi = o0m37_['length'];
        _qaykjug(this, gkhay), this['currentElement'] = gkhay, this['locator'] && _qnt1bs8(this['locator'], gkhay);
        for (var z5hy = 0x0; rfqi > z5hy; z5hy++) {
            var wiqf2r = o0m37_['getURI'](z5hy),
                xyje5h = o0m37_['getValue'](z5hy),
                tbn1 = o0m37_['getQName'](z5hy),
                gejhy = u9gak['createAttributeNS'](wiqf2r, tbn1);
            this['locator'] && _qnt1bs8(o0m37_['getLocator'](z5hy), gejhy), gejhy['value'] = gejhy['nodeValue'] = xyje5h, gkhay['setAttributeNode'](gejhy);
        }
    },
    'endElement': function () {
        {
            var wisbt = this['currentElement'];
            wisbt['tagName'];
        }
        this['currentElement'] = wisbt['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ez5xh, o_3m7) {
        var uo9cmv = this['doc']['createProcessingInstruction'](ez5xh, o_3m7);
        this['locator'] && _qnt1bs8(this['locator'], uo9cmv), _qaykjug(this, uo9cmv);
    },
    'ignorableWhitespace': function () {},
    'characters': function (nb8tl1) {
        if (nb8tl1 = _qocm_7['apply'](this, arguments)) {
            if (this['cdata']) var u9mov = this['doc']['createCDATASection'](nb8tl1);else var u9mov = this['doc']['createTextNode'](nb8tl1);
            this['currentElement'] ? this['currentElement']['appendChild'](u9mov) : /^\s*$/['test'](nb8tl1) && this['doc']['appendChild'](u9mov), this['locator'] && _qnt1bs8(this['locator'], u9mov);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (wf6pr) {
        (this['locator'] = wf6pr) && (wf6pr['lineNumber'] = 0x0);
    },
    'comment': function (bsnqit) {
        bsnqit = _qocm_7['apply'](this, arguments);
        var guykj = this['doc']['createComment'](bsnqit);
        this['locator'] && _qnt1bs8(this['locator'], guykj), _qaykjug(this, guykj);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (qbwist, i2frqw, c7_3m) {
        var eh5gy = this['doc']['implementation'];
        if (eh5gy && eh5gy['createDocumentType']) {
            var y5jeg = eh5gy['createDocumentType'](qbwist, i2frqw, c7_3m);
            this['locator'] && _qnt1bs8(this['locator'], y5jeg), _qaykjug(this, y5jeg);
        }
    },
    'warning': function (umv9ac) {
        console['warn']('[xmldom warning]\t' + umv9ac, _qexyj5(this['locator']));
    },
    'error': function (eyhzx5) {
        console['error']('[xmldom error]\t' + eyhzx5, _qexyj5(this['locator']));
    },
    'fatalError': function (l1dn) {
        throw console['error']('[xmldom fatalError]\t' + l1dn, _qexyj5(this['locator'])), l1dn;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qwb) {
    _qmavu['prototype'][qwb] = function () {
        return null;
    };
});
var _qt1l8b = require('./a1jk')['XMLReader'],
    _qp730_ = exports['DOMImplementation'] = require('./xhhk')['DOMImplementation'];
exports['XMLSerializer'] = require('./xhhk')['XMLSerializer'], exports['DOMParser'] = _qriqfsw;