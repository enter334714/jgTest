var PLATFORM = 0; //0主干版本、1微信版本
var versionNameMap = {
    weixingf: "_weixin", weixin: "_weixin", qqmd: "_weixin", xy: "_weixin", cg: "_weixin", ty: "_weixin", ly: "_weixin", fs: "_weixin", sg: "_weixin", fj: "_weixin", gjh: "_weixin", ws: "_weixin", wd: "_weixin", hy: "_weixin", kl: "_weixin", qy: "_weixin", jx: "_weixin", xh: "_weixin", xc: "_weixin", yy: "_weixin", lg: "_weixin", jy: "_weixin", ll: "_weixin",  //微信小游戏转端包
    ts: "_weixin_act", //光奈
    yyxy: "_liulian", //流连
    ios: "_ios", iosts: "_ios",
};
var PF_CONFIG = {
    loadingType: 0,  //loading背景
    configType: (versionNameMap[PF_INFO['version_name']] ? versionNameMap[PF_INFO['version_name']] : ""),
    exposeType: (PF_INFO['pkgName'] == undefined || PF_INFO['pkgName'] == "tjqy_tjqyazcsb_A" ? "_a" : "_a"),
    autoCreteRole: (PF_INFO['pkgName'] == 'tjqy_tjlyawy_CT' || PF_INFO['pkgName'] == 'tjqy_tjlyfk_CR')
};
if (PF_CONFIG) {
    for (var key in PF_CONFIG) {
        PF_INFO[key] = PF_CONFIG[key];
    }
}