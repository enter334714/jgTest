var f = wx.$B;
function Stspif(l5hvb9) {
    this['options'] = l5hvb9 || { 'locator': {} };
}
function Skdf$(b3h_g, l9v5bh, eroq0x) {
    function auo(fpisk) {
        var v2z5l = b3h_g[fpisk];
        !v2z5l && ptis && (v2z5l = 0x2 == b3h_g['length'] ? function (vblh) {
            b3h_g(fpisk, vblh);
        } : b3h_g), d8m$j[fpisk] = v2z5l && function (h53bv) {
            v2z5l('[xmldom ' + fpisk + ']\t' + h53bv + S$tdm8(eroq0x));
        } || function () {};
    }
    if (!b3h_g) {
        if (l9v5bh instanceof Sn7uoa) return l9v5bh;
        b3h_g = l9v5bh;
    }
    var d8m$j = {},
        ptis = b3h_g instanceof Function;
    return eroq0x = eroq0x || {}, auo('warning'), auo('error'), auo('fatalError'), d8m$j;
}
function Sn7uoa() {
    this['cdata'] = !0x1;
}
function Sfk8tsp(w6yu, bwg3vh) {
    bwg3vh['lineNumber'] = w6yu['lineNumber'], bwg3vh['columnNumber'] = w6yu['columnNumber'];
}
function S$tdm8(mt8d$) {
    return mt8d$ ? '\x0a@' + (mt8d$['systemId'] || '') + '#[line:' + mt8d$['lineNumber'] + ',col:' + mt8d$['columnNumber'] + ']' : void 0x0;
}
function Sf$tk(wg_y3, noxeq0, xua7on) {
    return 'string' == typeof wg_y3 ? wg_y3['substr'](noxeq0, xua7on) : wg_y3['length'] >= noxeq0 + xua7on || noxeq0 ? new java['lang']['String'](wg_y3, noxeq0, xua7on) + '' : wg_y3;
}
function Sywg3b(ptisk, wy_4g3) {
    ptisk['currentElement'] ? ptisk['currentElement']['appendChild'](wy_4g3) : ptisk['doc']['appendChild'](wy_4g3);
}
Stspif['prototype']['parseFromString'] = function (w6gy4, tfk8s) {
    var nexao = this['options'],
        _wgh3 = new S$fpkt(),
        mj$8 = nexao['domBuilder'] || new Sn7uoa(),
        ikpsft = nexao['errorHandler'],
        oexan7 = nexao['locator'],
        dkt$8 = nexao['xmlns'] || {},
        _w46yu = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return oexan7 && mj$8['setDocumentLocator'](oexan7), _wgh3['errorHandler'] = Skdf$(ikpsft, mj$8, oexan7), _wgh3['domBuilder'] = nexao['domBuilder'] || mj$8, /\/x?html?$/['test'](tfk8s) && (_w46yu['nbsp'] = '\u00a0', _w46yu['copy'] = '©', dkt$8[''] = 'http://www.w3.org/1999/xhtml'), dkt$8['xml'] = dkt$8['xml'] || 'http://www.w3.org/XML/1998/namespace', w6gy4 ? _wgh3['parse'](w6gy4, dkt$8, _w46yu) : _wgh3['errorHandler']['error']('invalid doc source'), mj$8['doc'];
}, Sn7uoa['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Spf8ks()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (y746u, zj912, jl2z19, w_bhg3) {
        var xneo7 = this['doc'],
            ktf8$p = xneo7['createElementNS'](y746u, jl2z19 || zj912),
            _w3gh = w_bhg3['length'];
        Sywg3b(this, ktf8$p), this['currentElement'] = ktf8$p, this['locator'] && Sfk8tsp(this['locator'], ktf8$p);
        for (var u764a = 0x0; _w3gh > u764a; u764a++) {
            var y746u = w_bhg3['getURI'](u764a),
                e7 = w_bhg3['getValue'](u764a),
                jl2z19 = w_bhg3['getQName'](u764a),
                hb_3 = xneo7['createAttributeNS'](y746u, jl2z19);
            this['locator'] && Sfk8tsp(w_bhg3['getLocator'](u764a), hb_3), hb_3['value'] = hb_3['nodeValue'] = e7, ktf8$p['setAttributeNode'](hb_3);
        }
    },
    'endElement': function () {
        {
            var orqxe = this['currentElement'];
            orqxe['tagName'];
        }
        this['currentElement'] = orqxe['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (v9l2z, u7ya6) {
        var lh9z5 = this['doc']['createProcessingInstruction'](v9l2z, u7ya6);
        this['locator'] && Sfk8tsp(this['locator'], lh9z5), Sywg3b(this, lh9z5);
    },
    'ignorableWhitespace': function () {},
    'characters': function (hv9z5l) {
        if (hv9z5l = Sf$tk['apply'](this, arguments)) {
            if (this['cdata']) var mk$8dt = this['doc']['createCDATASection'](hv9z5l);else var mk$8dt = this['doc']['createTextNode'](hv9z5l);
            this['currentElement'] ? this['currentElement']['appendChild'](mk$8dt) : /^\s*$/['test'](hv9z5l) && this['doc']['appendChild'](mk$8dt), this['locator'] && Sfk8tsp(this['locator'], mk$8dt);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (pikfst) {
        (this['locator'] = pikfst) && (pikfst['lineNumber'] = 0x0);
    },
    'comment': function (md1jz) {
        md1jz = Sf$tk['apply'](this, arguments);
        var fk8$ = this['doc']['createComment'](md1jz);
        this['locator'] && Sfk8tsp(this['locator'], fk8$), Sywg3b(this, fk8$);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (hvlz59, $1j8, n76oua) {
        var yu76a4 = this['doc']['implementation'];
        if (yu76a4 && yu76a4['createDocumentType']) {
            var $pk = yu76a4['createDocumentType'](hvlz59, $1j8, n76oua);
            this['locator'] && Sfk8tsp(this['locator'], $pk), Sywg3b(this, $pk);
        }
    },
    'warning': function (hb539v) {
        console['warn']('[xmldom warning]\t' + hb539v, S$tdm8(this['locator']));
    },
    'error': function (yg3w_) {
        console['error']('[xmldom error]\t' + yg3w_, S$tdm8(this['locator']));
    },
    'fatalError': function (m$2d1j) {
        throw console['error']('[xmldom fatalError]\t' + m$2d1j, S$tdm8(this['locator'])), m$2d1j;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qo0xe) {
    Sn7uoa['prototype'][qo0xe] = function () {
        return null;
    };
});
var S$fpkt = require('./zz')['XMLReader'],
    Spf8ks = exports['DOMImplementation'] = require('./c3jgy')['DOMImplementation'];
exports['XMLSerializer'] = require('./c3jgy')['XMLSerializer'], exports['DOMParser'] = Stspif;