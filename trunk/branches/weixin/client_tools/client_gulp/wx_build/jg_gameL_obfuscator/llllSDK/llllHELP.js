var W = wx.$l;
var HOST = W[188304];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[188305]);
        let sign = "";
        let ts = Date.now();
        console.log(W[188306] + username);
        let that = this;
        wx.request({
            url: W[185080] + HOST + W[188307] + partner_id + '/' + game_pkg,
            method: W[160591],
            dataType: W[166386],
            header: {
                'content-type': W[160726] // 默认值
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
            appId: W[188308],
            path: W[188309] + username + W[188310] + ts + W[188311] + sign + W[188312] + game_id,
            extraData: {
                foo: W[180443]
            },
            envVersion: W[188313],
            success(res) {
                wx.showToast({
                    title: W[188314]
                });
            }
        });
    }

}