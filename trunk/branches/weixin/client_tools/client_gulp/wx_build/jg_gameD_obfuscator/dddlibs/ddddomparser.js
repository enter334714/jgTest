var v = wx.$d;
function zkq0g(v$wy7) {
    this['options'] = v$wy7 || { 'locator': {} };
}
function zw$v1rp(enj6mh, $v7rw, eifudt) {
    function c_93(tfkq0) {
        var ife = enj6mh[tfkq0];
        !ife && zgkf0q && (ife = 0x2 == enj6mh['length'] ? function (x8r1bw) {
            enj6mh(tfkq0, x8r1bw);
        } : enj6mh), kgfitu[tfkq0] = ife && function (_3nc9) {
            ife('[xmldom ' + tfkq0 + ']\t' + _3nc9 + zrx$w1(eifudt));
        } || function () {};
    }
    if (!enj6mh) {
        if ($v7rw instanceof zag0kz) return $v7rw;
        enj6mh = $v7rw;
    }
    var kgfitu = {},
        zgkf0q = enj6mh instanceof Function;
    return eifudt = eifudt || {}, c_93('warning'), c_93('error'), c_93('fatalError'), kgfitu;
}
function zag0kz() {
    this['cdata'] = !0x1;
}
function zz81x(meu6d, c9n) {
    c9n['lineNumber'] = meu6d['lineNumber'], c9n['columnNumber'] = meu6d['columnNumber'];
}
function zrx$w1(yvpw$) {
    return yvpw$ ? '\x0a@' + (yvpw$['systemId'] || '') + '#[line:' + yvpw$['lineNumber'] + ',col:' + yvpw$['columnNumber'] + ']' : void 0x0;
}
function zvy7lp(ba0zx8, ed6imu, ar18) {
    return 'string' == typeof ba0zx8 ? ba0zx8['substr'](ed6imu, ar18) : ba0zx8['length'] >= ed6imu + ar18 || ed6imu ? new java['lang']['String'](ba0zx8, ed6imu, ar18) + '' : ba0zx8;
}
function zeh6mid(b1ar, xr18$) {
    b1ar['currentElement'] ? b1ar['currentElement']['appendChild'](xr18$) : b1ar['doc']['appendChild'](xr18$);
}
zkq0g['prototype']['parseFromString'] = function (xb0zqa, kqfg0t) {
    var rwvp$ = this['options'],
        ideu = new zhnje(),
        bqax = rwvp$['domBuilder'] || new zag0kz(),
        zk0fqg = rwvp$['errorHandler'],
        w$r7v = rwvp$['locator'],
        teu = rwvp$['xmlns'] || {},
        en6mh = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return w$r7v && bqax['setDocumentLocator'](w$r7v), ideu['errorHandler'] = zw$v1rp(zk0fqg, bqax, w$r7v), ideu['domBuilder'] = rwvp$['domBuilder'] || bqax, /\/x?html?$/['test'](kqfg0t) && (en6mh['nbsp'] = '\u00a0', en6mh['copy'] = '©', teu[''] = 'http://www.w3.org/1999/xhtml'), teu['xml'] = teu['xml'] || 'http://www.w3.org/XML/1998/namespace', xb0zqa ? ideu['parse'](xb0zqa, teu, en6mh) : ideu['errorHandler']['error']('invalid doc source'), bqax['doc'];
}, zag0kz['prototype'] = {
    'startDocument': function () {
        this['doc'] = new zvp$yw()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (fdiktu, jh6em, gukqft, fqgzk) {
        var qkzgf0 = this['doc'],
            k0agq = qkzgf0['createElementNS'](fdiktu, gukqft || jh6em),
            fdukit = fqgzk['length'];
        zeh6mid(this, k0agq), this['currentElement'] = k0agq, this['locator'] && zz81x(this['locator'], k0agq);
        for (var imtd = 0x0; fdukit > imtd; imtd++) {
            var fdiktu = fqgzk['getURI'](imtd),
                nc943 = fqgzk['getValue'](imtd),
                gukqft = fqgzk['getQName'](imtd),
                mjn46h = qkzgf0['createAttributeNS'](fdiktu, gukqft);
            this['locator'] && zz81x(fqgzk['getLocator'](imtd), mjn46h), mjn46h['value'] = mjn46h['nodeValue'] = nc943, k0agq['setAttributeNode'](mjn46h);
        }
    },
    'endElement': function () {
        {
            var gaq0 = this['currentElement'];
            gaq0['tagName'];
        }
        this['currentElement'] = gaq0['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (idte, bq0gz) {
        var rpw$7v = this['doc']['createProcessingInstruction'](idte, bq0gz);
        this['locator'] && zz81x(this['locator'], rpw$7v), zeh6mid(this, rpw$7v);
    },
    'ignorableWhitespace': function () {},
    'characters': function (r1w8xb) {
        if (r1w8xb = zvy7lp['apply'](this, arguments)) {
            if (this['cdata']) var oc35_9 = this['doc']['createCDATASection'](r1w8xb);else var oc35_9 = this['doc']['createTextNode'](r1w8xb);
            this['currentElement'] ? this['currentElement']['appendChild'](oc35_9) : /^\s*$/['test'](r1w8xb) && this['doc']['appendChild'](oc35_9), this['locator'] && zz81x(this['locator'], oc35_9);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (o493c) {
        (this['locator'] = o493c) && (o493c['lineNumber'] = 0x0);
    },
    'comment': function (w1$vp) {
        w1$vp = zvy7lp['apply'](this, arguments);
        var fiedu = this['doc']['createComment'](w1$vp);
        this['locator'] && zz81x(this['locator'], fiedu), zeh6mid(this, fiedu);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (muied, b1x8a, z0gqa) {
        var aq0zx = this['doc']['implementation'];
        if (aq0zx && aq0zx['createDocumentType']) {
            var fktgi = aq0zx['createDocumentType'](muied, b1x8a, z0gqa);
            this['locator'] && zz81x(this['locator'], fktgi), zeh6mid(this, fktgi);
        }
    },
    'warning': function (vyp$7l) {
        console['warn']('[xmldom warning]\t' + vyp$7l, zrx$w1(this['locator']));
    },
    'error': function (tdki) {
        console['error']('[xmldom error]\t' + tdki, zrx$w1(this['locator']));
    },
    'fatalError': function (wpy7v) {
        throw console['error']('[xmldom fatalError]\t' + wpy7v, zrx$w1(this['locator'])), wpy7v;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dfie) {
    zag0kz['prototype'][dfie] = function () {
        return null;
    };
});
var zhnje = require('./dddsax')['XMLReader'],
    zvp$yw = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];
exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zkq0g;