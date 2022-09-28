var v = wx.$d;
function zm$h0oq(xd5u) {
    this['options'] = xd5u || { 'locator': {} };
}
function zv21i_6(q4hmo0, rn7wce, p5aq) {
    function a5dxu(ha5p4q) {
        var g$tmo0 = q4hmo0[ha5p4q];
        !g$tmo0 && bfiul8 && (g$tmo0 = 0x2 == q4hmo0['length'] ? function (da5x) {
            q4hmo0(ha5p4q, da5x);
        } : q4hmo0), pa5xq[ha5p4q] = g$tmo0 && function (w3vzyk) {
            g$tmo0('[xmldom ' + ha5p4q + ']\t' + w3vzyk + zz_kv3(p5aq));
        } || function () {};
    }
    if (!q4hmo0) {
        if (rn7wce instanceof zej7nc) return rn7wce;
        q4hmo0 = rn7wce;
    }
    var pa5xq = {},
        bfiul8 = q4hmo0 instanceof Function;
    return p5aq = p5aq || {}, a5dxu('warning'), a5dxu('error'), a5dxu('fatalError'), pa5xq;
}
function zej7nc() {
    this['cdata'] = !0x1;
}
function zx945a(y3v2z, m0q$ho) {
    m0q$ho['lineNumber'] = y3v2z['lineNumber'], m0q$ho['columnNumber'] = y3v2z['columnNumber'];
}
function zz_kv3(zy3w) {
    return zy3w ? '\x0a@' + (zy3w['systemId'] || '') + '#[line:' + zy3w['lineNumber'] + ',col:' + zy3w['columnNumber'] + ']' : void 0x0;
}
function zua59x($qo, fl1ib, nrwe7) {
    return 'string' == typeof $qo ? $qo['substr'](fl1ib, nrwe7) : $qo['length'] >= fl1ib + nrwe7 || fl1ib ? new java['lang']['String']($qo, fl1ib, nrwe7) + '' : $qo;
}
function zk3ywc7(apqx, bi1_6) {
    apqx['currentElement'] ? apqx['currentElement']['appendChild'](bi1_6) : apqx['doc']['appendChild'](bi1_6);
}
zm$h0oq['prototype']['parseFromString'] = function (uf9dlb, qpoh4) {
    var wkcy37 = this['options'],
        cwy7k = new zx94a5p(),
        df9x = wkcy37['domBuilder'] || new zej7nc(),
        _k3zv = wkcy37['errorHandler'],
        axf9 = wkcy37['locator'],
        kv23y = wkcy37['xmlns'] || {},
        cwe7y = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return axf9 && df9x['setDocumentLocator'](axf9), cwy7k['errorHandler'] = zv21i_6(_k3zv, df9x, axf9), cwy7k['domBuilder'] = wkcy37['domBuilder'] || df9x, /\/x?html?$/['test'](qpoh4) && (cwe7y['nbsp'] = '\u00a0', cwe7y['copy'] = '©', kv23y[''] = 'http://www.w3.org/1999/xhtml'), kv23y['xml'] = kv23y['xml'] || 'http://www.w3.org/XML/1998/namespace', uf9dlb ? cwy7k['parse'](uf9dlb, kv23y, cwe7y) : cwy7k['errorHandler']['error']('invalid doc source'), df9x['doc'];
}, zej7nc['prototype'] = {
    'startDocument': function () {
        this['doc'] = new zw7ky()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (jec7, ckyz, j7crn, y23zv) {
        var e7cny = this['doc'],
            lufxd = e7cny['createElementNS'](jec7, j7crn || ckyz),
            v_z62 = y23zv['length'];
        zk3ywc7(this, lufxd), this['currentElement'] = lufxd, this['locator'] && zx945a(this['locator'], lufxd);
        for (var xudl9 = 0x0; v_z62 > xudl9; xudl9++) {
            var jec7 = y23zv['getURI'](xudl9),
                qpa5x = y23zv['getValue'](xudl9),
                j7crn = y23zv['getQName'](xudl9),
                wykv3z = e7cny['createAttributeNS'](jec7, j7crn);
            this['locator'] && zx945a(y23zv['getLocator'](xudl9), wykv3z), wykv3z['value'] = wykv3z['nodeValue'] = qpa5x, lufxd['setAttributeNode'](wykv3z);
        }
    },
    'endElement': function () {
        {
            var ernj = this['currentElement'];
            ernj['tagName'];
        }
        this['currentElement'] = ernj['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (_286i, xad5u) {
        var v3_z2k = this['doc']['createProcessingInstruction'](_286i, xad5u);
        this['locator'] && zx945a(this['locator'], v3_z2k), zk3ywc7(this, v3_z2k);
    },
    'ignorableWhitespace': function () {},
    'characters': function (_63v2z) {
        if (_63v2z = zua59x['apply'](this, arguments)) {
            if (this['cdata']) var b8f1li = this['doc']['createCDATASection'](_63v2z);else var b8f1li = this['doc']['createTextNode'](_63v2z);
            this['currentElement'] ? this['currentElement']['appendChild'](b8f1li) : /^\s*$/['test'](_63v2z) && this['doc']['appendChild'](b8f1li), this['locator'] && zx945a(this['locator'], b8f1li);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (budfl8) {
        (this['locator'] = budfl8) && (budfl8['lineNumber'] = 0x0);
    },
    'comment': function (q40m) {
        q40m = zua59x['apply'](this, arguments);
        var wneyc = this['doc']['createComment'](q40m);
        this['locator'] && zx945a(this['locator'], wneyc), zk3ywc7(this, wneyc);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (mho04q, uaxdf9, vi_2) {
        var fblui8 = this['doc']['implementation'];
        if (fblui8 && fblui8['createDocumentType']) {
            var ua = fblui8['createDocumentType'](mho04q, uaxdf9, vi_2);
            this['locator'] && zx945a(this['locator'], ua), zk3ywc7(this, ua);
        }
    },
    'warning': function (buf9) {
        console['warn']('[xmldom warning]\t' + buf9, zz_kv3(this['locator']));
    },
    'error': function (kycz3w) {
        console['error']('[xmldom error]\t' + kycz3w, zz_kv3(this['locator']));
    },
    'fatalError': function (zy2v3) {
        throw console['error']('[xmldom fatalError]\t' + zy2v3, zz_kv3(this['locator'])), zy2v3;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d9) {
    zej7nc['prototype'][d9] = function () {
        return null;
    };
});
var zx94a5p = require('./tT12tt')['XMLReader'],
    zw7ky = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];
exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = zm$h0oq;