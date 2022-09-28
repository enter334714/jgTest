var f = wx.$B;
function Svh92(ds4fb) {
    this['options'] = ds4fb || { 'locator': {} };
}
function Svh920(qlz1oe, mayj6, zeq15l) {
    function ojaqmu(jo1lu) {
        var p8wi = qlz1oe[jo1lu];
        !p8wi && ajumo && (p8wi = 0x2 == qlz1oe['length'] ? function (i8_px) {
            qlz1oe(jo1lu, i8_px);
        } : qlz1oe), kt4fs7[jo1lu] = p8wi && function (v2dfgb) {
            p8wi('[xmldom ' + jo1lu + ']\t' + v2dfgb + Sqez1(zeq15l));
        } || function () {};
    }
    if (!qlz1oe) {
        if (mayj6 instanceof Sir8xw$) return mayj6;
        qlz1oe = mayj6;
    }
    var kt4fs7 = {},
        ajumo = qlz1oe instanceof Function;
    return zeq15l = zeq15l || {}, ojaqmu('warning'), ojaqmu('error'), ojaqmu('fatalError'), kt4fs7;
}
function Sir8xw$() {
    this['cdata'] = !0x1;
}
function Sqm(uoaqjm, ym6auj) {
    ym6auj['lineNumber'] = uoaqjm['lineNumber'], ym6auj['columnNumber'] = uoaqjm['columnNumber'];
}
function Sqez1(s4dkbf) {
    return s4dkbf ? '\x0a@' + (s4dkbf['systemId'] || '') + '#[line:' + s4dkbf['lineNumber'] + ',col:' + s4dkbf['columnNumber'] + ']' : void 0x0;
}
function Sx$pn_i(w7ts4, w8xip$, xrt$) {
    return 'string' == typeof w7ts4 ? w7ts4['substr'](w8xip$, xrt$) : w7ts4['length'] >= w8xip$ + xrt$ || w8xip$ ? new java['lang']['String'](w7ts4, w8xip$, xrt$) + '' : w7ts4;
}
function Sdfb4k(tr7sw4, e1lozq) {
    tr7sw4['currentElement'] ? tr7sw4['currentElement']['appendChild'](e1lozq) : tr7sw4['doc']['appendChild'](e1lozq);
}
Svh92['prototype']['parseFromString'] = function (myu96a, d2vgb3) {
    var aquoj1 = this['options'],
        ri8xw = new Sh9360(),
        p$_i8 = aquoj1['domBuilder'] || new Sir8xw$(),
        k4f7t = aquoj1['errorHandler'],
        zoqjl1 = aquoj1['locator'],
        mua9y6 = aquoj1['xmlns'] || {},
        kdgf4 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return zoqjl1 && p$_i8['setDocumentLocator'](zoqjl1), ri8xw['errorHandler'] = Svh920(k4f7t, p$_i8, zoqjl1), ri8xw['domBuilder'] = aquoj1['domBuilder'] || p$_i8, /\/x?html?$/['test'](d2vgb3) && (kdgf4['nbsp'] = '\u00a0', kdgf4['copy'] = '©', mua9y6[''] = 'http://www.w3.org/1999/xhtml'), mua9y6['xml'] = mua9y6['xml'] || 'http://www.w3.org/XML/1998/namespace', myu96a ? ri8xw['parse'](myu96a, mua9y6, kdgf4) : ri8xw['errorHandler']['error']('invalid doc source'), p$_i8['doc'];
}, Sir8xw$['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Sgbd4kf()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (oyu, ks74df, myjoua, ua69y) {
        var x$w8rt = this['doc'],
            umoaq = x$w8rt['createElementNS'](oyu, myjoua || ks74df),
            b0vg23 = ua69y['length'];
        Sdfb4k(this, umoaq), this['currentElement'] = umoaq, this['locator'] && Sqm(this['locator'], umoaq);
        for (var fk4sd = 0x0; b0vg23 > fk4sd; fk4sd++) {
            var oyu = ua69y['getURI'](fk4sd),
                a1ujoq = ua69y['getValue'](fk4sd),
                myjoua = ua69y['getQName'](fk4sd),
                ixn_$p = x$w8rt['createAttributeNS'](oyu, myjoua);
            this['locator'] && Sqm(ua69y['getLocator'](fk4sd), ixn_$p), ixn_$p['value'] = ixn_$p['nodeValue'] = a1ujoq, umoaq['setAttributeNode'](ixn_$p);
        }
    },
    'endElement': function () {
        {
            var xrw$t = this['currentElement'];
            xrw$t['tagName'];
        }
        this['currentElement'] = xrw$t['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (umy9a, ri) {
        var umjyoa = this['doc']['createProcessingInstruction'](umy9a, ri);
        this['locator'] && Sqm(this['locator'], umjyoa), Sdfb4k(this, umjyoa);
    },
    'ignorableWhitespace': function () {},
    'characters': function (y609) {
        if (y609 = Sx$pn_i['apply'](this, arguments)) {
            if (this['cdata']) var m9ayu6 = this['doc']['createCDATASection'](y609);else var m9ayu6 = this['doc']['createTextNode'](y609);
            this['currentElement'] ? this['currentElement']['appendChild'](m9ayu6) : /^\s*$/['test'](y609) && this['doc']['appendChild'](m9ayu6), this['locator'] && Sqm(this['locator'], m9ayu6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (gf2bvd) {
        (this['locator'] = gf2bvd) && (gf2bvd['lineNumber'] = 0x0);
    },
    'comment': function ($n_ix) {
        $n_ix = Sx$pn_i['apply'](this, arguments);
        var ymh6a = this['doc']['createComment']($n_ix);
        this['locator'] && Sqm(this['locator'], ymh6a), Sdfb4k(this, ymh6a);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (u1qjlo, bfksd4, i$n_) {
        var zeq1ol = this['doc']['implementation'];
        if (zeq1ol && zeq1ol['createDocumentType']) {
            var b2vfd = zeq1ol['createDocumentType'](u1qjlo, bfksd4, i$n_);
            this['locator'] && Sqm(this['locator'], b2vfd), Sdfb4k(this, b2vfd);
        }
    },
    'warning': function (t4fsk) {
        console['warn']('[xmldom warning]\t' + t4fsk, Sqez1(this['locator']));
    },
    'error': function (pin) {
        console['error']('[xmldom error]\t' + pin, Sqez1(this['locator']));
    },
    'fatalError': function ($trw7) {
        throw console['error']('[xmldom fatalError]\t' + $trw7, Sqez1(this['locator'])), $trw7;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lqze1o) {
    Sir8xw$['prototype'][lqze1o] = function () {
        return null;
    };
});
var Sh9360 = require('./wl8tk')['XMLReader'],
    Sgbd4kf = exports['DOMImplementation'] = require('./fi')['DOMImplementation'];
exports['XMLSerializer'] = require('./fi')['XMLSerializer'], exports['DOMParser'] = Svh92;