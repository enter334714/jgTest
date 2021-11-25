var _ = wx.y$;
var HOST = _[28011];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28012]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28013] + username);
        let that = this;
        wx.request({
            url: _[24744] + HOST + _[28014] + partner_id + '/' + game_pkg,
            method: _[28015],
            dataType: _[5787],
            header: {
                'content-type': _[28016] // 默认值
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
            appId: _[28017],
            path: _[28018] + username + _[28019] + ts + _[28020] + sign + _[28021] + game_id,
            extraData: {
                foo: _[19983]
            },
            envVersion: _[28022],
            success(res) {
                wx.showToast({
                    title: _[28023]
                });
            }
        });
    }

}