var M = wx.$T;
var HOST = M[1698];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1807] + username);
        let that = this;
        wx.request({
            url: M[1720] + HOST + M[1808] + partner_id + '/' + game_pkg,
            method: M[220],
            dataType: M[1171],
            header: {
                'content-type': M[364] // 默认值
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
            appId: M[1809],
            path: M[1810] + username + M[1811] + ts + M[1812] + sign + M[1813] + game_id,
            extraData: {
                foo: M[1814]
            },
            envVersion: M[1769],
            success(res) {
                wx.showToast({
                    title: M[1815]
                });
            }
        });
    }

}