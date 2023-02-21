var J = wx.h$;
function gri7(vroq5) {
    this['options'] = vroq5 || { 'locator': {} };
}
function gxrjiv(kd0, qyb5o0, nx134i) {
    function x14in7(qkbd0) {
        var _29e = kd0[qkbd0];
        !_29e && xjnvi7 && (_29e = 0x2 == kd0['length'] ? function (d6kcg8) {
            kd0(qkbd0, d6kcg8);
        } : kd0), qgb0k[qkbd0] = _29e && function (rq5yv) {
            _29e('[xmldom ' + qkbd0 + ']\t' + rq5yv + gh6td8c(nx134i));
        } || function () {};
    }
    if (!kd0) {
        if (qyb5o0 instanceof gtzh6c8) return qyb5o0;
        kd0 = qyb5o0;
    }
    var qgb0k = {},
        xjnvi7 = kd0 instanceof Function;
    return nx134i = nx134i || {}, x14in7('warning'), x14in7('error'), x14in7('fatalError'), qgb0k;
}
function gtzh6c8() {
    this['cdata'] = !0x1;
}
function geczt8(chept, ep29w_) {
    ep29w_['lineNumber'] = chept['lineNumber'], ep29w_['columnNumber'] = chept['columnNumber'];
}
function gh6td8c(y7xvr) {
    return y7xvr ? '\x0a@' + (y7xvr['systemId'] || '') + '#[line:' + y7xvr['lineNumber'] + ',col:' + y7xvr['columnNumber'] + ']' : void 0x0;
}
function gxnvi7j(xvjni, nui431, ryv7j) {
    return 'string' == typeof xvjni ? xvjni['substr'](nui431, ryv7j) : xvjni['length'] >= nui431 + ryv7j || nui431 ? new java['lang']['String'](xvjni, nui431, ryv7j) + '' : xvjni;
}
function gf2$w9s(b0kgd6, ji7vx) {
    b0kgd6['currentElement'] ? b0kgd6['currentElement']['appendChild'](ji7vx) : b0kgd6['doc']['appendChild'](ji7vx);
}
gri7['prototype']['parseFromString'] = function (l34mau, z_ew2) {
    var f_w$29 = this['options'],
        hctpz = new gzt_pe(),
        hz8c6t = f_w$29['domBuilder'] || new gtzh6c8(),
        ojy7 = f_w$29['errorHandler'],
        qrob5y = f_w$29['locator'],
        j71x = f_w$29['xmlns'] || {},
        q0o5 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qrob5y && hz8c6t['setDocumentLocator'](qrob5y), hctpz['errorHandler'] = gxrjiv(ojy7, hz8c6t, qrob5y), hctpz['domBuilder'] = f_w$29['domBuilder'] || hz8c6t, /\/x?html?$/['test'](z_ew2) && (q0o5['nbsp'] = '\u00a0', q0o5['copy'] = '©', j71x[''] = 'http://www.w3.org/1999/xhtml'), j71x['xml'] = j71x['xml'] || 'http://www.w3.org/XML/1998/namespace', l34mau ? hctpz['parse'](l34mau, j71x, q0o5) : hctpz['errorHandler']['error']('invalid doc source'), hz8c6t['doc'];
}, gtzh6c8['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gphe2z()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (_9pw2f, rjv7ix, z_2epw, b05q) {
        var a4n1 = this['doc'],
            u4an13 = a4n1['createElementNS'](_9pw2f, z_2epw || rjv7ix),
            x41n3i = b05q['length'];
        gf2$w9s(this, u4an13), this['currentElement'] = u4an13, this['locator'] && geczt8(this['locator'], u4an13);
        for (var ovqyr5 = 0x0; x41n3i > ovqyr5; ovqyr5++) {
            var _9pw2f = b05q['getURI'](ovqyr5),
                phcze = b05q['getValue'](ovqyr5),
                z_2epw = b05q['getQName'](ovqyr5),
                e29w = a4n1['createAttributeNS'](_9pw2f, z_2epw);
            this['locator'] && geczt8(b05q['getLocator'](ovqyr5), e29w), e29w['value'] = e29w['nodeValue'] = phcze, u4an13['setAttributeNode'](e29w);
        }
    },
    'endElement': function () {
        {
            var xi43n = this['currentElement'];
            xi43n['tagName'];
        }
        this['currentElement'] = xi43n['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (t8czh6, ephczt) {
        var bdg0qk = this['doc']['createProcessingInstruction'](t8czh6, ephczt);
        this['locator'] && geczt8(this['locator'], bdg0qk), gf2$w9s(this, bdg0qk);
    },
    'ignorableWhitespace': function () {},
    'characters': function (zeh2_) {
        if (zeh2_ = gxnvi7j['apply'](this, arguments)) {
            if (this['cdata']) var i1n74 = this['doc']['createCDATASection'](zeh2_);else var i1n74 = this['doc']['createTextNode'](zeh2_);
            this['currentElement'] ? this['currentElement']['appendChild'](i1n74) : /^\s*$/['test'](zeh2_) && this['doc']['appendChild'](i1n74), this['locator'] && geczt8(this['locator'], i1n74);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (vrjo5y) {
        (this['locator'] = vrjo5y) && (vrjo5y['lineNumber'] = 0x0);
    },
    'comment': function (la13u4) {
        la13u4 = gxnvi7j['apply'](this, arguments);
        var jxnvi7 = this['doc']['createComment'](la13u4);
        this['locator'] && geczt8(this['locator'], jxnvi7), gf2$w9s(this, jxnvi7);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (bqo05k, xni147, ryjx) {
        var oqrb5 = this['doc']['implementation'];
        if (oqrb5 && oqrb5['createDocumentType']) {
            var cd8g = oqrb5['createDocumentType'](bqo05k, xni147, ryjx);
            this['locator'] && geczt8(this['locator'], cd8g), gf2$w9s(this, cd8g);
        }
    },
    'warning': function (pezw2_) {
        console['warn']('[xmldom warning]\t' + pezw2_, gh6td8c(this['locator']));
    },
    'error': function (b0q5oy) {
        console['error']('[xmldom error]\t' + b0q5oy, gh6td8c(this['locator']));
    },
    'fatalError': function (gqk0db) {
        throw console['error']('[xmldom fatalError]\t' + gqk0db, gh6td8c(this['locator'])), gqk0db;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ep_tz) {
    gtzh6c8['prototype'][ep_tz] = function () {
        return null;
    };
});
var gzt_pe = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gphe2z = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gri7;