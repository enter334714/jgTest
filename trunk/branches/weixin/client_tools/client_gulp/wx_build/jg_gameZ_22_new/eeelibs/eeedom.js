function copy(C$99e, C$99t) {
  for (var C$99n in C$99e) C$99t[C$99n] = C$99e[C$99n];
}function _extends(C$99e, C$99t) {
  function n() {}var C$99n = C$99e.prototype;var C$99o;Object.create && (C$99o = Object.create(C$99t.prototype), C$99n.__proto__ = C$99o), C$99n instanceof C$99t || (n.prototype = C$99t.prototype, copy(C$99n, n = new n()), C$99e.prototype = C$99n = n), C$99n.constructor != C$99e && ("function" != typeof C$99e && console.error("unknow Class:" + C$99e), C$99n.constructor = C$99e);
}function DOMException(C$99e, C$99t) {
  var C$99n;return C$99t instanceof Error ? C$99n = C$99t : (C$99n = this, Error.call(this, ExceptionMessage[C$99e]), this.message = ExceptionMessage[C$99e], Error.captureStackTrace && Error.captureStackTrace(this, DOMException)), C$99n.code = C$99e, C$99t && (this.message = this.message + ": " + C$99t), C$99n;
}function NodeList() {}function LiveNodeList(C$99e, C$99t) {
  this._node = C$99e, this._refresh = C$99t, _updateLiveList(this);
}function _updateLiveList(C$99e) {
  var C$99t = C$99e._node._inc || C$99e._node.ownerDocument._inc;var C$99n;C$99e._inc != C$99t && (C$99n = C$99e._refresh(C$99e._node), __set__(C$99e, "length", C$99n.length), copy(C$99n, C$99e), C$99e._inc = C$99t);
}function NamedNodeMap() {}function _findNodeIndex(C$99e, C$99t) {
  for (var C$99n = C$99e.length; C$99n--;) if (C$99e[C$99n] === C$99t) return C$99n;
}function _addNamedNode(C$99e, C$99t, C$99n, C$99o) {
  var C$99i;C$99o ? C$99t[_findNodeIndex(C$99t, C$99o)] = C$99n : C$99t[C$99t.length++] = C$99n, C$99e && (C$99i = (C$99n.ownerElement = C$99e).ownerDocument) && (C$99o && _onRemoveAttribute(C$99i, C$99e, C$99o), _onAddAttribute(C$99i, C$99e, C$99n));
}function _removeNamedNode(C$99e, C$99t, C$99n) {
  var C$99o = _findNodeIndex(C$99t, C$99n);if (!(0 <= C$99o)) throw DOMException(NOT_FOUND_ERR, new Error(C$99e.tagName + "@" + C$99n));for (var C$99i = C$99t.length - 1; C$99o < C$99i;) C$99t[C$99o] = C$99t[++C$99o];var C$99r;C$99t.length = C$99i, C$99e && (C$99r = C$99e.ownerDocument) && (_onRemoveAttribute(C$99r, C$99e, C$99n), C$99n.ownerElement = null);
}function DOMImplementation(C$99e) {
  if (this._features = {}, C$99e) for (var C$99t in C$99e) this._features = C$99e[C$99t];
}function Node() {}function _xmlEncoder(C$99e) {
  return ("<" == C$99e ? "&lt;" : ">" == C$99e && "&gt;") || "&" == C$99e && "&amp;" || '"' == C$99e && "&quot;" || "&#" + C$99e.charCodeAt() + ";";
}function _visitNode(C$99e, C$99t) {
  if (C$99t(C$99e)) return !0;if (C$99e = C$99e.firstChild) do {
    if (_visitNode(C$99e, C$99t)) return !0;
  } while (C$99e = C$99e.nextSibling);
}function Document() {}function _onAddAttribute(C$99e, C$99t, C$99n) {
  C$99e && C$99e._inc++, "http://www.w3.org/2000/xmlns/" == C$99n.namespaceURI && (C$99t._nsMap[C$99n.prefix ? C$99n.localName : ""] = C$99n.value);
}function _onRemoveAttribute(C$99e, C$99t, C$99n) {
  C$99e && C$99e._inc++, "http://www.w3.org/2000/xmlns/" == C$99n.namespaceURI && delete C$99t._nsMap[C$99n.prefix ? C$99n.localName : ""];
}function _onUpdateChild(C$99e, C$99t, C$99n) {
  if (C$99e && C$99e._inc) {
    C$99e._inc++;var C$99o = C$99t.childNodes;if (C$99n) C$99o[C$99o.length++] = C$99n;else {
      for (var C$99i = C$99t.firstChild, C$99r = 0; C$99i;) C$99i = (C$99o[C$99r++] = C$99i).nextSibling;C$99o.length = C$99r;
    }
  }
}function _removeChild(C$99e, C$99t) {
  var C$99n = C$99t.previousSibling,
      C$99o = C$99t.nextSibling;return C$99n ? C$99n.nextSibling = C$99o : C$99e.firstChild = C$99o, C$99o ? C$99o.previousSibling = C$99n : C$99e.lastChild = C$99n, _onUpdateChild(C$99e.ownerDocument, C$99e), C$99t;
}function _insertBefore(C$99e, C$99t, C$99n) {
  var C$99o = C$99t.parentNode;if (C$99o && C$99o.removeChild(C$99t), C$99t.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var C$99i = C$99t.firstChild;if (null == C$99i) return C$99t;var C$99r = C$99t.lastChild;
  } else C$99i = C$99r = C$99t;C$99o = C$99n ? C$99n.previousSibling : C$99e.lastChild;for (C$99i.previousSibling = C$99o, C$99r.nextSibling = C$99n, C$99o ? C$99o.nextSibling = C$99i : C$99e.firstChild = C$99i, null == C$99n ? C$99e.lastChild = C$99r : C$99n.previousSibling = C$99r; C$99i.parentNode = C$99e, C$99i !== C$99r && (C$99i = C$99i.nextSibling););return _onUpdateChild(C$99e.ownerDocument || C$99e, C$99e), C$99t.nodeType == DOCUMENT_FRAGMENT_NODE && (C$99t.firstChild = C$99t.lastChild = null), C$99t;
}function _appendSingleChild(C$99e, C$99t) {
  var C$99n = C$99t.parentNode;C$99n && (C$99o = C$99e.lastChild, C$99n.removeChild(C$99t), C$99o = C$99e.lastChild);var C$99o = C$99e.lastChild;return C$99t.parentNode = C$99e, C$99t.previousSibling = C$99o, C$99t.nextSibling = null, C$99o ? C$99o.nextSibling = C$99t : C$99e.firstChild = C$99t, C$99e.lastChild = C$99t, _onUpdateChild(C$99e.ownerDocument, C$99e, C$99t), C$99t;
}function Element() {
  this._nsMap = {};
}function Attr() {}function CharacterData() {}function Text() {}function Comment() {}function CDATASection() {}function DocumentType() {}function Notation() {}function Entity() {}function EntityReference() {}function DocumentFragment() {}function ProcessingInstruction() {}function XMLSerializer() {}function nodeSerializeToString(C$99e, C$99t) {
  var C$99n = [],
      C$99o = 9 == this.nodeType ? this.documentElement : this,
      C$99i = C$99o.prefix,
      C$99r = C$99o.namespaceURI;var C$99a;return serializeToString(this, C$99n, C$99e, C$99t, C$99a = C$99r && null == C$99i && null == (C$99i = C$99o.lookupPrefix(C$99r)) ? [{ namespace: C$99r, prefix: null }] : C$99a), C$99n.join("");
}function needNamespaceDefine(C$99e, C$99t, C$99n) {
  var C$99o = C$99e.prefix || "",
      C$99i = C$99e.namespaceURI;if (!C$99o && !C$99i) return !1;if ("xml" === C$99o && "http://www.w3.org/XML/1998/namespace" === C$99i || "http://www.w3.org/2000/xmlns/" == C$99i) return !1;for (var C$99r = C$99n.length; C$99r--;) {
    var C$99a = C$99n[C$99r];if (C$99a.prefix == C$99o) return C$99a.namespace != C$99i;
  }return !0;
}function serializeToString(C$99e, C$99t, C$99n, C$99o, C$99i) {
  if (C$99o) {
    if (!(C$99e = C$99o(C$99e))) return;if ("string" == typeof C$99e) return void C$99t.push(C$99e);
  }switch (C$99e.nodeType) {case ELEMENT_NODE:
      (C$99i = C$99i || []).length;var C$99c = C$99e.attributes,
          C$99N = C$99c.length,
          C$99r = C$99e.firstChild,
          C$99a = C$99e.tagName;C$99n = htmlns === C$99e.namespaceURI || C$99n, C$99t.push("<", C$99a);for (var C$99s = 0; C$99s < C$99N; C$99s++) "xmlns" == (C$99u = C$99c.item(C$99s)).prefix ? C$99i.push({ prefix: C$99u.localName, namespace: C$99u.value }) : "xmlns" == C$99u.nodeName && C$99i.push({ prefix: "", namespace: C$99u.value });for (C$99s = 0; C$99s < C$99N; C$99s++) {
        var C$99u;needNamespaceDefine(C$99u = C$99c.item(C$99s), C$99n, C$99i) && (C$99d = C$99u.prefix || "", C$99l = C$99u.namespaceURI, C$99t.push(C$99d ? " xmlns:" + C$99d : " xmlns", '="', C$99l, '"'), C$99i.push({ prefix: C$99d, namespace: C$99l })), serializeToString(C$99u, C$99t, C$99n, C$99o, C$99i);
      }var C$99d, C$99l;if (needNamespaceDefine(C$99e, C$99n, C$99i) && (C$99d = C$99e.prefix || "", C$99l = C$99e.namespaceURI, C$99t.push(C$99d ? " xmlns:" + C$99d : " xmlns", '="', C$99l, '"'), C$99i.push({ prefix: C$99d, namespace: C$99l })), C$99r || C$99n && !/^(?:meta|link|img|br|hr|input)$/i.test(C$99a)) {
        if (C$99t.push(">"), C$99n && /^script$/i.test(C$99a)) for (; C$99r;) C$99r.data ? C$99t.push(C$99r.data) : serializeToString(C$99r, C$99t, C$99n, C$99o, C$99i), C$99r = C$99r.nextSibling;else for (; C$99r;) serializeToString(C$99r, C$99t, C$99n, C$99o, C$99i), C$99r = C$99r.nextSibling;C$99t.push("</", C$99a, ">");
      } else C$99t.push("/>");return;case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:
      for (C$99r = C$99e.firstChild; C$99r;) serializeToString(C$99r, C$99t, C$99n, C$99o, C$99i), C$99r = C$99r.nextSibling;return;case ATTRIBUTE_NODE:
      return C$99t.push(" ", C$99e.name, '="', C$99e.value.replace(/[<&"]/g, _xmlEncoder), '"');case TEXT_NODE:
      return C$99t.push(C$99e.data.replace(/[<&]/g, _xmlEncoder));case CDATA_SECTION_NODE:
      return C$99t.push("<![CDATA[", C$99e.data, "]]>");case COMMENT_NODE:
      return C$99t.push("\x3c!--", C$99e.data, "--\x3e");case DOCUMENT_TYPE_NODE:
      var C$99a = C$99e.publicId,
          C$99E = C$99e.systemId;return C$99t.push("<!DOCTYPE ", C$99e.name), void (C$99a ? (C$99t.push(' PUBLIC "', C$99a), C$99E && "." != C$99E && C$99t.push('" "', C$99E), C$99t.push('">')) : C$99E && "." != C$99E ? C$99t.push(' SYSTEM "', C$99E, '">') : ((C$99a = C$99e.internalSubset) && C$99t.push(" [", C$99a, "]"), C$99t.push(">")));case PROCESSING_INSTRUCTION_NODE:
      return C$99t.push("<?", C$99e.target, " ", C$99e.data, "?>");case ENTITY_REFERENCE_NODE:
      return C$99t.push("&", C$99e.nodeName, ";");default:
      C$99t.push("??", C$99e.nodeName);}
}function importNode(C$99e, C$99t, C$99n) {
  var C$99o;switch (C$99t.nodeType) {case ELEMENT_NODE:
      (C$99o = C$99t.cloneNode(!1)).ownerDocument = C$99e;case DOCUMENT_FRAGMENT_NODE:
      break;case ATTRIBUTE_NODE:
      C$99n = !0;}if ((C$99o = C$99o || C$99t.cloneNode(!1)).ownerDocument = C$99e, C$99o.parentNode = null, C$99n) for (var C$99i = C$99t.firstChild; C$99i;) C$99o.appendChild(importNode(C$99e, C$99i, C$99n)), C$99i = C$99i.nextSibling;return C$99o;
}function cloneNode(C$99e, C$99t, C$99n) {
  var C$99o = new C$99t.constructor();for (var C$99i in C$99t) {
    var C$99r = C$99t[C$99i];"object" != typeof C$99r && C$99r != C$99o[C$99i] && (C$99o[C$99i] = C$99r);
  }switch (C$99t.childNodes && (C$99o.childNodes = new NodeList()), C$99o.ownerDocument = C$99e, C$99o.nodeType) {case ELEMENT_NODE:
      var C$99a = C$99t.attributes,
          C$99s = C$99o.attributes = new NamedNodeMap(),
          C$99c = C$99a.length;C$99s._ownerElement = C$99o;for (var C$99u = 0; C$99u < C$99c; C$99u++) C$99o.setAttributeNode(cloneNode(C$99e, C$99a.item(C$99u), !0));break;case ATTRIBUTE_NODE:
      C$99n = !0;}if (C$99n) for (var C$99d = C$99t.firstChild; C$99d;) C$99o.appendChild(cloneNode(C$99e, C$99d, C$99n)), C$99d = C$99d.nextSibling;return C$99o;
}function __set__(C$99e, C$99t, C$99n) {
  C$99e[C$99t] = C$99n;
}function getTextContent(C$99e) {
  switch (C$99e.nodeType) {case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:
      var C$99t = [];for (C$99e = C$99e.firstChild; C$99e;) 7 !== C$99e.nodeType && 8 !== C$99e.nodeType && C$99t.push(getTextContent(C$99e)), C$99e = C$99e.nextSibling;return C$99t.join("");default:
      return C$99e.nodeValue;}
}var htmlns = "http://www.w3.org/1999/xhtml",
    NodeType = {},
    ELEMENT_NODE = NodeType.ELEMENT_NODE = 1,
    ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2,
    TEXT_NODE = NodeType.TEXT_NODE = 3,
    CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4,
    ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5,
    ENTITY_NODE = NodeType.ENTITY_NODE = 6,
    PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7,
    COMMENT_NODE = NodeType.COMMENT_NODE = 8,
    DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9,
    DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10,
    DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11,
    NOTATION_NODE = NodeType.NOTATION_NODE = 12,
    ExceptionCode = {},
    ExceptionMessage = {},
    INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1),
    DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2),
    HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3),
    WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4),
    INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5),
    NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6),
    NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7),
    NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8),
    NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9),
    INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10),
    INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11),
    SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12),
    INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13),
    NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14),
    INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);DOMException.prototype = Error.prototype, copy(ExceptionCode, DOMException), NodeList.prototype = { length: 0, item: function (C$99e) {
    return this[C$99e] || null;
  }, toString: function (C$99e, C$99t) {
    for (var C$99n = [], C$99o = 0; C$99o < this.length; C$99o++) serializeToString(this[C$99o], C$99n, C$99e, C$99t);return C$99n.join("");
  } }, LiveNodeList.prototype.item = function (C$99e) {
  return _updateLiveList(this), this[C$99e];
}, _extends(LiveNodeList, NodeList), NamedNodeMap.prototype = { length: 0, item: NodeList.prototype.item, getNamedItem: function (C$99e) {
    for (var C$99t = this.length; C$99t--;) {
      var C$99n = this[C$99t];if (C$99n.nodeName == C$99e) return C$99n;
    }
  }, setNamedItem: function (C$99e) {
    var C$99t = C$99e.ownerElement;if (C$99t && C$99t != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);C$99t = this.getNamedItem(C$99e.nodeName);return _addNamedNode(this._ownerElement, this, C$99e, C$99t), C$99t;
  }, setNamedItemNS: function (C$99e) {
    var C$99t = C$99e.ownerElement;if (C$99t && C$99t != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);return C$99t = this.getNamedItemNS(C$99e.namespaceURI, C$99e.localName), _addNamedNode(this._ownerElement, this, C$99e, C$99t), C$99t;
  }, removeNamedItem: function (C$99e) {
    C$99e = this.getNamedItem(C$99e);return _removeNamedNode(this._ownerElement, this, C$99e), C$99e;
  }, removeNamedItemNS: function (C$99e, C$99t) {
    C$99e = this.getNamedItemNS(C$99e, C$99t);return _removeNamedNode(this._ownerElement, this, C$99e), C$99e;
  }, getNamedItemNS: function (C$99e, C$99t) {
    for (var C$99n = this.length; C$99n--;) {
      var C$99o = this[C$99n];if (C$99o.localName == C$99t && C$99o.namespaceURI == C$99e) return C$99o;
    }return null;
  } }, DOMImplementation.prototype = { hasFeature: function (C$99e, C$99t) {
    C$99e = this._features[C$99e.toLowerCase()];return !(!C$99e || C$99t && !(C$99t in C$99e));
  }, createDocument: function (C$99e, C$99t, C$99n) {
    var C$99o = new Document();return C$99o.implementation = this, C$99o.childNodes = new NodeList(), (C$99o.doctype = C$99n) && C$99o.appendChild(C$99n), C$99t && (C$99n = C$99o.createElementNS(C$99e, C$99t), C$99o.appendChild(C$99n)), C$99o;
  }, createDocumentType: function (C$99e, C$99t, C$99n) {
    var C$99o = new DocumentType();return C$99o.name = C$99e, C$99o.nodeName = C$99e, C$99o.publicId = C$99t, C$99o.systemId = C$99n, C$99o;
  } }, Node.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function (C$99e, C$99t) {
    return _insertBefore(this, C$99e, C$99t);
  }, replaceChild: function (C$99e, C$99t) {
    this.insertBefore(C$99e, C$99t), C$99t && this.removeChild(C$99t);
  }, removeChild: function (C$99e) {
    return _removeChild(this, C$99e);
  }, appendChild: function (C$99e) {
    return this.insertBefore(C$99e, null);
  }, hasChildNodes: function () {
    return null != this.firstChild;
  }, cloneNode: function (C$99e) {
    return cloneNode(this.ownerDocument || this, this, C$99e);
  }, normalize: function () {
    for (var C$99e = this.firstChild; C$99e;) {
      var C$99t = C$99e.nextSibling;C$99t && C$99t.nodeType == TEXT_NODE && C$99e.nodeType == TEXT_NODE ? (this.removeChild(C$99t), C$99e.appendData(C$99t.data)) : (C$99e.normalize(), C$99e = C$99t);
    }
  }, isSupported: function (C$99e, C$99t) {
    return this.ownerDocument.implementation.hasFeature(C$99e, C$99t);
  }, hasAttributes: function () {
    return 0 < this.attributes.length;
  }, lookupPrefix: function (C$99e) {
    for (var C$99t = this; C$99t;) {
      var C$99n = C$99t._nsMap;if (C$99n) for (var C$99o in C$99n) if (C$99n[C$99o] == C$99e) return C$99o;C$99t = C$99t.nodeType == ATTRIBUTE_NODE ? C$99t.ownerDocument : C$99t.parentNode;
    }return null;
  }, lookupNamespaceURI: function (C$99e) {
    for (var C$99t = this; C$99t;) {
      var C$99n = C$99t._nsMap;if (C$99n && C$99e in C$99n) return C$99n[C$99e];C$99t = C$99t.nodeType == ATTRIBUTE_NODE ? C$99t.ownerDocument : C$99t.parentNode;
    }return null;
  }, isDefaultNamespace: function (C$99e) {
    return null == this.lookupPrefix(C$99e);
  } }, copy(NodeType, Node), copy(NodeType, Node.prototype), Document.prototype = { nodeName: "#document", nodeType: DOCUMENT_NODE, doctype: null, documentElement: null, _inc: 1, insertBefore: function (C$99e, C$99t) {
    if (C$99e.nodeType != DOCUMENT_FRAGMENT_NODE) return null == this.documentElement && C$99e.nodeType == ELEMENT_NODE && (this.documentElement = C$99e), _insertBefore(this, C$99e, C$99t), C$99e.ownerDocument = this, C$99e;for (var C$99n = C$99e.firstChild; C$99n;) {
      var C$99o = C$99n.nextSibling;this.insertBefore(C$99n, C$99t), C$99n = C$99o;
    }return C$99e;
  }, removeChild: function (C$99e) {
    return this.documentElement == C$99e && (this.documentElement = null), _removeChild(this, C$99e);
  }, importNode: function (C$99e, C$99t) {
    return importNode(this, C$99e, C$99t);
  }, getElementById: function (C$99t) {
    var C$99n = null;return _visitNode(this.documentElement, function (C$99e) {
      return C$99e.nodeType == ELEMENT_NODE && C$99e.getAttribute("id") == C$99t ? (C$99n = C$99e, !0) : void 0;
    }), C$99n;
  }, createElement: function (C$99e) {
    var C$99t = new Element();return C$99t.ownerDocument = this, C$99t.nodeName = C$99e, C$99t.tagName = C$99e, C$99t.childNodes = new NodeList(), (C$99t.attributes = new NamedNodeMap())._ownerElement = C$99t;
  }, createDocumentFragment: function () {
    var C$99e = new DocumentFragment();return C$99e.ownerDocument = this, C$99e.childNodes = new NodeList(), C$99e;
  }, createTextNode: function (C$99e) {
    var C$99t = new Text();return C$99t.ownerDocument = this, C$99t.appendData(C$99e), C$99t;
  }, createComment: function (C$99e) {
    var C$99t = new Comment();return C$99t.ownerDocument = this, C$99t.appendData(C$99e), C$99t;
  }, createCDATASection: function (C$99e) {
    var C$99t = new CDATASection();return C$99t.ownerDocument = this, C$99t.appendData(C$99e), C$99t;
  }, createProcessingInstruction: function (C$99e, C$99t) {
    var C$99n = new ProcessingInstruction();return C$99n.ownerDocument = this, C$99n.tagName = C$99n.target = C$99e, C$99n.nodeValue = C$99n.data = C$99t, C$99n;
  }, createAttribute: function (C$99e) {
    var C$99t = new Attr();return C$99t.ownerDocument = this, C$99t.name = C$99e, C$99t.nodeName = C$99e, C$99t.localName = C$99e, C$99t.specified = !0, C$99t;
  }, createEntityReference: function (C$99e) {
    var C$99t = new EntityReference();return C$99t.ownerDocument = this, C$99t.nodeName = C$99e, C$99t;
  }, createElementNS: function (C$99e, C$99t) {
    var C$99n = new Element(),
        C$99o = C$99t.split(":"),
        C$99i = C$99n.attributes = new NamedNodeMap();return C$99n.childNodes = new NodeList(), C$99n.ownerDocument = this, C$99n.nodeName = C$99t, C$99n.tagName = C$99t, C$99n.namespaceURI = C$99e, 2 == C$99o.length ? (C$99n.prefix = C$99o[0], C$99n.localName = C$99o[1]) : C$99n.localName = C$99t, C$99i._ownerElement = C$99n;
  }, createAttributeNS: function (C$99e, C$99t) {
    var C$99n = new Attr(),
        C$99o = C$99t.split(":");return C$99n.ownerDocument = this, C$99n.nodeName = C$99t, C$99n.name = C$99t, C$99n.namespaceURI = C$99e, C$99n.specified = !0, 2 == C$99o.length ? (C$99n.prefix = C$99o[0], C$99n.localName = C$99o[1]) : C$99n.localName = C$99t, C$99n;
  } }, _extends(Document, Node), Element.prototype = { nodeType: ELEMENT_NODE, hasAttribute: function (C$99e) {
    return null != this.getAttributeNode(C$99e);
  }, getAttribute: function (C$99e) {
    C$99e = this.getAttributeNode(C$99e);return C$99e && C$99e.value || "";
  }, getAttributeNode: function (C$99e) {
    return this.attributes.getNamedItem(C$99e);
  }, setAttribute: function (C$99e, C$99t) {
    C$99e = this.ownerDocument.createAttribute(C$99e);C$99e.value = C$99e.nodeValue = "" + C$99t, this.setAttributeNode(C$99e);
  }, removeAttribute: function (C$99e) {
    C$99e = this.getAttributeNode(C$99e);C$99e && this.removeAttributeNode(C$99e);
  }, appendChild: function (C$99e) {
    return C$99e.nodeType === DOCUMENT_FRAGMENT_NODE ? this.insertBefore(C$99e, null) : _appendSingleChild(this, C$99e);
  }, setAttributeNode: function (C$99e) {
    return this.attributes.setNamedItem(C$99e);
  }, setAttributeNodeNS: function (C$99e) {
    return this.attributes.setNamedItemNS(C$99e);
  }, removeAttributeNode: function (C$99e) {
    return this.attributes.removeNamedItem(C$99e.nodeName);
  }, removeAttributeNS: function (C$99e, C$99t) {
    C$99e = this.getAttributeNodeNS(C$99e, C$99t);C$99e && this.removeAttributeNode(C$99e);
  }, hasAttributeNS: function (C$99e, C$99t) {
    return null != this.getAttributeNodeNS(C$99e, C$99t);
  }, getAttributeNS: function (C$99e, C$99t) {
    C$99e = this.getAttributeNodeNS(C$99e, C$99t);return C$99e && C$99e.value || "";
  }, setAttributeNS: function (C$99e, C$99t, C$99n) {
    C$99e = this.ownerDocument.createAttributeNS(C$99e, C$99t);C$99e.value = C$99e.nodeValue = "" + C$99n, this.setAttributeNode(C$99e);
  }, getAttributeNodeNS: function (C$99e, C$99t) {
    return this.attributes.getNamedItemNS(C$99e, C$99t);
  }, getElementsByTagName: function (C$99o) {
    return new LiveNodeList(this, function (C$99t) {
      var C$99n = [];return _visitNode(C$99t, function (C$99e) {
        C$99e === C$99t || C$99e.nodeType != ELEMENT_NODE || "*" !== C$99o && C$99e.tagName != C$99o || C$99n.push(C$99e);
      }), C$99n;
    });
  }, getElementsByTagNameNS: function (C$99o, C$99i) {
    return new LiveNodeList(this, function (C$99t) {
      var C$99n = [];return _visitNode(C$99t, function (C$99e) {
        C$99e === C$99t || C$99e.nodeType !== ELEMENT_NODE || "*" !== C$99o && C$99e.namespaceURI !== C$99o || "*" !== C$99i && C$99e.localName != C$99i || C$99n.push(C$99e);
      }), C$99n;
    });
  } }, Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName, Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS, _extends(Element, Node), Attr.prototype.nodeType = ATTRIBUTE_NODE, _extends(Attr, Node), CharacterData.prototype = { data: "", substringData: function (C$99e, C$99t) {
    return this.data.substring(C$99e, C$99e + C$99t);
  }, appendData: function (C$99e) {
    C$99e = this.data + C$99e, this.nodeValue = this.data = C$99e, this.length = C$99e.length;
  }, insertData: function (C$99e, C$99t) {
    this.replaceData(C$99e, 0, C$99t);
  }, appendChild: function () {
    throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
  }, deleteData: function (C$99e, C$99t) {
    this.replaceData(C$99e, C$99t, "");
  }, replaceData: function (C$99e, C$99t, C$99n) {
    var C$99o = this.data.substring(0, C$99e),
        C$99e = this.data.substring(C$99e + C$99t);this.nodeValue = this.data = C$99n = C$99o + C$99n + C$99e, this.length = C$99n.length;
  } }, _extends(CharacterData, Node), Text.prototype = { nodeName: "#text", nodeType: TEXT_NODE, splitText: function (C$99e) {
    var C$99t = this.data,
        C$99n = C$99t.substring(C$99e);C$99t = C$99t.substring(0, C$99e), this.data = this.nodeValue = C$99t, this.length = C$99t.length;C$99e = this.ownerDocument.createTextNode(C$99n);return this.parentNode && this.parentNode.insertBefore(C$99e, this.nextSibling), C$99e;
  } }, _extends(Text, CharacterData), Comment.prototype = { nodeName: "#comment", nodeType: COMMENT_NODE }, _extends(Comment, CharacterData), CDATASection.prototype = { nodeName: "#cdata-section", nodeType: CDATA_SECTION_NODE }, _extends(CDATASection, CharacterData), DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE, _extends(DocumentType, Node), Notation.prototype.nodeType = NOTATION_NODE, _extends(Notation, Node), Entity.prototype.nodeType = ENTITY_NODE, _extends(Entity, Node), EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE, _extends(EntityReference, Node), DocumentFragment.prototype.nodeName = "#document-fragment", DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE, _extends(DocumentFragment, Node), ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE, _extends(ProcessingInstruction, Node), XMLSerializer.prototype.serializeToString = function (C$99e, C$99t, C$99n) {
  return nodeSerializeToString.call(C$99e, C$99t, C$99n);
}, Node.prototype.toString = nodeSerializeToString;try {
  Object.defineProperty && (Object.defineProperty(LiveNodeList.prototype, "length", { get: function () {
      return _updateLiveList(this), this.$$length;
    } }), Object.defineProperty(Node.prototype, "textContent", { get: function () {
      return getTextContent(this);
    }, set: function (C$99e) {
      switch (this.nodeType) {case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:
          for (; this.firstChild;) this.removeChild(this.firstChild);(C$99e || String(C$99e)) && this.appendChild(this.ownerDocument.createTextNode(C$99e));break;default:
          this.data = C$99e, this.value = C$99e, this.nodeValue = C$99e;}
    } }), __set__ = function (C$99e, C$99t, C$99n) {
    C$99e["$$" + C$99t] = C$99n;
  });
} catch (C$99e) {}exports.DOMImplementation = DOMImplementation, exports.XMLSerializer = XMLSerializer;