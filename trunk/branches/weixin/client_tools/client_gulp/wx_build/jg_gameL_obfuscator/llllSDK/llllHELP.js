var W = wx.$l;
var HOST = W[27728];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[27729]);
        let sign = "";
        let ts = Date.now();
        console.log(W[27730] + username);
        let that = this;
        wx.request({
            url: W[27731] + HOST + W[27732] + partner_id + '/' + game_pkg,
            method: W[27563],
            dataType: W[5737],
            header: {
                'content-type': W[27674] // 默认值
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
            appId: W[27733],
            path: W[27734] + username + W[27735] + ts + W[27736] + sign + W[27737] + game_id,
            extraData: {
                foo: W[19786]
            },
            envVersion: W[27738],
            success(res) {
                wx.showToast({
                    title: W[27739]
                });
            }
        });
    }

}