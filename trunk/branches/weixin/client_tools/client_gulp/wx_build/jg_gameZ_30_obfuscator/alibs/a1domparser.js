var c = wx.$a;
function g$malb(nxvfs) {
    this['options'] = nxvfs || { 'locator': {} };
}
function gboy4(p35t7, pr7t, bmcal) {
    function y4ocb0(d6vkzh) {
        var clba = p35t7[d6vkzh];
        !clba && fg && (clba = 0x2 == p35t7['length'] ? function ($cabm) {
            p35t7(d6vkzh, $cabm);
        } : p35t7), kz68dq[d6vkzh] = clba && function (gf1u2) {
            clba('[xmldom ' + d6vkzh + ']\t' + gf1u2 + gq58r7(bmcal));
        } || function () {};
    }
    if (!p35t7) {
        if (pr7t instanceof guo4we) return pr7t;
        p35t7 = pr7t;
    }
    var kz68dq = {},
        fg = p35t7 instanceof Function;
    return bmcal = bmcal || {}, y4ocb0('warning'), y4ocb0('error'), y4ocb0('fatalError'), kz68dq;
}
function guo4we() {
    this['cdata'] = !0x1;
}
function gmlcb$y(k6q8t, gue21) {
    gue21['lineNumber'] = k6q8t['lineNumber'], gue21['columnNumber'] = k6q8t['columnNumber'];
}
function gq58r7(vznh6) {
    return vznh6 ? '\x0a@' + (vznh6['systemId'] || '') + '#[line:' + vznh6['lineNumber'] + ',col:' + vznh6['columnNumber'] + ']' : void 0x0;
}
function gg1fx2(kd6zh, uf2x1, kdzv6) {
    return 'string' == typeof kd6zh ? kd6zh['substr'](uf2x1, kdzv6) : kd6zh['length'] >= uf2x1 + kdzv6 || uf2x1 ? new java['lang']['String'](kd6zh, uf2x1, kdzv6) + '' : kd6zh;
}
function gzvhsjn(r6q8, gwue2_) {
    r6q8['currentElement'] ? r6q8['currentElement']['appendChild'](gwue2_) : r6q8['doc']['appendChild'](gwue2_);
}
g$malb['prototype']['parseFromString'] = function (jfs2, mcy$) {
    var vshjn = this['options'],
        clyb$m = new gvjzkh(),
        cbl$ym = vshjn['domBuilder'] || new guo4we(),
        lb0$c = vshjn['errorHandler'],
        t6r8d = vshjn['locator'],
        $mbcal = vshjn['xmlns'] || {},
        clmyb = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return t6r8d && cbl$ym['setDocumentLocator'](t6r8d), clyb$m['errorHandler'] = gboy4(lb0$c, cbl$ym, t6r8d), clyb$m['domBuilder'] = vshjn['domBuilder'] || cbl$ym, /\/x?html?$/['test'](mcy$) && (clmyb['nbsp'] = '\u00a0', clmyb['copy'] = '©', $mbcal[''] = 'http://www.w3.org/1999/xhtml'), $mbcal['xml'] = $mbcal['xml'] || 'http://www.w3.org/XML/1998/namespace', jfs2 ? clyb$m['parse'](jfs2, $mbcal, clmyb) : clyb$m['errorHandler']['error']('invalid doc source'), cbl$ym['doc'];
}, guo4we['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ghvzj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (gx1fs, p35ri, ufx21, fsx2g1) {
        var obc$y = this['doc'],
            fxsv = obc$y['createElementNS'](gx1fs, ufx21 || p35ri),
            nxjfvs = fsx2g1['length'];
        gzvhsjn(this, fxsv), this['currentElement'] = fxsv, this['locator'] && gmlcb$y(this['locator'], fxsv);
        for (var pri7 = 0x0; nxjfvs > pri7; pri7++) {
            var gx1fs = fsx2g1['getURI'](pri7),
                xnjs1 = fsx2g1['getValue'](pri7),
                ufx21 = fsx2g1['getQName'](pri7),
                vxnj = obc$y['createAttributeNS'](gx1fs, ufx21);
            this['locator'] && gmlcb$y(fsx2g1['getLocator'](pri7), vxnj), vxnj['value'] = vxnj['nodeValue'] = xnjs1, fxsv['setAttributeNode'](vxnj);
        }
    },
    'endElement': function () {
        {
            var ybc0$o = this['currentElement'];
            ybc0$o['tagName'];
        }
        this['currentElement'] = ybc0$o['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (kjvhnz, o4uwe_) {
        var y0e4 = this['doc']['createProcessingInstruction'](kjvhnz, o4uwe_);
        this['locator'] && gmlcb$y(this['locator'], y0e4), gzvhsjn(this, y0e4);
    },
    'ignorableWhitespace': function () {},
    'characters': function (wuoe4) {
        if (wuoe4 = gg1fx2['apply'](this, arguments)) {
            if (this['cdata']) var vz6kd = this['doc']['createCDATASection'](wuoe4);else var vz6kd = this['doc']['createTextNode'](wuoe4);
            this['currentElement'] ? this['currentElement']['appendChild'](vz6kd) : /^\s*$/['test'](wuoe4) && this['doc']['appendChild'](vz6kd), this['locator'] && gmlcb$y(this['locator'], vz6kd);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (gue4_) {
        (this['locator'] = gue4_) && (gue4_['lineNumber'] = 0x0);
    },
    'comment': function (vdzh) {
        vdzh = gg1fx2['apply'](this, arguments);
        var o0b$y = this['doc']['createComment'](vdzh);
        this['locator'] && gmlcb$y(this['locator'], o0b$y), gzvhsjn(this, o0b$y);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (hv6zn, c_4o0, nzjhvk) {
        var vnzjhs = this['doc']['implementation'];
        if (vnzjhs && vnzjhs['createDocumentType']) {
            var nv6zhk = vnzjhs['createDocumentType'](hv6zn, c_4o0, nzjhvk);
            this['locator'] && gmlcb$y(this['locator'], nv6zhk), gzvhsjn(this, nv6zhk);
        }
    },
    'warning': function (e4uwg_) {
        console['warn']('[xmldom warning]\t' + e4uwg_, gq58r7(this['locator']));
    },
    'error': function (tp37) {
        console['error']('[xmldom error]\t' + tp37, gq58r7(this['locator']));
    },
    'fatalError': function (f2guw) {
        throw console['error']('[xmldom fatalError]\t' + f2guw, gq58r7(this['locator'])), f2guw;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r7i35p) {
    guo4we['prototype'][r7i35p] = function () {
        return null;
    };
});
var gvjzkh = require('./a1sax')['XMLReader'],
    ghvzj = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = g$malb;