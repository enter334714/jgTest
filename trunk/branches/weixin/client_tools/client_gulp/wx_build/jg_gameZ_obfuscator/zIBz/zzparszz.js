var B = wx.$z;
function zlmi3(e1x9s) {
    this['options'] = e1x9s || { 'locator': {} };
}
function zh19xsp(_8ru52, k8_b, _yk8) {
    function ykdb8(rky8_b) {
        var nilv = _8ru52[rky8_b];
        !nilv && g4f6lv && (nilv = 0x2 == _8ru52['length'] ? function (oeyzd) {
            _8ru52(rky8_b, oeyzd);
        } : _8ru52), dtzoe[rky8_b] = nilv && function (m$ijq3) {
            nilv('[xmldom ' + rky8_b + ']\t' + m$ijq3 + ztybk(_yk8));
        } || function () {};
    }
    if (!_8ru52) {
        if (k8_b instanceof zrk8d) return k8_b;
        _8ru52 = k8_b;
    }
    var dtzoe = {},
        g4f6lv = _8ru52 instanceof Function;
    return _yk8 = _yk8 || {}, ykdb8('warning'), ykdb8('error'), ykdb8('fatalError'), dtzoe;
}
function zrk8d() {
    this['cdata'] = !0x1;
}
function zs1p9hx($im3q, axtsze) {
    axtsze['lineNumber'] = $im3q['lineNumber'], axtsze['columnNumber'] = $im3q['columnNumber'];
}
function ztybk(btoky) {
    return btoky ? '\x0a@' + (btoky['systemId'] || '') + '#[line:' + btoky['lineNumber'] + ',col:' + btoky['columnNumber'] + ']' : void 0x0;
}
function za91sh(stxz, dby8ok, n7ivf) {
    return 'string' == typeof stxz ? stxz['substr'](dby8ok, n7ivf) : stxz['length'] >= dby8ok + n7ivf || dby8ok ? new java['lang']['String'](stxz, dby8ok, n7ivf) + '' : stxz;
}
function zhp6g14(_k8ybr, gph9) {
    _k8ybr['currentElement'] ? _k8ybr['currentElement']['appendChild'](gph9) : _k8ybr['doc']['appendChild'](gph9);
}
zlmi3['prototype']['parseFromString'] = function (ni7lm3, qjm3$) {
    var _8b2r = this['options'],
        ax9s1 = new zr82_u(),
        deoy = _8b2r['domBuilder'] || new zrk8d(),
        $m7qi3 = _8b2r['errorHandler'],
        nim7 = _8b2r['locator'],
        tbyo = _8b2r['xmlns'] || {},
        tezoad = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return nim7 && deoy['setDocumentLocator'](nim7), ax9s1['errorHandler'] = zh19xsp($m7qi3, deoy, nim7), ax9s1['domBuilder'] = _8b2r['domBuilder'] || deoy, /\/x?html?$/['test'](qjm3$) && (tezoad['nbsp'] = '\u00a0', tezoad['copy'] = '©', tbyo[''] = 'http://www.w3.org/1999/xhtml'), tbyo['xml'] = tbyo['xml'] || 'http://www.w3.org/XML/1998/namespace', ni7lm3 ? ax9s1['parse'](ni7lm3, tbyo, tezoad) : ax9s1['errorHandler']['error']('invalid doc source'), deoy['doc'];
}, zrk8d['prototype'] = {
    'startDocument': function () {
        this['doc'] = new znlvif7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (r5_b8k, kdybo, astxz, i7q3n) {
        var txsz = this['doc'],
            eszxta = txsz['createElementNS'](r5_b8k, astxz || kdybo),
            oydk8b = i7q3n['length'];
        zhp6g14(this, eszxta), this['currentElement'] = eszxta, this['locator'] && zs1p9hx(this['locator'], eszxta);
        for (var i3mln = 0x0; oydk8b > i3mln; i3mln++) {
            var r5_b8k = i7q3n['getURI'](i3mln),
                l6nfv = i7q3n['getValue'](i3mln),
                astxz = i7q3n['getQName'](i3mln),
                ur5w_ = txsz['createAttributeNS'](r5_b8k, astxz);
            this['locator'] && zs1p9hx(i7q3n['getLocator'](i3mln), ur5w_), ur5w_['value'] = ur5w_['nodeValue'] = l6nfv, eszxta['setAttributeNode'](ur5w_);
        }
    },
    'endElement': function () {
        {
            var _w205u = this['currentElement'];
            _w205u['tagName'];
        }
        this['currentElement'] = _w205u['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (l6vnf7, sexat) {
        var hp614g = this['doc']['createProcessingInstruction'](l6vnf7, sexat);
        this['locator'] && zs1p9hx(this['locator'], hp614g), zhp6g14(this, hp614g);
    },
    'ignorableWhitespace': function () {},
    'characters': function (im3n) {
        if (im3n = za91sh['apply'](this, arguments)) {
            if (this['cdata']) var lvf4g6 = this['doc']['createCDATASection'](im3n);else var lvf4g6 = this['doc']['createTextNode'](im3n);
            this['currentElement'] ? this['currentElement']['appendChild'](lvf4g6) : /^\s*$/['test'](im3n) && this['doc']['appendChild'](lvf4g6), this['locator'] && zs1p9hx(this['locator'], lvf4g6);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (n64vl) {
        (this['locator'] = n64vl) && (n64vl['lineNumber'] = 0x0);
    },
    'comment': function (tdoa) {
        tdoa = za91sh['apply'](this, arguments);
        var zsx = this['doc']['createComment'](tdoa);
        this['locator'] && zs1p9hx(this['locator'], zsx), zhp6g14(this, zsx);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (dyko8b, ybo, zesta) {
        var g4ph6f = this['doc']['implementation'];
        if (g4ph6f && g4ph6f['createDocumentType']) {
            var gxh9p1 = g4ph6f['createDocumentType'](dyko8b, ybo, zesta);
            this['locator'] && zs1p9hx(this['locator'], gxh9p1), zhp6g14(this, gxh9p1);
        }
    },
    'warning': function (fvi7n) {
        console['warn']('[xmldom warning]\t' + fvi7n, ztybk(this['locator']));
    },
    'error': function (a9sex1) {
        console['error']('[xmldom error]\t' + a9sex1, ztybk(this['locator']));
    },
    'fatalError': function (_rb5k) {
        throw console['error']('[xmldom fatalError]\t' + _rb5k, ztybk(this['locator'])), _rb5k;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (s1hax9) {
    zrk8d['prototype'][s1hax9] = function () {
        return null;
    };
});
var zr82_u = require('./zzczz')['XMLReader'],
    znlvif7 = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];
exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zlmi3;