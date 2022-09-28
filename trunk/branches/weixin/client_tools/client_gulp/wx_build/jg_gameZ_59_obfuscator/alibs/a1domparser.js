var c = wx.$a;
function gegw4_(gw2eu1) {
    this['options'] = gw2eu1 || { 'locator': {} };
}
function gri53(wu1g2f, w1eg2, vkhn6z) {
    function guw_e2(g_4weu) {
        var uweg4_ = wu1g2f[g_4weu];
        !uweg4_ && c$mbyl && (uweg4_ = 0x2 == wu1g2f['length'] ? function (w4_euo) {
            wu1g2f(g_4weu, w4_euo);
        } : wu1g2f), o$y0cb[g_4weu] = uweg4_ && function (njxf) {
            uweg4_('[xmldom ' + g_4weu + ']\t' + njxf + gdqtk6(vkhn6z));
        } || function () {};
    }
    if (!wu1g2f) {
        if (w1eg2 instanceof grt86) return w1eg2;
        wu1g2f = w1eg2;
    }
    var o$y0cb = {},
        c$mbyl = wu1g2f instanceof Function;
    return vkhn6z = vkhn6z || {}, guw_e2('warning'), guw_e2('error'), guw_e2('fatalError'), o$y0cb;
}
function grt86() {
    this['cdata'] = !0x1;
}
function gr73ip(w40e, yo_04c) {
    yo_04c['lineNumber'] = w40e['lineNumber'], yo_04c['columnNumber'] = w40e['columnNumber'];
}
function gdqtk6(kz6d8q) {
    return kz6d8q ? '\x0a@' + (kz6d8q['systemId'] || '') + '#[line:' + kz6d8q['lineNumber'] + ',col:' + kz6d8q['columnNumber'] + ']' : void 0x0;
}
function gknvz(z6vhnk, fjvs, h6zknv) {
    return 'string' == typeof z6vhnk ? z6vhnk['substr'](fjvs, h6zknv) : z6vhnk['length'] >= fjvs + h6zknv || fjvs ? new java['lang']['String'](z6vhnk, fjvs, h6zknv) + '' : z6vhnk;
}
function ggxsf21(qtr758, weg2u) {
    qtr758['currentElement'] ? qtr758['currentElement']['appendChild'](weg2u) : qtr758['doc']['appendChild'](weg2u);
}
gegw4_['prototype']['parseFromString'] = function (w2eu_, kqtd8) {
    var cml$y = this['options'],
        w4_o = new gyc0$(),
        we1g2u = cml$y['domBuilder'] || new grt86(),
        eo0_4y = cml$y['errorHandler'],
        b4oy0c = cml$y['locator'],
        x2fj1s = cml$y['xmlns'] || {},
        w40o_e = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return b4oy0c && we1g2u['setDocumentLocator'](b4oy0c), w4_o['errorHandler'] = gri53(eo0_4y, we1g2u, b4oy0c), w4_o['domBuilder'] = cml$y['domBuilder'] || we1g2u, /\/x?html?$/['test'](kqtd8) && (w40o_e['nbsp'] = '\u00a0', w40o_e['copy'] = '©', x2fj1s[''] = 'http://www.w3.org/1999/xhtml'), x2fj1s['xml'] = x2fj1s['xml'] || 'http://www.w3.org/XML/1998/namespace', w2eu_ ? w4_o['parse'](w2eu_, x2fj1s, w40o_e) : w4_o['errorHandler']['error']('invalid doc source'), we1g2u['doc'];
}, grt86['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gmlab()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (cby$o0, d68kzq, zkd8q, sg1x) {
        var vnjk = this['doc'],
            _wuge2 = vnjk['createElementNS'](cby$o0, zkd8q || d68kzq),
            n6vhzk = sg1x['length'];
        ggxsf21(this, _wuge2), this['currentElement'] = _wuge2, this['locator'] && gr73ip(this['locator'], _wuge2);
        for (var $ac = 0x0; n6vhzk > $ac; $ac++) {
            var cby$o0 = sg1x['getURI']($ac),
                uw1f = sg1x['getValue']($ac),
                zkd8q = sg1x['getQName']($ac),
                _oeu4w = vnjk['createAttributeNS'](cby$o0, zkd8q);
            this['locator'] && gr73ip(sg1x['getLocator']($ac), _oeu4w), _oeu4w['value'] = _oeu4w['nodeValue'] = uw1f, _wuge2['setAttributeNode'](_oeu4w);
        }
    },
    'endElement': function () {
        {
            var dz6v = this['currentElement'];
            dz6v['tagName'];
        }
        this['currentElement'] = dz6v['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (cyo0$b, sxnfv) {
        var r3t87 = this['doc']['createProcessingInstruction'](cyo0$b, sxnfv);
        this['locator'] && gr73ip(this['locator'], r3t87), ggxsf21(this, r3t87);
    },
    'ignorableWhitespace': function () {},
    'characters': function (h6vd) {
        if (h6vd = gknvz['apply'](this, arguments)) {
            if (this['cdata']) var ylb0$ = this['doc']['createCDATASection'](h6vd);else var ylb0$ = this['doc']['createTextNode'](h6vd);
            this['currentElement'] ? this['currentElement']['appendChild'](ylb0$) : /^\s*$/['test'](h6vd) && this['doc']['appendChild'](ylb0$), this['locator'] && gr73ip(this['locator'], ylb0$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hzjnsv) {
        (this['locator'] = hzjnsv) && (hzjnsv['lineNumber'] = 0x0);
    },
    'comment': function (a$lb) {
        a$lb = gknvz['apply'](this, arguments);
        var v6dkz = this['doc']['createComment'](a$lb);
        this['locator'] && gr73ip(this['locator'], v6dkz), ggxsf21(this, v6dkz);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (snf1, we_ou, hkvnz6) {
        var $mybcl = this['doc']['implementation'];
        if ($mybcl && $mybcl['createDocumentType']) {
            var ybc0o = $mybcl['createDocumentType'](snf1, we_ou, hkvnz6);
            this['locator'] && gr73ip(this['locator'], ybc0o), ggxsf21(this, ybc0o);
        }
    },
    'warning': function (o0e) {
        console['warn']('[xmldom warning]\t' + o0e, gdqtk6(this['locator']));
    },
    'error': function (cylb$) {
        console['error']('[xmldom error]\t' + cylb$, gdqtk6(this['locator']));
    },
    'fatalError': function (jfxn) {
        throw console['error']('[xmldom fatalError]\t' + jfxn, gdqtk6(this['locator'])), jfxn;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_ug4e) {
    grt86['prototype'][_ug4e] = function () {
        return null;
    };
});
var gyc0$ = require('./a1sax')['XMLReader'],
    gmlab = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gegw4_;