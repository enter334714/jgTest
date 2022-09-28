var _ = wx.y$;
function _d_012z$(yuxtv) {
    this['options'] = yuxtv || { 'locator': {} };
}
function _dihdgf(hkjig, yzx$_0, rtquv) {
    function tuqsrv(wruvs) {
        var jmhkli = hkjig[wruvs];
        !jmhkli && fgejih && (jmhkli = 0x2 == hkjig['length'] ? function (mlpkn) {
            hkjig(wruvs, mlpkn);
        } : hkjig), _41023[wruvs] = jmhkli && function (snproq) {
            jmhkli('[xmldom ' + wruvs + ']\t' + snproq + _dlgihjk(rtquv));
        } || function () {};
    }
    if (!hkjig) {
        if (yzx$_0 instanceof _drqvtus) return yzx$_0;
        hkjig = yzx$_0;
    }
    var _41023 = {},
        fgejih = hkjig instanceof Function;
    return rtquv = rtquv || {}, tuqsrv('warning'), tuqsrv('error'), tuqsrv('fatalError'), _41023;
}
function _drqvtus() {
    this['cdata'] = !0x1;
}
function _decbdaf(gfhj, cdbe) {
    cdbe['lineNumber'] = gfhj['lineNumber'], cdbe['columnNumber'] = gfhj['columnNumber'];
}
function _dlgihjk(kmno) {
    return kmno ? '\x0a@' + (kmno['systemId'] || '') + '#[line:' + kmno['lineNumber'] + ',col:' + kmno['columnNumber'] + ']' : void 0x0;
}
function _dswv(lonmjk, fhdecg, yvxw$z) {
    return 'string' == typeof lonmjk ? lonmjk['substr'](fhdecg, yvxw$z) : lonmjk['length'] >= fhdecg + yvxw$z || fhdecg ? new java['lang']['String'](lonmjk, fhdecg, yvxw$z) + '' : lonmjk;
}
function _dxyz_0$(x$y_0, gjih) {
    x$y_0['currentElement'] ? x$y_0['currentElement']['appendChild'](gjih) : x$y_0['doc']['appendChild'](gjih);
}
_d_012z$['prototype']['parseFromString'] = function (hfikgj, efabc) {
    var qonlmp = this['options'],
        lpqn = new _dtqs(),
        $z2 = qonlmp['domBuilder'] || new _drqvtus(),
        fcbg = qonlmp['errorHandler'],
        fh = qonlmp['locator'],
        yx0$z = qonlmp['xmlns'] || {},
        uswvrt = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return fh && $z2['setDocumentLocator'](fh), lpqn['errorHandler'] = _dihdgf(fcbg, $z2, fh), lpqn['domBuilder'] = qonlmp['domBuilder'] || $z2, /\/x?html?$/['test'](efabc) && (uswvrt['nbsp'] = '\u00a0', uswvrt['copy'] = '©', yx0$z[''] = 'http://www.w3.org/1999/xhtml'), yx0$z['xml'] = yx0$z['xml'] || 'http://www.w3.org/XML/1998/namespace', hfikgj ? lpqn['parse'](hfikgj, yx0$z, uswvrt) : lpqn['errorHandler']['error']('invalid doc source'), $z2['doc'];
}, _drqvtus['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _dy_z1$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (ghiklj, omprnq, baedcf, fkhj) {
        var wuvtyx = this['doc'],
            xwuvz = wuvtyx['createElementNS'](ghiklj, baedcf || omprnq),
            ebdca = fkhj['length'];
        _dxyz_0$(this, xwuvz), this['currentElement'] = xwuvz, this['locator'] && _decbdaf(this['locator'], xwuvz);
        for (var uqsvtr = 0x0; ebdca > uqsvtr; uqsvtr++) {
            var ghiklj = fkhj['getURI'](uqsvtr),
                yz_01$ = fkhj['getValue'](uqsvtr),
                baedcf = fkhj['getQName'](uqsvtr),
                mklin = wuvtyx['createAttributeNS'](ghiklj, baedcf);
            this['locator'] && _decbdaf(fkhj['getLocator'](uqsvtr), mklin), mklin['value'] = mklin['nodeValue'] = yz_01$, xwuvz['setAttributeNode'](mklin);
        }
    },
    'endElement': function () {
        {
            var pklomn = this['currentElement'];
            pklomn['tagName'];
        }
        this['currentElement'] = pklomn['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (wuvyxz, vusxwt) {
        var cgehd = this['doc']['createProcessingInstruction'](wuvyxz, vusxwt);
        this['locator'] && _decbdaf(this['locator'], cgehd), _dxyz_0$(this, cgehd);
    },
    'ignorableWhitespace': function () {},
    'characters': function (xzvwy$) {
        if (xzvwy$ = _dswv['apply'](this, arguments)) {
            if (this['cdata']) var qpurs = this['doc']['createCDATASection'](xzvwy$);else var qpurs = this['doc']['createTextNode'](xzvwy$);
            this['currentElement'] ? this['currentElement']['appendChild'](qpurs) : /^\s*$/['test'](xzvwy$) && this['doc']['appendChild'](qpurs), this['locator'] && _decbdaf(this['locator'], qpurs);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (z$yv) {
        (this['locator'] = z$yv) && (z$yv['lineNumber'] = 0x0);
    },
    'comment': function (z_20$1) {
        z_20$1 = _dswv['apply'](this, arguments);
        var mihljk = this['doc']['createComment'](z_20$1);
        this['locator'] && _decbdaf(this['locator'], mihljk), _dxyz_0$(this, mihljk);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (hgijl, rvusw, cdfeab) {
        var knomj = this['doc']['implementation'];
        if (knomj && knomj['createDocumentType']) {
            var z$ywvx = knomj['createDocumentType'](hgijl, rvusw, cdfeab);
            this['locator'] && _decbdaf(this['locator'], z$ywvx), _dxyz_0$(this, z$ywvx);
        }
    },
    'warning': function (nploqm) {
        console['warn']('[xmldom warning]\t' + nploqm, _dlgihjk(this['locator']));
    },
    'error': function (upr) {
        console['error']('[xmldom error]\t' + upr, _dlgihjk(this['locator']));
    },
    'fatalError': function (lnjim) {
        throw console['error']('[xmldom fatalError]\t' + lnjim, _dlgihjk(this['locator'])), lnjim;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (xuzv) {
    _drqvtus['prototype'][xuzv] = function () {
        return null;
    };
});
var _dtqs = require('./bbbsax')['XMLReader'],
    _dy_z1$ = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _d_012z$;