var z1 = wx.Z$;
function _yzkh59(y7x1ds) {
    this['options'] = y7x1ds || { 'locator': {} };
}
function _y_malc(tap_mc, hk5lf, htmg) {
    function jbeq6(_ltcf) {
        var w539n = tap_mc[_ltcf];
        !w539n && m_tal && (w539n = 0x2 == tap_mc['length'] ? function (e6sdy) {
            tap_mc(_ltcf, e6sdy);
        } : tap_mc), wz03$[_ltcf] = w539n && function (mg_ltf) {
            w539n('[xmldom ' + _ltcf + ']\t' + mg_ltf + _yptc_ia(htmg));
        } || function () {};
    }
    if (!tap_mc) {
        if (hk5lf instanceof _yhfk5lg) return hk5lf;
        tap_mc = hk5lf;
    }
    var wz03$ = {},
        m_tal = tap_mc instanceof Function;
    return htmg = htmg || {}, jbeq6('warning'), jbeq6('error'), jbeq6('fatalError'), wz03$;
}
function _yhfk5lg() {
    this['cdata'] = !0x1;
}
function _ygh5k9n(catm_, zk39n5) {
    zk39n5['lineNumber'] = catm_['lineNumber'], zk39n5['columnNumber'] = catm_['columnNumber'];
}
function _yptc_ia(z09) {
    return z09 ? '\x0a@' + (z09['systemId'] || '') + '#[line:' + z09['lineNumber'] + ',col:' + z09['columnNumber'] + ']' : void 0x0;
}
function _y_ioc(f5nkhg, glmf, tlf) {
    return 'string' == typeof f5nkhg ? f5nkhg['substr'](glmf, tlf) : f5nkhg['length'] >= glmf + tlf || glmf ? new java['lang']['String'](f5nkhg, glmf, tlf) + '' : f5nkhg;
}
function _ytglmfh(gfthlm, hklmfg) {
    gfthlm['currentElement'] ? gfthlm['currentElement']['appendChild'](hklmfg) : gfthlm['doc']['appendChild'](hklmfg);
}
_yzkh59['prototype']['parseFromString'] = function ($xr021, hzn59) {
    var je6dys = this['options'],
        mctla_ = new _ymlgk(),
        $2wr30 = je6dys['domBuilder'] || new _yhfk5lg(),
        wn3z0 = je6dys['errorHandler'],
        hfk = je6dys['locator'],
        e86syj = je6dys['xmlns'] || {},
        amlc_t = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return hfk && $2wr30['setDocumentLocator'](hfk), mctla_['errorHandler'] = _y_malc(wn3z0, $2wr30, hfk), mctla_['domBuilder'] = je6dys['domBuilder'] || $2wr30, /\/x?html?$/['test'](hzn59) && (amlc_t['nbsp'] = '\u00a0', amlc_t['copy'] = '©', e86syj[''] = 'http://www.w3.org/1999/xhtml'), e86syj['xml'] = e86syj['xml'] || 'http://www.w3.org/XML/1998/namespace', $xr021 ? mctla_['parse']($xr021, e86syj, amlc_t) : mctla_['errorHandler']['error']('invalid doc source'), $2wr30['doc'];
}, _yhfk5lg['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _yyd127()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (r12xd7, x1$7r, mthgfl, apco_) {
        var fgnkh = this['doc'],
            lgkfhm = fgnkh['createElementNS'](r12xd7, mthgfl || x1$7r),
            _cioa = apco_['length'];
        _ytglmfh(this, lgkfhm), this['currentElement'] = lgkfhm, this['locator'] && _ygh5k9n(this['locator'], lgkfhm);
        for (var tf_lmc = 0x0; _cioa > tf_lmc; tf_lmc++) {
            var r12xd7 = apco_['getURI'](tf_lmc),
                ghk5fn = apco_['getValue'](tf_lmc),
                mthgfl = apco_['getQName'](tf_lmc),
                nw390z = fgnkh['createAttributeNS'](r12xd7, mthgfl);
            this['locator'] && _ygh5k9n(apco_['getLocator'](tf_lmc), nw390z), nw390z['value'] = nw390z['nodeValue'] = ghk5fn, lgkfhm['setAttributeNode'](nw390z);
        }
    },
    'endElement': function () {
        {
            var itap_ = this['currentElement'];
            itap_['tagName'];
        }
        this['currentElement'] = itap_['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (n3wz5, r10w) {
        var iv = this['doc']['createProcessingInstruction'](n3wz5, r10w);
        this['locator'] && _ygh5k9n(this['locator'], iv), _ytglmfh(this, iv);
    },
    'ignorableWhitespace': function () {},
    'characters': function (qs6e) {
        if (qs6e = _y_ioc['apply'](this, arguments)) {
            if (this['cdata']) var dr2x = this['doc']['createCDATASection'](qs6e);else var dr2x = this['doc']['createTextNode'](qs6e);
            this['currentElement'] ? this['currentElement']['appendChild'](dr2x) : /^\s*$/['test'](qs6e) && this['doc']['appendChild'](dr2x), this['locator'] && _ygh5k9n(this['locator'], dr2x);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (fltg_) {
        (this['locator'] = fltg_) && (fltg_['lineNumber'] = 0x0);
    },
    'comment': function (xrd217) {
        xrd217 = _y_ioc['apply'](this, arguments);
        var i_ta = this['doc']['createComment'](xrd217);
        this['locator'] && _ygh5k9n(this['locator'], i_ta), _ytglmfh(this, i_ta);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (hk5gfn, cmlat, $30w2) {
        var n59zk3 = this['doc']['implementation'];
        if (n59zk3 && n59zk3['createDocumentType']) {
            var tc_am = n59zk3['createDocumentType'](hk5gfn, cmlat, $30w2);
            this['locator'] && _ygh5k9n(this['locator'], tc_am), _ytglmfh(this, tc_am);
        }
    },
    'warning': function (n5gfk) {
        console['warn']('[xmldom warning]\t' + n5gfk, _yptc_ia(this['locator']));
    },
    'error': function (lf_g) {
        console['error']('[xmldom error]\t' + lf_g, _yptc_ia(this['locator']));
    },
    'fatalError': function (opc_ai) {
        throw console['error']('[xmldom fatalError]\t' + opc_ai, _yptc_ia(this['locator'])), opc_ai;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (pavo4i) {
    _yhfk5lg['prototype'][pavo4i] = function () {
        return null;
    };
});
var _ymlgk = require('./yl4k')['XMLReader'],
    _yyd127 = exports['DOMImplementation'] = require('./lvb')['DOMImplementation'];
exports['XMLSerializer'] = require('./lvb')['XMLSerializer'], exports['DOMParser'] = _yzkh59;