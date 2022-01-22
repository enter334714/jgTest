var W = wx.$l;
var HOST = W[29539];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[29540]);
        let sign = "";
        let ts = Date.now();
        console.log(W[29541] + username);
        let that = this;
        wx.request({
            url: W[26504] + HOST + W[29542] + partner_id + '/' + game_pkg,
            method: W[626],
            dataType: W[1269],
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
            appId: W[29543],
            path: W[29544] + username + W[29545] + ts + W[29546] + sign + W[29547] + game_id,
            extraData: {
                foo: W[21470]
            },
            envVersion: W[29548],
            success(res) {
                wx.showToast({
                    title: W[29549]
                });
            }
        });
    }

}