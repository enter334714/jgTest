var J = wx.h$;
function gvqr5oy(y7xjr) {
    this['options'] = y7xjr || { 'locator': {} };
}
function ga43ml(kqgbd, l4a3u1, l4m3a) {
    function vrixj(n4i) {
        var i13xn = kqgbd[n4i];
        !i13xn && zp_2e && (i13xn = 0x2 == kqgbd['length'] ? function (hcz6t8) {
            kqgbd(n4i, hcz6t8);
        } : kqgbd), niu31[n4i] = i13xn && function (ni43) {
            i13xn('[xmldom ' + n4i + ']\t' + ni43 + g_ew(l4m3a));
        } || function () {};
    }
    if (!kqgbd) {
        if (l4a3u1 instanceof gj1n) return l4a3u1;
        kqgbd = l4a3u1;
    }
    var niu31 = {},
        zp_2e = kqgbd instanceof Function;
    return l4m3a = l4m3a || {}, vrixj('warning'), vrixj('error'), vrixj('fatalError'), niu31;
}
function gj1n() {
    this['cdata'] = !0x1;
}
function gpezw_2(xvin, n1a) {
    n1a['lineNumber'] = xvin['lineNumber'], n1a['columnNumber'] = xvin['columnNumber'];
}
function g_ew(fw$92_) {
    return fw$92_ ? '\x0a@' + (fw$92_['systemId'] || '') + '#[line:' + fw$92_['lineNumber'] + ',col:' + fw$92_['columnNumber'] + ']' : void 0x0;
}
function gw2_zp(vijx7r, $_f9w, f_29p) {
    return 'string' == typeof vijx7r ? vijx7r['substr']($_f9w, f_29p) : vijx7r['length'] >= $_f9w + f_29p || $_f9w ? new java['lang']['String'](vijx7r, $_f9w, f_29p) + '' : vijx7r;
}
function gbkgqd(kdg0, e92pw) {
    kdg0['currentElement'] ? kdg0['currentElement']['appendChild'](e92pw) : kdg0['doc']['appendChild'](e92pw);
}
gvqr5oy['prototype']['parseFromString'] = function (f9wp, wf_29) {
    var oryv7j = this['options'],
        vrj7i = new gv7ory(),
        epz = oryv7j['domBuilder'] || new gj1n(),
        g6d = oryv7j['errorHandler'],
        t8hzc = oryv7j['locator'],
        gdbq0k = oryv7j['xmlns'] || {},
        k8c6dg = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return t8hzc && epz['setDocumentLocator'](t8hzc), vrj7i['errorHandler'] = ga43ml(g6d, epz, t8hzc), vrj7i['domBuilder'] = oryv7j['domBuilder'] || epz, /\/x?html?$/['test'](wf_29) && (k8c6dg['nbsp'] = '\u00a0', k8c6dg['copy'] = '©', gdbq0k[''] = 'http://www.w3.org/1999/xhtml'), gdbq0k['xml'] = gdbq0k['xml'] || 'http://www.w3.org/XML/1998/namespace', f9wp ? vrj7i['parse'](f9wp, gdbq0k, k8c6dg) : vrj7i['errorHandler']['error']('invalid doc source'), epz['doc'];
}, gj1n['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gi7nxj1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (y7jor, x17n, kgd06b, x7njvi) {
        var chtd86 = this['doc'],
            t86hdc = chtd86['createElementNS'](y7jor, kgd06b || x17n),
            ryq5ov = x7njvi['length'];
        gbkgqd(this, t86hdc), this['currentElement'] = t86hdc, this['locator'] && gpezw_2(this['locator'], t86hdc);
        for (var pchze = 0x0; ryq5ov > pchze; pchze++) {
            var y7jor = x7njvi['getURI'](pchze),
                jovr5y = x7njvi['getValue'](pchze),
                kgd06b = x7njvi['getQName'](pchze),
                yorbq5 = chtd86['createAttributeNS'](y7jor, kgd06b);
            this['locator'] && gpezw_2(x7njvi['getLocator'](pchze), yorbq5), yorbq5['value'] = yorbq5['nodeValue'] = jovr5y, t86hdc['setAttributeNode'](yorbq5);
        }
    },
    'endElement': function () {
        {
            var xjrv7i = this['currentElement'];
            xjrv7i['tagName'];
        }
        this['currentElement'] = xjrv7i['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (au3l4m, voyjr7) {
        var pthe_z = this['doc']['createProcessingInstruction'](au3l4m, voyjr7);
        this['locator'] && gpezw_2(this['locator'], pthe_z), gbkgqd(this, pthe_z);
    },
    'ignorableWhitespace': function () {},
    'characters': function (ojry7) {
        if (ojry7 = gw2_zp['apply'](this, arguments)) {
            if (this['cdata']) var nu341i = this['doc']['createCDATASection'](ojry7);else var nu341i = this['doc']['createTextNode'](ojry7);
            this['currentElement'] ? this['currentElement']['appendChild'](nu341i) : /^\s*$/['test'](ojry7) && this['doc']['appendChild'](nu341i), this['locator'] && gpezw_2(this['locator'], nu341i);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (r5qvoy) {
        (this['locator'] = r5qvoy) && (r5qvoy['lineNumber'] = 0x0);
    },
    'comment': function (xvn7ji) {
        xvn7ji = gw2_zp['apply'](this, arguments);
        var p2f_9 = this['doc']['createComment'](xvn7ji);
        this['locator'] && gpezw_2(this['locator'], p2f_9), gbkgqd(this, p2f_9);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (ws9$2f, ovr7y, gqbk5) {
        var ze8ct = this['doc']['implementation'];
        if (ze8ct && ze8ct['createDocumentType']) {
            var q0b5k = ze8ct['createDocumentType'](ws9$2f, ovr7y, gqbk5);
            this['locator'] && gpezw_2(this['locator'], q0b5k), gbkgqd(this, q0b5k);
        }
    },
    'warning': function (in7jvx) {
        console['warn']('[xmldom warning]\t' + in7jvx, g_ew(this['locator']));
    },
    'error': function (heztcp) {
        console['error']('[xmldom error]\t' + heztcp, g_ew(this['locator']));
    },
    'fatalError': function (vy7rjo) {
        throw console['error']('[xmldom fatalError]\t' + vy7rjo, g_ew(this['locator'])), vy7rjo;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ck8g6d) {
    gj1n['prototype'][ck8g6d] = function () {
        return null;
    };
});
var gv7ory = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gi7nxj1 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gvqr5oy;