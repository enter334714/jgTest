var W = wx.$l;
var HOST = W[188165];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[188166]);
        let sign = "";
        let ts = Date.now();
        console.log(W[188167] + username);
        let that = this;
        wx.request({
            url: W[184447] + HOST + W[188168] + partner_id + '/' + game_pkg,
            method: W[187626],
            dataType: W[165739],
            header: {
                'content-type': W[187737] // 默认值
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
            appId: W[188169],
            path: W[188170] + username + W[188171] + ts + W[188172] + sign + W[188173] + game_id,
            extraData: {
                foo: W[179788]
            },
            envVersion: W[188174],
            success(res) {
                wx.showToast({
                    title: W[188175]
                });
            }
        });
    }

}