var G = wx.$E;
function Ed5_1i(lhyngp) {
    this['options'] = lhyngp || { 'locator': {} };
}
function Ekd(yu9hp, is1t, _t23s0) {
    function bkmc$4(wvr8a) {
        var _s03 = yu9hp[wvr8a];
        !_s03 && c64k$5 && (_s03 = 0x2 == yu9hp['length'] ? function (ah9uqr) {
            yu9hp(wvr8a, ah9uqr);
        } : yu9hp), kcmb$[wvr8a] = _s03 && function (lopxny) {
            _s03('[xmldom ' + wvr8a + ']\t' + lopxny + Epynhg(_t23s0));
        } || function () {};
    }
    if (!yu9hp) {
        if (is1t instanceof Ejki56d) return is1t;
        yu9hp = is1t;
    }
    var kcmb$ = {},
        c64k$5 = yu9hp instanceof Function;
    return _t23s0 = _t23s0 || {}, bkmc$4('warning'), bkmc$4('error'), bkmc$4('fatalError'), kcmb$;
}
function Ejki56d() {
    this['cdata'] = !0x1;
}
function Eg9pnh(jtdi1, aurqvw) {
    aurqvw['lineNumber'] = jtdi1['lineNumber'], aurqvw['columnNumber'] = jtdi1['columnNumber'];
}
function Epynhg(w8f7vr) {
    return w8f7vr ? '\x0a@' + (w8f7vr['systemId'] || '') + '#[line:' + w8f7vr['lineNumber'] + ',col:' + w8f7vr['columnNumber'] + ']' : void 0x0;
}
function Efb478m(nlyh, v8qfwr, m47bcf) {
    return 'string' == typeof nlyh ? nlyh['substr'](v8qfwr, m47bcf) : nlyh['length'] >= v8qfwr + m47bcf || v8qfwr ? new java['lang']['String'](nlyh, v8qfwr, m47bcf) + '' : nlyh;
}
function Elnpgh(wuqrv, hquar) {
    wuqrv['currentElement'] ? wuqrv['currentElement']['appendChild'](hquar) : wuqrv['doc']['appendChild'](hquar);
}
Ed5_1i['prototype']['parseFromString'] = function (u9arv, lxg) {
    var k46bc$ = this['options'],
        _s30t = new Efr8vq(),
        kjc5$ = k46bc$['domBuilder'] || new Ejki56d(),
        cm4$ = k46bc$['errorHandler'],
        j5k$6c = k46bc$['locator'],
        poyln = k46bc$['xmlns'] || {},
        gynhp = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return j5k$6c && kjc5$['setDocumentLocator'](j5k$6c), _s30t['errorHandler'] = Ekd(cm4$, kjc5$, j5k$6c), _s30t['domBuilder'] = k46bc$['domBuilder'] || kjc5$, /\/x?html?$/['test'](lxg) && (gynhp['nbsp'] = '\u00a0', gynhp['copy'] = '©', poyln[''] = 'http://www.w3.org/1999/xhtml'), poyln['xml'] = poyln['xml'] || 'http://www.w3.org/XML/1998/namespace', u9arv ? _s30t['parse'](u9arv, poyln, gynhp) : _s30t['errorHandler']['error']('invalid doc source'), kjc5$['doc'];
}, Ejki56d['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Eauhrq9()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (h9gqau, xylo, $jd5k6, jitd1) {
        var ck$6b4 = this['doc'],
            $5kj6 = ck$6b4['createElementNS'](h9gqau, $jd5k6 || xylo),
            ru = jitd1['length'];
        Elnpgh(this, $5kj6), this['currentElement'] = $5kj6, this['locator'] && Eg9pnh(this['locator'], $5kj6);
        for (var mfb784 = 0x0; ru > mfb784; mfb784++) {
            var h9gqau = jitd1['getURI'](mfb784),
                lxny = jitd1['getValue'](mfb784),
                $jd5k6 = jitd1['getQName'](mfb784),
                lhgn = ck$6b4['createAttributeNS'](h9gqau, $jd5k6);
            this['locator'] && Eg9pnh(jitd1['getLocator'](mfb784), lhgn), lhgn['value'] = lhgn['nodeValue'] = lxny, $5kj6['setAttributeNode'](lhgn);
        }
    },
    'endElement': function () {
        {
            var z2s03 = this['currentElement'];
            z2s03['tagName'];
        }
        this['currentElement'] = z2s03['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (w8vf, it_dj1) {
        var $4c5k = this['doc']['createProcessingInstruction'](w8vf, it_dj1);
        this['locator'] && Eg9pnh(this['locator'], $4c5k), Elnpgh(this, $4c5k);
    },
    'ignorableWhitespace': function () {},
    'characters': function (py9n) {
        if (py9n = Efb478m['apply'](this, arguments)) {
            if (this['cdata']) var bk64 = this['doc']['createCDATASection'](py9n);else var bk64 = this['doc']['createTextNode'](py9n);
            this['currentElement'] ? this['currentElement']['appendChild'](bk64) : /^\s*$/['test'](py9n) && this['doc']['appendChild'](bk64), this['locator'] && Eg9pnh(this['locator'], bk64);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (i1ts_d) {
        (this['locator'] = i1ts_d) && (i1ts_d['lineNumber'] = 0x0);
    },
    'comment': function (rquvaw) {
        rquvaw = Efb478m['apply'](this, arguments);
        var k654c = this['doc']['createComment'](rquvaw);
        this['locator'] && Eg9pnh(this['locator'], k654c), Elnpgh(this, k654c);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (_jdit1, uvr, t1sd_) {
        var j5id6k = this['doc']['implementation'];
        if (j5id6k && j5id6k['createDocumentType']) {
            var i_5d = j5id6k['createDocumentType'](_jdit1, uvr, t1sd_);
            this['locator'] && Eg9pnh(this['locator'], i_5d), Elnpgh(this, i_5d);
        }
    },
    'warning': function (c4fm7) {
        console['warn']('[xmldom warning]\t' + c4fm7, Epynhg(this['locator']));
    },
    'error': function (b74cm$) {
        console['error']('[xmldom error]\t' + b74cm$, Epynhg(this['locator']));
    },
    'fatalError': function (f8v7w) {
        throw console['error']('[xmldom fatalError]\t' + f8v7w, Epynhg(this['locator'])), f8v7w;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (st123) {
    Ejki56d['prototype'][st123] = function () {
        return null;
    };
});
var Efr8vq = require('./DD88DD88cDD88DD88')['XMLReader'],
    Eauhrq9 = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];
exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Ed5_1i;