var m=wx.$g;!function(t){"use strict";function otf43(t,n){var e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function r2jz$6(t,n,e,r,o,u){return otf43((n=otf43(otf43(n,t),otf43(r,u)))<<o|n>>>32-o,e)}function _p50i(t,n,e,r,o,u,i){return r2jz$6(n&e|~n&r,t,n,o,u,i)}function hwak1x(t,n,e,r,o,u,i){return r2jz$6(n&r|e&~r,t,n,o,u,i)}function egqyv(t,n,e,r,o,u,i){return r2jz$6(n^e^r,t,n,o,u,i)}function u6(t,n,e,r,o,u,i){return r2jz$6(e^(n|~r),t,n,o,u,i)}function m6r$j(t,n){var e,r,o,u,g;t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;var i=1732584193,f=-271733879,a=-1732584194,h=271733878;for(e=0;e<t.length;e+=16)f=u6(f=u6(f=u6(f=u6(f=egqyv(f=egqyv(f=egqyv(f=egqyv(f=hwak1x(f=hwak1x(f=hwak1x(f=hwak1x(f=_p50i(f=_p50i(f=_p50i(f=_p50i(o=f,a=_p50i(u=a,h=_p50i(g=h,i=_p50i(r=i,f,a,h,t[e],7,-680876936),f,a,t[e+1],12,-389564586),i,f,t[e+2],17,606105819),h,i,t[e+3],22,-1044525330),a=_p50i(a,h=_p50i(h,i=_p50i(i,f,a,h,t[e+4],7,-176418897),f,a,t[e+5],12,1200080426),i,f,t[e+6],17,-1473231341),h,i,t[e+7],22,-45705983),a=_p50i(a,h=_p50i(h,i=_p50i(i,f,a,h,t[e+8],7,1770035416),f,a,t[e+9],12,-1958414417),i,f,t[e+10],17,-42063),h,i,t[e+11],22,-1990404162),a=_p50i(a,h=_p50i(h,i=_p50i(i,f,a,h,t[e+12],7,1804603682),f,a,t[e+13],12,-40341101),i,f,t[e+14],17,-1502002290),h,i,t[e+15],22,1236535329),a=hwak1x(a,h=hwak1x(h,i=hwak1x(i,f,a,h,t[e+1],5,-165796510),f,a,t[e+6],9,-1069501632),i,f,t[e+11],14,643717713),h,i,t[e],20,-373897302),a=hwak1x(a,h=hwak1x(h,i=hwak1x(i,f,a,h,t[e+5],5,-701558691),f,a,t[e+10],9,38016083),i,f,t[e+15],14,-660478335),h,i,t[e+4],20,-405537848),a=hwak1x(a,h=hwak1x(h,i=hwak1x(i,f,a,h,t[e+9],5,568446438),f,a,t[e+14],9,-1019803690),i,f,t[e+3],14,-187363961),h,i,t[e+8],20,1163531501),a=hwak1x(a,h=hwak1x(h,i=hwak1x(i,f,a,h,t[e+13],5,-1444681467),f,a,t[e+2],9,-51403784),i,f,t[e+7],14,1735328473),h,i,t[e+12],20,-1926607734),a=egqyv(a,h=egqyv(h,i=egqyv(i,f,a,h,t[e+5],4,-378558),f,a,t[e+8],11,-2022574463),i,f,t[e+11],16,1839030562),h,i,t[e+14],23,-35309556),a=egqyv(a,h=egqyv(h,i=egqyv(i,f,a,h,t[e+1],4,-1530992060),f,a,t[e+4],11,1272893353),i,f,t[e+7],16,-155497632),h,i,t[e+10],23,-1094730640),a=egqyv(a,h=egqyv(h,i=egqyv(i,f,a,h,t[e+13],4,681279174),f,a,t[e],11,-358537222),i,f,t[e+3],16,-722521979),h,i,t[e+6],23,76029189),a=egqyv(a,h=egqyv(h,i=egqyv(i,f,a,h,t[e+9],4,-640364487),f,a,t[e+12],11,-421815835),i,f,t[e+15],16,530742520),h,i,t[e+2],23,-995338651),a=u6(a,h=u6(h,i=u6(i,f,a,h,t[e],6,-198630844),f,a,t[e+7],10,1126891415),i,f,t[e+14],15,-1416354905),h,i,t[e+5],21,-57434055),a=u6(a,h=u6(h,i=u6(i,f,a,h,t[e+12],6,1700485571),f,a,t[e+3],10,-1894986606),i,f,t[e+10],15,-1051523),h,i,t[e+1],21,-2054922799),a=u6(a,h=u6(h,i=u6(i,f,a,h,t[e+8],6,1873313359),f,a,t[e+15],10,-30611744),i,f,t[e+6],15,-1560198380),h,i,t[e+13],21,1309151649),a=u6(a,h=u6(h,i=u6(i,f,a,h,t[e+4],6,-145523070),f,a,t[e+11],10,-1120210379),i,f,t[e+2],15,718787259),h,i,t[e+9],21,-343485551),i=otf43(i,r),f=otf43(f,o),a=otf43(a,u),h=otf43(h,g);return[i,f,a,h]}function bxih(t){var n,e="",r=32*t.length;for(n=0;n<r;n+=8)e+=String.fromCharCode(t[n>>5]>>>n%32&255);return e}function _3fot4(t){var n,e=[];for(e[(t.length>>2)-1]=void 0,n=0;n<e.length;n+=1)e[n]=0;var r=8*t.length;for(n=0;n<r;n+=8)e[n>>5]|=(255&t.charCodeAt(n/8))<<n%32;return e}function dz32(t){var n,e,r="0123456789abcdef",o="";for(e=0;e<t.length;e+=1)n=t.charCodeAt(e),o+=r.charAt(n>>>4&15)+r.charAt(15&n);return o}function ixka1(t){return unescape(encodeURIComponent(t))}function g8sql(t){return bxih(m6r$j(_3fot4(t=ixka1(t)),8*t.length))}function svqcg(t,n){t=ixka1(t),n=ixka1(n);var e,r=_3fot4(t),o=[],u=[];for(o[15]=u[15]=void 0,16<r.length&&(r=m6r$j(r,8*t.length)),e=0;e<16;e+=1)o[e]=909522486^r[e],u[e]=1549556828^r[e];return t=m6r$j(o.concat(_3fot4(n)),512+8*n.length),bxih(m6r$j(u.concat(t),640))}function zdot3(t,n,e){return n?e?svqcg(n,t):dz32(svqcg(n,t)):e?g8sql(t):dz32(g8sql(t))}"function"==typeof define&&define.amd?define(function(){return zdot3}):"object"==typeof module&&module.exports?module.exports=window.md5=zdot3:t.md5=zdot3}(this);