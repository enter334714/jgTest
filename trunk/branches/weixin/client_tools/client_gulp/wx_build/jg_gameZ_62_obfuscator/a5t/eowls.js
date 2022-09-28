var f = wx.$B;
function Sqgbrx(n$92) {
    this['options'] = n$92 || { 'locator': {} };
}
function Sjydp08(l_w61, wl6k, e3szi) {
    function rqgkl(glb6k) {
        var xy0d = l_w61[glb6k];
        !xy0d && brqglk && (xy0d = 0x2 == l_w61['length'] ? function (lwgb_) {
            l_w61(glb6k, lwgb_);
        } : l_w61), xqbkr[glb6k] = xy0d && function (n$uh) {
            xy0d('[xmldom ' + glb6k + ']\t' + n$uh + Sgrkqlb(e3szi));
        } || function () {};
    }
    if (!l_w61) {
        if (wl6k instanceof Sbqrgxk) return wl6k;
        l_w61 = wl6k;
    }
    var xqbkr = {},
        brqglk = l_w61 instanceof Function;
    return e3szi = e3szi || {}, rqgkl('warning'), rqgkl('error'), rqgkl('fatalError'), xqbkr;
}
function Sbqrgxk() {
    this['cdata'] = !0x1;
}
function Sbk6glw(bkqwg, e3) {
    e3['lineNumber'] = bkqwg['lineNumber'], e3['columnNumber'] = bkqwg['columnNumber'];
}
function Sgrkqlb(_w15l6) {
    return _w15l6 ? '\x0a@' + (_w15l6['systemId'] || '') + '#[line:' + _w15l6['lineNumber'] + ',col:' + _w15l6['columnNumber'] + ']' : void 0x0;
}
function So6_145(ztsi4v, nhf9, ae7) {
    return 'string' == typeof ztsi4v ? ztsi4v['substr'](nhf9, ae7) : ztsi4v['length'] >= nhf9 + ae7 || nhf9 ? new java['lang']['String'](ztsi4v, nhf9, ae7) + '' : ztsi4v;
}
function Se973f(o4t1v5, o4_v1) {
    o4t1v5['currentElement'] ? o4t1v5['currentElement']['appendChild'](o4_v1) : o4t1v5['doc']['appendChild'](o4_v1);
}
Sqgbrx['prototype']['parseFromString'] = function (qgkrbx, rpy8x) {
    var e7z39a = this['options'],
        z9ea7 = new Saeti(),
        ry8xp0 = e7z39a['domBuilder'] || new Sbqrgxk(),
        izs3 = e7z39a['errorHandler'],
        e39f27 = e7z39a['locator'],
        f79a = e7z39a['xmlns'] || {},
        pr8q0 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return e39f27 && ry8xp0['setDocumentLocator'](e39f27), z9ea7['errorHandler'] = Sjydp08(izs3, ry8xp0, e39f27), z9ea7['domBuilder'] = e7z39a['domBuilder'] || ry8xp0, /\/x?html?$/['test'](rpy8x) && (pr8q0['nbsp'] = '\u00a0', pr8q0['copy'] = '©', f79a[''] = 'http://www.w3.org/1999/xhtml'), f79a['xml'] = f79a['xml'] || 'http://www.w3.org/XML/1998/namespace', qgkrbx ? z9ea7['parse'](qgkrbx, f79a, pr8q0) : z9ea7['errorHandler']['error']('invalid doc source'), ry8xp0['doc'];
}, Sbqrgxk['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Skqrp8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ia7ez3, zes3, a3isez, _gl5w6) {
        var xb = this['doc'],
            qkrbg = xb['createElementNS'](ia7ez3, a3isez || zes3),
            v_451o = _gl5w6['length'];
        Se973f(this, qkrbg), this['currentElement'] = qkrbg, this['locator'] && Sbk6glw(this['locator'], qkrbg);
        for (var krglbq = 0x0; v_451o > krglbq; krglbq++) {
            var ia7ez3 = _gl5w6['getURI'](krglbq),
                vtio = _gl5w6['getValue'](krglbq),
                a3isez = _gl5w6['getQName'](krglbq),
                blkq = xb['createAttributeNS'](ia7ez3, a3isez);
            this['locator'] && Sbk6glw(_gl5w6['getLocator'](krglbq), blkq), blkq['value'] = blkq['nodeValue'] = vtio, qkrbg['setAttributeNode'](blkq);
        }
    },
    'endElement': function () {
        {
            var ot4v1s = this['currentElement'];
            ot4v1s['tagName'];
        }
        this['currentElement'] = ot4v1s['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (y08xr, bgqklr) {
        var nh$2um = this['doc']['createProcessingInstruction'](y08xr, bgqklr);
        this['locator'] && Sbk6glw(this['locator'], nh$2um), Se973f(this, nh$2um);
    },
    'ignorableWhitespace': function () {},
    'characters': function (jyd8p0) {
        if (jyd8p0 = So6_145['apply'](this, arguments)) {
            if (this['cdata']) var tzesia = this['doc']['createCDATASection'](jyd8p0);else var tzesia = this['doc']['createTextNode'](jyd8p0);
            this['currentElement'] ? this['currentElement']['appendChild'](tzesia) : /^\s*$/['test'](jyd8p0) && this['doc']['appendChild'](tzesia), this['locator'] && Sbk6glw(this['locator'], tzesia);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (o_w561) {
        (this['locator'] = o_w561) && (o_w561['lineNumber'] = 0x0);
    },
    'comment': function (_54vo1) {
        _54vo1 = So6_145['apply'](this, arguments);
        var y0x8dp = this['doc']['createComment'](_54vo1);
        this['locator'] && Sbk6glw(this['locator'], y0x8dp), Se973f(this, y0x8dp);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (l6w5g_, _5w61l, rpxk8) {
        var rq0px8 = this['doc']['implementation'];
        if (rq0px8 && rq0px8['createDocumentType']) {
            var tzavs = rq0px8['createDocumentType'](l6w5g_, _5w61l, rpxk8);
            this['locator'] && Sbk6glw(this['locator'], tzavs), Se973f(this, tzavs);
        }
    },
    'warning': function (brqgkl) {
        console['warn']('[xmldom warning]\t' + brqgkl, Sgrkqlb(this['locator']));
    },
    'error': function (f3a79e) {
        console['error']('[xmldom error]\t' + f3a79e, Sgrkqlb(this['locator']));
    },
    'fatalError': function (ateizs) {
        throw console['error']('[xmldom fatalError]\t' + ateizs, Sgrkqlb(this['locator'])), ateizs;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f39e) {
    Sbqrgxk['prototype'][f39e] = function () {
        return null;
    };
});
var Saeti = require('./rmgmn')['XMLReader'],
    Skqrp8 = exports['DOMImplementation'] = require('./pb')['DOMImplementation'];
exports['XMLSerializer'] = require('./pb')['XMLSerializer'], exports['DOMParser'] = Sqgbrx;