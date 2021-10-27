var W = wx.$l;
var HOST = W[27976];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[27977]);
        let sign = "";
        let ts = Date.now();
        console.log(W[27978] + username);
        let that = this;
        wx.request({
            url: W[27979] + HOST + W[27980] + partner_id + '/' + game_pkg,
            method: W[590],
            dataType: W[6334],
            header: {
                'content-type': W[725] // 默认值
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
            appId: W[27981],
            path: W[27982] + username + W[27983] + ts + W[27984] + sign + W[27985] + game_id,
            extraData: {
                foo: W[20292]
            },
            envVersion: W[27986],
            success(res) {
                wx.showToast({
                    title: W[27987]
                });
            }
        });
    }

}