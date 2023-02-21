var f1 = wx.f$;
function _zycd3r(j7vgiz) {
    this['options'] = j7vgiz || { 'locator': {} };
}
function _zgeji(odyre, n4wap, twsq8m) {
    function zjogi(ldy$3) {
        var msqtw = odyre[ldy$3];
        !msqtw && npau84 && (msqtw = 0x2 == odyre['length'] ? function (uka4) {
            odyre(ldy$3, uka4);
        } : odyre), iojvge[ldy$3] = msqtw && function (crly3) {
            msqtw('[xmldom ' + ldy$3 + ']\t' + crly3 + _zz2b657(twsq8m));
        } || function () {};
    }
    if (!odyre) {
        if (n4wap instanceof _zx015f2) return n4wap;
        odyre = n4wap;
    }
    var iojvge = {},
        npau84 = odyre instanceof Function;
    return twsq8m = twsq8m || {}, zjogi('warning'), zjogi('error'), zjogi('fatalError'), iojvge;
}
function _zx015f2() {
    this['cdata'] = !0x1;
}
function _zq1h9s(pw8qms, x1f9) {
    x1f9['lineNumber'] = pw8qms['lineNumber'], x1f9['columnNumber'] = pw8qms['columnNumber'];
}
function _zz2b657($d3_lr) {
    return $d3_lr ? '\x0a@' + ($d3_lr['systemId'] || '') + '#[line:' + $d3_lr['lineNumber'] + ',col:' + $d3_lr['columnNumber'] + ']' : void 0x0;
}
function _zwm8a(wq8tms, bvzg67, eodcr) {
    return 'string' == typeof wq8tms ? wq8tms['substr'](bvzg67, eodcr) : wq8tms['length'] >= bvzg67 + eodcr || bvzg67 ? new java['lang']['String'](wq8tms, bvzg67, eodcr) + '' : wq8tms;
}
function _zpwam(rdoey, fx0h19) {
    rdoey['currentElement'] ? rdoey['currentElement']['appendChild'](fx0h19) : rdoey['doc']['appendChild'](fx0h19);
}
_zycd3r['prototype']['parseFromString'] = function (tshm9, fth91x) {
    var txh9f1 = this['options'],
        vgijz7 = new _zyr3l$(),
        yrdeo = txh9f1['domBuilder'] || new _zx015f2(),
        np4a = txh9f1['errorHandler'],
        c3yrde = txh9f1['locator'],
        naw84 = txh9f1['xmlns'] || {},
        sm8w = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return c3yrde && yrdeo['setDocumentLocator'](c3yrde), vgijz7['errorHandler'] = _zgeji(np4a, yrdeo, c3yrde), vgijz7['domBuilder'] = txh9f1['domBuilder'] || yrdeo, /\/x?html?$/['test'](fth91x) && (sm8w['nbsp'] = '\u00a0', sm8w['copy'] = '©', naw84[''] = 'http://www.w3.org/1999/xhtml'), naw84['xml'] = naw84['xml'] || 'http://www.w3.org/XML/1998/namespace', tshm9 ? vgijz7['parse'](tshm9, naw84, sm8w) : vgijz7['errorHandler']['error']('invalid doc source'), yrdeo['doc'];
}, _zx015f2['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _zqp8ms()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (hsq19, a8nup4, viz7g, p4a8mw) {
        var tqwms8 = this['doc'],
            ejcyi = tqwms8['createElementNS'](hsq19, viz7g || a8nup4),
            xh109f = p4a8mw['length'];
        _zpwam(this, ejcyi), this['currentElement'] = ejcyi, this['locator'] && _zq1h9s(this['locator'], ejcyi);
        for (var y3rc = 0x0; xh109f > y3rc; y3rc++) {
            var hsq19 = p4a8mw['getURI'](y3rc),
                ivjog = p4a8mw['getValue'](y3rc),
                viz7g = p4a8mw['getQName'](y3rc),
                qmhws = tqwms8['createAttributeNS'](hsq19, viz7g);
            this['locator'] && _zq1h9s(p4a8mw['getLocator'](y3rc), qmhws), qmhws['value'] = qmhws['nodeValue'] = ivjog, ejcyi['setAttributeNode'](qmhws);
        }
    },
    'endElement': function () {
        {
            var b7z526 = this['currentElement'];
            b7z526['tagName'];
        }
        this['currentElement'] = b7z526['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (d$3rl_, bg7zvi) {
        var kp = this['doc']['createProcessingInstruction'](d$3rl_, bg7zvi);
        this['locator'] && _zq1h9s(this['locator'], kp), _zpwam(this, kp);
    },
    'ignorableWhitespace': function () {},
    'characters': function (sqwmt) {
        if (sqwmt = _zwm8a['apply'](this, arguments)) {
            if (this['cdata']) var x205f1 = this['doc']['createCDATASection'](sqwmt);else var x205f1 = this['doc']['createTextNode'](sqwmt);
            this['currentElement'] ? this['currentElement']['appendChild'](x205f1) : /^\s*$/['test'](sqwmt) && this['doc']['appendChild'](x205f1), this['locator'] && _zq1h9s(this['locator'], x205f1);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (am8pw) {
        (this['locator'] = am8pw) && (am8pw['lineNumber'] = 0x0);
    },
    'comment': function (f2605) {
        f2605 = _zwm8a['apply'](this, arguments);
        var sqmwht = this['doc']['createComment'](f2605);
        this['locator'] && _zq1h9s(this['locator'], sqmwht), _zpwam(this, sqmwht);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (oryc, ws8m, eyocij) {
        var yjceio = this['doc']['implementation'];
        if (yjceio && yjceio['createDocumentType']) {
            var d_l3$ = yjceio['createDocumentType'](oryc, ws8m, eyocij);
            this['locator'] && _zq1h9s(this['locator'], d_l3$), _zpwam(this, d_l3$);
        }
    },
    'warning': function (b560f) {
        console['warn']('[xmldom warning]\t' + b560f, _zz2b657(this['locator']));
    },
    'error': function (sqwmh) {
        console['error']('[xmldom error]\t' + sqwmh, _zz2b657(this['locator']));
    },
    'fatalError': function (dyrcl) {
        throw console['error']('[xmldom fatalError]\t' + dyrcl, _zz2b657(this['locator'])), dyrcl;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (eiyjoc) {
    _zx015f2['prototype'][eiyjoc] = function () {
        return null;
    };
});
var _zyr3l$ = require('./a3q3za')['XMLReader'],
    _zqp8ms = exports['DOMImplementation'] = require('./bocy')['DOMImplementation'];
exports['XMLSerializer'] = require('./bocy')['XMLSerializer'], exports['DOMParser'] = _zycd3r;