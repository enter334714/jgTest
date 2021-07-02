var $c = wx.$b;
var HOST = $c[53940];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync($c[53941]);
        let sign = "";
        let ts = Date.now();
        console.log($c[53942] + username);
        let that = this;
        wx.request({
            url: $c[53943] + HOST + $c[53944] + partner_id + $c[53945] + game_pkg,
            method: $c[53946],
            dataType: $c[53947],
            header: {
                'content-type': $c[53948] // 默认值
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
            appId: $c[53949],
            path: $c[53950] + username + $c[53951] + ts + $c[53952] + sign + $c[53953] + game_id,
            extraData: {
                foo: $c[53954]
            },
            envVersion: $c[53955],
            success(res) {
                wx.showToast({
                    title: $c[53956]
                });
            }
        });
    }

}