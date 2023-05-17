var _ = wx.y$;
var HOST = _[54613];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[54614]);
        let sign = "";
        let ts = Date.now();
        console.log(_[54615] + username);
        let that = this;
        wx.request({
            url: _[41670] + HOST + _[54616] + partner_id + '/' + game_pkg,
            method: _[54617],
            dataType: _[5910],
            header: {
                'content-type': _[54618] // 默认值
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
            appId: _[54619],
            path: _[54620] + username + _[54621] + ts + _[54622] + sign + _[54623] + game_id,
            extraData: {
                foo: _[31487]
            },
            envVersion: _[54624],
            success(res) {
                wx.showToast({
                    title: _[54625]
                });
            }
        });
    }

}