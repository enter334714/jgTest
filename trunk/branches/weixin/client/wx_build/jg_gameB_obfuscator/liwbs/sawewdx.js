var $c = wx.$b;
function XMLReader() {}function parse(e, t, r, a, n) {
  function s(e) {
    if (e > 65535) {
      e -= 65536;var t = 55296 + (e >> 10),
          r = 56320 + (1023 & e);return String.fromCharCode(t, r);
    }return String.fromCharCode(e);
  }function c(e) {
    var t = e.slice(1, -1);return t in r ? r[t] : $c[5986] === t.charAt(0) ? s(parseInt(t.substr(1).replace($c[5987], $c[5988]))) : (n.error($c[5989] + e), e);
  }function i(t) {
    if (t > p) {
      var r = e.substring(p, t).replace(/&#?\w+;/g, c);m && o(p), a.characters(r, 0, t - p), p = t;
    }
  }function o(t, r) {
    for (; t >= l && (r = _.exec(e));) u = r.index, l = u + r[0].length, m.lineNumber++;m.columnNumber = t - u + 1;
  }for (var u = 0, l = 0, _ = /.*(?:\r\n?|\n)|.*$/g, m = a.locator, f = [{ currentNSMap: t }], d = {}, p = 0;;) {
    try {
      var T = e.indexOf($c[5990], p);if (0 > T) {
        if (!e.substr(p).match(/^\s*$/)) {
          var S = a.doc,
              h = S.createTextNode(e.substr(p));S.appendChild(h), a.currentElement = h;
        }return;
      }switch (T > p && i(T), e.charAt(T + 1)) {case $c[5991]:
          var A = e.indexOf($c[5992], T + 3),
              g = e.substring(T + 2, A),
              w = f.pop();0 > A ? (g = e.substring(T + 2).replace(/[\s<].*/, ""), n.error($c[5993] + g + $c[5994] + w.tagName), A = T + 1 + g.length) : g.match(/\s</) && (g = g.replace(/[\s<].*/, ""), n.error($c[5995] + g + $c[5996]), A = T + 1 + g.length);var E = w.localNSMap,
              N = w.tagName == g,
              b = N || w.tagName && w.tagName.toLowerCase() == g.toLowerCase();if (b) {
            if (a.endElement(w.uri, w.localName, g), E) for (var v in E) a.endPrefixMapping(v);N || n.fatalError($c[5997] + g + $c[5998] + w.tagName);
          } else f.push(w);A++;break;case $c[5999]:
          m && o(T), A = parseInstruction(e, T, a);break;case $c[6000]:
          m && o(T), A = parseDCC(e, T, a, n);break;default:
          m && o(T);var x = new ElementAttributes(),
              C = f[f.length - 1].currentNSMap,
              A = parseElementStartPart(e, T, x, C, c, n),
              R = x.length;if (!x.closed && fixSelfClosed(e, A, x.tagName, d) && (x.closed = !0, r.nbsp || n.warning($c[6001])), m && R) {
            for (var O = copyLocator(m, {}), D = 0; R > D; D++) {
              var L = x[D];o(L.offset), L.locator = copyLocator(m, {});
            }a.locator = O, appendElement(x, a, C) && f.push(x), a.locator = m;
          } else appendElement(x, a, C) && f.push(x);$c[6002] !== x.uri || x.closed ? A++ : A = parseHtmlSpecialContent(e, A, x.tagName, c, a);}
    } catch (F) {
      n.error($c[6003] + F), A = -1;
    }A > p ? p = A : i(Math.max(T, p) + 1);
  }
}function copyLocator(e, t) {
  return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}function parseElementStartPart(e, t, r, a, n, s) {
  for (var c, i, o = ++t, u = S_TAG;;) {
    var l = e.charAt(o);switch (l) {case $c[6004]:
        if (u === S_ATTR) c = e.slice(t, o), u = S_EQ;else {
          if (u !== S_ATTR_SPACE) throw new Error($c[6005]);u = S_EQ;
        }break;case $c[6006]:case $c[6007]:
        if (u === S_EQ || u === S_ATTR) {
          if (u === S_ATTR && (s.warning($c[6008]), c = e.slice(t, o)), t = o + 1, o = e.indexOf(l, t), !(o > 0)) throw new Error($c[6009] + l + $c[6010]);i = e.slice(t, o).replace(/&#?\w+;/g, n), r.add(c, i, t - 1), u = S_ATTR_END;
        } else {
          if (u != S_ATTR_NOQUOT_VALUE) throw new Error($c[6011]);i = e.slice(t, o).replace(/&#?\w+;/g, n), r.add(c, i, t), s.warning($c[6012] + c + $c[6013] + l + $c[6014]), t = o + 1, u = S_ATTR_END;
        }break;case $c[6015]:
        switch (u) {case S_TAG:
            r.setTagName(e.slice(t, o));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            u = S_TAG_CLOSE, r.closed = !0;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:
            break;default:
            throw new Error($c[6016]);}break;case "":
        return s.error($c[6017]), u == S_TAG && r.setTagName(e.slice(t, o)), o;case $c[6018]:
        switch (u) {case S_TAG:
            r.setTagName(e.slice(t, o));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
            break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:
            i = e.slice(t, o), $c[6019] === i.slice(-1) && (r.closed = !0, i = i.slice(0, -1));case S_ATTR_SPACE:
            u === S_ATTR_SPACE && (i = c), u == S_ATTR_NOQUOT_VALUE ? (s.warning($c[6020] + i + $c[6021]), r.add(c, i.replace(/&#?\w+;/g, n), t)) : ($c[6022] === a[""] && i.match(/^(?:disabled|checked|selected)$/i) || s.warning($c[6023] + i + $c[6024] + i + $c[6025]), r.add(i, i, t));break;case S_EQ:
            throw new Error($c[6026]);}return o;case $c[6027]:
        l = $c[6028];default:
        if ($c[6029] >= l) switch (u) {case S_TAG:
            r.setTagName(e.slice(t, o)), u = S_TAG_SPACE;break;case S_ATTR:
            c = e.slice(t, o), u = S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:
            var i = e.slice(t, o).replace(/&#?\w+;/g, n);s.warning($c[6030] + i + $c[6031]), r.add(c, i, t);case S_ATTR_END:
            u = S_TAG_SPACE;} else switch (u) {case S_ATTR_SPACE:
            {
              r.tagName;
            }$c[6032] === a[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning($c[6033] + c + $c[6034] + c + $c[6035]), r.add(c, c, t), t = o, u = S_ATTR;break;case S_ATTR_END:
            s.warning($c[6036] + c + $c[6037]);case S_TAG_SPACE:
            u = S_ATTR, t = o;break;case S_EQ:
            u = S_ATTR_NOQUOT_VALUE, t = o;break;case S_TAG_CLOSE:
            throw new Error($c[6038]);}}o++;
  }
}function appendElement(e, t, r) {
  for (var a = e.tagName, n = null, s = e.length; s--;) {
    var c = e[s],
        i = c.qName,
        o = c.value,
        u = i.indexOf($c[6039]);if (u > 0) var l = c.prefix = i.slice(0, u),
        _ = i.slice(u + 1),
        m = $c[6040] === l && _;else _ = i, l = null, m = $c[6041] === i && "";c.localName = _, m !== !1 && (null == n && (n = {}, _copy(r, r = {})), r[m] = n[m] = o, c.uri = $c[6042], t.startPrefixMapping(m, o));
  }for (var s = e.length; s--;) {
    c = e[s];var l = c.prefix;l && ($c[6043] === l && (c.uri = $c[6044]), $c[6045] !== l && (c.uri = r[l || ""]));
  }var u = a.indexOf($c[6046]);u > 0 ? (l = e.prefix = a.slice(0, u), _ = e.localName = a.slice(u + 1)) : (l = null, _ = e.localName = a);var f = e.uri = r[l || ""];if (t.startElement(f, _, a, e), !e.closed) return e.currentNSMap = r, e.localNSMap = n, !0;if (t.endElement(f, _, a), n) for (l in n) t.endPrefixMapping(l);
}function parseHtmlSpecialContent(e, t, r, a, n) {
  if (/^(?:script|textarea)$/i.test(r)) {
    var s = e.indexOf($c[6047] + r + $c[6048], t),
        c = e.substring(t + 1, s);if (/[&<]/.test(c)) return (/^script$/i.test(r) ? (n.characters(c, 0, c.length), s) : (c = c.replace(/&#?\w+;/g, a), n.characters(c, 0, c.length), s)
    );
  }return t + 1;
}function fixSelfClosed(e, t, r, a) {
  var n = a[r];return null == n && (n = e.lastIndexOf($c[6049] + r + $c[6050]), t > n && (n = e.lastIndexOf($c[6051] + r)), a[r] = n), t > n;
}function _copy(e, t) {
  for (var r in e) t[r] = e[r];
}function parseDCC(e, t, r, a) {
  var n = e.charAt(t + 2);switch (n) {case $c[6052]:
      if ($c[6053] === e.charAt(t + 3)) {
        var s = e.indexOf($c[6054], t + 4);return s > t ? (r.comment(e, t + 4, s - t - 4), s + 3) : (a.error($c[6055]), -1);
      }return -1;default:
      if ($c[6056] == e.substr(t + 3, 6)) {
        var s = e.indexOf($c[6057], t + 9);return r.startCDATA(), r.characters(e, t + 9, s - t - 9), r.endCDATA(), s + 3;
      }var c = split(e, t),
          i = c.length;if (i > 1 && /!doctype/i.test(c[0][0])) {
        var o = c[1][0],
            u = i > 3 && /^public$/i.test(c[2][0]) && c[3][0],
            l = i > 4 && c[4][0],
            _ = c[i - 1];return r.startDTD(o, u && u.replace(/^(['"])(.*?)\1$/, $c[6058]), l && l.replace(/^(['"])(.*?)\1$/, $c[6059])), r.endDTD(), _.index + _[0].length;
      }}return -1;
}function parseInstruction(e, t, r) {
  var a = e.indexOf($c[6060], t);if (a) {
    var n = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (n) {
      {
        n[0].length;
      }return r.processingInstruction(n[1], n[2]), a + 2;
    }return -1;
  }return -1;
}function ElementAttributes() {}function _set_proto_(e, t) {
  return e.__proto__ = t, e;
}function split(e, t) {
  var r,
      a = [],
      n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (n.lastIndex = t, n.exec(e); r = n.exec(e);) if (a.push(r), r[1]) return a;
}var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    nameChar = new RegExp($c[6061] + nameStartChar.source.slice(1, -1) + $c[6062]),
    tagNamePattern = new RegExp($c[6063] + nameStartChar.source + nameChar.source + $c[6064] + nameStartChar.source + nameChar.source + $c[6065]),
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
    if (!tagNamePattern.test(e)) throw new Error($c[6066] + e);this.tagName = e;
  }, add: function (e, t, r) {
    if (!tagNamePattern.test(e)) throw new Error($c[6067] + e);this[this.length++] = { qName: e, value: t, offset: r };
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
  function r() {}r.prototype = t, r = new r();for (t in e) r[t] = e[t];return r;
}), exports.XMLReader = XMLReader;