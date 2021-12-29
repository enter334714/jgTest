var M = wx.$T;
var HOST = M[1696];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1805] + username);
        let that = this;
        wx.request({
            url: M[1718] + HOST + M[1806] + partner_id + '/' + game_pkg,
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
            appId: M[1807],
            path: M[1808] + username + M[1809] + ts + M[1810] + sign + M[1811] + game_id,
            extraData: {
                foo: M[1812]
            },
            envVersion: M[1767],
            success(res) {
                wx.showToast({
                    title: M[1813]
                });
            }
        });
    }

}