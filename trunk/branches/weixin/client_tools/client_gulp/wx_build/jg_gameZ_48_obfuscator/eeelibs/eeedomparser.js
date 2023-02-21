var _ = wx.y$;
function _dt0o(_e8qiv) {
    this['options'] = _e8qiv || { 'locator': {} };
}
function _dm5tf$(fphom7, vkij_, d9asbz) {
    function b9szad(ds9bz) {
        var c2pu7 = fphom7[ds9bz];
        !c2pu7 && uphm7 && (c2pu7 = 0x2 == fphom7['length'] ? function (wenlg1) {
            fphom7(ds9bz, wenlg1);
        } : fphom7), da3zr[ds9bz] = c2pu7 && function (yucj2) {
            c2pu7('[xmldom ' + ds9bz + ']\t' + yucj2 + _dyucjk2(d9asbz));
        } || function () {};
    }
    if (!fphom7) {
        if (vkij_ instanceof _dju2kc) return vkij_;
        fphom7 = vkij_;
    }
    var da3zr = {},
        uphm7 = fphom7 instanceof Function;
    return d9asbz = d9asbz || {}, b9szad('warning'), b9szad('error'), b9szad('fatalError'), da3zr;
}
function _dju2kc() {
    this['cdata'] = !0x1;
}
function _dfhot(c7upmh, ijq8v) {
    ijq8v['lineNumber'] = c7upmh['lineNumber'], ijq8v['columnNumber'] = c7upmh['columnNumber'];
}
function _dyucjk2(p7cmu) {
    return p7cmu ? '\x0a@' + (p7cmu['systemId'] || '') + '#[line:' + p7cmu['lineNumber'] + ',col:' + p7cmu['columnNumber'] + ']' : void 0x0;
}
function _dy2ukp(z9r3x6, k2j, jcky2q) {
    return 'string' == typeof z9r3x6 ? z9r3x6['substr'](k2j, jcky2q) : z9r3x6['length'] >= k2j + jcky2q || k2j ? new java['lang']['String'](z9r3x6, k2j, jcky2q) + '' : z9r3x6;
}
function _db9drz(jki_qv, fo5m$) {
    jki_qv['currentElement'] ? jki_qv['currentElement']['appendChild'](fo5m$) : jki_qv['doc']['appendChild'](fo5m$);
}
_dt0o['prototype']['parseFromString'] = function (z0, bzrd) {
    var ohfm = this['options'],
        h7omtf = new _dfm7ohp(),
        d45s0 = ohfm['domBuilder'] || new _dju2kc(),
        y2kpc = ohfm['errorHandler'],
        ad9sz = ohfm['locator'],
        kj_yq2 = ohfm['xmlns'] || {},
        humf = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ad9sz && d45s0['setDocumentLocator'](ad9sz), h7omtf['errorHandler'] = _dm5tf$(y2kpc, d45s0, ad9sz), h7omtf['domBuilder'] = ohfm['domBuilder'] || d45s0, /\/x?html?$/['test'](bzrd) && (humf['nbsp'] = '\u00a0', humf['copy'] = '©', kj_yq2[''] = 'http://www.w3.org/1999/xhtml'), kj_yq2['xml'] = kj_yq2['xml'] || 'http://www.w3.org/XML/1998/namespace', z0 ? h7omtf['parse'](z0, kj_yq2, humf) : h7omtf['errorHandler']['error']('invalid doc source'), d45s0['doc'];
}, _dju2kc['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _d_2qjkv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (homtf$, th$mo, sb0d4, sd40ab) {
        var up2kcy = this['doc'],
            ie1g8v = up2kcy['createElementNS'](homtf$, sb0d4 || th$mo),
            s450t$ = sd40ab['length'];
        _db9drz(this, ie1g8v), this['currentElement'] = ie1g8v, this['locator'] && _dfhot(this['locator'], ie1g8v);
        for (var pofm7 = 0x0; s450t$ > pofm7; pofm7++) {
            var homtf$ = sd40ab['getURI'](pofm7),
                mo$tfh = sd40ab['getValue'](pofm7),
                sb0d4 = sd40ab['getQName'](pofm7),
                v8j = up2kcy['createAttributeNS'](homtf$, sb0d4);
            this['locator'] && _dfhot(sd40ab['getLocator'](pofm7), v8j), v8j['value'] = v8j['nodeValue'] = mo$tfh, ie1g8v['setAttributeNode'](v8j);
        }
    },
    'endElement': function () {
        {
            var c7yhpu = this['currentElement'];
            c7yhpu['tagName'];
        }
        this['currentElement'] = c7yhpu['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ju2k, w1ln) {
        var sbaz9 = this['doc']['createProcessingInstruction'](ju2k, w1ln);
        this['locator'] && _dfhot(this['locator'], sbaz9), _db9drz(this, sbaz9);
    },
    'ignorableWhitespace': function () {},
    'characters': function (n8ge1i) {
        if (n8ge1i = _dy2ukp['apply'](this, arguments)) {
            if (this['cdata']) var yjku2 = this['doc']['createCDATASection'](n8ge1i);else var yjku2 = this['doc']['createTextNode'](n8ge1i);
            this['currentElement'] ? this['currentElement']['appendChild'](yjku2) : /^\s*$/['test'](n8ge1i) && this['doc']['appendChild'](yjku2), this['locator'] && _dfhot(this['locator'], yjku2);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (sd40b) {
        (this['locator'] = sd40b) && (sd40b['lineNumber'] = 0x0);
    },
    'comment': function (i81n) {
        i81n = _dy2ukp['apply'](this, arguments);
        var zx639 = this['doc']['createComment'](i81n);
        this['locator'] && _dfhot(this['locator'], zx639), _db9drz(this, zx639);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (zsb9d, j8ivq_, q_8vei) {
        var absz0d = this['doc']['implementation'];
        if (absz0d && absz0d['createDocumentType']) {
            var _q2jvk = absz0d['createDocumentType'](zsb9d, j8ivq_, q_8vei);
            this['locator'] && _dfhot(this['locator'], _q2jvk), _db9drz(this, _q2jvk);
        }
    },
    'warning': function (j_i8q) {
        console['warn']('[xmldom warning]\t' + j_i8q, _dyucjk2(this['locator']));
    },
    'error': function (phcmu) {
        console['error']('[xmldom error]\t' + phcmu, _dyucjk2(this['locator']));
    },
    'fatalError': function (hf7op) {
        throw console['error']('[xmldom fatalError]\t' + hf7op, _dyucjk2(this['locator'])), hf7op;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (igne18) {
    _dju2kc['prototype'][igne18] = function () {
        return null;
    };
});
var _dfm7ohp = require('./eeesax')['XMLReader'],
    _d_2qjkv = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = _dt0o;