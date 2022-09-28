var J = wx.h$;
function gyqb5(z2hpe_) {
    this['options'] = z2hpe_ || { 'locator': {} };
}
function gz2_pw(j5yrv, _p2w9f, yq5rb) {
    function inxj(cthzp) {
        var nx71i = j5yrv[cthzp];
        !nx71i && pw_2e && (nx71i = 0x2 == j5yrv['length'] ? function (ixjv7r) {
            j5yrv(cthzp, ixjv7r);
        } : j5yrv), la4u3m[cthzp] = nx71i && function (n7i1) {
            nx71i('[xmldom ' + cthzp + ']\t' + n7i1 + gbkqo(yq5rb));
        } || function () {};
    }
    if (!j5yrv) {
        if (_p2w9f instanceof gij7nx) return _p2w9f;
        j5yrv = _p2w9f;
    }
    var la4u3m = {},
        pw_2e = j5yrv instanceof Function;
    return yq5rb = yq5rb || {}, inxj('warning'), inxj('error'), inxj('fatalError'), la4u3m;
}
function gij7nx() {
    this['cdata'] = !0x1;
}
function gkbq5g(z2, pz2e_) {
    pz2e_['lineNumber'] = z2['lineNumber'], pz2e_['columnNumber'] = z2['columnNumber'];
}
function gbkqo(n3a4u1) {
    return n3a4u1 ? '\x0a@' + (n3a4u1['systemId'] || '') + '#[line:' + n3a4u1['lineNumber'] + ',col:' + n3a4u1['columnNumber'] + ']' : void 0x0;
}
function g_2f9w(a134nu, dgb06k, kq0gb5) {
    return 'string' == typeof a134nu ? a134nu['substr'](dgb06k, kq0gb5) : a134nu['length'] >= dgb06k + kq0gb5 || dgb06k ? new java['lang']['String'](a134nu, dgb06k, kq0gb5) + '' : a134nu;
}
function g_2he(rjx7yv, i4xn1) {
    rjx7yv['currentElement'] ? rjx7yv['currentElement']['appendChild'](i4xn1) : rjx7yv['doc']['appendChild'](i4xn1);
}
gyqb5['prototype']['parseFromString'] = function (_hzpet, qb5or) {
    var ryjv5o = this['options'],
        hpect = new gkbq0g5(),
        gk6d = ryjv5o['domBuilder'] || new gij7nx(),
        d0gbk6 = ryjv5o['errorHandler'],
        c6th = ryjv5o['locator'],
        $w92f_ = ryjv5o['xmlns'] || {},
        u4al = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return c6th && gk6d['setDocumentLocator'](c6th), hpect['errorHandler'] = gz2_pw(d0gbk6, gk6d, c6th), hpect['domBuilder'] = ryjv5o['domBuilder'] || gk6d, /\/x?html?$/['test'](qb5or) && (u4al['nbsp'] = '\u00a0', u4al['copy'] = '©', $w92f_[''] = 'http://www.w3.org/1999/xhtml'), $w92f_['xml'] = $w92f_['xml'] || 'http://www.w3.org/XML/1998/namespace', _hzpet ? hpect['parse'](_hzpet, $w92f_, u4al) : hpect['errorHandler']['error']('invalid doc source'), gk6d['doc'];
}, gij7nx['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gyq5rvo()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ua43lm, l4mu3, gk0q, jin7xv) {
        var u1a34 = this['doc'],
            d06g8k = u1a34['createElementNS'](ua43lm, gk0q || l4mu3),
            ezhc8 = jin7xv['length'];
        g_2he(this, d06g8k), this['currentElement'] = d06g8k, this['locator'] && gkbq5g(this['locator'], d06g8k);
        for (var yxj = 0x0; ezhc8 > yxj; yxj++) {
            var ua43lm = jin7xv['getURI'](yxj),
                k5bq0 = jin7xv['getValue'](yxj),
                gk0q = jin7xv['getQName'](yxj),
                ua3m4 = u1a34['createAttributeNS'](ua43lm, gk0q);
            this['locator'] && gkbq5g(jin7xv['getLocator'](yxj), ua3m4), ua3m4['value'] = ua3m4['nodeValue'] = k5bq0, d06g8k['setAttributeNode'](ua3m4);
        }
    },
    'endElement': function () {
        {
            var e9w_p = this['currentElement'];
            e9w_p['tagName'];
        }
        this['currentElement'] = e9w_p['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ht6cd, q5b0o) {
        var zpeh_t = this['doc']['createProcessingInstruction'](ht6cd, q5b0o);
        this['locator'] && gkbq5g(this['locator'], zpeh_t), g_2he(this, zpeh_t);
    },
    'ignorableWhitespace': function () {},
    'characters': function (qrbyo5) {
        if (qrbyo5 = g_2f9w['apply'](this, arguments)) {
            if (this['cdata']) var $29s = this['doc']['createCDATASection'](qrbyo5);else var $29s = this['doc']['createTextNode'](qrbyo5);
            this['currentElement'] ? this['currentElement']['appendChild']($29s) : /^\s*$/['test'](qrbyo5) && this['doc']['appendChild']($29s), this['locator'] && gkbq5g(this['locator'], $29s);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (in71x) {
        (this['locator'] = in71x) && (in71x['lineNumber'] = 0x0);
    },
    'comment': function (z2phe) {
        z2phe = g_2f9w['apply'](this, arguments);
        var cgkd68 = this['doc']['createComment'](z2phe);
        this['locator'] && gkbq5g(this['locator'], cgkd68), g_2he(this, cgkd68);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function ($s2, hct8z6, ji7rv) {
        var tz_he = this['doc']['implementation'];
        if (tz_he && tz_he['createDocumentType']) {
            var gtd8 = tz_he['createDocumentType']($s2, hct8z6, ji7rv);
            this['locator'] && gkbq5g(this['locator'], gtd8), g_2he(this, gtd8);
        }
    },
    'warning': function (oqr5yv) {
        console['warn']('[xmldom warning]\t' + oqr5yv, gbkqo(this['locator']));
    },
    'error': function (w2$sf) {
        console['error']('[xmldom error]\t' + w2$sf, gbkqo(this['locator']));
    },
    'fatalError': function (rv7xi) {
        throw console['error']('[xmldom fatalError]\t' + rv7xi, gbkqo(this['locator'])), rv7xi;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_9$wf2) {
    gij7nx['prototype'][_9$wf2] = function () {
        return null;
    };
});
var gkbq0g5 = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gyq5rvo = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gyqb5;