var J = wx.h$;
function govjnci(fdh4_e) {
    this['options'] = fdh4_e || { 'locator': {} };
}
function gm6wta7(gl9q$, tz6p7, b4) {
    function g0xk$(z16ptm) {
        var $i0kx = gl9q$[z16ptm];
        !$i0kx && _hd8fe && ($i0kx = 0x2 == gl9q$['length'] ? function (_8hd) {
            gl9q$(z16ptm, _8hd);
        } : gl9q$), _he8d[z16ptm] = $i0kx && function (gqx$0k) {
            $i0kx('[xmldom ' + z16ptm + ']\t' + gqx$0k + gzpm16(b4));
        } || function () {};
    }
    if (!gl9q$) {
        if (tz6p7 instanceof gp6tz1m) return tz6p7;
        gl9q$ = tz6p7;
    }
    var _he8d = {},
        _hd8fe = gl9q$ instanceof Function;
    return b4 = b4 || {}, g0xk$('warning'), g0xk$('error'), g0xk$('fatalError'), _he8d;
}
function gp6tz1m() {
    this['cdata'] = !0x1;
}
function guh54ed(q$0lx, s8wr32) {
    s8wr32['lineNumber'] = q$0lx['lineNumber'], s8wr32['columnNumber'] = q$0lx['columnNumber'];
}
function gzpm16(de5ub4) {
    return de5ub4 ? '\x0a@' + (de5ub4['systemId'] || '') + '#[line:' + de5ub4['lineNumber'] + ',col:' + de5ub4['columnNumber'] + ']' : void 0x0;
}
function gq91lgy(l9zyp, p6zt19, f4eh_) {
    return 'string' == typeof l9zyp ? l9zyp['substr'](p6zt19, f4eh_) : l9zyp['length'] >= p6zt19 + f4eh_ || p6zt19 ? new java['lang']['String'](l9zyp, p6zt19, f4eh_) + '' : l9zyp;
}
function glq$x0(_fr3s, war372) {
    _fr3s['currentElement'] ? _fr3s['currentElement']['appendChild'](war372) : _fr3s['doc']['appendChild'](war372);
}
govjnci['prototype']['parseFromString'] = function (f4heu, zyql) {
    var ehd8 = this['options'],
        ptma67 = new g$kgxq(),
        w2r83 = ehd8['domBuilder'] || new gp6tz1m(),
        mzt1 = ehd8['errorHandler'],
        lzy1q = ehd8['locator'],
        yqxg = ehd8['xmlns'] || {},
        z61t = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return lzy1q && w2r83['setDocumentLocator'](lzy1q), ptma67['errorHandler'] = gm6wta7(mzt1, w2r83, lzy1q), ptma67['domBuilder'] = ehd8['domBuilder'] || w2r83, /\/x?html?$/['test'](zyql) && (z61t['nbsp'] = '\u00a0', z61t['copy'] = '©', yqxg[''] = 'http://www.w3.org/1999/xhtml'), yqxg['xml'] = yqxg['xml'] || 'http://www.w3.org/XML/1998/namespace', f4heu ? ptma67['parse'](f4heu, yqxg, z61t) : ptma67['errorHandler']['error']('invalid doc source'), w2r83['doc'];
}, gp6tz1m['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gube5d4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (a2s3, $l9ygq, lg9qy$, l19yq) {
        var cnjvoi = this['doc'],
            ed5b4 = cnjvoi['createElementNS'](a2s3, lg9qy$ || $l9ygq),
            ufdh4e = l19yq['length'];
        glq$x0(this, ed5b4), this['currentElement'] = ed5b4, this['locator'] && guh54ed(this['locator'], ed5b4);
        for (var tma6p = 0x0; ufdh4e > tma6p; tma6p++) {
            var a2s3 = l19yq['getURI'](tma6p),
                a6pm7t = l19yq['getValue'](tma6p),
                lg9qy$ = l19yq['getQName'](tma6p),
                x$0lg = cnjvoi['createAttributeNS'](a2s3, lg9qy$);
            this['locator'] && guh54ed(l19yq['getLocator'](tma6p), x$0lg), x$0lg['value'] = x$0lg['nodeValue'] = a6pm7t, ed5b4['setAttributeNode'](x$0lg);
        }
    },
    'endElement': function () {
        {
            var d54b = this['currentElement'];
            d54b['tagName'];
        }
        this['currentElement'] = d54b['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (qzl91, qyg$x) {
        var h5u4 = this['doc']['createProcessingInstruction'](qzl91, qyg$x);
        this['locator'] && guh54ed(this['locator'], h5u4), glq$x0(this, h5u4);
    },
    'ignorableWhitespace': function () {},
    'characters': function (f8_rs3) {
        if (f8_rs3 = gq91lgy['apply'](this, arguments)) {
            if (this['cdata']) var ocinj = this['doc']['createCDATASection'](f8_rs3);else var ocinj = this['doc']['createTextNode'](f8_rs3);
            this['currentElement'] ? this['currentElement']['appendChild'](ocinj) : /^\s*$/['test'](f8_rs3) && this['doc']['appendChild'](ocinj), this['locator'] && guh54ed(this['locator'], ocinj);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (y691pz) {
        (this['locator'] = y691pz) && (y691pz['lineNumber'] = 0x0);
    },
    'comment': function (vi0$kx) {
        vi0$kx = gq91lgy['apply'](this, arguments);
        var h8_efs = this['doc']['createComment'](vi0$kx);
        this['locator'] && guh54ed(this['locator'], h8_efs), glq$x0(this, h8_efs);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (p1zt69, p69tz, ygl$q) {
        var ovx = this['doc']['implementation'];
        if (ovx && ovx['createDocumentType']) {
            var zy1p = ovx['createDocumentType'](p1zt69, p69tz, ygl$q);
            this['locator'] && guh54ed(this['locator'], zy1p), glq$x0(this, zy1p);
        }
    },
    'warning': function (s83_rf) {
        console['warn']('[xmldom warning]\t' + s83_rf, gzpm16(this['locator']));
    },
    'error': function (sarw32) {
        console['error']('[xmldom error]\t' + sarw32, gzpm16(this['locator']));
    },
    'fatalError': function (gk$vx) {
        throw console['error']('[xmldom fatalError]\t' + gk$vx, gzpm16(this['locator'])), gk$vx;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (u5eh) {
    gp6tz1m['prototype'][u5eh] = function () {
        return null;
    };
});
var g$kgxq = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gube5d4 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = govjnci;