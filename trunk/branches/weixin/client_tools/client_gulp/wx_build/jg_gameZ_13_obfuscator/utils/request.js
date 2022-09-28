var Z = wx.$L;
let apiRequest = (url, method, data, header = {}, showLoading = false, loadingText = "") => {
    let promise = new Promise(function (resolve, reject) {
        if (showLoading) {
            wx.showLoading({ title: loadingText ? loadingText : '正在请求' });
        }
        wx.request({
            url: url,
            data: data ? data : null,
            method: method,
            header: header ? header : { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
            complete: function () {
                wx.hideLoading();
            },
            success: function (res) {
                resolve(res.data);
            },
            fail: function (res) {
                reject(res.errMsg);
            }
        });
    });
    return promise;
};
export default apiRequest;