var W = wx.$l;
function L9zk32v(mq0$oh) {
    this['options'] = mq0$oh || { 'locator': {} };
}
function L9fulbd8($g0tom, z6_v2, axu9) {
    function ad95xs(bf9) {
        var blf8d = $g0tom[bf9];
        !blf8d && poq4s && (blf8d = 0x2 == $g0tom['length'] ? function (xs4p5) {
            $g0tom(bf9, xs4p5);
        } : $g0tom), bflud8[bf9] = blf8d && function (y7ecwn) {
            blf8d('[xmldom ' + bf9 + ']\t' + y7ecwn + L9u8(axu9));
        } || function () {};
    }
    if (!$g0tom) {
        if (z6_v2 instanceof L9w3c7ky) return z6_v2;
        $g0tom = z6_v2;
    }
    var bflud8 = {},
        poq4s = $g0tom instanceof Function;
    return axu9 = axu9 || {}, ad95xs('warning'), ad95xs('error'), ad95xs('fatalError'), bflud8;
}
function L9w3c7ky() {
    this['cdata'] = !0x1;
}
function L9u9d5x(tom0$g, v3k2yz) {
    v3k2yz['lineNumber'] = tom0$g['lineNumber'], v3k2yz['columnNumber'] = tom0$g['columnNumber'];
}
function L9u8(cwy7) {
    return cwy7 ? '\x0a@' + (cwy7['systemId'] || '') + '#[line:' + cwy7['lineNumber'] + ',col:' + cwy7['columnNumber'] + ']' : void 0x0;
}
function L9ap9xs5(i8lbf, hpsq, wck73) {
    return 'string' == typeof i8lbf ? i8lbf['substr'](hpsq, wck73) : i8lbf['length'] >= hpsq + wck73 || hpsq ? new java['lang']['String'](i8lbf, hpsq, wck73) + '' : i8lbf;
}
function L9fl18ib(mh0ot$, a9dx) {
    mh0ot$['currentElement'] ? mh0ot$['currentElement']['appendChild'](a9dx) : mh0ot$['doc']['appendChild'](a9dx);
}
L9zk32v['prototype']['parseFromString'] = function (yz2vk3, ubli8f) {
    var _z623 = this['options'],
        xudfl = new L9yw3kc7(),
        r7jcn = _z623['domBuilder'] || new L9w3c7ky(),
        wykcn = _z623['errorHandler'],
        l9xdu = _z623['locator'],
        i1f8lb = _z623['xmlns'] || {},
        q54psa = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return l9xdu && r7jcn['setDocumentLocator'](l9xdu), xudfl['errorHandler'] = L9fulbd8(wykcn, r7jcn, l9xdu), xudfl['domBuilder'] = _z623['domBuilder'] || r7jcn, /\/x?html?$/['test'](ubli8f) && (q54psa['nbsp'] = '\u00a0', q54psa['copy'] = '©', i1f8lb[''] = 'http://www.w3.org/1999/xhtml'), i1f8lb['xml'] = i1f8lb['xml'] || 'http://www.w3.org/XML/1998/namespace', yz2vk3 ? xudfl['parse'](yz2vk3, i1f8lb, q54psa) : xudfl['errorHandler']['error']('invalid doc source'), r7jcn['doc'];
}, L9w3c7ky['prototype'] = {
    'startDocument': function () {
        this['doc'] = new L9lifub()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (i_216v, othm0, d9lxfu, got) {
        var jer7nc = this['doc'],
            xds59 = jer7nc['createElementNS'](i_216v, d9lxfu || othm0),
            xdfa9 = got['length'];
        L9fl18ib(this, xds59), this['currentElement'] = xds59, this['locator'] && L9u9d5x(this['locator'], xds59);
        for (var aq5s = 0x0; xdfa9 > aq5s; aq5s++) {
            var i_216v = got['getURI'](aq5s),
                omgt0 = got['getValue'](aq5s),
                d9lxfu = got['getQName'](aq5s),
                ncwyk7 = jer7nc['createAttributeNS'](i_216v, d9lxfu);
            this['locator'] && L9u9d5x(got['getLocator'](aq5s), ncwyk7), ncwyk7['value'] = ncwyk7['nodeValue'] = omgt0, xds59['setAttributeNode'](ncwyk7);
        }
    },
    'endElement': function () {
        {
            var xaud = this['currentElement'];
            xaud['tagName'];
        }
        this['currentElement'] = xaud['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ykvw3z, v3) {
        var k37cwy = this['doc']['createProcessingInstruction'](ykvw3z, v3);
        this['locator'] && L9u9d5x(this['locator'], k37cwy), L9fl18ib(this, k37cwy);
    },
    'ignorableWhitespace': function () {},
    'characters': function (bu8if) {
        if (bu8if = L9ap9xs5['apply'](this, arguments)) {
            if (this['cdata']) var xap4 = this['doc']['createCDATASection'](bu8if);else var xap4 = this['doc']['createTextNode'](bu8if);
            this['currentElement'] ? this['currentElement']['appendChild'](xap4) : /^\s*$/['test'](bu8if) && this['doc']['appendChild'](xap4), this['locator'] && L9u9d5x(this['locator'], xap4);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (sa9d) {
        (this['locator'] = sa9d) && (sa9d['lineNumber'] = 0x0);
    },
    'comment': function (dfu9a) {
        dfu9a = L9ap9xs5['apply'](this, arguments);
        var qh4o0m = this['doc']['createComment'](dfu9a);
        this['locator'] && L9u9d5x(this['locator'], qh4o0m), L9fl18ib(this, qh4o0m);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (a4q5sp, pqa4, w3y7kc) {
        var dul8bf = this['doc']['implementation'];
        if (dul8bf && dul8bf['createDocumentType']) {
            var ux5d9 = dul8bf['createDocumentType'](a4q5sp, pqa4, w3y7kc);
            this['locator'] && L9u9d5x(this['locator'], ux5d9), L9fl18ib(this, ux5d9);
        }
    },
    'warning': function (pso4qh) {
        console['warn']('[xmldom warning]\t' + pso4qh, L9u8(this['locator']));
    },
    'error': function (li681) {
        console['error']('[xmldom error]\t' + li681, L9u8(this['locator']));
    },
    'fatalError': function (qs5h4) {
        throw console['error']('[xmldom fatalError]\t' + qs5h4, L9u8(this['locator'])), qs5h4;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hqop04) {
    L9w3c7ky['prototype'][hqop04] = function () {
        return null;
    };
});
var L9yw3kc7 = require('./lllSAX')['XMLReader'],
    L9lifub = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];
exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9zk32v;