var m = wx.$g;
function gvsgc(gec7vq) {
    this['options'] = gec7vq || { 'locator': {} };
}
function gzd342o(vqw7ye, r$um6, wy1evk) {
    function kyeh1w(o26d3z) {
        var w7veqy = vqw7ye[o26d3z];
        !w7veqy && q7gsc8 && (w7veqy = 0x2 == vqw7ye['length'] ? function (mu$6jr) {
            vqw7ye(o26d3z, mu$6jr);
        } : vqw7ye), b50i_[o26d3z] = w7veqy && function (ehk1yw) {
            w7veqy('[xmldom ' + o26d3z + ']\t' + ehk1yw + gpi5xa(wy1evk));
        } || function () {};
    }
    if (!vqw7ye) {
        if (r$um6 instanceof gcgsv7q) return r$um6;
        vqw7ye = r$um6;
    }
    var b50i_ = {},
        q7gsc8 = vqw7ye instanceof Function;
    return wy1evk = wy1evk || {}, kyeh1w('warning'), kyeh1w('error'), kyeh1w('fatalError'), b50i_;
}
function gcgsv7q() {
    this['cdata'] = !0x1;
}
function gt_o3f4(ha1i, t_fp) {
    t_fp['lineNumber'] = ha1i['lineNumber'], t_fp['columnNumber'] = ha1i['columnNumber'];
}
function gpi5xa(r$u6jm) {
    return r$u6jm ? '\x0a@' + (r$u6jm['systemId'] || '') + '#[line:' + r$u6jm['lineNumber'] + ',col:' + r$u6jm['columnNumber'] + ']' : void 0x0;
}
function gfdot34(kxaih1, j26$u, vg7qce) {
    return 'string' == typeof kxaih1 ? kxaih1['substr'](j26$u, vg7qce) : kxaih1['length'] >= j26$u + vg7qce || j26$u ? new java['lang']['String'](kxaih1, j26$u, vg7qce) + '' : kxaih1;
}
function gcev7g($rzj, r2djz6) {
    $rzj['currentElement'] ? $rzj['currentElement']['appendChild'](r2djz6) : $rzj['doc']['appendChild'](r2djz6);
}
gvsgc['prototype']['parseFromString'] = function (e7vqg, _ipb5) {
    var u$r26j = this['options'],
        pibx5 = new gxaip5(),
        sc8gql = u$r26j['domBuilder'] || new gcgsv7q(),
        _i0bp = u$r26j['errorHandler'],
        xawhk = u$r26j['locator'],
        xbpa = u$r26j['xmlns'] || {},
        zdt4 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return xawhk && sc8gql['setDocumentLocator'](xawhk), pibx5['errorHandler'] = gzd342o(_i0bp, sc8gql, xawhk), pibx5['domBuilder'] = u$r26j['domBuilder'] || sc8gql, /\/x?html?$/['test'](_ipb5) && (zdt4['nbsp'] = '\u00a0', zdt4['copy'] = '©', xbpa[''] = 'http://www.w3.org/1999/xhtml'), xbpa['xml'] = xbpa['xml'] || 'http://www.w3.org/XML/1998/namespace', e7vqg ? pibx5['parse'](e7vqg, xbpa, zdt4) : pibx5['errorHandler']['error']('invalid doc source'), sc8gql['doc'];
}, gcgsv7q['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gxib()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (z6j2dr, z4d2o3, vgqc7s, p5f) {
        var gs8l9c = this['doc'],
            dr6j = gs8l9c['createElementNS'](z6j2dr, vgqc7s || z4d2o3),
            ywk7e = p5f['length'];
        gcev7g(this, dr6j), this['currentElement'] = dr6j, this['locator'] && gt_o3f4(this['locator'], dr6j);
        for (var cqvsg7 = 0x0; ywk7e > cqvsg7; cqvsg7++) {
            var z6j2dr = p5f['getURI'](cqvsg7),
                qwev7y = p5f['getValue'](cqvsg7),
                vgqc7s = p5f['getQName'](cqvsg7),
                rz2o = gs8l9c['createAttributeNS'](z6j2dr, vgqc7s);
            this['locator'] && gt_o3f4(p5f['getLocator'](cqvsg7), rz2o), rz2o['value'] = rz2o['nodeValue'] = qwev7y, dr6j['setAttributeNode'](rz2o);
        }
    },
    'endElement': function () {
        {
            var xkwhy = this['currentElement'];
            xkwhy['tagName'];
        }
        this['currentElement'] = xkwhy['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (rzjd6, kwaxh) {
        var ewhy = this['doc']['createProcessingInstruction'](rzjd6, kwaxh);
        this['locator'] && gt_o3f4(this['locator'], ewhy), gcev7g(this, ewhy);
    },
    'ignorableWhitespace': function () {},
    'characters': function (jr$2z) {
        if (jr$2z = gfdot34['apply'](this, arguments)) {
            if (this['cdata']) var vwyeq7 = this['doc']['createCDATASection'](jr$2z);else var vwyeq7 = this['doc']['createTextNode'](jr$2z);
            this['currentElement'] ? this['currentElement']['appendChild'](vwyeq7) : /^\s*$/['test'](jr$2z) && this['doc']['appendChild'](vwyeq7), this['locator'] && gt_o3f4(this['locator'], vwyeq7);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (heky) {
        (this['locator'] = heky) && (heky['lineNumber'] = 0x0);
    },
    'comment': function (ah1xkw) {
        ah1xkw = gfdot34['apply'](this, arguments);
        var xk1aih = this['doc']['createComment'](ah1xkw);
        this['locator'] && gt_o3f4(this['locator'], xk1aih), gcev7g(this, xk1aih);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (gcls8, wyhe1k, r$2u) {
        var zd6j2r = this['doc']['implementation'];
        if (zd6j2r && zd6j2r['createDocumentType']) {
            var xa51i = zd6j2r['createDocumentType'](gcls8, wyhe1k, r$2u);
            this['locator'] && gt_o3f4(this['locator'], xa51i), gcev7g(this, xa51i);
        }
    },
    'warning': function (t4_03) {
        console['warn']('[xmldom warning]\t' + t4_03, gpi5xa(this['locator']));
    },
    'error': function (xh5) {
        console['error']('[xmldom error]\t' + xh5, gpi5xa(this['locator']));
    },
    'fatalError': function (s9l8) {
        throw console['error']('[xmldom fatalError]\t' + s9l8, gpi5xa(this['locator'])), s9l8;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (t3f_4) {
    gcgsv7q['prototype'][t3f_4] = function () {
        return null;
    };
});
var gxaip5 = require('./gggsax')['XMLReader'],
    gxib = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gvsgc;