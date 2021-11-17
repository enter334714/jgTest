var W = wx.$l;
var HOST = W[28316];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[28317]);
        let sign = "";
        let ts = Date.now();
        console.log(W[28318] + username);
        let that = this;
        wx.request({
            url: W[24574] + HOST + W[28319] + partner_id + '/' + game_pkg,
            method: W[27769],
            dataType: W[5763],
            header: {
                'content-type': W[27884] // 默认值
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
            appId: W[28320],
            path: W[28321] + username + W[28322] + ts + W[28323] + sign + W[28324] + game_id,
            extraData: {
                foo: W[19878]
            },
            envVersion: W[28325],
            success(res) {
                wx.showToast({
                    title: W[28326]
                });
            }
        });
    }

}