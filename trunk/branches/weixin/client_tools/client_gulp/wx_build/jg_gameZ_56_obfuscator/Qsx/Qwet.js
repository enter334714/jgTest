var u = wx.$x;
function xiah41e(g6m5ct) {
    this['options'] = g6m5ct || { 'locator': {} };
}
function xh1da(o8jqlb, b8qlo_, xtgm5) {
    function _uf8o2(ps7w0$) {
        var g3rzx = o8jqlb[ps7w0$];
        !g3rzx && urf3z && (g3rzx = 0x2 == o8jqlb['length'] ? function ($p70ws) {
            o8jqlb(ps7w0$, $p70ws);
        } : o8jqlb), g53xt[ps7w0$] = g3rzx && function (c3t) {
            g3rzx('[xmldom ' + ps7w0$ + ']\t' + c3t + xxcg3t(xtgm5));
        } || function () {};
    }
    if (!o8jqlb) {
        if (b8qlo_ instanceof xfzkx) return b8qlo_;
        o8jqlb = b8qlo_;
    }
    var g53xt = {},
        urf3z = o8jqlb instanceof Function;
    return xtgm5 = xtgm5 || {}, _uf8o2('warning'), _uf8o2('error'), _uf8o2('fatalError'), g53xt;
}
function xfzkx() {
    this['cdata'] = !0x1;
}
function xloqb8j(m65, bl8j) {
    bl8j['lineNumber'] = m65['lineNumber'], bl8j['columnNumber'] = m65['columnNumber'];
}
function xxcg3t(frz2u) {
    return frz2u ? '\x0a@' + (frz2u['systemId'] || '') + '#[line:' + frz2u['lineNumber'] + ',col:' + frz2u['columnNumber'] + ']' : void 0x0;
}
function xm6p$0t(f2_kru, zx3gk, ufr) {
    return 'string' == typeof f2_kru ? f2_kru['substr'](zx3gk, ufr) : f2_kru['length'] >= zx3gk + ufr || zx3gk ? new java['lang']['String'](f2_kru, zx3gk, ufr) + '' : f2_kru;
}
function xctm5xg(yvd7, ypw$) {
    yvd7['currentElement'] ? yvd7['currentElement']['appendChild'](ypw$) : yvd7['doc']['appendChild'](ypw$);
}
xiah41e['prototype']['parseFromString'] = function (o_8l, yd7a) {
    var grkzx3 = this['options'],
        zr3 = new xv14a(),
        xr3fzk = grkzx3['domBuilder'] || new xfzkx(),
        ur2fkz = grkzx3['errorHandler'],
        zc3x5g = grkzx3['locator'],
        vda4e1 = grkzx3['xmlns'] || {},
        urf8_2 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return zc3x5g && xr3fzk['setDocumentLocator'](zc3x5g), zr3['errorHandler'] = xh1da(ur2fkz, xr3fzk, zc3x5g), zr3['domBuilder'] = grkzx3['domBuilder'] || xr3fzk, /\/x?html?$/['test'](yd7a) && (urf8_2['nbsp'] = '\u00a0', urf8_2['copy'] = '©', vda4e1[''] = 'http://www.w3.org/1999/xhtml'), vda4e1['xml'] = vda4e1['xml'] || 'http://www.w3.org/XML/1998/namespace', o_8l ? zr3['parse'](o_8l, vda4e1, urf8_2) : zr3['errorHandler']['error']('invalid doc source'), xr3fzk['doc'];
}, xfzkx['prototype'] = {
    'startDocument': function () {
        this['doc'] = new xfkz3rx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (xt3gc5, _qu82o, m5tcgx, xz3krg) {
        var rkfu_2 = this['doc'],
            kxzc = rkfu_2['createElementNS'](xt3gc5, m5tcgx || _qu82o),
            $506t = xz3krg['length'];
        xctm5xg(this, kxzc), this['currentElement'] = kxzc, this['locator'] && xloqb8j(this['locator'], kxzc);
        for (var vwd7sy = 0x0; $506t > vwd7sy; vwd7sy++) {
            var xt3gc5 = xz3krg['getURI'](vwd7sy),
                bl_8 = xz3krg['getValue'](vwd7sy),
                m5tcgx = xz3krg['getQName'](vwd7sy),
                uq8_o = rkfu_2['createAttributeNS'](xt3gc5, m5tcgx);
            this['locator'] && xloqb8j(xz3krg['getLocator'](vwd7sy), uq8_o), uq8_o['value'] = uq8_o['nodeValue'] = bl_8, kxzc['setAttributeNode'](uq8_o);
        }
    },
    'endElement': function () {
        {
            var o2uf8_ = this['currentElement'];
            o2uf8_['tagName'];
        }
        this['currentElement'] = o2uf8_['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (uf3rzk, $7ysp) {
        var wvayd = this['doc']['createProcessingInstruction'](uf3rzk, $7ysp);
        this['locator'] && xloqb8j(this['locator'], wvayd), xctm5xg(this, wvayd);
    },
    'ignorableWhitespace': function () {},
    'characters': function (r2ufk) {
        if (r2ufk = xm6p$0t['apply'](this, arguments)) {
            if (this['cdata']) var s7dywv = this['doc']['createCDATASection'](r2ufk);else var s7dywv = this['doc']['createTextNode'](r2ufk);
            this['currentElement'] ? this['currentElement']['appendChild'](s7dywv) : /^\s*$/['test'](r2ufk) && this['doc']['appendChild'](s7dywv), this['locator'] && xloqb8j(this['locator'], s7dywv);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (s$mp) {
        (this['locator'] = s$mp) && (s$mp['lineNumber'] = 0x0);
    },
    'comment': function (d7a1) {
        d7a1 = xm6p$0t['apply'](this, arguments);
        var xtg3 = this['doc']['createComment'](d7a1);
        this['locator'] && xloqb8j(this['locator'], xtg3), xctm5xg(this, xtg3);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (_2ru8, d1e4ah, dws7vy) {
        var $0w = this['doc']['implementation'];
        if ($0w && $0w['createDocumentType']) {
            var l8q_2 = $0w['createDocumentType'](_2ru8, d1e4ah, dws7vy);
            this['locator'] && xloqb8j(this['locator'], l8q_2), xctm5xg(this, l8q_2);
        }
    },
    'warning': function (krxz3) {
        console['warn']('[xmldom warning]\t' + krxz3, xxcg3t(this['locator']));
    },
    'error': function (xzcg35) {
        console['error']('[xmldom error]\t' + xzcg35, xxcg3t(this['locator']));
    },
    'fatalError': function (vay1de) {
        throw console['error']('[xmldom fatalError]\t' + vay1de, xxcg3t(this['locator'])), vay1de;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wps$7y) {
    xfzkx['prototype'][wps$7y] = function () {
        return null;
    };
});
var xv14a = require('./Qweo')['XMLReader'],
    xfkz3rx = exports['DOMImplementation'] = require('./Qwer')['DOMImplementation'];
exports['XMLSerializer'] = require('./Qwer')['XMLSerializer'], exports['DOMParser'] = xiah41e;