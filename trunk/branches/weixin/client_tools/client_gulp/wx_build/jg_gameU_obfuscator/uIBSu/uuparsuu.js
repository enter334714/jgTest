var o=wx.$U;function unkavs_(t){this.options=t||{locator:{}}}function uuns$ef(r,t,o){function wd9zg7(e){var n=r[e];!n&&u&&(n=2==r.length?function(t){r(e,t)}:r),i[e]=n?function(t){n("[xmldom "+e+"]\t"+t+ulio7(o))}:function(){}}if(!r){if(t instanceof usfpe$)return t;r=t}var i={},u=r instanceof Function;return o=o||{},wd9zg7("warning"),wd9zg7("error"),wd9zg7("fatalError"),i}function usfpe$(){this.cdata=!1}function ugw9xl7(t,e){e.lineNumber=t.lineNumber,e.columnNumber=t.columnNumber}function ulio7(t){return t?"\n@"+(t.systemId||"")+"#[line:"+t.lineNumber+",col:"+t.columnNumber+"]":void 0}function uka_c6r(t,e,n){return"string"==typeof t?t.substr(e,n):t.length>=e+n||e?new java.lang.String(t,e,n)+"":t}function ujp4fh3(t,e){(t.currentElement||t.doc).appendChild(e)}unkavs_.prototype.parseFromString=function(t,e){var n=this.options,r=new ufpe$s,o=n.domBuilder||new usfpe$,i=n.errorHandler,u=n.locator,c=n.xmlns||{},a={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return u&&o.setDocumentLocator(u),r.errorHandler=uuns$ef(i,o,u),r.domBuilder=n.domBuilder||o,/\/x?html?$/.test(e)&&(a.nbsp="\xa0",a.copy="\xa9",c[""]="http://www.w3.org/1999/xhtml"),c.xml=c.xml||"http://www.w3.org/XML/1998/namespace",t?r.parse(t,c,a):r.errorHandler.error("invalid doc source"),o.doc},usfpe$.prototype={startDocument:function(){this.doc=(new uu$senv).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(t,e,n,r){var o=this.doc,i=o.createElementNS(t,n||e),u=r.length;ujp4fh3(this,i),this.currentElement=i,this.locator&&ugw9xl7(this.locator,i);for(var c=0;c<u;c++){var t=r.getURI(c),a=r.getValue(c),n=r.getQName(c),l=o.createAttributeNS(t,n);this.locator&&ugw9xl7(r.getLocator(c),l),l.value=l.nodeValue=a,i.setAttributeNode(l)}},endElement:function(){var t=this.currentElement;t.tagName,this.currentElement=t.parentNode},startPrefixMapping:function(){},endPrefixMapping:function(){},processingInstruction:function(t,e){t=this.doc.createProcessingInstruction(t,e);this.locator&&ugw9xl7(this.locator,t),ujp4fh3(this,t)},ignorableWhitespace:function(){},characters:function(t){var e;(t=uka_c6r.apply(this,arguments))&&(e=this.cdata?this.doc.createCDATASection(t):this.doc.createTextNode(t),this.currentElement?this.currentElement.appendChild(e):/^\s*$/.test(t)&&this.doc.appendChild(e),this.locator&&ugw9xl7(this.locator,e))},skippedEntity:function(){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(t){(this.locator=t)&&(t.lineNumber=0)},comment:function(t){t=uka_c6r.apply(this,arguments);var e=this.doc.createComment(t);this.locator&&ugw9xl7(this.locator,e),ujp4fh3(this,e)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(t,e,n){var r=this.doc.implementation;r&&r.createDocumentType&&(r=r.createDocumentType(t,e,n),this.locator&&ugw9xl7(this.locator,r),ujp4fh3(this,r))},warning:function(t){console.warn("[xmldom warning]\t"+t,ulio7(this.locator))},error:function(t){console.error("[xmldom error]\t"+t,ulio7(this.locator))},fatalError:function(t){throw console.error("[xmldom fatalError]\t"+t,ulio7(this.locator)),t}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(t){usfpe$.prototype[t]=function(){return null}});var ufpe$s=require("./uu12uu").XMLReader,uu$senv=exports.DOMImplementation=require("./uuDOuu").DOMImplementation;exports.XMLSerializer=require("./uuDOuu").XMLSerializer,exports.DOMParser=unkavs_;