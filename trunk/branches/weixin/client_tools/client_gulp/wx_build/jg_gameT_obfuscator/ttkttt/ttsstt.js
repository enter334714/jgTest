var M = wx.$T;
var HOST = M[1635];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1744] + username);
        let that = this;
        wx.request({
            url: M[1657] + HOST + M[1745] + partner_id + '/' + game_pkg,
            method: M[218],
            dataType: M[1133],
            header: {
                'content-type': M[362] // 默认值
            },
            data: {
                username: username,
                ts: ts
            },
            success: function (res) {
                sign = res.data.data;
                that.Getto(username, ts, sign, game_id);
            }
        });
    }
    Getto(username, ts, sign, game_id) {
        wx.navigateToMiniProgram({
            appId: M[1746],
            path: M[1747] + username + M[1748] + ts + M[1749] + sign + M[1750] + game_id,
            extraData: {
                foo: M[1751]
            },
            envVersion: M[1706],
            success(res) {
                wx.showToast({
                    title: M[1752]
                });
            }
        });
    }

}