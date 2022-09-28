var u = wx.$x;
function xdnjvug(wt) {
    this['options'] = wt || { 'locator': {} };
}
function xsxom4(s52om, sgdxi, qh_par) {
    function fcju9(isozx) {
        var dunvj = s52om[isozx];
        !dunvj && y897l && (dunvj = 0x2 == s52om['length'] ? function (dgnu4v) {
            s52om(isozx, dgnu4v);
        } : s52om), udvi4[isozx] = dunvj && function (e0hk) {
            dunvj('[xmldom ' + isozx + ']\t' + e0hk + xp0heaq(qh_par));
        } || function () {};
    }
    if (!s52om) {
        if (sgdxi instanceof xzmxos) return sgdxi;
        s52om = sgdxi;
    }
    var udvi4 = {},
        y897l = s52om instanceof Function;
    return qh_par = qh_par || {}, fcju9('warning'), fcju9('error'), fcju9('fatalError'), udvi4;
}
function xzmxos() {
    this['cdata'] = !0x1;
}
function xarhqp(otz265, b0hkep) {
    b0hkep['lineNumber'] = otz265['lineNumber'], b0hkep['columnNumber'] = otz265['columnNumber'];
}
function xp0heaq(fl9c78) {
    return fl9c78 ? '\x0a@' + (fl9c78['systemId'] || '') + '#[line:' + fl9c78['lineNumber'] + ',col:' + fl9c78['columnNumber'] + ']' : void 0x0;
}
function xujvgnd(yl79$, kb13w, oixs) {
    return 'string' == typeof yl79$ ? yl79$['substr'](kb13w, oixs) : yl79$['length'] >= kb13w + oixs || kb13w ? new java['lang']['String'](yl79$, kb13w, oixs) + '' : yl79$;
}
function xbw01k3(a_pqhe, fl79y8) {
    a_pqhe['currentElement'] ? a_pqhe['currentElement']['appendChild'](fl79y8) : a_pqhe['doc']['appendChild'](fl79y8);
}
xdnjvug['prototype']['parseFromString'] = function (cvnju, peh_) {
    var ud4igv = this['options'],
        om256z = new xc9nflj(),
        t316w2 = ud4igv['domBuilder'] || new xzmxos(),
        cuvfn = ud4igv['errorHandler'],
        qarhp_ = ud4igv['locator'],
        m62zo = ud4igv['xmlns'] || {},
        ufvjcn = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qarhp_ && t316w2['setDocumentLocator'](qarhp_), om256z['errorHandler'] = xsxom4(cuvfn, t316w2, qarhp_), om256z['domBuilder'] = ud4igv['domBuilder'] || t316w2, /\/x?html?$/['test'](peh_) && (ufvjcn['nbsp'] = '\u00a0', ufvjcn['copy'] = '©', m62zo[''] = 'http://www.w3.org/1999/xhtml'), m62zo['xml'] = m62zo['xml'] || 'http://www.w3.org/XML/1998/namespace', cvnju ? om256z['parse'](cvnju, m62zo, ufvjcn) : om256z['errorHandler']['error']('invalid doc source'), t316w2['doc'];
}, xzmxos['prototype'] = {
    'startDocument': function () {
        this['doc'] = new xv4id()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ahbp0e, pkb0h, hpa0be, c8f7l9) {
        var i4gxsd = this['doc'],
            s4xmoi = i4gxsd['createElementNS'](ahbp0e, hpa0be || pkb0h),
            fnvj = c8f7l9['length'];
        xbw01k3(this, s4xmoi), this['currentElement'] = s4xmoi, this['locator'] && xarhqp(this['locator'], s4xmoi);
        for (var dgvxi4 = 0x0; fnvj > dgvxi4; dgvxi4++) {
            var ahbp0e = c8f7l9['getURI'](dgvxi4),
                n9uc = c8f7l9['getValue'](dgvxi4),
                hpa0be = c8f7l9['getQName'](dgvxi4),
                tz653 = i4gxsd['createAttributeNS'](ahbp0e, hpa0be);
            this['locator'] && xarhqp(c8f7l9['getLocator'](dgvxi4), tz653), tz653['value'] = tz653['nodeValue'] = n9uc, s4xmoi['setAttributeNode'](tz653);
        }
    },
    'endElement': function () {
        {
            var cnf9lj = this['currentElement'];
            cnf9lj['tagName'];
        }
        this['currentElement'] = cnf9lj['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (lc7f9, lfjc9n) {
        var gdivx = this['doc']['createProcessingInstruction'](lc7f9, lfjc9n);
        this['locator'] && xarhqp(this['locator'], gdivx), xbw01k3(this, gdivx);
    },
    'ignorableWhitespace': function () {},
    'characters': function (mxg4is) {
        if (mxg4is = xujvgnd['apply'](this, arguments)) {
            if (this['cdata']) var flj9cn = this['doc']['createCDATASection'](mxg4is);else var flj9cn = this['doc']['createTextNode'](mxg4is);
            this['currentElement'] ? this['currentElement']['appendChild'](flj9cn) : /^\s*$/['test'](mxg4is) && this['doc']['appendChild'](flj9cn), this['locator'] && xarhqp(this['locator'], flj9cn);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (x5zosm) {
        (this['locator'] = x5zosm) && (x5zosm['lineNumber'] = 0x0);
    },
    'comment': function (g4xism) {
        g4xism = xujvgnd['apply'](this, arguments);
        var izmxs = this['doc']['createComment'](g4xism);
        this['locator'] && xarhqp(this['locator'], izmxs), xbw01k3(this, izmxs);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (cduv, w62, hpqe_) {
        var ahpb0e = this['doc']['implementation'];
        if (ahpb0e && ahpb0e['createDocumentType']) {
            var zimxso = ahpb0e['createDocumentType'](cduv, w62, hpqe_);
            this['locator'] && xarhqp(this['locator'], zimxso), xbw01k3(this, zimxso);
        }
    },
    'warning': function (t1w36) {
        console['warn']('[xmldom warning]\t' + t1w36, xp0heaq(this['locator']));
    },
    'error': function (oxzims) {
        console['error']('[xmldom error]\t' + oxzims, xp0heaq(this['locator']));
    },
    'fatalError': function (vjducn) {
        throw console['error']('[xmldom fatalError]\t' + vjducn, xp0heaq(this['locator'])), vjducn;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k3wt6) {
    xzmxos['prototype'][k3wt6] = function () {
        return null;
    };
});
var xc9nflj = require('./xxqxx')['XMLReader'],
    xv4id = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];
exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xdnjvug;