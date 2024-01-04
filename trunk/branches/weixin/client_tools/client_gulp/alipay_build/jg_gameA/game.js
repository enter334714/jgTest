

var wx = my;

// require("./libs/my-adapter.js");
// console.info("0 进入游戏包");
// require("./libs/libs.min.js");
// console.info("1 进入游戏包")
// require("./libs/laya.Alipaymini.js");
// console.info("2 进入游戏包")
// // Laya["ALIMiniAdapter"].init();
// require("./libs/init.min.js");
// console.info("3 加载游戏");
my.showLoading({ content: '正在加载' });
require("./wx_aksdk.js");
var loadLibs = function() {
    console.log("libs 分包加载");
    my.loadSubpackage({
        name: 'libs',
        success: function(res) {
            console.log("libs 分包加载成功:");           
            console.log("libs 分包加载:",res)
            // if (res && res.errMsg == "loadSubpackage:ok") {
                window.sdkInit();
            // } else {
            //     // setTimeout(function() {
            //     //     loadLibs();
            //     // }, 500);
            // }
        },
        fail: function(res) {
            console.log("libs 分包加载失败:",res);           
            // setTimeout(function() {
            //     loadLibs();
            // }, 500);
        },
    });
    // loadLibsTask && loadLibsTask.onProgressUpdate(res => {
        // console.log('libs 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
    // });
}

//监听小游戏切前台事件
my.onShow(function (res) {
    my.onShowData = res;
    if (my.onShowCallback && my.onShowData) {
        console.info("小游戏切前台事件，场景值："+my.onShowData.scene);
        my.onShowCallback(my.onShowData);
        my.onShowData = null;
    }
})

my.onHide(function(){
  console.info("小游戏进入后台");
  if (my.onHideCallBack) {
    my.onHideCallBack();
}
});
loadLibs();
