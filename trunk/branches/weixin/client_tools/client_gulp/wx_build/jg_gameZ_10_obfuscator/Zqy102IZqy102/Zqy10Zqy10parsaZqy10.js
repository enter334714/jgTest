var J = wx.h$;
function gthec8z(orvy5q) {
    this['options'] = orvy5q || { 'locator': {} };
}
function gze2w_(z_2ep, yo7vr, roybq5) {
    function cgk68d(zc6t) {
        var xji17 = z_2ep[zc6t];
        !xji17 && htzec8 && (xji17 = 0x2 == z_2ep['length'] ? function (or5yjv) {
            z_2ep(zc6t, or5yjv);
        } : z_2ep), we2p_z[zc6t] = xji17 && function (s$2w) {
            xji17('[xmldom ' + zc6t + ']\t' + s$2w + ghczt68(roybq5));
        } || function () {};
    }
    if (!z_2ep) {
        if (yo7vr instanceof gijxv7) return yo7vr;
        z_2ep = yo7vr;
    }
    var we2p_z = {},
        htzec8 = z_2ep instanceof Function;
    return roybq5 = roybq5 || {}, cgk68d('warning'), cgk68d('error'), cgk68d('fatalError'), we2p_z;
}
function gijxv7() {
    this['cdata'] = !0x1;
}
function gwp_ze2(x1ni7, ep_ht) {
    ep_ht['lineNumber'] = x1ni7['lineNumber'], ep_ht['columnNumber'] = x1ni7['columnNumber'];
}
function ghczt68(rjyo7v) {
    return rjyo7v ? '\x0a@' + (rjyo7v['systemId'] || '') + '#[line:' + rjyo7v['lineNumber'] + ',col:' + rjyo7v['columnNumber'] + ']' : void 0x0;
}
function gc8tzh(bqo5ry, l4ma3u, borq) {
    return 'string' == typeof bqo5ry ? bqo5ry['substr'](l4ma3u, borq) : bqo5ry['length'] >= l4ma3u + borq || l4ma3u ? new java['lang']['String'](bqo5ry, l4ma3u, borq) + '' : bqo5ry;
}
function gg0dbq(c8dkg, $fw2_9) {
    c8dkg['currentElement'] ? c8dkg['currentElement']['appendChild']($fw2_9) : c8dkg['doc']['appendChild']($fw2_9);
}
gthec8z['prototype']['parseFromString'] = function (obqk50, ehzcp) {
    var kgqdb0 = this['options'],
        inx147 = new gx7ijn1(),
        ze2hp = kgqdb0['domBuilder'] || new gijxv7(),
        g8dc6t = kgqdb0['errorHandler'],
        k5gb = kgqdb0['locator'],
        h6t8d = kgqdb0['xmlns'] || {},
        g06kbd = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return k5gb && ze2hp['setDocumentLocator'](k5gb), inx147['errorHandler'] = gze2w_(g8dc6t, ze2hp, k5gb), inx147['domBuilder'] = kgqdb0['domBuilder'] || ze2hp, /\/x?html?$/['test'](ehzcp) && (g06kbd['nbsp'] = '\u00a0', g06kbd['copy'] = '©', h6t8d[''] = 'http://www.w3.org/1999/xhtml'), h6t8d['xml'] = h6t8d['xml'] || 'http://www.w3.org/XML/1998/namespace', obqk50 ? inx147['parse'](obqk50, h6t8d, g06kbd) : inx147['errorHandler']['error']('invalid doc source'), ze2hp['doc'];
}, gijxv7['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ga13l4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (hectz, a3nu41, wf92, dcht68) {
        var q0b5 = this['doc'],
            hzep = q0b5['createElementNS'](hectz, wf92 || a3nu41),
            vr5y = dcht68['length'];
        gg0dbq(this, hzep), this['currentElement'] = hzep, this['locator'] && gwp_ze2(this['locator'], hzep);
        for (var yborq = 0x0; vr5y > yborq; yborq++) {
            var hectz = dcht68['getURI'](yborq),
                etpzch = dcht68['getValue'](yborq),
                wf92 = dcht68['getQName'](yborq),
                ybroq = q0b5['createAttributeNS'](hectz, wf92);
            this['locator'] && gwp_ze2(dcht68['getLocator'](yborq), ybroq), ybroq['value'] = ybroq['nodeValue'] = etpzch, hzep['setAttributeNode'](ybroq);
        }
    },
    'endElement': function () {
        {
            var qobr5 = this['currentElement'];
            qobr5['tagName'];
        }
        this['currentElement'] = qobr5['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (n1ui34, na1u43) {
        var x341in = this['doc']['createProcessingInstruction'](n1ui34, na1u43);
        this['locator'] && gwp_ze2(this['locator'], x341in), gg0dbq(this, x341in);
    },
    'ignorableWhitespace': function () {},
    'characters': function (tcphze) {
        if (tcphze = gc8tzh['apply'](this, arguments)) {
            if (this['cdata']) var p_z2e = this['doc']['createCDATASection'](tcphze);else var p_z2e = this['doc']['createTextNode'](tcphze);
            this['currentElement'] ? this['currentElement']['appendChild'](p_z2e) : /^\s*$/['test'](tcphze) && this['doc']['appendChild'](p_z2e), this['locator'] && gwp_ze2(this['locator'], p_z2e);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hepz_t) {
        (this['locator'] = hepz_t) && (hepz_t['lineNumber'] = 0x0);
    },
    'comment': function (ijn7vx) {
        ijn7vx = gc8tzh['apply'](this, arguments);
        var y5bro = this['doc']['createComment'](ijn7vx);
        this['locator'] && gwp_ze2(this['locator'], y5bro), gg0dbq(this, y5bro);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (royb, o5b, f2s) {
        var g5bkq0 = this['doc']['implementation'];
        if (g5bkq0 && g5bkq0['createDocumentType']) {
            var ory5 = g5bkq0['createDocumentType'](royb, o5b, f2s);
            this['locator'] && gwp_ze2(this['locator'], ory5), gg0dbq(this, ory5);
        }
    },
    'warning': function (ztph_) {
        console['warn']('[xmldom warning]\t' + ztph_, ghczt68(this['locator']));
    },
    'error': function (y7ojrv) {
        console['error']('[xmldom error]\t' + y7ojrv, ghczt68(this['locator']));
    },
    'fatalError': function (x34in) {
        throw console['error']('[xmldom fatalError]\t' + x34in, ghczt68(this['locator'])), x34in;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fw9$_2) {
    gijxv7['prototype'][fw9$_2] = function () {
        return null;
    };
});
var gx7ijn1 = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    ga13l4 = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];
exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gthec8z;