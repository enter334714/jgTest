var b = wx.$e;
function ek6snu9(m4_7v) {
    this['options'] = m4_7v || { 'locator': {} };
}
function eijtx(a_omc7, ni3qj, q$x3ij) {
    function j3uni(ujqi3n) {
        var z4rvy = a_omc7[ujqi3n];
        !z4rvy && b08wd && (z4rvy = 0x2 == a_omc7['length'] ? function (d690b) {
            a_omc7(ujqi3n, d690b);
        } : a_omc7), zgtrl[ujqi3n] = z4rvy && function (uq9sk) {
            z4rvy('[xmldom ' + ujqi3n + ']\t' + uq9sk + edb0(q$x3ij));
        } || function () {};
    }
    if (!a_omc7) {
        if (ni3qj instanceof ey4zvrf) return ni3qj;
        a_omc7 = ni3qj;
    }
    var zgtrl = {},
        b08wd = a_omc7 instanceof Function;
    return q$x3ij = q$x3ij || {}, j3uni('warning'), j3uni('error'), j3uni('fatalError'), zgtrl;
}
function ey4zvrf() {
    this['cdata'] = !0x1;
}
function erltgzh(d9bk0, xglhtr) {
    xglhtr['lineNumber'] = d9bk0['lineNumber'], xglhtr['columnNumber'] = d9bk0['columnNumber'];
}
function edb0(gl$xit) {
    return gl$xit ? '\x0a@' + (gl$xit['systemId'] || '') + '#[line:' + gl$xit['lineNumber'] + ',col:' + gl$xit['columnNumber'] + ']' : void 0x0;
}
function emcp(i$tj, cpm7oa, moc7) {
    return 'string' == typeof i$tj ? i$tj['substr'](cpm7oa, moc7) : i$tj['length'] >= cpm7oa + moc7 || cpm7oa ? new java['lang']['String'](i$tj, cpm7oa, moc7) + '' : i$tj;
}
function ek9b60s(yhlzf, xhlrgt) {
    yhlzf['currentElement'] ? yhlzf['currentElement']['appendChild'](xhlrgt) : yhlzf['doc']['appendChild'](xhlrgt);
}
ek6snu9['prototype']['parseFromString'] = function (bd865, vz_4y) {
    var xtgij = this['options'],
        b90kd6 = new eijxt$g(),
        us6b9 = xtgij['domBuilder'] || new ey4zvrf(),
        yvfhzr = xtgij['errorHandler'],
        v_m47a = xtgij['locator'],
        ocmpea = xtgij['xmlns'] || {},
        nq3iuj = {
        'lt': '<',
        'gt': '>',
        'amp': '&',
        'quot': '\x22',
        'apos': '\x27'
    };
    return v_m47a && us6b9['setDocumentLocator'](v_m47a), b90kd6['errorHandler'] = eijtx(yvfhzr, us6b9, v_m47a), b90kd6['domBuilder'] = xtgij['domBuilder'] || us6b9, /\/x?html?$/['test'](vz_4y) && (nq3iuj['nbsp'] = '\u00a0', nq3iuj['copy'] = '©', ocmpea[''] = 'http://www.w3.org/1999/xhtml'), ocmpea['xml'] = ocmpea['xml'] || 'http://www.w3.org/XML/1998/namespace', bd865 ? b90kd6['parse'](bd865, ocmpea, nq3iuj) : b90kd6['errorHandler']['error']('invalid doc source'), us6b9['doc'];
}, ey4zvrf['prototype'] = {
    'startDocument': function () {
        this['doc'] = new ed5w128()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
    },
    'startElement': function (j3uqns, b8d0w5, rlgzht, fvhr) {
        var z4y_vf = this['doc'],
            dwb5 = z4y_vf['createElementNS'](j3uqns, rlgzht || b8d0w5),
            unk6s9 = fvhr['length'];
        ek9b60s(this, dwb5), this['currentElement'] = dwb5, this['locator'] && erltgzh(this['locator'], dwb5);
        for (var kquns = 0x0; unk6s9 > kquns; kquns++) {
            var j3uqns = fvhr['getURI'](kquns),
                zfrylh = fvhr['getValue'](kquns),
                rlgzht = fvhr['getQName'](kquns),
                wd8521 = z4y_vf['createAttributeNS'](j3uqns, rlgzht);
            this['locator'] && erltgzh(fvhr['getLocator'](kquns), wd8521), wd8521['value'] = wd8521['nodeValue'] = zfrylh, dwb5['setAttributeNode'](wd8521);
        }
    },
    'endElement': function () {
        {
            var _o7acm = this['currentElement'];
            _o7acm['tagName'];
        }
        this['currentElement'] = _o7acm['parentNode'];
    },
    'startPrefixMapping': function () {},
    'endPrefixMapping': function () {},
    'processingInstruction': function (jns3qu, va4_7) {
        var oamepc = this['doc']['createProcessingInstruction'](jns3qu, va4_7);
        this['locator'] && erltgzh(this['locator'], oamepc), ek9b60s(this, oamepc);
    },
    'ignorableWhitespace': function () {},
    'characters': function (vfyz4) {
        if (vfyz4 = emcp['apply'](this, arguments)) {
            if (this['cdata']) var omca7 = this['doc']['createCDATASection'](vfyz4);else var omca7 = this['doc']['createTextNode'](vfyz4);
            this['currentElement'] ? this['currentElement']['appendChild'](omca7) : /^\s*$/['test'](vfyz4) && this['doc']['appendChild'](omca7), this['locator'] && erltgzh(this['locator'], omca7);
        }
    },
    'skippedEntity': function () {},
    'endDocument': function () {
        this['doc']['normalize']();
    },
    'setDocumentLocator': function (oam7c_) {
        (this['locator'] = oam7c_) && (oam7c_['lineNumber'] = 0x0);
    },
    'comment': function (xgi$) {
        xgi$ = emcp['apply'](this, arguments);
        var a7v4 = this['doc']['createComment'](xgi$);
        this['locator'] && erltgzh(this['locator'], a7v4), ek9b60s(this, a7v4);
    },
    'startCDATA': function () {
        this['cdata'] = !0x0;
    },
    'endCDATA': function () {
        this['cdata'] = !0x1;
    },
    'startDTD': function (gj$ti, frl, pcaeom) {
        var vyfrhz = this['doc']['implementation'];
        if (vyfrhz && vyfrhz['createDocumentType']) {
            var u9skn = vyfrhz['createDocumentType'](gj$ti, frl, pcaeom);
            this['locator'] && erltgzh(this['locator'], u9skn), ek9b60s(this, u9skn);
        }
    },
    'warning': function (lzrgth) {
        console['warn']('[xmldom warning]\t' + lzrgth, edb0(this['locator']));
    },
    'error': function (dkb56) {
        console['error']('[xmldom error]\t' + dkb56, edb0(this['locator']));
    },
    'fatalError': function (iqnj$3) {
        throw console['error']('[xmldom fatalError]\t' + iqnj$3, edb0(this['locator'])), iqnj$3;
    }
}, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zhrfly) {
    ey4zvrf['prototype'][zhrfly] = function () {
        return null;
    };
});
var eijxt$g = require('./eeesax')['XMLReader'],
    ed5w128 = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];
exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ek6snu9;