var q1 = wx.f$;
function _xxprfho(lz_43t) {
    this['options'] = lz_43t || { 'locator': {} };
}
function _xho$xr(mtzl34, prfhq, m3wzt) {
    function b61km(vga2ji) {
        var fxhrpo = mtzl34[vga2ji];
        !fxhrpo && g9ij2 && (fxhrpo = 0x2 == mtzl34['length'] ? function (t_z4l) {
            mtzl34(vga2ji, t_z4l);
        } : mtzl34), u2javi[vga2ji] = fxhrpo && function (q6bk) {
            fxhrpo('[xmldom ' + vga2ji + ']\t' + q6bk + _xc$7ho(m3wzt));
        } || function () {};
    }
    if (!mtzl34) {
        if (prfhq instanceof _xc7ons) return prfhq;
        mtzl34 = prfhq;
    }
    var u2javi = {},
        g9ij2 = mtzl34 instanceof Function;
    return m3wzt = m3wzt || {}, b61km('warning'), b61km('error'), b61km('fatalError'), u2javi;
}
function _xc7ons() {
    this['cdata'] = !0x1;
}
function _xtkm6b(n78ds, l4_tz) {
    l4_tz['lineNumber'] = n78ds['lineNumber'], l4_tz['columnNumber'] = n78ds['columnNumber'];
}
function _xc$7ho(_4a2) {
    return _4a2 ? '\x0a@' + (_4a2['systemId'] || '') + '#[line:' + _4a2['lineNumber'] + ',col:' + _4a2['columnNumber'] + ']' : void 0x0;
}
function _xeiyv9(qk105, c$o7h, mbztl) {
    return 'string' == typeof qk105 ? qk105['substr'](c$o7h, mbztl) : qk105['length'] >= c$o7h + mbztl || c$o7h ? new java['lang']['String'](qk105, c$o7h, mbztl) + '' : qk105;
}
function _xc$hof(qfrph5, lz43mt) {
    qfrph5['currentElement'] ? qfrph5['currentElement']['appendChild'](lz43mt) : qfrph5['doc']['appendChild'](lz43mt);
}
_xxprfho['prototype']['parseFromString'] = function (t4_z3l, cnso$) {
    var zl3mt = this['options'],
        d7nc$s = new _xlu3z_4(),
        scnd87 = zl3mt['domBuilder'] || new _xc7ons(),
        j9gev = zl3mt['errorHandler'],
        ofhr = zl3mt['locator'],
        o$fxrh = zl3mt['xmlns'] || {},
        rhpfq = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ofhr && scnd87['setDocumentLocator'](ofhr), d7nc$s['errorHandler'] = _xho$xr(j9gev, scnd87, ofhr), d7nc$s['domBuilder'] = zl3mt['domBuilder'] || scnd87, /\/x?html?$/['test'](cnso$) && (rhpfq['nbsp'] = '\u00a0', rhpfq['copy'] = '©', o$fxrh[''] = 'http://www.w3.org/1999/xhtml'), o$fxrh['xml'] = o$fxrh['xml'] || 'http://www.w3.org/XML/1998/namespace', t4_z3l ? d7nc$s['parse'](t4_z3l, o$fxrh, rhpfq) : d7nc$s['errorHandler']['error']('invalid doc source'), scnd87['doc'];
}, _xc7ons['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _xhor$f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (mzt4l, $nox7, lw6mb, k16q5) {
        var vg9e = this['doc'],
            c$xof = vg9e['createElementNS'](mzt4l, lw6mb || $nox7),
            wb0 = k16q5['length'];
        _xc$hof(this, c$xof), this['currentElement'] = c$xof, this['locator'] && _xtkm6b(this['locator'], c$xof);
        for (var b6mwt = 0x0; wb0 > b6mwt; b6mwt++) {
            var mzt4l = k16q5['getURI'](b6mwt),
                xfcoh$ = k16q5['getValue'](b6mwt),
                lw6mb = k16q5['getQName'](b6mwt),
                a4u3_ = vg9e['createAttributeNS'](mzt4l, lw6mb);
            this['locator'] && _xtkm6b(k16q5['getLocator'](b6mwt), a4u3_), a4u3_['value'] = a4u3_['nodeValue'] = xfcoh$, c$xof['setAttributeNode'](a4u3_);
        }
    },
    'endElement': function () {
        {
            var eyvig9 = this['currentElement'];
            eyvig9['tagName'];
        }
        this['currentElement'] = eyvig9['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (d7c8n, hxfr) {
        var eg9vij = this['doc']['createProcessingInstruction'](d7c8n, hxfr);
        this['locator'] && _xtkm6b(this['locator'], eg9vij), _xc$hof(this, eg9vij);
    },
    'ignorableWhitespace': function () {},
    'characters': function (prohxf) {
        if (prohxf = _xeiyv9['apply'](this, arguments)) {
            if (this['cdata']) var $d7cs = this['doc']['createCDATASection'](prohxf);else var $d7cs = this['doc']['createTextNode'](prohxf);
            this['currentElement'] ? this['currentElement']['appendChild']($d7cs) : /^\s*$/['test'](prohxf) && this['doc']['appendChild']($d7cs), this['locator'] && _xtkm6b(this['locator'], $d7cs);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (ohr$fx) {
        (this['locator'] = ohr$fx) && (ohr$fx['lineNumber'] = 0x0);
    },
    'comment': function (n$s) {
        n$s = _xeiyv9['apply'](this, arguments);
        var cxo7$n = this['doc']['createComment'](n$s);
        this['locator'] && _xtkm6b(this['locator'], cxo7$n), _xc$hof(this, cxo7$n);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (cf$ohx, bm6kwt, uija_) {
        var blwm = this['doc']['implementation'];
        if (blwm && blwm['createDocumentType']) {
            var eygv9 = blwm['createDocumentType'](cf$ohx, bm6kwt, uija_);
            this['locator'] && _xtkm6b(this['locator'], eygv9), _xc$hof(this, eygv9);
        }
    },
    'warning': function (lt4z_3) {
        console['warn']('[xmldom warning]\t' + lt4z_3, _xc$7ho(this['locator']));
    },
    'error': function ($nc7ox) {
        console['error']('[xmldom error]\t' + $nc7ox, _xc$7ho(this['locator']));
    },
    'fatalError': function (b610q) {
        throw console['error']('[xmldom fatalError]\t' + b610q, _xc$7ho(this['locator'])), b610q;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w3tlm) {
    _xc7ons['prototype'][w3tlm] = function () {
        return null;
    };
});
var _xlu3z_4 = require('./ribv')['XMLReader'],
    _xhor$f = exports['DOMImplementation'] = require('./a5i')['DOMImplementation'];
exports['XMLSerializer'] = require('./a5i')['XMLSerializer'], exports['DOMParser'] = _xxprfho;