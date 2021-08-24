function XMLReader() {}function parse(r, e, a, n, s) {
  function c(e) {
    var t = e.slice(1, -1);return t in a ? a[t] : "#" === t.charAt(0) ? 65535 < (t = parseInt(t.substr(1).replace("x", "0x"))) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : String.fromCharCode(t) : (s.error("entity not found:" + e), e);
  }function i(e) {
    var t;p < e && (t = r.substring(p, e).replace(/&#?\w+;/g, c), m && o(p), n.characters(t, 0, e - p), p = e);
  }function o(e, t) {
    for (; l <= e && (t = _.exec(r));) u = t.index, l = u + t[0].length, m.lineNumber++;m.columnNumber = e - u + 1;
  }for (var u = 0, l = 0, _ = /.*(?:\r\n?|\n)|.*$/g, m = n.locator, t = [{ currentNSMap: e }], d = {}, p = 0;;) {
    try {
      var f = r.indexOf("<", p);var T, S;if (f < 0) return void (r.substr(p).match(/^\s*$/) || (S = (T = n.doc).createTextNode(r.substr(p)), T.appendChild(S), n.currentElement = S));switch (p < f && i(f), r.charAt(f + 1)) {case "/":
          var A = r.indexOf(">", f + 3),
              h = r.substring(f + 2, A),
              g = t.pop();A < 0 ? (h = r.substring(f + 2).replace(/[\s<].*/, ""), s.error("end tag name: " + h + " is not complete:" + g.tagName), A = f + 1 + h.length) : h.match(/\s</) && (h = h.replace(/[\s<].*/, ""), s.error("end tag name: " + h + " maybe not complete"), A = f + 1 + h.length);var w = g.localNSMap,
              E = g.tagName == h;if (E || g.tagName && g.tagName.toLowerCase() == h.toLowerCase()) {
            if (n.endElement(g.uri, g.localName, h), w) for (var N in w) n.endPrefixMapping(N);E || s.fatalError("end tag name: " + h + " is not match the current start tagName:" + g.tagName);
          } else t.push(g);A++;break;case "?":
          m && o(f), A = parseInstruction(r, f, n);break;case "!":
          m && o(f), A = parseDCC(r, f, n, s);break;default:
          m && o(f);var b = new ElementAttributes(),
              x = t[t.length - 1].currentNSMap,
              A = parseElementStartPart(r, f, b, x, c, s),
              C = b.length;if (!b.closed && fixSelfClosed(r, A, b.tagName, d) && (b.closed = !0, a.nbsp || s.warning("unclosed xml attribute")), m && C) {
            for (var v = copyLocator(m, {}), R = 0; R < C; R++) {
              var O = b[R];o(O.offset), O.locator = copyLocator(m, {});
            }n.locator = v, appendElement(b, n, x) && t.push(b), n.locator = m;
          } else appendElement(b, n, x) && t.push(b);"http://www.w3.org/1999/xhtml" !== b.uri || b.closed ? A++ : A = parseHtmlSpecialContent(r, A, b.tagName, c, n);}
    } catch (e) {
      s.error("element parse error: " + e), A = -1;
    }p < A ? p = A : i(Math.max(f, p) + 1);
  }
}function copyLocator(e, t) {
  return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}function parseElementStartPart(e, t, r, a, n, s) {
  for (var c, i = ++t, o = S_TAG;;) {
    var u = e.charAt(i);switch (u) {case "=":
        if (o === S_ATTR) c = e.slice(t, i), o = S_EQ;else {
          if (o !== S_ATTR_SPACE) throw new Error("attribute equal must after attrName");o = S_EQ;
        }break;case "'":case '"':
        if (o === S_EQ || o === S_ATTR) {
          if (o === S_ATTR && (s.warning('attribute value must after "="'), c = e.slice(t, i)), !(0 < (i = e.indexOf(u, t = i + 1)))) throw new Error("attribute value no end '" + u + "' match");l = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, l, t - 1), o = S_ATTR_END;
        } else {
          if (o != S_ATTR_NOQUOT_VALUE) throw new Error('attribute value must after "="');l = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, l, t), s.warning('attribute "' + c + '" missed start quot(' + u + ")!!"), t = i + 1, o = S_ATTR_END;
        }break;case "/":
        switch (o) {case S_TAG:
            r.setTagName(e.slice(t, i));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            o = S_TAG_CLOSE, r.closed = !0;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:
            break;default:
            throw new Error("attribute invalid close char('/')");}break;case "":
        return s.error("unexpected end of input"), o == S_TAG && r.setTagName(e.slice(t, i)), i;case ">":
        switch (o) {case S_TAG:
            r.setTagName(e.slice(t, i));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:
            "/" === (l = e.slice(t, i)).slice(-1) && (r.closed = !0, l = l.slice(0, -1));case S_ATTR_SPACE:
            o === S_ATTR_SPACE && (l = c), o == S_ATTR_NOQUOT_VALUE ? (s.warning('attribute "' + l + '" missed quot(")!!'), r.add(c, l.replace(/&#?\w+;/g, n), t)) : ("http://www.w3.org/1999/xhtml" === a[""] && l.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), r.add(l, l, t));break;case S_EQ:
            throw new Error("attribute value missed!!");}return i;case "\x80":
        u = " ";default:
        if (u <= " ") switch (o) {case S_TAG:
            r.setTagName(e.slice(t, i)), o = S_TAG_SPACE;break;case S_ATTR:
            c = e.slice(t, i), o = S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:
            var l = e.slice(t, i).replace(/&#?\w+;/g, n);s.warning('attribute "' + l + '" missed quot(")!!'), r.add(c, l, t);case S_ATTR_END:
            o = S_TAG_SPACE;} else switch (o) {case S_ATTR_SPACE:
            r.tagName, "http://www.w3.org/1999/xhtml" === a[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + c + '" missed value!! "' + c + '" instead2!!'), r.add(c, c, t), t = i, o = S_ATTR;break;case S_ATTR_END:
            s.warning('attribute space is required"' + c + '"!!');case S_TAG_SPACE:
            o = S_ATTR, t = i;break;case S_EQ:
            o = S_ATTR_NOQUOT_VALUE, t = i;break;case S_TAG_CLOSE:
            throw new Error("elements closed character '/' and '>' must be connected to");}}i++;
  }
}function appendElement(e, t, r) {
  for (var a = e.tagName, n = null, s = e.length; s--;) {
    var c = e[s],
        i = c.qName,
        o = c.value;var u;i = 0 < (l = i.indexOf(":")) ? (m = c.prefix = i.slice(0, l), u = i.slice(l + 1), "xmlns" === m && u) : (m = null, "xmlns" === (u = i) && ""), c.localName = u, !1 !== i && (null == n && (n = {}, _copy(r, r = {})), r[i] = n[i] = o, c.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(i, o));
  }for (s = e.length; s--;) (m = (c = e[s]).prefix) && ("xml" === m && (c.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== m && (c.uri = r[m || ""]));var l;u = 0 < (l = a.indexOf(":")) ? (m = e.prefix = a.slice(0, l), e.localName = a.slice(l + 1)) : (m = null, e.localName = a);var _ = e.uri = r[m || ""];if (t.startElement(_, u, a, e), !e.closed) return e.currentNSMap = r, e.localNSMap = n, !0;if (t.endElement(_, u, a), n) for (var m in n) t.endPrefixMapping(m);
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
  var n = e.charAt(t + 2);if ("-" === n) return "-" !== e.charAt(t + 3) ? -1 : t < (s = e.indexOf("--\x3e", t + 4)) ? (r.comment(e, t + 4, s - t - 4), s + 3) : (a.error("Unclosed comment"), -1);if ("CDATA[" == e.substr(t + 3, 6)) {
    var s = e.indexOf("]]>", t + 9);return r.startCDATA(), r.characters(e, t + 9, s - t - 9), r.endCDATA(), s + 3;
  }n = split(e, t), a = n.length;if (1 < a && /!doctype/i.test(n[0][0])) {
    s = n[1][0], e = 3 < a && /^public$/i.test(n[2][0]) && n[3][0], t = 4 < a && n[4][0], a = n[a - 1];return r.startDTD(s, e && e.replace(/^(['"])(.*?)\1$/, "$2"), t && t.replace(/^(['"])(.*?)\1$/, "$2")), r.endDTD(), a.index + a[0].length;
  }return -1;
}function parseInstruction(e, t, r) {
  var a = e.indexOf("?>", t);if (a) {
    t = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return t ? (t[0].length, r.processingInstruction(t[1], t[2]), a + 2) : -1;
  }return -1;
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