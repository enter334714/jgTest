var Z=wx.$L;function hex_md5(f){var n,e,l,d,y,g,r,t,o,i,v=function(n,e){return n(e)},m=function(n,e){return n<e},K=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},h=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},b=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},C=function(n,e){return n+e},w=function(n,e){return n+e},U=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},u=function(n,e){return n+e},I=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},p=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},S=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},x=function(n,e){return n+e},_=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},q=function(n,e){return n+e},H=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},k=function(n,e){return n+e},A=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},O=function(n,e){return n+e},D=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},c=function(n,e){return n+e},G=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},M=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},L=function(n,e){return n+e},W=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},a=function(n,e){return n+e},F=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},T=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},P=function(n,e){return n+e},J=function(n,e){return n+e},B=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},V=function(n,e){return n+e},N=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},s=function(n,e){return n+e},Q=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},R=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},Y=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},X=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},j=function(n,e){return n+e},z=function(n,e){return n+e},E=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},Z=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},$=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},nn=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},en=function(n,e){return n+e},rn=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},tn=function(n,e){return n+e},on=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},un=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},cn=function(n,e){return n+e},an=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},sn=function(n,e){return n+e},fn=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},ln=function(n,e){return n+e},dn=function(n,e,r,t,o,i,u,c){return n(e,r,t,o,i,u,c)},yn=function(n,e,r){return n(e,r)},gn=function(n,e){return n+e},vn=function(n,e){return n(e)},mn=function(n,e){return n(e)},Kn=function(n,e){return n(e)};Array();for(n=ConvertToWordArray(f=v(Utf8Encode,f)),r=1732584193,t=4023233417,o=2562383102,i=271733878,e=0;m(e,n.length);e+=16)t=FF(d=t,o=b(FF,y=o,i=h(FF,g=i,r=K(FF,l=r,t,o,i,n[e+0],7,3614090360),t,o,n[e+1],12,3905402710),r,t,n[C(e,2)],17,606105819),i,r,n[e+3],22,3250441966),r=b(FF,r,t,o,i,n[C(e,4)],7,4118548399),o=U(FF,o,i=b(FF,i,r,t,o,n[w(e,5)],12,1200080426),r,t,n[w(e,6)],17,2821735955),t=S(FF,t=U(FF,t,o,i,r,n[u(e,7)],22,4249261313),o=p(FF,o,i=I(FF,i,r=U(FF,r,t,o,i,n[u(e,8)],7,1770035416),t,o,n[u(e,9)],12,2336552879),r,t,n[e+10],17,4294925233),i,r,n[u(e,11)],22,2304563134),i=GG(i=H(GG,i=FF(i,r=S(FF,r,t,o,i,n[e+12],7,1804603682),t,o,n[u(e,13)],12,4254626195),r=_(GG,r,t=FF(t,o=S(FF,o,i,r,t,n[x(e,14)],17,2792965006),i,r,n[x(e,15)],22,1236535329),o,i,n[q(e,1)],5,4129170786),t,o,n[k(e,6)],9,3225465664),r=G(GG,r,t=D(GG,t,o=A(GG,o,i,r,t,n[O(e,11)],14,643717713),i,r,n[c(e,0)],20,3921069994),o,i,n[c(e,5)],5,3593408605),t,o,n[c(e,10)],9,38016083),o=G(GG,o,i,r,t,n[c(e,15)],14,3634488961),r=GG(r,t=G(GG,t,o,i,r,n[c(e,4)],20,3889429448),o,i,n[e+9],5,568446438),t=F(GG,t,o=W(GG,o,i=M(GG,i,r,t,o,n[L(e,14)],9,3275163606),r,t,n[a(e,3)],14,4107603335),i,r,n[e+8],20,1163531501),r=F(GG,r,t,o,i,n[a(e,13)],5,2850285829),t=HH(t=GG(t,o=T(GG,o,i=F(GG,i,r,t,o,n[a(e,2)],9,4243563512),r,t,n[a(e,7)],14,1735328473),i,r,n[P(e,12)],20,2368359562),o=N(HH,o,i=B(HH,i,r=T(HH,r,t,o,i,n[J(e,5)],4,4294588738),t,o,n[V(e,8)],11,2272392833),r,t,n[V(e,11)],16,1839030562),i,r,n[e+14],23,4259657740),r=HH(r,t,o,i,n[s(e,1)],4,2763975236),i=Q(HH,i,r,t,o,n[s(e,4)],11,1272893353),o=X(HH,o=Q(HH,o,i,r,t,n[s(e,7)],16,4139469664),i=Y(HH,i,r=R(HH,r,t=Q(HH,t,o,i,r,n[s(e,10)],23,3200236656),o,i,n[e+13],4,681279174),t,o,n[s(e,0)],11,3936430074),r,t,n[j(e,3)],16,3572445317),t=X(HH,t,o,i,r,n[j(e,6)],23,76029189),i=HH(i,r=X(HH,r,t,o,i,n[j(e,9)],4,3654602809),t,o,n[z(e,12)],11,3873151461),o=E(HH,o,i,r,t,n[e+15],16,530742520),t=E(HH,t,o,i,r,n[e+2],23,3299628645),o=II(o,i=Z(II,i,r=E(II,r,t,o,i,n[z(e,0)],6,4096336452),t,o,n[e+7],10,1126891415),r,t,n[z(e,14)],15,2878612391),o=II(o,i=rn(II,i,r=nn(II,r,t=$(II,t,o,i,r,n[z(e,5)],21,4237533241),o,i,n[en(e,12)],6,1700485571),t,o,n[en(e,3)],10,2399980690),r,t,n[e+10],15,4293915773),i=II(i,r=on(II,r,t=rn(II,t,o,i,r,n[tn(e,1)],21,2240044497),o,i,n[tn(e,8)],6,1873313359),t,o,n[tn(e,15)],10,4264355552),r=fn(II,r,t=an(II,t,o=un(II,o,i,r,t,n[cn(e,6)],15,2734768916),i,r,n[sn(e,13)],21,1309151649),o,i,n[ln(e,4)],6,4149444226),o=dn(II,o,i=fn(II,i,r,t,o,n[ln(e,11)],10,3174756917),r,t,n[e+2],15,718787259),t=dn(II,t,o,i,r,n[ln(e,9)],21,3951481745),r=yn(AddUnsigned,r,l),t=yn(AddUnsigned,t,d),o=yn(AddUnsigned,o,y),i=yn(AddUnsigned,i,g);return gn(gn(gn(vn(WordToHex,r),mn(WordToHex,t)),Kn(WordToHex,o)),WordToHex(i)).toLowerCase()}function RotateLeft(n,e){var r={};return r.ueOBO=function(n,e){return n<<e},r.ueOBO(n,e)|n>>>32-e}function AddUnsigned(n,e){var r={};r.ujXyn=function(n,e){return n&e},r.OvNAr=function(n,e){return n&e},r.jTgzt=function(n,e){return n+e},r.MCroL=function(n,e){return n&e},r.vvvVM=function(n,e){return n^e},r.VHoyc=function(n,e){return n^e},r.aGCbl=function(n,e){return n|e},r.AGhmD=function(n,e){return n^e},r.VDVBG=function(n,e){return n^e};var t,o,i,u;return i=2147483648&n,u=r.ujXyn(e,2147483648),t=r.OvNAr(n,1073741824),o=r.OvNAr(e,1073741824),n=r.jTgzt(r.MCroL(n,1073741823),r.MCroL(e,1073741823)),r.MCroL(t,o)?r.vvvVM(r.vvvVM(r.VHoyc(n,2147483648),i),u):r.aGCbl(t,o)?r.MCroL(n,1073741824)?r.VHoyc(r.VHoyc(3221225472^n,i),u):r.AGhmD(r.AGhmD(r.VDVBG(n,1073741824),i),u):n^i^u}function F(n,e,r){var t={};t.XpTjg=function(n,e){return n|e},t.sHbRu=function(n,e){return n&e};return t.XpTjg(n&e,t.sHbRu(~n,r))}function G(n,e,r){var t={};t.qnFDd=function(n,e){return n&e};return t.qnFDd(n,r)|t.qnFDd(e,~r)}function H(n,e,r){var t={};t.HjWVF=function(n,e){return n^e};return t.HjWVF(t.HjWVF(n,e),r)}function I(n,e,r){return e^(n|~r)}function FF(n,e,r,t,o,i,u){var c=function(n,e,r){return n(e,r)};var a=AddUnsigned;c=RotateLeft(n=c(AddUnsigned,n,c(AddUnsigned,c(AddUnsigned,function(n,e,r,t){return n(e,r,t)}(F,e,r,t),o),u)),i);return a(c,e)}function GG(n,e,r,t,o,i,u){var c=function(n,e,r){return n(e,r)};var a=AddUnsigned;c=function(n,e,r){return n(e,r)}(RotateLeft,n=c(AddUnsigned,n,c(AddUnsigned,c(AddUnsigned,function(n,e,r,t){return n(e,r,t)}(G,e,r,t),o),u)),i);return a(c,e)}function HH(n,e,r,t,o,i,u){var c=function(n,e,r){return n(e,r)};return n=AddUnsigned(n,AddUnsigned(AddUnsigned(function(n,e,r,t){return n(e,r,t)}(H,e,r,t),o),u)),c(AddUnsigned,RotateLeft(n,i),e)}function II(n,e,r,t,o,i,u){var c=function(n,e,r){return n(e,r)},a=function(n,e,r){return n(e,r)};return n=function(n,e,r){return n(e,r)}(AddUnsigned,n,AddUnsigned(AddUnsigned(I(e,r,t),o),u)),c(AddUnsigned,a(RotateLeft,n,i),e)}function ConvertToWordArray(n){var e={yQeyH:"4|11|12|14|0|8|13|7|6|1|10|9|2|3|5",aYOzu:function(n,e){return n*e},uIdgi:function(n,e){return n+e},ftUeb:function(n,e){return n-e},bZwsl:function(n,e){return n%e},MnXFN:function(n,e){return n-e},NqIiy:function(n,e){return n<<e},nzqSg:function(n,e){return n>>>e},tagZJ:function(n,e){return n<e},qhwKL:function(n,e){return n*e},KSLKd:function(n,e){return n|e},qnhPq:function(n,e){return n(e)},nOnSP:function(n,e){return n<<e},BBHXC:function(n,e){return n*e},YfObq:function(n,e){return n%e}},r=e.yQeyH.split("|"),f=0;for(;;){switch(r[f++]){case"0":var t=e.aYOzu(e.uIdgi(l,1),16);continue;case"1":o=e.ftUeb(i,e.bZwsl(i,4))/4;continue;case"2":u[e.MnXFN(t,2)]=e.NqIiy(c,3);continue;case"3":u[e.MnXFN(t,1)]=e.nzqSg(c,29);continue;case"4":var o;continue;case"5":return u;case"6":for(;e.tagZJ(i,c);)o=e.MnXFN(i,i%4)/4,s=e.qhwKL(e.bZwsl(i,4),8),u[o]=e.KSLKd(u[o],e.NqIiy(n.charCodeAt(i),s)),i++;continue;case"7":var i=0;continue;case"8":var u=e.qnhPq(Array,t-1);continue;case"9":u[o]=e.KSLKd(u[o],e.nOnSP(128,s));continue;case"10":s=e.BBHXC(e.YfObq(i,4),8);continue;case"11":var c=n.length;continue;case"12":var a=e.uIdgi(c,8);continue;case"13":var s=0;continue;case"14":var l=e.MnXFN(a,e.YfObq(a,64))/64;continue}break}}function WordToHex(n){var e={};e.HuoJL=function(n,e){return n<=e},e.CslhV=function(n,e){return n&e},e.IFbmE=function(n,e){return n>>>e},e.jdOgt=function(n,e){return n*e},e.rmFza=function(n,e){return n+e},e.KzlVJ=function(n,e){return n-e};var r,t,o=e,i="",u="";for(t=0;o.HuoJL(t,3);t++)r=o.CslhV(o.IFbmE(n,o.jdOgt(t,8)),255),u=o.rmFza("0",r.toString(16)),i=o.rmFza(i,u.substr(o.KzlVJ(u.length,2),2));return i}function Utf8Encode(n){var e={};e.RWlMx=function(n,e){return n<e},e.OdJmn=function(n,e){return n<e},e.sJnxO=function(n,e){return n<e},e.oMmDr=function(n,e){return n|e},e.uUaMe=function(n,e){return n>>e},e.nkwqT=function(n,e){return n&e},e.tBDgH=function(n,e){return n|e},e.gqXwe=function(n,e){return n|e},e.USxDI=function(n,e){return n&e};var r=e,t="";for(var o=0;r.RWlMx(o,n.length);o++){var i=n.charCodeAt(o);r.OdJmn(i,128)?t+=String.fromCharCode(i):127<i&&r.sJnxO(i,2048)?t=(t+=String.fromCharCode(r.oMmDr(r.uUaMe(i,6),192)))+String.fromCharCode(128|r.nkwqT(i,63)):t=(t=(t+=String.fromCharCode(r.tBDgH(r.uUaMe(i,12),224)))+String.fromCharCode(r.gqXwe(r.USxDI(r.uUaMe(i,6),63),128)))+String.fromCharCode(63&i|128)}return t}function KyBase64(){var n={};n.bJPik="1|3|2|0|4|5",n.tVJdt="2|4|3|1|5|0",n.Cpevx=function(n,e){return n<e},n.YrvYH=function(n,e){return n>>e},n.TuklU=function(n,e){return n|e},n.isDVy=function(n,e){return n&e},n.BzYOX=function(n,e){return n<<e},n.sarsZ=function(n,e){return n+e},n.NVbeL="7|3|0|4|1|2|5|6",n.tJugj=function(n,e){return n|e},n.hvUxd=function(n,e){return n>>e},n.NXpWd=function(n,e){return n!=e},n.Ntphl=function(n,e){return n+e},n.PVpwW=function(n,e){return e<n},n.vHMbW=function(n,e){return n<e},n.xmGUv=function(n,e){return n|e},n.fcyLn=function(n,e){return n&e},n.fKNfw="3|1|2|0|4",n.DOYKo=function(n,e){return n&e},n.LpKLw=function(n,e){return n|e};var r=n,e=r.bJPik.split("|"),t=0;for(;;){switch(e[t++]){case"0":this.decode=function(n){var e=l.gfMou.split("|"),r=0;for(;;){switch(e[r++]){case"0":var t,o;continue;case"1":n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");continue;case"2":for(;l.rQzkq(a,n.length);)i=d.indexOf(n.charAt(a++)),u=d.indexOf(n.charAt(a++)),t=d.indexOf(n.charAt(a++)),o=d.indexOf(n.charAt(a++)),i=l.KpwMY(l.lDvqy(i,2),l.aGnAk(u,4)),u=l.RyqBB(l.BKqLT(u,15)<<4,l.bWUCy(t,2)),c=l.Cwnbm(l.lDvqy(l.BKqLT(t,3),6),o),s+=String.fromCharCode(i),l.UyjBD(t,64)&&(s=l.rCODm(s,String.fromCharCode(u))),64!=o&&(s=l.rCODm(s,String.fromCharCode(c)));continue;case"3":var i,u,c;continue;case"4":var a=0;continue;case"5":s=this._utf8_decode(s);continue;case"6":return s;case"7":var s="";continue}break}};continue;case"1":var l={SXUvt:r.tVJdt,rQzkq:function(n,e){return r.Cpevx(n,e)},CyLMl:function(n,e){return r.YrvYH(n,e)},KpwMY:function(n,e){return r.TuklU(n,e)},BKqLT:function(n,e){return r.isDVy(n,e)},lDvqy:function(n,e){return r.BzYOX(n,e)},yonDb:function(n,e){return r.sarsZ(n,e)},ABrOT:function(n,e){return n+e},gfMou:r.NVbeL,aGnAk:function(n,e){return r.YrvYH(n,e)},RyqBB:function(n,e){return r.tJugj(n,e)},bWUCy:function(n,e){return r.hvUxd(n,e)},Cwnbm:function(n,e){return n|e},UyjBD:function(n,e){return r.NXpWd(n,e)},rCODm:function(n,e){return r.Ntphl(n,e)},PkOLh:function(n,e){return n<e},YfhvE:function(n,e){return r.PVpwW(n,e)},WaUxB:function(n,e){return r.vHMbW(n,e)},LQOSB:function(n,e){return n&e},ICJnU:function(n,e){return r.xmGUv(n,e)},Eiiht:function(n,e){return r.fcyLn(n,e)},WUGvG:r.fKNfw,Nwglb:function(n,e){return r.vHMbW(n,e)},ivSqL:function(n,e){return r.vHMbW(n,e)},LSPPL:function(n,e){return n<e},QPqME:function(n,e){return r.Ntphl(n,e)},RXtYi:function(n,e){return r.DOYKo(n,e)},LRCXi:function(n,e){return r.Ntphl(n,e)},gWsoh:function(n,e){return r.LpKLw(n,e)},DdvxJ:function(n,e){return n|e},ucTJn:function(n,e){return r.DOYKo(n,e)},tJGEP:function(n,e){return r.DOYKo(n,e)}};continue;case"2":this.encode=function(n){var e=l.SXUvt.split("|"),f=0;for(;;){switch(e[f++]){case"0":return r;case"1":n=this._utf8_encode(n);continue;case"2":var r="";continue;case"3":var t=0;continue;case"4":var o,i,u,c,a,s;continue;case"5":for(;l.rQzkq(t,n.length);)c=n.charCodeAt(t++),o=n.charCodeAt(t++),i=n.charCodeAt(t++),u=l.CyLMl(c,2),c=l.KpwMY(l.BKqLT(c,3)<<4,l.CyLMl(o,4)),a=l.lDvqy(15&o,2)|i>>6,s=63&i,isNaN(o)?a=s=64:isNaN(i)&&(s=64),r=l.yonDb(l.ABrOT(l.ABrOT(r,d.charAt(u))+d.charAt(c),d.charAt(a)),d.charAt(s));continue}break}};continue;case"3":var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";continue;case"4":this._utf8_encode=function(n){n=n.replace(/\r\n/g,"\n");var e="";for(var r=0;l.PkOLh(r,n.length);r++){var t=n.charCodeAt(r);t<128?e+=String.fromCharCode(t):l.YfhvE(t,127)&&l.WaUxB(t,2048)?e=(e+=String.fromCharCode(l.Cwnbm(t>>6,192)))+String.fromCharCode(128|l.LQOSB(t,63)):e=(e=(e+=String.fromCharCode(l.ICJnU(l.bWUCy(t,12),224)))+String.fromCharCode(l.ICJnU(63&l.bWUCy(t,6),128)))+String.fromCharCode(l.ICJnU(l.Eiiht(t,63),128))}return e};continue;case"5":this._utf8_decode=function(n){var e=l.WUGvG.split("|"),r=0;for(;;){switch(e[r++]){case"0":for(;l.Nwglb(t,n.length);)o=n.charCodeAt(t),l.ivSqL(o,128)?(i+=String.fromCharCode(o),t++):l.YfhvE(o,191)&&l.LSPPL(o,224)?(c2=n.charCodeAt(l.QPqME(t,1)),i+=String.fromCharCode(l.ICJnU(l.lDvqy(l.RXtYi(o,31),6),l.RXtYi(c2,63))),t+=2):(c2=n.charCodeAt(t+1),c3=n.charCodeAt(l.LRCXi(t,2)),i+=String.fromCharCode(l.gWsoh(l.DdvxJ(l.ucTJn(o,15)<<12,l.lDvqy(l.tJGEP(c2,63),6)),63&c3)),t+=3);continue;case"1":var t=0;continue;case"2":var o=c1=c2=0;continue;case"3":var i="";continue;case"4":return i}break}};continue}break}}var newKyBase64=new KyBase64;function KyHttpParams(n){var s=function(n,e){return n(e)},f=function(n,e){return n+e},l=function(n,e){return n==e},d="sign";this.getRequestParams=function(n){var e="4|2|3|0|1".split("|"),r=0;for(;;){switch(e[r++]){case"0":var t=i;continue;case"1":return t;case"2":var o=JSON.stringify(this.signRequestParams(u));continue;case"3":var i=newKyBase64.encode(o);continue;case"4":var u=Object.assign(n,{time:s(parseInt,(new Date).getTime()/1e3)});continue}break}},this.signRequestParams=function(n){var r=function(n,e){return n===e},t=function(n,e){return f(n,e)},o=function(n,e){return l(n,e)},e=[];for(var i in n)n.hasOwnProperty(i)&&e.push(i);var u=e.sort(function(n,e){return n.localeCompare(e)}),c="",a=n;u.forEach(function(n){var e=a[n];r(typeof e,"boolean")&&(e=t(e,""),a[n]=e),o(n,"sign")&&(e=""),c+=e});u=c+"2Y3SK8UFP9A7L";return a[d]=s(hex_md5,u),a}}var newKyHttpParams=new KyHttpParams,KyGameId="",KyAdid="",KyUrl="https://sdk-dept1.hnguangyi.cn/h5/",KyActivateUrl="ct=wxgame&ac=activate",KyInitUrl="ct=wxgame&ac=activateLogin",KyLoginUrl="ct=wxgame&ac=login",KyRoleUrl="ct=wxgame&ac=role",KyOrderUrl="ct=wxgame&ac=order",KyReplyUrl="ct=wxgame&ac=reply",KyMsgSecCheckUrl="ct=wxgame&ac=msgCheck",KySubscribeConfigUrl="ct=wxgame&ac=subscribeConfig",KyBody="okgame",KyPlatform="okgame_mp",KyOs="wxgame",KyVersion="v2.2",KyOperators=4,KyDeviceInfo={},KyUid="",KyQuery={},KySubscribeConfig={},KyActivateStorage="KyActivate",WxPlatform="",WxOrderCustomerTitle="\u7ee7\u7eed\u6e38\u620f",WxOrderCustomerUrl="",WxDownloadCustomerTitle="\u9886\u53d6\u793c\u5305",WxDownloadCustomerUrl="",WxShareTitle="\u5206\u4eab\u6587\u6848",WxShareUrl="";export default class KyCommonInfo{constructor(n,e){var r={};r.wZVlL="[ky]reply_success:",r.HxRcy="[ky]reply_fail:",r.GQzin="KyPayOrderLogs",r.msdKM=function(n,e){return e<=n},r.TVaVq="[ky]scene:",r.VbBJE=function(n,e){return n&&e},r.qFmqU=function(n,e){return n!=e},r.fUoJj="undefined",r.GqgML=function(n,e){return n!=e},r.ZfcOv=function(n,e){return n==e},r.SLaTk="adid_",r.WoNcn="[ky]init_change_KyAdid_by_scene:",r.VMCJl="shareAppMessage",r.HGmJQ="shareTimeline";var i=r;KyGameId=n.gameId,KyAdid=n.adid,n.body&&(KyBody=n.body),n.platform&&(KyPlatform=n.platform);r=wx.getLaunchOptionsSync();if(KyQuery=r.query,console.log(i.TVaVq,r.scene,", query:",KyQuery),i.VbBJE(!!r,!!KyQuery)&&(KyQuery.channel&&i.qFmqU(KyQuery.channel,i.fUoJj)&&(KyAdid=KyQuery.channel,console.log("[ky]init_change_KyAdid_by_query:",KyAdid)),KyQuery.scene&&i.GqgML(KyQuery.scene,"undefined"))){let n=KyQuery.scene;i.ZfcOv(n.substring(0,5),i.SLaTk)&&(KyAdid=n.substring(5),console.log(i.WoNcn,KyAdid))}this.Init(e),this.SubscribeConfig();n={};n.withShareTicket=!0,n.menus=[i.VMCJl,i.HGmJQ],wx.showShareMenu(n);var u=this;setInterval(function(){var n={};n.qaxWX=function(n,e){return n<e},n.BzHWq=i.GQzin;var o=n;let e=wx.getStorageSync(i.GQzin)||[];if(i.msdKM(e.length,1)){let r=e[0].num,t=e[0].data;e.splice(0,1),wx.setStorageSync(i.GQzin,e);u.UrlRequest(KyReplyUrl,t,function(n){n.state?console.log(i.wZVlL,n):console.log(i.HxRcy,n)},function(n){if(console.log("[ky]reply_fail_net:",n),o.qaxWX(r,10)){r++;let n=wx.getStorageSync(o.BzHWq)||[],e={};e.num=r,e.data=t,n.unshift(KyNewLostOrder),wx.setStorageSync(o.BzHWq,n)}})}},5e3)}["Init"](u=function(n,e){console.log(n,":",e)}){var e="[ky]activate_fail:",c=function(n,e,r){return n(e,r)},r=function(n,e){return n+e},a=function(n,e){return n+e},s="ios",f="and",t="[ky]init_fail_api:",o="channel=";KyDeviceInfo.body=KyBody,KyDeviceInfo.platform=KyPlatform,KyDeviceInfo.gameid=KyGameId,KyDeviceInfo.adid=KyAdid,KyDeviceInfo.sdkversion=KyVersion,KyDeviceInfo.os=KyOs,KyDeviceInfo.operators=KyOperators,KyQuery&&(KyQuery.gdt_vid&&(KyDeviceInfo.gdtvid=KyQuery.gdt_vid),KyQuery.weixinadinfo&&(KyDeviceInfo.weixinadinfo=KyQuery.weixinadinfo)),wx.onShow(function(n){n=n.query;n&&((KyQuery=n).channel&&(KyDeviceInfo.adid=KyAdid=KyQuery.channel),KyQuery.gdt_vid&&(KyDeviceInfo.gdtvid=KyQuery.gdt_vid),KyQuery.weixinadinfo&&(KyDeviceInfo.weixinadinfo=KyQuery.weixinadinfo))});var l=this;wx.getSystemInfo({success:function(n){var t="[ky]init_success:",o=function(n,e,r){return c(n,e,r)},i="[ky]init_fail:";KyDeviceInfo.appversion=n.version,KyDeviceInfo.osversion=n.system,KyDeviceInfo.lang=n.language,KyDeviceInfo.brand=r(r(n.brand,"#"),n.model),WxPlatform=n.platform,KyDeviceInfo.os=KyOs=a(KyOs,"_")+(WxPlatform==s?s:f),wx.getStorageSync(KyActivateStorage)||l.UrlRequest(KyActivateUrl,KyDeviceInfo,function(n){n.state?(console.log("[ky]activate_success:",n),wx.setStorageSync(KyActivateStorage,1)):console.log(e,n)},function(n){console.log("[ky]activate_fail_net:",n)});l.UrlRequest(KyInitUrl,KyDeviceInfo,function(n){var e,r;n.state?(console.log(t,n),(e=n.data).iconurl&&(WxOrderCustomerUrl=e.iconurl),e.downloadurl&&(WxDownloadCustomerUrl=e.downloadurl),(r={}).params=e.params,r.os=WxPlatform,o(u,"init",r),l.Login(u)):console.log(i,n)},function(n){console.log("[ky]init_fail_net:",n)})},fail:function(n){console.log(t,n)}}),wx.onShareAppMessage(function(){var n={};return n.imageUrl=WxOrderCustomerUrl,n.query=o+KyAdid,n}),wx.onShareTimeline(function(){var n={};return n.imageUrl=WxOrderCustomerUrl,n.query=o+KyAdid,n})}["Login"](t=function(n,e){console.log(n,":",e)}){var o="[ky]login_success:",i=function(n,e,r){return n(e,r)},u="[ky]login_fail:",r="[ky]login_fail_net:",e="[ky]login_fail_api:",c=this;wx.login({success:function(n){var e={};e.code=n.code;n=Object.assign(e,KyDeviceInfo);c.UrlRequest(KyLoginUrl,n,function(n){var e,r;n.state?(console.log(o,n),e=n.data,KyUid=e.rid,e.registeradid&&(KyDeviceInfo.adid=KyAdid=e.registeradid),(r={}).uid=e.rid,r.time=e.time,r.username=e.username,r.vsign=e.vsign,i(t,"login",r)):console.log(u,n)},function(n){console.log(r,n)})},fail:function(n){console.log(e,n)}})}["Role"](n){var e={};e.gRGFI="[ky]role_fail:",e.KpaPn="[ky]role_fail_net:";var r=e;let t=Object.assign(n,KyDeviceInfo);t.rid=KyUid;this.UrlRequest(KyRoleUrl,t,function(n){n.state?console.log("[ky]role_success:",n):console.log(r.gRGFI,n)},function(n){console.log(r.KpaPn,n)})}["Pay"](n){var t={BvSfq:"[ky]pay_api_fail:",aHuwI:"none",zuurW:"[ky]reply_success:",wEhNN:"[ky]reply_fail:",KpjDP:function(n,e,r){return n(e,r)},SIkdA:"[ky]order_success:",yFrVU:function(n,e){return n==e},aOYOE:"order_",tMwbx:function(n,e){return n+e},uOtDj:"android",iMoVI:"CNY",prYvW:"[ky]order_channel_fail:",JwHzU:function(n,e,r){return n(e,r)},JMLps:"[ky]order_fail:"},u=this;let e=Object.assign(n,KyDeviceInfo);e.rid=KyUid,e.deviceos=WxPlatform;this.UrlRequest(KyOrderUrl,e,function(r){var i={KKQWq:t.aHuwI,zMYXo:t.zuurW,ETmEo:t.wEhNN,DTqsf:function(n,e,r){return t.KpjDP(n,e,r)}};if(r.state){console.log(t.SIkdA,r);let n=r.data,e=n.cno;t.yFrVU(n.channel,2)?wx.openCustomerServiceConversation({sessionFrom:t.aOYOE+e,showMessageCard:!0,sendMessageTitle:WxOrderCustomerTitle,sendMessagePath:t.tMwbx(t.aOYOE,e),sendMessageImg:WxOrderCustomerUrl}):t.yFrVU(n.channel,1)?wx.requestMidasPayment({mode:"game",env:n.env,offerId:n.offer,platform:t.uOtDj,currencyType:t.iMoVI,buyQuantity:n.quantity,zoneId:"1",success(){var n={};n.fqmfS="KyPayOrderLogs";var t=n;let o={};o.gameid=KyGameId,o.adid=KyAdid,o.cno=e,o.rid=KyUid;u.UrlRequest(KyReplyUrl,o,function(e){var n={};n.aGbyB=i.KKQWq;var r=n;e.state?console.log(i.zMYXo,e):(console.log(i.ETmEo,e),i.DTqsf(setTimeout,function(){var n={};n.title=e.msg,n.icon=r.aGbyB,n.duration=3e3,wx.showToast(n)},200))},function(n){console.log("[ky]reply_fail_net:",n);let e=wx.getStorageSync(t.fqmfS)||[],r={};r.data=o,r.num=0,e.unshift(r),wx.setStorageSync(t.fqmfS,e)})},fail(n){console.log(t.BvSfq,n)}}):(console.log(t.prYvW,r),t.JwHzU(setTimeout,function(){var n={};n.title="\u6253\u5f00\u652f\u4ed8\u5931\u8d25",n.icon="none",n.duration=3e3,wx.showToast(n)},200))}else{console.log(t.JMLps,r);var n={};n.title=r.msg,n.icon=t.aHuwI,n.duration=3e3,wx.showToast(n)}},function(n){console.log("[ky]order_fail_net:",n)})}["Download"](){var n={};n.tTxIa=function(n,e){return n+e},n.ymmma="download_",n.ktvom=function(n,e){return n+e};wx.openCustomerServiceConversation({sessionFrom:n.tTxIa(n.tTxIa(n.tTxIa(n.ymmma,KyAdid),"_"),KyUid),showMessageCard:!0,sendMessageTitle:WxDownloadCustomerTitle,sendMessagePath:n.ktvom(n.ktvom(n.ymmma,KyAdid)+"_",KyUid),sendMessageImg:WxDownloadCustomerUrl})}["MsgSecCheck"](n,r=function(n,e){console.log(n,":",e)}){var t={ZVtbX:"[ky]msgSecCheck_success:",NpMkW:function(n,e,r){return n(e,r)},gsnMb:"[ky]msgSecCheck_fail:",tIZjj:function(n,e,r){return n(e,r)},vDrqI:"[ky]msgSecCheck_fail_net:"};n=Object.assign(n,KyDeviceInfo);this.UrlRequest(KyMsgSecCheckUrl,n,function(n){let e={};e.code=n.code,e.msg=n.msg,n.state?(console.log(t.ZVtbX,n),t.NpMkW(r,"msg_check_success",e)):(console.log(t.gsnMb,n),t.tIZjj(r,"msg_check_fail",e))},function(n){console.log(t.vDrqI,n)})}["GetSubscriptions"](i=function(n,e){console.log(n,":",e)}){var n={};n.GbQFJ=function(n,e){return n==e},n.CHZgt="accept",n.LfGNT="[ky]getSubscriptions_success:",n.solpH="get_subscriptions_success",n.mempU="[ky]getSubscriptions_fail:";var u=n;wx.getSetting({withSubscriptions:!0,success(n){let e=n.subscriptionsSetting.itemSettings,r={};for(var t in KySubscribeConfig){var o=KySubscribeConfig[t];u.GbQFJ(e[o],u.CHZgt)?r[t]=!0:r[t]=!1}console.log(u.LfGNT,r),i(u.solpH,r)},fail(n){console.log(u.mempU,n)}})}["Subscribe"](n,t=function(n,e){console.log(n,":",e)}){var o=function(n,e){return n==e},i="accept",u=function(n,e,r){return n(e,r)},e=function(n,e,r){return n(e,r)},r="subscribe_fail",f="[ky]subscribe_fail:",l=function(n,e){return e<n},d="subscribe_code_fail",y=function(n,e){return e<n},g="subscribe_code_data_fail",v="[ky]subscribe_code_data_fail:";let c=[],a=[],s={};n.forEach(function(n,e){KySubscribeConfig.hasOwnProperty(n)?(c.push(KySubscribeConfig[n]),s[n]=KySubscribeConfig[n]):a.push(n)}),l(a.length,0)?(t(d,a),console.log("[ky]subscribe_code_fail:",a)):y(c.length,0)?wx.requestSubscribeMessage({tmplIds:c,success(n){for(var e in s){var r=s[e];n.hasOwnProperty(r)&&o(n[r],i)?s[e]=!0:s[e]=!1}u(t,"subscribe_success",s),console.log("[ky]subscribe_success:",n)},fail(n){e(t,r,n),console.log(f,n)}}):(t(g,[]),console.log(v,[]))}["SubscribeConfig"](){var n={};n.gHxuZ="[ky]subscribeConfig_fail_net:";var e=n;n=Object.assign({},KyDeviceInfo);this.UrlRequest(KySubscribeConfigUrl,n,function(n){n.state?(console.log("[ky]subscribeConfig_success:",n),KySubscribeConfig=n.data.config):console.log("[ky]subscribeConfig_fail:",n)},function(n){console.log(e.gHxuZ,n)})}["UrlRequest"](n,e,r=function(n){console.log(n)},t=function(n){console.log(n)}){var o={};o.EWbfp=function(n,e){return n+e},o.tLbNm="POST",o.oXKJe="application/x-www-form-urlencoded";wx.request({url:o.EWbfp(KyUrl,"?")+n,data:{data:newKyHttpParams.getRequestParams(JSON.parse(JSON.stringify(e)))},method:o.tLbNm,header:{"content-type":o.oXKJe},success:function(n){r(n.data)},fail:function(n){t(n)}})}}