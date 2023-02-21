var m = wx.$g;
function gu6jmr(fodt) {
    this['options'] = fodt || { 'locator': {} };
}
function ggsl9c8(a1ikx, pxb5ia, z2dr6) {
    function ykewh(p04f_t) {
        var fb_p = a1ikx[p04f_t];
        !fb_p && dj2zr6 && (fb_p = 0x2 == a1ikx['length'] ? function (yx1whk) {
            a1ikx(p04f_t, yx1whk);
        } : a1ikx), ixabp[p04f_t] = fb_p && function (wvek7) {
            fb_p('[xmldom ' + p04f_t + ']\t' + wvek7 + gygqe7(z2dr6));
        } || function () {};
    }
    if (!a1ikx) {
        if (pxb5ia instanceof go63) return pxb5ia;
        a1ikx = pxb5ia;
    }
    var ixabp = {},
        dj2zr6 = a1ikx instanceof Function;
    return z2dr6 = z2dr6 || {}, ykewh('warning'), ykewh('error'), ykewh('fatalError'), ixabp;
}
function go63() {
    this['cdata'] = !0x1;
}
function ga0ip5(kew1yv, hkai) {
    hkai['lineNumber'] = kew1yv['lineNumber'], hkai['columnNumber'] = kew1yv['columnNumber'];
}
function gygqe7(_pbi50) {
    return _pbi50 ? '\x0a@' + (_pbi50['systemId'] || '') + '#[line:' + _pbi50['lineNumber'] + ',col:' + _pbi50['columnNumber'] + ']' : void 0x0;
}
function gqc8sgl(xapbi, kyweh, j2d6r) {
    return 'string' == typeof xapbi ? xapbi['substr'](kyweh, j2d6r) : xapbi['length'] >= kyweh + j2d6r || kyweh ? new java['lang']['String'](xapbi, kyweh, j2d6r) + '' : xapbi;
}
function gz2do34(pxai, $2z6) {
    pxai['currentElement'] ? pxai['currentElement']['appendChild']($2z6) : pxai['doc']['appendChild']($2z6);
}
gu6jmr['prototype']['parseFromString'] = function (yhw1ek, wy1v) {
    var akx1 = this['options'],
        ia50pb = new gzrj2d6(),
        ai1x5 = akx1['domBuilder'] || new go63(),
        cgqs7v = akx1['errorHandler'],
        hbiax = akx1['locator'],
        g7yqev = akx1['xmlns'] || {},
        abpi05 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return hbiax && ai1x5['setDocumentLocator'](hbiax), ia50pb['errorHandler'] = ggsl9c8(cgqs7v, ai1x5, hbiax), ia50pb['domBuilder'] = akx1['domBuilder'] || ai1x5, /\/x?html?$/['test'](wy1v) && (abpi05['nbsp'] = '\u00a0', abpi05['copy'] = '©', g7yqev[''] = 'http://www.w3.org/1999/xhtml'), g7yqev['xml'] = g7yqev['xml'] || 'http://www.w3.org/XML/1998/namespace', yhw1ek ? ia50pb['parse'](yhw1ek, g7yqev, abpi05) : ia50pb['errorHandler']['error']('invalid doc source'), ai1x5['doc'];
}, go63['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gw7kevy()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (o3tf, urmj6, ix5pab, _ip05b) {
        var yqw7 = this['doc'],
            xbpa5 = yqw7['createElementNS'](o3tf, ix5pab || urmj6),
            t34_of = _ip05b['length'];
        gz2do34(this, xbpa5), this['currentElement'] = xbpa5, this['locator'] && ga0ip5(this['locator'], xbpa5);
        for (var _03t = 0x0; t34_of > _03t; _03t++) {
            var o3tf = _ip05b['getURI'](_03t),
                f4o3dt = _ip05b['getValue'](_03t),
                ix5pab = _ip05b['getQName'](_03t),
                khi1a = yqw7['createAttributeNS'](o3tf, ix5pab);
            this['locator'] && ga0ip5(_ip05b['getLocator'](_03t), khi1a), khi1a['value'] = khi1a['nodeValue'] = f4o3dt, xbpa5['setAttributeNode'](khi1a);
        }
    },
    'endElement': function () {
        {
            var gcl98 = this['currentElement'];
            gcl98['tagName'];
        }
        this['currentElement'] = gcl98['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (to4f, kahxw) {
        var _0pb = this['doc']['createProcessingInstruction'](to4f, kahxw);
        this['locator'] && ga0ip5(this['locator'], _0pb), gz2do34(this, _0pb);
    },
    'ignorableWhitespace': function () {},
    'characters': function (xwahk1) {
        if (xwahk1 = gqc8sgl['apply'](this, arguments)) {
            if (this['cdata']) var wkey7 = this['doc']['createCDATASection'](xwahk1);else var wkey7 = this['doc']['createTextNode'](xwahk1);
            this['currentElement'] ? this['currentElement']['appendChild'](wkey7) : /^\s*$/['test'](xwahk1) && this['doc']['appendChild'](wkey7), this['locator'] && ga0ip5(this['locator'], wkey7);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (bap0) {
        (this['locator'] = bap0) && (bap0['lineNumber'] = 0x0);
    },
    'comment': function (ak1h) {
        ak1h = gqc8sgl['apply'](this, arguments);
        var zr6$ = this['doc']['createComment'](ak1h);
        this['locator'] && ga0ip5(this['locator'], zr6$), gz2do34(this, zr6$);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (h1x5i, u62jr, yk1hxw) {
        var qcg78s = this['doc']['implementation'];
        if (qcg78s && qcg78s['createDocumentType']) {
            var ahikx = qcg78s['createDocumentType'](h1x5i, u62jr, yk1hxw);
            this['locator'] && ga0ip5(this['locator'], ahikx), gz2do34(this, ahikx);
        }
    },
    'warning': function (tf_40p) {
        console['warn']('[xmldom warning]\t' + tf_40p, gygqe7(this['locator']));
    },
    'error': function (vqw7) {
        console['error']('[xmldom error]\t' + vqw7, gygqe7(this['locator']));
    },
    'fatalError': function (t3o4fd) {
        throw console['error']('[xmldom fatalError]\t' + t3o4fd, gygqe7(this['locator'])), t3o4fd;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kw1ye) {
    go63['prototype'][kw1ye] = function () {
        return null;
    };
});
var gzrj2d6 = require('./gggsax')['XMLReader'],
    gw7kevy = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gu6jmr;