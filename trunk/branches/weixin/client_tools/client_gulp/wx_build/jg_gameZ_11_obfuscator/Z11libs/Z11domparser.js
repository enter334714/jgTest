var B = wx.$z;
function zt7b(mqhn0a) {
    this['options'] = mqhn0a || { 'locator': {} };
}
function zfhm0z(oi7rs, s5ib7, nwhzm) {
    function wmz0f9(n_eqa) {
        var mz0nh = oi7rs[n_eqa];
        !mz0nh && biu57y && (mz0nh = 0x2 == oi7rs['length'] ? function (wmdz9f) {
            oi7rs(n_eqa, wmdz9f);
        } : oi7rs), u5b[n_eqa] = mz0nh && function (nz0m) {
            mz0nh('[xmldom ' + n_eqa + ']\t' + nz0m + zre_jga(nwhzm));
        } || function () {};
    }
    if (!oi7rs) {
        if (s5ib7 instanceof zojeg_) return s5ib7;
        oi7rs = s5ib7;
    }
    var u5b = {},
        biu57y = oi7rs instanceof Function;
    return nwhzm = nwhzm || {}, wmz0f9('warning'), wmz0f9('error'), wmz0f9('fatalError'), u5b;
}
function zojeg_() {
    this['cdata'] = !0x1;
}
function ze_jrog(gjeosr, zwf0mh) {
    zwf0mh['lineNumber'] = gjeosr['lineNumber'], zwf0mh['columnNumber'] = gjeosr['columnNumber'];
}
function zre_jga(y$2lt) {
    return y$2lt ? '\x0a@' + (y$2lt['systemId'] || '') + '#[line:' + y$2lt['lineNumber'] + ',col:' + y$2lt['columnNumber'] + ']' : void 0x0;
}
function zzm0hfw(uog, io7ubs, f0zm9) {
    return 'string' == typeof uog ? uog['substr'](io7ubs, f0zm9) : uog['length'] >= io7ubs + f0zm9 || io7ubs ? new java['lang']['String'](uog, io7ubs, f0zm9) + '' : uog;
}
function zvl$y(neg_a, ly2vt) {
    neg_a['currentElement'] ? neg_a['currentElement']['appendChild'](ly2vt) : neg_a['doc']['appendChild'](ly2vt);
}
zt7b['prototype']['parseFromString'] = function (xk84, rsiu7o) {
    var iujsr = this['options'],
        _gejro = new zeah_(),
        eojrs = iujsr['domBuilder'] || new zojeg_(),
        s7uroi = iujsr['errorHandler'],
        d1x38 = iujsr['locator'],
        y2$5tb = iujsr['xmlns'] || {},
        w0qnhm = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return d1x38 && eojrs['setDocumentLocator'](d1x38), _gejro['errorHandler'] = zfhm0z(s7uroi, eojrs, d1x38), _gejro['domBuilder'] = iujsr['domBuilder'] || eojrs, /\/x?html?$/['test'](rsiu7o) && (w0qnhm['nbsp'] = '\u00a0', w0qnhm['copy'] = '©', y2$5tb[''] = 'http://www.w3.org/1999/xhtml'), y2$5tb['xml'] = y2$5tb['xml'] || 'http://www.w3.org/XML/1998/namespace', xk84 ? _gejro['parse'](xk84, y2$5tb, w0qnhm) : _gejro['errorHandler']['error']('invalid doc source'), eojrs['doc'];
}, zojeg_['prototype'] = {
    'startDocument': function () {
        this['doc'] = new zirsuo7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (i7ubso, f39wzd, zwfh0, iojsu) {
        var hzw = this['doc'],
            p318 = hzw['createElementNS'](i7ubso, zwfh0 || f39wzd),
            busi = iojsu['length'];
        zvl$y(this, p318), this['currentElement'] = p318, this['locator'] && ze_jrog(this['locator'], p318);
        for (var osje = 0x0; busi > osje; osje++) {
            var i7ubso = iojsu['getURI'](osje),
                qna_h = iojsu['getValue'](osje),
                zwfh0 = iojsu['getQName'](osje),
                s7iub5 = hzw['createAttributeNS'](i7ubso, zwfh0);
            this['locator'] && ze_jrog(iojsu['getLocator'](osje), s7iub5), s7iub5['value'] = s7iub5['nodeValue'] = qna_h, p318['setAttributeNode'](s7iub5);
        }
    },
    'endElement': function () {
        {
            var n_qae = this['currentElement'];
            n_qae['tagName'];
        }
        this['currentElement'] = n_qae['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (egqan_, so7ib) {
        var z90wf = this['doc']['createProcessingInstruction'](egqan_, so7ib);
        this['locator'] && ze_jrog(this['locator'], z90wf), zvl$y(this, z90wf);
    },
    'ignorableWhitespace': function () {},
    'characters': function (isbu5) {
        if (isbu5 = zzm0hfw['apply'](this, arguments)) {
            if (this['cdata']) var d9mwz = this['doc']['createCDATASection'](isbu5);else var d9mwz = this['doc']['createTextNode'](isbu5);
            this['currentElement'] ? this['currentElement']['appendChild'](d9mwz) : /^\s*$/['test'](isbu5) && this['doc']['appendChild'](d9mwz), this['locator'] && ze_jrog(this['locator'], d9mwz);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (ngeq) {
        (this['locator'] = ngeq) && (ngeq['lineNumber'] = 0x0);
    },
    'comment': function (naqeh) {
        naqeh = zzm0hfw['apply'](this, arguments);
        var ib7sou = this['doc']['createComment'](naqeh);
        this['locator'] && ze_jrog(this['locator'], ib7sou), zvl$y(this, ib7sou);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function ($y2bt5, wdm, _gne) {
        var a_rge = this['doc']['implementation'];
        if (a_rge && a_rge['createDocumentType']) {
            var ha0m = a_rge['createDocumentType']($y2bt5, wdm, _gne);
            this['locator'] && ze_jrog(this['locator'], ha0m), zvl$y(this, ha0m);
        }
    },
    'warning': function (nqa_0) {
        console['warn']('[xmldom warning]\t' + nqa_0, zre_jga(this['locator']));
    },
    'error': function (wf0mz) {
        console['error']('[xmldom error]\t' + wf0mz, zre_jga(this['locator']));
    },
    'fatalError': function (u57b) {
        throw console['error']('[xmldom fatalError]\t' + u57b, zre_jga(this['locator'])), u57b;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sub) {
    zojeg_['prototype'][sub] = function () {
        return null;
    };
});
var zeah_ = require('./Z11sax')['XMLReader'],
    zirsuo7 = exports['DOMImplementation'] = require('./Z11dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./Z11dom')['XMLSerializer'], exports['DOMParser'] = zt7b;