var b = wx.$e;
function ejuq3(cpoem) {
    this['options'] = cpoem || { 'locator': {} };
}
function edb8w(rxghtl, yzvr4, acmop) {
    function rxth(fzvyr) {
        var fvyr4 = rxghtl[fzvyr];
        !fvyr4 && grz && (fvyr4 = 0x2 == rxghtl['length'] ? function (hxt$) {
            rxghtl(fzvyr, hxt$);
        } : rxghtl), gxrhlt[fzvyr] = fvyr4 && function (zyrfh) {
            fvyr4('[xmldom ' + fzvyr + ']\t' + zyrfh + erzyvhf(acmop));
        } || function () {};
    }
    if (!rxghtl) {
        if (yzvr4 instanceof e_y7f) return yzvr4;
        rxghtl = yzvr4;
    }
    var gxrhlt = {},
        grz = rxghtl instanceof Function;
    return acmop = acmop || {}, rxth('warning'), rxth('error'), rxth('fatalError'), gxrhlt;
}
function e_y7f() {
    this['cdata'] = !0x1;
}
function e_am4c7(rhlyf, n9kuq) {
    n9kuq['lineNumber'] = rhlyf['lineNumber'], n9kuq['columnNumber'] = rhlyf['columnNumber'];
}
function erzyvhf(o_ac7m) {
    return o_ac7m ? '\x0a@' + (o_ac7m['systemId'] || '') + '#[line:' + o_ac7m['lineNumber'] + ',col:' + o_ac7m['columnNumber'] + ']' : void 0x0;
}
function ezrlgh(xrltgh, i3q$x, uns39q) {
    return 'string' == typeof xrltgh ? xrltgh['substr'](i3q$x, uns39q) : xrltgh['length'] >= i3q$x + uns39q || i3q$x ? new java['lang']['String'](xrltgh, i3q$x, uns39q) + '' : xrltgh;
}
function ej$i3nq(iq3x$, w0bd5) {
    iq3x$['currentElement'] ? iq3x$['currentElement']['appendChild'](w0bd5) : iq3x$['doc']['appendChild'](w0bd5);
}
ejuq3['prototype']['parseFromString'] = function ($q, jtg$i) {
    var f7v = this['options'],
        _74vaf = new eyz4_vf(),
        ksnq9u = f7v['domBuilder'] || new e_y7f(),
        am7v_ = f7v['errorHandler'],
        y4fvzr = f7v['locator'],
        k6d9b0 = f7v['xmlns'] || {},
        uq9ns = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return y4fvzr && ksnq9u['setDocumentLocator'](y4fvzr), _74vaf['errorHandler'] = edb8w(am7v_, ksnq9u, y4fvzr), _74vaf['domBuilder'] = f7v['domBuilder'] || ksnq9u, /\/x?html?$/['test'](jtg$i) && (uq9ns['nbsp'] = '\u00a0', uq9ns['copy'] = '©', k6d9b0[''] = 'http://www.w3.org/1999/xhtml'), k6d9b0['xml'] = k6d9b0['xml'] || 'http://www.w3.org/XML/1998/namespace', $q ? _74vaf['parse']($q, k6d9b0, uq9ns) : _74vaf['errorHandler']['error']('invalid doc source'), ksnq9u['doc'];
}, e_y7f['prototype'] = {
    'startDocument': function () {
        this['doc'] = new efyz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (n3ujsq, ujsn3q, hfzvyr, w5b8d0) {
        var k6b9 = this['doc'],
            y4_v7f = k6b9['createElementNS'](n3ujsq, hfzvyr || ujsn3q),
            qn3js = w5b8d0['length'];
        ej$i3nq(this, y4_v7f), this['currentElement'] = y4_v7f, this['locator'] && e_am4c7(this['locator'], y4_v7f);
        for (var xthg$l = 0x0; qn3js > xthg$l; xthg$l++) {
            var n3ujsq = w5b8d0['getURI'](xthg$l),
                zv_4 = w5b8d0['getValue'](xthg$l),
                hfzvyr = w5b8d0['getQName'](xthg$l),
                tijx$g = k6b9['createAttributeNS'](n3ujsq, hfzvyr);
            this['locator'] && e_am4c7(w5b8d0['getLocator'](xthg$l), tijx$g), tijx$g['value'] = tijx$g['nodeValue'] = zv_4, y4_v7f['setAttributeNode'](tijx$g);
        }
    },
    'endElement': function () {
        {
            var k96 = this['currentElement'];
            k96['tagName'];
        }
        this['currentElement'] = k96['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (b0k96s, s96unk) {
        var jqx = this['doc']['createProcessingInstruction'](b0k96s, s96unk);
        this['locator'] && e_am4c7(this['locator'], jqx), ej$i3nq(this, jqx);
    },
    'ignorableWhitespace': function () {},
    'characters': function (lhfry) {
        if (lhfry = ezrlgh['apply'](this, arguments)) {
            if (this['cdata']) var rtzhg = this['doc']['createCDATASection'](lhfry);else var rtzhg = this['doc']['createTextNode'](lhfry);
            this['currentElement'] ? this['currentElement']['appendChild'](rtzhg) : /^\s*$/['test'](lhfry) && this['doc']['appendChild'](rtzhg), this['locator'] && e_am4c7(this['locator'], rtzhg);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (jgit$) {
        (this['locator'] = jgit$) && (jgit$['lineNumber'] = 0x0);
    },
    'comment': function (avf47) {
        avf47 = ezrlgh['apply'](this, arguments);
        var ghtxrl = this['doc']['createComment'](avf47);
        this['locator'] && e_am4c7(this['locator'], ghtxrl), ej$i3nq(this, ghtxrl);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (ac7om_, hyrfzl, _acom7) {
        var amopc7 = this['doc']['implementation'];
        if (amopc7 && amopc7['createDocumentType']) {
            var j3gx$i = amopc7['createDocumentType'](ac7om_, hyrfzl, _acom7);
            this['locator'] && e_am4c7(this['locator'], j3gx$i), ej$i3nq(this, j3gx$i);
        }
    },
    'warning': function (hxltg) {
        console['warn']('[xmldom warning]\t' + hxltg, erzyvhf(this['locator']));
    },
    'error': function (uks9nq) {
        console['error']('[xmldom error]\t' + uks9nq, erzyvhf(this['locator']));
    },
    'fatalError': function (s96ukn) {
        throw console['error']('[xmldom fatalError]\t' + s96ukn, erzyvhf(this['locator'])), s96ukn;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ukb) {
    e_y7f['prototype'][ukb] = function () {
        return null;
    };
});
var eyz4_vf = require('./eeesax')['XMLReader'],
    efyz = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ejuq3;