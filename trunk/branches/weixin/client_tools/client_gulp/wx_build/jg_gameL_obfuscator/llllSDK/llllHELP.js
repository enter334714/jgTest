var W = wx.$l;
var HOST = W[29382];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[29383]);
        let sign = "";
        let ts = Date.now();
        console.log(W[29384] + username);
        let that = this;
        wx.request({
            url: W[25450] + HOST + W[29385] + partner_id + '/' + game_pkg,
            method: W[28821],
            dataType: W[5847],
            header: {
                'content-type': W[28936] // 默认值
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
            appId: W[29386],
            path: W[29387] + username + W[29388] + ts + W[29389] + sign + W[29390] + game_id,
            extraData: {
                foo: W[20381]
            },
            envVersion: W[29391],
            success(res) {
                wx.showToast({
                    title: W[29392]
                });
            }
        });
    }

}