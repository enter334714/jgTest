var g = wx.u$;
function _db$729l(ub29) {
    this['options'] = ub29 || { 'locator': {} };
}
function _dczmlo(y_gkn, k8whe_, vu5b) {
    function qf5r(cm7zo) {
        var iygnk = y_gkn[cm7zo];
        !iygnk && zo && (iygnk = 0x2 == y_gkn['length'] ? function (kgy_nj) {
            y_gkn(cm7zo, kgy_nj);
        } : y_gkn), lpocz[cm7zo] = iygnk && function (jnky_) {
            iygnk('[xmldom ' + cm7zo + ']\t' + jnky_ + _db59uv(vu5b));
        } || function () {};
    }
    if (!y_gkn) {
        if (k8whe_ instanceof _dw8a) return k8whe_;
        y_gkn = k8whe_;
    }
    var lpocz = {},
        zo = y_gkn instanceof Function;
    return vu5b = vu5b || {}, qf5r('warning'), qf5r('error'), qf5r('fatalError'), lpocz;
}
function _dw8a() {
    this['cdata'] = !0x1;
}
function _dk8_new(_kynw, g_ynkj) {
    g_ynkj['lineNumber'] = _kynw['lineNumber'], g_ynkj['columnNumber'] = _kynw['columnNumber'];
}
function _db59uv(zlmcpo) {
    return zlmcpo ? '\x0a@' + (zlmcpo['systemId'] || '') + '#[line:' + zlmcpo['lineNumber'] + ',col:' + zlmcpo['columnNumber'] + ']' : void 0x0;
}
function _dvqdf5u(yi4jgx, kwn_jy, _hkew) {
    return 'string' == typeof yi4jgx ? yi4jgx['substr'](kwn_jy, _hkew) : yi4jgx['length'] >= kwn_jy + _hkew || kwn_jy ? new java['lang']['String'](yi4jgx, kwn_jy, _hkew) + '' : yi4jgx;
}
function _de8ahws(s_wh8, pmol) {
    s_wh8['currentElement'] ? s_wh8['currentElement']['appendChild'](pmol) : s_wh8['doc']['appendChild'](pmol);
}
_db$729l['prototype']['parseFromString'] = function (v5duq, d63rt) {
    var whek_8 = this['options'],
        w_e8 = new _dyjnig(),
        ngy4ji = whek_8['domBuilder'] || new _dw8a(),
        qd6f = whek_8['errorHandler'],
        cm4o = whek_8['locator'],
        k8hew_ = whek_8['xmlns'] || {},
        lzm7co = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return cm4o && ngy4ji['setDocumentLocator'](cm4o), w_e8['errorHandler'] = _dczmlo(qd6f, ngy4ji, cm4o), w_e8['domBuilder'] = whek_8['domBuilder'] || ngy4ji, /\/x?html?$/['test'](d63rt) && (lzm7co['nbsp'] = '\u00a0', lzm7co['copy'] = '©', k8hew_[''] = 'http://www.w3.org/1999/xhtml'), k8hew_['xml'] = k8hew_['xml'] || 'http://www.w3.org/XML/1998/namespace', v5duq ? w_e8['parse'](v5duq, k8hew_, lzm7co) : w_e8['errorHandler']['error']('invalid doc source'), ngy4ji['doc'];
}, _dw8a['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _dwaes8h()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (u2$b9, igyjn4, lzo7c, enkjw) {
        var xmzoc = this['doc'],
            $9lb7 = xmzoc['createElementNS'](u2$b9, lzo7c || igyjn4),
            haesw = enkjw['length'];
        _de8ahws(this, $9lb7), this['currentElement'] = $9lb7, this['locator'] && _dk8_new(this['locator'], $9lb7);
        for (var zpxmo = 0x0; haesw > zpxmo; zpxmo++) {
            var u2$b9 = enkjw['getURI'](zpxmo),
                _jnkgy = enkjw['getValue'](zpxmo),
                lzo7c = enkjw['getQName'](zpxmo),
                xgj4 = xmzoc['createAttributeNS'](u2$b9, lzo7c);
            this['locator'] && _dk8_new(enkjw['getLocator'](zpxmo), xgj4), xgj4['value'] = xgj4['nodeValue'] = _jnkgy, $9lb7['setAttributeNode'](xgj4);
        }
    },
    'endElement': function () {
        {
            var j_ynk = this['currentElement'];
            j_ynk['tagName'];
        }
        this['currentElement'] = j_ynk['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (j4iygx, t3r6f) {
        var zpcomx = this['doc']['createProcessingInstruction'](j4iygx, t3r6f);
        this['locator'] && _dk8_new(this['locator'], zpcomx), _de8ahws(this, zpcomx);
    },
    'ignorableWhitespace': function () {},
    'characters': function (q65du) {
        if (q65du = _dvqdf5u['apply'](this, arguments)) {
            if (this['cdata']) var yp4i = this['doc']['createCDATASection'](q65du);else var yp4i = this['doc']['createTextNode'](q65du);
            this['currentElement'] ? this['currentElement']['appendChild'](yp4i) : /^\s*$/['test'](q65du) && this['doc']['appendChild'](yp4i), this['locator'] && _dk8_new(this['locator'], yp4i);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (cp4gxi) {
        (this['locator'] = cp4gxi) && (cp4gxi['lineNumber'] = 0x0);
    },
    'comment': function (njyig4) {
        njyig4 = _dvqdf5u['apply'](this, arguments);
        var ox4pc = this['doc']['createComment'](njyig4);
        this['locator'] && _dk8_new(this['locator'], ox4pc), _de8ahws(this, ox4pc);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (jgk_ny, h8kw, _gkjny) {
        var mpolcz = this['doc']['implementation'];
        if (mpolcz && mpolcz['createDocumentType']) {
            var yw_k = mpolcz['createDocumentType'](jgk_ny, h8kw, _gkjny);
            this['locator'] && _dk8_new(this['locator'], yw_k), _de8ahws(this, yw_k);
        }
    },
    'warning': function (drtfq) {
        console['warn']('[xmldom warning]\t' + drtfq, _db59uv(this['locator']));
    },
    'error': function (b$9z7l) {
        console['error']('[xmldom error]\t' + b$9z7l, _db59uv(this['locator']));
    },
    'fatalError': function (b$l7zo) {
        throw console['error']('[xmldom fatalError]\t' + b$l7zo, _db59uv(this['locator'])), b$l7zo;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vb9$u2) {
    _dw8a['prototype'][vb9$u2] = function () {
        return null;
    };
});
var _dyjnig = require('./tT12tt')['XMLReader'],
    _dwaes8h = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = _db$729l;