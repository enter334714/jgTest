var c = wx.$a;
function gyobc0(u_eo) {
    this['options'] = u_eo || { 'locator': {} };
}
function g_yoe40($lby0c, $l0b, j1nfx) {
    function $0bylc(eu21gw) {
        var t3r75p = $lby0c[eu21gw];
        !t3r75p && sfxj1n && (t3r75p = 0x2 == $lby0c['length'] ? function (l$my) {
            $lby0c(eu21gw, l$my);
        } : $lby0c), q86kdz[eu21gw] = t3r75p && function (b0c4y) {
            t3r75p('[xmldom ' + eu21gw + ']\t' + b0c4y + gkdzq86(j1nfx));
        } || function () {};
    }
    if (!$lby0c) {
        if ($l0b instanceof gp7tr35) return $l0b;
        $lby0c = $l0b;
    }
    var q86kdz = {},
        sfxj1n = $lby0c instanceof Function;
    return j1nfx = j1nfx || {}, $0bylc('warning'), $0bylc('error'), $0bylc('fatalError'), q86kdz;
}
function gp7tr35() {
    this['cdata'] = !0x1;
}
function gyb$oc(cly$b, wuo_4e) {
    wuo_4e['lineNumber'] = cly$b['lineNumber'], wuo_4e['columnNumber'] = cly$b['columnNumber'];
}
function gkdzq86(o40ycb) {
    return o40ycb ? '\x0a@' + (o40ycb['systemId'] || '') + '#[line:' + o40ycb['lineNumber'] + ',col:' + o40ycb['columnNumber'] + ']' : void 0x0;
}
function gycbo$0(sjnxvh, bc$0oy, ri37) {
    return 'string' == typeof sjnxvh ? sjnxvh['substr'](bc$0oy, ri37) : sjnxvh['length'] >= bc$0oy + ri37 || bc$0oy ? new java['lang']['String'](sjnxvh, bc$0oy, ri37) + '' : sjnxvh;
}
function gjvhkzn(w12ufg, u2e_g) {
    w12ufg['currentElement'] ? w12ufg['currentElement']['appendChild'](u2e_g) : w12ufg['doc']['appendChild'](u2e_g);
}
gyobc0['prototype']['parseFromString'] = function (hzkq6, o4c_0y) {
    var kvnz = this['options'],
        hxvjs = new gzkhvnj(),
        _guw4 = kvnz['domBuilder'] || new gp7tr35(),
        kh6zdv = kvnz['errorHandler'],
        d6r8tq = kvnz['locator'],
        ir573 = kvnz['xmlns'] || {},
        w_ue4 = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return d6r8tq && _guw4['setDocumentLocator'](d6r8tq), hxvjs['errorHandler'] = g_yoe40(kh6zdv, _guw4, d6r8tq), hxvjs['domBuilder'] = kvnz['domBuilder'] || _guw4, /\/x?html?$/['test'](o4c_0y) && (w_ue4['nbsp'] = '\u00a0', w_ue4['copy'] = '©', ir573[''] = 'http://www.w3.org/1999/xhtml'), ir573['xml'] = ir573['xml'] || 'http://www.w3.org/XML/1998/namespace', hzkq6 ? hxvjs['parse'](hzkq6, ir573, w_ue4) : hxvjs['errorHandler']['error']('invalid doc source'), _guw4['doc'];
}, gp7tr35['prototype'] = {
    'startDocument': function () {
        this['doc'] = new gs2gx1f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (y$cblm, s21jf, u1w2f, guw) {
        var eu4 = this['doc'],
            ewg2_u = eu4['createElementNS'](y$cblm, u1w2f || s21jf),
            w0e_ = guw['length'];
        gjvhkzn(this, ewg2_u), this['currentElement'] = ewg2_u, this['locator'] && gyb$oc(this['locator'], ewg2_u);
        for (var xns1 = 0x0; w0e_ > xns1; xns1++) {
            var y$cblm = guw['getURI'](xns1),
                ge2_w = guw['getValue'](xns1),
                u1w2f = guw['getQName'](xns1),
                jnfvx = eu4['createAttributeNS'](y$cblm, u1w2f);
            this['locator'] && gyb$oc(guw['getLocator'](xns1), jnfvx), jnfvx['value'] = jnfvx['nodeValue'] = ge2_w, ewg2_u['setAttributeNode'](jnfvx);
        }
    },
    'endElement': function () {
        {
            var ri57p = this['currentElement'];
            ri57p['tagName'];
        }
        this['currentElement'] = ri57p['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (o0_ye, r7i3p) {
        var hdq6kz = this['doc']['createProcessingInstruction'](o0_ye, r7i3p);
        this['locator'] && gyb$oc(this['locator'], hdq6kz), gjvhkzn(this, hdq6kz);
    },
    'ignorableWhitespace': function () {},
    'characters': function (fgx) {
        if (fgx = gycbo$0['apply'](this, arguments)) {
            if (this['cdata']) var p375 = this['doc']['createCDATASection'](fgx);else var p375 = this['doc']['createTextNode'](fgx);
            this['currentElement'] ? this['currentElement']['appendChild'](p375) : /^\s*$/['test'](fgx) && this['doc']['appendChild'](p375), this['locator'] && gyb$oc(this['locator'], p375);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (wgu21) {
        (this['locator'] = wgu21) && (wgu21['lineNumber'] = 0x0);
    },
    'comment': function (e0w_o4) {
        e0w_o4 = gycbo$0['apply'](this, arguments);
        var d6hqkz = this['doc']['createComment'](e0w_o4);
        this['locator'] && gyb$oc(this['locator'], d6hqkz), gjvhkzn(this, d6hqkz);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (lycmb, $bc0yo, nvjsfx) {
        var cam$b = this['doc']['implementation'];
        if (cam$b && cam$b['createDocumentType']) {
            var dz6kqh = cam$b['createDocumentType'](lycmb, $bc0yo, nvjsfx);
            this['locator'] && gyb$oc(this['locator'], dz6kqh), gjvhkzn(this, dz6kqh);
        }
    },
    'warning': function (y0eo_) {
        console['warn']('[xmldom warning]\t' + y0eo_, gkdzq86(this['locator']));
    },
    'error': function (mb$c) {
        console['error']('[xmldom error]\t' + mb$c, gkdzq86(this['locator']));
    },
    'fatalError': function (nvz6hk) {
        throw console['error']('[xmldom fatalError]\t' + nvz6hk, gkdzq86(this['locator'])), nvz6hk;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r87t53) {
    gp7tr35['prototype'][r87t53] = function () {
        return null;
    };
});
var gzkhvnj = require('./a1sax')['XMLReader'],
    gs2gx1f = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];
exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gyobc0;