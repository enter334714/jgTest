var W = wx.$l;
var HOST = W[29708];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[29709]);
        let sign = "";
        let ts = Date.now();
        console.log(W[29710] + username);
        let that = this;
        wx.request({
            url: W[25664] + HOST + W[29711] + partner_id + '/' + game_pkg,
            method: W[29137],
            dataType: W[5871],
            header: {
                'content-type': W[29255] // 默认值
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
            appId: W[29712],
            path: W[29713] + username + W[29714] + ts + W[29715] + sign + W[29716] + game_id,
            extraData: {
                foo: W[20524]
            },
            envVersion: W[29717],
            success(res) {
                wx.showToast({
                    title: W[29718]
                });
            }
        });
    }

}