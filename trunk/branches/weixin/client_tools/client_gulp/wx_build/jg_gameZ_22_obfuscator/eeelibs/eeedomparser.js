var b = wx.$e;
function e$lhgt(jxigt$) {
    this['options'] = jxigt$ || { 'locator': {} };
}
function e$3xjq(d5k0b6, $jix3q, i3u) {
    function cm7pa(pao7m) {
        var peocma = d5k0b6[pao7m];
        !peocma && v7f4y && (peocma = 0x2 == d5k0b6['length'] ? function (d8b0) {
            d5k0b6(pao7m, d8b0);
        } : d5k0b6), qxi3j$[pao7m] = peocma && function (usb96k) {
            peocma('[xmldom ' + pao7m + ']\t' + usb96k + elyfzhr(i3u));
        } || function () {};
    }
    if (!d5k0b6) {
        if ($jix3q instanceof ezflhr) return $jix3q;
        d5k0b6 = $jix3q;
    }
    var qxi3j$ = {},
        v7f4y = d5k0b6 instanceof Function;
    return i3u = i3u || {}, cm7pa('warning'), cm7pa('error'), cm7pa('fatalError'), qxi3j$;
}
function ezflhr() {
    this['cdata'] = !0x1;
}
function e_7ma4c(rfv4yz, gtzh) {
    gtzh['lineNumber'] = rfv4yz['lineNumber'], gtzh['columnNumber'] = rfv4yz['columnNumber'];
}
function elyfzhr(xlrt) {
    return xlrt ? '\x0a@' + (xlrt['systemId'] || '') + '#[line:' + xlrt['lineNumber'] + ',col:' + xlrt['columnNumber'] + ']' : void 0x0;
}
function efzlyr(xg$ij, cm7o_, aoc7pm) {
    return 'string' == typeof xg$ij ? xg$ij['substr'](cm7o_, aoc7pm) : xg$ij['length'] >= cm7o_ + aoc7pm || cm7o_ ? new java['lang']['String'](xg$ij, cm7o_, aoc7pm) + '' : xg$ij;
}
function ev4rzy(rhzgt, zyf_v4) {
    rhzgt['currentElement'] ? rhzgt['currentElement']['appendChild'](zyf_v4) : rhzgt['doc']['appendChild'](zyf_v4);
}
e$lhgt['prototype']['parseFromString'] = function (gl$xi, uqnsj3) {
    var _m7av4 = this['options'],
        jtx$ig = new eqj$i3(),
        tli$x = _m7av4['domBuilder'] || new ezflhr(),
        sq3u = _m7av4['errorHandler'],
        db5086 = _m7av4['locator'],
        cpoam = _m7av4['xmlns'] || {},
        k6d50b = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return db5086 && tli$x['setDocumentLocator'](db5086), jtx$ig['errorHandler'] = e$3xjq(sq3u, tli$x, db5086), jtx$ig['domBuilder'] = _m7av4['domBuilder'] || tli$x, /\/x?html?$/['test'](uqnsj3) && (k6d50b['nbsp'] = '\u00a0', k6d50b['copy'] = '©', cpoam[''] = 'http://www.w3.org/1999/xhtml'), cpoam['xml'] = cpoam['xml'] || 'http://www.w3.org/XML/1998/namespace', gl$xi ? jtx$ig['parse'](gl$xi, cpoam, k6d50b) : jtx$ig['errorHandler']['error']('invalid doc source'), tli$x['doc'];
}, ezflhr['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ergxl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (flzhyr, k96sun, gxlt, mv47a) {
        var f4vy_ = this['doc'],
            b6k90 = f4vy_['createElementNS'](flzhyr, gxlt || k96sun),
            zrfy = mv47a['length'];
        ev4rzy(this, b6k90), this['currentElement'] = b6k90, this['locator'] && e_7ma4c(this['locator'], b6k90);
        for (var f_y4vz = 0x0; zrfy > f_y4vz; f_y4vz++) {
            var flzhyr = mv47a['getURI'](f_y4vz),
                xltg$ = mv47a['getValue'](f_y4vz),
                gxlt = mv47a['getQName'](f_y4vz),
                ixtjg = f4vy_['createAttributeNS'](flzhyr, gxlt);
            this['locator'] && e_7ma4c(mv47a['getLocator'](f_y4vz), ixtjg), ixtjg['value'] = ixtjg['nodeValue'] = xltg$, b6k90['setAttributeNode'](ixtjg);
        }
    },
    'endElement': function () {
        {
            var qsj = this['currentElement'];
            qsj['tagName'];
        }
        this['currentElement'] = qsj['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (com_, txig$l) {
        var v_zyf = this['doc']['createProcessingInstruction'](com_, txig$l);
        this['locator'] && e_7ma4c(this['locator'], v_zyf), ev4rzy(this, v_zyf);
    },
    'ignorableWhitespace': function () {},
    'characters': function (av47m) {
        if (av47m = efzlyr['apply'](this, arguments)) {
            if (this['cdata']) var fv47_a = this['doc']['createCDATASection'](av47m);else var fv47_a = this['doc']['createTextNode'](av47m);
            this['currentElement'] ? this['currentElement']['appendChild'](fv47_a) : /^\s*$/['test'](av47m) && this['doc']['appendChild'](fv47_a), this['locator'] && e_7ma4c(this['locator'], fv47_a);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hzytrl) {
        (this['locator'] = hzytrl) && (hzytrl['lineNumber'] = 0x0);
    },
    'comment': function (fhrl) {
        fhrl = efzlyr['apply'](this, arguments);
        var un9sqk = this['doc']['createComment'](fhrl);
        this['locator'] && e_7ma4c(this['locator'], un9sqk), ev4rzy(this, un9sqk);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (yhrzlf, v7y4_, coam) {
        var paom7 = this['doc']['implementation'];
        if (paom7 && paom7['createDocumentType']) {
            var d506 = paom7['createDocumentType'](yhrzlf, v7y4_, coam);
            this['locator'] && e_7ma4c(this['locator'], d506), ev4rzy(this, d506);
        }
    },
    'warning': function (ma_7v) {
        console['warn']('[xmldom warning]\t' + ma_7v, elyfzhr(this['locator']));
    },
    'error': function (squnk9) {
        console['error']('[xmldom error]\t' + squnk9, elyfzhr(this['locator']));
    },
    'fatalError': function (js3nqu) {
        throw console['error']('[xmldom fatalError]\t' + js3nqu, elyfzhr(this['locator'])), js3nqu;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jiqn$3) {
    ezflhr['prototype'][jiqn$3] = function () {
        return null;
    };
});
var eqj$i3 = require('./eeesax')['XMLReader'],
    ergxl = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = e$lhgt;