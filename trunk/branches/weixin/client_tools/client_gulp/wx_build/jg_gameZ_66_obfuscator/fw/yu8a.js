var f = wx.$B;
function Ssmqhtw(o3dye) {
    this['options'] = o3dye || { 'locator': {} };
}
function Sdye(gyeoi, rye3dl, wq4mp8) {
    function qs8wpm(y$lr) {
        var f109x5 = gyeoi[y$lr];
        !f109x5 && oievg && (f109x5 = 0x2 == gyeoi['length'] ? function (z7igj) {
            gyeoi(y$lr, z7igj);
        } : gyeoi), f90x15[y$lr] = f109x5 && function (v2b) {
            f109x5('[xmldom ' + y$lr + ']\t' + v2b + Svgijzo(wq4mp8));
        } || function () {};
    }
    if (!gyeoi) {
        if (rye3dl instanceof Saw4p) return rye3dl;
        gyeoi = rye3dl;
    }
    var f90x15 = {},
        oievg = gyeoi instanceof Function;
    return wq4mp8 = wq4mp8 || {}, qs8wpm('warning'), qs8wpm('error'), qs8wpm('fatalError'), f90x15;
}
function Saw4p() {
    this['cdata'] = !0x1;
}
function Sgiejo(gviz7j, k4apu) {
    k4apu['lineNumber'] = gviz7j['lineNumber'], k4apu['columnNumber'] = gviz7j['columnNumber'];
}
function Svgijzo(iogyje) {
    return iogyje ? '\x0a@' + (iogyje['systemId'] || '') + '#[line:' + iogyje['lineNumber'] + ',col:' + iogyje['columnNumber'] + ']' : void 0x0;
}
function Sjogvie(qpm4w8, qmt9s, wn48a) {
    return 'string' == typeof qpm4w8 ? qpm4w8['substr'](qmt9s, wn48a) : qpm4w8['length'] >= qmt9s + wn48a || qmt9s ? new java['lang']['String'](qpm4w8, qmt9s, wn48a) + '' : qpm4w8;
}
function Stx1hf(ua48np, h9tsx) {
    ua48np['currentElement'] ? ua48np['currentElement']['appendChild'](h9tsx) : ua48np['doc']['appendChild'](h9tsx);
}
Ssmqhtw['prototype']['parseFromString'] = function (mqth9s, iyeoj) {
    var lry$ = this['options'],
        z2567 = new Syr3ed(),
        hf910x = lry$['domBuilder'] || new Saw4p(),
        apk4nu = lry$['errorHandler'],
        wp8q4 = lry$['locator'],
        u4nka = lry$['xmlns'] || {},
        giz7vj = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return wp8q4 && hf910x['setDocumentLocator'](wp8q4), z2567['errorHandler'] = Sdye(apk4nu, hf910x, wp8q4), z2567['domBuilder'] = lry$['domBuilder'] || hf910x, /\/x?html?$/['test'](iyeoj) && (giz7vj['nbsp'] = '\u00a0', giz7vj['copy'] = '©', u4nka[''] = 'http://www.w3.org/1999/xhtml'), u4nka['xml'] = u4nka['xml'] || 'http://www.w3.org/XML/1998/namespace', mqth9s ? z2567['parse'](mqth9s, u4nka, giz7vj) : z2567['errorHandler']['error']('invalid doc source'), hf910x['doc'];
}, Saw4p['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Sld_3r()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (stq19h, re3l, nwa4p, s19hqt) {
        var erjody = this['doc'],
            ylred3 = erjody['createElementNS'](stq19h, nwa4p || re3l),
            gjoiz = s19hqt['length'];
        Stx1hf(this, ylred3), this['currentElement'] = ylred3, this['locator'] && Sgiejo(this['locator'], ylred3);
        for (var $yl3dr = 0x0; gjoiz > $yl3dr; $yl3dr++) {
            var stq19h = s19hqt['getURI']($yl3dr),
                p4ua = s19hqt['getValue']($yl3dr),
                nwa4p = s19hqt['getQName']($yl3dr),
                anw8 = erjody['createAttributeNS'](stq19h, nwa4p);
            this['locator'] && Sgiejo(s19hqt['getLocator']($yl3dr), anw8), anw8['value'] = anw8['nodeValue'] = p4ua, ylred3['setAttributeNode'](anw8);
        }
    },
    'endElement': function () {
        {
            var edy3l = this['currentElement'];
            edy3l['tagName'];
        }
        this['currentElement'] = edy3l['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (nk, giojev) {
        var jive = this['doc']['createProcessingInstruction'](nk, giojev);
        this['locator'] && Sgiejo(this['locator'], jive), Stx1hf(this, jive);
    },
    'ignorableWhitespace': function () {},
    'characters': function (yoe3d) {
        if (yoe3d = Sjogvie['apply'](this, arguments)) {
            if (this['cdata']) var x02f1 = this['doc']['createCDATASection'](yoe3d);else var x02f1 = this['doc']['createTextNode'](yoe3d);
            this['currentElement'] ? this['currentElement']['appendChild'](x02f1) : /^\s*$/['test'](yoe3d) && this['doc']['appendChild'](x02f1), this['locator'] && Sgiejo(this['locator'], x02f1);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (maw8p4) {
        (this['locator'] = maw8p4) && (maw8p4['lineNumber'] = 0x0);
    },
    'comment': function (b05f6) {
        b05f6 = Sjogvie['apply'](this, arguments);
        var yr3$ = this['doc']['createComment'](b05f6);
        this['locator'] && Sgiejo(this['locator'], yr3$), Stx1hf(this, yr3$);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (tmsq9h, aun8, jeig) {
        var f15x09 = this['doc']['implementation'];
        if (f15x09 && f15x09['createDocumentType']) {
            var rldy3e = f15x09['createDocumentType'](tmsq9h, aun8, jeig);
            this['locator'] && Sgiejo(this['locator'], rldy3e), Stx1hf(this, rldy3e);
        }
    },
    'warning': function (th9x1s) {
        console['warn']('[xmldom warning]\t' + th9x1s, Svgijzo(this['locator']));
    },
    'error': function (mh9sq) {
        console['error']('[xmldom error]\t' + mh9sq, Svgijzo(this['locator']));
    },
    'fatalError': function (jivz) {
        throw console['error']('[xmldom fatalError]\t' + jivz, Svgijzo(this['locator'])), jivz;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (gv76) {
    Saw4p['prototype'][gv76] = function () {
        return null;
    };
});
var Syr3ed = require('./a3q3za')['XMLReader'],
    Sld_3r = exports['DOMImplementation'] = require('./bocy')['DOMImplementation'];
exports['XMLSerializer'] = require('./bocy')['XMLSerializer'], exports['DOMParser'] = Ssmqhtw;