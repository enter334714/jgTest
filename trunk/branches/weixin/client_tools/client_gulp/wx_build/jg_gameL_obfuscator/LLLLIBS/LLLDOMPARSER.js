var W=wx.$l;function L9mwi(t){this.options=t||{locator:{}}}function L9qflt5(o,t,r){function sd48(e){var n=o[e];!n&&c&&(n=2==o.length?function(t){o(e,t)}:o),i[e]=n?function(t){n("[xmldom "+e+"]\t"+t+L9otl(r))}:function(){}}if(!o){if(t instanceof L9e16pgu)return t;o=t}var i={},c=o instanceof Function;return r=r||{},sd48("warning"),sd48("error"),sd48("fatalError"),i}function L9e16pgu(){this.cdata=!1}function L9ns84(t,e){e.lineNumber=t.lineNumber,e.columnNumber=t.columnNumber}function L9otl(t){return t?"\n@"+(t.systemId||"")+"#[line:"+t.lineNumber+",col:"+t.columnNumber+"]":void 0}function L9bkad$(t,e,n){return"string"==typeof t?t.substr(e,n):t.length>=e+n||e?new java.lang.String(t,e,n)+"":t}function L9cy3x(t,e){(t.currentElement||t.doc).appendChild(e)}L9mwi.prototype.parseFromString=function(t,e){var n=this.options,o=new L9zjbah,r=n.domBuilder||new L9e16pgu,i=n.errorHandler,c=n.locator,a=n.xmlns||{},l={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return c&&r.setDocumentLocator(c),o.errorHandler=L9qflt5(i,r,c),o.domBuilder=n.domBuilder||r,/\/x?html?$/.test(e)&&(l.nbsp="\xa0",l.copy="\xa9",a[""]="http://www.w3.org/1999/xhtml"),a.xml=a.xml||"http://www.w3.org/XML/1998/namespace",t?o.parse(t,a,l):o.errorHandler.error("invalid doc source"),r.doc},L9e16pgu.prototype={startDocument:function(){this.doc=(new L9sx_4).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(t,e,n,o){var r=this.doc,i=r.createElementNS(t,n||e),c=o.length;L9cy3x(this,i),this.currentElement=i,this.locator&&L9ns84(this.locator,i);for(var a=0;a<c;a++){var t=o.getURI(a),l=o.getValue(a),n=o.getQName(a),s=r.createAttributeNS(t,n);this.locator&&L9ns84(o.getLocator(a),s),s.value=s.nodeValue=l,i.setAttributeNode(s)}},endElement:function(){var t=this.currentElement;t.tagName,this.currentElement=t.parentNode},startPrefixMapping:function(){},endPrefixMapping:function(){},processingInstruction:function(t,e){t=this.doc.createProcessingInstruction(t,e);this.locator&&L9ns84(this.locator,t),L9cy3x(this,t)},ignorableWhitespace:function(){},characters:function(t){var e;(t=L9bkad$.apply(this,arguments))&&(e=this.cdata?this.doc.createCDATASection(t):this.doc.createTextNode(t),this.currentElement?this.currentElement.appendChild(e):/^\s*$/.test(t)&&this.doc.appendChild(e),this.locator&&L9ns84(this.locator,e))},skippedEntity:function(){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(t){(this.locator=t)&&(t.lineNumber=0)},comment:function(t){t=L9bkad$.apply(this,arguments);var e=this.doc.createComment(t);this.locator&&L9ns84(this.locator,e),L9cy3x(this,e)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(t,e,n){var o=this.doc.implementation;o&&o.createDocumentType&&(o=o.createDocumentType(t,e,n),this.locator&&L9ns84(this.locator,o),L9cy3x(this,o))},warning:function(t){console.warn("[xmldom warning]\t"+t,L9otl(this.locator))},error:function(t){console.error("[xmldom error]\t"+t,L9otl(this.locator))},fatalError:function(t){throw console.error("[xmldom fatalError]\t"+t,L9otl(this.locator)),t}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(t){L9e16pgu.prototype[t]=function(){return null}});var L9zjbah=require("./lllSAX").XMLReader,L9sx_4=exports.DOMImplementation=require("./LLLDOM").DOMImplementation;exports.XMLSerializer=require("./LLLDOM").XMLSerializer,exports.DOMParser=L9mwi;