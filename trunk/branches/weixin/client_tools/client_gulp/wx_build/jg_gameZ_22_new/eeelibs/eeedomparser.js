function DOMParser(C$99t) {
  this.options = C$99t || { locator: {} };
}function buildErrorHandler(C$99r, C$99t, C$99o) {
  function r(C$99e) {
    var C$99n = C$99r[C$99e];!C$99n && C$99a && (C$99n = 2 == C$99r.length ? function (C$99t) {
      C$99r(C$99e, C$99t);
    } : C$99r), C$99i[C$99e] = C$99n ? function (C$99t) {
      C$99n("[xmldom " + C$99e + "]\t" + C$99t + _locator(C$99o));
    } : function () {};
  }if (!C$99r) {
    if (C$99t instanceof DOMHandler) return C$99t;C$99r = C$99t;
  }var C$99i = {},
      C$99a = C$99r instanceof Function;return C$99o = C$99o || {}, r("warning"), r("error"), r("fatalError"), C$99i;
}function DOMHandler() {
  this.cdata = !1;
}function position(C$99t, C$99e) {
  C$99e.lineNumber = C$99t.lineNumber, C$99e.columnNumber = C$99t.columnNumber;
}function _locator(C$99t) {
  return C$99t ? "\n@" + (C$99t.systemId || "") + "#[line:" + C$99t.lineNumber + ",col:" + C$99t.columnNumber + "]" : void 0;
}function _toString(C$99t, C$99e, C$99n) {
  return "string" == typeof C$99t ? C$99t.substr(C$99e, C$99n) : C$99t.length >= C$99e + C$99n || C$99e ? new java.lang.String(C$99t, C$99e, C$99n) + "" : C$99t;
}function appendElement(C$99t, C$99e) {
  (C$99t.currentElement || C$99t.doc).appendChild(C$99e);
}DOMParser.prototype.parseFromString = function (C$99t, C$99e) {
  var C$99n = this.options,
      C$99r = new XMLReader(),
      C$99o = C$99n.domBuilder || new DOMHandler(),
      C$99i = C$99n.errorHandler,
      C$99a = C$99n.locator,
      C$99c = C$99n.xmlns || {},
      C$99l = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };return C$99a && C$99o.setDocumentLocator(C$99a), C$99r.errorHandler = buildErrorHandler(C$99i, C$99o, C$99a), C$99r.domBuilder = C$99n.domBuilder || C$99o, /\/x?html?$/.test(C$99e) && (C$99l.nbsp = "\xa0", C$99l.copy = "\xa9", C$99c[""] = "http://www.w3.org/1999/xhtml"), C$99c.xml = C$99c.xml || "http://www.w3.org/XML/1998/namespace", C$99t ? C$99r.parse(C$99t, C$99c, C$99l) : C$99r.errorHandler.error("invalid doc source"), C$99o.doc;
}, DOMHandler.prototype = { startDocument: function () {
    this.doc = new DOMImplementation().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  }, startElement: function (C$99t, C$99e, C$99n, C$99r) {
    var C$99o = this.doc,
        C$99i = C$99o.createElementNS(C$99t, C$99n || C$99e),
        C$99a = C$99r.length;appendElement(this, C$99i), this.currentElement = C$99i, this.locator && position(this.locator, C$99i);for (var C$99c = 0; C$99c < C$99a; C$99c++) {
      var C$99t = C$99r.getURI(C$99c),
          C$99l = C$99r.getValue(C$99c),
          C$99n = C$99r.getQName(C$99c),
          C$99s = C$99o.createAttributeNS(C$99t, C$99n);this.locator && position(C$99r.getLocator(C$99c), C$99s), C$99s.value = C$99s.nodeValue = C$99l, C$99i.setAttributeNode(C$99s);
    }
  }, endElement: function () {
    var C$99t = this.currentElement;C$99t.tagName, this.currentElement = C$99t.parentNode;
  }, startPrefixMapping: function () {}, endPrefixMapping: function () {}, processingInstruction: function (C$99t, C$99e) {
    C$99t = this.doc.createProcessingInstruction(C$99t, C$99e);this.locator && position(this.locator, C$99t), appendElement(this, C$99t);
  }, ignorableWhitespace: function () {}, characters: function (C$99t) {
    var C$99e;(C$99t = _toString.apply(this, arguments)) && (C$99e = this.cdata ? this.doc.createCDATASection(C$99t) : this.doc.createTextNode(C$99t), this.currentElement ? this.currentElement.appendChild(C$99e) : /^\s*$/.test(C$99t) && this.doc.appendChild(C$99e), this.locator && position(this.locator, C$99e));
  }, skippedEntity: function () {}, endDocument: function () {
    this.doc.normalize();
  }, setDocumentLocator: function (C$99t) {
    (this.locator = C$99t) && (C$99t.lineNumber = 0);
  }, comment: function (C$99t) {
    C$99t = _toString.apply(this, arguments);var C$99e = this.doc.createComment(C$99t);this.locator && position(this.locator, C$99e), appendElement(this, C$99e);
  }, startCDATA: function () {
    this.cdata = !0;
  }, endCDATA: function () {
    this.cdata = !1;
  }, startDTD: function (C$99t, C$99e, C$99n) {
    var C$99r = this.doc.implementation;C$99r && C$99r.createDocumentType && (C$99r = C$99r.createDocumentType(C$99t, C$99e, C$99n), this.locator && position(this.locator, C$99r), appendElement(this, C$99r));
  }, warning: function (C$99t) {
    console.warn("[xmldom warning]\t" + C$99t, _locator(this.locator));
  }, error: function (C$99t) {
    console.error("[xmldom error]\t" + C$99t, _locator(this.locator));
  }, fatalError: function (C$99t) {
    throw console.error("[xmldom fatalError]\t" + C$99t, _locator(this.locator)), C$99t;
  } }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (C$99t) {
  DOMHandler.prototype[C$99t] = function () {
    return null;
  };
});var XMLReader = require("./eeesax").XMLReader,
    DOMImplementation = exports.DOMImplementation = require("./eeedom").DOMImplementation;exports.XMLSerializer = require("./eeedom").XMLSerializer, exports.DOMParser = DOMParser;