var b = wx.$e;
function ew2$bct(y97mzu) {
    this['options'] = y97mzu || { 'locator': {} };
}
function e$t2b5c(t25bxd, h6oi8q, c5bt2) {
    function f1jyn(m9kuvp) {
        var upxkv = t25bxd[m9kuvp];
        !upxkv && $_c && (upxkv = 0x2 == t25bxd['length'] ? function (rhi) {
            t25bxd(m9kuvp, rhi);
        } : t25bxd), ofi8[m9kuvp] = upxkv && function (nz1a7y) {
            upxkv('[xmldom ' + m9kuvp + ']\t' + nz1a7y + euzv7(c5bt2));
        } || function () {};
    }
    if (!t25bxd) {
        if (h6oi8q instanceof ehs6r) return h6oi8q;
        t25bxd = h6oi8q;
    }
    var ofi8 = {},
        $_c = t25bxd instanceof Function;
    return c5bt2 = c5bt2 || {}, f1jyn('warning'), f1jyn('error'), f1jyn('fatalError'), ofi8;
}
function ehs6r() {
    this['cdata'] = !0x1;
}
function ersq6g(xvpuk, r6oiqh) {
    r6oiqh['lineNumber'] = xvpuk['lineNumber'], r6oiqh['columnNumber'] = xvpuk['columnNumber'];
}
function euzv7($wcl_) {
    return $wcl_ ? '\x0a@' + ($wcl_['systemId'] || '') + '#[line:' + $wcl_['lineNumber'] + ',col:' + $wcl_['columnNumber'] + ']' : void 0x0;
}
function ey17az(ukpd, u79zym, rg4q6) {
    return 'string' == typeof ukpd ? ukpd['substr'](u79zym, rg4q6) : ukpd['length'] >= u79zym + rg4q6 || u79zym ? new java['lang']['String'](ukpd, u79zym, rg4q6) + '' : ukpd;
}
function efaj(puv9km, dbtx5) {
    puv9km['currentElement'] ? puv9km['currentElement']['appendChild'](dbtx5) : puv9km['doc']['appendChild'](dbtx5);
}
ew2$bct['prototype']['parseFromString'] = function (mvx, mp9u) {
    var pkxv5d = this['options'],
        dkupx = new edxt(),
        bwt = pkxv5d['domBuilder'] || new ehs6r(),
        jzy1 = pkxv5d['errorHandler'],
        ynjza1 = pkxv5d['locator'],
        az71ny = pkxv5d['xmlns'] || {},
        fya1 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ynjza1 && bwt['setDocumentLocator'](ynjza1), dkupx['errorHandler'] = e$t2b5c(jzy1, bwt, ynjza1), dkupx['domBuilder'] = pkxv5d['domBuilder'] || bwt, /\/x?html?$/['test'](mp9u) && (fya1['nbsp'] = '\u00a0', fya1['copy'] = '©', az71ny[''] = 'http://www.w3.org/1999/xhtml'), az71ny['xml'] = az71ny['xml'] || 'http://www.w3.org/XML/1998/namespace', mvx ? dkupx['parse'](mvx, az71ny, fya1) : dkupx['errorHandler']['error']('invalid doc source'), bwt['doc'];
}, ehs6r['prototype'] = {
    'startDocument': function () {
        this['doc'] = new esge46r()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (gqhsr, $5b2, rsgq64, ctlwb) {
        var f3na1 = this['doc'],
            muzy97 = f3na1['createElementNS'](gqhsr, rsgq64 || $5b2),
            b2$5ct = ctlwb['length'];
        efaj(this, muzy97), this['currentElement'] = muzy97, this['locator'] && ersq6g(this['locator'], muzy97);
        for (var orhi = 0x0; b2$5ct > orhi; orhi++) {
            var gqhsr = ctlwb['getURI'](orhi),
                vz79 = ctlwb['getValue'](orhi),
                rsgq64 = ctlwb['getQName'](orhi),
                bct5 = f3na1['createAttributeNS'](gqhsr, rsgq64);
            this['locator'] && ersq6g(ctlwb['getLocator'](orhi), bct5), bct5['value'] = bct5['nodeValue'] = vz79, muzy97['setAttributeNode'](bct5);
        }
    },
    'endElement': function () {
        {
            var b2$5tc = this['currentElement'];
            b2$5tc['tagName'];
        }
        this['currentElement'] = b2$5tc['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (vuxkmp, vp7m) {
        var v9u7z = this['doc']['createProcessingInstruction'](vuxkmp, vp7m);
        this['locator'] && ersq6g(this['locator'], v9u7z), efaj(this, v9u7z);
    },
    'ignorableWhitespace': function () {},
    'characters': function (kum9pv) {
        if (kum9pv = ey17az['apply'](this, arguments)) {
            if (this['cdata']) var ir6qo = this['doc']['createCDATASection'](kum9pv);else var ir6qo = this['doc']['createTextNode'](kum9pv);
            this['currentElement'] ? this['currentElement']['appendChild'](ir6qo) : /^\s*$/['test'](kum9pv) && this['doc']['appendChild'](ir6qo), this['locator'] && ersq6g(this['locator'], ir6qo);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (db2x5t) {
        (this['locator'] = db2x5t) && (db2x5t['lineNumber'] = 0x0);
    },
    'comment': function (xdku) {
        xdku = ey17az['apply'](this, arguments);
        var xvump = this['doc']['createComment'](xdku);
        this['locator'] && ersq6g(this['locator'], xvump), efaj(this, xvump);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (kpxd2, pxuvkd, $ctwl) {
        var tw_$cl = this['doc']['implementation'];
        if (tw_$cl && tw_$cl['createDocumentType']) {
            var ho86i = tw_$cl['createDocumentType'](kpxd2, pxuvkd, $ctwl);
            this['locator'] && ersq6g(this['locator'], ho86i), efaj(this, ho86i);
        }
    },
    'warning': function (td5xb) {
        console['warn']('[xmldom warning]\t' + td5xb, euzv7(this['locator']));
    },
    'error': function (p5kdx2) {
        console['error']('[xmldom error]\t' + p5kdx2, euzv7(this['locator']));
    },
    'fatalError': function (f80j3a) {
        throw console['error']('[xmldom fatalError]\t' + f80j3a, euzv7(this['locator'])), f80j3a;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (uz7y) {
    ehs6r['prototype'][uz7y] = function () {
        return null;
    };
});
var edxt = require('./mz3a')['XMLReader'],
    esge46r = exports['DOMImplementation'] = require('./cw')['DOMImplementation'];
exports['XMLSerializer'] = require('./cw')['XMLSerializer'], exports['DOMParser'] = ew2$bct;