var _ = wx.y$;
function _dkyp0h(zuhxd) {
    this['options'] = zuhxd || { 'locator': {} };
}
function _dzu_h0(c2tbsl, vjnim, t8l1c) {
    function lcg2s(_ax9d) {
        var ew34ok = c2tbsl[_ax9d];
        !ew34ok && yh7k0 && (ew34ok = 0x2 == c2tbsl['length'] ? function (nqja) {
            c2tbsl(_ax9d, nqja);
        } : c2tbsl), f6gr2[_ax9d] = ew34ok && function (ltcb) {
            ew34ok('[xmldom ' + _ax9d + ']\t' + ltcb + _dstcb(t8l1c));
        } || function () {};
    }
    if (!c2tbsl) {
        if (vjnim instanceof _ds2bct) return vjnim;
        c2tbsl = vjnim;
    }
    var f6gr2 = {},
        yh7k0 = c2tbsl instanceof Function;
    return t8l1c = t8l1c || {}, lcg2s('warning'), lcg2s('error'), lcg2s('fatalError'), f6gr2;
}
function _ds2bct() {
    this['cdata'] = !0x1;
}
function _dtb81v(e4ko3, maijq9) {
    maijq9['lineNumber'] = e4ko3['lineNumber'], maijq9['columnNumber'] = e4ko3['columnNumber'];
}
function _dstcb(blcs) {
    return blcs ? '\x0a@' + (blcs['systemId'] || '') + '#[line:' + blcs['lineNumber'] + ',col:' + blcs['columnNumber'] + ']' : void 0x0;
}
function _dnv18ti(lsct2b, pyeokw, cbstl8) {
    return 'string' == typeof lsct2b ? lsct2b['substr'](pyeokw, cbstl8) : lsct2b['length'] >= pyeokw + cbstl8 || pyeokw ? new java['lang']['String'](lsct2b, pyeokw, cbstl8) + '' : lsct2b;
}
function _duz7h0_(z7pyh, g5rf26) {
    z7pyh['currentElement'] ? z7pyh['currentElement']['appendChild'](g5rf26) : z7pyh['doc']['appendChild'](g5rf26);
}
_dkyp0h['prototype']['parseFromString'] = function (lscb2t, g2r6) {
    var g26cls = this['options'],
        u_z$dx = new _d_a$d9x(),
        ct1lb = g26cls['domBuilder'] || new _ds2bct(),
        gb2 = g26cls['errorHandler'],
        r6fg = g26cls['locator'],
        v1tni = g26cls['xmlns'] || {},
        z70h_u = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return r6fg && ct1lb['setDocumentLocator'](r6fg), u_z$dx['errorHandler'] = _dzu_h0(gb2, ct1lb, r6fg), u_z$dx['domBuilder'] = g26cls['domBuilder'] || ct1lb, /\/x?html?$/['test'](g2r6) && (z70h_u['nbsp'] = '\u00a0', z70h_u['copy'] = '©', v1tni[''] = 'http://www.w3.org/1999/xhtml'), v1tni['xml'] = v1tni['xml'] || 'http://www.w3.org/XML/1998/namespace', lscb2t ? u_z$dx['parse'](lscb2t, v1tni, z70h_u) : u_z$dx['errorHandler']['error']('invalid doc source'), ct1lb['doc'];
}, _ds2bct['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _diq1jvn()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (jxm9, slb2g, _07, ji1vnq) {
        var zh_ud = this['doc'],
            zxd_u$ = zh_ud['createElementNS'](jxm9, _07 || slb2g),
            ts8cl = ji1vnq['length'];
        _duz7h0_(this, zxd_u$), this['currentElement'] = zxd_u$, this['locator'] && _dtb81v(this['locator'], zxd_u$);
        for (var ypkeo7 = 0x0; ts8cl > ypkeo7; ypkeo7++) {
            var jxm9 = ji1vnq['getURI'](ypkeo7),
                st8lb = ji1vnq['getValue'](ypkeo7),
                _07 = ji1vnq['getQName'](ypkeo7),
                kow4y = zh_ud['createAttributeNS'](jxm9, _07);
            this['locator'] && _dtb81v(ji1vnq['getLocator'](ypkeo7), kow4y), kow4y['value'] = kow4y['nodeValue'] = st8lb, zxd_u$['setAttributeNode'](kow4y);
        }
    },
    'endElement': function () {
        {
            var $a9xdm = this['currentElement'];
            $a9xdm['tagName'];
        }
        this['currentElement'] = $a9xdm['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (zx_hud, jmqain) {
        var v8t1 = this['doc']['createProcessingInstruction'](zx_hud, jmqain);
        this['locator'] && _dtb81v(this['locator'], v8t1), _duz7h0_(this, v8t1);
    },
    'ignorableWhitespace': function () {},
    'characters': function (jm9iaq) {
        if (jm9iaq = _dnv18ti['apply'](this, arguments)) {
            if (this['cdata']) var x9_da$ = this['doc']['createCDATASection'](jm9iaq);else var x9_da$ = this['doc']['createTextNode'](jm9iaq);
            this['currentElement'] ? this['currentElement']['appendChild'](x9_da$) : /^\s*$/['test'](jm9iaq) && this['doc']['appendChild'](x9_da$), this['locator'] && _dtb81v(this['locator'], x9_da$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (gl6) {
        (this['locator'] = gl6) && (gl6['lineNumber'] = 0x0);
    },
    'comment': function (x$du9) {
        x$du9 = _dnv18ti['apply'](this, arguments);
        var ywk4e = this['doc']['createComment'](x$du9);
        this['locator'] && _dtb81v(this['locator'], ywk4e), _duz7h0_(this, ywk4e);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (l8bc, uh7, wpoeyk) {
        var $a9m = this['doc']['implementation'];
        if ($a9m && $a9m['createDocumentType']) {
            var d_u0zh = $a9m['createDocumentType'](l8bc, uh7, wpoeyk);
            this['locator'] && _dtb81v(this['locator'], d_u0zh), _duz7h0_(this, d_u0zh);
        }
    },
    'warning': function (hzp0u7) {
        console['warn']('[xmldom warning]\t' + hzp0u7, _dstcb(this['locator']));
    },
    'error': function (amnjiq) {
        console['error']('[xmldom error]\t' + amnjiq, _dstcb(this['locator']));
    },
    'fatalError': function (oyek4w) {
        throw console['error']('[xmldom fatalError]\t' + oyek4w, _dstcb(this['locator'])), oyek4w;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ud_h) {
    _ds2bct['prototype'][ud_h] = function () {
        return null;
    };
});
var _d_a$d9x = require('./bbbsax')['XMLReader'],
    _diq1jvn = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dkyp0h;