var _ = wx.y$;
function _dar96(arzd93) {
    this['options'] = arzd93 || { 'locator': {} };
}
function _dc2qjk(dba40, kyjq2_, kjqv_2) {
    function lg1nw(tf4$o) {
        var fo$5mt = dba40[tf4$o];
        !fo$5mt && ts05$4 && (fo$5mt = 0x2 == dba40['length'] ? function (dzar39) {
            dba40(tf4$o, dzar39);
        } : dba40), o$04t5[tf4$o] = fo$5mt && function (mot5f$) {
            fo$5mt('[xmldom ' + tf4$o + ']\t' + mot5f$ + _djkqv_i(kjqv_2));
        } || function () {};
    }
    if (!dba40) {
        if (kyjq2_ instanceof _dsdab40) return kyjq2_;
        dba40 = kyjq2_;
    }
    var o$04t5 = {},
        ts05$4 = dba40 instanceof Function;
    return kjqv_2 = kjqv_2 || {}, lg1nw('warning'), lg1nw('error'), lg1nw('fatalError'), o$04t5;
}
function _dsdab40() {
    this['cdata'] = !0x1;
}
function _dmtf$ho(b4s05$, giv8) {
    giv8['lineNumber'] = b4s05$['lineNumber'], giv8['columnNumber'] = b4s05$['columnNumber'];
}
function _djkqv_i(fpum7h) {
    return fpum7h ? '\x0a@' + (fpum7h['systemId'] || '') + '#[line:' + fpum7h['lineNumber'] + ',col:' + fpum7h['columnNumber'] + ']' : void 0x0;
}
function _d$5ot40(e1i8_v, d9z3a, t$4o) {
    return 'string' == typeof e1i8_v ? e1i8_v['substr'](d9z3a, t$4o) : e1i8_v['length'] >= d9z3a + t$4o || d9z3a ? new java['lang']['String'](e1i8_v, d9z3a, t$4o) + '' : e1i8_v;
}
function _dqvji8(x9z, v_ie81) {
    x9z['currentElement'] ? x9z['currentElement']['appendChild'](v_ie81) : x9z['doc']['appendChild'](v_ie81);
}
_dar96['prototype']['parseFromString'] = function (weg1nl, dsa4b0) {
    var $54fo = this['options'],
        pkycu2 = new _dt$504o(),
        _q2kyj = $54fo['domBuilder'] || new _dsdab40(),
        puh7cm = $54fo['errorHandler'],
        v1e8g = $54fo['locator'],
        um7 = $54fo['xmlns'] || {},
        uh7yp = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return v1e8g && _q2kyj['setDocumentLocator'](v1e8g), pkycu2['errorHandler'] = _dc2qjk(puh7cm, _q2kyj, v1e8g), pkycu2['domBuilder'] = $54fo['domBuilder'] || _q2kyj, /\/x?html?$/['test'](dsa4b0) && (uh7yp['nbsp'] = '\u00a0', uh7yp['copy'] = '©', um7[''] = 'http://www.w3.org/1999/xhtml'), um7['xml'] = um7['xml'] || 'http://www.w3.org/XML/1998/namespace', weg1nl ? pkycu2['parse'](weg1nl, um7, uh7yp) : pkycu2['errorHandler']['error']('invalid doc source'), _q2kyj['doc'];
}, _dsdab40['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _db9azdr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (phmof7, azs9b, zsb9, r6z93x) {
        var kij_vq = this['doc'],
            jvk2_q = kij_vq['createElementNS'](phmof7, zsb9 || azs9b),
            a9rdz = r6z93x['length'];
        _dqvji8(this, jvk2_q), this['currentElement'] = jvk2_q, this['locator'] && _dmtf$ho(this['locator'], jvk2_q);
        for (var c7muph = 0x0; a9rdz > c7muph; c7muph++) {
            var phmof7 = r6z93x['getURI'](c7muph),
                y7u2c = r6z93x['getValue'](c7muph),
                zsb9 = r6z93x['getQName'](c7muph),
                tf$5om = kij_vq['createAttributeNS'](phmof7, zsb9);
            this['locator'] && _dmtf$ho(r6z93x['getLocator'](c7muph), tf$5om), tf$5om['value'] = tf$5om['nodeValue'] = y7u2c, jvk2_q['setAttributeNode'](tf$5om);
        }
    },
    'endElement': function () {
        {
            var yu2kjc = this['currentElement'];
            yu2kjc['tagName'];
        }
        this['currentElement'] = yu2kjc['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (q_ei8, l8e1ng) {
        var mt$hfo = this['doc']['createProcessingInstruction'](q_ei8, l8e1ng);
        this['locator'] && _dmtf$ho(this['locator'], mt$hfo), _dqvji8(this, mt$hfo);
    },
    'ignorableWhitespace': function () {},
    'characters': function (g18en) {
        if (g18en = _d$5ot40['apply'](this, arguments)) {
            if (this['cdata']) var a39zr = this['doc']['createCDATASection'](g18en);else var a39zr = this['doc']['createTextNode'](g18en);
            this['currentElement'] ? this['currentElement']['appendChild'](a39zr) : /^\s*$/['test'](g18en) && this['doc']['appendChild'](a39zr), this['locator'] && _dmtf$ho(this['locator'], a39zr);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (_jvi8q) {
        (this['locator'] = _jvi8q) && (_jvi8q['lineNumber'] = 0x0);
    },
    'comment': function (hmu7) {
        hmu7 = _d$5ot40['apply'](this, arguments);
        var _q8vj = this['doc']['createComment'](hmu7);
        this['locator'] && _dmtf$ho(this['locator'], _q8vj), _dqvji8(this, _q8vj);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (za0sdb, ufp, k2yuj) {
        var kuy2cj = this['doc']['implementation'];
        if (kuy2cj && kuy2cj['createDocumentType']) {
            var h7mcpu = kuy2cj['createDocumentType'](za0sdb, ufp, k2yuj);
            this['locator'] && _dmtf$ho(this['locator'], h7mcpu), _dqvji8(this, h7mcpu);
        }
    },
    'warning': function (y2_q) {
        console['warn']('[xmldom warning]\t' + y2_q, _djkqv_i(this['locator']));
    },
    'error': function (x36rz9) {
        console['error']('[xmldom error]\t' + x36rz9, _djkqv_i(this['locator']));
    },
    'fatalError': function (q_2jv) {
        throw console['error']('[xmldom fatalError]\t' + q_2jv, _djkqv_i(this['locator'])), q_2jv;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r9zdba) {
    _dsdab40['prototype'][r9zdba] = function () {
        return null;
    };
});
var _dt$504o = require('./eeesax')['XMLReader'],
    _db9azdr = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = _dar96;