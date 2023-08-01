var s1 = wx.l$;
function _xflpu7z(exgy) {
    this['options'] = exgy || { 'locator': {} };
}
function _xvwt9j$(z7pum, uomr, q_aomr) {
    function b0(p7slf) {
        var ex6yig = z7pum[p7slf];
        !ex6yig && lu7f && (ex6yig = 0x2 == z7pum['length'] ? function ($0tb) {
            z7pum(p7slf, $0tb);
        } : z7pum), bw0$v[p7slf] = ex6yig && function (a_roqm) {
            ex6yig('[xmldom ' + p7slf + ']\t' + a_roqm + _xzm7ou(q_aomr));
        } || function () {};
    }
    if (!z7pum) {
        if (uomr instanceof _xoqu7a) return uomr;
        z7pum = uomr;
    }
    var bw0$v = {},
        lu7f = z7pum instanceof Function;
    return q_aomr = q_aomr || {}, b0('warning'), b0('error'), b0('fatalError'), bw0$v;
}
function _xoqu7a() {
    this['cdata'] = !0x1;
}
function _xig4y2h(wb$t0, $8t0db) {
    $8t0db['lineNumber'] = wb$t0['lineNumber'], $8t0db['columnNumber'] = wb$t0['columnNumber'];
}
function _xzm7ou(pm7oz) {
    return pm7oz ? '\x0a@' + (pm7oz['systemId'] || '') + '#[line:' + pm7oz['lineNumber'] + ',col:' + pm7oz['columnNumber'] + ']' : void 0x0;
}
function _xse5y6x(lpz7um, vjckn9, b$vwt) {
    return 'string' == typeof lpz7um ? lpz7um['substr'](vjckn9, b$vwt) : lpz7um['length'] >= vjckn9 + b$vwt || vjckn9 ? new java['lang']['String'](lpz7um, vjckn9, b$vwt) + '' : lpz7um;
}
function _xt9$jvw(azum7, zpflu) {
    azum7['currentElement'] ? azum7['currentElement']['appendChild'](zpflu) : azum7['doc']['appendChild'](zpflu);
}
_xflpu7z['prototype']['parseFromString'] = function (uaoz7m, yegix6) {
    var rknq = this['options'],
        oqcr_a = new _xgey6x(),
        l7pu = rknq['domBuilder'] || new _xoqu7a(),
        wj9vkn = rknq['errorHandler'],
        t$0jw = rknq['locator'],
        n9_rck = rknq['xmlns'] || {},
        r9k_c = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return t$0jw && l7pu['setDocumentLocator'](t$0jw), oqcr_a['errorHandler'] = _xvwt9j$(wj9vkn, l7pu, t$0jw), oqcr_a['domBuilder'] = rknq['domBuilder'] || l7pu, /\/x?html?$/['test'](yegix6) && (r9k_c['nbsp'] = '\u00a0', r9k_c['copy'] = '©', n9_rck[''] = 'http://www.w3.org/1999/xhtml'), n9_rck['xml'] = n9_rck['xml'] || 'http://www.w3.org/XML/1998/namespace', uaoz7m ? oqcr_a['parse'](uaoz7m, n9_rck, r9k_c) : oqcr_a['errorHandler']['error']('invalid doc source'), l7pu['doc'];
}, _xoqu7a['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _xnj9vk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (j9nc_k, t$0d, z5fs, $b0dwt) {
        var yxi4 = this['doc'],
            wjt9$v = yxi4['createElementNS'](j9nc_k, z5fs || t$0d),
            b0w$ = $b0dwt['length'];
        _xt9$jvw(this, wjt9$v), this['currentElement'] = wjt9$v, this['locator'] && _xig4y2h(this['locator'], wjt9$v);
        for (var t0wbd$ = 0x0; b0w$ > t0wbd$; t0wbd$++) {
            var j9nc_k = $b0dwt['getURI'](t0wbd$),
                ka_rq = $b0dwt['getValue'](t0wbd$),
                z5fs = $b0dwt['getQName'](t0wbd$),
                nvj9c = yxi4['createAttributeNS'](j9nc_k, z5fs);
            this['locator'] && _xig4y2h($b0dwt['getLocator'](t0wbd$), nvj9c), nvj9c['value'] = nvj9c['nodeValue'] = ka_rq, wjt9$v['setAttributeNode'](nvj9c);
        }
    },
    'endElement': function () {
        {
            var nq_rk = this['currentElement'];
            nq_rk['tagName'];
        }
        this['currentElement'] = nq_rk['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (gh4132, $tw9jv) {
        var craq_ = this['doc']['createProcessingInstruction'](gh4132, $tw9jv);
        this['locator'] && _xig4y2h(this['locator'], craq_), _xt9$jvw(this, craq_);
    },
    'ignorableWhitespace': function () {},
    'characters': function (l7pzf) {
        if (l7pzf = _xse5y6x['apply'](this, arguments)) {
            if (this['cdata']) var w9tj$ = this['doc']['createCDATASection'](l7pzf);else var w9tj$ = this['doc']['createTextNode'](l7pzf);
            this['currentElement'] ? this['currentElement']['appendChild'](w9tj$) : /^\s*$/['test'](l7pzf) && this['doc']['appendChild'](w9tj$), this['locator'] && _xig4y2h(this['locator'], w9tj$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (zflsp7) {
        (this['locator'] = zflsp7) && (zflsp7['lineNumber'] = 0x0);
    },
    'comment': function (pmz7lu) {
        pmz7lu = _xse5y6x['apply'](this, arguments);
        var $jwv0t = this['doc']['createComment'](pmz7lu);
        this['locator'] && _xig4y2h(this['locator'], $jwv0t), _xt9$jvw(this, $jwv0t);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (db$0t, q_kac, y2gi4x) {
        var q7oam = this['doc']['implementation'];
        if (q7oam && q7oam['createDocumentType']) {
            var zmao7 = q7oam['createDocumentType'](db$0t, q_kac, y2gi4x);
            this['locator'] && _xig4y2h(this['locator'], zmao7), _xt9$jvw(this, zmao7);
        }
    },
    'warning': function (pzf) {
        console['warn']('[xmldom warning]\t' + pzf, _xzm7ou(this['locator']));
    },
    'error': function (ps65) {
        console['error']('[xmldom error]\t' + ps65, _xzm7ou(this['locator']));
    },
    'fatalError': function (zmpuo7) {
        throw console['error']('[xmldom fatalError]\t' + zmpuo7, _xzm7ou(this['locator'])), zmpuo7;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (b$8d0) {
    _xoqu7a['prototype'][b$8d0] = function () {
        return null;
    };
});
var _xgey6x = require('./e05a')['XMLReader'],
    _xnj9vk = exports['DOMImplementation'] = require('./a7pm')['DOMImplementation'];
exports['XMLSerializer'] = require('./a7pm')['XMLSerializer'], exports['DOMParser'] = _xflpu7z;