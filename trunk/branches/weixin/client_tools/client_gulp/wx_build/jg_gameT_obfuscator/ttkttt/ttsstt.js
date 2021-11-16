var M = wx.$T;
var HOST = M[1644];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1753] + username);
        let that = this;
        wx.request({
            url: M[1666] + HOST + M[1754] + partner_id + '/' + game_pkg,
            method: M[1101],
            dataType: M[393],
            header: {
                'content-type': M[1236] // 默认值
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
            appId: M[1755],
            path: M[1756] + username + M[1757] + ts + M[1758] + sign + M[1759] + game_id,
            extraData: {
                foo: M[1760]
            },
            envVersion: M[1715],
            success(res) {
                wx.showToast({
                    title: M[1761]
                });
            }
        });
    }

}