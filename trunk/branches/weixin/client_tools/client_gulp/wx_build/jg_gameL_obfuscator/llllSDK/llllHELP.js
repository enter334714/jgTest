var W = wx.$l;
var HOST = W[29535];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[29536]);
        let sign = "";
        let ts = Date.now();
        console.log(W[29537] + username);
        let that = this;
        wx.request({
            url: W[26095] + HOST + W[29538] + partner_id + '/' + game_pkg,
            method: W[626],
            dataType: W[6532],
            header: {
                'content-type': W[763] // 默认值
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
            appId: W[29539],
            path: W[29540] + username + W[29541] + ts + W[29542] + sign + W[29543] + game_id,
            extraData: {
                foo: W[21057]
            },
            envVersion: W[29544],
            success(res) {
                wx.showToast({
                    title: W[29545]
                });
            }
        });
    }

}