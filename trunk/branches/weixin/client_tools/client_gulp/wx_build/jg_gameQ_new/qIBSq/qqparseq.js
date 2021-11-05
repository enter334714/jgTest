function DOMParser(t) {
  this.options = t || { locator: {} };
}function buildErrorHandler(t, e, n) {
  function r(e) {
    var r = t[e];!r && i && (r = 2 == t.length ? function (n) {
      t(e, n);
    } : t), o[e] = r && function (t) {
      r("[xmldom " + e + "]	" + t + _locator(n));
    } || function () {};
  }if (!t) {
    if (e instanceof DOMHandler) return e;t = e;
  }var o = {},
      i = t instanceof Function;return n = n || {}, r("warning"), r("error"), r("fatalError"), o;
}function DOMHandler() {
  this.cdata = !1;
}function position(t, e) {
  e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
}function _locator(t) {
  return t ? "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]" : void 0;
}function _toString(t, e, n) {
  return "string" == typeof t ? t.substr(e, n) : t.length >= e + n || e ? new java.lang.String(t, e, n) + "" : t;
}function appendElement(t, e) {
  t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}DOMParser.prototype.parseFromString = function (t, e) {
  var n = this.options,
      r = new XMLReader(),
      o = n.domBuilder || new DOMHandler(),
      i = n.errorHandler,
      a = n.locator,
      c = n.xmlns || {},
      l = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };return a && o.setDocumentLocator(a), r.errorHandler = buildErrorHandler(i, o, a), r.domBuilder = n.domBuilder || o, /\/x?html?$/.test(e) && (l.nbsp = " ", l.copy = "©", c[""] = "http://www.w3.org/1999/xhtml"), c.xml = c.xml || "http://www.w3.org/XML/1998/namespace", t ? r.parse(t, c, l) : r.errorHandler.error("invalid doc source"), o.doc;
}, DOMHandler.prototype = { startDocument: function () {
    this.doc = new DOMImplementation().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  }, startElement: function (t, e, n, r) {
    var o = this.doc,
        i = o.createElementNS(t, n || e),
        a = r.length;appendElement(this, i), this.currentElement = i, this.locator && position(this.locator, i);for (var c = 0; a > c; c++) {
      var t = r.getURI(c),
          l = r.getValue(c),
          n = r.getQName(c),
          s = o.createAttributeNS(t, n);this.locator && position(r.getLocator(c), s), s.value = s.nodeValue = l, i.setAttributeNode(s);
    }
  }, endElement: function () {
    {
      var t = this.currentElement;t.tagName;
    }this.currentElement = t.parentNode;
  }, startPrefixMapping: function () {}, endPrefixMapping: function () {}, processingInstruction: function (t, e) {
    var n = this.doc.createProcessingInstruction(t, e);this.locator && position(this.locator, n), appendElement(this, n);
  }, ignorableWhitespace: function () {}, characters: function (t) {
    if (t = _toString.apply(this, arguments)) {
      if (this.cdata) var e = this.doc.createCDATASection(t);else var e = this.doc.createTextNode(t);this.currentElement ? this.currentElement.appendChild(e) : /^\s*$/.test(t) && this.doc.appendChild(e), this.locator && position(this.locator, e);
    }
  }, skippedEntity: function () {}, endDocument: function () {
    this.doc.normalize();
  }, setDocumentLocator: function (t) {
    (this.locator = t) && (t.lineNumber = 0);
  }, comment: function (t) {
    t = _toString.apply(this, arguments);var e = this.doc.createComment(t);this.locator && position(this.locator, e), appendElement(this, e);
  }, startCDATA: function () {
    this.cdata = !0;
  }, endCDATA: function () {
    this.cdata = !1;
  }, startDTD: function (t, e, n) {
    var r = this.doc.implementation;if (r && r.createDocumentType) {
      var o = r.createDocumentType(t, e, n);this.locator && position(this.locator, o), appendElement(this, o);
    }
  }, warning: function (t) {
    console.warn("[xmldom warning]	" + t, _locator(this.locator));
  }, error: function (t) {
    console.error("[xmldom error]	" + t, _locator(this.locator));
  }, fatalError: function (t) {
    throw console.error("[xmldom fatalError]	" + t, _locator(this.locator)), t;
  } }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (t) {
  DOMHandler.prototype[t] = function () {
    return null;
  };
});var XMLReader = require("./qS12q").XMLReader,
    DOMImplementation = exports.DOMImplementation = require("./qqDOMq").DOMImplementation;exports.XMLSerializer = require("./qqDOMq").XMLSerializer, exports.DOMParser = DOMParser;