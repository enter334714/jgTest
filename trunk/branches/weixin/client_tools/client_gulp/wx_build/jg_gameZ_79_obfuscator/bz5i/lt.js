var b = wx.e$;
function ef_9a(ef_p19) {
    this['options'] = ef_p19 || { 'locator': {} };
}
function exo$ph(o$bnh, wisoh, o0wisn) {
    function _q4k1(hxonwb) {
        var vy28ru = o$bnh[hxonwb];
        !vy28ru && vzuy2c && (vy28ru = 0x2 == o$bnh['length'] ? function (lv8ury) {
            o$bnh(hxonwb, lv8ury);
        } : o$bnh), y8u2rv[hxonwb] = vy28ru && function (u2ry8) {
            vy28ru('[xmldom ' + hxonwb + ']\t' + u2ry8 + eqt67(o0wisn));
        } || function () {};
    }
    if (!o$bnh) {
        if (wisoh instanceof eowi0) return wisoh;
        o$bnh = wisoh;
    }
    var y8u2rv = {},
        vzuy2c = o$bnh instanceof Function;
    return o0wisn = o0wisn || {}, _q4k1('warning'), _q4k1('error'), _q4k1('fatalError'), y8u2rv;
}
function eowi0() {
    this['cdata'] = !0x1;
}
function ejtk6q(hniw, qj4a1k) {
    qj4a1k['lineNumber'] = hniw['lineNumber'], qj4a1k['columnNumber'] = hniw['columnNumber'];
}
function eqt67(h$px) {
    return h$px ? '\x0a@' + (h$px['systemId'] || '') + '#[line:' + h$px['lineNumber'] + ',col:' + h$px['columnNumber'] + ']' : void 0x0;
}
function eidg05(xeb, e9fb, honwi) {
    return 'string' == typeof xeb ? xeb['substr'](e9fb, honwi) : xeb['length'] >= e9fb + honwi || e9fb ? new java['lang']['String'](xeb, e9fb, honwi) + '' : xeb;
}
function ex$b9(dnisw0, r6l7t3) {
    dnisw0['currentElement'] ? dnisw0['currentElement']['appendChild'](r6l7t3) : dnisw0['doc']['appendChild'](r6l7t3);
}
ef_9a['prototype']['parseFromString'] = function (ws, ep9fb) {
    var whisn = this['options'],
        vuly = new eqa4jk(),
        t7rl36 = whisn['domBuilder'] || new eowi0(),
        kt67q = whisn['errorHandler'],
        $xbno = whisn['locator'],
        tqjk74 = whisn['xmlns'] || {},
        $nhbo = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return $xbno && t7rl36['setDocumentLocator']($xbno), vuly['errorHandler'] = exo$ph(kt67q, t7rl36, $xbno), vuly['domBuilder'] = whisn['domBuilder'] || t7rl36, /\/x?html?$/['test'](ep9fb) && ($nhbo['nbsp'] = '\u00a0', $nhbo['copy'] = '©', tqjk74[''] = 'http://www.w3.org/1999/xhtml'), tqjk74['xml'] = tqjk74['xml'] || 'http://www.w3.org/XML/1998/namespace', ws ? vuly['parse'](ws, tqjk74, $nhbo) : vuly['errorHandler']['error']('invalid doc source'), t7rl36['doc'];
}, eowi0['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ewigd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (r2yv8, ak_4q1, tj637l, ly8ruv) {
        var $9fpbe = this['doc'],
            gmid50 = $9fpbe['createElementNS'](r2yv8, tj637l || ak_4q1),
            xbpo$ = ly8ruv['length'];
        ex$b9(this, gmid50), this['currentElement'] = gmid50, this['locator'] && ejtk6q(this['locator'], gmid50);
        for (var e_f19 = 0x0; xbpo$ > e_f19; e_f19++) {
            var r2yv8 = ly8ruv['getURI'](e_f19),
                hno = ly8ruv['getValue'](e_f19),
                tj637l = ly8ruv['getQName'](e_f19),
                p1e_f9 = $9fpbe['createAttributeNS'](r2yv8, tj637l);
            this['locator'] && ejtk6q(ly8ruv['getLocator'](e_f19), p1e_f9), p1e_f9['value'] = p1e_f9['nodeValue'] = hno, gmid50['setAttributeNode'](p1e_f9);
        }
    },
    'endElement': function () {
        {
            var _a4f19 = this['currentElement'];
            _a4f19['tagName'];
        }
        this['currentElement'] = _a4f19['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (bexh$, bx9p$) {
        var _4kq1a = this['doc']['createProcessingInstruction'](bexh$, bx9p$);
        this['locator'] && ejtk6q(this['locator'], _4kq1a), ex$b9(this, _4kq1a);
    },
    'ignorableWhitespace': function () {},
    'characters': function (zvu8y2) {
        if (zvu8y2 = eidg05['apply'](this, arguments)) {
            if (this['cdata']) var obhnxw = this['doc']['createCDATASection'](zvu8y2);else var obhnxw = this['doc']['createTextNode'](zvu8y2);
            this['currentElement'] ? this['currentElement']['appendChild'](obhnxw) : /^\s*$/['test'](zvu8y2) && this['doc']['appendChild'](obhnxw), this['locator'] && ejtk6q(this['locator'], obhnxw);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (fep$) {
        (this['locator'] = fep$) && (fep$['lineNumber'] = 0x0);
    },
    'comment': function (ishno) {
        ishno = eidg05['apply'](this, arguments);
        var f_9e$ = this['doc']['createComment'](ishno);
        this['locator'] && ejtk6q(this['locator'], f_9e$), ex$b9(this, f_9e$);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (lvu8y, swdgi, t6q7k) {
        var hionw = this['doc']['implementation'];
        if (hionw && hionw['createDocumentType']) {
            var $pxbo = hionw['createDocumentType'](lvu8y, swdgi, t6q7k);
            this['locator'] && ejtk6q(this['locator'], $pxbo), ex$b9(this, $pxbo);
        }
    },
    'warning': function (hbxp$o) {
        console['warn']('[xmldom warning]\t' + hbxp$o, eqt67(this['locator']));
    },
    'error': function (vr28y) {
        console['error']('[xmldom error]\t' + vr28y, eqt67(this['locator']));
    },
    'fatalError': function (aqj1k) {
        throw console['error']('[xmldom fatalError]\t' + aqj1k, eqt67(this['locator'])), aqj1k;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (aq4jk) {
    eowi0['prototype'][aq4jk] = function () {
        return null;
    };
});
var eqa4jk = require('./q2a')['XMLReader'],
    ewigd = exports['DOMImplementation'] = require('./a314g')['DOMImplementation'];
exports['XMLSerializer'] = require('./a314g')['XMLSerializer'], exports['DOMParser'] = ef_9a;