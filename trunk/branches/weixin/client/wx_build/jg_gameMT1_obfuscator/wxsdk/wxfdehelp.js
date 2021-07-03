var $c = wx.$b;
var HOST = $c[53956];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync($c[53957]);
        let sign = "";
        let ts = Date.now();
        console.log($c[53958] + username);
        let that = this;
        wx.request({
            url: $c[53959] + HOST + $c[53960] + partner_id + $c[53961] + game_pkg,
            method: $c[53962],
            dataType: $c[53963],
            header: {
                'content-type': $c[53964] // 默认值
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
            appId: $c[53965],
            path: $c[53966] + username + $c[53967] + ts + $c[53968] + sign + $c[53969] + game_id,
            extraData: {
                foo: $c[53970]
            },
            envVersion: $c[53971],
            success(res) {
                wx.showToast({
                    title: $c[53972]
                });
            }
        });
    }

}