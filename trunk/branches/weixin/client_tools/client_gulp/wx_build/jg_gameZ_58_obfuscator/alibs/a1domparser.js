var c = wx.$a;
function gyob0$c(jhnvx) {
    this['options'] = jhnvx || { 'locator': {} };
}
function gkv6hz(cb4o, oyc$0, dz6kqh) {
    function o_y0c4(_y40eo) {
        var rp735 = cb4o[_y40eo];
        !rp735 && sxhj && (rp735 = 0x2 == cb4o['length'] ? function (rd85tq) {
            cb4o(_y40eo, rd85tq);
        } : cb4o), $alcbm[_y40eo] = rp735 && function (_u4we) {
            rp735('[xmldom ' + _y40eo + ']\t' + _u4we + gqt85rd(dz6kqh));
        } || function () {};
    }
    if (!cb4o) {
        if (oyc$0 instanceof glabc$) return oyc$0;
        cb4o = oyc$0;
    }
    var $alcbm = {},
        sxhj = cb4o instanceof Function;
    return dz6kqh = dz6kqh || {}, o_y0c4('warning'), o_y0c4('error'), o_y0c4('fatalError'), $alcbm;
}
function glabc$() {
    this['cdata'] = !0x1;
}
function gyo0_4(geu2, dk6q8t) {
    dk6q8t['lineNumber'] = geu2['lineNumber'], dk6q8t['columnNumber'] = geu2['columnNumber'];
}
function gqt85rd(fjnx1s) {
    return fjnx1s ? '\x0a@' + (fjnx1s['systemId'] || '') + '#[line:' + fjnx1s['lineNumber'] + ',col:' + fjnx1s['columnNumber'] + ']' : void 0x0;
}
function glbc$y0(x2f1ug, x1sjn, t5387r) {
    return 'string' == typeof x2f1ug ? x2f1ug['substr'](x1sjn, t5387r) : x2f1ug['length'] >= x1sjn + t5387r || x1sjn ? new java['lang']['String'](x2f1ug, x1sjn, t5387r) + '' : x2f1ug;
}
function g$oyb0(geu1w, xsj21) {
    geu1w['currentElement'] ? geu1w['currentElement']['appendChild'](xsj21) : geu1w['doc']['appendChild'](xsj21);
}
gyob0$c['prototype']['parseFromString'] = function (njszh, jnvsxh) {
    var _wou = this['options'],
        sfj1x = new grt68q(),
        r537i = _wou['domBuilder'] || new glabc$(),
        ue2g = _wou['errorHandler'],
        eguw21 = _wou['locator'],
        by04 = _wou['xmlns'] || {},
        bo04cy = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return eguw21 && r537i['setDocumentLocator'](eguw21), sfj1x['errorHandler'] = gkv6hz(ue2g, r537i, eguw21), sfj1x['domBuilder'] = _wou['domBuilder'] || r537i, /\/x?html?$/['test'](jnvsxh) && (bo04cy['nbsp'] = '\u00a0', bo04cy['copy'] = '©', by04[''] = 'http://www.w3.org/1999/xhtml'), by04['xml'] = by04['xml'] || 'http://www.w3.org/XML/1998/namespace', njszh ? sfj1x['parse'](njszh, by04, bo04cy) : sfj1x['errorHandler']['error']('invalid doc source'), r537i['doc'];
}, glabc$['prototype'] = {
    'startDocument': function () {
        this['doc'] = new grt6d()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (yoe0_4, svfxnj, zd8k6, r8t57q) {
        var $0clb = this['doc'],
            y4e0o_ = $0clb['createElementNS'](yoe0_4, zd8k6 || svfxnj),
            e21guw = r8t57q['length'];
        g$oyb0(this, y4e0o_), this['currentElement'] = y4e0o_, this['locator'] && gyo0_4(this['locator'], y4e0o_);
        for (var yb$l = 0x0; e21guw > yb$l; yb$l++) {
            var yoe0_4 = r8t57q['getURI'](yb$l),
                qr8t7 = r8t57q['getValue'](yb$l),
                zd8k6 = r8t57q['getQName'](yb$l),
                jsfvn = $0clb['createAttributeNS'](yoe0_4, zd8k6);
            this['locator'] && gyo0_4(r8t57q['getLocator'](yb$l), jsfvn), jsfvn['value'] = jsfvn['nodeValue'] = qr8t7, y4e0o_['setAttributeNode'](jsfvn);
        }
    },
    'endElement': function () {
        {
            var kqdz6h = this['currentElement'];
            kqdz6h['tagName'];
        }
        this['currentElement'] = kqdz6h['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (zdv6, o_4e0y) {
        var hnxsjv = this['doc']['createProcessingInstruction'](zdv6, o_4e0y);
        this['locator'] && gyo0_4(this['locator'], hnxsjv), g$oyb0(this, hnxsjv);
    },
    'ignorableWhitespace': function () {},
    'characters': function (nfx1js) {
        if (nfx1js = glbc$y0['apply'](this, arguments)) {
            if (this['cdata']) var o_y04e = this['doc']['createCDATASection'](nfx1js);else var o_y04e = this['doc']['createTextNode'](nfx1js);
            this['currentElement'] ? this['currentElement']['appendChild'](o_y04e) : /^\s*$/['test'](nfx1js) && this['doc']['appendChild'](o_y04e), this['locator'] && gyo0_4(this['locator'], o_y04e);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (t7rp3) {
        (this['locator'] = t7rp3) && (t7rp3['lineNumber'] = 0x0);
    },
    'comment': function (nhjsxv) {
        nhjsxv = glbc$y0['apply'](this, arguments);
        var y0ob4 = this['doc']['createComment'](nhjsxv);
        this['locator'] && gyo0_4(this['locator'], y0ob4), g$oyb0(this, y0ob4);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (c0yb4o, ba$l9, ptr573) {
        var yl$b = this['doc']['implementation'];
        if (yl$b && yl$b['createDocumentType']) {
            var oc4y0 = yl$b['createDocumentType'](c0yb4o, ba$l9, ptr573);
            this['locator'] && gyo0_4(this['locator'], oc4y0), g$oyb0(this, oc4y0);
        }
    },
    'warning': function (f1gx2) {
        console['warn']('[xmldom warning]\t' + f1gx2, gqt85rd(this['locator']));
    },
    'error': function (b$y) {
        console['error']('[xmldom error]\t' + b$y, gqt85rd(this['locator']));
    },
    'fatalError': function (cyo) {
        throw console['error']('[xmldom fatalError]\t' + cyo, gqt85rd(this['locator'])), cyo;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r3i7p) {
    glabc$['prototype'][r3i7p] = function () {
        return null;
    };
});
var grt68q = require('./a1sax')['XMLReader'],
    grt6d = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gyob0$c;