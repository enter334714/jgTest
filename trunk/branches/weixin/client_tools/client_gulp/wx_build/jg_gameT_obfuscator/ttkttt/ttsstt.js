var M = wx.$T;
var HOST = M[1705];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[1814] + username);
        let that = this;
        wx.request({
            url: M[1727] + HOST + M[1815] + partner_id + '/' + game_pkg,
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
            appId: M[1816],
            path: M[1817] + username + M[1818] + ts + M[1819] + sign + M[1820] + game_id,
            extraData: {
                foo: M[1821]
            },
            envVersion: M[1776],
            success(res) {
                wx.showToast({
                    title: M[1822]
                });
            }
        });
    }

}