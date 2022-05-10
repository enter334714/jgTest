var _ = wx.y$;
var HOST = _[30306];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[30307]);
        let sign = "";
        let ts = Date.now();
        console.log(_[30308] + username);
        let that = this;
        wx.request({
            url: _[26698] + HOST + _[30309] + partner_id + '/' + game_pkg,
            method: _[30310],
            dataType: _[219],
            header: {
                'content-type': _[30311] // 默认值
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
        var appid = wx.getStorageSync(_[30312]);
        var appid = appid ? appid : _[30313];
        wx.navigateToMiniProgram({
            appId: appid,
            path: _[30314] + username + _[30315] + ts + _[30316] + sign + _[30317] + game_id,
            extraData: {
                foo: _[21450]
            },
            envVersion: _[30318],
            success(res) {
                wx.showToast({
                    title: _[30319]
                });
            }
        });
    }

}