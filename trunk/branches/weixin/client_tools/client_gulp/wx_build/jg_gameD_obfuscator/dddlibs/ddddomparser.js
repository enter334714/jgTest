var v=wx.$d;function zmtideu(t){this.options=t||{locator:{}}}function zaxz0qb(r,t,o){function gkq0a(e){var n=r[e];!n&&a&&(n=2==r.length?function(t){r(e,t)}:r),i[e]=n?function(t){n("[xmldom "+e+"]\t"+t+ziuted(o))}:function(){}}if(!r){if(t instanceof ze6jmh)return t;r=t}var i={},a=r instanceof Function;return o=o||{},gkq0a("warning"),gkq0a("error"),gkq0a("fatalError"),i}function ze6jmh(){this.cdata=!1}function z$8xw1(t,e){e.lineNumber=t.lineNumber,e.columnNumber=t.columnNumber}function ziuted(t){return t?"\n@"+(t.systemId||"")+"#[line:"+t.lineNumber+",col:"+t.columnNumber+"]":void 0}function zr8b1ax(t,e,n){return"string"==typeof t?t.substr(e,n):t.length>=e+n||e?new java.lang.String(t,e,n)+"":t}function zk0agq(t,e){(t.currentElement||t.doc).appendChild(e)}zmtideu.prototype.parseFromString=function(t,e){var n=this.options,r=new zudkft,o=n.domBuilder||new ze6jmh,i=n.errorHandler,a=n.locator,c=n.xmlns||{},l={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return a&&o.setDocumentLocator(a),r.errorHandler=zaxz0qb(i,o,a),r.domBuilder=n.domBuilder||o,/\/x?html?$/.test(e)&&(l.nbsp="\xa0",l.copy="\xa9",c[""]="http://www.w3.org/1999/xhtml"),c.xml=c.xml||"http://www.w3.org/XML/1998/namespace",t?r.parse(t,c,l):r.errorHandler.error("invalid doc source"),o.doc},ze6jmh.prototype={startDocument:function(){this.doc=(new zrwb1).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(t,e,n,r){var o=this.doc,i=o.createElementNS(t,n||e),a=r.length;zk0agq(this,i),this.currentElement=i,this.locator&&z$8xw1(this.locator,i);for(var c=0;c<a;c++){var t=r.getURI(c),l=r.getValue(c),n=r.getQName(c),u=o.createAttributeNS(t,n);this.locator&&z$8xw1(r.getLocator(c),u),u.value=u.nodeValue=l,i.setAttributeNode(u)}},endElement:function(){var t=this.currentElement;t.tagName,this.currentElement=t.parentNode},startPrefixMapping:function(){},endPrefixMapping:function(){},processingInstruction:function(t,e){t=this.doc.createProcessingInstruction(t,e);this.locator&&z$8xw1(this.locator,t),zk0agq(this,t)},ignorableWhitespace:function(){},characters:function(t){var e;(t=zr8b1ax.apply(this,arguments))&&(e=this.cdata?this.doc.createCDATASection(t):this.doc.createTextNode(t),this.currentElement?this.currentElement.appendChild(e):/^\s*$/.test(t)&&this.doc.appendChild(e),this.locator&&z$8xw1(this.locator,e))},skippedEntity:function(){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(t){(this.locator=t)&&(t.lineNumber=0)},comment:function(t){t=zr8b1ax.apply(this,arguments);var e=this.doc.createComment(t);this.locator&&z$8xw1(this.locator,e),zk0agq(this,e)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(t,e,n){var r=this.doc.implementation;r&&r.createDocumentType&&(r=r.createDocumentType(t,e,n),this.locator&&z$8xw1(this.locator,r),zk0agq(this,r))},warning:function(t){console.warn("[xmldom warning]\t"+t,ziuted(this.locator))},error:function(t){console.error("[xmldom error]\t"+t,ziuted(this.locator))},fatalError:function(t){throw console.error("[xmldom fatalError]\t"+t,ziuted(this.locator)),t}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(t){ze6jmh.prototype[t]=function(){return null}});var zudkft=require("./dddsax").XMLReader,zrwb1=exports.DOMImplementation=require("./ddddom").DOMImplementation;exports.XMLSerializer=require("./ddddom").XMLSerializer,exports.DOMParser=zmtideu;