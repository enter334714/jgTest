var b = wx.$e;
function ek6sun(cmo7) {
    this['options'] = cmo7 || { 'locator': {} };
}
function epcmea($gtij, $gj3xi, ksq9nu) {
    function rzflhy(tyzrhl) {
        var db9k06 = $gtij[tyzrhl];
        !db9k06 && pacmo7 && (db9k06 = 0x2 == $gtij['length'] ? function (nkusq) {
            $gtij(tyzrhl, nkusq);
        } : $gtij), zfvyr4[tyzrhl] = db9k06 && function (d0b865) {
            db9k06('[xmldom ' + tyzrhl + ']\t' + d0b865 + e$3iqx(ksq9nu));
        } || function () {};
    }
    if (!$gtij) {
        if ($gj3xi instanceof ehtzrgl) return $gj3xi;
        $gtij = $gj3xi;
    }
    var zfvyr4 = {},
        pacmo7 = $gtij instanceof Function;
    return ksq9nu = ksq9nu || {}, rzflhy('warning'), rzflhy('error'), rzflhy('fatalError'), zfvyr4;
}
function ehtzrgl() {
    this['cdata'] = !0x1;
}
function eix3jg$(igxt$l, ijtgx$) {
    ijtgx$['lineNumber'] = igxt$l['lineNumber'], ijtgx$['columnNumber'] = igxt$l['columnNumber'];
}
function e$3iqx(a4m_7) {
    return a4m_7 ? '\x0a@' + (a4m_7['systemId'] || '') + '#[line:' + a4m_7['lineNumber'] + ',col:' + a4m_7['columnNumber'] + ']' : void 0x0;
}
function exjq3$i(ltxi, rlxgh, j3qxi) {
    return 'string' == typeof ltxi ? ltxi['substr'](rlxgh, j3qxi) : ltxi['length'] >= rlxgh + j3qxi || rlxgh ? new java['lang']['String'](ltxi, rlxgh, j3qxi) + '' : ltxi;
}
function en9qsu(t$xl, q$ni3) {
    t$xl['currentElement'] ? t$xl['currentElement']['appendChild'](q$ni3) : t$xl['doc']['appendChild'](q$ni3);
}
ek6sun['prototype']['parseFromString'] = function (ksb096, a4v_7f) {
    var lhtrg = this['options'],
        x3$qi = new etij$x(),
        n9qus3 = lhtrg['domBuilder'] || new ehtzrgl(),
        mav = lhtrg['errorHandler'],
        cpaoem = lhtrg['locator'],
        v7f_y = lhtrg['xmlns'] || {},
        lhrzg = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return cpaoem && n9qus3['setDocumentLocator'](cpaoem), x3$qi['errorHandler'] = epcmea(mav, n9qus3, cpaoem), x3$qi['domBuilder'] = lhtrg['domBuilder'] || n9qus3, /\/x?html?$/['test'](a4v_7f) && (lhrzg['nbsp'] = '\u00a0', lhrzg['copy'] = '©', v7f_y[''] = 'http://www.w3.org/1999/xhtml'), v7f_y['xml'] = v7f_y['xml'] || 'http://www.w3.org/XML/1998/namespace', ksb096 ? x3$qi['parse'](ksb096, v7f_y, lhrzg) : x3$qi['errorHandler']['error']('invalid doc source'), n9qus3['doc'];
}, ehtzrgl['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ejin$q()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (_47cam, jniuq, $3ixj, yfv4_) {
        var _4fyv7 = this['doc'],
            j$xq3i = _4fyv7['createElementNS'](_47cam, $3ixj || jniuq),
            ztglhr = yfv4_['length'];
        en9qsu(this, j$xq3i), this['currentElement'] = j$xq3i, this['locator'] && eix3jg$(this['locator'], j$xq3i);
        for (var thzlyr = 0x0; ztglhr > thzlyr; thzlyr++) {
            var _47cam = yfv4_['getURI'](thzlyr),
                hzfyv = yfv4_['getValue'](thzlyr),
                $3ixj = yfv4_['getQName'](thzlyr),
                t$xlg = _4fyv7['createAttributeNS'](_47cam, $3ixj);
            this['locator'] && eix3jg$(yfv4_['getLocator'](thzlyr), t$xlg), t$xlg['value'] = t$xlg['nodeValue'] = hzfyv, j$xq3i['setAttributeNode'](t$xlg);
        }
    },
    'endElement': function () {
        {
            var xj$t = this['currentElement'];
            xj$t['tagName'];
        }
        this['currentElement'] = xj$t['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (zrlyht, pmoea) {
        var j$n3 = this['doc']['createProcessingInstruction'](zrlyht, pmoea);
        this['locator'] && eix3jg$(this['locator'], j$n3), en9qsu(this, j$n3);
    },
    'ignorableWhitespace': function () {},
    'characters': function (oc7ma) {
        if (oc7ma = exjq3$i['apply'](this, arguments)) {
            if (this['cdata']) var iqu3j = this['doc']['createCDATASection'](oc7ma);else var iqu3j = this['doc']['createTextNode'](oc7ma);
            this['currentElement'] ? this['currentElement']['appendChild'](iqu3j) : /^\s*$/['test'](oc7ma) && this['doc']['appendChild'](iqu3j), this['locator'] && eix3jg$(this['locator'], iqu3j);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (hrzlg) {
        (this['locator'] = hrzlg) && (hrzlg['lineNumber'] = 0x0);
    },
    'comment': function (d8056b) {
        d8056b = exjq3$i['apply'](this, arguments);
        var cap7 = this['doc']['createComment'](d8056b);
        this['locator'] && eix3jg$(this['locator'], cap7), en9qsu(this, cap7);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (xgit, s9bk60, tzly) {
        var kun9s = this['doc']['implementation'];
        if (kun9s && kun9s['createDocumentType']) {
            var d0b5w8 = kun9s['createDocumentType'](xgit, s9bk60, tzly);
            this['locator'] && eix3jg$(this['locator'], d0b5w8), en9qsu(this, d0b5w8);
        }
    },
    'warning': function (_mc) {
        console['warn']('[xmldom warning]\t' + _mc, e$3iqx(this['locator']));
    },
    'error': function (yfzr) {
        console['error']('[xmldom error]\t' + yfzr, e$3iqx(this['locator']));
    },
    'fatalError': function (squjn) {
        throw console['error']('[xmldom fatalError]\t' + squjn, e$3iqx(this['locator'])), squjn;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($gt) {
    ehtzrgl['prototype'][$gt] = function () {
        return null;
    };
});
var etij$x = require('./eeesax')['XMLReader'],
    ejin$q = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ek6sun;