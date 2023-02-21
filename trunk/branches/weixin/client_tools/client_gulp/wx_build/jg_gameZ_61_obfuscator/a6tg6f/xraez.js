var f = wx.$B;
function Sd2jm1$(nu67ao) {
    this['options'] = nu67ao || { 'locator': {} };
}
function Sm1dz2(ex0qon, t8dm$j, $kpft) {
    function m12($tjmd8) {
        var ghw3_ = ex0qon[$tjmd8];
        !ghw3_ && v53h9 && (ghw3_ = 0x2 == ex0qon['length'] ? function (oeq0nx) {
            ex0qon($tjmd8, oeq0nx);
        } : ex0qon), qroe0x[$tjmd8] = ghw3_ && function (u6y_) {
            ghw3_('[xmldom ' + $tjmd8 + ']\t' + u6y_ + Sy_g4w6($kpft));
        } || function () {};
    }
    if (!ex0qon) {
        if (t8dm$j instanceof Swb3g_h) return t8dm$j;
        ex0qon = t8dm$j;
    }
    var qroe0x = {},
        v53h9 = ex0qon instanceof Function;
    return $kpft = $kpft || {}, m12('warning'), m12('error'), m12('fatalError'), qroe0x;
}
function Swb3g_h() {
    this['cdata'] = !0x1;
}
function Sv3h5b(vwgb3h, tp$fk) {
    tp$fk['lineNumber'] = vwgb3h['lineNumber'], tp$fk['columnNumber'] = vwgb3h['columnNumber'];
}
function Sy_g4w6(vgbh) {
    return vgbh ? '\x0a@' + (vgbh['systemId'] || '') + '#[line:' + vgbh['lineNumber'] + ',col:' + vgbh['columnNumber'] + ']' : void 0x0;
}
function Su6na7o(w_4uy, vw3bh, gw3_y4) {
    return 'string' == typeof w_4uy ? w_4uy['substr'](vw3bh, gw3_y4) : w_4uy['length'] >= vw3bh + gw3_y4 || vw3bh ? new java['lang']['String'](w_4uy, vw3bh, gw3_y4) + '' : w_4uy;
}
function Soenq0x(fitpk, z1l92) {
    fitpk['currentElement'] ? fitpk['currentElement']['appendChild'](z1l92) : fitpk['doc']['appendChild'](z1l92);
}
Sd2jm1$['prototype']['parseFromString'] = function (fk$8d, xro0q) {
    var xen7qo = this['options'],
        kspfti = new Sy6w_u(),
        dtk8 = xen7qo['domBuilder'] || new Swb3g_h(),
        stpki = xen7qo['errorHandler'],
        auo67n = xen7qo['locator'],
        j$8dtm = xen7qo['xmlns'] || {},
        bgw_ = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return auo67n && dtk8['setDocumentLocator'](auo67n), kspfti['errorHandler'] = Sm1dz2(stpki, dtk8, auo67n), kspfti['domBuilder'] = xen7qo['domBuilder'] || dtk8, /\/x?html?$/['test'](xro0q) && (bgw_['nbsp'] = '\u00a0', bgw_['copy'] = '©', j$8dtm[''] = 'http://www.w3.org/1999/xhtml'), j$8dtm['xml'] = j$8dtm['xml'] || 'http://www.w3.org/XML/1998/namespace', fk$8d ? kspfti['parse'](fk$8d, j$8dtm, bgw_) : kspfti['errorHandler']['error']('invalid doc source'), dtk8['doc'];
}, Swb3g_h['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Sd1z()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ybgw_3, sikt, u6an7, _4gyw6) {
        var u7an6 = this['doc'],
            ay_64 = u7an6['createElementNS'](ybgw_3, u6an7 || sikt),
            _wg3y = _4gyw6['length'];
        Soenq0x(this, ay_64), this['currentElement'] = ay_64, this['locator'] && Sv3h5b(this['locator'], ay_64);
        for (var hlv9z5 = 0x0; _wg3y > hlv9z5; hlv9z5++) {
            var ybgw_3 = _4gyw6['getURI'](hlv9z5),
                tj8m$ = _4gyw6['getValue'](hlv9z5),
                u6an7 = _4gyw6['getQName'](hlv9z5),
                nuao67 = u7an6['createAttributeNS'](ybgw_3, u6an7);
            this['locator'] && Sv3h5b(_4gyw6['getLocator'](hlv9z5), nuao67), nuao67['value'] = nuao67['nodeValue'] = tj8m$, ay_64['setAttributeNode'](nuao67);
        }
    },
    'endElement': function () {
        {
            var o6a7n = this['currentElement'];
            o6a7n['tagName'];
        }
        this['currentElement'] = o6a7n['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (nuaox7, gvbw) {
        var qeo7xn = this['doc']['createProcessingInstruction'](nuaox7, gvbw);
        this['locator'] && Sv3h5b(this['locator'], qeo7xn), Soenq0x(this, qeo7xn);
    },
    'ignorableWhitespace': function () {},
    'characters': function ($tkm8d) {
        if ($tkm8d = Su6na7o['apply'](this, arguments)) {
            if (this['cdata']) var j1l9 = this['doc']['createCDATASection']($tkm8d);else var j1l9 = this['doc']['createTextNode']($tkm8d);
            this['currentElement'] ? this['currentElement']['appendChild'](j1l9) : /^\s*$/['test']($tkm8d) && this['doc']['appendChild'](j1l9), this['locator'] && Sv3h5b(this['locator'], j1l9);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (mj1$2) {
        (this['locator'] = mj1$2) && (mj1$2['lineNumber'] = 0x0);
    },
    'comment': function (fptks8) {
        fptks8 = Su6na7o['apply'](this, arguments);
        var eonxq7 = this['doc']['createComment'](fptks8);
        this['locator'] && Sv3h5b(this['locator'], eonxq7), Soenq0x(this, eonxq7);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (wg_yb, lzmj, uwy) {
        var $dmtk8 = this['doc']['implementation'];
        if ($dmtk8 && $dmtk8['createDocumentType']) {
            var g_yw34 = $dmtk8['createDocumentType'](wg_yb, lzmj, uwy);
            this['locator'] && Sv3h5b(this['locator'], g_yw34), Soenq0x(this, g_yw34);
        }
    },
    'warning': function (_g4w6) {
        console['warn']('[xmldom warning]\t' + _g4w6, Sy_g4w6(this['locator']));
    },
    'error': function (h9v3b5) {
        console['error']('[xmldom error]\t' + h9v3b5, Sy_g4w6(this['locator']));
    },
    'fatalError': function (qxe7) {
        throw console['error']('[xmldom fatalError]\t' + qxe7, Sy_g4w6(this['locator'])), qxe7;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (eoqxn0) {
    Swb3g_h['prototype'][eoqxn0] = function () {
        return null;
    };
});
var Sy6w_u = require('./zz')['XMLReader'],
    Sd1z = exports['DOMImplementation'] = require('./c3jgy')['DOMImplementation'];
exports['XMLSerializer'] = require('./c3jgy')['XMLSerializer'], exports['DOMParser'] = Sd2jm1$;