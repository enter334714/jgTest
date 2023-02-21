var s1 = wx.l$;
function _xomqa7u(n9jkv) {
    this['options'] = n9jkv || { 'locator': {} };
}
function _xmup7(ao_cq, vwj$9n, v0$tbw) {
    function ls5fzp(mulz7p) {
        var nrqk_ = ao_cq[mulz7p];
        !nrqk_ && xgiy && (nrqk_ = 0x2 == ao_cq['length'] ? function (k_jcn) {
            ao_cq(mulz7p, k_jcn);
        } : ao_cq), rq_mao[mulz7p] = nrqk_ && function (gy24i) {
            nrqk_('[xmldom ' + mulz7p + ']\t' + gy24i + _xum7q(v0$tbw));
        } || function () {};
    }
    if (!ao_cq) {
        if (vwj$9n instanceof _xnkc9_) return vwj$9n;
        ao_cq = vwj$9n;
    }
    var rq_mao = {},
        xgiy = ao_cq instanceof Function;
    return v0$tbw = v0$tbw || {}, ls5fzp('warning'), ls5fzp('error'), ls5fzp('fatalError'), rq_mao;
}
function _xnkc9_() {
    this['cdata'] = !0x1;
}
function _xtj0$wv(rc_qk, btw$v) {
    btw$v['lineNumber'] = rc_qk['lineNumber'], btw$v['columnNumber'] = rc_qk['columnNumber'];
}
function _xum7q(y4igx) {
    return y4igx ? '\x0a@' + (y4igx['systemId'] || '') + '#[line:' + y4igx['lineNumber'] + ',col:' + y4igx['columnNumber'] + ']' : void 0x0;
}
function _xi12g4h(tvj$w0, maq7uo, ygxi6) {
    return 'string' == typeof tvj$w0 ? tvj$w0['substr'](maq7uo, ygxi6) : tvj$w0['length'] >= maq7uo + ygxi6 || maq7uo ? new java['lang']['String'](tvj$w0, maq7uo, ygxi6) + '' : tvj$w0;
}
function _x$0vwj(q_oram, v0$bt) {
    q_oram['currentElement'] ? q_oram['currentElement']['appendChild'](v0$bt) : q_oram['doc']['appendChild'](v0$bt);
}
_xomqa7u['prototype']['parseFromString'] = function (zu7pl, mopu7z) {
    var fu7z = this['options'],
        ump7lz = new _xl7zupf(),
        w9nj$ = fu7z['domBuilder'] || new _xnkc9_(),
        splf7 = fu7z['errorHandler'],
        wj$tv9 = fu7z['locator'],
        ls5p6f = fu7z['xmlns'] || {},
        pm7oz = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return wj$tv9 && w9nj$['setDocumentLocator'](wj$tv9), ump7lz['errorHandler'] = _xmup7(splf7, w9nj$, wj$tv9), ump7lz['domBuilder'] = fu7z['domBuilder'] || w9nj$, /\/x?html?$/['test'](mopu7z) && (pm7oz['nbsp'] = '\u00a0', pm7oz['copy'] = '©', ls5p6f[''] = 'http://www.w3.org/1999/xhtml'), ls5p6f['xml'] = ls5p6f['xml'] || 'http://www.w3.org/XML/1998/namespace', zu7pl ? ump7lz['parse'](zu7pl, ls5p6f, pm7oz) : ump7lz['errorHandler']['error']('invalid doc source'), w9nj$['doc'];
}, _xnkc9_['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _xzsfpl5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (aqrc_, lp56fs, kn9jv, c_ao) {
        var p7slzf = this['doc'],
            sl6ef = p7slzf['createElementNS'](aqrc_, kn9jv || lp56fs),
            n9jkw = c_ao['length'];
        _x$0vwj(this, sl6ef), this['currentElement'] = sl6ef, this['locator'] && _xtj0$wv(this['locator'], sl6ef);
        for (var w0$j = 0x0; n9jkw > w0$j; w0$j++) {
            var aqrc_ = c_ao['getURI'](w0$j),
                qraomu = c_ao['getValue'](w0$j),
                kn9jv = c_ao['getQName'](w0$j),
                _raq = p7slzf['createAttributeNS'](aqrc_, kn9jv);
            this['locator'] && _xtj0$wv(c_ao['getLocator'](w0$j), _raq), _raq['value'] = _raq['nodeValue'] = qraomu, sl6ef['setAttributeNode'](_raq);
        }
    },
    'endElement': function () {
        {
            var kc_ = this['currentElement'];
            kc_['tagName'];
        }
        this['currentElement'] = kc_['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (xse56y, zpo7m) {
        var aumorq = this['doc']['createProcessingInstruction'](xse56y, zpo7m);
        this['locator'] && _xtj0$wv(this['locator'], aumorq), _x$0vwj(this, aumorq);
    },
    'ignorableWhitespace': function () {},
    'characters': function (yeix4g) {
        if (yeix4g = _xi12g4h['apply'](this, arguments)) {
            if (this['cdata']) var n$vwj9 = this['doc']['createCDATASection'](yeix4g);else var n$vwj9 = this['doc']['createTextNode'](yeix4g);
            this['currentElement'] ? this['currentElement']['appendChild'](n$vwj9) : /^\s*$/['test'](yeix4g) && this['doc']['appendChild'](n$vwj9), this['locator'] && _xtj0$wv(this['locator'], n$vwj9);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (eysx) {
        (this['locator'] = eysx) && (eysx['lineNumber'] = 0x0);
    },
    'comment': function (rck_q) {
        rck_q = _xi12g4h['apply'](this, arguments);
        var w$0tbv = this['doc']['createComment'](rck_q);
        this['locator'] && _xtj0$wv(this['locator'], w$0tbv), _x$0vwj(this, w$0tbv);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (maz, nr9k_c, slf5e6) {
        var s5ye6x = this['doc']['implementation'];
        if (s5ye6x && s5ye6x['createDocumentType']) {
            var lp7zu = s5ye6x['createDocumentType'](maz, nr9k_c, slf5e6);
            this['locator'] && _xtj0$wv(this['locator'], lp7zu), _x$0vwj(this, lp7zu);
        }
    },
    'warning': function (rqknc) {
        console['warn']('[xmldom warning]\t' + rqknc, _xum7q(this['locator']));
    },
    'error': function (qraou) {
        console['error']('[xmldom error]\t' + qraou, _xum7q(this['locator']));
    },
    'fatalError': function (h2yg4) {
        throw console['error']('[xmldom fatalError]\t' + h2yg4, _xum7q(this['locator'])), h2yg4;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d80t) {
    _xnkc9_['prototype'][d80t] = function () {
        return null;
    };
});
var _xl7zupf = require('./e05a')['XMLReader'],
    _xzsfpl5 = exports['DOMImplementation'] = require('./a7pm')['DOMImplementation'];
exports['XMLSerializer'] = require('./a7pm')['XMLSerializer'], exports['DOMParser'] = _xomqa7u;