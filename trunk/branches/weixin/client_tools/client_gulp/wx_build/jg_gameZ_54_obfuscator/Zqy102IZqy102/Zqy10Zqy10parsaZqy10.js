var J = wx.h$;
function gbo5ryq(tcezh) {
    this['options'] = tcezh || { 'locator': {} };
}
function gn341i(oyvj7r, tc8dh6, tg6d8) {
    function _e2zwp(bqoy) {
        var qyov5 = oyvj7r[bqoy];
        !qyov5 && tpe_ && (qyov5 = 0x2 == oyvj7r['length'] ? function (gdt8c6) {
            oyvj7r(bqoy, gdt8c6);
        } : oyvj7r), bqo50k[bqoy] = qyov5 && function (orjvy5) {
            qyov5('[xmldom ' + bqoy + ']\t' + orjvy5 + gh_2zpe(tg6d8));
        } || function () {};
    }
    if (!oyvj7r) {
        if (tc8dh6 instanceof gztp_eh) return tc8dh6;
        oyvj7r = tc8dh6;
    }
    var bqo50k = {},
        tpe_ = oyvj7r instanceof Function;
    return tg6d8 = tg6d8 || {}, _e2zwp('warning'), _e2zwp('error'), _e2zwp('fatalError'), bqo50k;
}
function gztp_eh() {
    this['cdata'] = !0x1;
}
function gb0gkdq(zpew2, kdg86c) {
    kdg86c['lineNumber'] = zpew2['lineNumber'], kdg86c['columnNumber'] = zpew2['columnNumber'];
}
function gh_2zpe(gk5qb0) {
    return gk5qb0 ? '\x0a@' + (gk5qb0['systemId'] || '') + '#[line:' + gk5qb0['lineNumber'] + ',col:' + gk5qb0['columnNumber'] + ']' : void 0x0;
}
function gan134(hzt8c6, hct, qg50kb) {
    return 'string' == typeof hzt8c6 ? hzt8c6['substr'](hct, qg50kb) : hzt8c6['length'] >= hct + qg50kb || hct ? new java['lang']['String'](hzt8c6, hct, qg50kb) + '' : hzt8c6;
}
function gz_wp2(qb0o5, q50gb) {
    qb0o5['currentElement'] ? qb0o5['currentElement']['appendChild'](q50gb) : qb0o5['doc']['appendChild'](q50gb);
}
gbo5ryq['prototype']['parseFromString'] = function (oqb0k, r7ijxv) {
    var u31an = this['options'],
        v5orj = new gm3a4ul(),
        gdc6k8 = u31an['domBuilder'] || new gztp_eh(),
        vqor5 = u31an['errorHandler'],
        gqdb0 = u31an['locator'],
        yb0o = u31an['xmlns'] || {},
        xnvj7 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return gqdb0 && gdc6k8['setDocumentLocator'](gqdb0), v5orj['errorHandler'] = gn341i(vqor5, gdc6k8, gqdb0), v5orj['domBuilder'] = u31an['domBuilder'] || gdc6k8, /\/x?html?$/['test'](r7ijxv) && (xnvj7['nbsp'] = '\u00a0', xnvj7['copy'] = '©', yb0o[''] = 'http://www.w3.org/1999/xhtml'), yb0o['xml'] = yb0o['xml'] || 'http://www.w3.org/XML/1998/namespace', oqb0k ? v5orj['parse'](oqb0k, yb0o, xnvj7) : v5orj['errorHandler']['error']('invalid doc source'), gdc6k8['doc'];
}, gztp_eh['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gyojv7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (e2wzp, t8hdc6, vxrji7, s$2f9w) {
        var p9f_w = this['doc'],
            jryov5 = p9f_w['createElementNS'](e2wzp, vxrji7 || t8hdc6),
            bq5ro = s$2f9w['length'];
        gz_wp2(this, jryov5), this['currentElement'] = jryov5, this['locator'] && gb0gkdq(this['locator'], jryov5);
        for (var zech8 = 0x0; bq5ro > zech8; zech8++) {
            var e2wzp = s$2f9w['getURI'](zech8),
                gc6dk8 = s$2f9w['getValue'](zech8),
                vxrji7 = s$2f9w['getQName'](zech8),
                d68kc = p9f_w['createAttributeNS'](e2wzp, vxrji7);
            this['locator'] && gb0gkdq(s$2f9w['getLocator'](zech8), d68kc), d68kc['value'] = d68kc['nodeValue'] = gc6dk8, jryov5['setAttributeNode'](d68kc);
        }
    },
    'endElement': function () {
        {
            var b60dg = this['currentElement'];
            b60dg['tagName'];
        }
        this['currentElement'] = b60dg['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (a3l1u, h8t6d) {
        var jinxv7 = this['doc']['createProcessingInstruction'](a3l1u, h8t6d);
        this['locator'] && gb0gkdq(this['locator'], jinxv7), gz_wp2(this, jinxv7);
    },
    'ignorableWhitespace': function () {},
    'characters': function (r5oqby) {
        if (r5oqby = gan134['apply'](this, arguments)) {
            if (this['cdata']) var ephtzc = this['doc']['createCDATASection'](r5oqby);else var ephtzc = this['doc']['createTextNode'](r5oqby);
            this['currentElement'] ? this['currentElement']['appendChild'](ephtzc) : /^\s*$/['test'](r5oqby) && this['doc']['appendChild'](ephtzc), this['locator'] && gb0gkdq(this['locator'], ephtzc);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (bkgd6) {
        (this['locator'] = bkgd6) && (bkgd6['lineNumber'] = 0x0);
    },
    'comment': function (hc8d) {
        hc8d = gan134['apply'](this, arguments);
        var r7yoj = this['doc']['createComment'](hc8d);
        this['locator'] && gb0gkdq(this['locator'], r7yoj), gz_wp2(this, r7yoj);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (rxv7j, u31a4, g0dqbk) {
        var g60bkd = this['doc']['implementation'];
        if (g60bkd && g60bkd['createDocumentType']) {
            var tzechp = g60bkd['createDocumentType'](rxv7j, u31a4, g0dqbk);
            this['locator'] && gb0gkdq(this['locator'], tzechp), gz_wp2(this, tzechp);
        }
    },
    'warning': function (obqy05) {
        console['warn']('[xmldom warning]\t' + obqy05, gh_2zpe(this['locator']));
    },
    'error': function ($29_fw) {
        console['error']('[xmldom error]\t' + $29_fw, gh_2zpe(this['locator']));
    },
    'fatalError': function (zthe_) {
        throw console['error']('[xmldom fatalError]\t' + zthe_, gh_2zpe(this['locator'])), zthe_;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (pzhetc) {
    gztp_eh['prototype'][pzhetc] = function () {
        return null;
    };
});
var gm3a4ul = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gyojv7 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gbo5ryq;