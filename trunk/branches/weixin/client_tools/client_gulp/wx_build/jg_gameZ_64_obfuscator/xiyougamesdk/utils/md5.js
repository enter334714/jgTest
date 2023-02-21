"use strict";function hex_md5(n){Array();for(var d,r,e,t,o=ConvertToWordArray(n=Utf8Encode(n)),i=1732584193,H=4023233417,F=2562383102,G=271733878,I=0;I<o.length;I+=16)i=FF(d=i,r=H,e=F,t=G,o[I+0],7,3614090360),G=FF(G,i,H,F,o[I+1],12,3905402710),F=FF(F,G,i,H,o[I+2],17,606105819),H=FF(H,F,G,i,o[I+3],22,3250441966),i=FF(i,H,F,G,o[I+4],7,4118548399),G=FF(G,i,H,F,o[I+5],12,1200080426),F=FF(F,G,i,H,o[I+6],17,2821735955),H=FF(H,F,G,i,o[I+7],22,4249261313),i=FF(i,H,F,G,o[I+8],7,1770035416),G=FF(G,i,H,F,o[I+9],12,2336552879),F=FF(F,G,i,H,o[I+10],17,4294925233),H=FF(H,F,G,i,o[I+11],22,2304563134),i=FF(i,H,F,G,o[I+12],7,1804603682),G=FF(G,i,H,F,o[I+13],12,4254626195),F=FF(F,G,i,H,o[I+14],17,2792965006),i=GG(i,H=FF(H,F,G,i,o[I+15],22,1236535329),F,G,o[I+1],5,4129170786),G=GG(G,i,H,F,o[I+6],9,3225465664),F=GG(F,G,i,H,o[I+11],14,643717713),H=GG(H,F,G,i,o[I+0],20,3921069994),i=GG(i,H,F,G,o[I+5],5,3593408605),G=GG(G,i,H,F,o[I+10],9,38016083),F=GG(F,G,i,H,o[I+15],14,3634488961),H=GG(H,F,G,i,o[I+4],20,3889429448),i=GG(i,H,F,G,o[I+9],5,568446438),G=GG(G,i,H,F,o[I+14],9,3275163606),F=GG(F,G,i,H,o[I+3],14,4107603335),H=GG(H,F,G,i,o[I+8],20,1163531501),i=GG(i,H,F,G,o[I+13],5,2850285829),G=GG(G,i,H,F,o[I+2],9,4243563512),F=GG(F,G,i,H,o[I+7],14,1735328473),i=HH(i,H=GG(H,F,G,i,o[I+12],20,2368359562),F,G,o[I+5],4,4294588738),G=HH(G,i,H,F,o[I+8],11,2272392833),F=HH(F,G,i,H,o[I+11],16,1839030562),H=HH(H,F,G,i,o[I+14],23,4259657740),i=HH(i,H,F,G,o[I+1],4,2763975236),G=HH(G,i,H,F,o[I+4],11,1272893353),F=HH(F,G,i,H,o[I+7],16,4139469664),H=HH(H,F,G,i,o[I+10],23,3200236656),i=HH(i,H,F,G,o[I+13],4,681279174),G=HH(G,i,H,F,o[I+0],11,3936430074),F=HH(F,G,i,H,o[I+3],16,3572445317),H=HH(H,F,G,i,o[I+6],23,76029189),i=HH(i,H,F,G,o[I+9],4,3654602809),G=HH(G,i,H,F,o[I+12],11,3873151461),F=HH(F,G,i,H,o[I+15],16,530742520),i=II(i,H=HH(H,F,G,i,o[I+2],23,3299628645),F,G,o[I+0],6,4096336452),G=II(G,i,H,F,o[I+7],10,1126891415),F=II(F,G,i,H,o[I+14],15,2878612391),H=II(H,F,G,i,o[I+5],21,4237533241),i=II(i,H,F,G,o[I+12],6,1700485571),G=II(G,i,H,F,o[I+3],10,2399980690),F=II(F,G,i,H,o[I+10],15,4293915773),H=II(H,F,G,i,o[I+1],21,2240044497),i=II(i,H,F,G,o[I+8],6,1873313359),G=II(G,i,H,F,o[I+15],10,4264355552),F=II(F,G,i,H,o[I+6],15,2734768916),H=II(H,F,G,i,o[I+13],21,1309151649),i=II(i,H,F,G,o[I+4],6,4149444226),G=II(G,i,H,F,o[I+11],10,3174756917),F=II(F,G,i,H,o[I+2],15,718787259),H=II(H,F,G,i,o[I+9],21,3951481745),i=AddUnsigned(i,d),H=AddUnsigned(H,r),F=AddUnsigned(F,e),G=AddUnsigned(G,t);return(WordToHex(i)+WordToHex(H)+WordToHex(F)+WordToHex(G)).toUpperCase()}function RotateLeft(n,d){return n<<d|n>>>32-d}function AddUnsigned(n,d){var r=2147483648&n,e=2147483648&d,t=1073741824&n,o=1073741824&d,n=(1073741823&n)+(1073741823&d);return t&o?2147483648^n^r^e:t|o?1073741824&n?3221225472^n^r^e:1073741824^n^r^e:n^r^e}function F(n,d,r){return n&d|~n&r}function G(n,d,r){return n&r|d&~r}function H(n,d,r){return n^d^r}function I(n,d,r){return d^(n|~r)}function FF(n,d,r,e,t,o,i){return n=AddUnsigned(n,AddUnsigned(AddUnsigned(F(d,r,e),t),i)),AddUnsigned(RotateLeft(n,o),d)}function GG(n,d,r,e,t,o,i){return n=AddUnsigned(n,AddUnsigned(AddUnsigned(G(d,r,e),t),i)),AddUnsigned(RotateLeft(n,o),d)}function HH(n,d,r,e,t,o,i){return n=AddUnsigned(n,AddUnsigned(AddUnsigned(H(d,r,e),t),i)),AddUnsigned(RotateLeft(n,o),d)}function II(n,d,r,e,t,o,i){return n=AddUnsigned(n,AddUnsigned(AddUnsigned(I(d,r,e),t),i)),AddUnsigned(RotateLeft(n,o),d)}function ConvertToWordArray(n){for(var d,r=n.length,e=r+8,e=16*(1+(e-e%64)/64),t=Array(e-1),o=0,i=0;i<r;)o=i%4*8,t[d=(i-i%4)/4]=t[d]|n.charCodeAt(i)<<o,i++;return t[d=(i-i%4)/4]=t[d]|128<<(o=i%4*8),t[e-2]=r<<3,t[e-1]=r>>>29,t}function WordToHex(n){for(var d="",r="",e=0;e<=3;e++)d+=(r="0"+(n>>>8*e&255).toString(16)).substr(r.length-2,2);return d}function Utf8Encode(n){for(var d="",r=0;r<n.length;r++){var e=n.charCodeAt(r);e<128?d+=String.fromCharCode(e):d=127<e&&e<2048?(d+=String.fromCharCode(e>>6|192))+String.fromCharCode(63&e|128):(d=(d+=String.fromCharCode(e>>12|224))+String.fromCharCode(e>>6&63|128))+String.fromCharCode(63&e|128)}return d}module.exports={hex_md5:hex_md5};