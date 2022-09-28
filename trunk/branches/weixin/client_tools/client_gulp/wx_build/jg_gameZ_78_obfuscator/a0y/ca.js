var s1 = wx.l$;
function _xv$wb0t(u7fl) {
    this['options'] = u7fl || { 'locator': {} };
}
function _x_caorq(ie6g, xg2yi, x6ef) {
    function rquoma(e56iyx) {
        var qoum = ie6g[e56iyx];
        !qoum && x5ei6y && (qoum = 0x2 == ie6g['length'] ? function (t$vw) {
            ie6g(e56iyx, t$vw);
        } : ie6g), b$d[e56iyx] = qoum && function ($bwt) {
            qoum('[xmldom ' + e56iyx + ']\t' + $bwt + _xck_9(x6ef));
        } || function () {};
    }
    if (!ie6g) {
        if (xg2yi instanceof _xq_rnk) return xg2yi;
        ie6g = xg2yi;
    }
    var b$d = {},
        x5ei6y = ie6g instanceof Function;
    return x6ef = x6ef || {}, rquoma('warning'), rquoma('error'), rquoma('fatalError'), b$d;
}
function _xq_rnk() {
    this['cdata'] = !0x1;
}
function _xxi2g(p5fsl, g4hi12) {
    g4hi12['lineNumber'] = p5fsl['lineNumber'], g4hi12['columnNumber'] = p5fsl['columnNumber'];
}
function _xck_9(_cqkrn) {
    return _cqkrn ? '\x0a@' + (_cqkrn['systemId'] || '') + '#[line:' + _cqkrn['lineNumber'] + ',col:' + _cqkrn['columnNumber'] + ']' : void 0x0;
}
function _xrquma(l7fpzu, aocq_r, krncq_) {
    return 'string' == typeof l7fpzu ? l7fpzu['substr'](aocq_r, krncq_) : l7fpzu['length'] >= aocq_r + krncq_ || aocq_r ? new java['lang']['String'](l7fpzu, aocq_r, krncq_) + '' : l7fpzu;
}
function _xs56fpl(d$80bt, upfz7l) {
    d$80bt['currentElement'] ? d$80bt['currentElement']['appendChild'](upfz7l) : d$80bt['doc']['appendChild'](upfz7l);
}
_xv$wb0t['prototype']['parseFromString'] = function ($nwj, marouq) {
    var y6eigx = this['options'],
        sp5f = new _xlf56se(),
        fulzp = y6eigx['domBuilder'] || new _xq_rnk(),
        dbt0$w = y6eigx['errorHandler'],
        v9c = y6eigx['locator'],
        fzps5 = y6eigx['xmlns'] || {},
        wj = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return v9c && fulzp['setDocumentLocator'](v9c), sp5f['errorHandler'] = _x_caorq(dbt0$w, fulzp, v9c), sp5f['domBuilder'] = y6eigx['domBuilder'] || fulzp, /\/x?html?$/['test'](marouq) && (wj['nbsp'] = '\u00a0', wj['copy'] = '©', fzps5[''] = 'http://www.w3.org/1999/xhtml'), fzps5['xml'] = fzps5['xml'] || 'http://www.w3.org/XML/1998/namespace', $nwj ? sp5f['parse']($nwj, fzps5, wj) : sp5f['errorHandler']['error']('invalid doc source'), fulzp['doc'];
}, _xq_rnk['prototype'] = {
    'startDocument': function () {
        this['doc'] = new _xjn$v()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (i2hy4g, ump, es6xy, gi42h) {
        var j$vtw9 = this['doc'],
            n_j9ck = j$vtw9['createElementNS'](i2hy4g, es6xy || ump),
            crqn = gi42h['length'];
        _xs56fpl(this, n_j9ck), this['currentElement'] = n_j9ck, this['locator'] && _xxi2g(this['locator'], n_j9ck);
        for (var v$9wnj = 0x0; crqn > v$9wnj; v$9wnj++) {
            var i2hy4g = gi42h['getURI'](v$9wnj),
                acroq_ = gi42h['getValue'](v$9wnj),
                es6xy = gi42h['getQName'](v$9wnj),
                vn$j9w = j$vtw9['createAttributeNS'](i2hy4g, es6xy);
            this['locator'] && _xxi2g(gi42h['getLocator'](v$9wnj), vn$j9w), vn$j9w['value'] = vn$j9w['nodeValue'] = acroq_, n_j9ck['setAttributeNode'](vn$j9w);
        }
    },
    'endElement': function () {
        {
            var wvjt$9 = this['currentElement'];
            wvjt$9['tagName'];
        }
        this['currentElement'] = wvjt$9['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (s56plf, gye6x) {
        var omq7u = this['doc']['createProcessingInstruction'](s56plf, gye6x);
        this['locator'] && _xxi2g(this['locator'], omq7u), _xs56fpl(this, omq7u);
    },
    'ignorableWhitespace': function () {},
    'characters': function (ixg6e) {
        if (ixg6e = _xrquma['apply'](this, arguments)) {
            if (this['cdata']) var mulp7 = this['doc']['createCDATASection'](ixg6e);else var mulp7 = this['doc']['createTextNode'](ixg6e);
            this['currentElement'] ? this['currentElement']['appendChild'](mulp7) : /^\s*$/['test'](ixg6e) && this['doc']['appendChild'](mulp7), this['locator'] && _xxi2g(this['locator'], mulp7);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (rc_oaq) {
        (this['locator'] = rc_oaq) && (rc_oaq['lineNumber'] = 0x0);
    },
    'comment': function ($jtw0) {
        $jtw0 = _xrquma['apply'](this, arguments);
        var ma7ouq = this['doc']['createComment']($jtw0);
        this['locator'] && _xxi2g(this['locator'], ma7ouq), _xs56fpl(this, ma7ouq);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (f56, ygi4h2, g24xi) {
        var orua = this['doc']['implementation'];
        if (orua && orua['createDocumentType']) {
            var ca_rqo = orua['createDocumentType'](f56, ygi4h2, g24xi);
            this['locator'] && _xxi2g(this['locator'], ca_rqo), _xs56fpl(this, ca_rqo);
        }
    },
    'warning': function (nk_q) {
        console['warn']('[xmldom warning]\t' + nk_q, _xck_9(this['locator']));
    },
    'error': function (cjk) {
        console['error']('[xmldom error]\t' + cjk, _xck_9(this['locator']));
    },
    'fatalError': function (wv$jt) {
        throw console['error']('[xmldom fatalError]\t' + wv$jt, _xck_9(this['locator'])), wv$jt;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kjvw) {
    _xq_rnk['prototype'][kjvw] = function () {
        return null;
    };
});
var _xlf56se = require('./e05a')['XMLReader'],
    _xjn$v = exports['DOMImplementation'] = require('./a7pm')['DOMImplementation'];
exports['XMLSerializer'] = require('./a7pm')['XMLSerializer'], exports['DOMParser'] = _xv$wb0t;