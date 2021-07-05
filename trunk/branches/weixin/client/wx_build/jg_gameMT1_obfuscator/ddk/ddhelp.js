var $c = wx.$b;
var HOST = $c[106];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync($c[107]);
        let sign = "";
        let ts = Date.now();
        console.log($c[108] + username);
        let that = this;
        wx.request({
            url: $c[109] + HOST + $c[110] + partner_id + $c[111] + game_pkg,
            method: $c[112],
            dataType: $c[113],
            header: {
                'content-type': $c[114] // 默认值
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
            appId: $c[115],
            path: $c[116] + username + $c[117] + ts + $c[118] + sign + $c[119] + game_id,
            extraData: {
                foo: $c[120]
            },
            envVersion: $c[121],
            success(res) {
                wx.showToast({
                    title: $c[122]
                });
            }
        });
    }

}