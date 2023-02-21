var J = wx.h$;
function gmlu4a3(hpeztc) {
    this['options'] = hpeztc || { 'locator': {} };
}
function gzchet8(gq5b0, fw29_$, ko05bq) {
    function h6zt(nx143i) {
        var ce8ht = gq5b0[nx143i];
        !ce8ht && rijx && (ce8ht = 0x2 == gq5b0['length'] ? function (b5qo0k) {
            gq5b0(nx143i, b5qo0k);
        } : gq5b0), r5vqyo[nx143i] = ce8ht && function (i74xn1) {
            ce8ht('[xmldom ' + nx143i + ']\t' + i74xn1 + gyxrvj(ko05bq));
        } || function () {};
    }
    if (!gq5b0) {
        if (fw29_$ instanceof gh68tdc) return fw29_$;
        gq5b0 = fw29_$;
    }
    var r5vqyo = {},
        rijx = gq5b0 instanceof Function;
    return ko05bq = ko05bq || {}, h6zt('warning'), h6zt('error'), h6zt('fatalError'), r5vqyo;
}
function gh68tdc() {
    this['cdata'] = !0x1;
}
function ggcdt(kg0q5b, tzepch) {
    tzepch['lineNumber'] = kg0q5b['lineNumber'], tzepch['columnNumber'] = kg0q5b['columnNumber'];
}
function gyxrvj(v5yrq) {
    return v5yrq ? '\x0a@' + (v5yrq['systemId'] || '') + '#[line:' + v5yrq['lineNumber'] + ',col:' + v5yrq['columnNumber'] + ']' : void 0x0;
}
function gtezh_p(qroby5, mu3la, w_9pf2) {
    return 'string' == typeof qroby5 ? qroby5['substr'](mu3la, w_9pf2) : qroby5['length'] >= mu3la + w_9pf2 || mu3la ? new java['lang']['String'](qroby5, mu3la, w_9pf2) + '' : qroby5;
}
function gcgd6k8(wz_e2p, xvyr7j) {
    wz_e2p['currentElement'] ? wz_e2p['currentElement']['appendChild'](xvyr7j) : wz_e2p['doc']['appendChild'](xvyr7j);
}
gmlu4a3['prototype']['parseFromString'] = function (e8tcz, xn7i4) {
    var j7voyr = this['options'],
        l431au = new g_p92we(),
        v7jxry = j7voyr['domBuilder'] || new gh68tdc(),
        hzce8 = j7voyr['errorHandler'],
        hct8z6 = j7voyr['locator'],
        a4l3u1 = j7voyr['xmlns'] || {},
        vr7jix = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return hct8z6 && v7jxry['setDocumentLocator'](hct8z6), l431au['errorHandler'] = gzchet8(hzce8, v7jxry, hct8z6), l431au['domBuilder'] = j7voyr['domBuilder'] || v7jxry, /\/x?html?$/['test'](xn7i4) && (vr7jix['nbsp'] = '\u00a0', vr7jix['copy'] = '©', a4l3u1[''] = 'http://www.w3.org/1999/xhtml'), a4l3u1['xml'] = a4l3u1['xml'] || 'http://www.w3.org/XML/1998/namespace', e8tcz ? l431au['parse'](e8tcz, a4l3u1, vr7jix) : l431au['errorHandler']['error']('invalid doc source'), v7jxry['doc'];
}, gh68tdc['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gx14in7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (yrjov5, _z2epw, xij1, td6gc8) {
        var oqrvy5 = this['doc'],
            qkbg50 = oqrvy5['createElementNS'](yrjov5, xij1 || _z2epw),
            nxjvi7 = td6gc8['length'];
        gcgd6k8(this, qkbg50), this['currentElement'] = qkbg50, this['locator'] && ggcdt(this['locator'], qkbg50);
        for (var q5gk0b = 0x0; nxjvi7 > q5gk0b; q5gk0b++) {
            var yrjov5 = td6gc8['getURI'](q5gk0b),
                jvo7ry = td6gc8['getValue'](q5gk0b),
                xij1 = td6gc8['getQName'](q5gk0b),
                uaml43 = oqrvy5['createAttributeNS'](yrjov5, xij1);
            this['locator'] && ggcdt(td6gc8['getLocator'](q5gk0b), uaml43), uaml43['value'] = uaml43['nodeValue'] = jvo7ry, qkbg50['setAttributeNode'](uaml43);
        }
    },
    'endElement': function () {
        {
            var v7yx = this['currentElement'];
            v7yx['tagName'];
        }
        this['currentElement'] = v7yx['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (tdg6, ep92_w) {
        var boqry = this['doc']['createProcessingInstruction'](tdg6, ep92_w);
        this['locator'] && ggcdt(this['locator'], boqry), gcgd6k8(this, boqry);
    },
    'ignorableWhitespace': function () {},
    'characters': function (gb06k) {
        if (gb06k = gtezh_p['apply'](this, arguments)) {
            if (this['cdata']) var vjyr7o = this['doc']['createCDATASection'](gb06k);else var vjyr7o = this['doc']['createTextNode'](gb06k);
            this['currentElement'] ? this['currentElement']['appendChild'](vjyr7o) : /^\s*$/['test'](gb06k) && this['doc']['appendChild'](vjyr7o), this['locator'] && ggcdt(this['locator'], vjyr7o);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (rvy5oj) {
        (this['locator'] = rvy5oj) && (rvy5oj['lineNumber'] = 0x0);
    },
    'comment': function (jxri7v) {
        jxri7v = gtezh_p['apply'](this, arguments);
        var n47xi = this['doc']['createComment'](jxri7v);
        this['locator'] && ggcdt(this['locator'], n47xi), gcgd6k8(this, n47xi);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (_wp9f2, e_zph, gck) {
        var ojyvr7 = this['doc']['implementation'];
        if (ojyvr7 && ojyvr7['createDocumentType']) {
            var xn7i = ojyvr7['createDocumentType'](_wp9f2, e_zph, gck);
            this['locator'] && ggcdt(this['locator'], xn7i), gcgd6k8(this, xn7i);
        }
    },
    'warning': function (g8dkc) {
        console['warn']('[xmldom warning]\t' + g8dkc, gyxrvj(this['locator']));
    },
    'error': function (yvxr7j) {
        console['error']('[xmldom error]\t' + yvxr7j, gyxrvj(this['locator']));
    },
    'fatalError': function (b0kq5) {
        throw console['error']('[xmldom fatalError]\t' + b0kq5, gyxrvj(this['locator'])), b0kq5;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c68dtg) {
    gh68tdc['prototype'][c68dtg] = function () {
        return null;
    };
});
var g_p92we = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gx14in7 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gmlu4a3;