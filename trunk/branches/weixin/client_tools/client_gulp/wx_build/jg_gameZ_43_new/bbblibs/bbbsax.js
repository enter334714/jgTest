function XMLReader() {}function parse(r, p, d, a, n) {
  function c(e) {
    var t = e.slice(1, -1);return t in d ? d[t] : "#" === t.charAt(0) ? 65535 < (t = parseInt(t.substr(1).replace("x", "0x"))) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : String.fromCharCode(t) : (n.error("entity not found:" + e), e);
  }function i(e) {
    var t;u < e && (t = r.substring(u, e).replace(/&#?\w+;/g, c), s && o(u), a.characters(t, 0, e - u), u = e);
  }function o(e, t) {
    for (; f <= e && (t = S.exec(r));) T = t.index, f = T + t[0].length, s.lineNumber++;s.columnNumber = e - T + 1;
  }for (var T = 0, f = 0, S = /.*(?:\r\n?|\n)|.*$/g, s = a.locator, A = [{ currentNSMap: p }], h = {}, u = 0;;) {
    try {
      var e = r.indexOf("<", u);var g, E;if (e < 0) return void (r.substr(u).match(/^\s*$/) || (E = (g = a.doc).createTextNode(r.substr(u)), g.appendChild(E), a.currentElement = E));switch (u < e && i(e), r.charAt(e + 1)) {case "/":
          var t = r.indexOf(">", e + 3),
              l = r.substring(e + 2, t),
              _ = A.pop();t < 0 ? (l = r.substring(e + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + l + " is not complete:" + _.tagName), t = e + 1 + l.length) : l.match(/\s</) && (l = l.replace(/[\s<].*/, ""), n.error("end tag name: " + l + " maybe not complete"), t = e + 1 + l.length);var w = _.localNSMap,
              N = _.tagName == l;if (N || _.tagName && _.tagName.toLowerCase() == l.toLowerCase()) {
            if (a.endElement(_.uri, _.localName, l), w) for (var b in w) a.endPrefixMapping(b);N || n.fatalError("end tag name: " + l + " is not match the current start tagName:" + _.tagName);
          } else A.push(_);t++;break;case "?":
          s && o(e), t = parseInstruction(r, e, a);break;case "!":
          s && o(e), t = parseDCC(r, e, a, n);break;default:
          s && o(e);var m = new ElementAttributes(),
              x = A[A.length - 1].currentNSMap,
              t = parseElementStartPart(r, e, m, x, c, n),
              C = m.length;if (!m.closed && fixSelfClosed(r, t, m.tagName, h) && (m.closed = !0, d.nbsp || n.warning("unclosed xml attribute")), s && C) {
            for (var v = copyLocator(s, {}), R = 0; R < C; R++) {
              var O = m[R];o(O.offset), O.locator = copyLocator(s, {});
            }a.locator = v, appendElement(m, a, x) && A.push(m), a.locator = s;
          } else appendElement(m, a, x) && A.push(m);"http://www.w3.org/1999/xhtml" !== m.uri || m.closed ? t++ : t = parseHtmlSpecialContent(r, t, m.tagName, c, a);}
    } catch (e) {
      n.error("element parse error: " + e), t = -1;
    }u < t ? u = t : i(Math.max(e, u) + 1);
  }
}function copyLocator(e, t) {
  return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}function parseElementStartPart(e, t, r, l, a, n) {
  for (var s, c = ++t, i = S_TAG;;) {
    var o = e.charAt(c);switch (o) {case "=":
        if (i === S_ATTR) s = e.slice(t, c), i = S_EQ;else {
          if (i !== S_ATTR_SPACE) throw new Error("attribute equal must after attrName");i = S_EQ;
        }break;case "'":case '"':
        if (i === S_EQ || i === S_ATTR) {
          if (i === S_ATTR && (n.warning('attribute value must after "="'), s = e.slice(t, c)), !(0 < (c = e.indexOf(o, t = c + 1)))) throw new Error("attribute value no end '" + o + "' match");u = e.slice(t, c).replace(/&#?\w+;/g, a), r.add(s, u, t - 1), i = S_ATTR_END;
        } else {
          if (i != S_ATTR_NOQUOT_VALUE) throw new Error('attribute value must after "="');u = e.slice(t, c).replace(/&#?\w+;/g, a), r.add(s, u, t), n.warning('attribute "' + s + '" missed start quot(' + o + ")!!"), t = c + 1, i = S_ATTR_END;
        }break;case "/":
        switch (i) {case S_TAG:
            r.setTagName(e.slice(t, c));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            i = S_TAG_CLOSE, r.closed = !0;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:
            break;default:
            throw new Error("attribute invalid close char('/')");}break;case "":
        return n.error("unexpected end of input"), i == S_TAG && r.setTagName(e.slice(t, c)), c;case ">":
        switch (i) {case S_TAG:
            r.setTagName(e.slice(t, c));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:
            "/" === (u = e.slice(t, c)).slice(-1) && (r.closed = !0, u = u.slice(0, -1));case S_ATTR_SPACE:
            i === S_ATTR_SPACE && (u = s), i == S_ATTR_NOQUOT_VALUE ? (n.warning('attribute "' + u + '" missed quot(")!!'), r.add(s, u.replace(/&#?\w+;/g, a), t)) : ("http://www.w3.org/1999/xhtml" === l[""] && u.match(/^(?:disabled|checked|selected)$/i) || n.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'), r.add(u, u, t));break;case S_EQ:
            throw new Error("attribute value missed!!");}return c;case "\x80":
        o = " ";default:
        if (o <= " ") switch (i) {case S_TAG:
            r.setTagName(e.slice(t, c)), i = S_TAG_SPACE;break;case S_ATTR:
            s = e.slice(t, c), i = S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:
            var u = e.slice(t, c).replace(/&#?\w+;/g, a);n.warning('attribute "' + u + '" missed quot(")!!'), r.add(s, u, t);case S_ATTR_END:
            i = S_TAG_SPACE;} else switch (i) {case S_ATTR_SPACE:
            r.tagName, "http://www.w3.org/1999/xhtml" === l[""] && s.match(/^(?:disabled|checked|selected)$/i) || n.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'), r.add(s, s, t), t = c, i = S_ATTR;break;case S_ATTR_END:
            n.warning('attribute space is required"' + s + '"!!');case S_TAG_SPACE:
            i = S_ATTR, t = c;break;case S_EQ:
            i = S_ATTR_NOQUOT_VALUE, t = c;break;case S_TAG_CLOSE:
            throw new Error("elements closed character '/' and '>' must be connected to");}}c++;
  }
}function appendElement(e, l, t) {
  for (var r = e.tagName, a = null, n = e.length; n--;) {
    var s = e[n],
        c = s.qName,
        _ = s.value;var i;c = 0 < (o = c.indexOf(":")) ? (u = s.prefix = c.slice(0, o), i = c.slice(o + 1), "xmlns" === u && i) : (u = null, "xmlns" === (i = c) && ""), s.localName = i, !1 !== c && (null == a && (a = {}, _copy(t, t = {})), t[c] = a[c] = _, s.uri = "http://www.w3.org/2000/xmlns/", l.startPrefixMapping(c, _));
  }for (n = e.length; n--;) (u = (s = e[n]).prefix) && ("xml" === u && (s.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== u && (s.uri = t[u || ""]));var o;i = 0 < (o = r.indexOf(":")) ? (u = e.prefix = r.slice(0, o), e.localName = r.slice(o + 1)) : (u = null, e.localName = r);var m = e.uri = t[u || ""];if (l.startElement(m, i, r, e), !e.closed) return e.currentNSMap = t, e.localNSMap = a, !0;if (l.endElement(m, i, r), a) for (var u in a) l.endPrefixMapping(u);
}function parseHtmlSpecialContent(e, t, r, a, n) {
  if (/^(?:script|textarea)$/i.test(r)) {
    var s = e.indexOf("</" + r + ">", t),
        e = e.substring(t + 1, s);if (/[&<]/.test(e)) return (/^script$/i.test(r) || (e = e.replace(/&#?\w+;/g, a)), n.characters(e, 0, e.length), s
    );
  }return t + 1;
}function fixSelfClosed(e, t, r, a) {
  var n = a[r];return null == n && ((n = e.lastIndexOf("</" + r + ">")) < t && (n = e.lastIndexOf("</" + r)), a[r] = n), n < t;
}function _copy(e, t) {
  for (var r in e) t[r] = e[r];
}function parseDCC(e, t, r, a) {
  var n = e.charAt(t + 2);if ("-" === n) return "-" !== e.charAt(t + 3) ? -1 : t < (s = e.indexOf("--\x3e", t + 4)) ? (r.comment(e, t + 4, s - t - 4), s + 3) : (a.error("Unclosed comment"), -1);if ("CDATA[" == e.substr(t + 3, 6)) return s = e.indexOf("]]>", t + 9), r.startCDATA(), r.characters(e, t + 9, s - t - 9), r.endCDATA(), s + 3;n = split(e, t), a = n.length;var s;return 1 < a && /!doctype/i.test(n[0][0]) ? (s = n[1][0], e = 3 < a && /^public$/i.test(n[2][0]) && n[3][0], t = 4 < a && n[4][0], n = n[a - 1], r.startDTD(s, e && e.replace(/^(['"])(.*?)\1$/, "$2"), t && t.replace(/^(['"])(.*?)\1$/, "$2")), r.endDTD(), n.index + n[0].length) : -1;
}function parseInstruction(e, t, r) {
  var a = e.indexOf("?>", t);return a && (e = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (e[0].length, r.processingInstruction(e[1], e[2]), a + 2) : -1;
}function ElementAttributes() {}function _set_proto_(e, t) {
  return e.__proto__ = t, e;
}function split(e, t) {
  var r,
      a = [],
      n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (n.lastIndex = t, n.exec(e); r = n.exec(e);) if (a.push(r), r[1]) return a;
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
    S_TAG_CLOSE = 7;XMLReader.prototype = { parse: function (e, t, r) {
    var a = this.domBuilder;a.startDocument(), _copy(t, t = {}), parse(e, t, r, a, this.errorHandler), a.endDocument();
  } }, ElementAttributes.prototype = { setTagName: function (e) {
    if (!tagNamePattern.test(e)) throw new Error("invalid tagName:" + e);this.tagName = e;
  }, add: function (e, t, r) {
    if (!tagNamePattern.test(e)) throw new Error("invalid attribute:" + e);this[this.length++] = { qName: e, value: t, offset: r };
  }, length: 0, getLocalName: function (e) {
    return this[e].localName;
  }, getLocator: function (e) {
    return this[e].locator;
  }, getQName: function (e) {
    return this[e].qName;
  }, getURI: function (e) {
    return this[e].uri;
  }, getValue: function (e) {
    return this[e].value;
  } }, _set_proto_({}, _set_proto_.prototype) instanceof _set_proto_ || (_set_proto_ = function (e, t) {
  function r() {}for (t in r.prototype = t, r = new r(), e) r[t] = e[t];return r;
}), exports.XMLReader = XMLReader;