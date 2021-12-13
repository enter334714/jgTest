var W = wx.$l;
var HOST = W[28912];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[28913]);
        let sign = "";
        let ts = Date.now();
        console.log(W[28914] + username);
        let that = this;
        wx.request({
            url: W[25525] + HOST + W[28915] + partner_id + '/' + game_pkg,
            method: W[625],
            dataType: W[6466],
            header: {
                'content-type': W[760] // 默认值
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
            appId: W[28916],
            path: W[28917] + username + W[28918] + ts + W[28919] + sign + W[28920] + game_id,
            extraData: {
                foo: W[20732]
            },
            envVersion: W[28921],
            success(res) {
                wx.showToast({
                    title: W[28922]
                });
            }
        });
    }

}