var M = wx.$T;
var HOST = M[1683];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1792] + username);
        let that = this;
        wx.request({
            url: M[1705] + HOST + M[1793] + partner_id + '/' + game_pkg,
            method: M[1105],
            dataType: M[393],
            header: {
                'content-type': M[1241] // 默认值
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
            appId: M[1794],
            path: M[1795] + username + M[1796] + ts + M[1797] + sign + M[1798] + game_id,
            extraData: {
                foo: M[1799]
            },
            envVersion: M[1754],
            success(res) {
                wx.showToast({
                    title: M[1800]
                });
            }
        });
    }

}