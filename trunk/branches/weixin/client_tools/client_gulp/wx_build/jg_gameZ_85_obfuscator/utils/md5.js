var q1 = wx.f$;
function safe_add(a, b) {
  var c = (65535 & a) + (65535 & b);return (a >> 16) + (b >> 16) + (c >> 16) << 16 | 65535 & c;
}function rol(a, b) {
  return a << b | a >>> 32 - b;
}function cmn(c, d, a, b, e, f) {
  return safe_add(rol(safe_add(safe_add(d, c), safe_add(b, f)), e), a);
}function ff(e, a, b, c, d, f, g) {
  return cmn(a & b | ~a & c, e, a, d, f, g);
}function gg(e, a, b, c, d, f, g) {
  return cmn(a & c | b & ~c, e, a, d, f, g);
}function hh(e, a, b, c, d, f, g) {
  return cmn(a ^ b ^ c, e, a, d, f, g);
}function ii(e, a, b, c, d, f, g) {
  return cmn(b ^ (a | ~c), e, a, d, f, g);
}function coreMD5(e) {
  for (var f = 1732584193, g = -271733879, h = -1732584194, j = 271733878, k = 0; k < e.length; k += 16) {
    var l = f,
        m = g,
        n = h,
        o = j;f = ff(f, g, h, j, e[k + 0], 7, -680876936), j = ff(j, f, g, h, e[k + 1], 12, -389564586), h = ff(h, j, f, g, e[k + 2], 17, 606105819), g = ff(g, h, j, f, e[k + 3], 22, -1044525330), f = ff(f, g, h, j, e[k + 4], 7, -176418897), j = ff(j, f, g, h, e[k + 5], 12, 1200080426), h = ff(h, j, f, g, e[k + 6], 17, -1473231341), g = ff(g, h, j, f, e[k + 7], 22, -45705983), f = ff(f, g, h, j, e[k + 8], 7, 1770035416), j = ff(j, f, g, h, e[k + 9], 12, -1958414417), h = ff(h, j, f, g, e[k + 10], 17, -42063), g = ff(g, h, j, f, e[k + 11], 22, -1990404162), f = ff(f, g, h, j, e[k + 12], 7, 1804603682), j = ff(j, f, g, h, e[k + 13], 12, -40341101), h = ff(h, j, f, g, e[k + 14], 17, -1502002290), g = ff(g, h, j, f, e[k + 15], 22, 1236535329), f = gg(f, g, h, j, e[k + 1], 5, -165796510), j = gg(j, f, g, h, e[k + 6], 9, -1069501632), h = gg(h, j, f, g, e[k + 11], 14, 643717713), g = gg(g, h, j, f, e[k + 0], 20, -373897302), f = gg(f, g, h, j, e[k + 5], 5, -701558691), j = gg(j, f, g, h, e[k + 10], 9, 38016083), h = gg(h, j, f, g, e[k + 15], 14, -660478335), g = gg(g, h, j, f, e[k + 4], 20, -405537848), f = gg(f, g, h, j, e[k + 9], 5, 568446438), j = gg(j, f, g, h, e[k + 14], 9, -1019803690), h = gg(h, j, f, g, e[k + 3], 14, -187363961), g = gg(g, h, j, f, e[k + 8], 20, 1163531501), f = gg(f, g, h, j, e[k + 13], 5, -1444681467), j = gg(j, f, g, h, e[k + 2], 9, -51403784), h = gg(h, j, f, g, e[k + 7], 14, 1735328473), g = gg(g, h, j, f, e[k + 12], 20, -1926607734), f = hh(f, g, h, j, e[k + 5], 4, -378558), j = hh(j, f, g, h, e[k + 8], 11, -2022574463), h = hh(h, j, f, g, e[k + 11], 16, 1839030562), g = hh(g, h, j, f, e[k + 14], 23, -35309556), f = hh(f, g, h, j, e[k + 1], 4, -1530992060), j = hh(j, f, g, h, e[k + 4], 11, 1272893353), h = hh(h, j, f, g, e[k + 7], 16, -155497632), g = hh(g, h, j, f, e[k + 10], 23, -1094730640), f = hh(f, g, h, j, e[k + 13], 4, 681279174), j = hh(j, f, g, h, e[k + 0], 11, -358537222), h = hh(h, j, f, g, e[k + 3], 16, -722521979), g = hh(g, h, j, f, e[k + 6], 23, 76029189), f = hh(f, g, h, j, e[k + 9], 4, -640364487), j = hh(j, f, g, h, e[k + 12], 11, -421815835), h = hh(h, j, f, g, e[k + 15], 16, 530742520), g = hh(g, h, j, f, e[k + 2], 23, -995338651), f = ii(f, g, h, j, e[k + 0], 6, -198630844), j = ii(j, f, g, h, e[k + 7], 10, 1126891415), h = ii(h, j, f, g, e[k + 14], 15, -1416354905), g = ii(g, h, j, f, e[k + 5], 21, -57434055), f = ii(f, g, h, j, e[k + 12], 6, 1700485571), j = ii(j, f, g, h, e[k + 3], 10, -1894986606), h = ii(h, j, f, g, e[k + 10], 15, -1051523), g = ii(g, h, j, f, e[k + 1], 21, -2054922799), f = ii(f, g, h, j, e[k + 8], 6, 1873313359), j = ii(j, f, g, h, e[k + 15], 10, -30611744), h = ii(h, j, f, g, e[k + 6], 15, -1560198380), g = ii(g, h, j, f, e[k + 13], 21, 1309151649), f = ii(f, g, h, j, e[k + 4], 6, -145523070), j = ii(j, f, g, h, e[k + 11], 10, -1120210379), h = ii(h, j, f, g, e[k + 2], 15, 718787259), g = ii(g, h, j, f, e[k + 9], 21, -343485551), f = safe_add(f, l), g = safe_add(g, m), h = safe_add(h, n), j = safe_add(j, o);
  }return [f, g, h, j];
}function binl2hex(a) {
  for (var b = "0123456789abcdef", c = "", d = 0; d < 4 * a.length; d++) c += b.charAt(15 & a[d >> 2] >> 8 * (d % 4) + 4) + b.charAt(15 & a[d >> 2] >> 8 * (d % 4));return c;
}function binl2b64(a) {
  for (var b = "", c = 0; c < 32 * a.length; c += 6) b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63 & a[c >> 5] << c % 32 | 63 & a[c >> 6] >> 32 - c % 32);return b;
}function str2binl(a) {
  for (var b = (a.length + 8 >> 6) + 1, c = Array(16 * b), d = 0; d < 16 * b; d++) c[d] = 0;for (var d = 0; d < a.length; d++) c[d >> 2] |= (255 & a.charCodeAt(d)) << 8 * (d % 4);return c[d >> 2] |= 128 << 8 * (d % 4), c[16 * b - 2] = 8 * a.length, c;
}function strw2binl(a) {
  for (var b = (a.length + 4 >> 5) + 1, c = Array(16 * b), d = 0; d < 16 * b; d++) c[d] = 0;for (var d = 0; d < a.length; d++) c[d >> 1] |= a.charCodeAt(d) << 16 * (d % 2);return c[d >> 1] |= 128 << 16 * (d % 2), c[16 * b - 2] = 16 * a.length, c;
}function hexMD5(a) {
  return binl2hex(coreMD5(str2binl(a)));
}function hexMD5w(a) {
  return binl2hex(coreMD5(strw2binl(a)));
}function b64MD5(a) {
  return binl2b64(coreMD5(str2binl(a)));
}function b64MD5w(a) {
  return binl2b64(coreMD5(strw2binl(a)));
}function calcMD5(a) {
  return binl2hex(coreMD5(str2binl(a)));
}module.exports = { hexMD5: hexMD5 };