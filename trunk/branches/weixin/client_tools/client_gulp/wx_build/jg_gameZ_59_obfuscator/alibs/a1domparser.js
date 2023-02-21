var c = wx.$a;
function gt86rq(w2u_) {
    this['options'] = w2u_ || { 'locator': {} };
}
function gg2e(mcbl, y0o4_e, ge12) {
    function o4ewu_(sxf2j1) {
        var rq8td6 = mcbl[sxf2j1];
        !rq8td6 && k6q8zd && (rq8td6 = 0x2 == mcbl['length'] ? function (nvjhzk) {
            mcbl(sxf2j1, nvjhzk);
        } : mcbl), zhqk6d[sxf2j1] = rq8td6 && function (dzk6vh) {
            rq8td6('[xmldom ' + sxf2j1 + ']\t' + dzk6vh + gq578(ge12));
        } || function () {};
    }
    if (!mcbl) {
        if (y0o4_e instanceof gow_40) return y0o4_e;
        mcbl = y0o4_e;
    }
    var zhqk6d = {},
        k6q8zd = mcbl instanceof Function;
    return ge12 = ge12 || {}, o4ewu_('warning'), o4ewu_('error'), o4ewu_('fatalError'), zhqk6d;
}
function gow_40() {
    this['cdata'] = !0x1;
}
function gbyc04(nkhzv, njvsf) {
    njvsf['lineNumber'] = nkhzv['lineNumber'], njvsf['columnNumber'] = nkhzv['columnNumber'];
}
function gq578(l9bma$) {
    return l9bma$ ? '\x0a@' + (l9bma$['systemId'] || '') + '#[line:' + l9bma$['lineNumber'] + ',col:' + l9bma$['columnNumber'] + ']' : void 0x0;
}
function gouew(nv6zhk, f2xs1g, kn6hz) {
    return 'string' == typeof nv6zhk ? nv6zhk['substr'](f2xs1g, kn6hz) : nv6zhk['length'] >= f2xs1g + kn6hz || f2xs1g ? new java['lang']['String'](nv6zhk, f2xs1g, kn6hz) + '' : nv6zhk;
}
function gc4oy_(d5, qk6dzh) {
    d5['currentElement'] ? d5['currentElement']['appendChild'](qk6dzh) : d5['doc']['appendChild'](qk6dzh);
}
gt86rq['prototype']['parseFromString'] = function (fsjn1, y04_oe) {
    var _0oc4y = this['options'],
        xfsg2 = new go0cy$b(),
        o$y0cb = _0oc4y['domBuilder'] || new gow_40(),
        w1u2g = _0oc4y['errorHandler'],
        jfsxvn = _0oc4y['locator'],
        $l9abm = _0oc4y['xmlns'] || {},
        u2fwg1 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return jfsxvn && o$y0cb['setDocumentLocator'](jfsxvn), xfsg2['errorHandler'] = gg2e(w1u2g, o$y0cb, jfsxvn), xfsg2['domBuilder'] = _0oc4y['domBuilder'] || o$y0cb, /\/x?html?$/['test'](y04_oe) && (u2fwg1['nbsp'] = '\u00a0', u2fwg1['copy'] = '©', $l9abm[''] = 'http://www.w3.org/1999/xhtml'), $l9abm['xml'] = $l9abm['xml'] || 'http://www.w3.org/XML/1998/namespace', fsjn1 ? xfsg2['parse'](fsjn1, $l9abm, u2fwg1) : xfsg2['errorHandler']['error']('invalid doc source'), o$y0cb['doc'];
}, gow_40['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gg1f2uw()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (oeu4_, p3ri, hzv6kn, zvkhn6) {
        var fxsvn = this['doc'],
            $mal = fxsvn['createElementNS'](oeu4_, hzv6kn || p3ri),
            oe4uw_ = zvkhn6['length'];
        gc4oy_(this, $mal), this['currentElement'] = $mal, this['locator'] && gbyc04(this['locator'], $mal);
        for (var zdvh = 0x0; oe4uw_ > zdvh; zdvh++) {
            var oeu4_ = zvkhn6['getURI'](zdvh),
                f1gs2x = zvkhn6['getValue'](zdvh),
                hzv6kn = zvkhn6['getQName'](zdvh),
                c$blam = fxsvn['createAttributeNS'](oeu4_, hzv6kn);
            this['locator'] && gbyc04(zvkhn6['getLocator'](zdvh), c$blam), c$blam['value'] = c$blam['nodeValue'] = f1gs2x, $mal['setAttributeNode'](c$blam);
        }
    },
    'endElement': function () {
        {
            var qtrd85 = this['currentElement'];
            qtrd85['tagName'];
        }
        this['currentElement'] = qtrd85['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (_ouwe, b9$alm) {
        var camb = this['doc']['createProcessingInstruction'](_ouwe, b9$alm);
        this['locator'] && gbyc04(this['locator'], camb), gc4oy_(this, camb);
    },
    'ignorableWhitespace': function () {},
    'characters': function (fxj1) {
        if (fxj1 = gouew['apply'](this, arguments)) {
            if (this['cdata']) var $ly0bc = this['doc']['createCDATASection'](fxj1);else var $ly0bc = this['doc']['createTextNode'](fxj1);
            this['currentElement'] ? this['currentElement']['appendChild']($ly0bc) : /^\s*$/['test'](fxj1) && this['doc']['appendChild']($ly0bc), this['locator'] && gbyc04(this['locator'], $ly0bc);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (nhvxs) {
        (this['locator'] = nhvxs) && (nhvxs['lineNumber'] = 0x0);
    },
    'comment': function (o_c4y0) {
        o_c4y0 = gouew['apply'](this, arguments);
        var oyc04 = this['doc']['createComment'](o_c4y0);
        this['locator'] && gbyc04(this['locator'], oyc04), gc4oy_(this, oyc04);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (xhjsnv, b04, x1fjsn) {
        var $mab9l = this['doc']['implementation'];
        if ($mab9l && $mab9l['createDocumentType']) {
            var oy$b0 = $mab9l['createDocumentType'](xhjsnv, b04, x1fjsn);
            this['locator'] && gbyc04(this['locator'], oy$b0), gc4oy_(this, oy$b0);
        }
    },
    'warning': function (fs2x1g) {
        console['warn']('[xmldom warning]\t' + fs2x1g, gq578(this['locator']));
    },
    'error': function (blcm$) {
        console['error']('[xmldom error]\t' + blcm$, gq578(this['locator']));
    },
    'fatalError': function (woe_4u) {
        throw console['error']('[xmldom fatalError]\t' + woe_4u, gq578(this['locator'])), woe_4u;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cymbl$) {
    gow_40['prototype'][cymbl$] = function () {
        return null;
    };
});
var go0cy$b = require('./a1sax')['XMLReader'],
    gg1f2uw = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gt86rq;