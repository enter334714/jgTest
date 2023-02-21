var g = wx.u$;
function _dwy_(whs8ae) {
    this['options'] = whs8ae || { 'locator': {} };
}
function _dews8a(kw_he, omplcz, oz7lm$) {
    function cpixg(o$zlb7) {
        var k_gjyn = kw_he[o$zlb7];
        !k_gjyn && $7bozl && (k_gjyn = 0x2 == kw_he['length'] ? function (g_ny) {
            kw_he(o$zlb7, g_ny);
        } : kw_he), enjw_[o$zlb7] = k_gjyn && function (frq5d6) {
            k_gjyn('[xmldom ' + o$zlb7 + ']\t' + frq5d6 + _dz$mo7l(oz7lm$));
        } || function () {};
    }
    if (!kw_he) {
        if (omplcz instanceof _d_jnkew) return omplcz;
        kw_he = omplcz;
    }
    var enjw_ = {},
        $7bozl = kw_he instanceof Function;
    return oz7lm$ = oz7lm$ || {}, cpixg('warning'), cpixg('error'), cpixg('fatalError'), enjw_;
}
function _d_jnkew() {
    this['cdata'] = !0x1;
}
function _dqr5(u5vb, rd6fqt) {
    rd6fqt['lineNumber'] = u5vb['lineNumber'], rd6fqt['columnNumber'] = u5vb['columnNumber'];
}
function _dz$mo7l(b9v2) {
    return b9v2 ? '\x0a@' + (b9v2['systemId'] || '') + '#[line:' + b9v2['lineNumber'] + ',col:' + b9v2['columnNumber'] + ']' : void 0x0;
}
function _dpgxy4i(l$o7b, x4ypg, e_nk8w) {
    return 'string' == typeof l$o7b ? l$o7b['substr'](x4ypg, e_nk8w) : l$o7b['length'] >= x4ypg + e_nk8w || x4ypg ? new java['lang']['String'](l$o7b, x4ypg, e_nk8w) + '' : l$o7b;
}
function _duf65(qdu5v2, rt6f3) {
    qdu5v2['currentElement'] ? qdu5v2['currentElement']['appendChild'](rt6f3) : qdu5v2['doc']['appendChild'](rt6f3);
}
_dwy_['prototype']['parseFromString'] = function (l2$9b, mp4xci) {
    var gnjy = this['options'],
        o7lzm$ = new _dngkyj_(),
        $lozm = gnjy['domBuilder'] || new _d_jnkew(),
        b$9vu2 = gnjy['errorHandler'],
        h_8sw = gnjy['locator'],
        l9z7b$ = gnjy['xmlns'] || {},
        q52v9 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return h_8sw && $lozm['setDocumentLocator'](h_8sw), o7lzm$['errorHandler'] = _dews8a(b$9vu2, $lozm, h_8sw), o7lzm$['domBuilder'] = gnjy['domBuilder'] || $lozm, /\/x?html?$/['test'](mp4xci) && (q52v9['nbsp'] = '\u00a0', q52v9['copy'] = '©', l9z7b$[''] = 'http://www.w3.org/1999/xhtml'), l9z7b$['xml'] = l9z7b$['xml'] || 'http://www.w3.org/XML/1998/namespace', l2$9b ? o7lzm$['parse'](l2$9b, l9z7b$, q52v9) : o7lzm$['errorHandler']['error']('invalid doc source'), $lozm['doc'];
}, _d_jnkew['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _dip4yx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (xomzpc, eshw_8, i4yxjg, kwe_jn) {
        var yni4 = this['doc'],
            gxyi = yni4['createElementNS'](xomzpc, i4yxjg || eshw_8),
            ub92 = kwe_jn['length'];
        _duf65(this, gxyi), this['currentElement'] = gxyi, this['locator'] && _dqr5(this['locator'], gxyi);
        for (var k_hw8 = 0x0; ub92 > k_hw8; k_hw8++) {
            var xomzpc = kwe_jn['getURI'](k_hw8),
                d2vuq = kwe_jn['getValue'](k_hw8),
                i4yxjg = kwe_jn['getQName'](k_hw8),
                mplo = yni4['createAttributeNS'](xomzpc, i4yxjg);
            this['locator'] && _dqr5(kwe_jn['getLocator'](k_hw8), mplo), mplo['value'] = mplo['nodeValue'] = d2vuq, gxyi['setAttributeNode'](mplo);
        }
    },
    'endElement': function () {
        {
            var yji4g = this['currentElement'];
            yji4g['tagName'];
        }
        this['currentElement'] = yji4g['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (b79, _jnyg) {
        var l7$bzo = this['doc']['createProcessingInstruction'](b79, _jnyg);
        this['locator'] && _dqr5(this['locator'], l7$bzo), _duf65(this, l7$bzo);
    },
    'ignorableWhitespace': function () {},
    'characters': function (pcxz) {
        if (pcxz = _dpgxy4i['apply'](this, arguments)) {
            if (this['cdata']) var b7$zo = this['doc']['createCDATASection'](pcxz);else var b7$zo = this['doc']['createTextNode'](pcxz);
            this['currentElement'] ? this['currentElement']['appendChild'](b7$zo) : /^\s*$/['test'](pcxz) && this['doc']['appendChild'](b7$zo), this['locator'] && _dqr5(this['locator'], b7$zo);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (zxpoc) {
        (this['locator'] = zxpoc) && (zxpoc['lineNumber'] = 0x0);
    },
    'comment': function (t6rdf3) {
        t6rdf3 = _dpgxy4i['apply'](this, arguments);
        var zml7 = this['doc']['createComment'](t6rdf3);
        this['locator'] && _dqr5(this['locator'], zml7), _duf65(this, zml7);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (uqd52, wnk_e8, d5qu6) {
        var cz7lmo = this['doc']['implementation'];
        if (cz7lmo && cz7lmo['createDocumentType']) {
            var ej_n = cz7lmo['createDocumentType'](uqd52, wnk_e8, d5qu6);
            this['locator'] && _dqr5(this['locator'], ej_n), _duf65(this, ej_n);
        }
    },
    'warning': function (f61t3) {
        console['warn']('[xmldom warning]\t' + f61t3, _dz$mo7l(this['locator']));
    },
    'error': function (i4pm) {
        console['error']('[xmldom error]\t' + i4pm, _dz$mo7l(this['locator']));
    },
    'fatalError': function (pxm4o) {
        throw console['error']('[xmldom fatalError]\t' + pxm4o, _dz$mo7l(this['locator'])), pxm4o;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vq5fu) {
    _d_jnkew['prototype'][vq5fu] = function () {
        return null;
    };
});
var _dngkyj_ = require('./tT12tt')['XMLReader'],
    _dip4yx = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = _dwy_;