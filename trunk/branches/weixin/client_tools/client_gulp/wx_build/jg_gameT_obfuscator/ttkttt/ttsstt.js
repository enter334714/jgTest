var M = wx.$T;
var HOST = M[1645];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1754] + username);
        let that = this;
        wx.request({
            url: M[1667] + HOST + M[1755] + partner_id + '/' + game_pkg,
            method: M[218],
            dataType: M[1134],
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
            appId: M[1756],
            path: M[1757] + username + M[1758] + ts + M[1759] + sign + M[1760] + game_id,
            extraData: {
                foo: M[1761]
            },
            envVersion: M[1716],
            success(res) {
                wx.showToast({
                    title: M[1762]
                });
            }
        });
    }

}