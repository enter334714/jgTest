var J = wx.h$;
function g_h8efd(debu) {
    this['options'] = debu || { 'locator': {} };
}
function gyqlg91(v$k0x, okvxi0, m2r7) {
    function hf_s3(kgq) {
        var he4ufd = v$k0x[kgq];
        !he4ufd && t6mzp1 && (he4ufd = 0x2 == v$k0x['length'] ? function (cinovj) {
            v$k0x(kgq, cinovj);
        } : v$k0x), lqy1g[kgq] = he4ufd && function (amt2w) {
            he4ufd('[xmldom ' + kgq + ']\t' + amt2w + gs8_32(m2r7));
        } || function () {};
    }
    if (!v$k0x) {
        if (okvxi0 instanceof gkoincv) return okvxi0;
        v$k0x = okvxi0;
    }
    var lqy1g = {},
        t6mzp1 = v$k0x instanceof Function;
    return m2r7 = m2r7 || {}, hf_s3('warning'), hf_s3('error'), hf_s3('fatalError'), lqy1g;
}
function gkoincv() {
    this['cdata'] = !0x1;
}
function gl1q9yg(zm67pt, lgx$qy) {
    lgx$qy['lineNumber'] = zm67pt['lineNumber'], lgx$qy['columnNumber'] = zm67pt['columnNumber'];
}
function gs8_32(h_sf3) {
    return h_sf3 ? '\x0a@' + (h_sf3['systemId'] || '') + '#[line:' + h_sf3['lineNumber'] + ',col:' + h_sf3['columnNumber'] + ']' : void 0x0;
}
function ggq$9y(oknv0, oncj, fhe_8) {
    return 'string' == typeof oknv0 ? oknv0['substr'](oncj, fhe_8) : oknv0['length'] >= oncj + fhe_8 || oncj ? new java['lang']['String'](oknv0, oncj, fhe_8) + '' : oknv0;
}
function gijcn($0xvki, q$0lgx) {
    $0xvki['currentElement'] ? $0xvki['currentElement']['appendChild'](q$0lgx) : $0xvki['doc']['appendChild'](q$0lgx);
}
g_h8efd['prototype']['parseFromString'] = function (i0ko, okivx) {
    var p61yz9 = this['options'],
        ygql91 = new gmw2r(),
        z1lq9 = p61yz9['domBuilder'] || new gkoincv(),
        g0v$ = p61yz9['errorHandler'],
        qyl1g = p61yz9['locator'],
        qg0$x = p61yz9['xmlns'] || {},
        _dhf4e = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qyl1g && z1lq9['setDocumentLocator'](qyl1g), ygql91['errorHandler'] = gyqlg91(g0v$, z1lq9, qyl1g), ygql91['domBuilder'] = p61yz9['domBuilder'] || z1lq9, /\/x?html?$/['test'](okivx) && (_dhf4e['nbsp'] = '\u00a0', _dhf4e['copy'] = '©', qg0$x[''] = 'http://www.w3.org/1999/xhtml'), qg0$x['xml'] = qg0$x['xml'] || 'http://www.w3.org/XML/1998/namespace', i0ko ? ygql91['parse'](i0ko, qg0$x, _dhf4e) : ygql91['errorHandler']['error']('invalid doc source'), z1lq9['doc'];
}, gkoincv['prototype'] = {
    'startDocument': function () {
        this['doc'] = new grf_38()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (bed45u, lg$x0, lp91z, e45u) {
        var y9q1lg = this['doc'],
            tzmp67 = y9q1lg['createElementNS'](bed45u, lp91z || lg$x0),
            uhde = e45u['length'];
        gijcn(this, tzmp67), this['currentElement'] = tzmp67, this['locator'] && gl1q9yg(this['locator'], tzmp67);
        for (var cvjn = 0x0; uhde > cvjn; cvjn++) {
            var bed45u = e45u['getURI'](cvjn),
                e4_hf = e45u['getValue'](cvjn),
                lp91z = e45u['getQName'](cvjn),
                wam2r7 = y9q1lg['createAttributeNS'](bed45u, lp91z);
            this['locator'] && gl1q9yg(e45u['getLocator'](cvjn), wam2r7), wam2r7['value'] = wam2r7['nodeValue'] = e4_hf, tzmp67['setAttributeNode'](wam2r7);
        }
    },
    'endElement': function () {
        {
            var iov0xk = this['currentElement'];
            iov0xk['tagName'];
        }
        this['currentElement'] = iov0xk['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (m1p6, vkic) {
        var yql1z = this['doc']['createProcessingInstruction'](m1p6, vkic);
        this['locator'] && gl1q9yg(this['locator'], yql1z), gijcn(this, yql1z);
    },
    'ignorableWhitespace': function () {},
    'characters': function (in0kv) {
        if (in0kv = ggq$9y['apply'](this, arguments)) {
            if (this['cdata']) var ikxv = this['doc']['createCDATASection'](in0kv);else var ikxv = this['doc']['createTextNode'](in0kv);
            this['currentElement'] ? this['currentElement']['appendChild'](ikxv) : /^\s*$/['test'](in0kv) && this['doc']['appendChild'](ikxv), this['locator'] && gl1q9yg(this['locator'], ikxv);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (t7amw2) {
        (this['locator'] = t7amw2) && (t7amw2['lineNumber'] = 0x0);
    },
    'comment': function (ojinvc) {
        ojinvc = ggq$9y['apply'](this, arguments);
        var $9gl = this['doc']['createComment'](ojinvc);
        this['locator'] && gl1q9yg(this['locator'], $9gl), gijcn(this, $9gl);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function ($9glyq, ckvn, kq$) {
        var z96p1y = this['doc']['implementation'];
        if (z96p1y && z96p1y['createDocumentType']) {
            var ix$v0k = z96p1y['createDocumentType']($9glyq, ckvn, kq$);
            this['locator'] && gl1q9yg(this['locator'], ix$v0k), gijcn(this, ix$v0k);
        }
    },
    'warning': function (xgqyl$) {
        console['warn']('[xmldom warning]\t' + xgqyl$, gs8_32(this['locator']));
    },
    'error': function (ivcko) {
        console['error']('[xmldom error]\t' + ivcko, gs8_32(this['locator']));
    },
    'fatalError': function (_3h8) {
        throw console['error']('[xmldom fatalError]\t' + _3h8, gs8_32(this['locator'])), _3h8;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sfeh) {
    gkoincv['prototype'][sfeh] = function () {
        return null;
    };
});
var gmw2r = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    grf_38 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = g_h8efd;