var b = wx.$e;
function e_a$ik(ev$a) {
    this['options'] = ev$a || { 'locator': {} };
}
function evtwe(kfi0, ti$ak, z48vr) {
    function nuqh2(ae_ki) {
        var j2q3 = kfi0[ae_ki];
        !j2q3 && lqu2nh && (j2q3 = 0x2 == kfi0['length'] ? function (hqn25) {
            kfi0(ae_ki, hqn25);
        } : kfi0), mg_90[ae_ki] = j2q3 && function (a$etwv) {
            j2q3('[xmldom ' + ae_ki + ']\t' + a$etwv + ebdr4z(z48vr));
        } || function () {};
    }
    if (!kfi0) {
        if (ti$ak instanceof ed67zb) return ti$ak;
        kfi0 = ti$ak;
    }
    var mg_90 = {},
        lqu2nh = kfi0 instanceof Function;
    return z48vr = z48vr || {}, nuqh2('warning'), nuqh2('error'), nuqh2('fatalError'), mg_90;
}
function ed67zb() {
    this['cdata'] = !0x1;
}
function exgmof(z7bp6c, q5s3j1) {
    q5s3j1['lineNumber'] = z7bp6c['lineNumber'], q5s3j1['columnNumber'] = z7bp6c['columnNumber'];
}
function ebdr4z(r4zvd) {
    return r4zvd ? '\x0a@' + (r4zvd['systemId'] || '') + '#[line:' + r4zvd['lineNumber'] + ',col:' + r4zvd['columnNumber'] + ']' : void 0x0;
}
function etiawe(ike$t, zcb76p, kaeit) {
    return 'string' == typeof ike$t ? ike$t['substr'](zcb76p, kaeit) : ike$t['length'] >= zcb76p + kaeit || zcb76p ? new java['lang']['String'](ike$t, zcb76p, kaeit) + '' : ike$t;
}
function eq532sj(akte, vetw48) {
    akte['currentElement'] ? akte['currentElement']['appendChild'](vetw48) : akte['doc']['appendChild'](vetw48);
}
e_a$ik['prototype']['parseFromString'] = function (ak_e, b67czd) {
    var atev$ = this['options'],
        yhunl = new erzvd(),
        zbdrc7 = atev$['domBuilder'] || new ed67zb(),
        _ifk0 = atev$['errorHandler'],
        mkf = atev$['locator'],
        f9go = atev$['xmlns'] || {},
        xgo9fm = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return mkf && zbdrc7['setDocumentLocator'](mkf), yhunl['errorHandler'] = evtwe(_ifk0, zbdrc7, mkf), yhunl['domBuilder'] = atev$['domBuilder'] || zbdrc7, /\/x?html?$/['test'](b67czd) && (xgo9fm['nbsp'] = '\u00a0', xgo9fm['copy'] = '©', f9go[''] = 'http://www.w3.org/1999/xhtml'), f9go['xml'] = f9go['xml'] || 'http://www.w3.org/XML/1998/namespace', ak_e ? yhunl['parse'](ak_e, f9go, xgo9fm) : yhunl['errorHandler']['error']('invalid doc source'), zbdrc7['doc'];
}, ed67zb['prototype'] = {
    'startDocument': function () {
        this['doc'] = new euhnql2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function ($tewva, zdrbc, tv4e8w, itak$e) {
        var drb7zc = this['doc'],
            sjo1x = drb7zc['createElementNS']($tewva, tv4e8w || zdrbc),
            gof09m = itak$e['length'];
        eq532sj(this, sjo1x), this['currentElement'] = sjo1x, this['locator'] && exgmof(this['locator'], sjo1x);
        for (var zcbd67 = 0x0; gof09m > zcbd67; zcbd67++) {
            var $tewva = itak$e['getURI'](zcbd67),
                p6c7z = itak$e['getValue'](zcbd67),
                tv4e8w = itak$e['getQName'](zcbd67),
                bzd76c = drb7zc['createAttributeNS']($tewva, tv4e8w);
            this['locator'] && exgmof(itak$e['getLocator'](zcbd67), bzd76c), bzd76c['value'] = bzd76c['nodeValue'] = p6c7z, sjo1x['setAttributeNode'](bzd76c);
        }
    },
    'endElement': function () {
        {
            var $akeit = this['currentElement'];
            $akeit['tagName'];
        }
        this['currentElement'] = $akeit['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (ia0$_k, $_aiek) {
        var gfmxo = this['doc']['createProcessingInstruction'](ia0$_k, $_aiek);
        this['locator'] && exgmof(this['locator'], gfmxo), eq532sj(this, gfmxo);
    },
    'ignorableWhitespace': function () {},
    'characters': function (q2uh5n) {
        if (q2uh5n = etiawe['apply'](this, arguments)) {
            if (this['cdata']) var og31m = this['doc']['createCDATASection'](q2uh5n);else var og31m = this['doc']['createTextNode'](q2uh5n);
            this['currentElement'] ? this['currentElement']['appendChild'](og31m) : /^\s*$/['test'](q2uh5n) && this['doc']['appendChild'](og31m), this['locator'] && exgmof(this['locator'], og31m);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (o9x1) {
        (this['locator'] = o9x1) && (o9x1['lineNumber'] = 0x0);
    },
    'comment': function (g3xoj1) {
        g3xoj1 = etiawe['apply'](this, arguments);
        var v$e8tw = this['doc']['createComment'](g3xoj1);
        this['locator'] && exgmof(this['locator'], v$e8tw), eq532sj(this, v$e8tw);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (taiw$e, xsj35, nh2q5u) {
        var og1xm = this['doc']['implementation'];
        if (og1xm && og1xm['createDocumentType']) {
            var oxfm = og1xm['createDocumentType'](taiw$e, xsj35, nh2q5u);
            this['locator'] && exgmof(this['locator'], oxfm), eq532sj(this, oxfm);
        }
    },
    'warning': function (snu52) {
        console['warn']('[xmldom warning]\t' + snu52, ebdr4z(this['locator']));
    },
    'error': function (_0$kia) {
        console['error']('[xmldom error]\t' + _0$kia, ebdr4z(this['locator']));
    },
    'fatalError': function (fmk9) {
        throw console['error']('[xmldom fatalError]\t' + fmk9, ebdr4z(this['locator'])), fmk9;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (atk) {
    ed67zb['prototype'][atk] = function () {
        return null;
    };
});
var erzvd = require('./a0njj')['XMLReader'],
    euhnql2 = exports['DOMImplementation'] = require('./gc')['DOMImplementation'];
exports['XMLSerializer'] = require('./gc')['XMLSerializer'], exports['DOMParser'] = e_a$ik;