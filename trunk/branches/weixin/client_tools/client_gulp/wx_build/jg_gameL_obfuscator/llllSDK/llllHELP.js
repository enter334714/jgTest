var W = wx.$l;
var HOST = W[28533];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[28534]);
        let sign = "";
        let ts = Date.now();
        console.log(W[28535] + username);
        let that = this;
        wx.request({
            url: W[25278] + HOST + W[28536] + partner_id + '/' + game_pkg,
            method: W[625],
            dataType: W[6443],
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
            appId: W[28537],
            path: W[28538] + username + W[28539] + ts + W[28540] + sign + W[28541] + game_id,
            extraData: {
                foo: W[20572]
            },
            envVersion: W[28542],
            success(res) {
                wx.showToast({
                    title: W[28543]
                });
            }
        });
    }

}