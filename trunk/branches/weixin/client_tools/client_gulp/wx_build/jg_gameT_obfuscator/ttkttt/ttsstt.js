var M = wx.$T;
var HOST = M[1689];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1798] + username);
        let that = this;
        wx.request({
            url: M[1711] + HOST + M[1799] + partner_id + '/' + game_pkg,
            method: M[1111],
            dataType: M[393],
            header: {
                'content-type': M[1247] // 默认值
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
            appId: M[1800],
            path: M[1801] + username + M[1802] + ts + M[1803] + sign + M[1804] + game_id,
            extraData: {
                foo: M[1805]
            },
            envVersion: M[1760],
            success(res) {
                wx.showToast({
                    title: M[1806]
                });
            }
        });
    }

}