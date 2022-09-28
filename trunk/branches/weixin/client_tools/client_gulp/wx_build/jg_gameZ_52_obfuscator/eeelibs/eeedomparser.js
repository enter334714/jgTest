var b = wx.$e;
function ehrzty(b06sk) {
    this['options'] = b06sk || { 'locator': {} };
}
function e_ca47m(ujiq3n, camo7p, zhly) {
    function vf47(_y47vf) {
        var y7_ = ujiq3n[_y47vf];
        !y7_ && fy_v47 && (y7_ = 0x2 == ujiq3n['length'] ? function ($tlxg) {
            ujiq3n(_y47vf, $tlxg);
        } : ujiq3n), t$xij[_y47vf] = y7_ && function ($n3) {
            y7_('[xmldom ' + _y47vf + ']\t' + $n3 + et$jg(zhly));
        } || function () {};
    }
    if (!ujiq3n) {
        if (camo7p instanceof ezltghr) return camo7p;
        ujiq3n = camo7p;
    }
    var t$xij = {},
        fy_v47 = ujiq3n instanceof Function;
    return zhly = zhly || {}, vf47('warning'), vf47('error'), vf47('fatalError'), t$xij;
}
function ezltghr() {
    this['cdata'] = !0x1;
}
function euqnks(ku9bs, jx$q3) {
    jx$q3['lineNumber'] = ku9bs['lineNumber'], jx$q3['columnNumber'] = ku9bs['columnNumber'];
}
function et$jg(hzgr) {
    return hzgr ? '\x0a@' + (hzgr['systemId'] || '') + '#[line:' + hzgr['lineNumber'] + ',col:' + hzgr['columnNumber'] + ']' : void 0x0;
}
function ef_vy74(tgrxhl, k60b5, op7a) {
    return 'string' == typeof tgrxhl ? tgrxhl['substr'](k60b5, op7a) : tgrxhl['length'] >= k60b5 + op7a || k60b5 ? new java['lang']['String'](tgrxhl, k60b5, op7a) + '' : tgrxhl;
}
function emcao(i3nqu, _oca7) {
    i3nqu['currentElement'] ? i3nqu['currentElement']['appendChild'](_oca7) : i3nqu['doc']['appendChild'](_oca7);
}
ehrzty['prototype']['parseFromString'] = function (hlrtgx, j3qiu) {
    var _7yfv = this['options'],
        $nq3ij = new ew2d580(),
        trxgh = _7yfv['domBuilder'] || new ezltghr(),
        emaop = _7yfv['errorHandler'],
        moc_7 = _7yfv['locator'],
        k60b9s = _7yfv['xmlns'] || {},
        $jgtix = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return moc_7 && trxgh['setDocumentLocator'](moc_7), $nq3ij['errorHandler'] = e_ca47m(emaop, trxgh, moc_7), $nq3ij['domBuilder'] = _7yfv['domBuilder'] || trxgh, /\/x?html?$/['test'](j3qiu) && ($jgtix['nbsp'] = '\u00a0', $jgtix['copy'] = '©', k60b9s[''] = 'http://www.w3.org/1999/xhtml'), k60b9s['xml'] = k60b9s['xml'] || 'http://www.w3.org/XML/1998/namespace', hlrtgx ? $nq3ij['parse'](hlrtgx, k60b9s, $jgtix) : $nq3ij['errorHandler']['error']('invalid doc source'), trxgh['doc'];
}, ezltghr['prototype'] = {
    'startDocument': function () {
        this['doc'] = new efy4rzv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (omapc, $ij3gx, sk9qn, zvyrf) {
        var k9s6bu = this['doc'],
            k6ub = k9s6bu['createElementNS'](omapc, sk9qn || $ij3gx),
            pamc7o = zvyrf['length'];
        emcao(this, k6ub), this['currentElement'] = k6ub, this['locator'] && euqnks(this['locator'], k6ub);
        for (var i$j3q = 0x0; pamc7o > i$j3q; i$j3q++) {
            var omapc = zvyrf['getURI'](i$j3q),
                k96d = zvyrf['getValue'](i$j3q),
                sk9qn = zvyrf['getQName'](i$j3q),
                snk9u = k9s6bu['createAttributeNS'](omapc, sk9qn);
            this['locator'] && euqnks(zvyrf['getLocator'](i$j3q), snk9u), snk9u['value'] = snk9u['nodeValue'] = k96d, k6ub['setAttributeNode'](snk9u);
        }
    },
    'endElement': function () {
        {
            var $xgj3i = this['currentElement'];
            $xgj3i['tagName'];
        }
        this['currentElement'] = $xgj3i['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (_7va4m, gx$li) {
        var b08d5w = this['doc']['createProcessingInstruction'](_7va4m, gx$li);
        this['locator'] && euqnks(this['locator'], b08d5w), emcao(this, b08d5w);
    },
    'ignorableWhitespace': function () {},
    'characters': function (zryhtl) {
        if (zryhtl = ef_vy74['apply'](this, arguments)) {
            if (this['cdata']) var b09k = this['doc']['createCDATASection'](zryhtl);else var b09k = this['doc']['createTextNode'](zryhtl);
            this['currentElement'] ? this['currentElement']['appendChild'](b09k) : /^\s*$/['test'](zryhtl) && this['doc']['appendChild'](b09k), this['locator'] && euqnks(this['locator'], b09k);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (fzrhl) {
        (this['locator'] = fzrhl) && (fzrhl['lineNumber'] = 0x0);
    },
    'comment': function (m4ac7) {
        m4ac7 = ef_vy74['apply'](this, arguments);
        var xt$jgi = this['doc']['createComment'](m4ac7);
        this['locator'] && euqnks(this['locator'], xt$jgi), emcao(this, xt$jgi);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function ($gil, kbs069, kb0) {
        var zfhl = this['doc']['implementation'];
        if (zfhl && zfhl['createDocumentType']) {
            var hfy = zfhl['createDocumentType']($gil, kbs069, kb0);
            this['locator'] && euqnks(this['locator'], hfy), emcao(this, hfy);
        }
    },
    'warning': function ($xij) {
        console['warn']('[xmldom warning]\t' + $xij, et$jg(this['locator']));
    },
    'error': function (jiu) {
        console['error']('[xmldom error]\t' + jiu, et$jg(this['locator']));
    },
    'fatalError': function (un3jiq) {
        throw console['error']('[xmldom fatalError]\t' + un3jiq, et$jg(this['locator'])), un3jiq;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fvyhz) {
    ezltghr['prototype'][fvyhz] = function () {
        return null;
    };
});
var ew2d580 = require('./eeesax')['XMLReader'],
    efy4rzv = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ehrzty;