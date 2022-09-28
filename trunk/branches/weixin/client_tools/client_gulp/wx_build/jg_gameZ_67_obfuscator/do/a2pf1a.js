var J = wx.h$;
function gd5tm9($iwv4j) {
    this['options'] = $iwv4j || { 'locator': {} };
}
function gtgp5(c95mdp, d9pt, b8r0n) {
    function jwl4(u3s7zx) {
        var q0ar = c95mdp[u3s7zx];
        !q0ar && ns83 && (q0ar = 0x2 == c95mdp['length'] ? function (r0b12) {
            c95mdp(u3s7zx, r0b12);
        } : c95mdp), gfy64[u3s7zx] = q0ar && function ($4ywj) {
            q0ar('[xmldom ' + u3s7zx + ']\t' + $4ywj + gak_oq1(b8r0n));
        } || function () {};
    }
    if (!c95mdp) {
        if (d9pt instanceof gylf64) return d9pt;
        c95mdp = d9pt;
    }
    var gfy64 = {},
        ns83 = c95mdp instanceof Function;
    return b8r0n = b8r0n || {}, jwl4('warning'), jwl4('error'), jwl4('fatalError'), gfy64;
}
function gylf64() {
    this['cdata'] = !0x1;
}
function gmdep(fgytl, lwi$j4) {
    lwi$j4['lineNumber'] = fgytl['lineNumber'], lwi$j4['columnNumber'] = fgytl['columnNumber'];
}
function gak_oq1(_a1qk) {
    return _a1qk ? '\x0a@' + (_a1qk['systemId'] || '') + '#[line:' + _a1qk['lineNumber'] + ',col:' + _a1qk['columnNumber'] + ']' : void 0x0;
}
function gkqaob(cp9m, yl$w, _cekdo) {
    return 'string' == typeof cp9m ? cp9m['substr'](yl$w, _cekdo) : cp9m['length'] >= yl$w + _cekdo || yl$w ? new java['lang']['String'](cp9m, yl$w, _cekdo) + '' : cp9m;
}
function ghsnu8(vw$, ygft) {
    vw$['currentElement'] ? vw$['currentElement']['appendChild'](ygft) : vw$['doc']['appendChild'](ygft);
}
gd5tm9['prototype']['parseFromString'] = function (dko_c, zsh3n) {
    var _ka1oq = this['options'],
        oeqk = new gzsh3(),
        u3nh = _ka1oq['domBuilder'] || new gylf64(),
        mdec = _ka1oq['errorHandler'],
        g6ytf = _ka1oq['locator'],
        ok_ca = _ka1oq['xmlns'] || {},
        pmg59 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return g6ytf && u3nh['setDocumentLocator'](g6ytf), oeqk['errorHandler'] = gtgp5(mdec, u3nh, g6ytf), oeqk['domBuilder'] = _ka1oq['domBuilder'] || u3nh, /\/x?html?$/['test'](zsh3n) && (pmg59['nbsp'] = '\u00a0', pmg59['copy'] = '©', ok_ca[''] = 'http://www.w3.org/1999/xhtml'), ok_ca['xml'] = ok_ca['xml'] || 'http://www.w3.org/XML/1998/namespace', dko_c ? oeqk['parse'](dko_c, ok_ca, pmg59) : oeqk['errorHandler']['error']('invalid doc source'), u3nh['doc'];
}, gylf64['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gns83h()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (dc5p, ce_mkd, mcdpe_, n38h0) {
        var lj4$y = this['doc'],
            l$4yjw = lj4$y['createElementNS'](dc5p, mcdpe_ || ce_mkd),
            ce9dmp = n38h0['length'];
        ghsnu8(this, l$4yjw), this['currentElement'] = l$4yjw, this['locator'] && gmdep(this['locator'], l$4yjw);
        for (var q1okb = 0x0; ce9dmp > q1okb; q1okb++) {
            var dc5p = n38h0['getURI'](q1okb),
                q1a_ko = n38h0['getValue'](q1okb),
                mcdpe_ = n38h0['getQName'](q1okb),
                oa_eq = lj4$y['createAttributeNS'](dc5p, mcdpe_);
            this['locator'] && gmdep(n38h0['getLocator'](q1okb), oa_eq), oa_eq['value'] = oa_eq['nodeValue'] = q1a_ko, l$4yjw['setAttributeNode'](oa_eq);
        }
    },
    'endElement': function () {
        {
            var b0rn2 = this['currentElement'];
            b0rn2['tagName'];
        }
        this['currentElement'] = b0rn2['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (snhu83, unh) {
        var lw4j$ = this['doc']['createProcessingInstruction'](snhu83, unh);
        this['locator'] && gmdep(this['locator'], lw4j$), ghsnu8(this, lw4j$);
    },
    'ignorableWhitespace': function () {},
    'characters': function (_cdkme) {
        if (_cdkme = gkqaob['apply'](this, arguments)) {
            if (this['cdata']) var u28h3n = this['doc']['createCDATASection'](_cdkme);else var u28h3n = this['doc']['createTextNode'](_cdkme);
            this['currentElement'] ? this['currentElement']['appendChild'](u28h3n) : /^\s*$/['test'](_cdkme) && this['doc']['appendChild'](u28h3n), this['locator'] && gmdep(this['locator'], u28h3n);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (m9dt) {
        (this['locator'] = m9dt) && (m9dt['lineNumber'] = 0x0);
    },
    'comment': function (gf9tp5) {
        gf9tp5 = gkqaob['apply'](this, arguments);
        var tgy5 = this['doc']['createComment'](gf9tp5);
        this['locator'] && gmdep(this['locator'], tgy5), ghsnu8(this, tgy5);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (gtp5m9, c_ako, u73zh) {
        var ed_ko = this['doc']['implementation'];
        if (ed_ko && ed_ko['createDocumentType']) {
            var koabq = ed_ko['createDocumentType'](gtp5m9, c_ako, u73zh);
            this['locator'] && gmdep(this['locator'], koabq), ghsnu8(this, koabq);
        }
    },
    'warning': function (l4wij$) {
        console['warn']('[xmldom warning]\t' + l4wij$, gak_oq1(this['locator']));
    },
    'error': function (b1aro) {
        console['error']('[xmldom error]\t' + b1aro, gak_oq1(this['locator']));
    },
    'fatalError': function (m5d9cp) {
        throw console['error']('[xmldom fatalError]\t' + m5d9cp, gak_oq1(this['locator'])), m5d9cp;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (b0qra) {
    gylf64['prototype'][b0qra] = function () {
        return null;
    };
});
var gzsh3 = require('./a7brx')['XMLReader'],
    gns83h = exports['DOMImplementation'] = require('./a9a4ik')['DOMImplementation'];
exports['XMLSerializer'] = require('./a9a4ik')['XMLSerializer'], exports['DOMParser'] = gd5tm9;