var J = wx.h$;
function gjyvo(r5qov) {
    this['options'] = r5qov || { 'locator': {} };
}
function gpe2h_z(qo05k, vyr5q, ob0q5y) {
    function mla3u(oj7yvr) {
        var t6d8cg = qo05k[oj7yvr];
        !t6d8cg && inx1j7 && (t6d8cg = 0x2 == qo05k['length'] ? function (amul3) {
            qo05k(oj7yvr, amul3);
        } : qo05k), zhtc8[oj7yvr] = t6d8cg && function (c68kd) {
            t6d8cg('[xmldom ' + oj7yvr + ']\t' + c68kd + gj7nx1i(ob0q5y));
        } || function () {};
    }
    if (!qo05k) {
        if (vyr5q instanceof ggk68) return vyr5q;
        qo05k = vyr5q;
    }
    var zhtc8 = {},
        inx1j7 = qo05k instanceof Function;
    return ob0q5y = ob0q5y || {}, mla3u('warning'), mla3u('error'), mla3u('fatalError'), zhtc8;
}
function ggk68() {
    this['cdata'] = !0x1;
}
function gcth86d(v7nji, rjx7) {
    rjx7['lineNumber'] = v7nji['lineNumber'], rjx7['columnNumber'] = v7nji['columnNumber'];
}
function gj7nx1i(a41u3) {
    return a41u3 ? '\x0a@' + (a41u3['systemId'] || '') + '#[line:' + a41u3['lineNumber'] + ',col:' + a41u3['columnNumber'] + ']' : void 0x0;
}
function gua4(qb0o5y, a1u34, qgbk0) {
    return 'string' == typeof qb0o5y ? qb0o5y['substr'](a1u34, qgbk0) : qb0o5y['length'] >= a1u34 + qgbk0 || a1u34 ? new java['lang']['String'](qb0o5y, a1u34, qgbk0) + '' : qb0o5y;
}
function gwf9p2_(ctpe, k0dbg) {
    ctpe['currentElement'] ? ctpe['currentElement']['appendChild'](k0dbg) : ctpe['doc']['appendChild'](k0dbg);
}
gjyvo['prototype']['parseFromString'] = function (p_ewz, hpczt) {
    var ehtzc = this['options'],
        pz2_ew = new gct8d(),
        e2w_zp = ehtzc['domBuilder'] || new ggk68(),
        or5b = ehtzc['errorHandler'],
        r5vyj = ehtzc['locator'],
        g8c6dt = ehtzc['xmlns'] || {},
        yob05q = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return r5vyj && e2w_zp['setDocumentLocator'](r5vyj), pz2_ew['errorHandler'] = gpe2h_z(or5b, e2w_zp, r5vyj), pz2_ew['domBuilder'] = ehtzc['domBuilder'] || e2w_zp, /\/x?html?$/['test'](hpczt) && (yob05q['nbsp'] = '\u00a0', yob05q['copy'] = '©', g8c6dt[''] = 'http://www.w3.org/1999/xhtml'), g8c6dt['xml'] = g8c6dt['xml'] || 'http://www.w3.org/XML/1998/namespace', p_ewz ? pz2_ew['parse'](p_ewz, g8c6dt, yob05q) : pz2_ew['errorHandler']['error']('invalid doc source'), e2w_zp['doc'];
}, ggk68['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gobqy05()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ybq50o, ehzc8, au3lm, ij7xrv) {
        var zch8et = this['doc'],
            z_hept = zch8et['createElementNS'](ybq50o, au3lm || ehzc8),
            gq0b = ij7xrv['length'];
        gwf9p2_(this, z_hept), this['currentElement'] = z_hept, this['locator'] && gcth86d(this['locator'], z_hept);
        for (var zetc8 = 0x0; gq0b > zetc8; zetc8++) {
            var ybq50o = ij7xrv['getURI'](zetc8),
                pchtz = ij7xrv['getValue'](zetc8),
                au3lm = ij7xrv['getQName'](zetc8),
                j7xvi = zch8et['createAttributeNS'](ybq50o, au3lm);
            this['locator'] && gcth86d(ij7xrv['getLocator'](zetc8), j7xvi), j7xvi['value'] = j7xvi['nodeValue'] = pchtz, z_hept['setAttributeNode'](j7xvi);
        }
    },
    'endElement': function () {
        {
            var vjory7 = this['currentElement'];
            vjory7['tagName'];
        }
        this['currentElement'] = vjory7['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (gb0kdq, p9w2_) {
        var $f9s2 = this['doc']['createProcessingInstruction'](gb0kdq, p9w2_);
        this['locator'] && gcth86d(this['locator'], $f9s2), gwf9p2_(this, $f9s2);
    },
    'ignorableWhitespace': function () {},
    'characters': function (w2f_9p) {
        if (w2f_9p = gua4['apply'](this, arguments)) {
            if (this['cdata']) var pewz_ = this['doc']['createCDATASection'](w2f_9p);else var pewz_ = this['doc']['createTextNode'](w2f_9p);
            this['currentElement'] ? this['currentElement']['appendChild'](pewz_) : /^\s*$/['test'](w2f_9p) && this['doc']['appendChild'](pewz_), this['locator'] && gcth86d(this['locator'], pewz_);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (_29f) {
        (this['locator'] = _29f) && (_29f['lineNumber'] = 0x0);
    },
    'comment': function (yrx7) {
        yrx7 = gua4['apply'](this, arguments);
        var w9ep = this['doc']['createComment'](yrx7);
        this['locator'] && gcth86d(this['locator'], w9ep), gwf9p2_(this, w9ep);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (e2zw, thzep, chzt6) {
        var rq5ovy = this['doc']['implementation'];
        if (rq5ovy && rq5ovy['createDocumentType']) {
            var _wepz2 = rq5ovy['createDocumentType'](e2zw, thzep, chzt6);
            this['locator'] && gcth86d(this['locator'], _wepz2), gwf9p2_(this, _wepz2);
        }
    },
    'warning': function (hcez8t) {
        console['warn']('[xmldom warning]\t' + hcez8t, gj7nx1i(this['locator']));
    },
    'error': function (wf9_2) {
        console['error']('[xmldom error]\t' + wf9_2, gj7nx1i(this['locator']));
    },
    'fatalError': function (k6gd08) {
        throw console['error']('[xmldom fatalError]\t' + k6gd08, gj7nx1i(this['locator'])), k6gd08;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (xr7yj) {
    ggk68['prototype'][xr7yj] = function () {
        return null;
    };
});
var gct8d = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gobqy05 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gjyvo;