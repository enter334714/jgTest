var _ = wx.y$;
function _dnlp7g(pw7lds) {
    this['options'] = pw7lds || { 'locator': {} };
}
function _doh0zqr(sqzh6o, vcmka, t5eu1j) {
    function cvxma(d7ls6w) {
        var uyjei5 = sqzh6o[d7ls6w];
        !uyjei5 && slw7d6 && (uyjei5 = 0x2 == sqzh6o['length'] ? function (hqo0z) {
            sqzh6o(d7ls6w, hqo0z);
        } : sqzh6o), je1u5[d7ls6w] = uyjei5 && function (z3or) {
            uyjei5('[xmldom ' + d7ls6w + ']\t' + z3or + _dz0r(t5eu1j));
        } || function () {};
    }
    if (!sqzh6o) {
        if (vcmka instanceof _dk9mf) return vcmka;
        sqzh6o = vcmka;
    }
    var je1u5 = {},
        slw7d6 = sqzh6o instanceof Function;
    return t5eu1j = t5eu1j || {}, cvxma('warning'), cvxma('error'), cvxma('fatalError'), je1u5;
}
function _dk9mf() {
    this['cdata'] = !0x1;
}
function _dy2g4n(pld7ws, v9$mk) {
    v9$mk['lineNumber'] = pld7ws['lineNumber'], v9$mk['columnNumber'] = pld7ws['columnNumber'];
}
function _dz0r(q6szwh) {
    return q6szwh ? '\x0a@' + (q6szwh['systemId'] || '') + '#[line:' + q6szwh['lineNumber'] + ',col:' + q6szwh['columnNumber'] + ']' : void 0x0;
}
function _dk3f9$r(a_kcvm, npb, wld7sp) {
    return 'string' == typeof a_kcvm ? a_kcvm['substr'](npb, wld7sp) : a_kcvm['length'] >= npb + wld7sp || npb ? new java['lang']['String'](a_kcvm, npb, wld7sp) + '' : a_kcvm;
}
function _dei4u(ebyi24, oz39) {
    ebyi24['currentElement'] ? ebyi24['currentElement']['appendChild'](oz39) : ebyi24['doc']['appendChild'](oz39);
}
_dnlp7g['prototype']['parseFromString'] = function ($9f3vk, n2iyb4) {
    var ygnb4 = this['options'],
        pln72 = new _dn2bp4g(),
        eiy4 = ygnb4['domBuilder'] || new _dk9mf(),
        ei4jy = ygnb4['errorHandler'],
        wdlp7 = ygnb4['locator'],
        x8amc_ = ygnb4['xmlns'] || {},
        ejy5ui = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return wdlp7 && eiy4['setDocumentLocator'](wdlp7), pln72['errorHandler'] = _doh0zqr(ei4jy, eiy4, wdlp7), pln72['domBuilder'] = ygnb4['domBuilder'] || eiy4, /\/x?html?$/['test'](n2iyb4) && (ejy5ui['nbsp'] = '\u00a0', ejy5ui['copy'] = '©', x8amc_[''] = 'http://www.w3.org/1999/xhtml'), x8amc_['xml'] = x8amc_['xml'] || 'http://www.w3.org/XML/1998/namespace', $9f3vk ? pln72['parse']($9f3vk, x8amc_, ejy5ui) : pln72['errorHandler']['error']('invalid doc source'), eiy4['doc'];
}, _dk9mf['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _dxcmv_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (tjeiu5, xacm8_, akfv_, mckav_) {
        var y5uij = this['doc'],
            f$r93k = y5uij['createElementNS'](tjeiu5, akfv_ || xacm8_),
            ji4bey = mckav_['length'];
        _dei4u(this, f$r93k), this['currentElement'] = f$r93k, this['locator'] && _dy2g4n(this['locator'], f$r93k);
        for (var plg7dw = 0x0; ji4bey > plg7dw; plg7dw++) {
            var tjeiu5 = mckav_['getURI'](plg7dw),
                u1j = mckav_['getValue'](plg7dw),
                akfv_ = mckav_['getQName'](plg7dw),
                f3r$9k = y5uij['createAttributeNS'](tjeiu5, akfv_);
            this['locator'] && _dy2g4n(mckav_['getLocator'](plg7dw), f3r$9k), f3r$9k['value'] = f3r$9k['nodeValue'] = u1j, f$r93k['setAttributeNode'](f3r$9k);
        }
    },
    'endElement': function () {
        {
            var dl6q = this['currentElement'];
            dl6q['tagName'];
        }
        this['currentElement'] = dl6q['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (yij4e, kcmva_) {
        var va_mfk = this['doc']['createProcessingInstruction'](yij4e, kcmva_);
        this['locator'] && _dy2g4n(this['locator'], va_mfk), _dei4u(this, va_mfk);
    },
    'ignorableWhitespace': function () {},
    'characters': function (oqhs6) {
        if (oqhs6 = _dk3f9$r['apply'](this, arguments)) {
            if (this['cdata']) var ueji5y = this['doc']['createCDATASection'](oqhs6);else var ueji5y = this['doc']['createTextNode'](oqhs6);
            this['currentElement'] ? this['currentElement']['appendChild'](ueji5y) : /^\s*$/['test'](oqhs6) && this['doc']['appendChild'](ueji5y), this['locator'] && _dy2g4n(this['locator'], ueji5y);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (yb4n2) {
        (this['locator'] = yb4n2) && (yb4n2['lineNumber'] = 0x0);
    },
    'comment': function (gnpld) {
        gnpld = _dk3f9$r['apply'](this, arguments);
        var xa_m8c = this['doc']['createComment'](gnpld);
        this['locator'] && _dy2g4n(this['locator'], xa_m8c), _dei4u(this, xa_m8c);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (ohr30z, zqsw6, dlgp7) {
        var o06qh = this['doc']['implementation'];
        if (o06qh && o06qh['createDocumentType']) {
            var u1je5t = o06qh['createDocumentType'](ohr30z, zqsw6, dlgp7);
            this['locator'] && _dy2g4n(this['locator'], u1je5t), _dei4u(this, u1je5t);
        }
    },
    'warning': function (vxm_ca) {
        console['warn']('[xmldom warning]\t' + vxm_ca, _dz0r(this['locator']));
    },
    'error': function (d7lsp) {
        console['error']('[xmldom error]\t' + d7lsp, _dz0r(this['locator']));
    },
    'fatalError': function (gnbp27) {
        throw console['error']('[xmldom fatalError]\t' + gnbp27, _dz0r(this['locator'])), gnbp27;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (xmv_a) {
    _dk9mf['prototype'][xmv_a] = function () {
        return null;
    };
});
var _dn2bp4g = require('./bbbsax')['XMLReader'],
    _dxcmv_ = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dnlp7g;