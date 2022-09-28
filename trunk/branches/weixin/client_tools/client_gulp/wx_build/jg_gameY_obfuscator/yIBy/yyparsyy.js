var a = wx.$y;
function yzrxvy0(hfj) {
    this['options'] = hfj || { 'locator': {} };
}
function yhjdw(m6va53, csn29, nsk9) {
    function _sc(cs8l7) {
        var sck89l = m6va53[cs8l7];
        !sck89l && pgqin$ && (sck89l = 0x2 == m6va53['length'] ? function (png$qi) {
            m6va53(cs8l7, png$qi);
        } : m6va53), s7c98l[cs8l7] = sck89l && function (mda15) {
            sck89l('[xmldom ' + cs8l7 + ']\t' + mda15 + yh4_of(nsk9));
        } || function () {};
    }
    if (!m6va53) {
        if (csn29 instanceof yk8l9cs) return csn29;
        m6va53 = csn29;
    }
    var s7c98l = {},
        pgqin$ = m6va53 instanceof Function;
    return nsk9 = nsk9 || {}, _sc('warning'), _sc('error'), _sc('fatalError'), s7c98l;
}
function yk8l9cs() {
    this['cdata'] = !0x1;
}
function yt1dmw(ud15mt, ls78c) {
    ls78c['lineNumber'] = ud15mt['lineNumber'], ls78c['columnNumber'] = ud15mt['columnNumber'];
}
function yh4_of(hwfjo4) {
    return hwfjo4 ? '\x0a@' + (hwfjo4['systemId'] || '') + '#[line:' + hwfjo4['lineNumber'] + ',col:' + hwfjo4['columnNumber'] + ']' : void 0x0;
}
function yh_o4(s9c8kl, rv0zx, s92lc) {
    return 'string' == typeof s9c8kl ? s9c8kl['substr'](rv0zx, s92lc) : s9c8kl['length'] >= rv0zx + s92lc || rv0zx ? new java['lang']['String'](s9c8kl, rv0zx, s92lc) + '' : s9c8kl;
}
function yry03z(ojw4, _7sc8) {
    ojw4['currentElement'] ? ojw4['currentElement']['appendChild'](_7sc8) : ojw4['doc']['appendChild'](_7sc8);
}
yzrxvy0['prototype']['parseFromString'] = function (t4hjo, z0yvr3) {
    var j_87fo = this['options'],
        $gnpq = new yyx0rz(),
        o4jwf = j_87fo['domBuilder'] || new yk8l9cs(),
        $ipgnq = j_87fo['errorHandler'],
        rzvx = j_87fo['locator'],
        d1h4t = j_87fo['xmlns'] || {},
        sckn92 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return rzvx && o4jwf['setDocumentLocator'](rzvx), $gnpq['errorHandler'] = yhjdw($ipgnq, o4jwf, rzvx), $gnpq['domBuilder'] = j_87fo['domBuilder'] || o4jwf, /\/x?html?$/['test'](z0yvr3) && (sckn92['nbsp'] = '\u00a0', sckn92['copy'] = '©', d1h4t[''] = 'http://www.w3.org/1999/xhtml'), d1h4t['xml'] = d1h4t['xml'] || 'http://www.w3.org/XML/1998/namespace', t4hjo ? $gnpq['parse'](t4hjo, d1h4t, sckn92) : $gnpq['errorHandler']['error']('invalid doc source'), o4jwf['doc'];
}, yk8l9cs['prototype'] = {
    'startDocument': function () {
        this['doc'] = new yksn9()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ngqi$, csl78_, qin2g, gi$nq) {
        var rvyz0 = this['doc'],
            jo_hf7 = rvyz0['createElementNS'](ngqi$, qin2g || csl78_),
            tw4 = gi$nq['length'];
        yry03z(this, jo_hf7), this['currentElement'] = jo_hf7, this['locator'] && yt1dmw(this['locator'], jo_hf7);
        for (var v6ya0 = 0x0; tw4 > v6ya0; v6ya0++) {
            var ngqi$ = gi$nq['getURI'](v6ya0),
                f7_jho = gi$nq['getValue'](v6ya0),
                qin2g = gi$nq['getQName'](v6ya0),
                in2k = rvyz0['createAttributeNS'](ngqi$, qin2g);
            this['locator'] && yt1dmw(gi$nq['getLocator'](v6ya0), in2k), in2k['value'] = in2k['nodeValue'] = f7_jho, jo_hf7['setAttributeNode'](in2k);
        }
    },
    'endElement': function () {
        {
            var d5a1um = this['currentElement'];
            d5a1um['tagName'];
        }
        this['currentElement'] = d5a1um['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ud4wt, t5dmu1) {
        var l9c87 = this['doc']['createProcessingInstruction'](ud4wt, t5dmu1);
        this['locator'] && yt1dmw(this['locator'], l9c87), yry03z(this, l9c87);
    },
    'ignorableWhitespace': function () {},
    'characters': function (s8_7l) {
        if (s8_7l = yh_o4['apply'](this, arguments)) {
            if (this['cdata']) var _l = this['doc']['createCDATASection'](s8_7l);else var _l = this['doc']['createTextNode'](s8_7l);
            this['currentElement'] ? this['currentElement']['appendChild'](_l) : /^\s*$/['test'](s8_7l) && this['doc']['appendChild'](_l), this['locator'] && yt1dmw(this['locator'], _l);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (cs97) {
        (this['locator'] = cs97) && (cs97['lineNumber'] = 0x0);
    },
    'comment': function (j8fo7_) {
        j8fo7_ = yh_o4['apply'](this, arguments);
        var sk92lc = this['doc']['createComment'](j8fo7_);
        this['locator'] && yt1dmw(this['locator'], sk92lc), yry03z(this, sk92lc);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (yv60r, _f78s, l78cs9) {
        var dthw4j = this['doc']['implementation'];
        if (dthw4j && dthw4j['createDocumentType']) {
            var jf_o7 = dthw4j['createDocumentType'](yv60r, _f78s, l78cs9);
            this['locator'] && yt1dmw(this['locator'], jf_o7), yry03z(this, jf_o7);
        }
    },
    'warning': function (ad5m1) {
        console['warn']('[xmldom warning]\t' + ad5m1, yh4_of(this['locator']));
    },
    'error': function (c92$kn) {
        console['error']('[xmldom error]\t' + c92$kn, yh4_of(this['locator']));
    },
    'fatalError': function (s8_lc7) {
        throw console['error']('[xmldom fatalError]\t' + s8_lc7, yh4_of(this['locator'])), s8_lc7;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sfl8) {
    yk8l9cs['prototype'][sfl8] = function () {
        return null;
    };
});
var yyx0rz = require('./yycyy')['XMLReader'],
    yksn9 = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];
exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yzrxvy0;