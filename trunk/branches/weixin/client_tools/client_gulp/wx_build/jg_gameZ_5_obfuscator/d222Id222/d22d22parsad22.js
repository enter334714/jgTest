var F = wx.$D;
function Df9b74(moalg) {
    this['options'] = moalg || { 'locator': {} };
}
function Dyh$18n(ja5g6, tcs0e3, ubf7p9) {
    function veq(m_log) {
        var h128rn = ja5g6[m_log];
        !h128rn && p3fbu9 && (h128rn = 0x2 == ja5g6['length'] ? function (_l5io) {
            ja5g6(m_log, _l5io);
        } : ja5g6), h8$y1[m_log] = h128rn && function (agxkj) {
            h128rn('[xmldom ' + m_log + ']\t' + agxkj + Dg6x5aj(ubf7p9));
        } || function () {};
    }
    if (!ja5g6) {
        if (tcs0e3 instanceof Domla5) return tcs0e3;
        ja5g6 = tcs0e3;
    }
    var h8$y1 = {},
        p3fbu9 = ja5g6 instanceof Function;
    return ubf7p9 = ubf7p9 || {}, veq('warning'), veq('error'), veq('fatalError'), h8$y1;
}
function Domla5() {
    this['cdata'] = !0x1;
}
function Dt0esvq(_o5lm, zo_lr) {
    zo_lr['lineNumber'] = _o5lm['lineNumber'], zo_lr['columnNumber'] = _o5lm['columnNumber'];
}
function Dg6x5aj(l_imz) {
    return l_imz ? '\x0a@' + (l_imz['systemId'] || '') + '#[line:' + l_imz['lineNumber'] + ',col:' + l_imz['columnNumber'] + ']' : void 0x0;
}
function Dwkax6j(u0c3es, n$h128, gml5oa) {
    return 'string' == typeof u0c3es ? u0c3es['substr'](n$h128, gml5oa) : u0c3es['length'] >= n$h128 + gml5oa || n$h128 ? new java['lang']['String'](u0c3es, n$h128, gml5oa) + '' : u0c3es;
}
function Dbpf74(r182, omg5_) {
    r182['currentElement'] ? r182['currentElement']['appendChild'](omg5_) : r182['doc']['appendChild'](omg5_);
}
Df9b74['prototype']['parseFromString'] = function (_il2z, su3e0) {
    var x6akg = this['options'],
        v0tec = new Dgkja6x(),
        hr21zi = x6akg['domBuilder'] || new Domla5(),
        f7b9u = x6akg['errorHandler'],
        il5o = x6akg['locator'],
        st3e = x6akg['xmlns'] || {},
        jxaw6k = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return il5o && hr21zi['setDocumentLocator'](il5o), v0tec['errorHandler'] = Dyh$18n(f7b9u, hr21zi, il5o), v0tec['domBuilder'] = x6akg['domBuilder'] || hr21zi, /\/x?html?$/['test'](su3e0) && (jxaw6k['nbsp'] = '\u00a0', jxaw6k['copy'] = '©', st3e[''] = 'http://www.w3.org/1999/xhtml'), st3e['xml'] = st3e['xml'] || 'http://www.w3.org/XML/1998/namespace', _il2z ? v0tec['parse'](_il2z, st3e, jxaw6k) : v0tec['errorHandler']['error']('invalid doc source'), hr21zi['doc'];
}, Domla5['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Dfp9b4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (kv6wq, il_oz, qtskvw, cue0s3) {
        var ol_zim = this['doc'],
            gjx6a = ol_zim['createElementNS'](kv6wq, qtskvw || il_oz),
            $8h2 = cue0s3['length'];
        Dbpf74(this, gjx6a), this['currentElement'] = gjx6a, this['locator'] && Dt0esvq(this['locator'], gjx6a);
        for (var tsv = 0x0; $8h2 > tsv; tsv++) {
            var kv6wq = cue0s3['getURI'](tsv),
                $8hyn1 = cue0s3['getValue'](tsv),
                qtskvw = cue0s3['getQName'](tsv),
                qkwv6t = ol_zim['createAttributeNS'](kv6wq, qtskvw);
            this['locator'] && Dt0esvq(cue0s3['getLocator'](tsv), qkwv6t), qkwv6t['value'] = qkwv6t['nodeValue'] = $8hyn1, gjx6a['setAttributeNode'](qkwv6t);
        }
    },
    'endElement': function () {
        {
            var hr2_z = this['currentElement'];
            hr2_z['tagName'];
        }
        this['currentElement'] = hr2_z['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (omja5, ts0ec3) {
        var u0c3e = this['doc']['createProcessingInstruction'](omja5, ts0ec3);
        this['locator'] && Dt0esvq(this['locator'], u0c3e), Dbpf74(this, u0c3e);
    },
    'ignorableWhitespace': function () {},
    'characters': function (u3pf9b) {
        if (u3pf9b = Dwkax6j['apply'](this, arguments)) {
            if (this['cdata']) var w6vqt = this['doc']['createCDATASection'](u3pf9b);else var w6vqt = this['doc']['createTextNode'](u3pf9b);
            this['currentElement'] ? this['currentElement']['appendChild'](w6vqt) : /^\s*$/['test'](u3pf9b) && this['doc']['appendChild'](w6vqt), this['locator'] && Dt0esvq(this['locator'], w6vqt);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (ir_lzo) {
        (this['locator'] = ir_lzo) && (ir_lzo['lineNumber'] = 0x0);
    },
    'comment': function (qst0) {
        qst0 = Dwkax6j['apply'](this, arguments);
        var kjq = this['doc']['createComment'](qst0);
        this['locator'] && Dt0esvq(this['locator'], kjq), Dbpf74(this, kjq);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (r_i2l, cstv0, i_zr) {
        var m5_lio = this['doc']['implementation'];
        if (m5_lio && m5_lio['createDocumentType']) {
            var h82 = m5_lio['createDocumentType'](r_i2l, cstv0, i_zr);
            this['locator'] && Dt0esvq(this['locator'], h82), Dbpf74(this, h82);
        }
    },
    'warning': function (fup7b9) {
        console['warn']('[xmldom warning]\t' + fup7b9, Dg6x5aj(this['locator']));
    },
    'error': function (w6kvxq) {
        console['error']('[xmldom error]\t' + w6kvxq, Dg6x5aj(this['locator']));
    },
    'fatalError': function (cte0v) {
        throw console['error']('[xmldom fatalError]\t' + cte0v, Dg6x5aj(this['locator'])), cte0v;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i21r) {
    Domla5['prototype'][i21r] = function () {
        return null;
    };
});
var Dgkja6x = require('./d22d22cd22d22')['XMLReader'],
    Dfp9b4 = exports['DOMImplementation'] = require('./d22d22DOd22d22')['DOMImplementation'];
exports['XMLSerializer'] = require('./d22d22DOd22d22')['XMLSerializer'], exports['DOMParser'] = Df9b74;