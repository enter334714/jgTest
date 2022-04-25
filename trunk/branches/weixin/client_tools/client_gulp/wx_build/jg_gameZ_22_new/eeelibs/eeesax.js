function XMLReader() {}function parse(C$99r, C$99l, C$99_, C$99a, C$99n) {
  function c(C$99e) {
    var C$99t = C$99e.slice(1, -1);return C$99t in C$99_ ? C$99_[C$99t] : "#" === C$99t.charAt(0) ? 65535 < (C$99t = parseInt(C$99t.substr(1).replace("x", "0x"))) ? (C$99t -= 65536, String.fromCharCode(55296 + (C$99t >> 10), 56320 + (1023 & C$99t))) : String.fromCharCode(C$99t) : (C$99n.error("entity not found:" + C$99e), C$99e);
  }function i(C$99e) {
    var C$99t;C$99c < C$99e && (C$99t = C$99r.substring(C$99c, C$99e).replace(/&#?\w+;/g, c), C$99s && o(C$99c), C$99a.characters(C$99t, 0, C$99e - C$99c), C$99c = C$99e);
  }function o(C$99e, C$99t) {
    for (; C$99p <= C$99e && (C$99t = C$99d.exec(C$99r));) C$99m = C$99t.index, C$99p = C$99m + C$99t[0].length, C$99s.lineNumber++;C$99s.columnNumber = C$99e - C$99m + 1;
  }for (var C$99m = 0, C$99p = 0, C$99d = /.*(?:\r\n?|\n)|.*$/g, C$99s = C$99a.locator, C$99T = [{ currentNSMap: C$99l }], C$99f = {}, C$99c = 0;;) {
    try {
      var C$99e = C$99r.indexOf("<", C$99c);var C$99S, C$99A;if (C$99e < 0) return void (C$99r.substr(C$99c).match(/^\s*$/) || (C$99A = (C$99S = C$99a.doc).createTextNode(C$99r.substr(C$99c)), C$99S.appendChild(C$99A), C$99a.currentElement = C$99A));switch (C$99c < C$99e && i(C$99e), C$99r.charAt(C$99e + 1)) {case "/":
          var C$99t = C$99r.indexOf(">", C$99e + 3),
              C$99i = C$99r.substring(C$99e + 2, C$99t),
              C$99o = C$99T.pop();C$99t < 0 ? (C$99i = C$99r.substring(C$99e + 2).replace(/[\s<].*/, ""), C$99n.error("end tag name: " + C$99i + " is not complete:" + C$99o.tagName), C$99t = C$99e + 1 + C$99i.length) : C$99i.match(/\s</) && (C$99i = C$99i.replace(/[\s<].*/, ""), C$99n.error("end tag name: " + C$99i + " maybe not complete"), C$99t = C$99e + 1 + C$99i.length);var C$99h = C$99o.localNSMap,
              C$99g = C$99o.tagName == C$99i;if (C$99g || C$99o.tagName && C$99o.tagName.toLowerCase() == C$99i.toLowerCase()) {
            if (C$99a.endElement(C$99o.uri, C$99o.localName, C$99i), C$99h) for (var C$99E in C$99h) C$99a.endPrefixMapping(C$99E);C$99g || C$99n.fatalError("end tag name: " + C$99i + " is not match the current start tagName:" + C$99o.tagName);
          } else C$99T.push(C$99o);C$99t++;break;case "?":
          C$99s && o(C$99e), C$99t = parseInstruction(C$99r, C$99e, C$99a);break;case "!":
          C$99s && o(C$99e), C$99t = parseDCC(C$99r, C$99e, C$99a, C$99n);break;default:
          C$99s && o(C$99e);var C$99u = new ElementAttributes(),
              C$99w = C$99T[C$99T.length - 1].currentNSMap,
              C$99t = parseElementStartPart(C$99r, C$99e, C$99u, C$99w, c, C$99n),
              C$99N = C$99u.length;if (!C$99u.closed && fixSelfClosed(C$99r, C$99t, C$99u.tagName, C$99f) && (C$99u.closed = !0, C$99_.nbsp || C$99n.warning("unclosed xml attribute")), C$99s && C$99N) {
            for (var C$99b = copyLocator(C$99s, {}), C$99x = 0; C$99x < C$99N; C$99x++) {
              var C$99C = C$99u[C$99x];o(C$99C.offset), C$99C.locator = copyLocator(C$99s, {});
            }C$99a.locator = C$99b, appendElement(C$99u, C$99a, C$99w) && C$99T.push(C$99u), C$99a.locator = C$99s;
          } else appendElement(C$99u, C$99a, C$99w) && C$99T.push(C$99u);"http://www.w3.org/1999/xhtml" !== C$99u.uri || C$99u.closed ? C$99t++ : C$99t = parseHtmlSpecialContent(C$99r, C$99t, C$99u.tagName, c, C$99a);}
    } catch (C$99e) {
      C$99n.error("element parse error: " + C$99e), C$99t = -1;
    }C$99c < C$99t ? C$99c = C$99t : i(Math.max(C$99e, C$99c) + 1);
  }
}function copyLocator(C$99e, C$99t) {
  return C$99t.lineNumber = C$99e.lineNumber, C$99t.columnNumber = C$99e.columnNumber, C$99t;
}function parseElementStartPart(C$99e, C$99t, C$99r, C$99l, C$99a, C$99n) {
  for (var C$99s, C$99c = ++C$99t, C$99i = S_TAG;;) {
    var C$99o = C$99e.charAt(C$99c);switch (C$99o) {case "=":
        if (C$99i === S_ATTR) C$99s = C$99e.slice(C$99t, C$99c), C$99i = S_EQ;else {
          if (C$99i !== S_ATTR_SPACE) throw new Error("attribute equal must after attrName");C$99i = S_EQ;
        }break;case "'":case '"':
        if (C$99i === S_EQ || C$99i === S_ATTR) {
          if (C$99i === S_ATTR && (C$99n.warning('attribute value must after "="'), C$99s = C$99e.slice(C$99t, C$99c)), !(0 < (C$99c = C$99e.indexOf(C$99o, C$99t = C$99c + 1)))) throw new Error("attribute value no end '" + C$99o + "' match");C$99u = C$99e.slice(C$99t, C$99c).replace(/&#?\w+;/g, C$99a), C$99r.add(C$99s, C$99u, C$99t - 1), C$99i = S_ATTR_END;
        } else {
          if (C$99i != S_ATTR_NOQUOT_VALUE) throw new Error('attribute value must after "="');C$99u = C$99e.slice(C$99t, C$99c).replace(/&#?\w+;/g, C$99a), C$99r.add(C$99s, C$99u, C$99t), C$99n.warning('attribute "' + C$99s + '" missed start quot(' + C$99o + ")!!"), C$99t = C$99c + 1, C$99i = S_ATTR_END;
        }break;case "/":
        switch (C$99i) {case S_TAG:
            C$99r.setTagName(C$99e.slice(C$99t, C$99c));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            C$99i = S_TAG_CLOSE, C$99r.closed = !0;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:
            break;default:
            throw new Error("attribute invalid close char('/')");}break;case "":
        return C$99n.error("unexpected end of input"), C$99i == S_TAG && C$99r.setTagName(C$99e.slice(C$99t, C$99c)), C$99c;case ">":
        switch (C$99i) {case S_TAG:
            C$99r.setTagName(C$99e.slice(C$99t, C$99c));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:
            "/" === (C$99u = C$99e.slice(C$99t, C$99c)).slice(-1) && (C$99r.closed = !0, C$99u = C$99u.slice(0, -1));case S_ATTR_SPACE:
            C$99i === S_ATTR_SPACE && (C$99u = C$99s), C$99i == S_ATTR_NOQUOT_VALUE ? (C$99n.warning('attribute "' + C$99u + '" missed quot(")!!'), C$99r.add(C$99s, C$99u.replace(/&#?\w+;/g, C$99a), C$99t)) : ("http://www.w3.org/1999/xhtml" === C$99l[""] && C$99u.match(/^(?:disabled|checked|selected)$/i) || C$99n.warning('attribute "' + C$99u + '" missed value!! "' + C$99u + '" instead!!'), C$99r.add(C$99u, C$99u, C$99t));break;case S_EQ:
            throw new Error("attribute value missed!!");}return C$99c;case "\x80":
        C$99o = " ";default:
        if (C$99o <= " ") switch (C$99i) {case S_TAG:
            C$99r.setTagName(C$99e.slice(C$99t, C$99c)), C$99i = S_TAG_SPACE;break;case S_ATTR:
            C$99s = C$99e.slice(C$99t, C$99c), C$99i = S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:
            var C$99u = C$99e.slice(C$99t, C$99c).replace(/&#?\w+;/g, C$99a);C$99n.warning('attribute "' + C$99u + '" missed quot(")!!'), C$99r.add(C$99s, C$99u, C$99t);case S_ATTR_END:
            C$99i = S_TAG_SPACE;} else switch (C$99i) {case S_ATTR_SPACE:
            C$99r.tagName, "http://www.w3.org/1999/xhtml" === C$99l[""] && C$99s.match(/^(?:disabled|checked|selected)$/i) || C$99n.warning('attribute "' + C$99s + '" missed value!! "' + C$99s + '" instead2!!'), C$99r.add(C$99s, C$99s, C$99t), C$99t = C$99c, C$99i = S_ATTR;break;case S_ATTR_END:
            C$99n.warning('attribute space is required"' + C$99s + '"!!');case S_TAG_SPACE:
            C$99i = S_ATTR, C$99t = C$99c;break;case S_EQ:
            C$99i = S_ATTR_NOQUOT_VALUE, C$99t = C$99c;break;case S_TAG_CLOSE:
            throw new Error("elements closed character '/' and '>' must be connected to");}}C$99c++;
  }
}function appendElement(C$99e, C$99l, C$99t) {
  for (var C$99r = C$99e.tagName, C$99a = null, C$99n = C$99e.length; C$99n--;) {
    var C$99s = C$99e[C$99n],
        C$99c = C$99s.qName,
        C$99_ = C$99s.value;var C$99i;C$99c = 0 < (C$99o = C$99c.indexOf(":")) ? (C$99u = C$99s.prefix = C$99c.slice(0, C$99o), C$99i = C$99c.slice(C$99o + 1), "xmlns" === C$99u && C$99i) : (C$99u = null, "xmlns" === (C$99i = C$99c) && ""), C$99s.localName = C$99i, !1 !== C$99c && (null == C$99a && (C$99a = {}, _copy(C$99t, C$99t = {})), C$99t[C$99c] = C$99a[C$99c] = C$99_, C$99s.uri = "http://www.w3.org/2000/xmlns/", C$99l.startPrefixMapping(C$99c, C$99_));
  }for (C$99n = C$99e.length; C$99n--;) (C$99u = (C$99s = C$99e[C$99n]).prefix) && ("xml" === C$99u && (C$99s.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== C$99u && (C$99s.uri = C$99t[C$99u || ""]));var C$99o;C$99i = 0 < (C$99o = C$99r.indexOf(":")) ? (C$99u = C$99e.prefix = C$99r.slice(0, C$99o), C$99e.localName = C$99r.slice(C$99o + 1)) : (C$99u = null, C$99e.localName = C$99r);var C$99m = C$99e.uri = C$99t[C$99u || ""];if (C$99l.startElement(C$99m, C$99i, C$99r, C$99e), !C$99e.closed) return C$99e.currentNSMap = C$99t, C$99e.localNSMap = C$99a, !0;if (C$99l.endElement(C$99m, C$99i, C$99r), C$99a) for (var C$99u in C$99a) C$99l.endPrefixMapping(C$99u);
}function parseHtmlSpecialContent(C$99e, C$99t, C$99r, C$99a, C$99n) {
  if (/^(?:script|textarea)$/i.test(C$99r)) {
    var C$99s = C$99e.indexOf("</" + C$99r + ">", C$99t),
        C$99e = C$99e.substring(C$99t + 1, C$99s);if (/[&<]/.test(C$99e)) return (/^script$/i.test(C$99r) || (C$99e = C$99e.replace(/&#?\w+;/g, C$99a)), C$99n.characters(C$99e, 0, C$99e.length), C$99s
    );
  }return C$99t + 1;
}function fixSelfClosed(C$99e, C$99t, C$99r, C$99a) {
  var C$99n = C$99a[C$99r];return null == C$99n && ((C$99n = C$99e.lastIndexOf("</" + C$99r + ">")) < C$99t && (C$99n = C$99e.lastIndexOf("</" + C$99r)), C$99a[C$99r] = C$99n), C$99n < C$99t;
}function _copy(C$99e, C$99t) {
  for (var C$99r in C$99e) C$99t[C$99r] = C$99e[C$99r];
}function parseDCC(C$99e, C$99t, C$99r, C$99a) {
  var C$99n = C$99e.charAt(C$99t + 2);if ("-" === C$99n) return "-" !== C$99e.charAt(C$99t + 3) ? -1 : C$99t < (C$99s = C$99e.indexOf("--\x3e", C$99t + 4)) ? (C$99r.comment(C$99e, C$99t + 4, C$99s - C$99t - 4), C$99s + 3) : (C$99a.error("Unclosed comment"), -1);if ("CDATA[" == C$99e.substr(C$99t + 3, 6)) return C$99s = C$99e.indexOf("]]>", C$99t + 9), C$99r.startCDATA(), C$99r.characters(C$99e, C$99t + 9, C$99s - C$99t - 9), C$99r.endCDATA(), C$99s + 3;C$99n = split(C$99e, C$99t), C$99a = C$99n.length;var C$99s;return 1 < C$99a && /!doctype/i.test(C$99n[0][0]) ? (C$99s = C$99n[1][0], C$99e = 3 < C$99a && /^public$/i.test(C$99n[2][0]) && C$99n[3][0], C$99t = 4 < C$99a && C$99n[4][0], C$99n = C$99n[C$99a - 1], C$99r.startDTD(C$99s, C$99e && C$99e.replace(/^(['"])(.*?)\1$/, "$2"), C$99t && C$99t.replace(/^(['"])(.*?)\1$/, "$2")), C$99r.endDTD(), C$99n.index + C$99n[0].length) : -1;
}function parseInstruction(C$99e, C$99t, C$99r) {
  var C$99a = C$99e.indexOf("?>", C$99t);return C$99a && (C$99e = C$99e.substring(C$99t, C$99a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (C$99e[0].length, C$99r.processingInstruction(C$99e[1], C$99e[2]), C$99a + 2) : -1;
}function ElementAttributes() {}function _set_proto_(C$99e, C$99t) {
  return C$99e.__proto__ = C$99t, C$99e;
}function split(C$99e, C$99t) {
  var C$99r,
      C$99a = [],
      C$99n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (C$99n.lastIndex = C$99t, C$99n.exec(C$99e); C$99r = C$99n.exec(C$99e);) if (C$99a.push(C$99r), C$99r[1]) return C$99a;
}var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
    tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$"),
    S_TAG = 0,
    S_ATTR = 1,
    S_ATTR_SPACE = 2,
    S_EQ = 3,
    S_ATTR_NOQUOT_VALUE = 4,
    S_ATTR_END = 5,
    S_TAG_SPACE = 6,
    S_TAG_CLOSE = 7;XMLReader.prototype = { parse: function (C$99e, C$99t, C$99r) {
    var C$99a = this.domBuilder;C$99a.startDocument(), _copy(C$99t, C$99t = {}), parse(C$99e, C$99t, C$99r, C$99a, this.errorHandler), C$99a.endDocument();
  } }, ElementAttributes.prototype = { setTagName: function (C$99e) {
    if (!tagNamePattern.test(C$99e)) throw new Error("invalid tagName:" + C$99e);this.tagName = C$99e;
  }, add: function (C$99e, C$99t, C$99r) {
    if (!tagNamePattern.test(C$99e)) throw new Error("invalid attribute:" + C$99e);this[this.length++] = { qName: C$99e, value: C$99t, offset: C$99r };
  }, length: 0, getLocalName: function (C$99e) {
    return this[C$99e].localName;
  }, getLocator: function (C$99e) {
    return this[C$99e].locator;
  }, getQName: function (C$99e) {
    return this[C$99e].qName;
  }, getURI: function (C$99e) {
    return this[C$99e].uri;
  }, getValue: function (C$99e) {
    return this[C$99e].value;
  } }, _set_proto_({}, _set_proto_.prototype) instanceof _set_proto_ || (_set_proto_ = function (C$99e, C$99t) {
  function r() {}for (C$99t in r.prototype = C$99t, r = new r(), C$99e) r[C$99t] = C$99e[C$99t];return r;
}), exports.XMLReader = XMLReader;