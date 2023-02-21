var Q = wx.$v;
function vz96ob(b_9zp6) {
    this['options'] = b_9zp6 || { 'locator': {} };
}
function va5oe7(q8tr, p69d0, ob6_5z) {
    function klrvw(lvw3k) {
        var dn9p = q8tr[lvw3k];
        !dn9p && j8xgtq && (dn9p = 0x2 == q8tr['length'] ? function (ef5_o7) {
            q8tr(lvw3k, ef5_o7);
        } : q8tr), jkrtx[lvw3k] = dn9p && function (xtrv) {
            dn9p('[xmldom ' + lvw3k + ']\t' + xtrv + v_zo5f7(ob6_5z));
        } || function () {};
    }
    if (!q8tr) {
        if (p69d0 instanceof vz96_b) return p69d0;
        q8tr = p69d0;
    }
    var jkrtx = {},
        j8xgtq = q8tr instanceof Function;
    return ob6_5z = ob6_5z || {}, klrvw('warning'), klrvw('error'), klrvw('fatalError'), jkrtx;
}
function vz96_b() {
    this['cdata'] = !0x1;
}
function vbo_65(p0dnu2, o6_z) {
    o6_z['lineNumber'] = p0dnu2['lineNumber'], o6_z['columnNumber'] = p0dnu2['columnNumber'];
}
function v_zo5f7(_f7z5) {
    return _f7z5 ? '\x0a@' + (_f7z5['systemId'] || '') + '#[line:' + _f7z5['lineNumber'] + ',col:' + _f7z5['columnNumber'] + ']' : void 0x0;
}
function vui1nc$(_z5, o75ae, nupd0) {
    return 'string' == typeof _z5 ? _z5['substr'](o75ae, nupd0) : _z5['length'] >= o75ae + nupd0 || o75ae ? new java['lang']['String'](_z5, o75ae, nupd0) + '' : _z5;
}
function vof5_7z(bzo_69, un0i1c) {
    bzo_69['currentElement'] ? bzo_69['currentElement']['appendChild'](un0i1c) : bzo_69['doc']['appendChild'](un0i1c);
}
vz96ob['prototype']['parseFromString'] = function (rxtkw, vkl3h) {
    var niu2 = this['options'],
        lwv3hk = new vb5_fzo(),
        ofb5 = niu2['domBuilder'] || new vz96_b(),
        c$iym1 = niu2['errorHandler'],
        wml3h = niu2['locator'],
        jxrtqk = niu2['xmlns'] || {},
        jqxgs = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return wml3h && ofb5['setDocumentLocator'](wml3h), lwv3hk['errorHandler'] = va5oe7(c$iym1, ofb5, wml3h), lwv3hk['domBuilder'] = niu2['domBuilder'] || ofb5, /\/x?html?$/['test'](vkl3h) && (jqxgs['nbsp'] = '\u00a0', jqxgs['copy'] = '©', jxrtqk[''] = 'http://www.w3.org/1999/xhtml'), jxrtqk['xml'] = jxrtqk['xml'] || 'http://www.w3.org/XML/1998/namespace', rxtkw ? lwv3hk['parse'](rxtkw, jxrtqk, jqxgs) : lwv3hk['errorHandler']['error']('invalid doc source'), ofb5['doc'];
}, vz96_b['prototype'] = {
    'startDocument': function () {
        this['doc'] = new vtj8g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (_69zpb, xt8qjr, eof57, k3t) {
        var e7aof5 = this['doc'],
            n12ui0 = e7aof5['createElementNS'](_69zpb, eof57 || xt8qjr),
            ktqw = k3t['length'];
        vof5_7z(this, n12ui0), this['currentElement'] = n12ui0, this['locator'] && vbo_65(this['locator'], n12ui0);
        for (var iu1$c = 0x0; ktqw > iu1$c; iu1$c++) {
            var _69zpb = k3t['getURI'](iu1$c),
                ic1$un = k3t['getValue'](iu1$c),
                eof57 = k3t['getQName'](iu1$c),
                ob6_9 = e7aof5['createAttributeNS'](_69zpb, eof57);
            this['locator'] && vbo_65(k3t['getLocator'](iu1$c), ob6_9), ob6_9['value'] = ob6_9['nodeValue'] = ic1$un, n12ui0['setAttributeNode'](ob6_9);
        }
    },
    'endElement': function () {
        {
            var zb5o6 = this['currentElement'];
            zb5o6['tagName'];
        }
        this['currentElement'] = zb5o6['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function ($u, foe7_5) {
        var mly$3 = this['doc']['createProcessingInstruction']($u, foe7_5);
        this['locator'] && vbo_65(this['locator'], mly$3), vof5_7z(this, mly$3);
    },
    'ignorableWhitespace': function () {},
    'characters': function (d2n09p) {
        if (d2n09p = vui1nc$['apply'](this, arguments)) {
            if (this['cdata']) var mc1h$ = this['doc']['createCDATASection'](d2n09p);else var mc1h$ = this['doc']['createTextNode'](d2n09p);
            this['currentElement'] ? this['currentElement']['appendChild'](mc1h$) : /^\s*$/['test'](d2n09p) && this['doc']['appendChild'](mc1h$), this['locator'] && vbo_65(this['locator'], mc1h$);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (n2dpu0) {
        (this['locator'] = n2dpu0) && (n2dpu0['lineNumber'] = 0x0);
    },
    'comment': function (_zo5b6) {
        _zo5b6 = vui1nc$['apply'](this, arguments);
        var pbzd96 = this['doc']['createComment'](_zo5b6);
        this['locator'] && vbo_65(this['locator'], pbzd96), vof5_7z(this, pbzd96);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (zb56o, p6z9db, pd6bz9) {
        var p6b9 = this['doc']['implementation'];
        if (p6b9 && p6b9['createDocumentType']) {
            var b_9z6p = p6b9['createDocumentType'](zb56o, p6z9db, pd6bz9);
            this['locator'] && vbo_65(this['locator'], b_9z6p), vof5_7z(this, b_9z6p);
        }
    },
    'warning': function (yu1ci) {
        console['warn']('[xmldom warning]\t' + yu1ci, v_zo5f7(this['locator']));
    },
    'error': function (_7o5f) {
        console['error']('[xmldom error]\t' + _7o5f, v_zo5f7(this['locator']));
    },
    'fatalError': function (y1iu) {
        throw console['error']('[xmldom fatalError]\t' + y1iu, v_zo5f7(this['locator'])), y1iu;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hy$3l) {
    vz96_b['prototype'][hy$3l] = function () {
        return null;
    };
});
var vb5_fzo = require('./vv12vv')['XMLReader'],
    vtj8g = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];
exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vz96ob;