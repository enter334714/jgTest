var W = wx.$l;
var HOST = W[28098];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[28099]);
        let sign = "";
        let ts = Date.now();
        console.log(W[28100] + username);
        let that = this;
        wx.request({
            url: W[28101] + HOST + W[28102] + partner_id + '/' + game_pkg,
            method: W[591],
            dataType: W[6360],
            header: {
                'content-type': W[726] // 默认值
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
            appId: W[28103],
            path: W[28104] + username + W[28105] + ts + W[28106] + sign + W[28107] + game_id,
            extraData: {
                foo: W[20352]
            },
            envVersion: W[28108],
            success(res) {
                wx.showToast({
                    title: W[28109]
                });
            }
        });
    }

}