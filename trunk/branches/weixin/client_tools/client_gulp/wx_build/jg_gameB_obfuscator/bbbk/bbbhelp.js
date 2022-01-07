var _ = wx.y$;
var HOST = _[28858];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28859]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28860] + username);
        let that = this;
        wx.request({
            url: _[25450] + HOST + _[28861] + partner_id + '/' + game_pkg,
            method: _[28862],
            dataType: _[5847],
            header: {
                'content-type': _[28863] // 默认值
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
            appId: _[28864],
            path: _[28865] + username + _[28866] + ts + _[28867] + sign + _[28868] + game_id,
            extraData: {
                foo: _[20381]
            },
            envVersion: _[28869],
            success(res) {
                wx.showToast({
                    title: _[28870]
                });
            }
        });
    }

}