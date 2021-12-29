var W = wx.$l;
var HOST = W[29362];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(W[29363]);
        let sign = "";
        let ts = Date.now();
        console.log(W[29364] + username);
        let that = this;
        wx.request({
            url: W[25966] + HOST + W[29365] + partner_id + '/' + game_pkg,
            method: W[625],
            dataType: W[6505],
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
            appId: W[29366],
            path: W[29367] + username + W[29368] + ts + W[29369] + sign + W[29370] + game_id,
            extraData: {
                foo: W[20971]
            },
            envVersion: W[29371],
            success(res) {
                wx.showToast({
                    title: W[29372]
                });
            }
        });
    }

}