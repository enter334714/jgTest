var M = wx.$T;
var HOST = M[321635];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[321744] + username);
        let that = this;
        wx.request({
            url: M[321657] + HOST + M[321745] + partner_id + '/' + game_pkg,
            method: M[320218],
            dataType: M[321133],
            header: {
                'content-type': M[320362] // 默认值
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
            appId: M[321746],
            path: M[321747] + username + M[321748] + ts + M[321749] + sign + M[321750] + game_id,
            extraData: {
                foo: M[321751]
            },
            envVersion: M[321706],
            success(res) {
                wx.showToast({
                    title: M[321752]
                });
            }
        });
    }

}