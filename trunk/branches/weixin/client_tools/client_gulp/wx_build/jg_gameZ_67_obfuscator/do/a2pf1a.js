function g$ivjw(_pcemd) {
    this['options'] = _pcemd || { 'locator': {} };
}
function gwv$4ji(h3zs7u, g4fy, robq1) {
    function n28r0b(qeoka) {
        var wl$4ij = h3zs7u[qeoka];
        !wl$4ij && de9cmp && (wl$4ij = 0x2 == h3zs7u['length'] ? function (dmkce_) {
            h3zs7u(qeoka, dmkce_);
        } : h3zs7u), kb1a[qeoka] = wl$4ij && function (broaq1) {
            wl$4ij('[xmldom ' + qeoka + ']\t' + broaq1 + gt6lfgy(robq1));
        } || function () {};
    }
    if (!h3zs7u) {
        if (g4fy instanceof gkecdo) return g4fy;
        h3zs7u = g4fy;
    }
    var kb1a = {},
        de9cmp = h3zs7u instanceof Function;
    return robq1 = robq1 || {}, n28r0b('warning'), n28r0b('error'), n28r0b('fatalError'), kb1a;
}
function gkecdo() {
    this['cdata'] = !0x1;
}
function gqk_eoa(baqr, zsx3) {
    zsx3['lineNumber'] = baqr['lineNumber'], zsx3['columnNumber'] = baqr['columnNumber'];
}
function gt6lfgy(fty6lg) {
    return fty6lg ? '\x0a@' + (fty6lg['systemId'] || '') + '#[line:' + fty6lg['lineNumber'] + ',col:' + fty6lg['columnNumber'] + ']' : void 0x0;
}
function gc5d9mp(z7hus, y4fgl6, lj4$w) {
    return 'string' == typeof z7hus ? z7hus['substr'](y4fgl6, lj4$w) : z7hus['length'] >= y4fgl6 + lj4$w || y4fgl6 ? new java['lang']['String'](z7hus, y4fgl6, lj4$w) + '' : z7hus;
}
function gl$y4jw(ke_oca, h8n32u) {
    ke_oca['currentElement'] ? ke_oca['currentElement']['appendChild'](h8n32u) : ke_oca['doc']['appendChild'](h8n32u);
}
g$ivjw['prototype']['parseFromString'] = function (qako1_, fgyl4) {
    var tmp = this['options'],
        pt9g5f = new gj4$li(),
        rbq21 = tmp['domBuilder'] || new gkecdo(),
        uhs8n3 = tmp['errorHandler'],
        yfg6tl = tmp['locator'],
        nb28 = tmp['xmlns'] || {},
        pg5 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return yfg6tl && rbq21['setDocumentLocator'](yfg6tl), pt9g5f['errorHandler'] = gwv$4ji(uhs8n3, rbq21, yfg6tl), pt9g5f['domBuilder'] = tmp['domBuilder'] || rbq21, /\/x?html?$/['test'](fgyl4) && (pg5['nbsp'] = '\u00a0', pg5['copy'] = '©', nb28[''] = 'http://www.w3.org/1999/xhtml'), nb28['xml'] = nb28['xml'] || 'http://www.w3.org/XML/1998/namespace', qako1_ ? pt9g5f['parse'](qako1_, nb28, pg5) : pt9g5f['errorHandler']['error']('invalid doc source'), rbq21['doc'];
}, gkecdo['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gcoekd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (un38hs, a1kqob, sx37u, hsun) {
        var qkoae_ = this['doc'],
            mped_c = qkoae_['createElementNS'](un38hs, sx37u || a1kqob),
            dpm9ec = hsun['length'];
        gl$y4jw(this, mped_c), this['currentElement'] = mped_c, this['locator'] && gqk_eoa(this['locator'], mped_c);
        for (var _eckod = 0x0; dpm9ec > _eckod; _eckod++) {
            var un38hs = hsun['getURI'](_eckod),
                oae_q = hsun['getValue'](_eckod),
                sx37u = hsun['getQName'](_eckod),
                pdm95c = qkoae_['createAttributeNS'](un38hs, sx37u);
            this['locator'] && gqk_eoa(hsun['getLocator'](_eckod), pdm95c), pdm95c['value'] = pdm95c['nodeValue'] = oae_q, mped_c['setAttributeNode'](pdm95c);
        }
    },
    'endElement': function () {
        {
            var yjw4$l = this['currentElement'];
            yjw4$l['tagName'];
        }
        this['currentElement'] = yjw4$l['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (o1aq_k, br0qa) {
        var lf6j4y = this['doc']['createProcessingInstruction'](o1aq_k, br0qa);
        this['locator'] && gqk_eoa(this['locator'], lf6j4y), gl$y4jw(this, lf6j4y);
    },
    'ignorableWhitespace': function () {},
    'characters': function (r2b08n) {
        if (r2b08n = gc5d9mp['apply'](this, arguments)) {
            if (this['cdata']) var lf = this['doc']['createCDATASection'](r2b08n);else var lf = this['doc']['createTextNode'](r2b08n);
            this['currentElement'] ? this['currentElement']['appendChild'](lf) : /^\s*$/['test'](r2b08n) && this['doc']['appendChild'](lf), this['locator'] && gqk_eoa(this['locator'], lf);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (b108r2) {
        (this['locator'] = b108r2) && (b108r2['lineNumber'] = 0x0);
    },
    'comment': function (ak_) {
        ak_ = gc5d9mp['apply'](this, arguments);
        var wjli4 = this['doc']['createComment'](ak_);
        this['locator'] && gqk_eoa(this['locator'], wjli4), gl$y4jw(this, wjli4);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (_cepdm, mepc_d, cd95mp) {
        var wj$l4y = this['doc']['implementation'];
        if (wj$l4y && wj$l4y['createDocumentType']) {
            var dp_emc = wj$l4y['createDocumentType'](_cepdm, mepc_d, cd95mp);
            this['locator'] && gqk_eoa(this['locator'], dp_emc), gl$y4jw(this, dp_emc);
        }
    },
    'warning': function (w4lji) {
        console['warn']('[xmldom warning]\t' + w4lji, gt6lfgy(this['locator']));
    },
    'error': function (cemd) {
        console['error']('[xmldom error]\t' + cemd, gt6lfgy(this['locator']));
    },
    'fatalError': function (tg95fp) {
        throw console['error']('[xmldom fatalError]\t' + tg95fp, gt6lfgy(this['locator'])), tg95fp;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a1r) {
    gkecdo['prototype'][a1r] = function () {
        return null;
    };
});
var gj4$li = require('./a7brx')['XMLReader'],
    gcoekd = exports['DOMImplementation'] = require('./a9a4ik')['DOMImplementation'];
exports['XMLSerializer'] = require('./a9a4ik')['XMLSerializer'], exports['DOMParser'] = g$ivjw;