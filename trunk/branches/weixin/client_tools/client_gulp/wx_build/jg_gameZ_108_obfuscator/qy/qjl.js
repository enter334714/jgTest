var _j = wx.n$;
function _qv_m9c(v9g) {
    this['options'] = v9g || { 'locator': {} };
}
function _qm7o30(wsrfqi, e$z5x, b1s8nt) {
    function fi2wp(g9kav) {
        var l1b8n = wsrfqi[g9kav];
        !l1b8n && ov9mcu && (l1b8n = 0x2 == wsrfqi['length'] ? function (wsqfr) {
            wsrfqi(g9kav, wsqfr);
        } : wsrfqi), $5zxe4[g9kav] = l1b8n && function (tnbisq) {
            l1b8n('[xmldom ' + g9kav + ']\t' + tnbisq + _qkhj5g(b1s8nt));
        } || function () {};
    }
    if (!wsrfqi) {
        if (e$z5x instanceof _qx$5z4e) return e$z5x;
        wsrfqi = e$z5x;
    }
    var $5zxe4 = {},
        ov9mcu = wsrfqi instanceof Function;
    return b1s8nt = b1s8nt || {}, fi2wp('warning'), fi2wp('error'), fi2wp('fatalError'), $5zxe4;
}
function _qx$5z4e() {
    this['cdata'] = !0x1;
}
function _qgyk(j5ghk, hyejx) {
    hyejx['lineNumber'] = j5ghk['lineNumber'], hyejx['columnNumber'] = j5ghk['columnNumber'];
}
function _qkhj5g(_3m7o0) {
    return _3m7o0 ? '\x0a@' + (_3m7o0['systemId'] || '') + '#[line:' + _3m7o0['lineNumber'] + ',col:' + _3m7o0['columnNumber'] + ']' : void 0x0;
}
function _qumcv9(r2iqf, ej5xyh, ovmc9u) {
    return 'string' == typeof r2iqf ? r2iqf['substr'](ej5xyh, ovmc9u) : r2iqf['length'] >= ej5xyh + ovmc9u || ej5xyh ? new java['lang']['String'](r2iqf, ej5xyh, ovmc9u) + '' : r2iqf;
}
function _qmvc9u(ocvm7, kj5yg) {
    ocvm7['currentElement'] ? ocvm7['currentElement']['appendChild'](kj5yg) : ocvm7['doc']['appendChild'](kj5yg);
}
_qv_m9c['prototype']['parseFromString'] = function (x5ehy, _mv7) {
    var cm3o = this['options'],
        gejh5y = new _qg5jkhy(),
        vukac = cm3o['domBuilder'] || new _qx$5z4e(),
        jkgu = cm3o['errorHandler'],
        mcva9u = cm3o['locator'],
        pi2w = cm3o['xmlns'] || {},
        ujgaky = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return mcva9u && vukac['setDocumentLocator'](mcva9u), gejh5y['errorHandler'] = _qm7o30(jkgu, vukac, mcva9u), gejh5y['domBuilder'] = cm3o['domBuilder'] || vukac, /\/x?html?$/['test'](_mv7) && (ujgaky['nbsp'] = '\u00a0', ujgaky['copy'] = '©', pi2w[''] = 'http://www.w3.org/1999/xhtml'), pi2w['xml'] = pi2w['xml'] || 'http://www.w3.org/XML/1998/namespace', x5ehy ? gejh5y['parse'](x5ehy, pi2w, ujgaky) : gejh5y['errorHandler']['error']('invalid doc source'), vukac['doc'];
}, _qx$5z4e['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _qbsn1qt()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (hyej5, o_m7, _omc7, hzex5) {
        var rfsq = this['doc'],
            nsbqti = rfsq['createElementNS'](hyej5, _omc7 || o_m7),
            qtibsn = hzex5['length'];
        _qmvc9u(this, nsbqti), this['currentElement'] = nsbqti, this['locator'] && _qgyk(this['locator'], nsbqti);
        for (var j5hx = 0x0; qtibsn > j5hx; j5hx++) {
            var hyej5 = hzex5['getURI'](j5hx),
                _c7mo = hzex5['getValue'](j5hx),
                _omc7 = hzex5['getQName'](j5hx),
                oc3m_ = rfsq['createAttributeNS'](hyej5, _omc7);
            this['locator'] && _qgyk(hzex5['getLocator'](j5hx), oc3m_), oc3m_['value'] = oc3m_['nodeValue'] = _c7mo, nsbqti['setAttributeNode'](oc3m_);
        }
    },
    'endElement': function () {
        {
            var p7023 = this['currentElement'];
            p7023['tagName'];
        }
        this['currentElement'] = p7023['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (p6f032, v9c_o) {
        var cmo73 = this['doc']['createProcessingInstruction'](p6f032, v9c_o);
        this['locator'] && _qgyk(this['locator'], cmo73), _qmvc9u(this, cmo73);
    },
    'ignorableWhitespace': function () {},
    'characters': function (yj5kgh) {
        if (yj5kgh = _qumcv9['apply'](this, arguments)) {
            if (this['cdata']) var fw2r6 = this['doc']['createCDATASection'](yj5kgh);else var fw2r6 = this['doc']['createTextNode'](yj5kgh);
            this['currentElement'] ? this['currentElement']['appendChild'](fw2r6) : /^\s*$/['test'](yj5kgh) && this['doc']['appendChild'](fw2r6), this['locator'] && _qgyk(this['locator'], fw2r6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (wrf6) {
        (this['locator'] = wrf6) && (wrf6['lineNumber'] = 0x0);
    },
    'comment': function (yh5jgk) {
        yh5jgk = _qumcv9['apply'](this, arguments);
        var sqifw = this['doc']['createComment'](yh5jgk);
        this['locator'] && _qgyk(this['locator'], sqifw), _qmvc9u(this, sqifw);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (tsinqb, wpf6r, r6f) {
        var uv9akg = this['doc']['implementation'];
        if (uv9akg && uv9akg['createDocumentType']) {
            var fpi2rw = uv9akg['createDocumentType'](tsinqb, wpf6r, r6f);
            this['locator'] && _qgyk(this['locator'], fpi2rw), _qmvc9u(this, fpi2rw);
        }
    },
    'warning': function (qsifr) {
        console['warn']('[xmldom warning]\t' + qsifr, _qkhj5g(this['locator']));
    },
    'error': function (f2p06) {
        console['error']('[xmldom error]\t' + f2p06, _qkhj5g(this['locator']));
    },
    'fatalError': function (a9kc) {
        throw console['error']('[xmldom fatalError]\t' + a9kc, _qkhj5g(this['locator'])), a9kc;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (isfrw) {
    _qx$5z4e['prototype'][isfrw] = function () {
        return null;
    };
});
var _qg5jkhy = require('./a1jk')['XMLReader'],
    _qbsn1qt = exports['DOMImplementation'] = require('./xhhk')['DOMImplementation'];
exports['XMLSerializer'] = require('./xhhk')['XMLSerializer'], exports['DOMParser'] = _qv_m9c;