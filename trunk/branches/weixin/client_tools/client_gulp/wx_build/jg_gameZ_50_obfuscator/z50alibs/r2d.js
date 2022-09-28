var b = wx.$e;
function egth48l($x0j_m) {
    this['options'] = $x0j_m || { 'locator': {} };
}
function eam_j(dwo1ky, vu2bc, gl485t) {
    function jpmai(zb3qc7) {
        var s06r$ = dwo1ky[zb3qc7];
        !s06r$ && ode1 && (s06r$ = 0x2 == dwo1ky['length'] ? function (cu72b) {
            dwo1ky(zb3qc7, cu72b);
        } : dwo1ky), r0_m6$[zb3qc7] = s06r$ && function (m0_jx) {
            s06r$('[xmldom ' + zb3qc7 + ']\t' + m0_jx + en9cvu(gl485t));
        } || function () {};
    }
    if (!dwo1ky) {
        if (vu2bc instanceof eh29unv) return vu2bc;
        dwo1ky = vu2bc;
    }
    var r0_m6$ = {},
        ode1 = dwo1ky instanceof Function;
    return gl485t = gl485t || {}, jpmai('warning'), jpmai('error'), jpmai('fatalError'), r0_m6$;
}
function eh29unv() {
    this['cdata'] = !0x1;
}
function et58lg4(nhl948, p5g4it) {
    p5g4it['lineNumber'] = nhl948['lineNumber'], p5g4it['columnNumber'] = nhl948['columnNumber'];
}
function en9cvu(b7zcq3) {
    return b7zcq3 ? '\x0a@' + (b7zcq3['systemId'] || '') + '#[line:' + b7zcq3['lineNumber'] + ',col:' + b7zcq3['columnNumber'] + ']' : void 0x0;
}
function eajmxp(wk3qz7, lnh89u, kq3zb) {
    return 'string' == typeof wk3qz7 ? wk3qz7['substr'](lnh89u, kq3zb) : wk3qz7['length'] >= lnh89u + kq3zb || lnh89u ? new java['lang']['String'](wk3qz7, lnh89u, kq3zb) + '' : wk3qz7;
}
function eucvb29(_m0r6$, lgth8) {
    _m0r6$['currentElement'] ? _m0r6$['currentElement']['appendChild'](lgth8) : _m0r6$['doc']['appendChild'](lgth8);
}
egth48l['prototype']['parseFromString'] = function (ti5pga, wqk7z3) {
    var cvub = this['options'],
        t5paig = new epi4g5t(),
        cz237 = cvub['domBuilder'] || new eh29unv(),
        aijpm = cvub['errorHandler'],
        ofey = cvub['locator'],
        oywkq1 = cvub['xmlns'] || {},
        fdy1w = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ofey && cz237['setDocumentLocator'](ofey), t5paig['errorHandler'] = eam_j(aijpm, cz237, ofey), t5paig['domBuilder'] = cvub['domBuilder'] || cz237, /\/x?html?$/['test'](wqk7z3) && (fdy1w['nbsp'] = '\u00a0', fdy1w['copy'] = '©', oywkq1[''] = 'http://www.w3.org/1999/xhtml'), oywkq1['xml'] = oywkq1['xml'] || 'http://www.w3.org/XML/1998/namespace', ti5pga ? t5paig['parse'](ti5pga, oywkq1, fdy1w) : t5paig['errorHandler']['error']('invalid doc source'), cz237['doc'];
}, eh29unv['prototype'] = {
    'startDocument': function () {
        this['doc'] = new eb7q3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (bv2u7c, _$jm, $rs0, g8hnl) {
        var hu9l8n = this['doc'],
            uc9n2v = hu9l8n['createElementNS'](bv2u7c, $rs0 || _$jm),
            ulh89n = g8hnl['length'];
        eucvb29(this, uc9n2v), this['currentElement'] = uc9n2v, this['locator'] && et58lg4(this['locator'], uc9n2v);
        for (var wof1yd = 0x0; ulh89n > wof1yd; wof1yd++) {
            var bv2u7c = g8hnl['getURI'](wof1yd),
                lgt485 = g8hnl['getValue'](wof1yd),
                $rs0 = g8hnl['getQName'](wof1yd),
                m$ajxi = hu9l8n['createAttributeNS'](bv2u7c, $rs0);
            this['locator'] && et58lg4(g8hnl['getLocator'](wof1yd), m$ajxi), m$ajxi['value'] = m$ajxi['nodeValue'] = lgt485, uc9n2v['setAttributeNode'](m$ajxi);
        }
    },
    'endElement': function () {
        {
            var h8l49n = this['currentElement'];
            h8l49n['tagName'];
        }
        this['currentElement'] = h8l49n['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (oqkw, $r60) {
        var hl4n = this['doc']['createProcessingInstruction'](oqkw, $r60);
        this['locator'] && et58lg4(this['locator'], hl4n), eucvb29(this, hl4n);
    },
    'ignorableWhitespace': function () {},
    'characters': function (yfodw1) {
        if (yfodw1 = eajmxp['apply'](this, arguments)) {
            if (this['cdata']) var r_0j$ = this['doc']['createCDATASection'](yfodw1);else var r_0j$ = this['doc']['createTextNode'](yfodw1);
            this['currentElement'] ? this['currentElement']['appendChild'](r_0j$) : /^\s*$/['test'](yfodw1) && this['doc']['appendChild'](r_0j$), this['locator'] && et58lg4(this['locator'], r_0j$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (aj$mx_) {
        (this['locator'] = aj$mx_) && (aj$mx_['lineNumber'] = 0x0);
    },
    'comment': function (f1eody) {
        f1eody = eajmxp['apply'](this, arguments);
        var q7cz3 = this['doc']['createComment'](f1eody);
        this['locator'] && et58lg4(this['locator'], q7cz3), eucvb29(this, q7cz3);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (j5pia, qok31w, cvu2n9) {
        var _ma$j = this['doc']['implementation'];
        if (_ma$j && _ma$j['createDocumentType']) {
            var nlh9u = _ma$j['createDocumentType'](j5pia, qok31w, cvu2n9);
            this['locator'] && et58lg4(this['locator'], nlh9u), eucvb29(this, nlh9u);
        }
    },
    'warning': function (jm$0) {
        console['warn']('[xmldom warning]\t' + jm$0, en9cvu(this['locator']));
    },
    'error': function (k7zbq) {
        console['error']('[xmldom error]\t' + k7zbq, en9cvu(this['locator']));
    },
    'fatalError': function (ixpj5) {
        throw console['error']('[xmldom fatalError]\t' + ixpj5, en9cvu(this['locator'])), ixpj5;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (japix) {
    eh29unv['prototype'][japix] = function () {
        return null;
    };
});
var epi4g5t = require('./ld')['XMLReader'],
    eb7q3 = exports['DOMImplementation'] = require('./vepex')['DOMImplementation'];
exports['XMLSerializer'] = require('./vepex')['XMLSerializer'], exports['DOMParser'] = egth48l;