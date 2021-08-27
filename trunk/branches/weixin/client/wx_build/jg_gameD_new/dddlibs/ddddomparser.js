function DOMParser(t) {
  this.options = t || { locator: {} };
}function buildErrorHandler(o, t, i) {
  function r(e) {
    var n = o[e];!n && c && (n = 2 == o.length ? function (t) {
      o(e, t);
    } : o), a[e] = n ? function (t) {
      n("[xmldom " + e + "]\t" + t + _locator(i));
    } : function () {};
  }if (!o) {
    if (t instanceof DOMHandler) return t;o = t;
  }var a = {},
      c = o instanceof Function;return i = i || {}, r("warning"), r("error"), r("fatalError"), a;
}function DOMHandler() {
  this.cdata = !1;
}function position(t, e) {
  e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
}function _locator(t) {
  return t ? "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]" : void 0;
}function _toString(t, e, n) {
  return "string" == typeof t ? t.substr(e, n) : t.length >= e + n || e ? new java.lang.String(t, e, n) + "" : t;
}function appendElement(t, e) {
  (t.currentElement || t.doc).appendChild(e);
}DOMParser.prototype.parseFromString = function (t, e) {
  var n = this.options,
      r = new XMLReader(),
      o = n.domBuilder || new DOMHandler(),
      i = n.errorHandler,
      a = n.locator,
      c = n.xmlns || {},
      l = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };return a && o.setDocumentLocator(a), r.errorHandler = buildErrorHandler(i, o, a), r.domBuilder = n.domBuilder || o, /\/x?html?$/.test(e) && (l.nbsp = "\xa0", l.copy = "\xa9", c[""] = "http://www.w3.org/1999/xhtml"), c.xml = c.xml || "http://www.w3.org/XML/1998/namespace", t ? r.parse(t, c, l) : r.errorHandler.error("invalid doc source"), o.doc;
}, DOMHandler.prototype = { startDocument: function () {
    this.doc = new DOMImplementation().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  }, startElement: function (t, e, n, r) {
    var o = this.doc,
        i = o.createElementNS(t, n || e),
        a = r.length;appendElement(this, i), this.currentElement = i, this.locator && position(this.locator, i);for (var c = 0; c < a; c++) {
      var t = r.getURI(c),
          l = r.getValue(c),
          n = r.getQName(c),
          s = o.createAttributeNS(t, n);this.locator && position(r.getLocator(c), s), s.value = s.nodeValue = l, i.setAttributeNode(s);
    }
  }, endElement: function () {
    var t = this.currentElement;t.tagName, this.currentElement = t.parentNode;
  }, startPrefixMapping: function () {}, endPrefixMapping: function () {}, processingInstruction: function (t, e) {
    e = this.doc.createProcessingInstruction(t, e);this.locator && position(this.locator, e), appendElement(this, e);
  }, ignorableWhitespace: function () {}, characters: function (t) {
    var e;(t = _toString.apply(this, arguments)) && (e = this.cdata ? this.doc.createCDATASection(t) : this.doc.createTextNode(t), this.currentElement ? this.currentElement.appendChild(e) : /^\s*$/.test(t) && this.doc.appendChild(e), this.locator && position(this.locator, e));
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
    var r = this.doc.implementation;r && r.createDocumentType && (n = r.createDocumentType(t, e, n), this.locator && position(this.locator, n), appendElement(this, n));
  }, warning: function (t) {
    console.warn("[xmldom warning]\t" + t, _locator(this.locator));
  }, error: function (t) {
    console.error("[xmldom error]\t" + t, _locator(this.locator));
  }, fatalError: function (t) {
    throw console.error("[xmldom fatalError]\t" + t, _locator(this.locator)), t;
  } }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (t) {
  DOMHandler.prototype[t] = function () {
    return null;
  };
});var XMLReader = require("./dddsax").XMLReader,
    DOMImplementation = exports.DOMImplementation = require("./ddddom").DOMImplementation;exports.XMLSerializer = require("./ddddom").XMLSerializer, exports.DOMParser = DOMParser;