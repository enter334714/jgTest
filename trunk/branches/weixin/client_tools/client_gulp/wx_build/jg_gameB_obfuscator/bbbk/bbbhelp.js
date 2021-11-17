var _ = wx.y$;
var HOST = _[27810];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[27811]);
        let sign = "";
        let ts = Date.now();
        console.log(_[27812] + username);
        let that = this;
        wx.request({
            url: _[24574] + HOST + _[27813] + partner_id + '/' + game_pkg,
            method: _[27814],
            dataType: _[5763],
            header: {
                'content-type': _[27815] // 默认值
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
            appId: _[27816],
            path: _[27817] + username + _[27818] + ts + _[27819] + sign + _[27820] + game_id,
            extraData: {
                foo: _[19878]
            },
            envVersion: _[27821],
            success(res) {
                wx.showToast({
                    title: _[27822]
                });
            }
        });
    }

}