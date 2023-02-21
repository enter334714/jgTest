var c = wx.$a;
function gr8tq5d($yblc) {
    this['options'] = $yblc || { 'locator': {} };
}
function gy_oc4(vfjxns, $byml, c$ablm) {
    function uow4(fxvjns) {
        var $9blm = vfjxns[fxvjns];
        !$9blm && hq6kzd && ($9blm = 0x2 == vfjxns['length'] ? function (lacm) {
            vfjxns(fxvjns, lacm);
        } : vfjxns), t587[fxvjns] = $9blm && function (ptr753) {
            $9blm('[xmldom ' + fxvjns + ']\t' + ptr753 + gvshzjn(c$ablm));
        } || function () {};
    }
    if (!vfjxns) {
        if ($byml instanceof geu_4g) return $byml;
        vfjxns = $byml;
    }
    var t587 = {},
        hq6kzd = vfjxns instanceof Function;
    return c$ablm = c$ablm || {}, uow4('warning'), uow4('error'), uow4('fatalError'), t587;
}
function geu_4g() {
    this['cdata'] = !0x1;
}
function gwu_o(zq6dkh, byo40c) {
    byo40c['lineNumber'] = zq6dkh['lineNumber'], byo40c['columnNumber'] = zq6dkh['columnNumber'];
}
function gvshzjn(o0c4_) {
    return o0c4_ ? '\x0a@' + (o0c4_['systemId'] || '') + '#[line:' + o0c4_['lineNumber'] + ',col:' + o0c4_['columnNumber'] + ']' : void 0x0;
}
function gfnvsjx(ma$bl9, r53p7t, hsn) {
    return 'string' == typeof ma$bl9 ? ma$bl9['substr'](r53p7t, hsn) : ma$bl9['length'] >= r53p7t + hsn || r53p7t ? new java['lang']['String'](ma$bl9, r53p7t, hsn) + '' : ma$bl9;
}
function go0c4b(vxjsnh, jsnx1) {
    vxjsnh['currentElement'] ? vxjsnh['currentElement']['appendChild'](jsnx1) : vxjsnh['doc']['appendChild'](jsnx1);
}
gr8tq5d['prototype']['parseFromString'] = function (sgx12, qr7t5) {
    var _we2ug = this['options'],
        wg_4 = new gf2x1u(),
        z6hkd = _we2ug['domBuilder'] || new geu_4g(),
        $lma9 = _we2ug['errorHandler'],
        qkdhz = _we2ug['locator'],
        w1gfu = _we2ug['xmlns'] || {},
        uge2 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qkdhz && z6hkd['setDocumentLocator'](qkdhz), wg_4['errorHandler'] = gy_oc4($lma9, z6hkd, qkdhz), wg_4['domBuilder'] = _we2ug['domBuilder'] || z6hkd, /\/x?html?$/['test'](qr7t5) && (uge2['nbsp'] = '\u00a0', uge2['copy'] = '©', w1gfu[''] = 'http://www.w3.org/1999/xhtml'), w1gfu['xml'] = w1gfu['xml'] || 'http://www.w3.org/XML/1998/namespace', sgx12 ? wg_4['parse'](sgx12, w1gfu, uge2) : wg_4['errorHandler']['error']('invalid doc source'), z6hkd['doc'];
}, geu_4g['prototype'] = {
    'startDocument': function () {
        this['doc'] = new glcy$b0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (j2sf1, dqtk, by0co4, gweu2_) {
        var x1fs = this['doc'],
            jnx1 = x1fs['createElementNS'](j2sf1, by0co4 || dqtk),
            _oy0c4 = gweu2_['length'];
        go0c4b(this, jnx1), this['currentElement'] = jnx1, this['locator'] && gwu_o(this['locator'], jnx1);
        for (var wuf21 = 0x0; _oy0c4 > wuf21; wuf21++) {
            var j2sf1 = gweu2_['getURI'](wuf21),
                nfvsx = gweu2_['getValue'](wuf21),
                by0co4 = gweu2_['getQName'](wuf21),
                y0c$lb = x1fs['createAttributeNS'](j2sf1, by0co4);
            this['locator'] && gwu_o(gweu2_['getLocator'](wuf21), y0c$lb), y0c$lb['value'] = y0c$lb['nodeValue'] = nfvsx, jnx1['setAttributeNode'](y0c$lb);
        }
    },
    'endElement': function () {
        {
            var c$mlba = this['currentElement'];
            c$mlba['tagName'];
        }
        this['currentElement'] = c$mlba['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (hjvzn, hxnvs) {
        var $bmcyl = this['doc']['createProcessingInstruction'](hjvzn, hxnvs);
        this['locator'] && gwu_o(this['locator'], $bmcyl), go0c4b(this, $bmcyl);
    },
    'ignorableWhitespace': function () {},
    'characters': function (t75p3) {
        if (t75p3 = gfnvsjx['apply'](this, arguments)) {
            if (this['cdata']) var sjznhv = this['doc']['createCDATASection'](t75p3);else var sjznhv = this['doc']['createTextNode'](t75p3);
            this['currentElement'] ? this['currentElement']['appendChild'](sjznhv) : /^\s*$/['test'](t75p3) && this['doc']['appendChild'](sjznhv), this['locator'] && gwu_o(this['locator'], sjznhv);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (my$lbc) {
        (this['locator'] = my$lbc) && (my$lbc['lineNumber'] = 0x0);
    },
    'comment': function ($y0bco) {
        $y0bco = gfnvsjx['apply'](this, arguments);
        var gwue12 = this['doc']['createComment']($y0bco);
        this['locator'] && gwu_o(this['locator'], gwue12), go0c4b(this, gwue12);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (m$9al, tqd58r, _4eu) {
        var oc0$b = this['doc']['implementation'];
        if (oc0$b && oc0$b['createDocumentType']) {
            var y_04 = oc0$b['createDocumentType'](m$9al, tqd58r, _4eu);
            this['locator'] && gwu_o(this['locator'], y_04), go0c4b(this, y_04);
        }
    },
    'warning': function (s12jxf) {
        console['warn']('[xmldom warning]\t' + s12jxf, gvshzjn(this['locator']));
    },
    'error': function (vsznjh) {
        console['error']('[xmldom error]\t' + vsznjh, gvshzjn(this['locator']));
    },
    'fatalError': function (td68kq) {
        throw console['error']('[xmldom fatalError]\t' + td68kq, gvshzjn(this['locator'])), td68kq;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kjvnz) {
    geu_4g['prototype'][kjvnz] = function () {
        return null;
    };
});
var gf2x1u = require('./a1sax')['XMLReader'],
    glcy$b0 = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gr8tq5d;