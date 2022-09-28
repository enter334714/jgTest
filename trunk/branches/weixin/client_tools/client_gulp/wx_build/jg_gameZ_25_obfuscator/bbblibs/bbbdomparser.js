var _ = wx.y$;
function _d_13024(nmpklo) {
    this['options'] = nmpklo || { 'locator': {} };
}
function _droqm(edhfcg, ijklhg, yuvx) {
    function higjf(srqt) {
        var rtuq = edhfcg[srqt];
        !rtuq && opnkm && (rtuq = 0x2 == edhfcg['length'] ? function (hedcg) {
            edhfcg(srqt, hedcg);
        } : edhfcg), tswvux[srqt] = rtuq && function (vstuw) {
            rtuq('[xmldom ' + srqt + ']\t' + vstuw + _dqpto(yuvx));
        } || function () {};
    }
    if (!edhfcg) {
        if (ijklhg instanceof _digljkh) return ijklhg;
        edhfcg = ijklhg;
    }
    var tswvux = {},
        opnkm = edhfcg instanceof Function;
    return yuvx = yuvx || {}, higjf('warning'), higjf('error'), higjf('fatalError'), tswvux;
}
function _digljkh() {
    this['cdata'] = !0x1;
}
function _dmolqp($2_13, nlqomp) {
    nlqomp['lineNumber'] = $2_13['lineNumber'], nlqomp['columnNumber'] = $2_13['columnNumber'];
}
function _dqpto(opmqnr) {
    return opmqnr ? '\x0a@' + (opmqnr['systemId'] || '') + '#[line:' + opmqnr['lineNumber'] + ',col:' + opmqnr['columnNumber'] + ']' : void 0x0;
}
function _dwyuzx($z0_21, pmqlno, iehfdg) {
    return 'string' == typeof $z0_21 ? $z0_21['substr'](pmqlno, iehfdg) : $z0_21['length'] >= pmqlno + iehfdg || pmqlno ? new java['lang']['String']($z0_21, pmqlno, iehfdg) + '' : $z0_21;
}
function _dfjhegi(befcda, hjegi) {
    befcda['currentElement'] ? befcda['currentElement']['appendChild'](hjegi) : befcda['doc']['appendChild'](hjegi);
}
_d_13024['prototype']['parseFromString'] = function (edcafb, psoq) {
    var hfki = this['options'],
        txywv = new _dkplnm(),
        mkjiln = hfki['domBuilder'] || new _digljkh(),
        utyx = hfki['errorHandler'],
        hfji = hfki['locator'],
        y$1_ = hfki['xmlns'] || {},
        nqormp = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return hfji && mkjiln['setDocumentLocator'](hfji), txywv['errorHandler'] = _droqm(utyx, mkjiln, hfji), txywv['domBuilder'] = hfki['domBuilder'] || mkjiln, /\/x?html?$/['test'](psoq) && (nqormp['nbsp'] = '\u00a0', nqormp['copy'] = '©', y$1_[''] = 'http://www.w3.org/1999/xhtml'), y$1_['xml'] = y$1_['xml'] || 'http://www.w3.org/XML/1998/namespace', edcafb ? txywv['parse'](edcafb, y$1_, nqormp) : txywv['errorHandler']['error']('invalid doc source'), mkjiln['doc'];
}, _digljkh['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _difgjhk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (wvz$y, dehcfg, wyx$v, kmjiln) {
        var qpnmro = this['doc'],
            zvyuw = qpnmro['createElementNS'](wvz$y, wyx$v || dehcfg),
            $z01_y = kmjiln['length'];
        _dfjhegi(this, zvyuw), this['currentElement'] = zvyuw, this['locator'] && _dmolqp(this['locator'], zvyuw);
        for (var z10_$ = 0x0; $z01_y > z10_$; z10_$++) {
            var wvz$y = kmjiln['getURI'](z10_$),
                mijnlk = kmjiln['getValue'](z10_$),
                wyx$v = kmjiln['getQName'](z10_$),
                _2z0 = qpnmro['createAttributeNS'](wvz$y, wyx$v);
            this['locator'] && _dmolqp(kmjiln['getLocator'](z10_$), _2z0), _2z0['value'] = _2z0['nodeValue'] = mijnlk, zvyuw['setAttributeNode'](_2z0);
        }
    },
    'endElement': function () {
        {
            var qnrom = this['currentElement'];
            qnrom['tagName'];
        }
        this['currentElement'] = qnrom['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (klhimj, hlimjk) {
        var gehi = this['doc']['createProcessingInstruction'](klhimj, hlimjk);
        this['locator'] && _dmolqp(this['locator'], gehi), _dfjhegi(this, gehi);
    },
    'ignorableWhitespace': function () {},
    'characters': function (ijnl) {
        if (ijnl = _dwyuzx['apply'](this, arguments)) {
            if (this['cdata']) var tvsqru = this['doc']['createCDATASection'](ijnl);else var tvsqru = this['doc']['createTextNode'](ijnl);
            this['currentElement'] ? this['currentElement']['appendChild'](tvsqru) : /^\s*$/['test'](ijnl) && this['doc']['appendChild'](tvsqru), this['locator'] && _dmolqp(this['locator'], tvsqru);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (zwuvyx) {
        (this['locator'] = zwuvyx) && (zwuvyx['lineNumber'] = 0x0);
    },
    'comment': function (bfcge) {
        bfcge = _dwyuzx['apply'](this, arguments);
        var ebcdg = this['doc']['createComment'](bfcge);
        this['locator'] && _dmolqp(this['locator'], ebcdg), _dfjhegi(this, ebcdg);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (strvw, npklm, srvwut) {
        var egfhdc = this['doc']['implementation'];
        if (egfhdc && egfhdc['createDocumentType']) {
            var ortpqs = egfhdc['createDocumentType'](strvw, npklm, srvwut);
            this['locator'] && _dmolqp(this['locator'], ortpqs), _dfjhegi(this, ortpqs);
        }
    },
    'warning': function (hlgkj) {
        console['warn']('[xmldom warning]\t' + hlgkj, _dqpto(this['locator']));
    },
    'error': function (cehgd) {
        console['error']('[xmldom error]\t' + cehgd, _dqpto(this['locator']));
    },
    'fatalError': function (otsrq) {
        throw console['error']('[xmldom fatalError]\t' + otsrq, _dqpto(this['locator'])), otsrq;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rnpq) {
    _digljkh['prototype'][rnpq] = function () {
        return null;
    };
});
var _dkplnm = require('./bbbsax')['XMLReader'],
    _difgjhk = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];
exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _d_13024;