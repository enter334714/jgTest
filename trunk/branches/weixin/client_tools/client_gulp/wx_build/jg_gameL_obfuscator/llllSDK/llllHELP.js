var W = wx.$l;
var HOST = W[29364];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[29365]);
        let sign = "";
        let ts = Date.now();
        console.log(W[29366] + username);
        let that = this;
        wx.request({
            url: W[25432] + HOST + W[29367] + partner_id + '/' + game_pkg,
            method: W[29197],
            dataType: W[5848],
            header: {
                'content-type': W[29310] // 默认值
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
            appId: W[29368],
            path: W[29369] + username + W[29370] + ts + W[29371] + sign + W[29372] + game_id,
            extraData: {
                foo: W[20382]
            },
            envVersion: W[29373],
            success(res) {
                wx.showToast({
                    title: W[29374]
                });
            }
        });
    }

}