var M = wx.$T;
var HOST = M[1690];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1799] + username);
        let that = this;
        wx.request({
            url: M[1712] + HOST + M[1800] + partner_id + '/' + game_pkg,
            method: M[218],
            dataType: M[1169],
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
            appId: M[1801],
            path: M[1802] + username + M[1803] + ts + M[1804] + sign + M[1805] + game_id,
            extraData: {
                foo: M[1806]
            },
            envVersion: M[1761],
            success(res) {
                wx.showToast({
                    title: M[1807]
                });
            }
        });
    }

}