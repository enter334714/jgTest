var f = wx.$B;
function Sm$6skv(hsi$4) {
    this['options'] = hsi$4 || { 'locator': {} };
}
function Sugfe1(k6$sm, e9g7, m6kv2$) {
    function qd0o2(skhi$6) {
        var wpaxo = k6$sm[skhi$6];
        !wpaxo && h38ji4 && (wpaxo = 0x2 == k6$sm['length'] ? function (rg7e9u) {
            k6$sm(skhi$6, rg7e9u);
        } : k6$sm), md2v0a[skhi$6] = wpaxo && function (h4iks) {
            wpaxo('[xmldom ' + skhi$6 + ']\t' + h4iks + Sqxwyo(m6kv2$));
        } || function () {};
    }
    if (!k6$sm) {
        if (e9g7 instanceof So0daq) return e9g7;
        k6$sm = e9g7;
    }
    var md2v0a = {},
        h38ji4 = k6$sm instanceof Function;
    return m6kv2$ = m6kv2$ || {}, qd0o2('warning'), qd0o2('error'), qd0o2('fatalError'), md2v0a;
}
function So0daq() {
    this['cdata'] = !0x1;
}
function Sadqm20(ure1lg, owa0dq) {
    owa0dq['lineNumber'] = ure1lg['lineNumber'], owa0dq['columnNumber'] = ure1lg['columnNumber'];
}
function Sqxwyo(s4kih) {
    return s4kih ? '\x0a@' + (s4kih['systemId'] || '') + '#[line:' + s4kih['lineNumber'] + ',col:' + s4kih['columnNumber'] + ']' : void 0x0;
}
function Spy5b_(dqo2, wda, rulge1) {
    return 'string' == typeof dqo2 ? dqo2['substr'](wda, rulge1) : dqo2['length'] >= wda + rulge1 || wda ? new java['lang']['String'](dqo2, wda, rulge1) + '' : dqo2;
}
function Ss3h$(ltgf, g1erlu) {
    ltgf['currentElement'] ? ltgf['currentElement']['appendChild'](g1erlu) : ltgf['doc']['appendChild'](g1erlu);
}
Sm$6skv['prototype']['parseFromString'] = function (ivs, i$vks) {
    var aopxw = this['options'],
        khi$4s = new Se987jr(),
        pxzyw5 = aopxw['domBuilder'] || new So0daq(),
        xqda = aopxw['errorHandler'],
        qawpxo = aopxw['locator'],
        i$ks6h = aopxw['xmlns'] || {},
        b_n5yz = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return qawpxo && pxzyw5['setDocumentLocator'](qawpxo), khi$4s['errorHandler'] = Sugfe1(xqda, pxzyw5, qawpxo), khi$4s['domBuilder'] = aopxw['domBuilder'] || pxzyw5, /\/x?html?$/['test'](i$vks) && (b_n5yz['nbsp'] = '\u00a0', b_n5yz['copy'] = '©', i$ks6h[''] = 'http://www.w3.org/1999/xhtml'), i$ks6h['xml'] = i$ks6h['xml'] || 'http://www.w3.org/XML/1998/namespace', ivs ? khi$4s['parse'](ivs, i$ks6h, b_n5yz) : khi$4s['errorHandler']['error']('invalid doc source'), pxzyw5['doc'];
}, So0daq['prototype'] = {
    'startDocument': function () {
        this['doc'] = new Slr1g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (gl1tfu, hks$i6, fgltu1, $3shi) {
        var svi6k = this['doc'],
            odqw0a = svi6k['createElementNS'](gl1tfu, fgltu1 || hks$i6),
            r983 = $3shi['length'];
        Ss3h$(this, odqw0a), this['currentElement'] = odqw0a, this['locator'] && Sadqm20(this['locator'], odqw0a);
        for (var pqoax = 0x0; r983 > pqoax; pqoax++) {
            var gl1tfu = $3shi['getURI'](pqoax),
                rej798 = $3shi['getValue'](pqoax),
                fgltu1 = $3shi['getQName'](pqoax),
                qoa20d = svi6k['createAttributeNS'](gl1tfu, fgltu1);
            this['locator'] && Sadqm20($3shi['getLocator'](pqoax), qoa20d), qoa20d['value'] = qoa20d['nodeValue'] = rej798, odqw0a['setAttributeNode'](qoa20d);
        }
    },
    'endElement': function () {
        {
            var ge7r = this['currentElement'];
            ge7r['tagName'];
        }
        this['currentElement'] = ge7r['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (khi$6, v0d2am) {
        var f1tglu = this['doc']['createProcessingInstruction'](khi$6, v0d2am);
        this['locator'] && Sadqm20(this['locator'], f1tglu), Ss3h$(this, f1tglu);
    },
    'ignorableWhitespace': function () {},
    'characters': function (_n5zby) {
        if (_n5zby = Spy5b_['apply'](this, arguments)) {
            if (this['cdata']) var mavd20 = this['doc']['createCDATASection'](_n5zby);else var mavd20 = this['doc']['createTextNode'](_n5zby);
            this['currentElement'] ? this['currentElement']['appendChild'](mavd20) : /^\s*$/['test'](_n5zby) && this['doc']['appendChild'](mavd20), this['locator'] && Sadqm20(this['locator'], mavd20);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (amd) {
        (this['locator'] = amd) && (amd['lineNumber'] = 0x0);
    },
    'comment': function (hi843) {
        hi843 = Spy5b_['apply'](this, arguments);
        var gutf1 = this['doc']['createComment'](hi843);
        this['locator'] && Sadqm20(this['locator'], gutf1), Ss3h$(this, gutf1);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (fluge1, geur7, xqwdoa) {
        var je987 = this['doc']['implementation'];
        if (je987 && je987['createDocumentType']) {
            var v6m2$k = je987['createDocumentType'](fluge1, geur7, xqwdoa);
            this['locator'] && Sadqm20(this['locator'], v6m2$k), Ss3h$(this, v6m2$k);
        }
    },
    'warning': function (d0woq) {
        console['warn']('[xmldom warning]\t' + d0woq, Sqxwyo(this['locator']));
    },
    'error': function (d2mav) {
        console['error']('[xmldom error]\t' + d2mav, Sqxwyo(this['locator']));
    },
    'fatalError': function (erj89) {
        throw console['error']('[xmldom fatalError]\t' + erj89, Sqxwyo(this['locator'])), erj89;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hi$s6) {
    So0daq['prototype'][hi$s6] = function () {
        return null;
    };
});
var Se987jr = require('./ulrf7a')['XMLReader'],
    Slr1g = exports['DOMImplementation'] = require('./g7bg')['DOMImplementation'];
exports['XMLSerializer'] = require('./g7bg')['XMLSerializer'], exports['DOMParser'] = Sm$6skv;