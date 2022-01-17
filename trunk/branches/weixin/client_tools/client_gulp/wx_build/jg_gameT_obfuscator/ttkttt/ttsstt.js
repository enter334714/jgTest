var M = wx.$T;
var HOST = M[1699];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1808] + username);
        let that = this;
        wx.request({
            url: M[1721] + HOST + M[1809] + partner_id + '/' + game_pkg,
            method: M[220],
            dataType: M[1171],
            header: {
                'content-type': M[365] // 默认值
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
            appId: M[1810],
            path: M[1811] + username + M[1812] + ts + M[1813] + sign + M[1814] + game_id,
            extraData: {
                foo: M[1815]
            },
            envVersion: M[1770],
            success(res) {
                wx.showToast({
                    title: M[1816]
                });
            }
        });
    }

}