var W = wx.$l;
function L9dulb9(sa4qp5) {
    this['options'] = sa4qp5 || { 'locator': {} };
}
function L9rec7n(ykc3z, $mtg, d95xsa) {
    function as5p4(otgm$0) {
        var zwk3c = ykc3z[otgm$0];
        !zwk3c && f8ilub && (zwk3c = 0x2 == ykc3z['length'] ? function (iulb) {
            ykc3z(otgm$0, iulb);
        } : ykc3z), ulbf8[otgm$0] = zwk3c && function (b81fi) {
            zwk3c('[xmldom ' + otgm$0 + ']\t' + b81fi + L9p4sq5h(d95xsa));
        } || function () {};
    }
    if (!ykc3z) {
        if ($mtg instanceof L9ufld) return $mtg;
        ykc3z = $mtg;
    }
    var ulbf8 = {},
        f8ilub = ykc3z instanceof Function;
    return d95xsa = d95xsa || {}, as5p4('warning'), as5p4('error'), as5p4('fatalError'), ulbf8;
}
function L9ufld() {
    this['cdata'] = !0x1;
}
function L9a54sq(cn7w, zv26_1) {
    zv26_1['lineNumber'] = cn7w['lineNumber'], zv26_1['columnNumber'] = cn7w['columnNumber'];
}
function L9p4sq5h(oshpq) {
    return oshpq ? '\x0a@' + (oshpq['systemId'] || '') + '#[line:' + oshpq['lineNumber'] + ',col:' + oshpq['columnNumber'] + ']' : void 0x0;
}
function L9ncjr7e(i_v621, z_3vk2, q4s5h) {
    return 'string' == typeof i_v621 ? i_v621['substr'](z_3vk2, q4s5h) : i_v621['length'] >= z_3vk2 + q4s5h || z_3vk2 ? new java['lang']['String'](i_v621, z_3vk2, q4s5h) + '' : i_v621;
}
function L9sap(zwkc3, d9xulf) {
    zwkc3['currentElement'] ? zwkc3['currentElement']['appendChild'](d9xulf) : zwkc3['doc']['appendChild'](d9xulf);
}
L9dulb9['prototype']['parseFromString'] = function (cre7w, c7k3wy) {
    var afx9ud = this['options'],
        qo0$hm = new L9fl9dub(),
        v3kz = afx9ud['domBuilder'] || new L9ufld(),
        mog$t0 = afx9ud['errorHandler'],
        zky3vw = afx9ud['locator'],
        i128 = afx9ud['xmlns'] || {},
        _z3 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return zky3vw && v3kz['setDocumentLocator'](zky3vw), qo0$hm['errorHandler'] = L9rec7n(mog$t0, v3kz, zky3vw), qo0$hm['domBuilder'] = afx9ud['domBuilder'] || v3kz, /\/x?html?$/['test'](c7k3wy) && (_z3['nbsp'] = '\u00a0', _z3['copy'] = '©', i128[''] = 'http://www.w3.org/1999/xhtml'), i128['xml'] = i128['xml'] || 'http://www.w3.org/XML/1998/namespace', cre7w ? qo0$hm['parse'](cre7w, i128, _z3) : qo0$hm['errorHandler']['error']('invalid doc source'), v3kz['doc'];
}, L9ufld['prototype'] = {
    'startDocument': function () {
        this['doc'] = new L9vk_2z3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (h0p4, sa45, _6b18i, $mtg0o) {
        var uax9d5 = this['doc'],
            q5ph4 = uax9d5['createElementNS'](h0p4, _6b18i || sa45),
            tog$0 = $mtg0o['length'];
        L9sap(this, q5ph4), this['currentElement'] = q5ph4, this['locator'] && L9a54sq(this['locator'], q5ph4);
        for (var $mgo = 0x0; tog$0 > $mgo; $mgo++) {
            var h0p4 = $mtg0o['getURI']($mgo),
                mqh$ = $mtg0o['getValue']($mgo),
                _6b18i = $mtg0o['getQName']($mgo),
                jecrn7 = uax9d5['createAttributeNS'](h0p4, _6b18i);
            this['locator'] && L9a54sq($mtg0o['getLocator']($mgo), jecrn7), jecrn7['value'] = jecrn7['nodeValue'] = mqh$, q5ph4['setAttributeNode'](jecrn7);
        }
    },
    'endElement': function () {
        {
            var l8iuf = this['currentElement'];
            l8iuf['tagName'];
        }
        this['currentElement'] = l8iuf['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function ($o0qh, jerc7n) {
        var h$m0oq = this['doc']['createProcessingInstruction']($o0qh, jerc7n);
        this['locator'] && L9a54sq(this['locator'], h$m0oq), L9sap(this, h$m0oq);
    },
    'ignorableWhitespace': function () {},
    'characters': function (_68b1) {
        if (_68b1 = L9ncjr7e['apply'](this, arguments)) {
            if (this['cdata']) var wz3 = this['doc']['createCDATASection'](_68b1);else var wz3 = this['doc']['createTextNode'](_68b1);
            this['currentElement'] ? this['currentElement']['appendChild'](wz3) : /^\s*$/['test'](_68b1) && this['doc']['appendChild'](wz3), this['locator'] && L9a54sq(this['locator'], wz3);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hqp54s) {
        (this['locator'] = hqp54s) && (hqp54s['lineNumber'] = 0x0);
    },
    'comment': function (lx9df) {
        lx9df = L9ncjr7e['apply'](this, arguments);
        var s59dax = this['doc']['createComment'](lx9df);
        this['locator'] && L9a54sq(this['locator'], s59dax), L9sap(this, s59dax);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (dfaxu9, fb9uld, $0otmg) {
        var vyk23 = this['doc']['implementation'];
        if (vyk23 && vyk23['createDocumentType']) {
            var sa5p9 = vyk23['createDocumentType'](dfaxu9, fb9uld, $0otmg);
            this['locator'] && L9a54sq(this['locator'], sa5p9), L9sap(this, sa5p9);
        }
    },
    'warning': function (sx9d5) {
        console['warn']('[xmldom warning]\t' + sx9d5, L9p4sq5h(this['locator']));
    },
    'error': function (nck) {
        console['error']('[xmldom error]\t' + nck, L9p4sq5h(this['locator']));
    },
    'fatalError': function (cky73w) {
        throw console['error']('[xmldom fatalError]\t' + cky73w, L9p4sq5h(this['locator'])), cky73w;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ohq$0) {
    L9ufld['prototype'][ohq$0] = function () {
        return null;
    };
});
var L9fl9dub = require('./lllSAX')['XMLReader'],
    L9vk_2z3 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];
exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9dulb9;