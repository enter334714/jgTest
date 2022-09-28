var J = wx.h$;
function gc68dth(_2epz) {
    this['options'] = _2epz || { 'locator': {} };
}
function grboq(yv7jr, ztceph, f2_wp9) {
    function dkgb0(qk5o0b) {
        var hdc8t6 = yv7jr[qk5o0b];
        !hdc8t6 && t8ezhc && (hdc8t6 = 0x2 == yv7jr['length'] ? function (yjvo) {
            yv7jr(qk5o0b, yjvo);
        } : yv7jr), c68th[qk5o0b] = hdc8t6 && function (rji7xv) {
            hdc8t6('[xmldom ' + qk5o0b + ']\t' + rji7xv + gd6hc(f2_wp9));
        } || function () {};
    }
    if (!yv7jr) {
        if (ztceph instanceof gua341l) return ztceph;
        yv7jr = ztceph;
    }
    var c68th = {},
        t8ezhc = yv7jr instanceof Function;
    return f2_wp9 = f2_wp9 || {}, dkgb0('warning'), dkgb0('error'), dkgb0('fatalError'), c68th;
}
function gua341l() {
    this['cdata'] = !0x1;
}
function gz2e_p(ez8hct, s9f2) {
    s9f2['lineNumber'] = ez8hct['lineNumber'], s9f2['columnNumber'] = ez8hct['columnNumber'];
}
function gd6hc(o5rvy) {
    return o5rvy ? '\x0a@' + (o5rvy['systemId'] || '') + '#[line:' + o5rvy['lineNumber'] + ',col:' + o5rvy['columnNumber'] + ']' : void 0x0;
}
function gxryvj7(gk50bq, v5oqr, t_eh) {
    return 'string' == typeof gk50bq ? gk50bq['substr'](v5oqr, t_eh) : gk50bq['length'] >= v5oqr + t_eh || v5oqr ? new java['lang']['String'](gk50bq, v5oqr, t_eh) + '' : gk50bq;
}
function gbq5ko(d6k8g, nx1i47) {
    d6k8g['currentElement'] ? d6k8g['currentElement']['appendChild'](nx1i47) : d6k8g['doc']['appendChild'](nx1i47);
}
gc68dth['prototype']['parseFromString'] = function (thzc86, c6z8ht) {
    var bgkd0q = this['options'],
        bdg0q = new gtezp_h(),
        jv5yo = bgkd0q['domBuilder'] || new gua341l(),
        nx1ij7 = bgkd0q['errorHandler'],
        h6zc8t = bgkd0q['locator'],
        tcd6h8 = bgkd0q['xmlns'] || {},
        yo5q = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return h6zc8t && jv5yo['setDocumentLocator'](h6zc8t), bdg0q['errorHandler'] = grboq(nx1ij7, jv5yo, h6zc8t), bdg0q['domBuilder'] = bgkd0q['domBuilder'] || jv5yo, /\/x?html?$/['test'](c6z8ht) && (yo5q['nbsp'] = '\u00a0', yo5q['copy'] = '©', tcd6h8[''] = 'http://www.w3.org/1999/xhtml'), tcd6h8['xml'] = tcd6h8['xml'] || 'http://www.w3.org/XML/1998/namespace', thzc86 ? bdg0q['parse'](thzc86, tcd6h8, yo5q) : bdg0q['errorHandler']['error']('invalid doc source'), jv5yo['doc'];
}, gua341l['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gpez2w_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ztc8eh, hz_2pe, tdc68h, ovy7r) {
        var z_ehp2 = this['doc'],
            dbkg60 = z_ehp2['createElementNS'](ztc8eh, tdc68h || hz_2pe),
            w$_f92 = ovy7r['length'];
        gbq5ko(this, dbkg60), this['currentElement'] = dbkg60, this['locator'] && gz2e_p(this['locator'], dbkg60);
        for (var n43ui = 0x0; w$_f92 > n43ui; n43ui++) {
            var ztc8eh = ovy7r['getURI'](n43ui),
                fw_29$ = ovy7r['getValue'](n43ui),
                tdc68h = ovy7r['getQName'](n43ui),
                jyo7 = z_ehp2['createAttributeNS'](ztc8eh, tdc68h);
            this['locator'] && gz2e_p(ovy7r['getLocator'](n43ui), jyo7), jyo7['value'] = jyo7['nodeValue'] = fw_29$, dbkg60['setAttributeNode'](jyo7);
        }
    },
    'endElement': function () {
        {
            var j5yr = this['currentElement'];
            j5yr['tagName'];
        }
        this['currentElement'] = j5yr['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (orb5qy, _p9w2e) {
        var wze2p_ = this['doc']['createProcessingInstruction'](orb5qy, _p9w2e);
        this['locator'] && gz2e_p(this['locator'], wze2p_), gbq5ko(this, wze2p_);
    },
    'ignorableWhitespace': function () {},
    'characters': function (dt6ch) {
        if (dt6ch = gxryvj7['apply'](this, arguments)) {
            if (this['cdata']) var _2ezph = this['doc']['createCDATASection'](dt6ch);else var _2ezph = this['doc']['createTextNode'](dt6ch);
            this['currentElement'] ? this['currentElement']['appendChild'](_2ezph) : /^\s*$/['test'](dt6ch) && this['doc']['appendChild'](_2ezph), this['locator'] && gz2e_p(this['locator'], _2ezph);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (bkg06) {
        (this['locator'] = bkg06) && (bkg06['lineNumber'] = 0x0);
    },
    'comment': function (bd6gk0) {
        bd6gk0 = gxryvj7['apply'](this, arguments);
        var cz8th6 = this['doc']['createComment'](bd6gk0);
        this['locator'] && gz2e_p(this['locator'], cz8th6), gbq5ko(this, cz8th6);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (tpez_, e2zw, oqyv5r) {
        var _9fp2w = this['doc']['implementation'];
        if (_9fp2w && _9fp2w['createDocumentType']) {
            var m34ua = _9fp2w['createDocumentType'](tpez_, e2zw, oqyv5r);
            this['locator'] && gz2e_p(this['locator'], m34ua), gbq5ko(this, m34ua);
        }
    },
    'warning': function (x71ijn) {
        console['warn']('[xmldom warning]\t' + x71ijn, gd6hc(this['locator']));
    },
    'error': function (hz2e_p) {
        console['error']('[xmldom error]\t' + hz2e_p, gd6hc(this['locator']));
    },
    'fatalError': function (bq50kg) {
        throw console['error']('[xmldom fatalError]\t' + bq50kg, gd6hc(this['locator'])), bq50kg;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dt8g6) {
    gua341l['prototype'][dt8g6] = function () {
        return null;
    };
});
var gtezp_h = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gpez2w_ = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gc68dth;