var B = wx.$z;
function zd3f9w(kpx84) {
    this['options'] = kpx84 || { 'locator': {} };
}
function zk1p84(hw0nz, gsuj, x1pk84) {
    function gsejr(qn_h0) {
        var nq_ah = hw0nz[qn_h0];
        !nq_ah && p1x368 && (nq_ah = 0x2 == hw0nz['length'] ? function (qn_eah) {
            hw0nz(qn_h0, qn_eah);
        } : hw0nz), lvt$[qn_h0] = nq_ah && function (d6x8) {
            nq_ah('[xmldom ' + qn_h0 + ']\t' + d6x8 + ziy5b(x1pk84));
        } || function () {};
    }
    if (!hw0nz) {
        if (gsuj instanceof zbuy5i) return gsuj;
        hw0nz = gsuj;
    }
    var lvt$ = {},
        p1x368 = hw0nz instanceof Function;
    return x1pk84 = x1pk84 || {}, gsejr('warning'), gsejr('error'), gsejr('fatalError'), lvt$;
}
function zbuy5i() {
    this['cdata'] = !0x1;
}
function zu7o(r7usoi, ehq_n) {
    ehq_n['lineNumber'] = r7usoi['lineNumber'], ehq_n['columnNumber'] = r7usoi['columnNumber'];
}
function ziy5b(eg_oj) {
    return eg_oj ? '\x0a@' + (eg_oj['systemId'] || '') + '#[line:' + eg_oj['lineNumber'] + ',col:' + eg_oj['columnNumber'] + ']' : void 0x0;
}
function zng_ea(ijsrou, byiu7, ui7osr) {
    return 'string' == typeof ijsrou ? ijsrou['substr'](byiu7, ui7osr) : ijsrou['length'] >= byiu7 + ui7osr || byiu7 ? new java['lang']['String'](ijsrou, byiu7, ui7osr) + '' : ijsrou;
}
function zanmh0q(s7b5i, dw93f) {
    s7b5i['currentElement'] ? s7b5i['currentElement']['appendChild'](dw93f) : s7b5i['doc']['appendChild'](dw93f);
}
zd3f9w['prototype']['parseFromString'] = function (d86319, $ylt2v) {
    var mwz0hn = this['options'],
        n0mh = new zagrje_(),
        nw0hq = mwz0hn['domBuilder'] || new zbuy5i(),
        yi52b7 = mwz0hn['errorHandler'],
        by7i = mwz0hn['locator'],
        _0qha = mwz0hn['xmlns'] || {},
        l2tv = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return by7i && nw0hq['setDocumentLocator'](by7i), n0mh['errorHandler'] = zk1p84(yi52b7, nw0hq, by7i), n0mh['domBuilder'] = mwz0hn['domBuilder'] || nw0hq, /\/x?html?$/['test']($ylt2v) && (l2tv['nbsp'] = '\u00a0', l2tv['copy'] = '©', _0qha[''] = 'http://www.w3.org/1999/xhtml'), _0qha['xml'] = _0qha['xml'] || 'http://www.w3.org/XML/1998/namespace', d86319 ? n0mh['parse'](d86319, _0qha, l2tv) : n0mh['errorHandler']['error']('invalid doc source'), nw0hq['doc'];
}, zbuy5i['prototype'] = {
    'startDocument': function () {
        this['doc'] = new zjq_g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (siojr, qw0mn, mn0qha, yvl2t$) {
        var zmwd9 = this['doc'],
            ea_g = zmwd9['createElementNS'](siojr, mn0qha || qw0mn),
            tby57 = yvl2t$['length'];
        zanmh0q(this, ea_g), this['currentElement'] = ea_g, this['locator'] && zu7o(this['locator'], ea_g);
        for (var nhwq0 = 0x0; tby57 > nhwq0; nhwq0++) {
            var siojr = yvl2t$['getURI'](nhwq0),
                b$52t = yvl2t$['getValue'](nhwq0),
                mn0qha = yvl2t$['getQName'](nhwq0),
                ubi75s = zmwd9['createAttributeNS'](siojr, mn0qha);
            this['locator'] && zu7o(yvl2t$['getLocator'](nhwq0), ubi75s), ubi75s['value'] = ubi75s['nodeValue'] = b$52t, ea_g['setAttributeNode'](ubi75s);
        }
    },
    'endElement': function () {
        {
            var y2t5 = this['currentElement'];
            y2t5['tagName'];
        }
        this['currentElement'] = y2t5['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (y25bt$, tb52$y) {
        var $yv2lt = this['doc']['createProcessingInstruction'](y25bt$, tb52$y);
        this['locator'] && zu7o(this['locator'], $yv2lt), zanmh0q(this, $yv2lt);
    },
    'ignorableWhitespace': function () {},
    'characters': function (sgore) {
        if (sgore = zng_ea['apply'](this, arguments)) {
            if (this['cdata']) var f0zmhw = this['doc']['createCDATASection'](sgore);else var f0zmhw = this['doc']['createTextNode'](sgore);
            this['currentElement'] ? this['currentElement']['appendChild'](f0zmhw) : /^\s*$/['test'](sgore) && this['doc']['appendChild'](f0zmhw), this['locator'] && zu7o(this['locator'], f0zmhw);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (qa_n0) {
        (this['locator'] = qa_n0) && (qa_n0['lineNumber'] = 0x0);
    },
    'comment': function (o_ej) {
        o_ej = zng_ea['apply'](this, arguments);
        var rgeo_ = this['doc']['createComment'](o_ej);
        this['locator'] && zu7o(this['locator'], rgeo_), zanmh0q(this, rgeo_);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (jea_gq, dzwm9, an_gqe) {
        var j_rage = this['doc']['implementation'];
        if (j_rage && j_rage['createDocumentType']) {
            var yt$lv = j_rage['createDocumentType'](jea_gq, dzwm9, an_gqe);
            this['locator'] && zu7o(this['locator'], yt$lv), zanmh0q(this, yt$lv);
        }
    },
    'warning': function (zhwfm) {
        console['warn']('[xmldom warning]\t' + zhwfm, ziy5b(this['locator']));
    },
    'error': function (jogrs) {
        console['error']('[xmldom error]\t' + jogrs, ziy5b(this['locator']));
    },
    'fatalError': function (hw0zf) {
        throw console['error']('[xmldom fatalError]\t' + hw0zf, ziy5b(this['locator'])), hw0zf;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oib7u) {
    zbuy5i['prototype'][oib7u] = function () {
        return null;
    };
});
var zagrje_ = require('./Z11sax')['XMLReader'],
    zjq_g = exports['DOMImplementation'] = require('./Z11dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./Z11dom')['XMLSerializer'], exports['DOMParser'] = zd3f9w;