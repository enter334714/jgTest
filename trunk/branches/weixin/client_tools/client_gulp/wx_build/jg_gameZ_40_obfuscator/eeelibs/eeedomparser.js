var b = wx.$e;
function eoapec(emcoa) {
    this['options'] = emcoa || { 'locator': {} };
}
function ej3$gxi(xtg$i, f4yzvr, moacpe) {
    function fz_yv4(nqu9) {
        var ameco = xtg$i[nqu9];
        !ameco && bd0w && (ameco = 0x2 == xtg$i['length'] ? function (thrly) {
            xtg$i(nqu9, thrly);
        } : xtg$i), tzhyrl[nqu9] = ameco && function (d0k6b9) {
            ameco('[xmldom ' + nqu9 + ']\t' + d0k6b9 + evyfzr(moacpe));
        } || function () {};
    }
    if (!xtg$i) {
        if (f4yzvr instanceof evzy4) return f4yzvr;
        xtg$i = f4yzvr;
    }
    var tzhyrl = {},
        bd0w = xtg$i instanceof Function;
    return moacpe = moacpe || {}, fz_yv4('warning'), fz_yv4('error'), fz_yv4('fatalError'), tzhyrl;
}
function evzy4() {
    this['cdata'] = !0x1;
}
function ea_74mc(tixlg$, v7_4ma) {
    v7_4ma['lineNumber'] = tixlg$['lineNumber'], v7_4ma['columnNumber'] = tixlg$['columnNumber'];
}
function evyfzr(lrhy) {
    return lrhy ? '\x0a@' + (lrhy['systemId'] || '') + '#[line:' + lrhy['lineNumber'] + ',col:' + lrhy['columnNumber'] + ']' : void 0x0;
}
function erhx(oca_7, eoac, am7_v4) {
    return 'string' == typeof oca_7 ? oca_7['substr'](eoac, am7_v4) : oca_7['length'] >= eoac + am7_v4 || eoac ? new java['lang']['String'](oca_7, eoac, am7_v4) + '' : oca_7;
}
function eg3jix(oamep, rvf4) {
    oamep['currentElement'] ? oamep['currentElement']['appendChild'](rvf4) : oamep['doc']['appendChild'](rvf4);
}
eoapec['prototype']['parseFromString'] = function (_vzf4y, bu6sk9) {
    var m_7v4 = this['options'],
        cao_7m = new eam_co(),
        sk06b9 = m_7v4['domBuilder'] || new evzy4(),
        mceapo = m_7v4['errorHandler'],
        ig$xtj = m_7v4['locator'],
        a4_mv = m_7v4['xmlns'] || {},
        lit = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return ig$xtj && sk06b9['setDocumentLocator'](ig$xtj), cao_7m['errorHandler'] = ej3$gxi(mceapo, sk06b9, ig$xtj), cao_7m['domBuilder'] = m_7v4['domBuilder'] || sk06b9, /\/x?html?$/['test'](bu6sk9) && (lit['nbsp'] = '\u00a0', lit['copy'] = '©', a4_mv[''] = 'http://www.w3.org/1999/xhtml'), a4_mv['xml'] = a4_mv['xml'] || 'http://www.w3.org/XML/1998/namespace', _vzf4y ? cao_7m['parse'](_vzf4y, a4_mv, lit) : cao_7m['errorHandler']['error']('invalid doc source'), sk06b9['doc'];
}, evzy4['prototype'] = {
    'startDocument': function () {
        this['doc'] = new eacpm7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (eoapc, lhrgxt, i$n3, lxt$i) {
        var tlzhg = this['doc'],
            f4yv7 = tlzhg['createElementNS'](eoapc, i$n3 || lhrgxt),
            z_yf4 = lxt$i['length'];
        eg3jix(this, f4yv7), this['currentElement'] = f4yv7, this['locator'] && ea_74mc(this['locator'], f4yv7);
        for (var _4acm = 0x0; z_yf4 > _4acm; _4acm++) {
            var eoapc = lxt$i['getURI'](_4acm),
                lrhztg = lxt$i['getValue'](_4acm),
                i$n3 = lxt$i['getQName'](_4acm),
                tlxg$ = tlzhg['createAttributeNS'](eoapc, i$n3);
            this['locator'] && ea_74mc(lxt$i['getLocator'](_4acm), tlxg$), tlxg$['value'] = tlxg$['nodeValue'] = lrhztg, f4yv7['setAttributeNode'](tlxg$);
        }
    },
    'endElement': function () {
        {
            var _y7v4 = this['currentElement'];
            _y7v4['tagName'];
        }
        this['currentElement'] = _y7v4['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (knu9s, ix$tl) {
        var ylrzfh = this['doc']['createProcessingInstruction'](knu9s, ix$tl);
        this['locator'] && ea_74mc(this['locator'], ylrzfh), eg3jix(this, ylrzfh);
    },
    'ignorableWhitespace': function () {},
    'characters': function (rfyz4) {
        if (rfyz4 = erhx['apply'](this, arguments)) {
            if (this['cdata']) var oamcp = this['doc']['createCDATASection'](rfyz4);else var oamcp = this['doc']['createTextNode'](rfyz4);
            this['currentElement'] ? this['currentElement']['appendChild'](oamcp) : /^\s*$/['test'](rfyz4) && this['doc']['appendChild'](oamcp), this['locator'] && ea_74mc(this['locator'], oamcp);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (d056b) {
        (this['locator'] = d056b) && (d056b['lineNumber'] = 0x0);
    },
    'comment': function (bs9k0) {
        bs9k0 = erhx['apply'](this, arguments);
        var uknq9s = this['doc']['createComment'](bs9k0);
        this['locator'] && ea_74mc(this['locator'], uknq9s), eg3jix(this, uknq9s);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (pcoeam, pemca, nq$j3i) {
        var us6nk = this['doc']['implementation'];
        if (us6nk && us6nk['createDocumentType']) {
            var ztyhrl = us6nk['createDocumentType'](pcoeam, pemca, nq$j3i);
            this['locator'] && ea_74mc(this['locator'], ztyhrl), eg3jix(this, ztyhrl);
        }
    },
    'warning': function (q3njus) {
        console['warn']('[xmldom warning]\t' + q3njus, evyfzr(this['locator']));
    },
    'error': function (lyfr) {
        console['error']('[xmldom error]\t' + lyfr, evyfzr(this['locator']));
    },
    'fatalError': function (nq9usk) {
        throw console['error']('[xmldom fatalError]\t' + nq9usk, evyfzr(this['locator'])), nq9usk;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hgltrx) {
    evzy4['prototype'][hgltrx] = function () {
        return null;
    };
});
var eam_co = require('./eeesax')['XMLReader'],
    eacpm7 = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eoapec;