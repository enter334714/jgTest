var c=wx.$a;function gf2g1xs(e,t){for(var n in e)t[n]=e[n]}function g_04oew(e,t){function q8t7r5(){}var n=e.prototype;var o;Object.create&&(o=Object.create(t.prototype),n.__proto__=o),n instanceof t||(q8t7r5.prototype=t.prototype,gf2g1xs(n,q8t7r5=new q8t7r5),e.prototype=n=q8t7r5),n.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),n.constructor=e)}function glacm$(e,t){var n;return t instanceof Error?n=t:(n=this,Error.call(this,g$ybc0o[e]),this.message=g$ybc0o[e],Error.captureStackTrace&&Error.captureStackTrace(this,glacm$)),n.code=e,t&&(this.message=this.message+": "+t),n}function gweo(){}function gt35p7(e,t){this._node=e,this._refresh=t,gjxf1sn(this)}function gjxf1sn(e){var t=e._node._inc||e._node.ownerDocument._inc;var n;e._inc!=t&&(n=e._refresh(e._node),gca$ml(e,"length",n.length),gf2g1xs(n,e),e._inc=t)}function gfsx2g1(){}function gzdh6vk(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function gyc0$o(e,t,n,o){var r;o?t[gzdh6vk(t,o)]=n:t[t.length++]=n,e&&(r=(n.ownerElement=e).ownerDocument)&&(o&&glmcby$(r,e,o),gfu1w2g(r,e,n))}function gtr75p(e,t,n){var o=gzdh6vk(t,n);if(!(0<=o))throw glacm$(gshjvz,new Error(e.tagName+"@"+n));for(var r=t.length-1;o<r;)t[o]=t[++o];var i;t.length=r,e&&(i=e.ownerDocument)&&(glmcby$(i,e,n),n.ownerElement=null)}function go0by(e){if(this._features={},e)for(var t in e)this._features=e[t]}function g$ybmlc(){}function g_c4o0(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function gjvsf(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(gjvsf(e,t))return!0}while(e=e.nextSibling)}function gzvk6dh(){}function gfu1w2g(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&(t._nsMap[n.prefix?n.localName:""]=n.value)}function glmcby$(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&delete t._nsMap[n.prefix?n.localName:""]}function gzq6k(e,t,n){if(e&&e._inc){e._inc++;var o=t.childNodes;if(n)o[o.length++]=n;else{for(var r=t.firstChild,i=0;r;)r=(o[i++]=r).nextSibling;o.length=i}}}function galmcb$(e,t){var n=t.previousSibling,o=t.nextSibling;return n?n.nextSibling=o:e.firstChild=o,o?o.previousSibling=n:e.lastChild=n,gzq6k(e.ownerDocument,e),t}function g_40yoc(e,t,n){var o=t.parentNode;if(o&&o.removeChild(t),t.nodeType===gg1we){var r=t.firstChild;if(null==r)return t;var i=t.lastChild}else r=i=t;o=n?n.previousSibling:e.lastChild;for(r.previousSibling=o,i.nextSibling=n,o?o.nextSibling=r:e.firstChild=r,null==n?e.lastChild=i:n.previousSibling=i;r.parentNode=e,r!==i&&(r=r.nextSibling););return gzq6k(e.ownerDocument||e,e),t.nodeType==gg1we&&(t.firstChild=t.lastChild=null),t}function g_4geu(e,t){var n=t.parentNode;n&&(o=e.lastChild,n.removeChild(t),o=e.lastChild);var o=e.lastChild;return t.parentNode=e,t.previousSibling=o,t.nextSibling=null,o?o.nextSibling=t:e.firstChild=t,e.lastChild=t,gzq6k(e.ownerDocument,e,t),t}function gb0oc(){this._nsMap={}}function g_4o(){}function gqkt(){}function gjvxhsn(){}function gg1wfu2(){}function gco0y_(){}function ggwu_4(){}function gguf21w(){}function gr86qt(){}function ghjvnk(){}function gq6kzd8(){}function gzdq6h(){}function gxvhns(){}function gb04ocy(e,t){var n=[],o=9==this.nodeType?this.documentElement:this,r=o.prefix,i=o.namespaceURI;var g;return gwe4gu(this,n,e,t,g=i&&null==r&&null==(r=o.lookupPrefix(i))?[{namespace:i,prefix:null}]:g),n.join("")}function gfu1wg2(e,t,n){var o=e.prefix||"",r=e.namespaceURI;if(!o&&!r)return!1;if("xml"===o&&"http://www.w3.org/XML/1998/namespace"===r||"http://www.w3.org/2000/xmlns/"==r)return!1;for(var i=n.length;i--;){var g=n[i];if(g.prefix==o)return g.namespace!=r}return!0}function gwe4gu(e,t,n,o,r){if(o){if(!(e=o(e)))return;if("string"==typeof e)return void t.push(e)}switch(e.nodeType){case ge_u4wo:(r=r||[]).length;var c=e.attributes,l=c.length,i=e.firstChild,g=e.tagName;n=gw0o4e===e.namespaceURI||n,t.push("<",g);for(var u=0;u<l;u++)"xmlns"==(a=c.item(u)).prefix?r.push({prefix:a.localName,namespace:a.value}):"xmlns"==a.nodeName&&r.push({prefix:"",namespace:a.value});for(u=0;u<l;u++){var a;gfu1wg2(a=c.item(u),n,r)&&(s=a.prefix||"",h=a.namespaceURI,t.push(s?" xmlns:"+s:" xmlns",'="',h,'"'),r.push({prefix:s,namespace:h})),gwe4gu(a,t,n,o,r)}var s,h;if(gfu1wg2(e,n,r)&&(s=e.prefix||"",h=e.namespaceURI,t.push(s?" xmlns:"+s:" xmlns",'="',h,'"'),r.push({prefix:s,namespace:h})),i||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(g)){if(t.push(">"),n&&/^script$/i.test(g))for(;i;)i.data?t.push(i.data):gwe4gu(i,t,n,o,r),i=i.nextSibling;else for(;i;)gwe4gu(i,t,n,o,r),i=i.nextSibling;t.push("</",g,">")}else t.push("/>");return;case ggw1fu:case gg1we:for(i=e.firstChild;i;)gwe4gu(i,t,n,o,r),i=i.nextSibling;return;case gvjsn:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,g_c4o0),'"');case gwo0e4_:return t.push(e.data.replace(/[<&]/g,g_c4o0));case gwe_u2g:return t.push("<![CDATA[",e.data,"]]>");case gewo_4u:return t.push("\x3c!--",e.data,"--\x3e");case g$0c:var g=e.publicId,p=e.systemId;return t.push("<!DOCTYPE ",e.name),void(g?(t.push(' PUBLIC "',g),p&&"."!=p&&t.push('" "',p),t.push('">')):p&&"."!=p?t.push(' SYSTEM "',p,'">'):((g=e.internalSubset)&&t.push(" [",g,"]"),t.push(">")));case gq8tkd6:return t.push("<?",e.target," ",e.data,"?>");case ghznjsv:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function gcl0y(e,t,n){var o;switch(t.nodeType){case ge_u4wo:(o=t.cloneNode(!1)).ownerDocument=e;case gg1we:break;case gvjsn:n=!0}if((o=o||t.cloneNode(!1)).ownerDocument=e,o.parentNode=null,n)for(var r=t.firstChild;r;)o.appendChild(gcl0y(e,r,n)),r=r.nextSibling;return o}function gwug_4e(e,t,n){var o=new t.constructor;for(var r in t){var i=t[r];"object"!=typeof i&&i!=o[r]&&(o[r]=i)}switch(t.childNodes&&(o.childNodes=new gweo),o.ownerDocument=e,o.nodeType){case ge_u4wo:var g=t.attributes,u=o.attributes=new gfsx2g1,c=g.length;u._ownerElement=o;for(var a=0;a<c;a++)o.setAttributeNode(gwug_4e(e,g.item(a),!0));break;case gvjsn:n=!0}if(n)for(var s=t.firstChild;s;)o.appendChild(gwug_4e(e,s,n)),s=s.nextSibling;return o}function gca$ml(e,t,n){e[t]=n}function g_oe4wu(e){switch(e.nodeType){case ge_u4wo:case gg1we:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(g_oe4wu(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}var gw0o4e="http://www.w3.org/1999/xhtml",ghjnszv={},ge_u4wo=ghjnszv.ELEMENT_NODE=1,gvjsn=ghjnszv.ATTRIBUTE_NODE=2,gwo0e4_=ghjnszv.TEXT_NODE=3,gwe_u2g=ghjnszv.CDATA_SECTION_NODE=4,ghznjsv=ghjnszv.ENTITY_REFERENCE_NODE=5,gs1xfn=ghjnszv.ENTITY_NODE=6,gq8tkd6=ghjnszv.PROCESSING_INSTRUCTION_NODE=7,gewo_4u=ghjnszv.COMMENT_NODE=8,ggw1fu=ghjnszv.DOCUMENT_NODE=9,g$0c=ghjnszv.DOCUMENT_TYPE_NODE=10,gg1we=ghjnszv.DOCUMENT_FRAGMENT_NODE=11,g_4o0cy=ghjnszv.NOTATION_NODE=12,gt5p73={},g$ybc0o={},gk6hq=gt5p73.INDEX_SIZE_ERR=(g$ybc0o[1]="Index size error",1),gqrdt5=gt5p73.DOMSTRING_SIZE_ERR=(g$ybc0o[2]="DOMString size error",2),gt8q=gt5p73.HIERARCHY_REQUEST_ERR=(g$ybc0o[3]="Hierarchy request error",3),gdqkt6=gt5p73.WRONG_DOCUMENT_ERR=(g$ybc0o[4]="Wrong document",4),glmyc=gt5p73.INVALID_CHARACTER_ERR=(g$ybc0o[5]="Invalid character",5),gy0$co=gt5p73.NO_DATA_ALLOWED_ERR=(g$ybc0o[6]="No data allowed",6),ga9lbm=gt5p73.NO_MODIFICATION_ALLOWED_ERR=(g$ybc0o[7]="No modification allowed",7),gshjvz=gt5p73.NOT_FOUND_ERR=(g$ybc0o[8]="Not found",8),g_o04w=gt5p73.NOT_SUPPORTED_ERR=(g$ybc0o[9]="Not supported",9),gzhnsvj=gt5p73.INUSE_ATTRIBUTE_ERR=(g$ybc0o[10]="Attribute in use",10),gc0$ybo=gt5p73.INVALID_STATE_ERR=(g$ybc0o[11]="Invalid state",11),gu1g2fw=gt5p73.SYNTAX_ERR=(g$ybc0o[12]="Syntax error",12),gdhzqk=gt5p73.INVALID_MODIFICATION_ERR=(g$ybc0o[13]="Invalid modification",13),gpr5t73=gt5p73.NAMESPACE_ERR=(g$ybc0o[14]="Invalid namespace",14),gdt6qr=gt5p73.INVALID_ACCESS_ERR=(g$ybc0o[15]="Invalid access",15);glacm$.prototype=Error.prototype,gf2g1xs(gt5p73,glacm$),gweo.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],o=0;o<this.length;o++)gwe4gu(this[o],n,e,t);return n.join("")}},gt35p7.prototype.item=function(e){return gjxf1sn(this),this[e]},g_04oew(gt35p7,gweo),gfsx2g1.prototype={length:0,item:gweo.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new glacm$(gzhnsvj);t=this.getNamedItem(e.nodeName);return gyc0$o(this._ownerElement,this,e,t),t},setNamedItemNS:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new glacm$(gzhnsvj);return t=this.getNamedItemNS(e.namespaceURI,e.localName),gyc0$o(this._ownerElement,this,e,t),t},removeNamedItem:function(e){e=this.getNamedItem(e);return gtr75p(this._ownerElement,this,e),e},removeNamedItemNS:function(e,t){e=this.getNamedItemNS(e,t);return gtr75p(this._ownerElement,this,e),e},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var o=this[n];if(o.localName==t&&o.namespaceURI==e)return o}return null}},go0by.prototype={hasFeature:function(e,t){e=this._features[e.toLowerCase()];return!(!e||t&&!(t in e))},createDocument:function(e,t,n){var o=new gzvk6dh;return o.implementation=this,o.childNodes=new gweo,(o.doctype=n)&&o.appendChild(n),t&&(n=o.createElementNS(e,t),o.appendChild(n)),o},createDocumentType:function(e,t,n){var o=new ggwu_4;return o.name=e,o.nodeName=e,o.publicId=t,o.systemId=n,o}},g$ybmlc.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return g_40yoc(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return galmcb$(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return gwug_4e(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==gwo0e4_&&e.nodeType==gwo0e4_?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return 0<this.attributes.length},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n)for(var o in n)if(n[o]==e)return o;t=t.nodeType==gvjsn?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&e in n)return n[e];t=t.nodeType==gvjsn?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},gf2g1xs(ghjnszv,g$ybmlc),gf2g1xs(ghjnszv,g$ybmlc.prototype),gzvk6dh.prototype={nodeName:"#document",nodeType:ggw1fu,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType!=gg1we)return null==this.documentElement&&e.nodeType==ge_u4wo&&(this.documentElement=e),g_40yoc(this,e,t),e.ownerDocument=this,e;for(var n=e.firstChild;n;){var o=n.nextSibling;this.insertBefore(n,t),n=o}return e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),galmcb$(this,e)},importNode:function(e,t){return gcl0y(this,e,t)},getElementById:function(t){var n=null;return gjvsf(this.documentElement,function(e){return e.nodeType==ge_u4wo&&e.getAttribute("id")==t?(n=e,!0):void 0}),n},createElement:function(e){var t=new gb0oc;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new gweo,(t.attributes=new gfsx2g1)._ownerElement=t},createDocumentFragment:function(){var e=new gq6kzd8;return e.ownerDocument=this,e.childNodes=new gweo,e},createTextNode:function(e){var t=new gjvxhsn;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new gg1wfu2;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new gco0y_;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new gzdq6h;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new g_4o;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new ghjvnk;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new gb0oc,o=t.split(":"),r=n.attributes=new gfsx2g1;return n.childNodes=new gweo,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==o.length?(n.prefix=o[0],n.localName=o[1]):n.localName=t,r._ownerElement=n},createAttributeNS:function(e,t){var n=new g_4o,o=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==o.length?(n.prefix=o[0],n.localName=o[1]):n.localName=t,n}},g_04oew(gzvk6dh,g$ybmlc),gb0oc.prototype={nodeType:ge_u4wo,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){e=this.getAttributeNode(e);return e&&e.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){e=this.ownerDocument.createAttribute(e);e.value=e.nodeValue=""+t,this.setAttributeNode(e)},removeAttribute:function(e){e=this.getAttributeNode(e);e&&this.removeAttributeNode(e)},appendChild:function(e){return e.nodeType===gg1we?this.insertBefore(e,null):g_4geu(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){e=this.getAttributeNodeNS(e,t);e&&this.removeAttributeNode(e)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){e=this.getAttributeNodeNS(e,t);return e&&e.value||""},setAttributeNS:function(e,t,n){e=this.ownerDocument.createAttributeNS(e,t);e.value=e.nodeValue=""+n,this.setAttributeNode(e)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(o){return new gt35p7(this,function(t){var n=[];return gjvsf(t,function(e){e===t||e.nodeType!=ge_u4wo||"*"!==o&&e.tagName!=o||n.push(e)}),n})},getElementsByTagNameNS:function(o,r){return new gt35p7(this,function(t){var n=[];return gjvsf(t,function(e){e===t||e.nodeType!==ge_u4wo||"*"!==o&&e.namespaceURI!==o||"*"!==r&&e.localName!=r||n.push(e)}),n})}},gzvk6dh.prototype.getElementsByTagName=gb0oc.prototype.getElementsByTagName,gzvk6dh.prototype.getElementsByTagNameNS=gb0oc.prototype.getElementsByTagNameNS,g_04oew(gb0oc,g$ybmlc),g_4o.prototype.nodeType=gvjsn,g_04oew(g_4o,g$ybmlc),gqkt.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(){throw new Error(g$ybc0o[gt8q])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){var o=this.data.substring(0,e),e=this.data.substring(e+t);this.nodeValue=this.data=n=o+n+e,this.length=n.length}},g_04oew(gqkt,g$ybmlc),gjvxhsn.prototype={nodeName:"#text",nodeType:gwo0e4_,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;e=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling),e}},g_04oew(gjvxhsn,gqkt),gg1wfu2.prototype={nodeName:"#comment",nodeType:gewo_4u},g_04oew(gg1wfu2,gqkt),gco0y_.prototype={nodeName:"#cdata-section",nodeType:gwe_u2g},g_04oew(gco0y_,gqkt),ggwu_4.prototype.nodeType=g$0c,g_04oew(ggwu_4,g$ybmlc),gguf21w.prototype.nodeType=g_4o0cy,g_04oew(gguf21w,g$ybmlc),gr86qt.prototype.nodeType=gs1xfn,g_04oew(gr86qt,g$ybmlc),ghjvnk.prototype.nodeType=ghznjsv,g_04oew(ghjvnk,g$ybmlc),gq6kzd8.prototype.nodeName="#document-fragment",gq6kzd8.prototype.nodeType=gg1we,g_04oew(gq6kzd8,g$ybmlc),gzdq6h.prototype.nodeType=gq8tkd6,g_04oew(gzdq6h,g$ybmlc),gxvhns.prototype.serializeToString=function(e,t,n){return gb04ocy.call(e,t,n)},g$ybmlc.prototype.toString=gb04ocy;try{Object.defineProperty&&(Object.defineProperty(gt35p7.prototype,"length",{get:function(){return gjxf1sn(this),this.$$length}}),Object.defineProperty(g$ybmlc.prototype,"textContent",{get:function(){return g_oe4wu(this)},set:function(e){switch(this.nodeType){case ge_u4wo:case gg1we:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),gca$ml=function(e,t,n){e["$$"+t]=n})}catch(e){}exports.DOMImplementation=go0by,exports.XMLSerializer=gxvhns;