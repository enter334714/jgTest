var D=wx.$b;function b$ae5f(){}function bcvwhp(r,l,b,a,n){function tiymuz(e){var t=e.slice(1,-1);return t in b?b[t]:"#"===t.charAt(0)?65535<(t=parseInt(t.substr(1).replace("x","0x")))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):String.fromCharCode(t):(n.error("entity not found:"+e),e)}function q7o(e){var t;c<e&&(t=r.substring(c,e).replace(/&#?\w+;/g,tiymuz),s&&lo6k7(c),a.characters(t,0,e-c),c=e)}function lo6k7(e,t){for(;d<=e&&(t=f.exec(r));)m=t.index,d=m+t[0].length,s.lineNumber++;s.columnNumber=e-m+1}for(var m=0,d=0,f=/.*(?:\r\n?|\n)|.*$/g,s=a.locator,h=[{currentNSMap:l}],g={},c=0;;){try{var e=r.indexOf("<",c);var w,p;if(e<0)return void(r.substr(c).match(/^\s*$/)||(p=(w=a.doc).createTextNode(r.substr(c)),w.appendChild(p),a.currentElement=p));switch(c<e&&q7o(e),r.charAt(e+1)){case"/":var t=r.indexOf(">",e+3),i=r.substring(e+2,t),o=h.pop();t<0?(i=r.substring(e+2).replace(/[\s<].*/,""),n.error("end tag name: "+i+" is not complete:"+o.tagName),t=e+1+i.length):i.match(/\s</)&&(i=i.replace(/[\s<].*/,""),n.error("end tag name: "+i+" maybe not complete"),t=e+1+i.length);var x=o.localNSMap,v=o.tagName==i;if(v||o.tagName&&o.tagName.toLowerCase()==i.toLowerCase()){if(a.endElement(o.uri,o.localName,i),x)for(var k in x)a.endPrefixMapping(k);v||n.fatalError("end tag name: "+i+" is not match the current start tagName:"+o.tagName)}else h.push(o);t++;break;case"?":s&&lo6k7(e),t=bqxk7(r,e,a);break;case"!":s&&lo6k7(e),t=bx7o(r,e,a,n);break;default:s&&lo6k7(e);var u=new bvwcpt1,N=h[h.length-1].currentNSMap,t=bczyum(r,e,u,N,tiymuz,n),$=u.length;if(!u.closed&&b_2rpvh(r,t,u.tagName,g)&&(u.closed=!0,b.nbsp||n.warning("unclosed xml attribute")),s&&$){for(var j=btm1cwz(s,{}),q=0;q<$;q++){var F=u[q];lo6k7(F.offset),F.locator=btm1cwz(s,{})}a.locator=j,bji0(u,a,N)&&h.push(u),a.locator=s}else bji0(u,a,N)&&h.push(u);"http://www.w3.org/1999/xhtml"!==u.uri||u.closed?t++:t=bcmy1(r,t,u.tagName,tiymuz,a)}}catch(e){n.error("element parse error: "+e),t=-1}c<t?c=t:q7o(Math.max(e,c)+1)}}function btm1cwz(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function bczyum(e,t,r,l,a,n){for(var s,c=++t,i=bkglxq;;){var o=e.charAt(c);switch(o){case"=":if(i===bnj50$)s=e.slice(t,c),i=bkox;else{if(i!==bnj45i)throw new Error("attribute equal must after attrName");i=bkox}break;case"'":case'"':if(i===bkox||i===bnj50$){if(i===bnj50$&&(n.warning('attribute value must after "="'),s=e.slice(t,c)),!(0<(c=e.indexOf(o,t=c+1))))throw new Error("attribute value no end '"+o+"' match");u=e.slice(t,c).replace(/&#?\w+;/g,a),r.add(s,u,t-1),i=bs928dr}else{if(i!=blxkgq)throw new Error('attribute value must after "="');u=e.slice(t,c).replace(/&#?\w+;/g,a),r.add(s,u,t),n.warning('attribute "'+s+'" missed start quot('+o+")!!"),t=c+1,i=bs928dr}break;case"/":switch(i){case bkglxq:r.setTagName(e.slice(t,c));case bs928dr:case bvh1_:case bwtm:i=bwtm,r.closed=!0;case blxkgq:case bnj50$:case bnj45i:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return n.error("unexpected end of input"),i==bkglxq&&r.setTagName(e.slice(t,c)),c;case">":switch(i){case bkglxq:r.setTagName(e.slice(t,c));case bs928dr:case bvh1_:case bwtm:break;case blxkgq:case bnj50$:"/"===(u=e.slice(t,c)).slice(-1)&&(r.closed=!0,u=u.slice(0,-1));case bnj45i:i===bnj45i&&(u=s),i==blxkgq?(n.warning('attribute "'+u+'" missed quot(")!!'),r.add(s,u.replace(/&#?\w+;/g,a),t)):("http://www.w3.org/1999/xhtml"===l[""]&&u.match(/^(?:disabled|checked|selected)$/i)||n.warning('attribute "'+u+'" missed value!! "'+u+'" instead!!'),r.add(u,u,t));break;case bkox:throw new Error("attribute value missed!!")}return c;case"\x80":o=" ";default:if(o<=" ")switch(i){case bkglxq:r.setTagName(e.slice(t,c)),i=bvh1_;break;case bnj50$:s=e.slice(t,c),i=bnj45i;break;case blxkgq:var u=e.slice(t,c).replace(/&#?\w+;/g,a);n.warning('attribute "'+u+'" missed quot(")!!'),r.add(s,u,t);case bs928dr:i=bvh1_}else switch(i){case bnj45i:r.tagName,"http://www.w3.org/1999/xhtml"===l[""]&&s.match(/^(?:disabled|checked|selected)$/i)||n.warning('attribute "'+s+'" missed value!! "'+s+'" instead2!!'),r.add(s,s,t),t=c,i=bnj50$;break;case bs928dr:n.warning('attribute space is required"'+s+'"!!');case bvh1_:i=bnj50$,t=c;break;case bkox:i=blxkgq,t=c;break;case bwtm:throw new Error("elements closed character '/' and '>' must be connected to")}}c++}}function bji0(e,l,t){for(var r=e.tagName,a=null,n=e.length;n--;){var s=e[n],c=s.qName,b=s.value;var i;c=0<(o=c.indexOf(":"))?(u=s.prefix=c.slice(0,o),i=c.slice(o+1),"xmlns"===u&&i):(u=null,"xmlns"===(i=c)&&""),s.localName=i,!1!==c&&(null==a&&(a={},b$0j54(t,t={})),t[c]=a[c]=b,s.uri="http://www.w3.org/2000/xmlns/",l.startPrefixMapping(c,b))}for(n=e.length;n--;)(u=(s=e[n]).prefix)&&("xml"===u&&(s.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==u&&(s.uri=t[u||""]));var o;i=0<(o=r.indexOf(":"))?(u=e.prefix=r.slice(0,o),e.localName=r.slice(o+1)):(u=null,e.localName=r);var m=e.uri=t[u||""];if(l.startElement(m,i,r,e),!e.closed)return e.currentNSMap=t,e.localNSMap=a,!0;if(l.endElement(m,i,r),a)for(var u in a)l.endPrefixMapping(u)}function bcmy1(e,t,r,a,n){if(/^(?:script|textarea)$/i.test(r)){var s=e.indexOf("</"+r+">",t),e=e.substring(t+1,s);if(/[&<]/.test(e))return/^script$/i.test(r)||(e=e.replace(/&#?\w+;/g,a)),n.characters(e,0,e.length),s}return t+1}function b_2rpvh(e,t,r,a){var n=a[r];return null==n&&((n=e.lastIndexOf("</"+r+">"))<t&&(n=e.lastIndexOf("</"+r)),a[r]=n),n<t}function b$0j54(e,t){for(var r in e)t[r]=e[r]}function bx7o(e,t,r,a){var n=e.charAt(t+2);if("-"===n)return"-"!==e.charAt(t+3)?-1:t<(s=e.indexOf("--\x3e",t+4))?(r.comment(e,t+4,s-t-4),s+3):(a.error("Unclosed comment"),-1);if("CDATA["==e.substr(t+3,6))return s=e.indexOf("]]>",t+9),r.startCDATA(),r.characters(e,t+9,s-t-9),r.endCDATA(),s+3;n=bwc1pm(e,t),a=n.length;var s;return 1<a&&/!doctype/i.test(n[0][0])?(s=n[1][0],e=3<a&&/^public$/i.test(n[2][0])&&n[3][0],t=4<a&&n[4][0],n=n[a-1],r.startDTD(s,e&&e.replace(/^(['"])(.*?)\1$/,"$2"),t&&t.replace(/^(['"])(.*?)\1$/,"$2")),r.endDTD(),n.index+n[0].length):-1}function bqxk7(e,t,r){var a=e.indexOf("?>",t);return a&&(e=e.substring(t,a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/))?(e[0].length,r.processingInstruction(e[1],e[2]),a+2):-1}function bvwcpt1(){}function bj04in(e,t){return e.__proto__=t,e}function bwc1pm(e,t){var r,a=[],n=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(n.lastIndex=t,n.exec(e);r=n.exec(e);)if(a.push(r),r[1])return a}var bn5$4a=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,bd9so86=new RegExp("[\\-\\.0-9"+bn5$4a.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),bmzc1t=new RegExp("^"+bn5$4a.source+bd9so86.source+"*(?::"+bn5$4a.source+bd9so86.source+"*)?$"),bkglxq=0,bnj50$=1,bnj45i=2,bkox=3,blxkgq=4,bs928dr=5,bvh1_=6,bwtm=7;b$ae5f.prototype={parse:function(e,t,r){var a=this.domBuilder;a.startDocument(),b$0j54(t,t={}),bcvwhp(e,t,r,a,this.errorHandler),a.endDocument()}},bvwcpt1.prototype={setTagName:function(e){if(!bmzc1t.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},add:function(e,t,r){if(!bmzc1t.test(e))throw new Error("invalid attribute:"+e);this[this.length++]={qName:e,value:t,offset:r}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},bj04in({},bj04in.prototype)instanceof bj04in||(bj04in=function(e,t){function _s9h(){}for(t in _s9h.prototype=t,_s9h=new _s9h,e)_s9h[t]=e[t];return _s9h}),exports.XMLReader=b$ae5f;