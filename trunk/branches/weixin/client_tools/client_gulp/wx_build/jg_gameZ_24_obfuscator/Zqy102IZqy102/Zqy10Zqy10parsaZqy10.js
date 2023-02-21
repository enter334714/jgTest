var J = wx.h$;
function gp9wf(nxvji7) {
    this['options'] = nxvji7 || { 'locator': {} };
}
function gbgqkd(chp, bdk6g0, joyrv) {
    function f$2_w(tgdc86) {
        var n3x41i = chp[tgdc86];
        !n3x41i && z68cht && (n3x41i = 0x2 == chp['length'] ? function (w$s2f) {
            chp(tgdc86, w$s2f);
        } : chp), pehtcz[tgdc86] = n3x41i && function (ehz_) {
            n3x41i('[xmldom ' + tgdc86 + ']\t' + ehz_ + gdqkbg(joyrv));
        } || function () {};
    }
    if (!chp) {
        if (bdk6g0 instanceof gau43l) return bdk6g0;
        chp = bdk6g0;
    }
    var pehtcz = {},
        z68cht = chp instanceof Function;
    return joyrv = joyrv || {}, f$2_w('warning'), f$2_w('error'), f$2_w('fatalError'), pehtcz;
}
function gau43l() {
    this['cdata'] = !0x1;
}
function gn1u3(t68gd, rj7yov) {
    rj7yov['lineNumber'] = t68gd['lineNumber'], rj7yov['columnNumber'] = t68gd['columnNumber'];
}
function gdqkbg(tz86ch) {
    return tz86ch ? '\x0a@' + (tz86ch['systemId'] || '') + '#[line:' + tz86ch['lineNumber'] + ',col:' + tz86ch['columnNumber'] + ']' : void 0x0;
}
function g$9s(tezhc, ec8ht, wf92) {
    return 'string' == typeof tezhc ? tezhc['substr'](ec8ht, wf92) : tezhc['length'] >= ec8ht + wf92 || ec8ht ? new java['lang']['String'](tezhc, ec8ht, wf92) + '' : tezhc;
}
function gm34l(yxv7, jx7ir) {
    yxv7['currentElement'] ? yxv7['currentElement']['appendChild'](jx7ir) : yxv7['doc']['appendChild'](jx7ir);
}
gp9wf['prototype']['parseFromString'] = function (_pfw29, xn1ji) {
    var or5v = this['options'],
        vxyjr = new gqr5v(),
        cetzhp = or5v['domBuilder'] || new gau43l(),
        pw_9e = or5v['errorHandler'],
        _92ep = or5v['locator'],
        jni = or5v['xmlns'] || {},
        vxyr7 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return _92ep && cetzhp['setDocumentLocator'](_92ep), vxyjr['errorHandler'] = gbgqkd(pw_9e, cetzhp, _92ep), vxyjr['domBuilder'] = or5v['domBuilder'] || cetzhp, /\/x?html?$/['test'](xn1ji) && (vxyr7['nbsp'] = '\u00a0', vxyr7['copy'] = '©', jni[''] = 'http://www.w3.org/1999/xhtml'), jni['xml'] = jni['xml'] || 'http://www.w3.org/XML/1998/namespace', _pfw29 ? vxyjr['parse'](_pfw29, jni, vxyr7) : vxyjr['errorHandler']['error']('invalid doc source'), cetzhp['doc'];
}, gau43l['prototype'] = {
    'startDocument': function () {
        this['doc'] = new grxvji()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (chtd, g6dtc8, ni41, e_h2zp) {
        var kgbd0q = this['doc'],
            irv7x = kgbd0q['createElementNS'](chtd, ni41 || g6dtc8),
            _wpze2 = e_h2zp['length'];
        gm34l(this, irv7x), this['currentElement'] = irv7x, this['locator'] && gn1u3(this['locator'], irv7x);
        for (var qk5ob0 = 0x0; _wpze2 > qk5ob0; qk5ob0++) {
            var chtd = e_h2zp['getURI'](qk5ob0),
                ivxj7r = e_h2zp['getValue'](qk5ob0),
                ni41 = e_h2zp['getQName'](qk5ob0),
                xvr7jy = kgbd0q['createAttributeNS'](chtd, ni41);
            this['locator'] && gn1u3(e_h2zp['getLocator'](qk5ob0), xvr7jy), xvr7jy['value'] = xvr7jy['nodeValue'] = ivxj7r, irv7x['setAttributeNode'](xvr7jy);
        }
    },
    'endElement': function () {
        {
            var et_ph = this['currentElement'];
            et_ph['tagName'];
        }
        this['currentElement'] = et_ph['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (yj5, dgkc86) {
        var p_9e2 = this['doc']['createProcessingInstruction'](yj5, dgkc86);
        this['locator'] && gn1u3(this['locator'], p_9e2), gm34l(this, p_9e2);
    },
    'ignorableWhitespace': function () {},
    'characters': function (ovy) {
        if (ovy = g$9s['apply'](this, arguments)) {
            if (this['cdata']) var hcdt6 = this['doc']['createCDATASection'](ovy);else var hcdt6 = this['doc']['createTextNode'](ovy);
            this['currentElement'] ? this['currentElement']['appendChild'](hcdt6) : /^\s*$/['test'](ovy) && this['doc']['appendChild'](hcdt6), this['locator'] && gn1u3(this['locator'], hcdt6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (_$29fw) {
        (this['locator'] = _$29fw) && (_$29fw['lineNumber'] = 0x0);
    },
    'comment': function (gb0k) {
        gb0k = g$9s['apply'](this, arguments);
        var rixv7 = this['doc']['createComment'](gb0k);
        this['locator'] && gn1u3(this['locator'], rixv7), gm34l(this, rixv7);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (mau3l, pzhct, ijx7) {
        var d6t8cg = this['doc']['implementation'];
        if (d6t8cg && d6t8cg['createDocumentType']) {
            var czt8eh = d6t8cg['createDocumentType'](mau3l, pzhct, ijx7);
            this['locator'] && gn1u3(this['locator'], czt8eh), gm34l(this, czt8eh);
        }
    },
    'warning': function (orvy7j) {
        console['warn']('[xmldom warning]\t' + orvy7j, gdqkbg(this['locator']));
    },
    'error': function (cthze8) {
        console['error']('[xmldom error]\t' + cthze8, gdqkbg(this['locator']));
    },
    'fatalError': function (tzc8eh) {
        throw console['error']('[xmldom fatalError]\t' + tzc8eh, gdqkbg(this['locator'])), tzc8eh;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c8h6tz) {
    gau43l['prototype'][c8h6tz] = function () {
        return null;
    };
});
var gqr5v = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    grxvji = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gp9wf;