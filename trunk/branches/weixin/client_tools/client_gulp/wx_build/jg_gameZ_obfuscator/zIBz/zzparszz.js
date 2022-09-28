var B = wx.$z;
function zfh64pg(v4lf) {
    this['options'] = v4lf || { 'locator': {} };
}
function ziqj$m(w02, yzode, ktydzo) {
    function tdazeo(ytkob) {
        var pf6g = w02[ytkob];
        !pf6g && wr5u_ && (pf6g = 0x2 == w02['length'] ? function (l3n7mi) {
            w02(ytkob, l3n7mi);
        } : w02), vlinf7[ytkob] = pf6g && function (m3$i) {
            pf6g('[xmldom ' + ytkob + ']\t' + m3$i + zsxp9h1(ktydzo));
        } || function () {};
    }
    if (!w02) {
        if (yzode instanceof zjqi$) return yzode;
        w02 = yzode;
    }
    var vlinf7 = {},
        wr5u_ = w02 instanceof Function;
    return ktydzo = ktydzo || {}, tdazeo('warning'), tdazeo('error'), tdazeo('fatalError'), vlinf7;
}
function zjqi$() {
    this['cdata'] = !0x1;
}
function zzteoad(hg9px, h64pg1) {
    h64pg1['lineNumber'] = hg9px['lineNumber'], h64pg1['columnNumber'] = hg9px['columnNumber'];
}
function zsxp9h1(zkydt) {
    return zkydt ? '\x0a@' + (zkydt['systemId'] || '') + '#[line:' + zkydt['lineNumber'] + ',col:' + zkydt['columnNumber'] + ']' : void 0x0;
}
function zs91xea(ln3m7, ozedy, w52u_) {
    return 'string' == typeof ln3m7 ? ln3m7['substr'](ozedy, w52u_) : ln3m7['length'] >= ozedy + w52u_ || ozedy ? new java['lang']['String'](ln3m7, ozedy, w52u_) + '' : ln3m7;
}
function zzosea(xps19h, dkotby) {
    xps19h['currentElement'] ? xps19h['currentElement']['appendChild'](dkotby) : xps19h['doc']['appendChild'](dkotby);
}
zfh64pg['prototype']['parseFromString'] = function (mn7i3, ykotdb) {
    var oaetz = this['options'],
        e1asx = new zbry8d(),
        xsae = oaetz['domBuilder'] || new zjqi$(),
        b8dkyo = oaetz['errorHandler'],
        i7lm3n = oaetz['locator'],
        d8rybk = oaetz['xmlns'] || {},
        g64hfp = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return i7lm3n && xsae['setDocumentLocator'](i7lm3n), e1asx['errorHandler'] = ziqj$m(b8dkyo, xsae, i7lm3n), e1asx['domBuilder'] = oaetz['domBuilder'] || xsae, /\/x?html?$/['test'](ykotdb) && (g64hfp['nbsp'] = '\u00a0', g64hfp['copy'] = '©', d8rybk[''] = 'http://www.w3.org/1999/xhtml'), d8rybk['xml'] = d8rybk['xml'] || 'http://www.w3.org/XML/1998/namespace', mn7i3 ? e1asx['parse'](mn7i3, d8rybk, g64hfp) : e1asx['errorHandler']['error']('invalid doc source'), xsae['doc'];
}, zjqi$['prototype'] = {
    'startDocument': function () {
        this['doc'] = new zmqi3$7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (boktdy, etsazx, kbr8dy, w_52ur) {
        var ilm7v = this['doc'],
            tkzdy = ilm7v['createElementNS'](boktdy, kbr8dy || etsazx),
            kb8yod = w_52ur['length'];
        zzosea(this, tkzdy), this['currentElement'] = tkzdy, this['locator'] && zzteoad(this['locator'], tkzdy);
        for (var nf7vl6 = 0x0; kb8yod > nf7vl6; nf7vl6++) {
            var boktdy = w_52ur['getURI'](nf7vl6),
                eszaxt = w_52ur['getValue'](nf7vl6),
                kbr8dy = w_52ur['getQName'](nf7vl6),
                ah9s1 = ilm7v['createAttributeNS'](boktdy, kbr8dy);
            this['locator'] && zzteoad(w_52ur['getLocator'](nf7vl6), ah9s1), ah9s1['value'] = ah9s1['nodeValue'] = eszaxt, tkzdy['setAttributeNode'](ah9s1);
        }
    },
    'endElement': function () {
        {
            var _r8yk = this['currentElement'];
            _r8yk['tagName'];
        }
        this['currentElement'] = _r8yk['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (atzex, hp19sx) {
        var tzsexa = this['doc']['createProcessingInstruction'](atzex, hp19sx);
        this['locator'] && zzteoad(this['locator'], tzsexa), zzosea(this, tzsexa);
    },
    'ignorableWhitespace': function () {},
    'characters': function (iq7$3) {
        if (iq7$3 = zs91xea['apply'](this, arguments)) {
            if (this['cdata']) var h4fp6 = this['doc']['createCDATASection'](iq7$3);else var h4fp6 = this['doc']['createTextNode'](iq7$3);
            this['currentElement'] ? this['currentElement']['appendChild'](h4fp6) : /^\s*$/['test'](iq7$3) && this['doc']['appendChild'](h4fp6), this['locator'] && zzteoad(this['locator'], h4fp6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (esota) {
        (this['locator'] = esota) && (esota['lineNumber'] = 0x0);
    },
    'comment': function (dyozte) {
        dyozte = zs91xea['apply'](this, arguments);
        var odk8 = this['doc']['createComment'](dyozte);
        this['locator'] && zzteoad(this['locator'], odk8), zzosea(this, odk8);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (mji3q, lf4v6g, rwu25_) {
        var pf6h4g = this['doc']['implementation'];
        if (pf6h4g && pf6h4g['createDocumentType']) {
            var stazxe = pf6h4g['createDocumentType'](mji3q, lf4v6g, rwu25_);
            this['locator'] && zzteoad(this['locator'], stazxe), zzosea(this, stazxe);
        }
    },
    'warning': function (rkb8_) {
        console['warn']('[xmldom warning]\t' + rkb8_, zsxp9h1(this['locator']));
    },
    'error': function (f4hg6p) {
        console['error']('[xmldom error]\t' + f4hg6p, zsxp9h1(this['locator']));
    },
    'fatalError': function (h1g9p) {
        throw console['error']('[xmldom fatalError]\t' + h1g9p, zsxp9h1(this['locator'])), h1g9p;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x9zsae) {
    zjqi$['prototype'][x9zsae] = function () {
        return null;
    };
});
var zbry8d = require('./zzczz')['XMLReader'],
    zmqi3$7 = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];
exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zfh64pg;